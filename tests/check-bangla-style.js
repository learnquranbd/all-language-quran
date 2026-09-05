/**
 * Bengali that reads like a translation rather than like Bengali.
 *
 * The Hope & Character module shipped with `bn` strings produced by walking the
 * English sentence left to right and substituting words. It parsed, it passed
 * every other check in this suite, and a Bangla reader described it as "quite
 * literal". Rewriting it took a full pass over 601 strings, so this exists to
 * stop the same thing arriving again.
 *
 * Style is mostly not machine-checkable, and this file does NOT try. It checks
 * the two markers that are:
 *
 *   1. WRONG-REGISTER WORDS. Each entry below was found in real shipped text.
 *      They are not wrong Bengali — they are technical or academic words in
 *      prose that should sound like someone talking. `রোগনির্ণয়` (medical
 *      diagnosis) for "the diagnosis", `প্রক্রিয়াকরণ` (data processing) for
 *      "processed", `দ্বিতীয় পুরুষ` (a grammar-class term) for "in the second
 *      person". A reader hits these and stops.
 *
 *   2. EM-DASH DENSITY. English prose in these modules leans on the em dash for
 *      asides; Bengali does not. Three or more in one string is a reliable sign
 *      the English punctuation was carried across with the words. Two is fine —
 *      the rule only fires past that.
 *
 * The full rules live in tools/BANGLA-STYLE.md. Matching happens here in Node
 * against the file's own bytes because Bengali greps run from a shell
 * false-negative: the needle gets Unicode-normalised while the file does not.
 */
const { load, get, dataFiles, constNames, tadabburShardFiles } = require('./lib.js');

/* Files that have been through the style pass. ONLY these fail the build.
 *
 * Turning this check on across the repo reports ~750 hits in the older content
 * modules — the same calque, written the same way, before the rules existed.
 * Failing on all of them would block every future build for a debt nobody has
 * been asked to pay yet, so the list is opt-in and grows one module at a time.
 * The count of unreviewed hits is reported in the detail line rather than
 * hidden, because a debt you cannot see is a debt that never gets paid. */
const STYLED = ['js/hope-data.js'];

/* word -> what to use instead. Kept short and specific on purpose: a long
 * blocklist would start failing legitimate prose. */
const WRONG_REGISTER = [
  ['প্রক্রিয়াকরণ', 'a computing word — say what actually happens'],
  ['রোগনির্ণয়', 'medical jargon — দোষ ধরা / ধরিয়ে দেওয়া'],
  ['দ্বিতীয় পুরুষ', 'grammar-class jargon — say সরাসরি “তোমরা” বলে'],
  ['প্রথম পুরুষ', 'grammar-class jargon'],
  ['ইনপুট', 'untranslated English'],
  ['আউটপুট', 'untranslated English'],
  ['অডিট', 'untranslated English — যাচাই'],
  ['কনটেন্ট', 'untranslated English'],
];

const MAX_DASHES = 2;

const problems = [];   // in STYLED files — these fail the build
let legacy = 0;        // everywhere else — counted and reported, not failed
let scanned = 0;

/* dataFiles() reads js/*.js only, and the pair-shaped walk below sees a node
 * only when it has BOTH `en` and `bn` siblings. Between them those two limits
 * hid 687 of the 792 hits in the repo: every Tadabbur article shard (they live
 * in js/tadabbur-articles/) and every `*Bn` field that has no `bn` twin —
 * which is where TADABBUR_NOTES, SEERAH_EVENTS and SAHABA_DATA keep their
 * Bengali. A debt you cannot see is a debt that never gets paid, so both are
 * now walked; neither is enforced. */
for (const file of dataFiles().concat(tadabburShardFiles())) {
  let sb;
  try { sb = load(file); } catch (e) { continue; }
  const enforced = STYLED.indexOf(file) !== -1;
  for (const name of constNames(file)) {
    (function walk(node, path) {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${path}[${i}]`));
      /* Bengali arrives in two shapes: a {en, bn} pair, or a `somethingBn`
       * field beside its `somethingEn` twin. Check both. */
      const bnStrings = [];
      if (typeof node.bn === 'string' && typeof node.en === 'string') bnStrings.push(['bn', node.bn]);
      for (const [k, v] of Object.entries(node)) {
        if (/Bn$/.test(k) && typeof v === 'string') bnStrings.push([k, v]);
        else if (/Bn$/.test(k) && Array.isArray(v)) v.forEach((x, i) => { if (typeof x === 'string') bnStrings.push([`${k}[${i}]`, x]); });
      }
      for (const [key, bn] of bnStrings) {
        if (enforced) scanned++;
        const found = [];
        for (const [word, why] of WRONG_REGISTER) {
          if (bn.includes(word)) found.push(`"${word}" — ${why}`);
        }
        const dashes = (bn.match(/—/g) || []).length;
        if (dashes > MAX_DASHES) {
          found.push(`${dashes} em-dashes in one Bengali string — English punctuation carried across`);
        }
        if (!found.length) continue;
        if (enforced) found.forEach((f) => problems.push(`${file} ${path}.${key}: ${f} (tools/BANGLA-STYLE.md)`));
        else legacy += found.length;
      }
      for (const [k, v] of Object.entries(node)) walk(v, `${path}.${k}`);
    })(get(sb, name), name);
  }
}

module.exports = {
  name: 'Bengali reads like Bengali',
  run() {
    return {
      ok: problems.length === 0,
      detail: `${scanned} strings enforced in ${STYLED.length} file(s); ${legacy} unreviewed hits in older modules`,
      problems,
    };
  },
};
