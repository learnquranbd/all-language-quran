/**
 * Learn Quranic Arabic — a flagship learning module that teaches the Arabic
 * LANGUAGE (grammar & sentence structure) using REAL, verified Quranic examples.
 * Every grammar point is illustrated by an actual ayah whose Arabic wording was
 * checked against the app's own local data (data/quran-words.json). No Arabic is
 * written from memory.
 *
 * Integration (mirrors js/resources.js):
 *   - Renders into #quranic-arabic-container
 *   - Responds to tab id "quranicarabic" (tabChanged event)
 *   - Re-renders on settingChanged:language
 *   - Global instance: quranicArabicView
 *   - Chrome strings via t(key, lang) with a built-in inline fallback so the
 *     module never shows raw keys even before the orchestrator registers them.
 *   - Lesson CONTENT is inline with per-item en/bn fields.
 *   - Progress persisted in localStorage under "lq_qarabic_progress".
 *
 * ACCURACY: every ayah reference, Arabic phrase (word tokens) and highlighted
 * word below was copied from data/quran-words.json (Uthmani text). Grammatical
 * claims are kept at standard textbook level for Quranic-Arabic courses.
 */

/* ------------------------------------------------------------------ *
 * Units (syllabus grouping)                                          *
 * ------------------------------------------------------------------ */
const QA_UNITS = [
  { id: 'foundations', icon: '🕌', en: 'Foundations',   bn: 'ভিত্তি' },
  { id: 'nouns',       icon: '📘', en: 'Nouns & Cases', bn: 'বিশেষ্য ও এ‘রাব' },
  { id: 'verbs',       icon: '⚡', en: 'Verbs',         bn: 'ক্রিয়া' },
  { id: 'forms',       icon: '🧬', en: 'Word Forms',    bn: 'শব্দরূপ' },
  { id: 'sentences',   icon: '🔗', en: 'Sentences',     bn: 'বাক্য' },
  { id: 'particles',   icon: '📎', en: 'Particles & Structures', bn: 'অব্যয় ও গঠন' },
];

/* ------------------------------------------------------------------ *
 * Lessons. Each lesson: id, unit, icon, title{en,bn}, concept{en,bn}, *
 * examples[{ ref, words[{ar,en,bn,hl?}], trans{en,bn}, note{en,bn} }],*
 * practice{ q{en,bn}, options[str|{en,bn}], answer, explain{en,bn} }. *
 * Every `ar` token is verified against data/quran-words.json.         *
 * ------------------------------------------------------------------ */
const QA_LESSONS = [
  /* ===================== UNIT 1 — FOUNDATIONS ===================== */
  {
    id: 'word-types', unit: 'foundations', icon: '🔤',
    title: { en: 'The three word types', bn: 'শব্দের তিন প্রকার' },
    concept: {
      en: 'Every Arabic word is one of three types: an <b>ism</b> (اسم — a noun/name: a person, thing or idea), a <b>fiʿl</b> (فعل — a verb: an action tied to a time), or a <b>harf</b> (حرف — a particle: a small connector such as "in", "to" or "and" that only has meaning with other words). Recognising a word\'s type is the very first step to reading Quranic Arabic.',
      bn: 'প্রতিটি আরবি শব্দ তিন প্রকারের একটি: <b>ইসম</b> (اسم — নাম/বিশেষ্য: ব্যক্তি, বস্তু বা ধারণা), <b>ফি‘ল</b> (فعل — ক্রিয়া: সময়ের সাথে যুক্ত কাজ), অথবা <b>হারফ</b> (حرف — অব্যয়: "তে", "জন্য", "ও"-এর মতো ছোট সংযোজক যা কেবল অন্য শব্দের সাথে অর্থ দেয়)। শব্দের প্রকার চেনা কুরআনি আরবি পড়ার প্রথম ধাপ।',
    },
    examples: [
      { ref: '1:2', trans: { en: 'All praise is for Allah, Lord of the worlds.', bn: 'সকল প্রশংসা আল্লাহর, যিনি জগতসমূহের পালনকর্তা।' },
        note: { en: 'ٱلْحَمْدُ and رَبِّ are nouns (ism); the لِ inside لِلَّهِ ("to/for") is a particle (harf).', bn: 'ٱلْحَمْدُ ও رَبِّ বিশেষ্য (ইসম); لِلَّهِ-এর ভেতরের لِ ("জন্য") একটি অব্যয় (হারফ)।' },
        words: [
          { ar: 'ٱلْحَمْدُ', en: 'the praise', bn: 'সকল প্রশংসা', hl: true },
          { ar: 'لِلَّهِ', en: 'to Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'رَبِّ', en: 'Lord of', bn: 'পালনকর্তা' },
          { ar: 'ٱلْعَٰلَمِينَ', en: 'the worlds', bn: 'জগতসমূহের' },
        ] },
      { ref: '1:5', trans: { en: 'You alone we worship, and You alone we ask for help.', bn: 'কেবল তোমারই ইবাদত করি এবং কেবল তোমারই সাহায্য চাই।' },
        note: { en: 'نَعْبُدُ ("we worship") is a verb (fiʿl) — an action happening in time.', bn: 'نَعْبُدُ ("আমরা ইবাদত করি") একটি ক্রিয়া (ফি‘ল) — সময়ে ঘটমান কাজ।' },
        words: [
          { ar: 'إِيَّاكَ', en: 'You alone', bn: 'কেবল তোমারই' },
          { ar: 'نَعْبُدُ', en: 'we worship', bn: 'আমরা ইবাদত করি', hl: true },
          { ar: 'وَإِيَّاكَ', en: 'and You alone', bn: 'এবং কেবল তোমারই' },
          { ar: 'نَسْتَعِينُ', en: 'we ask for help', bn: 'আমরা সাহায্য চাই' },
        ] },
    ],
    practice: {
      q: { en: 'Which word is a fiʿl (verb)?', bn: 'কোন শব্দটি ফি‘ল (ক্রিয়া)?' },
      options: ['ٱلْحَمْدُ', 'نَعْبُدُ', 'رَبِّ', 'ٱللَّهِ'], answer: 1,
      explain: { en: 'نَعْبُدُ ("we worship") is an action tied to time, so it is a verb. The others are nouns (ism).', bn: 'نَعْبُدُ ("আমরা ইবাদত করি") সময়-সম্পর্কিত কাজ, তাই এটি ক্রিয়া। বাকিগুলো বিশেষ্য (ইসম)।' },
    },
  },
  {
    id: 'definite-article', unit: 'foundations', icon: '🌙',
    title: { en: 'The definite article ٱلْ (sun & moon letters)', bn: 'নির্দিষ্টতার ٱلْ (সূর্য ও চন্দ্র অক্ষর)' },
    concept: {
      en: 'ٱلْ ("the") is placed on the front of a noun to make it definite, exactly like English "the". Its lam is pronounced clearly before a <b>moon letter</b> (e.g. ٱلْحَمْد → "al-ḥamd"). But before a <b>sun letter</b> the lam is silent and the next letter is doubled (ٱلرَّحْمَٰن → "ar-raḥmān", not "al-raḥmān"). The spelling keeps the ل either way; only the pronunciation changes.',
      bn: 'ٱلْ ("the/নির্দিষ্ট") বিশেষ্যের আগে বসে তাকে নির্দিষ্ট করে, ইংরেজি "the"-এর মতো। <b>চন্দ্র অক্ষরের</b> আগে এর লাম স্পষ্ট উচ্চারিত হয় (ٱلْحَمْد → "আল-হামদ")। কিন্তু <b>সূর্য অক্ষরের</b> আগে লাম নীরব থাকে ও পরের অক্ষরে শাদ্দা পড়ে (ٱلرَّحْمَٰن → "আর-রাহমান")। বানানে ل থাকে, কেবল উচ্চারণ বদলায়।',
    },
    examples: [
      { ref: '1:2', trans: { en: 'the praise ("al-ḥamd") — moon letter', bn: 'সকল প্রশংসা ("আল-হামদ") — চন্দ্র অক্ষর' },
        note: { en: 'ح is a moon letter, so the ل is pronounced: "al-ḥamdu".', bn: 'ح একটি চন্দ্র অক্ষর, তাই ل উচ্চারিত হয়: "আল-হামদু"।' },
        words: [ { ar: 'ٱلْحَمْدُ', en: 'the praise', bn: 'সকল প্রশংসা', hl: true } ] },
      { ref: '1:3', trans: { en: 'the Most Merciful, the Bestower of Mercy ("ar-raḥmān") — sun letter', bn: 'পরম করুণাময়, অসীম দয়ালু ("আর-রাহমান") — সূর্য অক্ষর' },
        note: { en: 'ر is a sun letter, so the ل is silent and ر is doubled: "ar-raḥmān".', bn: 'ر একটি সূর্য অক্ষর, তাই ل নীরব ও ر-তে শাদ্দা: "আর-রাহমান"।' },
        words: [
          { ar: 'ٱلرَّحْمَٰنِ', en: 'the Most Merciful', bn: 'পরম করুণাময়', hl: true },
          { ar: 'ٱلرَّحِيمِ', en: 'the Bestower of Mercy', bn: 'অসীম দয়ালু' },
        ] },
    ],
    practice: {
      q: { en: 'In ٱلرَّحْمَٰن the ل is not pronounced because ر is a ___ letter.', bn: 'ٱلرَّحْمَٰن-এ ل উচ্চারিত হয় না কারণ ر একটি ___ অক্ষর।' },
      options: [{ en: 'moon', bn: 'চন্দ্র' }, { en: 'sun', bn: 'সূর্য' }, { en: 'weak', bn: 'দুর্বল' }], answer: 1,
      explain: { en: 'ر is one of the 14 sun letters, which absorb the ل of ٱلْ.', bn: 'ر হলো ১৪টি সূর্য অক্ষরের একটি, যা ٱلْ-এর ل-কে মিলিয়ে নেয়।' },
    },
  },
  {
    id: 'gender', unit: 'foundations', icon: '⚥',
    title: { en: 'Gender & the taa marbuta ة', bn: 'লিঙ্গ ও তা মারবুতা ة' },
    concept: {
      en: 'Every Arabic noun is either masculine or feminine. The clearest sign of a feminine noun is the <b>taa marbuta</b> ة at its end (it looks like a ه with two dots). Words without it are usually masculine. So رَحْمَة ("mercy") is feminine, while كِتَاب ("book") is masculine.',
      bn: 'প্রতিটি আরবি বিশেষ্য পুংলিঙ্গ বা স্ত্রীলিঙ্গ। স্ত্রীলিঙ্গের সবচেয়ে স্পষ্ট চিহ্ন শেষে <b>তা মারবুতা</b> ة (দুই বিন্দুসহ ه-এর মতো দেখতে)। এটি না থাকলে সাধারণত পুংলিঙ্গ। তাই رَحْمَة ("রহমত") স্ত্রীলিঙ্গ, আর كِتَاب ("কিতাব") পুংলিঙ্গ।',
    },
    examples: [
      { ref: '21:107', trans: { en: 'And We sent you only as a mercy to the worlds.', bn: 'আর আমরা তোমাকে কেবল জগতসমূহের জন্য রহমতস্বরূপ পাঠিয়েছি।' },
        note: { en: 'رَحْمَةً ends in taa marbuta ة → feminine.', bn: 'رَحْمَةً শেষ হয়েছে তা মারবুতা ة দিয়ে → স্ত্রীলিঙ্গ।' },
        words: [
          { ar: 'وَمَآ', en: 'And not', bn: 'আর না' },
          { ar: 'أَرْسَلْنَٰكَ', en: 'We sent you', bn: 'আমরা তোমাকে পাঠিয়েছি' },
          { ar: 'إِلَّا', en: 'except', bn: 'কেবল' },
          { ar: 'رَحْمَةً', en: 'a mercy', bn: 'রহমতস্বরূপ', hl: true },
          { ar: 'لِّلْعَٰلَمِينَ', en: 'to the worlds', bn: 'জগতসমূহের জন্য' },
        ] },
      { ref: '2:2', trans: { en: 'That is the Book…', bn: 'এই সেই কিতাব…' },
        note: { en: 'ٱلْكِتَٰبُ has no taa marbuta → masculine.', bn: 'ٱلْكِتَٰبُ-তে তা মারবুতা নেই → পুংলিঙ্গ।' },
        words: [
          { ar: 'ذَٰلِكَ', en: 'That', bn: 'এই সেই' },
          { ar: 'ٱلْكِتَٰبُ', en: 'the Book', bn: 'কিতাব', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'Which word is feminine?', bn: 'কোন শব্দটি স্ত্রীলিঙ্গ?' },
      options: ['ٱلْكِتَٰبُ', 'رَحْمَةً', 'رَبِّ'], answer: 1,
      explain: { en: 'رَحْمَةً ends in the taa marbuta ة, the mark of a feminine noun.', bn: 'رَحْمَةً শেষ হয় তা মারবুতা ة দিয়ে, যা স্ত্রীলিঙ্গের চিহ্ন।' },
    },
  },
  {
    id: 'detached-pronouns', unit: 'foundations', icon: '👤',
    title: { en: 'Detached pronouns (هُوَ، أَنْتَ، أَنَا…)', bn: 'বিচ্ছিন্ন সর্বনাম (هُوَ، أَنْتَ، أَنَا…)' },
    concept: {
      en: 'Detached (standalone) pronouns are separate words: هُوَ ("he/it"), هِيَ ("she/it"), أَنْتَ ("you", m.), أَنَا ("I"), نَحْنُ ("we"). They usually stand as the subject of a sentence. In Al-Ikhlas, هُوَ points to Allah.',
      bn: 'বিচ্ছিন্ন (স্বতন্ত্র) সর্বনাম আলাদা শব্দ: هُوَ ("সে/তিনি"), هِيَ ("সে", স্ত্রী.), أَنْتَ ("তুমি", পুং.), أَنَا ("আমি"), نَحْنُ ("আমরা")। এগুলো সাধারণত বাক্যের কর্তা হয়। সূরা ইখলাসে هُوَ আল্লাহকে বোঝায়।',
    },
    examples: [
      { ref: '112:1', trans: { en: 'Say, "He is Allah, One."', bn: 'বলো, "তিনি আল্লাহ, একক।"' },
        note: { en: 'هُوَ ("He") is a detached pronoun and the subject of the sentence.', bn: 'هُوَ ("তিনি") একটি বিচ্ছিন্ন সর্বনাম ও বাক্যের কর্তা।' },
        words: [
          { ar: 'قُلْ', en: 'Say', bn: 'বলো' },
          { ar: 'هُوَ', en: 'He (is)', bn: 'তিনি', hl: true },
          { ar: 'ٱللَّهُ', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'أَحَدٌ', en: 'One', bn: 'একক' },
        ] },
    ],
    practice: {
      q: { en: 'What does the pronoun هُوَ mean?', bn: 'هُوَ সর্বনামের অর্থ কী?' },
      options: [{ en: 'I', bn: 'আমি' }, { en: 'you', bn: 'তুমি' }, { en: 'he / it', bn: 'সে / তিনি' }], answer: 2,
      explain: { en: 'هُوَ means "he / it" (3rd person masculine singular).', bn: 'هُوَ মানে "সে / তিনি" (তৃতীয় পুরুষ, পুংলিঙ্গ, একবচন)।' },
    },
  },

  /* ===================== UNIT 2 — NOUNS & CASES ===================== */
  {
    id: 'cases', unit: 'nouns', icon: '🎯',
    title: { en: 'The three cases: rafʿ, naṣb, jarr', bn: 'তিন এ‘রাব: রফ‘, নসব, জর' },
    concept: {
      en: 'The ending vowel of a noun shows its role in the sentence — this is <b>iʿrāb</b>. The three basic cases are <b>rafʿ</b> (nominative, usually ‑u, for the subject), <b>naṣb</b> (accusative, usually ‑a, for the object), and <b>jarr</b> (genitive, usually ‑i, after a preposition or in possession). Watch the last vowel: ٱلْحَمْدُ (‑u) vs ٱلْعَٰلَمِينَ (‑a/i form).',
      bn: 'বিশেষ্যের শেষ স্বর তার বাক্যে ভূমিকা দেখায় — একে <b>এ‘রাব</b> বলে। তিনটি মূল অবস্থা: <b>রফ‘</b> (সাধারণত ‑u, কর্তার জন্য), <b>নসব</b> (সাধারণত ‑a, কর্মের জন্য), এবং <b>জর</b> (সাধারণত ‑i, অব্যয়ের পরে বা সম্বন্ধে)। শেষ স্বরটি লক্ষ করো: ٱلْحَمْدُ (‑u) বনাম ٱلْعَٰلَمِينَ।',
    },
    examples: [
      { ref: '1:2', trans: { en: 'All praise (rafʿ) is for Allah, Lord of the worlds (jarr).', bn: 'সকল প্রশংসা (রফ‘) আল্লাহর, জগতসমূহের (জর) পালনকর্তা।' },
        note: { en: 'ٱلْحَمْدُ ends in ‑u (rafʿ, the subject). ٱلْعَٰلَمِينَ is genitive (jarr) in the possession chain.', bn: 'ٱلْحَمْدُ শেষ ‑u (রফ‘, কর্তা)। ٱلْعَٰلَمِينَ সম্বন্ধ-শৃঙ্খলে জর।' },
        words: [
          { ar: 'ٱلْحَمْدُ', en: 'the praise (‑u, rafʿ)', bn: 'সকল প্রশংসা (‑u, রফ‘)', hl: true },
          { ar: 'لِلَّهِ', en: 'for Allah', bn: 'আল্লাহর জন্য' },
          { ar: 'رَبِّ', en: 'Lord of', bn: 'পালনকর্তা' },
          { ar: 'ٱلْعَٰلَمِينَ', en: 'the worlds (jarr)', bn: 'জগতসমূহের (জর)', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'The ‑u ending on ٱلْحَمْدُ shows it is in the case of…', bn: 'ٱلْحَمْدُ-এর ‑u শেষ কোন অবস্থা বোঝায়…' },
      options: [{ en: 'rafʿ (nominative)', bn: 'রফ‘ (কর্তা)' }, { en: 'naṣb (accusative)', bn: 'নসব (কর্ম)' }, { en: 'jarr (genitive)', bn: 'জর (সম্বন্ধ)' }], answer: 0,
      explain: { en: 'A ‑u (ḍamma) ending marks rafʿ (nominative) — here the subject of praise.', bn: '‑u (দম্মা) শেষ রফ‘ (কর্তা) বোঝায় — এখানে প্রশংসার কর্তা।' },
    },
  },
  {
    id: 'idafah', unit: 'nouns', icon: '🔗',
    title: { en: 'The iḍāfah (possessive construction)', bn: 'ইদাফা (সম্বন্ধ গঠন)' },
    concept: {
      en: 'The iḍāfah joins two nouns to mean "X of Y". The first noun takes NO ٱلْ and no tanwīn; the second noun is in the genitive (jarr). مَٰلِكِ يَوْمِ ٱلدِّينِ = "Master of the Day of Judgement" — a chain of three nouns, each owned by the next.',
      bn: 'ইদাফা দুটি বিশেষ্যকে জুড়ে "X-এর Y" অর্থ দেয়। প্রথম বিশেষ্যে ٱلْ বা তানভীন থাকে না; দ্বিতীয় বিশেষ্য জর অবস্থায় থাকে। مَٰلِكِ يَوْمِ ٱلدِّينِ = "বিচার দিনের মালিক" — তিন বিশেষ্যের শৃঙ্খল।',
    },
    examples: [
      { ref: '1:4', trans: { en: 'Master of the Day of Judgement.', bn: 'বিচার দিনের মালিক।' },
        note: { en: 'مَٰلِكِ ("Master") owns يَوْمِ ("Day"), which owns ٱلدِّينِ ("the Judgement") — all genitive.', bn: 'مَٰلِكِ ("মালিক") এর সাথে يَوْمِ ("দিন"), তার সাথে ٱلدِّينِ ("বিচার") — সবই জর।' },
        words: [
          { ar: 'مَٰلِكِ', en: 'Master of', bn: 'মালিক', hl: true },
          { ar: 'يَوْمِ', en: 'the Day of', bn: 'দিনের', hl: true },
          { ar: 'ٱلدِّينِ', en: 'the Judgement', bn: 'বিচার', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'In an iḍāfah, the SECOND noun is always in which case?', bn: 'ইদাফায় দ্বিতীয় বিশেষ্য সবসময় কোন অবস্থায় থাকে?' },
      options: [{ en: 'rafʿ', bn: 'রফ‘' }, { en: 'jarr (genitive)', bn: 'জর' }, { en: 'naṣb', bn: 'নসব' }], answer: 1,
      explain: { en: 'The possessed-by (second) noun of an iḍāfah is always genitive (jarr).', bn: 'ইদাফার দ্বিতীয় (অধিকৃত) বিশেষ্য সবসময় জর হয়।' },
    },
  },
  {
    id: 'prepositions', unit: 'nouns', icon: '🧭',
    title: { en: 'Prepositions (ḥurūf al-jarr)', bn: 'অব্যয় (হুরুফুল জর)' },
    concept: {
      en: 'Prepositions are particles that come before a noun and put it in the genitive (jarr). Common ones: بِـ ("with/by"), فِي ("in"), عَلَىٰ ("on/upon"), مِنْ ("from"), إِلَىٰ ("to"). The noun after them always takes the ‑i (kasra) ending.',
      bn: 'অব্যয় হলো এমন হারফ যা বিশেষ্যের আগে বসে তাকে জর করে। প্রচলিত: بِـ ("দিয়ে/সাথে"), فِي ("মধ্যে"), عَلَىٰ ("উপর"), مِنْ ("থেকে"), إِلَىٰ ("দিকে")। এদের পরের বিশেষ্য সবসময় ‑i (কাসরা) নেয়।',
    },
    examples: [
      { ref: '1:1', trans: { en: 'In the name of Allah…', bn: 'আল্লাহর নামে…' },
        note: { en: 'بِـ ("with/in") makes ٱسْم genitive → بِسْمِ.', bn: 'بِـ ("দিয়ে") ٱسْم-কে জর করে → بِسْمِ।' },
        words: [
          { ar: 'بِسْمِ', en: 'In the name of', bn: 'নামে', hl: true },
          { ar: 'ٱللَّهِ', en: 'Allah', bn: 'আল্লাহর' },
        ] },
      { ref: '2:2', trans: { en: '…there is no doubt in it…', bn: '…এতে কোনো সন্দেহ নেই…' },
        note: { en: 'فِي ("in") merges with the pronoun ‑هِ → فِيهِ ("in it").', bn: 'فِي ("মধ্যে") সর্বনাম ‑هِ-এর সাথে মিশে → فِيهِ ("এতে")।' },
        words: [
          { ar: 'لَا', en: 'no', bn: 'নেই' },
          { ar: 'رَيْبَ', en: 'doubt', bn: 'সন্দেহ' },
          { ar: 'فِيهِ', en: 'in it', bn: 'এতে', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'A noun coming right after a preposition like فِي is in which case?', bn: 'فِي-এর মতো অব্যয়ের ঠিক পরের বিশেষ্য কোন অবস্থায়?' },
      options: [{ en: 'jarr (genitive)', bn: 'জর' }, { en: 'rafʿ', bn: 'রফ‘' }, { en: 'naṣb', bn: 'নসব' }], answer: 0,
      explain: { en: 'That is why they are called ḥurūf al-jarr — they force the genitive (jarr).', bn: 'সেজন্যই এদের হুরুফুল জর বলা হয় — এরা জর টানে।' },
    },
  },
  {
    id: 'demonstratives', unit: 'nouns', icon: '👉',
    title: { en: 'Demonstratives (هٰذَا، ذٰلِكَ)', bn: 'নির্দেশক সর্বনাম (هٰذَا، ذٰلِكَ)' },
    concept: {
      en: 'Demonstratives point things out. هٰذَا means "this" (near, masculine) and هٰذِهِ "this" (near, feminine); ذٰلِكَ means "that" (far, masculine) and تِلْكَ "that" (far, feminine). Al-Baqarah opens with ذٰلِكَ ٱلْكِتَٰبُ, "That is the Book".',
      bn: 'নির্দেশক সর্বনাম কোনো কিছু নির্দেশ করে। هٰذَا মানে "এই" (কাছে, পুং.), هٰذِهِ "এই" (কাছে, স্ত্রী.); ذٰلِكَ মানে "সেই" (দূরে, পুং.), تِلْكَ "সেই" (দূরে, স্ত্রী.)। সূরা বাকারা শুরু হয় ذٰلِكَ ٱلْكِتَٰبُ দিয়ে, "এই সেই কিতাব"।',
    },
    examples: [
      { ref: '2:2', trans: { en: 'That is the Book about which there is no doubt.', bn: 'এই সেই কিতাব, যাতে কোনো সন্দেহ নেই।' },
        note: { en: 'ذَٰلِكَ ("that") is a far, masculine demonstrative pointing to ٱلْكِتَٰبُ.', bn: 'ذَٰلِكَ ("সেই") একটি দূরবর্তী পুংলিঙ্গ নির্দেশক, ٱلْكِتَٰبُ-কে নির্দেশ করে।' },
        words: [
          { ar: 'ذَٰلِكَ', en: 'That (is)', bn: 'এই সেই', hl: true },
          { ar: 'ٱلْكِتَٰبُ', en: 'the Book', bn: 'কিতাব' },
          { ar: 'لَا', en: 'no', bn: 'নেই' },
          { ar: 'رَيْبَ', en: 'doubt', bn: 'সন্দেহ' },
          { ar: 'فِيهِ', en: 'in it', bn: 'এতে' },
        ] },
    ],
    practice: {
      q: { en: 'ذٰلِكَ means…', bn: 'ذٰلِكَ মানে…' },
      options: [{ en: 'this (near)', bn: 'এই (কাছে)' }, { en: 'that (far)', bn: 'সেই (দূরে)' }, { en: 'who', bn: 'যে' }], answer: 1,
      explain: { en: 'ذٰلِكَ is the far, masculine "that"; هٰذَا is the near "this".', bn: 'ذٰلِكَ দূরবর্তী পুংলিঙ্গ "সেই"; هٰذَا কাছের "এই"।' },
    },
  },

  /* ===================== UNIT 3 — VERBS ===================== */
  {
    id: 'past-tense', unit: 'verbs', icon: '⏮️',
    title: { en: 'The past tense (al-māḍī)', bn: 'অতীত কাল (আল-মাদি)' },
    concept: {
      en: 'The past tense (al-māḍī) describes a completed action. The base form is "he did": فَعَلَ. Endings are attached to show the doer: ‑تَ ("you", m.), ‑تُ ("I"), ‑نَا ("we"). أَنْعَمْتَ = "You bestowed favour", أَعْطَيْنَا = "We gave".',
      bn: 'অতীত কাল (আল-মাদি) সম্পন্ন কাজ বোঝায়। মূল রূপ "সে করলো": فَعَلَ। কর্তা বোঝাতে শেষে যুক্ত হয়: ‑تَ ("তুমি", পুং.), ‑تُ ("আমি"), ‑نَا ("আমরা")। أَنْعَمْتَ = "তুমি অনুগ্রহ করেছ", أَعْطَيْنَا = "আমরা দিয়েছি"।',
    },
    examples: [
      { ref: '1:7', trans: { en: 'the path of those upon whom You have bestowed favour…', bn: 'তাদের পথ, যাদের প্রতি তুমি অনুগ্রহ করেছ…' },
        note: { en: 'أَنْعَمْتَ = past verb أَنْعَمَ + ‑تَ ("you"): "You bestowed favour".', bn: 'أَنْعَمْتَ = অতীত ক্রিয়া أَنْعَمَ + ‑تَ ("তুমি"): "তুমি অনুগ্রহ করেছ"।' },
        words: [
          { ar: 'صِرَٰطَ', en: 'the path of', bn: 'পথ' },
          { ar: 'ٱلَّذِينَ', en: 'those whom', bn: 'যাদের' },
          { ar: 'أَنْعَمْتَ', en: 'You bestowed favour', bn: 'তুমি অনুগ্রহ করেছ', hl: true },
          { ar: 'عَلَيْهِمْ', en: 'upon them', bn: 'তাদের প্রতি' },
        ] },
      { ref: '108:1', trans: { en: 'Indeed, We have given you al-Kawthar.', bn: 'নিশ্চয় আমরা তোমাকে কাউসার দিয়েছি।' },
        note: { en: 'أَعْطَيْنَا = past verb أَعْطَىٰ + ‑نَا ("we"): "We gave" (the ‑كَ is the object "you").', bn: 'أَعْطَيْنَا = অতীত ক্রিয়া أَعْطَىٰ + ‑نَا ("আমরা"): "আমরা দিয়েছি" (‑كَ কর্ম "তোমাকে")।' },
        words: [
          { ar: 'إِنَّآ', en: 'Indeed We', bn: 'নিশ্চয় আমরা' },
          { ar: 'أَعْطَيْنَٰكَ', en: 'We gave you', bn: 'আমরা তোমাকে দিয়েছি', hl: true },
          { ar: 'ٱلْكَوْثَرَ', en: 'al-Kawthar', bn: 'কাউসার' },
        ] },
    ],
    practice: {
      q: { en: 'In أَنْعَمْتَ, the ending ‑تَ tells us the doer is…', bn: 'أَنْعَمْتَ-এ শেষ ‑تَ বলে কর্তা হলো…' },
      options: [{ en: '"I"', bn: '"আমি"' }, { en: '"you" (he addressed)', bn: '"তুমি"' }, { en: '"they"', bn: '"তারা"' }], answer: 1,
      explain: { en: 'The suffix ‑تَ on a past verb marks "you" (2nd person masculine singular).', bn: 'অতীত ক্রিয়ায় ‑تَ প্রত্যয় "তুমি" (দ্বিতীয় পুরুষ, পুং., একবচন) বোঝায়।' },
    },
  },
  {
    id: 'present-tense', unit: 'verbs', icon: '⏯️',
    title: { en: 'The present/future (al-muḍāriʿ)', bn: 'বর্তমান/ভবিষ্যৎ (আল-মুদারি‘)' },
    concept: {
      en: 'The muḍāriʿ describes an ongoing or future action ("does / is doing / will do"). It begins with a prefix letter that shows the doer: أَ ("I"), نَ ("we"), يَ ("he"), تَ ("you/she"). نَعْبُدُ = "we worship", نَسْتَعِينُ = "we seek help" — both start with نَ ("we").',
      bn: 'মুদারি‘ চলমান বা ভবিষ্যৎ কাজ বোঝায় ("করে / করছে / করবে")। এর শুরুতে কর্তা-নির্দেশক অক্ষর থাকে: أَ ("আমি"), نَ ("আমরা"), يَ ("সে"), تَ ("তুমি/সে-স্ত্রী")। نَعْبُدُ = "আমরা ইবাদত করি", نَسْتَعِينُ = "আমরা সাহায্য চাই" — দুটোই نَ ("আমরা") দিয়ে শুরু।',
    },
    examples: [
      { ref: '1:5', trans: { en: 'You alone we worship, and You alone we ask for help.', bn: 'কেবল তোমারই ইবাদত করি এবং কেবল তোমারই সাহায্য চাই।' },
        note: { en: 'The نَ‑ prefix on نَعْبُدُ and نَسْتَعِينُ means "we".', bn: 'نَعْبُدُ ও نَسْتَعِينُ-এর نَ‑ উপসর্গ মানে "আমরা"।' },
        words: [
          { ar: 'إِيَّاكَ', en: 'You alone', bn: 'কেবল তোমারই' },
          { ar: 'نَعْبُدُ', en: 'we worship', bn: 'আমরা ইবাদত করি', hl: true },
          { ar: 'وَإِيَّاكَ', en: 'and You alone', bn: 'এবং কেবল তোমারই' },
          { ar: 'نَسْتَعِينُ', en: 'we seek help', bn: 'আমরা সাহায্য চাই', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'The نَ‑ at the start of نَعْبُدُ shows the subject is…', bn: 'نَعْبُدُ-এর শুরুর نَ‑ কর্তা বোঝায়…' },
      options: [{ en: '"we"', bn: '"আমরা"' }, { en: '"he"', bn: '"সে"' }, { en: '"you"', bn: '"তুমি"' }], answer: 0,
      explain: { en: 'The present-tense prefix نَ‑ means "we"; يَ‑ = "he", أَ‑ = "I", تَ‑ = "you/she".', bn: 'বর্তমান কালের نَ‑ উপসর্গ মানে "আমরা"; يَ‑ = "সে", أَ‑ = "আমি", تَ‑ = "তুমি/সে"।' },
    },
  },
  {
    id: 'command', unit: 'verbs', icon: '❗',
    title: { en: 'The command (al-amr)', bn: 'আদেশ (আল-আমর)' },
    concept: {
      en: 'The command (al-amr) tells someone to do something ("do!"). It is formed from the present tense by dropping the prefix. ٱهْدِنَا = "Guide us!", صَلِّ = "Pray!", قُلْ = "Say!". Much of du‘ā in the Quran uses the command form addressed to Allah.',
      bn: 'আদেশ (আল-আমর) কাউকে কিছু করতে বলে ("করো!")। বর্তমান কাল থেকে উপসর্গ ফেলে এটি গঠিত হয়। ٱهْدِنَا = "আমাদের পথ দেখাও!", صَلِّ = "সালাত পড়ো!", قُلْ = "বলো!"। কুরআনের অনেক দু‘আ আল্লাহর প্রতি আদেশ-রূপে।',
    },
    examples: [
      { ref: '1:6', trans: { en: 'Guide us to the straight path.', bn: 'আমাদের সরল পথ দেখাও।' },
        note: { en: 'ٱهْدِنَا = command "guide!" + ‑نَا ("us").', bn: 'ٱهْدِنَا = আদেশ "পথ দেখাও!" + ‑نَا ("আমাদের")।' },
        words: [
          { ar: 'ٱهْدِنَا', en: 'Guide us', bn: 'আমাদের পথ দেখাও', hl: true },
          { ar: 'ٱلصِّرَٰطَ', en: 'to the path', bn: 'পথ' },
          { ar: 'ٱلْمُسْتَقِيمَ', en: 'the straight', bn: 'সরল' },
        ] },
      { ref: '108:2', trans: { en: 'So pray to your Lord and sacrifice.', bn: 'অতএব তোমার রবের উদ্দেশ্যে সালাত পড়ো ও কুরবানি করো।' },
        note: { en: 'صَلِّ ("pray!") and ٱنْحَرْ ("sacrifice!") are both commands.', bn: 'صَلِّ ("সালাত পড়ো!") ও ٱنْحَرْ ("কুরবানি করো!") দুটোই আদেশ।' },
        words: [
          { ar: 'فَصَلِّ', en: 'So pray', bn: 'অতএব সালাত পড়ো', hl: true },
          { ar: 'لِرَبِّكَ', en: 'to your Lord', bn: 'তোমার রবের জন্য' },
          { ar: 'وَٱنْحَرْ', en: 'and sacrifice', bn: 'ও কুরবানি করো' },
        ] },
    ],
    practice: {
      q: { en: 'ٱهْدِنَا ("Guide us") is an example of which verb form?', bn: 'ٱهْدِنَا ("আমাদের পথ দেখাও") কোন ক্রিয়ারূপ?' },
      options: [{ en: 'past (māḍī)', bn: 'অতীত (মাদি)' }, { en: 'command (amr)', bn: 'আদেশ (আমর)' }, { en: 'present (muḍāriʿ)', bn: 'বর্তমান (মুদারি‘)' }], answer: 1,
      explain: { en: 'It requests an action to be done, so it is the command (al-amr).', bn: 'এটি কাজ করার অনুরোধ, তাই এটি আদেশ (আল-আমর)।' },
    },
  },
  {
    id: 'object-pronouns', unit: 'verbs', icon: '📎',
    title: { en: 'Attached (object) pronouns on verbs', bn: 'ক্রিয়ায় যুক্ত (কর্ম) সর্বনাম' },
    concept: {
      en: 'A pronoun can attach to the END of a verb as its object: ‑نِي ("me"), ‑كَ ("you"), ‑هُ ("him/it"), ‑نَا ("us"), ‑هُمْ ("them"). So أَعْطَيْنَٰكَ = "We gave YOU", and the ‑نَا in ٱهْدِنَا = "guide US".',
      bn: 'একটি সর্বনাম ক্রিয়ার শেষে কর্ম হিসেবে যুক্ত হতে পারে: ‑نِي ("আমাকে"), ‑كَ ("তোমাকে"), ‑هُ ("তাকে"), ‑نَا ("আমাদের"), ‑هُمْ ("তাদের")। তাই أَعْطَيْنَٰكَ = "আমরা তোমাকে দিয়েছি", আর ٱهْدِنَا-এর ‑نَا = "আমাদের পথ দেখাও"।',
    },
    examples: [
      { ref: '108:1', trans: { en: 'Indeed, We have given you al-Kawthar.', bn: 'নিশ্চয় আমরা তোমাকে কাউসার দিয়েছি।' },
        note: { en: 'The final ‑كَ on أَعْطَيْنَٰكَ is the object "you".', bn: 'أَعْطَيْنَٰكَ-এর শেষ ‑كَ কর্ম "তোমাকে"।' },
        words: [
          { ar: 'إِنَّآ', en: 'Indeed We', bn: 'নিশ্চয় আমরা' },
          { ar: 'أَعْطَيْنَٰكَ', en: 'We gave you', bn: 'আমরা তোমাকে দিয়েছি', hl: true },
          { ar: 'ٱلْكَوْثَرَ', en: 'al-Kawthar', bn: 'কাউসার' },
        ] },
      { ref: '1:6', trans: { en: 'Guide us to the straight path.', bn: 'আমাদের সরল পথ দেখাও।' },
        note: { en: 'The ‑نَا on ٱهْدِنَا is the object "us".', bn: 'ٱهْدِنَا-এর ‑نَا কর্ম "আমাদের"।' },
        words: [
          { ar: 'ٱهْدِنَا', en: 'Guide us', bn: 'আমাদের পথ দেখাও', hl: true },
          { ar: 'ٱلصِّرَٰطَ', en: 'the path', bn: 'পথ' },
          { ar: 'ٱلْمُسْتَقِيمَ', en: 'the straight', bn: 'সরল' },
        ] },
    ],
    practice: {
      q: { en: 'In أَعْطَيْنَٰكَ, what does the attached ‑كَ mean?', bn: 'أَعْطَيْنَٰكَ-এ যুক্ত ‑كَ-এর অর্থ কী?' },
      options: [{ en: '"us"', bn: '"আমাদের"' }, { en: '"you" (object)', bn: '"তোমাকে" (কর্ম)' }, { en: '"them"', bn: '"তাদের"' }], answer: 1,
      explain: { en: 'The suffix ‑كَ means "you" as the object of the verb — "We gave you".', bn: '‑كَ প্রত্যয় ক্রিয়ার কর্ম "তোমাকে" — "আমরা তোমাকে দিয়েছি"।' },
    },
  },
  {
    id: 'verb-forms', unit: 'verbs', icon: '🧩',
    title: { en: 'Verb forms (al-awzān)', bn: 'ক্রিয়ার ওজন (আল-আওযান)' },
    concept: {
      en: 'Most Arabic verbs are built from a 3-letter root cast into one of ten patterns (awzān) that shade the meaning. <b>Form I</b> is the plain root (فَعَلَ). <b>Form II</b> doubles the middle letter and often adds "make/cause": عَلِمَ ("he knew") → عَلَّمَ ("he taught"). <b>Form X</b> (ٱسْتَفْعَلَ) often means "to seek/ask for".',
      bn: 'অধিকাংশ আরবি ক্রিয়া তিন-অক্ষরের মূল থেকে দশটি প্যাটার্নের (আওযান) একটিতে গঠিত হয়, যা অর্থে ছায়া যোগ করে। <b>প্রথম রূপ</b> সাধারণ মূল (فَعَلَ)। <b>দ্বিতীয় রূপ</b> মধ্য অক্ষর দ্বিগুণ করে ও প্রায়ই "করানো" যোগ করে: عَلِمَ ("সে জানলো") → عَلَّمَ ("সে শেখালো")। <b>দশম রূপ</b> (ٱسْتَفْعَلَ) প্রায়ই "চাওয়া/খোঁজা" বোঝায়।',
    },
    examples: [
      { ref: '55:2', trans: { en: 'He taught the Quran.', bn: 'তিনি কুরআন শিক্ষা দিয়েছেন।' },
        note: { en: 'عَلَّمَ is Form II (doubled middle letter) — "to teach", from عَلِمَ "to know".', bn: 'عَلَّمَ দ্বিতীয় রূপ (মধ্য অক্ষর দ্বিগুণ) — "শেখানো", عَلِمَ "জানা" থেকে।' },
        words: [
          { ar: 'عَلَّمَ', en: 'He taught', bn: 'তিনি শিক্ষা দিয়েছেন', hl: true },
          { ar: 'ٱلْقُرْءَانَ', en: 'the Quran', bn: 'কুরআন' },
        ] },
      { ref: '1:5', trans: { en: '…and You alone we ask for help.', bn: '…এবং কেবল তোমারই সাহায্য চাই।' },
        note: { en: 'نَسْتَعِينُ is Form X (ٱسْتَفْعَلَ) — "to seek help", from عَوْن "help".', bn: 'نَسْتَعِينُ দশম রূপ (ٱسْتَفْعَلَ) — "সাহায্য চাওয়া", عَوْن "সাহায্য" থেকে।' },
        words: [
          { ar: 'وَإِيَّاكَ', en: 'and You alone', bn: 'এবং কেবল তোমারই' },
          { ar: 'نَسْتَعِينُ', en: 'we seek help', bn: 'আমরা সাহায্য চাই', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'عَلَّمَ ("he taught") is made from عَلِمَ ("he knew") by doubling the middle letter. This Form II pattern often adds the sense of…', bn: 'عَلَّمَ ("সে শেখালো") তৈরি হয়েছে عَلِمَ ("সে জানলো") থেকে মধ্য অক্ষর দ্বিগুণ করে। এই দ্বিতীয় রূপ প্রায়ই যোগ করে…' },
      options: [{ en: 'seeking / asking', bn: 'চাওয়া / খোঁজা' }, { en: 'making / causing', bn: 'করানো / ঘটানো' }, { en: 'negation', bn: 'নেতিবাচকতা' }], answer: 1,
      explain: { en: 'Form II typically makes a verb causative: "know" → "make known / teach".', bn: 'দ্বিতীয় রূপ সাধারণত ক্রিয়াকে কার্যকারক করে: "জানা" → "জানানো / শেখানো"।' },
    },
  },

  /* ===================== UNIT 4 — SENTENCES & PARTICLES ===================== */
  {
    id: 'sentence-types', unit: 'sentences', icon: '🧱',
    title: { en: 'Nominal vs verbal sentences', bn: 'নামবাচক বনাম ক্রিয়াবাচক বাক্য' },
    concept: {
      en: 'Arabic has two sentence types. A <b>nominal sentence</b> (jumla ismiyya) starts with a noun and often has no verb — "X is Y": ٱللَّهُ أَحَدٌ = "Allah is One". A <b>verbal sentence</b> (jumla fiʿliyya) starts with a verb: ٱهْدِنَا ٱلصِّرَٰطَ = "Guide us to the path".',
      bn: 'আরবিতে দুই ধরনের বাক্য। <b>নামবাচক বাক্য</b> (জুমলা ইসমিয়া) বিশেষ্য দিয়ে শুরু হয় ও প্রায়ই ক্রিয়াহীন — "X হলো Y": ٱللَّهُ أَحَدٌ = "আল্লাহ একক"। <b>ক্রিয়াবাচক বাক্য</b> (জুমলা ফি‘লিয়া) ক্রিয়া দিয়ে শুরু: ٱهْدِنَا ٱلصِّرَٰطَ = "আমাদের পথ দেখাও"।',
    },
    examples: [
      { ref: '112:1', trans: { en: 'He is Allah, One. — a nominal sentence (no verb).', bn: 'তিনি আল্লাহ, একক। — নামবাচক বাক্য (ক্রিয়াহীন)।' },
        note: { en: 'هُوَ ٱللَّهُ أَحَدٌ has no verb — it links nouns: "He (is) Allah, One".', bn: 'هُوَ ٱللَّهُ أَحَدٌ-এ ক্রিয়া নেই — এটি বিশেষ্য জোড়ে: "তিনি (হলেন) আল্লাহ, একক"।' },
        words: [
          { ar: 'قُلْ', en: 'Say', bn: 'বলো' },
          { ar: 'هُوَ', en: 'He (is)', bn: 'তিনি', hl: true },
          { ar: 'ٱللَّهُ', en: 'Allah', bn: 'আল্লাহ', hl: true },
          { ar: 'أَحَدٌ', en: 'One', bn: 'একক', hl: true },
        ] },
      { ref: '1:6', trans: { en: 'Guide us to the straight path. — a verbal sentence.', bn: 'আমাদের সরল পথ দেখাও। — ক্রিয়াবাচক বাক্য।' },
        note: { en: 'The sentence begins with the verb ٱهْدِنَا, so it is verbal.', bn: 'বাক্যটি ٱهْدِنَا ক্রিয়া দিয়ে শুরু, তাই এটি ক্রিয়াবাচক।' },
        words: [
          { ar: 'ٱهْدِنَا', en: 'Guide us', bn: 'আমাদের পথ দেখাও', hl: true },
          { ar: 'ٱلصِّرَٰطَ', en: 'the path', bn: 'পথ' },
          { ar: 'ٱلْمُسْتَقِيمَ', en: 'the straight', bn: 'সরল' },
        ] },
    ],
    practice: {
      q: { en: 'A sentence that begins with a verb is called…', bn: 'ক্রিয়া দিয়ে শুরু হওয়া বাক্যকে বলে…' },
      options: [{ en: 'nominal (ismiyya)', bn: 'নামবাচক (ইসমিয়া)' }, { en: 'verbal (fiʿliyya)', bn: 'ক্রিয়াবাচক (ফি‘লিয়া)' }], answer: 1,
      explain: { en: 'A verbal sentence (jumla fiʿliyya) starts with a verb; a nominal one starts with a noun.', bn: 'ক্রিয়াবাচক বাক্য (জুমলা ফি‘লিয়া) ক্রিয়া দিয়ে শুরু; নামবাচক বিশেষ্য দিয়ে।' },
    },
  },
  {
    id: 'relative-pronouns', unit: 'sentences', icon: '🪢',
    title: { en: 'Relative pronouns (ٱلَّذِي، ٱلَّذِينَ)', bn: 'সম্বন্ধবাচক সর্বনাম (ٱلَّذِي، ٱلَّذِينَ)' },
    concept: {
      en: 'Relative pronouns mean "who / which / that" and join a describing clause to a noun. ٱلَّذِي = "who" (masculine singular), ٱلَّتِي = "who" (feminine singular), ٱلَّذِينَ = "those who" (masculine plural). ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ = "those upon whom You bestowed favour".',
      bn: 'সম্বন্ধবাচক সর্বনাম মানে "যে / যা / যাদের" এবং বর্ণনা-বাক্যকে বিশেষ্যের সাথে জোড়ে। ٱلَّذِي = "যে" (পুং. একবচন), ٱلَّتِي = "যে" (স্ত্রী. একবচন), ٱلَّذِينَ = "যারা" (পুং. বহুবচন)। ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ = "যাদের প্রতি তুমি অনুগ্রহ করেছ"।',
    },
    examples: [
      { ref: '1:7', trans: { en: 'the path of those whom You have favoured…', bn: 'তাদের পথ, যাদের প্রতি তুমি অনুগ্রহ করেছ…' },
        note: { en: 'ٱلَّذِينَ ("those who") joins the clause أَنْعَمْتَ عَلَيْهِمْ to صِرَٰط.', bn: 'ٱلَّذِينَ ("যারা") أَنْعَمْتَ عَلَيْهِمْ বাক্যকে صِرَٰط-এর সাথে জোড়ে।' },
        words: [
          { ar: 'صِرَٰطَ', en: 'the path of', bn: 'পথ' },
          { ar: 'ٱلَّذِينَ', en: 'those whom', bn: 'যাদের', hl: true },
          { ar: 'أَنْعَمْتَ', en: 'You favoured', bn: 'তুমি অনুগ্রহ করেছ' },
          { ar: 'عَلَيْهِمْ', en: 'upon them', bn: 'তাদের প্রতি' },
        ] },
    ],
    practice: {
      q: { en: 'ٱلَّذِينَ is used for…', bn: 'ٱلَّذِينَ ব্যবহৃত হয়…' },
      options: [{ en: 'one man', bn: 'একজন পুরুষ' }, { en: 'one woman', bn: 'একজন নারী' }, { en: 'a plural group (masc.)', bn: 'বহুবচন দল (পুং.)' }], answer: 2,
      explain: { en: 'ٱلَّذِينَ = "those who" (masculine plural). ٱلَّذِي is the singular "who".', bn: 'ٱلَّذِينَ = "যারা" (পুং. বহুবচন)। ٱلَّذِي একবচন "যে"।' },
    },
  },
  {
    id: 'negation', unit: 'sentences', icon: '🚫',
    title: { en: 'Negation particles (لَا، لَمْ، لَنْ، مَا)', bn: 'নেতিবাচক অব্যয় (لَا، لَمْ، لَنْ، مَا)' },
    concept: {
      en: 'Different particles negate different things. <b>لَا</b> negates the present or a category ("there is no…"): لَا رَيْبَ = "no doubt". <b>لَمْ</b> + present verb negates the PAST ("did not"): لَمْ يَلِدْ = "He did not beget". <b>لَنْ</b> negates the future ("will never"), and <b>مَا</b> negates a past verb or noun sentence.',
      bn: 'ভিন্ন অব্যয় ভিন্ন জিনিস নেতিবাচক করে। <b>لَا</b> বর্তমান বা শ্রেণি নাকচ করে ("কোনো … নেই"): لَا رَيْبَ = "কোনো সন্দেহ নেই"। <b>لَمْ</b> + বর্তমান ক্রিয়া অতীতকে নাকচ করে ("করেনি"): لَمْ يَلِدْ = "তিনি জন্ম দেননি"। <b>لَنْ</b> ভবিষ্যৎ নাকচ করে ("কখনো করবে না"), <b>مَا</b> অতীত ক্রিয়া বা নাম-বাক্য নাকচ করে।',
    },
    examples: [
      { ref: '2:2', trans: { en: '…there is no doubt in it…', bn: '…এতে কোনো সন্দেহ নেই…' },
        note: { en: 'لَا denies the very existence of doubt: "no doubt".', bn: 'لَا সন্দেহের অস্তিত্বই নাকচ করে: "কোনো সন্দেহ নেই"।' },
        words: [
          { ar: 'لَا', en: 'no', bn: 'নেই', hl: true },
          { ar: 'رَيْبَ', en: 'doubt', bn: 'সন্দেহ' },
          { ar: 'فِيهِ', en: 'in it', bn: 'এতে' },
        ] },
      { ref: '112:3', trans: { en: 'He neither begets nor is born.', bn: 'তিনি জন্ম দেননি এবং জন্মগ্রহণ করেননি।' },
        note: { en: 'لَمْ before the present verb يَلِدْ turns it into a PAST negation: "did not beget".', bn: 'বর্তমান ক্রিয়া يَلِدْ-এর আগে لَمْ একে অতীত নেতিবাচক করে: "জন্ম দেননি"।' },
        words: [
          { ar: 'لَمْ', en: 'not (did)', bn: 'নি', hl: true },
          { ar: 'يَلِدْ', en: 'He beget', bn: 'তিনি জন্ম দেন' },
          { ar: 'وَلَمْ', en: 'and not', bn: 'এবং নি' },
          { ar: 'يُولَدْ', en: 'He is born', bn: 'তিনি জন্মগ্রহণ করেন' },
        ] },
    ],
    practice: {
      q: { en: 'To negate a verb in the PAST ("did not…"), the Quran often uses لَمْ with which tense?', bn: 'অতীত নাকচ করতে ("করেনি…"), কুরআন প্রায়ই لَمْ ব্যবহার করে কোন কালের সাথে?' },
      options: [{ en: 'the past verb', bn: 'অতীত ক্রিয়া' }, { en: 'the present verb', bn: 'বর্তমান ক্রিয়া' }, { en: 'a noun', bn: 'বিশেষ্য' }], answer: 1,
      explain: { en: 'لَمْ is followed by the present-tense (muḍāriʿ) verb but gives a PAST meaning: لَمْ يَلِدْ.', bn: 'لَمْ-এর পরে বর্তমান (মুদারি‘) ক্রিয়া আসে কিন্তু অর্থ হয় অতীত: لَمْ يَلِدْ।' },
    },
  },
  {
    id: 'dual-plural', unit: 'nouns', icon: '👥',
    title: { en: 'The dual & sound plurals', bn: 'দ্বিবচন ও সহজ বহুবচন' },
    concept: {
      en: 'Arabic counts in three: singular, <b>dual</b> (exactly two) and <b>plural</b> (three+). The dual adds ‑ānِ / ‑ayn and the dual pronoun is ‑هُمَا ("them two"). A masculine <b>sound plural</b> adds ‑ūna (rafʿ) or ‑īna (naṣb/jarr): ٱلْمُفْلِحُونَ ("the successful"), ٱلْعَٰلَمِينَ ("the worlds").',
      bn: 'আরবি তিনভাবে গণনা করে: একবচন, <b>দ্বিবচন</b> (ঠিক দুই) ও <b>বহুবচন</b> (তিন+)। দ্বিবচনে ‑ānِ / ‑ayn যোগ হয় ও দ্বিবচন সর্বনাম ‑هُمَا ("তারা দুজন")। পুংলিঙ্গ <b>সহজ বহুবচন</b> ‑ūna (রফ‘) বা ‑īna (নসব/জর) যোগ করে: ٱلْمُفْلِحُونَ ("সফলকাম"), ٱلْعَٰلَمِينَ ("জগতসমূহ")।',
    },
    examples: [
      { ref: '1:2', trans: { en: '…Lord of the worlds. — masculine sound plural (‑īn).', bn: '…জগতসমূহের পালনকর্তা। — পুংলিঙ্গ সহজ বহুবচন (‑īn)।' },
        note: { en: 'ٱلْعَٰلَمِينَ = "the worlds"; the ‑īna ending is a masculine sound plural (genitive here).', bn: 'ٱلْعَٰلَمِينَ = "জগতসমূহ"; ‑īna শেষ পুংলিঙ্গ সহজ বহুবচন (এখানে জর)।' },
        words: [
          { ar: 'رَبِّ', en: 'Lord of', bn: 'পালনকর্তা' },
          { ar: 'ٱلْعَٰلَمِينَ', en: 'the worlds', bn: 'জগতসমূহের', hl: true },
        ] },
      { ref: '2:5', trans: { en: '…and it is they who are the successful. — sound plural (‑ūn).', bn: '…আর তারাই সফলকাম। — সহজ বহুবচন (‑ūn)।' },
        note: { en: 'ٱلْمُفْلِحُونَ = "the successful"; the ‑ūna ending is the nominative (rafʿ) sound plural.', bn: 'ٱلْمُفْلِحُونَ = "সফলকাম"; ‑ūna শেষ রফ‘ সহজ বহুবচন।' },
        words: [
          { ar: 'هُمُ', en: 'they (are)', bn: 'তারা' },
          { ar: 'ٱلْمُفْلِحُونَ', en: 'the successful', bn: 'সফলকাম', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'The ‑ūna ending on ٱلْمُفْلِحُونَ marks a…', bn: 'ٱلْمُفْلِحُونَ-এর ‑ūna শেষ কী বোঝায়…' },
      options: [{ en: 'dual (two)', bn: 'দ্বিবচন (দুই)' }, { en: 'masculine sound plural', bn: 'পুংলিঙ্গ সহজ বহুবচন' }, { en: 'feminine singular', bn: 'স্ত্রীলিঙ্গ একবচন' }], answer: 1,
      explain: { en: '‑ūna (nominative) / ‑īna (accusative-genitive) is the masculine sound plural ending.', bn: '‑ūna (রফ‘) / ‑īna (নসব-জর) পুংলিঙ্গ সহজ বহুবচনের শেষ।' },
    },
  },
  {
    id: 'broken-plurals', unit: 'nouns', icon: '🧩',
    title: { en: 'Broken plurals (jamʿ at-taksīr)', bn: 'ভাঙা বহুবচন (জম‘ আত-তাকসীর)' },
    concept: {
      en: 'Not every plural just adds an ending. Many nouns form a <b>broken plural</b> (jamʿ at-taksīr) by re-shaping the word itself — like English "man → men". قَلْب ("heart") becomes قُلُوب ("hearts"). Because the pattern changes, each broken plural is learned with its word.',
      bn: 'সব বহুবচন কেবল একটি প্রত্যয় যোগ করে না। অনেক বিশেষ্য শব্দের ভেতরের গঠন বদলে <b>ভাঙা বহুবচন</b> (জম‘ আত-তাকসীর) গঠন করে — যেমন ইংরেজি "man → men"। قَلْب ("হৃদয়") হয় قُلُوب ("হৃদয়সমূহ")। প্যাটার্ন বদলায় বলে প্রতিটি ভাঙা বহুবচন শব্দসহ শিখতে হয়।',
    },
    examples: [
      { ref: '2:7', trans: { en: 'Allah has set a seal upon their hearts…', bn: 'আল্লাহ তাদের হৃদয়ে মোহর দিয়েছেন…' },
        note: { en: 'قُلُوب ("hearts") is the broken plural of قَلْب ("heart").', bn: 'قُلُوب ("হৃদয়সমূহ") হলো قَلْب ("হৃদয়")-এর ভাঙা বহুবচন।' },
        words: [
          { ar: 'خَتَمَ', en: 'has sealed', bn: 'মোহর দিয়েছেন' },
          { ar: 'ٱللَّهُ', en: 'Allah', bn: 'আল্লাহ' },
          { ar: 'عَلَىٰ', en: 'upon', bn: 'উপর' },
          { ar: 'قُلُوبِهِمْ', en: 'their hearts', bn: 'তাদের হৃদয়', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'قُلُوب ("hearts") from قَلْب, made by reshaping the word, is which kind of plural?', bn: 'قَلْب থেকে গঠিত قُلُوب ("হৃদয়সমূহ") কোন ধরনের বহুবচন?' },
      options: [{ en: 'sound plural', bn: 'সহজ বহুবচন' }, { en: 'broken plural', bn: 'ভাঙা বহুবচন' }, { en: 'dual', bn: 'দ্বিবচন' }], answer: 1,
      explain: { en: 'Reshaping the internal pattern of the word makes a broken plural (jamʿ at-taksīr).', bn: 'শব্দের ভেতরের গঠন বদলানো ভাঙা বহুবচন (জম‘ আত-তাকসীর) তৈরি করে।' },
    },
  },
  {
    id: 'numbers', unit: 'nouns', icon: '🔢',
    title: { en: 'Numbers & counting (basics)', bn: 'সংখ্যা ও গণনা (মৌলিক)' },
    concept: {
      en: 'Counting in Arabic starts with <b>وَاحِد / أَحَد</b> ("one"); "two" is shown by the dual ending (‑ān / ‑ayn), and larger numbers have their own words, e.g. ٱثْنَا عَشَرَ = "twelve". Numbers interact with the counted noun in special ways, but the foundation is وَاحِد for "one".',
      bn: 'আরবিতে গণনা শুরু হয় <b>وَاحِد / أَحَد</b> ("এক") দিয়ে; "দুই" বোঝানো হয় দ্বিবচন প্রত্যয়ে (‑ān / ‑ayn), আর বড় সংখ্যার আলাদা শব্দ আছে, যেমন ٱثْنَا عَشَرَ = "বারো"। সংখ্যা গণিত বিশেষ্যের সাথে বিশেষভাবে মেলে, তবে ভিত্তি হলো "এক"-এর জন্য وَاحِد।',
    },
    examples: [
      { ref: '2:163', trans: { en: 'And your God is One God…', bn: 'আর তোমাদের ইলাহ এক ইলাহ…' },
        note: { en: 'وَٰحِد = "one", agreeing with the masculine noun إِلَٰه.', bn: 'وَٰحِد = "এক", পুংলিঙ্গ إِلَٰه-এর সাথে সঙ্গতিপূর্ণ।' },
        words: [
          { ar: 'وَإِلَٰهُكُمْ', en: 'And your God', bn: 'আর তোমাদের ইলাহ' },
          { ar: 'إِلَٰهٌ', en: '(is) a God', bn: 'ইলাহ' },
          { ar: 'وَٰحِدٌ', en: 'One', bn: 'এক', hl: true },
        ] },
      { ref: '9:36', trans: { en: '…twelve months…', bn: '…বারো মাস…' },
        note: { en: 'ٱثْنَا عَشَرَ = "twelve" (literally "two-ten") counting شَهْر ("month").', bn: 'ٱثْنَا عَشَرَ = "বারো" (আক্ষরিক "দুই-দশ"), شَهْر ("মাস") গণনা করে।' },
        words: [
          { ar: 'ٱثْنَا', en: 'two', bn: 'দুই', hl: true },
          { ar: 'عَشَرَ', en: '(and) ten', bn: 'দশ', hl: true },
          { ar: 'شَهْرًا', en: 'months', bn: 'মাস' },
        ] },
    ],
    practice: {
      q: { en: 'The word وَٰحِد means…', bn: 'وَٰحِد শব্দের অর্থ…' },
      options: [{ en: 'one', bn: 'এক' }, { en: 'two', bn: 'দুই' }, { en: 'ten', bn: 'দশ' }], answer: 0,
      explain: { en: 'وَٰحِد (like أَحَد) means "one".', bn: 'وَٰحِد (أَحَد-এর মতো) মানে "এক"।' },
    },
  },
  {
    id: 'nasb-jazm', unit: 'verbs', icon: '🔧',
    title: { en: 'Particles that change the present verb (naṣb & jazm)', bn: 'বর্তমান ক্রিয়া বদলানো অব্যয় (নসব ও জযম)' },
    concept: {
      en: 'A present verb (muḍāriʿ) normally ends in ‑u. Certain particles change that. <b>لَنْ</b> and <b>أَنْ</b> put it into naṣb (‑a): لَنْ = "will never" (future). <b>لَمْ</b> and prohibiting <b>لا</b> put it into jazm (sukūn): لَمْ negates the past ("did not"), and لا forbids ("do not!").',
      bn: 'বর্তমান ক্রিয়া (মুদারি‘) সাধারণত ‑u-তে শেষ হয়। কিছু অব্যয় তা বদলায়। <b>لَنْ</b> ও <b>أَنْ</b> একে নসব (‑a) করে: لَنْ = "কখনো করবে না" (ভবিষ্যৎ)। <b>لَمْ</b> ও নিষেধের <b>لا</b> একে জযম (সুকূন) করে: لَمْ অতীত নাকচ করে ("করেনি"), আর لا নিষেধ করে ("করো না!")।',
    },
    examples: [
      { ref: '2:80', trans: { en: 'The Fire will never touch us…', bn: 'আগুন আমাদের কখনো স্পর্শ করবে না…' },
        note: { en: 'لَنْ ("never") puts تَمَسَّ into naṣb and points to the future.', bn: 'لَنْ ("কখনো না") تَمَسَّ-কে নসব করে ও ভবিষ্যৎ বোঝায়।' },
        words: [
          { ar: 'لَن', en: 'never', bn: 'কখনো না', hl: true },
          { ar: 'تَمَسَّنَا', en: 'will touch us', bn: 'আমাদের স্পর্শ করবে' },
          { ar: 'ٱلنَّارُ', en: 'the Fire', bn: 'আগুন' },
        ] },
      { ref: '112:3', trans: { en: 'He did not beget…', bn: 'তিনি জন্ম দেননি…' },
        note: { en: 'لَمْ + present يَلِدْ (in jazm) gives a PAST negation.', bn: 'لَمْ + বর্তমান يَلِدْ (জযমে) অতীত নেতিবাচক অর্থ দেয়।' },
        words: [
          { ar: 'لَمْ', en: 'not (did)', bn: 'নি', hl: true },
          { ar: 'يَلِدْ', en: 'He beget', bn: 'তিনি জন্ম দেন' },
        ] },
      { ref: '93:9', trans: { en: 'As for the orphan, do not oppress (him).', bn: 'সুতরাং এতিমকে দমন করো না।' },
        note: { en: 'Prohibiting لا puts تَقْهَرْ into jazm: "do not oppress".', bn: 'নিষেধের لا تَقْهَرْ-কে জযম করে: "দমন করো না"।' },
        words: [
          { ar: 'ٱلْيَتِيمَ', en: 'the orphan', bn: 'এতিমকে' },
          { ar: 'فَلَا', en: 'so do not', bn: 'সুতরাং না' },
          { ar: 'تَقْهَرْ', en: 'oppress', bn: 'দমন করো', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'لَنْ before a present verb (as in لَن تَمَسَّنَا) means…', bn: 'বর্তমান ক্রিয়ার আগে لَنْ (যেমন لَن تَمَسَّنَا) মানে…' },
      options: [{ en: 'did not (past)', bn: 'করেনি (অতীত)' }, { en: 'will never (future)', bn: 'কখনো করবে না (ভবিষ্যৎ)' }, { en: 'a command', bn: 'আদেশ' }], answer: 1,
      explain: { en: 'لَنْ negates the future emphatically: "will never…", and makes the verb naṣb.', bn: 'لَنْ জোরালোভাবে ভবিষ্যৎ নাকচ করে: "কখনো করবে না", এবং ক্রিয়াকে নসব করে।' },
    },
  },
  {
    id: 'participle', unit: 'forms', icon: '🎭',
    title: { en: 'Active & passive participle (ism al-fāʿil / ism al-mafʿūl)', bn: 'কর্তৃবাচক ও কর্মবাচক বিশেষণ (ইসমুল ফা‘িল / ইসমুল মাফ‘ূল)' },
    concept: {
      en: 'From a verb, Arabic builds two describing nouns. The <b>active participle</b> (ism al-fāʿil, pattern فَاعِل) names the DOER: مَالِك ("owner"). The <b>passive participle</b> (ism al-mafʿūl, pattern مَفْعُول) names the one the action falls upon: مَغْضُوب ("one earned anger upon").',
      bn: 'ক্রিয়া থেকে আরবি দুটি বর্ণনাকারী বিশেষ্য গঠন করে। <b>কর্তৃবাচক বিশেষণ</b> (ইসমুল ফা‘িল, ছাঁচ فَاعِل) কর্তাকে বোঝায়: مَالِك ("মালিক")। <b>কর্মবাচক বিশেষণ</b> (ইসমুল মাফ‘ূল, ছাঁচ مَفْعُول) যার উপর কাজ পড়ে তাকে বোঝায়: مَغْضُوب ("যার উপর ক্রোধ হয়েছে")।',
    },
    examples: [
      { ref: '1:4', trans: { en: 'Master of the Day of Judgement.', bn: 'বিচার দিনের মালিক।' },
        note: { en: 'مَٰلِك (pattern فَاعِل) is an active participle — "the one who owns".', bn: 'مَٰلِك (ছাঁচ فَاعِل) কর্তৃবাচক বিশেষণ — "যিনি মালিক"।' },
        words: [
          { ar: 'مَٰلِكِ', en: 'Master of', bn: 'মালিক', hl: true },
          { ar: 'يَوْمِ', en: 'the Day of', bn: 'দিনের' },
          { ar: 'ٱلدِّينِ', en: 'Judgement', bn: 'বিচার' },
        ] },
      { ref: '1:7', trans: { en: '…not of those who earned anger…', bn: '…যাদের উপর ক্রোধ হয়েছে তাদের নয়…' },
        note: { en: 'مَغْضُوب (pattern مَفْعُول) is a passive participle — the receiver of the action.', bn: 'مَغْضُوب (ছাঁচ مَفْعُول) কর্মবাচক বিশেষণ — কাজের গ্রহীতা।' },
        words: [
          { ar: 'غَيْرِ', en: 'not (of)', bn: 'নয়' },
          { ar: 'ٱلْمَغْضُوبِ', en: 'those angered upon', bn: 'যাদের উপর ক্রোধ', hl: true },
          { ar: 'عَلَيْهِمْ', en: 'upon them', bn: 'তাদের উপর' },
        ] },
    ],
    practice: {
      q: { en: 'مَغْضُوب ("the one angered upon") names the RECEIVER of the action. It is an…', bn: 'مَغْضُوب ("যার উপর ক্রোধ") কাজের গ্রহীতাকে বোঝায়। এটি একটি…' },
      options: [{ en: 'active participle (fāʿil)', bn: 'কর্তৃবাচক (ফা‘িল)' }, { en: 'passive participle (mafʿūl)', bn: 'কর্মবাচক (মাফ‘ূল)' }, { en: 'verb (fiʿl)', bn: 'ক্রিয়া (ফি‘ল)' }], answer: 1,
      explain: { en: 'The مَفْعُول pattern names the one an action is done TO — a passive participle.', bn: 'مَفْعُول ছাঁচ যার উপর কাজ করা হয় তাকে বোঝায় — কর্মবাচক বিশেষণ।' },
    },
  },
  {
    id: 'masdar', unit: 'forms', icon: '📜',
    title: { en: 'The verbal noun (maṣdar)', bn: 'ক্রিয়াবাচক বিশেষ্য (মাসদার)' },
    concept: {
      en: 'The <b>maṣdar</b> is the noun of an action — "the doing" itself, much like English "-ing" or "-tion": حَمْد ("praising / praise"), عِلْم ("knowing / knowledge"). It names the action with no doer and no time attached.',
      bn: '<b>মাসদার</b> হলো কাজের বিশেষ্য — "করা"টাই, অনেকটা ইংরেজি "-ing/-tion"-এর মতো: حَمْد ("প্রশংসা করা / প্রশংসা"), عِلْم ("জানা / জ্ঞান")। এটি কর্তা বা সময় ছাড়াই কাজকে নাম দেয়।',
    },
    examples: [
      { ref: '1:2', trans: { en: 'All praise is for Allah…', bn: 'সকল প্রশংসা আল্লাহর…' },
        note: { en: 'ٱلْحَمْد ("praise") is a maṣdar — the action of praising as a noun.', bn: 'ٱلْحَمْد ("প্রশংসা") একটি মাসদার — প্রশংসা করার কাজ বিশেষ্য রূপে।' },
        words: [
          { ar: 'ٱلْحَمْدُ', en: 'the praise', bn: 'সকল প্রশংসা', hl: true },
          { ar: 'لِلَّهِ', en: 'for Allah', bn: 'আল্লাহর জন্য' },
        ] },
      { ref: '103:2', trans: { en: 'Indeed mankind is in loss.', bn: 'নিশ্চয় মানুষ ক্ষতির মধ্যে।' },
        note: { en: 'خُسْر ("loss") is a maṣdar — the act/state of losing.', bn: 'خُسْر ("ক্ষতি") একটি মাসদার — হারানোর কাজ/অবস্থা।' },
        words: [
          { ar: 'إِنَّ', en: 'Indeed', bn: 'নিশ্চয়' },
          { ar: 'ٱلْإِنسَٰنَ', en: 'mankind', bn: 'মানুষ' },
          { ar: 'لَفِى', en: 'is surely in', bn: 'নিশ্চিতভাবে মধ্যে' },
          { ar: 'خُسْرٍ', en: 'loss', bn: 'ক্ষতি', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'ٱلْحَمْد ("praise") names the action itself, with no doer. Such a verbal noun is a…', bn: 'ٱلْحَمْد ("প্রশংসা") কর্তা ছাড়াই কাজকে নাম দেয়। এমন ক্রিয়াবাচক বিশেষ্য হলো…' },
      options: [{ en: 'maṣdar', bn: 'মাসদার' }, { en: 'fāʿil', bn: 'ফা‘িল' }, { en: 'fiʿl', bn: 'ফি‘ল' }], answer: 0,
      explain: { en: 'The noun that names an action itself is the maṣdar (verbal noun).', bn: 'যে বিশেষ্য কাজটিকেই নাম দেয় তা হলো মাসদার (ক্রিয়াবাচক বিশেষ্য)।' },
    },
  },
  {
    id: 'tafdil', unit: 'forms', icon: '🏆',
    title: { en: 'Comparative & superlative (ism at-tafḍīl)', bn: 'তুলনা ও শ্রেষ্ঠত্ব (ইসমুত-তাফদীল)' },
    concept: {
      en: 'To say "more" or "most", Arabic uses the pattern <b>أَفْعَل</b> (ism at-tafḍīl): أَكْبَر ("greater / greatest"), أَحْسَن ("better / best"), أَعْلَم ("more knowing"). The single form serves for both "more" and "most" depending on context.',
      bn: '"অধিক" বা "সর্বাধিক" বলতে আরবি <b>أَفْعَل</b> ছাঁচ (ইসমুত-তাফদীল) ব্যবহার করে: أَكْبَر ("বৃহত্তর / বৃহত্তম"), أَحْسَن ("উত্তম / উত্তমতম"), أَعْلَم ("অধিক জ্ঞাত")। প্রসঙ্গভেদে একই রূপ "অধিক" ও "সর্বাধিক" দুটোই বোঝায়।',
    },
    examples: [
      { ref: '95:4', trans: { en: 'We created man in the best form.', bn: 'আমরা মানুষকে সর্বোত্তম গঠনে সৃষ্টি করেছি।' },
        note: { en: 'أَحْسَن ("best", pattern أَفْعَل) is the superlative of حَسَن ("good").', bn: 'أَحْسَن ("সর্বোত্তম", ছাঁচ أَفْعَل) হলো حَسَن ("ভালো")-এর শ্রেষ্ঠত্ববাচক রূপ।' },
        words: [
          { ar: 'خَلَقْنَا', en: 'We created', bn: 'আমরা সৃষ্টি করেছি' },
          { ar: 'ٱلْإِنسَٰنَ', en: 'man', bn: 'মানুষকে' },
          { ar: 'فِىٓ', en: 'in', bn: 'মধ্যে' },
          { ar: 'أَحْسَنِ', en: 'the best', bn: 'সর্বোত্তম', hl: true },
          { ar: 'تَقْوِيمٍ', en: 'form', bn: 'গঠন' },
        ] },
    ],
    practice: {
      q: { en: 'The pattern أَفْعَل, as in أَحْسَن ("best"), expresses…', bn: 'أَفْعَل ছাঁচ, যেমন أَحْسَن ("সর্বোত্তম"), প্রকাশ করে…' },
      options: [{ en: 'the doer', bn: 'কর্তা' }, { en: 'comparison ("more / most")', bn: 'তুলনা ("অধিক / সর্বাধিক")' }, { en: 'negation', bn: 'নেতিবাচকতা' }], answer: 1,
      explain: { en: 'أَفْعَل is the ism at-tafḍīl — the comparative/superlative pattern.', bn: 'أَفْعَل হলো ইসমুত-তাফদীল — তুলনা/শ্রেষ্ঠত্বের ছাঁচ।' },
    },
  },
  {
    id: 'mubtada-khabar', unit: 'sentences', icon: '🧩',
    title: { en: 'Subject & predicate (mubtadaʾ & khabar)', bn: 'উদ্দেশ্য ও বিধেয় (মুবতাদা ও খবর)' },
    concept: {
      en: 'A nominal sentence has two pillars: the <b>mubtadaʾ</b> (the subject we speak about) and the <b>khabar</b> (the information about it). Both are usually in the rafʿ (‑u) case, and there is no separate word for "is" — it is understood. ٱللَّهُ ٱلصَّمَدُ = "Allah (mubtadaʾ) is the Eternal Refuge (khabar)".',
      bn: 'নাম-বাক্যের দুটি স্তম্ভ: <b>মুবতাদা</b> (যাকে নিয়ে বলা হয়, উদ্দেশ্য) ও <b>খবর</b> (তার সম্পর্কে তথ্য, বিধেয়)। দুটোই সাধারণত রফ‘ (‑u) অবস্থায় থাকে, এবং "is/হলো" এর আলাদা শব্দ নেই — তা উহ্য। ٱللَّهُ ٱلصَّمَدُ = "আল্লাহ (মুবতাদা) অমুখাপেক্ষী (খবর)"।',
    },
    examples: [
      { ref: '112:2', trans: { en: 'Allah is the Eternal Refuge.', bn: 'আল্লাহ অমুখাপেক্ষী।' },
        note: { en: 'ٱللَّهُ is the mubtadaʾ (subject); ٱلصَّمَدُ is the khabar (predicate). No "is" is written.', bn: 'ٱللَّهُ মুবতাদা (উদ্দেশ্য); ٱلصَّمَدُ খবর (বিধেয়)। কোনো "is" লেখা হয় না।' },
        words: [
          { ar: 'ٱللَّهُ', en: 'Allah (subject)', bn: 'আল্লাহ (উদ্দেশ্য)', hl: true },
          { ar: 'ٱلصَّمَدُ', en: 'the Eternal Refuge (predicate)', bn: 'অমুখাপেক্ষী (বিধেয়)', hl: true },
        ] },
      { ref: '2:163', trans: { en: 'And your God is One God…', bn: 'আর তোমাদের ইলাহ এক ইলাহ…' },
        note: { en: 'إِلَٰهُكُمْ is the mubtadaʾ; إِلَٰهٌ (وَٰحِدٌ) is the khabar.', bn: 'إِلَٰهُكُمْ মুবতাদা; إِلَٰهٌ (وَٰحِدٌ) খবর।' },
        words: [
          { ar: 'وَإِلَٰهُكُمْ', en: 'And your God (subject)', bn: 'আর তোমাদের ইলাহ (উদ্দেশ্য)', hl: true },
          { ar: 'إِلَٰهٌ', en: '(is) a God (predicate)', bn: 'ইলাহ (বিধেয়)', hl: true },
          { ar: 'وَٰحِدٌ', en: 'One', bn: 'এক' },
        ] },
    ],
    practice: {
      q: { en: 'In ٱللَّهُ ٱلصَّمَدُ, which word is the mubtadaʾ (the subject we speak about)?', bn: 'ٱللَّهُ ٱلصَّمَدُ-তে কোন শব্দটি মুবতাদা (উদ্দেশ্য)?' },
      options: ['ٱللَّهُ', 'ٱلصَّمَدُ'], answer: 0,
      explain: { en: 'ٱللَّهُ is the mubtadaʾ; ٱلصَّمَدُ is the khabar telling us about it.', bn: 'ٱللَّهُ মুবতাদা; ٱلصَّمَدُ খবর, যা তার সম্পর্কে জানায়।' },
    },
  },
  {
    id: 'objects', unit: 'sentences', icon: '🎯',
    title: { en: 'The object (al-mafʿūl bihi)', bn: 'কর্ম (আল-মাফ‘ূল বিহি)' },
    concept: {
      en: 'In a verbal sentence the <b>mafʿūl bihi</b> is the thing the action falls upon — the direct object — and it takes the naṣb (‑a) case. عَلَّمَ ٱلْقُرْءَانَ = "He taught THE QURAN"; ٱلْقُرْءَانَ is the manṣūb object.',
      bn: 'ক্রিয়া-বাক্যে <b>মাফ‘ূল বিহি</b> হলো যার উপর কাজ পড়ে — সরাসরি কর্ম — এবং তা নসব (‑a) অবস্থায় থাকে। عَلَّمَ ٱلْقُرْءَانَ = "তিনি কুরআন শিক্ষা দিয়েছেন"; ٱلْقُرْءَانَ মানসূব কর্ম।',
    },
    examples: [
      { ref: '55:2', trans: { en: 'He taught the Quran.', bn: 'তিনি কুরআন শিক্ষা দিয়েছেন।' },
        note: { en: 'ٱلْقُرْءَانَ ends in ‑a (naṣb) because it is the object of عَلَّمَ.', bn: 'ٱلْقُرْءَانَ ‑a (নসব)-তে শেষ কারণ এটি عَلَّمَ-এর কর্ম।' },
        words: [
          { ar: 'عَلَّمَ', en: 'He taught', bn: 'তিনি শিক্ষা দিয়েছেন' },
          { ar: 'ٱلْقُرْءَانَ', en: 'the Quran (object)', bn: 'কুরআন (কর্ম)', hl: true },
        ] },
      { ref: '108:1', trans: { en: 'Indeed, We have given you al-Kawthar.', bn: 'নিশ্চয় আমরা তোমাকে কাউসার দিয়েছি।' },
        note: { en: 'ٱلْكَوْثَرَ is the manṣūb object of أَعْطَيْنَا.', bn: 'ٱلْكَوْثَرَ হলো أَعْطَيْنَا-এর মানসূব কর্ম।' },
        words: [
          { ar: 'أَعْطَيْنَٰكَ', en: 'We gave you', bn: 'আমরা তোমাকে দিয়েছি' },
          { ar: 'ٱلْكَوْثَرَ', en: 'al-Kawthar (object)', bn: 'কাউসার (কর্ম)', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'The direct object (mafʿūl bihi), like ٱلْقُرْءَانَ, is in which case?', bn: 'সরাসরি কর্ম (মাফ‘ূল বিহি), যেমন ٱلْقُرْءَانَ, কোন অবস্থায়?' },
      options: [{ en: 'rafʿ', bn: 'রফ‘' }, { en: 'naṣb (accusative)', bn: 'নসব' }, { en: 'jarr', bn: 'জর' }], answer: 1,
      explain: { en: 'The direct object takes the naṣb (accusative, ‑a) case.', bn: 'সরাসরি কর্ম নসব (‑a) অবস্থা নেয়।' },
    },
  },
  {
    id: 'inna-sisters', unit: 'particles', icon: '❕',
    title: { en: 'إِنَّ and her sisters', bn: 'إِنَّ ও তার বোনেরা' },
    concept: {
      en: '<b>إِنَّ</b> ("indeed / truly") and similar particles (أَنَّ, كَأَنَّ, لَٰكِنَّ, لَعَلَّ) enter a nominal sentence and put the subject into the naṣb (‑a) case, while the predicate stays rafʿ. إِنَّ adds strong emphasis: "truly…".',
      bn: '<b>إِنَّ</b> ("নিশ্চয়/সত্যিই") ও অনুরূপ অব্যয় (أَنَّ, كَأَنَّ, لَٰكِنَّ, لَعَلَّ) নাম-বাক্যে প্রবেশ করে উদ্দেশ্যকে নসব (‑a) করে, আর বিধেয় রফ‘ থাকে। إِنَّ জোরালো তাগিদ যোগ করে: "সত্যিই…"।',
    },
    examples: [
      { ref: '103:2', trans: { en: 'Indeed, mankind is in loss.', bn: 'নিশ্চয় মানুষ ক্ষতির মধ্যে।' },
        note: { en: 'After إِنَّ, the subject ٱلْإِنسَٰنَ takes ‑a (naṣb).', bn: 'إِنَّ-এর পরে উদ্দেশ্য ٱلْإِنسَٰنَ ‑a (নসব) নেয়।' },
        words: [
          { ar: 'إِنَّ', en: 'Indeed', bn: 'নিশ্চয়', hl: true },
          { ar: 'ٱلْإِنسَٰنَ', en: 'mankind (naṣb)', bn: 'মানুষ (নসব)', hl: true },
          { ar: 'لَفِى', en: 'is surely in', bn: 'নিশ্চিতভাবে মধ্যে' },
          { ar: 'خُسْرٍ', en: 'loss', bn: 'ক্ষতি' },
        ] },
      { ref: '108:1', trans: { en: 'Indeed, We have given you al-Kawthar.', bn: 'নিশ্চয় আমরা তোমাকে কাউসার দিয়েছি।' },
        note: { en: 'إِنَّآ = إِنَّ + نَا ("we") — the same emphatic particle with an attached pronoun.', bn: 'إِنَّآ = إِنَّ + نَا ("আমরা") — একই তাগিদ-অব্যয়ে যুক্ত সর্বনাম।' },
        words: [
          { ar: 'إِنَّآ', en: 'Indeed We', bn: 'নিশ্চয় আমরা', hl: true },
          { ar: 'أَعْطَيْنَٰكَ', en: 'have given you', bn: 'তোমাকে দিয়েছি' },
          { ar: 'ٱلْكَوْثَرَ', en: 'al-Kawthar', bn: 'কাউসার' },
        ] },
    ],
    practice: {
      q: { en: 'After إِنَّ, the subject noun (like ٱلْإِنسَٰنَ) changes to which case?', bn: 'إِنَّ-এর পরে উদ্দেশ্য বিশেষ্য (যেমন ٱلْإِنسَٰنَ) কোন অবস্থায় বদলায়?' },
      options: [{ en: 'rafʿ', bn: 'রফ‘' }, { en: 'naṣb (accusative)', bn: 'নসব' }, { en: 'jarr', bn: 'জর' }], answer: 1,
      explain: { en: 'إِنَّ and her sisters make the subject naṣb while the predicate stays rafʿ.', bn: 'إِنَّ ও তার বোনেরা উদ্দেশ্যকে নসব করে, বিধেয় রফ‘ থাকে।' },
    },
  },
  {
    id: 'kana-sisters', unit: 'particles', icon: '🔄',
    title: { en: 'كَانَ and her sisters', bn: 'كَانَ ও তার বোনেরা' },
    concept: {
      en: '<b>كَانَ</b> ("was / is") and her sisters (أَصْبَحَ, صَارَ, لَيْسَ…) enter a nominal sentence: they keep the subject in rafʿ but push the predicate (khabar) into naṣb (‑a). كَانَ … مَرِيضًا = "he was sick" — مَرِيضًا is the manṣūb predicate.',
      bn: '<b>كَانَ</b> ("ছিল / আছে") ও তার বোনেরা (أَصْبَحَ, صَارَ, لَيْسَ…) নাম-বাক্যে প্রবেশ করে: উদ্দেশ্যকে রফ‘ রাখে কিন্তু বিধেয় (খবর)-কে নসব (‑a) করে। كَانَ … مَرِيضًا = "সে অসুস্থ ছিল" — مَرِيضًا মানসূব বিধেয়।',
    },
    examples: [
      { ref: '2:184', trans: { en: 'So whoever among you is sick…', bn: 'সুতরাং তোমাদের মধ্যে যে অসুস্থ…' },
        note: { en: 'كَانَ makes its predicate مَرِيضًا take ‑a (naṣb).', bn: 'كَانَ তার বিধেয় مَرِيضًا-কে ‑a (নসব) করে।' },
        words: [
          { ar: 'فَمَن', en: 'So whoever', bn: 'সুতরাং যে' },
          { ar: 'كَانَ', en: 'is / was', bn: 'ছিল', hl: true },
          { ar: 'مِنكُم', en: 'among you', bn: 'তোমাদের মধ্যে' },
          { ar: 'مَّرِيضًا', en: 'sick (naṣb)', bn: 'অসুস্থ (নসব)', hl: true },
        ] },
      { ref: '112:4', trans: { en: 'And there is none comparable to Him.', bn: 'আর তাঁর সমতুল্য কেউ নেই।' },
        note: { en: 'يَكُن (from كَانَ) makes كُفُوًا ("comparable") naṣb.', bn: 'يَكُن (كَانَ থেকে) كُفُوًا ("সমতুল্য")-কে নসব করে।' },
        words: [
          { ar: 'وَلَمْ', en: 'And not', bn: 'আর নেই' },
          { ar: 'يَكُن', en: 'is', bn: 'হয়' },
          { ar: 'لَّهُۥ', en: 'for Him', bn: 'তাঁর' },
          { ar: 'كُفُوًا', en: 'comparable (naṣb)', bn: 'সমতুল্য (নসব)', hl: true },
          { ar: 'أَحَدٌۢ', en: 'anyone', bn: 'কেউ' },
        ] },
    ],
    practice: {
      q: { en: 'كَانَ puts the PREDICATE (khabar), like مَرِيضًا, into which case?', bn: 'كَانَ বিধেয় (খবর), যেমন مَرِيضًا, কোন অবস্থায় নেয়?' },
      options: [{ en: 'rafʿ', bn: 'রফ‘' }, { en: 'naṣb (accusative)', bn: 'নসব' }, { en: 'jarr', bn: 'জর' }], answer: 1,
      explain: { en: 'كَانَ keeps the subject rafʿ but makes the predicate naṣb.', bn: 'كَانَ উদ্দেশ্য রফ‘ রাখে কিন্তু বিধেয় নসব করে।' },
    },
  },
  {
    id: 'vocative', unit: 'particles', icon: '📣',
    title: { en: 'Calling out — the vocative (yā an-nidāʾ)', bn: 'সম্বোধন — নিদা (يا)' },
    concept: {
      en: 'To address or call someone, Arabic places <b>يَا</b> ("O…") before the name: يَا رَبِّ ("O my Lord"). For a definite noun ("the…") the longer form يَٰأَيُّهَا is used: يَٰأَيُّهَا ٱلَّذِينَ ءَامَنُوا ("O you who believe").',
      bn: 'কাউকে সম্বোধন বা ডাকতে আরবি নামের আগে <b>يَا</b> ("হে…") বসায়: يَا رَبِّ ("হে আমার রব")। নির্দিষ্ট বিশেষ্যের ("the…") জন্য দীর্ঘ রূপ يَٰأَيُّهَا ব্যবহৃত হয়: يَٰأَيُّهَا ٱلَّذِينَ ءَامَنُوا ("হে ঈমানদারগণ")।',
    },
    examples: [
      { ref: '109:1', trans: { en: 'Say, "O disbelievers!"', bn: 'বলো, "হে কাফিরগণ!"' },
        note: { en: 'يَٰٓأَيُّهَا is the vocative "O…", calling ٱلْكَٰفِرُونَ.', bn: 'يَٰٓأَيُّهَا হলো সম্বোধন "হে…", ٱلْكَٰفِرُونَ-কে ডাকছে।' },
        words: [
          { ar: 'قُلْ', en: 'Say', bn: 'বলো' },
          { ar: 'يَٰٓأَيُّهَا', en: 'O', bn: 'হে', hl: true },
          { ar: 'ٱلْكَٰفِرُونَ', en: 'disbelievers', bn: 'কাফিরগণ' },
        ] },
    ],
    practice: {
      q: { en: 'The particle يَا (as in يَٰأَيُّهَا) is used to…', bn: 'يَا অব্যয় (যেমন يَٰأَيُّهَا) ব্যবহৃত হয়…' },
      options: [{ en: 'negate', bn: 'নাকচ করতে' }, { en: 'call / address someone', bn: 'কাউকে ডাকতে/সম্বোধন করতে' }, { en: 'ask a question', bn: 'প্রশ্ন করতে' }], answer: 1,
      explain: { en: 'يَا is the particle of calling (nidāʾ) — "O…!"', bn: 'يَا হলো সম্বোধনের (নিদা) অব্যয় — "হে…!"' },
    },
  },
  {
    id: 'atf', unit: 'particles', icon: '➕',
    title: { en: 'Connectors (ḥurūf al-ʿaṭf: وَ، فَ، ثُمَّ)', bn: 'সংযোজক (হুরুফুল আতফ: وَ، فَ، ثُمَّ)' },
    concept: {
      en: 'Conjunctions join words and clauses. <b>وَ</b> = "and" (simple joining), <b>فَ</b> = "and so / then" (an immediate result or sequence), <b>ثُمَّ</b> = "then" (after a gap). The joined word shares the grammar of the first.',
      bn: 'সংযোজক শব্দ ও বাক্যাংশ জোড়ে। <b>وَ</b> = "এবং" (সাধারণ সংযোগ), <b>فَ</b> = "অতঃপর / তখন" (তাৎক্ষণিক ফল বা ধারাবাহিকতা), <b>ثُمَّ</b> = "তারপর" (বিরতির পরে)। যুক্ত শব্দ প্রথমটির ব্যাকরণ অনুসরণ করে।',
    },
    examples: [
      { ref: '108:2', trans: { en: 'So pray to your Lord and sacrifice.', bn: 'অতএব তোমার রবের উদ্দেশ্যে সালাত পড়ো ও কুরবানি করো।' },
        note: { en: 'فَ ("so") on فَصَلِّ shows result; وَ ("and") on وَٱنْحَرْ joins the second command.', bn: 'فَصَلِّ-এর فَ ("অতএব") ফল দেখায়; وَٱنْحَرْ-এর وَ ("ও") দ্বিতীয় আদেশ জোড়ে।' },
        words: [
          { ar: 'فَصَلِّ', en: 'So pray', bn: 'অতএব সালাত পড়ো', hl: true },
          { ar: 'لِرَبِّكَ', en: 'to your Lord', bn: 'তোমার রবের জন্য' },
          { ar: 'وَٱنْحَرْ', en: 'and sacrifice', bn: 'ও কুরবানি করো', hl: true },
        ] },
      { ref: '95:1', trans: { en: 'By the fig and the olive.', bn: 'শপথ ডুমুর ও জলপাইয়ের।' },
        note: { en: 'وَ ("and") joins ٱلزَّيْتُون to ٱلتِّين — two nouns in the same case.', bn: 'وَ ("ও") ٱلزَّيْتُون-কে ٱلتِّين-এর সাথে জোড়ে — একই অবস্থার দুই বিশেষ্য।' },
        words: [
          { ar: 'وَٱلتِّينِ', en: 'By the fig', bn: 'শপথ ডুমুরের' },
          { ar: 'وَٱلزَّيْتُونِ', en: 'and the olive', bn: 'ও জলপাইয়ের', hl: true },
        ] },
    ],
    practice: {
      q: { en: 'The connector فَ (as in فَصَلِّ) adds the sense of…', bn: 'সংযোজক فَ (যেমন فَصَلِّ) কোন অর্থ যোগ করে…' },
      options: [{ en: 'and so / then (result)', bn: 'অতঃপর / তখন (ফল)' }, { en: 'or', bn: 'অথবা' }, { en: 'not', bn: 'না' }], answer: 0,
      explain: { en: 'فَ links with a sense of immediate result or sequence: "and so…".', bn: 'فَ তাৎক্ষণিক ফল বা ধারাবাহিকতা বোঝায়: "অতঃপর…"।' },
    },
  },
  {
    id: 'oath', unit: 'particles', icon: '🤝',
    title: { en: 'The oath (wāw al-qasam)', bn: 'শপথ (ওয়াও আল-কসম)' },
    concept: {
      en: 'Allah often opens a sūrah with an <b>oath</b> to draw attention, using the <b>wāw of oath</b> ("By…"). The noun after it is in the jarr case. وَٱلْعَصْرِ = "By time"; وَٱلْفَجْرِ = "By the dawn". Here the wāw is NOT "and".',
      bn: 'আল্লাহ প্রায়ই মনোযোগ আকর্ষণে সূরার শুরুতে <b>শপথ</b> করেন, <b>শপথের ওয়াও</b> ("শপথ…") দিয়ে। এর পরের বিশেষ্য জর অবস্থায় থাকে। وَٱلْعَصْرِ = "সময়ের শপথ"; وَٱلْفَجْرِ = "ভোরের শপথ"। এখানে ওয়াও "এবং" নয়।',
    },
    examples: [
      { ref: '103:1', trans: { en: 'By time.', bn: 'সময়ের শপথ।' },
        note: { en: 'The wāw of oath makes ٱلْعَصْر genitive (jarr).', bn: 'শপথের ওয়াও ٱلْعَصْر-কে জর করে।' },
        words: [ { ar: 'وَٱلْعَصْرِ', en: 'By time', bn: 'সময়ের শপথ', hl: true } ] },
      { ref: '89:1', trans: { en: 'By the dawn.', bn: 'ভোরের শপথ।' },
        note: { en: 'Another oath opening — وَ = "By", not "and".', bn: 'আরেকটি শপথ-সূচনা — وَ = "শপথ", "এবং" নয়।' },
        words: [ { ar: 'وَٱلْفَجْرِ', en: 'By the dawn', bn: 'ভোরের শপথ', hl: true } ] },
    ],
    practice: {
      q: { en: 'In وَٱلْعَصْرِ the wāw is not "and" but the wāw of…', bn: 'وَٱلْعَصْرِ-তে ওয়াও "এবং" নয়, বরং কীসের ওয়াও…' },
      options: [{ en: 'negation', bn: 'নাকচ' }, { en: 'oath ("By…")', bn: 'শপথ ("শপথ…")' }, { en: 'possession', bn: 'সম্বন্ধ' }], answer: 1,
      explain: { en: 'It is the wāw of oath (qasam): "By time…".', bn: 'এটি শপথের (কসম) ওয়াও: "সময়ের শপথ…"।' },
    },
  },
  {
    id: 'conditional', unit: 'particles', icon: '🔀',
    title: { en: 'Conditional style (إِنْ / مَنْ)', bn: 'শর্তবাচক রীতি (إِنْ / مَنْ)' },
    concept: {
      en: 'A condition links "if… then…". <b>إِنْ</b> = "if" and <b>مَنْ</b> = "whoever". Both are followed by two present verbs put into jazm: the condition, then its answer. مَن يَعْمَلْ … يَرَهُ = "whoever does … will see it".',
      bn: 'শর্ত "যদি… তবে…" জোড়ে। <b>إِنْ</b> = "যদি" আর <b>مَنْ</b> = "যে/যেই"। দুটোর পরেই দুটি বর্তমান ক্রিয়া জযমে আসে: শর্ত, তারপর তার উত্তর। مَن يَعْمَلْ … يَرَهُ = "যে করবে … সে তা দেখবে"।',
    },
    examples: [
      { ref: '99:7', trans: { en: 'So whoever does an atom\'s weight of good will see it.', bn: 'সুতরাং যে অণু পরিমাণ ভালো করবে সে তা দেখবে।' },
        note: { en: 'مَن ("whoever") + jazm verbs يَعْمَلْ (condition) and يَرَهُ (answer).', bn: 'مَن ("যে") + জযম-ক্রিয়া يَعْمَلْ (শর্ত) ও يَرَهُ (উত্তর)।' },
        words: [
          { ar: 'فَمَن', en: 'So whoever', bn: 'সুতরাং যে', hl: true },
          { ar: 'يَعْمَلْ', en: 'does', bn: 'করবে' },
          { ar: 'مِثْقَالَ', en: 'weight of', bn: 'পরিমাণ' },
          { ar: 'ذَرَّةٍ', en: 'an atom', bn: 'অণু' },
          { ar: 'خَيْرًا', en: 'good', bn: 'ভালো' },
          { ar: 'يَرَهُۥ', en: 'will see it', bn: 'সে তা দেখবে' },
        ] },
      { ref: '99:8', trans: { en: 'And whoever does an atom\'s weight of evil will see it.', bn: 'আর যে অণু পরিমাণ মন্দ করবে সে তা দেখবে।' },
        note: { en: 'The parallel مَن with شَرًّا ("evil") shows the same conditional structure.', bn: 'شَرًّا ("মন্দ") সহ সমান্তরাল مَن একই শর্ত-গঠন দেখায়।' },
        words: [
          { ar: 'وَمَن', en: 'And whoever', bn: 'আর যে', hl: true },
          { ar: 'يَعْمَلْ', en: 'does', bn: 'করবে' },
          { ar: 'مِثْقَالَ', en: 'weight of', bn: 'পরিমাণ' },
          { ar: 'ذَرَّةٍ', en: 'an atom', bn: 'অণু' },
          { ar: 'شَرًّا', en: 'evil', bn: 'মন্দ' },
          { ar: 'يَرَهُۥ', en: 'will see it', bn: 'সে তা দেখবে' },
        ] },
    ],
    practice: {
      q: { en: 'مَنْ used to begin a condition means…', bn: 'শর্ত শুরু করতে ব্যবহৃত مَنْ মানে…' },
      options: [{ en: 'in', bn: 'মধ্যে' }, { en: 'whoever', bn: 'যে / যেই' }, { en: 'not', bn: 'না' }], answer: 1,
      explain: { en: 'مَنْ here means "whoever" and starts a conditional sentence with jazm verbs.', bn: 'এখানে مَنْ মানে "যে/যেই" এবং জযম-ক্রিয়াসহ শর্ত-বাক্য শুরু করে।' },
    },
  },
];

/* ------------------------------------------------------------------ *
 * Grammar glossary. Each term: ar, translit, en, bn, and (where clean) *
 * a one-word Quranic example ex{ar, ref} verified from the data file.  *
 * ------------------------------------------------------------------ */
const QA_GLOSSARY = [
  { ar: 'اِسْم', translit: 'ism', en: 'Noun — a person, thing, place or idea.', bn: 'বিশেষ্য — ব্যক্তি, বস্তু, স্থান বা ধারণা।', ex: { ar: 'ٱلْكِتَٰبُ', ref: '2:2' } },
  { ar: 'فِعْل', translit: 'fiʿl', en: 'Verb — an action tied to a time.', bn: 'ক্রিয়া — সময়ের সাথে যুক্ত কাজ।', ex: { ar: 'نَعْبُدُ', ref: '1:5' } },
  { ar: 'حَرْف', translit: 'harf', en: 'Particle — a connector (in, to, and) with meaning only alongside other words.', bn: 'অব্যয় — সংযোজক (মধ্যে, জন্য, ও), যা অন্য শব্দের সাথে অর্থ দেয়।', ex: { ar: 'فِيهِ', ref: '2:2' } },
  { ar: 'إِعْرَاب', translit: 'iʿrāb', en: 'Case inflection — the change of a word\'s ending to show its role.', bn: 'এ‘রাব — ভূমিকা বোঝাতে শব্দের শেষ পরিবর্তন।' },
  { ar: 'رَفْع', translit: 'rafʿ', en: 'Nominative case (‑u), typically for the subject.', bn: 'রফ‘ (‑u), সাধারণত কর্তার জন্য।', ex: { ar: 'ٱلْحَمْدُ', ref: '1:2' } },
  { ar: 'نَصْب', translit: 'naṣb', en: 'Accusative case (‑a), typically for the object.', bn: 'নসব (‑a), সাধারণত কর্মের জন্য।', ex: { ar: 'ٱلْكَوْثَرَ', ref: '108:1' } },
  { ar: 'جَرّ', translit: 'jarr', en: 'Genitive case (‑i), after prepositions or in possession.', bn: 'জর (‑i), অব্যয়ের পরে বা সম্বন্ধে।', ex: { ar: 'ٱلْعَٰلَمِينَ', ref: '1:2' } },
  { ar: 'جَزْم', translit: 'jazm', en: 'Jussive — a present verb "cut short" (sukūn) after لَمْ, لا, etc.', bn: 'জযম — لَمْ, لا ইত্যাদির পরে বর্তমান ক্রিয়া সংক্ষিপ্ত (সুকূন)।', ex: { ar: 'يَلِدْ', ref: '112:3' } },
  { ar: 'إِضَافَة', translit: 'iḍāfah', en: 'Possessive construction: "X of Y".', bn: 'সম্বন্ধ গঠন: "X-এর Y"।', ex: { ar: 'يَوْمِ', ref: '1:4' } },
  { ar: 'مُبْتَدَأ', translit: 'mubtadaʾ', en: 'The subject of a nominal sentence (what we speak about).', bn: 'নাম-বাক্যের উদ্দেশ্য (যাকে নিয়ে বলা হয়)।', ex: { ar: 'ٱللَّهُ', ref: '112:2' } },
  { ar: 'خَبَر', translit: 'khabar', en: 'The predicate — the information about the subject.', bn: 'বিধেয় — উদ্দেশ্য সম্পর্কে তথ্য।', ex: { ar: 'ٱلصَّمَدُ', ref: '112:2' } },
  { ar: 'فَاعِل', translit: 'fāʿil', en: 'The doer / subject of a verb.', bn: 'কর্তা — ক্রিয়ার কর্তা।', ex: { ar: 'ٱللَّهُ', ref: '2:7' } },
  { ar: 'مَفْعُول بِهِ', translit: 'mafʿūl bihi', en: 'The direct object of a verb (naṣb).', bn: 'ক্রিয়ার সরাসরি কর্ম (নসব)।', ex: { ar: 'ٱلْقُرْءَانَ', ref: '55:2' } },
  { ar: 'مَصْدَر', translit: 'maṣdar', en: 'Verbal noun — the name of an action itself.', bn: 'মাসদার — কাজের নাম নিজেই।', ex: { ar: 'ٱلْحَمْدُ', ref: '1:2' } },
  { ar: 'وَزْن', translit: 'wazn', en: 'Pattern / form into which a root is cast.', bn: 'ওজন — যে ছাঁচে মূল ঢালা হয়।', ex: { ar: 'عَلَّمَ', ref: '55:2' } },
  { ar: 'ضَمِير', translit: 'ḍamīr', en: 'Pronoun (he, you, us…), detached or attached.', bn: 'সর্বনাম (সে, তুমি, আমরা…), বিচ্ছিন্ন বা যুক্ত।', ex: { ar: 'هُوَ', ref: '112:1' } },
  { ar: 'اِسْم الْفَاعِل', translit: 'ism al-fāʿil', en: 'Active participle (فَاعِل) — names the doer.', bn: 'কর্তৃবাচক বিশেষণ (فَاعِل) — কর্তাকে বোঝায়।', ex: { ar: 'مَٰلِكِ', ref: '1:4' } },
  { ar: 'اِسْم الْمَفْعُول', translit: 'ism al-mafʿūl', en: 'Passive participle (مَفْعُول) — names the receiver.', bn: 'কর্মবাচক বিশেষণ (مَفْعُول) — গ্রহীতাকে বোঝায়।', ex: { ar: 'ٱلْمَغْضُوبِ', ref: '1:7' } },
  { ar: 'اِسْم التَّفْضِيل', translit: 'ism at-tafḍīl', en: 'Comparative/superlative (أَفْعَل): "more / most".', bn: 'তুলনা/শ্রেষ্ঠত্ব (أَفْعَل): "অধিক / সর্বাধিক"।', ex: { ar: 'أَحْسَنِ', ref: '95:4' } },
  { ar: 'جُمْلَة اِسْمِيَّة', translit: 'jumla ismiyya', en: 'Nominal sentence — begins with a noun.', bn: 'নাম-বাক্য — বিশেষ্য দিয়ে শুরু।', ex: { ar: 'ٱللَّهُ', ref: '112:2' } },
  { ar: 'جُمْلَة فِعْلِيَّة', translit: 'jumla fiʿliyya', en: 'Verbal sentence — begins with a verb.', bn: 'ক্রিয়া-বাক্য — ক্রিয়া দিয়ে শুরু।', ex: { ar: 'ٱهْدِنَا', ref: '1:6' } },
  { ar: 'مَاضٍ', translit: 'māḍī', en: 'Past-tense verb (completed action).', bn: 'অতীত ক্রিয়া (সম্পন্ন কাজ)।', ex: { ar: 'أَنْعَمْتَ', ref: '1:7' } },
  { ar: 'مُضَارِع', translit: 'muḍāriʿ', en: 'Present/future-tense verb (ongoing action).', bn: 'বর্তমান/ভবিষ্যৎ ক্রিয়া (চলমান কাজ)।', ex: { ar: 'نَعْبُدُ', ref: '1:5' } },
  { ar: 'أَمْر', translit: 'amr', en: 'Command / imperative verb.', bn: 'আদেশ / অনুজ্ঞা ক্রিয়া।', ex: { ar: 'ٱهْدِنَا', ref: '1:6' } },
  { ar: 'تَاء مَرْبُوطَة', translit: 'tāʾ marbūṭa', en: 'The ة ending — the usual mark of a feminine noun.', bn: 'ة শেষ — স্ত্রীলিঙ্গ বিশেষ্যের সাধারণ চিহ্ন।', ex: { ar: 'رَحْمَةً', ref: '21:107' } },
  { ar: 'إِنَّ', translit: 'inna', en: 'Emphasis particle ("indeed"); makes the subject naṣb.', bn: 'তাগিদ-অব্যয় ("নিশ্চয়"); উদ্দেশ্যকে নসব করে।', ex: { ar: 'إِنَّ', ref: '103:2' } },
  { ar: 'جَمْع التَّكْسِير', translit: 'jamʿ at-taksīr', en: 'Broken plural — formed by reshaping the word.', bn: 'ভাঙা বহুবচন — শব্দ পুনর্গঠনে গঠিত।', ex: { ar: 'قُلُوبِهِمْ', ref: '2:7' } },
];

/* ------------------------------------------------------------------ *
 * Inline chrome strings (fallback used when t() has no key yet).      *
 * ------------------------------------------------------------------ */
const QA_UI = {
  qa_title:        { en: 'Learn Quranic Arabic', bn: 'কুরআনি আরবি শিখুন' },
  qa_subtitle:     { en: 'Learn the Arabic language through real Quranic verses — one grammar point at a time.', bn: 'বাস্তব কুরআনি আয়াতের মাধ্যমে আরবি ভাষা শিখুন — একবারে একটি ব্যাকরণ বিষয়।' },
  qa_progress:     { en: 'lessons learned', bn: 'পাঠ শেখা হয়েছে' },
  qa_lesson:       { en: 'Lesson', bn: 'পাঠ' },
  qa_of:           { en: 'of', bn: '/' },
  qa_concept:      { en: 'Concept', bn: 'ধারণা' },
  qa_example:      { en: 'Quranic example', bn: 'কুরআনি উদাহরণ' },
  qa_translation:  { en: 'Translation', bn: 'অনুবাদ' },
  qa_tap_ref:      { en: 'Tap the reference to open the full ayah', bn: 'পূর্ণ আয়াত খুলতে রেফারেন্সে ট্যাপ করুন' },
  qa_practice:     { en: 'Check yourself', bn: 'নিজেকে যাচাই করুন' },
  qa_correct:      { en: 'Correct!', bn: 'সঠিক!' },
  qa_incorrect:    { en: 'Not quite — try again.', bn: 'ঠিক হয়নি — আবার চেষ্টা করুন।' },
  qa_learned:      { en: 'Learned ✓', bn: 'শেখা হয়েছে ✓' },
  qa_mark_learned: { en: 'Marked as learned', bn: 'শেখা হিসেবে চিহ্নিত' },
  qa_prev:         { en: 'Previous', bn: 'পূর্ববর্তী' },
  qa_next:         { en: 'Next', bn: 'পরবর্তী' },
  qa_back:         { en: 'All lessons', bn: 'সব পাঠ' },
  qa_start:        { en: 'Start', bn: 'শুরু' },
  qa_review:       { en: 'Review', bn: 'পুনরালোচনা' },
  qa_retry:        { en: 'Try again', bn: 'আবার চেষ্টা' },
  qa_finish_title: { en: 'You finished the course! 🎉', bn: 'আপনি কোর্সটি সম্পন্ন করেছেন! 🎉' },
  qa_finish_desc:  { en: 'You have learned every lesson. Revisit any lesson to refresh.', bn: 'আপনি প্রতিটি পাঠ শিখেছেন। রিফ্রেশ করতে যেকোনো পাঠে ফিরে যান।' },
  qa_unavailable:  { en: 'Lessons could not be loaded.', bn: 'পাঠ লোড করা যায়নি।' },
  qa_units:        { en: 'Units', bn: 'ইউনিট' },
  qa_glossary:     { en: 'Glossary', bn: 'পরিভাষা' },
  qa_glossary_title: { en: 'Grammar glossary', bn: 'ব্যাকরণ পরিভাষা' },
  qa_glossary_sub: { en: 'Key Arabic grammar terms used in this course.', bn: 'এই কোর্সে ব্যবহৃত মূল আরবি ব্যাকরণ পরিভাষা।' },
  qa_search:       { en: 'Search terms…', bn: 'পরিভাষা খুঁজুন…' },
  qa_no_results:   { en: 'No matching terms.', bn: 'কোনো মিল পাওয়া যায়নি।' },
  qa_example_word: { en: 'Example', bn: 'উদাহরণ' },
  qa_unit_quiz:    { en: 'Unit review quiz', bn: 'ইউনিট রিভিউ কুইজ' },
  qa_final_quiz:   { en: 'Final review (all units)', bn: 'চূড়ান্ত রিভিউ (সব ইউনিট)' },
  qa_quiz:         { en: 'Review quiz', bn: 'রিভিউ কুইজ' },
  qa_question:     { en: 'Question', bn: 'প্রশ্ন' },
  qa_score:        { en: 'Score', bn: 'স্কোর' },
  qa_best:         { en: 'Best', bn: 'সেরা' },
  qa_quiz_done:    { en: 'Quiz complete!', bn: 'কুইজ সম্পন্ন!' },
  qa_your_score:   { en: 'Your score', bn: 'আপনার স্কোর' },
  qa_finish:       { en: 'Finish', bn: 'শেষ' },
  qa_continue:     { en: 'Continue', bn: 'পরবর্তী' },
  qa_close:        { en: 'Close', bn: 'বন্ধ' },
  qa_lessons_word: { en: 'lessons', bn: 'পাঠ' },
};

/* ------------------------------------------------------------------ *
 * View                                                                *
 * ------------------------------------------------------------------ */
class QuranicArabicView {
  constructor() {
    this.container = document.getElementById('quranic-arabic-container');
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? (appSettings.get('language') || 'en') : 'en';
    this.rendered = false;
    this.view = 'syllabus';      // 'syllabus' | 'lesson' | 'quiz' | 'glossary'
    this.current = 0;            // current lesson index (into ordered list)
    this.answer = null;         // { selected, correct } for the current practice
    this.quiz = null;           // active quiz state
    this.glossaryQuery = '';    // glossary search text
    this._ordered = null;       // cached ordered lesson list
    this.progress = this.loadProgress();

    window.addEventListener('tabChanged', (e) => {
      try { if (e && e.detail && e.detail.tabId === 'quranicarabic') this.render(); } catch (err) { /* ignore */ }
    });
    window.addEventListener('settingChanged', (e) => {
      try {
        if (e && e.detail && e.detail.key === 'language') {
          this.language = e.detail.value || 'en';
          if (this.rendered) this.render();
        }
      } catch (err) { /* ignore */ }
    });

    // One delegated click handler (survives innerHTML re-renders).
    if (this.container) {
      this.container.addEventListener('click', (e) => this.onClick(e));
      this.container.addEventListener('input', (e) => this.onInput(e));
    }
  }

  /* ---------- ordered lessons (sorted by unit order, stable within unit) ---------- */
  lessons() {
    if (this._ordered) return this._ordered;
    try {
      const rank = {};
      QA_UNITS.forEach((u, i) => { rank[u.id] = i; });
      this._ordered = QA_LESSONS
        .map((l, i) => ({ l, i }))
        .sort((a, b) => {
          const ra = (rank[a.l.unit] != null) ? rank[a.l.unit] : 99;
          const rb = (rank[b.l.unit] != null) ? rank[b.l.unit] : 99;
          return ra !== rb ? ra - rb : a.i - b.i;
        })
        .map(x => x.l);
    } catch (e) { this._ordered = QA_LESSONS.slice(); }
    return this._ordered;
  }
  unitLessons(unitId) { return this.lessons().filter(l => l.unit === unitId); }

  /* ---------- helpers ---------- */
  tt(key) {
    let v = key;
    try { if (typeof t === 'function') v = t(key, this.language); } catch (e) { v = key; }
    if (v && v !== key) return v;
    const entry = QA_UI[key];
    return entry ? (entry[this.language] || entry.en) : key;
  }
  L(obj) { if (!obj) return ''; return this.language === 'bn' ? (obj.bn || obj.en || '') : (obj.en || obj.bn || ''); }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  optText(o) { return typeof o === 'string' ? o : this.L(o); }

  loadProgress() {
    try {
      const raw = localStorage.getItem('lq_qarabic_progress');
      const o = raw ? JSON.parse(raw) : null;
      const p = (o && typeof o === 'object') ? o : {};
      if (!p.learned || typeof p.learned !== 'object') p.learned = {};
      if (!p.quiz || typeof p.quiz !== 'object') p.quiz = {};
      return p;
    } catch (e) { return { learned: {}, quiz: {} }; }
  }
  saveProgress() {
    try { localStorage.setItem('lq_qarabic_progress', JSON.stringify(this.progress)); } catch (e) { /* ignore */ }
  }
  isLearned(id) { return !!(this.progress.learned && this.progress.learned[id]); }
  markLearned(id) { if (!this.progress.learned) this.progress.learned = {}; if (!this.progress.learned[id]) { this.progress.learned[id] = true; this.saveProgress(); } }
  learnedCount() { try { return Object.keys(this.progress.learned || {}).filter(k => this.progress.learned[k]).length; } catch (e) { return 0; } }
  unitLearnedCount(unitId) { try { return this.unitLessons(unitId).filter(l => this.isLearned(l.id)).length; } catch (e) { return 0; } }
  bestQuiz(scopeId) { try { const v = this.progress.quiz && this.progress.quiz[scopeId]; return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (e) { return null; } }
  saveQuizScore(scopeId, pct) {
    try {
      if (!this.progress.quiz) this.progress.quiz = {};
      const prev = this.bestQuiz(scopeId);
      if (prev == null || pct > prev) { this.progress.quiz[scopeId] = pct; this.saveProgress(); }
    } catch (e) { /* ignore */ }
  }

  /* ---------- events ---------- */
  onClick(e) {
    const t0 = e.target;
    const refEl = t0.closest ? t0.closest('[data-qa-ref]') : null;
    if (refEl) {
      const ref = refEl.getAttribute('data-qa-ref');
      const word = refEl.getAttribute('data-qa-word') || null;
      try { if (typeof ayahModal !== 'undefined' && ayahModal && typeof ayahModal.open === 'function') ayahModal.open(ref, { word: word }); } catch (err) { /* ignore */ }
      return;
    }
    const openEl = t0.closest ? t0.closest('[data-qa-open]') : null;
    if (openEl) { this.openLesson(parseInt(openEl.getAttribute('data-qa-open'), 10)); return; }
    if (t0.closest && t0.closest('[data-qa-back]')) { this.toSyllabus(); return; }
    if (t0.closest && t0.closest('[data-qa-prev]')) { this.openLesson(this.current - 1); return; }
    if (t0.closest && t0.closest('[data-qa-next]')) { this.openLesson(this.current + 1); return; }
    if (t0.closest && t0.closest('[data-qa-retry]')) { this.answer = null; this.render(); return; }
    const optEl = t0.closest ? t0.closest('[data-qa-opt]') : null;
    if (optEl) { this.answerPractice(parseInt(optEl.getAttribute('data-qa-opt'), 10)); return; }

    // Syllabus / navigation
    const unitEl = t0.closest ? t0.closest('[data-qa-unit]') : null;
    if (unitEl) { this.scrollToUnit(unitEl.getAttribute('data-qa-unit')); return; }
    if (t0.closest && t0.closest('[data-qa-glossary]')) { this.view = 'glossary'; this.render(); return; }
    const quizEl = t0.closest ? t0.closest('[data-qa-quiz]') : null;
    if (quizEl) { this.startQuiz(quizEl.getAttribute('data-qa-quiz')); return; }

    // Quiz runner
    const qoptEl = t0.closest ? t0.closest('[data-qa-qopt]') : null;
    if (qoptEl) { this.answerQuiz(parseInt(qoptEl.getAttribute('data-qa-qopt'), 10)); return; }
    if (t0.closest && t0.closest('[data-qa-qnext]')) { this.nextQuiz(); return; }
    if (t0.closest && t0.closest('[data-qa-qretry]')) { if (this.quiz) this.startQuiz(this.quiz.scope); return; }
  }

  onInput(e) {
    try {
      const el = e.target;
      if (el && el.id === 'qa-gloss-search') { this.glossaryQuery = el.value || ''; this.filterGlossary(); }
    } catch (err) { /* ignore */ }
  }

  toSyllabus() { this.view = 'syllabus'; this.answer = null; this.quiz = null; this.render(); }

  openLesson(idx) {
    const list = this.lessons();
    if (idx < 0 || idx >= list.length) return;
    this.current = idx;
    this.view = 'lesson';
    this.answer = null;
    this.render();
    try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
  }

  scrollToUnit(unitId) {
    try {
      const el = this.container ? this.container.querySelector('#qa-unit-' + unitId) : null;
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) { /* ignore */ }
  }

  answerPractice(i) {
    const lesson = this.lessons()[this.current];
    if (!lesson || !lesson.practice) return;
    const correct = i === lesson.practice.answer;
    this.answer = { selected: i, correct: correct };
    if (correct) this.markLearned(lesson.id);
    this.render();
  }

  /* ---------- quiz ---------- */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const tmp = a[i]; a[i] = a[j]; a[j] = tmp; }
    return a;
  }

  startQuiz(scope) {
    try {
      let pool;
      if (scope === 'final') pool = this.lessons();
      else pool = this.unitLessons(scope);
      const qs = this.shuffle((pool || []).filter(l => l && l.practice).map(l => l.practice));
      const cap = scope === 'final' ? 8 : 5;
      this.quiz = { scope: scope, qs: qs.slice(0, Math.min(cap, qs.length)), idx: 0, score: 0, picked: null, done: false, saved: false };
      this.view = 'quiz';
      this.render();
      try { if (this.container && this.container.scrollIntoView) this.container.scrollIntoView({ block: 'start' }); } catch (e) { /* ignore */ }
    } catch (e) { this.toSyllabus(); }
  }

  answerQuiz(i) {
    const q = this.quiz;
    if (!q || q.done || q.picked != null) return;
    const cur = q.qs[q.idx];
    if (!cur) return;
    q.picked = i;
    if (i === cur.answer) q.score++;
    this.render();
  }

  nextQuiz() {
    const q = this.quiz;
    if (!q) return;
    if (q.idx + 1 < q.qs.length) { q.idx++; q.picked = null; }
    else {
      q.done = true;
      if (!q.saved) {
        const pct = q.qs.length ? Math.round((q.score / q.qs.length) * 100) : 0;
        this.saveQuizScore(q.scope, pct);
        q.saved = true;
      }
    }
    this.render();
  }

  /* ---------- render ---------- */
  render() {
    if (!this.container) return;
    this.rendered = true;
    try {
      if (!Array.isArray(QA_LESSONS) || !QA_LESSONS.length) {
        this.container.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-10">${this.esc(this.tt('qa_unavailable'))}</p>`;
        return;
      }
      let html;
      if (this.view === 'lesson') html = this.renderLesson();
      else if (this.view === 'quiz') html = this.renderQuiz();
      else if (this.view === 'glossary') html = this.renderGlossary();
      else html = this.renderSyllabus();
      this.container.innerHTML = html;
    } catch (e) {
      this.container.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400 py-10">${this.esc(this.tt('qa_unavailable'))}</p>`;
    }
  }

  renderSyllabus() {
    const list = this.lessons();
    const total = list.length;
    const done = this.learnedCount();
    const pct = total ? Math.round((done / total) * 100) : 0;
    const allDone = done >= total;

    // Units overview chips (jump + per-unit progress)
    const overview = QA_UNITS.map(unit => {
      const uTotal = this.unitLessons(unit.id).length;
      if (!uTotal) return '';
      const uDone = this.unitLearnedCount(unit.id);
      const full = uDone >= uTotal;
      return `
        <button type="button" data-qa-unit="${this.esc(unit.id)}"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${full ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300'} hover:border-primary transition-colors">
          <span aria-hidden="true">${this.esc(unit.icon)}</span>
          <span dir="auto">${this.esc(this.L(unit))}</span>
          <span class="opacity-70">${uDone}/${uTotal}</span>
        </button>`;
    }).join('');

    const units = QA_UNITS.map(unit => {
      const items = list.map((l, idx) => ({ l, idx })).filter(x => x.l.unit === unit.id);
      if (!items.length) return '';
      const uTotal = items.length;
      const uDone = this.unitLearnedCount(unit.id);
      const best = this.bestQuiz(unit.id);
      const cards = items.map(({ l, idx }) => {
        const learned = this.isLearned(l.id);
        return `
          <button type="button" data-qa-open="${idx}"
            class="group w-full text-left flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border ${learned ? 'border-emerald-300 dark:border-emerald-700' : 'border-gray-200 dark:border-gray-700'} hover:border-primary hover:shadow-md transition-all">
            <span class="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg text-lg ${learned ? 'bg-emerald-100 dark:bg-emerald-900/40' : 'bg-gray-100 dark:bg-gray-700'}" aria-hidden="true">${learned ? '✓' : this.esc(l.icon)}</span>
            <span class="flex-1 min-w-0">
              <span class="block font-semibold text-gray-800 dark:text-gray-100 truncate" dir="auto">${this.esc(this.L(l.title))}</span>
              <span class="block text-xs ${learned ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-400 dark:text-gray-500'}">${learned ? this.esc(this.tt('qa_learned')) : (this.esc(this.tt('qa_lesson')) + ' ' + (idx + 1))}</span>
            </span>
            <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary transition-colors" aria-hidden="true">›</span>
          </button>`;
      }).join('');
      return `
        <section id="qa-unit-${this.esc(unit.id)}" class="mb-7 scroll-mt-4">
          <div class="flex items-center justify-between gap-2 mb-3">
            <h3 class="flex items-center gap-2 text-base font-bold text-gray-700 dark:text-gray-200">
              <span aria-hidden="true">${this.esc(unit.icon)}</span><span dir="auto">${this.esc(this.L(unit))}</span>
              <span class="text-xs font-normal text-gray-400 dark:text-gray-500">${uDone}/${uTotal}</span>
            </h3>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">${cards}</div>
          <div class="mt-3 text-center">
            <button type="button" data-qa-quiz="${this.esc(unit.id)}"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 hover:bg-sky-200 dark:hover:bg-sky-900/60 transition-colors">
              📝 ${this.esc(this.tt('qa_unit_quiz'))}
              ${best != null ? `<span class="text-xs opacity-80">${this.esc(this.tt('qa_best'))} ${best}%</span>` : ''}
            </button>
          </div>
        </section>`;
    }).join('');

    const finalBest = this.bestQuiz('final');

    return `
      <div class="w-full max-w-4xl mx-auto">
        <div class="text-center mb-5">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">${this.esc(this.tt('qa_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-2xl mx-auto" dir="auto">${this.esc(this.tt('qa_subtitle'))}</p>
        </div>
        <div class="mb-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 border border-emerald-100 dark:border-gray-700">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold text-gray-700 dark:text-gray-200">${done} / ${total} ${this.esc(this.tt('qa_progress'))}</span>
            <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">${pct}%</span>
          </div>
          <div class="w-full h-2.5 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all" style="width:${pct}%"></div>
          </div>
          ${allDone ? `<p class="text-center text-sm font-semibold text-emerald-700 dark:text-emerald-400 mt-3">${this.esc(this.tt('qa_finish_title'))}</p>` : ''}
        </div>

        <div class="mb-6">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-wide text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_units'))}</span>
            <button type="button" data-qa-glossary
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors">
              📖 ${this.esc(this.tt('qa_glossary'))}
            </button>
          </div>
          <div class="flex flex-wrap gap-2">${overview}</div>
        </div>

        ${units}

        <div class="mt-2 mb-8 text-center">
          <button type="button" data-qa-quiz="final"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
            🎓 ${this.esc(this.tt('qa_final_quiz'))}
            ${finalBest != null ? `<span class="text-xs font-semibold opacity-90">${this.esc(this.tt('qa_best'))} ${finalBest}%</span>` : ''}
          </button>
        </div>
      </div>`;
  }

  renderWordRow(words) {
    return (words || []).map(w => `
      <span class="inline-flex flex-col items-center px-1.5 py-1 rounded-lg ${w.hl ? 'bg-emerald-100 dark:bg-emerald-900/40' : ''}">
        <span class="text-xl leading-snug ${w.hl ? 'text-emerald-700 dark:text-emerald-300 font-bold' : 'text-gray-800 dark:text-gray-100'}" dir="rtl">${this.esc(w.ar)}</span>
        <span class="text-[0.68rem] ${w.hl ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-gray-400 dark:text-gray-500'}" dir="auto">${this.esc(this.language === 'bn' ? (w.bn || w.en) : w.en)}</span>
      </span>`).join('');
  }

  renderExample(ex) {
    const arabic = (ex.words || []).map(w =>
      `<span class="${w.hl ? 'text-emerald-600 dark:text-emerald-400' : ''}">${this.esc(w.ar)}</span>`
    ).join(' ');
    const hlWord = (ex.words || []).find(w => w.hl);
    return `
      <div class="mb-4 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div class="p-4 bg-gray-50 dark:bg-gray-800/60 text-center">
          <p class="text-2xl sm:text-3xl leading-loose font-[500] text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">${arabic}</p>
        </div>
        <div class="p-4">
          <div class="flex flex-wrap items-start justify-center gap-1.5 mb-3" dir="rtl">${this.renderWordRow(ex.words)}</div>
          <p class="text-sm text-gray-600 dark:text-gray-300 text-center italic mb-3" dir="auto">“${this.esc(this.L(ex.trans))}”</p>
          ${ex.note ? `<p class="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 rounded-lg p-2.5 mb-3" dir="auto">💡 ${this.esc(this.L(ex.note))}</p>` : ''}
          <div class="text-center">
            <button type="button" data-qa-ref="${this.esc(ex.ref)}" ${hlWord ? `data-qa-word="${this.esc(hlWord.ar)}"` : ''}
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              📖 ${this.esc(ex.ref)} <span class="text-[0.65rem] opacity-70">↗</span>
            </button>
          </div>
        </div>
      </div>`;
  }

  renderPractice(lesson) {
    const p = lesson.practice;
    if (!p) return '';
    const answered = this.answer != null;
    const opts = (p.options || []).map((o, i) => {
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      let icon = '';
      if (answered) {
        if (i === p.answer) { cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'; icon = '✓'; }
        else if (i === this.answer.selected) { cls = 'bg-rose-50 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'; icon = '✕'; }
        else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'; }
      }
      return `
        <button type="button" ${answered ? 'disabled' : `data-qa-opt="${i}"`}
          class="w-full text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border ${cls} transition-all">
          <span dir="auto">${this.esc(this.optText(o))}</span>
          <span class="text-sm font-bold" aria-hidden="true">${icon}</span>
        </button>`;
    }).join('');

    let feedback = '';
    if (answered) {
      const ok = this.answer.correct;
      feedback = `
        <div class="mt-3 p-3 rounded-xl ${ok ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'}">
          <p class="font-semibold text-sm mb-1">${ok ? '🎉 ' + this.esc(this.tt('qa_correct')) : '🤔 ' + this.esc(this.tt('qa_incorrect'))}</p>
          <p class="text-xs leading-relaxed" dir="auto">${this.esc(this.L(p.explain))}</p>
          ${!ok ? `<button type="button" data-qa-retry class="mt-2 text-xs font-semibold underline">${this.esc(this.tt('qa_retry'))}</button>` : ''}
        </div>`;
    }

    return `
      <div class="mb-6 p-4 rounded-2xl bg-sky-50/60 dark:bg-gray-800/60 border border-sky-100 dark:border-gray-700">
        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">🧠</span><span>${this.esc(this.tt('qa_practice'))}</span>
        </h4>
        <p class="text-sm text-gray-700 dark:text-gray-200 mb-3" dir="auto">${this.esc(this.L(p.q))}</p>
        <div class="space-y-2">${opts}</div>
        ${feedback}
      </div>`;
  }

  renderLesson() {
    const list = this.lessons();
    const idx = this.current;
    const lesson = list[idx];
    if (!lesson) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const unit = QA_UNITS.find(u => u.id === lesson.unit);
    const learned = this.isLearned(lesson.id);
    const examples = (lesson.examples || []).map(ex => this.renderExample(ex)).join('');

    return `
      <div class="w-full max-w-3xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            ‹ ${this.esc(this.tt('qa_back'))}
          </button>
          <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_lesson'))} ${idx + 1} ${this.esc(this.tt('qa_of'))} ${list.length}</span>
        </div>

        <div class="mb-4">
          ${unit ? `<span class="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-2">${this.esc(unit.icon)} ${this.esc(this.L(unit))}</span>` : ''}
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2" dir="auto">
            <span aria-hidden="true">${this.esc(lesson.icon)}</span><span>${this.esc(this.L(lesson.title))}</span>
            ${learned ? `<span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 align-middle">${this.esc(this.tt('qa_learned'))}</span>` : ''}
          </h2>
        </div>

        <div class="mb-5 p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
            <span aria-hidden="true">📚</span><span>${this.esc(this.tt('qa_concept'))}</span>
          </h4>
          <p class="text-sm leading-relaxed text-gray-600 dark:text-gray-300" dir="auto">${this.L(lesson.concept)}</p>
        </div>

        <h4 class="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-200 mb-3">
          <span aria-hidden="true">🕋</span><span>${this.esc(this.tt('qa_example'))}</span>
          <span class="text-[0.68rem] font-normal text-gray-400 dark:text-gray-500">— ${this.esc(this.tt('qa_tap_ref'))}</span>
        </h4>
        ${examples}

        ${this.renderPractice(lesson)}

        <div class="flex items-center justify-between gap-3 mt-6">
          <button type="button" ${idx > 0 ? 'data-qa-prev' : 'disabled'}
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold ${idx > 0 ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600' : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'} transition-colors">
            ‹ ${this.esc(this.tt('qa_prev'))}
          </button>
          <button type="button" ${idx < list.length - 1 ? 'data-qa-next' : 'data-qa-back'}
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">
            ${idx < list.length - 1 ? this.esc(this.tt('qa_next')) + ' ›' : this.esc(this.tt('qa_back'))}
          </button>
        </div>
      </div>`;
  }

  /* ---------- glossary ---------- */
  glossaryMatch(item, q) {
    if (!q) return true;
    const hay = [item.translit, item.en, item.bn, item.ar].join(' ').toLowerCase();
    return hay.indexOf(q.toLowerCase()) >= 0;
  }

  filterGlossary() {
    try {
      const q = (this.glossaryQuery || '').trim().toLowerCase();
      const rows = this.container ? this.container.querySelectorAll('[data-qa-gterm]') : [];
      let shown = 0;
      rows.forEach((row) => {
        const hay = (row.getAttribute('data-qa-gterm') || '').toLowerCase();
        const match = !q || hay.indexOf(q) >= 0;
        row.classList.toggle('hidden', !match);
        if (match) shown++;
      });
      const empty = this.container ? this.container.querySelector('#qa-gloss-empty') : null;
      if (empty) empty.classList.toggle('hidden', shown !== 0);
    } catch (e) { /* ignore */ }
  }

  renderGlossary() {
    const q = (this.glossaryQuery || '').trim();
    const rows = QA_GLOSSARY.map(item => {
      const hay = [item.translit, item.en, item.bn, item.ar].join(' ');
      const hidden = this.glossaryMatch(item, q) ? '' : ' hidden';
      const ex = item.ex ? `
        <button type="button" data-qa-ref="${this.esc(item.ex.ref)}" data-qa-word="${this.esc(item.ex.ar)}"
          class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
          <span dir="rtl" lang="ar" class="text-sm">${this.esc(item.ex.ar)}</span>
          <span class="opacity-70">${this.esc(item.ex.ref)} ↗</span>
        </button>` : '';
      return `
        <div data-qa-gterm="${this.esc(hay)}" class="p-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700${hidden}">
          <div class="flex items-baseline justify-between gap-2">
            <span class="text-lg font-bold text-gray-800 dark:text-gray-100" dir="rtl" lang="ar">${this.esc(item.ar)}</span>
            <span class="text-xs font-semibold text-primary">${this.esc(item.translit)}</span>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed" dir="auto">${this.esc(this.language === 'bn' ? (item.bn || item.en) : item.en)}</p>
          ${ex}
        </div>`;
    }).join('');

    return `
      <div class="w-full max-w-4xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            ‹ ${this.esc(this.tt('qa_back'))}
          </button>
        </div>
        <div class="text-center mb-4">
          <h2 class="text-2xl font-extrabold text-gray-800 dark:text-gray-100">📖 ${this.esc(this.tt('qa_glossary_title'))}</h2>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1" dir="auto">${this.esc(this.tt('qa_glossary_sub'))}</p>
        </div>
        <div class="mb-4">
          <input id="qa-gloss-search" type="search" autocomplete="off" value="${this.esc(q)}"
            placeholder="${this.esc(this.tt('qa_search'))}"
            class="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:border-primary" dir="auto" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${rows}</div>
        <p id="qa-gloss-empty" class="hidden text-center text-gray-400 dark:text-gray-500 py-8 text-sm">${this.esc(this.tt('qa_no_results'))}</p>
      </div>`;
  }

  /* ---------- quiz view ---------- */
  quizScopeName(scope) {
    if (scope === 'final') return this.tt('qa_final_quiz');
    const u = QA_UNITS.find(x => x.id === scope);
    return u ? this.L(u) : this.tt('qa_quiz');
  }

  renderQuiz() {
    const q = this.quiz;
    if (!q || !Array.isArray(q.qs) || !q.qs.length) { this.view = 'syllabus'; return this.renderSyllabus(); }
    const nTotal = q.qs.length;

    if (q.done) {
      const pct = nTotal ? Math.round((q.score / nTotal) * 100) : 0;
      const best = this.bestQuiz(q.scope);
      const good = pct >= 60;
      return `
        <div class="w-full max-w-xl mx-auto text-center">
          <div class="mb-4">
            <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors float-left">‹ ${this.esc(this.tt('qa_back'))}</button>
          </div>
          <div class="pt-8 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <div class="text-5xl mb-3">${good ? '🎉' : '📚'}</div>
            <h2 class="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">${this.esc(this.tt('qa_quiz_done'))}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-4" dir="auto">${this.esc(this.quizScopeName(q.scope))}</p>
            <div class="text-4xl font-extrabold ${good ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'} mb-1">${pct}%</div>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-1">${this.esc(this.tt('qa_your_score'))}: ${q.score} / ${nTotal}</p>
            ${best != null ? `<p class="text-xs text-gray-400 dark:text-gray-500 mb-4">${this.esc(this.tt('qa_best'))}: ${best}%</p>` : '<div class="mb-4"></div>'}
            <div class="flex items-center justify-center gap-3">
              <button type="button" data-qa-qretry class="px-4 py-2 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">↺ ${this.esc(this.tt('qa_retry'))}</button>
              <button type="button" data-qa-back class="px-4 py-2 rounded-xl text-sm font-semibold bg-primary text-white hover:opacity-90 transition-opacity">${this.esc(this.tt('qa_close'))}</button>
            </div>
          </div>
        </div>`;
    }

    const cur = q.qs[q.idx];
    const answered = q.picked != null;
    const opts = (cur.options || []).map((o, i) => {
      let cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary';
      let icon = '';
      if (answered) {
        if (i === cur.answer) { cls = 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-400 dark:border-emerald-600 text-emerald-800 dark:text-emerald-300'; icon = '✓'; }
        else if (i === q.picked) { cls = 'bg-rose-50 dark:bg-rose-900/30 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300'; icon = '✕'; }
        else { cls = 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'; }
      }
      return `
        <button type="button" ${answered ? 'disabled' : `data-qa-qopt="${i}"`}
          class="w-full text-left flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl border ${cls} transition-all">
          <span dir="auto">${this.esc(this.optText(o))}</span>
          <span class="text-sm font-bold" aria-hidden="true">${icon}</span>
        </button>`;
    }).join('');

    let feedback = '';
    if (answered) {
      const ok = q.picked === cur.answer;
      const isLast = q.idx + 1 >= nTotal;
      feedback = `
        <div class="mt-3 p-3 rounded-xl ${ok ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300' : 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300'}">
          <p class="font-semibold text-sm mb-1">${ok ? '🎉 ' + this.esc(this.tt('qa_correct')) : '🤔 ' + this.esc(this.tt('qa_incorrect'))}</p>
          <p class="text-xs leading-relaxed" dir="auto">${this.esc(this.L(cur.explain))}</p>
        </div>
        <button type="button" data-qa-qnext class="mt-3 w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-white hover:opacity-90 transition-opacity">
          ${isLast ? this.esc(this.tt('qa_finish')) : this.esc(this.tt('qa_continue')) + ' ›'}
        </button>`;
    }

    const prog = nTotal ? Math.round(((q.idx) / nTotal) * 100) : 0;
    return `
      <div class="w-full max-w-xl mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button type="button" data-qa-back class="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">‹ ${this.esc(this.tt('qa_back'))}</button>
          <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_score'))}: ${q.score}</span>
        </div>
        <div class="mb-4">
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-bold text-gray-700 dark:text-gray-200" dir="auto">📝 ${this.esc(this.quizScopeName(q.scope))}</span>
            <span class="text-xs text-gray-400 dark:text-gray-500">${this.esc(this.tt('qa_question'))} ${q.idx + 1} / ${nTotal}</span>
          </div>
          <div class="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-sky-500 transition-all" style="width:${prog}%"></div>
          </div>
        </div>
        <div class="p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <p class="text-sm text-gray-700 dark:text-gray-200 mb-3 font-medium" dir="auto">${this.esc(this.L(cur.q))}</p>
          <div class="space-y-2">${opts}</div>
          ${feedback}
        </div>
      </div>`;
  }
}

let quranicArabicView;
document.addEventListener('DOMContentLoaded', () => { try { quranicArabicView = new QuranicArabicView(); } catch (e) { /* ignore */ } });
