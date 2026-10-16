/**
 * Word morphology: the audited tag corrections are still in data/morphology/.
 *
 * data/morphology/ is imported corpus data. The confirmed tagging errors in
 * tools/qarabic/morphology-errors.json are corrected through one overrides file,
 * tools/qarabic/morphology-fixes.json, written in by apply-morphology-fixes.js.
 * A re-import of the corpus silently brings every wrong tag back into the word
 * grammar popups; this check catches that. Fix by running
 * `node tools/qarabic/apply-morphology-fixes.js --write`.
 */
const { run: check } = require('../tools/qarabic/apply-morphology-fixes.js');

module.exports = {
  name: 'Morphology fixes applied',
  run() {
    const r = check(); // read-only unless --write is on the command line
    const problems = r.conflicts.slice();
    if (r.applied) problems.push(`${r.applied} fixes not in data/morphology/: run node tools/qarabic/apply-morphology-fixes.js --write`);
    return { ok: problems.length === 0, detail: `${r.done}/${r.total} corrected words in place`, problems };
  },
};
