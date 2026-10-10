// Mechanical gate for the virtues batch. usage: node tools/virtues/validate.js V1
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const batch = process.argv[2] || 'V1';
const QW = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
let D; try { D = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', batch, 'draft.json'), 'utf8')); } catch (e) { console.log('ERROR draft.json:', e.message); process.exit(1); }
const err = [], E = (w, m) => err.push(`${w}: ${m}`);
const BN = /[ঀ-৿]/, flat = s => String(s).replace(/\s+/g, ' ').trim();
const ayatIn = s => Object.keys(QW).filter(k => k.startsWith(s + ':')).length;
function pair(o, w, what, max) {
  if (!o || typeof o.en !== 'string' || typeof o.bn !== 'string' || !o.en.trim() || !o.bn.trim()) return E(w, `${what} needs {en, bn}`);
  if (BN.test(o.en)) E(w, `${what}.en contains Bengali`);
  if (!BN.test(o.bn)) E(w, `${what}.bn has no Bengali`);
  if (o.en.length > max) E(w, `${what}.en is ${o.en.length} chars (max ${max})`);
  for (const l of ['en', 'bn']) {
    if (/<[a-z\/]/i.test(o[l])) E(w, `${what}.${l} has HTML`);
    if ((o[l].match(/—/g) || []).length > 1) E(w, `${what}.${l} has more than one em dash`);
    if (l === 'bn' && /[0-9]/.test(o[l])) E(w, `${what}.bn has Latin digits`);
  }
}
if (!Array.isArray(D)) { console.log('ERROR draft must be an array'); process.exit(1); }
const ids = new Set(); let n = 0;
for (const v of D) {
  const w = v.id || '(no id)';
  if (ids.has(v.id)) E(w, 'duplicate id'); ids.add(v.id);
  const t = v.target || {};
  if (!(t.surah >= 1 && t.surah <= 114)) E(w, 'target.surah invalid');
  else if (t.ayat != null) {
    const m = /^(\d+)(?:-(\d+))?$/.exec(String(t.ayat));
    if (!m || +m[1] < 1 || +(m[2] || m[1]) > ayatIn(t.surah) || +(m[2] || m[1]) < +m[1]) E(w, `target.ayat "${t.ayat}" invalid for surah ${t.surah}`);
  }
  pair(v.title, w, 'title', 70);
  if (!Array.isArray(v.virtues) || !v.virtues.length) { E(w, 'virtues missing'); continue; }
  for (const x of v.virtues) {
    n++;
    pair(x.text, w, 'virtue text', 400);
    const h = x.hadith || {};
    const f = path.join(__dirname, 'work', 'hadith', `${h.collection}_${h.number}.txt`);
    if (!fs.existsSync(f)) { E(w, `hadith ${h.collection} ${h.number} not fetched (tools/virtues/hadith.js)`); continue; }
    const file = fs.readFileSync(f, 'utf8'), grades = (/^GRADES: (.*)$/m.exec(file) || [])[1] || '';
    if (!h.quote || flat(h.quote).length < 20) E(w, `${h.collection} ${h.number}: quote too short`);
    else if (!flat(file).includes(flat(h.quote))) E(w, `${h.collection} ${h.number}: quote not in the saved file: "${flat(h.quote).slice(0, 60)}…"`);
    if (/^(bukhari|muslim)$/.test(h.collection)) { if (h.gradedBy !== (h.collection === 'bukhari' ? 'Bukhari' : 'Muslim')) E(w, `${h.collection} ${h.number}: gradedBy should be ${h.collection === 'bukhari' ? 'Bukhari' : 'Muslim'}`); }
    else {
      const g = grades.split(' ; ').map(s => s.split(': ')).find(([name]) => name === h.gradedBy);
      if (!g) E(w, `${h.collection} ${h.number}: grader "${h.gradedBy}" not in the file (${grades})`);
      else if (g[1] !== h.grade) E(w, `${h.collection} ${h.number}: file says ${h.gradedBy}: ${g[1]}, draft says ${h.grade}`);
      else if (!/sahih|hasan/i.test(g[1]) || /da.?if|mawdu|munkar/i.test(g[1])) E(w, `${h.collection} ${h.number}: grade "${g[1]}" does not qualify`);
    }
  }
}
console.log(`${batch}: ${D.length} targets, ${n} virtues`);
err.forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
