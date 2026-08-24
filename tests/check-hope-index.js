/**
 * Hope & Character: the module's shape, and the generated card index.
 *
 * Two things this guards.
 *
 * 1. THE GENERATED INDEX DRIFTS SILENTLY. js/hope-index.js is what the
 *    dashboard reads so it can show a chapter without pulling the 400 KB
 *    module. Nothing at runtime cross-checks it: a renamed chapter id gives the
 *    dashboard a card whose button opens nothing, and an edited title shows the
 *    old wording on the home tab and the new one inside the module. Both look
 *    like content bugs weeks later. Fix by running tools/build-hope-index.js.
 *
 * 2. BILINGUAL PARITY. Every authored string is an {en, bn} pair, and a missing
 *    bn renders as an EMPTY element for Bangla readers rather than falling back
 *    to English — the module's lc() prefers the requested language. That failure
 *    is invisible in English and total in Bangla, which is exactly the class of
 *    defect that survives review.
 *
 * Verse references themselves are covered by check-refs.js, which walks every
 * `ref` key in every dataset, so they are deliberately not re-checked here.
 */
const { load, get } = require('./lib.js');

const problems = [];

const sb = load('js/hope-data.js');
const chapters = get(sb, 'HOPE_CHAPTERS') || [];
const wings = get(sb, 'HOPE_WINGS') || [];
const names = get(sb, 'HOPE_NAMES') || [];
const steps = get(sb, 'HOPE_TAWBAH_STEPS') || [];

if (!chapters.length) problems.push('HOPE_CHAPTERS is empty');

/* --- bilingual parity, everywhere a pair is authored --- */
function pair(o, where) {
  if (!o) { problems.push(`${where}: missing`); return; }
  if (!String(o.en || '').trim()) problems.push(`${where}: empty en`);
  if (!String(o.bn || '').trim()) problems.push(`${where}: empty bn — Bangla readers see a blank`);
}

const wingIds = new Set(wings.map((w) => w.id));
const seen = new Set();
for (const c of chapters) {
  const w = `hope/${c.id}`;
  if (!c.id) problems.push('a chapter has no id');
  if (seen.has(c.id)) problems.push(`${w}: duplicate id`);
  seen.add(c.id);
  if (!wingIds.has(c.wing)) problems.push(`${w}: wing "${c.wing}" is not in HOPE_WINGS`);
  if (!c.emoji) problems.push(`${w}: no emoji`);
  pair(c.title, `${w}.title`);
  pair(c.tagline, `${w}.tagline`);

  if (!Array.isArray(c.intro) || c.intro.length < 1) problems.push(`${w}: no intro paragraphs`);
  else c.intro.forEach((p, i) => pair(p, `${w}.intro[${i}]`));

  if (!Array.isArray(c.verses) || !c.verses.length) problems.push(`${w}: no verses`);
  else c.verses.forEach((v) => {
    if (!v.ref) problems.push(`${w}: a verse has no ref`);
    pair(v.note, `${w}.verse ${v.ref}`);
  });

  (c.hadith || []).forEach((h, i) => {
    /* A hadith with no source is the one defect here a reader cannot detect and
     * cannot check. It must never ship without a collection named. */
    if (!String(h.src || '').trim()) problems.push(`${w}.hadith[${i}]: no source cited`);
    pair(h.text, `${w}.hadith[${i}].text`);
    pair(h.note, `${w}.hadith[${i}].note`);
  });

  if (!Array.isArray(c.practice) || !c.practice.length) problems.push(`${w}: no practice steps`);
  else c.practice.forEach((p, i) => pair(p, `${w}.practice[${i}]`));

  if (c.dua) {
    if (!c.dua.ref) problems.push(`${w}.dua: no ref`);
    pair(c.dua.why, `${w}.dua.why`);
  }
}

for (const wg of wings) { pair(wg.title, `wing/${wg.id}.title`); pair(wg.blurb, `wing/${wg.id}.blurb`); }
for (const s of steps) { pair(s.title, `tawbah step ${s.n}.title`); pair(s.body, `tawbah step ${s.n}.body`); }
for (const n of names) {
  if (!String(n.ar || '').trim()) problems.push(`name ${n.translit}: no Arabic`);
  pair(n.meaning, `name ${n.translit}.meaning`);
  pair(n.note, `name ${n.translit}.note`);
  /* A name with neither a verse nor a stated source is an unattributed claim
   * about Allah. as-Sittir is from the Sunnah and carries `src` instead. */
  if (!n.ref && !n.src) problems.push(`name ${n.translit}: neither a Qur'an ref nor a cited source`);
}

/* --- the generated index must match what it indexes --- */
const idx = get(load('js/hope-index.js'), 'HOPE_INDEX');
if (!Array.isArray(idx)) {
  problems.push('js/hope-index.js has no HOPE_INDEX — run tools/build-hope-index.js');
} else {
  const want = chapters.map((c) => [c.id, c.wing, c.emoji, c.title.en, c.title.bn, c.tagline.en, c.tagline.bn,
    (c.verses[0] && c.verses[0].ref) || ''].join(''));
  const got = idx.map((r) => [r.id, r.wing, r.emoji, r.title && r.title.en, r.title && r.title.bn,
    r.tagline && r.tagline.en, r.tagline && r.tagline.bn, r.ref].join(''));
  if (want.length !== got.length) {
    problems.push(`hope-index.js is stale: ${got.length} chapters indexed, ${want.length} authored — run tools/build-hope-index.js`);
  } else {
    const drift = want.filter((row, i) => row !== got[i]).length;
    if (drift) problems.push(`hope-index.js is stale: ${drift} chapter(s) differ from js/hope-data.js — run tools/build-hope-index.js`);
  }
}

module.exports = {
  name: 'hope module and its card index',
  run() {
    const hadith = chapters.reduce((n, c) => n + (c.hadith || []).length, 0);
    const verses = chapters.reduce((n, c) => n + c.verses.length, 0);
    return {
      ok: problems.length === 0,
      detail: `${chapters.length} chapters in ${wings.length} wings (${verses} verses, ${hadith} hadith, ${names.length} names)`,
      problems,
    };
  },
};
