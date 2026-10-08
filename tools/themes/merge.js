// Ship an audited draft: validate, then write data/themes/<id>.json.
// usage: node tools/themes/merge.js <id>
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const ROOT = path.join(__dirname, '../..');
const id = process.argv[2];
const draft = path.join(__dirname, 'work', id, 'draft.json');
if (!fs.existsSync(draft)) { console.log('no draft for', id); process.exit(1); }
try { console.log(execFileSync('node', [path.join(__dirname, 'validate.js'), draft]).toString().trim()); }
catch (e) { console.log(String(e.stdout)); console.log('NOT MERGED: fix the ERRORs first'); process.exit(1); }
const d = JSON.parse(fs.readFileSync(draft, 'utf8'));
const out = path.join(ROOT, 'data/themes', id + '.json');
const seed = JSON.parse(fs.readFileSync(out, 'utf8'));
if (!d.videos || !d.videos.length) d.videos = seed.videos;          // videos are curated outside the draft
d.refs = [...new Set(d.refs)].sort((a, b) => { const [s1, a1] = a.split(':').map(Number), [s2, a2] = b.split(':').map(Number); return s1 - s2 || a1 - a2; });
fs.writeFileSync(out, JSON.stringify(d, null, 1) + '\n');
console.log(`merged ${id} -> ${path.relative(ROOT, out)}`);
