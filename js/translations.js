/**
 * Multi-Language Translation System
 * Supports: English, Bengali, Arabic, Urdu, Indonesian, Turkish
 */

const TRANSLATIONS = {
  en: {
    // Header
    select_surah: "Select Surah",
    load: "Load",

    // Sidebar
    topics: "Topics",
    quran_reading: "Quran Reading",
    tafseer: "Tafseer",
    duas: "Duas",
    topics_by_subject: "Topics by Subject",
    arabic_grammar: "Arabic Grammar",
    quranic_words: "Quranic Words",
    quick_navigation: "Quick Navigation",

    // Tabs
    ayah_reading: "Ayah Reading",
    tafseers: "Tafseers",
    word_by_word: "Word by Word",
    grammar: "Grammar",
    audio: "Audio",
    videos_lectures: "Videos/Lectures",

    // Content
    welcome_title: "Welcome to Learn Quran",
    welcome_message: "Select a Surah from the dropdown above to start reading",
    select_tafseer: "Select Tafseer Source",
    load_ayah_first: "Load ayahs first to view content",
    select_reciter: "Select Reciter",
    videos_coming_soon: "Video lectures coming soon",

    // Footer
    language: "Language:",
    font_size: "Font Size:",
    theme: "Theme:",
    light: "Light",
    dark: "Dark",
    system: "System",

    // General
    loading: "Loading...",
    error: "Error",
    no_results: "No results found",
    surah: "Surah",
    ayah: "Ayah",
    juz: "Juz",
    page: "Page",
    translation: "Translation",
    transliteration: "Transliteration",
    play: "Play",
    pause: "Pause",
    next: "Next",
    previous: "Previous"
  },

  bn: {
    // Header
    select_surah: "সূরা নির্বাচন করুন",
    load: "লোড",

    // Sidebar
    topics: "বিষয়সমূহ",
    quran_reading: "কুরআন পাঠ",
    tafseer: "তাফসীর",
    duas: "দুআ",
    topics_by_subject: "বিষয়ভিত্তিক",
    arabic_grammar: "আরবি ব্যাকরণ",
    quranic_words: "কুরআনের শব্দ",
    quick_navigation: "দ্রুত নেভিগেশন",

    // Tabs
    ayah_reading: "আয়াত পাঠ",
    tafseers: "তাফসীরসমূহ",
    word_by_word: "শব্দে শব্দে",
    grammar: "ব্যাকরণ",
    audio: "অডিও",
    videos_lectures: "ভিডিও/লেকচার",

    // Content
    welcome_title: "কুরআন শিখুনে স্বাগতম",
    welcome_message: "পড়া শুরু করতে উপরের ড্রপডাউন থেকে একটি সূরা নির্বাচন করুন",
    select_tafseer: "তাফসীর উৎস নির্বাচন করুন",
    load_ayah_first: "বিষয়বস্তু দেখতে প্রথমে আয়াত লোড করুন",
    select_reciter: "ক্বারী নির্বাচন করুন",
    videos_coming_soon: "ভিডিও লেকচার শীঘ্রই আসছে",

    // Footer
    language: "ভাষা:",
    font_size: "ফন্ট সাইজ:",
    theme: "থিম:",
    light: "লাইট",
    dark: "ডার্ক",
    system: "সিস্টেম",

    // General
    loading: "লোড হচ্ছে...",
    error: "ত্রুটি",
    no_results: "কোন ফলাফল পাওয়া যায়নি",
    surah: "সূরা",
    ayah: "আয়াত",
    juz: "পারা",
    page: "পৃষ্ঠা",
    translation: "অনুবাদ",
    transliteration: "উচ্চারণ",
    play: "চালান",
    pause: "বিরতি",
    next: "পরবর্তী",
    previous: "পূর্ববর্তী"
  },

  ar: {
    // Header
    select_surah: "اختر السورة",
    load: "تحميل",

    // Sidebar
    topics: "المواضيع",
    quran_reading: "قراءة القرآن",
    tafseer: "التفسير",
    duas: "الأدعية",
    topics_by_subject: "حسب الموضوع",
    arabic_grammar: "النحو العربي",
    quranic_words: "كلمات القرآن",
    quick_navigation: "التنقل السريع",

    // Tabs
    ayah_reading: "قراءة الآيات",
    tafseers: "التفاسير",
    word_by_word: "كلمة بكلمة",
    grammar: "النحو",
    audio: "الصوت",
    videos_lectures: "الفيديو/المحاضرات",

    // Content
    welcome_title: "مرحباً بكم في تعلم القرآن",
    welcome_message: "اختر سورة من القائمة أعلاه للبدء في القراءة",
    select_tafseer: "اختر مصدر التفسير",
    load_ayah_first: "قم بتحميل الآيات أولاً لعرض المحتوى",
    select_reciter: "اختر القارئ",
    videos_coming_soon: "محاضرات الفيديو قريباً",

    // Footer
    language: "اللغة:",
    font_size: "حجم الخط:",
    theme: "السمة:",
    light: "فاتح",
    dark: "داكن",
    system: "النظام",

    // General
    loading: "جاري التحميل...",
    error: "خطأ",
    no_results: "لم يتم العثور على نتائج",
    surah: "سورة",
    ayah: "آية",
    juz: "جزء",
    page: "صفحة",
    translation: "الترجمة",
    transliteration: "النطق",
    play: "تشغيل",
    pause: "إيقاف",
    next: "التالي",
    previous: "السابق"
  },

  ur: {
    // Header
    select_surah: "سورہ منتخب کریں",
    load: "لوڈ کریں",

    // Sidebar
    topics: "موضوعات",
    quran_reading: "قرآن پڑھیں",
    tafseer: "تفسیر",
    duas: "دعائیں",
    topics_by_subject: "موضوع کے لحاظ سے",
    arabic_grammar: "عربی گرامر",
    quranic_words: "قرآنی الفاظ",
    quick_navigation: "فوری نیویگیشن",

    // Tabs
    ayah_reading: "آیات پڑھیں",
    tafseers: "تفاسیر",
    word_by_word: "لفظ بہ لفظ",
    grammar: "گرامر",
    audio: "آڈیو",
    videos_lectures: "ویڈیوز/لیکچرز",

    // Content
    welcome_title: "قرآن سیکھیں میں خوش آمدید",
    welcome_message: "پڑھنا شروع کرنے کے لیے اوپر سے سورہ منتخب کریں",
    select_tafseer: "تفسیر کا ماخذ منتخب کریں",
    load_ayah_first: "مواد دیکھنے کے لیے پہلے آیات لوڈ کریں",
    select_reciter: "قاری منتخب کریں",
    videos_coming_soon: "ویڈیو لیکچرز جلد آ رہے ہیں",

    // Footer
    language: "زبان:",
    font_size: "فونٹ سائز:",
    theme: "تھیم:",
    light: "روشن",
    dark: "تاریک",
    system: "سسٹم",

    // General
    loading: "لوڈ ہو رہا ہے...",
    error: "غلطی",
    no_results: "کوئی نتیجہ نہیں ملا",
    surah: "سورہ",
    ayah: "آیت",
    juz: "پارہ",
    page: "صفحہ",
    translation: "ترجمہ",
    transliteration: "تلفظ",
    play: "چلائیں",
    pause: "روکیں",
    next: "اگلا",
    previous: "پچھلا"
  },

  id: {
    // Header
    select_surah: "Pilih Surah",
    load: "Muat",

    // Sidebar
    topics: "Topik",
    quran_reading: "Baca Quran",
    tafseer: "Tafsir",
    duas: "Doa",
    topics_by_subject: "Topik berdasarkan Subjek",
    arabic_grammar: "Tata Bahasa Arab",
    quranic_words: "Kata-kata Quran",
    quick_navigation: "Navigasi Cepat",

    // Tabs
    ayah_reading: "Baca Ayat",
    tafseers: "Tafsir",
    word_by_word: "Kata per Kata",
    grammar: "Tata Bahasa",
    audio: "Audio",
    videos_lectures: "Video/Ceramah",

    // Content
    welcome_title: "Selamat Datang di Belajar Quran",
    welcome_message: "Pilih Surah dari dropdown di atas untuk mulai membaca",
    select_tafseer: "Pilih Sumber Tafsir",
    load_ayah_first: "Muat ayat terlebih dahulu untuk melihat konten",
    select_reciter: "Pilih Qari",
    videos_coming_soon: "Video ceramah segera hadir",

    // Footer
    language: "Bahasa:",
    font_size: "Ukuran Font:",
    theme: "Tema:",
    light: "Terang",
    dark: "Gelap",
    system: "Sistem",

    // General
    loading: "Memuat...",
    error: "Kesalahan",
    no_results: "Tidak ada hasil ditemukan",
    surah: "Surah",
    ayah: "Ayat",
    juz: "Juz",
    page: "Halaman",
    translation: "Terjemahan",
    transliteration: "Transliterasi",
    play: "Putar",
    pause: "Jeda",
    next: "Selanjutnya",
    previous: "Sebelumnya"
  },

  tr: {
    // Header
    select_surah: "Sure Seçin",
    load: "Yükle",

    // Sidebar
    topics: "Konular",
    quran_reading: "Kuran Okuma",
    tafseer: "Tefsir",
    duas: "Dualar",
    topics_by_subject: "Konuya Göre",
    arabic_grammar: "Arapça Gramer",
    quranic_words: "Kuran Kelimeleri",
    quick_navigation: "Hızlı Gezinme",

    // Tabs
    ayah_reading: "Ayet Okuma",
    tafseers: "Tefsirler",
    word_by_word: "Kelime Kelime",
    grammar: "Gramer",
    audio: "Ses",
    videos_lectures: "Videolar/Dersler",

    // Content
    welcome_title: "Kuran Öğren'e Hoş Geldiniz",
    welcome_message: "Okumaya başlamak için yukarıdaki açılır listeden bir sure seçin",
    select_tafseer: "Tefsir Kaynağı Seçin",
    load_ayah_first: "İçeriği görüntülemek için önce ayetleri yükleyin",
    select_reciter: "Kari Seçin",
    videos_coming_soon: "Video dersler yakında",

    // Footer
    language: "Dil:",
    font_size: "Yazı Boyutu:",
    theme: "Tema:",
    light: "Açık",
    dark: "Koyu",
    system: "Sistem",

    // General
    loading: "Yükleniyor...",
    error: "Hata",
    no_results: "Sonuç bulunamadı",
    surah: "Sure",
    ayah: "Ayet",
    juz: "Cüz",
    page: "Sayfa",
    translation: "Çeviri",
    transliteration: "Transliterasyon",
    play: "Oynat",
    pause: "Duraklat",
    next: "Sonraki",
    previous: "Önceki"
  }
};

// RTL Languages
const RTL_LANGUAGES = ['ar', 'ur'];

/**
 * Get translation for a key
 * @param {string} key
 * @param {string} lang
 * @returns {string}
 */
function t(key, lang = 'en') {
  const translations = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return translations[key] || TRANSLATIONS.en[key] || key;
}

/**
 * Check if language is RTL
 * @param {string} lang
 * @returns {boolean}
 */
function isRTL(lang) {
  return RTL_LANGUAGES.includes(lang);
}

/**
 * Apply translations to all elements with data-lang-key attribute
 * @param {string} lang
 */
function applyTranslations(lang = 'en') {
  const elements = document.querySelectorAll('[data-lang-key]');
  elements.forEach(el => {
    const key = el.getAttribute('data-lang-key');
    el.textContent = t(key, lang);
  });

  // Update page direction for RTL languages
  document.documentElement.dir = isRTL(lang) ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TRANSLATIONS, t, isRTL, applyTranslations };
}
