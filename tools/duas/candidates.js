// Candidate ayat for the Quranic Duas page: the ported collections (data/duas.json), the
// dua lists in js/topics-*-duas.js, and every ayah with a vocative to Allah (رَبِّ, رَبَّنَا,
// ٱللَّهُمَّ). A hint list for the drafter, who decides what is a dua and where it begins.
// usage: node tools/duas/candidates.js > tools/duas/work/candidates.txt
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
const why = {}, add = (r, w) => { (why[r] = why[r] || new Set()).add(w); };
const expand = r => { const m = /^(\d+):(\d+)(?:-(\d+))?$/.exec(r.trim()); if (!m) return []; const o = []; for (let a = +m[2]; a <= +(m[3] || m[2]); a++) o.push(`${m[1]}:${a}`); return o; };
for (const g of JSON.parse(fs.readFileSync(path.join(ROOT, 'data/duas.json'), 'utf8'))) for (const r of g.refs) expand(r).forEach(x => add(x, 'collection:' + g.slug));
for (const f of fs.readdirSync(path.join(ROOT, 'js')).filter(f => /^topics-.*duas\.js$/.test(f))) {
  const s = fs.readFileSync(path.join(ROOT, 'js', f), 'utf8');
  for (const m of s.matchAll(/refs:\s*'([^']+)'/g)) m[1].split(/[,;]\s*/).forEach(r => expand(r).forEach(x => add(x, f.replace(/\.js$/, ''))));
}
const strip = w => w.replace(/[ً-ٰٟۖ-ۭ]/g, '');
for (const [k, ws] of Object.entries(QW)) ws.forEach((w, i) => {
  const b = strip(w).replace(/^[وف]/, '');
  if (b === 'ربنا' || b === 'رب' || b === 'اللهم' || b === 'ٱللهم') {
    // رَبِّ as a vocative ends in kasra with no following noun in genitive: crude, the drafter judges
    add(k, `vocative:${w}@${i + 1}`);
  }
});
const keys = Object.keys(why).sort((a, b) => { const [s1, a1] = a.split(':').map(Number), [s2, a2] = b.split(':').map(Number); return s1 - s2 || a1 - a2; });
for (const k of keys) console.log(`${k}\t${[...why[k]].join(' ')}\t${QW[k].join(' ')}`);
console.error(`${keys.length} candidate ayat`);
