#!/usr/bin/env node
/**
 * Add NEW Tadabbur verses: their cards into js/tadabbur-data.js (TADABBUR_NOTES),
 * their refs into the verse pool js/ponder.js (PONDER_REFS, kept in surah order)
 * and, optionally, into one or more PONDER_THEMES.
 *
 *   node tools/merge-tadabbur-notes.js <chunk.js> [--write]
 *
 * The chunk holds `"s:a": { reflectionEn, reflectionBn, pointsEn, pointsBn,
 * lessonEn, lessonBn, themes? },` entries. `themes` is a list of PONDER_THEMES
 * keys and is stripped before the card is written.
 *
 * Refuses to write unless every ref is valid and new, every field is present
 * in both languages, the reflection is 80-160 English words, there are 3-6
 * points, and every verse reference inside the prose is in bounds. Articles
 * come AFTER this (tools/merge-articles.js needs the card to exist).
 */
const { fs, path, ROOT, load, get, badRef } = require('../tests/lib.js');
const vm = require('vm');

const [chunkFile] = process.argv.slice(2);
const write = process.argv.includes('--write');
if (!chunkFile) { console.error('usage: merge-tadabbur-notes.js <chunk.js> [--write]'); process.exit(1); }

let chunk;
try {
  const ctx = {}; vm.createContext(ctx);
  chunk = vm.runInContext(`({\n${fs.readFileSync(chunkFile, 'utf8')}\n})`, ctx);
} catch (e) { console.error('CHUNK PARSE FAIL: ' + e.message); process.exit(1); }

const NOTES_FILE = 'js/tadabbur-data.js', POOL_FILE = 'js/ponder.js';
const notes = get(load(NOTES_FILE), 'TADABBUR_NOTES') || {};
const poolSb = load(POOL_FILE);
const pool = get(poolSb, 'PONDER_REFS') || [];
const themes = get(poolSb, 'PONDER_THEMES') || {};
/* Same lookahead as js/ayah-autolink.js: a ref followed by a Bengali suffix
 * ("2:124-এ") IS linked by the app, so it must be bounds-checked here too.
 * The stricter form skipped 272 such refs across the shipped content. */
const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?!\d|[.:-]\d)/g;
const problems = [];
const wc = (s) => String(s || '').split(/\s+/).filter(Boolean).length;

function checkRefs(where, text) {
  REF.lastIndex = 0; let m;
  while ((m = REF.exec(String(text))) !== null) {
    const bad = badRef(`${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`);
    if (bad) problems.push(`${where}: ${bad}`);
  }
}

const covered = new Set();
for (const r of pool) { const [s, a] = r.split(':'); const [x, y] = a.split('-').map(Number); for (let i = x; i <= (y || x); i++) covered.add(`${s}:${i}`); }

for (const [ref, e] of Object.entries(chunk)) {
  const bad = badRef(ref);
  if (bad) { problems.push(`${ref}: ${bad}`); continue; }
  if (ref in notes) problems.push(`${ref}: already has a card`);
  if (pool.includes(ref)) problems.push(`${ref}: already in PONDER_REFS`);
  { const [s, a] = ref.split(':'); const [x, y] = a.split('-').map(Number); for (let i = x; i <= (y || x); i++) if (covered.has(`${s}:${i}`)) problems.push(`${ref}: ayah ${s}:${i} is already covered by an existing entry`); }
  for (const k of ['reflectionEn', 'reflectionBn', 'lessonEn', 'lessonBn']) if (!String(e[k] || '').trim()) problems.push(`${ref}: ${k} empty`);
  for (const k of ['pointsEn', 'pointsBn']) {
    if (!Array.isArray(e[k]) || e[k].length < 3 || e[k].length > 6) problems.push(`${ref}: ${k} must have 3-6 items`);
    else e[k].forEach((p, i) => { if (!String(p || '').trim()) problems.push(`${ref}: ${k}[${i}] empty`); checkRefs(`${ref}.${k}[${i}]`, p); });
  }
  if (Array.isArray(e.pointsEn) && Array.isArray(e.pointsBn) && e.pointsEn.length !== e.pointsBn.length) problems.push(`${ref}: pointsEn/pointsBn length differ`);
  const rw = wc(e.reflectionEn);
  if (rw < 80 || rw > 160) problems.push(`${ref}: reflectionEn ${rw} words, outside 80-160`);
  if (wc(e.lessonEn) > 35) problems.push(`${ref}: lessonEn over 35 words`);
  for (const k of ['reflectionEn', 'reflectionBn', 'lessonEn', 'lessonBn']) { checkRefs(`${ref}.${k}`, e[k]); if (/<[a-zA-Z/]/.test(String(e[k]))) problems.push(`${ref}: ${k} contains HTML`); }
  if ((e.reflectionBn || '').split('—').length > 2) problems.push(`${ref}: reflectionBn has more than one em dash`);
  for (const t of (e.themes || [])) if (!themes[t]) problems.push(`${ref}: unknown theme "${t}"`);
}

console.log(`TADABBUR_NOTES: +${Object.keys(chunk).length} cards (pool ${pool.length} -> ${pool.length + Object.keys(chunk).length})`);
if (problems.length) {
  problems.slice(0, 20).forEach((p) => console.log('  !! ' + p));
  if (problems.length > 20) console.log(`  !! …and ${problems.length - 20} more`);
  console.log('  => NOT CLEAN — refusing to merge'); process.exit(1);
}
console.log('  => CLEAN');
if (!write) { console.log('  (dry run — pass --write to apply)'); process.exit(0); }

/* ---- 1. cards into TADABBUR_NOTES ---- */
const notesPath = path.join(ROOT, NOTES_FILE);
const src = fs.readFileSync(notesPath, 'utf8');
const decl = src.indexOf('const TADABBUR_NOTES = {');
if (decl < 0) { console.error('TADABBUR_NOTES not found'); process.exit(1); }
let i = src.indexOf('{', decl), depth = 0, end = -1, inStr = null, esc = false;
for (; i < src.length; i++) {
  const c = src[i];
  if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === inStr) inStr = null; continue; }
  if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
  if ('[{('.includes(c)) depth++;
  else if (']})'.includes(c)) { depth--; if (depth === 0 && c === '}') { end = i; break; } }
}
if (end < 0) { console.error('unterminated TADABBUR_NOTES'); process.exit(1); }
const cards = Object.entries(chunk).map(([ref, e]) => {
  const card = {}; for (const k of ['reflectionEn', 'reflectionBn', 'pointsEn', 'pointsBn', 'lessonEn', 'lessonBn']) card[k] = e[k];
  return '  ' + JSON.stringify(ref) + ': ' + JSON.stringify(card, null, 2).replace(/\n/g, '\n  ');
}).join(',\n');
const before = src.slice(0, end).replace(/\s*$/, '');
const needsComma = !before.endsWith(',') && !before.endsWith('{');
fs.writeFileSync(notesPath, before + (needsComma ? ',\n' : '\n') + cards + '\n' + src.slice(end));

/* ---- 2. refs into PONDER_REFS, regenerated in surah:ayah order ---- */
const order = (a, b) => { const [sa, aa] = a.split(':').map((x) => parseInt(x, 10)); const [sb, ab] = b.split(':').map((x) => parseInt(x, 10)); return sa - sb || aa - ab; };
const newPool = pool.concat(Object.keys(chunk)).sort(order);
const poolPath = path.join(ROOT, POOL_FILE);
let psrc = fs.readFileSync(poolPath, 'utf8');
const ps = psrc.indexOf('const PONDER_REFS = [');
const pe = psrc.indexOf('];', ps);
if (ps < 0 || pe < 0) { console.error('PONDER_REFS not found'); process.exit(1); }
const lines = [];
for (let k = 0; k < newPool.length; k += 6) lines.push('  ' + newPool.slice(k, k + 6).map((r) => `'${r}'`).join(', ') + ',');
psrc = psrc.slice(0, ps) + 'const PONDER_REFS = [\n' + lines.join('\n') + '\n' + psrc.slice(pe);

/* ---- 3. themes ---- */
for (const [ref, e] of Object.entries(chunk)) {
  for (const t of (e.themes || [])) {
    const ts = psrc.indexOf(`\n  ${t}:`);
    const rs = psrc.indexOf('refs: [', ts);
    const re = psrc.indexOf(']', rs);
    if (ts < 0 || rs < 0 || re < 0) { console.error(`theme ${t} refs list not found`); process.exit(1); }
    const list = psrc.slice(rs + 7, re);
    if (!list.includes(`'${ref}'`)) psrc = psrc.slice(0, re) + (list.trim().endsWith(',') || !list.trim() ? '' : ', ') + `'${ref}'` + psrc.slice(re);
  }
}
fs.writeFileSync(poolPath, psrc);

/* ---- verify ---- */
const afterNotes = get(load(NOTES_FILE), 'TADABBUR_NOTES');
const afterSb = load(POOL_FILE);
const afterPool = get(afterSb, 'PONDER_REFS'), afterThemes = get(afterSb, 'PONDER_THEMES');
const want = Object.keys(notes).length + Object.keys(chunk).length;
let bad = false;
if (Object.keys(afterNotes || {}).length !== want) { console.error('COUNT MISMATCH in TADABBUR_NOTES'); bad = true; }
if (!afterPool || afterPool.length !== want) { console.error('COUNT MISMATCH in PONDER_REFS'); bad = true; }
for (const t of Object.keys(afterThemes || {})) for (const r of afterThemes[t].refs) if (!afterPool.includes(r)) { console.error(`theme ${t} ref ${r} not in pool`); bad = true; }
if (bad) { fs.writeFileSync(notesPath, src); fs.writeFileSync(poolPath, fs.readFileSync(poolPath, 'utf8')); console.error('rolled back notes; inspect js/ponder.js'); process.exit(1); }
console.log(`  merged -> ${want} cards, pool ${afterPool.length}`);
