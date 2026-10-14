// Strings missing from at least one dictionary that no packet holds yet (new, or edited after their old wording
// had been translated everywhere) go into a new chunk work/C<n+1>/en.json, numbered after each table's last id.
// usage: node tools/content-i18n/extend.js
const { fs, path, WORK, LANGS, mask, dicts, sources } = require('./lib.js');
const index = JSON.parse(fs.readFileSync(path.join(WORK, 'index.json'), 'utf8'));
const D = dicts(), have = new Set(Object.values(index).map((v) => v.en)), next = {};
for (const id of Object.keys(index)) { const [ns, c, i] = id.split('|'); const k = ns + '|' + c; next[k] = Math.max(next[k] || 0, +i + 1); }
const chunks = fs.readdirSync(WORK).filter((d) => /^C\d+$/.test(d)).map((d) => +d.slice(1));
const C = 'C' + (Math.max(...chunks) + 1), out = {};
for (const s of sources()) for (const en of s.strings) {
  if (have.has(en) || LANGS.every((l) => D[l][en])) continue;
  const k = `${s.ns}|${s.name}`, id = `${k}|${next[k] = (next[k] || 0) + 1, next[k] - 1}`, m = mask(en);
  index[id] = { en, ns: s.ns, runs: m.runs }; out[id] = m.t; have.add(en);
}
if (!Object.keys(out).length) { console.log('nothing new'); process.exit(0); }
fs.mkdirSync(path.join(WORK, C), { recursive: true });
fs.writeFileSync(path.join(WORK, C, 'en.json'), JSON.stringify(out, null, 1));
fs.writeFileSync(path.join(WORK, 'index.json'), JSON.stringify(index));
console.log(`${C}: ${Object.keys(out).length} strings, ${Object.values(out).join(' ').split(/\s+/).length} words`);
