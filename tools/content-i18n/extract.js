// Write the translation packets: work/<C>/en.json = { "<ns>|<CONST>|<i>": "<English, Arabic masked as ⟦n⟧>" },
// and work/index.json = { id: { en (exact source), ns, runs } } used by check/merge.
// Only strings missing from at least one of the 13 dictionaries are taken.
// usage: node tools/content-i18n/extract.js [wordsPerChunk=25000]
const { fs, path, WORK, LANGS, mask, dicts, sources } = require('./lib.js');
const per = +process.argv[2] || 25000;
const D = dicts(), index = {}, items = [];
for (const s of sources()) {
  let i = 0;
  for (const en of s.strings) {
    if (LANGS.every((l) => D[l][en])) continue;
    const id = `${s.ns}|${s.name}|${i++}`, m = mask(en);
    index[id] = { en, ns: s.ns, runs: m.runs };
    items.push([id, m.t]);
  }
}
fs.mkdirSync(WORK, { recursive: true });
fs.writeFileSync(path.join(WORK, 'index.json'), JSON.stringify(index));
let c = 0, cur = {}, words = 0;
const flush = () => { if (!Object.keys(cur).length) return; c++; fs.mkdirSync(path.join(WORK, 'C' + c), { recursive: true });
  fs.writeFileSync(path.join(WORK, 'C' + c, 'en.json'), JSON.stringify(cur, null, 1));
  console.log(`C${c}: ${Object.keys(cur).length} strings, ${words} words, ${[...new Set(Object.keys(cur).map((k) => k.split('|')[0]))].join(' ')}`);
  cur = {}; words = 0; };
for (const [id, t] of items) { cur[id] = t; words += t.split(/\s+/).length; if (words >= per) flush(); }
flush();
const byNs = {}; for (const v of Object.values(index)) byNs[v.ns] = (byNs[v.ns] || 0) + 1;
console.log('total', items.length, 'strings;', JSON.stringify(byNs), '; with Arabic:', Object.values(index).filter((v) => v.runs.length).length);
