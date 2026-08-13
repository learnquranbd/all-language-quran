#!/usr/bin/env node
/**
 * Verify a translation batch against its English source, then optionally merge.
 *
 *   node tools/i18n-verify.js <name> <lang> [--merge]
 *
 * Reads tools/work/<name>-en.json (the source list) and
 * tools/work/<lang>.<name>.json (the batch: exact English string -> translation).
 *
 * Three gates, each of which caught a real shipped-or-nearly-shipped defect:
 *   1. KEY INTEGRITY — CI18N.tr is an exact string lookup; a key off by one
 *      character silently falls back to English while looking complete.
 *   2. LANGUAGE/SCRIPT — a batch once came back 60% Turkish labelled as Urdu
 *      and passed key checks cleanly. Dominant-script plus language-specific
 *      markers (Urdu-only letters, Persian function words, etc.).
 *   3. MARKUP/ARABIC — inline HTML tags and embedded Arabic runs must survive
 *      byte-exactly; a JS round-trip canonically reorders Arabic combining
 *      marks (NFC-equal, byte-different, invisible on screen). Urdu/Persian
 *      letterform variants of Arabic loanwords are accepted, not flagged.
 *
 * --merge writes into data/content-i18n/<lang>.json, never overwriting keys
 * that already have a value, and refuses to merge if any gate fails.
 */
const { fs, path, ROOT } = require('../tests/lib.js');

const name = process.argv[2];
const lang = process.argv[3];
const doMerge = process.argv.includes('--merge');
if (!name || !lang) { console.error('usage: i18n-verify.js <name> <lang> [--merge]'); process.exit(1); }

const SRC = JSON.parse(fs.readFileSync(path.join(__dirname, 'work', name + '-en.json'), 'utf8'));
const batchPath = path.join(__dirname, 'work', `${lang}.${name}.json`);
const dict = JSON.parse(fs.readFileSync(batchPath, 'utf8'));
const srcSet = new Set(SRC);
const problems = [];

/* ---------- 1. key integrity ---------- */
const unknown = Object.keys(dict).filter((k) => !srcSet.has(k));
const missing = SRC.filter((s) => !dict[s] || !String(dict[s]).trim());
if (unknown.length) problems.push(`${unknown.length} unknown/drifted keys (e.g. ${JSON.stringify(unknown[0]).slice(0, 60)})`);
if (missing.length) problems.push(`${missing.length} source strings missing`);
const identical = SRC.filter((s) => dict[s] && String(dict[s]).trim() === s.trim());

/* ---------- 2. language / script ---------- */
const R = {
  arabic: '\\u0600-\\u06FF\\u0750-\\u077F\\uFB50-\\uFDFF\\uFE70-\\uFEFF',
  devanagari: '\\u0900-\\u097F', cyrillic: '\\u0400-\\u04FF',
  han: '\\u4E00-\\u9FFF\\u3400-\\u4DBF', kana: '\\u3040-\\u30FF', latin: 'A-Za-z',
};
const count = (s, k) => (String(s).match(new RegExp('[' + R[k] + ']', 'g')) || []).length;
const EXPECT = {
  ar: { script: 'arabic' }, ur: { script: 'arabic', markers: /[ںھۓےکگچپژٹڈڑ]/ },
  fa: { script: 'arabic', markers: /[پچژگ]|می‌|های|هٔ/ },
  hi: { script: 'devanagari' }, ru: { script: 'cyrillic' }, zh: { script: 'han' }, ja: { script: 'kana' },
  tr: { script: 'latin', markers: /[çğışöüÇĞİŞÖÜ]/ }, fr: { script: 'latin', markers: /[àâçéèêëîïôùûü]/i },
  es: { script: 'latin', markers: /[áéíóúñ¿¡]/i }, de: { script: 'latin', markers: /[äöüß]/i },
  id: { script: 'latin' }, ms: { script: 'latin' }, bn: { script: null },
};
const spec = EXPECT[lang] || {};
if (spec.script) {
  let wrong = 0, judged = 0, markerHits = 0;
  for (const s of SRC) {
    const t = dict[s];
    if (!t || t === s) continue;
    if (String(t).replace(/[^A-Za-z؀-৿Ѐ-ӿ一-鿿ぁ-ヿ]/g, '').length < 6) continue;
    judged++;
    const want = count(t, spec.script), latin = count(t, 'latin');
    const dominant = spec.script === 'latin' ? latin >= count(t, 'arabic') : want >= latin;
    if (!dominant) wrong++;
    if (spec.markers && spec.markers.test(t)) markerHits++;
  }
  if (judged && wrong / judged > 0.05) problems.push(`wrong dominant script in ${wrong}/${judged} entries`);
  if (spec.markers && judged > 50 && markerHits / judged < 0.1) problems.push(`only ${markerHits}/${judged} entries show ${lang}-specific markers — likely the wrong language`);
}

/* ---------- 3. markup + embedded Arabic ---------- */
const AR_RUN = new RegExp('[\\u0600-\\u06FF\\u0750-\\u077F]+', 'g');
const AR_LETTER = new RegExp('[\\u0620-\\u064A\\u0671-\\u06D3]');
const AR_PUNCT = new RegExp('[\\u060C\\u061B\\u061F\\u066A-\\u066D\\u06D4]', 'g');
const fold = (s) => s
  .replace(new RegExp('[\\u06A9\\u06AA]', 'g'), 'ك').replace(new RegExp('[\\u06CC\\u06D2\\u0649]', 'g'), 'ي')
  .replace(new RegExp('[\\u06C1\\u06C3\\u06BE]', 'g'), 'ه').replace(new RegExp('\\u06C0', 'g'), 'ة');
const runs = (s) => (String(s).match(AR_RUN) || []).map((x) => x.replace(AR_PUNCT, '').trim()).filter((x) => x && AR_LETTER.test(x));
const tags = (s) => {
  const out = {};
  for (const m of String(s).matchAll(/<\/?([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g)) {
    const k = (m[0].startsWith('</') ? '/' : '') + m[1].toLowerCase();
    out[k] = (out[k] || 0) + 1;
  }
  return JSON.stringify(out);
};
let tagBad = 0, arLost = 0;
for (const s of SRC) {
  const t = dict[s];
  if (!t) continue;
  if (tags(s) !== tags(t)) tagBad++;
  const ae = runs(s);
  if (ae.length) {
    const hay = fold(runs(t).join(' '));
    if (ae.some((x) => !hay.includes(fold(x)))) arLost++;
  }
}
if (tagBad) problems.push(`${tagBad} entries with HTML tag mismatches`);
if (arLost) problems.push(`${arLost} entries lost an embedded Arabic run`);

/* ---------- report + merge ---------- */
console.log(`${lang}.${name}: ${Object.keys(dict).length}/${SRC.length} keys, ${identical.length} identical to source`);
if (problems.length) {
  problems.forEach((p) => console.log('  !! ' + p));
  console.log('  => NOT CLEAN' + (doMerge ? ' — refusing to merge' : ''));
  process.exit(1);
}
console.log('  => CLEAN');
if (doMerge) {
  const target = path.join(ROOT, 'data/content-i18n', lang + '.json');
  const existing = JSON.parse(fs.readFileSync(target, 'utf8'));
  let kept = 0, added = 0;
  for (const [k, v] of Object.entries(dict)) {
    if (k in existing && String(existing[k]).trim()) { kept++; continue; }
    existing[k] = v; added++;
  }
  fs.writeFileSync(target, JSON.stringify(existing, null, 1));
  console.log(`  merged: +${added} keys into ${lang}.json (${kept} already present, untouched)`);
}
