// Merge checked J-chunks (json-extract.js) for one language into data/content-i18n.
// Namespace strings go to data/content-i18n/<ns>/<lang>.json, 'shared' to data/content-i18n/<lang>.json.
// Arabic runs are restored byte-exact from the chunk's index.json. Existing keys are never
// overwritten (a key already translated elsewhere wins); pass --force to overwrite.
// usage: node tools/content-i18n/json-merge.js <lang> [--write] [--force]
const { fs, path, ROOT, WORK, unmask } = require('./lib.js');
const { execFileSync } = require('child_process');
const lang = process.argv[2], write = process.argv.includes('--write'), force = process.argv.includes('--force');
if (!lang) { console.log('usage: json-merge.js <lang> [--write] [--force]'); process.exit(1); }
const out = {}, stat = {};
for (const c of fs.readdirSync(WORK).filter((d) => /^J\d+$/.test(d)).sort((a, b) => a.slice(1) - b.slice(1))) {
  const trf = path.join(WORK, c, `tr-${lang}.json`);
  if (!fs.existsSync(trf)) continue;
  try { execFileSync('node', [path.join(__dirname, 'check.js'), c, lang], { stdio: 'pipe' }); }
  catch (e) { console.log(`!! ${c} fails check.js; skipped\n${String(e.stdout).split('\n').slice(0, 5).join('\n')}`); continue; }
  const IDX = JSON.parse(fs.readFileSync(path.join(WORK, c, 'index.json'), 'utf8'));
  const TR = JSON.parse(fs.readFileSync(trf, 'utf8'));
  for (const [id, meta] of Object.entries(IDX)) {
    if (typeof TR[id] !== 'string') continue;
    (out[meta.ns] = out[meta.ns] || {})[meta.en] = unmask(TR[id], meta.runs);
  }
  stat[c] = Object.keys(IDX).length;
}
for (const [ns, add] of Object.entries(out)) {
  const f = path.join(ROOT, 'data/content-i18n', ns === 'shared' ? `${lang}.json` : `${ns}/${lang}.json`);
  const cur = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
  let n = 0;
  for (const [en, v] of Object.entries(add)) if (force || cur[en] == null || cur[en] === en) { cur[en] = v; n++; }
  console.log(`${lang} ${ns}: +${n} (file now ${Object.keys(cur).length})`);
  if (write) { fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, JSON.stringify(cur) + '\n'); }
}
console.log(`${lang}: chunks ${JSON.stringify(stat)}${write ? ' written' : ' (dry run; pass --write)'}`);
