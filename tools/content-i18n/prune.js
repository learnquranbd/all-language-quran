// Drop ids whose English no longer exists in any source (rewritten after packing) from every work/<C>/en.json,
// so translators who have not reached that chunk skip them; their new wording is picked up by extend.js.
// usage: node tools/content-i18n/prune.js
const { fs, path, WORK, sources } = require('./lib.js');
const index = JSON.parse(fs.readFileSync(path.join(WORK, 'index.json'), 'utf8'));
const live = new Set(sources().flatMap((s) => s.strings));
let n = 0;
for (const c of fs.readdirSync(WORK).filter((d) => /^C\d+$/.test(d))) {
  const p = path.join(WORK, c, 'en.json'), en = JSON.parse(fs.readFileSync(p, 'utf8'));
  for (const id of Object.keys(en)) if (index[id] && !live.has(index[id].en)) { delete en[id]; n++; }
  fs.writeFileSync(p, JSON.stringify(en, null, 1));
}
console.log('pruned', n);
