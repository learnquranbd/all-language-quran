// Mechanical gate for a Places batch. usage: node tools/places/validate.js <batch>
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const { PLACES } = require('./registry.js');
const batch = process.argv[2];
if (!batch) { console.log('usage: validate.js <batch>'); process.exit(1); }
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
let D; try { D = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'draft.json'), 'utf8')); } catch (e) { console.log('ERROR draft.json:', e.message); process.exit(1); }
const err = [], E = (w, m) => err.push(`${w}: ${m}`);
const BN = /[ঀ-৿]/, KINDS = ['city', 'sanctuary', 'mountain', 'valley', 'land', 'battle', 'sea', 'ruin'];
const flat = s => String(s).replace(/\s+/g, ' ').trim();
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
const want = PLACES.filter(p => p.batch === batch).map(p => p.id);
if (!Array.isArray(D)) { console.log('ERROR draft must be an array'); process.exit(1); }
for (const id of want) if (!D.some(p => p.id === id)) E(id, 'missing');
for (const p of D) {
  const w = p.id || '(no id)';
  if (!want.includes(p.id)) E(w, 'not in this batch');
  if (!KINDS.includes(p.kind)) E(w, `kind must be one of ${KINDS.join('/')}`);
  pair(p.name, w, 'name', 60); if (!p.name || !/[ء-ي]/.test(p.name.ar || '')) E(w, 'name.ar missing');
  pair(p.label, w, 'label', 18);
  pair(p.about, w, 'about', 700); pair(p.location, w, 'location', 500);
  if (!['known', 'traditional', 'uncertain', 'unknown'].includes(p.loc)) E(w, 'loc must be known/traditional/uncertain/unknown');
  if (p.loc === 'unknown') { if (p.lat != null || p.lon != null) E(w, 'unknown place must have lat/lon null'); }
  else if (!(p.lon >= 24 && p.lon <= 61 && p.lat >= 11 && p.lat <= 42)) E(w, `lat/lon ${p.lat},${p.lon} outside the map`);
  if (p.loc === 'uncertain' && !(p.radiusKm > 0 && p.radiusKm <= 600)) E(w, 'uncertain place needs radiusKm 1-600');
  if (!Array.isArray(p.refs) || !p.refs.length) E(w, 'refs missing');
  for (const r of p.refs || []) {
    const m = /^(\d+):(\d+)(?:-(\d+))?$/.exec(r);
    if (!m) { E(w, `bad ref ${r}`); continue; }
    for (let a = +m[2]; a <= +(m[3] || m[2]); a++) if (!QW[`${m[1]}:${a}`]) E(w, `ref ${m[1]}:${a} does not exist`);
  }
  const dir = path.join(ROOT, 'tools/themes/work', 'places-' + p.id);
  const saved = fs.existsSync(dir) ? fs.readdirSync(dir).map(f => flat(fs.readFileSync(path.join(dir, f), 'utf8'))) : [];
  for (const s of p.sources || []) {
    if (!s.quote || flat(s.quote).length < 15) { E(w, 'source quote too short'); continue; }
    if (!saved.some(t => t.includes(flat(s.quote)))) E(w, `source quote not found in tools/themes/work/places-${p.id}/: "${flat(s.quote).slice(0, 60)}…"`);
  }
  if (p.loc !== 'known' && p.loc !== 'unknown' && !(p.sources || []).length) E(w, `a ${p.loc} location needs at least one tafsir source`);
}
console.log(`${batch}: ${D.length} places`);
err.forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
