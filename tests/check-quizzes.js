/**
 * Quiz integrity.
 *
 * Two failure modes, both of which shipped before this check existed:
 *
 *  1. Answer-position bias. SALAH_QUIZ had 52 of 75 correct answers at index 1
 *     and WUDU_QUIZ 22 of 30, so always picking the second option scored ~70%.
 *     Modules that shuffle at render time are exempt — the fix there was to
 *     randomise the DISPLAY order while buttons keep their original index, so
 *     the raw data stays biased by design.
 *
 *  2. Options that mean the same thing. QA_IRAB offered both "ṣifa" and "naʿt"
 *     — the Basran and Kufan names for one category — with only ṣifa marked
 *     correct, so a right answer scored wrong.
 */
const { ROOT, fs, path, load, get, constNames, dataFiles } = require('./lib.js');

const ANSWER_KEYS = ['correct', 'answer', 'correctIndex'];
const OPT_KEYS = ['optsEn', 'options', 'opts', 'choices'];

/* Modules that randomise option order at render time. */
const SHUFFLED_AT_RENDER = new Set(['SEERAH_QUIZ', 'TAJWEED_QUIZ', 'QA_IRAB', 'SALAH_QUIZ', 'WUDU_QUIZ']);

/* Alternative names for one grammatical category. */
const SYNONYMS = [['ṣifa', 'sifa', 'naʿt', "na't"]];

const problems = [];
const notes = [];

const norm = (s) => String(s).toLowerCase().replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();
const optText = (o) => (typeof o === 'string' ? o : (o && (o.en || o.bn)) || '');
/* Whole-word only. Substring matching flagged three TAJWEED_QUIZ options that
 * describe genuinely different makhraj/sifah combinations, purely because
 * "sifah" contains "sifa". */
function synGroup(text) {
  const words = new Set(norm(text).split(/[^\p{L}ʿʾ']+/u).filter(Boolean));
  for (const [i, set] of SYNONYMS.entries()) {
    for (const term of set) if (words.has(term.toLowerCase())) return i;
  }
  return null;
}

function scan(arr, name, file) {
  if (!Array.isArray(arr) || arr.length < 5) return;
  const first = arr.find((x) => x && typeof x === 'object');
  if (!first) return;
  const ak = ANSWER_KEYS.find((k) => typeof first[k] === 'number');
  const ok = OPT_KEYS.find((k) => Array.isArray(first[k]));
  if (!ak || !ok) return;

  const dist = {};
  let n = 0, maxOpts = 0;
  arr.forEach((q, qi) => {
    if (!q || typeof q[ak] !== 'number' || !Array.isArray(q[ok])) return;
    dist[q[ak]] = (dist[q[ak]] || 0) + 1;
    maxOpts = Math.max(maxOpts, q[ok].length);
    n++;

    const texts = q[ok].map(optText);
    const seen = new Map();
    texts.forEach((t, i) => {
      const k = norm(t);
      if (!k) return;
      if (seen.has(k)) problems.push(`${file}:${name}[${qi}] options ${seen.get(k)} and ${i} are identical: "${t}"`);
      else seen.set(k, i);
    });
    const gAns = synGroup(texts[q[ak]] || '');
    if (gAns !== null) {
      texts.forEach((t, i) => {
        if (i !== q[ak] && synGroup(t) === gAns) {
          problems.push(`${file}:${name}[${qi}] correct option "${texts[q[ak]]}" and option ${i} "${t}" name the SAME category`);
        }
      });
    }
  });

  if (!n || !maxOpts) return;
  const top = Math.max(...Object.values(dist));
  const share = top / n;
  const chance = 1 / maxOpts;
  if (share > chance * 1.8) {
    const msg = `${file}:${name} n=${n} dist=${JSON.stringify(dist)} top slot ${(share * 100).toFixed(0)}% vs ${(chance * 100).toFixed(0)}% chance`;
    if (SHUFFLED_AT_RENDER.has(name)) notes.push(msg + ' — shuffled at render, exempt');
    else problems.push(msg + ' — a learner always picking that slot beats chance');
  }
}

for (const file of dataFiles()) {
  let sb;
  try { sb = load(file); } catch (e) { continue; }
  for (const name of constNames(file)) {
    const v = get(sb, name);
    if (Array.isArray(v)) scan(v, name, file);
    else if (v && typeof v === 'object') for (const [k, sub] of Object.entries(v)) scan(sub, `${name}.${k}`, file);
  }
}

/* A module claiming render-time shuffling must actually do it. */
const shufflers = fs.readdirSync(path.join(ROOT, 'js'))
  .filter((f) => f.endsWith('.js'))          // js/ also contains the i18n/ directory
  .filter((f) => /quizPerm|optPerm|shuffleOptions/.test(fs.readFileSync(path.join(ROOT, 'js', f), 'utf8')));
if (shufflers.length < 3) problems.push(`only ${shufflers.length} modules implement option shuffling — expected the quiz modules to`);

module.exports = {
  name: 'quiz answers are not guessable',
  run() {
    return { ok: problems.length === 0, detail: `${shufflers.length} modules shuffle at render; ${notes.length} exempt`, problems };
  },
};
