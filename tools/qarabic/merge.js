// Merge a validated batch into data/qarabic/. The fixed fields are copied in here from
// the bundled data, never from the draft: word Arabic (quran-words), word glosses
// (wbw en/bn), ayah translations (translations en/bn, footnote digits stripped).
// Within each unit, lessons are ordered by their first ayah; ids never change.
// usage: node tools/qarabic/merge.js <batch> [--write]
const fs = require('fs'), path = require('path');
const { ROOT, load, save, fileOf } = require('./lib.js');
const J = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const { execFileSync } = require('child_process');
const batch = process.argv[2], write = process.argv.includes('--write');
if (!batch) { console.log('usage: merge.js <batch> [--write]'); process.exit(1); }
const dir = path.join(__dirname, 'work', batch);
try { execFileSync('node', [path.join(__dirname, 'validate.js'), batch], { stdio: 'pipe' }); }
catch (e) { console.log(String(e.stdout)); console.log('!! validate.js fails; not merging'); process.exit(1); }

const QW = J('data/quran-words.json'), WEN = J('data/wbw/en.json'), WBN = J('data/wbw/bn.json');
const TEN = J('data/translations/en.json'), TBN = J('data/translations/bn.json');
const cleanEn = s => String(s || '').replace(/(?<=[\p{L}\p{P}])\d+/gu, '').replace(/\s+/g, ' ').trim();
const pick = o => ({ en: o.en.trim(), bn: o.bn.trim() });
const D = JSON.parse(fs.readFileSync(path.join(dir, 'draft.json'), 'utf8'));
const first = l => +l.examples[0].ref.split(':')[1];

const byFile = {};
for (const L of (Array.isArray(D) ? D : D.lessons)) {
  const s = +L.unit.slice(5);
  const lesson = {
    id: L.id, unit: L.unit, icon: '📖', title: pick(L.title), concept: pick(L.concept),
    examples: L.examples.map(e => ({
      ref: e.ref,
      trans: { en: cleanEn(TEN[e.ref]), bn: String(TBN[e.ref] || '').trim() },
      note: pick(e.note),
      words: QW[e.ref].map((ar, k) => Object.assign(
        { ar, en: (WEN[e.ref] || [])[k] || '', bn: (WBN[e.ref] || [])[k] || '', role: pick(e.words[k].role) },
        e.words[k].hl ? { hl: true } : {})),
    })),
    practice: { q: pick(L.practice.q), options: L.practice.options.map(pick), answer: L.practice.answer, explain: pick(L.practice.explain) },
  };
  (byFile[fileOf(s)] = byFile[fileOf(s)] || []).push(lesson);
}
for (const [f, add] of Object.entries(byFile)) {
  const data = load(f);
  const units = [...new Set([...data.lessons, ...add].map(l => l.unit))];
  const before = data.lessons.length;
  // keep the file's unit order; inside a unit, sort by first ayah
  const order = data.units.map(u => u.id);
  data.lessons = units.sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .flatMap(u => [...data.lessons, ...add].filter(l => l.unit === u).sort((a, b) => first(a) - first(b)));
  const out = JSON.stringify(data, null, 2);
  console.log(`${f}: ${before} → ${data.lessons.length} lessons, ${(out.length / 1024).toFixed(0)} KB`);
  if (write) save(f, data);
}
console.log(write ? 'merged' : '(dry run; pass --write)');
