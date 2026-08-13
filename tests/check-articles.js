/**
 * Long-form articles (Prophets & Companions).
 *
 * These files are large, hand-written prose, and three of their failure modes
 * are invisible on screen:
 *
 *   - a missing `bn` renders as an EMPTY paragraph for Bengali readers rather
 *     than falling back to English, because the renderer's lc() returns the
 *     requested language or nothing;
 *   - an id that matches no subject is dead weight no page will ever show;
 *   - a verse reference that is out of bounds stays plain text — the
 *     autolinker validates before linking, so a wrong reference looks like
 *     ordinary prose instead of failing loudly. Bengali is checked too: a
 *     reference copied between languages is exactly where drift happens.
 *
 * The 600-1100 word band is deliberately wider than the 700-950 the spec asks
 * of an author — the point here is to catch a truncated or duplicated entry,
 * not to police style.
 */
const { load, get, badRef } = require('./lib.js');

const SETS = [
  { key: 'prophets', file: 'js/prophets-articles.js', obj: 'PROPHET_ARTICLES', subjFile: 'js/prophets-data.js', subjArr: 'PROPHETS_DATA', label: 'prophets' },
  { key: 'sahaba', file: 'js/sahaba-articles.js', obj: 'SAHABA_ARTICLES', subjFile: 'js/sahaba-data.js', subjArr: 'SAHABA_DATA', label: 'companions' },
  { key: 'tadabbur', file: 'js/tadabbur-articles.js', obj: 'TADABBUR_ARTICLES', label: 'tadabbur verses' },
];

const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?![\d:.-])/g;
const problems = [];
const counts = [];

for (const set of SETS) {
  const articles = get(load(set.file), set.obj);
  if (!articles || typeof articles !== 'object') { problems.push(`${set.obj} missing or not an object`); continue; }
  /* Prophets and Companions key by a subject id; Tadabbur keys by the verse
   * reference itself, so "does this id exist" is a different question there. */
  const ids = set.subjFile
    ? new Set(get(load(set.subjFile), set.subjArr).map((s) => s.id))
    : new Set(Object.keys(get(load('js/tadabbur-data.js'), 'TADABBUR_NOTES') || {}));
  let words = 0, refs = 0;

  for (const [id, entry] of Object.entries(articles)) {
    if (!ids.has(id)) problems.push(`${set.label}: "${id}" matches no subject — it can never be shown`);
    if (!entry || !Array.isArray(entry.sections) || !entry.sections.length) { problems.push(`${set.label}/${id}: no sections`); continue; }
    let w = 0;
    entry.sections.forEach((sec, si) => {
      if (!sec.h || !String(sec.h.en || '').trim() || !String(sec.h.bn || '').trim()) problems.push(`${set.label}/${id}[${si}]: heading missing en or bn`);
      if (!Array.isArray(sec.p) || !sec.p.length) { problems.push(`${set.label}/${id}[${si}]: no paragraphs`); return; }
      sec.p.forEach((p, pi) => {
        const where = `${set.label}/${id}[${si}][${pi}]`;
        if (!p || !String(p.en || '').trim()) { problems.push(`${where}: empty en`); return; }
        if (!String(p.bn || '').trim()) { problems.push(`${where}: empty bn — Bengali readers see a blank paragraph`); return; }
        w += String(p.en).split(/\s+/).filter(Boolean).length;
        if (/<[a-zA-Z/]/.test(p.en) || /<[a-zA-Z/]/.test(p.bn)) problems.push(`${where}: contains HTML`);
        for (const lang of ['en', 'bn']) {
          REF.lastIndex = 0;
          let m;
          while ((m = REF.exec(String(p[lang]))) !== null) {
            refs++;
            const bad = badRef(`${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`);
            if (bad) problems.push(`${where}.${lang}: ${bad}`);
          }
        }
      });
    });
    if (w && (w < 600 || w > 1100)) problems.push(`${set.label}/${id}: ${w} English words, outside 600-1100`);
    words += w;
  }
  counts.push(`${Object.keys(articles).length} ${set.label} (${words.toLocaleString()} words, ${refs} refs)`);

  /* The generated index is what views consult to decide whether to offer a
   * "full article" control before downloading anything. If it drifts, readers
   * either lose a control that works or get one that opens nothing. */
  const indexed = (get(load('js/article-index.js'), 'LQ_ARTICLE_IDS') || {})[set.key];
  const have = Object.keys(articles).filter((id) => articles[id] && Array.isArray(articles[id].sections) && articles[id].sections.length).sort();
  if (!Array.isArray(indexed)) problems.push(`article-index.js has no "${set.key}" list — run tools/build-article-index.js`);
  else if (indexed.join('|') !== have.join('|')) {
    const missing = have.filter((id) => indexed.indexOf(id) === -1);
    const extra = indexed.filter((id) => have.indexOf(id) === -1);
    problems.push(`article-index.js is stale for ${set.key}: ${missing.length} unlisted, ${extra.length} listed but absent — run tools/build-article-index.js`);
  }
}

module.exports = {
  name: 'long-form articles',
  run() {
    return { ok: problems.length === 0, detail: counts.join(', ') || 'no articles yet', problems };
  },
};
