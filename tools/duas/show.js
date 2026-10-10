// Print each drafted dua: its span in Arabic with the words just outside it, and the en glosses.
// usage: node tools/duas/show.js <batch> [id]
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const [batch, only] = process.argv.slice(2);
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
const G = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/wbw/en.json'), 'utf8'));
const D = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'draft.json'), 'utf8'));
for (const d of D) {
  if (only && d.id !== only) continue;
  console.log(`\n${d.id} [${d.who}/${d.theme}] ${d.title && d.title.en}`);
  for (const p of d.parts) {
    const ws = QW[p.ref] || [], gs = G[p.ref] || [];
    const before = ws.slice(Math.max(0, p.from - 3), p.from - 1).join(' '), after = ws.slice(p.to, p.to + 2).join(' ');
    console.log(`  ${p.ref} ${p.from}-${p.to}/${ws.length}:  ‹${before}› ${ws.slice(p.from - 1, p.to).join(' ')} ‹${after}›`);
    console.log(`    ${gs.slice(p.from - 1, p.to).join(' | ')}`);
  }
}
