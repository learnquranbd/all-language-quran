/**
 * Mojibake in shipped content.
 *
 * Four English paragraphs shipped with an em dash written as the bytes
 * C3 A2 C2 80 C2 94 — UTF-8 that was decoded as Latin-1 and re-encoded, so
 * "—" became "â" followed by two invisible C1 control characters. The Bengali
 * siblings on the adjacent lines were fine, which is what makes this class of
 * defect survive review: it is one character wide, it appears in only one
 * language, and every other check in this suite passes straight over it. A
 * reader sees "in 12:85 â by Allah"; nothing errors.
 *
 * The same corruption has a small family of signatures — Ã/Â prefixes are the
 * giveaway that a multi-byte character went through a Latin-1 round trip — so
 * this checks for the family rather than the one instance that was found.
 * Content files only: the app's own source may legitimately contain these
 * sequences inside regexes or escape tables.
 *
 * A lone replacement character (U+FFFD) is also fatal here: it means bytes
 * were already lost, and no later pass can recover what they were.
 */
const { ROOT, fs, path, tadabburShardFiles } = require('./lib.js');

/* Files whose contents are read by humans. Kept explicit rather than globbing
 * js/ so that adding a new content file is a deliberate act. */
const CONTENT = [
  ...tadabburShardFiles(),
  'js/tadabbur-data.js',
  'js/hope-data.js',
  'js/prophets-articles.js',
  'js/prophets-data.js',
  'js/sahaba-articles.js',
  'js/sahaba-data.js',
  'js/surah-names-data.js',
  'js/seerah-data.js',
  'js/names-data.js',
  'js/vocab-data.js',
  'js/mutashabihat-data.js',
];

/* Each entry: the corrupt sequence, and what it was before the round trip.
 * Written as \u escapes because typing the corrupt bytes into a source file
 * is exactly the accident being guarded against. */
const MOJIBAKE = [
  ['â', 'em dash —'],
  ['â', 'en dash –'],
  ['â', 'right single quote ’'],
  ['â', 'left double quote “'],
  ['â', 'right double quote ”'],
  ['â¦', 'ellipsis …'],
  ['ï»¿', 'byte-order mark'],
  ['Ø§', 'Arabic letter (alif)'],
  ['à¦', 'Bengali letter'],
  ['�', 'replacement character — original bytes are already lost'],
];

const problems = [];
let scanned = 0;

for (const rel of CONTENT) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) continue;
  scanned++;
  const src = fs.readFileSync(abs, 'utf8');
  const lines = src.split('\n');
  for (const [seq, was] of MOJIBAKE) {
    let idx = src.indexOf(seq);
    if (idx === -1) continue;
    // Report by line so the fix is locatable, but cap per signature per file.
    const hits = [];
    for (let i = 0; i < lines.length && hits.length < 3; i++) {
      if (lines[i].indexOf(seq) !== -1) hits.push(i + 1);
    }
    const total = src.split(seq).length - 1;
    problems.push(
      `${rel}: ${total} occurrence(s) of mojibake for ${was}`
      + ` — first at line${hits.length > 1 ? 's' : ''} ${hits.join(', ')}`
    );
  }

  /* Malformed Bengali: a dependent vowel sign (matra) can only attach to a
   * consonant. Following an INDEPENDENT vowel it is invalid and renders as a
   * broken cluster — "কোথাওেও" shipped that way, one character wide, and every
   * other check passed over it. */
  const BAD_MATRA = /[অ-ঔ][া-ৌৗ]/g;
  for (let i = 0; i < lines.length; i++) {
    BAD_MATRA.lastIndex = 0;
    const m = BAD_MATRA.exec(lines[i]);
    if (m) problems.push(`${rel}:${i + 1}: invalid Bengali — vowel sign after independent vowel (${JSON.stringify(m[0])})`);
  }

  /* Bengali script inside an `en:` field. An English reader lands on a
   * sentence they cannot read — in one live case, a whole clause about
   * Bengali orthography pasted into the English paragraph. The reverse
   * (Latin inside `bn:`) is legitimate: transliterations and verse refs. */
  const BENGALI = /[ঀ-৿]/;
  /* Capture just the en value. Headings put en and bn on one line, so a naive
   * slice from "en:" to end of line swallows the Bengali sibling and reports
   * every heading in the file. */
  const EN_VALUE = /\ben:\s*"((?:[^"\\]|\\.)*)"/g;
  for (let i = 0; i < lines.length; i++) {
    EN_VALUE.lastIndex = 0;
    let m;
    while ((m = EN_VALUE.exec(lines[i])) !== null) {
      if (BENGALI.test(m[1])) {
        problems.push(`${rel}:${i + 1}: Bengali script inside an en: field`);
        break;
      }
    }
  }
}

module.exports = {
  name: 'no mojibake in content',
  run() {
    return {
      ok: problems.length === 0,
      detail: `${scanned} content files, ${MOJIBAKE.length} corruption signatures`,
      problems,
    };
  },
};
