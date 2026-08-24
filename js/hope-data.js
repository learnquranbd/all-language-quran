/**
 * Hope & Character — DATA MODULE
 *
 * Two wings that belong together:
 *
 *   1. MERCY (rahmah / maghfirah / 'afw) — for the reader who has sinned and is
 *      close to giving up. Thirteen chapters, each built on verses that say the same
 *      thing from a different angle: the door is open, and it is open to you.
 *   2. CHARACTER (akhlaq) — the qualities of the ideal Muslim as the Qur'an and
 *      the Sunnah actually describe them. Twenty chapters, so that hope has
 *      somewhere to walk to. Forgiveness is not the end of the road; it is the
 *      start of one.
 *
 * Globals: HOPE_I18N, HOPE_WINGS, HOPE_TAWBAH_STEPS, HOPE_CHAPTERS.
 * Loaded BEFORE js/hope.js (lazily, via js/module-loader.js bundle "hope").
 *
 * WHAT IS STORED HERE AND WHAT IS NOT — this is the important design decision.
 * Chapters carry only a verse REFERENCE plus commentary. The Arabic and the
 * translation are pulled at render time from the same sources the rest of the
 * app uses (the word corpus + data/translations/<lang>.json). Two consequences:
 *   - the Qur'anic text is never retyped here, so it cannot drift or be
 *     mistranscribed by an author;
 *   - the verse itself appears in the reader's OWN language across all fifteen,
 *     not just English and Bangla. Only the commentary carries the usual
 *     {en, bn} pair and falls back through CI18N.
 *
 * Hadith are the exception: there is no local hadith corpus, so the wording is
 * carried inline as a translation with its collection cited. Numbering follows
 * the standard printed editions; where a number was not certain the collection
 * is cited without one rather than guessing.
 */

/* UI chrome. Kept to a small set of labels so all fifteen languages are written
 * out in full — unlike the chapter prose, these are on screen constantly. */
const HOPE_I18N = {
  hope_subtitle: {
    en: 'For anyone who thinks they have gone too far — and for anyone ready to become who they were meant to be.',
    bn: 'যে ভাবছে, আমার আর কিছু হবে না — এ তার জন্য। আর যে নিজের আসল চেহারাটায় ফিরতে চায়, এ তারও জন্য।',
    ar: 'لمن ظنَّ أنه تجاوز الحدَّ — ولمن استعدَّ أن يصير كما أراد الله له أن يكون.',
    ur: 'اُس کے لیے جو سمجھتا ہے کہ وہ بہت آگے نکل گیا — اور اُس کے لیے بھی جو وہ بننے کو تیار ہے جو اُسے بننا تھا۔',
    id: 'Bagi siapa pun yang merasa sudah terlalu jauh — dan bagi siapa pun yang siap menjadi dirinya yang seharusnya.',
    tr: 'Çok ileri gittiğini sanan herkes için — ve olması gereken kişi olmaya hazır olan herkes için.',
    fr: 'Pour celui qui croit être allé trop loin — et pour celui qui est prêt à devenir ce qu’il devait être.',
    es: 'Para quien cree haber ido demasiado lejos — y para quien está listo para ser quien debía ser.',
    ru: 'Для того, кто думает, что зашёл слишком далеко, — и для того, кто готов стать тем, кем должен был быть.',
    fa: 'برای هر که گمان می‌کند بیش از حد پیش رفته است — و برای هر که آماده است همان شود که باید می‌شد.',
    hi: 'उनके लिए जो सोचते हैं कि वे बहुत आगे निकल गए — और उनके लिए भी जो वह बनने को तैयार हैं जो उन्हें बनना था।',
    de: 'Für jeden, der glaubt, zu weit gegangen zu sein — und für jeden, der bereit ist, der zu werden, der er sein sollte.',
    ms: 'Untuk sesiapa yang merasa sudah terlalu jauh — dan untuk sesiapa yang bersedia menjadi diri yang sepatutnya.',
    zh: '献给自认为已经走得太远的人——也献给准备成为自己应有模样的人。',
    ja: 'もう手遅れだと思っている人へ——そして、本来なるべき自分になろうとする人へ。',
  },
  hope_hero_label: {
    en: 'Start here', bn: 'এখান থেকে শুরু', ar: 'ابدأ من هنا', ur: 'یہاں سے شروع کریں',
    id: 'Mulai di sini', tr: 'Buradan başlayın', fr: 'Commencez ici', es: 'Empieza aquí',
    ru: 'Начните отсюда', fa: 'از اینجا شروع کنید', hi: 'यहाँ से शुरू करें', de: 'Hier beginnen',
    ms: 'Mula di sini', zh: '从这里开始', ja: 'ここから始める',
  },
  hope_wing_all: {
    en: 'Everything', bn: 'সবকিছু', ar: 'الكل', ur: 'سب کچھ', id: 'Semua', tr: 'Tümü',
    fr: 'Tout', es: 'Todo', ru: 'Всё', fa: 'همه', hi: 'सब कुछ', de: 'Alles',
    ms: 'Semua', zh: '全部', ja: 'すべて',
  },
  hope_search_ph: {
    en: 'Search chapters, verses, qualities…', bn: 'অধ্যায়, আয়াত বা গুণ খুঁজুন…',
    ar: 'ابحث في الفصول والآيات والصفات…', ur: 'ابواب، آیات، صفات تلاش کریں…',
    id: 'Cari bab, ayat, sifat…', tr: 'Bölüm, ayet, vasıf ara…',
    fr: 'Rechercher chapitres, versets, qualités…', es: 'Buscar capítulos, versículos, cualidades…',
    ru: 'Искать главы, аяты, качества…', fa: 'جستجوی فصل‌ها، آیات، صفات…',
    hi: 'अध्याय, आयतें, गुण खोजें…', de: 'Kapitel, Verse, Eigenschaften suchen…',
    ms: 'Cari bab, ayat, sifat…', zh: '搜索章节、经文、品格…', ja: '章・節・徳目を検索…',
  },
  hope_none: {
    en: 'Nothing matches your search.', bn: 'খোঁজার সঙ্গে কিছু মিলল না।',
    ar: 'لا شيء يطابق بحثك.', ur: 'آپ کی تلاش سے کچھ میل نہیں کھاتا۔',
    id: 'Tidak ada yang cocok dengan pencarian Anda.', tr: 'Aramanızla eşleşen bir şey yok.',
    fr: 'Aucun résultat ne correspond à votre recherche.', es: 'Nada coincide con tu búsqueda.',
    ru: 'Ничего не найдено по вашему запросу.', fa: 'چیزی با جستجوی شما مطابقت ندارد.',
    hi: 'आपकी खोज से कुछ मेल नहीं खाता।', de: 'Nichts entspricht Ihrer Suche.',
    ms: 'Tiada apa-apa sepadan dengan carian anda.', zh: '没有与您的搜索匹配的内容。',
    ja: '検索に一致するものはありません。',
  },
  hope_back: {
    en: 'All chapters', bn: 'সব অধ্যায়', ar: 'كل الفصول', ur: 'تمام ابواب',
    id: 'Semua bab', tr: 'Tüm bölümler', fr: 'Tous les chapitres', es: 'Todos los capítulos',
    ru: 'Все главы', fa: 'همهٔ فصل‌ها', hi: 'सभी अध्याय', de: 'Alle Kapitel',
    ms: 'Semua bab', zh: '所有章节', ja: 'すべての章',
  },
  hope_verses_label: {
    en: 'From the Qur’an', bn: 'কুরআন থেকে', ar: 'من القرآن', ur: 'قرآن سے',
    id: 'Dari Al-Qur’an', tr: 'Kur’an’dan', fr: 'Du Coran', es: 'Del Corán',
    ru: 'Из Корана', fa: 'از قرآن', hi: 'क़ुरआन से', de: 'Aus dem Koran',
    ms: 'Dari al-Quran', zh: '出自《古兰经》', ja: 'クルアーンより',
  },
  hope_hadith_label: {
    en: 'From the Sunnah', bn: 'সুন্নাহ থেকে', ar: 'من السنة', ur: 'سنت سے',
    id: 'Dari Sunnah', tr: 'Sünnet’ten', fr: 'De la Sunna', es: 'De la Sunna',
    ru: 'Из Сунны', fa: 'از سنت', hi: 'सुन्नत से', de: 'Aus der Sunna',
    ms: 'Dari Sunnah', zh: '出自圣行', ja: 'スンナより',
  },
  hope_practice_label: {
    en: 'Put it into practice', bn: 'আজ থেকে যা করবেন', ar: 'ضعه موضع التطبيق',
    ur: 'عمل میں لائیں', id: 'Terapkan dalam praktik', tr: 'Hayata geçirin',
    fr: 'Mettez-le en pratique', es: 'Ponlo en práctica', ru: 'Примените на деле',
    fa: 'آن را به عمل درآورید', hi: 'इसे व्यवहार में लाएँ', de: 'In die Praxis umsetzen',
    ms: 'Amalkan ia', zh: '付诸实践', ja: '実践に移す',
  },
  hope_dua_label: {
    en: 'A du‘a from the Qur’an', bn: 'কুরআনের দোয়া', ar: 'دعاء من القرآن',
    ur: 'قرآن سے ایک دعا', id: 'Doa dari Al-Qur’an', tr: 'Kur’an’dan bir dua',
    fr: 'Une invocation du Coran', es: 'Una súplica del Corán', ru: 'Мольба из Корана',
    fa: 'دعایی از قرآن', hi: 'क़ुरआन से एक दुआ', de: 'Ein Bittgebet aus dem Koran',
    ms: 'Doa dari al-Quran', zh: '出自《古兰经》的祈祷', ja: 'クルアーンの祈り',
  },
  hope_names_title: {
    en: 'The names He forgives by', bn: 'যেসব নামে তিনি মাফ করেন', ar: 'الأسماء التي يغفر بها',
    ur: 'وہ نام جن سے وہ بخشتا ہے', id: 'Nama-nama yang dengannya Dia mengampuni',
    tr: 'Bağışladığı isimleri', fr: 'Les noms par lesquels Il pardonne',
    es: 'Los nombres por los que perdona', ru: 'Имена, которыми Он прощает',
    fa: 'نام‌هایی که با آن‌ها می‌آمرزد', hi: 'वे नाम जिनसे वह क्षमा करता है',
    de: 'Die Namen, mit denen Er vergibt', ms: 'Nama-nama yang dengannya Dia mengampuni',
    zh: '祂借以宽恕的尊名', ja: '赦しの御名',
  },
  hope_today: {
    en: 'Today’s chapter', bn: 'আজকের অধ্যায়', ar: 'فصل اليوم', ur: 'آج کا باب',
    id: 'Bab hari ini', tr: 'Bugünün bölümü', fr: 'Le chapitre du jour',
    es: 'El capítulo de hoy', ru: 'Глава дня', fa: 'فصل امروز', hi: 'आज का अध्याय',
    de: 'Kapitel des Tages', ms: 'Bab hari ini', zh: '今日章节', ja: '今日の章',
  },
  hope_open_chapter: {
    en: 'Read this chapter', bn: 'অধ্যায়টি পড়ুন', ar: 'اقرأ هذا الفصل',
    ur: 'یہ باب پڑھیں', id: 'Baca bab ini', tr: 'Bu bölümü oku',
    fr: 'Lire ce chapitre', es: 'Leer este capítulo', ru: 'Читать эту главу',
    fa: 'این فصل را بخوانید', hi: 'यह अध्याय पढ़ें', de: 'Dieses Kapitel lesen',
    ms: 'Baca bab ini', zh: '阅读本章', ja: 'この章を読む',
  },
  hope_from_sunnah_only: {
    en: 'From the Sunnah', bn: 'সুন্নাহ থেকে', ar: 'من السنة', ur: 'سنت سے',
    id: 'Dari Sunnah', tr: 'Sünnet’ten', fr: 'De la Sunna', es: 'De la Sunna',
    ru: 'Из Сунны', fa: 'از سنت', hi: 'सुन्नत से', de: 'Aus der Sunna',
    ms: 'Dari Sunnah', zh: '出自圣行', ja: 'スンナより',
  },
  hope_steps_title: {
    en: 'What repentance actually requires', bn: 'তওবা কবুল হতে যা যা লাগে',
    ar: 'ما تقتضيه التوبة حقًّا', ur: 'توبہ کے لیے اصل میں کیا درکار ہے',
    id: 'Apa yang sebenarnya dituntut oleh taubat', tr: 'Tövbe gerçekte neyi gerektirir',
    fr: 'Ce que le repentir exige réellement', es: 'Lo que el arrepentimiento realmente exige',
    ru: 'Что на самом деле требует покаяние', fa: 'توبه در واقع چه می‌طلبد',
    hi: 'तौबा के लिए वास्तव में क्या आवश्यक है', de: 'Was Reue tatsächlich verlangt',
    ms: 'Apa yang sebenarnya dituntut oleh taubat', zh: '忏悔真正需要什么',
    ja: '悔い改めが実際に求めるもの',
  },
  hope_read: {
    en: 'Mark as read', bn: 'পড়া হয়েছে বলে রাখুন', ar: 'وضع علامة كمقروء',
    ur: 'پڑھا ہوا نشان زد کریں', id: 'Tandai sudah dibaca', tr: 'Okundu olarak işaretle',
    fr: 'Marquer comme lu', es: 'Marcar como leído', ru: 'Отметить прочитанным',
    fa: 'علامت‌گذاری به‌عنوان خوانده‌شده', hi: 'पढ़ा हुआ चिह्नित करें', de: 'Als gelesen markieren',
    ms: 'Tandai sudah dibaca', zh: '标记为已读', ja: '既読にする',
  },
  hope_read_done: {
    en: 'Read', bn: 'পড়া হয়েছে', ar: 'مقروء', ur: 'پڑھ لیا', id: 'Sudah dibaca',
    tr: 'Okundu', fr: 'Lu', es: 'Leído', ru: 'Прочитано', fa: 'خوانده شد',
    hi: 'पढ़ा गया', de: 'Gelesen', ms: 'Sudah dibaca', zh: '已读', ja: '既読',
  },
  hope_focus: {
    en: 'I’m working on this', bn: 'এটা নিয়ে কাজ করছি', ar: 'أعمل على هذا',
    ur: 'میں اس پر کام کر رہا ہوں', id: 'Saya sedang mengusahakan ini',
    tr: 'Bunun üzerinde çalışıyorum', fr: 'J’y travaille', es: 'Estoy trabajando en esto',
    ru: 'Я работаю над этим', fa: 'روی این کار می‌کنم', hi: 'मैं इस पर काम कर रहा हूँ',
    de: 'Daran arbeite ich', ms: 'Saya sedang mengusahakan ini', zh: '我正在修养这一点',
    ja: 'これに取り組んでいます',
  },
  hope_focus_on: {
    en: 'Working on it', bn: 'চলছে', ar: 'قيد العمل', ur: 'کام جاری ہے',
    id: 'Sedang diusahakan', tr: 'Üzerinde çalışılıyor', fr: 'En cours', es: 'En proceso',
    ru: 'В работе', fa: 'در حال کار', hi: 'कार्य जारी', de: 'In Arbeit',
    ms: 'Sedang diusahakan', zh: '修养中', ja: '取り組み中',
  },
  hope_progress: {
    en: 'chapters read', bn: 'অধ্যায় পড়া হয়েছে', ar: 'فصلًا مقروءًا', ur: 'ابواب پڑھے گئے',
    id: 'bab dibaca', tr: 'bölüm okundu', fr: 'chapitres lus', es: 'capítulos leídos',
    ru: 'глав прочитано', fa: 'فصل خوانده‌شده', hi: 'अध्याय पढ़े गए', de: 'Kapitel gelesen',
    ms: 'bab dibaca', zh: '章已读', ja: '章を読了',
  },
  hope_open_verse: {
    en: 'Open verse', bn: 'আয়াত খুলুন', ar: 'افتح الآية', ur: 'آیت کھولیں',
    id: 'Buka ayat', tr: 'Ayeti aç', fr: 'Ouvrir le verset', es: 'Abrir versículo',
    ru: 'Открыть аят', fa: 'گشودن آیه', hi: 'आयत खोलें', de: 'Vers öffnen',
    ms: 'Buka ayat', zh: '打开经文', ja: '節を開く',
  },
  hope_note: {
    en: 'A note on hope', bn: 'আশা নিয়ে একটা কথা', ar: 'كلمة عن الرجاء',
    ur: 'اُمید کے بارے میں ایک بات', id: 'Sepatah kata tentang harapan',
    tr: 'Ümit üzerine bir not', fr: 'Un mot sur l’espoir', es: 'Una nota sobre la esperanza',
    ru: 'Слово о надежде', fa: 'سخنی دربارهٔ امید', hi: 'आशा पर एक टिप्पणी',
    de: 'Eine Anmerkung zur Hoffnung', ms: 'Sepatah kata tentang harapan',
    zh: '关于希望的一点说明', ja: '希望についての一言',
  },
  hope_note_body: {
    en: 'Hope in Allah is not a licence to sin, and fear of Allah is not despair. The Qur’an keeps them in one hand: the same Lord who says He forgives every sin also says His punishment is the painful punishment. This section leans on mercy because mercy is what a struggling person needs to hear — and then it asks something of you, which is what the second half is for.',
    bn: 'আল্লাহর ওপর আশা রাখা মানে গুনাহের ছাড়পত্র নয়, আর আল্লাহকে ভয় করা মানে নিরাশ হওয়া নয়। কুরআন দুটোই এক হাতে ধরে রাখে। যিনি বলেন তিনি সব গুনাহ মাফ করেন, তিনিই বলেন তাঁর আজাব বড় যন্ত্রণার আজাব। এখানে রহমতের কথাই বেশি এসেছে, কারণ যে মানুষ হিমশিম খাচ্ছে তার সেটাই শোনা দরকার। তারপর আপনার কাছেও কিছু চাওয়া হয়েছে; দ্বিতীয় ভাগটা সে জন্যই।',
  },
  hope_disclaimer: {
    en: 'An educational selection in the mainstream Sunni tradition. Verse text and translation come from the app’s own Qur’an data; hadith are given in translation with their collection cited. For rulings on your own situation, ask a qualified scholar.',
    bn: 'মূলধারার সুন্নি ধারায় সাজানো শিক্ষামূলক সংকলন। আয়াতের আরবি ও অনুবাদ এসেছে অ্যাপের নিজস্ব কুরআন ডেটা থেকে; হাদিসের অনুবাদের সঙ্গে গ্রন্থের নাম দেওয়া আছে। নিজের অবস্থার মাসআলা জানতে যোগ্য আলিমের কাছেই জিজ্ঞেস করুন।',
  },
};

/* The two halves. Order matters: mercy first, because a reader who arrives
 * here carrying something heavy should not have to scroll past a list of
 * virtues they are currently failing at to find out that the door is open. */
const HOPE_WINGS = [
  {
    id: 'mercy',
    emoji: '\u{1F54A}️',
    title: { en: 'Mercy & Forgiveness', bn: 'রহমত ও মাগফিরাত' },
    blurb: {
      en: 'Thirteen chapters for the reader who is afraid it is too late. Every one of them is Allah saying, in a different way, that it is not.',
      bn: 'যার ভয়, অনেক দেরি হয়ে গেছে, তার জন্য তেরোটি অধ্যায়। প্রতিটিতে আল্লাহ ভিন্ন ভিন্ন ভাষায় একই কথাই বলছেন: দেরি হয়নি।',
    },
  },
  {
    id: 'character',
    emoji: '\u{1F331}',
    title: { en: 'The Beautiful Character', bn: 'সুন্দর চরিত্র' },
    blurb: {
      en: 'Twenty chapters on what a forgiven person then becomes — the qualities of the model Muslim as the Qur’an and the Sunnah describe them, not as we imagine them.',
      bn: 'যাকে মাফ করা হয়েছে, সে এরপর কেমন মানুষ হয়ে ওঠে — তা নিয়ে বিশটি অধ্যায়। আদর্শ মুসলিমের গুণগুলো এখানে সেভাবেই এসেছে যেভাবে কুরআন ও সুন্নাহ বলে, আমাদের কল্পনামতো নয়।',
    },
  },
];

/* The classical conditions of tawbah. Stated as steps because the commonest
 * reason a person stays stuck is not that they do not want to return — it is
 * that nobody told them what returning concretely involves. */
const HOPE_TAWBAH_STEPS = [
  {
    n: 1,
    title: { en: 'Stop', bn: 'থামুন' },
    body: {
      en: 'Leave the sin now, not at the end of the week. Repentance while still holding on to the act is a wish, not a return — 4:18 draws the line at the moment a person keeps going until death is at the door.',
      bn: 'গুনাহটা এখনই ছাড়ুন, সপ্তাহের শেষে নয়। কাজটা হাতে রেখে তওবা করা নিছক ইচ্ছা, ফিরে আসা নয়। ৪:১৮ দাগ টেনেছে ঠিক সেখানে, যেখানে মানুষ মৃত্যু দরজায় না আসা পর্যন্ত চালিয়ে যায়।',
    },
  },
  {
    n: 2,
    title: { en: 'Regret it', bn: 'অনুশোচনা করুন' },
    body: {
      en: 'Feel the weight of what you did rather than explaining it away. The Prophet ﷺ said that regret is repentance — the ache itself is already part of the turning back, not a sign that you have failed.',
      bn: 'যা করেছেন তার ভারটা বুকে নিন, যুক্তি দিয়ে হালকা করে ফেলবেন না। নবী ﷺ বলেছেন, অনুশোচনাই তওবা। ভেতরের ওই কষ্টটুকু ফেরার পথেরই অংশ, হেরে যাওয়ার আলামত নয়।',
    },
  },
  {
    n: 3,
    title: { en: 'Resolve not to return', bn: 'আর ফিরব না — এই নিয়ত করুন' },
    body: {
      en: 'Decide, honestly, that you are finished with it. The resolve is judged as you make it. If you later slip, you repent again — a broken resolve does not retroactively cancel the one you made sincerely.',
      bn: 'মন থেকে ঠিক করুন, এখানেই শেষ। সংকল্প যে অবস্থায় করছেন, সে অবস্থাতেই তা ধরা হয়। পরে পা পিছলে গেলে আবার তওবা করবেন। একবার ভেঙে গেল বলে আগের খাঁটি নিয়তটা মিথ্যা হয়ে যায় না।',
    },
  },
  {
    n: 4,
    title: { en: 'Return what is owed', bn: 'বান্দার হক শোধ করুন' },
    body: {
      en: 'If a person was wronged, a fourth condition applies: give back the money, clear the name, ask their pardon. Rights between Allah and you are forgiven by asking; rights between you and a person are not, until that person is made whole.',
      bn: 'কারও ওপর জুলুম হয়ে থাকলে চতুর্থ শর্তটাও আসে: টাকা ফিরিয়ে দিন, বদনাম ঘুচিয়ে দিন, তার কাছে মাফ চান। আল্লাহর হক চাইলেই মাফ হয়ে যায়। বান্দার হক হয় না, যতক্ষণ না মানুষটা তার পাওনা ফিরে পায়।',
    },
  },
  {
    n: 5,
    title: { en: 'Do it before the door shuts', bn: 'দরজা বন্ধ হওয়ার আগেই' },
    body: {
      en: 'The Prophet ﷺ said Allah accepts a servant’s repentance as long as the soul has not reached the throat. That is a deadline, and it is also a guarantee: until that moment, no amount of history disqualifies you.',
      bn: 'নবী ﷺ বলেছেন, প্রাণ কণ্ঠাগত না হওয়া পর্যন্ত আল্লাহ বান্দার তওবা কবুল করেন। এ যেমন সময়সীমা, তেমনি নিশ্চয়তাও। ওই মুহূর্ত আসার আগ পর্যন্ত অতীত যত ভারীই হোক, আপনি বাদ পড়েননি।',
    },
  },
];

/* The names Allah uses of Himself when the subject is forgiveness. Shown as a
 * panel on the mercy wing, because a reader who cannot believe they will be
 * forgiven is usually not disputing a verse — they are holding a picture of
 * Allah that these names contradict. Each carries a ref so the reader can open
 * the verse the name actually sits in rather than take it on assertion.
 *
 * as-Sittir is the one entry with no ref: it is from the Sunnah, not the
 * Qur'an, and is labelled as such rather than quietly given a verse. */
const HOPE_NAMES = [
  {
    ar: 'ٱلرَّحْمَٰن', translit: 'ar-Raḥmān', ref: '55:1',
    meaning: { en: 'The Most Merciful', bn: 'পরম করুণাময়' },
    note: {
      en: 'A form the Arabs used for an overwhelming, filling quality. Surah ar-Rahman opens with this name alone as a sentence, and the first thing attributed to it is that He taught the Qur’an.',
      bn: 'আরবরা এই গঠনটি ব্যবহার করত উপচে পড়া, পূর্ণ করে দেওয়া গুণ বোঝাতে। সূরা আর-রহমান শুরুই হয় কেবল এই নামটি দিয়ে একটি বাক্য হিসেবে, আর তার সাথে প্রথম যা যুক্ত করা হয় তা হলো তিনি কুরআন শিক্ষা দিয়েছেন।',
    },
  },
  {
    ar: 'ٱلرَّحِيم', translit: 'ar-Raḥīm', ref: '2:37',
    meaning: { en: 'The Especially Merciful', bn: 'অসীম দয়ালু' },
    note: {
      en: 'The second form is continuous rather than overwhelming — mercy that keeps arriving. It appears here at the moment Adam’s (AS) repentance is accepted.',
      bn: 'দ্বিতীয় গঠনটি উপচে পড়া নয়, ধারাবাহিক — যে রহমত আসতেই থাকে। এখানে তা আসে ঠিক সেই মুহূর্তে যখন আদম (আ)-এর তওবা কবুল হয়।',
    },
  },
  {
    ar: 'ٱلْغَفُور', translit: 'al-Ghafūr', ref: '39:53',
    meaning: { en: 'The Forgiving', bn: 'অতি ক্ষমাশীল' },
    note: {
      en: 'The root means to cover over — the same root as the helmet that shields a head. Forgiveness in Arabic is first of all concealment, then pardon.',
      bn: 'ধাতুমূলের অর্থ ঢেকে দেওয়া — মাথা রক্ষাকারী শিরস্ত্রাণের সেই একই মূল। আরবিতে ক্ষমা প্রথমত আবরণ, তারপর মার্জনা।',
    },
  },
  {
    ar: 'ٱلْغَفَّار', translit: 'al-Ghaffār', ref: '71:10',
    meaning: { en: 'The Perpetual Forgiver', bn: 'বারবার ক্ষমাকারী' },
    note: {
      en: 'The intensive form: not one who forgave once but one who forgives repeatedly, as a settled practice. Nuh (AS) uses this name as his argument to a people who had rejected him for centuries.',
      bn: 'অতিশয়ার্থক গঠন: যিনি একবার ক্ষমা করেছেন তিনি নন, যিনি বারবার ক্ষমা করেন, স্থায়ী অভ্যাস হিসেবে। শতাব্দীর পর শতাব্দী প্রত্যাখ্যানকারী এক জাতির সামনে নূহ (আ) এই নামটিকেই যুক্তি হিসেবে ব্যবহার করেন।',
    },
  },
  {
    ar: 'ٱلتَّوَّاب', translit: 'at-Tawwāb', ref: '9:104',
    meaning: { en: 'The Accepter of Repentance', bn: 'তওবা কবুলকারী' },
    note: {
      en: 'From the same verb as the servant’s tawbah. He turns toward the one who turns, and the intensive form means He does it again every time.',
      bn: 'বান্দার তওবার সেই একই ক্রিয়াপদ থেকে। যে ফেরে তিনি তার দিকে ফেরেন, আর অতিশয়ার্থক গঠন মানে প্রতিবারই তিনি তা আবার করেন।',
    },
  },
  {
    ar: 'ٱلْعَفُوّ', translit: 'al-‘Afuww', ref: '4:149',
    meaning: { en: 'The Pardoner', bn: 'মার্জনাকারী' },
    note: {
      en: '‘Afw goes further than forgiveness: it means to erase, so that no trace of the offence remains to be forgiven. Aishah (RA) was taught to ask for this name on Laylat al-Qadr.',
      bn: 'আফও ক্ষমার চেয়েও এগিয়ে যায়: এর অর্থ মুছে ফেলা, যাতে ক্ষমা করার মতো অপরাধের কোনো চিহ্নই আর না থাকে। আয়েশা (রা)-কে লাইলাতুল কদরে এই নামটি ধরে চাইতে শেখানো হয়েছিল।',
    },
  },
  {
    ar: 'ٱلْحَلِيم', translit: 'al-Ḥalīm', ref: '2:263',
    meaning: { en: 'The Forbearing', bn: 'অতি সহনশীল' },
    note: {
      en: 'The One who does not hurry to punish though He could. Every delay you have been given between a sin and its consequence is this name operating.',
      bn: 'যিনি শাস্তি দিতে সক্ষম হয়েও তাড়াহুড়ো করেন না। গুনাহ আর তার পরিণতির মাঝে আপনাকে যত অবকাশ দেওয়া হয়েছে, তার সবই এই নামের কাজ।',
    },
  },
  {
    ar: 'ٱلْوَدُود', translit: 'al-Wadūd', ref: '85:14',
    meaning: { en: 'The Loving', bn: 'অত্যন্ত স্নেহশীল' },
    note: {
      en: 'Wudd is affection that shows — love expressed rather than merely felt. The Qur’an places this name immediately after al-Ghafūr, in that order.',
      bn: 'উদ্দ হলো প্রকাশ পাওয়া ভালোবাসা — কেবল অনুভূত নয়, প্রকাশিত। কুরআন এই নামটি রাখে আল-গাফূর-এর ঠিক পরেই, এই ক্রমেই।',
    },
  },
  {
    ar: 'ٱلْكَرِيم', translit: 'al-Karīm', ref: '82:6',
    meaning: { en: 'The Generous', bn: 'মহা দয়াশীল' },
    note: {
      en: 'Used at the sharpest possible moment: what has deceived you concerning your Lord, the Generous? Even the rebuke names Him by the attribute that makes the rebuke survivable.',
      bn: 'ব্যবহৃত সবচেয়ে তীক্ষ্ণ মুহূর্তে: কিসে তোমাকে তোমার মহান রব সম্পর্কে ধোঁকায় ফেলল? ভর্ৎসনাটিও তাঁকে সেই গুণেই নাম দেয়, যা ভর্ৎসনাটিকে সহনীয় করে তোলে।',
    },
  },
  {
    ar: 'ٱلْبَرّ', translit: 'al-Barr', ref: '52:28',
    meaning: { en: 'The Most Kind', bn: 'পরম অনুগ্রহশীল' },
    note: {
      en: 'Quoted in Paradise as what its people used to call upon Him by in the world: indeed He is al-Barr, ar-Raḥīm. The name they used before is the name they use after.',
      bn: 'জান্নাতে উদ্ধৃত, দুনিয়ায় তার অধিবাসীরা তাঁকে যে নামে ডাকত: নিশ্চয়ই তিনি আল-বার, আর-রহিম। আগে তাঁরা যে নাম ব্যবহার করতেন, পরেও সেটিই।',
    },
  },
  {
    ar: 'ٱلرَّءُوف', translit: 'ar-Ra’ūf', ref: '2:143',
    meaning: { en: 'The Most Kind', bn: 'অতি স্নেহশীল' },
    note: {
      en: 'Ra’fah is tenderness toward someone in difficulty — a gentler, more particular word than raḥmah. Both this name and ar-Raḥīm are also used of the Prophet ﷺ in 9:128.',
      bn: 'রাফাহ হলো কষ্টে থাকা কারও প্রতি কোমলতা — রহমাহর চেয়ে নরম ও বেশি নির্দিষ্ট একটি শব্দ। এই নাম আর আর-রহিম দুটিই ৯:১২৮-এ নবী ﷺ-এর জন্যও ব্যবহৃত হয়েছে।',
    },
  },
  {
    ar: 'ٱلسِّتِّير', translit: 'as-Sittīr',
    src: 'Sunan Abi Dawud 4012 — from the Sunnah, not a Qur’anic name',
    meaning: { en: 'The Coverer', bn: 'আবরণকারী' },
    note: {
      en: 'The Prophet ﷺ said: “Indeed Allah is modest and covering, and He loves modesty and covering.” Named here because the covering you already received is this chapter’s strongest argument.',
      bn: 'নবী ﷺ বলেছেন: “নিশ্চয়ই আল্লাহ লজ্জাশীল ও আবরণকারী, আর তিনি লজ্জাশীলতা ও আবরণ ভালোবাসেন।” এখানে নাম নেওয়া হলো কারণ আপনি ইতিমধ্যেই যে আবরণ পেয়েছেন, তা-ই এই অধ্যায়ের সবচেয়ে জোরালো যুক্তি।',
    },
  },
];

const HOPE_CHAPTERS = [
  {
    id: 'never-despair',
    wing: 'mercy',
    emoji: '\u{1F305}',
    title: { en: 'Never Despair', bn: 'কখনো নিরাশ হয়ো না' },
    tagline: {
      en: 'The one verse to read first if you think you have run out of chances.',
      bn: 'আপনার যদি মনে হয় সুযোগ ফুরিয়ে গেছে, সবার আগে এই আয়াতটাই পড়ুন।',
    },
    dua: {
      ref: '3:16',
      why: {
        en: "The shortest possible way of saying what this chapter argues: we have believed, so forgive us. Belief is offered as the ground of the request — not a clean record.",
        bn: "এই অধ্যায়ের কথাটা সবচেয়ে ছোট করে বললে এই দাঁড়ায়: আমরা ঈমান এনেছি, তাই আমাদের মাফ করুন। চাওয়ার ভিত্তি হিসেবে সামনে রাখা হচ্ছে ঈমানকে, পরিষ্কার খাতাকে নয়।",
      },
    },
    intro: [
      {
        en: 'There is a verse in the Qur’an that begins by calling the worst of us “My servants.” Not “those people,” not “the sinners” — ‘ibādī, My servants, spoken by Allah about people described in the same breath as having gone to excess against their own souls. The address comes before the diagnosis. Whatever you have done, you are being spoken to as one who belongs to Him.',
        bn: 'কুরআনে এমন একটা আয়াত আছে, যেখানে আমাদের মধ্যে সবচেয়ে খারাপ মানুষটাকেও ডাকা হয়েছে “আমার বান্দা” বলে। “ওই লোকগুলো” নয়, “পাপী” নয় — ইবাদি, আমার বান্দাগণ। অথচ একই বাক্যেই বলা হচ্ছে, এরা নিজেদের ওপর বাড়াবাড়ি করেছে। দোষ ধরার আগেই ডাকটা এসে গেছে। আপনি যা-ই করে থাকুন, আপনাকে ডাকা হচ্ছে তাঁরই লোক বলে।',
      },
      {
        en: 'The Qur’an treats despair as a serious error, not as humility. In 12:87 Ya‘qub (AS) tells his sons that only disbelieving people despair of relief from Allah. In 15:56 Ibrahim (AS), told he will have a son in old age, answers that only the astray despair of their Lord’s mercy. Both are answers to people who had run the arithmetic and concluded it was over. Both say: your arithmetic left something out.',
        bn: 'নিরাশ হওয়াটা কুরআনের চোখে বিনয় নয়, বড় রকমের ভুল। ১২:৮৭-তে ইয়াকুব (আ) ছেলেদের বলছেন, আল্লাহর রহমত থেকে কেবল কাফির সম্প্রদায়ই নিরাশ হয়। ১৫:৫৬-তে ইবরাহিম (আ) বুড়ো বয়সে সন্তানের সুসংবাদ পেয়ে বলছেন, পথভ্রষ্ট ছাড়া কেউ নিজের রবের রহমত থেকে নিরাশ হয় না। দুজনই জবাব দিচ্ছেন এমন মানুষকে, যারা হিসাব কষে ধরে নিয়েছে সব শেষ। দুজনই বলছেন, হিসাবটা থেকে একটা জিনিস বাদ পড়ে গেছে।',
      },
    ],
    verses: [
      {
        ref: '39:53',
        note: {
          en: 'Read the order of the words. The transgression is named, then the command is “do not despair,” then the reason: He forgives all sins — jamī‘an, all of them together, not a selection. Ibn Kathir records that when this verse came, the Companions understood it as the most hope-giving verse in the Book.',
          bn: 'কথাগুলো কোন ক্রমে এসেছে দেখুন। আগে বাড়াবাড়ির কথা, তারপর হুকুম “নিরাশ হয়ো না”, তারপর কারণ: তিনি সব গুনাহ মাফ করেন। শব্দটা জামিআন — সবগুলো একসঙ্গে, বেছে বেছে নয়। ইবনে কাসির লিখেছেন, আয়াতটি নাজিল হলে সাহাবিরা একে কুরআনের সবচেয়ে আশা জাগানো আয়াত বলে বুঝেছিলেন।',
        },
      },
      {
        ref: '12:87',
        note: {
          en: 'Spoken by a father who had lost one son to a well and a second to a prison, after years of blindness from weeping. He does not say relief is likely. He says despairing of it is what disbelievers do — which makes hope a matter of who you understand Allah to be, not of how your situation looks.',
          bn: 'কথাটা বলছেন এমন এক বাবা, যাঁর এক ছেলে গেছে কূপে, আরেকজন কারাগারে, আর বছরের পর বছর কাঁদতে কাঁদতে যাঁর চোখ নষ্ট হয়ে গেছে। তিনি বলছেন না যে মুক্তি আসবেই। বলছেন, ওটা থেকে নিরাশ হওয়া কাফিরের কাজ। অর্থাৎ আশা টিকে থাকে আপনি আল্লাহকে কেমন জানেন তার ওপর, আপনার অবস্থা দেখতে কেমন তার ওপর নয়।',
        },
      },
      {
        ref: '15:56',
        note: {
          en: 'The context is worth holding on to: this is Ibrahim (AS) receiving good news, not bad. Despair had not even been suggested to him — he raises it himself to dismiss it, as if to say that a man who knows his Lord does not keep that option on the table at all.',
          bn: 'কথাটা কোন প্রসঙ্গে, সেটা মনে রাখার মতো। ইবরাহিম (আ) তখন সুসংবাদ পাচ্ছেন, দুঃসংবাদ নয়। নিরাশার কথা তাঁকে কেউ বলেনি; তিনি নিজেই কথাটা তুলে নাকচ করে দিলেন। যেন বলছেন, নিজের রবকে যে চেনে, তার কাছে ও পথটা খোলাই থাকে না।',
        },
      },
      {
        ref: '29:23',
        note: {
          en: 'The counterweight, and it is precise. Those who have despaired of His mercy here are those who disbelieved in His signs and in meeting Him — despair is described as a consequence of rejecting Him, not as a punishment for having sinned. That distinction is the whole chapter.',
          bn: 'উল্টো দিকটাও কুরআন বলেছে, আর খুব মেপে বলেছে। এখানে যারা তাঁর রহমত থেকে নিরাশ, তারা সেই লোক যারা তাঁর নিদর্শন আর তাঁর সাক্ষাৎ দুটোকেই অস্বীকার করেছে। নিরাশা এসেছে তাঁকে অস্বীকার করার পরিণতি হিসেবে, গুনাহ করার শাস্তি হিসেবে নয়। এই ফারাকটুকুই গোটা অধ্যায়ের কথা।',
        },
      },
    ],
    hadith: [
      {
        src: 'Jami‘ at-Tirmidhi 3540 (hasan)',
        text: {
          en: 'Allah said: “O son of Adam, as long as you call upon Me and place your hope in Me, I will forgive you for what you have done, and I will not mind. O son of Adam, were your sins to reach the clouds of the sky and then you sought My forgiveness, I would forgive you. O son of Adam, were you to come to Me with sins nearly as great as the earth and then meet Me without associating anything with Me, I would bring you forgiveness nearly as great as it.”',
          bn: 'আল্লাহ বলেন: “হে আদম সন্তান, যতক্ষণ তুমি আমাকে ডাকবে ও আমার কাছে আশা রাখবে, আমি তোমাকে ক্ষমা করব তুমি যা করেছ তার জন্য, এবং আমি ভ্রুক্ষেপ করব না। হে আদম সন্তান, তোমার গুনাহ যদি আকাশের মেঘ পর্যন্ত পৌঁছে যায় এবং তারপর তুমি আমার ক্ষমা চাও, আমি তোমাকে ক্ষমা করব। হে আদম সন্তান, তুমি যদি পৃথিবীভরা গুনাহ নিয়ে আমার কাছে আসো এবং আমার সাথে কিছু শরিক না করে আমার সাক্ষাৎ করো, আমি তোমার কাছে ততটাই ক্ষমা নিয়ে আসব।”',
        },
        note: {
          en: 'Three escalations, and the condition attached to the last one is not a clean record — it is tawhīd. What disqualifies is associating partners with Allah, not the size of the pile.',
          bn: 'তিন ধাপে কথাটা বাড়ছে। শেষ ধাপে যে শর্ত জুড়ে দেওয়া হলো তা পরিষ্কার খাতা নয়, তা তাওহিদ। বাদ পড়ে সে-ই, যে আল্লাহর সঙ্গে শরিক করে; গুনাহের স্তূপ কত উঁচু, তা দিয়ে কেউ বাদ পড়ে না।',
        },
      },
      {
        src: 'Jami‘ at-Tirmidhi 2499, Sunan Ibn Majah 4251 (hasan)',
        text: {
          en: 'The Messenger of Allah ﷺ said: “Every son of Adam sins, and the best of those who sin are those who repent.”',
          bn: 'রাসূলুল্লাহ ﷺ বলেছেন: “প্রত্যেক আদম সন্তানই গুনাহ করে, আর গুনাহকারীদের মধ্যে সর্বোত্তম তারাই যারা তওবা করে।”',
        },
        note: {
          en: 'Note what it does not say. It does not say the best people are those who never sin — that category is not offered to us. It says the ranking happens among sinners, and repentance is what sorts it.',
          bn: 'খেয়াল করুন, হাদিসটি কী বলছে না। বলছে না যে সেরা মানুষ তারাই যারা কখনো গুনাহ করে না। ও রকম দল আমাদের জন্য রাখাই হয়নি। বলছে, ভালো-মন্দের সাজানোটা হয় গুনাহগারদের মধ্যেই, আর সাজায় তওবা।',
        },
      },
    ],
    practice: [
      {
        en: 'Say it out loud once, in your own words: “Allah forgives all sins, and that includes mine.” Despair often survives because it is never stated plainly enough to be contradicted.',
        bn: 'একবার নিজের মুখে জোরে বলুন: “আল্লাহ সব গুনাহ মাফ করেন, আমার গুনাহও তার ভেতরে।” নিরাশা টিকে থাকে চুপচাপ। মনের কথাটা কখনো মুখে এনে সোজাসুজি বলা হয় না, বললেই তো জবাব দেওয়া যেত।',
      },
      {
        en: 'Memorise 39:53 this week. It is one verse, and it is the one your own mind will need to quote back at you at two in the morning.',
        bn: 'এ সপ্তাহে ৩৯:৫৩ মুখস্থ করে ফেলুন। আয়াত তো একটাই। রাত দুটোয় নিজের মনকে এই কথাটাই শুনিয়ে দিতে হবে।',
      },
      {
        en: 'Do not wait to feel forgiven before you act forgiven. Pray the next prayer on time. The feeling follows the return; it rarely precedes it.',
        bn: 'মাফ পেয়েছি — এই অনুভূতির অপেক্ষায় বসে থাকবেন না, মাফপ্রাপ্ত মানুষের মতো চলা শুরু করুন। পরের নামাজটা সময়মতো পড়ুন। অনুভূতি ফেরার পরে আসে, আগে আসে না।',
      },
    ],
  },

  {
    id: 'mercy-encompasses',
    wing: 'mercy',
    emoji: '\u{1F30A}',
    title: { en: 'A Mercy Wider Than Everything', bn: 'যে রহমত সবকিছু ছাড়িয়ে যায়' },
    tagline: {
      en: 'Not one of His attributes among many — the one He wrote upon Himself.',
      bn: 'বহু গুণের একটা নয়। এই একটাই তিনি নিজের ওপর লিখে নিয়েছেন।',
    },
    dua: {
      ref: '23:109',
      why: {
        en: "It ends by naming Him the best of those who show mercy — arguing from what He is, rather than from what the asker deserves.",
        bn: "দোয়াটা শেষ হচ্ছে তাঁকে সবচেয়ে বড় দয়ালু বলে। ভরসাটা তাই তিনি কেমন তার ওপর, যে চাইছে সে কী পাওয়ার যোগ্য তার ওপর নয়।",
      },
    },
    intro: [
      {
        en: 'Every surah but one opens by naming Allah twice over with the same root: ar-Raḥmān, ar-Raḥīm. Before He is named as Judge, before He is named as Powerful, He is named as Merciful, and then named as Merciful again in a second form. A Muslim who prays the five prayers says this line at least seventeen times a day. It is meant to be the first thing about Him you know.',
        bn: 'একটা সূরা বাদে বাকি সব সূরার শুরুতেই আল্লাহর দুটি নাম, দুটোই এক মূল থেকে: আর-রহমান, আর-রহিম। বিচারক বলার আগে, ক্ষমতাবান বলার আগে তাঁর পরিচয় দেওয়া হচ্ছে দয়ালু বলে, তারপর আরেক রূপে আবারও দয়ালু বলে। যে মুসলিম পাঁচ ওয়াক্ত নামাজ পড়ে, সে দিনে অন্তত সতেরোবার এই লাইনটা বলে। তাঁর সম্পর্কে সবার আগে এটাই জানার কথা।',
      },
      {
        en: 'Twice in Surah al-An‘am the Qur’an uses a startling expression: kataba ‘alā nafsihi ar-raḥmah — He has decreed mercy upon Himself, written it as an obligation He has taken on. Nothing else in the Book is described as something Allah has made binding on Himself. The mercy is not a mood He is in. It is a commitment He has made.',
        bn: 'সূরা আনআমে দুবার কুরআন অবাক করা একটা কথা বলেছে: কাতাবা আলা নাফসিহির-রহমাহ। তিনি নিজের ওপর রহমত লিখে নিয়েছেন, নিজের ঘাড়ে তুলে নেওয়া দায়িত্ব হিসেবেই লিখে রেখেছেন। গোটা কুরআনে আর কোনো কিছুকেই আল্লাহ নিজের ওপর অবশ্য করেছেন বলে বলা হয়নি। রহমত তাঁর মেজাজ নয়। রহমত তাঁর দেওয়া কথা।',
      },
    ],
    verses: [
      {
        ref: '7:156',
        note: {
          en: 'Both halves of the sentence come from Him, and they are not symmetrical. The punishment is qualified — “whom I will.” The mercy is not: it encompasses all things, wasi‘at kulla shay’. Whatever exists is inside it, which necessarily includes you and what you did.',
          bn: 'বাক্যের দুই অংশই তাঁরই কথা, অথচ দুটো সমান নয়। আজাবের সঙ্গে শর্ত জোড়া আছে: “যাকে ইচ্ছা।” রহমতের সঙ্গে নেই। রহমত সবকিছু ছাড়িয়ে গেছে, ওয়াসিআত কুল্লা শাইয়িন। যা কিছু আছে সবই এর ভেতরে, কাজেই আপনিও, আর আপনি যা করেছেন সেটাও।',
        },
      },
      {
        ref: '40:7',
        note: {
          en: 'The angels who carry the Throne are given one recorded prayer in the Qur’an, and it is istighfār — for the believers, not for themselves. They open it by addressing Allah as the One whose mercy and knowledge encompass all things. The beings closest to Him spend their speech asking forgiveness for people like us.',
          bn: 'আরশ বহনকারী ফেরেশতাদের একটিমাত্র দোয়াই কুরআনে এসেছে, আর সেটা ইস্তিগফার। নিজেদের জন্য নয়, মুমিনদের জন্য। শুরুতেই তাঁরা আল্লাহকে ডাকছেন এই বলে যে তাঁর রহমত আর ইলম সবকিছু ছাড়িয়ে আছে। তাঁর সবচেয়ে কাছের সৃষ্টিরা তাঁদের কথাটুকু খরচ করছেন আমাদের মতো মানুষের মাফ চেয়ে।',
        },
      },
      {
        ref: '6:12',
        note: {
          en: 'The question asked is about ownership of the heavens and the earth. The answer given goes further than the question: He owns everything, and He has written mercy upon Himself. Absolute power is introduced and then immediately characterised — this is what the One who owns everything has chosen to be like.',
          bn: 'প্রশ্নটা আসমান-জমিন কার, তা নিয়ে। উত্তর প্রশ্নের চেয়ে এক ধাপ এগিয়ে যায়: সব তাঁর, আর তিনি নিজের ওপর রহমত লিখে নিয়েছেন। পুরো ক্ষমতার কথা তুলেই সঙ্গে সঙ্গে বলে দেওয়া হচ্ছে সেই ক্ষমতা কেমন। সবকিছুর মালিক নিজেই বেছে নিয়েছেন এমন হতে।',
        },
      },
      {
        ref: '6:54',
        note: {
          en: 'Here the same phrase is repeated and then unpacked, and the unpacking is the point: the mercy He wrote upon Himself is spelled out as forgiveness for whoever among you does wrong in ignorance, then repents and puts it right. The verse opens with the Prophet ﷺ being told to greet such people with salām.',
          bn: 'এখানে সেই একই কথা আবার এসেছে, তবে এবার খুলে বলা হয়েছে। আর খুলে বলাটাই আসল কথা: নিজের ওপর যে রহমত তিনি লিখেছেন, তার মানে হলো তোমাদের মধ্যে যে না বুঝে মন্দ কাজ করে, তারপর তওবা করে ও নিজেকে শুধরে নেয়, তার মাফ। আর আয়াতটার শুরুই হচ্ছে নবী ﷺ-কে এই হুকুম দিয়ে যে এমন মানুষদের সালাম দিয়ে বরণ করে নিন।',
        },
      },
      {
        ref: '21:107',
        note: {
          en: 'The Prophet ﷺ is not described as sent with a mercy, or bringing one. He is described as being one — raḥmatan lil-‘ālamīn. The mission and the mercy are the same object, which tells you what shape the religion he brought is supposed to have.',
          bn: 'কুরআন বলেনি যে নবী ﷺ রহমত নিয়ে এসেছেন, বা রহমতসহ পাঠানো হয়েছে। বলেছে, তিনি নিজেই রহমত — রহমাতাল্লিল আলামিন। কাজ আর রহমত এখানে আলাদা দুটো জিনিস নয়, একটাই। তিনি যে দ্বীন এনেছেন তার চেহারা কেমন হওয়ার কথা, এতেই বোঝা যায়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 7422, Sahih Muslim 2751',
        text: {
          en: 'The Prophet ﷺ said: “When Allah created the creation, He wrote in a book with Him above the Throne: ‘Indeed My mercy prevails over My wrath.’”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ যখন সৃষ্টি সৃজন করলেন, তখন আরশের উপরে তাঁর কাছে রক্ষিত একটি কিতাবে লিখলেন: ‘নিশ্চয়ই আমার রহমত আমার ক্রোধের উপর প্রবল।’”',
        },
        note: {
          en: 'The writing is dated to before we existed. Nothing any of us has since done was a factor in it, which is exactly why nothing any of us has since done can overturn it.',
          bn: 'কথাটা লেখা হয়েছে আমরা থাকারও আগে। আমাদের কোনো কাজ ওই লেখায় ভূমিকা রাখেনি। ঠিক সে কারণেই আমাদের কোনো কাজ ওটা উল্টেও দিতে পারে না।',
        },
      },
      {
        src: 'Sahih Muslim 2752',
        text: {
          en: 'The Prophet ﷺ said: “Allah has made mercy in one hundred parts. He kept ninety-nine parts with Him and sent down one part to the earth. From that one part the creation shows mercy to one another, so that a mare lifts her hoof away from her foal, fearing that she might injure it.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ রহমতকে একশ ভাগ করেছেন। নিরানব্বই ভাগ তিনি নিজের কাছে রেখেছেন আর এক ভাগ পৃথিবীতে নামিয়েছেন। সেই এক ভাগ থেকেই সৃষ্টি পরস্পরের প্রতি দয়া দেখায়, এমনকি ঘোড়া তার বাচ্চার গায়ে আঘাত লাগার আশঙ্কায় খুর সরিয়ে নেয়।”',
        },
        note: {
          en: 'Every kindness you have ever received — a mother’s, a stranger’s, an animal’s toward its young — is drawn from one hundredth. The remaining ninety-nine are held back for the Day you will need them.',
          bn: 'জীবনে আপনি যত দয়া পেয়েছেন, সব ওই এক ভাগ থেকে। মায়ের দয়া, অচেনা কারও দয়া, পশুর নিজের বাচ্চার প্রতি দয়া — সবই। বাকি নিরানব্বই ভাগ তুলে রাখা আছে সেই দিনের জন্য, যেদিন আপনার সবচেয়ে বেশি দরকার হবে।',
        },
      },
    ],
    practice: [
      {
        en: 'Next time you say bismillāh, slow down on ar-Raḥmān ar-Raḥīm instead of running the phrase together. You are naming the thing you most need.',
        bn: 'পরের বার বিসমিল্লাহ বলার সময় পুরোটা এক টানে বলে ফেলবেন না; আর-রহমান আর-রহিম-এ এসে একটু থামুন। যেটা আপনার সবচেয়ে বেশি দরকার, আপনি তারই নাম নিচ্ছেন।',
      },
      {
        en: 'Learn 7:156 as a single sentence in Arabic: wa raḥmatī wasi‘at kulla shay’. Six words, and they settle most arguments your fear will start with you.',
        bn: '৭:১৫৬-এর অংশটুকু আরবিতেই মুখস্থ করুন: ওয়া রহমতী ওয়াসিআত কুল্লা শাইয়িন। কয়েকটা শব্দ মাত্র। মনের ভয় আপনার সঙ্গে যত তর্ক জুড়বে, তার বেশির ভাগই এতেই থেমে যায়।',
      },
      {
        en: 'Spend one of your hundredth-part today: forgive somebody a small thing you were entitled to hold on to. You are practising the attribute you are asking Him for.',
        bn: 'ওই এক ভাগ রহমতের কিছুটা আজ খরচ করুন। ছোট কোনো বিষয়ে কাউকে মাফ করে দিন, যেটা ধরে রাখার অধিকার আপনার ছিল। তাঁর কাছে যে গুণটা চাইছেন, নিজেই তার চর্চা করছেন।',
      },
    ],
  },

  {
    id: 'door-never-closes',
    wing: 'mercy',
    emoji: '\u{1F6AA}',
    title: { en: 'The Door That Does Not Close', bn: 'যে দরজা বন্ধ হয় না' },
    tagline: {
      en: 'Tawbah has a deadline, but no quota — and the deadline is later than you think.',
      bn: 'তওবার সময়সীমা আছে, সংখ্যার হিসাব নেই। আর সেই সময়সীমা আপনি যা ভাবছেন তার চেয়ে অনেক পরে।',
    },
    dua: {
      ref: '23:118',
      why: {
        en: "Two verbs and nothing else: forgive, and have mercy. When you cannot compose anything of your own, this is already composed.",
        bn: "দুটো কথা, ব্যস: মাফ করুন, আর দয়া করুন। নিজের ভাষায় কিছু গুছিয়ে উঠতে না পারলে এটা আগে থেকেই গোছানো আছে।",
      },
    },
    intro: [
      {
        en: 'Tawbah in Arabic means to turn back. It is a word about direction, not about emotion, and Allah applies it to Himself as well as to us: He is at-Tawwāb, the One who constantly turns toward those who turn to Him. In the Qur’an the servant’s turning and Allah’s turning are described with the same verb, which is why 9:118 can say He turned to them so that they might turn to Him. He moves first.',
        bn: 'আরবিতে তওবা মানে ফিরে আসা। শব্দটা দিক বোঝায়, মনের অবস্থা নয়। আল্লাহ শব্দটা আমাদের মতো নিজের জন্যও ব্যবহার করেন: তিনি আত-তাওয়াব, যিনি বারবার তাদের দিকে ফেরেন যারা তাঁর দিকে ফেরে। কুরআনে বান্দার ফেরা আর আল্লাহর ফেরা — দুটোই এক ক্রিয়াপদ। সে জন্যই ৯:১১৮ বলতে পারে, তিনি তাদের দিকে ফিরেছেন যাতে তারা তাঁর দিকে ফেরে। পা বাড়ান তিনিই আগে।',
      },
      {
        en: 'People assume the door has a counter on it — that repentance works a few times and then stops being taken seriously. The Qur’an sets exactly two boundaries, and neither one is a number: repentance offered as death arrives is not accepted (4:18), and dying in disbelief is not covered. Everything on this side of those two lines is open, however many times you have been through it.',
        bn: 'মানুষ ভাবে, দরজায় বুঝি গোনার কল লাগানো আছে — কয়েকবার তওবা চলে, তারপর আর ধরা হয় না। কুরআন সীমা টেনেছে ঠিক দুটো, আর একটাও সংখ্যার নয়। মৃত্যু সামনে এসে দাঁড়ানোর পর করা তওবা কবুল হয় না (৪:১৮), আর কুফরির ওপর মারা গেলে এ কথা খাটে না। এই দুই দাগের এপাশে সব খোলা, আপনি যতবারই এ পথে ঘুরে এসে থাকুন।',
      },
    ],
    verses: [
      {
        ref: '4:17-18',
        note: {
          en: 'Read as a pair. The first verse looks restrictive — repentance is for those who sin in ignorance and repent soon — until the second verse defines what “soon” excludes: only the person who keeps going until death is actually at the door. Between those two, “soon” means the rest of your life.',
          bn: 'দুটো আয়াত একসঙ্গে পড়ুন। প্রথমটা শুনতে সংকীর্ণ লাগে: তওবা তাদের জন্য যারা না বুঝে গুনাহ করে আর তাড়াতাড়ি ফিরে আসে। কিন্তু দ্বিতীয় আয়াতেই বলা হচ্ছে, “তাড়াতাড়ি”-র বাইরে পড়ে কে — কেবল সেই লোক, যে মৃত্যু দরজায় না আসা পর্যন্ত চালিয়ে যায়। এ দুইয়ের মাঝখানে “তাড়াতাড়ি” মানে আপনার বাকি জীবনটুকু।',
        },
      },
      {
        ref: '66:8',
        note: {
          en: 'The command is to repent with tawbatan naṣūḥā — sincere repentance, from a root that also means to mend torn cloth. Then comes the word ‘asā, “perhaps,” which unsettles readers. Scholars note that ‘asā from Allah is a certainty; the softness of the wording keeps the repentant humble without leaving him unsure.',
          bn: 'হুকুম হলো তওবাতান নাসূহা করা, অর্থাৎ খাঁটি তওবা। শব্দটার মূলের আরেক অর্থ ছেঁড়া কাপড় সেলাই করা। এরপর আসে ‘আসা শব্দটা, মানে “সম্ভবত”, আর এখানেই পাঠকের মনে খচখচ লাগে। আলিমরা বলেন, আল্লাহর মুখে ‘আসা মানে নিশ্চিত। ভাষার নরম ভাবটা তওবাকারীকে বিনয়ী রাখার জন্য, তাকে দোটানায় ফেলার জন্য নয়।',
        },
      },
      {
        ref: '42:25',
        note: {
          en: 'Two separate acts in one sentence: He accepts the repentance, and He pardons the misdeeds. Acceptance without erasure would still leave a record; the verse gives both. The closing clause — He knows what you do — sits there without threat, simply as fact.',
          bn: 'এক বাক্যেই দুটো আলাদা কাজ: তিনি তওবা কবুল করেন, আর মন্দ কাজগুলো মুছে দেন। শুধু কবুল হলে খাতায় লেখাটা থেকেই যেত; আয়াত দুটোই দিচ্ছে। শেষে যে কথাটা আছে, তিনি জানেন তোমরা যা করো — সেটা ভয় দেখানোর জন্য নয়, শুধু সত্যটুকু বলার জন্য।',
        },
      },
      {
        ref: '20:82',
        note: {
          en: 'Addressed to Musa (AS) about a nation that had just worshipped a calf. Four things are named: repents, believes, does righteousness, then stays guided. The fourth is the one people skip — the door opens on the turn, but the walk is what the verse actually asks for.',
          bn: 'কথাটা মুসা (আ)-কে বলা হয়েছে এমন এক জাতির ব্যাপারে, যারা সবে বাছুরের পূজা করে এসেছে। চারটি জিনিসের কথা আছে: তওবা করে, ঈমান আনে, নেক আমল করে, তারপর হেদায়েতের ওপর টিকে থাকে। চার নম্বরটাই মানুষ এড়িয়ে যায়। ফিরলেই দরজা খুলে যায় ঠিকই, কিন্তু আয়াত চাইছে পথটুকু হাঁটা।',
        },
      },
      {
        ref: '9:104',
        note: {
          en: 'Framed as a question — do they not know? — which implies the answer is available and being missed. What is being missed is not that forgiveness exists but that He is the one who receives the turning, personally, as the Accepting of Repentance.',
          bn: 'কথাটা এসেছে প্রশ্ন হয়ে: তারা কি জানে না? অর্থাৎ উত্তরটা হাতের কাছেই আছে, চোখেই পড়ছে না। যেটা চোখ এড়াচ্ছে তা এই নয় যে মাফ আছে; বরং এই যে তিনি নিজেই সেই ফেরাটা গ্রহণ করেন, আত-তাওয়াব হয়ে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Jami‘ at-Tirmidhi 3537, Sunan Ibn Majah 4253 (hasan)',
        text: {
          en: 'The Prophet ﷺ said: “Allah accepts the repentance of a servant as long as the death rattle has not reached his throat.”',
          bn: 'নবী ﷺ বলেছেন: “বান্দার প্রাণ কণ্ঠাগত না হওয়া পর্যন্ত আল্লাহ তার তওবা কবুল করেন।”',
        },
        note: {
          en: 'The deadline is set at the last conscious moment of a life, not at some earlier point of no return. Every day you are reading this, you are inside it.',
          bn: 'সময় বেঁধে দেওয়া হয়েছে জীবনের একেবারে শেষ সচেতন মুহূর্তে, তার আগের কোনো “আর ফেরা যাবে না” জায়গায় নয়। যেদিনই আপনি এ লেখা পড়ছেন, আপনি সীমার ভেতরেই আছেন।',
        },
      },
      {
        src: 'Sahih Muslim 2749',
        text: {
          en: 'The Prophet ﷺ said: “By the One in whose Hand is my soul, if you did not sin, Allah would take you away and bring a people who sin, and who then seek Allah’s forgiveness so that He forgives them.”',
          bn: 'নবী ﷺ বলেছেন: “সেই সত্তার কসম যাঁর হাতে আমার প্রাণ, তোমরা যদি গুনাহ না করতে, আল্লাহ তোমাদের সরিয়ে এমন এক জাতি আনতেন যারা গুনাহ করে, তারপর আল্লাহর কাছে ক্ষমা চায়, আর তিনি তাদের ক্ষমা করেন।”',
        },
        note: {
          en: 'A hard hadith to misread if you read it whole: it is not permission to sin, it is a statement that Allah wills a creation that needs forgiving, because being forgiven is itself part of what He wants from us.',
          bn: 'পুরোটা পড়লে হাদিসটা ভুল বোঝা কঠিন। এ গুনাহের ছাড়পত্র নয়। এ কথাটা বলছে যে আল্লাহ এমন সৃষ্টিই চেয়েছেন যার মাফ দরকার হয়, কারণ মাফ চাওয়া-পাওয়াটাই তিনি আমাদের কাছে যা চান তার একটা অংশ।',
        },
      },
    ],
    practice: [
      {
        en: 'Repent again for the thing you already repented for and went back to. Repeating tawbah is not evidence that the first one was rejected — it is the normal shape of a believing life.',
        bn: 'যে গুনাহে তওবা করেও আবার ফিরে গিয়েছিলেন, তার জন্য আরেকবার তওবা করুন। বারবার তওবা করা মানে এই নয় যে আগেরটা কবুল হয়নি। ঈমানদারের জীবন এভাবেই চলে।',
      },
      {
        en: 'Take the five steps in the panel on the main page one at a time today, in order. Most people are stuck on step four, not step one.',
        bn: 'মূল পাতার পাঁচটা ধাপ আজ একটা একটা করে পার হোন, ক্রম মেনে। বেশির ভাগ মানুষ আটকে থাকে চার নম্বরে, এক নম্বরে নয়।',
      },
      {
        en: 'Stop setting a start date. “From next month” is the one sentence 4:18 warns against, in slower motion.',
        bn: 'শুরু করার তারিখ ঠিক করা বন্ধ করুন। “আগামী মাস থেকে” — ৪:১৮ ঠিক এই কথাটার বিরুদ্ধেই সতর্ক করছে, একটু ধীর ভঙ্গিতে।',
      },
    ],
  },
  {
    id: 'no-sin-too-large',
    wing: 'mercy',
    emoji: '\u{26F0}️',
    title: { en: 'No Sin Too Large', bn: 'কোনো গুনাহই বড় নয়' },
    tagline: {
      en: 'The Qur’an names exactly one thing that is not forgiven — and it is not what most people fear.',
      bn: 'মাফ হয় না, এমন জিনিস কুরআন একটাই বলেছে। মানুষ যা নিয়ে ভয় পায়, সেটা তা নয়।',
    },
    dua: {
      ref: '3:147',
      why: {
        en: "It asks forgiveness for sins and for israf — excess, the same word 39:53 uses of its audience — and then asks for firm feet, because staying is the harder half.",
        bn: "দোয়াটা মাফ চায় গুনাহের জন্য, আর ইসরাফের জন্যও। ইসরাফ মানে বাড়াবাড়ি — ৩৯:৫৩-এ যাদের সম্বোধন করা হয়েছে তাদের বোঝাতেও এই শব্দটাই। তারপর চায় পা অবিচল থাকুক, কারণ টিকে থাকাটাই কঠিন অংশ।",
      },
    },
    intro: [
      {
        en: 'A person who has done something they consider unforgivable usually has a private list: this one, and that one, and the years of that other thing. The Qur’an has a list too, and it is one item long. Twice in Surah an-Nisa, in almost identical wording, Allah states that He does not forgive shirk and forgives whatever is less than that for whom He wills. Everything on your list falls under “less than that.”',
        bn: 'যে মানুষ এমন কিছু করে ফেলেছে যা তার নিজের কাছেই অমার্জনীয়, তার মনে সাধারণত একটা গোপন তালিকা থাকে: এটা, ওটা, আর ওই জিনিসটার সেই বছরগুলো। কুরআনেরও তালিকা আছে, তবে তাতে নাম একটাই। সূরা নিসায় দুবার, প্রায় একই কথায়, আল্লাহ বলেছেন — শিরক তিনি মাফ করেন না, আর তার চেয়ে কম যা কিছু, যাকে ইচ্ছা তার জন্য মাফ করে দেন। আপনার তালিকার সবটুকুই ওই “তার চেয়ে কম”-এর ভেতরে।',
      },
      {
        en: 'And even shirk is not outside repentance while a person lives — the whole Makkan mission was built on people who had worshipped idols for decades and were then forgiven completely. What 4:48 describes is the state of one who dies upon it. The Companions include a man who killed the Prophet’s ﷺ own uncle and a woman who had mutilated his body; both later accepted Islam and both were forgiven.',
        bn: 'শিরকও মানুষ বেঁচে থাকতে তওবার বাইরে নয়। মক্কার গোটা দাওয়াতটাই তো গড়ে উঠেছিল এমন মানুষ নিয়ে, যারা যুগ যুগ ধরে মূর্তি পূজা করে এসেছিল, তারপর পুরোপুরি মাফ পেয়ে গিয়েছিল। ৪:৪৮ যার কথা বলছে, সে হলো যে ওই অবস্থাতেই মারা যায়। সাহাবিদের মধ্যে এমন একজন আছেন যিনি নবী ﷺ-এর আপন চাচাকে হত্যা করেছিলেন, আর এমন একজন নারীও আছেন যিনি তাঁর দেহ বিকৃত করেছিলেন। দুজনই পরে ইসলাম কবুল করেন, আর দুজনই মাফ পান।',
      },
    ],
    verses: [
      {
        ref: '4:48',
        note: {
          en: 'Read the two halves against each other. The first is absolute and has no exception clause. The second is deliberately open — “what is less than that, for whom He wills” — and mā dūna dhālik covers everything a human being is capable of doing short of associating a partner with Allah.',
          bn: 'দুই অংশ পাশাপাশি রেখে পড়ুন। প্রথমটায় কোনো ফাঁক নেই, কথাটা চূড়ান্ত। দ্বিতীয়টা ইচ্ছে করেই খোলা রাখা: “তার চেয়ে কম যা কিছু, যাকে ইচ্ছা।” আর মা দূনা যালিক-এর ভেতরে পড়ে আল্লাহর সঙ্গে শরিক করা ছাড়া মানুষ যা কিছু করতে পারে তার সব।',
        },
      },
      {
        ref: '4:110',
        note: {
          en: 'Fourteen words in Arabic and a complete instruction inside them: do wrong, then seek forgiveness, and you will find Him Forgiving. The verb is yajid — he will find. Not “he may find.” The finding is stated as an outcome, not a hope.',
          bn: 'আরবিতে কয়েকটা মাত্র শব্দ, অথচ পুরো নির্দেশটাই তার ভেতরে: মন্দ কাজ করে ফেলেছ, তারপর মাফ চাও, তাঁকে ক্ষমাশীল পাবে। ক্রিয়াপদটা ইয়াজিদু — পাবে। “হয়তো পাবে” নয়। পাওয়াটা এখানে ফলাফল, আশা নয়।',
        },
      },
      {
        ref: '3:135-136',
        note: {
          en: 'A portrait of the believer who sins rather than of the believer who does not. Four moves: they remember Allah, they seek forgiveness, they do not persist knowingly — and the rhetorical question sits in the middle, who forgives sins except Allah, as if to stop the excuse before it forms.',
          bn: 'এ ছবিটা গুনাহ-না-করা মুমিনের নয়, গুনাহ-করা মুমিনের। চারটে ধাপ: তারা আল্লাহকে স্মরণ করে, মাফ চায়, আর জেনেশুনে ওই কাজে লেগে থাকে না। মাঝখানে বসানো আছে সেই প্রশ্নটা — আল্লাহ ছাড়া গুনাহ মাফ করে কে? যেন অজুহাত মাথা তোলার আগেই তাকে থামিয়ে দেওয়া হলো।',
        },
      },
      {
        ref: '5:39',
        note: {
          en: 'Placed immediately after the ruling on theft — the hardest possible position for a verse of forgiveness. The Qur’an states a criminal penalty and then, in the very next breath, says that whoever repents and reforms, Allah turns to him. Punishment in the world and pardon with Allah are not the same ledger.',
          bn: 'আয়াতটা বসানো হয়েছে চুরির শাস্তির ঠিক পরেই। মাফের আয়াতের জন্য এর চেয়ে কঠিন জায়গা আর হয় না। কুরআন শাস্তির বিধান দিয়ে পরের নিঃশ্বাসেই বলছে, যে তওবা করে ও নিজেকে শুধরে নেয়, আল্লাহ তার দিকে ফেরেন। দুনিয়ার শাস্তি আর আল্লাহর কাছে মাফ — এ দুটো এক খাতার হিসাব নয়।',
        },
      },
      {
        ref: '39:54',
        note: {
          en: 'This comes one verse after 39:53, and it is the instruction that the promise was leading to. Do not stop at being reassured — anību, turn back, and aslimū, submit. Hope is given first and then immediately pointed somewhere.',
          bn: 'এটা ৩৯:৫৩-এর ঠিক পরের আয়াত, আর ওই প্রতিশ্রুতি এই হুকুমের দিকেই নিয়ে যাচ্ছিল। ভরসা পেয়েই থেমে যাবেন না — আনীবূ, ফিরে এসো; আসলিমূ, নিজেকে সঁপে দাও। আশা আগে দেওয়া হয়, তারপরই তাকে একটা দিক ধরিয়ে দেওয়া হয়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 3470, Sahih Muslim 2766',
        text: {
          en: 'The Prophet ﷺ told of a man who had killed ninety-nine people and asked for the most learned person on earth. He was directed to a monk, asked whether repentance was possible for him, and was told no — so he killed him, completing a hundred. He asked again and was directed to a scholar, who said: “Who could stand between you and repentance? Go to such-and-such a land, for there are people there who worship Allah; worship Allah with them.” He set out, and death overtook him on the way. The angels of mercy and of punishment disputed over him, and Allah commanded the two lands to be measured; he was found nearer to the land he was going to by a hand-span, and the angels of mercy took him.',
          bn: 'নবী ﷺ এমন এক ব্যক্তির কথা বলেছেন যে নিরানব্বই জনকে হত্যা করেছিল এবং পৃথিবীর সবচেয়ে জ্ঞানী ব্যক্তির খোঁজ করেছিল। তাকে এক সন্ন্যাসীর কাছে পাঠানো হয়; সে জিজ্ঞেস করে তার জন্য তওবা সম্ভব কি না, উত্তর আসে না — তাই সে তাকেও হত্যা করে, একশ পূর্ণ করে। সে আবার জিজ্ঞেস করে এবং এক আলিমের কাছে পাঠানো হয়, যিনি বলেন: “তোমার ও তওবার মাঝখানে কে দাঁড়াতে পারে? অমুক জনপদে যাও, সেখানে এমন মানুষ আছে যারা আল্লাহর ইবাদত করে; তাদের সাথে আল্লাহর ইবাদত করো।” সে রওনা দেয়, পথেই মৃত্যু তাকে ধরে ফেলে। রহমতের ফেরেশতা ও আজাবের ফেরেশতাদের মধ্যে তাকে নিয়ে বিতর্ক হয়, আর আল্লাহ দুই জনপদের দূরত্ব মাপার নির্দেশ দেন; সে যে জনপদের দিকে যাচ্ছিল তার এক বিঘত কাছে পাওয়া যায়, আর রহমতের ফেরেশতারা তাকে নিয়ে যান।',
        },
        note: {
          en: 'He never arrived. He never prayed a prayer with those people, never made up a single thing. He was accepted for a journey he had started and not finished — measured, in the end, by the direction he was facing.',
          bn: 'লোকটা কিন্তু পৌঁছায়নি। ওই মানুষদের সঙ্গে একটা নামাজও পড়েনি, কিছুই পুষিয়ে দেয়নি। তাকে কবুল করা হলো এমন এক যাত্রার জন্য, যা সে শুরু করেছিল কিন্তু শেষ করতে পারেনি। শেষ হিসাবে মাপা হলো, সে কোন দিকে মুখ করে ছিল।',
        },
      },
      {
        src: 'Sahih Muslim 121',
        text: {
          en: '‘Amr ibn al-‘As, who had fought the Muslims for years, came to accept Islam and stipulated that his past sins be forgiven. The Prophet ﷺ said to him: “Did you not know that Islam wipes out what came before it, that emigration wipes out what came before it, and that Hajj wipes out what came before it?”',
          bn: 'আমর ইবনুল আস, যিনি বছরের পর বছর মুসলিমদের বিরুদ্ধে যুদ্ধ করেছিলেন, ইসলাম গ্রহণ করতে এসে শর্ত দিলেন যেন তাঁর অতীতের গুনাহ ক্ষমা করা হয়। নবী ﷺ তাঁকে বললেন: “তুমি কি জানো না যে ইসলাম তার পূর্ববর্তী সব মুছে দেয়, হিজরত তার পূর্ববর্তী সব মুছে দেয়, আর হজ তার পূর্ববর্তী সব মুছে দেয়?”',
        },
        note: {
          en: 'He asked for a condition and was told the condition was already built in. Notice that hajj is on the same list — a wiping available to someone who has been Muslim all along and needs a clean start.',
          bn: 'তিনি একটা শর্ত চেয়েছিলেন; তাঁকে বলা হলো, শর্তটা তো এর ভেতরেই আছে। খেয়াল করুন, হজও একই তালিকায় আছে। অর্থাৎ যে সারা জীবন মুসলিম, তারও নতুন করে শুরু করার একটা পথ খোলা রাখা হয়েছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Write down the sin you think disqualifies you, then write 4:48 underneath it and ask honestly whether the first is shirk. Nearly always the honest answer ends the argument.',
        bn: 'যে গুনাহটার জন্য নিজেকে বাদ পড়া মনে করেন, সেটা কাগজে লিখুন। নিচে ৪:৪৮ লিখুন। তারপর নিজেকে সৎভাবে জিজ্ঞেস করুন, উপরেরটা কি শিরক? সৎ উত্তরটাই প্রায় সব সময় তর্ক থামিয়ে দেয়।',
      },
      {
        en: 'Change your direction today even if you cannot change your history. The man in the hadith was judged by which way he was walking, not by what was behind him.',
        bn: 'অতীত বদলাতে না পারলেও আজ দিকটা বদলান। হাদিসের লোকটার হিসাব হয়েছিল সে কোন দিকে হাঁটছিল তা দিয়ে, পেছনে কী ফেলে এসেছে তা দিয়ে নয়।',
      },
      {
        en: 'If your surroundings are what keeps pulling you back, take the scholar’s advice literally: change the company and the place, not just the intention.',
        bn: 'চারপাশটাই যদি বারবার আপনাকে টেনে নামায়, তবে ওই আলিমের কথাটা অক্ষরে অক্ষরে মানুন: শুধু নিয়ত নয়, সঙ্গ আর জায়গাও বদলান।',
      },
    ],
  },

  {
    id: 'evil-into-good',
    wing: 'mercy',
    emoji: '\u{2728}',
    title: { en: 'Bad Deeds Exchanged for Good', bn: 'গুনাহ বদলে নেকি' },
    tagline: {
      en: 'Forgiveness deletes the debt. This verse says something stranger happens.',
      bn: 'মাফ পাওয়া মানে দেনা মুছে যাওয়া। এই আয়াত বলছে, তার চেয়েও অবাক করা কিছু ঘটে।',
    },
    dua: {
      ref: '25:65-66',
      why: {
        en: "The servants of the Most Merciful say this after everything else on their list. Ask to be spared while you are working, not only when you are frightened.",
        bn: "রহমানের বান্দারা তাঁদের এত গুণের পরেও এই দোয়াটাই করেন। কাজ চালিয়ে যেতে যেতেই রক্ষা চান, কেবল ভয় পেলে নয়।",
      },
    },
    intro: [
      {
        en: 'Surah al-Furqan lists three sins together — associating others with Allah, killing a soul unjustly, and unlawful sexual relations — and attaches a doubled punishment to them. Then it turns, in 25:70, with an exception that goes far past what the passage prepared us for. The repentant do not merely have the record cleared. Allah replaces their evil deeds with good ones.',
        bn: 'সূরা ফুরকান তিনটে গুনাহের কথা একসঙ্গে বলে: আল্লাহর সঙ্গে শরিক করা, অন্যায়ভাবে খুন, আর জিনা। তিনটের সঙ্গেই জুড়ে দেয় দ্বিগুণ শাস্তি। তারপর ২৫:৭০-এ এসে এমন এক ব্যতিক্রমে মোড় নেয়, যার জন্য পড়তে পড়তে কেউ তৈরি ছিল না। তওবাকারীর কেবল খাতা পরিষ্কার হয় না। আল্লাহ তার মন্দ কাজগুলোকেই নেকিতে বদলে দেন।',
      },
      {
        en: 'Classical commentators offer two readings and both are worth carrying. One: the sinful acts themselves are converted in the record, so that what stood against a person now stands for him. Two: the person is converted, so that the very capacities once spent on wrong are now spent on good. Either way, the past is not just survived. It becomes material.',
        bn: 'পুরনো মুফাসসিররা দুরকম ব্যাখ্যা দিয়েছেন, দুটোই মনে রাখার মতো। এক, খাতায় গুনাহগুলোই বদলে যায় — যা তার বিরুদ্ধে লেখা ছিল, তা এখন তার পক্ষে দাঁড়ায়। দুই, মানুষটাই বদলে যায় — যে শক্তি একসময় মন্দ কাজে যেত, তা এখন ভালো কাজে যায়। যেভাবেই দেখুন, অতীতটা কেবল পার হয়ে যাওয়ার জিনিস থাকে না। ওটা কাজে লেগে যায়।',
      },
    ],
    verses: [
      {
        ref: '25:68-70',
        note: {
          en: 'The three verses have to be read together or the force is lost. Two of them build a case for despair — a doubled punishment, abiding in humiliation — and the third begins with illā, except. The exception is longer and warmer than the sentence it interrupts.',
          bn: 'তিনটে আয়াত একসঙ্গে না পড়লে জোরটা হারিয়ে যায়। প্রথম দুটো নিরাশার দিকেই ঠেলে দেয় — দ্বিগুণ শাস্তি, অপমানের ভেতর স্থায়ী থাকা। তৃতীয়টা শুরু হয় ইল্লা দিয়ে, মানে “তবে”। যে বাক্যটাকে থামিয়ে দিচ্ছে, ব্যতিক্রমটা তার চেয়ে লম্বা, আর অনেক বেশি নরম।',
        },
      },
      {
        ref: '11:114',
        note: {
          en: 'The mechanism, stated plainly: good deeds do away with bad ones. And notice which good deed the verse names — the prayer, at both ends of the day. The clearing is not reserved for grand gestures; it is built into the timetable you already have.',
          bn: 'কীভাবে হয়, তা পরিষ্কার বলা আছে: নেক আমল গুনাহ মুছে দেয়। আর দেখুন আয়াত কোন নেক আমলের নাম নিচ্ছে — নামাজ, দিনের দুই প্রান্তে। মোছার ব্যবস্থাটা বড় কোনো কাজের জন্য তুলে রাখা নেই; আপনার হাতে যে রুটিন আছে তার ভেতরেই গাঁথা।',
        },
      },
      {
        ref: '4:31',
        note: {
          en: 'A conditional promise about the smaller sins that accumulate quietly. Avoid the major ones and the lesser ones are removed — not forgiven on request, removed as a consequence. Much of what weighs on a conscientious person is already covered by this arrangement.',
          bn: 'চুপচাপ জমতে থাকা ছোট গুনাহ নিয়ে একটা শর্তওয়ালা ওয়াদা। কবিরা গুনাহ এড়িয়ে চললে ছোটগুলো এমনিতেই মুছে যাবে — চেয়ে নেওয়া মাফ নয়, ফলাফল হিসেবেই মুছে যাওয়া। সচেতন মানুষের মনে যেসব ছোট বোঝা জমে থাকে, তার অনেকটাই এই ব্যবস্থাতেই ঢেকে যায়।',
        },
      },
      {
        ref: '3:31',
        note: {
          en: 'The verse answers a claim of love with a test of following, and then attaches two results in order: Allah will love you, and He will forgive you your sins. Being loved is placed before being forgiven, which is not the order our anxiety expects.',
          bn: 'আল্লাহকে ভালোবাসার দাবি উঠলে আয়াত তার জবাব দেয় অনুসরণের পরীক্ষা দিয়ে। তারপর পরপর দুটো ফল বলে: আল্লাহ তোমাদের ভালোবাসবেন, আর তোমাদের গুনাহ মাফ করবেন। ভালোবাসা পাওয়াটা রাখা হয়েছে মাফ পাওয়ার আগে। আমাদের দুশ্চিন্তা কিন্তু উল্টো ক্রম আশা করে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Jami‘ at-Tirmidhi 1987 (hasan sahih)',
        text: {
          en: 'The Prophet ﷺ said to Abu Dharr: “Fear Allah wherever you are, follow a bad deed with a good deed and it will wipe it out, and deal with people with good character.”',
          bn: 'নবী ﷺ আবু যর (রা)-কে বলেছেন: “তুমি যেখানেই থাকো আল্লাহকে ভয় করো, মন্দ কাজের পর ভালো কাজ করো, তা মন্দটিকে মুছে দেবে, আর মানুষের সাথে সুন্দর চরিত্রে চলো।”',
        },
        note: {
          en: 'Three instructions, and the third is the bridge into the second half of this section: the repaired relationship with Allah is expected to show up in how you treat people.',
          bn: 'তিনটে হুকুম, আর তৃতীয়টাই এই অংশের দ্বিতীয় ভাগে যাওয়ার সেতু। আল্লাহর সঙ্গে সম্পর্ক জোড়া লাগলে তা মানুষের সঙ্গে ব্যবহারে ফুটে ওঠার কথা।',
        },
      },
      {
        src: 'Sahih Muslim 233',
        text: {
          en: 'The Prophet ﷺ said: “The five daily prayers, one Jumu‘ah to the next, and one Ramadan to the next are expiation for what lies between them, so long as the major sins are avoided.”',
          bn: 'নবী ﷺ বলেছেন: “পাঁচ ওয়াক্ত নামাজ, এক জুমা থেকে পরের জুমা, আর এক রমজান থেকে পরের রমজান — এগুলোর মধ্যবর্তী সময়ের গুনাহের কাফফারা, যতক্ষণ কবিরা গুনাহ থেকে বাঁচা হয়।”',
        },
        note: {
          en: 'Three overlapping cycles — daily, weekly, yearly — running underneath an ordinary Muslim life whether or not they are noticed. The upkeep is already scheduled.',
          bn: 'তিনটে চক্র একটার ভেতর আরেকটা — রোজকার, সপ্তাহের, বছরের — সাধারণ মুসলিম জীবনের নিচ দিয়ে চলছেই, খেয়াল করুন বা না করুন। ধোয়ামোছার সময়সূচিটা আগে থেকেই ঠিক করা আছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Pair every slip with an immediate good deed, today, not later. The hadith gives an order of operations: bad deed, then good deed, then it is wiped.',
        bn: 'ভুল হলে সঙ্গে সঙ্গেই একটা ভালো কাজ জুড়ে দিন, পরে নয়। হাদিস ক্রমটা বলে দিয়েছে: মন্দ কাজ, তারপর ভালো কাজ, তারপর মুছে যাওয়া।',
      },
      {
        en: 'Take the ability that used to serve the sin — the persistence, the courage, the charm, the late nights — and put it to work somewhere lawful. That is 25:70 read as a practical instruction.',
        bn: 'যে গুণগুলো একসময় গুনাহের কাজে খাটত — জেদ, সাহস, মানুষকে টানার ক্ষমতা, রাত জাগা — সেগুলোই হালাল কোনো কাজে খাটান। ২৫:৭০-কে হাতে-কলমে কাজে লাগালে এটাই দাঁড়ায়।',
      },
      {
        en: 'Guard the five prayers before adding anything else. 11:114 and the hadith of the three cycles both put the routine, not the extraordinary, at the centre of clearing.',
        bn: 'নতুন কিছু যোগ করার আগে পাঁচ ওয়াক্ত নামাজটা ঠিক রাখুন। ১১:১১৪ আর তিন চক্রের হাদিস — দুটোই মোছার কাজে সামনে রাখে রোজকার রুটিনকে, অসাধারণ কিছুকে নয়।',
      },
    ],
  },

  {
    id: 'he-rejoices',
    wing: 'mercy',
    emoji: '\u{1F49A}',
    title: { en: 'He Is Glad You Came Back', bn: 'আপনি ফিরে এসেছেন বলে তিনি খুশি' },
    tagline: {
      en: 'Not tolerated. Not processed. The texts describe delight.',
      bn: 'মুখ বুজে মেনে নেওয়া নয়, নিয়মমাফিক কবুল করাও নয়। কুরআন-হাদিসে যা আছে তা খুশি।',
    },
    dua: {
      ref: '2:201',
      why: {
        en: "Both worlds in one sentence. Asking for good in this one is not the lesser request — the verse puts it first.",
        bn: "এক বাক্যেই দুই জগৎ। দুনিয়ার কল্যাণ চাওয়াটা ছোট কোনো চাওয়া নয়; আয়াত সেটাকেই আগে রেখেছে।",
      },
    },
    intro: [
      {
        en: 'Most people imagine returning to Allah as an awkward audience: forgiveness granted, disappointment noted. The texts describe something else entirely. Allah is not merely willing to receive the one who comes back — He loves them, and the Prophet ﷺ reached for the most extreme picture of human joy he could find to describe how gladly the return is met.',
        bn: 'আল্লাহর কাছে ফেরার কথা ভাবলে বেশির ভাগ মানুষের চোখে ভাসে একটা অস্বস্তিকর দেখা-সাক্ষাৎ: মাফ তো হলো, কিন্তু হতাশাটা লেখা রইল। কুরআন-হাদিস একেবারে অন্য কথা বলে। যে ফিরে আসে, আল্লাহ শুধু তাকে নিতে রাজি নন — তিনি তাকে ভালোবাসেন। আর সেই ফেরা কত খুশিতে গ্রহণ করা হয়, তা বোঝাতে নবী ﷺ মানুষের আনন্দের সবচেয়ে চরম ছবিটাই বেছে নিয়েছেন।',
      },
      {
        en: 'This matters practically. Shame keeps people away far longer than sin does. A person who believes they will be received coldly delays the return for years; a person who believes they are wanted comes back tonight. The Qur’an and Sunnah spend a great deal of language on this precise point.',
        bn: 'কথাটা কাজের কথা। গুনাহ মানুষকে যতটা দূরে রাখে, লজ্জা রাখে তার চেয়ে অনেক বেশি দিন। যার ধারণা তাকে মুখ ফিরিয়ে নেওয়া হবে, সে বছরের পর বছর ফেরা পিছিয়ে দেয়। আর যার বিশ্বাস তাকে ডাকা হচ্ছে, সে আজ রাতেই ফেরে। কুরআন আর সুন্নাহ ঠিক এই জায়গাটাতেই সবচেয়ে বেশি কথা খরচ করেছে।',
      },
    ],
    verses: [
      {
        ref: '9:118',
        note: {
          en: 'About the three Companions who stayed behind from Tabuk and were boycotted until, in the verse’s own words, the earth closed in on them despite its vastness. The verse then says He turned to them so that they might turn to Him — His turning is placed first, as the cause of theirs.',
          bn: 'কথাটা তাবুক থেকে পিছিয়ে থাকা তিন সাহাবিকে নিয়ে। তাঁদের সঙ্গে কথা বলা বন্ধ ছিল, আর আয়াতের ভাষায়, এত প্রশস্ত পৃথিবীটাও তাঁদের ওপর সংকীর্ণ হয়ে এসেছিল। এরপর আয়াত বলছে, তিনি তাঁদের দিকে ফিরেছেন যাতে তাঁরাও তাঁর দিকে ফেরেন। তাঁর ফেরাটাই আগে, আর সেটাই তাঁদের ফেরার কারণ।',
        },
      },
      {
        ref: '2:222',
        note: {
          en: 'The sentence arrives at the close of a ruling about marital life, which is exactly what makes it striking: Allah loves those who constantly turn back to Him, stated in the middle of ordinary law rather than saved for a dramatic occasion. Being loved as a repenter is described as a standing condition, not a reward for a crisis well handled.',
          bn: 'কথাটা এসেছে দাম্পত্য জীবনের একটা মাসআলার শেষে, আর এখানেই এর মজা। আল্লাহ তাদের ভালোবাসেন যারা বারবার তাঁর দিকে ফেরে — কথাটা বলা হচ্ছে সাধারণ বিধানের মাঝখানে, নাটকীয় কোনো মুহূর্তের জন্য তুলে রেখে নয়। তওবাকারী হিসেবে ভালোবাসা পাওয়াটা তাই একটা স্থায়ী অবস্থা, বড় কোনো বিপদ সামলানোর পুরস্কার নয়।',
        },
      },
      {
        ref: '2:186',
        note: {
          en: 'The only place in the Qur’an where a question about Allah is answered without the usual “Say.” They ask about Me — and the reply comes directly: I am near. In a passage about fasting, the closeness is asserted before any condition is attached.',
          bn: 'আল্লাহকে নিয়ে প্রশ্নের জবাব কুরআনে সাধারণত শুরু হয় “বলুন” দিয়ে। একমাত্র এখানেই তা নেই। তারা আমার সম্পর্কে জিজ্ঞেস করে — জবাব আসে সোজাসুজি: আমি নিকটেই আছি। রোজার আলোচনার মাঝখানে বলা এই আয়াতে নৈকট্যের ঘোষণাটা আসে কোনো শর্ত জোড়ার আগেই।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6309, Sahih Muslim 2747',
        text: {
          en: 'The Prophet ﷺ said: “Allah is more delighted with the repentance of His servant than one of you would be who was on his camel in a waterless desert, carrying his food and drink, and it wandered off and was lost. He despaired of it, came to a tree and lay down in its shade, having given up on his camel — and while he was like that, there it was, standing beside him. He seized its reins and said, out of the intensity of his joy, ‘O Allah, You are my servant and I am Your Lord,’ making a mistake out of sheer joy.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ তাঁর বান্দার তওবায় তার চেয়েও বেশি আনন্দিত হন, যে ব্যক্তি পানিশূন্য মরুভূমিতে তার উটের উপর ছিল, তার খাবার ও পানীয় সেই উটের সাথে, আর উটটি হারিয়ে গেল। সে হতাশ হয়ে একটি গাছের কাছে এসে ছায়ায় শুয়ে পড়ল, উটের আশা ছেড়ে দিয়ে — আর এই অবস্থায়ই দেখল উটটি তার পাশে দাঁড়িয়ে। সে লাগাম ধরে আনন্দের প্রাবল্যে বলে ফেলল, ‘হে আল্লাহ, তুমি আমার বান্দা আর আমি তোমার রব,’ নিছক আনন্দে ভুল করে ফেলল।”',
        },
        note: {
          en: 'The man in the story is not glad because the camel is valuable. He is glad because without it he was going to die. The comparison is not about pleasure; it is about rescue — and the hadith says Allah’s joy exceeds it.',
          bn: 'লোকটার খুশি এ জন্য নয় যে উটটা দামি। খুশি এ জন্য যে ওটা না পেলে সে মরেই যেত। তুলনাটা তাই নিছক আনন্দের নয়, বেঁচে যাওয়ার। আর হাদিস বলছে, আল্লাহর খুশি এর চেয়েও বেশি।',
        },
      },
      {
        src: 'Sahih al-Bukhari 5999, Sahih Muslim 2754',
        text: {
          en: 'Some captives were brought before the Prophet ﷺ, and among them was a woman searching frantically; when she found her child she clutched him to her chest and nursed him. The Prophet ﷺ asked his Companions: “Do you think this woman would throw her child into the fire?” They said no, not if she were able to prevent it. He said: “Allah is more merciful to His servants than this woman is to her child.”',
          bn: 'নবী ﷺ-এর সামনে কিছু বন্দিকে আনা হলো, তাদের মধ্যে এক নারী ব্যাকুলভাবে খুঁজছিলেন; সন্তানকে পেয়ে তিনি তাকে বুকে জড়িয়ে দুধ পান করালেন। নবী ﷺ সাহাবিদের জিজ্ঞেস করলেন: “তোমরা কি মনে করো এই নারী তার সন্তানকে আগুনে নিক্ষেপ করবে?” তাঁরা বললেন, না, সাধ্য থাকলে কখনোই নয়। তিনি বললেন: “আল্লাহ তাঁর বান্দাদের প্রতি এই নারীর নিজের সন্তানের প্রতি দয়ার চেয়েও বেশি দয়ালু।”',
        },
        note: {
          en: 'The Companions were shown a live example first and asked to judge it, and only then given the comparison. Whatever certainty you feel about that mother is the floor, not the ceiling.',
          bn: 'সাহাবিদের আগে চোখের সামনের ঘটনাটা দেখিয়ে জিজ্ঞেস করা হলো, তারপর তুলনাটা দেওয়া হলো। ওই মায়ের ব্যাপারে আপনি যতটা নিশ্চিত, আল্লাহর দয়া সেখান থেকে শুরু, সেখানেই শেষ নয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Name the shame for what it is. If you are staying away because you feel unwelcome, you are believing something about Allah that these two hadith directly contradict.',
        bn: 'লজ্জাটাকে লজ্জা বলেই চিনে নিন। কেউ চায় না — এই ভেবে যদি দূরে থাকেন, তবে আল্লাহ সম্পর্কে এমন একটা ধারণা পুষছেন যা এই দুই হাদিস সরাসরি কেটে দেয়।',
      },
      {
        en: 'Come back mid-mistake rather than waiting to be presentable. 9:118 has Allah turning toward three men while they were still in disgrace.',
        bn: 'গুছিয়ে নেওয়ার অপেক্ষা করবেন না, ভুলের মাঝখান থেকেই ফিরুন। ৯:১১৮-এ আল্লাহ ওই তিনজনের দিকে ফিরেছেন যখন তাঁরা তখনো অপমানের ভেতরেই।',
      },
      {
        en: 'Make du‘a immediately after reading 2:186 — the verse itself is an instruction to answer Him back. Nothing else needs to be arranged first.',
        bn: '২:১৮৬ পড়েই সঙ্গে সঙ্গে দোয়া করুন। আয়াতটাই তো বলছে তাঁকে সাড়া দিতে। আগে আর কিছু গোছানোর দরকার নেই।',
      },
    ],
  },

  {
    id: 'the-concealer',
    wing: 'mercy',
    emoji: '\u{1F92B}',
    title: { en: 'The One Who Covers You', bn: 'যিনি আপনাকে ঢেকে রাখেন' },
    tagline: {
      en: 'He already hid it once. That is the strongest argument that He means to forgive it.',
      bn: 'তিনি তো একবার ঢেকেই দিয়েছেন। তিনি যে মাফ করতে চান, এর চেয়ে বড় প্রমাণ আর কী।',
    },
    dua: {
      ref: '14:41',
      why: {
        en: "Ibrahim (AS) asks covering for himself, his parents and every believer on the Day of reckoning — the same screen you want, requested for people you will never meet.",
        bn: "ইবরাহিম (আ) হিসাবের দিনের মাফ চাইছেন নিজের জন্য, বাবা-মায়ের জন্য, আর সব মুমিনের জন্য। আপনি নিজের জন্য যে পর্দাটা চান, সেটাই চাওয়া হচ্ছে এমন মানুষদের জন্যও যাদের সঙ্গে আপনার কোনোদিন দেখাই হবে না।",
      },
    },
    intro: [
      {
        en: 'Think about a sin nobody knows about. It stayed private — not because you were careful, but because Allah did not expose it. He was watching while it happened and He covered it anyway. As-Sittīr, the Coverer, is how the Sunnah names Him for this, and it is a name with an argument inside it: the One who chose to hide it from people is unlikely to be looking for a reason to hold it against you.',
        bn: 'এমন একটা গুনাহের কথা ভাবুন যা কেউ জানে না। ওটা চাপা পড়ে আছে আপনার সাবধানতার জোরে নয়, আল্লাহ ফাঁস করেননি বলে। কাজটা যখন হচ্ছিল তিনি দেখছিলেন, তবু ঢেকে দিয়েছেন। সুন্নাহ তাই তাঁকে ডাকে আস-সিত্তীর, আবরণকারী নামে। নামটার ভেতরেই একটা যুক্তি লুকিয়ে আছে: যিনি নিজেই মানুষের চোখ থেকে কাজটা আড়াল করে রেখেছেন, তিনি আপনার বিরুদ্ধে ওটা খাটানোর অজুহাত খুঁজছেন — এমন হয় না।',
      },
      {
        en: 'This has a duty attached. The covering you received is the covering you owe: the Sunnah ties Allah’s concealment of a person on the Day of Judgement directly to that person’s concealment of others in this world. It also draws a hard line the other way — the one exception named is the person who sins and then publicises it.',
        bn: 'এর সঙ্গে একটা দায়িত্বও আছে। যে আবরণ আপনি পেয়েছেন, সেটাই আপনার দেনা। সুন্নাহ কিয়ামতের দিন আল্লাহর ঢেকে রাখাকে সরাসরি বেঁধে দিয়েছে দুনিয়ায় আপনি অন্যকে ঢেকে রাখলেন কি না তার সঙ্গে। উল্টো দিকেও কড়া একটা দাগ আছে। ব্যতিক্রম হিসেবে নাম এসেছে একজনেরই — যে গুনাহ করে বেড়ায় আর তা প্রচারও করে বেড়ায়।',
      },
    ],
    verses: [
      {
        ref: '24:22',
        note: {
          en: 'Revealed after a Companion swore to cut off support to a relative who had slandered his family. The verse does not argue that the offence was small. It asks a question instead: would you not love that Allah should forgive you? Your own hope of pardon is made the reason to grant it.',
          bn: 'আয়াতটা নাজিল হয়েছিল এমন এক সাহাবির ব্যাপারে, যিনি কসম খেয়েছিলেন যে তাঁর পরিবারের নামে অপবাদ রটানো আত্মীয়টিকে আর সাহায্য করবেন না। আয়াত এ কথা বলেনি যে অপরাধটা ছোট। বরং একটা প্রশ্ন করেছে: তোমরা কি চাও না আল্লাহ তোমাদের মাফ করুন? নিজের মাফ পাওয়ার আশাটাই এখানে অন্যকে মাফ করার কারণ হয়ে গেল।',
        },
      },
      {
        ref: '53:32',
        note: {
          en: 'Two things in one verse. First, an allowance: those who avoid the major sins except for lamam, the smaller lapses — your Lord is vast in forgiveness. Then a warning against the opposite error: do not claim purity for yourselves. Hope and self-congratulation are separated cleanly.',
          bn: 'এক আয়াতেই দুটো কথা। প্রথমে ছাড়: যারা কবিরা গুনাহ এড়িয়ে চলে, কেবল লামাম বা ছোটখাটো স্খলন ছাড়া, তাদের রব মাফ করায় প্রশস্ত। তারপরই উল্টো ভুলের বিরুদ্ধে সতর্কতা: নিজেদের পবিত্র বলে দাবি কোরো না। আশা আর আত্মতৃপ্তি — দুটোকে পরিষ্কার আলাদা করে দেওয়া হলো।',
        },
      },
      {
        ref: '2:160',
        note: {
          en: 'Spoken about those who had concealed what Allah revealed, and the conditions set are exact: repent, correct themselves, and make clear what they hid. Concealment of the truth has to be undone in public; concealment of one’s own private sin never has to be.',
          bn: 'কথাটা তাদের নিয়ে, যারা আল্লাহর নাজিল করা জিনিস লুকিয়ে রেখেছিল। শর্তগুলো একেবারে নির্দিষ্ট: তওবা করবে, নিজেদের শুধরাবে, আর যা লুকিয়েছিল তা খুলে বলবে। সত্য লুকিয়ে রাখলে তা প্রকাশ্যেই শোধরাতে হয়। কিন্তু নিজের ব্যক্তিগত গুনাহ কখনোই খুলে বলতে হয় না।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2590',
        text: {
          en: 'The Prophet ﷺ said: “No servant conceals the faults of another servant in this world but that Allah will conceal his faults on the Day of Resurrection.”',
          bn: 'নবী ﷺ বলেছেন: “যে বান্দা দুনিয়াতে অন্য বান্দার দোষ ঢেকে রাখে, কিয়ামতের দিন আল্লাহ তার দোষ ঢেকে রাখবেন।”',
        },
        note: {
          en: 'The exchange rate is one for one and it runs in the direction you choose. Every time you decline to repeat something about someone, you are buying cover for yourself on a day you will want it badly.',
          bn: 'হিসাবটা এক-এর বদলে এক, আর আপনি যেদিকে চালাবেন সেদিকেই চলবে। কারও সম্পর্কে একটা কথা যতবার আপনি চেপে যান, ততবারই সেই দিনের জন্য নিজের একটা পর্দা কিনে রাখেন, যেদিন আপনার ওটা ভীষণ দরকার হবে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 2441, Sahih Muslim 2768',
        text: {
          en: 'The Prophet ﷺ said: “Allah will bring the believer near and place His screen over him, and will say: ‘Do you know such-and-such a sin? Do you know such-and-such a sin?’ until He has made him acknowledge his sins and the man thinks he is ruined. Then Allah will say: ‘I concealed them for you in the world, and today I forgive them for you.’ And he will be given the record of his good deeds.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ মুমিনকে নিকটে আনবেন এবং তার উপর নিজের পর্দা রাখবেন, তারপর বলবেন: ‘অমুক গুনাহটি কি তুমি জানো? অমুক গুনাহটি কি তুমি জানো?’ যতক্ষণ না তিনি তাকে তার গুনাহগুলো স্বীকার করান এবং লোকটি ভাবে সে ধ্বংস হয়ে গেল। তখন আল্লাহ বলবেন: ‘আমি দুনিয়াতে সেগুলো তোমার জন্য ঢেকে রেখেছিলাম, আর আজ আমি সেগুলো তোমার জন্য ক্ষমা করে দিলাম।’ এরপর তাকে তার নেক আমলের খাতা দেওয়া হবে।”',
        },
        note: {
          en: 'The screen is placed over him before the questioning starts, not after the verdict. The private conversation is arranged so that no one else ever hears what is being discussed — the forgiveness and the discretion arrive together.',
          bn: 'পর্দাটা তার ওপর রাখা হয় জিজ্ঞাসাবাদ শুরুর আগেই, রায় হওয়ার পরে নয়। আলাপটা এমনভাবে সাজানো যে কী নিয়ে কথা হচ্ছে তা আর কেউ কোনোদিন শুনবে না। মাফ আর গোপনীয়তা এখানে একসঙ্গেই আসে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 6069',
        text: {
          en: 'The Prophet ﷺ said: “All of my ummah will be pardoned except those who commit sins openly. It is a form of flagrancy that a man does something at night, and though Allah has covered it for him, he wakes and says, ‘So-and-so, last night I did such-and-such,’ when his Lord had covered him through the night and he uncovers Allah’s covering of him in the morning.”',
          bn: 'নবী ﷺ বলেছেন: “আমার উম্মতের সবাইকে ক্ষমা করা হবে, প্রকাশ্যে গুনাহকারীরা ছাড়া। এক ধরনের প্রকাশ্যতা হলো, একজন রাতে কিছু করে, আল্লাহ তা ঢেকে রাখেন, অথচ সকালে উঠে সে বলে, ‘অমুক, গত রাতে আমি এই এই করেছি,’ অথচ তার রব সারা রাত তাকে ঢেকে রেখেছিলেন, আর সকালে সে আল্লাহর দেওয়া আবরণ নিজেই সরিয়ে ফেলে।”',
        },
        note: {
          en: 'The sin is not what is singled out here — the announcement is. Keep your own past private and you keep the covering intact; that includes not confessing it to friends in the name of honesty.',
          bn: 'এখানে ধরা হয়েছে গুনাহটাকে নয়, ঘোষণাটাকে। নিজের অতীত চেপে রাখুন, আবরণটা অটুট থাকবে। সততার নাম করে বন্ধুদের কাছে বলে ফেলা থেকেও বিরত থাকাই এর মধ্যে পড়ে।',
        },
      },
    ],
    practice: [
      {
        en: 'Do not tell anyone. If you have already repented, repeating the story to a friend undoes a covering Allah gave you — this is one of the rare places where silence is the act of worship.',
        bn: 'কাউকে বলবেন না। তওবা করে ফেলে থাকলে বন্ধুর কাছে ঘটনাটা বলা মানে আল্লাহর দেওয়া আবরণটা নিজ হাতে সরিয়ে ফেলা। এ সেই বিরল জায়গাগুলোর একটা, যেখানে চুপ থাকাটাই ইবাদত।',
      },
      {
        en: 'Kill one piece of gossip today that you were about to pass on. You are not protecting them so much as buying your own screen for the Day of the private conversation.',
        bn: 'আজ এমন একটা গিবত থামিয়ে দিন, যা বলতে যাচ্ছিলেন। ওই মানুষটাকে বাঁচানোর চেয়েও বেশি করে আপনি সেই দিনের একান্ত আলাপের জন্য নিজের পর্দাটা কিনে রাখছেন।',
      },
      {
        en: 'Restore support to the relative you cut off. 24:22 was revealed for that exact situation, and the argument it makes will apply to you in the same words.',
        bn: 'যে আত্মীয়ের সঙ্গে সম্পর্ক ছিঁড়েছেন, তাঁর সাহায্যটা আবার চালু করুন। ২৪:২২ ঠিক এমন অবস্থাতেই নাজিল হয়েছিল, আর তার যুক্তিটা আপনার বেলায়ও হুবহু খাটে।',
      },
    ],
  },

  {
    id: 'prophets-asked-too',
    wing: 'mercy',
    emoji: '\u{1F54C}',
    title: { en: 'Even the Prophets Said Sorry', bn: 'নবীরাও ক্ষমা চেয়েছেন' },
    tagline: {
      en: 'The best of creation are quoted in the Qur’an admitting fault. The words they used are given to you.',
      bn: 'সৃষ্টির সেরা মানুষগুলোই কুরআনে নিজের ভুল স্বীকার করছেন। তাঁরা যে কথাগুলো বলেছিলেন, সেগুলো আপনার হাতেই তুলে দেওয়া হয়েছে।',
    },
    dua: {
      ref: '7:23',
      why: {
        en: "The first du‘a of repentance ever made. If it sufficed for Adam (AS), it does not need improving by you.",
        bn: "ইতিহাসের সবচেয়ে পুরনো তওবার দোয়া। আদম (আ)-এর জন্য যদি যথেষ্ট হয়ে থাকে, আপনার আর একে উন্নত করার দরকার নেই।",
      },
    },
    intro: [
      {
        en: 'A person convinced that religious people do not struggle will read the Qur’an and find the opposite. Adam (AS) and Hawwa say they have wronged themselves. Musa (AS) says the same words after striking a man who died. Yunus (AS) calls out from inside the darkness that he was among the wrongdoers. Dawud (AS) asks forgiveness and falls prostrate. These are not marginal figures; they are the summit.',
        bn: 'কারও যদি ধারণা থাকে যে ধার্মিক মানুষদের ভেতরে কোনো টানাপোড়েন থাকে না, কুরআন পড়লে তিনি উল্টোটাই দেখবেন। আদম (আ) ও হাওয়া বলছেন, তাঁরা নিজেদের ওপর জুলুম করেছেন। মুসা (আ)-র হাতে এক লোক মারা যাওয়ার পর তিনি হুবহু একই কথা বলছেন। ইউনুস (আ) অন্ধকারের ভেতর থেকে ডেকে বলছেন, তিনি জালিমদের একজন। দাউদ (আ) মাফ চেয়ে সিজদায় লুটিয়ে পড়ছেন। এঁরা কোনো পাশের মানুষ নন; এঁরাই সবার উপরে।',
      },
      {
        en: 'And in every case the Qur’an records the words, not just the fact. This is deliberate: the du‘ā of Adam (AS) and the du‘ā of Yunus (AS) are handed to the reader as usable text. When you do not know what to say, the Book has already put the sentences in your mouth — the same sentences that worked for them.',
        bn: 'আর প্রতিবারই কুরআন শুধু ঘটনাটা নয়, কথাগুলোও ধরে রেখেছে। এটা ইচ্ছে করেই। আদম (আ) আর ইউনুস (আ)-এর দোয়া পাঠকের হাতেই তুলে দেওয়া হয়েছে, যাতে কাজে লাগানো যায়। কী বলবেন বুঝে উঠতে না পারলে কুরআন আগেই কথাগুলো আপনার মুখে বসিয়ে রেখেছে — ঠিক সেই কথা, যা তাঁদের বেলায় কাজে লেগেছিল।',
      },
    ],
    verses: [
      {
        ref: '7:23',
        note: {
          en: 'The first du‘ā of repentance in human history, and it contains no excuse. Three moves: we wronged ourselves, if You do not forgive and have mercy, we are the losers. Compare Iblis in the same passage, who argued about why he was right. The difference between them is not the mistake; it is what followed it.',
          bn: 'মানুষের ইতিহাসের প্রথম তওবার দোয়া, আর তাতে একটাও অজুহাত নেই। কথা তিনটে: আমরা নিজেদের ওপর জুলুম করেছি; আপনি মাফ না করলে, দয়া না করলে আমরা ক্ষতিগ্রস্তদের দলে। একই অনুচ্ছেদে ইবলিসের কথাটার পাশে রাখুন, যে নিজেকে সঠিক প্রমাণ করতে তর্ক জুড়েছিল। দুজনের তফাত ভুলটায় নয়, ভুলের পরে যা এল তাতে।',
        },
      },
      {
        ref: '2:37',
        note: {
          en: 'The follow-up. Adam received words from his Lord — he was taught what to say — and then Allah accepted his repentance. Even the language of returning was a gift given to him, which is worth remembering when you feel unable to find words of your own.',
          bn: 'এরপরের ধাপ। আদম (আ) তাঁর রবের কাছ থেকে কিছু কথা পেলেন, অর্থাৎ কী বলতে হবে তা তাঁকে শিখিয়েই দেওয়া হলো। তারপর আল্লাহ তাঁর তওবা কবুল করলেন। ফেরার ভাষাটুকুও তাঁকে দেওয়া হয়েছিল। নিজের ভাষা খুঁজে না পেলে কথাটা মনে রাখার মতো।',
        },
      },
      {
        ref: '28:16',
        note: {
          en: 'Musa (AS) after a man has died at his hand. The confession, the request and the answer are all in one verse, and the answer takes four words: fa ghafara lah — so He forgave him. No interval is described between asking and receiving.',
          bn: 'মুসা (আ), যাঁর হাতে এক লোক মারা গেছে। স্বীকার করা, মাফ চাওয়া আর জবাব — সবই এক আয়াতেই। জবাবটা কয়েকটা শব্দে: ফাগাফারা লাহু, তাই তিনি তাঁকে মাফ করে দিলেন। চাওয়া আর পাওয়ার মাঝে কোনো ফাঁকের কথাই নেই।',
        },
      },
      {
        ref: '21:87',
        note: {
          en: 'Called from inside three darknesses — night, sea, and the belly of the fish. The du‘ā names no request at all: there is no deity except You, exalted are You, I have been among the wrongdoers. Praise and admission, and the rescue follows in the next verse.',
          bn: 'তিন অন্ধকারের ভেতর থেকে ডাক: রাত, সমুদ্র, আর মাছের পেট। দোয়াটায় কিন্তু কিছু চাওয়াই হয়নি — তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র, আমিই জালিমদের একজন। শুধু তাঁর প্রশংসা আর নিজের স্বীকারোক্তি। উদ্ধার এসে যায় পরের আয়াতেই।',
        },
      },
      {
        ref: '38:24-25',
        note: {
          en: 'Dawud (AS) realises he is being tested, asks forgiveness, and bows down. And what is granted is not only pardon: the verse adds nearness to Us and a good place of return. Repentance is answered with promotion, not merely with the removal of a penalty.',
          bn: 'দাউদ (আ) বুঝতে পারলেন তাঁকে পরীক্ষা করা হচ্ছে, মাফ চাইলেন, আর নত হয়ে পড়লেন। তাঁকে যা দেওয়া হলো তা কেবল মাফ নয়। আয়াত সঙ্গে জুড়ে দিল আমাদের নৈকট্য আর উত্তম ঠিকানা। তওবার জবাবে এল পদোন্নতি, নিছক শাস্তি মাফ নয়।',
        },
      },
      {
        ref: '12:92',
        note: {
          en: 'Not a prophet repenting but a prophet forgiving, and it belongs here for the standard it sets. Yusuf (AS) is in power over the brothers who threw him into a well; his first words are that there is no blame on them today. Model both halves — the asking and the granting.',
          bn: 'এটা কোনো নবীর তওবা নয়, নবীর মাফ করে দেওয়া। এখানে রাখা হলো কারণ এ এক মাপকাঠি। ইউসুফ (আ) তখন ক্ষমতার আসনে, সামনে দাঁড়ানো সেই ভাইয়েরা যারা তাঁকে কূপে ফেলেছিল। তাঁর প্রথম কথাটাই — আজ তোমাদের ওপর কোনো দোষারোপ নেই। দুই দিকই শিখতে হবে: মাফ চাওয়া, আর মাফ করা।',
        },
      },
    ],
    hadith: [
      {
        src: 'Jami‘ at-Tirmidhi 3505 (hasan)',
        text: {
          en: 'The Prophet ﷺ said: “The supplication of Dhun-Nun, when he called upon his Lord from inside the belly of the fish — ‘There is no deity except You; exalted are You; indeed I have been among the wrongdoers’ — no Muslim ever supplicates with it for anything but Allah answers him.”',
          bn: 'নবী ﷺ বলেছেন: “যুন-নূনের দোয়া, যখন তিনি মাছের পেটের ভেতর থেকে তাঁর রবকে ডেকেছিলেন — ‘তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র, নিশ্চয়ই আমি জালিমদের অন্তর্ভুক্ত ছিলাম’ — কোনো মুসলিম কোনো বিষয়ে এই দোয়া করলে আল্লাহ তার ডাকে সাড়া দেন।”',
        },
        note: {
          en: 'A du‘ā that names no need is described as answering every need. The pattern is instructive: acknowledge Him, acknowledge yourself, and let the request stay unspoken.',
          bn: 'যে দোয়ায় কিছুই চাওয়া হয়নি, সেটাকেই বলা হলো সব চাওয়ার জবাব। ধরনটা শেখার মতো: তাঁকে স্বীকার করুন, নিজেকে স্বীকার করুন, আর চাওয়াটা না বলেই রেখে দিন।',
        },
      },
      {
        src: 'Sahih Muslim 2702',
        text: {
          en: 'The Prophet ﷺ said: “O people, repent to Allah, for I repent to Him one hundred times a day.”',
          bn: 'নবী ﷺ বলেছেন: “হে লোকসকল, আল্লাহর কাছে তওবা করো, কারণ আমি দিনে একশ বার তাঁর কাছে তওবা করি।”',
        },
        note: {
          en: 'Said by the one man whose sins were forgiven in advance. If repentance were only a repair for damage, this sentence would make no sense — it is also how the closest of them stayed close.',
          bn: 'কথাটা বলছেন সেই মানুষটি, যাঁর গুনাহ আগেই মাফ করে দেওয়া হয়েছিল। তওবা যদি কেবল ক্ষতি মেরামতের জিনিস হতো, এ কথার কোনো মানেই থাকত না। তওবা সেই পথও, যে পথে তাঁদের মধ্যে সবচেয়ে কাছের জন কাছে থেকেছেন।',
        },
      },
    ],
    practice: [
      {
        en: 'Learn the du‘ā of Adam (AS) from 7:23 in Arabic. It is short, it is the oldest one there is, and it fits any sin without modification.',
        bn: '৭:২৩-এর আদম (আ)-এর দোয়াটা আরবিতে শিখে নিন। ছোট দোয়া, সবচেয়ে পুরনোও বটে, আর একটুও না বদলে যেকোনো গুনাহে খাটে।',
      },
      {
        en: 'When you are in the dark and cannot form a request, use the du‘ā of Yunus (AS). It is designed for exactly that state.',
        bn: 'অন্ধকারে পড়ে গিয়ে যখন কিছু চাওয়ার ভাষাই খুঁজে পাচ্ছেন না, ইউনুস (আ)-এর দোয়াটা পড়ুন। ঠিক ওই অবস্থার জন্যই ওটা।',
      },
      {
        en: 'Stop treating your struggle as disqualifying. Every name in this chapter belongs to someone Allah chose while knowing what they would say to Him afterwards.',
        bn: 'নিজের ভেতরের লড়াইটাকে অযোগ্যতার প্রমাণ ভাবা বন্ধ করুন। এই অধ্যায়ের প্রতিটি নামই এমন একজনের, যাঁকে আল্লাহ বেছে নিয়েছিলেন এটা জেনেই যে পরে তাঁরা তাঁকে কী বলবেন।',
      },
    ],
  },

  {
    id: 'how-to-return',
    wing: 'mercy',
    emoji: '\u{1F9ED}',
    title: { en: 'How to Actually Come Back', bn: 'ফিরবেন কীভাবে' },
    tagline: {
      en: 'Less a chapter than a set of instructions — what to say, when to say it, and what it does.',
      bn: 'এটা অধ্যায়ের চেয়ে বেশি কাজের তালিকা। কী বলবেন, কখন বলবেন, আর তাতে কী হয়।',
    },
    dua: {
      ref: '3:193-194',
      why: {
        en: "The whole movement in two verses: we heard a caller, we believed, so forgive — and then, do not disgrace us on the Day.",
        bn: "দুই আয়াতে গোটা যাত্রা: আমরা এক আহ্বায়কের ডাক শুনেছি, ঈমান এনেছি, তাই ক্ষমা করুন — তারপর, সেই দিন আমাদের অপমানিত করবেন না।",
      },
    },
    intro: [
      {
        en: 'Hope on its own goes stale. What turns it into a change is istighfār — asking forgiveness — repeated until it becomes ordinary. Nuh (AS) and Hud (AS) both put it at the centre of their message, and both attach worldly consequences to it that have nothing to do with the Hereafter: rain, wealth, children, gardens, rivers, strength added to strength.',
        bn: 'কেবল আশা বাসি হয়ে যায়। যা তাকে পরিবর্তনে রূপ দেয় তা হলো ইস্তিগফার — ক্ষমা চাওয়া — যতক্ষণ না তা সাধারণ অভ্যাসে দাঁড়ায়। নূহ (আ) ও হুদ (আ) দুজনই একে নিজেদের বার্তার কেন্দ্রে রেখেছেন, আর দুজনই এর সাথে এমন পার্থিব ফল যুক্ত করেছেন যার সাথে আখিরাতের সম্পর্ক নেই: বৃষ্টি, সম্পদ, সন্তান, বাগান, নদী, শক্তির উপর শক্তি।',
      },
      {
        en: 'The Qur’an also names a time of day for it. Twice, in lists of the qualities of the righteous, the closing item is that they seek forgiveness in the hours before dawn — al-asḥār. Not as an emergency measure after a bad night, but as a standing habit of people the Qur’an is praising.',
        bn: 'কুরআন এর জন্য দিনের একটি সময়ও নির্দিষ্ট করে দেয়। দুইবার, সৎকর্মশীলদের গুণাবলির তালিকায়, শেষ বিষয়টি হলো তাঁরা ভোরের আগের প্রহরে ক্ষমা চান — আল-আসহার। কোনো খারাপ রাতের পরের জরুরি ব্যবস্থা হিসেবে নয়, বরং কুরআন যাঁদের প্রশংসা করছে তাঁদের একটি স্থায়ী অভ্যাস হিসেবে।',
      },
    ],
    verses: [
      {
        ref: '71:10-12',
        note: {
          en: 'One command and five results. Ask forgiveness — then rain in abundance, wealth, children, gardens, rivers. Nuh (AS) is speaking to people who had rejected him for centuries, and the argument he makes is not about fear; it is that istighfār repairs a life.',
          bn: 'একটি নির্দেশ আর পাঁচটি ফল। ক্ষমা চাও — তারপর প্রচুর বৃষ্টি, সম্পদ, সন্তান, বাগান, নদী। নূহ (আ) কথা বলছেন এমন মানুষদের সাথে যারা শতাব্দীর পর শতাব্দী তাঁকে প্রত্যাখ্যান করেছে, আর তিনি যে যুক্তি দিচ্ছেন তা ভয়ের নয়; তা এই যে ইস্তিগফার একটি জীবন মেরামত করে।',
        },
      },
      {
        ref: '11:52',
        note: {
          en: 'Hud (AS) gives the same prescription in two ordered steps — ask forgiveness, then turn back to Him — and the promised increase is quwwatan ilā quwwatikum, strength added to your strength. Repentance is presented as something that makes a person more capable, not smaller.',
          bn: 'হুদ (আ) একই ব্যবস্থাপত্র দেন দুটি ধাপে — ক্ষমা চাও, তারপর তাঁর দিকে ফেরো — আর প্রতিশ্রুত বৃদ্ধি হলো কুওয়াতান ইলা কুওয়াতিকুম, তোমাদের শক্তির উপর শক্তি। তওবাকে উপস্থাপন করা হয়েছে এমন কিছু হিসেবে যা মানুষকে আরও সক্ষম করে, ছোট করে না।',
        },
      },
      {
        ref: '51:18',
        note: {
          en: 'Two words that describe a whole practice: wa bil-asḥāri hum yastaghfirūn. The verse before it says they used to sleep little of the night. Being awake before dawn is the setting; the asking is what they do with it.',
          bn: 'দুটি শব্দে একটি পূর্ণ অনুশীলনের বর্ণনা: ওয়া বিল-আসহারি হুম ইয়াসতাগফিরূন। এর আগের আয়াত বলে, তাঁরা রাতের সামান্য অংশই ঘুমাতেন। ভোরের আগে জেগে থাকা প্রেক্ষাপট; ক্ষমা চাওয়াই তাঁরা তা দিয়ে যা করেন।',
        },
      },
      {
        ref: '3:17',
        note: {
          en: 'Five qualities in a row, and the last is the one that surprises: the patient, the truthful, the obedient, the givers — and those who seek forgiveness before dawn. Istighfār is listed as a virtue alongside patience and truthfulness, not as an admission of failure.',
          bn: 'পরপর পাঁচটি গুণ, আর শেষটিই বিস্মিত করে: ধৈর্যশীল, সত্যবাদী, অনুগত, দানশীল — আর যারা ভোরের আগে ক্ষমা চায়। ইস্তিগফারকে তালিকাভুক্ত করা হয়েছে ধৈর্য ও সত্যবাদিতার পাশে একটি গুণ হিসেবে, ব্যর্থতার স্বীকারোক্তি হিসেবে নয়।',
        },
      },
      {
        ref: '40:60',
        note: {
          en: 'The shortest transaction in the Book: call upon Me, I will respond to you. The only failure the verse describes is refusing to ask — those too proud for His worship. Not asking is treated as the arrogance; asking badly is not mentioned as a problem at all.',
          bn: 'কিতাবের সবচেয়ে সংক্ষিপ্ত লেনদেন: আমাকে ডাকো, আমি সাড়া দেব। আয়াতটি যে একমাত্র ব্যর্থতার কথা বলে তা হলো চাইতে অস্বীকার করা — যারা তাঁর ইবাদতে অহংকার করে। না-চাওয়াকেই অহংকার বলা হয়েছে; খারাপভাবে চাওয়াকে সমস্যা হিসেবে উল্লেখই করা হয়নি।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6307',
        text: {
          en: 'The Prophet ﷺ said: “By Allah, I ask Allah for forgiveness and repent to Him more than seventy times in a day.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহর কসম, আমি দিনে সত্তরবারেরও বেশি আল্লাহর কাছে ক্ষমা চাই ও তাঁর কাছে তওবা করি।”',
        },
        note: {
          en: 'Read it as a target rather than as a statistic. Seventy in a day is roughly once every fifteen waking minutes, which is only possible if istighfār has stopped being an event.',
          bn: 'একে পরিসংখ্যান নয়, লক্ষ্যমাত্রা হিসেবে পড়ুন। দিনে সত্তরবার মানে জেগে থাকা প্রতি পনেরো মিনিটে প্রায় একবার, যা তখনই সম্ভব যখন ইস্তিগফার আর কোনো ঘটনা থাকে না।',
        },
      },
      {
        src: 'Sahih al-Bukhari 6306 — sayyid al-istighfār',
        ar: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
        text: {
          en: 'The Prophet ﷺ said the best way of asking forgiveness is to say: “O Allah, You are my Lord; there is no deity except You. You created me and I am Your servant, and I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge before You Your favour upon me, and I acknowledge before You my sin — so forgive me, for none forgives sins except You.” He added that whoever says it during the day with certainty in it and dies that day before evening is among the people of Paradise, and whoever says it at night with certainty and dies before morning is among the people of Paradise.',
          bn: 'নবী ﷺ বলেছেন, ক্ষমা প্রার্থনার সর্বোত্তম রূপ হলো বলা: “হে আল্লাহ, তুমি আমার রব, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ, আমি তোমার বান্দা, আর আমি সাধ্যমতো তোমার অঙ্গীকার ও প্রতিশ্রুতির উপর আছি। আমি যা করেছি তার অনিষ্ট থেকে তোমার আশ্রয় চাই। আমার উপর তোমার অনুগ্রহ আমি স্বীকার করছি, আর আমার গুনাহও স্বীকার করছি — তাই আমাকে ক্ষমা করো, কারণ তুমি ছাড়া কেউ গুনাহ ক্ষমা করে না।” তিনি আরও বলেন, যে দিনের বেলা দৃঢ় বিশ্বাসসহ এটি বলে এবং সন্ধ্যার আগে মারা যায়, সে জান্নাতিদের অন্তর্ভুক্ত; আর যে রাতে দৃঢ় বিশ্বাসসহ এটি বলে এবং সকাল হওয়ার আগে মারা যায়, সে জান্নাতিদের অন্তর্ভুক্ত।',
        },
        note: {
          en: 'Notice the two acknowledgements placed side by side: His favour on you, and your sin. Neither is allowed to crowd out the other, which is the exact balance this whole section is trying to describe.',
          bn: 'পাশাপাশি রাখা দুটি স্বীকৃতি লক্ষ করুন: আপনার উপর তাঁর অনুগ্রহ, আর আপনার গুনাহ। কোনোটিই অন্যটিকে চাপা দিতে পারে না, আর এই গোটা অংশটি ঠিক এই ভারসাম্যটিই বোঝাতে চাইছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Say astaghfirullāh one hundred times today, spread out, not in one sitting. The point is to make the phrase available to you at speed when you need it.',
        bn: 'আজ একশ বার আসতাগফিরুল্লাহ বলুন, ছড়িয়ে ছড়িয়ে, এক বৈঠকে নয়। উদ্দেশ্য হলো প্রয়োজনের মুহূর্তে বাক্যটি যেন সাথে সাথেই মুখে আসে।',
      },
      {
        en: 'Memorise sayyid al-istighfār this month. It is one paragraph and it carries the promise attached to it in the hadith itself.',
        bn: 'এই মাসে সাইয়িদুল ইস্তিগফার মুখস্থ করুন। এটি এক অনুচ্ছেদ, আর হাদিসেই এর সাথে যে প্রতিশ্রুতি যুক্ত আছে তা এটি বহন করে।',
      },
      {
        en: 'Set an alarm for twenty minutes before fajr once this week. 51:18 and 3:17 both point at that window, and it is quieter than you expect.',
        bn: 'এই সপ্তাহে একবার ফজরের বিশ মিনিট আগে অ্যালার্ম দিন। ৫১:১৮ ও ৩:১৭ দুটোই ওই সময়টির দিকে ইঙ্গিত করে, আর তা আপনার ধারণার চেয়েও নিস্তব্ধ।',
      },
      {
        en: 'If a person was harmed, go to them. That is the one step no amount of istighfār replaces — see step four in the panel above.',
        bn: 'কারও ক্ষতি হয়ে থাকলে তার কাছে যান। এটিই সেই একমাত্র ধাপ, যা কোনো পরিমাণ ইস্তিগফার দিয়েই পূরণ হয় না — উপরের প্যানেলের চতুর্থ ধাপ দেখুন।',
      },
    ],
  },

  {
    id: 'ibad-ar-rahman',
    wing: 'character',
    emoji: '\u{1F54A}️',
    title: { en: 'The Servants of the Most Merciful', bn: 'রহমানের বান্দাগণ' },
    tagline: {
      en: 'The Qur’an’s own portrait of the ideal Muslim — twelve verses, and it starts with how they walk.',
      bn: 'আদর্শ মুসলিমের ছবিটা কুরআন নিজেই এঁকেছে। বারোটি আয়াত, আর শুরু হচ্ছে তাঁরা রাস্তায় কীভাবে হাঁটেন তা দিয়ে।',
    },
    dua: {
      ref: '25:74',
      why: {
        en: "The last thing they ask for is a family that is a coolness to the eyes and a life worth copying. Character, in the end, asks for a home.",
        bn: "তাঁরা সবশেষে যা চান তা হলো এমন পরিবার যা চোখের শীতলতা, আর অনুসরণযোগ্য এক জীবন। চরিত্র শেষ পর্যন্ত একটি ঘরই চায়।",
      },
    },
    intro: [
      {
        en: 'If you want a single passage that describes the finished character, this is it. Surah al-Furqan closes with a list titled ‘ibādu ar-Raḥmān — and the title is doing work. They are not called the servants of the Powerful or the servants of the Judge. They are named after the attribute they have absorbed, which tells you what the whole list is a description of.',
        bn: 'সম্পূর্ণ চরিত্রের বর্ণনা দেয় এমন একটি অনুচ্ছেদ চাইলে এটিই। সূরা আল-ফুরকান শেষ হয় ইবাদুর-রহমান শিরোনামের একটি তালিকা দিয়ে — আর শিরোনামটি কাজ করছে। তাঁদের বলা হয়নি ক্ষমতাবানের বান্দা বা বিচারকের বান্দা। তাঁদের নাম দেওয়া হয়েছে সেই গুণ অনুসারে যা তাঁরা আত্মস্থ করেছেন, আর তা থেকেই বোঝা যায় গোটা তালিকাটি আসলে কীসের বর্ণনা।',
      },
      {
        en: 'Notice the order. It does not open with belief or with prayer — it opens with the way they move through a street and the way they answer someone who is rude to them. The interior life comes second, in the next verse, standing at night. The Qur’an puts the visible, social behaviour first, which is a comment in itself.',
        bn: 'ক্রমটি লক্ষ করুন। শুরু হয় না ঈমান বা নামাজ দিয়ে — শুরু হয় তাঁরা রাস্তায় কীভাবে চলেন আর কেউ রূঢ় কথা বললে কীভাবে জবাব দেন তা দিয়ে। অন্তর্জীবন আসে দ্বিতীয়ে, পরের আয়াতে, রাতে দাঁড়ানোয়। কুরআন দৃশ্যমান সামাজিক আচরণকে আগে রাখে, আর এটি নিজেই একটি মন্তব্য।',
      },
    ],
    verses: [
      {
        ref: '25:63',
        note: {
          en: 'Hawnan means without weight thrown around — an unhurried, unaggressive way of occupying space. And the response to abuse is a single word, salāman, which is neither a comeback nor a surrender. They end the exchange without losing anything.',
          bn: 'হাওনান মানে ভার না চাপিয়ে চলা — অস্থিরতাহীন, আগ্রাসনহীনভাবে জায়গা দখল করা। আর গালির জবাব একটি শব্দ, সালামান, যা পাল্টা আঘাতও নয়, আত্মসমর্পণও নয়। তাঁরা কিছু না হারিয়েই কথোপকথনটি শেষ করে দেন।',
        },
      },
      {
        ref: '25:64',
        note: {
          en: 'The public gentleness of the previous verse is paid for here. Whoever can absorb an insult at midday has usually been standing somewhere at midnight. The Qur’an places the two next to each other without explaining the link, and the link is the point.',
          bn: 'আগের আয়াতের প্রকাশ্য কোমলতার মূল্য এখানে শোধ করা হয়। যে দুপুরে অপমান হজম করতে পারে, সে সাধারণত মাঝরাতে কোথাও দাঁড়িয়ে থেকেছে। কুরআন দুটিকে পাশাপাশি রাখে সম্পর্কটি ব্যাখ্যা না করেই, আর সেই সম্পর্কটিই মূল কথা।',
        },
      },
      {
        ref: '25:65-66',
        note: {
          en: 'People this described still ask to be spared the Fire. That is the calibration: the more real their worship, the less they presume on it. Nothing in the passage lets a reader move from good character to feeling safe.',
          bn: 'এমন বর্ণনার মানুষেরাও জাহান্নাম থেকে রক্ষা পাওয়ার আবেদন করেন। এটিই ভারসাম্য: তাঁদের ইবাদত যত বাস্তব, তার উপর ভরসা তত কম। অনুচ্ছেদের কোথাও পাঠককে সুন্দর চরিত্র থেকে নিরাপদ বোধ করার দিকে যেতে দেওয়া হয়নি।',
        },
      },
      {
        ref: '25:67',
        note: {
          en: 'A financial description of character. Neither wasteful nor tight-fisted, but qawāman — upright, balanced — between the two. It is unusual for a list of virtues to include a spending pattern, and it says something about how much of character is settled at the point of purchase.',
          bn: 'চরিত্রের একটি আর্থিক বর্ণনা। অপচয়ীও নয়, কৃপণও নয়, বরং কাওয়ামান — সোজা, ভারসাম্যপূর্ণ — দুইয়ের মাঝামাঝি। গুণের তালিকায় ব্যয়ের ধরন থাকা অস্বাভাবিক, আর এতে বোঝা যায় চরিত্রের কতটা খরচের মুহূর্তেই নির্ধারিত হয়।',
        },
      },
      {
        ref: '25:72',
        note: {
          en: 'Two clauses about what they will not attend. They do not bear false witness, and when they pass by laghw — empty, degrading talk — they pass with dignity. Not a lecture, not a scene: they keep walking.',
          bn: 'তাঁরা কোথায় থাকবেন না, তা নিয়ে দুটি বাক্যাংশ। তাঁরা মিথ্যা সাক্ষ্য দেন না, আর লাগভ — অসার, অবমাননাকর কথাবার্তার — পাশ দিয়ে যাওয়ার সময় মর্যাদার সাথে চলে যান। কোনো বক্তৃতা নয়, কোনো দৃশ্য নয়: তাঁরা হেঁটে যান।',
        },
      },
      {
        ref: '25:73',
        note: {
          en: 'A quiet, devastating line. It does not say they accept the verses — it says they do not fall upon them deaf and blind. The failure being described is attending the reminder while nothing goes in, which is a religious person’s risk more than an irreligious one’s.',
          bn: 'একটি শান্ত, মর্মভেদী লাইন। এটি বলে না যে তাঁরা আয়াতগুলো গ্রহণ করেন — বলে যে তাঁরা তার উপর বধির ও অন্ধ হয়ে ঝাঁপিয়ে পড়েন না। যে ব্যর্থতার বর্ণনা দেওয়া হচ্ছে তা হলো উপদেশের আসরে বসে থাকা অথচ ভেতরে কিছুই না ঢোকা, আর এটি অধার্মিকের চেয়ে ধার্মিক মানুষেরই বেশি ঝুঁকি।',
        },
      },
      {
        ref: '25:74',
        note: {
          en: 'The list ends at home. They ask for family who are a coolness to the eyes, and then ask to be made a model for the righteous — an ambition to be imitated, which is only safe in someone who has already prayed the previous eleven verses into place.',
          bn: 'তালিকাটি শেষ হয় ঘরে এসে। তাঁরা চান এমন পরিবার যারা চোখের শীতলতা, তারপর চান মুত্তাকিদের জন্য আদর্শ হতে — অনুসৃত হওয়ার আকাঙ্ক্ষা, যা কেবল তার জন্যই নিরাপদ যিনি আগের এগারোটি আয়াত ইতিমধ্যে জীবনে বসিয়ে নিয়েছেন।',
        },
      },
    ],
    hadith: [
      {
        src: 'Jami‘ at-Tirmidhi 2002 (hasan sahih)',
        text: {
          en: 'The Prophet ﷺ said: “Nothing is placed on the scale that is heavier than good character. The person of good character reaches by it the rank of one who fasts and prays.”',
          bn: 'নবী ﷺ বলেছেন: “পাল্লায় সুন্দর চরিত্রের চেয়ে ভারী কিছু রাখা হয় না। সুন্দর চরিত্রের অধিকারী এর দ্বারা রোজাদার ও নামাজির মর্যাদায় পৌঁছে যায়।”',
        },
        note: {
          en: 'Character is not being ranked above worship here — it is being described as reaching the same place. That is why al-Furqan can list a walking style and a night vigil in consecutive verses without changing subject.',
          bn: 'এখানে চরিত্রকে ইবাদতের উপরে স্থান দেওয়া হচ্ছে না — বলা হচ্ছে তা একই জায়গায় পৌঁছে যায়। সেজন্যই আল-ফুরকান পরপর দুই আয়াতে হাঁটার ভঙ্গি ও রাতের ইবাদতের কথা বলতে পারে বিষয় না বদলেই।',
        },
      },
    ],
    practice: [
      {
        en: 'Take one insult this week and answer it with salām and nothing else. You will feel you lost. Read 25:63 again afterwards.',
        bn: 'এই সপ্তাহে একটি অপমানের জবাব দিন শুধু সালাম দিয়ে, আর কিছু নয়। আপনার মনে হবে আপনি হেরে গেলেন। এরপর ২৫:৬৩ আবার পড়ুন।',
      },
      {
        en: 'Walk out of one conversation that has turned into laghw, without announcing why. That is the whole instruction in 25:72.',
        bn: 'লাগভে পরিণত হওয়া একটি আলাপ থেকে কারণ না জানিয়েই উঠে আসুন। ২৫:৭২-এর নির্দেশ পুরোটাই এই।',
      },
      {
        en: 'Audit last month’s spending against 25:67. Extravagance and stinginess are both named, and most of us are failing on one side without noticing.',
        bn: 'গত মাসের খরচ ২৫:৬৭-এর নিরিখে যাচাই করুন। অপচয় ও কৃপণতা দুটোরই নাম আছে, আর আমাদের বেশিরভাগই টের না পেয়ে কোনো একদিকে ব্যর্থ হচ্ছি।',
      },
    ],
  },

  {
    id: 'believers-succeeded',
    wing: 'character',
    emoji: '\u{1F3C6}',
    title: { en: 'The Believers Have Succeeded', bn: 'মুমিনগণ সফল হয়েছে' },
    tagline: {
      en: 'Success declared in the past tense, then itemised — seven things, and prayer appears twice.',
      bn: 'সফল হয়ে গেছে — ঘোষণাটা আগে, তালিকা তার পরে। সাতটি গুণ, আর নামাজের কথা আসে দুবার।',
    },
    dua: {
      ref: '12:101',
      why: {
        en: "Yusuf (AS), at the height of his power, asks only to die a Muslim and be joined to the righteous. Success ends where it started.",
        bn: "ইউসুফ (আ), ক্ষমতার শীর্ষে থেকে, কেবল চান মুসলিম অবস্থায় মৃত্যু আর সৎকর্মশীলদের সাথে মিলিত হওয়া। সাফল্য শেষ হয় যেখান থেকে শুরু হয়েছিল সেখানেই।",
      },
    },
    intro: [
      {
        en: 'Surah al-Mu’minun opens by announcing the verdict before the evidence: qad aflaḥa al-mu’minūn — the believers have already succeeded. Aflaḥa comes from a root used for a farmer splitting open the soil; success here is something cultivated out of ground that had to be broken first. Then the surah lists what such a person looks like.',
        bn: 'সূরা আল-মুমিনুন শুরু হয় প্রমাণের আগেই রায় ঘোষণা করে: কাদ আফলাহাল মুমিনূন — মুমিনগণ ইতিমধ্যেই সফল হয়েছে। আফলাহা শব্দটি এমন ধাতুমূল থেকে যা কৃষকের মাটি চিরে ফেলা বোঝাতে ব্যবহৃত হয়; এখানে সাফল্য এমন কিছু যা প্রথমে ভাঙতে হওয়া জমি থেকেই ফলাতে হয়। তারপর সূরাটি বলে এমন মানুষ দেখতে কেমন।',
      },
      {
        en: 'The list is bounded by prayer at both ends — khushū‘ in it at the start, and maintaining it at the finish — with everything else held between those two. That framing is worth taking seriously. Whatever is not anchored to the prayer at both ends has a habit of not holding.',
        bn: 'তালিকাটির দুই প্রান্তেই নামাজ — শুরুতে তাতে খুশু, শেষে তা রক্ষা করা — আর বাকি সবকিছু এই দুইয়ের মাঝে ধরা। এই কাঠামোটি গুরুত্ব দিয়ে নেওয়ার মতো। যা কিছু দুই প্রান্তে নামাজের সাথে বাঁধা থাকে না, তা সাধারণত টেকে না।',
      },
    ],
    verses: [
      {
        ref: '23:1-2',
        note: {
          en: 'The first quality is not that they pray but how: khāshi‘ūn, humbly present inside it. The surah does not count prayers; it asks whether anyone was home during them.',
          bn: 'প্রথম গুণটি এই নয় যে তাঁরা নামাজ পড়েন, বরং কীভাবে পড়েন: খাশিউন, তার ভেতরে বিনীতভাবে উপস্থিত। সূরাটি নামাজ গোনে না; জিজ্ঞেস করে সেই সময়টায় ভেতরে কেউ ছিল কি না।',
        },
      },
      {
        ref: '23:3',
        note: {
          en: 'Laghw again — the same word as in al-Furqan. Two separate portraits of the ideal believer both name turning away from empty talk, which suggests it is load-bearing rather than decorative.',
          bn: 'আবারও লাগভ — আল-ফুরকানের সেই একই শব্দ। আদর্শ মুমিনের দুটি পৃথক প্রতিকৃতিতেই অসার কথা থেকে মুখ ফিরিয়ে নেওয়ার উল্লেখ, যা বোঝায় এটি সাজসজ্জা নয়, ভারবহনকারী স্তম্ভ।',
        },
      },
      {
        ref: '23:4',
        note: {
          en: 'Zakah is described with a verb of doing, fā‘ilūn — they are performers of it, not merely payers. The Qur’an keeps money inside the description of piety rather than in a separate section on finance.',
          bn: 'যাকাতকে বর্ণনা করা হয়েছে করার ক্রিয়াপদ দিয়ে, ফাইলূন — তাঁরা এর সম্পাদনকারী, নিছক প্রদানকারী নন। কুরআন অর্থকে তাকওয়ার বর্ণনার ভেতরেই রাখে, আলাদা কোনো অর্থনৈতিক অধ্যায়ে নয়।',
        },
      },
      {
        ref: '23:5',
        note: {
          en: 'Chastity stated as guarding rather than as avoiding — ḥāfiẓūn, custodians of something entrusted. It is an active posture, and the verses that follow define its lawful place rather than leaving the matter as pure prohibition.',
          bn: 'সতীত্বকে বলা হয়েছে রক্ষা করা হিসেবে, এড়িয়ে চলা হিসেবে নয় — হাফিজূন, আমানত রক্ষাকারী। এটি সক্রিয় অবস্থান, আর পরবর্তী আয়াতগুলো বিষয়টিকে নিছক নিষেধাজ্ঞা হিসেবে না রেখে তার বৈধ স্থান নির্ধারণ করে।',
        },
      },
      {
        ref: '23:8',
        note: {
          en: 'Trusts and promises in one clause. A person can keep every ritual on this list and fail here, which is why the Sunnah names breaking a promise as a sign of hypocrisy rather than as a minor lapse of manners.',
          bn: 'আমানত ও প্রতিশ্রুতি এক বাক্যাংশে। কেউ এই তালিকার সব আনুষ্ঠানিকতা রক্ষা করেও এখানে ব্যর্থ হতে পারে, সেজন্যই সুন্নাহ প্রতিশ্রুতি ভঙ্গকে শিষ্টাচারের ছোট ত্রুটি নয়, মুনাফিকির লক্ষণ বলে।',
        },
      },
      {
        ref: '23:9-11',
        note: {
          en: 'The list closes where it opened. And the reward is described with a strange word — inheritance. They inherit al-Firdaus, as though it had been in their name the whole time and the list was simply how it was claimed.',
          bn: 'তালিকাটি যেখানে শুরু হয়েছিল সেখানেই শেষ। আর পুরস্কার বর্ণিত হয়েছে অদ্ভুত এক শব্দে — উত্তরাধিকার। তাঁরা ফিরদাউসের উত্তরাধিকারী হন, যেন তা এতক্ষণ তাঁদেরই নামে ছিল, আর তালিকাটি ছিল কেবল দাবি করার পদ্ধতি।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 33, Sahih Muslim 59',
        text: {
          en: 'The Prophet ﷺ said: “The signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays.”',
          bn: 'নবী ﷺ বলেছেন: “মুনাফিকের লক্ষণ তিনটি: কথা বললে মিথ্যা বলে, প্রতিশ্রুতি দিলে ভঙ্গ করে, আর আমানত রাখা হলে খিয়ানত করে।”',
        },
        note: {
          en: 'The three named are exactly the ones 23:8 asks about. Neither text mentions prayer or fasting — the diagnostic is placed entirely in how you handle what other people gave you.',
          bn: 'উল্লিখিত তিনটিই ঠিক সেগুলো যা ২৩:৮ জানতে চায়। কোনো পাঠেই নামাজ বা রোজার উল্লেখ নেই — নির্ণায়কটি পুরোপুরি রাখা হয়েছে অন্যরা আপনাকে যা দিয়েছে তা আপনি কীভাবে সামলান তার উপর।',
        },
      },
    ],
    practice: [
      {
        en: 'Pick one prayer tomorrow and give it your full attention from takbīr to salām. Not all five — one. Khushū‘ is built the way anything else is.',
        bn: 'আগামীকাল একটি নামাজ বেছে নিন আর তাকবির থেকে সালাম পর্যন্ত পূর্ণ মনোযোগ দিন। পাঁচটি নয় — একটি। খুশু গড়ে ওঠে আর সবকিছুর মতোই।',
      },
      {
        en: 'Close the loop on a promise you have quietly let lapse. 23:8 and the hadith of the three signs are talking about that one.',
        bn: 'নীরবে ফেলে রাখা একটি প্রতিশ্রুতি সম্পন্ন করুন। ২৩:৮ আর তিন লক্ষণের হাদিস ঠিক সেটির কথাই বলছে।',
      },
      {
        en: 'Work out your zakah properly this year instead of estimating. The verse calls it something you perform, and performing requires knowing the number.',
        bn: 'এ বছর আন্দাজ না করে ঠিকভাবে যাকাতের হিসাব করুন। আয়াত একে সম্পাদনের বিষয় বলছে, আর সম্পাদনের জন্য সংখ্যাটি জানা লাগে।',
      },
    ],
  },

  {
    id: 'ten-pairs',
    wing: 'character',
    emoji: '\u{1F51F}',
    title: { en: 'Ten Qualities, Named Twice', bn: 'দশ গুণ, দুবার করে' },
    tagline: {
      en: 'One verse lists the whole ideal — and says every item of it belongs to men and women alike.',
      bn: 'গোটা আদর্শের তালিকা এক আয়াতেই। আর প্রতিটি গুণ নারী-পুরুষ দুজনের নামেই আলাদা করে বলা।',
    },
    dua: {
      ref: '3:8',
      why: {
        en: "Ten qualities are worth nothing if the heart moves afterwards. This is the request that they stay.",
        bn: "দশটি গুণের কোনো মূল্য নেই যদি পরে অন্তর সরে যায়। এটি সেই আবেদন, যেন তারা থেকে যায়।",
      },
    },
    intro: [
      {
        en: 'Verse 33:35 is the longest single list of qualities in the Qur’an, and its most striking feature is structural: every item is stated twice, once for men and once for women. Ten qualities, twenty phrases. The repetition is not padding — it was revealed, as the reports have it, after Umm Salamah asked why the Qur’an so often addressed men.',
        bn: '৩৩:৩৫ আয়াতটি কুরআনে গুণের সবচেয়ে দীর্ঘ একক তালিকা, আর তার সবচেয়ে লক্ষণীয় দিকটি কাঠামোগত: প্রতিটি বিষয় দুইবার করে বলা — একবার পুরুষদের জন্য, একবার নারীদের জন্য। দশটি গুণ, বিশটি বাক্যাংশ। পুনরাবৃত্তিটি বাহুল্য নয় — বর্ণনা অনুযায়ী উম্মে সালামা (রা) যখন জিজ্ঞেস করলেন কুরআন কেন এত বেশি পুরুষদের সম্বোধন করে, তখনই এটি নাজিল হয়।',
      },
      {
        en: 'Read the ten in order and a shape appears: it begins with islām and īmān — submission and belief — moves through obedience, truthfulness, patience, humility, then charity, fasting, chastity, and ends with remembering Allah abundantly. Outward, inward, then outward again, closed by dhikr. The whole religion is compressed into one sentence.',
        bn: 'দশটি ক্রমানুসারে পড়লে একটি আকৃতি ফুটে ওঠে: শুরু ইসলাম ও ঈমান দিয়ে — আত্মসমর্পণ ও বিশ্বাস — তারপর আনুগত্য, সত্যবাদিতা, ধৈর্য, বিনয়, এরপর দান, রোজা, সতীত্ব, আর শেষ হয় আল্লাহকে অধিক স্মরণ দিয়ে। বাইরে, ভেতরে, আবার বাইরে, শেষে জিকির। গোটা দ্বীন এক বাক্যে সংকুচিত।',
      },
    ],
    verses: [
      {
        ref: '33:35',
        note: {
          en: 'Count the pairs as you read and watch where the verse spends its length. The reward at the end is stated once, not twice — maghfirah and a great reward, for all twenty phrases together. The distinction is maintained through the qualities and dissolved at the outcome.',
          bn: 'পড়ার সময় জোড়াগুলো গুনুন আর দেখুন আয়াতটি তার দৈর্ঘ্য কোথায় ব্যয় করে। শেষের পুরস্কার একবারই বলা হয়েছে, দুইবার নয় — মাগফিরাত ও মহা প্রতিদান, বিশটি বাক্যাংশের সবার জন্য একসাথে। পার্থক্যটি গুণের বেলায় বজায় থাকে আর ফলাফলে মিলিয়ে যায়।',
        },
      },
      {
        ref: '3:17',
        note: {
          en: 'A shorter version of the same idea, and useful for cross-checking: patient, truthful, obedient, spending, seeking forgiveness before dawn. Four of those five appear in 33:35 as well, which shows the Qur’an returning to a stable core rather than improvising a list.',
          bn: 'একই ধারণার সংক্ষিপ্ত রূপ, আর মিলিয়ে দেখার জন্য কাজে লাগে: ধৈর্যশীল, সত্যবাদী, অনুগত, দানশীল, ভোরের আগে ক্ষমাপ্রার্থী। এর পাঁচটির মধ্যে চারটিই ৩৩:৩৫-এও আছে, যা দেখায় কুরআন তাৎক্ষণিক তালিকা বানাচ্ছে না, বরং একটি স্থির কেন্দ্রে ফিরে আসছে।',
        },
      },
      {
        ref: '49:13',
        note: {
          en: 'The companion principle. Every distinction the world uses to rank people — lineage, tribe, nation — is acknowledged as real and then explicitly demoted: the criterion is taqwā. 33:35 lists the qualities; 49:13 rules out every other scoreboard.',
          bn: 'সঙ্গী নীতিটি। মানুষকে ক্রম দিতে দুনিয়া যেসব পার্থক্য ব্যবহার করে — বংশ, গোত্র, জাতি — সেগুলোকে বাস্তব বলে স্বীকার করে স্পষ্টভাবেই নামিয়ে দেওয়া হয়েছে: মানদণ্ড হলো তাকওয়া। ৩৩:৩৫ গুণের তালিকা দেয়; ৪৯:১৩ বাকি সব হিসাবের খাতা বাতিল করে দেয়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2564',
        text: {
          en: 'The Prophet ﷺ said: “Allah does not look at your bodies or your appearances, but He looks at your hearts and your deeds.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ তোমাদের শরীর বা চেহারার দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে।”',
        },
        note: {
          en: 'Hearts and deeds — the inward and the outward, exactly the two registers 33:35 alternates between. Neither one is offered as sufficient on its own.',
          bn: 'অন্তর ও আমল — ভেতর ও বাহির, ঠিক সেই দুই স্তর যাদের মধ্যে ৩৩:৩৫ পালাক্রমে যাতায়াত করে। কোনোটিকেই একা যথেষ্ট বলা হয়নি।',
        },
      },
      {
        src: 'Jami‘ at-Tirmidhi 1162 (hasan sahih)',
        text: {
          en: 'The Prophet ﷺ said: “The most complete of the believers in faith are the best of them in character, and the best of you are those who are best to their wives.”',
          bn: 'নবী ﷺ বলেছেন: “ঈমানে সবচেয়ে পূর্ণাঙ্গ সেই মুমিনরা যাদের চরিত্র সবচেয়ে সুন্দর, আর তোমাদের মধ্যে সর্বোত্তম তারাই যারা নিজেদের স্ত্রীদের প্রতি সর্বোত্তম।”',
        },
        note: {
          en: 'The measurement of faith is moved twice in one sentence: first from ritual to character, then from character in public to conduct at home, where nobody is watching.',
          bn: 'এক বাক্যেই ঈমানের মাপকাঠি দুইবার সরানো হয়েছে: প্রথমে আনুষ্ঠানিকতা থেকে চরিত্রে, তারপর প্রকাশ্য চরিত্র থেকে ঘরের আচরণে, যেখানে কেউ দেখছে না।',
        },
      },
    ],
    practice: [
      {
        en: 'Read 33:35 slowly and mark which of the ten you are weakest in. There are only ten; the honest answer usually arrives within seconds.',
        bn: '৩৩:৩৫ ধীরে পড়ুন আর দাগ দিন দশটির কোনটিতে আপনি সবচেয়ে দুর্বল। মাত্র দশটি; সৎ উত্তরটি সাধারণত কয়েক সেকেন্ডেই এসে যায়।',
      },
      {
        en: 'Use the “I’m working on this” marker on one chapter in this wing and leave it there for a month. Ten at once is how people change nothing.',
        bn: 'এই অংশের একটি অধ্যায়ে “আমি এটি নিয়ে কাজ করছি” চিহ্নটি দিন আর এক মাস রেখে দিন। একসাথে দশটি ধরাই মানুষের কিছু না বদলানোর উপায়।',
      },
      {
        en: 'Test yourself against the last clause of the hadith, not the first. Ask the people in your house, not the people in the masjid.',
        bn: 'হাদিসের প্রথম নয়, শেষ অংশটি দিয়ে নিজেকে যাচাই করুন। মসজিদের মানুষদের নয়, নিজের ঘরের মানুষদের জিজ্ঞেস করুন।',
      },
    ],
  },

  {
    id: 'luqman',
    wing: 'character',
    emoji: '\u{1F9D3}',
    title: { en: 'Luqman’s Advice to His Son', bn: 'ছেলেকে লুকমানের নসিহত' },
    tagline: {
      en: 'A father with limited time says only what matters — and the Qur’an preserved the whole conversation.',
      bn: 'হাতে সময় কম, তাই বাবা কেবল দরকারি কথাটুকুই বলেন। কুরআন সেই কথাগুলো ধরে রেখেছে।',
    },
    dua: {
      ref: '46:15',
      why: {
        en: "The du‘a of a person reaching forty: gratitude for what was given to them and to their parents, and righteousness in their own children. Luqman’s passage read from the other side.",
        bn: "চল্লিশে পৌঁছানো মানুষের দোয়া: নিজেকে ও পিতামাতাকে দেওয়া নিয়ামতের কৃতজ্ঞতা, আর নিজের সন্তানদের মধ্যে সততা। লুকমানের অনুচ্ছেদ অন্য দিক থেকে পড়া।",
      },
    },
    intro: [
      {
        en: 'Luqman was not a prophet. He is described as a man given ḥikmah — wisdom — and the Qur’an devotes a passage to what he said to his son, which is a remarkable thing to preserve. What survives is a curriculum: creed first, then parents, then accountability, then prayer and public duty, then patience, and finally manners of walking and speaking.',
        bn: 'লুকমান নবী ছিলেন না। তাঁকে বর্ণনা করা হয়েছে হিকমাহ — প্রজ্ঞা — দেওয়া হয়েছে এমন ব্যক্তি হিসেবে, আর কুরআন একটি অনুচ্ছেদ ব্যয় করেছে তিনি তাঁর ছেলেকে কী বলেছিলেন তার জন্য, যা সংরক্ষণের মতো এক অসাধারণ বিষয়। যা টিকে আছে তা একটি পাঠ্যক্রম: প্রথমে আকিদা, তারপর পিতামাতা, তারপর জবাবদিহি, তারপর নামাজ ও সামাজিক দায়িত্ব, তারপর ধৈর্য, আর সবশেষে চলা ও বলার আদব।',
      },
      {
        en: 'It is worth noticing what he does not spend words on. Nothing about career, nothing about status, nothing about winning arguments. And the passage is interrupted mid-way by Allah Himself adding a section on parents — as though the point about honouring a father could not be left to the father to make.',
        bn: 'তিনি কীসের উপর শব্দ ব্যয় করেন না, তা লক্ষ করার মতো। পেশা নিয়ে কিছু নেই, মর্যাদা নিয়ে কিছু নেই, তর্কে জেতা নিয়ে কিছু নেই। আর অনুচ্ছেদটির মাঝখানে আল্লাহ নিজেই পিতামাতা নিয়ে একটি অংশ যোগ করে কথা থামিয়ে দেন — যেন পিতাকে সম্মান করার কথাটি পিতার মুখে বলতে দেওয়া গেল না।',
      },
    ],
    verses: [
      {
        ref: '31:13',
        note: {
          en: 'The first thing he says, and he says it while instructing him — wa huwa ya‘iẓuhu, in the middle of counsel, softened by “O my son.” The content is the hardest doctrine in the religion; the delivery is a father’s voice.',
          bn: 'তিনি প্রথম যা বলেন, তা বলেন উপদেশ দিতে দিতেই — ওয়া হুয়া ইয়াইজুহু, উপদেশের মাঝখানে, “হে আমার প্রিয় বৎস” দিয়ে কোমল করে। বিষয়বস্তু দ্বীনের সবচেয়ে কঠিন আকিদা; উপস্থাপনা এক পিতার কণ্ঠস্বর।',
        },
      },
      {
        ref: '31:14-15',
        note: {
          en: 'Allah’s own insertion, and it does something unexpected: even parents who push their child toward shirk are to be disobeyed in that and accompanied in this world with kindness. Obedience is limited; good treatment is not.',
          bn: 'আল্লাহর নিজের সংযোজন, আর তা অপ্রত্যাশিত কিছু করে: যে পিতামাতা সন্তানকে শিরকের দিকে ঠেলে দেন, সে বিষয়ে তাঁদের অমান্য করতে হবে, অথচ দুনিয়ায় তাঁদের সাথে সদাচরণেই থাকতে হবে। আনুগত্য সীমিত; সদ্ব্যবহার নয়।',
        },
      },
      {
        ref: '31:16',
        note: {
          en: 'The image is precise: the weight of a mustard seed, inside a rock, in the heavens or in the earth — three layers of hiddenness — and Allah will bring it forth. Said to a young person, it is a lesson about the deeds nobody will ever see, in both directions.',
          bn: 'চিত্রটি নিখুঁত: সরিষার দানার সমান ওজন, একটি পাথরের ভেতরে, আসমানে বা জমিনে — তিন স্তরের গোপনতা — আর আল্লাহ তা বের করে আনবেন। এক তরুণকে বলা এই কথাটি সেই আমলগুলো নিয়েই শিক্ষা, যা কেউ কখনো দেখবে না — উভয় দিকেই।',
        },
      },
      {
        ref: '31:17',
        note: {
          en: 'Four instructions, and the fourth explains why the third is there. Establish prayer, enjoin good, forbid wrong — and be patient over what befalls you. He does not promise that speaking up will be received well; he prepares his son for it not being.',
          bn: 'চারটি নির্দেশ, আর চতুর্থটি ব্যাখ্যা করে তৃতীয়টি কেন আছে। নামাজ কায়েম করো, সৎকাজের আদেশ দাও, মন্দ কাজে নিষেধ করো — আর যা তোমার উপর আসে তাতে ধৈর্য ধরো। তিনি প্রতিশ্রুতি দেন না যে কথা বললে তা ভালোভাবে নেওয়া হবে; বরং না নেওয়ার জন্যই ছেলেকে প্রস্তুত করেন।',
        },
      },
      {
        ref: '31:18-19',
        note: {
          en: 'It ends with posture and volume — do not turn your cheek away from people, do not strut, be moderate in your walk, lower your voice. A wisdom passage that could have closed on something grand closes on how you carry yourself down a street.',
          bn: 'শেষ হয় ভঙ্গি ও স্বর দিয়ে — মানুষ থেকে গাল ফিরিয়ে নিয়ো না, দম্ভভরে চোলো না, চলায় মধ্যপন্থা রাখো, কণ্ঠস্বর নিচু করো। প্রজ্ঞার অনুচ্ছেদ, যা বিশাল কিছুতে শেষ হতে পারত, শেষ হয় রাস্তায় আপনি নিজেকে কীভাবে বহন করেন তাতে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 5971, Sahih Muslim 2548',
        text: {
          en: 'A man asked the Prophet ﷺ: “Who is most deserving of my good companionship?” He said: “Your mother.” The man asked, “Then who?” He said: “Your mother.” “Then who?” He said: “Your mother.” “Then who?” He said: “Your father.”',
          bn: 'এক ব্যক্তি নবী ﷺ-কে জিজ্ঞেস করলেন: “আমার সদ্ব্যবহারের সবচেয়ে বেশি হকদার কে?” তিনি বললেন: “তোমার মা।” লোকটি বললেন, “তারপর কে?” তিনি বললেন: “তোমার মা।” “তারপর কে?” তিনি বললেন: “তোমার মা।” “তারপর কে?” তিনি বললেন: “তোমার বাবা।”',
        },
        note: {
          en: 'Read alongside 31:14, which gives the reason inside the verse: weakness upon weakness, and two years of weaning. The threefold answer is an argument, not just an emphasis.',
          bn: '৩১:১৪-এর পাশে রেখে পড়ুন, যা আয়াতের ভেতরেই কারণটি দিয়ে দেয়: দুর্বলতার উপর দুর্বলতা, আর দুই বছরের দুধ ছাড়ানো। তিনবার বলা উত্তরটি নিছক জোর দেওয়া নয়, একটি যুক্তি।',
        },
      },
    ],
    practice: [
      {
        en: 'Call your mother today. If she has passed, make du‘ā for her using the wording of 17:24 — the Qur’an supplies the sentence.',
        bn: 'আজ মাকে ফোন করুন। তিনি না থাকলে ১৭:২৪-এর ভাষায় তাঁর জন্য দোয়া করুন — কুরআনই বাক্যটি জুগিয়ে দেয়।',
      },
      {
        en: 'Say the difficult true thing you have been avoiding, then expect the discomfort instead of being surprised by it. That is 31:17 in the order it was given.',
        bn: 'যে সত্য কথাটি এড়িয়ে যাচ্ছেন তা বলুন, তারপর অস্বস্তিটি অপ্রত্যাশিত না ভেবে প্রত্যাশাই করুন। ৩১:১৭ যে ক্রমে দেওয়া হয়েছে, এটাই সেই ক্রম।',
      },
      {
        en: 'Lower your voice in the next argument. Luqman ends his life’s advice there, which suggests it is harder and worth more than it sounds.',
        bn: 'পরের তর্কে কণ্ঠস্বর নিচু করুন। লুকমান তাঁর জীবনের উপদেশ সেখানেই শেষ করেন, যা বোঝায় এটি শোনার চেয়ে কঠিন আর মূল্যবান।',
      },
    ],
  },

  {
    id: 'truthfulness',
    wing: 'character',
    emoji: '\u{1F5E3}️',
    title: { en: 'Truthfulness', bn: 'সত্যবাদিতা' },
    tagline: {
      en: 'Ṣidq is not only saying true things. It is being one thing all the way through.',
      bn: 'সিদক মানে শুধু সত্য বলা নয়। ভেতরে আর বাইরে একই মানুষ হওয়া।',
    },
    dua: {
      ref: '26:83',
      why: {
        en: "Ibrahim (AS) asks for sound judgement and then to be joined with the righteous — truthfulness requested as company, exactly as 9:119 commands it.",
        bn: "ইবরাহিম (আ) চান সঠিক বিচারবুদ্ধি, তারপর সৎকর্মশীলদের সাথে মিলিত হওয়া — সত্যনিষ্ঠা চাওয়া হচ্ছে সঙ্গ হিসেবে, ঠিক যেমন ৯:১১৯ নির্দেশ দেয়।",
      },
    },
    intro: [
      {
        en: 'The Arabic root ṣ-d-q covers truth in speech, sincerity in intention, and reliability in action. A friend is ṣadīq because he is true; charity is ṣadaqah because giving proves that a claim of faith was real. So when the Qur’an commands “be with the truthful,” it is not asking merely for accurate reporting. It is asking that the inside and the outside agree.',
        bn: 'আরবি ধাতুমূল স-দ-ক কথার সত্যতা, নিয়তের আন্তরিকতা ও কাজের নির্ভরযোগ্যতা — সবই ধারণ করে। বন্ধুকে সাদিক বলা হয় কারণ সে সত্যনিষ্ঠ; দানকে সাদাকা বলা হয় কারণ দেওয়াই প্রমাণ করে ঈমানের দাবিটি সত্য ছিল। তাই কুরআন যখন বলে “সত্যবাদীদের সাথে থাকো”, তখন তা কেবল নির্ভুল বিবরণ চাইছে না। চাইছে ভেতর ও বাহির যেন এক হয়।',
      },
      {
        en: 'The Sunnah describes truthfulness as a slope rather than a rule. A person tells the truth, keeps telling it, and is eventually written with Allah as ṣiddīq — a title, not a description. The same sentence runs in the other direction with lying, which means neither habit stays at the size it started.',
        bn: 'সুন্নাহ সত্যবাদিতাকে বর্ণনা করে নিয়ম হিসেবে নয়, ঢালু পথ হিসেবে। মানুষ সত্য বলে, বলতেই থাকে, আর একসময় আল্লাহর কাছে সিদ্দিক হিসেবে লেখা হয় — একটি উপাধি, নিছক বর্ণনা নয়। একই বাক্য মিথ্যার ক্ষেত্রে উল্টো দিকেও চলে, অর্থাৎ কোনো অভ্যাসই যে আকারে শুরু হয় সেখানে থেমে থাকে না।',
      },
    ],
    verses: [
      {
        ref: '9:119',
        note: {
          en: 'Two commands, and the second is the surprising one: be with the truthful. Not merely be truthful — position yourself among them. The verse treats truthfulness as something maintained by company, which is why honest people are so hard to remain in an environment that is not.',
          bn: 'দুটি নির্দেশ, আর দ্বিতীয়টিই বিস্ময়কর: সত্যবাদীদের সাথে থাকো। কেবল সত্যবাদী হও নয় — তাদের মাঝে নিজের অবস্থান নাও। আয়াতটি সত্যবাদিতাকে সঙ্গ দিয়ে রক্ষিত বিষয় হিসেবে দেখে, সেজন্যই অসৎ পরিবেশে সৎ থাকা এত কঠিন।',
        },
      },
      {
        ref: '33:70-71',
        note: {
          en: 'Qawlan sadīdā — speech that is straight, that hits the mark. And look at the two results attached: He will amend your deeds for you, and forgive your sins. Fixing your speech is presented as the lever that repairs the rest.',
          bn: 'কাওলান সাদীদা — সোজা কথা, লক্ষ্যভেদী কথা। আর যুক্ত দুটি ফল দেখুন: তিনি তোমাদের আমল শুধরে দেবেন, আর তোমাদের গুনাহ ক্ষমা করবেন। কথা ঠিক করাকে উপস্থাপন করা হয়েছে সেই লিভার হিসেবে যা বাকিটা মেরামত করে দেয়।',
        },
      },
      {
        ref: '2:177',
        note: {
          en: 'A long definition of righteousness that names belief, giving wealth in spite of loving it, prayer, zakah, keeping covenants, and patience — and then closes by calling those people ṣadaqū, the ones who were true. All of that is gathered under the heading of truthfulness.',
          bn: 'সৎকর্মের এক দীর্ঘ সংজ্ঞা, যেখানে আছে ঈমান, ভালোবাসা সত্ত্বেও সম্পদ দান, নামাজ, যাকাত, অঙ্গীকার রক্ষা, আর ধৈর্য — তারপর শেষ হয় সেই মানুষদের সাদাকূ বলে, যারা সত্যনিষ্ঠ ছিল। এই সবকিছুকেই সত্যবাদিতার শিরোনামের নিচে জড়ো করা হয়েছে।',
        },
      },
      {
        ref: '5:119',
        note: {
          en: 'A verse about the Day itself: this is the Day the truthful benefit from their truthfulness. It is stated as a delayed payment, which is worth remembering on the days when honesty visibly costs you something.',
          bn: 'সেই দিনটি নিয়েই একটি আয়াত: এটি সেই দিন যেদিন সত্যবাদীরা তাদের সত্যবাদিতার ফল পাবে। এটি বিলম্বিত পরিশোধ হিসেবে বলা হয়েছে, আর যেদিন সততার মূল্য চোখের সামনেই দিতে হয়, সেদিন এটি মনে রাখার মতো।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6094, Sahih Muslim 2607',
        text: {
          en: 'The Prophet ﷺ said: “Truthfulness leads to righteousness, and righteousness leads to Paradise. A man keeps telling the truth until he is written with Allah as a truthful one. And lying leads to wickedness, and wickedness leads to the Fire. A man keeps lying until he is written with Allah as a liar.”',
          bn: 'নবী ﷺ বলেছেন: “সত্যবাদিতা নেকির দিকে নিয়ে যায়, আর নেকি জান্নাতের দিকে নিয়ে যায়। মানুষ সত্য বলতে বলতে একসময় আল্লাহর কাছে সত্যবাদী হিসেবে লিখিত হয়। আর মিথ্যা পাপাচারের দিকে নিয়ে যায়, আর পাপাচার জাহান্নামের দিকে নিয়ে যায়। মানুষ মিথ্যা বলতে বলতে একসময় আল্লাহর কাছে মিথ্যাবাদী হিসেবে লিখিত হয়।”',
        },
        note: {
          en: 'Four stages each way, and no single lie is described as the turning point. The mechanism is accumulation, which means the small permitted exception is exactly where the slide begins.',
          bn: 'দুই দিকেই চারটি ধাপ, আর কোনো একটি মিথ্যাকেই মোড় ঘোরানোর মুহূর্ত বলা হয়নি। প্রক্রিয়াটি সঞ্চয়ের, অর্থাৎ ছোট অনুমোদিত ব্যতিক্রমটিই ঠিক সেই বিন্দু যেখান থেকে পিছলে পড়া শুরু।',
        },
      },
    ],
    practice: [
      {
        en: 'Stop the harmless exaggerations for one week — the rounded numbers, the improved stories. That is where the hadith says the slope starts.',
        bn: 'এক সপ্তাহ নিরীহ বাড়িয়ে বলা বন্ধ করুন — গোল করে বলা সংখ্যা, সাজিয়ে বলা গল্প। হাদিস অনুযায়ী ঢালটি ঠিক সেখান থেকেই শুরু।',
      },
      {
        en: 'Say “I don’t know” once today where you would normally have covered. It is a form of ṣidq that costs status and buys something better.',
        bn: 'আজ একবার বলুন “আমি জানি না”, যেখানে সাধারণত ঢেকে দিতেন। এটি সিদকের এমন এক রূপ, যা মর্যাদা খরচ করে তার চেয়ে ভালো কিছু কিনে দেয়।',
      },
      {
        en: 'Look at 9:119 and answer honestly whether the people you spend most time with make honesty easier or harder. The verse asks you to choose company, not just conduct.',
        bn: '৯:১১৯ দেখে সৎভাবে বলুন, আপনি যাদের সাথে সবচেয়ে বেশি সময় কাটান তারা সততাকে সহজ করে না কঠিন। আয়াতটি কেবল আচরণ নয়, সঙ্গ বেছে নিতেও বলে।',
      },
    ],
  },

  {
    id: 'gentleness',
    wing: 'character',
    emoji: '\u{1F33F}',
    title: { en: 'Gentleness', bn: 'কোমলতা' },
    tagline: {
      en: 'Allah told the two prophets sent to Pharaoh to speak to him gently. Very few of us are dealing with Pharaoh.',
      bn: 'ফেরাউনের কাছে যে দুই নবীকে পাঠানো হলো, আল্লাহ তাঁদের বললেন নরম কথায় কথা বলতে। আমাদের তো কারও ফেরাউনের সঙ্গে কারবার করতে হয় না।',
    },
    dua: {
      ref: '59:10',
      why: {
        en: "It asks forgiveness for those who came before, then asks that no resentment be left in the heart toward any believer. Gentleness starts as a du‘a about your own chest.",
        bn: "এটি ক্ষমা চায় আগে যাঁরা গেছেন তাঁদের জন্য, তারপর চায় যেন কোনো মুমিনের প্রতি অন্তরে বিদ্বেষ না থাকে। কোমলতা শুরু হয় নিজের বুক নিয়ে একটি দোয়া দিয়ে।",
      },
    },
    intro: [
      {
        en: 'Rifq — gentleness — is described in the Sunnah as something that beautifies whatever it touches and disfigures whatever it is stripped from. It is also described as earning what harshness cannot earn, which frames it as effective rather than merely nice. The religion presents softness as a strategy as well as a virtue.',
        bn: 'রিফক — কোমলতা — সুন্নাহতে বর্ণিত হয়েছে এমন কিছু হিসেবে যা যা-ই স্পর্শ করে তাকেই সুন্দর করে, আর যা থেকে তুলে নেওয়া হয় তাকেই কুৎসিত করে। একেও বলা হয়েছে এমন কিছু অর্জন করে যা কঠোরতা পারে না, ফলে একে কেবল মধুর নয়, কার্যকরও বলা হচ্ছে। দ্বীন কোমলতাকে গুণের পাশাপাশি কৌশল হিসেবেও উপস্থাপন করে।',
      },
      {
        en: 'The clearest evidence is a verse addressed to the Prophet ﷺ himself, telling him that had he been harsh, the people around him would have scattered. Not that they would have disliked him — that they would have left. The community that carried Islam existed because of the way its leader spoke.',
        bn: 'সবচেয়ে স্পষ্ট প্রমাণ নবী ﷺ-কে উদ্দেশ করে নাজিল হওয়া একটি আয়াত, যা তাঁকে বলছে, তিনি কঠোর হলে তাঁর চারপাশের মানুষ ছত্রভঙ্গ হয়ে যেত। তারা তাঁকে অপছন্দ করত — তা নয়, বরং তারা চলে যেত। ইসলামকে বহনকারী সমাজটি ছিল কারণ তার নেতা যেভাবে কথা বলতেন সেভাবেই।',
      },
    ],
    verses: [
      {
        ref: '3:159',
        note: {
          en: 'Read the causal chain: it was by mercy from Allah that you were lenient with them — the gentleness is itself named as a divine gift. Then the counterfactual, then three commands that all point outward: pardon them, ask forgiveness for them, consult them. Revealed after Uhud, where they had disobeyed him and it had cost lives.',
          bn: 'কারণের শৃঙ্খলটি পড়ুন: আল্লাহর রহমতেই আপনি তাদের প্রতি কোমল হয়েছিলেন — কোমলতাকেই বলা হয়েছে ঐশী দান। তারপর বিপরীত সম্ভাবনা, তারপর তিনটি নির্দেশ, যার সবই বাইরের দিকে: তাদের ক্ষমা করুন, তাদের জন্য ক্ষমা চান, তাদের সাথে পরামর্শ করুন। নাজিল হয়েছিল উহুদের পর, যেখানে তারা তাঁর অবাধ্য হয়েছিল আর তাতে প্রাণ গিয়েছিল।',
        },
      },
      {
        ref: '20:44',
        note: {
          en: 'The instruction given to Musa and Harun on their way to the man who claimed to be a god and had children killed: speak to him with soft words. Whatever hardness a person deserves, the Qur’an here separates that from how they are to be addressed.',
          bn: 'যে ব্যক্তি নিজেকে খোদা দাবি করেছিল আর শিশু হত্যা করিয়েছিল, তার কাছে যাওয়ার পথে মুসা ও হারুনকে দেওয়া নির্দেশ: তার সাথে কোমল কথা বলো। একজন যত কঠোরতাই প্রাপ্য হোক, কুরআন এখানে তা আলাদা করে দেয় তার সাথে কীভাবে কথা বলা হবে তা থেকে।',
        },
      },
      {
        ref: '48:29',
        note: {
          en: 'A description of the Companions with two halves — firm against those who fight the faith, merciful among themselves. The mercy is placed where the community is, and it is the second half that most readers apply in the wrong direction.',
          bn: 'সাহাবিদের দুই অংশের বর্ণনা — যারা দ্বীনের বিরুদ্ধে লড়ে তাদের প্রতি দৃঢ়, নিজেদের মধ্যে দয়ালু। দয়াটি রাখা হয়েছে যেখানে সমাজ, আর বেশিরভাগ পাঠক দ্বিতীয় অংশটিই ভুল দিকে প্রয়োগ করেন।',
        },
      },
      {
        ref: '21:107',
        note: {
          en: 'The mission statement, and it constrains everything else. Any expression of this religion that is not recognisable as mercy has drifted from the sentence that defines why it was sent.',
          bn: 'মিশনের ঘোষণাপত্র, আর তা বাকি সবকিছুকে বেঁধে দেয়। এই দ্বীনের এমন যেকোনো প্রকাশ, যা রহমত হিসেবে চেনা যায় না, তা সেই বাক্য থেকে সরে গেছে যা বলে দেয় দ্বীনটি কেন পাঠানো হয়েছিল।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2593',
        text: {
          en: 'The Prophet ﷺ said: “Allah is Gentle and loves gentleness, and He gives for gentleness what He does not give for harshness, and what He does not give for anything else.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ কোমল, তিনি কোমলতা ভালোবাসেন, আর কোমলতার বিনিময়ে তিনি এমন কিছু দেন যা কঠোরতার বিনিময়ে দেন না, আর অন্য কিছুর বিনিময়েও দেন না।”',
        },
        note: {
          en: 'Two exclusions in a row. Gentleness is not being called the better of several methods; it is being called the only one that unlocks a particular kind of giving.',
          bn: 'পরপর দুটি বর্জন। কোমলতাকে কয়েকটি পদ্ধতির মধ্যে উত্তম বলা হচ্ছে না; বলা হচ্ছে এটিই একমাত্র পথ যা এক বিশেষ ধরনের দান খুলে দেয়।',
        },
      },
      {
        src: 'Sahih Muslim 2594',
        text: {
          en: 'The Prophet ﷺ said: “Gentleness is not present in anything except that it beautifies it, and it is not removed from anything except that it disfigures it.”',
          bn: 'নবী ﷺ বলেছেন: “কোমলতা যে জিনিসেই থাকে তাকে সুন্দর করে, আর যে জিনিস থেকে তুলে নেওয়া হয় তাকেই কুৎসিত করে।”',
        },
        note: {
          en: 'A universal claim with no exception clause — not “in most things,” not “where appropriate.” Including the conversations where you are certain you are right.',
          bn: 'ব্যতিক্রমহীন একটি সর্বজনীন দাবি — “বেশিরভাগ ক্ষেত্রে” নয়, “যেখানে উপযুক্ত” নয়। সেই আলাপগুলোও এর মধ্যে, যেখানে আপনি নিশ্চিত যে আপনিই ঠিক।',
        },
      },
    ],
    practice: [
      {
        en: 'Pick the person you are most convinced deserves your sharpness and speak to them the way 20:44 instructs. The verse was revealed about a worse case than yours.',
        bn: 'যার প্রতি কঠোর হওয়া আপনার কাছে সবচেয়ে ন্যায্য মনে হয়, তার সাথে ২০:৪৪-এর নির্দেশমতো কথা বলুন। আয়াতটি নাজিল হয়েছিল আপনার চেয়েও খারাপ এক ক্ষেত্রে।',
      },
      {
        en: 'Delay your reply by ten minutes when a message annoys you. Almost every harsh sentence a person regrets was sent inside that window.',
        bn: 'কোনো বার্তা বিরক্ত করলে উত্তর দশ মিনিট পিছিয়ে দিন। মানুষ যত কঠোর বাক্যের জন্য অনুতপ্ত হয়, তার প্রায় সবই ওই সময়ের ভেতরেই পাঠানো।',
      },
      {
        en: 'If you correct someone’s religious practice this week, do it privately and once. Publicly and repeatedly is the harshness 3:159 says scatters people.',
        bn: 'এই সপ্তাহে কারও দ্বীনি আমল শুধরে দিতে হলে একান্তে ও একবারই করুন। প্রকাশ্যে ও বারবার — এটাই সেই কঠোরতা, যা ৩:১৫৯ বলে মানুষকে ছত্রভঙ্গ করে দেয়।',
      },
    ],
  },

  {
    id: 'pardon',
    wing: 'character',
    emoji: '\u{1F91D}',
    title: { en: 'Pardon and Repel With Better', bn: 'মাফ করা, আর ভালো দিয়ে জবাব' },
    tagline: {
      en: 'The Qur’an grants the right to retaliate, then spends several verses talking you out of using it.',
      bn: 'কুরআন আগে বদলা নেওয়ার অধিকারটা দেয়। তারপর কয়েক আয়াত ধরে বোঝায়, ওটা না নেওয়াই ভালো।',
    },
    dua: {
      ref: '60:5',
      why: {
        en: "Do not make us a trial for those who disbelieve — a prayer that your own conduct never becomes somebody else’s reason to turn away.",
        bn: "আমাদের কাফিরদের জন্য ফিতনা বানাবেন না — একটি প্রার্থনা, যেন আপনার আচরণ কখনো অন্য কারও মুখ ফিরিয়ে নেওয়ার কারণ না হয়।",
      },
    },
    intro: [
      {
        en: 'Islam does not ask you to pretend an injury did not happen. 42:40 opens by affirming that the recompense for an evil is an evil like it — the right is real and it is yours. And then, in the same sentence, it offers you a trade: whoever pardons and reconciles, his reward is with Allah. The offer only means something because the right was granted first.',
        bn: 'ইসলাম আপনাকে বলে না যে ভান করুন আঘাতটি ঘটেনি। ৪২:৪০ শুরুই হয় এই স্বীকৃতি দিয়ে যে মন্দের প্রতিদান তার সমান মন্দ — অধিকারটি বাস্তব আর তা আপনারই। তারপর একই বাক্যে একটি বিনিময় প্রস্তাব করে: যে ক্ষমা করে ও মীমাংসা করে, তার প্রতিদান আল্লাহর কাছে। প্রস্তাবটির মূল্য আছে কেবল এ কারণেই যে অধিকারটি আগে দেওয়া হয়েছিল।',
      },
      {
        en: 'Then it goes further than pardon. 41:34 asks you to repel the bad deed with what is better, and describes a result that sounds implausible until you have seen it: the one who was your enemy becomes as though he were a close friend. The Qur’an is not describing a feeling here. It is describing a technique.',
        bn: 'তারপর তা ক্ষমারও চেয়ে এগিয়ে যায়। ৪১:৩৪ বলে মন্দ কাজকে প্রতিহত করো যা উত্তম তা দিয়ে, আর এমন এক ফলের কথা বলে যা নিজে না দেখলে অবিশ্বাস্য মনে হয়: যে ছিল শত্রু, সে হয়ে ওঠে যেন অন্তরঙ্গ বন্ধু। কুরআন এখানে কোনো অনুভূতির বর্ণনা দিচ্ছে না। দিচ্ছে একটি পদ্ধতির বর্ণনা।',
      },
    ],
    verses: [
      {
        ref: '42:40',
        note: {
          en: 'Justice is stated first so that pardon is a choice and not a helplessness. And note the ending: Allah does not like wrongdoers — a warning attached to a verse about forgiving, so that pardon is never mistaken for permitting.',
          bn: 'ন্যায়বিচার আগে বলা হয়েছে যাতে ক্ষমাটি হয় একটি পছন্দ, অসহায়তা নয়। আর শেষটি লক্ষ করুন: আল্লাহ জালিমদের পছন্দ করেন না — ক্ষমার আয়াতের সাথে যুক্ত একটি সতর্কতা, যাতে ক্ষমাকে কখনো অন্যায় মেনে নেওয়া বলে ভুল করা না হয়।',
        },
      },
      {
        ref: '42:43',
        note: {
          en: 'Patience and forgiveness are grouped together and called ‘azm al-umūr — among the matters requiring resolve. The same phrase appears in Luqman’s advice about bearing hardship. Forgiving is filed under strength, not under softness.',
          bn: 'ধৈর্য ও ক্ষমাকে একসাথে রেখে বলা হয়েছে আজমুল উমূর — দৃঢ় সংকল্পের বিষয়। ঠিক একই বাক্যাংশ আছে কষ্ট সহ্য করা নিয়ে লুকমানের উপদেশে। ক্ষমাকে রাখা হয়েছে শক্তির খাতায়, কোমলতার খাতায় নয়।',
        },
      },
      {
        ref: '3:134',
        note: {
          en: 'Three actions in sequence and they get progressively harder: spending in ease and hardship, restraining anger, then pardoning people. Kāẓimīn al-ghayẓ means swallowing it whole while it is still hot — restraining, not not feeling it.',
          bn: 'ক্রমানুসারে তিনটি কাজ, আর তারা ক্রমশ কঠিন হয়: সচ্ছলতা ও অসচ্ছলতায় দান, রাগ দমন, তারপর মানুষকে ক্ষমা। কাজিমীনাল গাইজ মানে গরম থাকতেই তা পুরোটা গিলে ফেলা — দমন করা, না-অনুভব করা নয়।',
        },
      },
      {
        ref: '7:199',
        note: {
          en: 'Three words of instruction that scholars called the most comprehensive verse on manners: take what is easily given, enjoin what is good, turn away from the ignorant. The first clause is about expectations of people, and lowering them prevents most conflicts before they start.',
          bn: 'তিনটি নির্দেশ, যাকে আলিমগণ আদব-বিষয়ক সবচেয়ে ব্যাপক আয়াত বলেছেন: সহজে যা পাওয়া যায় তা গ্রহণ করো, সৎকাজের আদেশ দাও, মূর্খদের এড়িয়ে চলো। প্রথম অংশটি মানুষের কাছে প্রত্যাশা নিয়ে, আর তা কমালে বেশিরভাগ সংঘাত শুরুর আগেই থেমে যায়।',
        },
      },
      {
        ref: '41:34',
        note: {
          en: 'The mechanism, and it is specific: not equal are the good deed and the bad, so repel with what is better. Not equal — the verse concedes that they are not the same weight, which is precisely why the better one moves things.',
          bn: 'পদ্ধতিটি, আর তা সুনির্দিষ্ট: ভালো কাজ ও মন্দ কাজ সমান নয়, তাই যা উত্তম তা দিয়ে প্রতিহত করো। সমান নয় — আয়াতটি স্বীকার করে নেয় যে দুটির ওজন এক নয়, আর ঠিক সে কারণেই উত্তমটি পরিস্থিতি নড়িয়ে দেয়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2588',
        text: {
          en: 'The Prophet ﷺ said: “Charity does not decrease wealth. Allah increases nothing but honour for a servant who pardons. And no one humbles himself for Allah except that Allah raises him.”',
          bn: 'নবী ﷺ বলেছেন: “দান সম্পদ কমায় না। যে বান্দা ক্ষমা করে, আল্লাহ তার সম্মানই বাড়িয়ে দেন। আর যে আল্লাহর জন্য বিনয়ী হয়, আল্লাহ তাকে উঁচু করেন।”',
        },
        note: {
          en: 'Three claims, and each one inverts what the act appears to cost. The clause about pardon addresses the real fear directly: that forgiving will make you look weak.',
          bn: 'তিনটি দাবি, আর প্রতিটিই উল্টে দেয় কাজটির আপাত ক্ষতিকে। ক্ষমা নিয়ে বাক্যাংশটি সরাসরি আসল ভয়টির উত্তর দেয়: ক্ষমা করলে আপনাকে দুর্বল দেখাবে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 6114, Sahih Muslim 2609',
        text: {
          en: 'The Prophet ﷺ said: “The strong man is not the one who overcomes people by his strength. The strong man is the one who controls himself when he is angry.”',
          bn: 'নবী ﷺ বলেছেন: “শক্তিশালী সেই নয় যে কুস্তিতে মানুষকে হারায়। শক্তিশালী সেই, যে রাগের সময় নিজেকে সংযত রাখে।”',
        },
        note: {
          en: 'A definition being replaced rather than qualified. Placed next to 3:134, it explains why restraining anger sits in a list of virtues rather than in a list of temperaments.',
          bn: 'একটি সংজ্ঞাকে শর্তযুক্ত নয়, প্রতিস্থাপন করা হচ্ছে। ৩:১৩৪-এর পাশে রাখলে বোঝা যায় রাগ দমন কেন স্বভাবের তালিকায় নয়, গুণের তালিকায় বসে আছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Choose one person you are entitled to be angry with and drop it — genuinely, not by avoiding them. 42:40 says the reward for that is with Allah rather than in the apology you were waiting for.',
        bn: 'যার প্রতি রাগ করার অধিকার আপনার আছে এমন একজনকে বেছে নিয়ে বিষয়টি ছেড়ে দিন — সত্যিকারভাবে, তাকে এড়িয়ে চলে নয়। ৪২:৪০ বলে এর প্রতিদান আল্লাহর কাছে, আপনি যে ক্ষমাপ্রার্থনার অপেক্ষায় ছিলেন তাতে নয়।',
      },
      {
        en: 'Do one deliberate kindness for someone who wronged you, without explaining it. That is 41:34 applied literally, and the result it predicts is unnervingly common.',
        bn: 'যে আপনার প্রতি অন্যায় করেছে তার জন্য ব্যাখ্যা ছাড়াই ইচ্ছাকৃত একটি ভালো কাজ করুন। এটিই ৪১:৩৪-এর আক্ষরিক প্রয়োগ, আর যে ফল এটি বলে তা অস্বস্তিকরভাবে ঘন ঘন ঘটে।',
      },
      {
        en: 'Lower one expectation you hold of somebody. 7:199 begins with exactly that instruction, and it is the cheapest peace available.',
        bn: 'কারও কাছে আপনার একটি প্রত্যাশা কমান। ৭:১৯৯ ঠিক সেই নির্দেশ দিয়েই শুরু, আর এটিই সবচেয়ে সস্তায় পাওয়া শান্তি।',
      },
    ],
  },

  {
    id: 'humility',
    wing: 'character',
    emoji: '\u{1FAB6}',
    title: { en: 'Humility', bn: 'বিনয়' },
    tagline: {
      en: 'Arrogance is defined in the Sunnah with unusual precision — and neither half of the definition is about self-esteem.',
      bn: 'সুন্নাহ অহংকারের সংজ্ঞাটা খুব পরিষ্কার করে দিয়েছে। আর তার কোনো অংশই নিজেকে বড় ভাবা নিয়ে নয়।',
    },
    dua: {
      ref: '27:19',
      why: {
        en: "Sulayman (AS), at the head of a kingdom, asks only to be enabled to be grateful. That is what humility sounds like in someone who has everything.",
        bn: "সুলাইমান (আ), এক রাজ্যের শীর্ষে থেকে, কেবল চান যেন তাঁকে কৃতজ্ঞ হওয়ার তাওফিক দেওয়া হয়। যার সবকিছু আছে, তার মুখে বিনয় এমনই শোনায়।",
      },
    },
    intro: [
      {
        en: 'When a man objected that he liked his clothes and his shoes to look good, the Prophet ﷺ answered that Allah is beautiful and loves beauty, and then defined kibr for him: rejecting the truth and looking down on people. Two things, both about your relationship to others rather than to yourself. A person can be quiet, modest and self-effacing and still fail both tests.',
        bn: 'এক ব্যক্তি যখন আপত্তি করলেন যে তিনি নিজের পোশাক ও জুতা সুন্দর দেখতে পছন্দ করেন, নবী ﷺ উত্তর দিলেন যে আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন, তারপর তাঁর জন্য কিবরের সংজ্ঞা দিলেন: সত্যকে প্রত্যাখ্যান করা আর মানুষকে তুচ্ছ করা। দুটি বিষয়, আর দুটিই আপনার নিজের সাথে নয়, অন্যদের সাথে সম্পর্ক নিয়ে। কেউ শান্ত, বিনয়ী ও নিজেকে আড়াল করা মানুষ হয়েও দুটি পরীক্ষাতেই ব্যর্থ হতে পারে।',
      },
      {
        en: 'The Qur’an’s picture matches. It does not ask a person to think little of themselves; it asks them not to strut, not to turn their face from people, and not to claim purity. Kibr is treated as a posture toward creation, and the passages that condemn it are usually about how somebody walks and who they refuse to hear.',
        bn: 'কুরআনের ছবিও এর সাথে মেলে। এটি কাউকে নিজেকে তুচ্ছ ভাবতে বলে না; বলে দম্ভভরে না চলতে, মানুষ থেকে মুখ না ফেরাতে, আর নিজেকে পবিত্র দাবি না করতে। কিবরকে দেখা হয়েছে সৃষ্টির প্রতি একটি ভঙ্গি হিসেবে, আর যেসব অনুচ্ছেদ একে নিন্দা করে সেগুলো সাধারণত কেউ কীভাবে হাঁটে আর কার কথা শুনতে অস্বীকার করে তা নিয়েই।',
      },
    ],
    verses: [
      {
        ref: '31:18',
        note: {
          en: 'Two prohibitions and then two names for the person who breaks them: mukhtāl, self-deluded, and fakhūr, boastful. Turning your cheek away from someone while they speak is placed in the same verse as swaggering through the earth.',
          bn: 'দুটি নিষেধ, তারপর যে তা ভাঙে তার দুটি নাম: মুখতাল, আত্মপ্রবঞ্চিত, আর ফাখূর, দাম্ভিক। কেউ কথা বলার সময় তার দিক থেকে গাল ফিরিয়ে নেওয়াকে রাখা হয়েছে জমিনে দম্ভভরে চলার সাথে একই আয়াতে।',
        },
      },
      {
        ref: '17:37',
        note: {
          en: 'The argument is almost mocking, and deliberately physical: you will never tear the earth open, and you will never reach the mountains in height. Arrogance is answered not with theology but with a measurement.',
          bn: 'যুক্তিটি প্রায় বিদ্রূপাত্মক, আর ইচ্ছাকৃতভাবে শারীরিক: তুমি কখনো জমিন ফেড়ে ফেলতে পারবে না, আর উচ্চতায় কখনো পাহাড়ে পৌঁছাতে পারবে না। অহংকারের জবাব দেওয়া হয়েছে ধর্মতত্ত্ব দিয়ে নয়, একটি মাপ দিয়ে।',
        },
      },
      {
        ref: '53:32',
        note: {
          en: 'Do not claim purity for yourselves — He knows best who is conscious of Him. The verse arrives immediately after a broad promise of forgiveness, which places the warning exactly where it is needed: on the person who has just been reassured.',
          bn: 'নিজেদের পবিত্র বলে দাবি কোরো না — কে তাঁকে ভয় করে তা তিনিই সবচেয়ে ভালো জানেন। আয়াতটি আসে ক্ষমার এক ব্যাপক প্রতিশ্রুতির ঠিক পরেই, যা সতর্কতাটিকে ঠিক সেখানেই রাখে যেখানে তা দরকার: যে ব্যক্তি এইমাত্র আশ্বস্ত হলো তার উপর।',
        },
      },
      {
        ref: '25:63',
        note: {
          en: 'The servants of the Most Merciful are introduced by their gait. Humility in the Qur’an is repeatedly something visible in movement before it is anything you could describe about a person’s inner state.',
          bn: 'রহমানের বান্দাদের পরিচয় দেওয়া হয় তাঁদের চলার ভঙ্গি দিয়ে। কুরআনে বিনয় বারবারই এমন কিছু যা কারও অন্তরের অবস্থা বর্ণনার আগেই চলাফেরায় দৃশ্যমান।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 91',
        text: {
          en: 'The Prophet ﷺ said: “No one will enter Paradise who has an atom’s weight of arrogance in his heart.” A man said: “A man likes his clothes to be good and his shoes to be good.” He said: “Allah is beautiful and loves beauty. Arrogance is rejecting the truth and looking down on people.”',
          bn: 'নবী ﷺ বলেছেন: “যার অন্তরে অণু পরিমাণ অহংকার আছে সে জান্নাতে প্রবেশ করবে না।” এক ব্যক্তি বললেন: “মানুষ তো চায় তার পোশাক সুন্দর হোক, জুতা সুন্দর হোক।” তিনি বললেন: “আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। অহংকার হলো সত্য প্রত্যাখ্যান করা আর মানুষকে তুচ্ছ করা।”',
        },
        note: {
          en: 'The definition is worth memorising because it is testable. Did you refuse a correction because of who it came from? Did you rank someone below you? Those are the two questions.',
          bn: 'সংজ্ঞাটি মুখস্থ করার মতো, কারণ তা যাচাইযোগ্য। কার কাছ থেকে এসেছে সেই কারণে কি কোনো সংশোধন প্রত্যাখ্যান করেছেন? কাউকে কি নিজের চেয়ে নিচে ধরেছেন? প্রশ্ন এই দুটিই।',
        },
      },
    ],
    practice: [
      {
        en: 'Accept a correction today from someone you consider less knowledgeable, and say so out loud. That is half the definition of kibr, dismantled in one sentence.',
        bn: 'আজ আপনার চেয়ে কম জ্ঞানী মনে করেন এমন কারও সংশোধন গ্রহণ করুন, আর তা মুখে স্বীকার করুন। কিবরের অর্ধেক সংজ্ঞা এক বাক্যেই ভেঙে গেল।',
      },
      {
        en: 'Notice who you interrupt and who you never interrupt. The pattern is usually a ranking, and 31:18 names the gesture directly.',
        bn: 'লক্ষ করুন আপনি কার কথা থামিয়ে দেন আর কারটি কখনোই নয়। ধরনটি সাধারণত একটি ক্রমতালিকা, আর ৩১:১৮ ভঙ্গিটির নাম সরাসরিই বলে দেয়।',
      },
      {
        en: 'Do a task publicly that you consider beneath you — carry, clean, serve. Muslim 2588 attaches raising to exactly that act.',
        bn: 'প্রকাশ্যে এমন একটি কাজ করুন যা আপনি নিজের মর্যাদার নিচে মনে করেন — বহন করুন, পরিষ্কার করুন, পরিবেশন করুন। মুসলিম ২৫৮৮ ঠিক এই কাজটির সাথেই উঁচু করার প্রতিশ্রুতি যুক্ত করে।',
      },
    ],
  },

  {
    id: 'the-tongue',
    wing: 'character',
    emoji: '\u{1F92D}',
    title: { en: 'The Tongue', bn: 'মুখের কথা' },
    tagline: {
      en: 'Two verses in Surah al-Hujurat outlaw six ordinary social habits by name.',
      bn: 'সূরা হুজুরাতের দুটি আয়াত নাম ধরে ধরে ছয়টা চেনা অভ্যাস হারাম করে দিয়েছে।',
    },
    dua: {
      ref: '20:25-28',
      why: {
        en: "Musa (AS) asks for an expanded chest, then an easy task, and only then an untied tongue. The speech is fixed last, after the heart.",
        bn: "মুসা (আ) চান প্রশস্ত বুক, তারপর সহজ কাজ, আর তবেই জিহ্বার জড়তা খুলে যাওয়া। কথা ঠিক হয় সবার শেষে, অন্তরের পরে।",
      },
    },
    intro: [
      {
        en: 'Most of the character faults a person will actually commit today are verbal. Surah al-Hujurat takes them one at a time and names them: ridicule, insult, offensive nicknames, excessive suspicion, spying, and backbiting. It is a short passage and it covers nearly the entire content of an ordinary group conversation.',
        bn: 'আজ একজন মানুষ বাস্তবে যেসব চারিত্রিক ত্রুটি করবে তার বেশিরভাগই মুখের। সূরা আল-হুজুরাত সেগুলো একটি একটি করে নাম ধরে বলে: উপহাস, গালি, আপত্তিকর ডাকনাম, অতিরিক্ত সন্দেহ, গোয়েন্দাগিরি, আর গিবত। ছোট একটি অনুচ্ছেদ, আর তা সাধারণ এক আড্ডার প্রায় পুরো বিষয়বস্তুকেই ঢেকে ফেলে।',
      },
      {
        en: 'The image the Qur’an chooses for backbiting is deliberately revolting — eating the flesh of your dead brother — and the verse then asks whether you would like that, knowing you would not. It is one of the few places the Book argues by disgust, which is a measure of how normal the sin is.',
        bn: 'গিবতের জন্য কুরআন যে চিত্রটি বেছে নেয় তা ইচ্ছাকৃতভাবেই ঘৃণ্য — নিজের মৃত ভাইয়ের গোশত খাওয়া — তারপর আয়াতটি জিজ্ঞেস করে আপনি কি তা পছন্দ করবেন, জেনেই যে করবেন না। কিতাবের যে অল্প কয়েক জায়গায় ঘৃণা দিয়ে যুক্তি দেওয়া হয় এটি তার একটি, আর তা থেকেই বোঝা যায় গুনাহটি কতটা স্বাভাবিক হয়ে গেছে।',
      },
    ],
    verses: [
      {
        ref: '49:11',
        note: {
          en: 'Each prohibition is given a reason: do not ridicule, for perhaps they are better than you. The verse does not appeal to politeness — it appeals to the possibility that your ranking is simply wrong.',
          bn: 'প্রতিটি নিষেধের সাথে একটি কারণ: উপহাস কোরো না, কারণ হয়তো তারা তোমাদের চেয়ে ভালো। আয়াতটি ভদ্রতার দোহাই দেয় না — দোহাই দেয় এই সম্ভাবনার যে আপনার হিসাবটাই ভুল।',
        },
      },
      {
        ref: '49:12',
        note: {
          en: 'Three commands escalating inward: avoid much suspicion, do not spy, do not backbite. Suspicion is the seed, spying is what it makes you do, and backbiting is what you do with what you find. Cut the first and the other two do not arise.',
          bn: 'ভেতরের দিকে ধাপে ধাপে তিনটি নির্দেশ: অধিক সন্দেহ এড়িয়ে চলো, গোয়েন্দাগিরি কোরো না, গিবত কোরো না। সন্দেহ বীজ, গোয়েন্দাগিরি তা আপনাকে দিয়ে যা করায়, আর গিবত হলো যা পান তা দিয়ে যা করেন। প্রথমটি কাটলে বাকি দুটি জন্মায়ই না।',
        },
      },
      {
        ref: '4:148',
        note: {
          en: 'A precise permission inside a prohibition: Allah does not like evil being spoken openly, except by one who has been wronged. The exception exists — a person reporting a genuine injustice is not backbiting — and it is narrow.',
          bn: 'নিষেধের ভেতরেই একটি নির্দিষ্ট অনুমতি: আল্লাহ মন্দ কথা প্রকাশ্যে বলা পছন্দ করেন না, তবে যার প্রতি অন্যায় হয়েছে তার কথা আলাদা। ব্যতিক্রমটি আছে — সত্যিকারের অন্যায়ের বিবরণ দেওয়া গিবত নয় — আর তা সংকীর্ণ।',
        },
      },
      {
        ref: '17:53',
        note: {
          en: 'Tell My servants to say that which is best — and then the reason: Satan induces dissension among them. Careless speech is not framed as a personal flaw but as an opening someone else walks through.',
          bn: 'আমার বান্দাদের বলো তারা যেন যা উত্তম তাই বলে — তারপর কারণ: শয়তান তাদের মধ্যে বিভেদ সৃষ্টি করে। অসাবধান কথাকে ব্যক্তিগত ত্রুটি নয়, বরং এমন এক ফাঁক হিসেবে দেখানো হয়েছে যা দিয়ে অন্য কেউ ঢুকে পড়ে।',
        },
      },
      {
        ref: '4:114',
        note: {
          en: 'The positive counterpart: no good in most private talk, except enjoining charity, or what is right, or reconciliation between people. Three permitted uses, and the third is the one that repairs what the tongue has broken.',
          bn: 'ইতিবাচক পাল্টা দিকটি: গোপন আলাপের বেশিরভাগেই কোনো কল্যাণ নেই, তবে দান, সৎকাজ, বা মানুষের মধ্যে মীমাংসার আদেশ ছাড়া। তিনটি অনুমোদিত ব্যবহার, আর তৃতীয়টিই জিহ্বা যা ভেঙেছে তা মেরামত করে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6018, Sahih Muslim 47',
        text: {
          en: 'The Prophet ﷺ said: “Whoever believes in Allah and the Last Day, let him speak good or remain silent. Whoever believes in Allah and the Last Day, let him honour his neighbour. Whoever believes in Allah and the Last Day, let him honour his guest.”',
          bn: 'নবী ﷺ বলেছেন: “যে আল্লাহ ও শেষ দিনে বিশ্বাস করে, সে যেন ভালো কথা বলে অথবা চুপ থাকে। যে আল্লাহ ও শেষ দিনে বিশ্বাস করে, সে যেন প্রতিবেশীর সম্মান করে। যে আল্লাহ ও শেষ দিনে বিশ্বাস করে, সে যেন মেহমানের সম্মান করে।”',
        },
        note: {
          en: 'Three clauses, each opening with belief. The first offers only two options and neither of them is “say it anyway” — silence is presented as the equal of good speech, not as a failure to contribute.',
          bn: 'তিনটি বাক্যাংশ, প্রতিটিরই শুরু ঈমান দিয়ে। প্রথমটি মাত্র দুটি বিকল্প দেয়, আর কোনোটিই “তবু বলে ফেলো” নয় — নীরবতাকে দেখানো হয়েছে ভালো কথার সমকক্ষ হিসেবে, অবদান রাখতে ব্যর্থতা হিসেবে নয়।',
        },
      },
      {
        src: 'Sahih Muslim 2589',
        text: {
          en: 'The Prophet ﷺ asked: “Do you know what backbiting is?” They said: “Allah and His Messenger know best.” He said: “Your mentioning of your brother in a way he would dislike.” It was said: “What if what I say about him is true?” He said: “If what you say about him is true, you have backbitten him; and if it is not true, you have slandered him.”',
          bn: 'নবী ﷺ জিজ্ঞেস করলেন: “তোমরা জানো গিবত কী?” তাঁরা বললেন: “আল্লাহ ও তাঁর রাসূলই ভালো জানেন।” তিনি বললেন: “তোমার ভাইয়ের এমন আলোচনা করা যা সে অপছন্দ করবে।” বলা হলো: “আমি যা বলি তা যদি তার মধ্যে সত্যিই থাকে?” তিনি বললেন: “তুমি যা বলছ তা যদি তার মধ্যে থাকে, তবে তুমি গিবত করলে; আর না থাকলে তুমি অপবাদ দিলে।”',
        },
        note: {
          en: 'This closes the loophole almost everybody uses. Truth is what makes it backbiting; it is not the defence against it.',
          bn: 'প্রায় সবাই যে ফাঁকটি ব্যবহার করে, এটি তা বন্ধ করে দেয়। সত্য হওয়াই একে গিবত বানায়; সত্য এর বিরুদ্ধে যুক্তি নয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Leave one group chat, or mute it, if most of what passes through it is 49:12. You are not obliged to be present for it.',
        bn: 'একটি গ্রুপ চ্যাট ছেড়ে দিন বা নীরব করুন, যদি সেখানে বেশিরভাগই ৪৯:১২-এর বিষয় হয়। সেখানে উপস্থিত থাকা আপনার কর্তব্য নয়।',
      },
      {
        en: 'Interrupt backbiting once by changing the subject rather than by delivering a lecture. Defending an absent person is the repair the hadith of the three clauses points toward.',
        bn: 'একবার গিবত থামান বক্তৃতা দিয়ে নয়, প্রসঙ্গ বদলে দিয়ে। অনুপস্থিত কারও পক্ষ নেওয়াই সেই মেরামত, যেদিকে তিন বাক্যাংশের হাদিসটি ইঙ্গিত করে।',
      },
      {
        en: 'Apply the two options literally for one day: good speech or silence, with nothing in between. Most people find out how much of their talking was in between.',
        bn: 'একদিন দুটি বিকল্প আক্ষরিকভাবে মানুন: ভালো কথা অথবা নীরবতা, মাঝামাঝি কিছু নয়। বেশিরভাগ মানুষই টের পান তাঁদের কথার কতটা ওই মাঝামাঝিতে ছিল।',
      },
    ],
  },

  {
    id: 'trust',
    wing: 'character',
    emoji: '\u{1F511}',
    title: { en: 'Trustworthiness', bn: 'আমানতদারি' },
    tagline: {
      en: 'Amānah is anything placed in your hands that is not yours — which is more than you think.',
      bn: 'আপনার হাতে আছে অথচ আপনার নয়, এমন সবই আমানত। জিনিসটা আপনি যত ভাবছেন তার চেয়ে অনেক বড়।',
    },
    dua: {
      ref: '18:10',
      why: {
        en: "The youths of the cave ask for mercy and for their affair to be set right. When you are holding something that is not yours, that is the entire request.",
        bn: "গুহার তরুণেরা চান রহমত আর তাঁদের বিষয়টি সঠিকভাবে গুছিয়ে দেওয়া। যখন আপনার হাতে এমন কিছু আছে যা আপনার নয়, আবেদন এটুকুই।",
      },
    },
    intro: [
      {
        en: 'Amānah shares a root with īmān. A believer is mu’min and a trustee is amīn, and the overlap is not a coincidence: to have faith is to be entrusted. The word covers deposits, secrets, positions of authority, other people’s reputations, your own body, and the religion itself. The category is wide enough that nearly every relationship you have contains one.',
        bn: 'আমানত ও ঈমান একই ধাতুমূলের। বিশ্বাসী হলো মুমিন আর আমানতদার হলো আমিন, আর এই মিলটি কাকতালীয় নয়: ঈমান রাখা মানেই আমানত পাওয়া। শব্দটি ধারণ করে গচ্ছিত সম্পদ, গোপন কথা, দায়িত্বের পদ, অন্যের সুনাম, নিজের শরীর, এমনকি দ্বীনকেও। শ্রেণিটি এত প্রশস্ত যে আপনার প্রায় প্রতিটি সম্পর্কেই একটি আমানত আছে।',
      },
      {
        en: 'It is also the thing the Prophet ﷺ named as the first to disappear when a society begins to fail — and he tied its loss not to crime but to competence, to matters being handed to people unfit to hold them. Trustworthiness in Islam is therefore not only about not stealing. It is about not accepting what you cannot carry.',
        bn: 'আর এটিই সেই জিনিস, যাকে নবী ﷺ বলেছেন সমাজের অবক্ষয় শুরু হলে সবার আগে যা হারিয়ে যায় — আর এর হারানোকে তিনি যুক্ত করেছেন অপরাধের সাথে নয়, যোগ্যতার সাথে, অর্থাৎ অযোগ্য মানুষের হাতে দায়িত্ব তুলে দেওয়ার সাথে। তাই ইসলামে আমানতদারি কেবল চুরি না করা নয়। যা বইতে পারবেন না তা গ্রহণ না করাও।',
      },
    ],
    verses: [
      {
        ref: '4:58',
        note: {
          en: 'Two commands joined: render trusts to those they belong to, and judge with justice. The first is private, the second public, and the verse treats them as one instruction — how you handle a deposit and how you hold an office are the same faculty.',
          bn: 'দুটি নির্দেশ একসাথে: আমানত তার হকদারকে ফিরিয়ে দাও, আর বিচার করো ন্যায়ের সাথে। প্রথমটি ব্যক্তিগত, দ্বিতীয়টি প্রকাশ্য, আর আয়াতটি দুটিকে একই নির্দেশ হিসেবে দেখে — গচ্ছিত জিনিস আপনি কীভাবে সামলান আর দায়িত্ব কীভাবে পালন করেন, দুটোই একই সামর্থ্য।',
        },
      },
      {
        ref: '23:8',
        note: {
          en: 'Trusts and promises appear together in the portrait of the successful believer, and neither is qualified by size. A promise to a child counts on the same list as a contract.',
          bn: 'সফল মুমিনের প্রতিকৃতিতে আমানত ও প্রতিশ্রুতি একসাথে আসে, আর কোনোটিকেই আকার দিয়ে শর্তযুক্ত করা হয়নি। শিশুকে দেওয়া প্রতিশ্রুতিও একই তালিকায় গোনা হয় যেভাবে একটি চুক্তি গোনা হয়।',
        },
      },
      {
        ref: '2:283',
        note: {
          en: 'A verse about lending without documentation. If someone trusts you enough to skip the paperwork, the verse says let him discharge his trust and fear Allah — the absence of a record is precisely what raises the obligation rather than lowering it.',
          bn: 'দলিল ছাড়া ঋণ নিয়ে একটি আয়াত। কেউ যদি আপনাকে এতটা বিশ্বাস করে যে কাগজপত্র বাদ দেয়, আয়াত বলে সে যেন তার আমানত আদায় করে ও আল্লাহকে ভয় করে — লিখিত প্রমাণ না থাকাই দায়িত্ব কমায় না, বাড়ায়।',
        },
      },
      {
        ref: '8:27',
        note: {
          en: 'Betraying your trusts is listed alongside betraying Allah and the Messenger, and the verse closes with wa antum ta‘lamūn — while you know. What makes it a betrayal is the awareness, which is why nobody commits this one by accident.',
          bn: 'আমানতের খিয়ানতকে রাখা হয়েছে আল্লাহ ও রাসূলের সাথে খিয়ানতের পাশে, আর আয়াত শেষ হয় ওয়া আনতুম তালামূন দিয়ে — অথচ তোমরা জানো। জেনে-বুঝে করাটাই একে খিয়ানত বানায়, সেজন্যই এই কাজটি কেউ ভুল করে করে না।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 59',
        text: {
          en: 'The Prophet ﷺ said: “When trust is lost, then await the Hour.” It was asked: “How is it lost, O Messenger of Allah?” He said: “When the matter is entrusted to those unfit for it, then await the Hour.”',
          bn: 'নবী ﷺ বলেছেন: “আমানত নষ্ট হলে কিয়ামতের অপেক্ষা করো।” জিজ্ঞেস করা হলো: “হে আল্লাহর রাসূল, তা কীভাবে নষ্ট হয়?” তিনি বললেন: “যখন দায়িত্ব অযোগ্যদের হাতে দেওয়া হয়, তখন কিয়ামতের অপেক্ষা করো।”',
        },
        note: {
          en: 'The question is asked and answered narrowly. Losing trust is not defined as people becoming dishonest; it is defined as responsibility landing in the wrong hands — including your own hands, when you take something you are not equipped for.',
          bn: 'প্রশ্ন করা হলো, আর উত্তর এল সংকীর্ণভাবে। আমানত নষ্ট হওয়ার সংজ্ঞা মানুষের অসৎ হয়ে যাওয়া নয়; সংজ্ঞা হলো দায়িত্ব ভুল হাতে পড়া — আপনার নিজের হাতও এর মধ্যে, যখন আপনি এমন কিছু নেন যার জন্য আপনি প্রস্তুত নন।',
        },
      },
      {
        src: 'Musnad Ahmad (hasan)',
        text: {
          en: 'The Prophet ﷺ said: “There is no faith for one who has no trustworthiness, and no religion for one who does not keep his covenant.”',
          bn: 'নবী ﷺ বলেছেন: “যার আমানতদারি নেই তার ঈমান নেই, আর যে অঙ্গীকার রক্ষা করে না তার দ্বীন নেই।”',
        },
        note: {
          en: 'Stated as an absence rather than a deficiency. Read alongside 23:8, it explains why the Qur’an keeps putting promises inside lists of worship rather than in a separate section on ethics.',
          bn: 'ঘাটতি নয়, অনুপস্থিতি হিসেবে বলা। ২৩:৮-এর পাশে রেখে পড়লে বোঝা যায় কুরআন কেন প্রতিশ্রুতিকে বারবার ইবাদতের তালিকার ভেতরেই রাখে, নৈতিকতার আলাদা অধ্যায়ে নয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Return the thing you have been holding — the borrowed item, the unpaid amount, the file that is not yours. 4:58 uses a verb of handing over, not of intending to.',
        bn: 'যা ধরে রেখেছেন তা ফিরিয়ে দিন — ধার নেওয়া জিনিস, বাকি টাকা, যে নথি আপনার নয়। ৪:৫৮ ফিরিয়ে দেওয়ার ক্রিয়াপদ ব্যবহার করে, দেওয়ার ইচ্ছা করার নয়।',
      },
      {
        en: 'Decline one responsibility you know you cannot do properly. Bukhari 59 treats accepting it as the failure, not refusing it.',
        bn: 'এমন একটি দায়িত্ব প্রত্যাখ্যান করুন যা আপনি জানেন ঠিকভাবে পারবেন না। বুখারি ৫৯ গ্রহণ করাকেই ব্যর্থতা বলে, প্রত্যাখ্যানকে নয়।',
      },
      {
        en: 'Keep the small promise you made casually this week. That is the one 23:8 is actually about.',
        bn: 'এই সপ্তাহে সহজেই দিয়ে ফেলা ছোট প্রতিশ্রুতিটি রক্ষা করুন। ২৩:৮ আসলে সেটির কথাই বলছে।',
      },
    ],
  },

  {
    id: 'patience-gratitude',
    wing: 'character',
    emoji: '\u{1F33E}',
    title: { en: 'Patience and Gratitude', bn: 'ধৈর্য ও কৃতজ্ঞতা' },
    tagline: {
      en: 'Between them they cover every situation a person can be in. There is no third state.',
      bn: 'এই দুটোতেই মানুষের সব অবস্থা ধরা পড়ে যায়। তিন নম্বর কোনো অবস্থা নেই।',
    },
    dua: {
      ref: '7:126',
      why: {
        en: "Afrigh — pour patience upon us, the way water is poured over a vessel. Patience is asked for as something received, not manufactured.",
        bn: "আফরিগ — আমাদের উপর ধৈর্য ঢেলে দিন, যেভাবে পাত্রে পানি ঢালা হয়। ধৈর্য চাওয়া হচ্ছে প্রাপ্ত কিছু হিসেবে, নিজে বানানো কিছু হিসেবে নয়।",
      },
    },
    intro: [
      {
        en: 'The Prophet ﷺ described the believer’s affair as entirely good, and then explained why: if something pleasing comes he is grateful and that is good for him, and if something harmful comes he is patient and that is good for him. Two responses, two outcomes, and no situation left over. It is one of the most practically useful sentences in the Sunnah.',
        bn: 'নবী ﷺ মুমিনের বিষয়টিকে পুরোপুরি কল্যাণকর বলে বর্ণনা করেছেন, তারপর ব্যাখ্যা করেছেন কেন: আনন্দের কিছু এলে সে কৃতজ্ঞ হয় আর তা তার জন্য কল্যাণ, আর কষ্টের কিছু এলে সে ধৈর্য ধরে আর তা তার জন্য কল্যাণ। দুটি প্রতিক্রিয়া, দুটি ফল, আর কোনো অবস্থাই বাকি থাকে না। সুন্নাহর সবচেয়ে বাস্তব কাজে লাগা বাক্যগুলোর একটি।',
      },
      {
        en: 'Ṣabr in Arabic is not passivity — it is restraint under pressure, the same word used for binding something so it holds. And shukr in the Qur’an is answered with a promise that is unusually direct: if you are grateful, I will surely increase you. Gratitude is described as a mechanism of increase, not as a courtesy.',
        bn: 'আরবিতে সবর মানে নিষ্ক্রিয়তা নয় — চাপের মুখে সংযম, একই শব্দ যা কিছু বেঁধে রাখা বোঝাতে ব্যবহৃত হয়। আর কুরআনে শুকরের উত্তরে আসে অস্বাভাবিক সরাসরি এক প্রতিশ্রুতি: তোমরা কৃতজ্ঞ হলে আমি অবশ্যই তোমাদের বাড়িয়ে দেব। কৃতজ্ঞতাকে বলা হয়েছে বৃদ্ধির একটি প্রক্রিয়া, নিছক সৌজন্য নয়।',
      },
    ],
    verses: [
      {
        ref: '2:153',
        note: {
          en: 'Two resources named for the same crisis: patience and prayer. And the closing clause is not that Allah rewards the patient but that He is with them — presence offered rather than compensation.',
          bn: 'একই সংকটে দুটি অবলম্বনের নাম: ধৈর্য ও নামাজ। আর শেষ অংশটি এই নয় যে আল্লাহ ধৈর্যশীলদের প্রতিদান দেন, বরং তিনি তাদের সাথে আছেন — ক্ষতিপূরণ নয়, সঙ্গের প্রতিশ্রুতি।',
        },
      },
      {
        ref: '14:7',
        note: {
          en: 'The promise for gratitude is emphatic — la-azīdannakum, I will most certainly increase you — while the other half is left open: if you deny, My punishment is severe. What the increase consists of is not specified, which lets it be whatever you actually need.',
          bn: 'কৃতজ্ঞতার প্রতিশ্রুতিটি জোরালো — লা-আজীদান্নাকুম, আমি অবশ্যই তোমাদের বাড়িয়ে দেব — আর অন্য অর্ধেকটি খোলা রাখা: অকৃতজ্ঞ হলে আমার শাস্তি কঠিন। বৃদ্ধিটি কীসের, তা নির্দিষ্ট করা হয়নি, ফলে আপনার যা সত্যিই দরকার তা-ই হতে পারে।',
        },
      },
      {
        ref: '39:10',
        note: {
          en: 'The reward for the patient is bi ghayri ḥisāb — without measure, uncalculated. Every other reward in the Qur’an is a multiple of something. This one is taken off the ledger entirely.',
          bn: 'ধৈর্যশীলদের প্রতিদান বি-গাইরি হিসাব — হিসাব ছাড়া, অগণিত। কুরআনের অন্য সব প্রতিদানই কোনো কিছুর গুণিতক। এটিকে খাতা থেকেই সরিয়ে নেওয়া হয়েছে।',
        },
      },
      {
        ref: '103:1-3',
        note: {
          en: 'Three verses that ash-Shafi‘i said would have sufficed the ummah had nothing else been revealed. Everyone is in loss except four things — belief, righteous deeds, urging one another to truth, urging one another to patience. The last two are social: patience is something you hold others in, not only yourself.',
          bn: 'তিনটি আয়াত, যেগুলো সম্পর্কে ইমাম শাফিয়ি বলেছিলেন, আর কিছু নাজিল না হলেও উম্মতের জন্য এগুলোই যথেষ্ট হতো। সবাই ক্ষতির মধ্যে, চারটি জিনিস ছাড়া — ঈমান, সৎকাজ, পরস্পরকে সত্যের উপদেশ, পরস্পরকে ধৈর্যের উপদেশ। শেষ দুটি সামাজিক: ধৈর্য এমন কিছু যাতে আপনি অন্যকেও ধরে রাখেন, কেবল নিজেকে নয়।',
        },
      },
      {
        ref: '13:22',
        note: {
          en: 'Patience here is given a motive — seeking the face of their Lord — which separates it from mere endurance. Two people can suffer the same thing identically and only one of them is doing ṣabr.',
          bn: 'এখানে ধৈর্যের একটি উদ্দেশ্য দেওয়া হয়েছে — তাদের রবের সন্তুষ্টি চাওয়া — যা একে নিছক সহ্য করা থেকে আলাদা করে। দুজন মানুষ একই কষ্ট একইভাবে ভোগ করতে পারে, অথচ তাদের একজনই সবর করছে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2999',
        text: {
          en: 'The Prophet ﷺ said: “Amazing is the affair of the believer — all of it is good, and that is for no one but the believer. If something pleasing happens to him he is grateful, and that is good for him; and if something harmful happens to him he is patient, and that is good for him.”',
          bn: 'নবী ﷺ বলেছেন: “মুমিনের ব্যাপারটি বিস্ময়কর — তার সবকিছুই কল্যাণ, আর এটি মুমিন ছাড়া আর কারও জন্য নয়। তার আনন্দের কিছু ঘটলে সে কৃতজ্ঞ হয়, আর তা তার জন্য কল্যাণ; আর কষ্টের কিছু ঘটলে সে ধৈর্য ধরে, আর তা তার জন্য কল্যাণ।”',
        },
        note: {
          en: 'The exclusivity clause is the striking part: this is for no one but the believer. The events are the same for everyone; what differs is that only one person has both responses available.',
          bn: 'বিশেষ অংশটি হলো সীমাবদ্ধতার বাক্যাংশ: এটি মুমিন ছাড়া আর কারও জন্য নয়। ঘটনা সবার জন্য একই; পার্থক্য এটাই যে একজনের হাতেই দুটি প্রতিক্রিয়াই আছে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 1283',
        text: {
          en: 'The Prophet ﷺ passed a woman weeping at a grave and said: “Fear Allah and be patient.” She said, not recognising him: “Leave me alone — you have not been afflicted with what I have.” When she was told who he was, she came to his door and found no guards, and said: “I did not recognise you.” He said: “Patience is only at the first strike.”',
          bn: 'নবী ﷺ কবরের পাশে কাঁদতে থাকা এক নারীর পাশ দিয়ে গিয়ে বললেন: “আল্লাহকে ভয় করো এবং ধৈর্য ধরো।” তিনি তাঁকে না চিনে বললেন: “আমাকে ছেড়ে দিন — আমার যে বিপদ হয়েছে তা আপনার হয়নি।” পরে তাঁকে বলা হলো তিনি কে, তখন তিনি নবী ﷺ-এর দরজায় এসে দেখলেন কোনো প্রহরী নেই, আর বললেন: “আমি আপনাকে চিনতে পারিনি।” তিনি বললেন: “ধৈর্য তো প্রথম আঘাতেই।”',
        },
        note: {
          en: 'He does not rebuke her for the earlier remark. And the ruling he gives is precise: the patience that counts is the one in the first moment, before the mind has had time to arrange itself.',
          bn: 'তিনি আগের কথার জন্য তাঁকে ভর্ৎসনা করেননি। আর যে কথাটি বলেন তা নিখুঁত: যে ধৈর্য গণ্য হয় তা প্রথম মুহূর্তেরটি, মন নিজেকে গুছিয়ে নেওয়ার সময় পাওয়ার আগেই।',
        },
      },
    ],
    practice: [
      {
        en: 'Name three specific blessings tonight, not general ones. 14:7 attaches increase to gratitude, and vague gratitude tends not to move anything.',
        bn: 'আজ রাতে তিনটি নির্দিষ্ট নিয়ামতের নাম বলুন, সাধারণভাবে নয়। ১৪:৭ কৃতজ্ঞতার সাথে বৃদ্ধি যুক্ত করে, আর অস্পষ্ট কৃতজ্ঞতা সাধারণত কিছুই নাড়ায় না।',
      },
      {
        en: 'In the first minute of the next bad news, say inna lillāhi wa inna ilayhi rāji‘ūn before saying anything else. That first minute is what the hadith is about.',
        bn: 'পরের দুঃসংবাদের প্রথম মিনিটেই আর কিছু বলার আগে বলুন ইন্না লিল্লাহি ওয়া ইন্না ইলাইহি রাজিউন। হাদিসটি ওই প্রথম মিনিটটিরই কথা বলছে।',
      },
      {
        en: 'Hold somebody else in patience this week, as 103:3 asks — sit with a person who is struggling instead of solving it for them.',
        bn: '১০৩:৩ যেমন বলে, এই সপ্তাহে অন্য কাউকে ধৈর্যে ধরে রাখুন — সংগ্রামরত কারও সমস্যা সমাধান করে না দিয়ে তার পাশে বসুন।',
      },
    ],
  },

  {
    id: 'kindness-home',
    wing: 'character',
    emoji: '\u{1F3E0}',
    title: { en: 'Parents, Family, Neighbours', bn: 'পিতামাতা, পরিবার, প্রতিবেশী' },
    tagline: {
      en: 'The Qur’an ranks the people around you by proximity, and puts the ones closest to you first.',
      bn: 'কুরআন চারপাশের মানুষকে সাজায় কাছের-দূরের হিসেবে, আর সবচেয়ে কাছের জনদেরই আগে রাখে।',
    },
    dua: {
      ref: '17:24',
      why: {
        en: "The Qur’an supplies the exact sentence to say for your parents, and puts the reason inside it: as they raised me when I was small.",
        bn: "কুরআন পিতামাতার জন্য বলার বাক্যটি হুবহু জুগিয়ে দেয়, আর কারণটিও তার ভেতরেই রাখে: তাঁরা যেমন আমাকে ছোটবেলায় লালন করেছেন।",
      },
    },
    intro: [
      {
        en: 'Good character is easiest to perform in public and hardest to sustain at home, which is exactly why the texts keep pushing it inward. The Qur’an pairs worshipping Allah alone with treating parents well in the same breath, more than once, as though the two were parts of one command. And the Sunnah measures a man by his wife and a believer by his neighbour.',
        bn: 'সুন্দর চরিত্র প্রকাশ্যে দেখানো সবচেয়ে সহজ আর ঘরে টিকিয়ে রাখা সবচেয়ে কঠিন, আর ঠিক সে কারণেই পাঠগুলো একে বারবার ভেতরের দিকে ঠেলে দেয়। কুরআন একাধিকবার এক নিঃশ্বাসেই কেবল আল্লাহর ইবাদত ও পিতামাতার সাথে সদাচরণকে জোড়া বাঁধে, যেন দুটি একই নির্দেশের অংশ। আর সুন্নাহ একজন পুরুষকে মাপে তার স্ত্রী দিয়ে, আর মুমিনকে তার প্রতিবেশী দিয়ে।',
      },
      {
        en: 'What is asked for is unusually specific. Not “respect your parents” but do not say uff to them — the smallest sound of irritation in the language. The bar is set at a syllable, which tells you the standard is not about grand gestures at all.',
        bn: 'যা চাওয়া হয়েছে তা অস্বাভাবিক সুনির্দিষ্ট। “পিতামাতাকে সম্মান করো” নয়, বরং তাঁদের উফ বোলো না — ভাষার সবচেয়ে ছোট বিরক্তিসূচক শব্দ। মানদণ্ডটি রাখা হয়েছে একটি ধ্বনিতে, আর তা থেকেই বোঝা যায় এই মান বিশাল কোনো কাজ নিয়ে নয়।',
      },
    ],
    verses: [
      {
        ref: '17:23-24',
        note: {
          en: 'Watch the sequence: not uff, do not repel them, speak to them a noble word, lower the wing of humility out of mercy — and then a du‘ā to say for them. It moves from what not to do, to tone, to posture, to prayer. And the du‘ā gives the reason: as they raised me when I was small.',
          bn: 'ক্রমটি লক্ষ করুন: উফ নয়, তাঁদের ধমক দিয়ো না, তাঁদের সাথে সম্মানজনক কথা বলো, দয়াবশত বিনয়ের ডানা নত করো — তারপর তাঁদের জন্য একটি দোয়া। এটি এগোয় কী করবেন না থেকে স্বরে, স্বর থেকে ভঙ্গিতে, ভঙ্গি থেকে দোয়ায়। আর দোয়াটি কারণও বলে দেয়: তাঁরা যেমন আমাকে ছোটবেলায় লালন করেছেন।',
        },
      },
      {
        ref: '4:36',
        note: {
          en: 'A widening circle in one verse: parents, relatives, orphans, the needy, the near neighbour, the distant neighbour, the companion at your side, the traveller, and those your right hands possess. Two categories of neighbour are named separately, which is the Qur’an refusing to let proximity be an excuse.',
          bn: 'এক আয়াতেই প্রসারিত বৃত্ত: পিতামাতা, আত্মীয়, এতিম, অভাবী, নিকট প্রতিবেশী, দূর প্রতিবেশী, পাশের সঙ্গী, পথিক, আর আপনার অধিকারভুক্তরা। প্রতিবেশীর দুটি শ্রেণির আলাদা উল্লেখ, অর্থাৎ কুরআন নৈকট্যকে অজুহাত হতে দিচ্ছে না।',
        },
      },
      {
        ref: '30:21',
        note: {
          en: 'Marriage described as a sign of Allah on the same level as the heavens and the earth, and the purpose given is sakīnah — stillness. Then two things placed between the pair: mawaddah and raḥmah, affection and mercy. Mercy is listed as a marital requirement, not a bonus.',
          bn: 'বিবাহকে বর্ণনা করা হয়েছে আল্লাহর নিদর্শন হিসেবে, আসমান-জমিনের সমান স্তরে, আর উদ্দেশ্য বলা হয়েছে সাকীনাহ — প্রশান্তি। তারপর দম্পতির মাঝে দুটি জিনিস রাখা: মাওয়াদ্দাহ ও রহমাহ, ভালোবাসা ও দয়া। দয়াকে তালিকাভুক্ত করা হয়েছে দাম্পত্যের শর্ত হিসেবে, বাড়তি কিছু হিসেবে নয়।',
        },
      },
      {
        ref: '66:6',
        note: {
          en: 'Protect yourselves and your families — in that order, and as one obligation. A person’s religious effort is not treated as complete while the household it is practised in has been left out of it.',
          bn: 'নিজেদের ও নিজেদের পরিবারকে রক্ষা করো — এই ক্রমেই, আর একটিই দায়িত্ব হিসেবে। যে ঘরে দ্বীন পালন করা হচ্ছে সেই ঘরকে বাদ রেখে কারও দ্বীনি প্রচেষ্টাকে সম্পূর্ণ ধরা হয় না।',
        },
      },
      {
        ref: '2:83',
        note: {
          en: 'The covenant taken from an earlier nation, and the same items recur: worship Allah alone, parents, relatives, orphans, the needy — and then speak to people good words. Kind speech is placed inside a covenant, alongside prayer and zakah.',
          bn: 'পূর্ববর্তী এক জাতির কাছ থেকে নেওয়া অঙ্গীকার, আর একই বিষয়গুলোই ফিরে আসে: কেবল আল্লাহর ইবাদত, পিতামাতা, আত্মীয়, এতিম, অভাবী — তারপর মানুষের সাথে সুন্দর কথা বলা। ভালো কথাকে রাখা হয়েছে একটি অঙ্গীকারের ভেতরে, নামাজ ও যাকাতের পাশে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6014, Sahih Muslim 2625',
        text: {
          en: 'The Prophet ﷺ said: “Jibril kept advising me about the neighbour until I thought he would make him an heir.”',
          bn: 'নবী ﷺ বলেছেন: “জিবরাইল আমাকে প্রতিবেশীর ব্যাপারে এত উপদেশ দিতে থাকলেন যে আমি ভাবলাম তিনি বুঝি তাকে উত্তরাধিকারী বানিয়ে দেবেন।”',
        },
        note: {
          en: 'Inheritance is the closest legal tie in Islam. The comparison is measuring the weight of the instruction, not proposing a ruling, and it is measured against family.',
          bn: 'ইসলামে উত্তরাধিকারই সবচেয়ে ঘনিষ্ঠ আইনি বন্ধন। তুলনাটি নির্দেশের ভার মাপছে, কোনো বিধান প্রস্তাব করছে না, আর মাপা হচ্ছে পরিবারের নিরিখেই।',
        },
      },
      {
        src: 'Sahih Muslim 2699',
        text: {
          en: 'The Prophet ﷺ said: “Whoever relieves a believer of a distress of this world, Allah will relieve him of a distress on the Day of Resurrection. Whoever eases the burden of one in difficulty, Allah will ease things for him in this world and the next. Whoever conceals a Muslim, Allah will conceal him in this world and the next. And Allah is in the aid of His servant as long as the servant is in the aid of his brother.”',
          bn: 'নবী ﷺ বলেছেন: “যে কোনো মুমিনের দুনিয়ার একটি কষ্ট দূর করে, আল্লাহ কিয়ামতের দিন তার একটি কষ্ট দূর করবেন। যে কোনো অসচ্ছল ব্যক্তির বোঝা হালকা করে, আল্লাহ দুনিয়া ও আখিরাতে তার জন্য সহজ করে দেবেন। যে কোনো মুসলিমকে ঢেকে রাখে, আল্লাহ দুনিয়া ও আখিরাতে তাকে ঢেকে রাখবেন। আর বান্দা যতক্ষণ তার ভাইয়ের সাহায্যে থাকে, আল্লাহ ততক্ষণ বান্দার সাহায্যে থাকেন।”',
        },
        note: {
          en: 'Four clauses, each one an exchange, and the last converts the whole thing into a standing arrangement rather than a series of transactions.',
          bn: 'চারটি বাক্যাংশ, প্রতিটিই একটি বিনিময়, আর শেষটি গোটা বিষয়টিকে কয়েকটি লেনদেন থেকে বদলে একটি স্থায়ী ব্যবস্থায় পরিণত করে।',
        },
      },
    ],
    practice: [
      {
        en: 'Go one full day without a single uff — the sigh, the tone, the eye-roll. 17:23 names the sound, so the standard is that specific.',
        bn: 'পুরো একটি দিন একটিও উফ ছাড়া কাটান — দীর্ঘশ্বাস, স্বরের ঝাঁজ, চোখ ঘোরানো। ১৭:২৩ শব্দটির নামই বলে দিয়েছে, তাই মানদণ্ডটি এতটাই সুনির্দিষ্ট।',
      },
      {
        en: 'Find out one thing your neighbour needs. The hadith of Jibril is about the person on the other side of your wall, not about neighbourliness in general.',
        bn: 'আপনার প্রতিবেশীর একটি প্রয়োজন জেনে নিন। জিবরাইলের হাদিসটি আপনার দেয়ালের ওপাশের মানুষটিকে নিয়ে, সাধারণভাবে প্রতিবেশীসুলভ আচরণ নিয়ে নয়।',
      },
      {
        en: 'Bring the good manners you use with strangers home tonight. Most people have two settings, and the wrong one is running where it matters most.',
        bn: 'অপরিচিতদের সাথে যে ভদ্রতা দেখান তা আজ রাতে ঘরে নিয়ে আসুন। বেশিরভাগ মানুষের দুটি ভঙ্গি থাকে, আর যেখানে সবচেয়ে বেশি দরকার সেখানেই চলে ভুলটি।',
      },
    ],
  },

  {
    id: 'justice',
    wing: 'character',
    emoji: '\u{2696}️',
    title: { en: 'Justice', bn: 'ন্যায়বিচার' },
    tagline: {
      en: 'Two verses require you to be just against yourself, and against people you have every reason to hate.',
      bn: 'দুটি আয়াত বলছে, ইনসাফ করতে হবে নিজের বিরুদ্ধে গেলেও, আর যাদের ওপর রাগ করার সব কারণ আছে তাদের বেলায়ও।',
    },
    dua: {
      ref: '3:194',
      why: {
        en: "Do not disgrace us on the Day of Resurrection. Justice done when nobody was watching is exactly what stands between a person and that.",
        bn: "কিয়ামতের দিন আমাদের অপমানিত করবেন না। কেউ দেখছে না এমন সময়ে করা ন্যায়ই মানুষ ও সেই অপমানের মাঝখানে দাঁড়িয়ে থাকে।",
      },
    },
    intro: [
      {
        en: '‘Adl in the Qur’an is not a courtroom word. It is asked of individuals, in ordinary situations, at the two moments it is hardest: when justice costs you personally, and when it benefits somebody you cannot stand. Surah an-Nisa handles the first and Surah al-Ma’idah the second, and both are addressed to believers rather than to judges.',
        bn: 'কুরআনে আদল কোনো আদালতের শব্দ নয়। এটি চাওয়া হয় ব্যক্তির কাছে, সাধারণ পরিস্থিতিতে, সবচেয়ে কঠিন দুটি মুহূর্তে: যখন ন্যায়ের মূল্য আপনাকেই দিতে হয়, আর যখন তার ফল পায় এমন কেউ যাকে আপনি সহ্যই করতে পারেন না। সূরা আন-নিসা প্রথমটি সামলায় আর সূরা আল-মায়িদা দ্বিতীয়টি, আর দুটিই বিচারকদের নয়, মুমিনদের সম্বোধন করে।',
      },
      {
        en: 'The Qur’an also blocks the obvious escape route. Not only must hatred of a people not make you unjust — you are told plainly that not fighting you and not expelling you is enough to earn birr and qisṭ, kindness and equity, from you regardless of their religion. Justice is not a benefit reserved for insiders.',
        bn: 'কুরআন স্পষ্ট পালানোর পথটিও বন্ধ করে দেয়। কোনো জাতির প্রতি ঘৃণা আপনাকে অন্যায়ে ঠেলতে পারবে না — শুধু তা-ই নয়, স্পষ্ট বলে দেওয়া হয়েছে যে তারা আপনার বিরুদ্ধে না লড়লে আর আপনাকে ঘরছাড়া না করলে, ধর্ম যা-ই হোক, আপনার কাছ থেকে বির ও কিস্‌ত — সদাচরণ ও ইনসাফ — পাওয়ার জন্য তা-ই যথেষ্ট। ন্যায়বিচার কেবল ভেতরের লোকদের জন্য রাখা সুবিধা নয়।',
      },
    ],
    verses: [
      {
        ref: '4:135',
        note: {
          en: 'Qawwāmīn bil-qisṭ — persistently standing up for justice, even against yourselves, or parents, or relatives. Then it removes the two usual biases at once: rich or poor, Allah is more worthy of both. Neither sympathy nor deference survives the verse.',
          bn: 'কাওয়ামীনা বিল-কিস্‌ত — ন্যায়ের উপর অবিচলভাবে দাঁড়ানো, নিজেদের, পিতামাতা বা আত্মীয়ের বিরুদ্ধে হলেও। তারপর একসাথেই দুটি চিরাচরিত পক্ষপাত সরিয়ে দেয়: ধনী হোক বা গরিব, আল্লাহ উভয়েরই বেশি হকদার। সহানুভূতি বা কারও প্রতি সমীহ — কোনোটিই আয়াতটির সামনে টেকে না।',
        },
      },
      {
        ref: '5:8',
        note: {
          en: 'The mirror verse, and the harder one: do not let hatred of a people push you into injustice. Then a striking clause — be just, that is nearer to taqwā. Fairness toward an enemy is described as the thing that brings you closer to Allah.',
          bn: 'পাল্টা আয়াত, আর কঠিনতরটি: কোনো জাতির প্রতি ঘৃণা যেন তোমাদের অন্যায়ে ঠেলে না দেয়। তারপর একটি চমকপ্রদ বাক্যাংশ — ন্যায় করো, তা তাকওয়ার নিকটতর। শত্রুর প্রতি ইনসাফকে বলা হয়েছে সেই জিনিস যা আপনাকে আল্লাহর কাছে নিয়ে যায়।',
        },
      },
      {
        ref: '16:90',
        note: {
          en: 'The verse traditionally recited at the close of every Friday khutbah. Three commanded — justice, iḥsān, giving to relatives — and three forbidden. Iḥsān sits above justice: doing more than is owed, once what is owed has been paid.',
          bn: 'প্রতি জুমার খুতবার শেষে ঐতিহ্যগতভাবে পাঠ করা আয়াত। তিনটির আদেশ — ন্যায়, ইহসান, আত্মীয়কে দেওয়া — আর তিনটির নিষেধ। ইহসান বসে আছে ন্যায়ের উপরে: পাওনা শোধ হয়ে যাওয়ার পর পাওনার চেয়ে বেশি করা।',
        },
      },
      {
        ref: '49:9',
        note: {
          en: 'A procedure for a fight between two believing parties: reconcile them; if one oppresses, act against the oppression; when it stops, reconcile with justice. The instruction never becomes “pick your side” — the goal stays reconciliation throughout.',
          bn: 'দুই মুমিন পক্ষের সংঘর্ষে করণীয়: তাদের মধ্যে মীমাংসা করো; কেউ বাড়াবাড়ি করলে বাড়াবাড়ির বিরুদ্ধে ব্যবস্থা নাও; থেমে গেলে ন্যায়ের সাথে মীমাংসা করো। নির্দেশটি কখনোই “পক্ষ বেছে নাও” হয়ে ওঠে না — লক্ষ্য গোড়া থেকে শেষ পর্যন্ত মীমাংসাই থাকে।',
        },
      },
      {
        ref: '60:8',
        note: {
          en: 'Revealed in a context of active conflict, and it draws the line by behaviour rather than by creed: those who do not fight you over religion and do not expel you from your homes are owed kindness and equity. Allah loves those who act justly, and the sentence is not qualified.',
          bn: 'সক্রিয় সংঘাতের প্রেক্ষাপটে নাজিল, আর সীমারেখা টানা হয়েছে আকিদা দিয়ে নয়, আচরণ দিয়ে: যারা ধর্মের কারণে তোমাদের বিরুদ্ধে লড়ে না আর তোমাদের ঘরছাড়া করে না, তাদের প্রাপ্য সদাচরণ ও ইনসাফ। আল্লাহ ন্যায়পরায়ণদের ভালোবাসেন, আর বাক্যটিতে কোনো শর্ত নেই।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 1827',
        text: {
          en: 'The Prophet ﷺ said: “The just will be with Allah upon pulpits of light — those who are just in their judgements, and with their families, and in what they are put in charge of.”',
          bn: 'নবী ﷺ বলেছেন: “ন্যায়পরায়ণরা আল্লাহর কাছে নূরের মিম্বারে থাকবে — যারা নিজেদের বিচারে, নিজেদের পরিবারে, আর যে দায়িত্ব তাদের দেওয়া হয় তাতে ন্যায় করে।”',
        },
        note: {
          en: 'Three arenas named and only one of them is official. Justice with your own family is placed in the same sentence as justice in judgement, which is where most people quietly exempt themselves.',
          bn: 'তিনটি ক্ষেত্রের নাম, আর তার মাত্র একটি সরকারি। নিজের পরিবারের সাথে ন্যায়কে রাখা হয়েছে বিচারে ন্যায়ের সাথে একই বাক্যে, আর ঠিক সেখানেই বেশিরভাগ মানুষ নীরবে নিজেকে ছাড় দিয়ে দেন।',
        },
      },
    ],
    practice: [
      {
        en: 'Concede one argument you know you are losing on the merits, even to someone you dislike. That is 5:8 in its smallest usable form.',
        bn: 'যুক্তিতে হেরে যাচ্ছেন জেনেও একটি তর্ক মেনে নিন, এমনকি অপছন্দের কারও কাছেও। এটিই ৫:৮-এর সবচেয়ে ছোট ব্যবহারযোগ্য রূপ।',
      },
      {
        en: 'Check whether you divide your time and money fairly between your children. Muslim 1827 puts family justice on the same pulpit as a judge’s.',
        bn: 'দেখুন সন্তানদের মধ্যে সময় ও অর্থ ন্যায্যভাবে ভাগ করছেন কি না। মুসলিম ১৮২৭ পারিবারিক ন্যায়কে বিচারকের মিম্বারেই বসায়।',
      },
      {
        en: 'Give a fair account of the person you are in conflict with when you describe them to a third party. 4:135 says even your own side does not get a discount.',
        bn: 'যার সাথে বিরোধ, তৃতীয় কারও কাছে তার বর্ণনা দিন ন্যায্যভাবে। ৪:১৩৫ বলে, নিজের পক্ষও কোনো ছাড় পায় না।',
      },
    ],
  },

  {
    id: 'modesty',
    wing: 'character',
    emoji: '\u{1F338}',
    title: { en: 'Modesty', bn: 'হায়া ও শালীনতা' },
    tagline: {
      en: 'Ḥayā’ is called a branch of faith — and the Prophet ﷺ said that if you lose it, nothing else restrains you.',
      bn: 'হায়া ঈমানেরই একটা শাখা। নবী ﷺ বলেছেন, ওটা চলে গেলে আর কিছুই আপনাকে আটকাবে না।',
    },
    dua: {
      ref: '23:97-98',
      why: {
        en: "Two refuges, and the second is the stranger and more useful one: not only from the promptings of the devils, but from their being present at all.",
        bn: "দুটি আশ্রয়, আর দ্বিতীয়টিই অদ্ভুততর ও বেশি কাজের: কেবল শয়তানের কুমন্ত্রণা থেকে নয়, তাদের উপস্থিতি থেকেই।",
      },
    },
    intro: [
      {
        en: 'Ḥayā’ is wider than the English word modesty. It is the inward reluctance to be seen doing what is beneath you — before Allah first, and then before people. The Sunnah lists it as a branch of faith, which places it inside belief rather than beside it, and describes it as producing nothing but good.',
        bn: 'হায়া ইংরেজি “মডেস্টি” শব্দের চেয়ে প্রশস্ত। এটি হলো নিজের মর্যাদার নিচে কিছু করতে দেখা যাওয়ার প্রতি অন্তরের অনীহা — প্রথমে আল্লাহর সামনে, তারপর মানুষের সামনে। সুন্নাহ একে ঈমানের শাখা হিসেবে গণ্য করে, ফলে একে রাখা হয় ঈমানের পাশে নয়, ভেতরে, আর বলা হয় এটি কল্যাণ ছাড়া কিছুই আনে না।',
      },
      {
        en: 'The Qur’an’s instructions on it are notably even-handed and notably ordered. Men are addressed first, and the first command to both is about the eyes rather than about clothing. Lowering the gaze comes before any question of dress, in both verses.',
        bn: 'এ বিষয়ে কুরআনের নির্দেশ লক্ষণীয়ভাবে ভারসাম্যপূর্ণ ও লক্ষণীয়ভাবে ক্রমিক। পুরুষদের সম্বোধন আগে, আর উভয়ের প্রতি প্রথম নির্দেশ পোশাক নিয়ে নয়, চোখ নিয়ে। দৃষ্টি নত করা আসে পোশাকের প্রশ্নের আগে, দুটি আয়াতেই।',
      },
    ],
    verses: [
      {
        ref: '24:30',
        note: {
          en: 'Addressed to believing men first, and the wording is min abṣārihim — from their gaze, a portion of it, not all sight. It is a discipline of the second look rather than a demand to walk with your eyes down. The reason given is that it is purer for them.',
          bn: 'প্রথমে মুমিন পুরুষদের সম্বোধন, আর শব্দ মিন আবসারিহিম — তাদের দৃষ্টির কিছু অংশ, সমস্ত দেখা নয়। এটি চোখ নামিয়ে হাঁটার দাবি নয়, বরং দ্বিতীয় দৃষ্টির সংযম। কারণ বলা হয়েছে, এটি তাদের জন্য অধিক পবিত্র।',
        },
      },
      {
        ref: '24:31',
        note: {
          en: 'The parallel instruction to believing women opens with exactly the same clause about the gaze before moving to dress, and then names a long list of relatives before whom the ruling does not apply. The detail matters: it is a defined boundary, not a general suspicion.',
          bn: 'মুমিন নারীদের প্রতি সমান্তরাল নির্দেশটিও শুরু হয় দৃষ্টি নিয়ে হুবহু একই বাক্যাংশ দিয়ে, তারপর পোশাকে যায়, আর এরপর এমন আত্মীয়দের দীর্ঘ তালিকা দেয় যাঁদের সামনে বিধানটি প্রযোজ্য নয়। বিস্তারিত বর্ণনাটি গুরুত্বপূর্ণ: এটি একটি নির্ধারিত সীমা, ঢালাও সন্দেহ নয়।',
        },
      },
      {
        ref: '23:5',
        note: {
          en: 'In the list of the successful, chastity is a matter of guarding — and the verses immediately after define where the guarding does not apply, so the passage is not a blanket suppression but a boundary with a lawful inside.',
          bn: 'সফলদের তালিকায় সতীত্ব হলো রক্ষা করার বিষয় — আর ঠিক পরের আয়াতগুলো বলে দেয় কোথায় রক্ষার প্রশ্ন নেই, ফলে অনুচ্ছেদটি ঢালাও দমন নয়, বরং বৈধ ভেতরসহ একটি সীমারেখা।',
        },
      },
      {
        ref: '33:35',
        note: {
          en: 'Chastity appears here too, paired for men and women alike — al-ḥāfiẓīna furūjahum wal-ḥāfiẓāt. In the Qur’an’s master list of qualities, it is one of ten, carried equally by both.',
          bn: 'সতীত্ব এখানেও আছে, পুরুষ ও নারী উভয়ের জন্য জোড়া বেঁধে — আল-হাফিজীনা ফুরূজাহুম ওয়াল-হাফিজাত। কুরআনের প্রধান গুণ-তালিকায় এটি দশটির একটি, আর দুই পক্ষই সমানভাবে তা বহন করে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 9, Sahih Muslim 35',
        text: {
          en: 'The Prophet ﷺ said: “Faith has sixty-odd branches. The highest of them is saying lā ilāha illā Allāh, and the lowest is removing something harmful from the road. And modesty is a branch of faith.”',
          bn: 'নবী ﷺ বলেছেন: “ঈমানের ষাটের অধিক শাখা আছে। তার সর্বোচ্চটি হলো লা ইলাহা ইল্লাল্লাহ বলা, আর সর্বনিম্নটি হলো রাস্তা থেকে কষ্টদায়ক জিনিস সরানো। আর লজ্জা ঈমানের একটি শাখা।”',
        },
        note: {
          en: 'The two poles are named and then ḥayā’ is added separately, without a rank. It is the only branch singled out by name, which is how the scholars read it as running through all of them.',
          bn: 'দুই প্রান্তের নাম বলার পর হায়াকে আলাদাভাবে যোগ করা হয়েছে, কোনো ক্রম ছাড়াই। এটিই একমাত্র শাখা যার নাম আলাদা করে বলা হয়েছে, আর সে কারণেই আলিমগণ একে সব শাখার ভেতর দিয়ে বয়ে চলা হিসেবে পড়েছেন।',
        },
      },
      {
        src: 'Sahih al-Bukhari 3483',
        text: {
          en: 'The Prophet ﷺ said: “Among the words people received from the earliest prophethood is: if you feel no shame, do as you wish.”',
          bn: 'নবী ﷺ বলেছেন: “প্রথম নবুয়তের বাণী থেকে মানুষ যা পেয়েছে তার একটি হলো: যদি তোমার লজ্জা না থাকে, তবে যা ইচ্ছা তা-ই করো।”',
        },
        note: {
          en: 'Read as a description rather than a permission: once ḥayā’ is gone, nothing else is standing in the way. It is a statement about what modesty was doing all along.',
          bn: 'অনুমতি নয়, বর্ণনা হিসেবে পড়ুন: হায়া চলে গেলে আর কিছুই পথ আগলে দাঁড়ায় না। এটি বলছে, লজ্জা এতদিন আসলে কী কাজটি করছিল।',
        },
      },
    ],
    practice: [
      {
        en: 'Apply 24:30 to your phone, not just to the street. The verse names the gaze, and most of a modern gaze is spent on a screen.',
        bn: '২৪:৩০ কেবল রাস্তায় নয়, নিজের ফোনেও প্রয়োগ করুন। আয়াতটি দৃষ্টির কথা বলে, আর আধুনিক দৃষ্টির বেশিরভাগই ব্যয় হয় পর্দায়।',
      },
      {
        en: 'Notice the second look and stop it. The scholars read min abṣārihim as being precisely about that, and the first one is not what you are accountable for.',
        bn: 'দ্বিতীয় দৃষ্টিটি খেয়াল করুন আর থামান। আলিমগণ মিন আবসারিহিম-কে ঠিক সেটির কথাই বলেছেন, আর প্রথমটির জন্য আপনি দায়ী নন।',
      },
      {
        en: 'Ask whether you would do the thing in front of someone you respect. That question is ḥayā’ working, and the hadith says it is the last line of defence.',
        bn: 'নিজেকে জিজ্ঞেস করুন, যাঁকে আপনি শ্রদ্ধা করেন তাঁর সামনে কাজটি করতেন কি না। ওই প্রশ্নটিই হায়ার কাজ, আর হাদিস বলে এটিই শেষ প্রতিরক্ষা।',
      },
    ],
  },

  {
    id: 'generosity',
    wing: 'character',
    emoji: '\u{1F331}',
    title: { en: 'Generosity', bn: 'দানশীলতা' },
    tagline: {
      en: 'The Qur’an’s arithmetic on giving does not work like arithmetic.',
      bn: 'দান নিয়ে কুরআনের অঙ্ক সাধারণ অঙ্কের নিয়মে চলে না।',
    },
    dua: {
      ref: '63:10',
      why: {
        en: "Not a du‘a to imitate but one to avoid — the words of a person asking for more time to give. The Qur’an quotes it so that you give now instead.",
        bn: "অনুসরণের নয়, এড়ানোর দোয়া — দান করার জন্য আরও সময় চাওয়া এক মানুষের কথা। কুরআন এটি উদ্ধৃত করে যাতে আপনি বরং এখনই দেন।",
      },
    },
    intro: [
      {
        en: 'A seed produces seven ears, each ear a hundred grains — and Allah multiplies further for whom He wills. That is the image 2:261 gives for spending in His way, and the point of a farming metaphor is that the increase is not a bonus added afterwards. It is what the seed was for. Wealth that stays in your hand does not do this.',
        bn: 'একটি বীজ সাতটি শিষ ফলায়, প্রতিটি শিষে একশ দানা — আর আল্লাহ যাকে ইচ্ছা আরও বাড়িয়ে দেন। ২৬১ নম্বর আয়াত তাঁর পথে ব্যয়ের জন্য এই ছবিটিই দেয়, আর কৃষির উপমার মূল কথা এই যে বৃদ্ধিটি পরে যোগ করা বাড়তি কিছু নয়। বীজটি এ জন্যই ছিল। হাতে ধরে রাখা সম্পদ এটি করে না।',
      },
      {
        en: 'And the Qur’an keeps raising the standard past the amount. It asks for what you love rather than what you can spare, it praises giving by night and by day, secretly and publicly, and in one passage it records the givers saying explicitly that they want no reward or thanks from those they fed. Where the money goes is only half of what is being measured.',
        bn: 'আর কুরআন বারবার পরিমাণ ছাড়িয়ে মানদণ্ড উঁচু করে। যা উদ্বৃত্ত তা নয়, যা আপনি ভালোবাসেন তা চায়; রাতে ও দিনে, গোপনে ও প্রকাশ্যে দানের প্রশংসা করে; আর এক অনুচ্ছেদে দাতাদের স্পষ্ট উক্তি লিপিবদ্ধ করে যে তাঁরা যাদের খাওয়ালেন তাদের কাছ থেকে কোনো প্রতিদান বা কৃতজ্ঞতা চান না। টাকা কোথায় গেল, তা মাপের অর্ধেক মাত্র।',
      },
    ],
    verses: [
      {
        ref: '2:261',
        note: {
          en: 'Seven hundred from one, and then an open-ended multiplier on top of it. The metaphor is agricultural on purpose: you do not get a harvest by keeping the seed safe, and the loss of the seed is not the loss it appears to be.',
          bn: 'একটি থেকে সাতশ, আর তার উপরে সীমাহীন গুণক। উপমাটি ইচ্ছাকৃতভাবেই কৃষির: বীজ নিরাপদে রেখে দিলে ফসল হয় না, আর বীজটি হারানো যতটা ক্ষতি মনে হয়, ততটা নয়।',
        },
      },
      {
        ref: '2:274',
        note: {
          en: 'Four modes covered in one line — night and day, secretly and publicly — so that no manner of giving is left outside the promise. Public giving is not excluded; it is listed, because someone has to go first.',
          bn: 'এক লাইনে চারটি ধরন — রাতে ও দিনে, গোপনে ও প্রকাশ্যে — যাতে দানের কোনো পদ্ধতিই প্রতিশ্রুতির বাইরে না থাকে। প্রকাশ্য দানকে বাদ দেওয়া হয়নি; তালিকাভুক্ত করা হয়েছে, কারণ কাউকে না কাউকে তো শুরু করতে হয়।',
        },
      },
      {
        ref: '3:92',
        note: {
          en: 'The bar that moves everything: you will not attain birr until you spend from what you love. Not from what is left over. Abu Talhah heard this and gave away the garden that was dearest to him on the same day.',
          bn: 'যে মানদণ্ড সবকিছু নাড়িয়ে দেয়: তোমরা কখনো বির অর্জন করবে না যতক্ষণ না তোমরা যা ভালোবাসো তা থেকে ব্যয় করো। উদ্বৃত্ত থেকে নয়। আবু তালহা (রা) এটি শুনে সেই দিনই তাঁর সবচেয়ে প্রিয় বাগানটি দান করে দেন।',
        },
      },
      {
        ref: '57:18',
        note: {
          en: 'Both genders named separately again, and then the extraordinary phrase: a goodly loan to Allah. He casts Himself as the borrower — of wealth He gave you in the first place — which is the strongest possible statement that nothing given is lost.',
          bn: 'আবারও নারী-পুরুষ উভয়ের আলাদা উল্লেখ, তারপর অসাধারণ বাক্যাংশটি: আল্লাহকে উত্তম ঋণ দেওয়া। তিনি নিজেকে ঋণগ্রহীতা হিসেবে উপস্থাপন করেন — সেই সম্পদেরই, যা প্রথমে তিনিই দিয়েছেন — আর এটিই সবচেয়ে জোরালো ঘোষণা যে দেওয়া কিছুই হারায় না।',
        },
      },
      {
        ref: '92:5-7',
        note: {
          en: 'A three-step chain: he gives, he fears Allah, he believes in the best — and We will ease him toward ease. The giving is placed first in the sequence, as the thing that starts the easing rather than the thing that follows it.',
          bn: 'তিন ধাপের একটি শৃঙ্খল: সে দেয়, সে আল্লাহকে ভয় করে, সে উত্তম প্রতিদানে বিশ্বাস করে — আর আমি তাকে সহজতার দিকে সহজ করে দেব। দেওয়াকে রাখা হয়েছে ক্রমের প্রথমে, সহজতার ফল হিসেবে নয়, তার সূচনা হিসেবে।',
        },
      },
      {
        ref: '76:8-9',
        note: {
          en: 'They give food they themselves love to the needy, the orphan and the captive — and then say aloud that they want no reward or thanks. The captive is included, which means the food goes to someone with no claim on them at all.',
          bn: 'তাঁরা নিজেদের প্রিয় খাবারই দেন অভাবী, এতিম ও বন্দিকে — তারপর স্পষ্ট বলেন যে তাঁরা কোনো প্রতিদান বা কৃতজ্ঞতা চান না। বন্দিও তালিকায়, অর্থাৎ খাবারটি যায় এমন কারও কাছে যার তাঁদের উপর কোনো দাবিই নেই।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 1442, Sahih Muslim 1010',
        text: {
          en: 'The Prophet ﷺ said: “There is no day on which the servants wake but that two angels descend. One says: ‘O Allah, give the one who spends a replacement.’ The other says: ‘O Allah, give the one who withholds destruction.’”',
          bn: 'নবী ﷺ বলেছেন: “এমন কোনো দিন নেই যেদিন বান্দারা সকালে ওঠে অথচ দুজন ফেরেশতা নামেন না। একজন বলেন: ‘হে আল্লাহ, যে ব্যয় করে তাকে বিকল্প দিন।’ অন্যজন বলেন: ‘হে আল্লাহ, যে আটকে রাখে তাকে ধ্বংস দিন।’”',
        },
        note: {
          en: 'Two prayers made every single morning about you, and which one applies is decided by what you did with your money that day. Neither angel is described as waiting for a large amount.',
          bn: 'প্রতিদিন সকালেই আপনার সম্পর্কে দুটি দোয়া করা হয়, আর কোনটি প্রযোজ্য তা ঠিক হয় ওই দিন আপনি টাকা দিয়ে কী করলেন তাতে। কোনো ফেরেশতাই বড় অঙ্কের অপেক্ষায় আছেন বলে বর্ণিত নয়।',
        },
      },
      {
        src: 'Sahih al-Bukhari 1417, Sahih Muslim 1016',
        text: {
          en: 'The Prophet ﷺ said: “Protect yourselves from the Fire, even with half a date. And whoever does not find that, then with a good word.”',
          bn: 'নবী ﷺ বলেছেন: “জাহান্নাম থেকে বাঁচো, একটি খেজুরের অর্ধেক দিয়ে হলেও। আর যে তা-ও না পায়, সে যেন একটি ভালো কথা দিয়ে বাঁচে।”',
        },
        note: {
          en: 'The floor is set at half a date and then removed altogether. Nobody in any circumstance is left with nothing to give, which closes the commonest excuse for giving nothing.',
          bn: 'সীমাটি ঠিক করা হলো অর্ধেক খেজুরে, তারপর তা-ও তুলে দেওয়া হলো। কোনো অবস্থাতেই কেউ দেওয়ার মতো কিছুই নেই এমন অবস্থায় থাকে না, আর এতে কিছু না দেওয়ার সবচেয়ে প্রচলিত অজুহাতটি বন্ধ হয়ে যায়।',
        },
      },
    ],
    practice: [
      {
        en: 'Give something you would rather keep, once, this month. 3:92 is explicit that the surplus does not reach the standard being described.',
        bn: 'এই মাসে একবার এমন কিছু দিন যা আপনি বরং রেখে দিতেন। ৩:৯২ স্পষ্ট বলে, উদ্বৃত্ত দিয়ে বর্ণিত মানদণ্ডে পৌঁছানো যায় না।',
      },
      {
        en: 'Set up something small and automatic. The two angels come every morning, and a standing arrangement means you are on the right side of that prayer daily.',
        bn: 'ছোট ও স্বয়ংক্রিয় কোনো ব্যবস্থা চালু করুন। দুজন ফেরেশতা প্রতিদিন সকালেই আসেন, আর স্থায়ী ব্যবস্থা মানে প্রতিদিনই আপনি সেই দোয়ার সঠিক দিকে আছেন।',
      },
      {
        en: 'Give one gift with no acknowledgement attached — anonymous, unmentioned. 76:9 makes the refusal of thanks part of the act rather than a modest afterthought.',
        bn: 'কোনো স্বীকৃতি ছাড়াই একটি দান করুন — নাম না জানিয়ে, উল্লেখ না করে। ৭৬:৯ কৃতজ্ঞতা না চাওয়াকে কাজটিরই অংশ বানায়, পরে যোগ করা বিনয় নয়।',
      },
    ],
  },

  {
    id: 'the-model',
    wing: 'character',
    emoji: '\u{2B50}',
    title: { en: 'The Model Himself ﷺ', bn: 'স্বয়ং আদর্শ ﷺ' },
    tagline: {
      en: 'Everything in this section already existed as one life. Aishah (RA) said his character was the Qur’an.',
      bn: 'এই অংশের সবটুকু একটি জীবনেই ছিল। আয়েশা (রা) বলেছেন, তাঁর চরিত্রই ছিল কুরআন।',
    },
    dua: {
      ref: '5:83',
      why: {
        en: "The words of people whose eyes overflowed when they heard what was revealed to him ﷺ — register us among the witnesses. The response to the model is asked for as a place, not a feeling.",
        bn: "যাঁদের চোখ তাঁর প্রতি নাজিলকৃত বাণী শুনে উপচে পড়েছিল, তাঁদের কথা — আমাদের সাক্ষীদের মধ্যে লিখে নিন। আদর্শের প্রতি সাড়াকে চাওয়া হয়েছে একটি অবস্থান হিসেবে, অনুভূতি হিসেবে নয়।",
      },
    },
    intro: [
      {
        en: 'Asked to describe his character, Aishah (RA) answered that it was the Qur’an. It is the most compact description available and it explains the structure of this whole section: the qualities listed across these chapters are not a compilation of separate virtues but a portrait of one person, and the Qur’an calls that person’s character ‘aẓīm — immense.',
        bn: 'তাঁর চরিত্র সম্পর্কে জিজ্ঞেস করা হলে আয়েশা (রা) উত্তর দিয়েছিলেন, তাঁর চরিত্রই ছিল কুরআন। এটিই সবচেয়ে সংক্ষিপ্ত বর্ণনা, আর এটিই এই গোটা অংশের কাঠামো ব্যাখ্যা করে: এই অধ্যায়গুলোতে সাজানো গুণাবলি আলাদা আলাদা সদ্‌গুণের সংকলন নয়, বরং একজন মানুষেরই প্রতিকৃতি, আর কুরআন সেই মানুষটির চরিত্রকে বলে আজিম — মহান।',
      },
      {
        en: 'The reason this matters for the reader who arrived through the first half of this section is simple. An ideal you cannot picture is an ideal you cannot pursue. The Qur’an does not leave the model abstract: it names a specific man, in a specific decade, whose behaviour under insult, betrayal, bereavement and power was recorded in detail by the people who lived with him.',
        bn: 'এই অংশের প্রথম ভাগ পেরিয়ে আসা পাঠকের কাছে এটি কেন গুরুত্বপূর্ণ, তা সহজ। যে আদর্শ কল্পনাই করা যায় না, তার পেছনে ছোটা যায় না। কুরআন আদর্শকে বিমূর্ত রাখে না: এটি নাম ধরে বলে দেয় একজন নির্দিষ্ট মানুষের কথা, নির্দিষ্ট এক দশকে, অপমান, বিশ্বাসঘাতকতা, শোক ও ক্ষমতার মুখে যাঁর আচরণ তাঁর সাথে বসবাসকারী মানুষেরা বিস্তারিত লিপিবদ্ধ করেছেন।',
      },
    ],
    verses: [
      {
        ref: '68:4',
        note: {
          en: 'Revealed in the earliest Makkan period, when he was being called mad. The answer given is not about his sanity but about his character — and khuluq ‘aẓīm is the only thing in the Qur’an described as ‘aẓīm and belonging to a human being.',
          bn: 'মক্কার একেবারে প্রথম পর্বে নাজিল, যখন তাঁকে উন্মাদ বলা হচ্ছিল। যে উত্তর দেওয়া হলো তা তাঁর সুস্থতা নিয়ে নয়, তাঁর চরিত্র নিয়ে — আর খুলুকুন আজিম কুরআনে একমাত্র জিনিস যা আজিম বলে বর্ণিত এবং একজন মানুষের অধিকারে।',
        },
      },
      {
        ref: '33:21',
        note: {
          en: 'Uswatun ḥasanah — an excellent pattern — and then a condition: for whoever hopes in Allah and the Last Day and remembers Allah much. The model is available to everyone, but the verse says only a particular kind of person will actually use it.',
          bn: 'উসওয়াতুন হাসানাহ — উত্তম আদর্শ — তারপর একটি শর্ত: তার জন্য যে আল্লাহ ও শেষ দিনের আশা রাখে এবং আল্লাহকে অধিক স্মরণ করে। আদর্শটি সবার জন্যই আছে, কিন্তু আয়াত বলছে বাস্তবে তা কাজে লাগাবে একটি বিশেষ ধরনের মানুষই।',
        },
      },
      {
        ref: '9:128',
        note: {
          en: 'Four descriptions in one verse, and two of them are about his feelings toward the people: what harms you is grievous to him, and he is concerned over you. Then ra’ūf raḥīm — two names Allah uses for Himself, given here to a man.',
          bn: 'এক আয়াতে চারটি বর্ণনা, আর তার দুটি মানুষের প্রতি তাঁর অনুভূতি নিয়ে: তোমাদের যা কষ্ট দেয় তা তাঁর কাছে দুঃসহ, আর তিনি তোমাদের জন্য উদ্বিগ্ন। তারপর রাউফুর রহিম — দুটি নাম, যা আল্লাহ নিজের জন্য ব্যবহার করেন, এখানে দেওয়া হয়েছে একজন মানুষকে।',
        },
      },
      {
        ref: '3:159',
        note: {
          en: 'It belongs here as well as in the chapter on gentleness, because it is the verse that ties the two halves of this section together: mercy received from Allah, becoming mercy extended to people who had just failed him.',
          bn: 'এটি কোমলতার অধ্যায়ের পাশাপাশি এখানেও রাখার মতো, কারণ এই আয়াতটিই এই অংশের দুই ভাগকে বেঁধে দেয়: আল্লাহর কাছ থেকে পাওয়া রহমত, যা রূপ নেয় সদ্য তাঁকে ব্যর্থ করা মানুষদের প্রতি বাড়িয়ে দেওয়া রহমতে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 6038, Sahih Muslim 2309',
        text: {
          en: 'Anas ibn Malik (RA) said: “I served the Messenger of Allah ﷺ for ten years, and he never once said uff to me, nor said of anything I did, ‘Why did you do that?’ nor of anything I left undone, ‘Why did you not do that?’”',
          bn: 'আনাস ইবনে মালিক (রা) বলেছেন: “আমি দশ বছর রাসূলুল্লাহ ﷺ-এর খেদমত করেছি, আর তিনি কখনো আমাকে একবারও উফ বলেননি, আমার কোনো কাজ সম্পর্কে বলেননি ‘এটি কেন করলে?’, আর কোনো অকৃত কাজ সম্পর্কে বলেননি ‘এটি কেন করলে না?’”',
        },
        note: {
          en: 'Ten years, a household, and a servant who was a boy for much of it. The witness is the person best placed to have complaints, and the standard he reports is the same uff that 17:23 forbids toward parents.',
          bn: 'দশ বছর, একটি সংসার, আর এক খাদেম যিনি এর বেশিরভাগ সময়ই ছিলেন বালক। সাক্ষী সেই ব্যক্তি, যাঁর অভিযোগ থাকার সবচেয়ে বেশি সুযোগ ছিল, আর তিনি যে মানদণ্ডের কথা বলছেন তা সেই উফ, যা ১৭:২৩ পিতামাতার প্রতি নিষেধ করে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 3559',
        text: {
          en: 'Abdullah ibn Amr (RA) said: “The Messenger of Allah ﷺ was neither obscene in speech nor did he speak obscenely, and he used to say: ‘The best of you are the best of you in character.’”',
          bn: 'আবদুল্লাহ ইবনে আমর (রা) বলেছেন: “রাসূলুল্লাহ ﷺ অশ্লীলভাষী ছিলেন না, ইচ্ছা করে অশ্লীল কথাও বলতেন না, আর তিনি বলতেন: ‘তোমাদের মধ্যে সর্বোত্তম তারাই যারা চরিত্রে সর্বোত্তম।’”',
        },
        note: {
          en: 'The narration pairs a report of conduct with the saying it produced. He is not quoted setting a standard he was not visibly keeping, which is the whole force of 33:21.',
          bn: 'বর্ণনাটি আচরণের বিবরণের সাথে সেই বাণীটিও জোড়া দেয় যা তা থেকেই এসেছে। তাঁকে এমন কোনো মান নির্ধারণ করতে উদ্ধৃত করা হয়নি যা তিনি নিজে দৃশ্যত পালন করছিলেন না, আর ৩৩:২১-এর পুরো জোরটাই এখানে।',
        },
      },
    ],
    practice: [
      {
        en: 'Read one seerah incident a week rather than a whole book. The model is made of specific moments, and specific moments are what you can imitate.',
        bn: 'পুরো বই নয়, সপ্তাহে সিরাতের একটি ঘটনা পড়ুন। আদর্শটি গড়ে উঠেছে নির্দিষ্ট মুহূর্তগুলো দিয়ে, আর নির্দিষ্ট মুহূর্তই আপনি অনুসরণ করতে পারেন।',
      },
      {
        en: 'Try Anas’s ten years for one day: no “why did you do that,” no “why didn’t you.” It is harder than it reads.',
        bn: 'আনাসের দশ বছর একদিনের জন্য চেষ্টা করুন: কোনো “এটি কেন করলে” নয়, কোনো “কেন করলে না” নয়। পড়তে যত সহজ, করতে তত নয়।',
      },
      {
        en: 'Send ṣalawāt on him deliberately today rather than in passing. 33:21 attaches the model to remembering Allah much — the two habits hold each other up.',
        bn: 'আজ যেতে যেতে নয়, ইচ্ছা করেই তাঁর উপর দরুদ পড়ুন। ৩৩:২১ আদর্শটিকে আল্লাহকে অধিক স্মরণের সাথে যুক্ত করে — দুটি অভ্যাস একে অপরকে ধরে রাখে।',
      },
    ],
  },

  {
    id: 'numb-heart',
    wing: 'mercy',
    emoji: '\u{1F9CA}',
    title: { en: 'When You Cannot Feel Anything', bn: 'যখন কিছুই অনুভব করেন না' },
    tagline: {
      en: 'A hardened heart is a condition the Qur’an names and treats — not a verdict it passes on you.',
      bn: 'শক্ত হয়ে যাওয়া অন্তর কুরআনের কাছে রোগ, যার নামও আছে ওষুধও আছে। এ আপনার বিরুদ্ধে রায় নয়।',
    },
    dua: {
      ref: '3:8',
      why: {
        en: 'Our Lord, do not let our hearts deviate after You have guided us. It is the exact request for the exact condition — and it asks for mercy immediately after, as though the two were the same medicine.',
        bn: 'হে আমাদের রব, হেদায়েত দেওয়ার পর আমাদের অন্তরকে বাঁকা করবেন না। ঠিক এই অবস্থার জন্য ঠিক এই আবেদন — আর সাথে সাথেই রহমত চাওয়া, যেন দুটি একই ওষুধ।',
      },
    },
    intro: [
      {
        en: 'Some people are not in despair. They are in something quieter and more frightening: they pray and feel nothing, read and feel nothing, and suspect this proves they have been abandoned. The Qur’an knows this state precisely — it calls it qaswat al-qulūb, hardness of the hearts — and it addresses it in the second person, to believers, which already answers the suspicion.',
        bn: 'কিছু মানুষ নিরাশ নন। তাঁরা আরও নিঃশব্দ ও ভয়ঙ্কর কিছুর মধ্যে আছেন: নামাজ পড়ে কিছু অনুভব করেন না, পড়াশোনা করে কিছু অনুভব করেন না, আর সন্দেহ করেন এটিই প্রমাণ যে তাঁদের ছেড়ে দেওয়া হয়েছে। কুরআন এই অবস্থাটি নিখুঁতভাবে জানে — একে বলে কাসওয়াতুল কুলূব, অন্তরের কাঠিন্য — আর একে সম্বোধন করে মুমিনদেরই, দ্বিতীয় পুরুষে, যা সন্দেহটির উত্তর আগেই দিয়ে দেয়।',
      },
      {
        en: 'The most striking verse on it is a question, not a sentence of judgement: has the time not come for the believers that their hearts should soften? The word for it, a-lam ya’ni, carries the sense of a fruit not yet ripe. It is an invitation with an impatience in it — which is a very different thing from being written off.',
        bn: 'এ বিষয়ে সবচেয়ে চমকপ্রদ আয়াতটি একটি প্রশ্ন, শাস্তির রায় নয়: মুমিনদের জন্য কি সময় আসেনি যে তাদের অন্তর নরম হবে? এর শব্দ, আ-লাম ইয়ানি, বহন করে এমন ফলের ভাব যা এখনো পাকেনি। এটি এক আমন্ত্রণ, তাতে অধৈর্য মিশে আছে — আর তা বাতিল করে দেওয়ার চেয়ে সম্পূর্ণ আলাদা জিনিস।',
      },
    ],
    verses: [
      {
        ref: '57:16',
        note: {
          en: 'Addressed to those who have believed, and the two things named as softeners are the remembrance of Allah and what has come down of the truth. The prescription is inside the diagnosis: the cure is exposure, not feeling.',
          bn: 'যাঁরা ঈমান এনেছেন তাঁদেরই সম্বোধন, আর নরম করার উপায় হিসেবে যে দুটির নাম আসে তা হলো আল্লাহর স্মরণ আর যা সত্য নাজিল হয়েছে। রোগনির্ণয়ের ভেতরেই ব্যবস্থাপত্র: চিকিৎসা হলো সংস্পর্শ, অনুভূতি নয়।',
        },
      },
      {
        ref: '2:74',
        note: {
          en: 'The comparison is to stone — and then it refuses to leave the comparison there. Some stones burst with rivers, some split and water comes out, some fall down from the fear of Allah. Even the metaphor for hardness is given three ways of breaking open.',
          bn: 'তুলনা টানা হয়েছে পাথরের সাথে — তারপর তুলনাটিকে সেখানেই থেমে যেতে দেওয়া হয়নি। কিছু পাথর থেকে নদী উৎসারিত হয়, কিছু ফেটে গিয়ে পানি বের হয়, কিছু আল্লাহর ভয়ে গড়িয়ে পড়ে। কাঠিন্যের উপমাটিকেও ভেঙে খোলার তিনটি পথ দেওয়া হয়েছে।',
        },
      },
      {
        ref: '39:22',
        note: {
          en: 'The opposite state is described as a chest expanded for Islam, sharaḥa ṣadrah — the same verb Musa (AS) asks for in his du‘a. An open chest is presented as something Allah does to a person, which makes it a thing to ask for rather than to generate.',
          bn: 'বিপরীত অবস্থাটি বর্ণিত হয়েছে ইসলামের জন্য প্রশস্ত করা বুক হিসেবে, শারাহা সাদরাহু — সেই একই ক্রিয়াপদ, যা মুসা (আ) তাঁর দোয়ায় চান। খোলা বুককে উপস্থাপন করা হয়েছে এমন কিছু হিসেবে যা আল্লাহ মানুষের জন্য করেন, ফলে তা নিজে তৈরি করার নয়, চাওয়ার জিনিস।',
        },
      },
      {
        ref: '8:2',
        note: {
          en: 'A description, not a demand: when Allah is mentioned their hearts tremble, and His verses increase them in faith. Read it as a portrait of where you are going rather than a test you are currently failing.',
          bn: 'দাবি নয়, বর্ণনা: আল্লাহর কথা উল্লেখ হলে তাদের অন্তর কেঁপে ওঠে, আর তাঁর আয়াত তাদের ঈমান বাড়িয়ে দেয়। একে পড়ুন আপনি কোথায় যাচ্ছেন তার প্রতিকৃতি হিসেবে, বর্তমানে আপনি যে পরীক্ষায় ফেল করছেন তা হিসেবে নয়।',
        },
      },
      {
        ref: '39:23',
        note: {
          en: 'The physical description is worth noticing: skins shiver, and then skins and hearts soften at the remembrance of Allah. Shivering comes first and softening second — the unpleasant stage is described as part of the process, not as its failure.',
          bn: 'শারীরিক বর্ণনাটি লক্ষণীয়: চামড়া শিউরে ওঠে, তারপর চামড়া ও অন্তর আল্লাহর স্মরণে নরম হয়। শিউরে ওঠা আগে, নরম হওয়া পরে — অস্বস্তিকর পর্যায়টিকে বলা হয়েছে প্রক্রিয়ার অংশ, তার ব্যর্থতা নয়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2654',
        text: {
          en: 'The Prophet ﷺ said: “The hearts of the children of Adam are all between two of the fingers of the Most Merciful, as one heart; He turns it however He wills.” Then he said: “O Allah, Turner of hearts, turn our hearts to Your obedience.”',
          bn: 'নবী ﷺ বলেছেন: “আদম সন্তানের অন্তরগুলো সবই রহমানের দুই আঙুলের মাঝে একটি অন্তরের মতো; তিনি যেভাবে ইচ্ছা তা ঘুরিয়ে দেন।” তারপর তিনি বললেন: “হে আল্লাহ, অন্তরসমূহের পরিবর্তনকারী, আমাদের অন্তরকে আপনার আনুগত্যের দিকে ফিরিয়ে দিন।”',
        },
        note: {
          en: 'He states the fact and then immediately makes a du‘a about it. That order is the practical instruction: a heart you cannot steer is not a heart you are stuck with — it is one you ask about.',
          bn: 'তিনি বাস্তবতাটি বলেন, তারপর সাথে সাথেই তা নিয়ে দোয়া করেন। এই ক্রমটিই বাস্তব নির্দেশ: যে অন্তরকে আপনি চালাতে পারেন না, সেটি আপনার আটকে থাকা অন্তর নয় — সেটি চেয়ে নেওয়ার অন্তর।',
        },
      },
      {
        src: 'Sahih Muslim 2750',
        text: {
          en: 'The Prophet ﷺ said: “Sometimes there is a veil upon my heart, and I ask Allah for forgiveness a hundred times a day.”',
          bn: 'নবী ﷺ বলেছেন: “কখনো কখনো আমার অন্তরের উপর একটি আবরণ আসে, আর আমি দিনে একশ বার আল্লাহর কাছে ক্ষমা চাই।”',
        },
        note: {
          en: 'If the best of creation described a dullness settling on his heart, the presence of it in yours proves nothing about your standing. What he did about it is the part to copy.',
          bn: 'সৃষ্টির সেরা মানুষটি যদি তাঁর অন্তরে আবরণ নেমে আসার কথা বলে থাকেন, তবে আপনার অন্তরে তার উপস্থিতি আপনার অবস্থান সম্পর্কে কিছুই প্রমাণ করে না। তিনি এর জন্য যা করেছেন, সেটিই অনুসরণের অংশ।',
        },
      },
    ],
    practice: [
      {
        en: 'Keep doing the act while the feeling is absent. 57:16 names remembrance and revelation as what softens a heart, which means the input comes before the sensation, not after it.',
        bn: 'অনুভূতি না থাকলেও কাজটি চালিয়ে যান। ৫৭:১৬ অন্তর নরম করার উপায় হিসেবে স্মরণ ও ওহির নাম বলে, অর্থাৎ ভেতরে ঢোকানোটা আগে, অনুভূতি পরে।',
      },
      {
        en: 'Say the du‘a of the hadith — yā muqallib al-qulūb, thabbit qalbī ‘alā dīnik — when you notice the dullness rather than waiting for it to pass.',
        bn: 'নিস্তেজ ভাবটি টের পেলে অপেক্ষা না করে হাদিসের দোয়াটি পড়ুন — ইয়া মুকাল্লিবাল কুলূব, সাব্বিত কালবী আলা দীনিক।',
      },
      {
        en: 'Change one input for a week: less noise before sleep, ten minutes of recitation with the meaning open. Hardness is usually the result of an intake, not of a decision.',
        bn: 'এক সপ্তাহের জন্য একটি ইনপুট বদলান: ঘুমানোর আগে কম শব্দ, অর্থসহ দশ মিনিট তিলাওয়াত। কাঠিন্য সাধারণত কোনো সিদ্ধান্তের নয়, গ্রহণেরই ফল।',
      },
    ],
  },

  {
    id: 'waswasa',
    wing: 'mercy',
    emoji: '\u{1F32B}️',
    title: { en: 'The Thoughts You Did Not Choose', bn: 'যে চিন্তা আপনি বেছে নেননি' },
    tagline: {
      en: 'You are not accountable for what crosses your mind. The Prophet ﷺ called the distress of it pure faith.',
      bn: 'মনে যা আপনাআপনি এসে পড়ে, তার জন্য আপনি ধরা পড়বেন না। তা নিয়ে যে ছটফটানি, নবী ﷺ সেটাকেই বলেছেন খাঁটি ঈমান।',
    },
    dua: {
      ref: '2:286',
      why: {
        en: 'Our Lord, do not take us to task if we forget or make a mistake. The Prophet ﷺ said that after each line of this du‘a Allah answered: “I have done so.”',
        bn: 'হে আমাদের রব, আমরা ভুলে গেলে বা ভুল করলে আমাদের পাকড়াও করবেন না। নবী ﷺ বলেছেন, এই দোয়ার প্রতিটি বাক্যের পর আল্লাহ উত্তর দিয়েছেন: “আমি তা করলাম।”',
      },
    },
    intro: [
      {
        en: 'A particular kind of religious person suffers badly here: intrusive thoughts about Allah, ugly images during prayer, doubts that arrive uninvited and feel like blasphemy. Some Companions came to the Prophet ﷺ with exactly this, saying they found in themselves something too terrible to speak. His answer was not reassurance about the thought. It was a reclassification of what having it meant.',
        bn: 'এক বিশেষ ধরনের ধার্মিক মানুষ এখানে ভীষণ কষ্ট পান: আল্লাহ সম্পর্কে অনাহূত চিন্তা, নামাজের মধ্যে কুৎসিত দৃশ্য, বিনা আমন্ত্রণে আসা সন্দেহ যা কুফরির মতো মনে হয়। কিছু সাহাবি ঠিক এই নিয়েই নবী ﷺ-এর কাছে এসেছিলেন, বলেছিলেন তাঁরা নিজেদের ভেতরে এমন কিছু পান যা মুখে আনাও ভয়ানক। তাঁর উত্তর ছিল না চিন্তাটি নিয়ে সান্ত্বনা। ছিল, তা থাকার অর্থ কী — সেটির পুনর্বিন্যাস।',
      },
      {
        en: 'The Qur’an’s framing helps. Man was created weak. The soul is described by Yusuf (AS) himself as persistently inclining toward evil. Nothing in the Book expects a mind that produces only good material. What it asks about is what you do the moment you notice.',
        bn: 'কুরআনের উপস্থাপনা সাহায্য করে। মানুষকে সৃষ্টি করা হয়েছে দুর্বল করে। ইউসুফ (আ) নিজেই নফসকে বর্ণনা করেন মন্দের দিকে বারবার প্ররোচনাকারী হিসেবে। কিতাবের কোথাও এমন মন প্রত্যাশা করা হয়নি যা কেবল ভালো উপাদানই তৈরি করে। যা জানতে চাওয়া হয় তা হলো, টের পাওয়ার মুহূর্তে আপনি কী করেন।',
      },
    ],
    verses: [
      {
        ref: '2:286',
        note: {
          en: 'The verse opens by ruling out the whole fear: Allah does not burden a soul beyond its capacity. Then it distinguishes what a soul has earned from what has merely happened to it — kasabat, acquired, is a verb of choosing.',
          bn: 'আয়াতটি শুরুই হয় গোটা ভয়টি বাতিল করে দিয়ে: আল্লাহ কাউকে তার সাধ্যের বাইরে দায়িত্ব দেন না। তারপর আলাদা করে দেয় নফস যা অর্জন করেছে আর যা নিছক তার সাথে ঘটে গেছে — কাসাবাত, অর্জন, বেছে নেওয়ার ক্রিয়াপদ।',
        },
      },
      {
        ref: '12:53',
        note: {
          en: 'Spoken in the Qur’an by a prophet: I do not declare my own soul free of blame, for the soul is a persistent enjoiner of evil. If this is Yusuf’s (AS) description of his own nafs, yours producing similar material is not evidence against you.',
          bn: 'কুরআনে একজন নবীর মুখে: আমি নিজের নফসকে নির্দোষ বলছি না, কারণ নফস মন্দের দিকে বারবার প্ররোচনা দেয়। এটি যদি ইউসুফ (আ)-এর নিজের নফসের বর্ণনা হয়, তবে আপনার নফস একই উপাদান তৈরি করা আপনার বিরুদ্ধে কোনো প্রমাণ নয়।',
        },
      },
      {
        ref: '4:28',
        note: {
          en: 'Allah wants to lighten for you — and the reason given is that mankind was created weak. The weakness is stated as design, from the Designer, and used as an argument for making things easier rather than harder.',
          bn: 'আল্লাহ তোমাদের ভার হালকা করতে চান — আর কারণ হিসেবে বলা হয়েছে, মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে। দুর্বলতাকে বলা হয়েছে নকশা হিসেবে, স্বয়ং নকশাকারের পক্ষ থেকে, আর তা ব্যবহৃত হয়েছে বিষয়টিকে কঠিন নয়, সহজ করার যুক্তি হিসেবে।',
        },
      },
      {
        ref: '7:200-201',
        note: {
          en: 'The instruction and then the description. If a prompting comes from Satan, seek refuge — that is the whole action required. And those who are conscious of Allah, when a touch from Satan reaches them, remember and immediately see clearly. Not “are never touched.”',
          bn: 'নির্দেশ, তারপর বর্ণনা। শয়তানের পক্ষ থেকে কুমন্ত্রণা এলে আশ্রয় চাও — প্রয়োজনীয় কাজ এটুকুই। আর যারা আল্লাহভীরু, তাদের শয়তানের স্পর্শ লাগলে তারা স্মরণ করে আর সাথে সাথেই স্পষ্ট দেখতে পায়। “কখনো স্পর্শই লাগে না” নয়।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 132',
        text: {
          en: 'Some of the Companions came to the Prophet ﷺ and said: “We find within ourselves something too grave for any of us to speak of.” He said: “Do you really find that?” They said yes. He said: “That is pure faith.”',
          bn: 'কিছু সাহাবি নবী ﷺ-এর কাছে এসে বললেন: “আমরা নিজেদের ভেতরে এমন কিছু পাই যা মুখে আনা আমাদের কারও পক্ষেই ভয়ানক।” তিনি বললেন: “তোমরা কি সত্যিই তা পাও?” তাঁরা বললেন, হ্যাঁ। তিনি বললেন: “এটাই খাঁটি ঈমান।”',
        },
        note: {
          en: 'The verdict is on the horror, not on the thought. Being appalled by it is the evidence of faith — a person indifferent to such a thought would not have come to ask.',
          bn: 'রায়টি চিন্তাটির উপর নয়, বরং সেই আতঙ্কের উপর। তাতে শিউরে ওঠাই ঈমানের প্রমাণ — এমন চিন্তায় যার কিছু আসে-যায় না, সে তো জিজ্ঞেস করতেই আসত না।',
        },
      },
      {
        src: 'Sahih al-Bukhari 5269, Sahih Muslim 127',
        text: {
          en: 'The Prophet ﷺ said: “Allah has pardoned for my ummah what their souls tell them, so long as they do not act upon it or speak of it.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ আমার উম্মতের জন্য ক্ষমা করেছেন তাদের নফস তাদের যা বলে, যতক্ষণ তারা তা অনুযায়ী কাজ না করে বা মুখে না বলে।”',
        },
        note: {
          en: 'Two conditions, both about what follows the thought. This is the plainest text in the Sunnah on the matter, and it removes the entire category from the ledger.',
          bn: 'দুটি শর্ত, দুটিই চিন্তার পরে কী ঘটে তা নিয়ে। এ বিষয়ে সুন্নাহর সবচেয়ে স্পষ্ট পাঠ, আর এটি গোটা শ্রেণিটিকেই খাতা থেকে সরিয়ে দেয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Do not argue with the thought. 7:200 gives one action — seek refuge — and arguing keeps the subject open, which is the only thing the prompting needs.',
        bn: 'চিন্তাটির সাথে তর্কে যাবেন না। ৭:২০০ একটিই কাজ বলে — আশ্রয় চাও — আর তর্ক প্রসঙ্গটিকে খোলা রাখে, যা ওই কুমন্ত্রণার একমাত্র প্রয়োজন।',
      },
      {
        en: 'Stop confessing it. Bukhari 5269 makes speaking it one of the two conditions, so repeating it to people moves it from pardoned to spoken.',
        bn: 'বারবার তা বলে বেড়ানো বন্ধ করুন। বুখারি ৫২৬৯ মুখে বলাকেই দুটি শর্তের একটি বানায়, তাই মানুষকে বারবার বলা একে ক্ষমাপ্রাপ্ত থেকে উচ্চারিত-এ সরিয়ে দেয়।',
      },
      {
        en: 'If the doubts have become a compulsion — repeating wudu, repeating prayers, repeating the shahadah — treat it as waswās requiring a scholar and often a doctor, not as a level of piety to be sustained.',
        bn: 'সন্দেহ যদি বাধ্যবাধকতায় পরিণত হয় — বারবার অজু, বারবার নামাজ, বারবার শাহাদাহ — তবে একে ওয়াসওয়াস হিসেবে দেখুন, যার জন্য আলিম এবং প্রায়ই চিকিৎসকের প্রয়োজন; ধরে রাখার মতো তাকওয়ার স্তর হিসেবে নয়।',
      },
    ],
  },

  {
    id: 'the-night',
    wing: 'mercy',
    emoji: '\u{1F319}',
    title: { en: 'What the Night Is For', bn: 'রাত কী কাজে লাগে' },
    tagline: {
      en: 'The most private hours are where the Qur’an puts the heaviest worship and the easiest forgiveness.',
      bn: 'সবচেয়ে নিরিবিলি প্রহরেই কুরআন রেখেছে সবচেয়ে ভারী ইবাদত আর সবচেয়ে সহজ মাফ।',
    },
    dua: {
      ref: '3:191',
      why: {
        en: 'The du‘a of people who remember Allah standing, sitting and lying down: our Lord, You did not create this without purpose. It is what the night is for — noticing that.',
        bn: 'যাঁরা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করেন তাঁদের দোয়া: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। রাত এর জন্যই — এটি খেয়াল করার জন্য।',
      },
    },
    intro: [
      {
        en: 'Almost every passage in this section that describes people Allah is pleased with mentions the night. Their sides part from their beds. They sleep little of it. In the hours before dawn they seek forgiveness. The servants of the Most Merciful spend it prostrating and standing. It is the single most repeated detail in the Qur’an’s portraits of the righteous.',
        bn: 'এই অংশের প্রায় প্রতিটি অনুচ্ছেদ, যেখানে আল্লাহ যাঁদের প্রতি সন্তুষ্ট তাঁদের বর্ণনা আছে, রাতের কথা বলে। তাঁদের পাঁজর বিছানা থেকে আলাদা হয়। তাঁরা রাতের সামান্য অংশই ঘুমান। ভোরের আগের প্রহরে তাঁরা ক্ষমা চান। রহমানের বান্দারা তা কাটান সিজদায় ও দাঁড়িয়ে। সৎকর্মশীলদের কুরআনি প্রতিকৃতিতে এটিই সবচেয়ে বেশি পুনরাবৃত্ত বিবরণ।',
      },
      {
        en: 'The reason given is practical rather than mystical: the night is heavier on the self and straighter in speech, because nothing else is competing for the attention. And there is a mercy in the arrangement — nobody sees it. A person whose daytime religion has become performance can rebuild it at two in the morning, where performance has no audience.',
        bn: 'কারণটি রহস্যময় নয়, বাস্তব: রাত নফসের উপর ভারী আর কথায় সোজা, কারণ মনোযোগের জন্য আর কিছু প্রতিযোগিতা করছে না। আর ব্যবস্থাটিতে একটি রহমতও আছে — কেউ দেখে না। যাঁর দিনের ধর্মচর্চা প্রদর্শনীতে পরিণত হয়েছে, তিনি রাত দুটোয় তা নতুন করে গড়তে পারেন, যেখানে প্রদর্শনীর কোনো দর্শক নেই।',
      },
    ],
    verses: [
      {
        ref: '17:79',
        note: {
          en: 'Described as nāfilah — additional, over and above what is required — and the promised outcome is a maqāman maḥmūdā, a praised station. The optional act is where the highest promise is attached.',
          bn: 'বর্ণনা করা হয়েছে নাফিলা হিসেবে — অতিরিক্ত, যা ফরজের উপরে — আর প্রতিশ্রুত ফল হলো মাকামাম মাহমূদা, প্রশংসিত স্থান। ঐচ্ছিক কাজটির সাথেই যুক্ত সর্বোচ্চ প্রতিশ্রুতি।',
        },
      },
      {
        ref: '73:1-6',
        note: {
          en: 'The earliest command, and it is generous from the start: stand the night, except a little — half, or less, or more. Then the reason: the night rising is heavier in tread and straighter in speech. It gives the range before it gives the argument.',
          bn: 'সবচেয়ে প্রাচীন নির্দেশ, আর তা গোড়া থেকেই উদার: রাতে দাঁড়াও, সামান্য অংশ ছাড়া — অর্ধেক, বা তার কম, বা বেশি। তারপর কারণ: রাতে ওঠা পদক্ষেপে ভারী আর কথায় সোজা। যুক্তি দেওয়ার আগেই সীমাটা দিয়ে দেওয়া হয়েছে।',
        },
      },
      {
        ref: '32:16',
        note: {
          en: 'Their sides part from their beds — the physical detail of getting up is what the verse chooses to record. And they call on Him in fear and hope, the same pairing as the chapter on balance in this section.',
          bn: 'তাঁদের পাঁজর বিছানা থেকে আলাদা হয় — উঠে পড়ার শারীরিক বিবরণটিই আয়াতটি লিপিবদ্ধ করতে বেছে নেয়। আর তাঁরা তাঁকে ডাকেন ভয় ও আশা নিয়ে, এই অংশের ভারসাম্য-অধ্যায়ের সেই একই জোড়া।',
        },
      },
      {
        ref: '39:9',
        note: {
          en: 'A rhetorical question that leaves the comparison unfinished — is one devoutly obedient in the hours of the night, prostrating and standing, fearing the Hereafter and hoping for his Lord’s mercy, like one who is not? The Qur’an does not complete the sentence, which makes the reader do it.',
          bn: 'একটি অলঙ্কারিক প্রশ্ন, যা তুলনাটি অসমাপ্ত রেখে দেয় — রাতের প্রহরে সিজদায় ও দাঁড়িয়ে বিনীতভাবে অনুগত, আখিরাতকে ভয় করে ও রবের রহমতের আশা রাখে, সে কি তার মতো যে নয়? কুরআন বাক্যটি শেষ করে না, তাতে পাঠককেই শেষ করতে হয়।',
        },
      },
      {
        ref: '3:190-191',
        note: {
          en: 'What the night is actually for: noticing. They remember Allah standing, sitting and on their sides, and think about the creation of the heavens and the earth. The Prophet ﷺ is reported to have wept when these verses came down.',
          bn: 'রাত আসলে যার জন্য: খেয়াল করার জন্য। তাঁরা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করেন, আর আসমান-জমিনের সৃষ্টি নিয়ে চিন্তা করেন। বর্ণিত আছে, এই আয়াতগুলো নাজিল হলে নবী ﷺ কেঁদেছিলেন।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 1145, Sahih Muslim 758',
        text: {
          en: 'The Prophet ﷺ said: “Our Lord descends each night to the lowest heaven when the last third of the night remains, and says: ‘Who is calling upon Me, that I may answer him? Who is asking of Me, that I may give him? Who is seeking My forgiveness, that I may forgive him?’”',
          bn: 'নবী ﷺ বলেছেন: “আমাদের রব প্রতি রাতে, যখন রাতের শেষ তৃতীয়াংশ বাকি থাকে, দুনিয়ার আকাশে অবতরণ করেন এবং বলেন: ‘কে আমাকে ডাকছে, আমি তার ডাকে সাড়া দেব? কে আমার কাছে চাইছে, আমি তাকে দেব? কে আমার ক্ষমা চাইছে, আমি তাকে ক্ষমা করব?’”',
        },
        note: {
          en: 'Three questions, asked every night, of nobody in particular. The forgiveness is not being rationed — it is being advertised to an empty room until somebody wakes up.',
          bn: 'তিনটি প্রশ্ন, প্রতি রাতে, কোনো নির্দিষ্ট ব্যক্তিকে নয়। ক্ষমা রেশন করা হচ্ছে না — কেউ জেগে না ওঠা পর্যন্ত তা ঘোষণা করা হচ্ছে এক ফাঁকা ঘরে।',
        },
      },
      {
        src: 'Sahih Muslim 1163',
        text: {
          en: 'The Prophet ﷺ said: “The best prayer after the obligatory prayers is the prayer in the depth of the night.”',
          bn: 'নবী ﷺ বলেছেন: “ফরজ নামাজের পর সর্বোত্তম নামাজ হলো গভীর রাতের নামাজ।”',
        },
        note: {
          en: 'Ranked directly against every other voluntary prayer. Two units before fajr, prayed badly and half-awake, are inside the category being praised.',
          bn: 'অন্য সব নফল নামাজের সাথে সরাসরি তুলনা করে ক্রম নির্ধারণ। ফজরের আগে দুই রাকাত, আধা ঘুমে আর অসুন্দরভাবে পড়া হলেও, প্রশংসিত সেই শ্রেণির ভেতরেই।',
        },
      },
    ],
    practice: [
      {
        en: 'Pray two units before fajr, once this week. 73:2 sets the range at “except a little,” and two units is inside it.',
        bn: 'এই সপ্তাহে একবার ফজরের আগে দুই রাকাত পড়ুন। ৭৩:২ সীমা রাখে “সামান্য অংশ ছাড়া”-তে, আর দুই রাকাত তার ভেতরেই।',
      },
      {
        en: 'Sleep earlier rather than trying to wake later. Everyone who keeps the night has moved the evening first; nobody manages it by willpower at 3am.',
        bn: 'দেরিতে ওঠার চেষ্টা না করে আগে ঘুমান। যাঁরা রাত ধরে রাখেন তাঁরা সবাই আগে সন্ধ্যাটা সরিয়েছেন; রাত তিনটায় ইচ্ছাশক্তি দিয়ে কেউ পারে না।',
      },
      {
        en: 'Ask for one specific thing in the last third. The hadith frames the hour as three open questions; arrive with an answer to them.',
        bn: 'শেষ তৃতীয়াংশে নির্দিষ্ট একটি জিনিস চান। হাদিসটি সময়টিকে সাজায় তিনটি খোলা প্রশ্ন হিসেবে; উত্তর নিয়েই উপস্থিত হোন।',
      },
    ],
  },

  {
    id: 'they-came-back',
    wing: 'mercy',
    emoji: '\u{1F504}',
    title: { en: 'People Who Came Back', bn: 'যাঁরা ফিরে এসেছিলেন' },
    tagline: {
      en: 'The generation the Qur’an praises includes men who had killed Muslims and fought the Prophet ﷺ for years.',
      bn: 'কুরআন যে প্রজন্মের প্রশংসা করেছে, তাতে এমন মানুষও আছেন যাঁরা মুসলিম মেরেছেন, বছরের পর বছর নবী ﷺ-এর বিরুদ্ধে লড়েছেন।',
    },
    dua: {
      ref: '71:28',
      why: {
        en: 'Nuh (AS) asks forgiveness for himself, his parents, and whoever enters his house a believer — a request that keeps expanding outward, which is what a person who has been forgiven tends to do.',
        bn: 'নূহ (আ) ক্ষমা চান নিজের জন্য, পিতামাতার জন্য, আর যে-ই মুমিন হয়ে তাঁর ঘরে প্রবেশ করে তার জন্য — এমন এক আবেদন যা বাইরের দিকে প্রসারিত হতেই থাকে, আর ক্ষমাপ্রাপ্ত মানুষ সাধারণত তা-ই করে।',
      },
    },
    intro: [
      {
        en: 'The abstract argument that Allah forgives everything is easier to believe when it has names attached. The first generation of Muslims was not built from people with clean histories. It included the man who was on his way to kill the Prophet ﷺ when he was stopped, the commander whose cavalry turned the battle of Uhud against the Muslims, and the man who threw the spear that killed the Prophet’s ﷺ uncle Hamzah (RA).',
        bn: 'আল্লাহ সবকিছু ক্ষমা করেন — এই বিমূর্ত যুক্তিটি নাম যুক্ত হলে বিশ্বাস করা সহজ হয়। মুসলিমদের প্রথম প্রজন্ম নিষ্কলঙ্ক অতীতের মানুষ দিয়ে গড়া হয়নি। তাতে ছিলেন সেই ব্যক্তি যিনি নবী ﷺ-কে হত্যা করতে যাচ্ছিলেন, সেই সেনাপতি যাঁর অশ্বারোহী বাহিনী উহুদের যুদ্ধ মুসলিমদের বিপক্ষে ঘুরিয়ে দিয়েছিল, আর সেই ব্যক্তি যিনি বর্শা ছুড়ে নবী ﷺ-এর চাচা হামজা (রা)-কে শহিদ করেছিলেন।',
      },
      {
        en: 'All three are Companions. Not tolerated converts kept at the edge — ‘Umar ibn al-Khattab became the second caliph, and Khalid ibn al-Walid was called the Sword of Allah. The Qur’an’s promise in 8:38, that what has passed will be forgiven for those who cease, was applied publicly to people whose past everyone in Madinah knew.',
        bn: 'তিনজনই সাহাবি। প্রান্তে ঠেলে রাখা সহ্য-করা ধর্মান্তরিত নন — উমর ইবনুল খাত্তাব (রা) দ্বিতীয় খলিফা হন, আর খালিদ ইবনুল ওয়ালিদ (রা)-কে বলা হয় আল্লাহর তরবারি। ৮:৩৮-এ কুরআনের প্রতিশ্রুতি, যারা বিরত হবে তাদের অতীত ক্ষমা করা হবে, প্রকাশ্যে প্রয়োগ করা হয়েছিল এমন মানুষদের উপর যাঁদের অতীত মদিনার সবাই জানত।',
      },
    ],
    verses: [
      {
        ref: '8:38',
        note: {
          en: 'Addressed to those actively fighting the Muslims: tell them that if they cease, what has already passed will be forgiven for them. The offer is made mid-war, to combatants, before any apology.',
          bn: 'সম্বোধন সেই মানুষদের যারা তখন সক্রিয়ভাবে মুসলিমদের বিরুদ্ধে লড়ছে: তাদের বলে দাও, তারা বিরত হলে যা আগে ঘটেছে তা ক্ষমা করা হবে। প্রস্তাবটি দেওয়া হচ্ছে যুদ্ধের মাঝখানে, যোদ্ধাদের, কোনো ক্ষমাপ্রার্থনার আগেই।',
        },
      },
      {
        ref: '9:118',
        note: {
          en: 'The three who stayed behind from Tabuk. Their names were not erased from the record — the Qur’an keeps the failure and the forgiveness in the same verse, permanently, which is its own kind of dignity.',
          bn: 'তাবুক থেকে পিছিয়ে থাকা তিনজন। তাঁদের নাম রেকর্ড থেকে মুছে দেওয়া হয়নি — কুরআন ব্যর্থতা ও ক্ষমা দুটোই একই আয়াতে স্থায়ীভাবে রেখে দেয়, আর তা নিজেই এক ধরনের মর্যাদা।',
        },
      },
      {
        ref: '3:159',
        note: {
          en: 'Revealed about Uhud, where obedience broke and Muslims died for it. The instruction that follows is to pardon them, ask forgiveness for them, and consult them in the matter — restored to full standing, not kept on probation.',
          bn: 'নাজিল হয়েছিল উহুদ প্রসঙ্গে, যেখানে আনুগত্য ভেঙেছিল আর তার মূল্য দিতে হয়েছিল প্রাণ দিয়ে। এরপরের নির্দেশ হলো তাদের ক্ষমা করা, তাদের জন্য ক্ষমা চাওয়া, আর বিষয়ে তাদের সাথে পরামর্শ করা — পূর্ণ মর্যাদায় ফিরিয়ে আনা, পরীক্ষাধীন রাখা নয়।',
        },
      },
      {
        ref: '5:39',
        note: {
          en: 'The general rule the individual stories run on: whoever repents after his wrongdoing and reforms, Allah turns to him. Stated without exception for the type of person or the size of the wrong.',
          bn: 'ব্যক্তিগত ঘটনাগুলো যে সাধারণ নিয়মের উপর চলে: যে অন্যায়ের পর তওবা করে ও সংশোধন হয়, আল্লাহ তার দিকে ফেরেন। মানুষের ধরন বা অন্যায়ের আকার নিয়ে কোনো ব্যতিক্রম ছাড়াই বলা।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 4072',
        text: {
          en: 'Wahshi ibn Harb, who had killed Hamzah (RA), came and accepted Islam. The Prophet ﷺ asked him to describe how he had killed Hamzah, and when he had, said to him: “Keep your face away from me.” Wahshi later took part in the campaign against Musaylimah and said he hoped Allah would forgive him through it.',
          bn: 'ওয়াহশি ইবনে হারব, যিনি হামজা (রা)-কে হত্যা করেছিলেন, এসে ইসলাম গ্রহণ করলেন। নবী ﷺ তাঁকে জিজ্ঞেস করলেন তিনি কীভাবে হামজাকে হত্যা করেছিলেন, আর তিনি বলার পর তাঁকে বললেন: “তোমার চেহারা আমার সামনে থেকে সরিয়ে রেখো।” ওয়াহশি পরে মুসাইলামার বিরুদ্ধে অভিযানে অংশ নেন এবং বলেন, তিনি আশা করেন আল্লাহ এর মাধ্যমে তাঁকে ক্ষমা করবেন।',
        },
        note: {
          en: 'This narration is honest about both halves, and that is why it is worth reading. His Islam was accepted in full; the personal grief was never pretended away. Forgiveness by Allah and comfort between people are two different repairs.',
          bn: 'এই বর্ণনাটি দুই দিকেই সৎ, আর সে কারণেই তা পড়ার মতো। তাঁর ইসলাম পূর্ণভাবে গৃহীত হয়েছিল; ব্যক্তিগত শোককে কখনো নেই বলে দেখানো হয়নি। আল্লাহর ক্ষমা আর মানুষে-মানুষে স্বস্তি — দুটি ভিন্ন মেরামত।',
        },
      },
      {
        src: 'Sahih Muslim 121',
        text: {
          en: '‘Amr ibn al-‘As, who had fought the Muslims for years, stipulated when accepting Islam that his past sins be forgiven. The Prophet ﷺ said: “Did you not know that Islam wipes out what came before it?”',
          bn: 'আমর ইবনুল আস, যিনি বছরের পর বছর মুসলিমদের বিরুদ্ধে লড়েছিলেন, ইসলাম গ্রহণের সময় শর্ত দিলেন যেন তাঁর অতীতের গুনাহ ক্ষমা করা হয়। নবী ﷺ বললেন: “তুমি কি জানো না যে ইসলাম তার পূর্ববর্তী সব মুছে দেয়?”',
        },
        note: {
          en: 'Quoted again here for a different reason than in the chapter on large sins: he asked for a special arrangement and was told the ordinary one already covered it.',
          bn: 'বড় গুনাহের অধ্যায়ের চেয়ে ভিন্ন কারণে এখানে আবার উদ্ধৃত: তিনি বিশেষ ব্যবস্থা চেয়েছিলেন, আর তাঁকে বলা হলো সাধারণ ব্যবস্থাটিই তা আগে থেকেই ঢেকে রেখেছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Stop treating your history as a category. Every name in this chapter would have qualified as a hopeless case by the standard people apply to themselves.',
        bn: 'নিজের অতীতকে একটি শ্রেণি হিসেবে দেখা বন্ধ করুন। মানুষ নিজের বেলায় যে মানদণ্ড খাটায়, তাতে এই অধ্যায়ের প্রতিটি নামই আশাহীন বলে গণ্য হতো।',
      },
      {
        en: 'Give somebody else the reading you want for yourself. A community that keeps a person’s past alive is doing the opposite of what 3:159 instructed after Uhud.',
        bn: 'নিজের জন্য যে ব্যাখ্যাটি চান, অন্য কাউকেও তা দিন। যে সমাজ কারও অতীত জাগিয়ে রাখে, সে উহুদের পর ৩:১৫৯ যা নির্দেশ দিয়েছিল তার উল্টোটাই করছে।',
      },
      {
        en: 'Find one thing to build with the ability that used to do damage. Khalid’s (RA) talent did not change; its direction did.',
        bn: 'যে সামর্থ্য একসময় ক্ষতি করত, তা দিয়ে গড়ার মতো একটি কাজ খুঁজে নিন। খালিদ (রা)-এর প্রতিভা বদলায়নি; বদলেছিল তার দিক।',
      },
    ],
  },

  {
    id: 'brotherhood',
    wing: 'character',
    emoji: '\u{1F91D}',
    title: { en: 'Brotherhood', bn: 'ভ্রাতৃত্ব' },
    tagline: {
      en: 'The Qur’an says the hearts of that first community could not have been joined by any amount of money.',
      bn: 'কুরআন বলছে, দুনিয়ার সব সম্পদ ঢাললেও ওই প্রথম সমাজের অন্তরগুলো জোড়া লাগানো যেত না।',
    },
    dua: {
      ref: '59:10',
      why: {
        en: 'Forgive us and our brothers who came before us in faith, and put no resentment in our hearts toward those who believed. The only du‘a in the Qur’an that asks for a specific emotional state about other Muslims.',
        bn: 'আমাদের ও আমাদের আগে ঈমান আনা ভাইদের ক্ষমা করুন, আর যারা ঈমান এনেছে তাদের প্রতি আমাদের অন্তরে বিদ্বেষ রাখবেন না। কুরআনে এটিই একমাত্র দোয়া যা অন্য মুসলিমদের নিয়ে অন্তরের একটি নির্দিষ্ট অবস্থা চায়।',
      },
    },
    intro: [
      {
        en: 'The Aws and the Khazraj had been killing each other for generations before Islam. The Qur’an points at what happened to them as a miracle on the order of a physical sign: you were enemies and He joined your hearts, and if you had spent everything in the earth you could not have done it. Brotherhood is presented as something Allah does, and something a community can lose.',
        bn: 'ইসলামের আগে আউস ও খাযরাজ প্রজন্মের পর প্রজন্ম একে অপরকে হত্যা করেছে। কুরআন তাদের ক্ষেত্রে যা ঘটেছে তার দিকে ইঙ্গিত করে এক ভৌত নিদর্শনের সমতুল্য মুজিজা হিসেবে: তোমরা শত্রু ছিলে, তিনি তোমাদের অন্তর জুড়ে দিয়েছেন, আর পৃথিবীর সবকিছু ব্যয় করলেও তোমরা তা পারতে না। ভ্রাতৃত্বকে উপস্থাপন করা হয়েছে এমন কিছু হিসেবে যা আল্লাহ করেন, আর যা একটি সমাজ হারাতেও পারে।',
      },
      {
        en: 'It is also stated as a fact you are obliged to act on rather than a feeling you are asked to have: the believers are but brothers, so make peace between your brothers. The command follows from the description. You are not asked to like everybody; you are told what they already are to you.',
        bn: 'এটি এমন এক বাস্তবতা হিসেবেও বলা হয়েছে যার উপর কাজ করা আবশ্যক, চাওয়া অনুভূতি হিসেবে নয়: মুমিনরা তো ভাই ভাই, তাই তোমরা তোমাদের ভাইদের মধ্যে মীমাংসা করে দাও। নির্দেশ আসে বর্ণনা থেকেই। আপনাকে সবাইকে পছন্দ করতে বলা হয়নি; বলা হয়েছে তারা আপনার কাছে ইতিমধ্যেই কী।',
      },
    ],
    verses: [
      {
        ref: '49:10',
        note: {
          en: 'Innamā — the believers are only, nothing but, brothers. The particle makes it exclusive, and the command that follows is not to feel warmly but to make settlement, aṣliḥū, which is work.',
          bn: 'ইন্নামা — মুমিনরা কেবলই, ভাই ছাড়া কিছু নয়। শব্দটি বিষয়টিকে একচেটিয়া করে দেয়, আর এরপরের নির্দেশ উষ্ণ বোধ করা নয়, মীমাংসা করা, আসলিহূ, যা পরিশ্রমের কাজ।',
        },
      },
      {
        ref: '3:103',
        note: {
          en: 'Hold to the rope of Allah jamī‘an — all together — and then a reminder framed as a favour: you were enemies, He joined your hearts, and by His favour you became brothers. Unity is recalled as a ni‘mah that was given, so it can be withdrawn.',
          bn: 'আল্লাহর রজ্জু ধরো জামিআন — সবাই একসাথে — তারপর একটি স্মরণ, নিয়ামত হিসেবে উপস্থাপিত: তোমরা শত্রু ছিলে, তিনি তোমাদের অন্তর জুড়ে দিয়েছেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেছ। ঐক্যকে স্মরণ করানো হচ্ছে দেওয়া নিয়ামত হিসেবে, ফলে তা ফিরিয়েও নেওয়া যায়।',
        },
      },
      {
        ref: '8:63',
        note: {
          en: 'If you had spent all that is in the earth, you could not have brought their hearts together. A blunt statement that reconciliation is not a resource problem — which also means no amount of organising substitutes for it.',
          bn: 'পৃথিবীর সবকিছু ব্যয় করলেও তুমি তাদের অন্তর জুড়তে পারতে না। স্পষ্ট ঘোষণা যে মীমাংসা সম্পদের সমস্যা নয় — অর্থাৎ যত আয়োজনই করুন, তা এর বিকল্প নয়।',
        },
      },
      {
        ref: '59:9',
        note: {
          en: 'The Ansar described as loving those who emigrated to them, finding no want in their own chests for what was given away, and preferring others over themselves despite having need. Then the diagnosis: whoever is protected from the stinginess of his own soul — those are the successful.',
          bn: 'আনসারদের বর্ণনা: যাঁরা হিজরতকারীদের ভালোবাসেন, যা দেওয়া হয়েছে তার জন্য নিজেদের বুকে কোনো আকাঙ্ক্ষা পান না, আর নিজেদের প্রয়োজন থাকা সত্ত্বেও অন্যকে অগ্রাধিকার দেন। তারপর রোগনির্ণয়: যে নিজের নফসের কার্পণ্য থেকে রক্ষা পেল — তারাই সফল।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 13, Sahih Muslim 45',
        text: {
          en: 'The Prophet ﷺ said: “None of you truly believes until he loves for his brother what he loves for himself.”',
          bn: 'নবী ﷺ বলেছেন: “তোমাদের কেউ প্রকৃত মুমিন হতে পারবে না যতক্ষণ না সে নিজের জন্য যা পছন্দ করে তা তার ভাইয়ের জন্যও পছন্দ করে।”',
        },
        note: {
          en: 'A test that is easy to state and difficult to pass in the specific case — the promotion, the marriage, the house. It is stated as a condition of faith, not as an ideal of manners.',
          bn: 'একটি পরীক্ষা, বলা সহজ আর নির্দিষ্ট ক্ষেত্রে পাস করা কঠিন — পদোন্নতি, বিয়ে, বাড়ি। একে বলা হয়েছে ঈমানের শর্ত হিসেবে, শিষ্টাচারের আদর্শ হিসেবে নয়।',
        },
      },
      {
        src: 'Sahih Muslim 2586',
        text: {
          en: 'The Prophet ﷺ said: “The believers, in their mutual mercy, love and compassion, are like one body: when a limb of it complains, the whole body responds to it with sleeplessness and fever.”',
          bn: 'নবী ﷺ বলেছেন: “মুমিনরা পারস্পরিক দয়া, ভালোবাসা ও সহানুভূতিতে একটি দেহের মতো: তার একটি অঙ্গ কষ্ট পেলে গোটা দেহ নির্ঘুমতা ও জ্বরে তার সাড়া দেয়।”',
        },
        note: {
          en: 'The image is not of cooperation but of involuntary reaction. A body does not decide to have a fever; the point is what your indifference indicates.',
          bn: 'ছবিটি সহযোগিতার নয়, অনিচ্ছাকৃত প্রতিক্রিয়ার। দেহ সিদ্ধান্ত নিয়ে জ্বরে পড়ে না; মূল কথা হলো আপনার উদাসীনতা কী নির্দেশ করে।',
        },
      },
    ],
    practice: [
      {
        en: 'Reconcile two people you know are not speaking. 49:10 makes that a command addressed to bystanders, not to the parties.',
        bn: 'পরিচিত এমন দুজনের মধ্যে মীমাংসা করে দিন যাঁদের কথা বন্ধ। ৪৯:১০ এই নির্দেশটি দেয় পাশে দাঁড়ানো মানুষদের, বিবাদী পক্ষগুলোকে নয়।',
      },
      {
        en: 'Make the du‘a of 59:10 by name for someone you resent. It is hard to keep a grudge you are actively asking Allah to remove.',
        bn: 'যাঁর প্রতি বিদ্বেষ আছে তাঁর নাম নিয়ে ৫৯:১০-এর দোয়াটি করুন। যে বিদ্বেষ দূর করার জন্য আপনি নিজেই আল্লাহর কাছে চাইছেন, তা ধরে রাখা কঠিন।',
      },
      {
        en: 'Apply the test of Bukhari 13 to a specific case this week, not to people in general. The general version is always easy to pass.',
        bn: 'এই সপ্তাহে বুখারি ১৩-এর পরীক্ষাটি একটি নির্দিষ্ট ক্ষেত্রে খাটান, সাধারণভাবে মানুষের বেলায় নয়। সাধারণ সংস্করণে পাস করা সবসময়ই সহজ।',
      },
    ],
  },

  {
    id: 'keeping-ties',
    wing: 'character',
    emoji: '\u{1F517}',
    title: { en: 'Keeping Ties of Kinship', bn: 'আত্মীয়তার বন্ধন রক্ষা' },
    tagline: {
      en: 'Ar-raḥim, the womb, shares its root with ar-Raḥmān. Cutting it is the one social sin the Qur’an calls a curse.',
      bn: 'আর-রাহিম মানে মায়ের গর্ভ, আর তা আর-রহমান শব্দেরই এক মূল থেকে আসা। সমাজের গুনাহগুলোর মধ্যে কেবল এটি ছিঁড়ে ফেলাকেই কুরআন লানত বলেছে।',
    },
    dua: {
      ref: '14:41',
      why: {
        en: 'Ibrahim (AS) asks for himself, his parents and the believers together. Read here as the shape a family prayer should have — nobody left outside it, including the difficult ones.',
        bn: 'ইবরাহিম (আ) একসাথে চান নিজের, পিতামাতার আর মুমিনদের জন্য। এখানে পড়ুন পারিবারিক দোয়ার আকৃতি হিসেবে — কেউ বাইরে নয়, কঠিন মানুষগুলোও নয়।',
      },
    },
    intro: [
      {
        en: 'The Arabic for kinship, raḥim, is literally the womb, and it comes from the same three letters as ar-Raḥmān. Classical scholars did not treat that as a coincidence — a report has Allah saying He named the tie from His own name, and that He will keep whoever keeps it and cut off whoever cuts it. It is the tightest link the language makes between a divine attribute and a social duty.',
        bn: 'আত্মীয়তার আরবি রাহিম আক্ষরিক অর্থে জরায়ু, আর তা আসে আর-রহমান-এর সেই একই তিন অক্ষর থেকে। ধ্রুপদী আলিমগণ একে কাকতালীয় ভাবেননি — একটি বর্ণনায় আল্লাহ বলেন, তিনি নিজের নাম থেকেই এই বন্ধনের নাম দিয়েছেন, আর যে একে রক্ষা করবে তিনি তাকে রক্ষা করবেন, আর যে ছিন্ন করবে তাকে তিনি ছিন্ন করবেন। ঐশী গুণ ও সামাজিক দায়িত্বের মধ্যে ভাষা যে সবচেয়ে আঁটসাঁট সংযোগ তৈরি করে, এটি তা-ই।',
      },
      {
        en: 'And the Sunnah defines the duty in a way that removes the usual excuse. The one who keeps ties is not the one who returns what he is given; he is the one who keeps them when they are cut off from him. That single sentence disposes of nearly every argument a person makes for not calling.',
        bn: 'আর সুন্নাহ দায়িত্বটির সংজ্ঞা এমনভাবে দেয় যা চিরাচরিত অজুহাতটি সরিয়ে দেয়। সম্পর্ক রক্ষাকারী সে নয় যে পাওয়ার বিনিময়ে ফিরিয়ে দেয়; সে-ই, যে সম্পর্ক ছিন্ন হওয়ার পরও তা জুড়ে রাখে। এই একটি বাক্যই মানুষ ফোন না করার পক্ষে যত যুক্তি দেয় তার প্রায় সবগুলোকে খারিজ করে দেয়।',
      },
    ],
    verses: [
      {
        ref: '4:1',
        note: {
          en: 'The opening verse of a surah about family law: fear Allah, through whom you ask one another, and the wombs — al-arḥām. Kinship is placed grammatically alongside the name of Allah in the sentence about consciousness of Him.',
          bn: 'পারিবারিক বিধান নিয়ে একটি সূরার প্রথম আয়াত: আল্লাহকে ভয় করো, যাঁর নামে তোমরা একে অপরের কাছে চাও, আর আত্মীয়তার বন্ধনকেও — আল-আরহাম। তাঁর ব্যাপারে সচেতনতার বাক্যে আত্মীয়তাকে ব্যাকরণগতভাবে আল্লাহর নামের পাশেই রাখা হয়েছে।',
        },
      },
      {
        ref: '13:21',
        note: {
          en: 'Listed among the qualities of those who receive the good end: those who join what Allah has commanded to be joined. It sits between fearing their Lord and dreading a bad reckoning — company that indicates its weight.',
          bn: 'যাঁরা উত্তম পরিণাম পান তাঁদের গুণাবলির মধ্যে তালিকাভুক্ত: যারা আল্লাহ যা জোড়া রাখার নির্দেশ দিয়েছেন তা জোড়া রাখে। এটি বসে আছে রবকে ভয় করা আর মন্দ হিসাবের আশঙ্কার মাঝখানে — যে সঙ্গ এর ভার বুঝিয়ে দেয়।',
        },
      },
      {
        ref: '47:22-23',
        note: {
          en: 'The severest wording in the Qur’an on a social matter: would you, if you turned away, spread corruption and sever your ties of kinship? Those are the ones Allah has cursed, deafened and blinded. Cutting family is put in the same sentence as corruption in the land.',
          bn: 'সামাজিক কোনো বিষয়ে কুরআনের সবচেয়ে কঠোর ভাষা: তোমরা কি মুখ ফিরিয়ে নিলে জমিনে বিপর্যয় ঘটাবে আর আত্মীয়তার বন্ধন ছিন্ন করবে? তারাই তারা, যাদের আল্লাহ অভিশাপ দিয়েছেন, বধির ও অন্ধ করেছেন। পরিবার ছিন্ন করাকে রাখা হয়েছে জমিনে বিপর্যয় সৃষ্টির সাথে একই বাক্যে।',
        },
      },
      {
        ref: '16:90',
        note: {
          en: 'Three commands, and giving to relatives is the third — placed after justice and iḥsān as though it were a category of its own rather than an example of them.',
          bn: 'তিনটি নির্দেশ, আর আত্মীয়কে দেওয়া তৃতীয়টি — ন্যায় ও ইহসানের পরে স্থাপিত, যেন এটি তাদের উদাহরণ নয়, নিজেই একটি আলাদা শ্রেণি।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 5991',
        text: {
          en: 'The Prophet ﷺ said: “The one who maintains ties of kinship is not the one who reciprocates. The one who maintains ties is the one who, when his ties are cut off, joins them again.”',
          bn: 'নবী ﷺ বলেছেন: “সম্পর্ক রক্ষাকারী সে নয় যে বিনিময়ে ফিরিয়ে দেয়। সম্পর্ক রক্ষাকারী সে-ই, যার সম্পর্ক ছিন্ন করা হলে সে আবার তা জুড়ে দেয়।”',
        },
        note: {
          en: 'A definition replaced rather than expanded. By this wording, the family member who is difficult is not an exception to the duty — they are the situation the duty was written for.',
          bn: 'সংজ্ঞাটি প্রসারিত নয়, প্রতিস্থাপিত। এই ভাষায়, যে আত্মীয় কঠিন, তিনি দায়িত্বের ব্যতিক্রম নন — তিনিই সেই পরিস্থিতি, যার জন্য দায়িত্বটি লেখা হয়েছে।',
        },
      },
      {
        src: 'Sahih al-Bukhari 5985, Sahih Muslim 2557',
        text: {
          en: 'The Prophet ﷺ said: “Whoever would love to have his provision expanded and his life extended, let him keep the ties of kinship.”',
          bn: 'নবী ﷺ বলেছেন: “যে চায় তার রিজিক প্রশস্ত হোক আর আয়ু দীর্ঘ হোক, সে যেন আত্মীয়তার বন্ধন রক্ষা করে।”',
        },
        note: {
          en: 'Two worldly returns named for a duty most people treat as pure obligation. Read next to 71:12 and 11:52, it is the same pattern: the Qur’an and Sunnah keep attaching material outcomes to acts of the heart.',
          bn: 'যে দায়িত্বকে বেশিরভাগ মানুষ নিছক বাধ্যবাধকতা মনে করে, তার জন্য দুটি পার্থিব প্রতিদানের নাম। ৭১:১২ ও ১১:৫২-এর পাশে রেখে পড়লে একই ধরন: কুরআন ও সুন্নাহ বারবার অন্তরের কাজের সাথে বস্তুগত ফল জুড়ে দেয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Contact the relative you are waiting to hear from. Bukhari 5991 says the waiting itself disqualifies the claim.',
        bn: 'যে আত্মীয়ের ফোনের অপেক্ষায় আছেন, তাঁকেই যোগাযোগ করুন। বুখারি ৫৯৯১ বলে, অপেক্ষা করাটাই দাবিটিকে বাতিল করে দেয়।',
      },
      {
        en: 'Keep it short and repeat it. A two-minute call every week rebuilds a tie that a long annual visit does not.',
        bn: 'সংক্ষিপ্ত রাখুন আর বারবার করুন। সপ্তাহে দুই মিনিটের একটি কল সেই বন্ধন গড়ে যা বছরে একবারের দীর্ঘ সাক্ষাৎ গড়ে না।',
      },
      {
        en: 'Separate the tie from the dispute. Keeping ties does not mean conceding the argument or accepting harm; it means the line stays open.',
        bn: 'বন্ধনটিকে বিরোধ থেকে আলাদা করুন। সম্পর্ক রক্ষা মানে তর্কে হার মেনে নেওয়া বা ক্ষতি মেনে নেওয়া নয়; মানে যোগাযোগের পথটি খোলা থাকা।',
      },
    ],
  },

  {
    id: 'mercy-to-creation',
    wing: 'character',
    emoji: '\u{1F343}',
    title: { en: 'Mercy to Every Living Thing', bn: 'প্রতিটি প্রাণের প্রতি দয়া' },
    tagline: {
      en: 'A woman entered the Fire over a cat and a man entered Paradise over a dog. Neither hadith is about animals.',
      bn: 'এক নারী জাহান্নামে গেছেন একটা বিড়ালের কারণে, আর এক লোক জান্নাতে গেছেন একটা কুকুরের কারণে। হাদিস দুটোর একটাও আসলে পশু নিয়ে নয়।',
    },
    dua: {
      ref: '2:201',
      why: {
        en: 'Good in this world and good in the Hereafter. A person who has understood that the earth is a trust asks for both, because what happens here is not separable from what comes after.',
        bn: 'দুনিয়ায় কল্যাণ আর আখিরাতেও কল্যাণ। যে বুঝেছে পৃথিবীটা একটি আমানত, সে দুটোই চায়, কারণ এখানে যা ঘটে তা পরে যা আসে তার থেকে আলাদা নয়।',
      },
    },
    intro: [
      {
        en: 'The Qur’an describes animals as ummam amthālukum — communities like you — and states that nothing has been left out of the Register. It sets a balance in the heavens and forbids transgressing it. And it says plainly that corruption appeared on land and sea by what human hands earned. The environment is not a modern addition to Islamic ethics; it is where a good deal of the Qur’an’s ethics is set.',
        bn: 'কুরআন প্রাণীদের বর্ণনা করে উমামুন আমসালুকুম হিসেবে — তোমাদের মতোই সম্প্রদায় — আর বলে যে কিতাবে কিছুই বাদ দেওয়া হয়নি। এটি আসমানে একটি ভারসাম্য স্থাপন করে আর তা লঙ্ঘন করতে নিষেধ করে। আর স্পষ্ট বলে, মানুষের হাতের কামাইয়ের কারণেই স্থলে ও সমুদ্রে বিপর্যয় দেখা দিয়েছে। পরিবেশ ইসলামি নৈতিকতায় আধুনিক কোনো সংযোজন নয়; কুরআনের নৈতিকতার অনেকটাই সেখানেই স্থাপিত।',
      },
      {
        en: 'The Sunnah then makes it personal in the most uncomfortable way available. Two of the best-known hadith about Paradise and the Fire turn on how somebody treated an animal that could do nothing for them. Mercy is being tested where there is no possibility of return, which is where it is most honest.',
        bn: 'এরপর সুন্নাহ বিষয়টিকে সবচেয়ে অস্বস্তিকর উপায়ে ব্যক্তিগত করে তোলে। জান্নাত ও জাহান্নাম নিয়ে সবচেয়ে পরিচিত দুটি হাদিসের মোড় ঘোরে এই বিন্দুতে যে, কেউ এমন এক প্রাণীর সাথে কেমন আচরণ করেছিল যে তার জন্য কিছুই করতে পারত না। দয়াকে পরীক্ষা করা হচ্ছে সেখানেই যেখানে প্রতিদানের কোনো সম্ভাবনা নেই, আর সেখানেই তা সবচেয়ে সৎ।',
      },
    ],
    verses: [
      {
        ref: '6:38',
        note: {
          en: 'No creature on the earth and no bird flying on its wings but that they are communities like you. Umam is the same word used for human nations, and the verse says nothing was neglected in the Book.',
          bn: 'জমিনে এমন কোনো প্রাণী নেই আর দুই ডানায় ওড়ে এমন কোনো পাখি নেই, যারা তোমাদের মতোই সম্প্রদায় নয়। উমাম সেই একই শব্দ যা মানব জাতিসমূহের জন্য ব্যবহৃত হয়, আর আয়াতটি বলে কিতাবে কিছুই অবহেলিত হয়নি।',
        },
      },
      {
        ref: '55:7-9',
        note: {
          en: 'He raised the heaven and set the balance, so do not transgress in the balance — and then, establish weight with justice and do not make the balance deficient. Cosmic order and honest weighing in a shop are given the same word, mīzān.',
          bn: 'তিনি আকাশ উঁচু করেছেন আর ভারসাম্য স্থাপন করেছেন, তাই ভারসাম্যে সীমালঙ্ঘন কোরো না — তারপর, ন্যায়ের সাথে ওজন প্রতিষ্ঠা করো আর ভারসাম্যে ঘাটতি কোরো না। মহাজাগতিক শৃঙ্খলা আর দোকানে সৎ ওজনকে একই শব্দ দেওয়া হয়েছে, মীযান।',
        },
      },
      {
        ref: '30:41',
        note: {
          en: 'Corruption has appeared on land and sea by what people’s hands have earned — and the stated purpose is that He may make them taste part of it, so that perhaps they will return. The damage is described as a message, not only as a consequence.',
          bn: 'মানুষের হাতের কামাইয়ের কারণে স্থলে ও সমুদ্রে বিপর্যয় দেখা দিয়েছে — আর ঘোষিত উদ্দেশ্য হলো তিনি তাদের তার কিছুটা স্বাদ চাখাবেন, যাতে তারা হয়তো ফিরে আসে। ক্ষতিকে বর্ণনা করা হয়েছে বার্তা হিসেবে, কেবল পরিণতি হিসেবে নয়।',
        },
      },
      {
        ref: '7:31',
        note: {
          en: 'Eat and drink but do not be excessive — and the closing clause is that He does not love those who commit excess. An instruction about consumption placed inside a verse about coming to the masjid.',
          bn: 'খাও ও পান করো, কিন্তু অপচয় কোরো না — আর শেষ বাক্যাংশ হলো, তিনি অপচয়কারীদের ভালোবাসেন না। ভোগ নিয়ে একটি নির্দেশ রাখা হয়েছে মসজিদে আসা নিয়ে একটি আয়াতের ভেতরে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih al-Bukhari 3318, Sahih Muslim 2242',
        text: {
          en: 'The Prophet ﷺ said: “A woman was punished because of a cat which she confined until it died. She did not feed it, nor did she let it free to eat from the vermin of the earth.”',
          bn: 'নবী ﷺ বলেছেন: “এক নারীকে শাস্তি দেওয়া হয়েছিল একটি বিড়ালের কারণে, যাকে সে আটকে রেখেছিল যতক্ষণ না তা মারা যায়। সে তাকে খেতেও দেয়নি, আর ছেড়েও দেয়নি যে সে জমিনের পোকামাকড় খেয়ে বাঁচবে।”',
        },
        note: {
          en: 'The offence is stated twice — she neither fed it nor released it. Both options were free. What is being condemned is not cruelty so much as the refusal of a small mercy that cost nothing.',
          bn: 'অপরাধটি দুইবার বলা হয়েছে — সে না খেতে দিল, না ছেড়ে দিল। দুটি বিকল্পই ছিল বিনামূল্যের। যা নিন্দিত হচ্ছে তা নিষ্ঠুরতার চেয়ে বেশি, এমন ছোট এক দয়া প্রত্যাখ্যান যার কোনো খরচ ছিল না।',
        },
      },
      {
        src: 'Sahih al-Bukhari 173, Sahih Muslim 2244',
        text: {
          en: 'The Prophet ﷺ said: “A man was walking and became very thirsty. He went down into a well and drank, and came out. Then he saw a dog panting and eating the earth from thirst, and said: ‘This dog has reached the state of thirst I had reached.’ So he went down into the well, filled his shoe, held it in his teeth and climbed out, and gave the dog to drink. Allah thanked him for it and forgave him.” They said: “O Messenger of Allah, is there reward for us in animals?” He said: “In every living creature there is a reward.”',
          bn: 'নবী ﷺ বলেছেন: “এক ব্যক্তি পথ চলছিল আর প্রচণ্ড পিপাসার্ত হলো। সে একটি কূপে নেমে পানি পান করে উঠে এল। তারপর দেখল একটি কুকুর পিপাসায় হাঁপাচ্ছে আর মাটি চাটছে, আর সে বলল: ‘আমার যে পিপাসা হয়েছিল, এই কুকুরটিরও তা-ই হয়েছে।’ তাই সে কূপে নেমে নিজের মোজা ভরে নিল, দাঁতে কামড়ে ধরে উঠে এল, আর কুকুরটিকে পান করাল। আল্লাহ তার এই কাজের কৃতজ্ঞতা জানালেন আর তাকে ক্ষমা করে দিলেন।” তাঁরা বললেন: “হে আল্লাহর রাসূল, পশুর ব্যাপারেও কি আমাদের প্রতিদান আছে?” তিনি বললেন: “প্রতিটি জীবিত প্রাণেই প্রতিদান আছে।”',
        },
        note: {
          en: 'He had already drunk. Nothing obliged him to go back down. The forgiveness is attached to a piece of trouble taken for a creature that could not thank him, which is the same logic as 76:9.',
          bn: 'সে তো পান করেই ফেলেছিল। আবার নামতে তাকে কিছুই বাধ্য করেনি। ক্ষমাটি যুক্ত এমন এক কষ্ট স্বীকারের সাথে, যা করা হয়েছিল এমন এক প্রাণীর জন্য যে ধন্যবাদই দিতে পারত না — ৭৬:৯-এর সেই একই যুক্তি।',
        },
      },
      {
        src: 'Sahih Muslim 1955',
        text: {
          en: 'The Prophet ﷺ said: “Allah has prescribed excellence in everything. So if you kill, kill well; and if you slaughter, slaughter well. Let each of you sharpen his blade and spare the animal he slaughters.”',
          bn: 'নবী ﷺ বলেছেন: “আল্লাহ প্রতিটি বিষয়েই ইহসান নির্ধারণ করেছেন। তাই যখন হত্যা করো, উত্তমভাবে করো; আর যখন জবাই করো, উত্তমভাবে জবাই করো। তোমাদের প্রত্যেকে যেন নিজের ছুরি ধারালো করে নেয় আর যে প্রাণীটি জবাই করছে তাকে স্বস্তি দেয়।”',
        },
        note: {
          en: 'Iḥsān is required even in the act of killing, which is the strongest possible statement of how far the requirement extends. There is no situation the Sunnah leaves outside it.',
          bn: 'হত্যার কাজেও ইহসান আবশ্যক, আর এই দাবিটি কতদূর বিস্তৃত তার এর চেয়ে জোরালো ঘোষণা হয় না। সুন্নাহ এমন কোনো পরিস্থিতি রাখে না যা এর বাইরে।',
        },
      },
    ],
    practice: [
      {
        en: 'Put water out for something this week — a bird, a cat, the animals near where you live. The hadith of the well makes that the whole act.',
        bn: 'এই সপ্তাহে কিছুর জন্য পানি রাখুন — একটি পাখি, একটি বিড়াল, আপনার আশপাশের প্রাণীরা। কূপের হাদিসটি এটুকুকেই পুরো কাজ বানায়।',
      },
      {
        en: 'Cut one habit of waste — food thrown out, water left running. 7:31 names excess, and 30:41 says the damage is meant to be read as a message.',
        bn: 'অপচয়ের একটি অভ্যাস বাদ দিন — ফেলে দেওয়া খাবার, খোলা রাখা কল। ৭:৩১ অপচয়ের নাম বলে, আর ৩০:৪১ বলে ক্ষতিটিকে বার্তা হিসেবে পড়াই উদ্দিষ্ট।',
      },
      {
        en: 'Notice where you are merciful only when it is seen. The cat and the dog are both stories about conduct with no audience.',
        bn: 'লক্ষ করুন কোথায় আপনি কেবল দেখা যাওয়ার সময়েই দয়ালু। বিড়াল আর কুকুরের গল্প দুটোই দর্শকহীন আচরণ নিয়ে।',
      },
    ],
  },

  {
    id: 'knowledge',
    wing: 'character',
    emoji: '\u{1F4D6}',
    title: { en: 'Knowledge and Its Manners', bn: 'ইলম ও তার আদব' },
    tagline: {
      en: 'The only thing the Prophet ﷺ was commanded to ask for more of was knowledge — and the Qur’an ties it to fear, not to status.',
      bn: 'নবী ﷺ-কে আর কিছু বাড়িয়ে চাইতে বলা হয়নি, একমাত্র ইলম ছাড়া। আর কুরআন ইলমকে জুড়ে দিয়েছে আল্লাহভীতির সঙ্গে, মর্যাদার সঙ্গে নয়।',
    },
    dua: {
      ref: '20:114',
      why: {
        en: 'Rabbi zidni ‘ilma. It is the only place in the Qur’an where the Prophet ﷺ is instructed to ask for an increase in anything, and the thing named is knowledge.',
        bn: 'রাব্বি যিদনী ইলমা। কুরআনে এটিই একমাত্র জায়গা যেখানে নবী ﷺ-কে কোনো কিছুর বৃদ্ধি চাইতে নির্দেশ দেওয়া হয়েছে, আর যার নাম বলা হয়েছে তা জ্ঞান।',
      },
    },
    intro: [
      {
        en: 'The first word revealed was a command to read. But the Qur’an is careful about what knowledge is for: it says that among His servants, it is those with knowledge who fear Allah. The test of learning is not what a person can now argue; it is what they have become quieter about.',
        bn: 'প্রথম নাজিলকৃত শব্দটি ছিল পড়ার নির্দেশ। কিন্তু জ্ঞান কীসের জন্য, সে ব্যাপারে কুরআন সতর্ক: এটি বলে, তাঁর বান্দাদের মধ্যে জ্ঞানীরাই আল্লাহকে ভয় করে। শেখার পরীক্ষা এই নয় যে মানুষ এখন কী তর্ক করতে পারে; পরীক্ষা হলো সে কোন বিষয়ে আগের চেয়ে নীরব হয়েছে।',
      },
      {
        en: 'This chapter sits at the end of the character wing because it is the one most easily turned into its opposite. Knowledge is the quickest route to the arrogance that Muslim 91 defines as rejecting truth and looking down on people, and the Sunnah warns about it directly. What protects it is the manner it is carried with — which is exactly what the nineteen chapters before it were about.',
        bn: 'এই অধ্যায়টি চরিত্র-অংশের শেষে, কারণ এটিকেই সবচেয়ে সহজে তার উল্টো জিনিসে পরিণত করা যায়। মুসলিম ৯১ যে অহংকারের সংজ্ঞা দেয় — সত্য প্রত্যাখ্যান আর মানুষকে তুচ্ছ করা — জ্ঞানই সেখানে পৌঁছানোর দ্রুততম পথ, আর সুন্নাহ সরাসরি সে ব্যাপারে সতর্ক করে। যা একে রক্ষা করে তা হলো বহন করার ভঙ্গি — আর তার আগের ঊনিশটি অধ্যায় ঠিক সেটিরই কথা বলছিল।',
      },
    ],
    verses: [
      {
        ref: '20:114',
        note: {
          en: 'Preceded by an instruction not to hurry with the Qur’an before its revelation is completed — patience first, then the request for more. The order is a lesson about how knowledge is actually acquired.',
          bn: 'এর আগে নির্দেশ, ওহি সম্পূর্ণ হওয়ার আগে কুরআন নিয়ে তাড়াহুড়ো না করতে — আগে ধৈর্য, তারপর আরও চাওয়ার আবেদন। ক্রমটিই শিক্ষা দেয়, জ্ঞান আসলে কীভাবে অর্জিত হয়।',
        },
      },
      {
        ref: '35:28',
        note: {
          en: 'The verse lists the colours of mountains, people and animals, then concludes: only those of His servants who have knowledge fear Allah. Fear is presented as the result of looking carefully, not as an alternative to it.',
          bn: 'আয়াতটি পাহাড়, মানুষ ও প্রাণীর রঙের কথা বলে, তারপর উপসংহার টানে: তাঁর বান্দাদের মধ্যে কেবল জ্ঞানীরাই আল্লাহকে ভয় করে। ভয়কে উপস্থাপন করা হয়েছে মনোযোগ দিয়ে দেখার ফল হিসেবে, তার বিকল্প হিসেবে নয়।',
        },
      },
      {
        ref: '58:11',
        note: {
          en: 'A verse about making room for people in a gathering, which then promises that Allah raises those who believe and those given knowledge in degrees. The etiquette and the elevation are in the same verse, in that order.',
          bn: 'মজলিসে মানুষকে জায়গা করে দেওয়া নিয়ে একটি আয়াত, যা এরপর প্রতিশ্রুতি দেয় যে আল্লাহ ঈমানদারদের আর যাদের জ্ঞান দেওয়া হয়েছে তাদের মর্যাদায় উন্নীত করবেন। আদব আর উন্নতি একই আয়াতে, এই ক্রমেই।',
        },
      },
      {
        ref: '39:9',
        note: {
          en: 'Are those who know equal to those who do not know? The question follows a description of someone standing at night — the knowledge being contrasted is not information but the state it produces.',
          bn: 'যারা জানে আর যারা জানে না, তারা কি সমান? প্রশ্নটি আসে রাতে দাঁড়ানো এক মানুষের বর্ণনার পরে — যে জ্ঞানের তুলনা করা হচ্ছে তা তথ্য নয়, বরং তা যে অবস্থা তৈরি করে।',
        },
      },
    ],
    hadith: [
      {
        src: 'Sahih Muslim 2699',
        text: {
          en: 'The Prophet ﷺ said: “Whoever treads a path seeking knowledge, Allah makes easy for him a path to Paradise. No people gather in a house of Allah, reciting the Book of Allah and studying it among themselves, but that tranquility descends upon them, mercy covers them, the angels surround them, and Allah mentions them to those with Him.”',
          bn: 'নবী ﷺ বলেছেন: “যে জ্ঞানের সন্ধানে পথ চলে, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন। কোনো দল আল্লাহর কোনো ঘরে একত্র হয়ে আল্লাহর কিতাব তিলাওয়াত করে ও নিজেদের মধ্যে তা অধ্যয়ন করে না, কিন্তু তাদের উপর প্রশান্তি নেমে আসে, রহমত তাদের ঢেকে নেয়, ফেরেশতারা তাদের ঘিরে ধরেন, আর আল্লাহ তাঁর কাছে যাঁরা আছেন তাঁদের কাছে তাদের কথা উল্লেখ করেন।”',
        },
        note: {
          en: 'Four things descend on a study circle and not one of them is understanding. Tranquility, mercy, angels, and being mentioned by Allah — the gathering is described as worship before it is described as learning.',
          bn: 'একটি অধ্যয়নের মজলিসে চারটি জিনিস নেমে আসে, আর তার একটিও বোঝাপড়া নয়। প্রশান্তি, রহমত, ফেরেশতা, আর আল্লাহর কাছে উল্লেখিত হওয়া — সমাবেশটিকে শেখা বলার আগে ইবাদত বলা হচ্ছে।',
        },
      },
      {
        src: 'Sunan Abu Dawud 3641, Jami‘ at-Tirmidhi 2682 (hasan)',
        text: {
          en: 'The Prophet ﷺ said: “The scholars are the heirs of the prophets. The prophets left neither dinar nor dirham as inheritance; they left knowledge, and whoever takes it has taken an abundant share.”',
          bn: 'নবী ﷺ বলেছেন: “আলিমগণ নবীদের উত্তরাধিকারী। নবীগণ উত্তরাধিকার হিসেবে দিনার বা দিরহাম রেখে যাননি; তাঁরা রেখে গেছেন জ্ঞান, আর যে তা গ্রহণ করল সে প্রচুর অংশ গ্রহণ করল।”',
        },
        note: {
          en: 'Inheritance is the metaphor, which makes knowledge something received and passed on rather than produced. An heir who behaves as though he built the estate has misread his position.',
          bn: 'উপমাটি উত্তরাধিকারের, যা জ্ঞানকে বানানো নয়, বরং গ্রহণ করা ও হস্তান্তর করার বিষয় করে তোলে। যে উত্তরাধিকারী এমন আচরণ করে যেন সম্পত্তিটি সে-ই গড়েছে, সে নিজের অবস্থানই ভুল বুঝেছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Learn one thing well rather than five things partly. 20:114 comes after an instruction not to hurry.',
        bn: 'পাঁচটি জিনিস আধাআধি নয়, একটি জিনিস ভালোভাবে শিখুন। ২০:১১৪ আসে তাড়াহুড়ো না করার নির্দেশের পরে।',
      },
      {
        en: 'Say “I don’t know” when you don’t, especially in religion. Answering a question about Allah’s ruling with a guess is a different order of mistake from staying silent.',
        bn: 'না জানলে বলুন “আমি জানি না”, বিশেষত দ্বীনের ব্যাপারে। আল্লাহর বিধান নিয়ে প্রশ্নের উত্তরে অনুমান বলা আর চুপ থাকা — দুটি সম্পূর্ণ ভিন্ন মাপের ভুল।',
      },
      {
        en: 'Check what your learning has made you quieter about. 35:28 gives one measurable output of knowledge, and it is not fluency.',
        bn: 'যাচাই করুন, আপনার শেখা আপনাকে কোন বিষয়ে আগের চেয়ে নীরব করেছে। ৩৫:২৮ জ্ঞানের একটি মাপযোগ্য ফল দেয়, আর তা বাগ্মিতা নয়।',
      },
    ],
  },

];
