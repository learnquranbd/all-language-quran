/**
 * js/seerah-ayah-index.js is generated from SEERAH_EVENTS and SEERAH_ARTICLES
 * by tools/build-seerah-ayah-index.js. The verse modal reads it to offer "in
 * the Seerah" for the ayah on screen, and it is the only place that connection
 * exists outside the 355 KB timeline data file and the ~1 MB of articles.
 *
 * A generated file that nobody regenerates goes stale silently: an event gains
 * an ayah, an article is merged or corrected, and the modal keeps offering the
 * old answer — or offers nothing at all. So this rebuilds the table in memory
 * and fails if the shipped file has drifted, exactly as the article index is
 * checked.
 */
const { load, get, badRef } = require('./lib.js');
const { build, OUT } = require('../tools/build-seerah-ayah-index.js');

const problems = [];
let verses = 0, anchored = 0;

try {
  const built = build();
  built.problems.forEach((p) => problems.push(p));
  verses = Object.keys(built.v).length;
  anchored = Object.keys(built.a).length;

  const shipped = get(load(OUT), 'LQ_SEERAH_AYAH');
  if (!shipped || typeof shipped !== 'object' || !shipped.v || !shipped.t) {
    problems.push(`${OUT} does not expose a {t, v, a} LQ_SEERAH_AYAH — run node tools/build-seerah-ayah-index.js`);
  } else {
    /* Compare by content, not by key order: build() returns the tables in
     * discovery order while the file is written sorted. */
    const canon = (o) => JSON.stringify(Object.keys(o || {}).sort().map((k) => [k, o[k]]));
    for (const part of ['t', 'v', 'a']) {
      if (canon(built[part]) === canon(shipped[part])) continue;
      const want = Object.keys(built[part] || {}), got = Object.keys(shipped[part] || {});
      const missing = want.filter((k) => !(k in (shipped[part] || {}))).slice(0, 5);
      const extra = got.filter((k) => !(k in (built[part] || {}))).slice(0, 5);
      problems.push(`${OUT} "${part}" is stale — run node tools/build-seerah-ayah-index.js`
        + (missing.length ? ` (missing ${missing.join(', ')})` : '')
        + (extra.length ? ` (stale ${extra.join(', ')})` : ''));
    }

    /* Every id must still exist and still have a title, or a chip opens a card
     * that is not there, or renders blank. */
    const evs = get(load('js/seerah-data.js'), 'SEERAH_EVENTS') || [];
    const ids = new Set(evs.map((e) => e.id));
    for (const [id, title] of Object.entries(shipped.t || {})) {
      if (!ids.has(id)) problems.push(`${OUT}: titles carry "${id}", which is not a SEERAH_EVENTS id`);
      if (!String(title && title.en || '').trim() || !String(title && title.bn || '').trim()) {
        problems.push(`${OUT}: ${id} missing en or bn title`);
      }
    }
    for (const [ref, list] of Object.entries(shipped.v || {})) {
      const bad = badRef(ref);
      if (bad) problems.push(`${OUT}: key ${ref} — ${bad}`);
      if (!Array.isArray(list) || !list.length) { problems.push(`${OUT}: ${ref} has no events`); continue; }
      for (const id of list) {
        if (!ids.has(id)) problems.push(`${OUT}: ${ref} points at "${id}", which is not a SEERAH_EVENTS id`);
        if (!shipped.t[id]) problems.push(`${OUT}: ${ref} points at "${id}", which has no title entry`);
      }
      const anc = (shipped.a || {})[ref] || 0;
      if (anc > list.length) problems.push(`${OUT}: ${ref} claims ${anc} anchors but lists ${list.length} events`);
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
      detail: `${verses} verse refs (${anchored} anchored by a card, ${verses - anchored} from articles alone)`,
      problems,
    };
  },
};
