// Apply an auditor's exact replacements (work/<batch>/audit.json) to draft.json.
// "where" is "<lesson id> [<ref>] <field>", field one of: title, concept, note,
// w<N> role, practice q, practice explain, option <N>. A trailing en|bn is ignored:
// each fix carries both halves and both are written. Findings it can't place are
// printed and left for a hand edit.
// usage: node tools/qarabic/apply-audit.js <batch> [--write] [--skip i,j]  (i = finding index)
const fs = require('fs'), path = require('path');
const batch = process.argv[2], write = process.argv.includes('--write');
const si = process.argv.indexOf('--skip'), skip = new Set(si > 0 ? process.argv[si + 1].split(',').map(Number) : []);
const dir = path.join(__dirname, 'work', batch);
const D = JSON.parse(fs.readFileSync(path.join(dir, 'draft.json'), 'utf8'));
const A = JSON.parse(fs.readFileSync(path.join(dir, 'audit.json'), 'utf8'));
const lessons = Array.isArray(D) ? D : D.lessons;
let ok = 0, miss = 0;
A.findings.forEach((f, i) => {
  if (skip.has(i)) return console.log(`skip  #${i} ${f.where}`);
  const fix = f.fix && typeof f.fix.en === 'string' && typeof f.fix.bn === 'string' ? { en: f.fix.en, bn: f.fix.bn } : null;
  const hlw = (f.where.match(/\(and w(\d+) hl\)/) || [])[1];   // "note (and w3 hl)": also highlight word 3
  const t = f.where.replace(/\s*\(and w\d+ hl\)/, '').replace(/\s+(en|bn)$/, '').split(/\s+/);
  const L = lessons.find(l => l.id === t[0]);
  const ex = L && /^\d+:\d+$/.test(t[1] || '') ? L.examples.find(e => e.ref === t[1]) : null;
  const rest = (ex ? t.slice(2) : t.slice(1)).join(' ');
  let target = null, key = null;
  if (L && fix) {
    if (ex && rest === 'note') [target, key] = [ex, 'note'];
    else if (ex && /^w\d+ role$/.test(rest)) [target, key] = [ex.words[+rest.slice(1, rest.indexOf(' ')) - 1], 'role'];
    else if (!ex && ['title', 'concept'].includes(rest)) [target, key] = [L, rest];
    else if (!ex && /^practice (q|explain)$/.test(rest)) [target, key] = [L.practice, rest.split(' ')[1]];
    else if (!ex && /^(practice )?option \d+$/.test(rest)) [target, key] = [L.practice.options, +rest.split(' ').pop() - 1];
  }
  if (!target || target[key] == null) { miss++; return console.log(`MANUAL #${i} ${f.where}: ${f.problem.slice(0, 120)}`); }
  target[key] = fix; ok++;
  if (hlw && ex && ex.words[hlw - 1]) ex.words[hlw - 1].hl = true;
  console.log(`fixed #${i} ${f.severity} ${f.where}`);
});
if (write) fs.writeFileSync(path.join(dir, 'draft.json'), JSON.stringify(D, null, 1));
console.log(`${ok} applied, ${miss} manual${write ? '' : ' (dry run; pass --write)'}`);
