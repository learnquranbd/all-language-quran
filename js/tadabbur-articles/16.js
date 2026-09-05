/**
 * Tadabbur long-form articles — surah 16.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "16:18": {
    "sections": [
      {
        "h": {
          "en": "A Surah That Counts Aloud",
          "bn": "যে সূরা সরবে গণনা করে"
        },
        "p": [
          {
            "en": "Surah an-Nahl opens with a long inventory of favors before this verse sums it up. Cattle are named in 16:5 with their warmth and their uses; rain in 16:10 giving drink and raising pasture; the sea in 16:14 with its fresh flesh, its ornaments, and the ships cleaving through it; mountains, rivers, and stars follow. The list is deliberate: the surah makes the reader count along for many verses, and then tells him the count can never be finished.",
            "bn": "সূরা আন-নাহল এই আয়াতে উপসংহার টানার আগে নিয়ামতের এক দীর্ঘ তালিকা দিয়ে শুরু হয়। 16:5 আয়াতে গবাদিপশুর নাম আসে তাদের উষ্ণতা ও উপকারসহ; 16:10 আয়াতে বৃষ্টি — যা পানীয় দেয় ও তৃণভূমি জাগায়; 16:14 আয়াতে সমুদ্র — তার তাজা গোশত, অলংকার আর বুক চিরে চলা জাহাজসহ; এরপর আসে পাহাড়, নদী ও তারা। তালিকাটি ইচ্ছাকৃত: সূরাটি পাঠককে বহু আয়াত ধরে সঙ্গে সঙ্গে গুনতে বাধ্য করে, তারপর জানিয়ে দেয় — এই গণনা কখনো শেষ করা যাবে না।"
          },
          {
            "en": "That is the setting of the summary verse — and if you were to count the favor of Allah, you could never enumerate it. The sentence appears again almost word for word in 14:34 inside another such list of gifts. The Quran does not ask for gratitude in the abstract; it walks through the gifts one by one first, and only then states that the walk could go on forever.",
            "bn": "এই হলো উপসংহার-আয়াতটির পটভূমি — আর তোমরা যদি আল্লাহর নিয়ামত গণনা করতে চাও, কখনোই তা সম্পূর্ণ গুনে শেষ করতে পারবে না। বাক্যটি প্রায় হুবহু আবার আসে 14:34 আয়াতে, দানসামগ্রীর এমনই আরেক তালিকার ভেতরে। কুরআন বিমূর্তভাবে কৃতজ্ঞতা চায় না; আগে উপহারগুলোর ভেতর দিয়ে একটি একটি করে হাঁটিয়ে নেয়, তারপরই বলে — এই হাঁটা চিরকাল চলতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting Versus Encompassing",
          "bn": "গণনা বনাম পরিবেষ্টন"
        },
        "p": [
          {
            "en": "Two different verbs carry the sentence. In ta'uddu, if you count — 'adda is tallying one by one. La tuhsuha — ahsa is to encompass a total completely, to close the ledger. The verse concedes the first and denies the second: begin the tally if you wish; you will never reach the bottom of the page. Even the object is singular, ni'mat Allah, the favor of Allah, as if to say that a single favor, traced honestly, already opens into more than can be followed.",
            "bn": "বাক্যটি বহন করছে দুটি ভিন্ন ক্রিয়াপদ। ইন তাউদ্দু — যদি তোমরা গণনা করো — 'আদ্দা মানে একটি একটি করে হিসাব করা। লা তুহসুহা — 'আহসা' মানে মোট অঙ্কটিকে পুরোপুরি পরিবেষ্টন করা, খাতা বন্ধ করা। আয়াতটি প্রথমটি মেনে নেয়, দ্বিতীয়টি অস্বীকার করে: ইচ্ছা হলে হিসাব শুরু করো; পাতার শেষ প্রান্তে কখনো পৌঁছাবে না। এমনকি কর্মপদটিও একবচনে — নি'মাতাল্লাহ, আল্লাহর নিয়ামত — যেন বলা হচ্ছে, সততার সঙ্গে অনুসরণ করলে একটিমাত্র নিয়ামতই এত কিছুতে খুলে যায় যে তার পিছু নেওয়া যায় না।"
          },
          {
            "en": "The commentators illustrate it from the body: one eye is sight, but also tears that clean it, lids that guard it, and a brain that reads what it sees — each a favor inside a favor. Add what no one perceives: dangers averted that we never knew existed, and provision routed to us through hands we never met. The impossibility of the count is not rhetorical exaggeration; it is a plain description of a creature sustained from every side.",
            "bn": "মুফাসসিরগণ দেহ থেকে এর দৃষ্টান্ত দেন: একটি চোখ মানে দৃষ্টি, কিন্তু সেই সঙ্গে অশ্রু যা তাকে পরিষ্কার রাখে, পাতা যা তাকে পাহারা দেয়, আর মস্তিষ্ক যা দেখা জিনিস পড়ে নেয় — প্রতিটিই নিয়ামতের ভেতরে নিয়ামত। এর সঙ্গে যোগ করুন যা কেউ টেরও পায় না: এমন সব বিপদ যা সরিয়ে দেওয়া হয়েছে অথচ আমরা জানতেই পারিনি, আর এমন রিযিক যা আমাদের কাছে পৌঁছেছে কখনো দেখা হয়নি এমন হাতের ভেতর দিয়ে। গণনার এই অসম্ভবতা কোনো অলংকারিক অতিরঞ্জন নয়; এটি চারদিক থেকে প্রতিপালিত এক সৃষ্টির সরল বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Twin Verse's Different Ending",
          "bn": "যমজ আয়াতের ভিন্ন সমাপ্তি"
        },
        "p": [
          {
            "en": "14:34 and this verse share the same clause about counting, and part ways at the close. There the sentence ends: indeed man is persistently unjust, ungrateful. Here it ends: indeed Allah is Forgiving, Merciful. The commentators read the two endings as the two sides of one account — what the count proves about us, and how Allah responds to what it proves. Confronted with a debt no creature can even calculate, the Quran's final word is not the debtor's failure but the Creditor's pardon.",
            "bn": "14:34 আয়াত আর এই আয়াত গণনা-বিষয়ক একই বাক্যাংশ ভাগ করে নেয়, আর শেষে এসে আলাদা পথ ধরে। সেখানে বাক্য শেষ হয়: নিশ্চয়ই মানুষ বড়ই যালিম, বড়ই অকৃতজ্ঞ। এখানে শেষ হয়: নিশ্চয়ই আল্লাহ ক্ষমাশীল, পরম দয়ালু। মুফাসসিরগণ এই দুই সমাপ্তিকে একই হিসাবের দুই পিঠ হিসেবে পড়েন — গণনাটি আমাদের সম্পর্কে কী প্রমাণ করে, আর যা প্রমাণিত হলো তার জবাবে আল্লাহ কী করেন। যে ঋণ কোনো সৃষ্টি হিসাবই করতে পারে না, তার মুখোমুখি দাঁড়িয়ে কুরআনের শেষ কথাটি ঋণীর ব্যর্থতা নয় — মহাজনের ক্ষমা।"
          },
          {
            "en": "As-Sa'di draws the consequence plainly: Allah forgives the shortfall in gratitude itself. No one has ever thanked Allah in proportion to what he received; the verse pairs the impossible arithmetic with the two names that answer it, al-Ghafur and ar-Rahim. Gratitude in Islam is therefore not a payment that clears a balance. It is the posture of someone who knows the balance cannot be cleared, and finds, precisely there, forgiveness and mercy.",
            "bn": "আস-সা'দী পরিণতিটি সরাসরি টেনে আনেন: কৃতজ্ঞতার ঘাটতিটুকুও আল্লাহ ক্ষমা করে দেন। যা পেয়েছে তার অনুপাতে আল্লাহকে শুকরিয়া জানাতে পারেনি কেউ কখনো; আয়াতটি এই অসম্ভব পাটিগণিতের পাশে বসিয়ে দেয় তার জবাব দেওয়া দুটি নাম — আল-গাফূর ও আর-রাহীম। তাই ইসলামে কৃতজ্ঞতা এমন কোনো পরিশোধ নয় যা হিসাব চুকিয়ে দেয়। এটি এমন একজনের ভঙ্গি, যে জানে হিসাব কোনোদিন চুকবে না — আর ঠিক সেখানেই পায় ক্ষমা ও রহমত।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks That Calls for Thanks",
          "bn": "যে শুকরিয়া আরও শুকরিয়া চায়"
        },
        "p": [
          {
            "en": "The scholars also observe a loop inside gratitude: the very ability to give thanks is itself a fresh favor deserving further thanks, so the count grows even while you are counting. 16:53 in the same surah states the premise — whatever favor you have, it is from Allah. Nothing in the ledger originates with us, including the tongue doing the thanking and the heart that means it. Rightly seen, this does not crush the servant; it frees him from ever imagining he has finished.",
            "bn": "আলিমগণ কৃতজ্ঞতার ভেতরে একটি চক্রও লক্ষ করেন: শুকরিয়া জানাতে পারার সামর্থ্যটুকুই এক নতুন নিয়ামত, যা আরও শুকরিয়া দাবি করে — ফলে গুনতে গুনতেই হিসাব বেড়ে চলে। একই সূরার 16:53 আয়াত ভিত্তিটি ঘোষণা করে — তোমাদের কাছে যে নিয়ামতই আছে তা আল্লাহরই পক্ষ থেকে। খাতার কোনো কিছুই আমাদের থেকে উৎসারিত নয় — যে জিহ্বা শুকরিয়া জানাচ্ছে আর যে হৃদয় তা অন্তর থেকে বলছে, সে দুটিও নয়। সঠিকভাবে দেখলে এটি বান্দাকে পিষে ফেলে না; বরং তাকে মুক্তি দেয় এই কল্পনা থেকে যে তার শুকরিয়া কখনো সম্পূর্ণ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grateful Slave",
          "bn": "কৃতজ্ঞ বান্দা"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from al-Mughirah ibn Shu'bah (RA) that the Prophet ﷺ stood in night prayer until his feet swelled, and when asked why he did this when he had already been forgiven, he answered: should I not be a grateful slave? Gratitude in that answer is not a sentiment but a workload. The one human being with the least to prove treated thankfulness as the strongest of motives — stronger than fear, stronger than need.",
            "bn": "আল-বুখারী মুগীরা ইবনে শু'বা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ রাতের নামাযে এত দীর্ঘ দাঁড়াতেন যে তাঁর দুই পা ফুলে যেত; জিজ্ঞেস করা হলো — আপনাকে তো ক্ষমা করেই দেওয়া হয়েছে, তবু কেন এমন করেন? তিনি উত্তর দিলেন: আমি কি কৃতজ্ঞ বান্দা হব না? এই উত্তরে কৃতজ্ঞতা কোনো অনুভূতি নয়, রীতিমতো পরিশ্রমের কাজ। যে একজন মানুষের প্রমাণ করার ছিল সবচেয়ে কম, তিনিই শুকরিয়াকে গণ্য করলেন সবচেয়ে জোরালো প্রেরণা হিসেবে — ভয়ের চেয়ে জোরালো, প্রয়োজনের চেয়েও জোরালো।"
          },
          {
            "en": "The classical teachers divide shukr across three organs: the heart that recognises the Giver, the tongue that names the gift, and the limbs that use the gift in obedience rather than against Him. The division is practical. A favor acknowledged in the heart, spoken of without boasting, and spent where its Giver is pleased has been thanked in full measure — as full, at least, as a creature's measure ever gets.",
            "bn": "প্রাচীন শিক্ষকগণ শুকরকে তিনটি অঙ্গে ভাগ করেন: হৃদয় — যে দাতাকে চিনে নেয়; জিহ্বা — যে দানটির নাম নেয়; আর অঙ্গ-প্রত্যঙ্গ — যা দানটিকে তাঁর বিরুদ্ধে নয়, তাঁর আনুগত্যে ব্যবহার করে। ভাগটি ব্যবহারিক। যে নিয়ামত হৃদয়ে স্বীকৃত, অহংকার ছাড়া মুখে উচ্চারিত, আর দাতার সন্তুষ্টির জায়গায় ব্যয়িত — তার শুকরিয়া পূর্ণ মাত্রায় আদায় হয়েছে; অন্তত কোনো সৃষ্টির মাত্রা যতটা পূর্ণ হতে পারে, ততটা।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting Anyway",
          "bn": "তবু গণনা করা"
        },
        "p": [
          {
            "en": "The verse denies that the count can be completed, not that it should be attempted. The practice is simple: name a few favors each day, specifically — this recovery, this meal, this friend — because gratitude attaches to what is noticed, and heedlessness to what is assumed. The habit retrains attention away from the one thing missing toward the many things present, which is where the verse has been pointing all along.",
            "bn": "আয়াতটি অস্বীকার করে যে গণনা শেষ করা যাবে — এ কথা নয় যে চেষ্টাই করা উচিত নয়। অনুশীলনটি সরল: প্রতিদিন কয়েকটি নিয়ামতের নাম নিন, সুনির্দিষ্টভাবে — এই আরোগ্য, এই খাবার, এই বন্ধু — কারণ কৃতজ্ঞতা জড়ায় যা লক্ষ করা হয় তার সঙ্গে, আর গাফলত জড়ায় যা ধরে নেওয়া হয় তার সঙ্গে। অভ্যাসটি মনোযোগকে নতুন করে গড়ে তোলে — যে একটি জিনিস নেই তা থেকে সরিয়ে, যে অনেক কিছু আছে তার দিকে; আয়াতটি গোড়া থেকেই সেদিকে আঙুল তুলে রেখেছে।"
          },
          {
            "en": "And when the count falters — days when the heart is dull and thanks feels false — the verse's ending is already there for exactly that failure: He is Forgiving, Merciful. Begin again from forgiveness rather than from guilt. A believer who counts blessings, loses count, falls short in thanks, and returns is living this verse precisely as it is written: an unbounded gift met by a finite creature before a forgiving Lord.",
            "bn": "আর যখন গণনা থমকে যায় — যেসব দিনে হৃদয় ভোঁতা লাগে আর শুকরিয়া মেকি মনে হয় — ঠিক সেই ব্যর্থতার জন্যই আয়াতের সমাপ্তিটি আগে থেকে রাখা: তিনি ক্ষমাশীল, পরম দয়ালু। অপরাধবোধ থেকে নয়, ক্ষমা থেকে আবার শুরু করুন। যে মুমিন নিয়ামত গোনে, হিসাব হারায়, শুকরিয়ায় ঘাটতি রাখে, আবার ফিরে আসে — সে এই আয়াতটি ঠিক যেমন লেখা তেমনভাবেই যাপন করছে: সীমাহীন এক দান, সসীম এক সৃষ্টি, আর সামনে এক ক্ষমাশীল রব।"
          }
        ]
      }
    ]
  },
  "16:53": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Falls",
          "bn": "বাক্যটি কোথায় এসে পড়ে"
        },
        "p": [
          {
            "en": "Surah an-Nahl argues in steps. 16:51 forbids taking two gods and tells the reader to fear Him alone. Then 16:52 follows: to Him belongs whatever is in the heavens and the earth, and to Him worship is due constantly — so is it other than Allah that you fear? Ownership first, then the worship that ownership settles. This verse takes the next step and moves from what He owns out there to whatever it is you are holding in your hands right now.",
            "bn": "সূরা আন-নাহল ধাপে ধাপে যুক্তি সাজায়। 16:51 আয়াত দুই ইলাহ গ্রহণ করতে নিষেধ করে এবং পাঠককে কেবল তাঁকেই ভয় করতে বলে। এরপর 16:52 আয়াত আসে: আসমানসমূহ ও যমীনে যা কিছু আছে সবই তাঁর, আর আনুগত্য চিরকাল তাঁরই প্রাপ্য — তবে কি আল্লাহ ছাড়া অন্য কাউকে তোমরা ভয় করবে? আগে মালিকানা, তারপর সেই মালিকানা যে ইবাদত নির্ধারণ করে দেয় তা। এই আয়াতটি পরের ধাপে যায় — বাইরের জগতে তিনি যা কিছুর মালিক, সেখান থেকে সরে এসে এখন এই মুহূর্তে তোমার হাতে যা আছে তার দিকে তাকায়।"
          },
          {
            "en": "The surah's other great favour verse, 16:18, concedes that the count can never be finished. This one is not about the tally at all; it is about the source. Between them the surah says two separate things: however many favours there are, you will never number them, and whichever single one you happen to be holding, it came from one place. The second claim is the easier to test, because you only need one favour to test it.",
            "bn": "একই সূরার নিয়ামত-বিষয়ক আরেক বড় আয়াত 16:18 স্বীকার করে যে গণনা কখনো শেষ করা যাবে না। এই আয়াতটি গণনার কথা মোটেও বলছে না; এটি বলছে উৎসের কথা। এই দুটি আয়াত মিলে সূরাটি দুটি আলাদা কথা বলে: নিয়ামত যত-ই হোক, তুমি তা গুনে শেষ করতে পারবে না; আর তার মধ্যে যে একটিই তোমার হাতে আছে, তা এসেছে একটিমাত্র জায়গা থেকে। দ্বিতীয় দাবিটি যাচাই করা সহজ, কারণ যাচাই করতে একটি নিয়ামতই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "Any Favour At All",
          "bn": "যেকোনো একটি নিয়ামতও"
        },
        "p": [
          {
            "en": "The Arabic is wa ma bikum min ni'matin fa-mina Allah. The construction repays slowing down. Ma here is inclusive — whatever; min ni'matin is the indefinite that follows it, and a min used this way sweeps in every instance of the thing named. Not the great favours, not most of them: any favour at all, of any size, arriving by any route. And bikum — with you, attached to you — makes the sentence personal before it makes it general.",
            "bn": "আরবিতে আছে: ওয়া মা বিকুম মিন নি'মাতিন ফামিনাল্লাহ। গঠনটির উপর ধীরে থামলে লাভ আছে। এখানে 'মা' ব্যাপক অর্থে — 'যা কিছুই'; এর পরে আসে অনির্দিষ্ট 'মিন নি'মাতিন', আর এভাবে ব্যবহৃত 'মিন' নামোল্লিখিত জিনিসটির প্রতিটি দৃষ্টান্তকেই টেনে নেয়। বড় নিয়ামতগুলো নয়, অধিকাংশ নিয়ামতও নয়: যেকোনো একটি নিয়ামতই — যত ছোটই হোক, যে পথেই আসুক। আর 'বিকুম' — তোমাদের সঙ্গে, তোমাদের গায়ে লেগে থাকা — বাক্যটিকে সাধারণ করার আগেই ব্যক্তিগত করে তোলে।"
          },
          {
            "en": "The answering clause opens with fa: fa-mina Allah, then it is from Allah. That fa is the hinge of a conditional sentence — given any favour with you, then its origin is Him. The verse is therefore built so that the favour is the premise and its source is the conclusion. It is not asking you to believe an extra fact about the world. It is asking you to finish a sentence the world has already begun.",
            "bn": "জবাবের অংশটি শুরু হয় 'ফা' দিয়ে: ফামিনাল্লাহ — তবে তা আল্লাহর পক্ষ থেকে। এই 'ফা' শর্তবাক্যের কব্জা — তোমার কাছে যে নিয়ামতই থাকুক, তবে তার উৎস তিনি। অর্থাৎ আয়াতটি এমনভাবে গাঁথা যে নিয়ামতটি হলো ভূমিকা আর তার উৎস হলো সিদ্ধান্ত। জগৎ সম্পর্কে বাড়তি কোনো তথ্য বিশ্বাস করতে বলা হচ্ছে না তোমাকে। বলা হচ্ছে, জগৎ যে বাক্যটি ইতিমধ্যে শুরু করে রেখেছে, সেটি শেষ করতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for the Cry",
          "bn": "সেই আর্তনাদের শব্দটি"
        },
        "p": [
          {
            "en": "Then: thumma idha massakumu ad-durru fa-ilayhi taj'arun. Massa is to touch — harm only has to brush against you. And the verb at the end is not the ordinary word for supplication. Ju'ar, as the lexicographers explain it, is the raised voice of cattle; taj'arun says that you bellow. The Quran uses the same verb in 23:64 of the affluent seized by punishment. It is not a flattering word, and it is exact: a frightened human cry is loud, wordless, involuntary — and it goes in one direction only.",
            "bn": "তারপর: ছুম্মা ইযা মাস্সাকুমুদ্‌ দুর্‌রু ফাইলাইহি তাজআরূন। 'মাস্সা' মানে স্পর্শ করা — ক্ষতির কেবল ছুঁয়ে যাওয়াই যথেষ্ট। আর শেষের ক্রিয়াপদটি দোয়ার সাধারণ শব্দ নয়। অভিধানবিদরা ব্যাখ্যা করেন, 'জুআর' হলো গবাদিপশুর উঁচু ডাক; 'তাজআরূন' বলছে — তোমরা চিৎকার করে ওঠো। শাস্তিতে পাকড়াও করা বিত্তবানদের সম্পর্কে 23:64 আয়াতে কুরআন এই একই ক্রিয়াপদ ব্যবহার করে। শব্দটি প্রশংসাসূচক নয়, কিন্তু নিখুঁত: ভীত মানুষের আর্তনাদ উচ্চ, ভাষাহীন, অনিচ্ছাকৃত — আর তা যায় কেবল একটিই দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Very Next Line",
          "bn": "ঠিক পরের লাইনটি"
        },
        "p": [
          {
            "en": "16:54 comes immediately after: then when He removes the adversity from you, at once a party of you associates others with their Lord. And 16:55 completes it — so as to deny what We have given them. Four movements across three verses: the source, the cry, the rescue, the forgetting. The pair is an argument rather than a complaint. The panic had already conceded the whole of the theology; the recovery quietly took the concession back.",
            "bn": "16:54 আয়াতটি ঠিক এর পরেই আসে: তারপর যখন তিনি তোমাদের থেকে বিপদ দূর করে দেন, তখনই তোমাদের একটি দল তাদের রবের সঙ্গে শরিক করে বসে। আর 16:55 আয়াত তা পূর্ণ করে — যাতে তারা আমি তাদের যা দিয়েছি তা অস্বীকার করে। তিন আয়াতে চারটি ধাপ: উৎস, আর্তনাদ, উদ্ধার, বিস্মরণ। জোড়াটি অভিযোগ নয়, যুক্তি। আতঙ্কই গোটা আকীদাটি মেনে নিয়েছিল; আর সুস্থ হয়ে ওঠাটি চুপচাপ সেই স্বীকারোক্তিটি ফিরিয়ে নিল।"
          },
          {
            "en": "The Quran replays the same pattern as a scene. 29:65 has people boarding a ship and calling upon Allah with their religion made sincerely His, and then associating others with Him the moment He delivers them to the land. What changes between the two halves of that verse is not their evidence; nothing new was shown to them at the shore. Only their circumstances changed — which is exactly why 16:53 points at the cry as the honest moment.",
            "bn": "কুরআন এই একই ছককে একটি দৃশ্যের রূপেও দেখায়। 29:65 আয়াতে মানুষ নৌযানে ওঠে এবং একনিষ্ঠভাবে দ্বীনকে তাঁরই জন্য নির্দিষ্ট করে আল্লাহকে ডাকে, তারপর তিনি যখনই তাদের স্থলে পৌঁছে দেন তখনই তারা শরিক করে বসে। ওই আয়াতের দুই অর্ধের মাঝে যা বদলায় তা তাদের প্রমাণ নয়; তীরে পৌঁছে তাদের নতুন কিছু দেখানো হয়নি। বদলেছে কেবল তাদের অবস্থা — আর ঠিক এ কারণেই 16:53 আয়াত আর্তনাদের মুহূর্তটিকেই সৎ মুহূর্ত বলে দেখিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hands In Between",
          "bn": "মাঝখানের হাতগুলো"
        },
        "p": [
          {
            "en": "Favours arrive through hands: an employer, a parent, a teacher, a stranger who stopped. The verse does not deny the hands; it denies that any of them is the origin. As-Sa'di states it plainly — whatever the servants have of blessing, in their religion and in their worldly affairs, is from Allah alone. 31:20 widens the same claim by adding what we cannot see: He has lavished His favours upon you, apparent and hidden. The ones you can name are not the whole account.",
            "bn": "নিয়ামত আসে নানা হাতের ভেতর দিয়ে: একজন নিয়োগকর্তা, একজন বাবা-মা, একজন শিক্ষক, পথে থেমে যাওয়া এক অচেনা মানুষ। আয়াতটি এই হাতগুলোকে অস্বীকার করে না; অস্বীকার করে এই কথাটিই যে এদের কেউ উৎস। আস-সা'দী সরাসরি বলেন — বান্দাদের কাছে দ্বীনের বা দুনিয়ার যে নিয়ামতই আছে, তা কেবল আল্লাহরই পক্ষ থেকে। 31:20 আয়াত যা আমরা দেখতে পাই না তা যোগ করে একই দাবিকে আরও প্রশস্ত করে: তিনি তোমাদের উপর তাঁর নিয়ামত পূর্ণ করে দিয়েছেন, প্রকাশ্য ও অপ্রকাশ্য। তুমি যেগুলোর নাম নিতে পারো, হিসাবটা কেবল সেটুকুই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Source Aloud",
          "bn": "সরবে উৎসের নাম নেওয়া"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Shaddad ibn Aws (RA) the words the Prophet ﷺ called the master of seeking forgiveness, in which the servant says: I acknowledge Your favour upon me, and I acknowledge my sin. The two acknowledgements stand side by side in one sentence. Recognising where a favour came from is treated there as the same kind of honesty as admitting what you did wrong — both are simply naming a fact you would rather leave blurred.",
            "bn": "আল-বুখারী শাদ্দাদ ইবনে আউস (রাঃ) থেকে সেই বাক্যগুলো বর্ণনা করেন, যেগুলোকে নবী ﷺ ইস্তিগফারের সর্দার বলেছেন; তাতে বান্দা বলে: আমি আমার উপর আপনার নিয়ামত স্বীকার করছি, আর আমার গুনাহও স্বীকার করছি। একই বাক্যে দুটি স্বীকারোক্তি পাশাপাশি দাঁড়িয়ে। নিয়ামতটি কোথা থেকে এলো তা চিনে নেওয়াকে সেখানে সেই একই ধরনের সততা ধরা হয়েছে, যেমন সততা নিজের ভুল স্বীকার করায় — দুটোই আসলে এমন এক সত্যের নাম নেওয়া, যা আমরা ঝাপসা রাখতেই পছন্দ করি।"
          },
          {
            "en": "The practice this verse asks for is small and surprisingly hard: attach the words from Allah to something today that arrived without a crisis. The cry in hardship needs no training; it is already installed. What needs training is the ease. Say it over the meal, the wage, the test result that came back clear, the ordinary evening at home — the same instinct as the cry, in the same direction, with the volume turned down.",
            "bn": "এই আয়াত যে অনুশীলন চায় তা ছোট, অথচ আশ্চর্যরকম কঠিন: আজ এমন কিছুর সঙ্গে 'আল্লাহর পক্ষ থেকে' কথাটি জুড়ে দিন, যা কোনো বিপদ ছাড়াই এসেছে। কষ্টের সময়ের আর্তনাদের জন্য অনুশীলন লাগে না; সেটি আগে থেকেই বসানো আছে। অনুশীলন লাগে স্বাচ্ছন্দ্যের জন্য। খাবারটির উপর, বেতনটির উপর, নির্ভুল আসা পরীক্ষার ফলটির উপর, ঘরে কাটানো সাধারণ সন্ধ্যাটির উপর কথাটি বলুন — আর্তনাদের মতোই সেই একই সহজাত টান, একই দিকে, কেবল শব্দের জোরটা নামিয়ে।"
          }
        ]
      }
    ]
  },
  "16:78": {
    "sections": [
      {
        "h": {
          "en": "A Verse About Knowing",
          "bn": "জানা নিয়ে একটি আয়াত"
        },
        "p": [
          {
            "en": "Surah an-Nahl runs through gift after gift, and this verse is where the list turns inward. Around it are cattle and rain and ships; in the verses that follow, 16:79 points to birds held up in the sky, 16:80 to homes and to tents made from hides, 16:81 to shade and to garments. But immediately before it stands 16:77, which says that the unseen of the heavens and the earth belongs to Allah, and that the matter of the Hour is no more than the blink of an eye.",
            "bn": "সূরা আন-নাহল একের পর এক নিয়ামতের কথা বলে যায়, আর এই আয়াতেই তালিকাটি ভেতরের দিকে মোড় নেয়। এর চারপাশে গবাদি পশু, বৃষ্টি ও নৌযান; পরের আয়াতগুলোতে 16:79 আয়াত দেখায় আকাশে ধরে রাখা পাখিদের, 16:80 আয়াত দেখায় ঘরবাড়ি ও চামড়ার তৈরি তাঁবু, আর 16:81 আয়াত ছায়া ও পোশাক। কিন্তু ঠিক এর আগে দাঁড়িয়ে আছে 16:77, যা বলে আসমানসমূহ ও যমীনের গায়েব আল্লাহরই, আর কিয়ামতের ব্যাপারটি চোখের পলকের চেয়ে বেশি কিছু নয়।"
          },
          {
            "en": "So the verse about what Allah knows and we do not is followed at once by a verse about how our own knowing began. That sequence sets the tone. The gift being named here is not comfort or wealth but the equipment by which a human being learns anything at all — and it is introduced by reminding him that there was a day when he had none of it.",
            "bn": "অর্থাৎ আল্লাহ যা জানেন আর আমরা যা জানি না — সেই আয়াতের পরপরই আসে আমাদের নিজেদের জানা কীভাবে শুরু হয়েছিল সেই আয়াত। এই ক্রমটিই সুরটা বেঁধে দেয়। এখানে যে নিয়ামতের নাম নেওয়া হচ্ছে তা আরাম বা সম্পদ নয়, বরং সেই সরঞ্জাম যা দিয়ে মানুষ আদৌ কিছু শেখে — আর তার পরিচয় দেওয়া হচ্ছে এই কথা মনে করিয়ে দিয়ে যে একদিন তার এর কিছুই ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Knowing a Thing",
          "bn": "কিছুই জানতে না"
        },
        "p": [
          {
            "en": "La ta'lamuna shay'an — you did not know a thing. The Arabic is blunt and admits no qualification. Every skill, every language, every conviction a person now holds arrived after that moment and was received from outside. Earlier in the same surah, 16:70 closes the same circle at the other end: some are returned to the feeblest age so that, after having known, they know nothing. Knowledge is on loan, and both ends of the loan are described in one surah.",
            "bn": "লা তা'লামূনা শাইআন — তোমরা কিছুই জানতে না। আরবিটা নির্মম, কোনো শর্ত মানে না। মানুষ এখন যে দক্ষতা, যে ভাষা, যে বিশ্বাস ধরে আছে, তার সবই এসেছে ওই মুহূর্তের পরে এবং বাইরে থেকে পাওয়া। একই সূরার আগের দিকে, 16:70 আয়াত অন্য প্রান্তে এসে বৃত্তটি বন্ধ করে দেয়: কাউকে কাউকে ফিরিয়ে নেওয়া হয় সবচেয়ে দুর্বল বয়সে, ফলে জানার পরেও সে আর কিছুই জানে না। জ্ঞান ধার দেওয়া জিনিস, আর ধারের দুই প্রান্তই একই সূরায় বর্ণিত হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Hearing, Many Sights",
          "bn": "শ্রবণ এক, দৃষ্টি বহু"
        },
        "p": [
          {
            "en": "A detail of the Arabic that survives no translation: as-sam', hearing, is singular, while al-absar, sights, and al-af'idah, hearts, are both plural. Grammarians explain that sam' here is a verbal noun of the kind that does not take a plural. Whatever the explanation, the pattern is fixed: every verse that pairs sam' with al-absar and al-af'idah keeps it. The reader who notices is looking at the sentence rather than through it.",
            "bn": "আরবির একটি খুঁটিনাটি যা কোনো অনুবাদে টেকে না: আস-সাম' অর্থাৎ শ্রবণ এখানে একবচন, অথচ আল-আবসার অর্থাৎ দৃষ্টিসমূহ এবং আল-আফইদাহ অর্থাৎ হৃদয়সমূহ — দুটিই বহুবচন। ব্যাকরণবিদরা ব্যাখ্যা করেন, এখানে সাম' এমন এক ক্রিয়াবাচক বিশেষ্য যা বহুবচন নেয় না। ব্যাখ্যা যা-ই হোক, গঠনটি নির্দিষ্ট: যে আয়াতেই সাম' শব্দের সঙ্গে আল-আবসার ও আল-আফইদাহ জোড়া বাঁধে, সেখানেই তা বজায় থাকে। যে পাঠক এটি লক্ষ করেন, তিনি বাক্যটির ভেতর দিয়ে না তাকিয়ে বাক্যটির দিকে তাকাচ্ছেন।"
          },
          {
            "en": "Af'idah is the plural of fu'ad, and the translation you are reading glosses it as hearts in the sense of intellect. That is how the mufassirun take it: not the organ and not sentiment, but the faculty that receives what the senses bring in and makes a judgement of it. The list therefore ends where the information ends up, and the two outward doors are named before the room they open into.",
            "bn": "আফইদাহ হলো ফুআদ শব্দের বহুবচন, আর আপনি যে অনুবাদ পড়ছেন সেখানে একে বোঝা হয়েছে অন্তর অর্থে, অর্থাৎ বোধশক্তি। মুফাসসিরগণও এভাবেই নেন: অঙ্গ নয়, আবেগও নয়, বরং সেই শক্তি যা ইন্দ্রিয়ের আনা জিনিস গ্রহণ করে এবং তা নিয়ে সিদ্ধান্তে পৌঁছায়। ফলে তালিকাটি শেষ হয় সেখানেই যেখানে তথ্য গিয়ে পৌঁছায়, আর বাইরের দুটি দরজার নাম নেওয়া হয় সেই ঘরটির আগে যেখানে সেগুলো খোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Order Never Varies",
          "bn": "ক্রমটি কখনো বদলায় না"
        },
        "p": [
          {
            "en": "Hearing, then sight, then hearts. The Quran keeps that sequence wherever it lists the three: 23:78, 32:9, 67:23 and 46:26 all read it in the same order. Commentators have offered reasons for the sequence and they do not agree on one, so it is honest to leave their explanations aside and simply note the constancy. What is not in dispute is the shape it produces, from the outward inward, ending at the faculty that answers for the rest.",
            "bn": "শ্রবণ, তারপর দৃষ্টি, তারপর অন্তর। কুরআন যেখানেই এই তিনটির তালিকা করে সেখানেই এই ক্রম বজায় রাখে: 23:78, 32:9, 67:23 এবং 46:26 — সবগুলোতেই একই ক্রম। মুফাসসিরগণ এই ক্রমের নানা কারণ পেশ করেছেন এবং একটিতে একমত হননি, তাই তাঁদের ব্যাখ্যাগুলো সরিয়ে রেখে কেবল ধারাবাহিকতাটুকু লক্ষ করাই সৎ। যা নিয়ে মতভেদ নেই তা হলো এতে যে আকৃতি তৈরি হয়: বাইরে থেকে ভেতরে, আর শেষ হয় সেই শক্তিতে যা বাকিদের জবাবদিহি করে।"
          },
          {
            "en": "46:26 is the sobering member of that set. It describes a people better established than the Makkans, given hearing and sight and hearts, whose hearing and sight and hearts availed them nothing at all because they went on rejecting the signs of Allah. The faculties are a gift; they are not a guarantee. Equipment can be complete and still return nothing, and the verse names the reason as refusal rather than incapacity.",
            "bn": "46:26 আয়াতটি এই তালিকার সবচেয়ে ভাবিয়ে তোলা সদস্য। এটি বর্ণনা করে এমন এক জাতির, যাদের মক্কাবাসীদের চেয়েও মজবুতভাবে প্রতিষ্ঠিত করা হয়েছিল এবং যাদের কান, চোখ ও অন্তর দেওয়া হয়েছিল, অথচ তাদের কান, চোখ ও অন্তর তাদের কোনোই কাজে আসেনি, কারণ তারা আল্লাহর নিদর্শন অস্বীকার করে যাচ্ছিল। এই শক্তিগুলো দান; এগুলো নিশ্চয়তা নয়। সরঞ্জাম পূর্ণ থাকা সত্ত্বেও কিছুই না ফেরাতে পারে, আর আয়াতটি এর কারণ বলে অক্ষমতা নয়, অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Perhaps You Will Be Grateful",
          "bn": "যাতে তোমরা শোকর করো"
        },
        "p": [
          {
            "en": "The ending deserves a close look, because three near-identical verses end differently. 23:78, 32:9 and 67:23 each name the same three faculties and then close with the same reproach: little are you grateful. 16:78 closes instead with la'allakum tashkurun, that perhaps you would be grateful. Same gift, same three items, and a hopeful ending rather than an accusing one. One states the purpose of the gift; the others state our record with it.",
            "bn": "শেষ অংশটি ভালো করে দেখা দরকার, কারণ প্রায় একই রকম তিনটি আয়াত ভিন্নভাবে শেষ হয়। 23:78, 32:9 এবং 67:23 — প্রতিটিতেই একই তিনটি শক্তির নাম আছে, আর প্রতিটিই শেষ হয় একই তিরস্কারে: তোমরা কৃতজ্ঞতা অল্পই করো। কিন্তু 16:78 শেষ হয় লা'আল্লাকুম তাশকুরূন দিয়ে — যাতে তোমরা কৃতজ্ঞ হও। একই দান, একই তিনটি জিনিস, আর অভিযোগের বদলে আশার সমাপ্তি। একটি বলে দানটির উদ্দেশ্য কী; বাকিগুলো বলে সেই দান নিয়ে আমাদের ইতিহাস কেমন।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanking With the Thing Itself",
          "bn": "জিনিসটি দিয়েই শোকর করা"
        },
        "p": [
          {
            "en": "Shukr of a faculty, as the scholars put it, is chiefly a matter of use. Hearing is thanked by what it is turned towards and what it refuses to carry; sight by where it is allowed to rest; the fu'ad by what it is given to think about when nothing is demanding it. Stated that way the verse becomes a daily audit rather than a sentiment, and the audit is short: what did these three do today.",
            "bn": "কোনো শক্তির শোকর, আলিমগণ যেভাবে বলেন, মূলত তার ব্যবহারের ব্যাপার। শ্রবণের শোকর হয় তাকে কোন দিকে ফেরানো হলো আর কী বহন করতে সে অস্বীকার করল তা দিয়ে; দৃষ্টির শোকর হয় তাকে কোথায় থিতু হতে দেওয়া হলো তা দিয়ে; আর ফুআদের শোকর হয় কিছুই যখন তাকে টানছে না তখন তাকে কী নিয়ে ভাবতে দেওয়া হলো তা দিয়ে। এভাবে বললে আয়াতটি অনুভূতি না থেকে দৈনিক এক হিসাবনিকাশে পরিণত হয়, আর হিসাবটি ছোট: আজ এই তিনটি কী করল।"
          }
        ]
      }
    ]
  },
  "16:90": {
    "sections": [
      {
        "h": {
          "en": "Six Directions in One Sentence",
          "bn": "এক বাক্যে ছয় দিক"
        },
        "p": [
          {
            "en": "The verse is built with an architecture you can hold in one hand: three commands, three prohibitions. Allah commands justice, ihsan, and giving to relatives; He forbids fahsha, munkar, and baghy. Then it closes by naming its own genre: ya'izukum la'allakum tadhakkarun — He admonishes you that you may be reminded. Not new information, the ending implies, but a reminder of what sound human nature already recognises and what daily life steadily wears away.",
            "bn": "আয়াতটির গঠন এমন, যা এক হাতে ধরা যায়: তিনটি আদেশ, তিনটি নিষেধ। আল্লাহ আদেশ করেন ইনসাফ, ইহসান ও আত্মীয়দের দেওয়ার; নিষেধ করেন ফাহশা, মুনকার ও বাগীর। তারপর নিজের ধরনটি বলে দিয়ে শেষ হয়: ইয়াইযুকুম লাআল্লাকুম তাযাক্কারুন — তিনি তোমাদের উপদেশ দেন, যেন তোমরা স্মরণ করো। শেষাংশের ইঙ্গিত: এ নতুন তথ্য নয়, বরং তার স্মরণ, যা সুস্থ মানবপ্রকৃতি আগে থেকেই চেনে আর দৈনন্দিন জীবন ক্রমাগত ক্ষইয়ে ফেলে।"
          },
          {
            "en": "Abdullah ibn Mas'ud (RA) called this the most comprehensive verse in the Quran for good and for evil. His judgement has been ratified by centuries of practice: across the Muslim world this verse is recited at the close of the Friday khutbah, so that whole congregations hear the whole of public and private morality, compressed to a sentence, week after week. Familiarity is the risk; the verse deserves to be heard slowly.",
            "bn": "আবদুল্লাহ ইবনে মাসউদ (রাঃ) একে বলেছেন ভালো ও মন্দ বিষয়ে কুরআনের সবচেয়ে ব্যাপক আয়াত। শতাব্দীর পর শতাব্দীর আমল তাঁর এই রায়কে সিলমোহর দিয়েছে: গোটা মুসলিম বিশ্বে জুমার খুতবার শেষে এই আয়াতটি পড়া হয়, ফলে পুরো জামাত সপ্তাহের পর সপ্তাহ শোনে প্রকাশ্য ও ব্যক্তিগত নৈতিকতার সবটুকু — এক বাক্যে সংকুচিত। ঝুঁকিটা হলো অতিপরিচিতি; আয়াতটি ধীরে শোনার দাবি রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Justice, Then More Than Justice",
          "bn": "ইনসাফ, তারপর তারও বেশি"
        },
        "p": [
          {
            "en": "Adl is giving each party its due — in judgement, weight, speech and dealing. It is the floor beneath society, and other verses guard it fiercely: 4:58 commands judging between people with justice, and 4:135 demands it even against oneself. But the verse does not stop at the floor. It commands ihsan as well: excellence, doing more than is owed — forgiving where retaliation was allowed, giving where withholding was lawful, adding beauty where correctness would have sufficed.",
            "bn": "আদল মানে প্রত্যেক পক্ষকে তার প্রাপ্য দেওয়া — বিচারে, ওজনে, কথায় ও লেনদেনে। এটি সমাজের নিচের মেঝে, আর অন্য আয়াতগুলো একে কঠোরভাবে পাহারা দেয়: 4:58 মানুষের মধ্যে ইনসাফের সঙ্গে বিচার করতে আদেশ করে, আর 4:135 তা দাবি করে এমনকি নিজের বিরুদ্ধেও। কিন্তু আয়াতটি মেঝেতে থামে না। সে ইহসানেরও আদেশ দেয়: উৎকর্ষ, প্রাপ্যের চেয়ে বেশি করা — প্রতিশোধ বৈধ হলেও ক্ষমা করা, না দেওয়া বৈধ হলেও দেওয়া, শুদ্ধতাই যথেষ্ট হতো সেখানে সৌন্দর্য যোগ করা।"
          },
          {
            "en": "Then, from inside the wide field of ihsan, one duty is pulled out and named: giving to relatives. The commentators note the logic of the emphasis. Kin are the people easiest to wrong and hardest to escape; rights against us concentrate there, and so does our capacity for coldness. A person can be publicly generous and privately estranged; the verse blocks that arrangement by naming the relatives explicitly.",
            "bn": "এরপর ইহসানের বিস্তৃত ময়দানের ভেতর থেকে একটি দায়িত্বকে টেনে বের করে নাম ধরে বলা হয়: আত্মীয়দের দেওয়া। মুফাসসিরগণ এই জোরের যুক্তিটি লক্ষ করেন। আত্মীয়রাই সেই মানুষ, যাদের প্রতি অন্যায় করা সবচেয়ে সহজ আর যাদের এড়ানো সবচেয়ে কঠিন; আমাদের ওপর হকও সেখানে জমা হয়, আমাদের শীতলতার ক্ষমতাও। মানুষ প্রকাশ্যে দানশীল হয়েও ঘরের ভেতরে বিচ্ছিন্ন থাকতে পারে; আয়াত আত্মীয়দের স্পষ্ট নাম নিয়ে সেই বন্দোবস্তটি আটকে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Three Prohibitions",
          "bn": "তিনটি নিষেধ"
        },
        "p": [
          {
            "en": "The forbidden triad also climbs. Fahsha is the shameless — conduct whose ugliness is felt before it is argued, with unlawful sexuality at its centre. Munkar is wider: whatever revealed law and sound nature together reject, done openly. Baghy is aggression — overstepping against people, their blood, property or honour, including the arrogance of oppression. Commentators observe that the list moves outward: from private corruption, to public wrong, to harm that lands directly on others.",
            "bn": "নিষিদ্ধ ত্রয়ীও ধাপে ধাপে ওঠে। ফাহশা হলো নির্লজ্জতা — এমন আচরণ, যার কদর্যতা যুক্তির আগেই অনুভূত হয়; এর কেন্দ্রে অবৈধ যৌনতা। মুনকার আরও বিস্তৃত: প্রকাশ্যে করা এমন সবকিছু, যা ওহীর বিধান ও সুস্থ প্রকৃতি একসঙ্গে প্রত্যাখ্যান করে। বাগী হলো আগ্রাসন — মানুষের ওপর, তাদের রক্ত, সম্পদ বা সম্মানের ওপর সীমালঙ্ঘন, জুলুমের অহংকারসহ। মুফাসসিরগণ লক্ষ করেন, তালিকাটি ভেতর থেকে বাইরে এগোয়: ব্যক্তিগত কলুষতা থেকে প্রকাশ্য অন্যায়ে, সেখান থেকে সরাসরি অন্যের ওপর পড়া ক্ষতিতে।"
          },
          {
            "en": "Setting the two triads side by side shows the method of the religion. It does not only prohibit; each vice faces a commanded opposite. Justice starves baghy, since oppression is exactly the refusal of others' due. Ihsan crowds out munkar, because a life occupied with doing more good than required has little room left for open wrong. And giving to relatives strengthens the near circle in which character is actually formed.",
            "bn": "দুই ত্রয়ীকে পাশাপাশি রাখলে দ্বীনের পদ্ধতিটি দেখা যায়। সে কেবল নিষেধ করে না; প্রতিটি মন্দের মুখোমুখি রাখা হয়েছে একটি আদিষ্ট বিপরীতকে। ইনসাফ বাগীকে না খাইয়ে মারে, কারণ জুলুম তো অন্যের প্রাপ্য অস্বীকারেরই নাম। ইহসান মুনকারকে জায়গাছাড়া করে, কারণ প্রয়োজনের চেয়ে বেশি ভালো কাজে ব্যস্ত জীবনে প্রকাশ্য অন্যায়ের জায়গা কমই থাকে। আর আত্মীয়দের দেওয়া মজবুত করে সেই নিকট বৃত্তকে, যেখানে চরিত্র আসলে গড়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse in Its Surah",
          "bn": "সূরার ভেতরে আয়াতটি"
        },
        "p": [
          {
            "en": "Surah an-Nahl has spent its length listing benefactions — rain, cattle, honey, the sea — and asking who could have given them. By 16:90 the argument turns from what Allah gives to what He asks. The very next verse, 16:91, commands keeping covenants once made, extending the same integrity from conduct to promises. Gratitude for the gifts and obedience in the commands are presented as one continuous response to the same Giver.",
            "bn": "সূরা আন-নাহল তার দৈর্ঘ্য জুড়ে নিয়ামতের তালিকা করেছে — বৃষ্টি, গবাদি পশু, মধু, সমুদ্র — আর প্রশ্ন করেছে, এসব কে দিতে পারত। 16:90-এ এসে যুক্তিটি ঘুরে যায় — আল্লাহ কী দেন থেকে তিনি কী চান-এ। ঠিক পরের আয়াত 16:91 আদেশ করে কৃত অঙ্গীকার রক্ষা করতে — একই সততাকে আচরণ থেকে প্রতিশ্রুতিতে প্রসারিত করে। নিয়ামতের কৃতজ্ঞতা আর আদেশের আনুগত্য — দুটিকে উপস্থাপন করা হয়েছে একই দাতার প্রতি এক অবিচ্ছিন্ন সাড়া হিসেবে।"
          },
          {
            "en": "The pairing with 5:8 is also worth carrying: there, believers are told not to let hatred of a people push them away from justice. Between them the two verses seal both exits. 16:90 commands justice as a standing order; 5:8 blocks the loophole of the enemy, as 4:135 blocks the loophole of the self and the family. There is no one left, friend or foe, toward whom injustice remains an option.",
            "bn": "5:8-এর সঙ্গে জোড়টিও সঙ্গে রাখার মতো: সেখানে মুমিনদের বলা হয়েছে, কোনো জাতির প্রতি বিদ্বেষ যেন তাদের ইনসাফ থেকে সরিয়ে না দেয়। এই দুই আয়াত মিলে দুটো পালানোর পথই বন্ধ করে। 16:90 ইনসাফকে স্থায়ী আদেশ বানায়; 5:8 শত্রুর ফাঁকটি বন্ধ করে, যেমন 4:135 বন্ধ করে নিজের ও পরিবারের ফাঁক। বন্ধু হোক বা শত্রু — এমন কেউ বাকি থাকে না, যার প্রতি অবিচার আর কোনো বিকল্প হিসেবে টেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside the Verse",
          "bn": "আয়াতটির ভেতরে বসবাস"
        },
        "p": [
          {
            "en": "Because the verse is a compass, its use is directional: locate yourself on it. Of the three commands — justice, excellence, giving to kin — one is usually the neglected one for a given person in a given season; of the three prohibitions, one is usually the live temptation. The verse rewards that specific self-audit far more than it rewards admiration. Hearing it weekly was meant to produce exactly this repeated, uncomfortable, useful check.",
            "bn": "আয়াতটি যেহেতু একটি কম্পাস, এর ব্যবহারও দিকনির্ণয়ের: নিজেকে এর ওপর খুঁজে বের করুন। তিন আদেশের মধ্যে — ইনসাফ, উৎকর্ষ, আত্মীয়দের দেওয়া — নির্দিষ্ট মানুষের নির্দিষ্ট মৌসুমে সাধারণত একটি থাকে অবহেলিত; তিন নিষেধের মধ্যে একটি থাকে জীবন্ত প্রলোভন। মুগ্ধতার চেয়ে এই সুনির্দিষ্ট আত্মপরীক্ষাকেই আয়াত অনেক বেশি প্রতিদান দেয়। সাপ্তাহিক শোনার উদ্দেশ্যই ছিল ঠিক এই বারবার করা, অস্বস্তিকর, কাজের যাচাই।"
          },
          {
            "en": "And the closing word sets the tone for how to hold it: ya'izukum, He admonishes you — the address of a counsellor who wants good for the one addressed, not a prosecutor building a case. The verse asks to be remembered, la'allakum tadhakkarun, because everything in it was already written into sound nature. Obedience here has the feel of coming back to something, not of being conscripted into something.",
            "bn": "আর শেষ শব্দটি ঠিক করে দেয় একে কীভাবে ধরতে হবে: ইয়াইযুকুম — তিনি তোমাদের উপদেশ দেন; এ এমন উপদেষ্টার সম্বোধন, যিনি শ্রোতার কল্যাণ চান — মামলা সাজানো কৌঁসুলির নয়। আয়াত চায় তাকে স্মরণ করা হোক — লাআল্লাকুম তাযাক্কারুন — কারণ এর সবকিছু সুস্থ প্রকৃতিতে আগে থেকেই লেখা ছিল। এখানে আনুগত্যের অনুভূতি কোনো কিছুতে জোর করে ভর্তি হওয়ার নয় — কোনো কিছুর কাছে ফিরে আসার।"
          }
        ]
      }
    ]
  },
  "16:96-97": {
    "sections": [
      {
        "h": {
          "en": "A Trade Already Running",
          "bn": "একটি চলমান লেনদেন"
        },
        "p": [
          {
            "en": "The verse does not arrive out of nowhere. The passage before it, from 16:91, commands the believers to keep the covenant of Allah once they have given it, and 16:95 warns them not to sell that covenant for a small price, for what is with Allah is better. Then comes the sentence this article turns on: whatever is with you runs out, and whatever is with Allah remains. The subject is still that trade — what a person accepts in exchange for breaking or keeping faith.",
            "bn": "আয়াতটি হঠাৎ শূন্য থেকে আসেনি। এর আগের অংশে, 16:91 থেকে, মুমিনদের আদেশ দেওয়া হয়েছে আল্লাহর অঙ্গীকার একবার দিলে তা রক্ষা করতে, আর 16:95 সতর্ক করেছে সেই অঙ্গীকার সামান্য মূল্যে বিক্রি না করতে, কারণ আল্লাহর কাছে যা আছে তা-ই উত্তম। তারপর আসে সেই বাক্য যাকে ঘিরে এই লেখা: তোমাদের কাছে যা আছে তা ফুরিয়ে যায়, আর আল্লাহর কাছে যা আছে তা থেকে যায়। বিষয়টি তখনো সেই লেনদেনই — বিশ্বাস ভাঙা বা রাখার বিনিময়ে মানুষ কী গ্রহণ করে।"
          },
          {
            "en": "The Arabic verb yanfadu is in the present tense: what is with you is not something that will one day run out, it is running out now, continuously, as you hold it. Money is being spent, health is being used, positions are being aged out of. Against that steady leak the verse sets a single word for what is with Allah: baq, remaining. The comparison is not between two treasures but between a draining vessel and one that cannot drain.",
            "bn": "আরবি ক্রিয়াপদ 'ইয়ানফাদু' বর্তমান কালের: তোমাদের কাছে যা আছে তা একদিন ফুরাবে — ব্যাপারটা শুধু তা নয়; তা এখনই ফুরাচ্ছে, অবিরাম, তোমার হাতে থাকা অবস্থাতেই। টাকা খরচ হচ্ছে, স্বাস্থ্য ক্ষয় হচ্ছে, পদ-মর্যাদা বয়সের সঙ্গে হাতছাড়া হচ্ছে। এই অবিরাম ক্ষরণের বিপরীতে আয়াতটি আল্লাহর কাছে যা আছে তার জন্য একটিমাত্র শব্দ রাখে: 'বাক' — অবশিষ্ট, স্থায়ী। তুলনাটি দুটি ধনভাণ্ডারের মধ্যে নয়, বরং একটি ফুটো পাত্র আর এমন এক পাত্রের মধ্যে যা কখনো খালি হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Paid at the Best Rate",
          "bn": "সর্বোত্তম হারে প্রতিদান"
        },
        "p": [
          {
            "en": "The reward clause in 16:96 is precise: We will surely pay those who were patient their reward according to the best of what they used to do. The commentators pause on that phrase, bi-ahsani ma kanu ya'malun. A person's record holds deeds of mixed quality — some prayed with presence, some rushed. The promise is that the best of the work sets the standard by which the whole is repaid. No employer settles accounts this way; the generosity is in the wording itself.",
            "bn": "16:96 আয়াতের প্রতিদানের বাক্যটি সুনির্দিষ্ট: যারা ধৈর্য ধরেছে, আমি অবশ্যই তাদের প্রতিদান দেব তাদের সর্বোত্তম কাজ অনুসারে। মুফাসসিরগণ এই বাক্যাংশে থামেন — 'বি-আহসানি মা কানূ ইয়া'মালূন'। মানুষের আমলনামায় মিশ্র মানের কাজ থাকে — কোনো নামায পূর্ণ মনোযোগে পড়া, কোনোটি তাড়াহুড়োয়। প্রতিশ্রুতি হলো: কাজের সেরা অংশটিই সেই মানদণ্ড ঠিক করে দেয়, যে হারে পুরোটার প্রতিদান দেওয়া হয়। কোনো নিয়োগকর্তা এভাবে হিসাব মেটায় না; উদারতা শব্দচয়নের ভেতরেই।"
          },
          {
            "en": "Notice also who is being paid: those who were patient. Patience is named because holding on to what is with Allah requires letting the visible, countable price slip past. The person who kept a covenant when breaking it paid well, or stayed honest when a lie was cheaper, has watched something run out of their hands. The verse says that what they were actually holding did not run out at all; it changed accounts.",
            "bn": "আরও লক্ষ করুন, প্রতিদান কাদের দেওয়া হচ্ছে: যারা ধৈর্য ধরেছে। ধৈর্যের নাম নেওয়া হয়েছে কারণ আল্লাহর কাছে যা আছে তা আঁকড়ে ধরতে হলে চোখে-দেখা, গোনা-যায় এমন মূল্যকে হাতছাড়া হতে দিতে হয়। যে মানুষ অঙ্গীকার রক্ষা করেছে যখন তা ভাঙলে ভালো দাম মিলত, বা সৎ থেকেছে যখন মিথ্যা ছিল সস্তা — সে নিজের হাত থেকে কিছু ফুরিয়ে যেতে দেখেছে। আয়াত বলে, সে আসলে যা ধরে রেখেছিল তা মোটেও ফুরায়নি; তা শুধু হিসাবের খাতা বদলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Works, Man or Woman",
          "bn": "যে-ই আমল করে, নারী বা পুরুষ"
        },
        "p": [
          {
            "en": "Then 16:97 widens the promise to its full breadth: whoever does righteousness, male or female, while being a believer. The explicit mention of both sexes is not decoration. The commentators note that it closes off any suspicion that the reward economy of the previous verse belongs to one class of servant. Two conditions stand, and only two: the work must be righteous, and the worker must be a believer, since faith is what gives a deed its direction and its worth.",
            "bn": "এরপর 16:97 প্রতিশ্রুতিটিকে তার পূর্ণ বিস্তারে ছড়িয়ে দেয়: যে-ই সৎকর্ম করে, পুরুষ হোক বা নারী, মুমিন অবস্থায়। উভয় লিঙ্গের স্পষ্ট উল্লেখ কোনো অলংকার নয়। মুফাসসিরগণ লক্ষ করেন, এটি এই সন্দেহের পথ বন্ধ করে দেয় যে আগের আয়াতের প্রতিদানের অর্থনীতি কেবল এক শ্রেণির বান্দার জন্য। শর্ত দাঁড়ায় দুটি, কেবল দুটিই: কাজটি হতে হবে সৎ, আর কর্মীকে হতে হবে মুমিন — কারণ ঈমানই কাজকে তার অভিমুখ ও মূল্য দেয়।"
          },
          {
            "en": "The same pairing appears in 4:124, where whoever does righteous deeds, male or female, while a believer, enters the Garden and is not wronged even the groove of a date stone. The Quran repeats this structure often enough that it cannot be incidental. Where reward is being promised, women are named alongside men in the very grammar of the sentence, before any jurist or reformer arrives to argue the point.",
            "bn": "একই জোড়বাঁধা গঠন 4:124 আয়াতেও আছে: যে-ই সৎকর্ম করে, পুরুষ বা নারী, মুমিন অবস্থায়, সে জান্নাতে প্রবেশ করবে এবং খেজুর-বিচির খাঁজ পরিমাণও তার প্রতি অবিচার করা হবে না। কুরআন এই কাঠামো এত বারবার ব্যবহার করে যে একে আকস্মিক বলা যায় না। যেখানে প্রতিদানের প্রতিশ্রুতি দেওয়া হচ্ছে, সেখানে বাক্যের ব্যাকরণের ভেতরেই নারীদের নাম পুরুষদের পাশে রাখা হয়েছে — কোনো ফকীহ বা সংস্কারক এসে যুক্তি দেখানোর আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Good Life Promised",
          "bn": "প্রতিশ্রুত উত্তম জীবন"
        },
        "p": [
          {
            "en": "The promise itself comes doubled with emphasis in the Arabic: fa-la-nuhyiyannahu hayatan tayyibah, then We will surely give him a good life. Ibn Kathir gathers the explanations of the early authorities — lawful provision according to some, contentment according to others, the sweetness of obedience according to others still — and rules that the good life includes all of these together. It is not a promise of wealth. It is a promise that the inside of the life will be well.",
            "bn": "প্রতিশ্রুতিটি আরবিতে দ্বিগুণ জোর নিয়ে আসে: 'ফালানুহয়িয়ান্নাহু হায়াতান তাইয়িবাহ' — তাহলে আমি অবশ্যই তাকে এক উত্তম জীবন দান করব। ইবনে কাসীর প্রাচীন ইমামদের ব্যাখ্যাগুলো একত্র করেন — কারও মতে হালাল রিযিক, কারও মতে অল্পে তুষ্টি, আবার কারও মতে আনুগত্যের স্বাদ — এবং সিদ্ধান্ত দেন যে উত্তম জীবন এই সবকিছুকে একসঙ্গে ধারণ করে। এটি সম্পদের প্রতিশ্রুতি নয়। এটি এই প্রতিশ্রুতি যে জীবনের ভেতরটা ভালো থাকবে।"
          },
          {
            "en": "The verse then repeats the wage clause of 16:96 word for word: their reward by the best of what they used to do. So the righteous believer is paid twice, once here in the currency of a good life, once there at the best-deed rate. Compare 28:60, where whatever you have been given is the enjoyment of this life, and what is with Allah is better and more lasting. The two payments are not in competition; one is pocket money, one is the estate.",
            "bn": "আয়াতটি এরপর 16:96 আয়াতের মজুরির বাক্যটি হুবহু আবার বলে: তাদের সর্বোত্তম কাজ অনুসারে তাদের প্রতিদান। সুতরাং সৎকর্মশীল মুমিনকে দুবার দেওয়া হয় — একবার এখানে, উত্তম জীবনের মুদ্রায়; একবার সেখানে, সর্বোত্তম-আমলের হারে। তুলনা করুন 28:60 আয়াতের সঙ্গে: তোমাদের যা দেওয়া হয়েছে তা দুনিয়ার জীবনের ভোগসামগ্রী, আর আল্লাহর কাছে যা আছে তা উত্তম ও স্থায়ী। এই দুই প্রাপ্তি পরস্পরের প্রতিদ্বন্দ্বী নয়; একটি হাতখরচ, অন্যটি উত্তরাধিকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Living the Exchange",
          "bn": "এই বিনিময় যাপন করা"
        },
        "p": [
          {
            "en": "The practical test of this verse arrives at specific moments: the contract that could be quietly bent, the hour that could go to display rather than duty, the charity that competes with a purchase. At each such fork the two columns of 16:96 are actually on the table — one thing that will deplete, one that will remain. Naming the fork in those exact terms, while standing at it, is what the mufassirun mean by living with the Hereafter in view.",
            "bn": "এই আয়াতের ব্যবহারিক পরীক্ষা আসে নির্দিষ্ট মুহূর্তে: যে চুক্তি চুপিসারে বাঁকানো যেত, যে ঘণ্টা কর্তব্যের বদলে লোকদেখানোয় যেতে পারত, যে দান কোনো কেনাকাটার সঙ্গে প্রতিযোগিতায় নেমেছে। এমন প্রতিটি দোরাহায় 16:96 আয়াতের দুটি ঘরই আসলে সামনে থাকে — একটি জিনিস যা ফুরিয়ে যাবে, একটি যা থেকে যাবে। দোরাহায় দাঁড়িয়ে ঠিক এই ভাষায় তাকে চিনে নেওয়াই মুফাসসিরদের ভাষায় আখিরাতকে চোখে রেখে বাঁচা।"
          },
          {
            "en": "And 18:46 gives the same accounting a second wording: wealth and children are the adornment of this worldly life, but the enduring righteous deeds are better with your Lord for reward and better for hope. Adornment is not condemned there, only priced. The believer this passage builds is not someone who owns nothing, but someone who knows which of their holdings is currently evaporating and which one, with Allah, is quietly compounding.",
            "bn": "আর 18:46 একই হিসাবকে দ্বিতীয় ভাষায় বলে: ধন-সম্পদ ও সন্তান-সন্ততি দুনিয়ার জীবনের শোভা, কিন্তু স্থায়ী সৎকর্মগুলো তোমার রবের কাছে প্রতিদানে উত্তম, আশাতেও উত্তম। শোভাকে সেখানে নিন্দা করা হয়নি, শুধু তার দাম নির্ধারণ করা হয়েছে। এই অংশ যে মুমিনকে গড়ে তোলে, সে এমন কেউ নয় যার কিছু নেই; বরং সে জানে তার সম্পদের কোনটি এই মুহূর্তে বাষ্প হয়ে উড়ছে আর কোনটি, আল্লাহর কাছে, নীরবে বেড়ে চলেছে।"
          }
        ]
      }
    ]
  },
  "16:114": {
    "sections": [
      {
        "h": {
          "en": "The Town That Denied Its Food",
          "bn": "যে জনপদ নিজের রিযিক অস্বীকার করেছিল"
        },
        "p": [
          {
            "en": "The command does not arrive out of nowhere. 16:112 sets up a parable: a town that was secure and at ease, its provision reaching it in plenty from every side, which then denied the favours of Allah — so He made it taste the enveloping garment of hunger and fear. 16:113 adds that a messenger from among themselves had come to them and been called a liar. Only after those two verses does our instruction begin.",
            "bn": "এই নির্দেশ হঠাৎ করে আসেনি। 16:112 একটি উপমা দাঁড় করায়: একটি জনপদ যা ছিল নিরাপদ ও নিশ্চিন্ত, চারদিক থেকে প্রাচুর্যের সঙ্গে যার রিযিক পৌঁছাত — অথচ তারা আল্লাহর নিয়ামত অস্বীকার করল, ফলে তিনি তাদের ক্ষুধা ও ভয়ের আবরণ আস্বাদন করালেন। 16:113 যোগ করে, তাদেরই মধ্য থেকে একজন রাসূল তাদের কাছে এসেছিলেন এবং তারা তাঁকে মিথ্যাবাদী বলেছিল। এই দুই আয়াতের পরই আমাদের নির্দেশটি শুরু হয়।"
          },
          {
            "en": "So eat — the Arabic opens with fa, the particle of consequence, tying the instruction to the story just told. That town had food and denied the Giver; you have food, so eat it and thank Him for it. Ibn Kathir titles the passage by the two things the verse joins, the command to eat lawful provision and the command to give thanks. The surah shows what ingratitude cost a settled people, then puts the same provision back in the reader's hands.",
            "bn": "তাই খাও — আরবি শুরু হয় 'ফা' দিয়ে, ফলাফল বোঝানোর অব্যয়, যা নির্দেশটিকে সদ্য বলা কাহিনির সঙ্গে বেঁধে দেয়। সেই জনপদের খাবার ছিল, আর তারা দাতাকে অস্বীকার করেছিল; তোমার খাবার আছে, তাই তা খাও এবং তার জন্য তাঁর শুকরিয়া আদায় করো। ইবনে কাসীর অংশটির শিরোনাম দেন সেই দুই বিষয় দিয়ে যা আয়াতটি জুড়েছে — হালাল রিযিক খাওয়ার নির্দেশ আর কৃতজ্ঞতার নির্দেশ। সূরাটি দেখায় অকৃতজ্ঞতা এক সুস্থিত জাতির কী দাম নিয়েছিল, তারপর সেই একই রিযিক পাঠকের হাতে ফিরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Halalan Tayyiban",
          "bn": "হালালান তাইয়িবান"
        },
        "p": [
          {
            "en": "Two adjectives follow the provision, with no wa between them: halalan tayyiban. Halal comes from a root meaning to untie or release, the opposite of what is bound and withheld. Tayyib means wholesome, clean, agreeable to the one who takes it. So one word names the legal status of the food and the other names its quality, and the verse asks for both at once. A thing can satisfy one description while failing the second.",
            "bn": "রিযিকের পরে আসে দুটি বিশেষণ, তাদের মাঝে কোনো 'ওয়া' নেই: হালালান তাইয়িবান। 'হালাল' এসেছে এমন ধাতু থেকে যার অর্থ গিঁট খোলা বা মুক্ত করা — যা বাঁধা ও আটকানো, তার বিপরীত। 'তাইয়িব' মানে পবিত্র, স্বাস্থ্যকর, গ্রহণকারীর জন্য উপযোগী। অর্থাৎ একটি শব্দ খাদ্যের শরীয়তি অবস্থা বলে, অন্যটি বলে তার গুণ; আর আয়াতটি একসঙ্গে দুটোই চায়। কোনো জিনিস একটি বর্ণনায় উত্তীর্ণ হয়েও অন্যটিতে ব্যর্থ হতে পারে।"
          },
          {
            "en": "The same pair travels through the Quran and lands differently each time. 2:168 addresses mankind at large: eat of what is on the earth lawful and good, and do not follow the footsteps of Shaytan. 5:88 is nearly word for word with our verse but closes on taqwa instead — and fear Allah, in whom you are believers. And 2:172 tells the believers to eat of the good things provided and closes on the same condition, if it is Him you worship, though its thanks are owed to Allah rather than for the favour of Allah.",
            "bn": "একই জোড়া কুরআনে ঘুরে বেড়ায় এবং প্রতিবার ভিন্নভাবে এসে থামে। 2:168 সমগ্র মানবজাতিকে সম্বোধন করে: পৃথিবীতে যা হালাল ও পবিত্র তা খাও, আর শয়তানের পদাঙ্ক অনুসরণ করো না। 5:88 প্রায় শব্দে শব্দে আমাদের আয়াতের মতো, কিন্তু শেষ হয় তাকওয়া দিয়ে — আর সেই আল্লাহকে ভয় করো যাঁর প্রতি তোমরা ঈমান এনেছ। আর 2:172 মুমিনদের বলে পবিত্র রিযিক থেকে খেতে, এবং শেষ হয় একই শর্ত দিয়ে — যদি তোমরা তাঁরই ইবাদত করে থাক — যদিও সেখানে শুকরিয়া আল্লাহর উদ্দেশে, তাঁর নিয়ামতের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Imperatives, One Table",
          "bn": "দুই নির্দেশ, এক দস্তরখান"
        },
        "p": [
          {
            "en": "The verse carries two imperatives joined by wa: fakulu, eat, and washkuru, be grateful. Neither is decoration for the other. Gratitude is not a devotional extra bolted onto a meal that would otherwise be neutral; it is the second half of one instruction, so an unthanked meal has completed only half of what was asked. And the object of the thanking is not the food but ni'mat Allah, the favour of Allah. The eye is moved off the plate.",
            "bn": "আয়াতটি 'ওয়া' দিয়ে যুক্ত দুটি নির্দেশ বহন করে: ফাকুলূ — খাও, আর ওয়াশকুরূ — শুকরিয়া আদায় করো। একটি অন্যটির অলংকার নয়। কৃতজ্ঞতা এমন কোনো বাড়তি ইবাদত নয় যা এক নিরপেক্ষ খাবারের সঙ্গে জুড়ে দেওয়া হয়েছে; এটি একটিমাত্র নির্দেশের দ্বিতীয় অর্ধেক, তাই শুকরিয়াবিহীন খাবার যা চাওয়া হয়েছিল তার অর্ধেকই পূরণ করেছে। আর শুকরিয়ার লক্ষ্য খাবার নয়, বরং নিয়ামাতুল্লাহ, আল্লাহর অনুগ্রহ। দৃষ্টি প্লেট থেকে সরিয়ে নেওয়া হয়।"
          },
          {
            "en": "Then the condition: in kuntum iyyahu ta'budun, if it is Him you worship. The pronoun iyyahu is placed before its verb, and Arabic uses that order to restrict — Him and no other. So the closing clause turns the whole verse into a question about the object of worship, and gratitude is what the question measures. Ibn Kathir states the link plainly: He is the Giver and Originator of every favour, and He alone deserves to be worshipped, having no partner.",
            "bn": "এরপর আসে শর্ত: ইন কুনতুম ইয়্যাহু তা'বুদূন — যদি তোমরা তাঁরই ইবাদত করে থাক। সর্বনাম 'ইয়্যাহু' ক্রিয়ার আগে বসেছে, আর আরবিতে এই বিন্যাস সীমাবদ্ধ করার জন্য ব্যবহৃত হয় — তিনিই, অন্য কেউ নয়। ফলে শেষ বাক্যাংশটি গোটা আয়াতটিকে বানিয়ে তোলে একটি প্রশ্ন: ইবাদতের লক্ষ্য কে? আর সেই প্রশ্নের মাপকাঠি হলো কৃতজ্ঞতা। ইবনে কাসীর সম্পর্কটি স্পষ্ট করে বলেন: তিনিই প্রতিটি নিয়ামতের দাতা ও উদ্ভাবক, আর একমাত্র তিনিই ইবাদতের যোগ্য, তাঁর কোনো শরিক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wide Door, Then the Narrow One",
          "bn": "প্রশস্ত দরজা, তারপর সরু দরজা"
        },
        "p": [
          {
            "en": "16:115 comes next and names what is forbidden: carrion, blood, the flesh of swine, and what has been dedicated to other than Allah — with a concession for whoever is compelled by necessity, neither desiring it nor transgressing. The list opens with innama, He has only forbidden, a restrictive particle: the prohibitions are few, named, and closed. The order across the two verses is deliberate. Permission is stated first and broadly; prohibition comes second and stays narrow.",
            "bn": "এরপর আসে 16:115, যা নাম ধরে বলে কী হারাম: মৃত জীব, রক্ত, শূকরের মাংস, আর যার উপর আল্লাহ ছাড়া অন্যের নাম নেওয়া হয়েছে — সঙ্গে ছাড় রয়েছে তার জন্য যে নিরুপায় হয়ে বাধ্য হয়, ইচ্ছাকৃত অবাধ্যতা বা সীমালঙ্ঘন ছাড়া। তালিকাটি শুরু হয় 'ইন্নামা' দিয়ে — 'তিনি কেবল হারাম করেছেন' — একটি সীমাবদ্ধকারী অব্যয়: নিষেধগুলো সংখ্যায় অল্প, নাম ধরে বলা, এবং আবদ্ধ। দুই আয়াতের এই ক্রম উদ্দেশ্যপ্রণোদিত। অনুমতি আগে ও প্রশস্তভাবে; নিষেধ পরে এবং সংকীর্ণই থাকে।"
          },
          {
            "en": "16:116 then forbids something else: do not say, of what your tongues assert falsely, this is lawful and this is unlawful, inventing lies about Allah. Ibn Kathir applies it to anyone who declares lawful what Allah forbade, or forbids what He permitted, because it suits his own opinion. And 16:121 holds up Ibrahim (AS) in a single phrase — shakiran li-an'umih, grateful for His favours. In a passage about who may forbid what, the pattern raised is a grateful man.",
            "bn": "এরপর 16:116 আরেকটি জিনিস নিষেধ করে: তোমাদের জিহ্বা মিথ্যা যা বলে সে অনুযায়ী বলো না — 'এটা হালাল, ওটা হারাম' — আল্লাহর প্রতি মিথ্যা আরোপ করার জন্য। ইবনে কাসীর এটি প্রয়োগ করেন এমন প্রত্যেকের উপর যে নিজের মতের সুবিধার্থে আল্লাহর হারামকে হালাল বলে বা তাঁর হালালকে হারাম বলে। আর 16:121 ইবরাহীম (আঃ)-কে সামনে আনে একটিমাত্র বাক্যাংশে — শাকিরান লি-আন'উমিহ, তাঁর নিয়ামতসমূহের জন্য কৃতজ্ঞ। কে কী নিষেধ করতে পারে, এই আলোচনায় আদর্শ হিসেবে দাঁড় করানো হয় একজন কৃতজ্ঞ মানুষকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Is Practised",
          "bn": "আয়াতটি যেখানে অনুশীলিত হয়"
        },
        "p": [
          {
            "en": "Muslim narrates from Anas ibn Malik (RA) that the Prophet ﷺ said Allah is pleased with the servant who eats a meal and praises Him for it, or drinks a drink and praises Him for it. The pleasure described is out of all proportion to the act; a sentence spoken after a meal is close to the cheapest thing a person can do. The verse takes the most ordinary act in a day and makes it where worship is proved.",
            "bn": "ইমাম মুসলিম আনাস ইবনে মালিক (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ সেই বান্দার প্রতি সন্তুষ্ট হন যে খাবার খেয়ে তাঁর প্রশংসা করে, বা পানীয় পান করে তাঁর প্রশংসা করে। বর্ণিত এই সন্তুষ্টি কাজটির তুলনায় বহু বড়; খাওয়ার পর একটি বাক্য বলা মানুষের পক্ষে প্রায় সবচেয়ে সহজ কাজ। আয়াতটি দিনের সবচেয়ে সাধারণ কাজটিকে নেয় এবং সেটিকেই বানায় সেই জায়গা যেখানে ইবাদতের প্রমাণ মেলে।"
          },
          {
            "en": "Two practical halves follow the verse's two adjectives. Halal is a question about where the food came from — the earning as much as the meat, since money that arrives wrongly does not become clean by being spent on something permitted. Tayyib is a question about what the food does to a body you were lent. And the thanks needs saying aloud sometimes, because gratitude kept entirely silent slides quickly into the assumption that the meal was always going to be there.",
            "bn": "আয়াতের দুই বিশেষণ থেকে বেরিয়ে আসে দুটি ব্যবহারিক দিক। 'হালাল' প্রশ্ন করে খাবারটি কোথা থেকে এসেছে — মাংসের মতোই উপার্জনও, কারণ অন্যায়ভাবে আসা অর্থ বৈধ কিছুতে খরচ করলেই পবিত্র হয়ে যায় না। 'তাইয়িব' প্রশ্ন করে সেই খাবার আপনার ধার পাওয়া শরীরের সঙ্গে কী করছে। আর শুকরিয়া মাঝে মাঝে মুখে উচ্চারণ করা দরকার, কারণ সম্পূর্ণ নীরব কৃতজ্ঞতা দ্রুতই এই ধারণায় গড়িয়ে যায় যে খাবারটি তো এমনিতেই থাকার কথা ছিল।"
          }
        ]
      }
    ]
  },
  "16:125": {
    "sections": [
      {
        "h": {
          "en": "Near the End of an-Nahl",
          "bn": "সূরা আন-নাহলের শেষপ্রান্তে"
        },
        "p": [
          {
            "en": "The instruction sits inside the surah's closing movement. 16:124 says the Sabbath was appointed only for those who differed over it, and leaves the judgment to the Day of Resurrection. Then comes this verse on how to call. 16:126 limits retaliation to the equivalent of what was suffered. 16:127 tells the Prophet ﷺ to be patient, not to grieve over them, and not to be in distress at what they plot. 16:128 closes: Allah is with those who fear Him and the doers of good.",
            "bn": "নির্দেশটি বসে আছে সূরার সমাপ্তি-ধারার ভেতরে। 16:124 বলে, শনিবার পালন কেবল তাদের উপরই দেওয়া হয়েছিল যারা এ নিয়ে মতভেদ করেছিল, আর তার ফয়সালা ছেড়ে দেয় কিয়ামতের দিনের উপর। এরপর আসে আহ্বানের পদ্ধতি নিয়ে এই আয়াত। 16:126 প্রতিশোধকে যতটুকু ক্ষতি হয়েছে ততটুকুতেই সীমিত করে। 16:127 নবী ﷺ-কে বলে ধৈর্য ধরতে, তাদের জন্য শোক না করতে, আর তাদের ষড়যন্ত্রে সংকুচিত না হতে। 16:128 শেষ করে: আল্লাহ তাদের সঙ্গে আছেন যারা তাঁকে ভয় করে এবং যারা সৎকর্মশীল।"
          },
          {
            "en": "Read in that order the passage narrows steadily: how to speak to everyone, what to do when they strike back, what to do inside your own chest, and finally who is standing beside you while you do it. The method verse comes first because everything after it assumes the caller has already been told how to behave. Someone who has not settled his manner will not survive the three verses that follow.",
            "bn": "এই ক্রমে পড়লে অংশটি ধাপে ধাপে সরু হয়ে আসে: সবার সঙ্গে কীভাবে কথা বলতে হবে, তারা পাল্টা আঘাত করলে কী করতে হবে, নিজের বুকের ভেতরে কী করতে হবে, আর সবশেষে এসব করার সময় কে আপনার পাশে দাঁড়িয়ে আছেন। পদ্ধতির আয়াতটি আগে আসে, কারণ এর পরের সবকিছু ধরে নেয় যে আহ্বানকারীকে আচরণের কথা আগেই বলে দেওয়া হয়েছে। যে নিজের ভঙ্গি স্থির করেনি, সে পরের তিন আয়াত টিকে পার হতে পারবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Modes, Not Four",
          "bn": "তিনটি পন্থা, চারটি নয়"
        },
        "p": [
          {
            "en": "Ud'u ila sabili rabbika — call to the way of your Lord, His way and not the caller's, which quietly removes the caller's opinions and reputation from the invitation. Then three modes are named and no more. Bil-hikmah, with wisdom. Wal-maw'izatil-hasanah, and good admonition. Wa jadilhum billati hiya ahsan, and dispute with them by that which is best. The first two attach to the verb of calling by a single prefixed bi, so they are the instruments of the invitation itself.",
            "bn": "উদ্‌উ ইলা সাবীলি রাব্বিকা — তোমার রবের পথের দিকে আহ্বান করো; তাঁর পথ, আহ্বানকারীর পথ নয় — এতেই নীরবে আহ্বানকারীর নিজস্ব মত ও সুনাম দাওয়াত থেকে সরে যায়। এরপর তিনটি পন্থার নাম বলা হয়, এর বেশি নয়। বিল-হিকমাহ — প্রজ্ঞা দিয়ে। ওয়াল-মাওইযাতিল-হাসানাহ — আর উত্তম উপদেশ দিয়ে। ওয়া জাদিলহুম বিল্লাতী হিয়া আহসান — আর তাদের সঙ্গে বিতর্ক করো সর্বোত্তম পন্থায়। প্রথম দুটি আহ্বানের ক্রিয়ার সঙ্গে যুক্ত একটিমাত্র উপসর্গ 'বি' দিয়ে, অর্থাৎ সেগুলো দাওয়াতেরই হাতিয়ার।"
          },
          {
            "en": "The third carries its own imperative and its own object, because disputing is a different situation: it begins only when the other side pushes back. The adjectives do not repeat either. The admonition is qualified as hasanah, good; the disputation by ahsan, that which is better or best. The easier task gets the ordinary standard and the harder one the higher. Nothing here licenses a fourth mode kept in reserve for opponents judged to have earned it.",
            "bn": "তৃতীয়টির নিজস্ব নির্দেশবাচক ক্রিয়া ও নিজস্ব কর্ম আছে, কারণ বিতর্ক আলাদা এক পরিস্থিতি: তা শুরুই হয় তখন, যখন অপর পক্ষ পাল্টা চাপ দেয়। বিশেষণগুলোও পুনরাবৃত্তি করে না। উপদেশকে গুণান্বিত করা হয়েছে 'হাসানাহ' — উত্তম দিয়ে; আর বিতর্ককে 'আহসান' — যা উত্তমতর বা সর্বোত্তম, তা দিয়ে। সহজ কাজটি পায় সাধারণ মান, কঠিন কাজটি পায় উঁচু মান। এখানে এমন চতুর্থ কোনো পন্থার অনুমতি নেই, যা 'উপযুক্ত' প্রতিপক্ষের জন্য জমা রাখা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Three Words Carry",
          "bn": "তিনটি শব্দ যা বহন করে"
        },
        "p": [
          {
            "en": "Ibn Kathir cites Ibn Jarir at-Tabari for hikmah: it is what was revealed to the Prophet ﷺ of the Book and the Sunnah. Others gloss the word as knowledge joined to right action, or as putting a thing in its proper place. Maw'izah works on the will rather than the intellect, and Ibn Kathir explains the good admonition here as exhortation and the accounts of earlier peoples in the Quran, told in order to warn.",
            "bn": "'হিকমাহ'-এর ব্যাখ্যায় ইবনে কাসীর ইবনে জারীর আত-তাবারীকে উদ্ধৃত করেন: এটি হলো নবী ﷺ-এর প্রতি কিতাব ও সুন্নাহ থেকে যা নাযিল হয়েছে। অন্যরা শব্দটির অর্থ করেন সঠিক আমলের সঙ্গে যুক্ত জ্ঞান, কিংবা প্রতিটি জিনিসকে তার যথাযথ জায়গায় রাখা। 'মাওইযা' কাজ করে বুদ্ধির চেয়ে ইচ্ছাশক্তির উপর; আর ইবনে কাসীর এখানে উত্তম উপদেশের ব্যাখ্যা করেন নসিহত এবং কুরআনে বর্ণিত পূর্ববর্তী জাতিগুলোর ঘটনা হিসেবে, যা সতর্ক করার জন্য শোনানো হয়।"
          },
          {
            "en": "For the third mode Ibn Kathir writes that if any of them want to debate and argue, let that be in the best manner, with kindness, gentleness and good speech — and he sets 29:46 beside it, do not argue with the People of the Scripture except by that which is best. He also cites the instruction given to Musa (AS) and Harun (AS) in 20:44: speak to him a gentle word, that perhaps he may be reminded or fear. That command concerned Fir'awn.",
            "bn": "তৃতীয় পন্থা সম্পর্কে ইবনে কাসীর লেখেন, তাদের কেউ যদি বাদানুবাদ ও তর্ক করতে চায়, তবে তা হোক সর্বোত্তম পন্থায় — কোমলতা, নম্রতা ও সুন্দর কথার সঙ্গে; আর তিনি এর পাশে রাখেন 29:46, আহলে কিতাবের সঙ্গে বিতর্ক করো না, কেবল যা সর্বোত্তম সেই পন্থা ছাড়া। তিনি আরও উদ্ধৃত করেন মূসা (আঃ) ও হারূন (আঃ)-কে দেওয়া 20:44-এর নির্দেশ: তার সঙ্গে নরম কথা বলো, হয়তো সে উপদেশ গ্রহণ করবে বা ভয় করবে। সেই নির্দেশ ছিল ফিরআউন প্রসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause That Explains the Method",
          "bn": "যে বাক্যাংশ পদ্ধতিটি ব্যাখ্যা করে"
        },
        "p": [
          {
            "en": "The verse does not stop at method. Inna rabbaka huwa a'lamu bi-man dalla 'an sabilihi wa huwa a'lamu bil-muhtadin — indeed your Lord is most knowing of who has strayed from His way, and most knowing of the guided. The word sabil appears twice in the verse, at the opening and here, and the second time it is His way that people stray from. The caller and the strayer are measured against one road, and neither of them owns it.",
            "bn": "আয়াতটি পদ্ধতিতেই থেমে থাকে না। ইন্না রাব্বাকা হুওয়া আ'লামু বিমান দাল্লা 'আন সাবীলিহি ওয়া হুওয়া আ'লামু বিল-মুহতাদীন — নিশ্চয়ই তোমার রবই সবচেয়ে ভালো জানেন কে তাঁর পথ থেকে বিচ্যুত হয়েছে, আর তিনিই সবচেয়ে ভালো জানেন কারা হেদায়েতপ্রাপ্ত। 'সাবীল' শব্দটি আয়াতে দুইবার আসে — শুরুতে আর এখানে; দ্বিতীয়বার এটি তাঁরই পথ, যা থেকে মানুষ বিচ্যুত হয়। আহ্বানকারী ও বিচ্যুত ব্যক্তি — দুজনকেই মাপা হচ্ছে একই পথের বিপরীতে, আর সেই পথের মালিক তাদের কেউ নয়।"
          },
          {
            "en": "Ibn Kathir draws the consequence: call them to Allah, but do not exhaust yourself with regret over those who go astray, for guiding them is not your task — and he cites 28:56, you do not guide whom you love. The reason clause is therefore a release rather than a threat. If the verdict on who is guided belonged to the caller, harshness might at least be rational. Since it does not, all that is left in his hands is the manner.",
            "bn": "ইবনে কাসীর এর সিদ্ধান্ত টানেন: তাদের আল্লাহর দিকে ডাকো, কিন্তু যারা পথভ্রষ্ট হয় তাদের নিয়ে আফসোসে নিজেকে নিঃশেষ করো না, কারণ তাদের হেদায়েত দেওয়া তোমার দায়িত্ব নয় — আর তিনি উদ্ধৃত করেন 28:56, তুমি যাকে ভালোবাস তাকে হেদায়েত দিতে পার না। তাই কারণ-বাক্যাংশটি হুমকি নয়, মুক্তি। কে হেদায়েতপ্রাপ্ত সেই রায় যদি আহ্বানকারীর হাতে থাকত, কঠোরতা অন্তত যুক্তিসংগত হতে পারত। যেহেতু তা তার হাতে নেই, তার হাতে থাকে কেবল ভঙ্গিটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Is Hardest",
          "bn": "যেখানে এটি সবচেয়ে কঠিন"
        },
        "p": [
          {
            "en": "The place this verse is tested now is an argument with an audience. Written exchanges reward the sharp reply, keep it permanently, and let strangers score it — three conditions that make billati hiya ahsan feel like losing. But the verse never assigned the caller a result to win. 3:159 states the cost of the alternative from the other end: had the Prophet ﷺ been rude and hard of heart, they would have dispersed from around him.",
            "bn": "আজকের দিনে এই আয়াত সবচেয়ে বেশি পরীক্ষিত হয় দর্শকসমেত তর্কে। লিখিত বাহাস তীক্ষ্ণ জবাবকে পুরস্কৃত করে, তা স্থায়ীভাবে জমা রাখে, আর অচেনা লোকদের নম্বর দিতে দেয় — এই তিন শর্ত মিলে 'বিল্লাতী হিয়া আহসান'-কে পরাজয়ের মতো অনুভব করায়। কিন্তু আয়াতটি আহ্বানকারীকে জেতার মতো কোনো ফলাফল দেয়ইনি। 3:159 বিকল্পটির মূল্য অন্য প্রান্ত থেকে বলে দেয়: নবী ﷺ যদি রূঢ় ও কঠোরহৃদয় হতেন, তারা তাঁর চারপাশ থেকে সরে যেত।"
          },
          {
            "en": "Practically the verse sorts a conversation into its parts before it starts. What is being invited to — His way, which means checking that the content is the Book and the Sunnah rather than a personal preference. Who is listening — which decides between wisdom and admonition. And what to do once it turns into a dispute, which the verse answers with a single comparative: better. Whether the person is persuaded is the one part that was never assigned to you at all.",
            "bn": "ব্যবহারিকভাবে আয়াতটি কথোপকথন শুরুর আগেই তাকে ভাগে ভাগে সাজিয়ে দেয়। কীসের দিকে ডাকা হচ্ছে — তাঁর পথ; অর্থাৎ যাচাই করা যে বিষয়বস্তু ব্যক্তিগত পছন্দ নয়, বরং কিতাব ও সুন্নাহ। কে শুনছে — এটিই ঠিক করে প্রজ্ঞা না উপদেশ। আর তা যখন বিতর্কে গড়ায় তখন কী করতে হবে — এর উত্তর আয়াত দেয় একটিমাত্র তুলনামূলক শব্দে: উত্তমতর। সে ব্যক্তি বুঝবে কি না, সেটুকুই একমাত্র অংশ যা কখনোই আপনার দায়িত্বে দেওয়া হয়নি।"
          }
        ]
      }
    ]
  },
  "16:127": {
    "sections": [
      {
        "h": {
          "en": "Not the Last Word",
          "bn": "শেষ কথা নয়"
        },
        "p": [
          {
            "en": "Surah an-Nahl has a hundred and twenty-eight verses, so this is the second of its last three, not its closing note. The three work as one movement. In 16:125 comes the instruction to call to the way of your Lord with wisdom and good instruction and to argue in the way that is best. In 16:126 comes the limit on retaliation: if you punish, punish with the equivalent of what you suffered, and if you are patient, that is better for the patient.",
            "bn": "সূরা আন-নাহলের আয়াত সংখ্যা একশত আটাশ, তাই এটি তার শেষ তিন আয়াতের দ্বিতীয়টি — শেষ কথা নয়। তিনটি একসঙ্গে একটি ধারা হিসেবে কাজ করে। 16:125 আয়াতে আসে নির্দেশ: হিকমত ও সদুপদেশ দিয়ে তোমার প্রতিপালকের পথে ডাকো, আর তর্ক করো সর্বোত্তম পন্থায়। 16:126 আয়াতে আসে প্রতিশোধের সীমা: যদি শাস্তি দাও, তবে যতটুকু কষ্ট পেয়েছ ততটুকুই দাও; আর যদি ধৈর্য ধরো, তা ধৈর্যশীলদের জন্যই উত্তম।"
          },
          {
            "en": "Our verse then turns from the community to the one carrying the burden of the call, and 16:128 closes with the ground under all of it: indeed Allah is with those who are mindful of Him and those who do good. Read in that order the passage narrows steadily — from how to speak to everyone, to what to do when they hit back, to what to do inside your own chest, and finally to who is standing with you while you do it.",
            "bn": "এরপর আমাদের আয়াতটি সম্প্রদায় থেকে মুখ ফিরিয়ে সেই ব্যক্তির দিকে আসে যিনি দাওয়াতের বোঝা বইছেন; আর 16:128 শেষ করে গোটা বিষয়টির ভিত্তি দিয়ে: নিশ্চয়ই আল্লাহ তাদের সঙ্গে আছেন যারা তাকওয়া অবলম্বন করে এবং যারা সৎকর্মশীল। এই ক্রমে পড়লে অনুচ্ছেদটি ক্রমাগত সরু হয়ে আসে — সবার সঙ্গে কীভাবে কথা বলতে হবে, তারা পাল্টা আঘাত করলে কী করতে হবে, নিজের বুকের ভেতরে কী করতে হবে, আর শেষে — এসব করার সময় কে আপনার সঙ্গে দাঁড়িয়ে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Reported",
          "bn": "বর্ণিত প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, and al-Wahidi and Ibn Kathir repeat, that the verse before this one came down at Uhud when the Prophet ﷺ stood over the mutilated body of his uncle Hamzah (RA) and spoke of answering in kind, and that he then chose patience and forbade mutilation. The chain of that report has been questioned, so it is fairer to present it as the commentators' account than as an established occasion of revelation. Surah an-Nahl is Makkan in the main, and these closing verses are widely held to belong to the Madinan period.",
            "bn": "আত-তিরমিযী লিপিবদ্ধ করেন, আর আল-ওয়াহিদী ও ইবনে কাসীর তা পুনরাবৃত্তি করেন যে, এর আগের আয়াতটি উহুদে নাযিল হয়েছিল, যখন নবী ﷺ তাঁর চাচা হামযা (রাঃ)-এর অঙ্গবিকৃত দেহের পাশে দাঁড়িয়ে সমানভাবে জবাব দেওয়ার কথা বলেছিলেন, আর তারপর তিনি ধৈর্য বেছে নেন ও অঙ্গবিকৃতি নিষেধ করেন। এই বর্ণনার সনদ নিয়ে প্রশ্ন তোলা হয়েছে, তাই একে প্রতিষ্ঠিত শানে নুযূল না বলে মুফাসসিরদের বিবরণ হিসেবে উপস্থাপন করাই ন্যায়সংগত। সূরা আন-নাহল মূলত মক্কী, আর এই শেষ আয়াতগুলোকে ব্যাপকভাবে মাদানী পর্বের বলে ধরা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Patience Is Only Through Allah",
          "bn": "তোমার ধৈর্য কেবল আল্লাহর মাধ্যমেই"
        },
        "p": [
          {
            "en": "The verse opens with one command and then immediately qualifies it: wasbir, be patient, wa ma sabruka illa billah, and your patience is not except through Allah. That qualifier uses the strongest restriction Arabic has, a negation followed by an exception, which shuts every other possibility out. Nothing softer would do the job. The sentence does not say Allah helps with patience; it says there is no patience of yours that is not through Him.",
            "bn": "আয়াতটি শুরু হয় একটি আদেশ দিয়ে, আর সঙ্গে সঙ্গেই তাতে শর্ত জুড়ে দেয়: 'ওয়াসবির' — ধৈর্য ধরো, 'ওয়া মা সাবরুকা ইল্লা বিল্লাহ' — আর তোমার ধৈর্য আল্লাহর মাধ্যম ছাড়া নয়। এই শর্তটি আরবির সবচেয়ে শক্ত সীমাবদ্ধকরণ ব্যবহার করে — অস্বীকৃতির পর ব্যতিক্রম — যা অন্য সব সম্ভাবনা বন্ধ করে দেয়। এর চেয়ে নরম কিছুতে কাজ হতো না। বাক্যটি বলে না যে আল্লাহ ধৈর্যে সাহায্য করেন; এটি বলে, তোমার এমন কোনো ধৈর্যই নেই যা তাঁর মাধ্যমে নয়।"
          },
          {
            "en": "As-Sa'di draws the practical conclusion, that a person who tries to endure on his own reserves is drawing on an account that was never his. This is why the same Quran that commands patience so often also has believers asking for it, as in 2:250 where an outnumbered army asks their Lord for patience before facing Goliath. The command and the request are not in tension. The command tells you what is required; the clause tells you where to get it.",
            "bn": "আস-সা'দী ব্যবহারিক সিদ্ধান্তটি টানেন: যে মানুষ নিজের সঞ্চয় থেকে সহ্য করতে চায়, সে এমন একটি হিসাব থেকে তুলছে যা কখনো তার ছিল না। এ কারণেই যে কুরআন এত বারবার ধৈর্যের আদেশ দেয়, সেখানেই মুমিনদের ধৈর্য চাইতেও দেখা যায় — যেমন 2:250 আয়াতে সংখ্যায় কম একটি বাহিনী জ্বালুতের মুখোমুখি হওয়ার আগে তাদের প্রতিপালকের কাছে ধৈর্য চায়। আদেশ ও চাওয়ার মধ্যে কোনো টানাপোড়েন নেই। আদেশ বলে কী দরকার; বাক্যাংশটি বলে তা কোথা থেকে পেতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Things Forbidden",
          "bn": "দুটি জিনিস নিষেধ"
        },
        "p": [
          {
            "en": "After the command come two prohibitions, so three instructions in all. Do not grieve over them: the grief named here is not grief for oneself but for the people who are refusing, which is the particular sorrow of anyone who has invited someone to something good and been turned down. Then, do not be in dayq over what they plot. Dayq is narrowness, the physical sense of a chest with no room in it.",
            "bn": "আদেশের পরে আসে দুটি নিষেধ, অর্থাৎ মোট তিনটি নির্দেশ। তাদের জন্য দুঃখ করো না: এখানে যে দুঃখের কথা, তা নিজের জন্য নয়, বরং যারা প্রত্যাখ্যান করছে তাদের জন্য — যে কেউ কাউকে ভালো কিছুর দিকে ডেকে প্রত্যাখ্যাত হয়েছে, তারই সেই বিশেষ বেদনা। তারপর, তারা যে ষড়যন্ত্র করে তাতে 'দাইক্ব'-এর মধ্যে থেকো না। 'দাইক্ব' মানে সংকীর্ণতা — বুকের ভেতরে জায়গা না থাকার শারীরিক অনুভূতি।"
          },
          {
            "en": "The same root describes the Prophet ﷺ in 15:97, where Allah says He knows that his breast is constrained by what they say. That is worth putting beside this verse. The constriction is not denied or treated as a fault; it is acknowledged by the One who sees it, and then the instruction is given anyway. The verb here is also in a shortened form, la taku rather than the full la takun, which the grammarians note as a lighter, closer way of speaking.",
            "bn": "একই ধাতুমূল 15:97 আয়াতে নবী ﷺ-এর বর্ণনায় আসে, যেখানে আল্লাহ বলেন তিনি জানেন যে তারা যা বলে তাতে তাঁর মন সংকুচিত হয়। এটি এই আয়াতের পাশে রাখার মতো। সংকোচনটিকে অস্বীকার করা হয় না, দোষ হিসেবেও ধরা হয় না; যিনি তা দেখেন তিনিই তা স্বীকার করেন, আর তারপরও নির্দেশটি দেওয়া হয়। এখানে ক্রিয়াপদটিও সংক্ষিপ্ত রূপে — পূর্ণ 'লা তাকুন' নয়, 'লা তাকু' — যা ব্যাকরণবিদরা হালকা ও ঘনিষ্ঠতর বলার ভঙ্গি হিসেবে উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ground It Rests On",
          "bn": "যে ভিত্তির ওপর এটি দাঁড়ানো"
        },
        "p": [
          {
            "en": "None of the three instructions is left to willpower, because 16:128 supplies the reason: Allah is with those who fear Him and those who do good. This is the with-ness of help and protection, not merely of knowledge, and the Quran uses it exactly where a person is outmatched. It is what the Prophet ﷺ said to his companion in the cave in 9:40, do not grieve, indeed Allah is with us, and it is how 29:69 ends, that Allah is with the doers of good.",
            "bn": "তিনটি নির্দেশের কোনোটিই ইচ্ছাশক্তির ওপর ছেড়ে দেওয়া হয়নি, কারণ 16:128 আয়াত কারণটি জুগিয়ে দেয়: আল্লাহ তাদের সঙ্গে আছেন যারা তাকওয়া অবলম্বন করে ও সৎকর্ম করে। এটি কেবল জ্ঞানের সঙ্গ নয়, সাহায্য ও রক্ষার সঙ্গ; আর কুরআন ঠিক সেখানেই এটি ব্যবহার করে যেখানে মানুষ শক্তিতে পিছিয়ে। এটিই নবী ﷺ গুহায় তাঁর সঙ্গীকে বলেছিলেন 9:40 আয়াতে — দুঃখ করো না, নিশ্চয়ই আল্লাহ আমাদের সঙ্গে আছেন; আর এভাবেই 29:69 আয়াত শেষ হয় যে আল্লাহ সৎকর্মশীলদের সঙ্গে আছেন।"
          },
          {
            "en": "Lived out, the verse sorts a tangle most of us carry into one order. Endure, but stop trying to generate the endurance yourself and ask for it. Care about people without carrying their refusal as a personal defeat. And let the schemes of others be a matter you know about rather than a room you live inside. The last of the three is usually the hardest, and it is the one the surah answers by naming who is standing beside you.",
            "bn": "জীবনে প্রয়োগ করলে আয়াতটি আমাদের বেশিরভাগের বয়ে বেড়ানো জটটিকে একটি ক্রমে সাজিয়ে দেয়। সহ্য করো, কিন্তু সেই সহ্যক্ষমতা নিজে তৈরি করার চেষ্টা ছেড়ে দিয়ে তা চেয়ে নাও। মানুষের জন্য ভাবো, কিন্তু তাদের প্রত্যাখ্যানকে ব্যক্তিগত পরাজয় হিসেবে বয়ে বেড়িও না। আর অন্যদের ষড়যন্ত্রকে এমন একটি বিষয় হতে দাও যা তুমি জানো, এমন একটি ঘর নয় যার ভেতরে তুমি বাস করো। তিনটির শেষটিই সাধারণত কঠিনতম, আর সূরাটি সেটিরই জবাব দেয় তোমার পাশে কে দাঁড়িয়ে আছেন তা বলে দিয়ে।"
          }
        ]
      }
    ]
  }
});
