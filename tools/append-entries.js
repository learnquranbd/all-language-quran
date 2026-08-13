#!/usr/bin/env node
/**
 * Append drafted entries to an array literal in a data file.
 *
 *   node tools/append-entries.js <chunkFile> <js/target.js> <ARRAY_NAME> [--write]
 *
 * Parses the chunk as `[ <chunk> ]`, finds `const ARRAY_NAME = [` in the
 * target, and inserts the chunk text immediately before the array's matching
 * closing bracket (found by bracket-depth walk that respects strings), fixing
 * up a missing trailing comma. Dry-run by default; --write applies.
 *
 * Validates before writing: chunk parses, no `id` collides with an existing
 * entry, and the merged file still parses with the expected count.
 */
const { fs, path, ROOT, load, get } = require('../tests/lib.js');
const vm = require('vm');

const [chunkFile, targetRel, arrName] = process.argv.slice(2);
const write = process.argv.includes('--write');
if (!chunkFile || !targetRel || !arrName) {
  console.error('usage: append-entries.js <chunk> <js/target.js> <ARRAY> [--write]');
  process.exit(1);
}

const chunkText = fs.readFileSync(chunkFile, 'utf8');
let chunk;
try {
  const ctx = {}; vm.createContext(ctx);
  chunk = vm.runInContext(`[\n${chunkText}\n]`, ctx);
} catch (e) { console.error('CHUNK PARSE FAIL: ' + e.message); process.exit(1); }

const existing = get(load(targetRel), arrName);
if (!Array.isArray(existing)) { console.error(`${arrName} is not an array in ${targetRel}`); process.exit(1); }

if (existing[0] && 'id' in existing[0]) {
  const seen = new Set(existing.map((e) => e.id));
  const dup = chunk.filter((e) => seen.has(e.id)).map((e) => e.id);
  if (dup.length) { console.error('duplicate ids: ' + dup.join(', ')); process.exit(1); }
}

const targetPath = path.join(ROOT, targetRel);
let src = fs.readFileSync(targetPath, 'utf8');
const startDecl = src.indexOf(`const ${arrName} = [`);
if (startDecl < 0) { console.error('array not found'); process.exit(1); }
let i = src.indexOf('[', startDecl), depth = 0, end = -1, inStr = null, esc = false;
for (; i < src.length; i++) {
  const c = src[i];
  if (inStr) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === inStr) inStr = null; continue; }
  if (c === "'" || c === '"' || c === '`') { inStr = c; continue; }
  if ('[{('.includes(c)) depth++;
  else if (']})'.includes(c)) { depth--; if (depth === 0 && c === ']') { end = i; break; } }
}
if (end < 0) { console.error('unterminated array'); process.exit(1); }

const before = src.slice(0, end);
const needsComma = !before.trimEnd().endsWith(',') && !before.trimEnd().endsWith('[');
const merged = before.replace(/\s*$/, '') + (needsComma ? ',\n' : '\n') + chunkText.replace(/\s*$/, '') + '\n' + src.slice(end);

console.log(`${arrName}: ${existing.length} existing + ${chunk.length} new`);
if (!write) { console.log('  (dry run — pass --write to apply)'); process.exit(0); }

fs.writeFileSync(targetPath, merged);
const after = get(load(targetRel), arrName);
if (after.length !== existing.length + chunk.length) {
  console.error(`COUNT MISMATCH after merge: ${after.length}`);
  fs.writeFileSync(targetPath, src);   // roll back
  console.error('rolled back');
  process.exit(1);
}
console.log(`  merged -> ${after.length}`);
