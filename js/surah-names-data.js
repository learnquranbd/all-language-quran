/**
 * Why each surah carries its name.
 *
 * Every reader sees "Al-Baqarah — The Cow" a hundred times and never learns
 * that the name comes from a single story in 2:67-73, or that the surah has
 * other recorded names, or what a name chosen from a passing incident is meant
 * to signal. That is what this dataset answers, for all 114.
 *
 * Fields, per surah number:
 *   meaning  {en, bn}  — the plain gloss of the name
 *   source   {en, bn}  — one line: the word, verse or episode the name is taken
 *                        from. Most surah names are drawn from a distinctive
 *                        word rather than from the subject matter, and saying so
 *                        is half the lesson.
 *   why      {en, bn}  — 70-120 words: why this word, and what it marks
 *   signal   {en, bn}  — what the name tells a reader to expect
 *   alt      [{ name, en, bn }] — other names recorded for the surah, each with
 *                        the basis for it. Empty array where none is attested.
 *   refs     ['2:67']  — where the naming word or episode actually occurs
 *
 * Naming conventions are reported, not invented: where the name's basis is
 * disputed or simply not established, `why` says so rather than choosing.
 */

/* UI chrome, authored en+bn like every other content module; the remaining 13
 * languages resolve through CI18N.tr in SurahNamesView.tt(). */
const SURAHNAMES_UI = {
  sn_title: { en: 'Why this name?', bn: 'এই নাম কেন?' },
  sn_intro: { en: 'Every surah carries a name — most taken from a single distinctive word rather than from the subject. Here is where each name comes from, and what it signals.', bn: 'প্রতিটি সূরার একটি নাম আছে — বেশিরভাগই বিষয়বস্তু নয়, বরং একটি স্বতন্ত্র শব্দ থেকে নেওয়া। প্রতিটি নাম কোথা থেকে এসেছে এবং তা কী নির্দেশ করে, তা এখানে।' },
  sn_search: { en: 'Search a surah or a name…', bn: 'সূরা বা নাম খুঁজুন…' },
  sn_filter_all: { en: 'All', bn: 'সব' },
  sn_filter_meccan: { en: 'Meccan', bn: 'মাক্কী' },
  sn_filter_medinan: { en: 'Medinan', bn: 'মাদানী' },
  sn_filter_multi: { en: 'More than one name', bn: 'একাধিক নাম' },
  sn_explained: { en: 'explained', bn: 'ব্যাখ্যা করা হয়েছে' },
  sn_empty: { en: 'No surah matches that search.', bn: 'এই অনুসন্ধানে কোনো সূরা মেলেনি।' },
  sn_meccan: { en: 'Meccan', bn: 'মাক্কী' },
  sn_medinan: { en: 'Medinan', bn: 'মাদানী' },
  sn_why: { en: 'Why this name', bn: 'এই নাম কেন' },
  sn_hide: { en: 'Hide', bn: 'লুকান' },
  sn_pending: { en: 'Explanation coming in a later update.', bn: 'ব্যাখ্যা পরবর্তী আপডেটে আসছে।' },
  sn_source: { en: 'Where the name comes from', bn: 'নামটি কোথা থেকে এসেছে' },
  sn_signal: { en: 'What the name tells you', bn: 'নামটি যা জানায়' },
  sn_alt_names: { en: 'Other recorded names', bn: 'বর্ণিত অন্যান্য নাম' },
};

const SURAH_NAME_NOTES = {
  87: {
    meaning: { en: 'The Most High', bn: 'সর্বোচ্চ' },
    source: {
      en: 'From the divine attribute in the opening command, "Glorify the name of your Lord, the Most High" (87:1).',
      bn: 'সূরার প্রথম নির্দেশে আসা আল্লাহর গুণবাচক নাম থেকে—"তোমার সর্বোচ্চ প্রতিপালকের নামের পবিত্রতা ঘোষণা করো" (৮৭:১)।',
    },
    why: {
      en: 'The name is not the surah\'s subject but its first striking word: al-A\'la, an attribute of God, attached to the opening imperative to glorify. Nothing else in these verses is called by that name. The passage moves through creation and proportioning, the promise that revelation will be preserved, the reminder that benefits whoever fears, and the contrast between the man who purifies himself and the one who prefers this life. Naming the surah from verse one works as a bookmark, since the earliest Muslims identified surahs by their openings. The choice suits the tone, which is God\'s height over everything people prefer.',
      bn: 'নামটি সূরার বিষয় নয়, বরং এর প্রথম চোখে পড়া শব্দ: আল-আলা, আল্লাহর একটি গুণবাচক নাম, যা তাসবীহ পড়ার শুরুর হুকুমের সঙ্গে যুক্ত। এই আয়াতগুলোতে আর কোনো কিছুকে এ নামে ডাকা হয়নি। আলোচনা এগোয় কয়েকটি বিষয় ধরে: সৃষ্টি করা ও সুঠাম করে গড়া; ওহি সংরক্ষণের প্রতিশ্রুতি; উপদেশ তারই কাজে আসে, যে আল্লাহকে ভয় করে; আর যে নিজেকে পবিত্র করে আর যে দুনিয়াকে বেশি ভালোবাসে, এই দুজনের তফাত। প্রথম আয়াত থেকে নাম নেওয়ায় তা চিহ্নের কাজ করে, কারণ প্রথম যুগের মুসলমানরা সূরাকে চিনতেন তার শুরু দিয়েই। নামটি সূরার সুরের সঙ্গেও মেলে: মানুষ যা কিছুকে বড় করে দেখে, আল্লাহ তার সবকিছুর ঊর্ধ্বে।',
    },
    signal: {
      en: 'Expect a short Meccan surah of praise and warning: God creates and guides, the revelation will not be forgotten, the reminder benefits whoever fears, and the hereafter is better and lasting. It is a favourite of the Friday and Eid prayers.',
      bn: 'প্রশংসা আর সতর্কবাণীর ছোট একটি মক্কী সূরা: আল্লাহ সৃষ্টি করেন ও পথ দেখান; ওহি ভুলিয়ে দেওয়া হবে না; উপদেশ তারই কাজে আসে, যে আল্লাহকে ভয় করে; আর আখিরাত উত্তম ও স্থায়ী। জুমা ও ঈদের নামাজে এটি প্রায়ই পড়া হয়।',
    },
    alt: [
      { name: "Sabbih isma rabbika al-A'la", en: 'In hadith the surah is usually referred to by its opening words rather than by a one-word title, a common early practice.', bn: 'হাদীসে সূরাটিকে সাধারণত এক শব্দের শিরোনামে নয়, বরং তার শুরুর কথাগুলো দিয়েই উল্লেখ করা হয়—প্রথম যুগে এটিই ছিল প্রচলিত রীতি।' },
    ],
    refs: ['87:1'],
  },

  88: {
    meaning: { en: 'The Overwhelming Event', bn: 'আচ্ছন্নকারী বিপর্যয়' },
    source: {
      en: 'From al-ghashiyah, "the enveloping calamity", a name for the Day of Judgement in the opening question (88:1).',
      bn: 'আল-গাশিয়াহ, অর্থাৎ "আচ্ছন্নকারী বিপর্যয়" থেকে। প্রথম আয়াতের প্রশ্নে কিয়ামতকে এই নামে ডাকা হয়েছে (৮৮:১)।',
    },
    why: {
      en: 'Ghashiyah literally means that which covers or envelops. Here it is one of the Quran\'s several titles for the Resurrection, chosen because that Day will cover creation entirely, leaving nothing outside it. The word appears once, in the opening verse, and the surah takes its name from it rather than from the long passage on camel, sky, mountain and earth that follows. That is the ordinary pattern: the name marks the surah rather than summarising it. Yet the choice is apt here, since the two faces of the Day, scorched and contented, fill the first half before the argument turns to the created world.',
      bn: 'গাশিয়াহ শব্দের আভিধানিক অর্থ, যা ঢেকে ফেলে বা আচ্ছন্ন করে। কুরআনে কিয়ামতের যে কয়েকটি নাম এসেছে, এটি তার একটি; কারণ সেদিন গোটা সৃষ্টিকে ঢেকে ফেলবে, কিছুই এর বাইরে থাকবে না। শব্দটি এসেছে একবারই, প্রথম আয়াতে, আর সূরার নাম নেওয়া হয়েছে সেখান থেকেই, পরের উট, আকাশ, পাহাড় ও পৃথিবী নিয়ে দীর্ঘ আলোচনা থেকে নয়। এটাই সাধারণ রীতি: নাম সূরাকে চিহ্নিত করে, সারসংক্ষেপ দেয় না। তবু এখানে নামটি যথার্থ, কারণ সেদিনের দুই চেহারা, ঝলসে যাওয়া আর পরিতৃপ্ত, সূরার প্রথমার্ধ জুড়ে আছে; তারপরই আলোচনা ফেরে সৃষ্টিজগতের দিকে।',
    },
    signal: {
      en: 'Expect Judgement painted in two panels, the wretched and the delighted, then a call to look at camel, sky, mountain and earth as evidence, closing with the reminder that the Prophet is a reminder and not a controller over people.',
      bn: 'দুই ছবিতে আঁকা কিয়ামত: হতভাগা আর আনন্দিত। তারপর প্রমাণ হিসেবে উট, আকাশ, পাহাড় ও পৃথিবীর দিকে তাকানোর ডাক। শেষে মনে করিয়ে দেওয়া হয়, নবী একজন উপদেশদাতা, মানুষের উপর জবরদস্তিকারী নন।',
    },
    alt: [],
    refs: ['88:1'],
  },

  89: {
    meaning: { en: 'The Dawn', bn: 'ঊষা' },
    source: {
      en: 'From the oath "By the dawn" with which the surah opens (89:1).',
      bn: 'সূরার শুরুর শপথ থেকে—"শপথ ঊষার" (৮৯:১)।',
    },
    why: {
      en: 'The surah opens with a run of oaths — dawn, ten nights, the even and the odd, the night as it passes — and takes its name from the first of them. Dawn is not the subject. What follows is Ad, Thamud and Pharaoh, then a rebuke of a society that honours whoever has wealth while neglecting the orphan, and finally the soul at rest called back to its Lord. The name is a hook lifted from the opening word, and the reason this oath was chosen over the other three is simply that it comes first. Which dawn and which ten nights are meant is disputed, and the surah does not say.',
      bn: 'সূরাটি শুরু হয় পরপর কয়েকটি শপথ দিয়ে: ঊষা, দশ রাত, জোড় ও বিজোড়, আর বিদায় নিতে থাকা রাত। নাম নেওয়া হয়েছে এদের প্রথমটি থেকে। ঊষা সূরার আলোচ্য বিষয় নয়। এরপর আসে আদ, সামুদ ও ফেরাউনের কথা; তারপর এমন এক সমাজের তিরস্কার, যারা ধনীকে সম্মান করে আর এতিমকে অবহেলা করে; আর শেষে প্রশান্ত আত্মাকে তার রবের কাছে ফিরে আসার ডাক। নামটি শুরুর শব্দ থেকে নেওয়া একটি চিহ্ন। বাকি তিনটি শপথ রেখে এটিকে বাছাইয়ের কারণ শুধু এটুকুই যে এটি আগে এসেছে। কোন ঊষা আর কোন দশ রাত বোঝানো হয়েছে, তা নিয়ে মুফাসসিরদের মতভেদ আছে; সূরা নিজে তা বলেনি।',
    },
    signal: {
      en: 'Expect oaths, then three ruined peoples as evidence that God watches, then a sharp diagnosis of wealth, orphans and greed, and finally some of the most consoling verses in the Quran, addressed to the soul at peace.',
      bn: 'শপথ, তারপর আল্লাহ যে সব দেখছেন তার প্রমাণ হিসেবে তিনটি ধ্বংস হওয়া জাতি; এরপর সম্পদ, এতিম আর লোভ নিয়ে সোজাসাপটা দোষ ধরা; আর শেষে প্রশান্ত আত্মাকে উদ্দেশ করে বলা কুরআনের সবচেয়ে সান্ত্বনার কয়েকটি আয়াত।',
    },
    alt: [],
    refs: ['89:1', '89:2'],
  },

  90: {
    meaning: { en: 'The City', bn: 'নগরী' },
    source: {
      en: 'From the opening oath "I swear by this city" — Mecca — in 90:1-2.',
      bn: 'শুরুর শপথ থেকে—"শপথ করছি এই নগরীর", অর্থাৎ মক্কার (৯০:১-২)।',
    },
    why: {
      en: 'Al-Balad, "the city", is Mecca named without being named: the surah swears by it, and by the fact that the Prophet is a lawful dweller in it. The definite article does the work, because every early listener knew which city was meant. The name comes from that oath and not from the surah\'s real theme, which is the steep uphill road — freeing a neck from bondage, feeding on a day of hunger, and joining those who counsel each other to patience and mercy. Titling it "The City" keeps the oath, and the sacred setting of the whole address, standing at the front.',
      bn: 'আল-বালাদ বা "নগরী" বলতে মক্কাকেই বোঝানো হয়েছে, নাম না নিয়েই। সূরাটি শপথ করে এই নগরীর, আর এই কথার যে নবী এখানে বৈধভাবে বাস করছেন। নির্দিষ্টতাবাচক "আল"-ই কাজটা সেরে দেয়, কারণ প্রথম শ্রোতারা সবাই জানত কোন নগরীর কথা বলা হচ্ছে। নামটি এসেছে ওই শপথ থেকে, সূরার আসল বিষয় থেকে নয়। আসল বিষয় হলো সেই কঠিন চড়াই পথ: দাসমুক্তি, ক্ষুধার দিনে খাবার দেওয়া, আর তাদের দলে শামিল হওয়া, যারা একে অপরকে সবর ও দয়ার উপদেশ দেয়। "নগরী" নামটি সেই শপথটিকে, আর গোটা বক্তব্যের পবিত্র প্রেক্ষাপটকে, সবার সামনে রেখে দেয়।',
    },
    signal: {
      en: 'Expect a short Meccan surah that swears by Mecca, denies that man was created for ease, and then lays out an uphill road of concrete deeds — freeing slaves, feeding orphans and the destitute — as the real test of faith.',
      bn: 'ছোট একটি মক্কী সূরা, যা মক্কার শপথ করে, আর বলে মানুষকে আরামের জন্য সৃষ্টি করা হয়নি। তারপর ঈমানের আসল পরীক্ষা হিসেবে সামনে আনে বাস্তব কাজের এক কঠিন চড়াই পথ: দাসমুক্তি, এতিম আর নিঃস্বকে খাওয়ানো।',
    },
    alt: [],
    refs: ['90:1', '90:2'],
  },

  91: {
    meaning: { en: 'The Sun', bn: 'সূর্য' },
    source: {
      en: 'From the opening oath "By the sun and its morning brightness" (91:1).',
      bn: 'শুরুর শপথ থেকে—"শপথ সূর্যের ও তার কিরণের" (৯১:১)।',
    },
    why: {
      en: 'Eleven oaths open this surah — sun, moon, day, night, sky, earth, and the soul with the way it was proportioned — and the name takes the first. The sun is never discussed; it is sworn by. What the oaths lead to is a single verdict: whoever purifies the soul has succeeded and whoever buries it has failed, illustrated at once by Thamud and the she-camel. The naming convention shows itself plainly here, since a surah about the soul is universally known by an astronomical image from its first word, because that is what a reciter remembers first.',
      bn: 'এই সূরা শুরু হয় এগারোটি শপথ দিয়ে: সূর্য, চাঁদ, দিন, রাত, আকাশ, পৃথিবী, আর আত্মা ও তার সুঠাম গঠন। নাম নেওয়া হয়েছে প্রথমটি থেকে। সূর্য নিয়ে কোনো আলোচনা নেই, কেবল তার শপথ করা হয়েছে। শপথগুলো গিয়ে থামে একটিমাত্র রায়ে: যে আত্মাকে পবিত্র করল সে সফল, আর যে তাকে কলুষে চাপা দিল সে ব্যর্থ। সঙ্গে সঙ্গেই দৃষ্টান্ত হিসেবে আসে সামুদ আর উটনীর ঘটনা। নামকরণের রীতি এখানে স্পষ্ট ধরা পড়ে: আত্মা নিয়ে একটি সূরা সবার কাছে পরিচিত প্রথম শব্দের এক আকাশের ছবি দিয়ে, কারণ তিলাওয়াতকারীর সেটিই আগে মনে পড়ে।',
    },
    signal: {
      en: 'Expect a rapid chain of oaths sworn on creation, then a verdict on the soul that purifies or corrupts itself, and then the destruction of Thamud after they hamstrung the she-camel, offered as the worked example.',
      bn: 'সৃষ্টির নানা কিছুর নামে পরপর দ্রুত শপথ, তারপর আত্মা নিয়ে রায়: সে নিজেকে পবিত্র করে, না কলুষিত করে। তারপর হাতে-কলমে দৃষ্টান্ত হিসেবে সামুদের ধ্বংস, যারা উটনীর পায়ের রগ কেটে দিয়েছিল।',
    },
    alt: [],
    refs: ['91:1', '91:7', '91:13'],
  },

  92: {
    meaning: { en: 'The Night', bn: 'রাত' },
    source: {
      en: 'From the opening oath "By the night as it covers" (92:1).',
      bn: 'শুরুর শপথ থেকে—"শপথ রাতের, যখন তা আচ্ছন্ন করে" (৯২:১)।',
    },
    why: {
      en: 'The surah is named from its first word-pair, the night that veils, sworn against the day that reveals. Night and day here are a figure for the two divergent human strivings the surah goes on to describe: the one who gives, is conscious of God and affirms the best, and the one who is miserly, considers himself self-sufficient and denies. Naming the surah "The Night" preserves the opening half of that contrast. It is a marker rather than a summary, though an unusually well-chosen one, since the surah\'s whole logic is a pairing of opposites.',
      bn: 'সূরার নাম এসেছে প্রথম শব্দজোড় থেকে: ঢেকে দেওয়া রাত, যার পাশে শপথ করা হয়েছে আলো ছড়ানো দিনের। এখানে রাত আর দিন আসলে মানুষের দুই বিপরীত চেষ্টার রূপক, যার কথা সূরা পরে বলেছে। একজন দান করে, তাকওয়া অবলম্বন করে আর উত্তম কথাকে সত্য বলে মানে; আরেকজন কৃপণতা করে, নিজেকে কারও মুখাপেক্ষী মনে করে না আর সেই উত্তম কথাকে মিথ্যা বলে। "রাত" নামটি সেই বৈপরীত্যের প্রথম অর্ধেক ধরে রেখেছে। নামটি সারসংক্ষেপ নয়, চিহ্ন। তবে খুবই মানানসই চিহ্ন, কারণ পুরো সূরাটাই সাজানো বিপরীত জোড়ায়।',
    },
    signal: {
      en: 'Expect the shortest possible statement of two roads: giving with God-consciousness eased towards ease, hoarding with self-sufficiency eased towards hardship, and the God-fearing giver of wealth held up at the close.',
      bn: 'যতটা সংক্ষেপে বলা যায়, ততটা সংক্ষেপে দুই পথের কথা: যে দান করে ও তাকওয়া অবলম্বন করে, তার জন্য সহজ পথ সহজ করে দেওয়া হয়; আর যে কৃপণতা করে ও নিজেকে অমুখাপেক্ষী ভাবে, তার জন্য সহজ করে দেওয়া হয় কঠিন পথ। শেষে তুলে ধরা হয়েছে সেই মুত্তাকীকে, যে নিজের সম্পদ দান করে।',
    },
    alt: [],
    refs: ['92:1'],
  },

  93: {
    meaning: { en: 'The Morning Brightness', bn: 'পূর্বাহ্ণের আলো' },
    source: {
      en: 'From the opening oath "By the morning brightness" (93:1).',
      bn: 'শুরুর শপথ থেকে—"শপথ পূর্বাহ্ণের আলোর" (৯৩:১)।',
    },
    why: {
      en: 'Duha is the swelling light of mid-morning, after sunrise and before the sun stands high, sworn here against the night when it grows still. The word is not the surah\'s topic. The topic is consolation, delivered after a pause in revelation, telling the Prophet his Lord has neither forsaken him nor become displeased. But image and message match closely: light returning after a dark stillness. Named from its first word, as many of the short Meccan surahs are, the title has long since become the ordinary way of referring to these eleven verses of reassurance.',
      bn: 'দুহা হলো সকালের বাড়ন্ত আলো, সূর্য ওঠার পর আর মাথার ওপর ওঠার আগে। এখানে এর শপথ করা হয়েছে নিস্তব্ধ রাতের পাশাপাশি। শব্দটি সূরার আলোচ্য বিষয় নয়। বিষয় হলো সান্ত্বনা: কিছুদিন ওহি বন্ধ থাকার পর নবীকে জানানো হচ্ছে, তাঁর প্রতিপালক তাঁকে ছেড়েও যাননি, তাঁর ওপর অসন্তুষ্টও হননি। তবু ছবি আর বার্তা চমৎকার মিলে যায়: অন্ধকার নীরবতার পর আলো ফিরে আসা। ছোট মক্কী সূরাগুলোর অনেকটির মতো এর নামও প্রথম শব্দ থেকে নেওয়া। আর বহুকাল ধরে এই নামেই মানুষ সান্ত্বনার এই এগারো আয়াতকে চেনে।',
    },
    signal: {
      en: 'Expect eleven verses of comfort: God has not abandoned you, the end is better than the beginning, you were an orphan and were sheltered — therefore do not oppress the orphan, do not repel the beggar, and speak of your Lord\'s favour.',
      bn: 'এগারো আয়াতের সান্ত্বনা: আল্লাহ তোমাকে ছেড়ে যাননি, শেষটা শুরুর চেয়ে ভালো, তুমি এতিম ছিলে আর আশ্রয় পেয়েছ। তাই এতিমের ওপর কঠোর হয়ো না, সাহায্যপ্রার্থীকে ফিরিয়ে দিয়ো না, আর তোমার প্রতিপালকের অনুগ্রহের কথা বলো।',
    },
    alt: [],
    refs: ['93:1', '93:2'],
  },

  94: {
    meaning: { en: 'The Expansion', bn: 'প্রশস্তকরণ' },
    source: {
      en: 'From the verb in the opening question, "Did We not expand your breast for you?" (94:1).',
      bn: 'শুরুর প্রশ্নে আসা ক্রিয়া থেকে—"আমি কি আপনার বক্ষ প্রশস্ত করে দিইনি?" (৯৪:১)।',
    },
    why: {
      en: 'This name is drawn from a verb rather than a noun in the text: sharaha, to open out or widen. The surah is titled by the act it opens with, the expanding of the Prophet\'s breast, and it is equally well known as al-Inshirah, the noun of the same root, a form that does not itself appear anywhere in the eight verses. Both titles point back to the same first line. The name works as a marker of the opening, in the ordinary way, and here it also names the surah\'s whole consolation: a burden lifted, a name raised, and hardship twinned with ease.',
      bn: 'এই নামটি সূরার কোনো বিশেষ্য থেকে নয়, একটি ক্রিয়া থেকে নেওয়া: শারাহা, মানে খুলে দেওয়া বা প্রশস্ত করা। সূরা যে কাজ দিয়ে শুরু, অর্থাৎ নবীর বক্ষ প্রশস্ত করে দেওয়া, সেই কাজের নামেই এর নাম। সূরাটি সমান পরিচিত আল-ইনশিরাহ নামেও। এটি একই ধাতুর বিশেষ্য, যদিও এই রূপটি আট আয়াতের কোথাও নেই। দুটি নামই ইঙ্গিত করে একই প্রথম আয়াতের দিকে। সাধারণ নিয়মে নামটি শুরুর চিহ্ন; তবে এখানে তা সূরার পুরো সান্ত্বনারও নাম: বোঝা নামিয়ে দেওয়া, মর্যাদা উঁচু করা, আর কষ্টের সঙ্গে স্বস্তিকে জুড়ে দেওয়া।',
    },
    signal: {
      en: 'Expect eight verses continuing the consolation of Ad-Duha: a burden removed, a reputation raised, and the promise that with hardship comes ease, stated twice, closing with a command to labour and to turn to your Lord.',
      bn: 'আট আয়াত, আদ-দুহার সান্ত্বনারই ধারাবাহিকতা: বোঝা নামিয়ে দেওয়া, মর্যাদা উঁচু করা, আর দুবার বলা ওয়াদা যে কষ্টের সঙ্গেই স্বস্তি আছে। শেষে হুকুম: পরিশ্রম করো, আর তোমার প্রতিপালকের দিকেই মন দাও।',
    },
    alt: [
      { name: 'Al-Inshirah', en: 'The noun form of the same root as the opening verb; widely used, and the title printed in the Turkish tradition.', bn: 'শুরুর ক্রিয়াটি যে ধাতু থেকে, সেই ধাতুরই বিশেষ্য রূপ। নামটি বহুল প্রচলিত, তুর্কি ধারায় এই নামেই ছাপা হয়।' },
      { name: 'Alam Nashrah', en: 'The surah cited by its opening words, "Did We not expand", as early usage often did.', bn: 'প্রথম যুগে প্রায়ই যেমন হতো, সূরাটিকে তার শুরুর কথা "আলাম নাশরাহ" (আমি কি প্রশস্ত করিনি) দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['94:1', '94:5', '94:6'],
  },

  95: {
    meaning: { en: 'The Fig', bn: 'ডুমুর' },
    source: {
      en: 'From the opening oath "By the fig and the olive" (95:1).',
      bn: 'শুরুর শপথ থেকে—"শপথ ডুমুর ও জলপাইয়ের" (৯৫:১)।',
    },
    why: {
      en: 'The surah swears by fig, olive, Mount Sinai and this secure city, and takes its name from the first item alone. Whether fig and olive mean the fruits themselves, or the lands where they grow — Palestine and Syria, paired with Sinai and Mecca as three or four sites of revelation — is disputed among the commentators, and the surah does not settle it. Either way the title is a marker lifted from the opening word rather than a statement of the subject, which is that the human being was made in the finest form and then reduced to the lowest, except those who believe and do good.',
      bn: 'সূরাটি শপথ করেছে ডুমুর, জলপাই, তূর পাহাড় আর এই নিরাপদ নগরীর, কিন্তু নাম নিয়েছে কেবল প্রথমটি থেকে। ডুমুর ও জলপাই বলতে কি ফল দুটিই বোঝানো হয়েছে, নাকি যেসব ভূমিতে এগুলো জন্মায়? সেই ভূমি হলো ফিলিস্তিন ও সিরিয়া, যা তূর ও মক্কার সঙ্গে মিলে ওহি নাজিলের তিন বা চারটি স্থান। এ নিয়ে মুফাসসিরদের মতভেদ আছে, আর সূরা নিজে এর মীমাংসা করেনি। যেভাবেই ধরা হোক, নামটি শুরুর শব্দ থেকে তুলে নেওয়া চিহ্ন, বিষয়ের বর্ণনা নয়। বিষয় হলো: আল্লাহ মানুষকে সবচেয়ে সুন্দর গঠনে সৃষ্টি করেছেন, তারপর তাকে নামিয়ে দিয়েছেন সবচেয়ে নিচে। ব্যতিক্রম শুধু তারা, যারা ঈমান আনে ও নেক আমল করে।',
    },
    signal: {
      en: 'Expect a run of oaths, then the surah\'s claim about human nature — created in the best stature, sunk to the lowest of the low unless faith and good deeds hold — closing with a question about God as the most just of judges.',
      bn: 'পরপর কয়েকটি শপথ, তারপর মানুষের স্বভাব নিয়ে সূরার মূল কথা: মানুষ সৃষ্টি হয়েছে সর্বোত্তম গঠনে, অথচ ঈমান ও নেক আমল না থাকলে তাকে নামিয়ে দেওয়া হয় নিচের চেয়েও নিচে। শেষে প্রশ্ন, আল্লাহ কি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক নন?',
    },
    alt: [],
    refs: ['95:1', '95:4'],
  },

  96: {
    meaning: { en: 'The Clinging Form', bn: 'জমাট রক্তপিণ্ড, বা আঁকড়ে থাকা পিণ্ড' },
    source: {
      en: 'From "He created man from a clinging form" (96:2), the second verse of the first revelation.',
      bn: 'প্রথম ওহির দ্বিতীয় আয়াত থেকে: "সৃষ্টি করেছেন মানুষকে জমাট-বাঁধা রক্তপিণ্ড হতে" (৯৬:২)। আরবি আলাক শব্দের মূল অর্থ যা আঁকড়ে থাকে।',
    },
    why: {
      en: 'The first passage ever revealed opens with the command Iqra, read, and the surah is accordingly known by two names: al-Alaq, from the noun in verse two, and Iqra, from the imperative in verse one. Alaq describes the clinging, leech-like early form of the embryo — an unusual, concrete word that fixes itself in the memory, exactly the kind of marker surah names are usually drawn from. That the surah of the first revelation is titled after an embryological term rather than after revelation or reading shows as clearly as anything can that these names label rather than summarise.',
      bn: 'সবার আগে নাজিল হওয়া অংশটি শুরু হয় "ইকরা", অর্থাৎ "পড়ো" হুকুম দিয়ে। তাই সূরাটি দুই নামে পরিচিত: দ্বিতীয় আয়াতের বিশেষ্য থেকে আল-আলাক, আর প্রথম আয়াতের হুকুম থেকে ইকরা। আলাক বলতে বোঝায় ভ্রূণের শুরুর দিকের রূপ, যা জোঁকের মতো আঁকড়ে লেগে থাকে। শব্দটি অচেনা ধরনের, চোখে দেখার মতো স্পষ্ট, তাই সহজেই মনে গেঁথে যায়। সূরার নাম সাধারণত এমন শব্দ থেকেই নেওয়া হয়। প্রথম ওহির সূরার নাম ওহি বা পড়ার নামে না হয়ে ভ্রূণের গঠন বোঝানো একটি শব্দে হয়েছে। এর চেয়ে স্পষ্ট করে আর কিছুই দেখায় না যে এই নামগুলো পরিচয়ের চিহ্ন, সারসংক্ষেপ নয়।',
    },
    signal: {
      en: 'Expect the five verses first revealed at Hira — read, your Lord taught by the pen — followed by a later Meccan passage rebuking the man who forbade a servant from praying, and ending with a command to prostrate and draw near.',
      bn: 'হেরায় প্রথম নাজিল হওয়া পাঁচটি আয়াত: পড়ো, তোমার প্রতিপালক কলম দিয়ে শিখিয়েছেন। এরপর মক্কী যুগের পরের দিকের একটি অংশ, যেখানে তিরস্কার করা হয়েছে সেই লোককে, যে আল্লাহর এক বান্দাকে নামাজ পড়তে বাধা দিত। শেষে হুকুম: সিজদা করো, আর কাছে এসো।',
    },
    alt: [
      { name: 'Iqra', en: 'From the opening imperative, "Read". Both names are in common use for the same surah, one taken from the command and one from a word inside it.', bn: 'শুরুর হুকুম "পড়ো" থেকে। একই সূরার দুটি নামই প্রচলিত: একটি এসেছে হুকুম থেকে, অন্যটি তারই ভেতরের একটি শব্দ থেকে।' },
      { name: "Iqra bismi rabbik", en: 'The surah cited by its full opening phrase, as hadith reports frequently do.', bn: 'হাদিসের বর্ণনায় প্রায়ই সূরাটিকে তার শুরুর পুরো বাক্যাংশ দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['96:1', '96:2', '96:19'],
  },

  97: {
    meaning: { en: 'The Decree', bn: 'মহিমান্বিত নির্ধারণ' },
    source: {
      en: 'From the phrase laylat al-qadr, "the Night of Decree", in "We sent it down in the Night of Decree" (97:1).',
      bn: '"আমি একে নাজিল করেছি কদরের রাতে" (৯৭:১)—এই আয়াতের "লাইলাতুল কদর" শব্দগুচ্ছ থেকে।',
    },
    why: {
      en: 'Qadr carries two accepted senses here, and the commentators hold both: measuring out or decreeing, since the affairs of the coming year are apportioned that night, and worth or rank, since the night is honoured above a thousand months. The surah is named from the phrase laylat al-qadr, which occurs three times in only five verses — a density of repetition that makes the title unavoidable. This is one of the cases where the naming word genuinely is the subject rather than a passing marker, because the whole surah is about that single night and nothing else.',
      bn: 'এখানে "কদর" শব্দের দুটি স্বীকৃত অর্থ আছে, আর মুফাসসিররা দুটিই গ্রহণ করেছেন। এক, পরিমাপ বা নির্ধারণ, কারণ আগামী বছরের সব বিষয় সেই রাতে বণ্টন করে দেওয়া হয়। দুই, মর্যাদা, কারণ এই রাত হাজার মাসের চেয়েও শ্রেষ্ঠ। সূরার নাম এসেছে "লাইলাতুল কদর" কথাটি থেকে, যা মাত্র পাঁচ আয়াতে তিনবার এসেছে। এত ঘন ঘন পুনরাবৃত্তির পর অন্য কোনো নাম হওয়াই কঠিন। এটি সেই ক্ষেত্রগুলোর একটি, যেখানে নামের শব্দটি আসলেই সূরার বিষয়, কেবল চলতি চিহ্ন নয়। কারণ পুরো সূরাটাই ওই একটি রাতকে নিয়ে, আর কিছু নিয়ে নয়।',
    },
    signal: {
      en: 'Expect five verses on the night the Quran was sent down: better than a thousand months, the angels and the Spirit descending by their Lord\'s permission with every decree, and peace until the break of dawn.',
      bn: 'কুরআন নাজিলের সেই রাত নিয়ে পাঁচটি আয়াত: এ রাত হাজার মাসের চেয়ে উত্তম; ফেরেশতারা ও রূহ তাঁদের প্রতিপালকের অনুমতিতে প্রতিটি বিষয়ের ফয়সালা নিয়ে নেমে আসেন; আর ফজর হওয়া পর্যন্ত শান্তি।',
    },
    alt: [],
    refs: ['97:1', '97:2', '97:3'],
  },

  98: {
    meaning: { en: 'The Clear Proof', bn: 'সুস্পষ্ট প্রমাণ' },
    source: {
      en: 'From "until the clear proof came to them" (98:1), the proof being a Messenger reciting purified scriptures.',
      bn: '"যতক্ষণ না তাদের কাছে সুস্পষ্ট প্রমাণ আসে" (৯৮:১)—আর সেই প্রমাণ হলেন এক রাসূল, যিনি পবিত্র সহিফা পাঠ করেন।',
    },
    why: {
      en: 'Bayyinah means a clear, decisive piece of evidence. In the first verse it names the thing whose arrival ended the prior state of the People of the Book and the idolaters, and the fourth verse adds that the earlier scripture-holders divided only after it reached them. The word appears twice, and the surah takes its name from it. Here the marker stands close to the theme, since the surah\'s argument is precisely about what people did once clear evidence arrived. It also carries several other recorded names, every one of them likewise lifted from its own wording.',
      bn: 'বাইয়্যিনাহ মানে স্পষ্ট, অকাট্য প্রমাণ। প্রথম আয়াতে শব্দটি সেই জিনিসের নাম, যা আসার পর আহলে কিতাব ও মুশরিকদের আগের অবস্থার অবসান ঘটে। চতুর্থ আয়াত আরও বলে, আগের কিতাবধারীরা বিভক্ত হয়েছিল এই প্রমাণ তাদের কাছে পৌঁছানোর পরেই। শব্দটি এসেছে দুবার, আর সেখান থেকেই সূরার নাম। এখানে চিহ্নটি বিষয়ের খুব কাছাকাছি, কারণ সূরার পুরো যুক্তিই এই নিয়ে: স্পষ্ট প্রমাণ আসার পর মানুষ কী করল। এই সূরার আরও কয়েকটি নাম বর্ণিত আছে, আর সেগুলোর প্রতিটিও সূরার নিজের শব্দ থেকেই নেওয়া।',
    },
    signal: {
      en: 'Expect a Medinan surah on the coming of a Messenger reciting purified pages, the split it produced among earlier scripture-holders, the simplicity of what was actually commanded, and the sharply opposed ends of the worst and best of creation.',
      bn: 'একটি মাদানী সূরা: পবিত্র সহিফা পাঠ করে শোনানো এক রাসূলের আগমন, তাতে আগের কিতাবধারীদের মধ্যে ভাঙন, আসলে যে আদেশ দেওয়া হয়েছিল তা কত সরল, আর সৃষ্টির নিকৃষ্টতম ও শ্রেষ্ঠতম দলের একেবারে উল্টো পরিণতি।',
    },
    alt: [
      { name: 'Lam Yakun', en: 'The surah cited by its opening words, "Those who disbelieved were not to depart".', bn: 'সূরাটিকে তার শুরুর কথা "লাম ইয়াকুন" দিয়ে উল্লেখ করা হয়।' },
      { name: 'Al-Qayyimah', en: 'From the "correct, upright religion" and the upright scriptures named in the surah.', bn: 'সূরায় উল্লেখিত "সঠিক, সুপ্রতিষ্ঠিত দ্বীন" ও সুপ্রতিষ্ঠিত সহিফার বর্ণনা থেকে।' },
      { name: 'Al-Bariyyah', en: 'From the closing verses, which call the two groups the worst and the best of creation, al-bariyyah.', bn: 'শেষ আয়াতগুলো থেকে, যেখানে দুই দলকে বলা হয়েছে সৃষ্টির নিকৃষ্টতম ও শ্রেষ্ঠতম—আল-বারিয়্যাহ।' },
    ],
    refs: ['98:1', '98:4'],
  },

  99: {
    meaning: { en: 'The Earthquake', bn: 'ভূমিকম্প' },
    source: {
      en: 'From "When the earth is shaken with its final quaking" (99:1).',
      bn: '"যখন পৃথিবী তার চূড়ান্ত কম্পনে প্রকম্পিত হবে" (৯৯:১)—এই আয়াত থেকে।',
    },
    why: {
      en: 'The name comes from the verb and its cognate noun in the first verse, zulzilat and zilzalaha, a doubled construction that makes the shaking total rather than ordinary — it is the earth\'s own appointed quake, not one of many. The surah is equally called az-Zilzal, the same root in a different form. As usual the title is taken from the opening word, but here that word opens the very scene the whole surah describes: the earth convulsing, disgorging its burdens, then testifying, before people are shown their deeds down to the weight of an atom.',
      bn: 'নামটি এসেছে প্রথম আয়াতের ক্রিয়া ও একই মূলের বিশেষ্য থেকে: "যুলযিলাত" আর "যিলযালাহা"। এই দ্বিগুণ গঠন বুঝিয়ে দেয়, কম্পনটি সাধারণ নয়, সর্বগ্রাসী। এটি পৃথিবীর জন্য নির্ধারিত সেই একটিমাত্র কম্পন, অনেকগুলোর একটি নয়। একই ধাতুর ভিন্ন রূপে সূরাটিকে আয-যিলযালও বলা হয়। নিয়মমতো নাম নেওয়া হয়েছে শুরুর শব্দ থেকেই, তবে এখানে সেই শব্দ দিয়েই শুরু হয় পুরো সূরার দৃশ্য: পৃথিবী থরথর করে কাঁপছে, ভেতরের বোঝা বের করে দিচ্ছে, তারপর সাক্ষ্য দিচ্ছে। এরপর মানুষকে দেখানো হবে তাদের আমল, অণু পরিমাণ পর্যন্ত।',
    },
    signal: {
      en: 'Expect eight verses on the Day itself: the earth shaking and then speaking, people emerging in scattered groups to be shown their deeds, and the closing measure — an atom\'s weight of good or evil, seen.',
      bn: 'সেই দিনটিকে নিয়েই আট আয়াত: পৃথিবী কেঁপে উঠবে, তারপর কথা বলবে; মানুষ ভিন্ন ভিন্ন দলে বেরিয়ে আসবে নিজেদের আমল দেখার জন্য। আর শেষে মাপকাঠি: অণু পরিমাণ ভালো বা মন্দও সে নিজের চোখে দেখবে।',
    },
    alt: [
      { name: 'Az-Zilzal', en: 'The same root in a different form; both titles are in print and refer to the same surah.', bn: 'একই ধাতুর ভিন্ন রূপ; দুটি নামই ছাপা হয় এবং একই সূরাকে বোঝায়।' },
    ],
    refs: ['99:1', '99:7', '99:8'],
  },

  100: {
    meaning: { en: 'The Racing Steeds', bn: 'ধাবমান অশ্ব' },
    source: {
      en: 'From the opening oath "By the racers, panting" (100:1).',
      bn: 'শুরুর শপথ থেকে—"শপথ ধাবমান অশ্বের, যারা হাঁপিয়ে ছোটে" (১০০:১)।',
    },
    why: {
      en: 'Al-Adiyat are runners that gallop: the surah swears by them panting, striking sparks with their hooves, raiding at dawn, and stirring up dust. Most commentators read them as warhorses, while a view reported from Ali takes the oath to be about the camels of the pilgrims moving from Arafah, and the surah itself does not decide between them. The name is simply the first word, and the image is only a runway. The point lands at verse six: man is ungrateful to his Lord and violent in his love of wealth. A vivid opening has become the label.',
      bn: 'আল-আদিয়াত মানে যারা ছুটে চলে। সূরা তাদের শপথ করে: তারা হাঁপাতে হাঁপাতে ছোটে, খুরের আঘাতে আগুনের ফুলকি তোলে, ভোরবেলা হামলা চালায় আর ধুলো ওড়ায়। অধিকাংশ মুফাসসির এদের যুদ্ধের ঘোড়া বলেছেন। তবে আলী (রাঃ) থেকে বর্ণিত এক মতে এই শপথ আরাফা থেকে রওনা হওয়া হাজিদের উট নিয়ে। সূরা নিজে এর কোনোটিকে চূড়ান্ত করেনি। নামটি শুধু প্রথম শব্দ, আর ছবিটি শুধু ভূমিকা। আসল কথা আসে ষষ্ঠ আয়াতে: মানুষ তার প্রতিপালকের প্রতি বড়ই অকৃতজ্ঞ, আর সম্পদের ভালোবাসায় প্রচণ্ড। জীবন্ত এক সূচনাই হয়ে উঠেছে সূরার পরিচয়।',
    },
    signal: {
      en: 'Expect four hammering oaths on charging horses, then the indictment: man is ungrateful, himself a witness to it, and fierce in his love of wealth — with a reminder of the day graves are emptied and hearts laid bare.',
      bn: 'ছুটন্ত ঘোড়া নিয়ে হাতুড়ির ঘায়ের মতো চারটি শপথ, তারপর অভিযোগ: মানুষ অকৃতজ্ঞ, সে নিজেই এর সাক্ষী, আর সম্পদের ভালোবাসায় প্রচণ্ড। সঙ্গে মনে করিয়ে দেওয়া হয় সেই দিনের কথা, যেদিন কবর খালি হবে আর অন্তরের সব গোপন কথা বের হয়ে আসবে।',
    },
    alt: [],
    refs: ['100:1', '100:6', '100:8'],
  },

  101: {
    meaning: { en: 'The Striking Calamity', bn: 'মহাসংকট' },
    source: {
      en: 'From the word that opens the surah and is repeated across its first three verses (101:1-3).',
      bn: 'যে শব্দ দিয়ে সূরা শুরু হয়েছে এবং প্রথম তিন আয়াতে বারবার এসেছে, সেই শব্দ থেকে (১০১:১-৩)।',
    },
    why: {
      en: 'Qari\'ah comes from a root meaning to strike or knock violently. Like al-Ghashiyah and al-Haqqah it is one of the Quran\'s several names for the Resurrection, each catching a different aspect of it, and this one catches the sudden blow. The opening three verses use the word as a name, then ask what it is, then say you cannot know — a device that leaves the word ringing before anything is described. Naming the surah after it is all but inevitable, and unlike most surah names this one really does state the subject rather than merely label it.',
      bn: 'কারিআহ শব্দের মূল অর্থ প্রচণ্ড আঘাত করা বা সজোরে কড়া নাড়া। আল-গাশিয়াহ ও আল-হাক্কার মতো এটিও কুরআনে কিয়ামতের কয়েকটি নামের একটি। প্রতিটি নাম সেদিনের আলাদা একটি দিক তুলে ধরে, আর এটি তুলে ধরে আচমকা আঘাতকে। প্রথম তিন আয়াত শব্দটিকে প্রথমে নাম হিসেবে উচ্চারণ করে, তারপর জিজ্ঞেস করে সেটি কী, তারপর বলে, তুমি তা জানো না। ফলে কোনো বর্ণনা শুরুর আগেই শব্দটি কানে বাজতে থাকে। তাই এর নামে সূরার নাম হওয়া প্রায় অবধারিত। আর অধিকাংশ সূরার নামের মতো এটি কেবল পরিচয়চিহ্ন নয়, সত্যিই সূরার বিষয়কে বলে দেয়।',
    },
    signal: {
      en: 'Expect the Day rendered in two images — people like scattered moths, mountains like carded wool — then the weighing: heavy scales and a pleasing life, light scales and a plunge into a blazing fire.',
      bn: 'দুটি ছবিতে আঁকা কিয়ামতের দিন: মানুষ ছড়িয়ে পড়া পতঙ্গের মতো, পাহাড় ধুনা পশমের মতো। তারপর ওজন। যার পাল্লা ভারী, তার জন্য সন্তোষের জীবন; যার পাল্লা হালকা, তার ঠিকানা জ্বলন্ত আগুন।',
    },
    alt: [],
    refs: ['101:1', '101:2', '101:3'],
  },

  102: {
    meaning: { en: 'Competing for More', bn: 'প্রাচুর্যের প্রতিযোগিতা' },
    source: {
      en: 'From the opening words, "Rivalry in worldly increase distracts you" (102:1).',
      bn: 'শুরুর কথা থেকে—"প্রাচুর্যের প্রতিযোগিতা তোমাদের গাফিল করে রেখেছে" (১০২:১)।',
    },
    why: {
      en: 'Takathur is a single word for an entire habit: the drive to have more than the next person, and then to count it. It occurs once, in verse one, as the thing that distracts people right up to the moment they reach the graves — and the early reports say the rivalry in question extended to boasting over the numbers of the dead. The name is that word, taken from the opening in the usual way, but here it happens to name the disease the surah diagnoses. Early usage and hadith also cite the surah by its opening pair of words.',
      bn: 'তাকাসুর একটিমাত্র শব্দ, অথচ তাতে ধরা পড়ে একটা গোটা অভ্যাস: অন্যের চেয়ে বেশি পাওয়ার তাড়না, আর তারপর সেটা গুনে গুনে দেখা। শব্দটি এসেছে একবারই, প্রথম আয়াতে। এটিই মানুষকে গাফিল করে রাখে কবরে পৌঁছানো পর্যন্ত। প্রথম যুগের বর্ণনায় আছে, এই প্রতিযোগিতা এমনকি মৃতদের সংখ্যা নিয়ে গর্ব করা পর্যন্ত গড়িয়েছিল। নিয়মমতো নামটি শুরুর শব্দ থেকেই নেওয়া, তবে এখানে সেই শব্দই সেই রোগের নাম, যা সূরা ধরিয়ে দেয়। প্রথম যুগে ও হাদিসে সূরাটিকে তার শুরুর দুই শব্দ দিয়েও উল্লেখ করা হয়।',
    },
    signal: {
      en: 'Expect eight verses of warning: distraction that lasts until the graveyard, a repeated "you will come to know", then certainty of knowledge, the sight of the blazing fire, and questioning about every blessing enjoyed.',
      bn: 'আট আয়াতের সতর্কবাণী: কবরস্থান পর্যন্ত চলা গাফিলতি, বারবার বলা "শিগগিরই তোমরা জানতে পারবে", তারপর নিশ্চিত জ্ঞান, জ্বলন্ত আগুন চোখে দেখা, আর ভোগ করা প্রতিটি নিয়ামত নিয়ে জিজ্ঞাসা।',
    },
    alt: [
      { name: 'Alhakum', en: 'Early usage and hadith often cite the surah by its opening words, Alhakum at-Takathur, rather than by a one-word title.', bn: 'প্রথম যুগে ও হাদীসে সূরাটিকে প্রায়ই এক শব্দের শিরোনামে নয়, বরং শুরুর কথা "আলহাকুমুত তাকাসুর" দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['102:1', '102:8'],
  },

  103: {
    meaning: { en: 'Time', bn: 'কাল' },
    source: {
      en: 'From the one-word oath that opens the surah, "By time" (103:1).',
      bn: 'সূরা যে এক শব্দের শপথ দিয়ে শুরু, সেখান থেকে: "শপথ কালের" (১০৩:১)।',
    },
    why: {
      en: 'Asr can mean time as such, the age, or the late afternoon — the same word names the Asr prayer — and the commentators hold all three readings without one being settled. The surah is named from that single sworn word, its very first. What follows is three verses that ash-Shafi\'i said would have sufficed people had nothing else been revealed: all humanity is at loss, except those who believe, do righteous deeds, counsel one another to truth and counsel one another to patience. The title carries none of that content. It is a pure marker of position.',
      bn: 'আসর শব্দের অর্থ হতে পারে সময় নিজেই, যুগ, কিংবা বিকেলবেলা। একই শব্দে আসরের নামাজেরও নাম। মুফাসসিররা তিনটি অর্থই গ্রহণ করেছেন, কোনোটিকে চূড়ান্ত করেননি। সূরার নাম নেওয়া হয়েছে শপথের ওই একটিমাত্র শব্দ থেকে, যা সূরার একেবারে প্রথম শব্দ। এরপরের তিন আয়াত সম্পর্কে ইমাম শাফেয়ী বলেছেন, আর কিছু নাজিল না হলে এটুকুই মানুষের জন্য যথেষ্ট হতো: সব মানুষ ক্ষতির মধ্যে আছে, তারা ছাড়া যারা ঈমান আনে, নেক আমল করে, একে অপরকে সত্যের উপদেশ দেয় আর ধৈর্যের উপদেশ দেয়। নামটি এই বিষয়ের কিছুই বহন করে না। এটি নিছক অবস্থানের চিহ্ন।',
    },
    signal: {
      en: 'Expect the shortest complete argument in the Quran: an oath, a verdict of universal loss, and a four-part exception — belief, good works, urging truth, urging patience — long used as a summary of the whole religion.',
      bn: 'কুরআনের সবচেয়ে সংক্ষিপ্ত পূর্ণাঙ্গ যুক্তি। একটি শপথ, সব মানুষের ক্ষতির রায়, তারপর চার শর্তের একটি ব্যতিক্রম: ঈমান, নেক আমল, সত্যের উপদেশ আর ধৈর্যের উপদেশ। বহুকাল ধরে একে গোটা দ্বীনের সারকথা বলা হয়।',
    },
    alt: [],
    refs: ['103:1', '103:3'],
  },

  104: {
    meaning: { en: 'The Slanderer', bn: 'পরনিন্দাকারী' },
    source: {
      en: 'From the opening curse, "Woe to every scorner and mocker" (104:1).',
      bn: 'শুরুর ভর্ৎসনা থেকে—"দুর্ভোগ প্রত্যেক পরনিন্দাকারী ও দোষ-অন্বেষণকারীর" (১০৪:১)।',
    },
    why: {
      en: 'Humazah and lumazah are a matched pair — roughly, the backbiter who tears at people and the mocker who jabs with gesture and gibe — and the surah takes the first of the two. Both are intensive forms, describing a settled habit rather than a single lapse. The word occurs once, in the opening curse, and the surah is named from it in the usual way; its actual subject is the man who piles up wealth and counts it, imagining it will make him last forever. The surah is also known as al-Hutamah, from the crushing fire it names later.',
      bn: 'হুমাযাহ ও লুমাযাহ একজোড়া শব্দ। মোটামুটি অর্থ: যে পেছনে নিন্দা করে মানুষকে ছিঁড়েখুঁড়ে খায়, আর যে ইশারা ও খোঁচা দিয়ে বিদ্রূপ করে। সূরা নাম নিয়েছে এর প্রথমটি থেকে। দুটিই আতিশয্যবাচক রূপ, অর্থাৎ একবারের ভুল নয়, পাকাপোক্ত স্বভাব। শব্দটি এসেছে একবারই, শুরুর দুর্ভোগের ঘোষণায়, আর নিয়মমতো সেখান থেকেই নাম। তবে সূরার আসল আলোচ্য সেই লোক, যে সম্পদ জমায়, বারবার গোনে আর ভাবে, এই সম্পদ তাকে চিরকাল বাঁচিয়ে রাখবে। সূরাটি আল-হুতামাহ নামেও পরিচিত। এটি সেই পিষ্টকারী আগুনের নাম, যার কথা সূরায় পরে এসেছে।',
    },
    signal: {
      en: 'Expect a short, hard Meccan surah aimed at one recognisable social type, the wealthy mocker, and its answer: the Crushing Fire, God\'s kindled fire that reaches the hearts, closed over them in outstretched columns.',
      bn: 'ছোট, কঠোর একটি মক্কী সূরা। এর নিশানা চেনা এক ধরনের মানুষ, ধনী উপহাসকারী। আর তার জবাব পিষ্টকারী আগুন, অর্থাৎ আল্লাহর জ্বালানো আগুন, যা অন্তর পর্যন্ত পৌঁছে যায় এবং লম্বা লম্বা স্তম্ভে তাদের ওপর বন্ধ করে দেওয়া হয়।',
    },
    alt: [
      { name: 'Al-Hutamah', en: 'From al-hutamah, "the crusher", the name the surah gives to the Fire in 104:4-5.', bn: 'আল-হুতামাহ, অর্থাৎ "পিষ্টকারী"। ১০৪:৪-৫ আয়াতে সূরাটি আগুনকে এই নামেই ডেকেছে।' },
    ],
    refs: ['104:1', '104:4'],
  },

  105: {
    meaning: { en: 'The Elephant', bn: 'হাতি' },
    source: {
      en: 'From "the companions of the elephant", the army God dealt with, in 105:1.',
      bn: '১০৫:১ আয়াতের "হাতিওয়ালা" কথাটি থেকে, অর্থাৎ সেই বাহিনী, যাদের আল্লাহ শায়েস্তা করেছিলেন।',
    },
    why: {
      en: 'This name points to a datable event rather than a theme. Abraha, the Abyssinian governor of Yemen, marched on Mecca with an elephant intending to destroy the Kaaba, and his army was destroyed instead. The Arabs dated the year by it — the Year of the Elephant, traditionally the year of the Prophet\'s birth, around 570 CE — so the phrase ashab al-fil in verse one was already ordinary speech before the surah used it. The surah is named from an event its first hearers had from their own fathers, and the naming word is the strange animal that made it unforgettable.',
      bn: 'এই নাম কোনো বিষয়ের দিকে নয়, এমন এক ঘটনার দিকে ইঙ্গিত করে, যার সময় নির্দিষ্ট করে বলা যায়। ইয়েমেনের আবিসিনীয় শাসক আবরাহা কাবা ধ্বংস করার উদ্দেশ্যে হাতি নিয়ে মক্কার দিকে এগিয়ে এসেছিল, কিন্তু ধ্বংস হলো তার নিজের বাহিনীই। আরবরা এই ঘটনা দিয়েই সাল গণনা করত। একে বলা হয় হস্তীবর্ষ, প্রচলিত মতে নবীর জন্মের বছর, আনুমানিক ৫৭০ খ্রিস্টাব্দ। তাই প্রথম আয়াতের "আসহাবুল ফীল" কথাটি সূরায় আসার আগেই মানুষের মুখে মুখে ছিল। সূরার নাম এমন এক ঘটনা থেকে, যার কথা প্রথম শ্রোতারা নিজেদের বাপ-দাদার মুখে শুনেছিল। আর নামের শব্দটি সেই অদ্ভুত প্রাণী, যার কারণে ঘটনাটি কেউ ভুলতে পারেনি।',
    },
    signal: {
      en: 'Expect five verses recalling a rout still in living memory at Mecca: birds in flocks, stones of baked clay, an army left like chewed straw — offered as proof that the Lord of the Kaaba protects His House.',
      bn: 'পাঁচটি আয়াত, যা মনে করিয়ে দেয় এমন এক পরাজয়ের কথা, যা মক্কার মানুষের স্মৃতিতে তখনো তাজা: ঝাঁকে ঝাঁকে পাখি, পোড়া মাটির কঙ্কর, আর চিবানো খড়ের মতো পড়ে থাকা এক বাহিনী। এ থেকেই প্রমাণ, কাবার প্রতিপালক তাঁর ঘর রক্ষা করেন।',
    },
    alt: [],
    refs: ['105:1', '105:3', '105:5'],
  },

  106: {
    meaning: { en: 'Quraysh', bn: 'কুরাইশ' },
    source: {
      en: 'From "For the accustomed security of the Quraysh" (106:1), the tribe named in the opening verse.',
      bn: 'প্রথম আয়াতে যে গোত্রের নাম এসেছে, সেখান থেকে: "কুরাইশের অভ্যস্ত নিরাপত্তার জন্য" (১০৬:১)।',
    },
    why: {
      en: 'This is one of the few surahs named after a people rather than a thing or an event, and the only one named after the Prophet\'s own tribe. The word occurs once, in the first verse. The surah is anchored to a specific commercial history: Quraysh\'s two caravan journeys, in winter to Yemen and in summer to Syria, made safe by their custodianship of the Kaaba, which fed and secured them. Many commentators read it as the direct continuation of Al-Fil — the House was protected so that this security could go on — and some early recitation joined the two.',
      bn: 'হাতে গোনা যে কয়েকটি সূরার নাম কোনো বস্তু বা ঘটনার নামে নয়, একটি জাতির নামে, এটি তার একটি। আর নবীর নিজের গোত্রের নামে এটিই একমাত্র সূরা। শব্দটি এসেছে একবারই, প্রথম আয়াতে। সূরাটি জড়িয়ে আছে একটি নির্দিষ্ট বাণিজ্যিক ইতিহাসের সঙ্গে: কুরাইশের দুটি কাফেলা-সফর, শীতে ইয়েমেনে আর গ্রীষ্মে সিরিয়ায়। কাবার তত্ত্বাবধায়ক হওয়ার কারণেই এই সফর নিরাপদ ছিল, আর এই দায়িত্বই তাদের খাবার ও নিরাপত্তা জোগাত। অনেক মুফাসসির একে আল-ফীলের সরাসরি ধারাবাহিকতা মনে করেন: ঘরটি রক্ষা করা হয়েছিল, যাতে এই নিরাপত্তা চলতে থাকে। প্রথম যুগে কেউ কেউ দুটি সূরা একসঙ্গে মিলিয়ে পড়তেন।',
    },
    signal: {
      en: 'Expect four verses turning a trading privilege into an obligation: since the two journeys are secured, worship the Lord of this House, the One who fed you against hunger and made you safe from fear.',
      bn: 'চারটি আয়াত, যা একটি বাণিজ্যিক সুবিধাকে দায়িত্বে পরিণত করে: দুই সফর যেহেতু নিরাপদ, তাই এই ঘরের প্রতিপালকের ইবাদত করো, যিনি ক্ষুধায় তোমাদের খাবার দিয়েছেন আর ভয় থেকে নিরাপদ রেখেছেন।',
    },
    alt: [
      { name: "Li-ilafi Quraysh", en: 'The surah cited by its full opening phrase, "For the accustoming of Quraysh", in some early lists.', bn: 'কিছু প্রাচীন তালিকায় সূরাটিকে তার পূর্ণ প্রথম বাক্যাংশ "লি-ঈলাফি কুরাইশ" দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['106:1', '106:2', '106:3'],
  },

  107: {
    meaning: { en: 'Small Kindnesses', bn: 'নিত্যপ্রয়োজনীয় সাহায্য' },
    source: {
      en: 'From the last verse, "and they withhold small assistance" (107:7).',
      bn: 'শেষ আয়াত থেকে—"আর তারা নিত্যপ্রয়োজনীয় সাহায্য বন্ধ করে রাখে" (১০৭:৭)।',
    },
    why: {
      en: 'Unusually, the naming word here is the surah\'s final word rather than its first. Ma\'un was explained by the early authorities in more than one way — the everyday items neighbours lend each other, a pot, a bucket, an axe; or the zakat due on wealth — and both readings are reported without either being settled. On any reading it is the smallest thing a person can refuse, and refusing it is the closing charge against the man who denies the recompense, repels the orphan, and prays without meaning it. The name catches exactly where the surah stings.',
      bn: 'নামের শব্দটি এখানে সূরার প্রথম নয়, শেষ শব্দ, যা সচরাচর দেখা যায় না। প্রথম যুগের ইমামরা "মাউন" শব্দের একাধিক ব্যাখ্যা দিয়েছেন। এক মতে, প্রতিবেশীরা একে অন্যকে যেসব নিত্যব্যবহার্য জিনিস ধার দেয়, যেমন হাঁড়ি, বালতি, কুড়াল। আরেক মতে, সম্পদের ফরজ যাকাত। দুটি মতই বর্ণিত, কোনোটিকে চূড়ান্ত করা হয়নি। যে অর্থেই ধরা হোক, মানুষ যা দিতে অস্বীকার করতে পারে, তার মধ্যে এটিই সবচেয়ে ছোট জিনিস। আর এটুকু না দেওয়াই সেই লোকের বিরুদ্ধে শেষ অভিযোগ, যে প্রতিদান দিবসকে অস্বীকার করে, এতিমকে ধাক্কা দিয়ে তাড়ায়, আর মন ছাড়া নামাজ পড়ে। সূরার আঘাত যেখানে সবচেয়ে তীক্ষ্ণ, নামটি ঠিক সেই জায়গাটাই ধরেছে।',
    },
    signal: {
      en: 'Expect seven verses tying creed to conduct: whoever denies the Judgement pushes the orphan away, does not urge feeding the poor, is heedless in prayer, shows off, and will not lend a neighbour a bucket.',
      bn: 'সাতটি আয়াত, যা আকীদাকে আচরণের সঙ্গে বেঁধে দেয়: যে প্রতিদান দিবসকে অস্বীকার করে, সে এতিমকে ধাক্কা দেয়, মিসকিনকে খাওয়াতে উৎসাহ দেয় না, নামাজে উদাসীন থাকে, লোক দেখিয়ে আমল করে, আর প্রতিবেশীকে একটা বালতি পর্যন্ত ধার দেয় না।',
    },
    alt: [
      { name: 'Ad-Din', en: 'From the opening verse, "the one who denies the recompense" — some early lists title the surah by that phrase.', bn: 'প্রথম আয়াতের "যে প্রতিদান অস্বীকার করে" কথাটি থেকে; কিছু প্রাচীন তালিকায় সূরাটির শিরোনাম এটিই।' },
      { name: "Ara'ayta", en: 'The surah cited by its opening word, "Have you seen…", as early usage often did.', bn: 'প্রথম যুগে প্রায়ই যেমন হতো, সূরাটিকে তার শুরুর শব্দ "আরাআইতা" (তুমি কি দেখেছ) দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['107:1', '107:7'],
  },

  108: {
    meaning: { en: 'Abundance', bn: 'প্রাচুর্য' },
    source: {
      en: 'From "Indeed We have given you al-Kawthar" (108:1).',
      bn: '"নিশ্চয়ই আমি আপনাকে কাওসার দান করেছি" (১০৮:১)—এই আয়াত থেকে।',
    },
    why: {
      en: 'Kawthar is an intensive form built from kathrah, abundance: literally, abundant good. Reports from the Prophet identify it as a river given to him in Paradise, and commentators also read it more broadly as the abundance of good he was granted, including his lineage, his followers and the Quran itself. The word occurs once, in the first verse, and it gives the shortest surah in the Quran its name. Its force is contrastive: it was revealed to a Prophet being mocked as abtar, cut off without descendants, and it answers that the one truly cut off is his mocker.',
      bn: 'কাওসার শব্দটি "কাসরাহ", অর্থাৎ প্রাচুর্য থেকে গঠিত আতিশয্যবাচক রূপ। আক্ষরিক অর্থ অফুরন্ত কল্যাণ। নবী থেকে বর্ণিত হাদিসে একে জান্নাতে তাঁকে দেওয়া একটি নহর বলা হয়েছে। মুফাসসিররা একে আরও ব্যাপক অর্থেও নিয়েছেন: তাঁকে দেওয়া সব কল্যাণের প্রাচুর্য, যার মধ্যে আছে তাঁর বংশধারা, তাঁর অনুসারীরা, এমনকি কুরআনও। শব্দটি এসেছে একবারই, প্রথম আয়াতে, আর সেটিই কুরআনের সবচেয়ে ছোট সূরার নাম হয়েছে। এর জোর বৈপরীত্যে। নবীকে তখন "আবতার", অর্থাৎ নির্বংশ বলে উপহাস করা হচ্ছিল। এই সূরা তারই জবাব: আসলে নির্বংশ সেই উপহাসকারী নিজেই।',
    },
    signal: {
      en: 'Expect three verses of reversal: a gift of abundance, a command to pray to your Lord and to sacrifice, and the closing verdict that the one who resented you is the one left without a legacy.',
      bn: 'তিন আয়াতে হিসাব উল্টে যায়। প্রাচুর্যের দান, প্রতিপালকের উদ্দেশে নামাজ ও কুরবানির হুকুম, আর শেষে এই রায়: তোমার প্রতি যে বিদ্বেষ রাখে, উত্তরাধিকারহীন সে-ই।',
    },
    alt: [],
    refs: ['108:1', '108:3'],
  },

  109: {
    meaning: { en: 'The Disbelievers', bn: 'অবিশ্বাসীরা' },
    source: {
      en: 'From the address that opens the surah, "Say: O disbelievers" (109:1).',
      bn: 'সূরার শুরুর সম্বোধন থেকে—"বলো, হে অবিশ্বাসীরা" (১০৯:১)।',
    },
    why: {
      en: 'The name is the vocative of the opening verse: the group being addressed, not the surah\'s theme. The word recurs nowhere else in these six verses, which work instead by strict parallel — I do not worship what you worship, nor do you worship what I worship, repeated with a shift of tense, and closing with "for you your religion and for me mine". The title is taken from the addressee, while the subject is the refusal of religious compromise; it is reported to have been revealed when Quraysh proposed that each side worship the other\'s god in alternate years.',
      bn: 'নামটি প্রথম আয়াতের সম্বোধন: যাদের উদ্দেশে কথা বলা হচ্ছে সেই দল, সূরার বিষয় নয়। ছয় আয়াতের আর কোথাও শব্দটি নেই। সূরাটি এগোয় নিখুঁত সমান্তরাল বাক্যে: তোমরা যার ইবাদত করো, আমি তার ইবাদত করি না; আমি যাঁর ইবাদত করি, তোমরাও তাঁর ইবাদত করো না। কাল বদলে কথাটি আবার বলা হয়, আর শেষ হয় "তোমাদের দ্বীন তোমাদের, আমার দ্বীন আমার" দিয়ে। শিরোনাম এসেছে যাদের সম্বোধন করা হচ্ছে তাদের থেকে, অথচ বিষয় হলো দ্বীনের ব্যাপারে আপস প্রত্যাখ্যান। বর্ণিত আছে, কুরাইশরা প্রস্তাব দিয়েছিল, এক বছর তারা নবীর উপাস্যের ইবাদত করবে, আরেক বছর নবী তাদের উপাস্যের। তখনই সূরাটি নাজিল হয়।',
    },
    signal: {
      en: 'Expect six verses drawing a line: no shared worship, no negotiated middle, and a final clause of separation that states two distinct paths rather than licensing indifference. Commonly recited paired with Al-Ikhlas.',
      bn: 'ছয়টি আয়াত, যা স্পষ্ট সীমারেখা টেনে দেয়: যৌথ ইবাদত নয়, দর-কষাকষির মাঝামাঝি পথও নয়। শেষ বাক্যটি দুটি আলাদা পথের ঘোষণা, উদাসীন থাকার অনুমতি নয়। সাধারণত আল-ইখলাসের সঙ্গে জোড়া করে পড়া হয়।',
    },
    alt: [
      { name: 'Al-Muqashqishah', en: 'A reported name meaning "the one that clears away", used of this surah and of Al-Ikhlas together, because reciting them clears a person of association with God.', bn: 'বর্ণিত একটি নাম, অর্থ "যা মুক্ত করে দেয়"। এই সূরা ও আল-ইখলাস দুটির বেলাতেই নামটি ব্যবহৃত হয়, কারণ এগুলো পড়লে মানুষ শিরক থেকে মুক্ত হয়।' },
      { name: "Qul ya ayyuha al-kafirun", en: 'The surah cited by its opening words, as hadith reports usually do.', bn: 'হাদীসে যেমন সচরাচর করা হয়, সূরাটিকে তার শুরুর কথা দিয়ে উল্লেখ করা হয়।' },
    ],
    refs: ['109:1', '109:6'],
  },

  110: {
    meaning: { en: 'The Divine Help', bn: 'আল্লাহর সাহায্য' },
    source: {
      en: 'From "When the help of God and the conquest come" (110:1).',
      bn: '"যখন আল্লাহর সাহায্য ও বিজয় আসবে" (১১০:১)—এই আয়াত থেকে।',
    },
    why: {
      en: 'Nasr here is God\'s help, paired in the same verse with al-fath, the opening or conquest, understood by the commentators as the conquest of Mecca. The surah takes its name from the first of those two words. It is also reported as at-Tawdi\', "the farewell", because Ibn Abbas and others read it as a signal that the mission was complete and the Prophet\'s death near; Umar is reported to have questioned him about exactly this. That second name comes from an interpretation attached to the surah rather than from any word in it, and is worth reporting as such.',
      bn: 'এখানে "নাসর" মানে আল্লাহর সাহায্য। একই আয়াতে এর জোড়া "আল-ফাতহ", অর্থাৎ খুলে যাওয়া বা বিজয়, যাকে মুফাসসিররা মক্কা বিজয় বলে বুঝেছেন। সূরার নাম নেওয়া হয়েছে এই দুই শব্দের প্রথমটি থেকে। সূরাটির আরেকটি বর্ণিত নাম "আত-তাওদী", অর্থাৎ "বিদায়"। কারণ ইবনে আব্বাস ও অন্যরা একে এই ইঙ্গিত হিসেবে বুঝেছেন যে নবীর দায়িত্ব পূর্ণ হয়েছে, তাঁর ইন্তেকাল কাছে। বর্ণিত আছে, উমর তাঁকে ঠিক এ বিষয়েই জিজ্ঞেস করেছিলেন। এই দ্বিতীয় নামটি সূরার কোনো শব্দ থেকে আসেনি, এসেছে সূরার একটি ব্যাখ্যা থেকে। তাই একে সেভাবেই উল্লেখ করা উচিত।',
    },
    signal: {
      en: 'Expect three verses standing at the end of the mission: victory arriving, people entering God\'s religion in crowds, and a command not to celebrate but to glorify, praise and seek forgiveness.',
      bn: 'নবীর দাওয়াতি জীবনের শেষ প্রান্তে দাঁড়িয়ে তিনটি আয়াত: বিজয় আসছে, মানুষ দলে দলে আল্লাহর দ্বীনে প্রবেশ করছে, আর হুকুম এসেছে উৎসব করার নয়, বরং তাসবীহ, প্রশংসা আর ইস্তিগফারের।',
    },
    alt: [
      { name: "At-Tawdi'", en: '"The farewell": a name recorded on the basis of the reading that the surah announced the nearness of the Prophet\'s death. It is an interpretive title, not a word taken from the text.', bn: '"বিদায়": এই নামটি বর্ণিত হয়েছে সেই ব্যাখ্যার ভিত্তিতে, যাতে বলা হয় সূরাটি নবীর ইন্তেকাল কাছে আসার খবর দিয়েছিল। এটি ব্যাখ্যা থেকে আসা নাম, সূরার কোনো শব্দ নয়।' },
      { name: "Idha ja'a nasrullah", en: 'The surah cited by its opening words, a common way of referring to the short surahs.', bn: 'সূরাটিকে তার শুরুর কথা দিয়ে উল্লেখ করা হয়—ছোট সূরাগুলোকে চেনানোর একটি প্রচলিত রীতি।' },
    ],
    refs: ['110:1', '110:3'],
  },

  111: {
    meaning: { en: 'The Palm Fibre', bn: 'খেজুরের আঁশ' },
    source: {
      en: 'From "around her neck a rope of twisted palm fibre" (111:5), the surah\'s closing image.',
      bn: '"তার গলায় পাকানো খেজুর-আঁশের রশি" (১১১:৫)—সূরার শেষ চিত্র থেকে।',
    },
    why: {
      en: 'Three names circulate for these five verses, each lifted from a different word inside them: al-Masad from the fibre rope of the last verse, al-Lahab from Abu Lahab and the flame named in the first and third, and Tabbat from the opening verb, "perished". The variation is entirely ordinary — the earliest Muslims cited a surah by whichever of its words came to mind, and no single title was fixed everywhere. This app follows the Uthmani mushaf convention and displays al-Masad; Indonesian printings use al-Lahab and Turkish ones Tebbet, for the same surah.',
      bn: 'এই পাঁচ আয়াতের তিনটি নাম প্রচলিত, আর প্রতিটি এসেছে ভেতরের আলাদা আলাদা শব্দ থেকে। শেষ আয়াতের আঁশের রশি থেকে আল-মাসাদ; প্রথম ও তৃতীয় আয়াতে আসা আবু লাহাব ও আগুনের শিখা থেকে আল-লাহাব; আর শুরুর ক্রিয়া "ধ্বংস হয়েছে" থেকে তাব্বাত। এমন ভিন্নতা খুবই স্বাভাবিক। প্রথম যুগের মুসলমানরা সূরার যে শব্দটি মনে পড়ত, সেটি দিয়েই সূরাকে উল্লেখ করতেন; সব জায়গায় একটিমাত্র নাম ঠিক করা ছিল না। এই অ্যাপ উসমানি মুসহাফের রীতি মেনে আল-মাসাদ দেখায়। একই সূরাকে ইন্দোনেশীয় ছাপায় বলা হয় আল-লাহাব, আর তুর্কি ছাপায় তেব্বেত।',
    },
    signal: {
      en: 'Expect the Quran\'s only surah aimed at a named living opponent: the Prophet\'s uncle Abu Lahab and his wife, his wealth and earnings availing him nothing, and a flaming fire waiting for them, with a fibre rope around her neck.',
      bn: 'কুরআনের একমাত্র সূরা, যা নাম ধরে জীবিত এক বিরোধীকে লক্ষ্য করে: নবীর চাচা আবু লাহাব ও তার স্ত্রী। তার সম্পদ আর উপার্জন তার কোনো কাজে আসেনি, তাদের জন্য অপেক্ষা করছে লেলিহান আগুন, আর স্ত্রীর গলায় আঁশের রশি।',
    },
    alt: [
      { name: 'Al-Lahab', en: 'From the flame and from Abu Lahab himself, named in the first and third verses; this is the title printed in the Indonesian tradition.', bn: 'অগ্নিশিখা ও স্বয়ং আবু লাহাবের নাম থেকে, যা প্রথম ও তৃতীয় আয়াতে এসেছে; ইন্দোনেশীয় ধারায় এই নামেই ছাপা হয়।' },
      { name: 'Tabbat', en: 'From the opening verb, "perished"; the Turkish tradition prints the surah as Tebbet.', bn: 'শুরুর ক্রিয়া "ধ্বংস হয়েছে" থেকে; তুর্কি ধারায় সূরাটি তেব্বেত নামে ছাপা হয়।' },
    ],
    refs: ['111:1', '111:3', '111:5'],
  },

  112: {
    meaning: { en: 'Purity of Faith', bn: 'একনিষ্ঠতা' },
    source: {
      en: 'No verse contains the word: the name describes the surah\'s subject, the undivided oneness of God (112:1-4).',
      bn: 'কোনো আয়াতেই শব্দটি নেই। নামটি সূরার বিষয়কে বর্ণনা করে: আল্লাহর অবিভাজ্য একত্ব (১১২:১-৪)।',
    },
    why: {
      en: 'This is the clearest case in the Quran of a thematic name. Ikhlas means making a thing pure and unmixed, and in religious usage the sincerity that gives worship to God alone. The word appears nowhere in the four verses. The name was given for what the surah does: it strips the idea of God of partner, parent, offspring and equal, so that what remains is unmixed. Set beside surahs named from a passing word, like Al-Baqarah or Al-Fil, it shows that Quranic titles are not all one kind of thing. Most label; this one describes.',
      bn: 'কুরআনে বিষয় দেখে নাম রাখার সবচেয়ে স্পষ্ট উদাহরণ এটি। ইখলাস মানে কোনো কিছুকে খাঁটি, ভেজালমুক্ত করা; আর দ্বীনের পরিভাষায় সেই নিষ্ঠা, যা ইবাদতকে শুধু আল্লাহর জন্য খাঁটি করে। চার আয়াতের কোথাও শব্দটি নেই। নামটি দেওয়া হয়েছে সূরার কাজ দেখে: সূরাটি আল্লাহ সম্পর্কে ধারণা থেকে শরিক, জন্মদাতা, সন্তান আর সমকক্ষ, সব ছেঁটে ফেলে, যাতে যা বাকি থাকে তা একেবারে খাঁটি। আল-বাকারা বা আল-ফীলের মতো প্রসঙ্গক্রমে আসা একটি শব্দ থেকে নেওয়া নামের পাশে রাখলে বোঝা যায়, কুরআনের সব শিরোনাম এক রকম নয়। অধিকাংশ নাম শুধু চিহ্ন, আর এই নামটি বর্ণনা।',
    },
    signal: {
      en: 'Expect four verses answering the question "what is your Lord?" — One, eternally self-sufficient, neither begetting nor begotten, with no equal — which the Prophet said weighs as a third of the Quran.',
      bn: '"তোমার প্রতিপালক কেমন?" প্রশ্নের জবাবে চারটি আয়াত: তিনি এক, চির-অমুখাপেক্ষী, তিনি কাউকে জন্ম দেননি, কেউ তাঁকে জন্ম দেয়নি, আর তাঁর সমকক্ষ কেউ নেই। নবী বলেছেন, এই সূরা কুরআনের এক-তৃতীয়াংশের সমান।',
    },
    alt: [
      { name: 'At-Tawhid', en: 'The surah of oneness, named from its content in the same thematic way as al-Ikhlas.', bn: 'একত্বের সূরা—আল-ইখলাসের মতোই এর বিষয়বস্তু থেকে নেওয়া নাম।' },
      { name: 'Al-Asas', en: '"The foundation": a recorded name given because the doctrine these four verses state underlies everything else in the religion.', bn: '"ভিত্তি"—বর্ণিত একটি নাম, কারণ এই চার আয়াতে বলা আকীদাই দ্বীনের বাকি সবকিছুর ভিত্তি।' },
      { name: "Qul huwa Allahu ahad", en: 'The surah cited by its opening words, the way hadith reports usually refer to it.', bn: 'সূরাটিকে তার শুরুর কথা দিয়ে উল্লেখ করা হয়, হাদীসে সাধারণত এভাবেই বলা হয়।' },
    ],
    refs: ['112:1', '112:4'],
  },

  113: {
    meaning: { en: 'The Daybreak', bn: 'প্রভাত' },
    source: {
      en: 'From "Say: I seek refuge in the Lord of the daybreak" (113:1).',
      bn: '"বলো, আমি আশ্রয় চাই প্রভাতের প্রতিপালকের কাছে" (১১৩:১)—এই আয়াত থেকে।',
    },
    why: {
      en: 'Falaq comes from a root meaning to split. It is the daybreak that splits the darkness, and some commentators widen it to everything God splits open — the seed, the cloud, the womb. The name is the second noun of the first verse, since the One whose refuge is sought is the Lord of it. Choosing the word for splitting light to head a surah about hidden evils — the dark when it settles, those who blow on knots, the envier — is a deliberate contrast rather than an accident of position. With An-Nas it forms a recognised pair.',
      bn: 'ফালাক শব্দের মূল অর্থ চিরে ফেলা। এটি সেই প্রভাত, যা অন্ধকার চিরে বেরিয়ে আসে। কোনো কোনো মুফাসসির অর্থটি আরও বিস্তৃত করেছেন: আল্লাহ যা কিছু চিরে খুলে দেন, যেমন বীজ, মেঘ, মায়ের গর্ভ। নামটি প্রথম আয়াতের দ্বিতীয় বিশেষ্য, কারণ যাঁর কাছে আশ্রয় চাওয়া হচ্ছে, তিনি এই প্রভাতের প্রতিপালক। গোপন অনিষ্টের কথা যে সূরায়, যেমন গাঢ় হয়ে আসা রাত, গিরায় ফুঁ দেয় যারা, আর হিংসুক, তার শুরুতেই বসানো হয়েছে অন্ধকার-চেরা আলোর শব্দ। এটা অবস্থানের কাকতাল নয়, ইচ্ছাকৃত বৈপরীত্য। আন-নাসের সঙ্গে মিলে এটি একটি স্বীকৃত জোড়া।',
    },
    signal: {
      en: 'Expect five verses of protection: refuge sought with the Lord of daybreak from the evil of what He created, from the night as it darkens, from those who blow on knots, and from an envier when he envies.',
      bn: 'আশ্রয় চাওয়ার পাঁচটি আয়াত: প্রভাতের প্রতিপালকের কাছে আশ্রয় চাওয়া হয় তাঁর সৃষ্টির অনিষ্ট থেকে, অন্ধকার ঘনিয়ে আসা রাতের অনিষ্ট থেকে, গিরায় ফুঁ দেয় যারা তাদের অনিষ্ট থেকে, আর হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে।',
    },
    alt: [
      { name: "Al-Mu'awwidhatan", en: 'A name for this surah and An-Nas taken together — "the two that seek refuge" — because both open with the same command to seek refuge and were recited as a pair; the Prophet used them nightly. Singly, this surah is also called al-Mu\'awwidhah.', bn: 'এই সূরা আর আন-নাস, দুটিকে একসঙ্গে বোঝানোর নাম; অর্থ "আশ্রয়প্রার্থনাকারী দুটি"। কারণ দুটিই আশ্রয় চাওয়ার একই হুকুম দিয়ে শুরু হয়, আর জোড়া করেই পড়া হতো। নবী প্রতি রাতে এ দুটি পড়তেন। আলাদাভাবে এই সূরাকে আল-মুআউয়িযাহও বলা হয়।' },
    ],
    refs: ['113:1', '113:5'],
  },

  114: {
    meaning: { en: 'Mankind', bn: 'মানুষ' },
    source: {
      en: 'From an-nas, "mankind", which begins the surah in "the Lord of mankind" (114:1) and recurs through it.',
      bn: '"আন-নাস" অর্থাৎ মানুষ শব্দ থেকে। "মানুষের প্রতিপালক" (১১৪:১) কথায় এই শব্দ দিয়েই সূরা শুরু, আর গোটা সূরায় শব্দটি বারবার ফিরে আসে।',
    },
    why: {
      en: 'Unusually, the naming word is not distinctive at all — nas, people, is among the commonest words in the Quran. What makes it the title here is repetition and position: God is named as Lord, King and God of mankind, the whisperer\'s target is the breasts of mankind, and the whisperer himself may be from jinn or from mankind. The word binds the six verses together and is impossible to miss. With Al-Falaq it forms al-Mu\'awwidhatan, the two refuge-seeking surahs the Prophet recited nightly and used in place of other supplications.',
      bn: 'এখানে নামের শব্দটি মোটেও আলাদা করে চোখে পড়ার মতো নয়, যা অস্বাভাবিক। "নাস" বা মানুষ কুরআনের সবচেয়ে বেশি ব্যবহৃত শব্দগুলোর একটি। এখানে শব্দটিকে নাম বানিয়েছে তার পুনরাবৃত্তি ও অবস্থান। আল্লাহকে বলা হয়েছে মানুষের প্রতিপালক, মানুষের অধিপতি, মানুষের ইলাহ; কুমন্ত্রণাদাতার নিশানা মানুষের অন্তর; আর সেই কুমন্ত্রণাদাতা জিনদের মধ্য থেকেও হতে পারে, মানুষের মধ্য থেকেও। শব্দটি ছয় আয়াতকে এক সুতোয় বেঁধে রাখে, চোখ এড়ানোর উপায় নেই। আল-ফালাকের সঙ্গে মিলে এটি আল-মুআউয়িযাতাইন, অর্থাৎ আশ্রয় চাওয়ার দুই সূরা। নবী প্রতি রাতে এ দুটি পড়তেন, আর অন্য দোয়ার বদলেও এগুলোই পড়তেন।',
    },
    signal: {
      en: 'Expect six verses that name God by three titles before naming the danger: the retreating whisperer who whispers into human hearts, whether he comes from among the jinn or from people themselves.',
      bn: 'ছয়টি আয়াত, যা বিপদের নাম নেওয়ার আগে আল্লাহকে তিনটি পরিচয়ে ডাকে। তারপর আসে সেই বিপদ: আড়ালে সরে যাওয়া কুমন্ত্রণাদাতা, যে মানুষের অন্তরে কুমন্ত্রণা দেয়, সে জিনদের মধ্য থেকে হোক বা মানুষের মধ্য থেকে।',
    },
    alt: [
      { name: "Al-Mu'awwidhatan", en: 'The pair name for An-Nas and Al-Falaq together, "the two that seek refuge", used because they were revealed and recited as a pair; each also carries the singular al-Mu\'awwidhah.', bn: 'আন-নাস ও আল-ফালাক—দুটিকে একসঙ্গে বোঝানোর নাম, অর্থ "আশ্রয়প্রার্থনাকারী দুটি"; কারণ দুটি একসঙ্গেই নাজিল হয়েছে ও জোড়া করে পড়া হতো। এককভাবে প্রতিটিকে আল-মুআউয়িযাহও বলা হয়।' },
    ],
    refs: ['114:1', '114:5', '114:6'],
  },
  30: {
    meaning: { en: 'The Romans', bn: 'রোমানরা' },
    source: {
      en: 'From the announcement that the Romans had been defeated and would themselves prevail within a few years, in 30:2-4.',
      bn: '৩০:২-৪ আয়াত থেকে, যেখানে ঘোষণা করা হয়েছে, রোমানরা পরাজিত হয়েছে, তবে কয়েক বছরের মধ্যেই তারা নিজেরাই বিজয়ী হবে।',
    },
    why: {
      en: 'The surah is named after a foreign empire that appears in three verses at the very start and is never mentioned again. That is the usual pattern: a surah title works as a marker, a memorable hook for reciting and referring, rather than as a summary of contents. Here the hook is unusually bold, because it is a dated public prediction made in Mecca that the beaten Byzantines would win within a few years. The body of the surah is about the signs of Allah in creation and the certainty of resurrection, so the name points at the opening, not the theme.',
      bn: 'সূরাটির নাম এক বিদেশি সাম্রাজ্যের নামে, যার উল্লেখ শুধু একেবারে শুরুর তিন আয়াতে, এরপর আর কোথাও নেই। এটাই সাধারণ ধারা: সূরার নাম একটি চিহ্ন, তিলাওয়াত ও উল্লেখের সময় মনে রাখার একটা খুঁটি; বিষয়বস্তুর সারসংক্ষেপ নয়। তবে এখানে চিহ্নটি অসাধারণ রকম সাহসী। এটি মক্কায় প্রকাশ্যে করা এক ভবিষ্যদ্বাণী, যার সময়সীমাও বাঁধা: পরাজিত রোমানরা কয়েক বছরের মধ্যেই জিতবে। সূরার মূল আলোচনা সৃষ্টিজগতে আল্লাহর নিদর্শন আর পুনরুত্থানের নিশ্চয়তা। তাই নামটি সূরার শুরুর দিকে ইশারা করে, বিষয়ের দিকে নয়।',
    },
    signal: {
      en: 'Expect a surah that opens on a real news event and then turns it into evidence: signs in the heavens, in rain, in sleep, in the affection between spouses, all pointing to the One who can raise the dead.',
      bn: 'সূরাটি শুরু হয় বাস্তব এক খবর দিয়ে, তারপর সেটিকেই প্রমাণ বানিয়ে নেয়: আকাশে, বৃষ্টিতে, ঘুমে, স্বামী-স্ত্রীর ভালোবাসায় নিদর্শন। সবই ইশারা করে সেই সত্তার দিকে, যিনি মৃতকে জীবিত করতে পারেন।',
    },
    alt: [],
    refs: ['30:2-4'],
  },
  31: {
    meaning: { en: 'Luqman (a sage)', bn: 'লুকমান (এক প্রজ্ঞাবান)' },
    source: {
      en: 'From Luqman, the wise man whose counsel to his son is recorded in 31:12-19.',
      bn: 'লুকমান থেকে, সেই জ্ঞানী মানুষ, ছেলেকে দেওয়া যাঁর উপদেশ ৩১:১২-১৯ আয়াতে আছে।',
    },
    why: {
      en: 'Almost every surah named after a person is named after a prophet. This one is not: Luqman is described as a man given wisdom, and the majority of scholars treat him as a wise servant rather than a prophet, though a minority disagreed. The naming word occupies only eight verses of thirty-four, so again the title is a marker rather than a summary. Ibn Ashur notes plainly that no second name for this surah is recorded; it has always been known simply as Luqman among reciters and commentators.',
      bn: 'ব্যক্তির নামে রাখা প্রায় সব সূরাই কোনো নবীর নামে। এটি তা নয়। লুকমানকে বলা হয়েছে হিকমত পাওয়া একজন মানুষ। অধিকাংশ আলেম তাঁকে নবী নয়, বরং জ্ঞানী এক বান্দা মনে করেন, যদিও অল্প কয়েকজন ভিন্নমত পোষণ করেছেন। চৌত্রিশ আয়াতের মধ্যে তাঁর প্রসঙ্গ মাত্র আট আয়াতে, তাই এখানেও নামটি সারসংক্ষেপ নয়, চিহ্ন। ইবনে আশূর স্পষ্ট লিখেছেন, এই সূরার দ্বিতীয় কোনো নাম বর্ণিত নেই; ক্বারী ও মুফাসসিরদের কাছে এটি বরাবর শুধু লুকমান নামেই পরিচিত।',
    },
    signal: {
      en: 'A short Meccan surah built around advice from a father to his son: do not associate partners with Allah, be good to parents, pray, be patient, and do not walk the earth in arrogance.',
      bn: 'ছোট একটি মক্কী সূরা, যার কেন্দ্রে ছেলের প্রতি বাবার উপদেশ: আল্লাহর সঙ্গে কাউকে শরিক কোরো না, বাবা-মায়ের সঙ্গে সদাচরণ করো, নামাজ কায়েম করো, সবর করো, আর দুনিয়ায় অহংকার করে চলো না।',
    },
    alt: [],
    refs: ['31:12-19'],
  },
  32: {
    meaning: { en: 'The Prostration', bn: 'সিজদা' },
    source: {
      en: 'From the prostration verse at 32:15, where those who truly believe fall down prostrate when the signs are recited to them.',
      bn: '৩২:১৫-এর সিজদার আয়াত থেকে, যেখানে সত্যিকারের ঈমানদাররা আয়াত শুনে সিজদায় লুটিয়ে পড়ে।',
    },
    why: {
      en: 'The name marks a single recitation prostration in a surah of thirty verses. Because several surahs contain such a verse, the tradition added qualifiers to keep them apart: this one is called Alif Lam Mim as-Sajdah after its opening letters, and Sajdat Luqman after the surah that precedes it. That matters here, since surah 41 is also called Ha Mim as-Sajdah for the same reason. So two different surahs carry the word Sajdah, and the letters attached to each are what separate them. The name is a filing label, not a statement of subject.',
      bn: 'ত্রিশ আয়াতের এই সূরায় তিলাওয়াতের সিজদা একটিই, নামটি তারই চিহ্ন। একাধিক সূরায় সিজদার আয়াত থাকায় সেগুলো আলাদা করতে আলেমরা নামের সঙ্গে কিছু যোগ করেছেন। এটিকে শুরুর হরফ ধরে বলা হয় আলিফ-লাম-মীম আস-সাজদা, আর আগের সূরার সূত্রে সাজদাতু লুকমান। এখানে এই পার্থক্য জরুরি, কারণ একই কারণে ৪১ নম্বর সূরাকেও বলা হয় হা-মীম আস-সাজদা। অর্থাৎ দুটি আলাদা সূরার নামে সাজদা শব্দটি আছে, আর সঙ্গে জোড়া হরফগুলোই তাদের আলাদা করে। নামটি চেনার জন্য একটা লেবেল, বিষয়ের বর্ণনা নয়।',
    },
    signal: {
      en: 'A compact Meccan surah on revelation, creation in stages, and the contrast between those who fall prostrate at night and those who turn away from every reminder.',
      bn: 'ছোট একটি মক্কী সূরা, যার বিষয় ওহি, ধাপে ধাপে সৃষ্টি, আর দুই দল মানুষের তফাত: যারা রাতে সিজদায় লুটিয়ে পড়ে, আর যারা প্রতিটি উপদেশ থেকে মুখ ফিরিয়ে নেয়।',
    },
    alt: [
      { name: 'Alif Lam Mim as-Sajdah', en: 'The opening letters added to the name to distinguish it from the other surah known by a prostration, Ha Mim as-Sajdah.', bn: 'হা মীম আস-সাজদা নামে সিজদার সূত্রে পরিচিত আরেকটি সূরা আছে; তা থেকে আলাদা করতে নামের সঙ্গে শুরুর হরফগুলো জুড়ে দেওয়া হয়েছে।' },
      { name: 'Sajdat Luqman', en: 'Identified by the surah that precedes it, again to keep the prostration surahs apart.', bn: 'আগের সূরার নামে চিহ্নিত — এখানেও উদ্দেশ্য সিজদাযুক্ত সূরাগুলোকে আলাদা রাখা।' },
      { name: "Al-Mada'ji", en: 'Reported from the phrase about believers whose sides forsake their beds at night, in 32:16.', bn: '৩২:১৬ আয়াতে সেই মুমিনদের কথা আছে, রাতে যাদের পার্শ্ব শয্যা থেকে আলাদা থাকে; সেই বাক্য থেকে এই নাম বর্ণিত।' },
    ],
    refs: ['32:15', '32:16'],
  },
  33: {
    meaning: { en: 'The Confederates', bn: 'সম্মিলিত বাহিনী' },
    source: {
      en: 'From the allied tribes who besieged Medina at the Battle of the Trench, called al-ahzab in 33:20 and 33:22.',
      bn: 'খন্দকের যুদ্ধে মদীনা অবরোধকারী মিত্র গোত্রগুলো থেকে, ৩৩:২০ ও ৩৩:২২ আয়াতে যাদের আল-আহযাব বলা হয়েছে।',
    },
    why: {
      en: 'Ahzab means parties or factions banded together, and it names the coalition of Quraysh and their allies who marched on Medina and were turned back without a pitched battle. The word occurs in only a few verses, yet the siege it names is the pivot of the surah, which uses that moment of fear to examine who stood firm and who wavered. So this is a middle case: the title is still lifted from a distinctive word, but the episode behind it really is central. Ibn Ashur records no other name for the surah.',
      bn: 'আহযাব মানে একজোট হওয়া দল বা গোষ্ঠী। এখানে এটি বোঝায় কুরাইশ ও তাদের মিত্রদের সেই জোটকে, যারা মদীনার দিকে এগিয়ে এসেছিল, অথচ সামনাসামনি যুদ্ধ ছাড়াই ফিরে যেতে বাধ্য হয়েছিল। শব্দটি মাত্র কয়েকটি আয়াতে এসেছে, কিন্তু এই অবরোধই সূরার কেন্দ্র। সেই ভয়ের মুহূর্তকে সামনে রেখে সূরাটি দেখায়, কারা অবিচল ছিল আর কারা টলে গিয়েছিল। তাই এটি মাঝামাঝি ধরনের: নাম এখানেও একটি স্বতন্ত্র শব্দ থেকে নেওয়া, তবে এর পেছনের ঘটনাটি সত্যিই মূল বিষয়। ইবনে আশূর এই সূরার আর কোনো নাম উল্লেখ করেননি।',
    },
    signal: {
      en: 'A Medinan surah of testing and social reform: the siege and its aftermath, the households of the Prophet, adoption, hijab, and the manners owed to him.',
      bn: 'পরীক্ষা ও সমাজ সংস্কারের একটি মাদানী সূরা: অবরোধ ও তার পরবর্তী ঘটনা, নবীজির পরিবার, দত্তক গ্রহণ, হিজাব এবং তাঁর প্রতি প্রাপ্য আদব।',
    },
    alt: [],
    refs: ['33:20', '33:22'],
  },
  34: {
    meaning: { en: 'Sheba', bn: 'সাবা (শিবা)' },
    source: {
      en: 'From the people of Sheba, whose gardens and burst dam are described in 34:15-17.',
      bn: 'সাবার অধিবাসীদের নামে, যাদের বাগান ও ভেঙে পড়া বাঁধের বর্ণনা রয়েছে ৩৪:১৫-১৭-এ।',
    },
    why: {
      en: 'Saba is the name of a South Arabian kingdom, and the surah takes its title from a passage of a few verses that describes their fertile valley, their ingratitude, and the flood that scattered them. The rest of the surah is about Dawud and Sulayman, the arguments of the deniers, and the reckoning. So the naming word is again a distinctive marker: a place-name familiar to the first audience, useful precisely because it appears nowhere else nearby. Ibn Ashur notes only this name for the surah, and no record of it from the Prophetic era itself.',
      bn: 'সাবা ছিল দক্ষিণ আরবের একটি রাজ্য। সূরার নাম এসেছে কয়েকটি আয়াতের এক অংশ থেকে, যেখানে আছে তাদের উর্বর উপত্যকা, তাদের অকৃতজ্ঞতা, আর সেই বন্যার কথা, যা তাদের ছত্রভঙ্গ করে দিয়েছিল। সূরার বাকি অংশে আছে দাউদ ও সুলাইমান, অস্বীকারকারীদের যুক্তি, আর হিসাব-নিকাশ। অর্থাৎ নামের শব্দটি এখানেও একটি স্বতন্ত্র চিহ্ন: প্রথম শ্রোতাদের চেনা একটি জায়গার নাম, আর আশপাশে আর কোথাও না থাকায় চেনার কাজে খুব সুবিধার। ইবনে আশূর এই সূরার কেবল এই নামটিই উল্লেখ করেছেন; নবীর যুগেই এ নাম প্রচলিত ছিল, এমন কোনো বর্ণনাও তিনি পাননি।',
    },
    signal: {
      en: 'A Meccan surah that argues from history and from favour withdrawn: kingdoms that were given much, grew ungrateful, and became a tale told to later generations.',
      bn: 'মক্কী সূরা, যা যুক্তি সাজায় ইতিহাস আর কেড়ে নেওয়া নিয়ামত দিয়ে: যেসব রাজ্যকে অনেক কিছু দেওয়া হয়েছিল, তারা অকৃতজ্ঞ হলো, আর শেষে পরের প্রজন্মের কাছে শুধু গল্প হয়ে রইল।',
    },
    alt: [],
    refs: ['34:15-17'],
  },
  35: {
    meaning: { en: 'Originator', bn: 'সৃষ্টির সূচনাকারী' },
    source: {
      en: 'From the opening words, which praise Allah as Fatir, the Originator of the heavens and the earth, in 35:1.',
      bn: '৩৫:১ আয়াতের শুরুর শব্দগুলো থেকে, যেখানে আল্লাহর প্রশংসা করা হয়েছে ফাতির বলে, অর্থাৎ আসমান ও জমিনের সূচনাকারী।',
    },
    why: {
      en: 'Fatir is a rare and vivid word: it carries the sense of splitting something open to bring it into being, not merely making it. The surah is named from the first line, which is the commonest naming method of all, since an opening word is what a reciter reaches first and remembers best. The very same verse also mentions the angels sent as messengers, which is why the surah is equally known as Al-Malaikah. Two names, one verse, two different words picked out of it.',
      bn: 'ফাতির বিরল ও জীবন্ত একটি শব্দ। এর মানে শুধু বানানো নয়, কোনো কিছু চিরে ফাটিয়ে অস্তিত্বে নিয়ে আসা। সূরার নাম নেওয়া হয়েছে প্রথম বাক্য থেকে, আর নামকরণের এটিই সবচেয়ে প্রচলিত পদ্ধতি, কারণ তিলাওয়াতকারী শুরুর শব্দেই আগে পৌঁছান, আর সেটিই সবচেয়ে ভালো মনে রাখেন। ওই একই আয়াতে ফেরেশতাদের কথাও আছে, যাঁদের বার্তাবাহক বানানো হয়েছে; তাই সূরাটি আল-মালাইকা নামেও সমান পরিচিত। একটি আয়াত, দুটি নাম, সেখান থেকে বেছে নেওয়া দুটি আলাদা শব্দ।',
    },
    signal: {
      en: 'Expect sustained attention to Allah alone as creator and sustainer: wind, rain, dead earth revived, two seas that are not alike, and the warning that no soul carries another burden.',
      bn: 'স্রষ্টা ও রিজিকদাতা হিসেবে একমাত্র আল্লাহর দিকে টানা মনোযোগ: বাতাস, বৃষ্টি, মরা জমিনে আবার প্রাণ ফেরা, এক রকম নয় এমন দুই সাগর, আর এই সতর্কবাণী: কেউ অন্যের বোঝা বইবে না।',
    },
    alt: [
      { name: "Al-Mala'ikah", en: 'Taken from the same opening verse, which describes the angels made messengers with wings.', bn: 'একই সূচনা আয়াত থেকে নেওয়া, যেখানে ডানাবিশিষ্ট ফেরেশতাদের বার্তাবাহক করার কথা বলা হয়েছে।' },
    ],
    refs: ['35:1'],
  },
  36: {
    meaning: { en: 'Ya Sin (two letters)', bn: 'ইয়া সীন (দুটি হরফ)' },
    source: {
      en: 'From the two disjointed letters that open the surah at 36:1, written in the mushaf as letters, not as a word.',
      bn: '৩৬:১-এ সূরার শুরুতে থাকা দুটি বিচ্ছিন্ন হরফ থেকে, যা মুসহাফে শব্দ হিসেবে নয়, হরফ হিসেবেই লেখা হয়েছে।',
    },
    why: {
      en: 'Ya Sin belongs to the disjointed letters, and their meaning is not established. The majority position is to affirm them as revelation and leave their interpretation to Allah rather than claim knowledge of them. The familiar claim that Ya Sin means "O human" in some dialect is a reported view, not a settled fact, and Ibn Ashur rejected it on the ground that the mushaf writes the name as two separate letters. So the surah is named by its opening marker, which identifies it perfectly while telling a reader nothing at all about its contents.',
      bn: 'ইয়া সীন হুরুফুল মুকাত্তাআতের অন্তর্ভুক্ত, আর এদের অর্থ নিশ্চিতভাবে জানা নেই। অধিকাংশ আলেমের অবস্থান হলো, এগুলোকে ওহি হিসেবে মেনে নেওয়া, আর অর্থ জানার দাবি না করে ব্যাখ্যার ভার আল্লাহর উপর ছেড়ে দেওয়া। অনেকে বলেন, কোনো এক আঞ্চলিক ভাষায় ইয়া সীন মানে "হে মানুষ"। এটি একটি বর্ণিত মত মাত্র, প্রতিষ্ঠিত সত্য নয়। ইবনে আশূর মতটি প্রত্যাখ্যান করেছেন এই যুক্তিতে যে মুসহাফে নামটি দুটি আলাদা হরফ হিসেবেই লেখা হয়। তাই সূরার নাম তার শুরুর চিহ্নটিই। এটি সূরাকে নিখুঁতভাবে চেনায়, অথচ ভেতরে কী আছে, সে বিষয়ে পাঠককে কিছুই বলে না।',
    },
    signal: {
      en: 'A Meccan surah of warning and vivid imagery: messengers rejected by a town, a believer who ran to defend them, signs in the dead earth and the night, and the resurrection.',
      bn: 'সতর্কবাণী আর জীবন্ত ছবিতে ভরা একটি মক্কী সূরা: এক জনপদ, যারা রাসূলদের প্রত্যাখ্যান করল; তাঁদের পক্ষ নিতে ছুটে আসা এক মুমিন; মরা জমিন আর রাতের নিদর্শন; আর পুনরুত্থান।',
    },
    alt: [
      { name: 'Qalb al-Quran', en: 'Reported as "the heart of the Quran" in a hadith which at-Tirmidhi himself called strange and whose chain contains an unknown narrator; scholars generally grade it weak, so it is quoted here as a report, not as an established virtue.', bn: '"কুরআনের হৃদয়" — এই নাম এসেছে এমন এক হাদীসে, যাকে তিরমিযী নিজেই গরীব বলেছেন, আর যার সনদে একজন অজ্ঞাত বর্ণনাকারী আছেন। আলেমরা সাধারণত একে দুর্বল বলেন, তাই এখানে এটি প্রমাণিত ফজিলত হিসেবে নয়, শুধু একটি বর্ণনা হিসেবে উল্লেখ করা হলো।' },
      { name: 'Surat Habib an-Najjar', en: 'A rare title found in a late manuscript, naming the surah after the believer of the town; Ibn Ashur called it strange and knew no basis for it.', bn: 'পরবর্তী যুগের এক পাণ্ডুলিপিতে পাওয়া বিরল একটি নাম, যেখানে জনপদের সেই মুমিনের নামে সূরার নাম দেওয়া হয়েছে। ইবনে আশূর একে অদ্ভুত বলেছেন; এর কোনো ভিত্তি তাঁর জানা ছিল না।' },
    ],
    refs: ['36:1'],
  },
  37: {
    meaning: { en: 'Those Ranged in Rows', bn: 'সারিবদ্ধ যারা' },
    source: {
      en: 'From the opening oath by those drawn up in ranks, in 37:1.',
      bn: '৩৭:১ আয়াতের শুরুর শপথ থেকে, যা করা হয়েছে সারিবদ্ধভাবে দাঁড়ানোদের নামে।',
    },
    why: {
      en: 'The surah opens with an oath by as-saffat, those ranged in rows, understood by most commentators as the angels standing in ranks. The word is taken straight from the first line, which is how a great many surahs are named, and it is chosen because it is striking and unrepeated rather than because it summarises anything. The surah that follows is a long sequence of prophets and their deliverance. So the title fixes the surah in memory by its opening sound, and the reader learns the subject only by reading on.',
      bn: 'সূরা শুরু হয়েছে আস-সাফফাত, অর্থাৎ সারি বেঁধে দাঁড়ানোদের শপথ দিয়ে; অধিকাংশ মুফাসসিরের মতে এরা সারিবদ্ধ ফেরেশতা। শব্দটি সরাসরি প্রথম বাক্য থেকে নেওয়া, যেভাবে বহু সূরার নাম রাখা হয়েছে। এটি বেছে নেওয়ার কারণ, শব্দটি চোখে পড়ার মতো আর এর পুনরাবৃত্তি নেই; কোনো কিছুর সারসংক্ষেপ বলে নয়। এরপর সূরায় আসে নবীদের দীর্ঘ ধারাবাহিক বর্ণনা আর তাঁদের মুক্তি পাওয়ার কাহিনী। তাই নামটি শুরুর ধ্বনি দিয়ে সূরাটিকে মনে গেঁথে দেয়, আর বিষয় কী, তা পাঠক জানতে পারেন পড়তে পড়তে।',
    },
    signal: {
      en: 'Expect rapid, rhythmic verses and a long procession of prophets: Nuh, Ibrahim and the great sacrifice, Musa and Harun, Ilyas, Lut and Yunus, each of them rejected by his people and then rescued.',
      bn: 'দ্রুত, ছন্দময় আয়াত আর নবীদের দীর্ঘ মিছিল: নূহ, ইবরাহীম ও মহান কুরবানি, মূসা ও হারূন, ইলিয়াস, লূত আর ইউনুস। প্রত্যেককেই তাঁর কওম প্রত্যাখ্যান করেছিল, তারপর আল্লাহ তাঁকে উদ্ধার করেছেন।',
    },
    alt: [],
    refs: ['37:1'],
  },
  38: {
    meaning: { en: 'Sad (one letter)', bn: 'সোয়াদ (একটি হরফ)' },
    source: {
      en: 'From the single disjointed letter that opens the surah at 38:1, followed by an oath by the Quran.',
      bn: '৩৮:১-এ সূরার শুরুর একটিমাত্র বিচ্ছিন্ন হরফ থেকে, যার পরেই এসেছে কুরআনের শপথ।',
    },
    why: {
      en: 'Sad is one of the disjointed letters, and like the rest its meaning is not established; the majority affirm the letters as revealed without claiming to know what they signify. Attempts to read Sad as an abbreviation of a divine name or a command are guesses, not transmitted knowledge. The surah is therefore identified by a sound rather than a subject, which is enough, because no other surah begins that way. Its long account of Dawud is the reason a minority report calls it Surat Dawud instead.',
      bn: 'সোয়াদ হুরুফুল মুকাত্তাআতের একটি, আর বাকিগুলোর মতো এরও অর্থ নিশ্চিতভাবে জানা নেই। অধিকাংশ আলেম এই হরফগুলোকে আল্লাহর নাজিল করা বলে মানেন, কিন্তু এদের অর্থ জানার দাবি করেন না। সোয়াদকে আল্লাহর কোনো নামের বা কোনো আদেশের সংক্ষিপ্ত রূপ ধরার চেষ্টাগুলো অনুমান মাত্র, বর্ণনাসূত্রে পাওয়া জ্ঞান নয়। তাই সূরাটি চেনা যায় বিষয় দিয়ে নয়, একটি ধ্বনি দিয়ে; আর সেটুকুই যথেষ্ট, কারণ আর কোনো সূরা এভাবে শুরু হয় না। এতে দাউদের দীর্ঘ বর্ণনা থাকায় অল্প কিছু বর্ণনায় একে সূরা দাউদও বলা হয়েছে।',
    },
    signal: {
      en: 'A Meccan surah about power and privilege put to the test: Dawud judging a dispute brought to him, Sulayman and his horses, Ayyub in his illness, and Iblis refusing to bow out of sheer pride.',
      bn: 'ক্ষমতা ও মর্যাদার পরীক্ষা নিয়ে একটি মক্কী সূরা: দাউদের কাছে আনা এক বিবাদের ফয়সালা, সুলাইমান ও তাঁর ঘোড়া, অসুখে আইয়ূব, আর নিছক অহংকারে সিজদা করতে অস্বীকার করা ইবলীস।',
    },
    alt: [
      { name: 'Surat Dawud', en: 'Reported in as-Suyuti\'s al-Itqan from as-Sakhawi, for the long passage on Dawud and his prostration in 38:17-24; Ibn Ashur notes the report is given without a chain.', bn: 'সুয়ূতীর আল-ইতকানে সাখাবীর সূত্রে বর্ণিত, ৩৮:১৭-২৪-এ দাউদ ও তাঁর সিজদার দীর্ঘ বর্ণনার কারণে; ইবনে আশূর উল্লেখ করেছেন, বর্ণনাটি সনদ ছাড়াই এসেছে।' },
    ],
    refs: ['38:1', '38:17-24'],
  },
  39: {
    meaning: { en: 'The Throngs', bn: 'দলে দলে' },
    source: {
      en: 'From the crowds driven in throngs to the Fire and to the Garden at the close of the surah, in 39:71 and 39:73.',
      bn: 'সূরার শেষে ৩৯:৭১ ও ৩৯:৭৩-এ জাহান্নাম ও জান্নাতের দিকে দলে দলে নিয়ে যাওয়া মানুষের বর্ণনা থেকে।',
    },
    why: {
      en: 'Unusually, this surah is named from a word that appears only in its final scenes, not its opening. Zumar means groups driven along together, and it is used twice at the very end for the two processions, one to the Fire and one to the Garden. Everything before that has been about sincerity of worship and the mercy that remains open to sinners. Naming the surah from its closing image lets the title carry the destination the whole surah has been arguing toward. A report in al-Qurtubi records the alternative Al-Ghuraf.',
      bn: 'এই সূরার নাম এসেছে এমন একটি শব্দ থেকে, যা আছে কেবল শেষ দৃশ্যে, শুরুতে নয়; এমনটা সচরাচর হয় না। যুমার মানে দলে দলে একসঙ্গে তাড়িয়ে নেওয়া মানুষ। শব্দটি একেবারে শেষে দুবার এসেছে দুটি মিছিলের জন্য: একটি জাহান্নামের দিকে, আরেকটি জান্নাতের দিকে। তার আগে পুরো সূরাজুড়ে আছে ইবাদতে ইখলাস আর গুনাহগারদের জন্য খোলা থাকা রহমতের কথা। শেষ দৃশ্য থেকে নাম নেওয়ায় শিরোনামটিই বহন করে সেই গন্তব্য, যেদিকে পুরো সূরা যুক্তি সাজিয়ে এগিয়েছে। কুরতুবীর এক বর্ণনায় বিকল্প নাম আল-গুরাফও পাওয়া যায়।',
    },
    signal: {
      en: 'Expect a sustained call to worship Allah alone with a sincere heart, and one of the most quoted verses of hope for those who despair of forgiveness.',
      bn: 'খাঁটি অন্তরে কেবল আল্লাহর ইবাদতের টানা আহ্বান, আর মাগফিরাতের আশা হারানো মানুষের জন্য সবচেয়ে বেশি উদ্ধৃত আশার আয়াতগুলোর একটি।',
    },
    alt: [
      { name: 'Al-Ghuraf', en: 'Recorded by al-Qurtubi from Wahb ibn Munabbih, after the lofty chambers built one above another that are promised in 39:20.', bn: 'কুরতুবী ওয়াহব ইবনে মুনাব্বিহ থেকে এই নাম বর্ণনা করেছেন; ৩৯:২০ আয়াতে প্রতিশ্রুত, একটির উপর আরেকটি নির্মিত সুউচ্চ কক্ষগুলোর সূত্রে।' },
    ],
    refs: ['39:71', '39:73'],
  },
  40: {
    meaning: { en: 'Forgiver of Sin', bn: 'গুনাহ ক্ষমাকারী' },
    source: {
      en: 'From the description of Allah as Ghafir adh-dhanb, forgiver of sin and accepter of repentance, in 40:3.',
      bn: '৪০:৩ আয়াতে আল্লাহকে বলা হয়েছে গাফিরুয্‌ যাম্‌ব, অর্থাৎ গুনাহ ক্ষমাকারী ও তাওবা কবুলকারী; সেখান থেকে।',
    },
    why: {
      en: 'This surah has three recorded names, each lifted from a different word. Ghafir comes from a divine attribute in the third verse and became standard in North African copies. Al-Mu\'min points instead to the believer of Pharaoh\'s family, who concealed his faith and spoke up in defence of Musa, an episode found nowhere else in the Quran. At-Tawl comes from another attribute in the same third verse and has largely fallen out of use. Three names, none of them a summary, each simply a reliable handle for finding the surah.',
      bn: 'এই সূরার তিনটি নাম বর্ণিত, প্রতিটি আলাদা শব্দ থেকে নেওয়া। গাফির এসেছে তৃতীয় আয়াতে আল্লাহর একটি গুণবাচক নাম থেকে; উত্তর আফ্রিকার মুসহাফে এটিই চালু হয়ে যায়। আল-মুমিন নামটি ইশারা করে ফেরাউনের পরিবারের সেই মুমিনের দিকে, যিনি ঈমান গোপন রেখে মূসার পক্ষে কথা বলেছিলেন; কুরআনে এ ঘটনা আর কোথাও নেই। আত-তাওল এসেছে ওই তৃতীয় আয়াতেরই আরেকটি গুণ থেকে, তবে এ নামের ব্যবহার প্রায় উঠেই গেছে। তিনটি নাম, কোনোটিই সারসংক্ষেপ নয়; প্রতিটিই কেবল সূরাটি খুঁজে পাওয়ার নির্ভরযোগ্য উপায়।',
    },
    signal: {
      en: 'The first of the seven Ha Mim surahs. Expect argument with proud deniers, the courage of one hidden believer at court, and repeated assurance that prayer is answered.',
      bn: 'সাতটি হা মীম সূরার প্রথমটি। এতে আছে অহংকারী অস্বীকারকারীদের সঙ্গে বিতর্ক, রাজদরবারে গোপনে ঈমান আনা এক মানুষের সাহস, আর বারবার এই আশ্বাস যে দোয়া কবুল হয়।',
    },
    alt: [
      { name: "Al-Mu'min", en: 'The name used in the hadith literature and in Eastern manuscripts, after the believing man of Pharaoh\'s household who defends Musa in 40:28-45.', bn: 'হাদিসের গ্রন্থে ও প্রাচ্যের পাণ্ডুলিপিতে ব্যবহৃত নাম, ফিরআউনের পরিবারের সেই ঈমানদার ব্যক্তির সূত্রে যিনি ৪০:২৮-৪৫-এ মূসার পক্ষ নেন।' },
      { name: 'At-Tawl', en: 'From the attribute dhi at-tawl, the Lord of abundant bounty, in the same verse 40:3; Ibn Ashur notes this name has been largely forgotten.', bn: 'একই আয়াত ৪০:৩-এর জি আত-তাওল অর্থাৎ প্রাচুর্যের অধিকারী গুণটি থেকে; ইবনে আশূর লিখেছেন, এই নাম প্রায় বিস্মৃত।' },
    ],
    refs: ['40:3', '40:28'],
  },
  41: {
    meaning: { en: 'Explained in Detail', bn: 'বিশদভাবে বিবৃত' },
    source: {
      en: 'From the description of a Book whose verses have been set out in detail, fussilat ayatuhu, in 41:3.',
      bn: '৪১:৩ আয়াত থেকে, যেখানে এমন এক কিতাবের কথা বলা হয়েছে, যার আয়াতগুলো বিস্তারিত ব্যাখ্যা করা হয়েছে: ফুসসিলাত আয়াতুহু।',
    },
    why: {
      en: 'This surah is named two different ways, and the contrast is instructive. Fussilat is taken from a word in the third verse and became the usual title in North Africa. Ha Mim as-Sajdah names it instead by its opening letters plus the prostration it contains, which is how the tradition kept the seven Ha Mim surahs apart from one another. Note that this is a different prostration from the one that gives surah 32 its name; the attached letters, Alif Lam Mim there and Ha Mim here, are what prevent confusion.',
      bn: 'এই সূরার নাম রাখা হয়েছে দুইভাবে, আর এই পার্থক্য থেকে শেখার আছে। ফুসসিলাত নেওয়া হয়েছে তৃতীয় আয়াতের একটি শব্দ থেকে; উত্তর আফ্রিকায় এটিই প্রচলিত নাম হয়ে ওঠে। হা মীম আস-সাজদা নামটি আবার এসেছে শুরুর হরফ আর সূরার ভেতরের সিজদা মিলিয়ে; সাতটি হা মীম সূরাকে একটি থেকে আরেকটি আলাদা রাখতে এভাবেই নাম রাখা হতো। খেয়াল রাখবেন, এই সিজদা ৩২ নম্বর সূরার নামের সিজদা থেকে আলাদা। সঙ্গে জোড়া হরফগুলোই গোলমাল ঠেকায়: সেখানে আলিফ লাম মীম, এখানে হা মীম।',
    },
    signal: {
      en: 'Expect a direct answer to those who said their hearts were veiled: creation described stage by stage, the ruin of Ad and Thamud, and the counsel to repel evil with what is better.',
      bn: 'যারা বলেছিল আমাদের অন্তর পর্দায় ঢাকা, তাদের সরাসরি জবাব: ধাপে ধাপে সৃষ্টির বর্ণনা, আদ ও সামূদের ধ্বংস, আর মন্দকে উত্তম দিয়ে প্রতিহত করার উপদেশ।',
    },
    alt: [
      { name: 'Ha Mim as-Sajdah', en: 'The name used in the hadith literature: the opening letters together with the recitation prostration at 41:37-38, which distinguishes it from the other Ha Mim surahs.', bn: 'হাদিসের গ্রন্থে ব্যবহৃত নাম: সূচনার হরফ এবং ৪১:৩৭-৩৮-এর তিলাওয়াতের সিজদা মিলিয়ে, যা একে অন্য হা মীম সূরাগুলো থেকে আলাদা করে।' },
      { name: 'As-Sajdah', en: 'A shortened form of Ha Mim as-Sajdah; used with care, since surah 32 carries that title outright.', bn: 'হা মীম আস-সাজদার সংক্ষিপ্ত রূপ; তবে সাবধানে ব্যবহার করতে হয়, কারণ ৩২ নম্বর সূরার নামই সরাসরি এটি।' },
      { name: 'Al-Masabih', en: 'A less common name reported by Ibn Ashur, from the lamps set in the lowest heaven in 41:12.', bn: 'ইবনে আশূরের বর্ণনায় কম প্রচলিত একটি নাম, ৪১:১২-এ নিকটবর্তী আসমানে স্থাপিত প্রদীপগুলোর সূত্রে।' },
    ],
    refs: ['41:3', '41:37'],
  },
  42: {
    meaning: { en: 'Consultation', bn: 'পরামর্শ' },
    source: {
      en: 'From the praise of believers whose affairs are decided by mutual consultation, shura baynahum, in 42:38.',
      bn: '৪২:৩৮ আয়াত থেকে, যেখানে সেই মুমিনদের প্রশংসা করা হয়েছে, যারা নিজেদের কাজ পরস্পর পরামর্শ করে ঠিক করে: শূরা বাইনাহুম।',
    },
    why: {
      en: 'The naming word appears once, in a list of qualities of the believers near the middle of the surah, and it is the only place in the Quran where communal consultation is described in exactly this form. That single occurrence was enough to fix the title, which is a good illustration of how surah names work: rarity, not centrality, is what makes a word usable as a label. The surah is also known by its opening letters, since it is the only one that begins with two separate letter groups.',
      bn: 'নামের শব্দটি এসেছে মাত্র একবার, সূরার প্রায় মাঝামাঝি, মুমিনদের গুণের একটি তালিকায়। সম্মিলিত পরামর্শের কথা ঠিক এই রূপে কুরআনে শুধু এখানেই আছে। ওই একবারের উল্লেখই নাম ঠিক করে দেওয়ার জন্য যথেষ্ট হয়েছে। সূরার নাম কীভাবে কাজ করে, এটি তার ভালো উদাহরণ: কোনো শব্দকে নাম হওয়ার উপযোগী করে তার বিরলতা, কেন্দ্রীয় হওয়া নয়। সূরাটি শুরুর হরফ দিয়েও পরিচিত, কারণ এটিই একমাত্র সূরা, যা দুটি আলাদা হরফগুচ্ছ দিয়ে শুরু হয়।',
    },
    signal: {
      en: 'A Ha Mim surah on how revelation reaches a messenger, the unity of the prophetic message, and a community that settles its affairs by counsel rather than command.',
      bn: 'হা মীম শ্রেণির একটি সূরা: ওহি কীভাবে রাসূলের কাছে পৌঁছায়, সব নবীর বার্তা যে একই, আর এমন এক সমাজ, যা হুকুম চাপিয়ে নয়, পরামর্শ করে কাজ চালায়।',
    },
    alt: [
      { name: "Ha Mim 'Ayn Sin Qaf", en: 'Named from its two groups of opening letters in 42:1-2, unique in the Quran.', bn: '৪২:১-২-এর দুই গুচ্ছ সূচনা হরফ থেকে নেওয়া নাম, যা কুরআনে অনন্য।' },
    ],
    refs: ['42:38', '42:1-2'],
  },
  43: {
    meaning: { en: 'Gold Ornament', bn: 'সোনার অলংকার' },
    source: {
      en: 'From the passage saying that worldly luxury, roofs and doors of silver and zukhruf, is no measure of divine favour, in 43:33-35.',
      bn: '৪৩:৩৩-৩৫ আয়াতের সেই অংশ থেকে, যেখানে বলা হয়েছে, রুপার ছাদ ও দরজা আর সোনার সাজসজ্জার মতো দুনিয়ার বিলাস আল্লাহর অনুগ্রহের মাপকাঠি নয়।',
    },
    why: {
      en: 'Zukhruf means gilding, the gold trim of a thing rather than its substance, and the word appears once, in a striking aside: if it were not that people would all become deniers, Allah would give the rejecters silver roofs and staircases, because such things weigh nothing with Him. The surah is named from that single word, a marker again rather than a summary. Yet the choice is apt, since the surah keeps returning to people who judge truth by wealth and by the standing of the man who brings it.',
      bn: 'যুখরুফ মানে গিল্টি: কোনো জিনিসের মূল বস্তু নয়, তার উপরের সোনালি প্রলেপ। শব্দটি এসেছে একবারই, এক চমকে দেওয়া প্রসঙ্গে: সব মানুষ অস্বীকারকারী হয়ে যাবে, এই আশঙ্কা না থাকলে আল্লাহ অস্বীকারকারীদের রুপার ছাদ আর সিঁড়ি দিয়ে দিতেন, কারণ তাঁর কাছে এসবের কোনো ওজন নেই। ওই একটি শব্দ থেকেই সূরার নাম; এখানেও তা সারসংক্ষেপ নয়, চিহ্ন। তবু বাছাইটি যথার্থ, কারণ সূরাটি বারবার ফিরে আসে সেই মানুষদের কথায়, যারা সত্য বিচার করে সম্পদ দিয়ে, আর যে সত্য নিয়ে আসে, তার সামাজিক মর্যাদা দিয়ে।',
    },
    signal: {
      en: 'Expect the objection that revelation should have come to a great man of the two cities, answered by the example of Ibrahim, Musa and Isa, and by what wealth is actually worth.',
      bn: 'সেই আপত্তি: ওহি তো দুই শহরের কোনো বড় মানুষের কাছে আসা উচিত ছিল। এর জবাব আসে ইবরাহীম, মূসা ও ঈসার দৃষ্টান্তে, আর সম্পদের আসল মূল্য দেখিয়ে।',
    },
    alt: [],
    refs: ['43:33-35'],
  },
  44: {
    meaning: { en: 'The Smoke', bn: 'ধোঁয়া' },
    source: {
      en: 'From the warning to watch for a day when the sky brings a visible smoke, in 44:10.',
      bn: '৪৪:১০ আয়াতের সতর্কবাণী থেকে: সেই দিনের অপেক্ষা করুন, যেদিন আকাশ স্পষ্ট ধোঁয়া নিয়ে আসবে।',
    },
    why: {
      en: 'Dukhan occurs once, in a warning of a day when the sky will bring a visible smoke that envelops people. Commentators divided over whether this refers to the famine that struck Quraysh in Mecca or to a sign still to come before the Hour, and both readings are transmitted; the surah is named from the word without settling the dispute. That is normal. A name has to identify a surah, not adjudicate its exegesis, and Dukhan does the first job perfectly because the word occurs nowhere else in the surah.',
      bn: 'দুখান শব্দটি এসেছে একবারই, এমন এক দিনের সতর্কবাণীতে, যেদিন আকাশ স্পষ্ট ধোঁয়া নিয়ে আসবে আর তা মানুষকে ঢেকে ফেলবে। মুফাসসিররা এ নিয়ে দুই মত দিয়েছেন: এটি কি মক্কায় কুরাইশদের উপর নেমে আসা দুর্ভিক্ষ, নাকি কিয়ামতের আগে আসন্ন কোনো নিদর্শন। দুই ব্যাখ্যাই বর্ণিত আছে। সূরার নাম শব্দটি থেকেই নেওয়া, বিতর্কের মীমাংসা না করেই। এটাই স্বাভাবিক। নামের কাজ সূরাকে চেনানো, তাফসীরের মীমাংসা করা নয়। আর দুখান প্রথম কাজটি নিখুঁতভাবে করে, কারণ সূরার আর কোথাও শব্দটি নেই।',
    },
    signal: {
      en: 'A short Ha Mim surah: the blessed night of revelation, a stern warning to Mecca, the destruction of Pharaoh, and a sharp contrast between two ends.',
      bn: 'ছোট একটি হা মীম সূরা: ওহি নাজিলের বরকতময় রাত, মক্কার প্রতি কঠোর সতর্কবাণী, ফেরাউনের ধ্বংস, আর দুই পরিণতির তীক্ষ্ণ তফাত।',
    },
    alt: [
      { name: 'Ha Mim ad-Dukhan', en: 'The fuller form used to place it among the seven Ha Mim surahs.', bn: 'সাতটি হা মীম সূরার মধ্যে অবস্থান বোঝাতে ব্যবহৃত পূর্ণাঙ্গ রূপ।' },
    ],
    refs: ['44:10'],
  },
  45: {
    meaning: { en: 'Kneeling', bn: 'নতজানু' },
    source: {
      en: 'From the scene near the end in which every nation is seen kneeling, jathiyah, as its record is brought out, in 45:28.',
      bn: 'সূরার শেষদিকে ৪৫:২৮ আয়াতের সেই দৃশ্য থেকে, যেখানে আমলনামা বের করার সময় প্রতিটি জাতিকে নতজানু দেখা যাবে।',
    },
    why: {
      en: 'The word occurs once, nine verses from the end, in an image of every nation on its knees awaiting judgement. Naming a surah from its final scene is less common than naming it from the opening, and here it works because the picture is unforgettable. Two other names are recorded from other single words in the same surah: Ash-Shari\'ah from the clear way Allah set the Prophet upon, and Ad-Dahr from the deniers who said nothing destroys us but time. Three names, three isolated words.',
      bn: 'শব্দটি এসেছে একবারই, শেষ থেকে নয় আয়াত আগে, এক দৃশ্যে: প্রতিটি জাতি নতজানু হয়ে বিচারের অপেক্ষায়। শুরু থেকে নাম নেওয়ার তুলনায় শেষ দৃশ্য থেকে নাম নেওয়া কম দেখা যায়; এখানে তা খাটে, কারণ ছবিটি ভোলার নয়। একই সূরার আরও দুটি আলাদা শব্দ থেকে আরও দুটি নাম বর্ণিত। আশ-শারীআ, সেই সুস্পষ্ট পথ থেকে, যার উপর আল্লাহ নবীজিকে প্রতিষ্ঠিত করেছেন। আর আদ-দাহর, অস্বীকারকারীদের এই কথা থেকে: সময় ছাড়া আর কিছুই আমাদের ধ্বংস করে না। তিনটি নাম, তিনটি আলাদা শব্দ।',
    },
    signal: {
      en: 'Expect signs laid out for people who reason, a rebuke to those who take their own desire as a god, and a courtroom scene where the record speaks.',
      bn: 'বুদ্ধি খাটায় এমন মানুষের জন্য সাজানো নিদর্শন, নিজের খেয়ালখুশিকে উপাস্য বানিয়ে নেওয়া মানুষদের প্রতি তিরস্কার, আর এমন এক বিচারদৃশ্য, যেখানে আমলনামাই কথা বলে।',
    },
    alt: [
      { name: "Ash-Shari'ah", en: 'From the clear way, shari\'ah, upon which the Prophet is placed in 45:18.', bn: '৪৫:১৮ আয়াতে নবীজিকে যে সুস্পষ্ট পথের (শরীআর) উপর প্রতিষ্ঠিত করা হয়েছে, সেখান থেকে।' },
      { name: 'Ad-Dahr', en: 'From the saying of the deniers in 45:24 that nothing destroys them but time.', bn: '৪৫:২৪-এ অস্বীকারকারীদের এই কথা থেকে যে সময় ছাড়া কিছুই তাদের ধ্বংস করে না।' },
      { name: 'Ha Mim al-Jathiyah', en: 'The fuller form used to place it among the seven Ha Mim surahs.', bn: 'সাতটি হা মীম সূরার মধ্যে অবস্থান বোঝাতে ব্যবহৃত পূর্ণাঙ্গ রূপ।' },
    ],
    refs: ['45:28', '45:18', '45:24'],
  },
  46: {
    meaning: { en: 'The Sand Dunes', bn: 'বালির টিলা' },
    source: {
      en: 'From the mention of the brother of Ad warning his people at al-Ahqaf, the sand dunes, in 46:21.',
      bn: '৪৬:২১ আয়াত থেকে, যেখানে আদ জাতির ভাইয়ের কথা আছে; তিনি আল-আহকাফে, অর্থাৎ বালির টিলার দেশে, নিজের কওমকে সতর্ক করেছিলেন।',
    },
    why: {
      en: 'Ahqaf are long curved dunes of sand, and the word is the name of the region in southern Arabia where the people of Ad lived. It occurs once, in a single verse recalling that Hud warned them there. Naming a whole surah from one geographical term in one verse is the clearest kind of marker naming: the word is rare, easy to remember, and shared with no other surah. The subject of the surah is broader, taking in revelation, parents, and the jinn who listened to the Quran.',
      bn: 'আহকাফ মানে লম্বা, বাঁকা বালির টিলা। দক্ষিণ আরবের যে অঞ্চলে আদ জাতি বাস করত, শব্দটি সেই অঞ্চলেরও নাম। কুরআনে এটি এসেছে মাত্র একবার, একটি আয়াতে, যেখানে মনে করিয়ে দেওয়া হয়েছে, হুদ সেখানেই তাদের সতর্ক করেছিলেন। একটি আয়াতের একটি ভৌগোলিক শব্দ থেকে গোটা সূরার নাম রাখা, চিহ্ন হিসেবে নামকরণের এর চেয়ে স্পষ্ট উদাহরণ নেই: শব্দটি বিরল, সহজে মনে থাকে, আর অন্য কোনো সূরার সঙ্গে মেলে না। তবে সূরার আলোচনা এর চেয়ে অনেক বিস্তৃত: ওহি, বাবা-মা, আর সেই জিনদের কথা, যারা কুরআন শুনেছিল।',
    },
    signal: {
      en: 'The last of the seven Ha Mim surahs. Expect the ruin of Ad, kindness owed to parents, and the night a group of jinn heard the Quran and believed.',
      bn: 'সাতটি হা মীম সূরার শেষটি। এতে আছে আদ জাতির ধ্বংস, বাবা-মায়ের প্রতি সদাচরণের হক, আর সেই রাতের কথা, যে রাতে একদল জিন কুরআন শুনে ঈমান এনেছিল।',
    },
    alt: [],
    refs: ['46:21'],
  },
  47: {
    meaning: { en: 'Muhammad', bn: 'মুহাম্মাদ' },
    source: {
      en: 'From the mention of the Prophet by name in 47:2, in the promise that Allah will pardon those who believe in what was sent down to Muhammad.',
      bn: '৪৭:২ আয়াতে নবীজির নাম ধরে উল্লেখ থেকে। সেখানে আল্লাহ ওয়াদা করেছেন, মুহাম্মাদের উপর যা নাজিল হয়েছে তাতে যারা ঈমান আনে, তিনি তাদের দোষত্রুটি মাফ করে দেবেন।',
    },
    why: {
      en: 'The Prophet is named only four times in the whole Quran, and this is the one surah that carries his name. That rarity is the point: the surah is not about his life, and the title is drawn from a single mention in the second verse, exactly as other surahs take their names from a single unusual word. The surah is also called Al-Qital, a name the Quran itself gestures at when it speaks of a surah in which fighting is mentioned, and Alladhina Kafaru after its opening words.',
      bn: 'গোটা কুরআনে নবীজির নাম এসেছে মাত্র চারবার, আর তাঁর নামে সূরা এই একটিই। এই বিরলতাই আসল কথা। সূরাটি তাঁর জীবনী নিয়ে নয়। নামটি নেওয়া হয়েছে দ্বিতীয় আয়াতের একটিমাত্র উল্লেখ থেকে, ঠিক যেভাবে অন্য সূরাগুলো কোনো একটি ব্যতিক্রমী শব্দ থেকে নাম পায়। সূরাটির আরেক নাম আল-কিতাল। কুরআন নিজেই এ নামের দিকে ইশারা করে, যখন এমন এক সূরার কথা বলে, যাতে যুদ্ধের উল্লেখ আছে। আর শুরুর শব্দ ধরে একে আল্লাযীনা কাফারূও বলা হয়।',
    },
    signal: {
      en: 'A Medinan surah on the hard edge of commitment: fighting and its rules, the exposure of those who hesitate, and the description of the promised Garden.',
      bn: 'ঈমানের সবচেয়ে কঠিন দাবি নিয়ে একটি মাদানী সূরা: যুদ্ধ ও তার বিধান, যারা পিছিয়ে থাকে তাদের মুখোশ খুলে দেওয়া, আর প্রতিশ্রুত জান্নাতের বর্ণনা।',
    },
    alt: [
      { name: 'Al-Qital', en: 'From the surah\'s rulings on fighting; the Quran itself refers to a surah in which fighting is mentioned, at 47:20.', bn: 'সূরার যুদ্ধবিষয়ক বিধান থেকে; কুরআন নিজেই ৪৭:২০-এ এমন সূরার কথা বলে যাতে যুদ্ধের উল্লেখ আছে।' },
      { name: 'Alladhina Kafaru', en: 'From the opening words of 47:1; recorded in several manuscripts of Sahih al-Bukhari.', bn: '৪৭:১-এর সূচনা শব্দ থেকে; সহীহ বুখারীর কয়েকটি পাণ্ডুলিপিতে এই নাম রয়েছে।' },
    ],
    refs: ['47:2', '47:20'],
  },
  48: {
    meaning: { en: 'The Victory', bn: 'বিজয়' },
    source: {
      en: 'From the opening declaration that Allah has granted a clear victory, inna fatahna laka fathan mubina, in 48:1.',
      bn: '৪৮:১-এর সূচনা ঘোষণা থেকে: নিশ্চয়ই আমি তোমাকে সুস্পষ্ট বিজয় দিয়েছি — ইন্না ফাতাহনা লাকা ফাতহাম মুবীনা।',
    },
    why: {
      en: 'The name comes from the opening of the first verse, the commonest way surahs are named. What makes it worth pausing over is the timing: the verse was revealed on the way back from Hudaybiyyah, where the Muslims had accepted terms that many of them read as a defeat. Calling that a clear victory reframed the whole episode, and the name preserves that reframing. So here the marker word and the argument of the surah pull in the same direction, which is not always the case.',
      bn: 'নামটি এসেছে প্রথম আয়াতের শুরু থেকে; সূরার নাম রাখার এটাই সবচেয়ে চেনা পদ্ধতি। একটু থেমে ভাবার বিষয় হলো সময়টা। আয়াতটি নাজিল হয় হুদায়বিয়া থেকে ফেরার পথে। সেখানে মুসলিমরা এমন সব শর্ত মেনে নিয়েছিলেন, যেগুলোকে তাঁদের অনেকেই পরাজয় মনে করেছিলেন। সেটিকেই সুস্পষ্ট বিজয় বলায় পুরো ঘটনার অর্থ বদলে গেল, আর নামটি সেই নতুন দৃষ্টিটুকু ধরে রেখেছে। তাই এখানে চিহ্ন-শব্দ আর সূরার মূল বক্তব্য একই দিকে ইশারা করে, যা সব সময় হয় না।',
    },
    signal: {
      en: 'Expect a treaty read as triumph: the pledge under the tree, calm sent down into believing hearts, the promise of entering the Sacred Mosque in safety.',
      bn: 'এমন এক সন্ধি, যাকে কুরআন বিজয় বলেছে: গাছের নিচে বাইআত, মুমিনদের অন্তরে নাজিল হওয়া প্রশান্তি, আর নিরাপদে মসজিদুল হারামে প্রবেশের প্রতিশ্রুতি।',
    },
    alt: [],
    refs: ['48:1'],
  },
  49: {
    meaning: { en: 'The Chambers', bn: 'কক্ষসমূহ' },
    source: {
      en: 'From the rebuke of those who called out to the Prophet from behind the private chambers, al-hujurat, in 49:4.',
      bn: '৪৯:৪ আয়াত থেকে, যেখানে তাদের তিরস্কার করা হয়েছে, যারা নবীজির ঘরের কামরাগুলোর (আল-হুজুরাত) বাইরে থেকে তাঁকে ডাকাডাকি করত।',
    },
    why: {
      en: 'Hujurat are the small rooms where the Prophet\'s household lived, and the word occurs once, in a rebuke to visitors who stood outside shouting for him. The surah takes its name from that one architectural detail, though its real subject is manners: how to speak to the Prophet, how to handle a rumour, how not to mock, backbite or spy. The name is a marker taken from the most concrete image in the surah, which is exactly the pattern seen again and again across the Quran.',
      bn: 'হুজুরাত হলো সেই ছোট ছোট কামরা, যেখানে নবীজির পরিবার থাকতেন। শব্দটি এসেছে একবারই, সেই আগন্তুকদের তিরস্কারে, যারা বাইরে দাঁড়িয়ে চিৎকার করে তাঁকে ডাকত। ঘরবাড়ির এই একটি খুঁটিনাটি থেকেই সূরার নাম, যদিও এর আসল বিষয় আদব: নবীজির সঙ্গে কীভাবে কথা বলতে হয়, গুজব শুনলে কী করতে হয়, আর কীভাবে ঠাট্টা-বিদ্রূপ, গীবত ও গোয়েন্দাগিরি থেকে বাঁচতে হয়। সূরার সবচেয়ে বাস্তব ছবিটি থেকেই চিহ্ন হিসেবে নাম নেওয়া হয়েছে, আর কুরআনজুড়ে বারবার এই ধারাই চোখে পড়ে।',
    },
    signal: {
      en: 'A short Medinan surah that reads like a code of conduct: verify news, make peace between believers, drop the nicknames, and remember that honour rests on piety alone.',
      bn: 'ছোট একটি মাদানী সূরা, পড়লে মনে হয় যেন আচরণবিধি: খবর যাচাই করে নেওয়া, মুমিনদের মধ্যে মীমাংসা করে দেওয়া, মন্দ নামে ডাকা ছেড়ে দেওয়া, আর মনে রাখা যে সম্মান কেবল তাকওয়ায়।',
    },
    alt: [],
    refs: ['49:4'],
  },
  50: {
    meaning: { en: 'Qaf (one letter)', bn: 'ক্বাফ (একটি হরফ)' },
    source: {
      en: 'From the single disjointed letter opening the surah at 50:1, followed by an oath by the glorious Quran.',
      bn: '৫০:১-এ সূরার শুরুর একটিমাত্র বিচ্ছিন্ন হরফ থেকে, যার পরেই এসেছে মহিমান্বিত কুরআনের শপথ।',
    },
    why: {
      en: 'Qaf is a disjointed letter, and its meaning is not established. Reports that it stands for a mountain encircling the earth are stories with no sound chain and are best set aside. The majority position on all such letters is to accept them as revealed and decline to specify what they mean. The Prophet used to recite this surah at the Eid prayer and on the pulpit on Fridays, so it was known by this one letter from the beginning. An alternative name, Al-Basiqat, is also recorded.',
      bn: 'ক্বাফ একটি বিচ্ছিন্ন হরফ; এর অর্থ নিশ্চিতভাবে জানা যায় না। কোনো কোনো বর্ণনায় আছে, এটি পৃথিবী-ঘেরা এক পাহাড়ের নাম। কিন্তু এসব কাহিনির কোনো সহীহ সনদ নেই, তাই এগুলো বাদ রাখাই ভালো। এ ধরনের সব হরফের ব্যাপারে অধিকাংশ আলেমের মত হলো: এগুলো আল্লাহর নাজিল করা বলে মেনে নেওয়া, আর অর্থ নির্দিষ্ট করতে না যাওয়া। নবীজি ঈদের নামাজে আর জুমার দিন মিম্বারে এই সূরা পড়তেন, তাই শুরু থেকেই এটি এই এক হরফের নামে পরিচিত। আল-বাসিকাত নামেও একটি বিকল্প নাম বর্ণিত আছে।',
    },
    signal: {
      en: 'A powerful short Meccan surah on resurrection: two angels recording every word, the earth giving up what it holds, and a heart that is present and listening.',
      bn: 'পুনরুত্থান নিয়ে ছোট কিন্তু জোরালো একটি মক্কী সূরা: প্রতিটি কথা লিখে রাখা দুই ফেরেশতা, জমিন তার ভেতরে যা ধরে রেখেছে তা বের করে দেওয়া, আর এমন এক অন্তর, যা হাজির থেকে মন দিয়ে শোনে।',
    },
    alt: [
      { name: 'Al-Basiqat', en: 'Recorded by Ibn Ashur, from the tall palm trees with clustered fruit described in 50:10.', bn: 'ইবনে আশূরের বর্ণনায়, ৫০:১০-এ বর্ণিত থোকা থোকা ফলে ভরা সুউচ্চ খেজুরগাছের সূত্রে।' },
    ],
    refs: ['50:1', '50:10'],
  },
  51: {
    meaning: { en: 'The Scattering Winds', bn: 'বিক্ষেপকারী বাতাস' },
    source: {
      en: 'From the opening oath by adh-dhariyat, the winds that scatter, in 51:1.',
      bn: 'সূরার শুরুর শপথ থেকে (৫১:১): আয-যারিয়াত, অর্থাৎ যে বাতাস ধুলোবালি উড়িয়ে ছড়িয়ে দেয়।',
    },
    why: {
      en: 'The surah opens with a chain of four oaths by unnamed forces, and the first of them supplies the name. Most commentators, following a report from Ali, read them as the scattering winds, the clouds heavy with rain, the ships running easily, and the angels distributing affairs. The naming word appears in the first line and nowhere else, which is what makes it a serviceable label. It says nothing about the surah\'s argument, which concerns provision, guests of Ibrahim, and destroyed nations.',
      bn: 'সূরাটি শুরু হয়েছে পরপর চারটি শপথ দিয়ে। শপথগুলো এমন কিছু শক্তির, যাদের নাম বলা হয়নি, আর প্রথম শপথ থেকেই সূরার নাম। আলীর একটি বর্ণনা অনুসরণ করে অধিকাংশ মুফাসসির এগুলোর অর্থ করেছেন এভাবে: ধুলো ছড়ানো বাতাস, বৃষ্টিভরা ভারী মেঘ, অনায়াসে চলা নৌকা, আর কাজ বণ্টনকারী ফেরেশতা। নামের শব্দটি আছে প্রথম লাইনে, আর কোথাও নেই; এ কারণেই চিহ্ন হিসেবে এটি কাজের। তবে সূরার মূল বক্তব্য সম্পর্কে এটি কিছুই বলে না। সে বক্তব্য রিজিক, ইবরাহীমের মেহমান আর ধ্বংস হয়ে যাওয়া জাতিগুলো নিয়ে।',
    },
    signal: {
      en: 'Expect short, driving oaths, then the guests who brought Ibrahim news of a son, the fate of Ad, Thamud and Nuh, and the reminder that we were created only to worship.',
      bn: 'ছোট ছোট জোরালো শপথ, তারপর ইবরাহীমের কাছে পুত্রসন্তানের সুসংবাদ নিয়ে আসা মেহমানরা, আদ, সামুদ ও নূহের কওমের পরিণতি, আর এই কথা মনে করিয়ে দেওয়া যে আল্লাহ আমাদের সৃষ্টি করেছেন কেবল তাঁর ইবাদতের জন্য।',
    },
    alt: [],
    refs: ['51:1'],
  },
  52: {
    meaning: { en: 'The Mount', bn: 'তূর পর্বত' },
    source: {
      en: 'From the opening oath by at-Tur, the mountain where Musa was addressed, in 52:1.',
      bn: 'সূরার শুরুর শপথ থেকে (৫২:১): আত-তূর, সেই পাহাড়, যেখানে আল্লাহ মূসার সঙ্গে কথা বলেছিলেন।',
    },
    why: {
      en: 'At-Tur is the mountain of Sinai, and the surah swears by it in its first word. The mountain itself plays no part in what follows, which is a description of the Day of Judgement and a series of questions put to the deniers of Mecca. The name is therefore a pure marker, taken from the opening because that is the part a reciter meets first. This is worth noticing precisely because the reader expects a surah called The Mount to be about Musa, and it is not.',
      bn: 'আত-তূর হলো সিনাই পাহাড়, আর সূরাটি প্রথম শব্দেই এর শপথ করেছে। এরপরের আলোচনায় পাহাড়টির কোনো ভূমিকা নেই। সেখানে আছে কিয়ামতের দিনের বর্ণনা, আর মক্কার অস্বীকারকারীদের দিকে একের পর এক প্রশ্ন। তাই নামটি নিছক চিহ্ন। নেওয়া হয়েছে শুরু থেকে, কারণ তিলাওয়াত করতে গেলে সবার আগে এই অংশটিই সামনে আসে। বিষয়টি খেয়াল করার মতো, কারণ তূর নামের সূরা দেখে পাঠক ধরে নেন এটি মূসাকে নিয়ে, অথচ তা নয়।',
    },
    signal: {
      en: 'Expect a cascade of rhetorical questions aimed at the deniers, scenes of the Garden where families are reunited, and an instruction to be patient with the judgement of the Lord.',
      bn: 'অস্বীকারকারীদের দিকে ছুড়ে দেওয়া একের পর এক প্রশ্ন, জান্নাতের সেই দৃশ্য, যেখানে পরিবারগুলো আবার মিলিত হয়, আর রবের ফয়সালার অপেক্ষায় সবর করার নির্দেশ।',
    },
    alt: [],
    refs: ['52:1'],
  },
  53: {
    meaning: { en: 'The Star', bn: 'নক্ষত্র' },
    source: {
      en: 'From the opening oath by the star when it descends, wa an-najmi idha hawa, in 53:1.',
      bn: '৫৩:১-এর সূচনা শপথ থেকে: শপথ নক্ষত্রের যখন তা অস্ত যায় — ওয়ান নাজমি ইযা হাওয়া।',
    },
    why: {
      en: 'The name is the first word of the first verse. Commentators differ on what najm refers to here, whether a particular star, the stars generally, or the Quran revealed in instalments, and the disagreement is reported rather than resolved. Naming the surah from that word fixes it in memory without deciding the question. The surah goes on to describe the Prophet\'s vision at the farthest lote tree, so a reader who assumes the title announces an astronomical theme will be surprised.',
      bn: 'নামটি প্রথম আয়াতের প্রথম শব্দ। এখানে নাজম বলতে কী বোঝানো হয়েছে, তা নিয়ে মুফাসসিরদের মতভেদ আছে: কোনো নির্দিষ্ট তারা, সাধারণভাবে সব তারা, নাকি ধাপে ধাপে নাজিল হওয়া কুরআন। মতগুলো বর্ণিত হয়েছে, কিন্তু মীমাংসা হয়নি। ওই শব্দ থেকে নাম নেওয়ায় সূরাটি মনে গেঁথে যায়, অথচ প্রশ্নটির ফয়সালা করতে হয় না। এরপর সূরায় আসে সিদরাতুল মুনতাহার কাছে নবীজির দেখা দৃশ্যের বর্ণনা। তাই নাম দেখে যিনি জ্যোতির্বিদ্যার আলোচনা আশা করবেন, তিনি অবাক হবেন।',
    },
    signal: {
      en: 'Expect the account of what the Prophet saw at the lote tree, a demolition of the three idols of Mecca, and the principle that no soul bears the burden of another.',
      bn: 'সিদরাতুল মুনতাহার কাছে নবীজি যা দেখেছিলেন তার বিবরণ, মক্কার তিন দেবীকে ঘিরে দাবির খণ্ডন, আর এই নীতি: কেউ অন্যের বোঝা বইবে না।',
    },
    alt: [],
    refs: ['53:1'],
  },
  54: {
    meaning: { en: 'The Moon', bn: 'চন্দ্র' },
    source: {
      en: 'From the opening statement that the Hour has drawn near and the moon has split, in 54:1.',
      bn: '৫৪:১-এর সূচনা বাক্য থেকে: কিয়ামত নিকটবর্তী হয়েছে এবং চাঁদ বিদীর্ণ হয়েছে।',
    },
    why: {
      en: 'The word qamar appears in the first verse and nowhere else in the surah, which then turns to Nuh, Ad, Thamud, Lut and Pharaoh, each followed by the refrain asking who will take heed. The name is drawn from the opening sign rather than from that argument. The Prophet used to recite this surah at Eid, where it was known by its first word, Iqtarabat, and that older name is preserved in the hadith literature alongside the familiar one.',
      bn: 'ক্বামার শব্দটি আছে প্রথম আয়াতে, সূরার আর কোথাও নেই। এরপর আলোচনা চলে যায় নূহ, আদ, সামুদ, লূত ও ফেরাউনের দিকে। প্রতিটি কাহিনির পরে ফিরে আসে একই প্রশ্ন: আছে কি কেউ উপদেশ নেওয়ার? নামটি এই আলোচনা থেকে নয়, শুরুর নিদর্শনটি থেকে নেওয়া। নবীজি ঈদের নামাজে এই সূরা পড়তেন, আর সেখানে এটি পরিচিত ছিল প্রথম শব্দ ইক্বতারাবাত নামে। হাদিসের গ্রন্থে সেই পুরোনো নামটি চেনা নামের পাশাপাশিই রয়ে গেছে।',
    },
    signal: {
      en: 'Expect short, hammering verses and a refrain that returns after every story: nation after nation warned and then destroyed, followed each time by the question of whether anyone is left who will take heed.',
      bn: 'ছোট ছোট, হাতুড়ির ঘায়ের মতো আয়াত, আর প্রতিটি কাহিনির পর ফিরে আসা একই কথা। আল্লাহ একের পর এক জাতিকে সতর্ক করেছেন, তারপর ধ্বংস করেছেন, আর প্রতিবার প্রশ্ন রেখেছেন: উপদেশ নেওয়ার মতো কেউ কি বাকি আছে?',
    },
    alt: [
      { name: 'Iqtarabat', en: 'The surah\'s first word; the hadiths on the Eid prayer name it this way, pairing it with Qaf.', bn: 'সূরার প্রথম শব্দ; ঈদের নামাজ নিয়ে হাদিসগুলোতে সূরাটিকে এই নামেই ডাকা হয়েছে, সূরা ক্বাফের সঙ্গে জোড়া বেঁধে।' },
    ],
    refs: ['54:1'],
  },
  55: {
    meaning: { en: 'The Most Merciful', bn: 'পরম করুণাময়' },
    source: {
      en: 'From the very first word of the surah, the divine name Ar-Rahman standing alone as verse 55:1.',
      bn: 'সূরার একেবারে প্রথম শব্দ থেকে — আল্লাহর নাম আর-রহমান, যা ৫৫:১ হিসেবে একাই একটি আয়াত।',
    },
    why: {
      en: 'Here the marker and the subject coincide, which is unusual. The name is taken from the opening word, the normal method, but that word is also what the surah is about: mercy, listed favour by favour across heaven, earth, sea and the life to come, with the refrain asking which of your Lord\'s favours you both deny. So a reader who guesses the theme from the title guesses right, unlike with Al-Baqarah or An-Naml. The report calling it the bride of the Quran is praise rather than a second name.',
      bn: 'এখানে চিহ্ন আর বিষয় মিলে গেছে, যা সচরাচর হয় না। নাম নেওয়া হয়েছে শুরুর শব্দ থেকে, যেমনটা সাধারণত হয়। কিন্তু সেই শব্দটিই সূরার বিষয়: রহমত। আকাশ, জমিন, সাগর আর আখিরাত জুড়ে একটির পর একটি নিয়ামত গুনে গুনে দেখানো হয়েছে, আর বারবার ফিরে এসেছে সেই প্রশ্ন: তোমরা উভয়ে তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? তাই নাম দেখে কেউ বিষয় আন্দাজ করলে ঠিকই ধরবেন; আল-বাকারা বা আন-নামলের বেলায় তা হয় না। একে কুরআনের কনে বলার যে বর্ণনা আছে, তা প্রশংসা, দ্বিতীয় নাম নয়।',
    },
    signal: {
      en: 'Expect a rhythm unlike anything else in the Quran: a single question put to men and jinn and repeated thirty-one times, dividing a long inventory of mercy into short paired pieces that each call for an answer.',
      bn: 'কুরআনের আর কোথাও নেই এমন এক ছন্দ: মানুষ ও জিনকে করা একটিমাত্র প্রশ্ন ফিরে আসে একত্রিশবার। এতে রহমতের দীর্ঘ তালিকা ভাগ হয়ে যায় ছোট ছোট জোড়ায়, আর প্রতিটি জোড়াই জবাব চায়।',
    },
    alt: [
      { name: "'Arus al-Quran", en: 'Reported by as-Suyuti from al-Bayhaqi as "the bride of the Quran", in a hadith graded weak; Ibn Ashur notes this is praise for the surah, not a name for it.', bn: 'সুয়ূতী বাইহাকীর সূত্রে একে "কুরআনের কনে" বলে উল্লেখ করেছেন, তবে হাদিসটি দুর্বল। ইবনে আশূর বলেছেন, এটি সূরার প্রশংসা, নাম নয়।' },
    ],
    refs: ['55:1'],
  },
  56: {
    meaning: { en: 'The Inevitable Event', bn: 'অবশ্যম্ভাবী ঘটনা' },
    source: {
      en: 'From the opening line, when the Event befalls, idha waqa\'at al-waqi\'ah, in 56:1.',
      bn: '৫৬:১-এর সূচনা পঙ্‌ক্তি থেকে: যখন সেই ঘটনা ঘটবে — ইযা ওয়াকাআতিল ওয়াকিআহ।',
    },
    why: {
      en: 'Al-Waqi\'ah literally means the thing that falls, the event that happens without fail, and it is one of the Quran\'s several names for the Day of Judgement. The word is taken from the first verse in the usual way, but it also states the subject, because most of the surah describes that day and sorts humanity into three groups. So this is one of the surahs where the marker word and the theme happen to agree, though the choice was still driven by the opening.',
      bn: 'আল-ওয়াকিআ শব্দের আক্ষরিক অর্থ যা এসে পড়ে, অর্থাৎ যে ঘটনা ঘটবেই। কুরআনে কিয়ামতের যে কয়েকটি নাম আছে, এটি তার একটি। শব্দটি প্রথম আয়াত থেকে নেওয়া, স্বাভাবিক নিয়মেই। তবে এটি সূরার বিষয়ও বলে দেয়, কারণ সূরার বেশিরভাগ জুড়ে আছে সেই দিনের বর্ণনা, আর মানুষকে তিন দলে ভাগ করে দেখানো। তাই এটি সেই সূরাগুলোর একটি, যেখানে চিহ্ন-শব্দ আর মূল বিষয় মিলে গেছে, যদিও শব্দটি বাছাইয়ের কারণ এখানেও শুরুর আয়াতই।',
    },
    signal: {
      en: 'Expect humanity sorted into three ranks, the foremost, the people of the right and the people of the left, then a challenge based on the seed, the water and the fire.',
      bn: 'মানুষকে তিন শ্রেণিতে ভাগ করা: অগ্রগামীরা, ডান দিকের দল আর বাঁ দিকের দল। তারপর বীজ, পানি ও আগুন দিয়ে এক চ্যালেঞ্জ।',
    },
    alt: [],
    refs: ['56:1'],
  },
  57: {
    meaning: { en: 'Iron', bn: 'লোহা' },
    source: {
      en: 'From the statement that Allah sent down iron, in which there is great strength and benefits for people, in 57:25.',
      bn: '৫৭:২৫ আয়াত থেকে, যেখানে আল্লাহ বলছেন, তিনি লোহা নাজিল করেছেন, যাতে আছে প্রচণ্ড শক্তি আর মানুষের জন্য নানা উপকার।',
    },
    why: {
      en: 'Iron is mentioned once, late in the surah, in a verse about messengers sent with the Book and the balance so that people may uphold justice, and iron sent down with them. The surah is otherwise about spending in the way of Allah, light on the Day of Judgement, and the danger of hearts growing hard. Naming it from a single metal in a single verse is classic marker naming, and the word is memorable precisely because it is so concrete among abstractions.',
      bn: 'লোহার কথা এসেছে একবারই, সূরার শেষদিকে। আয়াতটিতে আল্লাহ বলছেন, তিনি রাসূলদের পাঠিয়েছেন কিতাব ও মানদণ্ড দিয়ে, যাতে মানুষ ইনসাফ কায়েম করে, আর তাঁদের সঙ্গে লোহাও নাজিল করেছেন। এ ছাড়া সূরার আলোচনা আল্লাহর পথে খরচ, কিয়ামতের দিনের আলো, আর অন্তর কঠিন হয়ে যাওয়ার বিপদ নিয়ে। একটিমাত্র আয়াতের একটিমাত্র ধাতু থেকে নাম রাখা চিহ্ন-নামকরণের চেনা উদাহরণ। বিমূর্ত আলোচনার ভিড়ে এত বাস্তব একটি শব্দ বলেই তা সহজে মনে থাকে।',
    },
    signal: {
      en: 'A Medinan surah urging generosity before it is too late: light running ahead of the believers, a wall raised between them and the hypocrites, and a warning against hardened hearts.',
      bn: 'একটি মাদানী সূরা, যা দেরি হয়ে যাওয়ার আগেই দান করার তাগিদ দেয়: মুমিনদের সামনে ছুটে চলা আলো, তাদের আর মুনাফিকদের মাঝে তোলা প্রাচীর, আর কঠিন হয়ে যাওয়া অন্তর নিয়ে সতর্কবাণী।',
    },
    alt: [],
    refs: ['57:25'],
  },
  58: {
    meaning: { en: 'The Woman Who Pleads', bn: 'যে নারী আবেদন করেছিল' },
    source: {
      en: 'From the woman who argued her case with the Prophet about her husband and whose complaint Allah heard, in 58:1.',
      bn: '৫৮:১ আয়াত থেকে: সেই নারী, যিনি স্বামীর ব্যাপারে নবীজির কাছে নিজের পক্ষে যুক্তি দিয়ে ফরিয়াদ করেছিলেন, আর আল্লাহ যাঁর অভিযোগ শুনেছিলেন।',
    },
    why: {
      en: 'The name is read two ways: al-Mujadilah with a kasra, the woman who pleads, and al-Mujadalah with a fatha, the pleading itself. Ibn Ashur preferred the first, since the surah opens with the woman. She is not named in the verse, yet the whole surah is titled after her act of appealing, which is remarkable in itself. In Ubayy ibn Ka\'b\'s codex the surah was headed Az-Zihar instead, after the ruling that her case produced.',
      bn: 'নামটি দুইভাবে পড়া হয়: যের দিয়ে আল-মুজাদিলা, অর্থাৎ যে নারী ফরিয়াদ করেন; আর যবর দিয়ে আল-মুজাদালা, অর্থাৎ ফরিয়াদটাই। ইবনে আশূর প্রথমটিকেই প্রাধান্য দিয়েছেন, কারণ সূরা শুরুই হয়েছে ওই নারীকে দিয়ে। আয়াতে তাঁর নাম নেই, তবু গোটা সূরার নাম হয়েছে তাঁর ফরিয়াদের নামে। এটি নিজেই লক্ষ করার মতো। উবাই ইবনে কাবের মুসহাফে সূরাটির শিরোনাম ছিল আয-যিহার, অর্থাৎ তাঁর ঘটনা থেকে আসা বিধানের নামে।',
    },
    signal: {
      en: 'A Medinan surah that begins with one woman\'s complaint answered from above, then sets out the ruling on zihar, the manners of private talk, and the party of Allah.',
      bn: 'একটি মাদানী সূরা। শুরু হয় এক নারীর অভিযোগ দিয়ে, যার জবাব এসেছে আসমান থেকে। এরপর আসে যিহারের বিধান, গোপন শলাপরামর্শের আদব, আর আল্লাহর দলের পরিচয়।',
    },
    alt: [
      { name: 'Al-Mujadalah', en: 'The same title read with a fatha, meaning the pleading rather than the woman who pleads.', bn: 'একই নাম যবর দিয়ে পড়া; তখন অর্থ ফরিয়াদকারিণী নারী নয়, ফরিয়াদটাই।' },
      { name: 'Az-Zihar', en: 'The heading in the codex of Ubayy ibn Ka\'b, after the ruling on zihar set out in 58:2-4.', bn: 'উবাই ইবনে কাব-এর মুসহাফে ব্যবহৃত শিরোনাম, ৫৮:২-৪-এ বর্ণিত যিহারের বিধানের সূত্রে।' },
      { name: "Qad Sami'a", en: 'From its opening words; Ibn Ashur notes this name was widely used in the schools of Tunis.', bn: 'সূরার সূচনা শব্দ থেকে; ইবনে আশূর উল্লেখ করেছেন, তিউনিসের মক্তবগুলোতে এই নাম ব্যাপকভাবে প্রচলিত ছিল।' },
    ],
    refs: ['58:1', '58:2-4'],
  },
  59: {
    meaning: { en: 'The Gathering (Exile)', bn: 'সমাবেশ (নির্বাসন)' },
    source: {
      en: 'From the phrase li-awwali al-hashr, "at the first gathering", in 59:2, describing the driving out of Banu an-Nadir from Madinah.',
      bn: '৫৯:২ আয়াতের "লি-আউয়ালিল হাশর", অর্থাৎ "প্রথম সমাবেশের সময়" কথাটি থেকে। আয়াতটিতে মদীনা থেকে বনু নাযীর গোত্রকে বের করে দেওয়ার কথা বলা হয়েছে।',
    },
    why: {
      en: 'Al-Hashr means a gathering, and in 59:2 it names a driving-out: the assembling of the Jewish tribe Banu an-Nadir for expulsion from their strongholds beside Madinah after they broke their treaty. The word occurs there and nowhere else in the surah. Everything that follows is other business — the rule of the fay spoils, the praise of the Ansar who shared their homes, the hypocrites who promised the tribe help and delivered none, and the closing passage on the names of Allah. So the title is a marker taken from the episode that opens the surah, not a heading over its contents.',
      bn: 'আল-হাশর মানে সমবেত করা। ৫৯:২ আয়াতে শব্দটি এক বহিষ্কারের নাম: চুক্তি ভাঙার পর ইহুদি গোত্র বনু নাযীরকে মদীনার পাশের দুর্গগুলো থেকে জড়ো করে বের করে দেওয়া। শব্দটি সূরার আর কোথাও নেই। এরপর যা আসে, সবই ভিন্ন প্রসঙ্গ: ফাই সম্পদের বিধান; যে আনসাররা নিজেদের ঘর ভাগ করে দিয়েছিলেন, তাঁদের প্রশংসা; যে মুনাফিকরা গোত্রটিকে সাহায্যের কথা দিয়েও কথা রাখেনি, তাদের কথা; আর শেষে আল্লাহর নামগুলো নিয়ে একটি অংশ। তাই নামটি শুরুর ঘটনা থেকে নেওয়া চিহ্ন, বিষয়বস্তুর শিরোনাম নয়।',
    },
    signal: {
      en: 'Expect a Madinan surah built on a real confrontation — a broken pact, an exile, the sharing out of what was left behind — which then turns, without warning, into one of the great passages on the divine names.',
      bn: 'একটি মাদানী সূরা, যার ভিত্তি এক বাস্তব সংঘাত: ভাঙা চুক্তি, নির্বাসন, ফেলে যাওয়া সম্পদের বণ্টন। তারপর কোনো আভাস ছাড়াই সূরাটি মোড় নেয় আল্লাহর নামগুলো নিয়ে কুরআনের এক মহান অংশে।',
    },
    alt: [
      { name: 'Surat Bani an-Nadir', en: 'Ibn Abbas is reported in Sahih al-Bukhari as correcting a man who said "Surat al-Hashr" with the words "say: Surat an-Nadir", naming it after the tribe the opening verses describe.', bn: 'সহীহ বুখারীতে বর্ণিত আছে, এক ব্যক্তি "সূরা আল-হাশর" বললে ইবনে আব্বাস (রাঃ) তাকে শুধরে দিয়ে বলেছিলেন, "বলো, সূরা আন-নাযীর।" অর্থাৎ শুরুর আয়াতগুলোতে যে গোত্রের কথা আছে, তাদের নামে।' },
    ],
    refs: ['59:2'],
  },
  60: {
    meaning: { en: 'She Who Is Examined', bn: 'পরীক্ষিতা নারী' },
    source: {
      en: 'From the command in 60:10 to examine the believing women who arrive as emigrants; the woman so examined gives the surah its name.',
      bn: '৬০:১০ আয়াতে হিজরত করে আসা মুমিন নারীদের পরীক্ষা করে নেওয়ার নির্দেশ থেকে; যে নারীকে এভাবে পরীক্ষা করা হয়, তাঁর নামেই সূরার নাম।',
    },
    why: {
      en: 'The name is a passive participle — al-mumtahanah, the woman who is put to the test — and it points to a single instruction in verse ten: when believing women come over as emigrants, examine them, and do not send them back. The surah at large is about loyalty. It opens by rebuking Hatib ibn Abi Baltaah for writing secretly to Quraysh, holds up Ibrahim disowning his people as the pattern, and then permits kindness to those who never fought you. The title takes none of that. It takes the one figure who enters the surah as a person rather than a principle.',
      bn: 'নামটি কর্মবাচ্য রূপ: আল-মুমতাহানা, অর্থাৎ যে নারীকে পরীক্ষা করা হয়। এটি দশম আয়াতের একটিমাত্র নির্দেশের দিকে ইশারা করে: মুমিন নারীরা হিজরত করে এলে তাদের পরীক্ষা করে নাও, আর তাদের ফেরত পাঠিয়ো না। গোটা সূরার বিষয় আনুগত্য ও বন্ধুত্বের সীমা। শুরুতে হাতিব ইবনে আবি বালতাআ (রাঃ)-কে তিরস্কার করা হয়েছে, কারণ তিনি গোপনে কুরাইশকে চিঠি লিখেছিলেন। এরপর আদর্শ হিসেবে দেখানো হয়েছে ইবরাহীম (আঃ)-কে, যিনি নিজের কওমের সঙ্গে সম্পর্ক ছিন্ন করেছিলেন। শেষে অনুমতি দেওয়া হয়েছে, যারা কখনো মুসলমানদের বিরুদ্ধে যুদ্ধ করেনি, তাদের সঙ্গে সদাচরণের। নাম এর কিছুই নেয়নি। নিয়েছে সেই একজনকে, যিনি সূরায় আসেন নীতি হয়ে নয়, মানুষ হয়ে।',
    },
    signal: {
      en: 'Expect short, practical Madinan legislation about where allegiance ends and where courtesy still holds, framed by a case of leaked intelligence at one end and the pledge of the women at the other.',
      bn: 'ছোট ও বাস্তব মাদানী বিধান: আনুগত্যের সীমা কোথায় শেষ, আর সৌজন্য কোথায় তখনো বহাল। এক প্রান্তে গোপন খবর ফাঁস হওয়ার ঘটনা, অন্য প্রান্তে নারীদের বাইআত।',
    },
    alt: [
      { name: 'Al-Imtihan', en: 'The verbal noun of the same root: the surah of the examination, from the same command in 60:10.', bn: 'একই ধাতুর ক্রিয়াবাচক নাম — পরীক্ষার সূরা, ৬০:১০ আয়াতের সেই নির্দেশ থেকেই।' },
      { name: 'Al-Mawaddah', en: 'Reported, from the first verse, which forbids casting affection towards those at war with the believers.', bn: 'বর্ণিত নাম, প্রথম আয়াত থেকে, যেখানে মুমিনদের বিরুদ্ধে যুদ্ধরত লোকদের দিকে ভালোবাসার হাত বাড়াতে নিষেধ করা হয়েছে।' },
    ],
    refs: ['60:1', '60:10'],
  },
  61: {
    meaning: { en: 'The Ranks', bn: 'সারি' },
    source: {
      en: 'From 61:4, which says Allah loves those who fight in His cause in a rank, as though they were a solid welded structure.',
      bn: '৬১:৪ আয়াত থেকে — আল্লাহ তাদের ভালোবাসেন যারা তাঁর পথে সারিবদ্ধ হয়ে লড়ে, যেন তারা সীসাঢালা এক প্রাচীর।',
    },
    why: {
      en: 'Saff is a line of men standing shoulder to shoulder, the same word used for the rows of prayer and for the line of battle. It appears once, in the fourth verse, and inside a simile rather than a command. The surah itself is about the gap between what people say and what they do, then a trade offered that saves from punishment, then the disciples answering Isa when he asked who would help. The title fastens on the image and not on the argument: one word carrying discipline, cohesion, and the refusal to leave a gap in the line.',
      bn: 'সাফ মানে কাঁধে কাঁধ মিলিয়ে দাঁড়ানো মানুষের সারি। নামাজের কাতার আর যুদ্ধের সারি, দুটোর জন্যই এই এক শব্দ। সূরায় শব্দটি এসেছে একবারই, চতুর্থ আয়াতে, তাও কোনো নির্দেশ হিসেবে নয়, একটি উপমার ভেতরে। সূরার আসল আলোচনা মানুষের কথা আর কাজের ফারাক নিয়ে; এরপর এমন এক ব্যবসার প্রস্তাব, যা আজাব থেকে বাঁচায়; আর শেষে ঈসা (আঃ) যখন জানতে চাইলেন কে তাঁকে সাহায্য করবে, তখন হাওয়ারীদের সাড়া। নামটি যুক্তিকে নয়, ছবিটিকে ধরেছে। একটিমাত্র শব্দ, যার ভেতরে আছে শৃঙ্খলা, ঐক্য, আর সারিতে কোনো ফাঁক না রাখার দৃঢ়তা।',
    },
    signal: {
      en: 'Expect a short Madinan surah that presses one question: does your conduct match your claim? It moves from rebuke to recruitment, and ends by asking the reader to be a helper of Allah as the disciples were.',
      bn: 'ছোট একটি মাদানী সূরা, যা একটি প্রশ্নেই বারবার জোর দেয়: আপনার কাজ কি আপনার দাবির সঙ্গে মেলে? তিরস্কার দিয়ে শুরু করে সূরাটি দলে শামিল হওয়ার ডাক দেয়, আর শেষে পাঠককে বলে হাওয়ারীদের মতো আল্লাহর সাহায্যকারী হতে।',
    },
    alt: [
      { name: 'Surat al-Hawariyyin', en: 'Reported, after the disciples of Isa named in the closing verse, 61:14.', bn: 'বর্ণিত নাম, শেষ আয়াত ৬১:১৪-তে উল্লিখিত ঈসা (আঃ)-এর হাওয়ারীদের নামে।' },
    ],
    refs: ['61:4', '61:14'],
  },
  62: {
    meaning: { en: 'The Congregation (Friday)', bn: 'জুমুআ (শুক্রবার)' },
    source: {
      en: "From the ruling in 62:9: when the call is made for prayer on the day of Jumu'ah, leave off trade and hasten to the remembrance of Allah.",
      bn: '৬২:৯ আয়াতের বিধান থেকে: জুমুআর দিনে নামাজের আজান হলে বেচাকেনা ছেড়ে আল্লাহর জিকিরের দিকে ছুটে যাও।',
    },
    why: {
      en: 'Here the name is the ruling. Most surah titles are labels picked from a striking word; this one is the piece of law the surah is remembered for. Jumuah means the day of gathering, and the ninth verse fixes it as a legal term: at the call, leave the sale and come. The rest of the surah is a build-up to that — creation glorifying its Maker, the unlettered Prophet raised among his own, a warning to a community that carried a book it did not live by, and finally the congregation that drifted off towards a caravan, which is exactly why the ruling was needed.',
      bn: 'এখানে নামটিই বিধান। বেশিরভাগ সূরার নাম কোনো চোখে পড়া শব্দ থেকে নেওয়া চিহ্ন মাত্র। কিন্তু এই নামটি সেই বিধান, যার জন্য সূরাটি সবার মনে আছে। জুমুআ মানে একত্র হওয়ার দিন, আর নবম আয়াত একে শরীয়তের পরিভাষা বানিয়ে দেয়: আজান হলে বেচাকেনা ছাড়ো, চলে এসো। সূরার বাকি অংশ ধাপে ধাপে সেদিকেই এগোয়। সৃষ্টিজগৎ তার স্রষ্টার তাসবীহ করছে; নিরক্ষর জাতির মধ্যে তাদেরই একজনকে নবী করে পাঠানো হয়েছে; এক সম্প্রদায়কে সতর্ক করা হয়েছে, যারা কিতাব বহন করেছে কিন্তু সে অনুযায়ী চলেনি; আর সবশেষে সেই জামাত, যারা বাণিজ্য-কাফেলার দিকে সরে গিয়েছিল। ঠিক এ কারণেই বিধানটির প্রয়োজন হয়েছিল।',
    },
    signal: {
      en: 'Expect eleven verses that move from praise to law: the Friday gathering is not a custom here but a command, with a named beginning, a named duty and a named end.',
      bn: 'এগারোটি আয়াত, যা প্রশংসা থেকে বিধানে পৌঁছায়। জুমুআর জমায়েত এখানে কোনো প্রথা নয়, আল্লাহর হুকুম; এর শুরু, এর দায়িত্ব আর এর শেষ, সবই স্পষ্ট করে বলা।',
    },
    alt: [],
    refs: ['62:9', '62:11'],
  },
  63: {
    meaning: { en: 'The Hypocrites', bn: 'মুনাফিকরা' },
    source: {
      en: 'From 63:1, where the hypocrites come professing belief, revealed after what was said on the return from the Banu al-Mustaliq expedition.',
      bn: '৬৩:১ আয়াত থেকে, যেখানে মুনাফিকরা এসে ঈমানের দাবি করে। আয়াতটি নাজিল হয় বনু মুস্তালিক অভিযান থেকে ফেরার পথে বলা এক কথার পর।',
    },
    why: {
      en: 'The name is the subject, but it is also an episode. On the way back from the Banu al-Mustaliq expedition Abdullah ibn Ubayy said that once they reached Madinah the mightier would drive out the meaner. Zayd ibn Arqam, then a boy, reported it and was disbelieved; the surah came down quoting the sentence back in 63:8 and vindicating him. So the title names both a category and a moment. It is unusually blunt: the Quran rarely titles a surah with the thing it is exposing, and here the exposure is the whole point.',
      bn: 'নামটি সূরার বিষয়, আবার একটি ঘটনাও। বনু মুস্তালিক অভিযান থেকে ফেরার পথে আবদুল্লাহ ইবনে উবাই বলেছিল, মদীনায় পৌঁছলে শক্তিশালীরা দুর্বলদের বের করে দেবে। তখনকার বালক যায়েদ ইবনে আরকাম (রাঃ) কথাটি জানিয়ে দেন, কিন্তু কেউ তাঁকে বিশ্বাস করেনি। তখন সূরাটি নাজিল হয়; ৬৩:৮ আয়াতে ঠিক ওই কথাটিই উদ্ধৃত করে আল্লাহ তাঁকে সত্যবাদী প্রমাণ করেন। তাই নামটি একসঙ্গে একটি দলেরও নাম, একটি মুহূর্তেরও। নামটি অস্বাভাবিক রকম সোজাসাপটা: কুরআন সাধারণত যাদের মুখোশ খুলে দেয়, তাদের নামে সূরার নাম রাখে না। কিন্তু এখানে মুখোশ খুলে দেওয়াটাই আসল উদ্দেশ্য।',
    },
    signal: {
      en: 'Expect a portrait drawn from life rather than a doctrine: men whose bearing impresses and whose words are borrowed, followed by a warning to the believers not to let wealth and children distract them.',
      bn: 'মতবাদ নয়, বাস্তব জীবন থেকে আঁকা এক ছবি: এমন মানুষ, যাদের চালচলন দেখে মুগ্ধ হতে হয়, কিন্তু কথাগুলো ধার করা। শেষে মুমিনদের সতর্ক করা হয়েছে, ধন-সম্পদ আর সন্তান যেন তাদের গাফেল না করে।',
    },
    alt: [],
    refs: ['63:1', '63:8'],
  },
  64: {
    meaning: { en: 'Mutual Loss and Gain', bn: 'পারস্পরিক লাভ-ক্ষতি' },
    source: {
      en: 'From yawm at-taghabun, the day of mutual dispossession, named once in 64:9.',
      bn: '৬৪:৯ আয়াতে একবারই উল্লিখিত "ইয়াওমুত তাগাবুন" — পারস্পরিক ঠকে যাওয়ার দিন — থেকে।',
    },
    why: {
      en: 'Taghabun is built on ghabn, the loss a man takes in a bargain without noticing it at the time. The Quran turns a trader word into a name for the Day of Gathering: the day the swindle becomes visible, when the cheated see what they sold and the shrewd see what they bought. It occurs once, in the ninth verse, and the surah keeps that commercial edge to the end — spend, lend Allah a goodly loan, and know that wealth and children can be the very thing that costs you. Naming a surah about resurrection from a merchant taking a bad deal is deliberate understatement.',
      bn: 'তাগাবুন শব্দের মূলে আছে "গাবন": কেনাবেচায় এমন লোকসান, যা মানুষ তখন টেরই পায় না। কুরআন এই ব্যবসার শব্দটিকেই হাশরের দিনের নাম বানিয়েছে। সেদিন ঠকে যাওয়াটা চোখের সামনে ধরা পড়বে: যে ঠকেছে সে দেখবে কী বেচে দিয়েছিল, আর যে বুদ্ধিমান সে দেখবে কী কিনেছিল। শব্দটি এসেছে একবারই, নবম আয়াতে। আর সূরাটি শেষ পর্যন্ত সেই ব্যবসায়িক সুর ধরে রাখে: খরচ করো, আল্লাহকে উত্তম ঋণ দাও, আর জেনে রাখো, ধন-সম্পদ আর সন্তানই হয়তো তোমার সবচেয়ে বড় লোকসানের কারণ। পুনরুত্থানের মতো বিষয়ের সূরার নাম রাখা হয়েছে লোকসানি সওদা করা এক ব্যবসায়ীর শব্দ থেকে; এ ইচ্ছা করেই কম করে বলা।',
    },
    signal: {
      en: 'Expect the standard Madinan themes of faith, obedience and spending, held together by an accounting metaphor: everything here is weighed as profit or loss on a day when the books are finally opened.',
      bn: 'ঈমান, আনুগত্য আর দান-খরচের চেনা মাদানী বিষয়গুলো, যা বাঁধা পড়েছে একটি হিসাবের রূপকে। এখানে সবকিছু মাপা হয় লাভ বা লোকসান হিসেবে, সেই দিনের কথা মাথায় রেখে, যেদিন শেষমেশ খাতা খোলা হবে।',
    },
    alt: [],
    refs: ['64:9', '64:17'],
  },
  65: {
    meaning: { en: 'Divorce', bn: 'তালাক' },
    source: {
      en: 'From the opening address in 65:1, which sets out when divorce may be pronounced and how the waiting period is to be counted.',
      bn: '৬৫:১ আয়াতের শুরুর সম্বোধন থেকে, যেখানে বলে দেওয়া হয়েছে কখন তালাক দেওয়া যাবে আর ইদ্দত কীভাবে গুনতে হবে।',
    },
    why: {
      en: 'The name is the ruling, not a stray word. From its first verse the surah legislates: divorce at the beginning of the waiting period, count the term exactly, do not turn the woman out of her home and do not let her leave. The precision is striking even for Madinan law — house, term, maintenance, nursing, witnesses, and the pregnant woman whose term ends at delivery. Threaded between the clauses are some of the most quoted lines in the Quran about a way out and provision from where one does not expect. The title warns you that this is a chapter of procedure, and that the procedure is worship.',
      bn: 'এখানে নামটি কোনো এলোমেলো শব্দ নয়, খোদ বিধান। প্রথম আয়াত থেকেই সূরাটি আইন দিতে শুরু করে: ইদ্দতের শুরুতে তালাক দাও, মেয়াদ ঠিকঠাক গুনে রাখো, নারীকে তার ঘর থেকে বের করে দিয়ো না, আর সে নিজেও যেন বেরিয়ে না যায়। মাদানী বিধানের মধ্যেও এত খুঁটিনাটি চোখে পড়ার মতো: থাকার জায়গা, মেয়াদ, খরচপাতি, দুধ খাওয়ানো, সাক্ষী, আর গর্ভবতী নারী, যার ইদ্দত শেষ হয় সন্তান প্রসবে। এসব ধারার ফাঁকে ফাঁকেই আছে কুরআনের সবচেয়ে বেশি উদ্ধৃত কয়েকটি বাক্য: বের হওয়ার পথ, আর এমন জায়গা থেকে রিজিক, যা মানুষ কল্পনাও করে না। নামটি আগেই জানিয়ে দেয়, এটি নিয়মকানুনের অধ্যায়, আর এই নিয়ম মানাটাই ইবাদত।',
    },
    signal: {
      en: 'Expect law delivered at close range, on the hardest days of a household, with the reminder that the one who fears Allah is given a way out placed in the middle of the clauses rather than at the end.',
      bn: 'খুব কাছ থেকে দেওয়া বিধান, সংসারের সবচেয়ে কঠিন দিনগুলোর জন্য। আর যে আল্লাহকে ভয় করে, তার জন্য পথ বের করে দেওয়ার আশ্বাসটি রাখা হয়েছে ধারাগুলোর শেষে নয়, ঠিক মাঝখানে।',
    },
    alt: [
      { name: 'Surat an-Nisa al-Qusra', en: 'Ibn Masud is reported in Sahih al-Bukhari to have called it the shorter Surat an-Nisa; the name fits a surah that revisits family rulings like those of the fourth surah at a fraction of its length.', bn: 'ইবনে মাসঊদ (রাঃ) একে "ছোট সূরা নিসা" বলেছেন বলে সহীহ বুখারীতে বর্ণিত আছে। চতুর্থ সূরার মতো পারিবারিক বিধান এখানে অনেক ছোট পরিসরে আবার এসেছে, তাই নামটি মানানসই।' },
    ],
    refs: ['65:1', '65:4'],
  },
  66: {
    meaning: { en: 'The Prohibition', bn: 'নিষিদ্ধ করা' },
    source: {
      en: 'From 66:1, where the Prophet is asked why he forbids to himself what Allah has made lawful for him.',
      bn: '৬৬:১ আয়াত থেকে, যেখানে নবী ﷺ-কে জিজ্ঞেস করা হয়েছে, আল্লাহ যা তাঁর জন্য হালাল করেছেন তা তিনি কেন নিজের উপর নিষিদ্ধ করছেন।',
    },
    why: {
      en: 'The title is the verbal noun of the verb in the first verse: tahrim, declaring a thing forbidden. The Prophet had bound himself by an oath to give up something lawful in order to please his wives, and the surah opens by releasing him from it and prescribing the expiation for an oath. What exactly he gave up is reported differently in different narrations, and the surah itself does not name it, so the honest answer is that the object is not settled. What the surah does settle is the principle: what Allah has made lawful is not for a man to forbid, not even for him.',
      bn: 'নামটি প্রথম আয়াতের ক্রিয়াটির ক্রিয়াবাচক বিশেষ্য: তাহরীম, অর্থাৎ কোনো কিছুকে হারাম ঘোষণা করা। স্ত্রীদের খুশি করতে নবী ﷺ কসম খেয়ে একটি হালাল জিনিস নিজের জন্য ছেড়ে দিয়েছিলেন। সূরাটি শুরুই হয় তাঁকে সেই কসম থেকে মুক্ত করে, আর কসম ভাঙার কাফফারা ঠিক করে দিয়ে। ঠিক কোন জিনিসটি তিনি ছেড়েছিলেন, তা নিয়ে বর্ণনাগুলো একেক রকম, আর সূরা নিজে তার নাম বলেনি। তাই সৎ উত্তর হলো, বিষয়টি নিশ্চিত নয়। তবে সূরা যা নিশ্চিত করে, তা হলো নীতি: আল্লাহ যা হালাল করেছেন, তা হারাম করার অধিকার কোনো মানুষের নেই, এমনকি তাঁরও নয়।',
    },
    signal: {
      en: 'Expect a short Madinan surah that treats a household matter as law: an oath dissolved, a confidence disclosed, a call to turn back addressed first to the Prophet\'s wives and then to all believers, closing with four women set as warnings and as examples.',
      bn: 'ছোট একটি মাদানী সূরা, যেখানে ঘরের একটি বিষয়কে বিধানের মর্যাদা দেওয়া হয়েছে: কসম ভেঙে দেওয়া, গোপন কথা ফাঁস হওয়া, আর তওবার ডাক, প্রথমে নবী-পত্নীদের প্রতি, পরে সব মুমিনের প্রতি। শেষে চারজন নারী: দুজন সতর্কতার দৃষ্টান্ত, দুজন অনুসরণের আদর্শ।',
    },
    alt: [
      { name: 'Surat an-Nabi', en: 'Reported, because the surah opens by addressing the Prophet directly; at-Tahrim is the name used in the manuscript and recitation tradition.', bn: 'বর্ণিত নাম, কারণ সূরাটি সরাসরি নবী ﷺ-কে সম্বোধন করে শুরু হয়; তবে পাণ্ডুলিপি ও কিরাআতের ধারায় প্রচলিত নাম আত-তাহরীম।' },
    ],
    refs: ['66:1', '66:2', '66:11'],
  },
  67: {
    meaning: { en: 'The Sovereignty', bn: 'সার্বভৌম কর্তৃত্ব' },
    source: {
      en: 'From al-mulk in the opening verse, 67:1: blessed is He in whose hand is the dominion.',
      bn: 'প্রথম আয়াত ৬৭:১-এর "আল-মুলক" শব্দ থেকে — বরকতময় তিনি, যাঁর হাতে সমস্ত কর্তৃত্ব।',
    },
    why: {
      en: 'Mulk is ownership joined to the power to dispose — possession and rule in one word — and the surah places all of it in a single hand in its first line. Unlike most titles in this part of the Quran, this one does summarise. What follows is a survey of that dominion: seven heavens without a flaw, an earth made docile underfoot, birds held up in the air, water that could be drawn away tomorrow. Twice the reader is told to look again and find a crack. The older way of citing it was simply Tabarak, after the first word.',
      bn: 'মুলক মানে মালিকানা, সঙ্গে তা ইচ্ছেমতো পরিচালনার ক্ষমতা; অধিকার আর শাসন, দুটোই এক শব্দে। সূরাটি প্রথম বাক্যেই এর সবটুকু একটিমাত্র হাতে তুলে দেয়। কুরআনের এই অংশের বেশিরভাগ নামের মতো নয়, এই নামটি সত্যিই বিষয়বস্তুর সারকথা বলে। এরপর আসে সেই রাজত্বেরই খতিয়ান: সাত আকাশ, কোথাও কোনো খুঁত নেই; পায়ের নিচে বশ মানানো জমিন; শূন্যে ভেসে থাকা পাখি; আর এমন পানি, যা কালই সরিয়ে নেওয়া যেতে পারে। দুবার পাঠককে বলা হয়, আবার তাকিয়ে দেখো, কোথাও কোনো ফাটল পাও কি না। আগের যুগে সূরাটিকে সাধারণত শুধু "তাবারাক" বলেই উল্লেখ করা হতো, প্রথম শব্দ ধরে।',
    },
    signal: {
      en: 'Expect thirty Meccan verses that argue from the order of the world to the authority behind it, and then from that authority to the seriousness of the fire and of the day one is asked what one did.',
      bn: 'ত্রিশটি মক্কী আয়াত। জগতের শৃঙ্খলা দেখিয়ে বোঝানো হয়, এর পেছনে আছে এক কর্তৃত্ব। তারপর সেই কর্তৃত্ব থেকে বোঝানো হয় জাহান্নাম কতটা গুরুতর, আর সেই দিনটিও, যেদিন জিজ্ঞেস করা হবে কে কী করেছে।',
    },
    alt: [
      { name: 'Tabarak', en: 'The first word of the surah, and the way the early generations usually referred to it.', bn: 'সূরার প্রথম শব্দ; পূর্ববর্তী প্রজন্ম সাধারণত এই নামেই সূরাটির উল্লেখ করতেন।' },
      { name: 'Al-Waqiyah, al-Maniah, al-Munjiyah', en: 'The shielder, the preventer, the deliverer. These come not from the wording of the surah but from reports about its virtue, that it guards its reciter from the punishment of the grave. Those reports are graded differently by the hadith critics, from acceptable to weak, so these are best cited as reported epithets rather than as established titles.', bn: 'রক্ষাকারিণী, প্রতিরোধকারিণী, মুক্তিদাত্রী। এই নামগুলো সূরার শব্দ থেকে আসেনি, এসেছে এর ফজিলতের বর্ণনা থেকে: সূরাটি তার পাঠককে কবরের আজাব থেকে রক্ষা করে। হাদিস-বিশারদদের কাছে এসব বর্ণনার মান একেক রকম, গ্রহণযোগ্য থেকে দুর্বল পর্যন্ত। তাই এগুলোকে প্রতিষ্ঠিত নাম হিসেবে নয়, বর্ণিত উপাধি হিসেবে উল্লেখ করাই ভালো।' },
    ],
    refs: ['67:1'],
  },
  68: {
    meaning: { en: 'The Pen', bn: 'কলম' },
    source: {
      en: 'From the oath in 68:1: Nun, by the pen and what they inscribe.',
      bn: '৬৮:১ আয়াতের শপথ থেকে — নূন। শপথ কলমের এবং তারা যা লেখে তার।',
    },
    why: {
      en: 'This surah carries two names and both come out of the first verse. Nun is a disjointed letter, and like all of them its meaning is not established; the sound position is to affirm it as revealed without claiming to know what it stands for, and the popular glosses — an inkwell, a great fish — are reports, not settled facts. Al-Qalam is the other half of the same verse, the pen sworn by. Naming the surah from the pen fits it closely: the Prophet was being called possessed, and the answer opens by swearing on the act of writing itself.',
      bn: 'এই সূরার দুটি নাম, আর দুটিই প্রথম আয়াত থেকে। "নূন" একটি বিচ্ছিন্ন হরফ (হুরুফে মুকাত্তাআত); অন্য সব বিচ্ছিন্ন হরফের মতো এর অর্থও নিশ্চিত নয়। নিরাপদ অবস্থান হলো, এটি আল্লাহর নাজিল করা বলে মেনে নেওয়া, আর এর অর্থ জানার দাবি না করা। দোয়াত বা বিরাট মাছের মতো প্রচলিত ব্যাখ্যাগুলো কেবল বর্ণনা, প্রতিষ্ঠিত তথ্য নয়। "আল-কলম" একই আয়াতের বাকি অংশ, সেই কলম, যার শপথ করা হয়েছে। কলমের নামে সূরার নাম এখানে খুব মানানসই: নবী ﷺ-কে পাগল বলা হচ্ছিল, আর জবাব শুরুই হয় লেখার শপথ দিয়ে।',
    },
    signal: {
      en: 'Expect a defence of the Prophet against the charge of madness, a warning story about the owners of the garden who tried to harvest before the poor could come, and a call to patience that recalls Yunus without naming him.',
      bn: 'পাগল বলার অভিযোগের জবাবে নবী ﷺ-এর পক্ষে কথা; সেই বাগানমালিকদের শিক্ষণীয় কাহিনি, যারা গরিবরা আসার আগেই ফসল তুলে ফেলতে চেয়েছিল; আর সবরের ডাক, যেখানে নাম না নিয়েই ইউনুস (আঃ)-এর কথা মনে করিয়ে দেওয়া হয়েছে।',
    },
    alt: [
      { name: 'Nun', en: 'The disjointed letter the surah opens with. Both names are in circulation and both are drawn from the same verse, one from the letter and one from the object of the oath.', bn: 'সূরার সূচনার বিচ্ছিন্ন অক্ষর। দুটি নামই প্রচলিত এবং দুটিই একই আয়াত থেকে — একটি অক্ষর থেকে, অন্যটি শপথের বস্তু থেকে।' },
    ],
    refs: ['68:1', '68:2'],
  },
  69: {
    meaning: { en: 'The Inevitable Reality', bn: 'অবধারিত সত্য' },
    source: {
      en: 'From the opening word of 69:1, al-Haqqah, a name for the Day of Judgement repeated through the first three verses.',
      bn: '৬৯:১ আয়াতের প্রথম শব্দ "আল-হাক্কাহ" থেকে — কিয়ামতের একটি নাম, যা প্রথম তিন আয়াতে বারবার এসেছে।',
    },
    why: {
      en: 'Al-Haqqah is built on haqq, the true and the due, and the feminine form names the event that must come true. It is not a description of the contents so much as the surah\'s first word, struck three times: the Reality; what is the Reality; and what will make you know what the Reality is. That triple beat is a device for something the mind cannot take the measure of. Only then does the surah name the peoples for whom it already arrived — Thamud, Ad, Pharaoh — before the records handed out in the right hand and the left.',
      bn: 'আল-হাক্কাহ শব্দের মূলে আছে "হক্ক": যা সত্য, যা প্রাপ্য। স্ত্রীবাচক রূপটি সেই ঘটনার নাম, যা সত্য হয়ে ঘটবেই। এটি বিষয়বস্তুর বর্ণনা যতটা, তার চেয়ে বেশি সূরার প্রথম শব্দ, যা পরপর তিনবার আঘাত করে: আল-হাক্কাহ। কী সেই আল-হাক্কাহ? আর কিসে তোমাকে জানাবে, আল-হাক্কাহ কী? এই তিনবারের আঘাত এমন এক বিষয়ের জন্য, যার মাপ মানুষের মন ধরতে পারে না। এর পরেই সূরা সেই জাতিগুলোর নাম নেয়, যাদের উপর তা আগেই নেমে এসেছে: সামুদ, আদ, ফেরাউন। তারপর আসে ডান হাতে আর বাম হাতে আমলনামা দেওয়ার দৃশ্য।',
    },
    signal: {
      en: 'Expect the Day of Judgement approached as an event rather than a doctrine: earlier nations destroyed, the sky splitting, the throne borne by eight, and two men reading out what their own records say.',
      bn: 'কিয়ামতকে মতবাদ হিসেবে নয়, ঘটনা হিসেবে দেখা: আগের জাতিগুলোর ধ্বংস, ফেটে যাওয়া আকাশ, আটজনের বহন করা আরশ, আর দুজন মানুষ, যারা নিজেদের আমলনামা পড়ে শোনাচ্ছে।',
    },
    alt: [],
    refs: ['69:1', '69:3'],
  },
  70: {
    meaning: { en: 'The Ascending Ways', bn: 'ঊর্ধ্বারোহণের সোপান' },
    source: {
      en: 'From dhi al-maarij in 70:3, Lord of the ways of ascent, up which the angels and the Spirit rise in 70:4.',
      bn: '৭০:৩ আয়াতের "যিল মাআরিজ", অর্থাৎ ঊর্ধ্বে ওঠার পথগুলোর মালিক, সেখান থেকে। ৭০:৪ আয়াতে এই পথ বেয়েই ফেরেশতারা ও রূহ উপরে ওঠেন।',
    },
    why: {
      en: 'Maarij is the plural of miraj, a ladder or a flight of stairs, and it arrives in the third verse as a description of Allah: from Him, the Lord of the ascending ways. The next verse gives the picture, the angels and the Spirit climbing to Him on a day whose measure is fifty thousand years. The name is a marker lifted from a phrase, not a summary. The surah is about a mocker who demanded the punishment, the distance between his impatience and that measure of time, and the settled qualities of those who are constant in prayer.',
      bn: 'মাআরিজ হলো "মিরাজ"-এর বহুবচন: সিঁড়ি, বা ধাপে ধাপে ওঠার পথ। শব্দটি আসে তৃতীয় আয়াতে, আল্লাহর পরিচয় হিসেবে: তিনি ঊর্ধ্বারোহণের পথগুলোর মালিক। পরের আয়াতেই ছবিটি স্পষ্ট হয়: ফেরেশতারা ও রূহ তাঁর দিকে উঠে যান এমন এক দিনে, যার পরিমাণ পঞ্চাশ হাজার বছর। নামটি একটি বাক্যাংশ থেকে তুলে নেওয়া চিহ্ন, সারসংক্ষেপ নয়। সূরার বিষয় হলো এক বিদ্রূপকারী, যে নিজেই আজাব চেয়ে বসেছিল; তার অধৈর্য আর ওই সময়ের মাপের মধ্যে বিশাল ফারাক; আর যারা নামাজে অবিচল, তাদের পাকা গুণগুলো।',
    },
    signal: {
      en: 'Expect a Meccan surah answering a taunt: the punishment asked for is coming, but on a scale that makes the taunt look small, and the reader is handed a list of the traits that survive that day.',
      bn: 'এক বিদ্রূপের জবাবে একটি মক্কী সূরা: যে আজাব চাওয়া হয়েছে তা আসছেই, তবে এমন মাপে, যার সামনে বিদ্রূপটা তুচ্ছ হয়ে যায়। আর পাঠকের হাতে তুলে দেওয়া হয় সেই গুণগুলোর তালিকা, যা নিয়ে সেদিন টিকে থাকা যায়।',
    },
    alt: [
      { name: 'Sa\'ala Sa\'ilun', en: 'The surah cited by its opening words, in the old habit of naming a chapter from how it begins.', bn: 'সূরার প্রথম শব্দগুলো দিয়ে উল্লেখ — সূচনা দিয়ে সূরার নাম রাখার পুরনো রীতি অনুসারে।' },
      { name: 'Al-Waqi', en: 'Reported, from the punishment described in the first verse as bound to fall.', bn: 'বর্ণিত নাম, প্রথম আয়াত থেকে, যেখানে বলা হয়েছে আজাব অবশ্যই নেমে আসবে।' },
    ],
    refs: ['70:1', '70:3', '70:4'],
  },
  71: {
    meaning: { en: 'Noah', bn: 'নূহ (আঃ)' },
    source: {
      en: 'Named after the prophet Nuh, sent to his people in 71:1, whose mission and closing prayer fill the whole surah.',
      bn: '৭১:১ আয়াতে নিজের কওমের কাছে পাঠানো নবী নূহ (আঃ)-এর নামে। তাঁর দাওয়াত আর শেষ দোয়াই গোটা সূরা জুড়ে।',
    },
    why: {
      en: 'This is one of the surahs where the name and the subject are the same thing. Twenty-eight verses cover a single prophet\'s work: the warning, the long years of calling by night and by day, in public and in private, the people putting their fingers in their ears, covering themselves with their garments and clinging to idols named one by one, and at the end the prayer of a man who has exhausted every approach. Most surah titles are labels pulled from a passing word. Here nothing is pulled — the surah is about Nuh from first verse to last, and the title simply says so.',
      bn: 'এটি সেই অল্প কয়েকটি সূরার একটি, যেখানে নাম আর বিষয় একই। আটাশটি আয়াত জুড়ে একজন নবীরই কাজের বিবরণ: সতর্কবাণী; রাতে-দিনে, প্রকাশ্যে-গোপনে বছরের পর বছর দাওয়াত; কওমের লোকেরা কানে আঙুল দিয়েছে, কাপড়ে মুখ ঢেকেছে, আর এক এক করে নাম ধরে বলা মূর্তিগুলো আঁকড়ে ধরেছে; শেষে এমন এক মানুষের দোয়া, যিনি সম্ভাব্য সব পথ চেষ্টা করে ফেলেছেন। বেশিরভাগ সূরার নাম প্রসঙ্গক্রমে আসা কোনো শব্দ থেকে তুলে নেওয়া চিহ্ন। এখানে আলাদা করে কিছু তুলতে হয়নি। প্রথম আয়াত থেকে শেষ আয়াত পর্যন্ত সূরাটি নূহ (আঃ)-কে নিয়েই, আর নামটি শুধু সেটুকুই বলে।',
    },
    signal: {
      en: 'Expect a case study in preaching rather than a narrative of the flood: the methods tried, the arguments used, the response received, and the point at which a prophet hands the matter back to his Lord.',
      bn: 'প্লাবনের কাহিনি নয়, বরং দাওয়াতের একটি বাস্তব দৃষ্টান্ত: কোন কোন পদ্ধতি চেষ্টা করা হলো, কী যুক্তি দেওয়া হলো, কী সাড়া মিলল, আর কোন পর্যায়ে এসে একজন নবী বিষয়টি তাঁর রবের হাতে ছেড়ে দেন।',
    },
    alt: [],
    refs: ['71:1', '71:26'],
  },
  72: {
    meaning: { en: 'The Jinn', bn: 'জিন' },
    source: {
      en: 'From 72:1, where the Prophet is told to announce that a company of the jinn listened to the Quran.',
      bn: '৭২:১ আয়াত থেকে, যেখানে নবী ﷺ-কে ঘোষণা করতে বলা হয়েছে যে জিনদের একটি দল কুরআন শুনেছে।',
    },
    why: {
      en: 'The word stands in the first verse and gives the surah its name, but the striking thing is what comes next: for roughly half its length the jinn speak for themselves, quoted directly, reporting what they heard and what it overturned for them. They correct their own former beliefs about the heavens, about men seeking refuge with them, about the factions among them. The title marks the surah by its listeners rather than by its message, which is the usual Quranic habit — a chapter takes its label from whatever is most distinctive on the surface.',
      bn: 'শব্দটি আছে প্রথম আয়াতেই, আর সেখান থেকেই সূরার নাম। কিন্তু চমকের বিষয় এর পরের অংশ। প্রায় অর্ধেক সূরা জুড়ে জিনরা নিজেরাই কথা বলে; তাদের কথা সরাসরি উদ্ধৃত হয়েছে। তারা জানায়, কী শুনেছে, আর তাতে তাদের কোন কোন ধারণা উল্টে গেছে। তারা নিজেদের আগের বিশ্বাস শুধরে নেয়: আকাশ নিয়ে, মানুষ যে তাদের কাছে আশ্রয় চাইত তা নিয়ে, আর নিজেদের মধ্যকার নানা দল নিয়ে। নামটি সূরাকে চেনায় তার বার্তা দিয়ে নয়, তার শ্রোতাদের দিয়ে। এটাই কুরআনের চেনা রীতি: উপরিভাগে যা সবচেয়ে আলাদা, নাম আসে সেখান থেকে।',
    },
    signal: {
      en: 'Expect testimony from an unseen audience, then a turn to the Prophet himself: the reach of the message beyond mankind, the guarding of the heavens, and the limits of what any messenger is given to know.',
      bn: 'অদৃশ্য এক শ্রোতাদলের সাক্ষ্য, তারপর আলোচনা ফেরে নবী ﷺ-এর দিকে: মানুষের গণ্ডি ছাড়িয়ে বার্তার বিস্তার, আকাশের পাহারা, আর কোনো রাসূলকে কতটুকু জানানো হয়, তার সীমা।',
    },
    alt: [],
    refs: ['72:1', '72:14'],
  },
  73: {
    meaning: { en: 'The Enwrapped One', bn: 'চাদরে আবৃত জন' },
    source: {
      en: 'From the address that opens 73:1, O you who are wrapped in your garment, spoken to the Prophet.',
      bn: '৭৩:১ আয়াতের শুরুর সম্বোধন থেকে: হে চাদরে আবৃত ব্যক্তি। কথাটি বলা হয়েছে নবী ﷺ-কে।',
    },
    why: {
      en: 'Muzzammil means one wrapped up in a cloak, and the surah opens by calling the Prophet by his posture rather than by his name or his office. The word occurs once and nowhere else. It belongs to a small family of surah titles taken from how the Quran addresses the Messenger, its twin being the chapter that follows it. What the address then does is take the wrapping away: stand the night, recite at a measured pace, bear what they say and part from them gracefully. The name preserves the moment of rest just before the command that ends it.',
      bn: 'মুযযাম্মিল মানে চাদর জড়িয়ে থাকা মানুষ। সূরাটি নবী ﷺ-কে ডাকে তাঁর নাম বা পদ দিয়ে নয়, সেই মুহূর্তে তিনি যেভাবে ছিলেন, সেই অবস্থা দিয়ে। শব্দটি এসেছে একবারই, আর কোথাও নেই। কুরআন রাসূলকে যেভাবে সম্বোধন করেছে, সেখান থেকে নেওয়া অল্প কয়েকটি সূরা-নামের একটি এটি; এর জোড়া ঠিক পরের সূরাটি। এরপর সম্বোধনটি চাদরটাই সরিয়ে দেয়: রাতে দাঁড়াও, থেমে থেমে স্পষ্ট করে তিলাওয়াত করো, তারা যা বলে তা সহ্য করো, আর সুন্দরভাবে তাদের থেকে সরে থাকো। নামটি ধরে রেখেছে বিশ্রামের সেই মুহূর্তটুকু, যার ঠিক পরেই হুকুম এসে তা শেষ করে দেয়।',
    },
    signal: {
      en: 'Expect the night prayer prescribed and then lightened, a short training programme for a man about to be given a heavy word, and a closing verse that reads like a concession to human limits.',
      bn: 'রাতের নামাজের বিধান, পরে তা সহজ করে দেওয়া; ভারী বাণী বহনের আগে একজন মানুষের ছোট্ট প্রশিক্ষণ; আর শেষ আয়াত, যা পড়লে মনে হয় মানুষের সীমাবদ্ধতার প্রতি এক ছাড়।',
    },
    alt: [],
    refs: ['73:1', '73:2'],
  },
  74: {
    meaning: { en: 'The Cloaked One', bn: 'চাদর মুড়ি দেওয়া জন' },
    source: {
      en: 'From 74:1, O you who are covered up, followed at once by the command to rise and warn.',
      bn: '৭৪:১ আয়াত থেকে: হে চাদর মুড়ি দেওয়া ব্যক্তি। এর পরেই হুকুম আসে: ওঠো, সতর্ক করো।',
    },
    why: {
      en: 'Muddaththir and its neighbour Muzzammil are near-synonyms, both meaning a man under a covering, and both titles come from an opening address rather than from a theme. Tradition ties this one to the early days of revelation: the Prophet, shaken by what he had seen, asked to be covered, and was answered with rise and warn. That is the whole basis of the name — a snapshot, not a summary. The surah then moves on quickly to a man weighing up how to dismiss the Quran, to Saqar, and to the nineteen set over it, none of which the title mentions.',
      bn: 'মুদ্দাসসির আর তার পাশের সূরা মুযযাম্মিল প্রায় সমার্থক; দুটোরই অর্থ চাদরে ঢাকা মানুষ। দুটি নামই এসেছে শুরুর সম্বোধন থেকে, বিষয়বস্তু থেকে নয়। বর্ণনা অনুযায়ী এই সূরা ওহির একেবারে শুরুর দিনগুলোর: নবী ﷺ যা দেখেছিলেন তাতে কেঁপে উঠে বলেছিলেন, আমাকে চাদরে ঢেকে দাও। জবাব এল: ওঠো, সতর্ক করো। নামের ভিত্তি এটুকুই, এক মুহূর্তের ছবি, সারসংক্ষেপ নয়। এরপর সূরা দ্রুত চলে যায় অন্য প্রসঙ্গে: এক ব্যক্তি, যে হিসাব কষছিল কীভাবে কুরআনকে উড়িয়ে দেওয়া যায়; সাকার; আর তার উপর নিযুক্ত উনিশজন। নামে এর কোনোটিরই উল্লেখ নেই।',
    },
    signal: {
      en: 'Expect the call to public preaching and then the reaction to it: a calculated rejection reported almost word for word, a description of the fire, and the exchange in which its inmates explain what put them there.',
      bn: 'প্রকাশ্যে দাওয়াতের হুকুম, তারপর তার প্রতিক্রিয়া: হিসাব কষে প্রত্যাখ্যান, যা প্রায় হুবহু তুলে ধরা হয়েছে; জাহান্নামের বর্ণনা; আর সেই কথোপকথন, যেখানে জাহান্নামীরা নিজেরাই বলে কী তাদের সেখানে এনেছে।',
    },
    alt: [],
    refs: ['74:1', '74:2', '74:30'],
  },
  75: {
    meaning: { en: 'The Resurrection', bn: 'কিয়ামত' },
    source: {
      en: 'From the oath that opens it in 75:1: I swear by the Day of Resurrection.',
      bn: 'সূচনার শপথ ৭৫:১ থেকে — আমি শপথ করছি কিয়ামতের দিনের।',
    },
    why: {
      en: 'Here the title and the subject coincide. Al-Qiyamah, the standing up, is sworn by in the first verse and then described for forty: the eye dazzled, the moon eclipsed, sun and moon brought together, faces radiant and faces darkened, and the soul reaching the collarbone. In between comes the famous aside telling the Prophet not to hurry his tongue with the revelation. Unlike the neighbouring surahs, which borrow a label from an oath-object or an opening syllable, this one is titled by what it is genuinely about — it spends its whole length depicting the day it swears by.',
      bn: 'এখানে নাম আর বিষয় মিলে গেছে। আল-কিয়ামাহ মানে উঠে দাঁড়ানো। প্রথম আয়াতে এর শপথ, আর পরের চল্লিশ আয়াত জুড়ে এরই বর্ণনা: চোখ ধাঁধিয়ে যাবে, চাঁদ আলো হারাবে, সূর্য আর চাঁদকে একত্র করা হবে, কিছু মুখ উজ্জ্বল, কিছু মুখ মলিন, আর প্রাণ এসে ঠেকবে কণ্ঠার হাড়ে। মাঝখানে আছে সেই বিখ্যাত প্রসঙ্গ, যেখানে নবী ﷺ-কে বলা হয়েছে, ওহি নিয়ে তাড়াহুড়ো করে জিহ্বা নাড়বেন না। আশপাশের সূরাগুলো নাম ধার করে শপথের বস্তু বা শুরুর শব্দ থেকে। এই সূরার নাম এসেছে তার আসল বিষয় থেকেই: যে দিনের শপথ করা হয়েছে, পুরো সূরা সেই দিনেরই ছবি আঁকে।',
    },
    signal: {
      en: 'Expect a sustained answer to one question: does man think We will not reassemble his bones? The reply runs from the fingertips to the deathbed, with a short instruction on receiving revelation set inside it.',
      bn: 'একটিমাত্র প্রশ্নের টানা জবাব: মানুষ কি ভাবে, আমি তার হাড়গুলো আবার একত্র করব না? জবাব আঙুলের ডগা থেকে মৃত্যুশয্যা পর্যন্ত গড়ায়, আর তার মাঝখানেই আছে ওহি গ্রহণের ছোট একটি নির্দেশ।',
    },
    alt: [],
    refs: ['75:1', '75:6'],
  },
  76: {
    meaning: { en: 'Man', bn: 'মানুষ' },
    source: {
      en: 'From 76:1, which asks whether there came upon man a span of time in which he was nothing worth mentioning; al-insan and ad-dahr both stand in that one verse.',
      bn: '৭৬:১ আয়াত থেকে, যেখানে প্রশ্ন করা হয়েছে, মানুষের উপর কি এমন এক সময় আসেনি, যখন সে উল্লেখ করার মতো কিছুই ছিল না? "আল-ইনসান" আর "আদ-দাহর", দুটি শব্দই ওই একটি আয়াতে আছে।',
    },
    why: {
      en: 'This is the clearest case in the Quran of two names taken from a single sentence. The opening verse asks whether there came upon man, al-insan, a stretch of time, hin min ad-dahr, in which he was not a thing mentioned. Reciters and scholars picked different words out of that line, so the same surah circulates as al-Insan and as ad-Dahr, and neither is wrong; neither is a claim about the contents either. What follows is the making of man from a mingled drop, the two roads set before him, and a long description of what the righteous are given.',
      bn: 'একই বাক্য থেকে দুটি নাম নেওয়ার সবচেয়ে স্পষ্ট উদাহরণ কুরআনে এটিই। প্রথম আয়াত প্রশ্ন করে: মানুষের (আল-ইনসান) উপর কি এমন এক কাল (হীনুম মিনাদ দাহর) আসেনি, যখন সে উল্লেখ করার মতো কিছুই ছিল না? কারী ও আলেমরা ওই একই বাক্য থেকে আলাদা আলাদা শব্দ বেছে নিয়েছেন। তাই একই সূরা আল-ইনসান নামেও চলে, আদ-দাহর নামেও। কোনোটিই ভুল নয়, আবার কোনোটিই বিষয়বস্তু সম্পর্কে কোনো দাবি করে না। এরপর আসে মিশ্র শুক্রবিন্দু থেকে মানুষের সৃষ্টি, তার সামনে রাখা দুটি পথ, আর নেককারদের কী দেওয়া হবে, তার দীর্ঘ বর্ণনা।',
    },
    signal: {
      en: 'Expect a gentle, image-rich surah rather than an argumentative one: origin, choice, then Paradise described at length in cups, springs and silk, and a closing reminder that whoever wills may take a way to his Lord.',
      bn: 'তর্কের সূরা নয়, বরং কোমল আর ছবিতে ভরা একটি সূরা: মানুষের শুরু, তার বেছে নেওয়ার স্বাধীনতা, তারপর পেয়ালা, ঝরনা আর রেশমে আঁকা জান্নাতের দীর্ঘ বর্ণনা। শেষে মনে করিয়ে দেওয়া হয়: যে চায়, সে তার রবের দিকে পথ ধরতে পারে।',
    },
    alt: [
      { name: 'Ad-Dahr', en: 'The other half of the same verse: the span of time in which man was not yet anything. Equally established, and equally a marker rather than a summary.', bn: 'একই আয়াতের অন্য অংশ: সেই কাল, যখন মানুষ তখনো কিছুই ছিল না। এ নামও সমানভাবে প্রতিষ্ঠিত, আর এটিও সারসংক্ষেপ নয়, চিহ্ন।' },
      { name: 'Al-Abrar', en: 'Reported, after the righteous whose reward fills the middle of the surah, named in 76:5.', bn: 'বর্ণিত নাম, ৭৬:৫ আয়াতে উল্লিখিত সেই নেককারদের নামে, যাদের প্রতিদান সূরার মাঝের বড় অংশ জুড়ে আছে।' },
      { name: 'Hal Ata', en: 'The first two words of the surah, in the old habit of citing a chapter by its opening.', bn: 'সূরার প্রথম দুটি শব্দ — সূচনা দিয়ে সূরার উল্লেখ করার পুরনো রীতি অনুসারে।' },
    ],
    refs: ['76:1', '76:5'],
  },
  77: {
    meaning: { en: 'Those Sent Forth', bn: 'প্রেরিতগণ' },
    source: {
      en: 'From the oath that opens it, 77:1: by those sent forth one after another.',
      bn: 'সূচনার শপথ ৭৭:১ থেকে — শপথ তাদের, যাদের একের পর এক পাঠানো হয়।',
    },
    why: {
      en: 'Al-Mursalat is a feminine plural participle meaning the ones sent. What they are is disputed: many exegetes read the series of oaths in the first five verses as winds, others as angels, and some divide the five between the two. The Quran does not specify, and reporting the disagreement is more honest than picking a side. What is certain is that the title is an oath-object taken from the very first words, in the manner of most surahs in this part of the Quran, and that the refrain which follows returns ten times over.',
      bn: 'আল-মুরসালাত স্ত্রীবাচক বহুবচন রূপ, অর্থ যাদের পাঠানো হয়। এরা কারা, তা নিয়ে মতভেদ আছে। প্রথম পাঁচ আয়াতের শপথগুলোকে অনেক মুফাসসির বাতাস বলেছেন, কেউ বলেছেন ফেরেশতা, আবার কেউ পাঁচটিকে দুই ভাগে ভাগ করেছেন। কুরআন নির্দিষ্ট করে বলেনি, আর কোনো এক পক্ষ বেছে নেওয়ার চেয়ে মতভেদটুকু জানিয়ে দেওয়াই সৎ পথ। নিশ্চিত শুধু এটুকু: নামটি একেবারে প্রথম শব্দগুলো থেকে নেওয়া শপথের বস্তু, কুরআনের এই অংশের বেশিরভাগ সূরার মতোই। আর এরপর একটি বাক্য ঘুরে ঘুরে আসে দশবার।',
    },
    signal: {
      en: 'Expect a drumbeat structure: oaths, then a promise that the threatened day will fall, then scene after scene of it, each closed by the same refrain of woe to those who deny.',
      bn: 'ঢাকের তালের মতো গঠন: প্রথমে শপথ, তারপর ঘোষণা: যে দিনের সতর্কবাণী দেওয়া হয়েছে, তা আসবেই; এরপর সেই দিনের একের পর এক দৃশ্য। প্রতিটি দৃশ্যের শেষে একই কথা: সেদিন দুর্ভোগ অস্বীকারকারীদের।',
    },
    alt: [],
    refs: ['77:1', '77:5'],
  },
  78: {
    meaning: { en: 'The Announcement', bn: 'মহাসংবাদ' },
    source: {
      en: 'From an-naba al-azim, the momentous news, in 78:2 — the thing the questioners of the first verse are asking one another about.',
      bn: '৭৮:২ আয়াতের "আন-নাবাউল আজীম", অর্থাৎ মহাসংবাদ, সেখান থেকে। প্রথম আয়াতে যারা প্রশ্ন করছিল, তারা এ নিয়েই একে অপরকে জিজ্ঞেস করছিল।',
    },
    why: {
      en: 'The surah opens with a question — about what are they asking one another? — and the second verse answers with the word that became its title: the momentous news, over which they differ. Naba is not idle report but news of consequence. The name therefore comes from the opening exchange rather than from the body, which is a tour of creation offered as evidence: the earth spread out, the mountains as pegs, sleep as rest, the seven strong heavens, and only then the Day of Decision. Older usage simply called it Amma, after the first word.',
      bn: 'সূরার শুরু একটি প্রশ্ন দিয়ে: তারা একে অপরকে কী নিয়ে জিজ্ঞেস করছে? দ্বিতীয় আয়াত জবাব দেয় সেই শব্দে, যা পরে সূরার নাম হয়েছে: সেই মহাসংবাদ, যা নিয়ে তারা মতভেদ করছে। "নাবা" মানে যেমন-তেমন খবর নয়, গুরুতর সংবাদ। তাই নামটি এসেছে শুরুর এই প্রশ্নোত্তর থেকে, মূল আলোচনা থেকে নয়। মূল আলোচনায় প্রমাণ হিসেবে সৃষ্টিজগৎ ঘুরিয়ে দেখানো হয়েছে: বিছানো জমিন, খুঁটির মতো পাহাড়, বিশ্রামের জন্য ঘুম, মজবুত সাত আকাশ, আর তারপরই ফয়সালার দিন। আগের যুগে একে শুধু "আম্মা" বলা হতো, প্রথম শব্দ ধরে।',
    },
    signal: {
      en: 'Expect the argument for resurrection built from things already visible, then a sharp division into two destinations, and a last verse in which the denier wishes he were dust.',
      bn: 'চোখের সামনে থাকা জিনিস দিয়েই সাজানো পুনরুত্থানের যুক্তি, তারপর দুই গন্তব্যে স্পষ্ট ভাগ, আর শেষ আয়াতে অস্বীকারকারীর আক্ষেপ: হায়, আমি যদি মাটি হয়ে যেতাম!',
    },
    alt: [
      { name: 'Amma Yatasa\'alun', en: 'The surah cited by its opening words, the earliest and commonest way of referring to it.', bn: 'সূরার প্রথম শব্দগুলো দিয়ে উল্লেখ; সূরাটিকে ডাকার এটিই সবচেয়ে পুরোনো ও প্রচলিত রীতি।' },
      { name: 'At-Tasa\'ul', en: 'Reported, from the questioning of one another in the first verse.', bn: 'বর্ণিত নাম, প্রথম আয়াতে একে অপরকে জিজ্ঞেস করার প্রসঙ্গ থেকে।' },
    ],
    refs: ['78:1', '78:2'],
  },
  79: {
    meaning: { en: 'Those Who Drag Forth', bn: 'সবেগে টেনে বের করে যারা' },
    source: {
      en: 'From the first of five oaths, 79:1, by those that pull out violently.',
      bn: 'পাঁচটি শপথের প্রথমটি থেকে (৭৯:১): শপথ তাদের, যারা সজোরে টেনে বের করে।',
    },
    why: {
      en: 'The surah begins with five oaths and takes its name from the first of them. As with al-Mursalat, the referent is debated: most read them as the angels drawing out souls at death, others as stars in their courses or as war-horses straining, and the text leaves it open. What matters for the naming is the method rather than the meaning. This stretch of the Quran habitually labels a chapter by its striking opening word, with no claim that the word states the theme. The theme here is Pharaoh\'s defiance, the raising of the dead, and an Hour whose timing was withheld.',
      bn: 'সূরার শুরু পাঁচটি শপথ দিয়ে, আর নাম নেওয়া হয়েছে প্রথমটি থেকে। আল-মুরসালাতের মতো এখানেও এরা কারা, তা নিয়ে মতভেদ আছে। বেশিরভাগ মুফাসসিরের মতে এরা ফেরেশতা, যারা মৃত্যুর সময় প্রাণ টেনে বের করেন। কেউ বলেছেন কক্ষপথে চলা তারা, কেউ বলেছেন প্রাণপণে ছুটে চলা যুদ্ধের ঘোড়া; কুরআন বিষয়টি খোলা রেখেছে। নামকরণের বেলায় অর্থের চেয়ে পদ্ধতিটাই আসল। কুরআনের এই অংশে সাধারণত শুরুর চোখে পড়া শব্দ দিয়েই সূরাকে চেনানো হয়; শব্দটি সূরার বিষয় বলে দেয়, এমন দাবি থাকে না। এই সূরার বিষয় ফেরাউনের ঔদ্ধত্য, মৃতদের আবার জীবিত করা, আর কিয়ামত, যার সময় জানানো হয়নি।',
    },
    signal: {
      en: 'Expect a rapid Meccan surah that sets one tyrant\'s claim beside the making of the heaven and the earth, and answers the question of when the Hour comes by saying it is not yours to know.',
      bn: 'দ্রুতগতির একটি মক্কী সূরা। এক জালিম শাসকের দাবিকে এখানে রাখা হয়েছে আকাশ ও পৃথিবী সৃষ্টির পাশাপাশি। আর কিয়ামত কবে, এই প্রশ্নের জবাবে বলা হয়েছে: তা জানা তোমার কাজ নয়।',
    },
    alt: [
      { name: 'As-Sahirah', en: 'Reported, from 79:14, the level open plain the dead are brought out onto.', bn: 'বর্ণিত নাম, ৭৯:১৪ আয়াত থেকে — সেই সমতল উন্মুক্ত প্রান্তর, যেখানে মৃতদের বের করে আনা হবে।' },
      { name: 'At-Tammah', en: 'Reported, from 79:34, the overwhelming calamity.', bn: 'বর্ণিত নাম, ৭৯:৩৪ আয়াত থেকে — সেই মহাবিপর্যয়, যা সবকিছুকে ছাপিয়ে যায়।' },
    ],
    refs: ['79:1', '79:14'],
  },
  80: {
    meaning: { en: 'He Frowned', bn: 'তিনি ভ্রুকুটি করলেন' },
    source: {
      en: 'From the first word of 80:1, abasa, he frowned and turned away, when the blind man came to him, as 80:2 says.',
      bn: '৮০:১ আয়াতের প্রথম শব্দ "আবাসা" থেকে: তিনি ভ্রুকুটি করলেন ও মুখ ফিরিয়ে নিলেন। ৮০:২ আয়াত বলছে, কারণ তাঁর কাছে সেই অন্ধ ব্যক্তি এসেছিলেন।',
    },
    why: {
      en: 'The naming word is a verb, and it describes a moment that the surah itself corrects. Occupied with the leading men of Quraysh, the Prophet turned away from Abdullah ibn Umm Maktum, a blind companion who had come wanting to be taught. The opening speaks in the third person and names nobody, and the correction is measured: the one who came striving, in awe, was the one worth attending to. It says something about the Quran that a surah is titled by a passing frown, and something about the Prophet that he later received Ibn Umm Maktum with honour and left him in charge of Madinah.',
      bn: 'নামটি একটি ক্রিয়াপদ, আর তা এমন এক মুহূর্তের বর্ণনা, যা সূরা নিজেই শুধরে দেয়। কুরাইশের নেতাদের সঙ্গে কথায় ব্যস্ত থাকার সময় নবী ﷺ মুখ ফিরিয়ে নিয়েছিলেন আবদুল্লাহ ইবনে উম্মে মাকতুম (রাঃ) থেকে। তিনি ছিলেন এক অন্ধ সাহাবি, দ্বীন শিখতে এসেছিলেন। শুরুর আয়াতগুলো তাঁকে সরাসরি সম্বোধন না করে \'তিনি\' বলে কথা বলে, কারও নাম নেয় না; আর শুধরে দেওয়াটাও মাপা: যিনি আগ্রহ আর আল্লাহর ভয় নিয়ে ছুটে এসেছিলেন, মনোযোগ তাঁরই প্রাপ্য ছিল। এক মুহূর্তের ভ্রুকুটির নামে সূরার নাম রাখা কুরআন সম্পর্কে কিছু বলে। আর পরে ইবনে উম্মে মাকতুম (রাঃ)-কে সম্মান দিয়ে গ্রহণ করা, মদীনার দায়িত্ব তাঁর হাতে দিয়ে যাওয়া, নবী ﷺ সম্পর্কেও কিছু বলে।',
    },
    signal: {
      en: 'Expect a short Meccan surah that opens with a correction and then widens into an argument: who really deserves your attention, and how a man made from a drop of fluid ends up fleeing his own family.',
      bn: 'ছোট একটি মক্কী সূরা, যা শুরু হয় একটি সংশোধন দিয়ে, তারপর ছড়িয়ে পড়ে বড় এক যুক্তিতে: আসলে কে আপনার মনোযোগের হকদার, আর এক ফোঁটা পানি থেকে তৈরি মানুষ কীভাবে শেষে নিজের পরিবার থেকেই পালাবে।',
    },
    alt: [
      { name: 'Ibn Umm Maktum', en: 'Reported, after the blind companion whose arrival the opening verses describe.', bn: 'বর্ণিত নাম, সেই অন্ধ সাহাবির নামে, যাঁর আগমনের কথা সূচনার আয়াতগুলোতে এসেছে।' },
      { name: 'As-Safarah', en: 'Reported, from 80:15, the noble scribes by whose hands the honoured scrolls are written.', bn: 'বর্ণিত নাম, ৮০:১৫ আয়াত থেকে — সেই সম্মানিত লেখকগণ, যাঁদের হাতে মর্যাদাপূর্ণ সহিফাগুলো লিখিত।' },
    ],
    refs: ['80:1', '80:2', '80:8'],
  },
  81: {
    meaning: { en: 'The Folding Up', bn: 'গুটিয়ে ফেলা' },
    source: {
      en: 'From kuwwirat in 81:1, when the sun is wound up, the verb of the opening clause supplying the name.',
      bn: '৮১:১ আয়াতের "কুওয়িরাত" থেকে: যখন সূর্যকে গুটিয়ে নেওয়া হবে। শুরুর বাক্যের ক্রিয়াপদটিই সূরাকে নাম দিয়েছে।',
    },
    why: {
      en: 'Takwir is the verbal noun of the verb that opens the surah: kawwara, to wind or coil a thing round itself, the word used for winding a turban. Applied to the sun it is frighteningly domestic — the blazing thing simply rolled up and put away. The title is a plain instance of this section\'s habit of taking the first vivid word, and the word stands at the head of twelve when-clauses that dismantle the world piece by piece before the single answer arrives: every soul will know what it has brought. Early citation used the whole opening phrase instead.',
      bn: 'তাকভীর হলো সূরার শুরুর ক্রিয়াপদ "কাওওয়ারা"-র ক্রিয়াবাচক বিশেষ্য। এর অর্থ কোনো জিনিসকে তার নিজের চারপাশে পেঁচিয়ে গুটিয়ে ফেলা; পাগড়ি প্যাঁচানোর জন্যও এই শব্দ। সূর্যের বেলায় ছবিটা ভয় ধরানোর মতো ঘরোয়া: জ্বলন্ত সূর্যটাকে যেন শুধু গুটিয়ে তুলে রাখা হলো। শুরুর সবচেয়ে জীবন্ত শব্দটি নেওয়ার যে রীতি কুরআনের এই অংশে চলে, এ নাম তারই সাধারণ উদাহরণ। আর শব্দটি দাঁড়িয়ে আছে বারোটি "যখন"-বাক্যের মাথায়, যেগুলো জগৎটাকে টুকরো টুকরো করে খুলে ফেলে। তারপর আসে একটিমাত্র জবাব: প্রত্যেকে জেনে যাবে, সে কী নিয়ে এসেছে। আগের যুগে সূরাটির উল্লেখ হতো পুরো শুরুর বাক্যটি দিয়ে।',
    },
    signal: {
      en: 'Expect the end of the world in a rapid list of images, then a turn to the messenger who brought the news, defended by an oath on the retreating stars against the charge that he was a madman.',
      bn: 'জগতের শেষ, একের পর এক দ্রুত ছবিতে। তারপর আলোচনা ফেরে সেই রাসূলের দিকে, যিনি এ খবর এনেছেন। তাঁকে পাগল বলার অভিযোগের জবাবে শপথ করা হয়েছে পিছিয়ে যাওয়া তারাগুলোর।',
    },
    alt: [
      { name: 'Idha ash-Shams Kuwwirat', en: 'The opening clause quoted in full, an older way of referring to the surah.', bn: 'পূর্ণ সূচনা-বাক্যটি উদ্ধৃত করে — সূরাটির উল্লেখ করার পুরনো একটি রীতি।' },
    ],
    refs: ['81:1', '81:14'],
  },
  82: {
    meaning: { en: 'The Cleaving', bn: 'বিদীর্ণ হওয়া' },
    source: {
      en: 'From infatarat in 82:1: when the sky is split apart.',
      bn: '৮২:১ আয়াতের "ইনফাতারাত" থেকে — যখন আকাশ ফেটে যাবে।',
    },
    why: {
      en: 'Al-Infitar is formed from the verb that opens the surah, fatara in its reflexive shape, to burst or split of itself. The same root gives fitrah, the original make of a thing, and Fatir, the Originator, so the sky that was once brought into being is here shown coming undone. Like its neighbours the name is a first-word label rather than a heading, but the label is well chosen: the surah\'s whole argument is a series of things opening — the sky, the graves, and then the record, when a soul is confronted with what it sent ahead and what it left behind.',
      bn: 'আল-ইনফিতার এসেছে সূরার শুরুর ক্রিয়াপদ থেকে: "ফাতারা"-র সেই রূপ, যার অর্থ নিজে থেকেই ফেটে যাওয়া। একই ধাতু থেকে এসেছে "ফিতরাত", অর্থাৎ কোনো কিছুর আদি গড়ন, আর "ফাতির", অর্থাৎ যিনি প্রথম সৃষ্টি করেন। তাই যে আকাশকে একদিন অস্তিত্বে আনা হয়েছিল, এখানে দেখা যায় সেটিই খুলে পড়ছে। আশপাশের সূরাগুলোর মতো এই নামও শিরোনাম নয়, প্রথম শব্দের চিহ্ন। তবে চিহ্নটি খুব ভালো বাছাই, কারণ সূরার পুরো যুক্তিই একের পর এক কিছু খুলে যাওয়া: আকাশ, কবর, তারপর আমলনামা, যখন প্রত্যেকে দেখবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে গেছে।',
    },
    signal: {
      en: 'Expect nineteen verses that move from cosmic collapse to a personal question — what deceived you about your generous Lord? — and end at a day when no soul can do anything for another.',
      bn: 'উনিশটি আয়াত, যা মহাজাগতিক ভাঙন থেকে নেমে আসে একেবারে ব্যক্তিগত এক প্রশ্নে: কিসে তোমাকে তোমার মহানুভব রব সম্পর্কে ধোঁকায় ফেলল? আর শেষ হয় এমন এক দিনে, যেদিন কেউ কারও জন্য কিছুই করতে পারবে না।',
    },
    alt: [
      { name: 'Infatarat', en: 'Reported, the surah cited by the verb of its first verse alone.', bn: 'বর্ণিত নাম — কেবল প্রথম আয়াতের ক্রিয়াপদ দিয়েই সূরাটির উল্লেখ।' },
    ],
    refs: ['82:1', '82:5'],
  },
  83: {
    meaning: { en: 'The Defrauders', bn: 'যারা মাপে কম দেয়' },
    source: {
      en: 'From 83:1, woe to al-mutaffifin, those who skim the measure, defined in the two verses that follow.',
      bn: '৮৩:১ আয়াত থেকে: দুর্ভোগ "মুতাফফিফীন"-দের জন্য, অর্থাৎ যারা মাপে কম দেয়। পরের দুই আয়াতেই এর ব্যাখ্যা।',
    },
    why: {
      en: 'Tatfif is not grand theft. It comes from tafif, a trifling amount, and means shaving a little off the measure — taking full when you buy and giving short when you sell, exactly as 83:2 and 83:3 spell out. The surah is titled by that small dishonesty and then opens onto enormous things: the register of the wicked in Sijjin, the register of the righteous in Illiyyun, the sealed wine of the pious, and the day the believers look down on those who used to laugh at them. Naming the whole from the smallest fraud is the point, because the ledger records grams.',
      bn: 'তাতফীফ কোনো বড় চুরি নয়। শব্দটি এসেছে "তাফীফ" থেকে, যার অর্থ সামান্য পরিমাণ। তাতফীফ মানে মাপ থেকে একটু করে কেটে রাখা: কেনার সময় পুরো মেপে নেওয়া, আর বেচার সময় কম দেওয়া, ঠিক যেমনটি ৮৩:২ ও ৮৩:৩ আয়াতে বলা হয়েছে। এই ছোট্ট অসততার নামেই সূরার নাম, অথচ এরপর খুলে যায় বিশাল সব দৃশ্য: সিজ্জীনে পাপীদের আমলনামা, ইল্লিয়্যীনে নেককারদের আমলনামা, মুত্তাকিদের জন্য মোহর করা পানীয়, আর সেই দিন, যেদিন মুমিনরা তাকিয়ে দেখবে তাদের, যারা একসময় তাদের নিয়ে হাসত। সবচেয়ে ছোট প্রতারণার নামে গোটা সূরার নাম রাখাটাই আসল কথা, কারণ হিসাবের খাতায় গ্রাম পর্যন্ত লেখা থাকে।',
    },
    signal: {
      en: 'Expect a surah that begins in the marketplace and ends in the two registers: a warning that small cheating and large denial belong to the same account, and that the mockery will one day be returned.',
      bn: 'এমন এক সূরা, যার শুরু বাজারে আর শেষ দুই আমলনামার সামনে। সতর্কবাণী হলো: মাপে সামান্য ঠকানো আর বড় অস্বীকার একই হিসাবের খাতায় ওঠে, আর একদিন এই উপহাস ফিরে আসবে উপহাসকারীদের দিকেই।',
    },
    alt: [
      { name: 'At-Tatfif', en: 'The same root as a verbal noun: the surah of giving short measure.', bn: 'একই ধাতুর ক্রিয়াবাচক রূপ — মাপে কম দেওয়ার সূরা।' },
    ],
    refs: ['83:1', '83:2', '83:3'],
  },
  84: {
    meaning: { en: 'The Splitting Open', bn: 'ফেটে যাওয়া' },
    source: {
      en: 'From inshaqqat in 84:1: when the sky is torn open.',
      bn: '৮৪:১ আয়াতের "ইনশাক্কাত" থেকে — যখন আকাশ ফেটে চৌচির হবে।',
    },
    why: {
      en: 'Like at-Takwir and al-Infitar before it, this surah opens with the cosmos coming apart, and like them it is named from the verb of its first clause. Inshaqqa is to split along a seam. The surah adds something the others do not: the sky, in tearing, listens to its Lord and is right to — obedience rather than collapse. The title marks the chapter, it does not summarise it. What follows is man toiling towards his Lord, the record given in the right hand or from behind the back, oaths by the twilight and the gathering night, and the promise of stage after stage.',
      bn: 'আত-তাকভীর আর আল-ইনফিতারের মতো এই সূরাও শুরু হয় বিশ্বজগৎ ভেঙে পড়ার কথা দিয়ে, আর ওদের মতোই এর নাম এসেছে শুরুর বাক্যের ক্রিয়াপদ থেকে। "ইনশাক্কা" মানে সেলাইয়ের জায়গা বরাবর ফেটে যাওয়া। তবে এই সূরা এমন একটি কথা যোগ করে, যা অন্যগুলোতে নেই: ফেটে যাওয়ার সময় আকাশ তার রবের হুকুম শোনে, আর সেটাই তার কর্তব্য। এটা ধ্বংস নয়, আনুগত্য। নামটি সূরাকে চিহ্নিত করে, সারসংক্ষেপ দেয় না। এরপর আসে রবের দিকে কষ্ট করে এগিয়ে চলা মানুষ, ডান হাতে বা পিঠের পেছন দিক থেকে দেওয়া আমলনামা, গোধূলি আর ঘনিয়ে আসা রাতের শপথ, আর ধাপের পর ধাপ পার হওয়ার প্রতিশ্রুতি।',
    },
    signal: {
      en: 'Expect the shortest possible route from the sky splitting to the reader\'s own file being handed over, with a reminder that the whole of life is a journey through one stage after another.',
      bn: 'আকাশ ফেটে যাওয়া থেকে পাঠকের নিজের আমলনামা হাতে পাওয়া পর্যন্ত সবচেয়ে ছোট পথ। সঙ্গে মনে করিয়ে দেওয়া হয়, গোটা জীবনটাই এক ধাপ থেকে আরেক ধাপে পার হয়ে চলার সফর।',
    },
    alt: [
      { name: 'Inshaqqat', en: 'Reported, the surah named by its first verb alone.', bn: 'বর্ণিত নাম — কেবল প্রথম ক্রিয়াপদটি দিয়েই সূরাটির নামকরণ।' },
    ],
    refs: ['84:1', '84:2', '84:19'],
  },
  85: {
    meaning: { en: 'The Constellations', bn: 'নক্ষত্রপুঞ্জ' },
    source: {
      en: 'From the oath in 85:1, by the sky holding the great constellations.',
      bn: '৮৫:১ আয়াতের শপথ থেকে — শপথ সেই আকাশের, যাতে রয়েছে বিশাল নক্ষত্রপুঞ্জ।',
    },
    why: {
      en: 'Buruj is the plural of burj, a tower or a fortified station, used of the great stations of the stars. The word is the object of the surah\'s opening oath, and it is not what the surah is about: what follows is the People of the Ditch, who dug a trench, lit a fire in it and sat watching believers burn for nothing but faith in the Mighty, the Praiseworthy. Swearing by fortresses in the sky before telling of a pit in the ground is deliberate. The name sets the scale against which a small local tyranny is to be measured.',
      bn: 'বুরুজ হলো "বুরজ"-এর বহুবচন। বুরজ মানে মিনার বা সুরক্ষিত ঘাঁটি; আকাশে তারাদের বড় বড় অবস্থান বোঝাতেও শব্দটি ব্যবহৃত হয়। এটি সূরার শুরুর শপথের বস্তু, কিন্তু সূরার বিষয় নয়। এরপর আসে গর্তওয়ালাদের কাহিনি। তারা পরিখা খুঁড়ে তাতে আগুন জ্বালিয়েছিল, তারপর বসে বসে দেখেছিল মুমিনদের পুড়ে মরা। মুমিনদের অপরাধ শুধু এটুকুই ছিল যে তারা পরাক্রমশালী, প্রশংসিত আল্লাহর উপর ঈমান এনেছিল। মাটির এক গর্তের কথা বলার আগে আকাশের দুর্গগুলোর শপথ করা ইচ্ছাকৃত। নামটি সেই মাপকাঠি ঠিক করে দেয়, যার পাশে রেখে এক ছোট, স্থানীয় জুলুমকে মাপতে হবে।',
    },
    signal: {
      en: 'Expect persecution answered not with rescue but with perspective: the tormentors named, the seizing of earlier nations recalled, and the Quran itself described as preserved on a guarded tablet.',
      bn: 'নির্যাতনের জবাব উদ্ধার দিয়ে নয়, বড় পরিসরে দেখার চোখ দিয়ে: নির্যাতনকারীদের চিহ্নিত করা, আগের জাতিগুলোকে পাকড়াও করার কথা মনে করানো, আর জানানো যে কুরআন সংরক্ষিত আছে লাওহে মাহফুজে।',
    },
    alt: [],
    refs: ['85:1', '85:4', '85:8'],
  },
  86: {
    meaning: { en: 'The Night-Comer', bn: 'রাতের আগন্তুক' },
    source: {
      en: 'From the oath in 86:1 by at-tariq, which the surah itself defines two verses later as the piercing star.',
      bn: '৮৬:১ আয়াতে "আত-তারিক"-এর শপথ থেকে। দুই আয়াত পরে সূরা নিজেই এর ব্যাখ্যা দিয়েছে: উজ্জ্বল, ভেদকারী তারা।',
    },
    why: {
      en: 'Tariq comes from tarq, to strike or knock, and names anyone who arrives by night, since the late traveller has to knock at a shut door. The Quran swears by it and then does something unusual: it glosses its own oath. And what will make you know what the night-comer is? The piercing star. So the title is an oath-object like those of its neighbours, but this is the one case in the run where the surah stops to define the very word it is named by. From there it draws a watcher set over every soul, and a second look at where a man came from.',
      bn: 'তারিক শব্দটি এসেছে "তারক" থেকে, যার অর্থ আঘাত করা বা কড়া নাড়া। রাতে যে আসে, তাকেই তারিক বলে, কারণ রাতের মুসাফিরকে বন্ধ দরজায় কড়া নাড়তে হয়। কুরআন এর শপথ করে, তারপর এমন একটি কাজ করে, যা সচরাচর করে না: নিজের শপথের ব্যাখ্যা নিজেই দেয়। আর কিসে তোমাকে জানাবে, রাতের আগন্তুক কী? উজ্জ্বল, ভেদকারী তারা। তাই আশপাশের সূরাগুলোর মতো এ নামও শপথের বস্তু। তবে এই ধারায় এটিই একমাত্র সূরা, যা থেমে নিজের নামের শব্দটিরই অর্থ বলে দেয়। সেখান থেকে আলোচনা যায় প্রত্যেক প্রাণের উপর নিযুক্ত এক পাহারাদারের দিকে, আর মানুষ কোথা থেকে এসেছে, সেদিকে আরেকবার তাকানোর দিকে।',
    },
    signal: {
      en: 'Expect seventeen taut verses: an oath that explains itself, a guardian over every soul, an argument from origin to resurrection, and a closing instruction to give the deniers a little time.',
      bn: 'সতেরোটি টানটান আয়াত: এমন এক শপথ, যা নিজের ব্যাখ্যা নিজেই দেয়; প্রত্যেক প্রাণের উপর একজন পাহারাদার; সৃষ্টির শুরু থেকে পুনরুত্থান পর্যন্ত যুক্তি; আর শেষে নির্দেশ: অস্বীকারকারীদের কিছুটা সময় দাও।',
    },
    alt: [],
    refs: ['86:1', '86:2', '86:3'],
  },
  1: {
    meaning: { en: 'The Opening', bn: 'সূচনা' },
    source: {
      en: "Not taken from a word inside the surah: it is the Opening because it opens the written Book and opens every unit of the prayer, and 15:87 calls it the seven oft-repeated verses.",
      bn: 'নামটি সূরার ভেতরের কোনো শব্দ থেকে আসেনি। লিখিত কুরআন এ দিয়েই শুরু হয়, নামাজের প্রতিটি রাকআতও শুরু হয় এ দিয়ে, তাই এর নাম সূচনা। ১৫:৮৭ আয়াত একে বলেছে বারবার পঠিত সাত আয়াত।',
    },
    why: {
      en: "Nearly every other surah is named after a word that happens to stand out somewhere inside it. This one is named for its position and its job. It stands at the head of the mushaf, and it is the passage a Muslim recites in every unit of every prayer, several times a day. Because it is defined by function rather than by a memorable word, the tradition records more names for it than for any other surah, and each recorded name catches a different function: its place in the Book, its role in prayer, its standing as the essence of the message, its use as a cure.",
      bn: 'প্রায় সব সূরার নাম এসেছে ভেতরের এমন কোনো শব্দ থেকে, যা আলাদা করে চোখে পড়ে। এই সূরার নাম এসেছে তার জায়গা আর কাজ থেকে। মুসহাফের একেবারে শুরুতে এর স্থান, আর দিনে কয়েকবার, প্রতিটি নামাজের প্রতিটি রাকআতে মুসলমান এটিই পড়ে। কোনো শব্দ দিয়ে নয়, কাজ দিয়েই এর পরিচয়। তাই আলেমরা এর যত নাম বর্ণনা করেছেন, অন্য কোনো সূরার এত নাম নেই। প্রতিটি নাম এর একেকটি দিক তুলে ধরে: কুরআনে এর স্থান, নামাজে এর ভূমিকা, গোটা বার্তার সারকথা হওয়ার মর্যাদা, আর শিফা হিসেবে এর ব্যবহার।',
    },
    signal: {
      en: 'Expect seven short verses that are not about a subject at all: praise, an acknowledgement of mercy and judgement, and a request for guidance — the worshipper speaking, with the rest of the Quran standing as the answer.',
      bn: 'সাতটি ছোট আয়াত, কোনো নির্দিষ্ট বিষয়ের আলোচনা নয়: আল্লাহর প্রশংসা, তাঁর রহমত ও বিচারের স্বীকৃতি, তারপর হিদায়াতের দোয়া। এখানে কথা বলে বান্দা নিজে, আর বাকি পুরো কুরআন সেই দোয়ার জবাব।',
    },
    alt: [
      { name: 'Umm al-Kitab', en: "Mother of the Book — recorded because the surah is treated as holding the essence of the whole message in seven verses.", bn: 'উম্মুল কিতাব বা কিতাবের মূল — সাতটি আয়াতে গোটা বার্তার সারমর্ম ধরা আছে বলে এই নাম বর্ণিত।' },
      { name: "As-Sab' al-Mathani", en: 'The seven oft-repeated — from 15:87, where God tells the Prophet He has given him seven of the oft-repeated verses; this is widely understood to mean this surah.', bn: 'আস-সাবউল মাসানী বা বারবার পঠিত সাত — ১৫:৮৭ আয়াত থেকে, যেখানে আল্লাহ নবীকে বলছেন, তিনি তাঁকে বারবার পঠিত সাতটি আয়াত দিয়েছেন। প্রায় সবাই এর অর্থ এই সূরাই ধরেন।' },
      { name: 'Ash-Shifa', en: "The cure — from the report of a companion who recited it over a man who had been stung, which the Prophet did not disallow.", bn: 'আশ-শিফা বা আরোগ্য — এক সাহাবী দংশিত এক ব্যক্তির উপর এই সূরা পড়েছিলেন, আর নবী তাতে আপত্তি করেননি। সেই বর্ণনা থেকেই এই নাম।' },
      { name: 'Al-Hamd', en: 'The praise — simply from its first word after the basmalah.', bn: 'আল-হামদ — বিসমিল্লাহর পর এর প্রথম শব্দ থেকেই।' },
      { name: 'As-Salah', en: "The prayer — from the divine saying in which God says He has divided the prayer between Himself and His servant, where the prayer means this surah.", bn: 'আস-সালাহ বা নামায — সেই হাদীসে কুদসী থেকে, যেখানে আল্লাহ বলেন তিনি নামাযকে নিজের ও বান্দার মধ্যে ভাগ করেছেন; সেখানে নামায বলতে এই সূরাকেই বোঝানো হয়েছে।' },
    ],
    refs: ['1:1', '1:5', '15:87'],
  },
  2: {
    meaning: { en: 'The Cow', bn: 'গাভী' },
    source: {
      en: 'From the episode of the cow the Children of Israel were commanded to slaughter, told in 2:67-73.',
      bn: 'বনী ইসরাঈলকে যে গাভী যবেহ করার আদেশ দেওয়া হয়েছিল, ২:৬৭-৭৩ আয়াতে বর্ণিত সেই ঘটনা থেকে।',
    },
    why: {
      en: 'The longest surah in the Quran covers creed, law, the change of the qiblah, fasting, pilgrimage, debt and much else, and takes its name from a single episode of seven verses about a cow. That is the clearest lesson in how surah names work. They are markers, picked because a word is distinctive enough to identify a surah on sight, not labels that summarise contents. The cow episode is memorable precisely because it is strange: a plain command met with question after question until obedience became expensive. Nobody who has read it once will confuse this surah with another.',
      bn: 'কুরআনের দীর্ঘতম সূরা। এতে আছে আকীদা, বিধান, কিবলা পরিবর্তন, রোযা, হজ্জ, ঋণ, আরও কত কী। অথচ এর নাম এসেছে একটি গাভী নিয়ে মাত্র সাত আয়াতের এক ঘটনা থেকে। সূরার নাম কীভাবে কাজ করে, তার এর চেয়ে পরিষ্কার উদাহরণ আর নেই। নামগুলো বিষয়বস্তুর সারসংক্ষেপ নয়, চেনার চিহ্ন। এমন একটি শব্দ বেছে নেওয়া হয়, যা দেখামাত্র সূরাটি চেনা যায়। গাভীর ঘটনা মনে থাকে এর অদ্ভুততার জন্যই: সহজ একটি হুকুম, তারপর প্রশ্নের পর প্রশ্ন, শেষে হুকুম মানতে গিয়ে চড়া দাম দিতে হলো। একবার যে পড়েছে, সে এই সূরাকে আর অন্য কোনোটির সঙ্গে গুলিয়ে ফেলবে না।',
    },
    signal: {
      en: "Not a surah about cattle. Expect the widest-ranging surah in the Quran: the covenant of the Children of Israel, the law of the new community at Madinah, and the Quran's longest single verse, on recording debt.",
      bn: 'এ সূরা গরু-বাছুর নিয়ে নয়। এটি কুরআনের সবচেয়ে বহুমুখী সূরা: বনী ইসরাঈলের অঙ্গীকার, মদীনার নতুন সমাজের বিধান, আর ঋণ লিখে রাখা নিয়ে কুরআনের দীর্ঘতম আয়াত।',
    },
    alt: [
      { name: 'Fustat al-Quran', en: 'Reported as the pavilion of the Quran, for its length and the range of what it gathers.', bn: 'কুরআনের তাঁবু — দৈর্ঘ্য আর বিষয়ের ব্যাপকতার কারণে এই নাম বর্ণিত হয়েছে।' },
      { name: 'Sanam al-Quran', en: 'The summit of the Quran, from a narration that everything has a summit and the summit of the Quran is this surah.', bn: 'কুরআনের চূড়া — এক বর্ণনায় এসেছে, সব কিছুরই একটা চূড়া আছে, আর কুরআনের চূড়া এই সূরা।' },
      { name: 'Az-Zahrawan', en: "The two bright ones — a name used for this surah and Al 'Imran together, not for either one alone.", bn: 'দুই উজ্জ্বল — এই সূরা আর আলে ইমরানকে একসঙ্গে এই নামে ডাকা হয়; আলাদা করে কোনোটির নাম নয়।' },
    ],
    refs: ['2:67', '2:71', '2:73'],
  },
  3: {
    meaning: { en: 'The Family of Imran', bn: 'ইমরানের পরিবার' },
    source: {
      en: 'From 3:33, where God says He chose Adam, Nuh, the family of Ibrahim and the family of Imran above all the worlds.',
      bn: '৩:৩৩ আয়াত থেকে, যেখানে আল্লাহ বলছেন, তিনি আদম, নূহ, ইবরাহীমের বংশ ও ইমরানের বংশকে সারা জগতের উপর বেছে নিয়েছেন।',
    },
    why: {
      en: 'Imran himself is not a figure the surah tells stories about. He is named only in passing, in a verse listing the households God chose, and the name of the surah is lifted from that list. What follows makes the choice apt: the birth of Maryam into that household, the vow her mother made, and then the account of Isa and the argument with the delegation of Najran. So the name is a marker drawn from one verse, but the verse sits at the head of the section that gives the surah its distinctive material.',
      bn: 'ইমরান নিজে এই সূরার কোনো কাহিনীর চরিত্র নন। মনোনীত পরিবারগুলোর তালিকা দেওয়া একটি আয়াতে তাঁর নাম আসে কেবল প্রসঙ্গক্রমে, আর সূরার নাম সেই তালিকা থেকেই তুলে নেওয়া। এরপর যা আসে তাতে নামটি যথার্থ মনে হয়: সেই পরিবারে মারইয়ামের জন্ম, তাঁর মায়ের মানত, তারপর ঈসার বৃত্তান্ত ও নাজরানের প্রতিনিধিদলের সঙ্গে বিতর্ক। অর্থাৎ নামটি এক আয়াত থেকে নেওয়া একটি চিহ্ন, তবে সেই আয়াতটিই সূরার সবচেয়ে স্বতন্ত্র অংশের শুরুতে দাঁড়িয়ে আছে।',
    },
    signal: {
      en: "Expect the Quran's fullest engagement with Christian belief, the birth and mission of Isa, and a long review of the battle of Uhud read as a lesson in obedience and patience.",
      bn: 'খ্রিস্টানদের বিশ্বাস নিয়ে কুরআনের সবচেয়ে বিস্তারিত আলোচনা, ঈসার জন্ম ও তাঁর দাওয়াত, আর উহুদ যুদ্ধের দীর্ঘ পর্যালোচনা। উহুদকে এখানে পড়ানো হয়েছে আনুগত্য ও সবরের শিক্ষা হিসেবে।',
    },
    alt: [
      { name: "Az-Zahra'", en: 'The bright one — the Prophet paired this surah with al-Baqarah, calling the two together az-Zahrawan, the two bright ones.', bn: 'উজ্জ্বল — নবী এই সূরাকে সূরা বাকারার সঙ্গে মিলিয়ে দুটিকে একত্রে আয-যাহরাওয়ান বা দুই উজ্জ্বল বলেছেন।' },
      { name: 'Al-Istighfar', en: 'The seeking of forgiveness — recorded in later lists of surah names, taken from 3:17, which praises those who seek forgiveness in the hours before dawn.', bn: 'আল-ইস্তিগফার — পরবর্তীকালের নামতালিকায় বর্ণিত; ৩:১৭ আয়াত থেকে নেওয়া, যেখানে শেষ রাতে যারা ইস্তিগফার করে, তাদের প্রশংসা করা হয়েছে।' },
    ],
    refs: ['3:33', '3:35', '3:42'],
  },
  4: {
    meaning: { en: 'The Women', bn: 'নারী' },
    source: {
      en: 'From the thread of rulings concerning women that runs through the surah, and from 4:127, where people ask the Prophet for a ruling about women.',
      bn: 'সূরাজুড়ে ছড়িয়ে থাকা নারী-সংক্রান্ত বিধান থেকে, আর ৪:১২৭ আয়াত থেকে, যেখানে লোকেরা নবীর কাছে নারীদের ব্যাপারে বিধান জানতে চায়।',
    },
    why: {
      en: "The name catches the surah's most distinctive legislation, not its scope. Inheritance shares, marriage, the treatment of orphan girls and the rights of wives are here in more detail than anywhere else in the Quran, and no other surah is identifiable by that material. But the surah is much wider than its name: it deals with hypocrites, migration, the People of the Book, arbitration between quarrelling parties, and how to pray when an enemy is near. Reading it as a surah only about women misses more than half of it.",
      bn: 'নামটি সূরার পুরো পরিসর বোঝায় না, বোঝায় এর সবচেয়ে স্বতন্ত্র বিধানগুলো। উত্তরাধিকারের অংশ, বিয়ে, ইয়াতীম মেয়েদের প্রতি আচরণ, স্ত্রীদের হক: কুরআনের আর কোথাও এসব এত বিস্তারিত নেই, আর এসব দিয়ে অন্য কোনো সূরাকে চেনাও যায় না। তবে সূরাটি নামের চেয়ে অনেক বড়। এতে আছে মুনাফিকদের কথা, হিজরত, আহলে কিতাব, বিবাদে জড়ানো দুই পক্ষের মধ্যে সালিশ, এমনকি শত্রু কাছে থাকলে কীভাবে নামাজ পড়তে হবে। একে শুধু নারীদের সূরা ভাবলে অর্ধেকেরও বেশি চোখ এড়িয়ে যায়।',
    },
    signal: {
      en: "Expect the Quran's densest body of family law — inheritance, marriage, guardianship — set inside a wider argument about justice, and a running warning about those who profess faith without acting on it.",
      bn: 'কুরআনে পারিবারিক বিধানের সবচেয়ে ঘন সমাবেশ: উত্তরাধিকার, বিয়ে, অভিভাবকত্ব। এসব বসানো আছে ইনসাফ নিয়ে বড় এক আলোচনার ভেতরে। সঙ্গে বারবার সতর্ক করা হয়েছে তাদের, যারা মুখে ঈমানের দাবি করে অথচ আমলে তা দেখায় না।',
    },
    alt: [
      { name: 'An-Nisa al-Kubra', en: 'The greater Women — used to tell it apart from Surat at-Talaq, which Ibn Masud is reported in Sahih al-Bukhari to have called an-Nisa al-Qusra, the shorter Women.', bn: 'বড় নিসা — সূরা তালাক থেকে আলাদা করার জন্য এই নাম। সহীহ বুখারীতে বর্ণিত আছে, ইবনে মাসঊদ সূরা তালাককে বলতেন আন-নিসা আল-কুসরা, অর্থাৎ ছোট নিসা।' },
    ],
    refs: ['4:1', '4:7', '4:127'],
  },
  5: {
    meaning: { en: 'The Table Spread', bn: 'খাদ্যভরা দস্তরখান' },
    source: {
      en: 'From 5:112-115, where the disciples ask Isa to have a table spread with food sent down to them from heaven.',
      bn: '৫:১১২-১১৫ আয়াত থেকে, যেখানে হাওয়ারীরা ঈসার কাছে আকাশ থেকে খাদ্যভরা দস্তরখান নামানোর আবেদন করে।',
    },
    why: {
      en: "The episode that gives the surah its name sits near its very end and takes four verses. Most of what comes before it is law: what may be eaten, how to purify oneself for prayer, oaths and their expiation, witnesses, theft, and the duty to judge by what God revealed. The name is therefore a marker, taken from the surah's most unusual image rather than its subject. Even so the choice is not arbitrary — a table sent down and then made a test for those who received it fits a surah built on the keeping and breaking of covenants.",
      bn: 'যে ঘটনা থেকে নামটি এসেছে, তা সূরার একেবারে শেষদিকে, মাত্র চার আয়াতে। তার আগের প্রায় সবই বিধান: কী খাওয়া যাবে, নামাজের জন্য কীভাবে পবিত্র হতে হবে, শপথ ও তার কাফফারা, সাক্ষ্য, চুরি, আর আল্লাহর নাজিল করা বিধান দিয়ে বিচার করার দায়িত্ব। তাই নামটি নিছক চিহ্ন; সূরার বিষয় থেকে নয়, এর সবচেয়ে ব্যতিক্রমী দৃশ্য থেকে নেওয়া। তবু বাছাইটি এলোমেলো নয়। আকাশ থেকে নেমে আসা দস্তরখান যাদের কাছে এল, তাদের জন্যই তা পরীক্ষা হয়ে দাঁড়াল; আর গোটা সূরাটিই দাঁড়িয়ে আছে অঙ্গীকার রক্ষা ও ভঙ্গের উপর।',
    },
    signal: {
      en: 'Expect a surah of obligations: lawful food, purification, oaths, testimony and treaty-keeping, framed by its opening command to fulfil contracts and closing with Isa questioned about what his followers made of him.',
      bn: 'দায়িত্ব-কর্তব্যের সূরা: হালাল খাবার, পবিত্রতা, শপথ, সাক্ষ্য, চুক্তি রক্ষা। শুরু হয় চুক্তি পূর্ণ করার হুকুম দিয়ে, আর শেষে ঈসাকে জিজ্ঞেস করা হয়, তাঁর অনুসারীরা তাঁকে কী বানিয়ে নিয়েছে।',
    },
    alt: [
      { name: "Al-'Uqud", en: 'The contracts — reported from Ibn Abbas, taken from the opening command in 5:1 to fulfil what you have bound yourselves to.', bn: 'আল-উকূদ বা অঙ্গীকারসমূহ — ইবনে আব্বাস থেকে বর্ণিত, ৫:১ আয়াতের অঙ্গীকার পূর্ণ করার আদেশ থেকে নেওয়া।' },
      { name: 'Al-Munqidhah', en: 'The rescuer — recorded in lists of surah names, understood as the surah that rescues the one who holds to it.', bn: 'আল-মুনকিযাহ বা উদ্ধারকারী — নামতালিকায় বর্ণিত। অর্থ: যে এই সূরা আঁকড়ে ধরে, সূরাটি তাকে উদ্ধার করে।' },
    ],
    refs: ['5:1', '5:112', '5:114'],
  },
  6: {
    meaning: { en: 'The Cattle', bn: 'গবাদি পশু' },
    source: {
      en: 'From the pagan rules about dedicating livestock that the surah takes apart in 6:136-139 and 6:142-144.',
      bn: 'গবাদি পশু দেবতাদের নামে নির্দিষ্ট করার যে মুশরিকী নিয়ম সূরাটি ৬:১৩৬-১৩৯ ও ৬:১৪২-১৪৪ আয়াতে ভেঙে দেয়, সেখান থেকে।',
    },
    why: {
      en: "This is a surah about the oneness of God — one of the most sustained arguments in the Quran against associating anything with Him, running through Ibrahim's search, the signs in creation, and the refusal to compromise with the Makkans. It is named, all the same, after the livestock that idolaters set aside for their gods and hedged with invented prohibitions. The word is distinctive, appears in a block of verses no one forgets, and identifies the surah instantly. Almost no reader would guess the contents from the name, which is exactly how most surah names behave.",
      bn: 'এই সূরার বিষয় তাওহিদ। শিরকের বিরুদ্ধে কুরআনের সবচেয়ে টানা যুক্তিগুলোর একটি এখানে: ইবরাহীমের সত্য-সন্ধান, সৃষ্টিজগতের নিদর্শন, আর মক্কাবাসীদের সঙ্গে কোনো আপস না করার ঘোষণা। তবু নাম এসেছে সেই গবাদি পশু থেকে, যেগুলো মূর্তিপূজকরা তাদের দেবতাদের নামে আলাদা করে রাখত আর মনগড়া নিষেধের বেড়া দিয়ে ঘিরে রাখত। শব্দটি স্বতন্ত্র, আসে এমন কয়েকটি আয়াতে যা কেউ ভোলে না, আর শুনলেই সূরাটি চেনা যায়। নাম শুনে ভেতরের বিষয় প্রায় কেউই আন্দাজ করতে পারবে না। বেশিরভাগ সূরার নাম ঠিক এভাবেই কাজ করে।',
    },
    signal: {
      en: 'Expect argument rather than narrative: a long Makkan case for one Creator, against inherited superstition and invented lawmaking, ending with a statement of the religion Ibrahim followed.',
      bn: 'কাহিনী নয়, যুক্তি: এক স্রষ্টার পক্ষে মক্কী যুগের দীর্ঘ দলিল, বাপ-দাদার কাছ থেকে পাওয়া কুসংস্কার আর মনগড়া বিধান বানানোর বিরুদ্ধে। শেষ হয় ইবরাহীম যে দ্বীনের উপর ছিলেন, তার ঘোষণা দিয়ে।',
    },
    alt: [],
    refs: ['6:136', '6:138', '6:142'],
  },
  7: {
    meaning: { en: 'The Heights', bn: 'উঁচু প্রাচীর' },
    source: {
      en: 'From 7:46-48, the elevated place between the Garden and the Fire, and the men standing on it who recognise the people of both.',
      bn: '৭:৪৬-৪৮ আয়াত থেকে — জান্নাত ও জাহান্নামের মাঝের উঁচু জায়গা, আর তার উপর দাঁড়ানো সেই লোকেরা, যারা দুই দলকেই চিনতে পারে।',
    },
    why: {
      en: "Al-A'raf is named after a scene of three verses that has no parallel anywhere else in the Quran: a raised barrier between the two abodes, with men upon it who can see both sides and have not yet been placed. The surah itself is a long sequence of messengers — Nuh, Hud, Salih, Lut, Shu'ayb and Musa — followed by the covenant taken from the descendants of Adam. Naming it after the heights leaves all that unmentioned and picks the one image that could not belong to any other surah.",
      bn: 'আল-আরাফের নাম এসেছে তিন আয়াতের এমন এক দৃশ্য থেকে, যার তুলনা কুরআনে আর কোথাও নেই: দুই আবাসের মাঝখানে উঁচু এক প্রাচীর, তার উপর কিছু মানুষ, যারা দুই দিকই দেখতে পায় অথচ তাদের ফয়সালা এখনো হয়নি। সূরাটি আসলে রাসূলদের একের পর এক কাহিনী: নূহ, হূদ, সালিহ, লূত, শুআইব ও মূসা; তারপর আদম-সন্তানদের কাছ থেকে নেওয়া অঙ্গীকার। আল-আরাফ নাম এসবের কিছুই বলে না। বেছে নেয় কেবল সেই দৃশ্য, যা অন্য কোনো সূরার হতে পারত না।',
    },
    signal: {
      en: "Expect the Quran's longest run of messenger narratives, from Adam's fall to Musa and the calf, with judgement scenes framing them — and one strange, quiet scene of people waiting on a height.",
      bn: 'কুরআনের দীর্ঘতম রাসূল-কাহিনীর ধারা, আদমের জান্নাত থেকে নেমে আসা থেকে মূসা ও বাছুরপূজা পর্যন্ত; দুই প্রান্তে বিচারের দৃশ্য। আর মাঝে এক অদ্ভুত, নিস্তব্ধ দৃশ্য: উঁচু প্রাচীরে অপেক্ষমাণ কিছু মানুষ।',
    },
    alt: [],
    refs: ['7:46', '7:48'],
  },
  8: {
    meaning: { en: 'The Spoils of War', bn: 'যুদ্ধলব্ধ সম্পদ' },
    source: {
      en: 'From the question that opens the surah in 8:1: they ask you about the spoils of war.',
      bn: 'সূরার প্রথম আয়াত ৮:১-এর প্রশ্ন থেকে — তারা আপনাকে যুদ্ধলব্ধ সম্পদ সম্পর্কে জিজ্ঞাসা করে।',
    },
    why: {
      en: "The name is the surah's first noun, taken from the question that opens it, and here the marker and the subject nearly coincide: the surah was revealed around Badr, and the disposal of what was taken there is one of its concerns. Nearly, but not quite — the bulk of the surah is about the battle itself, the help that came, the conduct expected of believers under arms, and the terms on which fighting and truce are undertaken. The spoils are the occasion of the opening question, not the theme of the whole.",
      bn: 'নামটি সূরার প্রথম বিশেষ্য, শুরুর প্রশ্ন থেকেই নেওয়া। এখানে চিহ্ন আর বিষয় প্রায় মিলে যায়: সূরাটি নাজিল হয়েছে বদরকে ঘিরে, আর সেখানে পাওয়া সম্পদ কীভাবে বণ্টন হবে, সেটি এর আলোচ্য বিষয়গুলোর একটি। প্রায়, পুরোপুরি নয়। সূরার বড় অংশ যুদ্ধটি নিয়েই: যে সাহায্য এসেছিল, অস্ত্র হাতে মুমিনদের কেমন আচরণ করতে হবে, আর কোন শর্তে যুদ্ধ ও সন্ধি হবে। যুদ্ধলব্ধ সম্পদ শুধু শুরুর প্রশ্নের উপলক্ষ, পুরো সূরার বিষয় নয়।',
    },
    signal: {
      en: "Expect Badr: the day the two parties met, how victory is described as God's doing, the fifth set aside for God and the Messenger, and instructions for a community newly at war.",
      bn: 'বদর: দুই দলের মুখোমুখি হওয়ার দিন, বিজয়কে আল্লাহরই কাজ বলে দেখানো, আল্লাহ ও রাসূলের জন্য নির্ধারিত এক-পঞ্চমাংশ, আর সবে যুদ্ধে নামা এক সমাজের জন্য নির্দেশনা।',
    },
    alt: [
      { name: 'Surat Badr', en: 'Asked about Surat al-Anfal, Ibn Abbas is reported to have answered that it was revealed concerning Badr, and the surah is sometimes called by the name of the battle.', bn: 'সূরা আনফাল সম্পর্কে জিজ্ঞেস করা হলে ইবনে আব্বাস বলেছিলেন বলে বর্ণিত আছে, এটি বদর নিয়ে নাজিল হয়েছে। সূরাটিকে কখনো কখনো ওই যুদ্ধের নামেও ডাকা হয়।' },
    ],
    refs: ['8:1', '8:41'],
  },
  9: {
    meaning: { en: 'The Repentance', bn: 'তাওবা' },
    source: {
      en: "From the repentance God turns back to accept in 9:104 and 9:117-118; the surah is equally well known as Bara'ah, the word it opens with in 9:1.",
      bn: '৯:১০৪ ও ৯:১১৭-১১৮ আয়াতে আল্লাহ যে তাওবা কবুল করেন, তা থেকে। সূরাটি বারাআত নামেও সমান পরিচিত; ৯:১ আয়াত এই শব্দ দিয়েই শুরু।',
    },
    why: {
      en: "Two names, and they point at two different things. Bara'ah, the opening word, is a formal declaration of release from treaty obligations towards those who had broken them, and it names the surah by its first word. At-Tawbah names it by its theme: who is turned back to and who is not — the three who stayed behind and were later forgiven, the hypocrites who excused themselves, the tribes on the edges. Both names are used in the early sources, and neither displaced the other, which is unusual.",
      bn: 'দুটি নাম, আর দুটি দুই দিকে ইশারা করে। বারাআত সূরার প্রথম শব্দ। যারা চুক্তি ভেঙেছিল, তাদের প্রতি চুক্তির দায় থেকে মুক্তির আনুষ্ঠানিক ঘোষণা এটি; এই নাম সূরাকে চেনায় তার প্রথম শব্দ দিয়ে। আত-তাওবা নাম চেনায় বিষয় দিয়ে: কার তাওবা কবুল হয়, আর কার হয় না। সেই তিনজন, যাঁরা পিছিয়ে পড়েছিলেন এবং পরে মাফ পেলেন; সেই মুনাফিকরা, যারা অজুহাত দেখাল; আর আশপাশের গোত্রগুলো। প্রাচীন সূত্রে দুটি নামই চলেছে, কোনোটি অন্যটিকে সরিয়ে দেয়নি। এমনটা সচরাচর দেখা যায় না।',
    },
    signal: {
      en: 'Expect the only surah written without the basmalah at its head, a hard surah: broken treaties, the expedition to Tabuk, the exposure of those who stayed home, and the door of repentance held open.',
      bn: 'বিসমিল্লাহ ছাড়া লেখা একমাত্র সূরা, আর কঠিন এক সূরা: ভাঙা চুক্তি, তাবুক অভিযান, যারা ঘরে বসে রইল তাদের মুখোশ খুলে দেওয়া, আর তবু তাওবার দরজা খোলা।',
    },
    alt: [
      { name: "Bara'ah", en: "The declaration of release, from 9:1. This is also the surah copied without the basmalah at its head, and the early community discussed why. Uthman is reported to have said that Bara'ah and al-Anfal resembled one another in subject, that the Prophet died without stating plainly whether it belonged with al-Anfal, and that the two were therefore placed together with no line between them; others reported that a declaration of war was not opened with a formula of mercy. The sources preserve the discussion without settling it, and it is left where they left it.", bn: 'দায়মুক্তির ঘোষণা, ৯:১ আয়াত থেকে। এটিই সেই সূরা, যার শুরুতে বিসমিল্লাহ লেখা হয় না, আর প্রথম যুগের মুসলমানরা এর কারণ নিয়ে আলোচনা করেছেন। উসমান থেকে বর্ণিত: বারাআত ও আনফালের বিষয় কাছাকাছি; এটি আনফালেরই অংশ কি না, নবী তা স্পষ্ট করে বলে যাওয়ার আগেই ইন্তেকাল করেন; তাই দুটিকে মাঝখানে কোনো দাগ ছাড়াই পাশাপাশি রাখা হয়। অন্যরা বর্ণনা করেছেন, যুদ্ধের ঘোষণা রহমতের বাক্য দিয়ে শুরু হয় না। সূত্রগুলো আলোচনাটি সংরক্ষণ করেছে, মীমাংসা করেনি; আমরাও বিষয়টি সেখানেই রাখছি।' },
      { name: 'Al-Fadihah', en: 'The exposer — reported as a name given to it because it kept naming the excuses of the hypocrites until they stood exposed.', bn: 'আল-ফাদিহা বা মুখোশ খুলে দেওয়া সূরা — মুনাফিকদের অজুহাত একের পর এক তুলে ধরে শেষে তাদের মুখোশ খুলে দিয়েছে বলে এই নাম বর্ণিত।' },
      { name: 'Al-Muqashqishah', en: 'Reported as the surah that clears a person of hypocrisy, as a remedy clears an illness.', bn: 'আল-মুকাশকিশাহ — ওষুধ যেমন রোগ সারায়, তেমনি এই সূরা মানুষকে নিফাক থেকে মুক্ত করে বলে এই নাম বর্ণিত।' },
    ],
    refs: ['9:1', '9:104', '9:118'],
  },
  10: {
    meaning: { en: 'Yunus', bn: 'ইউনুস' },
    source: {
      en: 'From 10:98, the one verse in the surah that mentions the people of Yunus, the single town whose faith benefited it after the warning came.',
      bn: '১০:৯৮ আয়াত থেকে। সূরার এই একটি আয়াতেই ইউনুসের কওমের কথা আছে; তারাই একমাত্র জনপদ, সতর্কবাণী আসার পর যাদের ঈমান তাদের কাজে এসেছিল।',
    },
    why: {
      en: 'The surah does not tell the story of Yunus. It mentions his people once, in a single verse, and the story itself is told elsewhere, in 37:139-148 and in 21:87-88. Yet that one mention gives the surah its name. This is the marker principle at its plainest: a name has to be short, distinctive and easy to remember, and it does not have to describe anything. What the surah actually does is argue — with those who call the revelation invented, and with those who ask why no sign is sent.',
      bn: 'এই সূরা ইউনুসের কাহিনী বলে না। তাঁর কওমের কথা আসে মাত্র একবার, একটি আয়াতে; কাহিনীটি আছে অন্য জায়গায়, ৩৭:১৩৯-১৪৮ ও ২১:৮৭-৮৮ আয়াতে। তবু ওই এক উল্লেখ থেকেই সূরার নাম। নাম যে কেবল চেনার চিহ্ন, তা এখানে সবচেয়ে পরিষ্কার: নাম হবে ছোট, স্বতন্ত্র, সহজে মনে রাখার মতো; কোনো কিছুর বর্ণনা দেওয়া তার কাজ নয়। সূরাটি আসলে তর্ক করে: যারা ওহিকে বানানো কথা বলে, আর যারা প্রশ্ন তোলে কেন কোনো নিদর্শন পাঠানো হয় না, তাদের সঙ্গে।',
    },
    signal: {
      en: 'Expect a Makkan argument about revelation and accountability, with brief passages on Nuh and on Musa before Pharaoh, and the striking note that faith came too late for every nation but one.',
      bn: 'ওহি ও জবাবদিহি নিয়ে মক্কী যুক্তি, সঙ্গে নূহ আর ফেরাউনের সামনে মূসার সংক্ষিপ্ত কথা। আর চমকে দেওয়ার মতো একটি কথা: একটি জাতি ছাড়া বাকি সবার ঈমান এসেছিল বড্ড দেরিতে।',
    },
    alt: [],
    refs: ['10:98'],
  },
  11: {
    meaning: { en: 'Hud', bn: 'হূদ' },
    source: {
      en: 'From the account of the prophet Hud and the people of Ad in 11:50-60.',
      bn: '১১:৫০-৬০ আয়াতে বর্ণিত নবী হূদ ও আদ জাতির বৃত্তান্ত থেকে।',
    },
    why: {
      en: "Seven prophets appear in this surah — Nuh, Hud, Salih, Ibrahim, Lut, Shu'ayb and Musa — and it is named after the second of them. Hud's account is not the longest here, nor the most detailed; it is simply the one that gave the surah a usable label, since no other surah carries his name at its head. The pattern is the point: names distinguish surahs from one another, so a word that occurs in several places tends to be attached to the one where it is most convenient, not the one where it is most prominent.",
      bn: 'এই সূরায় সাতজন নবীর কথা আছে: নূহ, হূদ, সালিহ, ইবরাহীম, লূত, শুআইব ও মূসা। নাম রাখা হয়েছে দ্বিতীয়জনের নামে। হূদের বৃত্তান্ত এখানে সবচেয়ে দীর্ঘ নয়, সবচেয়ে বিস্তারিতও নয়। শুধু তাঁর নামটিই সূরাকে কাজে লাগার মতো একটা পরিচয় দিয়েছে, কারণ আর কোনো সূরার শিরোনামে তাঁর নাম নেই। আসল কথা এই ধারাটাই: নাম দিয়ে এক সূরাকে আরেক সূরা থেকে আলাদা করা হয়। তাই কোনো শব্দ কয়েক জায়গায় এলে সাধারণত তা জুড়ে যায় সেই সূরার সঙ্গে, যেখানে সুবিধা সবচেয়ে বেশি; যেখানে শব্দটি সবচেয়ে প্রধান, সেখানে নয়।',
    },
    signal: {
      en: 'Expect one destroyed nation after another, told with unusual weight and detail — the flood and the son who refused the ark, Ad, Thamud, the people of Lut — and repeated calls to stand firm.',
      bn: 'একের পর এক ধ্বংস হয়ে যাওয়া জাতি, অসাধারণ গাম্ভীর্য আর খুঁটিনাটিসহ বলা: মহাপ্লাবন আর নৌকায় উঠতে অস্বীকার করা ছেলে, আদ, সামূদ, লূতের কওম। সঙ্গে বারবার অবিচল থাকার ডাক।',
    },
    alt: [],
    refs: ['11:50', '11:53', '11:58'],
  },
  12: {
    meaning: { en: 'Yusuf', bn: 'ইউসুফ' },
    source: {
      en: 'From the account of Yusuf that runs unbroken from his dream in 12:4 to his family settling in Egypt.',
      bn: 'ইউসুফের কাহিনী থেকে, যা ১২:৪ আয়াতে তাঁর স্বপ্ন থেকে শুরু হয়ে পরিবারের মিসরে থিতু হওয়া পর্যন্ত একটানা চলে।',
    },
    why: {
      en: "Here the name really is the subject, which makes this surah an exception. Almost the whole of it is one continuous narrative about one man, told in order from the dream to its fulfilment, without the digressions that break up narrative elsewhere in the Quran. So Yusuf is not a marker word plucked from a passing verse; it is what the surah is about, and the opening verses announce as much by calling what follows the best of narrations. When a surah name and a surah's content match this closely, it is worth noticing, because usually they do not.",
      bn: 'এখানে নামটিই আসলে বিষয়, আর সে কারণেই সূরাটি ব্যতিক্রম। প্রায় পুরো সূরা একজন মানুষকে নিয়ে একটানা এক কাহিনী, স্বপ্ন থেকে তার বাস্তবায়ন পর্যন্ত ক্রমানুসারে বলা। কুরআনের অন্য জায়গায় যেমন কাহিনীর মাঝে অন্য প্রসঙ্গ এসে পড়ে, এখানে তা নেই। তাই ইউসুফ কোনো এক আয়াত থেকে তুলে আনা চিহ্ন-শব্দ নয়; সূরাটি তাঁকে নিয়েই। শুরুর আয়াতগুলোও সেটাই জানিয়ে দেয়, সামনের কাহিনীকে শ্রেষ্ঠ কাহিনী বলে। সূরার নাম আর বিষয় এতটা মিলে গেলে তা খেয়াল করার মতো, কারণ সাধারণত মেলে না।',
    },
    signal: {
      en: 'Expect a single story from beginning to end: brothers, a well, a household in Egypt, prison, dreams read, famine, and a reunion — with the moral drawn only at the close.',
      bn: 'শুরু থেকে শেষ একটিই কাহিনী: ভাইয়েরা, কূপ, মিসরের এক ঘর, কারাগার, স্বপ্নের ব্যাখ্যা, দুর্ভিক্ষ, আর পুনর্মিলন। শিক্ষাটি টানা হয় একেবারে শেষে।',
    },
    alt: [
      { name: 'Ahsan al-Qasas', en: 'The best of narrations — taken from 12:3, and used as a descriptive title for the surah rather than as a second formal name.', bn: 'আহসানুল কাসাস বা শ্রেষ্ঠ কাহিনী — ১২:৩ আয়াত থেকে নেওয়া। এটি সূরার দ্বিতীয় আনুষ্ঠানিক নাম নয়, সূরার পরিচয় দিতে ব্যবহৃত একটি বিশেষণ।' },
    ],
    refs: ['12:3', '12:4', '12:7'],
  },
  13: {
    meaning: { en: 'The Thunder', bn: 'বজ্র' },
    source: {
      en: 'From 13:13, where the thunder exalts God with praise, as do the angels in awe of Him, while He sends the thunderbolts.',
      bn: '১৩:১৩ আয়াত থেকে, যেখানে বজ্র আল্লাহর প্রশংসাসহ তাসবীহ পড়ে, ফেরেশতারাও তাঁর ভয়ে তাসবীহ পড়ে, আর তিনি পাঠান বজ্রপাত।',
    },
    why: {
      en: "Thunder is named once in this surah, in a single verse where a sound everyone has heard is described as praise. That is what makes it work as a marker: the surah is a sustained argument about God's power over creation and the truth of what was revealed, full of things that can be seen — mountains, rivers, lightning, the rain that fills a valley — and thunder is the one that startles. A reader who has met 13:13 once can find the surah again by that word alone. The name reports an image, not a theme.",
      bn: 'এই সূরায় বজ্রের কথা আছে একবারই, একটি আয়াতে, যেখানে সবার শোনা একটি আওয়াজকে বলা হয়েছে আল্লাহর প্রশংসা। চিহ্ন হিসেবে এটি কাজ করে এ কারণেই। সূরাটি সৃষ্টির উপর আল্লাহর কুদরত আর নাজিল হওয়া বাণীর সত্যতা নিয়ে একটানা যুক্তি, চোখে দেখা যায় এমন জিনিসে ভরা: পাহাড়, নদী, বিদ্যুৎ চমকানো, উপত্যকা ভরিয়ে দেওয়া বৃষ্টি। এদের মধ্যে বজ্রই মানুষকে চমকে দেয়। ১৩:১৩ একবার যিনি পড়েছেন, তিনি শুধু এই শব্দটি দিয়েই সূরাটি আবার খুঁজে নিতে পারবেন। নামটি একটি দৃশ্যের কথা বলে, বিষয়ের নয়।',
    },
    signal: {
      en: 'Expect signs read off the natural world as evidence, a comparison of truth and falsehood to scum carried off by a flood, and steady reassurance that hearts settle by the remembrance of God.',
      bn: 'প্রকৃতির নিদর্শনকে প্রমাণ হিসেবে তুলে ধরা, সত্য ও মিথ্যাকে বানের পানিতে ভেসে আসা ফেনার সঙ্গে তুলনা, আর বারবার এই আশ্বাস: আল্লাহর জিকিরেই অন্তর প্রশান্ত হয়।',
    },
    alt: [],
    refs: ['13:13'],
  },
  14: {
    meaning: { en: 'Ibrahim', bn: 'ইবরাহীম' },
    source: {
      en: "From Ibrahim's long supplication for Makkah and for his descendants in 14:35-41.",
      bn: '১৪:৩৫-৪১ আয়াতে মক্কা ও নিজের বংশধরদের জন্য ইবরাহীমের দীর্ঘ দোয়া থেকে।',
    },
    why: {
      en: 'The surah is about messengers and what happens when people refuse them, and Ibrahim enters it late, not as the hero of a narrative but as a voice in prayer: asking for the city to be made secure, for his descendants to be kept from idols, for the prayer to be established. Those seven verses are what the name is taken from. It is a marker again — one passage out of a surah that spends most of its length elsewhere — though a well-chosen one, since a prayer offered generations earlier fits a surah about the long consequences of accepting or rejecting a message.',
      bn: 'সূরার বিষয় রাসূলগণ, আর মানুষ তাঁদের প্রত্যাখ্যান করলে কী ঘটে। ইবরাহীম আসেন শেষের দিকে, কোনো কাহিনীর নায়ক হয়ে নয়, দোয়ারত এক কণ্ঠ হয়ে: এই শহরকে নিরাপদ করার দোয়া, বংশধরদের মূর্তিপূজা থেকে বাঁচিয়ে রাখার দোয়া, নামাজ কায়েম রাখার দোয়া। ওই সাত আয়াত থেকেই নামটি নেওয়া। এটিও একটি চিহ্ন; সূরার বেশিরভাগ অংশ অন্য প্রসঙ্গে, নামটি এসেছে একটিমাত্র অংশ থেকে। তবে চিহ্নটি ভালোভাবে বাছা। বহু প্রজন্ম আগে করা একটি দোয়া এমন সূরার সঙ্গেই মানায়, যার বিষয় বার্তা মানা বা না মানার সুদূরপ্রসারী পরিণতি।',
    },
    signal: {
      en: "Expect messengers answered with threats, a scene of the arrogant and the weak arguing before God on the Day of Judgement, the parable of the good word as a rooted tree, and a father's prayer for a barren valley.",
      bn: 'রাসূলদের দাওয়াতের জবাবে হুমকি, কিয়ামতের দিন আল্লাহর সামনে অহংকারী আর দুর্বলদের বাদানুবাদ, উত্তম কথাকে শিকড় গাড়া গাছের সঙ্গে তুলনা, আর শস্যহীন এক উপত্যকার জন্য এক পিতার দোয়া।',
    },
    alt: [],
    refs: ['14:35', '14:37', '14:41'],
  },
  15: {
    meaning: { en: 'The Rocky Tract', bn: 'পাথুরে উপত্যকা' },
    source: {
      en: 'From 15:80, where the companions of al-Hijr, the rock-cut settlement of Thamud, are said to have denied the messengers.',
      bn: '১৫:৮০ আয়াত থেকে, যেখানে বলা হয়েছে, আল-হিজরের অধিবাসীরা রাসূলদের অস্বীকার করেছিল। আল-হিজর হলো পাথর কেটে বানানো সামূদের জনপদ।',
    },
    why: {
      en: 'Al-Hijr is a place, named once, in a passage of a few verses about a people who carved their houses out of rock and were destroyed anyway. The surah around it contains far more famous material: the promise that the Reminder is preserved, the account of Iblis refusing to bow, the guests who came to Ibrahim and then to Lut, and the seven oft-repeated verses. Any of those could have supplied a name. The place name won because it is unmistakable and belongs to no other surah — which is what a marker is for.',
      bn: 'আল-হিজর একটি জায়গার নাম। এর উল্লেখ একবারই, কয়েক আয়াতের এক অংশে, এমন এক জাতিকে নিয়ে যারা পাহাড় কেটে ঘর বানিয়েছিল, তবু ধ্বংস থেকে বাঁচেনি। এই সূরায় এর চেয়ে অনেক বিখ্যাত বিষয় আছে: যিকর সংরক্ষিত থাকার প্রতিশ্রুতি, ইবলীসের সিজদা করতে অস্বীকারের বৃত্তান্ত, ইবরাহীম ও পরে লূতের কাছে আসা মেহমানরা, আর বারবার পঠিত সাত আয়াত। এদের যেকোনোটি থেকেই নাম আসতে পারত। জায়গার নামটিই টিকে গেল, কারণ এটি ভুল হওয়ার নয় এবং আর কোনো সূরার সঙ্গে জড়িত নয়। চিহ্নের কাজই তো এটা।',
    },
    signal: {
      en: 'Expect consolation for a Prophet being mocked: creation and its guarded order, the refusal of Iblis, ruined towns still standing on the road, and the assurance that the revelation itself is protected.',
      bn: 'উপহাসের শিকার এক নবীর জন্য সান্ত্বনা: সৃষ্টি আর তার সুরক্ষিত শৃঙ্খলা, ইবলীসের নাফরমানি, পথের ধারে আজও দাঁড়িয়ে থাকা ধ্বংসপ্রাপ্ত জনপদ, আর এই আশ্বাস যে ওহি নিজেই সুরক্ষিত।',
    },
    alt: [],
    refs: ['15:80'],
  },
  16: {
    meaning: { en: 'The Bee', bn: 'মৌমাছি' },
    source: {
      en: 'From 16:68-69, where God inspires the bee to take homes in the hills and the trees, and a drink of varying colours comes out of it.',
      bn: '১৬:৬৮-৬৯ আয়াত থেকে, যেখানে আল্লাহ মৌমাছিকে পাহাড় ও গাছে ঘর বানানোর ইলহাম দেন, আর তার ভেতর থেকে বের হয় বিভিন্ন রঙের পানীয়।',
    },
    why: {
      en: "The bee appears in two verses of a long surah whose real business is counting God's favours: rain, cattle, ships, night and day, the stars for navigation, the pairing of people. The bee is the sharpest instance of the whole list — a small creature working under direct inspiration, producing something in which there is healing for people. It stands out enough to name the surah while the larger subject, favour after favour, goes unnamed. The image is doing the work of a title, and the tradition also recorded a name for the subject itself.",
      bn: 'মৌমাছির কথা আছে দীর্ঘ এক সূরার মাত্র দুই আয়াতে। সূরার আসল কাজ আল্লাহর নিয়ামত একে একে গুনিয়ে দেওয়া: বৃষ্টি, গবাদি পশু, নৌযান, রাত ও দিন, পথ চেনার তারা, মানুষকে জোড়ায় জোড়ায় সৃষ্টি। গোটা তালিকায় মৌমাছিই সবচেয়ে চোখে পড়ার মতো উদাহরণ। ছোট্ট এক প্রাণী সরাসরি আল্লাহর ইলহামে কাজ করে, আর বানায় এমন জিনিস, যাতে মানুষের জন্য শিফা আছে। এতটাই আলাদা করে চোখে পড়ে যে সূরার নামই হয়ে গেল, অথচ বড় বিষয়টি, নিয়ামতের পর নিয়ামত, নামে আসেনি। দৃশ্যটিই এখানে শিরোনামের কাজ করছে; তবে আলেমরা বিষয়টির নামেও সূরার একটি নাম বর্ণনা করেছেন।',
    },
    signal: {
      en: 'Expect an inventory of blessings and the argument built on it, warnings against inventing lawful and unlawful, patience under persecution, and the closing instruction to invite with wisdom and good counsel.',
      bn: 'নিয়ামতের তালিকা ও তার উপর দাঁড় করানো যুক্তি, নিজে থেকে হালাল-হারাম বানানোর বিরুদ্ধে সতর্কবাণী, নির্যাতনের মুখে ধৈর্য, আর শেষে হিকমত ও সদুপদেশ দিয়ে দাওয়াত দেওয়ার নির্দেশ।',
    },
    alt: [
      { name: "Surat an-Ni'am", en: 'The surah of favours — reported as a name for it because of the long enumeration of blessings that fills it.', bn: 'নিয়ামতের সূরা — এতে নিয়ামতের দীর্ঘ তালিকা থাকার কারণে এই নাম বর্ণিত।' },
    ],
    refs: ['16:68', '16:69'],
  },
  17: {
    meaning: { en: 'The Night Journey', bn: 'রাতের সফর' },
    source: {
      en: 'From 17:1, the journey by night from the Sacred Mosque to the Farthest Mosque; the surah is also called Bani Israil, from the decree upon the Children of Israel in 17:2-8.',
      bn: '১৭:১ আয়াত থেকে — মসজিদুল হারাম থেকে মসজিদুল আকসা পর্যন্ত রাতের সফর; সূরাটিকে বনী ইসরাঈলও বলা হয়, ১৭:২-৮ আয়াতে বনী ইসরাঈলের ব্যাপারে দেওয়া ফয়সালা থেকে।',
    },
    why: {
      en: "Two names, each anchored in a different part of the same surah, and both in use — the Bengali and Urdu title pages print Bani Israil where the English prints Al-Isra. Al-Isra comes from the opening verse, a single sentence about a journey taken at night. Bani Israil comes from the section immediately after it, a decree of two corruptions and two reckonings. Neither name covers the surah, which turns quickly to commandments, the Quran's challenge, and the spirit. The two names simply show that a surah can be identified from more than one landmark.",
      bn: 'দুটি নাম, একই সূরার দুই জায়গা থেকে নেওয়া, আর দুটিই চালু। বাংলা ও উর্দু শিরোনামে লেখা হয় বনী ইসরাঈল, ইংরেজিতে আল-ইসরা। আল-ইসরা এসেছে প্রথম আয়াত থেকে, রাতের এক সফর নিয়ে একটিমাত্র বাক্য। বনী ইসরাঈল এসেছে ঠিক তার পরের অংশ থেকে: দুইবার ফাসাদ আর দুইবার হিসাব চুকানোর ফয়সালা। কোনো নামই পুরো সূরাকে ধরে না; সূরা দ্রুত চলে যায় নানা হুকুম, কুরআনের চ্যালেঞ্জ আর রূহের প্রসঙ্গে। দুটি নাম শুধু এটুকু দেখায় যে একটি সূরাকে একাধিক চিহ্ন দিয়ে চেনা যায়।',
    },
    signal: {
      en: 'Expect one verse on the night journey and then a Makkan surah of instruction: parents, wealth, killing, orphans, honesty in measure — and the challenge that none could produce the like of this Quran.',
      bn: 'রাতের সফর নিয়ে একটিমাত্র আয়াত, তারপর উপদেশে ভরা এক মক্কী সূরা: বাবা-মা, সম্পদ, হত্যা, ইয়াতীম, মাপে সততা। আর সেই চ্যালেঞ্জ: এই কুরআনের মতো কিছু কেউ আনতে পারবে না।',
    },
    alt: [
      { name: "Bani Isra'il", en: 'The Children of Israel — from 17:2-8, and the name printed in many South Asian mushafs, including the Bengali and Urdu names this app displays.', bn: 'বনী ইসরাঈল — ১৭:২-৮ আয়াত থেকে; দক্ষিণ এশিয়ার বহু মুসহাফে এই নামই ছাপা হয়, এই অ্যাপের বাংলা ও উর্দু নামেও তাই।' },
      { name: 'Subhan', en: 'From the first word of the surah, glorified be He; early sources sometimes refer to it simply as Surat Subhan.', bn: 'সূরার প্রথম শব্দ সুবহানা থেকে; প্রাচীন সূত্রে একে কখনো শুধু সূরা সুবহান বলা হয়েছে।' },
    ],
    refs: ['17:1', '17:2', '17:4'],
  },
  18: {
    meaning: { en: 'The Cave', bn: 'গুহা' },
    source: {
      en: 'From the youths who took refuge in a cave and slept there for years, told in 18:9-26.',
      bn: '১৮:৯-২৬ আয়াতে বর্ণিত সেই যুবকদের কথা থেকে, যারা এক গুহায় আশ্রয় নিয়ে বছরের পর বছর ঘুমিয়ে ছিল।',
    },
    why: {
      en: 'Four stories fill this surah — the sleepers in the cave, the man with two gardens, Musa and the servant of God he travelled with, and Dhul-Qarnayn — and the name is taken from the first. The word itself recurs through that opening account, which makes it an easy handle. It is not a summary: nothing in the name suggests the other three stories or the thread that ties them together, which is trial — trial in faith, in wealth, in knowledge and in power. The cave is where the surah begins, not what it is about.',
      bn: 'এই সূরায় চারটি কাহিনী: গুহার ঘুমন্ত যুবকরা, দুই বাগানের মালিক, মূসা ও আল্লাহর যে বান্দার সঙ্গে তিনি সফর করেছিলেন, আর যুলকারনাইন। নাম নেওয়া হয়েছে প্রথম কাহিনী থেকে। শব্দটি ওই কাহিনীতে বারবার আসে, তাই সহজেই মনে থাকে। তবে এটি সারসংক্ষেপ নয়। নাম শুনে বাকি তিন কাহিনীর কথা বোঝা যায় না, বোঝা যায় না সেই সুতোও, যা চারটিকে বেঁধে রেখেছে: পরীক্ষা। ঈমানের পরীক্ষা, সম্পদের, জ্ঞানের আর ক্ষমতার পরীক্ষা। গুহা সূরার শুরু, সূরার বিষয় নয়।',
    },
    signal: {
      en: 'Expect four stories and the lessons drawn from them, a running contrast between what lasts and what does not, and the surah widely recited on Fridays.',
      bn: 'চারটি কাহিনী আর তা থেকে নেওয়া শিক্ষা; যা টিকে থাকে আর যা টেকে না, তার মধ্যে একটানা তুলনা। জুমার দিনে বহু মানুষ এই সূরা পড়েন।',
    },
    alt: [],
    refs: ['18:9', '18:10', '18:25'],
  },
  19: {
    meaning: { en: 'Maryam', bn: 'মারইয়াম' },
    source: {
      en: 'From 19:16, where the Prophet is told to mention Maryam in the Book, and from the annunciation and the birth that follow.',
      bn: '১৯:১৬ আয়াত থেকে, যেখানে নবীকে বলা হচ্ছে কিতাবে মারইয়ামের কথা স্মরণ করতে; আর তার পরের সুসংবাদ ও জন্মের বৃত্তান্ত থেকে।',
    },
    why: {
      en: "This is the only surah named after a woman, and Maryam is the only woman the Quran names outright. The account of her withdrawal, the annunciation, the birth under the palm and her return to her people fills the surah's first section, and the name is taken from there. What follows moves on — Ibrahim and his father, Musa, Idris, and then a long passage on those who inherited the prayer and lost it. So the name marks the opening narrative rather than the whole, in the usual way, but it marks a section that is genuinely the surah's most distinctive.",
      bn: 'এটিই একমাত্র সূরা, যার নাম একজন নারীর নামে; আর মারইয়ামই একমাত্র নারী, কুরআন যাঁর নাম সরাসরি নিয়েছে। তাঁর নির্জনে সরে যাওয়া, সুসংবাদ, খেজুর গাছের নিচে সন্তান প্রসব, আর কওমের কাছে ফিরে আসা: এই বৃত্তান্তে সূরার প্রথম অংশ ভরা, নামটিও সেখান থেকে। এরপর সূরা অন্য দিকে এগোয়: ইবরাহীম ও তাঁর পিতা, মূসা, ইদরীস, তারপর তাদের নিয়ে দীর্ঘ আলোচনা, যারা নামাজ উত্তরাধিকারে পেয়েও নষ্ট করে ফেলল। অর্থাৎ সাধারণ নিয়মেই নামটি পুরো সূরাকে নয়, শুরুর কাহিনীকে চিহ্নিত করে। তবে যে অংশকে চিহ্নিত করে, সেটিই সত্যিই সূরার সবচেয়ে স্বতন্ত্র অংশ।',
    },
    signal: {
      en: 'Expect birth after birth granted against expectation, Yahya and then Isa, a gentle exchange between Ibrahim and his father, and a surah in short rhyming verses that was recited to the Negus.',
      bn: 'আশার বাইরে একের পর এক সন্তান দান: প্রথমে ইয়াহইয়া, তারপর ঈসা। ইবরাহীম ও তাঁর পিতার মধ্যে কোমল কথাবার্তা। আর ছোট ছোট ছন্দময় আয়াতের এই সূরাই নাজাশীর দরবারে পড়ে শোনানো হয়েছিল।',
    },
    alt: [
      { name: 'Kaf Ha Ya Ayn Sad', en: 'The surah is sometimes identified by the disjointed letters that open it, in the way Ta-Ha and Ya-Sin are.', bn: 'তা-হা বা ইয়াসীনের মতো, এই সূরাকেও কখনো তার শুরুর বিচ্ছিন্ন হরফগুলো দিয়ে চিহ্নিত করা হয়।' },
    ],
    refs: ['19:16', '19:27', '19:34'],
  },
  20: {
    meaning: { en: 'The letters Ta Ha', bn: 'তা-হা হরফ দুটি' },
    source: {
      en: 'From 20:1, the two disjointed letters that open the surah and stand as its name.',
      bn: '২০:১ আয়াত থেকে। সূরা যে দুটি বিচ্ছিন্ন হরফ দিয়ে শুরু, সেগুলোই এর নাম।',
    },
    why: {
      en: 'The name is the two letters themselves, and their meaning is not established. They belong to the disjointed letters that open twenty-nine surahs, and the position most scholars settled on is to recite and affirm them while declining to claim knowledge of what they mean. A reading that takes ta ha as an address meaning O man is reported from some early authorities, sometimes on the basis of a dialect word, but it is a reported view rather than an established fact, and other early authorities left the letters alone. The name identifies the surah; it does not describe it.',
      bn: 'নামটি ওই দুটি হরফই, আর এদের অর্থ নিশ্চিতভাবে জানা নেই। ঊনত্রিশটি সূরা যে বিচ্ছিন্ন হরফ দিয়ে শুরু হয়েছে, এগুলো তারই অংশ। অধিকাংশ আলেম এই অবস্থানেই স্থির হয়েছেন: হরফগুলো পড়া হবে, সত্য বলে মানা হবে, কিন্তু এদের অর্থ জানার দাবি করা হবে না। কিছু প্রাচীন আলেম থেকে বর্ণিত আছে, তা-হা একটি সম্বোধন, যার অর্থ হে মানুষ; কখনো কোনো আঞ্চলিক শব্দের ভিত্তিতে এ কথা বলা হয়েছে। তবে এটি একটি বর্ণিত মত, প্রতিষ্ঠিত তথ্য নয়; অন্য প্রাচীন আলেমরা হরফগুলোর ব্যাখ্যায় যাননি। নামটি সূরাকে চেনায়, বর্ণনা করে না।',
    },
    signal: {
      en: "Expect the Quran's longest single telling of Musa: the fire on the mountain, the staff, Pharaoh's magicians, the crossing, and the calf — framed by consolation for a Prophet carrying a heavy message.",
      bn: 'কুরআনে মূসার কাহিনীর দীর্ঘতম একক বর্ণনা: পাহাড়ে আগুন, লাঠি, ফেরাউনের জাদুকররা, সমুদ্র পার হওয়া, আর বাছুরপূজা। শুরু ও শেষে আছে ভারী বার্তা বয়ে চলা এক নবীর জন্য সান্ত্বনা।',
    },
    alt: [],
    refs: ['20:1'],
  },
  21: {
    meaning: { en: 'The Prophets', bn: 'নবীগণ' },
    source: {
      en: 'From the sequence of prophets recalled one after another through the second half of the surah, 21:48-91.',
      bn: 'সূরার দ্বিতীয়ার্ধে, ২১:৪৮-৯১ আয়াতে, একের পর এক নবীকে স্মরণ করা হয়েছে; সেখান থেকে।',
    },
    why: {
      en: "This is one of the minority of names that does describe the contents. Prophet after prophet is recalled in a single run — Musa and Harun, Ibrahim, Lut, Nuh, Dawud and Sulayman, Ayyub, Ismail, Idris, Dhul-Kifl, Yunus, Zakariyya, Yahya and Isa with his mother — each in a few verses, many with the same point: they called on their Lord and were answered. The name reports that structure rather than isolating a striking word. It is worth noticing how rare that is; most surah names would tell you nothing at all about what lies inside.",
      bn: 'অল্প যে কয়েকটি নাম সত্যিই বিষয় বর্ণনা করে, এটি তাদের একটি। এখানে একটানা নবীর পর নবীর কথা আসে: মূসা ও হারূন, ইবরাহীম, লূত, নূহ, দাউদ ও সুলাইমান, আইয়ূব, ইসমাঈল, ইদরীস, যুলকিফল, ইউনুস, যাকারিয়া, ইয়াহইয়া, আর মায়ের সঙ্গে ঈসা। প্রত্যেকের কথা কয়েক আয়াতে, আর অনেকের বেলায় একই কথা: তাঁরা রবকে ডেকেছিলেন, আর তিনি সাড়া দিয়েছিলেন। নামটি এই গঠনেরই খবর দেয়, চোখে পড়ার মতো কোনো একটি শব্দ বেছে নেয় না। এমনটা কত বিরল, তা খেয়াল করার মতো; বেশিরভাগ সূরার নাম ভেতরে কী আছে, তার কিছুই বলে না।',
    },
    signal: {
      en: 'Expect short, rapid accounts of many prophets and their answered prayers, set inside a Makkan argument that the reckoning has drawn near and that the heavens and earth were not made in play.',
      bn: 'বহু নবীর ছোট ছোট, দ্রুত বৃত্তান্ত আর তাঁদের কবুল হওয়া দোয়া। এসব বসানো আছে এক মক্কী যুক্তির ভেতরে: হিসাবের সময় ঘনিয়ে এসেছে, আর আকাশ ও পৃথিবী খেলাচ্ছলে বানানো হয়নি।',
    },
    alt: [],
    refs: ['21:48', '21:76', '21:91'],
  },
  22: {
    meaning: { en: 'The Pilgrimage', bn: 'হজ্জ' },
    source: {
      en: 'From 22:26-27, where Ibrahim is shown the site of the House and told to proclaim the pilgrimage to the people.',
      bn: '২২:২৬-২৭ আয়াত থেকে, যেখানে ইবরাহীমকে বাইতুল্লাহর স্থান দেখিয়ে দিয়ে মানুষের কাছে হজ্জের ঘোষণা দিতে বলা হয়।',
    },
    why: {
      en: "The pilgrimage passage is one section of a surah that also argues about resurrection, gives the first permission to fight back, describes the trembling of the earth at the Hour and contains two places of prostration. Yet hajj is the word that names it, partly because no other surah carries that name and partly because the call goes back to Ibrahim, which sets the rites in the oldest possible frame. Read the name as a marker pointing at the surah's most concrete section, not as a claim that the surah is a manual of pilgrimage.",
      bn: 'হজ্জের অংশটি সূরার একটি ভাগ মাত্র। এই সূরায় পুনরুত্থান নিয়ে যুক্তি আছে, জুলুমের জবাবে লড়াইয়ের প্রথম অনুমতি আছে, কিয়ামতের সময় পৃথিবী কেঁপে ওঠার বর্ণনা আছে, আর আছে দুটি সিজদার আয়াত। তবু নাম হলো হজ্জ। এর এক কারণ, অন্য কোনো সূরার এই নাম নেই; আরেক কারণ, এই আহ্বান ফিরে যায় ইবরাহীম পর্যন্ত, ফলে হজ্জের আমলগুলো দাঁড়ায় সবচেয়ে প্রাচীন ভিতের উপর। তাই নামটিকে দেখুন সূরার সবচেয়ে বাস্তব অংশের দিকে ইশারা করা চিহ্ন হিসেবে; সূরাটি হজ্জের নিয়মকানুনের বই, এমন দাবি হিসেবে নয়।',
    },
    signal: {
      en: 'Expect the Hour described in its opening lines, the rites and their meaning, sacrifice weighed by piety rather than meat, permission granted to the wronged to defend themselves, and two verses of prostration.',
      bn: 'শুরুর আয়াতগুলোতেই কিয়ামতের বর্ণনা; হজ্জের আমল ও তার তাৎপর্য; কুরবানি, যার ওজন হয় তাকওয়া দিয়ে, মাংস দিয়ে নয়; মজলুমদের আত্মরক্ষার অনুমতি; আর সিজদার দুটি আয়াত।',
    },
    alt: [],
    refs: ['22:26', '22:27', '22:32'],
  },
  23: {
    meaning: { en: 'The Believers', bn: 'মুমিনগণ' },
    source: {
      en: 'From the opening words of the surah in 23:1: the believers have succeeded.',
      bn: 'সূরার প্রথম আয়াত ২৩:১ থেকে — মুমিনরা সফল হয়েছে।',
    },
    why: {
      en: 'Here the name comes from the first word and also states the theme, which is unusual. The surah opens by listing what makes believers successful — humility in prayer, turning from idle talk, chastity, trusts kept, prayers guarded — and everything after it is measured against that list: the messengers who were called liars, the arguments of the deniers, and the questioning at the end about how long they lingered on earth. So this is not a marker word snatched from a passing verse. The name says what the surah sets out to define.',
      bn: 'এখানে নাম এসেছে প্রথম শব্দ থেকে, আবার সেটিই বিষয় বলে দেয়। এমনটা সচরাচর হয় না। সূরা শুরু হয় একটি তালিকা দিয়ে, কোন কোন গুণ মুমিনকে সফল করে: নামাজে বিনয়, অনর্থক কথা থেকে দূরে থাকা, লজ্জাস্থানের হেফাজত, আমানত রক্ষা, নামাজের যত্ন। এরপরের সবকিছু মাপা হয় ওই তালিকা দিয়ে: যেসব রাসূলকে মিথ্যাবাদী বলা হয়েছিল, অস্বীকারকারীদের যুক্তি, আর শেষে সেই প্রশ্ন, তারা দুনিয়াতে কতকাল ছিল। তাই এটি কোনো এক আয়াত থেকে তুলে আনা চিহ্ন-শব্দ নয়। সূরাটি কী বোঝাতে এসেছে, নামটিই তা বলে দেয়।',
    },
    signal: {
      en: 'Expect a portrait of the successful believer at the start, then the stages of a human being being formed, a series of rejected messengers, and a closing scene of regret at the reckoning.',
      bn: 'শুরুতে সফল মুমিনের ছবি, তারপর মানুষ গড়ে ওঠার স্তরগুলো, একের পর এক প্রত্যাখ্যাত রাসূল, আর শেষে হিসাবের দিনে আফসোসের দৃশ্য।',
    },
    alt: [],
    refs: ['23:1', '23:9'],
  },
  24: {
    meaning: { en: 'The Light', bn: 'আলো' },
    source: {
      en: 'From 24:35, the verse comparing the light of God to a lamp in a niche, in a glass like a brilliant star.',
      bn: '২৪:৩৫ আয়াত থেকে, যেখানে আল্লাহর নূরকে তুলনা করা হয়েছে তাকে রাখা এক প্রদীপের সঙ্গে; প্রদীপটি একটি কাচের ভেতরে, আর কাচটি যেন উজ্জ্বল তারা।',
    },
    why: {
      en: "Almost all of this surah is legislation — the penalty for unchastity, the accusation of chaste women, the false report against the Prophet's wife and its unravelling, permission to enter houses, lowering the gaze, covering, the marriage of the poor. In the middle of it stands one verse of pure imagery, a niche, a lamp, a glass like a brilliant star, olive oil almost glowing untouched by fire. That verse names the surah. Nothing about the name would tell you the legal content, but nothing else in the surah is remembered as vividly.",
      bn: 'এই সূরার প্রায় পুরোটাই বিধান: ব্যভিচারের শাস্তি, সতী নারীকে অপবাদ দেওয়া, নবীর স্ত্রীর বিরুদ্ধে মিথ্যা রটনা ও তার জট খুলে যাওয়া, ঘরে ঢোকার অনুমতি, দৃষ্টি নত রাখা, পর্দা, গরিবদের বিয়ে। এর মাঝখানে একটি আয়াত, যা পুরোটাই ছবি: একটি তাক, একটি প্রদীপ, উজ্জ্বল তারার মতো কাচ, আর যয়তুনের তেল, যা আগুন ছোঁয়ার আগেই যেন জ্বলে ওঠে। ওই আয়াত থেকেই সূরার নাম। নাম শুনে বিধানের কিছুই বোঝা যাবে না, অথচ সূরার আর কোনো কিছুই এত জীবন্ত হয়ে মনে থাকে না।',
    },
    signal: {
      en: "Expect the Quran's clearest rules on chastity, accusation and privacy in the home, together with the verse of light and its parable — a surah about guarding what is seen and what is said.",
      bn: 'সতীত্ব, অপবাদ আর ঘরের গোপনীয়তা নিয়ে কুরআনের সবচেয়ে স্পষ্ট বিধান, সঙ্গে নূরের আয়াত ও তার উপমা। চোখ যা দেখে আর মুখ যা বলে, তার হেফাজতের সূরা।',
    },
    alt: [],
    refs: ['24:35', '24:40'],
  },
  25: {
    meaning: { en: 'The Criterion', bn: 'মানদণ্ড' },
    source: {
      en: 'From 25:1, the opening declaration that God sent down the Criterion to His servant as a warning to the worlds.',
      bn: '২৫:১ আয়াতের শুরুর ঘোষণা থেকে: আল্লাহ তাঁর বান্দার উপর ফুরকান নাজিল করেছেন, যাতে তিনি বিশ্ববাসীর জন্য সতর্ককারী হন।',
    },
    why: {
      en: 'Al-Furqan is a name for the revelation itself: what separates truth from falsehood. The surah is named after its first noun, in the way many surahs are, but the word carries the subject with it, because what follows is a defence of the revelation against the objections raised to it — that it was invented, that a messenger should not eat and walk in markets, that it should have come down all at once. Naming the surah after the criterion states the case before the arguments begin.',
      bn: 'আল-ফুরকান ওহিরই একটি নাম: যা সত্য আর মিথ্যাকে আলাদা করে দেয়। অনেক সূরার মতো এর নামও এসেছে প্রথম বিশেষ্য থেকে। তবে শব্দটি সঙ্গে করে বিষয়টিও নিয়ে আসে, কারণ এরপর সূরাজুড়ে ওহির বিরুদ্ধে তোলা আপত্তির জবাব: এটি বানানো কথা; রাসূল কেন খাবার খান আর বাজারে হাঁটেন; পুরো কুরআন কেন একবারে নাজিল হলো না। সূরার নাম ফুরকান রেখে যুক্তিতর্ক শুরুর আগেই মূল দাবিটি জানিয়ে দেওয়া হয়েছে।',
    },
    signal: {
      en: 'Expect objections to the Quran answered one by one, signs drawn from shade, wind and water, and a closing portrait of the servants of the Merciful who walk the earth gently.',
      bn: 'কুরআনের বিরুদ্ধে তোলা আপত্তির একে একে জবাব, ছায়া, বাতাস আর পানি থেকে নেওয়া নিদর্শন, আর শেষে রহমানের সেই বান্দাদের ছবি, যারা পৃথিবীতে বিনয়ের সঙ্গে চলে।',
    },
    alt: [],
    refs: ['25:1'],
  },
  26: {
    meaning: { en: 'The Poets', bn: 'কবিগণ' },
    source: {
      en: 'From the closing verses 26:224-227, where the poets are described as followed by those who wander astray.',
      bn: 'শেষের ২৬:২২৪-২২৭ আয়াত থেকে, যেখানে বলা হয়েছে, কবিদের পেছনে চলে পথভ্রষ্টরা।',
    },
    why: {
      en: "Two hundred and twenty-seven verses, and the name comes from the last four. Most of the surah is a chain of messengers — Musa before Pharaoh at length, then Ibrahim, Nuh, Hud, Salih, Lut and Shu'ayb, each account closing with the same refrain. Then, at the end, the poets. The closing verses answer the charge that the Prophet was a poet and the Quran was poetry, so the name is not random; it points at the surah's final move. But as a description of the contents it is almost the opposite of accurate.",
      bn: 'দুইশ সাতাশ আয়াতের সূরা, আর নাম এসেছে শেষ চার আয়াত থেকে। সূরার বেশিরভাগ জুড়ে একের পর এক রাসূলের কাহিনী: প্রথমে বিস্তারিতভাবে ফেরাউনের সামনে মূসা, তারপর ইবরাহীম, নূহ, হূদ, সালিহ, লূত ও শুআইব; প্রতিটি কাহিনী শেষ হয় একই কথার পুনরাবৃত্তিতে। তারপর, একেবারে শেষে, কবিরা। শেষ আয়াতগুলো এই অভিযোগের জবাব দেয় যে নবী একজন কবি আর কুরআন কবিতা। তাই নামটি এলোমেলো নয়; এটি সূরার শেষ পদক্ষেপের দিকে ইশারা করে। তবে বিষয়বস্তুর বর্ণনা হিসেবে এটি প্রায় উল্টো।',
    },
    signal: {
      en: 'Expect messenger after messenger, above all Musa against Pharaoh and his magicians, each account ending with the same two lines — and only at the very end, four verses about poets.',
      bn: 'একের পর এক রাসূল, সবচেয়ে বেশি ফেরাউন ও তার জাদুকরদের মুখোমুখি মূসা; প্রতিটি কাহিনী শেষ হয় একই দুটি আয়াতে। আর একেবারে শেষে এসে কবিদের নিয়ে চারটি আয়াত।',
    },
    alt: [],
    refs: ['26:224', '26:227'],
  },
  27: {
    meaning: { en: 'The Ant', bn: 'পিঁপড়া' },
    source: {
      en: 'From 27:18, where an ant warns its colony to get into their dwellings before Sulayman and his hosts crush them without knowing.',
      bn: '২৭:১৮ আয়াত থেকে, যেখানে এক পিঁপড়া তার দলকে সতর্ক করে ঘরে ঢুকে পড়তে বলে, যেন সুলাইমান ও তাঁর বাহিনী না জেনে তাদের পিষে না ফেলে।',
    },
    why: {
      en: "One ant, one verse, and the surah is named after it. Around that verse are the hoopoe's report, the throne of the queen of Sheba brought in an instant, her submission, and before them Musa at the fire and after them Salih and Lut. Any of those could have named it. The ant won because it is the single detail nobody forgets: a small voice heard, a mighty king who smiles at it, and a prayer of thanks that follows. A marker of this kind works by being unmistakable, not by being important.",
      bn: 'একটি পিঁপড়া, একটি আয়াত, আর তার নামেই সূরার নাম। ওই আয়াতের চারপাশে আছে হুদহুদের খবর, চোখের পলকে এনে হাজির করা সাবার রানির সিংহাসন, রানির আত্মসমর্পণ; তার আগে আগুনের কাছে মূসা, পরে সালিহ ও লূত। এদের যেকোনোটি থেকেই নাম হতে পারত। পিঁপড়াই টিকে গেল, কারণ এই একটি খুঁটিনাটি কেউ ভোলে না: ছোট্ট এক কণ্ঠ, যা শুনে মহাপ্রতাপশালী এক বাদশাহ হেসে ফেললেন, তারপর শুকরিয়ার দোয়া করলেন। এ ধরনের চিহ্ন কাজ করে ভুল হওয়ার উপায় নেই বলে, গুরুত্বপূর্ণ বলে নয়।',
    },
    signal: {
      en: "Expect Sulayman's court and the kingdom he was given — speech of birds and ants, the queen of Sheba, her throne and her submission — set among shorter accounts of Musa, Salih and Lut.",
      bn: 'সুলাইমানের দরবার আর তাঁকে দেওয়া রাজত্ব: পাখি ও পিঁপড়ার কথা বোঝা, সাবার রানি, তাঁর সিংহাসন ও আত্মসমর্পণ। এসবের আশপাশে আছে মূসা, সালিহ ও লূতের সংক্ষিপ্ত বৃত্তান্ত।',
    },
    alt: [
      { name: 'Surat Sulayman', en: 'Recorded in lists of surah names, since the largest part of the surah is given to Sulayman and the queen of Sheba.', bn: 'নামতালিকায় বর্ণিত, কারণ সূরার সবচেয়ে বড় অংশ সুলাইমান ও সাবার রানিকে নিয়ে।' },
    ],
    refs: ['27:18', '27:19'],
  },
  28: {
    meaning: { en: 'The Stories', bn: 'কাহিনী' },
    source: {
      en: 'From 28:25, where Musa reaches Madyan and relates his story to the old man there.',
      bn: '২৮:২৫ আয়াত থেকে, যেখানে মূসা মাদইয়ানে পৌঁছে সেখানকার বৃদ্ধকে নিজের কাহিনী শোনান।',
    },
    why: {
      en: "The word that names the surah is spoken inside it, at the moment a fugitive sits down and tells someone what happened to him. That is a modest origin for a title, and it is characteristic: the naming word is the one that stands out, not the one that summarises. But the fit is better than usual here, because the surah is the fullest continuous account in the Quran of Musa's early life — the basket on the river, the household of Pharaoh, the killing, the flight, the years in Madyan — and to relate a story is what it does.",
      bn: 'যে শব্দ থেকে সূরার নাম, সেটি সূরার ভেতরেই উচ্চারিত হয়েছে, ঠিক যখন এক পলাতক মানুষ বসে কাউকে জানাচ্ছেন তাঁর উপর দিয়ে কী গেছে। শিরোনামের উৎস হিসেবে এটি সাদামাটা, আর এটাই সাধারণ ধারা: নামের শব্দ সেটিই হয়, যা আলাদা করে চোখে পড়ে; যা সারসংক্ষেপ করে, সেটি নয়। তবে এখানে মিলটা অন্য সময়ের চেয়ে ভালো। মূসার প্রথম জীবনের সবচেয়ে পূর্ণ, একটানা বর্ণনা কুরআনে এই সূরাতেই: নদীতে ভাসানো সিন্দুক, ফেরাউনের ঘর, হত্যা, পালিয়ে যাওয়া, মাদইয়ানের বছরগুলো। কাহিনী বলাই এই সূরার কাজ।',
    },
    signal: {
      en: 'Expect the early life of Musa in sequence, from infancy to prophethood, followed by Qarun and his treasure as a warning about wealth, and consolation for a Prophet forced to leave his city.',
      bn: 'মূসার প্রথম জীবন ধারাবাহিকভাবে, শৈশব থেকে নবুয়ত পর্যন্ত। তারপর কারূন ও তার ধনভাণ্ডার, সম্পদ নিয়ে সতর্কবার্তা হিসেবে। আর নিজের শহর ছাড়তে বাধ্য এক নবীর জন্য সান্ত্বনা।',
    },
    alt: [],
    refs: ['28:3', '28:25'],
  },
  29: {
    meaning: { en: 'The Spider', bn: 'মাকড়সা' },
    source: {
      en: 'From 29:41, where those who take protectors besides God are compared to a spider that takes a house, the frailest of houses.',
      bn: '২৯:৪১ আয়াত থেকে, যেখানে আল্লাহকে ছাড়া অন্যদের অভিভাবক বানানো লোকদের তুলনা করা হয়েছে মাকড়সার সঙ্গে, যে ঘর বানায়; অথচ সব ঘরের মধ্যে সবচেয়ে দুর্বল মাকড়সার ঘর।',
    },
    why: {
      en: 'The spider is mentioned in one verse, as a comparison. The surah is about being tested — whether people who say they believe will be left untested, what to do when parents press a convert, the persecution that drove some to migrate — and the comparison lands in the middle of it: a house that looks like shelter and holds nothing. The image is vivid enough to name a surah of sixty-nine verses in which spiders otherwise play no part. That is how these names work, and this one carries part of the argument with it.',
      bn: 'মাকড়সার উল্লেখ একটিমাত্র আয়াতে, উপমা হিসেবে। সূরার বিষয় পরীক্ষা: যারা বলে আমরা ঈমান এনেছি, তাদের কি পরীক্ষা না করেই ছেড়ে দেওয়া হবে; নতুন মুসলমানের উপর বাবা-মা চাপ দিলে কী করতে হবে; যে নির্যাতনের কারণে কেউ কেউ হিজরত করতে বাধ্য হয়েছিলেন। ঠিক এর মাঝখানে আসে উপমাটি: এমন এক ঘর, যা দেখতে আশ্রয়ের মতো, অথচ কিছুই ধরে রাখে না। ছবিটি এতটাই জীবন্ত যে ঊনসত্তর আয়াতের পুরো সূরার নাম হয়ে গেল, যদিও এ ছাড়া সূরায় মাকড়সার কোনো ভূমিকা নেই। এই নামগুলো এভাবেই কাজ করে; আর এই নামটি সঙ্গে করে যুক্তিরও একটা অংশ বয়ে আনে।',
    },
    signal: {
      en: 'Expect the question that opens it — do people think they will be left alone because they say they believe — answered through Nuh, Ibrahim, Lut and Shuayb, and through migration and patience.',
      bn: 'শুরুর প্রশ্ন: মানুষ কি ভাবে, আমরা ঈমান এনেছি বললেই তাদের ছেড়ে দেওয়া হবে? এর জবাব আসে নূহ, ইবরাহীম, লূত ও শুআইবের কাহিনীতে, আর হিজরত ও সবরের কথায়।',
    },
    alt: [],
    refs: ['29:41'],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SURAH_NAME_NOTES, SURAHNAMES_UI };
