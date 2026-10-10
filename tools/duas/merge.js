// Apply an audit (optional) to a duas batch (D1, D2) or the virtues batch (V1), then merge
// it into data/quran-duas.json. Duas get their Arabic words, en/bn glosses and en/bn ayah
// translations injected here from bundled data (never drafted); other languages are loaded
// by the page from the shared per-language files.
// usage: node tools/duas/merge.js <D1|D2|V1> [--apply-audit] [--write]
// audit.json findings: { where: "<id> <field>", fix: {en, bn} } for title/context (duas) or
// title (virtues); { where: "<id> <field>", value } for parts/who/kind/theme or target/virtues;
// { where: "<id>", remove: true }; { add: {...a complete entry...} }.
const fs = require('fs'), path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../..'), OUT = path.join(ROOT, 'data/quran-duas.json');
const batch = process.argv[2], write = process.argv.includes('--write');
const isV = batch === 'V1';
if (!/^(D1|D2|V1)$/.test(batch || '')) { console.log('usage: merge.js <D1|D2|V1> [--apply-audit] [--write]'); process.exit(1); }
const dir = isV ? path.join(ROOT, 'tools/virtues/work', batch) : path.join(__dirname, 'work', batch);
const P = path.join(dir, 'draft.json');
const key = (s, a) => s * 1000 + a;
if (process.argv.includes('--apply-audit')) {
  let D = JSON.parse(fs.readFileSync(P, 'utf8'));
  const A = JSON.parse(fs.readFileSync(path.join(dir, 'audit.json'), 'utf8'));
  const TEXT = isV ? ['title'] : ['title', 'context'], DATA = isV ? ['target', 'virtues', 'alsoSurahs'] : ['parts', 'who', 'kind', 'theme'];
  let ok = 0;
  for (const f of A.findings || []) {
    if (f.add) { D.push(f.add); ok++; continue; }
    const [id, field] = String(f.where || '').trim().split(/\s+/), e = D.find(x => x.id === id);
    if (!e) { console.log('MANUAL', f.where); continue; }
    if (f.remove) { D = D.filter(x => x !== e); ok++; continue; }
    if (TEXT.includes(field) && f.fix && f.fix.en && f.fix.bn) e[field] = Object.assign({}, e[field], { en: f.fix.en, bn: f.fix.bn });
    else if (DATA.includes(field) && 'value' in f) e[field] = f.value;
    else { console.log('MANUAL', f.where); continue; }
    ok++;
  }
  if (!isV) D.sort((a, b) => { const [s1, a1] = a.parts[0].ref.split(':').map(Number), [s2, a2] = b.parts[0].ref.split(':').map(Number); return key(s1, a1) - key(s2, a2); });
  if (!fs.existsSync(P + '.pre-audit')) fs.copyFileSync(P, P + '.pre-audit');
  fs.writeFileSync(P, JSON.stringify(D, null, 1));
  console.log(`${ok} audit fixes applied`);
}
const gate = isV ? path.join(ROOT, 'tools/virtues/validate.js') : path.join(__dirname, 'validate.js');
try { execFileSync('node', [gate, batch], { stdio: 'pipe' }); }
catch (e) { console.log(String(e.stdout)); console.log('!! validation fails; not merging'); process.exit(1); }
const D = JSON.parse(fs.readFileSync(P, 'utf8'));
const have = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : { duas: [], virtues: [] };
if (isV) {
  have.virtues = D.map(v => ({ id: v.id, target: v.target, ...(v.alsoSurahs ? { alsoSurahs: v.alsoSurahs } : {}), title: v.title, virtues: v.virtues.map(x => ({ text: x.text, hadith: { collection: x.hadith.collection, number: String(x.hadith.number), grade: x.hadith.grade, gradedBy: x.hadith.gradedBy, quote: x.hadith.quote } })) }));
} else {
  const J = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
  const QW = J('data/quran-words.json'), GE = J('data/wbw/en.json'), GB = J('data/wbw/bn.json'), TE = J('data/translations/en.json'), TB = J('data/translations/bn.json');
  const range = batch === 'D1' ? [1, 17] : [18, 114];
  const inBatch = d => { const s = +d.parts[0].ref.split(':')[0]; return s >= range[0] && s <= range[1]; };
  const built = D.map(d => ({
    id: d.id, who: d.who, kind: d.kind, theme: d.theme, title: d.title, context: d.context,
    parts: d.parts.map(p => ({ ref: p.ref, from: p.from, to: p.to,
      ar: QW[p.ref].slice(p.from - 1, p.to), en: (GE[p.ref] || []).slice(p.from - 1, p.to), bn: (GB[p.ref] || []).slice(p.from - 1, p.to) })),
    tr: { en: Object.fromEntries(d.parts.map(p => [p.ref, TE[p.ref] || ''])), bn: Object.fromEntries(d.parts.map(p => [p.ref, TB[p.ref] || ''])) },
  }));
  for (const d of built) for (const p of d.parts) if (p.en.length !== p.ar.length || p.bn.length !== p.ar.length) console.log(`!! ${d.id} ${p.ref}: gloss count differs from words`);
  have.duas = have.duas.filter(d => !inBatch(d)).concat(built)
    .sort((a, b) => { const [s1, a1] = a.parts[0].ref.split(':').map(Number), [s2, a2] = b.parts[0].ref.split(':').map(Number); return key(s1, a1) - key(s2, a2); });
}
const words = have.duas.reduce((n, d) => n + d.parts.reduce((m, p) => m + p.ar.length, 0), 0);
console.log(`${batch}: ${D.length} entries → ${have.duas.length} duas (${words} words), ${have.virtues.length} virtue targets`);
if (write) fs.writeFileSync(OUT, JSON.stringify(have) + '\n');
console.log(write ? 'merged' : '(dry run; pass --write)');
