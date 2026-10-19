/**
 * Islam -> Mustahabb (Recommended Acts) module.
 *
 * Renders into #mustahabb-container (tab "mustahabb"). Content covers:
 * definition, the principle of reward-without-sin-in-leaving, the sunnahs
 * of the Prophet (dressing right, eating with three fingers, drinking
 * sitting, sleeping on right side, greeting first, smiling), common
 * examples with authentic hadith, Quranic references, and a self-check
 * accordion. Uses the shared bilingual {en, bn} pattern with CI18N
 * fallback for other languages.
 */

const MUSTAHABB_I18N = {
  islam_mustahabb_title: { en: 'Mustahabb (Recommended)', bn: '\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac (\u0989\u09a4\u09cd\u09a4\u09ae)', zh: '\u5609\u884c (Mustahabb)', ja: '\u63a8\u5968\u884c\u70ba\uff08\u30e0\u30b9\u30bf\u30cf\u30d6\uff09', ar: '\u0627\u0644\u0645\u0633\u062a\u062d\u0628', ur: '\u0645\u0633\u062a\u062d\u0628', hi: '\u092e\u0941\u0938\u094d\u0924\u0939\u092c (\u0938\u0930\u093e\u0939\u0928\u0940\u092f)', fa: '\u0645\u0633\u062a\u062d\u0628', id: 'Mustahabb (Sunah)', ms: 'Sunat', tr: 'M\u00fcstehap', fr: 'Mustahabb (Recommand\u00e9)', es: 'Mustahabb (Recomendado)', de: 'Mustahabb (Empfohlen)', ru: '\u041c\u0443\u0441\u0442\u0430\u0445\u0430\u0431\u0431 (\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435)' },
  islam_mustahabb_subtitle: { en: 'Recommended acts — not obligatory, yet every performance earns reward and leaving them carries no sin. Following these sunnahs of the Prophet \ufdfa brings one closer to his blessed example.', bn: '\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u0986\u09ae\u09b2 \u09ab\u09b0\u099c \u09a8\u09af\u09bc, \u09a4\u09ac\u09c1 \u09aa\u09cd\u09b0\u09a4\u09bf\u099f\u09bf \u09aa\u09be\u09b2\u09a8\u09c7 \u09b8\u0993\u09af\u09bc\u09be\u09ac \u0986\u099b\u09c7 \u098f\u09ac\u0982 \u099b\u09c7\u09a1\u09bc\u09c7 \u09a6\u09bf\u09b2\u09c7 \u0995\u09cb\u09a8\u09cb \u0997\u09c1\u09a8\u09be\u09b9 \u09a8\u09c7\u0987\u0964 \u098f\u0987 \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4\u0997\u09c1\u09b2\u09cb \u09aa\u09be\u09b2\u09a8 \u0995\u09b0\u09c7 \u09a8\u09ac\u09c0 \u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09b2\u09cd\u09b2\u09be\u09b9\u09c1 \u0986\u09b2\u09be\u0987\u09b9\u09bf \u0993\u09af\u09bc\u09be\u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09ae-\u098f\u09b0 \u09ac\u09be\u09b0\u09be\u0995\u09be\u09ae\u09af\u09bc \u0986\u09a6\u09b0\u09cd\u09b6\u09c7\u09b0 \u09a8\u09bf\u0995\u099f\u09a4\u09b0 \u09b9\u0993\u09af\u09bc\u09be \u09af\u09be\u09af\u09bc\u0964' },
  islam_mustahabb_grade: { en: 'Grade & Principle', bn: '\u09ae\u09be\u09a8 \u0993 \u09ae\u09c2\u09b2\u09a8\u09c0\u09a4\u09bf' },
};

const MUSTAHABB_ITEMS = [
  { emoji: '\ud83d\udc57',
    titleEn: 'Dress from the Right Side', titleBn: '\u09a1\u09be\u09a8 \u09a6\u09bf\u0995 \u09a5\u09c7\u0995\u09c7 \u09aa\u09cb\u09b6\u09be\u0995 \u09aa\u09b0\u09be',
    descEn: 'The Prophet \ufdfa liked to begin dressing from the right side: right shoe first, right arm through sleeve first (Tirmidhi 1766). "When any of you puts on shoes let him start with the right foot." (Bukhari 5855)',
    descBn: 'নবী ﷺ ডান দিক থেকে পোশাক পরা শুরু করতে পছন্দ করতেন: আগে ডান পায়ের জুতা, জামার আস্তিনে আগে ডান হাত (তিরমিযি ১৭৬৬)। “তোমাদের কেউ জুতা পরলে যেন ডান পা দিয়ে শুরু করে।” (বুখারি ৫৮৫৫)',
    ref: 'Bukhari 5855',
  },
  { emoji: '\ud83c\udf74',
    titleEn: 'Eating with Three Fingers', titleBn: '\u09a4\u09bf\u09a8 \u0986\u0999\u09cd\u0997\u09c1\u09b2 \u09a6\u09bf\u09af\u09bc\u09c7 \u0996\u09be\u0993\u09af\u09bc\u09be',
    descEn: 'The Prophet \ufdfa ate with three fingers (thumb, index, middle) and licked them after eating (Muslim 2032). "When any of you finishes eating let him lick his fingers, for he does not know in which part the blessing lies." (Muslim 2033)',
    descBn: 'নবী ﷺ তিন আঙুলে (বুড়ো আঙুল, তর্জনী ও মধ্যমা) খেতেন, আর খাওয়ার পর আঙুলগুলো চেটে নিতেন (মুসলিম ২০৩২)। “তোমাদের কেউ খাওয়া শেষ করলে যেন আঙুল চেটে নেয়, কারণ সে জানে না খাবারের কোন অংশে বরকত আছে।” (মুসলিম ২০৩৩)',
    ref: 'Muslim 2033',
  },
  { emoji: '\ud83e\udd64',
    titleEn: 'Drinking While Sitting', titleBn: '\u09ac\u09b8\u09c7 \u09aa\u09be\u09a8 \u0995\u09b0\u09be',
    descEn: 'The Prophet \ufdfa forbade drinking while standing. "None of you should drink while standing." (Muslim 2026) Drinking while sitting is therefore mustahabb; since he is also reported to have drunk Zamzam standing (Bukhari 1637), most scholars count drinking while standing as disliked (makruh), not forbidden.',
    descBn: 'নবী ﷺ দাঁড়িয়ে পান করতে নিষেধ করেছেন। “তোমাদের কেউ যেন দাঁড়িয়ে পান না করে।” (মুসলিম ২০২৬) অতএব বসে পান করা মুস্তাহাব; তবে তিনি দাঁড়িয়ে যমযমের পানি পান করেছেন বলেও বর্ণিত আছে (বুখারি ১৬৩৭), তাই অধিকাংশ আলেমের মতে দাঁড়িয়ে পান করা মাকরুহ, হারাম নয়।',
    ref: 'Muslim 2026',
  },
  { emoji: '\ud83d\udecc',
    titleEn: 'Sleeping on the Right Side', titleBn: '\u09a1\u09be\u09a8 \u0995\u09be\u09a4 \u09b9\u09af\u09bc\u09c7 \u0998\u09c1\u09ae\u09be\u09a8\u09cb',
    descEn: '"When you go to bed, perform wudu as for prayer, then lie down on your right side." (Bukhari 247) The Prophet \ufdfa also recommended saying the bedtime du\'a and reciting Ayat al-Kursi for protection.',
    descBn: '“যখন তুমি বিছানায় যাবে, নামাজের অজুর মতো অজু করে নাও, তারপর ডান কাতে শুয়ে পড়ো।” (বুখারি ২৪৭) নবী ﷺ ঘুমের আগের দোয়া পড়তে এবং হেফাজতের জন্য আয়াতুল কুরসি পড়তেও বলেছেন।',
    ref: 'Bukhari 247',
  },
  { emoji: '\ud83d\udc4b',
    titleEn: 'Saying Salaam First', titleBn: '\u0986\u0997\u09c7 \u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09c7\u0993\u09af\u09bc\u09be',
    descEn: '"The people nearest to Allah are those who are first to give salaam." (Abu Dawud 5197) Spreading salaam is a sign of faith and love. "You will not enter Paradise until you believe, and you will not believe until you love one another. Spread salaam among yourselves." (Muslim 54)',
    descBn: '\u201c\u09ae\u09be\u09a8\u09c1\u09b7\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0 \u09b8\u09ac\u099a\u09c7\u09af\u09bc\u09c7 \u09a8\u09bf\u0995\u099f\u09ac\u09b0\u09cd\u09a4\u09c0 \u09a4\u09be\u09b0\u09be, \u09af\u09be\u09b0\u09be \u0986\u0997\u09c7 \u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09c7\u09af\u09bc\u0964\u201d (\u0986\u09ac\u09c1 \u09a6\u09be\u0989\u09a6 \u09eb\u09e7\u09ef\u09ed) \u09b8\u09be\u09b2\u09be\u09ae \u099b\u09dc\u09bf\u09af\u09bc\u09c7 \u09a6\u09c7\u0993\u09af\u09bc\u09be \u0987\u09ae\u09be\u09a8 \u0993 \u09ae\u09c1\u09b9\u09be\u09ac\u09cd\u09ac\u09a4\u09c7\u09b0 \u09b2\u0995\u09cd\u09b7\u09a3\u0964 \u201c\u09a4\u09cb\u09ae\u09b0\u09be \u099c\u09be\u09a8\u09cd\u09a8\u09be\u09a4\u09c7 \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6 \u0995\u09b0\u09ac\u09c7 \u09a8\u09be \u09af\u09a4\u0995\u09cd\u09b7\u09a3 \u09a8\u09be \u0987\u09ae\u09be\u09a8 \u0986\u09a8\u09cb, \u0986\u09b0 \u0987\u09ae\u09be\u09a8 \u0986\u09a8\u09a4\u09c7 \u09aa\u09be\u09b0\u09ac\u09c7 \u09a8\u09be \u09af\u09a4\u0995\u09cd\u09b7\u09a3 \u09a8\u09be \u09aa\u09b0\u09b8\u09cd\u09aa\u09b0\u0995\u09c7 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09cb\u0964 \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u09ae\u09be\u099d\u09c7 \u09b8\u09be\u09b2\u09be\u09ae \u099b\u09dc\u09be\u0993\u0964\u201d (\u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09eb\u09ea)',
    ref: 'Muslim 54',
  },
  { emoji: '\ud83d\ude0a',
    titleEn: 'Smiling at a Fellow Muslim', titleBn: 'মুসলিম ভাইকে দেখে মুচকি হাসা',
    descEn: '"Your smiling in the face of your brother is an act of charity." (Tirmidhi 1956) Even a simple smile when meeting a fellow Muslim counts as sadaqah and spreads goodwill.',
    descBn: '“তোমার ভাইয়ের দিকে তাকিয়ে তোমার মুচকি হাসিও সদকা।” (তিরমিযি ১৯৫৬) মুসলিম ভাইয়ের সাথে দেখা হলে একটুখানি হাসিও সদকা হিসেবে গণ্য হয়, আর এতে পরস্পরের মধ্যে আন্তরিকতা বাড়ে।',
    ref: 'Tirmidhi 1956',
  },
  { emoji: '\ud83e\udd3e',
    titleEn: 'Entering with the Right Foot, Exiting with the Left', titleBn: 'ডান পায়ে ঢোকা, বাম পায়ে বের হওয়া',
    descEn: 'It is a sunnah to enter the masjid with the right foot and leave with the left (reported from Anas RA by al-Hakim; al-Bukhari notes that Ibn \u2019Umar did so). The Prophet \ufdfa liked to begin with the right in purification, combing his hair, putting on shoes and all his affairs (Bukhari 168), so entering the home and eating also begin with the right. Scholars teach entering the toilet with the left foot.',
    descBn: 'ডান পা দিয়ে মসজিদে ঢোকা আর বাম পা দিয়ে বের হওয়া সুন্নত (আনাস (রাঃ) থেকে হাকিম বর্ণনা করেছেন; বুখারি উল্লেখ করেছেন, ইবনে উমর (রাঃ) এমন করতেন)। নবী ﷺ পবিত্রতা অর্জন, চুল আঁচড়ানো, জুতা পরা, এমনকি সব কাজই ডান দিক থেকে শুরু করতে পছন্দ করতেন (বুখারি ১৬৮); তাই ঘরে ঢোকা আর খাওয়াও ডান দিক থেকে শুরু করা হয়। আলেমরা শেখান, টয়লেটে ঢুকতে হয় বাম পা দিয়ে।',
    ref: 'Bukhari 168',
  },
  { emoji: '\ud83e\udea5',
    titleEn: 'Using the Miswak (Tooth-Stick)', titleBn: '\u09ae\u09bf\u09b8\u0993\u09af\u09bc\u09be\u0995 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0',
    descEn: '"The siwak is a purification for the mouth and a means of the Lord\'s pleasure." (Nasai 5) The Prophet \ufdfa emphasised it before every prayer and especially at the time of wudu.',
    descBn: '“মিসওয়াক মুখ পবিত্র করে এবং রবকে সন্তুষ্ট করে।” (নাসাই ৫) নবী ﷺ প্রতি নামাজের আগে, বিশেষ করে অজুর সময় মিসওয়াক করার উপর জোর দিতেন।',
    ref: 'Nasai 5',
  },
  { emoji: '\ud83c\udf7d\ufe0f',
    titleEn: 'Saying Bismillah Before Eating', titleBn: '\u0996\u09be\u0993\u09af\u09bc\u09be\u09b0 \u0986\u0997\u09c7 \u09ac\u09bf\u09b8\u09ae\u09bf\u09b2\u09cd\u09b2\u09be\u09b9 \u09ac\u09b2\u09be',
    descEn: 'The Prophet \ufdfa taught the young \'Umar ibn Abi Salamah RA: "Say Bismillah, eat with your right hand, and eat from what is near you." (Bukhari 5376, Muslim 2022) If one forgets at the start, one says "Bismillahi awwalahu wa akhirahu."',
    descBn: 'নবী ﷺ ছোট্ট উমর ইবনে আবি সালামা (রাঃ)-কে শিখিয়েছিলেন: “বিসমিল্লাহ বলো, ডান হাতে খাও এবং তোমার সামনের দিক থেকে খাও।” (বুখারি ৫৩৭৬, মুসলিম ২০২২) শুরুতে বলতে ভুলে গেলে বলবেন: “বিসমিল্লাহি আওয়ালাহু ওয়া আখিরাহু।”',
    ref: 'Bukhari 5376',
  },
  { emoji: '\ud83d\udcd6',
    titleEn: 'Ayat al-Kursi After Each Prayer', titleBn: '\u09aa\u09cd\u09b0\u09a4\u09bf \u09a8\u09be\u09ae\u09be\u099c\u09c7\u09b0 \u09aa\u09b0 \u0986\u09df\u09be\u09a4\u09c1\u09b2 \u0995\u09c1\u09b0\u09b8\u09bf',
    descEn: 'The Prophet \ufdfa said: "Whoever recites Ayat al-Kursi (2:255) after every prescribed prayer, nothing keeps him from Paradise except death." (an-Nasai, al-Sunan al-Kubra; authenticated by al-Albani) A weighty verse of pure tawhid.',
    descBn: 'নবী ﷺ বলেছেন: “যে প্রতিটি ফরজ নামাজের পর আয়াতুল কুরসি (২:২৫৫) পড়ে, মৃত্যু ছাড়া আর কিছুই তার জান্নাতে যাওয়ার পথে বাধা হয়ে থাকে না।” (নাসাই, আস-সুনানুল কুবরা; আলবানি সহিহ বলেছেন) খাঁটি তাওহীদে ভরা এক মহিমান্বিত আয়াত।',
    ref: '2:255',
  },
  { emoji: '\ud83d\udcd6',
    titleEn: 'Surah al-Mulk Before Sleep', titleBn: '\u0998\u09c1\u09ae\u09be\u09a8\u09cb\u09b0 \u0986\u0997\u09c7 \u09b8\u09c2\u09b0\u09be \u0986\u09b2-\u09ae\u09c1\u09b2\u0995',
    descEn: 'The Prophet \ufdfa said there is a surah of thirty verses that intercedes for its reciter until he is forgiven: "Tabarak alladhi biyadihi al-mulk" (Surah al-Mulk, 67). (Tirmidhi 2891, hasan) It is also reported that he would not sleep until he had recited it (Tirmidhi 2892).',
    descBn: 'নবী ﷺ বলেছেন, তিরিশ আয়াতের একটি সূরা তার পাঠকের জন্য সুপারিশ করতে থাকবে, যতক্ষণ না তাকে মাফ করা হয়: “তাবারাকাল্লাজি বিয়াদিহিল মুলক” (সূরা আল-মুলক, ৬৭)। (তিরমিযি ২৮৯১, হাসান) আরও বর্ণিত আছে, তিনি এ সূরা না পড়ে ঘুমাতেন না (তিরমিযি ২৮৯২)।',
    ref: '67:1',
  },
  { emoji: '\ud83c\udf05',
    titleEn: 'Morning & Evening Adhkar', titleBn: 'সকাল-সন্ধ্যার জিকির',
    descEn: 'Reciting the prescribed adhkar after Fajr and before Maghrib is a fortress of protection. The Quran commands: "O you who believe, remember Allah with much remembrance, and glorify Him morning and evening." (33:41-42)',
    descBn: 'ফজরের পর ও মাগরিবের আগে নির্দিষ্ট জিকিরগুলো পড়া যেন হেফাজতের এক দুর্গ। কুরআনের হুকুম: “হে ইমানদারগণ! তোমরা আল্লাহকে বেশি করে স্মরণ করো এবং সকাল-সন্ধ্যায় তাঁর পবিত্রতা ঘোষণা করো।” (৩৩:৪১-৪২)',
    ref: '33:41',
  },
  { emoji: '\ud83c\udfe0',
    titleEn: 'Du\'a on Entering & Leaving Home', titleBn: '\u0998\u09b0\u09c7 \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6 \u0993 \u09ac\u09c7\u09b0 \u09b9\u0993\u09af\u09bc\u09be\u09b0 \u09a6\u09cb\u09df\u09be',
    descEn: 'On leaving home say: "Bismillah, tawakkaltu \'ala Allah, wa la hawla wa la quwwata illa billah." One is then told: you are guided, protected, and the shaytan turns away. (Abu Dawud 5095, Tirmidhi 3426, hasan) On entering, mention Allah’s name, and the shaytan finds no place to spend the night there. (Muslim 2018)',
    descBn: 'ঘর থেকে বের হওয়ার সময় বলবেন: “বিসমিল্লাহি, তাওয়াক্কালতু আলাল্লাহি, ওয়া লা হাওলা ওয়া লা কুওয়াতা ইল্লা বিল্লাহ।” তখন তাকে বলা হয়: তোমাকে হিদায়াত দেওয়া হলো, হেফাজত করা হলো; আর শয়তান তার কাছ থেকে সরে যায়। (আবু দাউদ ৫০৯৫, তিরমিযি ৩৪২৬, হাসান) ঘরে ঢোকার সময় আল্লাহর নাম নিলে শয়তান সেখানে রাত কাটানোর জায়গা পায় না। (মুসলিম ২০১৮)',
    ref: 'Abu Dawud 5095',
  },
  { emoji: '\ud83d\udd4c',
    titleEn: 'Du\'a on Entering & Leaving the Masjid', titleBn: '\u09ae\u09b8\u099c\u09bf\u09a6\u09c7 \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6 \u0993 \u09ac\u09c7\u09b0 \u09b9\u0993\u09df\u09be\u09b0 \u09a6\u09cb\u09df\u09be',
    descEn: 'On entering the masjid say: "Allahumma iftah li abwaba rahmatik" (O Allah, open for me the gates of Your mercy); on leaving: "Allahumma inni as\'aluka min fadlik" (O Allah, I ask You of Your bounty). (Muslim 713)',
    descBn: 'মসজিদে ঢোকার সময় বলবেন: “আল্লাহুম্মা ইফতাহলী আবওয়াবা রাহমাতিক” (হে আল্লাহ, আমার জন্য আপনার রহমতের দরজাগুলো খুলে দিন); আর বের হওয়ার সময়: “আল্লাহুম্মা ইন্নী আসআলুকা মিন ফাদলিক” (হে আল্লাহ, আমি আপনার অনুগ্রহ চাই)। (মুসলিম ৭১৩)',
    ref: 'Muslim 713',
  },
  { emoji: '\ud83d\udeaa',
    titleEn: 'Du\'a Before Entering the Toilet', titleBn: '\u09b6\u09cc\u099a\u09be\u0997\u09be\u09b0\u09c7 \u09aa\u09cd\u09b0\u09ac\u09c7\u09b6\u09c7\u09b0 \u0986\u0997\u09c7 \u09a6\u09cb\u09df\u09be',
    descEn: 'Before entering say: "Allahumma inni a\'udhu bika min al-khubuthi wal-khaba\'ith" (O Allah, I seek refuge in You from the male and female devils). (Bukhari 142, Muslim 375) On exiting say: "Ghufranak."',
    descBn: 'ঢোকার আগে বলবেন: “আল্লাহুম্মা ইন্নী আউজু বিকা মিনাল খুবুসি ওয়াল খাবাইস” (হে আল্লাহ, আমি পুরুষ ও নারী শয়তান থেকে আপনার আশ্রয় চাই)। (বুখারি ১৪২, মুসলিম ৩৭৫) বের হয়ে বলবেন: “গুফরানাকা।”',
    ref: 'Bukhari 142',
  },
  { emoji: '\ud83e\udd32',
    titleEn: 'Supplicating Between Adhan and Iqamah', titleBn: '\u0986\u09af\u09be\u09a8 \u0993 \u0987\u0995\u09be\u09ae\u09a4\u09c7\u09b0 \u09ae\u09be\u099d\u09c7 \u09a6\u09cb\u09df\u09be',
    descEn: 'The Prophet \ufdfa said: "The supplication made between the adhan and iqamah is not rejected." (Abu Dawud 521, Tirmidhi 212, hasan sahih) A blessed window to ask Allah for one\'s needs.',
    descBn: 'নবী ﷺ বলেছেন: “আযান ও ইকামতের মাঝে করা দোয়া ফিরিয়ে দেওয়া হয় না।” (আবু দাউদ ৫২১, তিরমিযি ২১২, হাসান সহীহ) আল্লাহর কাছে নিজের প্রয়োজন চাওয়ার এ এক বরকতময় সময়।',
    ref: 'Tirmidhi 212',
  },
  { emoji: '\ud83c\udf1e',
    titleEn: 'Sitting After Fajr Until Sunrise', titleBn: '\u09ab\u099c\u09b0\u09c7\u09b0 \u09aa\u09b0 \u09b8\u09c2\u09b0\u09cd\u09af\u09cb\u09a6\u09df \u09aa\u09b0\u09cd\u09af\u09a8\u09cd\u09a4 \u09ac\u09b8\u09be',
    descEn: 'The Prophet \ufdfa said: "Whoever prays Fajr in congregation, then sits remembering Allah until sunrise, then prays two rak\'ahs, has a reward like that of a complete Hajj and Umrah." (Tirmidhi 586, hasan)',
    descBn: 'নবী ﷺ বলেছেন: “যে জামাতে ফজর পড়ে, তারপর সূর্য ওঠা পর্যন্ত বসে আল্লাহর জিকির করে, তারপর দুই রাকাত পড়ে, সে একটি পূর্ণ হজ ও উমরার সমান সওয়াব পায়।” (তিরমিযি ৫৮৬, হাসান)',
    ref: 'Tirmidhi 586',
  },
  { emoji: '\ud83e\udd32',
    titleEn: 'Giving Sadaqah Secretly', titleBn: '\u0997\u09cb\u09aa\u09a8\u09c7 \u09b8\u09a6\u0995\u09be \u09a6\u09c7\u0993\u09af\u09bc\u09be',
    descEn: 'The Quran says: "If you disclose your charities, that is good; but if you conceal them and give to the poor, it is better for you." (2:271) Among the seven shaded on Judgment Day is one whose left hand knows not what his right gave. (Bukhari 660)',
    descBn: 'কুরআন বলে: “যদি তোমরা প্রকাশ্যে সদকা দাও তা ভালো; আর যদি গোপনে দরিদ্রদের দাও তা তোমাদের জন্য আরও উত্তম।” (২:২৭১) কিয়ামতের দিন যে সাত শ্রেণির মানুষ আরশের ছায়া পাবে, তাদের একজন সেই ব্যক্তি, যে এত গোপনে দান করে যে তার বাম হাতও জানে না ডান হাত কী দিল। (বুখারি ৬৬০)',
    ref: '2:271',
  },
  { emoji: '\ud83e\udd27',
    titleEn: 'Saying "Yarhamuk Allah" to a Sneezer', titleBn: '\u09b9\u09be\u0981\u099a\u09bf\u09a6\u09be\u09a4\u09be\u0995\u09c7 \u201c\u0987\u09df\u09be\u09b0\u09b9\u09be\u09ae\u09c1\u0995\u09be\u09b2\u09cd\u09b2\u09be\u09b9\u201d \u09ac\u09b2\u09be',
    descEn: 'The Prophet \ufdfa said: when one of you sneezes and says "al-hamdulillah," it is a duty upon every Muslim who hears him to reply "yarhamuk Allah" (may Allah have mercy on you). The sneezer then says "yahdikumullah wa yuslih balakum." (Bukhari 6223, 6224) Scholars differ on whether this reply is obligatory or a recommended sunnah.',
    descBn: 'নবী ﷺ বলেছেন: তোমাদের কেউ হাঁচি দিয়ে “আলহামদুলিল্লাহ” বললে, যে মুসলিম তা শোনে, তার কর্তব্য “ইয়ারহামুকাল্লাহ” (আল্লাহ তোমার উপর রহম করুন) বলা। হাঁচিদাতা তখন বলবে: “ইয়াহদিকুমুল্লাহু ওয়া ইউসলিহু বালাকুম।” (বুখারি ৬২২৩, ৬২২৪) এই জবাব ওয়াজিব না সুন্নত, তা নিয়ে আলেমদের মতভেদ আছে।',
    ref: 'Bukhari 6224',
  },
  { emoji: '\ud83c\udf19',
    titleEn: 'Fasting on Mondays and Thursdays', titleBn: '\u09b8\u09cb\u09ae \u0993 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b0\u09cb\u099c\u09be',
    descEn: 'The Prophet \ufdfa said: "Deeds are presented to Allah on Mondays and Thursdays, and I like my deeds to be presented while I am fasting." (Tirmidhi 747) He was regular in fasting these two days. (Tirmidhi 745)',
    descBn: 'নবী ﷺ বলেছেন: “সোম ও বৃহস্পতিবার আমলসমূহ আল্লাহর কাছে পেশ করা হয়, আর আমি পছন্দ করি রোজা অবস্থায় আমার আমল পেশ হোক।” (তিরমিযি ৭৪৭) তিনি এই দুই দিন নিয়মিত রোজা রাখতেন। (তিরমিযি ৭৪৫)',
    ref: 'Tirmidhi 747',
  },
  { emoji: '\ud83d\udd4b',
    titleEn: 'Abundant Salawat on Friday', titleBn: '\u099c\u09c1\u09ae\u09c1\u0986\u09b0 \u09a6\u09bf\u09a8 \u09ac\u09c7\u09b6\u09bf \u09a6\u09b0\u09c1\u09a6',
    descEn: 'The Prophet \ufdfa said: "Increase your salawat upon me on Friday, for your salawat are presented to me." (Abu Dawud 1047, hasan) Sending blessings on the Prophet brings the reciter tenfold mercy from Allah. (Muslim 408)',
    descBn: 'নবী ﷺ বলেছেন: “জুমুআর দিন আমার উপর বেশি করে দরুদ পড়ো, কারণ তোমাদের দরুদ আমার কাছে পেশ করা হয়।” (আবু দাউদ ১০৪৭, হাসান) নবীর উপর একবার দরুদ পড়লে আল্লাহ পাঠকারীর উপর দশবার রহমত পাঠান। (মুসলিম ৪০৮)',
    ref: 'Abu Dawud 1047',
  },
  { emoji: '\ud83e\ude7a',
    titleEn: 'Visiting the Sick', titleBn: '\u09b0\u09cb\u0997\u09c0 \u09a6\u09c7\u0996\u09a4\u09c7 \u09af\u09be\u0993\u09af\u09bc\u09be',
    descEn: 'The Prophet \ufdfa listed visiting the sick among the rights a Muslim owes his brother. (Bukhari 1240) "No Muslim visits a sick Muslim in the morning but seventy thousand angels send blessings upon him until evening." (Tirmidhi 969, hasan)',
    descBn: 'নবী ﷺ রোগী দেখতে যাওয়াকে এক মুসলিমের উপর আরেক মুসলিমের হক বলে গণ্য করেছেন। (বুখারি ১২৪০) “যে মুসলিম সকালে কোনো অসুস্থ মুসলিমকে দেখতে যায়, সত্তর হাজার ফেরেশতা সন্ধ্যা পর্যন্ত তার জন্য রহমতের দোয়া করতে থাকে।” (তিরমিযি ৯৬৯, হাসান)',
    ref: 'Bukhari 1240',
  },
  { emoji: '🕋',
    titleEn: 'Fasting on the Day of Arafah', titleBn: 'আরাফার দিনে রোজা',
    descEn: 'The Prophet ﷺ was asked about fasting on the Day of Arafah (9th Dhul-Hijjah) and said, "It expiates the sins of the previous year and the coming year." (Muslim 1162) It is recommended for those not performing Hajj.',
    descBn: 'নবী ﷺ-কে আরাফার দিনের (৯ জিলহজ) রোজা সম্পর্কে জিজ্ঞাসা করা হলে তিনি বলেন, "এটি আগের এক বছর ও পরের এক বছরের গুনাহের কাফফারা।" (মুসলিম ১১৬২) যারা হজ পালন করছেন না, তাদের জন্য এ রোজা মুস্তাহাব।',
    ref: 'Muslim 1162',
  },
  { emoji: '🌙',
    titleEn: 'Fasting on the Day of Ashura', titleBn: 'আশুরার দিনে রোজা',
    descEn: 'The Prophet ﷺ said about fasting Ashura (10th Muharram), "It expiates the sins of the past year." (Muslim 1162) He intended to also fast the 9th to differ from the People of the Book. (Muslim 1134)',
    descBn: 'নবী ﷺ আশুরার (১০ মুহাররম) রোজা সম্পর্কে বলেছেন, "এটি আগের এক বছরের গুনাহের কাফফারা।" (মুসলিম ১১৬২) আহলে কিতাবের সাথে পার্থক্য রাখতে তিনি ৯ তারিখেও রোজা রাখার ইচ্ছা করেছিলেন। (মুসলিম ১১৩৪)',
    ref: 'Muslim 1162',
  },
  { emoji: '🌅',
    titleEn: 'Praying the Duha (Forenoon) Prayer', titleBn: 'চাশতের (দুহা) নামাজ',
    descEn: 'The Prophet ﷺ said, "Every morning a charity is due on every joint of you... and two rak\'ahs of Duha suffice for all of that." (Muslim 720) The forenoon prayer, offered after sunrise until before midday, is a beloved sunnah.',
    descBn: 'নবী ﷺ বলেছেন, "প্রতিদিন সকালে তোমাদের প্রতিটি জোড়ার উপর সদকা ওয়াজিব হয়... আর দুহার দুই রাকাত নামাজ তার সবটুকুর জন্য যথেষ্ট।" (মুসলিম ৭২০) সূর্য ওঠার পর থেকে দুপুরের আগ পর্যন্ত পড়া এই নামাজ নবীজির প্রিয় একটি সুন্নত।',
    ref: 'Muslim 720',
  },
  { emoji: '🌌',
    titleEn: 'Praying Tahajjud (the Night Prayer)', titleBn: 'তাহাজ্জুদ (রাতের নামাজ)',
    descEn: 'Allah says, "And from the night, pray with it as additional worship for you; it is expected that your Lord will raise you to a praised station." (17:79) The Prophet ﷺ said, "The best prayer after the obligatory is the night prayer." (Muslim 1163)',
    descBn: 'আল্লাহ বলেন, "রাতের কিছু অংশে তাহাজ্জুদ পড়ো তোমার জন্য অতিরিক্ত ইবাদত হিসেবে; আশা করা যায় তোমার রব তোমাকে প্রশংসিত স্থানে অধিষ্ঠিত করবেন।" (১৭:৭৯) নবী ﷺ বলেছেন, "ফরজের পর সর্বোত্তম নামাজ হলো রাতের নামাজ।" (মুসলিম ১১৬৩)',
    ref: '17:79',
  },
  { emoji: '📣',
    titleEn: 'Responding to the Adhan and Asking for the Wasilah', titleBn: 'আজানের জবাব ও ওসিলার দোয়া',
    descEn: 'The Prophet ﷺ said, "When you hear the adhan, repeat what the muezzin says," (Bukhari 611) then ask Allah for the wasilah for the Prophet. "Whoever says that upon hearing the call, my intercession will be his on the Day of Resurrection." (Bukhari 614)',
    descBn: 'নবী ﷺ বলেছেন, "যখন আজান শোনো, মুয়াজ্জিন যা বলে তোমরাও তা-ই বলো।" (বুখারি ৬১১) তারপর নবীর জন্য আল্লাহর কাছে ওসিলা চাইতে হয়। "যে আজান শুনে এটা বলবে, কিয়ামতের দিন আমার শাফায়াত তার জন্য অবধারিত।" (বুখারি ৬১৪)',
    ref: 'Bukhari 614',
  },
  { emoji: '🤍',
    titleEn: 'Wearing White Clothing', titleBn: 'সাদা পোশাক পরা',
    descEn: 'The Prophet ﷺ said, "Wear white clothing, for it is among the best of your garments, and shroud your dead in it." (Abu Dawud 4061, Tirmidhi 994, sahih) White is especially recommended for men and on Fridays.',
    descBn: 'নবী ﷺ বলেছেন, "তোমরা সাদা পোশাক পরো, কারণ এটা তোমাদের সবচেয়ে ভালো পোশাকের মধ্যে একটি, আর এ কাপড়েই তোমাদের মৃতদের কাফন দাও।" (আবু দাউদ ৪০৬১, তিরমিজি ৯৯৪, সহিহ) বিশেষ করে পুরুষদের জন্য এবং জুমার দিনে সাদা পোশাক মুস্তাহাব।',
    ref: 'Abu Dawud 4061',
  },
  { emoji: '🕌',
    titleEn: 'Two Rak\'ahs on Entering the Masjid (Tahiyyat al-Masjid)', titleBn: 'মসজিদে ঢুকে দুই রাকাত (তাহিয়্যাতুল মসজিদ)',
    descEn: 'The Prophet ﷺ said, "When one of you enters the masjid, let him not sit until he prays two rak\'ahs." (Bukhari 444, Muslim 714) These two rak\'ahs are a greeting to the house of Allah before sitting.',
    descBn: 'নবী ﷺ বলেছেন, "তোমাদের কেউ মসজিদে ঢুকলে দুই রাকাত না পড়া পর্যন্ত যেন না বসে।" (বুখারি ৪৪৪, মুসলিম ৭১৪) এই দুই রাকাত যেন বসার আগে আল্লাহর ঘরকে সালাম জানানো।',
    ref: 'Bukhari 444',
  },
  { emoji: '🤲',
    titleEn: 'Praying Salat al-Istikharah Before Decisions', titleBn: 'সিদ্ধান্তের আগে ইস্তিখারার নামাজ',
    descEn: 'Jabir RA said, "The Prophet ﷺ used to teach us the istikharah for all our affairs just as he taught us a surah of the Quran." (Bukhari 1162) One prays two rak\'ahs, then supplicates for Allah to choose what is good in any lawful undertaking.',
    descBn: 'জাবির (রাঃ) বলেন, "নবী ﷺ আমাদের সব বিষয়ে ইস্তিখারা এমনভাবে শেখাতেন, যেভাবে কুরআনের সূরা শেখাতেন।" (বুখারি ১১৬২) দুই রাকাত নামাজ পড়ে দোয়া করবেন, যেন যেকোনো জায়েজ কাজে আল্লাহ কল্যাণকর দিকটাই বেছে দেন।',
    ref: 'Bukhari 1162',
  },
  { emoji: '🙌',
    titleEn: 'Praising Allah After Eating and Drinking', titleBn: 'খাওয়া ও পানের পর আল্লাহর প্রশংসা করা',
    descEn: 'The Prophet ﷺ said, "Indeed Allah is pleased with His servant who eats a meal and praises Him for it, and drinks a drink and praises Him for it." (Muslim 2734) A reported du\'a is: "Alhamdulillahi alladhi at\'amani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah." (Abu Dawud 4023)',
    descBn: 'নবী ﷺ বলেছেন, "নিশ্চয়ই আল্লাহ সেই বান্দার প্রতি সন্তুষ্ট হন যে খাবার খেয়ে তাঁর প্রশংসা করে এবং পানীয় পান করে তাঁর প্রশংসা করে।" (মুসলিম ২৭৩৪) বর্ণিত একটি দোয়া: "আলহামদুলিল্লাহিল্লাযি আতআমানি হাযা ওয়া রাযাকানিহি মিন গায়রি হাওলিম মিন্নি ওয়া লা কুওয়াতিন।" (আবু দাউদ ৪০২৩)',
    ref: 'Muslim 2734',
  },
  { emoji: '🥛',
    titleEn: 'Drinking in Three Breaths', titleBn: 'তিন শ্বাসে পান করা',
    descEn: 'Anas RA said, "The Prophet ﷺ used to breathe three times when drinking," and he said it is more thirst-quenching, wholesome and healthy. (Bukhari 5631, Muslim 2028) One removes the vessel from the mouth to breathe outside it, saying Bismillah at the start and Alhamdulillah at the end.',
    descBn: 'আনাস (রাঃ) বলেন, "নবী ﷺ পান করার সময় তিনবার শ্বাস নিতেন।" তিনি বলেছেন, এতে তৃষ্ণা ভালোভাবে মেটে, আর তা বেশি তৃপ্তিদায়ক ও স্বাস্থ্যকর। (বুখারি ৫৬৩১, মুসলিম ২০২৮) শ্বাস নেওয়ার সময় পাত্র মুখ থেকে সরিয়ে বাইরে শ্বাস নেবেন; শুরুতে বিসমিল্লাহ আর শেষে আলহামদুলিল্লাহ বলবেন।',
    ref: 'Bukhari 5631',
  },
  { emoji: '🚿',
    titleEn: 'Ghusl, Perfume and Best Clothes for Jumu\'ah', titleBn: 'জুমার জন্য গোসল, সুগন্ধি ও উত্তম পোশাক',
    descEn: 'The Prophet ﷺ said, "Whoever performs ghusl on Friday, purifies himself as much as he can, applies oil or perfume from his house, then goes out... his sins between that Friday and the previous one are forgiven." (Bukhari 883) The Friday ghusl is strongly emphasised (sunnah muakkadah for the majority; some scholars hold it obligatory).',
    descBn: 'নবী ﷺ বলেছেন, "যে ব্যক্তি জুমার দিন গোসল করে, সাধ্যমতো পবিত্রতা অর্জন করে, ঘরের তেল বা সুগন্ধি লাগায়, তারপর বের হয়... তার সেই জুমা ও আগের জুমার মাঝের গুনাহ মাফ করে দেওয়া হয়।" (বুখারি ৮৮৩) জুমার গোসলের উপর খুব জোর দেওয়া হয়েছে (অধিকাংশ আলেমের মতে সুন্নতে মুয়াক্কাদা; কিছু আলেম ওয়াজিব বলেছেন)।',
    ref: 'Bukhari 883',
  },
  { emoji: '🚶',
    titleEn: 'Walking to the Mosque for Prayer', titleBn: 'নামাজের জন্য মসজিদে হেঁটে যাওয়া',
    descEn: 'The Prophet ﷺ said, "Whoever purifies himself in his house then walks to one of the houses of Allah to perform a prescribed prayer — one of his steps erases a sin and the other raises him a degree." (Muslim 666) He gave glad tidings of complete light on the Day of Resurrection to those who walk to the mosques in darkness. (Abu Dawud 561)',
    descBn: 'নবী ﷺ বলেছেন, "যে ব্যক্তি নিজ ঘরে পবিত্র হয়ে আল্লাহর কোনো ঘরে ফরজ নামাজ পড়তে হেঁটে যায়, তার এক কদম একটি গুনাহ মুছে দেয়, আর অন্য কদম তার মর্যাদা এক ধাপ বাড়িয়ে দেয়।" (মুসলিম ৬৬৬) অন্ধকারে যারা হেঁটে মসজিদে যায়, তিনি তাদের কিয়ামতের দিন পূর্ণ নূরের সুসংবাদ দিয়েছেন। (আবু দাউদ ৫৬১)',
    ref: 'Muslim 666',
  },
  { emoji: '😴',
    titleEn: 'Taking a Midday Nap (Qaylulah)', titleBn: 'দুপুরে কায়লুলা (হালকা ঘুম)',
    descEn: 'A short rest around midday is a sunnah that helps one rise for night worship. Sahl ibn Sa\'d RA said, "We would not take our qaylulah nor eat lunch except after the Jumu\'ah prayer." (Bukhari 939, Muslim 859) It is also reported: "Take a midday nap, for the shayatin do not nap." (Sahih al-Jami 4431, hasan)',
    descBn: 'দুপুরের দিকে একটু শুয়ে বিশ্রাম নেওয়া সুন্নত; এতে রাতে ইবাদতের জন্য ওঠা সহজ হয়। সাহল ইবনে সাদ (রাঃ) বলেন, "আমরা জুমার নামাজের পরেই কায়লুলা করতাম ও দুপুরের খাবার খেতাম।" (বুখারি ৯৩৯, মুসলিম ৮৫৯) আরও বর্ণিত আছে: "তোমরা দুপুরে একটু ঘুমিয়ে নাও, কারণ শয়তান দুপুরে ঘুমায় না।" (সহিহুল জামি ৪৪৩১, হাসান)',
    ref: 'Bukhari 939',
  },
  { emoji: '🕊️',
    titleEn: 'Reconciling Between People', titleBn: 'মানুষের মধ্যে মীমাংসা করে দেওয়া',
    descEn: 'The Prophet ﷺ said, "Shall I not tell you of something more virtuous in degree than fasting, prayer and charity? Setting right discord between people, for the corruption of mutual relations is the shaver [of religion]." (Abu Dawud 4919, Tirmidhi 2509, sahih) Allah says, "So reconcile between your brothers." (49:10)',
    descBn: 'নবী ﷺ বলেছেন, "আমি কি তোমাদের রোজা, নামাজ ও সদকার চেয়েও বড় মর্যাদার কাজের কথা বলব না? তা হলো মানুষের মধ্যকার বিবাদ মিটিয়ে দেওয়া, কারণ পারস্পরিক সম্পর্ক নষ্ট হলে তা দ্বীনকে চেঁছে ফেলে।" (আবু দাউদ ৪৯১৯, তিরমিজি ২৫০৯, সহিহ) আল্লাহ বলেন, "তোমরা তোমাদের ভাইদের মধ্যে মীমাংসা করে দাও।" (৪৯:১০)',
    ref: 'Abu Dawud 4919',
  },
];

const MUSTAHABB_QUR = [
  { ref: '3:31', en: '"Say [O Muhammad]: If you love Allah, then follow me; Allah will love you and forgive your sins."', bn: '\u201c\u09ac\u09b2\u09c1\u09a8: \u09af\u09a6\u09bf \u09a4\u09cb\u09ae\u09b0\u09be \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u0995\u09c7 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8, \u09a4\u09be\u09b9\u09b2\u09c7 \u0986\u09ae\u09be\u0995\u09c7 \u0985\u09a8\u09c1\u09b8\u09b0\u09a3 \u0995\u09b0\u09cb; \u0986\u09b2\u09cd\u09b2\u09be\u09b9 \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09ac\u09c7\u09a8 \u0993 \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u0997\u09c1\u09a8\u09be\u09b9 \u09ae\u09be\u09ab \u0995\u09b0\u09ac\u09c7\u09a8\u0964\u201d' },
  { ref: '33:21', en: '"There has certainly been for you in the Messenger of Allah an excellent pattern for anyone whose hope is in Allah and the Last Day."', bn: '\u201c\u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0 \u09b0\u09be\u09b8\u09c2\u09b2\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0989\u09a4\u09cd\u09a4\u09ae \u0986\u09a6\u09b0\u09cd\u09b6 \u09b0\u09af\u09bc\u09c7\u099b\u09c7 \u09a4\u09be\u09a6\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09af\u09be\u09a6\u09c7\u09b0 \u0986\u09b2\u09cd\u09b2\u09be\u09b9 \u0993 \u0986\u0996\u09c7\u09b0\u09be\u09a4\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf \u0986\u09b6\u09be \u0986\u099b\u09c7\u0964\u201d' },
  { ref: '4:80', en: '"Whoever obeys the Messenger has obeyed Allah; and whoever turns away — then We have not sent you, [O Muhammad], over them as a guardian."', bn: '\u201c\u09af\u09c7 \u09b0\u09be\u09b8\u09c2\u09b2\u09c7\u09b0 \u0986\u09a8\u09c1\u0997\u09a4\u09cd\u09af \u0995\u09b0\u09b2 \u09b8\u09c7 \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0\u0987 \u0986\u09a8\u09c1\u0997\u09a4\u09cd\u09af \u0995\u09b0\u09b2; \u0986\u09b0 \u09af\u09c7 \u09ae\u09c1\u0996 \u09ab\u09bf\u09b0\u09bf\u09af\u09bc\u09c7 \u09a8\u09bf\u09b2 \u2014 \u0986\u09ae\u09b0\u09be \u09a4\u09cb\u09ae\u09be\u0995\u09c7 \u09a4\u09be\u09a6\u09c7\u09b0 \u0989\u09aa\u09b0 \u09aa\u09be\u09b9\u09be\u09b0\u09be\u09a6\u09be\u09b0 \u09a8\u09bf\u09af\u09bc\u09cb\u0997 \u0995\u09b0\u09bf\u09a8\u09bf\u0964\u201d' },
  { ref: '59:7', en: '"And whatever the Messenger gives you — take it; and what he forbids you — refrain from it."', bn: '\u201c\u09b0\u09be\u09b8\u09c2\u09b2 \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0\u0995\u09c7 \u09af\u09be \u09a6\u09bf\u09af\u09bc\u09c7\u099b\u09c7\u09a8 \u09a4\u09be \u0997\u09cd\u09b0\u09b9\u09a3 \u0995\u09b0\u09cb, \u0986\u09b0 \u09af\u09be \u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0\u0995\u09c7 \u09a8\u09bf\u09b7\u09c7\u09a7 \u0995\u09b0\u09c7\u099b\u09c7\u09a8 \u09a4\u09be \u09a5\u09c7\u0995\u09c7 \u09ac\u09bf\u09b0\u09a4 \u09a5\u09be\u0995\u09cb\u0964\u201d' },
  { ref: '2:195', en: '"And spend in the way of Allah and do not throw yourselves with your own hands into destruction [by refraining]. And do good; indeed Allah loves the doers of good."', bn: '\u201c\u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0 \u09aa\u09a5\u09c7 \u09ac\u09cd\u09af\u09af\u09bc \u0995\u09b0\u09cb \u0993 \u09a8\u09bf\u099c\u09c7\u09b0 \u09b9\u09be\u09a4\u09c7 \u09a8\u09bf\u099c\u09c7\u0995\u09c7 \u09a7\u09cd\u09ac\u0982\u09b8\u09c7 \u09a8\u09bf\u0995\u09cd\u09b7\u09c7\u09aa \u0995\u09b0\u09cb \u09a8\u09be\u0964 \u09ad\u09be\u09b2\u09cb \u0995\u09be\u099c \u0995\u09b0\u09cb; \u09a8\u09bf\u09b6\u09cd\u099a\u09af\u09bc\u0987 \u0986\u09b2\u09cd\u09b2\u09be\u09b9 \u09b8\u09ce\u0995\u09b0\u09cd\u09ae\u09b6\u09c0\u09b2\u09a6\u09c7\u09b0 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09c7\u09a8\u0964\u201d' },
  { ref: '9:119', en: '"O you who have believed, fear Allah and be with the truthful."', bn: '\u201c\u09b9\u09c7 \u0987\u09ae\u09be\u09a8\u09a6\u09be\u09b0\u0997\u09a3! \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u0995\u09c7 \u09ad\u09af\u09bc \u0995\u09b0\u09cb \u0993 \u09b8\u09a4\u09cd\u09af\u09ac\u09be\u09a6\u09c0\u09a6\u09c7\u09b0 \u09b8\u0999\u09cd\u0997\u09c7 \u09a5\u09be\u0995\u09cb\u0964\u201d' },
];

const MUSTAHABB_HADITH = [
  { textEn: '"None of you truly believes until he loves for his brother what he loves for himself."', textBn: '\u201c\u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u0995\u09c7\u0989 \u09aa\u09cd\u09b0\u0995\u09c3\u09a4 \u09ae\u09c1\u09ae\u09bf\u09a8 \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09ac\u09c7 \u09a8\u09be \u09af\u09a4\u0995\u09cd\u09b7\u09a3 \u09a8\u09be \u09b8\u09c7 \u09a4\u09be\u09b0 \u09ad\u09be\u0987\u09af\u09bc\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09a4\u09be-\u0987 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09c7 \u09af\u09be \u09b8\u09c7 \u09a8\u09bf\u099c\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09c7\u0964\u201d', srcEn: 'Bukhari 13, Muslim 45', srcBn: '\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09e7\u09e9, \u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09ea\u09eb' },
  { textEn: '"The best among you are those with the best character."', textBn: '\u201c\u09a4\u09cb\u09ae\u09be\u09a6\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09b8\u09b0\u09cd\u09ac\u09cb\u09a4\u09cd\u09a4\u09ae \u09b8\u09c7\u0987, \u09af\u09be\u09b0 \u099a\u09b0\u09bf\u09a4\u09cd\u09b0 \u09b8\u09b0\u09cd\u09ac\u09cb\u09a4\u09cd\u09a4\u09ae\u0964\u201d', srcEn: 'Bukhari 3559', srcBn: '\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09e9\u09eb\u09eb\u09ef' },
  { textEn: '"Verily Allah is gentle and loves gentleness in all matters."', textBn: '\u201c\u09a8\u09bf\u09b6\u09cd\u099a\u09af\u09bc\u0987 \u0986\u09b2\u09cd\u09b2\u09be\u09b9 \u0995\u09cb\u09ae\u09b2 \u098f\u09ac\u0982 \u09b8\u09ac \u09ac\u09bf\u09b7\u09af\u09bc\u09c7 \u0995\u09cb\u09ae\u09b2\u09a4\u09be\u0995\u09c7 \u09ad\u09be\u09b2\u09cb\u09ac\u09be\u09b8\u09c7\u09a8\u0964\u201d', srcEn: 'Bukhari 6927, Muslim 2593', srcBn: '\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09ec\u09ef\u09e8\u09ed, \u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09e8\u09eb\u09ef\u09e9' },
  { textEn: '"Make things easy and do not make them hard; give glad tidings and do not create aversion."', textBn: '\u201c\u09b8\u09b9\u099c \u0995\u09b0\u09cb, \u0995\u09a0\u09bf\u09a8 \u0995\u09b0\u09cb \u09a8\u09be; \u09b8\u09c1\u09b8\u0982\u09ac\u09be\u09a6 \u09a6\u09be\u0993, \u09ac\u09bf\u09b0\u0995\u09cd\u09a4\u09bf \u09b8\u09c3\u09b7\u09cd\u099f\u09bf \u0995\u09b0\u09cb \u09a8\u09be\u0964\u201d', srcEn: 'Bukhari 69, Muslim 1734', srcBn: '\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09ec\u09ef, \u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09e7\u09ed\u09e9\u09ea' },
  { textEn: '"A good word is charity."', textBn: '\u201c\u09ad\u09be\u09b2\u09cb \u0995\u09a5\u09be \u09b8\u09a6\u0995\u09be\u0964\u201d', srcEn: 'Bukhari 2989, Muslim 1009', srcBn: '\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09e8\u09ef\u09ee\u09ef, \u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09e7\u09e6\u09e6\u09ef' },
];

class MustahabbModule {
  constructor() {
    this.root = document.getElementById('mustahabb-container');
    this.rendered = false;
    const s = (typeof appSettings !== 'undefined' && appSettings);
    this.language = s ? (s.language || 'en') : 'en';
    if (this.root) {
      this.root.addEventListener('click', (e) => this.handleClick(e));
      window.addEventListener('tabChanged', (e) => { try { if (e && e.detail && e.detail.tabId === 'mustahabb') this.render(); } catch (_) {} });
      window.addEventListener('settingChanged', (e) => { try { if (e && e.detail && e.detail.key === 'language') { this.language = e.detail.value || 'en'; if (this.rendered) this.render(); } } catch (_) {} });
      if (document.querySelector('#tab-mustahabb:not(.hidden)')) this.render();
    }
  }
  tt(key) {
    const fb = MUSTAHABB_I18N[key];
    if (!fb) return key;
    const lang = this.language;
    if (lang && fb[lang]) return fb[lang];
    if (lang === 'bn') return fb.bn || fb.en || key;
    if (lang && lang !== 'en' && typeof CI18N !== 'undefined' && fb.en) { const tr = CI18N.tr(lang, fb.en); if (tr) return tr; }
    return fb.en || key;
  }
  lc(o) {
    if (!o) return '';
    const lang = this.language;
    if (lang && o[lang]) return o[lang];
    if (lang === 'bn') return o.bn || o.en || '';
    if (lang && lang !== 'en' && typeof CI18N !== 'undefined' && o.en) { const tr = CI18N.tr(lang, o.en); if (tr) return tr; }
    return o.en || o.bn || '';
  }

  /* Some refs in this data are hadith citations ("Muslim 728"), not verses.
   * Only a verse ref may become a chip that opens the verse modal; a hadith
   * ref sent there produced a modal reading just "Error". */
  isVerseRef(ref) { return /^\d{1,3}:\d{1,3}/.test(String(ref || '').trim()); }
  esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  render() {
    this.rendered = true;
    const L = (o) => this.esc(this.lc(o));
    this.root.innerHTML = `
      <div class="w-full space-y-6 py-4">

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="p-6 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/10">
            <div class="text-4xl mb-2" aria-hidden="true">&#127775;</div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('islam_mustahabb_title'))}</h2>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed" dir="auto">${this.esc(this.tt('islam_mustahabb_subtitle'))}</p>
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">&#9989; ${L({ en: this.tt('islam_mustahabb_grade'), bn: '\u09ae\u09be\u09a8 \u0993 \u09ae\u09c2\u09b2\u09a8\u09c0\u09a4\u09bf' })}</h3>
          <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/40 text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed space-y-2" dir="auto">
            <p>${L({ en: '<strong>Mustahabb</strong> (also called <em>mandub</em>, <em>sunnah</em> or <em>nadb</em>) is an act the Lawgiver encouraged without making it obligatory. The rule: <em>doing it earns reward; leaving it is not sinful.</em>', bn: '<strong>\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac</strong> (\u09ae\u09be\u09a8\u09a6\u09c2\u09ac, \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4 \u09ac\u09be \u09a8\u09be\u09a6\u09ac \u09a8\u09be\u09ae\u09c7\u0993 \u09aa\u09b0\u09bf\u099a\u09bf\u09a4) \u09b9\u09b2\u09cb \u09b8\u09c7\u0987 \u0986\u09ae\u09b2 \u09af\u09be \u09b6\u09b0\u09bf\u09af\u09bc\u09a4 \u0989\u09ce\u09b8\u09be\u09b9\u09bf\u09a4 \u0995\u09b0\u09c7\u099b\u09c7 \u0995\u09bf\u09a8\u09cd\u09a4\u09c1 \u09ab\u09b0\u099c \u0995\u09b0\u09c7\u09a8\u09bf\u0964 \u09ae\u09c2\u09b2\u09a8\u09c0\u09a4\u09bf: <em>\u0995\u09b0\u09b2\u09c7 \u09b8\u0993\u09af\u09bc\u09be\u09ac, \u099b\u09be\u09dc\u09b2\u09c7 \u0997\u09c1\u09a8\u09be\u09b9 \u09a8\u09c7\u0987\u0964</em>' })}</p>
            <p>${L({ en: 'Classical scholars distinguish: <em>sunnah mu\'akkadah</em> (strongly confirmed — habitual omission is blameworthy) and <em>sunnah ghayru mu\'akkadah</em> (light recommendation — no blame at all for omitting). Both fall under mustahabb.', bn: '\u0995\u09cd\u09b2\u09be\u09b8\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0986\u09b2\u09c7\u09ae\u09b0\u09be \u09ac\u09bf\u09ad\u09be\u099c\u09a8 \u0995\u09b0\u09c7\u09a8: <em>\u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4\u09c7 \u09ae\u09c1\u09af\u09bc\u09be\u0995\u09cd\u0995\u09be\u09a6\u09be</em> (\u09a6\u09c3\u09a2\u09bc\u09ad\u09be\u09ac\u09c7 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3\u09bf\u09a4 \u2014 \u0985\u09ad\u09cd\u09af\u09be\u09b8\u0997\u09a4\u09ad\u09be\u09ac\u09c7 \u099b\u09be\u09dc\u09b2\u09c7 \u09a8\u09bf\u09a8\u09cd\u09a6\u09a8\u09c0\u09af\u09bc) \u0993 <em>\u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4 \u0997\u09be\u09af\u09bc\u09b0\u09c7 \u09ae\u09c1\u09af\u09bc\u09be\u0995\u09cd\u0995\u09be\u09a6\u09be</em> (\u09b9\u09be\u09b2\u0995\u09be \u09b8\u09c1\u09aa\u09be\u09b0\u09bf\u09b6 \u2014 \u09ac\u09be\u09a6 \u09a6\u09bf\u09b2\u09c7 \u09a6\u09cb\u09b7 \u09a8\u09c7\u0987)\u0964 \u09a6\u09c1\u099f\u09cb\u0987 \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac\u09c7\u09b0 \u0985\u09a8\u09cd\u09a4\u09b0\u09cd\u09ad\u09c1\u0995\u09cd\u09a4\u0964' })}</p>
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">&#127775; ${L({ en: 'Sunnahs of the Prophet', bn: '\u09a8\u09ac\u09c0\u09b0 \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4\u09b8\u09ae\u09c2\u09b9' })}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${MUSTAHABB_ITEMS.map(n => `
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/40">
                <div class="text-sm font-semibold text-emerald-800 dark:text-emerald-200"><span aria-hidden="true">${n.emoji}</span> ${L({ en: n.titleEn, bn: n.titleBn })}</div>
                <p class="text-xs text-emerald-700 dark:text-emerald-300 mt-1 leading-relaxed" dir="auto">${L({ en: n.descEn, bn: n.descBn })}</p>
                ${this.isVerseRef(this.esc(n.ref.split(',')[0].trim())) ? `<button type="button" data-mustahabb-ayah="${this.esc(n.ref.split(',')[0].trim())}" class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[0.65rem] font-medium hover:bg-emerald-500 hover:text-white transition-colors">&#128214; ${this.esc(n.ref)}</button>` : `<span class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[0.65rem] font-medium transition-colors">&#128214; ${this.esc(n.ref)}</span>`}
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">&#128172; ${L({ en: 'Hadith on Mustahabb', bn: '\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7 \u09b9\u09be\u09a6\u09bf\u09b8' })}</h3>
          <div class="space-y-3">
            ${MUSTAHABB_HADITH.map(h => `
              <div class="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/40">
                <p class="text-sm text-green-800 dark:text-green-200 leading-relaxed" dir="auto">${L({ en: h.textEn, bn: h.textBn })}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">&#8212; ${L({ en: h.srcEn, bn: h.srcBn })}</p>
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">&#128214; ${L({ en: 'Quranic References', bn: '\u0995\u09c1\u09b0\u0986\u09a8\u09bf \u09b0\u09c7\u09ab\u09be\u09b0\u09c7\u09a8\u09cd\u09b8' })}</h3>
          <div class="space-y-3">
            ${MUSTAHABB_QUR.map(q => `
              <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/40">
                <p class="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed" dir="auto">${L({ en: q.en, bn: q.bn })}</p>
                ${this.isVerseRef(this.esc(q.ref)) ? `<button type="button" data-mustahabb-ayah="${this.esc(q.ref)}" class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-medium hover:bg-emerald-500 hover:text-white transition-colors">&#128214; ${this.esc(q.ref)} ${L({ en: 'Read', bn: '\u09aa\u09dc\u09c1\u09a8' })}</button>` : `<span class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-medium transition-colors">&#128214; ${this.esc(q.ref)} ${L({ en: 'Read', bn: '\u09aa\u09dc\u09c1\u09a8' })}</span>`}
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-900/40 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">&#129504; ${L({ en: 'Self-check', bn: '\u09a8\u09bf\u099c\u09c7\u0987 \u09af\u09be\u099a\u09be\u0987' })}</h3>
          <div class="space-y-2">
            ${[
              { q: { en: 'What is the ruling on a mustahabb act — is it sinful to leave it?', bn: '\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u0986\u09ae\u09b2\u09c7\u09b0 \u09b9\u09c1\u0995\u09c1\u09ae \u0995\u09c0 \u2014 \u099b\u09c7\u09dc\u09c7 \u09a6\u09bf\u09b2\u09c7 \u0995\u09bf \u0997\u09c1\u09a8\u09be\u09b9 \u09b9\u09ac\u09c7?' }, a: { en: 'No sin in leaving it. However, performing it earns reward and brings one closer to the Prophet\'s example. Habitual omission of a mu\'akkadah sunnah is blameworthy though not sinful.', bn: '\u099b\u09c7\u09dc\u09c7 \u09a6\u09bf\u09b2\u09c7 \u0997\u09c1\u09a8\u09be\u09b9 \u09a8\u09c7\u0987\u0964 \u09a4\u09ac\u09c7 \u0995\u09b0\u09b2\u09c7 \u09b8\u0993\u09af\u09bc\u09be\u09ac \u09aa\u09be\u0993\u09af\u09bc\u09be \u09af\u09be\u09af\u09bc \u0993 \u09a8\u09ac\u09c0\u09b0 \u0986\u09a6\u09b0\u09cd\u09b6\u09c7\u09b0 \u09a8\u09bf\u0995\u099f\u09ac\u09b0\u09cd\u09a4\u09c0 \u09b9\u0993\u09af\u09bc\u09be \u09af\u09be\u09af\u09bc\u0964 \u09ae\u09c1\u09af\u09bc\u09be\u0995\u09cd\u0995\u09be\u09a6\u09be \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4 \u0985\u09ad\u09cd\u09af\u09be\u09b8\u0997\u09a4\u09ad\u09be\u09ac\u09c7 \u09ac\u09be\u09a6 \u09a6\u09c7\u0993\u09af\u09bc\u09be \u09a8\u09bf\u09a8\u09cd\u09a6\u09a8\u09c0\u09af\u09bc, \u0997\u09c1\u09a8\u09be\u09b9 \u09a8\u09af\u09bc\u0964' } },
              { q: { en: 'What is the difference between mustahabb and wajib?', bn: '\u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u0993 \u0993\u09af\u09bc\u09be\u099c\u09bf\u09ac\u09c7\u09b0 \u09aa\u09be\u09b0\u09cd\u09a5\u0995\u09cd\u09af \u0995\u09c0?' }, a: { en: 'Wajib (obligatory) — leaving it is sinful and may require making up (or expiation in some cases). Mustahabb — leaving it is not sinful; performing it is extra reward. In the Hanafi school wajib is a rank just below fard (the other schools treat wajib and fard as one), and mustahabb is below both.', bn: '\u0993\u09af\u09bc\u09be\u099c\u09bf\u09ac (\u0986\u09ac\u09b6\u09cd\u09af\u0995) \u2014 \u099b\u09c7\u09a1\u09bc\u09c7 \u09a6\u09bf\u09b2\u09c7 \u0997\u09c1\u09a8\u09be\u09b9; \u0995\u09be\u09af\u09be (\u0995\u09cb\u09a8\u09cb \u0995\u09cd\u09b7\u09c7\u09a4\u09cd\u09b0\u09c7 \u0995\u09be\u09ab\u09ab\u09be\u09b0\u09be) \u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u099c\u09a8 \u09b9\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964 \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u2014 \u099b\u09c7\u09a1\u09bc\u09c7 \u09a6\u09bf\u09b2\u09c7 \u0997\u09c1\u09a8\u09be\u09b9 \u09a8\u09c7\u0987; \u0995\u09b0\u09b2\u09c7 \u0985\u09a4\u09bf\u09b0\u09bf\u0995\u09cd\u09a4 \u09b8\u0993\u09af\u09bc\u09be\u09ac\u0964 \u09b9\u09be\u09a8\u09be\u09ab\u09bf \u09ae\u09be\u09af\u09b9\u09be\u09ac\u09c7 \u0993\u09af\u09bc\u09be\u099c\u09bf\u09ac \u09ab\u09b0\u099c\u09c7\u09b0 \u09a0\u09bf\u0995 \u09a8\u09bf\u099a\u09c7\u09b0 \u09b8\u09cd\u09a4\u09b0 (\u0985\u09a8\u09cd\u09af \u09ae\u09be\u09af\u09b9\u09be\u09ac\u0997\u09c1\u09b2\u09cb\u09a4\u09c7 \u0993\u09af\u09bc\u09be\u099c\u09bf\u09ac \u0993 \u09ab\u09b0\u099c \u098f\u0995\u0987), \u0986\u09b0 \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac \u0989\u09ad\u09af\u09bc\u09c7\u09b0 \u09a8\u09bf\u099a\u09c7\u0964' } },
              { q: { en: 'Why did the Prophet eat with three fingers?', bn: '\u09a8\u09ac\u09c0 \u09a4\u09bf\u09a8 \u0986\u0999\u09cd\u0997\u09c1\u09b2 \u09a6\u09bf\u09af\u09bc\u09c7 \u0996\u09c7\u09a4\u09c7\u09a8 \u0995\u09c7\u09a8?' }, a: { en: 'It is a sunnah expressing humility and mindfulness of food\'s blessing. Licking the fingers afterwards ensures no blessing is wasted. (Muslim 2033) Using fewer fingers also slows eating, aiding digestion.', bn: '\u098f\u099f\u09bf \u09ac\u09bf\u09a8\u09af\u09bc \u0993 \u0996\u09be\u09a6\u09cd\u09af\u09c7\u09b0 \u09ac\u09b0\u0995\u09a4\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf \u09b8\u099a\u09c7\u09a4\u09a8\u09a4\u09be \u09aa\u09cd\u09b0\u0995\u09be\u09b6\u0995\u09be\u09b0\u09c0 \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4\u0964 \u0996\u09be\u0993\u09af\u09bc\u09be\u09b0 \u09aa\u09b0 \u0986\u0999\u09cd\u0997\u09c1\u09b2 \u099a\u09be\u099f\u09be \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4 \u0995\u09b0\u09c7 \u0995\u09cb\u09a8\u09cb \u09ac\u09b0\u0995\u09a4 \u09a8\u09b7\u09cd\u099f \u09a8\u09be \u09b9\u09af\u09bc\u0964 (\u09ae\u09c1\u09b8\u09b2\u09bf\u09ae \u09e8\u09e6\u09e9\u09e9) \u0995\u09ae \u0986\u0999\u09cd\u0997\u09c1\u09b2 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0996\u09be\u0993\u09af\u09bc\u09be\u0993 \u09a7\u09c0\u09b0 \u0995\u09b0\u09c7, \u09b9\u099c\u09ae\u09c7 \u09b8\u09be\u09b9\u09be\u09af\u09cd\u09af \u0995\u09b0\u09c7\u0964' } },
              { q: { en: 'Is spreading the salaam obligatory or recommended?', bn: '\u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09c7\u0993\u09af\u09bc\u09be \u0995\u09bf \u09ab\u09b0\u099c \u09a8\u09be\u0995\u09bf \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac?' }, a: { en: 'Giving salaam is mustahabb (sunnah). However, replying to salaam is obligatory: on the person greeted if he is alone, and when a group is greeted it is fard kifayah (communal obligation) — at least one person must respond. If no one replies, all are sinful.', bn: '\u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09c7\u0993\u09af\u09bc\u09be \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac (\u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4)\u0964 \u09a4\u09ac\u09c7 \u09b8\u09be\u09b2\u09be\u09ae\u09c7\u09b0 \u099c\u09ac\u09be\u09ac \u09a6\u09c7\u0993\u09af\u09bc\u09be \u0986\u09ac\u09b6\u09cd\u09af\u0995: \u098f\u0995\u099c\u09a8\u0995\u09c7 \u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09bf\u09b2\u09c7 \u09a4\u09be\u09b0 \u09a8\u09bf\u099c\u09c7\u09b0 \u0993\u09aa\u09b0, \u0986\u09b0 \u09a6\u09b2\u0995\u09c7 \u09b8\u09be\u09b2\u09be\u09ae \u09a6\u09bf\u09b2\u09c7 \u09a4\u09be \u09ab\u09b0\u099c\u09c7 \u0995\u09bf\u09ab\u09be\u09af\u09bc\u09be (\u09b8\u09be\u09ae\u09be\u099c\u09bf\u0995 \u09ab\u09b0\u099c) \u2014 \u0985\u09a8\u09cd\u09a4\u09a4 \u098f\u0995\u099c\u09a8\u0995\u09c7 \u09b8\u09be\u09a1\u09bc\u09be \u09a6\u09bf\u09a4\u09c7 \u09b9\u09ac\u09c7\u0964 \u0995\u09c7\u0989 \u09b8\u09be\u09dc\u09be \u09a8\u09be \u09a6\u09bf\u09b2\u09c7 \u09b8\u09ac\u09be\u0987 \u0997\u09c1\u09a8\u09be\u09b9\u0997\u09be\u09b0\u0964' } },
              { q: { en: 'Name three categories that fall under mustahabb according to classical scholars.', bn: '\u0995\u09cd\u09b2\u09be\u09b8\u09bf\u0995\u09cd\u09af\u09be\u09b2 \u0986\u09b2\u09c7\u09ae\u09a6\u09c7\u09b0 \u09ae\u09a4\u09c7 \u09ae\u09c1\u09b8\u09cd\u09a4\u09be\u09b9\u09be\u09ac\u09c7\u09b0 \u0985\u09a8\u09cd\u09a4\u09b0\u09cd\u0997\u09a4 \u09a4\u09bf\u09a8\u099f\u09bf \u09ac\u09bf\u09ad\u09be\u0997 \u09a8\u09be\u09ae \u0995\u09b0\u09c1\u09a8\u0964' }, a: { en: '(1) Sunnah mu\'akkadah — strongly confirmed sunnahs of the Prophet; (2) Sunnah ghayru mu\'akkadah — lighter recommendations; (3) Adab — refined etiquette of the Prophet not specifically commanded but exemplified.', bn: '(1) \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4\u09c7 \u09ae\u09c1\u09af\u09bc\u09be\u0995\u09cd\u0995\u09be\u09a6\u09be \u2014 \u09a6\u09c3\u09a2\u09bc\u09ad\u09be\u09ac\u09c7 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3\u09bf\u09a4 \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4; (2) \u09b8\u09c1\u09a8\u09cd\u09a8\u09be\u09a4 \u0997\u09be\u09af\u09bc\u09b0\u09c7 \u09ae\u09c1\u09af\u09bc\u09be\u0995\u09cd\u0995\u09be\u09a6\u09be \u2014 \u09b9\u09be\u09b2\u0995\u09be \u09b8\u09c1\u09aa\u09be\u09b0\u09bf\u09b6; (3) \u0986\u09a6\u09be\u09ac \u2014 \u09a8\u09ac\u09c0\u09b0 \u09ac\u09bf\u09b6\u09c7\u09b7\u09ad\u09be\u09ac\u09c7 \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6\u09bf\u09a4 \u09a8\u09af\u09bc \u09a4\u09ac\u09c7 \u09b8\u09cd\u09ac\u09be\u09ad\u09be\u09ac\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u0986\u099a\u09b0\u09a3\u0995\u09c3\u09a4 \u09b8\u09c1\u09b6\u09c0\u09b2 \u0986\u099a\u09b0\u09a3\u09c7\u09b0 \u09a8\u09bf\u09af\u09bc\u09ae\u0964' } },
              { q: { en: 'What is the importance of using the miswak before prayer?', bn: '\u09a8\u09be\u09ae\u09be\u099c\u09c7\u09b0 \u0986\u0997\u09c7 \u09ae\u09bf\u09b8\u0993\u09af\u09bc\u09be\u0995 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac \u0995\u09c0?' }, a: { en: 'The Prophet \ufdfa said: "Were it not that I might overburden my community I would command them to use the miswak before every prayer." (Bukhari 887) It purifies the mouth, pleases Allah, and is a sign of respect before standing in front of Him.', bn: '\u09a8\u09ac\u09c0 \u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09b2\u09cd\u09b2\u09be\u09b9\u09c1 \u0986\u09b2\u09be\u0987\u09b9\u09bf \u0993\u09af\u09bc\u09be\u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09ae \u09ac\u09b2\u09c7\u099b\u09c7\u09a8: \u201c\u09af\u09a6\u09bf \u0989\u09ae\u09cd\u09ae\u09a4\u09c7\u09b0 \u0989\u09aa\u09b0 \u0995\u09b7\u09cd\u099f\u0995\u09b0 \u09a8\u09be \u09b9\u09a4 \u09a4\u09be\u09b9\u09b2\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u099f\u09bf \u09a8\u09be\u09ae\u09be\u099c\u09c7\u09b0 \u0986\u0997\u09c7 \u09ae\u09bf\u09b8\u0993\u09af\u09bc\u09be\u0995 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0995\u09b0\u09a4\u09c7 \u0986\u09a6\u09c7\u09b6 \u0995\u09b0\u09a4\u09be\u09ae\u0964\u201d (\u09ac\u09c1\u0996\u09be\u09b0\u09bf \u09ee\u09ee\u09ed) \u098f\u099f\u09bf \u09ae\u09c1\u0996 \u09aa\u09b0\u09bf\u09b7\u09cd\u0995\u09be\u09b0 \u0995\u09b0\u09c7, \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0 \u09b8\u09a8\u09cd\u09a4\u09c1\u09b7\u09cd\u099f\u09bf \u0985\u09b0\u09cd\u099c\u09a8 \u0995\u09b0\u09c7 \u0993 \u09a4\u09be\u0981\u09b0 \u09b8\u09be\u09ae\u09a8\u09c7 \u09a6\u09be\u0981\u09dc\u09be\u09a8\u09cb\u09b0 \u0986\u0997\u09c7 \u09b8\u09ae\u09cd\u09ae\u09be\u09a8\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09c0\u0995\u0964' } },
              { q: { en: 'How does smiling become an act of worship?', bn: '\u09b9\u09be\u09b8\u09bf \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u0987\u09ac\u09be\u09a6\u09a4 \u09b9\u09af\u09bc?' }, a: { en: 'The Prophet \ufdfa defined charity (sadaqah) broadly to include a smile in the face of your brother (Tirmidhi 1956). Any good deed done seeking Allah\'s pleasure — even a smile — counts as worship because of the sincere intention (niyyah).', bn: '\u09a8\u09ac\u09c0 \u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09b2\u09cd\u09b2\u09be\u09b9\u09c1 \u0986\u09b2\u09be\u0987\u09b9\u09bf \u0993\u09af\u09bc\u09be\u09b8\u09be\u09b2\u09cd\u09b2\u09be\u09ae \u09b8\u09a6\u0995\u09be\u0995\u09c7 \u09ac\u09cd\u09af\u09be\u09aa\u0995\u09ad\u09be\u09ac\u09c7 \u09b8\u0982\u099c\u09cd\u099e\u09be\u09af\u09bc\u09bf\u09a4 \u0995\u09b0\u09c7\u099b\u09c7\u09a8, \u09af\u09be\u09a4\u09c7 \u09ad\u09be\u0987\u09af\u09bc\u09c7\u09b0 \u09ae\u09c1\u0996\u09c7 \u09b9\u09be\u09b8\u09bf\u0993 \u09b8\u09cd\u09a5\u09be\u09a8 \u09aa\u09c7\u09af\u09bc\u09c7\u099b\u09c7 (\u09a4\u09bf\u09b0\u09ae\u09bf\u09af\u09bf \u09e7\u09ef\u09eb\u09ec)\u0964 \u0986\u09b2\u09cd\u09b2\u09be\u09b9\u09b0 \u09b8\u09a8\u09cd\u09a4\u09c1\u09b7\u09cd\u099f\u09bf\u09b0 \u0989\u09a6\u09cd\u09a6\u09c7\u09b6\u09cd\u09af\u09c7 \u0995\u09b0\u09be \u09af\u09c7\u0995\u09cb\u09a8\u09cb \u09b8\u09ce\u0995\u09be\u099c \u2014 \u098f\u09a4\u099f\u09c1\u0995\u09c1 \u0995\u09cd\u09b7\u09c1\u09a6\u09cd\u09b0 \u09b9\u09be\u09b8\u09bf\u0993 \u2014 \u09a8\u09bf\u09af\u09bc\u09a4\u09c7\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0987\u09ac\u09be\u09a6\u09a4 \u09b9\u09bf\u09b8\u09c7\u09ac\u09c7 \u0997\u09a3\u09cd\u09af \u09b9\u09af\u09bc\u0964' } },
            ].map(item => `
              <details class="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/40 overflow-hidden">
                <summary class="flex items-center gap-2 p-3 cursor-pointer list-none hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30">
                  <span class="text-emerald-600 dark:text-emerald-400 text-sm">&#10067;</span>
                  <span class="flex-1 text-sm font-medium text-gray-800 dark:text-gray-100" dir="auto">${L(item.q)}</span>
                  <span class="text-emerald-500 text-xs">&#9660;</span>
                </summary>
                <div class="px-4 pb-3 pt-1 text-xs text-gray-700 dark:text-gray-200 leading-relaxed border-t border-emerald-100 dark:border-emerald-900/40" dir="auto">&#9989; ${L(item.a)}</div>
              </details>`).join('')}
          </div>
        </div>

      </div>`;
  }
  handleClick(e) {
    const ayah = e.target.closest('[data-mustahabb-ayah]');
    if (ayah) { try { if (typeof ayahModal !== 'undefined' && ayahModal && ayahModal.open) ayahModal.open(ayah.getAttribute('data-mustahabb-ayah')); } catch (_) {} }
  }
}

let mustahabbModule;
document.addEventListener('DOMContentLoaded', () => { mustahabbModule = new MustahabbModule(); });
