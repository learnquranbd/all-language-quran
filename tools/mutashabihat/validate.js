// Mechanical gate for a Mutashabihat notes batch. Zero model tokens.
// usage: node tools/mutashabihat/validate.js <batch>
// Checks: every target group has a tip and a note for every verse; {en, bn} pairs;
// lengths; and every Arabic word quoted in a note occurs in that verse (in a tip: in
// one of the group's verses), so no note can cite a word the text doesn't have.
const fs = require('fs'), path = require('path');
const { J, norm } = require('./lib.js');
const batch = process.argv[2];
if (!batch) { console.log('usage: validate.js <batch>'); process.exit(1); }
const dir = path.join(__dirname, 'work', batch);
const T = JSON.parse(fs.readFileSync(path.join(dir, 'targets.json'), 'utf8'));
let D; try { D = JSON.parse(fs.readFileSync(path.join(dir, 'draft.json'), 'utf8')); } catch (e) { console.log('ERROR draft.json:', e.message); process.exit(1); }
const QW = J('data/quran-words.json');
const err = [], E = (w, m) => err.push(`${w}: ${m}`);
const BN = /[ঀ-৿]/, AR = /[\u0621-\u064A\u0671][\u0621-\u0655\u0670\u06D6-\u06ED\u0640\u0671]*/g;
const words = refs => new Set(refs.flatMap(r => (QW[r] || []).map(norm)));
function pair(o, w, what, max, allowed) {
  if (!o || typeof o.en !== 'string' || typeof o.bn !== 'string' || !o.en.trim() || !o.bn.trim()) return E(w, `${what} needs {en, bn}`);
  if (BN.test(o.en)) E(w, `${what}.en contains Bengali`);
  if (!BN.test(o.bn)) E(w, `${what}.bn has no Bengali`);
  if (o.en.length > max) E(w, `${what}.en is ${o.en.length} chars (max ${max})`);
  if (o.bn.length > max * 1.3) E(w, `${what}.bn is ${o.bn.length} chars (max ${Math.round(max * 1.3)})`);
  for (const l of ['en', 'bn']) {
    if (/<[a-z\/]/i.test(o[l])) E(w, `${what}.${l} has HTML`);
    if ((o[l].match(/—/g) || []).length > 1) E(w, `${what}.${l} has more than one em dash`);
    for (const q of o[l].match(AR) || []) {
      const n = norm(q);
      // Whole-word match. The verse may write a clitic attached that the quote leaves off
      // (wa-, fa-, bi-, li-, ka-, al-), so the verse word may be clitic + quote, but a quote that
      // is only the START of a verse word (أَفَلَ for أَفَلَتْ) is a different word and fails.
      const CL = /^(و|ف)?(ب|ل|ك)?(ال|ل)?$/;
      if (n.length > 1 && !allowed.has(n) && ![...allowed].some(x => x.endsWith(n) && CL.test(x.slice(0, x.length - n.length))))
        E(w, `${what}.${l} quotes «${q}», which is not in ${what === 'tip' ? 'the group' : 'this verse'}`);
    }
  }
}
let nv = 0;
for (const g of T.groups) {
  const G = D[g.id];
  if (!G) { E(g.id, 'group missing'); continue; }
  pair(G.tip, g.id, 'tip', 420, words(g.verses));
  for (const v of g.verses) {
    nv++;
    if (!G.verses || !G.verses[v]) { E(`${g.id} ${v}`, 'note missing'); continue; }
    pair(G.verses[v], `${g.id} ${v}`, 'note', 260, words([v]));
  }
  for (const v of Object.keys(G.verses || {})) if (!g.verses.includes(v)) E(`${g.id} ${v}`, 'note for a verse not in the group');
}
for (const id of Object.keys(D)) if (!T.groups.some(g => g.id === id)) E(id, 'group is not in this batch');
console.log(`${batch}: ${T.groups.length} groups, ${nv} verses`);
err.forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
