/**
 * Mutashabihat — DATA MODULE
 * Extracted from js/mutashabihat.js.
 * Global: MUTASHABIHAT_GROUPS (curated groups of similar verses).
 * Loaded BEFORE js/mutashabihat.js in index.html.
 */

const MUTASHABIHAT_GROUPS = [
  {
    id: 'musabbihat',
    nameEn: 'Musabbihāt Openings',
    nameBn: 'মুসাব্বিহাত সূরাগুলোর সূচনা',
    nameAr: 'سور المسبّحات',
    descEn: 'Five surahs open with "Sabbaḥa / Yusabbiḥu lillāhi mā fī-s-samāwāti wa-l-arḍ…" (57, 59, 61 in the past tense; 62, 64 in the present), differing in verb form, in whether "mā fī" is repeated before al-arḍ (57:1 alone has just "wa-l-arḍ"), and in the closing attributes. Huffaz frequently confuse which surah uses which form.',
    descBn: 'পাঁচটি সূরা শুরু হয়েছে "সাব্বাহা / ইউসাব্বিহু লিল্লাহি মা ফিস-সামাওয়াতি ওয়াল-আরদ…" দিয়ে (৫৭, ৫৯, ৬১ অতীত কালে; ৬২, ৬৪ বর্তমান কালে)। পার্থক্য তিন জায়গায়: ক্রিয়ার রূপে, আল-আরদের আগে "মা ফী" আবার এসেছে কি না তাতে (কেবল ৫৭:১-এ শুধু "ওয়াল-আরদ"), আর শেষের গুণবাচক নামগুলোতে। কোন সূরায় কোন রূপ, তা হাফেজরা প্রায়ই গুলিয়ে ফেলেন।',
    verses: ['57:1', '59:1', '61:1', '62:1', '64:1']
  },
  {
    id: 'hayy-qayyum',
    nameEn: 'Al-Ḥayy al-Qayyūm — The Ever-Living',
    nameBn: 'আল-হাইয়্যুল-কাইয়ূম — চিরঞ্জীব',
    nameAr: 'الحي القيوم',
    descEn: 'The divine names "al-Ḥayyu l-Qayyūm" appear three times: in Āyat al-Kursī, at the opening of Āl ʿImrān, and in Ṭāhā 20:111. The surrounding context differs significantly, making these three a classic memorisation challenge.',
    descBn: 'আল্লাহর নাম "আল-হাইয়্যুল-কাইয়ূম" এসেছে তিনবার: আয়াতুল-কুরসীতে, সূরা আলে ইমরানের শুরুতে আর ত্বহা ২০:১১১-এ। তিন জায়গায় আশপাশের প্রসঙ্গ একেবারে আলাদা। তাই মুখস্থ করতে গিয়ে এই তিনটি নিয়ে গোলমাল হওয়া খুব পরিচিত সমস্যা।',
    verses: ['2:255', '3:2', '20:111']
  },
  {
    id: 'iblis-sajda',
    nameEn: 'Iblīs Refuses to Bow',
    nameBn: 'ইবলীসের সিজদা প্রত্যাখ্যান',
    nameAr: 'امتناع إبليس عن السجود',
    descEn: 'The command to the angels to prostrate before Adam, and Iblīs\'s refusal, is narrated in seven places. Each retelling adjusts phrasing, emphasis, or Iblīs\'s excuse, making this one of the most-studied groups of narrative mutashabihat.',
    descBn: 'আল্লাহ ফেরেশতাদের আদমকে সিজদা করতে বললেন, ইবলীস অস্বীকার করল। এ ঘটনা কুরআনে সাত জায়গায় এসেছে। প্রতিবার বলার ধরন, জোরের জায়গা বা ইবলীসের অজুহাতে কিছু না কিছু বদল আছে। তাই কাহিনীভিত্তিক মুতাশাবিহাতের মধ্যে এই গুচ্ছটি নিয়েই সবচেয়ে বেশি চর্চা হয়।',
    verses: ['2:34', '7:11', '15:29', '17:61', '18:50', '20:116', '38:72']
  },
  {
    id: 'kullu-nafsin',
    nameEn: 'Every Soul Shall Taste Death',
    nameBn: 'প্রত্যেক প্রাণকে মৃত্যুর স্বাদ নিতে হবে',
    nameAr: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',
    descEn: 'This identical phrase appears in three verses (3:185, 21:35, 29:57), each followed by a different continuation. The surrounding verses differ in focus: recompense, trial, and migration respectively.',
    descBn: 'হুবহু এই বাক্যটি তিনটি আয়াতে এসেছে (৩:১৮৫, ২১:৩৫, ২৯:৫৭), কিন্তু প্রতিটির পরের অংশ আলাদা। আশপাশের আয়াতগুলোর বিষয়ও ভিন্ন: যথাক্রমে প্রতিদান, পরীক্ষা ও হিজরত।',
    verses: ['3:185', '21:35', '29:57']
  },
  {
    id: 'wa-ma-adraka',
    nameEn: '"What Will Make You Know…" (Wa-mā Adrāka Mā)',
    nameBn: '"কিসে তোমাকে জানাবে…" (ওয়া মা আদরাকা মা)',
    nameAr: 'وما أدراك ما',
    descEn: 'This rhetorical formula — "And what will make you perceive what [X] is?" — is used 13 times to heighten the drama of cosmic or eschatological events. Twelve occurrences open with "wa-mā adrāka mā…" and only the subject differs. The single exception is al-Infiṭār 82:18, which repeats 82:17 word for word but opens with "thumma" (then) instead of "wa" — the same subject (yawm al-dīn) restated for emphasis. Memorise the pair 82:17 → 82:18 by that wa/thumma switch.',
    descBn: '"আর কিসে তোমাকে জানাবে [অমুক] কী?" এই অলংকারপূর্ণ প্রশ্নটি কুরআনে ১৩ বার এসেছে। মহাজাগতিক ঘটনা আর আখিরাতের দৃশ্যের ভয়াবহতা মনে গেঁথে দিতেই এর ব্যবহার। বারোটি জায়গায় শুরু "ওয়া মা আদরাকা মা…" দিয়ে, বদলায় শুধু বিষয়টি। একমাত্র ব্যতিক্রম আল-ইনফিতার ৮২:১৮। আয়াতটি ৮২:১৭-এর হুবহু পুনরাবৃত্তি, শুধু "ওয়া"-র জায়গায় শুরু হয়েছে "সুম্মা" (অতঃপর) দিয়ে: একই বিষয় (ইয়াওমুদ দীন) জোর দেওয়ার জন্য আবার বলা। তাই ৮২:১৭ → ৮২:১৮ জোড়াটি মনে রাখুন এই ওয়া/সুম্মা বদল দিয়ে।',
    verses: ['69:3', '74:27', '77:14', '82:17', '82:18', '83:8', '83:19', '86:2', '90:12', '97:2', '101:3', '101:10', '104:5']
  },
  {
    id: 'waylun-yawmaidhin',
    nameEn: '"Woe That Day to the Deniers" — Refrain of al-Mursalāt',
    nameBn: '"সেদিন অস্বীকারকারীদের জন্য দুর্ভোগ" — আল-মুরসালাতের পুনরাবৃত্তি',
    nameAr: 'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ',
    descEn: 'Surat al-Mursalāt (77) repeats this thundering refrain ten times after successive cosmic and eschatological scenes. The phrase is lexically identical in all ten occurrences — a deliberate Quranic refrain (lāzima).',
    descBn: 'সূরা আল-মুরসালাতে (৭৭) একের পর এক মহাজাগতিক ও আখিরাতের দৃশ্যের পর এই গুরুগম্ভীর বাক্যটি দশবার ফিরে এসেছে। দশ জায়গাতেই বাক্যটি শব্দে শব্দে এক। এটি কুরআনের ইচ্ছাকৃত পুনরাবৃত্ত বাক্য (লাযিমা)।',
    verses: ['77:15', '77:19', '77:24', '77:28', '77:34', '77:37', '77:40', '77:45', '77:47', '77:49']
  },
  {
    id: 'fabi-ayyi',
    nameEn: '"Which of Your Lord\'s Favours Will You Deny?" — Refrain of al-Raḥmān',
    nameBn: '"তোমরা তোমাদের রবের কোন অনুগ্রহ অস্বীকার করবে?" — আর-রাহমানের পুনরাবৃত্তি',
    nameAr: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',
    descEn: 'The celebrated refrain of Surat al-Raḥmān, repeated 31 times across the surah — after each mention of creation, the two heavenly gardens, and divine mercy. All 31 occurrences are listed below.',
    descBn: 'সূরা আর-রাহমানের বিখ্যাত বাক্য, যা পুরো সূরায় ৩১ বার ফিরে এসেছে: সৃষ্টির প্রতিটি উল্লেখ, দুই জান্নাতের বর্ণনা আর আল্লাহর রহমতের কথার পর। ৩১টি জায়গাই নিচে দেওয়া হলো।',
    verses: ['55:13', '55:16', '55:18', '55:21', '55:23', '55:25', '55:28', '55:30', '55:32', '55:34', '55:36', '55:38', '55:40', '55:42', '55:45', '55:47', '55:49', '55:51', '55:53', '55:55', '55:57', '55:59', '55:61', '55:63', '55:65', '55:67', '55:69', '55:71', '55:73', '55:75', '55:77']
  },
  {
    id: 'aziz-hakim',
    nameEn: 'Divine Epithets at Verse-End — Al-ʿAzīz al-Ḥakīm / Al-ʿAlīm al-Ḥakīm',
    nameBn: 'আয়াতের শেষে আল্লাহর গুণবাচক নাম — আল-আযীয আল-হাকীম / আল-আলীম আল-হাকীম',
    nameAr: 'العزيز الحكيم / العليم الحكيم',
    descEn: 'Dozens of verses close with divine name pairs ending in "al-Ḥakīm". The pairing varies: "al-ʿAzīzu l-Ḥakīm" vs "al-ʿAlīmu l-Ḥakīm" vs, rarely, other pairs such as "Tawwābun Ḥakīm" (24:10). Confusing which closing belongs where is a classic recitation error.',
    descBn: 'বহু আয়াত শেষ হয় আল্লাহর দুটি নামের জোড়া দিয়ে, যার শেষ নামটি "আল-হাকীম"। জোড়াটি সব জায়গায় এক নয়: কোথাও "আল-আযীযুল-হাকীম", কোথাও "আল-আলীমুল-হাকীম", আবার কদাচিৎ অন্য জোড়াও আছে, যেমন "তাওওয়াবুন হাকীম" (২৪:১০)। কোন আয়াতের শেষে কোন জোড়া, তা গুলিয়ে ফেলা তিলাওয়াতের খুব পরিচিত ভুল।',
    verses: ['2:129', '2:209', '2:220', '2:228', '3:6', '3:18', '4:56', '5:38', '8:49', '8:63', '8:67', '8:71', '9:40', '46:2', '60:5', '66:2']
  },
  {
    id: 'alif-lam-mim',
    nameEn: 'Alif-Lām-Mīm Openings',
    nameBn: 'আলিফ-লাম-মীম সূচনা',
    nameAr: 'سور الم',
    descEn: 'Six surahs open with the identical detached letters "Alif-Lām-Mīm". Within these, 2:1–2 and 31:1–3 share additional phrasing about the Book as guidance, with subtle lexical shifts: "hudan li-l-muttaqīn" (guidance for the God-fearing, 2:2) vs "hudan wa-raḥmatan li-l-muḥsinīn" (guidance and mercy for the doers of good, 31:3).',
    descBn: 'ছয়টি সূরা শুরু হয়েছে একই বিচ্ছিন্ন অক্ষর "আলিফ-লাম-মীম" দিয়ে। এর মধ্যে ২:১–২ ও ৩১:১–৩-এ কিতাবকে হিদায়াত বলার কথাটাও মিলে যায়, তবে শব্দে সূক্ষ্ম বদল আছে: "হুদান লিল-মুত্তাকীন" (মুত্তাকীদের জন্য হিদায়াত, ২:২) বনাম "হুদান ওয়া রাহমাতান লিল-মুহসিনীন" (সৎকর্মশীলদের জন্য হিদায়াত ও রহমত, ৩১:৩)।',
    verses: ['2:1', '3:1', '29:1', '30:1', '31:1', '32:1']
  },
  {
    id: 'musa-firawn',
    nameEn: 'Moses Before Pharaoh — The Exodus Narrative',
    nameBn: 'ফেরাউনের সামনে মূসা — মিসর ত্যাগের কাহিনী',
    nameAr: 'موسى وفرعون',
    descEn: 'The encounter of Moses and Pharaoh is retold in many surahs; seven of them are sampled here. Each account emphasises a different aspect of the story; the "framing" verses of these accounts, above all 7:103 and 10:75, are a classic mutashabihat set.',
    descBn: 'মূসা ও ফেরাউনের মুখোমুখি হওয়ার ঘটনা বহু সূরায় বারবার এসেছে; এখানে তার সাতটি সূরা থেকে নমুনা নেওয়া হয়েছে। প্রতিটি বর্ণনায় কাহিনীর আলাদা একটি দিকে জোর। এসব বর্ণনার "ভূমিকা" আয়াতগুলো, বিশেষ করে ৭:১০৩ ও ১০:৭৫, মুতাশাবিহাতের একটি সুপরিচিত গুচ্ছ।',
    verses: ['7:103', '10:75', '11:96', '17:101', '20:49', '26:10', '28:3']
  },
  {
    id: 'fastaqim',
    nameEn: '"Be Steadfast as You Were Commanded" — Fa-ṣṭaqim Kamā Umirta',
    nameBn: '"তোমাকে যেমন আদেশ করা হয়েছে তেমন অবিচল থাক" — ফাসতাকিম কামা উমিরতা',
    nameAr: 'فَاسْتَقِمْ كَمَا أُمِرْتَ',
    descEn: 'Two verses (11:112 and 42:15) contain almost identical commands to the Prophet to remain steadfast. The first uses plural "wa-man tāba maʿak"; the second addresses him alone — a subtle but meaningful difference.',
    descBn: 'দুটি আয়াতে (১১:১১২ ও ৪২:১৫) আল্লাহ নবীকে অবিচল থাকার প্রায় একই আদেশ দিয়েছেন। প্রথমটিতে বহুবচনে সঙ্গীদেরও যুক্ত করা হয়েছে: "ওয়া মান তাবা মাআক"; দ্বিতীয়টিতে সম্বোধন কেবল তাঁকেই। পার্থক্যটা সূক্ষ্ম, কিন্তু অর্থবহ।',
    verses: ['11:112', '42:15']
  },
  {
    id: 'mithaq-jabal',
    nameEn: 'The Mountain Raised — Covenant with the Israelites',
    nameBn: 'মাথার ওপর তুলে ধরা পাহাড় — বনী ইসরাঈলের অঙ্গীকার',
    nameAr: 'رفع الطور وأخذ الميثاق',
    descEn: 'Three verses here describe God raising the mountain (al-Ṭūr / al-Jabal) over the Israelites when their covenant was taken; an-Nisāʾ 4:154 mentions it briefly as well. The phrasing is nearly identical; the placement and continuation differ.',
    descBn: 'এখানকার তিনটি আয়াতে আছে, বনী ইসরাঈলের কাছ থেকে অঙ্গীকার নেওয়ার সময় আল্লাহ তাদের ওপর পাহাড় (আত-তূর / আল-জাবাল) তুলে ধরেছিলেন; আন-নিসা ৪:১৫৪-ও সংক্ষেপে এর উল্লেখ করে। শব্দ প্রায় হুবহু এক; পার্থক্য কোথায় এসেছে আর পরে কী এসেছে তাতে।',
    verses: ['2:63', '2:93', '7:171']
  },
  {
    id: 'amanu-amilu',
    nameEn: '"Those Who Believe and Do Righteous Deeds"',
    nameBn: '"যারা ঈমান আনে ও সৎকর্ম করে"',
    nameAr: 'الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ',
    descEn: 'This formula for the believers appears in about 50 verses, often followed by a promise of Gardens. The variation lies in what follows: some promise rivers, some mention specific divine attributes, some differ in the garden descriptions. Shown here are 15 representative examples; the wording that follows the formula varies from verse to verse.',
    descBn: 'মুমিনদের পরিচয়ের এই বাক্যটি প্রায় ৫০টি আয়াতে এসেছে, প্রায়ই এর পরে থাকে জান্নাতের প্রতিশ্রুতি। পার্থক্য পরের অংশে: কোথাও নদীর প্রতিশ্রুতি, কোথাও আল্লাহর নির্দিষ্ট গুণের উল্লেখ, কোথাও জান্নাতের বর্ণনায় ভিন্নতা। এখানে বাছাই করা ১৫টি উদাহরণ দেওয়া হলো; বাক্যটির পরের শব্দগুলো আয়াতভেদে বদলে যায়।',
    verses: ['2:82', '2:277', '3:57', '4:57', '4:122', '5:9', '7:42', '10:9', '18:30', '18:107', '29:7', '29:58', '31:8', '47:2', '85:11']
  },
  {
    id: 'noah-ark',
    nameEn: 'Noah\'s Ark — Divine Command to Build',
    nameBn: 'নূহের নৌকা — বানানোর জন্য আল্লাহর আদেশ',
    nameAr: 'أمر نوح ببناء السفينة',
    descEn: 'The divine instruction to Nūḥ to build the ark appears twice, and the two are very close. Both share "iṣnaʿi l-fulka bi-aʿyuninā wa-waḥyinā" and both end with "wa-lā tukhāṭibnī fi lladhīna ẓalamū innahum mughraqūn". Discriminator: Hūd opens with the direct imperative "wa-ṣnaʿi l-fulka" (Allah addresses Nūḥ directly), while al-Muʾminūn opens "fa-awḥaynā ilayhi ani ṣnaʿi l-fulka" (reported speech, "so We revealed to him"). Only 23:27 then adds the tannūr (the oven gushing forth) and the command to load "of every kind, two pairs" with his family — clauses absent in 11:37.',
    descBn: 'নূহকে নৌকা বানানোর আল্লাহর নির্দেশ এসেছে দুইবার, আর দুটি খুবই কাছাকাছি। দুই জায়গাতেই আছে "ইসনা‘ইল ফুলকা বিআ‘ইউনিনা ওয়া ওয়াহয়িনা", আর দুটিই শেষ হয় "ওয়া লা তুখাতিবনী ফিল্লাযীনা যালামূ ইন্নাহুম মুগরাকূন" দিয়ে। চেনার উপায়: সূরা হূদে শুরু সরাসরি আদেশ "ওয়াসনা‘ইল ফুলকা" দিয়ে (আল্লাহ সরাসরি নূহকে বলছেন), আর মু\'মিনূনে শুরু "ফাআওহাইনা ইলাইহি আনিসনা‘ইল ফুলকা" দিয়ে (পরোক্ষ বর্ণনা: "অতঃপর আমি তার কাছে ওহি পাঠালাম")। এরপর কেবল ২৩:২৭-এ যুক্ত হয়েছে তান্নূর (চুলা উথলে ওঠা) আর পরিবারসহ "প্রত্যেক প্রজাতির জোড়া জোড়া" নৌকায় তোলার নির্দেশ; ১১:৩৭-এ এ অংশ নেই।',
    verses: ['11:37', '23:27']
  },
  {
    id: 'quran-3-7-cluster',
    nameEn: 'Quran 3:7 — The Defining Verse on Mutashabihat',
    nameBn: 'কুরআন ৩:৭ — মুতাশাবিহাত নিয়ে মূল আয়াত',
    nameAr: 'آية المتشابهات',
    descEn: 'Surat Āl ʿImrān 3:7 is the Quran\'s own statement distinguishing muḥkamāt from mutashābihāt — there meaning verses whose sense is not plain, not the look-alike wordings of this module. Its echo in 2:269 shares the phrase "wa-mā yadhdhakkaru illā ulu l-albāb". These two represent the "meta-layer" of the phenomenon.',
    descBn: 'সূরা আলে ইমরানের ৩:৭ আয়াতে কুরআন নিজেই মুহকামাত ও মুতাশাবিহাতের পার্থক্য বলে দিয়েছে। সেখানে মুতাশাবিহাত মানে যেসব আয়াতের অর্থ স্পষ্ট নয়; এই অংশের মতো একই রকম শব্দের আয়াত নয়। ২:২৬৯-এ এর প্রতিধ্বনি আছে: দুই আয়াতেই রয়েছে "ওয়া মা ইয়াযযাক্কারু ইল্লা উলুল-আলবাব"। এ দুটি যেন বিষয়টির "ওপরের স্তর": মুতাশাবিহাত নিয়ে কুরআনের নিজের বক্তব্য।',
    verses: ['3:7', '2:269']
  },

  // ── Wave 2 — 17 additional curated groups ────────────────────────────────

  {
    id: 'al-kahf-stories',
    nameEn: 'Al-Kahf — Four Narrative Opening Frames',
    nameBn: 'আল-কাহফ — চার কাহিনীর চার রকম সূচনা',
    nameAr: 'مطالع قصص سورة الكهف الأربع',
    descEn: 'Al-Kahf\'s four famous stories (Cave Youth, Two Garden Owners, Moses & Khiḍr, Dhul-Qarnayn) each open with a distinct rhetorical frame at 18:9, 18:32, 18:60, and 18:83. The four frames share no wording — a question ("am ḥasibta"), a command ("wa-ḍrib lahum"), "wa-idh qāla Mūsā" and "wa-yasʾalūnaka" — so this is a thematic set: the task is to know which frame opens which story.',
    descBn: 'আল-কাহফের চারটি বিখ্যাত কাহিনী (গুহাবাসী যুবকেরা, দুই বাগানের মালিক, মূসা ও খিযির, যুল-কারনাইন) শুরু হয়েছে ১৮:৯, ১৮:৩২, ১৮:৬০ ও ১৮:৮৩-এ, প্রতিটি আলাদা ভঙ্গিতে। চারটি সূচনার শব্দে কোনো মিল নেই: একটি প্রশ্ন ("আম হাসিবতা"), একটি আদেশ ("ওয়াদরিব লাহুম"), "ওয়া ইয কালা মূসা" আর "ওয়া ইয়াসআলূনাকা"। তাই এটি বিষয়ভিত্তিক গুচ্ছ। এখানে কাজ হলো জানা, কোন সূচনা দিয়ে কোন কাহিনী শুরু।',
    verses: ['18:9', '18:32', '18:60', '18:83']
  },
  {
    id: 'hawamim',
    nameEn: 'The Seven Ḥāʾ-Mīm Sūrahs',
    nameBn: 'সাতটি হা-মীম সূরা',
    nameAr: 'الحواميم السبع',
    descEn: 'Sūrahs 40–46 all open with the detached letters "Ḥāʾ Mīm", and four of them (40, 41, 45, 46) immediately follow with "Tanzīl…", while 43 and 44 follow with the oath "wa-l-kitābi l-mubīn" and 42 with "ʿAyn Sīn Qāf". The closing divine-attribute pairs ("al-ʿAzīz al-ʿAlīm", "al-ʿAzīz al-Ḥakīm") rotate across these sūrahs, producing one of the densest clusters of mutashābihāt openings in the Quran.',
    descBn: 'সূরা ৪০–৪৬ সবই শুরু হয়েছে বিচ্ছিন্ন অক্ষর "হা মীম" দিয়ে। এর চারটিতে (৪০, ৪১, ৪৫, ৪৬) ঠিক পরেই আসে "তানযীল…"; ৪৩ ও ৪৪-এ আসে শপথ "ওয়াল-কিতাবিল-মুবীন", আর ৪২-এ "আইন সীন কাফ"। শেষের গুণবাচক নামের জোড়া ("আল-আযীয আল-আলীম", "আল-আযীয আল-হাকীম") এই সূরাগুলোতে ঘুরেফিরে আসে। ফলে কুরআনে সূচনা-আয়াতের মুতাশাবিহাতের সবচেয়ে ঘন গুচ্ছগুলোর একটি এখানেই।',
    verses: ['40:1', '41:1', '42:1', '43:1', '44:1', '45:1', '46:1']
  },
  {
    id: 'kadhālika-naqussu',
    nameEn: '"Thus We Narrate to You" — The Retelling Formula',
    nameBn: '"এভাবে আমি তোমার কাছে বর্ণনা করি" — কাহিনী বলার সূত্র',
    nameAr: 'كَذَٰلِكَ نَقُصُّ عَلَيْكَ',
    descEn: 'Several verses use the formula "naḥnu naquṣṣu ʿalayka / kadhālika naquṣṣu ʿalayk" to frame the retelling of prophetic narratives. Within the pattern, 7:101 and 11:100 are especially close, both referencing "the news of the towns"; 12:3 and 18:13 introduce individual stories; 20:99 closes a long narrative. Distinguishing which frame matches which story is a classic review exercise.',
    descBn: 'নবীদের কাহিনী বলার ভূমিকা হিসেবে কয়েকটি আয়াতে এসেছে "নাহনু নাকুস্সু আলাইকা / কাযালিকা নাকুস্সু আলাইক"। এর মধ্যে ৭:১০১ ও ১১:১০০ বিশেষভাবে কাছাকাছি, দুটিতেই আছে "জনপদগুলোর সংবাদ"; ১২:৩ ও ১৮:১৩ একেকটি কাহিনীর সূচনা করে; আর ২০:৯৯ একটি দীর্ঘ কাহিনীর ইতি টানে। কোন সূচনা-বাক্য কোন কাহিনীর, তা আলাদা করতে পারা মুখস্থ ঝালাইয়ের পরিচিত অনুশীলন।',
    verses: ['7:101', '11:100', '12:3', '18:13', '20:99']
  },
  {
    id: 'opening-oaths',
    nameEn: 'The Short-Sūrah Opening Oath Cluster',
    nameBn: 'ছোট সূরাগুলোর শুরুর শপথ',
    nameAr: 'أقسام أوائل السور القصيرة',
    descEn: 'Five early Makkan sūrahs open with oaths by created things — dawn (89), sun (91), night (92), forenoon (93), fig (95) — each followed by a contrasting or complementary pair. The oaths share identical syntactic structure "wa-X" but differ in subject, making the sequence a memorisation challenge where students confuse which image belongs to which sūrah.',
    descBn: 'প্রথম দিকের পাঁচটি মক্কী সূরা শুরু হয়েছে সৃষ্টির কোনো কিছুর শপথ দিয়ে: ভোর (৮৯), সূর্য (৯১), রাত (৯২), পূর্বাহ্ণ (৯৩), ডুমুর (৯৫)। প্রতিটির পরে আসে বিপরীত বা পরিপূরক আরেকটি জোড়া। শপথগুলোর গঠন হুবহু এক ("ওয়া" দিয়ে শপথ), শুধু বিষয় আলাদা। তাই মুখস্থ করতে গিয়ে ছাত্ররা প্রায়ই গুলিয়ে ফেলে, কোন ছবিটা কোন সূরার।',
    verses: ['89:1', '91:1', '92:1', '93:1', '95:1']
  },
  {
    id: 'yunus-dua',
    nameEn: 'Prophetic Supplications in Sūrat al-Anbiyāʾ',
    nameBn: 'সূরা আল-আম্বিয়ায় নবীদের দোয়া',
    nameAr: 'أدعية الأنبياء في سورة الأنبياء',
    descEn: 'Three prophetic supplications appear close together in al-Anbiyāʾ (21:83–89): Ayyūb\'s cry of distress (21:83), Yūnus\'s tasbīḥ from the whale\'s belly — "lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn" (21:87) — and Zakariyyā\'s whispered plea (21:89). The shared framing "wa-Ayyūba / wa-Zakariyyā idh nādā rabbahū" (with Yūnus’s "fa-nādā fi ẓ-ẓulumāt") makes the trio a famous memorisation cluster; 21:87 also echoes 68:48.',
    descBn: 'আল-আম্বিয়ায় (২১:৮৩–৮৯) কাছাকাছি তিন নবীর তিনটি দোয়া এসেছে: বিপদে আইয়ূবের আর্তনাদ (২১:৮৩); তিমির পেট থেকে ইউনুসের তাসবীহ, "লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নী কুনতু মিনায-যালিমীন" (২১:৮৭); আর যাকারিয়ার নিচু স্বরের মিনতি (২১:৮৯)। তিনটির কাঠামো একই রকম, "ওয়া আইয়ূবা / ওয়া যাকারিয়া ইয নাদা রাব্বাহু" (ইউনুসের বেলায় "ফানাদা ফিয-যুলুমাত")। তাই মুখস্থের ক্ষেত্রে এই তিনটি একটি বিখ্যাত গুচ্ছ। ২১:৮৭ আবার ৬৮:৪৮-এর প্রতিধ্বনিও।',
    verses: ['21:83', '21:87', '21:89', '68:48']
  },
  {
    id: 'wujuhun-yawmaidhin',
    nameEn: 'Hell & Paradise Twin Openings — Sūrahs 56, 78, 88',
    nameBn: 'জাহান্নাম ও জান্নাতের যুগল সূচনা — সূরা ৫৬, ৭৮, ৮৮',
    nameAr: 'ازدواج وصف الجنة والنار في سور الواقعة والنبأ والغاشية',
    descEn: 'Three eschatological sūrahs describe Hell and Paradise in back-to-back passages of mirrored structure. Sūrat al-Wāqiʿa pairs "aṣḥābu l-yamīni" (56:27) with "aṣḥābu sh-shimāli" (56:41); al-Ghāshiya pairs "wujūhun yawma\'idhin khāshiʿa" (88:2) with "wujūhun yawma\'idhin nāʿima" (88:8), differing only in the adjective; an-Nabaʾ contrasts "inna jahannama kānat mirṣādā" (78:21) with "inna li-l-muttaqīna mafāzā" (78:31). Each pair is structurally parallel — a classic tool for teaching the Day of Judgement passages.',
    descBn: 'আখিরাত-বিষয়ক তিনটি সূরায় জাহান্নাম ও জান্নাতের বর্ণনা এসেছে পাশাপাশি, একটি যেন অন্যটির আয়না। সূরা আল-ওয়াকিয়ায় "আসহাবুল-ইয়ামীন" (৫৬:২৭)-এর বিপরীতে "আসহাবুশ-শিমাল" (৫৬:৪১); আল-গাশিয়ায় "উজূহুন ইয়াওমাইযিন খাশিআ" (৮৮:২)-এর বিপরীতে "উজূহুন ইয়াওমাইযিন নাইমা" (৮৮:৮), পার্থক্য শুধু বিশেষণে; আন-নাবায় "ইন্না জাহান্নামা কানাত মিরসাদা" (৭৮:২১)-এর বিপরীতে "ইন্না লিল-মুত্তাকীনা মাফাযা" (৭৮:৩১)। প্রতিটি জোড়ার গঠন সমান্তরাল। কিয়ামতের দিনের আয়াতগুলো শেখানোর এটি একটি পরিচিত উপায়।',
    verses: ['56:27', '56:41', '78:21', '78:31', '88:2', '88:8']
  },
  {
    id: 'wa-ma-tafarraqu',
    nameEn: '"They Did Not Divide Except After Knowledge Came" — Splitting Verses',
    nameBn: '"জ্ঞান আসার পরই তারা বিভক্ত হয়েছে" — দলাদলির আয়াত',
    nameAr: 'وَمَا تَفَرَّقُوا إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ الْعِلْمُ',
    descEn: 'Two verses warn that communities split only after clear proofs or knowledge had reached them: 3:105 ("min baʿdi mā jāʾahumu l-bayyināt") and 42:14 ("min baʿdi mā jāʾahumu l-ʿilm"). 30:32 condemns those who split their religion into sects, and 42:13, just before 42:14, commands "wa-lā tatafarraqū fīh" (do not divide in it) — unity commanded, then violated — a rhetorical pair worth keeping apart.',
    descBn: 'দুটি আয়াত সতর্ক করে: সম্প্রদায়গুলো বিভক্ত হয়েছে সুস্পষ্ট প্রমাণ বা জ্ঞান পৌঁছে যাওয়ার পরেই। আয়াত দুটি হলো ৩:১০৫ ("মিন বা‘দি মা জাআহুমুল-বাইয়্যিনাত") ও ৪২:১৪ ("মিন বা‘দি মা জাআহুমুল-ইলম")। ৩০:৩২ নিন্দা করে তাদের, যারা নিজেদের দ্বীনকে ভাগ করে দলে দলে বিভক্ত হয়েছে। আর ৪২:১৪-এর ঠিক আগে ৪২:১৩-এ আদেশ আছে "ওয়া লা তাতাফাররাকূ ফীহ" (এতে বিভক্ত হয়ো না)। আগে ঐক্যের আদেশ, পরে তা ভঙ্গ: এই জোড়াটি আলাদা করে মনে রাখার মতো।',
    verses: ['3:105', '30:32', '42:13', '42:14']
  },
  {
    id: 'kafa-billahi',
    nameEn: '"Allah Suffices as…" — The Affirmation Closing Formula',
    nameBn: '"আল্লাহই যথেষ্ট…" — আয়াতের শেষে দৃঢ় ঘোষণা',
    nameAr: 'وَكَفَىٰ بِٱللَّهِ',
    descEn: 'The phrase "wa-kafā bi-llāhi X" (Allah suffices as witness / guardian / disposer) closes many verses with slightly different objects: "shahīdā" (witness), "wakīlā" (guardian/disposer), "naṣīrā" (helper), "waliyyā" (protector). Confusing "shahīdā" with "wakīlā" at verse-end is a frequent recitation error. Representative instances span three sūrahs (4, 33, 48) — Quran-wide the formula appears in seven sūrahs.',
    descBn: 'বহু আয়াত শেষ হয় "ওয়া কাফা বিল্লাহি [অমুক]" (সাক্ষী / অভিভাবক / কর্মবিধায়ক হিসেবে আল্লাহই যথেষ্ট) দিয়ে, তবে শেষ শব্দটি একটু বদলায়: "শাহীদা" (সাক্ষী), "ওয়াকীলা" (অভিভাবক/কর্মবিধায়ক), "নাসীরা" (সাহায্যকারী), "ওয়ালিয়্যা" (রক্ষক)। আয়াতের শেষে "শাহীদা" আর "ওয়াকীলা" গুলিয়ে ফেলা তিলাওয়াতের খুব সাধারণ ভুল। এখানে নমুনাগুলো তিনটি সূরা (৪, ৩৩, ৪৮) থেকে নেওয়া; পুরো কুরআনে সূত্রটি আছে সাতটি সূরায়।',
    verses: ['4:45', '4:79', '4:132', '4:166', '33:3', '33:48', '48:28']
  },
  {
    id: 'la-yaghfiru-shirk',
    nameEn: '"Allah Does Not Forgive Shirk" — The Twin Verses of 4:48 & 4:116',
    nameBn: '"আল্লাহ শিরক ক্ষমা করেন না" — ৪:৪৮ ও ৪:১১৬-এর যমজ আয়াত',
    nameAr: 'إِنَّ ٱللَّهَ لَا يَغۡفِرُ أَن يُشۡرَكَ بِهِۦ',
    descEn: 'Verses 4:48 and 4:116 are among the most famous near-repetitions in the Quran: both open word for word "inna llāha lā yaghfiru an yushraka bihi wa-yaghfiru mā dūna dhālika li-man yashāʾ" and differ only in the close — "fa-qadi ftarā ithman ʿaẓīmā" (has fabricated a tremendous sin, 4:48) vs "fa-qad ḍalla ḍalālan baʿīdā" (has gone far astray, 4:116). The contexts match the closes: 4:48 follows an address to the People of the Book (4:47), who fabricated against God, while 4:116 leads into the idolaters who call on others besides Him (4:117), who went astray.',
    descBn: '৪:৪৮ ও ৪:১১৬ কুরআনের সবচেয়ে বিখ্যাত প্রায়-হুবহু আয়াতগুলোর অন্যতম। দুটিরই শুরু শব্দে শব্দে এক: "ইন্নাল্লাহা লা ইয়াগফিরু আন ইউশরাকা বিহি ওয়া ইয়াগফিরু মা দূনা যালিকা লিমান ইয়াশা"। পার্থক্য কেবল শেষে: "ফাকাদিফতারা ইসমান আযীমা" (সে মহাপাপ রচনা করল, ৪:৪৮) বনাম "ফাকাদ দাল্লা দালালান বাঈদা" (সে সুদূর পথভ্রষ্টতায় পতিত হলো, ৪:১১৬)। শেষ অংশ প্রসঙ্গের সঙ্গেই মেলে: ৪:৪৮ এসেছে আহলে কিতাবকে সম্বোধনের (৪:৪৭) পরে, যারা আল্লাহর বিরুদ্ধে মিথ্যা রচনা করেছিল; আর ৪:১১৬-এর পরে আসে মুশরিকদের কথা, যারা তাঁকে ছেড়ে অন্যকে ডাকে (৪:১১৭) এবং পথভ্রষ্ট হয়েছে।',
    verses: ['4:48', '4:116']
  },
  {
    id: 'yasal-unaka',
    nameEn: '"They Ask You About…" — The Rhetorical Question Series',
    nameBn: '"তারা তোমাকে জিজ্ঞাসা করে…" — অলংকারিক প্রশ্ন-ধারা',
    nameAr: 'يَسْأَلُونَكَ عَنِ',
    descEn: 'The formula "yasʾalūnaka (ʿan)…" appears fifteen times, each time introducing a question put to the Prophet and the divine answer. Seven are in al-Baqarah and two in al-Aʿrāf (7:187); single instances appear in al-Māʾidah (5:4), al-Anfāl (8:1), al-Isrāʾ (17:85), al-Kahf (18:83), Ṭāhā (20:105) and al-Nāziʿāt (79:42). The identical opening and varied subjects — new moons, spending, the sacred month, wine, orphans, war spoils, the spirit, the Hour — make this a key series for sequential-memorisation drills.',
    descBn: '"ইয়াসআলূনাকা (আন)…" সূত্রটি পনেরোবার এসেছে। প্রতিবার এর পরে থাকে নবীকে করা একটি প্রশ্ন আর আল্লাহর দেওয়া উত্তর। সাতটি আল-বাকারায়, দুটি আল-আরাফে (৭:১৮৭); একবার করে এসেছে আল-মায়িদা (৫:৪), আল-আনফাল (৮:১), আল-ইসরা (১৭:৮৫), আল-কাহফ (১৮:৮৩), ত্বহা (২০:১০৫) ও আন-নাযিআতে (৭৯:৪২)। শুরু হুবহু এক, কিন্তু বিষয় ভিন্ন: নতুন চাঁদ, ব্যয়, সম্মানিত মাস, মদ, এতিম, গনিমতের মাল, রূহ, কিয়ামত। তাই ক্রম ধরে মুখস্থ ঝালাই করার জন্য এটি একটি গুরুত্বপূর্ণ ধারা।',
    verses: ['2:189', '2:215', '2:217', '2:219', '2:222', '8:1', '17:85', '79:42']
  },
  {
    id: 'sab-a-samawat',
    nameEn: 'The Seven Heavens — Numeric Parallelism',
    nameBn: 'সাত আসমান — সংখ্যার মিল',
    nameAr: 'السماوات السبع',
    descEn: 'The seven heavens are named in seven verses: "sabʿa samāwāt" five times (2:29, 41:12, 65:12, 67:3, 71:15) and "as-samāwātu s-sabʿ" twice (17:44, 23:86); this group shows 23:17 ("sabʿa ṭarāʾiq", seven layers) in place of 23:86. Each occurrence has a slightly different syntactic environment — some add "ṭibāqā" (layered), some follow creation of the earth, some precede glorification — making the set a textbook example of numeric parallelism. Students memorising each surah\'s cosmological passage often import the wording from another occurrence.',
    descBn: 'সাত আসমানের উল্লেখ আছে সাতটি আয়াতে: "সাবআ সামাওয়াত" পাঁচবার (২:২৯, ৪১:১২, ৬৫:১২, ৬৭:৩, ৭১:১৫) আর "আস-সামাওয়াতুস-সাব‘" দুবার (১৭:৪৪, ২৩:৮৬); এই গুচ্ছে ২৩:৮৬-এর জায়গায় দেখানো হয়েছে ২৩:১৭ ("সাবআ তারাইক", সাত স্তর)। প্রতিটি জায়গায় বাক্যের আশপাশ একটু আলাদা: কোথাও যোগ হয়েছে "তিবাকা" (স্তরে স্তরে), কোথাও উল্লেখটি এসেছে জমিন সৃষ্টির পরে, কোথাও তাসবীহের আগে। তাই একই সংখ্যার পুনরাবৃত্তির এটি একেবারে আদর্শ উদাহরণ। প্রতিটি সূরার সৃষ্টিজগৎ-বিষয়ক অংশ মুখস্থ করতে গিয়ে ছাত্ররা প্রায়ই অন্য জায়গার শব্দ এখানে ঢুকিয়ে ফেলে।',
    verses: ['2:29', '17:44', '23:17', '41:12', '65:12', '67:3', '71:15']
  },
  {
    id: 'iblis-vow',
    nameEn: 'Iblīs\'s Sworn Vows to Mislead Humanity',
    nameBn: 'মানুষকে পথভ্রষ্ট করতে ইবলীসের কসম',
    nameAr: 'أقسام إبليس على الإغواء',
    descEn: 'Satan’s vow to mislead humanity is recorded in several sūrahs; the three here each use a first-person oath with a different opening formula: "fa-bi-mā aghwaytanī la-aqʿudanna lahum" (7:16), "rabbi bi-mā aghwaytanī la-uzayyinanna lahum fī l-arḍi" (15:39), and "fa-bi-ʿizzatika la-ughwiyannahum ajmaʿīn" (38:82). The vows escalate in scope — ambush on the path, beautification of the earth, total seduction — and students reciting the Iblīs narrative across these three sūrahs routinely conflate the wording.',
    descBn: 'মানুষকে পথভ্রষ্ট করার শয়তানের কসম কয়েকটি সূরায় এসেছে। এখানকার তিনটিতেই সে নিজের মুখে কসম খায়, তবে প্রতিটির শুরুর শব্দ আলাদা: "ফাবিমা আগওয়াইতানী লাআকউদান্না লাহুম" (৭:১৬), "রাব্বি বিমা আগওয়াইতানী লাউযাইয়িনান্না লাহুম ফিল-আরদি" (১৫:৩৯), আর "ফাবিইযযাতিকা লাউগউইয়ান্নাহুম আজমাঈন" (৩৮:৮২)। কসমগুলো ধাপে ধাপে বড় হয়: পথে ওঁৎ পেতে বসা, জমিনে তাদের চোখে সবকিছু চাকচিক্যময় করে তোলা, তারপর সবাইকে বিপথে নেওয়া। এই তিন সূরায় ইবলীসের কাহিনী তিলাওয়াত করতে গিয়ে ছাত্ররা প্রায়ই শব্দগুলো গুলিয়ে ফেলে।',
    verses: ['7:16', '15:39', '38:82']
  },
  {
    id: 'nur-istidhna',
    nameEn: 'Permission-Seeking Verses — Al-Nūr\'s Repeated Protocol',
    nameBn: 'অনুমতি চাওয়ার আয়াত — আন-নূরে দুবার আসা বিধান',
    nameAr: 'آيات الاستئذان في سورة النور',
    descEn: 'Sūrat al-Nūr legislates the protocol for entering homes in two near-parallel pairs: 24:27–28 addresses seeking permission before entering others\' homes; 24:58–59 addresses the permission required of children/servants at three specific times. The two pairs share their subject and a few phrases (the "yā ayyuhā lladhīna āmanū" address, the "ʿalīm" closings), creating a legislative parallelism.',
    descBn: 'সূরা আন-নূর ঘরে প্রবেশের বিধান দিয়েছে প্রায় সমান্তরাল দুই জোড়া আয়াতে: ২৪:২৭–২৮-এ অন্যের ঘরে ঢোকার আগে অনুমতি চাওয়ার কথা; ২৪:৫৮–৫৯-এ তিনটি নির্দিষ্ট সময়ে শিশু ও খাদেমদের অনুমতি নেওয়ার কথা। দুই জোড়ার বিষয় এক, কিছু বাক্যাংশও মিলে যায় ("ইয়া আইয়ুহাল্লাযীনা আমানূ" সম্বোধন, শেষে "আলীম")। এভাবে দুটি বিধানের মধ্যে একটা সমান্তরাল মিল তৈরি হয়েছে।',
    verses: ['24:27', '24:28', '24:58', '24:59']
  },
  {
    id: 'mu-minun-maarij',
    nameEn: 'Believers\' Traits — Al-Muʾminūn & Al-Maʿārij Parallels',
    nameBn: 'মুমিনদের গুণ — আল-মুমিনূন ও আল-মাআরিজের মিল',
    nameAr: 'صفات المؤمنين بين المؤمنون والمعارج',
    descEn: 'The opening of al-Muʾminūn (23:1–9) and a central passage of al-Maʿārij (70:22–35) enumerate almost the same list of believers\' characteristics — humility in prayer, giving zakāh, guarding chastity, keeping covenants — in nearly identical phrasing. The verse pairs 23:5/70:29 and 23:8/70:32 are identical, and 23:2/70:23 differ in two words — a staple of advanced ḥifẓ review.',
    descBn: 'আল-মুমিনূনের শুরু (২৩:১–৯) আর আল-মাআরিজের মাঝের একটি অংশ (৭০:২২–৩৫) মুমিনদের প্রায় একই গুণের তালিকা দেয়, শব্দও প্রায় এক: নামাজে বিনয়, যাকাত দেওয়া, লজ্জাস্থানের হেফাজত, অঙ্গীকার রক্ষা। ২৩:৫/৭০:২৯ এবং ২৩:৮/৭০:৩২ আয়াত-জোড়া হুবহু এক, আর ২৩:২/৭০:২৩-এ পার্থক্য মাত্র দুটি শব্দে। হিফজের উচ্চতর পর্যায়ে ঝালাই করার সময় এগুলো নিয়মিত আসে।',
    verses: ['23:2', '23:5', '23:8', '70:23', '70:29', '70:32']
  },
  {
    id: 'rasul-ila-kull-umma',
    nameEn: '"To Every Nation a Messenger" — Universal Prophethood Variants',
    nameBn: '"প্রত্যেক জাতির জন্য একজন রাসূল" — একই কথার নানা রূপ',
    nameAr: 'لكل أمة رسول',
    descEn: 'Four verses state the principle of universal divine guidance with slightly different wording: "wa-likulli ummatin rasūl" (10:47), "wa-likulli qawmin hād" (13:7), "wa-laqad baʿathnā fī kulli ummatin rasūlan" (16:36), and "wa-in min ummatin illā khalā fīhā nadhīr" (35:24). They are near-synonymous restatements whose subtle lexical differences (rasūl / hād / nadhīr; umma / qawm) make them a target for substitution errors.',
    descBn: 'আল্লাহ প্রত্যেক জাতির কাছেই পথপ্রদর্শক পাঠিয়েছেন: এই নীতি চারটি আয়াতে সামান্য ভিন্ন শব্দে এসেছে। "ওয়া লিকুল্লি উম্মাতিন রাসূল" (১০:৪৭), "ওয়া লিকুল্লি কাওমিন হাদ" (১৩:৭), "ওয়া লাকাদ বাআসনা ফী কুল্লি উম্মাতিন রাসূলা" (১৬:৩৬), আর "ওয়া ইন মিন উম্মাতিন ইল্লা খালা ফীহা নাযীর" (৩৫:২৪)। কথাগুলো প্রায় সমার্থক, কিন্তু শব্দের সূক্ষ্ম পার্থক্য (রাসূল / হাদ / নাযীর; উম্মা / কাওম) থাকায় একটির জায়গায় আরেকটি বসিয়ে ফেলার ভুল খুব হয়।',
    verses: ['10:47', '13:7', '16:36', '35:24']
  },
  {
    id: 'wa-ittaqu-yawman',
    nameEn: '"Fear a Day When No Soul Can Avail Another" — Identical Warning Verses',
    nameBn: '"এমন দিনকে ভয় কর যেদিন কেউ কারো কাজে আসবে না" — একই সতর্কবাণীর আয়াত',
    nameAr: 'وَٱتَّقُواْ يَوۡمًا لَّا تَجۡزِي نَفۡسٌ عَن نَّفۡسٍ شَيۡـًٔا',
    descEn: 'Verses 2:48 and 2:123 are near-identical twins within the same sūrah, both warning: "wa-ttaqū yawman lā tajzī nafsun ʿan nafsin shay\'an wa-lā yuqbalu minhā shafāʿatun…" — but 2:48 continues "wa-lā yuqbalu minhā shafāʿatun wa-lā yuʾkhadhu minhā ʿadl", while 2:123 reverses the order: "wa-lā yuqbalu minhā ʿadlun wa-lā tanfaʿuhā shafāʿa" — one of the Quran’s clearest deliberate repetitions with variation. A third closely related verse (2:281) uses "wa-ttaqū yawman turjaʿūna fīhi ilā llāh", completing the triad of Day-of-Judgement warnings in al-Baqarah.',
    descBn: '২:৪৮ ও ২:১২৩ একই সূরার প্রায় হুবহু যমজ আয়াত। দুটিই সতর্ক করে: "ওয়াত্তাকূ ইয়াওমান লা তাজযী নাফসুন আন নাফসিন শাইআন ওয়া লা ইউকবালু মিনহা শাফাআতুন…"। তবে ২:৪৮-এ এর পরে আসে "ওয়া লা ইউকবালু মিনহা শাফাআতুন ওয়া লা ইউ’খাযু মিনহা আদল", আর ২:১২৩-এ ক্রম উল্টো: "ওয়া লা ইউকবালু মিনহা আদলুন ওয়া লা তানফাউহা শাফাআ"। সামান্য বদলসহ ইচ্ছাকৃত পুনরাবৃত্তির এটি কুরআনের সবচেয়ে স্পষ্ট উদাহরণগুলোর একটি। ঘনিষ্ঠ তৃতীয় আয়াতটি (২:২৮১) শুরু হয় "ওয়াত্তাকূ ইয়াওমান তুরজাঊনা ফীহি ইলাল্লাহ" দিয়ে; এভাবে আল-বাকারায় কিয়ামতের দিনের তিনটি সতর্কবাণী পূর্ণ হয়।',
    verses: ['2:48', '2:123', '2:281']
  },
  {
    id: 'ibrahim-mecca-dua',
    nameEn: 'Ibrāhīm\'s Supplication for Mecca — The Subtle Twin',
    nameBn: 'মক্কার জন্য ইবরাহীমের দোয়া — সূক্ষ্ম পার্থক্যের যমজ',
    nameAr: 'دعاء إبراهيم لمكة بين البقرة وإبراهيم',
    descEn: 'Two verses record Ibrāhīm\'s prayer for Mecca in almost identical wording: 2:126 reads "rabbi-jʿal hādhā baladan āminā" (indefinite — "make this a safe land") while 14:35 reads "rabbi-jʿal hādhā l-balada āminā" (definite — "make this, the land, safe"). Commentators link the tanwīn/definite-article distinction to two different moments in Ibrāhīm’s life: before Mecca was a town (2:126) and after (14:35). Students at every level routinely substitute one for the other.',
    descBn: 'দুটি আয়াতে মক্কার জন্য ইবরাহীমের দোয়া এসেছে প্রায় একই শব্দে। ২:১২৬-এ আছে "রাব্বিজআল হাযা বালাদান আমিনা" (অনির্দিষ্ট: "একে নিরাপদ শহর বানাও"), আর ১৪:৩৫-এ "রাব্বিজআল হাযাল-বালাদা আমিনা" (নির্দিষ্ট: "এই শহরকে নিরাপদ করো")। মুফাসসিরগণ তানভীন আর নির্দিষ্টবাচক "আল"-এর এই পার্থক্যকে ইবরাহীমের জীবনের দুটি ভিন্ন সময়ের সঙ্গে মেলান: মক্কা জনপদ হওয়ার আগে (২:১২৬) ও পরে (১৪:৩৫)। সব স্তরের ছাত্ররাই প্রায়ই একটির জায়গায় অন্যটি পড়ে ফেলে।',
    verses: ['2:126', '2:127', '14:35', '14:37']
  },

  // ── Wave 3 — 22 additional curated groups ────────────────────────────────

  {
    id: 'baqarah-cow-story',
    nameEn: 'Al-Baqarah — The Cow Command Sequence',
    nameBn: 'আল-বাকারা — গাভী জবাইয়ের আদেশ ও প্রশ্নের ধারা',
    nameAr: 'قصة البقرة في سورة البقرة',
    descEn: 'The divine command to slaughter a cow (2:67–71) unfolds as a command followed by three questions — "udʿu lanā rabbaka yubayyin lanā mā hiya" (2:68), "…mā lawnuhā" (2:69) and "…mā hiya" again (2:70) — each answered with the near-identical frame "qāla innahū yaqūlu innahā baqaratun…" (2:68, 2:69, 2:71). This internal repetition — identical framing, escalating specificity — is a form of intra-sūrah mutashābihāt that students memorising al-Baqarah easily scramble, since the three "which cow?" exchanges look so alike.',
    descBn: 'গাভী জবাইয়ের আদেশ (২:৬৭–৭১) এগিয়েছে এভাবে: প্রথমে আদেশ, তারপর তিনটি প্রশ্ন। "উদউ লানা রাব্বাকা ইউবাইয়িন লানা মা হিয়া" (২:৬৮), "…মা লাওনুহা" (২:৬৯) আর আবার "…মা হিয়া" (২:৭০)। প্রতিটির জবাব প্রায় একই কাঠামোয়: "কালা ইন্নাহু ইয়াকূলু ইন্নাহা বাকারাতুন…" (২:৬৮, ২:৬৯, ২:৭১)। কাঠামো এক, কিন্তু প্রতিবার বিবরণ আরও নির্দিষ্ট হয়। একই সূরার ভেতরের এই মুতাশাবিহাত আল-বাকারা মুখস্থ করতে গিয়ে সহজেই এলোমেলো হয়ে যায়, কারণ "কোন গাভী?" নিয়ে তিনটি কথোপকথন দেখতে প্রায় এক।',
    verses: ['2:67', '2:68', '2:69', '2:70', '2:71']
  },
  {
    id: 'calf-worship',
    nameEn: 'The Golden Calf — Three Sūrah Accounts',
    nameBn: 'সোনার বাছুর — তিন সূরার বিবরণ',
    nameAr: 'عبادة العجل في ثلاثة مواضع',
    descEn: 'The Israelites\' worship of the golden calf is narrated in three sūrahs: 2:51 (brief), 7:148–150 (extended, with the people\'s grief), and 20:85–97 (dialogue with Mūsā and al-Sāmirī). The key phrase "ʿijlan jasadan" echoes between 7:148 and 20:88. Each account foregrounds a different dimension — the sin (al-Baqarah), the people’s regret (al-Aʿrāf), and the instigator al-Sāmirī (Ṭāhā) — while sharing enough phrasing that cross-sūrah substitution is common.',
    descBn: 'বনী ইসরাঈলের সোনার বাছুর পূজার ঘটনা তিনটি সূরায় এসেছে: ২:৫১ (সংক্ষেপে), ৭:১৪৮–১৫০ (বিস্তারিত, লোকদের অনুতাপসহ), আর ২০:৮৫–৯৭ (মূসা ও আস-সামিরীর সঙ্গে কথোপকথন)। মূল বাক্যাংশ "ইজলান জাসাদান" ৭:১৪৮ ও ২০:৮৮ দুই জায়গাতেই আছে। প্রতিটি বর্ণনায় ভিন্ন দিক সামনে আসে: গুনাহটি (আল-বাকারা), লোকদের অনুতাপ (আল-আরাফ), আর প্ররোচনাদাতা আস-সামিরী (ত্বহা)। তবু শব্দের মিল এতটা যে এক সূরার শব্দ অন্য সূরায় বসিয়ে ফেলা খুব সাধারণ ভুল।',
    verses: ['2:51', '7:148', '7:150', '20:85', '20:88', '20:97']
  },
  {
    id: 'twelve-springs',
    nameEn: 'Twelve Springs from the Rock',
    nameBn: 'পাথর থেকে বারোটি ঝর্ণা',
    nameAr: 'انبجاس الاثنتي عشرة عيناً من الحجر',
    descEn: 'Two verses record the miracle of water gushing from the struck rock for the twelve tribes: 2:60 ("fa-nfajarat minhu thnātā ʿashrata ʿaynan") and 7:160 ("wa-qaṭṭaʿnāhumu thnatay ʿashrata asbāṭan… an-iḍrib bi-ʿaṣāka l-ḥajar"). The lexical shift between "infajarat" (burst forth, 2:60) and "inbajasat" (welled up, 7:160) is a one-word difference that students routinely transpose, since both verses describe the same event and share the same numeric "twelve".',
    descBn: 'দুটি আয়াতে বারো গোত্রের জন্য পাথরে আঘাতের পর পানি বেরিয়ে আসার মুজিযা এসেছে: ২:৬০ ("ফানফাজারাত মিনহু ইসনাতা আশরাতা আইনান") ও ৭:১৬০ ("ওয়া কাত্তাআনাহুমুস্নাতাই আশরাতা আসবাতান… আনিদরিব বিআসাকাল-হাজার")। "ইনফাজারাত" (ফেটে বেরোল, ২:৬০) আর "ইনবাজাসাত" (উথলে উঠল, ৭:১৬০): মাত্র এক শব্দের পার্থক্য। ছাত্ররা প্রায়ই এ দুটি অদলবদল করে ফেলে, কারণ দুই আয়াতে ঘটনা একই, সংখ্যাও একই: "বারো"।',
    verses: ['2:60', '7:160']
  },
  {
    id: 'zakariyya-dua',
    nameEn: 'Zakariyyā\'s Prayer for a Son — Āl ʿImrān & Maryam',
    nameBn: 'পুত্রের জন্য যাকারিয়ার দোয়া — আলে ইমরান ও মারইয়াম',
    nameAr: 'دعاء زكريا بين آل عمران ومريم',
    descEn: 'Zakariyyā\'s prayer for a righteous heir is recounted in 3:38–41 and 19:2–11. In Āl ʿImrān the prayer follows his witnessing of Maryam\'s miraculous provision; in Maryam it is introduced as a "dhikru raḥmati rabbika" and elaborated with Zakariyyā\'s own fears about succession (19:5). The three-day sign of silence appears in both sūrahs — 3:41 and 19:10 — in near-identical wording, making it one of the most tested cross-sūrah verse pairs in advanced ḥifẓ review.',
    descBn: 'নেক উত্তরাধিকারীর জন্য যাকারিয়ার দোয়া এসেছে ৩:৩৮–৪১ ও ১৯:২–১১-এ। আলে ইমরানে দোয়াটি আসে মারইয়ামের কাছে অলৌকিক রিযিক দেখার পর। সূরা মারইয়ামে এর শুরু "যিকরু রাহমাতি রাব্বিকা" দিয়ে, আর সেখানে উত্তরাধিকার নিয়ে যাকারিয়ার নিজের দুশ্চিন্তার কথাও বিস্তারিত এসেছে (১৯:৫)। তিন দিন কথা বলতে না পারার নিদর্শন দুই সূরাতেই আছে (৩:৪১ ও ১৯:১০), প্রায় একই শব্দে। তাই উচ্চতর হিফজ-ঝালাইয়ে দুই সূরার মধ্যে এটি সবচেয়ে বেশি যাচাই করা আয়াত-জোড়াগুলোর একটি।',
    verses: ['3:38', '3:41', '19:3', '19:7', '19:10']
  },
  {
    id: 'maryam-provision',
    nameEn: 'Maryam\'s Miraculous Provision — Two Scenes',
    nameBn: 'মারইয়ামের অলৌকিক রিযিক — দুই দৃশ্য',
    nameAr: 'رزق مريم في آل عمران ومريم',
    descEn: 'Maryam receives divine provision in two distinct scenes: 3:37 describes food found by Zakariyyā in her prayer niche ("wajada ʿindahā rizqan"), while 19:25–26 records the call to her at the palm tree — from Jibrīl or from the newborn ʿĪsā, in different readings of 19:24 — to eat fresh dates and drink from a stream. They form a thematic pair — two divine provisions at different moments of her life — linked by miraculous food rather than by shared wording.',
    descBn: 'মারইয়াম দুটি আলাদা দৃশ্যে আল্লাহর দেওয়া রিযিক পান। ৩:৩৭-এ যাকারিয়া তাঁর ইবাদতের কক্ষে খাবার পান ("ওয়াজাদা ইনদাহা রিযকান")। আর ১৯:২৫–২৬-এ খেজুর গাছের কাছে তাঁকে ডেকে তাজা খেজুর খেতে ও ঝর্ণার পানি পান করতে বলা হয়; ১৯:২৪-এর ভিন্ন কিরাআত অনুযায়ী ডাকটি জিবরীলের, অথবা নবজাতক ঈসার। এ দুটি বিষয়ভিত্তিক জোড়া: জীবনের দুই ভিন্ন সময়ে আল্লাহর দেওয়া দুটি রিযিক। এদের যোগসূত্র শব্দের মিল নয়, অলৌকিক খাবার।',
    verses: ['3:37', '19:25', '19:26']
  },
  {
    id: 'isa-miracles',
    nameEn: 'ʿĪsā\'s Miracles — Two Canonical Listings',
    nameBn: 'ঈসার মুজিযা — দুটি প্রামাণিক তালিকা',
    nameAr: 'معجزات عيسى في آل عمران والمائدة',
    descEn: 'The miracles of ʿĪsā are listed twice: 3:49 (in ʿĪsā\'s own speech — predictive: "I create… I heal… I raise the dead") and 5:110 (divine address on Judgement Day — "when I taught you…"). Both enumerate the clay bird, healing the blind and the leper, and raising the dead in the same order; 5:110 has "bi-idhnī" (by My leave) four times — twice for the clay bird, then for the healing and the raising of the dead — where 3:49 has "bi-idhni llāh" only twice. This idhn distinction is a classic test in advanced ḥifẓ revision.',
    descBn: 'ঈসার মুজিযার তালিকা এসেছে দুবার। ৩:৪৯-এ ঈসা নিজেই বলছেন, সামনে কী করবেন: "আমি সৃষ্টি করি… সুস্থ করি… মৃতকে জীবিত করি"। ৫:১১০-এ কিয়ামতের দিন আল্লাহ তাঁকে সম্বোধন করছেন: "যখন আমি তোমাকে শেখালাম…"। দুই জায়গাতেই একই ক্রমে আছে মাটির পাখি, অন্ধ ও কুষ্ঠরোগীকে সুস্থ করা, আর মৃতকে জীবিত করা। তবে ৫:১১০-এ "বিইযনী" (আমার অনুমতিক্রমে) এসেছে চারবার: মাটির পাখির বেলায় দুবার, তারপর সুস্থ করা ও মৃতকে জীবিত করার বেলায়। আর ৩:৪৯-এ "বিইযনিল্লাহ" আছে মাত্র দুবার। অনুমতির এই পার্থক্য উচ্চতর হিফজ-ঝালাইয়ের একটি পরিচিত পরীক্ষা।',
    verses: ['3:49', '5:110']
  },
  {
    id: 'ibrahim-stars-moon',
    nameEn: 'Ibrāhīm\'s Contemplation of Stars, Moon and Sun',
    nameBn: 'তারা, চাঁদ ও সূর্য দেখে ইবরাহীমের চিন্তা',
    nameAr: 'مشهد إبراهيم والنجم والقمر والشمس في الأنعام',
    descEn: 'Sūrat al-Anʿām 6:74–83 presents a sequential monotheism argument found only here: Ibrāhīm observes a star, then the moon, then the sun — each time declaring "hādhā rabbī", and when it sets drawing a different conclusion ("lā uḥibbu l-āfilīn" after the star). His other debates with his people (21:57–67, 37:88–98) take a different form. The internal repetition of the "hādhā rabbī" pattern within al-Anʿām is itself the key memorisation challenge, as students compress or expand the three stages into each other.',
    descBn: 'সূরা আল-আনআমের ৬:৭৪–৮৩-এ তাওহীদের পক্ষে ধাপে ধাপে একটি যুক্তি আছে, যা কুরআনে আর কোথাও নেই। ইবরাহীম প্রথমে একটি তারা দেখেন, তারপর চাঁদ, তারপর সূর্য। প্রতিবার বলেন "হাযা রাব্বী", আর সেটি ডুবে গেলে প্রতিবার ভিন্ন সিদ্ধান্তে পৌঁছান (তারার পরে "লা উহিব্বুল-আফিলীন")। নিজ সম্প্রদায়ের সঙ্গে তাঁর অন্য বিতর্কগুলো (২১:৫৭–৬৭, ৩৭:৮৮–৯৮) ভিন্ন ধাঁচের। আল-আনআমের ভেতরেই "হাযা রাব্বী"-র এই পুনরাবৃত্তি মুখস্থের আসল কঠিন জায়গা: ছাত্ররা তিন ধাপকে একটির সঙ্গে আরেকটি মিশিয়ে ছোট বা বড় করে ফেলে।',
    verses: ['6:74', '6:76', '6:77', '6:78', '6:79', '6:83']
  },
  {
    id: 'araf-prophet-cycle',
    nameEn: 'Al-Aʿrāf\'s Serial Prophet Cycle — Parallel Opening Frames',
    nameBn: 'আল-আরাফে নবীদের ধারাবাহিক কাহিনী — একই ধাঁচের সূচনা',
    nameAr: 'فاتحة قصص الأنبياء في الأعراف',
    descEn: 'Al-Aʿrāf presents six consecutive prophet stories (Nūḥ, Hūd, Ṣāliḥ, Lūṭ, Shuʿayb, Mūsā); four are introduced by a near-identical formula: "laqad arsalnā Nūḥan" (7:59), "wa-ilā ʿĀdin akhāhum Hūdan" (7:65), "wa-ilā Thamūda akhāhum Ṣāliḥan" (7:73), "wa-ilā Madyana akhāhum Shuʿayban" (7:85), while Lūṭ (7:80) and Mūsā (7:103) are introduced differently. Each story follows the same arc: prophet calls "yā qawmi", people refuse, punishment descends. The chain is directly paralleled by Sūrat Hūd.',
    descBn: 'আল-আরাফে পরপর ছয় নবীর কাহিনী এসেছে (নূহ, হূদ, সালিহ, লূত, শুআইব, মূসা)। এর চারটির শুরু প্রায় একই বাক্যে: "লাকাদ আরসালনা নূহান" (৭:৫৯), "ওয়া ইলা আদিন আখাহুম হূদান" (৭:৬৫), "ওয়া ইলা সামূদা আখাহুম সালিহান" (৭:৭৩), "ওয়া ইলা মাদইয়ানা আখাহুম শুআইবান" (৭:৮৫); লূত (৭:৮০) ও মূসার (৭:১০৩) কাহিনী শুরু হয় অন্যভাবে। প্রতিটি কাহিনী একই পথে এগোয়: নবী ডাকেন "ইয়া কাওমি", লোকেরা অস্বীকার করে, তারপর আজাব নেমে আসে। সূরা হূদে ঠিক এর সমান্তরাল একটি ধারা আছে।',
    verses: ['7:59', '7:65', '7:73', '7:85', '7:103']
  },
  {
    id: 'hud-prophet-cycle',
    nameEn: 'Sūrat Hūd\'s Prophet Cycle — Twin of Al-Aʿrāf',
    nameBn: 'সূরা হূদে নবীদের কাহিনী — আল-আরাফের যমজ',
    nameAr: 'قصص الأنبياء في سورة هود وتوازيها مع الأعراف',
    descEn: 'Sūrat Hūd retells five of the same prophet stories as al-Aʿrāf (Nūḥ: 11:25, Hūd: 11:50, Ṣāliḥ: 11:61, Lūṭ: 11:77, Shuʿayb: 11:84); the Hūd, Ṣāliḥ and Shuʿayb accounts open with the same frame as in al-Aʿrāf ("qāla yā qawmi ʿbudū llāha mā lakum min ilāhin ghayruh"). Each Hūd account nearly mirrors its al-Aʿrāf counterpart yet adds distinctive dialogue absent in al-Aʿrāf, so cross-sūrah substitution between the two cycles is a common advanced ḥifẓ error.',
    descBn: 'আল-আরাফের পাঁচটি নবীর কাহিনী সূরা হূদে আবার এসেছে (নূহ: ১১:২৫, হূদ: ১১:৫০, সালিহ: ১১:৬১, লূত: ১১:৭৭, শুআইব: ১১:৮৪)। হূদ, সালিহ ও শুআইবের কাহিনী শুরু হয়েছে আল-আরাফের মতো একই বাক্যে ("কালা ইয়া কাওমি‘বুদুল্লাহা মা লাকুম মিন ইলাহিন গাইরুহ")। সূরা হূদের প্রতিটি বর্ণনা আল-আরাফের বর্ণনার প্রায় প্রতিচ্ছবি, তবু তাতে এমন কিছু কথোপকথন যোগ হয়েছে যা আল-আরাফে নেই। তাই দুই সূরার কাহিনীর মধ্যে শব্দ অদলবদল করে ফেলা উচ্চতর হিফজে একটি সাধারণ ভুল।',
    verses: ['11:25', '11:50', '11:61', '11:77', '11:84']
  },
  {
    id: 'shuara-kadhdhaba',
    nameEn: 'Ash-Shuʿarāʾ — "They Denied the Messengers" Refrain',
    nameBn: 'আশ-শুআরা — "তারা রাসূলদের অস্বীকার করল" বাক্যের পুনরাবৃত্তি',
    nameAr: 'لازمة كَذَّبَتْ في سورة الشعراء',
    descEn: 'Sūrat ash-Shuʿarāʾ (26) opens five consecutive prophet narratives with the formula "kadhdhabat qawmu Nūḥin l-mursalīn… kadhdhabat ʿĀdun l-mursalīn… kadhdhabat Thamūdu l-mursalīn…" (26:105, 26:123, 26:141, 26:160, 26:176); 26:189 ("fa-kadhdhabūhu…") comes near the end of the last of them. After each narrative, two identical lines close it as a refrain: "inna fī dhālika la-āyatan…" and "wa-inna rabbaka la-huwa l-ʿAzīzu r-Raḥīm". The five openings are interchangeable except for the name of the people (and the masculine "kadhdhaba" before aṣḥābu l-ayka in 26:176), making them a sequential-memorisation test.',
    descBn: 'সূরা আশ-শুআরা (২৬) পরপর পাঁচটি নবীর কাহিনী শুরু করেছে একই সূত্রে: "কাযযাবাত কাওমু নূহিনিল-মুরসালীন… কাযযাবাত আদুনিল-মুরসালীন… কাযযাবাত সামূদুল-মুরসালীন…" (২৬:১০৫, ২৬:১২৩, ২৬:১৪১, ২৬:১৬০, ২৬:১৭৬); ২৬:১৮৯ ("ফাকাযযাবূহু…") আসে শেষ কাহিনীর শেষ দিকে। প্রতিটি কাহিনীর শেষে একই দুটি আয়াত ফিরে ফিরে আসে: "ইন্না ফী যালিকা লাআয়াতান…" ও "ওয়া ইন্না রাব্বাকা লাহুওয়াল-আযীযুর-রাহীম"। পাঁচটি সূচনায় জাতির নাম ছাড়া আর কোনো পার্থক্য নেই (শুধু ২৬:১৭৬-এ আসহাবুল-আইকার আগে পুংলিঙ্গ "কাযযাবা")। তাই ক্রম ধরে মুখস্থ রাখাই এখানে আসল পরীক্ষা।',
    verses: ['26:105', '26:123', '26:141', '26:160', '26:176', '26:189']
  },
  {
    id: 'qamar-yassarna',
    nameEn: 'Al-Qamar — "We Have Made the Quran Easy" Fourfold Refrain',
    nameBn: 'আল-কামার — "আমি কুরআনকে সহজ করেছি" চারবার',
    nameAr: 'لازمة وَلَقَدۡ يَسَّرۡنَا ٱلۡقُرۡءَانَ لِلذِّكۡرِ في القمر',
    descEn: '"Wa-laqad yassarnā l-Qurʾāna li-dh-dhikri fa-hal min muddakir?" is repeated verbatim four times in Sūrat al-Qamar: 54:17, 54:22, 54:32, and 54:40, each following a narrative of a destroyed people (Nūḥ, ʿĀd, Thamūd, Lūṭ). Like ar-Raḥmān\'s refrain, the verse itself never changes — the challenge is recalling which destroyed nation precedes which repetition, since the four instances differ only in their surrounding context. This makes it a classic sequential-order drill for ḥifẓ review.',
    descBn: '"ওয়া লাকাদ ইয়াসসারনাল-কুরআনা লিয-যিকরি ফাহাল মিন মুদ্দাকির?" সূরা আল-কামারে হুবহু চারবার এসেছে: ৫৪:১৭, ৫৪:২২, ৫৪:৩২ ও ৫৪:৪০। প্রতিবার আগে আছে কোনো ধ্বংসপ্রাপ্ত জাতির কাহিনী (নূহ, আদ, সামূদ, লূত)। আর-রাহমানের বাক্যটির মতো এই আয়াতও কখনো বদলায় না। কঠিন কাজ হলো মনে রাখা, কোন বারের আগে কোন জাতির কাহিনী, কারণ চার জায়গার পার্থক্য কেবল আশপাশের প্রসঙ্গে। তাই হিফজ-ঝালাইয়ে ক্রম ঠিক রাখার এটি একটি পরিচিত অনুশীলন।',
    verses: ['54:17', '54:22', '54:32', '54:40']
  },
  {
    id: 'hijr-destroyed-towns',
    nameEn: 'Al-Ḥijr — "Companions of the Towns" Destruction Pattern',
    nameBn: 'আল-হিজর — "জনপদের অধিবাসী" ধ্বংস-রীতি',
    nameAr: 'أصحاب الأيكة وأصحاب الحجر في الحجر والشعراء وغيرهما',
    descEn: '"Aṣḥābu l-Ayka" (companions of the thicket = people of Shuʿayb) appears in 15:78, 26:176, 38:13 and 50:14 — written al-Ayka in 15:78 and 50:14 but Layka in 26:176 and 38:13. "Aṣḥābu l-ḥijr" (stone-dwellers = Thamūd) appears only in 15:80. The near-identical construct "aṣḥābu l-…" creates a memorisation trap: students conflate which designation refers to which people, and which sūrah provides what detail about their fate.',
    descBn: '"আসহাবুল-আইকা" (ঝোপঝাড়ের অধিবাসী, অর্থাৎ শুআইবের সম্প্রদায়) এসেছে ১৫:৭৮, ২৬:১৭৬, ৩৮:১৩ ও ৫০:১৪-এ। ১৫:৭৮ ও ৫০:১৪-এ লেখা "আল-আইকা", কিন্তু ২৬:১৭৬ ও ৩৮:১৩-এ "লাইকা"। "আসহাবুল-হিজর" (পাথরের ঘরের বাসিন্দা, অর্থাৎ সামূদ) এসেছে কেবল ১৫:৮০-এ। "আসহাবুল-…" গঠন প্রায় এক হওয়ায় মুখস্থে এটা একটা ফাঁদ: কোন নাম কোন জাতির, আর কোন সূরা তাদের পরিণতির কোন বিবরণ দেয়, ছাত্ররা তা গুলিয়ে ফেলে।',
    verses: ['15:78', '15:80', '26:176', '38:13', '50:14']
  },
  {
    id: 'isra-commandments',
    nameEn: 'Al-Isrāʾ — The Ethical Code Sequence (17:22–39)',
    nameBn: 'আল-ইসরা — নৈতিক বিধান-ধারা (17:22–39)',
    nameAr: 'وصايا سورة الإسراء الأخلاقية',
    descEn: 'Verses 17:22–39 form one of the Quran’s most structured ethical sequences: thirteen prohibitions and commands covering monotheism, parents, relatives, the poor, wastefulness, infanticide, adultery, unjust killing, orphan wealth, weights and measures, knowledge, and arrogance. Many commands employ a parallel "wa-lā taqtulū / wa-lā taqrabū / wa-lā taqfu" frame. The sequence is internally consistent in syntax, making the correct ordering of the thirteen commands a classic memorisation drill.',
    descBn: '১৭:২২–৩৯ আয়াতগুলো কুরআনের সবচেয়ে সুবিন্যস্ত নৈতিক বিধানমালার একটি। এতে তেরোটি নিষেধ ও আদেশ আছে: তাওহীদ, বাবা-মা, আত্মীয়স্বজন, গরিব, অপচয়, সন্তান হত্যা, ব্যভিচার, অন্যায় হত্যা, এতিমের সম্পদ, ওজন ও মাপ, জ্ঞান, আর অহংকার নিয়ে। অনেক আদেশের কাঠামো একই রকম: "ওয়া লা তাকতুলূ / ওয়া লা তাকরাবূ / ওয়া লা তাকফু"। পুরো অংশের বাক্যগঠন এতটাই মিলে যায় যে তেরোটি আদেশ ঠিক ক্রমে মনে রাখা মুখস্থের একটি পরিচিত অনুশীলন।',
    verses: ['17:22', '17:23', '17:31', '17:32', '17:33', '17:36', '17:37']
  },
  {
    id: 'inna-anzalna',
    nameEn: '"Indeed We Sent It Down" — The Revelation Descent Cluster',
    nameBn: '"নিশ্চয় আমি তা নাজিল করেছি" — ওহি নাজিলের আয়াতগুচ্ছ',
    nameAr: 'إِنَّآ أَنزَلۡنَٰهُ — مواضع نزول القرآن',
    descEn: '"Innā anzalnāhu" and its near variants introduce divine revelation in a cluster of verses. Sūrat al-Qadr (97:1) reads "innā anzalnāhu fī laylati l-qadr"; its parallel 44:3 reads "innā anzalnāhu fī laylatin mubārakah" — two verses that most commentators take to describe the same night, in almost identical openings. Further parallels include 4:105 ("innā anzalnā ilayka l-kitāba bi-l-ḥaqq") and 2:4 (what was sent down to you and before you). The 97:1/44:3 pair is a well-known source of confusion between "laylatu l-qadr" and "laylatun mubārakah".',
    descBn: '"ইন্না আনযালনাহু" ও এর কাছাকাছি রূপ দিয়ে একগুচ্ছ আয়াতে ওহি নাজিলের কথা এসেছে। সূরা আল-কাদরে (৯৭:১) আছে "ইন্না আনযালনাহু ফী লাইলাতিল-কাদর"; এর সমান্তরাল ৪৪:৩-এ "ইন্না আনযালনাহু ফী লাইলাতিন মুবারাকাহ"। অধিকাংশ মুফাসসিরের মতে দুটি আয়াত একই রাতের কথা বলছে, আর শুরুও প্রায় এক। আরও মিল আছে ৪:১০৫-এ ("ইন্না আনযালনা ইলাইকাল-কিতাবা বিল-হাক্ক") ও ২:৪-এ (তোমার প্রতি ও তোমার আগে যা নাজিল হয়েছে)। ৯৭:১/৪৪:৩ জোড়ায় "লাইলাতুল-কাদর" আর "লাইলাতুন মুবারাকাহ" গুলিয়ে ফেলা খুব পরিচিত ভুল।',
    verses: ['2:4', '4:105', '44:3', '97:1']
  },
  {
    id: 'wamma-jaa-musa',
    nameEn: '"And When He Came" — The Arrival Formula in Moses Narratives',
    nameBn: '"আর যখন সে এল" — মূসার কাহিনীতে আগমনের সূত্র',
    nameAr: 'وَلَمَّا جَآءَ في قصص موسى',
    descEn: 'The arrival formula "wa-lammā jāʾa Mūsā" opens 7:143 (Mūsā arrives at the appointed time and asks to see God); the other verses here mark further turning points of the Mosaic narrative in different wording: 20:83 (God asks why Mūsā came ahead of his people), 28:29 ("fa-lammā qaḍā Mūsā l-ajal" — he completes his term and sees the fire), and 28:44 (narrator note on the western side). Students must pair each moment with its correct context.',
    descBn: 'আগমনের সূত্র "ওয়া লাম্মা জাআ মূসা" দিয়ে শুরু হয়েছে ৭:১৪৩ (মূসা নির্ধারিত সময়ে এসে আল্লাহকে দেখতে চান)। এখানকার অন্য আয়াতগুলো ভিন্ন শব্দে মূসার কাহিনীর আরও কয়েকটি মোড় চিহ্নিত করে: ২০:৮৩ (আল্লাহ জিজ্ঞেস করেন, মূসা কেন তাঁর সম্প্রদায়ের আগে চলে এলেন), ২৮:২৯ ("ফালাম্মা কাদা মূসাল-আজাল": মেয়াদ পূর্ণ করে তিনি আগুন দেখেন), আর ২৮:৪৪ (পশ্চিম প্রান্ত নিয়ে কাহিনীর ফাঁকে একটি মন্তব্য)। ছাত্রদের প্রতিটি মুহূর্তকে তার ঠিক প্রসঙ্গের সঙ্গে মেলাতে হয়।',
    verses: ['7:143', '20:83', '28:29', '28:44']
  },
  {
    id: 'yawma-yaqumu',
    nameEn: '"The Day People Stand" — Resurrection Standing Formulas',
    nameBn: '"যেদিন মানুষ দাঁড়াবে" — কিয়ামতে দাঁড়ানোর বর্ণনা',
    nameAr: 'يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ',
    descEn: '"Yawma yaqūmu n-nāsu li-rabbi l-ʿālamīn" (83:6) is the starkest Resurrection-standing formula. Parallel expressions include "wa-yawma taqūmu s-sāʿatu yublisu l-mujrimūna" (30:12), "yawma hum bārizūna lā yakhfā ʿalā llāhi minhum shayʾun" (40:16), and "wa-andhirhum yawma l-āzifati idhi l-qulūbu laday l-ḥanājiri" (40:18). All four describe the same Day yet vary in emphasising the crowd, the criminals, divine omniscience, or human terror — and compositing resurrection passages from multiple sūrahs is a common advanced memorisation error.',
    descBn: '"ইয়াওমা ইয়াকূমুন-নাসু লিরাব্বিল-আলামীন" (৮৩:৬) কিয়ামতের দিন দাঁড়ানোর সবচেয়ে কঠোর বর্ণনা। এর সমান্তরাল প্রকাশ: "ওয়া ইয়াওমা তাকূমুস-সাআতু ইউবলিসুল-মুজরিমূন" (৩০:১২), "ইয়াওমা হুম বারিযূনা লা ইয়াখফা আলাল্লাহি মিনহুম শাইউন" (৪০:১৬), আর "ওয়া আনযিরহুম ইয়াওমাল-আযিফাতি ইযিল-কুলূবু লাদাল-হানাজির" (৪০:১৮)। চারটিই একই দিনের কথা, তবে জোর আলাদা জায়গায়: কোথাও মানুষের সমাবেশ, কোথাও অপরাধীরা, কোথাও আল্লাহর সর্বজ্ঞতা, কোথাও মানুষের আতঙ্ক। বিভিন্ন সূরার কিয়ামতের অংশ জোড়াতালি দিয়ে এক করে ফেলা উচ্চতর মুখস্থে একটি সাধারণ ভুল।',
    verses: ['30:12', '40:16', '40:18', '83:6']
  },
  {
    id: 'fa-amma-man-conditional',
    nameEn: '"As for the One Who…" — The Mirror Conditional Pair in al-Nāziʿāt',
    nameBn: '"আর যে…" — আন-নাযিআতে মুখোমুখি দুই শর্ত',
    nameAr: 'فَأَمَّا مَن طَغَىٰ / وَأَمَّا مَنۡ خَافَ في النازعات',
    descEn: 'Sūrat an-Nāziʿāt (79) presents one of the sharpest "fa-ammā / wa-ammā" conditional pairs in the Quran: "fa-ammā man ṭaghā wa-āthara l-ḥayāta d-dunyā fa-inna l-jaḥīma hiya l-maʾwā" (79:37–39) versus "wa-ammā man khāfa maqāma rabbihi wa-nahan-nafsa ʿani l-hawā fa-inna l-jannata hiya l-maʾwā" (79:40–41). Both halves close with the same frame "fa-inna l-[abode] hiya l-maʾwā". It is a pair of inverted look-alikes: identical syntactic frame, antithetical content.',
    descBn: 'সূরা আন-নাযিআতে (৭৯) কুরআনের সবচেয়ে ধারালো "ফাআম্মা / ওয়াআম্মা" শর্ত-জোড়াগুলোর একটি আছে: "ফাআম্মা মান তাগা ওয়া আসারাল-হায়াতাদ-দুনইয়া ফাইন্নাল-জাহীমা হিয়াল-মাওয়া" (৭৯:৩৭–৩৯) বনাম "ওয়াআম্মা মান খাফা মাকামা রাব্বিহি ওয়া নাহান-নাফসা আনিল-হাওয়া ফাইন্নাল-জান্নাতা হিয়াল-মাওয়া" (৭৯:৪০–৪১)। দুটি অংশই শেষ হয় একই কাঠামোয়: "ফাইন্নাল-[আবাস] হিয়াল-মাওয়া"। এটি উল্টো ধরনের সদৃশ জোড়া: বাক্যের কাঠামো হুবহু এক, বিষয় একেবারে বিপরীত।',
    verses: ['79:37', '79:38', '79:39', '79:40', '79:41']
  },
  {
    id: 'ala-hudan',
    nameEn: '"Those Are on Guidance from Their Lord" — The Sealant Formula',
    nameBn: '"তারাই তাদের রবের পক্ষ থেকে হিদায়াতের ওপর আছে" — সমাপনী সূত্র',
    nameAr: 'أُوْلَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمۡ وَأُوْلَٰٓئِكَ هُمُ الۡمُفۡلِحُونَ',
    descEn: '"Ūlāʾika ʿalā hudan min rabbihim wa-ūlāʾika humu l-mufliḥūn" closes the description of the God-fearing in 2:5, then reappears word-for-word in 31:5 to close an almost identical portrait of the Muhsinīn. The formula also echoes partially in 6:82 ("ūlāʾika lahumu l-amnu wa-hum muhtadūn"). The 2:5/31:5 pair is a clear instance of a closing formula repeated from one sūrah to another in identical form.',
    descBn: '"উলাইকা আলা হুদান মিন রাব্বিহিম ওয়া উলাইকা হুমুল-মুফলিহূন" দিয়ে আল-বাকারা ২:৫-এ মুত্তাকীদের বর্ণনা শেষ হয়েছে। তারপর ৩১:৫-এ শব্দে শব্দে একই বাক্য এসেছে মুহসিনীনদের প্রায় একই বর্ণনার শেষে। ৬:৮২-এও এর আংশিক প্রতিধ্বনি আছে ("উলাইকা লাহুমুল-আমনু ওয়া হুম মুহতাদূন")। ২:৫/৩১:৫ জোড়াটি এক সূরার সমাপনী বাক্য হুবহু অন্য সূরায় ফিরে আসার স্পষ্ট উদাহরণ।',
    verses: ['2:5', '6:82', '31:5']
  },
  {
    id: 'in-tutiu-obedience',
    nameEn: '"Obey Allah and the Messenger" — The Repeated Obedience Command',
    nameBn: '"আল্লাহ ও রাসূলের আনুগত্য কর" — বারবার আসা আদেশ',
    nameAr: 'أَطِيعُواْ ٱللَّهَ وَأَطِيعُواْ ٱلرَّسُولَ',
    descEn: 'The imperative "aṭīʿū llāha wa-aṭīʿū r-rasūla" appears in 4:59, 5:92, 24:54, 47:33 and 64:12 with near-identical wording (8:20 has the variant "aṭīʿū llāha wa-rasūlahū"). Each occurrence is followed or preceded by a different condition — consequences of disobedience, the call to unity in struggle, or a warning about pure conveyance — while the core command remains constant. The varying follow-up clause is the hallmark challenge: students must associate the correct consequence with the correct sūrah (5:92 and 64:12 are the closest pair).',
    descBn: '"আতীঊল্লাহা ওয়া আতীঊর-রাসূলা" আদেশটি প্রায় একই শব্দে এসেছে ৪:৫৯, ৫:৯২, ২৪:৫৪, ৪৭:৩৩ ও ৬৪:১২-এ (৮:২০-এ একটু ভিন্ন রূপ: "আতীঊল্লাহা ওয়া রাসূলাহু")। প্রতিবার আগে বা পরে থাকে ভিন্ন কথা: অবাধ্যতার পরিণতি, সংগ্রামে ঐক্যের ডাক, কিংবা রাসূলের দায়িত্ব শুধু পৌঁছে দেওয়া, এই সতর্কবাণী। মূল আদেশ কিন্তু বদলায় না। আসল কঠিন কাজ পরের অংশটি মনে রাখা: কোন সূরায় কোন পরিণতি, তা ঠিকঠাক মেলাতে হয় (৫:৯২ ও ৬৪:১২ সবচেয়ে কাছাকাছি জোড়া)।',
    verses: ['4:59', '5:92', '8:20', '24:54', '47:33', '64:12']
  },
  {
    id: 'maidah-halal-haram',
    nameEn: 'The Forbidden Foods List — Four Near-Identical Occurrences',
    nameBn: 'নিষিদ্ধ খাবারের তালিকা — প্রায় একই রকম চার জায়গায়',
    nameAr: 'قائمة المحرمات الغذائية في البقرة والمائدة والأنعام والنحل',
    descEn: 'The same forbidden-food list (carrion, blood, pork, and what is dedicated to other than God) appears at 2:173, 5:3, 6:145, and 16:115. The core four items appear in all four, but 6:145 words them differently: "daman masfūḥan" (blood poured forth), "fa-innahū rijsun" (it is impure) and "aw fisqan uhilla li-ghayri llāhi bih"; 5:3 extends the list with animals killed by strangling or goring. The quartet is a clear example of legislative repetition with expansion; 2:173 and 16:115 are nearly word-for-word and a standard ḥifẓ examination topic.',
    descBn: 'একই নিষিদ্ধ খাবারের তালিকা (মৃত প্রাণী, রক্ত, শূকরের গোশত, আর আল্লাহ ছাড়া অন্যের নামে উৎসর্গ করা পশু) এসেছে ২:১৭৩, ৫:৩, ৬:১৪৫ ও ১৬:১১৫-এ। মূল চারটি জিনিস চার জায়গাতেই আছে, তবে ৬:১৪৫-এ শব্দ ভিন্ন: "দামান মাসফূহান" (প্রবাহিত রক্ত), "ফাইন্নাহু রিজসুন" (তা অপবিত্র) আর "আও ফিসকান উহিল্লা লিগাইরিল্লাহি বিহ"। ৫:৩-এ তালিকা আরও বড়: শ্বাসরোধে বা শিংয়ের আঘাতে মারা যাওয়া পশুও যোগ হয়েছে। এই চারটি আয়াত পুনরাবৃত্তির সঙ্গে বিধান বাড়ানোর স্পষ্ট উদাহরণ। ২:১৭৩ ও ১৬:১১৫ প্রায় শব্দে শব্দে এক, আর হিফজের পরীক্ষায় এটি নিয়মিত বিষয়।',
    verses: ['2:173', '5:3', '6:145', '16:115']
  },
  {
    id: 'nisa-inheritance',
    nameEn: 'Al-Nisāʾ — Inheritance Legislation and Its Closing Epithets',
    nameBn: 'আন-নিসা — উত্তরাধিকারের বিধান ও শেষের গুণবাচক নাম',
    nameAr: 'آيات المواريث في النساء',
    descEn: 'The inheritance legislation spans three passages: 4:11 (children\'s shares, closing "ʿalīman ḥakīman"), 4:12 (spouses\' and siblings\' shares, closing "ʿalīmun ḥalīm" — Forbearing, not Wise), and 4:176 (the kalāla clause, closing "ʿalīmun bi-kulli shayʾin"). 4:11 and 4:12 share an arithmetic structure — shares, then conditions, then "min baʿdi waṣiyyatin … aw dayn" — and 4:12’s "ḥalīm" where "ḥakīm" is expected is itself a classic slip. Students regularly import fractions or conditions from one verse into the other, making this trio a staple of advanced fiqh-and-ḥifẓ review.',
    descBn: 'উত্তরাধিকারের বিধান এসেছে তিনটি অংশে: ৪:১১ (সন্তানদের অংশ, শেষে "আলীমান হাকীমা"), ৪:১২ (স্বামী-স্ত্রী ও ভাইবোনের অংশ, শেষে "আলীমুন হালীম"; এখানে হাকীম নয়, হালীম অর্থাৎ সহনশীল), আর ৪:১৭৬ (কালালার বিধান, শেষে "আলীমুন বিকুল্লি শাইইন")। ৪:১১ ও ৪:১২-এর হিসাবের কাঠামো একই: প্রথমে অংশ, তারপর শর্ত, তারপর "মিন বা‘দি ওয়াসিয়্যাতিন … আও দাইন"। আর ৪:১২-এ যেখানে "হাকীম" আশা করা হয়, সেখানে "হালীম" থাকাটাই একটি পরিচিত ভুলের জায়গা। ছাত্ররা প্রায়ই এক আয়াতের ভগ্নাংশ বা শর্ত অন্য আয়াতে ঢুকিয়ে ফেলে। তাই উচ্চতর ফিকহ ও হিফজ-ঝালাইয়ে এই তিনটি আয়াত নিয়মিত আসে।',
    verses: ['4:11', '4:12', '4:176']
  },
  {
    id: 'fa-man-athlam',
    nameEn: '"Who Is More Unjust Than One Who…" — The Rhetorical Indictment Formula',
    nameBn: '"তার চেয়ে বড় জালিম কে, যে…" — অভিযোগের অলংকারপূর্ণ সূত্র',
    nameAr: 'فَمَنۡ أَظۡلَمُ مِمَّنۡ — التقريع البلاغي',
    descEn: 'The rhetorical formula "fa-man aẓlamu mim-man…" (who is more unjust than one who…) appears fifteen times across ten sūrahs Quran-wide; the nine instances here span eight sūrahs, each introducing a specific category of supreme transgression: fabricating lies against God (6:21, 6:93, 7:37, 10:17, 11:18, 29:68, 39:32, 61:7) or concealing divine testimony (2:140). The question is always rhetorical — no one is more unjust — yet the offence named varies each time, and students memorising these sūrahs routinely transpose the specific crime from one occurrence to another.',
    descBn: 'অলংকারপূর্ণ প্রশ্ন "ফামান আযলামু মিম্মান…" (তার চেয়ে বড় জালিম কে, যে…) পুরো কুরআনে দশটি সূরায় পনেরোবার এসেছে। এখানকার নয়টি উদাহরণ আটটি সূরা থেকে নেওয়া। প্রতিবার এটি একটি নির্দিষ্ট ধরনের চরম সীমালঙ্ঘনের কথা বলে: আল্লাহর নামে মিথ্যা বানানো (৬:২১, ৬:৯৩, ৭:৩৭, ১০:১৭, ১১:১৮, ২৯:৬৮, ৩৯:৩২, ৬১:৭) অথবা আল্লাহর দেওয়া সাক্ষ্য গোপন করা (২:১৪০)। প্রশ্নটির উত্তর সবসময় একই: এর চেয়ে বড় জালিম কেউ নেই। কিন্তু অপরাধটি প্রতিবার আলাদা। তাই এই সূরাগুলো মুখস্থ করতে গিয়ে ছাত্ররা প্রায়ই এক জায়গার অপরাধ অন্য জায়গায় বসিয়ে ফেলে।',
    verses: ['2:140', '6:21', '6:93', '7:37', '10:17', '11:18', '29:68', '39:32', '61:7']
  },

  // ── Wave 4 — 8 additional curated groups ─────────────────────────────────

  {
    id: 'ghafil-amma-tamalun',
    nameEn: '"Allah Is Not Unaware of What You Do" — taʿmalūn vs yaʿmalūn',
    nameBn: '"আল্লাহ তোমাদের কর্ম সম্পর্কে গাফিল নন" — তা‘মালূন বনাম ইয়া‘মালূন',
    nameAr: 'وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا تَعْمَلُونَ / يَعْمَلُونَ',
    descEn: 'The verse-closing warning "wa-mā llāhu bi-ghāfilin ʿammā taʿmalūn" (…of what YOU do) recurs identically at 2:74, 2:85, 2:140, 2:149 and 3:99. But at 2:144 the pronoun shifts to third person — "…ʿammā yaʿmalūn" (of what THEY do) — and at 27:93 the subject changes to "wa-mā rabbuka" (your Lord) instead of "wa-mā llāhu". The taʿmalūn/yaʿmalūn switch is a much-substituted single-letter distinction in ḥifẓ, since its al-Baqarah neighbours (2:74, 2:85, 2:140, 2:149) all use "taʿmalūn" and 2:144 alone there breaks the pattern.',
    descBn: 'আয়াতের শেষের সতর্কবাণী "ওয়া মা-ল্লাহু বিগাফিলিন আম্মা তা\'মালূন" (তোমরা যা কর, সে সম্পর্কে আল্লাহ গাফিল নন) হুবহু একই রূপে এসেছে ২:৭৪, ২:৮৫, ২:১৪০, ২:১৪৯ ও ৩:৯৯-এ। কিন্তু ২:১৪৪-এ "তোমরা"-র জায়গায় "তারা": "আম্মা ইয়া\'মালূন" (তারা যা করে)। আর ২৭:৯৩-এ "ওয়া মা-ল্লাহু"-র বদলে এসেছে "ওয়া মা রাব্বুকা" (তোমার রব)। তা\'মালূন/ইয়া\'মালূন, মাত্র এক অক্ষরের এই পার্থক্য হিফজে খুব বেশি গুলিয়ে যায়। কারণ আল-বাকারায় আশপাশের আয়াতগুলো (২:৭৪, ২:৮৫, ২:১৪০, ২:১৪৯) সবই "তা\'মালূন", সেখানে কেবল ২:১৪৪ নিয়ম ভাঙে।',
    verses: ['2:74', '2:85', '2:140', '2:144', '2:149', '3:99', '27:93']
  },
  {
    id: 'sami-alim-endings',
    nameEn: 'As-Samīʿ al-ʿAlīm — The "Hearing, Knowing" Verse-Endings',
    nameBn: 'আস-সামী‘ আল-আলীম — "সর্বশ্রোতা, সর্বজ্ঞ" দিয়ে আয়াতের শেষ',
    nameAr: 'ٱلسَّمِيعُ ٱلْعَلِيمُ — خواتيم الآيات',
    descEn: 'Dozens of verses close with the divine-name pair "as-Samīʿ al-ʿAlīm" (the All-Hearing, All-Knowing), but the lead-in phrase rotates: "wa-huwa s-Samīʿu l-ʿAlīm" (2:137), "inna llāha samīʿun ʿalīm" (2:181), and "innahu huwa s-Samīʿu l-ʿAlīm" (8:61, 26:220, 41:36, 44:6). The same closing pair with three different introductory formulas — plus the risk of substituting it for "al-ʿAzīz al-Ḥakīm" or "al-ʿAlīm al-Ḥakīm" — makes this one of the densest colophon-confusion sets in the Quran.',
    descBn: 'বহু আয়াত শেষ হয় "আস-সামী\' আল-আলীম" (সর্বশ্রোতা, সর্বজ্ঞ) নাম-জোড়া দিয়ে, তবে তার আগের অংশটি বদলায়: "ওয়া হুওয়াস-সামী\'উল-আলীম" (২:১৩৭), "ইন্নাল্লাহা সামী\'উন আলীম" (২:১৮১), আর "ইন্নাহু হুওয়াস-সামী\'উল-আলীম" (৮:৬১, ২৬:২২০, ৪১:৩৬, ৪৪:৬)। একই জোড়ার আগে তিন রকম সূচনা, তার ওপর একে "আল-আযীয আল-হাকীম" বা "আল-আলীম আল-হাকীম"-এর সঙ্গে গুলিয়ে ফেলার ঝুঁকি। তাই আয়াতের সমাপ্তি নিয়ে বিভ্রান্তির এটি কুরআনের সবচেয়ে ঘন গুচ্ছগুলোর একটি।',
    verses: ['2:137', '2:181', '8:61', '26:220', '41:36', '44:6']
  },
  {
    id: 'tughni-nudhur',
    nameEn: '"Warnings Avail Nothing" — Fa-mā Tughni n-Nudhur',
    nameBn: '"সতর্কবাণী কোনো কাজে আসে না" — ফামা তুগনিন-নুযুর',
    nameAr: 'فَمَا تُغْنِ ٱلنُّذُرُ / وَمَا تُغْنِى ٱلْـَٔايَٰتُ وَٱلنُّذُرُ',
    descEn: 'Two verses hinge on the root gh-n-y (to avail) with "an-nudhur" (the warnings/warners). Sūrat al-Qamar 54:5 reads tersely "ḥikmatun bālighatun fa-mā tughni n-nudhur" (…so what use are the warners?), while Yūnus 10:101 expands it: "wa-mā tughnī l-āyātu wa-n-nudhuru ʿan qawmin lā yuʾminūn" (neither signs nor warners avail a people who will not believe). The near-identical "tughni…an-nudhur" core with one adding "al-āyāt" and a full clause is a classic close-pair that reciters conflate.',
    descBn: 'দুটি আয়াতের কেন্দ্রে আছে গ-ন-ইয়া (উপকারে আসা) মূল ধাতু আর "আন-নুযুর" (সতর্কবাণী/সতর্ককারী)। সূরা আল-কামারের ৫৪:৫ সংক্ষেপে বলে "হিকমাতুন বালিগাতুন ফামা তুগনিন-নুযুর" (…তবে সতর্ককারীরা কী কাজে আসে?), আর ইউনুসের ১০:১০১ কথাটা বিস্তারিত বলে: "ওয়ামা তুগনিল-আয়াতু ওয়ান-নুযুরু আন কাওমিন লা ইউ\'মিনূন" (যারা ঈমান আনবে না, তাদের জন্য নিদর্শন ও সতর্ককারী কোনো কাজে আসে না)। মূল অংশ "তুগনি…আন-নুযুর" প্রায় এক, শুধু একটিতে "আল-আয়াত" আর পুরো একটি বাক্যাংশ বেশি। তাই এই ঘনিষ্ঠ জোড়াটি তিলাওয়াতকারীরা প্রায়ই গুলিয়ে ফেলেন।',
    verses: ['10:101', '54:5']
  },
  {
    id: 'bani-israil-baqarah',
    nameEn: 'The Banū Isrāʾīl Reminders in al-Baqarah',
    nameBn: 'আল-বাকারায় বনী ইসরাঈলকে স্মরণ করিয়ে দেওয়া',
    nameAr: 'نداءات بني إسرائيل في سورة البقرة',
    descEn: 'Three verses open the Israelite address with the identical call "yā banī Isrāʾīla dhkurū niʿmatiya llatī anʿamtu ʿalaykum" (O Children of Israel, remember My favour upon you). At 2:40 the continuation is unique — "wa-awfū bi-ʿahdī ūfi bi-ʿahdikum wa-iyyāya fa-rhabūn" (fulfil My covenant…). But 2:47 and 2:122 are word-for-word identical, both continuing "wa-annī faḍḍaltukum ʿalā l-ʿālamīn" (and that I favoured you above the worlds). The trio is a textbook trap: one shared opening, two verses fully identical, one diverging.',
    descBn: 'তিনটি আয়াতে বনী ইসরাঈলকে সম্বোধন শুরু হয়েছে একই ডাক দিয়ে: "ইয়া বানী ইসরাঈলাযকুরূ নি\'মাতিয়াল্লাতী আন\'আমতু আলাইকুম" (হে বনী ইসরাঈল, তোমাদের প্রতি আমার নিয়ামত স্মরণ কর)। ২:৪০-এ এর পরের অংশ একেবারে আলাদা: "ওয়া আওফূ বিআহদী ঊফি বিআহদিকুম ওয়া ইয়্যায়া ফারহাবূন" (আমার অঙ্গীকার পূরণ কর…)। কিন্তু ২:৪৭ ও ২:১২২ শব্দে শব্দে এক, দুটিতেই এর পরে আছে "ওয়া আন্নী ফাদ্দালতুকুম আলাল-আলামীন" (আর আমি তোমাদের সৃষ্টিকুলের ওপর শ্রেষ্ঠত্ব দিয়েছি)। মুখস্থের এক চেনা ফাঁদ: শুরু একটাই, দুটি আয়াত পুরোপুরি এক, আর একটি আলাদা।',
    verses: ['2:40', '2:47', '2:122']
  },
  {
    id: 'innaka-anta-closings',
    nameEn: '"Indeed You, You Are…" — The Innaka Anta Supplication Closings',
    nameBn: '"নিশ্চয় আপনি, আপনিই…" — "ইন্নাকা আনতা" দিয়ে দোয়ার সমাপ্তি',
    nameAr: 'إِنَّكَ أَنتَ — خواتيم الأدعية',
    descEn: 'Supplications frequently close with "innaka anta…" (indeed You, You are…) followed by different divine-name pairs: "al-ʿAlīm al-Ḥakīm" (the angels’ words, 2:32); "at-Tawwāb ar-Raḥīm" (Ibrāhīm and Ismāʿīl, 2:128, whose next prayer, 2:129, closes "al-ʿAzīz al-Ḥakīm"); "al-Wahhāb" (3:8); "ʿAllām al-Ghuyūb" (ʿĪsā, 5:116); and "al-ʿAzīz al-Ḥakīm" (ʿĪsā, 5:118). Primed by the identical "innaka anta" frame, memorisers easily attach the wrong attribute-pair to the wrong prayer.',
    descBn: 'দোয়া প্রায়ই শেষ হয় "ইন্নাকা আনতা…" (নিশ্চয় আপনি, আপনিই…) দিয়ে, তারপর আসে ভিন্ন ভিন্ন নামের জোড়া: "আল-আলীম আল-হাকীম" (ফেরেশতাদের কথা, ২:৩২); "আত-তাওওয়াব আর-রাহীম" (ইবরাহীম ও ইসমাঈল, ২:১২৮; তাঁদের পরের দোয়া ২:১২৯ শেষ হয় "আল-আযীয আল-হাকীম" দিয়ে); "আল-ওয়াহহাব" (৩:৮); "আল্লাম আল-গুয়ূব" (ঈসা, ৫:১১৬); আর "আল-আযীয আল-হাকীম" (ঈসা, ৫:১১৮)। শুরুর "ইন্নাকা আনতা" হুবহু এক বলে হাফেজরা সহজেই এক দোয়ার নাম-জোড়া অন্য দোয়ায় জুড়ে দেন।',
    verses: ['2:32', '2:128', '3:8', '5:116', '5:118']
  },
  {
    id: 'aqim-salata-atu-zakata',
    nameEn: '"Establish Prayer and Give Zakāh" — The Twin Command',
    nameBn: '"নামাজ কায়েম কর ও যাকাত দাও" — জোড়া আদেশ',
    nameAr: 'وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ',
    descEn: 'The paired command "wa-aqīmū ṣ-ṣalāta wa-ātū z-zakāta" (establish the prayer and give the zakāh) recurs in eight verses, each with its own continuation (though 2:110 and 73:20 share "wa-mā tuqaddimū li-anfusikum min khayrin tajidūhu ʿinda llāh"). At 2:43 it closes "wa-rkaʿū maʿa r-rākiʿīn" (…and bow with those who bow); at 2:110 "wa-mā tuqaddimū li-anfusikum…" (whatever good you send forth…); at 24:56 "wa-aṭīʿū r-rasūla laʿallakum turḥamūn" (…and obey the Messenger); within the covenant of 2:83; and among the night-prayer rulings of 73:20. The varying tail clause attached to the identical command is the defining challenge.',
    descBn: 'জোড়া আদেশ "ওয়া আকীমুস-সালাতা ওয়া আতুয-যাকাতা" (নামাজ কায়েম কর ও যাকাত দাও) এসেছে আটটি আয়াতে, প্রতিটিতে পরের অংশ আলাদা (তবে ২:১১০ ও ৭৩:২০ দুটিতেই আছে "ওয়ামা তুকাদ্দিমূ লিআনফুসিকুম মিন খাইরিন তাজিদূহু ইনদাল্লাহ")। ২:৪৩ শেষ হয় "ওয়ারকাঊ মা\'আর-রাকিঈন" (রুকুকারীদের সঙ্গে রুকু কর) দিয়ে; ২:১১০-এ আসে "ওয়ামা তুকাদ্দিমূ লিআনফুসিকুম…" (নিজেদের জন্য যে কল্যাণ আগে পাঠাবে…); ২৪:৫৬-এ "ওয়া আতীঊর-রাসূলা লা\'আল্লাকুম তুরহামূন" (আর রাসূলের আনুগত্য কর); ২:৮৩-এ আদেশটি এসেছে অঙ্গীকারের অংশ হিসেবে; আর ৭৩:২০-এ রাতের নামাজের বিধানের মধ্যে। আদেশ হুবহু এক, পরের অংশ ভিন্ন: এটাই এখানে আসল কঠিন জায়গা।',
    verses: ['2:43', '2:83', '2:110', '24:56', '73:20']
  },
  {
    id: 'laallakum-clause-endings',
    nameEn: '"Thus Allah Makes Clear His Signs" — taʿqilūn / tatafakkarūn / yatadhakkarūn',
    nameBn: '"এভাবে আল্লাহ তাঁর নিদর্শন স্পষ্ট করেন" — তা‘কিলূন / তাতাফাক্কারূন / ইয়াতাযাক্কারূন',
    nameAr: 'كَذَٰلِكَ يُبَيِّنُ ٱللَّهُ — لَعَلَّكُمْ تَعْقِلُونَ / تَتَفَكَّرُونَ',
    descEn: 'The clarification formula "kadhālika yubayyinu llāhu lakum…" (thus Allah makes clear to you His signs) closes with a rotating purpose-verb. At 2:219 and 2:266 it is "laʿallakum tatafakkarūn" (that you may reflect); at 2:242 "laʿallakum taʿqilūn" (that you may reason); and at 2:221 the pronoun and verb shift to "li-n-nāsi laʿallahum yatadhakkarūn" (…for the people, that they may take heed). The taʿqilūn/tatafakkarūn/yatadhakkarūn ending is among the most frequently transposed verse-closings, especially with two occurrences (2:219, 2:266) sharing the identical "tatafakkarūn".',
    descBn: 'স্পষ্ট করার সূত্র "কাযালিকা ইউবাইয়িনুল্লাহু লাকুম…" (এভাবে আল্লাহ তোমাদের জন্য তাঁর নিদর্শন স্পষ্ট করেন) একেক জায়গায় শেষ হয় একেক উদ্দেশ্য দিয়ে। ২:২১৯ ও ২:২৬৬-এ "লা\'আল্লাকুম তাতাফাক্কারূন" (যাতে তোমরা চিন্তা কর); ২:২৪২-এ "লা\'আল্লাকুম তা\'কিলূন" (যাতে তোমরা বোঝ); আর ২:২২১-এ সর্বনাম ও ক্রিয়া দুটিই বদলে যায়: "লিন-নাসি লা\'আল্লাহুম ইয়াতাযাক্কারূন" (মানুষের জন্য, যাতে তারা উপদেশ নেয়)। তা\'কিলূন/তাতাফাক্কারূন/ইয়াতাযাক্কারূন, এই সমাপ্তিগুলো সবচেয়ে বেশি অদলবদল হয়; বিশেষ করে দুটি আয়াতে (২:২১৯, ২:২৬৬) হুবহু একই "তাতাফাক্কারূন" থাকায়।',
    verses: ['2:219', '2:221', '2:242', '2:266']
  },
  {
    id: 'wama-arsalnaka-illa',
    nameEn: '"We Sent You Only As…" — Wa-mā Arsalnāka Illā',
    nameBn: '"আমি তোমাকে কেবল … রূপে পাঠিয়েছি" — ওয়ামা আরসালনাকা ইল্লা',
    nameAr: 'وَمَآ أَرْسَلْنَٰكَ إِلَّا',
    descEn: 'The restrictive statement of the Prophet\'s mission "wa-mā arsalnāka illā…" (We have not sent you except as…) appears in four verses with three different predicates: "mubashshiran wa-nadhīran" (a bringer of glad tidings and a warner — 17:105 and 25:56, word-for-word identical); "raḥmatan li-l-ʿālamīn" (a mercy to the worlds — 21:107); and "kāffatan li-n-nāsi bashīran wa-nadhīran" (to all mankind, a bearer of glad tidings and a warner — 34:28). The shared "wa-mā arsalnāka illā" opening with a rotating description — two of them identical — is a classic substitution set.',
    descBn: 'নবীর দায়িত্ব নির্দিষ্ট করে দেওয়া বাক্য "ওয়ামা আরসালনাকা ইল্লা…" (আমি তোমাকে কেবল … রূপেই পাঠিয়েছি) চারটি আয়াতে এসেছে, তিন রকম বর্ণনাসহ: "মুবাশশিরান ওয়া নাযীরা" (সুসংবাদদাতা ও সতর্ককারী; ১৭:১০৫ ও ২৫:৫৬-এ হুবহু এক); "রাহমাতান লিল-আলামীন" (বিশ্বজগতের জন্য রহমত, ২১:১০৭); আর "কাফফাতান লিন-নাসি বাশীরান ওয়া নাযীরা" (সমগ্র মানবজাতির জন্য সুসংবাদদাতা ও সতর্ককারী, ৩৪:২৮)। শুরু একই, শেষের বর্ণনা বদলায়, আর তার দুটি হুবহু এক। একটির জায়গায় আরেকটি বসিয়ে ফেলার এটি একটি চেনা গুচ্ছ।',
    verses: ['17:105', '21:107', '25:56', '34:28']
  },

  // ── Wave 5 — 8 additional curated groups ─────────────────────────────────

  {
    id: 'wa-la-takunu-ka',
    nameEn: '"Do Not Be Like Those Who…" — Wa-lā Takūnū ka-lladhīna',
    nameBn: '"তাদের মতো হয়ো না যারা…" — ওয়ালা তাকূনূ কাল্লাযীনা',
    nameAr: 'وَلَا تَكُونُوا۟ كَٱلَّذِينَ',
    descEn: 'The prohibition "(wa-)lā takūnū ka-lladhīna…" (do not be like those who…) recurs with a different failing each time: "who split and differed after clear proofs came to them" (3:105), "who said \'we hear\' while they hear not" (8:21), "who harmed Mūsā" (33:69), and "who forgot Allah so He made them forget themselves" (59:19). The identical frame followed by a distinct community-failing is a classic substitution trap; note 33:69 opens "yā ayyuhā lladhīna āmanū lā takūnū" while the others begin "wa-lā takūnū".',
    descBn: 'নিষেধ "(ওয়া-)লা তাকূনূ কাল্লাযীনা…" (তাদের মতো হয়ো না, যারা…) প্রতিবার আলাদা একটি দোষের কথা নিয়ে আসে: "যারা স্পষ্ট প্রমাণ আসার পর বিভক্ত ও মতভেদ করেছে" (৩:১০৫), "যারা বলল \'শুনলাম\' অথচ শোনে না" (৮:২১), "যারা মূসাকে কষ্ট দিয়েছিল" (৩৩:৬৯), এবং "যারা আল্লাহকে ভুলে গেছে, ফলে তিনি তাদের নিজেদেরই ভুলিয়ে দিয়েছেন" (৫৯:১৯)। কাঠামো এক, কিন্তু প্রতিবার ভিন্ন জাতির ভিন্ন ব্যর্থতা: একটির জায়গায় আরেকটি বসিয়ে ফেলার পরিচিত ফাঁদ। খেয়াল করুন, ৩৩:৬৯ শুরু হয় "ইয়া আইয়ুহাল্লাযীনা আমানূ লা তাকূনূ" দিয়ে, বাকিগুলো "ওয়া-লা তাকূনূ" দিয়ে।',
    verses: ['3:105', '8:21', '33:69', '59:19']
  },
  {
    id: 'lahum-ajruhum-inda-rabbihim',
    nameEn: '"Their Reward Is with Their Lord" — Lahum Ajruhum ʿinda Rabbihim',
    nameBn: '"তাদের পুরস্কার তাদের রবের কাছে" — লাহুম আজরুহুম ইনদা রাব্বিহিম',
    nameAr: 'لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ',
    descEn: 'The reward formula "(fa-)lahum ajruhum ʿinda rabbihim wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūn" recurs with subtle shifts. 2:262 drops the "fa-"; 2:112 switches to the SINGULAR "fa-lahu ajruhu ʿinda rabbihi" (his reward, his Lord) though the following clause stays plural; 3:199 keeps "ulāʾika lahum ajruhum ʿinda rabbihim" but ends "inna llāha sarīʿu l-ḥisāb" with no khawf-clause; and 5:69 — the deceptive near-twin of 2:62 — OMITS the reward clause entirely, reading only "fa-lā khawfun ʿalayhim…". Singular-vs-plural and the presence or absence of the ajr-clause are top ḥifẓ traps.',
    descBn: 'পুরস্কারের সূত্র "(ফা-)লাহুম আজরুহুম ইনদা রাব্বিহিম ওয়া লা খাওফুন আলাইহিম ওয়া লা হুম ইয়াহযানূন" সূক্ষ্ম কিছু বদলসহ বারবার এসেছে। ২:২৬২-এ "ফা-" নেই। ২:১১২-এ এটি একবচন: "ফালাহু আজরুহু ইনদা রাব্বিহি" (তার পুরস্কার, তার রব), যদিও পরের অংশ বহুবচনই থাকে। ৩:১৯৯-এ "উলাইকা লাহুম আজরুহুম ইনদা রাব্বিহিম" আছে, কিন্তু শেষ হয় "ইন্নাল্লাহা সারীউল-হিসাব" দিয়ে; খাওফের অংশটি নেই। আর ৫:৬৯ হলো ২:৬২-এর ধোঁকা দেওয়া প্রায়-যমজ: এতে পুরস্কারের অংশই নেই, আছে শুধু "ফালা খাওফুন আলাইহিম…"। একবচন না বহুবচন, আর আজরের অংশ আছে কি নেই: হিফজের সবচেয়ে বড় ফাঁদগুলোর মধ্যে এ দুটি।',
    verses: ['2:62', '2:112', '2:262', '2:274', '3:199', '5:69']
  },
  {
    id: 'sujud-li-adam-openings',
    nameEn: '"Prostrate to Adam" — The Sujūd Command Openings',
    nameBn: '"আদমকে সিজদা কর" — সিজদার আদেশ দিয়ে শুরু',
    nameAr: 'وَإِذْ قُلْنَا لِلْمَلَٰٓئِكَةِ ٱسْجُدُوا۟ لِـَٔادَمَ',
    descEn: 'The command "wa-idh qulnā li-l-malāʾikati sjudū li-ādama fa-sajadū illā iblīs" opens the prostration scene identically in 2:34, 17:61, 18:50 and 20:116 — but each continuation differs: "abā wa-stakbara wa-kāna mina l-kāfirīn" (2:34), "qāla a-asjudu li-man khalaqta ṭīnan" (17:61), "kāna mina l-jinni fa-fasaqa ʿan amri rabbih" (18:50), and the terse "abā" alone (20:116). 7:11 breaks the frame, opening "wa-laqad khalaqnākum thumma ṣawwarnākum thumma qulnā…" and closing "lam yakun mina s-sājidīn". Matching each opening to its distinct tail is a core mutashābihāt drill.',
    descBn: '"ওয়া ইয কুলনা লিল-মালাইকাতিসজুদূ লিআদামা ফাসাজাদূ ইল্লা ইবলীস" আদেশ দিয়ে সিজদার দৃশ্য হুবহু একইভাবে শুরু হয়েছে ২:৩৪, ১৭:৬১, ১৮:৫০ ও ২০:১১৬-এ। কিন্তু পরের অংশ প্রতিটিতে আলাদা: "আবা ওয়াসতাকবারা ওয়া কানা মিনাল-কাফিরীন" (২:৩৪), "কালা আআসজুদু লিমান খালাকতা তীনা" (১৭:৬১), "কানা মিনাল-জিন্নি ফাফাসাকা আন আমরি রাব্বিহ" (১৮:৫০), আর ২০:১১৬-এ শুধু সংক্ষিপ্ত "আবা"। ৭:১১ এই কাঠামো ভাঙে: শুরু হয় "ওয়া লাকাদ খালাকনাকুম ছুম্মা সাওওয়ারনাকুম ছুম্মা কুলনা…" দিয়ে, শেষ হয় "লাম ইয়াকুম মিনাস-সাজিদীন" দিয়ে। প্রতিটি সূচনাকে তার নিজস্ব সমাপ্তির সঙ্গে মেলানো মুতাশাবিহাতের একটি মূল অনুশীলন।',
    verses: ['2:34', '7:11', '17:61', '18:50', '20:116']
  },
  {
    id: 'inna-anzalnahu-quranan',
    nameEn: '"We Sent It Down as an Arabic Quran" — Anzalnāhu vs Jaʿalnāhu',
    nameBn: '"আমি তা আরবি কুরআনরূপে নাযিল করেছি" — আনযালনাহু বনাম জাআলনাহু',
    nameAr: 'إِنَّآ أَنزَلْنَٰهُ قُرْءَٰنًا عَرَبِيًّا',
    descEn: 'The revelation-opening "innā anzalnāhu qurʾānan ʿarabiyyan laʿallakum taʿqilūn" (12:2) is echoed almost verbatim in 43:3 — except the verb changes: "innā JAʿALnāhu qurʾānan ʿarabiyyan…" (We MADE it) instead of "anzalnāhu" (We sent it down). 20:113 shares "qurʾānan ʿarabiyyan" but opens "wa-kadhālika anzalnāhu…" and continues "wa-ṣarrafnā fīhi mina l-waʿīd". And 97:1 reuses the "innā anzalnāhu" opening — but for the Night of Decree, not the Arabic Quran: "innā anzalnāhu fī laylati l-qadr". The anzalnāhu/jaʿalnāhu swap at 12:2 / 43:3 is a celebrated single-word trap.',
    descBn: 'ওহি নাজিলের সূচনা-বাক্য "ইন্না আনযালনাহু কুরআনান আরাবিয়্যান লাআল্লাকুম তা‘কিলূন" (১২:২) প্রায় হুবহু ফিরে এসেছে ৪৩:৩-এ, শুধু ক্রিয়াটি বদলে গেছে: "আনযালনাহু" (নাজিল করেছি)-র বদলে "ইন্না জাআলনাহু কুরআনান আরাবিয়্যান…" (আমি তা বানিয়েছি)। ২০:১১৩-এ "কুরআনান আরাবিয়্যান" আছে, তবে শুরু হয় "ওয়া কাযালিকা আনযালনাহু…" দিয়ে, আর পরে আসে "ওয়া সাররাফনা ফীহি মিনাল-ওয়াঈদ"। আর ৯৭:১-এও একই "ইন্না আনযালনাহু" সূচনা, তবে সেখানে কথা আরবি কুরআন নিয়ে নয়, কদরের রাত নিয়ে: "ইন্না আনযালনাহু ফী লাইলাতিল-কাদর"। ১২:২ / ৪৩:৩-এ আনযালনাহু/জাআলনাহু অদলবদল এক শব্দের একটি প্রসিদ্ধ ফাঁদ।',
    verses: ['12:2', '20:113', '43:3', '97:1']
  },
  {
    id: 'kadhalika-najzi',
    nameEn: '"Thus We Recompense…" — Kadhālika Najzī',
    nameBn: '"এভাবে আমি প্রতিদান দিই…" — কাযালিকা নাজযী',
    nameAr: 'وَكَذَٰلِكَ نَجْزِى',
    descEn: 'The recompense formula "wa-kadhālika najzī…" (thus We recompense…) closes many verses with a rotating object. For the doers of good it is "al-muḥsinīn": "wa-kadhālika najzī l-muḥsinīn" (6:84, 12:22, 28:14) and, with an added emphatic, "innā kadhālika najzī l-muḥsinīn" (37:80). For transgressors the object flips: "najzī l-mujrimīn" (the criminals — 7:40) and "najzī ẓ-ẓālimīn" (the wrongdoers — 12:75, 21:29). The identical verb-frame with muḥsinīn / mujrimīn / ẓālimīn as the swappable ending is a classic colophon-confusion set.',
    descBn: 'প্রতিদানের সূত্র "ওয়া কাযালিকা নাজযী…" (এভাবে আমি প্রতিদান দিই…) দিয়ে বহু আয়াত শেষ হয়, তবে কাদের প্রতিদান, সেটি বদলায়। সৎকর্মশীলদের বেলায় "আল-মুহসিনীন": "ওয়া কাযালিকা নাজযিল-মুহসিনীন" (৬:৮৪, ১২:২২, ২৮:১৪), আর জোর বাড়িয়ে "ইন্না কাযালিকা নাজযিল-মুহসিনীন" (৩৭:৮০)। সীমালঙ্ঘনকারীদের বেলায় শব্দ উল্টে যায়: "নাজযিল-মুজরিমীন" (অপরাধীদের, ৭:৪০) আর "নাজযিয-যালিমীন" (জালিমদের, ১২:৭৫, ২১:২৯)। ক্রিয়ার কাঠামো এক, শুধু শেষে মুহসিনীন / মুজরিমীন / যালিমীন বদলায়। আয়াতের সমাপ্তি গুলিয়ে ফেলার এটি একটি চেনা গুচ্ছ।',
    verses: ['6:84', '7:40', '12:22', '12:75', '21:29', '28:14', '37:80']
  },
  {
    id: 'fa-kayfa-kana-adhabi',
    nameEn: '"How Were My Punishment and Warnings" — Al-Qamar\'s ʿAdhābī wa-Nudhur',
    nameBn: '"আমার শাস্তি ও সতর্কবাণী কেমন ছিল" — আল-কামারের আযাবী ওয়া নুযুর',
    nameAr: 'فَكَيْفَ كَانَ عَذَابِى وَنُذُرِ',
    descEn: 'Sūrat al-Qamar drives home each destroyed people with a near-refrain built on "ʿadhābī wa-nudhur" (My punishment and My warnings). Four times it is the rhetorical "fa-kayfa kāna ʿadhābī wa-nudhur" (so how were My punishment and warnings! — 54:16, 54:18, 54:21, 54:30); twice it becomes the imperative "fa-dhūqū ʿadhābī wa-nudhur" (so taste My punishment and warnings — 54:37, 54:39). Both share the "ʿadhābī wa-nudhur" tail; recalling which opening — fa-kayfa kāna vs fa-dhūqū — attaches to which scene is the drill. (Distinct from the surah\'s other refrain, "yassarnā l-Qurʾāna".)',
    descBn: 'সূরা আল-কামার প্রতিটি ধ্বংসপ্রাপ্ত জাতির কাহিনীর শিক্ষা মনে গেঁথে দেয় "আযাবী ওয়া নুযুর" (আমার শাস্তি ও আমার সতর্কবাণী) দিয়ে গড়া প্রায় একই রকম বাক্যে। চারবার এটি এসেছে প্রশ্নের আকারে (৫৪:১৬, ৫৪:১৮, ৫৪:২১, ৫৪:৩০): "ফাকাইফা কানা আযাবী ওয়া নুযুর" (তবে কেমন ছিল আমার শাস্তি ও সতর্কবাণী!)। দুবার আদেশের আকারে (৫৪:৩৭, ৫৪:৩৯): "ফাযূকূ আযাবী ওয়া নুযুর" (অতএব আমার শাস্তি ও সতর্কবাণীর স্বাদ নাও)। দুটিরই শেষাংশ "আযাবী ওয়া নুযুর"। কোন দৃশ্যের সঙ্গে কোন সূচনা, ফাকাইফা কানা নাকি ফাযূকূ, তা মনে রাখাই অনুশীলন। (সূরার অন্য পুনরাবৃত্ত বাক্য "ইয়াসসারনাল-কুরআন" থেকে এটি আলাদা।)',
    verses: ['54:16', '54:18', '54:21', '54:30', '54:37', '54:39']
  },
  {
    id: 'qul-audhu-openings',
    nameEn: 'The Four "Qul" Sūrahs — and the Muʿawwidhatān Twin',
    nameBn: 'চারটি "কুল" সূরা — আর যমজ মুআওবিযাতাইন',
    nameAr: 'سور "قل" الأربع والمعوذتان',
    descEn: 'The four "Qul" sūrahs each open with the imperative "Qul" (Say). Al-Kāfirūn begins "qul yā ayyuhā l-kāfirūn" (109:1) and al-Ikhlāṣ "qul huwa llāhu aḥad" (112:1). The muʿawwidhatān form a near-twin pair: "qul aʿūdhu bi-rabbi l-FALAQ" (Lord of the daybreak — 113:1) versus "qul aʿūdhu bi-rabbi n-NĀS" (Lord of mankind — 114:1) — identical but for the final word, after which 114 uniquely continues "maliki n-nās, ilāhi n-nās". Learners routinely blend the openings of these short, adjacent sūrahs.',
    descBn: '"কুল" সূরা চারটির প্রতিটি শুরু হয়েছে "কুল" (বলো) আদেশ দিয়ে। আল-কাফিরূনের শুরু "কুল ইয়া আইয়ুহাল-কাফিরূন" (১০৯:১), আল-ইখলাসের "কুল হুওয়াল্লাহু আহাদ" (১১২:১)। মুআওবিযাতাইন প্রায় যমজ: "কুল আঊযু বিরাব্বিল-ফালাক" (ভোরের রব, ১১৩:১) বনাম "কুল আঊযু বিরাব্বিন-নাস" (মানুষের রব, ১১৪:১)। পার্থক্য কেবল শেষ শব্দে; এরপর শুধু সূরা ১১৪-তেই আছে "মালিকিন-নাস, ইলাহিন-নাস"। ছোট আর পাশাপাশি এই সূরাগুলোর শুরু শিক্ষার্থীরা প্রায়ই মিশিয়ে ফেলে।',
    verses: ['109:1', '112:1', '113:1', '114:1']
  },
  {
    id: 'ittaqu-llaha-openings',
    nameEn: '"O You Who Believe, Fear Allah…" — Ittaqū llāha Openings',
    nameBn: '"হে ঈমানদারগণ, আল্লাহকে ভয় কর…" — ইত্তাকুল্লাহা সূচনা',
    nameAr: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ',
    descEn: 'The address "yā ayyuhā lladhīna āmanū ttaqū llāha…" (O you who believe, fear Allah…) opens many verses with a different command attached: "wa-dharū mā baqiya mina r-ribā" (2:278), "ḥaqqa tuqātihi" (3:102), "wa-btaghū ilayhi l-wasīla" (5:35), "wa-kūnū maʿa ṣ-ṣādiqīn" (9:119), "wa-qūlū qawlan sadīdā" (33:70), "wa-āminū bi-rasūlih" (57:28), and "wa-ltanẓur nafsun mā qaddamat li-ghad" (59:18). The identical opening with a rotating follow-on command is a prime sequential-memorisation challenge.',
    descBn: '"ইয়া আইয়ুহাল্লাযীনা আমানুত্তাকুল্লাহা…" (হে ঈমানদারগণ, আল্লাহকে ভয় কর…) সম্বোধন দিয়ে বহু আয়াত শুরু হয়, আর প্রতিবার এর সঙ্গে যুক্ত হয় ভিন্ন একটি আদেশ: "ওয়া যারূ মা বাকিয়া মিনার-রিবা" (২:২৭৮), "হাক্কা তুকাতিহি" (৩:১০২), "ওয়াবতাগূ ইলাইহিল-ওয়াসীলা" (৫:৩৫), "ওয়া কূনূ মাআস-সাদিকীন" (৯:১১৯), "ওয়া কূলূ কাওলান সাদীদা" (৩৩:৭০), "ওয়া আমিনূ বিরাসূলিহ" (৫৭:২৮), এবং "ওয়ালতানযুর নাফসুম মা কাদ্দামাত লিগাদ" (৫৯:১৮)। শুরু হুবহু এক, পরের আদেশ বদলায়। তাই ক্রম ধরে মুখস্থ রাখা এখানে বড় পরীক্ষা।',
    verses: ['2:278', '3:102', '5:35', '9:119', '33:70', '57:28', '59:18']
  },
  {
    id: 'shuara-aziz-rahim',
    nameEn: 'Ash-Shuʿarāʾ — "Al-ʿAzīzu r-Raḥīm" Eightfold Refrain',
    nameBn: 'আশ-শুআরা — "আল-আযীযুর-রাহীম" আটবার',
    nameAr: 'لازمة وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ في الشعراء',
    descEn: 'The closing line "wa-inna rabbaka la-huwa l-ʿAzīzu r-Raḥīm" (indeed your Lord — He is the Almighty, the Merciful) seals eight sections of Sūrat ash-Shuʿarāʾ verbatim: after the opening (26:9) and after each of the seven prophet narratives (26:68, 104, 122, 140, 159, 175, 191). Near the sūrah\'s end the pair returns in a new frame: "wa-tawakkal ʿalā l-ʿAzīzi r-Raḥīm" (26:217). The ʿAzīz + Raḥīm pairing is characteristic of this sūrah; since ʿAzīz elsewhere overwhelmingly pairs with Ḥakīm, slipping into "al-ʿAzīzu l-Ḥakīm" here is the classic error. (Complements the kadhdhabat-openings group for this sūrah.)',
    descBn: 'সমাপনী আয়াত "ওয়া ইন্না রাব্বাকা লাহুওয়াল-আযীযুর-রাহীম" (নিশ্চয়ই তোমার রব, তিনিই পরাক্রমশালী, পরম দয়ালু) হুবহু এসে সূরা আশ-শুআরার আটটি অংশ শেষ করেছে: সূচনার পর (২৬:৯) এবং সাতটি নবীর কাহিনীর প্রতিটির পর (২৬:৬৮, ১০৪, ১২২, ১৪০, ১৫৯, ১৭৫, ১৯১)। সূরার শেষ দিকে নাম-জোড়াটি নতুন রূপে ফিরে আসে: "ওয়া তাওয়াক্কাল আলাল-আযীযির-রাহীম" (২৬:২১৭)। আযীয + রাহীম জোড়া এই সূরার বৈশিষ্ট্য। অন্য জায়গায় আযীয প্রায় সবসময় হাকীমের সঙ্গে আসে, তাই এখানে "আল-আযীযুল-হাকীম" পড়ে ফেলাই চেনা ভুল। (এই সূরার কাযযাবাত-সূচনা গুচ্ছের পরিপূরক।)',
    verses: ['26:9', '26:68', '26:104', '26:122', '26:140', '26:159', '26:175', '26:191', '26:217']
  },
  {
    id: 'nufikha-fi-s-sur',
    nameEn: 'The Trumpet Blast — "Nufikha fī ṣ-Ṣūr" Family',
    nameBn: 'শিঙ্গায় ফুঁ — "নুফিখা ফিস-সূর" ও এর রূপগুলো',
    nameAr: 'وَنُفِخَ فِى ٱلصُّورِ / فَإِذَا نُفِخَ / يَوْمَ يُنفَخُ',
    descEn: 'The Resurrection trumpet appears in three grammatical frames: past-tense "wa-nufikha fī ṣ-ṣūr" (18:99, 36:51, 39:68, 50:20), conditional "fa-idhā nufikha fī ṣ-ṣūr" (23:101; 69:13 adds "nafkhatun wāḥida" — a single blast), and imperfect "yawma yunfakhu fī ṣ-ṣūr" (20:102, 78:18; with wa- in 27:87, while 6:73 embeds it as "wa-lahu l-mulku yawma yunfakhu fī ṣ-ṣūr"). Every continuation differs: gathering together (18:99), racing from the graves (36:51), the two blasts (39:68), "that is the Day of the Threat" (50:20), no kinship ties that Day (23:101), coming in crowds (78:18). Matching frame and continuation to the right sūrah is a standard advanced ḥifẓ drill.',
    descBn: 'কিয়ামতের শিঙ্গার কথা এসেছে তিনটি ব্যাকরণিক রূপে। অতীত কাল: "ওয়া নুফিখা ফিস-সূর" (১৮:৯৯, ৩৬:৫১, ৩৯:৬৮, ৫০:২০)। শর্তবাচক: "ফাইযা নুফিখা ফিস-সূর" (২৩:১০১; ৬৯:১৩-এ যোগ হয়েছে "নাফখাতুন ওয়াহিদা", অর্থাৎ একটিমাত্র ফুঁ)। আর মুদারি (বর্তমান-ভবিষ্যৎ) রূপ: "ইয়াওমা ইউনফাখু ফিস-সূর" (২০:১০২, ৭৮:১৮; ২৭:৮৭-এ শুরুতে ওয়া-সহ, আর ৬:৭৩-এ এটি এসেছে "ওয়া লাহুল-মুলকু ইয়াওমা ইউনফাখু ফিস-সূর" বাক্যের ভেতরে)। পরের অংশ প্রতিটিতে আলাদা: সবাইকে একত্র করা (১৮:৯৯), কবর থেকে ছুটে বের হওয়া (৩৬:৫১), দুই ফুঁ (৩৯:৬৮), "এটিই প্রতিশ্রুত শাস্তির দিন" (৫০:২০), সেদিন আত্মীয়তার বন্ধন থাকবে না (২৩:১০১), দলে দলে আসা (৭৮:১৮)। কোন রূপ আর কোন পরের অংশ কোন সূরার, তা মেলানো উচ্চতর হিফজের নিয়মিত অনুশীলন।',
    verses: ['6:73', '18:99', '20:102', '23:101', '27:87', '36:51', '39:68', '50:20', '69:13', '78:18']
  },
  {
    id: 'idha-cosmic-openings',
    nameEn: '"Idhā…" Cosmic-Upheaval Openings — Sūrahs 81, 82, 84',
    nameBn: '"ইযা…" দিয়ে মহাজাগতিক বিপর্যয়ের সূচনা — সূরা ৮১, ৮২, ৮৪',
    nameAr: 'إِذَا ٱلشَّمْسُ كُوِّرَتْ / إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ / إِذَا ٱلسَّمَآءُ ٱنشَقَّتْ',
    descEn: 'Three juz-30 sūrahs open with chains of "idhā" (when…) clauses depicting the cosmos undone. At-Takwīr strings twelve — beginning "idhā sh-shamsu kuwwirat" (81:1) — resolved by "ʿalimat nafsun mā aḥḍarat" (81:14). Al-Infiṭār opens "idhā s-samāʾu nfaṭarat" (82:1, the sky SPLIT OPEN) with four clauses resolved by the near-twin "ʿalimat nafsun mā qaddamat wa-akhkharat" (82:5). Al-Inshiqāq opens "idhā s-samāʾu nshaqqat" (84:1, the sky RENT ASUNDER) and repeats "wa-adhinat li-rabbihā wa-ḥuqqat" verbatim at 84:2 and 84:5. Confusing infaṭarat with inshaqqat, and swapping the two "ʿalimat nafsun" resolutions, are among the most frequent juz-ʿamma errors.',
    descBn: '৩০তম পারার তিনটি সূরা শুরু হয়েছে একের পর এক "ইযা" (যখন…) বাক্যাংশ দিয়ে, যেখানে বিশ্বজগৎ ভেঙে পড়ার ছবি। আত-তাকভীরে এমন বারোটি বাক্যাংশ; শুরু "ইযাশ-শামসু কুওবিরাত" (৮১:১) দিয়ে, আর উত্তর আসে "আলিমাত নাফসুম মা আহদারাত" (৮১:১৪)-এ। আল-ইনফিতারের শুরু "ইযাস-সামাউন-ফাতারাত" (৮২:১, আকাশ বিদীর্ণ হবে); চারটি বাক্যাংশের পর উত্তর আসে প্রায়-যমজ বাক্যে: "আলিমাত নাফসুম মা কাদ্দামাত ওয়া আখখারাত" (৮২:৫)। আল-ইনশিকাকের শুরু "ইযাস-সামাউন-শাক্কাত" (৮৪:১, আকাশ ফেটে যাবে), আর "ওয়া আযিনাত লিরাব্বিহা ওয়া হুক্কাত" হুবহু এসেছে ৮৪:২ ও ৮৪:৫-এ। ইনফাতারাত আর ইনশাক্কাত গুলিয়ে ফেলা, কিংবা দুটি "আলিমাত নাফসুন" উত্তর অদলবদল করা আমপারার সবচেয়ে বেশি হওয়া ভুলগুলোর অন্যতম।',
    verses: ['81:1', '81:14', '82:1', '82:5', '84:1', '84:2', '84:5']
  },
  {
    id: 'kalla-sawfa-talamun',
    nameEn: '"Kallā Sawfa Taʿlamūn" — The Doubled Rebuke (102 vs 78)',
    nameBn: '"কাল্লা সাওফা তালামূন" — দ্বিগুণ ধমক (১০২ বনাম ৭৮)',
    nameAr: 'كَلَّا سَوْفَ تَعْلَمُونَ / كَلَّا سَيَعْلَمُونَ',
    descEn: 'At-Takāthur warns twice in the second person with the particle sawfa: "kallā sawfa taʿlamūn, thumma kallā sawfa taʿlamūn" (102:3–4). An-Nabaʾ carries the identical doubled structure — kallā, then thumma kallā — but in the third person with the prefix sa-: "kallā sa-yaʿlamūn, thumma kallā sa-yaʿlamūn" (78:4–5). The rhetoric of escalating threat is the same; two switches must be tracked: the person (taʿlamūn "you will know" vs yaʿlamūn "they will know") and the future marker (sawfa vs sa-). Blending the two sūrahs\' forms is a well-known short-sūrah slip.',
    descBn: 'আত-তাকাসুর "তোমরা" বলে সম্বোধন করে, সাওফা অব্যয় দিয়ে, দুবার সতর্ক করে: "কাল্লা সাওফা তালামূন, সুম্মা কাল্লা সাওফা তালামূন" (১০২:৩–৪)। আন-নাবাতেও একই দ্বিগুণ কাঠামো, কাল্লা তারপর সুম্মা কাল্লা, কিন্তু "তারা" বলে, আর সা- উপসর্গ দিয়ে: "কাল্লা সাইয়ালামূন, সুম্মা কাল্লা সাইয়ালামূন" (৭৮:৪–৫)। ধাপে ধাপে হুমকি বাড়ানোর অলংকার দুই জায়গায় একই। খেয়াল রাখতে হয় দুটি বদল: কাকে বলা হচ্ছে (তালামূন "তোমরা জানবে" বনাম ইয়ালামূন "তারা জানবে"), আর ভবিষ্যতের চিহ্ন (সাওফা বনাম সা-)। দুই সূরার রূপ মিশিয়ে ফেলা ছোট সূরায় একটি সুপরিচিত ভুল।',
    verses: ['78:4', '78:5', '102:3', '102:4']
  },
  {
    id: 'maal-usri-yusra',
    nameEn: '"With Hardship Comes Ease" — The Back-to-Back Twin of ash-Sharḥ',
    nameBn: '"কষ্টের সাথেই স্বস্তি" — আশ-শারহের পাশাপাশি দুই যমজ আয়াত',
    nameAr: 'فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا . إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا',
    descEn: 'Ash-Sharḥ 94:5 declares "fa-inna maʿa l-ʿusri yusrā" and 94:6 immediately repeats it minus the opening fa-: "inna maʿa l-ʿusri yusrā" — one of the Quran’s most compact near-verbatim twins: adjacent verses distinguished by a single particle. Reciters routinely add or drop the fa-. Classical commentators, citing a well-known saying transmitted from the early generations, note that al-ʿusr is definite (the same hardship both times) while yusrā is indefinite (two distinct eases): "one hardship will never overcome two eases".',
    descBn: 'আশ-শারহের ৯৪:৫ ঘোষণা করে "ফাইন্না মাআল-উসরি ইউসরা", আর ঠিক পরের ৯৪:৬ একই কথা বলে শুরুর ফা- ছাড়া: "ইন্না মাআল-উসরি ইউসরা"। পাশাপাশি দুই আয়াত, পার্থক্য শুধু একটি অব্যয়ে: কুরআনের সবচেয়ে ছোট প্রায়-হুবহু যমজগুলোর একটি। তিলাওয়াতের সময় প্রায়ই ফা- যোগ হয়ে যায় বা বাদ পড়ে যায়। পূর্বসূরিদের থেকে বর্ণিত একটি প্রসিদ্ধ উক্তি উল্লেখ করে প্রাচীন মুফাসসিরগণ বলেন: আল-উসর নির্দিষ্ট (দুবারই একই কষ্ট), কিন্তু ইউসরা অনির্দিষ্ট (দুটি আলাদা স্বস্তি)। তাই "এক কষ্ট কখনো দুই স্বস্তিকে হারাতে পারবে না"।',
    verses: ['94:5', '94:6']
  },
  {
    id: 'ya-ayyuha-n-nas-ittaqu',
    nameEn: '"O Mankind, Fear Your Lord" — Ittaqū Rabbakum Addresses',
    nameBn: '"হে মানুষ, তোমাদের রবকে ভয় কর" — ইত্তাকূ রাব্বাকুম সম্বোধন',
    nameAr: 'يَـٰٓأَيُّهَا ٱلنَّاسُ ٱتَّقُوا۟ رَبَّكُمْ',
    descEn: '"Yā ayyuhā n-nāsu ttaqū rabbakum" opens two sūrahs with different continuations: an-Nisāʾ adds "alladhī khalaqakum min nafsin wāḥida" (4:1), while al-Ḥajj adds "inna zalzalata s-sāʿati shayʾun ʿaẓīm" (22:1). Luqmān 31:33 repeats the call mid-sūrah with "wa-khshaw yawman lā yajzī wālidun ʿan waladih". Fāṭir 35:5 uses the same address without "ittaqū" — "yā ayyuhā n-nāsu inna waʿda llāhi ḥaqq" — yet ends exactly as 31:33 does: "fa-lā taghurrannakumu l-ḥayātu d-dunyā wa-lā yaghurrannakum billāhi l-gharūr", making 31:33 and 35:5 a hidden twin inside the larger set.',
    descBn: '"ইয়া আইয়ুহান-নাসুত্তাকূ রাব্বাকুম" দিয়ে দুটি সূরা শুরু হয়েছে, তবে পরের অংশ আলাদা: আন-নিসায় আসে "আল্লাযী খালাকাকুম মিন নাফসিন ওয়াহিদা" (৪:১), আর আল-হাজ্জে "ইন্না যালযালাতাস-সাআতি শাইউন আযীম" (২২:১)। লুকমানের ৩১:৩৩ সূরার মাঝখানে একই ডাক দেয়, সঙ্গে "ওয়াখশাও ইয়াওমাল লা ইয়াজযী ওয়ালিদুন আন ওয়ালাদিহ"। ফাতিরের ৩৫:৫-এ সম্বোধন একই, কিন্তু "ইত্তাকূ" নেই: "ইয়া আইয়ুহান-নাসু ইন্না ওয়াদাল্লাহি হাক্ক"। তবু এর শেষটা হুবহু ৩১:৩৩-এর মতো: "ফালা তাগুররান্নাকুমুল-হায়াতুদ-দুনইয়া ওয়ালা ইয়াগুররান্নাকুম বিল্লাহিল-গারূর"। ফলে বড় গুচ্ছটির ভেতরে ৩১:৩৩ ও ৩৫:৫ এক লুকানো যমজ জোড়া।',
    verses: ['4:1', '22:1', '31:33', '35:5']
  },
  {
    id: 'illa-l-balagh',
    nameEn: '"Only the Clear Conveyance" — Mā ʿalā r-Rasūli illā l-Balāgh',
    nameBn: '"স্পষ্ট পৌঁছে দেওয়াই দায়িত্ব" — মা আলার-রাসূলি ইল্লাল-বালাগ',
    nameAr: 'وَمَا عَلَى ٱلرَّسُولِ إِلَّا ٱلْبَلَـٰغُ ٱلْمُبِينُ',
    descEn: 'One formula, six frames. Al-Māʾida 5:99 is the shortest: "mā ʿalā r-rasūli illā l-balāgh" — no opening wa-, no "al-mubīn". An-Nūr 24:54 and al-ʿAnkabūt 29:18 both read "wa-mā ʿalā r-rasūli illā l-balāghu l-mubīn". An-Naḥl 16:35 casts it as a rhetorical question in the plural: "fa-hal ʿalā r-rusuli illā l-balāghu l-mubīn". In Yā-Sīn 36:17 the town\'s messengers themselves speak: "wa-mā ʿalaynā illā l-balāghu l-mubīn". At-Taghābun 64:12 shifts to "fa-innamā ʿalā rasūlinā l-balāghu l-mubīn". Tracking which frame appears where — and whether "al-mubīn" is present — is a favourite examiners\' question.',
    descBn: 'এক সূত্র, ছয় রূপ। আল-মায়িদা ৫:৯৯ সবচেয়ে ছোট: "মা আলার-রাসূলি ইল্লাল-বালাগ"; শুরুতে ওয়া- নেই, শেষে "আল-মুবীন" নেই। আন-নূর ২৪:৫৪ ও আল-আনকাবূত ২৯:১৮ দুটিতেই আছে "ওয়ামা আলার-রাসূলি ইল্লাল-বালাগুল-মুবীন"। আন-নাহল ১৬:৩৫-এ এটি বহুবচনে, প্রশ্নের আকারে: "ফাহাল আলার-রুসুলি ইল্লাল-বালাগুল-মুবীন"। ইয়াসীন ৩৬:১৭-এ জনপদের রাসূলরা নিজেরাই বলেন: "ওয়ামা আলাইনা ইল্লাল-বালাগুল-মুবীন"। আত-তাগাবুন ৬৪:১২-এ রূপ বদলে হয় "ফাইন্নামা আলা রাসূলিনাল-বালাগুল-মুবীন"। কোন রূপ কোথায়, আর "আল-মুবীন" আছে কি না: পরীক্ষকেরা এটা জিজ্ঞেস করতে ভালোবাসেন।',
    verses: ['5:99', '16:35', '24:54', '29:18', '36:17', '64:12']
  },
  {
    id: 'sayaqulu-qul',
    nameEn: '"Sayaqūlu… Qul" — Foretold Objections, Ready Answers',
    nameBn: '"সাইয়াকূলু… কুল" — পূর্বঘোষিত আপত্তি, প্রস্তুত জবাব',
    nameAr: 'سَيَقُولُ … قُلْ',
    descEn: 'A distinctive pattern: the Quran foretells an objection with future-tense "sayaqūlu" (they will say), then arms the Prophet with "qul" (Say). 2:142: the foolish question the qiblah change — answered "qul lillāhi l-mashriqu wa-l-maghrib". 6:148: the idolaters plead determinism ("law shāʾa llāhu mā ashraknā") — answered "qul hal ʿindakum min ʿilm". 48:11: the stay-behind bedouins offer excuses — answered "qul fa-man yamliku lakum mina llāhi shayʾā". 48:15: they ask to follow to the spoils — answered "qul lan tattabiʿūnā". With plural "sayaqūlūna", 18:22 foretells the guessing over the Sleepers\' number — answered "qul rabbī aʿlamu bi-ʿiddatihim". Matching each near-identical opening to its reply is the drill.',
    descBn: 'কুরআনের একটি বিশেষ ধরন: কুরআন আগেই জানিয়ে দেয় তারা কী আপত্তি তুলবে ("সাইয়াকূলু", তারা বলবে), তারপর "কুল" (বলো) দিয়ে নবীকে জবাব শিখিয়ে দেয়। ২:১৪২: নির্বোধরা কিবলা বদল নিয়ে প্রশ্ন তোলে; জবাব "কুল লিল্লাহিল-মাশরিকু ওয়াল-মাগরিব"। ৬:১৪৮: মুশরিকরা তাকদিরের অজুহাত দেয় ("লাও শাআল্লাহু মা আশরাকনা"); জবাব "কুল হাল ইনদাকুম মিন ইলম"। ৪৮:১১: পেছনে থেকে যাওয়া বেদুইনরা অজুহাত দেখায়; জবাব "কুল ফামান ইয়ামলিকু লাকুম মিনাল্লাহি শাইআ"। ৪৮:১৫: তারা গনিমতের জন্য সঙ্গে যেতে চায়; জবাব "কুল লান তাত্তাবিঊনা"। আর বহুবচন "সাইয়াকূলূনা" দিয়ে ১৮:২২ আগেই জানিয়ে দেয়, গুহাবাসীদের সংখ্যা নিয়ে লোকেরা আন্দাজ করবে; জবাব "কুল রাব্বী আলামু বিইদ্দাতিহিম"। প্রায় একই রকম সূচনাগুলোকে যার যার জবাবের সঙ্গে মেলানোই অনুশীলন।',
    verses: ['2:142', '6:148', '18:22', '48:11', '48:15']
  },
  // v154 additions — 15 data-mined groups / 76 fresh verses (2026-07-28)
  {
    "id": "shuara-laayah-refrain",
    "nameEn": "Surely in That Is a Sign — Shuʿarā Refrain",
    "nameBn": "নিশ্চয়ই এতে নিদর্শন রয়েছে — শুআরা ধুয়া",
    "nameAr": "إِنَّ فِى ذَٰلِكَ لَءَايَةً وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ",
    "descEn": "This refrain closes the opening section and seven prophet stories in surah 26 (verses 8, 67, 103, 121, 139, 158, 174, 190). In six places the whole verse is just the refrain; 26:139 prefixes it with \"so they denied him and We destroyed them\" and 26:158 with \"so the punishment seized them\". Because the wording is identical, memorizers easily jump from one story's ending to another.",
    "descBn": "এই ধুয়াটি সূরা ২৬-এ সূচনা-অংশ ও সাতটি নবী-কাহিনির সমাপ্তিতে আসে (আয়াত ৮, ৬৭, ১০৩, ১২১, ১৩৯, ১৫৮, ১৭৪, ১৯০)। ছয় জায়গায় পুরো আয়াতটিই কেবল এই ধুয়া; ২৬:১৩৯-এ আগে যুক্ত হয় \"অতঃপর তারা তাকে অস্বীকার করল, তাই আমরা তাদের ধ্বংস করলাম\" এবং ২৬:১৫৮-এ \"অতঃপর শাস্তি তাদের পাকড়াও করল\"। শব্দ হুবহু এক হওয়ায় মুখস্থকারীরা সহজেই এক কাহিনির শেষ থেকে অন্যটিতে লাফিয়ে যান।",
    "verses": [
      "26:8",
      "26:67",
      "26:103",
      "26:121",
      "26:139",
      "26:158",
      "26:174",
      "26:190"
    ]
  },
  {
    "id": "shuara-ajr-refrain",
    "nameEn": "I Ask You No Reward — Messengers' Refrain",
    "nameBn": "আমি তোমাদের কাছে কোনো প্রতিদান চাই না — রাসূলদের ধুয়া",
    "nameAr": "وَمَآ أَسْـَٔلُكُمْ عَلَيْهِ مِنْ أَجْرٍ إِنْ أَجْرِىَ إِلَّا",
    "descEn": "Five messengers in surah 26 — at verses 109, 127, 145, 164 and 180 — say the identical full verse: \"I ask of you no reward for it; my reward is only upon the Lord of the worlds.\" All five occurrences are word-for-word the same, so the challenge is remembering which story each one belongs to and what verse follows it.",
    "descBn": "সূরা ২৬-এ পাঁচজন রাসূল (আয়াত ১০৯, ১২৭, ১৪৫, ১৬৪ ও ১৮০) হুবহু একই পূর্ণ আয়াত বলেন: \"আমি এর জন্য তোমাদের কাছে কোনো প্রতিদান চাই না; আমার প্রতিদান তো কেবল জগতসমূহের প্রতিপালকের কাছে।\" পাঁচ জায়গাতেই শব্দে শব্দে এক। তাই কঠিন কাজ হলো মনে রাখা, কোনটি কোন কাহিনির অংশ আর এর পরে কোন আয়াত আসে।",
    "verses": [
      "26:109",
      "26:127",
      "26:145",
      "26:164",
      "26:180"
    ]
  },
  {
    "id": "afalam-yasiru-aqibah",
    "nameEn": "Have They Not Traveled the Earth?",
    "nameBn": "তারা কি পৃথিবীতে ভ্রমণ করেনি?",
    "nameAr": "يَسِيرُوا۟ فِى ٱلْأَرْضِ فَيَنظُرُوا۟ كَيْفَ كَانَ عَٰقِبَةُ ٱلَّذِينَ",
    "descEn": "\"…travel the earth and see how was the end of those before them\" occurs in six verses. Three begin with a-fa-lam (12:109, 40:82, 47:10) and three with a-wa-lam (30:9, 35:44, 40:21); 40:21 alone inserts an extra \"kānū\" before \"min qablihim\". What follows differs each time — from \"they were greater in strength\" to \"Allah destroyed them utterly\" — so the opening particle and the continuation are both easy to mix up.",
    "descBn": "\"…পৃথিবীতে ভ্রমণ করে দেখেনি তাদের আগের লোকদের পরিণাম কেমন হয়েছিল\" — এই অংশ ছয়টি আয়াতে আসে। তিনটি শুরু হয় আ-ফা-লাম দিয়ে (১২:১০৯, ৪০:৮২, ৪৭:১০) এবং তিনটি আ-ওয়া-লাম দিয়ে (৩০:৯, ৩৫:৪৪, ৪০:২১); কেবল ৪০:২১-এ \"মিন কাবলিহিম\"-এর আগে অতিরিক্ত \"কানূ\" আছে। পরের অংশও প্রতিবার আলাদা: কোথাও \"তারা শক্তিতে প্রবলতর ছিল\", কোথাও \"আল্লাহ তাদের সম্পূর্ণ ধ্বংস করেছেন\"। তাই শুরুর শব্দ আর পরের অংশ, দুটোই গুলিয়ে ফেলা সহজ।",
    "verses": [
      "12:109",
      "30:9",
      "35:44",
      "40:21",
      "40:82",
      "47:10"
    ]
  },
  {
    "id": "mata-wad-refrain",
    "nameEn": "When Is This Promise?",
    "nameBn": "এই প্রতিশ্রুতি কবে?",
    "nameAr": "وَيَقُولُونَ مَتَىٰ هَٰذَا ٱلْوَعْدُ إِن كُنتُمْ صَٰدِقِينَ",
    "descEn": "The deniers' question \"And they say: when is this promise, if you are truthful?\" appears as a complete, word-for-word identical verse in six surahs: 10:48, 21:38, 27:71, 34:29, 36:48 and 67:25. Since the verse itself gives no distinguishing clue, memorizers must anchor each occurrence by the verses around it — the classic difficulty of this group.",
    "descBn": "অস্বীকারকারীদের প্রশ্ন \"আর তারা বলে: এই প্রতিশ্রুতি কবে, যদি তোমরা সত্যবাদী হও?\" সম্পূর্ণ ও শব্দে-শব্দে অভিন্ন আয়াত হিসেবে ছয়টি সূরায় আসে: ১০:৪৮, ২১:৩৮, ২৭:৭১, ৩৪:২৯, ৩৬:৪৮ ও ৬৭:২৫। আয়াতটি নিজে কোনো পার্থক্যসূচক সূত্র দেয় না বলে মুখস্থকারীদের প্রতিটি স্থান আশপাশের আয়াত দিয়ে মনে রাখতে হয়। এটিই এই গুচ্ছের মূল কঠিনতা।",
    "verses": [
      "10:48",
      "21:38",
      "27:71",
      "34:29",
      "36:48",
      "67:25"
    ]
  },
  {
    "id": "wali-nasir-besides-him",
    "nameEn": "No Protector nor Helper Besides Allah",
    "nameBn": "আল্লাহ ছাড়া কোনো অভিভাবক নেই, সাহায্যকারীও নেই",
    "nameAr": "وَمَا لَكُم مِّن دُونِ ٱللَّهِ مِن وَلِىٍّ وَلَا",
    "descEn": "\"And you have, besides Allah, no protector and no helper\" ends four verses. In 2:107 and 9:116 it follows mention of His dominion over the heavens and the earth; in 29:22 and 42:31 it follows \"you cannot cause failure in the earth\", where 29:22 alone adds \"nor in the heaven\". The two pairs mirror each other, so recalling which frame a verse uses takes care.",
    "descBn": "\"আর আল্লাহ ছাড়া তোমাদের কোনো অভিভাবক নেই, কোনো সাহায্যকারীও নেই\" — এই সমাপ্তি চারটি আয়াতে আসে। ২:১০৭ ও ৯:১১৬-এ এটি আসমান-জমিনে তাঁর রাজত্বের উল্লেখের পরে; ২৯:২২ ও ৪২:৩১-এ \"তোমরা পৃথিবীতে (তাঁকে) অক্ষম করতে পারবে না\"-এর পরে, যেখানে কেবল ২৯:২২-এ \"আসমানেও না\" যুক্ত আছে। জোড়া দুটি পরস্পরের প্রতিবিম্ব, তাই কোন আয়াতে কোন কাঠামো তা মনে রাখতে সতর্কতা লাগে।",
    "verses": [
      "2:107",
      "9:116",
      "29:22",
      "42:31"
    ]
  },
  {
    "id": "haqa-bihim-endings",
    "nameEn": "What They Mocked Engulfed Them",
    "nameBn": "যা নিয়ে তারা ঠাট্টা করত তা-ই তাদের ঘিরে ফেলল",
    "nameAr": "وَحَاقَ بِهِم مَّا كَانُوا۟ بِهِۦ يَسْتَهْزِءُونَ",
    "descEn": "\"And what they used to mock engulfed them\" closes six verses: 11:8, 16:34, 39:48, 40:83, 45:33 and 46:26. The lead-ins are the confusable part: 16:34 has \"the evils of what they did struck them\", 39:48 \"the evils of what they earned appeared to them\", and 45:33 \"the evils of what they did appeared to them\" — three near-identical clauses differing in one verb each.",
    "descBn": "\"আর তারা যা নিয়ে ঠাট্টা করত তা-ই তাদের ঘিরে ফেলল\" — এই সমাপ্তি ছয়টি আয়াতে আসে: ১১:৮, ১৬:৩৪, ৩৯:৪৮, ৪০:৮৩, ৪৫:৩৩ ও ৪৬:২৬। বিভ্রান্তিকর অংশ হলো আগের বাক্যগুলো: ১৬:৩৪-এ \"তাদের কৃতকর্মের মন্দ ফল তাদের আঘাত করল\", ৩৯:৪৮-এ \"তাদের অর্জনের মন্দ ফল তাদের সামনে প্রকাশ পেল\", আর ৪৫:৩৩-এ \"তাদের কৃতকর্মের মন্দ ফল তাদের সামনে প্রকাশ পেল\"। প্রায় অভিন্ন তিনটি বাক্য, প্রতিটিতে কেবল একটি ক্রিয়া ভিন্ন।",
    "verses": [
      "11:8",
      "16:34",
      "39:48",
      "40:83",
      "45:33",
      "46:26"
    ]
  },
  {
    "id": "man-yudlil-la-hadi",
    "nameEn": "Whom Allah Leaves Astray Has No Guide",
    "nameBn": "আল্লাহ যাকে পথভ্রষ্ট করেন তার কোনো পথপ্রদর্শক নেই",
    "nameAr": "وَمَن يُضْلِلِ ٱللَّهُ فَمَا لَهُۥ مِنْ هَادٍ",
    "descEn": "\"And whomever Allah leaves astray — for him there is no guide\" ends four verses: 13:33, 39:23, 39:36 and 40:33. Two of the four sit in the same surah (39), separated by only thirteen verses, which is exactly where memorizers slip: the preceding contexts — the best of speech, sufficiency for His servant, fleeing on the Day with no defender — must be kept apart.",
    "descBn": "\"আর আল্লাহ যাকে পথভ্রষ্ট করেন, তার জন্য কোনো পথপ্রদর্শক নেই\": এই সমাপ্তি চারটি আয়াতে এসেছে (১৩:৩৩, ৩৯:২৩, ৩৯:৩৬ ও ৪০:৩৩)। চারটির দুটি একই সূরায় (৩৯), মাঝে মাত্র তেরো আয়াতের ব্যবধান। ঠিক এখানেই মুখস্থে ভুল হয়। তাই আগের প্রসঙ্গগুলো আলাদা করে মনে রাখতে হয়: সর্বোত্তম বাণী, বান্দার জন্য আল্লাহই যথেষ্ট, আর বিচার দিনে রক্ষাকারী ছাড়া পালানো।",
    "verses": [
      "13:33",
      "39:23",
      "39:36",
      "40:33"
    ]
  },
  {
    "id": "yudkhilu-jannat-anhar",
    "nameEn": "He Admits the Believers into Gardens",
    "nameBn": "তিনি মুমিনদের জান্নাতে প্রবেশ করাবেন",
    "nameAr": "إِنَّ ٱللَّهَ يُدْخِلُ ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ جَنَّٰتٍ",
    "descEn": "Three verses — 22:14, 22:23 and 47:12 — open with the same twelve words: \"Indeed Allah admits those who believe and do righteous deeds into gardens beneath which rivers flow.\" The endings then diverge completely: \"Allah does what He wills\" (22:14), adornment with gold bracelets, pearls and silk (22:23), and a contrast with the disbelievers who eat as cattle eat (47:12). Two of the three are in the same surah, sharpening the confusion.",
    "descBn": "তিনটি আয়াত (২২:১৪, ২২:২৩ ও ৪৭:১২) শুরু হয়েছে একই বারোটি শব্দে: \"নিশ্চয়ই আল্লাহ ঈমানদার ও সৎকর্মশীলদের এমন জান্নাতে প্রবেশ করাবেন যার তলদেশে নদী প্রবাহিত।\" এরপর শেষ অংশ পুরো আলাদা: \"আল্লাহ যা চান তা-ই করেন\" (২২:১৪); সোনার কাঁকন, মুক্তা ও রেশমের সাজ (২২:২৩); আর কাফিরদের সঙ্গে তুলনা, যারা পশুর মতো খায় (৪৭:১২)। তিনটির দুটি একই সূরায়, তাই বিভ্রান্তি আরও বেশি।",
    "verses": [
      "22:14",
      "22:23",
      "47:12"
    ]
  },
  {
    "id": "sittat-ayyam-arsh",
    "nameEn": "Six Days, Then upon the Throne",
    "nameBn": "ছয় দিনে সৃষ্টি, অতঃপর আরশে সমাসীন",
    "nameAr": "فِى سِتَّةِ أَيَّامٍ ثُمَّ ٱسْتَوَىٰ عَلَى ٱلْعَرْشِ",
    "descEn": "\"…created the heavens and the earth in six days, then established Himself upon the Throne\" appears in five verses. 25:59 and 32:4 insert \"and whatever is between them\" before \"in six days\"; the openers differ — \"Indeed your Lord is Allah who\" (7:54, 10:3), \"the One who\" (25:59), \"Allah is the One who\" (32:4), \"He is the One who\" (57:4) — and each verse continues with a different clause about His governance.",
    "descBn": "\"…আসমান ও জমিন ছয় দিনে সৃষ্টি করেছেন, অতঃপর আরশে সমাসীন হয়েছেন\": এ কথা পাঁচটি আয়াতে এসেছে। ২৫:৫৯ ও ৩২:৪-এ \"ছয় দিনে\"-র আগে যোগ হয়েছে \"এবং এ দুয়ের মাঝে যা আছে\"। শুরুও আলাদা: \"নিশ্চয়ই তোমাদের প্রতিপালক আল্লাহ, যিনি\" (৭:৫৪, ১০:৩), \"যিনি\" (২৫:৫৯), \"আল্লাহ, যিনি\" (৩২:৪), \"তিনিই, যিনি\" (৫৭:৪)। আর প্রতিটি আয়াত এরপর তাঁর পরিচালনা নিয়ে ভিন্ন ভিন্ন কথা বলে।",
    "verses": [
      "7:54",
      "10:3",
      "25:59",
      "32:4",
      "57:4"
    ]
  },
  {
    "id": "yuliju-layl-nahar",
    "nameEn": "He Merges Night into Day",
    "nameBn": "তিনি রাতকে দিনে প্রবেশ করান",
    "nameAr": "يُولِجُ ٱلَّيْلَ فِى ٱلنَّهَارِ وَيُولِجُ ٱلنَّهَارَ فِى ٱلَّيْلِ",
    "descEn": "\"He merges the night into the day and merges the day into the night\" occurs in four verses. 22:61 introduces it with \"that is because Allah\" and 31:29 with \"do you not see that Allah\", while 35:13 and 57:6 open the verse with it directly. 31:29 and 35:13 then continue almost identically about the sun and moon running to an appointed term — differing only in \"ilā ajalin\" versus \"li-ajalin\" — before ending differently.",
    "descBn": "\"তিনি রাতকে দিনে প্রবেশ করান এবং দিনকে রাতে প্রবেশ করান\": এ কথা চারটি আয়াতে এসেছে। ২২:৬১-এ এর আগে আছে \"এটা এজন্য যে আল্লাহ\", ৩১:২৯-এ \"তুমি কি দেখো না যে আল্লাহ\"; আর ৩৫:১৩ ও ৫৭:৬ সরাসরি এ কথা দিয়েই শুরু। এরপর ৩১:২৯ ও ৩৫:১৩ প্রায় একইভাবে বলে, সূর্য ও চাঁদ নির্ধারিত মেয়াদ পর্যন্ত চলছে; পার্থক্য কেবল \"ইলা আজালিন\" বনাম \"লি-আজালিন\"। তারপর দুটির শেষ আলাদা।",
    "verses": [
      "22:61",
      "31:29",
      "35:13",
      "57:6"
    ]
  },
  {
    "id": "yakhtalifun-qiyamah",
    "nameEn": "He Will Judge Their Differences on Resurrection Day",
    "nameBn": "কিয়ামতের দিন তিনি তাদের মতভেদের ফয়সালা করবেন",
    "nameAr": "بَيْنَهُمْ يَوْمَ ٱلْقِيَٰمَةِ فِيمَا كَانُوا۟ فِيهِ يَخْتَلِفُونَ",
    "descEn": "\"…between them on the Day of Resurrection concerning that over which they used to differ\" ends five verses, but the governing verb changes each time: \"Allah will judge\" (2:113), \"your Lord will decide\" (10:93 and 45:17), \"your Lord will surely judge\" (16:124), and \"your Lord will separate\" (32:25). Keeping the right verb with the right verse is the classic trap of this set.",
    "descBn": "\"…কিয়ামতের দিন তাদের মধ্যে, যে বিষয়ে তারা মতভেদ করত\" — এই সমাপ্তি পাঁচটি আয়াতে আসে, কিন্তু মূল ক্রিয়াটি প্রতিবার বদলায়: \"আল্লাহ বিচার করবেন\" (২:১১৩), \"তোমার প্রতিপালক ফয়সালা করবেন\" (১০:৯৩ ও ৪৫:১৭), \"তোমার প্রতিপালক অবশ্যই বিচার করবেন\" (১৬:১২৪), এবং \"তোমার প্রতিপালক পৃথক করে দেবেন\" (৩২:২৫)। সঠিক আয়াতের সঙ্গে সঠিক ক্রিয়া মেলানোই এই গুচ্ছের চিরচেনা ফাঁদ।",
    "verses": [
      "2:113",
      "10:93",
      "16:124",
      "32:25",
      "45:17"
    ]
  },
  {
    "id": "yabsutu-rizq",
    "nameEn": "He Extends and Restricts Provision",
    "nameBn": "তিনি রিজিক প্রশস্ত করেন ও সংকুচিত করেন",
    "nameAr": "يَبْسُطُ ٱلرِّزْقَ لِمَن يَشَآءُ وَيَقْدِرُ",
    "descEn": "\"…extends provision for whom He wills and restricts\" recurs in six verses with shifting frames: \"Allah extends\" (13:26), \"indeed your Lord extends\" (17:30), \"my Lord extends\" (34:36), \"have they not seen that Allah…\" (30:37), \"do they not know that Allah…\" (39:52), and with no introduction after \"His are the keys of the heavens and the earth\" (42:12). 30:37 and 39:52 even share the same ending, \"surely in that are signs for people who believe\", differing only in their opening verb.",
    "descBn": "\"…যাকে ইচ্ছা তার জন্য রিজিক প্রশস্ত করেন এবং সংকুচিত করেন\" — ছয়টি আয়াতে ভিন্ন ভিন্ন কাঠামোয় ফিরে আসে: \"আল্লাহ প্রশস্ত করেন\" (১৩:২৬), \"নিশ্চয়ই তোমার প্রতিপালক প্রশস্ত করেন\" (১৭:৩০), \"আমার প্রতিপালক প্রশস্ত করেন\" (৩৪:৩৬), \"তারা কি দেখেনি যে আল্লাহ…\" (৩০:৩৭), \"তারা কি জানে না যে আল্লাহ…\" (৩৯:৫২), এবং \"আসমান-জমিনের চাবিসমূহ তাঁরই\"-এর পরে কোনো ভূমিকা ছাড়াই (৪২:১২)। ৩০:৩৭ আর ৩৯:৫২-এর শেষটাও এক: \"নিশ্চয়ই এতে মুমিন সম্প্রদায়ের জন্য নিদর্শন রয়েছে\"। তফাত শুধু শুরুর ক্রিয়ায়।",
    "verses": [
      "13:26",
      "17:30",
      "30:37",
      "34:36",
      "39:52",
      "42:12"
    ]
  },
  {
    "id": "kun-fayakun-qada",
    "nameEn": "When He Decrees a Matter: Be, and It Is",
    "nameBn": "তিনি কিছু সিদ্ধান্ত করলে বলেন: হও, আর তা হয়ে যায়",
    "nameAr": "قَضَىٰٓ أَمْرًا فَإِنَّمَا يَقُولُ لَهُۥ كُن فَيَكُونُ",
    "descEn": "\"When He decrees a matter, He only says to it: Be — and it is\" closes four verses: 2:117, 3:47, 19:35 and 40:68. The lead-in varies: 2:117 has \"wa-idhā\", 3:47 and 19:35 have \"idhā\", while 40:68 alone has \"fa-idhā\". The settings differ — the Originator of the heavens and the earth (2:117), the announcement of a son to Maryam (3:47), the denial that Allah takes a son (19:35), and He who gives life and death (40:68).",
    "descBn": "\"তিনি যখন কোনো বিষয়ের সিদ্ধান্ত নেন, তখন কেবল বলেন: হও, আর তা হয়ে যায়।\" এই সমাপ্তি চারটি আয়াতে এসেছে (২:১১৭, ৩:৪৭, ১৯:৩৫ ও ৪০:৬৮)। শুরুর অব্যয় ভিন্ন: ২:১১৭-এ \"ওয়া-ইযা\", ৩:৪৭ ও ১৯:৩৫-এ \"ইযা\", আর কেবল ৪০:৬৮-তে \"ফা-ইযা\"। প্রেক্ষাপটও আলাদা: আসমান-জমিনের উদ্ভাবক (২:১১৭), মারইয়ামকে পুত্রের সুসংবাদ (৩:৪৭), আল্লাহ সন্তান গ্রহণ করেন, এই দাবির খণ্ডন (১৯:৩৫), আর যিনি জীবন ও মৃত্যু দেন (৪০:৬৮)।",
    "verses": [
      "2:117",
      "3:47",
      "19:35",
      "40:68"
    ]
  },
  {
    "id": "dalla-anhum-iftira",
    "nameEn": "What They Invented Abandoned Them",
    "nameBn": "তাদের বানোয়াট বিষয়গুলো তাদের ছেড়ে উধাও হলো",
    "nameAr": "وَضَلَّ عَنْهُم مَّا كَانُوا۟ يَفْتَرُونَ",
    "descEn": "\"And lost from them was what they used to invent\" ends six verses: 6:24, 7:53, 10:30, 11:21, 16:87 and 28:75. Just before the phrase, 7:53 and 11:21 share the same clause \"they have lost themselves\", while the other four lead in differently — lying against themselves, being returned to Allah, offering submission, or being told to bring their proof — making the pair 7:53/11:21 the most confusable.",
    "descBn": "\"আর তারা যা বানিয়ে বলত, তা তাদের থেকে উধাও হয়ে গেল।\" এই সমাপ্তি ছয়টি আয়াতে এসেছে (৬:২৪, ৭:৫৩, ১০:৩০, ১১:২১, ১৬:৮৭ ও ২৮:৭৫)। বাক্যাংশটির ঠিক আগে ৭:৫৩ ও ১১:২১-এ একই কথা আছে: \"তারা নিজেদেরই ক্ষতি করেছে\"। বাকি চারটির আগের অংশ ভিন্ন: নিজেদের বিরুদ্ধে মিথ্যা বলা, আল্লাহর কাছে ফিরিয়ে আনা, আত্মসমর্পণ পেশ করা, কিংবা প্রমাণ হাজির করতে বলা। তাই ৭:৫৩/১১:২১ জোড়াটিই সবচেয়ে বেশি গুলিয়ে যায়।",
    "verses": [
      "6:24",
      "7:53",
      "10:30",
      "11:21",
      "16:87",
      "28:75"
    ]
  },
  {
    "id": "sabbar-shakur-signs",
    "nameEn": "Signs for Every Patient, Grateful One",
    "nameBn": "প্রত্যেক ধৈর্যশীল কৃতজ্ঞের জন্য নিদর্শন",
    "nameAr": "إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّكُلِّ صَبَّارٍ شَكُورٍ",
    "descEn": "\"Surely in that are signs for every steadfast, grateful one\" seals four verses: 14:5, 31:31, 34:19 and 42:33. In 31:31 and 42:33 it follows ships moving on the sea; in 14:5 it follows Mūsā being sent to bring his people out of darkness into light; in 34:19 it follows a people torn apart for their wrongdoing. The identical ending across four unrelated scenes is what trips up memorizers.",
    "descBn": "\"নিশ্চয়ই এতে প্রত্যেক পরম ধৈর্যশীল, পরম কৃতজ্ঞের জন্য নিদর্শন রয়েছে\" — এই সমাপ্তি চারটি আয়াতে আসে: ১৪:৫, ৩১:৩১, ৩৪:১৯ ও ৪২:৩৩। ৩১:৩১ ও ৪২:৩৩-এ এটি সমুদ্রে চলমান নৌযানের বর্ণনার পরে; ১৪:৫-এ মূসাকে তাঁর জাতিকে অন্ধকার থেকে আলোতে আনতে পাঠানোর পরে; ৩৪:১৯-এ অন্যায়ের কারণে ছিন্নভিন্ন এক জাতির বর্ণনার পরে। চারটি সম্পর্কহীন দৃশ্যে হুবহু এক সমাপ্তিই মুখস্থকারীদের হোঁচটের কারণ।",
    "verses": [
      "14:5",
      "31:31",
      "34:19",
      "42:33"
    ]
  },
  // v159 additions — 15 data-mined groups round 2 (2026-07-28)
  {
    "id": "bala-min-rabbikum",
    "nameEn": "Deliverance from Pharaoh — a Great Trial",
    "nameBn": "ফিরআউন থেকে মুক্তি — মহাপরীক্ষা",
    "nameAr": "أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ وَفِى ذَٰلِكُم بَلَآءٌ مِّن رَّبِّكُمْ",
    "descEn": "Three retellings of the rescue from the people of Pharaoh end with the same nine-word run \"…abnāʾakum wa-yastaḥyūna nisāʾakum wa-fī dhālikum balāʾun min rabbikum ʿaẓīm\". The killing verb differs: yudhabbiḥūna in 2:49, yuqattilūna in 7:141, and wa-yudhabbiḥūna in 14:6, where the whole clause is quoted inside Musa’s speech to his people.",
    "descBn": "ফিরআউনের লোকদের থেকে মুক্তির তিনটি বর্ণনা একই নয়-শব্দের ধারা \"…আবনাআকুম ওয়া-ইয়াসতাহইয়ূনা নিসাআকুম ওয়া-ফী যালিকুম বালাউম মির রাব্বিকুম আযীম\" দিয়ে শেষ হয়। হত্যার ক্রিয়াপদ ভিন্ন: ২:৪৯-এ ইউযাব্বিহূনা, ৭:১৪১-এ ইউকাত্তিলূনা, আর ১৪:৬-এ ওয়া-ইউযাব্বিহূনা — সেখানে পুরো বাক্যটি মূসা (আ.)-এর নিজ জাতির প্রতি ভাষণের ভেতরে উদ্ধৃত।",
    "verses": [
      "2:49",
      "7:141",
      "14:6"
    ]
  },
  {
    "id": "lan-tughniya-amwal",
    "nameEn": "Wealth and Children Will Not Avail",
    "nameBn": "ধন-সম্পদ ও সন্তান কাজে আসবে না",
    "nameAr": "لَن تُغْنِىَ عَنْهُمْ أَمْوَٰلُهُمْ وَلَآ أَوْلَٰدُهُم مِّنَ ٱللَّهِ",
    "descEn": "Three verses share the run \"lan tughniya ʿanhum amwāluhum wa-lā awlāduhum mina llāhi shayʾan\". 3:10 ends \"wa-ulāʾika hum waqūdu n-nār\", while 3:116 and 58:17 both end \"aṣḥābu n-nāri hum fīhā khālidūn\"; 58:17 alone omits the opening \"inna lladhīna kafarū\".",
    "descBn": "তিনটি আয়াতে \"লান তুগনিয়া আনহুম আমওয়ালুহুম ওয়া-লা আওলাদুহুম মিনাল্লাহি শাইআ\" ধারাটি অভিন্ন। ৩:১০ শেষ হয় \"ওয়া-উলাইকা হুম ওয়াকূদুন-নার\" দিয়ে, আর ৩:১১৬ ও ৫৮:১৭ উভয়েই শেষ হয় \"আসহাবুন-নারি হুম ফীহা খালিদূন\" দিয়ে; কেবল ৫৮:১৭-এ শুরুর \"ইন্নাল্লাযীনা কাফারূ\" নেই।",
    "verses": [
      "3:10",
      "3:116",
      "58:17"
    ]
  },
  {
    "id": "man-lam-yahkum",
    "nameEn": "Whoever Does Not Judge by What Allah Revealed",
    "nameBn": "আল্লাহর নাযিলকৃত বিধানে ফয়সালা না করলে",
    "nameAr": "وَمَن لَّمْ يَحْكُم بِمَآ أَنزَلَ ٱللَّهُ فَأُو۟لَٰٓئِكَ هُمُ",
    "descEn": "Three consecutive-passage verses of Surah al-Māʾidah close with the identical run \"wa-man lam yaḥkum bimā anzala llāhu fa-ulāʾika humu…\" — only the final word changes: al-kāfirūn (5:44), aẓ-ẓālimūn (5:45), al-fāsiqūn (5:47).",
    "descBn": "সূরা মায়িদার একই অনুচ্ছেদের তিনটি আয়াত অভিন্ন ধারা \"ওয়া-মান লাম ইয়াহকুম বিমা আনযালাল্লাহু ফা-উলাইকা হুমু…\" দিয়ে শেষ হয় — কেবল শেষ শব্দটি বদলায়: আল-কাফিরূন (৫:৪৪), আয-যালিমূন (৫:৪৫), আল-ফাসিকূন (৫:৪৭)।",
    "verses": [
      "5:44",
      "5:45",
      "5:47"
    ]
  },
  {
    "id": "inni-akhafu-asaytu",
    "nameEn": "\"I Fear the Punishment of a Great Day\"",
    "nameBn": "\"আমি এক মহাদিবসের শাস্তির ভয় করি\"",
    "nameAr": "إِنِّىٓ أَخَافُ إِنْ عَصَيْتُ رَبِّى عَذَابَ يَوْمٍ عَظِيمٍ",
    "descEn": "The declaration \"innī akhāfu in ʿaṣaytu rabbī ʿadhāba yawmin ʿaẓīm\" appears three times. 6:15 and 39:13 are word-for-word identical whole verses beginning with \"qul\"; in 10:15 the same eight-word clause closes a long verse answering those who demanded a different Qur’an.",
    "descBn": "\"ইন্নী আখাফু ইন আসাইতু রাব্বী আযাবা ইয়াওমিন আযীম\" ঘোষণাটি তিনবার এসেছে। ৬:১৫ ও ৩৯:১৩ \"কুল\" দিয়ে শুরু হওয়া শব্দে-শব্দে অভিন্ন পূর্ণ আয়াত; আর ১০:১৫-এ একই আট-শব্দের বাক্যাংশ ভিন্ন কুরআন দাবিকারীদের জবাব দেওয়া এক দীর্ঘ আয়াতের সমাপ্তিতে এসেছে।",
    "verses": [
      "6:15",
      "10:15",
      "39:13"
    ]
  },
  {
    "id": "akinnah-waqra",
    "nameEn": "Coverings on Hearts, Deafness in Ears",
    "nameBn": "অন্তরে আবরণ, কানে বধিরতা",
    "nameAr": "عَلَىٰ قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِىٓ ءَاذَانِهِمْ وَقْرًا",
    "descEn": "Three verses share the run \"jaʿalnā ʿalā qulūbihim akinnatan an yafqahūhu wa-fī ādhānihim waqrā\". 6:25 and 17:46 open it with \"wa-jaʿalnā\", 18:57 with \"innā jaʿalnā\"; what follows differs each time — disputing deniers (6:25), turning away at the mention of the Lord alone (17:46), never accepting guidance (18:57).",
    "descBn": "তিনটি আয়াতে \"জাআলনা আলা কুলূবিহিম আকিন্নাতান আঁই-ইয়াফকাহূহু ওয়া-ফী আযানিহিম ওয়াকরা\" ধারাটি অভিন্ন। ৬:২৫ ও ১৭:৪৬-এ শুরুটা \"ওয়া-জাআলনা\", ১৮:৫৭-এ \"ইন্না জাআলনা\"; এরপরের অংশ প্রতিবারই ভিন্ন — বিতর্ককারী অস্বীকারকারীরা (৬:২৫), এক রবের উল্লেখে পিঠ ফিরিয়ে চলে যাওয়া (১৭:৪৬), কখনো হিদায়াত গ্রহণ না করা (১৮:৫৭)।",
    "verses": [
      "6:25",
      "17:46",
      "18:57"
    ]
  },
  {
    "id": "yujadilu-bighayri-ilm",
    "nameEn": "Disputing about Allah without Knowledge",
    "nameBn": "জ্ঞান ছাড়া আল্লাহ সম্পর্কে বিতর্ক",
    "nameAr": "وَمِنَ ٱلنَّاسِ مَن يُجَٰدِلُ فِى ٱللَّهِ بِغَيْرِ عِلْمٍ",
    "descEn": "The run \"wa-mina n-nāsi man yujādilu fī llāhi bi-ghayri ʿilm\" occurs three times. In 22:3 it continues \"wa-yattabiʿu kulla shayṭānin marīd\", while 22:8 and 31:20 share the longer continuation \"wa-lā hudan wa-lā kitābin munīr\" — in 31:20 the clause comes at the end of the verse.",
    "descBn": "\"ওয়া-মিনান-নাসি মাঁই-ইউজাদিলু ফিল্লাহি বিগাইরি ইলম\" ধারাটি তিনবার এসেছে। ২২:৩-এ এর পরে \"ওয়া-ইয়াত্তাবিউ কুল্লা শাইতানিম মারীদ\", আর ২২:৮ ও ৩১:২০ দীর্ঘতর ধারাবাহিকতা \"ওয়া-লা হুদাওঁ ওয়া-লা কিতাবিম মুনীর\" ভাগ করে নেয় — ৩১:২০-এ বাক্যাংশটি আয়াতের শেষে এসেছে।",
    "verses": [
      "22:3",
      "22:8",
      "31:20"
    ]
  },
  {
    "id": "kulli-mathal-quran",
    "nameEn": "Every Kind of Example in This Qur’an",
    "nameBn": "এই কুরআনে সব ধরনের দৃষ্টান্ত",
    "nameAr": "لِلنَّاسِ فِى هَٰذَا ٱلْقُرْءَانِ مِن كُلِّ مَثَلٍ",
    "descEn": "Three verses state \"wa-laqad … li-n-nāsi fī hādhā l-qurʾāni min kulli mathal\" with different verbs and endings: ṣarrafnā in 17:89 (ending \"most people refuse except disbelief\"), ḍarabnā in 30:58 (deniers call it falsehood) and 39:27 (ending \"laʿallahum yatadhakkarūn\").",
    "descBn": "তিনটি আয়াতে \"ওয়া-লাকাদ … লিন-নাসি ফী হাযাল-কুরআনি মিন কুল্লি মাসাল\" বলা হয়েছে, তবে ক্রিয়া ও সমাপ্তি ভিন্ন: ১৭:৮৯-এ সাররাফনা (শেষে \"অধিকাংশ মানুষ অস্বীকার ছাড়া মানে না\"), ৩০:৫৮ ও ৩৯:২৭-এ দারাবনা (৩০:৫৮-এ অস্বীকারকারীরা একে বাতিল বলে; ৩৯:২৭ শেষ হয় \"লাআল্লাহুম ইয়াতাযাক্কারূন\" দিয়ে)।",
    "verses": [
      "17:89",
      "30:58",
      "39:27"
    ]
  },
  {
    "id": "jawaba-qawmihi",
    "nameEn": "\"His People’s Only Answer Was…\"",
    "nameBn": "\"তার জাতির একমাত্র জবাব ছিল…\"",
    "nameAr": "كَانَ جَوَابَ قَوْمِهِۦٓ إِلَّآ أَن قَالُوٓا۟",
    "descEn": "Four verses share \"mā kāna jawāba qawmihī illā an qālū\" — with wa-mā only in 7:82 and fa-mā in the other three. The quoted answer varies: expel them (7:82), expel the family of Lūṭ (27:56), kill or burn him (29:24, about Ibrāhīm), and bring us Allah’s punishment (29:29).",
    "descBn": "চারটি আয়াতে \"মা কানা জাওয়াবা কাওমিহী ইল্লা আন কালূ\" অভিন্ন — কেবল ৭:৮২-এ ওয়া-মা, বাকি তিনটিতে ফা-মা। উদ্ধৃত জবাব ভিন্ন: তাদের বের করে দাও (৭:৮২), লূতের পরিবারকে বের করে দাও (২৭:৫৬), তাকে হত্যা করো বা পুড়িয়ে দাও (২৯:২৪, ইবরাহীম প্রসঙ্গে), আর আমাদের ওপর আল্লাহর শাস্তি নিয়ে এসো (২৯:২৯)।",
    "verses": [
      "7:82",
      "27:56",
      "29:24",
      "29:29"
    ]
  },
  {
    "id": "turab-nutfa-stages",
    "nameEn": "From Dust, Then a Drop, Then…",
    "nameBn": "মাটি থেকে, তারপর শুক্রবিন্দু, তারপর…",
    "nameAr": "مِن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ",
    "descEn": "Four creation verses share the run \"min turābin thumma min nuṭfatin thumma\", then diverge: \"fashioned you as a man\" (18:37), the full embryo-to-old-age sequence via ʿalaqah (22:5 and 40:67), and \"made you pairs\" (35:11).",
    "descBn": "সৃষ্টি-বিষয়ক চারটি আয়াতে \"মিন তুরাবিন সুম্মা মিন নুতফাতিন সুম্মা\" ধারাটি অভিন্ন, তারপর পথ আলাদা: \"তোমাকে পূর্ণ মানুষরূপে গড়লেন\" (১৮:৩৭), আলাকা হয়ে ভ্রূণ থেকে বার্ধক্য পর্যন্ত পূর্ণ ধারা (২২:৫ ও ৪০:৬৭), আর \"তোমাদের জোড়া জোড়া করলেন\" (৩৫:১১)।",
    "verses": [
      "18:37",
      "22:5",
      "35:11",
      "40:67"
    ]
  },
  {
    "id": "kafaru-wa-saddu",
    "nameEn": "Disbelieved and Averted from Allah’s Path",
    "nameBn": "কুফরি করেছে ও আল্লাহর পথে বাধা দিয়েছে",
    "nameAr": "ٱلَّذِينَ كَفَرُوا۟ وَصَدُّوا۟ عَن سَبِيلِ ٱللَّهِ",
    "descEn": "The run \"alladhīna kafarū wa-ṣaddū ʿan sabīli llāh\" recurs five times, three of them in Surah 47 (verses 1, 32, 34). The pronounced consequence differs each time: far astray (4:167), punishment upon punishment (16:88), deeds made lost (47:1), deeds nullified (47:32), no forgiveness for those who die as disbelievers (47:34).",
    "descBn": "\"আল্লাযীনা কাফারূ ওয়া-সাদ্দূ আন সাবীলিল্লাহ\" ধারাটি পাঁচবার এসেছে, যার তিনটি সূরা ৪৭-এ (আয়াত ১, ৩২, ৩৪)। ঘোষিত পরিণতি প্রতিবার ভিন্ন: সুদূর পথভ্রষ্টতা (৪:১৬৭), শাস্তির ওপর শাস্তি (১৬:৮৮), আমল বিনষ্ট (৪৭:১), আমল বাতিল (৪৭:৩২), কুফর অবস্থায় মৃত্যুবরণকারীদের ক্ষমা নেই (৪৭:৩৪)।",
    "verses": [
      "4:167",
      "16:88",
      "47:1",
      "47:32",
      "47:34"
    ]
  },
  {
    "id": "shaytan-aduww-mubin",
    "nameEn": "\"He Is to You a Clear Enemy\"",
    "nameBn": "\"সে তোমাদের প্রকাশ্য শত্রু\"",
    "nameAr": "ٱلشَّيْطَٰنِ إِنَّهُۥ لَكُمْ عَدُوٌّ مُّبِينٌ",
    "descEn": "Five verses end with the warning \"innahū lakum ʿaduwwun mubīn\" about Shayṭān. In exactly three (2:168, 2:208, 6:142) it follows \"wa-lā tattabiʿū khuṭuwāti sh-shayṭān\"; 36:60 instead has \"do not worship Shayṭān\" and 43:62 \"let not Shayṭān avert you\".",
    "descBn": "পাঁচটি আয়াত শাইতান সম্পর্কে \"ইন্নাহূ লাকুম আদুউউম মুবীন\" সতর্কবাণী দিয়ে শেষ হয়। ঠিক তিনটিতে (২:১৬৮, ২:২০৮, ৬:১৪২) এর আগে আছে \"ওয়া-লা তাত্তাবিঊ খুতুওয়াতিশ-শাইতান\"; ৩৬:৬০-এ বদলে \"শাইতানের ইবাদত কোরো না\" আর ৪৩:৬২-এ \"শাইতান যেন তোমাদের বাধা না দেয়\"।",
    "verses": [
      "2:168",
      "2:208",
      "6:142",
      "36:60",
      "43:62"
    ]
  },
  {
    "id": "kafaru-ahl-kitab",
    "nameEn": "Disbelievers among the People of the Book",
    "nameBn": "আহলে কিতাবের কাফিররা",
    "nameAr": "ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَٰبِ",
    "descEn": "The five-word run \"alladhīna kafarū min ahli l-kitāb\" recurs in five verses. In three of them (2:105, 98:1, 98:6) it is paired with \"al-mushrikīn\"; in Surah 59 it appears alone — once about their expulsion (59:2) and once quoted in the hypocrites’ promise (59:11).",
    "descBn": "পাঁচ-শব্দের ধারা \"আল্লাযীনা কাফারূ মিন আহলিল-কিতাব\" পাঁচটি আয়াতে এসেছে। এর তিনটিতে (২:১০৫, ৯৮:১, ৯৮:৬) এর সঙ্গে \"আল-মুশরিকীন\" যুক্ত; সূরা ৫৯-এ এটি একা এসেছে — একবার তাদের বহিষ্কার প্রসঙ্গে (৫৯:২) আর একবার মুনাফিকদের প্রতিশ্রুতির উদ্ধৃতিতে (৫৯:১১)।",
    "verses": [
      "2:105",
      "59:2",
      "59:11",
      "98:1",
      "98:6"
    ]
  },
  {
    "id": "atayna-musa-kitab",
    "nameEn": "\"We Certainly Gave Musa the Book\"",
    "nameBn": "\"আমি মূসাকে কিতাব দিয়েছি\"",
    "nameAr": "وَلَقَدْ ءَاتَيْنَا مُوسَى ٱلْكِتَٰبَ",
    "descEn": "Seven verses open with the same four-word run \"wa-laqad ātaynā mūsā l-kitāb\", then continue differently — successive messengers (2:87), Hārūn as helper (25:35), guidance for Banī Isrāʾīl (32:23), and more. 11:110 and 41:45 are word-for-word identical entire verses.",
    "descBn": "সাতটি আয়াত একই চার-শব্দের ধারা \"ওয়া-লাকাদ আতাইনা মূসাল-কিতাব\" দিয়ে শুরু হয়ে ভিন্নভাবে এগোয় — ধারাবাহিক রাসূলগণ (২:৮৭), সাহায্যকারী হিসেবে হারূন (২৫:৩৫), বনী ইসরাঈলের হিদায়াত (৩২:২৩) ইত্যাদি। ১১:১১০ ও ৪১:৪৫ শব্দে-শব্দে অভিন্ন পূর্ণ আয়াত।",
    "verses": [
      "2:87",
      "11:110",
      "23:49",
      "25:35",
      "28:43",
      "32:23",
      "41:45"
    ]
  },
  {
    "id": "anzala-sama-maa",
    "nameEn": "\"He Sent Down Water from the Sky\"",
    "nameBn": "\"তিনি আকাশ থেকে পানি বর্ষণ করলেন\"",
    "nameAr": "أَنزَلَ مِنَ ٱلسَّمَآءِ مَآءً",
    "descEn": "Seven rain verses here share the run \"anzala mina s-samāʾi māʾan\" (2:22, 14:32 and 20:53 have it too, after \"wa-\"). Three open with \"a-lam tara anna llāha\" (22:63, 35:27, 39:21); what the water brings differs — plants and orchards (6:99), flooding valleys (13:17), drink and pasture (16:10), revived earth (16:65), greenery (22:63), fruits of varied colours (35:27), springs and withering crops (39:21).",
    "descBn": "এখানকার বৃষ্টি-বিষয়ক সাতটি আয়াতে \"আনযালা মিনাস-সামাই মাআ\" ধারাটি অভিন্ন (২:২২, ১৪:৩২ ও ২০:৫৩-এও তা আছে, \"ওয়া\"-সহ)। তিনটি শুরু হয় \"আলাম তারা আন্নাল্লাহা\" দিয়ে (২২:৬৩, ৩৫:২৭, ৩৯:২১); পানি কী আনে তা ভিন্ন — উদ্ভিদ ও বাগান (৬:৯৯), উপত্যকা-প্লাবন (১৩:১৭), পানীয় ও চারণ (১৬:১০), মৃত ভূমির প্রাণ (১৬:৬৫), সবুজ ভূমি (২২:৬৩), বিচিত্র রঙের ফল (৩৫:২৭), ঝর্ণা ও শুকিয়ে যাওয়া ফসল (৩৯:২১)।",
    "verses": [
      "6:99",
      "13:17",
      "16:10",
      "16:65",
      "22:63",
      "35:27",
      "39:21"
    ]
  },
  {
    "id": "rasul-amin-refrain",
    "nameEn": "\"I Am to You a Trustworthy Messenger\"",
    "nameBn": "\"আমি তোমাদের জন্য বিশ্বস্ত রাসূল\"",
    "nameAr": "إِنِّى لَكُمْ رَسُولٌ أَمِينٌ",
    "descEn": "The clause \"innī lakum rasūlun amīn\" is an identical stand-alone verse five times in Surah ash-Shuʿarāʾ (verses 107, 125, 143, 162, 178), spoken in five prophet stories. In 44:18 the same four words close a longer verse: \"deliver to me the servants of Allah…\".",
    "descBn": "\"ইন্নী লাকুম রাসূলুন আমীন\" বাক্যটি সূরা শুআরায় পাঁচবার অভিন্ন স্বতন্ত্র আয়াত (আয়াত ১০৭, ১২৫, ১৪৩, ১৬২, ১৭৮), পাঁচটি নবী-কাহিনিতে উচ্চারিত। ৪৪:১৮-এ একই চারটি শব্দ এক দীর্ঘতর আয়াতের সমাপ্তি: \"আল্লাহর বান্দাদের আমার কাছে অর্পণ করো…\"।",
    "verses": [
      "26:107",
      "26:125",
      "26:143",
      "26:162",
      "26:178",
      "44:18"
    ]
  }
];
