// One-off (2026-10-10): set every lesson word's Arabic to data/quran-words.json. The 23
// tokens it changed differed only by tatweel (U+0640), a small tanwin mark (U+06ED) or a
// hamza spelling. Read the printed list before using --write again.
// usage: node tools/qarabic/normalize.js [--write]
const fs = require('fs'), path = require('path');
const { ROOT, manifest, load, save } = require('./lib.js');
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
let fixed = 0;
for (const f of manifest().filter(f => f.startsWith('parse-'))) {
  const d = load(f); let n = 0;
  for (const l of d.lessons) for (const e of l.examples) {
    const real = QW[e.ref]; if (!real || real.length !== e.words.length) continue;
    e.words.forEach((w, i) => { if (w.ar !== real[i]) { console.log(e.ref, w.ar, '→', real[i]); w.ar = real[i]; n++; } });
  }
  fixed += n;
  if (n && process.argv.includes('--write')) save(f, d);
}
console.log(`${fixed} tokens set to the text`);
