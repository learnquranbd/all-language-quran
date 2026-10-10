// Everything a drafter needs for a batch of Mutashabihat groups, with zero model tokens.
// usage: node tools/mutashabihat/prep.js <batch> <first group #> <last group #>   (1-based, inclusive)
//   → tools/mutashabihat/work/<batch>/PREP.md and targets.json
// Per verse: the Arabic with every word that NO other verse in the group has shown in
// ⟦brackets⟧, so the drafter describes differences the text actually shows.
const fs = require('fs'), path = require('path');
const { J, groups, norm } = require('./lib.js');
const [batch, a, b] = process.argv.slice(2);
if (!batch || !a || !b) { console.log('usage: prep.js <batch> <first #> <last #>'); process.exit(1); }
const G = groups().slice(+a - 1, +b);
const QW = J('data/quran-words.json'), TEN = J('data/translations/en.json'), TBN = J('data/translations/bn.json');
const cleanEn = s => String(s || '').replace(/(?<=[\p{L}\p{P}])\d+/gu, '').replace(/\s+/g, ' ').trim();
const dir = path.join(__dirname, 'work', batch); fs.mkdirSync(dir, { recursive: true });
const out = [`# PREP ${batch}: groups ${a}-${b}\n`,
  'In each verse, ⟦words⟧ appear in NO other verse of the same group: those are the differences to teach. Unbracketed words are shared with at least one sibling.\n'];
const targets = { batch, groups: [] };
for (const g of G) {
  const vs = g.verses.filter(v => QW[v]);
  const sets = Object.fromEntries(vs.map(v => [v, new Set(QW[v].map(norm))]));
  targets.groups.push({ id: g.id, verses: vs });
  out.push(`\n---\n\n## ${g.id}: ${g.nameEn} / ${g.nameBn} (${g.nameAr})\n`, `Existing description: ${g.descEn}\n`);
  for (const v of vs) {
    const marked = QW[v].map(w => vs.some(o => o !== v && sets[o].has(norm(w))) ? w : `⟦${w}⟧`).join(' ');
    out.push(`### ${v}\n`, marked + '\n', `EN: ${cleanEn(TEN[v])}`, `BN: ${TBN[v] || ''}\n`);
  }
}
fs.writeFileSync(path.join(dir, 'PREP.md'), out.join('\n'));
fs.writeFileSync(path.join(dir, 'targets.json'), JSON.stringify(targets, null, 1));
console.log(`wrote ${batch}/PREP.md: ${G.length} groups, ${targets.groups.reduce((t, g) => t + g.verses.length, 0)} verses`);
