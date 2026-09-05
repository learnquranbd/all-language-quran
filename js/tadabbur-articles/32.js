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
  }
});
