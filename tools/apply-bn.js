#!/usr/bin/env node
/**
 * Apply a batch of Bengali rewrites to a data file.
 *
 *   node tools/apply-bn.js js/hope-data.js <batch.json>
 *
 * The batch is [[oldBn, newBn], ...] — exact strings, no regex. Every rule of
 * this tool exists because the alternative silently loses content:
 *
 *   - a pair whose `old` matches ZERO times means the source drifted (or the
 *     old text was retyped rather than copied) and the rewrite would be dropped
 *     without a trace;
 *   - a pair whose `old` matches MORE THAN ONCE would rewrite a string the
 *     author never looked at — Bengali content repeats short phrases across
 *     chapters constantly;
 *   - so nothing is written unless every pair matches exactly once.
 *
 * Bengali greps are unreliable from a shell (the needle gets Unicode-normalised
 * while the file does not), which is exactly why matching happens here in Node
 * against the file's own bytes.
 */
const fs = require('fs');
const path = require('path');

const target = process.argv[2];
const batchPath = process.argv[3];
if (!target || !batchPath) {
  console.error('usage: apply-bn.js <js/xxx-data.js> <batch.json>');
  process.exit(1);
}

const ROOT = path.resolve(__dirname, '..');
const abs = path.join(ROOT, target);
const src = fs.readFileSync(abs, 'utf8');
const pairs = JSON.parse(fs.readFileSync(batchPath, 'utf8'));

if (!Array.isArray(pairs) || !pairs.length) { console.error('batch is empty'); process.exit(1); }

const problems = [];
for (const [i, p] of pairs.entries()) {
  if (!Array.isArray(p) || p.length !== 2) { problems.push(`#${i}: not a [old, new] pair`); continue; }
  const [oldS, newS] = p;
  if (typeof oldS !== 'string' || typeof newS !== 'string') { problems.push(`#${i}: non-string`); continue; }
  if (!oldS.trim() || !newS.trim()) { problems.push(`#${i}: empty side`); continue; }
  /* A stray single quote would terminate the surrounding JS string literal —
   * the data files quote with '. Typographic ’ is fine and is what the prose
   * uses. A pair MAY legitimately include source context (that is how an
   * otherwise-ambiguous short string is disambiguated), so the real invariant
   * is that the replacement does not change how many quotes are in the file. */
  const q = (s) => (s.match(/'/g) || []).length;
  if (q(newS) !== q(oldS)) {
    problems.push(`#${i}: quote count changes ${q(oldS)} -> ${q(newS)} — a stray ' would break the literal; use ’`);
  }
  if (newS.includes('\\')) problems.push(`#${i}: new text contains a backslash`);
  const n = src.split(oldS).length - 1;
  if (n === 0) problems.push(`#${i}: old text not found — ${JSON.stringify(oldS.slice(0, 50))}`);
  if (n > 1) problems.push(`#${i}: old text appears ${n} times, refusing to guess — ${JSON.stringify(oldS.slice(0, 50))}`);
}

if (problems.length) {
  console.error(`REFUSING TO WRITE — ${problems.length} problem(s):`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}

let out = src;
for (const [oldS, newS] of pairs) out = out.replace(oldS, newS);
fs.writeFileSync(abs, out);
console.log(`applied ${pairs.length} Bengali rewrites to ${target}`);
