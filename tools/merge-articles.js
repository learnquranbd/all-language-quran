#!/usr/bin/env node
/**
 * Splice drafted article entries into an object literal.
 *
 *   node tools/merge-articles.js <chunk.js> <js/target.js> <OBJECT_NAME> <subjectFile> <SUBJECT_ARRAY> [--write] [--band lo-hi]
 *
 * Tadabbur target is the shard DIRECTORY (js/tadabbur-articles): entries are
 * routed by surah into js/tadabbur-articles/<surah>.js, each shard rewritten
 * from the merged table. --band overrides the 600-1100 word gate (the deep
 * Tadabbur template runs 1,400-1,800; pass --band 1200-2000).
 *
 * The array/object counterpart of tools/append-entries.js: chunks here are
 * `id: { sections: [...] },` entries rather than array elements.
 *
 * Refuses to write unless the chunk parses, every id exists in the subject
 * dataset, no id is already present, every paragraph has both `en` and `bn`,
 * and every verse reference in the prose — Bengali included — is in bounds.
 * That last one matters because a reference copied across languages can drift,
 * and a bad reference renders as dead plain text rather than failing loudly.
 */
const { fs, path, ROOT, load, get, badRef, TADABBUR_DIR, loadTadabburArticles, writeTadabburShard } = require('../tests/lib.js');
const vm = require('vm');

const [chunkFile, targetRel, objName, subjRel, subjArr] = process.argv.slice(2);
const write = process.argv.includes('--write');
const bandArg = (process.argv.find((a) => /^--band=?/.test(a)) || '').replace(/^--band=?/, '') || (process.argv[process.argv.indexOf('--band') + 1] || '');
const band = /^\d+-\d+$/.test(bandArg) ? bandArg.split('-').map(Number) : [600, 1100];
const sharded = targetRel && targetRel.replace(/\/$/, '') === TADABBUR_DIR;
if (!chunkFile || !targetRel || !objName || !subjRel || !subjArr) {
  console.error('usage: merge-articles.js <chunk> <js/target.js> <OBJ> <js/subjects.js> <ARRAY> [--write]');
  process.exit(1);
}

let chunk;
const chunkText = fs.readFileSync(chunkFile, 'utf8');
try {
  const ctx = {}; vm.createContext(ctx);
  chunk = vm.runInContext(`({\n${chunkText}\n})`, ctx);
} catch (e) { console.error('CHUNK PARSE FAIL: ' + e.message); process.exit(1); }

/* Subjects come in two shapes: an array of records with an `id` (prophets,
 * companions) or an object keyed by the id itself (tadabbur, keyed by verse
 * reference). Accept both rather than making the caller care. */
const subjects = get(load(subjRel), subjArr);
const validIds = new Set(Array.isArray(subjects) ? subjects.map((s) => s.id) : Object.keys(subjects || {}));
if (!validIds.size) { console.error(`${subjArr} in ${subjRel} yielded no subject ids`); process.exit(1); }
const existing = sharded ? loadTadabburArticles() : (get(load(targetRel), objName) || {});
const problems = [];
const REF = /(?<![\d:.-])(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?(?![\d:.-])/g;

let words = 0, paras = 0, refs = 0;
for (const [id, entry] of Object.entries(chunk)) {
  if (!validIds.has(id)) problems.push(`${id}: not a known subject id`);
  if (id in existing) problems.push(`${id}: already present in ${objName}`);
  if (!entry || !Array.isArray(entry.sections) || !entry.sections.length) { problems.push(`${id}: no sections`); continue; }
  let w = 0;
  for (const [si, sec] of entry.sections.entries()) {
    if (!sec.h || !sec.h.en || !sec.h.bn) problems.push(`${id}[${si}]: heading missing en or bn`);
    if (!Array.isArray(sec.p) || !sec.p.length) { problems.push(`${id}[${si}]: no paragraphs`); continue; }
    for (const [pi, p] of sec.p.entries()) {
      if (!p || !String(p.en || '').trim() || !String(p.bn || '').trim()) { problems.push(`${id}[${si}][${pi}]: empty en or bn`); continue; }
      paras++;
      w += String(p.en).split(/\s+/).filter(Boolean).length;
      if (/<[a-zA-Z/]/.test(p.en) || /<[a-zA-Z/]/.test(p.bn)) problems.push(`${id}[${si}][${pi}]: contains HTML`);
      for (const lang of ['en', 'bn']) {
        REF.lastIndex = 0;
        let m;
        while ((m = REF.exec(String(p[lang]))) !== null) {
          refs++;
          const bad = badRef(`${m[1]}:${m[2]}${m[3] ? '-' + m[3] : ''}`);
          if (bad) problems.push(`${id}[${si}][${pi}].${lang}: ${bad}`);
        }
      }
    }
  }
  words += w;
  if (w < band[0] || w > band[1]) problems.push(`${id}: ${w} English words, outside ${band[0]}-${band[1]}`);
}

console.log(`${objName}: +${Object.keys(chunk).length} subjects, ${paras} paragraphs, ${words} English words, ${refs} refs checked`);
if (problems.length) {
  problems.slice(0, 15).forEach((p) => console.log('  !! ' + p));
  if (problems.length > 15) console.log(`  !! …and ${problems.length - 15} more`);
  console.log('  => NOT CLEAN — refusing to merge');
  process.exit(1);
}
console.log('  => CLEAN');
if (!write) { console.log('  (dry run — pass --write to apply)'); process.exit(0); }

if (sharded) {
  const merged = Object.assign({}, existing, chunk);
  const touched = new Set(Object.keys(chunk).map((k) => k.split(':')[0]));
  for (const s of touched) {
    const entries = {};
    for (const k of Object.keys(merged)) if (k.split(':')[0] === s) entries[k] = merged[k];
    writeTadabburShard(s, entries);
  }
  const after = loadTadabburArticles();
  const want = Object.keys(existing).length + Object.keys(chunk).length;
  if (Object.keys(after).length !== want) { console.error('COUNT MISMATCH after shard write — inspect js/tadabbur-articles/'); process.exit(1); }
  console.log(`  merged -> ${Object.keys(after).length} subjects across ${[...touched].length} shard(s): ${[...touched].sort((a, b) => a - b).join(', ')}`);
  process.exit(0);
}

const targetPath = path.join(ROOT, targetRel);
const src = fs.readFileSync(targetPath, 'utf8');
let decl = src.indexOf(`var ${objName} = {`);
if (decl < 0) decl = src.indexOf(`const ${objName} = {`);
if (decl < 0) { console.error('object not found'); process.exit(1); }
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

const after = get(load(targetRel), objName);
const want = Object.keys(existing).length + Object.keys(chunk).length;
if (Object.keys(after || {}).length !== want) {
  fs.writeFileSync(targetPath, src);
  console.error(`COUNT MISMATCH after merge — rolled back`);
  process.exit(1);
}
console.log(`  merged -> ${Object.keys(after).length} subjects`);
