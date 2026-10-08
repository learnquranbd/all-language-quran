// Mechanical gate for a theme page draft. usage: node tools/themes/validate.js <file.json> [...]
// Exit 1 on any ERROR. WARN lines are judgement calls for the auditor.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const { AYAH_COUNTS } = require(path.join(ROOT, 'tests/lib.js'));
const { THEMES } = require('./registry.js');
const IDS = new Set(THEMES.map(t => t.id));
const words = s => String(s || '').trim().split(/\s+/).filter(Boolean).length;
let bad = 0;
for (const file of process.argv.slice(2)) {
  const E = [], W = [];
  let d; try { d = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { console.log(`${file}: ERROR not JSON: ${e.message}`); bad++; continue; }
  const validRef = r => { const m = String(r).match(/^(\d+):(\d+)(?:-(\d+))?$/); if (!m) return false; const s = +m[1], a = +m[2], b = +(m[3] || m[2]); return s >= 1 && s <= 114 && a >= 1 && b >= a && b <= AYAH_COUNTS[s]; };
  const pair = (o, where, lo, hi) => {
    if (!o || typeof o !== 'object' || !o.en || !o.bn) { E.push(`${where}: needs {en, bn}`); return; }
    const n = words(o.en);
    if (lo && n < lo) W.push(`${where}: ${n} EN words (< ${lo})`);
    if (hi && n > hi) W.push(`${where}: ${n} EN words (> ${hi})`);
    if ((o.bn.match(/—/g) || []).length > 1) E.push(`${where}: ${(o.bn.match(/—/g) || []).length} em dashes in Bengali (max 1)`);
    if (/\b\d{1,3}:\d{1,3}\b/.test(o.bn)) E.push(`${where}: ASCII digits in a Bengali verse ref`);
    if (/[a-zA-Z]{4,}/.test(o.bn.replace(/https?:\S+/g, ''))) W.push(`${where}: Latin word in Bengali: ${o.bn.match(/[a-zA-Z]{4,}/)[0]}`);
  };
  if (!IDS.has(d.id)) E.push(`id ${d.id} not in registry`);
  if (d.status !== 'full') E.push(`status must be "full"`);
  pair(d.tagline, 'tagline', 6, 25);
  if (!Array.isArray(d.intro) || d.intro.length < 2 || d.intro.length > 3) E.push('intro: 2-3 paragraphs');
  (d.intro || []).forEach((p, i) => pair(p, `intro[${i}]`, 50, 120));
  const secs = d.sections || [];
  if (secs.length < 5 || secs.length > 7) E.push(`sections: ${secs.length} (need 5-7)`);
  const refSet = new Set(d.refs || []);
  const titles = new Set();
  let total = (d.intro || []).reduce((n, p) => n + words(p.en), 0), nH = 0, nV = 0;
  secs.forEach((s, i) => {
    const w = `sections[${i}]`;
    if (!s.id || !/^[a-z0-9-]+$/.test(s.id)) E.push(`${w}: id must be kebab-case`);
    pair(s.title, `${w}.title`, 1, 7);
    if (s.title && titles.has(s.title.en)) E.push(`${w}: duplicate title`); if (s.title) titles.add(s.title.en);
    if (!Array.isArray(s.body) || s.body.length < 1 || s.body.length > 2) E.push(`${w}.body: 1-2 paragraphs`);
    (s.body || []).forEach((p, j) => { pair(p, `${w}.body[${j}]`, 50, 120); total += words(p.en); });
    if (!Array.isArray(s.verses) || s.verses.length < 2 || s.verses.length > 5) E.push(`${w}.verses: 2-5`);
    (s.verses || []).forEach((v, j) => {
      nV++;
      if (!validRef(v.ref)) E.push(`${w}.verses[${j}]: bad ref ${v.ref}`);
      else if (!String(v.ref).includes('-') && !refSet.has(v.ref)) E.push(`${w}.verses[${j}]: ${v.ref} not in refs`);
      pair(v.note, `${w}.verses[${j}].note`, 30, 90); total += words(v.note && v.note.en);
    });
    if ((s.hadith || []).length > 2) E.push(`${w}.hadith: max 2`);
    (s.hadith || []).forEach((h, j) => {
      nH++;
      if (!h.src || !h.url || !/^https:\/\/quranx\.com\/hadith\//.test(h.url)) E.push(`${w}.hadith[${j}]: needs src + quranx url`);
      pair(h.text, `${w}.hadith[${j}].text`); if (h.note) pair(h.note, `${w}.hadith[${j}].note`, 0, 70);
      total += words(h.text && h.text.en) + words(h.note && h.note.en);
    });
  });
  if (!Array.isArray(d.practice) || d.practice.length < 4 || d.practice.length > 6) E.push('practice: 4-6');
  (d.practice || []).forEach((p, i) => pair(p, `practice[${i}]`, 5, 35));
  for (const r of d.refs || []) if (!validRef(r) || r.includes('-')) E.push(`refs: bad ${r}`);
  if (new Set(d.refs).size !== (d.refs || []).length) E.push('refs: duplicates');
  (d.refsDropped || []).forEach((x, i) => { if (!x.ref || !x.reason) E.push(`refsDropped[${i}]: needs ref + reason`); });
  if (!Array.isArray(d.reading) || d.reading.length < 2 || d.reading.length > 5) W.push('reading: 2-5 links expected');
  (d.reading || []).forEach((r, i) => { if (!/^https:\/\//.test(r.url || '') || !r.title) E.push(`reading[${i}]: needs https url + title`); });
  if (!Array.isArray(d.related) || d.related.length < 2 || d.related.length > 4) E.push('related: 2-4');
  (d.related || []).forEach(r => { if (!IDS.has(r) || r === d.id) E.push(`related: bad ${r}`); });
  if (!Array.isArray(d.sources) || !d.sources.length) E.push('sources: list the commentaries actually fetched');
  if (total < 2000 || total > 3400) W.push(`total EN words ${total} (aim 2,300-3,000)`);
  console.log(`${path.basename(file)}: ${secs.length} sections, ${nV} verse notes, ${nH} hadith, ${total} EN words, ${(d.refs || []).length} refs`);
  E.forEach(x => console.log('  ERROR ' + x)); W.forEach(x => console.log('  WARN  ' + x));
  if (E.length) bad++;
}
process.exit(bad ? 1 : 0);
