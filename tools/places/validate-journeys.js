// Mechanical gate for a journeys batch. usage: node tools/places/validate-journeys.js <batch>
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const { PLACES } = require('./registry.js');
const { JOURNEYS } = require('./journeys.js');
const batch = process.argv[2];
if (!batch) { console.log('usage: validate-journeys.js <batch>'); process.exit(1); }
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
let D; try { D = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'draft.json'), 'utf8')); } catch (e) { console.log('ERROR draft.json:', e.message); process.exit(1); }
// place coordinates: shipped places.json, then any drafted P batch
const loc = {};
try { for (const p of JSON.parse(fs.readFileSync(path.join(ROOT, 'data/places/places.json'), 'utf8'))) loc[p.id] = p; } catch (_) { /* none yet */ }
for (const b of fs.readdirSync(path.join(__dirname, 'work')).filter(b => /^P\d+$/.test(b))) {
  try { for (const p of JSON.parse(fs.readFileSync(path.join(__dirname, 'work', b, 'draft.json'), 'utf8'))) if (!loc[p.id]) loc[p.id] = p; } catch (_) { /* not drafted */ }
}
const err = [], E = (w, m) => err.push(`${w}: ${m}`);
const BN = /[ঀ-৿]/, flat = s => String(s).replace(/\s+/g, ' ').trim();
function pair(o, w, what, max) {
  if (!o || typeof o.en !== 'string' || typeof o.bn !== 'string' || !o.en.trim() || !o.bn.trim()) return E(w, `${what} needs {en, bn}`);
  if (BN.test(o.en)) E(w, `${what}.en contains Bengali`);
  if (!BN.test(o.bn)) E(w, `${what}.bn has no Bengali`);
  if (o.en.length > max) E(w, `${what}.en is ${o.en.length} chars (max ${max})`);
  for (const l of ['en', 'bn']) {
    if (/<[a-z\/]/i.test(o[l])) E(w, `${what}.${l} has HTML`);
    if ((o[l].match(/—/g) || []).length > 1) E(w, `${what}.${l} has more than one em dash`);
  }
}
const want = JOURNEYS.filter(j => j.batch === batch).map(j => j.id);
if (!Array.isArray(D)) { console.log('ERROR draft must be an array'); process.exit(1); }
for (const id of want) if (!D.some(j => j.id === id)) E(id, 'missing');
for (const j of D) {
  const w = j.id || '(no id)';
  if (!want.includes(j.id)) E(w, 'not in this batch');
  pair(j.name, w, 'name', 70); pair(j.label, w, 'label', 18);
  pair(j.about, w, 'about', 700); pair(j.route, w, 'route', 500);
  if (!Array.isArray(j.refs) || !j.refs.length) E(w, 'refs missing');
  for (const r of j.refs || []) {
    const m = /^(\d+):(\d+)(?:-(\d+))?$/.exec(r);
    if (!m) { E(w, `bad ref ${r}`); continue; }
    for (let a = +m[2]; a <= +(m[3] || m[2]); a++) if (!QW[`${m[1]}:${a}`]) E(w, `ref ${m[1]}:${a} does not exist`);
  }
  const stopIds = [];
  if (!Array.isArray(j.legs) || !j.legs.length) E(w, 'legs missing');
  for (const leg of j.legs || []) {
    if (!Array.isArray(leg) || leg.length < 2) { E(w, 'each leg needs two or more stops'); continue; }
    for (const s of leg) {
      if (s.place) {
        if (!PLACES.some(p => p.id === s.place)) { E(w, `stop ${s.place} is not in the registry`); continue; }
        const p = loc[s.place];
        if (!p) E(w, `stop ${s.place} has no coordinates yet (not merged or drafted)`);
        else if (p.loc === 'unknown' || p.lat == null) E(w, `stop ${s.place} has no known location`);
        stopIds.push(s.place);
      } else {
        if (!(s.lon >= 24 && s.lon <= 61 && s.lat >= 11 && s.lat <= 42)) E(w, `free stop ${s.lat},${s.lon} outside the map`);
        pair(s.label, w, 'free stop label', 18);
      }
    }
  }
  const dirs = [path.join(ROOT, 'tools/themes/work', 'journey-' + j.id), ...stopIds.map(id => path.join(ROOT, 'tools/themes/work', 'places-' + id))];
  const saved = dirs.filter(d => fs.existsSync(d)).flatMap(d => fs.readdirSync(d).map(f => flat(fs.readFileSync(path.join(d, f), 'utf8'))));
  for (const s of j.sources || []) {
    if (!s.quote || flat(s.quote).length < 15) { E(w, 'source quote too short'); continue; }
    if (!saved.some(t => t.includes(flat(s.quote)))) E(w, `source quote not found under journey-${j.id}/ or its stops' places-*/: "${flat(s.quote).slice(0, 60)}…"`);
  }
}
console.log(`${batch}: ${D.length} journeys`);
err.forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
