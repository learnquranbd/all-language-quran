/**
 * tools/bn-verse-digits.js rewrites verse references inside Bengali article
 * prose into Bengali digits. It runs over freshly audited content, so the one
 * thing it must never do is change anything that is not a reference — a
 * timestamp, a hadith number, a ratio, a decimal — or convert a number pair
 * that is out of bounds and therefore not a reference at all.
 *
 * These cases pin both edges, and the round-trip case pins the point of the
 * exercise: what comes out must still be something js/ayah-autolink.js links,
 * resolving to the same verse it did before.
 */
const { refsIn, badRef } = require('./lib.js');

let convert = null;
const problems = [];
try { ({ convert } = require('../tools/bn-verse-digits.js')); }
catch (e) { problems.push(`could not load tools/bn-verse-digits.js: ${e.message}`); }

/* [input, expected conversions, expected output] */
const CASES = [
  ['২:২৫৫ আয়াতে', 0, '২:২৫৫ আয়াতে'],
  ['3:169 আয়াতের কথা', 1, '৩:১৬৯ আয়াতের কথা'],
  ['21:78-79 আয়াতে আর 15:47 আয়াতে', 2, '২১:৭৮-৭৯ আয়াতে আর ১৫:৪৭ আয়াতে'],
  ['2:124-এ বলা হয়েছে', 1, '২:১২৪-এ বলা হয়েছে'],
  ['96:1 দিয়ে শুরু, 96:1 দিয়েই শেষ', 2, '৯৬:১ দিয়ে শুরু, ৯৬:১ দিয়েই শেষ'],
  /* Must NOT convert: none of these is a verse reference. */
  ['সময় 12:34:56', 0, 'সময় 12:34:56'],
  ['বুখারি 3820 নম্বর হাদিস', 0, 'বুখারি 3820 নম্বর হাদিস'],
  ['2:400 আয়াত', 0, '2:400 আয়াত'],
  ['অনুপাত 2.5:3 এখানে', 0, 'অনুপাত 2.5:3 এখানে'],
];

if (convert) {
  for (const [input, wantN, wantOut] of CASES) {
    const { out, n } = convert(input);
    if (n !== wantN) problems.push(`${JSON.stringify(input)}: expected ${wantN} conversion(s), got ${n}`);
    if (out !== wantOut) problems.push(`${JSON.stringify(input)}: expected ${JSON.stringify(wantOut)}, got ${JSON.stringify(out)}`);
  }

  /* Round trip: whatever the converter emits must still be a reference the app
   * links, pointing at the same verse. */
  for (const ref of ['2:255', '3:169', '21:78-79', '15:47', '96:1', '114:6']) {
    const before = refsIn(`${ref} আয়াত`);
    const { out } = convert(`${ref} আয়াত`);
    const after = refsIn(out);
    if (before.length !== 1 || after.length !== 1) {
      problems.push(`${ref}: autolinker sees ${before.length} before and ${after.length} after conversion`);
      continue;
    }
    if (before[0].ref !== after[0].ref) problems.push(`${ref}: resolves to ${before[0].ref} before but ${after[0].ref} after conversion`);
    if (badRef(after[0].ref)) problems.push(`${ref}: converted form is out of bounds`);
    if (/[0-9]/.test(after[0].raw)) problems.push(`${ref}: Latin digits survived conversion (${after[0].raw})`);
  }
}

module.exports = {
  name: 'Bengali verse digits convert safely',
  run() {
    return {
      ok: problems.length === 0,
      detail: `${CASES.length} conversion cases and 6 round trips`,
      problems,
    };
  },
};
