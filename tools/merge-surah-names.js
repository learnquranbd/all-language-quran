#!/usr/bin/env node
/**
 * Splice drafted "why this name" entries into SURAH_NAME_NOTES.
 *
 *   node tools/merge-surah-names.js <chunk.js> [--write]
 *
 * Keys are surah NUMBERS, so the checks differ from the article merger: the key
 * must be 1-114 and unclaimed, and every reference must be in bounds — in the
 * Bengali prose as well as the English, which is where a copied reference
 * drifts. `alt` may be empty (many surahs have only one recorded name) but if
 * present each item needs a name and both languages, or the card renders a
 * bullet with a dangling dash.
 */
const { fs, path, ROOT, load, get, badRef } = require('../tests/lib.js');
const vm = require('vm');

const chunkFile = process.argv[2];
const write = process.argv.includes('--write');
if (!chunkFile) { console.error('usage: merge-surah-names.js <chunk.js> [--write]'); process.exit(1); }

const TARGET = 'js/surah-names-data.js';
const chunkText = fs.readFileSync(chunkFile, 'utf8');
let chunk;
try {
  const ctx = {}; vm.createContext(ctx);
  chunk = vm.runInContext(`({\n${chunkText}\n})`, ctx);
} catch (e) { console.error('CHUNK PARSE FAIL: ' + e.message); process.exit(1); }

const existing = get(load(TARGET), 'SURAH_NAME_NOTES') || {};
const surahs = get(load('js/surah-data.js'), 'SURAH_DATA');
const byNum = new Map(surahs.map((s) => [String(s.number), s]));
const problems = [];
const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?![\d:.-])/g;

const words = (s) => String(s || '').split(/\s+/).filter(Boolean).length;
let refCount = 0, altCount = 0;

for (const [key, e] of Object.entries(chunk)) {
  const where = `surah ${key}`;
  if (!byNum.has(String(key))) { problems.push(`${where}: not a surah number`); continue; }
  if (key in existing) problems.push(`${where}: already present`);
  if (!e || typeof e !== 'object') { problems.push(`${where}: not an object`); continue; }

  for (const f of ['meaning', 'source', 'why', 'signal']) {
    if (!e[f] || !String(e[f].en || '').trim()) problems.push(`${where}: ${f}.en empty`);
    if (!e[f] || !String(e[f].bn || '').trim()) problems.push(`${where}: ${f}.bn empty`);
  }
  const w = words(e.why && e.why.en);
  if (w && (w < 55 || w > 150)) problems.push(`${where}: why is ${w} words, outside 55-150`);
  const sg = words(e.signal && e.signal.en);
  if (sg && (sg < 15 || sg > 70)) problems.push(`${where}: signal is ${sg} words, outside 15-70`);

  if (e.alt != null && !Array.isArray(e.alt)) problems.push(`${where}: alt is not an array`);
  for (const [i, a] of (Array.isArray(e.alt) ? e.alt : []).entries()) {
    altCount++;
    if (!a || !String(a.name || '').trim()) problems.push(`${where}: alt[${i}] has no name`);
    if (!a || !String(a.en || '').trim() || !String(a.bn || '').trim()) problems.push(`${where}: alt[${i}] missing en or bn`);
  }

  for (const r of (Array.isArray(e.refs) ? e.refs : [])) {
    refCount++;
    const bad = badRef(String(r));
    if (bad) problems.push(`${where}: refs ${bad}`);
    else if (String(r).split(':')[0] !== String(key)) {
      // Not fatal: a name can be explained by a verse elsewhere. Worth seeing.
      console.log(`  note: ${where} cites ${r}, outside its own surah`);
    }
  }

  const prose = [e.meaning, e.source, e.why, e.signal].concat(Array.isArray(e.alt) ? e.alt : []);
  for (const o of prose) {
    for (const lang of ['en', 'bn']) {
      const text = String((o && o[lang]) || '');
      if (/<[a-zA-Z/]/.test(text)) problems.push(`${where}: HTML in ${lang}`);
      REF.lastIndex = 0;
      let m;
      while ((m = REF.exec(text)) !== null) {
        refCount++;
        const bad = badRef(`${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`);
        if (bad) problems.push(`${where} (${lang} prose): ${bad}`);
      }
    }
  }
}

console.log(`SURAH_NAME_NOTES: +${Object.keys(chunk).length} surahs, ${altCount} alternative names, ${refCount} refs checked`);
if (problems.length) {
  problems.slice(0, 15).forEach((p) => console.log('  !! ' + p));
  if (problems.length > 15) console.log(`  !! …and ${problems.length - 15} more`);
  console.log('  => NOT CLEAN — refusing to merge');
  process.exit(1);
}
console.log('  => CLEAN');
if (!write) { console.log('  (dry run — pass --write to apply)'); process.exit(0); }

const targetPath = path.join(ROOT, TARGET);
const src = fs.readFileSync(targetPath, 'utf8');
const decl = src.indexOf('const SURAH_NAME_NOTES = {');
let i = src.indexOf('{', decl), depth = 0, end = -1, inStr = null, esc = false;
for (; i < src.length; i++) {
  const c = src[i];
  if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === inStr) inStr = null; continue; }
  if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
  if ('[{('.includes(c)) depth++;
  else if (']})'.includes(c)) { depth--; if (depth === 0 && c === '}') { end = i; break; } }
}
if (end < 0) { console.error('unterminated object'); process.exit(1); }

const before = src.slice(0, end).replace(/\s*$/, '');
const needsComma = !before.endsWith(',') && !before.endsWith('{');
fs.writeFileSync(targetPath, before + (needsComma ? ',\n' : '\n') + chunkText.replace(/\s*$/, '') + '\n' + src.slice(end));

const after = get(load(TARGET), 'SURAH_NAME_NOTES');
const want = Object.keys(existing).length + Object.keys(chunk).length;
if (Object.keys(after || {}).length !== want) {
  fs.writeFileSync(targetPath, src);
  console.error('COUNT MISMATCH after merge — rolled back');
  process.exit(1);
}
console.log(`  merged -> ${Object.keys(after).length} / 114 surahs`);
