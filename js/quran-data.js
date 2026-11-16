/**
 * Quran Data Service
 * Fetches verses (with word-by-word translations) from the quran.com v4 API,
 * and morphology/root data from local static JSON (Quranic Arabic Corpus).
 */

const QuranData = {
  apiBase: 'https://api.quran.com/api/v4',
  wordAudioBase: 'https://audio.qurancdn.com/',

  // The app is self-contained. Essential legacy data (tajweed rule ranges,
  // i'rab morphology tables) is bundled in-project under data/; large media
  // (mushaf page scans, i'rab dependency-graph images) load cross-origin from
  // the original site as plain <img>, which needs no CORS.
  legacyImgBase: 'https://learn-quran-bd.web.app',   // external images only
  // Bundled data is always present → legacy features are always available.
  async legacyAvailable() { return true; },

  // Default verse-translation resource per UI language (quran.com resource IDs)
  TRANSLATION_IDS: {
    en: 20,   // Saheeh International (id 131 was deprecated by quran.com → returned no text)
    bn: 161,  // Taisirul Quran
    fr: 31,   // Muhammad Hamidullah
    id: 33,   // Indonesian Islamic Affairs Ministry
    ur: 234,  // Fatah Muhammad Jalandhari
    tr: 77,   // Diyanet (API fallback only; the bundled data/translations/tr.json is Diyanet Vakfi, per ayah)
    ar: null, // Arabic UI: no translation needed
    es: 83,   // Sheikh Isa Garcia (Spanish)
    ru: 45,   // Elmir Kuliev (Russian)
    fa: 29,   // Hussein Taji Kal Dari (Persian)
    hi: 122,  // Maulana Azizul Haque al-Umari (Hindi)
    de: 27,   // Frank Bubenheim and Nadeem (German)
    ms: 39,   // Abdullah Muhammad Basmeih (Malay)
    zh: 56,   // Ma Jian (Chinese, Simplified)
    ja: 35    // Ryoichi Mita (Japanese)
  },

  // Languages with real word-by-word translations bundled offline (data/wbw/<lang>.json).
  // Verified genuine (non-English) glosses: en, bn, ur, id, tr, fa, hi.
  // All other UI languages reuse en.json glosses (their ayah translation is still native).
  // ja/zh were dropped 2026-11-16: their files were byte copies of en.json and quran.com has no ja/zh word glosses.
  WBW_LANGS: ['en', 'bn', 'ur', 'id', 'tr', 'fa', 'hi'],

  _morphCache: {},
  _rootsPromise: null,
  _verseCache: {},
  _pageCache: {},

  wbwLang(lang) {
    // Optional user override from the settings drawer
    const override = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('wbwLang') : null;
    if (override && this.WBW_LANGS.includes(override)) return override;
    return this.WBW_LANGS.includes(lang) ? lang : 'en';
  },

  translationId(lang) {
    const override = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('trId_' + lang) : null;
    if (override) return override;
    // A language present in the map with a null id (e.g. Arabic UI) means "no
    // translation line"; only genuinely-missing languages fall back to English.
    if (lang in this.TRANSLATION_IDS) return this.TRANSLATION_IDS[lang];
    return this.TRANSLATION_IDS.en;
  },

  /**
   * Fetch a contiguous range of ayahs from one surah, with words + translation.
   * @returns {Promise<Array>} normalized verse objects
   */
  async fetchRange(surah, startAyah, endAyah, lang) {
    const variant = `${this.translationId(lang)}:${this.wbwLang(lang)}`;
    const cacheKey = `${surah}:${startAyah}-${endAyah}:${lang}:${variant}`;
    if (this._verseCache[cacheKey]) return this._verseCache[cacheKey];

    // Offline-first: build from bundled per-language data. Always works, no network,
    // and never silently shows English for a language whose data we bundle. Falls
    // through to the quran.com API only when a required local file/range is missing.
    const local = await this.buildLocalRange(surah, startAyah, endAyah, lang);
    if (local) { this._verseCache[cacheKey] = local; return local; }

    const perPage = 50;
    const firstPage = Math.floor((startAyah - 1) / perPage) + 1;
    const lastPage = Math.floor((endAyah - 1) / perPage) + 1;
    const pages = [];
    for (let p = firstPage; p <= lastPage; p++) pages.push(p);

    const trId = this.translationId(lang);
    const params =
      `words=true&language=${this.wbwLang(lang)}` +
      `&word_fields=text_uthmani` +
      (trId ? `&translations=${trId}` : '') +   // Arabic UI: no translation line
      `&fields=text_uthmani&per_page=${perPage}`;

    // Page-level cache: many small ranges in the same surah (topic/dua/story
    // collections) share 50-verse API pages, so fetch each page only once.
    const results = await Promise.all(pages.map(p => {
      const pageKey = `${surah}:${p}:${lang}:${trId}:${this.wbwLang(lang)}`;
      if (!this._pageCache[pageKey]) {
        this._pageCache[pageKey] = fetch(`${this.apiBase}/verses/by_chapter/${surah}?${params}&page=${p}`)
          .then(r => {
            if (!r.ok) throw new Error(`API request failed (${r.status})`);
            return r.json();
          })
          .catch(err => { delete this._pageCache[pageKey]; throw err; });
      }
      return this._pageCache[pageKey];
    }));

    const verses = results
      .flatMap(r => r.verses || [])
      .filter(v => v.verse_number >= startAyah && v.verse_number <= endAyah)
      .map(v => this.normalizeVerse(surah, v));

    this._verseCache[cacheKey] = verses;
    return verses;
  },

  normalizeVerse(surah, v) {
    const surahInfo = getSurahByNumber(surah);
    return {
      surah: surah,
      ayah: v.verse_number,
      key: `${surah}:${v.verse_number}`,
      arabic: v.text_uthmani,
      translation: this.stripFootnotes(v.translations?.[0]?.text || ''),
      juz: v.juz_number || 0,
      page: v.page_number || 0,
      // Not frozen to English: resolved in the UI language each time it is
      // read. New renderers should call getSurahName(surah, lang) directly.
      get surahName() { return verseSurahName(surah); },
      surahArabicName: surahInfo?.arabicName || '',
      words: (v.words || [])
        .filter(w => w.char_type_name === 'word')
        .map((w, i) => ({
          position: w.position,
          arabic: w.text_uthmani || w.text,
          translit: w.transliteration?.text || '',
          meaning: w.translation?.text || '',
          // quran.com's per-word `audio_url` is occasionally misnumbered: for a
          // handful of ayahs it skips a file index, leaving later words pointing
          // at the wrong clip and the LAST word pointing at a non-existent .mp3
          // (e.g. 17:69 → ...023.mp3, HTTP 404, so it never plays). The CDN files
          // are always numbered sequentially per real word, so derive the URL
          // from the running word index instead of trusting the API's value.
          audio: this.wordAudioUrl(surah, v.verse_number, i + 1)
        }))
    };
  },

  /** Sequential per-word audio URL on the qurancdn CDN. `idx` is 1-based among
   *  the verse's real words (matches the CDN's file numbering). */
  wordAudioUrl(surah, ayah, idx) {
    const p = n => String(n).padStart(3, '0');
    return `${this.wordAudioBase}wbw/${p(surah)}_${p(ayah)}_${p(idx)}.mp3`;
  },

  // ---- Surah info banner (shown atop a loaded surah in Reading / Word-by-Word) --

  _chapterInfoCache: {},

  /**
   * Background/description of a surah from quran.com (Name, Period of Revelation,
   * Theme…). Returned in the requested language where quran.com has it, otherwise
   * English. Cached per surah:lang; failures evict so a later attempt can retry.
   */
  async getChapterInfo(surah, lang) {
    const l = (lang || 'en');
    const key = `${surah}:${l}`;
    if (!this._chapterInfoCache[key]) {
      this._chapterInfoCache[key] = fetch(`${this.apiBase}/chapters/${surah}/info?language=${l}`)
        .then(r => { if (!r.ok) throw new Error(`chapter info ${r.status}`); return r.json(); })
        .then(d => d.chapter_info || {})
        .catch(err => { delete this._chapterInfoCache[key]; throw err; });
    }
    return this._chapterInfoCache[key];
  },

  /** Defensive sanitizer for the quran.com chapter HTML: drop script/style, keep
   *  a small structural whitelist and strip ALL attributes (removes links/on*). */
  sanitizeChapterHtml(html) {
    if (!html) return '';
    const allow = new Set(['h2', 'h3', 'h4', 'p', 'br', 'em', 'strong', 'b', 'i', 'ul', 'ol', 'li', 'blockquote']);
    return String(html)
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '')
      .replace(/<(\/?)([a-zA-Z0-9]+)\b[^>]*>/g, (m, slash, tag) =>
        allow.has(tag.toLowerCase()) ? `<${slash}${tag.toLowerCase()}>` : '');
  },

  /**
   * Offline, fully-localized info header for a surah: Arabic name + localized
   * name + Meccan/Medinan + verse count, with a collapsible "About this surah"
   * (lazy-filled from getChapterInfo). Works in every UI language.
   */
  // Languages quran.com's chapter-info endpoint has NATIVELY (others fall back to
  // English, so we don't show a foreign-language wall — just the localized header).
  CHAPTER_INFO_LANGS: ['en', 'ur', 'id', 'ml', 'ta'],

  surahInfoBannerHtml(surah, lang) {
    if (typeof getSurahByNumber !== 'function') return '';
    const info = getSurahByNumber(surah);
    if (!info) return '';
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const name = (typeof getSurahName === 'function') ? getSurahName(surah, lang) : (info.names && info.names.en) || '';
    const place = info.revelationType === 'Medinan' ? t('medinan', lang) : t('meccan', lang);
    const chip = txt => `<span class="px-2 py-0.5 rounded-full bg-white/60 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300">${txt}</span>`;
    // Only offer the "About this surah" background when quran.com has it in this
    // language; otherwise show the (fully localized) header alone.
    const hasBg = this.CHAPTER_INFO_LANGS.includes(lang);
    const about = hasBg ? `
        <button data-surah-about="${surah}" class="mt-3 text-sm font-medium text-primary dark:text-blue-400 hover:underline">${t('about_surah', lang)} <span class="surah-about-caret">▾</span></button>
        <div class="surah-about-body hidden mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300 space-y-2
                    [&_h2]:text-base [&_h2]:font-bold [&_h2]:mt-3 [&_h3]:font-semibold [&_p]:mt-1" dir="auto"></div>` : '';
    return `
      <div class="surah-info-banner bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-blue-900/30 dark:to-emerald-900/20
                  border border-primary/20 dark:border-blue-800 rounded-lg p-5 mb-2">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="ayah-arabic !text-3xl !mb-0 !pb-0 !border-b-0 !leading-tight text-primary dark:text-blue-300" dir="rtl">${esc(info.arabicName)}</span>
          <div class="min-w-0">
            <h2 class="text-xl font-bold" dir="auto">${surah}. ${esc(name)}</h2>
            <div class="flex flex-wrap gap-2 mt-1 text-xs">
              ${chip(place)}${chip(`${info.ayahCount} ${t('verses', lang)}`)}
            </div>
          </div>
        </div>${about}
      </div>`;
  },

  stripFootnotes(html) {
    return html.replace(/<sup[^>]*>.*?<\/sup>/g, '').replace(/<[^>]+>/g, '');
  },

  /**
   * Morphology for one surah: { "ayahNumber": [ word: [segments...] ] }
   * Segment: { t: text, g: tag, r?: root, l?: lemma, f?: [features] }
   */
  async getMorphology(surah) {
    if (!this._morphCache[surah]) {
      const id = String(surah).padStart(3, '0');
      this._morphCache[surah] = fetch(`data/morphology/${id}.json`)
        .then(r => {
          if (!r.ok) throw new Error('Morphology data not found');
          return r.json();
        })
        .catch(err => { delete this._morphCache[surah]; throw err; });
    }
    return this._morphCache[surah];
  },

  /** Diacritized per-verse words: { "s:a": ["ٱلْحَمْدُ", ...] } (~1.5MB, loaded once).
   * Keeps tashkeel so letter+haraka (fatha/kasra/damma) sequences can be matched. */
  _quranWordsPromise: null,
  async getQuranWords() {
    if (!this._quranWordsPromise) {
      this._quranWordsPromise = fetch('data/quran-words.json')
        .then(r => { if (!r.ok) throw new Error('quran-words not found'); return r.json(); })
        .catch(err => { this._quranWordsPromise = null; throw err; });
    }
    return this._quranWordsPromise;
  },

  /**
   * Find every distinct Quran word CONTAINING the diacritized sequence `seq`
   * (e.g. "تَ" = ta+fatha). Returns { total, verses, forms:[{word, count, first}] }
   * sorted by frequency desc. Used by the kids "words with this sound" finder.
   */
  async findWordsContaining(seq) {
    const data = await this.getQuranWords();
    const forms = new Map(); // word -> { count, first: "s:a" }
    let total = 0;
    const verses = new Set();
    for (const vk in data) {
      for (const w of data[vk]) {
        if (w.includes(seq)) {
          total++; verses.add(vk);
          const rec = forms.get(w);
          if (rec) rec.count++;
          else forms.set(w, { count: 1, first: vk });
        }
      }
    }
    const list = [...forms.entries()]
      .map(([word, r]) => ({ word, count: r.count, first: r.first }))
      .sort((a, b) => b.count - a.count);
    return { total, verses: verses.size, forms: list };
  },

  // ---- Offline per-language data (bundled static JSON; see scripts/gen_offline_lang.py) ----
  // Language-neutral base: { "s:a": { t:uthmani, j:juz, p:page, tr:[translit,...] } }
  _verseBaseP: null,
  getVerseBase() {
    if (!this._verseBaseP) {
      this._verseBaseP = fetch('data/verse-base.json')
        .then(r => r.ok ? r.json() : null).catch(() => null);
    }
    return this._verseBaseP;
  },
  // Per-language ayah translations: { "s:a": "translation" }
  _localTrP: {},
  getLocalTranslations(lang) {
    if (!(lang in this._localTrP)) {
      /* `{}` is truthy: data/translations/ar.json is deliberately empty, so an
       * emptiness check here keeps every consumer's `|| fallback` alive. */
      this._localTrP[lang] = fetch(`data/translations/${lang}.json`)
        .then(r => r.ok ? r.json() : null)
        .then(d => (d && typeof d === 'object' && Object.keys(d).length ? d : null))
        .catch(() => null);
    }
    return this._localTrP[lang];
  },
  // Per-language word glosses aligned to quran-words.json: { "s:a": ["w1",...] }
  _localWbwP: {},
  getLocalWbw(wl) {
    if (!(wl in this._localWbwP)) {
      this._localWbwP[wl] = fetch(`data/wbw/${wl}.json`)
        .then(r => r.ok ? r.json() : null).catch(() => null);
    }
    return this._localWbwP[wl];
  },

  /**
   * Build a verse range entirely from bundled offline data (no network), so
   * word-by-word + translation always render in the selected language. Returns
   * null if any required piece is missing, so fetchRange falls back to the API.
   */
  async buildLocalRange(surah, startAyah, endAyah, lang) {
    try {
      const trId = this.translationId(lang);          // null for Arabic UI (no translation line)
      // A reader-chosen translation source (settings drawer) is not in the bundled
      // file; returning null sends fetchRange to the API, which honours the id.
      // Without this the override was saved but the text never changed.
      if (trId && (lang in this.TRANSLATION_IDS) && String(trId) !== String(this.TRANSLATION_IDS[lang])) return null;
      const wbwLang = this.wbwLang(lang);
      const [base, words, translations, wbw] = await Promise.all([
        this.getVerseBase(),
        this.getQuranWords(),
        trId ? this.getLocalTranslations(lang) : Promise.resolve({}),
        this.getLocalWbw(wbwLang)
      ]);
      // Essentials + (translation when the UI language expects one) + glosses must all be present.
      if (!base || !words || !wbw) return null;
      if (trId && !translations) return null;
      const surahInfo = getSurahByNumber(surah);
      const out = [];
      for (let a = startAyah; a <= endAyah; a++) {
        const key = `${surah}:${a}`;
        const b = base[key];
        const wArr = words[key];
        if (!b || !wArr) return null;                 // gap → let the API handle this range
        const tr = b.tr || [];
        const glosses = wbw[key] || [];
        out.push({
          surah, ayah: a, key,
          arabic: b.t || wArr.join(' '),
          translation: (translations && translations[key]) || '',
          juz: b.j || 0,
          page: b.p || 0,
          get surahName() { return verseSurahName(surah); },
          surahArabicName: surahInfo?.arabicName || '',
          words: wArr.map((ar, i) => ({
            position: i + 1,
            arabic: ar,
            translit: tr[i] || '',
            meaning: glosses[i] || '',
            audio: this.wordAudioUrl(surah, a, i + 1)
          }))
        });
      }
      return out;
    } catch (e) {
      return null;
    }
  },

  /** Exact-word index: { normalizedWord: ["surah:ayah:word", ...] } (~1MB, loaded once) */
  _wordIndexPromise: null,
  async getWordIndex() {
    if (!this._wordIndexPromise) {
      this._wordIndexPromise = fetch('data/word-index.json')
        .then(r => {
          if (!r.ok) throw new Error('Word index not found');
          return r.json();
        })
        .catch(err => { this._wordIndexPromise = null; throw err; });
    }
    return this._wordIndexPromise;
  },

  /** Normalization matching the word-index build: strip marks, unify alef forms */
  normalizeWord(text) {
    return text
      .replace(/[ً-ٰٟۖ-ۭ࣓-ࣿـ]/g, '')
      .replace(/[آأإٱ]/g, 'ا');
  },

  /** Root index: { root: ["surah:ayah:word", ...] } (~520KB, loaded once) */
  async getRoots() {
    if (!this._rootsPromise) {
      this._rootsPromise = fetch('data/roots.json')
        .then(r => {
          if (!r.ok) throw new Error('Root index not found');
          return r.json();
        })
        .catch(err => { this._rootsPromise = null; throw err; });
    }
    return this._rootsPromise;
  }
};

/**
 * Surah name for a verse object, in the current UI language. Verse objects are
 * cached across language switches, so the name is looked up when read rather
 * than stored (it used to be frozen to the English name).
 */
function verseSurahName(surah) {
  let lang = 'en';
  try {
    if (typeof appSettings !== 'undefined' && appSettings) lang = appSettings.get('language') || 'en';
  } catch (e) { /* English */ }
  if (typeof getSurahName === 'function') return getSurahName(surah, lang) || '';
  const info = (typeof getSurahByNumber === 'function') ? getSurahByNumber(surah) : null;
  return (info && info.names && info.names.en) || '';
}

/**
 * Human-readable labels for Quranic Arabic Corpus morphology tags.
 */
const GRAMMAR_LABELS = {
  // Core parts of speech (segment tag "g" or feature)
  N: 'Noun', PN: 'Proper noun', ADJ: 'Adjective', V: 'Verb', P: 'Particle',
  PRON: 'Pronoun', DEM: 'Demonstrative', REL: 'Relative pronoun',
  T: 'Time adverb', LOC: 'Location adverb', NUM: 'Number',

  // Particles
  DET: 'Definite article (ال)', PREF: 'Prefix', CONJ: 'Conjunction',
  SUB: 'Subordinating conjunction', NEG: 'Negative particle',
  INTG: 'Interrogative', VOC: 'Vocative', EMPH: 'Emphatic',
  COND: 'Conditional', ACC: 'Accusative particle', AMD: 'Amendment particle',
  ANS: 'Answer particle', AVR: 'Aversion particle', CAUS: 'Causative',
  CERT: 'Certainty particle', CIRC: 'Circumstantial', COM: 'Comitative',
  EXH: 'Exhortation', EXL: 'Explanation', EXP: 'Exceptive', FUT: 'Future',
  INC: 'Inceptive', INT: 'Interpretation', PREV: 'Preventive',
  PRO: 'Prohibition', PRP: 'Purpose', REM: 'Resumption', RES: 'Restriction',
  RET: 'Retraction', RSLT: 'Result', SUP: 'Supplemental', SUR: 'Surprise',
  INL: 'Quranic initials', EQ: 'Equalization particle', IMPN: 'Imperative verbal noun',

  // Derived nominals
  ACT_PCPL: 'Active participle', PASS_PCPL: 'Passive participle', VN: 'Verbal noun',

  // Verb aspect / voice / mood
  PERF: 'Perfect (past)', IMPF: 'Imperfect (present)', IMPV: 'Imperative',
  PASS: 'Passive voice',
  'MOOD:IND': 'Indicative', 'MOOD:SUBJ': 'Subjunctive', 'MOOD:JUS': 'Jussive',

  // Case
  NOM: 'Nominative (مرفوع)', GEN: 'Genitive (مجرور)',
  // ACC also means accusative case on nominals — handled contextually below

  // Special
  DIST: 'Distal', ATT: 'Attention particle', OBJ: 'Object'
};

/**
 * Segment display colors, corpus.quran.com-style (by grammatical type).
 */
function segmentColor(seg) {
  const f = seg.f || [];
  if (f.includes('PRON')) return 'text-purple-600 dark:text-purple-400';
  if (f.includes('PN')) return 'text-indigo-600 dark:text-indigo-400';
  if (seg.g === 'V') return 'text-red-600 dark:text-red-400';
  if (seg.g === 'N') return 'text-sky-700 dark:text-sky-400';
  if (seg.g === 'P') return 'text-emerald-600 dark:text-emerald-400';
  return 'text-gray-700 dark:text-gray-200';
}

/* Grammar text helpers. Every label and description token is a t() key
 * (gram_*, gram_d_*, gram_tpl_*); the English constants here are only the
 * fallback for when translations.js is not loaded (node tests). */
function __gramLang(lang) {
  if (lang) return lang;
  try {
    if (typeof appSettings !== 'undefined' && appSettings) return appSettings.get('language') || 'en';
  } catch (e) { /* fall through */ }
  return 'en';
}

/** t() that reports a miss as the given English instead of the raw key. */
function __gramT(key, lang, fallback) {
  if (typeof t !== 'function') return fallback;
  const v = t(key, lang);
  return (v && v !== key) ? v : fallback;
}

/** English for the gram_d_* description tokens (fallback only). */
const __GRAM_D_EN = {
  p1: '1st person', p2: '2nd person', p3: '3rd person', masc: 'masculine', fem: 'feminine',
  sing: 'singular', dual: 'dual', plur: 'plural', nom: 'nominative', acc: 'accusative', gen: 'genitive',
  passive: 'passive', perfect: 'perfect', imperfect: 'imperfect', imperative: 'imperative',
  mood_ind: 'indicative mood', mood_subj: 'subjunctive mood', mood_jus: 'jussive mood',
  noun: 'noun', proper_noun: 'proper noun', adjective: 'adjective', act_pcpl: 'active participle',
  pass_pcpl: 'passive participle', vn: 'verbal noun', pronoun: 'pronoun',
  attached_pronoun: 'attached pronoun', personal_pronoun: 'personal pronoun',
  demonstrative: 'demonstrative pronoun', relative: 'relative pronoun',
  det: 'prefixed determiner ال (the)', preposition: 'preposition', particle: 'particle'
};
function __gramD(token, lang) {
  return __gramT('gram_d_' + token, lang, __GRAM_D_EN[token] || token);
}

/** Join slots in English order when the templates are unavailable. */
function __gramJoin(parts) { return parts.filter(Boolean).join(' '); }

/** Template fill that drops empty slots; plain English join as the fallback. */
function __gramTpl(key, lang, vars, fallback) {
  if (typeof tCompose !== 'function' || typeof t !== 'function' || t(key, lang) === key) return fallback;
  try { return tCompose(key, lang, vars); } catch (e) { return fallback; }
}

/** First-strong isolation for RTL UIs (FSI … PDI): unlike <bdi>, it survives
 *  callers that escape the result or set it as textContent. */
function __gramIsolate(text, lang) {
  if (!text) return text;
  const rtl = (typeof isRTL === 'function') ? isRTL(lang) : ['ar', 'ur', 'fa'].includes(lang);
  return rtl ? '⁨' + text + '⁩' : text;
}

/** t() key for a GRAMMAR_LABELS tag. */
function __gramLabelKey(tag, segTag) {
  if (tag === 'ACC' && segTag !== 'P') return 'gram_ACC_case';
  if (tag.startsWith('MOOD:')) return 'gram_MOOD_' + tag.slice(5);
  return 'gram_' + tag;
}

/** Person / gender / number ("3MS", "FD", "P") as words, or ''. */
function __gramPgn(feat, lang) {
  const m = /^([123])?(M|F)?(S|D|P)?$/.exec(feat || '');
  if (!m || !(m[1] || m[2] || m[3])) return '';
  const person = m[1] ? __gramD('p' + m[1], lang) : '';
  const gender = m[2] ? __gramD(m[2] === 'M' ? 'masc' : 'fem', lang) : '';
  const number = m[3] ? __gramD({ S: 'sing', D: 'dual', P: 'plur' }[m[3]], lang) : '';
  return __gramTpl('gram_tpl_pgn', lang, { person, gender, number }, __gramJoin([person, gender, number]));
}

/**
 * Build a corpus.quran.com-style description sentence for one segment,
 * e.g. "prefixed preposition", "genitive masculine noun",
 *      "3rd person masculine singular perfect verb (form IV)".
 * `lang` defaults to the UI language; the result is isolated for RTL UIs.
 */
function corpusDescribe(seg, lang) {
  lang = __gramLang(lang);
  return __gramIsolate(__corpusDescribeText(seg || {}, lang), lang);
}

function __corpusDescribeText(seg, lang) {
  const f = (seg.f || []).filter(Boolean);
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  // On a preposition (segTag P) the "P" feature is the part of speech, not "plural".
  const pgn = f.find(x => /^[123]?(M|F)?(S|D|P)?$/.test(x) && x.length > 0 && !(x === 'P' && seg.g === 'P'));
  const pgnText = pgn ? __gramPgn(pgn, lang) : '';

  if (seg.g === 'V') {
    const voice = f.includes('PASS') ? __gramD('passive', lang) : '';
    const aspect = __gramD(f.includes('IMPV') ? 'imperative' : f.includes('IMPF') ? 'imperfect' : 'perfect', lang);
    const vf = f.find(x => x.startsWith('VF:'));
    const vfn = vf ? parseInt(vf.slice(3), 10) : 0;
    const roman = vfn > 1 ? (ROMAN[vfn - 1] || String(vfn)) : '';
    const form = roman
      ? (typeof tFill === 'function' && typeof t === 'function' && t('gram_d_form', lang) !== 'gram_d_form'
        ? tFill('gram_d_form', lang, { n: roman }) : `(form ${roman})`)
      : '';
    const verb = __gramTpl('gram_tpl_verb', lang, { pgn: pgnText, voice, aspect, form },
      __gramJoin([pgnText, voice, aspect, 'verb', form]));
    const mood = f.find(x => x.startsWith('MOOD:'));
    if (!mood) return verb;
    const moodKey = { 'MOOD:IND': 'mood_ind', 'MOOD:SUBJ': 'mood_subj', 'MOOD:JUS': 'mood_jus' }[mood];
    const moodText = moodKey ? __gramD(moodKey, lang) : mood.slice(5).toLowerCase() + ' mood';
    return __gramTpl('gram_tpl_verb_mood', lang, { verb, mood: moodText }, `${verb}, ${moodText}`);
  }

  // Pronouns carry segTag N in the corpus data, so test them before nouns.
  if (f.includes('PRON') || f.includes('DEM') || f.includes('REL')) {
    const kind = __gramD(f.includes('DEM') ? 'demonstrative' : f.includes('REL') ? 'relative'
      : f.includes('SUFF') ? 'attached_pronoun' : f.includes('PRON') ? 'personal_pronoun' : 'pronoun', lang);
    return __gramTpl('gram_tpl_pron', lang, { kind, pgn: pgnText },
      pgnText ? `${kind} — ${pgnText}` : kind);
  }

  if (seg.g === 'N' || f.includes('ADJ')) {
    const kase = f.includes('NOM') ? __gramD('nom', lang) : f.includes('ACC') ? __gramD('acc', lang)
      : f.includes('GEN') ? __gramD('gen', lang) : '';
    const kind = __gramD(f.includes('ACT_PCPL') ? 'act_pcpl' : f.includes('PASS_PCPL') ? 'pass_pcpl'
      : f.includes('VN') ? 'vn' : f.includes('PN') ? 'proper_noun' : f.includes('ADJ') ? 'adjective' : 'noun', lang);
    return __gramTpl('gram_tpl_noun', lang, { case: kase, pgn: pgnText, kind }, __gramJoin([kase, pgnText, kind]));
  }

  // Particles and prefixes
  const prefixed = f.includes('PREF');
  const withPrefix = (x) => prefixed
    ? __gramTpl('gram_tpl_prefixed', lang, { x }, 'prefixed ' + x)
    : x;
  if (f.includes('DET')) return __gramD('det', lang);
  if (f.includes('P')) return withPrefix(__gramD('preposition', lang));
  const tag = f.filter(x => x !== 'PREF').find(x => GRAMMAR_LABELS[x])
    || (GRAMMAR_LABELS[seg.g] ? seg.g : null);
  let main;
  if (tag) {
    main = __gramT(__gramLabelKey(tag, 'P'), lang, GRAMMAR_LABELS[tag]);
    if (lang === 'en' || main === GRAMMAR_LABELS[tag]) main = main.toLowerCase();
  } else {
    main = __gramD('particle', lang);
  }
  return withPrefix(main);
}

/** FAM:<head> -> key suffix (the inna / kana / kada families). */
function __gramFamily(feat) {
  const head = feat.slice(4).replace(/[ً-ْٰ]/g, '').replace(/[أإآ]/g, 'ا');
  if (head === 'ان') return 'inna';
  if (head === 'كان') return 'kana';
  if (head === 'كاد') return 'kada';
  return null;
}

const __GRAM_FEAT_EN = {
  SUFF: 'Suffix', INDEF: 'Indefinite', ADDR: 'Addressee suffix', NV: 'Verb-like noun (ism fiʿl)',
  FAM_inna: 'Family of inna (إنّ وأخواتها)', FAM_kana: 'Family of kāna (كان وأخواتها)',
  FAM_kada: 'Family of kāda (كاد وأخواتها)'
};

/**
 * Decode a single morphology feature into a readable label in `lang`
 * (default: the UI language). Empty features give ''.
 */
function decodeGrammarFeature(feat, segTag, lang) {
  lang = __gramLang(lang);
  if (!feat) return '';
  // "P" on a noun or pronoun is the plural number, not the particle tag.
  if (feat === 'P' && segTag && segTag !== 'P') return __gramPgn(feat, lang);
  if (GRAMMAR_LABELS[feat]) {
    // On nouns, ACC is the accusative case, not the accusative particle
    const fb = (feat === 'ACC' && segTag !== 'P') ? 'Accusative (منصوب)' : GRAMMAR_LABELS[feat];
    return __gramT(__gramLabelKey(feat, segTag), lang, fb);
  }
  if (feat.startsWith('VF:')) {
    const n = feat.slice(3);
    return (typeof tFill === 'function' && typeof t === 'function' && t('gram_verb_form', lang) !== 'gram_verb_form')
      ? tFill('gram_verb_form', lang, { n }) : `Verb form ${n}`;
  }
  if (feat.startsWith('MOOD:')) return __gramT(__gramLabelKey(feat, segTag), lang, feat.slice(5));
  if (__GRAM_FEAT_EN[feat]) return __gramT('gram_' + feat, lang, __GRAM_FEAT_EN[feat]);
  if (feat.startsWith('FAM:')) {
    const fam = __gramFamily(feat);
    if (fam) return __gramT('gram_FAM_' + fam, lang, __GRAM_FEAT_EN['FAM_' + fam]);
    return feat;
  }

  // Person / gender / number combos like 3MS, 2FP, 1P, MS, FD, M, F
  return __gramPgn(feat, lang) || feat;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuranData, GRAMMAR_LABELS, decodeGrammarFeature };
}
