/**
 * js/seerah-ayah-index.js is generated from SEERAH_EVENTS by
 * tools/build-seerah-ayah-index.js. The verse modal reads it to offer "in the
 * Seerah" for the ayah on screen, and it is the only place that connection
 * exists outside the 355 KB timeline data file.
 *
 * A generated file that nobody regenerates goes stale silently: an event gains
 * an ayah, or a title is corrected, and the modal keeps offering the old one —
 * or offers nothing at all. So this rebuilds the table in memory and fails if
 * the shipped file does not match, exactly as the article index is checked.
 */
const { load, get, badRef } = require('./lib.js');
const { build, render, OUT } = require('../tools/build-seerah-ayah-index.js');

const problems = [];
let refs = 0, events = 0;

try {
  const { index, problems: buildProblems } = build();
  buildProblems.forEach((p) => problems.push(p));
  refs = Object.keys(index).length;

  const shipped = get(load(OUT), 'LQ_SEERAH_AYAH');
  if (!shipped || typeof shipped !== 'object') {
    problems.push(`${OUT} does not expose LQ_SEERAH_AYAH — run node tools/build-seerah-ayah-index.js`);
  } else {
    /* Compare by content, not by key order: build() returns the table in
     * discovery order while the file is written sorted by surah:ayah. */
    const canon = (o) => JSON.stringify(Object.keys(o).sort().map((k) => [k, o[k]]));
    const want = canon(index);
    const got = canon(shipped);
    if (want !== got) {
      const wk = Object.keys(index), gk = Object.keys(shipped);
      const missing = wk.filter((k) => !(k in shipped)).slice(0, 5);
      const extra = gk.filter((k) => !(k in index)).slice(0, 5);
      problems.push(`${OUT} is stale — run node tools/build-seerah-ayah-index.js`
        + (missing.length ? ` (missing ${missing.join(', ')})` : '')
        + (extra.length ? ` (stale ${extra.join(', ')})` : ''));
    }
    /* Every id must still exist, or a chip opens a card that is not there. */
    const evs = get(load('js/seerah-data.js'), 'SEERAH_EVENTS') || [];
    events = evs.length;
    const ids = new Set(evs.map((e) => e.id));
    for (const [ref, list] of Object.entries(shipped)) {
      const bad = badRef(ref);
      if (bad) problems.push(`${OUT}: key ${ref} — ${bad}`);
      for (const row of (list || [])) {
        if (!ids.has(row.id)) problems.push(`${OUT}: ${ref} points at "${row.id}", which is not a SEERAH_EVENTS id`);
        if (!String(row.en || '').trim() || !String(row.bn || '').trim()) problems.push(`${OUT}: ${ref}/${row.id} missing en or bn title`);
      }
    }
  }
} catch (e) {
  problems.push(`could not check the Seerah verse index: ${e.message}`);
}

module.exports = {
  name: 'Seerah verse index is current',
  run() {
    return {
      ok: problems.length === 0,
      detail: `${refs} verse refs from ${events} events`,
      problems,
    };
  },
};
