// After an English source fix: update the changed strings in work/index.json and work/<C>/en.json in place
// (ids and chunk boundaries stay put, so translators already running are not disturbed). Prints changed ids,
// which then need retranslating in every language whose chunk already has a translation.
// usage: node tools/content-i18n/refresh.js
const { fs, path, WORK, LANGS, mask, dicts, sources } = require('./lib.js');
const D = dicts();
const index = JSON.parse(fs.readFileSync(path.join(WORK, 'index.json'), 'utf8'));
const now = {};   // `${ns}|${CONST}` -> current strings in order
for (const s of sources()) now[`${s.ns}|${s.name}`] = s.strings;
// rebuild each const's id list the way extract.js numbered it: only strings that were missing; match by position
const byConst = {};
for (const id of Object.keys(index)) { const k = id.split('|').slice(0, 2).join('|'); (byConst[k] = byConst[k] || []).push(id); }
const chunks = fs.readdirSync(WORK).filter((d) => /^C\d+$/.test(d));
const EN = Object.fromEntries(chunks.map((c) => [c, JSON.parse(fs.readFileSync(path.join(WORK, c, 'en.json'), 'utf8'))]));
const changed = [];
for (const [k, ids] of Object.entries(byConst)) {
  const cur = now[k]; if (!cur) continue;
  const curSet = new Set(cur);
  const gone = ids.filter((id) => !curSet.has(index[id].en));
  if (!gone.length) continue;
  const known = new Set(ids.map((id) => index[id].en));
  // new wording of edited strings, in source order (strings every dictionary already has were never indexed)
  const fresh = cur.filter((s) => !known.has(s) && LANGS.some((l) => !D[l][s]));
  if (fresh.length !== gone.length) { console.log(`!! ${k}: ${gone.length} gone vs ${fresh.length} new; fix by hand`); continue; }
  gone.forEach((id, i) => {
    const m = mask(fresh[i]); index[id].en = fresh[i]; index[id].runs = m.runs;
    for (const c of chunks) if (id in EN[c]) EN[c][id] = m.t;
    changed.push(id);
  });
}
fs.writeFileSync(path.join(WORK, 'index.json'), JSON.stringify(index));
for (const c of chunks) fs.writeFileSync(path.join(WORK, c, 'en.json'), JSON.stringify(EN[c], null, 1));
console.log('changed', changed.length); changed.forEach((id) => console.log(id));
