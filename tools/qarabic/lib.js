// Shared reads over data/qarabic/ for prep / validate / merge.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const DIR = path.join(ROOT, 'data/qarabic');
const manifest = () => JSON.parse(fs.readFileSync(path.join(DIR, 'manifest.json'), 'utf8'));
const load = f => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf8'));
// parse-HI-LO.json holds surahs LO..HI
const range = f => { const m = f.match(/^parse-(\d+)-(\d+)\.json$/); return m ? [+m[2], +m[1]] : null; };
function fileOf(s) {
  const f = manifest().find(f => { const r = range(f); return r && r[0] <= s && s <= r[1]; });
  if (!f) throw new Error(`no data/qarabic file covers surah ${s}; create parse-HI-LO.json and add it to manifest.json first`);
  return f;
}
const unitOf = s => { const u = load(fileOf(s)).units.find(u => u.id === `read-${s}`); if (!u) throw new Error(`no unit read-${s}`); return u; };
const lessonsBySurah = s => load(fileOf(s)).lessons.filter(l => l.unit === `read-${s}`);
const allLessons = () => manifest().flatMap(f => load(f).lessons || []);
module.exports = { ROOT, DIR, manifest, load, range, fileOf, unitOf, lessonsBySurah, allLessons };
// Write back in the file's own indentation (some files use 1 space, some 2), so a
// merge diff shows only the lessons that changed.
function save(f, data) {
  const p = path.join(DIR, f), old = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : '';
  const ind = ((old.split('\n')[1] || '').match(/^ */) || [''])[0].length || 2;
  fs.writeFileSync(p, JSON.stringify(data, null, ind) + (old.endsWith('\n') ? '\n' : ''));
}
module.exports.save = save;
