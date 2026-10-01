/**
 * Tadabbur long-form articles — surah 32.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "32:7": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Begins",
          "bn": "বাক্যটি যেখানে শুরু"
        },
        "p": [
          {
            "en": "This verse is not a fresh sentence. It opens with alladhi, a relative pronoun, and hangs on what came before it: 32:6 had named Him the Knower of the unseen and the witnessed, the Exalted in Might, the Merciful. So the One who made everything well is being added to a run of names already under way, not announced separately. The craftsmanship is presented as another of His attributes rather than as a separate claim about the world.",
            "bn": "এই আয়াতটি নতুন কোনো বাক্য নয়। এটি শুরু হয় 'আল্লাযী' দিয়ে, যা একটি সম্বন্ধবাচক সর্বনাম, আর তা ঝুলে থাকে ঠিক আগের কথার সঙ্গে: 32:6 আয়াতে তাঁকে বলা হয়েছিল অদৃশ্য ও দৃশ্যমানের জ্ঞানী, মহাপরাক্রমশালী, পরম দয়ালু। ফলে 'যিনি সবকিছু উত্তমরূপে করেছেন' — এটি আলাদা করে ঘোষিত হচ্ছে না, বরং আগে থেকেই চলতে থাকা নামের সারিতে যুক্ত হচ্ছে। কারিগরিকে পেশ করা হচ্ছে জগৎ সম্পর্কে পৃথক কোনো দাবি হিসেবে নয়, বরং তাঁর আরেকটি গুণ হিসেবে।"
          },
          {
            "en": "The clause itself is five words: alladhi ahsana kulla shay'in khalaqah. Ahsana is the fourth form of the root of husn, beauty and goodness; the fourth form makes it transitive, so the verb means to make a thing good, or to do a thing well. Kulla shay' — every single thing — is as wide as Arabic can make a phrase, and no exception is attached to it anywhere in the verse or the ones around it.",
            "bn": "বাক্যাংশটি নিজেই পাঁচটি শব্দ: আল্লাযী আহসানা কুল্লা শাইইন খালাকাহ। 'আহসানা' হলো 'হুসন' অর্থাৎ সৌন্দর্য ও কল্যাণের ধাতুর চতুর্থ গঠন; চতুর্থ গঠন একে সকর্মক করে তোলে, ফলে ক্রিয়াপদটির অর্থ দাঁড়ায় কোনো জিনিসকে উত্তম করা, কিংবা কোনো কাজ উত্তমভাবে করা। 'কুল্লা শাইইন' — প্রতিটি জিনিস — আরবি ভাষায় যতটা প্রশস্ত করা সম্ভব ততটাই প্রশস্ত, আর এই আয়াতে বা আশপাশের আয়াতগুলোর কোথাও এর সঙ্গে কোনো ব্যতিক্রম জুড়ে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of One Word",
          "bn": "একটি শব্দের দুই কিরাআত"
        },
        "p": [
          {
            "en": "The last word of the clause is vowelled two ways, and both are transmitted among the canonical readings. Read khalaqahu, a past-tense verb, the sentence says: who made good everything He created — the goodness is asserted of the thing itself. Read khalqahu, a verbal noun, and it says: who made good the creation of everything — the goodness is asserted of the making. The early authorities pass on both, and neither reading is treated as the correction of the other.",
            "bn": "বাক্যাংশের শেষ শব্দটিকে দুইভাবে হরকত দেওয়া হয়, আর দুটিই স্বীকৃত কিরাআতে বর্ণিত। 'খালাকাহু' পড়লে — অতীতকালের ক্রিয়া — বাক্যটি বলে: যিনি তাঁর সৃষ্ট প্রতিটি জিনিসকে উত্তম করেছেন; অর্থাৎ উত্তমত্ব আরোপিত হয় বস্তুটির ওপর। আর 'খালকাহু' পড়লে — ক্রিয়াবাচক বিশেষ্য — বাক্যটি বলে: যিনি প্রতিটি জিনিসের সৃষ্টিকে উত্তম করেছেন; অর্থাৎ উত্তমত্ব আরোপিত হয় সৃষ্টি করার কাজটির ওপর। প্রাচীন কর্তৃপক্ষগণ দুটিই বর্ণনা করেছেন, আর কোনো পাঠকেই অপরটির সংশোধন হিসেবে দেখা হয়নি।"
          },
          {
            "en": "The second reading's construction appears plainly elsewhere. In 20:50 Musa (AS) answers Fir'awn: our Lord is He who gave each thing its form, then guided it — the same two elements, kulla shay' and khalq, set side by side. The two readings of this verse do not compete so much as hand you different things to look at: one an object made well, the other a making done well. A reader is not required to choose.",
            "bn": "দ্বিতীয় পাঠের গঠনটি অন্যত্র স্পষ্টভাবেই আসে। 20:50 আয়াতে মূসা (আঃ) ফিরআউনকে উত্তর দেন: আমাদের প্রতিপালক তিনিই, যিনি প্রতিটি জিনিসকে তার আকৃতি দিয়েছেন, তারপর পথ দেখিয়েছেন — সেই একই দুটি উপাদান, 'কুল্লা শাইইন' ও 'খালক', পাশাপাশি বসানো। এই আয়াতের দুটি পাঠ পরস্পরের সঙ্গে লড়ে না বরং আপনার সামনে দুটি ভিন্ন জিনিস রাখে: একটি উত্তমভাবে গড়া বস্তু, অন্যটি উত্তমভাবে করা গড়ার কাজ। পাঠককে কোনো একটি বেছে নিতে বলা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Good, Meaning Fitted",
          "bn": "উত্তম, অর্থাৎ যথাযথ"
        },
        "p": [
          {
            "en": "The claim covers everything, including what a person finds frightening or ugly, so it is worth being precise about what is being claimed. The word is about a thing being what its purpose required, not about a thing pleasing us. 25:2 makes the same point with a different word: He created every thing and determined it with exact determination. 54:49 states it flatly: indeed, everything We created is by measure.",
            "bn": "দাবিটি সবকিছুকে ঢেকে ফেলে — যা কিছু মানুষের কাছে ভয়ংকর বা কুৎসিত ঠেকে তাও। তাই ঠিক কী দাবি করা হচ্ছে সে বিষয়ে নিখুঁত হওয়া দরকার। শব্দটির বিষয় হলো কোনো জিনিসের তার উদ্দেশ্য-অনুযায়ী হওয়া, আমাদের ভালো লাগা নয়। 25:2 আয়াত ভিন্ন শব্দে একই কথা বলে: তিনি প্রতিটি জিনিস সৃষ্টি করেছেন এবং তা যথাযথ পরিমাণে নির্ধারণ করেছেন। 54:49 আয়াত তা বলে সরাসরি: নিশ্চয়ই আমি প্রতিটি জিনিস সৃষ্টি করেছি নির্ধারিত পরিমাণে।"
          },
          {
            "en": "That is why the Quran is willing to hand the claim over for inspection. 67:3 says you see no disparity in the creation of ar-Rahman, then tells you to look again and see whether you can find any cracks. A maker who says his work is good and then invites the audit is making a different kind of statement from one who only asks to be praised. Here in as-Sajdah the same claim is put as a name, without the challenge attached.",
            "bn": "এ কারণেই কুরআন দাবিটিকে যাচাইয়ের জন্য তুলে দিতে রাজি। 67:3 আয়াত বলে, রহমানের সৃষ্টিতে তুমি কোনো অসামঞ্জস্য দেখবে না; তারপর বলে আবার তাকাও, কোনো ফাটল চোখে পড়ে কি না। যে নির্মাতা নিজের কাজকে উত্তম বলেন এবং তারপর পরিদর্শনের আমন্ত্রণ জানান, তাঁর বক্তব্য সেই নির্মাতার চেয়ে ভিন্ন যিনি কেবল প্রশংসাই চান। এখানে সূরা আস-সাজদায় একই দাবি রাখা হয়েছে একটি নাম হিসেবে, সঙ্গে চ্যালেঞ্জ জুড়ে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "And He Began Man From Clay",
          "bn": "আর মানুষের সূচনা মাটি থেকে"
        },
        "p": [
          {
            "en": "The second clause narrows from everything to one case: wa bada'a khalqa al-insani min tin, and He began the creation of man from clay. Bada'a is to begin, and a beginning asks for what follows. The next two verses supply it. 32:8 says He then made his progeny from an extract of a despised fluid, and 32:9 says He then proportioned him and breathed into him of His spirit and made for you hearing and sight and hearts.",
            "bn": "দ্বিতীয় বাক্যাংশটি সবকিছু থেকে সরে এসে একটি দৃষ্টান্তে সংকুচিত হয়: ওয়া বাদাআ খালকাল ইনসানি মিন তীন — আর তিনি মানুষের সৃষ্টি শুরু করেছেন মাটি থেকে। 'বাদাআ' মানে শুরু করা, আর শুরু মানেই তার পরে কিছু আসা। পরের দুটি আয়াত তা জোগায়। 32:8 বলে, এরপর তিনি তার বংশধর সৃষ্টি করেছেন তুচ্ছ এক তরলের নির্যাস থেকে; আর 32:9 বলে, এরপর তিনি তাকে সুঠাম করেছেন, তাতে তাঁর পক্ষ থেকে রূহ ফুঁকে দিয়েছেন এবং তোমাদের জন্য বানিয়েছেন শ্রবণ, দৃষ্টি ও হৃদয়।"
          },
          {
            "en": "Placing the clay next to the perfecting is the argument of the passage. Excellence is not claimed in spite of the material; the material is named in the same breath, twice over, and the second naming is blunter than the first. And 32:9 tells you what the whole sequence was building toward, because it ends not with a conclusion about creation but with a complaint about us: little are you grateful.",
            "bn": "উত্তমরূপে গড়ার কথার পাশেই মাটির কথা বসানোই এই অংশের যুক্তি। নৈপুণ্যের দাবিটি উপকরণকে এড়িয়ে করা হচ্ছে না; উপকরণের নাম নেওয়া হচ্ছে একই নিঃশ্বাসে, দুবার — আর দ্বিতীয়বারের নামকরণ প্রথমটির চেয়েও অকপট। আর 32:9 আয়াত জানিয়ে দেয় পুরো ক্রমটি কোথায় গিয়ে ঠেকছিল, কারণ তা শেষ হয় সৃষ্টি সম্পর্কে কোনো সিদ্ধান্ত দিয়ে নয়, বরং আমাদের সম্পর্কে একটি অনুযোগ দিয়ে: তোমরা কৃতজ্ঞতা প্রকাশ করো সামান্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan Prescribed Back to Us",
          "bn": "ইহসান ফিরিয়ে দেওয়া হলো আমাদের ওপর"
        },
        "p": [
          {
            "en": "The verb of this verse returns as an obligation. Muslim records from Shaddad ibn Aws (RA) that the Prophet ﷺ said: Allah has prescribed ihsan upon everything; so when you kill, kill well, and when you slaughter, slaughter well. The wording is striking beside 32:7 — the same root, the same kulli shay', now written upon the servant. What is described of Allah as a fact about His making is laid on us as a duty in ours.",
            "bn": "এই আয়াতের ক্রিয়াপদটি ফিরে আসে একটি দায়িত্ব হিসেবে। ইমাম মুসলিম শাদ্দাদ ইবনে আউস (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: আল্লাহ প্রতিটি বিষয়ে ইহসান লিখে দিয়েছেন; সুতরাং যখন হত্যা করো, উত্তমভাবে হত্যা করো, আর যখন যবেহ করো, উত্তমভাবে যবেহ করো। 32:7-এর পাশে রাখলে শব্দচয়নটি বিস্ময়কর — একই ধাতু, একই 'কুল্লি শাইইন', এবার বান্দার ওপর লেখা। আল্লাহর সৃষ্টিকর্ম সম্পর্কে যা বাস্তবতা হিসেবে বর্ণিত, আমাদের কর্ম সম্পর্কে তা দায়িত্ব হিসেবে অর্পিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under a Made Thing",
          "bn": "গড়া জিনিসের ভেতরে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "Three things follow for a reader. Gratitude, because 32:9 says our supply of it is short and names the faculties it is short about. Then a guard against contempt — for your own body, your own circumstances, the plain and unglamorous parts of a life that was assembled deliberately. And then the standard for your own work, since the hadith puts the same word in your hands. A world made well is not only something to admire. It is a brief.",
            "bn": "পাঠকের জন্য এখান থেকে তিনটি জিনিস আসে। প্রথমত কৃতজ্ঞতা, কারণ 32:9 বলে আমাদের কৃতজ্ঞতার ভাণ্ডার সামান্য, আর সেই সঙ্গে কোন কোন শক্তি নিয়ে তা সামান্য তারও নাম নেয়। দ্বিতীয়ত অবজ্ঞার বিরুদ্ধে পাহারা — নিজের দেহ, নিজের পরিস্থিতি এবং জীবনের সেই সাদামাটা অংশগুলো নিয়ে, যেগুলো ইচ্ছাকৃতভাবেই জোড়া হয়েছে। আর তৃতীয়ত নিজের কাজের মান, কারণ হাদীসটি একই শব্দ আপনার হাতে তুলে দেয়। উত্তমভাবে গড়া একটি জগৎ কেবল মুগ্ধ হয়ে দেখার জিনিস নয়। এটি একটি কার্যাদেশও।"
          }
        ]
      }
    ]
  },
  "32:16": {
    "sections": [
      {
        "h": {
          "en": "Sides and Lying-Places",
          "bn": "পার্শ্ব ও শয্যা"
        },
        "p": [
          {
            "en": "The verse opens with a body, not a feeling: tatajafa junubuhum an al-madaji'. Tajafa is to be held away from something, to keep clear of it. Junub are the sides. Madaji' is the plural of madja', the place where a person lies down. Read literally, their sides are held away from their lying-places. Nothing is said about what they feel while it happens, and nothing is said about how long it lasts.",
            "bn": "আয়াতটি শুরু হয় একটি দেহ দিয়ে, অনুভূতি দিয়ে নয়: তাতাজাফা জুনূবুহুম আনিল মাদাজি'। 'তাজাফা' মানে কোনো কিছু থেকে দূরে থাকা, তা থেকে সরে থাকা। 'জুনূব' মানে পার্শ্বদেশ। 'মাদাজি'' হলো 'মাদজা'-এর বহুবচন, অর্থাৎ যেখানে মানুষ শুয়ে পড়ে সেই জায়গা। আক্ষরিকভাবে পড়লে: তাদের পার্শ্বগুলো তাদের শয্যা থেকে দূরে থাকে। এটি ঘটার সময় তারা কী অনুভব করে সে সম্পর্কে কিছুই বলা হয়নি, আর কতক্ষণ তা স্থায়ী হয় সে সম্পর্কেও নয়।"
          },
          {
            "en": "The verb is in the imperfect, which in this context describes a habit rather than a single night, and every element is plural. So the picture is not one exceptional person on one exceptional night but a settled practice among a group. It follows 32:15, which had described the same people by what they do when reminded of the verses: they fall down in prostration, glorify their Lord with praise, and are not arrogant.",
            "bn": "ক্রিয়াপদটি অসমাপিকা কালে, যা এই প্রসঙ্গে একটি রাতের নয়, বরং একটি অভ্যাসের বর্ণনা দেয়; আর প্রতিটি উপাদানই বহুবচনে। ফলে ছবিটি কোনো ব্যতিক্রমী রাতে কোনো ব্যতিক্রমী একজন মানুষের নয়, বরং একটি দলের ভেতরে থিতু হয়ে যাওয়া অভ্যাসের। এটি আসে 32:15 আয়াতের পরে, যেখানে এই একই মানুষদের চেনানো হয়েছিল আয়াত স্মরণ করিয়ে দিলে তারা কী করে তা দিয়ে: তারা সিজদায় লুটিয়ে পড়ে, প্রশংসাসহ তাদের প্রতিপালকের পবিত্রতা ঘোষণা করে, আর অহংকার করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Prayer Is Meant",
          "bn": "কোন নামায বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that Mujahid and al-Hasan took the clause to mean the voluntary night prayer. He also transmits from ad-Dahhak a narrower and more surprising reading: it means Isha in congregation and Fajr in congregation. The second reading is worth keeping, because it takes the verse away from a specialised devotion and hands it to anyone who leaves a warm bed twice in the dark. Both readings agree on the one thing the verse actually states, which is what the bed does not get.",
            "bn": "ইবনে কাসীর বর্ণনা করেন যে মুজাহিদ ও হাসান বাক্যাংশটিকে বুঝেছেন নফল রাতের নামায হিসেবে। তিনি দাহহাক থেকে একটি সংকীর্ণতর ও বিস্ময়কর পাঠও বর্ণনা করেন: এর অর্থ জামাতে ইশা ও জামাতে ফজর। দ্বিতীয় পাঠটি ধরে রাখা মূল্যবান, কারণ তা আয়াতটিকে কোনো বিশেষ সাধনার হাত থেকে সরিয়ে এমন যে কারও হাতে তুলে দেয়, যে অন্ধকারে দুবার উষ্ণ বিছানা ছেড়ে ওঠে। আয়াতটি আসলে যা বলে সে বিষয়ে দুটি পাঠই একমত — বিছানা কী পায় না, সেটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear and Aspiration",
          "bn": "ভয় ও আশা"
        },
        "p": [
          {
            "en": "The second clause names what they are doing while upright: yad'una rabbahum khawfan wa tama'an, they call upon their Lord in fear and aspiration. Ibn Kathir glosses the pair as fear of His punishment and hope of His reward. Both words stand in the accusative, read by the grammarians either as the state the callers are in or as the motive they call from. Either way, neither is a stage a worshipper passes through on the way to the other.",
            "bn": "দ্বিতীয় বাক্যাংশটি বলে, দাঁড়িয়ে থাকা অবস্থায় তারা কী করছে: ইয়াদউনা রব্বাহুম খাওফান ওয়া তামাআন — তারা ভীতি ও আশা নিয়ে তাদের প্রতিপালককে ডাকে। ইবনে কাসীর জোড়াটির ব্যাখ্যা করেন তাঁর শাস্তির ভয় ও তাঁর পুরস্কারের আশা হিসেবে। শব্দ দুটিই কর্মকারকে বসেছে, আর ব্যাকরণবিদরা সেগুলোকে পড়েন হয় ডাকনেওয়ালাদের অবস্থা হিসেবে, নয়তো যে প্রেরণা থেকে তারা ডাকে সেই কারণ হিসেবে। যেভাবেই পড়া হোক, কোনোটিই এমন ধাপ নয় যা পেরিয়ে অন্যটিতে যেতে হয়।"
          },
          {
            "en": "The same pair appears in daylight at 7:56 — do not cause corruption in the earth after its setting right, and call upon Him in fear and aspiration; indeed the mercy of Allah is near to the doers of good. There the state belongs to public conduct; here it belongs to a dark room. That the identical pair covers both suggests it is not a mood produced by the hour but the ordinary posture of a servant who has understood his position.",
            "bn": "একই জোড়া দিনের আলোয় আসে 7:56 আয়াতে: যমীনে বিপর্যয় সৃষ্টি করো না তা ঠিক করে দেওয়ার পর, আর তাঁকে ডাকো ভয় ও আশা নিয়ে — নিশ্চয়ই আল্লাহর রহমত সৎকর্মশীলদের নিকটবর্তী। সেখানে এই অবস্থাটি প্রকাশ্য আচরণের সঙ্গে জড়িত; এখানে তা এক অন্ধকার ঘরের। একই জোড়া দুটোকেই ঢেকে ফেলছে দেখে বোঝা যায়, এটি রাতের কারণে জন্ম নেওয়া কোনো ভাব নয়, বরং নিজের অবস্থান বুঝে ফেলা এক বান্দার সাধারণ ভঙ্গি।"
          }
        ]
      },
      {
        "h": {
          "en": "And They Spend",
          "bn": "আর তারা ব্যয় করে"
        },
        "p": [
          {
            "en": "The third clause moves from the night to the wallet: wa mimma razaqnahum yunfiqun, and from what We have provided them, they spend. Notice the turn in the speaker. Allah has been spoken of in the third person — their Lord — and now speaks in the first: what We have provided. The provision is claimed by its owner at precisely the moment the spending of it is mentioned, which quietly settles whose money was being given away.",
            "bn": "তৃতীয় বাক্যাংশটি রাত থেকে সরে আসে থলিতে: ওয়া মিম্মা রাযাকনাহুম ইউনফিকুন — আর আমি তাদের যা দিয়েছি তা থেকে তারা ব্যয় করে। বক্তার বদলটি লক্ষ করুন। এতক্ষণ আল্লাহর কথা বলা হচ্ছিল তৃতীয় পুরুষে — 'তাদের প্রতিপালক' — আর এখন তিনি বলছেন উত্তম পুরুষে: 'আমি যা দিয়েছি'। ঠিক যে মুহূর্তে সেই রিযক ব্যয় করার কথা আসে, সেই মুহূর্তেই তার মালিক তাকে নিজের বলে দাবি করেন — আর তাতেই নীরবে মীমাংসা হয়ে যায়, কার সম্পদ বিলিয়ে দেওয়া হচ্ছিল।"
          },
          {
            "en": "Mimma is partitive: from what, a portion of it, not the whole. And the clause is not new vocabulary invented for these worshippers. The identical words close 2:3, where spending from what We have provided is the third mark of the believers at the opening of Surah al-Baqarah. So the night in this verse is not being offered as a substitute for the daytime obligations. It is placed on top of them.",
            "bn": "'মিম্মা' অংশবাচক: যা থেকে, তার কিছু অংশ — গোটাটা নয়। আর এই বাক্যাংশটি এই ইবাদতকারীদের জন্য নতুন করে বানানো কোনো শব্দগুচ্ছ নয়। ঠিক এই শব্দগুলোতেই শেষ হয় 2:3 আয়াত, যেখানে 'আমি যা দিয়েছি তা থেকে ব্যয় করা' সূরা আল-বাকারার সূচনায় মুমিনদের তৃতীয় পরিচয়। সুতরাং এই আয়াতের রাতটি দিনের দায়িত্বগুলোর বিকল্প হিসেবে দেওয়া হচ্ছে না। তা বসানো হচ্ছে সেগুলোর উপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hidden Deed, a Hidden Reward",
          "bn": "গোপন আমল, গোপন পুরস্কার"
        },
        "p": [
          {
            "en": "32:17, immediately after, says that no soul knows what has been hidden for them of comfort of the eyes, as a reward for what they used to do. Ibn Kathir relates from al-Hasan al-Basri the reading that fits the pairing exactly: because they concealed their deeds, Allah concealed their reward. Al-Bukhari records from Abu Hurayrah (RA) that Allah says He has prepared for His righteous servants what no eye has seen, no ear has heard, and what has never crossed the heart of a human being.",
            "bn": "ঠিক পরের আয়াত 32:17 বলে, কোনো প্রাণই জানে না তাদের কৃতকর্মের পুরস্কার হিসেবে তাদের জন্য চোখজুড়ানো কী লুকিয়ে রাখা হয়েছে। ইবনে কাসীর হাসান বসরী থেকে এমন একটি পাঠ বর্ণনা করেন যা জোড়াটির সাথে হুবহু মেলে: তারা যেহেতু নিজেদের আমল গোপন রেখেছিল, তাই আল্লাহ তাদের পুরস্কার গোপন রেখেছেন। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহ বলেন, তিনি তাঁর নেক বান্দাদের জন্য এমন কিছু প্রস্তুত রেখেছেন যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের অন্তরে যার কল্পনাও জাগেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "One of the Gates of Good",
          "bn": "কল্যাণের দরজাগুলোর একটি"
        },
        "p": [
          {
            "en": "Imam Ahmad records that Mu'adh ibn Jabal (RA) asked the Prophet ﷺ for a deed that would admit him to Paradise and keep him from the Fire. After naming the pillars, the Prophet ﷺ said: shall I not direct you to the gates of goodness? Fasting is a shield, charity extinguishes sin, and the prayer of a man in the depth of the night — and then he recited this verse and 32:17 after it. The report was recorded by at-Tirmidhi, an-Nasa'i and Ibn Majah as well; at-Tirmidhi graded it hasan sahih.",
            "bn": "ইমাম আহমাদ বর্ণনা করেন যে মুআয ইবনে জাবাল (রাঃ) নবী ﷺ-এর কাছে এমন একটি আমল জানতে চান যা তাঁকে জান্নাতে প্রবেশ করাবে ও জাহান্নাম থেকে দূরে রাখবে। স্তম্ভগুলোর নাম নেওয়ার পর নবী ﷺ বলেন: আমি কি তোমাকে কল্যাণের দরজাগুলো দেখিয়ে দেব না? রোযা ঢাল, সাদাকা গুনাহ নিভিয়ে দেয়, আর রাতের গভীরে মানুষের নামায — এরপর তিনি এই আয়াতটি এবং তার পরের 32:17 আয়াতটি পড়ে শোনান। বর্ণনাটি তিরমিযী, নাসাঈ ও ইবনে মাজাহও লিপিবদ্ধ করেছেন; তিরমিযী একে হাসান সহীহ বলেছেন।"
          }
        ]
      }
    ]
  },
  "32:17": {
    "sections": [
      {
        "h": {
          "en": "No Soul Knows",
          "bn": "কোনো প্রাণই জানে না"
        },
        "p": [
          {
            "en": "Fala ta'lamu nafsun is three words, and the grammar of them is doing work. Nafsun is indefinite standing inside a negation, which in Arabic sweeps the category clean: not one soul, of any kind, knows. The fa at the head ties the sentence to 32:16, the verse just before, which had described people whose sides leave their beds while they call on their Lord in fear and aspiration. What follows is presented as the consequence of that.",
            "bn": "'ফালা তা'লামু নাফসুন' — তিনটি শব্দ, আর এদের ব্যাকরণই এখানে কাজ করছে। 'নাফসুন' এসেছে অনির্দিষ্ট রূপে, নেতিবাচক বাক্যের ভেতরে; আরবিতে এই গঠন গোটা শ্রেণিটিকেই সাফ করে দেয়: কোনো এক প্রাণও, কোনো ধরনেরই নয়, জানে না। সামনের 'ফা' বাক্যটিকে বেঁধে দেয় ঠিক আগের আয়াত 32:16-এর সঙ্গে, যেখানে বর্ণিত হয়েছিল সেই মানুষদের কথা যাদের পাশ বিছানা থেকে সরে থাকে আর তারা ভয় ও আশা নিয়ে তাদের প্রতিপালককে ডাকে। এরপর যা আসে, তা পেশ করা হয় ওই কাজেরই পরিণাম হিসেবে।"
          },
          {
            "en": "The verb is in the present: no soul knows — now. That is not the same as saying the reward is unknowable in principle. Two verses on, 32:19 will state plainly that those who believed and did righteous deeds have the Gardens of Refuge. So the surah is willing to name the address. What this verse withholds is not the fact of the reward but the experience of it, and it withholds it from everyone alike.",
            "bn": "ক্রিয়াপদটি বর্তমান কালে: কোনো প্রাণ জানে না — এখন। এটি বলা আর 'পুরস্কারটি নীতিগতভাবেই অজ্ঞেয়' বলা এক কথা নয়। দুই আয়াত পরেই 32:19 স্পষ্ট করে বলবে, যারা ঈমান এনেছে ও সৎকর্ম করেছে তাদের জন্য রয়েছে জান্নাতুল মাওয়া। অর্থাৎ সূরাটি ঠিকানা বলতে রাজি আছে। এই আয়াত যা আটকে রাখে তা পুরস্কারের অস্তিত্ব নয়, বরং তার অভিজ্ঞতা — আর তা সবার কাছ থেকেই সমানভাবে আটকে রাখা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hidden, and by Whom",
          "bn": "লুকানো, আর কার দ্বারা"
        },
        "p": [
          {
            "en": "Ma ukhfiya lahum: what has been hidden for them. The verb is passive and no agent is named inside the clause, though the surrounding verses leave no doubt who hid it. Arabic uses the passive in this way when the fact of the action matters more than the actor, and here the fact is concealment. What is concealed is left indefinite too — min qurrati a'yun, some coolness of eyes, with no quantity and no list.",
            "bn": "'মা উখফিয়া লাহুম' — তাদের জন্য যা লুকিয়ে রাখা হয়েছে। ক্রিয়াপদটি কর্মবাচ্য, আর বাক্যাংশের ভেতরে কোনো কর্তার নাম নেই, যদিও আশপাশের আয়াতগুলো কে লুকিয়েছেন সে বিষয়ে কোনো সন্দেহ রাখে না। আরবি কর্মবাচ্য এভাবেই ব্যবহার করে, যখন কাজটি কে করল তার চেয়ে কাজটি ঘটেছে সেটাই বড় — আর এখানে সেই ঘটনাটি হলো গোপন রাখা। যা গোপন করা হয়েছে তাও রাখা হয়েছে অনির্দিষ্ট: 'মিন কুররাতি আ'ইউন' — কিছু চোখজুড়ানো জিনিস, কোনো পরিমাণ নেই, কোনো তালিকাও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Coolness of the Eyes",
          "bn": "চোখের শীতলতা"
        },
        "p": [
          {
            "en": "Qurra comes from qarra, to be cool and to settle. Arabic blesses a person by saying may Allah cool your eye, and the picture behind the idiom is an eye that stops moving because it has finally found what it was scanning for. It is not the language of dazzle. It is the language of a search ending, which is why the expression suits a reward that nobody has to keep looking past.",
            "bn": "'কুররা' এসেছে 'কাররা' থেকে, যার অর্থ শীতল হওয়া এবং থিতু হওয়া। আরবিতে দোয়া করা হয় — আল্লাহ তোমার চোখ শীতল করুন; আর এই বাগধারার পেছনের ছবিটি এমন এক চোখের, যা নড়াচড়া থামিয়ে দিয়েছে কারণ যা খুঁজছিল তা অবশেষে পেয়ে গেছে। এটি চমক লাগার ভাষা নয়। এটি অনুসন্ধান শেষ হয়ে যাওয়ার ভাষা — আর সে কারণেই অভিব্যক্তিটি এমন এক পুরস্কারের সঙ্গে মানায়, যাকে ছাড়িয়ে আর কিছু খুঁজতে হয় না।"
          },
          {
            "en": "Everywhere else the Quran uses the phrase, it is for something near and human. In 25:74 the servants of ar-Rahman ask their Lord for coolness of the eyes from their spouses and offspring. In 28:9 the wife of Fir'awn says of the infant Musa (AS) that he will be a coolness of the eye for me and for you. The verse takes the warmest word available for ordinary joy and says the hidden thing is of that family, and past reporting.",
            "bn": "কুরআন অন্য যেখানেই এই অভিব্যক্তিটি ব্যবহার করে, তা থাকে নিকট ও মানবিক কোনো কিছুর জন্য। 25:74 আয়াতে রহমানের বান্দারা তাদের প্রতিপালকের কাছে চায় তাদের স্ত্রী ও সন্তানদের থেকে চোখের শীতলতা। 28:9 আয়াতে ফিরআউনের স্ত্রী শিশু মূসা (আঃ) সম্পর্কে বলেন, সে আমার ও তোমার জন্য চোখের শীতলতা হবে। আয়াতটি সাধারণ আনন্দের জন্য প্রাপ্য সবচেয়ে উষ্ণ শব্দটিকে তুলে নেয় এবং বলে, লুকিয়ে রাখা জিনিসটি সেই পরিবারেরই — আর তা বর্ণনার সীমা পেরিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What No Eye Has Seen",
          "bn": "যা কোনো চোখ দেখেনি"
        },
        "p": [
          {
            "en": "Abu Hurayrah (RA), who narrates the hadith of what no eye has seen and no ear has heard, attached it to these very words himself: al-Bukhari records him saying, recite if you wish — and he recited this verse. Muslim records the report as well. The tag is a Companion's own, not a later commentator's, which is why the two are read together. And it fixes the hidden thing of this verse as the same thing the hadith puts past every sense a person has.",
            "bn": "'যা কোনো চোখ দেখেনি, কোনো কান শোনেনি' — এই হাদীসের বর্ণনাকারী আবু হুরাইরা (রাঃ) নিজেই তা এই শব্দগুলোর সঙ্গে জুড়ে দিয়েছেন: ইমাম বুখারী বর্ণনা করেন, তিনি বলেন — ইচ্ছা করলে পড়ে নাও, এবং তিনি এই আয়াতটি পাঠ করেন। ইমাম মুসলিমও বর্ণনাটি লিপিবদ্ধ করেছেন। সংযোজনটি একজন সাহাবীর নিজের, পরবর্তী কোনো মুফাসসিরের নয় — এ কারণেই দুটিকে একসঙ্গে পড়া হয়। আর এটিই এই আয়াতের লুকানো জিনিসটিকে ঠিক সেই জিনিস হিসেবে নির্ধারণ করে দেয়, যাকে হাদীসটি মানুষের প্রতিটি ইন্দ্রিয়ের নাগালের বাইরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Requital, Then Hospitality",
          "bn": "প্রতিদান, তারপর মেহমানদারি"
        },
        "p": [
          {
            "en": "The verse ends jaza'an bima kanu ya'malun, as requital for what they used to do. Jaza' is an exact settling, a return matched to what was given. And kanu with the imperfect after it is Arabic's way of saying used to — a habit carried over years, not one night of it. So the thing beyond description is tied, in the same breath, to something quite unspectacular: what a person did repeatedly when it was ordinary to do it.",
            "bn": "আয়াতটি শেষ হয় 'জাযাআন বিমা কানূ ইয়া'মালূন' — তারা যা করত তার প্রতিদান হিসেবে। 'জাযা' মানে নিখুঁত হিসাব মিটিয়ে দেওয়া, দেওয়া জিনিসের সঙ্গে মিলিয়ে ফেরত দেওয়া। আর 'কানূ'-এর পরে অসমাপিকা ক্রিয়া আরবিতে বোঝায় 'করত' — বছরের পর বছর ধরে চলা অভ্যাস, এক রাতের ঘটনা নয়। ফলে বর্ণনার অতীত জিনিসটিকে একই নিঃশ্বাসে বেঁধে দেওয়া হয় একেবারে সাধারণ কিছুর সঙ্গে: মানুষটি বারবার যা করত, যখন তা করা কেবলই দৈনন্দিন ব্যাপার ছিল।"
          },
          {
            "en": "Two verses later the same tail returns with a different noun in front of it. 32:19 says the Gardens of Refuge are theirs nuzulan bima kanu ya'malun, and nuzul in Arabic is what a host sets out for a guest on arrival. Put the two together and a shape appears: the welcome laid ready at the door is named and describable, and the thing this verse says no soul knows is what lies past it.",
            "bn": "দুই আয়াত পরে একই শেষাংশ ফিরে আসে, তবে সামনে ভিন্ন একটি বিশেষ্য নিয়ে। 32:19 বলে, জান্নাতুল মাওয়া তাদের জন্য 'নুযুলান বিমা কানূ ইয়া'মালূন' — আর আরবিতে 'নুযুল' মানে অতিথি এসে পৌঁছালে গৃহকর্তা যা সামনে সাজিয়ে দেন। দুটিকে পাশাপাশি রাখলে একটি আকৃতি ফুটে ওঠে: দরজায় সাজিয়ে রাখা অভ্যর্থনার নাম আছে, বর্ণনাও আছে; আর এই আয়াত যা সম্পর্কে বলে কোনো প্রাণ জানে না, তা রয়েছে সেই দরজার ওপারে।"
          }
        ]
      },
      {
        "h": {
          "en": "They Are Not Equal",
          "bn": "তারা সমান নয়"
        },
        "p": [
          {
            "en": "The very next verse asks the question the concealment was building to. 32:18: is one who was a believer like one who was defiantly disobedient? They are not equal. Notice the order the passage chose. It hides the reward first and asserts the inequality second, so the comparison is settled before any of the evidence for it has been shown. Nobody is being asked to weigh two displayed outcomes against each other.",
            "bn": "ঠিক পরের আয়াতটিই সেই প্রশ্ন করে, যেদিকে এই গোপন রাখা এগোচ্ছিল। 32:18: যে মুমিন ছিল সে কি তার মতো, যে পাপাচারী ছিল? তারা সমান নয়। অংশটি যে ক্রমটি বেছে নিয়েছে তা লক্ষ করুন। প্রথমে পুরস্কার লুকিয়ে রাখা হয়, তারপর অসমতার কথা বলা হয় — ফলে তুলনার মীমাংসা হয়ে যায় তার পক্ষে কোনো প্রমাণ দেখানোর আগেই। কাউকে বলা হচ্ছে না যে সে দুটি প্রদর্শিত পরিণতিকে পাল্লায় তুলে মেপে দেখুক।"
          },
          {
            "en": "That is also how the verse is lived. Any picture a person builds of what is waiting will be too small, because it is assembled from things eyes have already seen. So the discipline the verse trains is to stop negotiating for a described outcome and to attend instead to the tail of the sentence — what you used to do — which is the only part of the arrangement that has been placed in your hands.",
            "bn": "আয়াতটি জীবনে কীভাবে কাজ করে তাও এভাবেই। যা অপেক্ষা করছে তা নিয়ে মানুষ যত ছবিই আঁকুক, তা ছোটই হবে — কারণ তা জোড়া হয় এমন সব জিনিস দিয়ে যা চোখ আগেই দেখে ফেলেছে। তাই আয়াতটি যে সংযমটি শেখায় তা হলো: বর্ণনা-করা কোনো ফলাফলের জন্য দরকষাকষি বন্ধ করা, আর বদলে মন দেওয়া বাক্যের শেষাংশে — 'তোমরা যা করতে' — কারণ পুরো ব্যবস্থাটির একমাত্র ওই অংশটিই আপনার হাতে দেওয়া হয়েছে।"
          }
        ]
      }
    ]
  },
  "32:23": {
    "sections": [
      {
        "h": {
          "en": "The Comfort After the Warning",
          "bn": "ধমকের পরেই সান্ত্বনা"
        },
        "p": [
          {
            "en": "The verse just before is severe: who is more unjust than whoever is reminded of his Lord's signs, then turns away? From the criminals Allah will take retribution. Then, without pause, comes a different register. Wa-laqad ātaynā Mūsā al-Kitāb — and We certainly gave Mūsā the Book. The oath-particle la and the past tense qad together close the matter: this already happened, it is beyond dispute, and the Prophet ﷺ is being steadied against the rejection the earlier verse described.",
            "bn": "এর আগের আয়াতটা কঠোর: যাকে তার রবের নিদর্শন দিয়ে উপদেশ দেওয়া হয় অথচ সে মুখ ফিরিয়ে নেয়, তার চেয়ে বড় যালিম আর কে? অপরাধীদের কাছ থেকে আল্লাহ প্রতিশোধ নেবেন। এরপরই কোনো বিরতি ছাড়া আসে অন্য এক সুর। ওয়ালাক্বাদ আতাইনা মূসাল কিতাব — আমি তো মূসাকে কিতাব দিয়েছিলাম। কসমের লা আর অতীতকালের ক্বাদ মিলে কথাটা চূড়ান্ত করে দেয়: এটা ঘটে গেছে, এতে তর্কের অবকাশ নেই। আগের আয়াত যে প্রত্যাখ্যানের ছবি আঁকল, তার মুখে নবী ﷺ-কে এখানে স্থির করা হচ্ছে।"
          },
          {
            "en": "At-Tabari reads the link plainly: We gave Mūsā the Torah, O Muḥammad, just as We gave you the Furqān. Al-Muyassar keeps the very same line — as We gave you the Qur'an, O Messenger, so We gave him the Scripture. The sentence is built as a comparison before it says anything about doubt. The Prophet ﷺ is not the first to carry a Book to a resisting people; one came before him, to a messenger before him, and that is the ground on which the next clause rests.",
            "bn": "তাবারী সংযোগটা সোজা করে পড়েন: হে মুহাম্মদ, আমি মূসাকে তাওরাত দিয়েছি, যেমন তোমাকে দিয়েছি ফুরক্বান। মুয়াসসারও ঠিক একই লাইন রাখে: হে রাসূল, যেমন তোমাকে কুরআন দিয়েছি, তেমনি তাঁকে দিয়েছি কিতাব। সন্দেহের কথা বলার আগেই বাক্যটা একটা তুলনার উপর দাঁড় করানো। নবী ﷺ প্রতিরোধকারী এক জাতির কাছে কিতাব নিয়ে আসা প্রথম মানুষ নন। তাঁর আগেও একজন এসেছিলেন, তাঁর আগেও এক রাসূল। পরের বাক্যটা সেই ভিত্তির উপরই দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Strange New Thing",
          "bn": "নতুন বা অচেনা কিছু নয়"
        },
        "p": [
          {
            "en": "As-Saʿdī makes the consolation explicit. When Allah had mentioned the signs by which He reminds His servants — the Qur'an sent down on Muḥammad ﷺ — He then noted that this Book is no novelty among the scriptures, and the one who came with it is no oddity among the prophets. Allah had already given Mūsā the Book, the Torah that confirms the Qur'an, so that the truth of the two matches and their evidence is established. The point is directed at a rejected messenger: you are walking a road already walked.",
            "bn": "সাদী সান্ত্বনাটা স্পষ্ট করে বলেন। আল্লাহ যখন সেই নিদর্শনগুলোর কথা বললেন যা দিয়ে তিনি বান্দাদের উপদেশ দেন, অর্থাৎ মুহাম্মদ ﷺ-এর উপর নাজিল হওয়া কুরআন, তখন তিনি জানালেন যে এই কিতাব আসমানি কিতাবগুলোর মধ্যে নতুন কিছু নয়, আর যিনি তা নিয়ে এসেছেন তিনিও নবীদের মধ্যে অচেনা কেউ নন। আল্লাহ আগেই মূসাকে কিতাব দিয়েছিলেন, সেই তাওরাত যা কুরআনকে সত্যায়ন করে। তাই দুই কিতাবের সত্য মিলে যায়, দুইয়ের প্রমাণ প্রতিষ্ঠিত হয়। একজন প্রত্যাখ্যাত রাসূলের উদ্দেশে কথাটা: তিনি এমন পথেই হাঁটছেন যে পথ আগেও মাড়ানো হয়েছে।"
          },
          {
            "en": "As-Saʿdī adds a note of proportion. Because the proofs of the truth have come one after another — a Book then a Book, a prophet then a prophet — no room is left for doubt or wavering. He then draws a line the earlier verses had set up: the Torah was made guidance for the Children of Israel in their time, while this Qur'an Allah made a guidance for all people, in their religion and their worldly life, until the Day of Resurrection. The old Book steadies faith; the final Book widens its reach.",
            "bn": "সাদী একটা মাত্রার কথা যোগ করেন। সত্যের প্রমাণ একের পর এক এসেছে, একটা কিতাবের পর আরেকটা কিতাব, একজন নবীর পর আরেকজন নবী, তাই সন্দেহ বা দ্বিধার কোনো জায়গা আর থাকে না। এরপর তিনি আগের আয়াতগুলোর তৈরি করা একটা পার্থক্য টানেন: তাওরাত বানী ইসরাঈলের জন্য তাদের সময়ে পথপ্রদর্শক করা হয়েছিল, আর এই কুরআনকে আল্লাহ করেছেন সব মানুষের জন্য পথপ্রদর্শক, তাদের দ্বীন ও দুনিয়ার ব্যাপারে, ক্বিয়ামত পর্যন্ত। পুরনো কিতাব ঈমানকে স্থির করে, শেষ কিতাব তার পরিধি বাড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Meeting Is Meant",
          "bn": "কার সঙ্গে সাক্ষাৎ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an states the question the clause forces: fa-lā takun fī miryatin min liqāʾih — so be not in doubt of the meeting. Meeting of whom, with whom? The commentators differ, and the differences are worth keeping apart. On the first and most reported reading, the pronoun in liqāʾih returns to Mūsā, and the meaning is that the Prophet ﷺ will meet Mūsā. Al-Qurtubī attributes this to Ibn ʿAbbās: do not be in doubt, O Muḥammad, of meeting Mūsā, for he met him on the Night of the Ascent.",
            "bn": "মাআরিফুল কুরআন বাক্যটা যে প্রশ্ন সামনে আনে তা বলে দেয়: ফালা তাকুন ফী মিরইয়াতিম মিন লিক্বাইহি — সেই সাক্ষাৎ নিয়ে সন্দেহে পড়ো না। কার সাক্ষাৎ, কার সঙ্গে? তাফসীরকারেরা এখানে ভিন্নমত পোষণ করেন, আর এই পার্থক্যগুলো আলাদা করে রাখা দরকার। প্রথম এবং সবচেয়ে বেশি বর্ণিত পাঠে লিক্বাইহি-র সর্বনাম ফিরে যায় মূসার দিকে, আর অর্থ দাঁড়ায় নবী ﷺ মূসার সঙ্গে সাক্ষাৎ করবেন। কুরতুবী এটি ইবন আব্বাসের দিকে সম্বন্ধ করেন: হে মুহাম্মদ, মূসার সঙ্গে সাক্ষাৎ নিয়ে সন্দেহে থেকো না, কেননা মিরাজের রাতে তিনি তাঁর সাক্ষাৎ পেয়েছেন।"
          },
          {
            "en": "Qatādah shades it slightly, as at-Tabarī records him: do not be in doubt that you met him, or will meet him, on the night you were taken by night. At-Tabarī, Ibn Kathīr, al-Baghawī and al-Muyassar all carry this reading, tying the meeting to the Isrāʾ. The difference between Ibn ʿAbbās and Qatādah is small — whether the stress falls on the future certainty of the meeting or on the fact of it having happened — and al-Qurtubī notes that the meaning comes to one thing.",
            "bn": "কাতাদা এতে সামান্য রঙ বদল দেন, তাবারী তাঁর থেকে যেমন বর্ণনা করেন: সন্দেহে থেকো না যে তুমি তাঁর সাক্ষাৎ পেয়েছ, কিংবা পাবে, সেই রাতে যে রাতে তোমাকে রাতারাতি নিয়ে যাওয়া হয়েছিল। তাবারী, ইবন কাসীর, বাগাভী আর মুয়াসসার সবাই এই পাঠ বহন করেন, সাক্ষাৎটাকে ইসরার সঙ্গে বেঁধে দেন। ইবন আব্বাস আর কাতাদার মধ্যে পার্থক্য সামান্য, জোরটা সাক্ষাতের ভবিষ্যৎ নিশ্চয়তার উপর পড়বে নাকি তা ঘটে যাওয়ার সত্যতার উপর, আর কুরতুবী বলেন অর্থ শেষ পর্যন্ত একটাই।"
          },
          {
            "en": "A second family of readings turns the pronoun away from Mūsā and toward a Book. Al-Qurtubī reports from Mujāhid and az-Zajjāj: do not be in doubt of Mūsā's meeting the Book, that is, of his receiving it with acceptance; al-Baghawī gives the same from as-Suddī — of Mūsā's receiving the Scripture of Allah with contentment. Ma'arif al-Qur'an records a related reading in which the pronoun returns to the Book itself, meaning the Qur'an: as Mūsā was given his Book, the Prophet ﷺ too should have no doubt about receiving his, a sense it supports with 27:6.",
            "bn": "দ্বিতীয় একদল পাঠ সর্বনামটাকে মূসার দিক থেকে সরিয়ে নিয়ে যায় কিতাবের দিকে। কুরতুবী মুজাহিদ ও যাজ্জাজ থেকে বর্ণনা করেন: মূসার কিতাবের সাক্ষাৎ, অর্থাৎ তা গ্রহণ ও কবুল করা নিয়ে সন্দেহে থেকো না। বাগাভী একই কথা আনেন সুদ্দী থেকে, মূসার আল্লাহর কিতাব সন্তুষ্টি নিয়ে গ্রহণ করা প্রসঙ্গে। মাআরিফুল কুরআন এর কাছাকাছি একটি পাঠ উল্লেখ করে, যেখানে সর্বনাম ফিরে যায় কিতাবের দিকেই, অর্থাৎ কুরআনের দিকে: মূসাকে যেমন তাঁর কিতাব দেওয়া হয়েছিল, নবী ﷺ-এরও নিজের কিতাব পাওয়া নিয়ে কোনো সন্দেহ থাকা উচিত নয়; এই অর্থকে সে ২৭:৬ দিয়ে সমর্থন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lord, and the Day",
          "bn": "রব, আর সেই দিন"
        },
        "p": [
          {
            "en": "A third direction reads the meeting as an encounter not between two prophets but with the Lord. Ibn Kathīr records, through at-Tabarānī from Ibn ʿAbbās, a reading of min liqāʾih as from Mūsā's meeting his Lord, mighty and majestic. Al-Qurtubī preserves yet another: do not be in doubt of meeting Mūsā on the Day of Resurrection, and you will indeed meet him there. Here the pronoun and the horizon shift together — from a night already passed to a Day still to come, or from a man to his Maker.",
            "bn": "তৃতীয় একটি ধারা সাক্ষাৎকে পড়ে দুই নবীর মধ্যকার নয়, বরং রবের সঙ্গে এক সাক্ষাৎ হিসেবে। ইবন কাসীর তাবারানীর সূত্রে ইবন আব্বাস থেকে একটি পাঠ আনেন, যেখানে মিন লিক্বাইহি মানে মূসার তাঁর রবের সঙ্গে সাক্ষাৎ, যিনি পরাক্রমশালী ও মহিমান্বিত। কুরতুবী আরেকটি সংরক্ষণ করেন: ক্বিয়ামতের দিন মূসার সঙ্গে সাক্ষাৎ নিয়ে সন্দেহে থেকো না, আর সেখানে তুমি অবশ্যই তাঁর সাক্ষাৎ পাবে। এখানে সর্বনাম আর দিগন্ত দুটোই সরে যায়, পেরিয়ে যাওয়া এক রাত থেকে এখনো আসতে থাকা এক দিনের দিকে, কিংবা এক মানুষ থেকে তাঁর স্রষ্টার দিকে।"
          },
          {
            "en": "Al-Qurtubī records one more, grammatically bolder. Some read a transposition in the passage, so that the clause belongs with the earlier words of the sūrah about the angel of death — say, the angel of death who is charged with you will take you — and the meeting is then the meeting with Allah after death, the clause sitting as a parenthesis between the giving of the Book and its being made a guide. On this view the doubt forbidden is doubt about the final return, not about any single encounter.",
            "bn": "কুরতুবী আরও একটি পাঠ আনেন, ব্যাকরণে যা আরও সাহসী। কেউ কেউ আয়াতের মধ্যে আগ-পাছ পড়েন, যাতে বাক্যটি সূরার আগের মৃত্যুর ফেরেশতা সংক্রান্ত কথার সঙ্গে যুক্ত হয়, বলা যায় তোমাদের উপর নিযুক্ত মৃত্যুর ফেরেশতা তোমাদের প্রাণ হরণ করবেন, আর তখন সাক্ষাৎ মানে মৃত্যুর পর আল্লাহর সঙ্গে সাক্ষাৎ। বাক্যটি তখন কিতাব দেওয়া আর তাকে পথপ্রদর্শক বানানোর মাঝখানে একটা বন্ধনীর মতো বসে। এই পাঠে নিষিদ্ধ সন্দেহ হলো শেষ প্রত্যাবর্তন নিয়ে সন্দেহ, কোনো একটিমাত্র সাক্ষাৎ নিয়ে নয়।"
          },
          {
            "en": "Four horizons, then, for one pronoun: the Prophet's meeting with Mūsā on the Isrāʾ, Mūsā's meeting with the Book, Mūsā's meeting with his Lord, and the believer's meeting with Allah at the end. The commentators record them side by side and do not force a single verdict, and this reflection follows them in that. What every reading shares is a command against doubt — whatever the meeting is, the verse was sent to still a wavering heart, not to feed its questions.",
            "bn": "তাহলে একটি সর্বনামের জন্য চারটি দিগন্ত: ইসরার রাতে মূসার সঙ্গে নবীর সাক্ষাৎ, মূসার কিতাবের সঙ্গে সাক্ষাৎ, মূসার তাঁর রবের সঙ্গে সাক্ষাৎ, আর শেষে বান্দার আল্লাহর সঙ্গে সাক্ষাৎ। তাফসীরকারেরা এগুলো পাশাপাশি রাখেন, কোনো একটিমাত্র রায় চাপিয়ে দেন না, আর এই আলোচনা সে ব্যাপারে তাঁদেরই অনুসরণ করে। প্রতিটি পাঠে যা একই থাকে তা হলো সন্দেহের বিরুদ্ধে একটা নির্দেশ। সাক্ষাৎ যা-ই হোক, আয়াতটি নামানো হয়েছে টলমল করা হৃদয়কে স্থির করতে, তার প্রশ্নে খোরাক জোগাতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Harder, Rarer Reading",
          "bn": "কঠিন ও বিরল পাঠ"
        },
        "p": [
          {
            "en": "Al-Hasan al-Baṣrī read the clause in a way that turns it into open consolation. On his reading the pronoun hangs on an unspoken antecedent, and the meaning is: just as Mūsā was given the Book and was then harmed and belied, do not be in doubt that what met him will meet you. The pain inflicted on Mūsā is the thing not to be doubted. Ma'arif al-Qur'an carries the same from al-Hasan: let the Prophet ﷺ expect the treatment his predecessors met, count it the way of the prophets, and endure.",
            "bn": "হাসান বসরি বাক্যটা এমনভাবে পড়েন যা একে খোলাখুলি সান্ত্বনায় বদলে দেয়। তাঁর পাঠে সর্বনামটা একটা উহ্য পূর্বপদের উপর ঝুলে থাকে, আর অর্থ দাঁড়ায়: মূসাকে যেমন কিতাব দেওয়া হয়েছিল, এরপর তাঁকে কষ্ট দেওয়া হয়েছিল ও মিথ্যুক বলা হয়েছিল, তেমনি সন্দেহে থেকো না যে তাঁর যা হয়েছিল তা তোমারও হবে। মূসার উপর চাপানো সেই যন্ত্রণাই হলো সেই জিনিস, যা নিয়ে সন্দেহ করা যাবে না। মাআরিফুল কুরআন হাসান থেকে একই কথা আনে: নবী ﷺ যেন তাঁর পূর্বসূরিদের পাওয়া আচরণেরই প্রত্যাশা রাখেন, একে নবীদের রীতি হিসেবে গণ্য করেন, আর ধৈর্য ধরেন।"
          },
          {
            "en": "Al-Qurtubī does not let this reading pass unmarked. He reports an-Naḥḥās judging it gharīb — odd, out of the ordinary — and noting that it comes by way of ʿAmr ibn ʿUbayd. The caution matters: a meaning can be spiritually rich and still stand on a thin chain, and a careful reader keeps the two apart. Its comfort, though, lies close to the sūrah's drift. The verses around it answer men who turn from the signs; a messenger who meets the same turning is told that he walks a long and honored road.",
            "bn": "কুরতুবী এই পাঠটাকে চিহ্ন ছাড়া ছেড়ে দেন না। তিনি নাহহাসের কথা আনেন, যিনি একে গারীব বলেছেন, অর্থাৎ অদ্ভুত, গতানুগতিকের বাইরে, আর উল্লেখ করেছেন যে এটি আমর ইবন উবাইদের সূত্রে এসেছে। সতর্কতাটা জরুরি: কোনো অর্থ আধ্যাত্মিকভাবে সমৃদ্ধ হয়েও দুর্বল সূত্রে দাঁড়াতে পারে, আর মনোযোগী পাঠক দুটিকে আলাদা রাখেন। তবে এর সান্ত্বনা সূরার গতিপথের খুব কাছেই। আশপাশের আয়াতগুলো তাদের জবাব দেয় যারা নিদর্শন থেকে মুখ ফেরায়। যে রাসূল একই মুখ-ফেরানোর মুখে পড়েন, তাঁকে বলা হচ্ছে তিনি এক দীর্ঘ ও সম্মানিত পথ ধরে হাঁটছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen on the Night Journey",
          "bn": "মিরাজের রাতে দেখা"
        },
        "p": [
          {
            "en": "The Isrāʾ reading rests on a sound narration. Al-Bukhārī records in his Ṣaḥīḥ, from Ibn ʿAbbās, that the Prophet ﷺ said: On the night of my ascent I saw Mūsā, a tall brown-skinned man with curly hair, as if from the men of Shanūʾah; and I saw ʿĪsā, of medium build, between red and white, with lank hair; and I saw Mālik the keeper of the Fire, and the Dajjāl — among the signs Allah showed him. The report then recites our verse: so be not in doubt of meeting him.",
            "bn": "ইসরার পাঠটা একটি সহীহ বর্ণনার উপর দাঁড়ানো। বুখারী তাঁর সহীহ-তে ইবন আব্বাস থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমার মিরাজের রাতে আমি মূসাকে দেখলাম, দীর্ঘদেহী বাদামি রঙের কোঁকড়া চুলের একজন মানুষ, যেন শানূআ গোত্রের লোকদের মতো; আর ঈসাকে দেখলাম মাঝারি গড়নের, লাল আর সাদার মাঝামাঝি রঙের, সোজা চুলের; আর দেখলাম জাহান্নামের রক্ষক মালিককে, আর দাজ্জালকে — এসব নিদর্শনের মধ্যে যা আল্লাহ তাঁকে দেখিয়েছিলেন। এরপর বর্ণনায় আমাদের এই আয়াত পড়া হয়: কাজেই তাঁর সাক্ষাৎ নিয়ে সন্দেহে থেকো না।"
          },
          {
            "en": "Because the Companion who transmits the verse's meaning is the same who transmits the vision, the two lock together: Ibn ʿAbbās reads min liqāʾih as the meeting with Mūsā, and al-Bukhārī's ḥadīth shows that meeting taking place. Al-Baghawī also reports, from Anas, that on the Night Journey the Prophet ﷺ saw Mūsā praying in his grave, and the known account of the Ascent has them meet in the heavens over the matter of the prayers. The sound narration of al-Bukhārī is the backing the first reading has; the other readings rest on grammar and sense rather than on a report like it.",
            "bn": "যে সাহাবি আয়াতের অর্থ বর্ণনা করেন, তিনিই এই দৃশ্য বর্ণনা করেন বলে দুটি একসঙ্গে বাঁধা পড়ে: ইবন আব্বাস মিন লিক্বাইহি পড়েন মূসার সঙ্গে সাক্ষাৎ হিসেবে, আর বুখারীর হাদীস সেই সাক্ষাৎ ঘটতে দেখায়। বাগাভী আনাস থেকে আরও একটি বর্ণনা উল্লেখ করেন যে, মিরাজের রাতে নবী ﷺ মূসাকে তাঁর কবরে নামাজ পড়তে দেখেছেন, আর মিরাজের পরিচিত বিবরণে নামাজের বিষয়ে তাঁদের সাক্ষাৎ হয় আসমানে। প্রথম পাঠের পেছনে যে সহীহ উপাদান, তা বুখারীর এই বর্ণনা। বাকি পাঠগুলো এমন কোনো বর্ণনার উপর নয়, বরং ব্যাকরণ ও অর্থের উপর দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Guide for His People",
          "bn": "তাঁর জাতির পথপ্রদর্শক"
        },
        "p": [
          {
            "en": "The verse ends: wa-jaʿalnāhu hudan li-banī Isrāʾīl — and We made it a guidance for the Children of Israel. The pronoun hu carries two readings. Al-Qurtubī gives both: on Qatādah's, We made Mūsā a guidance, a right-guide his people reach the truth by following; on al-Ḥasan's, We made the Book a guidance. Ibn Kathīr takes it as the Book We gave him, and as-Saʿdī the same — the Scripture given to Mūsā, by which they are guided in the roots of their religion, its branches and its laws suited to that age.",
            "bn": "আয়াত শেষ হয়: ওয়া জাআলনাহু হুদাল লিবানী ইসরাঈল — আর আমি তা বানী ইসরাঈলের জন্য পথপ্রদর্শক করেছিলাম। হু সর্বনামটি দুটি পাঠ বহন করে। কুরতুবী দুটোই দেন: কাতাদার পাঠে আমি মূসাকে পথপ্রদর্শক করেছি, এমন এক দিশারি যাঁকে অনুসরণ করে তাঁর জাতি সত্যে পৌঁছায়; হাসানের পাঠে আমি কিতাবকে পথপ্রদর্শক করেছি। ইবন কাসীর একে নেন আমি তাঁকে যে কিতাব দিয়েছি সেই অর্থে, আর সাদীও তাই। মূসাকে দেওয়া কিতাব, যা দিয়ে তারা তাদের দ্বীনের মূল, শাখা আর সেই যুগের উপযোগী বিধানে পথ পায়।"
          },
          {
            "en": "Ibn Kathīr links the clause to its twin in Sūrat al-Isrāʾ: And We gave Mūsā the Scripture and made it a guidance for the Children of Israel — take none but Me as trustee (17:2). The Torah, in its time and for its people, was real guidance from Allah, and the verse honors it as such. It is said with care here: this is not a verse about a people's failing but about a Book's mercy. It licenses nothing against any living community, and it is no ground to disparage the Jews or the Scripture given through Mūsā.",
            "bn": "ইবন কাসীর বাক্যটিকে সূরা ইসরার যমজ আয়াতের সঙ্গে মেলান: আর আমি মূসাকে কিতাব দিয়েছি এবং তা বানী ইসরাঈলের জন্য পথপ্রদর্শক করেছি, আমাকে ছাড়া আর কাউকে কর্মবিধায়ক গ্রহণ কোরো না (১৭:২)। তাওরাত, তার সময়ে আর তার জাতির জন্য, আল্লাহর পক্ষ থেকে প্রকৃত পথপ্রদর্শন ছিল, আর আয়াত সেটাকে সেভাবেই সম্মান দেয়। এখানে কথাটা সাবধানে বলা দরকার: এটি কোনো জাতির ব্যর্থতার আয়াত নয়, এক কিতাবের রহমতের আয়াত। এটি কোনো জীবিত সম্প্রদায়ের বিরুদ্ধে কিছুর অনুমতি দেয় না, আর ইহুদি জাতি কিংবা মূসার মাধ্যমে দেওয়া কিতাবকে হেয় করার কোনো ভিত্তিও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Doubt It Removes",
          "bn": "যে সন্দেহ দূর হয়"
        },
        "p": [
          {
            "en": "Set side by side, the readings point one way. A Book was given, a prophet was met or will be met, a Lord will be encountered, a people were guided — and across all of it the single imperative is: do not doubt. The verse does not argue the doubter out of his questions. It reminds him that the ground under his feet is old. What Allah has settled in the past He does not reopen for the mood of a present hour, and a believer's certainty is meant to rest on that settled past.",
            "bn": "পাশাপাশি রাখলে পাঠগুলো এক দিকেই ইশারা করে। একটা কিতাব দেওয়া হলো, একজন নবীর সাক্ষাৎ হলো বা হবে, এক রবের সঙ্গে সাক্ষাৎ হবে, এক জাতিকে পথ দেখানো হলো, আর এ সবকিছুর ভেতর একটিমাত্র আদেশ: সন্দেহ কোরো না। আয়াত সন্দেহকারীকে তার প্রশ্ন থেকে তর্ক করে বের করে আনে না। বরং মনে করিয়ে দেয় যে তার পায়ের নিচের মাটি পুরনো। আল্লাহ অতীতে যা মীমাংসা করে রেখেছেন, বর্তমান মুহূর্তের মেজাজের জন্য তিনি তা আবার খোলেন না, আর বান্দার নিশ্চয়তা সেই মীমাংসিত অতীতের উপরই দাঁড়ানোর কথা।"
          },
          {
            "en": "That is the reflection the verse presses. When conviction thins — not because the evidence changed but because the day was heavy — the cure is not to re-litigate what was long ago decided, but to stand where the prophets stood. Mūsā was given a Book and was belied; so was the one who came after him; so may anyone be who carries the truth into a resisting room. The pattern is honored and the outcome is sure. Do not be in doubt is, in the end, a mercy: a hand laid on a wavering heart.",
            "bn": "এটাই সেই ভাবনা যা আয়াত সামনে আনে। যখন বিশ্বাস পাতলা হয়ে আসে, প্রমাণ বদলায়নি বলে নয়, দিনটা ভারী ছিল বলে, তখন সমাধান অনেক আগে মীমাংসা হওয়া জিনিস নিয়ে নতুন করে মামলা তোলা নয়, বরং নবীরা যেখানে দাঁড়িয়েছিলেন সেখানে দাঁড়ানো। মূসাকে কিতাব দেওয়া হলো, তাঁকে মিথ্যুক বলা হলো; তাঁর পরে যিনি এলেন, তাঁর বেলায়ও তাই; সত্য নিয়ে প্রতিরোধী ঘরে ঢোকেন যিনি, তাঁর বেলায়ও তা-ই হতে পারে। ছকটা সম্মানিত, পরিণতি নিশ্চিত। সন্দেহে থেকো না — শেষ বিচারে এটি এক রহমত, টলমল করা হৃদয়ের উপর রাখা একটি হাত।"
          }
        ]
      }
    ]
  },
  "32:27": {
    "sections": [
      {
        "h": {
          "en": "Water Steered, Not Fallen",
          "bn": "পানি এল, বৃষ্টি নয়"
        },
        "p": [
          {
            "en": "The verse opens on a motion, not a downpour. Nasuqu al-ma: We drive the water. The verb sawq is what a herdsman does to a flock, a steady urging of something from behind until it reaches where it must go. Ibn Kathir reads the water as reaching the land either from the sky or from the sayh, the flow that rivers carry and that comes down from the mountains to the lands that need it, each at its appointed time. The water does not merely fall; it is sent, aimed, delivered.",
            "bn": "আয়াতের শুরুতে বৃষ্টির ঝমঝম নয়, আছে এক চলার ছবি। নাসূকুল মা: আমি পানিকে হাঁকিয়ে নিয়ে যাই। সাওক শব্দটা রাখালের কাজ বোঝায়, পেছন থেকে পাল তাড়িয়ে নিয়ে যাওয়া যতক্ষণ না তা গন্তব্যে পৌঁছে। ইবন কাসীর বলেন, পানি জমিতে আসে হয় আকাশ থেকে, নয়তো সায়হ থেকে, অর্থাৎ নদী যা বয়ে আনে আর পাহাড় থেকে নেমে আসে সেই জমির দিকে যার তা দরকার, প্রত্যেকটি নিজ নিজ সময়ে। পানি নিছক ঝরে পড়ে না, তাকে পাঠানো হয়, লক্ষ্য করে চালানো হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an notices how unusual this phrasing is. Normally the Qur'an describes dry ground being revived by rain that falls upon it directly. Here there is no mention of rain landing on the field at all. Instead the water is made to travel overland to the barren place. Rain is dropped where the soil can hold it, and from there the water is channelled, sometimes for a great distance, to ground that never felt a cloud. The provision is routed deliberately to where it is lacking.",
            "bn": "মাআরিফুল কুরআন খেয়াল করিয়ে দেয়, কথাটা কতটা অস্বাভাবিক। সাধারণত কুরআন শুকনো জমি জীবন্ত হওয়ার কথা বলে সরাসরি তার উপর পড়া বৃষ্টি দিয়ে। এখানে মাঠের উপর বৃষ্টি পড়ার কোনো উল্লেখই নেই। বরং পানিকে স্থলপথে ঊষর জায়গা পর্যন্ত চালিয়ে নেওয়া হয়। বৃষ্টি ফেলা হয় সেখানে যে মাটি তা ধরে রাখতে পারে, আর সেখান থেকে পানি বয়ে যায়, কখনো বহু দূর পর্যন্ত, এমন জমিতে যে কখনো মেঘের ছোঁয়া পায়নি। রিজিককে ইচ্ছে করে পৌঁছে দেওয়া হয় ঠিক সেখানে, যেখানে তার অভাব।"
          },
          {
            "en": "That steering carries a quiet lesson about how Allah gives. The rain that becomes your harvest may have fallen on a land you will never visit, drawn across hills and down rivers to arrive at your door. What looks like a local blessing is the end of a long errand you did not arrange and cannot see. Before a single blade of green appears, a whole hidden economy of cloud, slope and current has already been set to work on your behalf.",
            "bn": "এই চালিয়ে নেওয়ার ভেতরে আল্লাহর দেওয়ার একটা নীরব শিক্ষা আছে। যে বৃষ্টি আপনার ফসল হয়ে ওঠে, তা হয়তো পড়েছে এমন কোনো জমিতে যেখানে আপনি কোনোদিন যাবেন না। পাহাড় পেরিয়ে নদী বেয়ে তা এসে পৌঁছেছে আপনার দুয়ারে। যাকে মনে হয় ঘরের কাছের নিয়ামত, তা আসলে এক দীর্ঘ সফরের শেষ ধাপ, যা আপনি সাজাননি আর চোখেও দেখেন না। একটিমাত্র সবুজ পাতা মাথা তোলার আগেই মেঘ, ঢাল আর স্রোতের গোটা এক লুকানো কারবার আপনার জন্য কাজে লেগে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ground That Devours",
          "bn": "যে মাটি সব খায়"
        },
        "p": [
          {
            "en": "Why call barren ground al-juruz? At-Tabari traces the word to a vivid root. A naqa jaruz is a she-camel that eats everything in reach and leaves nothing behind; a sword called juraz cuts clean through whatever it meets. So al-ard al-juruz is land that, like that devouring camel, swallows up whatever grows on it until its surface is left bare. At-Tabari also notes that the Arabs voiced the word in several forms, with the people of Banu Tamim opening it to jarz.",
            "bn": "ঊষর জমিকে 'জুরুয' বলা হলো কেন? তাবারী শব্দটির শিকড় টেনে আনেন এক জীবন্ত ছবিতে। 'নাকা জারূয' মানে এমন উটনী, যা নাগালের সবকিছু খেয়ে ফেলে, কিছুই বাকি রাখে না। 'জুরায' নামের তলোয়ার যা সামনে পড়ে তা-ই কেটে ফেলে। তাই 'আল-আরদুল জুরুয' সেই জমি, যা ওই সর্বভুক উটনীর মতো তার বুকে যা গজায় সব গিলে নেয়, শেষে পড়ে থাকে খালি মাটি। তাবারী আরও বলেন, আরবরা শব্দটি কয়েকভাবে উচ্চারণ করত, বনু তামীম গোত্র তা খুলে বলত 'জারয'।"
          },
          {
            "en": "Al-Qurtubi carries the picture further and records a careful distinction from az-Zamakhshari. Al-juruz, on this reading, is land whose vegetation has been jaraza, cut off, whether for want of water or because grazing stripped it away. It is not the same as permanently sterile ground such as salt flats, which never grow anything at all. The proof, al-Qurtubi says, is the next clause itself: fa-nukhriju bihi zar'an, We bring forth crops with it. A field that yields a crop was never truly dead soil; it was only waiting.",
            "bn": "কুরতুবী ছবিটা আরও এগিয়ে নেন এবং যামাখশারীর কাছ থেকে একটি সূক্ষ্ম পার্থক্য তুলে ধরেন। এই পাঠে 'জুরুয' সেই জমি, যার গাছপালা 'জারায' হয়েছে অর্থাৎ কেটে গেছে, হয় পানির অভাবে, নয়তো চরে খাওয়ার ফলে সব সাফ হয়ে গেছে। এটা লবণাক্ত ঊষরের মতো চিরস্থায়ীভাবে বন্ধ্যা মাটি নয়, যা কখনো কিছুই ফলায় না। কুরতুবী বলেন, এর প্রমাণ পরের অংশেই: ফানুখরিজু বিহি যারআ, আমি তা দিয়ে ফসল উৎপন্ন করি। যে মাঠ ফসল দেয়, তা কখনো সত্যিকারের মরা মাটি ছিল না, ছিল কেবল অপেক্ষায়।"
          },
          {
            "en": "The name, then, is doing double work. It marks the land as hopeless to the eye, ground that has consumed its own green and shows only dust, which Qatada glosses simply as the dusty earth. Yet the same word hints that what was cut off can be given back. The Qur'an chooses a term for emptiness exactly where it is about to display fullness, so that the reader feels the gap between how the ground looks and what its Lord is about to do with it.",
            "bn": "তাহলে নামটি দুটো কাজ একসঙ্গে করছে। এটি জমিটিকে চোখের কাছে আশাহীন বলে চিহ্নিত করে, যে মাটি নিজের সবুজ খেয়ে ফেলেছে আর দেখায় কেবল ধুলো। কাতাদা একে সোজা কথায় ধুলোমাখা জমি বলেন। অথচ একই শব্দ ইঙ্গিত দেয়, যা কেটে গেছে তা আবার ফিরিয়ে দেওয়া যায়। কুরআন শূন্যতার একটি শব্দ বেছে নেয় ঠিক সেখানে, যেখানে সে পূর্ণতা দেখাতে যাচ্ছে। ফলে পাঠক টের পান, জমিটা দেখতে কেমন আর তার রব তা দিয়ে কী করতে যাচ্ছেন, এই দুইয়ের মাঝের ফারাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Barren Land",
          "bn": "কোন সেই ঊষর ভূমি"
        },
        "p": [
          {
            "en": "Where is this juruz land? Here the commentators frankly disagree, and the Qur'an does not settle it. Ibn Abbas said it was a land in Yemen; Mujahid named Abyan near Aden; Ikrimah called it simply the thirsty land, and ad-Dahhak the dead and thirsty earth. Mujahid is also reported as pointing to the land of the Nile, and al-Qurtubi records that this ground has no rivers of its own and lies far from the sea, so water reaches it afresh each year and its people sow three times annually.",
            "bn": "এই 'জুরুয' জমি কোথায়? এখানে তাফসীরকারেরা খোলাখুলি দ্বিমত করেন, আর কুরআন বিষয়টি স্থির করে দেয় না। ইবন আব্বাস বলেছেন, এটি ইয়েমেনের একটি জমি। মুজাহিদ নাম নেন আদেনের কাছের আবইয়ান। ইকরিমা একে বলেন কেবল তৃষ্ণার্ত জমি, আর দাহহাক বলেন মরা ও তৃষ্ণার্ত মাটি। মুজাহিদ থেকে এ-ও বর্ণিত যে এটি নীল নদের জমি। কুরতুবী লেখেন, এই জমির নিজের কোনো নদী নেই, সমুদ্র থেকেও দূরে, তাই প্রতি বছর নতুন করে পানি এসে পৌঁছায় আর এর মানুষ বছরে তিনবার ফসল বোনে।"
          },
          {
            "en": "Against pinning it to one place, Muhammad ibn Yazid argued that the definite article in al-ard makes the phrase general rather than a single named valley. Ibn Kathir takes the same view: Egypt, watered by the Nile that swells with the rains of Abyssinia and carries red silt over its sandy soil, is certainly meant, he says, but it is not meant alone. Every ground that lives only because water is driven to it falls under the verse. The disagreement over the map leaves the lesson untouched, and perhaps sharpens it: this sign is not somewhere else.",
            "bn": "একে একটিমাত্র জায়গার সঙ্গে বেঁধে ফেলার বিপরীতে মুহাম্মাদ ইবন ইয়াযীদ যুক্তি দেন, 'আল-আরদ' শব্দে নির্দিষ্টতাবোধক 'আল' থাকায় কথাটা সাধারণ, কোনো একটি নামের উপত্যকা নয়। ইবন কাসীরও একই মত দেন। তিনি বলেন, মিসর, যাকে সিঞ্চন করে নীল নদ, যা আবিসিনিয়ার বৃষ্টিতে ফুলে ওঠে আর তার বালুময় মাটির উপর লাল পলি বয়ে আনে, তা অবশ্যই উদ্দেশ্য, তবে একমাত্র উদ্দেশ্য নয়। যে জমি কেবল পানি চালিয়ে আনার কারণেই বাঁচে, তার সবই এ আয়াতের আওতায়। মানচিত্র নিয়ে মতভেদ শিক্ষাটিকে অক্ষত রাখে, বরং হয়তো আরও ধারালো করে: এই নিদর্শন অন্য কোথাও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fodder and Daily Bread",
          "bn": "পশুর ঘাস, মানুষের দানা"
        },
        "p": [
          {
            "en": "With that water God brings forth zar', growing things, and names two tables it serves. Al-Qurtubi divides them: the livestock eat of the grass and herbage, while the people eat of the grain, greens and fruits. Al-Baghawi draws the same line, grass and straw for the animals, grain and staples for their owners. As-Sa'di adds that the growth comes up in many kinds at once, and al-Muyassar that it rises in varied colours. One rain, and the whole range of food for beast and man is laid out together.",
            "bn": "সেই পানি দিয়ে আল্লাহ উৎপন্ন করেন 'যারআ', অর্থাৎ গজিয়ে ওঠা ফসল, আর তা যে দুই পাতকে খাওয়ায় তার নাম নেন। কুরতুবী ভাগ করে দেন: গবাদি পশু খায় ঘাস ও তৃণ থেকে, আর মানুষ খায় দানা, শাকসবজি ও ফল থেকে। বাগভী একই রেখা টানেন, পশুর জন্য ঘাস ও খড়, মালিকের জন্য দানা ও খাদ্যশস্য। সাদী যোগ করেন, গজানো ফসল একসঙ্গে নানা রকমের হয়ে ওঠে, আর মুয়াসসার বলেন তা ওঠে হরেক রঙে। এক বৃষ্টি, আর পশু ও মানুষ সবার পুরো খাবারের পসরা একসঙ্গে সাজানো হয়ে যায়।"
          },
          {
            "en": "Notice the order the verse keeps: their livestock eat of it, and themselves. The animals are named first, the people second. The green that feeds a household feeds its herds on the way, and the two are set on one ledger of provision. Nothing in the chain is beneath God's arranging, down to the fodder of a grazing animal. The same driven water that will become a family's bread first becomes the grass beneath its cattle's mouths.",
            "bn": "আয়াত যে ক্রম রাখে তা খেয়াল করুন: তাদের গবাদি পশু তা খায়, আর তারা নিজেরাও। পশুর নাম আগে, মানুষের নাম পরে। যে সবুজ একটি ঘরকে খাওয়ায়, পথে সে তার পশুপালকেও খাওয়ায়, আর দুইকে রাখা হয় রিজিকের একই খাতায়। এই শৃঙ্খলের কিছুই আল্লাহর সাজানোর বাইরে নয়, এমনকি চরে বেড়ানো পশুর ঘাস পর্যন্ত নয়। যে চালিয়ে আনা পানি একটি পরিবারের রুটি হবে, তা আগে হয় তার গবাদি পশুর মুখের নিচের ঘাস।"
          },
          {
            "en": "Ibn Kathir reads the whole picture as an unfolding of God's gentleness and kindness towards His creatures, that He should route water to a lifeless place for their sake. He sets beside it the command, let man look at his food (80:24), for We poured the water down in abundance. The verse is not displaying an abstract power; it is pointing at the loaf and the meal. The food before you is the argument, and your own need of it is part of the proof.",
            "bn": "ইবন কাসীর গোটা ছবিটিকে পড়েন তাঁর সৃষ্টির প্রতি আল্লাহর কোমলতা ও অনুগ্রহের প্রকাশ হিসেবে, যে তিনি তাদের জন্য প্রাণহীন জায়গায় পানি পৌঁছে দেন। এর পাশে তিনি রাখেন সেই নির্দেশ, মানুষ যেন তার খাবারের দিকে তাকায় (৮০:২৪), কেননা আমি প্রচুর পরিমাণে পানি ঢেলে দিয়েছি। আয়াত কোনো বিমূর্ত ক্ষমতা দেখাচ্ছে না, আঙুল তুলছে রুটি আর খাবারের দিকে। আপনার সামনের খাবারই যুক্তি, আর তার প্রতি আপনার মুখাপেক্ষিতাই প্রমাণের অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain on Three Soils",
          "bn": "তিন মাটিতে এক বৃষ্টি"
        },
        "p": [
          {
            "en": "The Qur'an's image of water meeting different ground has a famous echo in the Sunnah, though it is not a commentary on this verse and is not reported in connection with it. In Sahih al-Bukhari, Abu Musa relates that the Prophet (peace be upon him) said the guidance and knowledge God sent him with are like abundant rain falling on land. Part of that land was fertile, drank the water in, and brought forth grass and herbage in plenty.",
            "bn": "ভিন্ন ভিন্ন জমির সঙ্গে পানির মিলনের এই কুরআনী ছবির একটি বিখ্যাত প্রতিধ্বনি আছে সুন্নাহয়, যদিও তা এই আয়াতের ব্যাখ্যা নয় এবং এর সঙ্গে জুড়ে বর্ণিতও হয়নি। সহীহ বুখারীতে আবূ মূসা বর্ণনা করেন, নবী ﷺ বলেছেন, আল্লাহ তাঁকে যে হেদায়েত ও জ্ঞান দিয়ে পাঠিয়েছেন তা যেন জমিতে পড়া প্রচুর বৃষ্টি। সেই জমির একটি অংশ ছিল উর্বর, যা পানি শুষে নিল আর প্রচুর ঘাস ও তৃণ গজাল।"
          },
          {
            "en": "A second part of the land, he said, was hard; it held the water so that God gave people benefit through it, and they drank and gave drink and watered their crops. Another part was barren level ground that neither held water nor grew anything. These are three responses to one rain: soil that drinks and gives, ground that stores for others, and hard flats that take nothing in at all. The water was equal; the earth was not.",
            "bn": "জমির দ্বিতীয় একটি অংশ ছিল শক্ত, তিনি বললেন; তা পানি ধরে রাখল, ফলে আল্লাহ তা দিয়ে মানুষের উপকার করলেন, তারা পান করল, অন্যকে পান করাল আর ফসলে সেচ দিল। আরেকটি অংশ ছিল ঊষর সমতল জমি, যা পানিও ধরে রাখে না, কিছু গজায়ও না। এক বৃষ্টির প্রতি এই তিনটি জবাব: যে মাটি পান করে ও দেয়, যে মাটি অন্যের জন্য জমিয়ে রাখে, আর যে শক্ত সমতল ভেতরে কিছুই নেয় না। পানি ছিল সমান, মাটি ছিল না।"
          },
          {
            "en": "The Prophet (peace be upon him) read the three soils as three hearts meeting revelation: one that learns and teaches, one that preserves and passes on, and one that lifts not its head to it at all. Laid against our verse, the warning turns inward. The ground outside is not the only juruz that water can be driven toward. A heart can sit under the same guidance as everyone else and still stay the hard flat that simply lets it run off.",
            "bn": "নবী ﷺ এই তিনটি মাটিকে পড়লেন ওহির মুখোমুখি হওয়া তিনটি হৃদয় হিসেবে: একটি শেখে ও শেখায়, একটি ধরে রাখে ও পৌঁছে দেয়, আর একটি তার দিকে মাথাই তোলে না। আমাদের আয়াতের পাশে রাখলে সতর্কবাণীটি ভেতরের দিকে ফেরে। বাইরের মাটিই একমাত্র 'জুরুয' নয়, যেদিকে পানি চালিয়ে আনা যায়। একটি হৃদয় সবার মতো একই হেদায়েতের নিচে বসে থেকেও সেই শক্ত সমতলই থেকে যেতে পারে, যা তা নিছক গড়িয়ে পড়তে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Without Seeing",
          "bn": "দেখেও না দেখা"
        },
        "p": [
          {
            "en": "The verse ends where it began its challenge, on the eye: afala yubsirun, then will they not see? As-Sa'di draws out the sting. By this favour God revives the land and its people, and the sight of it should carry a watcher on to insight and so to the straight path. But blindness overcame them and heedlessness took hold. They did look, he says, yet not with the seeing of men of understanding; they looked with the glance of habit and mere routine, and so were granted no good by it.",
            "bn": "আয়াত যেখানে তার দাবি শুরু করেছিল, সেখানেই শেষ হয়, চোখে: 'আফালা ইউবসিরূন', তবুও কি তারা দেখবে না? সাদী এর খোঁচাটা খুলে দেন। এই নিয়ামত দিয়ে আল্লাহ জমি ও তার মানুষকে জীবন্ত করেন, আর তা দেখা দর্শককে অন্তর্দৃষ্টির দিকে, এরপর সরল পথের দিকে নিয়ে যাওয়ার কথা। কিন্তু অন্ধত্ব তাদের পেয়ে বসেছে, উদাসীনতা জেঁকে ধরেছে। তারা তাকিয়েছিল ঠিকই, সাদী বলেন, তবে বোধসম্পন্ন মানুষের দেখা দিয়ে নয়; তারা তাকিয়েছিল অভ্যাস আর নিছক রোজকার অভ্যস্ততার দৃষ্টিতে, তাই তা থেকে কোনো কল্যাণ তাদের দেওয়া হয়নি।"
          },
          {
            "en": "That is the gap the verse presses: between looking and seeing. Eyes report that a field is green; sight asks who turned it green and what that fact tells me. The disbelievers in the passage are not blind men; they are men with working eyes who have decided, by sheer repetition, that nothing here needs explaining. Familiarity is the quiet thief of wonder. What we see daily we stop examining, and the most constant signs become the easiest to walk straight past.",
            "bn": "এই ফারাকটাই আয়াত চেপে ধরে: তাকানো আর দেখার মাঝের ফারাক। চোখ জানায় মাঠটা সবুজ; দৃষ্টি জিজ্ঞেস করে, কে একে সবুজ করল আর সে কথা আমাকে কী বলে। আয়াতের অবিশ্বাসীরা অন্ধ মানুষ নয়, তাদের চোখ সচল, তবু নিছক বারবার দেখার জোরে তারা ঠিক করে নিয়েছে এখানে ব্যাখ্যার কিছু নেই। পরিচিতি নীরবে বিস্ময় চুরি করে নেয়। যা রোজ দেখি তা আর খতিয়ে দেখি না, আর সবচেয়ে নিয়মিত নিদর্শনগুলোই সবচেয়ে সহজে পাশ কাটিয়ে যাওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ear, Then the Eye",
          "bn": "আগে কান, পরে চোখ"
        },
        "p": [
          {
            "en": "This closing question answers one asked a verse earlier. In 32:26 the heedless walk among the ruins of nations God destroyed, and that verse ends, then will they not hear? Here, over living fields, it ends, then will they not see? Two senses, two kinds of sign. The ear is summoned by the silence of the dead past; the eye, by the green of the present. The ruins witness against them, and the harvest witnesses for them, and both are met with the same inattention.",
            "bn": "এই শেষ প্রশ্নটি এক আয়াত আগের একটি প্রশ্নের জবাব দেয়। ৩২:২৬ আয়াতে উদাসীন মানুষ হেঁটে বেড়ায় আল্লাহর ধ্বংস করা জাতিগুলোর ধ্বংসস্তূপের মাঝে, আর সে আয়াত শেষ হয়, তবুও কি তারা শুনবে না? এখানে জীবন্ত মাঠের উপর তা শেষ হয়, তবুও কি তারা দেখবে না? দুই ইন্দ্রিয়, দুই রকম নিদর্শন। কান ডাকা হয় মরা অতীতের নীরবতায়, আর চোখ ডাকা হয় বর্তমানের সবুজে। ধ্বংসস্তূপ তাদের বিরুদ্ধে সাক্ষ্য দেয়, ফসল তাদের পক্ষে সাক্ষ্য দেয়, আর দুটোই পায় একই অমনোযোগ।"
          },
          {
            "en": "The commentators are near unanimous that the reviving of dead ground is set here as a proof of the reviving of the dead. Al-Muyassar and at-Tabari both read it so: the Power that greens a barren field can raise bodies from their graves. The mockers who follow, in 32:28, ask when this decision will come, as if it were far off. The answer is under their feet each spring. He who settles seed into dust and lifts it living has already shown, in miniature, the very day they doubt.",
            "bn": "তাফসীরকারেরা প্রায় একমত যে মরা জমিকে জীবন্ত করাকে এখানে রাখা হয়েছে মৃতকে জীবন্ত করার প্রমাণ হিসেবে। মুয়াসসার আর তাবারী দুজনেই তা এভাবেই পড়েন: যে শক্তি ঊষর মাঠকে সবুজ করে, তা কবর থেকে দেহ তুলে আনতে পারে। এর পরে যে বিদ্রূপকারীরা আসে, তারা ৩২:২৮ আয়াতে জিজ্ঞেস করে এই ফয়সালা কবে আসবে, যেন তা বহু দূরের কিছু। জবাবটা প্রতি বসন্তে তাদের পায়ের নিচেই। যিনি বীজকে ধুলোয় বসিয়ে জীবন্ত করে তোলেন, তিনি ছোট আকারে আগেই দেখিয়ে দিয়েছেন সেই দিন, যা নিয়ে তারা সন্দেহ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "At Your Own Table",
          "bn": "আপনার পাতেই নিদর্শন"
        },
        "p": [
          {
            "en": "So the verse hands you a practice, not only a doctrine. The sign it names is no rare eclipse or distant mountain; it is the food on your plate, arriving three times a day from ground that water was driven to reach. Ibn Kathir frames the whole act as God's kindness to His creatures, and the Qur'an turns the same scene toward gratitude elsewhere: We revived the dead earth and brought grain from it, so that they eat of it (36:33); will they not then give thanks (36:35)?",
            "bn": "তাই আয়াত আপনার হাতে শুধু একটি মত নয়, একটি অভ্যাস তুলে দেয়। যে নিদর্শনের নাম সে নেয়, তা কোনো দুর্লভ গ্রহণ বা দূরের পাহাড় নয়; তা আপনার পাতের খাবার, যা দিনে তিনবার আসে এমন মাটি থেকে যেখানে পানি চালিয়ে আনা হয়েছিল। ইবন কাসীর গোটা ব্যাপারটিকে তাঁর সৃষ্টির প্রতি আল্লাহর অনুগ্রহ হিসেবে দেখান, আর কুরআন অন্যত্র একই দৃশ্যকে কৃতজ্ঞতার দিকে ফেরায়: আমি মরা জমিকে জীবন্ত করেছি আর তা থেকে দানা বের করেছি, যাতে তারা তা খায় (৩৬:৩৩); তবুও কি তারা শুকরিয়া আদায় করবে না (৩৬:৩৫)?"
          },
          {
            "en": "The move the verse asks is tiny and within reach. Before the next meal, follow the bread back: to the mill, the field, the rain that fell on a hill you have never climbed, the water steered over dry miles to one green patch. Do that once with full attention and the plate stops being ordinary. To see, in this verse, is to let a daily mercy register as mercy, and to answer it, as the earth answers water, by bringing something good forth.",
            "bn": "আয়াত যে পদক্ষেপ চায় তা ছোট আর নাগালের মধ্যে। পরের খাবারের আগে রুটিকে পিছিয়ে নিয়ে যান: কল পর্যন্ত, মাঠ পর্যন্ত, সেই বৃষ্টি পর্যন্ত যা পড়েছে এমন এক পাহাড়ে যেখানে আপনি কখনো ওঠেননি, সেই পানি পর্যন্ত যা শুকনো মাইলের পর মাইল পেরিয়ে এসেছে একটিমাত্র সবুজ টুকরোয়। একবার পুরো মন দিয়ে এটা করুন, পাত আর সাধারণ থাকবে না। এই আয়াতে দেখা মানে রোজকার এক রহমতকে রহমত বলে অনুভব করা, আর তার জবাব দেওয়া, মাটি যেমন পানির জবাব দেয়, তেমনি ভালো কিছু উৎপন্ন করে।"
          }
        ]
      }
    ]
  }
});
