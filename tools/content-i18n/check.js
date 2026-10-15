// Gate for one chunk's translation. usage: node tools/content-i18n/check.js <C> <lang>
const { fs, path, WORK } = require('./lib.js');
const [c, lang] = process.argv.slice(2);
if (!c || !lang) { console.log('usage: check.js <C> <lang>'); process.exit(1); }
const EN = JSON.parse(fs.readFileSync(path.join(WORK, c, 'en.json'), 'utf8'));
let TR; try { TR = JSON.parse(fs.readFileSync(path.join(WORK, c, `tr-${lang}.json`), 'utf8')); } catch (e) { console.log('ERROR tr file:', e.message); process.exit(1); }
const SCRIPT = { ar: /[؀-ۿ]/g, ur: /[؀-ۿ]/g, fa: /[؀-ۿ]/g, hi: /[ऀ-ॿ]/g, ru: /[Ѐ-ӿ]/g,
  zh: /[一-鿿]/g, ja: /[぀-ヿ一-鿿]/g, id: /[a-z]/gi, ms: /[a-z]/gi, tr: /[a-zçğışöü]/gi, fr: /[a-zàâçéèêëîïôûùüÿœ]/gi, es: /[a-záéíñóúü]/gi, de: /[a-zäöüß]/gi };
const MARK = { ur: /[ےہںکی]/, fa: /[پچژگی]/, ar: /[ةى]/, tr: /[ğış]/, de: /\b(und|nicht|die|der)\b/, fr: /\b(et|le|la|les|que)\b/, es: /\b(y|el|la|los|que)\b/,
  id: /\b(yang|dan|tidak|kita)\b/, ms: /\b(yang|dan|tidak|kita)\b/, ru: /[ыэё]/, hi: /[ािीुू]/, ja: /[぀-ゟ]/, zh: /[的是]/ };
if (!SCRIPT[lang]) { console.log('unknown lang'); process.exit(1); }
const err = [], E = (id, m) => err.push(`${id}: ${m}`);
const toks = (s, re) => (s.match(re) || []).sort().join(' ');
for (const id of Object.keys(EN)) {
  const en = EN[id], t = TR[id];
  if (typeof t !== 'string' || !t.trim()) { E(id, 'missing'); continue; }
  if (toks(en, /⟦\d+⟧/g) !== toks(t, /⟦\d+⟧/g)) E(id, 'Arabic placeholders ⟦n⟧ not kept exactly');
  if (toks(en, /\{[a-zA-Z_]+\}/g) !== toks(t, /\{[a-zA-Z_]+\}/g)) E(id, '{placeholder} not kept');
  for (const r of en.match(/\d+:\d+(?:-\d+)?/g) || []) if (!t.includes(r)) E(id, `verse ref ${r} not kept`);
  if (/\?\s*$/.test(en) && !/[?？؟]\s*$/.test(t)) E(id, 'question lost its question mark');
  const bare = t.replace(/⟦\d+⟧/g, ''), letters = (bare.match(/\p{L}/gu) || []).length, own = (bare.match(SCRIPT[lang]) || []).length;
  if (letters >= 6 && own / letters < 0.6) E(id, `not mostly ${lang} script`);
  const words = en.split(/\s+/).length;
  // Latin-script targets share English's letters, so also catch untranslated English by its function words
  if (/^(id|ms|tr|fr|es|de)$/.test(lang) && words >= 6) {
    const hits = new Set((bare.toLowerCase().match(/\b(the|and|of|is|with|that|this|for|you|your|are|was|which|from)\b/g) || []));
    if (hits.size >= 3) E(id, `looks like English (${[...hits].join(', ')})`);
  }
  if (t.trim() === en.trim() && words > 3) E(id, 'identical to English');
  if (words >= 5) {
    const ratio = t.length / en.length, lo = /^(zh|ja)$/.test(lang) ? 0.15 : 0.4, hi = /^(zh|ja)$/.test(lang) ? 1.3 : 2.3;
    if (ratio < lo || ratio > hi) E(id, `length ×${ratio.toFixed(2)} of English`);
  }
}
// ids dropped from en.json because their English was rewritten again (see prune.js) are ignored, not errors
const INDEX = JSON.parse(fs.readFileSync(path.join(WORK, 'index.json'), 'utf8'));
for (const id of Object.keys(TR)) if (!(id in EN) && !(id in INDEX)) E(id, 'not in en.json');
// Quran quoted inside ﴿ ﴾ must be the Quran's own words (a contiguous run from one ayah, as filled from
// data/quran-words.json by a {Q:s:a:from-to} placeholder), never written from memory.
if (Object.values(TR).some((t) => /﴿/.test(t))) {
  const QW = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/quran-words.json'), 'utf8'));
  // NFC: shadda+vowel order differs between sources but is canonically equal
  const norm = (w) => w.normalize('NFC').replace(/[\u06D6-\u06ED]/g, '').trim();
  const ayat = Object.values(QW).map((ws) => ' ' + ws.map(norm).join(' ') + ' ');
  for (const [id, t] of Object.entries(TR)) for (const m of t.matchAll(/﴿([^﴾]*)﴾/g)) {
    const q = ' ' + m[1].trim().split(/\s+/).map(norm).join(' ') + ' ';
    if (!ayat.some((x) => x.includes(q))) E(id, `﴿${m[1].slice(0, 40)}…﴾ is not an exact run of Quran words`);
  }
}
if (MARK[lang] && !MARK[lang].test(Object.values(TR).join(' '))) err.push(`no ${lang} marker words found anywhere: is this the right language?`);
console.log(`${c} ${lang}: ${Object.keys(TR).length}/${Object.keys(EN).length} strings`);
err.slice(0, 40).forEach((x) => console.log('ERROR ' + x));
console.log(err.length ? `!! ${err.length} errors` : 'CLEAN');
process.exit(err.length ? 1 : 0);
