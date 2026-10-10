// Apply an audit (optional) to a Places batch, then merge it into data/places/places.json,
// kept in registry order with each entry's group (P1-P3) for the module's sections.
// usage: node tools/places/merge.js <batch> [--apply-audit] [--write]
const fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../..'), OUT = path.join(ROOT, 'data/places/places.json');
const { PLACES } = require('./registry.js');
const batch = process.argv[2], write = process.argv.includes('--write');
if (!batch) { console.log('usage: merge.js <batch> [--apply-audit] [--write]'); process.exit(1); }
const P = path.join(__dirname, 'work', batch, 'draft.json');
if (process.argv.includes('--apply-audit')) {
  // audit.json findings: { where: "<id> <field>", fix: {en, bn} } for about/location/name/label,
  // or { where: "<id> refs|lat|lon|loc|radiusKm", value: ... } for data fields.
  const D = JSON.parse(fs.readFileSync(P, 'utf8')), A = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'audit.json'), 'utf8'));
  let ok = 0;
  for (const f of A.findings || []) {
    const [id, field] = f.where.trim().split(/\s+/), p = D.find(x => x.id === id);
    if (!p) { console.log('MANUAL', f.where); continue; }
    if (['about', 'location', 'name', 'label'].includes(field) && f.fix && f.fix.en && f.fix.bn) p[field] = Object.assign({}, p[field], { en: f.fix.en, bn: f.fix.bn });
    else if (['refs', 'lat', 'lon', 'loc', 'radiusKm', 'sources', 'kind'].includes(field) && 'value' in f) p[field] = f.value;
    else { console.log('MANUAL', f.where); continue; }
    ok++;
  }
  if (!fs.existsSync(P + '.pre-audit')) fs.copyFileSync(P, P + '.pre-audit');
  fs.writeFileSync(P, JSON.stringify(D, null, 1));
  console.log(`${ok} audit fixes applied`);
}
try { execFileSync('node', [path.join(__dirname, 'validate.js'), batch], { stdio: 'pipe' }); }
catch (e) { console.log(String(e.stdout)); console.log('!! validate.js fails; not merging'); process.exit(1); }
const D = JSON.parse(fs.readFileSync(P, 'utf8'));
const have = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
const keep = ['id', 'kind', 'name', 'label', 'loc', 'lat', 'lon', 'radiusKm', 'refs', 'about', 'location', 'sources'];
const byId = Object.fromEntries(have.map(p => [p.id, p]));
const groupOf = id => { const r = PLACES.find(x => x.id === id); return (r && r.group) || batch; };
for (const p of D) byId[p.id] = Object.assign({ group: groupOf(p.id) }, Object.fromEntries(keep.filter(k => k in p).map(k => [k, p[k]])));
// sources ship without the long quote: the card names tafsir + ayah; the quote stays in the work file
const out = PLACES.map(r => byId[r.id]).filter(Boolean).map(p => Object.assign({}, p, { sources: (p.sources || []).map(s => ({ tafsir: s.tafsir, ref: s.ref })) }));
console.log(`${D.length} places → ${out.length} in places.json`);
if (write) { fs.mkdirSync(path.dirname(OUT), { recursive: true }); fs.writeFileSync(OUT, JSON.stringify(out) + '\n'); }
console.log(write ? 'merged' : '(dry run; pass --write)');
