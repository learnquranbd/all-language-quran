#!/usr/bin/env node
/**
 * Builds data/letter-practice/ for the Tajweed "Letter practice" view.
 *
 *   node tools/letter-practice/build.js
 *
 * For each of the 29 letters (js/letter-practice-rules.js):
 *   words: the 50 most frequent Quranic words in which the letter is
 *          pronounced. "Same word" = same spelling apart from the case
 *          ending, so ٱللَّهِ / ٱللَّهُ / ٱللَّهَ are one entry; the most frequent spelling is shown
 *          and its first occurrence is the audio/gloss reference.
 *   ayahs: the 10 ayahs where the letter is pronounced most often
 *          (ties: the shorter ayah first).
 *   dense: the 10 ayahs of at least 4 words where the letter makes up the
 *          largest share of the pronounced letters (short drill ayahs).
 *
 * Glosses come from data/wbw/<lang>.json for the languages that have native
 * word-by-word data; the page falls back to English for the rest.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');
const { LETTER_PRACTICE_LETTERS, LetterPracticeRules: R } = require(path.join(ROOT, 'js/letter-practice-rules.js'));

const WORDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/quran-words.json'), 'utf8'));
const OUT = path.join(ROOT, 'data/letter-practice');
const GLOSS_LANGS = ['en', 'bn', 'ur', 'id', 'tr', 'fa', 'hi'];
const TOP_WORDS = 50, TOP_AYAHS = 10, DENSE_MIN_WORDS = 4;

const keys = LETTER_PRACTICE_LETTERS.map((l) => l.key);
const wordStats = {};   // key -> wordKey -> { n, forms: {form: {n, ref}} }
const ayahStats = {};   // key -> [{ref, n, total}]
keys.forEach((k) => { wordStats[k] = {}; ayahStats[k] = []; });

for (const ref of Object.keys(WORDS)) {
  const perAyah = {};
  let total = 0;
  WORDS[ref].forEach((w, i) => {
    const cl = R.analyse(w);
    const seen = {};
    for (const c of cl) {
      if (!c.key) continue;
      total++;
      perAyah[c.key] = (perAyah[c.key] || 0) + 1;
      seen[c.key] = true;
    }
    const sk = R.wordKey(w);
    for (const k of Object.keys(seen)) {
      const g = wordStats[k][sk] || (wordStats[k][sk] = { n: 0, forms: {} });
      g.n++;
      const f = g.forms[w] || (g.forms[w] = { n: 0, ref: ref + ':' + (i + 1) });
      f.n++;
    }
  });
  for (const k of Object.keys(perAyah)) ayahStats[k].push({ ref, n: perAyah[k], total, words: WORDS[ref].length });
}

const ayahText = {};
const refsForGloss = new Set();
const letters = {};
for (const k of keys) {
  const words = Object.values(wordStats[k])
    .sort((a, b) => b.n - a.n)
    .slice(0, TOP_WORDS)
    .map((g) => {
      const [form, f] = Object.entries(g.forms).sort((a, b) => b[1].n - a[1].n)[0];
      refsForGloss.add(f.ref);
      return { w: form, n: g.n, r: f.ref, v: Object.keys(g.forms).length };
    });
  const byCount = ayahStats[k].slice()
    .sort((a, b) => b.n - a.n || a.total - b.total)
    .slice(0, TOP_AYAHS);
  const byDensity = ayahStats[k].filter((a) => a.words >= DENSE_MIN_WORDS)
    .sort((a, b) => b.n / b.total - a.n / a.total || b.n - a.n)
    .slice(0, TOP_AYAHS);
  for (const a of byCount.concat(byDensity)) ayahText[a.ref] = WORDS[a.ref].join(' ');
  const totalHits = ayahStats[k].reduce((s, a) => s + a.n, 0);
  letters[k] = {
    total: totalHits,
    distinct: Object.keys(wordStats[k]).length,
    words,
    ayahs: byCount.map((a) => [a.ref, a.n]),
    dense: byDensity.map((a) => [a.ref, a.n, a.total])
  };
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'core.json'), JSON.stringify({ letters, ayahs: ayahText }));

for (const lang of GLOSS_LANGS) {
  const wbw = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/wbw', lang + '.json'), 'utf8'));
  const gloss = {};
  for (const r of refsForGloss) {
    const [s, a, w] = r.split(':');
    const g = (wbw[s + ':' + a] || [])[w - 1];
    if (g) gloss[r] = g;
  }
  fs.writeFileSync(path.join(OUT, 'gloss-' + lang + '.json'), JSON.stringify(gloss));
}

const size = (f) => (fs.statSync(path.join(OUT, f)).size / 1024).toFixed(0) + ' KB';
console.log('letters', keys.length, '| ayah texts', Object.keys(ayahText).length, '| gloss refs', refsForGloss.size);
console.log('core.json', size('core.json'), '| gloss-bn.json', size('gloss-bn.json'));
