/**
 * Islam → Wajib (Essential Acts) module.
 *
 * Wājib in the Ḥanafī school is slightly less binding than fard (proven by
 * probable but not absolutely definitive evidence) but still required.
 * Leaving it without excuse is sinful. In the Shāfiʿī / Mālikī / Ḥanbalī
 * schools, wājib and farḍ are used interchangeably — this module notes the
 * distinction where it matters.
 */

const WAJIB_I18N = {
  islam_wajib_title:    { en: 'Wajib (Essential)', bn: 'ওয়াজিব (অপরিহার্য)', zh: '当行 (Wajib)', ja: '必要行為（ワージブ）', ar: 'الواجب', ur: 'واجب', hi: 'वाजिब (आवश्यक)', fa: 'واجب (لازم)', id: 'Wajib', ms: 'Wajib', tr: 'Vacip (Gerekli)', fr: 'Wajib (Nécessaire)', es: 'Wayib (Necesario)', de: 'Wadschib (Notwendig)', ru: 'Ваджиб (обязательное)' },
  islam_wajib_subtitle: { en: 'What is established as binding by probable evidence. In the Ḥanafī school it is one degree below fard; leaving it without excuse is sinful. In the other three schools, wājib and fard are generally one category, though in Ḥajj they too separate pillars from wājib rites.', bn: 'যা প্রবল দলিল দ্বারা অপরিহার্য প্রমাণিত। হানাফি মাযহাবে এটি ফরজের এক ধাপ নিচে; ওজর ছাড়া ছাড়লে গুনাহ। বাকি তিন মাযহাবে ওয়াজিব ও ফরজ সাধারণত একই, তবে হজে তারাও রুকন ও ওয়াজিব আলাদা করেন।' },
};

const WAJIB_ITEMS = [
  { emoji: '🕌',
    titleEn: 'Witr Prayer (Ḥanafī view)', titleBn: 'বিতর নামাজ (হানাফি মতে)',
    descEn: 'An odd-numbered prayer performed after Isha until dawn. Ḥanafī: wājib, prayed as 3 rak’ahs. Other schools: strong sunnah, from 1 rak’ah upward. The Prophet ﷺ is reported never to have omitted it, even in travel.',
    descBn: 'ইশার পর থেকে ফজরের আগ পর্যন্ত পড়া বেজোড় রাকাতের নামাজ। হানাফি মতে ওয়াজিব, পড়া হয় ৩ রাকাত। অন্য মাযহাবে সুন্নতে মুয়াক্কাদা, ১ রাকাত বা তার বেশি। বর্ণিত আছে, নবী ﷺ সফরেও কখনো তা ছাড়েননি।',
    ref: '73:20',
  },
  { emoji: '🎉',
    titleEn: 'ʿEid Prayer (2 Eids)', titleBn: 'দুই ঈদের নামাজ',
    descEn: '2 rak\'ah prayer with extra takbīrs on Eid al-Fitr (1 Shawwal) and Eid al-Adha (10 Dhul-Hijjah). Ḥanafī: wājib on adult free men; Shāfiʿī & Mālikī: strong sunnah; Ḥanbalī: farḍ kifāyah (communal duty).',
    descBn: 'ঈদুল ফিতর (১ শাওয়াল) ও ঈদুল আযহায় (১০ জিলহজ) অতিরিক্ত তাকবিরসহ ২ রাকাত নামাজ। হানাফি মতে প্রাপ্তবয়স্ক স্বাধীন পুরুষের উপর ওয়াজিব; শাফিয়ী ও মালিকী মতে সুন্নতে মুয়াক্কাদা; হাম্বলী মতে ফরজে কিফায়া (সমাজের সম্মিলিত দায়িত্ব)।',
    ref: '108:2',
  },
  { emoji: '🐐',
    titleEn: 'Qurbānī / Uḍḥiyyah (Sacrifice)', titleBn: 'কুরবানি / উযহিয়্যা',
    descEn: 'Animal sacrifice on Eid al-Adha for every capable Muslim who reaches nisab (Ḥanafī: wājib once a year; other schools: strong sunnah). The meat is recommended to be divided into three: family, relatives/neighbours, poor.',
    descBn: 'ঈদুল আযহায় পশু কুরবানি করা, নেসাবের মালিক প্রত্যেক সামর্থ্যবান মুসলিমের জন্য (হানাফি মতে বছরে একবার ওয়াজিব; অন্য মাযহাবে সুন্নতে মুয়াক্কাদা)। গোশত তিন ভাগ করা মুস্তাহাব: পরিবারের জন্য, আত্মীয়-প্রতিবেশীর জন্য আর গরিবদের জন্য।',
    ref: '22:34-37, 108:2',
  },
  { emoji: '🎁',
    titleEn: 'Ṣadaqat al-Fiṭr (Fitrah)', titleBn: 'সাদাকাতুল ফিতর',
    descEn: 'A small charity paid before the Eid al-Fitr prayer on behalf of every Muslim in the household (young, old, male, female). Purifies the fast from any lapses.',
    descBn: 'ঈদুল ফিতরের নামাজের আগে পরিবারের প্রত্যেক মুসলিমের পক্ষ থেকে (ছোট-বড়, নারী-পুরুষ সবার) আদায় করা সামান্য দান। এতে রোজার ভুলত্রুটি থেকে রোজা পাক হয়।',
    ref: 'Bukhari 1503, Abu Dawud 1609',
  },
  { emoji: '🤲',
    titleEn: 'Reciting Al-Fātiḥah in Prayer', titleBn: 'নামাজে সূরা ফাতিহা তিলাওয়াত',
    descEn: 'The Ḥanafī view: reciting al-Fātiḥah is wājib (not farḍ) for the imām and one praying alone, in the first two rakʿahs of farḍ prayers and in every rakʿah of witr and nafl; the follower (muqtadī) listens and does not recite. Other schools: it is a fard/rukn of every rakah, though they differ on whether the follower must recite it.',
    descBn: 'হানাফি মত: ইমাম ও একা নামাজ আদায়কারীর জন্য সূরা ফাতিহা পড়া ওয়াজিব (ফরজ নয়), ফরজ নামাজের প্রথম দুই রাকাতে এবং বিতর ও নফলের প্রতি রাকাতে। মুক্তাদি চুপ করে শুনবে, পড়বে না। অন্য মাযহাবে এটা প্রতি রাকাতের ফরজ/রুকন, তবে মুক্তাদিকেও পড়তে হবে কি না, তা নিয়ে তাঁদের মধ্যে মতভেদ আছে।',
    ref: 'Bukhari 756',
  },
  { emoji: '🙏',
    titleEn: 'Tashahhud in the Middle & Final Sitting', titleBn: 'মাঝের ও শেষ বৈঠকে তাশাহহুদ',
    descEn: 'Ḥanafī: reciting the tashahhud in the middle and final sitting is wājib; forgetting it requires sajda al-sahw (compensating prostrations). Shāfiʿī & Ḥanbalī: the final tashahhud is a rukn; Mālikī: both are sunnah.',
    descBn: 'হানাফি মতে মাঝের ও শেষ বৈঠকে তাশাহহুদ পড়া ওয়াজিব; ভুলে গেলে সিজদায়ে সাহু দিতে হয়। শাফিয়ী ও হাম্বলী মতে শেষ তাশাহহুদ রুকন; মালিকী মতে দুটোই সুন্নত।',
    ref: 'Bukhari 831',
  },
  { emoji: '☮️',
    titleEn: 'Tasleem (Ending with Salam)', titleBn: 'সালাম দিয়ে নামাজ শেষ করা',
    descEn: 'Concluding salah with "As-salamu alaykum wa raḥmatullah" to the right, then to the left. Wājib per Ḥanafī; per the others the first salām is farḍ (the Ḥanbalīs make both farḍ).',
    descBn: 'প্রথমে ডানে, তারপর বামে "আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ" বলে নামাজ শেষ করা। হানাফি মতে ওয়াজিব; অন্যদের মতে প্রথম সালাম ফরজ (হাম্বলী মতে দুটোই ফরজ)।',
    ref: 'Muslim 582',
  },
  { emoji: '↩️',
    titleEn: 'Sajda al-Sahw (Compensating Prostrations)', titleBn: 'সিজদায়ে সাহু',
    descEn: 'Two prostrations performed after tashahhud (before or after salam per school) to compensate for a forgotten wājib or added rakah. Ḥanafī & Ḥanbalī: wājib whenever a wājib is forgotten; Shāfiʿī & Mālikī: sunnah.',
    descBn: 'ভুলে কোনো ওয়াজিব ছুটে গেলে বা বাড়তি রাকাত পড়ে ফেললে তা পূরণ করতে তাশাহহুদের পর দুটি সিজদা (মাযহাবভেদে সালামের আগে বা পরে)। হানাফি ও হাম্বলী মতে কোনো ওয়াজিব ভুলে ছুটে গেলেই এটা ওয়াজিব; শাফিয়ী ও মালিকী মতে সুন্নত।',
    ref: 'Bukhari 1224',
  },
  { emoji: '📖',
    titleEn: 'Audible & Silent Recitation in Their Places', titleBn: 'যথাস্থানে জোরে ও চুপিসারে কিরাত',
    descEn: 'Reciting audibly as imām (Fajr, Maghrib, Isha first two rak\'ahs) and silently (Dhuhr, Asr) is a wājib of prayer in the Ḥanafī school. Other schools: sunnah.',
    descBn: 'ইমাম ফজর, মাগরিব ও ইশার প্রথম দুই রাকাতে জোরে এবং যোহর ও আসরে চুপে চুপে কিরাত পড়বেন। হানাফি মাযহাবে এটা নামাজের ওয়াজিব; অন্য মাযহাবে সুন্নত।',
    ref: 'Bukhari 762',
  },
  { emoji: '⏳',
    titleEn: 'Fulfilling Vows (Nadhr)', titleBn: 'মান্নত পূরণ',
    descEn: 'If one vows to perform an act of worship for Allah (e.g., "I vow to fast three days if my sick child recovers"), fulfilling it becomes wājib. Vowing to sin is invalid.',
    descBn: 'কেউ আল্লাহর জন্য কোনো ইবাদতের মান্নত করলে (যেমন: "আমার অসুস্থ সন্তান সুস্থ হলে তিন দিন রোজা রাখব"), তা পূরণ করা ওয়াজিব হয়ে যায়। গুনাহের কাজের মান্নত বাতিল।',
    ref: '22:29, Bukhari 6696',
  },
  { emoji: '📢',
    titleEn: 'Takbīr al-Tashrīq', titleBn: 'তাকবিরে তাশরিক',
    descEn: 'Saying the takbīr — "Allāhu akbar, Allāhu akbar, lā ilāha illā-llāh, wa-llāhu akbar, Allāhu akbar wa lillāhi-l-ḥamd" — once after every farḍ prayer from Fajr of 9 Dhul-Ḥijjah (Day of ʿArafah) to ʿAsr of 13 Dhul-Ḥijjah. Ḥanafī: wājib; other schools: mustaḥabb/sunnah.',
    descBn: '৯ জিলহজ (আরাফার দিন) ফজর থেকে ১৩ জিলহজ আসর পর্যন্ত প্রতি ফরজ নামাজের পর একবার এই তাকবির বলা: "আল্লাহু আকবার, আল্লাহু আকবার, লা ইলাহা ইল্লাল্লাহ, ওয়াল্লাহু আকবার, আল্লাহু আকবার ওয়া লিল্লাহিল হামদ"। হানাফি মতে ওয়াজিব; অন্য মাযহাবে মুস্তাহাব/সুন্নত।',
    ref: '2:203',
  },
  { emoji: '⤵️',
    titleEn: 'Sujūd al-Tilāwah (Prostration of Recitation)', titleBn: 'সিজদায়ে তিলাওয়াত',
    descEn: 'When one recites or hears one of the verses of prostration (14 in the Ḥanafī counting), a single prostration becomes wājib on both the reciter and the listener. Ḥanafī: wājib; Shāfiʿī, Mālikī & Ḥanbalī: sunnah.',
    descBn: 'কেউ সিজদার কোনো আয়াত (হানাফি গণনায় ১৪টি) তিলাওয়াত করলে বা শুনলে, পাঠক ও শ্রোতা দুজনের উপরই একটি সিজদা ওয়াজিব হয়। হানাফি মতে ওয়াজিব; শাফিয়ী, মালিকী ও হাম্বলী মতে সুন্নত।',
    ref: '96:19',
  },
  { emoji: '📜',
    titleEn: 'Additional Sūrah After al-Fātiḥah', titleBn: 'ফাতিহার পর সূরা মিলানো',
    descEn: 'Reciting a short sūrah, or three short verses, or one long verse after al-Fātiḥah in the first two rakʿahs of the farḍ prayers (and in every rakʿah of witr and nafl) is wājib in the Ḥanafī school. Other schools: sunnah.',
    descBn: 'ফরজ নামাজের প্রথম দুই রাকাতে (এবং বিতর ও নফলের প্রতি রাকাতে) সূরা ফাতিহার পর একটি ছোট সূরা, বা তিনটি ছোট আয়াত, বা একটি দীর্ঘ আয়াত পড়া হানাফি মাযহাবে ওয়াজিব। অন্য মাযহাবে: সুন্নত।',
    ref: '73:20',
  },
  { emoji: '🌙',
    titleEn: 'Qunūt in Witr', titleBn: 'বিতরে দুআয়ে কুনুত',
    descEn: 'Reciting the duʿāʾ al-qunūt in the third rakʿah of Witr — after a takbīr, before rukūʿ per the Ḥanafī reports — is wājib in the Ḥanafī school. Other schools hold qunūt sunnah: the Ḥanbalīs in witr all year, the Shāfiʿīs in witr in the second half of Ramaḍān and in Fajr, the Mālikīs in Fajr rather than witr.',
    descBn: 'বিতরের তৃতীয় রাকাতে তাকবির বলে (হানাফি মতে রুকুর আগে) দুআয়ে কুনুত পড়া হানাফি মাযহাবে ওয়াজিব। অন্য মাযহাবে কুনুত সুন্নত: হাম্বলীরা সারা বছর বিতরে, শাফিয়ীরা রমজানের শেষ অর্ধেকে বিতরে ও ফজরে, মালিকীরা বিতরে নয়, ফজরে পড়েন।',
    ref: '2:238',
  },
  { emoji: '🪑',
    titleEn: 'Qaʿdah Ūlā (First Sitting)', titleBn: 'কাদায়ে উলা (প্রথম বৈঠক)',
    descEn: 'Sitting after the second rakʿah (the first tashahhud) in every 3- or 4-rakʿah prayer is wājib (Ḥanafī and Ḥanbalī; Shāfiʿī & Mālikī: sunnah). If one stands up forgetfully without sitting, one does not return but instead performs sajda al-sahw.',
    descBn: 'প্রতিটি ৩ বা ৪ রাকাত নামাজে দ্বিতীয় রাকাতের পর বসা (প্রথম বৈঠক/তাশাহহুদ) ওয়াজিব (হানাফি ও হাম্বলী মতে; শাফিয়ী ও মালিকী মতে সুন্নত)। ভুলে না বসে দাঁড়িয়ে গেলে ফিরে আসবে না, বরং সিজদায়ে সাহু করবে।',
    ref: 'Bukhari 1224',
  },
  { emoji: '🧘',
    titleEn: 'Taʿdīl al-Arkān (Stillness in Each Posture)', titleBn: 'তাদিলে আরকান (প্রতি রুকনে স্থিরতা)',
    descEn: 'Pausing calmly — long enough to say "Subḥāna rabbiya-l-ʿaẓīm" once — in rukūʿ and sujūd, and standing/sitting upright between them. Ḥanafī: wājib (Abū Yūsuf: farḍ); the majority: rukn/farḍ, without which the prayer is invalid.',
    descBn: 'রুকু ও সিজদায় এবং এ দুয়ের মাঝে সোজা হয়ে দাঁড়ানো ও বসার সময় ধীরস্থিরভাবে থামা, অন্তত একবার "সুবহানা রব্বিয়াল আযীম" বলার মতো সময়। হানাফি মতে ওয়াজিব (ইমাম আবু ইউসুফের মতে ফরজ); অধিকাংশ আলেমের মতে রুকন/ফরজ, এটা ছাড়া নামাজ বাতিল।',
    ref: 'Muslim 397',
  },
  { emoji: '🕋',
    titleEn: 'ʿUmrah (per some schools)', titleBn: 'উমরা (কারো কারো মতে)',
    descEn: 'A minor pilgrimage to the Kaʿbah (iḥrām, ṭawāf, saʿy, then shaving/trimming) valid any time of year. Shāfiʿī & Ḥanbalī: wājib/farḍ once in a lifetime for the able; Ḥanafī & Mālikī: sunnah muʾakkadah.',
    descBn: 'কাবা শরীফে ছোট হজ (ইহরাম, তাওয়াফ, সাঈ, তারপর মাথা মুণ্ডানো বা চুল ছোট করা), যা বছরের যেকোনো সময় করা যায়। শাফিয়ী ও হাম্বলী মতে সামর্থ্যবানের উপর জীবনে একবার ওয়াজিব/ফরজ; হানাফি ও মালিকী মতে সুন্নতে মুয়াক্কাদা।',
    ref: '2:196',
  },
  { emoji: '👥',
    titleEn: 'Following the Imām (Not Preceding Him)', titleBn: 'ইমামের অনুসরণ (আগে না বাড়া)',
    descEn: 'The follower (muqtadī) must not move to rukūʿ, sujūd, or salām before the imām; he keeps pace with him or just after. Deliberately preceding the imām is prohibited and can invalidate the follower\'s prayer.',
    descBn: 'মুক্তাদি ইমামের আগে রুকু, সিজদা বা সালামে যাবে না; ইমামের সাথে বা ঠিক পরে অনুসরণ করবে। ইচ্ছাকৃতভাবে ইমামের আগে যাওয়া নিষিদ্ধ এবং এতে মুক্তাদির নামাজ নষ্ট হতে পারে।',
    ref: 'Muslim 414',
  },
  { emoji: '🏔️',
    titleEn: 'Iḥrām from the Mīqāt (Ḥajj/ʿUmrah)', titleBn: 'মিকাত থেকে ইহরাম বাঁধা',
    descEn: 'One intending Ḥajj or ʿUmrah must enter iḥrām at the fixed boundary stations (mawāqīt) the Prophet ﷺ appointed and not cross them unconsecrated. "They are for the people of those regions and for those who pass through them intending Ḥajj or ʿUmrah." (Bukhari 1524, Muslim 1181) Crossing without iḥrām requires returning or offering a dam (compensatory slaughter).',
    descBn: 'হজ বা উমরার নিয়তে যিনি যাচ্ছেন, তাঁকে নবী ﷺ-এর ঠিক করে দেওয়া সীমানাগুলো (মাওয়াকিত) থেকে ইহরাম বাঁধতে হবে; ইহরাম ছাড়া সেগুলো পার হওয়া যাবে না। "এগুলো ওই অঞ্চলের লোকদের জন্য, আর হজ বা উমরার নিয়তে যারা এ পথ দিয়ে যায় তাদের জন্যও।" (বুখারি ১৫২৪, মুসলিম ১১৮১) ইহরাম ছাড়া পার হয়ে গেলে ফিরে আসতে হবে, নইলে দম (ক্ষতিপূরণের কুরবানি) দিতে হবে।',
    ref: '2:196',
  },
  { emoji: '🌌',
    titleEn: 'Staying at Muzdalifah (Wuqūf & Mabīt)', titleBn: 'মুযদালিফায় অবস্থান',
    descEn: 'After ʿArafah, pilgrims spend the night of ʿEid at Muzdalifah, combining Maghrib and ʿIshāʾ there. Ḥanafī: standing there (wuqūf) after Fajr is wājib, the night stay itself sunnah; Shāfiʿī & Ḥanbalī: the night stay is wājib; Mālikī: a brief halt there is wājib. "When you depart from ʿArafāt, remember Allah at al-Mashʿar al-Ḥarām." (2:198) Omitting the wājib without excuse requires a dam.',
    descBn: 'আরাফার পর হাজিরা ঈদের রাত মুযদালিফায় কাটান এবং সেখানে মাগরিব ও ইশা একত্রে পড়েন। হানাফি মতে: ফজরের পর সেখানে অবস্থান (উকুফ) ওয়াজিব, রাতযাপন সুন্নত; শাফিয়ী ও হাম্বলী মতে: রাতযাপন ওয়াজিব; মালিকী মতে: সেখানে কিছুক্ষণ থামা ওয়াজিব। "তোমরা যখন আরাফাত থেকে ফিরে আস, তখন মাশআরুল হারামের কাছে আল্লাহকে স্মরণ কর।" (২:১৯৮) ওজর ছাড়া ওয়াজিবটি বাদ দিলে দম আবশ্যক।',
    ref: '2:198',
  },
  { emoji: '🪨',
    titleEn: 'Ramy al-Jamarāt (Stoning the Pillars)', titleBn: 'রামিয়ুল জামারাত (কঙ্কর নিক্ষেপ)',
    descEn: 'Casting pebbles at the Jamarāt — Jamrat al-ʿAqabah on ʿEid day, then all three on the days of Tashrīq — is a wājib of Ḥajj performed in order. The Prophet ﷺ stoned and said: "Take your rites from me." (Muslim 1297) Omitting a day\'s stoning without excuse requires a dam; the Ḥajj remains valid.',
    descBn: 'জামারাতে কঙ্কর মারা হজের ওয়াজিব, যা ধারাবাহিকভাবে করতে হয়: ঈদের দিন জামরাতুল আকাবায়, তারপর তাশরিকের দিনগুলোতে তিন জামরাতেই। নবী ﷺ কঙ্কর মেরে বলেছেন: "আমার কাছ থেকে তোমাদের হজের নিয়ম শিখে নাও।" (মুসলিম ১২৯৭) বিনা ওজরে কোনো দিনের কঙ্কর মারা বাদ দিলে দম দিতে হয়; তবে হজ সহিহ থাকে।',
    ref: '22:29',
  },
  { emoji: '🚶‍♂️',
    titleEn: 'Saʿy between Ṣafā & Marwah', titleBn: 'সাফা ও মারওয়ার মাঝে সাঈ',
    descEn: 'Walking seven times between the hills of Ṣafā and Marwah. "Indeed, Ṣafā and Marwah are among the symbols of Allah." (2:158) The schools differ on its rank: Shāfiʿī, Mālikī & Ḥanbalī hold it a rukn/farḍ (Ḥajj invalid without it), while the Ḥanafī school classes it as wājib (compensated by a dam if omitted).',
    descBn: 'সাফা ও মারওয়া পাহাড়ের মাঝে সাতবার হাঁটা। "নিশ্চয়ই সাফা ও মারওয়া আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত।" (২:১৫৮) এর মর্যাদা নিয়ে মাযহাবগুলোর মতভেদ আছে: শাফিয়ী, মালিকী ও হাম্বলী মাযহাবে এটা রুকন/ফরজ (এটা ছাড়া হজ বাতিল), আর হানাফি মাযহাবে ওয়াজিব (বাদ পড়লে দম দিয়ে পূরণ করতে হয়)।',
    ref: '2:158',
  },
  { emoji: '✂️',
    titleEn: 'Ḥalq or Taqṣīr (Shaving/Trimming)', titleBn: 'হালক বা তাকসির (মাথা মুণ্ডানো/চুল ছোট করা)',
    descEn: 'Shaving the head (ḥalq) or trimming the hair (taqṣīr) to exit iḥrām is a wājib rite (Shāfiʿī: a rukn of Ḥajj). "You will surely enter al-Masjid al-Ḥarām... with your heads shaved and [hair] shortened." (48:27) The Prophet ﷺ supplicated three times for those who shaved and once for those who trimmed. (Bukhari 1727) Women only trim a fingertip\'s length.',
    descBn: 'ইহরাম থেকে হালাল হতে মাথা মুণ্ডানো (হালক) বা চুল ছোট করা (তাকসির) ওয়াজিব (শাফিয়ী মতে হজের রুকন)। "তোমরা অবশ্যই মসজিদুল হারামে প্রবেশ করবে... মাথা মুণ্ডন ও চুল ছাঁটা অবস্থায়।" (৪৮:২৭) নবী ﷺ মাথা মুণ্ডানো লোকদের জন্য তিনবার আর চুল ছোট করা লোকদের জন্য একবার দোয়া করেছেন। (বুখারি ১৭২৭) নারীরা শুধু আঙুলের মাথা পরিমাণ চুল কাটবেন।',
    ref: '48:27',
  },
];

const WAJIB_QUR = [
  { ref: '73:20', en: '"So recite what is easy from the Quran. He knows that there will be among you those who are ill and others travelling throughout the land seeking Allah\'s bounty…"', bn: '"যতটুকু সহজ হয় কুরআন থেকে পড়। তিনি জানেন তোমাদের মধ্যে অসুস্থ থাকবে এবং অন্যরা আল্লাহর অনুগ্রহ অন্বেষণে ভূপৃষ্ঠে সফর করবে…"' },
  { ref: '108:1-3', en: '"Indeed, We have granted you al-Kawthar. So pray to your Lord and sacrifice. Indeed, your enemy is the one cut off."', bn: '"নিশ্চয়ই আমি তোমাকে কাওসার দান করেছি। সুতরাং তোমার রবের জন্য নামাজ পড় ও কুরবানি কর। নিশ্চয়ই তোমার শত্রুই বিচ্ছিন্ন।"' },
  { ref: '22:36', en: '"And the camels and cattle — We have appointed them for you as among the symbols of Allah…"', bn: '"আর উট ও গরু — আমি এগুলো তোমাদের জন্য আল্লাহর নিদর্শনসমূহের অন্তর্ভুক্ত করেছি…"' },
  { ref: '22:29', en: '"Then let them end their untidiness, fulfill their vows, and perform tawaf around the ancient House."', bn: '"তারপর তারা যেন তাদের ময়লা দূর করে, মান্নত পূর্ণ করে এবং প্রাচীন ঘরের চারপাশে তাওয়াফ করে।"' },
  { ref: '2:43', en: '"And establish prayer and give zakāh and bow with those who bow [in worship]."', bn: '"তোমরা নামাজ কায়েম কর, যাকাত দাও এবং রুকুকারীদের সাথে রুকু কর।"' },
  { ref: '5:97', en: '"Allah has appointed the Kaʿbah, the Sacred House, as a means of support and order for the people."', bn: '"আল্লাহ কাবাকে, পবিত্র ঘরকে, মানুষের জন্য প্রতিষ্ঠার কেন্দ্রবিন্দু করেছেন।"' },
  { ref: '98:5', en: '"And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and give zakāh."', bn: '"তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা খাঁটি মনে একনিষ্ঠভাবে আল্লাহর ইবাদত করবে, নামাজ কায়েম করবে ও যাকাত দেবে।"' },
  { ref: '2:196', en: '"And complete the Ḥajj and ʿumrah for Allah. But if you are prevented, then [offer] whatever sacrificial animal is available…"', bn: '"আল্লাহর উদ্দেশে হজ ও উমরা পূর্ণ কর। কিন্তু যদি বাধা পাও, তাহলে যত সহজে সম্ভব কুরবানি দাও…"' },
  { ref: '22:34', en: '"And for all religion We have appointed a rite [of sacrifice], that they may mention the name of Allah over what He has provided them of sacrificial animals."', bn: '"প্রতিটি সম্প্রদায়ের জন্য আমি কুরবানির বিধান রেখেছি, যাতে তারা আল্লাহ-প্রদত্ত চতুষ্পদ জন্তুর উপর আল্লাহর নাম উচ্চারণ করে।"' },
  { ref: '73:2-4', en: '"Arise [to pray] the night, except for a little — half of it or subtract from it a little, or add to it; and recite the Quran with measured recitation."', bn: '"রাতে নামাজে দাঁড়াও, অল্প সময় বাদে: অর্ধেক রাত বা তার চেয়ে কিছু কম, অথবা তার চেয়ে বেশি; এবং কুরআন সুন্দরভাবে তিলাওয়াত কর।"' },
  { ref: '2:203', en: '"And remember Allah during [specific] numbered days. Then whoever hastens [his departure] in two days — there is no sin upon him; and whoever delays — there is no sin upon him — for him who fears Allah."', bn: '"আর তোমরা নির্দিষ্ট সংখ্যক দিনে আল্লাহকে স্মরণ কর। অতঃপর যে দুই দিনে তাড়াহুড়া করে চলে যায় তার কোনো গুনাহ নেই, আর যে দেরি করে তারও গুনাহ নেই — যে তাকওয়া অবলম্বন করে তার জন্য।"' },
  { ref: '2:238', en: '"Maintain with care the [obligatory] prayers and [especially] the middle prayer, and stand before Allah, devoutly obedient."', bn: '"তোমরা নামাজগুলোর প্রতি যত্নবান হও, বিশেষত মধ্যবর্তী নামাজের, এবং আল্লাহর সামনে বিনীতভাবে দাঁড়াও।"' },
];

const WAJIB_HADITH = [
  {
    textEn: '"Make witr the last of your prayers at night."',
    textBn: '"রাতের নামাজের শেষটিকে বিতর বানাও।"',
    srcEn: 'Bukhari 998, Muslim 751',
    srcBn: 'বুখারি ৯৯৮, মুসলিম ৭৫১',
  },
  {
    textEn: '"Witr is a right [ḥaqq]. Whoever does not perform witr is not from us."',
    textBn: '"বিতর হক (অধিকার)। যে বিতর পড়ে না সে আমাদের দলের নয়।"',
    srcEn: 'Abu Dawud 1419, Ahmad — chain disputed (al-Ḥākim: ṣaḥīḥ; al-Albānī: weak)',
    srcBn: 'আবু দাউদ ১৪১৯, আহমাদ — সনদ নিয়ে মতভেদ (হাকিম: সহিহ; আলবানী: যঈফ)',
  },
  {
    textEn: '"The Messenger of Allah ﷺ made zakāt al-fiṭr compulsory upon slaves and free people, males and females, young and old among the Muslims — one sāʿ of dates or barley — and ordered it to be paid before the people go out for the \'Eid prayer."',
    textBn: '"রাসূলুল্লাহ ﷺ দাস-মুক্ত, পুরুষ-মহিলা, ছোট-বড় সকল মুসলিমের উপর এক সা খেজুর বা যব দ্বারা ফিতরা ফরজ করেছেন এবং ঈদের নামাজে বের হওয়ার আগেই তা আদায়ের নির্দেশ দিয়েছেন।"',
    srcEn: 'Bukhari 1503',
    srcBn: 'বুখারি ১৫০৩',
  },
  {
    textEn: '"There is no prayer for one who does not recite al-Fātiḥah."',
    textBn: '"যে সূরা ফাতিহা পড়ে না তার নামাজ হয় না।"',
    srcEn: 'Bukhari 756, Muslim 394',
    srcBn: 'বুখারি ৭৫৬, মুসলিম ৩৯৪',
  },
  {
    textEn: '"Whoever slaughters the sacrifice before the prayer, let him slaughter another animal in its place; and whoever has not yet slaughtered, let him slaughter."',
    textBn: '"যে ঈদের নামাজের আগে কুরবানি করে, সে যেন তার জায়গায় আরেকটি জবাই করে; যে এখনো করেনি সে যেন আল্লাহর নামে জবাই করে।"',
    srcEn: 'Bukhari 5562, Muslim 1960',
    srcBn: 'বুখারি ৫৫৬২, মুসলিম ১৯৬০',
  },
  {
    textEn: '"When any of you sits [in prayer], let him say: At-Taḥiyyātu lillāh, waṣ-ṣalawātu waṭ-ṭayyibāt…"',
    textBn: '"তোমাদের কেউ বৈঠকে বসলে বলবে: আত-তাহিয়্যাতু লিল্লাহ, ওয়াস-সালাওয়াতু ওয়াত-ত্বাইয়িবাত…"',
    srcEn: 'Bukhari 831, Muslim 402',
    srcBn: 'বুখারি ৮৩১, মুসলিম ৪০২',
  },
  {
    textEn: '"When one of you is uncertain in his prayer and does not know how many he prayed — three or four — let him cast aside doubt and build on what he is sure of, then perform two prostrations before salam."',
    textBn: '"তোমাদের কেউ নামাজে সন্দেহে পড়লে (তিন পড়েছে না চার), সন্দেহ ছেড়ে দিয়ে নিশ্চিত সংখ্যার উপর ভিত্তি করুক, তারপর সালামের আগে দুটি সিজদা করুক।"',
    srcEn: 'Muslim 571',
    srcBn: 'মুসলিম ৫৭১',
  },
  {
    textEn: '"Whoever made a vow to obey Allah, let him obey Him; whoever made a vow to disobey Allah, let him not disobey Him."',
    textBn: '"যে আল্লাহর আনুগত্যের মান্নত করেছে সে যেন তা পূরণ করে; যে আল্লাহর নাফরমানির মান্নত করেছে সে যেন তা না করে।"',
    srcEn: 'Bukhari 6696',
    srcBn: 'বুখারি ৬৬৯৬',
  },
  {
    textEn: '"When the son of Adam recites a verse of prostration and prostrates, Satan withdraws weeping and says: Woe to me! The son of Adam was ordered to prostrate and he prostrated, so Paradise is his; and I was ordered to prostrate but I refused, so the Fire is mine."',
    textBn: '"আদম সন্তান যখন সিজদার আয়াত তিলাওয়াত করে সিজদা করে, তখন শয়তান কাঁদতে কাঁদতে সরে যায় ও বলে: হায় আমার দুর্ভাগ্য! আদম সন্তানকে সিজদার নির্দেশ দেওয়া হলো, সে সিজদা করল, ফলে তার জন্য জান্নাত; আর আমাকে সিজদার নির্দেশ দেওয়া হয়েছিল, আমি অস্বীকার করলাম, ফলে আমার জন্য জাহান্নাম।"',
    srcEn: 'Muslim 81',
    srcBn: 'মুসলিম ৮১',
  },
  {
    textEn: '"ʿUmrah to ʿUmrah is an expiation for [the sins committed] between them, and an accepted Ḥajj (Ḥajj mabrūr) has no reward except Paradise."',
    textBn: '"এক উমরা থেকে আরেক উমরা এর মধ্যবর্তী সময়ের গুনাহের কাফফারা, আর কবুল হজের (হজে মাবরূর) প্রতিদান জান্নাত ছাড়া কিছুই নয়।"',
    srcEn: 'Bukhari 1773, Muslim 1349',
    srcBn: 'বুখারি ১৭৭৩, মুসলিম ১৩৪৯',
  },
];

class WajibModule {
  constructor() {
    this.root = document.getElementById('wajib-container');
    if (!this.root) return;
    this.language = (typeof appSettings !== 'undefined' && appSettings) ? appSettings.get('language') : 'en';
    this.rendered = false;
    window.addEventListener('tabChanged', (e) => { try { if (e && e.detail && e.detail.tabId === 'wajib') this.render(); } catch (_) {} });
    window.addEventListener('settingChanged', (e) => {
      try { if (e && e.detail && e.detail.key === 'language') { this.language = e.detail.value || 'en'; if (this.rendered) this.render(); } } catch (_) {}
    });
    this.root.addEventListener('click', (e) => this.handleClick(e));
  }
  tt(key) {
    const fb = WAJIB_I18N[key];
    if (fb) {
      if (this.language && fb[this.language]) return fb[this.language];
      if (this.language === 'bn') return fb.bn || fb.en;
      if (this.language && this.language !== 'en' && typeof CI18N !== 'undefined') { const tr = CI18N.tr(this.language, fb.en); if (tr) return tr; }
      return fb.en;
    }
    return (typeof t === 'function') ? t(key, this.language) : key;
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
          <div class="p-6 bg-gradient-to-br from-indigo-50 to-transparent dark:from-indigo-900/10">
            <div class="text-4xl mb-2" aria-hidden="true">🔷</div>
            <h2 class="text-2xl font-bold text-gray-800 dark:text-gray-100">${this.esc(this.tt('islam_wajib_title'))}</h2>
            <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed" dir="auto">${this.esc(this.tt('islam_wajib_subtitle'))}</p>
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">📚 ${L({ en: 'Common Wajib Acts', bn: 'সাধারণ ওয়াজিব আমল' })}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${WAJIB_ITEMS.map(w => `
              <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/40">
                <div class="text-sm font-semibold text-indigo-800 dark:text-indigo-200"><span aria-hidden="true">${w.emoji}</span> ${L({ en: w.titleEn, bn: w.titleBn })}</div>
                <p class="text-xs text-indigo-700 dark:text-indigo-300 mt-1 leading-relaxed" dir="auto">${L({ en: w.descEn, bn: w.descBn })}</p>
                ${this.isVerseRef(this.esc(w.ref.split(',')[0].trim())) ? `<button type="button" data-wajib-ayah="${this.esc(w.ref.split(',')[0].trim())}" class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-[0.65rem] font-medium hover:bg-indigo-500 hover:text-white transition-colors">📖 ${this.esc(w.ref)}</button>` : `<span class="mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-[0.65rem] font-medium transition-colors">📖 ${this.esc(w.ref)}</span>`}
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">💬 ${L({ en: 'Hadith on Wajib', bn: 'ওয়াজিব সম্পর্কে হাদিস' })}</h3>
          <div class="space-y-3">
            ${WAJIB_HADITH.map(h => `
              <div class="p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/40">
                <p class="text-sm text-green-800 dark:text-green-200 leading-relaxed" dir="auto">${L({ en: h.textEn, bn: h.textBn })}</p>
                <p class="text-xs text-gray-400 dark:text-gray-500 mt-1">— ${L({ en: h.srcEn, bn: h.srcBn })}</p>
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">📖 ${L({ en: 'Quranic References on Wajib', bn: 'ওয়াজিব সম্পর্কে কুরআনি রেফারেন্স' })}</h3>
          <div class="space-y-3">
            ${WAJIB_QUR.map(q => `
              <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/40">
                <p class="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed" dir="auto">${L({ en: q.en, bn: q.bn })}</p>
                ${this.isVerseRef(this.esc(q.ref)) ? `<button type="button" data-wajib-ayah="${this.esc(q.ref)}" class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium hover:bg-indigo-500 hover:text-white transition-colors">📖 ${this.esc(q.ref)} ${L({ en: 'Read', bn: 'পড়ুন' })}</button>` : `<span class="mt-2 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-medium transition-colors">📖 ${this.esc(q.ref)} ${L({ en: 'Read', bn: 'পড়ুন' })}</span>`}
              </div>`).join('')}
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-1 flex items-center gap-2">📊 ${L({ en: 'Wajib vs Sunnah — Practical Comparison', bn: 'ওয়াজিব বনাম সুন্নাত — ব্যবহারিক তুলনা' })}</h3>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed" dir="auto">${L({ en: 'Ḥanafī classification shown. In the Shāfiʿī, Mālikī and Ḥanbalī schools, wājib and fard are generally synonymous, so the ranking of several acts below differs.', bn: 'হানাফি শ্রেণীবিভাগ দেখানো হয়েছে। শাফিয়ী, মালিকী ও হাম্বলী মাযহাবে ওয়াজিব ও ফরজ সাধারণত সমার্থক; তাই নিচের কিছু আমলের মর্যাদা তাদের কাছে ভিন্ন।' })}</p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs border-collapse">
              <thead>
                <tr class="bg-indigo-50 dark:bg-indigo-900/30">
                  <th class="text-left p-2 border border-indigo-100 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-200 font-semibold">${L({ en: 'Act', bn: 'আমল' })}</th>
                  <th class="text-left p-2 border border-indigo-100 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-200 font-semibold">${L({ en: 'Ḥanafī', bn: 'হানাফি' })}</th>
                  <th class="text-left p-2 border border-indigo-100 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-200 font-semibold">${L({ en: 'Other Schools', bn: 'অন্য মাযহাব' })}</th>
                  <th class="text-left p-2 border border-indigo-100 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-200 font-semibold">${L({ en: 'If Omitted Without Excuse', bn: 'ওজর ছাড়া ছাড়লে' })}</th>
                </tr>
              </thead>
              <tbody>
                ${[
                  { act: { en: 'Witr prayer', bn: 'বিতর নামাজ' }, hanafi: { en: 'Wājib', bn: 'ওয়াজিব' }, other: { en: 'Sunnah muʾakkadah', bn: 'সুন্নাতে মুয়াক্কাদা' }, cons: { en: 'Sin (Ḥanafī); great reward missed (others)', bn: 'গুনাহ (হানাফি); মহা সওয়াব মিস (অন্যরা)' } },
                  { act: { en: '\'Eid prayer', bn: 'ঈদের নামাজ' }, hanafi: { en: 'Wājib', bn: 'ওয়াজিব' }, other: { en: 'Sunnah muʾakkadah (Ḥanbalī: farḍ kifāyah)', bn: 'সুন্নাতে মুয়াক্কাদা (হাম্বলী: ফরজে কিফায়া)' }, cons: { en: 'Sin (Ḥanafī); no individual sin (others)', bn: 'গুনাহ (হানাফি); ব্যক্তিগত গুনাহ নেই (অন্যরা)' } },
                  { act: { en: 'Qurbānī / Uḍḥiyyah', bn: 'কুরবানি / উযহিয়্যা' }, hanafi: { en: 'Wājib (if nisāb-owner)', bn: 'ওয়াজিব (নেসাবের মালিক হলে)' }, other: { en: 'Sunnah muʾakkadah', bn: 'সুন্নাতে মুয়াক্কাদা' }, cons: { en: 'Sin (Ḥanafī); strongly discouraged to omit (others)', bn: 'গুনাহ (হানাফি); ছাড়া অত্যন্ত অপছন্দনীয় (অন্যরা)' } },
                  { act: { en: 'Al-Fātiḥah in each rakʿah', bn: 'প্রতি রাকাতে সূরা ফাতিহা' }, hanafi: { en: 'Wājib (imām & munfarid; first two rakʿahs of farḍ)', bn: 'ওয়াজিব (ইমাম ও একা; ফরজের প্রথম দুই রাকাতে)' }, other: { en: 'Fard / Rukn (invalidates prayer if omitted)', bn: 'ফরজ / রুকন (বাদ পড়লে নামাজ বাতিল)' }, cons: { en: 'Sajda al-sahw (Ḥanafī); prayer invalid (others)', bn: 'সিজদায়ে সাহু (হানাফি); নামাজ বাতিল (অন্যরা)' } },
                  { act: { en: 'Tashahhud in final sitting', bn: 'শেষ বৈঠকে তাশাহহুদ' }, hanafi: { en: 'Wājib', bn: 'ওয়াজিব' }, other: { en: 'Fard / Rukn (Shāfiʿī, Ḥanbalī); sunnah (Mālikī)', bn: 'ফরজ / রুকন (শাফিয়ী, হাম্বলী); সুন্নাত (মালিকী)' }, cons: { en: 'Sajda al-sahw (Ḥanafī); prayer invalid (Shāfiʿī, Ḥanbalī)', bn: 'সিজদায়ে সাহু (হানাফি); নামাজ বাতিল (শাফিয়ী, হাম্বলী)' } },
                  { act: { en: 'Ṣadaqat al-Fiṭr (Fitrah)', bn: 'সাদাকাতুল ফিতর' }, hanafi: { en: 'Wājib', bn: 'ওয়াজিব' }, other: { en: 'Wājib / Fard (Shāfiʿī, Mālikī, Ḥanbalī)', bn: 'ওয়াজিব / ফরজ (শাফিয়ী, মালিকী, হাম্বলী)' }, cons: { en: 'Sin if omitted while able', bn: 'সামর্থ্য থাকলে ছাড়া গুনাহ' } },
                ].map((r, i) => `
                  <tr class="${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-indigo-50/40 dark:bg-indigo-900/10'}">
                    <td class="p-2 border border-indigo-100 dark:border-indigo-900/30 font-medium text-gray-800 dark:text-gray-100" dir="auto">${L(r.act)}</td>
                    <td class="p-2 border border-indigo-100 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-300" dir="auto">${L(r.hanafi)}</td>
                    <td class="p-2 border border-indigo-100 dark:border-indigo-900/30 text-gray-600 dark:text-gray-300" dir="auto">${L(r.other)}</td>
                    <td class="p-2 border border-indigo-100 dark:border-indigo-900/30 text-gray-500 dark:text-gray-400" dir="auto">${L(r.cons)}</td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5">
          <h3 class="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">🧠 ${L({ en: 'Self-check', bn: 'নিজেই যাচাই' })}</h3>
          <div class="space-y-2">
            ${[
              { q: { en: 'How does wājib differ from fard in the Ḥanafī school?', bn: 'হানাফি মাযহাবে ওয়াজিব ফরজ থেকে কীভাবে ভিন্ন?' }, a: { en: 'Wājib is proven by probable (ẓannī) evidence, one degree below fard which is proven by definitive (qaṭ\'ī) evidence. Denying a fard is kufr; denying a wājib is a major sin, not kufr.', bn: 'ওয়াজিব প্রবল (যান্নী) দলিল দ্বারা প্রমাণিত, ফরজের এক ধাপ নিচে যা নিশ্চিত (কাত্বী) দলিল দ্বারা প্রমাণিত। ফরজ অস্বীকার করলে কুফর; ওয়াজিব অস্বীকার কবিরা গুনাহ, কুফর নয়।' } },
              { q: { en: 'Is Witr fard, wājib or sunnah?', bn: 'বিতর কি ফরজ, ওয়াজিব নাকি সুন্নাত?' }, a: { en: 'Ḥanafī: wājib. Shāfiʿī, Mālikī, Ḥanbalī: sunnah mu\'akkadah (strong sunnah). All agree the Prophet ﷺ kept to it, even in travel.', bn: 'হানাফি: ওয়াজিব। শাফিয়ী, মালিকী, হাম্বলী: সুন্নাতে মুয়াক্কাদা। সবাই একমত যে নবী ﷺ সফরেও তা নিয়মিত পড়তেন।' } },
              { q: { en: 'What happens if I miss a wājib in prayer?', bn: 'নামাজে ওয়াজিব ছুটে গেলে কী করব?' }, a: { en: 'If it was missed by forgetfulness, you perform sajda al-sahw (two extra prostrations) after tashahhud — before or after salam depending on the school. If you notice only after the salam, you can still do it as long as you have not spoken, left your place or otherwise ended the prayer; otherwise (or if the wājib was left deliberately) the Ḥanafī school says the prayer should be repeated.', bn: 'ভুলে ছুটে গেলে তাশাহহুদের পর সিজদায়ে সাহু (দুই অতিরিক্ত সিজদা) করবেন — মাযহাব অনুযায়ী সালামের আগে বা পরে। সালামের পর খেয়াল হলে, কথা না বলে, জায়গা না ছেড়ে বা নামাজ ভঙ্গকারী কিছু না করে থাকলে তখনও তা করা যায়; নইলে (অথবা ওয়াজিব ইচ্ছাকৃতভাবে ছাড়লে) হানাফি মতে নামাজ পুনরায় পড়া উচিত।' } },
              { q: { en: 'Is Qurbānī on every household or every person?', bn: 'কুরবানি কি প্রতি পরিবারে না প্রতি ব্যক্তির উপর?' }, a: { en: 'Ḥanafī: on every adult, sane, resident Muslim who owns nisab — even multiple family members if each has nisab. Other schools: sunnah mu\'akkadah on the household head with the whole family sharing the reward.', bn: 'হানাফি: প্রত্যেক প্রাপ্তবয়স্ক, সুস্থ, মুকিম মুসলিম যার নেসাব আছে — একই পরিবারে একাধিক ব্যক্তির উপরও ওয়াজিব যদি প্রত্যেকের নেসাব থাকে। অন্য মাযহাবে: পরিবারের প্রধানের উপর সুন্নাতে মুয়াক্কাদা, সবাই সওয়াবের অংশীদার।' } },
              { q: { en: 'Can I break a vow (nadhr) that I made?', bn: 'করা মান্নত কি ভাঙ্গা যায়?' }, a: { en: 'A vow to do a good deed (fasting, charity, prayer) MUST be fulfilled. If unable, one pays kaffārah (as for a broken oath: feed or clothe 10 poor people, or, if that is not possible, fast 3 days). Vows to sin are invalid and must not be fulfilled.', bn: 'ভালো কাজের মান্নত (রোজা, দান, নামাজ) অবশ্যই পূরণ করতে হবে। অসম্ভব হলে কাফফারা দিতে হবে (কসম ভঙ্গের মতো: ১০ গরিবকে খাওয়ানো বা কাপড় দেওয়া, তা সম্ভব না হলে ৩ দিন রোজা)। পাপের মান্নত বাতিল, তা পূরণ করা যাবে না।' } },
              { q: { en: 'Is Ṣadaqat al-Fiṭr obligatory on poor Muslims too?', bn: 'গরিব মুসলিমের উপরও ফিতরা ওয়াজিব?' }, a: { en: 'Shāfiʿī, Mālikī & Ḥanbalī: yes — if one possesses food in excess of one\'s own and family\'s needs for that day and night of Eid. Ḥanafī: only on one who owns the nisāb amount beyond basic needs. It is given on behalf of every household member including young children. If genuinely unable to afford it, the obligation is lifted.', bn: 'শাফিয়ী, মালিকী ও হাম্বলী মতে: হ্যাঁ — ঈদের দিন ও রাতের নিজের ও পরিবারের প্রয়োজনের বেশি খাবার থাকলে। হানাফি মতে: কেবল মৌলিক প্রয়োজনের অতিরিক্ত নেসাব পরিমাণ সম্পদের মালিকের উপর। শিশুসহ প্রতিটি পরিবারের সদস্যের পক্ষ থেকে দিতে হবে। সত্যিই সামর্থ্য না থাকলে দায় নেই।' } },
              { q: { en: 'How many extra takbīrs are there in Eid prayer, and when are they recited?', bn: 'ঈদের নামাজে কতটি অতিরিক্ত তাকবির এবং কখন বলতে হয়?' }, a: { en: 'Ḥanafī: 3 extra in the 1st rak\'ah before recitation, 3 in the 2nd after recitation. Shāfiʿī: 7 in the 1st (after opening du\'a), 5 in the 2nd (before recitation). Mālikī/Ḥanbalī: 6 then 5 (7 in the 1st counting the opening takbīr). All: two rak\'ahs with elevated voice, khutbah after prayer.', bn: 'হানাফি: প্রথম রাকাতে কিরাতের আগে ৩, দ্বিতীয়তে কিরাতের পরে ৩। শাফিয়ী: প্রথমে ৭টি (ইফতিতাহের পরে), দ্বিতীয়তে ৫টি (কিরাতের আগে)। মালিকী/হাম্বলী: ৬ তারপর ৫ (তাকবিরে তাহরিমাসহ প্রথমে ৭)। সবাই: দুই রাকাত উচ্চস্বরে, নামাজের পরে খুতবা।' } },
              { q: { en: 'What are the valid species and minimum ages for Qurbānī?', bn: 'কুরবানির বৈধ পশু ও ন্যূনতম বয়স কী?' }, a: { en: 'Ḥanafī minimums: Camel: 5 years. Cattle (cow/buffalo/ox): 2 years. Sheep or goat: 1 year (a plump 6-month lamb is also acceptable). Camels and cattle may serve for up to 7 people; sheep and goats for 1 person each. Time: after Eid prayer until sunset of 12 Dhul-Hijjah (3 slaughter days: Ḥanafī, Mālikī, Ḥanbalī); the Shāfiʿī school extends it to sunset of 13 Dhul-Hijjah.', bn: 'হানাফি মতে ন্যূনতম বয়স: উট: ৫ বছর। গরু/মহিষ/বলদ: ২ বছর। ভেড়া বা ছাগল: ১ বছর (মোটাতাজা ৬ মাসের মেষও জায়েয)। উট ও গরু ৭ জনের পক্ষ থেকে; ভেড়া-ছাগল ১ জনের পক্ষ থেকে। সময়: ঈদের নামাজের পর থেকে ১২ জিলহজের সূর্যাস্ত পর্যন্ত (৩ দিন: হানাফি, মালিকী, হাম্বলী); শাফিয়ী মতে ১৩ জিলহজের সূর্যাস্ত পর্যন্ত।' } },
              { q: { en: 'Why does the Ḥanafī school treat witr as wājib rather than sunnah?', bn: 'হানাফি মাযহাব বিতরকে সুন্নাতের বদলে ওয়াজিব কেন বলে?' }, a: { en: 'Because of the hadith: "Witr is a right (ḥaqq); whoever does not pray witr is not from us." (Abu Dawud 1419; al-Ḥākim graded it ṣaḥīḥ, al-Albānī weak) Ḥanafī scholars read ḥaqq as indicating wujūb (obligation), while other schools understand it as strong emphasis on a sunnah (taʾkīd).', bn: 'এই হাদিসের কারণে: "বিতর হক; যে বিতর পড়ে না সে আমাদের দলের নয়।" (আবু দাউদ ১৪১৯; হাকিম একে সহিহ, আলবানী যঈফ বলেছেন) হানাফি আলেমরা "হক" শব্দটিকে ওয়াজিবের নির্দেশক মনে করেন, অন্য মাযহাবগুলো এটিকে সুন্নাতের উপর তাকিদ বলে।' } },
              { q: { en: 'What wājib acts of Ḥajj require a compensatory slaughter (dam) if omitted?', bn: 'হজের কোন ওয়াজিব বাদ পড়লে দম (ক্ষতিপূরণ কুরবানি) লাগে?' }, a: { en: 'Ḥanafī school: the wājibāt of Hajj beyond its arkān include standing (wuqūf) at Muzdalifah after Fajr, throwing pebbles at the Jamarat, and performing tawāf al-wadāʿ (farewell tawaf, for non-Makkans). Missing any one requires a dam (slaughter in Makkah); the Hajj remains valid.', bn: 'হানাফি মতে হজের রুকনের বাইরে ওয়াজিব হলো: ফজরের পর মুযদালিফায় অবস্থান (উকুফ), জামারাতে কঙ্কর নিক্ষেপ এবং তাওয়াফে বিদা (মক্কাবাসী ছাড়া)। একটি বাদ পড়লে মক্কায় দম (পশু জবাই) দিতে হয়; হজ সহিহ থাকে।' } },
            ].map(item => `
              <details class="rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-900/40 overflow-hidden">
                <summary class="flex items-center gap-2 p-3 cursor-pointer list-none hover:bg-indigo-100/50 dark:hover:bg-indigo-900/30">
                  <span class="text-indigo-600 dark:text-indigo-400 text-sm">❓</span>
                  <span class="flex-1 text-sm font-medium text-gray-800 dark:text-gray-100" dir="auto">${L(item.q)}</span>
                  <span class="text-indigo-500 text-xs">▼</span>
                </summary>
                <div class="px-4 pb-3 pt-1 text-xs text-gray-700 dark:text-gray-200 leading-relaxed border-t border-indigo-100 dark:border-indigo-900/40" dir="auto">✅ ${L(item.a)}</div>
              </details>`).join('')}
          </div>
        </div>
      </div>`;
  }
  handleClick(e) {
    const ayah = e.target.closest('[data-wajib-ayah]');
    if (ayah) { try { if (typeof ayahModal !== 'undefined' && ayahModal && ayahModal.open) ayahModal.open(ayah.getAttribute('data-wajib-ayah')); } catch (_) {} }
  }
}

let wajibModule;
document.addEventListener('DOMContentLoaded', () => { wajibModule = new WajibModule(); });
