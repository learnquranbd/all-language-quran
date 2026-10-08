// Gather everything a drafter needs for one theme page, with zero model tokens.
// usage: node tools/themes/prep.js <id>   → tools/themes/work/<id>/PREP.md
// Lists every ayah on the page's list with Arabic, English and Bengali, plus the
// legacy intro, the live videos and what the sibling pages already cover.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const { THEMES } = require('./registry.js');
const id = process.argv[2];
const T = THEMES.find(x => x.id === id);
if (!T) { console.log('usage: prep.js <id>  ids:', THEMES.map(x => x.id).join(' ')); process.exit(1); }
const dir = path.join(__dirname, 'work', id); fs.mkdirSync(dir, { recursive: true });
const page = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/themes', id + '.json'), 'utf8'));
const L = JSON.parse(fs.readFileSync(path.join(__dirname, 'legacy', id + '.json'), 'utf8'));
const EN = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/translations/en.json'), 'utf8'));
const BN = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/translations/bn.json'), 'utf8'));
const tr = (D, s, a) => { const k = `${s}:${a}`; if (D[k]) return D[k]; const x = D[s] || D[String(s)]; return Array.isArray(x) ? x[a - 1] : (x && x[a]) || ''; };
const Q = {}; const ar = (s, a) => { if (!Q[s]) Q[s] = JSON.parse(fs.readFileSync(path.join(ROOT, `data/quran-json/${s}.json`), 'utf8')).verse; return Q[s]['verse_' + a] || ''; };
const strip = h => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const out = [`# PREP ${id} — ${T.en} / ${T.bn}\n`,
  `Group: ${T.group}. Legacy page: ${T.partial}. ${page.refs.length} ayat on the list.\n`,
  `## Legacy intro (Bengali, from the old app; a starting hint only, not a source)\n\n${strip(L.introHtml) || '(none)'}\n`,
  `## Sibling pages (do not duplicate their core; link with "related")\n\n` + THEMES.filter(x => x.id !== id).map(x => `- ${x.id}: ${x.en}`).join('\n') + '\n',
  `## Live videos already on the page (${page.videos.length})\n\n` + (page.videos.map(v => `- ${v.title} (${v.channel})`).join('\n') || '(none)') + '\n',
  `## The ayah list (Arabic | EN Saheeh | BN)\n`];
for (const r of page.refs) {
  const [s, a] = r.split(':').map(Number);
  out.push(`### ${r}\n${ar(s, a)}\nEN: ${tr(EN, s, a)}\nBN: ${tr(BN, s, a)}\n`);
}
fs.writeFileSync(path.join(dir, 'PREP.md'), out.join('\n'));
console.log(`wrote ${path.relative(ROOT, path.join(dir, 'PREP.md'))} (${page.refs.length} ayat)`);
