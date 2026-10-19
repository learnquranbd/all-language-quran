/**
 * Tajweed — DATA MODULE
 * Extracted from js/tajweed-learn.js.
 * Globals: TAJWEED_LESSONS, TAJWEED_PATH, MAKHARIJ_ZONES, NOON_SAKINAH_RULES,
 *   MEEM_SAKINAH_RULES, TAJWEED_MISTAKES, TAJWEED_RESOURCES, TAJWEED_RULE_EXAMPLES.
 * Loaded BEFORE js/tajweed-learn.js in index.html.
 */

const TAJWEED_LESSONS = {
  ghunnah: { group: 'core', names: { bn: 'গুন্নাহ', ar: 'الغنّة', zh: '鼻音', ja: 'グンナ' }, letters: 'نّ مّ',
    en: 'Nasalisation: hold a nasal sound for 2 counts on a doubled noon or meem (نّ / مّ).',
    bn: 'গুন্নাহ: তাশদীদওয়ালা নূন বা মীমে (نّ / مّ) ২ হরকত পরিমাণ নাকের ভেতর দিয়ে আওয়াজ ধরে রাখা।' },
  qalqalah: { group: 'core', names: { bn: 'কলকলা', ar: 'القلقلة', zh: '回弹', ja: 'カルカラ' }, letters: 'ق ط ب ج د',
    en: 'Echo/bounce: the letters ق ط ب ج د get a slight bounce when bearing sukoon (strongest when stopping).',
    bn: 'কলকলা: ق ط ب ج د এই হরফগুলো সাকিন হলে আওয়াজে হালকা ধাক্কা বা প্রতিধ্বনি হয়; ওয়াকফ করলে সবচেয়ে জোরালো।' },
  ikhfa: { group: 'noon', names: { bn: 'ইখফা', ar: 'الإخفاء', zh: '隐藏', ja: 'イフファー' }, letters: 'ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك',
    en: 'Hiding: noon sakinah/tanween before these 15 letters is pronounced lightly hidden with ghunnah.',
    bn: 'ইখফা: নূন সাকিন বা তানউইনের পরে এই ১৫টি হরফের কোনোটি এলে নূনকে হালকা গোপন করে গুন্নাহসহ পড়তে হয়।' },
  iqlab: { group: 'noon', names: { bn: 'ইকলাব', ar: 'الإقلاب', zh: '转换', ja: 'イクラーブ' }, letters: 'ب',
    en: 'Conversion: noon sakinah/tanween before ب converts to a hidden meem sound with ghunnah.',
    bn: 'ইকলাব: নূন সাকিন বা তানউইনের পরে ب এলে নূন বদলে গোপন মীমের আওয়াজ হয়, গুন্নাহসহ।' },
  idghaam_ghunnah: { group: 'noon', names: { bn: 'ইদগাম (গুন্নাহসহ)', ar: 'الإدغام بغنّة', zh: '带鼻音合并', ja: 'グンナ付きイドガーム' }, letters: 'ي ن م و',
    en: 'Merging with ghunnah: noon sakinah/tanween merges into ي ن م و, keeping the nasal sound.',
    bn: 'ইদগাম (গুন্নাহসহ): নূন সাকিন বা তানউইন পরের ي ن م و-এর সাথে মিশে যায়, তবে গুন্নাহ থেকে যায়।' },
  idghaam_no_ghunnah: { group: 'noon', names: { bn: 'ইদগাম (গুন্নাহ ছাড়া)', ar: 'الإدغام بغير غنّة', zh: '无鼻音合并', ja: 'グンナ無しイドガーム' }, letters: 'ل ر',
    en: 'Merging without ghunnah: noon sakinah/tanween merges completely into ل or ر.',
    bn: 'ইদগাম (গুন্নাহ ছাড়া): নূন সাকিন/তানউইন ل বা ر-তে সম্পূর্ণ মিশে যায়।' },
  ikhfa_shafawi: { group: 'meem', names: { bn: 'ইখফা শাফাবি', ar: 'الإخفاء الشفوي', zh: '唇部隐藏', ja: 'イフファー・シャファウィー' }, letters: 'ب',
    en: 'Labial hiding: meem sakinah before ب is lightly hidden with ghunnah on the lips.',
    bn: 'ইখফা শাফাবি: মীম সাকিনের পরে ب এলে মীমকে হালকা গোপন করে ঠোঁটে গুন্নাহসহ পড়তে হয়।' },
  idghaam_shafawi: { group: 'meem', names: { bn: 'ইদগাম শাফাবি', ar: 'الإدغام الشفوي', zh: '唇部合并', ja: 'イドガーム・シャファウィー' }, letters: 'م',
    en: 'Labial merging: meem sakinah merges into a following م with ghunnah.',
    bn: 'ইদগাম শাফাবি: মীম সাকিন পরবর্তী م-এ গুন্নাহসহ মিশে যায়।' },
  madd_2: { group: 'madd', names: { bn: 'মাদ্দ তবিয়ি (২)', ar: 'المد الطبيعي (2)', zh: '自然长音 (2)', ja: 'マッド・タビーイー (2)' }, letters: 'ا و ي',
    en: 'Natural prolongation: stretch the madd letter exactly 2 counts.',
    bn: 'মাদ্দ তবিয়ি: মাদ্দের অক্ষর ঠিক ২ হরকত টানুন।' },
  madd_246: { group: 'madd', names: { bn: 'মাদ্দ (২/৪/৬)', ar: 'المد (2/4/6)', zh: '弹性长音 (2/4/6)', ja: 'マッド (2/4/6)' }, letters: 'ا و ي',
    en: 'Flexible madd (e.g. when stopping): may be stretched 2, 4 or 6 counts.',
    bn: 'মাদ্দ (২/৪/৬): যে মাদ্দ ২, ৪ বা ৬ হরকত টানা যায়, যেমন ওয়াকফ করার সময়।' },
  madd_munfasil: { group: 'madd', names: { bn: 'মাদ্দ মুনফাসিল (৪-৫)', ar: 'المد المنفصل (4-5)', zh: '分离长音 (4-5)', ja: 'マッド・ムンファシル (4-5)' }, letters: 'ا و ي + ء',
    en: 'Separated madd: madd letter ends a word and hamza starts the next — stretch 4–5 counts.',
    bn: 'মাদ্দ মুনফাসিল: এক শব্দের শেষে মাদ্দ, পরের শব্দের শুরুতে হামযা — ৪–৫ হরকত।' },
  madd_muttasil: { group: 'madd', names: { bn: 'মাদ্দ মুত্তাসিল (৪-৫)', ar: 'المد المتصل (4-5)', zh: '连接长音 (4-5)', ja: 'マッド・ムッタシル (4-5)' }, letters: 'ا و ي + ء',
    en: 'Connected madd: madd letter and hamza in the SAME word — stretch 4–5 counts (obligatory).',
    bn: 'মাদ্দ মুত্তাসিল: একই শব্দে মাদ্দ ও হামযা — ৪–৫ হরকত (ওয়াজিব)।' },
  madd_6: { group: 'madd', names: { bn: 'মাদ্দ লাযিম (৬)', ar: 'المد اللازم (6)', zh: '必须长音 (6)', ja: 'マッド・ラージム (6)' }, letters: 'ا و ي',
    en: 'Madd Lazim: the heaviest madd — stretch 6 counts (only the ع of كٓهيعٓصٓ and عٓسٓقٓ may also take 4).',
    bn: 'মাদ্দ লাযিম: সবচেয়ে ভারী মাদ্দ, ৬ হরকত টানতে হয় (শুধু كٓهيعٓصٓ ও عٓسٓقٓ-এর ع-এ ৪ হরকতও জায়েয)।' },
  idghaam_mutajanisayn: { group: 'other', names: { bn: 'ইদগাম মুতাজানিসাইন', ar: 'إدغام المتجانسين', zh: '同部位合并', ja: 'イドガーム・ムタジャーニサイン' }, letters: 'ت/ط ث/ذ …',
    en: 'Merging of two letters sharing the same articulation point but differing in attributes (e.g. ت into ط).',
    bn: 'ইদগাম মুতাজানিসাইন: মাখরাজ এক কিন্তু সিফাত আলাদা, এমন দুটি হরফের মিলন (যেমন ت মিশে যায় ط-এ)।' },
  idghaam_mutaqaribayn: { group: 'other', names: { bn: 'ইদগাম মুতাকারিবাইন', ar: 'إدغام المتقاربين', zh: '近部位合并', ja: 'イドガーム・ムタカリバイン' }, letters: 'ق/ك ل/ر …',
    en: 'Merging of two letters with CLOSE articulation points (e.g. ق into ك).',
    bn: 'ইদগাম মুতাকারিবাইন: কাছাকাছি মাখরাজের দুটি অক্ষরের মিলন (যেমন ق → ك)।' },
  hamzat_wasl: { group: 'other', names: { bn: 'হামযাতুল ওয়াসল', ar: 'همزة الوصل', zh: '连接性哈姆扎', ja: 'ハムザトゥル＝ワスル' }, letters: 'ٱ',
    en: 'Connecting hamza: pronounced only when you START at it; silent when you continue through.',
    bn: 'হামযাতুল ওয়াসল: এখান থেকে পড়া শুরু করলে উচ্চারিত হয়; আগের শব্দের সাথে মিলিয়ে পড়লে পড়া হয় না।' },
  lam_shamsiyyah: { group: 'other', names: { bn: 'লাম শামসিয়্যাহ', ar: 'اللام الشمسية', zh: '太阳字母的لام', ja: 'ラーム・シャムスィッヤ' }, letters: 'ال', lettersExtraKey: 'tj_sun_letters',
    en: 'Sun lam: the ل of ال is silent and assimilates into the following "sun letter" (which doubles).',
    bn: 'লাম শামসিয়্যাহ: ال-এর লাম পড়া হয় না, পরের "শামসি হরফে" মিশে যায় (সেই হরফে তাশদীদ হয়)।' },
  silent: { group: 'other', names: { bn: 'নীরব অক্ষর', ar: 'حرف صامت', zh: '静音字母', ja: '無音文字' }, letters: '—',
    en: 'Silent letter: written in the script but not pronounced.',
    bn: 'উচ্চারণহীন হরফ: লেখা থাকে, কিন্তু পড়া হয় না।' },

  // ── Noon Sākinah: Iẓhār — the two clear-pronunciation rulings ────────────
  izhar_halqi: { group: 'noon', names: { bn: 'ইযহার হালকি', ar: 'الإظهار الحلقي' }, letters: 'ء هـ ع ح غ خ',
    en: 'Clear pronunciation: noon sakinah/tanween before the six throat letters is pronounced clearly with no ghunnah and no merging.',
    bn: 'ইযহার হালকি: নূন সাকিন/তানউইনের পরে ছয়টি গলার হরফ এলে গুন্নাহ বা মিলন ছাড়াই স্পষ্ট উচ্চারণ।' },
  izhar_mutlaq: { group: 'noon', names: { bn: 'ইযহার মুতলাক', ar: 'الإظهار المطلق' }, letters: 'ي و',
    en: 'Absolute clarity: noon sakinah followed by ي or و within the SAME word is always clear — never merged. It occurs in only four words in the Quran: دُنْيَا, بُنْيَان, صِنْوَان, قِنْوَان.',
    bn: 'ইযহার মুতলাক: একই শব্দে নূন সাকিনের পরে ي বা و এলে সর্বদা স্পষ্ট উচ্চারণ — কোনো মিলন নেই। কুরআনে মাত্র চারটি শব্দে আসে: دُنْيَا, بُنْيَان, صِنْوَان, قِنْوَان।' },

  // ── Madd al-Far'ī: derived/secondary madd types ──────────────────────────
  madd_aridh: { group: 'madd', names: { bn: 'মাদ্দ আরিদ লিস-সুকুন (২/৪/৬)', ar: 'المد العارض للسكون (2/4/6)' }, letters: 'ا و ي',
    en: "Madd 'Āridh li-Sukoon: stopping at a verse end makes the letter after the madd temporarily silent — stretch 2, 4 or 6 counts. Choose one length and keep it consistent throughout the recitation.",
    bn: 'মাদ্দ আরিদ লিস-সুকুন: আয়াতের শেষে থামলে মাদ্দের হরফের পরের হরফটি সাময়িকভাবে সাকিন হয়ে যায়; তখন ২, ৪ বা ৬ হরকত টানা যায়। যেকোনো একটি মাপ বেছে নিন, আর পুরো তিলাওয়াতে সেটাই ধরে রাখুন।' },
  madd_lin: { group: 'madd', names: { bn: 'মাদ্দ লিন (২/৪/৬)', ar: 'مد اللين (2/4/6)' }, letters: 'وْ يْ',
    en: "Madd al-Līn: و or ي bearing sukoon, preceded by fathah — the soft 'liin' sound heard when stopping (e.g. خَوْف, بَيْت, رَيْب). Stretch 2, 4 or 6 counts at a waqf.",
    bn: 'মাদ্দ লিন: যবরের পরে সাকিনওয়ালা و বা ي; থামার সময় এই নরম আওয়াজ শোনা যায় (যেমন خَوْف, بَيْت, رَيْب)। ওয়াকফে ২, ৪ বা ৬ হরকত টানা যায়।' },
  madd_badal: { group: 'madd', names: { bn: 'মাদ্দ বদল (২)', ar: 'مد البدل (2)' }, letters: 'ء + ا و ي',
    en: 'Madd al-Badal: a hamza precedes a madd letter in the same word (the madd substituted for an original hamza). Recited as 2 counts in the narration of Hafs \'an \'Asim (e.g. آمَنَ, إِيمَان, أُوتِيَ).',
    bn: 'মাদ্দ বদল: একই শব্দে হামযার পরে মাদ্দের হরফ আসে (মূলের একটি হামযার বদলে এই মাদ্দ এসেছে)। হাফস আন আসিমের রিওয়ায়েতে ২ হরকত পড়া হয় (যেমন آمَنَ, إِيمَان, أُوتِيَ)।' },
  madd_iwad: { group: 'madd', names: { bn: 'মাদ্দ ইওয়াদ (২)', ar: 'مد العوض (2)' }, letters: 'ـً',
    en: "Madd al-'Iwad: stopping on a word ending in tanwin fathah (ـً) — the tanwin is dropped and the fathah is prolonged for 2 counts as compensation (e.g. عَلِيمًا → عَلِيمَا at waqf). This does not apply to ة with tanwin (ةً), which becomes a sākin هـ at waqf.",
    bn: 'মাদ্দ ইওয়াদ: দুই যবরের তানউইন (ـً) দিয়ে শেষ হওয়া শব্দে থামলে তানউইন বাদ পড়ে, আর তার বদলে যবরটি ২ হরকত টেনে পড়া হয় (যেমন ওয়াকফে عَلِيمًا → عَلِيمَا)। তানউইনওয়ালা ة (ةً)-তে এ নিয়ম খাটে না; ওয়াকফে তা সাকিন هـ হয়ে যায়।' },

  // ── Ra' rules: tafkhīm (heavy) and tarqīq (light) ────────────────────────
  ra_tafkhim: { group: 'ra', names: { bn: 'রা তাফখিম (ভারী রা)', ar: 'تفخيم الراء' }, letters: 'ر',
    en: "Heavy Ra': pronounced full and heavy when it carries fathah or dammah, has sukoon after a fathah/dammah, or comes after alif. Also heavy at the start of a word after hamzat al-wasl.",
    bn: 'রা তাফখিম: রা-তে যবর বা পেশ থাকলে, যবর বা পেশের পরে রা সাকিন হলে, কিংবা আলিফের পরে এলে রা মোটা ও ভারী করে পড়া হয়। হামযাতুল ওয়াসলের পরে শব্দের শুরুতে এলেও রা ভারী হয়।' },
  ra_tarqiq: { group: 'ra', names: { bn: 'রা তারকিক (হালকা রা)', ar: 'ترقيق الراء' }, letters: 'ر',
    en: "Light Ra': thin and light when it carries kasrah (e.g. رِزْق), follows a kasrah into sukoon (e.g. فِرْعَوْن, stopping on ذِكْر), or in certain exceptional waqf cases governed by classical rules.",
    bn: 'রা তারকিক: রা-তে যের থাকলে (যেমন رِزْق), যেরের পরে রা সাকিন হলে (যেমন فِرْعَوْن, ওয়াকফে ذِكْر), আর প্রাচীন কায়দা অনুযায়ী ওয়াকফের কিছু ব্যতিক্রমী ক্ষেত্রে রা পাতলা ও হালকা করে পড়া হয়।' },

  // ── Waqf & special-letter rules ───────────────────────────────────────────
  lam_qamariyyah: { group: 'other', names: { bn: 'লাম কামারিয়্যাহ', ar: 'اللام القمرية' }, letters: 'ال',
    en: "Moon lam: the ل of ال is pronounced clearly before the fourteen 'moon letters' (ا ب ج ح خ ع غ ف ق ك م و ه ي) — the lam is audible and the moon letter takes no shadda.",
    bn: 'লাম কামারিয়্যাহ: চৌদ্দটি "কামারি হরফ" (ا ب ج ح خ ع غ ف ق ك م و ه ي)-এর আগে ال-এর লাম স্পষ্ট পড়া হয়: লাম শোনা যায়, আর পরের হরফে তাশদীদ থাকে না।' },
  ha_sakt: { group: 'other', names: { bn: 'হা আস-সাকত', ar: 'هاء السكت' }, letters: 'هْ',
    en: "Ha' as-Sakt: a هـ with sukoon (هْ) appended to certain Quranic words (e.g. مَالِيَهْ, سُلْطَانِيَهْ, كِتَابِيَهْ) to preserve the vowel before it. In Hafs 'an 'Asim it is pronounced both when stopping and when continuing.",
    bn: 'হা আস-সাকত: কুরআনের কিছু শব্দের শেষে সাকিনসহ هـ (هْ) যোগ করা হয়, যাতে আগের হরকতটি বজায় থাকে (যেমন مَالِيَهْ, سُلْطَانِيَهْ, كِتَابِيَهْ)। হাফস আন আসিমের রিওয়ায়েতে থামলেও, মিলিয়ে পড়লেও এটি উচ্চারিত হয়।' },
  sakt: { group: 'other', names: { bn: 'সাকত', ar: 'السكت' }, letters: '—',
    en: "Sakt: a brief, silent pause without inhaling at four obligatory places in the Quran in Hafs 'an 'Asim (e.g. عِوَجاً|قَيِّماً, مَرْقَدِنَا|هَذَا, مَنْ|رَاقٍ, بَلْ|رَانَ).",
    bn: "সাকত: হাফস আন আসিমের রিওয়ায়েতে কুরআনের চারটি জায়গায় শ্বাস না নিয়ে অল্প সময় আওয়াজ বন্ধ রাখা জরুরি (যেমন عِوَجاً|قَيِّماً, مَرْقَدِنَا|هَذَا, مَنْ|رَاقٍ, بَلْ|رَانَ)।" },

  // ── Meem Sākinah: the clear ruling ────────────────────────────────────────
  izhar_shafawi: { group: 'meem', names: { bn: 'ইযহার শাফাবি', ar: 'الإظهار الشفوي' }, letters: '26 letters (all except ب م)',
    en: "Labial clarity: meem sakinah (مْ) before any of the 26 letters other than ب and م is pronounced clearly with no ghunnah. Take extra care before و and ف — sharing the meem's articulation area — so the meem is not accidentally hidden.",
    bn: 'ইযহার শাফাবি: মীম সাকিন (مْ)-এর পরে ب ও م ছাড়া বাকি ২৬টি হরফের যেকোনোটি এলে মীম গুন্নাহ ছাড়া স্পষ্ট পড়া হয়। و ও ف-এর আগে বিশেষ সতর্ক থাকুন; এ দুটির মাখরাজ মীমের কাছাকাছি, তাই অসাবধানে মীম গোপন হয়ে যেতে পারে।' },

  // ── Idghām of two identical letters ───────────────────────────────────────
  idghaam_mutamathilayn: { group: 'other', names: { bn: 'ইদগাম মুতামাসিলাইন', ar: 'إدغام المتماثلين' }, letters: 'same letter ×2',
    en: 'Merging of two identical letters: when a letter with sukoon is followed by the same letter (same makhraj AND same attributes), the first merges completely into the second, which takes a shaddah (e.g. اضْرِب بِّعَصَاكَ, قَد دَّخَلُوا).',
    bn: 'ইদগাম মুতামাসিলাইন: সাকিনওয়ালা কোনো হরফের পরে হুবহু সেই হরফই এলে (মাখরাজ ও সিফাত দুটোই এক), প্রথমটি দ্বিতীয়টিতে পুরোপুরি মিশে যায়, আর দ্বিতীয়টিতে তাশদীদ হয় (যেমন اضْرِب بِّعَصَاكَ, قَد دَّخَلُوا)।' },

  // ── Lafẓ al-Jalālah: the lām of the Name "Allāh" ──────────────────────────
  lafz_jalalah: { group: 'ra', names: { bn: 'লাফযুল জালালাহ (আল্লাহ শব্দের লাম)', ar: 'لفظ الجلالة (اللّٰه)' }, letters: 'اللّٰه',
    en: 'The lām of the Name اللّٰه is heavy (tafkhim) when preceded by a fathah or dammah (e.g. قَالَ اللّٰهُ, هُوَ اللّٰهُ), and light (tarqiq) when preceded by a kasrah (e.g. بِسْمِ اللّٰهِ, الْحَمْدُ لِلّٰهِ).',
    bn: 'اللّٰه নামের লাম: আগে যবর বা পেশ থাকলে মোটা (তাফখিম) পড়া হয় (যেমন قَالَ اللّٰهُ, هُوَ اللّٰهُ), আর যের থাকলে পাতলা (তারকিক) (যেমন بِسْمِ اللّٰهِ, الْحَمْدُ لِلّٰهِ)।' },

  // ── Istiʿlāʾ: the seven ever-heavy letters ────────────────────────────────
  tafkhim_istila: { group: 'ra', names: { bn: 'তাফখিম (ইসতিলা হরফ)', ar: 'تفخيم حروف الاستعلاء' }, letters: 'خ ص ض غ ط ق ظ',
    en: "Letters of isti'la (خُصَّ ضَغْطٍ قِظْ): خ ص ض غ ط ق ظ are always heavy (mufakhkham) — the back of the tongue rises regardless of their vowel, and they colour the surrounding vowels (e.g. خَلَقَ, الصِّرَاطَ, الْعَظِيم).",
    bn: 'ইসতিলার হরফ (خُصَّ ضَغْطٍ قِظْ): خ ص ض غ ط ق ظ সবসময় মোটা (মুফাখখাম) পড়া হয়। হরকত যা-ই হোক, জিহ্বার গোড়া উপরে ওঠে, আর আশপাশের হরকতের আওয়াজেও তার ছাপ পড়ে (যেমন خَلَقَ, الصِّرَاطَ, الْعَظِيم)।' },

  // ── Madd al-Ṣilah & Madd al-Farq ──────────────────────────────────────────
  madd_silah: { group: 'madd', names: { bn: 'মাদ্দ সিলাহ (২ / ৪-৫)', ar: 'مد الصلة (2 / 4-5)' }, letters: 'ـهُ ـهِ',
    en: 'Madd al-Silah: the pronoun haa (ـهُ / ـهِ) between two voweled letters is stretched as a hidden و/ي. Silah Sughra = 2 counts before a normal letter (e.g. لَهُ مَا); Silah Kubra = 4–5 counts before a hamzat qatʿ (e.g. مَالَهُ أَخْلَدَهُ).',
    bn: 'মাদ্দ সিলাহ: হরকতওয়ালা দুই হরফের মাঝে থাকা সর্বনামের হা (ـهُ / ـهِ) না-লেখা و/ي-এর মতো টেনে পড়া হয়। সিলাহ সুগরা: সাধারণ হরফের আগে ২ হরকত (যেমন لَهُ مَا); সিলাহ কুবরা: হামযাতুল ক্বাতের আগে ৪–৫ হরকত (যেমন مَالَهُ أَخْلَدَهُ)।' },
  madd_farq: { group: 'madd', names: { bn: 'মাদ্দ ফারক (৬)', ar: 'مد الفرق (6)' }, letters: 'ٱ + ال',
    en: 'Madd al-Farq: an interrogative hamza meets the hamzat al-wasl of ال, lengthened 6 counts to distinguish a question from a statement (e.g. آلذَّكَرَيْنِ, آللّٰهُ أَذِنَ, آلْآنَ). One of six such places in the Quran.',
    bn: 'মাদ্দ ফারক: প্রশ্নের হামযা ال-এর হামযাতুল ওয়াসলের সাথে মিললে ৬ হরকত টানা হয়, যাতে প্রশ্ন আর সাধারণ কথা আলাদা বোঝা যায় (যেমন آلذَّكَرَيْنِ, آللّٰهُ أَذِنَ, آلْآنَ)। কুরআনে এমন জায়গা মোট ছয়টি।' },

  // ── Hamzat al-Qaṭʿ: the always-pronounced hamza (pairs with hamzat al-wasl) ─
  hamzat_qat: { group: 'other', names: { bn: 'হামযাতুল ক্বাত', ar: 'همزة القطع' }, letters: 'ء أ إ ؤ ئ',
    en: 'Cutting hamza: a fixed, always-pronounced hamza (ء / أ / إ / ؤ / ئ) — sounded whether you START at it or continue THROUGH it, unlike hamzat al-wasl which drops in continuation (e.g. أَنْعَمْتَ, إِيَّاكَ, اقْرَأْ).',
    bn: 'হামযাতুল ক্বাত: স্থায়ী হামযা (ء / أ / إ / ؤ / ئ), এখান থেকে শুরু করলেও, আগের শব্দের সাথে মিলিয়ে পড়লেও সবসময় উচ্চারিত হয় (যেমন أَنْعَمْتَ, إِيَّاكَ, اقْرَأْ)। হামযাতুল ওয়াসল এর উল্টো; মিলিয়ে পড়লে তা বাদ পড়ে।' },

  // ── Tarqīq of the general Lām (every lām except the Name Allāh) ─────────────
  tarqiq_lam: { group: 'ra', names: { bn: 'তারকিকুল লাম (সাধারণ লাম)', ar: 'ترقيق اللام' }, letters: 'ل',
    en: 'Light Lām: the letter ل is recited light (tarqīq) in every word of the Quran — the ONLY heavy lām is that of the Name اللّٰه after a fathah or dammah (so لَا, قُلْ, مَالِكِ are all light).',
    bn: 'তারকিকুল লাম: কুরআনের প্রতিটি শব্দে ل পাতলা (তারকিক) পড়া হয়; একমাত্র ব্যতিক্রম اللّٰه নামের লাম, যবর বা পেশের পরে তা মোটা হয় (তাই لَا, قُلْ, مَالِكِ সবই পাতলা)।' },

  // ── Marātib al-Ghunnah: the levels/strength of the nasal sound ──────────────
  ghunnah_maratib: { group: 'core', names: { bn: 'গুন্নাহর স্তর (মারাতিব)', ar: 'مراتب الغنّة' }, letters: 'ن م',
    en: 'Levels of ghunnah: the nasal sound varies in strength — strongest on a doubled نّ/مّ, then in idghām, then ikhfā & iqlāb (~2 counts each), lighter on a sākinah with iẓhār, and lightest on a voweled ن/م.',
    bn: 'গুন্নাহর স্তর: নাকের আওয়াজ সব জায়গায় সমান জোরালো নয়। সবচেয়ে জোরালো তাশদীদওয়ালা نّ/مّ-এ, তারপর ইদগামে, তারপর ইখফা ও ইকলাবে (প্রতিটিতে প্রায় ২ হরকত); ইযহারের সাকিন নূন/মীমে হালকা, আর হরকতওয়ালা ن/م-এ সবচেয়ে হালকা।' },

  // ── Waqf & Ibtidāʾ: stopping and starting correctly ────────────────────────
  waqf_ibtida: { group: 'other', names: { bn: 'ওয়াকফ ও ইবতিদা', ar: 'الوقف والابتداء' }, letters: '—',
    en: 'Stopping & starting: choosing correct places to pause (waqf) and resume (ibtidāʾ). A tāmm (complete) stop ends a full meaning, e.g. a verse end; a ḥasan stop is sound mid-verse; avoid a qabīḥ stop that breaks the meaning. A tie-mark (muʿānaqah ۛ) means stop at only ONE of two adjacent spots.',
    bn: 'ওয়াকফ ও ইবতিদা: কোথায় থামবেন (ওয়াকফ) আর কোথা থেকে আবার শুরু করবেন (ইবতিদা), তার সঠিক জায়গা বেছে নেওয়া। তাম্ম (পূর্ণ) ওয়াকফে পুরো অর্থ শেষ হয়, যেমন আয়াতের শেষে; হাসান ওয়াকফ আয়াতের মাঝেও ঠিক আছে; আর যে কবিহ ওয়াকফ অর্থ নষ্ট করে, তা এড়িয়ে চলুন। মুআনাকা চিহ্ন (ۛ) মানে পাশাপাশি দুই জায়গার শুধু একটিতে থামবেন।' },
};

/**
 * Structured learning path: classical teaching order. A level is "complete"
 * when every rule in it is marked learned; the next level then unlocks
 * (advisory only — all rule cards stay reachable below).
 */
const TAJWEED_PATH = [
  { level: 'beginner', emoji: '🌱', labelKey: 'tj_level_beginner', fallback: 'Beginner',
    rules: ['madd_2', 'lam_shamsiyyah', 'lam_qamariyyah', 'hamzat_wasl', 'hamzat_qat', 'silent', 'ghunnah', 'qalqalah', 'izhar_halqi'] },
  { level: 'intermediate', emoji: '🌿', labelKey: 'tj_level_intermediate', fallback: 'Intermediate',
    rules: ['ikhfa', 'iqlab', 'idghaam_ghunnah', 'idghaam_no_ghunnah', 'ikhfa_shafawi', 'idghaam_shafawi', 'izhar_shafawi', 'izhar_mutlaq', 'madd_aridh', 'madd_lin', 'ra_tafkhim', 'ra_tarqiq', 'lafz_jalalah', 'tarqiq_lam', 'tafkhim_istila', 'ghunnah_maratib'] },
  { level: 'advanced', emoji: '🌳', labelKey: 'tj_level_advanced', fallback: 'Advanced',
    rules: ['madd_muttasil', 'madd_munfasil', 'madd_246', 'madd_6', 'madd_badal', 'madd_iwad', 'madd_silah', 'madd_farq', 'idghaam_mutamathilayn', 'idghaam_mutajanisayn', 'idghaam_mutaqaribayn', 'ha_sakt', 'sakt', 'waqf_ibtida'] },
];

/**
 * The classical 17 makharij (articulation points) in 5 zones, as taught in
 * standard tajweed curricula (al-Jazariyyah ordering). Letters only — no
 * example words needed, so nothing to verify against the corpus.
 */
const MAKHARIJ_ZONES = [
  { key: 'jawf', ar: 'الجوف', color: '#3B82F6',
    names: { en: 'Al-Jawf — the empty space of the mouth and throat', bn: 'আল-জাওফ — মুখ ও গলার খালি জায়গা' },
    points: [
      { letters: 'ا و ي', pointName: 'الجوف',
        en: 'The three madd letters — sound flows from the open cavity and ends with the breath.',
        bn: 'মাদ্দের তিন হরফ — খালি জায়গা থেকে আওয়াজ প্রবাহিত হয়ে শ্বাসের সাথে শেষ হয়।' },
    ] },
  { key: 'halq', ar: 'الحلق', color: '#EF4444',
    names: { en: 'Al-Halq — the throat', bn: 'আল-হালক — গলা' },
    points: [
      { letters: 'ء هـ', pointName: 'أقصى الحلق', en: 'Deepest part of the throat (nearest the chest).', bn: 'গলার গভীরতম অংশ (বুকের নিকটবর্তী)।' },
      { letters: 'ع ح', pointName: 'وسط الحلق', en: 'Middle of the throat.', bn: 'গলার মধ্যভাগ।' },
      { letters: 'غ خ', pointName: 'أدنى الحلق', en: 'Top of the throat (nearest the mouth).', bn: 'গলার উপরের অংশ (মুখের নিকটবর্তী)।' },
    ] },
  { key: 'lisan', ar: 'اللسان', color: '#10B981',
    names: { en: 'Al-Lisan — the tongue', bn: 'আল-লিসান — জিহ্বা' },
    points: [
      { letters: 'ق', pointName: 'أقصى اللسان مع الحنك الأعلى', en: 'Deepest part of the tongue with the soft palate above it.', bn: 'জিহ্বার গোড়া ও তার উপরের নরম তালু।' },
      { letters: 'ك', pointName: 'أقصى اللسان فويق مخرج القاف', en: 'Slightly forward of ق — back of the tongue with the palate.', bn: 'ق-এর সামান্য সামনে — জিহ্বার পিছনের অংশ ও তালু।' },
      { letters: 'ج ش ي', pointName: 'وسط اللسان مع الحنك الأعلى', en: 'Middle of the tongue with the roof of the mouth.', bn: 'জিহ্বার মধ্যভাগ ও তালু।' },
      { letters: 'ض', pointName: 'إحدى حافتي اللسان مع الأضراس العليا', en: 'Side(s) of the tongue against the upper molars.', bn: 'জিহ্বার পার্শ্বদেশ ও উপরের মাড়ির দাঁত।' },
      { letters: 'ل', pointName: 'حافة اللسان مع ما يليها من اللثة', en: 'Nearest edge of the tongue with the upper gums.', bn: 'জিহ্বার অগ্রভাগের কিনারা ও উপরের মাড়ি।' },
      { letters: 'ن', pointName: 'طرف اللسان تحت مخرج اللام', en: 'Tip of the tongue with the upper gums, just below the point of ل.', bn: 'জিহ্বার অগ্রভাগ ও উপরের মাড়ি — ل-এর ঠিক নিচে।' },
      { letters: 'ر', pointName: 'طرف اللسان (مع ظهره) قريباً من مخرج النون', en: 'Tip of the tongue (with its back) near the point of ن.', bn: 'জিহ্বার অগ্রভাগ (পিঠসহ) — ن-এর কাছাকাছি স্থান।' },
      { letters: 'ط د ت', pointName: 'طرف اللسان مع أصول الثنايا العليا', en: 'Tip of the tongue with the base of the upper front teeth.', bn: 'জিহ্বার অগ্রভাগ ও উপরের সামনের দাঁতের গোড়া।' },
      { letters: 'ص س ز', pointName: 'طرف اللسان قريباً من الثنايا السفلى', en: 'Tip of the tongue close to the lower front teeth, leaving a small gap.', bn: 'জিহ্বার অগ্রভাগ ও নিচের সামনের দাঁত — সামান্য ফাঁক রেখে।' },
      { letters: 'ظ ذ ث', pointName: 'طرف اللسان مع أطراف الثنايا العليا', en: 'Tip of the tongue with the edges of the upper front teeth.', bn: 'জিহ্বার অগ্রভাগ ও উপরের সামনের দাঁতের কিনারা।' },
    ] },
  { key: 'shafatan', ar: 'الشفتان', color: '#F59E0B',
    names: { en: 'Ash-Shafatan — the two lips', bn: 'আশ-শাফাতান — দুই ঠোঁট' },
    points: [
      { letters: 'ف', pointName: 'باطن الشفة السفلى مع أطراف الثنايا العليا', en: 'Inside of the lower lip with the tips of the upper front teeth.', bn: 'নিচের ঠোঁটের ভেতরের অংশ ও উপরের সামনের দাঁতের প্রান্ত।' },
      { letters: 'ب م و', pointName: 'الشفتان كلتاهما', en: 'The two lips together — closed for ب and م, slightly rounded open for و.', bn: 'দুই ঠোঁট একসাথে — ب ও م-এ বন্ধ, و-তে সামান্য গোল করে খোলা।' },
    ] },
  { key: 'khayshum', ar: 'الخيشوم', color: '#8B5CF6',
    names: { en: 'Al-Khayshum — the nasal cavity', bn: 'আল-খাইশুম — নাসারন্ধ্র' },
    points: [
      { letters: 'نّ مّ', pointName: 'الخيشوم',
        en: 'Source of the ghunnah — in doubled ن/م, ikhfa, iqlab and idgham with ghunnah.',
        bn: 'গুন্নাহর উৎস — নূন/মীম মুশাদ্দাদ, ইখফা, ইকলাব ও গুন্নাহসহ ইদগামে।' },
    ] },
];

/**
 * The four rulings of Noon Sakinah (نْ) & Tanween (ـً ـٍ ـٌ), in the classical
 * teaching order. Izhar Halqi has no colour in the highlighting engine (it is
 * the default "clear" pronunciation), so it carries its own neutral swatch.
 * en/bn text is embedded inline, matching the MAKHARIJ_ZONES style.
 */
const NOON_SAKINAH_RULES = [
  { color: '#64748B', trigger: 'ء هـ ع ح غ خ',
    names: { en: 'Izhar Halqi — clear', bn: 'ইযহার হালকি — স্পষ্ট' },
    en: 'Before the six throat letters, pronounce the noon/tanween clearly with no extra ghunnah or merging.',
    bn: 'ছয়টি গলার হরফের আগে নূন/তানউইন স্পষ্ট উচ্চারণ — অতিরিক্ত গুন্নাহ বা মিলন নয়।' },
  { color: '#169777', trigger: 'ي ر م ل و ن',
    names: { en: 'Idghaam — merging', bn: 'ইদগাম — মিলন' },
    en: 'Merge into the letters of يرملون: with ghunnah in ي ن م و (ينمو), without ghunnah in ل ر.',
    bn: 'يرملون-এর হরফে মিশে যায়: ي ن م و (ينمو)-তে গুন্নাহসহ, ل ر-এ গুন্নাহ ছাড়া।' },
  { color: '#26BFFD', trigger: 'ب',
    names: { en: 'Iqlab — conversion', bn: 'ইকলাব — রূপান্তর' },
    en: 'Before ب the noon/tanween turns into a hidden meem sound, held with ghunnah.',
    bn: 'ب-এর আগে নূন/তানউইন গুন্নাহসহ গোপন মীমের ধ্বনিতে বদলে যায়।' },
  { color: '#9400A8', trigger: 'ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك',
    names: { en: 'Ikhfa — hiding', bn: 'ইখফা — গোপন' },
    en: 'Before the remaining 15 letters, hide the noon lightly between izhar and idghaam, with ghunnah (~2 counts).',
    bn: 'বাকি ১৫টি হরফের আগে নূন হালকাভাবে গোপন — ইযহার ও ইদগামের মাঝামাঝি, গুন্নাহসহ (~২ হরকত)।' },
];

/** The three rulings of Meem Sakinah (مْ). Izhar Shafawi uses a neutral swatch. */
const MEEM_SAKINAH_RULES = [
  { color: '#D500B7', trigger: 'ب',
    names: { en: 'Ikhfa Shafawi — labial hiding', bn: 'ইখফা শাফাবি — ঠোঁটে গোপন' },
    en: 'Before ب the meem sakinah is lightly hidden on the lips, held with ghunnah.',
    bn: 'ب-এর আগে মীম সাকিন ঠোঁটে হালকাভাবে গোপন — গুন্নাহসহ।' },
  { color: '#58B800', trigger: 'م',
    names: { en: 'Idghaam Shafawi — labial merging', bn: 'ইদগাম শাফাবি — ঠোঁটে মিলন' },
    en: 'Before another م the two meems merge into one doubled meem, held with ghunnah.',
    bn: 'পরবর্তী م-এ দুই মীম মিশে একটি মুশাদ্দাদ মীম হয় — গুন্নাহসহ।' },
  { color: '#64748B', trigger: '—',
    names: { en: 'Izhar Shafawi — clear', bn: 'ইযহার শাফাবি — স্পষ্ট' },
    en: 'Before all remaining letters pronounce the meem clearly — take special care with و and ف so it is not hidden.',
    bn: 'বাকি সব হরফের আগে মীম স্পষ্ট উচ্চারণ — বিশেষত و ও ف-এর আগে যেন গোপন না হয়, সতর্ক থাকুন।' },
];

/** Common mistakes per rule family — standard textbook cautions only. */
const TAJWEED_MISTAKES = {
  noon: {
    en: [
      'Pronouncing the noon clearly during ikhfa — it should sit between izhar and idgham: lightly hidden, with ghunnah.',
      'Cutting the ghunnah short — in ikhfa, iqlab and idgham with ghunnah, hold the nasal sound about 2 counts.',
      'Applying idgham inside a single word — دُنْيَا and بُنْيَان are read with clear izhar (izhar mutlaq).',
    ],
    bn: [
      'ইখফায় নূন স্পষ্ট করে পড়া — এটি ইযহার ও ইদগামের মাঝামাঝি: গুন্নাহসহ হালকাভাবে গোপন রাখতে হয়।',
      'গুন্নাহ ছোট করে ফেলা — ইখফা, ইকলাব ও গুন্নাহসহ ইদগামে প্রায় ২ হরকত নাকি আওয়াজ ধরে রাখুন।',
      'এক শব্দের ভিতরে ইদগাম করা — دُنْيَا ও بُنْيَان-এ স্পষ্ট ইযহার হবে (ইযহার মুতলাক)।',
    ],
  },
  meem: {
    en: [
      'Hiding the meem before ف or و — meem sakinah there takes clear izhar (izhar shafawi) and needs extra care.',
      'Dropping the ghunnah when meem sakinah merges into a following م (idgham shafawi).',
      'Pressing the lips too hard in ikhfa shafawi before ب — the closure stays light, with ghunnah.',
    ],
    bn: [
      'ف বা و-এর আগে মীম সাকিন গোপন করা — সেখানে স্পষ্ট ইযহার (ইযহার শাফাবি) হবে; বিশেষ সতর্কতা দরকার।',
      'ইদগাম শাফাবিতে গুন্নাহ বাদ দেওয়া — মীম সাকিন পরের م-এ মিশলে গুন্নাহ বজায় থাকবে।',
      'ইখফা শাফাবিতে ب-এর আগে ঠোঁট খুব শক্ত করে চাপা — ঠোঁট আলতো করে মিলবে, সাথে গুন্নাহ থাকবে।',
    ],
  },
  madd: {
    en: [
      'Stretching natural madd beyond 2 counts — or clipping it below 2.',
      'Shortening madd muttasil below 4 counts — its lengthening is obligatory (wajib).',
      'Mixing lengths for madd munfasil — choose 4 or 5 counts and keep it consistent through the recitation.',
      'Giving madd lazim less than its full 6 counts.',
    ],
    bn: [
      'মাদ্দ তবিয়ি ২ হরকতের বেশি টানা — বা ২-এর কম করা।',
      'মাদ্দ মুত্তাসিল ৪ হরকতের কম টানা — এর দৈর্ঘ্য ওয়াজিব।',
      'মাদ্দ মুনফাসিলে একবার ৪, একবার ৫ — একটি দৈর্ঘ্য বেছে নিয়ে পুরো তিলাওয়াতে তা বজায় রাখুন।',
      'মাদ্দ লাযিম পূর্ণ ৬ হরকতের কম টানা।',
    ],
  },
  core: {
    en: [
      'Turning the qalqalah bounce into a vowel — it must not sound like a fathah, kasrah or dammah.',
      'Applying qalqalah to ق ط ب ج د when they carry a vowel — it happens only with sukoon (strongest when stopping).',
      'Weakening the ghunnah on a doubled ن or م — hold it about 2 counts.',
    ],
    bn: [
      'কলকলার প্রতিধ্বনিকে হরকতের মতো করা — তা যেন ফাতহা, কাসরা বা দাম্মার মতো না শোনায়।',
      'হরকতযুক্ত ق ط ب ج د-এ কলকলা করা — কলকলা কেবল সাকিন অবস্থায় (থামলে সবচেয়ে জোরালো)।',
      'নূন/মীম মুশাদ্দাদে গুন্নাহ দুর্বল করা — প্রায় ২ হরকত ধরে রাখুন।',
    ],
  },
  other: {
    en: [
      'Pronouncing hamzat al-wasl while continuing from the previous word — it is read only when you start at it.',
      'Pronouncing the lam of ال before a sun letter — the lam is silent and the sun letter is doubled.',
      'Pronouncing the lam of ال before a moon letter with shadda — moon lam is clear; no shadda on the following letter.',
      'Extending idgham mutajanisayn/mutaqaribayn beyond their specific letter pairs — merge only where the rule applies.',
      'Dropping ha\' as-sakt when continuing to the next word — in Hafs \'an \'Asim it is pronounced both at a stop and in continuous recitation.',
      'Inserting a breath at the four sakt positions — sakt is a silent pause without inhaling.',
    ],
    bn: [
      'আগের শব্দের সাথে মিলিয়ে পড়ার সময় হামযাতুল ওয়াসল উচ্চারণ করা — সেখান থেকে শুরু করলেই কেবল তা পড়া হয়।',
      'শামসি হরফের আগে ال-এর লাম পড়া — এখানে লাম পড়া হয় না, পরের শামসি হরফে তাশদীদ হয়।',
      'কামারি হরফের আগে ال-এর লাম না পড়ে পরের হরফে তাশদীদ দেওয়া — লাম কামারিয়্যাহতে লাম স্পষ্ট পড়া হয়, পরের হরফে তাশদীদ নেই।',
      'নির্দিষ্ট হরফ-জোড়ার বাইরে ইদগাম মুতাজানিসাইন/মুতাকারিবাইন প্রয়োগ করা — নিয়ম যেখানে প্রযোজ্য কেবল সেখানেই মিলন।',
      'মিলিয়ে পড়ার সময় হা আস-সাকত বাদ দেওয়া — হাফসের রিওয়ায়েতে থামলেও মিলিয়ে পড়লেও এটি উচ্চারিত হয়।',
      'সাকতের চারটি স্থানে শ্বাস নেওয়া — সাকত হলো শ্বাস ছাড়াই নীরব বিরতি।',
    ],
  },
  ra: {
    en: [
      'Making Ra\' heavy when it carries a kasrah — Ra\' takes tarqiq (light) when it carries a kasrah, or has sukoon after a kasrah.',
      'Making Ra\' light when it carries a fathah or dammah — these require tafkhim (heavy Ra\').',
      'Ignoring exceptional cases where Ra\' with sukoon after kasrah is still heavy (e.g. قِرْطَاس, إِرْصَاد) because a heavy isti\'la letter follows it in the same word.',
      'Giving Ra\' the same weight in all contexts — it must switch between tafkhim and tarqiq based on its vowel environment.',
    ],
    bn: [
      'কাসরাযুক্ত রা ভারী করা — রা কাসরাযুক্ত হলে বা কাসরার পরে সাকিন হলে তারকিক (হালকা) হয়।',
      'ফাতহা বা দাম্মাওয়ালা রা পাতলা করে পড়া — তখন রা তাফখিম করে, অর্থাৎ মোটা করে পড়তে হয়।',
      'ব্যতিক্রম স্থান উপেক্ষা করা — যেমন قِرْطَاس, إِرْصَاد-এ কাসরার পরে সাকিন রা ভারী হয়, কারণ একই শব্দে তার পরে ভারী ইসতিলার হরফ আছে।',
      'রা সবখানে একইভাবে পড়া — হরকত ও আশপাশের অবস্থা দেখে কোথাও মোটা (তাফখিম), কোথাও পাতলা (তারকিক) পড়তে হয়।',
    ],
  },
  general: {
    en: [
      'Pronouncing Arabic letters through the nearest native-language sound — e.g. using English "t" for ط (which is heavier, emphatic and dental) or "d" for ض (unique to Arabic).',
      'Neglecting the difference between ح (deep, breathy, from the middle throat) and هـ (soft, from the deepest part of the throat) — both are often collapsed into one sound.',
      'Treating ع (voiced pharyngeal consonant) as a plain "a" vowel — it is a distinct consonant produced deep in the throat.',
      'Pronouncing ذ and ظ as "z", and ث as "s" — all three require the tongue tip near or touching the upper teeth.',
      'Dropping ghunnah entirely in fast recitation — the nasal resonance is obligatory and must last approximately 2 counts.',
      'Keeping the final short vowel when stopping (waqf) — at a stop, final short vowels are dropped and the last letter becomes sukoon.',
      'Not distinguishing madd lengths — treating every long vowel equally when recitation requires 2, 4, 5 or 6 counts depending on the rule.',
      'Confusing sukoon (absence of vowel) with a vowel sound — a letter with sukoon is held without any vowel colour.',
      'Pronouncing connective hamza (همزة الوصل) when continuing speech — it is silent in the middle of connected recitation, not a glottal stop.',
      'Applying the same weight to every letter — Arabic has heavy (مفخّم) and light (مرقّق) letters, and confusing them distorts meaning.',
      'Mispronouncing ص, ض, ط, ظ as their light equivalents — these four are always emphatic and raise the quality of surrounding vowels.',
      'Rushing through qalqalah letters without the echo bounce — the echo is brief but must be audible, especially at a waqf (strongest) or mid-word sukoon.',
      // ── Non-Arab learner errors: Bengali / Urdu / Indonesian / Turkish speakers ──
      'Inserting a short vowel (schwa) after consonants bearing sukoon — Bengali, Urdu and Malay speakers influenced by native syllable habits sometimes say "bi-si-mi" for بِسْمِ instead of "bis-mi". Sukoon means no vowel at all.',
      'Pronouncing ق as a plain velar "k" (Urdu/Bengali) or as a glottal stop (some Indonesian speakers) — ق is a uvular stop produced deeper than ك; the back of the tongue presses against the soft palate/uvula.',
      'Using a trilled or heavily rolled ر — Urdu, Bengali, Turkish and Indonesian/Malay speakers often trill; Arabic ر in most positions is a single-tap (flap) not a prolonged trill, though tafkhīm fills the mouth.',
      'Treating ع as a plain vowel "a/i/u" — speakers of Turkish, Indonesian and many South and Southeast Asian languages have no equivalent phoneme; ع requires an audible pharyngeal constriction, not just an open vowel.',
      'Pronouncing the initial hamzat al-qaṭʿ (ء) in أَعُوذُ, أَكْبَرُ, إِلَٰهَ as a soft glide — Bengali/Urdu speakers sometimes open into the following vowel without the crisp glottal stop that hamza demands.',
      'Aspirating ق and ط like ت and ك — English and Turkish speakers habitually add a puff of air to their voiceless stops; ق and ط are majhūr (the breath is held back), while among the stop letters only ت and ك carry hams (an audible flow of breath).',
      'Nasalising long vowels before ن or م that carry a full vowel — ghunnah is only for a doubled نّ/مّ or where ikhfa, iqlab or idgham with ghunnah applies; nasalising the long ā in ٱلرَّحْمَٰنِ or the long ī in ٱلْمُسْتَقِيمَ is hypercorrection.',
      'Applying the same heavy quality to all ر sounds — Turkish and Indonesian speakers may keep ر uniformly thick; remember ر switches between tafkhīm (heavy) and tarqīq (light) strictly based on its vowel environment.',
    ],
    bn: [
      'আরবি হরফ মাতৃভাষার কাছাকাছি ধ্বনিতে পড়া — যেমন ط-এর বদলে ইংরেজি "t" বা বাংলা "ট", অথচ ط আরও ভারী ও দন্তমূলীয়; অথবা ض-এর বদলে "d" (ض আরবির অনন্য হরফ)।',
      'ح (গলার মধ্যভাগ থেকে গভীর, শ্বাসযুক্ত ধ্বনি) ও هـ (গলার গভীরতম অংশ থেকে মৃদু শ্বাস)-এর পার্থক্য না রাখা — উভয়কে একই ধ্বনি মনে করা ভুল।',
      'ع (কণ্ঠনালির ব্যঞ্জনধ্বনি)-কে সাধারণ "আ" স্বরের মতো পড়া — এটি গলার গভীর থেকে উৎপন্ন একটি স্বতন্ত্র ব্যঞ্জন।',
      'ذ ও ظ-কে ز-এর মতো, আর ث-কে س-এর মতো পড়া — তিনটিতেই জিভের আগা উপরের সামনের দাঁতের আগা ছুঁয়ে বা একেবারে কাছে থাকে।',
      'দ্রুত তিলাওয়াতে গুন্নাহ (নাকি অনুরণন) বাদ দেওয়া — গুন্নাহ বাধ্যতামূলক ও প্রায় ২ হরকত স্থায়ী।',
      'ওয়াকফ করার সময়ও শেষ হরফের হরকত পড়ে ফেলা — থামলে শেষ হরকত বাদ যায়, শেষ হরফটি সাকিন করে পড়তে হয়।',
      'মাদ্দের দৈর্ঘ্য আলাদা না রাখা — নিয়ম অনুযায়ী ২, ৪, ৫ বা ৬ হরকত ভিন্ন ভিন্ন হওয়া উচিত।',
      'সুকুন (স্বরহীনতা)-কে স্বরের মতো পড়া — সুকুনযুক্ত হরফ কোনো স্বর ছাড়াই উচ্চারিত হয়।',
      'একাধারে পড়ার সময় হামযাতুল ওয়াসল উচ্চারণ করা — কথার মাঝে এটি নীরব, কোনো গলার শব্দ নয়।',
      'সব হরফকে সমান ওজন দেওয়া — আরবিতে ভারী (মুফাখখাম) ও হালকা (মুরাক্কাক) হরফ রয়েছে, গুলিয়ে ফেললে অর্থ বিকৃত হয়।',
      'ص, ض, ط, ظ-কে এদের পাতলা জোড়া হরফের মতো পড়া — এই চারটি সবসময় মোটা, আর পাশের হরকতের আওয়াজও এদের কারণে মোটা হয়ে যায়।',
      'কলকলার হরফ তাড়াহুড়ায় প্রতিধ্বনি ছাড়া পড়া — প্রতিধ্বনি ছোট হলেও শোনা যেতে হবে; ওয়াকফে তা সবচেয়ে জোরালো, শব্দের মাঝে সাকিন হলেও তা থাকে।',
      // ── অ-আরব শিক্ষার্থীর ভুল: বাংলা / উর্দু / ইন্দোনেশিয়ান / তুর্কি বক্তা ──
      'সাকিন হরফের পরে একটা ছোট স্বর ঢুকিয়ে দেওয়া — মাতৃভাষার অভ্যাসে বাংলা, উর্দু ও মালয়ভাষীরা কখনো কখনো بِسْمِ-কে "বিস-মি" না বলে "বি-সি-মি" বলেন; সাকিন মানে কোনো স্বরই নেই।',
      'ق-কে সাধারণ "ক" (বাংলা/উর্দু) বা গলার শব্দ (ইন্দোনেশিয়ান) হিসেবে পড়া — ق হলো আলজিহ্বার কাছে জিহ্বার গোড়া থেকে উৎপন্ন বর্ণ; ক (ك)-এর চেয়ে গভীরে।',
      'ر টেনে টেনে কাঁপিয়ে পড়া — বাংলা, উর্দু, তুর্কি ও ইন্দোনেশিয়ান শিক্ষার্থীরা প্রায়ই রা কাঁপিয়ে পড়েন; আরবি ر বেশির ভাগ জায়গায় জিভের একটি হালকা টোকা, লম্বা কাঁপুনি নয়, যদিও মোটা রা-তে মুখ ভরে আওয়াজ হয়।',
      'ع-কে শুধু "আ/ই/উ" স্বর ভাবা — তুর্কি, ইন্দোনেশিয়ান এবং দক্ষিণ ও দক্ষিণ-পূর্ব এশিয়ার অনেক ভাষায় এমন ধ্বনি নেই; ع পড়তে গলার মাঝখানে স্পষ্ট চাপ লাগে, শুধু মুখ খুললে হয় না।',
      'أَعُوذُ, أَكْبَرُ, إِلَٰهَ-এর শুরুর হামযাতুল কাত্ব (ء) নরম করে পড়া — বাংলা ও উর্দুভাষী শিক্ষার্থীরা অনেক সময় হামযা ছাড়াই সরাসরি স্বরে চলে যান; হামযায় গলা পরিষ্কারভাবে বন্ধ হয়ে খুলতে হয়।',
      'ق ও ط-কে ت ও ك-এর মতো বাতাস ছেড়ে পড়া — ইংরেজি ও তুর্কিভাষীদের অভ্যাসে অঘোষ স্টপ হরফে বাতাসের ঝাপটা চলে আসে; ق ও ط মাজহুর (শ্বাস আটকে থাকে), আর স্টপ হরফগুলোর মধ্যে কেবল ت ও ك-এ হামস (শ্বাসের প্রবাহ) আছে।',
      'হরকতওয়ালা ن বা م-এর আগের মাদ্দে নাকি সুর ঢুকিয়ে দেওয়া — গুন্নাহ কেবল তাশদীদওয়ালা نّ/مّ-এ, অথবা ইখফা, ইকলাব ও গুন্নাহসহ ইদগামের জায়গায়; তাই ٱلرَّحْمَٰنِ-এর লম্বা আ বা ٱلْمُسْتَقِيمَ-এর লম্বা ঈ-তে নাকি সুর দেওয়া বাড়তি সাবধানতার ভুল।',
      'সব ر-কে একই ভারী মানে পড়া — তুর্কি ও ইন্দোনেশিয়ান শিক্ষার্থীরা র সর্বত্র মোটা রাখেন; মনে রাখুন ر স্বরের পরিবেশ অনুযায়ী তাফখিম (ভারী) ও তারকিক (হালকা)-এর মধ্যে পরিবর্তন করে।',
    ],
  },
};

const TAJWEED_RESOURCES = [
  { name: 'KSU Electronic Mushaf', url: 'https://quran.ksu.edu.sa', emoji: '🕌', descKey: 'tjr_ksu_desc' },
  { name: 'TajweedQuran.com', url: 'https://www.tajweedquran.com', emoji: '📗', descKey: 'tjr_tajweedquran_desc' },
  { name: 'ReciteQuran.com', url: 'https://recitequran.com', emoji: '🎧', descKey: 'tjr_recitequran_desc' },
  { name: 'Tarteel.ai', url: 'https://tarteel.ai', emoji: '🎙️', descKey: 'tjr_tarteel_desc' },
  { name: 'EveryAyah', url: 'https://everyayah.com', emoji: '🔁', descKey: 'tjr_everyayah_desc' },
];

/**
 * Authentic Quranic examples for every rule in TAJWEED_LESSONS.
 * Each entry: { ref: 'S:A', focus: 'exact Arabic word/phrase', noteEn: '...', noteBn: '...' }
 * Sources: al-Jazariyyah, Tuḥfat al-Aṭfāl, Kareema Czerepinski's Complete Illustrated Guide.
 */
const TAJWEED_RULE_EXAMPLES = {

  // ── Core rules ─────────────────────────────────────────────────────────────
  ghunnah: [
    { ref: '2:6',   focus: 'إِنَّ',          noteEn: 'Doubled noon (نّ) in إِنَّ الَّذِينَ — hold the nasal resonance for 2 full counts.',           noteBn: 'إِنَّ الَّذِينَ-এ তাশদীদওয়ালা নূন (نّ): পুরো ২ হরকত গুন্নাহ ধরে রাখুন।' },
    { ref: '108:1', focus: 'إِنَّا',          noteEn: 'إِنَّا أَعْطَيْنَاكَ — doubled noon; resonance flows from al-khayshoom (nasal cavity).',       noteBn: 'إِنَّا أَعْطَيْنَاكَ: তাশদীদওয়ালা নূন (نّ); আওয়াজ আসে খাইশুম (নাকের বাঁশি) থেকে।' },
    { ref: '2:3',   focus: 'مِمَّا',          noteEn: 'Doubled meem (مّ) in وَمِمَّا رَزَقْنَاهُمْ — the same 2-count ghunnah applies to مّ as to نّ.',        noteBn: 'وَمِمَّا رَزَقْنَاهُمْ-এ তাশদীদওয়ালা মীম (مّ): نّ-এর মতো مّ-তেও একই ২ হরকত গুন্নাহ।' },
    { ref: '3:18',  focus: 'أَنَّهُ',        noteEn: 'أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ — doubled noon; avoid shortening below 2 counts.',               noteBn: 'أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ: তাশদীদওয়ালা নূন (نّ); ২ হরকতের কম করবেন না।' },
    { ref: '6:8',   focus: 'ثُمَّ',           noteEn: 'Doubled meem in ثُمَّ لَا يُنظَرُونَ — nasal resonance through the nasal cavity.',               noteBn: 'ثُمَّ لَا يُنظَرُونَ-এ তাশদীদওয়ালা মীম (مّ): আওয়াজ বের হয় নাকের বাঁশি দিয়ে।' },
    { ref: '73:20', focus: 'إِنَّ رَبَّكَ',  noteEn: 'إِنَّ رَبَّكَ يَعْلَمُ — clear 2-count ghunnah on the doubled noon; a common verse for drill.', noteBn: 'إِنَّ رَبَّكَ يَعْلَمُ: তাশদীদওয়ালা নূনে (نّ) স্পষ্ট ২ হরকত গুন্নাহ; অনুশীলনের জন্য পরিচিত আয়াত।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"19:4","focus":"إِنِّى","noteEn":"Doubled noon (نّ) in إِنِّى وَهَنَ ٱلْعَظْمُ — hold the nasal resonance a full 2 counts.","noteBn":"إِنِّى وَهَنَ ٱلْعَظْمُ-এ তাশদীদওয়ালা নূন (نّ): পুরো ২ হরকত গুন্নাহ ধরে রাখুন।"},
    {"ref":"36:3","focus":"إِنَّكَ","noteEn":"إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ — doubled noon; the sound flows from the nasal cavity, not the mouth.","noteBn":"إِنَّكَ لَمِنَ ٱلْمُرْسَلِينَ: তাশদীদওয়ালা নূন (نّ); আওয়াজ আসে নাক থেকে, মুখ থেকে নয়।"},
    {"ref":"55:6","focus":"وَٱلنَّجْمُ","noteEn":"The doubled noon of ٱلنَّجْمُ — 2-count ghunnah on نّ even when it arises from the sun-letter merging.","noteBn":"ٱلنَّجْمُ-এর তাশদীদওয়ালা নূন: শামসি হরফে লাম মিশে গিয়ে তাশদীদ হলেও نّ-এ ২ হরকত গুন্নাহ হবে।"},
    {"ref":"67:5","focus":"زَيَّنَّا","noteEn":"زَيَّنَّا ٱلسَّمَآءَ — doubled noon mid-word; keep the resonance steady for 2 counts.","noteBn":"زَيَّنَّا ٱلسَّمَآءَ: শব্দের মাঝে তাশদীদওয়ালা নূন (نّ); ২ হরকত গুন্নাহ সমানভাবে ধরে রাখুন।"},
    {"ref":"78:1","focus":"عَمَّ","noteEn":"عَمَّ يَتَسَآءَلُونَ — doubled meem (مّ): the same 2-count ghunnah as نّ.","noteBn":"عَمَّ يَتَسَآءَلُونَ: তাশদীদওয়ালা মীম (مّ); نّ-এর মতোই ২ হরকত গুন্নাহ।"},
    {"ref":"80:8","focus":"وَأَمَّا","noteEn":"Doubled meem in وَأَمَّا مَن جَآءَكَ — nasal resonance held 2 counts on مّ.","noteBn":"وَأَمَّا مَن جَآءَكَ-এ তাশদীদওয়ালা মীম: مّ-তে ২ হরকত গুন্নাহ ধরে রাখুন।"}
  ],

  qalqalah: [
    { ref: '112:4', focus: 'أَحَدٌ',            noteEn: 'Stopping on أَحَدٌ — دٌ gets waqf sukoon: maximum qalqalah (waqf is the strongest degree).',  noteBn: 'أَحَدٌ-এ থামলে دٌ ওয়াকফের কারণে সাকিন হয়: কলকলা হয় সবচেয়ে জোরালো (ওয়াকফে কলকলার মাত্রা সর্বোচ্চ)।' },
    { ref: '89:1',  focus: 'وَالْفَجْرِ',      noteEn: 'ج bears sukoon in وَالْفَجْرِ — mid-strength bounce while continuing the recitation.',         noteBn: 'وَالْفَجْرِ-এ جْ সাকিন: মিলিয়ে পড়ার সময় মাঝারি মাত্রার কলকলা।' },
    { ref: '113:1', focus: 'الْفَلَقِ',         noteEn: 'Stopping on الْفَلَقِ — ق gets waqf sukoon: strong echo from the back of the tongue.',           noteBn: 'الْفَلَقِ-এ থামলে ق ওয়াকফে সাকিন হয়: জিহ্বার গোড়া থেকে জোরালো কলকলা।' },
    { ref: '96:1',  focus: 'اقْرَأْ',           noteEn: 'ق bears sukoon in اقْرَأْ — lighter mid-word qalqalah (not at waqf so less intense).',        noteBn: 'اقْرَأْ-এ قْ সাকিন: শব্দের মাঝে, ওয়াকফ নয়, তাই কলকলা তুলনামূলক হালকা।' },
    { ref: '86:1',  focus: 'الطَّارِقِ',       noteEn: 'Stopping on الطَّارِقِ — ق at waqf: strong bounce from the back of the tongue.',               noteBn: 'الطَّارِقِ-এ থামলে ق ওয়াকফে সাকিন হয়: জিহ্বার গোড়া থেকে জোরালো কলকলা।' },
    { ref: '2:7',   focus: 'أَبْصَارِهِمْ',   noteEn: 'ب bears sukoon in أَبْصَارِهِمْ — qalqalah on the lips while recitation continues.',           noteBn: 'أَبْصَارِهِمْ-এ بْ সাকিন: মিলিয়ে পড়ার সময়ও ঠোঁটে কলকলা।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"12:5","focus":"تَقْصُصْ","noteEn":"قْ bears sukoon mid-word in لَا تَقْصُصْ — a light, clear bounce on the qaaf.","noteBn":"لَا تَقْصُصْ-এ শব্দের মাঝে قْ সাকিন: ক্বাফে হালকা কিন্তু স্পষ্ট কলকলা।"},
    {"ref":"18:1","focus":"عَبْدِهِ","noteEn":"بْ with sukoon in عَبْدِهِ — bounce the baa without adding any vowel.","noteBn":"عَبْدِهِ-এ بْ সাকিন: কোনো হরকত যোগ না করে বা-তে কলকলা দিন।"},
    {"ref":"75:1","focus":"أُقْسِمُ","noteEn":"قْ sakinah in لَآ أُقْسِمُ — mid-word qalqalah; the bounce stays small while continuing.","noteBn":"لَآ أُقْسِمُ-এ শব্দের মাঝে قْ সাকিন: মিলিয়ে পড়ার সময় কলকলা ছোট থাকে।"},
    {"ref":"78:6","focus":"نَجْعَلِ","noteEn":"جْ bears sukoon in أَلَمْ نَجْعَلِ — bounce the jeem cleanly; do not soften it to sheen.","noteBn":"أَلَمْ نَجْعَلِ-এ جْ সাকিন: জীমে পরিষ্কার কলকলা দিন; নরম করে শীনের মতো করবেন না।"},
    {"ref":"84:6","focus":"كَدْحًا","noteEn":"دْ sakinah mid-word in كَدْحًا — a crisp bounce on the daal.","noteBn":"كَدْحًا-এ শব্দের মাঝে دْ সাকিন: দালে ছোট, স্পষ্ট কলকলা।"},
    {"ref":"85:12","focus":"بَطْشَ","noteEn":"طْ with sukoon in بَطْشَ رَبِّكَ — qalqalah on the heavy طْ keeps its tafkheem.","noteBn":"بَطْشَ رَبِّكَ-এ طْ সাকিন: মোটা হরফ طْ-এ কলকলা দেওয়ার সময়ও তার মোটা উচ্চারণ (তাফখিম) বজায় থাকে।"}
  ],

  // ── Noon Sākinah & Tanween ─────────────────────────────────────────────────
  izhar_halqi: [
    { ref: '2:106', focus: 'مِنْ آيَةٍ',      noteEn: 'نْ before ء (hamza) — pronounce the noon fully clear; no ghunnah, no merging.',               noteBn: 'ء (হামযা)-এর আগে نْ: নূন পুরোপুরি স্পষ্ট পড়ুন; গুন্নাহ নেই, ইদগামও নেই।' },
    { ref: '2:100', focus: 'مِنْهُمْ',         noteEn: 'نْ before هـ in مِنْهُمْ — izhar: noon is fully audible before the haa.',                    noteBn: 'مِنْهُمْ-এ هـ-এর আগে نْ: ইযহার; হা-এর আগে নূন পুরোপুরি শোনা যায়।' },
    { ref: '13:43', focus: 'وَمَنْ عِندَهُ',  noteEn: 'نْ before ع — izhar halqi: the noon is pronounced clearly, not hidden.',                      noteBn: 'ع-এর আগে نْ: ইযহার হালকি; নূন স্পষ্ট পড়া হয়, গোপন নয়।' },
    { ref: '2:228', focus: 'عَزِيزٌ حَكِيمٌ', noteEn: 'Tanween (ٌ) before حَ — izhar halqi: the noon of tanween is fully clear.',                    noteBn: 'حَ-এর আগে তানউইন (ٌ): ইযহার হালকি; তানউইনের নূন পুরোপুরি স্পষ্ট।' },
    { ref: '49:13', focus: 'عَلِيمٌ خَبِيرٌ', noteEn: 'Tanween (ٌ) before خَ — izhar halqi; note خَ is also a throat letter.',                      noteBn: 'خَ-এর আগে তানউইন (ٌ): ইযহার হালকি; মনে রাখুন, خَ-ও গলার হরফ।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"19:3","focus":"نِدَآءً خَفِيًّا","noteEn":"Tanween (ً) before خَ — izhar halqi: pronounce the tanween-noon clearly before the throat letter.","noteBn":"خَ-এর আগে তানউইন (ً): ইযহার হালকি; গলার হরফের আগে তানউইনের নূন স্পষ্ট পড়ুন।"},
    {"ref":"35:28","focus":"عَزِيزٌ غَفُورٌ","noteEn":"Tanween (ٌ) before غَ — izhar halqi; غ is a throat letter, so no hiding or merging.","noteBn":"غَ-এর আগে তানউইন (ٌ): ইযহার হালকি; غ গলার হরফ, তাই ইখফা বা ইদগাম নেই।"},
    {"ref":"39:3","focus":"مَنْ هُوَ","noteEn":"نْ before هُ across words — izhar: the noon stays fully audible before the haa.","noteBn":"দুই শব্দের মাঝে هُ-এর আগে نْ: ইযহার; হা-এর আগে নূন পুরোপুরি শোনা যায়।"},
    {"ref":"55:26","focus":"مَنْ عَلَيْهَا","noteEn":"نْ before عَ in كُلُّ مَنْ عَلَيْهَا فَانٍ — izhar halqi: fully clear noon, no ghunnah stretch.","noteBn":"كُلُّ مَنْ عَلَيْهَا فَانٍ-এ عَ-এর আগে نْ: ইযহার হালকি; নূন পুরোপুরি স্পষ্ট, গুন্নাহর টান নেই।"},
    {"ref":"73:20","focus":"قَرْضًا حَسَنًا","noteEn":"Tanween (ً) before حَ in قَرْضًا حَسَنًا — clear izhar before the throat letter حَ.","noteBn":"قَرْضًا حَسَنًا-এ حَ-এর আগে তানউইন (ً): গলার হরফ حَ-এর আগে স্পষ্ট ইযহার।"},
    {"ref":"87:5","focus":"غُثَآءً أَحْوَىٰ","noteEn":"Tanween (ً) before hamza (أَ) — izhar halqi: no ghunnah, no merging into the hamza.","noteBn":"হামযা (أَ)-এর আগে তানউইন (ً): ইযহার হালকি; গুন্নাহ নেই, হামযার সাথে মিশেও যায় না।"}
  ],

  izhar_mutlaq: [
    { ref: '2:130', focus: 'الدُّنْيَا',      noteEn: 'نْ before يَ inside ONE word — always clear izhar mutlaq; never merged (unlike cross-word idghaam).', noteBn: 'একই শব্দের ভেতরে يَ-এর আগে نْ: সবসময় স্পষ্ট ইযহার মুতলাক; কখনো ইদগাম হয় না (দুই শব্দের মাঝের ইদগামের মতো নয়)।' },
    { ref: '9:109', focus: 'بُنْيَانَهُ',        noteEn: 'بُنْيَان: نْ before يَ within the same word — clear noon, no ghunnah.',                        noteBn: 'بُنْيَان: একই শব্দে يَ-এর আগে نْ; নূন স্পষ্ট, গুন্নাহ নেই।' },
    { ref: '6:99',  focus: 'قِنْوَانٌ',        noteEn: 'قِنْوَان: نْ before وَ within one word — izhar mutlaq.',                                        noteBn: 'قِنْوَان: একই শব্দে وَ-এর আগে نْ; ইযহার মুতলাক।' },
    { ref: '13:4',  focus: 'صِنْوَانٌ',        noteEn: 'صِنْوَان: نْ before وَ inside one word — no merging; a classical textbook example.',            noteBn: 'صِنْوَان: একই শব্দে وَ-এর আগে نْ; ইদগাম নেই। তাজবীদের কিতাবে প্রচলিত উদাহরণ।' },
    { ref: '61:4',  focus: 'بُنْيَانٌ مَّرْصُوصٌ', noteEn: 'بُنْيَان again at 61:4 — izhar mutlaq inside the word, then the tanween merges into مَّ across the word boundary: both rules side by side.', noteBn: '৬১:৪-এ আবার بُنْيَان: শব্দের ভেতরে ইযহার মুতলাক, তারপর তানউইন শব্দ পেরিয়ে পরের مَّ-এ মিশে যায়। দুই নিয়ম পাশাপাশি।' },
    { ref: '3:14',  focus: 'الدُّنْيَا',        noteEn: 'الدُّنْيَا is by far the most frequent izhar-mutlaq word in the Quran — drill it here in 3:14: clear نْ before يَ, never merged.', noteBn: 'কুরআনে ইযহার মুতলাকের শব্দগুলোর মধ্যে الدُّنْيَا অনেক বেশি আসে। এখানে ৩:১৪-এ অনুশীলন করুন: يَ-এর আগে نْ স্পষ্ট, কখনো ইদগাম নয়।' },
  ],

  ikhfa: [
    { ref: '2:3',   focus: 'يُنفِقُونَ',       noteEn: 'نْ before ف — hide the noon lightly with ghunnah (~2 counts); between izhar and idghaam.',     noteBn: 'ف-এর আগে نْ: নূনকে হালকা গোপন করে গুন্নাহসহ পড়ুন (প্রায় ২ হরকত); ইযহার আর ইদগামের মাঝামাঝি।' },
    { ref: '2:25',  focus: 'مِن تَحْتِهَا',    noteEn: 'نْ before تَ in مِن تَحْتِهَا — ikhfa; the taa is not doubled.',                                noteBn: 'مِن تَحْتِهَا-এ تَ-এর আগে نْ: ইখফা; تَ-তে তাশদীদ হয় না।' },
    { ref: '3:92',  focus: 'مِن شَيْءٍ',        noteEn: 'نْ before شَ — ikhfa with ghunnah; the sheen does not double.',                                noteBn: 'شَ-এর আগে نْ: গুন্নাহসহ ইখফা; শীনে তাশদীদ হয় না।' },
    { ref: '13:23', focus: 'وَمَن صَلَحَ',       noteEn: 'نْ before صَ (emphatic letter) — ikhfa; ghunnah remains clearly nasal.',                       noteBn: 'صَ (মোটা হরফ)-এর আগে نْ: ইখফা; গুন্নাহর নাকের আওয়াজ স্পষ্ট থাকে।' },
    { ref: '27:29', focus: 'كِتَابٌ كَرِيمٌ',  noteEn: 'Tanween (ٌ) before كَ — ikhfa: hidden noon with nasal sound ~2 counts.',                       noteBn: 'كَ-এর আগে তানউইন (ٌ): ইখফা; নূন গোপন, নাকের আওয়াজ প্রায় ২ হরকত।' },
    { ref: '2:4',   focus: 'أُنزِلَ',           noteEn: 'نْ before زَ in أُنزِلَ — ikhfa; a very common word across many verses.',                      noteBn: 'أُنزِلَ-এ زَ-এর আগে نْ: ইখফা; বহু আয়াতে আসা খুব পরিচিত শব্দ।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"19:7","focus":"مِن قَبْلُ","noteEn":"نْ before قَ in مِن قَبْلُ — ikhfa: hide the noon with ghunnah, slightly heavy before قَ.","noteBn":"مِن قَبْلُ-এ قَ-এর আগে نْ: ইখফা; নূন গুন্নাহসহ গোপন করুন, قَ-এর আগে আওয়াজ একটু ভারী হয়।"},
    {"ref":"36:6","focus":"لِتُنذِرَ","noteEn":"نْ before ذَ inside لِتُنذِرَ — ikhfa within one word; ~2 counts of ghunnah.","noteBn":"لِتُنذِرَ-তে ذَ-এর আগে نْ — এক শব্দে ইখফা; ~২ হরকত গুন্নাহ।"},
    {"ref":"67:3","focus":"سَمَٰوَٰتٍ طِبَاقًا","noteEn":"Tanween (ٍ) before طِ — ikhfa; the ghunnah takes a heavy colour before the emphatic طِ.","noteBn":"طِ-এর আগে তানউইন (ٍ) — ইখফা; মোটা হরফের আগে গুন্নাহ ভারী হয়।"},
    {"ref":"73:5","focus":"قَوْلًا ثَقِيلًا","noteEn":"Tanween (ً) before ثَ — ikhfa: light nasal hiding, the thaa is not doubled.","noteBn":"ثَ-এর আগে তানউইন (ً): ইখফা; নাকের আওয়াজে হালকা গোপন, ثَ-তে তাশদীদ হয় না।"},
    {"ref":"80:2","focus":"أَن جَآءَهُ","noteEn":"نْ before جَ in أَن جَآءَهُ — ikhfa across words with ~2 counts of ghunnah.","noteBn":"أَن جَآءَهُ-এ جَ-এর আগে نْ: দুই শব্দের মাঝে ইখফা, প্রায় ২ হরকত গুন্নাহ।"},
    {"ref":"86:5","focus":"فَلْيَنظُرِ","noteEn":"نْ before ظُ inside فَلْيَنظُرِ — ikhfa; keep the ghunnah heavy to match the ظ.","noteBn":"فَلْيَنظُرِ-তে ظُ-এর আগে نْ — ইখফা; ظ-এর সাথে মিলিয়ে গুন্নাহ ভারী।"}
  ],

  iqlab: [
    { ref: '2:18',  focus: 'صُمٌّ بُكْمٌ',      noteEn: 'Tanween (ٌ) before بُ — converts to a hidden meem sound on the lips, held with ghunnah.',     noteBn: 'بُ-এর আগে তানউইন (ٌ): নূন বদলে ঠোঁটে গোপন মীমের আওয়াজ হয়, গুন্নাহসহ ধরে রাখুন।' },
    { ref: '36:52', focus: 'مَن بَعَثَنَا',      noteEn: 'نْ before بَ across word boundary — noon turns into a hidden nasal meem (~2 counts).',        noteBn: 'দুই শব্দের মাঝে بَ-এর আগে نْ: নূন বদলে নাকের আওয়াজের গোপন মীম হয় (প্রায় ২ হরকত)।' },
    { ref: '2:176', focus: 'شِقَاقٍ بَعِيدٍ',   noteEn: 'Tanween (ٍ) before بَ — iqlab: nasal meem sound closes the lips slightly.',                   noteBn: 'بَ-এর আগে তানউইন (ٍ): ইকলাব; নাকের আওয়াজের মীমে ঠোঁট হালকা বন্ধ হয়।' },
    { ref: '2:27',  focus: 'مِن بَعْدِ',          noteEn: 'نْ before بَ — classic iqlab at a word boundary.',                                            noteBn: 'بَ-এর আগে نْ: দুই শব্দের সংযোগে ইকলাবের প্রচলিত উদাহরণ।' },
    { ref: '27:8',  focus: 'أَنۢ بُورِكَ',          noteEn: 'نْ before بُ across words — iqlab with ghunnah; do not merge fully (that would be idghaam).',  noteBn: 'أَنۢ بُورِكَ-এ দুই শব্দের মাঝে بُ-এর আগে نْ: গুন্নাহসহ ইকলাব; পুরোপুরি মিশিয়ে দেবেন না (তা হবে ইদগাম)।' },
    { ref: '2:33',  focus: 'أَنۢبِئْهُم',         noteEn: 'Iqlab INSIDE one word — نْ before ب in أَنۢبِئْهُم; the small ۢ mark in the mushaf shows the conversion to a hidden meem.', noteBn: 'এক শব্দের ভিতরে ইকলাব — أَنۢبِئْهُم-এ ب-এর আগে نْ; মুসহাফের ছোট ۢ চিহ্ন গোপন মীমে রূপান্তর দেখায়।' },
    { ref: '104:4', focus: 'لَيُنۢبَذَنَّ',        noteEn: 'لَيُنۢبَذَنَّ — another within-word iqlab: the نْ turns into a nasal meem before ب, held with ghunnah ~2 counts.', noteBn: 'لَيُنۢبَذَنَّ: শব্দের ভেতরে আরেকটি ইকলাব; ب-এর আগে نْ বদলে নাকের আওয়াজের মীম হয়, প্রায় ২ হরকত গুন্নাহসহ।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"31:10","focus":"فَأَنۢبَتْنَا","noteEn":"نۢ before ب inside فَأَنۢبَتْنَا — the small م marks iqlab: read the noon as a light meem with ghunnah.","noteBn":"فَأَنۢبَتْنَا-এর ভেতরে ب-এর আগে نۢ: ছোট م চিহ্নটি ইকলাব বোঝায়; নূনকে হালকা মীমের মতো গুন্নাহসহ পড়ুন।"},
    {"ref":"49:6","focus":"فَاسِقٌۢ بِنَبَإٍ","noteEn":"Tanween with small م (ٌۢ) before بِ — iqlab: the tanween-noon becomes meem, held with ghunnah.","noteBn":"بِ-এর আগে ছোট م-ওয়ালা তানউইন (ٌۢ): ইকলাব; তানউইনের নূন মীম হয়ে যায়, গুন্নাহসহ ধরে রাখুন।"},
    {"ref":"86:7","focus":"مِنۢ بَيْنِ","noteEn":"نۢ before بَ in مِنۢ بَيْنِ — iqlab: pronounce a light meem, lips touching softly.","noteBn":"مِنۢ بَيْنِ-এ بَ-এর আগে نۢ: ইকলাব; হালকা মীম পড়ুন, ঠোঁট আলতো করে মিলবে।"},
    {"ref":"91:14","focus":"بِذَنۢبِهِمْ","noteEn":"نۢ before ب inside بِذَنۢبِهِمْ — iqlab within a single word, with 2-count ghunnah.","noteBn":"بِذَنۢبِهِمْ-তে ب-এর আগে نۢ — এক শব্দের ভিতরে ইকলাব, ২ হরকত গুন্নাহ।"},
    {"ref":"92:8","focus":"مَنۢ بَخِلَ","noteEn":"نۢ before بَ in مَنۢ بَخِلَ — iqlab across the word boundary: noon turns into meem.","noteBn":"مَنۢ بَخِلَ-এ بَ-এর আগে نۢ: দুই শব্দের মাঝে ইকলাব; নূন মীমে বদলে যায়।"},
    {"ref":"96:15","focus":"لَنَسْفَعًۢا بِٱلنَّاصِيَةِ","noteEn":"Tanween with small م (ًۢ) before بِ — iqlab; keep the ghunnah while the lips close lightly.","noteBn":"بِ-এর আগে ছোট م-ওয়ালা তানউইন (ًۢ): ইকলাব; ঠোঁট হালকা বন্ধ হওয়ার সময়ও গুন্নাহ ধরে রাখুন।"}
  ],

  idghaam_ghunnah: [
    { ref: '3:37',  focus: 'مَن يَشَاءُ',         noteEn: 'نْ before يَ (across words) — noon merges into yaa with 2-count ghunnah; the mushaf puts no shaddah on the يَ because the merging is incomplete (the ghunnah remains).', noteBn: 'দুই শব্দের মাঝে يَ-এর আগে نْ: নূন ২ হরকত গুন্নাহসহ ইয়ায় মিশে যায়। ইদগাম পুরোপুরি হয় না (গুন্নাহ থেকে যায়), তাই মুসহাফে يَ-তে তাশদীদ দেওয়া নেই।' },
    { ref: '2:164', focus: 'مِن مَّاءٍ',           noteEn: 'نْ before مَ — merges into meem with ghunnah; the meem takes a shaddah (مَّ).',              noteBn: 'مَ-এর আগে نْ: নূন গুন্নাহসহ মীমে মিশে যায়; মীমে তাশদীদ হয় (مَّ)।' },
    { ref: '4:14',  focus: 'عَذَابٌ مُّهِينٌ',     noteEn: 'Tanween (ٌ) before مُ — idghaam with ghunnah across a word boundary.',                       noteBn: 'مُ-এর আগে তানউইন (ٌ): দুই শব্দের মাঝে গুন্নাহসহ ইদগাম।' },
    { ref: '16:93', focus: 'أُمَّةً وَاحِدَةً',   noteEn: 'Tanween (ً) before وَ — noon merges into waaw with ghunnah.',                                noteBn: 'وَ-এর আগে তানউইন (ً): নূন গুন্নাহসহ ওয়াওয়ে মিশে যায়।' },
    { ref: '4:1',   focus: 'مِّن نَّفْسٍ',         noteEn: 'نْ before نَ — noon merges into noon with ghunnah; shaddah appears on نَّ.',                  noteBn: 'نَ-এর আগে نْ: নূন গুন্নাহসহ নূনে মিশে যায়; نَّ-তে তাশদীদ দেখা যায়।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"12:4","focus":"كَوْكَبًا وَٱلشَّمْسَ","noteEn":"Tanween (ً) before وَ — noon merges into the waaw with a 2-count ghunnah.","noteBn":"وَ-এর আগে তানউইন (ً): নূন ২ হরকত গুন্নাহসহ ওয়াওয়ে মিশে যায়।"},
    {"ref":"18:2","focus":"شَدِيدًا مِّن","noteEn":"Tanween (ً) before مِّ — idghaam with ghunnah; note the shaddah on مِّ.","noteBn":"مِّ-এর আগে তানউইন (ً): গুন্নাহসহ ইদগাম; مِّ-এর তাশদীদ খেয়াল করুন।"},
    {"ref":"20:3","focus":"لِّمَن يَخْشَىٰ","noteEn":"نْ before يَ in لِّمَن يَخْشَىٰ — noon melts into the yaa with ghunnah.","noteBn":"لِّمَن يَخْشَىٰ-এ يَ-এর আগে نْ: নূন গুন্নাহসহ ইয়ায় মিলিয়ে যায়।"},
    {"ref":"36:4","focus":"صِرَٰطٍ مُّسْتَقِيمٍ","noteEn":"Tanween (ٍ) before مُّ — idghaam with ghunnah across the word boundary.","noteBn":"مُّ-এর আগে তানউইন (ٍ): দুই শব্দের মাঝে গুন্নাহসহ ইদগাম।"},
    {"ref":"75:3","focus":"أَلَّن نَّجْمَعَ","noteEn":"نْ before نَّ in أَلَّن نَّجْمَعَ — noon merges into noon: one doubled noon with ghunnah.","noteBn":"أَلَّن نَّجْمَعَ-এ نَّ-এর আগে نْ: নূন নূনে মিশে যায়; গুন্নাহসহ একটিই তাশদীদওয়ালা নূন।"},
    {"ref":"78:13","focus":"سِرَاجًا وَهَّاجًا","noteEn":"Tanween (ً) before وَ in سِرَاجًا وَهَّاجًا — idghaam with ghunnah into the waaw.","noteBn":"سِرَاجًا وَهَّاجًا-এ وَ-এর আগে তানউইন (ً): ওয়াওয়ে গুন্নাহসহ ইদগাম।"}
  ],

  idghaam_no_ghunnah: [
    { ref: '2:2',   focus: 'هُدًى لِّلْمُتَّقِينَ', noteEn: 'Tanween on هُدًى before لِّ — total merger into laam; no ghunnah, laam takes shaddah.',  noteBn: 'هُدًى-এর তানউইনের পরে لِّ: লামে পুরোপুরি মিশে যায়; গুন্নাহ নেই, লামে তাশদীদ হয়।' },
    { ref: '2:60',  focus: 'مِن رِّزْقِ',            noteEn: 'نْ before رِّ — noon completely absorbed into raa; no nasal sound at all.',                noteBn: 'رِّ-এর আগে نْ: নূন পুরোপুরি রা-তে মিশে যায়; নাকের আওয়াজ একটুও নেই।' },
    { ref: '3:38',  focus: 'مِن لَّدُنكَ',            noteEn: 'نْ before لَّ — noon fully absorbed into laam; no ghunnah.',                               noteBn: 'لَّ-এর আগে نْ — লামে সম্পূর্ণ মিলন, গুন্নাহ নেই।' },
    { ref: '4:96',  focus: 'غَفُورًا رَّحِيمًا',    noteEn: 'Tanween (ً) before رَّ — merges into raa with no ghunnah; raa takes shaddah.',              noteBn: 'رَّ-এর আগে তানউইন (ً): গুন্নাহ ছাড়া রা-তে মিশে যায়; রা-তে তাশদীদ হয়।' },
    { ref: '2:5',   focus: 'مِن رَّبِّهِمْ',         noteEn: 'نْ before رَّ in هُدًى مِّن رَّبِّهِمْ — the noon vanishes completely into the raa; no nasal sound.', noteBn: 'هُدًى مِّن رَّبِّهِمْ-এ رَّ-এর আগে نْ: নূন পুরোপুরি রা-তে মিলিয়ে যায়; নাকের আওয়াজ নেই।' },
    { ref: '83:1',  focus: 'وَيْلٌ لِّلْمُطَفِّفِينَ', noteEn: 'Tanween (ٌ) before لِّ — full merger into laam with no ghunnah; the laam takes shaddah.',   noteBn: 'لِّ-এর আগে তানউইন (ٌ): গুন্নাহ ছাড়া লামে পুরোপুরি মিশে যায়; লামে তাশদীদ হয়।' },
    { ref: '2:173', focus: 'غَفُورٌ رَّحِيمٌ',        noteEn: 'Tanween (ٌ) before رَّ — a pairing heard at dozens of verse ends: merge into raa, zero ghunnah.', noteBn: 'رَّ-এর আগে তানউইন (ٌ): বহু আয়াতের শেষে শোনা যায় এমন জোড়া; রা-তে মিশে যায়, গুন্নাহ একেবারেই নেই।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"39:2","focus":"مُخْلِصًا لَّهُ","noteEn":"Tanween (ً) before لَّ — idghaam without ghunnah: read one doubled laam, no nasal sound.","noteBn":"لَّ-এর আগে তানউইন (ً): গুন্নাহ ছাড়া ইদগাম; একটিই তাশদীদওয়ালা লাম পড়ুন, নাকের আওয়াজ নেই।"},
    {"ref":"55:20","focus":"بَرْزَخٌ لَّا","noteEn":"Tanween (ٌ) before لَّا — the noon disappears completely into the laam; no ghunnah.","noteBn":"لَّا-এর আগে তানউইন (ٌ) — নূন লামে সম্পূর্ণ বিলীন; গুন্নাহ নেই।"},
    {"ref":"56:3","focus":"خَافِضَةٌ رَّافِعَةٌ","noteEn":"Tanween (ٌ) before رَّ — idghaam without ghunnah into the raa; note the shaddah on رَّ.","noteBn":"رَّ-এর আগে তানউইন (ٌ): গুন্নাহ ছাড়া রা-তে ইদগাম; رَّ-এর তাশদীদ খেয়াল করুন।"},
    {"ref":"90:6","focus":"مَالًا لُّبَدًا","noteEn":"Tanween (ً) before لُّ in مَالًا لُّبَدًا — full merger into the laam, no nasal hold.","noteBn":"مَالًا لُّبَدًا-এ لُّ-এর আগে তানউইন (ً): লামে পুরোপুরি মিশে যায়, নাকের আওয়াজ ধরে রাখা নেই।"},
    {"ref":"93:4","focus":"خَيْرٌ لَّكَ","noteEn":"Tanween (ٌ) before لَّ in خَيْرٌ لَّكَ — idghaam bila ghunnah: no pause, no nasal sound.","noteBn":"خَيْرٌ لَّكَ-এ لَّ-এর আগে তানউইন (ٌ): ইদগাম বিলা গুন্নাহ; থামা নেই, নাকের আওয়াজও নেই।"},
    {"ref":"96:7","focus":"أَن رَّءَاهُ","noteEn":"نْ before رَّ in أَن رَّءَاهُ — noon merges into the raa without any ghunnah.","noteBn":"أَن رَّءَاهُ-এ رَّ-এর আগে نْ: নূন কোনো গুন্নাহ ছাড়াই রা-তে মিশে যায়।"}
  ],

  // ── Meem Sākinah ──────────────────────────────────────────────────────────
  ikhfa_shafawi: [
    { ref: '36:65', focus: 'أَرْجُلُهُم بِمَا',     noteEn: 'Meem sakinah before بِ — lightly hidden on the lips with ghunnah; do not fully close.',   noteBn: 'بِ-এর আগে মীম সাকিন (مْ): ঠোঁটে গুন্নাহসহ হালকা গোপন; ঠোঁট পুরো বন্ধ করবেন না।' },
    { ref: '7:45',  focus: 'وَهُم بِالْآخِرَةِ',   noteEn: 'مْ before بِ — ikhfa shafawi: the lips barely close, a light labial hiding.',              noteBn: 'وَهُم-এ بِ-এর আগে مْ: ইখফা শাফাবি; ঠোঁট সামান্যই মেলে, ঠোঁটে হালকা গোপন।' },
    { ref: '59:14', focus: 'بَأْسُهُمْ بَيْنَهُمْ', noteEn: 'مْ of بَأْسُهُمْ before بَ — ikhfa shafawi: the lips touch lightly with ghunnah (the second meem, before شَدِيدٌ, is read clearly).', noteBn: 'بَأْسُهُمْ-এর مْ, بَ-এর আগে: ইখফা শাফাবি; গুন্নাহসহ ঠোঁট হালকা মেলে (দ্বিতীয় মীম, شَدِيدٌ-এর আগে, স্পষ্ট পড়া হয়)।' },
    { ref: '32:20', focus: 'كُنتُمْ بِهِ',           noteEn: 'مْ at end of كُنتُمْ before بِهِ — labial hiding with ghunnah.',                           noteBn: 'كُنتُمْ-এর শেষের مْ, بِهِ-এর আগে: ঠোঁটে গুন্নাহসহ ইখফা।' },
    { ref: '105:4', focus: 'تَرْمِيهِم بِحِجَارَةٍ', noteEn: 'مْ before بِ in تَرْمِيهِم بِحِجَارَةٍ — ikhfa shafawi with ghunnah; a short-surah example easy to memorise.', noteBn: 'تَرْمِيهِم بِحِجَارَةٍ-এ بِ-এর আগে مْ: গুন্নাহসহ ইখফা শাফাবি; ছোট সূরার উদাহরণ, মুখস্থ রাখা সহজ।' },
    { ref: '3:101', focus: 'يَعْتَصِم بِاللَّهِ',    noteEn: 'مْ before بِ in وَمَن يَعْتَصِم بِاللَّهِ — light labial hiding; the lips do not press fully shut.', noteBn: 'وَمَن يَعْتَصِم بِاللَّهِ-এ بِ-এর আগে مْ: ঠোঁটে হালকা গোপন; ঠোঁট পুরো চেপে বন্ধ হয় না।' },
    { ref: '84:24', focus: 'فَبَشِّرْهُم بِعَذَابٍ', noteEn: 'مْ before بِ in فَبَشِّرْهُم بِعَذَابٍ — hold the ghunnah ~2 counts while the meem stays lightly hidden.', noteBn: 'فَبَشِّرْهُم بِعَذَابٍ-এ بِ-এর আগে مْ: মীম হালকা গোপন রেখে প্রায় ২ হরকত গুন্নাহ ধরে রাখুন।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"18:13","focus":"نَبَأَهُم بِٱلْحَقِّ","noteEn":"Meem sakinah before بِ in نَبَأَهُم بِٱلْحَقِّ — hide the meem lightly on the lips with ghunnah.","noteBn":"نَبَأَهُم بِٱلْحَقِّ-এ بِ-এর আগে মীম সাকিন: ঠোঁটে গুন্নাহসহ মীম হালকা গোপন করুন।"},
    {"ref":"20:62","focus":"أَمْرَهُم بَيْنَهُمْ","noteEn":"مْ before بَ in أَمْرَهُم بَيْنَهُمْ — ikhfa shafawi: the lips barely close.","noteBn":"أَمْرَهُم بَيْنَهُمْ-এ بَ-এর আগে مْ: ইখফা শাফাবি; ঠোঁট সামান্যই মেলে।"},
    {"ref":"67:12","focus":"رَبَّهُم بِٱلْغَيْبِ","noteEn":"مْ before بِ in يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ — a light labial hiding with ~2 counts of ghunnah.","noteBn":"يَخْشَوْنَ رَبَّهُم بِٱلْغَيْبِ-এ بِ-এর আগে مْ: ঠোঁটে হালকা গোপন, প্রায় ২ হরকত গুন্নাহ।"},
    {"ref":"79:14","focus":"هُم بِٱلسَّاهِرَةِ","noteEn":"مْ before بِ in فَإِذَا هُم بِٱلسَّاهِرَةِ — ikhfa shafawi; do not press the lips fully shut.","noteBn":"فَإِذَا هُم بِٱلسَّاهِرَةِ-এ بِ-এর আগে مْ: ইখফা শাফাবি; ঠোঁট পুরো চেপে বন্ধ করবেন না।"},
    {"ref":"88:22","focus":"عَلَيْهِم بِمُصَيْطِرٍ","noteEn":"مْ before بِ in لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ — labial hiding with ghunnah.","noteBn":"لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ-এ بِ-এর আগে مْ: গুন্নাহসহ ঠোঁটে গোপন।"},
    {"ref":"100:11","focus":"رَبَّهُم بِهِمْ","noteEn":"مْ before بِ in إِنَّ رَبَّهُم بِهِمْ — a short-surah drill for ikhfa shafawi.","noteBn":"إِنَّ رَبَّهُم بِهِمْ-এ بِ-এর আগে مْ: ছোট সূরা থেকে ইখফা শাফাবির অনুশীলন।"}
  ],

  idghaam_shafawi: [
    { ref: '2:46',  focus: 'أَنَّهُم مُّلَاقُو',   noteEn: 'مْ before مُّ — two meems merge into one doubled meem held with ghunnah.',                 noteBn: 'مُّ-এর আগে مْ: দুই মীম মিশে একটি তাশদীদওয়ালা মীম হয়, গুন্নাহসহ ধরে রাখুন।' },
    { ref: '60:8',  focus: 'يُخْرِجُوكُم مِّن',    noteEn: 'مْ before مِّ — idghaam shafawi: the merged meem is held ~2 counts.',                      noteBn: 'مِّ-এর আগে مْ: ইদগাম শাফাবি; মিলে যাওয়া মীম প্রায় ২ হরকত ধরে রাখুন।' },
    { ref: '10:42', focus: 'وَمِنْهُم مَّن',         noteEn: 'مْ before مَّ — total labial merger; no lip separation between the two meems.',            noteBn: 'مَّ-এর আগে مْ: ঠোঁটে পুরোপুরি মিলন; দুই মীমের মাঝে ঠোঁট আলাদা হয় না।' },
    { ref: '3:154', focus: 'أَنفُسِهِم مَّا',     noteEn: 'مْ before مَ — idghaam shafawi with ghunnah; a clear example in mid-verse.',              noteBn: 'مَ-এর আগে مْ: গুন্নাহসহ ইদগাম শাফাবি; আয়াতের মাঝখানের স্পষ্ট উদাহরণ।' },
    { ref: '2:10',  focus: 'فِي قُلُوبِهِم مَّرَضٌ', noteEn: 'مْ before مَّ in قُلُوبِهِم مَّرَضٌ — the two meems fuse into one doubled meem with ~2-count ghunnah.', noteBn: 'قُلُوبِهِم مَّرَضٌ-এ مَّ-এর আগে مْ: দুই মীম মিশে একটি তাশদীদওয়ালা মীম, প্রায় ২ হরকত গুন্নাহ।' },
    { ref: '106:4', focus: 'أَطْعَمَهُم مِّن جُوعٍ', noteEn: 'مْ before مِّ in أَطْعَمَهُم مِّن — idghaam shafawi in Surah Quraysh; keep the lips closed once through both meems.', noteBn: 'أَطْعَمَهُم مِّن-এ مِّ-এর আগে مْ: সূরা কুরাইশে ইদগাম শাফাবি; দুই মীম জুড়ে ঠোঁট একবারই বন্ধ থাকবে।' },
    { ref: '2:249', focus: 'كَم مِّن فِئَةٍ',        noteEn: 'مْ of كَم merges into مِّن — a frequent Quranic pairing (كَم مِّن / لَهُم مَّا): one long doubled meem with ghunnah.', noteBn: 'كَم-এর مْ মিশে যায় مِّن-এ: কুরআনে বহুবার আসা জোড়া (كَم مِّن / لَهُم مَّا); গুন্নাহসহ একটিই লম্বা তাশদীদওয়ালা মীম।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"36:8","focus":"فَهُم مُّقْمَحُونَ","noteEn":"مْ before مُّ in فَهُم مُّقْمَحُونَ — two meems fuse into one doubled meem with ghunnah.","noteBn":"فَهُم مُّقْمَحُونَ-এ مُّ-এর আগে مْ: দুই মীম মিশে একটি তাশদীদওয়ালা মীম, গুন্নাহসহ।"},
    {"ref":"49:13","focus":"خَلَقْنَٰكُم مِّن","noteEn":"مْ before مِّ in خَلَقْنَٰكُم مِّن ذَكَرٍ — idghaam shafawi held ~2 counts.","noteBn":"خَلَقْنَٰكُم مِّن ذَكَرٍ-এ مِّ-এর আগে مْ: ইদগাম শাফাবি, প্রায় ২ হরকত ধরে রাখুন।"},
    {"ref":"67:16","focus":"ءَأَمِنتُم مَّن","noteEn":"مْ before مَّ in ءَأَمِنتُم مَّن — total labial merger; the lips close once for both meems.","noteBn":"ءَأَمِنتُم مَّن-এ مَّ-এর আগে مْ: ঠোঁটে পুরোপুরি মিলন; দুই মীমের জন্য ঠোঁট একবারই বন্ধ হয়।"},
    {"ref":"85:20","focus":"وَرَآئِهِم مُّحِيطٌۢ","noteEn":"مْ before مُّ in مِن وَرَآئِهِم مُّحِيطٌۢ — one long doubled meem with ghunnah.","noteBn":"مِن وَرَآئِهِم مُّحِيطٌۢ-এ مُّ-এর আগে مْ: গুন্নাহসহ একটিই লম্বা তাশদীদওয়ালা মীম।"},
    {"ref":"97:4","focus":"رَبِّهِم مِّن","noteEn":"مْ before مِّ in بِإِذْنِ رَبِّهِم مِّن — idghaam shafawi in Surah al-Qadr.","noteBn":"بِإِذْنِ رَبِّهِم مِّن-এ مِّ-এর আগে مْ: সূরা কদরে ইদগাম শাফাবি।"},
    {"ref":"104:8","focus":"عَلَيْهِم مُّؤْصَدَةٌ","noteEn":"مْ before مُّ in إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ — merge with a steady 2-count ghunnah.","noteBn":"إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ-এ مُّ-এর আগে مْ: সমান ২ হরকত গুন্নাহসহ মিলিয়ে পড়ুন।"}
  ],

  // ── Madd ──────────────────────────────────────────────────────────────────
  madd_2: [
    { ref: '1:3',   focus: 'الرَّحِيمِ',    noteEn: 'يِ madd: kasrah then ي — stretch exactly 2 counts when reading on (stopping at the verse end makes it madd ʿāriḍ).', noteBn: 'الرَّحِيمِ-এ يِ মাদ্দ: যেরের পরে ي; মিলিয়ে পড়লে ঠিক ২ হরকত (আয়াতের শেষে থামলে তা মাদ্দ আরিদ হয়ে যায়)।' },
    { ref: '1:4',   focus: 'مَالِكِ',        noteEn: 'Alif madd: fathah then ا — natural stretch of 2 counts.',                                        noteBn: 'مَالِكِ-এ আলিফের মাদ্দ: যবরের পরে ا; স্বাভাবিক ২ হরকত টান।' },
    { ref: '2:23',  focus: 'وَادْعُوا',     noteEn: 'وُ madd: dammah then و — stretch 2 counts; a common verb form across the Quran.',               noteBn: 'وَادْعُوا-এ وُ মাদ্দ: পেশের পরে و; ২ হরকত টানুন। কুরআনে বহুবার আসা ক্রিয়ার রূপ।' },
    { ref: '3:67',  focus: 'إِبْرَاهِيمُ', noteEn: 'Both alif madd (إِبْرَا) and yaa madd (هِيمُ) in one word — each 2 counts.',                      noteBn: 'إِبْرَاهِيمُ-এর এক শব্দেই আলিফের মাদ্দ (إِبْرَا) আর ইয়ার মাদ্দ (هِيمُ), প্রতিটি ২ হরকত।' },
    { ref: '2:2',   focus: 'الْكِتَابُ',    noteEn: 'Alif madd in كِتَاب — fathah before ا; 2 counts in continuous recitation (madd tabi\'i).',       noteBn: 'الْكِتَابُ-এর كِتَاب অংশে আলিফের মাদ্দ: ا-এর আগে যবর; মিলিয়ে পড়ার সময় ২ হরকত (মাদ্দ তবিয়ি)।' },
  ],

  madd_246: [
    { ref: '1:4',   focus: 'الدِّينِ',        noteEn: 'Stopping on الدِّينِ — يِ madd before waqf sukoon; choose 2, 4 or 6 and keep it consistent throughout.', noteBn: 'الدِّينِ-এ থামলে: ওয়াকফের সাকিনের আগে يِ মাদ্দ; ২, ৪ বা ৬ হরকতের একটি বেছে নিন, আর পুরো তিলাওয়াতে সেটাই রাখুন।' },
    { ref: '1:5',   focus: 'نَسْتَعِينُ',     noteEn: 'Stopping on نَسْتَعِينُ — يِ madd; flexible 2/4/6 at waqf.',                                    noteBn: 'نَسْتَعِينُ-এ থামলে: يِ মাদ্দ; ওয়াকফে ২, ৪ বা ৬, যেকোনোটি চলে।' },
    { ref: '1:2',   focus: 'الْعَالَمِينَ',  noteEn: 'Stopping on الْعَالَمِينَ — يِ madd before the waqf sukoon on نَ.',                              noteBn: 'الْعَالَمِينَ-এ থামলে: نَ ওয়াকফে সাকিন হয়, তার আগে يِ মাদ্দ।' },
    { ref: '114:1', focus: 'النَّاسِ',    noteEn: 'Stopping on النَّاسِ — alif madd (the ا before سِ, which takes waqf sukoon) → 2, 4 or 6 counts.',     noteBn: 'النَّاسِ-এ থামলে: سِ ওয়াকফে সাকিন হয়, তার আগের ا-তে আলিফের মাদ্দ → ২, ৪ বা ৬ হরকত।' },
    { ref: '112:2', focus: 'الصَّمَدُ',       noteEn: 'No madd letter before the final دُ — no madd \'aridh here; contrast to sharpen recognition.',   noteBn: 'الصَّمَدُ-এর শেষের دُ-এর আগে কোনো মাদ্দের হরফ নেই, তাই এখানে মাদ্দ আরিদ হয় না। পার্থক্যটা চিনতে এই উদাহরণ মিলিয়ে দেখুন।' },
  ],

  madd_aridh: [
    { ref: '1:7',   focus: 'الضَّالِّينَ',   noteEn: 'Stopping at verse end — يِ madd (in لِّينَ) + نَ becomes sukoon at waqf → 2, 4 or 6 counts.', noteBn: 'আয়াতের শেষে থামলে: يِ মাদ্দ (لِّينَ-এ), আর ওয়াকফে نَ সাকিন হয়ে যায় → ২, ৪ বা ৬ হরকত।' },
    { ref: '2:255', focus: 'الْقَيُّومُ',    noteEn: 'Stopping on الْقَيُّومُ — وُ madd then مُ gets waqf sukoon: madd \'aridh.',                       noteBn: 'الْقَيُّومُ-এ থামলে: وُ মাদ্দের পরে مُ ওয়াকফে সাকিন হয়; এটি মাদ্দ আরিদ।' },
    { ref: '1:1',   focus: 'الرَّحِيمِ',     noteEn: 'Stopping at end of basmalah — يِ madd in الرَّحِيمِ before waqf sukoon: 2/4/6.',                 noteBn: 'বিসমিল্লাহর শেষে থামলে: ওয়াকফের সাকিনের আগে الرَّحِيمِ-এর يِ মাদ্দ → ২/৪/৬।' },
    { ref: '55:27', focus: 'وَالْإِكْرَامِ', noteEn: 'Stopping on وَالْإِكْرَامِ — alif madd + مِ gets waqf sukoon: madd \'aridh.',                    noteBn: 'وَالْإِكْرَامِ-এ থামলে: আলিফের মাদ্দের পরে مِ ওয়াকফে সাকিন হয়; এটি মাদ্দ আরিদ।' },
    { ref: '36:83', focus: 'تُرْجَعُونَ',    noteEn: 'Stopping here — وُ madd before نَ at waqf; a verse-final madd \'aridh.',                         noteBn: 'تُرْجَعُونَ-এ থামলে: ওয়াকফে نَ সাকিন হয়, তার আগে وُ মাদ্দ; আয়াতের শেষের মাদ্দ আরিদ।' },
  ],

  madd_lin: [
    { ref: '106:4', focus: 'خَوْفٍ',          noteEn: 'Stopping on خَوْفٍ — وْ (fathah + و with sukoon) before final ف at waqf: liin madd 2/4/6.',     noteBn: 'خَوْفٍ-এ থামলে: وْ (যবরের পরে সাকিন و), ওয়াকফে শেষের ف-এর আগে; মাদ্দ লিন ২/৪/৬।' },
    { ref: '2:2',   focus: 'رَيْبَ',           noteEn: 'Stopping on رَيْبَ — يْ (fathah + ي with sukoon) before بَ at waqf: soft liin madd.',           noteBn: 'رَيْبَ-এ থামলে: يْ (যবরের পরে সাকিন ي), ওয়াকফে بَ-এর আগে; নরম মাদ্দ লিন।' },
    { ref: '106:1', focus: 'قُرَيْشٍ',         noteEn: 'Stopping on قُرَيْشٍ (surah 106) — يْ before شٍ at waqf: madd liin.',                          noteBn: 'قُرَيْشٍ-এ (সূরা ১০৬) থামলে: ওয়াকফে شٍ-এর আগে يْ; মাদ্দ লিন।' },
    { ref: '6:130', focus: 'الْجِنِّ وَالْإِنسِ', noteEn: 'No liin here — contrast: neither word has a و/ي with sukoon AFTER a fathah, which لِين requires.', noteBn: 'এখানে মাদ্দ লিন নেই, তুলনার জন্য দেখুন: কোনো শব্দেই যবরের পরে সাকিন و/ي নেই, অথচ লিনের জন্য সেটাই লাগে।' },
    { ref: '69:28', focus: 'مَالِيَهْ',         noteEn: 'يَ in مَالِيَهْ — this is يَ with fathah, not liin (liin needs يْ with sukoon after fathah).',   noteBn: 'مَالِيَهْ-এর يَ-তে যবর, তাই এটি মাদ্দ লিন নয় (লিনের জন্য যবরের পরে সাকিন يْ লাগে)।' },
    { ref: '106:3', focus: 'الْبَيْتِ',           noteEn: 'Stopping on الْبَيْتِ — يْ (fathah + ي with sukoon) before تِ, which takes waqf sukoon: madd liin 2/4/6.',    noteBn: 'الْبَيْتِ-এ থামলে: يْ (যবরের পরে সাকিন ي), তার পরের تِ ওয়াকফে সাকিন হয়; মাদ্দ লিন ২/৪/৬।' },
  ],

  madd_badal: [
    { ref: '2:62',  focus: 'آمَنُوا',          noteEn: 'آمَنَ: hamza + alif madd (the long ā replaced an original hamza) — recite as 2 counts in Hafs.', noteBn: 'آمَنَ: হামযা + আলিফের মাদ্দ (লম্বা \'আ\' এসেছে মূল একটি হামযার বদলে); হাফসে ২ হরকত পড়ুন।' },
    { ref: '3:173', focus: 'إِيمَانًا',          noteEn: 'إِيمَان: hamza + yaa madd — the madd substitutes for an original hamza; 2 counts.',             noteBn: 'إِيمَان: হামযা + ইয়ার মাদ্দ (يِ); মাদ্দটি মূল একটি হামযার বদলে এসেছে; ২ হরকত।' },
    { ref: '2:136', focus: 'أُوتِيَ',           noteEn: 'أُوتِيَ: hamza + waaw madd — a badal madd; 2 counts.',                                         noteBn: 'أُوتِيَ: হামযা + ওয়াওয়ের মাদ্দ (وُ); এটি মাদ্দ বদল, ২ হরকত।' },
    { ref: '2:31',  focus: 'آدَمَ',              noteEn: 'آدَمَ: hamza before alif madd — the stretched ā is a badal madd; 2 counts in Hafs.',            noteBn: 'آدَمَ: আলিফের মাদ্দের আগে হামযা; লম্বা \'আ\'-টি মাদ্দ বদল, হাফসে ২ হরকত।' },
    { ref: '3:33',  focus: 'آلَ',                noteEn: 'آلَ: hamza + alif madd — badal madd of 2 counts.',                                             noteBn: 'آلَ: হামযা + আলিফের মাদ্দ; ২ হরকতের মাদ্দ বদল।' },
  ],

  madd_iwad: [
    { ref: '4:24',  focus: 'حَكِيمًا',         noteEn: 'Stopping on حَكِيمًا — tanween fathah (ً) drops; alif compensation of 2 counts: حَكِيمَا.',  noteBn: 'حَكِيمًا-এ থামলে: দুই যবরের তানউইন (ً) বাদ পড়ে, তার বদলে আলিফে ২ হরকত টান: حَكِيمَا।' },
    { ref: '4:93',  focus: 'عَظِيمًا',           noteEn: 'Stopping on عَظِيمًا → عَظِيمَا: the ً drops, the fathah on م stretches 2 counts.',            noteBn: 'عَظِيمًا-এ থামলে → عَظِيمَا: ً বাদ পড়ে, م-এর যবর ২ হরকত টানা হয়।' },
    { ref: '4:32',  focus: 'عَلِيمًا',           noteEn: 'Stopping on عَلِيمًا → عَلِيمَا: tanween fathah converts to 2-count madd.',                    noteBn: 'عَلِيمًا-এ থামলে → عَلِيمَا: দুই যবরের তানউইন বদলে ২ হরকতের মাদ্দ হয়।' },
    { ref: '1:7',   focus: 'الضَّالِّينَ',       noteEn: 'No madd \'iwad here — يَ already has a madd; \'iwad applies only to ً (tanwin fathah).',        noteBn: 'এখানে মাদ্দ ইওয়াদ নেই: يَ-তে আগে থেকেই মাদ্দ আছে; ইওয়াদ হয় শুধু ً (দুই যবরের তানউইন)-এ।' },
    { ref: '4:171', focus: 'رَسُولُ اللَّهِ وَكَلِمَتُهُ', noteEn: 'No ً here — \'iwad applies only when a word ends in tanwin fathah (ً) and you stop.', noteBn: 'এখানে ً নেই: শব্দের শেষে দুই যবরের তানউইন (ً) থাকলে এবং সেখানে থামলে তবেই মাদ্দ ইওয়াদ।' },
  ],

  madd_muttasil: [
    { ref: '2:87',  focus: 'جَاءَكُمْ',          noteEn: 'Alif madd then ء in same word — obligatory (wajib) stretch of 4–5 counts.',                  noteBn: 'جَاءَكُمْ-তে আলিফ মাদ্দ + ء একই শব্দে — ৪–৫ হরকত ওয়াজিব।' },
    { ref: '2:19',  focus: 'السَّمَاءِ',          noteEn: 'Alif madd then ء in السَّمَاء — connected madd; 4–5 counts (obligatory).',                    noteBn: 'السَّمَاءِ-এ একই শব্দে আলিফের মাদ্দের পরে ء: মাদ্দ মুত্তাসিল; ৪–৫ হরকত (ওয়াজিব)।' },
    { ref: '2:6',   focus: 'سَوَاءٌ',             noteEn: 'Alif madd then ء in سَوَاء — muttasil; stretch 4–5 counts.',                                  noteBn: 'سَوَاءٌ-তে আলিফ মাদ্দ + ء — মুত্তাসিল, ৪–৫ হরকত।' },
    { ref: '2:212', focus: 'يَشَاءُ',             noteEn: 'يَشَاءُ — alif madd + ء in one word: connected madd; 4–5 counts obligatory.',                noteBn: 'يَشَاءُ: একই শব্দে আলিফের মাদ্দ + ء; মাদ্দ মুত্তাসিল, ৪–৫ হরকত ওয়াজিব।' },
    { ref: '11:7',  focus: 'الْمَاءِ',             noteEn: 'Alif madd before ء in الْمَاء — same-word hamza: muttasil, 4–5 counts.',                     noteBn: 'الْمَاءِ-এ ء-এর আগে আলিফের মাদ্দ: হামযা একই শব্দে, তাই মুত্তাসিল; ৪–৫ হরকত।' },
  ],

  madd_munfasil: [
    { ref: '108:1', focus: 'إِنَّا أَعْطَيْنَاكَ', noteEn: 'Alif madd at end of إِنَّا, hamza starts أَعْطَيْنَاكَ — separated madd; 4–5 counts.',    noteBn: 'إِنَّا-এর শেষে আলিফের মাদ্দ, আর أَعْطَيْنَاكَ শুরু হয় হামযা (ء) দিয়ে: মাদ্দ মুনফাসিল; ৪–৫ হরকত।' },
    { ref: '109:2', focus: 'لَا أَعْبُدُ',         noteEn: 'Alif madd ends لَا, ء starts أَعْبُدُ — munfasil; 4–5 counts.',                               noteBn: 'لَا-এর শেষে আলিফের মাদ্দ, أَعْبُدُ শুরু হয় ء দিয়ে: মুনফাসিল; ৪–৫ হরকত।' },
    { ref: '4:1',   focus: 'يَا أَيُّهَا',          noteEn: 'Alif madd in يَا then ء starts أَيُّهَا — separated; 4–5 counts consistently.',            noteBn: 'يَا-তে আলিফের মাদ্দ, তারপর أَيُّهَا শুরু হয় ء দিয়ে: মুনফাসিল; সবসময় একই মাপে ৪–৫ হরকত।' },
    { ref: '2:163', focus: 'لَا إِلَٰهَ إِلَّا',    noteEn: 'لَا ends with alif madd, إِلَٰهَ starts with ء — munfasil; 4–5 counts.',                    noteBn: 'لَا শেষ হয় আলিফের মাদ্দে, إِلَٰهَ শুরু হয় ء দিয়ে: মুনফাসিল; ৪–৫ হরকত।' },
    { ref: '2:4',   focus: 'بِمَا أُنزِلَ', noteEn: 'Alif madd ends بِمَا, ء starts أُنزِلَ — and again in وَمَا أُنزِلَ: practise one consistent length.', noteBn: 'بِمَا-এর শেষে আলিফের মাদ্দ, أُنزِلَ শুরু হয় ء দিয়ে; আবার وَمَا أُنزِلَ-এও একই। দুই জায়গায় একই মাপ রাখার অনুশীলন করুন।' },
  ],

  madd_6: [
    { ref: '2:1',   focus: 'الٓمٓ',               noteEn: 'ل (laam) in الٓمٓ — each muqaṭṭaʿa letter is a separate recitation unit; لَامْ has madd lazim of 6 counts.', noteBn: 'الٓمٓ-এর ل (লাম): হুরুফে মুকাত্তাআতের প্রতিটি হরফ আলাদা করে পড়া হয়; لَامْ-এ ৬ হরকত মাদ্দ লাযিম।' },
    { ref: '10:1',  focus: 'الٓرٰ',               noteEn: 'الٓرٰ — لَامْ has 6-count madd lazim; رَا does not (natural 2-count).',                          noteBn: 'الٓرٰ: لَامْ-এ ৬ হরকত মাদ্দ লাযিম; رَا-তে নয় (স্বাভাবিক ২ হরকত)।' },
    { ref: '36:1',  focus: 'يٰسٓ',                noteEn: 'يٰسٓ — سِينْ has 6-count madd lazim (يَا is natural, 2 counts); one of the most-recited muqaṭṭaʿa openings.',               noteBn: 'يٰسٓ: سِينْ-এ ৬ হরকত মাদ্দ লাযিম (يَا স্বাভাবিক, ২ হরকত); সবচেয়ে বেশি পড়া মুকাত্তাআত-শুরুগুলোর একটি।' },
    { ref: '40:1',  focus: 'حٰمٓ',                noteEn: 'حٰمٓ — حَا is natural (2 counts); مِيمْ has 6-count madd lazim.',                          noteBn: 'حٰمٓ-তে حَا স্বাভাবিক ২ হরকত; مِيمْ-এ ৬ হরকত মাদ্দ লাযিম।' },
    { ref: '50:1',  focus: 'قٓ',                  noteEn: 'قٓ — قَافْ contains a madd letter (alif) + sukoon: madd lazim 6 counts.',                      noteBn: 'قٓ: قَافْ-এ মাদ্দের হরফ (আলিফ), তারপর সাকিন; ৬ হরকত মাদ্দ লাযিম।' },
    { ref: '68:1',  focus: 'نٓ',                  noteEn: 'نٓ — نُونْ contains a madd letter (و) + sukoon; 6-count madd lazim.',                          noteBn: 'نٓ: نُونْ-এ মাদ্দের হরফ (و), তারপর সাকিন; ৬ হরকত মাদ্দ লাযিম।' },
  ],

  // ── Other rules ────────────────────────────────────────────────────────────
  idghaam_mutajanisayn: [
    { ref: '5:28',  focus: 'بَسَطتَ',             noteEn: 'ط before تَ — same makhraj (tongue tip with the base of the upper front teeth); ط merges into تَ but keeps its heaviness (incomplete idghām).',                       noteBn: 'بَسَطتَ-এ تَ-এর আগে ط: একই মাখরাজ (জিহ্বার ডগা আর উপরের সামনের দাঁতের গোড়া); ط মিশে যায় تَ-তে, তবে তার ভারী ভাব থেকে যায় (অসম্পূর্ণ ইদগাম)।' },
    { ref: '27:22', focus: 'أَحَطتُ',              noteEn: 'ط before تُ in أَحَطتُ — the ط merges into the following ت, but its heavy quality is kept (incomplete idghām).',                      noteBn: 'أَحَطتُ-এ تُ-এর আগে ط: ط পরের ت-এ মিশে যায়, তবে তার ভারী ভাব থেকে যায় (অসম্পূর্ণ ইদগাম)।' },
    { ref: '7:176', focus: 'يَلْهَث ذَّٰلِكَ',   noteEn: 'ث before ذَّ — both interdental letters; ث merges into ذَّ.',                                 noteBn: 'يَلْهَث ذَّٰلِكَ-এ ذَّ-এর আগে ث: দুটিই দাঁতের ফাঁকের হরফ; ث মিশে যায় ذَّ-এ।' },
    { ref: '11:42', focus: 'ارْكَب مَّعَنَا',     noteEn: 'ب before مَّ — both labial letters; ب merges into meem (idghaam mutajanisayn).',              noteBn: 'ارْكَب مَّعَنَا-এ مَّ-এর আগে ب: দুটিই ঠোঁটের হরফ; ب মীমে মিশে যায় (ইদগাম মুতাজানিসাইন)।' },
    { ref: '2:256', focus: 'قَد تَّبَيَّنَ',      noteEn: 'دْ before تَّ in قَد تَّبَيَّنَ — same tongue-tip makhraj: the daal merges fully into the taa (shaddah on تَّ).', noteBn: 'قَد تَّبَيَّنَ-এ تَّ-এর আগে دْ: একই মাখরাজ, জিহ্বার ডগা; দাল পুরোপুরি তা-তে মিশে যায় (تَّ-তে তাশদীদ)।' },
    { ref: '4:64',  focus: 'إِذ ظَّلَمُوا',       noteEn: 'ذْ before ظَّ in إِذ ظَّلَمُوا — both interdental letters; the ذ is absorbed into the heavy ظَّ.', noteBn: 'إِذ ظَّلَمُوا-এ ظَّ-এর আগে ذْ: দুটিই দাঁতের ফাঁকের হরফ; ذ মিলিয়ে যায় ভারী ظَّ-এর ভেতরে।' },
    { ref: '109:4', focus: 'عَبَدتُّمْ',          noteEn: 'دْ before تُّ INSIDE one word — عَبَدتُّمْ is read "ʿabattum": the daal merges into the taa within the word.', noteBn: 'এক শব্দের ভিতরে تُّ-এর আগে دْ — عَبَدتُّمْ পড়া হয় "আবাত্তুম": দাল শব্দের ভিতরেই তা-তে মিশে যায়।' },
  ],

  idghaam_mutaqaribayn: [
    { ref: '77:20', focus: 'أَلَمْ نَخْلُقكُّم', noteEn: 'ق before كُّ — close (but not identical) makhraj; ق completely absorbed into كُّ.',             noteBn: 'نَخْلُقكُّم-এ كُّ-এর আগে ق: মাখরাজ কাছাকাছি (হুবহু এক নয়); ق পুরোপুরি মিশে যায় كُّ-এ।' },
    { ref: '4:158', focus: 'بَلْ رَّفَعَهُ',       noteEn: 'ل before رَّ — both tongue-tip letters with close articulation; ل absorbed into رَّ.',        noteBn: 'بَلْ رَّفَعَهُ-এ رَّ-এর আগে ل: দুটিই জিহ্বার ডগার হরফ, মাখরাজ কাছাকাছি; ل মিশে যায় رَّ-এ।' },
    { ref: '21:56', focus: 'بَل رَّبُّكُمْ',           noteEn: 'لْ of بَل before رَّ — close makhraj; the laam merges into the raa (shaddah on رَّ): mutaqaribayn.',    noteBn: 'بَل رَّبُّكُمْ-এ بَل-এর لْ, رَّ-এর আগে: মাখরাজ কাছাকাছি; লাম রা-তে মিশে যায় (رَّ-তে তাশদীদ): মুতাকারিবাইন।' },
    { ref: '20:114', focus: 'وَقُل رَّبِّ زِدْنِي', noteEn: 'لْ of قُل before رَّ — the laam is absorbed into the raa (shaddah on رَّ): read "qur-rabbi", not "qul rabbi".', noteBn: 'قُل-এর لْ, رَّ-এর আগে: লাম রা-তে মিশে যায় (رَّ-তে তাশদীদ); পড়ুন "কুর-রাব্বি", "কুল রাব্বি" নয়।' },
    { ref: '23:118', focus: 'وَقُل رَّبِّ اغْفِرْ', noteEn: 'The same قُل رَّبِّ merger closing Surah al-Muʾminun — laam into raa, no laam heard at all.', noteBn: 'সূরা মুমিনুনের শেষে একই قُل رَّبِّ মিলন — লাম রা-তে বিলীন, লাম আদৌ শোনা যায় না।' },
    { ref: '17:24', focus: 'وَقُل رَّبِّ ارْحَمْهُمَا', noteEn: 'قُل رَّبِّ in the duʿa for parents — practise the smooth laam→raa merger in a phrase recited daily.', noteBn: 'মা-বাবার জন্য দোয়ায় قُل رَّبِّ: প্রতিদিন পড়া এই বাক্যে লাম থেকে রা-তে মসৃণভাবে মিশিয়ে পড়ার অনুশীলন করুন।' },
  ],

  hamzat_wasl: [
    { ref: '1:1',   focus: 'ٱللَّهِ',              noteEn: 'Start at ٱللَّهِ: ا is pronounced "al-". Connecting from بِسْمِ: ا is silent, لل immediately joins.', noteBn: 'ٱللَّهِ থেকে শুরু করলে ا উচ্চারিত হয়, "আল-"। بِسْمِ থেকে মিলিয়ে পড়লে ا পড়া হয় না, সরাসরি لل-এর সাথে জুড়ে যায়।' },
    { ref: '1:6',   focus: 'ٱهْدِنَا',              noteEn: 'ا in ٱهْدِنَا is hamzat al-wasl — silent in connected recitation, pronounced only when starting here.', noteBn: 'ٱهْدِنَا-এর ا হামযাতুল ওয়াসল: মিলিয়ে পড়লে পড়া হয় না, শুধু এখান থেকে শুরু করলে উচ্চারিত হয়।' },
    { ref: '96:1',  focus: 'ٱقْرَأْ',               noteEn: 'ا in ٱقْرَأْ is hamzat al-wasl — drop it when joining from a previous word.',                 noteBn: 'ٱقْرَأْ-এর ا হামযাতুল ওয়াসল: আগের শব্দের সাথে মিলিয়ে পড়লে বাদ দিন।' },
    { ref: '2:58',  focus: 'ٱدْخُلُوا',              noteEn: 'ا in ٱدْخُلُوا — pronounced with a dammah "ud-" when starting here, because the third letter (خُ) carries a dammah.',                   noteBn: 'ٱدْخُلُوا-এর ا: এখান থেকে শুরু করলে পেশ দিয়ে পড়া হয় ("উদ-"), কারণ তৃতীয় হরফ خُ-তে পেশ।' },
    { ref: '3:97',  focus: 'ٱسْتَطَاعَ',             noteEn: 'ا in ٱسْتَطَاعَ — hamzat al-wasl with kasra; silent when flowing from previous word.',          noteBn: 'ٱسْتَطَاعَ-এর ا হামযাতুল ওয়াসল, শুরু করলে যের দিয়ে; আগের শব্দ থেকে মিলিয়ে পড়লে পড়া হয় না।' },
  ],

  lam_shamsiyyah: [
    { ref: '91:1',  focus: 'وَالشَّمْسِ',           noteEn: 'ل of ال before شَ — silent; شَ doubles: الشَّمْس. The sun letters (14) assimilate the lam.', noteBn: 'شَ-এর আগে ال-এর ل পড়া হয় না; شَ-তে তাশদীদ হয়: الشَّمْس। ১৪টি শামসি হরফ লামকে নিজের মধ্যে মিশিয়ে নেয়।' },
    { ref: '1:1',   focus: 'الرَّحْمَٰنِ',           noteEn: 'ل of ال before رَ — silent; رَ doubles.',                                                     noteBn: 'رَ-এর আগে ال-এর ل পড়া হয় না; رَ-তে তাশদীদ হয়।' },
    { ref: '2:3',   focus: 'الصَّلَاةَ',             noteEn: 'ل of ال before صَ — lam shamsiyyah; صَ takes a shaddah.',                                    noteBn: 'صَ-এর আগে ال-এর ل: লাম শামসিয়্যাহ; صَ-তে তাশদীদ হয়।' },
    { ref: '114:1', focus: 'النَّاسِ',               noteEn: 'ل of ال before نَ — lam silent; نَّ doubles.',                                               noteBn: 'نَ-এর আগে ال-এর ل পড়া হয় না; نَّ-তে তাশদীদ হয়।' },
    { ref: '91:3',  focus: 'وَالنَّهَارِ',           noteEn: 'ل of ال before نَ — silent; نَّ is doubled.',                                                noteBn: 'وَالنَّهَارِ-এ نَ-এর আগে ال-এর ل পড়া হয় না; نَّ-তে তাশদীদ।' },
  ],

  lam_qamariyyah: [
    { ref: '1:2',   focus: 'الْحَمْدُ',              noteEn: 'ل of ال before حَ — moon letter; lam is fully pronounced.',                                   noteBn: 'حَ-এর আগে ال-এর ل: কামারি হরফ; লাম পুরোপুরি উচ্চারিত হয়।' },
    { ref: '2:2',   focus: 'الْكِتَابُ',              noteEn: 'ل of ال before كِ — moon letter; lam audible, كِ takes no shaddah.',                         noteBn: 'كِ-এর আগে ال-এর ل: কামারি হরফ; লাম শোনা যায়, كِ-তে তাশদীদ হয় না।' },
    { ref: '1:2',   focus: 'الْعَالَمِينَ',          noteEn: 'ل of ال before عَ — moon letter; lam clearly heard.',                                         noteBn: 'عَ-এর আগে ال-এর ل: কামারি হরফ; লাম স্পষ্ট শোনা যায়।' },
    { ref: '2:255', focus: 'الْقَيُّومُ',            noteEn: 'ل of ال before قَ — moon letter; lam pronounced clearly.',                                    noteBn: 'قَ-এর আগে ال-এর ل: কামারি হরফ; লাম স্পষ্ট উচ্চারিত হয়।' },
    { ref: '2:4',   focus: 'الآخِرَةِ',               noteEn: 'ل of ال before ء (hamza) — always a moon letter; lam clear, no shaddah on ء.',               noteBn: 'ء (হামযা)-এর আগে ال-এর ل: ء সবসময় কামারি হরফ; লাম স্পষ্ট, ء-তে তাশদীদ হয় না।' },
  ],

  silent: [
    { ref: '2:14',  focus: 'قَالُوا۟',               noteEn: 'The final ا after و in قَالُوا is a silent spelling alif — written after the plural و of most verbs, never pronounced.', noteBn: 'قَالُوا-এর শেষে و-এর পরের ا শুধু বানানের আলিফ, কখনো পড়া হয় না; বেশিরভাগ ক্রিয়ার বহুবচনের و-এর পরে এটি লেখা হয়।' },
    { ref: '2:6',   focus: 'كَفَرُوا۟',               noteEn: 'Same silent alif in كَفَرُوا — pronunciation ends at وَ; the ا is a distinguishing orthographic mark.', noteBn: 'كَفَرُوا-তেও একই উচ্চারণহীন আলিফ: উচ্চারণ وَ-তেই শেষ; ا শুধু বানানের একটি চিহ্ন।' },
    { ref: '2:9',   focus: 'آمَنُوا۟',                noteEn: 'آمَنُوا — the trailing ا is silent; the same pattern runs through most plural verbs in the Quran.', noteBn: 'آمَنُوا: শেষের ا পড়া হয় না; কুরআনের বেশিরভাগ বহুবচন ক্রিয়ায় একই ধরন।' },
    { ref: '18:38', focus: 'لَّٰكِنَّا۟',              noteEn: 'The alif at the end of لَّٰكِنَّا is written but dropped in continuous recitation (only heard if stopping here).', noteBn: 'لَّٰكِنَّا-এর শেষের ا লেখা থাকে, কিন্তু মিলিয়ে পড়লে বাদ পড়ে (শুধু এখানে থামলে শোনা যায়)।' },
    { ref: '2:5',   focus: 'أُو۟لَٰئِكَ',               noteEn: 'The و in أُو۟لَٰئِكَ is purely orthographic — read "ulāʾika" with a short u; the waaw is never pronounced.', noteBn: 'أُو۟لَٰئِكَ-এর و কেবল বানানগত — পড়ুন "উলাইকা" ছোট উ দিয়ে; ওয়াও কখনো উচ্চারিত হয় না।' },
    { ref: '2:25',  focus: 'وَعَمِلُوا۟',               noteEn: 'وَعَمِلُوا۟ الصَّالِحَاتِ — the plural-verb alif is silent AND the following hamzat al-wasl drops: read "wa-ʿamiluṣ-ṣāliḥāt".', noteBn: 'وَعَمِلُوا۟ الصَّالِحَاتِ — বহুবচন ক্রিয়ার আলিফ নীরব এবং পরের হামযাতুল ওয়াসলও বাদ: পড়ুন "ওয়া-আমিলুস-সালিহাত"।' },
    { ref: '27:21', focus: 'لَأَا۟ذْبَحَنَّهُ',          noteEn: 'لَأَا۟ذْبَحَنَّهُ — an extra written alif after the hamza that is never pronounced: read "la-adhbaḥannahu" (a rare spelling relic).', noteBn: 'لَأَا۟ذْبَحَنَّهُ — হামযার পরে লেখা অতিরিক্ত আলিফ কখনো উচ্চারিত হয় না: পড়ুন "লা-আযবাহান্নাহু" (বিরল বানান-নিদর্শন)।' },
  ],

  // ── Ra' rules ─────────────────────────────────────────────────────────────
  ra_tafkhim: [
    { ref: '1:2',   focus: 'رَبِّ',                  noteEn: 'رَ with fathah — fill the mouth; this is the default heavy ra\'.',                            noteBn: 'رَبِّ-এ যবরওয়ালা رَ: মুখ ভরে পড়ুন; এটাই রা-এর স্বাভাবিক মোটা উচ্চারণ।' },
    { ref: '55:1',  focus: 'الرَّحْمَٰنُ',           noteEn: 'رَّ with fathah and shaddah — clearly heavy.',                                                noteBn: 'الرَّحْمَٰنُ-এ যবর ও তাশদীদওয়ালা رَّ: স্পষ্টভাবে মোটা।' },
    { ref: '16:1',  focus: 'أَمْرُ',                  noteEn: 'رُ with dammah in أَمْرُ اللَّهِ — heavy ra\'.',                                              noteBn: 'أَمْرُ اللَّهِ-এ পেশওয়ালা رُ: মোটা রা।' },
    { ref: '1:6',   focus: 'الصِّرَاطَ',             noteEn: 'رَا in الصِّرَاطَ — the ر carries fathah: tafkhim despite the kasrah on صِ.',                 noteBn: 'الصِّرَاطَ-এর رَا: ر-এ যবর, তাই صِ-তে যের থাকলেও রা মোটা।' },
    { ref: '2:47',  focus: 'إِسْرَائِيلَ',           noteEn: 'رَ in إِسْرَائِيلَ has fathah — tafkhim; do not let the surrounding kasra soften it.',        noteBn: 'إِسْرَائِيلَ-এর رَ-তে যবর: রা মোটা; আশপাশের যেরের প্রভাবে পাতলা হতে দেবেন না।' },
  ],

  ra_tarqiq: [
    { ref: '13:26', focus: 'الرِّزْقَ',              noteEn: 'رِ with kasrah in الرِّزْق — light, thin pronunciation; tongue stays low.',                    noteBn: 'الرِّزْقَ-এ যেরওয়ালা رِ: হালকা, পাতলা উচ্চারণ; জিহ্বা নিচে থাকে।' },
    { ref: '4:34',  focus: 'الرِّجَالُ',             noteEn: 'رِ with kasrah in الرِّجَال — tarqiq; light ra\'.',                                           noteBn: 'الرِّجَالُ-এ যেরওয়ালা رِ: তারকিক; পাতলা রা।' },
    { ref: '2:49',  focus: 'فِرْعَوْنَ',             noteEn: 'رْ in فِرْعَوْن has sukoon, preceded by kasrah on فِ — tarqiq (light ra\').',                  noteBn: 'فِرْعَوْنَ-এ رْ সাকিন, আর তার আগে فِ-তে যের: তারকিক (পাতলা রা)।' },
    { ref: '1:7',   focus: 'غَيْرِ',                  noteEn: 'رِ with kasrah in غَيْرِ — tarqiq: light ra\' at end of phrase.',                             noteBn: 'غَيْرِ-এ যেরওয়ালা رِ: তারকিক; বাক্যাংশের শেষে পাতলা রা।' },
    { ref: '2:98',  focus: 'جِبْرِيلَ',              noteEn: 'رِ in جِبْرِيل — kasrah on ر: tarqiq.',                                                       noteBn: 'جِبْرِيلَ-এর رِ: ر-এ যের, তাই তারকিক।' },
  ],

  // ── Waqf & special-letter rules ────────────────────────────────────────────
  ha_sakt: [
    { ref: '69:19', focus: 'كِتَابِيَهْ',            noteEn: 'هَاء السَّكْت — in Hafs it is pronounced both when stopping and when joining to the next verse.',  noteBn: 'كِتَابِيَهْ-এ هَاء السَّكْت: হাফসে থামলেও, পরের আয়াতের সাথে মিলিয়ে পড়লেও এটি উচ্চারিত হয়।' },
    { ref: '69:20', focus: 'حِسَابِيَهْ',            noteEn: 'The sākin هْ preserves the vowel of the يَ when stopping on حِسَابِيَهْ.',                             noteBn: 'حِسَابِيَهْ-এ থামলে সাকিন هْ يَ-এর হরকতটি বাঁচিয়ে রাখে।' },
    { ref: '69:25', focus: 'كِتَابِيَهْ',            noteEn: 'Second occurrence of كِتَابِيَهْ (the disbeliever\'s cry) — same هَاء السَّكْت rule.',          noteBn: 'দ্বিতীয়বার كِتَابِيَهْ (কাফেরের আর্তনাদ): একই هَاء السَّكْت-এর নিয়ম।' },
    { ref: '69:28', focus: 'مَالِيَهْ',              noteEn: 'مَالِيَهْ — هَاء السَّكْت prevents elision of the يَ at waqf.',                                  noteBn: 'مَالِيَهْ: هَاء السَّكْت থাকার কারণে ওয়াকফে يَ বাদ পড়ে না।' },
    { ref: '69:29', focus: 'سُلْطَانِيَهْ',          noteEn: 'سُلْطَانِيَهْ — هَاء السَّكْت at the verse end; in Hafs it stays even when you connect to the next verse.',                    noteBn: 'سُلْطَانِيَهْ: আয়াতের শেষে هَاء السَّكْت; হাফসে পরের আয়াতের সাথে মিলিয়ে পড়লেও এটি থাকে।' },
  ],

  sakt: [
    { ref: '18:1',  focus: 'عِوَجًا ۜ قَيِّمًا',     noteEn: 'Sakt after عِوَجًا — brief silent pause without breathing before قَيِّمًا; marks the contrast between crookedness and straightness.', noteBn: 'عِوَجًا-এর পরে সাকত: قَيِّمًا-এর আগে শ্বাস না নিয়ে অল্প সময় আওয়াজ বন্ধ রাখুন; এতে বক্রতা আর সরলতার পার্থক্য ফুটে ওঠে।' },
    { ref: '36:52', focus: 'مَرْقَدِنَا ۜ هَٰذَا',   noteEn: 'Sakt after مَرْقَدِنَا — in a common explanation, the pause marks the shift between the disbelievers\' words and the reply.',  noteBn: 'مَرْقَدِنَا-এর পরে সাকত: প্রচলিত এক ব্যাখ্যা অনুযায়ী, এই বিরতি কাফেরদের কথা আর তার জবাবের মাঝখানের সীমা বোঝায়।' },
    { ref: '75:27', focus: 'مَنْ ۜ رَاقٍ',           noteEn: 'Sakt on مَنْ before رَاقٍ — prevents نْ from merging into رَ (which would otherwise be idghaam mutaqaribayn).', noteBn: 'رَاقٍ-এর আগে مَنْ-এ সাকত: এতে نْ رَ-তে মিশে যায় না (নইলে ইদগাম মুতাকারিবাইন হতো)।' },
    { ref: '83:14', focus: 'بَلْ ۜ رَانَ',           noteEn: 'Sakt on بَلْ before رَانَ — prevents ل from merging into رَ; these are the four obligatory sakt positions in Hafs.',  noteBn: 'رَانَ-এর আগে بَلْ-এ সাকত: এতে ل رَ-তে মিশে যায় না। হাফসে ওয়াজিব সাকতের চারটি জায়গা এগুলোই।' },
    { ref: '69:28', focus: 'مَالِيَهْ ۜ هَلَكَ',     noteEn: 'Optional sakt when JOINING 69:28 to هَلَكَ (69:29) — the pause keeps the two haas from merging; if you stop at the verse end instead, no sakt is needed.', noteBn: '৬৯:২৮-কে هَلَكَ (৬৯:২৯)-এর সাথে মিলিয়ে পড়লে ঐচ্ছিক সাকত: এই বিরতির কারণে দুই হা মিশে যায় না। আয়াতের শেষে থামলে সাকত লাগে না।' },
    { ref: '8:75',  focus: 'عَلِيمٌ … بَرَاءَةٌ',    noteEn: 'Between Surah al-Anfal and at-Tawbah (no basmalah) three ways are allowed: stop, sakt, or join — joining turns the tanween before ب into iqlab.', noteBn: 'সূরা আনফাল ও তাওবার মাঝে (বিসমিল্লাহ নেই) তিনভাবে পড়া জায়েয: ওয়াকফ, সাকত বা ওয়াসল — মিলিয়ে পড়লে ب-এর আগের তানউইনে ইকলাব হয়।' },
  ],

  // ── Meem Sākinah: Iẓhār Shafawī ─────────────────────────────────────────────
  izhar_shafawi: [
    { ref: '1:2',   focus: 'الْحَمْدُ',        noteEn: 'مْ before د in الْحَمْدُ — pronounce the meem clearly, no ghunnah, no hiding.',              noteBn: 'الْحَمْدُ-এ د-এর আগে مْ: মীম স্পষ্ট পড়ুন; গুন্নাহ নেই, গোপনও নয়।' },
    { ref: '1:7',   focus: 'أَنْعَمْتَ',       noteEn: 'مْ before تَ in أَنْعَمْتَ — clear izhar shafawi.',                                           noteBn: 'أَنْعَمْتَ-এ تَ-এর আগে مْ: স্পষ্ট ইযহার শাফাবি।' },
    { ref: '1:7',   focus: 'عَلَيْهِمْ غَيْرِ', noteEn: 'مْ before غَ across words — meem clear; note غ is a heavy letter but the meem stays light.',   noteBn: 'عَلَيْهِمْ-এর পরে غَيْرِ, দুই শব্দের মাঝে غَ-এর আগে مْ: মীম স্পষ্ট। খেয়াল করুন, غ মোটা হরফ হলেও মীম পাতলাই থাকে।' },
    { ref: '112:3', focus: 'لَمْ يَلِدْ',       noteEn: 'مْ before يَ — a careful case: keep the meem clearly separate from the yaa, no ghunnah.',      noteBn: 'لَمْ-এর পরে يَ: সাবধানের জায়গা; মীমকে ইয়া থেকে স্পষ্ট আলাদা রাখুন, গুন্নাহ নেই।' },
    { ref: '2:25',  focus: 'لَهُمْ فِيهَا',     noteEn: 'مْ before ف — the trickiest case: do NOT hide the meem into the faa; pronounce it clearly.',   noteBn: 'ف-এর আগে مْ: সবচেয়ে ভুল হওয়ার জায়গা; মীমকে ফা-এর মধ্যে গোপন করবেন না, স্পষ্ট পড়ুন।' },
  
    // v163 additions — 6 machine-verified examples
    {"ref":"36:6","focus":"ءَابَآؤُهُمْ فَهُمْ","noteEn":"مْ before فَ — the trickiest case: keep the meem clear, never hidden into the faa.","noteBn":"فَ-এর আগে مْ: সবচেয়ে ভুল হওয়ার জায়গা; মীম স্পষ্ট রাখুন, ফা-এর মধ্যে কখনো গোপন নয়।"},
    {"ref":"56:17","focus":"عَلَيْهِمْ وِلْدَٰنٌ","noteEn":"مْ before وِ — take special care: lips share the same spot, but the meem stays fully clear.","noteBn":"وِ-এর আগে مْ: বিশেষ সাবধান থাকুন; দুটিই ঠোঁটের একই জায়গা থেকে আসে, তবু মীম পুরোপুরি স্পষ্ট থাকবে।"},
    {"ref":"73:10","focus":"وَٱهْجُرْهُمْ هَجْرًا","noteEn":"مْ before هَ in وَٱهْجُرْهُمْ هَجْرًا — clear izhar shafawi, no ghunnah.","noteBn":"وَٱهْجُرْهُمْ هَجْرًا-এ هَ-এর আগে مْ: স্পষ্ট ইযহার শাফাবি, গুন্নাহ নেই।"},
    {"ref":"82:10","focus":"عَلَيْكُمْ لَحَٰفِظِينَ","noteEn":"مْ before لَ — pronounce the meem clearly and move on; no nasal hold.","noteBn":"لَ-এর আগে مْ: মীম স্পষ্ট উচ্চারণ করে এগিয়ে যান; নাকের আওয়াজ ধরে রাখবেন না।"},
    {"ref":"86:15","focus":"إِنَّهُمْ يَكِيدُونَ","noteEn":"مْ before يَ in إِنَّهُمْ يَكِيدُونَ — keep the meem clearly separate from the yaa.","noteBn":"إِنَّهُمْ يَكِيدُونَ-এ يَ-এর আগে مْ: মীমকে ইয়া থেকে স্পষ্টভাবে আলাদা রাখুন।"},
    {"ref":"88:6","focus":"لَهُمْ طَعَامٌ","noteEn":"مْ before طَ in لَّيْسَ لَهُمْ طَعَامٌ — izhar shafawi: the meem stays light before the heavy طَ.","noteBn":"لَّيْسَ لَهُمْ طَعَامٌ-এ طَ-এর আগে مْ: ইযহার শাফাবি; মোটা طَ-এর আগেও মীম পাতলা থাকে।"}
  ],

  // ── Idghām of two identical letters ─────────────────────────────────────────
  idghaam_mutamathilayn: [
    { ref: '2:60',  focus: 'اضْرِب بِّعَصَاكَ', noteEn: 'بْ before بِّ — identical letters; the first ب merges fully into the second (بّ takes shaddah).', noteBn: 'اضْرِب بِّعَصَاكَ-এ بِّ-এর আগে بْ: একই হরফ; প্রথম ب পুরোপুরি দ্বিতীয়টিতে মিশে যায় (بّ-তে তাশদীদ)।' },
    { ref: '5:61',  focus: 'قَد دَّخَلُوا',     noteEn: 'دْ before دَّ — the د of قَد merges completely into the following دَّ.',                       noteBn: 'قَد دَّخَلُوا-এ دَّ-এর আগে دْ: قَد-এর দাল পরের دَّ-এ পুরোপুরি মিশে যায়।' },
    { ref: '4:78',  focus: 'يُدْرِككُّمُ',       noteEn: 'كْ before كُّ within يُدْرِككُّمُ — two identical kaafs merge into one doubled كّ.',          noteBn: 'يُدْرِككُّمُ-এর ভেতরে كُّ-এর আগে كْ: একই দুই কাফ মিশে একটি তাশদীদওয়ালা كّ হয়।' },
    { ref: '21:87', focus: 'إِذ ذَّهَبَ',       noteEn: 'ذْ before ذَّ — the ذ of إِذ merges completely into the following ذَّ (shaddah).',            noteBn: 'إِذ ذَّهَبَ-এ ذَّ-এর আগে ذْ: إِذ-এর ذ পরের ذَّ-এ পুরোপুরি মিশে যায় (তাশদীদ)।' },
    { ref: '27:28', focus: 'اذْهَب بِّكِتَابِي', noteEn: 'بْ before بِّ in اذْهَب بِّكِتَابِي — two identical baas: one closure of the lips, released as the doubled بّ.', noteBn: 'اذْهَب بِّكِتَابِي-এ بِّ-এর আগে بْ: একই দুই বা; ঠোঁট একবার বন্ধ হয়ে তাশদীদওয়ালা بّ হিসেবে খোলে।' },
    { ref: '2:16',  focus: 'رَبِحَت تِّجَارَتُهُمْ', noteEn: 'تْ before تِّ in رَبِحَت تِّجَارَتُهُمْ — the taa of the verb merges into the taa of تِّجَارَة with shaddah.', noteBn: 'رَبِحَت تِّجَارَتُهُمْ-এ تِّ-এর আগে تْ: ক্রিয়ার তা মিশে যায় تِّجَارَة-এর তা-তে, তাশদীদসহ।' },
    { ref: '24:33', focus: 'يُكْرِههُّنَّ',       noteEn: 'هْ before هُّ INSIDE one word — يُكْرِههُّنَّ: the two haas merge into a single doubled هّ (mutamathilayn within a word).', noteBn: 'একই শব্দের ভেতরে هُّ-এর আগে هْ: يُكْرِههُّنَّ-এ দুই হা মিশে একটি তাশদীদওয়ালা هّ হয় (শব্দের ভেতরে মুতামাসিলাইন)।' },
  ],

  // ── Lafẓ al-Jalālah: the lām of "Allāh" ─────────────────────────────────────
  lafz_jalalah: [
    { ref: '112:1', focus: 'هُوَ اللَّهُ',      noteEn: 'اللَّهُ after the fathah of هُوَ — heavy lām (tafkhim): fill the mouth.',                     noteBn: 'هُوَ-এর যবরের পরে اللَّهُ: লাম মোটা (তাফখিম); মুখ ভরে পড়ুন।' },
    { ref: '3:18',  focus: 'شَهِدَ اللَّهُ',     noteEn: 'اللَّهُ after the fathah of شَهِدَ — heavy lām.',                                             noteBn: 'شَهِدَ-এর যবরের পরে اللَّهُ: লাম মোটা।' },
    { ref: '5:110', focus: 'قَالَ اللَّهُ',      noteEn: 'اللَّهُ after the fathah of قَالَ — tafkhim; the classic heavy lām of the Name.',            noteBn: 'قَالَ-এর যবরের পরে اللَّهُ: তাফখিম; আল্লাহ নামের মোটা লামের পরিচিত উদাহরণ।' },
    { ref: '1:1',   focus: 'بِسْمِ اللَّهِ',     noteEn: 'اللَّهِ after the kasrah of بِسْمِ — light lām (tarqiq): thin and soft.',                     noteBn: 'بِسْمِ-এর যেরের পরে اللَّهِ: লাম পাতলা (তারকিক), হালকা ও নরম।' },
    { ref: '1:2',   focus: 'الْحَمْدُ لِلَّهِ',  noteEn: 'لِلَّهِ after the kasrah of لِ — light lām; contrast this with the heavy cases above.',        noteBn: 'لِلَّهِ-এ لِ-এর যেরের পরে লাম পাতলা; উপরের মোটা উদাহরণগুলোর সাথে মিলিয়ে দেখুন।' },
  ],

  // ── Istiʿlāʾ: the seven ever-heavy letters ──────────────────────────────────
  tafkhim_istila: [
    { ref: '96:2',  focus: 'خَلَقَ',            noteEn: 'خ (and ق) in خَلَقَ — letters of istiʿlāʾ; always heavy, whatever the vowel.',               noteBn: 'خَلَقَ-এ خ (আর ق): ইসতিলার হরফ; হরকত যা-ই হোক, সবসময় মোটা।' },
    { ref: '1:6',   focus: 'الصِّرَاطَ',        noteEn: 'ص and ط in الصِّرَاطَ — heavy despite the kasrah on ص; isti\'la overrides the vowel.',        noteBn: 'الصِّرَاطَ-এ ص ও ط: ص-এ যের থাকলেও মোটা; ইসতিলার প্রভাব হরকতের চেয়ে বেশি।' },
    { ref: '1:7',   focus: 'الضَّالِّينَ',      noteEn: 'ض in الضَّالِّينَ — a heavy isti\'la letter unique to Arabic.',                               noteBn: 'الضَّالِّينَ-এ ض: মোটা ইসতিলার হরফ, যা শুধু আরবিতেই আছে।' },
    { ref: '1:7',   focus: 'غَيْرِ',             noteEn: 'غ in غَيْرِ — heavy, from the top of the throat; keep it full even before a kasrah.',         noteBn: 'غَيْرِ-এ غ: গলার উপরের অংশ থেকে মোটা আওয়াজ; যেরের আগেও পূর্ণ রাখুন।' },
    { ref: '2:255', focus: 'الْعَظِيمُ',        noteEn: 'ظ in الْعَظِيمُ — a heavy isti\'la letter; the tongue-tip touches the upper teeth, mouth full.', noteBn: 'الْعَظِيمُ-এ ظ: মোটা ইসতিলার হরফ; জিহ্বার ডগা উপরের দাঁত ছোঁয়, মুখ ভরে পড়ুন।' },
    { ref: '112:1', focus: 'قُلْ',               noteEn: 'ق in قُلْ — an isti\'la letter from the back of the tongue; a full, heavy uvular stop.',                             noteBn: 'قُلْ-এ ق: জিহ্বার গোড়া থেকে আসা ইসতিলার হরফ; আলজিভের কাছ থেকে পূর্ণ, মোটা উচ্চারণ।' },
  ],

  // ── Madd al-Ṣilah ───────────────────────────────────────────────────────────
  madd_silah: [
    { ref: '2:255', focus: 'لَهُ مَا',           noteEn: 'ـهُ between two vowels, next letter مَ (not hamza) — Silah Sughra: stretch 2 counts as a hidden waaw.', noteBn: 'لَهُ مَا-এ দুই হরকতের মাঝে ـهُ, পরের হরফ مَ (হামযা নয়): সিলাহ সুগরা; গোপন ওয়াওয়ের মতো ২ হরকত টানুন।' },
    { ref: '2:37',  focus: 'إِنَّهُ هُوَ',       noteEn: 'ـهُ in إِنَّهُ before هُوَ — Silah Sughra, 2 counts (a hidden waaw after the dammah).',       noteBn: 'إِنَّهُ-এর ـهُ, هُوَ-এর আগে: সিলাহ সুগরা, ২ হরকত (পেশের পরে গোপন ওয়াও)।' },
    { ref: '104:3', focus: 'مَالَهُ أَخْلَدَهُ', noteEn: 'ـهُ in مَالَهُ before أَخْلَدَهُ (hamzat qatʿ) — Silah Kubra: stretch 4–5 counts.',            noteBn: 'مَالَهُ-এর ـهُ, أَخْلَدَهُ-এর আগে (হামযাতুল ক্বাত): সিলাহ কুবরা; ৪–৫ হরকত টানুন।' },
    { ref: '18:110', focus: 'رَبِّهِ أَحَدًا',   noteEn: 'ـهِ in رَبِّهِ before أَحَدًا (hamzat qatʿ) — Silah Kubra: 4–5 counts as a hidden yaa.',       noteBn: 'رَبِّهِ-এর ـهِ, أَحَدًا-এর আগে (হামযাতুল ক্বাত): সিলাহ কুবরা; গোপন ইয়ার মতো ৪–৫ হরকত।' },
    { ref: '2:2',   focus: 'فِيهِ',              noteEn: 'No silah here — the haa of فِيهِ is preceded by a sukoon (long ī), so it is not stretched.',   noteBn: 'এখানে সিলাহ নেই — فِيهِ-এর হা-এর আগে সাকিন (দীর্ঘ ঈ), তাই টানা হয় না।' },
  ],

  // ── Madd al-Farq ────────────────────────────────────────────────────────────
  madd_farq: [
    { ref: '6:143', focus: 'آلذَّكَرَيْنِ',     noteEn: 'Interrogative hamza + ال of الذَّكَرَيْنِ — stretch 6 counts so the question is not heard as a statement.', noteBn: 'প্রশ্নের হামযা + الذَّكَرَيْنِ-এর ال: ৬ হরকত টানুন, যাতে প্রশ্নটা সাধারণ কথার মতো না শোনায়।' },
    { ref: '6:144', focus: 'آلذَّكَرَيْنِ',     noteEn: 'The parallel place in the next verse — same madd al-farq, 6 counts.',                          noteBn: 'পরের আয়াতে একই রকম জায়গা: একই মাদ্দ ফারক, ৬ হরকত।' },
    { ref: '10:59', focus: 'آللَّهُ أَذِنَ',     noteEn: 'آللَّهُ — interrogative hamza before the ال of the Name; 6-count madd al-farq.',              noteBn: 'آللَّهُ: আল্লাহ নামের (الله) ال-এর আগে প্রশ্নের হামযা; ৬ হরকত মাদ্দ ফারক।' },
    { ref: '27:59', focus: 'آللَّهُ خَيْرٌ',     noteEn: 'آللَّهُ خَيْرٌ — the same interrogative آللَّهُ; distinguish "Is it Allah?" with 6 counts.',   noteBn: 'آللَّهُ خَيْرٌ: একই প্রশ্নসূচক آللَّهُ; ৬ হরকত টেনে "আল্লাহ কি?" প্রশ্নটি আলাদা করে বোঝান।' },
    { ref: '10:51', focus: 'آلْآنَ',             noteEn: 'آلْآنَ — interrogative hamza + ال of الآن; 6-count madd al-farq ("Now?").',                   noteBn: 'آلْآنَ: الآن-এর ال-এর আগে প্রশ্নের হামযা; ৬ হরকত মাদ্দ ফারক ("এখন?")।' },
  ],

  // ── Hamzat al-Qaṭʿ ──────────────────────────────────────────────────────────
  hamzat_qat: [
    { ref: '1:7',   focus: 'أَنْعَمْتَ',        noteEn: 'أ hamzat al-qatʿ with fathah — sounded whether you start at أَنْعَمْتَ or join from الَّذِينَ before it.', noteBn: 'أَنْعَمْتَ-এ যবরওয়ালা أ হামযাতুল ক্বাত: এখান থেকে শুরু করলেও, আগের الَّذِينَ থেকে মিলিয়ে পড়লেও উচ্চারিত হয়।' },
    { ref: '1:5',   focus: 'إِيَّاكَ',          noteEn: 'إ hamzat al-qatʿ with kasrah at the head of إِيَّاكَ — always pronounced, never dropped.',   noteBn: 'إِيَّاكَ-এর শুরুতে যেরওয়ালা إ হামযাতুল ক্বাত: সবসময় উচ্চারিত, কখনো বাদ পড়ে না।' },
    { ref: '2:6',   focus: 'إِنَّ',             noteEn: 'إِنَّ opens with hamzat al-qatʿ; contrast the wasl-alif of الَّذِينَ right after it (which drops in flow).', noteBn: 'إِنَّ শুরু হয় হামযাতুল ক্বাত দিয়ে; ঠিক পরের الَّذِينَ-এর ওয়াসল-আলিফের সাথে মিলিয়ে দেখুন (মিলিয়ে পড়লে সেটি বাদ পড়ে)।' },
    { ref: '106:4', focus: 'أَطْعَمَهُم',       noteEn: 'أ hamzat al-qatʿ mid-verse in أَطْعَمَهُم — pronounced fully even when connected to الَّذِي before it.', noteBn: 'أَطْعَمَهُم-এ আয়াতের মাঝখানে أ হামযাতুল ক্বাত: আগের الَّذِي-এর সাথে মিলিয়ে পড়লেও পুরো উচ্চারিত হয়।' },
    { ref: '96:1',  focus: 'اقْرَأْ',           noteEn: 'One word, two hamzas: the initial ا is hamzat al-wasl (dropped when joined), the FINAL ء is hamzat al-qatʿ (always sounded).', noteBn: 'اقْرَأْ: এক শব্দে দুই হামযা। শুরুর ا হামযাতুল ওয়াসল (মিলিয়ে পড়লে বাদ পড়ে), শেষের ء হামযাতুল ক্বাত (সবসময় উচ্চারিত)।' },
  ],

  // ── Tarqīq of the general Lām ───────────────────────────────────────────────
  tarqiq_lam: [
    { ref: '2:2',   focus: 'لَا',               noteEn: 'The ل of the negative لَا — light (tarqīq); this is the default weight of every lām in the Quran.', noteBn: 'না-বোধক لَا-এর ل পাতলা (তারকিক); কুরআনে প্রতিটি লামের স্বাভাবিক উচ্চারণ এটাই।' },
    { ref: '1:2',   focus: 'الْحَمْدُ',         noteEn: 'The ل of the article ال in الْحَمْدُ — pronounced light and thin.',                          noteBn: 'الْحَمْدُ-এ ال-এর ল পাতলা ও হালকা উচ্চারিত হয়।' },
    { ref: '112:1', focus: 'قُلْ',              noteEn: 'The ل with sukoon in قُلْ — light, not heavy.',                                              noteBn: 'قُلْ-এ সাকিন ل: পাতলা, মোটা নয়।' },
    { ref: '1:4',   focus: 'مَالِكِ',           noteEn: 'The ل with kasrah in مَالِكِ — light and thin.',                                             noteBn: 'مَالِكِ-এ যেরওয়ালা ل: পাতলা ও হালকা।' },
    { ref: '3:2',   focus: 'اللَّهُ لَا إِلَٰهَ', noteEn: 'Contrast: starting on اللَّهُ its lām is HEAVY (after the fathah), while the lāms of لَا and إِلَٰهَ stay light.', noteBn: 'তুলনা করুন: اللَّهُ থেকে শুরু করলে এর লাম মোটা (যবরের পরে), কিন্তু لَا আর إِلَٰهَ-এর লাম পাতলাই থাকে।' },
  ],

  // ── Marātib al-Ghunnah ──────────────────────────────────────────────────────
  ghunnah_maratib: [
    { ref: '108:1', focus: 'إِنَّا',            noteEn: 'Doubled نّ — the STRONGEST, fullest ghunnah (level 1), held ~2 counts.',                    noteBn: 'إِنَّا-এ তাশদীদওয়ালা نّ: সবচেয়ে জোরালো, পূর্ণ গুন্নাহ (স্তর ১), প্রায় ২ হরকত ধরে রাখুন।' },
    { ref: '3:37',  focus: 'مَن يَشَاءُ',       noteEn: 'نْ merging into يَ (idghām bi-ghunnah) — strong ghunnah, one level below the doubled letter.', noteBn: 'مَن يَشَاءُ-এ نْ মিশে যায় يَ-তে (ইদগাম বিল-গুন্নাহ): জোরালো গুন্নাহ, তাশদীদওয়ালা হরফের এক ধাপ নিচে।' },
    { ref: '2:18',  focus: 'صُمٌّ بُكْمٌ',      noteEn: 'Tanween before بُ (iqlāb) — full ghunnah on the converted nasal meem.',                    noteBn: 'صُمٌّ بُكْمٌ-এ بُ-এর আগে তানউইন (ইকলাব): বদলে যাওয়া নাকের আওয়াজের মীমে পূর্ণ গুন্নাহ।' },
    { ref: '2:3',   focus: 'يُنفِقُونَ',        noteEn: 'نْ before ف (ikhfā) — medium-strength ghunnah, held ~2 counts.',                            noteBn: 'يُنفِقُونَ-এ ف-এর আগে نْ (ইখফা): মাঝারি গুন্নাহ, প্রায় ২ হরকত।' },
    { ref: '1:2',   focus: 'الْعَالَمِينَ',    noteEn: 'The voweled نَ carries only the faint inherent ghunnah (the weakest level) — do not over-nasalise it.', noteBn: 'الْعَالَمِينَ-এ হরকতওয়ালা نَ: শুধু স্বাভাবিক ক্ষীণ গুন্নাহ (সবচেয়ে হালকা স্তর); বেশি নাকি সুর দেবেন না।' },
  ],

  // ── Waqf & Ibtidāʾ ──────────────────────────────────────────────────────────
  waqf_ibtida: [
    { ref: '2:5',   focus: 'الْمُفْلِحُونَ',    noteEn: 'A verse end with complete meaning — a tāmm (complete) stop; begin the next verse fresh.',   noteBn: 'الْمُفْلِحُونَ: পূর্ণ অর্থে শেষ হওয়া আয়াত; তাম্ম (পূর্ণ) ওয়াকফ। পরের আয়াত নতুন করে শুরু করুন।' },
    { ref: '1:7',   focus: 'عَلَيْهِمْ',        noteEn: 'The first عَلَيْهِمْ mid-verse is a ḥasan (good) stop — grammatically sound but connected to what follows.', noteBn: 'আয়াতের মাঝে প্রথম عَلَيْهِمْ: হাসান (ভালো) ওয়াকফ; ব্যাকরণে ঠিক, কিন্তু পরের অংশের সাথে অর্থে জড়ানো।' },
    { ref: '2:2',   focus: 'فِيهِ',             noteEn: 'The tie-mark ۛ sits on both لَا رَيْبَ ۛ and فِيهِ ۛ (muʿānaqah) — stop at only ONE of the two, never both.', noteBn: 'لَا رَيْبَ ۛ আর فِيهِ ۛ, দুটিতেই মুআনাকা চিহ্ন ۛ: দুটির যেকোনো একটিতে থামুন, দুটিতেই নয়।' },
    { ref: '114:6', focus: 'النَّاسِ',          noteEn: 'The very last word of the Quran — the most complete stop of all.',                          noteBn: 'النَّاسِ: কুরআনের একেবারে শেষ শব্দ; সবচেয়ে পূর্ণ ওয়াকফ।' },
    { ref: '1:1',   focus: 'بِسْمِ اللَّهِ',    noteEn: 'Ibtidāʾ: after the istiʿādhah, the recommended place to begin the recitation.',              noteBn: 'বিসমিল্লাহ: ইবতিদা; আউযুবিল্লাহ পড়ার পরে তিলাওয়াত শুরুর উত্তম জায়গা।' },
  ],
};

const TAJWEED_QUIZ = [
  { qEn: 'How many harakāt (beats) is Madd Ṭabī\'ī (natural madd) held for?',
    qBn: 'মাদ্দ তাবী\'ঈ (স্বাভাবিক মাদ্দ) কত হারাকাত পরিমাণ টানা হয়?',
    optsEn: ['1 harakah', '2 harakāt', '4 harakāt', '6 harakāt'],
    optsBn: ['১ হারাকাহ', '২ হারাকাত', '৪ হারাকাত', '৬ হারাকাত'],
    correct: 1 },
  { qEn: 'Madd \'Āriḍ li-l-Sukūn is typically held for how many harakāt when stopping?',
    qBn: 'ওয়াকফের সময় মাদ্দে আরিয লিস-সুকূন সাধারণত কত হারাকাত টানা হয়?',
    optsEn: ['2 harakāt only', '4 harakāt only', '6 harakāt only', '2, 4, or 6 harakāt (permissible)'],
    optsBn: ['শুধু ২ হারাকাত', 'শুধু ৪ হারাকাত', 'শুধু ৬ হারাকাত', '২, ৪ বা ৬ হারাকাত (সবই জায়েজ)'],
    correct: 3 },
  { qEn: 'Madd Lāzim is held for how many harakāt?',
    qBn: 'মাদ্দ লাযিম কত হারাকাত টানা হয়?',
    optsEn: ['2 harakāt', '4 harakāt', '6 harakāt', '8 harakāt'],
    optsBn: ['২ হারাকাত', '৪ হারাকাত', '৬ হারাকাত', '৮ হারাকাত'],
    correct: 2 },
  { qEn: 'Which rule applies when noon sākinah or tanwīn is followed by one of the letters أ هـ ع ح غ خ?',
    qBn: 'নূন সাকিন বা তানওয়ীনের পর أ هـ ع ح غ خ আসলে কোন নিয়ম প্রযোজ্য?',
    optsEn: ['Idghām', 'Ikhfā\'', 'Izhār', 'Iqlāb'],
    optsBn: ['ইদগাম', 'ইখফা', 'ইযহার', 'ইকলাব'],
    correct: 2 },
  { qEn: 'Iqlāb occurs when noon sākinah or tanwīn is followed by which letter?',
    qBn: 'নূন সাকিন বা তানওয়ীনের পর কোন হরফ আসলে ইকলাব হয়?',
    optsEn: ['م', 'ب', 'ن', 'و'],
    optsBn: ['م', 'ب', 'ن', 'و'],
    correct: 1 },
  { qEn: 'Ikhfā Shafawī (labial concealment) applies when meem sākinah is followed by which letter?',
    qBn: 'মীম সাকিনের পর কোন হরফ আসলে ইখফা শাফাওয়ী হয়?',
    optsEn: ['ف', 'ب', 'و', 'م'],
    optsBn: ['ف', 'ب', 'و', 'م'],
    correct: 1 },
  { qEn: 'Idghām Mutamāthilayn occurs when two letters meeting are:',
    qBn: 'ইদগাম মুতামাসিলাইন কখন হয়?',
    optsEn: ['Identical in makhraj and sifah', 'Same makhraj but different sifah', 'Different makhraj but close sifah', 'Completely unrelated letters'],
    optsBn: ['মাখরাজ ও সিফাত উভয়ই একই', 'মাখরাজ একই কিন্তু সিফাত ভিন্ন', 'মাখরাজ ভিন্ন কিন্তু সিফাত কাছাকাছি', 'সম্পূর্ণ ভিন্ন হরফ'],
    correct: 0 },
  { qEn: 'Which of the following is the correct set of Qalqalah letters?',
    qBn: 'নিচের কোনটি কলকলার হরফগুলোর সঠিক তালিকা?',
    optsEn: ['ق ط ب ج د', 'ق ك ب ج د', 'ق ط ف ج د', 'ق ط ب ز د'],
    optsBn: ['ق ط ب ج د', 'ق ك ب ج د', 'ق ط ف ج د', 'ق ط ب ز د'],
    correct: 0 },
  { qEn: 'Which Waqf sign indicates that stopping is OBLIGATORY (must stop)?',
    qBn: 'কোন ওয়াকফ চিহ্নে থামা আবশ্যিক (লাযিম)?',
    optsEn: ['مـ (Lāzim)', 'لا (Mamnūʿ)', 'ط (Muṭlaq)', 'ج (Jāʾiz)'],
    optsBn: ['مـ (লাযিম)', 'لا (মামনূ)', 'ط (মুতলাক)', 'ج (জায়েজ)'],
    correct: 0 },
  { qEn: 'How many obligatory Sakt (brief silent pause) positions exist in the recitation of Ḥafṣ \'an \'Āṣim?',
    qBn: 'হাফস আন আসিমের কিরাতে মোট কতটি আবশ্যিক সাকত স্থান আছে?',
    optsEn: ['2', '3', '4', '5'],
    optsBn: ['২', '৩', '৪', '৫'],
    correct: 2 },
  { qEn: 'Rāʾ is pronounced with Tafkhīm (heavy) in which of the following cases?',
    qBn: 'নিচের কোন ক্ষেত্রে রা-কে তাফখিম (মোটা) উচ্চারণ করা হয়?',
    optsEn: ['Rāʾ with kasrah', 'Rāʾ with sukūn preceded by a kasrah', 'Rāʾ with fatḥah or ḍammah', 'Rāʾ followed by a kasrah'],
    optsBn: ['কাসরাযুক্ত রা', 'সাকিন রা-র আগে কাসরা থাকলে', 'ফাতহা বা দাম্মাযুক্ত রা', 'রা-র পরে কাসরা থাকলে'],
    correct: 2 },
  { qEn: 'Rāʾ is pronounced with Tarqīq (light/thin) when:',
    qBn: 'রা তারকিক (পাতলা) উচ্চারণ হয় যখন:',
    optsEn: ['Rāʾ carries a fatḥah', 'Rāʾ carries a ḍammah', 'Rāʾ carries a kasrah', 'Rāʾ is preceded by a fatḥah'],
    optsBn: ['রা-তে ফাতহা আছে', 'রা-তে দাম্মা আছে', 'রা-তে কাসরা আছে', 'রা-র আগে ফাতহা আছে'],
    correct: 2 },
  { qEn: 'Lām Shamsiyyah differs from Lām Qamariyyah in that the shamsī lām:',
    qBn: 'লাম শামসিয়্যা ও লাম কামারিয়্যার পার্থক্য হলো শামসী লামে:',
    optsEn: ['Is pronounced clearly', 'Is assimilated into the following letter (tashdīd on next letter)', 'Is dropped entirely', 'Is replaced by noon'],
    optsBn: ['স্পষ্টভাবে উচ্চারিত হয়', 'পরের হরফে মিশে যায় (পরের হরফে শাদ্দা হয়)', 'সম্পূর্ণ বাদ পড়ে', 'নূন দিয়ে প্রতিস্থাপিত হয়'],
    correct: 1 },
  { qEn: 'The standard duration of Ghunnah (nasalisation) in Ikhfā and Idghām bi-Ghunnah is:',
    qBn: 'ইখফা ও ইদগাম বিল-গুন্নায় গুন্নার স্বাভাবিক পরিমাণ কত?',
    optsEn: ['1 harakah', '2 harakāt', '4 harakāt', '6 harakāt'],
    optsBn: ['১ হারাকাহ', '২ হারাকাত', '৪ হারাকাত', '৬ হারাকাত'],
    correct: 1 },
  { qEn: 'Which of the following correctly describes Rawm (in Waqf)?',
    qBn: 'ওয়াকফে রওম বলতে কী বোঝায়?',
    optsEn: ['Pronouncing the vowel with full voice', 'Pronouncing about one-third of the vowel sound with a very weak voice', 'Pursing the lips to indicate a ḍammah without sound', 'A silent pause before the next word'],
    optsBn: ['পূর্ণ স্বরে হরকত উচ্চারণ করা', 'অত্যন্ত দুর্বল কণ্ঠে আনুমানিক এক-তৃতীয়াংশ স্বর উচ্চারণ করা', 'শব্দ ছাড়াই ঠোঁট গোল করে দাম্মা ইঙ্গিত করা', 'পরের শব্দের আগে নীরব বিরতি'],
    correct: 1 },
  { qEn: 'Izhār Shafawī: meem sākinah (مْ) is pronounced clearly before all letters EXCEPT which two?',
    qBn: 'ইযহার শাফাবি: কোন দুটি হরফ ছাড়া বাকি সব হরফের আগে মীম সাকিন (مْ) স্পষ্ট উচ্চারিত হয়?',
    optsEn: ['ب and م', 'ف and و', 'ن and م', 'ب and ف'],
    optsBn: ['ب ও م', 'ف ও و', 'ن ও م', 'ب ও ف'],
    correct: 0 },
  { qEn: 'In لَهُمْ فِيهَا (2:25) the meem sākinah is followed by ف — what is the correct ruling?',
    qBn: 'لَهُمْ فِيهَا (২:২৫)-তে মীম সাকিনের পরে ف এসেছে। এখানে সঠিক নিয়ম কোনটি?',
    optsEn: ['Ikhfā Shafawī — hide the meem with ghunnah', 'Izhār Shafawī — pronounce the meem clearly, taking care not to hide it in the fā', 'Idghām Shafawī — merge the meem into the fā', 'Iqlāb — convert the meem into a bā'],
    optsBn: ['ইখফা শাফাওয়ী — গুন্নাহসহ মীম গোপন করা', 'ইযহার শাফাবি — মীম স্পষ্ট উচ্চারণ, সতর্ক থাকুন যেন ف-এ গোপন না হয়', 'ইদগাম শাফাওয়ী — মীমকে ف-এ মিশিয়ে দেওয়া', 'ইকলাব — মীমকে ب-তে রূপান্তর করা'],
    correct: 1 },
  { qEn: 'In قَد دَّخَلُوا (5:61), what happens to the د of قَد (Idghām Mutamāthilayn)?',
    qBn: 'قَد دَّخَلُوا (৫:৬১)-তে قَد-এর د-এর কী হয় (ইদগাম মুতামাসিলাইন)?',
    optsEn: ['It is pronounced clearly with qalqalah', 'It merges completely into the following د, which takes a shaddah', 'It is hidden with ghunnah', 'It is dropped and replaced by a meem'],
    optsBn: ['কলকলাহসহ স্পষ্ট উচ্চারিত হয়', 'পরের د-তে সম্পূর্ণ মিশে যায়, যেটি শাদ্দাযুক্ত হয়', 'গুন্নাহসহ গোপন করা হয়', 'বাদ পড়ে মীম দিয়ে প্রতিস্থাপিত হয়'],
    correct: 1 },
  { qEn: 'The lām of the Name اللّٰه is pronounced HEAVY (tafkhīm) when it is preceded by:',
    qBn: 'اللّٰه শব্দের লাম কখন ভারী (তাফখিম) উচ্চারিত হয়?',
    optsEn: ['A kasrah', 'A fatḥah or ḍammah', 'A sukūn only', 'It is always heavy in every position'],
    optsBn: ['আগে কাসরা থাকলে', 'আগে ফাতহা বা দাম্মা থাকলে', 'শুধু সুকূন থাকলে', 'সব অবস্থায়ই ভারী'],
    correct: 1 },
  { qEn: 'In بِسْمِ اللَّهِ (1:1) the lām of the Name اللّٰه is pronounced:',
    qBn: 'بِسْمِ اللَّهِ (১:১)-তে اللّٰه শব্দের লাম কীভাবে উচ্চারিত হয়?',
    optsEn: ['Heavy (tafkhīm), filling the mouth', 'Light (tarqīq), because a kasrah precedes it', 'With ghunnah', 'With qalqalah'],
    optsBn: ['ভারী (তাফখিম), মুখ ভরে', 'হালকা (তারকিক), কারণ আগে কাসরা আছে', 'গুন্নাহসহ', 'কলকলাহসহ'],
    correct: 1 },
  { qEn: 'Which set correctly lists the seven isti\'lā (always-heavy) letters, gathered in the phrase خُصَّ ضَغْطٍ قِظْ?',
    qBn: 'خُصَّ ضَغْطٍ قِظْ বাক্যে একত্র করা সাতটি ইসতিলা (সবসময় ভারী) হরফের সঠিক তালিকা কোনটি?',
    optsEn: ['خ ص ض غ ط ق ظ', 'ح س د ع ت ك ز', 'خ ص ض ع ت ق ظ', 'ق ط ب ج د ك ت'],
    optsBn: ['خ ص ض غ ط ق ظ', 'ح س د ع ت ك ز', 'خ ص ض ع ت ق ظ', 'ق ط ب ج د ك ت'],
    correct: 0 },
  { qEn: 'Madd al-Ṣilah Ṣughrā — as in لَهُ مَا (2:255), where the pronoun hā is followed by a normal letter (not hamza) — is stretched for:',
    qBn: 'মাদ্দে সিলাহ সুগরা কত হরকত টানা হয়? যেমন لَهُ مَا (২:২৫৫), যেখানে সর্বনাম হা-এর পরে হামযা নয়, সাধারণ হরফ এসেছে।',
    optsEn: ['2 harakāt', '4–5 harakāt', '6 harakāt', 'It is not stretched at all'],
    optsBn: ['২ হরকত', '৪–৫ হরকত', '৬ হরকত', 'একেবারেই টানা হয় না'],
    correct: 0 },
  { qEn: 'In مَالَهُ أَخْلَدَهُ (104:3) the pronoun hā of مَالَهُ is stretched 4–5 counts (Ṣilah Kubrā). Why?',
    qBn: 'مَالَهُ أَخْلَدَهُ (১০৪:৩)-তে مَالَهُ-এর সর্বনাম হা ৪–৫ হরকত টানা হয় (সিলাহ কুবরা)। কারণ কী?',
    optsEn: ['Because the next word begins with hamzat al-qatʿ', 'Because it is at the end of a verse', 'Because the hā carries a shaddah', 'Because a sukūn follows it'],
    optsBn: ['কারণ পরের শব্দ হামযাতুল ক্বাত দিয়ে শুরু', 'কারণ এটি আয়াতের শেষে', 'কারণ হা-তে শাদ্দা আছে', 'কারণ এর পরে সুকূন আছে'],
    correct: 0 },
  { qEn: 'Madd al-Farq, as in آللَّهُ أَذِنَ لَكُمْ (10:59), is held for 6 counts in order to:',
    qBn: 'মাদ্দে ফারক, যেমন آللَّهُ أَذِنَ لَكُمْ (১০:৫৯), ৬ হরকত টানা হয় কোন উদ্দেশ্যে?',
    optsEn: ['Beautify the recitation only', 'Distinguish a question from a statement', 'Show that a stop is obligatory', 'Compensate for a dropped noon'],
    optsBn: ['শুধু তিলাওয়াত সুন্দর করতে', 'প্রশ্নকে বিবৃতি থেকে আলাদা করতে', 'ওয়াকফ আবশ্যিক বোঝাতে', 'বাদ পড়া নূনের ক্ষতিপূরণে'],
    correct: 1 },
  { qEn: 'How does hamzat al-qatʿ differ from hamzat al-waṣl?',
    qBn: 'হামযাতুল ক্বাত ও হামযাতুল ওয়াসলের পার্থক্য কী?',
    optsEn: ['Hamzat al-qatʿ is always pronounced — starting or continuing — while hamzat al-waṣl drops in continuation', 'Hamzat al-qatʿ drops when continuing; hamzat al-waṣl is always pronounced', 'Both are always dropped in recitation', 'They are two names for the same hamza'],
    optsBn: ['হামযাতুল ক্বাত সর্বদা উচ্চারিত (শুরুতে বা মাঝে), কিন্তু হামযাতুল ওয়াসল ওয়াসলে বাদ পড়ে', 'হামযাতুল ক্বাত ওয়াসলে বাদ পড়ে; হামযাতুল ওয়াসল সর্বদা উচ্চারিত', 'উভয়ই তিলাওয়াতে সর্বদা বাদ পড়ে', 'দুটি একই হামযার দুই নাম'],
    correct: 0 },
  { qEn: 'According to the rule of Tarqīq al-Lām, which is the ONLY heavy lām in the Quran?',
    qBn: 'তারকিকুল লামের নিয়ম অনুযায়ী কুরআনে একমাত্র ভারী লাম কোনটি?',
    optsEn: ['The lām of the article ال', 'Every lām with sukūn, e.g. قُلْ', 'The lām of the Name اللّٰه after a fatḥah or ḍammah', 'The lām of لَا'],
    optsBn: ['ال-এর লাম', 'প্রতিটি সাকিন লাম, যেমন قُلْ', 'ফাতহা বা দাম্মার পরে اللّٰه শব্দের লাম', 'لَا-এর লাম'],
    correct: 2 },
  { qEn: 'In the levels (marātib) of ghunnah, where is the nasal sound at its STRONGEST?',
    qBn: 'গুন্নাহর স্তরগুলোর (মারাতিব) মধ্যে নাকের আওয়াজ কোথায় সবচেয়ে জোরালো?',
    optsEn: ['On a voweled ن or م', 'On a doubled (mushaddad) نّ or مّ, e.g. إِنَّا', 'In ikhfā', 'In iẓhār of a sākinah'],
    optsBn: ['স্বরযুক্ত ن বা م-এ', 'মুশাদ্দাদ نّ বা مّ-এ, যেমন إِنَّا', 'ইখফায়', 'সাকিনের ইযহারে'],
    correct: 1 },
  { qEn: 'The muʿānaqah tie-marks ( ۛ ) on لَا رَيْبَ ۛ فِيهِ ۛ (2:2) instruct the reciter to:',
    qBn: 'لَا رَيْبَ ۛ فِيهِ ۛ (২:২)-এর মুআনাকা চিহ্ন ( ۛ ) তিলাওয়াতকারীকে কী করতে বলে?',
    optsEn: ['Stop at both marked places', 'Stop at only ONE of the two places, never both', 'Never stop at either place', 'Take a breath at each mark'],
    optsBn: ['উভয় চিহ্নিত স্থানে থামা', 'দুই স্থানের যেকোনো একটিতেই থামা, কখনো দুটিতে নয়', 'কোনো স্থানেই না থামা', 'প্রতিটি চিহ্নে শ্বাস নেওয়া'],
    correct: 1 },
  { qEn: 'The four saktah (silent pause) positions of Ḥafṣ occur in which surahs?',
    qBn: 'হাফসের চারটি সাকতাহ (নীরব বিরতি) স্থান কোন সূরাগুলোতে?',
    optsEn: ['Al-Kahf (18:1–2), Yā-Sīn (36:52), Al-Qiyāmah (75:27) and Al-Muṭaffifīn (83:14)', 'Al-Baqarah, Yā-Sīn, Al-Qiyāmah and Al-Nās', 'Al-Kahf, Al-Raḥmān, Al-Wāqiʿah and Al-Mulk', 'Al-Fātiḥah, Al-Kahf, Yā-Sīn and Al-Ikhlāṣ'],
    optsBn: ['আল-কাহফ (১৮:১–২), ইয়াসীন (৩৬:৫২), আল-কিয়ামাহ (৭৫:২৭) ও আল-মুতাফফিফীন (৮৩:১৪)', 'আল-বাকারা, ইয়াসীন, আল-কিয়ামাহ ও আন-নাস', 'আল-কাহফ, আর-রাহমান, আল-ওয়াকিয়া ও আল-মুলক', 'আল-ফাতিহা, আল-কাহফ, ইয়াসীন ও আল-ইখলাস'],
    correct: 0 },
  { qEn: 'The saktah on مَنْ ۜ رَاقٍ (75:27) serves what purpose?',
    qBn: 'مَنْ ۜ رَاقٍ (৭৫:২৭)-এর সাকতাহর উদ্দেশ্য কী?',
    optsEn: ['It allows the reciter to take a breath', 'It prevents the نْ from merging into the رَ, which would otherwise be idghām', 'It doubles the ghunnah', 'It marks an obligatory full stop'],
    optsBn: ['পাঠককে শ্বাস নেওয়ার সুযোগ দেয়', 'نْ-কে رَ-তে মিশে যাওয়া (ইদগাম) থেকে বাধা দেয়', 'গুন্নাহ দ্বিগুণ করে', 'আবশ্যিক পূর্ণ ওয়াকফ নির্দেশ করে'],
    correct: 1 },
];
