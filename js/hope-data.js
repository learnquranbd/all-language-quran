/**
 * Hope & Character — DATA MODULE
 *
 * Two wings that belong together:
 *
 *   1. MERCY (rahmah / maghfirah / 'afw) — for the reader who has sinned and is
 *      close to giving up. Nine chapters, each built on verses that say the same
 *      thing from a different angle: the door is open, and it is open to you.
 *   2. CHARACTER (akhlaq) — the qualities of the ideal Muslim as the Qur'an and
 *      the Sunnah actually describe them. Sixteen chapters, so that hope has
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
    bn: 'যে ভাবছে সে অনেক দূর চলে গেছে, তার জন্য — আর যে নিজের প্রকৃত রূপে ফিরতে প্রস্তুত, তার জন্যও।',
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
    en: 'Search chapters, verses, qualities…', bn: 'অধ্যায়, আয়াত, গুণ খুঁজুন…',
    ar: 'ابحث في الفصول والآيات والصفات…', ur: 'ابواب، آیات، صفات تلاش کریں…',
    id: 'Cari bab, ayat, sifat…', tr: 'Bölüm, ayet, vasıf ara…',
    fr: 'Rechercher chapitres, versets, qualités…', es: 'Buscar capítulos, versículos, cualidades…',
    ru: 'Искать главы, аяты, качества…', fa: 'جستجوی فصل‌ها، آیات، صفات…',
    hi: 'अध्याय, आयतें, गुण खोजें…', de: 'Kapitel, Verse, Eigenschaften suchen…',
    ms: 'Cari bab, ayat, sifat…', zh: '搜索章节、经文、品格…', ja: '章・節・徳目を検索…',
  },
  hope_none: {
    en: 'Nothing matches your search.', bn: 'আপনার অনুসন্ধানে কিছু মেলেনি।',
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
    en: 'Put it into practice', bn: 'বাস্তবে প্রয়োগ করুন', ar: 'ضعه موضع التطبيق',
    ur: 'عمل میں لائیں', id: 'Terapkan dalam praktik', tr: 'Hayata geçirin',
    fr: 'Mettez-le en pratique', es: 'Ponlo en práctica', ru: 'Примените на деле',
    fa: 'آن را به عمل درآورید', hi: 'इसे व्यवहार में लाएँ', de: 'In die Praxis umsetzen',
    ms: 'Amalkan ia', zh: '付诸实践', ja: '実践に移す',
  },
  hope_steps_title: {
    en: 'What repentance actually requires', bn: 'তওবার জন্য আসলে যা যা লাগে',
    ar: 'ما تقتضيه التوبة حقًّا', ur: 'توبہ کے لیے اصل میں کیا درکار ہے',
    id: 'Apa yang sebenarnya dituntut oleh taubat', tr: 'Tövbe gerçekte neyi gerektirir',
    fr: 'Ce que le repentir exige réellement', es: 'Lo que el arrepentimiento realmente exige',
    ru: 'Что на самом деле требует покаяние', fa: 'توبه در واقع چه می‌طلبد',
    hi: 'तौबा के लिए वास्तव में क्या आवश्यक है', de: 'Was Reue tatsächlich verlangt',
    ms: 'Apa yang sebenarnya dituntut oleh taubat', zh: '忏悔真正需要什么',
    ja: '悔い改めが実際に求めるもの',
  },
  hope_read: {
    en: 'Mark as read', bn: 'পড়া হয়েছে চিহ্নিত করুন', ar: 'وضع علامة كمقروء',
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
    en: 'I’m working on this', bn: 'আমি এটি নিয়ে কাজ করছি', ar: 'أعمل على هذا',
    ur: 'میں اس پر کام کر رہا ہوں', id: 'Saya sedang mengusahakan ini',
    tr: 'Bunun üzerinde çalışıyorum', fr: 'J’y travaille', es: 'Estoy trabajando en esto',
    ru: 'Я работаю над этим', fa: 'روی این کار می‌کنم', hi: 'मैं इस पर काम कर रहा हूँ',
    de: 'Daran arbeite ich', ms: 'Saya sedang mengusahakan ini', zh: '我正在修养这一点',
    ja: 'これに取り組んでいます',
  },
  hope_focus_on: {
    en: 'Working on it', bn: 'কাজ চলছে', ar: 'قيد العمل', ur: 'کام جاری ہے',
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
    en: 'A note on hope', bn: 'আশা সম্পর্কে একটি কথা', ar: 'كلمة عن الرجاء',
    ur: 'اُمید کے بارے میں ایک بات', id: 'Sepatah kata tentang harapan',
    tr: 'Ümit üzerine bir not', fr: 'Un mot sur l’espoir', es: 'Una nota sobre la esperanza',
    ru: 'Слово о надежде', fa: 'سخنی دربارهٔ امید', hi: 'आशा पर एक टिप्पणी',
    de: 'Eine Anmerkung zur Hoffnung', ms: 'Sepatah kata tentang harapan',
    zh: '关于希望的一点说明', ja: '希望についての一言',
  },
  hope_note_body: {
    en: 'Hope in Allah is not a licence to sin, and fear of Allah is not despair. The Qur’an keeps them in one hand: the same Lord who says He forgives every sin also says His punishment is the painful punishment. This section leans on mercy because mercy is what a struggling person needs to hear — and then it asks something of you, which is what the second half is for.',
    bn: 'আল্লাহর প্রতি আশা পাপের অনুমতি নয়, আর আল্লাহর ভয় নিরাশা নয়। কুরআন দুটোকে একসাথে ধরে রাখে: যিনি বলেন তিনি সব গুনাহ ক্ষমা করেন, তিনিই বলেন তাঁর শাস্তি যন্ত্রণাদায়ক শাস্তি। এই অংশটি রহমতের দিকে ঝুঁকে আছে, কারণ সংগ্রামরত মানুষের সেটাই শোনা দরকার — এরপর এটি আপনার কাছে কিছু চায়, দ্বিতীয় অংশটি সেজন্যই।',
  },
  hope_disclaimer: {
    en: 'An educational selection in the mainstream Sunni tradition. Verse text and translation come from the app’s own Qur’an data; hadith are given in translation with their collection cited. For rulings on your own situation, ask a qualified scholar.',
    bn: 'মূলধারার সুন্নি ঐতিহ্যে একটি শিক্ষামূলক সংকলন। আয়াতের মূল পাঠ ও অনুবাদ অ্যাপের নিজস্ব কুরআন ডেটা থেকে; হাদিস অনুবাদসহ গ্রন্থের নামসহ দেওয়া হয়েছে। নিজের অবস্থার বিধান জানতে যোগ্য আলিমের কাছে জানুন।',
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
      en: 'Nine chapters for the reader who is afraid it is too late. Every one of them is Allah saying, in a different way, that it is not.',
      bn: 'যে ভয় পাচ্ছে অনেক দেরি হয়ে গেছে, তার জন্য নয়টি অধ্যায়। প্রতিটিই আল্লাহর ভিন্ন ভিন্ন ভাষায় একই কথা — দেরি হয়নি।',
    },
  },
  {
    id: 'character',
    emoji: '\u{1F331}',
    title: { en: 'The Beautiful Character', bn: 'সুন্দর চরিত্র' },
    blurb: {
      en: 'Sixteen chapters on what a forgiven person then becomes — the qualities of the model Muslim as the Qur’an and the Sunnah describe them, not as we imagine them.',
      bn: 'ক্ষমাপ্রাপ্ত মানুষ এরপর কী হয়ে ওঠে, তা নিয়ে ষোলোটি অধ্যায় — আদর্শ মুসলিমের গুণাবলি, যেমন কুরআন ও সুন্নাহ বর্ণনা করে, আমাদের কল্পনা অনুযায়ী নয়।',
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
      bn: 'পাপটি এখনই ছাড়ুন, সপ্তাহের শেষে নয়। কাজটি আঁকড়ে ধরে রেখে তওবা করা একটি ইচ্ছা মাত্র, ফিরে আসা নয় — ৪:১৮ সীমারেখা টানে সেই মুহূর্তে, যখন মানুষ মৃত্যু দরজায় আসা পর্যন্ত চালিয়ে যায়।',
    },
  },
  {
    n: 2,
    title: { en: 'Regret it', bn: 'অনুতপ্ত হোন' },
    body: {
      en: 'Feel the weight of what you did rather than explaining it away. The Prophet ﷺ said that regret is repentance — the ache itself is already part of the turning back, not a sign that you have failed.',
      bn: 'যা করেছেন তার ভার অনুভব করুন, ব্যাখ্যা দিয়ে হালকা করবেন না। নবী ﷺ বলেছেন, অনুশোচনাই তওবা — সেই কষ্টটুকুই ফিরে আসার অংশ, ব্যর্থতার চিহ্ন নয়।',
    },
  },
  {
    n: 3,
    title: { en: 'Resolve not to return', bn: 'ফিরে না যাওয়ার সংকল্প করুন' },
    body: {
      en: 'Decide, honestly, that you are finished with it. The resolve is judged as you make it. If you later slip, you repent again — a broken resolve does not retroactively cancel the one you made sincerely.',
      bn: 'সৎভাবে সিদ্ধান্ত নিন যে এটি আপনার জন্য শেষ। সংকল্পটি যখন করছেন সেই অবস্থাতেই বিচার্য। পরে যদি পা পিছলে যায়, আবার তওবা করবেন — সংকল্প ভাঙলে আগের আন্তরিক সংকল্পটি বাতিল হয়ে যায় না।',
    },
  },
  {
    n: 4,
    title: { en: 'Return what is owed', bn: 'অন্যের হক ফিরিয়ে দিন' },
    body: {
      en: 'If a person was wronged, a fourth condition applies: give back the money, clear the name, ask their pardon. Rights between Allah and you are forgiven by asking; rights between you and a person are not, until that person is made whole.',
      bn: 'কারও প্রতি অন্যায় হয়ে থাকলে চতুর্থ শর্ত প্রযোজ্য: টাকা ফিরিয়ে দিন, সুনাম ফিরিয়ে দিন, তার ক্ষমা চান। আল্লাহ ও আপনার মধ্যকার হক চাইলেই মাফ হয়; কিন্তু বান্দার হক ততক্ষণ নয়, যতক্ষণ না তার ক্ষতিপূরণ হয়।',
    },
  },
  {
    n: 5,
    title: { en: 'Do it before the door shuts', bn: 'দরজা বন্ধ হওয়ার আগেই করুন' },
    body: {
      en: 'The Prophet ﷺ said Allah accepts a servant’s repentance as long as the soul has not reached the throat. That is a deadline, and it is also a guarantee: until that moment, no amount of history disqualifies you.',
      bn: 'নবী ﷺ বলেছেন, প্রাণ কণ্ঠাগত না হওয়া পর্যন্ত আল্লাহ বান্দার তওবা কবুল করেন। এটি একটি সময়সীমা, আবার একটি নিশ্চয়তাও: সেই মুহূর্ত পর্যন্ত অতীত যত ভারীই হোক, আপনি অযোগ্য নন।',
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
      bn: 'আপনি যদি ভাবেন সুযোগ ফুরিয়ে গেছে, তবে সবার আগে পড়ার আয়াতটি।',
    },
    intro: [
      {
        en: 'There is a verse in the Qur’an that begins by calling the worst of us “My servants.” Not “those people,” not “the sinners” — ‘ibādī, My servants, spoken by Allah about people described in the same breath as having gone to excess against their own souls. The address comes before the diagnosis. Whatever you have done, you are being spoken to as one who belongs to Him.',
        bn: 'কুরআনে এমন একটি আয়াত আছে যা আমাদের মধ্যে সবচেয়ে খারাপ মানুষকেও ডাকে “আমার বান্দাগণ” বলে। “ওই লোকগুলো” নয়, “পাপীরা” নয় — ইবাদি, আমার বান্দাগণ, আল্লাহ এমন মানুষদের সম্পর্কে বলছেন যাদের একই বাক্যে বর্ণনা করা হয়েছে নিজেদের উপর বাড়াবাড়িকারী হিসেবে। রোগনির্ণয়ের আগেই সম্বোধন। আপনি যা-ই করে থাকুন, আপনাকে সম্বোধন করা হচ্ছে তাঁরই একজন হিসেবে।',
      },
      {
        en: 'The Qur’an treats despair as a serious error, not as humility. In 12:87 Ya‘qub (AS) tells his sons that only disbelieving people despair of relief from Allah. In 15:56 Ibrahim (AS), told he will have a son in old age, answers that only the astray despair of their Lord’s mercy. Both are answers to people who had run the arithmetic and concluded it was over. Both say: your arithmetic left something out.',
        bn: 'কুরআন নিরাশাকে গুরুতর ভুল হিসেবে দেখে, বিনয় হিসেবে নয়। ১২:৮৭-তে ইয়াকুব (আ) তাঁর ছেলেদের বলেন, কেবল কাফির সম্প্রদায়ই আল্লাহর রহমত থেকে নিরাশ হয়। ১৫:৫৬-তে ইবরাহিম (আ), বৃদ্ধ বয়সে সন্তানের সুসংবাদ পেয়ে, বলেন যে পথভ্রষ্টরা ছাড়া কেউ তার রবের রহমত থেকে নিরাশ হয় না। দুটোই এমন মানুষদের উত্তর যারা হিসাব কষে সিদ্ধান্তে পৌঁছেছিল যে সব শেষ। দুটোই বলছে: আপনার হিসাবে একটি জিনিস বাদ পড়েছে।',
      },
    ],
    verses: [
      {
        ref: '39:53',
        note: {
          en: 'Read the order of the words. The transgression is named, then the command is “do not despair,” then the reason: He forgives all sins — jamī‘an, all of them together, not a selection. Ibn Kathir records that when this verse came, the Companions understood it as the most hope-giving verse in the Book.',
          bn: 'শব্দের ক্রম লক্ষ করুন। প্রথমে বাড়াবাড়ির উল্লেখ, তারপর নির্দেশ “নিরাশ হয়ো না”, তারপর কারণ: তিনি সব গুনাহ ক্ষমা করেন — জামিআন, সবগুলো একসাথে, বাছাই করে নয়। ইবনে কাসির উল্লেখ করেছেন, এই আয়াত নাজিল হলে সাহাবিগণ একে কিতাবের সবচেয়ে আশাব্যঞ্জক আয়াত হিসেবে বুঝেছিলেন।',
        },
      },
      {
        ref: '12:87',
        note: {
          en: 'Spoken by a father who had lost one son to a well and a second to a prison, after years of blindness from weeping. He does not say relief is likely. He says despairing of it is what disbelievers do — which makes hope a matter of who you understand Allah to be, not of how your situation looks.',
          bn: 'বলছেন এমন এক পিতা, যিনি এক ছেলেকে কূপে আর আরেকজনকে কারাগারে হারিয়েছেন, বছরের পর বছর কান্নায় দৃষ্টি হারিয়ে। তিনি বলছেন না যে মুক্তি আসবেই। তিনি বলছেন, তা থেকে নিরাশ হওয়া কাফিরদের কাজ — অর্থাৎ আশা নির্ভর করে আপনি আল্লাহকে কেমন জানেন তার উপর, আপনার অবস্থা দেখতে কেমন তার উপর নয়।',
        },
      },
      {
        ref: '15:56',
        note: {
          en: 'The context is worth holding on to: this is Ibrahim (AS) receiving good news, not bad. Despair had not even been suggested to him — he raises it himself to dismiss it, as if to say that a man who knows his Lord does not keep that option on the table at all.',
          bn: 'প্রসঙ্গটি মনে রাখার মতো: এটি ইবরাহিম (আ)-এর সুসংবাদ গ্রহণের মুহূর্ত, দুঃসংবাদের নয়। তাঁকে নিরাশার কথা কেউ বলেনি — তিনি নিজেই বিষয়টি তুলে তা নাকচ করেন, যেন বলছেন যে নিজের রবকে চেনে এমন মানুষের কাছে ওই বিকল্পটি থাকেই না।',
        },
      },
      {
        ref: '29:23',
        note: {
          en: 'The counterweight, and it is precise. Those who have despaired of His mercy here are those who disbelieved in His signs and in meeting Him — despair is described as a consequence of rejecting Him, not as a punishment for having sinned. That distinction is the whole chapter.',
          bn: 'ভারসাম্যের দিকটি, এবং তা নিখুঁত। এখানে যারা তাঁর রহমত থেকে নিরাশ হয়েছে তারা তারাই যারা তাঁর নিদর্শন ও তাঁর সাক্ষাতে অবিশ্বাস করেছে — নিরাশাকে বর্ণনা করা হয়েছে তাঁকে অস্বীকারের পরিণতি হিসেবে, পাপ করার শাস্তি হিসেবে নয়। এই পার্থক্যটিই পুরো অধ্যায়।',
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
          bn: 'তিনটি ধাপ, আর শেষটির সাথে যুক্ত শর্তটি নিষ্কলঙ্ক রেকর্ড নয় — তা তাওহিদ। অযোগ্য করে আল্লাহর সাথে শরিক করা, স্তূপের আকার নয়।',
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
          bn: 'লক্ষ করুন এটি কী বলছে না। এটি বলছে না যে সর্বোত্তম মানুষ তারা যারা কখনো গুনাহ করে না — সেই শ্রেণিটি আমাদের জন্য রাখাই হয়নি। এটি বলছে, ক্রমটি নির্ধারিত হয় গুনাহকারীদের মধ্যেই, আর তওবাই তা সাজিয়ে দেয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Say it out loud once, in your own words: “Allah forgives all sins, and that includes mine.” Despair often survives because it is never stated plainly enough to be contradicted.',
        bn: 'একবার নিজের ভাষায় জোরে বলুন: “আল্লাহ সব গুনাহ ক্ষমা করেন, আমারটিও তার মধ্যে।” নিরাশা প্রায়ই টিকে থাকে কারণ তা কখনো এত স্পষ্টভাবে বলা হয় না যে তার প্রতিবাদ করা যায়।',
      },
      {
        en: 'Memorise 39:53 this week. It is one verse, and it is the one your own mind will need to quote back at you at two in the morning.',
        bn: 'এই সপ্তাহে ৩৯:৫৩ মুখস্থ করুন। এটি একটিমাত্র আয়াত, আর রাত দুটোয় আপনার মনকে এটিই আবৃত্তি করে শোনাতে হবে।',
      },
      {
        en: 'Do not wait to feel forgiven before you act forgiven. Pray the next prayer on time. The feeling follows the return; it rarely precedes it.',
        bn: 'ক্ষমাপ্রাপ্ত বোধ করার অপেক্ষায় বসে না থেকে ক্ষমাপ্রাপ্তের মতো কাজ শুরু করুন। পরের নামাজটি সময়মতো পড়ুন। অনুভূতি ফিরে আসার পরে আসে; আগে খুব কমই আসে।',
      },
    ],
  },

  {
    id: 'mercy-encompasses',
    wing: 'mercy',
    emoji: '\u{1F30A}',
    title: { en: 'A Mercy Wider Than Everything', bn: 'সবকিছুকে ঘিরে থাকা রহমত' },
    tagline: {
      en: 'Not one of His attributes among many — the one He wrote upon Himself.',
      bn: 'বহু গুণের একটি নয় — যেটি তিনি নিজের উপর লিখে নিয়েছেন।',
    },
    intro: [
      {
        en: 'Every surah but one opens by naming Allah twice over with the same root: ar-Raḥmān, ar-Raḥīm. Before He is named as Judge, before He is named as Powerful, He is named as Merciful, and then named as Merciful again in a second form. A Muslim who prays the five prayers says this line at least seventeen times a day. It is meant to be the first thing about Him you know.',
        bn: 'একটি ছাড়া প্রতিটি সূরা শুরু হয় একই ধাতুমূল থেকে আল্লাহর দুটি নাম দিয়ে: আর-রহমান, আর-রহিম। বিচারক নামের আগে, ক্ষমতাবান নামের আগে তিনি নামিত হন দয়ালু হিসেবে, তারপর আবার দ্বিতীয় রূপে দয়ালু হিসেবে। যে মুসলিম পাঁচ ওয়াক্ত নামাজ পড়ে সে দিনে অন্তত সতেরোবার এই লাইনটি বলে। তাঁর সম্পর্কে এটিই প্রথম জানার কথা।',
      },
      {
        en: 'Twice in Surah al-An‘am the Qur’an uses a startling expression: kataba ‘alā nafsihi ar-raḥmah — He has decreed mercy upon Himself, written it as an obligation He has taken on. Nothing else in the Book is described as something Allah has made binding on Himself. The mercy is not a mood He is in. It is a commitment He has made.',
        bn: 'সূরা আল-আনআমে দুইবার কুরআন এক বিস্ময়কর প্রকাশভঙ্গি ব্যবহার করে: কাতাবা আলা নাফসিহির-রহমাহ — তিনি নিজের উপর রহমত লিখে নিয়েছেন, নিজের উপর গ্রহণ করা দায়িত্ব হিসেবে লিপিবদ্ধ করেছেন। কিতাবে আর কিছুকেই আল্লাহর নিজের উপর অবশ্যকর্তব্য হিসেবে বর্ণনা করা হয়নি। রহমত তাঁর কোনো মেজাজ নয়। এটি তাঁর করা একটি প্রতিশ্রুতি।',
      },
    ],
    verses: [
      {
        ref: '7:156',
        note: {
          en: 'Both halves of the sentence come from Him, and they are not symmetrical. The punishment is qualified — “whom I will.” The mercy is not: it encompasses all things, wasi‘at kulla shay’. Whatever exists is inside it, which necessarily includes you and what you did.',
          bn: 'বাক্যের দুই অংশই তাঁর কাছ থেকে, এবং তারা সমান নয়। শাস্তি শর্তযুক্ত — “যাকে ইচ্ছা।” রহমত নয়: তা সবকিছুকে ঘিরে আছে, ওয়াসিআত কুল্লা শাইয়িন। যা কিছু আছে তা এর ভেতরে, তার মধ্যে অবধারিতভাবে আপনি এবং আপনি যা করেছেন তাও।',
        },
      },
      {
        ref: '40:7',
        note: {
          en: 'The angels who carry the Throne are given one recorded prayer in the Qur’an, and it is istighfār — for the believers, not for themselves. They open it by addressing Allah as the One whose mercy and knowledge encompass all things. The beings closest to Him spend their speech asking forgiveness for people like us.',
          bn: 'যে ফেরেশতারা আরশ বহন করেন, কুরআনে তাঁদের একটি দোয়াই লিপিবদ্ধ, আর তা ইস্তিগফার — মুমিনদের জন্য, নিজেদের জন্য নয়। তাঁরা শুরু করেন আল্লাহকে এমন সত্তা হিসেবে সম্বোধন করে যাঁর রহমত ও জ্ঞান সবকিছুকে ঘিরে আছে। তাঁর নিকটতম সৃষ্টিরা তাঁদের কথা ব্যয় করেন আমাদের মতো মানুষের জন্য ক্ষমা চেয়ে।',
        },
      },
      {
        ref: '6:12',
        note: {
          en: 'The question asked is about ownership of the heavens and the earth. The answer given goes further than the question: He owns everything, and He has written mercy upon Himself. Absolute power is introduced and then immediately characterised — this is what the One who owns everything has chosen to be like.',
          bn: 'প্রশ্নটি আসমান ও জমিনের মালিকানা নিয়ে। উত্তরটি প্রশ্নের চেয়ে এগিয়ে যায়: সবকিছু তাঁর, এবং তিনি নিজের উপর রহমত লিখে নিয়েছেন। পরম ক্ষমতার কথা তুলে সঙ্গে সঙ্গেই তার স্বভাব বলে দেওয়া হচ্ছে — যিনি সবকিছুর মালিক, তিনি এমন হতেই বেছে নিয়েছেন।',
        },
      },
      {
        ref: '6:54',
        note: {
          en: 'Here the same phrase is repeated and then unpacked, and the unpacking is the point: the mercy He wrote upon Himself is spelled out as forgiveness for whoever among you does wrong in ignorance, then repents and puts it right. The verse opens with the Prophet ﷺ being told to greet such people with salām.',
          bn: 'এখানে একই বাক্যাংশ পুনরাবৃত্ত হয়ে ব্যাখ্যাত হয়, আর সেই ব্যাখ্যাই মূল কথা: তিনি নিজের উপর যে রহমত লিখেছেন, তা বিশদভাবে বলা হয়েছে — তোমাদের মধ্যে যে অজ্ঞতাবশত মন্দ কাজ করে, তারপর তওবা করে ও সংশোধন হয়, তার জন্য ক্ষমা। আয়াতটি শুরুই হয় নবী ﷺ-কে এমন মানুষদের সালাম দিয়ে অভ্যর্থনা জানানোর নির্দেশ দিয়ে।',
        },
      },
      {
        ref: '21:107',
        note: {
          en: 'The Prophet ﷺ is not described as sent with a mercy, or bringing one. He is described as being one — raḥmatan lil-‘ālamīn. The mission and the mercy are the same object, which tells you what shape the religion he brought is supposed to have.',
          bn: 'নবী ﷺ-কে বলা হয়নি যে তিনি রহমতসহ প্রেরিত, বা রহমত নিয়ে এসেছেন। বলা হয়েছে তিনি নিজেই রহমত — রহমাতাল্লিল আলামিন। মিশন ও রহমত একই বস্তু, আর তা থেকেই বোঝা যায় তিনি যে দ্বীন এনেছেন তার আকৃতি কেমন হওয়ার কথা।',
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
          bn: 'লেখাটির সময় আমাদের অস্তিত্বেরও আগে। আমাদের কারও পরবর্তী কোনো কাজ এতে ভূমিকা রাখেনি, আর ঠিক সেই কারণেই আমাদের কারও পরবর্তী কোনো কাজ এটিকে উল্টে দিতে পারে না।',
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
          bn: 'আপনি জীবনে যত দয়া পেয়েছেন — মায়ের, অপরিচিত কারও, পশুর নিজের বাচ্চার প্রতি — সব ওই এক ভাগ থেকে। বাকি নিরানব্বই ভাগ রাখা আছে সেই দিনের জন্য, যেদিন আপনার তা প্রয়োজন হবে।',
        },
      },
    ],
    practice: [
      {
        en: 'Next time you say bismillāh, slow down on ar-Raḥmān ar-Raḥīm instead of running the phrase together. You are naming the thing you most need.',
        bn: 'পরের বার বিসমিল্লাহ বলার সময় বাক্যটি এক নিঃশ্বাসে না বলে আর-রহমান আর-রহিম-এ একটু ধীর হোন। আপনার যা সবচেয়ে বেশি দরকার, আপনি তারই নাম নিচ্ছেন।',
      },
      {
        en: 'Learn 7:156 as a single sentence in Arabic: wa raḥmatī wasi‘at kulla shay’. Six words, and they settle most arguments your fear will start with you.',
        bn: 'আরবিতে একটি বাক্য হিসেবে ৭:১৫৬ শিখুন: ওয়া রহমতী ওয়াসিআত কুল্লা শাইয়িন। কয়েকটি শব্দ, আর আপনার ভয় আপনার সাথে যত তর্ক শুরু করবে তার বেশিরভাগেরই এতে নিষ্পত্তি হয়ে যায়।',
      },
      {
        en: 'Spend one of your hundredth-part today: forgive somebody a small thing you were entitled to hold on to. You are practising the attribute you are asking Him for.',
        bn: 'আজ আপনার এক-শতাংশের কিছুটা ব্যয় করুন: এমন ছোট একটি বিষয়ে কাউকে ক্ষমা করুন যা ধরে রাখার অধিকার আপনার ছিল। আপনি তাঁর কাছে যে গুণটি চাইছেন, সেটিরই অনুশীলন করছেন।',
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
      bn: 'তওবার একটি সময়সীমা আছে, কিন্তু কোনো কোটা নেই — আর সময়সীমা আপনার ধারণার চেয়ে দেরিতে।',
    },
    intro: [
      {
        en: 'Tawbah in Arabic means to turn back. It is a word about direction, not about emotion, and Allah applies it to Himself as well as to us: He is at-Tawwāb, the One who constantly turns toward those who turn to Him. In the Qur’an the servant’s turning and Allah’s turning are described with the same verb, which is why 9:118 can say He turned to them so that they might turn to Him. He moves first.',
        bn: 'আরবিতে তওবা মানে ফিরে আসা। এটি দিক নির্দেশক শব্দ, অনুভূতির নয়, আর আল্লাহ এটি আমাদের মতো নিজের জন্যও ব্যবহার করেন: তিনি আত-তাওয়াব, যিনি অবিরত তাদের দিকে ফেরেন যারা তাঁর দিকে ফেরে। কুরআনে বান্দার ফেরা আর আল্লাহর ফেরা একই ক্রিয়াপদে বর্ণিত, সেজন্যই ৯:১১৮ বলতে পারে যে তিনি তাদের দিকে ফিরেছেন যাতে তারা তাঁর দিকে ফেরে। তিনিই আগে অগ্রসর হন।',
      },
      {
        en: 'People assume the door has a counter on it — that repentance works a few times and then stops being taken seriously. The Qur’an sets exactly two boundaries, and neither one is a number: repentance offered as death arrives is not accepted (4:18), and dying in disbelief is not covered. Everything on this side of those two lines is open, however many times you have been through it.',
        bn: 'মানুষ ধরে নেয় দরজায় একটি গণনাযন্ত্র লাগানো আছে — তওবা কয়েকবার কাজ করে, তারপর আর গুরুত্ব পায় না। কুরআন ঠিক দুটি সীমা টানে, আর কোনোটিই সংখ্যা নয়: মৃত্যু উপস্থিত হওয়ার মুহূর্তে করা তওবা কবুল হয় না (৪:১৮), আর কুফরির উপর মৃত্যু এর আওতাভুক্ত নয়। এই দুই রেখার এপাশে সবকিছুই খোলা, আপনি যতবারই এর ভেতর দিয়ে গিয়ে থাকুন।',
      },
    ],
    verses: [
      {
        ref: '4:17-18',
        note: {
          en: 'Read as a pair. The first verse looks restrictive — repentance is for those who sin in ignorance and repent soon — until the second verse defines what “soon” excludes: only the person who keeps going until death is actually at the door. Between those two, “soon” means the rest of your life.',
          bn: 'জোড়া হিসেবে পড়ুন। প্রথম আয়াতটি সীমিত মনে হয় — তওবা তাদের জন্য যারা অজ্ঞতাবশত পাপ করে ও শীঘ্রই তওবা করে — যতক্ষণ না দ্বিতীয় আয়াত সংজ্ঞা দেয় “শীঘ্র” কী বাদ দেয়: কেবল সেই ব্যক্তি, যে মৃত্যু দরজায় আসা পর্যন্ত চালিয়ে যায়। এ দুইয়ের মাঝখানে “শীঘ্র” মানে আপনার বাকি জীবন।',
        },
      },
      {
        ref: '66:8',
        note: {
          en: 'The command is to repent with tawbatan naṣūḥā — sincere repentance, from a root that also means to mend torn cloth. Then comes the word ‘asā, “perhaps,” which unsettles readers. Scholars note that ‘asā from Allah is a certainty; the softness of the wording keeps the repentant humble without leaving him unsure.',
          bn: 'নির্দেশ হলো তওবাতান নাসূহা দিয়ে তওবা করা — আন্তরিক তওবা, যে ধাতুমূলের আরেক অর্থ ছেঁড়া কাপড় সেলাই করা। এরপর আসে ‘আসা শব্দটি, “সম্ভবত”, যা পাঠককে অস্বস্তিতে ফেলে। আলিমগণ বলেন, আল্লাহর পক্ষ থেকে ‘আসা মানে নিশ্চয়তা; ভাষার কোমলতা তওবাকারীকে বিনয়ী রাখে, তাকে অনিশ্চিত রেখে নয়।',
        },
      },
      {
        ref: '42:25',
        note: {
          en: 'Two separate acts in one sentence: He accepts the repentance, and He pardons the misdeeds. Acceptance without erasure would still leave a record; the verse gives both. The closing clause — He knows what you do — sits there without threat, simply as fact.',
          bn: 'এক বাক্যে দুটি পৃথক কাজ: তিনি তওবা কবুল করেন, আর তিনি মন্দ কাজগুলো মুছে দেন। মোছা ছাড়া কেবল কবুল হলে রেকর্ড থেকেই যেত; আয়াতটি দুটোই দেয়। শেষ অংশ — তিনি জানেন তোমরা যা করো — সেখানে হুমকি হিসেবে নয়, নিছক সত্য হিসেবে বসে আছে।',
        },
      },
      {
        ref: '20:82',
        note: {
          en: 'Addressed to Musa (AS) about a nation that had just worshipped a calf. Four things are named: repents, believes, does righteousness, then stays guided. The fourth is the one people skip — the door opens on the turn, but the walk is what the verse actually asks for.',
          bn: 'মুসা (আ)-কে বলা হয়েছে এমন এক জাতির প্রসঙ্গে যারা সবেমাত্র বাছুরের পূজা করেছিল। চারটি বিষয়ের উল্লেখ: তওবা করে, ঈমান আনে, সৎকাজ করে, তারপর হেদায়েতের উপর থাকে। চতুর্থটিই মানুষ এড়িয়ে যায় — ফেরার সাথে সাথেই দরজা খোলে, কিন্তু আয়াতটি আসলে চায় পথ চলাটুকু।',
        },
      },
      {
        ref: '9:104',
        note: {
          en: 'Framed as a question — do they not know? — which implies the answer is available and being missed. What is being missed is not that forgiveness exists but that He is the one who receives the turning, personally, as the Accepting of Repentance.',
          bn: 'প্রশ্ন আকারে — তারা কি জানে না? — যা ইঙ্গিত দেয় উত্তরটি হাতের কাছেই আছে, অথচ চোখ এড়িয়ে যাচ্ছে। যা এড়িয়ে যাচ্ছে তা এই নয় যে ক্ষমা আছে, বরং এই যে তিনিই ব্যক্তিগতভাবে সেই ফেরাটি গ্রহণ করেন, আত-তাওয়াব হিসেবে।',
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
          bn: 'সময়সীমা রাখা হয়েছে জীবনের শেষ সচেতন মুহূর্তে, তার আগের কোনো “আর ফেরা যাবে না” বিন্দুতে নয়। যেদিনই আপনি এটি পড়ছেন, আপনি সেই সীমার ভেতরেই আছেন।',
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
          bn: 'পুরোটা পড়লে এই হাদিসের ভুল বোঝা কঠিন: এটি গুনাহের অনুমতি নয়, এটি এই বক্তব্য যে আল্লাহ এমন এক সৃষ্টি চান যার ক্ষমা প্রয়োজন, কারণ ক্ষমা পাওয়াটাই তিনি আমাদের কাছ থেকে যা চান তার অংশ।',
        },
      },
    ],
    practice: [
      {
        en: 'Repent again for the thing you already repented for and went back to. Repeating tawbah is not evidence that the first one was rejected — it is the normal shape of a believing life.',
        bn: 'যে বিষয়ে আগে তওবা করে আবার ফিরে গিয়েছিলেন, তার জন্য আবার তওবা করুন। বারবার তওবা করা প্রথমটি প্রত্যাখ্যাত হওয়ার প্রমাণ নয় — এটি ঈমানদার জীবনের স্বাভাবিক আকৃতি।',
      },
      {
        en: 'Take the five steps in the panel on the main page one at a time today, in order. Most people are stuck on step four, not step one.',
        bn: 'মূল পাতার প্যানেলে থাকা পাঁচটি ধাপ আজ একটি একটি করে ক্রমানুসারে নিন। বেশিরভাগ মানুষ আটকে থাকেন চতুর্থ ধাপে, প্রথমটিতে নয়।',
      },
      {
        en: 'Stop setting a start date. “From next month” is the one sentence 4:18 warns against, in slower motion.',
        bn: 'শুরুর তারিখ ঠিক করা বন্ধ করুন। “আগামী মাস থেকে” — ৪:১৮ ঠিক এই বাক্যটিরই বিরুদ্ধে সতর্ক করে, কেবল ধীর গতিতে।',
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
      bn: 'কুরআন ঠিক একটি জিনিসের নাম বলে যা ক্ষমা করা হয় না — আর বেশিরভাগ মানুষ যা নিয়ে ভয় পায় তা নয়।',
    },
    intro: [
      {
        en: 'A person who has done something they consider unforgivable usually has a private list: this one, and that one, and the years of that other thing. The Qur’an has a list too, and it is one item long. Twice in Surah an-Nisa, in almost identical wording, Allah states that He does not forgive shirk and forgives whatever is less than that for whom He wills. Everything on your list falls under “less than that.”',
        bn: 'যে ব্যক্তি এমন কিছু করেছে যা সে অমার্জনীয় মনে করে, তার সাধারণত একটি গোপন তালিকা থাকে: এটি, ওটি, আর ওই জিনিসটার বছরগুলো। কুরআনেরও একটি তালিকা আছে, আর তাতে একটিমাত্র জিনিস। সূরা আন-নিসায় দুইবার, প্রায় অভিন্ন শব্দে, আল্লাহ বলেন যে তিনি শিরক ক্ষমা করেন না এবং তার চেয়ে কম যা কিছু, যাকে ইচ্ছা তার জন্য ক্ষমা করেন। আপনার তালিকার সবকিছুই “তার চেয়ে কম”-এর ভেতরে পড়ে।',
      },
      {
        en: 'And even shirk is not outside repentance while a person lives — the whole Makkan mission was built on people who had worshipped idols for decades and were then forgiven completely. What 4:48 describes is the state of one who dies upon it. The Companions include a man who killed the Prophet’s ﷺ own uncle and a woman who had mutilated his body; both later accepted Islam and both were forgiven.',
        bn: 'আর শিরকও মানুষ বেঁচে থাকতে তওবার বাইরে নয় — গোটা মক্কী মিশনই গড়ে উঠেছিল এমন মানুষদের নিয়ে যারা দশকের পর দশক মূর্তিপূজা করেছিল, তারপর সম্পূর্ণ ক্ষমা পেয়েছিল। ৪:৪৮ যা বর্ণনা করে তা হলো সেই ব্যক্তির অবস্থা যে তার উপরই মারা যায়। সাহাবিদের মধ্যে আছেন এমন একজন যিনি নবী ﷺ-এর আপন চাচাকে হত্যা করেছিলেন, আর এমন একজন নারী যিনি তাঁর দেহ বিকৃত করেছিলেন; দুজনই পরে ইসলাম গ্রহণ করেন এবং দুজনই ক্ষমা পান।',
      },
    ],
    verses: [
      {
        ref: '4:48',
        note: {
          en: 'Read the two halves against each other. The first is absolute and has no exception clause. The second is deliberately open — “what is less than that, for whom He wills” — and mā dūna dhālik covers everything a human being is capable of doing short of associating a partner with Allah.',
          bn: 'দুই অংশ পাশাপাশি রেখে পড়ুন। প্রথমটি চূড়ান্ত, কোনো ব্যতিক্রমের সুযোগ নেই। দ্বিতীয়টি ইচ্ছাকৃতভাবে উন্মুক্ত — “তার চেয়ে কম যা কিছু, যার জন্য তিনি চান” — আর মা দূনা যালিক-এর ভেতরে পড়ে আল্লাহর সাথে শরিক করা ছাড়া মানুষ যা কিছু করতে সক্ষম তার সবই।',
        },
      },
      {
        ref: '4:110',
        note: {
          en: 'Fourteen words in Arabic and a complete instruction inside them: do wrong, then seek forgiveness, and you will find Him Forgiving. The verb is yajid — he will find. Not “he may find.” The finding is stated as an outcome, not a hope.',
          bn: 'আরবিতে অল্প কয়েকটি শব্দ, আর তার ভেতরেই সম্পূর্ণ নির্দেশনা: মন্দ কাজ করো, তারপর ক্ষমা চাও, তুমি তাঁকে ক্ষমাশীল পাবে। ক্রিয়াপদটি ইয়াজিদু — সে পাবে। “হয়তো পাবে” নয়। পাওয়াটিকে বলা হয়েছে ফলাফল হিসেবে, আশা হিসেবে নয়।',
        },
      },
      {
        ref: '3:135-136',
        note: {
          en: 'A portrait of the believer who sins rather than of the believer who does not. Four moves: they remember Allah, they seek forgiveness, they do not persist knowingly — and the rhetorical question sits in the middle, who forgives sins except Allah, as if to stop the excuse before it forms.',
          bn: 'পাপ না করা মুমিনের নয়, বরং পাপ করা মুমিনের একটি প্রতিকৃতি। চারটি পদক্ষেপ: তারা আল্লাহকে স্মরণ করে, ক্ষমা চায়, জেনেশুনে লেগে থাকে না — আর মাঝখানে বসে আছে সেই প্রশ্নটি, আল্লাহ ছাড়া কে গুনাহ ক্ষমা করে, যেন অজুহাত তৈরি হওয়ার আগেই তা থামিয়ে দেওয়া হচ্ছে।',
        },
      },
      {
        ref: '5:39',
        note: {
          en: 'Placed immediately after the ruling on theft — the hardest possible position for a verse of forgiveness. The Qur’an states a criminal penalty and then, in the very next breath, says that whoever repents and reforms, Allah turns to him. Punishment in the world and pardon with Allah are not the same ledger.',
          bn: 'চুরির বিধানের ঠিক পরেই স্থাপিত — ক্ষমার আয়াতের জন্য সবচেয়ে কঠিন অবস্থান। কুরআন একটি ফৌজদারি শাস্তি ঘোষণা করে, আর পরের নিঃশ্বাসেই বলে, যে তওবা করে ও সংশোধন হয়, আল্লাহ তার দিকে ফেরেন। দুনিয়ার শাস্তি আর আল্লাহর কাছে ক্ষমা — দুটি একই খাতা নয়।',
        },
      },
      {
        ref: '39:54',
        note: {
          en: 'This comes one verse after 39:53, and it is the instruction that the promise was leading to. Do not stop at being reassured — anību, turn back, and aslimū, submit. Hope is given first and then immediately pointed somewhere.',
          bn: 'এটি ৩৯:৫৩-এর ঠিক পরের আয়াত, আর প্রতিশ্রুতিটি যে নির্দেশের দিকে নিয়ে যাচ্ছিল, এটি সেটিই। আশ্বস্ত হয়েই থেমে যাবেন না — আনীবূ, ফিরে এসো, আর আসলিমূ, আত্মসমর্পণ করো। আশা আগে দেওয়া হয়, তারপর সাথে সাথেই তাকে একটি দিক দেখিয়ে দেওয়া হয়।',
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
          bn: 'সে কখনো পৌঁছায়নি। ওই মানুষদের সাথে একটি নামাজও পড়েনি, কিছুই পুষিয়ে দেয়নি। সে গৃহীত হয়েছিল এমন এক যাত্রার জন্য যা সে শুরু করেছিল, শেষ করেনি — শেষ বিচারে মাপা হয়েছিল সে কোন দিকে মুখ করে ছিল তা দিয়ে।',
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
          bn: 'তিনি একটি শর্ত চেয়েছিলেন, আর তাঁকে বলা হলো শর্তটি আগে থেকেই অন্তর্ভুক্ত। লক্ষ করুন, হজও একই তালিকায় — এমন একজনের জন্য উপলব্ধ মোছা, যে সারাজীবনই মুসলিম, আর যার নতুন করে শুরু দরকার।',
        },
      },
    ],
    practice: [
      {
        en: 'Write down the sin you think disqualifies you, then write 4:48 underneath it and ask honestly whether the first is shirk. Nearly always the honest answer ends the argument.',
        bn: 'যে গুনাহটি আপনাকে অযোগ্য করে বলে মনে করেন তা লিখুন, নিচে ৪:৪৮ লিখুন, আর সৎভাবে জিজ্ঞেস করুন প্রথমটি শিরক কি না। প্রায় সবসময়ই সৎ উত্তরটি তর্কের অবসান ঘটায়।',
      },
      {
        en: 'Change your direction today even if you cannot change your history. The man in the hadith was judged by which way he was walking, not by what was behind him.',
        bn: 'আজ আপনার দিক বদলান, অতীত বদলাতে না পারলেও। হাদিসের লোকটির বিচার হয়েছিল সে কোন দিকে হাঁটছিল তা দিয়ে, তার পেছনে কী ছিল তা দিয়ে নয়।',
      },
      {
        en: 'If your surroundings are what keeps pulling you back, take the scholar’s advice literally: change the company and the place, not just the intention.',
        bn: 'আপনার পরিবেশই যদি বারবার আপনাকে টেনে নেয়, তবে সেই আলিমের পরামর্শ আক্ষরিকভাবে নিন: শুধু নিয়ত নয়, সঙ্গ ও জায়গাও বদলান।',
      },
    ],
  },

  {
    id: 'evil-into-good',
    wing: 'mercy',
    emoji: '\u{2728}',
    title: { en: 'Bad Deeds Exchanged for Good', bn: 'মন্দ কাজ বদলে ভালো' },
    tagline: {
      en: 'Forgiveness deletes the debt. This verse says something stranger happens.',
      bn: 'ক্ষমা ঋণ মুছে দেয়। এই আয়াত বলছে আরও অদ্ভুত কিছু ঘটে।',
    },
    intro: [
      {
        en: 'Surah al-Furqan lists three sins together — associating others with Allah, killing a soul unjustly, and unlawful sexual relations — and attaches a doubled punishment to them. Then it turns, in 25:70, with an exception that goes far past what the passage prepared us for. The repentant do not merely have the record cleared. Allah replaces their evil deeds with good ones.',
        bn: 'সূরা আল-ফুরকান তিনটি গুনাহ একসাথে উল্লেখ করে — আল্লাহর সাথে শরিক করা, অন্যায়ভাবে প্রাণ হত্যা, আর অবৈধ যৌনসম্পর্ক — এবং তাদের সাথে দ্বিগুণ শাস্তি যুক্ত করে। তারপর ২৫:৭০-এ এমন এক ব্যতিক্রম দিয়ে মোড় নেয়, যা অনুচ্ছেদটি আমাদের যতটুকু প্রস্তুত করেছিল তার অনেক দূর ছাড়িয়ে যায়। তওবাকারীর কেবল খাতা পরিষ্কার হয় না। আল্লাহ তাদের মন্দ কাজগুলোকে ভালো কাজ দিয়ে বদলে দেন।',
      },
      {
        en: 'Classical commentators offer two readings and both are worth carrying. One: the sinful acts themselves are converted in the record, so that what stood against a person now stands for him. Two: the person is converted, so that the very capacities once spent on wrong are now spent on good. Either way, the past is not just survived. It becomes material.',
        bn: 'ধ্রুপদী মুফাসসিরগণ দুটি ব্যাখ্যা দেন, আর দুটোই ধরে রাখার মতো। এক: পাপ কাজগুলোই খাতায় বদলে যায়, ফলে যা ব্যক্তির বিরুদ্ধে ছিল তা এখন তার পক্ষে দাঁড়ায়। দুই: ব্যক্তিটিই বদলে যায়, ফলে যে সামর্থ্য একসময় মন্দে ব্যয় হতো তা এখন ভালোয় ব্যয় হয়। যেভাবেই দেখুন, অতীত শুধু পার হয়ে যাওয়া নয়। তা উপাদান হয়ে ওঠে।',
      },
    ],
    verses: [
      {
        ref: '25:68-70',
        note: {
          en: 'The three verses have to be read together or the force is lost. Two of them build a case for despair — a doubled punishment, abiding in humiliation — and the third begins with illā, except. The exception is longer and warmer than the sentence it interrupts.',
          bn: 'তিনটি আয়াত একসাথে পড়তেই হবে, নইলে জোরটা হারিয়ে যায়। দুটি আয়াত নিরাশার পক্ষে যুক্তি গড়ে তোলে — দ্বিগুণ শাস্তি, অপমানিত অবস্থায় স্থায়ী থাকা — আর তৃতীয়টি শুরু হয় ইল্লা দিয়ে, তবে। ব্যতিক্রমটি যে বাক্যটিকে থামিয়ে দিচ্ছে, তার চেয়ে দীর্ঘ ও উষ্ণ।',
        },
      },
      {
        ref: '11:114',
        note: {
          en: 'The mechanism, stated plainly: good deeds do away with bad ones. And notice which good deed the verse names — the prayer, at both ends of the day. The clearing is not reserved for grand gestures; it is built into the timetable you already have.',
          bn: 'পদ্ধতিটি স্পষ্ট ভাষায়: ভালো কাজ মন্দ কাজ দূর করে দেয়। আর লক্ষ করুন আয়াতটি কোন ভালো কাজের নাম নেয় — নামাজ, দিনের দুই প্রান্তে। মোছার ব্যবস্থাটি বিশাল কোনো কাজের জন্য তুলে রাখা নেই; তা আপনার হাতে থাকা সময়সূচিতেই গাঁথা।',
        },
      },
      {
        ref: '4:31',
        note: {
          en: 'A conditional promise about the smaller sins that accumulate quietly. Avoid the major ones and the lesser ones are removed — not forgiven on request, removed as a consequence. Much of what weighs on a conscientious person is already covered by this arrangement.',
          bn: 'নীরবে জমতে থাকা ছোট গুনাহ নিয়ে একটি শর্তসাপেক্ষ প্রতিশ্রুতি। বড়গুলো এড়িয়ে চলো, ছোটগুলো মুছে দেওয়া হবে — চাওয়ার পর ক্ষমা নয়, ফলাফল হিসেবে অপসারণ। সচেতন মানুষের মনে যা কিছু ভার হয়ে থাকে তার অনেকটাই এই ব্যবস্থাতেই ঢাকা পড়ে যায়।',
        },
      },
      {
        ref: '3:31',
        note: {
          en: 'The verse answers a claim of love with a test of following, and then attaches two results in order: Allah will love you, and He will forgive you your sins. Being loved is placed before being forgiven, which is not the order our anxiety expects.',
          bn: 'আয়াতটি ভালোবাসার দাবির উত্তর দেয় অনুসরণের পরীক্ষা দিয়ে, তারপর ক্রমানুসারে দুটি ফল যুক্ত করে: আল্লাহ তোমাদের ভালোবাসবেন, আর তিনি তোমাদের গুনাহ ক্ষমা করবেন। ভালোবাসা পাওয়াকে রাখা হয়েছে ক্ষমা পাওয়ার আগে, আমাদের উদ্বেগ যে ক্রম আশা করে তা এটি নয়।',
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
          bn: 'তিনটি নির্দেশ, আর তৃতীয়টিই এই অংশের দ্বিতীয় ভাগে যাওয়ার সেতু: আল্লাহর সাথে মেরামত হওয়া সম্পর্কটি মানুষের সাথে আচরণে ফুটে ওঠার কথা।',
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
          bn: 'তিনটি পরস্পর-ব্যাপ্ত চক্র — দৈনিক, সাপ্তাহিক, বার্ষিক — সাধারণ মুসলিম জীবনের নিচে দিয়ে চলছে, খেয়াল করা হোক বা না হোক। রক্ষণাবেক্ষণের সময়সূচি আগেই ঠিক করা আছে।',
        },
      },
    ],
    practice: [
      {
        en: 'Pair every slip with an immediate good deed, today, not later. The hadith gives an order of operations: bad deed, then good deed, then it is wiped.',
        bn: 'প্রতিটি ভুলের পরপরই আজই একটি ভালো কাজ জুড়ে দিন, পরে নয়। হাদিসটি একটি ক্রম দেয়: মন্দ কাজ, তারপর ভালো কাজ, তারপর তা মুছে যায়।',
      },
      {
        en: 'Take the ability that used to serve the sin — the persistence, the courage, the charm, the late nights — and put it to work somewhere lawful. That is 25:70 read as a practical instruction.',
        bn: 'যে সামর্থ্য একসময় গুনাহের কাজে লাগত — জেদ, সাহস, আকর্ষণ, রাত জাগা — তা হালাল কোনো কাজে লাগান। ২৫:৭০-কে বাস্তব নির্দেশ হিসেবে পড়লে এটাই দাঁড়ায়।',
      },
      {
        en: 'Guard the five prayers before adding anything else. 11:114 and the hadith of the three cycles both put the routine, not the extraordinary, at the centre of clearing.',
        bn: 'অন্য কিছু যোগ করার আগে পাঁচ ওয়াক্ত নামাজ রক্ষা করুন। ১১:১১৪ ও তিন চক্রের হাদিস — দুটোই মোছার কেন্দ্রে রাখে নিয়মিত রুটিনকে, অসাধারণ কিছুকে নয়।',
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
      bn: 'সহ্য করা নয়। প্রক্রিয়াকরণ নয়। বর্ণনায় আছে আনন্দ।',
    },
    intro: [
      {
        en: 'Most people imagine returning to Allah as an awkward audience: forgiveness granted, disappointment noted. The texts describe something else entirely. Allah is not merely willing to receive the one who comes back — He loves them, and the Prophet ﷺ reached for the most extreme picture of human joy he could find to describe how gladly the return is met.',
        bn: 'বেশিরভাগ মানুষ আল্লাহর কাছে ফেরাকে কল্পনা করে অস্বস্তিকর এক সাক্ষাৎ হিসেবে: ক্ষমা মঞ্জুর, হতাশা লিপিবদ্ধ। কিন্তু বর্ণনা সম্পূর্ণ ভিন্ন কথা বলে। যে ফিরে আসে আল্লাহ কেবল তাকে গ্রহণ করতে রাজি নন — তিনি তাকে ভালোবাসেন, আর নবী ﷺ সেই ফেরা কত আনন্দে গৃহীত হয় তা বোঝাতে মানুষের আনন্দের সবচেয়ে চরম ছবিটি বেছে নিয়েছেন।',
      },
      {
        en: 'This matters practically. Shame keeps people away far longer than sin does. A person who believes they will be received coldly delays the return for years; a person who believes they are wanted comes back tonight. The Qur’an and Sunnah spend a great deal of language on this precise point.',
        bn: 'এটি বাস্তবিকভাবেই গুরুত্বপূর্ণ। গুনাহ যতটা দূরে রাখে, লজ্জা তার চেয়ে অনেক বেশি সময় দূরে রাখে। যে বিশ্বাস করে তাকে শীতলভাবে গ্রহণ করা হবে, সে বছরের পর বছর ফেরা পিছিয়ে দেয়; যে বিশ্বাস করে তাকে চাওয়া হচ্ছে, সে আজ রাতেই ফেরে। কুরআন ও সুন্নাহ ঠিক এই বিন্দুটিতেই প্রচুর ভাষা ব্যয় করেছে।',
      },
    ],
    verses: [
      {
        ref: '2:222',
        note: {
          en: 'The sentence arrives at the close of a ruling about marital life, which is exactly what makes it striking: Allah loves those who constantly turn back to Him, stated in the middle of ordinary law rather than saved for a dramatic occasion. Being loved as a repenter is described as a standing condition, not a reward for a crisis well handled.',
          bn: 'বাক্যটি আসে দাম্পত্য জীবনের একটি বিধানের শেষে, আর এটিই একে বিস্ময়কর করে তোলে: আল্লাহ তাদের ভালোবাসেন যারা বারবার তাঁর দিকে ফেরে — কথাটি বলা হয়েছে সাধারণ বিধানের মাঝখানে, কোনো নাটকীয় মুহূর্তের জন্য তুলে রেখে নয়। তওবাকারী হিসেবে ভালোবাসা পাওয়াকে বলা হয়েছে একটি স্থায়ী অবস্থা, সংকট ভালোভাবে সামলানোর পুরস্কার নয়।',
        },
      },
      {
        ref: '9:118',
        note: {
          en: 'About the three Companions who stayed behind from Tabuk and were boycotted until, in the verse’s own words, the earth closed in on them despite its vastness. The verse then says He turned to them so that they might turn to Him — His turning is placed first, as the cause of theirs.',
          bn: 'তাবুক থেকে পিছিয়ে থাকা তিন সাহাবি সম্পর্কে, যাঁদের বয়কট করা হয়েছিল যতক্ষণ না, আয়াতের ভাষাতেই, পৃথিবী প্রশস্ত হওয়া সত্ত্বেও তাঁদের উপর সংকীর্ণ হয়ে এল। এরপর আয়াতটি বলে, তিনি তাঁদের দিকে ফিরেছেন যাতে তাঁরা তাঁর দিকে ফেরেন — তাঁর ফেরাকে রাখা হয়েছে আগে, তাঁদের ফেরার কারণ হিসেবে।',
        },
      },
      {
        ref: '2:186',
        note: {
          en: 'The only place in the Qur’an where a question about Allah is answered without the usual “Say.” They ask about Me — and the reply comes directly: I am near. In a passage about fasting, the closeness is asserted before any condition is attached.',
          bn: 'কুরআনে এটিই একমাত্র জায়গা যেখানে আল্লাহ সম্পর্কে প্রশ্নের উত্তর আসে চিরাচরিত “বলুন” ছাড়াই। তারা আমার সম্পর্কে জিজ্ঞেস করে — আর উত্তর আসে সরাসরি: আমি নিকটে। রোজার প্রসঙ্গে বলা এই আয়াতে নৈকট্যের ঘোষণা আসে কোনো শর্ত যুক্ত হওয়ার আগেই।',
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
          bn: 'গল্পের লোকটি আনন্দিত এই কারণে নয় যে উটটি মূল্যবান। সে আনন্দিত কারণ ওটি ছাড়া সে মারা যেত। তুলনাটি আনন্দ নিয়ে নয়; উদ্ধার নিয়ে — আর হাদিস বলছে আল্লাহর আনন্দ তার চেয়েও বেশি।',
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
          bn: 'সাহাবিদের প্রথমে একটি জীবন্ত দৃষ্টান্ত দেখিয়ে বিচার করতে বলা হলো, তারপরই তুলনাটি দেওয়া হলো। ওই মায়ের ব্যাপারে আপনি যতটা নিশ্চিত, সেটাই মেঝে, ছাদ নয়।',
        },
      },
    ],
    practice: [
      {
        en: 'Name the shame for what it is. If you are staying away because you feel unwelcome, you are believing something about Allah that these two hadith directly contradict.',
        bn: 'লজ্জাটিকে তার নামেই ডাকুন। আপনি যদি অনাহূত বোধ করে দূরে থাকেন, তবে আল্লাহ সম্পর্কে এমন কিছু বিশ্বাস করছেন যা এই দুটি হাদিস সরাসরি খণ্ডন করে।',
      },
      {
        en: 'Come back mid-mistake rather than waiting to be presentable. 9:118 has Allah turning toward three men while they were still in disgrace.',
        bn: 'উপস্থাপনযোগ্য হওয়ার অপেক্ষা না করে ভুলের মাঝখান থেকেই ফিরুন। ৯:১১৮-এ আল্লাহ তিনজনের দিকে ফিরেছেন যখন তাঁরা তখনো অপমানের মধ্যেই ছিলেন।',
      },
      {
        en: 'Make du‘a immediately after reading 2:186 — the verse itself is an instruction to answer Him back. Nothing else needs to be arranged first.',
        bn: '২:১৮৬ পড়ার সাথে সাথেই দোয়া করুন — আয়াতটি নিজেই তাঁকে সাড়া দেওয়ার নির্দেশ। আগে অন্য কিছু গোছানোর দরকার নেই।',
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
      bn: 'তিনি একবার তা ঢেকেই দিয়েছেন। এটিই সবচেয়ে বড় প্রমাণ যে তিনি ক্ষমা করতে চান।',
    },
    intro: [
      {
        en: 'Think about a sin nobody knows about. It stayed private — not because you were careful, but because Allah did not expose it. He was watching while it happened and He covered it anyway. As-Sittīr, the Coverer, is how the Sunnah names Him for this, and it is a name with an argument inside it: the One who chose to hide it from people is unlikely to be looking for a reason to hold it against you.',
        bn: 'এমন একটি গুনাহের কথা ভাবুন যা কেউ জানে না। তা গোপন থেকে গেছে — আপনি সাবধান ছিলেন বলে নয়, বরং আল্লাহ তা প্রকাশ করেননি বলে। তা ঘটার সময় তিনি দেখছিলেন, তবু তিনি ঢেকে দিয়েছেন। আস-সিত্তীর, আবরণকারী — সুন্নাহ এ কারণেই তাঁকে এই নামে ডাকে, আর এই নামের ভেতরেই একটি যুক্তি আছে: যিনি মানুষের কাছ থেকে তা গোপন রাখতে বেছে নিয়েছেন, তিনি আপনার বিরুদ্ধে তা ব্যবহারের অজুহাত খুঁজছেন — এমন হওয়ার কথা নয়।',
      },
      {
        en: 'This has a duty attached. The covering you received is the covering you owe: the Sunnah ties Allah’s concealment of a person on the Day of Judgement directly to that person’s concealment of others in this world. It also draws a hard line the other way — the one exception named is the person who sins and then publicises it.',
        bn: 'এর সাথে একটি দায়িত্বও যুক্ত। আপনি যে আবরণ পেয়েছেন, সেই আবরণই আপনার দেনা: সুন্নাহ কিয়ামতের দিন আল্লাহর কর্তৃক কাউকে ঢেকে রাখাকে সরাসরি যুক্ত করে দুনিয়াতে ওই ব্যক্তির অন্যদের ঢেকে রাখার সাথে। উল্টো দিকে একটি কঠিন রেখাও টানা হয়েছে — একমাত্র ব্যতিক্রম হিসেবে যার নাম আসে সে হলো, যে গুনাহ করে তা প্রচার করে বেড়ায়।',
      },
    ],
    verses: [
      {
        ref: '24:22',
        note: {
          en: 'Revealed after a Companion swore to cut off support to a relative who had slandered his family. The verse does not argue that the offence was small. It asks a question instead: would you not love that Allah should forgive you? Your own hope of pardon is made the reason to grant it.',
          bn: 'নাজিল হয়েছিল এমন এক সাহাবির প্রসঙ্গে, যিনি তাঁর পরিবারের বিরুদ্ধে অপবাদ রটানো এক আত্মীয়ের সাহায্য বন্ধ করার শপথ করেছিলেন। আয়াতটি বলে না যে অপরাধটি ছোট ছিল। বরং একটি প্রশ্ন করে: তোমরা কি চাও না যে আল্লাহ তোমাদের ক্ষমা করুন? আপনার নিজের ক্ষমার আশাকেই ক্ষমা করার কারণ বানিয়ে দেওয়া হয়েছে।',
        },
      },
      {
        ref: '53:32',
        note: {
          en: 'Two things in one verse. First, an allowance: those who avoid the major sins except for lamam, the smaller lapses — your Lord is vast in forgiveness. Then a warning against the opposite error: do not claim purity for yourselves. Hope and self-congratulation are separated cleanly.',
          bn: 'এক আয়াতে দুটি জিনিস। প্রথমে একটি ছাড়: যারা বড় গুনাহ এড়িয়ে চলে, শুধু লামাম — ছোটখাটো স্খলন ছাড়া — তোমার রব ক্ষমায় প্রশস্ত। তারপর বিপরীত ভুলের বিরুদ্ধে সতর্কতা: নিজেদের পবিত্র বলে দাবি কোরো না। আশা আর আত্মতৃপ্তিকে পরিষ্কারভাবে আলাদা করে দেওয়া হয়েছে।',
        },
      },
      {
        ref: '2:160',
        note: {
          en: 'Spoken about those who had concealed what Allah revealed, and the conditions set are exact: repent, correct themselves, and make clear what they hid. Concealment of the truth has to be undone in public; concealment of one’s own private sin never has to be.',
          bn: 'বলা হয়েছে তাদের সম্পর্কে যারা আল্লাহর নাজিলকৃত বিষয় গোপন করেছিল, আর শর্তগুলো সুনির্দিষ্ট: তওবা করে, নিজেদের সংশোধন করে, আর যা লুকিয়েছিল তা স্পষ্ট করে। সত্য গোপন করা প্রকাশ্যে সংশোধন করতে হয়; নিজের ব্যক্তিগত গুনাহ গোপন রাখাকে কখনোই খুলে বলতে হয় না।',
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
          bn: 'বিনিময়ের হার এক-এক, আর তা চলে আপনি যে দিকে চালান সেদিকেই। কারও সম্পর্কে কোনো কথা যতবার আপনি পুনরাবৃত্তি করা থেকে বিরত থাকেন, ততবারই আপনি নিজের জন্য এমন এক দিনের আবরণ কিনছেন যেদিন আপনার তা ভীষণ দরকার হবে।',
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
          bn: 'পর্দাটি তার উপর রাখা হয় জিজ্ঞাসাবাদ শুরুর আগেই, রায়ের পরে নয়। ব্যক্তিগত আলাপটি এমনভাবে সাজানো যে আলোচনাটি আর কেউ কখনো শুনবে না — ক্ষমা আর গোপনীয়তা একসাথেই আসে।',
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
          bn: 'এখানে গুনাহটিকে আলাদা করে ধরা হয়নি — ধরা হয়েছে ঘোষণাটিকে। নিজের অতীত গোপন রাখুন, আবরণটি অক্ষত থাকবে; সততার নামে বন্ধুদের কাছে তা স্বীকার না করাও এর মধ্যে পড়ে।',
        },
      },
    ],
    practice: [
      {
        en: 'Do not tell anyone. If you have already repented, repeating the story to a friend undoes a covering Allah gave you — this is one of the rare places where silence is the act of worship.',
        bn: 'কাউকে বলবেন না। তওবা করে থাকলে বন্ধুর কাছে ঘটনাটি বলা আল্লাহর দেওয়া আবরণ খুলে ফেলা — এটি সেই বিরল জায়গাগুলোর একটি যেখানে নীরবতাই ইবাদত।',
      },
      {
        en: 'Kill one piece of gossip today that you were about to pass on. You are not protecting them so much as buying your own screen for the Day of the private conversation.',
        bn: 'আজ এমন একটি পরচর্চা থামিয়ে দিন যা আপনি বলতে যাচ্ছিলেন। আপনি তাদের রক্ষা করার চেয়ে বেশি করছেন সেই দিনের ব্যক্তিগত আলাপের জন্য নিজের পর্দা কেনার কাজ।',
      },
      {
        en: 'Restore support to the relative you cut off. 24:22 was revealed for that exact situation, and the argument it makes will apply to you in the same words.',
        bn: 'যে আত্মীয়ের সাথে সম্পর্ক ছিন্ন করেছেন তার সাহায্য ফিরিয়ে দিন। ২৪:২২ ঠিক এই পরিস্থিতিতেই নাজিল হয়েছিল, আর তার যুক্তিটি আপনার ক্ষেত্রেও একই ভাষায় প্রযোজ্য।',
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
      bn: 'সৃষ্টির সেরা মানুষদেরই কুরআনে ভুল স্বীকার করতে উদ্ধৃত করা হয়েছে। তাঁরা যে শব্দ ব্যবহার করেছেন তা আপনাকেই দেওয়া হয়েছে।',
    },
    intro: [
      {
        en: 'A person convinced that religious people do not struggle will read the Qur’an and find the opposite. Adam (AS) and Hawwa say they have wronged themselves. Musa (AS) says the same words after striking a man who died. Yunus (AS) calls out from inside the darkness that he was among the wrongdoers. Dawud (AS) asks forgiveness and falls prostrate. These are not marginal figures; they are the summit.',
        bn: 'যে ব্যক্তি নিশ্চিত যে ধার্মিক মানুষেরা সংগ্রাম করেন না, সে কুরআন পড়লে উল্টোটাই পাবে। আদম (আ) ও হাওয়া বলেন তাঁরা নিজেদের উপর জুলুম করেছেন। মুসা (আ) এক ব্যক্তিকে আঘাত করে তার মৃত্যুর পর ঠিক একই কথা বলেন। ইউনুস (আ) অন্ধকারের ভেতর থেকে ডেকে বলেন তিনি জালিমদের অন্তর্ভুক্ত ছিলেন। দাউদ (আ) ক্ষমা চেয়ে সিজদায় পড়ে যান। এঁরা প্রান্তিক কেউ নন; এঁরাই শিখর।',
      },
      {
        en: 'And in every case the Qur’an records the words, not just the fact. This is deliberate: the du‘ā of Adam (AS) and the du‘ā of Yunus (AS) are handed to the reader as usable text. When you do not know what to say, the Book has already put the sentences in your mouth — the same sentences that worked for them.',
        bn: 'আর প্রতিটি ক্ষেত্রেই কুরআন কেবল ঘটনাটি নয়, শব্দগুলোও লিপিবদ্ধ করে। এটি উদ্দেশ্যমূলক: আদম (আ)-এর দোয়া আর ইউনুস (আ)-এর দোয়া পাঠকের হাতে তুলে দেওয়া হয়েছে ব্যবহারযোগ্য পাঠ হিসেবে। যখন কী বলবেন জানেন না, কিতাব আগেই আপনার মুখে বাক্যগুলো বসিয়ে দিয়েছে — ঠিক সেই বাক্য, যা তাঁদের ক্ষেত্রে কাজ করেছিল।',
      },
    ],
    verses: [
      {
        ref: '7:23',
        note: {
          en: 'The first du‘ā of repentance in human history, and it contains no excuse. Three moves: we wronged ourselves, if You do not forgive and have mercy, we are the losers. Compare Iblis in the same passage, who argued about why he was right. The difference between them is not the mistake; it is what followed it.',
          bn: 'মানব ইতিহাসের প্রথম তওবার দোয়া, আর তাতে কোনো অজুহাত নেই। তিনটি পদক্ষেপ: আমরা নিজেদের উপর জুলুম করেছি, আপনি ক্ষমা ও দয়া না করলে আমরা ক্ষতিগ্রস্তদের অন্তর্ভুক্ত। একই অনুচ্ছেদে ইবলিসের সাথে তুলনা করুন, যে নিজের সঠিক হওয়ার পক্ষে তর্ক করেছিল। তাদের পার্থক্য ভুলটিতে নয়; ভুলের পরে যা এল তাতে।',
        },
      },
      {
        ref: '2:37',
        note: {
          en: 'The follow-up. Adam received words from his Lord — he was taught what to say — and then Allah accepted his repentance. Even the language of returning was a gift given to him, which is worth remembering when you feel unable to find words of your own.',
          bn: 'পরের ধাপ। আদম তাঁর রবের কাছ থেকে কিছু বাণী পেলেন — তাঁকে শিখিয়ে দেওয়া হলো কী বলতে হবে — তারপর আল্লাহ তাঁর তওবা কবুল করলেন। ফিরে আসার ভাষাটুকুও ছিল তাঁকে দেওয়া উপহার, নিজের ভাষা খুঁজে না পেলে এটি মনে রাখার মতো।',
        },
      },
      {
        ref: '28:16',
        note: {
          en: 'Musa (AS) after a man has died at his hand. The confession, the request and the answer are all in one verse, and the answer takes four words: fa ghafara lah — so He forgave him. No interval is described between asking and receiving.',
          bn: 'মুসা (আ), যাঁর হাতে একজন মারা গেছে। স্বীকারোক্তি, আবেদন ও উত্তর — সবই এক আয়াতে, আর উত্তরটি মাত্র কয়েকটি শব্দ: ফাগাফারা লাহু — তাই তিনি তাঁকে ক্ষমা করলেন। চাওয়া আর পাওয়ার মাঝে কোনো ব্যবধানের বর্ণনা নেই।',
        },
      },
      {
        ref: '21:87',
        note: {
          en: 'Called from inside three darknesses — night, sea, and the belly of the fish. The du‘ā names no request at all: there is no deity except You, exalted are You, I have been among the wrongdoers. Praise and admission, and the rescue follows in the next verse.',
          bn: 'তিন অন্ধকারের ভেতর থেকে ডাক — রাত, সমুদ্র, আর মাছের পেট। দোয়াটিতে কোনো চাওয়াই নেই: তুমি ছাড়া কোনো ইলাহ নেই, তুমি পবিত্র, আমি জালিমদের অন্তর্ভুক্ত ছিলাম। প্রশংসা আর স্বীকৃতি, আর উদ্ধার আসে পরের আয়াতেই।',
        },
      },
      {
        ref: '38:24-25',
        note: {
          en: 'Dawud (AS) realises he is being tested, asks forgiveness, and bows down. And what is granted is not only pardon: the verse adds nearness to Us and a good place of return. Repentance is answered with promotion, not merely with the removal of a penalty.',
          bn: 'দাউদ (আ) বুঝতে পারেন তাঁকে পরীক্ষা করা হচ্ছে, ক্ষমা চান, আর নত হয়ে পড়েন। আর যা দেওয়া হলো তা কেবল ক্ষমা নয়: আয়াতটি যোগ করে আমাদের নৈকট্য ও উত্তম প্রত্যাবর্তনস্থল। তওবার উত্তরে আসে উন্নতি, নিছক শাস্তি মওকুফ নয়।',
        },
      },
      {
        ref: '12:92',
        note: {
          en: 'Not a prophet repenting but a prophet forgiving, and it belongs here for the standard it sets. Yusuf (AS) is in power over the brothers who threw him into a well; his first words are that there is no blame on them today. Model both halves — the asking and the granting.',
          bn: 'এটি কোনো নবীর তওবা নয়, বরং নবীর ক্ষমা করা, আর এটি এখানে আছে যে মান স্থাপন করে সে কারণে। ইউসুফ (আ) ক্ষমতার আসনে, সামনে সেই ভাইয়েরা যারা তাঁকে কূপে ফেলেছিল; তাঁর প্রথম কথা, আজ তোমাদের উপর কোনো ভর্ৎসনা নেই। দুই দিকই অনুসরণ করুন — চাওয়া আর দেওয়া।',
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
          bn: 'যে দোয়ায় কোনো চাওয়ার উল্লেখ নেই, তাকেই বলা হয়েছে সব চাওয়ার উত্তর। ধরনটি শিক্ষণীয়: তাঁকে স্বীকার করুন, নিজেকে স্বীকার করুন, আর চাওয়াটি না-বলা থাকতে দিন।',
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
          bn: 'বলেছেন সেই একজন, যাঁর গুনাহ আগেই ক্ষমা করা হয়েছিল। তওবা যদি কেবল ক্ষতির মেরামত হতো, এই বাক্যের কোনো অর্থ থাকত না — এটি সেই পথও, যা দিয়ে তাঁদের মধ্যে নিকটতম জন নিকটে ছিলেন।',
        },
      },
    ],
    practice: [
      {
        en: 'Learn the du‘ā of Adam (AS) from 7:23 in Arabic. It is short, it is the oldest one there is, and it fits any sin without modification.',
        bn: '৭:২৩ থেকে আদম (আ)-এর দোয়াটি আরবিতে শিখুন। এটি ছোট, এটিই সবচেয়ে পুরনো, আর কোনো পরিবর্তন ছাড়াই যেকোনো গুনাহে খাটে।',
      },
      {
        en: 'When you are in the dark and cannot form a request, use the du‘ā of Yunus (AS). It is designed for exactly that state.',
        bn: 'যখন অন্ধকারে আছেন আর কোনো চাওয়া গুছিয়ে উঠতে পারছেন না, ইউনুস (আ)-এর দোয়াটি পড়ুন। ঠিক ওই অবস্থার জন্যই এটি তৈরি।',
      },
      {
        en: 'Stop treating your struggle as disqualifying. Every name in this chapter belongs to someone Allah chose while knowing what they would say to Him afterwards.',
        bn: 'নিজের সংগ্রামকে অযোগ্যতার প্রমাণ ভাবা বন্ধ করুন। এই অধ্যায়ের প্রতিটি নামই এমন কারও, যাঁকে আল্লাহ বেছে নিয়েছেন এটি জেনেই যে পরে তাঁরা তাঁকে কী বলবেন।',
      },
    ],
  },

  {
    id: 'how-to-return',
    wing: 'mercy',
    emoji: '\u{1F9ED}',
    title: { en: 'How to Actually Come Back', bn: 'বাস্তবে কীভাবে ফিরবেন' },
    tagline: {
      en: 'Less a chapter than a set of instructions — what to say, when to say it, and what it does.',
      bn: 'অধ্যায়ের চেয়ে বেশি একগুচ্ছ নির্দেশনা — কী বলবেন, কখন বলবেন, আর তাতে কী হয়।',
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
      bn: 'আদর্শ মুসলিমের কুরআনি প্রতিকৃতি — বারোটি আয়াত, আর শুরুই হয় তাঁরা কীভাবে হাঁটেন তা দিয়ে।',
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
      bn: 'সাফল্য ঘোষিত অতীত কালে, তারপর তালিকাবদ্ধ — সাতটি বিষয়, আর নামাজ আসে দুইবার।',
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
    title: { en: 'Ten Qualities, Named Twice', bn: 'দশ গুণ, দুইবার করে' },
    tagline: {
      en: 'One verse lists the whole ideal — and says every item of it belongs to men and women alike.',
      bn: 'একটি আয়াতেই গোটা আদর্শের তালিকা — আর বলা হয়েছে এর প্রতিটি বিষয়ই পুরুষ ও নারী উভয়ের।',
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
    title: { en: 'Luqman’s Advice to His Son', bn: 'লুকমানের উপদেশ' },
    tagline: {
      en: 'A father with limited time says only what matters — and the Qur’an preserved the whole conversation.',
      bn: 'হাতে সময় কম থাকা এক পিতা কেবল যা জরুরি তাই বলেন — আর কুরআন গোটা কথোপকথনটি সংরক্ষণ করেছে।',
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
      bn: 'সিদক কেবল সত্য কথা বলা নয়। এটি ভেতরে-বাইরে একই মানুষ হওয়া।',
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
      bn: 'ফেরাউনের কাছে পাঠানো দুই নবীকে আল্লাহ বলেছিলেন তার সাথে কোমল ভাষায় কথা বলতে। আমাদের খুব কম মানুষকেই ফেরাউনের সাথে কারবার করতে হয়।',
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
    title: { en: 'Pardon and Repel With Better', bn: 'ক্ষমা ও উত্তম দিয়ে প্রতিহত করা' },
    tagline: {
      en: 'The Qur’an grants the right to retaliate, then spends several verses talking you out of using it.',
      bn: 'কুরআন প্রতিশোধের অধিকার দেয়, তারপর কয়েকটি আয়াত ব্যয় করে আপনাকে তা ব্যবহার থেকে ফেরাতে।',
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
      bn: 'সুন্নাহতে অহংকারের সংজ্ঞা অস্বাভাবিক নিখুঁত — আর সংজ্ঞার কোনো অংশই আত্মবিশ্বাস নিয়ে নয়।',
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
    title: { en: 'The Tongue', bn: 'জিহ্বা' },
    tagline: {
      en: 'Two verses in Surah al-Hujurat outlaw six ordinary social habits by name.',
      bn: 'সূরা আল-হুজুরাতের দুটি আয়াত নাম ধরে ছয়টি সাধারণ সামাজিক অভ্যাস নিষিদ্ধ করে।',
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
      bn: 'আমানত মানে আপনার হাতে রাখা এমন যেকোনো কিছু যা আপনার নয় — আর তা আপনার ধারণার চেয়ে অনেক বেশি।',
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
      bn: 'দুটি মিলে মানুষের সব অবস্থাই ঢেকে ফেলে। তৃতীয় কোনো অবস্থা নেই।',
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
      bn: 'কুরআন আপনার চারপাশের মানুষকে নৈকট্য অনুসারে সাজায়, আর সবচেয়ে কাছের জনদেরই আগে রাখে।',
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
      bn: 'দুটি আয়াত দাবি করে আপনি নিজের বিরুদ্ধেও ন্যায় করবেন, আর যাদের ঘৃণা করার সব কারণ আছে তাদের প্রতিও।',
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
    title: { en: 'Modesty', bn: 'লজ্জা ও শালীনতা' },
    tagline: {
      en: 'Ḥayā’ is called a branch of faith — and the Prophet ﷺ said that if you lose it, nothing else restrains you.',
      bn: 'হায়াকে বলা হয়েছে ঈমানের একটি শাখা — আর নবী ﷺ বলেছেন, তা হারালে আর কিছুই আপনাকে আটকাবে না।',
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
      bn: 'দান নিয়ে কুরআনের হিসাব সাধারণ হিসাবের মতো চলে না।',
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
      bn: 'এই অংশের সবকিছুই একটি জীবনে বাস্তবে ছিল। আয়েশা (রা) বলেছেন, তাঁর চরিত্রই ছিল কুরআন।',
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
];
