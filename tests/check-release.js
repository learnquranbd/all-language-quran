/**
 * Release integrity — the things that silently ship a broken build.
 *
 * ?v= appears ~175 times across index.html and sw.js and is bumped by hand on
 * every release. One missed occurrence serves a stale asset against a fresh
 * cache name, which looks like a random bug days later.
 */
const { ROOT, fs, path } = require('./lib.js');

const problems = [];
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');

/* --- one version everywhere --- */
const htmlVers = [...new Set([...html.matchAll(/[?&]v=(\d+)/g)].map((m) => m[1]))];
const swVers = [...new Set([...sw.matchAll(/[?&]v=(\d+)/g)].map((m) => m[1]))];
const cacheName = (sw.match(/const CACHE = '([^']+)'/) || [])[1];
const cacheVer = (cacheName || '').match(/(\d+)$/);

if (htmlVers.length !== 1) problems.push(`index.html mixes ?v= values: ${htmlVers.join(', ')}`);
if (swVers.length !== 1) problems.push(`sw.js mixes ?v= values: ${swVers.join(', ')}`);
if (htmlVers.length === 1 && swVers.length === 1 && htmlVers[0] !== swVers[0]) {
  problems.push(`index.html is at v${htmlVers[0]} but sw.js is at v${swVers[0]}`);
}
if (!cacheVer) problems.push(`sw.js CACHE name "${cacheName}" has no trailing version`);
else if (htmlVers.length === 1 && cacheVer[1] !== htmlVers[0]) {
  problems.push(`cache is ${cacheName} but assets are at v${htmlVers[0]} — a bump was missed`);
}

/* --- every script the page loads must exist on disk.
 * Skips paths built at runtime: the language pack is injected as
 * 'js/i18n/' + lang + '.js', which is not a literal file path. --- */
for (const m of html.matchAll(/<script[^>]+src="(js\/[^"?+]+)"/g)) {
  if (m[1].includes("'")) continue;
  if (!fs.existsSync(path.join(ROOT, m[1]))) problems.push(`index.html loads ${m[1]} which does not exist`);
}
/* --- and every file the service worker precaches --- */
for (const m of sw.matchAll(/'((?:js|css|data|icons|webfonts)\/[^'?]+)/g)) {
  if (!fs.existsSync(path.join(ROOT, m[1]))) problems.push(`sw.js precaches ${m[1]} which does not exist`);
}

/* --- lazily loaded bundles must still be precached, or offline loses them --- */
const LAZY = ['js/seerah-data.js', 'js/sahaba-data.js', 'js/why-islam-data.js',
  'js/prophets-data.js', 'js/learn-quranic-arabic-data.js', 'js/tadabbur-data.js',
  'js/prophets-articles.js', 'js/sahaba-articles.js',
  'js/article-view.js', 'js/article-index.js', 'js/hope-data.js', 'js/hope.js'];
for (const f of LAZY) {
  if (!sw.includes(f)) problems.push(`${f} is lazy-loaded but not precached — it would be unavailable offline`);
  if (html.includes(`src="${f}?`)) problems.push(`${f} is meant to be lazy but is still loaded eagerly from index.html`);
}

/* --- Tadabbur articles are sharded per surah and fetched on demand (the
 * service worker caches a shard once a reader opens it); the monolithic file
 * must be gone, or the app ships two copies of the same prose. --- */
if (!fs.existsSync(path.join(ROOT, 'js/tadabbur-articles')) || !fs.readdirSync(path.join(ROOT, 'js/tadabbur-articles')).some((f) => /^\d+\.js$/.test(f))) problems.push('js/tadabbur-articles/ has no surah shards');
if (fs.existsSync(path.join(ROOT, 'js/tadabbur-articles.js'))) problems.push('js/tadabbur-articles.js still exists — the articles live in js/tadabbur-articles/<surah>.js now');
if (sw.includes('js/tadabbur-articles.js')) problems.push('sw.js still precaches the removed js/tadabbur-articles.js');

/* --- every language pack must be precached --- */
for (const f of fs.readdirSync(path.join(ROOT, 'js/i18n'))) {
  if (f.endsWith('.js') && !sw.includes('js/i18n/' + f)) problems.push(`js/i18n/${f} is not precached`);
}

module.exports = {
  name: 'release integrity',
  run() {
    return { ok: problems.length === 0, detail: `assets at v${htmlVers[0] || '?'}, cache ${cacheName}`, problems };
  },
};
