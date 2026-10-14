// Merge every checked chunk of one language: Arabic placeholders restored from the source bytes, shared-bucket
// strings added to data/content-i18n/<lang>.json (never overwriting a key that has a value), namespace strings
// written to data/content-i18n/<ns>/<lang>.json (only those the shared file lacks; CI18N.tr reads the namespace
// file first, then the shared one). usage: node tools/content-i18n/merge.js <lang> [--write]
const { fs, path, ROOT, WORK, unmask, sources } = require('./lib.js');
const { execFileSync } = require('child_process');
const lang = process.argv[2], write = process.argv.includes('--write');
if (!lang) { console.log('usage: merge.js <lang> [--write]'); process.exit(1); }
const INDEX = JSON.parse(fs.readFileSync(path.join(WORK, 'index.json'), 'utf8'));
// ids whose English was rewritten again after packing (no longer in any source) would only add dead keys
const live = new Set(sources().flatMap((s) => s.strings));
const sharedPath = path.join(ROOT, 'data/content-i18n', lang + '.json');
const shared = JSON.parse(fs.readFileSync(sharedPath, 'utf8'));
const ns = {}, chunks = []; let addShared = 0, kept = 0;
for (const c of fs.readdirSync(WORK).filter((d) => /^C\d+$/.test(d)).sort((a, b) => a.slice(1) - b.slice(1))) {
  if (!fs.existsSync(path.join(WORK, c, `tr-${lang}.json`))) continue;
  try { execFileSync('node', [path.join(__dirname, 'check.js'), c, lang], { stdio: 'pipe' }); }
  catch (e) { console.log(`!! ${c} fails check.js; skipped`); continue; }
  const TR = JSON.parse(fs.readFileSync(path.join(WORK, c, `tr-${lang}.json`), 'utf8'));
  for (const [id, t] of Object.entries(TR)) {
    const src = INDEX[id]; if (!src || !live.has(src.en)) continue;
    const val = unmask(t, src.runs);
    if (shared[src.en] && String(shared[src.en]).trim()) { kept++; continue; }
    if (src.ns === 'shared') { shared[src.en] = val; addShared++; }
    else (ns[src.ns] = ns[src.ns] || {})[src.en] = val;
  }
  chunks.push(c);
}
console.log(`${lang}: chunks ${chunks.join(' ') || '(none)'}; shared +${addShared}; ` + Object.entries(ns).map(([k, v]) => `${k} ${Object.keys(v).length}`).join(', ') + `; ${kept} already in shared`);
if (write && chunks.length) {
  fs.writeFileSync(sharedPath, JSON.stringify(shared, null, 1));
  for (const [k, v] of Object.entries(ns)) {
    const p = path.join(ROOT, 'data/content-i18n', k, lang + '.json');
    fs.mkdirSync(path.dirname(p), { recursive: true });
    const prev = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
    fs.writeFileSync(p, JSON.stringify(Object.assign(prev, v)) + '\n');
  }
  console.log('written');
}
