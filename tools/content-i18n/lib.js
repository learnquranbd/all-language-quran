// Shared helpers for the module-content i18n wave: which English strings are still missing from the
// 13 content dictionaries, which namespace file each belongs in, and masking of embedded Arabic.
const L = require('../../tests/lib.js');
const { fs, path, ROOT } = L;
const WORK = path.join(__dirname, 'work');
const LANGS = ['ur', 'ar', 'hi', 'id', 'es', 'fr', 'ru', 'de', 'tr', 'zh', 'fa', 'ja', 'ms'];

/* Modules whose text only they display get their own file, data/content-i18n/<ns>/<lang>.json, fetched
 * when the tab opens; text shown in several places (dashboard, menus) stays in the shared dictionary. */
const NS_BY_FILE = {
  'js/hope-data.js': 'hope', 'js/surah-names-data.js': 'surahnames', 'js/prophets-data.js': 'prophets',
  'js/mutashabihat-data.js': 'mutashabihat', 'js/handwriting-data.js': 'handwriting',
  'js/tajweed-data.js': 'tajweed', 'js/qaida-data.js': 'kids', 'js/learn-kids.js': 'kids',
};
const SHARED_CONSTS = new Set(['TAJWEED_LESSONS']);   // read by app.js, learn.js, quiz-center.js too
const SKIP_FILES = /tadabbur-data|-articles\.js$/;    // own pipeline / separate wave

const AR = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF';
const AR_RUN = new RegExp(`[${AR}]+(?:[ \\u00A0]+[${AR}]+)*`, 'g');
/** Replace each Arabic run with ⟦n⟧ so translators cannot reorder its combining marks. */
function mask(s) {
  const runs = [];
  // a bare ﷺ / ﷻ stays visible: translators place it, and it has no marks to reorder
  const t = s.replace(AR_RUN, (m) => { if (/^[\uFDF2\uFDFA\uFDFB \u00A0]+$/.test(m)) return m; runs.push(m); return `⟦${runs.length}⟧`; });
  return { t, runs };
}
function unmask(t, runs) { return t.replace(/⟦(\d+)⟧/g, (m, n) => runs[n - 1] ?? m); }

function dicts() {
  const D = {};
  for (const l of LANGS) D[l] = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/content-i18n', l + '.json'), 'utf8'));
  return D;
}

/** Every routed const and its English strings: [{file, name, ns, strings:[...]}]. */
function sources() {
  const INLINE = LANGS;
  const jsFiles = fs.readdirSync(path.join(ROOT, 'js')).filter((f) => f.endsWith('.js')).map((f) => 'js/' + f);
  const src = Object.fromEntries(jsFiles.map((f) => [f, fs.readFileSync(path.join(ROOT, f), 'utf8')]));
  const out = [];
  for (const rel of L.dataFiles()) {
    if (SKIP_FILES.test(rel)) continue;
    let sb; try { sb = L.load(rel); } catch (e) { continue; }
    for (const name of L.constNames(rel)) {
      const strings = [];
      const seen = new Set();
      (function walk(n) {
        if (n == null) return;
        if (Array.isArray(n)) return n.forEach(walk);
        if (typeof n !== 'object') return;
        const keys = Object.keys(n);
        if ((keys.includes('en') || keys.some((k) => /En$/.test(k))) && INLINE.filter((l) => keys.includes(l)).length >= 3) return;
        for (const [k, v] of Object.entries(n)) {
          if (k === 'en' || /En$/.test(k)) {
            for (const s of (Array.isArray(v) ? v : [v])) if (typeof s === 'string' && s.trim() && /[a-zA-Z]{3}/.test(s) && !seen.has(s)) { seen.add(s); strings.push(s); }
          } else walk(v);
        }
      })(L.get(sb, name));
      if (!strings.length) continue;
      const users = jsFiles.filter((f) => new RegExp('\\b' + name + '\\b').test(src[f]));
      if (!users.some((f) => /CI18N\.tr/.test(src[f]))) continue;     // not routed: needs code first
      const ns = SHARED_CONSTS.has(name) ? 'shared' : (NS_BY_FILE[rel] || 'shared');
      out.push({ file: rel, name, ns, strings });
    }
  }
  return out;
}
module.exports = { fs, path, ROOT, WORK, LANGS, NS_BY_FILE, mask, unmask, dicts, sources };
