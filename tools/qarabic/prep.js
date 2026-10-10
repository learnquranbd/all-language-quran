// Gather everything a drafter needs for one Quranic Arabic batch, with zero model tokens.
// usage: node tools/qarabic/prep.js <batch> <surah> [<surah> ...]
//   → tools/qarabic/work/<batch>/PREP.md      (what the drafter reads)
//   → tools/qarabic/work/<batch>/targets.json (what validate.js / merge.js check against)
// For every ayah not yet parsed in data/qarabic/: the Arabic words, the bundled en/bn
// word glosses, the corpus morphology per word, the corpus i'rab label per word, and the
// bundled en/bn translations. Also the lessons that already exist for each surah.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
const J = f => JSON.parse(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const [batch, ...surahs] = process.argv.slice(2);
if (!batch || !surahs.length) { console.log('usage: prep.js <batch> <surah> [<surah> ...]'); process.exit(1); }

const QW = J('data/quran-words.json'), WEN = J('data/wbw/en.json'), WBN = J('data/wbw/bn.json');
const TEN = J('data/translations/en.json'), TBN = J('data/translations/bn.json');
const { lessonsBySurah, unitOf, fileOf } = require('./lib.js');

const cleanEn = s => String(s || '').replace(/(?<=[\p{L}\p{P}])\d+/gu, '').replace(/\s+/g, ' ').trim();

// corpus i'rab, one table row per word: English description + Arabic label.
// The legacy files are sometimes cut on the wrong ayah boundary (78:31 also carries
// 78:32's words), so an ayah's rows are used only when every row agrees with the
// corpus morphology on word count, verb-or-not and case. Otherwise: none.
const AG = /<div class="arabicGrammar">([\s\S]*?)<\/div>/g;
function irabRows(s, a) {
  const f = path.join(ROOT, `data/irab/${s}_${a}.html`);
  if (!fs.existsSync(f)) return [];
  return fs.readFileSync(f, 'utf8').split('<tr>').slice(2).map(r => ({   // [0] before table, [1] header
    ar: [...r.matchAll(AG)].map(m => m[1].replace(/<br\s*\/?>/g, ' / ').replace(/<[^>]+>/g, '').trim()).join(' / '),
    en: r.replace(AG, '').replace(/<br\s*\/?>/g, '; ').replace(/<[^>]+>/g, '').replace(/&ndash;/g, '-')
      .replace(/&rarr;.*$/s, '').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim(),
  }));
}
const MORPH = {};
const segsOf = (s, a) => { if (!MORPH[s]) MORPH[s] = J(`data/morphology/${String(s).padStart(3, '0')}.json`); return MORPH[s][a] || []; };
const CASE = { NOM: 'nominative', ACC: 'accusative', GEN: 'genitive' };
function irab(s, a, nWords) {
  const rows = irabRows(s, a), W = segsOf(s, a);
  if (rows.length !== nWords || W.length !== nWords) return { rows: [], why: rows.length ? `${rows.length} rows for ${nWords} words` : 'no file' };
  for (let i = 0; i < nWords; i++) {
    const segs = W[i], t = rows[i].en.toLowerCase();
    if (segs.some(g => g.g === 'V') !== /\bverb\b/.test(t)) return { rows: [], why: `word ${i + 1} verb mismatch` };
    for (const [k, v] of Object.entries(CASE)) if (segs.some(g => (g.f || []).includes(k)) && !t.includes(v)) return { rows: [], why: `word ${i + 1} case mismatch` };
  }
  return { rows, why: '' };
}
// corpus morphology per word, compact: "P bi + N GEN M root:ربب lemma:رَبّ"
const morph = (s, a) => segsOf(s, a).map(segs => segs.map(g =>
  [g.g, g.t, (g.f || []).join(' '), g.r ? 'root:' + g.r : '', g.l ? 'lemma:' + g.l : ''].filter(Boolean).join(' ')).join('  +  '));

const dir = path.join(__dirname, 'work', batch); fs.mkdirSync(dir, { recursive: true });
const targets = { batch, surahs: [], ayat: [] };
const out = [`# PREP ${batch}: surahs ${surahs.join(', ')}\n`,
  'Fixed fields (copied in at merge from the bundled data; you do NOT write them): each word\'s Arabic, en/bn gloss, and each ayah\'s en/bn translation. They are shown so you can teach from them.\n'];

for (const s of surahs.map(Number)) {
  const unit = unitOf(s);
  const existing = lessonsBySurah(s);
  const covered = new Set(existing.flatMap(l => l.examples.map(e => e.ref)));
  const n = Object.keys(QW).filter(k => k.startsWith(s + ':')).length;
  const missing = []; for (let a = 1; a <= n; a++) if (!covered.has(`${s}:${a}`)) missing.push(a);
  // contiguous runs of unparsed ayat; a lesson may not span a gap
  const runs = []; missing.forEach(a => { const r = runs[runs.length - 1]; if (r && r[1] === a - 1) r[1] = a; else runs.push([a, a]); });
  const used = existing.map(l => +l.id.split('-').pop()).filter(Number.isFinite);
  const nextId = (used.length ? Math.max(...used) : 0) + 1;
  targets.surahs.push({ surah: s, unit: unit.id, file: fileOf(s), nextId, runs });
  out.push(`\n---\n\n# Surah ${s}: ${unit.en} (unit id \`${unit.id}\`, ${n} ayat)\n`,
    `Unparsed: ${missing.length} ayat, runs ${runs.map(r => r[0] === r[1] ? r[0] : r[0] + '-' + r[1]).join(', ')}. New lesson ids start at \`${unit.id}-${nextId}\`.\n`,
    `## Lessons that already exist for this surah (do not repeat their concept as your main point)\n`,
    ...(existing.length ? existing.map(l => `- \`${l.id}\` ${l.examples.map(e => e.ref).join(' ')}: **${l.title.en}**. ${l.concept.en}`) : ['(none)']), '');
  for (const a of missing) {
    const k = `${s}:${a}`, words = QW[k], M = morph(s, a), IR = irab(s, a, words.length), I = IR.rows;
    targets.ayat.push({ ref: k, n: words.length });
    out.push(`### ${k}\n`, `${words.join(' ')}\n`, `EN: ${cleanEn(TEN[k])}`, `BN: ${TBN[k] || ''}\n`,
      '| # | Arabic | EN gloss | BN gloss | Corpus morphology (segments) | Corpus i\'rab |', '|---|---|---|---|---|---|',
      ...words.map((w, i) => `| ${i + 1} | ${w} | ${(WEN[k] || [])[i] || ''} | ${(WBN[k] || [])[i] || ''} | ${M[i] || '(none)'} | ${I[i] ? I[i].en + (I[i].ar ? ' — ' + I[i].ar : '') : '–'} |`), '');
    if (M.length !== words.length) out.push(`> NOTE: morphology has ${M.length} words, the text has ${words.length}. Align by the Arabic.\n`);
    if (IR.why) { out.push(`> i'rab not shown (${IR.why}): use the morphology column alone.\n`); targets.noIrab = (targets.noIrab || 0) + 1; }
  }
}
fs.writeFileSync(path.join(dir, 'PREP.md'), out.join('\n'));
fs.writeFileSync(path.join(dir, 'targets.json'), JSON.stringify(targets, null, 1));
console.log(`wrote ${path.relative(ROOT, dir)}/PREP.md: ${targets.ayat.length} ayat, ${targets.ayat.reduce((t, x) => t + x.n, 0)} words`);
