// Apply an audit to a batch draft (optional), then merge the batch into
// data/mutashabihat-notes.json ({ groupId: { tip, verses: { ref: {en, bn} } } }).
// usage: node tools/mutashabihat/merge.js <batch> [--apply-audit] [--write]
const fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');
const { ROOT, NOTES, notes } = require('./lib.js');
const batch = process.argv[2], write = process.argv.includes('--write');
if (!batch) { console.log('usage: merge.js <batch> [--apply-audit] [--write]'); process.exit(1); }
const dir = path.join(__dirname, 'work', batch), P = path.join(dir, 'draft.json');
if (process.argv.includes('--apply-audit')) {
  const D = JSON.parse(fs.readFileSync(P, 'utf8')), A = JSON.parse(fs.readFileSync(path.join(dir, 'audit.json'), 'utf8'));
  let ok = 0;
  for (const f of A.findings || []) {
    const [id, ref] = f.where.trim().split(/\s+/), fix = f.fix && { en: f.fix.en, bn: f.fix.bn };
    const G = D[id];
    if (!G || !fix || !fix.en || !fix.bn) { console.log('MANUAL', f.where); continue; }
    if (ref === 'tip') G.tip = fix; else if (G.verses && G.verses[ref]) G.verses[ref] = fix; else { console.log('MANUAL', f.where); continue; }
    ok++;
  }
  if (!fs.existsSync(P + '.pre-audit')) fs.copyFileSync(P, P + '.pre-audit');
  fs.writeFileSync(P, JSON.stringify(D, null, 1));
  console.log(`${ok} audit fixes applied`);
}
try { execFileSync('node', [path.join(__dirname, 'validate.js'), batch], { stdio: 'pipe' }); }
catch (e) { console.log(String(e.stdout)); console.log('!! validate.js fails; not merging'); process.exit(1); }
const D = JSON.parse(fs.readFileSync(P, 'utf8')), all = notes();
const pick = o => ({ en: o.en.trim(), bn: o.bn.trim() });
for (const [id, G] of Object.entries(D))
  all[id] = { tip: pick(G.tip), verses: Object.fromEntries(Object.entries(G.verses).map(([r, o]) => [r, pick(o)])) };
console.log(`${Object.keys(D).length} groups → ${Object.keys(all).length} groups with notes`);
if (write) fs.writeFileSync(path.join(ROOT, NOTES), JSON.stringify(all) + '\n');
console.log(write ? 'merged' : '(dry run; pass --write)');
