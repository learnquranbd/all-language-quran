/**
 * Daily Amal (আমল) — sunnah recitations for the right time & day.
 *
 * Surfaces what to recite NOW (night / morning / evening / Friday) with the
 * hadith source for each practice, honestly graded: 'sahih' (authentic chain)
 * vs 'common' (widely practised, narration weak or general). "Read" loads the
 * passage into the Reading tab (explicit navigation).
 *
 * Renders into #amal-container (tab "amal").
 */

const AMAL_ITEMS = [
  { id: 'mulk', refs: '67:1-30', surahs: [67], when: ['night'],
    src: 'Tirmidhi 2891 · an-Nasa’i al-Kubra', grade: 'hasan',
    en: 'Recite Al-Mulk every night — it intercedes until its reciter is forgiven, and protects from the punishment of the grave.',
    bn: 'প্রতি রাতে সূরা মুলক পড়ুন। এই সূরা তার পাঠকারীর জন্য সুপারিশ করতে থাকবে, যতক্ষণ না তাকে মাফ করা হয়; আর এটি কবরের আযাব থেকে রক্ষা করে।',
    zh: '每晚诵读国权章——它将为诵读说情，直到他被宽恕，并保护免受坟墓的刑罚。',
    ja: '毎晩ムルク章を唱えよ——それは唱える者が赦されるまで執り成し、墓の罰から守る。'},
  { id: 'sajdah', refs: '32:1-30', surahs: [32], when: ['night'],
    src: 'Tirmidhi 3404', grade: 'sahih',
    en: 'The Prophet ﷺ would not sleep until he recited As-Sajdah and Al-Mulk.',
    bn: 'নবী ﷺ সূরা সাজদাহ ও সূরা মুলক না পড়ে ঘুমাতেন না।'},
  { id: 'kursi', refs: '2:255', surahs: [2], when: ['night', 'any'],
    src: 'Bukhari 2311 · an-Nasa’i (after-salah, sahih)', grade: 'sahih',
    en: 'Ayat al-Kursi before sleep — a guardian from Allah remains with you and Shaytan cannot approach until morning. After every fard prayer, nothing stands between its reciter and Paradise except death.',
    bn: 'ঘুমানোর আগে আয়াতুল কুরসি পড়লে আল্লাহর পক্ষ থেকে একজন পাহারাদার আপনার সঙ্গে থাকেন, সকাল পর্যন্ত শয়তান কাছে আসতে পারে না। প্রতি ফরজ নামাজের পরে যে এটি পড়ে, তার আর জান্নাতের মাঝে মৃত্যু ছাড়া কোনো বাধা থাকে না।',
    zh: '睡前诵读库尔西节文——真主的保护者与你同在，撒旦直到早晨不能接近。每番拜后也诵读。',
    ja: '就寝前にアーヤトゥル＝クルシーを——アッラーからの守護者があなたと共にあり、シャイターンは朝まで近づけない。毎礼拝後にも。'},
  { id: 'baqarah-end', refs: '2:285-286', surahs: [2], when: ['night'],
    src: 'Bukhari 5009', grade: 'sahih',
    en: 'Whoever recites the last two verses of Al-Baqarah at night, they will suffice him.',
    bn: 'যে ব্যক্তি রাতে সূরা বাকারার শেষ দুই আয়াত পড়বে, তার জন্য এ দুটিই যথেষ্ট হবে।',
    zh: '谁在晚上诵读黄牛章的最后两节，那对他足够了。',
    ja: '夜にバカラ章の最後の二節を唱える者には、それで十分である。'},
  { id: 'quls', refs: '112:1-4,113:1-5,114:1-6', surahs: [112, 113, 114], when: ['morning', 'evening', 'night'],
    src: 'Abu Dawud 5082 · Bukhari 5017', grade: 'sahih',
    en: 'The three Quls — three times morning and evening suffice you against everything; the Prophet ﷺ also recited them into his palms before sleep.',
    bn: 'তিন কুল: সকাল-সন্ধ্যায় তিনবার করে পড়লে সব কিছু থেকে আপনার জন্য যথেষ্ট হয়ে যায়। নবী ﷺ ঘুমানোর আগে এগুলো পড়ে হাতের তালুতে ফুঁ দিতেন।'},
  { id: 'kafirun', refs: '109:1-6', surahs: [109], when: ['night'],
    src: 'Abu Dawud 5055', grade: 'sahih',
    en: 'Recite Al-Kafirun before sleeping — it is a disavowal of shirk.',
    bn: 'ঘুমানোর আগে সূরা কাফিরুন পড়ুন — এটি শিরক থেকে মুক্তির ঘোষণা।',
    zh: '睡前诵读不信道章——这是对多神崇拜的否认。',
    ja: '就寝前にカーフィルーン章を唱えよ——それはシルクの否認である。'},
  { id: 'kahf', refs: '18:1-110', surahs: [18], when: ['friday'],
    src: 'al-Hakim 2/399 (sahih)', grade: 'sahih',
    en: 'Recite Al-Kahf on Friday — a light shines for you between the two Fridays.',
    bn: 'জুমার দিনে সূরা কাহফ পড়ুন; এক জুমা থেকে পরের জুমা পর্যন্ত আপনার জন্য একটি নূর জ্বলতে থাকবে।',
    zh: '主麻日诵读山洞章——两个主麻日之间有光芒照耀你。',
    ja: '金曜日にカフフ章を唱えよ——二つの金曜の間に光があなたを照らす。'},
  { id: 'kahf10', refs: '18:1-10', surahs: [18], when: ['any'],
    src: 'Muslim 809', grade: 'sahih',
    en: 'Memorize the first ten verses of Al-Kahf — protection from the Dajjal.',
    bn: 'সূরা কাহফের প্রথম দশ আয়াত মুখস্থ করুন — দাজ্জাল থেকে সুরক্ষা।',
    zh: '背诵山洞章前十节——保护免遭旦扎里的伤害。',
    ja: 'カフフ章の最初の十節を暗記せよ——ダッジャールからの保護。'},
  { id: 'friday-fajr', refs: '32:1-30,76:1-31', surahs: [32, 76], when: ['friday', 'morning'],
    src: 'Bukhari 891', grade: 'sahih',
    en: 'On Friday Fajr the Prophet ﷺ would recite As-Sajdah and Al-Insan.',
    bn: 'জুমার ফজরে নবী ﷺ সূরা সাজদাহ ও সূরা ইনসান তিলাওয়াত করতেন।'},
  { id: 'yasin', refs: '36:1-83', surahs: [36], when: ['morning'],
    src: '—', grade: 'common',
    en: 'Ya-Sin in the morning is a widespread practice; the specific narrations about it are weak, but reciting Quran any time is rewarded.',
    bn: 'সকালে সূরা ইয়াসিন পড়া প্রচলিত আমল; এ বিষয়ের নির্দিষ্ট বর্ণনাগুলো দুর্বল, তবে যেকোনো সময় কুরআন তিলাওয়াতই সওয়াবের।',
    zh: '早晨诵读雅辛章是广泛的做法；关于它的具体传述是弱的，但任何时候诵读古兰经都有回赐。',
    ja: '朝にヤー・スィーン章を唱えるのは広く行われている習慣；それに関する特定の伝承は弱いが、いつでもクルアーンを唱えることは報われる。'},
  { id: 'waqiah', refs: '56:1-96', surahs: [56], when: ['night'],
    src: '—', grade: 'common',
    en: "Al-Waqi'ah at night (against poverty) is widely practised; the narration is weak, but the recitation itself is virtuous.",
    bn: 'রাতে সূরা ওয়াকিয়া (অভাব থেকে বাঁচতে) বহুল প্রচলিত; বর্ণনাটি দুর্বল, তবে তিলাওয়াত নিজেই ফজিলতপূর্ণ।' },
  { id: 'rahman', refs: '55:1-78', surahs: [55], when: ['any'],
    src: '—', grade: 'common',
    en: 'Ar-Rahman — "the bride of the Quran" is a weak narration, but it is beloved to recite and ponder often.',
    bn: 'সূরা আর-রাহমানকে "কুরআনের কনে" বলার বর্ণনাটি দুর্বল, তবে বারবার এই সূরা তিলাওয়াত করা ও এ নিয়ে চিন্তা করা খুবই প্রিয় আমল।'},
  { id: 'baqarah-house', refs: '2:1-286', surahs: [2], when: ['any'],
    src: 'Muslim 780', grade: 'sahih',
    en: 'Recite Al-Baqarah in your home — Shaytan flees the house in which it is read; do not turn your homes into graveyards.',
    bn: 'ঘরে সূরা বাকারা পড়ুন। যে ঘরে এই সূরা পড়া হয়, শয়তান সেখান থেকে পালিয়ে যায়; নিজেদের ঘরকে কবরস্থান বানাবেন না।',
    zh: '在家中诵读黄牛章——撒旦逃离诵读它的房屋；不要把你们的家变成坟墓。',
    ja: '家でバカラ章を唱えよ——シャイターンはそれが読まれる家から逃げる；家を墓場にするな。'},
  { id: 'ikhlas-third', refs: '112:1-4', surahs: [112], when: ['any'],
    src: 'Bukhari 5013', grade: 'sahih',
    en: 'Al-Ikhlas equals a third of the Quran in reward — the Prophet ﷺ declared: "By Him in Whose Hand is my soul, it is equal to one third of the Quran."',
    bn: 'সূরা ইখলাস সওয়াবে কুরআনের এক-তৃতীয়াংশের সমান — নবী ﷺ বলেছেন: "যাঁর হাতে আমার প্রাণ তাঁর কসম, এটি কুরআনের এক-তৃতীয়াংশের সমান।"',
    zh: '忠诚章的回赐相当于古兰经的三分之一——先知ﷺ宣告："以掌握我生命的主起誓，它相当于古兰经的三分之一。"',
    ja: 'イフラース章は報いにおいてクルアーンの三分の一に等しい——預言者ﷺは「わが魂を御手に握る御方にかけて、それはクルアーンの三分の一に等しい」と宣言した。'},
  { id: 'zilzal', refs: '99:1-8', surahs: [99], when: ['any'],
    src: 'Tirmidhi 2894', grade: 'common',
    en: 'Az-Zalzalah is said to equal half the Quran in reward; most scholars grade its chain weak, but the surah powerfully stirs remembrance of the Day.',
    bn: 'বলা হয়, সূরা যিলযাল সওয়াবে অর্ধেক কুরআনের সমান; তবে অধিকাংশ আলেমের মতে এর সনদ দুর্বল। তবু সূরাটি কিয়ামতের দিনের কথা গভীরভাবে মনে করিয়ে দেয়।',
    zh: 'زلزلة章据说相当于古兰经一半的回赐；传述链是弱的，但这章有力地唤起对那日的纪念。',
    ja: 'ザルザラ章は報いがクルアーンの半分に等しいと言われる；連鎖は弱いが、その章は強くその日の想起を喚起する。'},
  { id: 'fatihah', refs: '1:1-7', surahs: [1], when: ['any'],
    src: 'Bukhari 5006 · Bukhari 5736', grade: 'sahih',
    en: 'Al-Fatihah is the greatest surah in the Quran and a healing (ruqyah) — the Companions used it to cure a man stung by a scorpion.',
    bn: 'সূরা ফাতিহা কুরআনের সবচেয়ে মহান সূরা, আবার এটি আরোগ্যের উপায় (রুকইয়াহ)। বিচ্ছুর কামড় খাওয়া এক লোককে সাহাবিরা এই সূরা পড়ে সুস্থ করেছিলেন।'},
  { id: 'muawwidhatayn-salah', refs: '113:1-5,114:1-6', surahs: [113, 114], when: ['any'],
    src: 'Abu Dawud 1523 · an-Nasa’i 5432', grade: 'sahih',
    en: 'Recite Al-Falaq and An-Nas after every obligatory prayer — the Prophet ﷺ commanded this as the best protection sought by the seekers.',
    bn: 'প্রতি ফরজ নামাজের পর সূরা ফালাক ও সূরা নাস পড়ুন। নবী ﷺ এর আদেশ দিয়েছেন; আশ্রয়প্রার্থীরা যা দিয়ে আশ্রয় চায়, তার মধ্যে এ দুটিই শ্রেষ্ঠ।'},
  { id: 'imran-end', refs: '3:190-200', surahs: [3], when: ['night'],
    src: 'Bukhari 4569 · Muslim 763 · Ibn Hibban 620', grade: 'sahih',
    en: 'The closing verses of Al-Imran, from 3:190 — the Prophet ﷺ would recite them when he woke for the night prayer; of 3:190 he said: "Woe to whoever recites it and does not reflect on it."',
    bn: 'সূরা আলে ইমরানের শেষ আয়াতগুলো, ৩:১৯০ থেকে। নবী ﷺ রাতের নামাজের জন্য জেগে এগুলো তিলাওয়াত করতেন। ৩:১৯০ সম্পর্কে তিনি বলেছেন: "দুর্ভোগ তার, যে এটি পড়ে অথচ এ নিয়ে চিন্তা করে না।"'},
  { id: 'jumua-surahs', refs: '62:1-11,63:1-11', surahs: [62, 63], when: ['friday'],
    src: 'Muslim 877', grade: 'sahih',
    en: 'In the Friday prayer the Prophet ﷺ would recite Al-Jumuʿah and Al-Munafiqun.',
    bn: 'জুমার নামাজে নবী ﷺ সূরা জুমুআ ও সূরা মুনাফিকুন তিলাওয়াত করতেন।'},
  { id: 'ala-ghashiyah', refs: '87:1-19,88:1-26', surahs: [87, 88], when: ['friday'],
    src: 'Muslim 878', grade: 'sahih',
    en: 'The Prophet ﷺ would recite Al-Aʿla and Al-Ghashiyah in the Friday and the two ʿEid prayers.',
    bn: 'নবী ﷺ জুমা ও দুই ঈদের নামাজে সূরা আলা ও সূরা গাশিয়া তিলাওয়াত করতেন।'},
  { id: 'qaf-fajr', refs: '50:1-45', surahs: [50], when: ['morning'],
    src: 'Muslim 457 · Muslim 873', grade: 'sahih',
    en: 'The Prophet ﷺ recited from Qaf in the Fajr prayer — and Umm Hisham memorized the surah only from hearing it from his tongue in the Friday khutbah.',
    bn: 'নবী ﷺ ফজরের নামাজে সূরা কাফ থেকে তিলাওয়াত করতেন — আর উম্মে হিশাম জুমার খুতবায় তাঁর মুখ থেকে শুনে শুনেই সূরাটি মুখস্থ করেছিলেন।'},
  { id: 'fajr-sunnah', refs: '109:1-6,112:1-4', surahs: [109, 112], when: ['morning'],
    src: 'Muslim 726', grade: 'sahih',
    en: 'In the two sunnah rakʿah before Fajr the Prophet ﷺ would recite Al-Kafirun and Al-Ikhlas.',
    bn: 'ফজরের আগে দুই রাকাত সুন্নতে নবী ﷺ সূরা কাফিরুন ও সূরা ইখলাস পড়তেন।'},
  { id: 'witr-surahs', refs: '87:1-19,109:1-6,112:1-4', surahs: [87, 109, 112], when: ['night'],
    src: 'Abu Dawud 1423', grade: 'sahih',
    en: 'In the three rakʿah of Witr the Prophet ﷺ would recite Al-Aʿla, Al-Kafirun and Al-Ikhlas — a beautiful way to seal the night.',
    bn: 'বিতরের তিন রাকাতে নবী ﷺ সূরা আলা, সূরা কাফিরুন ও সূরা ইখলাস পড়তেন — রাত শেষ করার এক সুন্দর আমল।'},
  { id: 'baqarah-imran-pair', refs: '2:1-286,3:1-200', surahs: [2, 3], when: ['any'],
    src: 'Muslim 804', grade: 'sahih',
    en: 'Recite the two bright ones, Al-Baqarah and Al-Imran — on the Day of Resurrection they will come as two clouds shading their reciter.',
    bn: 'দুই উজ্জ্বল সূরা বাকারা ও আলে ইমরান পড়ুন। কিয়ামতের দিন এ দুটি দুই খণ্ড মেঘের মতো এসে পাঠকারীকে ছায়া দেবে।'},
  { id: 'tur-maghrib', refs: '52:1-49', surahs: [52], when: ['evening'],
    src: 'Bukhari 765 · Bukhari 4854', grade: 'sahih',
    en: 'The Prophet ﷺ recited At-Tur in the Maghrib prayer — Jubayr ibn Mutʿim heard it and felt his heart about to take flight.',
    bn: 'নবী ﷺ মাগরিবের নামাজে সূরা তূর তিলাওয়াত করেছিলেন; তা শুনে জুবায়ির ইবনে মুতইমের মনে হয়েছিল, তাঁর হৃদয় যেন উড়ে যাবে।'},
  { id: 'mon-thu-fast', refs: '2:183', surahs: [2], when: ['weekly'],
    src: 'Muslim 1162 · Tirmidhi 747', grade: 'sahih',
    en: 'Fast on Mondays and Thursdays — deeds are presented to Allah on these two days, and the Prophet ﷺ loved his deeds to be presented while he was fasting. Monday is also the day he was born and the day revelation began.',
    bn: 'সোম ও বৃহস্পতিবার রোজা রাখুন। এই দুই দিনে আল্লাহর কাছে আমল পেশ করা হয়, আর নবী ﷺ চাইতেন তাঁর আমল যেন রোজা অবস্থায় পেশ হয়। সোমবার তাঁর জন্মদিন, আর এই দিনেই ওহি নাজিল শুরু হয়।'},
  { id: 'white-days', refs: '2:189', surahs: [2], when: ['monthly'],
    src: 'Bukhari 1981 · Bukhari 1976 · Tirmidhi 761', grade: 'sahih',
    en: 'Fast the three white days — the 13th, 14th and 15th of every lunar month. The Prophet ﷺ advised three fasts each month; with the tenfold reward it is like fasting the whole year.',
    bn: 'প্রতি চান্দ্র মাসের ১৩, ১৪ ও ১৫ তারিখ আইয়ামে বীযের তিনটি রোজা রাখুন। নবী ﷺ প্রতি মাসে তিনটি রোজার উপদেশ দিয়েছেন; প্রতিটি নেকির দশগুণ সওয়াব হিসেবে তা সারা বছর রোজা রাখার মতো।'},
  { id: 'dhul-hijjah-ten', refs: '89:1-2', surahs: [89], when: ['seasonal'],
    src: 'Bukhari 969', grade: 'sahih',
    en: 'The first ten days of Dhul-Hijjah — no righteous deeds are more beloved to Allah than deeds done in these days: fasting, takbir, dhikr, charity and Quran. In the view of most commentators, these are the ten nights Allah swears by in Surah al-Fajr.',
    bn: 'জিলহজের প্রথম দশ দিন: এই দিনগুলোর নেক আমল, যেমন রোজা, তাকবির, জিকির, দান ও কুরআন তিলাওয়াতের চেয়ে প্রিয় কোনো আমল আল্লাহর কাছে নেই। অধিকাংশ মুফাসসিরের মতে, সূরা ফাজরে আল্লাহ এই দশ রাতেরই কসম করেছেন।'},
  { id: 'ashura-fast', refs: '10:90-92', surahs: [10], when: ['seasonal'],
    src: 'Muslim 1162 · Bukhari 2004 · Muslim 1134', grade: 'sahih',
    en: 'Fast the day of Ashura (10 Muharram) — it expiates the sins of the previous year. It marks Allah saving Musa from Pharaoh, and the Prophet ﷺ intended to fast the 9th as well to differ from earlier nations.',
    bn: 'আশুরার (১০ মহররম) রোজা রাখুন; এতে বিগত এক বছরের গুনাহ মাফ হয়। এই দিনে আল্লাহ মুসা (আ.)-কে ফেরাউনের হাত থেকে রক্ষা করেন। পূর্ববর্তী জাতিগুলোর থেকে আলাদা হতে নবী ﷺ ৯ তারিখেও রোজা রাখার ইচ্ছা করেছিলেন।'},
  { id: 'shawwal-six', refs: '6:160', surahs: [6], when: ['seasonal'],
    src: 'Muslim 1164', grade: 'sahih',
    en: 'Fast six days of Shawwal after Ramadan — together they equal fasting the entire year, for every good deed is rewarded tenfold.',
    bn: 'রমজানের পর শাওয়ালের ছয় রোজা রাখুন — রমজানসহ তা সারা বছর রোজার সমান, কারণ প্রতিটি নেক আমলের দশগুণ প্রতিদান।'},
  { id: 'friday-ghusl', refs: '62:9', surahs: [62], when: ['friday'],
    src: 'Bukhari 881 · Bukhari 929', grade: 'sahih',
    en: 'On Friday, perform ghusl and go early to Jumuʿah — whoever goes in the first hour, it is as if he offered a camel; the angels record the early comers until the imam appears.',
    bn: 'জুমার দিনে গোসল করে আগে আগে মসজিদে যান। যে প্রথম প্রহরে যায়, সে যেন একটি উট কুরবানি করল; ইমাম বের হওয়া পর্যন্ত ফেরেশতারা আগে আসা লোকদের নাম লিখতে থাকেন।'},
  { id: 'friday-salawat', refs: '33:56', surahs: [33], when: ['friday'],
    src: 'Abu Dawud 1047', grade: 'sahih',
    en: 'Send abundant salawat upon the Prophet ﷺ on Friday and its night — your blessings are presented to him, and Allah Himself with His angels sends blessings on the Prophet.',
    bn: 'জুমার দিন ও রাতে নবী ﷺ-এর ওপর বেশি বেশি দরূদ পড়ুন। আপনার দরূদ তাঁর কাছে পেশ করা হয়; আর আল্লাহ নিজে ও তাঁর ফেরেশতারা নবীর ওপর দরূদ পাঠান।'},
  { id: 'night-prayer', refs: '73:1-6', surahs: [73], when: ['night'],
    src: 'Muslim 1163', grade: 'sahih',
    en: 'Pray at night, even briefly — the best prayer after the obligatory ones is the night prayer, and rising by night is firmer in impress and truer in speech.',
    bn: 'অল্প হলেও রাতে নামাজ পড়ুন। ফরজের পর সবচেয়ে উত্তম নামাজ হলো রাতের নামাজ; আর রাতে ওঠা মনকে বেশি দৃঢ় করে, কথাকেও করে বেশি সঠিক।'},
  { id: 'last-third-dua', refs: '51:15-18', surahs: [51], when: ['night'],
    src: 'Bukhari 1145', grade: 'sahih',
    en: 'Make duʿa in the last third of the night — our Lord descends and calls: "Who calls upon Me, that I may answer him? Who asks of Me, that I may give him? Who seeks My forgiveness, that I may forgive him?"',
    bn: 'রাতের শেষ তৃতীয়াংশে দোয়া করুন। তখন আমাদের রব নেমে এসে ডাকেন: "কে আমাকে ডাকবে, আমি তার ডাকে সাড়া দেব? কে আমার কাছে চাইবে, আমি তাকে দেব? কে আমার কাছে ক্ষমা চাইবে, আমি তাকে ক্ষমা করব?"'},
  { id: 'wudu-two-rakah', refs: '5:6', surahs: [5], when: ['any'],
    src: 'Bukhari 159 · Muslim 226', grade: 'sahih',
    en: 'After a complete wudu, pray two rakʿah with full presence of heart — whoever does so, his past sins are forgiven.',
    bn: 'পরিপূর্ণভাবে অজু করে মন দিয়ে দুই রাকাত নামাজ পড়ুন। যে এমন করে, তার আগের গুনাহ মাফ করে দেওয়া হয়।'},
  { id: 'istighfar-daily', refs: '71:10', surahs: [71], when: ['any'],
    src: 'Bukhari 6307 · Muslim 2702', grade: 'sahih',
    en: 'Seek Allah’s forgiveness 70–100 times daily — the Prophet ﷺ, though already forgiven, sought forgiveness more than seventy times each day. "Seek forgiveness of your Lord; indeed He is ever Forgiving."',
    bn: 'প্রতিদিন ৭০–১০০ বার ইস্তিগফার করুন। নবী ﷺ ক্ষমাপ্রাপ্ত হয়েও দিনে সত্তর বারের বেশি ইস্তিগফার করতেন। "তোমাদের রবের কাছে ক্ষমা চাও; নিশ্চয়ই তিনি পরম ক্ষমাশীল।"'},
  { id: 'visit-sick', refs: '26:80', surahs: [26], when: ['any'],
    src: 'Tirmidhi 2083', grade: 'hasan',
    en: 'Visit the sick and say seven times: "I ask Allah the Mighty, Lord of the Mighty Throne, to cure you" — for whoever it is said and whose death has not been decreed, Allah will cure him.',
    bn: 'রোগী দেখতে গিয়ে সাতবার বলুন: "আসআলুল্লাহাল আযীম, রাব্বাল আরশিল আযীম, আন ইয়াশফিয়াক" (আমি মহান আরশের রব, মহান আল্লাহর কাছে চাই, তিনি যেন তোমাকে সুস্থ করেন)। যার মৃত্যু এখনো নির্ধারিত হয়নি, তার জন্য এটি বলা হলে আল্লাহ তাকে সুস্থ করে দেন।'},
];

/**
 * Standard authentic morning/evening adhkar (Hisnul Muslim set). Each is a
 * tap-to-count tally with its target repetition and hadith source. Only
 * well-established narrations are included.
 */
const MORNING_EVENING_ADHKAR = [
  { id: 'kursi', count: 1,
    ar: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    tr: 'Allahu la ilaha illa Huwal-Hayyul-Qayyum…',
    src: 'an-Nasa’i · al-Hakim 1/562',
    en: 'Ayat al-Kursi (2:255) — once. Whoever recites it in the morning is guarded from the jinn until evening, and in the evening until morning.',
    bn: 'আয়াতুল কুরসি (২:২৫৫) — একবার। যে সকালে পড়ে, সে সন্ধ্যা পর্যন্ত জিন থেকে নিরাপদ থাকে; আর সন্ধ্যায় পড়লে সকাল পর্যন্ত।'},
  { id: 'quls', count: 3,
    ar: 'قُلْ هُوَ اللَّهُ أَحَدٌ … قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ … قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
    tr: 'Al-Ikhlas · Al-Falaq · An-Nas',
    src: 'Abu Dawud 5082 · Tirmidhi 3575',
    en: 'The three Quls (Ikhlas, Falaq, Nas) — three times each. They suffice you against all things, morning and evening.',
    bn: 'তিন কুল (ইখলাস, ফালাক, নাস) — প্রতিটি তিনবার। সকাল-সন্ধ্যায় পড়লে সব কিছু থেকে আপনার জন্য যথেষ্ট হয়।'},
  { id: 'sayyidul-istighfar', count: 1,
    ar: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    tr: 'Allahumma anta Rabbi la ilaha illa anta…',
    src: 'Bukhari 6306',
    en: 'Sayyidul-Istighfar (the master of seeking forgiveness) — once. Whoever says it with certainty and dies that day or night is among the people of Paradise.',
    bn: 'সাইয়িদুল ইস্তিগফার (ইস্তিগফারের শ্রেষ্ঠ দোয়া) — একবার। যে দৃঢ় বিশ্বাস নিয়ে এটি পড়ে এবং সেই দিনে বা রাতে মারা যায়, সে জান্নাতি।'},
  { id: 'tasbih100', count: 100,
    ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
    tr: 'SubhanAllahi wa bihamdih',
    src: 'Bukhari 6405 · Muslim 2691',
    en: '“Glory and praise be to Allah” — 100 times. Whoever says it in a day has his sins wiped away though they be like the foam of the sea.',
    bn: '“সুবহানাল্লাহি ওয়া বিহামদিহি” (আল্লাহর পবিত্রতা ও প্রশংসা) — ১০০ বার। যে দিনে এটি বলে, তার গুনাহ সমুদ্রের ফেনার সমান হলেও মুছে দেওয়া হয়।',
    zh: '赞颂真主超绝万物——100遍。谁在一天中这样说，他的罪过即使像海沫一样也被抹去。',
    ja: '「アッラーに栄光と賛美あれ」を100回。一日にそれを唱える者は、罪が海の泡のようにあっても拭い去られる。'},
  { id: 'tahlil', count: 10,
    ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    tr: 'La ilaha illa Allahu wahdahu la sharika lah…',
    src: 'Bukhari 6404 · an-Nasa’i',
    en: 'The declaration of tawhid — ten times in the morning and evening; saying it ten times is like freeing four slaves from the children of Isma‘il.',
    bn: 'তাওহিদের কালিমা — সকাল-সন্ধ্যায় দশবার। দশবার বললে ইসমাইল (আঃ)-এর বংশের চারজন দাস মুক্ত করার সমান সওয়াব হয়।',
    zh: '认主独一的宣言——早晚十遍；念十遍如同释放伊斯玛仪后裔中的四个奴隶。',
    ja: 'タウヒードの宣言——朝晩十回；十回唱えることはイスマーイールの子孫の奴隷四人を解放するに等しい。'},
  { id: 'bismillah-protect', count: 3,
    ar: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
    tr: 'Bismillahilladhi la yadurru ma’asmihi shay’…',
    src: 'Abu Dawud 5088 · Tirmidhi 3388',
    en: '“In the name of Allah, with whose name nothing is harmed…” — three times. Whoever says it will not be struck by sudden affliction.',
    bn: '“বিসমিল্লাহিল্লাযি লা ইয়াদুররু…” (আল্লাহর নামে, যাঁর নামের সঙ্গে কোনো কিছুই ক্ষতি করতে পারে না…) — তিনবার। যে এটি বলে, তাকে হঠাৎ কোনো বিপদ আঘাত করবে না।',
    zh: '凭安拉的尊名，天地间无一物能带来伤害——三遍。这样说的人将不会遭受突然的灾难。',
    ja: '「アッラーの御名において、その御名によって何ものも害されない…」を三回。唱える者は突然の災難に見舞われない。'},
  { id: 'audhu-kalimat', count: 3,
    ar: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    tr: 'A’udhu bikalimatil-lahit-tammati min sharri ma khalaq',
    src: 'Muslim 2709 · Tirmidhi 3604',
    en: '“I seek refuge in Allah’s perfect words from the evil of what He created” — three times in the evening; nothing will harm him that night.',
    bn: '“আউযু বিকালিমাতিল্লাহিত তাম্মাতি মিন শাররি মা খালাক্ব” (আল্লাহর পরিপূর্ণ কালিমার আশ্রয় চাই তাঁর সৃষ্টির অনিষ্ট থেকে) — সন্ধ্যায় তিনবার; সেই রাতে কিছুই তার ক্ষতি করতে পারবে না।',
    zh: '我求助于安拉完美的言辞免遭他所创造之物的伤害——晚上三遍；那晚没有什么能伤害他。',
    ja: '「アッラーの完全な言葉に、彼が創造したものの悪から避難を求める」を夕べに三回；その夜は何も彼を害さない。'},
  { id: 'radina', count: 3,
    ar: 'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا',
    tr: 'Raditu billahi Rabban, wa bil-Islami dinan, wa bi-Muhammadin ﷺ nabiyya',
    src: 'Abu Dawud 5072 · Tirmidhi 3389',
    en: '“I am pleased with Allah as Lord, Islam as religion, and Muhammad ﷺ as Prophet” — three times; Allah takes it upon Himself to please him on the Day of Resurrection.',
    bn: '“রাযিতু বিল্লাহি রাব্বান, ওয়া বিল-ইসলামি দীনান, ওয়া বিমুহাম্মাদিন ﷺ নাবিয়্যা” (আমি আল্লাহকে রব, ইসলামকে দ্বীন আর মুহাম্মাদ ﷺ-কে নবী হিসেবে পেয়ে সন্তুষ্ট) — তিনবার; কিয়ামতের দিন তাকে সন্তুষ্ট করার দায়িত্ব আল্লাহ নিজে নিয়েছেন।'},
  { id: 'salawat', count: 10,
    ar: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ',
    tr: 'Allahumma salli wa sallim ‘ala nabiyyina Muhammad',
    src: 'Tabarani (hasan)',
    en: 'Send blessings upon the Prophet ﷺ — ten times morning and evening; whoever does so attains his intercession on the Day of Resurrection.',
    bn: 'সকাল-সন্ধ্যায় দশবার নবী ﷺ-এর ওপর দরূদ পড়ুন; যে এমন করে, কিয়ামতের দিন সে তাঁর শাফাআত পাবে।'},
];

/** After-salah tasbih: SubhanAllah 33 · Alhamdulillah 33 · Allahu Akbar 34 = 100. Source: Muslim 596. */
const AFTER_SALAH = [
  { id: 'subhanallah', target: 33, ar: 'سُبْحَانَ اللَّهِ', tr: 'SubhanAllah', en: 'Glory be to Allah', bn: 'আল্লাহ কতই পবিত্র', zh: '赞颂真主超绝万物', ja: 'アッラーに栄光あれ' },
  { id: 'alhamdulillah', target: 33, ar: 'الْحَمْدُ لِلَّهِ', tr: 'Alhamdulillah', en: 'All praise is for Allah', bn: 'সমস্ত প্রশংসা আল্লাহর', zh: '一切赞颂全归真主', ja: '全ての称賛はアッラーに' },
  { id: 'allahuakbar', target: 34, ar: 'اللَّهُ أَكْبَرُ', tr: 'Allahu Akbar', en: 'Allah is the Greatest', bn: 'আল্লাহ সর্বশ্রেষ্ঠ', zh: '真主至大', ja: 'アッラーは最も偉大である' },
];

class AmalDaily {
  constructor() {
    this.container = document.getElementById('amal-container');
    if (!this.container) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this._salah = { i: 0, n: 0 };       // after-salah tasbih (session state)
    this._adhkar = this.loadAdhkar();   // morning/evening tallies (daily-reset, persisted)

    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId === 'amal') this.render(); });
    window.addEventListener('settingChanged', (e) => {
      if (e.detail.key === 'language') { this.language = e.detail.value; if (this.container.innerHTML) this.render(); }
    });
    this.container.addEventListener('click', (e) => {
      const read = e.target.closest('[data-amal-read]');
      if (read) {
        this.stopAudio();
        // Explicit navigation: load the passage in the Reading tab
        if (typeof tabSystem !== 'undefined' && tabSystem) tabSystem.switchTab('reading');
        const refs = read.getAttribute('data-amal-read');
        if (decodeURIComponent(window.location.hash.slice(1)) === refs) {
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        } else {
          window.location.hash = refs;
        }
        return;
      }
      const prev = e.target.closest('[data-amal-preview]');
      if (prev && typeof ayahModal !== 'undefined' && ayahModal) {
        ayahModal.open(prev.getAttribute('data-amal-preview'));
        return;
      }
      // Adhkar reset buttons must be checked before the row tap target they sit inside.
      if (e.target.closest('[data-adhkar-reset-all]')) { this.resetAllAdhkar(); return; }
      const adkReset = e.target.closest('[data-adhkar-reset]');
      if (adkReset) { this.resetAdhkar(adkReset.getAttribute('data-adhkar-reset')); return; }
      const adkTap = e.target.closest('[data-adhkar-tap]');
      if (adkTap) { this.tapAdhkar(adkTap.getAttribute('data-adhkar-tap')); return; }
      if (e.target.closest('[data-salah-reset]')) { this.resetSalah(); return; }
      if (e.target.closest('[data-salah-tap]')) { this.tapSalah(); return; }
      const listen = e.target.closest('[data-amal-listen]');
      if (listen) this.toggleListen(listen);
    });
    window.addEventListener('tabChanged', (e) => { if (e.detail.tabId !== 'amal') this.stopAudio(); });
  }

  tt(key) { return t(key, this.language); }
  /** Localize an entry: inline bn/zh/ja, else the content dictionaries (CI18N), else English.
   *  Only those three are read inline: id, ar and tr on these records are the slug, the Arabic and a transliteration. */
  desc(item) {
    if (['bn', 'zh', 'ja'].includes(this.language) && item[this.language]) return item[this.language];
    return (typeof CI18N !== 'undefined' && CI18N.tr(this.language, item.en)) || item.en;
  }

  /** Link a hadith citation to sunnah.com so users can verify the source. */
  srcHtml(src) {
    const M = { 'Bukhari': 'bukhari', 'Muslim': 'muslim', 'Tirmidhi': 'tirmidhi', 'Abu Dawud': 'abudawud' };
    const parts = src.split('·').map(x => x.trim());
    return parts.map(part => {
      const m = part.match(/^(Bukhari|Muslim|Tirmidhi|Abu Dawud)\s+(\d+)$/);
      if (m) return `<a href="https://sunnah.com/${M[m[1]]}:${m[2]}" target="_blank" rel="noopener" class="underline decoration-dotted hover:text-primary">${this.esc(part)}</a>`;
      return this.esc(part);
    }).join(' · ');
  }

  /** Current period of the local day. */
  period() {
    const h = new Date().getHours();
    if (h >= 4 && h < 11) return 'morning';
    if (h >= 11 && h < 17) return 'day';
    if (h >= 17 && h < 20) return 'evening';
    return 'night';
  }
  /**
   * The night of Jumu'ah begins at Thursday sunset, so Kahf & co. surface
   * from Thursday evening through Friday.
   */
  isFriday() {
    const d = new Date();
    return d.getDay() === 5 || (d.getDay() === 4 && d.getHours() >= 17);
  }

  /** Items recommended right now ('any' items always apply). */
  nowItems() {
    const p = this.period();
    const fri = this.isFriday();
    return AMAL_ITEMS.filter(it =>
      it.when.includes(p) || it.when.includes('any') || (fri && it.when.includes('friday')));
  }

  /** Expand '2:255,112:1-4' into ['2:255','112:1',...]. */
  expandRefs(refs) {
    const out = [];
    refs.split(',').forEach(part => {
      const m = part.trim().match(/^(\d+):(\d+)(?:-(\d+))?$/);
      if (!m) return;
      const s = +m[1], from = +m[2], to = m[3] ? +m[3] : from;
      for (let a = from; a <= to; a++) out.push(`${s}:${a}`);
    });
    return out;
  }

  stopAudio() {
    this._playQueue = null;
    if (this._audio) { try { this._audio.pause(); } catch (e) { /* ignore */ } }
    if (this._playBtn) { this._playBtn.innerHTML = this._playBtn.getAttribute('data-idle'); this._playBtn = null; }
  }

  /** Play a short passage ayah-by-ayah (everyayah.com), toggling on second tap. */
  toggleListen(btn) {
    if (this._playBtn === btn) { this.stopAudio(); return; }
    this.stopAudio();
    const list = this.expandRefs(btn.getAttribute('data-amal-listen'));
    if (!list.length) return;
    this._playBtn = btn;
    if (!btn.getAttribute('data-idle')) btn.setAttribute('data-idle', btn.innerHTML);
    btn.innerHTML = '⏸ ' + this.tt('amal_listen');
    if (!this._audio) {
      this._audio = new Audio();
      this._audio.addEventListener('ended', () => this._advance());
      this._audio.addEventListener('error', () => this._advance());
    }
    this._playQueue = list.slice();
    this._advance();
  }

  _advance() {
    if (!this._playQueue || !this._playQueue.length) { this.stopAudio(); return; }
    const [s, a] = this._playQueue.shift().split(':').map(Number);
    const pad = n => String(n).padStart(3, '0');
    this._audio.src = `https://everyayah.com/data/Alafasy_128kbps/${pad(s)}${pad(a)}.mp3`;
    this._audio.play().catch(() => this.stopAudio());
  }

  surahNames(item) {
    return item.surahs.map(n => (typeof getSurahName === 'function' ? getSurahName(n, this.language) : String(n))).join(' + ');
  }

  card(item, highlight) {
    const allRefs = this.expandRefs(item.refs);
    const ayahCount = allRefs.length;
    const firstRef = allRefs[0] || item.refs.split(',')[0];
    const gradeBadge = item.grade === 'sahih'
      ? `<span class="text-xs px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-300">✓ ${this.tt('amal_grade_sahih')}</span>`
      : item.grade === 'hasan'
        ? `<span class="text-xs px-1.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-300">✓ ${this.tt('amal_grade_hasan')}</span>`
        : `<span class="text-xs px-1.5 py-0.5 rounded-full bg-gray-400/10 text-gray-500 dark:text-gray-400">${this.tt('amal_grade_common')}</span>`;
    const whenBadges = item.when.map(w => `<span class="text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary dark:text-blue-300">${this.tt('amal_when_' + w)}</span>`).join(' ');
    return `
      <div class="rounded-2xl bg-white dark:bg-gray-800 border ${highlight ? 'border-amber-300 dark:border-amber-500/50 shadow-lg' : 'border-gray-200 dark:border-gray-700'} p-4 flex flex-col gap-2">
        <div class="flex items-start justify-between gap-2">
          <div class="font-bold text-gray-800 dark:text-gray-100" dir="auto">${this.esc(this.surahNames(item))}</div>
          <span class="shrink-0 text-xs font-mono text-gray-400">${item.refs.split(',')[0]}${item.refs.includes(',') ? ' +' : ''}</span>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(this.desc(item))}</p>
        <div class="flex flex-wrap items-center gap-1.5">${whenBadges} ${gradeBadge}
          ${item.src !== '—' ? `<span class="text-xs text-gray-400">📖 ${this.srcHtml(item.src)}</span>` : ''}
        </div>
        <div class="flex flex-wrap gap-2 mt-1">
          <button data-amal-read="${item.refs}" class="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/80">📖 ${this.tt('amal_read')}</button>
          ${ayahCount <= 19 ? `<button data-amal-listen="${item.refs}" class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600">🔊 ${this.tt('amal_listen')}</button>` : ''}
          ${ayahCount <= 3 ? `<button data-amal-preview="${firstRef}" class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600">👁 ${this.tt('amal_preview')}</button>` : ''}
        </div>
      </div>`;
  }

  render() {
    this.stopAudio();
    this._adhkar = this.loadAdhkar();   // pick up daily reset when the tab is reopened
    const now = this.nowItems();
    const nowIds = new Set(now.map(i => i.id));
    const rest = AMAL_ITEMS.filter(i => !nowIds.has(i.id));
    const periodLabel = this.tt('amal_when_' + this.period()) + (this.isFriday() ? ' · ' + this.tt('amal_when_friday') : '');
    this.container.innerHTML = `
      <div class="w-full">
        <div class="text-center mb-6">
          <p class="text-gray-500 dark:text-gray-400 text-sm">${this.tt('amal_subtitle')}</p>
        </div>
        <div id="amal-streak" class="rounded-2xl bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-gray-800 border border-amber-200 dark:border-amber-500/30 p-4 mb-8">${this.streakInner()}</div>
        <div class="mb-8">
          <h3 class="text-sm uppercase tracking-wide font-semibold text-amber-600 dark:text-amber-400 mb-3">🌟 ${this.tt('amal_now')} — ${periodLabel}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            ${now.map(i => this.card(i, true)).join('')}
          </div>
        </div>
        <section id="amal-adhkar" class="mb-8">${this.adhkarInner()}</section>
        <section id="amal-salah" class="mb-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">${this.salahInner()}</section>
        <div>
          <h3 class="text-sm uppercase tracking-wide font-semibold text-gray-400 dark:text-gray-500 mb-3">${this.tt('amal_all')}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            ${rest.map(i => this.card(i, false)).join('')}
          </div>
        </div>
        <p class="text-xs text-gray-400 mt-6 text-center">${this.tt('amal_note')}</p>
      </div>`;
  }

  // ── Dates & persistence ──────────────────────────────────────────────
  dayKey(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  todayKey() { return this.dayKey(new Date()); }
  yesterdayKey() { return this.dayKey(new Date(Date.now() - 86400000)); }

  /** Load adhkar tallies, resetting automatically when the local day rolls over. */
  loadAdhkar() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem('amalAdhkar')); } catch (e) { s = null; }
    const today = this.todayKey();
    if (!s || s.date !== today || typeof s.done !== 'object' || !s.done) s = { date: today, done: {} };
    return s;
  }
  saveAdhkar() { try { localStorage.setItem('amalAdhkar', JSON.stringify(this._adhkar)); } catch (e) { /* ignore */ } }

  allAdhkarDone() { return MORNING_EVENING_ADHKAR.every(a => (this._adhkar.done[a.id] || 0) >= a.count); }

  /** Consecutive-day streak, counted the first time a day's full checklist is completed. */
  loadStreak() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem('amalStreak')); } catch (e) { s = null; }
    if (!s || typeof s.count !== 'number') s = { count: 0, lastDate: '' };
    return s;
  }
  markDayComplete() {
    const s = this.loadStreak();
    const today = this.todayKey();
    if (s.lastDate === today) return;                 // already counted today
    s.count = (s.lastDate === this.yesterdayKey()) ? s.count + 1 : 1;
    s.lastDate = today;
    try { localStorage.setItem('amalStreak', JSON.stringify(s)); } catch (e) { /* ignore */ }
  }
  /** Streak to display: valid only if today or yesterday was the last completed day. */
  streakCount() {
    const s = this.loadStreak();
    return (s.lastDate === this.todayKey() || s.lastDate === this.yesterdayKey()) ? s.count : 0;
  }

  // ── Adhkar checklist ─────────────────────────────────────────────────
  tapAdhkar(id) {
    const item = MORNING_EVENING_ADHKAR.find(a => a.id === id);
    if (!item) return;
    const cur = this._adhkar.done[id] || 0;
    if (cur >= item.count) return;                    // already complete
    this._adhkar.done[id] = cur + 1;
    this.saveAdhkar();
    if (this.allAdhkarDone()) this.markDayComplete();
    this.refreshAdhkar();
    this.refreshStreak();
  }
  resetAdhkar(id) {
    delete this._adhkar.done[id];
    this.saveAdhkar();
    this.refreshAdhkar();
    this.refreshStreak();
  }
  resetAllAdhkar() {
    this._adhkar.done = {};
    this.saveAdhkar();
    this.refreshAdhkar();
    this.refreshStreak();
  }

  adhkarRow(a) {
    const tally = this._adhkar.done[a.id] || 0;
    const done = tally >= a.count;
    const desc = this.desc(a);
    return `
      <div data-adhkar-tap="${a.id}" role="button" tabindex="0" aria-label="${this.esc(a.tr)}"
        class="cursor-pointer select-none rounded-xl border p-3 flex flex-col gap-1.5 transition
          ${done ? 'border-green-400 dark:border-green-500/50 bg-green-50 dark:bg-green-900/20'
                 : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 active:scale-[0.99] hover:border-primary/40'}">
        <div class="flex items-start justify-between gap-2">
          <span class="ayah-arabic !text-xl !leading-loose text-gray-800 dark:text-gray-100 min-w-0 break-words" dir="rtl">${this.esc(a.ar)}</span>
          <span class="shrink-0 text-sm font-mono ${done ? 'text-green-600 dark:text-green-300' : 'text-primary'}">${done ? '✓' : tally + ' / ' + a.count}</span>
        </div>
        <div class="text-xs italic text-gray-500 dark:text-gray-400" dir="ltr">${this.esc(a.tr)}</div>
        <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed" dir="auto">${this.esc(desc)}</p>
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs text-gray-400">📖 ${this.srcHtml(a.src)}</span>
          ${tally > 0 ? `<button data-adhkar-reset="${a.id}" class="shrink-0 text-xs text-gray-400 hover:text-primary dark:hover:text-blue-400 px-2.5 py-1.5 -my-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">↺ ${this.tt('amal_reset')}</button>` : ''}
        </div>
      </div>`;
  }

  adhkarInner() {
    const total = MORNING_EVENING_ADHKAR.length;
    const doneCount = MORNING_EVENING_ADHKAR.filter(a => (this._adhkar.done[a.id] || 0) >= a.count).length;
    const anyStarted = MORNING_EVENING_ADHKAR.some(a => (this._adhkar.done[a.id] || 0) > 0);
    return `
      <div class="flex items-center justify-between mb-1">
        <h3 class="text-sm uppercase tracking-wide font-semibold text-emerald-600 dark:text-emerald-400">📿 ${this.tt('amal_adhkar_title')}</h3>
        <span class="text-xs font-mono ${doneCount === total ? 'text-green-600 dark:text-green-300' : 'text-gray-400'}">${doneCount} / ${total}</span>
      </div>
      <p class="text-xs text-gray-400 mb-3">${this.tt('amal_adhkar_sub')}${anyStarted ? ` · <button data-adhkar-reset-all class="underline hover:text-primary">${this.tt('amal_reset_all')}</button>` : ''}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        ${MORNING_EVENING_ADHKAR.map(a => this.adhkarRow(a)).join('')}
      </div>`;
  }
  refreshAdhkar() { const el = this.container.querySelector('#amal-adhkar'); if (el) el.innerHTML = this.adhkarInner(); }

  // ── After-salah tasbih counter ───────────────────────────────────────
  tapSalah() {
    if (this._salah.i >= AFTER_SALAH.length) return;  // already at 100
    this._salah.n += 1;
    if (this._salah.n >= AFTER_SALAH[this._salah.i].target) { this._salah.i += 1; this._salah.n = 0; }
    this.refreshSalah();
  }
  resetSalah() { this._salah = { i: 0, n: 0 }; this.refreshSalah(); }

  salahInner() {
    const complete = this._salah.i >= AFTER_SALAH.length;
    const idx = complete ? AFTER_SALAH.length - 1 : this._salah.i;
    const cur = AFTER_SALAH[idx];
    const n = complete ? cur.target : this._salah.n;
    const total = AFTER_SALAH.reduce((s, x) => s + x.target, 0);
    const soFar = AFTER_SALAH.slice(0, this._salah.i).reduce((s, x) => s + x.target, 0) + (complete ? 0 : this._salah.n);
    return `
      <h3 class="text-sm uppercase tracking-wide font-semibold text-primary dark:text-blue-300 mb-1">🕌 ${this.tt('amal_salah_title')} <span class="font-mono text-gray-400 normal-case">(33 · 33 · 34)</span></h3>
      <p class="text-xs text-gray-400 mb-3">${this.tt('amal_salah_sub')}</p>
      <div class="flex flex-col items-center gap-3">
        <button data-salah-tap aria-label="${this.esc(cur.tr)}"
          class="w-44 h-44 rounded-full flex flex-col items-center justify-center text-center text-white shadow-lg transition active:scale-95
            ${complete ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'}">
          <span class="ayah-arabic !text-3xl !text-white" dir="rtl">${this.esc(cur.ar)}</span>
          <span class="text-xs opacity-90 mt-1" dir="auto">${this.esc(this.desc(cur))}</span>
          <span class="text-2xl font-bold mt-1">${complete ? '✓' : n + ' / ' + cur.target}</span>
        </button>
        <div class="w-full max-w-xs h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
          <div class="h-full ${complete ? 'bg-green-500' : 'bg-primary'} transition-all" style="width:${Math.round(soFar / total * 100)}%"></div>
        </div>
        <div class="text-sm ${complete ? 'text-green-600 dark:text-green-300 font-semibold' : 'text-gray-500'}">${complete ? this.tt('amal_salah_done') : soFar + ' / ' + total}</div>
        <button data-salah-reset class="text-xs text-gray-400 hover:text-primary dark:hover:text-blue-400 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">↺ ${this.tt('amal_reset')}</button>
      </div>
      <p class="text-xs text-gray-400 mt-3 text-center leading-relaxed" dir="auto">${this.tt('amal_salah_kursi_note')} <span class="text-gray-400">· 📖 ${this.srcHtml('Muslim 596')}</span></p>`;
  }
  refreshSalah() { const el = this.container.querySelector('#amal-salah'); if (el) el.innerHTML = this.salahInner(); }

  // ── Streak + gentle next-suggestion card ─────────────────────────────
  streakInner() {
    const count = this.streakCount();
    const done = this.allAdhkarDone();
    const next = this.nowItems()[0];
    const flame = count > 0 ? '🔥' : '📿';
    return `
      <div class="flex items-center gap-4">
        <div class="text-4xl leading-none">${flame}</div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-gray-800 dark:text-gray-100">${this.tt('amal_streak_title')}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">${count > 0 ? `<span class="font-semibold text-amber-600 dark:text-amber-400">${count}</span> ${this.tt('amal_streak_days')}` : this.tt('amal_streak_none')}</div>
        </div>
        ${done ? `<span class="shrink-0 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-300 font-medium">✓ ${this.tt('amal_completed_today')}</span>` : ''}
      </div>
      ${next ? `
      <div class="mt-3 pt-3 border-t border-amber-100 dark:border-amber-500/20 flex items-center justify-between gap-2">
        <span class="text-sm text-gray-600 dark:text-gray-300 truncate" dir="auto">${this.tt('amal_next')}: <span class="font-semibold">${this.esc(this.surahNames(next))}</span></span>
        <button data-amal-read="${next.refs}" class="shrink-0 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-medium hover:bg-primary/80">📖 ${this.tt('amal_read')}</button>
      </div>` : ''}`;
  }
  refreshStreak() { const el = this.container.querySelector('#amal-streak'); if (el) el.innerHTML = this.streakInner(); }

  esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
}

let amalDaily;
document.addEventListener('DOMContentLoaded', () => { amalDaily = new AmalDaily(); });
