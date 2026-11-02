// Second Tadabbur breadth wave: same method as tools/tadabbur-targets.json, at 1 per 4 ayahs.
// usage: node tools/make-tadabbur-targets-2.js [--write]
const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..');
const L = require(path.join(ROOT, 'tests/lib.js'));
const t1 = require('./tadabbur-targets.json');
const subjects = require(path.join(ROOT, 'data/subjects.json'));
const have = Object.keys(L.get(L.load('js/tadabbur-data.js'), 'TADABBUR_NOTES'));
const span = k => { const m = k.match(/^(\d+):(\d+)(?:-(\d+))?$/); if (!m) return []; const r = []; for (let a = +m[2]; a <= (+m[3] || +m[2]); a++) r.push(m[1] + ':' + a); return r; };
const cov = new Set(have.flatMap(span));
const cites = {};
for (const s of subjects) for (const r of s.refs || []) for (const v of span(r)) cites[v] = (cites[v] || 0) + 1;
const out = { generated: new Date().toISOString().slice(0, 10),
  method: 'wave 2: target per surah = round(ayahCount/4), min 1; surah divided into that many position buckets; in each bucket with no shipped coverage, the ayah cited by the most subjects in data/subjects.json is chosen, preferring ayahs not adjacent to shipped coverage (earliest on ties); adjacent picks merged into ranges',
  total_target: 0, new_total: 0, surahs: {}, order: [] };
for (let s = 1; s <= 114; s++) {
  const n = t1.surahs[s].ayahs, T = Math.max(1, Math.round(n / 4));
  const picks = [];
  for (let i = 0; i < T; i++) {
    const a0 = Math.floor(i * n / T) + 1, a1 = Math.floor((i + 1) * n / T);
    const ay = []; for (let a = a0; a <= a1; a++) ay.push(a);
    if (ay.some(a => cov.has(s + ':' + a))) continue;
    const score = a => (cites[s + ':' + a] || 0) * 10 - (cov.has(s + ':' + (a - 1)) || cov.has(s + ':' + (a + 1)) ? 5 : 0);
    picks.push(ay.reduce((b, a) => score(a) > score(b) ? a : b));
  }
  const keys = [];
  for (const a of picks) { const last = keys[keys.length - 1]; if (last && last[1] === a - 1) last[1] = a; else keys.push([a, a]); }
  const ks = keys.map(([a, b]) => s + ':' + a + (b > a ? '-' + b : ''));
  out.surahs[s] = { ayahs: n, target: T, new: ks };
  out.total_target += T; out.new_total += ks.length; out.order.push(...ks);
}
console.log(`targets ${out.total_target}, new ${out.new_total}; first: ${out.order.slice(0, 12).join(' ')}`);
if (process.argv.includes('--write')) fs.writeFileSync(path.join(__dirname, 'tadabbur-targets-2.json'), JSON.stringify(out, null, 1) + '\n');
