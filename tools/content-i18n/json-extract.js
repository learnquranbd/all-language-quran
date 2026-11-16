// Translation packets for module content kept in JSON data files (themes, places, duas,
// mutashabihat notes, later asbab shards), which extract.js (JS consts only) does not read.
// Every {en: "..."} or fooEn: "..." string missing from the target dictionary in at least one
// language is taken, Arabic runs masked as ⟦n⟧ (same as extract.js).
//   work/J<n>/en.json    { "<ns>|<file>|<i>": "<masked English>" }   (gate: check.js J<n> <lang>)
//   work/J<n>/index.json { id: { en, ns, runs } }                     (used by json-merge.js)
// usage: node tools/content-i18n/json-extract.js [wordsPerChunk=30000] [--dry]
const { fs, path, ROOT, WORK, LANGS, mask } = require('./lib.js');
const per = +process.argv.find((a) => /^\d+$/.test(a)) || 30000, dry = process.argv.includes('--dry');

// ns -> files. A namespace file is consulted before the shared one (CI18N.tr(lang, en, ns)).
// 'shared' goes into data/content-i18n/<lang>.json (asbab: shown in the verse modal too).
const SETS = [
  ['themes', fs.readdirSync(path.join(ROOT, 'data/themes')).filter((f) => f.endsWith('.json')).map((f) => 'data/themes/' + f)],
  ['places', ['data/places/places.json', 'data/places/journeys.json']],
  ['quran-duas', ['data/quran-duas.json']],
  ['mutashabihat', ['data/mutashabihat-notes.json']],
  ['shared', JSON.parse(fs.readFileSync(path.join(ROOT, 'data/nuzul/manifest.json'), 'utf8')).map((f) => 'data/nuzul/' + (typeof f === 'string' ? f : f.file)).filter((f) => /asbab-/.test(f))],
];
const dictFor = {};
const dict = (ns, l) => {
  const k = ns + '/' + l;
  if (!(k in dictFor)) {
    const f = path.join(ROOT, 'data/content-i18n', ns === 'shared' ? `${l}.json` : `${ns}/${l}.json`);
    dictFor[k] = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {};
  }
  return dictFor[k];
};
const shared = (l) => dict('shared', l);
const has = (ns, l, en) => (dict(ns, l)[en] != null && dict(ns, l)[en] !== en) || (shared(l)[en] != null && shared(l)[en] !== en);

const items = [], index = {}, seen = new Set(), stats = {};
for (const [ns, files] of SETS) {
  for (const rel of files) {
    if (!fs.existsSync(path.join(ROOT, rel))) { console.log('missing', rel); continue; }
    const data = JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
    let i = 0;
    (function walk(n) {
      if (n == null) return;
      if (Array.isArray(n)) return n.forEach(walk);
      if (typeof n !== 'object') return;
      for (const [k, v] of Object.entries(n)) {
        if ((k === 'en' || /En$/.test(k)) && typeof v === 'string') {
          const en = v.trim() === v ? v : v;          // exact key: CI18N looks strings up verbatim
          if (!/[a-zA-Z]{3}/.test(en) || seen.has(ns + '\u0000' + en)) continue;
          if (LANGS.every((l) => has(ns, l, en))) continue;
          seen.add(ns + '\u0000' + en);
          const id = `${ns}|${path.basename(rel, '.json')}|${i++}`, m = mask(en);
          index[id] = { en, ns, runs: m.runs };
          items.push([id, m.t]);
          stats[ns] = stats[ns] || { strings: 0, words: 0 };
          stats[ns].strings++; stats[ns].words += en.split(/\s+/).length;
        } else if (k !== 'bn' && !/Bn$/.test(k)) walk(v);
      }
    })(data);
  }
}
console.log(JSON.stringify(stats));
if (dry) process.exit(0);
let c = 0, cur = {}, curIdx = {}, words = 0, lastNs = null;
const flush = () => {
  if (!Object.keys(cur).length) return;
  c++; const dir = path.join(WORK, 'J' + c); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'en.json'), JSON.stringify(cur, null, 1));
  fs.writeFileSync(path.join(dir, 'index.json'), JSON.stringify(curIdx));
  console.log(`J${c}: ${Object.keys(cur).length} strings, ${words} words, ${[...new Set(Object.keys(cur).map((k) => k.split('|')[0]))].join(' ')}`);
  cur = {}; curIdx = {}; words = 0;
};
for (const [id, t] of items) {
  const ns = id.split('|')[0];
  if (lastNs && ns !== lastNs && words > per / 3) flush();   // keep a namespace together where it is cheap
  lastNs = ns;
  cur[id] = t; curIdx[id] = index[id]; words += t.split(/\s+/).length;
  if (words >= per) flush();
}
flush();
