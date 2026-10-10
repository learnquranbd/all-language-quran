// Gate for one chunk's translation. usage: node tools/tadabbur-i18n/check-tr.js <C> <lang>
const { fs, path, WORK } = require('./lib.js');
const [c, lang] = process.argv.slice(2);
if (!c || !lang) { console.log('usage: check-tr.js <C> <lang>'); process.exit(1); }
const EN = JSON.parse(fs.readFileSync(path.join(WORK, c, 'en.json'), 'utf8'));
let TR; try { TR = JSON.parse(fs.readFileSync(path.join(WORK, c, `tr-${lang}.json`), 'utf8')); } catch (e) { console.log('ERROR tr file:', e.message); process.exit(1); }
// dominant script per language, and a few words that should appear somewhere in a chunk
const SCRIPT = { ar: /[؀-ۿ]/g, ur: /[؀-ۿ]/g, fa: /[؀-ۿ]/g, hi: /[ऀ-ॿ]/g, ru: /[Ѐ-ӿ]/g,
  zh: /[一-鿿]/g, ja: /[぀-ヿ一-鿿]/g, id: /[a-z]/gi, ms: /[a-z]/gi, tr: /[a-zçğışöü]/gi, fr: /[a-zàâçéèêëîïôûùüÿœ]/gi, es: /[a-záéíñóúü]/gi, de: /[a-zäöüß]/gi };
const MARK = { ur: /[ےہںکی]/, fa: /[پچژگی]/, ar: /[ةى]/, tr: /[ğış]/, de: /\b(und|nicht|die|der)\b/, fr: /\b(et|le|la|les|que)\b/, es: /\b(y|el|la|los|que)\b/,
  id: /\b(yang|dan|tidak|kita)\b/, ms: /\b(yang|dan|tidak|kita)\b/, ru: /[ыэё]/, hi: /[ािीुू]/, ja: /[぀-ゟ]/, zh: /[的是]/ };
const err = [], E = (id, m) => err.push(`${id}: ${m}`);
if (!SCRIPT[lang]) { console.log('unknown lang'); process.exit(1); }
for (const id of Object.keys(EN)) {
  const en = EN[id], t = TR[id];
  if (typeof t !== 'string' || !t.trim()) { E(id, 'missing'); continue; }
  const letters = (t.match(/\p{L}/gu) || []).length, own = (t.match(SCRIPT[lang]) || []).length;
  if (letters && own / letters < 0.6) E(id, `not mostly ${lang} script`);
  if (t.trim() === en.trim() && en.split(/\s+/).length > 3) E(id, 'identical to English');
  for (const r of en.match(/\d+:\d+(?:-\d+)?/g) || []) if (!t.includes(r)) E(id, `verse ref ${r} not kept`);
  if (/\?\s*$/.test(en) && !/[?？؟]\s*$/.test(t)) E(id, 'question lost its question mark');
  const ratio = t.length / en.length, lo = /^(zh|ja)$/.test(lang) ? 0.15 : 0.45, hi = /^(zh|ja)$/.test(lang) ? 1.2 : 2.2;
  if (ratio < lo || ratio > hi) E(id, `length ×${ratio.toFixed(2)} of English`);
}
for (const id of Object.keys(TR)) if (!(id in EN)) E(id, 'not in en.json');
// Quran quoted inside ﴿ ﴾ must be the Quran's own words, copied from data/quran-words.json
// (a contiguous run of words from one ayah), never written from memory.
if (Object.values(TR).some(t => /﴿/.test(t))) {
  const QW = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/quran-words.json'), 'utf8'));
  // NFC: shadda+vowel order differs between sources but is canonically equal (and renders the same)
  const norm = w => w.normalize('NFC').replace(/[\u06D6-\u06ED]/g, '').trim();
  const ayat = Object.values(QW).map(ws => ' ' + ws.map(norm).join(' ') + ' ');
  for (const [id, t] of Object.entries(TR)) for (const m of t.matchAll(/﴿([^﴾]*)﴾/g)) {
    const q = ' ' + m[1].trim().split(/\s+/).map(norm).join(' ') + ' ';
    if (!ayat.some(a => a.includes(q))) E(id, `﴿${m[1].slice(0, 40)}…﴾ is not an exact run of Quran words`);
  }
}
if (MARK[lang] && !MARK[lang].test(Object.values(TR).join(' '))) err.push(`no ${lang} marker words found anywhere: is this the right language?`);
console.log(`${c} ${lang}: ${Object.keys(TR).length}/${Object.keys(EN).length} strings`);
err.slice(0, 40).forEach(x => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
