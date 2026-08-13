/**
 * The auto-linker's reference pattern.
 *
 * js/ayah-autolink.js turns bare "20:14" in rendered prose into a button that
 * opens the verse. Its regex is the whole feature, and it fails in two
 * directions that both look like nothing is wrong:
 *
 *   - too strict, and a real reference stays dead plain text. The original
 *     trailing guard `(?![\d:.-])` rejected ANY of those characters after a
 *     reference, so "as in 15:47." at the end of a sentence and "stands in
 *     3:169: do not think them" before a quotation were silently not linked.
 *     Nobody notices a button that was never drawn.
 *   - too loose, and it eats things that are not references at all —
 *     timestamps, decimals, version strings — turning ordinary text into
 *     buttons that open a random verse.
 *
 * So the cases below pin both edges. The regex is read out of the source file
 * rather than copied here, so this tests the shipped pattern and not a stale
 * duplicate of it.
 */
const { ROOT, fs, path } = require('./lib.js');

const src = fs.readFileSync(path.join(ROOT, 'js/ayah-autolink.js'), 'utf8');
const m = src.match(/const REF_RE = (\/.+\/[gimsuy]*);/);
const problems = [];

const MUST_LINK = [
  ['2:255 is often recited', ['2:255'], 'plain reference'],
  ['as in 15:47. The settled way', ['15:47'], 'reference ending a sentence'],
  ['the word stands in 3:169: do not think', ['3:169'], 'reference before a colon'],
  ['knowledge (21:78-79). The placement', ['21:78-79'], 'range in parentheses'],
  ['see 2:5 and 2:55 together', ['2:5', '2:55'], 'adjacent references, neither swallowed'],
  ['revealed in 24:11-20, declaring', ['24:11-20'], 'range before a comma'],
  ['Ayat al-Kursi (2:255)', ['2:255'], 'parenthesised'],
];

const MUST_NOT_LINK = [
  ['the timestamp 12:34:56 here', 'timestamp'],
  ['a 2.5% rise this year', 'decimal percentage'],
  ['version 1.2:3 of the spec', 'version string'],
  ['ratio 1:1 scale at 3.14:15', 'decimal before a colon'],
];

if (!m) {
  problems.push('could not find REF_RE in js/ayah-autolink.js — the pattern check cannot run');
} else {
  // eslint-disable-next-line no-eval
  const re = eval(m[1]);
  const all = (s) => { re.lastIndex = 0; return s.match(re) || []; };

  for (const [text, want, label] of MUST_LINK) {
    const got = all(text);
    if (got.join(',') !== want.join(',')) {
      problems.push(`${label}: expected [${want.join(', ')}] in ${JSON.stringify(text)}, got [${got.join(', ')}]`);
    }
  }
  for (const [text, label] of MUST_NOT_LINK) {
    const got = all(text);
    // A genuine reference inside these strings is fine (1:1 IS a verse); what
    // must not happen is matching the numeric fragment that is not one.
    const bad = got.filter((g) => text.indexOf(g + ':') !== -1 || text.indexOf('.' + g) !== -1 || text.indexOf(g + '.') !== -1);
    if (bad.length) problems.push(`${label}: wrongly linked [${bad.join(', ')}] in ${JSON.stringify(text)}`);
  }
}

module.exports = {
  name: 'verse auto-linking',
  run() {
    return {
      ok: problems.length === 0,
      detail: `${MUST_LINK.length} must-link and ${MUST_NOT_LINK.length} must-not-link cases`,
      problems,
    };
  },
};
