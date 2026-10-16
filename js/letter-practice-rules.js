/**
 * Letter practice — which letters a Quranic word actually pronounces.
 *
 * Shared by the Tajweed "Letter practice" view (highlighting) and
 * tools/letter-practice/build.js (counting), so the counts in
 * data/letter-practice/core.json always match what the page colours.
 *
 * A letter is counted only where it is said with its own sound, because the
 * point is makhraj practice:
 *   - silent letters (marked ۟ or ۠) and alif al-wasl ٱ are skipped;
 *   - a bare consonant (no vowel, sukun or shadda) is assimilated into the next
 *     letter in the Madani script (lam shamsiyyah, idgham, ikhfa, iqlab nun),
 *     so it is skipped. Meem is the exception: a bare meem is still said with
 *     the lips (ikhfa / idgham shafawi);
 *   - bare و and ي are madd vowels from al-jawf, not the consonants, so they
 *     are skipped; the madd alif is its own entry (ا, ىٰ and ـٰ);
 *   - ة counts as ت; أ إ ء ؤ ئ and ـٔ count as hamza.
 */
var LETTER_PRACTICE_LETTERS = [
  { key: 'ا', name: 'أَلِف', translit: 'Alif' },
  { key: 'ب', name: 'بَاء', translit: 'Ba' },
  { key: 'ت', name: 'تَاء', translit: 'Ta' },
  { key: 'ث', name: 'ثَاء', translit: 'Tha' },
  { key: 'ج', name: 'جِيم', translit: 'Jim' },
  { key: 'ح', name: 'حَاء', translit: 'Ḥa' },
  { key: 'خ', name: 'خَاء', translit: 'Kha' },
  { key: 'د', name: 'دَال', translit: 'Dal' },
  { key: 'ذ', name: 'ذَال', translit: 'Dhal' },
  { key: 'ر', name: 'رَاء', translit: 'Ra' },
  { key: 'ز', name: 'زَاي', translit: 'Zay' },
  { key: 'س', name: 'سِين', translit: 'Sin' },
  { key: 'ش', name: 'شِين', translit: 'Shin' },
  { key: 'ص', name: 'صَاد', translit: 'Ṣad' },
  { key: 'ض', name: 'ضَاد', translit: 'Ḍad' },
  { key: 'ط', name: 'طَاء', translit: 'Ṭa' },
  { key: 'ظ', name: 'ظَاء', translit: 'Ẓa' },
  { key: 'ع', name: 'عَيْن', translit: "'Ayn" },
  { key: 'غ', name: 'غَيْن', translit: 'Ghayn' },
  { key: 'ف', name: 'فَاء', translit: 'Fa' },
  { key: 'ق', name: 'قَاف', translit: 'Qaf' },
  { key: 'ك', name: 'كَاف', translit: 'Kaf' },
  { key: 'ل', name: 'لَام', translit: 'Lam' },
  { key: 'م', name: 'مِيم', translit: 'Mim' },
  { key: 'ن', name: 'نُون', translit: 'Nun' },
  { key: 'ه', name: 'هَاء', translit: 'Ha' },
  { key: 'و', name: 'وَاو', translit: 'Waw' },
  { key: 'ي', name: 'يَاء', translit: 'Ya' },
  { key: 'ء', name: 'هَمْزَة', translit: 'Hamza' }
];

/**
 * The classical characteristics (sifat) of the letters, as in al-Jazari's
 * Muqaddimah. The first five are opposite pairs, so every letter has exactly
 * one of each; the rest belong only to the letters listed. Hamza and alif are
 * included (alif as the madd letter).
 */
var LETTER_SIFAT = {
  opposites: [
    ['hams', 'فحثهشخصسكت', 'jahr'],
    ['shiddah', 'ءأجدقطبكت', 'rakhawah', 'tawassut', 'لنعمر'],
    ['istila', 'خصضغطقظ', 'istifal'],
    ['itbaq', 'صضطظ', 'infitah'],
    ['idhlaq', 'فرمنلب', 'ismat']
  ],
  single: [
    ['safir', 'صزس'], ['qalqalah', 'قطبجد'], ['leen', 'وي'], ['inhiraf', 'لر'],
    ['takrir', 'ر'], ['tafashshi', 'ش'], ['istitalah', 'ض'], ['ghunnah', 'نم']
  ],
  arabic: {
    hams: 'الهمس', jahr: 'الجهر', shiddah: 'الشدة', tawassut: 'التوسط', rakhawah: 'الرخاوة',
    istila: 'الاستعلاء', istifal: 'الاستفال', itbaq: 'الإطباق', infitah: 'الانفتاح',
    idhlaq: 'الإذلاق', ismat: 'الإصمات', safir: 'الصفير', qalqalah: 'القلقلة', leen: 'اللين',
    inhiraf: 'الانحراف', takrir: 'التكرير', tafashshi: 'التفشي', istitalah: 'الاستطالة', ghunnah: 'الغنة'
  },
  names: {
    hams: 'Hams', jahr: 'Jahr', shiddah: 'Shiddah', tawassut: 'Tawassut', rakhawah: 'Rakhawah',
    istila: "Isti'la", istifal: 'Istifal', itbaq: 'Itbaq', infitah: 'Infitah', idhlaq: 'Idhlaq',
    ismat: 'Ismat', safir: 'Safir', qalqalah: 'Qalqalah', leen: 'Leen', inhiraf: 'Inhiraf',
    takrir: 'Takrir', tafashshi: 'Tafashshi', istitalah: 'Istitalah', ghunnah: 'Ghunnah'
  },
  /** Sifat keys of one letter, opposites first. */
  of: function (key) {
    var k = key === 'ء' ? 'ء' : key, out = [];
    this.opposites.forEach(function (o) {
      if (o[1].indexOf(k) >= 0) out.push(o[0]);
      else if (o[4] && o[4].indexOf(k) >= 0) out.push(o[3]);
      else out.push(o[2]);
    });
    this.single.forEach(function (o) { if (o[1].indexOf(k) >= 0) out.push(o[0]); });
    return out;
  },
  /** 'heavy' (isti'la letters), 'rule' (ر, ل, ا change with context) or 'light'. */
  weight: function (key) {
    if ('خصضغطقظ'.indexOf(key) >= 0) return 'heavy';
    if ('رلا'.indexOf(key) >= 0) return 'rule';
    return 'light';
  }
};

/**
 * Letters non-Arab learners commonly confuse (Bengali speakers in particular
 * read ج ز ذ ظ alike). Minimal pairs for these come from the corpus in
 * tools/letter-practice/build.js.
 */
var LETTER_CONFUSABLE = [['ء', 'ع'], ['ه', 'ح'], ['ح', 'خ'], ['ك', 'ق'], ['ت', 'ط'], ['د', 'ض'], ['س', 'ص'],
  ['ث', 'س'], ['ش', 'س'], ['ذ', 'ز'], ['ز', 'ظ'], ['ذ', 'ظ'], ['ض', 'ظ'], ['ج', 'ز'], ['ع', 'غ']];

var LetterPracticeRules = (function () {
  var MARK = /[\u064B-\u065F\u0670\u06D6-\u06ED]/;
  var VOICED = /[\u064B-\u0653\u0654]/;        // tanween, harakat, shadda, sukun, maddah, hamza above
  var SILENT = /[\u06DF\u06E0]/;
  var HAMZA = 'أإءؤئ';
  var PLAIN = 'بتثجحخدذرزسشصضطظعغفقكلنه';

  /** Split a word into clusters: one base character plus its marks. */
  function clusters(word) {
    var out = [];
    for (var i = 0; i < word.length; i++) {
      var ch = word[i];
      if (MARK.test(ch) && out.length) { out[out.length - 1].marks += ch; out[out.length - 1].text += ch; continue; }
      out.push({ base: ch, marks: '', text: ch });
    }
    return out;
  }

  /** The letter key a cluster is pronounced as, or '' when it is silent/assimilated. */
  function keyOf(c) {
    var b = c.base, m = c.marks;
    if (SILENT.test(m) || b === 'ٱ') return '';
    if (m.indexOf('\u0654') >= 0 || HAMZA.indexOf(b) >= 0) return 'ء';
    var voiced = VOICED.test(m);
    if (b === 'ا' || b === 'آ') return 'ا';
    if (b === '\u0640') return m.indexOf('\u0670') >= 0 ? 'ا' : '';
    // The maddah on و / ي only lengthens the madd vowel (فِىٓ), it does not make a consonant.
    var consonant = VOICED.test(m.replace('\u0653', ''));
    if (b === 'ى') return m.indexOf('\u0670') >= 0 ? 'ا' : (consonant ? 'ي' : '');
    if (b === 'و' || b === 'ي') return consonant ? b : '';
    if (b === 'ة') return 'ت';
    if (b === 'م') return 'م';
    if (PLAIN.indexOf(b) >= 0) return voiced ? b : '';
    return '';
  }

  /** Clusters of a word tagged with their pronounced letter key. */
  function analyse(word) {
    var cl = clusters(word);
    cl.forEach(function (c, i) {
      c.key = keyOf(c);
      // The alif written after tanween fath (عَظِيمًا) is said only when stopping.
      if (c.key === 'ا' && !c.marks && i && cl[i - 1].marks.indexOf('\u064B') >= 0) c.key = '';
    });
    return cl;
  }

  function count(word, key) {
    return analyse(word).filter(function (c) { return c.key === key; }).length;
  }

  /**
   * Grouping key for "the same word": the spelling without its case ending, so
   * ٱللَّهِ / ٱللَّهُ / ٱللَّهَ and عَظِيمٌ / عَظِيمًا are one word while مِن
   * (from) and مَن (who) stay apart.
   */
  function wordKey(word) {
    var cl = clusters(word);
    var last = cl.length - 1;
    if (last > 0 && cl[last].base === 'ا' && !cl[last].marks) last--;
    cl[last] = { text: cl[last].base };
    return cl.map(function (c) { return c.text; }).join('');
  }

  /** data/letter-practice/core.json, fetched once and shared by every view. */
  var dataP = null;
  function load() {
    if (!dataP) {
      dataP = fetch('data/letter-practice/core.json')
        .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
        .catch(function (e) { dataP = null; throw e; });
    }
    return dataP;
  }

  /**
   * Every occurrence of a word-list entry: same wordKey with the letter
   * pronounced (the rule the ×N count was built with, so the list matches it),
   * or with `exact` the identical spelling (the vowel and ra drills count spellings;
   * an exact two-word phrase, from the noon/meem junctions, marks both words).
   * Resolves to { n, refs: ['s:a', …] in mushaf order, each ayah once,
   * marks: { 's:a': [1-based word positions] } } — the shape ayahTimeline takes.
   */
  function occurrences(word, key, exact) {
    var target = wordKey(word);
    var parts = word.split(' ');
    return QuranData.getQuranWords().then(function (all) {
      var refs = [], marks = {}, n = 0;
      Object.keys(all).forEach(function (ref) {
        var ws = all[ref];
        ws.forEach(function (w, i) {
          if (parts.length > 1) {
            if (!parts.every(function (p, j) { return ws[i + j] === p; })) return;
          } else if (exact ? w !== word : (wordKey(w) !== target || !count(w, key))) return;
          if (!marks[ref]) { marks[ref] = []; refs.push(ref); }
          parts.forEach(function (p, j) { marks[ref].push(i + 1 + j); });
          n++;
        });
      });
      return { n: n, refs: refs, marks: marks };
    });
  }

  return { analyse: analyse, count: count, wordKey: wordKey, load: load, occurrences: occurrences };
})();

/**
 * What a student has practised, per letter. Shared by Tajweed → Letter practice,
 * Kids letters and the Learn hub card. localStorage 'letterProgress':
 *   { key: { h: [ids of up to 10 different words/ayahs heard], q: best ear-test %, m: 1 } }
 * A letter is mastered when every step that applies to it is done: 10 different
 * words heard, the ear test at 80% or more (only letters with sound-alike pairs,
 * i.e. those in LETTER_CONFUSABLE), and the student's own "I can say it" tick.
 */
var LetterProgress = (function () {
  var STORE = 'letterProgress', HEAR = 10, PASS = 80;

  function all() {
    try {
      var v = JSON.parse(localStorage.getItem(STORE) || '{}');
      return v && typeof v === 'object' ? v : {};
    } catch (e) { return {}; }
  }
  /** Apply fn to the letter's entry and save, unless fn returns false (nothing changed). */
  function update(key, fn) {
    var v = all(), e = v[key] || {};
    if (fn(e) === false) return false;
    v[key] = e;
    try { localStorage.setItem(STORE, JSON.stringify(v)); } catch (err) { /* ignore */ }
    return true;
  }
  function hasQuiz(key) {
    return LETTER_CONFUSABLE.some(function (p) { return p[0] === key || p[1] === key; });
  }

  /** { heard, hear, quiz (best % or null), hasQuiz, pass, marked, done, total, started, mastered } */
  function status(key, store) {
    var e = (store || all())[key] || {};
    var heard = Math.min((e.h || []).length, HEAR);
    var quiz = typeof e.q === 'number' ? e.q : null;
    var q = hasQuiz(key);
    var steps = [heard >= HEAR, !!e.m];
    if (q) steps.push(quiz !== null && quiz >= PASS);
    var done = steps.filter(Boolean).length;
    return {
      heard: heard, hear: HEAR, quiz: quiz, hasQuiz: q, pass: PASS, marked: !!e.m,
      done: done, total: steps.length, started: heard > 0 || quiz !== null || !!e.m, mastered: done === steps.length
    };
  }

  return {
    status: status,
    /** Record one word or ayah heard (by its audio URL). True when it was new. */
    heard: function (key, id) {
      return update(key, function (e) {
        var h = e.h || (e.h = []);
        if (h.length >= HEAR || h.indexOf(id) >= 0) return false;
        h.push(id);
      });
    },
    /** Keep the best ear-test score. True when it beat the previous best. */
    quiz: function (key, score, total) {
      if (!total) return false;
      var pct = Math.round(score * 100 / total);
      return update(key, function (e) {
        if (typeof e.q === 'number' && e.q >= pct) return false;
        e.q = pct;
      });
    },
    toggleMark: function (key) {
      update(key, function (e) { if (e.m) delete e.m; else e.m = 1; });
    },
    /** { mastered, started, total } over all the letters. */
    summary: function () {
      var store = all(), out = { mastered: 0, started: 0, total: LETTER_PRACTICE_LETTERS.length };
      LETTER_PRACTICE_LETTERS.forEach(function (l) {
        var s = status(l.key, store);
        if (s.mastered) out.mastered++;
        if (s.started) out.started++;
      });
      return out;
    }
  };
})();

if (typeof module !== 'undefined') module.exports = { LETTER_PRACTICE_LETTERS: LETTER_PRACTICE_LETTERS, LETTER_SIFAT: LETTER_SIFAT, LETTER_CONFUSABLE: LETTER_CONFUSABLE, LetterPracticeRules: LetterPracticeRules, LetterProgress: LetterProgress };
