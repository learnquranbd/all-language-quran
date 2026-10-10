// Merge every checked chunk of one language into data/content-i18n/tadabbur/<lang>.json,
// keyed by the exact English string (CI18N.tr looks strings up by their English text).
// usage: node tools/tadabbur-i18n/merge-tr.js <lang> [--write]
const { fs, path, ROOT, WORK, chunkRefs } = require('./lib.js');
const { execFileSync } = require('child_process');
const lang = process.argv[2], write = process.argv.includes('--write');
if (!lang) { console.log('usage: merge-tr.js <lang> [--write]'); process.exit(1); }
const OUT = path.join(ROOT, 'data/content-i18n/tadabbur', `${lang}.json`);
// rebuilt from the chunks every time, so an English string fixed after translation leaves no orphan
const have = {};
let added = 0, chunks = [];
for (const c of Object.keys(chunkRefs())) {
  if (!fs.existsSync(path.join(WORK, c, `tr-${lang}.json`))) continue;
  try { execFileSync('node', [path.join(__dirname, 'check-tr.js'), c, lang], { stdio: 'pipe' }); }
  catch (e) { console.log(`!! ${c} fails check-tr.js; skipped`); continue; }
  const EN = JSON.parse(fs.readFileSync(path.join(WORK, c, 'en.json'), 'utf8')), TR = JSON.parse(fs.readFileSync(path.join(WORK, c, `tr-${lang}.json`), 'utf8'));
  for (const [id, en] of Object.entries(EN)) { if (have[en] !== TR[id]) added++; have[en] = TR[id]; }
  chunks.push(c);
}
console.log(`${lang}: chunks ${chunks.join(' ') || '(none)'} → ${Object.keys(have).length} strings (${added} new or changed)`);
if (write && chunks.length) { fs.mkdirSync(path.dirname(OUT), { recursive: true }); fs.writeFileSync(OUT, JSON.stringify(have) + '\n'); console.log('written'); }
