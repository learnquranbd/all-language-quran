// Tadabbur article shards keep য় ড় ঢ় precomposed (v1002), so spelling-swap passes can't split words.
// usage: node tools/wip/round11/nukta.js <file...> [--write]   prints counts; --write converts in place
const fs = require('fs');
const write = process.argv.includes('--write');
const MAP = { 'য়': 'য়', 'ড়': 'ড়', 'ঢ়': 'ঢ়' };
let total = 0;
for (const f of process.argv.slice(2).filter(a => a !== '--write')) {
  const s = fs.readFileSync(f, 'utf8');
  const n = (s.match(/[যডঢ]়/g) || []).length; total += n;
  if (n && write) fs.writeFileSync(f, s.replace(/[যডঢ]়/g, m => MAP[m]));
  if (n) console.log(`${f}: ${n} decomposed${write ? ' -> fixed' : ''}`);
}
if (!total) console.log('nukta clean');
process.exitCode = total && !write ? 1 : 0;
