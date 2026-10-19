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
    nameEn: 'Allāhu Lā Ilāha Illā Huwa — What Comes Next',
    nameBn: 'আল্লাহু লা ইলাহা ইল্লা হুয়া — এরপর কী আসে',
    nameAr: 'ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ',
    descEn: 'Eight ayat contain "Allāhu lā ilāha illā huwa", and six open with it. The words after it decide the ayah: al-Ḥayyu l-Qayyūm (3:2 stops there, 2:255 runs on), la-yajmaʿannakum (4:87), lahu l-asmāʾu l-ḥusnā (20:8), lahu l-ḥamdu (28:70), rabbu l-ʿarshi l-ʿaẓīm (27:26, also the close of 9:129), wa-ʿalā llāhi fa-l-yatawakkal (64:13). In 9:129 it follows ḥasbiya llāhu, in 28:70 wa-huwa llāhu.',
    descBn: 'আটটি আয়াতে আছে "আল্লাহু লা ইলাহা ইল্লা হুয়া", এর ছয়টির শুরুই এ কথা দিয়ে। আয়াত চেনা যায় পরের শব্দে: আল-হাইয়্যুল-কাইয়ূম (৩:২ সেখানেই শেষ, ২:২৫৫ এগিয়ে চলে), লাইয়াজমাআন্নাকুম (৪:৮৭), লাহুল-আসমাউল-হুসনা (২০:৮), লাহুল-হামদু (২৮:৭০), রাব্বুল-আরশিল-আযীম (২৭:২৬; ৯:১২৯-ও শেষ হয় এ কথায়), ওয়া আলাল্লাহি ফালইয়াতাওয়াক্কাল (৬৪:১৩)। ৯:১২৯-এ এর আগে আছে হাসবিয়াল্লাহু, ২৮:৭০-এ ওয়া হুয়াল্লাহু।',
    verses: ['2:255', '3:2', '4:87', '9:129', '20:8', '27:26', '28:70', '64:13']
  },
  {
    id: 'iblis-sajda',
    nameEn: 'Iblīs Refuses to Bow',
    nameBn: 'ইবলীসের সিজদা প্রত্যাখ্যান',
    nameAr: 'امتناع إبليس عن السجود',
    descEn: 'Exactly seven ayat contain "illā Iblīs". Five run the same from "qulnā li-l-malāʾikati sjudū li-ādama fa-sajadū illā Iblīs": 2:34, 17:61, 18:50, 20:116 open wa-idh, 7:11 opens wa-laqad khalaqnākum. 15:31 and 38:74 begin with it. Learn what follows: abā wa-stakbara (2:34), lam yakun (7:11), abā an yakūna (15:31), qāla (17:61), kāna mina l-jinn (18:50), abā (20:116), istakbara (38:74).',
    descBn: 'ঠিক সাতটি আয়াতে আছে "ইল্লা ইবলীস"। এর পাঁচটি "কুলনা লিল-মালাইকাতিসজুদূ লিআদামা ফাসাজাদূ ইল্লা ইবলীস" পর্যন্ত হুবহু এক: ২:৩৪, ১৭:৬১, ১৮:৫০ ও ২০:১১৬-এর শুরু ওয়া-ইয দিয়ে, ৭:১১-এর শুরু ওয়া লাকাদ খালাকনাকুম দিয়ে। ১৫:৩১ আর ৩৮:৭৪-এর শুরুই এ কথা দিয়ে। মনে রাখুন এরপর কী আসে: আবা ওয়াসতাকবারা (২:৩৪), লাম ইয়াকুন (৭:১১), আবা আন ইয়াকূনা (১৫:৩১), কালা (১৭:৬১), কানা মিনাল-জিন্ন (১৮:৫০), শুধু আবা (২০:১১৬), ইসতাকবারা (৩৮:৭৪)।',
    verses: ['2:34', '7:11', '15:31', '17:61', '18:50', '20:116', '38:74']
  },
  {
    id: 'khaliqun-basharan',
    nameEn: 'Innī Khāliqun Basharan — Adam Announced to the Angels',
    nameBn: 'ইন্নী খালিকুন বাশারান — ফেরেশতাদের কাছে আদমের ঘোষণা',
    nameAr: 'إِنِّى خَٰلِقٌۢ بَشَرًا',
    descEn: 'Al-Ḥijr 15:28-30 and Ṣād 38:71-73 tell the same scene in almost the same words: 15:29 = 38:72 and 15:30 = 38:73 word for word. The differences sit at the edges: wa-idh qāla (15:28) vs idh qāla (38:71), min ṣalṣālin min ḥamaʾin masnūn vs min ṭīn, and the next ayah, abā (15:31) vs istakbara (38:74). Al-Baqarah 2:30 opens the same way, then says jāʿilun fī l-arḍi khalīfa.',
    descBn: 'আল-হিজর ১৫:২৮-৩০ আর সোয়াদ ৩৮:৭১-৭৩ একই দৃশ্য বলেছে প্রায় একই শব্দে। ১৫:২৯ আর ৩৮:৭২ হুবহু এক, ১৫:৩০ আর ৩৮:৭৩-ও। পার্থক্য দুই প্রান্তে: শুরুতে ওয়া-ইয কালা (১৫:২৮) বনাম শুধু ইয কালা (৩৮:৭১), মিন সালসালিন মিন হামাইম মাসনূন বনাম মিন তীন। আর পরের আয়াতে আবা (১৫:৩১) বনাম ইসতাকবারা (৩৮:৭৪)। আল-বাকারা ২:৩০-এর শুরুও একই রকম, তবে এরপর আসে জাইলুন ফিল-আরদি খালীফা।',
    verses: ['2:30', '15:28', '15:29', '15:30', '38:71', '38:72', '38:73']
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
    nameEn: '"ʿAzīzun Ḥakīm" at Verse-End — Which Words Lead In',
    nameBn: '"আযীযুন হাকীম" দিয়ে আয়াতের শেষ — আগে কোন শব্দ',
    nameAr: 'العزيز الحكيم / العليم الحكيم',
    descEn: '47 ayat end with ʿazīz and ḥakīm together. A selection of pairs where only the lead-in changes: fa-ʿlamū anna llāha (2:209) vs wa-ʿlam (2:260); inna llāha (2:220, 8:10) vs wa-llāhu (2:228, 8:67); inna llāha kāna (4:56) vs wa-kāna llāhu (4:165); innahū (8:63). 3:126 and 8:10 are near twins: 3:126 adds lakum, has qulūbukum bihī for bihī qulūbukum, and closes differently. 8:71 has ʿalīmun ḥakīm.',
    descBn: '৪৭টি আয়াত শেষ হয় আযীয আর হাকীম একসাথে দিয়ে। এখানে বাছাই করা কয়েকটি জোড়া, যেখানে বদলায় শুধু আগের শব্দ: ফালামূ আন্নাল্লাহা (২:২০৯) বনাম ওয়ালাম (২:২৬০); ইন্নাল্লাহা (২:২২০, ৮:১০) বনাম ওয়াল্লাহু (২:২২৮, ৮:৬৭); ইন্নাল্লাহা কানা (৪:৫৬) বনাম ওয়া কানাল্লাহু (৪:১৬৫); ইন্নাহূ (৮:৬৩)। আলে ইমরান ৩:১২৬ আর আল-আনফাল ৮:১০ প্রায় যমজ। তবু ৩:১২৬-এ বাড়তি আছে \'লাকুম\', আর সেখানে \'কুলূবুকুম বিহী\', ৮:১০-এ \'বিহী কুলূবুকুম\'। শেষটাও আলাদা। আল-আনফাল ৮:৭১-এ আছে আলীমুন হাকীম।',
    verses: ['2:209', '2:220', '2:228', '2:260', '3:126', '4:56', '4:165', '8:10', '8:63', '8:67', '8:71']
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
    nameEn: 'Moses Sent with Our Signs to Pharaoh and His Chiefs',
    nameBn: 'নিদর্শনসহ ফেরাউন ও তার সভাসদদের কাছে মূসা',
    nameAr: 'موسى وفرعون',
    descEn: 'Moses is sent in look-alike frames. Hūd 11:96 and Ghāfir 40:23 are identical; the next ayah tells them apart: ilā Firʿawna wa-malaʾihī (11:97) or wa-Hāmāna (40:24). 14:5 and 43:46 share wa-laqad arsalnā Mūsā bi-āyātinā; 7:103 and 10:75 open thumma baʿathnā, 23:45 thumma arsalnā. The close: fa-stakbarū wa-kānū qawman mujrimīn (10:75, 7:133), qawman ʿālīn (23:46), kānū qawman fāsiqīn (28:32).',
    descBn: 'মূসা (আ)-কে পাঠানোর কথা কয়েকটি সূরায় এসেছে প্রায় একই কাঠামোয়। হুদ ১১:৯৬ আর গাফির ৪০:২৩ হুবহু এক। চেনা যায় পরের আয়াতে: ইলা ফিরআওনা ওয়া মালাইহী (১১:৯৭), নাকি ওয়া হামানা (৪০:২৪)। ১৪:৫ আর ৪৩:৪৬-এ আছে ওয়া লাকাদ আরসালনা মূসা বিআয়াতিনা। ৭:১০৩ আর ১০:৭৫-এর শুরু ছুম্মা বাআছনা, ২৩:৪৫-এর শুরু ছুম্মা আরসালনা। শেষটাতেও ভুল হয়: ১০:৭৫ আর ৭:১৩৩ শেষ হয় ফাসতাকবারূ ওয়া কানূ কাওমাম মুজরিমীন দিয়ে, ২৩:৪৬ কাওমান আলীন দিয়ে, ২৮:৩২ ইন্নাহুম কানূ কাওমান ফাসিকীন দিয়ে।',
    verses: ['7:103', '7:133', '10:75', '11:96', '11:97', '14:5', '23:45', '23:46', '28:32', '40:23', '40:24', '43:46']
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
    descEn: '"Alladhīna āmanū wa-ʿamilū ṣ-ṣāliḥāt" occurs in 50 ayat; these are the most easily swapped. First the opener: wa-lladhīna (2:82, 4:57, 4:122, 7:42, 29:7, 29:9, 29:58, 47:2) or inna lladhīna (10:9, 11:23, 31:8, 41:8, 85:11). Then the twins: 2:82, 7:42, 11:23 end ulāʾika aṣḥābu l-jannah; 4:57 and 4:122 share sa-nudkhiluhum … abadā; 29:7 and 47:2 the forgiven sins; 31:8, 41:8, 85:11 go on lahum.',
    descBn: '"আল্লাযীনা আমানূ ওয়া আমিলুস-সালিহাত" এসেছে ৫০টি আয়াতে। এখানে বাছাই করা হয়েছে সেগুলো, যেগুলো সবচেয়ে সহজে গুলিয়ে যায়। প্রথমে শুরুর শব্দ: ওয়াল্লাযীনা (২:৮২, ৪:৫৭, ৪:১২২, ৭:৪২, ২৯:৭, ২৯:৯, ২৯:৫৮, ৪৭:২), নাকি ইন্নাল্লাযীনা (১০:৯, ১১:২৩, ৩১:৮, ৪১:৮, ৮৫:১১)। তারপর যমজগুলো: ২:৮২, ৭:৪২ আর ১১:২৩ শেষ হয় উলাইকা আসহাবুল-জান্নাহ দিয়ে। ৪:৫৭ আর ৪:১২২-এ একই সানুদখিলুহুম … আবাদা। ২৯:৭ আর ৪৭:২-এ গুনাহ মোচনের কথা। ৩১:৮, ৪১:৮ আর ৮৫:১১-এ এরপর আসে লাহুম।',
    verses: ['2:82', '4:57', '4:122', '7:42', '10:9', '11:23', '29:7', '29:9', '29:58', '31:8', '41:8', '47:2', '85:11']
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
    nameEn: '"None Take Heed but People of Understanding" — Ulū l-Albāb Closings',
    nameBn: '"বোধসম্পন্নরাই উপদেশ নেয়" — উলুল-আলবাব দিয়ে আয়াতের শেষ',
    nameAr: 'يَذَّكَّرُ أُو۟لُوا۟ ٱلْأَلْبَٰبِ',
    descEn: 'Six ayat close with a verb of taking heed and "ulū l-albāb", and the frame around the verb is the trap. Al-Baqarah 2:269 and Āl ʿImrān 3:7: wa-mā yadhdhakkaru illā ulū l-albāb. Ar-Raʿd 13:19 and az-Zumar 39:9: innamā yatadhakkaru ulū l-albāb. Ibrāhīm 14:52: wa-li-yadhdhakkara ulū l-albāb. Ṣād 38:29: wa-li-yatadhakkara ulū l-albāb.',
    descBn: 'ছয়টি আয়াত শেষ হয় উপদেশ নেওয়ার একটি ক্রিয়া আর "উলুল-আলবাব" দিয়ে। ভুল হয় ক্রিয়াটির আশপাশে। আল-বাকারা ২:২৬৯ আর আলে ইমরান ৩:৭: ওয়া মা ইয়াযযাক্কারু ইল্লা উলুল-আলবাব। আর-রাদ ১৩:১৯ আর আয-যুমার ৩৯:৯: ইন্নামা ইয়াতাযাক্কারু উলুল-আলবাব। ইবরাহীম ১৪:৫২: ওয়া লিইয়াযযাক্কারা উলুল-আলবাব। সোয়াদ ৩৮:২৯: ওয়া লিইয়াতাযাক্কারা উলুল-আলবাব।',
    verses: ['2:269', '3:7', '13:19', '14:52', '38:29', '39:9']
  },

  // ── Wave 2 — 17 additional curated groups ────────────────────────────────

  {
    id: 'al-kahf-stories',
    nameEn: 'Wa-ḍrib Lahum Mathal — "Set Forth for Them a Parable"',
    nameBn: 'ওয়াদরিব লাহুম মাছাল — "তাদের সামনে উপমা পেশ করুন"',
    nameAr: 'وَٱضْرِبْ لَهُم مَّثَلًا',
    descEn: 'Three ayat open with the command "wa-ḍrib lahum". Two go on "mathalan" and name the example: two men (al-Kahf 18:32) or the people of the town (Yā Sīn 36:13). Al-Kahf 18:45 says "mathala l-ḥayāti d-dunyā", and after mathal ten more words match Yūnus 10:24, which opens innamā. After nabātu l-arḍ they part: fa-aṣbaḥa hashīman (18:45), mimmā yaʾkulu n-nās (10:24).',
    descBn: 'তিনটি আয়াতের শুরু একই আদেশে: "ওয়াদরিব লাহুম"। দুটিতে এরপর "মাছালান", তারপর উপমাটির নাম: দুই ব্যক্তি (আল-কাহফ ১৮:৩২), নয়তো এক জনপদের অধিবাসীরা (ইয়াসীন ৩৬:১৩)। আল-কাহফ ১৮:৪৫-এ আছে "মাছালাল-হায়াতিদ-দুনইয়া", আর মাছালের পরের দশটি শব্দ হুবহু মেলে ইউনুস ১০:২৪-এর সাথে। ইউনুসের আয়াতটির শুরু অবশ্য "ইন্নামা" দিয়ে। নাবাতুল-আরদের পরে দুটি আলাদা হয়ে যায়: ১৮:৪৫-এ ফাআসবাহা হাশীমান, ১০:২৪-এ মিম্মা ইয়াকুলুন-নাস।',
    verses: ['10:24', '18:32', '18:45', '36:13']
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
    nameEn: '"By the Night When…" — Night, Day and Dawn Oath Lines',
    nameBn: '"শপথ রাতের, যখন…" — রাত, দিন ও ভোরের শপথ',
    nameAr: 'وَٱلَّيْلِ إِذَا',
    descEn: 'Short sūrahs swear by the night, the day and the dawn in three-word lines that differ only in the verb. Night: idh adbar (74:33, idh not idhā), idhā ʿasʿas (81:17), idhā yasr (89:4), idhā yaghshāhā (91:4), idhā yaghshā (92:1), idhā sajā (93:2). Day: idhā jallāhā (91:3), idhā tajallā (92:2). Dawn: idhā asfar (74:34), idhā tanaffas (81:18).',
    descBn: 'ছোট সূরাগুলোতে রাত, দিন আর ভোরের শপথ এসেছে তিন শব্দের ছোট ছোট আয়াতে, পার্থক্য শুধু ক্রিয়ায়। রাত: ইয আদবার (৭৪:৩৩, এখানে ইযা নয়, ইয), ইযা আসআস (৮১:১৭), ইযা ইয়াসর (৮৯:৪), ইযা ইয়াগশাহা (৯১:৪), ইযা ইয়াগশা (৯২:১), ইযা সাজা (৯৩:২)। দিন: ইযা জাল্লাহা (৯১:৩), ইযা তাজাল্লা (৯২:২)। ভোর: ইযা আসফার (৭৪:৩৪), ইযা তানাফফাস (৮১:১৮)।',
    verses: ['74:33', '74:34', '81:17', '81:18', '89:4', '91:3', '91:4', '92:1', '92:2', '93:2']
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
    nameEn: 'Wujūhun Yawmaʾidhin — Faces on That Day (Sūrahs 75, 80, 88)',
    nameBn: 'উজূহুন ইয়াওমাইযিন — সেদিনের চেহারা (সূরা ৭৫, ৮০, ৮৮)',
    nameAr: 'وُجُوهٌ يَوْمَئِذٍ',
    descEn: 'Three sūrahs describe faces on the Last Day with the same two words, wujūhun yawmaʾidhin, and change only what follows: nāḍirah and bāsirah in al-Qiyāmah (75:22, 75:24), musfirah and ʿalayhā ghabarah in ʿAbasa (80:38, 80:40), khāshiʿah and nāʿimah in al-Ghāshiyah (88:2, 88:8). The phrase occurs nowhere else. Only al-Ghāshiyah puts punishment first and opens its second line without wa-.',
    descBn: 'কিয়ামতের দিনের চেহারার কথা তিনটি সূরায় শুরু হয় একই দুই শব্দে: উজূহুন ইয়াওমাইযিন। বদলায় শুধু পরের অংশ। আল-কিয়ামাহতে নাদিরাহ আর বাসিরাহ (৭৫:২২, ৭৫:২৪), আবাসায় মুসফিরাহ আর আলাইহা গাবারাহ (৮০:৩৮, ৮০:৪০), আল-গাশিয়াহতে খাশিআহ আর নাইমাহ (৮৮:২, ৮৮:৮)। পুরো কুরআনে কথাটি আছে কেবল এই ছয় জায়গায়। শুধু আল-গাশিয়াহ শাস্তির দিকটা আগে আনে, আর তার দ্বিতীয় আয়াতের শুরুতে \'ওয়া\' নেই।',
    verses: ['75:22', '75:24', '80:38', '80:40', '88:2', '88:8']
  },
  {
    id: 'waqia-ashab',
    nameEn: 'Al-Wāqiʿah — "Aṣḥābu … Mā Aṣḥābu …" Twin Lines',
    nameBn: 'আল-ওয়াকিআহ — "আসহাবু … মা আসহাবু …" যুগল আয়াত',
    nameAr: 'أَصْحَٰبُ ٱلْمَيْمَنَةِ وَأَصْحَٰبُ ٱلْيَمِينِ في الواقعة',
    descEn: 'Al-Wāqiʿah names the right and left companions twice in one frame, aṣḥābu X mā aṣḥābu X, with the noun said twice. The first time (56:8, 56:9) the words are al-maymanah and al-mashʾamah, and the right opens with fa-. The second time (56:27, 56:41) they are al-yamīn and ash-shimāl, and both open with wa-. The slip is putting one passage\'s words into the other.',
    descBn: 'আল-ওয়াকিআহ ডান ও বাম দলের নাম নেয় দুবার, একই ছাঁচে: আসহাবু অমুক, মা আসহাবু অমুক, নামটা দুবার। প্রথমবার (৫৬:৮, ৫৬:৯) শব্দ দুটি আল-মাইমানাহ আর আল-মাশআমাহ, আর ডান দলের আয়াত শুরু হয় \'ফা\' দিয়ে। দ্বিতীয়বার (৫৬:২৭, ৫৬:৪১) শব্দ দুটি আল-ইয়ামীন আর আশ-শিমাল, দুটোরই শুরু \'ওয়া\' দিয়ে। ভুলটা হয় এক অংশের শব্দ অন্য অংশে বসিয়ে দিলে।',
    verses: ['56:8', '56:9', '56:27', '56:41']
  },
  {
    id: 'wa-ma-tafarraqu',
    nameEn: '"Only After Knowledge Came" — Splitting and Differing',
    nameBn: '"জ্ঞান আসার পরেই" — বিভক্তি ও মতভেদ',
    nameAr: 'وَمَا تَفَرَّقُوا إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ الْعِلْمُ',
    descEn: 'Seven ayat say people split or differed once guidance came: min baʿdi mā jāʾa-humu (jāʾat-humu in 2:213, 2:253, 98:4). The verb: ikhtalafa (2:213, 3:19, 45:17), tafarraqa (42:14, 98:4), both (3:105), or iqtatala then ikhtalafū (2:253). What came: al-ʿilm (3:19, 42:14, 45:17), al-bayyināt (2:213, 2:253, 3:105), al-bayyinah (98:4). Baghyan baynahum follows in 2:213, 3:19, 42:14, 45:17.',
    descBn: 'এখানকার সাতটি আয়াত বলে, পথনির্দেশ পৌঁছে যাওয়ার পরে লোকেরা ভাগ হয়েছে বা মতভেদ করেছে; সঙ্গে আছে \'মিন বা\'দি মা জাআহুম\' (২:২১৩, ২:২৫৩ ও ৯৮:৪-এ \'জাআতহুমু\')। তিনটি জায়গা খেয়াল করুন। ক্রিয়া: ইখতালাফা (২:২১৩, ৩:১৯, ৪৫:১৭), তাফাররাকা (৪২:১৪, ৯৮:৪), দুটোই (৩:১০৫), আর ২:২৫৩-এ আগে ইকতাতালা, পরে ইখতালাফূ। কী এসেছিল: আল-ইলম (৩:১৯, ৪২:১৪, ৪৫:১৭), আল-বাইয়্যিনাত (২:২১৩, ২:২৫৩, ৩:১০৫), আল-বাইয়্যিনাহ (৯৮:৪)। আর পরে \'বাগইয়াম বাইনাহুম\' আছে কি না (২:২১৩, ৩:১৯, ৪২:১৪, ৪৫:১৭)।',
    verses: ['2:213', '2:253', '3:19', '3:105', '42:14', '45:17', '98:4']
  },
  {
    id: 'farraqu-dinahum',
    nameEn: '"Those Who Split Their Religion" — Al-Anʿām, Ar-Rūm & Al-Muʾminūn',
    nameBn: '"যারা নিজেদের দ্বীনকে ভাগ করেছে" — আল-আনআম, আর-রূম ও আল-মুমিনূন',
    nameAr: 'ٱلَّذِينَ فَرَّقُوا۟ دِينَهُمْ وَكَانُوا۟ شِيَعًا',
    descEn: 'Al-Anʿām 6:159 and ar-Rūm 30:32 share the five-word run alladhīna farraqū dīnahum wa-kānū shiyaʿan, found nowhere else. 6:159 opens inna lladhīna and goes on lasta minhum fī shayʾ. 30:32 opens mina lladhīna and ends kullu ḥizbin bi-mā ladayhim fariḥūn, word for word the close of al-Muʾminūn 23:53, where the split is told as fa-taqaṭṭaʿū amrahum baynahum zuburan.',
    descBn: 'পাঁচ শব্দের অংশ \'আল্লাযীনা ফাররাকূ দীনাহুম ওয়া কানূ শিয়াআন\' আছে কেবল আল-আনআম ৬:১৫৯ আর আর-রূম ৩০:৩২-এ। ৬:১৫৯ শুরু হয় \'ইন্নাল্লাযীনা\' দিয়ে, পরে আসে \'লাসতা মিনহুম ফী শাই\'। ৩০:৩২ শুরু হয় \'মিনাল্লাযীনা\' দিয়ে, শেষ হয় \'কুল্লু হিযবিম বিমা লাদাইহিম ফারিহূন\' দিয়ে। আল-মুমিনূন ২৩:৫৩-এর শেষটাও হুবহু এক, তবে সেখানে ভাগ হওয়ার কথাটা অন্য শব্দে: \'ফাতাকাত্তাঊ আমরাহুম বাইনাহুম যুবুরান\'।',
    verses: ['6:159', '23:53', '30:32']
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
    descEn: 'Al-Muʾminūn 23:1-11 and al-Maʿārij 70:22-35 list the believers\' traits in shared lines. 23:5-8 and 70:29-32 match word for word, so the risk is crossing into the other sūrah after that block. The prayer lines differ: fī ṣalātihim khāshiʿūn (23:2) against ʿalā ṣalātihim dāʾimūn (70:23), and ʿalā ṣalawātihim yuḥāfiẓūn (23:9) against ʿalā ṣalātihim yuḥāfiẓūn (70:34).',
    descBn: 'আল-মুমিনূনের ২৩:১ থেকে ২৩:১১ আর আল-মাআরিজের ৭০:২২ থেকে ৭০:৩৫ মুমিনদের গুণ গোনে প্রায় একই লাইনে। ২৩:৫ থেকে ২৩:৮ আর ৭০:২৯ থেকে ৭০:৩২ হুবহু এক। তাই এই অংশ শেষ করে অন্য সূরায় ঢুকে পড়ার ভয় থাকে। পার্থক্য নামাযের লাইনগুলোতে: ২৩:২-এ \'ফী সালাতিহিম খাশিঊন\', ৭০:২৩-এ \'আলা সালাতিহিম দাইমূন\'; ২৩:৯-এ \'আলা সালাওয়াতিহিম ইউহাফিযূন\', ৭০:৩৪-এ \'আলা সালাতিহিম ইউহাফিযূন\'।',
    verses: ['23:2', '23:5', '23:6', '23:7', '23:8', '23:9', '70:23', '70:29', '70:30', '70:31', '70:32', '70:34']
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
    descEn: 'Only three ayat open "wa-ttaqū yawman", all in al-Baqarah. 2:48 and 2:123 then match word for word up to shayʾan and share the close wa-lā hum yunṣarūn, but swap the middle: in 2:48 intercession is not accepted, then ransom is not taken; in 2:123 ransom is not accepted, then intercession does not benefit. 2:281 shares only the opener, then turjaʿūna fīhi ilā llāh.',
    descBn: '"ওয়াত্তাকূ ইয়াওমান" দিয়ে শুরু মাত্র তিনটি আয়াত, তিনটিই আল-বাকারায়। ২:৪৮ ও ২:১২৩ এরপর \'শাইআন\' পর্যন্ত হুবহু এক, শেষও একই: \'ওয়া লা হুম ইউনসারূন\'। বদলায় শুধু মাঝখানটা। ২:৪৮-এ আগে সুপারিশ কবুল হয় না, পরে বিনিময় নেওয়া হয় না; ২:১২৩-এ আগে বিনিময় কবুল হয় না, পরে সুপারিশ কাজে আসে না। ২:২৮১-এর মিল শুধু শুরুতে, তারপর \'তুরজাঊনা ফীহি ইলাল্লাহ\'।',
    verses: ['2:48', '2:123', '2:281']
  },
  {
    id: 'ibrahim-mecca-dua',
    nameEn: 'Ibrāhīm\'s Supplication for Mecca — The Subtle Twin',
    nameBn: 'মক্কার জন্য ইবরাহীমের দোয়া — সূক্ষ্ম পার্থক্যের যমজ',
    nameAr: 'دعاء إبراهيم لمكة بين البقرة وإبراهيم',
    descEn: 'Ibrāhīm\'s prayer for Mecca opens the same way in two sūrahs: rabbi jʿal hādhā baladan āminā in 2:126 (indefinite) and rabbi jʿal hādhā l-balada āminā in 14:35 (definite). Commentators tie this to two moments: before Mecca was a town and after. The fruits request right after it in 2:126, wa-rzuq ahlahū mina th-thamarāt, comes two ayat later in Ibrāhīm, in 14:37: wa-rzuqhum mina th-thamarāt.',
    descBn: 'মক্কার জন্য ইবরাহীমের দোয়া দুই সূরায় একইভাবে শুরু হয়। ২:১২৬-এ \'রাব্বিজআল হাযা বালাদান আমিনা\' (অনির্দিষ্ট), ১৪:৩৫-এ \'রাব্বিজআল হাযাল বালাদা আমিনা\' (নির্দিষ্ট)। মুফাসসিরগণ এই পার্থক্যকে দুই সময়ের সঙ্গে মেলান: মক্কা জনপদ হওয়ার আগে আর পরে। ২:১২৬-এ এর পরেই আসে ফলের দোয়া, \'ওয়ারযুক আহলাহূ মিনাস সামারাত\'। সূরা ইবরাহীমে সেটি আসে দুই আয়াত পরে, ১৪:৩৭-এ: \'ওয়ারযুকহুম মিনাস সামারাত\'।',
    verses: ['2:126', '14:35', '14:37']
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
    nameEn: 'The Golden Calf — Twin Lines Across Four Sūrahs',
    nameBn: 'সোনার বাছুর — চার সূরার যমজ বাক্য',
    nameAr: 'متشابه قصة العجل في البقرة والنساء والأعراف وطه',
    descEn: 'The calf story repeats whole phrases. Al-Baqarah says thumma ttakhadhtumu l-ʿijla min baʿdihī wa-antum ẓālimūn twice (2:51, 2:92); an-Nisāʾ 4:153 has thumma ttakhadhū l-ʿijla min baʿdi mā jāʾathumu l-bayyināt. ʿIjlan jasadan lahū khuwār is in 7:148 and 20:88; rajaʿa Mūsā ilā qawmihī ghaḍbāna asifā in 7:150 and 20:86. Hārūn\'s plea is ibna umma in 7:150, yabnaʾumma in 20:94.',
    descBn: 'বাছুরের ঘটনায় গোটা গোটা বাক্যাংশ ফিরে ফিরে আসে। আল-বাকারায় দুবার আছে \'সুম্মাত্তাখাযতুমুল ইজলা মিম বা\'দিহী ওয়া আনতুম যালিমূন\' (২:৫১, ২:৯২)। আন-নিসা ৪:১৫৩-এ \'সুম্মাত্তাখাযুল ইজলা মিম বা\'দি মা জাআতহুমুল বাইয়্যিনাত\'। \'ইজলান জাসাদাল লাহূ খুওয়ার\' আছে ৭:১৪৮ আর ২০:৮৮-এ; \'রাজাআ মূসা ইলা কাওমিহী গাদবানা আসিফা\' আছে ৭:১৫০ আর ২০:৮৬-এ। হারূনের মিনতি ৭:১৫০-এ \'ইবনা উম্মা\', ২০:৯৪-এ \'ইয়াবনাউম্মা\'।',
    verses: ['2:51', '2:92', '4:153', '7:148', '7:150', '20:86', '20:88', '20:94']
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
    descEn: 'Al-Anʿām 6:76-78 tells Ibrāhīm\'s argument in three near-identical ayat. On seeing a star, the moon, then the sun he says hādhā rabbī, a phrase found only here, and when each sets he draws a different conclusion. The sun adds hādhā akbar and takes the feminine bāzighah and afalat. Only the star opens fa-lammā janna ʿalayhi l-layl. The slip is shortening the three stages or swapping their endings.',
    descBn: 'আল-আনআমের ৬:৭৬ থেকে ৬:৭৮-এ ইবরাহীমের যুক্তি তিনটি প্রায় একই রকম আয়াতে। তারা, তারপর চাঁদ, তারপর সূর্য দেখে প্রতিবার তিনি বলেন \'হাযা রাব্বী\'; কুরআনে এ কথা আর কোথাও নেই। প্রতিটি ডুবে গেলে টানেন আলাদা সিদ্ধান্ত। সূর্যের আয়াতে বাড়তি \'হাযা আকবার\', আর স্ত্রীলিঙ্গে \'বাযিগাহ\' ও \'আফালাত\'। কেবল তারার আয়াত শুরু হয় \'ফালাম্মা জান্না আলাইহিল লাইল\' দিয়ে। ভুল হয় তিন ধাপ ছোট করে ফেললে বা একটার শেষ আরেকটায় বসালে।',
    verses: ['6:76', '6:77', '6:78']
  },
  {
    id: 'araf-prophet-cycle',
    nameEn: 'Uʿbudū Llāha Mā Lakum min Ilāhin Ghayruh — The Prophets\' Call and Its Two Short Twins',
    nameBn: 'উ\'বুদুল্লাহা মা লাকুম মিন ইলাহিন গাইরুহ — নবীদের দাওয়াত ও তার দুই ছোট যমজ',
    nameAr: 'ٱعْبُدُوا۟ ٱللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُۥ',
    descEn: 'Nine ayat carry the full call "uʿbudū llāha mā lakum min ilāhin ghayruh": Nūḥ in 7:59 and 23:23, Hūd in 7:65 and 11:50, Ṣāliḥ in 7:73 and 11:61, Shuʿayb in 7:85 and 11:84, an unnamed messenger in 23:32. Two more open the same way but stop at uʿbudū llāh: 27:45 (Ṣāliḥ, with an-) and 29:36 (Shuʿayb, with fa-qāla). What follows the call differs in each, and that is where a ḥāfiẓ slips.',
    descBn: 'পূর্ণ দাওয়াত "উ\'বুদুল্লাহা মা লাকুম মিন ইলাহিন গাইরুহ" আছে নয়টি আয়াতে: নূহ ৭:৫৯ ও ২৩:২৩-এ, হূদ ৭:৬৫ ও ১১:৫০-এ, সালিহ ৭:৭৩ ও ১১:৬১-এ, শুআইব ৭:৮৫ ও ১১:৮৪-এ, আর নাম না-বলা এক রাসূল ২৩:৩২-এ। আরও দুটির শুরু একই রকম, কিন্তু থামে \'উ\'বুদুল্লাহ\'-তে: ২৭:৪৫ (সালিহ, \'আনি\'বুদু\') আর ২৯:৩৬ (শুআইব, \'ফাকালা\')। দাওয়াতের পরের অংশ প্রতিটিতে আলাদা, হাফিজ ভুল করেন ঠিক ওখানেই।',
    verses: ['7:59', '7:65', '7:73', '7:85', '11:50', '11:61', '11:84', '23:23', '23:32', '27:45', '29:36']
  },
  {
    id: 'arsalna-nuhan',
    nameEn: 'Arsalnā Nūḥan — Six Openings That Name Nūḥ',
    nameBn: 'আরসালনা নূহান — নূহের নামে ছয় সূচনা',
    nameAr: 'أَرْسَلْنَا نُوحًا',
    descEn: 'Six ayat open on arsalnā Nūḥan. The particle before it changes: laqad in 7:59, wa-laqad in 11:25, 23:23, 29:14 and 57:26, innā in 71:1. Five go on ilā qawmihī, then fa-qāla yā qawmi (7:59, 23:23), innī lakum nadhīrun mubīn (11:25), fa-labitha fīhim (29:14), an andhir qawmaka (71:1). Al-Ḥadīd 57:26 alone goes on wa-Ibrāhīma.',
    descBn: 'ছয়টি আয়াতের শুরু \'আরসালনা নূহান\' দিয়ে। আগের শব্দটি বদলায়: ৭:৫৯-এ \'লাকাদ\', ১১:২৫, ২৩:২৩, ২৯:১৪ ও ৫৭:২৬-এ \'ওয়া লাকাদ\', ৭১:১-এ \'ইন্না\'। পাঁচটিতে এরপর \'ইলা কাওমিহী\', তারপর ৭:৫৯ ও ২৩:২৩-এ \'ফাকালা ইয়া কাওমি\', ১১:২৫-এ \'ইন্নী লাকুম নাযীরুম মুবীন\', ২৯:১৪-এ \'ফালাবিসা ফীহিম\', ৭১:১-এ \'আন আনযির কাওমাকা\'। শুধু আল-হাদীদ ৫৭:২৬-এ এরপর আসে \'ওয়া ইবরাহীমা\'।',
    verses: ['7:59', '11:25', '23:23', '29:14', '57:26', '71:1']
  },
  {
    id: 'jaat-rusuluna',
    nameEn: 'Jāʾat Rusulunā — The Angels Reach Ibrāhīm and Lūṭ',
    nameBn: 'জাআত রুসুলুনা — ফেরেশতারা এলেন ইবরাহীম ও লূতের কাছে',
    nameAr: 'جَآءَتْ رُسُلُنَآ',
    descEn: 'The guest-angels arrive in Hūd and al-ʿAnkabūt in the same words. To Ibrāhīm: wa-laqad jāʾat rusulunā Ibrāhīma bi-l-bushrā (11:69), wa-lammā jāʾat (29:31). To Lūṭ: wa-lammā jāʾat rusulunā Lūṭan sīʾa bihim wa-ḍāqa bihim dharʿan (11:77), wa-lammā an jāʾat (29:33). Then Lūṭ speaks in 11:77 (wa-qāla), the angels in 29:33 (wa-qālū).',
    descBn: 'হূদ ও আল-আনকাবুতে মেহমান ফেরেশতাদের আগমন একই শব্দে। ইবরাহীমের কাছে: ১১:৬৯-এ \'ওয়া লাকাদ জাআত রুসুলুনা ইবরাহীমা বিল-বুশরা\', ২৯:৩১-এ \'ওয়া লাম্মা জাআত\'। লূতের কাছে: ১১:৭৭-এ \'ওয়া লাম্মা জাআত রুসুলুনা লূতান সীআ বিহিম ওয়া দাকা বিহিম যারআ\', ২৯:৩৩-এ \'ওয়া লাম্মা আন জাআত\'। এরপর ১১:৭৭-এ কথা বলেন লূত (\'ওয়া কালা\'), ২৯:৩৩-এ ফেরেশতারা (\'ওয়া কালূ\')।',
    verses: ['11:69', '11:77', '29:31', '29:33']
  },
  {
    id: 'shuara-kadhdhaba',
    nameEn: 'Ash-Shuʿarāʾ — Five Story Openers: "Kadhdhabat … Alā Tattaqūn"',
    nameBn: 'আশ-শুআরা — পাঁচ কাহিনীর একই সূচনা: "কাযযাবাত … আলা তাত্তাকূন"',
    nameAr: 'لازمة كَذَّبَتْ … أَلَا تَتَّقُونَ في سورة الشعراء',
    descEn: 'Ash-Shuʿarāʾ opens five prophet stories with the same two ayat: kadhdhabat [people] l-mursalīn, then idh qāla lahum akhūhum [prophet] alā tattaqūn. Nūḥ 26:105-106, ʿĀd 26:123-124, Thamūd 26:141-142, Lūṭ 26:160-161, al-Ayka 26:176-177. Only the names change, except in the fifth: kadhdhaba without -t, and Shuʿayb without akhūhum. Nūḥ and Lūṭ take qawmu; ʿĀd and Thamūd stand alone.',
    descBn: 'আশ-শুআরা পাঁচ নবীর কাহিনী শুরু করে একই দুই আয়াতে। প্রথমটি \'কাযযাবাত [জাতি] আল-মুরসালীন\', দ্বিতীয়টি \'ইয কালা লাহুম আখূহুম [নবী] আলা তাত্তাকূন\'। নূহ (২৬:১০৫, ২৬:১০৬), আদ (২৬:১২৩, ২৬:১২৪), সামূদ (২৬:১৪১, ২৬:১৪২), লূত (২৬:১৬০, ২৬:১৬১), আইকা (২৬:১৭৬, ২৬:১৭৭)। বদলায় কেবল নাম। ব্যতিক্রম পঞ্চমটি: \'কাযযাবা\', শেষে \'ত\' নেই, আর শুআইবের বেলায় \'আখূহুম\' নেই। নূহ আর লূতের আগে \'কাওমু\'; আদ আর সামূদ একা।',
    verses: ['26:105', '26:106', '26:123', '26:124', '26:141', '26:142', '26:160', '26:161', '26:176', '26:177']
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
    nameEn: 'Al-Isrāʾ\'s Commandments and Their Twins in al-Anʿām and al-Furqān',
    nameBn: 'আল-ইসরার আদেশমালা ও আল-আনআম আর আল-ফুরকানে তার যমজ',
    nameAr: 'وصايا الإسراء والأنعام',
    descEn: 'Al-Isrāʾ 17:22-39 repeats the commands of al-Anʿām 6:151-152; dhālikum waṣṣākum bihī laʿallakum ends 6:151-153. Khashyata imlāqin (17:31), min imlāqin (6:151). Lā taqrabū z-zinā (17:32), l-fawāḥisha (6:151). The orphan line matches up to ashuddahū (6:152, 17:34). Lā tajʿal maʿa llāhi ilāhan ākhar frames 17:22 and 17:39. An-nafsa llatī ḥarrama llāhu illā bi-l-ḥaqq is in 6:151, 17:33 and 25:68.',
    descBn: 'আল-ইসরা ১৭:২২-৩৯-এর আদেশগুলো আল-আনআম ৬:১৫১-১৫২-এর আদেশই, সামান্য বদলসহ। আনআমের ৬:১৫১ থেকে ৬:১৫৩, তিনটিরই শেষ \'যালিকুম ওয়াসসাকুম বিহী লাআল্লাকুম\' দিয়ে। সন্তান হত্যা: ১৭:৩১-এ \'খাশইয়াতা ইমলাক\', ৬:১৫১-এ \'মিন ইমলাক\'। \'ওয়া লা তাকরাবূ\'-র পরে ১৭:৩২-এ \'আয-যিনা\', ৬:১৫১-এ \'আল-ফাওয়াহিশ\'। এতিমের সম্পদের বাক্য \'আশুদ্দাহু\' পর্যন্ত হুবহু এক (৬:১৫২, ১৭:৩৪)। ১৭:২২ আর ১৭:৩৯-এ \'লা তাজআল মাআল্লাহি ইলাহান আখার\'। \'আন-নাফসাল্লাতী হাররামাল্লাহু ইল্লা বিল-হাক্ক\' আছে ৬:১৫১, ১৭:৩৩ ও আল-ফুরকান ২৫:৬৮-এ।',
    verses: ['6:151', '6:152', '6:153', '17:22', '17:23', '17:31', '17:32', '17:33', '17:34', '17:35', '17:39', '25:68']
  },
  {
    id: 'la-tamshi-marahan',
    nameEn: 'Wa-lā Tamshi fī l-Arḍi Maraḥā — Al-Isrāʾ and Luqmān',
    nameBn: 'ওয়া লা তামশি ফিল আরদি মারাহা — আল-ইসরা ও লুকমান',
    nameAr: 'وَلَا تَمْشِ فِى ٱلْأَرْضِ مَرَحًا',
    descEn: 'The ban on strutting is worded the same in two sūrahs: "wa-lā tamshi fī l-arḍi maraḥā". In al-Isrāʾ 17:37 it opens the ayah and goes on innaka lan takhriqa l-arḍ. In Luqmān 31:18 it follows wa-lā tuṣaʿʿir khaddaka li-n-nās and goes on inna llāha lā yuḥibbu kulla mukhtālin fakhūr.',
    descBn: 'অহংকারে হাঁটার নিষেধ দুই সূরায় একই শব্দে: "ওয়া লা তামশি ফিল আরদি মারাহা"। আল-ইসরা ১৭:৩৭-এ আয়াত শুরুই হয় এ দিয়ে, তারপর \'ইন্নাকা লান তাখরিকাল আরদ\'। লুকমান ৩১:১৮-এ এটি আসে \'ওয়া লা তুসাআ\'ইর খাদ্দাকা লিন-নাস\'-এর পরে, তারপর \'ইন্নাল্লাহা লা ইউহিব্বু কুল্লা মুখতালিন ফাখূর\'।',
    verses: ['17:37', '31:18']
  },
  {
    id: 'inna-anzalna',
    nameEn: 'Innā Anzalnā — Openings of "We Sent Down"',
    nameBn: 'ইন্না আনযালনা — "আমি নাযিল করেছি" দিয়ে শুরু',
    nameAr: 'إِنَّآ أَنزَلْنَا',
    descEn: 'Seven ayat open innā anzalnā; five are here. With -hu fī: laylatin mubārakah (44:3), laylati l-qadr (97:1). Ilayka l-kitāba bi-l-ḥaqqi comes in 4:105 (li-taḥkuma bayna n-nās), 39:2 (fa-ʿbudi llāh) and 5:48, which opens wa-anzalnā and says fa-ḥkum baynahum. ʿAlayka l-kitāb follows annā/innā anzalnā in 29:51 and 39:41. 12:2 and 5:44 sit in other groups.',
    descBn: '"ইন্না আনযালনা" দিয়ে শুরু হয় সাতটি আয়াত, তার পাঁচটি এই দলে। \'-হু ফী\' আর রাতের কথা: ৪৪:৩-এ \'লাইলাতিম মুবারাকাহ\', ৯৭:১-এ \'লাইলাতিল কাদর\'। \'ইলাইকাল কিতাবা বিল-হাক্ক\' আছে তিনটিতে: ৪:১০৫-এ এরপর \'লিতাহকুমা বাইনান-নাস\', ৩৯:২-এ \'ফা\'বুদিল্লাহ\', আর ৫:৪৮-এ, যার শুরু \'ওয়া আনযালনা\', পরে \'ফাহকুম বাইনাহুম\'। \'আলাইকাল কিতাব\' আসে ২৯:৫১ (\'আন্না আনযালনা\') ও ৩৯:৪১-এ। ১২:২ ও ৫:৪৪ অন্য দলে।',
    verses: ['4:105', '5:48', '29:51', '39:2', '39:41', '44:3', '97:1']
  },
  {
    id: 'unzila-ilayka',
    nameEn: 'Bimā Unzila Ilayka wa-mā Unzila min Qablik — Belief in Both Revelations',
    nameBn: 'বিমা উনযিলা ইলাইকা ওয়া মা উনযিলা মিন কাবলিক — দুই ওহিতেই ঈমান',
    nameAr: 'بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ',
    descEn: 'Three ayat carry the same seven words on belief in what was sent down to you and before you. In 2:4 the muttaqīn yuʾminūna bi-mā unzila ilayka; in 4:162 the firm in knowledge and the believers do the same. In 4:60 it is only a claim: yazʿumūna annahum āmanū bi-mā unzila ilayka.',
    descBn: 'তিনটি আয়াতে একই সাত শব্দ: যা তোমার প্রতি নাযিল হয়েছে আর যা তোমার আগে নাযিল হয়েছে, তাতে ঈমান। ২:৪-এ মুত্তাকীরা \'ইউ\'মিনূনা বিমা উনযিলা ইলাইকা\'; ৪:১৬২-তে জ্ঞানে পাকা লোকেরা ও মুমিনরাও তা-ই। ৪:৬০-এ এটি শুধু মুখের দাবি: \'ইয়াযআমূনা আন্নাহুম আমানূ বিমা উনযিলা ইলাইকা\'।',
    verses: ['2:4', '4:60', '4:162']
  },
  {
    id: 'wamma-jaa-musa',
    nameEn: 'Innī Ānastu Nāran — Mūsā Sees the Fire',
    nameBn: 'ইন্নী আনাসতু নারান — মূসা আগুন দেখলেন',
    nameAr: 'إِنِّىٓ ءَانَسْتُ نَارًا',
    descEn: 'Three sūrahs tell how Mūsā saw a fire and spoke to his family, each with "innī ānastu nāran". Ṭā-Hā 20:10 and al-Qaṣaṣ 28:29 share umkuthū and laʿallī ātīkum minhā; an-Naml 27:7 has sa-ātīkum. What he hopes to bring changes: bi-qabasin (20:10), bi-khabarin aw ātīkum bi-shihābin qabas (27:7), bi-khabarin aw jadhwatin mina n-nār (28:29).',
    descBn: 'তিন সূরায় একই ঘটনা: মূসা আগুন দেখে পরিবারকে বলেন, "ইন্নী আনাসতু নারান"। তা-হা ২০:১০ ও আল-কাসাস ২৮:২৯-এ আছে \'উমকুসূ\' আর \'লাআল্লী আতীকুম মিনহা\'; আন-নামল ২৭:৭-এ \'সাআতীকুম\'। বদলায় কী আনবেন সেই কথা: ২০:১০-এ \'বিকাবাসিন\', ২৭:৭-এ \'বিখাবারিন আও আতীকুম বিশিহাবিন কাবাস\', ২৮:২৯-এ \'বিখাবারিন আও জাযওয়াতিম মিনান-নার\'।',
    verses: ['20:10', '27:7', '28:29']
  },
  {
    id: 'anba-al-ghayb',
    nameEn: 'Wa-mā Kunta Ladayhim — "You Were Not There"',
    nameBn: 'ওয়া মা কুনতা লাদাইহিম — "তুমি সেখানে ছিলে না"',
    nameAr: 'وَمَا كُنتَ لَدَيْهِمْ',
    descEn: 'After a story of the past, the Prophet ﷺ is told he was not there to see it. 3:44 and 12:102 match word for word: dhālika min anbāʾi l-ghaybi nūḥīhi ilayka wa-mā kunta ladayhim idh. 11:49 opens tilka … nūḥīhā and says mā kunta taʿlamuhā. In al-Qaṣaṣ the place is named instead: wa-mā kunta bi-jānibi l-gharbiyyi (28:44), bi-jānibi ṭ-ṭūri (28:46).',
    descBn: 'অতীতের কোনো কাহিনী শেষে নবী ﷺ-কে বলা হয়: তুমি তখন সেখানে ছিলে না। ৩:৪৪ ও ১২:১০২ হুবহু এক: \'যালিকা মিন আমবাইল গাইবি নূহীহি ইলাইকা ওয়া মা কুনতা লাদাইহিম ইয\'। ১১:৪৯-এর শুরু \'তিলকা … নূহীহা\', আর সেখানে \'মা কুনতা তা\'লামুহা\'। আল-কাসাসে আসে জায়গার নাম: ২৮:৪৪-এ \'ওয়া মা কুনতা বিজানিবিল গারবিয়্যি\', ২৮:৪৬-এ \'বিজানিবিত তূর\'।',
    verses: ['3:44', '11:49', '12:102', '28:44', '28:46']
  },
  {
    id: 'yawma-yaqumu',
    nameEn: 'Yawma Taqūmu / Yaqūmu — "The Day … Shall Stand"',
    nameBn: 'ইয়াওমা তাকূমু / ইয়াকূমু — যেদিন কায়েম হবে, যেদিন দাঁড়াবে',
    nameAr: 'وَيَوْمَ تَقُومُ ٱلسَّاعَةُ / يَوْمَ يَقُومُ',
    descEn: '"Wa-yawma taqūmu s-sāʿah" occurs five times: three in ar-Rūm (30:12 yublisu l-mujrimūn, 30:14 yawmaʾidhin yatafarraqūn, 30:55 yuqsimu l-mujrimūn), then 40:46 adkhilū āla firʿawn and 45:27 yawmaʾidhin yakhsaru l-mubṭilūn. With yaqūmu the subject changes: al-ḥisāb (14:41), ar-rūḥu wa-l-malāʾikah (78:38), an-nās (83:6), al-ashhād (40:51, not in this group).',
    descBn: '"ওয়া ইয়াওমা তাকূমুস সাআহ" এসেছে পাঁচবার। আর-রুমে তিনবার: ৩০:১২ \'ইউবলিসুল মুজরিমূন\', ৩০:১৪ \'ইয়াওমাইযিই ইয়াতাফাররাকূন\', ৩০:৫৫ \'ইউকসিমুল মুজরিমূন\'। তারপর ৪০:৪৬-এ \'আদখিলূ আলা ফিরআউন\', ৪৫:২৭-এ \'ইয়াওমাইযিই ইয়াখসারুল মুবতিলূন\'। \'ইয়াকূমু\' হলে কর্তা বদলায়: ১৪:৪১-এ \'আল-হিসাব\', ৭৮:৩৮-এ \'আর-রূহু ওয়াল-মালাইকাহ\', ৮৩:৬-এ \'আন-নাস\', আর ৪০:৫১-এ \'আল-আশহাদ\' (এই আয়াতটি দলে নেই)।',
    verses: ['14:41', '30:12', '30:14', '30:55', '40:46', '45:27', '78:38', '83:6']
  },
  {
    id: 'fa-amma-man-conditional',
    nameEn: '"Hiya l-Maʾwā" — The Two Abodes of an-Nāziʿāt',
    nameBn: '"হিয়াল মা\'ওয়া" — আন-নাযিআতের দুই ঠিকানা',
    nameAr: 'فَإِنَّ ٱلْجَحِيمَ / ٱلْجَنَّةَ هِىَ ٱلْمَأْوَىٰ',
    descEn: 'Two ayat of an-Nāziʿāt are the same word for word except one noun: fa-inna l-jaḥīma hiya l-maʾwā (79:39) and fa-inna l-jannata hiya l-maʾwā (79:41). Hell comes first, after the one who transgressed (79:37-38). Paradise comes second, after the one who feared standing before his Lord (79:40). These are the only two ayat in the Quran with hiya l-maʾwā.',
    descBn: 'আন-নাযিআতের দুটি আয়াত হুবহু এক, তফাত শুধু একটি শব্দে: \'ফাইন্নাল জাহীমা হিয়াল মা\'ওয়া\' (৭৯:৩৯) আর \'ফাইন্নাল জান্নাতা হিয়াল মা\'ওয়া\' (৭৯:৪১)। জাহান্নাম আগে, সীমালঙ্ঘনকারীর কথার পরে (৭৯:৩৭-৩৮)। জান্নাত পরে, রবের সামনে দাঁড়ানোকে যে ভয় করেছে তার কথার পরে (৭৯:৪০)। পুরো কুরআনে \'হিয়াল মা\'ওয়া\' আছে শুধু এই দুই আয়াতে।',
    verses: ['79:39', '79:41']
  },
  {
    id: 'ala-hudan',
    nameEn: '"Those Are on Guidance from Their Lord" — The Sealant Formula',
    nameBn: '"তারাই তাদের রবের পক্ষ থেকে হিদায়াতের ওপর আছে" — সমাপনী সূত্র',
    nameAr: 'أُوْلَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمۡ وَأُوْلَٰٓئِكَ هُمُ الۡمُفۡلِحُونَ',
    descEn: '"Ulāʾika ʿalā hudan min rabbihim wa-ulāʾika humu l-mufliḥūn" occurs only twice, word for word: 2:5 closes the portrait of the muttaqīn, 31:5 the shorter, similar portrait of the muḥsinīn. The ayah before each ends almost alike, one word apart: wa-bi-l-ākhirati hum yūqinūn (2:4), wa-hum bi-l-ākhirati hum yūqinūn (31:4).',
    descBn: '"উলাইকা আলা হুদাম মির রাব্বিহিম ওয়া উলাইকা হুমুল মুফলিহূন" হুবহু এসেছে মাত্র দুবার: ২:৫-এ মুত্তাকীদের বর্ণনার শেষে, ৩১:৫-এ মুহসিনীনদের কাছাকাছি, তবে ছোট বর্ণনার শেষে। আগের আয়াত দুটির শুরু আলাদা, শেষে তফাত শুধু এক শব্দের: ২:৪-এ \'ওয়া বিল-আখিরাতি হুম ইউকিনূন\', ৩১:৪-এ \'ওয়া হুম বিল-আখিরাতি হুম ইউকিনূন\'।',
    verses: ['2:5', '31:5']
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
    descEn: 'Innaka anta closes 13 ayat, and fa-innaka anta one more (5:118). Here are 12 said to Allah whose closing names get swapped. As-Samīʿ al-ʿAlīm after taqabbal (2:127, 3:35). Al-Wahhāb after hab (3:8, 38:35). ʿAllām al-Ghuyūb (5:109, 5:116), though 2:32 has the same lā ʿilma lanā and closes al-ʿAlīm al-Ḥakīm. At-Tawwāb ar-Raḥīm (2:128). Al-ʿAzīz al-Ḥakīm (2:129, 40:8, 60:5, and 5:118 with fa-innaka).',
    descBn: '\'ইন্নাকা আনতা\' দিয়ে শেষ হয় ১৩টি আয়াত, \'ফাইন্নাকা আনতা\' দিয়ে আরও একটি (৫:১১৮)। এখানে আছে আল্লাহকে বলা এমন ১২টি কথা, যাদের শেষের নাম এক আয়াত থেকে আরেক আয়াতে চলে যায়। \'তাকাব্বাল\'-এর পরে আস-সামীউল আলীম (২:১২৭, ৩:৩৫)। \'হাব\'-এর পরে আল-ওয়াহহাব (৩:৮, ৩৮:৩৫)। আল্লামুল গুয়ূব (৫:১০৯, ৫:১১৬); অথচ ২:৩২-এও আছে \'লা ইলমা লানা\', আর সেটি শেষ হয় আল-আলীমুল হাকীম দিয়ে। আত-তাওয়াবুর রাহীম (২:১২৮)। আল-আযীযুল হাকীম (২:১২৯, ৪০:৮, ৬০:৫, আর ৫:১১৮, যেখানে \'ফাইন্নাকা\')।',
    verses: ['2:32', '2:127', '2:128', '2:129', '3:8', '3:35', '5:109', '5:116', '5:118', '38:35', '40:8', '60:5']
  },
  {
    id: 'aqim-salata-atu-zakata',
    nameEn: '"Establish Prayer and Give Zakāh" — The Twin Command',
    nameBn: '"নামাজ কায়েম কর ও যাকাত দাও" — জোড়া আদেশ',
    nameAr: 'وَأَقِيمُوا۟ ٱلصَّلَوٰةَ وَءَاتُوا۟ ٱلزَّكَوٰةَ',
    descEn: 'The command aqīmū ṣ-ṣalāta wa-ātū z-zakāta occurs in eight ayat, all here, and the test is what comes next. A third command follows in 2:43 (wa-rkaʿū), 22:78 (wa-ʿtaṣimū), 24:56 (wa-aṭīʿū r-rasūla), 58:13 (wa-aṭīʿū llāha wa-rasūlah) and 73:20 (wa-aqriḍū). 2:110 goes on wa-mā tuqaddimū, as 73:20 later does. In 2:83 and 4:77 the account moves on. 22:78 and 58:13 open with fa-.',
    descBn: '\'আকীমুস সালাতা ওয়া আতুয যাকাতা\' আদেশটি কুরআনে আছে আটটি আয়াতে, সবগুলো এখানে। আসল পরীক্ষা এর পরে কী আসে। তৃতীয় একটি আদেশ আসে ২:৪৩-এ (ওয়ারকাঊ), ২২:৭৮-এ (ওয়া\'তাসিমূ), ২৪:৫৬-এ (ওয়া আতীউর রাসূলা), ৫৮:১৩-এ (ওয়া আতীউল্লাহা ওয়া রাসূলাহ) আর ৭৩:২০-এ (ওয়া আকরিদূ)। ২:১১০ চলে যায় \'ওয়ামা তুকাদ্দিমূ\'-তে, ৭৩:২০-ও পরে তা-ই বলে। ২:৮৩ আর ৪:৭৭-এ ঘটনার বর্ণনা এগিয়ে যায়। ২২:৭৮ আর ৫৮:১৩ শুরু হয় \'ফা\' দিয়ে।',
    verses: ['2:43', '2:83', '2:110', '4:77', '22:78', '24:56', '58:13', '73:20']
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
    descEn: 'Lā takūnū ka-lladhīna (do not be like those who) occurs in six ayat, all here, each with its own failing: split and differed (3:105), disbelieved and spoke of their fallen brothers (3:156), said we hear but do not hear (8:21), marched out boastfully (8:47), harmed Mūsā (33:69), forgot Allah (59:19). Four open wa-lā takūnū; 3:156 and 33:69 open yā ayyuhā lladhīna āmanū lā takūnū. Al-Anfāl has two.',
    descBn: '\'লা তাকূনূ কাল্লাযীনা\' (তাদের মতো হয়ো না, যারা) আছে ছয়টি আয়াতে, সবগুলো এখানে। প্রতিটির দোষ আলাদা: দলে দলে ভাগ হয়ে মতভেদ করেছে (৩:১০৫); কুফরি করেছে আর মারা যাওয়া ভাইদের নিয়ে কথা বলেছে (৩:১৫৬); বলেছে \'শুনলাম\', অথচ শোনে না (৮:২১); দম্ভ নিয়ে বেরিয়েছে (৮:৪৭); মূসাকে কষ্ট দিয়েছে (৩৩:৬৯); আল্লাহকে ভুলে গেছে (৫৯:১৯)। চারটির শুরু \'ওয়ালা তাকূনূ\'। ৩:১৫৬ আর ৩৩:৬৯ শুরু হয় \'ইয়া আইয়ুহাল্লাযীনা আমানূ লা তাকূনূ\' দিয়ে। আল-আনফালে আছে দুটি।',
    verses: ['3:105', '3:156', '8:21', '8:47', '33:69', '59:19']
  },
  {
    id: 'lahum-ajruhum-inda-rabbihim',
    nameEn: '"Their Reward Is with Their Lord" — Lahum Ajruhum ʿinda Rabbihim',
    nameBn: '"তাদের পুরস্কার তাদের রবের কাছে" — লাহুম আজরুহুম ইনদা রাব্বিহিম',
    nameAr: 'لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ',
    descEn: 'The reward line lahum ajruhum ʿinda rabbihim, mostly followed by wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūn. Fa-lahum in 2:62, 2:274; lahum in 2:262, 2:277; fa-lahu ajruhu ʿinda rabbihi in 2:112; ulāʾika lahum in 3:199, which ends sarīʿu l-ḥisāb. 5:69 and 22:17 open like 2:62, with no reward line and the Sabians before wa-n-naṣārā. 22:17 adds wa-l-majūs, goes on inna llāha yafṣilu baynahum.',
    descBn: 'পুরস্কারের বাক্য \'লাহুম আজরুহুম ইনদা রাব্বিহিম\', পরে প্রায়ই \'ওয়ালা খাওফুন আলাইহিম ওয়ালা হুম ইয়াহযানূন\'। ২:৬২ ও ২:২৭৪-এ \'ফালাহুম\', ২:২৬২ ও ২:২৭৭-এ \'লাহুম\', ২:১১২-এ \'ফালাহূ আজরুহূ ইনদা রাব্বিহী\'। ৩:১৯৯-এ \'উলাইকা লাহুম\', শেষে \'সারীউল হিসাব\'। ৫:৬৯ ও ২২:১৭-এর শুরু ২:৬২-এর মতো, তবে বাক্যটি নেই। দুটিতেই সাবিঈনদের নাম আসে \'ওয়ান-নাসারা\'-র আগে; নাসারাকে আগে রাখে কেবল ২:৬২। ২২:১৭-এ নাসারার পরে \'ওয়াল-মাজূস\', আর আয়াতের মাঝামাঝি \'ইন্নাল্লাহা ইয়াফসিলু বাইনাহুম\'।',
    verses: ['2:62', '2:112', '2:262', '2:274', '2:277', '3:199', '5:69', '22:17']
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
    nameEn: '"Qul Aʿūdhu bi-Rabbi" — The Muʿawwidhatān Twin',
    nameBn: '"কুল আঊযু বিরাব্বি" — যমজ মুআওবিযাতাইন',
    nameAr: 'قُلْ أَعُوذُ بِرَبِّ — المعوذتان',
    descEn: 'Al-Falaq and an-Nās open with the same three words, qul aʿūdhu bi-rabbi, found nowhere else in the Quran, and differ only in the last: l-falaq (113:1) and n-nās (114:1). Each ends on its own sūrah\'s name. Then an-Nās repeats n-nās in maliki n-nās and ilāhi n-nās, while al-Falaq moves on to min sharri mā khalaq.',
    descBn: 'আল-ফালাক আর আন-নাস শুরু হয় একই তিন শব্দে: \'কুল আঊযু বিরাব্বি\'। কুরআনে এই তিন শব্দ আর কোথাও নেই। তফাত কেবল শেষ শব্দে: আল-ফালাক (১১৩:১) আর আন-নাস (১১৪:১), দুটিই নিজ নিজ সূরার নাম। এরপর আন-নাসে \'আন-নাস\' ফিরে আসে \'মালিকিন নাস\' আর \'ইলাহিন নাস\'-এ; আল-ফালাক চলে যায় \'মিন শাররি মা খালাক\'-এ।',
    verses: ['113:1', '114:1']
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
    descEn: 'Eleven ayat, the Quran\'s full set, say the messenger owes only al-balāgh, the conveying. Track the frame: mā ʿalā r-rasūli illā (5:99), wa-mā ʿalā r-rasūli illā (24:54, 29:18), fa-hal ʿalā r-rusuli illā (16:35), wa-mā ʿalaynā illā (36:17), in ʿalayka illā (42:48), fa-innamā ʿalayka (3:20, 13:40, 16:82), annamā or fa-innamā ʿalā rasūlinā (5:92, 64:12). 3:20, 5:99, 13:40, 42:48 lack al-mubīn.',
    descBn: 'এগারোটি আয়াত, কুরআনে এর সবকটি: রাসূলের দায়িত্ব কেবল আল-বালাগ, পৌঁছে দেওয়া। কাঠামোটা খেয়াল রাখুন: মা আলার-রাসূলি ইল্লা (৫:৯৯); ওয়ামা আলার-রাসূলি ইল্লা (২৪:৫৪, ২৯:১৮); ফাহাল আলার-রুসুলি ইল্লা (১৬:৩৫); ওয়ামা আলাইনা ইল্লা (৩৬:১৭); ইন আলাইকা ইল্লা (৪২:৪৮); ফাইন্নামা আলাইকা (৩:২০, ১৩:৪০, ১৬:৮২); আন্নামা বা ফাইন্নামা আলা রাসূলিনা (৫:৯২, ৬৪:১২)। ৩:২০, ৫:৯৯, ১৩:৪০ ও ৪২:৪৮-এ আল-মুবীন নেই।',
    verses: ['3:20', '5:92', '5:99', '13:40', '16:35', '16:82', '24:54', '29:18', '36:17', '42:48', '64:12']
  },
  {
    id: 'sayaqulu-qul',
    nameEn: '"Sayaqūlu… Qul": Foretold Words, Ready Answers',
    nameBn: '"সাইয়াকূলু… কুল": আগাম জানানো কথা, প্রস্তুত জবাব',
    nameAr: 'سَيَقُولُ … قُلْ',
    descEn: 'Ten ayat foretell what people will say (sayaqūlu, sayaqūlūna) and give the reply with qul. Four open sayaqūlu: 2:142, 6:148, 48:11, 48:15. Four open sayaqūlūna: 18:22 and the al-Muʾminūn triple 23:85, 23:87, 23:89. 10:31 and 17:51 have fa-sayaqūlūna mid-ayah. Closest pair: 23:87 sayaqūlūna lillāhi qul a-fa-lā tattaqūn, and 10:31 fa-sayaqūlūna llāhu fa-qul a-fa-lā tattaqūn.',
    descBn: 'দশটি আয়াতে আগেই বলে দেওয়া হয়েছে লোকেরা কী বলবে (সাইয়াকূলু, সাইয়াকূলূনা), তারপর কুল দিয়ে জবাব। চারটির শুরু সাইয়াকূলু দিয়ে: ২:১৪২, ৬:১৪৮, ৪৮:১১, ৪৮:১৫। চারটির শুরু সাইয়াকূলূনা দিয়ে: ১৮:২২ আর আল-মুমিনুনের তিনটি, ২৩:৮৫, ২৩:৮৭, ২৩:৮৯। ১০:৩১ ও ১৭:৫১-এ ফাসাইয়াকূলূনা আসে আয়াতের মাঝখানে। সবচেয়ে কাছের জোড়া: ২৩:৮৭ সাইয়াকূলূনা লিল্লাহ, কুল আফালা তাত্তাকূন; আর ১০:৩১ ফাসাইয়াকূলূনাল্লাহ, ফাকুল আফালা তাত্তাকূন।',
    verses: ['2:142', '6:148', '10:31', '17:51', '18:22', '23:85', '23:87', '23:89', '48:11', '48:15']
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
    "descEn": "Ten ayat, the full set, end mā kānū bihī yastahziʾūn. Six close wa-ḥāqa bihim: 11:8, 16:34, 39:48, 40:83, 45:33, 46:26. 6:10 = 21:41: fa-ḥāqa bi-lladhīna sakhirū minhum. No ḥāqa: 6:5 fa-sawfa yaʾtīhim anbāʾu, 26:6 fa-sa-yaʾtīhim. Lead-in trap, sayyiʾātu mā: fa-aṣābahum … ʿamilū (16:34), wa-badā lahum … kasabū (39:48), … ʿamilū (45:33), fa-aṣābahum … kasabū (39:51, without the close).",
    "descBn": "মা কানূ বিহী ইয়াস্তাহযিঊন দিয়ে শেষ হয় দশটি আয়াত, সব এখানে। ছয়টিতে আগে ওয়া হাকা বিহিম: ১১:৮, ১৬:৩৪, ৩৯:৪৮, ৪০:৮৩, ৪৫:৩৩, ৪৬:২৬। ৬:১০ ও ২১:৪১ হুবহু এক: ফাহাকা বিল্লাযীনা সাখিরূ মিনহুম। হাকা নেই ৬:৫-এ (ফাসাওফা ইয়াতীহিম আমবাউ) ও ২৬:৬-এ (ফাসাইয়াতীহিম)। শুরুর ফাঁদ সাইয়িআতু মা: ফাআসাবাহুম … আমিলূ (১৬:৩৪), ওয়া বাদা লাহুম … কাসাবূ (৩৯:৪৮), … আমিলূ (৪৫:৩৩), ফাআসাবাহুম … কাসাবূ (৩৯:৫১, শেষটি নেই)।",
    "verses": [
      "6:5",
      "6:10",
      "11:8",
      "16:34",
      "21:41",
      "26:6",
      "39:48",
      "39:51",
      "40:83",
      "45:33",
      "46:26"
    ]
  },
  {
    "id": "man-yudlil-la-hadi",
    "nameEn": "Whom Allah Leaves Astray",
    "nameBn": "আল্লাহ যাকে পথভ্রষ্ট করেন",
    "nameAr": "مَن يُضْلِلِ ٱللَّهُ",
    "descEn": "Nine ayat say man yuḍlili llāh (whom Allah leaves astray), and the close is the trap. Four end fa-mā lahū min hād: 13:33, 39:23, 39:36, 40:33. 7:186: fa-lā hādiya lahū; 4:88, 4:143: fa-lan tajida lahū sabīlā; 42:44: fa-mā lahū min waliyyin; 42:46: fa-mā lahū min sabīl. 18:17 omits Allah: wa-man yuḍlil fa-lan tajida lahū waliyyan murshidā. 30:29 fa-man yahdī man aḍalla llāh echoes 4:88.",
    "descBn": "নয়টি আয়াতে আছে মান ইউদলিলিল্লাহ (আল্লাহ যাকে পথহারা করেন), ভুল হয় শেষাংশে। চারটির শেষ ফামা লাহূ মিন হাদ: ১৩:৩৩, ৩৯:২৩, ৩৯:৩৬, ৪০:৩৩। ৭:১৮৬-এ ফালা হাদিয়া লাহূ; ৪:৮৮ ও ৪:১৪৩-এ ফালান তাজিদা লাহূ সাবীলা; ৪২:৪৪-এ ফামা লাহূ মিন ওয়ালিয়্যিন; ৪২:৪৬-এ ফামা লাহূ মিন সাবীল। ১৮:১৭-এ 'আল্লাহ' নেই: ওয়া মাই ইউদলিল ফালান তাজিদা লাহূ ওয়ালিয়্যাম মুরশিদা। ৩০:২৯-এর ফামাই ইয়াহদী মান আদাল্লাল্লাহ ৪:৮৮-এর মতো।",
    "verses": [
      "4:88",
      "4:143",
      "7:186",
      "13:33",
      "18:17",
      "30:29",
      "39:23",
      "39:36",
      "40:33",
      "42:44",
      "42:46"
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
    "descEn": "The close inna fī dhālika la-āyātin li-kulli ṣabbārin shakūr (signs for every steadfast, grateful one) ends four ayat and no others: 14:5, 31:31, 34:19, 42:33. Its trap sits in Sabaʾ itself: 34:9 is the only other inna fī dhālika … li-kulli close, la-āyatan li-kulli ʿabdin munīb, singular āyah. 31:31 and 42:33 are both about ships: sailing in Luqmān, held still in ash-Shūrā.",
    "descBn": "ইন্না ফী যালিকা লাআয়াতিল লিকুল্লি সাব্বারিন শাকূর (প্রত্যেক ধৈর্যশীল, কৃতজ্ঞের জন্য নিদর্শন): এই সমাপ্তি শুধু চারটি আয়াতে, ১৪:৫, ৩১:৩১, ৩৪:১৯ ও ৪২:৩৩। ফাঁদটা সূরা সাবার ভেতরেই। ৩৪:৯-এ আছে লাআয়াতাল লিকুল্লি আবদিম মুনীব, এক বচনে আয়াহ; ইন্না ফী যালিকা দিয়ে লিকুল্লি-যুক্ত সমাপ্তি এ ছাড়া আর নেই। ৩১:৩১ ও ৪২:৩৩ দুটিই জাহাজের কথা: লুকমানে জাহাজ চলছে, আশ-শূরায় থেমে আছে।",
    "verses": [
      "14:5",
      "31:31",
      "34:9",
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
    "descEn": "All ten ayat with anzala mina s-samāʾi māʾan, plus 27:60 (anzala lakum) and 29:63 (nazzala). By opening: alladhī jaʿala lakumu l-arḍa (2:22, 20:53), Allāhu lladhī khalaqa (14:32), amman khalaqa (27:60), wa-huwa lladhī (6:99), huwa lladhī (16:10), wa-llāhu (16:65), a-lam tara anna llāha (22:63, 35:27, 39:21), bare anzala (13:17), wa-la-in saʾaltahum (29:63). Fa-aḥyā bihi l-arḍa: 16:65, 29:63.",
    "descBn": "আনযালা মিনাস-সামাই মাআ আছে দশটি আয়াতে, সব এখানে; সঙ্গে ২৭:৬০ (আনযালা লাকুম) আর ২৯:৬৩ (নাযযালা)। শুরু দেখে চিনুন: আল্লাযী জাআলা লাকুমুল-আরদা (২:২২, ২০:৫৩); আল্লাহুল্লাযী খালাকা (১৪:৩২); আম্মান খালাকা (২৭:৬০); ওয়া হুওয়াল্লাযী (৬:৯৯); হুওয়াল্লাযী (১৬:১০); ওয়াল্লাহু (১৬:৬৫); আলাম তারা (২২:৬৩, ৩৫:২৭, ৩৯:২১); শুধু আনযালা (১৩:১৭); ওয়া লাইন সাআলতাহুম (২৯:৬৩)। ফাআহইয়া বিহিল-আরদ: ১৬:৬৫, ২৯:৬৩।",
    "verses": [
      "2:22",
      "6:99",
      "13:17",
      "14:32",
      "16:10",
      "16:65",
      "20:53",
      "22:63",
      "27:60",
      "29:63",
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
  },
  {
    "id": "anna-yakunu-li",
    "nameEn": "Annā Yakūnu Lī — \"How Shall I Have a Child?\"",
    "nameBn": "আন্না ইয়াকূনু লী — \"আমার সন্তান হবে কীভাবে?\"",
    "nameAr": "أَنَّىٰ يَكُونُ لِى",
    "descEn": "Zakariyyā and Maryam ask the same question, annā yakūnu lī, in Āl ʿImrān and in Maryam. Zakariyyā says rabbi … ghulām both times, but puts his old age first in 3:40 and his barren wife first in 19:8. Maryam says rabbi … walad in 3:47, then ghulām with no rabbi in 19:20, adding wa-lam aku baghiyyā. The run occurs only in these four ayat.",
    "descBn": "যাকারিয়া (আ) আর মারইয়াম (আ) একই প্রশ্ন করেন, আলে ইমরানে আর সূরা মারইয়ামে: 'আন্না ইয়াকূনু লী', আমার সন্তান হবে কীভাবে? যাকারিয়া (আ) দুবারই বলেন 'রব্বি … গুলাম'। তবে ৩:৪০-এ আগে আসে নিজের বার্ধক্য, ১৯:৮-এ আগে আসে স্ত্রীর বন্ধ্যাত্ব। মারইয়াম (আ) ৩:৪৭-এ বলেন 'রব্বি … ওয়ালাদ', আর ১৯:২০-এ 'রব্বি' ছাড়াই 'গুলাম', সঙ্গে বাড়তি 'ওয়া লাম আকু বাগিয়্যা'। পুরো কুরআনে কথাটি আছে কেবল এই চার আয়াতে।",
    "verses": [
      "3:40",
      "3:47",
      "19:8",
      "19:20"
    ]
  },
  {
    "id": "hanifan-mushrikin",
    "nameEn": "Ḥanīfan wa-mā Kāna mina l-Mushrikīn — Ibrāhīm the Upright",
    "nameBn": "হানীফান ওয়া মা কানা মিনাল মুশরিকীন — একনিষ্ঠ ইবরাহীম",
    "nameAr": "حَنِيفًا وَمَا كَانَ مِنَ ٱلْمُشْرِكِينَ",
    "descEn": "Eight ayat call Ibrāhīm ḥanīf; seven also clear him of shirk. Millata Ibrāhīma ḥanīfan wa-mā kāna mina l-mushrikīn closes 2:135, 3:95, 6:161, 16:123. 4:125 has wa-ttabaʿa millata Ibrāhīma ḥanīfan, then turns: wa-ttakhadha llāhu Ibrāhīma khalīlā. 3:67 has ḥanīfan musliman, no millah; 16:120 wa-lam yaku for wa-mā kāna; in 6:79 Ibrāhīm speaks: ḥanīfan wa-mā ana mina l-mushrikīn.",
    "descBn": "আটটি আয়াতে ইবরাহীম (আ) হানীফ, সাতটিতে শিরক থেকেও মুক্ত। 'মিল্লাতা ইবরাহীমা হানীফান ওয়া মা কানা মিনাল মুশরিকীন' দিয়ে শেষ হয় ২:১৩৫, ৩:৯৫, ৬:১৬১ ও ১৬:১২৩। ৪:১২৫-এ একই 'মিল্লাতা ইবরাহীমা হানীফা', তারপর 'ওয়াত্তাখাযাল্লাহু ইবরাহীমা খালীলা'। ৩:৬৭-এ মিল্লাত নেই, আছে 'হানীফান মুসলিমান'। ১৬:১২০-এ 'ওয়া মা কানা'-র জায়গায় 'ওয়া লাম ইয়াকু'। ৬:৭৯-এ ইবরাহীম (আ) নিজে বলছেন: 'ওয়া মা আনা মিনাল মুশরিকীন'।",
    "verses": [
      "2:135",
      "3:67",
      "3:95",
      "4:125",
      "6:79",
      "6:161",
      "16:120",
      "16:123"
    ]
  },
  {
    "id": "tanzil-al-kitab",
    "nameEn": "Tanzīlu l-Kitābi mina llāh — The Book Sent Down",
    "nameBn": "তানযীলুল কিতাবি মিনাল্লাহ — কিতাব নাযিলের ঘোষণা",
    "nameAr": "تَنزِيلُ ٱلْكِتَٰبِ مِنَ ٱللَّهِ ٱلْعَزِيزِ ٱلْحَكِيمِ",
    "descEn": "Six surahs open on the descent. 39:1, 45:2 and 46:2 are word for word the same: tanzīlu l-kitābi mina llāhi l-ʿazīzi l-ḥakīm. 40:2 ends l-ʿazīzi l-ʿalīm instead. 32:2 turns after tanzīlu l-kitābi to lā rayba fīhi min rabbi l-ʿālamīn, and 41:2 drops al-kitāb: tanzīlun mina r-raḥmāni r-raḥīm. Mid-surah, 56:80 and 69:43 are one ayah, tanzīlun min rabbi l-ʿālamīn: 41:2's tanzīlun, 32:2's close.",
    "descBn": "ছয়টি সূরার শুরু কিতাব নাযিলের কথা দিয়ে। ৩৯:১, ৪৫:২ আর ৪৬:২ হুবহু এক: 'তানযীলুল কিতাবি মিনাল্লাহিল আযীযিল হাকীম'। ৪০:২-এর শেষে 'আল-হাকীম'-এর জায়গায় 'আল-আলীম'। ৩২:২-এ 'তানযীলুল কিতাবি'-র পরে আসে 'লা রাইবা ফীহি মির রাব্বিল-আলামীন'। ৪১:২-এ 'আল-কিতাব' নেই: 'তানযীলুম মিনার রাহমানির রাহীম'। সূরার ভেতরে ৫৬:৮০ আর ৬৯:৪৩ একই আয়াত: 'তানযীলুম মির রাব্বিল-আলামীন', ৪১:২-এর তানযীলুন আর ৩২:২-এর শেষাংশ মিলে।",
    "verses": [
      "32:2",
      "39:1",
      "40:2",
      "41:2",
      "45:2",
      "46:2",
      "56:80",
      "69:43"
    ]
  }
];
