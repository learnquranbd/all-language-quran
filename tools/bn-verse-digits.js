#!/usr/bin/env node
/**
 * Rewrite verse references inside Bengali article text into Bengali digits.
 *
 *   node tools/bn-verse-digits.js <js/file.js> <OBJECT_NAME> [--write]
 *
 * tools/BANGLA-STYLE.md §8 asks for Bengali digits in Bengali prose, and since
 * v264 the autolinker matches them, so "২:২৫৫" is tappable exactly as "2:255"
 * is. Drafting agents nonetheless wrote Latin digits, because until v264 that
 * was the only form that linked. This converts them in one mechanical pass
 * rather than by hand, which is the whole point: a hand pass over hundreds of
 * references in freshly audited prose is a chance to introduce errors, and
 * this cannot change a single word.
 *
 * Deliberately narrow:
 *   - `bn` fields only. English prose keeps Latin digits.
 *   - Only text matching the app's own reference pattern, read out of
 *     js/ayah-autolink.js, so exactly what the app links is what gets changed.
 *   - Only references that are actually in bounds. A number pair that is not a
 *     real verse is left alone, because it is not a reference.
 *   - Digits inside the reference only. Surrounding text, suffixes ("-এ") and
 *     punctuation are untouched.
 *
 * Verify after writing: the merge gate re-checks every reference in bounds,
 * and tests/check-autolink.js pins that the Bengali form still links.
 */
const { fs, path, ROOT, load, get, badRef, refsIn } = require('../tests/lib.js');

const BN = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const toBn = (s) => String(s).replace(/[0-9]/g, (d) => BN[+d]);

/** Convert every in-bounds Latin-digit reference in one Bengali string. */
function convert(text) {
  const s = String(text == null ? '' : text);
  const hits = refsIn(s).filter((r) => /[0-9]/.test(r.raw) && !badRef(r.ref));
  if (!hits.length) return { out: s, n: 0 };
  /* Rebuild left to right so overlapping replacements cannot collide, and so a
   * reference appearing twice is converted at both sites. */
  let out = '', last = 0, n = 0;
  const re = new RegExp(hits.map((h) => h.raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
  let m;
  while ((m = re.exec(s)) !== null) {
    /* Re-validate at this position: the alternation can match a substring that
     * is not itself a reference here. */
    const around = s.slice(Math.max(0, m.index - 1), m.index + m[0].length + 1);
    const still = refsIn(around).some((r) => r.raw === m[0]);
    if (!still) continue;
    out += s.slice(last, m.index) + toBn(m[0]);
    last = m.index + m[0].length;
    n++;
  }
  out += s.slice(last);
  return { out, n };
}

function walk(articles, apply) {
  let converted = 0, touched = 0;
  for (const [id, entry] of Object.entries(articles)) {
    for (const sec of (entry.sections || [])) {
      for (const field of [sec.h].concat(sec.p || [])) {
        if (!field || typeof field.bn !== 'string') continue;
        const { out, n } = convert(field.bn);
        if (!n) continue;
        converted += n; touched++;
        if (apply) apply(id, field.bn, out);
        field.bn = out;
      }
    }
  }
  return { converted, touched };
}

if (require.main === module) {
  const [rel, objName] = process.argv.slice(2);
  const write = process.argv.includes('--write');
  if (!rel || !objName) { console.error('usage: bn-verse-digits.js <js/file.js> <OBJECT_NAME> [--write]'); process.exit(1); }

  const articles = get(load(rel), objName);
  if (!articles || typeof articles !== 'object') { console.error(`${objName} not found in ${rel}`); process.exit(1); }

  const samples = [];
  const { converted, touched } = walk(articles, (id, before, after) => {
    if (samples.length < 6) samples.push(`  ${id}: …${before.slice(Math.max(0, before.search(/\d+:\d+/) - 25), before.search(/\d+:\d+/) + 35)}… -> …${after.slice(Math.max(0, after.search(/[০-৯]+:/) - 25), after.search(/[০-৯]+:/) + 35)}…`);
  });
  console.log(`${rel} / ${objName}: ${converted} references in ${touched} Bengali strings`);
  samples.forEach((s) => console.log(s));
  if (!converted) { console.log('  nothing to do'); process.exit(0); }
  if (!write) { console.log('  (dry run — pass --write to apply)'); process.exit(0); }

  /* Rewrite by targeted string replacement in the source, so formatting,
   * comments and key order survive untouched. */
  const p = path.join(ROOT, rel);
  const src = fs.readFileSync(p, 'utf8');
  const fresh = get(load(rel), objName);
  let out = src, applied = 0, failed = [];
  walk(fresh, (id, before, after) => {
    const needle = JSON.stringify(before).slice(1, -1);
    const repl = JSON.stringify(after).slice(1, -1);
    if (out.indexOf(needle) === -1) { failed.push(`${id}: source string not found`); return; }
    out = out.replace(needle, repl);
    applied++;
  });
  if (failed.length) { failed.slice(0, 5).forEach((f) => console.error('  !! ' + f)); console.error('  => refusing to write'); process.exit(1); }
  fs.writeFileSync(p, out);

  const after = get(load(rel), objName);
  let leftover = 0, bad = 0;
  for (const entry of Object.values(after || {})) {
    for (const sec of (entry.sections || [])) {
      for (const field of [sec.h].concat(sec.p || [])) {
        if (!field || typeof field.bn !== 'string') continue;
        for (const r of refsIn(field.bn)) {
          if (/[0-9]/.test(r.raw)) leftover++;
          if (badRef(r.ref)) bad++;
        }
      }
    }
  }
  if (bad) { fs.writeFileSync(p, src); console.error(`${bad} reference(s) out of bounds after conversion — rolled back`); process.exit(1); }
  console.log(`  wrote ${applied} strings; ${leftover} Latin-digit reference(s) left in Bengali (should be 0)`);
}

module.exports = { convert, toBn };
