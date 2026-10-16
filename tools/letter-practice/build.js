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
 * harakat: per letter, the 6 most frequent spellings with the letter carrying
 *        fatha / kasra / damma / sukun / shadda.
 * qalqalah: for ق ط ب ج د, the 8 most frequent ayah-final words ending in it.
 * ra: the 6 most frequent words for each heavy/light ra rule (see raCat).
 * pairs: for each confusable pair (LETTER_CONFUSABLE), up to 6 minimal pairs:
 *        two Quranic words that are spelt alike except that one pronounced
 *        letter is swapped (أَلِيمٌ / عَلِيمٌ). Ranked by the rarer word's count.
 *
 * Glosses come from data/wbw/<lang>.json for the languages that have native
 * word-by-word data; the page falls back to English for the rest.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '../..');
const { LETTER_PRACTICE_LETTERS, LETTER_CONFUSABLE, LetterPracticeRules: R } = require(path.join(ROOT, 'js/letter-practice-rules.js'));

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

// Minimal pairs. forms: wordKey -> most frequent spelling, its count and first ref.
const forms = {};
for (const ref of Object.keys(WORDS)) {
  WORDS[ref].forEach((w, i) => {
    const k = R.wordKey(w);
    const f = forms[k] || (forms[k] = { n: 0, spell: {} });
    f.n++;
    const sp = f.spell[w] || (f.spell[w] = { n: 0, r: ref + ':' + (i + 1) });
    sp.n++;
  });
}
for (const k of Object.keys(forms)) {
  const [w, sp] = Object.entries(forms[k].spell).sort((a, b) => b[1].n - a[1].n)[0];
  forms[k].w = w; forms[k].r = sp.r;
}
const HAMZA_SEATS = 'ءأإ';
const pairs = [];
for (const [x, y] of LETTER_CONFUSABLE) {
  const found = new Map();
  const scan = (from, to) => {
    for (const k of Object.keys(forms)) {
      const cl = R.analyse(forms[k].w);
      cl.forEach((c, i) => {
        if (c.key !== from) return;
        if (from === 'ء' ? HAMZA_SEATS.indexOf(c.base) < 0 : c.base !== from) return;
        const swapped = cl.map((d, j) => (j === i ? to + d.marks : d.text)).join('');
        if (R.analyse(swapped)[i].key !== to) return;
        const g = forms[R.wordKey(swapped)];
        if (!g || g === forms[k]) return;
        const a = from === x ? forms[k] : g, b = from === x ? g : forms[k];
        const id = a.w + '|' + b.w;
        if (!found.has(id)) found.set(id, [a.w, a.r, a.n, b.w, b.r, b.n]);
      });
    }
  };
  scan(x, y);
  scan(y, x);
  const top = [...found.values()].sort((p, q) => Math.min(q[2], q[5]) - Math.min(p[2], p[5])).slice(0, 6);
  top.forEach((p) => { refsForGloss.add(p[1]); refsForGloss.add(p[4]); });
  if (top.length) pairs.push([x, y, top]);
}

// Per-spelling stats for the vowel, qalqalah and ra drills. Exact spelling,
// because the state of a word's last letter is its case ending.
const spell = {};   // w -> { n, r }
for (const ref of Object.keys(WORDS)) {
  WORDS[ref].forEach((w, i) => {
    const sp = spell[w] || (spell[w] = { n: 0, r: ref + ':' + (i + 1) });
    sp.n++;
  });
}
const topOf = (pred, k = 6) => Object.entries(spell).filter(([w]) => pred(w))
  .sort((a, b) => b[1].n - a[1].n).slice(0, k)
  .map(([w, v]) => { refsForGloss.add(v.r); return [w, v.r, v.n]; });

// harakat: the letter carrying each vowel (tanween excluded: it adds a nun sound).
const STATE = {
  fatha: (m) => m.indexOf('\u064E') >= 0 && m.indexOf('\u0651') < 0,
  kasra: (m) => m.indexOf('\u0650') >= 0 && m.indexOf('\u0651') < 0,
  damma: (m) => m.indexOf('\u064F') >= 0 && m.indexOf('\u0651') < 0,
  sukun: (m) => m.indexOf('\u0652') >= 0,
  shadda: (m) => m.indexOf('\u0651') >= 0
};
const harakat = {};
for (const k of keys) {
  if (k === 'ا') continue;
  harakat[k] = {};
  for (const st of Object.keys(STATE)) {
    // A shadda on a word's first letter only comes from idgham with the word before
    // (تَسْتَطِع عَّلَيْهِ), so it is not a shadda of the word itself.
    harakat[k][st] = topOf((w) => R.analyse(w).some((c, i) => c.key === k && STATE[st](c.marks) && !(st === 'shadda' && i === 0)));
  }
}

// Major qalqalah: ayah-final words whose very last letter is ق ط ب ج د (it takes
// sukun when you stop there). Not with tanween fath (مُرْتَفَقًا is read -qā at a
// stop) and not when a long vowel follows (ٱلْأَشْقَىٰ). r points at the ayah's last word.
const qalqalah = {};
for (const k of 'قطبجد') {
  const ends = {};
  for (const ref of Object.keys(WORDS)) {
    const ws = WORDS[ref], w = ws[ws.length - 1];
    const cl = R.analyse(w);
    const last = cl[cl.length - 1];
    if (last.key !== k || last.marks.indexOf('\u064B') >= 0) continue;
    const e = ends[w] || (ends[w] = { n: 0, r: ref + ':' + ws.length });
    e.n++;
  }
  qalqalah[k] = Object.entries(ends).sort((a, b) => b[1].n - a[1].n).slice(0, 8)
    .map(([w, v]) => { refsForGloss.add(v.r); return [w, v.r, v.n]; });
}

/**
 * Heavy / light ra when reading on (not stopping). One category per ra:
 *   h_vowel  ra with fatha or damma          l_vowel  ra with kasra
 *   h_after  sukun after fatha or damma      l_after  sukun after kasra
 *   h_wasl   sukun after hamzat al-wasl (ٱرْجِعِى)
 *   h_istila sukun after kasra, then a heavy letter in the word (قِرْطَاس)
 * Skipped: imala (مَجْر۪ىٰهَا), and a heavy letter carrying kasra after it
 * (فِرْقٍ, where both readings are allowed). Words with more than one ra are
 * left out so the highlighted ra is unambiguous.
 */
const raCat = (cl, i) => {
  const m = cl[i].marks;
  if (m.indexOf('\u06EA') >= 0) return '';
  if (/[\u064E\u064B\u064F\u064C]/.test(m)) return 'h_vowel';
  if (/[\u0650\u064D]/.test(m)) return 'l_vowel';
  if (m.indexOf('\u0652') < 0 || !i) return '';
  const prev = cl[i - 1], next = cl[i + 1];
  if (prev.base === 'ٱ') return 'h_wasl';
  if (/[\u064E\u064F]/.test(prev.marks)) return 'h_after';
  if (prev.marks.indexOf('\u0650') < 0) return '';
  if (next && 'خصضغطقظ'.indexOf(next.base) >= 0) return /[\u0650\u064D]/.test(next.marks) ? '' : 'h_istila';
  return 'l_after';
};
const ra = {};
for (const cat of ['h_vowel', 'h_after', 'h_wasl', 'h_istila', 'l_vowel', 'l_after']) {
  ra[cat] = topOf((w) => {
    const cl = R.analyse(w);
    const ras = cl.map((c, i) => (c.key === 'ر' ? i : -1)).filter((i) => i >= 0);
    return ras.length === 1 && raCat(cl, ras[0]) === cat;
  });
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'core.json'), JSON.stringify({ letters, ayahs: ayahText, pairs, harakat, qalqalah, ra }));

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
console.log('letters', keys.length, '| ayah texts', Object.keys(ayahText).length, '| gloss refs', refsForGloss.size,
  '| minimal pairs', pairs.reduce((s, p) => s + p[2].length, 0), 'in', pairs.length, 'letter pairs');
console.log('core.json', size('core.json'), '| gloss-bn.json', size('gloss-bn.json'));
