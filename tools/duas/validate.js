// Mechanical gate for a duas batch. usage: node tools/duas/validate.js <batch>
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const batch = process.argv[2];
const RANGE = { D1: [1, 17], D2: [18, 114] }[batch];
if (!RANGE) { console.log('usage: validate.js D1|D2'); process.exit(1); }
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
let D; try { D = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'draft.json'), 'utf8')); } catch (e) { console.log('ERROR draft.json:', e.message); process.exit(1); }
const WHO = ['believers', 'angels', 'prophet', 'adam', 'nuh', 'hud', 'salih', 'ibrahim', 'ismail', 'lut', 'shuayb', 'yaqub', 'yusuf', 'musa', 'harun', 'sulayman', 'ayyub', 'yunus', 'zakariyya', 'isa', 'muhammad', 'maryam', 'imran-wife', 'pharaoh-wife', 'magicians', 'ashab-kahf', 'talut-army', 'luqman', 'other'];
const THEMES = ['forgiveness', 'guidance', 'mercy', 'both-worlds', 'family', 'protection', 'relief', 'victory', 'steadfastness', 'knowledge', 'provision', 'gratitude', 'righteousness', 'akhirah', 'against'];
const err = [], E = (w, m) => err.push(`${w}: ${m}`);
const BN = /[ঀ-৿]/;
function pair(o, w, what, max) {
  if (!o || typeof o.en !== 'string' || typeof o.bn !== 'string' || !o.en.trim() || !o.bn.trim()) return E(w, `${what} needs {en, bn}`);
  if (BN.test(o.en)) E(w, `${what}.en contains Bengali`);
  if (!BN.test(o.bn)) E(w, `${what}.bn has no Bengali`);
  if (o.en.length > max) E(w, `${what}.en is ${o.en.length} chars (max ${max})`);
  for (const l of ['en', 'bn']) {
    if (/<[a-z\/]/i.test(o[l])) E(w, `${what}.${l} has HTML`);
    if ((o[l].match(/—/g) || []).length > 1) E(w, `${what}.${l} has more than one em dash`);
    if (l === 'bn' && /[0-9]/.test(o[l])) E(w, `${what}.bn has Latin digits`);
  }
}
if (!Array.isArray(D)) { console.log('ERROR draft must be an array'); process.exit(1); }
const ids = new Set(), used = {};
let prev = [0, 0];
for (const d of D) {
  const w = d.id || '(no id)';
  if (ids.has(d.id)) E(w, 'duplicate id'); ids.add(d.id);
  if (!Array.isArray(d.parts) || !d.parts.length) { E(w, 'parts missing'); continue; }
  const first = d.parts[0].ref || '';
  if (!new RegExp(`^${first.replace(':', '-')}(-b)?$`).test(d.id)) E(w, `id should be "${first.replace(':', '-')}"`);
  for (const p of d.parts) {
    const ws = QW[p.ref];
    if (!ws) { E(w, `ref ${p.ref} does not exist`); continue; }
    const s = +p.ref.split(':')[0];
    if (s < RANGE[0] || s > RANGE[1]) E(w, `ref ${p.ref} is outside ${batch}`);
    if (!(Number.isInteger(p.from) && Number.isInteger(p.to) && p.from >= 1 && p.to >= p.from && p.to <= ws.length)) E(w, `${p.ref} span ${p.from}-${p.to} invalid (ayah has ${ws.length} words)`);
    for (let i = p.from; i <= p.to; i++) { const k = `${p.ref}#${i}`; if (used[k]) E(w, `${p.ref} word ${i} is also in ${used[k]}`); used[k] = d.id; }
  }
  for (let i = 1; i < d.parts.length; i++) {
    const [s0, a0] = d.parts[i - 1].ref.split(':').map(Number), [s1, a1] = d.parts[i].ref.split(':').map(Number);
    if (s1 !== s0 || a1 !== a0 + 1) E(w, `parts must be consecutive ayat (${d.parts[i - 1].ref} → ${d.parts[i].ref})`);
  }
  const [s, a] = first.split(':').map(Number);
  if (s < prev[0] || (s === prev[0] && a < prev[1])) E(w, 'not in muṣḥaf order'); prev = [s, a];
  if (!WHO.includes(d.who)) E(w, `who "${d.who}" not allowed`);
  if (!['for', 'against'].includes(d.kind)) E(w, 'kind must be for/against');
  if (!THEMES.includes(d.theme)) E(w, `theme "${d.theme}" not allowed`);
  if ((d.kind === 'against') !== (d.theme === 'against')) E(w, 'kind "against" and theme "against" go together');
  pair(d.title, w, 'title', 50); pair(d.context, w, 'context', 220);
}
console.log(`${batch}: ${D.length} duas, ${Object.keys(used).length} words`);
err.forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
