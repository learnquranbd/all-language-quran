#!/usr/bin/env node
/**
 * Test runner — `npm test`.
 *
 * Every check exports { name, run() -> { ok, detail, problems[] } }. Exits
 * non-zero if any fails, so it can gate a deploy.
 *
 * These checks exist because each one caught something real. They are content
 * and integration checks, not unit tests: this app has no build step and no
 * module system, so the useful questions are "does every reference resolve",
 * "does every module still render", "is anything shipping to nobody" rather
 * than "does this function return 4".
 */
const path = require('path');

const CHECKS = [
  'check-release.js',
  'check-refs.js',
  'check-links.js',
  'check-dead-data.js',
  'check-quizzes.js',
  'check-i18n.js',
  'check-articles.js',
  'check-surah-names.js',
  'check-autolink.js',
  'check-encoding.js',
  'check-hope-index.js',
  'check-modules.js',
];

const only = process.argv[2];
let failed = 0;
const started = Date.now();

console.log('');
for (const file of CHECKS) {
  if (only && !file.includes(only)) continue;
  let check, result;
  try {
    check = require(path.join(__dirname, file));
    result = check.run();
  } catch (e) {
    failed++;
    console.log(`  FAIL  ${file}`);
    console.log(`        threw: ${e.message}`);
    continue;
  }
  const status = result.ok ? ' ok ' : 'FAIL';
  console.log(`  ${status}  ${check.name}${result.detail ? '  —  ' + result.detail : ''}`);
  if (!result.ok) {
    failed++;
    for (const p of (result.problems || []).slice(0, 20)) console.log(`        ${p}`);
    const extra = (result.problems || []).length - 20;
    if (extra > 0) console.log(`        ... and ${extra} more`);
  }
}

const secs = ((Date.now() - started) / 1000).toFixed(1);
console.log('');
console.log(failed ? `  ${failed} check(s) failed  (${secs}s)\n` : `  all checks passed  (${secs}s)\n`);
process.exit(failed ? 1 : 0);
