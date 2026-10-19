// Apply group-review plans (work/GREV/plan-G*.json) to MUTASHABIHAT_GROUPS in js/mutashabihat-data.js:
// new member lists, renames, splits (new groups inserted after their source), deletions. Notes of deleted
// groups are dropped from data/mutashabihat-notes.json; changed groups are listed for re-drafting.
// usage: node tools/mutashabihat/apply-plans.js [--write]      (no plans: round-trip check of the file format)
const fs = require('fs'), path = require('path');
const { ROOT, groups, NOTES, notes } = require('./lib.js');
const FILE = path.join(ROOT, 'js/mutashabihat-data.js'), write = process.argv.includes('--write');
const src = fs.readFileSync(FILE, 'utf8');
const start = src.indexOf('const MUTASHABIHAT_GROUPS = [\n') + 'const MUTASHABIHAT_GROUPS = [\n'.length, end = src.lastIndexOf('\n];');
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
const fmt = (g) => `  {\n    id: ${q(g.id)},\n    nameEn: ${q(g.nameEn)},\n    nameBn: ${q(g.nameBn)},\n    nameAr: ${q(g.nameAr)},\n` +
  `    descEn: ${q(g.descEn)},\n    descBn: ${q(g.descBn)},\n    verses: [${g.verses.map(q).join(', ')}]\n  }`;
let G = groups();
// each group's source block "  {\n    id: '<id>', ... \n  }"; edits replace blocks in place (comments between them stay)
// two source styles: JS literal (id: 'x') and JSON ("id": "x"); each block keeps its own style
const fmtJ = (g) => JSON.stringify(g, null, 2).split('\n').map((l) => '  ' + l).join('\n');
const block = (txt, id) => {
  let i = txt.indexOf(`  {\n    id: ${q(id)},\n`), json = false;
  if (i < 0) { i = txt.indexOf(`  {\n    "id": ${JSON.stringify(id)},\n`); json = true; }
  if (i < 0) return null;
  const j = txt.indexOf('\n  }', i) + 4; return [i, j, json];
};
const style = {};   // id -> formatter
const bad = G.filter((g) => { const b = block(src, g.id); if (!b) return true; style[g.id] = b[2] ? fmtJ : fmt; return src.slice(b[0], b[1]) !== style[g.id](g); });
if (bad.length) { console.log('!! formatter does not round-trip: ' + bad.map((g) => g.id).join(' ')); process.exit(1); }
const dir = path.join(__dirname, 'work', 'GREV');
const plans = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /^plan-G\d+\.json$/.test(f)).sort() : [];
if (!plans.length) { console.log('round-trip OK (' + G.length + ' blocks); no plans'); process.exit(0); }
const byId = Object.fromEntries(G.map((g) => [g.id, g])), changed = new Set(), deleted = new Set(), log = [], appended = [], kids = {};
const ref = (r) => { const [s, a] = r.split(':').map(Number); return s * 1000 + a; };
for (const f of plans) {
  const P = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const [id, p] of Object.entries(P)) {
    if (id === '_new') {               // stand-alone new groups, appended after the last group
      for (const n of p) {
        if (byId[n.id]) { console.log(`!! _new id ${n.id} exists`); process.exit(1); }
        for (const k of ['id', 'nameEn', 'nameBn', 'nameAr', 'descEn', 'descBn', 'verses']) if (!n[k]) { console.log(`!! new ${n.id}: missing ${k}`); process.exit(1); }
        const ng = { id: n.id, nameEn: n.nameEn, nameBn: n.nameBn, nameAr: n.nameAr, descEn: n.descEn, descBn: n.descBn,
          verses: [...new Set(n.verses)].sort((a, b) => ref(a) - ref(b)) };
        G.push(ng); byId[n.id] = ng; changed.add(n.id); appended.push(ng); log.push(`  + new ${n.id}: ${ng.verses.join(' ')}`);
      }
      continue;
    }
    const g = byId[id];
    if (!g) { console.log(`!! ${f}: unknown group ${id}`); process.exit(1); }
    const act = String(p.action || '');
    if (/delete|merge/.test(act) && !p.verses) { deleted.add(id); log.push(`${id}: ${act}`); }
    else {
      if (act === 'keep' && !p.verses && !p.nameEn && !p.descEn) { log.push(`${id}: keep`); continue; }
      if (p.verses) {
        const vs = [...new Set(p.verses)].sort((a, b) => ref(a) - ref(b));
        if (vs.length < 2) { console.log(`!! ${id}: fewer than 2 verses`); process.exit(1); }
        g.verses = vs;
    }
    for (const k of ['nameEn', 'nameBn', 'nameAr', 'descEn', 'descBn']) if (p[k]) g[k] = p[k];
    changed.add(id); log.push(`${id}: ${act} -> ${g.verses.join(' ')}`);
    }
    for (const n of p.new || []) {
      if (byId[n.id]) { console.log(`!! ${id}: new id ${n.id} exists`); process.exit(1); }
      for (const k of ['id', 'nameEn', 'nameBn', 'nameAr', 'descEn', 'descBn', 'verses']) if (!n[k]) { console.log(`!! new ${n.id}: missing ${k}`); process.exit(1); }
      n.verses = [...new Set(n.verses)].sort((a, b) => ref(a) - ref(b));
      const ng = { id: n.id, nameEn: n.nameEn, nameBn: n.nameBn, nameAr: n.nameAr, descEn: n.descEn, descBn: n.descBn, verses: n.verses };
      (kids[id] = kids[id] || []).push(ng); G.push(ng); byId[n.id] = ng; changed.add(n.id); log.push(`  + new ${n.id}: ${n.verses.join(' ')}`);
    }
  }
}
G = G.filter((g) => !deleted.has(g.id));
const N = notes(); for (const id of deleted) delete N[id];
console.log(log.join('\n'));
console.log(`\n${changed.size} groups changed, ${deleted.size} deleted, ${G.length} groups now`);
console.log('changed ids: ' + [...changed].filter((id) => !deleted.has(id)).join(','));
if (write) {
  let out = src;
  for (const g of groups()) {            // original order: replace, or delete; split children follow their source
    const b = block(out, g.id), F = style[g.id];
    const parts = (deleted.has(g.id) ? [] : [byId[g.id]]).concat(kids[g.id] || []).map(F);
    if (parts.length) { out = out.slice(0, b[0]) + parts.join(',\n') + out.slice(b[1]); continue; }
    const after = out.slice(b[1], b[1] + 2) === ',\n';   // drop the block and the comma joining it to a neighbour
    out = after ? out.slice(0, b[0]) + out.slice(b[1] + 2) : out.slice(0, b[0]).replace(/,\n$/, '\n') + out.slice(b[1] + 1);
  }
  if (appended.length) {               // after the last group block, in that block's style
    const last = groups().filter((g) => !deleted.has(g.id)).pop(), b = block(out, last.id), F = style[last.id];
    out = out.slice(0, b[1]) + appended.map((g) => ',\n' + F(g)).join('') + out.slice(b[1]);
  }
  fs.writeFileSync(FILE, out);
  fs.writeFileSync(path.join(ROOT, NOTES), JSON.stringify(N) + '\n');
  fs.writeFileSync(path.join(dir, 'changed.txt'), [...changed].filter((id) => !deleted.has(id)).join(',') + '\n');
  const n = (() => { const c = {}; require('vm').createContext(c); require('vm').runInContext(out + ';this.G = MUTASHABIHAT_GROUPS;', c); return c.G.length; })();
  console.log(`written; file now loads with ${n} groups`);
} else console.log('(dry run; pass --write)');
