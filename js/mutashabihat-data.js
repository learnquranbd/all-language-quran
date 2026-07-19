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
    nameAr: 'سور المسبّحات',
    descEn: 'Six surahs open with "Sabbaḥa / Yusabbiḥu lillāhi mā fī-s-samāwāti wa-l-arḍ…", differing only in verb form (past/present) and closing attributes. Huffaz frequently confuse which surah uses which form.',
    verses: ['57:1', '59:1', '61:1', '62:1', '64:1']
  },
  {
    id: 'hayy-qayyum',
    nameEn: 'Al-Ḥayy al-Qayyūm — The Ever-Living',
    nameAr: 'الحي القيوم',
    descEn: 'The divine names "al-Ḥayyu l-Qayyūm" appear three times: in Āyat al-Kursī, at the opening of Āl ʿImrān, and in Ṭāhā 20:111. The surrounding context differs significantly, making these three a classic memorisation challenge.',
    verses: ['2:255', '3:2', '20:111']
  },
  {
    id: 'iblis-sajda',
    nameEn: 'Iblīs Refuses to Bow',
    nameAr: 'امتناع إبليس عن السجود',
    descEn: 'The command to the angels to prostrate before Adam, and Iblīs\'s refusal, is narrated in seven places. Each retelling adjusts phrasing, emphasis, or Iblīs\'s excuse, making this the most-studied group of narrative mutashabihat.',
    verses: ['2:34', '7:11', '15:29', '17:61', '18:50', '20:116', '38:72']
  },
  {
    id: 'kullu-nafsin',
    nameEn: 'Every Soul Shall Taste Death',
    nameAr: 'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ',
    descEn: 'This identical phrase appears in three verses (3:185, 21:35, 29:57), each followed by a different continuation. Al-Kirmānī notes that the surrounding verses differ in focus: recompense, trial, and migration respectively.',
    verses: ['3:185', '21:35', '29:57']
  },
  {
    id: 'wa-ma-adraka',
    nameEn: '"What Will Make You Know…" (Wa-mā Adrāka Mā)',
    nameAr: 'وما أدراك ما',
    descEn: 'This rhetorical formula — "And what will make you perceive what [X] is?" — is used ~13 times to heighten the drama of cosmic or eschatological events. The formula is identical each time; only the subject differs.',
    verses: ['69:3', '74:27', '77:14', '82:18', '83:8', '83:19', '86:2', '90:12', '97:2', '101:3', '101:10', '104:5']
  },
  {
    id: 'waylun-yawmaidhin',
    nameEn: '"Woe That Day to the Deniers" — Refrain of al-Mursalāt',
    nameAr: 'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ',
    descEn: 'Surat al-Mursalāt (77) repeats this thundering refrain ten times after successive cosmic and eschatological scenes. The phrase is lexically identical in all ten occurrences — a deliberate Quranic refrain (lāzima).',
    verses: ['77:15', '77:19', '77:24', '77:28', '77:34', '77:37', '77:40', '77:45', '77:47', '77:49']
  },
  {
    id: 'fabi-ayyi',
    nameEn: '"Which of Your Lord\'s Favours Will You Deny?" — Refrain of al-Raḥmān',
    nameAr: 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',
    descEn: 'The celebrated refrain of Surat al-Raḥmān is repeated 31 times. These representative verses span the surah\'s main themes: creation, the two heavenly gardens, and divine mercy.',
    verses: ['55:13', '55:16', '55:18', '55:21', '55:23', '55:25', '55:28', '55:30', '55:32', '55:34', '55:36', '55:38', '55:40', '55:42', '55:45']
  },
  {
    id: 'aziz-hakim',
    nameEn: 'Divine Epithets at Verse-End — Al-ʿAzīz al-Ḥakīm / Al-ʿAlīm al-Ḥakīm',
    nameAr: 'العزيز الحكيم / العليم الحكيم',
    descEn: 'Dozens of verses close with divine name pairs ending in "al-Ḥakīm". The pairing varies: "al-ʿAzīzu l-Ḥakīm" vs "al-ʿAlīmu l-Ḥakīm" vs "al-Ghafūru l-Ḥakīm". Confusing which closing belongs where is a classic recitation error.',
    verses: ['2:129', '2:209', '2:220', '2:228', '3:6', '3:18', '4:56', '5:38', '8:49', '8:63', '8:67', '8:71', '9:40', '46:2', '60:5', '66:2']
  },
  {
    id: 'alif-lam-mim',
    nameEn: 'Alif-Lām-Mīm Openings',
    nameAr: 'سور الم',
    descEn: 'Six surahs open with the identical detached letters "Alif-Lām-Mīm". Within these, 2:1–2 and 31:1–3 share additional phrasing about "the guidance for the God-fearing" with subtle lexical shifts.',
    verses: ['2:1', '3:1', '29:1', '30:1', '31:1', '32:1']
  },
  {
    id: 'musa-firawn',
    nameEn: 'Moses Before Pharaoh — The Exodus Narrative',
    nameAr: 'موسى وفرعون',
    descEn: 'The encounter of Moses and Pharaoh is retold in seven surahs. Each account emphasises a different aspect of the story; the "framing" verse opening each account is a classic mutashabihat set.',
    verses: ['7:103', '10:75', '11:96', '17:101', '20:49', '26:10', '28:3']
  },
  {
    id: 'fastaqim',
    nameEn: '"Be Steadfast as You Were Commanded" — Fa-ṣṭaqim Kamā Umirta',
    nameAr: 'فَاسْتَقِمْ كَمَا أُمِرْتَ',
    descEn: 'Two verses (11:112 and 42:15) contain almost identical commands to the Prophet to remain steadfast. The first uses plural "wa-man tāba maʿak"; the second addresses him alone — a subtle but meaningful difference.',
    verses: ['11:112', '42:15']
  },
  {
    id: 'mithaq-jabal',
    nameEn: 'The Mountain Raised — Covenant with the Israelites',
    nameAr: 'رفع الطور وأخذ الميثاق',
    descEn: 'Three verses describe God raising the mountain (al-Ṭūr / al-Jabal) over the Israelites as a covenant witness. The phrasing is nearly identical; the placement and continuation differ.',
    verses: ['2:63', '2:93', '7:171']
  },
  {
    id: 'amanu-amilu',
    nameEn: '"Those Who Believe and Do Righteous Deeds"',
    nameAr: 'الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ',
    descEn: 'This formula for the believers appears in over 50 verses, nearly always followed by a promise of Gardens. The variation lies in what follows: some promise rivers, some mention specific divine attributes, some differ in the garden descriptions.',
    verses: ['2:82', '2:277', '3:57', '4:57', '4:122', '5:9', '7:42', '10:9', '18:30', '18:107', '29:7', '29:58', '31:8', '47:2', '85:11']
  },
  {
    id: 'noah-ark',
    nameEn: 'Noah\'s Ark — Divine Command to Build',
    nameAr: 'أمر نوح ببناء السفينة',
    descEn: 'The divine instruction to Nūḥ to build the ark appears three times. 11:37 and 23:27 are especially close; 26:116–118 varies more. Scholars note that 23:27 adds "bi-aʿyuninā" (under Our eyes) as a nuance absent in Hūd.',
    verses: ['11:37', '23:27', '26:116']
  },
  {
    id: 'quran-3-7-cluster',
    nameEn: 'Quran 3:7 — The Defining Verse on Mutashabihat',
    nameAr: 'آية المتشابهات',
    descEn: 'Surat Āl ʿImrān 3:7 is the Quran\'s own statement distinguishing muḥkamāt from mutashābihāt. Its echo in 2:269 shares the phrase "wa-mā yadhdhakkaru illā ulu l-albāb". These two represent the "meta-layer" of the phenomenon.',
    verses: ['3:7', '2:269']
  },

  // ── Wave 2 — 17 additional curated groups ────────────────────────────────

  {
    id: 'al-kahf-stories',
    nameEn: 'Al-Kahf — Four Narrative Opening Frames',
    nameAr: 'مطالع قصص سورة الكهف الأربع',
    descEn: 'Al-Kahf\'s four famous stories (Cave Youth, Two Garden Owners, Moses & Khiḍr, Dhul-Qarnayn) each open with a distinct rhetorical frame at 18:9, 18:32, 18:60, and 18:83. Ibn az-Zubayr al-Gharnāṭī notes that each frame mirrors the others in structure — a command/question introducing the narrative — making them a set of parallel narrative formulas that huffaz regularly conflate.',
    verses: ['18:9', '18:32', '18:60', '18:83']
  },
  {
    id: 'hawamim',
    nameEn: 'The Seven Ḥāʾ-Mīm Sūrahs',
    nameAr: 'الحواميم السبع',
    descEn: 'Sūrahs 40–46 all open with the detached letters "Ḥāʾ Mīm", and six of them immediately follow with "Tanzīl…" or a close variant. The closing divine-attribute pairs ("al-ʿAzīz al-ʿAlīm", "al-ʿAzīz al-Ḥakīm") rotate across these sūrahs, producing one of the densest clusters of mutashābihāt openings in the Quran.',
    verses: ['40:1', '41:1', '42:1', '43:1', '44:1', '45:1', '46:1']
  },
  {
    id: 'kadhālika-naqussu',
    nameEn: '"Thus We Narrate to You" — The Retelling Formula',
    nameAr: 'كَذَٰلِكَ نَقُصُّ عَلَيْكَ',
    descEn: 'Several verses use the formula "naḥnu naquṣṣu ʿalayka / kadhālika naquṣṣu ʿalayk" to frame the retelling of prophetic narratives. Al-Kirmānī lists this pattern as a key transition device: 7:101 and 11:100 are especially close, both referencing "the news of the towns"; 12:3 and 18:13 introduce individual stories; 20:99 closes a long narrative. Distinguishing which closing matches which story is a classic review exercise.',
    verses: ['7:101', '11:100', '12:3', '18:13', '20:99']
  },
  {
    id: 'opening-oaths',
    nameEn: 'The Short-Sūrah Opening Oath Cluster',
    nameAr: 'أقسام أوائل السور القصيرة',
    descEn: 'Five late-Makkan sūrahs open with single-object oaths by cosmic phenomena — dawn (89), sun (91), night (92), forenoon (93), fig (95) — each followed by a contrasting or complementary pair. The oaths share identical syntactic structure "wa-X" but differ in subject, making the sequence a memorisation challenge where students confuse which cosmic image belongs to which sūrah.',
    verses: ['89:1', '91:1', '92:1', '93:1', '95:1']
  },
  {
    id: 'yunus-dua',
    nameEn: 'Prophetic Supplications in Sūrat al-Anbiyāʾ',
    nameAr: 'أدعية الأنبياء في سورة الأنبياء',
    descEn: 'Three consecutive prophetic supplications appear in al-Anbiyāʾ (21:83–89): Ayyūb\'s cry of distress (21:83), Yūnus\'s tasbīḥ from the whale\'s belly — "lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn" (21:87) — and Zakariyyā\'s whispered plea (21:89). The near-identical framing "wa-Dhā n-Nūn / wa-Zakariyyā idh nādā rabbahu" makes the trio a famous memorisation cluster; 21:87 also echoes 68:48.',
    verses: ['21:83', '21:87', '21:89', '68:48']
  },
  {
    id: 'wujuhun-yawmaidhin',
    nameEn: 'Hell & Paradise Twin Openings — Sūrahs 56, 78, 88',
    nameAr: 'ازدواج وصف الجنة والنار في سور الواقعة والنبأ والغاشية',
    descEn: 'Three eschatological sūrahs describe Hell and Paradise in back-to-back passages of mirrored structure. Sūrat al-Wāqiʿa pairs "aṣḥābu l-yamīni" (56:27) with "aṣḥābu sh-shimāli" (56:41); al-Ghāshiya pairs "wujūhun yawma\'idhin khāshiʿa" (88:2) with "wujūhun yawma\'idhin nāʿima" (88:8), differing only in the adjective; an-Nabaʾ contrasts "inna jahannama kānat mirṣādā" (78:21) with "inna li-l-muttaqīna mafāzā" (78:31). Each pair is structurally identical — a classic tool for teaching the Day of Judgement passages.',
    verses: ['56:27', '56:41', '78:21', '78:31', '88:2', '88:8']
  },
  {
    id: 'wa-ma-tafarraqu',
    nameEn: '"They Did Not Divide Except After Knowledge Came" — Splitting Verses',
    nameAr: 'وَمَا تَفَرَّقُوا إِلَّا مِنۢ بَعْدِ مَا جَآءَهُمُ الْعِلْمُ',
    descEn: 'Three verses warn that communities split only after clear knowledge reached them: 3:105, 30:32, and 42:14 share nearly the same phrasing. Ibn az-Zubayr al-Gharnāṭī contrasts these with 42:13, which introduces the divine command for unity, noting the contextual shift — unity commanded, then violated — as a deliberate rhetorical pair that students consistently confuse.',
    verses: ['3:105', '30:32', '42:13', '42:14']
  },
  {
    id: 'kafa-billahi',
    nameEn: '"Allah Suffices as…" — The Affirmation Closing Formula',
    nameAr: 'وَكَفَىٰ بِٱللَّهِ',
    descEn: 'The phrase "wa-kafā bi-llāhi X" (Allah suffices as witness / guardian / disposer) closes dozens of verses with slightly different objects: "shahīdā" (witness), "wakīlā" (guardian/disposer), "naṣīrā" (helper), "waliyyā" (protector). Al-Kirmānī dedicates a section to these colophon variants, noting that confusing "shahīdā" with "wakīlā" at verse-end is one of the most frequent recitation errors. Representative instances span four sūrahs.',
    verses: ['4:45', '4:79', '4:132', '4:166', '33:3', '33:48', '48:28']
  },
  {
    id: 'la-yaghfiru-shirk',
    nameEn: '"Allah Does Not Forgive Shirk" — The Twin Verses of 4:48 & 4:116',
    nameAr: 'إِنَّ ٱللَّهَ لَا يَغۡفِرُ أَن يُشۡرَكَ بِهِۦ',
    descEn: 'Verses 4:48 and 4:116 are among the most famous word-for-word repetitions in the Quran: "inna llāha lā yaghfiru an yushraka bihi wa-yaghfiru mā dūna dhālika li-man yashāʾ" — with only the surrounding context differing. Al-Kirmānī notes they were revealed in identical wording to underscore the absolute nature of the ruling, while the distinct contexts (general warning vs. specific reaffirmation) give each its own communicative force.',
    verses: ['4:48', '4:116']
  },
  {
    id: 'yasal-unaka',
    nameEn: '"They Ask You About…" — The Rhetorical Question Series',
    nameAr: 'يَسْأَلُونَكَ عَنِ',
    descEn: 'The formula "yasʾalūnaka ʿan…" appears eight or more times, each time introducing a question put to the Prophet and the divine answer. Seven cluster in al-Baqarah and al-Aʿrāf; lone instances appear in al-Anfāl (8:1), al-Isrāʾ (17:85), and al-Nāziʿāt (79:42). The identical opening and varied subjects — new moons, spending, sacred months, wine, orphans, war spoils, the spirit, the Hour — make this a key series for sequential-memorisation drills.',
    verses: ['2:189', '2:215', '2:217', '2:219', '2:222', '8:1', '17:85', '79:42']
  },
  {
    id: 'sab-a-samawat',
    nameEn: 'The Seven Heavens — Numeric Parallelism',
    nameAr: 'السماوات السبع',
    descEn: 'The phrase "sabʿa samāwāt" (seven heavens) appears in seven verses across the Quran. Each occurrence has a slightly different syntactic environment — some add "ṭibāqā" (layered), some follow creation of the earth, some precede glorification — making the set a textbook example of numeric parallelism. Al-Kirmānī notes that students memorising each surah\'s cosmological passage often import the wording from another occurrence.',
    verses: ['2:29', '17:44', '23:17', '41:12', '65:12', '67:3', '71:15']
  },
  {
    id: 'iblis-vow',
    nameEn: 'Iblīs\'s Sworn Vows to Mislead Humanity',
    nameAr: 'أقسام إبليس على الإغواء',
    descEn: 'Satan\'s vow to mislead humanity is recorded three times, each using a first-person oath with a different opening formula: "fa-bi-mā aghwaytanī la-aqʿudanna lahum" (7:16), "la-uzayyinanna lahum fī l-arḍi" (15:39), and "fa-bi-ʿizzatika la-ughwiyannahum ajmaʿīn" (38:82). The vows escalate in scope — ambush on the path, beautification of the earth, total seduction — and students reciting the Iblīs narrative across these three sūrahs routinely conflate the wording.',
    verses: ['7:16', '15:39', '38:82']
  },
  {
    id: 'nur-istidhna',
    nameEn: 'Permission-Seeking Verses — Al-Nūr\'s Repeated Protocol',
    nameAr: 'آيات الاستئذان في سورة النور',
    descEn: 'Sūrat al-Nūr legislates the protocol for entering homes in two near-parallel pairs: 24:27–28 addresses seeking permission before entering others\' homes; 24:58–59 addresses the permission required of children/servants at three specific times. The two pairs share nearly identical grammatical structure and several shared phrases, creating a legislative parallelism that al-Kirmānī highlights as an example of legal mutashābihāt.',
    verses: ['24:27', '24:28', '24:58', '24:59']
  },
  {
    id: 'mu-minun-maarij',
    nameEn: 'Believers\' Traits — Al-Muʾminūn & Al-Maʿārij Parallels',
    nameAr: 'صفات المؤمنين بين المؤمنون والمعارج',
    descEn: 'The opening of al-Muʾminūn (23:1–9) and a central passage of al-Maʿārij (70:22–35) enumerate almost the same list of believers\' characteristics — humility in prayer, giving zakāh, guarding chastity, keeping covenants — in nearly identical phrasing. Ibn az-Zubayr al-Gharnāṭī identifies this cross-sūrah repetition as deliberate structural reinforcement. The near-identical verse pairs (23:2/70:23, 23:5/70:29, 23:8/70:32) are a staple of advanced ḥifẓ review.',
    verses: ['23:2', '23:5', '23:8', '70:23', '70:29', '70:32']
  },
  {
    id: 'rasul-ila-kull-umma',
    nameEn: '"To Every Nation a Messenger" — Universal Prophethood Variants',
    nameAr: 'لكل أمة رسول',
    descEn: 'Four verses state the principle of universal divine guidance with slightly different wording: "wa-likulli ummatin rasūl" (10:47), "wa-likulli qawmin hād" (13:7), "wa-laqad baʿathnā fī kulli ummatin rasūlan" (16:36), and "wa-in min ummatin illā khalā fīhā nadhīr" (35:24). Al-Kirmānī treats these as near-synonymous restatements whose subtle lexical differences (rasūl / hād / nadhīr; umma / qawm) carry distinct theological emphasis — and whose similarity makes them a target for substitution errors.',
    verses: ['10:47', '13:7', '16:36', '35:24']
  },
  {
    id: 'wa-ittaqu-yawman',
    nameEn: '"Fear a Day When No Soul Can Avail Another" — Identical Warning Verses',
    nameAr: 'وَٱتَّقُواْ يَوۡمًا لَّا تَجۡزِي نَفۡسٌ عَن نَّفۡسٍ شَيۡـًٔا',
    descEn: 'Verses 2:48 and 2:123 are word-for-word identical within the same sūrah, both warning: "wa-ttaqū yawman lā tajzī nafsun ʿan nafsin shay\'an wa-lā yuqbalu minhā shafāʿatun…" — one of the Quran\'s clearest deliberate repetitions for emphasis. A third closely related verse (2:281) uses "wa-ttaqū yawman turjaʿūna fīhi ilā llāh", completing the triad of Day-of-Judgement warnings in al-Baqarah.',
    verses: ['2:48', '2:123', '2:281']
  },
  {
    id: 'ibrahim-mecca-dua',
    nameEn: 'Ibrāhīm\'s Supplication for Mecca — The Subtle Twin',
    nameAr: 'دعاء إبراهيم لمكة بين البقرة وإبراهيم',
    descEn: 'Two verses record Ibrāhīm\'s prayer for Mecca in almost identical wording: 2:126 reads "rabbi-jʿal hādhā baladan āminā" (indefinite — "make this a safe land") while 14:35 reads "rabbi-jʿal hādhā l-balada āminā" (definite — "make this, the land, safe"). Al-Kirmānī identifies the tanwīn/definite-article distinction as one of the subtlest single-word mutashābihāt in the Quran, corresponding to two different moments in Ibrāhīm\'s life. Students at every level routinely substitute one for the other.',
    verses: ['2:126', '2:127', '14:35', '14:37']
  },

  // ── Wave 3 — 22 additional curated groups ────────────────────────────────

  {
    id: 'baqarah-cow-story',
    nameEn: 'Al-Baqarah — The Cow Command Sequence',
    nameAr: 'قصة البقرة في سورة البقرة',
    descEn: 'The divine command to slaughter a cow (2:67–71) unfolds as a progressive series of five clarifications, each verse answering a further objection with near-identical framing ("qāla innahu yaqūlu…"). Al-Kirmānī notes that this internal sequential repetition — identical framing, escalating specificity — is itself a form of intra-sūrah mutashābihāt that students memorising al-Baqarah consistently scramble, since no external landmark distinguishes the five "which cow?" exchanges from one another.',
    verses: ['2:67', '2:68', '2:69', '2:70', '2:71']
  },
  {
    id: 'calf-worship',
    nameEn: 'The Golden Calf — Three Sūrah Accounts',
    nameAr: 'عبادة العجل في ثلاثة مواضع',
    descEn: 'The Israelites\' worship of the golden calf is narrated in three sūrahs: 2:51 (brief), 7:148–150 (extended, with the people\'s grief), and 20:85–97 (dialogue with Mūsā and al-Sāmirī). The key phrase "ʿijlan jasadan" echoes between 7:148 and 20:88. Ibn az-Zubayr al-Gharnāṭī contrasts all three accounts: each foregrounds a different dimension — the sin (al-Baqarah), the communal grief (al-Aʿrāf), and the instigator al-Sāmirī (Ṭāhā) — while sharing enough phrasing that cross-sūrah substitution is extremely common.',
    verses: ['2:51', '7:148', '7:150', '20:85', '20:88', '20:97']
  },
  {
    id: 'twelve-springs',
    nameEn: 'Twelve Springs from the Rock',
    nameAr: 'انبجاس الاثنتي عشرة عيناً من الحجر',
    descEn: 'Two verses record the miracle of water gushing from the struck rock for the twelve tribes: 2:60 ("fa-nfajarat minhu thnātā ʿashrata ʿaynan") and 7:160 ("wa-qāṭaʿnāhumu thnataʿy ʿashrata asbāṭan… an-iḍrib bi-ʿaṣāka l-ḥajar"). Al-Kirmānī highlights the lexical shift between "infajarat" (burst forth, 2:60) and "inbajasa" (welled up, 7:160) as a one-word difference that students routinely transpose, since both verses describe the same event and share the same numeric "twelve".',
    verses: ['2:60', '7:160']
  },
  {
    id: 'zakariyya-dua',
    nameEn: 'Zakariyyā\'s Prayer for a Son — Āl ʿImrān & Maryam',
    nameAr: 'دعاء زكريا بين آل عمران ومريم',
    descEn: 'Zakariyyā\'s prayer for a righteous heir is recounted in 3:38–41 and 19:2–11. In Āl ʿImrān the prayer follows his witnessing of Maryam\'s miraculous provision; in Maryam it is introduced as a "dhikru raḥmati rabbika" and elaborated with Zakariyyā\'s own fears about succession (19:5). The three-day sign of silence appears in both sūrahs — 3:41 and 19:10 — in near-identical wording, making it one of the most tested cross-sūrah verse pairs in advanced ḥifẓ review.',
    verses: ['3:38', '3:41', '19:3', '19:7', '19:10']
  },
  {
    id: 'maryam-provision',
    nameEn: 'Maryam\'s Miraculous Provision — Two Scenes',
    nameAr: 'رزق مريم في آل عمران ومريم',
    descEn: 'Maryam receives divine provision in two distinct scenes: 3:37 describes food found by Zakariyyā in her prayer niche ("wajada ʿindahā rizqan"), while 19:25–26 records the angel\'s command at the palm tree to eat fresh dates and drink from a stream. Al-Kirmānī groups these as a structural pair — two divine provisions at different life-moments — noting that student memorisers conflate them because both feature miraculous food and a divine address to Maryam alone.',
    verses: ['3:37', '19:25', '19:26']
  },
  {
    id: 'isa-miracles',
    nameEn: 'ʿĪsā\'s Miracles — Two Canonical Listings',
    nameAr: 'معجزات عيسى في آل عمران والمائدة',
    descEn: 'The miracles of ʿĪsā are listed twice: 3:49 (in ʿĪsā\'s own speech — predictive: "I create… I heal… I raise the dead") and 5:110 (divine address on Judgement Day — "when I taught you…"). Both enumerate the clay bird, healing the blind and the leper, and raising the dead in the same order; 5:110 appends "bi-idhnī" (by My leave) after each miracle. Al-Kirmānī identifies the "bi-idhnī" addition as one of the most tested single-phrase distinctions in advanced ḥifẓ revision.',
    verses: ['3:49', '5:110']
  },
  {
    id: 'ibrahim-stars-moon',
    nameEn: 'Ibrāhīm\'s Contemplation of Stars, Moon and Sun',
    nameAr: 'مشهد إبراهيم والنجم والقمر والشمس في الأنعام',
    descEn: 'Sūrat al-Anʿām 6:74–83 presents a sequential monotheism argument unique in the Quran: Ibrāhīm observes a star, then the moon, then the sun — each time declaring "hādhā rabbī" followed by "lā uḥibbu l-āfilīn" when it sets. This three-stage elimination is structurally echoed in 21:57–67 and 37:88–98. Ibn az-Zubayr al-Gharnāṭī notes that the internal repetition of the "hādhā rabbī" pattern within al-Anʿām is itself the key memorisation challenge, as students compress or expand the three stages into each other.',
    verses: ['6:74', '6:76', '6:77', '6:78', '6:79', '6:83']
  },
  {
    id: 'araf-prophet-cycle',
    nameEn: 'Al-Aʿrāf\'s Serial Prophet Cycle — Parallel Opening Frames',
    nameAr: 'فاتحة قصص الأنبياء في الأعراف',
    descEn: 'Al-Aʿrāf presents six consecutive prophet stories (Nūḥ, Hūd, Ṣāliḥ, Lūṭ, Shuʿayb, Mūsā) each introduced by a near-identical formula: "laqad arsalnā Nūḥan" (7:59), "wa-ilā ʿĀdin akhāhum Hūdan" (7:65), "wa-ilā Thamūda akhāhum Ṣāliḥan" (7:73), "wa-ilā Madyana akhāhum Shuʿayban" (7:85). Each story follows the same arc: prophet calls "yā qawmi", people refuse, punishment descends. Al-Kirmānī identifies this as the most complex intra-sūrah chain of mutashābihāt in the middle-Makkan sūrahs, directly paralleled by Sūrat Hūd.',
    verses: ['7:59', '7:65', '7:73', '7:85', '7:103']
  },
  {
    id: 'hud-prophet-cycle',
    nameEn: 'Sūrat Hūd\'s Prophet Cycle — Twin of Al-Aʿrāf',
    nameAr: 'قصص الأنبياء في سورة هود وتوازيها مع الأعراف',
    descEn: 'Sūrat Hūd retells five of the same prophet stories as al-Aʿrāf (Nūḥ: 11:25, Hūd: 11:50, Ṣāliḥ: 11:61, Lūṭ: 11:77, Shuʿayb: 11:84), using near-identical internal framing ("qāla yā qawmi ʿbudū llāha mā lakum min ilāhin ghayruh"). Scholars call the two sūrahs the "twin prophet cycles": each Hūd account nearly mirrors its al-Aʿrāf counterpart yet adds distinctive dialogue absent in al-Aʿrāf. Ibn az-Zubayr al-Gharnāṭī notes that cross-sūrah substitution between the two cycles is the most common advanced ḥifẓ error in these narratives.',
    verses: ['11:25', '11:50', '11:61', '11:77', '11:84']
  },
  {
    id: 'shuara-kadhdhaba',
    nameEn: 'Ash-Shuʿarāʾ — "They Denied the Messengers" Refrain',
    nameAr: 'لازمة كَذَّبَتْ في سورة الشعراء',
    descEn: 'Sūrat ash-Shuʿarāʾ (26) opens six consecutive prophet narratives with the formula "kadhdhabat qawmu Nūḥin l-mursalīn… kadhdhabat ʿĀdun l-mursalīn… kadhdhabat Thamūdu l-mursalīn…" (26:105, 26:123, 26:141, 26:160, 26:176, 26:189). After each narrative, two identical lines close it as a refrain: "wa-inna rabbaka la-huwa l-ʿAzīzu r-Raḥīm". Al-Kirmānī calls this the clearest example of the lāzima (refrain) device in the Quran — the six openings are lexically interchangeable except for the name of the people, making them a supreme sequential-memorisation test.',
    verses: ['26:105', '26:123', '26:141', '26:160', '26:176', '26:189']
  },
  {
    id: 'qamar-yassarna',
    nameEn: 'Al-Qamar — "We Have Made the Quran Easy" Fourfold Refrain',
    nameAr: 'لازمة وَلَقَدۡ يَسَّرۡنَا ٱلۡقُرۡءَانَ لِلذِّكۡرِ في القمر',
    descEn: '"Wa-laqad yassarnā l-Qurʾāna li-dh-dhikri fa-hal min muddakir?" is repeated verbatim four times in Sūrat al-Qamar: 54:17, 54:22, 54:32, and 54:40, each following a narrative of a destroyed people (Nūḥ, ʿĀd, Thamūd, Lūṭ). Unlike ar-Raḥmān\'s refrain, the verse itself never changes — the challenge is recalling which destroyed nation precedes which repetition, since the four instances differ only in their surrounding context. This makes it a classic sequential-order drill for ḥifẓ review.',
    verses: ['54:17', '54:22', '54:32', '54:40']
  },
  {
    id: 'hijr-destroyed-towns',
    nameEn: 'Al-Ḥijr — "Companions of the Towns" Destruction Pattern',
    nameAr: 'أصحاب الأيكة وأصحاب الحجر في الحجر والشعراء وغيرهما',
    descEn: '"Aṣḥābu l-Ayka" (companions of the thicket = people of Shuʿayb) appears identically in 15:78, 26:176, 38:13, and 50:14. "Aṣḥābu l-ḥijr" (stone-dwellers = Thamūd) appears only in 15:80. Al-Kirmānī notes that the near-identical construct "aṣḥābu l-…" — followed in each case by a brief destruction notice — creates a memorisation trap: students conflate which designation refers to which people, and which sūrah provides what detail about their fate.',
    verses: ['15:78', '15:80', '26:176', '38:13', '50:14']
  },
  {
    id: 'isra-commandments',
    nameEn: 'Al-Isrāʾ — The Ethical Code Sequence (17:22–39)',
    nameAr: 'وصايا سورة الإسراء الأخلاقية',
    descEn: 'Verses 17:22–39 form the Quran\'s most structured ethical sequence: thirteen prohibitions and commands covering monotheism, parents, relatives, the poor, wastefulness, infanticide, adultery, unjust killing, orphan wealth, weights and measures, knowledge, and arrogance. Each command employs a parallel "wa-lā taʿbud / wa-lā taqtul / wa-lā taqrab" frame. Al-Kirmānī identifies the sequence as "parallel legislative mutashābihāt" — internally consistent in syntax — making the correct ordering of the thirteen commands a classic memorisation drill.',
    verses: ['17:22', '17:23', '17:31', '17:32', '17:33', '17:36', '17:37']
  },
  {
    id: 'inna-anzalna',
    nameEn: '"Indeed We Sent It Down" — The Revelation Descent Cluster',
    nameAr: 'إِنَّآ أَنزَلۡنَٰهُ — مواضع نزول القرآن',
    descEn: '"Innā anzalnāhu" and its near variants introduce divine revelation in a cluster of verses. Sūrat al-Qadr (97:1) reads "innā anzalnāhu fī laylati l-qadr"; its parallel 44:3 reads "innā anzalnāhu fī laylatin mubārakah" — two verses describing the same Blessed Night in almost identical openings. Further parallels include 4:105 ("innā anzalnā ilayka l-kitāba bi-l-ḥaqq") and 2:4 (reference to what was sent down before and after). Al-Kirmānī lists the 97:1/44:3 pair as a celebrated source of confusion between "laylatu l-qadr" and "laylatun mubārakah".',
    verses: ['2:4', '4:105', '44:3', '97:1']
  },
  {
    id: 'wamma-jaa-musa',
    nameEn: '"And When He Came" — The Arrival Formula in Moses Narratives',
    nameAr: 'وَلَمَّا جَآءَ في قصص موسى',
    descEn: 'The phrase "wa-lammā jāʾa Mūsā / wa-lammā jāʾahu" appears at pivotal moments across Mosaic narratives: 7:143 (Mūsā arrives at the appointed time and asks to see God), 20:83 (God asks why Mūsā came ahead of his people), 28:29 (Mūsā arrives at the sacred fire), and 28:44 (narrator note on the western side). Each use of the identical formula introduces a different extraordinary encounter. Ibn az-Zubayr al-Gharnāṭī identifies these as deliberate narrative callbacks; students must pair each "arrival" with its correct context.',
    verses: ['7:143', '20:83', '28:29', '28:44']
  },
  {
    id: 'yawma-yaqumu',
    nameEn: '"The Day People Stand" — Resurrection Standing Formulas',
    nameAr: 'يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ',
    descEn: '"Yawma yaqūmu n-nāsu li-rabbi l-ʿālamīn" (83:6) is the starkest Resurrection-standing formula. Parallel expressions include "wa-yawma taqūmu s-sāʿatu yublafu l-mujrimūna" (30:12), "yawma hum bārizūna lā yakhfā ʿalā llāhi minhum shayʾun" (40:16), and "wa-stundhirhum yawma l-āzifati idhi l-qulūbu laday l-ḥanājiri" (40:18). Al-Kirmānī notes that all four describe the same moment yet vary in emphasising the crowd, the criminals, divine omniscience, or human terror — and compositing resurrection passages from multiple sūrahs is a common advanced memorisation error.',
    verses: ['30:12', '40:16', '40:18', '83:6']
  },
  {
    id: 'fa-amma-man-conditional',
    nameEn: '"As for the One Who…" — The Mirror Conditional Pair in al-Nāziʿāt',
    nameAr: 'فَأَمَّا مَن طَغَىٰ / وَأَمَّا مَنۡ خَافَ في النازعات',
    descEn: 'Sūrat an-Nāziʿāt (79) presents the sharpest "fa-ammā / wa-ammā" conditional pair in the Quran: "fa-ammā man ṭaghā wa-āthara l-ḥayāta d-dunyā fa-inna l-jaḥīma hiya l-maʾwā" (79:37–39) versus "wa-ammā man khāfa maqāma rabbihi wa-nahan-nafsa ʿani l-hawā fa-inna l-jannata hiya l-maʾwā" (79:40–41). Both halves close with the same frame "fa-inna l-[abode] hiya l-maʾwā". Al-Kirmānī places this pair as the paradigm of ʿaksi l-mutashābihāt (inverted similar verses): identical syntactic frame, antithetical content.',
    verses: ['79:37', '79:38', '79:39', '79:40', '79:41']
  },
  {
    id: 'ala-hudan',
    nameEn: '"Those Are on Guidance from Their Lord" — The Sealant Formula',
    nameAr: 'أُوْلَٰٓئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمۡ وَأُوْلَٰٓئِكَ هُمُ الۡمُفۡلِحُونَ',
    descEn: '"Ūlāʾika ʿalā hudan min rabbihim wa-ūlāʾika humu l-mufliḥūn" closes the description of the God-fearing in 2:5, then reappears word-for-word in 31:5 to close an almost identical portrait of the Muhsinīn. The formula also echoes partially in 6:82 ("ūlāʾika lahumu l-amnu wa-hum muhtadūn"). Al-Kirmānī highlights the 2:5/31:5 pair as the Quran\'s clearest instance of a "sealant formula" (khātima) transplanted from one sūrah to another in identical form — one of the most elegant cross-sūrah mutashābihāt.',
    verses: ['2:5', '6:82', '31:5']
  },
  {
    id: 'in-tutiu-obedience',
    nameEn: '"Obey Allah and the Messenger" — The Repeated Obedience Command',
    nameAr: 'أَطِيعُواْ ٱللَّهَ وَأَطِيعُواْ ٱلرَّسُولَ',
    descEn: 'The imperative "aṭīʿū llāha wa-aṭīʿū r-rasūla" appears in 4:59, 5:92, 8:20, 24:54, 47:33, and 64:12 with near-identical wording. Each occurrence is followed or preceded by a different condition — consequences of disobedience, the call to unity in struggle, or a warning about pure conveyance — while the core command remains constant. Ibn az-Zubayr al-Gharnāṭī identifies the varying follow-up clause paired to each identical command as the hallmark challenge: students must associate the correct consequence with the correct sūrah.',
    verses: ['4:59', '5:92', '8:20', '24:54', '47:33', '64:12']
  },
  {
    id: 'maidah-halal-haram',
    nameEn: 'The Forbidden Foods List — Four Near-Identical Occurrences',
    nameAr: 'قائمة المحرمات الغذائية في البقرة والمائدة والأنعام والنحل',
    descEn: 'The same forbidden-food list (carrion, blood, pork, and what is dedicated to other than God) appears at 2:173, 5:3, 6:145, and 16:115. The core four items are identical in all four; 6:145 adds "aw fisqan uhilla li-ghayri llāhi bih" and uses "rijzun" (impurity); 5:3 extends the list with animals killed by strangling or goring. Al-Kirmānī treats the quartet as the Quran\'s premier example of legislative repetition-with-expansion, noting that 2:173 and 16:115 are nearly word-for-word and constitute a standard ḥifẓ examination topic.',
    verses: ['2:173', '5:3', '6:145', '16:115']
  },
  {
    id: 'nisa-inheritance',
    nameEn: 'Al-Nisāʾ — Inheritance Legislation and Its Closing Epithets',
    nameAr: 'آيات المواريث في النساء',
    descEn: 'The inheritance legislation spans three passages: 4:11 (children\'s shares, closing "ʿalīman ḥakīman"), 4:12 (spouses\' and siblings\' shares, closing "ʿalīmun ḥakīm"), and 4:176 (the kalāla clause, closing "ʿalīmun bi-kulli shayʾin"). Al-Kirmānī identifies the near-identical arithmetic structure of 4:11 and 4:12 — each parsing male-to-female ratios then appending conditions — as the paradigm of legislative mutashābihāt. Students regularly import fractions or conditions from one verse into the other, making this trio a staple of advanced fiqh-and-ḥifẓ review.',
    verses: ['4:11', '4:12', '4:176']
  },
  {
    id: 'fa-man-athlam',
    nameEn: '"Who Is More Unjust Than One Who…" — The Rhetorical Indictment Formula',
    nameAr: 'فَمَنۡ أَظۡلَمُ مِمَّنۡ — التقريع البلاغي',
    descEn: 'The rhetorical formula "fa-man aẓlamu mim-man…" (who is more unjust than one who…) appears nine times across six sūrahs, each introducing a specific category of supreme transgression: fabricating lies against God (6:21, 6:93, 7:37, 10:17, 11:18, 29:68, 39:32) or concealing divine testimony (2:140). Al-Kirmānī devotes an extended section in al-Burhān to this group, noting that the question is always rhetorical — no one is more unjust — yet the offence named varies each time, and students memorising these sūrahs routinely transpose the specific crime from one occurrence to another.',
    verses: ['2:140', '6:21', '6:93', '7:37', '10:17', '11:18', '29:68', '39:32']
  }
];
