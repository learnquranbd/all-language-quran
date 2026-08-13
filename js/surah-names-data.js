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
      bn: 'নামটি সূরার বিষয়বস্তু নয়, বরং তার প্রথম উজ্জ্বল শব্দ—আল-আলা, আল্লাহর একটি গুণবাচক নাম, যা পবিত্রতা ঘোষণার নির্দেশের সঙ্গে যুক্ত। সূরার আর কোনো কিছুকে এই নামে ডাকা হয়নি। আলোচনা এগিয়ে যায় সৃষ্টি ও সুবিন্যাস, ওহি সংরক্ষণের প্রতিশ্রুতি, ভীত ব্যক্তির জন্য উপদেশের উপকার, এবং যে নিজেকে পরিশুদ্ধ করে ও যে দুনিয়াকে প্রাধান্য দেয়—এই দুইয়ের তুলনায়। প্রথম আয়াত থেকে নাম নেওয়া একধরনের চিহ্ন, কারণ প্রথম যুগের মুসলিমরা সূরাকে তার শুরুর কথা দিয়েই চিনতেন। নামটি সূরার সুরের সঙ্গেও মেলে—মানুষ যা কিছু পছন্দ করে, আল্লাহ তার সবার ঊর্ধ্বে।',
    },
    signal: {
      en: 'Expect a short Meccan surah of praise and warning: God creates and guides, the revelation will not be forgotten, the reminder benefits whoever fears, and the hereafter is better and lasting. It is a favourite of the Friday and Eid prayers.',
      bn: 'আশা করুন একটি সংক্ষিপ্ত মাক্কী সূরা, প্রশংসা ও সতর্কবাণীর: আল্লাহ সৃষ্টি করেন ও পথ দেখান, ওহি ভুলিয়ে দেওয়া হবে না, উপদেশ ভীত ব্যক্তির উপকারে আসে, আর আখিরাত উত্তম ও স্থায়ী। জুমা ও ঈদের নামাজে এটি বহুল পঠিত।',
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
      bn: 'আল-গাশিয়াহ শব্দ থেকে—"আচ্ছন্নকারী বিপর্যয়", প্রথম আয়াতের প্রশ্নে কিয়ামতের একটি নাম (৮৮:১)।',
    },
    why: {
      en: 'Ghashiyah literally means that which covers or envelops. Here it is one of the Quran\'s several titles for the Resurrection, chosen because that Day will cover creation entirely, leaving nothing outside it. The word appears once, in the opening verse, and the surah takes its name from it rather than from the long passage on camel, sky, mountain and earth that follows. That is the ordinary pattern: the name marks the surah rather than summarising it. Yet the choice is apt here, since the two faces of the Day, scorched and contented, fill the first half before the argument turns to the created world.',
      bn: 'গাশিয়াহ শব্দের আভিধানিক অর্থ যা ঢেকে ফেলে বা আচ্ছন্ন করে। কুরআনে কিয়ামতের যে কয়েকটি নাম এসেছে এটি তার একটি, কারণ সেদিন গোটা সৃষ্টিকে ঢেকে ফেলবে, কিছুই তার বাইরে থাকবে না। শব্দটি এসেছে একবারই, প্রথম আয়াতে, আর সূরার নাম নেওয়া হয়েছে সেখান থেকেই—পরবর্তী উট, আকাশ, পাহাড় ও পৃথিবীর দীর্ঘ আলোচনা থেকে নয়। এটাই সাধারণ রীতি: নাম সূরাকে চিহ্নিত করে, সারসংক্ষেপ দেয় না। তবু এখানে নামটি যথার্থ, কারণ সেদিনের দুই চেহারা—লাঞ্ছিত ও পরিতৃপ্ত—সূরার প্রথমার্ধ জুড়েই রয়েছে।',
    },
    signal: {
      en: 'Expect Judgement painted in two panels, the wretched and the delighted, then a call to look at camel, sky, mountain and earth as evidence, closing with the reminder that the Prophet is a reminder and not a controller over people.',
      bn: 'আশা করুন দুই ছবিতে আঁকা কিয়ামত—দুর্ভাগা ও পরিতৃপ্ত; তারপর প্রমাণ হিসেবে উট, আকাশ, পাহাড় ও পৃথিবীর দিকে তাকানোর আহ্বান; এবং শেষে স্মরণ করিয়ে দেওয়া যে নবী উপদেশদাতা, মানুষের ওপর কর্তৃত্বকারী নন।',
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
      bn: 'সূরাটি শুরু হয় পরপর কয়েকটি শপথ দিয়ে—ঊষা, দশ রাত, জোড় ও বিজোড়, অতিক্রমকারী রাত—আর নাম নেওয়া হয়েছে এদের প্রথমটি থেকে। ঊষা সূরার আলোচ্য বিষয় নয়। এরপর আসে আদ, সামুদ ও ফিরআউনের কথা, তারপর এমন সমাজের তিরস্কার যারা ধনীকে সম্মান করে আর এতিমকে অবহেলা করে, আর শেষে প্রশান্ত আত্মাকে তার প্রতিপালকের দিকে ফেরার ডাক। নামটি শুরুর শব্দ থেকে নেওয়া একটি চিহ্ন; বাকি তিনটির বদলে এটিই বাছাই হয়েছে কেবল আগে আসার কারণে। কোন ঊষা ও কোন দশ রাত—এ নিয়ে মুফাসসিরগণের মতভেদ আছে, সূরা নিজে তা নির্দিষ্ট করেনি।',
    },
    signal: {
      en: 'Expect oaths, then three ruined peoples as evidence that God watches, then a sharp diagnosis of wealth, orphans and greed, and finally some of the most consoling verses in the Quran, addressed to the soul at peace.',
      bn: 'আশা করুন শপথ, তারপর তিনটি ধ্বংসপ্রাপ্ত জাতির উদাহরণ—প্রমাণ যে আল্লাহ দেখছেন; এরপর সম্পদ, এতিম ও লোভের তীক্ষ্ণ বিশ্লেষণ; আর শেষে কুরআনের সবচেয়ে সান্ত্বনাদায়ক আয়াতগুলোর কয়েকটি, প্রশান্ত আত্মাকে সম্বোধন করে।',
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
      bn: 'আল-বালাদ বা "নগরী" বলতে মক্কাকেই বোঝানো হয়েছে, নাম উল্লেখ না করেই: সূরা শপথ করছে সেই নগরীর, আর এই সত্যের যে নবী সেখানে বৈধভাবে বসবাসকারী। নির্দিষ্টতাসূচক শব্দটিই কাজ সেরে দেয়, কারণ প্রথম শ্রোতাদের সবাই জানত কোন নগরীর কথা বলা হচ্ছে। নামটি এসেছে ওই শপথ থেকে, সূরার প্রকৃত আলোচ্য বিষয় থেকে নয়—আর সেই বিষয় হলো দুর্গম চড়াই পথ: দাসমুক্তি, দুর্ভিক্ষের দিনে খাওয়ানো, এবং যারা পরস্পরকে ধৈর্য ও দয়ার উপদেশ দেয় তাদের দলে যোগ দেওয়া। "নগরী" নামটি ওই শপথ আর বক্তব্যের পবিত্র প্রেক্ষাপটকে সামনে ধরে রাখে।',
    },
    signal: {
      en: 'Expect a short Meccan surah that swears by Mecca, denies that man was created for ease, and then lays out an uphill road of concrete deeds — freeing slaves, feeding orphans and the destitute — as the real test of faith.',
      bn: 'আশা করুন একটি সংক্ষিপ্ত মাক্কী সূরা, যা মক্কার শপথ করে, অস্বীকার করে যে মানুষকে আরামের জন্য সৃষ্টি করা হয়েছে, এবং তারপর ঈমানের প্রকৃত পরীক্ষা হিসেবে তুলে ধরে বাস্তব কাজের দুর্গম পথ—দাসমুক্তি, এতিম ও নিঃস্বকে খাওয়ানো।',
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
      en: 'Eleven oaths open this surah — sun, moon, day, night, sky, earth, and the soul with the way it was proportioned — and the name takes the first. The sun is never discussed; it is sworn by. What the oaths lead to is a single verdict: whoever purifies the soul has succeeded and whoever buries it has failed, illustrated at once by Thamud and the she-camel. The naming convention shows itself plainly here, since a surah about the soul is universally known by an astronomical image from its first three words, because that is what a reciter remembers first.',
      bn: 'এই সূরার শুরুতে এগারোটি শপথ—সূর্য, চাঁদ, দিন, রাত, আকাশ, পৃথিবী এবং আত্মা ও তার সুবিন্যাস—আর নাম নেওয়া হয়েছে প্রথমটি থেকে। সূর্য নিয়ে কোনো আলোচনা নেই; তার শপথ করা হয়েছে মাত্র। শপথগুলো গিয়ে পৌঁছায় একটিমাত্র রায়ে: যে আত্মাকে পরিশুদ্ধ করল সে সফল, আর যে তাকে চাপা দিল সে ব্যর্থ—আর সঙ্গে সঙ্গেই সামুদ ও উটনীর ঘটনা তার দৃষ্টান্ত। নামকরণের রীতি এখানে স্পষ্ট: আত্মা নিয়ে একটি সূরা সবার কাছে পরিচিত তার প্রথম তিন শব্দের জ্যোতিষ্কচিত্র দিয়ে, কারণ পাঠকের প্রথমে সেটিই মনে পড়ে।',
    },
    signal: {
      en: 'Expect a rapid chain of oaths sworn on creation, then a verdict on the soul that purifies or corrupts itself, and then the destruction of Thamud after they hamstrung the she-camel, offered as the worked example.',
      bn: 'আশা করুন সৃষ্টির ওপর দ্রুতগতির শপথের ধারাবাহিকতা, তারপর আত্মা নিজেকে পরিশুদ্ধ করে না কলুষিত করে—তার ওপর রায়, আর তারপর উটনী হত্যার পর সামুদের ধ্বংস, যা এই রায়ের বাস্তব দৃষ্টান্ত হিসেবে উপস্থাপিত।',
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
      bn: 'সূরার নাম এসেছে তার প্রথম শব্দজোড় থেকে—আচ্ছাদনকারী রাত, যার শপথ করা হয়েছে উদ্ভাসিতকারী দিনের বিপরীতে। এখানে রাত ও দিন আসলে মানুষের দুই বিপরীতমুখী প্রচেষ্টার রূপক, যা সূরা এরপর বর্ণনা করে: একজন দান করে, আল্লাহকে ভয় করে ও উত্তম কথাকে সত্য মানে; আরেকজন কৃপণতা করে, নিজেকে অমুখাপেক্ষী ভাবে ও অস্বীকার করে। "রাত" নামটি সেই বৈপরীত্যের প্রথম অর্ধেককে ধরে রাখে। এটি সারসংক্ষেপ নয়, চিহ্ন—তবে অস্বাভাবিক রকম মানানসই চিহ্ন, কারণ সূরার গোটা যুক্তিই বিপরীত জোড়ায় গাঁথা।',
    },
    signal: {
      en: 'Expect the shortest possible statement of two roads: giving with God-consciousness eased towards ease, hoarding with self-sufficiency eased towards hardship, and the God-fearing giver of wealth held up at the close.',
      bn: 'আশা করুন দুই পথের সংক্ষিপ্ততম বিবৃতি: দান ও তাকওয়ার পথ সহজতার দিকে সহজ করে দেওয়া হয়, আর কৃপণতা ও আত্মনির্ভরতার পথ কাঠিন্যের দিকে; শেষে দৃষ্টান্ত হিসেবে দাঁড় করানো হয় সেই মুত্তাকীকে যে সম্পদ দান করে।',
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
      en: 'Duha is the swelling light of mid-morning, after sunrise and before the sun stands high, sworn here against the night when it grows still. The word is not the surah\'s topic. The topic is consolation, delivered after a pause in revelation, telling the Prophet his Lord has neither forsaken him nor become displeased. But image and message match closely: light returning after a dark stillness. Named from its first word, as almost all the short Meccan surahs are, the title has long since become the ordinary way of referring to these eleven verses of reassurance.',
      bn: 'দুহা হলো সূর্যোদয়ের পর, সূর্য মাথার ওপর ওঠার আগের বেড়ে ওঠা আলো; এখানে তার শপথ করা হয়েছে নিস্তব্ধ রাতের বিপরীতে। শব্দটি সূরার আলোচ্য বিষয় নয়। বিষয় হলো সান্ত্বনা—ওহি বন্ধ থাকার একটি বিরতির পর নবীকে জানানো যে তাঁর প্রতিপালক তাঁকে ত্যাগও করেননি, অসন্তুষ্টও হননি। তবু চিত্র ও বার্তা নিবিড়ভাবে মিলে যায়: অন্ধকার নিস্তব্ধতার পর আলোর প্রত্যাবর্তন। ছোট মাক্কী সূরাগুলোর প্রায় সবার মতোই এটির নাম প্রথম শব্দ থেকে নেওয়া, আর সেই নামই বহুকাল ধরে এই এগারো আয়াতের সান্ত্বনাকে চেনার স্বাভাবিক উপায়।',
    },
    signal: {
      en: 'Expect eleven verses of comfort: God has not abandoned you, the end is better than the beginning, you were an orphan and were sheltered — therefore do not oppress the orphan, do not repel the beggar, and speak of your Lord\'s favour.',
      bn: 'আশা করুন এগারো আয়াতের সান্ত্বনা: আল্লাহ তোমাকে ত্যাগ করেননি, পরিণাম সূচনার চেয়ে উত্তম, তুমি এতিম ছিলে ও আশ্রয় পেয়েছ—তাই এতিমের ওপর কঠোর হয়ো না, প্রার্থীকে ফিরিয়ে দিয়ো না, আর তোমার প্রতিপালকের অনুগ্রহের কথা বলো।',
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
      en: 'Unusually, this name is drawn from a verb rather than a noun in the text: sharaha, to open out or widen. The surah is titled by the act it opens with, the expanding of the Prophet\'s breast, and it is equally well known as al-Inshirah, the noun of the same root, a form that does not itself appear anywhere in the eight verses. Both titles point back to the same first line. The name works as a marker of the opening, in the ordinary way, and here it also names the surah\'s whole consolation: a burden lifted, a name raised, and hardship twinned with ease.',
      bn: 'অস্বাভাবিকভাবে এই নামটি নেওয়া হয়েছে সূরার কোনো বিশেষ্য থেকে নয়, বরং একটি ক্রিয়া থেকে—শারাহা, অর্থাৎ খুলে দেওয়া বা প্রশস্ত করা। সূরার নাম হয়েছে যে কাজ দিয়ে তার সূচনা সেটির নামে, অর্থাৎ নবীর বক্ষ প্রশস্ত করা; আর সমানভাবে এটি পরিচিত আল-ইনশিরাহ নামে, একই ধাতুর বিশেষ্য রূপ, যদিও সেই রূপটি আট আয়াতের কোথাও নেই। দুটি নামই ফিরিয়ে নিয়ে যায় একই প্রথম পঙ্‌ক্তিতে। নামটি প্রথাগতভাবেই সূচনার চিহ্ন, তবে এখানে তা সূরার গোটা সান্ত্বনাকেও নাম দেয়: ভার নামিয়ে দেওয়া, মর্যাদা উঁচু করা, আর কষ্টের সঙ্গে স্বস্তিকে জোড়া বেঁধে দেওয়া।',
    },
    signal: {
      en: 'Expect eight verses continuing the consolation of Ad-Duha: a burden removed, a reputation raised, and the promise that with hardship comes ease, stated twice, closing with a command to labour and to turn to your Lord.',
      bn: 'আশা করুন আট আয়াত, যা আদ-দুহার সান্ত্বনারই ধারাবাহিকতা: ভার নামিয়ে দেওয়া, মর্যাদা উঁচু করা, আর দুইবার উচ্চারিত প্রতিশ্রুতি যে কষ্টের সঙ্গেই স্বস্তি আছে; শেষে নির্দেশ—পরিশ্রম করো আর তোমার প্রতিপালকের দিকেই মনোযোগী হও।',
    },
    alt: [
      { name: 'Al-Inshirah', en: 'The noun form of the same root as the opening verb; widely used, and the title printed in the Turkish tradition.', bn: 'শুরুর ক্রিয়ার একই ধাতুর বিশেষ্য রূপ; ব্যাপকভাবে প্রচলিত, আর তুর্কি ধারায় এই নামেই ছাপা হয়।' },
      { name: 'Alam Nashrah', en: 'The surah cited by its opening words, "Did We not expand", as early usage often did.', bn: 'প্রথম যুগের প্রচলিত রীতি অনুযায়ী সূরাটিকে তার শুরুর কথা "আলাম নাশরাহ" দিয়ে উল্লেখ করা হয়।' },
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
      bn: 'সূরাটি শপথ করে ডুমুর, জলপাই, তূর পর্বত ও এই নিরাপদ নগরীর, আর নাম নিয়েছে কেবল প্রথমটি থেকে। ডুমুর ও জলপাই বলতে ফল দুটিকেই বোঝানো হয়েছে, নাকি যেসব ভূমিতে সেগুলো জন্মায়—ফিলিস্তিন ও সিরিয়া, তূর ও মক্কার সঙ্গে মিলে ওহি নাজিলের কয়েকটি স্থান—এ নিয়ে মুফাসসিরগণের মতভেদ আছে, সূরা নিজে তা মীমাংসা করে না। যেভাবেই হোক, নামটি শুরুর শব্দ থেকে তুলে নেওয়া চিহ্ন, বিষয়ের বিবৃতি নয়; বিষয় হলো মানুষকে সর্বোত্তম গঠনে সৃষ্টি করা হয়েছে, তারপর নামিয়ে দেওয়া হয়েছে সর্বনিম্নে—কেবল তারা ছাড়া যারা ঈমান আনে ও সৎকাজ করে।',
    },
    signal: {
      en: 'Expect a run of oaths, then the surah\'s claim about human nature — created in the best stature, sunk to the lowest of the low unless faith and good deeds hold — closing with a question about God as the most just of judges.',
      bn: 'আশা করুন কয়েকটি শপথ, তারপর মানবপ্রকৃতি নিয়ে সূরার দাবি—সর্বোত্তম গঠনে সৃষ্ট, অথচ ঈমান ও সৎকাজ না থাকলে নিচের নিচে নামানো; আর শেষে প্রশ্ন, আল্লাহ কি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক নন?',
    },
    alt: [],
    refs: ['95:1', '95:4'],
  },

  96: {
    meaning: { en: 'The Clinging Form', bn: 'জমাট রক্তপিণ্ড' },
    source: {
      en: 'From "He created man from a clinging form" (96:2), the second verse of the first revelation.',
      bn: '"তিনি মানুষকে সৃষ্টি করেছেন জমাট রক্তপিণ্ড থেকে" (৯৬:২)—প্রথম ওহির দ্বিতীয় আয়াত থেকে।',
    },
    why: {
      en: 'The first passage ever revealed opens with the command Iqra, read, and the surah is accordingly known by two names: al-Alaq, from the noun in verse two, and Iqra, from the imperative in verse one. Alaq describes the clinging, leech-like early form of the embryo — an unusual, concrete word that fixes itself in the memory, exactly the kind of marker surah names are usually drawn from. That the surah of the first revelation is titled after an embryological term rather than after revelation or reading shows as clearly as anything can that these names label rather than summarise.',
      bn: 'সর্বপ্রথম নাজিল হওয়া অংশটি শুরু হয় "ইকরা" অর্থাৎ "পড়ো" নির্দেশ দিয়ে, আর সেই কারণেই সূরাটি দুটি নামে পরিচিত: দ্বিতীয় আয়াতের বিশেষ্য থেকে আল-আলাক, আর প্রথম আয়াতের নির্দেশ থেকে ইকরা। আলাক বলতে বোঝায় ভ্রূণের প্রাথমিক অবস্থার আঁকড়ে থাকা, জোঁকের মতো রূপ—একটি অস্বাভাবিক, মূর্ত শব্দ যা সহজেই স্মৃতিতে গেঁথে যায়, আর ঠিক এ ধরনের শব্দ থেকেই সাধারণত সূরার নাম নেওয়া হয়। প্রথম ওহির সূরাটির নাম ওহি বা পাঠের নামে না হয়ে ভ্রূণতত্ত্বের একটি শব্দে হওয়া স্পষ্ট করে দেয় যে এই নামগুলো পরিচয়চিহ্ন, সারসংক্ষেপ নয়।',
    },
    signal: {
      en: 'Expect the five verses first revealed at Hira — read, your Lord taught by the pen — followed by a later Meccan passage rebuking the man who forbade a servant from praying, and ending with a command to prostrate and draw near.',
      bn: 'আশা করুন হেরায় প্রথম নাজিল হওয়া পাঁচটি আয়াত—পড়ো, তোমার প্রতিপালক কলমের মাধ্যমে শিখিয়েছেন; এরপর পরবর্তী মাক্কী অংশ, যেখানে এক বান্দাকে নামাজ থেকে বাধা দেওয়া লোকটিকে তিরস্কার করা হয়; আর শেষে সিজদা ও নৈকট্যের নির্দেশ।',
    },
    alt: [
      { name: 'Iqra', en: 'From the opening imperative, "Read". Both names are in common use for the same surah, one taken from the command and one from a word inside it.', bn: 'শুরুর নির্দেশ "পড়ো" থেকে। একই সূরার জন্য দুটি নামই প্রচলিত—একটি নির্দেশ থেকে, অন্যটি তারই ভেতরের একটি শব্দ থেকে।' },
      { name: "Iqra bismi rabbik", en: 'The surah cited by its full opening phrase, as hadith reports frequently do.', bn: 'হাদীসে যেমন প্রায়ই করা হয়, সূরাটিকে তার পূর্ণ প্রথম বাক্যাংশ দিয়ে উল্লেখ করা হয়।' },
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
      bn: 'এখানে "কদর" শব্দের দুটি স্বীকৃত অর্থ আছে এবং মুফাসসিরগণ দুটিই গ্রহণ করেছেন: পরিমাপ বা নির্ধারণ—কারণ আগামী বছরের বিষয়াদি সেই রাতে নির্ধারিত হয়; আর মর্যাদা—কারণ রাতটি হাজার মাসের চেয়ে শ্রেষ্ঠ। সূরার নাম নেওয়া হয়েছে "লাইলাতুল কদর" বাক্যাংশ থেকে, যা মাত্র পাঁচ আয়াতে তিনবার এসেছে; এই পুনরাবৃত্তির ঘনত্বই নামটিকে অনিবার্য করে তোলে। এটি সেসব ক্ষেত্রের একটি যেখানে নামের শব্দটি সত্যিই সূরার বিষয়, কেবল একটি চিহ্ন নয়—কারণ গোটা সূরাই ওই একটি রাত নিয়ে।',
    },
    signal: {
      en: 'Expect five verses on the night the Quran was sent down: better than a thousand months, the angels and the Spirit descending by their Lord\'s permission with every decree, and peace until the break of dawn.',
      bn: 'আশা করুন পাঁচটি আয়াত সেই রাত নিয়ে যখন কুরআন নাজিল হয়েছিল: হাজার মাসের চেয়ে উত্তম, ফেরেশতারা ও রূহ প্রতিপালকের অনুমতিক্রমে প্রতিটি নির্দেশ নিয়ে অবতরণ করেন, আর ঊষার উদয় পর্যন্ত শান্তি।',
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
      bn: 'বাইয়্যিনাহ অর্থ সুস্পষ্ট, চূড়ান্ত প্রমাণ। প্রথম আয়াতে এই শব্দটিই সেই জিনিসের নাম, যার আগমনে আহলে কিতাব ও মুশরিকদের পূর্বাবস্থার অবসান ঘটে; আর চতুর্থ আয়াত যোগ করে যে পূর্ববর্তী কিতাবধারীরা বিভক্ত হয়েছিল প্রমাণ পৌঁছার পরেই। শব্দটি এসেছে দুবার, আর সূরার নাম নেওয়া হয়েছে সেখান থেকেই। এখানে চিহ্নটি বিষয়ের খুব কাছাকাছি, কারণ সূরার যুক্তিই হলো—সুস্পষ্ট প্রমাণ আসার পর মানুষ কী করল। এই সূরার আরও কয়েকটি নাম বর্ণিত আছে, আর প্রতিটিই তার নিজের ভাষা থেকেই নেওয়া।',
    },
    signal: {
      en: 'Expect a Medinan surah on the coming of a Messenger reciting purified pages, the split it produced among earlier scripture-holders, the simplicity of what was actually commanded, and the sharply opposed ends of the worst and best of creation.',
      bn: 'আশা করুন একটি মাদানী সূরা: পবিত্র সহিফা পাঠকারী এক রাসূলের আগমন, তাতে পূর্ববর্তী কিতাবধারীদের বিভক্তি, আসলে যা আদেশ করা হয়েছিল তার সরলতা, এবং সৃষ্টির নিকৃষ্টতম ও শ্রেষ্ঠতম দলের সম্পূর্ণ বিপরীত পরিণতি।',
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
      bn: 'নামটি এসেছে প্রথম আয়াতের ক্রিয়া ও তার সমমূল বিশেষ্য থেকে—"যুলযিলাত" ও "যিলযালাহা"; এই দ্বিগুণ গঠনই কম্পনকে সাধারণ নয়, সর্বাত্মক করে তোলে—এটি পৃথিবীর জন্য নির্ধারিত নিজস্ব কম্পন, বহুর মধ্যে একটি নয়। একই ধাতুর ভিন্ন রূপে সূরাটিকে আয-যিলযালও বলা হয়। রীতি অনুযায়ী নাম নেওয়া হয়েছে শুরুর শব্দ থেকে, তবে এখানে সেই শব্দ দিয়েই শুরু হয় সেই দৃশ্য যা গোটা সূরা বর্ণনা করে: পৃথিবী প্রকম্পিত হচ্ছে, ভেতরের বোঝা বের করে দিচ্ছে, তারপর সাক্ষ্য দিচ্ছে—আর এরপর মানুষকে দেখানো হবে তার কর্ম, অণু পরিমাণ পর্যন্ত।',
    },
    signal: {
      en: 'Expect eight verses on the Day itself: the earth shaking and then speaking, people emerging in scattered groups to be shown their deeds, and the closing measure — an atom\'s weight of good or evil, seen.',
      bn: 'আশা করুন আট আয়াত সেই দিনটি নিয়েই: পৃথিবী কেঁপে উঠবে, তারপর কথা বলবে; মানুষ দলে দলে বের হয়ে আসবে নিজেদের কর্ম দেখতে; আর শেষে মাপকাঠি—অণু পরিমাণ ভালো বা মন্দ, তাও দেখানো হবে।',
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
      en: 'Al-Adiyat are runners that gallop: the surah swears by them panting, striking sparks with their hooves, raiding at dawn, and stirring up dust. Most commentators read them as warhorses, while a view reported from Ibn Abbas takes the oath to be about the camels of the pilgrims moving from Arafah, and the surah itself does not decide between them. The name is simply the first word, and the image is only a runway. The point lands at verse six: man is ungrateful to his Lord and violent in his love of wealth. A vivid opening has become the label.',
      bn: 'আল-আদিয়াত মানে ছুটে চলা ধাবক: সূরা শপথ করে তাদের—যারা হাঁপাতে হাঁপাতে ছোটে, ক্ষুরের আঘাতে আগুনের স্ফুলিঙ্গ তোলে, ভোরে আক্রমণ চালায় এবং ধুলো উড়িয়ে দেয়। অধিকাংশ মুফাসসির এদের যুদ্ধের ঘোড়া বলেছেন; ইবনে আব্বাস থেকে বর্ণিত এক মতে এই শপথ আরাফা থেকে ফেরা হাজিদের উটের ব্যাপারে—সূরা নিজে এর মীমাংসা করে না। নামটি কেবল প্রথম শব্দ, আর চিত্রটি কেবল ভূমিকা। আসল কথা আসে ষষ্ঠ আয়াতে: মানুষ তার প্রতিপালকের প্রতি অকৃতজ্ঞ এবং সম্পদের প্রেমে প্রবল। একটি জীবন্ত সূচনাই হয়ে উঠেছে পরিচয়চিহ্ন।',
    },
    signal: {
      en: 'Expect four hammering oaths on charging horses, then the indictment: man is ungrateful, himself a witness to it, and fierce in his love of wealth — with a reminder of the day graves are emptied and hearts laid bare.',
      bn: 'আশা করুন ধাবমান অশ্ব নিয়ে চারটি আঘাতি শপথ, তারপর অভিযোগ: মানুষ অকৃতজ্ঞ, নিজেই তার সাক্ষী, আর সম্পদপ্রীতিতে প্রবল—সঙ্গে স্মরণ করিয়ে দেওয়া সেই দিনের কথা, যেদিন কবর উন্মুক্ত হবে ও অন্তরের কথা প্রকাশ পাবে।',
    },
    alt: [],
    refs: ['100:1', '100:6', '100:8'],
  },

  101: {
    meaning: { en: 'The Striking Calamity', bn: 'মহাসংকট' },
    source: {
      en: 'From the word that opens the surah and is repeated across its first three verses (101:1-3).',
      bn: 'যে শব্দ দিয়ে সূরা শুরু এবং যা প্রথম তিন আয়াতে পুনরাবৃত্ত হয়েছে, তা থেকে (১০১:১-৩)।',
    },
    why: {
      en: 'Qari\'ah comes from a root meaning to strike or knock violently. Like al-Ghashiyah and al-Haqqah it is one of the Quran\'s several names for the Resurrection, each catching a different aspect of it, and this one catches the sudden blow. The opening three verses use the word as a name, then ask what it is, then say you cannot know — a device that leaves the word ringing before anything is described. Naming the surah after it is all but inevitable, and unlike most surah names this one really does state the subject rather than merely label it.',
      bn: 'কারিআহ শব্দের ধাতুগত অর্থ প্রচণ্ড আঘাত করা বা ধাক্কা দেওয়া। আল-গাশিয়াহ ও আল-হাক্কার মতো এটিও কুরআনে কিয়ামতের যে কয়েকটি নাম এসেছে তার একটি; প্রতিটি নাম সেদিনের ভিন্ন এক দিক ধরে, আর এটি ধরে আকস্মিক আঘাতকে। প্রথম তিন আয়াত শব্দটিকে নাম হিসেবে ব্যবহার করে, তারপর জিজ্ঞেস করে সেটি কী, তারপর বলে তুমি জানো না—এই কৌশল কিছু বর্ণনা শুরুর আগেই শব্দটিকে কানে বাজিয়ে রাখে। এর নামে সূরার নাম হওয়া প্রায় অনিবার্য, আর অধিকাংশ সূরার নামের বিপরীতে এটি কেবল পরিচয়চিহ্ন নয়, সত্যিই বিষয়ের বিবৃতি।',
    },
    signal: {
      en: 'Expect the Day rendered in two images — people like scattered moths, mountains like carded wool — then the weighing: heavy scales and a pleasing life, light scales and a plunge into a blazing fire.',
      bn: 'আশা করুন দুটি চিত্রে আঁকা কিয়ামত—মানুষ ছড়ানো পতঙ্গের মতো, পাহাড় ধুনা পশমের মতো—তারপর ওজন: পাল্লা ভারী হলে সন্তোষজনক জীবন, হালকা হলে প্রজ্বলিত অগ্নিকুণ্ডে নিক্ষেপ।',
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
      bn: 'তাকাসুর একটিমাত্র শব্দে ধরা একটি গোটা স্বভাব: অন্যের চেয়ে বেশি পাওয়ার তাড়না, আর তারপর তা গুনে দেখা। শব্দটি এসেছে একবারই, প্রথম আয়াতে—সেই জিনিস হিসেবে যা মানুষকে গাফিল করে রাখে কবরে পৌঁছানো পর্যন্ত; আর প্রাচীন বর্ণনায় আছে, এই প্রতিযোগিতা মৃতদের সংখ্যা নিয়ে গর্ব পর্যন্ত গড়িয়েছিল। প্রথা অনুযায়ী নাম নেওয়া হয়েছে শুরুর শব্দ থেকেই, তবে এখানে সেই শব্দই সূরার নির্ণয় করা রোগের নাম। প্রথম যুগে ও হাদীসে সূরাটিকে তার শুরুর দুই শব্দ দিয়েও উল্লেখ করা হতো।',
    },
    signal: {
      en: 'Expect eight verses of warning: distraction that lasts until the graveyard, a repeated "you will come to know", then certainty of knowledge, the sight of the blazing fire, and questioning about every blessing enjoyed.',
      bn: 'আশা করুন আট আয়াতের সতর্কবাণী: কবরস্থান পর্যন্ত চলা গাফিলতি, বারবার উচ্চারিত "শীঘ্রই তোমরা জানতে পারবে", তারপর নিশ্চিত জ্ঞান, প্রজ্বলিত আগুনের দর্শন, এবং ভোগ করা প্রতিটি নিয়ামত সম্পর্কে জিজ্ঞাসাবাদ।',
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
      bn: 'সূরার শুরুর এক-শব্দের শপথ থেকে—"শপথ কালের" (১০৩:১)।',
    },
    why: {
      en: 'Asr can mean time as such, the age, or the late afternoon — the same word names the Asr prayer — and the commentators hold all three readings without one being settled. The surah is named from that single sworn word, its very first. What follows is three verses that ash-Shafi\'i said would have sufficed people had nothing else been revealed: all humanity is at loss, except those who believe, do righteous deeds, counsel one another to truth and counsel one another to patience. The title carries none of that content. It is a pure marker of position.',
      bn: 'আসর শব্দের অর্থ হতে পারে কাল বা সময় নিজেই, যুগ, কিংবা বিকেলবেলা—একই শব্দে আসরের নামাজেরও নাম—আর মুফাসসিরগণ তিনটি অর্থই গ্রহণ করেছেন, কোনোটিকে চূড়ান্ত না করে। সূরার নাম নেওয়া হয়েছে ওই একটিমাত্র শপথের শব্দ থেকে, যা সূরার সর্বপ্রথম শব্দ। এরপরের তিন আয়াত সম্পর্কে ইমাম শাফেয়ী বলেছেন, এ ছাড়া আর কিছু নাজিল না হলেও মানুষের জন্য যথেষ্ট হতো: সমস্ত মানুষ ক্ষতিগ্রস্ত, কেবল তারা ছাড়া যারা ঈমান আনে, সৎকাজ করে, পরস্পরকে সত্যের ও ধৈর্যের উপদেশ দেয়। নামটি এই বিষয়বস্তুর কিছুই বহন করে না; এটি নিছক অবস্থানের চিহ্ন।',
    },
    signal: {
      en: 'Expect the shortest complete argument in the Quran: an oath, a verdict of universal loss, and a four-part exception — belief, good works, urging truth, urging patience — long used as a summary of the whole religion.',
      bn: 'আশা করুন কুরআনের সংক্ষিপ্ততম পূর্ণাঙ্গ যুক্তি: একটি শপথ, সর্বজনীন ক্ষতির রায়, আর চার অংশের ব্যতিক্রম—ঈমান, সৎকাজ, সত্যের উপদেশ, ধৈর্যের উপদেশ—যা বহুকাল ধরে গোটা দ্বীনের সারসংক্ষেপ হিসেবে ব্যবহৃত।',
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
      bn: 'হুমাযাহ ও লুমাযাহ একটি জোড়া শব্দ—মোটামুটি, যে পেছনে নিন্দা করে মানুষকে ছিঁড়ে ফেলে, আর যে ইশারা ও টিটকিরিতে বিদ্রূপ করে—আর সূরা নাম নিয়েছে এদের প্রথমটি থেকে। দুটিই আতিশয্যবাচক রূপ, অর্থাৎ একবারের ভুল নয়, বদ্ধমূল স্বভাব। শব্দটি এসেছে একবারই, শুরুর ভর্ৎসনায়, আর প্রথা অনুযায়ী সেখান থেকেই নাম; সূরার প্রকৃত আলোচ্য সেই লোক, যে সম্পদ জমায় ও গুনে গুনে ভাবে তা তাকে চিরস্থায়ী করে রাখবে। সূরাটি আল-হুতামাহ নামেও পরিচিত, যা পরে উল্লেখিত পিষ্টকারী আগুনের নাম।',
    },
    signal: {
      en: 'Expect a short, hard Meccan surah aimed at one recognisable social type, the wealthy mocker, and its answer: the Crushing Fire, God\'s kindled fire that reaches the hearts, closed over them in outstretched columns.',
      bn: 'আশা করুন একটি সংক্ষিপ্ত, কঠোর মাক্কী সূরা, যার লক্ষ্য চেনা এক সামাজিক চরিত্র—ধনী উপহাসকারী; আর তার জবাব: পিষ্টকারী আগুন, আল্লাহর প্রজ্বলিত আগুন যা অন্তর পর্যন্ত পৌঁছে যায়, দীর্ঘ স্তম্ভে তাদের ওপর বন্ধ করে দেওয়া।',
    },
    alt: [
      { name: 'Al-Hutamah', en: 'From al-hutamah, "the crusher", the name the surah gives to the Fire in 104:4-5.', bn: 'আল-হুতামাহ অর্থাৎ "পিষ্টকারী" শব্দ থেকে, যে নামে সূরাটি আগুনকে অভিহিত করেছে (১০৪:৪-৫)।' },
    ],
    refs: ['104:1', '104:4'],
  },

  105: {
    meaning: { en: 'The Elephant', bn: 'হাতি' },
    source: {
      en: 'From "the companions of the elephant", the army God dealt with, in 105:1.',
      bn: '"হাতিওয়ালাদের" কথা থেকে—যে বাহিনীর সঙ্গে আল্লাহ যা করেছিলেন (১০৫:১)।',
    },
    why: {
      en: 'This name points to a datable event rather than a theme. Abraha, the Abyssinian governor of Yemen, marched on Mecca with an elephant intending to destroy the Kaaba, and his army was destroyed instead. The Arabs dated the year by it — the Year of the Elephant, traditionally the year of the Prophet\'s birth, around 570 CE — so the phrase ashab al-fil in verse one was already ordinary speech before the surah used it. The surah is named from an event its first hearers had from their own fathers, and the naming word is the strange animal that made it unforgettable.',
      bn: 'এই নামটি কোনো বিষয়বস্তু নয়, একটি নির্দিষ্ট তারিখের ঘটনার দিকে নির্দেশ করে। ইয়েমেনের আবিসিনীয় শাসক আবরাহা কাবা ধ্বংসের উদ্দেশ্যে হাতি নিয়ে মক্কার দিকে অভিযান চালিয়েছিলেন, আর ধ্বংস হয়েছিল তার বাহিনীই। আরবরা এই ঘটনা দিয়েই বছর গণনা করত—হস্তীবর্ষ, প্রচলিত মতে যা নবীর জন্মবর্ষ, আনুমানিক ৫৭০ খ্রিস্টাব্দ—তাই প্রথম আয়াতের "আসহাবুল ফীল" কথাটি সূরায় আসার আগেই মানুষের মুখে মুখে ছিল। সূরার নাম এমন এক ঘটনা থেকে, যা প্রথম শ্রোতারা নিজেদের পিতাদের কাছ থেকেই শুনেছিলেন, আর নামের শব্দটি সেই অদ্ভুত প্রাণী যা ঘটনাটিকে অবিস্মরণীয় করে রেখেছিল।',
    },
    signal: {
      en: 'Expect five verses recalling a rout still in living memory at Mecca: birds in flocks, stones of baked clay, an army left like chewed straw — offered as proof that the Lord of the Kaaba protects His House.',
      bn: 'আশা করুন পাঁচটি আয়াত, যা মক্কার মানুষের স্মৃতিতে তখনও তাজা এক পরাজয়ের কথা স্মরণ করায়: ঝাঁকে ঝাঁকে পাখি, পোড়ামাটির পাথর, আর চিবানো খড়ের মতো পড়ে থাকা বাহিনী—প্রমাণ হিসেবে যে কাবার প্রতিপালক তাঁর ঘর রক্ষা করেন।',
    },
    alt: [],
    refs: ['105:1', '105:3', '105:5'],
  },

  106: {
    meaning: { en: 'Quraysh', bn: 'কুরাইশ' },
    source: {
      en: 'From "For the accustomed security of the Quraysh" (106:1), the tribe named in the opening verse.',
      bn: '"কুরাইশের অভ্যস্ততার জন্য" (১০৬:১)—প্রথম আয়াতে উল্লেখিত গোত্রের নাম থেকে।',
    },
    why: {
      en: 'This is one of the few surahs named after a people rather than a thing or an event, and the only one named after the Prophet\'s own tribe. The word occurs once, in the first verse. The surah is anchored to a specific commercial history: Quraysh\'s two caravan journeys, in winter to Yemen and in summer to Syria, made safe by their custodianship of the Kaaba, which fed and secured them. Many commentators read it as the direct continuation of Al-Fil — the House was protected so that this security could go on — and some early recitation joined the two.',
      bn: 'এটি সেই অল্প কয়েকটি সূরার একটি যেগুলোর নাম কোনো বস্তু বা ঘটনার নয়, একটি জাতির নামে; আর একমাত্র সূরা যার নাম নবীর নিজের গোত্রের নামে। শব্দটি এসেছে একবারই, প্রথম আয়াতে। সূরাটি গাঁথা এক নির্দিষ্ট বাণিজ্যিক ইতিহাসের সঙ্গে: কুরাইশের দুটি কাফেলা-সফর—শীতে ইয়েমেনে, গ্রীষ্মে সিরিয়ায়—যা নিরাপদ ছিল কাবার তত্ত্বাবধায়ক হওয়ার কারণেই, আর সেই তত্ত্বাবধানই তাদের খাদ্য ও নিরাপত্তা জুগিয়েছিল। অনেক মুফাসসির একে আল-ফীলের সরাসরি ধারাবাহিকতা মনে করেন—ঘর রক্ষা করা হয়েছিল যাতে এই নিরাপত্তা বজায় থাকে—আর প্রথম যুগে কেউ কেউ দুটিকে একসঙ্গে পড়তেন।',
    },
    signal: {
      en: 'Expect four verses turning a trading privilege into an obligation: since the two journeys are secured, worship the Lord of this House, the One who fed you against hunger and made you safe from fear.',
      bn: 'আশা করুন চারটি আয়াত, যা একটি বাণিজ্যিক সুবিধাকে দায়িত্বে বদলে দেয়: যেহেতু দুই সফর নিরাপদ, তাই ইবাদত করো এই ঘরের প্রতিপালকের, যিনি ক্ষুধায় তোমাদের খাইয়েছেন এবং ভয় থেকে নিরাপদ করেছেন।',
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
      bn: 'অস্বাভাবিকভাবে এখানে নামের শব্দটি সূরার প্রথম নয়, শেষ শব্দ। "মাউন" শব্দের ব্যাখ্যায় প্রাচীন ইমামগণ একাধিক মত দিয়েছেন—প্রতিবেশীরা একে অন্যকে যেসব নিত্যব্যবহার্য জিনিস ধার দেয়, যেমন হাঁড়ি, বালতি, কুড়াল; অথবা সম্পদের ওপর ওয়াজিব যাকাত—দুটি মতই বর্ণিত, কোনোটিকে চূড়ান্ত করা হয়নি। যে অর্থেই হোক, এটি সবচেয়ে ছোট জিনিস যা একজন মানুষ দিতে অস্বীকার করতে পারে; আর সেই অস্বীকারই শেষ অভিযোগ সেই লোকের বিরুদ্ধে, যে প্রতিদান অস্বীকার করে, এতিমকে ধাক্কা দেয় এবং মনোযোগহীনভাবে নামাজ পড়ে। নামটি ঠিক সেখানেই আঘাত করে যেখানে সূরার জ্বালা।',
    },
    signal: {
      en: 'Expect seven verses tying creed to conduct: whoever denies the Judgement pushes the orphan away, does not urge feeding the poor, is heedless in prayer, shows off, and will not lend a neighbour a bucket.',
      bn: 'আশা করুন সাতটি আয়াত, যা আকীদাকে আচরণের সঙ্গে বেঁধে দেয়: যে প্রতিদান অস্বীকার করে সে এতিমকে ধাক্কা দেয়, মিসকিনকে খাওয়াতে উৎসাহ দেয় না, নামাজে উদাসীন, লোক দেখায়, আর প্রতিবেশীকে একটি বালতি পর্যন্ত ধার দেয় না।',
    },
    alt: [
      { name: 'Ad-Din', en: 'From the opening verse, "the one who denies the recompense" — some early lists title the surah by that phrase.', bn: 'প্রথম আয়াতের "যে প্রতিদান অস্বীকার করে" কথাটি থেকে; কিছু প্রাচীন তালিকায় সূরাটির শিরোনাম এটিই।' },
      { name: "Ara'ayta", en: 'The surah cited by its opening word, "Have you seen…", as early usage often did.', bn: 'প্রথম যুগের প্রচলিত রীতি অনুযায়ী সূরাটিকে তার শুরুর শব্দ "আরাআইতা"—"তুমি কি দেখেছ"—দিয়ে উল্লেখ করা হয়।' },
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
      bn: 'কাওসার শব্দটি "কাসরাহ" অর্থাৎ প্রাচুর্য থেকে গঠিত আতিশয্যবাচক রূপ; আক্ষরিক অর্থে প্রচুর কল্যাণ। নবী থেকে বর্ণিত হাদীসে এটিকে জান্নাতে তাঁকে দেওয়া একটি নহর বলা হয়েছে; মুফাসসিরগণ একে ব্যাপকতর অর্থেও নিয়েছেন—তাঁকে দেওয়া সমস্ত কল্যাণের প্রাচুর্য, যার মধ্যে তাঁর বংশধারা, তাঁর অনুসারীরা এবং কুরআনও রয়েছে। শব্দটি এসেছে একবারই, প্রথম আয়াতে, আর তা-ই কুরআনের সংক্ষিপ্ততম সূরার নাম হয়েছে। এর জোর বৈপরীত্যে: এটি নাজিল হয়েছিল এমন এক নবীর প্রতি যাঁকে "আবতার" অর্থাৎ নির্বংশ বলে উপহাস করা হচ্ছিল, আর উত্তর এলো—প্রকৃতপক্ষে নির্বংশ সেই উপহাসকারীই।',
    },
    signal: {
      en: 'Expect three verses of reversal: a gift of abundance, a command to pray to your Lord and to sacrifice, and the closing verdict that the one who resented you is the one left without a legacy.',
      bn: 'আশা করুন তিন আয়াতের উল্টে দেওয়া হিসাব: প্রাচুর্যের দান, প্রতিপালকের উদ্দেশে নামাজ ও কুরবানির নির্দেশ, আর শেষে রায়—যে তোমার প্রতি বিদ্বেষ পোষণ করেছে, সে-ই উত্তরাধিকারহীন।',
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
      en: 'The name is the vocative of the opening verse: the group being addressed, not the surah\'s theme. The word recurs nowhere else in these six verses, which work instead by strict parallel — I do not worship what you worship, nor do you worship what I worship, repeated with a shift of tense, and closing with "for you your religion and for me mine". The title is taken from the addressee, while the subject is the refusal of religious compromise; it was revealed when Quraysh proposed that each side worship the other\'s god in alternate years.',
      bn: 'নামটি প্রথম আয়াতের সম্বোধনপদ—যাদের উদ্দেশে বলা হচ্ছে সেই দল, সূরার বিষয়বস্তু নয়। এই ছয় আয়াতের আর কোথাও শব্দটি আসেনি; বরং সূরাটি চলে কঠোর সমান্তরাল গঠনে—আমি ইবাদত করি না তোমরা যার ইবাদত করো, তোমরাও ইবাদত করো না আমি যাঁর ইবাদত করি—কালের পরিবর্তনসহ পুনরাবৃত্ত, আর শেষে "তোমাদের দ্বীন তোমাদের, আমার দ্বীন আমার"। শিরোনাম নেওয়া হয়েছে সম্বোধিতদের থেকে, অথচ বিষয় হলো ধর্মীয় আপসের প্রত্যাখ্যান; এটি নাজিল হয়েছিল যখন কুরাইশ প্রস্তাব দিয়েছিল যে এক বছর তারা, আর এক বছর নবী—পালা করে একে অন্যের উপাস্যের ইবাদত করবেন।',
    },
    signal: {
      en: 'Expect six verses drawing a line: no shared worship, no negotiated middle, and a final clause of separation that states two distinct paths rather than licensing indifference. Commonly recited paired with Al-Ikhlas.',
      bn: 'আশা করুন ছয়টি আয়াত, যা একটি সীমারেখা টানে: যৌথ ইবাদত নয়, সমঝোতার মাঝামাঝি পথ নয়; আর শেষ বাক্যটি দুই ভিন্ন পথের ঘোষণা, উদাসীনতার অনুমতি নয়। সাধারণত আল-ইখলাসের সঙ্গে জোড়া করে পড়া হয়।',
    },
    alt: [
      { name: 'Al-Muqashqishah', en: 'A reported name meaning "the one that clears away", used of this surah and of Al-Ikhlas together, because reciting them clears a person of association with God.', bn: 'বর্ণিত একটি নাম, অর্থ "যা পরিষ্কার করে দেয়"; এই সূরা ও আল-ইখলাস—দুটির ক্ষেত্রেই ব্যবহৃত, কারণ এগুলো পাঠ মানুষকে শিরক থেকে মুক্ত করে।' },
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
      bn: 'এখানে "নাসর" মানে আল্লাহর সাহায্য, যা একই আয়াতে জোড়া বেঁধেছে "আল-ফাতহ"—উন্মুক্তি বা বিজয়ের সঙ্গে, যাকে মুফাসসিরগণ মক্কা বিজয় হিসেবে বুঝেছেন। সূরার নাম নেওয়া হয়েছে এই দুই শব্দের প্রথমটি থেকে। এটি "আত-তাওদী" অর্থাৎ "বিদায়" নামেও বর্ণিত, কারণ ইবনে আব্বাস ও অন্যরা একে এই ইঙ্গিত হিসেবে পড়েছেন যে দায়িত্ব পূর্ণ হয়েছে ও নবীর ইন্তেকাল নিকটবর্তী; বর্ণিত আছে, উমর তাঁকে ঠিক এ বিষয়েই জিজ্ঞেস করেছিলেন। এই দ্বিতীয় নামটি সূরার কোনো শব্দ থেকে নয়, বরং তার সঙ্গে যুক্ত একটি ব্যাখ্যা থেকে এসেছে—এভাবেই তা উল্লেখ করা উচিত।',
    },
    signal: {
      en: 'Expect three verses standing at the end of the mission: victory arriving, people entering God\'s religion in crowds, and a command not to celebrate but to glorify, praise and seek forgiveness.',
      bn: 'আশা করুন তিনটি আয়াত, যা দাঁড়িয়ে আছে দাওয়াতি জীবনের শেষপ্রান্তে: বিজয়ের আগমন, দলে দলে মানুষের আল্লাহর দ্বীনে প্রবেশ, আর নির্দেশ—উৎসব নয়, বরং তাসবীহ, প্রশংসা ও ইস্তিগফার।',
    },
    alt: [
      { name: "At-Tawdi'", en: '"The farewell": a name recorded on the basis of the reading that the surah announced the nearness of the Prophet\'s death. It is an interpretive title, not a word taken from the text.', bn: '"বিদায়"—এই নামটি বর্ণিত হয়েছে সেই ব্যাখ্যার ভিত্তিতে যে সূরাটি নবীর ইন্তেকাল নিকটবর্তী হওয়ার ঘোষণা দিয়েছিল। এটি ব্যাখ্যাভিত্তিক শিরোনাম, সূরার কোনো শব্দ নয়।' },
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
      bn: 'এই পাঁচ আয়াতের জন্য তিনটি নাম প্রচলিত, আর প্রতিটিই নেওয়া হয়েছে ভেতরের ভিন্ন ভিন্ন শব্দ থেকে: শেষ আয়াতের আঁশের রশি থেকে আল-মাসাদ, প্রথম ও তৃতীয় আয়াতের আবু লাহাব ও অগ্নিশিখা থেকে আল-লাহাব, আর শুরুর ক্রিয়া "ধ্বংস হয়েছে" থেকে তাব্বাত। এই ভিন্নতা একেবারেই স্বাভাবিক—প্রথম যুগের মুসলিমরা সূরাকে তার যে শব্দটি মনে পড়ত তা দিয়েই উল্লেখ করতেন, সর্বত্র একটিমাত্র শিরোনাম নির্ধারিত ছিল না। এই অ্যাপ উসমানি মুসহাফের রীতি অনুসরণ করে আল-মাসাদ দেখায়; ইন্দোনেশীয় ছাপায় আল-লাহাব আর তুর্কি ছাপায় তেব্বেত—একই সূরার জন্য।',
    },
    signal: {
      en: 'Expect the Quran\'s only surah aimed at a named living opponent: the Prophet\'s uncle Abu Lahab and his wife, his wealth and earnings availing him nothing, and a flaming fire and a fibre rope waiting for them both.',
      bn: 'আশা করুন কুরআনের একমাত্র সূরা, যা নাম ধরে এক জীবিত বিরোধীকে লক্ষ্য করে: নবীর চাচা আবু লাহাব ও তার স্ত্রী, তার সম্পদ ও উপার্জন কোনো কাজে আসেনি, আর দুজনের জন্য অপেক্ষা করছে অগ্নিশিখা ও আঁশের রশি।',
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
      bn: 'কোনো আয়াতেই শব্দটি নেই: নামটি সূরার বিষয়বস্তুর বর্ণনা—আল্লাহর অবিভাজ্য একত্ব (১১২:১-৪)।',
    },
    why: {
      en: 'This is the clearest case in the Quran of a thematic name. Ikhlas means making a thing pure and unmixed, and in religious usage the sincerity that gives worship to God alone. The word appears nowhere in the four verses. The name was given for what the surah does: it strips the idea of God of partner, parent, offspring and equal, so that what remains is unmixed. Set beside surahs named from a passing word, like Al-Baqarah or Al-Fil, it shows that Quranic titles are not all one kind of thing. Most label; this one describes.',
      bn: 'কুরআনে বিষয়ভিত্তিক নামকরণের সবচেয়ে স্পষ্ট দৃষ্টান্ত এটি। "ইখলাস" অর্থ কোনো কিছুকে বিশুদ্ধ ও অমিশ্র করা, আর ধর্মীয় পরিভাষায় সেই একনিষ্ঠতা যা ইবাদতকে কেবল আল্লাহর জন্য নির্দিষ্ট করে। চার আয়াতের কোথাও শব্দটি নেই। নামটি দেওয়া হয়েছে সূরা যা করে সেই কাজের জন্য: এটি আল্লাহর ধারণা থেকে শরিক, জন্মদাতা, সন্তান ও সমকক্ষ—সব ছেঁটে ফেলে, যাতে যা থাকে তা অমিশ্র। আল-বাকারা বা আল-ফীলের মতো প্রাসঙ্গিক এক শব্দ থেকে নেওয়া নামের পাশে রাখলে বোঝা যায়, কুরআনের সব শিরোনাম এক ধরনের নয়—অধিকাংশ চিহ্নিত করে, আর এটি বর্ণনা করে।',
    },
    signal: {
      en: 'Expect four verses answering the question "what is your Lord?" — One, eternally self-sufficient, neither begetting nor begotten, with no equal — which the Prophet said weighs as a third of the Quran.',
      bn: 'আশা করুন চারটি আয়াত, যা "তোমার প্রতিপালক কেমন?" প্রশ্নের উত্তর দেয়—এক, চিরস্বয়ংসম্পূর্ণ, জন্ম দেন না ও জন্ম নেননি, তাঁর সমকক্ষ কেউ নেই—যাকে নবী কুরআনের এক-তৃতীয়াংশের সমান বলেছেন।',
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
      bn: 'ফালাক শব্দের ধাতুগত অর্থ বিদীর্ণ করা। এটি সেই প্রভাত যা অন্ধকারকে চিরে দেয়; কিছু মুফাসসির অর্থটিকে বিস্তৃত করেছেন—আল্লাহ যা কিছু বিদীর্ণ করেন তার সবই, যেমন বীজ, মেঘ, গর্ভ। নামটি প্রথম আয়াতের দ্বিতীয় বিশেষ্য, কারণ যাঁর কাছে আশ্রয় চাওয়া হচ্ছে তিনি তারই প্রতিপালক। গোপন অনিষ্ট নিয়ে একটি সূরার শিরোনামে আলো-বিদীর্ণ করার শব্দ বসানো—রাতের অন্ধকার যখন গাঢ় হয়, গিরায় ফুঁ দেওয়া, হিংসুকের হিংসা—এটি অবস্থানগত কাকতাল নয়, সচেতন বৈপরীত্য। আন-নাসের সঙ্গে মিলে এটি একটি স্বীকৃত জোড়া গঠন করে।',
    },
    signal: {
      en: 'Expect five verses of protection: refuge sought with the Lord of daybreak from the evil of what He created, from the night as it darkens, from those who blow on knots, and from an envier when he envies.',
      bn: 'আশা করুন পাঁচটি আয়াতের আশ্রয়প্রার্থনা: প্রভাতের প্রতিপালকের কাছে আশ্রয়—তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে, রাতের অন্ধকার গাঢ় হলে তার অনিষ্ট থেকে, গিরায় ফুঁ দেওয়াদের থেকে, আর হিংসুক যখন হিংসা করে তার থেকে।',
    },
    alt: [
      { name: "Al-Mu'awwidhatan", en: 'A name for this surah and An-Nas taken together — "the two that seek refuge" — because both open with the same command to seek refuge and were recited as a pair; the Prophet used them nightly. Singly, this surah is also called al-Mu\'awwidhah.', bn: 'এই সূরা ও আন-নাস—দুটিকে একসঙ্গে বোঝাতে ব্যবহৃত নাম, অর্থ "আশ্রয়প্রার্থনাকারী দুটি"; কারণ দুটিই একই আশ্রয় চাওয়ার নির্দেশ দিয়ে শুরু এবং জোড়া করেই পড়া হতো—নবী প্রতি রাতে এগুলো পড়তেন। এককভাবে এই সূরাকে আল-মুআউয়িযাহও বলা হয়।' },
    ],
    refs: ['113:1', '113:5'],
  },

  114: {
    meaning: { en: 'Mankind', bn: 'মানুষ' },
    source: {
      en: 'From an-nas, "mankind", which begins the surah in "the Lord of mankind" (114:1) and recurs through it.',
      bn: '"আন-নাস" অর্থাৎ মানুষ শব্দ থেকে, যা "মানুষের প্রতিপালক" (১১৪:১) দিয়ে সূরা শুরু করে এবং বারবার ফিরে আসে।',
    },
    why: {
      en: 'Unusually, the naming word is not distinctive at all — nas, people, is among the commonest words in the Quran. What makes it the title here is repetition and position: God is named as Lord, King and God of mankind, the whisperer\'s target is the breasts of mankind, and the whisperer himself may be from jinn or from mankind. The word binds the six verses together and is impossible to miss. With Al-Falaq it forms al-Mu\'awwidhatan, the two refuge-seeking surahs the Prophet recited nightly and used in place of other supplications.',
      bn: 'অস্বাভাবিকভাবে নামের শব্দটি মোটেও বিরল কিছু নয়—"নাস" বা মানুষ কুরআনের সবচেয়ে প্রচলিত শব্দগুলোর একটি। এখানে তাকে শিরোনাম করে তুলেছে পুনরাবৃত্তি ও অবস্থান: আল্লাহকে বলা হয়েছে মানুষের প্রতিপালক, মানুষের অধিপতি, মানুষের ইলাহ; কুমন্ত্রণাদাতার লক্ষ্য মানুষের অন্তর; আর সেই কুমন্ত্রণাদাতা জিন থেকেও হতে পারে, মানুষের মধ্য থেকেও। শব্দটি ছয় আয়াতকে একসূত্রে বেঁধে রাখে, তা এড়িয়ে যাওয়া অসম্ভব। আল-ফালাকের সঙ্গে মিলে এটি গঠন করে আল-মুআউয়িযাতাইন—আশ্রয়প্রার্থনার দুই সূরা, যা নবী প্রতি রাতে পড়তেন এবং অন্য দোয়ার পরিবর্তেও ব্যবহার করতেন।',
    },
    signal: {
      en: 'Expect six verses that name God by three titles before naming the danger: the retreating whisperer who whispers into human hearts, whether he comes from among the jinn or from people themselves.',
      bn: 'আশা করুন ছয়টি আয়াত, যা বিপদের নাম বলার আগে আল্লাহকে তিনটি পরিচয়ে ডাকে: তারপর আসে সেই পিছিয়ে যাওয়া কুমন্ত্রণাদাতা, যে মানুষের অন্তরে কুমন্ত্রণা দেয়—সে জিনদের মধ্য থেকে হোক বা মানুষের মধ্য থেকে।',
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
      bn: 'সূচনায় ঘোষণা করা হয়েছে যে রোমানরা পরাজিত হয়েছে এবং কয়েক বছরের মধ্যেই তারা জয়ী হবে — ৩০:২-৪ থেকেই নামটি এসেছে।',
    },
    why: {
      en: 'The surah is named after a foreign empire that appears in three verses at the very start and is never mentioned again. That is the usual pattern: a surah title works as a marker, a memorable hook for reciting and referring, rather than as a summary of contents. Here the hook is unusually bold, because it is a dated public prediction made in Mecca that the beaten Byzantines would win within a few years. The body of the surah is about the signs of Allah in creation and the certainty of resurrection, so the name points at the opening, not the theme.',
      bn: 'সূরাটির নাম এসেছে এমন এক বিদেশি সাম্রাজ্যের নামে, যার উল্লেখ কেবল শুরুর তিনটি আয়াতে, এরপর আর কোথাও নেই। এটাই স্বাভাবিক রীতি: সূরার নাম মূলত একটি চিহ্ন — তিলাওয়াত ও উল্লেখের সময় সহজে মনে রাখার একটি খুঁটি, বিষয়বস্তুর সারসংক্ষেপ নয়। তবে এখানে চিহ্নটি অস্বাভাবিকভাবে সাহসী, কারণ মক্কায় প্রকাশ্যে বলা হয়েছিল, পরাজিত রোমানরা অল্প কয়েক বছরের ভেতরেই জিতবে। সূরার মূল আলোচনা সৃষ্টিজগতে আল্লাহর নিদর্শন ও পুনরুত্থানের নিশ্চয়তা নিয়ে; তাই নামটি সূরার সূচনার দিকে ইঙ্গিত করে, বিষয়বস্তুর দিকে নয়।',
    },
    signal: {
      en: 'Expect a surah that opens on a real news event and then turns it into evidence: signs in the heavens, in rain, in sleep, in the affection between spouses, all pointing to the One who can raise the dead.',
      bn: 'আশা করুন এমন একটি সূরা, যা বাস্তব একটি সংবাদ দিয়ে শুরু হয়ে সেটিকেই প্রমাণে রূপ দেয় — আকাশ, বৃষ্টি, ঘুম আর দাম্পত্য ভালোবাসার নিদর্শন, সবই সেই সত্তার দিকে ইঙ্গিত করে যিনি মৃতকে জীবিত করেন।',
    },
    alt: [],
    refs: ['30:2-4'],
  },
  31: {
    meaning: { en: 'Luqman (a sage)', bn: 'লুকমান (এক প্রজ্ঞাবান)' },
    source: {
      en: 'From Luqman, the wise man whose counsel to his son is recorded in 31:12-19.',
      bn: 'লুকমান নামের সেই প্রজ্ঞাবান ব্যক্তির নামে, যাঁর ছেলেকে দেওয়া উপদেশ ৩১:১২-১৯-এ বর্ণিত হয়েছে।',
    },
    why: {
      en: 'Almost every surah named after a person is named after a prophet. This one is not: Luqman is described as a man given wisdom, and the majority of scholars treat him as a wise servant rather than a prophet, though a minority disagreed. The naming word occupies only eight verses of thirty-four, so again the title is a marker rather than a summary. Ibn Ashur notes plainly that no second name for this surah is recorded; it has always been known simply as Luqman among reciters and commentators.',
      bn: 'কোনো ব্যক্তির নামে রাখা সূরাগুলোর প্রায় সবই কোনো নবীর নামে। এটি ব্যতিক্রম: লুকমানকে বলা হয়েছে হিকমতপ্রাপ্ত একজন মানুষ, এবং অধিকাংশ আলিম তাঁকে নবী নয়, বরং প্রজ্ঞাবান এক বান্দা হিসেবেই গণ্য করেন — যদিও অল্প কিছু মত ভিন্ন। চৌত্রিশ আয়াতের মধ্যে তাঁর প্রসঙ্গ মাত্র আটটিতে, তাই নামটি এখানেও সারসংক্ষেপ নয়, বরং চিহ্ন। ইবনে আশূর স্পষ্টভাবে লিখেছেন, এই সূরার দ্বিতীয় কোনো নাম বর্ণিত নেই; ক্বারী ও মুফাসসিরদের কাছে এটি বরাবরই কেবল লুকমান নামেই পরিচিত।',
    },
    signal: {
      en: 'A short Meccan surah built around advice from a father to his son: do not associate partners with Allah, be good to parents, pray, be patient, and do not walk the earth in arrogance.',
      bn: 'ছোট একটি মাক্কী সূরা, যার কেন্দ্রে বাবার কাছ থেকে ছেলেকে দেওয়া উপদেশ: আল্লাহর সঙ্গে কাউকে শরিক কোরো না, বাবা-মায়ের সঙ্গে সদাচরণ করো, নামাজ কায়েম করো, ধৈর্য ধরো, আর অহংকার নিয়ে পথ চলো না।',
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
      bn: 'ত্রিশ আয়াতের এই সূরায় তিলাওয়াতের একটিমাত্র সিজদা আছে, নামটি সেটিরই চিহ্ন। যেহেতু একাধিক সূরায় সিজদার আয়াত রয়েছে, তাই ঐতিহ্যে সেগুলো আলাদা করতে বিশেষণ যোগ হয়েছে: এটিকে সূচনার হরফ ধরে বলা হয় আলিফ লাম মীম আস-সাজদা, আর আগের সূরার সূত্রে বলা হয় সাজদাতু লুকমান। এখানে এই পার্থক্যটি গুরুত্বপূর্ণ, কারণ ৪১ নম্বর সূরাকেও একই কারণে হা মীম আস-সাজদা বলা হয়। অর্থাৎ দুটি ভিন্ন সূরায় সাজদা শব্দটি আছে, আর সঙ্গে জোড়া হরফগুলোই তাদের আলাদা করে।',
    },
    signal: {
      en: 'A compact Meccan surah on revelation, creation in stages, and the contrast between those who fall prostrate at night and those who turn away from every reminder.',
      bn: 'ছোট একটি মাক্কী সূরা — ওহি, ধাপে ধাপে সৃষ্টি, আর রাতে সিজদায় লুটিয়ে পড়া মানুষ ও প্রতিটি উপদেশ থেকে মুখ ফিরিয়ে নেওয়া মানুষের মধ্যকার পার্থক্য নিয়ে।',
    },
    alt: [
      { name: 'Alif Lam Mim as-Sajdah', en: 'The opening letters added to the name to distinguish it from the other surah known by a prostration, Ha Mim as-Sajdah.', bn: 'সিজদার সূত্রে পরিচিত অন্য সূরা হা মীম আস-সাজদা থেকে আলাদা করতে সূচনার হরফগুলো নামের সঙ্গে জুড়ে দেওয়া হয়েছে।' },
      { name: 'Sajdat Luqman', en: 'Identified by the surah that precedes it, again to keep the prostration surahs apart.', bn: 'আগের সূরার নামে চিহ্নিত — এখানেও উদ্দেশ্য সিজদাযুক্ত সূরাগুলোকে আলাদা রাখা।' },
      { name: "Al-Mada'ji", en: 'Reported from the phrase about believers whose sides forsake their beds at night, in 32:16.', bn: 'রাতে যাদের পিঠ বিছানা থেকে দূরে থাকে — ৩২:১৬-এর সেই বর্ণনা থেকে নামটি বর্ণিত।' },
    ],
    refs: ['32:15', '32:16'],
  },
  33: {
    meaning: { en: 'The Confederates', bn: 'সম্মিলিত বাহিনী' },
    source: {
      en: 'From the allied tribes who besieged Medina at the Battle of the Trench, called al-ahzab in 33:20 and 33:22.',
      bn: 'খন্দকের যুদ্ধে মদিনা অবরোধকারী মিত্র গোত্রগুলোর নামে, যাদের ৩৩:২০ ও ৩৩:২২-এ আল-আহযাব বলা হয়েছে।',
    },
    why: {
      en: 'Ahzab means parties or factions banded together, and it names the coalition of Quraysh and their allies who marched on Medina and were turned back without a battle. The word occurs in only a few verses, yet the siege it names is the pivot of the surah, which uses that moment of fear to examine who stood firm and who wavered. So this is a middle case: the title is still lifted from a distinctive word, but the episode behind it really is central. Ibn Ashur records no other name for the surah.',
      bn: 'আহযাব মানে দলবদ্ধ পক্ষ বা জোট, আর এখানে তা বোঝায় কুরাইশ ও তাদের মিত্রদের সেই সম্মিলিত বাহিনীকে, যারা মদিনার দিকে এগিয়ে এসে যুদ্ধ ছাড়াই ফিরে গিয়েছিল। শব্দটি মাত্র কয়েকটি আয়াতে এসেছে, কিন্তু যে অবরোধকে তা নির্দেশ করে সেটিই সূরার কেন্দ্রবিন্দু — সেই ভয়ের মুহূর্তকে সামনে রেখেই দেখানো হয়েছে কারা অবিচল ছিল আর কারা টলে গিয়েছিল। তাই এটি মাঝামাঝি একটি ধরন: নাম এখানেও একটি স্বতন্ত্র শব্দ থেকে নেওয়া, তবু ঘটনাটি সত্যিই মূল বিষয়। ইবনে আশূর এই সূরার অন্য কোনো নাম উল্লেখ করেননি।',
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
      bn: 'সাবা ছিল দক্ষিণ আরবের একটি রাজ্য, আর সূরাটির নাম এসেছে মাত্র কয়েকটি আয়াতের একটি অংশ থেকে, যেখানে তাদের উর্বর উপত্যকা, অকৃতজ্ঞতা এবং যে বন্যা তাদের ছিন্নভিন্ন করে দিয়েছিল তার বর্ণনা আছে। সূরার বাকি অংশ দাউদ ও সুলাইমান, অস্বীকারকারীদের যুক্তি এবং হিসাব-নিকাশ নিয়ে। অর্থাৎ নামের শব্দটি এখানেও একটি স্বতন্ত্র চিহ্ন — প্রথম শ্রোতাদের কাছে পরিচিত একটি স্থাননাম, আর কাছাকাছি আর কোথাও না থাকায় চেনার জন্যই সুবিধাজনক। ইবনে আশূর এই একটি নামই উল্লেখ করেছেন।',
    },
    signal: {
      en: 'A Meccan surah that argues from history and from favour withdrawn: kingdoms that were given much, grew ungrateful, and became a tale told to later generations.',
      bn: 'একটি মাক্কী সূরা, যা ইতিহাস আর কেড়ে নেওয়া নিয়ামত দিয়ে যুক্তি সাজায়: যেসব জাতিকে অনেক কিছু দেওয়া হয়েছিল, যারা অকৃতজ্ঞ হয়ে গেল, আর শেষে পরবর্তীদের জন্য গল্পে পরিণত হলো।',
    },
    alt: [],
    refs: ['34:15-17'],
  },
  35: {
    meaning: { en: 'Originator', bn: 'সৃষ্টির সূচনাকারী' },
    source: {
      en: 'From the opening words, which praise Allah as Fatir, the Originator of the heavens and the earth, in 35:1.',
      bn: 'সূচনার শব্দ থেকে, যেখানে ৩৫:১-এ আল্লাহর প্রশংসা করা হয়েছে ফাতির — আসমান ও জমিনের সূচনাকারী — হিসেবে।',
    },
    why: {
      en: 'Fatir is a rare and vivid word: it carries the sense of splitting something open to bring it into being, not merely making it. The surah is named from the first line, which is the commonest naming method of all, since an opening word is what a reciter reaches first and remembers best. The very same verse also mentions the angels sent as messengers, which is why the surah is equally known as Al-Malaikah. Two names, one verse, two different words picked out of it.',
      bn: 'ফাতির একটি বিরল ও জীবন্ত শব্দ: এতে কেবল বানানোর অর্থ নয়, বরং কিছু বিদীর্ণ করে অস্তিত্বে আনার ভাব রয়েছে। সূরাটির নাম নেওয়া হয়েছে প্রথম পঙ্‌ক্তি থেকে, যা নামকরণের সবচেয়ে প্রচলিত পদ্ধতি — কারণ তিলাওয়াতকারী সবার আগে সেটিই পৌঁছান এবং সেটিই সবচেয়ে ভালো মনে রাখেন। ঠিক সেই আয়াতেই ফেরেশতাদের কথাও এসেছে, যাঁদের বার্তাবাহক করা হয়েছে; সে কারণেই সূরাটি আল-মালাইকা নামেও সমানভাবে পরিচিত। একই আয়াত, দুটি নাম, বেছে নেওয়া দুটি ভিন্ন শব্দ।',
    },
    signal: {
      en: 'Expect sustained attention to Allah alone as creator and sustainer: wind, rain, dead earth revived, two seas that do not mix, and the warning that no soul carries another burden.',
      bn: 'আশা করুন স্রষ্টা ও রিজিকদাতা হিসেবে কেবল আল্লাহর দিকেই টানা মনোযোগ: বাতাস, বৃষ্টি, মৃত জমিনের পুনর্জীবন, দুই সাগরের না মেশা, আর এই সতর্কবার্তা যে কেউ অন্যের বোঝা বহন করবে না।',
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
      bn: 'ইয়া সীন হুরুফুল মুকাত্তাআতের অন্তর্ভুক্ত, আর এগুলোর অর্থ নির্ধারিত নয়। সংখ্যাগরিষ্ঠের অবস্থান হলো, এগুলোকে ওহি হিসেবে মেনে নেওয়া এবং অর্থের দাবি না করে তা আল্লাহর কাছেই সোপর্দ করা। প্রচলিত যে দাবি — কোনো এক উপভাষায় ইয়া সীন অর্থ "হে মানুষ" — তা একটি বর্ণিত মত মাত্র, প্রতিষ্ঠিত সত্য নয়; ইবনে আশূর এটি প্রত্যাখ্যান করেছেন এই যুক্তিতে যে মুসহাফে নামটি দুটি আলাদা হরফ হিসেবেই লেখা হয়। ফলে সূরাটির নাম তার সূচনার চিহ্ন, যা সূরাটিকে নিখুঁতভাবে শনাক্ত করে, অথচ বিষয়বস্তু সম্পর্কে কিছুই জানায় না।',
    },
    signal: {
      en: 'A Meccan surah of warning and vivid imagery: a messenger rejected by a town, a believer who ran to defend him, signs in the dead earth and the night, and the resurrection.',
      bn: 'সতর্কবার্তা ও জীবন্ত চিত্রকল্পে ভরা একটি মাক্কী সূরা: এক জনপদের প্রত্যাখ্যান করা বার্তাবাহক, তাঁদের পক্ষে ছুটে আসা এক ঈমানদার, মৃত জমিন ও রাতের নিদর্শন, এবং পুনরুত্থান।',
    },
    alt: [
      { name: 'Qalb al-Quran', en: 'Reported as "the heart of the Quran" in a hadith which at-Tirmidhi himself called strange and whose chain contains an unknown narrator; scholars generally grade it weak, so it is quoted here as a report, not as an established virtue.', bn: '"কুরআনের হৃদয়" হিসেবে বর্ণিত একটি হাদিসে, যাকে তিরমিযি নিজেই গরীব বলেছেন এবং যার সনদে অজ্ঞাত একজন বর্ণনাকারী আছেন; আলিমগণ সাধারণত একে দুর্বল বলেন, তাই এটি প্রতিষ্ঠিত ফজিলত নয়, নিছক একটি বর্ণনা হিসেবেই উল্লেখ করা হলো।' },
      { name: 'Surat Habib an-Najjar', en: 'A rare title found in a late manuscript, naming the surah after the believer of the town; Ibn Ashur called it strange and knew no basis for it.', bn: 'দেরিতে লেখা এক পাণ্ডুলিপিতে পাওয়া বিরল একটি শিরোনাম, যেখানে জনপদের সেই ঈমানদারের নামে সূরাটির নাম দেওয়া হয়েছে; ইবনে আশূর একে অদ্ভুত বলেছেন এবং এর কোনো ভিত্তি জানা যায়নি।' },
    ],
    refs: ['36:1'],
  },
  37: {
    meaning: { en: 'Those Ranged in Rows', bn: 'সারিবদ্ধ যারা' },
    source: {
      en: 'From the opening oath by those drawn up in ranks, in 37:1.',
      bn: '৩৭:১-এ সারিবদ্ধভাবে দাঁড়ানোদের নামে করা শপথ থেকে।',
    },
    why: {
      en: 'The surah opens with an oath by as-saffat, those ranged in rows, understood by most commentators as the angels standing in ranks. The word is taken straight from the first line, which is how a great many surahs are named, and it is chosen because it is striking and unrepeated rather than because it summarises anything. The surah that follows is a long sequence of prophets and their deliverance. So the title fixes the surah in memory by its opening sound, and the reader learns the subject only by reading on.',
      bn: 'সূরাটি শুরু হয়েছে আস-সাফফাত অর্থাৎ সারিবদ্ধদের শপথ দিয়ে, যাঁদের অধিকাংশ মুফাসসির সারিবদ্ধ ফেরেশতা হিসেবে বুঝেছেন। শব্দটি সরাসরি প্রথম পঙ্‌ক্তি থেকেই নেওয়া, যেভাবে বহু সূরার নামকরণ হয়েছে; আর এটি বেছে নেওয়ার কারণ এর অভিনবত্ব ও অনন্যতা, কোনো কিছুর সারসংক্ষেপ হওয়া নয়। এরপর সূরায় আসে নবীদের এক দীর্ঘ ধারাবাহিক বর্ণনা ও তাঁদের মুক্তির কাহিনি। ফলে নামটি সূচনার ধ্বনি দিয়ে সূরাটিকে স্মৃতিতে গেঁথে দেয়, আর বিষয়বস্তু পাঠক জানেন কেবল পড়তে পড়তেই।',
    },
    signal: {
      en: 'Expect rapid, rhythmic verses and a long procession of prophets: Nuh, Ibrahim and the great sacrifice, Musa and Harun, Ilyas, Lut and Yunus, each of them rejected by his people and then rescued.',
      bn: 'আশা করুন দ্রুত ছন্দের আয়াত আর নবীদের একটি দীর্ঘ মিছিল: নূহ, ইবরাহীম ও মহান কুরবানি, মূসা ও হারুন, ইলিয়াস, লূত এবং ইউনুস — প্রত্যেকেই নিজ জাতির হাতে প্রত্যাখ্যাত হয়ে পরে উদ্ধার পেয়েছেন।',
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
      bn: 'সোয়াদ হুরুফুল মুকাত্তাআতের একটি, আর বাকিগুলোর মতোই এর অর্থ নির্ধারিত নয়; সংখ্যাগরিষ্ঠ আলিম এই হরফগুলোকে নাজিলকৃত হিসেবে মেনে নেন, অর্থ জানার দাবি করেন না। সোয়াদকে কোনো নামের বা নির্দেশের সংক্ষিপ্ত রূপ ধরার চেষ্টাগুলো অনুমান মাত্র, বর্ণিত জ্ঞান নয়। তাই সূরাটি চেনা যায় বিষয় দিয়ে নয়, একটি ধ্বনি দিয়ে — আর তাতেই যথেষ্ট, কারণ অন্য কোনো সূরা এভাবে শুরু হয় না। এতে দাউদের দীর্ঘ বর্ণনা থাকায় কিছু বর্ণনায় একে সূরা দাউদও বলা হয়েছে।',
    },
    signal: {
      en: 'A Meccan surah about power and privilege put to the test: Dawud judging a dispute brought to him, Sulayman and his horses, Ayyub in his illness, and Iblis refusing to bow out of sheer pride.',
      bn: 'ক্ষমতা ও মর্যাদার পরীক্ষা নিয়ে একটি মাক্কী সূরা: তাঁর কাছে আনা বিবাদের ফয়সালা করছেন দাউদ, সুলাইমান ও তাঁর ঘোড়া, অসুস্থ অবস্থায় আইয়ুব, আর নিছক অহংকারে সিজদা করতে অস্বীকার করা ইবলিস।',
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
      bn: 'ব্যতিক্রমীভাবে এই সূরার নাম এসেছে এমন একটি শব্দ থেকে, যা রয়েছে কেবল শেষ দৃশ্যে, সূচনায় নয়। যুমার মানে দলবদ্ধভাবে চালিত জনস্রোত, আর শব্দটি একেবারে শেষে দুবার এসেছে দুটি মিছিলের জন্য — একটি জাহান্নামের দিকে, অন্যটি জান্নাতের দিকে। তার আগের পুরোটাই ইবাদতে একনিষ্ঠতা এবং পাপীদের জন্য খোলা থাকা রহমত নিয়ে। শেষ দৃশ্য থেকে নাম নেওয়ায় শিরোনামটিই বহন করে সেই গন্তব্য, যার দিকে গোটা সূরা যুক্তি সাজিয়ে এগিয়েছে। কুরতুবীর একটি বর্ণনায় বিকল্প নাম আল-গুরাফ পাওয়া যায়।',
    },
    signal: {
      en: 'Expect a sustained call to worship Allah alone with a sincere heart, and one of the most quoted verses of hope for those who despair of forgiveness.',
      bn: 'আশা করুন একনিষ্ঠ হৃদয়ে কেবল আল্লাহর ইবাদতের অবিরাম আহ্বান, আর ক্ষমার আশা হারানো মানুষের জন্য সবচেয়ে বেশি উদ্ধৃত আয়াতগুলোর একটি।',
    },
    alt: [
      { name: 'Al-Ghuraf', en: 'Recorded by al-Qurtubi from Wahb ibn Munabbih, after the lofty chambers built one above another that are promised in 39:20.', bn: 'কুরতুবী ওয়াহব ইবনে মুনাব্বিহর সূত্রে বর্ণনা করেছেন; নামটি ৩৯:২০-এ প্রতিশ্রুত একের পর এক নির্মিত সুউচ্চ কক্ষগুলোর সূত্রে।' },
    ],
    refs: ['39:71', '39:73'],
  },
  40: {
    meaning: { en: 'Forgiver of Sin', bn: 'পাপ ক্ষমাকারী' },
    source: {
      en: 'From the description of Allah as Ghafir adh-dhanb, forgiver of sin and accepter of repentance, in 40:3.',
      bn: '৪০:৩-এ আল্লাহকে গাফিরুয্‌ যাম্‌ব — পাপ ক্ষমাকারী ও তাওবা কবুলকারী — বলে বর্ণনা করার সূত্রে।',
    },
    why: {
      en: 'This surah has three recorded names, each lifted from a different place. Ghafir comes from a divine attribute in the third verse and became standard in North African copies. Al-Mu\'min points instead to the believer of Pharaoh\'s family, who concealed his faith and spoke up in defence of Musa, an episode found nowhere else in the Quran. At-Tawl comes from another attribute in the same third verse and has largely fallen out of use. Three names, none of them a summary, each simply a reliable handle for finding the surah.',
      bn: 'এই সূরার তিনটি নাম বর্ণিত, প্রতিটি ভিন্ন জায়গা থেকে নেওয়া। গাফির এসেছে তৃতীয় আয়াতে আল্লাহর একটি গুণবাচক নাম থেকে, এবং উত্তর আফ্রিকার মুসহাফে এটিই প্রচলিত হয়ে যায়। আল-মুমিন ইঙ্গিত করে ফিরআউনের পরিবারের সেই ঈমানদারের দিকে, যিনি নিজের ঈমান গোপন রেখে মূসার পক্ষে কথা বলেছিলেন — কুরআনে এই ঘটনা আর কোথাও নেই। আত-তাওল এসেছে ওই তৃতীয় আয়াতেরই আরেকটি গুণ থেকে, তবে এই নামের ব্যবহার প্রায় উঠেই গেছে। তিনটি নামের কোনোটিই সারসংক্ষেপ নয়, প্রতিটিই কেবল সূরাটি খুঁজে পাওয়ার নির্ভরযোগ্য খুঁটি।',
    },
    signal: {
      en: 'The first of the seven Ha Mim surahs. Expect argument with proud deniers, the courage of one hidden believer at court, and repeated assurance that prayer is answered.',
      bn: 'সাতটি হা মীম সূরার প্রথমটি। আশা করুন অহংকারী অস্বীকারকারীদের সঙ্গে বিতর্ক, রাজদরবারে এক গোপন ঈমানদারের সাহস, আর বারবার এই আশ্বাস যে দোয়া কবুল হয়।',
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
      bn: '৪১:৩-এ এমন এক কিতাবের বর্ণনা থেকে যার আয়াতসমূহ বিশদভাবে বিবৃত — ফুসসিলাত আয়াতুহু।',
    },
    why: {
      en: 'This surah is named two different ways, and the contrast is instructive. Fussilat is taken from a word in the third verse and became the usual title in North Africa. Ha Mim as-Sajdah names it instead by its opening letters plus the prostration it contains, which is how the tradition kept the seven Ha Mim surahs apart from one another. Note that this is a different prostration from the one that gives surah 32 its name; the attached letters, Alif Lam Mim there and Ha Mim here, are what prevent confusion.',
      bn: 'এই সূরার নামকরণ হয়েছে দুই ভিন্ন পদ্ধতিতে, আর এই পার্থক্যটিই শিক্ষণীয়। ফুসসিলাত নেওয়া হয়েছে তৃতীয় আয়াতের একটি শব্দ থেকে, এবং উত্তর আফ্রিকায় এটিই প্রচলিত শিরোনাম হয়ে ওঠে। অন্যদিকে হা মীম আস-সাজদা নামটি এসেছে সূচনার হরফ আর সূরার ভেতরের সিজদা মিলিয়ে, যেভাবে সাতটি হা মীম সূরাকে পরস্পর থেকে আলাদা রাখা হতো। খেয়াল রাখতে হবে, এই সিজদা ৩২ নম্বর সূরার নাম দেওয়া সিজদা থেকে আলাদা; সঙ্গে জোড়া হরফগুলোই — সেখানে আলিফ লাম মীম, আর এখানে হা মীম — বিভ্রান্তি ঠেকায়।',
    },
    signal: {
      en: 'Expect a direct answer to those who said their hearts were veiled: creation described stage by stage, the ruin of Ad and Thamud, and the counsel to repel evil with what is better.',
      bn: 'আশা করুন তাদের সরাসরি জবাব যারা বলেছিল তাদের অন্তর আবরণে ঢাকা: ধাপে ধাপে সৃষ্টির বর্ণনা, আদ ও সামুদের ধ্বংস, আর মন্দকে উত্তম দিয়ে প্রতিহত করার উপদেশ।',
    },
    alt: [
      { name: 'Ha Mim as-Sajdah', en: 'The name used in the hadith literature: the opening letters together with the recitation prostration at 41:37-38, which distinguishes it from the other Ha Mim surahs.', bn: 'হাদিসের গ্রন্থে ব্যবহৃত নাম: সূচনার হরফ এবং ৪১:৩৭-৩৮-এর তিলাওয়াতের সিজদা মিলিয়ে, যা একে অন্য হা মীম সূরাগুলো থেকে আলাদা করে।' },
      { name: 'As-Sajdah', en: 'A shortened form of Ha Mim as-Sajdah; used with care, since surah 32 carries that title outright.', bn: 'হা মীম আস-সাজদার সংক্ষিপ্ত রূপ; সতর্কতার সঙ্গে ব্যবহার্য, কারণ ৩২ নম্বর সূরাই মূলত এই শিরোনাম বহন করে।' },
      { name: 'Al-Masabih', en: 'A less common name reported by Ibn Ashur, from the lamps set in the lowest heaven in 41:12.', bn: 'ইবনে আশূরের বর্ণনায় কম প্রচলিত একটি নাম, ৪১:১২-এ নিকটবর্তী আসমানে স্থাপিত প্রদীপগুলোর সূত্রে।' },
    ],
    refs: ['41:3', '41:37'],
  },
  42: {
    meaning: { en: 'Consultation', bn: 'পরামর্শ' },
    source: {
      en: 'From the praise of believers whose affairs are decided by mutual consultation, shura baynahum, in 42:38.',
      bn: '৪২:৩৮-এ সেই ঈমানদারদের প্রশংসা থেকে, যাদের কাজ পরস্পরের পরামর্শে সম্পন্ন হয় — শূরা বাইনাহুম।',
    },
    why: {
      en: 'The naming word appears once, in a list of qualities of the believers near the middle of the surah, and it is the only place in the Quran where communal consultation is described in exactly this form. That single occurrence was enough to fix the title, which is a good illustration of how surah names work: rarity, not centrality, is what makes a word usable as a label. The surah is also known by its opening letters, since it is the only one that begins with two separate letter groups.',
      bn: 'নামের শব্দটি এসেছে মাত্র একবার, সূরার প্রায় মাঝামাঝি ঈমানদারদের গুণাবলির একটি তালিকায়; আর কুরআনে ঠিক এই আকারে সমষ্টিগত পরামর্শের কথা কেবল এখানেই আছে। ওই একটিমাত্র উল্লেখই শিরোনাম নির্ধারণের জন্য যথেষ্ট হয়েছে, যা সূরার নামকরণের ধরনটিই ভালোভাবে বোঝায়: কোনো শব্দকে নাম হিসেবে ব্যবহারযোগ্য করে তোলে তার বিরলতা, কেন্দ্রীয়তা নয়। সূরাটি তার সূচনার হরফ দিয়েও পরিচিত, কারণ এটিই একমাত্র সূরা যা দুটি আলাদা হরফগুচ্ছ দিয়ে শুরু হয়।',
    },
    signal: {
      en: 'A Ha Mim surah on how revelation reaches a messenger, the unity of the prophetic message, and a community that settles its affairs by counsel rather than command.',
      bn: 'হা মীম পরিবারের একটি সূরা: ওহি কীভাবে রাসূলের কাছে আসে, নবুয়তের বার্তার অভিন্নতা, আর এমন এক সমাজ যা হুকুম নয়, পরামর্শের ভিত্তিতে কাজ সারে।',
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
      bn: '৪৩:৩৩-৩৫-এর সেই অংশ থেকে, যেখানে বলা হয়েছে দুনিয়ার বিলাস — রুপার ছাদ, দরজা ও সোনার অলংকার — আল্লাহর অনুগ্রহের মাপকাঠি নয়।',
    },
    why: {
      en: 'Zukhruf means gilding, the gold trim of a thing rather than its substance, and the word appears once, in a striking aside: if it were not that people would all become deniers, Allah would give the rejecters silver roofs and staircases, because such things weigh nothing with Him. The surah is named from that single word, a marker again rather than a summary. Yet the choice is apt, since the surah keeps returning to people who judge truth by wealth and by the standing of the man who brings it.',
      bn: 'যুখরুফ মানে গিল্টি করা সোনালি সাজ — কোনো জিনিসের মূল সত্তা নয়, তার বাইরের চাকচিক্য। শব্দটি এসেছে একবারই, একটি চমকপ্রদ প্রসঙ্গে: মানুষ সবাই অস্বীকারকারী হয়ে যাওয়ার আশঙ্কা না থাকলে আল্লাহ অস্বীকারকারীদের রুপার ছাদ ও সিঁড়ি দিয়ে দিতেন, কারণ এসবের কোনো ওজন তাঁর কাছে নেই। সেই একটি শব্দ থেকেই সূরার নাম — এখানেও তা সারসংক্ষেপ নয়, চিহ্ন। তবু নির্বাচনটি যথার্থ, কারণ সূরাটি বারবার ফিরে আসে সেই মানুষদের প্রসঙ্গে, যারা সত্যকে বিচার করে সম্পদ আর বাহকের সামাজিক মর্যাদা দিয়ে।',
    },
    signal: {
      en: 'Expect the objection that revelation should have come to a great man of the two cities, answered by the example of Ibrahim, Musa and Isa, and by what wealth is actually worth.',
      bn: 'আশা করুন সেই আপত্তি যে ওহি নাকি দুই শহরের কোনো বড় মানুষের কাছে আসা উচিত ছিল, আর তার জবাব ইবরাহীম, মূসা ও ঈসার দৃষ্টান্ত দিয়ে এবং সম্পদের প্রকৃত মূল্য দেখিয়ে।',
    },
    alt: [],
    refs: ['43:33-35'],
  },
  44: {
    meaning: { en: 'The Smoke', bn: 'ধোঁয়া' },
    source: {
      en: 'From the warning to watch for a day when the sky brings a visible smoke, in 44:10.',
      bn: '৪৪:১০-এর সেই সতর্কবার্তা থেকে, যেখানে বলা হয়েছে সেই দিনের অপেক্ষা করতে যেদিন আকাশ স্পষ্ট ধোঁয়া নিয়ে আসবে।',
    },
    why: {
      en: 'Dukhan occurs once, in a warning of a day when the sky will bring a visible smoke that envelops people. Commentators divided over whether this refers to the famine that struck Mecca during the boycott or to a sign still to come before the Hour, and both readings are transmitted; the surah is named from the word without settling the dispute. That is normal. A name has to identify a surah, not adjudicate its exegesis, and Dukhan does the first job perfectly because the word occurs nowhere else nearby.',
      bn: 'দুখান শব্দটি এসেছে একবার — সেই দিনের সতর্কবার্তায়, যেদিন আকাশ স্পষ্ট ধোঁয়া নিয়ে আসবে আর তা মানুষকে ঢেকে ফেলবে। মুফাসসিরগণ মতভেদ করেছেন, এটি বয়কটের সময় মক্কায় আঘাত হানা দুর্ভিক্ষকে বোঝায়, না কি কিয়ামতের আগে আসন্ন কোনো নিদর্শনকে; দুই ব্যাখ্যাই বর্ণিত। সূরার নাম শব্দটি থেকেই নেওয়া হয়েছে, বিতর্কের ফয়সালা না করেই। এটাই স্বাভাবিক। নামের কাজ সূরাকে শনাক্ত করা, তাফসিরের মীমাংসা করা নয় — আর দুখান প্রথম কাজটি নিখুঁতভাবে করে, কারণ আশপাশে আর কোথাও শব্দটি নেই।',
    },
    signal: {
      en: 'A short Ha Mim surah: the blessed night of revelation, a stern warning to Mecca, the destruction of Pharaoh, and a sharp contrast between two ends.',
      bn: 'ছোট একটি হা মীম সূরা: ওহি নাজিলের বরকতময় রাত, মক্কার প্রতি কঠোর সতর্কবাণী, ফিরআউনের ধ্বংস, আর দুই পরিণতির তীব্র বৈসাদৃশ্য।',
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
      bn: '৪৫:২৮-এর শেষদিকের সেই দৃশ্য থেকে, যেখানে প্রতিটি জাতিকে নতজানু অবস্থায় দেখা যাবে যখন তাদের আমলনামা বের করা হবে।',
    },
    why: {
      en: 'The word occurs once, four verses from the end, in an image of every nation on its knees awaiting judgement. Naming a surah from its final scene is less common than naming it from the opening, and here it works because the picture is unforgettable. Two other names are recorded from other single words in the same surah: Ash-Shari\'ah from the clear way Allah set the Prophet upon, and Ad-Dahr from the deniers who said nothing destroys us but time. Three names, three isolated words.',
      bn: 'শব্দটি এসেছে একবারই, শেষ থেকে চার আয়াত আগে — প্রতিটি জাতি নতজানু হয়ে বিচারের অপেক্ষায়, এমন এক চিত্রে। শেষ দৃশ্য থেকে সূরার নাম নেওয়া সূচনা থেকে নেওয়ার চেয়ে কম প্রচলিত, তবে এখানে তা কার্যকর, কারণ ছবিটি ভোলার নয়। একই সূরার আরও দুটি বিচ্ছিন্ন শব্দ থেকে আরও দুটি নাম বর্ণিত: আশ-শারীআ — আল্লাহ নবীজিকে যে সুস্পষ্ট পথে স্থাপন করেছেন তা থেকে, আর আদ-দাহর — অস্বীকারকারীদের সেই কথা থেকে যে সময় ছাড়া কিছুই আমাদের ধ্বংস করে না। তিনটি নাম, তিনটি আলাদা শব্দ।',
    },
    signal: {
      en: 'Expect signs laid out for people who reason, a rebuke to those who take their own desire as a god, and a courtroom scene where the record speaks.',
      bn: 'আশা করুন বুদ্ধিমানদের জন্য সাজানো নিদর্শন, নিজের খেয়ালকে উপাস্য বানিয়ে নেওয়া মানুষদের প্রতি তিরস্কার, আর এমন এক বিচারদৃশ্য যেখানে আমলনামাই কথা বলে।',
    },
    alt: [
      { name: "Ash-Shari'ah", en: 'From the clear way, shari\'ah, upon which the Prophet is placed in 45:18.', bn: '৪৫:১৮-এ নবীজিকে যে সুস্পষ্ট পথে — শরীআ — স্থাপন করা হয়েছে, সেখান থেকে।' },
      { name: 'Ad-Dahr', en: 'From the saying of the deniers in 45:24 that nothing destroys them but time.', bn: '৪৫:২৪-এ অস্বীকারকারীদের এই কথা থেকে যে সময় ছাড়া কিছুই তাদের ধ্বংস করে না।' },
      { name: 'Ha Mim al-Jathiyah', en: 'The fuller form used to place it among the seven Ha Mim surahs.', bn: 'সাতটি হা মীম সূরার মধ্যে অবস্থান বোঝাতে ব্যবহৃত পূর্ণাঙ্গ রূপ।' },
    ],
    refs: ['45:28', '45:18', '45:24'],
  },
  46: {
    meaning: { en: 'The Sand Dunes', bn: 'বালির টিলা' },
    source: {
      en: 'From the mention of the brother of Ad warning his people at al-Ahqaf, the sand dunes, in 46:21.',
      bn: '৪৬:২১-এ আদ জাতির ভাইয়ের উল্লেখ থেকে, যিনি আল-আহকাফ অর্থাৎ বালির টিলাগুলোতে নিজ জাতিকে সতর্ক করেছিলেন।',
    },
    why: {
      en: 'Ahqaf are long curved dunes of sand, and the word is the name of the region in southern Arabia where the people of Ad lived. It occurs once, in a single verse recalling that Hud warned them there. Naming a whole surah from one geographical term in one verse is the clearest kind of marker naming: the word is rare, easy to remember, and shared with no other surah. The subject of the surah is broader, taking in revelation, parents, and the jinn who listened to the Quran.',
      bn: 'আহকাফ মানে বালির লম্বা বাঁকানো টিলা, আর শব্দটি দক্ষিণ আরবের সেই অঞ্চলের নাম যেখানে আদ জাতি বাস করত। এটি এসেছে একবারই, একটিমাত্র আয়াতে — স্মরণ করিয়ে দিতে যে হুদ সেখানেই তাদের সতর্ক করেছিলেন। এক আয়াতের একটি ভৌগোলিক নাম থেকে গোটা সূরার নামকরণ চিহ্ন-নামকরণের সবচেয়ে স্পষ্ট উদাহরণ: শব্দটি বিরল, সহজে মনে থাকে, আর অন্য কোনো সূরার সঙ্গে ভাগাভাগি হয় না। সূরার বিষয়বস্তু এর চেয়ে বিস্তৃত — ওহি, বাবা-মা এবং কুরআন শোনা জিনদের প্রসঙ্গ এতে এসেছে।',
    },
    signal: {
      en: 'The last of the seven Ha Mim surahs. Expect the ruin of Ad, kindness owed to parents, and the night a group of jinn heard the Quran and believed.',
      bn: 'সাতটি হা মীম সূরার শেষটি। আশা করুন আদ জাতির ধ্বংস, বাবা-মায়ের প্রতি প্রাপ্য সদাচরণ, আর সেই রাত যখন একদল জিন কুরআন শুনে ঈমান আনে।',
    },
    alt: [],
    refs: ['46:21'],
  },
  47: {
    meaning: { en: 'Muhammad', bn: 'মুহাম্মাদ' },
    source: {
      en: 'From the mention of the Prophet by name in 47:2, in the promise that Allah will pardon those who believe in what was sent down to Muhammad.',
      bn: '৪৭:২-এ নবীজিকে নাম ধরে উল্লেখ করার সূত্রে, যেখানে প্রতিশ্রুতি দেওয়া হয়েছে যে মুহাম্মাদের প্রতি যা নাজিল হয়েছে তাতে যারা ঈমান আনে আল্লাহ তাদের ত্রুটি মোচন করবেন।',
    },
    why: {
      en: 'The Prophet is named only four times in the whole Quran, and this is the one surah that carries his name. That rarity is the point: the surah is not about his life, and the title is drawn from a single mention in the second verse, exactly as other surahs take their names from a single unusual word. The surah is also called Al-Qital, a name the Quran itself gestures at when it speaks of a surah in which fighting is mentioned, and Alladhina Kafaru after its opening words.',
      bn: 'গোটা কুরআনে নবীজির নাম এসেছে মাত্র চারবার, আর তাঁর নাম বহনকারী সূরা এই একটিই। এই বিরলতাই মূল কথা: সূরাটি তাঁর জীবনী নিয়ে নয়, আর শিরোনাম নেওয়া হয়েছে দ্বিতীয় আয়াতের একটিমাত্র উল্লেখ থেকে — ঠিক যেভাবে অন্য সূরাগুলো একটি অস্বাভাবিক শব্দ থেকে নাম পায়। সূরাটিকে আল-কিতালও বলা হয়, যে নামের দিকে কুরআন নিজেই ইঙ্গিত করে যখন এমন এক সূরার কথা বলে যাতে যুদ্ধের উল্লেখ আছে; আর সূচনার শব্দ ধরে একে বলা হয় আল্লাযীনা কাফারূ।',
    },
    signal: {
      en: 'A Medinan surah on the hard edge of commitment: fighting and its rules, the exposure of those who hesitate, and the description of the promised Garden.',
      bn: 'অঙ্গীকারের কঠিন দিক নিয়ে একটি মাদানী সূরা: যুদ্ধ ও তার বিধান, দ্বিধাগ্রস্তদের আসল রূপ প্রকাশ, আর প্রতিশ্রুত জান্নাতের বর্ণনা।',
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
      en: 'The name comes from the first word of the first verse, the commonest way surahs are named. What makes it worth pausing over is the timing: the verse was revealed on the way back from Hudaybiyyah, where the Muslims had accepted terms that many of them read as a defeat. Calling that a clear victory reframed the whole episode, and the name preserves that reframing. So here the marker word and the argument of the surah pull in the same direction, which is not always the case.',
      bn: 'নামটি এসেছে প্রথম আয়াতের প্রথম শব্দ থেকে, যা সূরার নামকরণের সবচেয়ে প্রচলিত পদ্ধতি। থমকে দাঁড়ানোর মতো ব্যাপার হলো সময়টি: আয়াতটি নাজিল হয় হুদায়বিয়া থেকে ফেরার পথে, যেখানে মুসলিমরা এমন শর্ত মেনে নিয়েছিলেন যাকে অনেকেই পরাজয় হিসেবে পড়েছিলেন। সেটিকে সুস্পষ্ট বিজয় বলা গোটা ঘটনাকেই নতুন করে দেখতে শেখায়, আর নামটি সেই নতুন দৃষ্টিভঙ্গিকেই ধরে রাখে। ফলে এখানে চিহ্ন-শব্দ আর সূরার মূল বক্তব্য একই দিকে টানছে, যা সবসময় ঘটে না।',
    },
    signal: {
      en: 'Expect a treaty read as triumph: the pledge under the tree, calm sent down into believing hearts, the promise of entering the Sacred Mosque in safety.',
      bn: 'আশা করুন এমন এক সন্ধি যাকে পড়া হয়েছে বিজয় হিসেবে: গাছের নিচে বাইআত, ঈমানদারদের অন্তরে নাজিল হওয়া প্রশান্তি, আর নিরাপদে মসজিদুল হারামে প্রবেশের প্রতিশ্রুতি।',
    },
    alt: [],
    refs: ['48:1'],
  },
  49: {
    meaning: { en: 'The Chambers', bn: 'কক্ষসমূহ' },
    source: {
      en: 'From the rebuke of those who called out to the Prophet from behind the private chambers, al-hujurat, in 49:4.',
      bn: '৪৯:৪-এ তাদের তিরস্কার থেকে, যারা নবীজিকে ব্যক্তিগত কক্ষগুলোর — আল-হুজুরাত — পেছন থেকে ডাকত।',
    },
    why: {
      en: 'Hujurat are the small rooms where the Prophet\'s household lived, and the word occurs once, in a rebuke to visitors who stood outside shouting for him. The surah takes its name from that one architectural detail, though its real subject is manners: how to speak to the Prophet, how to handle a rumour, how not to mock, backbite or spy. The name is a marker taken from the most concrete image in the surah, which is exactly the pattern seen again and again across the Quran.',
      bn: 'হুজুরাত মানে সেই ছোট কক্ষগুলো, যেখানে নবীজির পরিবার থাকতেন; শব্দটি এসেছে একবার, সেই আগন্তুকদের তিরস্কারে যারা বাইরে দাঁড়িয়ে চেঁচিয়ে তাঁকে ডাকত। ওই একটিমাত্র স্থাপত্যিক অনুষঙ্গ থেকেই সূরার নাম, যদিও এর আসল বিষয় আদব: নবীজির সঙ্গে কীভাবে কথা বলতে হয়, গুজব পেলে কী করতে হয়, কীভাবে বিদ্রূপ, গীবত ও গোয়েন্দাগিরি এড়াতে হয়। নামটি সূরার সবচেয়ে বাস্তব চিত্রটি থেকে নেওয়া একটি চিহ্ন, আর কুরআনজুড়ে বারবার এই ধরনটিই দেখা যায়।',
    },
    signal: {
      en: 'A short Medinan surah that reads like a code of conduct: verify news, make peace between believers, drop the nicknames, and remember that honour rests on piety alone.',
      bn: 'ছোট একটি মাদানী সূরা, যা পড়তে গেলে মনে হয় আচরণবিধি: খবর যাচাই করো, ঈমানদারদের মধ্যে মীমাংসা করো, বিদ্রূপের নাম ছাড়ো, আর মনে রেখো মর্যাদা কেবল তাকওয়ার উপরই নির্ভর করে।',
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
      bn: 'ক্বাফ একটি বিচ্ছিন্ন হরফ, আর এর অর্থ নির্ধারিত নয়। এটি পৃথিবীবেষ্টনকারী কোনো পাহাড়ের নাম — এমন বর্ণনাগুলোর কোনো বিশুদ্ধ সনদ নেই, তাই সেগুলো সরিয়ে রাখাই উত্তম। এ ধরনের সব হরফ সম্পর্কে সংখ্যাগরিষ্ঠের অবস্থান হলো, এগুলোকে নাজিলকৃত হিসেবে মেনে নেওয়া এবং অর্থ নির্দিষ্ট করা থেকে বিরত থাকা। নবীজি ঈদের নামাজে ও জুমার খুতবায় এই সূরা পাঠ করতেন, ফলে শুরু থেকেই এটি এই একটি হরফ দিয়েই পরিচিত। আল-বাসিকাত নামেও একটি বিকল্প নাম বর্ণিত আছে।',
    },
    signal: {
      en: 'A powerful short Meccan surah on resurrection: two angels recording every word, the earth giving up what it holds, and a heart that is present and listening.',
      bn: 'পুনরুত্থান নিয়ে শক্তিশালী ছোট একটি মাক্কী সূরা: প্রতিটি কথা লিখে রাখা দুই ফেরেশতা, জমিন যা ধারণ করে আছে তা ফিরিয়ে দেওয়া, আর উপস্থিত ও মনোযোগী একটি হৃদয়।',
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
      bn: '৫১:১-এ আয-যারিয়াত অর্থাৎ বিক্ষেপকারী বাতাসের শপথ দিয়ে সূচনা থেকে।',
    },
    why: {
      en: 'The surah opens with a chain of four oaths by unnamed forces, and the first of them supplies the name. Most commentators, following a report from Ali, read them as the scattering winds, the clouds heavy with rain, the ships running easily, and the angels distributing affairs. The naming word appears in the first line and nowhere else, which is what makes it a serviceable label. It says nothing about the surah\'s argument, which concerns provision, guests of Ibrahim, and destroyed nations.',
      bn: 'সূরাটি শুরু হয়েছে অনামা কিছু শক্তির চারটি শপথের ধারাবাহিকতা দিয়ে, আর তার প্রথমটিই নামটি জুগিয়েছে। আলীর একটি বর্ণনা অনুসরণ করে অধিকাংশ মুফাসসির এগুলোকে বুঝেছেন বিক্ষেপকারী বাতাস, বৃষ্টিভারে ভারী মেঘ, সহজে চলা নৌযান এবং কাজ বণ্টনকারী ফেরেশতা হিসেবে। নামের শব্দটি আছে প্রথম পঙ্‌ক্তিতে, আর কোথাও নেই — এ কারণেই তা কাজের চিহ্ন হিসেবে উপযোগী। সূরার মূল বক্তব্য সম্পর্কে এটি কিছুই বলে না, যা রিজিক, ইবরাহীমের মেহমান আর ধ্বংসপ্রাপ্ত জাতিগুলো নিয়ে।',
    },
    signal: {
      en: 'Expect short, driving oaths, then the guests who brought Ibrahim news of a son, the fate of Ad, Thamud and Nuh, and the reminder that we were created only to worship.',
      bn: 'আশা করুন ছোট ও গতিময় শপথ, এরপর ইবরাহীমের কাছে সন্তানের সুসংবাদ নিয়ে আসা মেহমানরা, আদ, সামুদ ও নূহের জাতির পরিণতি, আর এই স্মরণ যে আমাদের সৃষ্টি করা হয়েছে কেবল ইবাদতের জন্য।',
    },
    alt: [],
    refs: ['51:1'],
  },
  52: {
    meaning: { en: 'The Mount', bn: 'তূর পর্বত' },
    source: {
      en: 'From the opening oath by at-Tur, the mountain where Musa was addressed, in 52:1.',
      bn: '৫২:১-এ আত-তূর অর্থাৎ যে পর্বতে মূসার সঙ্গে কথা বলা হয়েছিল, তার শপথ দিয়ে সূচনা থেকে।',
    },
    why: {
      en: 'At-Tur is the mountain of Sinai, and the surah swears by it in its first word. The mountain itself plays no part in what follows, which is a description of the Day of Judgement and a series of questions put to the deniers of Mecca. The name is therefore a pure marker, taken from the opening because that is the part a reciter meets first. This is worth noticing precisely because the reader expects a surah called The Mount to be about Musa, and it is not.',
      bn: 'আত-তূর মানে সিনাই পর্বত, আর সূরাটি তার প্রথম শব্দেই সেই পর্বতের শপথ করেছে। এরপর যা আসে তাতে পর্বতটির কোনো ভূমিকা নেই — সেখানে আছে কিয়ামতের দিনের বর্ণনা এবং মক্কার অস্বীকারকারীদের প্রতি ছুড়ে দেওয়া প্রশ্নের এক ধারাবাহিকতা। ফলে নামটি নিছকই একটি চিহ্ন, সূচনা থেকে নেওয়া, কারণ তিলাওয়াতকারী সবার আগে ওই অংশেই পৌঁছান। বিষয়টি লক্ষ করার মতো, কারণ তূর নামের সূরা দেখে পাঠক ভাবতে পারেন এটি মূসাকে নিয়ে — অথচ তা নয়।',
    },
    signal: {
      en: 'Expect a cascade of rhetorical questions aimed at the deniers, scenes of the Garden where families are reunited, and an instruction to be patient with the judgement of the Lord.',
      bn: 'আশা করুন অস্বীকারকারীদের দিকে ছুড়ে দেওয়া প্রশ্নের ঝড়, জান্নাতের সেই দৃশ্য যেখানে পরিবারগুলো আবার মিলিত হয়, আর প্রভুর ফয়সালার ব্যাপারে ধৈর্য ধরার নির্দেশ।',
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
      bn: 'নামটি প্রথম আয়াতের প্রথম শব্দ। এখানে নাজম বলতে কী বোঝানো হয়েছে তা নিয়ে মুফাসসিরদের মতভেদ আছে — কোনো নির্দিষ্ট নক্ষত্র, না সাধারণভাবে নক্ষত্ররাজি, না কি ধাপে ধাপে নাজিল হওয়া কুরআন; এই মতভেদ বর্ণিত হয়েছে, মীমাংসিত হয়নি। ওই শব্দ থেকে নাম নেওয়ায় সূরাটি স্মৃতিতে গেঁথে যায়, অথচ প্রশ্নটির ফয়সালা করতে হয় না। এরপর সূরায় আসে সিদরাতুল মুনতাহার কাছে নবীজির দর্শনের বর্ণনা; ফলে নাম দেখে যিনি জ্যোতির্বিদ্যা-বিষয়ক আলোচনা আশা করবেন, তিনি অবাক হবেন।',
    },
    signal: {
      en: 'Expect the account of what the Prophet saw at the lote tree, a demolition of the three idols of Mecca, and the principle that no soul bears the burden of another.',
      bn: 'আশা করুন সিদরাতুল মুনতাহার কাছে নবীজি যা দেখেছিলেন তার বিবরণ, মক্কার তিন দেবীর দাবির খণ্ডন, আর এই নীতি যে কেউ অন্যের বোঝা বহন করবে না।',
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
      bn: 'ক্বামার শব্দটি আছে প্রথম আয়াতে, সূরার আর কোথাও নেই; এরপর আলোচনা মোড় নেয় নূহ, আদ, সামুদ, লূত ও ফিরআউনের দিকে, প্রতিটির পরেই ফিরে আসে সেই ধুয়া — কে উপদেশ গ্রহণ করবে। নামটি ওই যুক্তিধারা থেকে নয়, সূচনার নিদর্শন থেকেই নেওয়া। নবীজি ঈদের নামাজে এই সূরা পাঠ করতেন, আর সেখানে এটি পরিচিত ছিল তার প্রথম শব্দ ইক্বতারাবাত দিয়ে; হাদিসের গ্রন্থে সেই পুরোনো নামটি চেনা নামটির পাশাপাশিই সংরক্ষিত আছে।',
    },
    signal: {
      en: 'Expect short, hammering verses and a refrain that returns after every story: nation after nation warned and then destroyed, followed each time by the question of whether anyone is left who will take heed.',
      bn: 'আশা করুন ছোট ও আঘাত হানা আয়াত আর প্রতিটি ঘটনার পরেই ফিরে আসা এক ধুয়া: একের পর এক জাতিকে সতর্ক করা হয়েছে, তারপর ধ্বংস করা হয়েছে, আর প্রতিবারই থেকে যায় সেই প্রশ্ন — উপদেশ নেওয়ার মতো কেউ কি আছে।',
    },
    alt: [
      { name: 'Iqtarabat', en: 'The surah\'s first word; the hadiths on the Eid prayer name it this way, pairing it with Qaf.', bn: 'সূরার প্রথম শব্দ; ঈদের নামাজ সংক্রান্ত হাদিসে এই নামেই উল্লেখ করা হয়েছে, ক্বাফ সূরার সঙ্গে জুড়ে।' },
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
      bn: 'এখানে চিহ্ন আর বিষয় এক জায়গায় মিলে গেছে, যা অস্বাভাবিক। নাম নেওয়া হয়েছে সূচনার শব্দ থেকে, স্বাভাবিক পদ্ধতিতেই; কিন্তু সেই শব্দই সূরার বিষয়বস্তু — রহমত, যা আকাশ, জমিন, সমুদ্র ও পরকালজুড়ে একটির পর একটি নিয়ামত হিসেবে গুনে দেখানো হয়েছে, সঙ্গে বারবার ফিরে আসা সেই প্রশ্ন: তোমরা উভয়ে তোমাদের প্রভুর কোন কোন নিয়ামত অস্বীকার করবে। ফলে শিরোনাম দেখে যিনি বিষয় অনুমান করবেন তিনি ঠিকই ধরবেন, আল-বাকারা বা আন-নামলের মতো নয়। কুরআনের কনে বলে যে বর্ণনা আছে, তা দ্বিতীয় নাম নয়, প্রশংসা।',
    },
    signal: {
      en: 'Expect a rhythm unlike anything else in the Quran: a single question put to men and jinn and repeated thirty-one times, dividing a long inventory of mercy into short paired pieces that each call for an answer.',
      bn: 'আশা করুন কুরআনের আর কোথাও না পাওয়া এক ছন্দ: মানুষ ও জিন উভয়কে করা একটিমাত্র প্রশ্ন একত্রিশবার ফিরে এসে রহমতের দীর্ঘ তালিকাকে ছোট ছোট জোড়ায় ভাগ করে দিচ্ছে, যার প্রতিটিই উত্তর দাবি করে।',
    },
    alt: [
      { name: "'Arus al-Quran", en: 'Reported by as-Suyuti from al-Bayhaqi as "the bride of the Quran"; Ibn Ashur notes this is praise for the surah, not a name for it.', bn: 'সুয়ূতী বাইহাকীর সূত্রে "কুরআনের কনে" হিসেবে বর্ণনা করেছেন; ইবনে আশূর উল্লেখ করেছেন, এটি সূরার প্রশংসা, নাম নয়।' },
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
      en: 'Al-Waqi\'ah literally means the thing that falls, the event that happens without fail, and it is one of the Quran\'s several names for the Day of Judgement. The word is taken from the first verse in the usual way, but it also states the subject, because the entire surah describes that day and sorts humanity into three groups. So this is one of the surahs where the marker word and the theme happen to agree, though the choice was still driven by the opening.',
      bn: 'আল-ওয়াকিআ শব্দের আক্ষরিক অর্থ যা পতিত হয়, যে ঘটনা ঘটবেই — এটি কিয়ামতের দিনের জন্য কুরআনে ব্যবহৃত কয়েকটি নামের একটি। শব্দটি স্বাভাবিক নিয়মেই প্রথম আয়াত থেকে নেওয়া, তবে এটি বিষয়বস্তুও জানিয়ে দেয়, কারণ গোটা সূরাই সেই দিনের বর্ণনা এবং মানুষকে তিন দলে ভাগ করে দেখানো। ফলে এটি সেই সূরাগুলোর একটি, যেখানে চিহ্ন-শব্দ আর মূল বিষয় মিলে যায় — যদিও নির্বাচনের কারণ এখানেও সূচনাই।',
    },
    signal: {
      en: 'Expect humanity sorted into three ranks, the foremost, the people of the right and the people of the left, then a challenge based on the seed, the water and the fire.',
      bn: 'আশা করুন মানুষকে তিন শ্রেণিতে ভাগ করা — অগ্রগামীরা, ডান দিকের দল ও বাঁ দিকের দল, এরপর বীজ, পানি ও আগুন দিয়ে সাজানো এক চ্যালেঞ্জ।',
    },
    alt: [],
    refs: ['56:1'],
  },
  57: {
    meaning: { en: 'Iron', bn: 'লোহা' },
    source: {
      en: 'From the statement that Allah sent down iron, in which there is great strength and benefits for people, in 57:25.',
      bn: '৫৭:২৫-এর সেই বক্তব্য থেকে যে আল্লাহ লোহা নাজিল করেছেন, যাতে রয়েছে প্রচণ্ড শক্তি ও মানুষের জন্য উপকার।',
    },
    why: {
      en: 'Iron is mentioned once, late in the surah, in a verse about messengers sent with the Book and the balance so that people may uphold justice, and iron sent down with them. The surah is otherwise about spending in the way of Allah, light on the Day of Judgement, and the danger of hearts growing hard. Naming it from a single metal in a single verse is classic marker naming, and the word is memorable precisely because it is so concrete among abstractions.',
      bn: 'লোহার উল্লেখ এসেছে একবার, সূরার শেষদিকে — এমন এক আয়াতে যেখানে বলা হয়েছে, রাসূলদের পাঠানো হয়েছে কিতাব ও ন্যায্য মানদণ্ড দিয়ে যাতে মানুষ ইনসাফ প্রতিষ্ঠা করে, আর তাঁদের সঙ্গে নাজিল করা হয়েছে লোহাও। এছাড়া সূরার আলোচনা আল্লাহর পথে ব্যয়, কিয়ামতের দিনের আলো এবং অন্তর কঠিন হয়ে যাওয়ার বিপদ নিয়ে। একটিমাত্র আয়াতের একটিমাত্র ধাতু থেকে নামকরণ চিহ্ন-নামকরণের চিরচেনা উদাহরণ; আর বিমূর্ত আলোচনার ভিড়ে এত বাস্তব একটি শব্দ বলেই তা সহজে মনে থাকে।',
    },
    signal: {
      en: 'A Medinan surah urging generosity before it is too late: light running ahead of the believers, a wall raised between them and the hypocrites, and a warning against hardened hearts.',
      bn: 'একটি মাদানী সূরা, যা দেরি হয়ে যাওয়ার আগেই দানশীলতার তাগিদ দেয়: ঈমানদারদের সামনে ছুটে চলা আলো, তাদের ও মুনাফিকদের মাঝে তোলা প্রাচীর, আর কঠিন হয়ে যাওয়া অন্তরের ব্যাপারে সতর্কবার্তা।',
    },
    alt: [],
    refs: ['57:25'],
  },
  58: {
    meaning: { en: 'The Woman Who Pleads', bn: 'যে নারী আবেদন করেছিল' },
    source: {
      en: 'From the woman who argued her case with the Prophet about her husband and whose complaint Allah heard, in 58:1.',
      bn: '৫৮:১-এ সেই নারীর প্রসঙ্গ থেকে, যিনি স্বামীর ব্যাপারে নবীজির সঙ্গে কথা বলেছিলেন এবং যাঁর অভিযোগ আল্লাহ শুনেছিলেন।',
    },
    why: {
      en: 'The name is read two ways: al-Mujadilah with a kasra, the woman who pleads, and al-Mujadalah with a fatha, the pleading itself. Ibn Ashur preferred the first, since the surah opens with the woman. She is not named in the verse, yet the whole surah is titled after her act of appealing, which is remarkable in itself. In Ubayy ibn Ka\'b\'s codex the surah was headed Az-Zihar instead, after the ruling that her case produced.',
      bn: 'নামটি দুইভাবে পড়া হয়: কাসরাসহ আল-মুজাদিলা অর্থাৎ যে নারী আবেদন করেন, আর ফাতহাসহ আল-মুজাদালা অর্থাৎ আবেদন করাটাই। ইবনে আশূর প্রথমটিকেই অগ্রাধিকার দিয়েছেন, কারণ সূরার সূচনা ওই নারীকে দিয়েই। আয়াতে তাঁর নাম আসেনি, তবু গোটা সূরার শিরোনাম হয়েছে তাঁর আবেদনের ঘটনাকে ঘিরে — যা নিজেই উল্লেখযোগ্য। উবাই ইবনে কাব-এর মুসহাফে সূরাটির শিরোনাম ছিল আয-যিহার, অর্থাৎ তাঁর ঘটনা থেকে যে বিধান এসেছিল তার নামে।',
    },
    signal: {
      en: 'A Medinan surah that begins with one woman\'s complaint answered from above, then sets out the ruling on zihar, the manners of private talk, and the party of Allah.',
      bn: 'একটি মাদানী সূরা, যা শুরু হয় উপর থেকে জবাব পাওয়া এক নারীর অভিযোগ দিয়ে, এরপর বর্ণনা করে যিহারের বিধান, গোপন আলাপের আদব এবং আল্লাহর দলের পরিচয়।',
    },
    alt: [
      { name: 'Al-Mujadalah', en: 'The same title read with a fatha, meaning the pleading rather than the woman who pleads.', bn: 'একই শিরোনাম ফাতহাসহ পড়া, অর্থ আবেদনকারিণী নয়, বরং আবেদন করা।' },
      { name: 'Az-Zihar', en: 'The heading in the codex of Ubayy ibn Ka\'b, after the ruling on zihar set out in 58:2-4.', bn: 'উবাই ইবনে কাব-এর মুসহাফে ব্যবহৃত শিরোনাম, ৫৮:২-৪-এ বর্ণিত যিহারের বিধানের সূত্রে।' },
      { name: "Qad Sami'a", en: 'From its opening words; Ibn Ashur notes this name was widely used in the schools of Tunis.', bn: 'সূরার সূচনা শব্দ থেকে; ইবনে আশূর উল্লেখ করেছেন, তিউনিসের মক্তবগুলোতে এই নাম ব্যাপকভাবে প্রচলিত ছিল।' },
    ],
    refs: ['58:1', '58:2-4'],
  },
  59: {
    meaning: { en: 'The Gathering (Exile)', bn: 'সমাবেশ (নির্বাসন)' },
    source: {
      en: 'From the phrase li-awwali al-hashr, "at the first gathering", in 59:2, describing the driving out of Banu an-Nadir from Madinah.',
      bn: 'মদীনা থেকে বনু নাযীর গোত্রকে বহিষ্কারের বর্ণনায় ৫৯:২ আয়াতের "লি-আউয়ালিল হাশর" — "প্রথম সমাবেশের সময়" — কথাটি থেকে নাম।',
    },
    why: {
      en: 'Al-Hashr means a gathering, and in 59:2 it names a driving-out: the assembling of the Jewish tribe Banu an-Nadir for expulsion from their strongholds beside Madinah after they broke their treaty. The word occurs there and nowhere else in the surah. Everything that follows is other business — the rule of the fay spoils, the praise of the Ansar who shared their homes, the hypocrites who promised the tribe help and delivered none, and the closing passage on the names of Allah. So the title is a marker taken from the episode that opens the surah, not a heading over its contents.',
      bn: 'আল-হাশর অর্থ সমবেত করা, আর ৫৯:২ আয়াতে শব্দটি এক বহিষ্কারের নাম হয়ে দাঁড়িয়েছে — চুক্তিভঙ্গের পর মদীনার পাশে দুর্গে বসবাসকারী ইহুদি গোত্র বনু নাযীরকে একত্র করে বের করে দেওয়া। শব্দটি সূরার আর কোথাও নেই। এরপরের সবটুকুই ভিন্ন প্রসঙ্গ — ফাই সম্পদের বিধান, নিজেদের ঘর ভাগ করে দেওয়া আনসারদের প্রশংসা, গোত্রটিকে সাহায্যের প্রতিশ্রুতি দিয়ে কথা না রাখা মুনাফিকরা, আর শেষে আল্লাহর নামসমূহের সেই বিখ্যাত অংশ। অর্থাৎ নামটি সূচনার ঘটনা থেকে নেওয়া একটি চিহ্ন, বিষয়বস্তুর শিরোনাম নয়।',
    },
    signal: {
      en: 'Expect a Madinan surah built on a real confrontation — a broken pact, an exile, the sharing out of what was left behind — which then turns, without warning, into one of the great passages on the divine names.',
      bn: 'আশা করুন একটি মাদানী সূরা, যা গড়ে উঠেছে বাস্তব সংঘাতের উপর — ভাঙা চুক্তি, নির্বাসন, ফেলে যাওয়া সম্পদের বণ্টন — এবং যা শেষে বিনা ঘোষণায় মোড় নেয় আল্লাহর নামসমূহের এক মহান বর্ণনায়।',
    },
    alt: [
      { name: 'Surat Bani an-Nadir', en: 'Ibn Abbas is reported in Sahih al-Bukhari as correcting a man who said "Surat al-Hashr" with the words "say: Surat an-Nadir", naming it after the tribe the opening verses describe.', bn: 'সহীহ বুখারীতে বর্ণিত আছে, কেউ "সূরা আল-হাশর" বললে ইবনে আব্বাস (রাঃ) সংশোধন করে বলতেন, "বলো সূরা আন-নাযীর" — সূচনার আয়াতগুলোতে বর্ণিত গোত্রের নামে।' },
    ],
    refs: ['59:2'],
  },
  60: {
    meaning: { en: 'She Who Is Examined', bn: 'পরীক্ষিতা নারী' },
    source: {
      en: 'From the command in 60:10 to examine the believing women who arrive as emigrants; the woman so examined gives the surah its name.',
      bn: 'হিজরত করে আসা ঈমানদার নারীদের পরীক্ষা করার নির্দেশ ৬০:১০ আয়াত থেকে; সেই পরীক্ষিতা নারীর নামেই সূরার নাম।',
    },
    why: {
      en: 'The name is a passive participle — al-mumtahanah, the woman who is put to the test — and it points to a single instruction in verse ten: when believing women come over as emigrants, examine them, and do not send them back. The surah at large is about loyalty. It opens by rebuking Hatib ibn Abi Baltaah for writing secretly to Quraysh, holds up Ibrahim disowning his people as the pattern, and then permits kindness to those who never fought you. The title takes none of that. It takes the one figure who enters the surah as a person rather than a principle.',
      bn: 'নামটি একটি কর্মবাচ্য বিশেষণ — আল-মুমতাহিনা, যে নারীকে পরীক্ষা করা হয় — আর তা দশম আয়াতের একটিমাত্র নির্দেশের দিকে ইঙ্গিত করে: ঈমানদার নারীরা হিজরত করে এলে তাদের পরীক্ষা করো, ফিরিয়ে দিয়ো না। সূরার মূল বিষয় আনুগত্য ও বন্ধুত্বের সীমা। এর শুরু হাতিব ইবনে আবি বালতাআ (রাঃ)-এর গোপনে কুরাইশকে চিঠি লেখার তিরস্কার দিয়ে, এরপর আদর্শ হিসেবে ইবরাহীম (আঃ)-এর স্বজাতি-বর্জন, আর শেষে যারা যুদ্ধ করেনি তাদের প্রতি সদাচরণের অনুমতি। নাম এর কিছুই নেয়নি; নিয়েছে সেই একজনকে, যিনি নীতি নয় — মানুষ হয়ে সূরায় প্রবেশ করেন।',
    },
    signal: {
      en: 'Expect short, practical Madinan legislation about where allegiance ends and where courtesy still holds, framed by a case of leaked intelligence at one end and the pledge of the women at the other.',
      bn: 'আশা করুন সংক্ষিপ্ত ও ব্যবহারিক মাদানী বিধান — আনুগত্য কোথায় শেষ আর সৌজন্য কোথায় বহাল, তার সীমারেখা; একদিকে গোপন তথ্য ফাঁসের ঘটনা, অন্যদিকে নারীদের বাইআত।',
    },
    alt: [
      { name: 'Al-Imtihan', en: 'The verbal noun of the same root: the surah of the examination, from the same command in 60:10.', bn: 'একই ধাতুর ক্রিয়াবাচক নাম — পরীক্ষার সূরা, ৬০:১০ আয়াতের সেই নির্দেশ থেকেই।' },
      { name: 'Al-Mawaddah', en: 'Reported, from the first verse, which forbids casting affection towards those at war with the believers.', bn: 'বর্ণিত নাম, প্রথম আয়াত থেকে — যেখানে যুদ্ধরত শত্রুদের প্রতি বন্ধুত্ব বা ভালোবাসা প্রকাশ নিষিদ্ধ করা হয়েছে।' },
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
      bn: 'সাফ মানে কাঁধে কাঁধ মিলিয়ে দাঁড়ানো সারি — নামাজের কাতার আর যুদ্ধের সারি, দুটোর জন্যই এই শব্দ। সূরায় এটি এসেছে একবারই, চতুর্থ আয়াতে, তাও নির্দেশ হিসেবে নয়, একটি উপমার ভেতরে। সূরার আসল আলোচ্য হলো মানুষের কথা ও কাজের ব্যবধান, এরপর শাস্তি থেকে বাঁচায় এমন এক লাভজনক বাণিজ্যের প্রস্তাব, আর শেষে ঈসা (আঃ)-এর ডাকে হাওয়ারীদের সাড়া। নাম ধরেছে যুক্তিটিকে নয়, ছবিটিকে — একটি শব্দ, যার ভেতরে শৃঙ্খলা, ঐক্য আর সারিতে ফাঁক না রাখার দৃঢ়তা।',
    },
    signal: {
      en: 'Expect a short Madinan surah that presses one question: does your conduct match your claim? It moves from rebuke to recruitment, and ends by asking the reader to be a helper of Allah as the disciples were.',
      bn: 'আশা করুন একটি সংক্ষিপ্ত মাদানী সূরা, যা একটি প্রশ্নেই জোর দেয় — আপনার কাজ কি আপনার দাবির সঙ্গে মেলে? তিরস্কার থেকে আহ্বানে এগিয়ে শেষে হাওয়ারীদের মতো আল্লাহর সাহায্যকারী হতে বলে।',
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
      bn: '৬২:৯ আয়াতের বিধান থেকে — জুমুআর দিনে নামাজের আহ্বান এলে বেচাকেনা ছেড়ে আল্লাহর স্মরণের দিকে ছুটে যাও।',
    },
    why: {
      en: 'Here the name is the ruling. Most surah titles are labels picked from a striking word; this one is the piece of law the surah is remembered for. Jumuah means the day of gathering, and the ninth verse fixes it as a legal term: at the call, leave the sale and come. The rest of the surah is a build-up to that — creation glorifying its Maker, the unlettered Prophet raised among his own, a warning to a community that carried a book it did not live by, and finally the congregation that drifted off towards a caravan, which is exactly why the ruling was needed.',
      bn: 'এখানে নামটিই বিধান। বেশিরভাগ সূরার নাম কোনো চোখে-পড়া শব্দ থেকে নেওয়া নিছক চিহ্ন; কিন্তু এটি সেই আইন, যার জন্যই সূরাটি স্মরণীয়। জুমুআ মানে সমবেত হওয়ার দিন, আর নবম আয়াত একে পরিভাষা করে তোলে — আজান হলে বেচাকেনা ছাড়ো, চলে এসো। সূরার বাকি অংশ সেই দিকেই এগোয় — সৃষ্টিজগতের তাসবীহ, নিরক্ষর জাতির মধ্যে প্রেরিত নবী, যে সম্প্রদায় কিতাব বহন করেছে কিন্তু মানেনি তার প্রতি সতর্কবাণী, আর সবশেষে বাণিজ্যকাফেলার দিকে সরে যাওয়া জামাত — যে কারণেই বিধানটি প্রয়োজন হয়েছিল।',
    },
    signal: {
      en: 'Expect eleven verses that move from praise to law: the Friday gathering is not a custom here but a command, with a named beginning, a named duty and a named end.',
      bn: 'আশা করুন এগারোটি আয়াত, যা প্রশংসা থেকে বিধানে গড়ায় — জুমুআর সমাবেশ এখানে প্রথা নয়, স্পষ্ট শুরু, স্পষ্ট কর্তব্য ও স্পষ্ট সমাপ্তিসহ একটি নির্দেশ।',
    },
    alt: [],
    refs: ['62:9', '62:11'],
  },
  63: {
    meaning: { en: 'The Hypocrites', bn: 'মুনাফিকরা' },
    source: {
      en: 'From 63:1, where the hypocrites come professing belief, revealed after what was said on the return from the Banu al-Mustaliq expedition.',
      bn: '৬৩:১ আয়াত থেকে, যেখানে মুনাফিকরা এসে ঈমানের ঘোষণা দেয়; বনু মুস্তালিক অভিযান থেকে ফেরার পথে বলা কথার প্রেক্ষিতে নাজিল।',
    },
    why: {
      en: 'The name is the subject, but it is also an episode. On the way back from the Banu al-Mustaliq expedition Abdullah ibn Ubayy said that once they reached Madinah the mightier would drive out the meaner. Zayd ibn Arqam, then a boy, reported it and was disbelieved; the surah came down quoting the sentence back in 63:8 and vindicating him. So the title names both a category and a moment. It is unusually blunt: the Quran rarely titles a surah with the thing it is exposing, and here the exposure is the whole point.',
      bn: 'নামটি সূরার বিষয়, আবার একটি ঘটনাও। বনু মুস্তালিক অভিযান থেকে ফেরার পথে আবদুল্লাহ ইবনে উবাই বলেছিল, মদীনায় পৌঁছে শক্তিশালীরা দুর্বলদের বের করে দেবে। বালক যায়েদ ইবনে আরকাম (রাঃ) কথাটি জানালে তাঁকে অবিশ্বাস করা হয়; তখন সূরাটি নাজিল হয়, ৬৩:৮ আয়াতে সেই বাক্যই উদ্ধৃত করে তাঁর সত্যতা প্রমাণ করে। তাই নামটি একই সঙ্গে একটি শ্রেণি ও একটি মুহূর্তের নাম। এটি অস্বাভাবিক রকম সরাসরি: কুরআন সচরাচর যাকে উন্মোচন করে তার নামে সূরার নাম রাখে না, কিন্তু এখানে উন্মোচনই মূল উদ্দেশ্য।',
    },
    signal: {
      en: 'Expect a portrait drawn from life rather than a doctrine: men whose bearing impresses and whose words are borrowed, followed by a warning to the believers not to let wealth and children distract them.',
      bn: 'আশা করুন মতবাদ নয়, জীবন থেকে আঁকা একটি প্রতিকৃতি — যাদের চেহারা মুগ্ধ করে আর কথা ধার করা; শেষে ঈমানদারদের সতর্কবাণী, ধন ও সন্তান যেন আল্লাহর স্মরণ থেকে অমনোযোগী না করে।',
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
      bn: 'তাগাবুন শব্দটি "গাবন" থেকে — লেনদেনে যে ক্ষতি মানুষ তখন টেরই পায় না। কুরআন এই ব্যবসায়িক শব্দকেই হাশরের দিনের নাম বানিয়েছে: যেদিন ঠকাটা চোখে ধরা পড়ে, যেদিন প্রতারিত বুঝে ফেলে সে কী বিক্রি করেছিল আর বিচক্ষণ বুঝে ফেলে সে কী কিনেছিল। শব্দটি এসেছে একবার, নবম আয়াতে, আর সূরাটি শেষ পর্যন্ত সেই বাণিজ্যিক সুর ধরে রাখে — খরচ করো, আল্লাহকে উত্তম ঋণ দাও, আর জেনে রাখো ধন ও সন্তানই তোমার সবচেয়ে বড় দাম হয়ে দাঁড়াতে পারে। পুনরুত্থানের সূরার নাম এক ঠকা সওদাগরের শব্দে রাখা ইচ্ছাকৃত সংযম।',
    },
    signal: {
      en: 'Expect the standard Madinan themes of faith, obedience and spending, held together by an accounting metaphor: everything here is weighed as profit or loss on a day when the books are finally opened.',
      bn: 'আশা করুন ঈমান, আনুগত্য ও ব্যয়ের চেনা মাদানী বিষয়, যা একটি হিসাবের রূপকে বাঁধা — এখানে সবকিছুই লাভ বা ক্ষতি হিসেবে ওজন করা হয় সেই দিনের জন্য, যেদিন খাতা খোলা হবে।',
    },
    alt: [],
    refs: ['64:9', '64:17'],
  },
  65: {
    meaning: { en: 'Divorce', bn: 'তালাক' },
    source: {
      en: 'From the opening address in 65:1, which sets out when divorce may be pronounced and how the waiting period is to be counted.',
      bn: '৬৫:১ আয়াতের সূচনা-সম্বোধন থেকে, যেখানে কখন তালাক দেওয়া যাবে ও ইদ্দত কীভাবে গণনা হবে তা নির্ধারিত।',
    },
    why: {
      en: 'The name is the ruling, not a stray word. From its first verse the surah legislates: divorce at the beginning of the waiting period, count the term exactly, do not turn the woman out of her home and do not let her leave. The precision is striking even for Madinan law — house, term, maintenance, nursing, witnesses, and the pregnant woman whose term ends at delivery. Threaded between the clauses are some of the most quoted lines in the Quran about a way out and provision from where one does not expect. The title warns you that this is a chapter of procedure, and that the procedure is worship.',
      bn: 'এখানে নাম কোনো বিক্ষিপ্ত শব্দ নয়, স্বয়ং বিধান। প্রথম আয়াত থেকেই সূরাটি আইন দেয়: ইদ্দতের শুরুতে তালাক দাও, হিসাব ঠিক রাখো, নারীকে তার ঘর থেকে বের করে দিয়ো না, সে নিজেও যেন না বেরোয়। মাদানী বিধানের মধ্যেও এই নিখুঁততা লক্ষণীয় — বাসস্থান, মেয়াদ, ভরণপোষণ, দুধপান, সাক্ষী, আর গর্ভবতী নারী, যার ইদ্দত সন্তান প্রসবেই শেষ। এই ধারাগুলোর ফাঁকে ফাঁকে আছে কুরআনের সবচেয়ে বেশি উদ্ধৃত কয়েকটি বাক্য — উত্তরণের পথ আর অভাবনীয় উৎস থেকে রিজিকের প্রতিশ্রুতি। নাম আগেই জানিয়ে দেয়, এটি পদ্ধতির অধ্যায় — এবং পদ্ধতিটিই ইবাদত।',
    },
    signal: {
      en: 'Expect law delivered at close range, on the hardest days of a household, with the reminder that the one who fears Allah is given a way out placed in the middle of the clauses rather than at the end.',
      bn: 'আশা করুন খুব কাছ থেকে দেওয়া বিধান, সংসারের সবচেয়ে কঠিন দিনগুলোর জন্য; আর মনে রাখার কথাটি — যে আল্লাহকে ভয় করে তার জন্য পথ বেরোয় — রাখা হয়েছে ধারাগুলোর শেষে নয়, ঠিক মাঝখানে।',
    },
    alt: [
      { name: 'Surat an-Nisa as-Sughra', en: 'Ibn Masud is reported to have called it the shorter Surat an-Nisa, because it revisits the family rulings of the fourth surah at a fraction of its length.', bn: 'ইবনে মাসঊদ (রাঃ) একে "ছোট সূরা নিসা" বলতেন বলে বর্ণিত, কারণ চতুর্থ সূরার পারিবারিক বিধানগুলোই এখানে অনেক সংক্ষেপে ফিরে এসেছে।' },
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
      bn: 'নামটি প্রথম আয়াতের ক্রিয়াপদের ক্রিয়াবাচক রূপ — তাহরীম, অর্থাৎ কোনো কিছুকে নিষিদ্ধ ঘোষণা করা। নবী ﷺ স্ত্রীদের সন্তুষ্টির জন্য শপথ করে একটি হালাল বিষয় নিজের উপর বন্ধ করেছিলেন; সূরাটি শুরুই হয় তাঁকে সেই শপথ থেকে মুক্ত করে ও কসমের কাফফারা নির্ধারণ করে। ঠিক কোন জিনিসটি তিনি বর্জন করেছিলেন, তা বিভিন্ন বর্ণনায় ভিন্নভাবে এসেছে এবং সূরা নিজে তা উল্লেখ করেনি — তাই সৎ উত্তর হলো, বিষয়টি নিশ্চিতভাবে নির্ধারিত নয়। সূরা যা নির্ধারণ করে তা হলো নীতি: আল্লাহ যা হালাল করেছেন, তা নিষিদ্ধ করার অধিকার কোনো মানুষের নেই — তাঁরও নয়।',
    },
    signal: {
      en: 'Expect a short Madinan surah that treats a household matter as law: an oath dissolved, a confidence disclosed, a call to turn back addressed first to the Prophet\'s wives and then to all believers, closing with four women set as warnings and as examples.',
      bn: 'আশা করুন একটি সংক্ষিপ্ত মাদানী সূরা, যেখানে ঘরোয়া বিষয়কে বিধানের মর্যাদায় দেখা হয় — শপথের অবসান, গোপন কথা প্রকাশ, প্রথমে নবী-পত্নীদের ও পরে সব ঈমানদারকে তওবার আহ্বান, আর শেষে চারজন নারী — দুজন সতর্কতা, দুজন আদর্শ।',
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
      bn: 'মুলক মানে মালিকানা ও পরিচালনার ক্ষমতা একসঙ্গে — অধিকার ও শাসন এক শব্দে। সূরাটি প্রথম বাক্যেই সেই সবটুকু একটিমাত্র হাতে সমর্পণ করে। কুরআনের এই অংশের বেশিরভাগ নামের বিপরীতে এই নামটি সত্যিই বিষয়বস্তুর সারসংক্ষেপ। এরপর আসে সেই কর্তৃত্বেরই বিবরণ — নিখুঁত সাত আকাশ, পায়ের নিচে বশীভূত পৃথিবী, শূন্যে ধরে রাখা পাখি, আর যে পানি আগামীকাল শুকিয়ে যেতে পারে। দুবার পাঠককে বলা হয় দৃষ্টি ফিরিয়ে কোনো ফাটল খুঁজে দেখতে। পূর্ববর্তীরা একে সাধারণত ডাকতেন "তাবারাক" — প্রথম শব্দটি দিয়েই।',
    },
    signal: {
      en: 'Expect thirty Meccan verses that argue from the order of the world to the authority behind it, and then from that authority to the seriousness of the fire and of the day one is asked what one did.',
      bn: 'আশা করুন ত্রিশটি মাক্কী আয়াত, যা জগতের শৃঙ্খলা থেকে তার পেছনের কর্তৃত্বে, আর সেই কর্তৃত্ব থেকে জাহান্নামের ভয়াবহতা ও জিজ্ঞাসিত হওয়ার দিনের গুরুত্বে পৌঁছে দেয়।',
    },
    alt: [
      { name: 'Tabarak', en: 'The first word of the surah, and the way the early generations usually referred to it.', bn: 'সূরার প্রথম শব্দ; পূর্ববর্তী প্রজন্ম সাধারণত এই নামেই সূরাটির উল্লেখ করতেন।' },
      { name: 'Al-Waqiyah, al-Maniah, al-Munjiyah', en: 'The shielder, the preventer, the deliverer. These come not from the wording of the surah but from reports about its virtue, that it guards its reciter from the punishment of the grave. Those reports are graded differently by the hadith critics, from acceptable to weak, so these are best cited as reported epithets rather than as established titles.', bn: 'রক্ষাকারিণী, প্রতিরোধকারিণী, মুক্তিদাত্রী। এই নামগুলো সূরার শব্দ থেকে নয়, বরং এর ফজিলত সংক্রান্ত বর্ণনা থেকে এসেছে — যে এটি পাঠকারীকে কবরের আজাব থেকে রক্ষা করে। হাদিস-সমালোচকদের কাছে সেসব বর্ণনার মান ভিন্ন ভিন্ন, গ্রহণযোগ্য থেকে দুর্বল পর্যন্ত; তাই এগুলোকে প্রতিষ্ঠিত নাম নয়, বর্ণিত উপাধি হিসেবেই উল্লেখ করা উচিত।' },
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
      bn: 'এই সূরার দুটি নাম, আর দুটিই প্রথম আয়াত থেকে। "নূন" একটি হুরুফে মুকাত্তাআত, বিচ্ছিন্ন অক্ষর; বাকি সবগুলোর মতোই এর অর্থ নিশ্চিতভাবে নির্ধারিত নয়। নিরাপদ অবস্থান হলো, এটি আল্লাহর নাজিলকৃত বলে মেনে নেওয়া, অর্থ জানার দাবি না করা; আর প্রচলিত ব্যাখ্যাগুলো — কালির দোয়াত, বিরাট মাছ — বর্ণনা মাত্র, প্রতিষ্ঠিত তথ্য নয়। "আল-কলম" সেই একই আয়াতের বাকি অংশ, যে কলমের শপথ করা হয়েছে। কলমের নামে সূরার নাম এখানে বিশেষভাবে মানানসই: নবী ﷺ-কে পাগল বলা হচ্ছিল, আর জবাব শুরু হচ্ছে লেখার শপথ দিয়েই।',
    },
    signal: {
      en: 'Expect a defence of the Prophet against the charge of madness, a warning story about the owners of the garden who tried to harvest before the poor could come, and a call to patience that names Yunus without naming him.',
      bn: 'আশা করুন উন্মাদনার অভিযোগের বিরুদ্ধে নবী ﷺ-এর পক্ষে প্রতিরক্ষা, গরিবরা আসার আগেই ফসল তুলতে চাওয়া বাগানওয়ালাদের শিক্ষামূলক কাহিনি, আর ধৈর্যের আহ্বান — যেখানে ইউনুস (আঃ)-এর নাম না নিয়েই তাঁর কথা বলা হয়।',
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
      bn: 'আল-হাক্কাহ শব্দটি "হক্ক" থেকে — সত্য ও অবশ্যম্ভাবী; স্ত্রীবাচক রূপটি সেই ঘটনার নাম, যা ঘটতেই হবে। এটি বিষয়বস্তুর বর্ণনা নয়, বরং সূরার প্রথম শব্দ, যা পরপর তিনবার আঘাত করে: আল-হাক্কাহ; কী সেই আল-হাক্কাহ; আর কিসে তোমাকে জানাবে আল-হাক্কাহ কী। এই ত্রিমুখী পুনরাবৃত্তি এমন এক বাস্তবতার জন্য, যার পরিমাপ মন ধরতে পারে না। এরপরই সূরা সেই জাতিগুলোর নাম নেয় যাদের কাছে তা আগেই এসে গেছে — সামুদ, আদ, ফিরআউন — তারপর ডান হাতে ও বাম হাতে আমলনামা তুলে দেওয়ার দৃশ্য।',
    },
    signal: {
      en: 'Expect the Day of Judgement approached as an event rather than a doctrine: earlier nations destroyed, the sky splitting, the throne borne by eight, and two men reading out what their own records say.',
      bn: 'আশা করুন কিয়ামতকে মতবাদ নয়, ঘটনা হিসেবে দেখা — ধ্বংস হওয়া পূর্ববর্তী জাতি, বিদীর্ণ আকাশ, আটজনের বহন করা আরশ, আর দুজন মানুষ নিজেদের আমলনামা পড়ছে।',
    },
    alt: [],
    refs: ['69:1', '69:3'],
  },
  70: {
    meaning: { en: 'The Ascending Ways', bn: 'ঊর্ধ্বারোহণের সোপান' },
    source: {
      en: 'From dhi al-maarij in 70:3, Lord of the ways of ascent, up which the angels and the Spirit rise in 70:4.',
      bn: '৭০:৩ আয়াতের "যিল মাআরিজ" — সোপানসমূহের অধিপতি — থেকে, যেসব সোপান বেয়ে ৭০:৪ আয়াতে ফেরেশতারা ও রূহ ঊর্ধ্বে ওঠেন।',
    },
    why: {
      en: 'Maarij is the plural of miraj, a ladder or a flight of stairs, and it arrives in the third verse as a description of Allah: from Him, the Lord of the ascending ways. The next verse gives the picture, the angels and the Spirit climbing to Him on a day whose measure is fifty thousand years. The name is a marker lifted from a phrase, not a summary. The surah is about a mocker who demanded the punishment, the distance between his impatience and that measure of time, and the settled qualities of those who are constant in prayer.',
      bn: 'মাআরিজ হলো "মিরাজ"-এর বহুবচন — সিঁড়ি বা আরোহণের পথ। শব্দটি আসে তৃতীয় আয়াতে, আল্লাহর পরিচয় হিসেবে: তিনি সোপানসমূহের অধিপতি। পরের আয়াতই ছবিটি এঁকে দেয় — ফেরেশতারা ও রূহ তাঁর দিকে উঠে যান এমন এক দিনে, যার পরিমাণ পঞ্চাশ হাজার বছর। নামটি একটি বাক্যাংশ থেকে তুলে নেওয়া চিহ্ন, সারসংক্ষেপ নয়। সূরার বিষয় হলো এক উপহাসকারী, যে শাস্তি চেয়ে বসেছিল; তার তাড়াহুড়ো ও সেই সময়-পরিমাপের ব্যবধান; আর যারা নামাজে অবিচল, তাদের স্থায়ী গুণাবলি।',
    },
    signal: {
      en: 'Expect a Meccan surah answering a taunt: the punishment asked for is coming, but on a scale that makes the taunt look small, and the reader is handed a list of the traits that survive that day.',
      bn: 'আশা করুন এক বিদ্রূপের জবাবে নাজিল হওয়া মাক্কী সূরা — চাওয়া শাস্তি আসবেই, তবে এমন এক মাপে যার সামনে বিদ্রূপটিকে তুচ্ছ দেখায়; আর পাঠককে দেওয়া হয় সেই গুণের তালিকা, যা ওই দিন টিকে থাকে।',
    },
    alt: [
      { name: 'Sa\'ala Sa\'ilun', en: 'The surah cited by its opening words, in the old habit of naming a chapter from how it begins.', bn: 'সূরার প্রথম শব্দগুলো দিয়ে উল্লেখ — সূচনা দিয়ে সূরার নাম রাখার পুরনো রীতি অনুসারে।' },
      { name: 'Al-Waqi', en: 'Reported, from the punishment described in the first verse as bound to fall.', bn: 'বর্ণিত নাম, প্রথম আয়াতে বর্ণিত সেই শাস্তি থেকে — যা অবশ্যম্ভাবীভাবে সংঘটিত হবে।' },
    ],
    refs: ['70:1', '70:3', '70:4'],
  },
  71: {
    meaning: { en: 'Noah', bn: 'নূহ (আঃ)' },
    source: {
      en: 'Named after the prophet Nuh, sent to his people in 71:1, whose mission and closing prayer fill the whole surah.',
      bn: '৭১:১ আয়াতে স্বজাতির কাছে প্রেরিত নবী নূহ (আঃ)-এর নামে; তাঁর দাওয়াত ও শেষ প্রার্থনাই পুরো সূরা জুড়ে।',
    },
    why: {
      en: 'This is one of the surahs where the name and the subject are the same thing. Twenty-eight verses cover a single prophet\'s work: the warning, the long years of calling by night and by day, in public and in private, the people stopping their ears in their garments and clinging to idols named one by one, and at the end the prayer of a man who has exhausted every approach. Most surah titles are labels pulled from a passing word. Here nothing is pulled — the surah is about Nuh from first verse to last, and the title simply says so.',
      bn: 'এটি সেই কয়েকটি সূরার একটি, যেখানে নাম ও বিষয় অভিন্ন। আটাশটি আয়াত জুড়ে একজন নবীরই কাজ: সতর্কবার্তা, রাতে-দিনে প্রকাশ্যে-গোপনে দীর্ঘ বছরের আহ্বান, কাপড়ে কান ঢেকে ফেলা মানুষ, আর এক এক করে নাম ধরে উল্লিখিত মূর্তিগুলো আঁকড়ে থাকা; শেষে সেই মানুষের প্রার্থনা, যিনি সম্ভাব্য সব পথ শেষ করে ফেলেছেন। বেশিরভাগ সূরার নাম কোনো আসা-যাওয়া শব্দ থেকে তুলে নেওয়া চিহ্ন। এখানে তোলা কিছু নেই — প্রথম আয়াত থেকে শেষ পর্যন্ত সূরাটি নূহ (আঃ)-কে নিয়েই, আর নাম কেবল সেটুকুই বলে।',
    },
    signal: {
      en: 'Expect a case study in preaching rather than a narrative of the flood: the methods tried, the arguments used, the response received, and the point at which a prophet hands the matter back to his Lord.',
      bn: 'আশা করুন প্লাবনের কাহিনি নয়, দাওয়াতের একটি নমুনা-অধ্যয়ন — কোন কোন পদ্ধতি চেষ্টা করা হলো, কী যুক্তি দেওয়া হলো, কী সাড়া মিলল, আর কোন পর্যায়ে এসে একজন নবী বিষয়টি তাঁর রবের হাতে ছেড়ে দেন।',
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
      bn: 'শব্দটি আছে প্রথম আয়াতেই এবং সেখান থেকেই সূরার নাম; কিন্তু চমকপ্রদ ব্যাপার হলো এরপর যা ঘটে — প্রায় অর্ধেক সূরা জুড়ে জিনরা নিজেরাই কথা বলে, সরাসরি উদ্ধৃত হয়ে, জানায় তারা কী শুনেছে আর তাতে তাদের কোন ধারণা ভেঙে গেছে। তারা নিজেদের পুরনো বিশ্বাস শুধরে নেয় — আকাশ সম্পর্কে, মানুষের তাদের কাছে আশ্রয় চাওয়া সম্পর্কে, নিজেদের মধ্যকার নানা দল সম্পর্কে। নাম সূরাকে চিহ্নিত করে বার্তার দিক থেকে নয়, শ্রোতাদের দিক থেকে — যা কুরআনের চেনা রীতি: উপরিতলে যা সবচেয়ে স্বতন্ত্র, নাম আসে সেখান থেকেই।',
    },
    signal: {
      en: 'Expect testimony from an unseen audience, then a turn to the Prophet himself: the reach of the message beyond mankind, the guarding of the heavens, and the limits of what any messenger is given to know.',
      bn: 'আশা করুন এক অদৃশ্য শ্রোতৃমণ্ডলীর সাক্ষ্য, এরপর নবী ﷺ-এর দিকে মোড় — মানুষ ছাড়িয়ে বার্তার বিস্তার, আকাশের পাহারা, আর কোনো রাসূলকে কতটুকু জানানো হয় তার সীমা।',
    },
    alt: [],
    refs: ['72:1', '72:14'],
  },
  73: {
    meaning: { en: 'The Enwrapped One', bn: 'চাদরে আবৃত জন' },
    source: {
      en: 'From the address that opens 73:1, O you who are wrapped in your garment, spoken to the Prophet.',
      bn: '৭৩:১ আয়াতের সূচনা-সম্বোধন থেকে — হে চাদরে আবৃত ব্যক্তি — যা নবী ﷺ-কে উদ্দেশ করে বলা।',
    },
    why: {
      en: 'Muzzammil means one wrapped up in a cloak, and the surah opens by calling the Prophet by his posture rather than by his name or his office. The word occurs once and nowhere else. It belongs to a small family of surah titles taken from how the Quran addresses the Messenger, its twin being the chapter that follows it. What the address then does is take the wrapping away: stand the night, recite at a measured pace, bear what they say and part from them gracefully. The name preserves the moment of rest just before the command that ends it.',
      bn: 'মুযযাম্মিল অর্থ চাদরে জড়ানো ব্যক্তি; সূরাটি নবী ﷺ-কে ডাকে তাঁর নাম বা পদমর্যাদা দিয়ে নয়, তাঁর সেই মুহূর্তের অবস্থা দিয়ে। শব্দটি এসেছে একবার, আর কোথাও নেই। কুরআন যেভাবে রাসূলকে সম্বোধন করে, সেখান থেকে নেওয়া অল্প কয়েকটি সূরানামের একটি এটি — এর যমজ ঠিক পরের সূরাটিই। আর সেই সম্বোধন যা করে তা হলো চাদরটি সরিয়ে নেওয়া: রাতে দাঁড়াও, ধীরে ধীরে স্পষ্ট করে তিলাওয়াত করো, তাদের কথা সহ্য করো এবং সুন্দরভাবে দূরে থাকো। নামটি ধরে রাখে সেই বিশ্রামের মুহূর্তটুকু, যার ঠিক পরেই আদেশ এসে তা শেষ করে দেয়।',
    },
    signal: {
      en: 'Expect the night prayer prescribed and then lightened, a short training programme for a man about to be given a heavy word, and a closing verse that reads like a concession to human limits.',
      bn: 'আশা করুন রাতের নামাজের বিধান, পরে তার শিথিলতা; ভারী বাণী বহনের জন্য প্রস্তুত করা একজন মানুষের সংক্ষিপ্ত প্রশিক্ষণ; আর শেষ আয়াতটি, যা মানুষের সীমাবদ্ধতার প্রতি এক ছাড়ের মতো শোনায়।',
    },
    alt: [],
    refs: ['73:1', '73:2'],
  },
  74: {
    meaning: { en: 'The Cloaked One', bn: 'চাদর মুড়ি দেওয়া জন' },
    source: {
      en: 'From 74:1, O you who are covered up, followed at once by the command to rise and warn.',
      bn: '৭৪:১ আয়াত থেকে — হে চাদর মুড়ি দেওয়া ব্যক্তি — আর সঙ্গে সঙ্গেই ওঠো ও সতর্ক করো, এই নির্দেশ।',
    },
    why: {
      en: 'Muddaththir and its neighbour Muzzammil are near-synonyms, both meaning a man under a covering, and both titles come from an opening address rather than from a theme. Tradition ties this one to the early days of revelation: the Prophet, shaken by what he had seen, asked to be covered, and was answered with rise and warn. That is the whole basis of the name — a snapshot, not a summary. The surah then moves on quickly to a man weighing up how to dismiss the Quran, to Saqar, and to the nineteen set over it, none of which the title mentions.',
      bn: 'মুদ্দাসসির ও তার প্রতিবেশী মুযযাম্মিল প্রায় সমার্থক — দুটোই চাদরে ঢাকা মানুষ; আর দুটি নামই এসেছে সূচনার সম্বোধন থেকে, বিষয়বস্তু থেকে নয়। বর্ণনা অনুসারে এই সূরার সংযোগ ওহির একেবারে গোড়ার দিনগুলোর সঙ্গে: নবী ﷺ যা দেখেছিলেন তাতে কেঁপে উঠে চাদর চাইলেন, আর জবাব এলো — ওঠো, সতর্ক করো। নামের ভিত্তি এটুকুই — এক মুহূর্তের ছবি, সারসংক্ষেপ নয়। এরপর সূরা দ্রুত এগিয়ে যায় কুরআনকে কীভাবে নাকচ করা যায় তা হিসাব করা এক ব্যক্তির দিকে, সাকারের দিকে, আর তার উপর নিযুক্ত ঊনিশের দিকে — নাম যার কিছুই বলে না।',
    },
    signal: {
      en: 'Expect the call to public preaching and then the reaction to it: a calculated rejection reported almost word for word, a description of the fire, and the exchange in which its inmates explain what put them there.',
      bn: 'আশা করুন প্রকাশ্য দাওয়াতের আহ্বান, এরপর তার প্রতিক্রিয়া — প্রায় হুবহু উদ্ধৃত এক হিসাব-কষা প্রত্যাখ্যান, আগুনের বর্ণনা, আর সেই কথোপকথন যেখানে জাহান্নামীরা নিজেরাই বলে কী তাদের সেখানে এনেছে।',
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
      bn: 'এখানে নাম ও বিষয় এক বিন্দুতে মিলেছে। আল-কিয়ামাহ মানে দাঁড়িয়ে ওঠা; প্রথম আয়াতে তার শপথ, আর পরের চল্লিশ আয়াত জুড়ে তারই বর্ণনা — ধাঁধিয়ে যাওয়া চোখ, আলোহীন চাঁদ, সূর্য ও চাঁদকে একত্র করা, উজ্জ্বল মুখ ও বিবর্ণ মুখ, আর কণ্ঠার হাড়ে এসে পৌঁছানো প্রাণ। মাঝখানে আসে সেই বিখ্যাত প্রসঙ্গান্তর, যেখানে নবী ﷺ-কে বলা হয় ওহি নিয়ে জিহ্বা তাড়াহুড়ো না করতে। আশপাশের সূরাগুলো নাম ধার করে শপথের বস্তু বা সূচনার শব্দ থেকে; এই সূরাটি নাম পেয়েছে তার প্রকৃত বিষয় থেকেই — যেদিনের শপথ, পুরো সূরা সেই দিনেরই ছবি আঁকে।',
    },
    signal: {
      en: 'Expect a sustained answer to one question: does man think We will not reassemble his bones? The reply runs from the fingertips to the deathbed, with a short instruction on receiving revelation set inside it.',
      bn: 'আশা করুন একটিমাত্র প্রশ্নের ধারাবাহিক জবাব — মানুষ কি ভাবে আমি তার হাড়গুলো একত্র করব না? উত্তর গড়ায় আঙুলের ডগা থেকে মৃত্যুশয্যা পর্যন্ত, আর তার ভেতরেই বসানো ওহি গ্রহণের সংক্ষিপ্ত নির্দেশ।',
    },
    alt: [],
    refs: ['75:1', '75:6'],
  },
  76: {
    meaning: { en: 'Man', bn: 'মানুষ' },
    source: {
      en: 'From 76:1, which asks whether there came upon man a span of time in which he was nothing worth mentioning; al-insan and ad-dahr both stand in that one verse.',
      bn: '৭৬:১ আয়াত থেকে, যেখানে জিজ্ঞেস করা হয়েছে — মানুষের উপর কি এমন এক কাল অতিবাহিত হয়নি যখন সে উল্লেখযোগ্য কিছুই ছিল না; "আল-ইনসান" ও "আদ-দাহর" দুটি শব্দই ওই একটি আয়াতে।',
    },
    why: {
      en: 'This is the clearest case in the Quran of two names taken from a single sentence. The opening verse asks whether there came upon man, al-insan, a stretch of time, hin min ad-dahr, in which he was not a thing mentioned. Reciters and scholars picked different words out of that line, so the same surah circulates as al-Insan and as ad-Dahr, and neither is wrong; neither is a claim about the contents either. What follows is the making of man from a mingled drop, the two roads set before him, and a long description of what the righteous are given.',
      bn: 'একই বাক্য থেকে দুটি নাম নেওয়ার সবচেয়ে স্পষ্ট উদাহরণ এটিই। প্রথম আয়াত জিজ্ঞেস করে, মানুষের — আল-ইনসান — উপর কি এমন এক কালখণ্ড — হীনুম মিনাদ দাহর — যায়নি, যখন সে উল্লেখযোগ্য কিছু ছিল না। কারী ও আলিমগণ ওই এক বাক্য থেকে ভিন্ন ভিন্ন শব্দ বেছে নিয়েছেন, তাই একই সূরা আল-ইনসান নামেও চলে, আদ-দাহর নামেও; কোনোটিই ভুল নয়, আবার কোনোটিই বিষয়বস্তুর দাবি নয়। এরপর আসে মিশ্র শুক্রবিন্দু থেকে মানুষের সৃষ্টি, তার সামনে খুলে দেওয়া দুটি পথ, আর নেককারদের প্রাপ্তির দীর্ঘ বর্ণনা।',
    },
    signal: {
      en: 'Expect a gentle, image-rich surah rather than an argumentative one: origin, choice, then Paradise described at length in cups, springs and silk, and a closing reminder that whoever wills may take a way to his Lord.',
      bn: 'আশা করুন তর্কমুখর নয়, বরং কোমল ও চিত্রময় একটি সূরা — উৎপত্তি, তারপর পছন্দের স্বাধীনতা, তারপর পেয়ালা-ঝরনা-রেশমে আঁকা জান্নাতের দীর্ঘ বর্ণনা, আর শেষে স্মরণ করানো — যে চায় সে তার রবের পথ ধরতে পারে।',
    },
    alt: [
      { name: 'Ad-Dahr', en: 'The other half of the same verse: the span of time in which man was not yet anything. Equally established, and equally a marker rather than a summary.', bn: 'একই আয়াতের অপর অংশ — সেই কালখণ্ড, যখন মানুষ এখনও কিছুই ছিল না। সমানভাবে প্রতিষ্ঠিত নাম, আর সমানভাবেই সারসংক্ষেপ নয়, নিছক চিহ্ন।' },
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
      bn: 'আল-মুরসালাত একটি স্ত্রীবাচক বহুবচন বিশেষণ — যাদের প্রেরণ করা হয়। তারা কারা, তা নিয়ে মতভেদ আছে: বহু মুফাসসির প্রথম পাঁচ আয়াতের শপথগুলোকে বাতাস বলে পড়েন, কেউ ফেরেশতা বলেন, কেউ আবার পাঁচটিকে দুই ভাগে ভাগ করেন। কুরআন নির্দিষ্ট করে বলেনি, আর কোনো এক পক্ষ বেছে নেওয়ার চেয়ে মতভেদটুকু জানিয়ে দেওয়াই সৎ পথ। নিশ্চিত যেটুকু, তা হলো নামটি একেবারে প্রথম শব্দগুলো থেকে নেওয়া শপথের বস্তু — কুরআনের এই অংশের বেশিরভাগ সূরার মতোই — আর এরপরের পুনরাবৃত্ত বাক্যটি ফিরে আসে দশবার।',
    },
    signal: {
      en: 'Expect a drumbeat structure: oaths, then a promise that the threatened day will fall, then scene after scene of it, each closed by the same refrain of woe to those who deny.',
      bn: 'আশা করুন ঢাকের তালের মতো গঠন — প্রথমে শপথ, তারপর প্রতিশ্রুত দিনটি অবশ্যই আসার ঘোষণা, তারপর একের পর এক দৃশ্য, প্রতিটির শেষে সেই একই পুনরাবৃত্তি: সেদিন দুর্ভোগ অস্বীকারকারীদের।',
    },
    alt: [],
    refs: ['77:1', '77:5'],
  },
  78: {
    meaning: { en: 'The Announcement', bn: 'মহাসংবাদ' },
    source: {
      en: 'From an-naba al-azim, the momentous news, in 78:2 — the thing the questioners of the first verse are asking one another about.',
      bn: '৭৮:২ আয়াতের "আন-নাবাউল আজীম" — মহাসংবাদ — থেকে; প্রথম আয়াতের প্রশ্নকারীরা এ নিয়েই একে অপরকে জিজ্ঞেস করছিল।',
    },
    why: {
      en: 'The surah opens with a question — about what are they asking one another? — and the second verse answers with the word that became its title: the momentous news, over which they differ. Naba is not idle report but news of consequence. The name therefore comes from the opening exchange rather than from the body, which is a tour of creation offered as evidence: the earth spread out, the mountains as pegs, sleep as rest, the seven strong heavens, and only then the Day of Decision. Older usage simply called it Amma, after the first word.',
      bn: 'সূরার শুরু একটি প্রশ্ন দিয়ে — তারা একে অপরকে কী বিষয়ে জিজ্ঞেস করছে? — আর দ্বিতীয় আয়াত উত্তর দেয় সেই শব্দ দিয়ে, যা পরে নাম হয়ে যায়: মহাসংবাদ, যা নিয়ে তারা মতভেদ করছে। "নাবা" মানে যেনতেন খবর নয়, গুরুত্বপূর্ণ সংবাদ। অর্থাৎ নামটি এসেছে সূচনার এই প্রশ্নোত্তর থেকে, মূল আলোচনা থেকে নয় — যে আলোচনা আসলে প্রমাণ হিসেবে পেশ করা সৃষ্টিজগতের এক ভ্রমণ: বিছানো জমিন, পেরেকের মতো পাহাড়, বিশ্রাম হিসেবে ঘুম, সাতটি সুদৃঢ় আকাশ, আর তারপরই ফয়সালার দিন। পূর্ববর্তীরা একে ডাকতেন কেবল "আম্মা" — প্রথম শব্দ দিয়ে।',
    },
    signal: {
      en: 'Expect the argument for resurrection built from things already visible, then a sharp division into two destinations, and a last verse in which the denier wishes he were dust.',
      bn: 'আশা করুন চোখের সামনে থাকা জিনিস দিয়েই গড়া পুনরুত্থানের যুক্তি, তারপর দুই গন্তব্যে স্পষ্ট বিভাজন, আর শেষ আয়াতে অস্বীকারকারীর আক্ষেপ — হায়, সে যদি মাটি হয়ে যেত।',
    },
    alt: [
      { name: 'Amma Yatasa\'alun', en: 'The surah cited by its opening words, the earliest and commonest way of referring to it.', bn: 'সূরার প্রথম শব্দগুলো দিয়ে উল্লেখ — এটিই সবচেয়ে পুরনো ও প্রচলিত রীতি।' },
      { name: 'At-Tasa\'ul', en: 'Reported, from the questioning of one another in the first verse.', bn: 'বর্ণিত নাম, প্রথম আয়াতে একে অপরকে জিজ্ঞেস করার প্রসঙ্গ থেকে।' },
    ],
    refs: ['78:1', '78:2'],
  },
  79: {
    meaning: { en: 'Those Who Drag Forth', bn: 'সবেগে টেনে বের করে যারা' },
    source: {
      en: 'From the first of five oaths, 79:1, by those that pull out violently.',
      bn: 'পাঁচটি শপথের প্রথমটি — ৭৯:১ — থেকে: শপথ তাদের, যারা প্রবলভাবে টেনে বের করে।',
    },
    why: {
      en: 'The surah begins with five oaths and takes its name from the first of them. As with al-Mursalat, the referent is debated: most read them as the angels drawing out souls at death, others as stars in their courses or as war-horses straining, and the text leaves it open. What matters for the naming is the method rather than the meaning. This stretch of the Quran habitually labels a chapter by its striking opening word, with no claim that the word states the theme. The theme here is Pharaoh\'s defiance, the raising of the dead, and an Hour whose timing was withheld.',
      bn: 'সূরার শুরু পাঁচটি শপথ দিয়ে, আর নাম নেওয়া হয়েছে তার প্রথমটি থেকে। আল-মুরসালাতের মতোই এখানেও কারা উদ্দিষ্ট তা নিয়ে মতভেদ: অধিকাংশ পড়েন মৃত্যুর সময় প্রাণ টেনে নেওয়া ফেরেশতা হিসেবে, কেউ কক্ষপথে চলা নক্ষত্র বা ছুটে চলা যুদ্ধঘোড়া হিসেবে; কুরআন বিষয়টি খোলা রেখে দিয়েছে। নামকরণের ক্ষেত্রে অর্থের চেয়ে পদ্ধতিটিই মুখ্য: কুরআনের এই অংশ সাধারণত সূচনার চোখে-পড়া শব্দ দিয়েই সূরাকে চিহ্নিত করে, শব্দটি বিষয়বস্তু বলছে এমন দাবি ছাড়াই। এখানে বিষয় ফিরআউনের অবাধ্যতা, মৃতদের পুনরুত্থান, আর সেই ঘণ্টা — যার সময় জানানো হয়নি।',
    },
    signal: {
      en: 'Expect a rapid Meccan surah that sets one tyrant\'s claim beside the making of the heaven and the earth, and answers the question of when the Hour comes by saying it is not yours to know.',
      bn: 'আশা করুন দ্রুতগতির একটি মাক্কী সূরা, যা এক স্বৈরাচারীর দাবিকে আকাশ ও পৃথিবী সৃষ্টির পাশে রেখে দেখায়, আর কিয়ামত কবে — এই প্রশ্নের জবাবে বলে, তা জানা তোমার কাজ নয়।',
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
      bn: '৮০:১ আয়াতের প্রথম শব্দ "আবাসা" থেকে — তিনি ভ্রুকুটি করলেন ও মুখ ফিরিয়ে নিলেন — কারণ, ৮০:২ আয়াত অনুযায়ী, তাঁর কাছে সেই অন্ধ ব্যক্তি এসেছিলেন।',
    },
    why: {
      en: 'The naming word is a verb, and it describes a moment that the surah itself corrects. Occupied with the leading men of Quraysh, the Prophet turned away from Abdullah ibn Umm Maktum, a blind companion who had come wanting to be taught. The opening speaks in the third person and names nobody, and the correction is measured: the one who came striving, in awe, was the one worth attending to. It says something about the Quran that a surah is titled by a passing frown, and something about the Prophet that he later received Ibn Umm Maktum with honour and left him in charge of Madinah.',
      bn: 'নামটি একটি ক্রিয়াপদ, আর তা এমন এক মুহূর্তের বর্ণনা যা সূরা নিজেই সংশোধন করে দেয়। কুরাইশের প্রভাবশালী ব্যক্তিদের সঙ্গে আলাপে ব্যস্ত থাকা অবস্থায় নবী ﷺ মুখ ফিরিয়ে নিয়েছিলেন আবদুল্লাহ ইবনে উম্মে মাকতুম (রাঃ) থেকে — সেই অন্ধ সাহাবি, যিনি শিখতে চেয়ে এসেছিলেন। সূচনার আয়াতগুলো কথা বলে তৃতীয় পুরুষে, কারও নাম না নিয়ে, আর সংশোধনটি মাপা ও কোমল: যিনি আগ্রহ নিয়ে, আল্লাহভীতি নিয়ে ছুটে এসেছেন, মনোযোগ তাঁরই প্রাপ্য ছিল। এক মুহূর্তের ভ্রুকুটির নামে সূরার নাম হওয়া কুরআনের সততার পরিচয়; আর পরে ইবনে উম্মে মাকতুম (রাঃ)-কে সম্মানে গ্রহণ করা ও মদীনার দায়িত্ব তাঁর হাতে দেওয়া নবী ﷺ-এর চরিত্রের পরিচয়।',
    },
    signal: {
      en: 'Expect a short Meccan surah that opens with a correction and then widens into an argument: who really deserves your attention, and how a man made from a drop of fluid ends up fleeing his own family.',
      bn: 'আশা করুন সংক্ষিপ্ত একটি মাক্কী সূরা, যা শুরু হয় সংশোধন দিয়ে আর গড়ায় বৃহত্তর যুক্তিতে — মনোযোগের প্রকৃত দাবিদার কে, আর এক ফোঁটা তরল থেকে সৃষ্ট মানুষ কীভাবে শেষে নিজের পরিবার থেকেই পালাতে থাকে।',
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
      bn: '৮১:১ আয়াতের "কুওয়িরাত" থেকে — যখন সূর্যকে গুটিয়ে ফেলা হবে; সূচনার ক্রিয়াপদটিই নাম দিয়েছে।',
    },
    why: {
      en: 'Takwir is the verbal noun of the verb that opens the surah: kawwara, to wind or coil a thing round itself, the word used for winding a turban. Applied to the sun it is frighteningly domestic — the blazing thing simply rolled up and put away. The title is a plain instance of this section\'s habit of taking the first vivid word, and the word stands at the head of twelve when-clauses that dismantle the world piece by piece before the single answer arrives: every soul will know what it has brought. Early citation used the whole opening phrase instead.',
      bn: 'তাকভীর হলো সূরার সূচনার ক্রিয়াপদের ক্রিয়াবাচক রূপ — "কাওওয়ারা", অর্থাৎ কোনো জিনিসকে নিজের উপর পেঁচিয়ে গুটিয়ে ফেলা; পাগড়ি জড়ানোর জন্যও এই শব্দ ব্যবহৃত হয়। সূর্যের বেলায় প্রয়োগ করলে ছবিটি ভয়ংকর রকম ঘরোয়া — জ্বলন্ত জিনিসটিকে কেবল গুটিয়ে তুলে রাখা হলো। কুরআনের এই অংশের চেনা রীতি অনুযায়ী সূচনার প্রাণবন্ত শব্দটিই নাম হয়েছে; আর সেই শব্দ দাঁড়িয়ে আছে বারোটি "যখন"-বাক্যের মাথায়, যেগুলো একে একে জগৎটাকে খুলে ফেলে — তারপর আসে একটিমাত্র জবাব: প্রত্যেকে জেনে যাবে সে কী নিয়ে এসেছে। পূর্ববর্তীরা পুরো সূচনা-বাক্যটি দিয়েই সূরার উল্লেখ করতেন।',
    },
    signal: {
      en: 'Expect the end of the world in a rapid list of images, then a turn to the messenger who brought the news, defended by an oath on the retreating stars against the charge that he was a madman.',
      bn: 'আশা করুন একের পর এক দ্রুত ছবিতে আঁকা জগতের সমাপ্তি, তারপর মোড় ঘুরে সেই বার্তাবাহকের প্রসঙ্গ — যাঁকে উন্মাদ বলার অভিযোগের বিরুদ্ধে প্রতিরক্ষা দেওয়া হয়েছে অস্তগামী নক্ষত্রের শপথ দিয়ে।',
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
      bn: 'আল-ইনফিতার গঠিত হয়েছে সূরার সূচনার ক্রিয়াপদ থেকে — "ফাতারা"-র আত্মপ্রতিফলিত রূপ, অর্থাৎ নিজে থেকেই ফেটে যাওয়া। একই ধাতু থেকে এসেছে "ফিতরাত" — কোনো কিছুর আদি গড়ন, আর "ফাতির" — সূচনাকারী স্রষ্টা; ফলে যে আকাশ একদিন অস্তিত্বে আনা হয়েছিল, এখানে দেখা যায় সেটিই খুলে পড়ছে। প্রতিবেশী সূরাগুলোর মতোই নামটি শিরোনাম নয়, প্রথম-শব্দের চিহ্ন; তবে চিহ্নটি চমৎকার মানানসই, কারণ সূরার পুরো যুক্তিই একের পর এক খুলে যাওয়া — আকাশ, কবর, তারপর আমলনামা, যখন প্রতিটি প্রাণ মুখোমুখি হয় সে কী আগে পাঠিয়েছে আর কী পিছনে রেখে গেছে।',
    },
    signal: {
      en: 'Expect nineteen verses that move from cosmic collapse to a personal question — what deceived you about your generous Lord? — and end at a day when no soul can do anything for another.',
      bn: 'আশা করুন ঊনিশটি আয়াত, যা মহাজাগতিক ভাঙন থেকে নেমে আসে একেবারে ব্যক্তিগত প্রশ্নে — কী তোমাকে তোমার মহানুভব রব সম্পর্কে ধোঁকায় ফেলল? — আর শেষ হয় এমন এক দিনে, যেদিন কেউ কারও জন্য কিছুই করতে পারবে না।',
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
      bn: '৮৩:১ আয়াত থেকে — দুর্ভোগ সেই "মুতাফফিফীন"-দের, যারা মাপে কম দেয়; পরের দুই আয়াতেই তার সংজ্ঞা।',
    },
    why: {
      en: 'Tatfif is not grand theft. It comes from tafif, a trifling amount, and means shaving a little off the measure — taking full when you buy and giving short when you sell, exactly as 83:2 and 83:3 spell out. The surah is titled by that small dishonesty and then opens onto enormous things: the register of the wicked in Sijjin, the register of the righteous in Illiyyun, the sealed wine of the pious, and the day the believers look down on those who used to laugh at them. Naming the whole from the smallest fraud is the point, because the ledger records grams.',
      bn: 'তাতফীফ কোনো বড় চুরি নয়। শব্দটি এসেছে "তাফীফ" থেকে — সামান্য পরিমাণ; অর্থ মাপ থেকে অল্প একটু কেটে নেওয়া — কেনার সময় পুরো নেওয়া আর বিক্রির সময় কম দেওয়া, ঠিক যেমনটি ৮৩:২ ও ৮৩:৩ আয়াতে বলা হয়েছে। এই ছোট্ট অসততার নামেই সূরার নাম, অথচ এরপর খুলে যায় বিশাল সব দৃশ্য: সিজ্জীনে পাপীদের নথি, ইল্লিয়্যীনে নেককারদের নথি, মুহরকৃত পানীয়, আর সেই দিন — যেদিন ঈমানদাররা তাকিয়ে দেখে তাদেরই, যারা একদিন তাদের নিয়ে হাসত। ক্ষুদ্রতম প্রতারণার নামে গোটা সূরার নামকরণই মূল বার্তা, কারণ হিসাবের খাতা গ্রাম পর্যন্ত লিখে রাখে।',
    },
    signal: {
      en: 'Expect a surah that begins in the marketplace and ends in the two registers: a warning that small cheating and large denial belong to the same account, and that the mockery will one day be returned.',
      bn: 'আশা করুন এমন এক সূরা, যার শুরু বাজারে আর শেষ দুটি নথির সামনে — সতর্কবার্তা এই যে ছোট ঠকানো আর বড় অস্বীকার একই খাতার হিসাব, আর একদিন সেই উপহাস ফিরিয়ে দেওয়া হবে।',
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
      en: 'This is the third in a run of surahs opening with the sky coming apart, and like the others it is named from the verb of its first clause. Inshaqqa is to split along a seam. The surah adds something the others do not: the sky, in tearing, listens to its Lord and is right to — obedience rather than collapse. The title marks the chapter, it does not summarise it. What follows is man toiling towards his Lord, the record given in the right hand or from behind the back, oaths by the twilight and the gathering night, and the promise of stage after stage.',
      bn: 'আকাশ খুলে পড়ার বর্ণনা দিয়ে শুরু হওয়া সূরাগুলোর ধারায় এটি তৃতীয়, আর বাকিগুলোর মতোই এর নাম সূচনার ক্রিয়াপদ থেকে। "ইনশাক্কা" মানে সেলাই বরাবর ফেটে যাওয়া। তবে এই সূরা এমন কিছু যোগ করে যা অন্যগুলোতে নেই: আকাশ ফাটার সময় তার রবের আদেশ শোনে, আর তা-ই তার জন্য যথার্থ — ধ্বংস নয়, আনুগত্য। নামটি সূরাকে চিহ্নিত করে, সারসংক্ষেপ দেয় না। এরপর আসে নিজের রবের দিকে পরিশ্রম করে চলা মানুষ, ডান হাতে বা পিঠের পিছন থেকে দেওয়া আমলনামা, গোধূলি ও ঘনিয়ে আসা রাতের শপথ, আর স্তরের পর স্তর পেরোনোর প্রতিশ্রুতি।',
    },
    signal: {
      en: 'Expect the shortest possible route from the sky splitting to the reader\'s own file being handed over, with a reminder that the whole of life is a journey through one stage after another.',
      bn: 'আশা করুন আকাশ বিদীর্ণ হওয়া থেকে পাঠকের নিজের আমলনামা হাতে পাওয়া পর্যন্ত সবচেয়ে সংক্ষিপ্ত পথ, সঙ্গে এই স্মরণ — গোটা জীবনটাই এক স্তর থেকে আরেক স্তরে পেরিয়ে যাওয়া এক যাত্রা।',
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
      bn: 'বুরুজ হলো "বুরজ"-এর বহুবচন — দুর্গ বা সুরক্ষিত অবস্থান; নক্ষত্রের বড় বড় অবস্থান বোঝাতেও শব্দটি ব্যবহৃত হয়। এটি সূরার সূচনার শপথের বস্তু, কিন্তু সূরার বিষয় এটি নয়: এরপর আসে গর্তওয়ালাদের কাহিনি — যারা পরিখা খুঁড়ে তাতে আগুন জ্বালিয়ে বসে বসে দেখেছিল ঈমানদারদের পুড়ে যাওয়া, কেবল পরাক্রমশালী প্রশংসিত সত্তার প্রতি বিশ্বাসের অপরাধে। মাটির এক গর্তের কথা বলার আগে আকাশের দুর্গগুলোর শপথ করা ইচ্ছাকৃত। নামটি সেই মাপকাঠি খাড়া করে, যার বিপরীতে এক ছোট স্থানীয় স্বৈরাচারকে ওজন করতে হবে।',
    },
    signal: {
      en: 'Expect persecution answered not with rescue but with perspective: the tormentors named, the seizing of earlier nations recalled, and the Quran itself described as preserved on a guarded tablet.',
      bn: 'আশা করুন নির্যাতনের জবাব উদ্ধার দিয়ে নয়, দৃষ্টিভঙ্গি দিয়ে — অত্যাচারীদের চিহ্নিত করা, পূর্ববর্তী জাতিদের পাকড়াওয়ের স্মরণ, আর কুরআনকে বর্ণনা করা সুরক্ষিত ফলকে সংরক্ষিত হিসেবে।',
    },
    alt: [],
    refs: ['85:1', '85:4', '85:8'],
  },
  86: {
    meaning: { en: 'The Night-Comer', bn: 'রাতের আগন্তুক' },
    source: {
      en: 'From the oath in 86:1 by at-tariq, which the surah itself defines two verses later as the piercing star.',
      bn: '৮৬:১ আয়াতের "আত-তারিক"-এর শপথ থেকে, যাকে সূরা নিজেই দুই আয়াত পরে ব্যাখ্যা করে দেয় — ভেদকারী নক্ষত্র।',
    },
    why: {
      en: 'Tariq comes from tarq, to strike or knock, and names anyone who arrives by night, since the late traveller has to knock at a shut door. The Quran swears by it and then does something unusual: it glosses its own oath. And what will make you know what the night-comer is? The piercing star. So the title is an oath-object like those of its neighbours, but this is the one case in the run where the surah stops to define the very word it is named by. From there it draws a watcher set over every soul, and a second look at where a man came from.',
      bn: 'তারিক শব্দটি "তারক" থেকে — আঘাত করা বা কড়া নাড়া; আর তা বোঝায় রাতে আসা যেকোনো আগন্তুককে, কারণ রাতের যাত্রীকে বন্ধ দরজায় কড়া নাড়তেই হয়। কুরআন এর শপথ করে, তারপর অস্বাভাবিক একটি কাজ করে: নিজের শপথের ব্যাখ্যা নিজেই দিয়ে দেয়। আর কিসে তোমাকে জানাবে সেই রাতের আগন্তুক কী? ভেদকারী নক্ষত্র। অর্থাৎ নামটি প্রতিবেশী সূরাগুলোর মতোই শপথের বস্তু, তবে এই ধারায় এটিই একমাত্র ক্ষেত্র যেখানে সূরা থেমে নিজের নামের শব্দটির সংজ্ঞা দেয়। সেখান থেকেই আসে প্রতিটি প্রাণের উপর নিযুক্ত এক প্রহরীর কথা, আর মানুষ কোথা থেকে এসেছে তা আরেকবার দেখে নেওয়ার আহ্বান।',
    },
    signal: {
      en: 'Expect seventeen taut verses: an oath that explains itself, a guardian over every soul, an argument from origin to resurrection, and a closing instruction to give the deniers a little time.',
      bn: 'আশা করুন সতেরোটি টানটান আয়াত — এমন এক শপথ যা নিজেই নিজের ব্যাখ্যা দেয়, প্রতিটি প্রাণের উপর একজন রক্ষক, উৎপত্তি থেকে পুনরুত্থানের যুক্তি, আর শেষে নির্দেশ — অস্বীকারকারীদের কিছু সময় দাও।',
    },
    alt: [],
    refs: ['86:1', '86:2', '86:3'],
  },
  1: {
    meaning: { en: 'The Opening', bn: 'সূচনা' },
    source: {
      en: "Not taken from a word inside the surah: it is the Opening because it opens the written Book and opens every unit of the prayer, and 15:87 calls it the seven oft-repeated verses.",
      bn: 'সূরার ভেতরের কোনো শব্দ থেকে নাম আসেনি — লিখিত কুরআনের শুরুতে এবং নামাযের প্রতিটি রাকআতের শুরুতে থাকে বলেই এর নাম সূচনা; ১৫:৮৭ আয়াতে একে বলা হয়েছে বারবার পঠিত সাতটি আয়াত।',
    },
    why: {
      en: "Nearly every other surah is named after a word that happens to stand out somewhere inside it. This one is named for its position and its job. It stands at the head of the mushaf, and it is the passage a Muslim recites in every unit of every prayer, several times a day. Because it is defined by function rather than by a memorable word, the tradition records more names for it than for any other surah, and each recorded name catches a different function: its place in the Book, its role in prayer, its standing as the essence of the message, its use as a cure.",
      bn: 'প্রায় প্রতিটি সূরার নাম আসে ভেতরের কোনো একটি আলাদা করে চোখে পড়া শব্দ থেকে। এই সূরার নাম এসেছে তার অবস্থান আর কাজ থেকে — এটি মুসহাফের একেবারে গোড়ায় থাকে, আর দিনে বহুবার, নামাযের প্রতিটি রাকআতে এটিই পড়া হয়। শব্দ দিয়ে নয়, কাজ দিয়ে চেনা যায় বলেই অন্য যেকোনো সূরার চেয়ে এর নাম ঐতিহ্যে বেশি বর্ণিত হয়েছে; প্রতিটি নাম আলাদা একটি দিক ধরে — কুরআনে এর স্থান, নামাযে এর ভূমিকা, বার্তার সারমর্ম হিসেবে এর মর্যাদা, আর আরোগ্যের মাধ্যম হিসেবে এর ব্যবহার।',
    },
    signal: {
      en: 'Expect seven short verses that are not about a subject at all: praise, an acknowledgement of mercy and judgement, and a request for guidance — the worshipper speaking, with the rest of the Quran standing as the answer.',
      bn: 'সাতটি ছোট আয়াত, কোনো বিষয়বস্তু নয়: প্রশংসা, দয়া ও বিচারের স্বীকৃতি, তারপর পথের প্রার্থনা। এখানে বান্দা নিজে কথা বলে, আর বাকি পুরো কুরআন সেই প্রার্থনার উত্তর।',
    },
    alt: [
      { name: 'Umm al-Kitab', en: "Mother of the Book — recorded because the surah is treated as holding the essence of the whole message in seven verses.", bn: 'উম্মুল কিতাব বা কিতাবের মূল — সাতটি আয়াতে গোটা বার্তার সারমর্ম ধরা আছে বলে এই নাম বর্ণিত।' },
      { name: "As-Sab' al-Mathani", en: 'The seven oft-repeated — from 15:87, where God tells the Prophet He has given him seven of the oft-repeated verses; this is widely understood to mean this surah.', bn: 'আস-সাবউল মাসানী বা বারবার পঠিত সাত — ১৫:৮৭ আয়াত থেকে, যেখানে নবীকে বারবার পঠিত সাতটি আয়াত দেওয়ার কথা বলা হয়েছে; ব্যাপকভাবে এর অর্থ এই সূরাই ধরা হয়।' },
      { name: 'Ash-Shifa', en: "The cure — from the report of a companion who recited it over a man who had been stung, which the Prophet did not disallow.", bn: 'আশ-শিফা বা আরোগ্য — এক সাহাবী দংশনে আক্রান্ত ব্যক্তির উপর এটি পড়েছিলেন, নবী তা অস্বীকার করেননি; সেই বর্ণনা থেকে।' },
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
      bn: 'কুরআনের দীর্ঘতম সূরা, যেখানে আকীদা, বিধান, কিবলা পরিবর্তন, রোযা, হজ্জ, ঋণ — আরও কত কিছু আছে, তার নাম এসেছে একটি গাভী নিয়ে মাত্র সাত আয়াতের একটি ঘটনা থেকে। সূরার নাম কীভাবে কাজ করে, এর চেয়ে পরিষ্কার উদাহরণ নেই। নামগুলো চিহ্ন, বিষয়বস্তুর সারসংক্ষেপ নয় — এমন একটি শব্দ বেছে নেওয়া হয় যা দেখেই সূরাটি চেনা যায়। গাভীর ঘটনাটি মনে থাকে ঠিক এর অদ্ভুততার কারণেই: সহজ একটি আদেশ, তারপর প্রশ্নের পর প্রশ্ন, শেষে মানাটাই হয়ে দাঁড়াল ব্যয়বহুল। একবার পড়লে এই সূরা আর কারও সঙ্গে গুলিয়ে যায় না।',
    },
    signal: {
      en: "Not a surah about cattle. Expect the widest-ranging surah in the Quran: the covenant of the Children of Israel, the law of the new community at Madinah, and the Quran's longest single passage, on recording debt.",
      bn: 'এটি গবাদি পশুর সূরা নয়। কুরআনের সবচেয়ে বিস্তৃত সূরা: বনী ইসরাঈলের অঙ্গীকার, মদীনার নতুন সমাজের বিধান, আর ঋণ লিখে রাখা নিয়ে কুরআনের দীর্ঘতম আয়াত।',
    },
    alt: [
      { name: 'Fustat al-Quran', en: 'Reported as the pavilion of the Quran, for its length and the range of what it gathers.', bn: 'কুরআনের শিবির — দৈর্ঘ্য ও ব্যাপকতার কারণে এই নাম বর্ণিত।' },
      { name: 'Sanam al-Quran', en: 'The summit of the Quran, from a narration that everything has a summit and the summit of the Quran is this surah.', bn: 'কুরআনের চূড়া — এক বর্ণনায় আছে, প্রতিটি জিনিসের একটি চূড়া আছে, আর কুরআনের চূড়া এই সূরা।' },
      { name: 'Az-Zahrawan', en: "The two bright ones — a name used for this surah and Al 'Imran together, not for either one alone.", bn: 'দুই উজ্জ্বল — এই সূরা ও আলে ইমরান, দুটিকে একসঙ্গে বোঝাতে ব্যবহৃত নাম; আলাদাভাবে কোনো একটির নাম নয়।' },
    ],
    refs: ['2:67', '2:71', '2:73'],
  },
  3: {
    meaning: { en: 'The Family of Imran', bn: 'ইমরানের পরিবার' },
    source: {
      en: 'From 3:33, where God says He chose Adam, Nuh, the family of Ibrahim and the family of Imran above all the worlds.',
      bn: '৩:৩৩ আয়াত থেকে, যেখানে বলা হয়েছে আল্লাহ আদম, নূহ, ইবরাহীমের বংশ ও ইমরানের বংশকে সমগ্র সৃষ্টির উপর মনোনীত করেছেন।',
    },
    why: {
      en: 'Imran himself is not a figure the surah tells stories about. He is named once, in a verse listing the households God chose, and the name of the surah is lifted from that list. What follows makes the choice apt: the birth of Maryam into that household, the vow her mother made, and then the account of Isa and the argument with the delegation of Najran. So the name is a marker drawn from one verse, but the verse sits at the head of the section that gives the surah its distinctive material.',
      bn: 'ইমরান নিজে এই সূরার কোনো কাহিনীর চরিত্র নন। মনোনীত পরিবারগুলোর তালিকা দেওয়া একটি আয়াতে তাঁর নাম একবারই আসে, আর সূরার নাম সেই তালিকা থেকেই তুলে নেওয়া। এরপর যা আসে তাতে নামটি যথার্থ মনে হয়: সেই পরিবারে মারইয়ামের জন্ম, তাঁর মায়ের মানত, তারপর ঈসার বৃত্তান্ত ও নাজরানের প্রতিনিধিদলের সঙ্গে বিতর্ক। অর্থাৎ নামটি এক আয়াত থেকে নেওয়া একটি চিহ্ন, তবে সেই আয়াতটিই সূরার সবচেয়ে স্বতন্ত্র অংশের শুরুতে দাঁড়িয়ে আছে।',
    },
    signal: {
      en: "Expect the Quran's fullest engagement with Christian belief, the birth and mission of Isa, and a long review of the battle of Uhud read as a lesson in obedience and patience.",
      bn: 'খ্রিস্টান বিশ্বাসের সঙ্গে কুরআনের সবচেয়ে বিস্তৃত আলোচনা, ঈসার জন্ম ও দায়িত্ব, এবং উহুদের যুদ্ধের দীর্ঘ পর্যালোচনা — যা পড়ানো হয়েছে আনুগত্য ও ধৈর্যের পাঠ হিসেবে।',
    },
    alt: [
      { name: "Az-Zahra'", en: 'The bright one — the Prophet paired this surah with al-Baqarah, calling the two together az-Zahrawan, the two bright ones.', bn: 'উজ্জ্বল — নবী এই সূরাকে সূরা বাকারার সঙ্গে মিলিয়ে দুটিকে একত্রে আয-যাহরাওয়ান বা দুই উজ্জ্বল বলেছেন।' },
      { name: 'Al-Istighfar', en: 'The seeking of forgiveness — recorded in later lists of surah names, taken from 3:17, which praises those who seek forgiveness in the hours before dawn.', bn: 'ক্ষমাপ্রার্থনা — পরবর্তীকালের নামতালিকায় বর্ণিত, ৩:১৭ আয়াত থেকে, যেখানে শেষ রাতে ক্ষমাপ্রার্থীদের প্রশংসা করা হয়েছে।' },
    ],
    refs: ['3:33', '3:35', '3:42'],
  },
  4: {
    meaning: { en: 'The Women', bn: 'নারী' },
    source: {
      en: 'From the thread of rulings concerning women that runs through the surah, and from 4:127, where people ask the Prophet for a ruling about women.',
      bn: 'সূরাজুড়ে নারীদের সংক্রান্ত বিধানের ধারা থেকে, আর বিশেষভাবে ৪:১২৭ আয়াত থেকে, যেখানে মানুষ নবীর কাছে নারীদের ব্যাপারে ফতোয়া চায়।',
    },
    why: {
      en: "The name catches the surah's most distinctive legislation, not its scope. Inheritance shares, marriage, the treatment of orphan girls and the rights of wives are here in more detail than anywhere else in the Quran, and no other surah is identifiable by that material. But the surah is much wider than its name: it deals with hypocrites, migration, the People of the Book, arbitration between quarrelling parties, and how to pray when an enemy is near. Reading it as a surah only about women misses more than half of it.",
      bn: 'নামটি সূরার সবচেয়ে স্বতন্ত্র বিধানগুলো ধরে, পরিধি নয়। উত্তরাধিকারের অংশ, বিবাহ, ইয়াতীম মেয়েদের সঙ্গে আচরণ, স্ত্রীদের অধিকার — এসব কুরআনে আর কোথাও এত বিস্তারিত নেই, আর এই উপকরণ দিয়ে অন্য কোনো সূরাকে চেনা যায় না। কিন্তু সূরাটি নামের চেয়ে অনেক প্রশস্ত: এতে আছে মুনাফিকদের প্রসঙ্গ, হিজরত, আহলে কিতাব, বিবাদমান পক্ষের মধ্যে সালিশ, এমনকি শত্রু কাছে থাকলে কীভাবে নামায পড়তে হবে। একে কেবল নারীদের সূরা ভাবলে অর্ধেকেরও বেশি বাদ পড়ে যায়।',
    },
    signal: {
      en: "Expect the Quran's densest body of family law — inheritance, marriage, guardianship — set inside a wider argument about justice, and a running warning about those who profess faith without acting on it.",
      bn: 'কুরআনের সবচেয়ে ঘন পারিবারিক বিধান — উত্তরাধিকার, বিবাহ, অভিভাবকত্ব — বসানো আছে ইনসাফ নিয়ে একটি বৃহত্তর আলোচনার ভেতরে, সঙ্গে চলতে থাকে মুখে ঈমান আনা অথচ কাজে না আনা লোকদের নিয়ে সতর্কবাণী।',
    },
    alt: [
      { name: 'An-Nisa al-Kubra', en: 'The greater Women — used to tell it apart from Surat at-Talaq, which Ibn Masud is reported to have called an-Nisa as-Sughra, the lesser Women.', bn: 'বড় নিসা — সূরা তালাক থেকে আলাদা করতে এই নাম, কারণ ইবনে মাসঊদ সূরা তালাককে আন-নিসা আস-সুগরা বা ছোট নিসা বলতেন বলে বর্ণিত আছে।' },
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
      en: "The episode that gives the surah its name sits near its very end and takes four verses. Everything before it is law: what may be eaten, how to purify oneself for prayer, oaths and their expiation, witnesses, theft, and the duty to judge by what God revealed. The name is therefore a marker, taken from the surah's most unusual image rather than its subject. Even so the choice is not arbitrary — a table sent down and then made a test for those who received it fits a surah built on the keeping and breaking of covenants.",
      bn: 'যে ঘটনা থেকে নামটি এসেছে, তা সূরার একেবারে শেষদিকে, মাত্র চার আয়াতে। তার আগের প্রায় সবই বিধান: কী খাওয়া যাবে, নামাযের জন্য পবিত্রতা, শপথ ও তার কাফফারা, সাক্ষ্য, চুরি, এবং আল্লাহর নাযিলকৃত বিধান অনুযায়ী বিচারের দায়িত্ব। তাই নামটি একটি চিহ্ন — সূরার বিষয়বস্তু নয়, সবচেয়ে অস্বাভাবিক দৃশ্যটি থেকে নেওয়া। তবু বাছাইটি এলোমেলো নয়: নেমে আসা দস্তরখান যাদের কাছে এল তাদের জন্যই পরীক্ষা হয়ে দাঁড়াল, আর গোটা সূরাটিই দাঁড়িয়ে আছে অঙ্গীকার রক্ষা ও ভঙ্গের উপর।',
    },
    signal: {
      en: 'Expect a surah of obligations: lawful food, purification, oaths, testimony and treaty-keeping, framed by its opening command to fulfil contracts and closing with Isa questioned about what his followers made of him.',
      bn: 'দায়িত্বের সূরা: হালাল খাদ্য, পবিত্রতা, শপথ, সাক্ষ্য ও চুক্তি রক্ষা — শুরু হয় অঙ্গীকার পূর্ণ করার আদেশ দিয়ে, শেষ হয় ঈসাকে জিজ্ঞাসা করা হয় তাঁর অনুসারীরা তাঁকে নিয়ে কী করেছে।',
    },
    alt: [
      { name: "Al-'Uqud", en: 'The contracts — reported from Ibn Abbas, taken from the opening command in 5:1 to fulfil what you have bound yourselves to.', bn: 'আল-উকূদ বা অঙ্গীকারসমূহ — ইবনে আব্বাস থেকে বর্ণিত, ৫:১ আয়াতের অঙ্গীকার পূর্ণ করার আদেশ থেকে নেওয়া।' },
      { name: 'Al-Munqidhah', en: 'The rescuer — recorded in lists of surah names, understood as the surah that rescues the one who holds to it.', bn: 'আল-মুনকিযাহ বা উদ্ধারকারী — নামতালিকায় বর্ণিত; যে একে আঁকড়ে ধরে তাকে উদ্ধার করে বলে এই নাম বোঝা হয়।' },
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
      bn: 'এই সূরার বিষয় তাওহীদ — শিরকের বিরুদ্ধে কুরআনের সবচেয়ে দীর্ঘ যুক্তিধারাগুলোর একটি, যার ভেতর আছে ইবরাহীমের অনুসন্ধান, সৃষ্টিজগতের নিদর্শন, আর মক্কাবাসীদের সঙ্গে আপস না করার ঘোষণা। তবু নাম এসেছে সেই গবাদি পশু থেকে, যেগুলো মূর্তিপূজকরা নিজেদের দেবতাদের নামে আলাদা করে রাখত আর মনগড়া নিষেধাজ্ঞা দিয়ে ঘিরে রাখত। শব্দটি স্বতন্ত্র, এমন একগুচ্ছ আয়াতে আসে যা কেউ ভোলে না, আর সঙ্গে সঙ্গে সূরাটি চিনিয়ে দেয়। নাম শুনে বিষয়বস্তু প্রায় কেউই আন্দাজ করতে পারবে না — বেশিরভাগ সূরার নাম ঠিক এভাবেই কাজ করে।',
    },
    signal: {
      en: 'Expect argument rather than narrative: a long Makkan case for one Creator, against inherited superstition and invented lawmaking, ending with a statement of the religion Ibrahim followed.',
      bn: 'কাহিনী নয়, যুক্তি: এক স্রষ্টার পক্ষে দীর্ঘ মক্কী দলিল, উত্তরাধিকারে পাওয়া কুসংস্কার ও মনগড়া বিধান রচনার বিরুদ্ধে; শেষ হয় ইবরাহীম যে দ্বীন অনুসরণ করতেন তার ঘোষণা দিয়ে।',
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
      bn: 'আল-আরাফের নাম এসেছে তিন আয়াতের এমন এক দৃশ্য থেকে, যার তুলনা কুরআনে আর কোথাও নেই: দুই আবাসের মাঝখানে উঁচু এক প্রাচীর, তার উপর কিছু মানুষ, যারা দুই দিকই দেখতে পায় অথচ যাদের ফয়সালা এখনো হয়নি। সূরাটি নিজে রাসূলদের দীর্ঘ ধারাবাহিকতা — নূহ, হূদ, সালিহ, লূত, শুআইব ও মূসা — এবং তারপর আদম-সন্তানদের কাছ থেকে নেওয়া অঙ্গীকার। উঁচু প্রাচীরের নামে নামকরণ এসবের কিছুই বলে না, বেছে নেয় শুধু সেই দৃশ্যটি যা অন্য কোনো সূরার হতে পারত না।',
    },
    signal: {
      en: "Expect the Quran's longest run of messenger narratives, from Adam's fall to Musa and the calf, with judgement scenes framing them — and one strange, quiet scene of people waiting on a height.",
      bn: 'কুরআনের দীর্ঘতম রাসূল-কাহিনীর ধারা, আদমের পতন থেকে মূসা ও গোবৎস পর্যন্ত, দুই প্রান্তে বিচারের দৃশ্য — আর মাঝে উঁচু প্রাচীরে অপেক্ষমাণ মানুষদের অদ্ভুত নিস্তব্ধ একটি দৃশ্য।',
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
      bn: 'নামটি সূরার প্রথম বিশেষ্য, শুরুর প্রশ্ন থেকে নেওয়া; এখানে চিহ্ন আর বিষয় প্রায় মিলে যায়, কারণ সূরাটি বদরকে ঘিরে নাযিল, আর সেখানে অর্জিত সম্পদের বণ্টন এর আলোচ্য বিষয়গুলোর একটি। প্রায়, তবে পুরোপুরি নয় — সূরার বড় অংশ যুদ্ধ নিয়েই: যে সাহায্য এসেছিল, অস্ত্রধারী মুমিনদের কাছ থেকে যে আচরণ প্রত্যাশিত, আর যুদ্ধ ও সন্ধির শর্ত। যুদ্ধলব্ধ সম্পদ শুরুর প্রশ্নের উপলক্ষ, গোটা সূরার বিষয় নয়।',
    },
    signal: {
      en: "Expect Badr: the day the two parties met, how victory is described as God's doing, the fifth set aside for God and the Messenger, and instructions for a community newly at war.",
      bn: 'বদর: দুই দলের মুখোমুখি হওয়ার দিন, বিজয়কে আল্লাহরই কাজ বলে বর্ণনা, আল্লাহ ও রাসূলের জন্য নির্ধারিত এক-পঞ্চমাংশ, আর সদ্য যুদ্ধে জড়ানো এক সমাজের জন্য নির্দেশনা।',
    },
    alt: [
      { name: 'Surat Badr', en: 'Asked about Surat al-Anfal, Ibn Abbas is reported to have answered that it was revealed concerning Badr, and the surah is sometimes called by the name of the battle.', bn: 'সূরা আনফাল সম্পর্কে জিজ্ঞেস করা হলে ইবনে আব্বাস বলেছিলেন, এটি বদর সম্পর্কে নাযিল হয়েছে — এই বর্ণনা থেকে সূরাটিকে কখনো যুদ্ধের নামেই ডাকা হয়।' },
    ],
    refs: ['8:1', '8:41'],
  },
  9: {
    meaning: { en: 'The Repentance', bn: 'তাওবা' },
    source: {
      en: "From the repentance God turns back to accept in 9:104 and 9:117-118; the surah is equally well known as Bara'ah, the word it opens with in 9:1.",
      bn: '৯:১০৪ ও ৯:১১৭-১১৮ আয়াতে আল্লাহর তাওবা কবুল করার প্রসঙ্গ থেকে; সূরাটি সমানভাবে পরিচিত বারাআত নামেও, যা ৯:১ আয়াতের প্রথম শব্দ।',
    },
    why: {
      en: "Two names, and they point at two different things. Bara'ah, the opening word, is a formal declaration of release from treaty obligations towards those who had broken them, and it names the surah by its first word. At-Tawbah names it by its theme: who is turned back to and who is not — the three who stayed behind and were later forgiven, the hypocrites who excused themselves, the tribes on the edges. Both names are used in the early sources, and neither displaced the other, which is unusual.",
      bn: 'দুটি নাম, আর তারা দুই দিকে ইঙ্গিত করে। বারাআত সূরার প্রথম শব্দ — যারা চুক্তি ভেঙেছিল তাদের প্রতি দায়মুক্তির আনুষ্ঠানিক ঘোষণা; এই নাম সূরাকে চিনিয়ে দেয় তার প্রথম শব্দ দিয়ে। আত-তাওবা নাম দেয় বিষয় দিয়ে: কার তাওবা কবুল হয় আর কার হয় না — যে তিনজন পিছিয়ে ছিলেন এবং পরে ক্ষমা পেলেন, যে মুনাফিকরা অজুহাত দাঁড় করাল, চারপাশের গোত্রগুলো। প্রাচীন সূত্রে দুটি নামই ব্যবহৃত, একটিও অন্যটিকে সরিয়ে দেয়নি — যা অস্বাভাবিক।',
    },
    signal: {
      en: 'Expect the only surah written without the basmalah at its head, a hard surah: broken treaties, the expedition to Tabuk, the exposure of those who stayed home, and the door of repentance held open.',
      bn: 'একমাত্র সূরা যার শুরুতে বিসমিল্লাহ লেখা হয় না, এবং কঠিন এক সূরা: ভাঙা চুক্তি, তাবুকের অভিযান, যারা ঘরে থেকে গেল তাদের মুখোশ খুলে দেওয়া, আর তাওবার দরজা খোলা রাখা।',
    },
    alt: [
      { name: "Bara'ah", en: "The declaration of release, from 9:1. This is also the surah copied without the basmalah at its head, and the early community discussed why. Uthman is reported to have said that Bara'ah and al-Anfal resembled one another in subject, that the Prophet died without stating plainly whether it belonged with al-Anfal, and that the two were therefore placed together with no line between them; others reported that a declaration of war was not opened with a formula of mercy. The sources preserve the discussion without settling it, and it is left where they left it.", bn: 'দায়মুক্তির ঘোষণা, ৯:১ আয়াত থেকে। এই সূরার মাথায় বিসমিল্লাহ লেখা হয় না, আর প্রাথমিক যুগে এর কারণ নিয়ে আলোচনা হয়েছে। উসমান থেকে বর্ণিত, বারাআত ও আনফাল বিষয়ে একে অপরের কাছাকাছি ছিল, নবী স্পষ্ট করে না বলেই ইন্তেকাল করেন যে এটি আনফালেরই অংশ কিনা, তাই দুটিকে মাঝখানে কোনো রেখা ছাড়াই পাশাপাশি রাখা হয়; অন্যদের বর্ণনায় বলা হয়েছে, যুদ্ধের ঘোষণা রহমতের বাক্য দিয়ে শুরু করা হয়নি। সূত্রগুলো আলোচনাটি সংরক্ষণ করেছে, নিষ্পত্তি করেনি — এবং তারা যেখানে রেখে গেছে, সেখানেই রাখা হলো।' },
      { name: 'Al-Fadihah', en: 'The exposer — reported as a name given to it because it kept naming the excuses of the hypocrites until they stood exposed.', bn: 'আল-ফাদিহা বা মুখোশ-উন্মোচক — মুনাফিকদের অজুহাত একের পর এক প্রকাশ করে দেওয়ার কারণে এই নাম বর্ণিত।' },
      { name: 'Al-Muqashqishah', en: 'Reported as the surah that clears a person of hypocrisy, as a remedy clears an illness.', bn: 'আল-মুকাশকিশাহ — ওষুধ যেমন রোগ সারায়, তেমনি এই সূরা মানুষকে নিফাক থেকে মুক্ত করে বলে এই নাম বর্ণিত।' },
    ],
    refs: ['9:1', '9:104', '9:118'],
  },
  10: {
    meaning: { en: 'Yunus', bn: 'ইউনুস' },
    source: {
      en: 'From 10:98, the one verse in the surah that mentions the people of Yunus, the single town whose faith benefited it after the warning came.',
      bn: '১০:৯৮ আয়াত থেকে — সূরার একমাত্র জায়গা যেখানে ইউনুসের সম্প্রদায়ের কথা আছে, সেই একটি জনপদ যাদের ঈমান সতর্কবার্তার পরে কাজে লেগেছিল।',
    },
    why: {
      en: 'The surah does not tell the story of Yunus. It mentions his people once, in a single verse, and the story itself is told elsewhere, in 37:139-148 and in 21:87-88. Yet that one mention gives the surah its name. This is the marker principle at its plainest: a name has to be short, distinctive and easy to remember, and it does not have to describe anything. What the surah actually does is argue — with those who call the revelation invented, and with those who ask why no sign is sent.',
      bn: 'এই সূরা ইউনুসের কাহিনী বলে না। তাঁর সম্প্রদায়ের কথা আসে একবার, একটিমাত্র আয়াতে; কাহিনীটি বলা হয়েছে অন্যত্র — ৩৭:১৩৯-১৪৮ ও ২১:৮৭-৮৮ আয়াতে। তবু সেই এক উল্লেখ থেকেই সূরার নাম। চিহ্ন হিসেবে নামকরণের নীতিটি এখানে সবচেয়ে স্পষ্ট: নাম হতে হবে ছোট, স্বতন্ত্র ও সহজে মনে রাখার মতো — বিষয়বস্তু বর্ণনা করা তার কাজ নয়। সূরাটি আসলে যা করে তা হলো তর্ক: যারা ওহীকে বানানো বলে আর যারা প্রশ্ন করে কেন কোনো নিদর্শন পাঠানো হয় না, তাদের সঙ্গে।',
    },
    signal: {
      en: 'Expect a Makkan argument about revelation and accountability, with brief passages on Nuh and on Musa before Pharaoh, and the striking note that faith came too late for every nation but one.',
      bn: 'ওহী ও জবাবদিহি নিয়ে মক্কী যুক্তি, সঙ্গে নূহ এবং ফেরাউনের সামনে মূসার সংক্ষিপ্ত বৃত্তান্ত, আর সেই চমকে দেওয়া কথা — একটি জাতি ছাড়া বাকি সবার ঈমান এসেছিল বড় দেরিতে।',
    },
    alt: [],
    refs: ['10:98'],
  },
  11: {
    meaning: { en: 'Hud', bn: 'হুদ' },
    source: {
      en: 'From the account of the prophet Hud and the people of Ad in 11:50-60.',
      bn: '১১:৫০-৬০ আয়াতে বর্ণিত নবী হূদ ও আদ জাতির বৃত্তান্ত থেকে।',
    },
    why: {
      en: "Seven prophets appear in this surah — Nuh, Hud, Salih, Ibrahim, Lut, Shu'ayb and Musa — and it is named after the second of them. Hud's account is not the longest here, nor the most detailed; it is simply the one that gave the surah a usable label, since no other surah carries his name at its head. The pattern is the point: names distinguish surahs from one another, so a word that occurs in several places tends to be attached to the one where it is most convenient, not the one where it is most prominent.",
      bn: 'এই সূরায় সাতজন নবীর কথা আছে — নূহ, হূদ, সালিহ, ইবরাহীম, লূত, শুআইব ও মূসা — আর নাম রাখা হয়েছে দ্বিতীয়জনের নামে। হূদের বৃত্তান্ত এখানে সবচেয়ে দীর্ঘও নয়, সবচেয়ে বিস্তারিতও নয়; এটি কেবল সেই নাম যা সূরাটিকে কাজে লাগার মতো একটি পরিচয় দিয়েছে, কারণ অন্য কোনো সূরার শিরোনামে তাঁর নাম নেই। বিষয়টি এখানেই: নাম দিয়ে এক সূরাকে অন্য সূরা থেকে আলাদা করা হয়, তাই একাধিক জায়গায় আসা শব্দ সাধারণত সেই সূরার সঙ্গে জুড়ে যায় যেখানে তা সবচেয়ে সুবিধাজনক, সবচেয়ে প্রধান নয়।',
    },
    signal: {
      en: 'Expect one destroyed nation after another, told with unusual weight and detail — the flood and the son who refused the ark, Ad, Thamud, the people of Lut — and repeated calls to stand firm.',
      bn: 'একের পর এক ধ্বংসপ্রাপ্ত জাতি, অস্বাভাবিক গাম্ভীর্য ও বিস্তারে বলা — মহাপ্লাবন ও নৌকায় উঠতে অস্বীকার করা পুত্র, আদ, সামূদ, লূতের সম্প্রদায় — আর বারবার অবিচল থাকার আহ্বান।',
    },
    alt: [],
    refs: ['11:50', '11:53', '11:58'],
  },
  12: {
    meaning: { en: 'Yusuf', bn: 'ইউসুফ' },
    source: {
      en: 'From the account of Yusuf that runs unbroken from his dream in 12:4 to his family settling in Egypt.',
      bn: '১২:৪ আয়াতের স্বপ্ন থেকে শুরু করে পরিবারের মিসরে থিতু হওয়া পর্যন্ত অবিচ্ছিন্নভাবে চলা ইউসুফের বৃত্তান্ত থেকে।',
    },
    why: {
      en: "Here the name really is the subject, which makes this surah an exception. Almost the whole of it is one continuous narrative about one man, told in order from the dream to its fulfilment, without the digressions that break up narrative elsewhere in the Quran. So Yusuf is not a marker word plucked from a passing verse; it is what the surah is about, and the opening verses announce as much by calling what follows the best of narrations. When a surah name and a surah's content match this closely, it is worth noticing, because usually they do not.",
      bn: 'এখানে নামটিই আসলে বিষয়, আর তাতেই সূরাটি ব্যতিক্রম। প্রায় গোটা সূরা একজন মানুষকে নিয়ে একটানা একটি কাহিনী, স্বপ্ন থেকে তার বাস্তবায়ন পর্যন্ত ধারাবাহিকভাবে বলা, কুরআনে অন্যত্র কাহিনী ভেঙে দেওয়া প্রসঙ্গান্তর এখানে নেই। তাই ইউসুফ কোনো পার্শ্ব-আয়াত থেকে তুলে আনা চিহ্ন-শব্দ নয়; সূরাটি এ নিয়েই, আর শুরুর আয়াতগুলোই একে শ্রেষ্ঠ কাহিনী বলে ঘোষণা দেয়। সূরার নাম ও বিষয়বস্তু এতটা মিলে গেলে তা লক্ষ্য করার মতো, কারণ সাধারণত মেলে না।',
    },
    signal: {
      en: 'Expect a single story from beginning to end: brothers, a well, a household in Egypt, prison, dreams read, famine, and a reunion — with the moral drawn only at the close.',
      bn: 'শুরু থেকে শেষ পর্যন্ত একটিই কাহিনী: ভাইয়েরা, কূপ, মিসরের এক গৃহ, কারাগার, স্বপ্নের ব্যাখ্যা, দুর্ভিক্ষ, আর পুনর্মিলন — শিক্ষাটি টানা হয় কেবল শেষে এসে।',
    },
    alt: [
      { name: 'Ahsan al-Qasas', en: 'The best of narrations — taken from 12:3, and used as a descriptive title for the surah rather than as a second formal name.', bn: 'আহসানুল কাসাস বা শ্রেষ্ঠ কাহিনী — ১২:৩ আয়াত থেকে নেওয়া; আনুষ্ঠানিক দ্বিতীয় নাম নয়, বরং বর্ণনামূলক একটি অভিধা হিসেবে ব্যবহৃত।' },
    ],
    refs: ['12:3', '12:4', '12:7'],
  },
  13: {
    meaning: { en: 'The Thunder', bn: 'বজ্র' },
    source: {
      en: 'From 13:13, where the thunder exalts God with praise, as do the angels in awe of Him, while He sends the thunderbolts.',
      bn: '১৩:১৩ আয়াত থেকে, যেখানে বজ্র তাঁর প্রশংসায় তাসবীহ পাঠ করে, ফেরেশতারাও করে তাঁর ভয়ে, আর তিনি বজ্রাঘাত পাঠান।',
    },
    why: {
      en: "Thunder is named once in this surah, in a single verse where a sound everyone has heard is described as praise. That is what makes it work as a marker: the surah is a sustained argument about God's power over creation and the truth of what was revealed, full of things that can be seen — mountains, rivers, lightning, the rain that fills a valley — and thunder is the one that startles. A reader who has met 13:13 once can find the surah again by that word alone. The name reports an image, not a theme.",
      bn: 'এই সূরায় বজ্রের উল্লেখ একবারই, এমন একটি আয়াতে যেখানে সবার চেনা একটি শব্দকে বলা হয়েছে প্রশংসা। চিহ্ন হিসেবে এটি এ কারণেই কাজ করে: সূরাটি সৃষ্টির উপর আল্লাহর কুদরত ও নাযিলকৃত বাণীর সত্যতা নিয়ে দীর্ঘ যুক্তি, যা চোখে দেখা যায় এমন জিনিসে ভরা — পাহাড়, নদী, বিদ্যুৎ, উপত্যকা ভরে দেওয়া বৃষ্টি — আর এদের মধ্যে বজ্রই চমকে দেয়। একবার ১৩:১৩ পড়েছেন এমন পাঠক কেবল ওই শব্দটি দিয়েই সূরাটি আবার খুঁজে পাবেন। নামটি একটি দৃশ্যের খবর দেয়, বিষয়ের নয়।',
    },
    signal: {
      en: 'Expect signs read off the natural world as evidence, a comparison of truth and falsehood to scum carried off by a flood, and steady reassurance that hearts settle by the remembrance of God.',
      bn: 'প্রকৃতির নিদর্শনকে দলিল হিসেবে পড়া, সত্য ও মিথ্যাকে স্রোতে ভেসে যাওয়া ফেনার সঙ্গে তুলনা, আর বারবার এই আশ্বাস যে আল্লাহর স্মরণেই হৃদয় প্রশান্ত হয়।',
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
      en: 'The surah is about messengers and what happens when people refuse them, and Ibrahim enters it late, not as the hero of a narrative but as a voice in prayer: asking for the valley to be made secure, for his descendants to be kept from idols, for the prayer to be established. Those seven verses are what the name is taken from. It is a marker again — one passage out of a surah that spends most of its length elsewhere — though a well-chosen one, since a prayer offered generations earlier fits a surah about the long consequences of accepting or rejecting a message.',
      bn: 'সূরার বিষয় রাসূলগণ এবং মানুষ তাঁদের প্রত্যাখ্যান করলে কী ঘটে; ইবরাহীম আসেন শেষদিকে, কোনো কাহিনীর নায়ক হিসেবে নয়, দোয়ার কণ্ঠ হিসেবে — এই উপত্যকাকে নিরাপদ করার, বংশধরদের মূর্তিপূজা থেকে দূরে রাখার, নামায প্রতিষ্ঠিত রাখার প্রার্থনা। ওই সাত আয়াত থেকেই নামটি নেওয়া। এটিও একটি চিহ্ন — এমন এক সূরার একটিমাত্র অংশ, যার বেশিরভাগ কাটে অন্য প্রসঙ্গে — তবে ভালোভাবে বাছা চিহ্ন, কারণ প্রজন্ম আগে করা একটি দোয়া সেই সূরার সঙ্গেই মানায় যা বার্তা গ্রহণ বা প্রত্যাখ্যানের দীর্ঘমেয়াদি পরিণতি নিয়ে।',
    },
    signal: {
      en: "Expect messengers answered with threats, a scene of the arrogant and the weak arguing in the Fire, the parable of the good word as a rooted tree, and a father's prayer for a barren valley.",
      bn: 'রাসূলদের জবাবে হুমকি, জাহান্নামে অহংকারী ও দুর্বলদের বাদানুবাদের দৃশ্য, উত্তম বাণীকে শিকড়-গাড়া গাছের সঙ্গে তুলনা, আর এক পিতার প্রার্থনা এক শস্যহীন উপত্যকার জন্য।',
    },
    alt: [],
    refs: ['14:35', '14:37', '14:41'],
  },
  15: {
    meaning: { en: 'The Rocky Tract', bn: 'পাথুরে উপত্যকা' },
    source: {
      en: 'From 15:80, where the companions of al-Hijr, the rock-cut settlement of Thamud, are said to have denied the messengers.',
      bn: '১৫:৮০ আয়াত থেকে, যেখানে বলা হয়েছে আল-হিজরের অধিবাসীরা — সামূদের পাথর কেটে বানানো জনপদ — রাসূলদের অস্বীকার করেছিল।',
    },
    why: {
      en: 'Al-Hijr is a place, named once, in a passage of a few verses about a people who carved their houses out of rock and were destroyed anyway. The surah around it contains far more famous material: the promise that the Reminder is preserved, the account of Iblis refusing to bow, the guests who came to Ibrahim and then to Lut, and the seven oft-repeated verses. Any of those could have supplied a name. The place name won because it is unmistakable and belongs to no other surah — which is what a marker is for.',
      bn: 'আল-হিজর একটি স্থান, উল্লেখ একবারই, কয়েক আয়াতের এক অংশে — যারা পাহাড় কেটে ঘর বানিয়েছিল, তবু ধ্বংস হয়েছিল। এর চারপাশের সূরায় আরও অনেক বিখ্যাত বিষয় আছে: এই প্রতিশ্রুতি যে যিকর সংরক্ষিত, ইবলীসের সিজদা অস্বীকারের বৃত্তান্ত, ইবরাহীম ও পরে লূতের কাছে আসা মেহমানরা, এবং বারবার পঠিত সাত আয়াত। এদের যেকোনোটি থেকেই নাম আসতে পারত। স্থানের নামটি জিতে গেল, কারণ তা অভ্রান্তভাবে আলাদা এবং অন্য কোনো সূরার নয় — চিহ্নের কাজই তো এটাই।',
    },
    signal: {
      en: 'Expect consolation for a Prophet being mocked: creation and its guarded order, the refusal of Iblis, ruined towns still standing on the road, and the assurance that the revelation itself is protected.',
      bn: 'উপহাসের মুখে থাকা এক নবীর জন্য সান্ত্বনা: সৃষ্টি ও তার সুরক্ষিত বিন্যাস, ইবলীসের অস্বীকার, পথের ধারে আজও দাঁড়িয়ে থাকা ধ্বংস জনপদ, আর এই আশ্বাস যে ওহী নিজেই সুরক্ষিত।',
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
      bn: 'মৌমাছি আসে দীর্ঘ এক সূরার দুই আয়াতে, যার আসল কাজ আল্লাহর নিয়ামত গুনে গুনে বলা: বৃষ্টি, গবাদি পশু, নৌযান, রাত ও দিন, পথ চেনার তারা, মানুষের জোড়া সৃষ্টি। গোটা তালিকার সবচেয়ে ধারালো উদাহরণ মৌমাছি — ক্ষুদ্র এক প্রাণী সরাসরি ইলহামের অধীনে কাজ করছে, আর তৈরি করছে এমন কিছু যাতে মানুষের জন্য আরোগ্য আছে। এটি এতটাই আলাদা করে চোখে পড়ে যে সূরার নাম হয়ে যায়, অথচ বড় বিষয়টি — নিয়ামতের পর নিয়ামত — নামহীনই থেকে যায়। দৃশ্যটিই শিরোনামের কাজ করছে, যদিও ঐতিহ্যে বিষয়টির নামেও একটি নাম বর্ণিত আছে।',
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
      bn: 'দুটি নাম, একই সূরার দুই আলাদা জায়গায় গাঁথা, আর দুটিই চালু — বাংলা ও উর্দু শিরোনামে লেখা হয় বনী ইসরাঈল, ইংরেজিতে আল-ইসরা। আল-ইসরা এসেছে প্রথম আয়াত থেকে, রাতের এক সফর নিয়ে একটিমাত্র বাক্য। বনী ইসরাঈল এসেছে ঠিক তার পরের অংশ থেকে — দুই দফা বিপর্যয় ও দুই দফা হিসাবের ফয়সালা। কোনো নামই সূরাটিকে ঢেকে দেয় না; সূরা দ্রুত চলে যায় বিধিবিধান, কুরআনের চ্যালেঞ্জ ও রূহের প্রসঙ্গে। দুটি নাম কেবল দেখায়, একটি সূরাকে একাধিক পরিচয়চিহ্ন দিয়ে চেনানো যায়।',
    },
    signal: {
      en: 'Expect one verse on the night journey and then a Makkan surah of instruction: parents, wealth, killing, orphans, honesty in measure — and the challenge that none could produce the like of this Quran.',
      bn: 'রাতের সফর নিয়ে একটিমাত্র আয়াত, তারপর নির্দেশনায় ভরা এক মক্কী সূরা: পিতামাতা, সম্পদ, হত্যা, ইয়াতীম, মাপে সততা — আর সেই চ্যালেঞ্জ, এই কুরআনের মতো কিছু কেউ আনতে পারবে না।',
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
      bn: 'এই সূরা ভরে আছে চারটি কাহিনীতে — গুহার ঘুমন্ত যুবকরা, দুই বাগানের মালিক, মূসা ও তাঁর সফরসঙ্গী আল্লাহর এক বান্দা, এবং যুলকারনাইন — নাম নেওয়া হয়েছে প্রথমটি থেকে। শব্দটি ওই প্রথম বৃত্তান্তে বারবার ফিরে আসে, তাই ধরার জন্য সহজ হাতল হয়ে যায়। এটি সারসংক্ষেপ নয়: নাম শুনে বাকি তিন কাহিনীর কথা বোঝা যায় না, বোঝা যায় না সেই সুতোটিও যা চারটিকে বেঁধেছে — পরীক্ষা; ঈমানের, সম্পদের, জ্ঞানের ও ক্ষমতার পরীক্ষা। গুহা হলো সূরার শুরুর জায়গা, বিষয় নয়।',
    },
    signal: {
      en: 'Expect four stories and the lessons drawn from them, a running contrast between what lasts and what does not, and the surah widely recited on Fridays.',
      bn: 'চারটি কাহিনী ও তা থেকে নেওয়া শিক্ষা, স্থায়ী আর ক্ষণস্থায়ীর মধ্যে চলতে থাকা তুলনা, আর সেই সূরা যা জুমার দিনে ব্যাপকভাবে পড়া হয়।',
    },
    alt: [],
    refs: ['18:9', '18:10', '18:25'],
  },
  19: {
    meaning: { en: 'Maryam', bn: 'মারইয়াম' },
    source: {
      en: 'From 19:16, where the Prophet is told to mention Maryam in the Book, and from the annunciation and the birth that follow.',
      bn: '১৯:১৬ আয়াত থেকে, যেখানে নবীকে বলা হয়েছে কিতাবে মারইয়ামের কথা উল্লেখ করতে, আর তারপরের সুসংবাদ ও জন্মের বৃত্তান্ত থেকে।',
    },
    why: {
      en: "This is the only surah named after a woman, and Maryam is the only woman the Quran names outright. The account of her withdrawal, the annunciation, the birth under the palm and her return to her people fills the surah's first section, and the name is taken from there. What follows moves on — Ibrahim and his father, Musa, Idris, and then a long passage on those who inherited the prayer and lost it. So the name marks the opening narrative rather than the whole, in the usual way, but it marks a section that is genuinely the surah's most distinctive.",
      bn: 'একমাত্র এই সূরার নাম একজন নারীর নামে, আর মারইয়ামই কুরআনে নাম ধরে উল্লিখিত একমাত্র নারী। তাঁর আলাদা হয়ে যাওয়া, সুসংবাদ, খেজুর গাছের নিচে সন্তান জন্ম, আর সম্প্রদায়ের কাছে ফেরা — এই বৃত্তান্তেই সূরার প্রথম অংশ ভরা, নামটি সেখান থেকেই নেওয়া। এরপর সূরা এগিয়ে যায় অন্যদিকে — ইবরাহীম ও তাঁর পিতা, মূসা, ইদরীস, তারপর যারা নামায উত্তরাধিকারসূত্রে পেয়েও হারিয়ে ফেলল তাদের নিয়ে দীর্ঘ আলোচনা। অর্থাৎ নামটি চিরাচরিত নিয়মেই গোটা সূরা নয়, শুরুর কাহিনীটিকে চিহ্নিত করে — তবে যে অংশটিকে করে, সেটিই সূরার সবচেয়ে স্বতন্ত্র অংশ।',
    },
    signal: {
      en: 'Expect birth after birth granted against expectation, Yahya and then Isa, a gentle exchange between Ibrahim and his father, and a surah in short rhyming verses that was recited to the Negus.',
      bn: 'প্রত্যাশার বিরুদ্ধে একের পর এক সন্তানদান, প্রথমে ইয়াহইয়া তারপর ঈসা, ইবরাহীম ও তাঁর পিতার মধ্যে নরম কথোপকথন, আর ছোট ছোট ছন্দময় আয়াতের এই সূরা, যা নাজাশীর দরবারে পড়ে শোনানো হয়েছিল।',
    },
    alt: [
      { name: 'Kaf Ha Ya Ayn Sad', en: 'The surah is sometimes identified by the disjointed letters that open it, in the way Ta-Ha and Ya-Sin are.', bn: 'তা-হা বা ইয়াসীনের মতো, এই সূরাকেও কখনো তার শুরুর বিচ্ছিন্ন হরফগুলো দিয়ে চিহ্নিত করা হয়।' },
    ],
    refs: ['19:16', '19:27', '19:34'],
  },
  20: {
    meaning: { en: 'The letters Ta Ha', bn: 'তা-হা হরফদ্বয়' },
    source: {
      en: 'From 20:1, the two disjointed letters that open the surah and stand as its name.',
      bn: '২০:১ আয়াত থেকে — সূরার শুরুতে থাকা দুটি বিচ্ছিন্ন হরফ, যা-ই এর নাম।',
    },
    why: {
      en: 'The name is the two letters themselves, and their meaning is not established. They belong to the disjointed letters that open twenty-nine surahs, and the position most scholars settled on is to recite and affirm them while declining to claim knowledge of what they mean. A reading that takes ta ha as an address meaning O man is reported from some early authorities, sometimes on the basis of a dialect word, but it is a reported view rather than an established fact, and other early authorities left the letters alone. The name identifies the surah; it does not describe it.',
      bn: 'নামটি ওই দুটি হরফই, আর তাদের অর্থ প্রতিষ্ঠিত নয়। এগুলো সেই বিচ্ছিন্ন হরফগুলোর অন্তর্ভুক্ত যা দিয়ে ঊনত্রিশটি সূরা শুরু হয়েছে; অধিকাংশ আলিম যে অবস্থানে স্থির হয়েছেন তা হলো — পড়া ও স্বীকার করা, কিন্তু অর্থ জানার দাবি না করা। তা-হা কে সম্বোধন ধরে হে মানুষ অর্থ করার একটি পাঠ কিছু প্রাচীন কর্তৃপক্ষ থেকে বর্ণিত, কখনো কোনো আঞ্চলিক শব্দের ভিত্তিতে; তবে এটি বর্ণিত মত, প্রতিষ্ঠিত তথ্য নয়, আর অন্য প্রাচীনরা হরফগুলোকে ব্যাখ্যা না করেই রেখে দিয়েছেন। নামটি সূরাকে চিহ্নিত করে, বর্ণনা করে না।',
    },
    signal: {
      en: "Expect the Quran's longest single telling of Musa: the fire on the mountain, the staff, Pharaoh's magicians, the crossing, and the calf — framed by consolation for a Prophet carrying a heavy message.",
      bn: 'মূসার কাহিনীর কুরআনে দীর্ঘতম একক বর্ণনা: পাহাড়ে আগুন, লাঠি, ফেরাউনের জাদুকররা, সমুদ্র পার হওয়া, আর গোবৎস — আর দুই প্রান্তে ভারী বার্তা বহনকারী এক নবীর জন্য সান্ত্বনা।',
    },
    alt: [],
    refs: ['20:1'],
  },
  21: {
    meaning: { en: 'The Prophets', bn: 'নবীগণ' },
    source: {
      en: 'From the sequence of prophets recalled one after another through the second half of the surah, 21:48-91.',
      bn: 'সূরার দ্বিতীয়ার্ধে ২১:৪৮-৯১ আয়াতে একের পর এক নবীদের যে ধারাবাহিক স্মরণ আছে, সেখান থেকে।',
    },
    why: {
      en: "This is one of the minority of names that does describe the contents. Prophet after prophet is recalled in a single run — Musa and Harun, Ibrahim, Lut, Nuh, Dawud and Sulayman, Ayyub, Ismail, Idris, Dhul-Kifl, Yunus, Zakariyya, Yahya and Isa with his mother — each in a few verses, each with the same point: they called on their Lord and were answered. The name reports that structure rather than isolating a striking word. It is worth noticing how rare that is; most surah names would tell you nothing at all about what lies inside.",
      bn: 'অল্প যে কয়েকটি নাম সত্যিই বিষয়বস্তু বর্ণনা করে, এটি তাদের একটি। একটানা এক ধারায় নবীর পর নবীর কথা আসে — মূসা ও হারূন, ইবরাহীম, লূত, নূহ, দাউদ ও সুলাইমান, আইয়ূব, ইসমাঈল, ইদরীস, যুলকিফল, ইউনুস, যাকারিয়া, ইয়াহইয়া, এবং ঈসা ও তাঁর মা — প্রত্যেকে কয়েক আয়াতে, প্রত্যেকের বেলায় একই কথা: তাঁরা তাঁদের রবকে ডেকেছিলেন, আর সাড়া পেয়েছিলেন। নামটি এই বিন্যাসেরই খবর দেয়, কোনো চমকদার শব্দ আলাদা করে তোলে না। এটি কত বিরল, তা লক্ষ্য করার মতো; বেশিরভাগ সূরার নাম ভেতরে কী আছে তার কিছুই জানায় না।',
    },
    signal: {
      en: 'Expect short, rapid accounts of many prophets and their answered prayers, set inside a Makkan argument that the reckoning has drawn near and that the heavens and earth were not made in play.',
      bn: 'বহু নবীর সংক্ষিপ্ত ও দ্রুতগতির বৃত্তান্ত এবং তাঁদের কবুল হওয়া দোয়া, বসানো আছে এমন এক মক্কী যুক্তির ভেতর — হিসাবের সময় ঘনিয়ে এসেছে, আর আকাশ ও পৃথিবী খেলাচ্ছলে বানানো হয়নি।',
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
      bn: 'হজ্জের অংশটি এমন এক সূরার একটি ভাগ মাত্র, যেখানে পুনরুত্থান নিয়ে তর্ক আছে, আত্মরক্ষার্থে লড়াইয়ের প্রথম অনুমতি আছে, কিয়ামতের দিনে পৃথিবীর কম্পনের বর্ণনা আছে, আর আছে দুটি সিজদার স্থান। তবু নাম হলো হজ্জ — একদিকে কারণ অন্য কোনো সূরার এই নাম নেই, অন্যদিকে কারণ এই আহ্বান ফিরে যায় ইবরাহীম পর্যন্ত, যা হজ্জের রীতিকে সবচেয়ে প্রাচীন কাঠামোয় বসিয়ে দেয়। নামটিকে সূরার সবচেয়ে বাস্তব অংশের দিকে ইশারা করা চিহ্ন হিসেবে পড়ুন, হজ্জের নিয়মপুস্তিকা হিসেবে নয়।',
    },
    signal: {
      en: 'Expect the Hour described in its opening lines, the rites and their meaning, sacrifice weighed by piety rather than meat, permission granted to the wronged to defend themselves, and two verses of prostration.',
      bn: 'শুরুর আয়াতগুলোতেই কিয়ামতের বর্ণনা, হজ্জের রীতি ও তার তাৎপর্য, কুরবানি যেখানে মাংস নয় তাকওয়াই ওজন করা হয়, অত্যাচারিতদের আত্মরক্ষার অনুমতি, আর সিজদার দুটি আয়াত।',
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
      bn: 'এখানে নাম এসেছে প্রথম শব্দ থেকে, আবার বিষয়ও বলে দিচ্ছে — যা অস্বাভাবিক। সূরার শুরুতেই তালিকা: কী কী মুমিনকে সফল করে — নামাযে বিনয়, অনর্থক কথা থেকে মুখ ফেরানো, লজ্জাস্থানের হেফাজত, আমানত রক্ষা, নামাযের যত্ন — আর এরপরের সবকিছুই ওই তালিকার নিরিখে মাপা: যেসব রাসূলকে মিথ্যাবাদী বলা হয়েছিল, অস্বীকারকারীদের যুক্তি, আর শেষে সেই প্রশ্ন, তারা পৃথিবীতে কতকাল ছিল। তাই এটি কোনো পার্শ্ব-আয়াত থেকে ছিনিয়ে আনা চিহ্ন-শব্দ নয়। নামটি বলে দেয় সূরা কী সংজ্ঞায়িত করতে এসেছে।',
    },
    signal: {
      en: 'Expect a portrait of the successful believer at the start, then the stages of a human being being formed, a series of rejected messengers, and a closing scene of regret at the reckoning.',
      bn: 'শুরুতে সফল মুমিনের প্রতিকৃতি, তারপর মানুষ সৃষ্টির স্তরগুলো, একের পর এক প্রত্যাখ্যাত রাসূল, আর শেষে হিসাবের দিনে আফসোসের দৃশ্য।',
    },
    alt: [],
    refs: ['23:1', '23:9'],
  },
  24: {
    meaning: { en: 'The Light', bn: 'আলো' },
    source: {
      en: 'From 24:35, the verse comparing the light of God to a lamp in a niche, in a glass like a brilliant star.',
      bn: '২৪:৩৫ আয়াত থেকে, যেখানে আল্লাহর নূরকে তুলনা করা হয়েছে তাকের ভেতর রাখা প্রদীপের সঙ্গে, যা আছে উজ্জ্বল তারার মতো কাচের ভেতরে।',
    },
    why: {
      en: "Almost all of this surah is legislation — the penalty for unchastity, the accusation of chaste women, the false report against the Prophet's wife and its unravelling, permission to enter houses, lowering the gaze, covering, the marriage of the poor. In the middle of it stands one verse of pure imagery, a niche, a lamp, a glass like a brilliant star, olive oil almost glowing untouched by fire. That verse names the surah. Nothing about the name would tell you the legal content, but nothing else in the surah is remembered as vividly.",
      bn: 'এই সূরার প্রায় পুরোটাই বিধান — ব্যভিচারের শাস্তি, সতী নারীর প্রতি অপবাদ, নবীর স্ত্রীর বিরুদ্ধে মিথ্যা রটনা ও তার অবসান, ঘরে প্রবেশের অনুমতি, দৃষ্টি নত রাখা, পর্দা, দরিদ্রদের বিবাহ। এর মাঝখানে দাঁড়িয়ে আছে বিশুদ্ধ চিত্রকল্পের একটি আয়াত: এক তাক, একটি প্রদীপ, উজ্জ্বল তারার মতো কাচ, আর যে যয়তুন তেল আগুন ছোঁয়া ছাড়াই যেন জ্বলে ওঠে। ওই আয়াত থেকেই সূরার নাম। নাম শুনে বিধানের কিছুই বোঝা যাবে না, অথচ সূরার আর কোনো কিছুই এত জীবন্তভাবে মনে থাকে না।',
    },
    signal: {
      en: "Expect the Quran's clearest rules on chastity, accusation and privacy in the home, together with the verse of light and its parable — a surah about guarding what is seen and what is said.",
      bn: 'সতীত্ব, অপবাদ ও ঘরের গোপনীয়তা নিয়ে কুরআনের সবচেয়ে স্পষ্ট বিধান, সঙ্গে নূরের আয়াত ও তার উপমা — কী দেখা হয় আর কী বলা হয়, তার হেফাজত নিয়ে একটি সূরা।',
    },
    alt: [],
    refs: ['24:35', '24:40'],
  },
  25: {
    meaning: { en: 'The Criterion', bn: 'মানদণ্ড' },
    source: {
      en: 'From 25:1, the opening declaration that God sent down the Criterion to His servant as a warning to the worlds.',
      bn: '২৫:১ আয়াতের সূচনা-ঘোষণা থেকে — তিনি তাঁর বান্দার উপর ফুরকান নাযিল করেছেন, যাতে সে বিশ্ববাসীর জন্য সতর্ককারী হয়।',
    },
    why: {
      en: 'Al-Furqan is a name for the revelation itself: what separates truth from falsehood. The surah is named after its first noun, in the way many surahs are, but the word carries the subject with it, because what follows is a defence of the revelation against the objections raised to it — that it was invented, that a messenger should not eat and walk in markets, that it should have come down all at once. Naming the surah after the criterion states the case before the arguments begin.',
      bn: 'আল-ফুরকান আসলে ওহীরই একটি নাম: যা সত্য ও মিথ্যাকে আলাদা করে দেয়। সূরার নাম এসেছে তার প্রথম বিশেষ্য থেকে, যেভাবে অনেক সূরার আসে; তবে শব্দটি বিষয়টিকেও সঙ্গে নিয়ে আসে, কারণ এরপর যা আছে তা ওহীর বিরুদ্ধে তোলা আপত্তির জবাব — এটি বানানো, রাসূল কেন খাবার খান ও বাজারে হাঁটেন, কেন পুরোটা একবারে নাযিল হলো না। মানদণ্ডের নামে সূরার নামকরণ যুক্তিতর্ক শুরুর আগেই দাবিটি ঘোষণা করে দেয়।',
    },
    signal: {
      en: 'Expect objections to the Quran answered one by one, signs drawn from shade, wind and water, and a closing portrait of the servants of the Merciful who walk the earth gently.',
      bn: 'কুরআনের বিরুদ্ধে তোলা আপত্তির একে একে জবাব, ছায়া-বাতাস-পানি থেকে নেওয়া নিদর্শন, আর শেষে রহমানের সেই বান্দাদের প্রতিকৃতি যারা পৃথিবীতে নম্রভাবে চলে।',
    },
    alt: [],
    refs: ['25:1'],
  },
  26: {
    meaning: { en: 'The Poets', bn: 'কবিগণ' },
    source: {
      en: 'From the closing verses 26:224-227, where the poets are described as followed by those who wander astray.',
      bn: 'শেষ আয়াতগুলো ২৬:২২৪-২২৭ থেকে, যেখানে বলা হয়েছে কবিদের অনুসরণ করে পথভ্রষ্টরা।',
    },
    why: {
      en: "Two hundred and twenty-seven verses, and the name comes from the last four. Most of the surah is a chain of messengers — Musa before Pharaoh at length, then Ibrahim, Nuh, Hud, Salih, Lut and Shu'ayb, each account closing with the same refrain. Then, at the end, the poets. The closing verses answer the charge that the Prophet was a poet and the Quran was poetry, so the name is not random; it points at the surah's final move. But as a description of the contents it is almost the opposite of accurate.",
      bn: 'দুইশ সাতাশটি আয়াত, আর নাম এসেছে শেষ চারটি থেকে। সূরার বেশিরভাগ রাসূলদের ধারাবাহিক শৃঙ্খল — দীর্ঘভাবে ফেরাউনের সামনে মূসা, তারপর ইবরাহীম, নূহ, হূদ, সালিহ, লূত ও শুআইব, প্রতিটি বৃত্তান্ত শেষ হয় একই পঙ্‌ক্তিতে। তারপর, একেবারে শেষে, কবিরা। ওই শেষ আয়াতগুলো সেই অভিযোগের জবাব দেয় যে নবী একজন কবি আর কুরআন কবিতা; তাই নামটি এলোমেলো নয়, এটি সূরার শেষ চালটির দিকে আঙুল তোলে। তবে বিষয়বস্তুর বর্ণনা হিসেবে এটি প্রায় উল্টো।',
    },
    signal: {
      en: 'Expect messenger after messenger, above all Musa against Pharaoh and his magicians, each account ending with the same two lines — and only at the very end, four verses about poets.',
      bn: 'একের পর এক রাসূল, সবচেয়ে বেশি ফেরাউন ও তার জাদুকরদের মুখোমুখি মূসা, প্রতিটি বৃত্তান্ত শেষ হয় একই দুই পঙ্‌ক্তিতে — আর একেবারে শেষে গিয়ে কবিদের নিয়ে চারটি আয়াত।',
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
      bn: 'একটি পিঁপড়া, একটি আয়াত — আর সূরার নাম হয়ে গেল তার নামে। ওই আয়াতের চারপাশে আছে হুদহুদের সংবাদ, চোখের পলকে আনা সাবার রানির সিংহাসন, তাঁর আত্মসমর্পণ, আগে আগুনের কাছে মূসা, পরে সালিহ ও লূত। এদের যেকোনোটি থেকেই নাম হতে পারত। পিঁপড়াই জিতে গেল, কারণ এটিই সেই একটিমাত্র খুঁটিনাটি যা কেউ ভোলে না: ক্ষুদ্র এক কণ্ঠ শোনা গেল, মহান এক বাদশাহ তা শুনে হাসলেন, আর তারপর এল কৃতজ্ঞতার দোয়া। এ ধরনের চিহ্ন কাজ করে অভ্রান্ত হওয়ার জোরে, গুরুত্বপূর্ণ হওয়ার জোরে নয়।',
    },
    signal: {
      en: "Expect Sulayman's court and the kingdom he was given — speech of birds and ants, the queen of Sheba, her throne and her submission — set among shorter accounts of Musa, Salih and Lut.",
      bn: 'সুলাইমানের দরবার ও তাঁকে দেওয়া রাজত্ব — পাখি ও পিঁপড়ার ভাষা, সাবার রানি, তাঁর সিংহাসন ও আত্মসমর্পণ — বসানো আছে মূসা, সালিহ ও লূতের সংক্ষিপ্ত বৃত্তান্তের মাঝে।',
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
      bn: 'যে শব্দ থেকে সূরার নাম, তা উচ্চারিত হয় সূরার ভেতরেই — যে মুহূর্তে এক পলাতক বসে কাউকে বলছে তার সঙ্গে কী ঘটেছে। শিরোনামের জন্য এটি বিনয়ী উৎস, আর এটিই স্বাভাবিক: নামের শব্দ সেটিই হয় যা আলাদা করে চোখে পড়ে, যা সারসংক্ষেপ করে সেটি নয়। তবে এখানে মিলটি সাধারণের চেয়ে ভালো, কারণ মূসার প্রথম জীবনের সবচেয়ে পূর্ণ ও একটানা বর্ণনা কুরআনে এই সূরাতেই — নদীতে ভাসানো সিন্দুক, ফেরাউনের ঘর, হত্যা, পলায়ন, মাদইয়ানের বছরগুলো — আর কাহিনী বলাই তো এর কাজ।',
    },
    signal: {
      en: 'Expect the early life of Musa in sequence, from infancy to prophethood, followed by Qarun and his treasure as a warning about wealth, and consolation for a Prophet forced to leave his city.',
      bn: 'মূসার প্রথম জীবন ধারাবাহিকভাবে, শৈশব থেকে নবুয়ত পর্যন্ত, তারপর কারূন ও তার ধনভাণ্ডার সম্পদ নিয়ে সতর্কবার্তা হিসেবে, আর নিজ শহর ছাড়তে বাধ্য হওয়া এক নবীর জন্য সান্ত্বনা।',
    },
    alt: [],
    refs: ['28:3', '28:25'],
  },
  29: {
    meaning: { en: 'The Spider', bn: 'মাকড়সা' },
    source: {
      en: 'From 29:41, where those who take protectors besides God are compared to a spider that takes a house, the frailest of houses.',
      bn: '২৯:৪১ আয়াত থেকে, যেখানে আল্লাহ ছাড়া অন্যকে অভিভাবক বানানো লোকদের তুলনা করা হয়েছে সেই মাকড়সার সঙ্গে, যে ঘর বানায় — অথচ ঘরগুলোর মধ্যে সবচেয়ে দুর্বল মাকড়সার ঘর।',
    },
    why: {
      en: 'The spider is mentioned in one verse, as a comparison. The surah is about being tested — whether people who say they believe will be left untested, what to do when parents press a convert, the persecution that drove some to migrate — and the comparison lands in the middle of it: a house that looks like shelter and holds nothing. The image is vivid enough to name a surah of sixty-nine verses in which spiders otherwise play no part. That is how these names work, and this one carries part of the argument with it.',
      bn: 'মাকড়সার উল্লেখ একটিমাত্র আয়াতে, উপমা হিসেবে। সূরার বিষয় পরীক্ষা — যারা বলে আমরা ঈমান এনেছি, তাদের কি পরীক্ষা ছাড়াই ছেড়ে দেওয়া হবে, নতুন ঈমান আনা কারও উপর পিতামাতা চাপ দিলে কী করণীয়, যে নির্যাতন কাউকে কাউকে হিজরতে বাধ্য করেছিল — আর ঠিক এর মাঝখানে এসে পড়ে উপমাটি: এমন এক ঘর যা দেখতে আশ্রয়ের মতো, অথচ কিছুই ধরে রাখে না। দৃশ্যটি এতটাই জীবন্ত যে ঊনসত্তর আয়াতের একটি সূরার নাম হয়ে যায়, যদিও মাকড়সার আর কোনো ভূমিকা এখানে নেই। এই নামগুলো এভাবেই কাজ করে, আর এটি সঙ্গে করে যুক্তিরও একটি অংশ বয়ে আনে।',
    },
    signal: {
      en: 'Expect the question that opens it — do people think they will be left alone because they say they believe — answered through Nuh, Ibrahim, Lut and Shuayb, and through migration and patience.',
      bn: 'শুরুর প্রশ্নটি — মানুষ কি ভাবে, আমরা ঈমান এনেছি বললেই তাদের ছেড়ে দেওয়া হবে — যার জবাব আসে নূহ, ইবরাহীম, লূত ও শুআইবের মধ্য দিয়ে, আর হিজরত ও ধৈর্যের মধ্য দিয়ে।',
    },
    alt: [],
    refs: ['29:41'],
  },
};

if (typeof module !== 'undefined' && module.exports) module.exports = { SURAH_NAME_NOTES, SURAHNAMES_UI };
