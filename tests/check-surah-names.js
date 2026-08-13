/**
 * "Why this name?" data.
 *
 * The module renders a card per surah and only shows the explanation panel
 * where a note exists, so a malformed note does not throw — it renders a blank
 * or half-empty panel, which looks like a content gap rather than a bug. These
 * checks are what make the difference visible:
 *
 *   - a key outside 1-114 can never be shown at all;
 *   - a missing `bn` renders an EMPTY paragraph for Bengali readers, because
 *     lc() returns the requested language or nothing;
 *   - an `alt` item without a name renders a bullet starting with a dash;
 *   - an out-of-bounds ref renders a pill that opens nothing.
 *
 * The word bands are wide on purpose: they catch a truncated or duplicated
 * entry, not a stylistic choice.
 */
const { load, get, badRef } = require('./lib.js');

const notes = get(load('js/surah-names-data.js'), 'SURAH_NAME_NOTES') || {};
const surahs = get(load('js/surah-data.js'), 'SURAH_DATA');
const valid = new Set(surahs.map((s) => String(s.number)));
const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?![\d:.-])/g;

const problems = [];
let alts = 0, refs = 0, withAlt = 0;
const words = (s) => String(s || '').split(/\s+/).filter(Boolean).length;

for (const [key, e] of Object.entries(notes)) {
  const where = `surah ${key}`;
  if (!valid.has(String(key))) { problems.push(`${where}: not a surah number — it can never be shown`); continue; }
  if (!e || typeof e !== 'object') { problems.push(`${where}: not an object`); continue; }

  for (const f of ['meaning', 'source', 'why', 'signal']) {
    if (!e[f] || !String(e[f].en || '').trim()) problems.push(`${where}: ${f}.en is empty`);
    else if (!String(e[f].bn || '').trim()) problems.push(`${where}: ${f}.bn is empty — Bengali readers see a blank line`);
  }

  const w = words(e.why && e.why.en);
  if (w && (w < 55 || w > 150)) problems.push(`${where}: why is ${w} English words, outside 55-150`);

  if (e.alt != null && !Array.isArray(e.alt)) problems.push(`${where}: alt is not an array`);
  const altList = Array.isArray(e.alt) ? e.alt : [];
  if (altList.length) withAlt++;
  altList.forEach((a, i) => {
    alts++;
    if (!a || !String(a.name || '').trim()) problems.push(`${where}: alt[${i}] has no name — renders as a dangling dash`);
    if (!a || !String(a.en || '').trim() || !String(a.bn || '').trim()) problems.push(`${where}: alt[${i}] missing en or bn`);
  });

  (Array.isArray(e.refs) ? e.refs : []).forEach((r) => {
    refs++;
    const bad = badRef(String(r));
    if (bad) problems.push(`${where}: refs ${bad}`);
  });

  const prose = [e.meaning, e.source, e.why, e.signal].concat(altList);
  for (const o of prose) {
    for (const lang of ['en', 'bn']) {
      const text = String((o && o[lang]) || '');
      if (/<[a-zA-Z/]/.test(text)) problems.push(`${where}: HTML in ${lang} prose`);
      REF.lastIndex = 0;
      let m;
      while ((m = REF.exec(text)) !== null) {
        refs++;
        const bad = badRef(`${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`);
        if (bad) problems.push(`${where} (${lang} prose): ${bad}`);
      }
    }
  }
}

module.exports = {
  name: 'surah name explanations',
  run() {
    const n = Object.keys(notes).length;
    return {
      ok: problems.length === 0,
      detail: `${n}/114 surahs explained, ${withAlt} with alternative names (${alts} total), ${refs} refs checked`,
      problems,
    };
  },
};
