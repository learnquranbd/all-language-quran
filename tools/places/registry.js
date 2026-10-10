// The places the "Places in the Quran" module covers, with candidate ayat for the drafter
// to verify (not authoritative: the drafter confirms each ref in data/quran-words.json and
// drops any that don't name or clearly refer to the place). Batches P1-P3.
// kind: city | sanctuary | mountain | valley | land | battle | sea | ruin
// group: the module section a place is listed under when it differs from its batch
const PLACES = [
  // P1: the Sanctuary and the Prophet's ﷺ lifetime
  { id: 'makkah', batch: 'P1', kind: 'city', en: 'Makkah (Bakkah)', ar: 'مكة / بكة', refs: ['3:96', '48:24', '6:92', '42:7', '95:3', '90:1-2'] },
  { id: 'kabah', batch: 'P1', kind: 'sanctuary', en: 'The Kaʿbah', ar: 'الكعبة', refs: ['5:97', '2:125', '2:127', '22:26', '22:29', '22:33', '106:3'] },
  { id: 'masjid-haram', batch: 'P1', kind: 'sanctuary', en: 'al-Masjid al-Ḥarām', ar: 'المسجد الحرام', refs: ['17:1', '2:144', '2:191', '5:2', '8:34', '9:28', '48:25', '48:27'] },
  { id: 'maqam-ibrahim', batch: 'P1', kind: 'sanctuary', en: 'Maqām Ibrāhīm', ar: 'مقام إبراهيم', refs: ['2:125', '3:97'] },
  { id: 'safa-marwah', batch: 'P1', kind: 'sanctuary', en: 'aṣ-Ṣafā and al-Marwah', ar: 'الصفا والمروة', refs: ['2:158'] },
  { id: 'arafat', batch: 'P1', kind: 'sanctuary', en: 'ʿArafāt', ar: 'عرفات', refs: ['2:198'] },
  { id: 'mashar', batch: 'P1', kind: 'sanctuary', en: 'al-Mashʿar al-Ḥarām (Muzdalifah)', ar: 'المشعر الحرام', refs: ['2:198'] },
  { id: 'madinah', batch: 'P1', kind: 'city', en: 'al-Madīnah (Yathrib)', ar: 'المدينة / يثرب', refs: ['33:13', '9:101', '9:120', '63:8', '33:60'] },
  { id: 'badr', batch: 'P1', kind: 'battle', en: 'Badr', ar: 'بدر', refs: ['3:123', '8:41-44'] },
  { id: 'uhud', batch: 'P1', kind: 'battle', en: 'Uḥud (alluded to)', ar: 'أحد', refs: ['3:121-122', '3:152-155'] },
  { id: 'hunayn', batch: 'P1', kind: 'battle', en: 'Ḥunayn', ar: 'حنين', refs: ['9:25-26'] },
  { id: 'cave-thawr', batch: 'P1', kind: 'mountain', en: 'The Cave of the Hijrah (Thawr)', ar: 'الغار', refs: ['9:40'] },
  { id: 'hudaybiyah', batch: 'P1', kind: 'valley', en: 'al-Ḥudaybiyah (the Tree)', ar: 'الحديبية', refs: ['48:18', '48:24-25'] },
  // P2: Mūsā, the Israelites and the Holy Land
  { id: 'misr', batch: 'P2', kind: 'land', en: 'Egypt (Miṣr)', ar: 'مصر', refs: ['10:87', '12:21', '12:99', '43:51', '2:61'] },
  { id: 'yamm', batch: 'P2', kind: 'sea', en: 'The river of Mūsā\'s infancy (al-yamm)', ar: 'اليم', refs: ['20:39', '28:7'] },
  { id: 'sea-crossing', batch: 'P2', kind: 'sea', en: 'The sea that was parted', ar: 'البحر', refs: ['2:50', '7:138', '10:90', '20:77-78', '26:63', '44:24'] },
  { id: 'tur', batch: 'P2', kind: 'mountain', en: 'Mount Sinai (aṭ-Ṭūr)', ar: 'الطور / طور سيناء', refs: ['23:20', '95:2', '2:63', '19:52', '20:80', '28:29', '52:1'] },
  { id: 'tuwa', batch: 'P2', kind: 'valley', en: 'The sacred valley of Ṭuwā', ar: 'طوى', refs: ['20:12', '79:16'] },
  { id: 'madyan', batch: 'P2', kind: 'city', en: 'Madyan', ar: 'مدين', refs: ['7:85', '9:70', '11:84', '20:40', '28:22-23', '28:45', '29:36'] },
  { id: 'aykah', batch: 'P2', kind: 'land', en: 'The People of the Thicket (al-Aykah)', ar: 'الأيكة', refs: ['15:78', '26:176', '38:13', '50:14'] },
  { id: 'aqsa', batch: 'P2', kind: 'sanctuary', en: 'al-Masjid al-Aqṣā', ar: 'المسجد الأقصى', refs: ['17:1', '17:7'] },
  { id: 'holy-land', batch: 'P2', kind: 'land', en: 'The Holy Land', ar: 'الأرض المقدسة', refs: ['5:21', '21:71', '21:81', '7:137', '17:1'] },
  // P3: earlier nations, and lands named once
  { id: 'ahqaf', batch: 'P3', kind: 'land', en: 'al-Aḥqāf, land of ʿĀd', ar: 'الأحقاف', refs: ['46:21'] },
  { id: 'iram', batch: 'P3', kind: 'ruin', en: 'Iram of the pillars', ar: 'إرم ذات العماد', refs: ['89:6-8'] },
  { id: 'hijr', batch: 'P3', kind: 'ruin', en: 'al-Ḥijr, land of Thamūd', ar: 'الحجر', refs: ['15:80-84', '7:74', '89:9', '26:149'] },
  { id: 'saba', batch: 'P3', kind: 'land', en: 'Sabaʾ and its dam', ar: 'سبأ', refs: ['27:22', '34:15-16'] },
  { id: 'ukhdud', batch: 'P3', kind: 'ruin', en: 'The People of the Trench (al-Ukhdūd)', ar: 'الأخدود', refs: ['85:4-8'] },
  { id: 'babil', batch: 'P3', kind: 'city', en: 'Bābil', ar: 'بابل', refs: ['2:102'] },
  { id: 'judi', batch: 'P3', kind: 'mountain', en: 'al-Jūdī, where the Ark came to rest', ar: 'الجودي', refs: ['11:44'] },
  { id: 'mutafikat', batch: 'P3', kind: 'ruin', en: 'The overturned cities of Lūṭ', ar: 'المؤتفكات', refs: ['9:70', '53:53', '69:9', '11:82', '15:76', '37:137'] },
  { id: 'rum', batch: 'P3', kind: 'land', en: 'ar-Rūm and "the nearest land"', ar: 'الروم', refs: ['30:2-4'] },
  { id: 'fil', batch: 'P3', kind: 'battle', en: 'The Elephant army\'s approach to Makkah', ar: 'أصحاب الفيل', refs: ['105:1-5'] },
  { id: 'kahf', batch: 'P3', kind: 'mountain', en: 'The Cave of the Sleepers (location unknown)', ar: 'الكهف', refs: ['18:9-10', '18:17', '18:25'] },
  { id: 'rass', batch: 'P3', kind: 'land', en: 'The People of ar-Rass (location unknown)', ar: 'أصحاب الرس', refs: ['25:38', '50:12'] },
  // P4: more of the Prophet's ﷺ time (added 2026-10-10)
  { id: 'taif', batch: 'P4', group: 'P1', kind: 'city', en: 'aṭ-Ṭāʾif, the second of "the two towns"', ar: 'الطائف', refs: ['43:31'] },
  { id: 'mina', batch: 'P4', group: 'P1', kind: 'sanctuary', en: 'Minā and the counted days', ar: 'منى', refs: ['2:203'] },
  { id: 'khandaq', batch: 'P4', group: 'P1', kind: 'battle', en: 'The Trench (al-Aḥzāb)', ar: 'الخندق / الأحزاب', refs: ['33:9-13', '33:20', '33:22', '33:25'] },
  { id: 'quba', batch: 'P4', group: 'P1', kind: 'sanctuary', en: 'The mosque founded on taqwā, and the mosque of harm', ar: 'مسجد قباء / مسجد الضرار', refs: ['9:107-110'] },
  { id: 'nadir', batch: 'P4', group: 'P1', kind: 'ruin', en: 'The fortresses of Banū an-Naḍīr', ar: 'بنو النضير', refs: ['59:2-6'] },
  { id: 'khaybar', batch: 'P4', group: 'P1', kind: 'battle', en: 'Khaybar, the spoils promised after al-Ḥudaybiyah', ar: 'خيبر', refs: ['48:15', '48:18-21'] },
  { id: 'tabuk', batch: 'P4', group: 'P1', kind: 'battle', en: 'Tabūk, "the hour of hardship"', ar: 'تبوك', refs: ['9:38-42', '9:81', '9:117-118'] },
  // P5: prophets and nations, more places (added 2026-10-10)
  { id: 'yusuf-well', batch: 'P5', group: 'P2', kind: 'valley', en: 'The well of Yūsuf', ar: 'غيابة الجب', refs: ['12:10', '12:15', '12:19'] },
  { id: 'kanaan', batch: 'P5', group: 'P2', kind: 'land', en: 'Yaʿqūb\'s home in the desert (al-badw)', ar: 'البدو', refs: ['12:93', '12:100'] },
  { id: 'aylah', batch: 'P5', group: 'P2', kind: 'city', en: 'The town by the sea (the Sabbath)', ar: 'القرية التي كانت حاضرة البحر', refs: ['7:163-166', '2:65'] },
  { id: 'tih', batch: 'P5', group: 'P2', kind: 'land', en: 'The forty years of wandering', ar: 'التيه', refs: ['5:26'] },
  { id: 'talut-river', batch: 'P5', group: 'P2', kind: 'sea', en: 'Ṭālūt\'s river test', ar: 'نهر طالوت', refs: ['2:249-251'] },
  { id: 'bethlehem', batch: 'P5', group: 'P2', kind: 'city', en: 'Where Maryam gave birth', ar: 'مكانا قصيا', refs: ['19:16', '19:22-26'] },
  { id: 'rabwah', batch: 'P5', group: 'P2', kind: 'land', en: 'The high ground of Maryam and her son', ar: 'ربوة ذات قرار ومعين', refs: ['23:50'] },
  { id: 'majma-bahrayn', batch: 'P5', group: 'P2', kind: 'sea', en: 'The meeting of the two seas (Mūsā and al-Khiḍr)', ar: 'مجمع البحرين', refs: ['18:60-61'] },
  { id: 'ninawa', batch: 'P5', group: 'P3', kind: 'city', en: 'The people of Yūnus (Nineveh)', ar: 'نينوى', refs: ['10:98', '37:147-148'] },
  { id: 'qaryah-yasin', batch: 'P5', group: 'P3', kind: 'city', en: 'The town of the three messengers (Yā Sīn)', ar: 'أصحاب القرية', refs: ['36:13-27'] },
  { id: 'ibrahim-fire', batch: 'P5', group: 'P3', kind: 'city', en: 'Ibrāhīm\'s people and the fire', ar: 'قوم إبراهيم', refs: ['21:68-71', '29:24-26', '37:97-99'] },
  { id: 'sadd', batch: 'P5', group: 'P3', kind: 'mountain', en: 'The barrier of Dhū al-Qarnayn (location unknown)', ar: 'سد ذي القرنين', refs: ['18:93-98'] },
];
module.exports = { PLACES };
