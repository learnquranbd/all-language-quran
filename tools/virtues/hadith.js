// Fetch one hadith with its gradings (fawazahmed0/hadith-api via jsDelivr), save it, print it.
// usage: node tools/virtues/hadith.js <bukhari|muslim|abudawud|tirmidhi|nasai|ibnmajah> <N>
// N is the number as usually cited (sunnah.com): for Muslim that is the Fuad ʿAbd al-Bāqī
// number, looked up through the dataset's arabicnumber; its sub-narrations (810a, 810b)
// are printed together. Saved to tools/virtues/work/hadith/<col>_<N>.txt;
// a saved copy is reused. The validator checks quotes against these files.
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const [col, num] = args; const byAr = col === 'muslim';
const COLS = ['bukhari', 'muslim', 'abudawud', 'tirmidhi', 'nasai', 'ibnmajah'];
if (!COLS.includes(col) || !num) { console.log('usage: hadith.js <' + COLS.join('|') + '> <N> '); process.exit(1); }
const dir = path.join(__dirname, 'work', 'hadith'); fs.mkdirSync(dir, { recursive: true });
const get = async (u) => { for (let i = 0; i < 4; i++) { try { const r = await fetch(u); if (r.ok) return r.json(); if (r.status === 404) return null; } catch (_) { /* retry */ } await new Promise(r => setTimeout(r, 1500)); } throw new Error('fetch failed: ' + u); };
(async () => {
  const f = path.join(dir, `${col}_${num}.txt`);
  if (fs.existsSync(f)) { console.log(fs.readFileSync(f, 'utf8')); return; }
  let h, n = num;
  if (byAr) {
    const all = await get(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${col}.min.json`);
    const alla = await get(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-${col}.min.json`).catch(() => null);
    const hs = (all.hadiths || []).filter(x => String(Math.floor(x.arabicnumber)) === String(num));
    if (!hs.length) { console.log(`muslim ${num}: not found`); return; }
    const ars = alla ? (alla.hadiths || []).filter(x => String(Math.floor(x.arabicnumber)) === String(num)) : [];
    const text = `COLLECTION: muslim\nNUMBER: ${num} (dataset ${hs.map(x => x.hadithnumber).join(', ')})\nGRADES: (in the Ṣaḥīḥ)\nEN: ${hs.map(x => x.text).join('\n---\n')}\nAR: ${ars.map(x => x.text).join('\n---\n')}\n`;
    fs.writeFileSync(f, text); console.log(text); return;
  }
  if (!h) { const j = await get(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${col}/${n}.json`); h = j && j.hadiths && j.hadiths[0]; }
  if (!h) { console.log(`${col} ${n}: not found`); return; }
  const ar = await get(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-${col}/${n}.json`).catch(() => null);
  const grades = (h.grades || []).map(g => `${g.name}: ${g.grade}`).join(' ; ') || (/^(bukhari|muslim)$/.test(col) ? '(in the Ṣaḥīḥ)' : '(no grading in the dataset)');
  const text = `COLLECTION: ${col}\nNUMBER: ${n} (arabicnumber ${h.arabicnumber})\nGRADES: ${grades}\nEN: ${h.text}\nAR: ${(ar && ar.hadiths && ar.hadiths[0] && ar.hadiths[0].text) || ''}\n`;
  fs.writeFileSync(f, text);
  console.log(text);
})().catch(e => { console.log('ERROR', e.message); process.exit(1); });
