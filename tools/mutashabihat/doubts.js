// Collect the auditors' "group_doubts" from every batch into one report for the user:
// groups whose ayat aren't really confusable, duplicates, missing twins.
// usage: node tools/mutashabihat/doubts.js   → docs/mutashabihat-group-doubts.md
const fs = require('fs'), path = require('path');
const { ROOT, groups } = require('./lib.js');
const W = path.join(__dirname, 'work');
const byId = Object.fromEntries(groups().map((g, i) => [g.id, { n: i + 1, g }]));
const rows = [];
for (const b of fs.readdirSync(W).filter(d => /^M\d+$/.test(d)).sort((a, b) => a.slice(1) - b.slice(1))) {
  const f = path.join(W, b, 'audit.json');
  if (!fs.existsSync(f)) continue;
  for (const d of JSON.parse(fs.readFileSync(f, 'utf8')).group_doubts || []) {
    const m = String(d).match(/^\s*\**([\w-]+)\**\s*[:—-]\s*([\s\S]*)$/);
    const id = m && byId[m[1]] ? m[1] : null;
    rows.push({ batch: b, id, text: (id ? m[2] : String(d)).trim() });
  }
}
const out = ['# Mutashabihat: groups to review', '',
  `Collected ${new Date().toISOString().slice(0, 10)} from the auditors of batches M1-M9. Each line is a group whose membership the audit questioned: ayat that share only a word or a theme, a duplicate group, or real look-alikes left out. The notes for every group were still written and audited; this list is about the groups themselves (\`js/mutashabihat-data.js\`, MUTASHABIHAT_GROUPS), which are yours to change.`, '',
  '| # | Group | Ayat | Doubt |', '|---|---|---|---|',
  ...rows.map(r => {
    const g = r.id && byId[r.id];
    return `| ${g ? g.n : ''} | ${g ? `${r.id} (${g.g.nameEn})` : '?'} | ${g ? g.g.verses.join(' ') : ''} | ${r.text.replace(/\|/g, '/').replace(/\s+/g, ' ')} |`;
  }), ''];
fs.writeFileSync(path.join(ROOT, 'docs/mutashabihat-group-doubts.md'), out.join('\n'));
console.log(`${rows.length} doubts → docs/mutashabihat-group-doubts.md (${rows.filter(r => !r.id).length} unmatched to a group id)`);
