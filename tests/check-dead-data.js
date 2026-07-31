/**
 * Authored data that no module ever reads.
 *
 * Content that ships in every bundle and reaches no user. This found six such
 * datasets (139 entries) including TAJWEED_QUIZ — 30 questions with full
 * Bengali — and QA_FREQ_WORDS, the 51 most frequent Quranic words.
 *
 * Comments are stripped before counting usages: a constant named in a file's
 * own "exports:" doc block previously read as a reference and hid
 * SALAH_MISTAKES (26 entries) from this very check.
 */
const { ROOT, fs, path, load, get, constNames, stripComments } = require('./lib.js');

const jsFiles = fs.readdirSync(path.join(ROOT, 'js')).filter((f) => f.endsWith('.js'));
const sources = {};
for (const f of jsFiles) sources[f] = stripComments(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8'));
const htmlSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const dead = [];
for (const f of jsFiles) {
  const rel = 'js/' + f;
  if (!/^const [A-Z][A-Z0-9_]* = [[{]/m.test(sources[f])) continue;
  let sb;
  try { sb = load(rel); } catch (e) { continue; }

  for (const name of constNames(rel)) {
    const v = get(sb, name);
    const size = Array.isArray(v) ? v.length : (v && typeof v === 'object' ? Object.keys(v).length : 0);
    if (size < 3) continue;                       // trivial constants are not "content"

    const re = new RegExp('\\b' + name + '\\b', 'g');
    let refs = (htmlSrc.match(re) || []).length;
    for (const g of jsFiles) {
      const hits = (sources[g].match(re) || []).length;
      refs += (g === f) ? Math.max(0, hits - 1) : hits;   // discount the definition itself
    }
    if (refs === 0) dead.push(`${rel}:${name} (${size} entries) is never read`);
  }
}

module.exports = {
  name: 'no dead datasets',
  run() {
    return { ok: dead.length === 0, detail: `${jsFiles.length} files scanned`, problems: dead };
  },
};
