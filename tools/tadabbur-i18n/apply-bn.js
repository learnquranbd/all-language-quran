// Apply a Bengali review's rewrites to js/tadabbur-data.js by exact string replacement
// inside each card's block (the file is hand-formatted, so it is never re-serialised).
// usage: node tools/tadabbur-i18n/apply-bn.js <chunk> [--write]
// Reads work/<chunk>/bn-fixes.json: { "<ref>": { "reflectionBn": "...", "lessonBn": "...",
// "pointsBn": { "<i>": "..." } } } (only changed fields).
const { fs, path, DATA, WORK, cards, block } = require('./lib.js');
const chunk = process.argv[2], write = process.argv.includes('--write');
if (!chunk) { console.log('usage: apply-bn.js <chunk> [--write]'); process.exit(1); }
const F = JSON.parse(fs.readFileSync(path.join(WORK, chunk, 'bn-fixes.json'), 'utf8'));
const T = cards();
let src = fs.readFileSync(DATA, 'utf8'), n = 0;
const err = [];
const BN = /[ঀ-৿]/;
function swap(ref, oldS, newS, what) {
  if (typeof newS !== 'string' || !newS.trim() || !BN.test(newS)) return err.push(`${ref} ${what}: new text empty or not Bengali`);
  if (/[0-9]/.test(newS.replace(/\d+:\d+(-\d+)?/g, ''))) err.push(`${ref} ${what}: Latin digits`);
  if ((newS.match(/—/g) || []).length > 1) err.push(`${ref} ${what}: more than one em dash`);
  if (newS === oldS) return;
  const r = newS.length / oldS.length;
  if (r < 0.5 || r > 1.8) err.push(`${ref} ${what}: length changed ×${r.toFixed(2)}; check nothing was dropped or added`);
  const bl = block(src, ref);
  if (!bl) return err.push(`${ref}: card not found`);
  const seg = src.slice(bl[0], bl[1]), o = JSON.stringify(oldS);
  const at = seg.indexOf(o);
  if (at < 0 || seg.indexOf(o, at + 1) >= 0) return err.push(`${ref} ${what}: old text not found exactly once in the card`);
  src = src.slice(0, bl[0]) + seg.slice(0, at) + JSON.stringify(newS) + seg.slice(at + o.length) + src.slice(bl[1]);
  n++;
}
for (const [ref, f] of Object.entries(F)) {
  const c = T[ref];
  if (!c) { err.push(`${ref}: no such card`); continue; }
  for (const k of ['reflectionBn', 'lessonBn']) if (k in f) swap(ref, c[k], f[k], k);
  if (f.pointsBn) for (const [i, s] of Object.entries(f.pointsBn)) {
    if (!(i in (c.pointsBn || []))) { err.push(`${ref} pointsBn[${i}] does not exist`); continue; }
    swap(ref, c.pointsBn[i], s, `pointsBn[${i}]`);
  }
  for (const k of Object.keys(f)) if (!['reflectionBn', 'lessonBn', 'pointsBn'].includes(k)) err.push(`${ref}: unknown field ${k}`);
}
err.forEach(e => console.log('ERROR ' + e));
console.log(`${chunk}: ${n} strings rewritten in ${Object.keys(F).length} cards${err.length ? `, ${err.length} errors` : ''}`);
if (write && !err.length) { fs.writeFileSync(DATA, src); console.log('written'); }
else if (write) { console.log('not written: fix the errors first'); process.exit(1); }
