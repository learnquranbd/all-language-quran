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
const { load, get, badRef, loadTadabburArticles } = require('./lib.js');

const SETS = [
  { key: 'prophets', file: 'js/prophets-articles.js', obj: 'PROPHET_ARTICLES', subjFile: 'js/prophets-data.js', subjArr: 'PROPHETS_DATA', label: 'prophets' },
  { key: 'sahaba', file: 'js/sahaba-articles.js', obj: 'SAHABA_ARTICLES', subjFile: 'js/sahaba-data.js', subjArr: 'SAHABA_DATA', label: 'companions' },
  /* Tadabbur is sharded per surah; the deep template runs 1,400-1,800 words. */
  { key: 'tadabbur', loader: loadTadabburArticles, label: 'tadabbur verses', maxWords: 2000 },
];

/* Same lookahead as js/ayah-autolink.js: a ref followed by a Bengali suffix
 * ("2:124-এ") IS linked by the app, so it must be bounds-checked here too.
 * The stricter form skipped 272 such refs across the shipped content. */
const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?!\d|[.:-]\d)/g;
const problems = [];
const counts = [];

for (const set of SETS) {
  const articles = set.loader ? set.loader() : get(load(set.file), set.obj);
  if (!articles || typeof articles !== 'object') { problems.push(`${set.obj || set.key} missing or not an object`); continue; }
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
        const pw = String(p.en).split(/\s+/).filter(Boolean).length;
        w += pw;
        /* Every drafting brief tells authors 55-110 words per paragraph is
         * machine-enforced. It was not, until a fix agent noticed and said so.
         * Across 2,743 paragraphs exactly one sat outside the band, so the rule
         * had held on trust — but a rule nobody checks is a rule that decays. */
        if (pw < 55 || pw > 110) problems.push(`${where}: ${pw} English words, outside 55-110`);
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
    const maxW = set.maxWords || 1100;
    if (w && (w < 600 || w > maxW)) problems.push(`${set.label}/${id}: ${w} English words, outside 600-${maxW}`);
    words += w;
  }
  /* Headings must belong to their subject. A drafted batch once came back with
   * 21 of 33 headings copied verbatim from the spec's own section labels ("What
   * the Mufassirun Said", "Its Sisters in the Quran"), so four articles in a row
   * carried the same six titles. Nothing else in this suite could see it: the
   * word counts, refs and structure were all valid. Flag any heading reused by
   * more than a quarter of a module's subjects, floor of four. */
  const headCount = {};
  for (const [id, entry] of Object.entries(articles)) {
    const seen = new Set();
    for (const sec of (entry && entry.sections) || []) {
      const h = String((sec.h && sec.h.en) || '').trim().toLowerCase();
      if (!h || seen.has(h)) continue;
      seen.add(h);
      (headCount[h] = headCount[h] || []).push(id);
    }
  }
  const limit = Math.max(4, Math.ceil(Object.keys(articles).length / 4));
  for (const [h, ids] of Object.entries(headCount)) {
    if (ids.length > limit) problems.push(`${set.label}: heading "${h}" is reused by ${ids.length} subjects (max ${limit}) — headings should fit their own subject, e.g. ${ids.slice(0, 3).join(', ')}`);
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
