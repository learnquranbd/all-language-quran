#!/usr/bin/env node
/**
 * Apply the local corrections in morphology-fixes.json to data/morphology/*.json.
 *
 * data/morphology/ is imported Quranic Arabic Corpus data with no build step of its
 * own, so the audited corrections (morphology-errors.json) live in one overrides file
 * and this script writes them in. It is idempotent: a word already in its `after`
 * state is left alone, a word in its `before` state is replaced, and a word in
 * neither state (the corpus data changed under it) is reported and not touched.
 * Re-run it with --write after any re-import of the corpus.
 *
 *   node tools/qarabic/apply-morphology-fixes.js          # check only
 *   node tools/qarabic/apply-morphology-fixes.js --write  # apply
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const FIXES = require('./morphology-fixes.json').fixes;
const write = process.argv.includes('--write');
const file = s => path.join(ROOT, 'data', 'morphology', String(s).padStart(3, '0') + '.json');
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function run() {
  const data = {}, dirty = new Set();
  let applied = 0, done = 0;
  const conflicts = [];
  for (const fx of FIXES) {
    const [s, a] = fx.ref.split(':');
    const m = data[s] || (data[s] = JSON.parse(fs.readFileSync(file(s), 'utf8')));
    const cur = (m[a] || [])[fx.word - 1];
    if (same(cur, fx.after)) { done++; continue; }
    if (!same(cur, fx.before)) { conflicts.push(`${fx.ref} w${fx.word}: data matches neither before nor after`); continue; }
    m[a][fx.word - 1] = JSON.parse(JSON.stringify(fx.after));
    dirty.add(s);
    applied++;
  }
  if (write) for (const s of dirty) fs.writeFileSync(file(s), JSON.stringify(data[s]));
  return { total: FIXES.length, done, applied, conflicts };
}

if (require.main === module) {
  const r = run();
  console.log(`${r.total} fixes: ${r.done} already in place, ${r.applied} ${write ? 'applied' : 'pending (pass --write)'}`);
  r.conflicts.forEach(c => console.log('  CONFLICT ' + c));
  process.exit(r.conflicts.length ? 1 : 0);
}
module.exports = { run };
