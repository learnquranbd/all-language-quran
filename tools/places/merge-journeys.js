// Apply an audit (optional) to a journeys batch, then merge it into data/places/journeys.json,
// kept in tools/places/journeys.js order. Stops keep their place ids; the module looks the
// coordinates up in places.json, so every place stop must be merged there first.
// usage: node tools/places/merge-journeys.js <batch> [--apply-audit] [--write]
const fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../..'), OUT = path.join(ROOT, 'data/places/journeys.json');
const { JOURNEYS } = require('./journeys.js');
const batch = process.argv[2], write = process.argv.includes('--write');
if (!batch) { console.log('usage: merge-journeys.js <batch> [--apply-audit] [--write]'); process.exit(1); }
const P = path.join(__dirname, 'work', batch, 'draft.json');
if (process.argv.includes('--apply-audit')) {
  const D = JSON.parse(fs.readFileSync(P, 'utf8')), A = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'audit.json'), 'utf8'));
  let ok = 0;
  for (const f of A.findings || []) {
    const [id, field] = f.where.trim().split(/\s+/), j = D.find(x => x.id === id);
    if (!j) { console.log('MANUAL', f.where); continue; }
    if (['about', 'route', 'name', 'label'].includes(field) && f.fix && f.fix.en && f.fix.bn) j[field] = Object.assign({}, j[field], { en: f.fix.en, bn: f.fix.bn });
    else if (['refs', 'legs', 'sources'].includes(field) && 'value' in f) j[field] = f.value;
    else { console.log('MANUAL', f.where); continue; }
    ok++;
  }
  if (!fs.existsSync(P + '.pre-audit')) fs.copyFileSync(P, P + '.pre-audit');
  fs.writeFileSync(P, JSON.stringify(D, null, 1));
  console.log(`${ok} audit fixes applied`);
}
try { execFileSync('node', [path.join(__dirname, 'validate-journeys.js'), batch], { stdio: 'pipe' }); }
catch (e) { console.log(String(e.stdout)); console.log('!! validate-journeys.js fails; not merging'); process.exit(1); }
const shipped = new Set(JSON.parse(fs.readFileSync(path.join(ROOT, 'data/places/places.json'), 'utf8')).map(p => p.id));
const D = JSON.parse(fs.readFileSync(P, 'utf8'));
for (const j of D) for (const leg of j.legs) for (const s of leg) if (s.place && !shipped.has(s.place)) { console.log(`!! ${j.id}: stop ${s.place} is not in places.json yet; merge its P batch first`); process.exit(1); }
const have = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
const keep = ['id', 'name', 'label', 'refs', 'legs', 'about', 'route', 'sources'];
const byId = Object.fromEntries(have.map(j => [j.id, j]));
for (const j of D) byId[j.id] = Object.fromEntries(keep.filter(k => k in j).map(k => [k, j[k]]));
const out = JOURNEYS.map(r => byId[r.id]).filter(Boolean).map(j => Object.assign({}, j, { sources: (j.sources || []).map(s => ({ tafsir: s.tafsir, ref: s.ref })) }));
console.log(`${D.length} journeys → ${out.length} in journeys.json`);
if (write) fs.writeFileSync(OUT, JSON.stringify(out) + '\n');
console.log(write ? 'merged' : '(dry run; pass --write)');
