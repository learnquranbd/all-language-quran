#!/usr/bin/env node
/**
 * Extract the untranslated English content strings for one data file.
 *
 *   node tools/i18n-extract.js js/learn-prayer-data.js prayer
 *
 * Writes tools/work/<name>-en.json: the union of English strings missing from
 * any of the 13 content-i18n dictionaries. Objects already carrying >=3 inline
 * language keys are skipped (their translations live in the data itself).
 */
const { fs, path, ROOT, load, get, constNames } = require('../tests/lib.js');

const rel = process.argv[2];
const out = process.argv[3];
if (!rel || !out) { console.error('usage: i18n-extract.js <js/xxx.js> <name>'); process.exit(1); }

const INLINE = ['fr', 'id', 'ur', 'tr', 'ar', 'zh', 'ja', 'es', 'ru', 'fa', 'hi', 'de', 'ms'];
const strings = new Set();
const sb = load(rel);
for (const name of constNames(rel)) {
  (function walk(n) {
    if (n == null) return;
    if (Array.isArray(n)) return n.forEach(walk);
    if (typeof n !== 'object') return;
    const keys = Object.keys(n);
    if ((keys.includes('en') || keys.some((k) => /En$/.test(k))) && INLINE.filter((l) => keys.includes(l)).length >= 3) return;
    for (const [k, val] of Object.entries(n)) {
      if (k === 'en' || /En$/.test(k)) {
        for (const s of (Array.isArray(val) ? val : [val])) {
          if (typeof s === 'string' && s.trim() && /[a-zA-Z]{3}/.test(s)) strings.add(s);
        }
      } else walk(val);
    }
  })(get(sb, name));
}

const langs = fs.readdirSync(path.join(ROOT, 'data/content-i18n')).filter((f) => f.endsWith('.json')).map((f) => f.replace('.json', ''));
const union = new Set();
for (const l of langs) {
  const d = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/content-i18n', l + '.json'), 'utf8'));
  for (const s of strings) if (!d[s] || !String(d[s]).trim()) union.add(s);
}
const list = [...union];
const dir = path.join(__dirname, 'work');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, out + '-en.json'), JSON.stringify(list, null, 1));
const chars = list.reduce((a, s) => a + s.length, 0);
console.log(`${rel}: ${strings.size} content strings, ${list.length} missing somewhere -> tools/work/${out}-en.json (${chars} chars)`);
