/**
 * Resources — a curated hub of trusted external Quran-study websites, grouped by
 * category. Every link was verified live and vetted for reputability (see
 * docs/resources-2026-07-14.md). Descriptions are bilingual (en + bn); other UI
 * languages fall back to English. Renders into #resources-container (tab
 * "resources"). Links open in a new tab.
 */

const RESOURCES_DATA = [
  { id: 'study', emoji: '📖', titleKey: 'resources_cat_study', items: [
    { name: 'Quran.com', url: 'https://quran.com', emoji: '📖',
      en: 'Free reader: translations, word-by-word, tafsir, audio', bn: 'ফ্রি রিডার: অনুবাদ, শব্দে-শব্দে, তাফসির ও তিলাওয়াত' },
    { name: 'QuranWBW', url: 'https://quranwbw.com', emoji: '📝',
      en: 'Word-by-word meaning, transliteration, morphology, word audio', bn: 'শব্দে-শব্দে অর্থ, উচ্চারণ, রূপতত্ত্ব ও শব্দ-অডিও' },
    { name: 'Greentech Al Quran', url: 'https://gtaf.org/apps/quran/', emoji: '📲',
      en: 'Word-by-word, tafsir & mushaf in 60+ languages (Bangla)', bn: '৬০+ ভাষায় শব্দে-শব্দে, তাফসির ও মুসহাফ (বাংলাসহ)' },
    { name: 'Quranflash', url: 'https://app.quranflash.com', emoji: '📄',
      en: 'Interactive mushaf reader with many print editions', bn: 'অনেক ছাপার সংস্করণসহ ইন্টারেক্টিভ মুসহাফ পাঠক' },
    { name: 'Al-Quran.info', url: 'https://al-quran.info', emoji: '🌐',
      en: 'Multi-language translations, tafsir, root & word search', bn: 'বহুভাষিক অনুবাদ, তাফসির ও মূল-শব্দ অনুসন্ধান' },
    { name: 'KSU Ayat', url: 'https://quran.ksu.edu.sa', emoji: '🎧',
      en: 'University mushaf: tajweed colours, reciters, tafsir', bn: 'বিশ্ববিদ্যালয়ের মুসহাফ: তাজবিদ রঙ, কারি ও তাফসির' },
    { name: 'Quran 12-21', url: 'https://quran12-21.org/en', emoji: '🏛️',
      en: 'Academic parallel corpus of Quran translations in Europe', bn: 'ইউরোপে কুরআন অনুবাদের একাডেমিক সমান্তরাল সংগ্রহ' },
    { name: 'QuranReflect', url: 'https://quranreflect.com', emoji: '💭',
      en: 'Community platform for reflections & tadabbur on verses', bn: 'আয়াত নিয়ে তাদাব্বুর ও চিন্তার কমিউনিটি প্ল্যাটফর্ম' },
    { name: 'Quran Index', url: 'https://quranindex.info', emoji: '🗂️',
      en: '900+ topic index, translations, reciters, downloads', bn: '৯০০+ বিষয়ভিত্তিক কুরআন সূচি ও অনুবাদ' },
    { name: 'IslamiCity Quran Search', url: 'https://www.islamicity.org/quransearch/', emoji: '🔎',
      en: 'Search Quran by topic, word, phrase or root', bn: 'বিষয়/শব্দ/মূল ধরে কুরআন অনুসন্ধান' },
    { name: 'Quran Analysis', url: 'http://qurananalysis.com/analysis/', emoji: '📊',
      en: 'Quran word frequency, concordance & statistics tool', bn: 'কুরআন শব্দ পরিসংখ্যান ও কনকর্ড্যান্স টুল' },
    { name: 'IslamHouse Translations', url: 'https://quran.islamhouse.com/en/', emoji: '🌍',
      en: 'Quran translations in 100+ languages, free', bn: '১০০+ ভাষায় কুরআন অনুবাদ বিনামূল্যে' },
    { name: 'Quran Kemenag (Indonesia)', url: 'https://quran.kemenag.go.id', emoji: '🇮🇩',
      en: "Indonesia's official Quran portal: translation & tafsir", bn: 'ইন্দোনেশিয়ার সরকারি কুরআন পোর্টাল ও তাফসির' },
    { name: 'Diyanet Kuran (Turkey)', url: 'https://kuran.diyanet.gov.tr', emoji: '🇹🇷',
      en: "Turkey's official Diyanet Quran portal: translation, audio", bn: 'তুরস্কের সরকারি কুরআন পোর্টাল ও অনুবাদ' },
    { name: 'Quran Mind Maps', url: 'https://practicalislam.online/the-holy-quran/quranic-flow-chart/', emoji: '🗺️',
      en: 'Free mind-maps of surah themes and structure', bn: 'সূরার থিম ও কাঠামোর ফ্রি মাইন্ড-ম্যাপ' },
    { name: 'Ulum al-Quran (SunnahOnline)', url: 'https://sunnahonline.com/library/the-majestic-quran/184-an-introduction-to-ulum-al-quran', emoji: '🔬',
      en: 'Free introduction to the sciences of the Quran', bn: 'উলূমুল কুরআন—কুরআন বিজ্ঞানের ফ্রি পরিচিতি' },
    { name: 'Islam By Touch (Braille)', url: 'https://www.islambytouch.com', emoji: '🦯',
      en: 'Free Braille Quran for the blind community', bn: 'অন্ধদের জন্য বিনামূল্যে ব্রেইল কুরআন' },
    { name: 'Quran Majeed', url: 'https://pakdata.com/products/quran-majeed/', emoji: '📱',
      en: 'Popular free Quran app: recitations and translations', bn: 'জনপ্রিয় ফ্রি কুরআন অ্যাপ, তিলাওয়াত ও অনুবাদ' },
  ] },
  { id: 'tafsir', emoji: '📚', titleKey: 'resources_cat_tafsir', items: [
    { name: 'AlTafsir.com', url: 'https://www.altafsir.com', emoji: '📚',
      en: "World's largest tafsir library — 110+ works, 18 languages", bn: 'বিশ্বের বৃহত্তম তাফসির গ্রন্থাগার — ১১০+ গ্রন্থ' },
    { name: 'Alim.org', url: 'https://www.alim.org', emoji: '📖',
      en: 'Translations, tafsir (Ibn Kathir, Maududi) & hadith', bn: 'অনুবাদ, তাফসির (ইবনে কাসির, মওদুদি) ও হাদিস' },
    { name: 'IslamAwakened', url: 'https://islamawakened.com', emoji: '🔤',
      en: 'Compare 70+ English translations verse by verse', bn: '৭০+ ইংরেজি অনুবাদ আয়াতভিত্তিক তুলনা' },
    { name: 'Quranx.com', url: 'https://quranx.com', emoji: '🔎',
      en: 'Search Quran, multiple tafsir & hadith together', bn: 'কুরআন, একাধিক তাফসির ও হাদিস একসাথে অনুসন্ধান' },
    { name: 'QuranEnc', url: 'https://quranenc.com/en/home', emoji: '🗂️',
      en: 'Encyclopedia of verified translations in 80+ languages', bn: '৮০+ ভাষায় যাচাইকৃত অনুবাদের বিশ্বকোষ' },
    { name: 'Parallel Quran', url: 'https://parallelquran.com', emoji: '📚',
      en: 'Five classical commentators shown side-by-side per verse', bn: 'পাঁচ শাস্ত্রীয় মুফাসসিরের তাফসির পাশাপাশি' },
    { name: 'QuranV', url: 'https://www.quranv.com', emoji: '🌐',
      en: 'Verse-by-verse translation comparison across many languages', bn: 'আয়াতভিত্তিক বহুভাষিক অনুবাদ তুলনা' },
    { name: 'English Quran', url: 'https://englishquran.com', emoji: '🔤',
      en: 'Compare English translations side-by-side with root dictionary', bn: 'ইংরেজি অনুবাদ পাশাপাশি তুলনা ও মূলশব্দ অভিধান' },
    { name: 'Yaqeen: Quran 30 for 30', url: 'https://yaqeeninstitute.org/series/quran-30-for-30', emoji: '🎬',
      en: 'Free thematic tafsir video series, juz by juz', bn: 'বিনামূল্যের বিষয়ভিত্তিক তাফসির ভিডিও সিরিজ' },
    { name: 'Tadabbur-e-Quran (Islahi)', url: 'https://amin-ahsan-islahi.org', emoji: '🧩',
      en: "Islahi's coherence-based (nazm) Quran tafsir in English", bn: 'ইসলাহীর নাযম-ভিত্তিক কুরআন তাফসির (ইংরেজি)' },
    { name: 'Tafhim al-Quran (Maududi)', url: 'https://tafheem.net', emoji: '📖',
      en: "Maududi's full English tafsir, free online", bn: 'মাওদূদীর তাফহীমুল কুরআন, সম্পূর্ণ ইংরেজি তাফসির' },
    { name: 'Tafsir Ibn Kathir', url: 'https://www.wordofallah.com/tafseer', emoji: '📕',
      en: 'Complete Tafsir Ibn Kathir in English online', bn: 'তাফসীর ইবনে কাসীর, সম্পূর্ণ ইংরেজি অনলাইনে' },
    { name: 'Maarif-ul-Quran (English)', url: 'https://www.australianislamiclibrary.org/maarif-ul-quran.html', emoji: '📗',
      en: "Mufti Shafi's 8-volume English tafsir, free", bn: 'মুফতি শফীর মাআরিফুল কুরআন, ইংরেজি ৮ খণ্ড ফ্রি' },
    { name: 'NAK Collection Tafsir', url: 'https://www.nakcollection.com/quran-tafsir.html', emoji: '🎙️',
      en: 'Free Nouman Ali Khan tafsir audio by surah', bn: 'নোমান আলী খানের ফ্রি তাফসির অডিও, সূরা অনুযায়ী' },
  ] },
  { id: 'audio', emoji: '🎧', titleKey: 'resources_cat_audio', items: [
    { name: 'EveryAyah', url: 'https://everyayah.com', emoji: '🎧',
      en: 'Ayah-by-ayah audio, many reciters, with timings', bn: 'আয়াতভিত্তিক অডিও, বহু কারি, টাইমিংসহ' },
    { name: 'QuranicAudio', url: 'https://quranicaudio.com', emoji: '🔊',
      en: 'High-quality recitation streaming & downloads, 80+ reciters', bn: 'উচ্চমানের তিলাওয়াত স্ট্রিমিং ও ডাউনলোড, ৮০+ কারি' },
    { name: 'MP3Quran', url: 'https://www.mp3quran.net/eng', emoji: '📻',
      en: 'Vast audio library, many reciters & narrations, radio', bn: 'বিশাল অডিও লাইব্রেরি, বহু কারি ও রেওয়ায়াত, রেডিও' },
    { name: 'Assabile', url: 'https://www.assabile.com', emoji: '🎙️',
      en: 'Free listen & download, 500+ reciters', bn: '৫০০+ কারির ফ্রি তিলাওয়াত শোনা ও ডাউনলোড' },
    { name: 'Tarteel AI', url: 'https://tarteel.ai', emoji: '🤖',
      en: 'AI memorization helper — detects recitation mistakes', bn: 'এআই হিফয সহায়ক — তিলাওয়াতের ভুল শনাক্ত করে' },
    { name: 'Quran Explorer', url: 'https://read.quranexplorer.com', emoji: '🎧',
      en: 'Read and listen with many reciters and tajweed colours', bn: 'বহু ক্বারি ও তাজবিদ রঙে পড়া-শোনা' },
    { name: 'Recite Quran', url: 'https://www.recitequran.com', emoji: '🔊',
      en: 'Word-by-word and tajweed recitation with translations', bn: 'শব্দে-শব্দে ও তাজবিদ তিলাওয়াত, অনুবাদসহ' },
    { name: 'House of Quran', url: 'https://www.houseofquran.com', emoji: '🕌',
      en: 'Word-by-word reciter and hifz tool with translation', bn: 'শব্দে-শব্দে ক্বারি ও হিফজ টুল, অনুবাদসহ' },
    { name: 'Quran Central', url: 'https://qurancentral.com', emoji: '🎧',
      en: '450+ reciters and lectures, free and ad-free', bn: '৪৫০+ ক্বারীর তিলাওয়াত ও লেকচার, বিজ্ঞাপনমুক্ত' },
  ] },
  { id: 'arabic', emoji: '🔤', titleKey: 'resources_cat_arabic', items: [
    { name: 'Quranic Arabic Corpus', url: 'https://corpus.quran.com', emoji: '🔤',
      en: 'Word-by-word grammar, syntax & morphology treebank', bn: 'শব্দে-শব্দে ব্যাকরণ, বাক্যগঠন ও রূপতত্ত্ব' },
    { name: 'Arabic Almanac', url: 'https://ejtaal.net/aa', emoji: '📚',
      en: 'Root search across Lane, Hans Wehr & Hava dictionaries', bn: 'লেন, হ্যান্স ভেয়ার ও হাভা অভিধানে মূল-শব্দ খোঁজা' },
    { name: 'The Arabic Lexicon', url: 'https://arabiclexicon.hawramani.com', emoji: '🏛️',
      en: 'Searchable hyperdictionary of 47 classical works', bn: '৪৭টি ধ্রুপদী অভিধানের অনুসন্ধানযোগ্য সংগ্রহ' },
    { name: 'Madinah Arabic', url: 'https://www.madinaharabic.com', emoji: '🕌',
      en: 'Free 90+ lesson Arabic language & reading course', bn: 'বিনামূল্যে ৯০+ পাঠের আরবি ভাষা কোর্স' },
    { name: 'Bayyinah TV', url: 'https://explore.bayyinahtv.com/arabic', emoji: '📺',
      en: 'Structured Quranic Arabic course (Nahw, Sarf, Balagha)', bn: 'কাঠামোবদ্ধ কুরআনি আরবি কোর্স (নাহু, সরফ, বালাগাহ)' },
    { name: 'Al-Dirassa Tajweed', url: 'https://al-dirassa.com/en/tajweed-rules-online-for-free', emoji: '🎨',
      en: 'Free step-by-step tajweed rules lessons', bn: 'বিনামূল্যে ধাপে ধাপে তাজবীদ নিয়মের পাঠ' },
    { name: 'Learn Quran Roots', url: 'https://learnquranroots.com', emoji: '🌱',
      en: 'Learn Quranic root-word vocabulary with spaced repetition', bn: 'স্পেসড রিপিটিশনে কুরআনি মূলশব্দ শেখার টুল' },
    { name: 'QuranExcel', url: 'https://quranexcel.com', emoji: '📊',
      en: 'Word-for-word translation, morphology & data downloads', bn: 'শব্দে-শব্দে অনুবাদ, রূপতত্ত্ব ও ডেটা ডাউনলোড' },
    { name: 'Iqra: Quranic Words', url: 'https://apps.apple.com/us/app/iqra-quranic-words/id6760343334', emoji: '🗂️',
      en: '700+ frequent Quranic words via flashcards, free app', bn: '৭০০+ প্রচলিত কুরআনি শব্দ ফ্ল্যাশকার্ডে শেখা' },
    { name: 'TajweedMate', url: 'https://tajweedmate.com', emoji: '🎙️',
      en: 'Free AI app for tajweed and recitation practice', bn: 'এআই-ভিত্তিক তাজবিদ ও তিলাওয়াত অনুশীলন অ্যাপ' },
    { name: 'Bayyinah (Nouman Ali Khan) YouTube', url: 'https://www.youtube.com/@bayyinah', emoji: '▶️',
      en: "Nouman Ali Khan's free Quranic Arabic videos", bn: 'নোমান আলী খানের কুরআনি আরবি ইউটিউব' },
    { name: 'Uthmani Mushaf Calligraphy', url: 'https://freeislamiccalligraphy.com/the-uthmani-font-mushaf/', emoji: '✍️',
      en: 'Uthmani-script mushaf & Islamic calligraphy, free', bn: 'উসমানি লিপি মুসহাফ ও ক্যালিগ্রাফি' },
    { name: 'Understand Al-Quran Academy', url: 'https://understandquran.com', emoji: '🎓',
      en: 'Free courses to understand 80% of Quran words', bn: '৮০% কুরআনি শব্দ বোঝার ফ্রি কোর্স ও ভিডিও' },
    { name: 'Quranic (getquranic)', url: 'https://www.getquranic.com', emoji: '🎮',
      en: 'Learn Quran words via stories, free-forever tier', bn: 'গল্পের মাধ্যমে কুরআনি শব্দ শেখা, ফ্রি টিয়ার' },
    { name: 'Quranle', url: 'https://www.quranle.com', emoji: '🟩',
      en: 'Wordle-style daily Quranic Arabic word game, free', bn: 'ওয়ার্ডল-স্টাইল কুরআনি আরবি শব্দ খেলা, ফ্রি' },
  ] },
  { id: 'tajweed', emoji: '🎨', titleKey: 'resources_cat_tajweed', items: [
    { name: 'Tilawa.ai', url: 'https://tilawa.ai/en/quran/', emoji: '🎨',
      en: 'Colour-coded tajweed Quran, word-by-word & audio', bn: 'রঙিন তাজভিদসহ অনলাইন কুরআন পাঠ' },
    { name: 'QuranMakkah Tajweed', url: 'https://quranmakkah.com/tajweed-quran', emoji: '🌈',
      en: 'Colour-coded tajweed reader with full rules guide', bn: 'রঙ-কোডেড তাজভিদ কুরআন ও নিয়মাবলী' },
    { name: 'Al-Dirassa Tajweed Course', url: 'https://al-dirassa.com/en/tajweed-rules-online-for-free', emoji: '🎓',
      en: 'Free step-by-step tajweed rules lessons', bn: 'বিনামূল্যে ধাপে ধাপে তাজবীদ নিয়মের পাঠ' },
  ] },
  { id: 'dua', emoji: '🤲', titleKey: 'resources_cat_dua', items: [
    { name: 'My Islam Duas', url: 'https://myislam.org/duas-and-dhikr/', emoji: '🤲',
      en: 'Duas from Quran & Sunnah with audio', bn: 'অডিওসহ কুরআন-সুন্নাহর দুআ সংকলন' },
    { name: 'Hisnul Muslim Online', url: 'https://ahadith.co.uk/fortressofthemuslim.php', emoji: '🛡️',
      en: 'Fortress of the Muslim duas, Arabic with references', bn: 'হিসনুল মুসলিম দুআ অনলাইনে, রেফারেন্সসহ' },
  ] },
  { id: 'seerah', emoji: '🌙', titleKey: 'resources_cat_seerah', items: [
    { name: 'The Seerah App', url: 'https://www.seerahapp.com', emoji: '🌙',
      en: "Learn the Prophet's life in bite-sized chapters", bn: 'নবীজির জীবনী সহজ অধ্যায়ে শেখা' },
    { name: 'Yaqeen: Life of the Prophet', url: 'https://yaqeeninstitute.org/topic/life-of-the-prophet-seerah', emoji: '📖',
      en: 'Seerah videos, papers and resources, free', bn: 'নবীজির জীবনী নিয়ে ভিডিও ও প্রবন্ধ' },
  ] },
  { id: 'memorization', emoji: '🧠', titleKey: 'resources_cat_memorization', items: [
    { name: 'Hafiz Quran', url: 'https://hafiz-quran.com', emoji: '🧠',
      en: 'Free ad-free hifz tool using FSRS spaced repetition', bn: 'FSRS স্পেসড রিপিটিশনে বিনামূল্যের হিফজ টুল' },
    { name: 'Retain Quran', url: 'https://retainquranapp.com', emoji: '🔁',
      en: 'Free spaced-repetition flashcard app for memorization', bn: 'স্পেসড রিপিটিশন ফ্ল্যাশকার্ডে কুরআন মুখস্থ অ্যাপ' },
    { name: 'Ayah: Quran App', url: 'https://ayahapp.com', emoji: '📱',
      en: 'Beautiful, ad-free free Quran reading app', bn: 'সুন্দর, বিজ্ঞাপনহীন বিনামূল্যের কুরআন অ্যাপ' },
    { name: 'The Hifz Project', url: 'https://thehifzproject.com', emoji: '🧠',
      en: 'Free spaced-repetition memorization, all 114 surahs', bn: 'স্পেসড-রিপিটিশনে ফ্রি কুরআন হিফজ, সব ১১৪ সূরা' },
  ] },
  { id: 'hadith', emoji: '📜', titleKey: 'resources_cat_hadith', items: [
    { name: 'Sunnah.com', url: 'https://sunnah.com', emoji: '📜',
      en: 'Authentic hadith collections, searchable, many languages', bn: 'সহীহ হাদিস সংকলন, খোঁজযোগ্য, একাধিক ভাষায় ফ্রি' },
  ] },
  { id: 'kids', emoji: '🧒', titleKey: 'resources_cat_kids', items: [
    { name: 'Kids Land (Farhat Hashmi)', url: 'https://kids.farhathashmi.com', emoji: '🧒',
      en: 'Free Quran stories, games and duas for children', bn: 'শিশুদের জন্য বিনামূল্যের কুরআন গল্প, খেলা ও দুআ' },
    { name: 'Quran Stories 4 Kids', url: 'https://apps.apple.com/us/app/quran-stories-4-kids-prophets/id1578082367', emoji: '🎨',
      en: 'Animated narrated prophet stories app in 16 languages', bn: 'নবীদের অ্যানিমেটেড বর্ণিত গল্পের অ্যাপ' },
    { name: 'Islam 4 Kids', url: 'https://www.islam4kids.org', emoji: '🧒',
      en: 'Free Islamic games, stories & printable worksheets', bn: 'শিশুদের জন্য ফ্রি ইসলামিক গেম, গল্প ও ওয়ার্কশিট' },
  ] },
  { id: 'dev', emoji: '🛠️', titleKey: 'resources_cat_dev', items: [
    { name: 'Quran Foundation API', url: 'https://api-docs.quran.foundation', emoji: '⚙️',
      en: 'Official Quran.com API: verses, translations, tafsir, audio', bn: 'কুরআন.com এর অফিসিয়াল API: আয়াত, অনুবাদ, তাফসির' },
    { name: 'Al Quran Cloud API', url: 'https://alquran.cloud/api', emoji: '☁️',
      en: 'Free REST API: text, audio, translations, mushaf', bn: 'ফ্রি REST API: টেক্সট, অডিও, অনুবাদ, মুসহাফ' },
    { name: 'Tanzil', url: 'https://tanzil.net', emoji: '✅',
      en: 'Verified Uthmani Quran text & translations for download', bn: 'যাচাইকৃত উসমানি কুরআন টেক্সট ও অনুবাদ ডাউনলোড' },
    { name: 'Quranic Universal Library', url: 'https://qul.tarteel.ai', emoji: '🧰',
      en: 'Open data hub: translations, tafsir, audio, fonts, layouts', bn: 'উন্মুক্ত ডেটা হাব: অনুবাদ, তাফসির, অডিও, ফন্ট' },
    { name: 'KFGQPC Fonts', url: 'https://fonts.qurancomplex.gov.sa/en/', emoji: '🅰️',
      en: 'Official King Fahd Complex Uthmanic Quran fonts', bn: 'কিং ফাহাদ কমপ্লেক্সের অফিসিয়াল উসমানি কুরআন ফন্ট' },
    { name: 'Corpus Coranicum', url: 'https://corpuscoranicum.org/en', emoji: '📜',
      en: 'Academic database of early manuscripts & variant readings', bn: 'প্রাচীন পাণ্ডুলিপি ও পাঠভেদের একাডেমিক ডেটাবেস' },
  ] },
  { id: 'bangla', emoji: '🇧🇩', titleKey: 'resources_cat_bangla', items: [
    { name: 'Al Quran Digital — Islamic Foundation', url: 'https://www.quran.gov.bd', emoji: '🇧🇩',
      en: 'Official Bangladesh govt Quran: Arabic, Bangla, English, audio', bn: 'সরকারি ডিজিটাল কুরআন: আরবি, বাংলা, ইংরেজি ও অডিও' },
    { name: 'Hadithbd', url: 'https://www.hadithbd.com', emoji: '📚',
      en: 'Bangla Quran, tafsir & 90,000+ hadith & Islamic books', bn: 'বাংলা কুরআন, তাফসির ও ৯০,০০০+ হাদিস ও ইসলামিক বই' },
    { name: 'iHadis', url: 'https://ihadis.com', emoji: '🕌',
      en: '49,000+ authentic hadith in Bangla (IRD Foundation)', bn: 'আইআরডি ফাউন্ডেশনের ৪৯,০০০+ সহিহ হাদিস বাংলায়' },
    { name: 'Quraner Alo', url: 'https://quraneralo.com', emoji: '💡',
      en: 'Authentic Bangla Islamic articles, books & lectures', bn: 'নির্ভরযোগ্য বাংলা ইসলামিক প্রবন্ধ, বই ও লেকচার' },
    { name: 'Quran.com (Bengali)', url: 'https://quran.com/bn', emoji: '🌐',
      en: 'Global Quran platform with a Bengali interface', bn: 'বাংলা ইন্টারফেসসহ বিশ্বমানের কুরআন প্ল্যাটফর্ম' },
  ] },
];

class ResourcesView {
  constructor() {
    this.container = document.getElementById('resources-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this.rendered = false;

    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId === 'resources') this.render(); });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.rendered) this.render(); }
    });
  }

  tt(key) { return t(key, this.language); }
  esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  desc(item) { return this.language === 'bn' ? (item.bn || item.en) : item.en; }

  render() {
    this.rendered = true;
    const lang = this.language;
    this.container.innerHTML = `
      <div class="w-full max-w-5xl mx-auto">
        <div class="text-center mb-2">
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('resources_subtitle')}</p>
        </div>
        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mb-6">🔗 ${this.tt('resources_note')}</p>
        ${RESOURCES_DATA.map(cat => `
          <section class="mb-8">
            <h3 class="flex items-center gap-2 text-lg font-bold mb-3">
              <span aria-hidden="true">${cat.emoji}</span><span>${this.tt(cat.titleKey)}</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${cat.items.map(it => `
                <a href="${this.esc(it.url)}" target="_blank" rel="noopener noreferrer"
                   class="group flex flex-col gap-1 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                          hover:border-primary hover:shadow-md transition-all">
                  <span class="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-100">
                    <span class="text-lg" aria-hidden="true">${it.emoji}</span>
                    <span class="flex-1 min-w-0 truncate">${this.esc(it.name)}</span>
                    <span class="text-gray-300 dark:text-gray-600 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors" aria-hidden="true">↗</span>
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed" dir="auto">${this.esc(this.desc(it))}</span>
                  <span class="text-[0.65rem] text-gray-400 dark:text-gray-500 truncate" dir="ltr">${this.esc(it.url.replace(/^https?:\/\//, ''))}</span>
                </a>`).join('')}
            </div>
          </section>`).join('')}
        <p class="text-xs text-gray-400 dark:text-gray-500 text-center mt-2 mb-8">${this.tt('resources_disclaimer')}</p>
      </div>`;
  }
}

let resourcesView;
document.addEventListener('DOMContentLoaded', () => { resourcesView = new ResourcesView(); });
