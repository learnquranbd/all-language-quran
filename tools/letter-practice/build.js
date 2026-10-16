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
 * allah: heavy/light lam in the name Allah, by the vowel before it (see allahCat).
 * madd: for ا و ي, the most frequent words for each madd length (see maddLetter).
 * pairs: for each confusable pair (LETTER_CONFUSABLE), up to 6 minimal pairs:
 *        two Quranic words that are spelt alike except that one pronounced
 *        letter is swapped (أَلِيمٌ / عَلِيمٌ). Ranked by the rarer word's count.
 *
 * before: per letter, what a noon sakinah, tanween or meem sakinah does in front
 *        of it, with the most frequent real examples (see the block below).
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

/**
 * allah: the lam in the name Allah (and ٱللَّهُمَّ) is heavy after fatha or damma
 * and light after kasra, decided by the vowel said just before it when reading on.
 * Long vowels count as their short vowel and are skipped back over (عَلَى ٱللَّهِ heavy,
 * فِى ٱللَّهِ light), silent letters too; tanween before it gets a kasra (light).
 * At the start of an ayah it is heavy (you start with the fatha of the wasl hamza).
 *   allah[cat] = [total, [[text, ref of its first word, count, aw, lc, vw, vc], …]]
 *   aw/lc = word and cluster index of the lam; vw/vc = those of the vowel (-1: none).
 * Two-word texts play as a span; h_start examples are the ayah's first two words
 * (count = ayahs starting with them).
 */
const allahLam = (cl) => {
  for (let j = 1; j + 1 < cl.length; j++) {
    const c = cl[j];
    if (c.base !== 'ل' || c.marks.indexOf('ّ') < 0 || c.marks.indexOf('َ') < 0 || cl[j + 1].base !== 'ه') continue;
    const end = j + 2 === cl.length || (j + 3 === cl.length && cl[j + 2].base === 'م');
    if (end && cl[j - 1].base === 'ل') return j;
  }
  return -1;
};
/** Index of the cluster whose vowel is said last, walking back from `from`; -1 if none. */
const SILENT = /[۟۠]/, HARAKA = /[ً-ْ]/;
const vowelAt = (cl, from) => {
  for (let i = from; i >= 0; i--) {
    const c = cl[i];
    if (c.base === 'ٱ' || SILENT.test(c.marks)) continue;
    if ('اىوي'.indexOf(c.base) >= 0 && !HARAKA.test(c.marks)) continue;
    return i;
  }
  return -1;
};
const allahCat = (m) => /[ً-ٍ]/.test(m) ? 'l_tanween' : m.indexOf('ِ') >= 0 ? 'l_kasra'
  : m.indexOf('َ') >= 0 ? 'h_fatha' : m.indexOf('ُ') >= 0 ? 'h_damma' : '';
const allahJ = {};   // cat -> text -> { n, r, aw, lc, vw, vc }
const allahOdd = [];
for (const ref of Object.keys(WORDS)) {
  const ws = WORDS[ref];
  ws.forEach((w, i) => {
    const cl = R.analyse(w);
    const lc = allahLam(cl);
    if (lc < 0) return;
    // لِلَّهِ: the prefix lam carries the vowel; ٱللَّهِ: look before the article.
    let vw = 0, vc = cl[lc - 1].marks ? lc - 1 : vowelAt(cl, lc - 3);
    let text = w, r = ref + ':' + (i + 1), aw = 0, cat;
    if (vc < 0 && i > 0) {
      const pcl = R.analyse(ws[i - 1]);
      vc = vowelAt(pcl, pcl.length - 1);
      text = ws[i - 1] + ' ' + w; r = ref + ':' + i; aw = 1;
      cat = vc < 0 ? '' : allahCat(pcl[vc].marks);
    } else if (vc < 0) {
      cat = 'h_start'; vw = -1;
      if (ws[1]) text = w + ' ' + ws[1];
    } else cat = allahCat(cl[vc].marks);
    if (!cat) { allahOdd.push(r + ' ' + text); return; }
    const byText = allahJ[cat] || (allahJ[cat] = new Map());
    const e = byText.get(text) || { n: 0, r, aw, lc, vw, vc };
    e.n++;
    byText.set(text, e);
  });
}
const allah = {};
for (const cat of ['h_start', 'h_fatha', 'h_damma', 'l_kasra', 'l_tanween']) {
  const all = [...(allahJ[cat] || new Map()).entries()].sort((a, b) => b[1].n - a[1].n);
  allah[cat] = [all.reduce((s, e) => s + e[1].n, 0), all.slice(0, 6).map(([t, e]) => [t, e.r, e.n, e.aw, e.lc, e.vw, e.vc])];
}
if (allahOdd.length) console.log('allah: no vowel before the lam:', allahOdd.join(' | '));
console.log('allah lam:', Object.entries(allah).map(([c, v]) => c + ' ' + v[0]).join(', '));

/**
 * madd: for the long-vowel letters ا و ي, real words for each madd length, read
 * from the Madani marks: the maddah (ٓ) marks every madd longer than 2 counts.
 *   madd_muttasil  maddah, hamza next in the same word (جَآءَ)          4–5
 *   madd_munfasil  maddah at a word's end, the next word starts with hamza  4–5
 *   madd_6         maddah, then a sukun or shadda (ٱلضَّآلِّينَ, ءَآلْـَٰٔنَ)  6
 *   harfi          the opening letters of surahs (الٓمٓ), by the vowel of the letter's name  6
 *   madd_2         no maddah, inside a word (natural madd and badal)       2
 *   madd_246       no maddah, the last letter of an ayah after it: stopping
 *                  gives 2, 4 or 6 (ٱلْعَٰلَمِينَ); lin = و / ي with sukun after fatha there (خَوْفٍ)
 * A maddah at an ayah's end (مُوسَىٰٓ) is munfasil only when reading on into the next
 * ayah, so it is left out. A madd letter at a word's end without a maddah is left out (it drops before a
 * sukun: فِى ٱلْأَرْضِ). Alif covers ا, the dagger alif (ٰ) and ى with ٰ.
 *   madd[L][cat] = [total, [[text, ref of its first word, count, ci], …]]
 * madd_2 examples are spellings whose madd is 2 counts wherever they occur, so
 * the ×N list matches; madd_246 / lin counts are ayah ends only.
 */
const MADDAH = 'ٓ', NO_HARAKA = (m) => !/[ً-ْ]/.test(m);
const isHamza = (c) => c && ('ءأإؤئ'.indexOf(c.base) >= 0 || c.marks.indexOf('ٔ') >= 0);
/** The madd letter (ا و ي) cluster i makes, or '' (lin: 'و*' / 'ي*'). */
const maddLetter = (cl, i) => {
  const c = cl[i], m = c.marks;
  if (SILENT.test(m) || c.base === 'ٱ' || m.indexOf('۬') >= 0) return '';   // ا۬: hamza with tas-hil
  // A madd letter written small after a vowelled letter (دَاوُۥدَ, the silah of هُۥ / هِۦ).
  if (m.indexOf('ۥ') >= 0) return 'و';
  if (m.indexOf('ۦ') >= 0) return 'ي';
  let p = i - 1;
  while (p >= 0 && SILENT.test(cl[p].marks)) p--;   // a silent alif in between: وَجِا۟ىٓءَ
  const pm = p >= 0 ? cl[p].marks : '';
  if (pm.indexOf('۪') >= 0) return '';   // imala: مَجْر۪ىٰهَا
  // ٰ with a hamza sign or sukun is only the hamza's seat (فَٱدَّٰرَْٰٔتُمْ).
  if (m.indexOf('ٰ') >= 0) return /[ْٔ]/.test(m) ? '' : 'ا';
  if (p < 0) return '';
  if ((c.base === 'ا' || c.base === 'آ') && NO_HARAKA(m) && /َ/.test(pm) && !/ً/.test(pm)) return 'ا';
  if (c.base === 'و' && NO_HARAKA(m) && /ُ/.test(pm)) return 'و';
  if ((c.base === 'ي' || c.base === 'ى') && NO_HARAKA(m) && /ِ/.test(pm)) return 'ي';
  if ((c.base === 'و' || c.base === 'ي') && m.indexOf('ْ') >= 0 && /َ/.test(pm) && !/ّ/.test(m)) return c.base + '*';
  return '';
};
/** The opening letters of surahs carry a maddah too (الٓمٓ): the long vowel in the letter's name. */
const HARFI = { 'ل': 'ا', 'ص': 'ا', 'ك': 'ا', 'ق': 'ا', 'م': 'ي', 'س': 'ي', 'ن': 'و' };
const maddJ = {};   // L -> cat -> text -> { n, r, ci }
const maddSeen = {};   // word|ci -> Set of categories (madd_2 purity)
const maddOdd = [];
const addM = (L, cat, text, r, ci) => {
  const byCat = maddJ[L] || (maddJ[L] = {});
  const byText = byCat[cat] || (byCat[cat] = new Map());
  const e = byText.get(text) || { n: 0, r, ci };
  if (e.at === r) return;   // two madds of one kind in a word count the word once
  e.at = r;
  e.n++;
  byText.set(text, e);
};
for (const ref of Object.keys(WORDS)) {
  const ws = WORDS[ref];
  ws.forEach((w, wi) => {
    const cl = R.analyse(w);
    const at = ref + ':' + (wi + 1);
    let last = cl.length - 1;
    while (last > 0 && (SILENT.test(cl[last].marks) || (cl[last].base === 'ا' && !cl[last].marks))) last--;
    const ayahEnd = wi === ws.length - 1;
    cl.forEach((c, i) => {
      let L = maddLetter(cl, i);
      if (!L && c.marks.indexOf(MADDAH) >= 0 && HARFI[c.base]) addM(HARFI[c.base], 'harfi', w, at, i);
      if (!L) return;
      const lin = L.length > 1;
      L = L[0];
      let cat;
      if (c.marks.indexOf(MADDAH) >= 0) {
        const next = cl[i + 1];
        if (i >= last) {
          if (lin || ayahEnd || !isHamza(R.analyse(ws[wi + 1])[0])) { maddOdd.push(at + ' ' + w); return; }
          addM(L, 'madd_munfasil', w + ' ' + ws[wi + 1], at, i);
          return;
        }
        // يَٰٓأَيُّهَا, هَٰٓؤُلَآءِ, هَٰٓأَنتُمْ: the vocative يَا / the هَا of attention is a word of its
        // own written joined, so the madd is munfasil.
        if (isHamza(next) && /[يه]/.test(c.base) && c.marks.indexOf('\u0670') >= 0 && (i === 0 || (i === 1 && /[وفأ]/.test(cl[0].base)))) {
          addM(L, 'madd_munfasil', w, at, i);
          return;
        }
        if (isHamza(next)) cat = 'madd_muttasil';
        else if (/[ّْ]/.test(next.marks) || (!next.marks && !maddLetter(cl, i + 1))) cat = 'madd_6';
        else { maddOdd.push(at + ' ' + w); return; }
      } else if (i >= last) return;
      else if (i === last - 1 && ayahEnd && !/ً/.test(cl[last].marks)) cat = lin ? 'lin' : 'madd_246';
      else if (lin) return;
      else cat = 'madd_2';
      const sk = w + '|' + i;
      (maddSeen[sk] || (maddSeen[sk] = new Set())).add(cat);
      addM(L, cat, w, at, i);
    });
  });
}
const madd = {};
for (const L of 'اوي') {
  madd[L] = {};
  for (const cat of ['madd_2', 'madd_muttasil', 'madd_munfasil', 'madd_6', 'harfi', 'madd_246', 'lin']) {
    const all = [...((maddJ[L] || {})[cat] || new Map()).entries()].sort((a, b) => b[1].n - a[1].n);
    const total = all.reduce((s, e) => s + e[1].n, 0);
    if (!total) continue;
    const out = [], used = new Set();
    for (const [t, e] of all) {
      if (out.length >= 6) break;
      if (cat === 'madd_2' && maddSeen[t + '|' + e.ci].size > 1) continue;
      const k = t.split(' ').map((x) => R.wordKey(x)).join(' ');
      if (used.has(k)) continue;
      used.add(k);
      refsForGloss.add(e.r);
      out.push([t, e.r, e.n, e.ci]);
    }
    madd[L][cat] = [total, out];
  }
}
if (maddOdd.length) console.log('madd: maddah not explained (' + maddOdd.length + '):', maddOdd.join(' | '));
console.log('madd:', Object.entries(madd).map(([L, v]) => L + ' ' + Object.entries(v).map(([c, x]) => c + ' ' + x[0]).join(', ')).join(' ; '));

/**
 * before: what a noon sakinah, tanween or meem sakinah does before each letter.
 * The rule depends only on the next letter, and the Madani marks agree with it
 * (the noon or meem carries sukun exactly when it is izhar), so a junction whose
 * marks disagree is a special reading and is skipped: the sakt in مَنْ رَاقٍ
 * (75:27). Tanween before hamzat al-wasl is skipped (its nun takes a kasra), and
 * junctions never cross an ayah end, where the reader stops.
 *   before[k] = { rule, noon: [total, ex], tan: [total, ex], meem: [rule, total, ex], mutlaq: [total, ex] }
 *   ex = [[text, ref of its first word, count, index of the noon/tanween/meem cluster], …]
 * mutlaq: ي and و after a noon sakinah inside one word stay clear (ٱلدُّنْيَا).
 */
const NOON_RULE = {};
for (const k of 'ءهعحغخ') NOON_RULE[k] = 'izhar_halqi';
for (const k of 'ينمو') NOON_RULE[k] = 'idghaam_ghunnah';
for (const k of 'لر') NOON_RULE[k] = 'idghaam_no_ghunnah';
for (const k of 'تثجدذزسشصضطظفقك') NOON_RULE[k] = 'ikhfa';
NOON_RULE['ب'] = 'iqlab';
const meemRule = (k) => (k === 'م' ? 'idghaam_shafawi' : k === 'ب' ? 'ikhfa_shafawi' : 'izhar_shafawi');
const VOWELLED = /[ً-ّٓ]/;
const TANWEEN = /[ًٌٍ]/;
const IQLAB_MARK = /[ۭۢ]/;
/** The letter a following cluster starts with, or null (hamzat al-wasl, a madd letter). */
const followKey = (c) => {
  if (!c || c.base === 'ٱ') return null;
  if ('أإءؤئ'.indexOf(c.base) >= 0 || c.marks.indexOf('ٔ') >= 0) return 'ء';
  if (c.base === 'ى') return VOWELLED.test(c.marks) ? 'ي' : null;
  return NOON_RULE[c.base] ? c.base : null;
};
const junctions = { noon: {}, tan: {}, meem: {}, mutlaq: {} };   // kind -> k -> text -> { n, r, ci }
const skipped = [];
const addJ = (kind, k, text, ref, ci) => {
  const byText = junctions[kind][k] || (junctions[kind][k] = new Map());
  const e = byText.get(text) || { n: 0, r: ref, ci };
  e.n++;
  byText.set(text, e);
};
for (const ref of Object.keys(WORDS)) {
  const ws = WORDS[ref];
  const cls = ws.map((w) => R.analyse(w));
  ws.forEach((w, i) => {
    const cl = cls[i];
    const at = ref + ':' + (i + 1);
    cl.forEach((c, j) => {
      if ((c.base !== 'ن' && c.base !== 'م') || VOWELLED.test(c.marks) || /[۟۠]/.test(c.marks)) return;
      const cross = j === cl.length - 1;
      if (cross && i === ws.length - 1) return;
      const k = followKey(cross ? cls[i + 1][0] : cl[j + 1]);
      if (!k) return;
      const text = cross ? w + ' ' + ws[i + 1] : w;
      const rule = c.base === 'م' ? meemRule(k) : (!cross && (k === 'ي' || k === 'و') ? 'izhar_mutlaq' : NOON_RULE[k]);
      if ((c.marks.indexOf('ْ') >= 0) !== rule.startsWith('izhar')) { skipped.push(at + ' ' + text); return; }
      addJ(c.base === 'م' ? 'meem' : rule === 'izhar_mutlaq' ? 'mutlaq' : 'noon', k, text, at, j);
    });
    const tj = cl.findIndex((c) => TANWEEN.test(c.marks));
    if (tj < 0 || i === ws.length - 1) return;
    const k = followKey(cls[i + 1][0]);
    if (!k) return;
    const text = w + ' ' + ws[i + 1];
    if (IQLAB_MARK.test(cl[tj].marks) !== (k === 'ب')) { skipped.push(at + ' ' + text); return; }
    addJ('tan', k, text, at, tj);
  });
}
/**
 * The most frequent examples, at most `within` of them inside one word (heard
 * with the word audio), then two-word junctions that repeat no word already
 * shown; topped up by count when a rare letter runs out of fresh words.
 */
const pickJ = (byText, max, within) => {
  const all = [...(byText || new Map()).entries()].sort((a, b) => b[1].n - a[1].n);
  const out = [], used = new Set(), taken = new Set();
  const take = (e) => {
    out.push([e[0], e[1].r, e[1].n, e[1].ci]);
    taken.add(e[0]);
    e[0].split(' ').forEach((w) => used.add(R.wordKey(w)));
  };
  // One example per stem inside a word (أَنفُسَهُمْ / أَنفُسِهِمْ, عِندَ / عِندَهُۥ): bare letters
  // without a leading و / ف or a pronoun ending.
  const stems = new Set();
  for (const e of all) {
    if (stems.size >= within) break;
    if (e[0].indexOf(' ') >= 0) continue;
    const stem = R.analyse(e[0]).map((c) => c.base).join('').replace(/^[وف](?=...)/, '').replace(/(هما|هم|هن|ها|كم|كن|نا|ه|ك)$/, '');
    if (!stems.has(stem)) { stems.add(stem); take(e); }
  }
  for (const e of all) {
    if (out.length >= max) break;
    if (e[0].indexOf(' ') >= 0 && !e[0].split(' ').some((w) => used.has(R.wordKey(w)))) take(e);
  }
  for (const e of all) {
    if (out.length >= max) break;
    if (!taken.has(e[0]) && e[0].indexOf(' ') >= 0) take(e);
  }
  return out;
};
const totalJ = (byText) => [...(byText || new Map()).values()].reduce((s, e) => s + e.n, 0);
const before = {};
for (const k of keys) {
  if (!NOON_RULE[k]) continue;
  const b = before[k] = {
    rule: NOON_RULE[k],
    noon: [totalJ(junctions.noon[k]), pickJ(junctions.noon[k], 6, 2)],
    tan: [totalJ(junctions.tan[k]), pickJ(junctions.tan[k], 6, 0)],
    meem: [meemRule(k), totalJ(junctions.meem[k]), pickJ(junctions.meem[k], 4, 1)]
  };
  if (junctions.mutlaq[k]) b.mutlaq = [totalJ(junctions.mutlaq[k]), pickJ(junctions.mutlaq[k], 4, 4)];
}
if (skipped.length) console.log('before: skipped (marks disagree with the rule):', skipped.join(' | '));
for (const [x, y] of LETTER_CONFUSABLE) {
  if (!pairs.some((p) => p[0] === x && p[1] === y)) console.log('WARNING: no minimal pairs for', x, y, '(LetterProgress expects an ear test)');
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'core.json'), JSON.stringify({ letters, ayahs: ayahText, pairs, harakat, qalqalah, ra, allah, madd, before }));

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
