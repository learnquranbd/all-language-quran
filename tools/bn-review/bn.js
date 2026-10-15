// Bengali review for module content: pull every {en, bn} pair (also fooEn/fooBn) of one data const into review
// packets, then write reviewed Bengali back into the source file in place.
//   node tools/bn-review/bn.js extract <file> <CONST> [stringsPerChunk=220] -> work/<CONST>/R<n>/review.json
//   node tools/bn-review/bn.js apply <CONST> [--write]   -> applies every work/<CONST>/R<n>/bn-fixes.json
// Ids are JSON paths into the const ("12.points.0.bn", "3.summaryBn"). apply refuses a fix whose English changed
// since extraction, and checks each new string: verse refs and numbers kept, honorifics kept, at most 2 em dashes,
// no wrong-register words (tools/BANGLA-STYLE.md).
const fs = require('fs'), path = require('path');
const L = require('../../tests/lib.js');
const ROOT = path.join(__dirname, '../..'), WORK = path.join(__dirname, 'work');
const acorn = (() => { try { return require('acorn'); } catch (e) { return require('/usr/lib/node_modules/lighthouse/node_modules/acorn'); } })();
const BAD_WORDS = ['প্রক্রিয়াকরণ', 'রোগনির্ণয়', 'দ্বিতীয় পুরুষ', 'প্রথম পুরুষ', 'ইনপুট', 'আউটপুট', 'অডিট', 'কনটেন্ট'];

/** [{id, en, bn}] for every bn string with an English sibling. */
function pairs(file, name) {
  process.chdir(ROOT);
  const out = [];
  (function walk(n, p) {
    if (n == null || typeof n !== 'object') return;
    if (Array.isArray(n)) return n.forEach((x, i) => walk(x, p.concat(i)));
    for (const [k, v] of Object.entries(n)) {
      const enKey = k === 'bn' ? 'en' : (/Bn$/.test(k) ? k.replace(/Bn$/, 'En') : null);
      if (enKey && typeof v === 'string' && typeof n[enKey] === 'string' && v.trim()) out.push({ id: p.concat(k).join('.'), en: n[enKey], bn: v });
      else walk(v, p.concat(k));
    }
  })(L.get(L.load(file), name), []);
  return out;
}

function extract(file, name, per) {
  const items = pairs(file, name), dir = path.join(WORK, name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'meta.json'), JSON.stringify({ file, name }));
  let c = 0;
  for (let i = 0; i < items.length; i += per) {
    c++; const d = path.join(dir, 'R' + c); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, 'review.json'), JSON.stringify(items.slice(i, i + per), null, 1));
  }
  console.log(`${name}: ${items.length} pairs in ${c} packets (work/${name}/R1..R${c})`);
}

const digits = (s) => (s.replace(/[০-৯]/g, (d) => '০১২৩৪৫৬৭৮৯'.indexOf(d)).match(/\d+/g) || []).sort().join(' ');
const marks = (s) => ['ﷺ', '(রাঃ)', '(আঃ)', '(রা)', '(আ)'].map((m) => s.split(m).length - 1).join(',');

function check(id, en, oldBn, nb) {
  const e = [];
  if (typeof nb !== 'string' || !nb.trim()) e.push('empty');
  else {
    if (digits(nb) !== digits(oldBn) && digits(nb) !== digits(en)) e.push(`numbers differ (old: ${digits(oldBn)} | new: ${digits(nb)})`);
    if (marks(nb) !== marks(oldBn)) e.push(`honorifics differ (ﷺ,রাঃ,আঃ,রা,আ: ${marks(oldBn)} -> ${marks(nb)})`);
    if ((nb.match(/—/g) || []).length > 2) e.push('more than 2 em dashes');
    for (const w of BAD_WORDS) if (nb.includes(w)) e.push('wrong-register word ' + w);
    if (/[a-zA-Z]{4,}/.test(nb.replace(/https?:\S+/g, '')) && !/[a-zA-Z]{4,}/.test(oldBn)) e.push('Latin text added');
  }
  return e.map((x) => `${id}: ${x}`);
}

function apply(name, write) {
  const dir = path.join(WORK, name), { file } = JSON.parse(fs.readFileSync(path.join(dir, 'meta.json'), 'utf8'));
  const now = new Map(pairs(file, name).map((x) => [x.id, x]));
  const fixes = {}, reviewed = {};   // reviewed: the Bengali each fix was written against
  for (const d of fs.readdirSync(dir).filter((x) => /^R\d+$/.test(x))) {
    const f = path.join(dir, d, 'bn-fixes.json');
    for (const it of JSON.parse(fs.readFileSync(path.join(dir, d, 'review.json'), 'utf8'))) reviewed[it.id] = it.bn;
    if (fs.existsSync(f)) Object.assign(fixes, JSON.parse(fs.readFileSync(f, 'utf8')));
  }
  const src = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'script' });
  let root = null;
  for (const st of ast.body) if (st.type === 'VariableDeclaration') for (const dcl of st.declarations) if (dcl.id.name === name) root = dcl.init;
  const keyName = (k) => String(k.type === 'Identifier' ? k.name : k.value);
  const errs = [], edits = [];
  for (const [id, nb] of Object.entries(fixes)) {
    const cur = now.get(id);
    if (!cur) { errs.push(`${id}: no such Bengali string`); continue; }
    // someone else (a fact-check) changed this Bengali after the packet was made: re-review it, don't overwrite
    if (reviewed[id] !== undefined && reviewed[id] !== cur.bn && nb !== cur.bn) { errs.push(`${id}: Bengali changed since review (stale fix)`); continue; }
    const e = check(id, cur.en, cur.bn, nb);
    if (e.length) { errs.push(...e); continue; }
    let node = root;
    for (const k of id.split('.')) {
      if (!node) break;
      if (node.type === 'ArrayExpression') node = node.elements[+k];
      else if (node.type === 'ObjectExpression') { const pr = node.properties.find((x) => x.key && keyName(x.key) === k); node = pr && pr.value; }
      else node = null;
    }
    if (!node || node.type !== 'Literal' || node.value !== cur.bn) { errs.push(`${id}: source literal not found (template string or computed?)`); continue; }
    const q = node.raw[0] === '"' ? '"' : "'";
    const lit = q + nb.replace(/\\/g, '\\\\').replace(new RegExp(q, 'g'), '\\' + q).replace(/\n/g, '\\n') + q;
    edits.push([node.start, node.end, lit]);
  }
  edits.sort((a, b) => b[0] - a[0]);
  let out = src;
  for (const [a, b, s] of edits) out = out.slice(0, a) + s + out.slice(b);
  acorn.parse(out, { ecmaVersion: 'latest', sourceType: 'script' });
  errs.slice(0, 40).forEach((x) => console.log('ERROR ' + x));
  if (write && edits.length) fs.writeFileSync(path.join(ROOT, file), out);
  console.log(`${name}: ${Object.keys(fixes).length} fixes, ${edits.length} ok, ${errs.length} errors${write ? ' — written' : ' (dry run: --write to save)'}`);
  process.exit(errs.length && !write ? 1 : 0);
}

const [cmd, a, b, c] = process.argv.slice(2);
if (cmd === 'extract' && a && b) extract(a, b, +c || 220);
else if (cmd === 'apply' && a) apply(a, process.argv.includes('--write'));
else console.log('usage: bn.js extract <file> <CONST> [per] | apply <CONST> [--write]');
