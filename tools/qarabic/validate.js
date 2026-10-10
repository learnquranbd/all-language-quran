// Mechanical gate for a drafted batch. Zero model tokens.
// usage: node tools/qarabic/validate.js <batch> [draft-file]   (default work/<batch>/draft.json)
// ERRORS block the merge. FLAGS are role-vs-morphology disagreements the auditor must
// rule on: each is either fixed or answered in the batch's AUDIT ledger.
const fs = require('fs'), path = require('path');
const { ROOT, allLessons } = require('./lib.js');
const J = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const batch = process.argv[2];
if (!batch) { console.log('usage: validate.js <batch> [draft-file]'); process.exit(1); }
const dir = path.join(__dirname, 'work', batch);
const T = JSON.parse(fs.readFileSync(path.join(dir, 'targets.json'), 'utf8'));
const file = process.argv[3] || path.join(dir, 'draft.json');
const QW = J('data/quran-words.json');
const err = [], flag = [];
const E = (w, m) => err.push(`${w}: ${m}`), F = (w, m) => flag.push(`${w}: ${m}`);

let D; try { D = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { console.log('ERROR draft does not parse:', e.message); process.exit(1); }
const lessons = Array.isArray(D) ? D : D.lessons;
if (!Array.isArray(lessons) || !lessons.length) { console.log('ERROR no lessons array'); process.exit(1); }

const BN = /[ঀ-৿]/, AR = /[؀-ۿ]/;
const pair = (o, w, what, { max, html } = {}) => {
  if (!o || typeof o.en !== 'string' || typeof o.bn !== 'string' || !o.en.trim() || !o.bn.trim()) return E(w, `${what} needs non-empty {en, bn}`);
  if (BN.test(o.en)) E(w, `${what}.en contains Bengali`);
  if (!BN.test(o.bn)) E(w, `${what}.bn has no Bengali`);
  if (max && o.en.length > max) E(w, `${what}.en is ${o.en.length} chars (max ${max}): "${o.en}"`);
  if (max && o.bn.length > max + 15) E(w, `${what}.bn is ${o.bn.length} chars (max ${max + 15}): "${o.bn}"`);
  for (const l of ['en', 'bn']) {
    const tags = (o[l].match(/<\/?([a-z]+)/gi) || []).map(x => x.replace(/[<\/]/g, '').toLowerCase());
    if (tags.some(t => !(html && t === 'b'))) E(w, `${what}.${l} has HTML other than ${html ? '<b>' : 'none'}`);
    if ((o[l].match(/—/g) || []).length > 1) E(w, `${what}.${l} has more than one em dash`);
  }
  if ((o.bn.match(/[a-zA-Z]{4,}/g) || []).length > 2) F(w, `${what}.bn has several Latin words: "${o.bn.slice(0, 80)}"`);
};

// morphology for role checks
const MORPH = {};
const segsOf = (s, a) => { if (!MORPH[s]) MORPH[s] = J(`data/morphology/${String(s).padStart(3, '0')}.json`); return MORPH[s][a] || []; };
function roleCheck(w, role, segs) {
  const r = role.toLowerCase(), has = f => segs.some(g => (g.f || []).includes(f));
  const isV = segs.some(g => g.g === 'V');
  if (isV && !/\bverb\b|\bimperative\b/.test(r)) F(w, `morphology has a verb, role "${role}" doesn't say so`);
  if (!isV && /\bverb\b/.test(r) && !/verbal noun|verb-like|verbal sentence/.test(r)) F(w, `role "${role}" says verb, morphology has none`);
  if (has('IMPV') && !/imperative|command/.test(r)) F(w, `morphology IMPV (imperative), role "${role}"`);
  if (has('PERF') && /\b(present|imperfect)\b/.test(r)) F(w, `morphology PERF (past), role "${role}"`);
  if (has('IMPF') && /\bpast\b|\bperfect\b/.test(r) && !/\blam\b|\blamm?a\b|jussive/.test(r)) F(w, `morphology IMPF, role "${role}"`);
  if (has('PASS') && !/passive/.test(r)) F(w, `morphology PASS (passive), role "${role}"`);
  const C = { NOM: /nominative|subject|mubtada|khabar|predicate|fa'?il|raf/, ACC: /accusative|object|maf'?ul|hal|tamyiz|adverb|nasb|circumstantial/, GEN: /genitive|majrur|mudaf ilayh|after a preposition|jarr/ };
  const cases = Object.keys(C).filter(has);
  for (const other of ['NOM', 'ACC', 'GEN'].filter(c => !cases.includes(c)))
    if (cases.length && new RegExp(`\\b${{ NOM: 'nominative', ACC: 'accusative', GEN: 'genitive' }[other]}\\b`).test(r)) F(w, `morphology ${cases.join('/')}, role says ${other.toLowerCase()}: "${role}"`);
}

const existing = new Set(allLessons().map(l => l.id));
const want = new Map(T.ayat.map(x => [x.ref, x.n])), seen = new Map(), ids = new Set();
const runOf = {}; T.surahs.forEach(S => S.runs.forEach(([a, b], i) => { for (let x = a; x <= b; x++) runOf[`${S.surah}:${x}`] = `${S.surah}#${i}`; }));
const answers = [0, 0, 0, 0];
for (const L of lessons) {
  const w = L.id || '(lesson without id)';
  const m = /^read-(\d+)-(\d+)$/.exec(L.id || '');
  if (!m) { E(w, 'id must be read-<surah>-<n>'); continue; }
  if (existing.has(L.id)) E(w, 'id already used in data/qarabic');
  if (ids.has(L.id)) E(w, 'id used twice in this draft'); ids.add(L.id);
  if (L.unit !== `read-${m[1]}`) E(w, `unit must be read-${m[1]}`);
  pair(L.title, w, 'title', { max: 70 });
  pair(L.concept, w, 'concept', { html: true });
  if (L.concept && L.concept.en && L.concept.en.length > 600) F(w, `concept.en is ${L.concept.en.length} chars; aim for 2-4 sentences`);
  const ex = L.examples || [];
  if (!ex.length) { E(w, 'no examples'); continue; }
  if (ex.length > 8) E(w, `${ex.length} ayat; max 8 per lesson`);
  const runs = new Set(ex.map(e => runOf[e.ref]));
  if (runs.size > 1 || runs.has(undefined)) E(w, `ayat must come from one unparsed run: ${ex.map(e => e.ref).join(' ')}`);
  ex.forEach((e, i) => {
    const we = `${w} ${e.ref}`;
    if (!want.has(e.ref)) return E(we, 'ayah is not a target of this batch');
    if (i && +e.ref.split(':')[1] !== +ex[i - 1].ref.split(':')[1] + 1) E(we, 'ayat in a lesson must be consecutive');
    seen.set(e.ref, (seen.get(e.ref) || 0) + 1);
    pair(e.note, we, 'note');
    const words = e.words || [], real = QW[e.ref];
    if (words.length !== real.length) return E(we, `${words.length} words, the ayah has ${real.length}`);
    const [s, a] = e.ref.split(':').map(Number), M = segsOf(s, a);
    let hl = 0;
    words.forEach((x, k) => {
      const ww = `${we} w${k + 1}`;
      if (x.ar !== real[k]) E(ww, `ar "${x.ar}" is not the text's "${real[k]}" (copy it from PREP.md)`);
      if (x.hl) hl++;
      pair(x.role, ww, 'role', { max: 48 });
      if (x.role && x.role.en && M[k]) roleCheck(ww, x.role.en, M[k]);
    });
    if (!hl) E(we, 'no highlighted word (hl: true)');
    if (hl > 3) E(we, `${hl} highlighted words; max 3`);
  });
  const P = L.practice;
  if (!P) { E(w, 'no practice question'); continue; }
  pair(P.q, w, 'practice.q'); pair(P.explain, w, 'practice.explain');
  if (!Array.isArray(P.options) || P.options.length !== 4) E(w, 'practice needs exactly 4 options');
  else {
    P.options.forEach((o, i) => pair(o, w, `option ${i + 1}`, { max: 90 }));
    if (new Set(P.options.map(o => o && o.en)).size !== 4) E(w, 'practice options repeat');
  }
  if (!Number.isInteger(P.answer) || P.answer < 0 || P.answer > 3) E(w, 'practice.answer must be 0-3'); else answers[P.answer]++;
}
for (const [ref] of want) if (!seen.has(ref)) E(ref, 'target ayah not covered by any lesson');
for (const [ref, c] of seen) if (c > 1) E(ref, `covered ${c} times`);
const nq = answers.reduce((a, b) => a + b, 0);
if (nq >= 4 && Math.max(...answers) > Math.ceil(nq * 0.4)) E('practice', `answer positions are lopsided ${JSON.stringify(answers)}; spread them`);

console.log(`${batch}: ${lessons.length} lessons, ${seen.size}/${want.size} ayat, answers ${JSON.stringify(answers)}`);
err.forEach(x => console.log('ERROR ' + x)); flag.forEach(x => console.log('FLAG  ' + x));
console.log(err.length ? `!! ${err.length} errors, ${flag.length} flags` : `CLEAN (${flag.length} flags for the auditor)`);
process.exit(err.length ? 1 : 0);
