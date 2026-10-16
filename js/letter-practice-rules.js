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

  return { analyse: analyse, count: count, wordKey: wordKey };
})();

if (typeof module !== 'undefined') module.exports = { LETTER_PRACTICE_LETTERS: LETTER_PRACTICE_LETTERS, LetterPracticeRules: LetterPracticeRules };
