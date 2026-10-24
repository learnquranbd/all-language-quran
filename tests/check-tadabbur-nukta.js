/**
 * Tadabbur article shards keep য় ড় ঢ় precomposed (U+09DF/DC/DD).
 *
 * v1002 converted ~129,600 decomposed letters (base + U+09BC nukta) in these
 * shards, because the Bengali spelling-swap passes match on precomposed text:
 * a plain swap of নামায turned আমলনামায় into নামাজ় where the য় was decomposed.
 * The depth-pass drafts of 2026-10-23 arrived decomposed again (7,328 in shards
 * 1-3), which nothing caught. Only these shards are enforced; the rest of the
 * repo is mixed and is not part of this rule.
 */
const fs = require('fs');
const { tadabburShardFiles, ROOT, path } = require('./lib.js');
const problems = [];
for (const f of tadabburShardFiles()) {
  const n = (fs.readFileSync(path.join(ROOT, f), 'utf8').match(/[যডঢ]়/g) || []).length;
  if (n) problems.push(`${f}: ${n} decomposed য়/ড়/ঢ় — run node tools/wip/round11/nukta.js ${f} --write`);
}
module.exports = {
  name: 'Tadabbur shards keep য় ড় ঢ় precomposed',
  run() { return { ok: !problems.length, detail: `${tadabburShardFiles().length} shards checked`, problems }; },
};
