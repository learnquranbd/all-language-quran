/**
 * Tadabbur long-form articles — surah 58.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "58:7": {
    "sections": [
      {
        "h": {
          "en": "A Surah That Begins in Private",
          "bn": "যে সূরার শুরু গোপনে"
        },
        "p": [
          {
            "en": "Surah al-Mujadilah opens at 58:1 with Allah declaring that He has heard the speech of a woman who was disputing with the Prophet ﷺ about her husband and directing her complaint to Allah, and adds that He hears the exchange between the two of them. A conversation held by two people is reported back to them in revelation before the surah has said anything else.",
            "bn": "সূরা আল-মুজাদালাহ শুরু হয় 58:1 দিয়ে, যেখানে আল্লাহ ঘোষণা করেন যে তিনি সেই নারীর কথা শুনেছেন যিনি তাঁর স্বামীর বিষয়ে নবী ﷺ-এর সঙ্গে বাদানুবাদ করছিলেন এবং আল্লাহর কাছে অভিযোগ পেশ করছিলেন; আর যোগ করা হয় যে তিনি তাঁদের দুজনের কথোপকথনও শোনেন। সূরাটি অন্য কিছু বলার আগেই, দুজন মানুষের একটি আলাপ ওহীর মাধ্যমে তাঁদেরই কাছে ফিরিয়ে জানিয়ে দেওয়া হয়।"
          },
          {
            "en": "By the time we reach this verse the same fact has become a general law. What was granted to one woman in one difficulty is stated as the standing condition of every private conference anyone will ever hold. The surah moves from a particular case to a rule, which is the ordinary direction of Quranic legislation, and here the rule concerns who is listening.",
            "bn": "আলোচ্য আয়াতে পৌঁছাতে পৌঁছাতে সেই একই সত্য একটি সাধারণ বিধানে পরিণত হয়। এক নারীকে এক দুর্দশায় যা দেওয়া হয়েছিল, তা এখন ঘোষিত হচ্ছে যেকোনো মানুষের যেকোনো গোপন পরামর্শের স্থায়ী অবস্থা হিসেবে। সূরাটি একটি নির্দিষ্ট ঘটনা থেকে বিধানের দিকে এগোয় — কুরআনি বিধানের এটিই স্বাভাবিক গতি — আর এখানে বিধানটি এই নিয়ে যে, শুনছেন কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge on Both Sides",
          "bn": "দুই প্রান্তেই জ্ঞান"
        },
        "p": [
          {
            "en": "The verse opens by saying that Allah knows what is in the heavens and what is on the earth, and it closes by saying that Allah is Knowing of all things. Between those two statements of knowledge sits the clause about His being with them wherever they are. The frame is not decorative; it tells the reader how the middle is to be understood.",
            "bn": "আয়াতটি শুরু হয় এই কথা দিয়ে যে, আসমানে যা আছে আর যমীনে যা আছে আল্লাহ সব জানেন; আর শেষ হয় এই কথা দিয়ে যে, আল্লাহ সকল বিষয়ে অবগত। জ্ঞানের এই দুই ঘোষণার মাঝখানে বসে আছে সেই বাক্যটি — তারা যেখানেই থাকুক তিনি তাদের সঙ্গে আছেন। কাঠামোটি অলংকার নয়; এটিই পাঠককে জানায় মাঝের অংশটি কীভাবে বুঝতে হবে।"
          },
          {
            "en": "The classical commentators are settled on the reading the frame requires: the withness here is one of knowledge, hearing and seeing, not of mixture with creation. The same construction is used at 57:4, and in both places the clause is fenced by knowledge before it and awareness after it. The verse defines its own terms, and it does so twice over.",
            "bn": "প্রাচীন মুফাসসিরগণ কাঠামোটি যে পাঠ দাবি করে সেটিতেই স্থির: এখানে 'সঙ্গে থাকা' মানে জ্ঞান, শ্রবণ ও দর্শনের সঙ্গে থাকা, সৃষ্টির সঙ্গে মিশে যাওয়া নয়। একই গঠন ব্যবহৃত হয়েছে 57:4 আয়াতে, আর দুই জায়গাতেই বাক্যটির আগে জ্ঞান ও পরে অবগতির বেড়া দেওয়া। আয়াতটি নিজের পরিভাষা নিজেই নির্ধারণ করে দেয়, আর তা করে দুবার।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Counts",
          "bn": "আয়াতটি যা গোনে"
        },
        "p": [
          {
            "en": "Count what is actually named. The verse gives two group sizes and two positions: three, and He is their fourth; five, and He is their sixth. Then it closes both directions at once with a pair of negations — no fewer than that and no more. Two numbers are stated and every other number in existence is swept in behind them.",
            "bn": "আসলে কী কী নাম নেওয়া হয়েছে, তা গুনে দেখুন। আয়াতটি দুটি দলের আকার ও দুটি অবস্থান দেয়: তিনজন, আর তিনি তাদের চতুর্থজন; পাঁচজন, আর তিনি তাদের ষষ্ঠজন। তারপর দুটি অস্বীকৃতি দিয়ে একসঙ্গে দুই দিকই বন্ধ করে দেয় — এর কমও নয়, বেশিও নয়। দুটি সংখ্যার নাম নেওয়া হয়, আর অস্তিত্বের বাকি সব সংখ্যা তাদের পিছু পিছু ভেতরে ঢুকে পড়ে।"
          },
          {
            "en": "The counting is what makes the verse concrete. A statement that Allah knows everything is easy to hold at a distance. A statement that a meeting of three has a fourth present in it is not, because it puts a number on the room you were in yesterday. The smallest group the verse names is three, so its subject is never a solitary person; it is people together.",
            "bn": "এই গণনাই আয়াতটিকে বাস্তব করে তোলে। 'আল্লাহ সবকিছু জানেন' — এমন কথা দূর থেকে ধরে রাখা সহজ। কিন্তু 'তিনজনের বৈঠকে একজন চতুর্থ উপস্থিত থাকেন' — এ কথা দূরে রাখা যায় না, কারণ তা গতকাল আপনি যে ঘরে ছিলেন সেটির উপর একটি সংখ্যা বসিয়ে দেয়। আয়াতটি সবচেয়ে ছোট যে দলের নাম নেয় তা তিনজনের; তাই এর বিষয় কখনোই একাকী কোনো মানুষ নয় — এর বিষয় একত্র হওয়া মানুষ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Other Verse",
          "bn": "একমাত্র অন্য আয়াতটি"
        },
        "p": [
          {
            "en": "The words rabi'uhum and sadisuhum, their fourth and their sixth, occur in only one other place in the Quran. 18:22 has people arguing over the sleepers of the cave: they will say three, the fourth of them their dog, and they will say five, the sixth of them their dog. The counting formula is identical, down to the two numbers chosen.",
            "bn": "'রাবি'উহুম' ও 'সাদিসুহুম' — তাদের চতুর্থজন ও তাদের ষষ্ঠজন — এই শব্দ দুটি কুরআনে আর মাত্র একটি জায়গায় এসেছে। 18:22 আয়াতে মানুষ গুহাবাসীদের সংখ্যা নিয়ে তর্ক করছে: কেউ বলবে তারা ছিল তিনজন, চতুর্থটি তাদের কুকুর; আর কেউ বলবে তারা ছিল পাঁচজন, ষষ্ঠটি তাদের কুকুর। গণনার ছাঁচটি হুবহু এক, এমনকি বেছে নেওয়া দুটি সংখ্যাও এক।"
          },
          {
            "en": "And 18:22 labels that counting as guessing at the unseen, then tells the Prophet ﷺ to say that his Lord knows their number best. So the Quran uses the same formula twice: once for human beings speculating about a hidden matter and getting it wrong, and once for Allah stating His own presence in every hidden matter. The contrast between the two is the point.",
            "bn": "আর 18:22 সেই গণনাকে চিহ্নিত করে অদৃশ্য বিষয়ে অনুমান হিসেবে, তারপর নবী ﷺ-কে বলতে বলে যে তাঁর প্রতিপালকই তাদের সংখ্যা সবচেয়ে ভালো জানেন। অর্থাৎ কুরআন একই ছাঁচ দুবার ব্যবহার করে: একবার মানুষের জন্য, যারা গোপন বিষয়ে অনুমান করে ভুল করে; আর একবার আল্লাহর জন্য, যিনি প্রতিটি গোপন বিষয়ে নিজের উপস্থিতি ঘোষণা করেন। এই দুইয়ের বৈসাদৃশ্যই মূল কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Najwa Is Not the Problem",
          "bn": "গোপন পরামর্শ নিজে সমস্যা নয়"
        },
        "p": [
          {
            "en": "Najwa, private conference, occurs eleven times in the Quran, and five of those are in this surah: 58:7, 58:8, 58:10, 58:12 and 58:13. This is where the Book legislates on secret talk, and its ruling is not that believers should stop holding it. 58:9 tells them that when they confer privately they must not confer about sin, aggression and disobedience to the Messenger, but about righteousness and taqwa.",
            "bn": "'নাজওয়া' অর্থাৎ গোপন পরামর্শ কুরআনে এসেছে এগারো বার, আর তার পাঁচটিই এই সূরায়: 58:7, 58:8, 58:10, 58:12 এবং 58:13। গোপন আলাপ নিয়ে কিতাব এখানেই বিধান দেয়, আর সেই বিধান এই নয় যে মুমিনরা গোপন পরামর্শ বন্ধ করে দেবে। 58:9 তাদের বলে, যখন তারা গোপনে পরামর্শ করে তখন যেন পাপ, সীমালঙ্ঘন ও রাসূলের অবাধ্যতার পরামর্শ না করে, বরং সৎকর্ম ও তাকওয়ার পরামর্শ করে।"
          },
          {
            "en": "So the fourth of every three is not there to abolish privacy. Councils, confidences and closed rooms are all left standing; what the passage regulates is their content. 58:8 shows the alternative in action, describing people forbidden from such talk who return to it and confer about sin and aggression, and who greet the Prophet ﷺ with words Allah does not use to greet him.",
            "bn": "তাই প্রতি তিনজনের চতুর্থজন থাকার কথা গোপনীয়তা বিলুপ্ত করার জন্য নয়। পরামর্শসভা, বিশ্বাসের কথা ও বন্ধ ঘর — সবই বহাল থাকে; অংশটি নিয়ন্ত্রণ করে সেগুলোর বিষয়বস্তু। 58:8 বিকল্পটিকে কাজে দেখায়: যাদের এমন আলাপ থেকে নিষেধ করা হয়েছিল তারা আবার তাতেই ফিরে যায়, পাপ ও সীমালঙ্ঘনের পরামর্শ করে, আর নবী ﷺ-কে এমন কথায় অভিবাদন জানায় যা দিয়ে আল্লাহ তাঁকে অভিবাদন জানান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Then He Will Inform Them",
          "bn": "তারপর তিনি জানিয়ে দেবেন"
        },
        "p": [
          {
            "en": "Thumma yunabbi'uhum bima 'amilu yawma al-qiyamah — then He will inform them of what they did, on the Day of Resurrection. Thumma opens a gap between the knowing and the telling, and the whole of a life fits inside that gap. 58:6, immediately before, has already said that Allah enumerated their deeds while they themselves forgot them.",
            "bn": "ছুম্মা ইউনাব্বিউহুম বিমা 'আমিলূ ইয়াওমাল-ক্বিয়ামাহ — তারপর কিয়ামতের দিন তিনি তাদের জানিয়ে দেবেন তারা কী করেছিল। 'ছুম্মা' শব্দটি জানা ও জানানোর মাঝখানে একটি ব্যবধান খুলে দেয়, আর গোটা একটি জীবন সেই ব্যবধানের ভেতরে এঁটে যায়। ঠিক আগের আয়াত 58:6 আগেই বলেছে, আল্লাহ তাদের আমল গুনে রেখেছেন, অথচ তারা নিজেরাই তা ভুলে গেছে।"
          },
          {
            "en": "Notice the last shift: the verse began with talk and ends with deeds, what they did rather than what they said. A private conference is where things are decided before they are done, so the record of the room is filed under actions. That is where the verse becomes usable — not as a rule against whispering, but as a question about what your meetings decide.",
            "bn": "শেষ মোড়টি লক্ষ করুন: আয়াতটি শুরু হয়েছিল কথা দিয়ে, শেষ হয় আমল দিয়ে — তারা কী বলেছিল নয়, কী করেছিল। গোপন পরামর্শ সেই জায়গা যেখানে কাজ করার আগেই সিদ্ধান্ত নেওয়া হয়, তাই সেই ঘরের নথি জমা পড়ে কাজের খাতায়। এখানেই আয়াতটি কাজে লাগে — ফিসফিসানির বিরুদ্ধে কোনো নিয়ম হিসেবে নয়, বরং এই প্রশ্ন হিসেবে যে আপনার বৈঠকগুলো কী সিদ্ধান্ত নেয়।"
          }
        ]
      }
    ]
  },
  "58:22": {
    "sections": [
      {
        "h": {
          "en": "Written a Second Time",
          "bn": "দ্বিতীয়বার লিখে দেওয়া"
        },
        "p": [
          {
            "en": "Kataba Allahu la-aghlibanna ana wa rusuli: Allah has written, I will surely prevail, I and My messengers. That is 58:21, and the next verse uses the same verb again: ula'ika kataba fi qulubihim al-iman, those are the ones in whose hearts He has written faith. Ibn Kathir, on the earlier verse, explains the first writing as a decree in the First Book that nothing can resist or change. The second writing is set down inside particular people. The surah closes by moving from a decree about victory to the hearts that carry it.",
            "bn": "কাতাবাল্লাহু লাআগলিবান্না আনা ওয়া রুসুলী: আল্লাহ লিখে দিয়েছেন, অবশ্যই আমি ও আমার রসূলগণ বিজয়ী হব। এটি ৫৮:২১ আয়াত। ঠিক পরের আয়াতে একই ক্রিয়া আবার আসে: উলাইকা কাতাবা ফী কুলূবিহিমুল ঈমান, এরাই তারা, যাদের অন্তরে তিনি ঈমান লিখে দিয়েছেন। আগের আয়াতের ব্যাখ্যায় ইবন কাসীর প্রথম লেখাটিকে বলেন প্রথম কিতাবে লেখা এমন ফয়সালা, যা কেউ ঠেকাতে বা বদলাতে পারে না। দ্বিতীয় লেখাটি বসে নির্দিষ্ট কিছু মানুষের ভেতরে। বিজয়ের ফয়সালা থেকে সূরাটি শেষ হয় সেই অন্তরগুলোর কথায়, যারা এ বিজয় বহন করে।"
          },
          {
            "en": "The verses before it draw the other side. In 58:20 those who yuhadduna Allah and His Messenger will be among the most humbled, and 58:19 has already named a party of Satan. At-Tabari reads this verse as Allah telling His Prophet about the people of 58:14, those who took as allies a people with whom Allah is angry: they are not people of faith in Allah and the Last Day, and that is why they took such allies. Ma'arif al-Qur'an says the same in other words. The preceding verses dealt with hypocrites in close friendship with unbelievers, and this one describes sincere believers.",
            "bn": "আগের আয়াতগুলো অন্য পক্ষের ছবি আঁকে। ৫৮:২০ আয়াতে যারা আল্লাহ ও তাঁর রসূলের বিরুদ্ধাচরণ করে, তারা সবচেয়ে লাঞ্ছিতদের দলে। ৫৮:১৯ আয়াত আগেই শয়তানের দলের নাম নিয়েছে। তাবারীর পাঠে আল্লাহ এ আয়াতে তাঁর নবীকে ৫৮:১৪ আয়াতের লোকদের কথা জানাচ্ছেন, যারা এমন সম্প্রদায়কে বন্ধু বানিয়েছিল যাদের উপর আল্লাহ ক্রুদ্ধ। তারা আল্লাহ ও আখিরাতে ঈমানদার নয়, তাই এমন বন্ধু বেছে নিয়েছে। মাআরিফুল কুরআনও অন্য ভাষায় একই কথা বলে। আগের আয়াতগুলো ছিল কাফিরদের সঙ্গে গভীর বন্ধুত্বে জড়ানো মুনাফিকদের নিয়ে, আর এ আয়াত আঁকে খাঁটি মুমিনদের ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Things That Do Not Meet",
          "bn": "যে দুটি জিনিস একসঙ্গে থাকে না"
        },
        "p": [
          {
            "en": "La tajidu qawman: you will not find a people. At-Tabari supplies the addressee: you will not find, O Muhammad, a people who affirm Allah and acknowledge the Last Day and who yet yuwadduna man hadda Allaha wa rasulahu. He glosses hadda as setting oneself against Allah and His Messenger, splitting from them, and going against Allah's command and prohibition. Qatada, in a chain at-Tabari gives, says more briefly: whoever shows enmity to Allah and His Messenger. It is the same verb that 58:20 used for those who will be among the most humbled.",
            "bn": "লা তাজিদু কাওমান: তুমি এমন কোনো সম্প্রদায় পাবে না। কাকে বলা হচ্ছে, তাবারী তা খুলে দেন: হে মুহাম্মাদ, তুমি এমন লোক পাবে না, যারা আল্লাহকে সত্য বলে মানে, আখিরাতকে স্বীকার করে, আবার ইউওয়াদ্দূনা মান হাদ্দাল্লাহা ওয়া রসূলাহু। হাদ্দা শব্দের অর্থ তিনি করেন আল্লাহ ও তাঁর রসূলের বিরুদ্ধে দাঁড়ানো, তাঁদের থেকে আলাদা পথ ধরা, আল্লাহর আদেশ-নিষেধ অমান্য করা। তাবারীর দেওয়া সনদে কাতাদা আরও ছোট করে বলেন: যে আল্লাহ ও তাঁর রসূলের সঙ্গে শত্রুতা করে। ৫৮:২০ আয়াতে সবচেয়ে লাঞ্ছিতদের বেলায় এই ক্রিয়াই এসেছিল।"
          },
          {
            "en": "What is the muwaddah the verse rules out? Al-Qurtubi and the Muyassar both gloss yuwadduna as to love and to take as allies. Al-Baghawi says Allah is telling us that the believers' faith is spoiled by muwaddah towards those who disbelieve. As-Sa'di reads the sentence as saying that these two things do not come together: a servant is not truly a believer unless he acts on what faith requires, loving and siding with those who hold to it, and holding aversion and enmity towards those who do not, even the person closest to him. A faith that is only claimed, he adds, needs a proof to confirm it.",
            "bn": "আয়াত যে মুওয়াদ্দাহ নাকচ করে, তা আসলে কী? কুরতুবী ও মুয়াসসার দুজনেই ইউওয়াদ্দূনা-র অর্থ করেন ভালোবাসা আর বন্ধু ও সহায় হিসেবে গ্রহণ করা। বাগাভী বলেন, আল্লাহ জানিয়ে দিচ্ছেন, কুফরকারীদের প্রতি মুওয়াদ্দাহ মুমিনের ঈমান নষ্ট করে। সা'দীর পাঠে বাক্যটির কথা হলো, এ দুটি জিনিস একসঙ্গে থাকে না। বান্দা সত্যিকার মুমিন হয় তখনই, যখন সে ঈমানের দাবি মেনে চলে। যারা ঈমান ধরে রাখে, সে তাদের ভালোবাসে, তাদের পাশে থাকে। যারা ধরে রাখে না, তাদের প্রতি সে বিরাগ ও শত্রুতা রাখে, হোক সে তার সবচেয়ে কাছের মানুষ। তিনি যোগ করেন, শুধু মুখের দাবির ঈমানের জন্য তা সত্য প্রমাণ করার মতো দলিল লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Names the Reports Attach",
          "bn": "বর্ণনাগুলো যাঁদের নাম জোড়ে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that Sa'id ibn 'Abd al-'Aziz and others said the verse came down about Abu 'Ubayda ibn al-Jarrah when he killed his father at Badr. He links to it 'Umar's remark, when he left the succession to consultation, that had Abu 'Ubayda been alive he would have appointed him. Then, under the words it was said, he maps the verse's list onto names: fathers for Abu 'Ubayda; sons for Abu Bakr, who meant to kill his son 'Abd al-Rahman that day; brothers for Mus'ab ibn 'Umayr; kin for 'Umar, Hamza, 'Ali and 'Ubayda ibn al-Harith.",
            "bn": "ইবন কাসীর জানান, সাঈদ ইবন আব্দুল আযীয ও অন্যরা বলেছেন, আয়াতটি নাযিল হয়েছিল আবু উবাইদা ইবনুল জাররাহ (রাঃ)-কে নিয়ে, যখন তিনি বদরের দিন নিজের বাবাকে হত্যা করেন। এর সঙ্গে তিনি জোড়েন উমর (রাঃ)-এর একটি কথা। খিলাফতের বিষয় পরামর্শসভার হাতে ছেড়ে যাওয়ার সময় তিনি বলেছিলেন, আবু উবাইদা বেঁচে থাকলে তাঁকেই খলীফা বানাতাম। এরপর 'বলা হয়' কথাটি দিয়ে ইবন কাসীর আয়াতের তালিকাটি নামের সঙ্গে মেলান। বাবার কথা আবু উবাইদা (রাঃ)-র বেলায়। ছেলের কথা আবু বকর (রাঃ)-এর বেলায়, যিনি সেদিন ছেলে আব্দুর রহমানকে হত্যা করতে চেয়েছিলেন। ভাইয়ের কথা মুসআব ইবন উমাইর (রাঃ)-এর বেলায়। আর গোষ্ঠীর কথা উমর, হামযা, আলী ও উবাইদা ইবনুল হারিস (রাঃ)-এর বেলায়।"
          },
          {
            "en": "In Ibn Kathir's list Mus'ab killed his brother 'Ubayd ibn 'Umayr, 'Umar killed a relative, and Hamza, 'Ali and 'Ubayda killed 'Utba, Shayba and al-Walid ibn 'Utba, all at Badr, and he ends with: Allah knows best. Al-Baghawi gives a version through Muqatil ibn Hayyan, from Murra al-Hamdani, from Ibn Mas'ud. In it Abu 'Ubayda killed his father 'Abdullah ibn al-Jarrah at Uhud, Mus'ab killed his brother at Uhud, and the relative 'Umar killed at Badr is named as his maternal uncle, al-'As ibn Hisham ibn al-Mughira.",
            "bn": "ইবন কাসীরের তালিকায় মুসআব (রাঃ) হত্যা করেন ভাই উবাইদ ইবন উমাইরকে, উমর (রাঃ) হত্যা করেন এক আত্মীয়কে, আর হামযা, আলী ও উবাইদা (রাঃ) হত্যা করেন উতবা, শাইবা ও ওয়ালীদ ইবন উতবাকে। সবই বদরের দিন। শেষে তিনি বলেন: আল্লাহই ভালো জানেন। বাগাভী একটি বর্ণনা আনেন মুকাতিল ইবন হাইয়ান থেকে, তিনি মুররা আল-হামদানী থেকে, তিনি ইবন মাসউদ (রাঃ) থেকে। এ বর্ণনায় আবু উবাইদা (রাঃ) বাবা আব্দুল্লাহ ইবনুল জাররাহকে হত্যা করেন উহুদের দিন। মুসআব (রাঃ)-ও ভাইকে হত্যা করেন উহুদে। আর উমর (রাঃ) বদরে যে আত্মীয়কে হত্যা করেন, তাঁর নাম আসে মামা আস ইবন হিশাম ইবনুল মুগীরা হিসেবে।"
          },
          {
            "en": "The same chain in al-Baghawi has Abu Bakr challenge his son to single combat at Badr and ask to be in the first wave, and the Prophet ﷺ answering: matti'na bi-nafsika, let us keep enjoying your company, Abu Bakr. Al-Qurtubi gives the Abu 'Ubayda account from Ibn Mas'ud at Uhud, noting that Badr is also said, and adds that al-Jarrah kept placing himself in his son's path while Abu 'Ubayda kept turning aside, until he went for him. Ma'arif al-Qur'an retells this from al-Qurtubi, placing it at Uhud and calling the turning aside a mark of respect.",
            "bn": "বাগাভীর একই সনদে আছে, আবু বকর (রাঃ) বদরের দিন ছেলেকে দ্বন্দ্বযুদ্ধে ডাকেন এবং প্রথম দলে থাকার অনুমতি চান। নবী ﷺ জবাব দেন: মাত্তি'না বিনাফসিকা, হে আবু বকর, আমাদের তোমার সঙ্গ উপভোগ করতে দাও। কুরতুবী আবু উবাইদা (রাঃ)-র ঘটনাটি আনেন ইবন মাসউদ (রাঃ) থেকে, উহুদের দিনের বলে, আর জানান যে বদরের কথাও বলা হয়। তিনি যোগ করেন, জাররাহ বারবার ছেলের সামনে এসে দাঁড়াত আর আবু উবাইদা (রাঃ) বারবার সরে যেতেন। শেষে তিনি তার দিকে এগিয়ে যান। মাআরিফুল কুরআন কুরতুবী থেকে ঘটনাটি নতুন করে বলে, উহুদে স্থাপন করে, আর সরে যাওয়াটিকে বলে সম্মানের প্রকাশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Uhud, Badr, or Neither",
          "bn": "উহুদ, বদর, নাকি কোনোটিই নয়"
        },
        "p": [
          {
            "en": "Set side by side, the reports do not agree. Abu 'Ubayda's father died at Badr for Sa'id ibn 'Abd al-'Aziz in Ibn Kathir, and at Uhud in the report from Ibn Mas'ud that al-Baghawi and al-Qurtubi give. Al-Qurtubi then quotes al-Waqidi: that is what the people of al-Sham say, but he asked men of Banu al-Harith ibn Fihr, and they said the father died before Islam. Abu Bakr's son is 'Abd al-Rahman in Ibn Kathir and 'Abdullah in al-Qurtubi, who adds the words you are to me as hearing and sight. Mus'ab's brother falls at Badr in Ibn Kathir and al-Qurtubi, at Uhud in al-Baghawi.",
            "bn": "পাশাপাশি রাখলে বর্ণনাগুলো মেলে না। ইবন কাসীরে সাঈদ ইবন আব্দুল আযীযের মতে আবু উবাইদা (রাঃ)-র বাবা মারা যায় বদরে। বাগাভী ও কুরতুবী ইবন মাসউদ (রাঃ) থেকে যে বর্ণনা আনেন, তাতে মারা যায় উহুদে। এরপর কুরতুবী ওয়াকিদীর কথা উদ্ধৃত করেন: শামের লোকেরা এমনই বলে, কিন্তু তিনি বনু হারিস ইবন ফিহরের কয়েকজনকে জিজ্ঞেস করেছিলেন, তারা বলেছে ইসলামের আগেই তার বাবা মারা গিয়েছিল। আবু বকর (রাঃ)-এর ছেলের নাম ইবন কাসীরে আব্দুর রহমান, কুরতুবীতে আব্দুল্লাহ। কুরতুবী সেখানে নবী ﷺ-এর এ কথাও যোগ করেন: আমার কাছে তুমি কান ও চোখের মতো। মুসআব (রাঃ)-এর ভাই ইবন কাসীর ও কুরতুবীতে নিহত হয় বদরে, বাগাভীতে উহুদে।"
          },
          {
            "en": "A different occasion stands beside all of these. Al-Baghawi and al-Qurtubi both record, under it was said, that the verse came down about Hatib ibn Abi Balta'a when he wrote to the people of Makkah, al-Qurtubi adding that the letter concerned the Prophet's march in the year of the conquest; both defer the story to Surat al-Mumtahina. None of the fetched tafsirs attaches to this verse a hadith with a collector's grading. What they give are attributions to early authorities, several under it was said, and this article reports them as the commentators' reports and nothing firmer.",
            "bn": "এসবের পাশে দাঁড়িয়ে আছে সম্পূর্ণ আলাদা এক উপলক্ষ। বাগাভী ও কুরতুবী দুজনেই 'বলা হয়' দিয়ে উল্লেখ করেন, আয়াতটি নাযিল হয়েছিল হাতিব ইবন আবী বালতাআ (রাঃ)-কে নিয়ে, যখন তিনি মক্কাবাসীর কাছে চিঠি লিখেছিলেন। কুরতুবী যোগ করেন, চিঠিটি ছিল মক্কা বিজয়ের বছর নবী ﷺ-এর অভিযানের খবর নিয়ে। দুজনেই ঘটনাটির বিস্তারিত রেখে দেন সূরা মুমতাহিনার জন্য। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে সংকলকের মান-নির্ণয়সহ কোনো হাদীস জোড়েনি। তারা যা দেয় তা হলো প্রথম যুগের ব্যক্তিদের নামে বর্ণনা, যার কয়েকটি 'বলা হয়' দিয়ে। এ প্রবন্ধ সেগুলোকে তাফসীরকারদের বর্ণনা হিসেবেই উল্লেখ করে, এর চেয়ে বেশি দৃঢ় কিছু হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Rather, Be Gentle With Him",
          "bn": "বরং তার সঙ্গে কোমল থাকো"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his list with a report from al-Suddi that the words even if they were their fathers came down about 'Abdullah, son of 'Abdullah ibn Ubayy. He asked the Prophet ﷺ for what was left of his drink, hoping it would purify his father's heart, and carried it home. His father answered with a crude insult. The son came back angry and asked whether he was permitted to kill his father. The Prophet ﷺ replied: bal tarfuqu bihi wa tuhsinu ilayhi, rather, be gentle with him and treat him well. Ma'arif al-Qur'an, retelling it, says simply that he stopped him.",
            "bn": "কুরতুবী তাঁর তালিকা শুরু করেন সুদ্দীর একটি বর্ণনা দিয়ে। তাতে আছে, 'যদিও তারা তাদের বাবা হয়' অংশটি নাযিল হয়েছিল আব্দুল্লাহ ইবন আব্দুল্লাহ ইবন উবাই (রাঃ)-কে নিয়ে। তিনি নবী ﷺ-এর পান করা পানির অবশিষ্টটুকু চেয়ে নেন, এই আশায় যে এতে তাঁর বাবার অন্তর পবিত্র হবে। তা নিয়ে তিনি বাবার কাছে যান। বাবা জবাব দেয় কুৎসিত এক অপমান দিয়ে। ছেলে রেগে ফিরে আসেন এবং জানতে চান, বাবাকে হত্যার অনুমতি কি তাঁকে দেওয়া হবে না? নবী ﷺ বলেন: বাল তারফুকু বিহী ওয়া তুহসিনু ইলাইহি, বরং তার সঙ্গে কোমল থাকো, তার প্রতি সদাচার করো। মাআরিফুল কুরআন ঘটনাটি নতুন করে বলে শুধু এটুকু জানায় যে নবী ﷺ তাঁকে থামিয়ে দেন।"
          },
          {
            "en": "Next comes Ibn Jurayj, who begins with I was told: Abu Quhafa abused the Prophet ﷺ, and his son Abu Bakr struck him so hard that he fell on his face. When Abu Bakr told the Prophet ﷺ, he asked, did you do that? Do not go back to it. Abu Bakr swore that had a sword been near him he would have killed him. Ma'arif says only that the Prophet advised him not to do it again. In three of these reports, the drink, Badr and this slap, the Prophet's word holds the Companion back from his own relative.",
            "bn": "এরপর আসে ইবন জুরাইজের বর্ণনা, যা তিনি শুরু করেন 'আমাকে জানানো হয়েছে' বলে। আবু কুহাফা নবী ﷺ-কে গালি দেয়, আর তার ছেলে আবু বকর (রাঃ) তাকে এমন জোরে আঘাত করেন যে সে মুখ থুবড়ে পড়ে যায়। আবু বকর (রাঃ) নবী ﷺ-কে ঘটনাটি জানালে তিনি বলেন: তুমি কি এমন করেছ? আর কখনো এমন করো না। আবু বকর (রাঃ) কসম করে বলেন, তলোয়ার কাছে থাকলে তিনি তাকে হত্যাই করতেন। মাআরিফুল কুরআন শুধু জানায় যে নবী ﷺ তাঁকে আবার এমন না করার উপদেশ দেন। পানির ঘটনা, বদরের ঘটনা আর এই চড়ের ঘটনা, এ তিনটি বর্ণনাতেই নবী ﷺ-এর কথা সাহাবীকে নিজের আত্মীয়ের বিরুদ্ধে এগোতে দেয় না।"
          },
          {
            "en": "This needs saying plainly. The verse describes believers in the Prophet's lifetime, and the commentators attach it to what they report some of them did on a battlefield or in his presence. It licenses nothing against any living person or community: no harm to a parent, no shunning of a relative, and no naming of any present-day group as those who oppose Allah and His Messenger. None of the fetched tafsirs on this verse gives a ruling on how to treat relatives of another faith, and this article gives none either.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নবী ﷺ-এর জীবদ্দশার মুমিনদের বর্ণনা দেয়। তাফসীরকারেরা একে জোড়েন যুদ্ধের ময়দানে বা তাঁর সামনে কয়েকজন সাহাবীর কাজের বর্ণনার সঙ্গে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। বাবা-মায়ের ক্ষতি করার অনুমতি দেয় না, কোনো আত্মীয়কে বয়কট করার অনুমতি দেয় না, আজকের কোনো দলকে আল্লাহ ও তাঁর রসূলের বিরোধী বলে চিহ্নিত করার অনুমতিও দেয় না। ভিন্ন ধর্মের আত্মীয়দের সঙ্গে আচরণ নিয়ে সংগৃহীত কোনো তাফসীর এ আয়াতের অধীনে বিধান দেয়নি, এ প্রবন্ধও কোনো বিধান দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Far They Carried It",
          "bn": "আলেমরা কত দূর টেনেছেন"
        },
        "p": [
          {
            "en": "Some early scholars read the verse beyond the battlefield. Al-Qurtubi reports, through Ashhab, that Malik drew from it: do not sit with the Qadariyya, and hold them as enemies for Allah's sake. Al-Qurtubi adds that all people of injustice and aggression fall within that meaning. Ibn Kathir has Sufyan, and al-Qurtubi al-Thawri, saying that people held it came down about whoever keeps company with the ruler, and al-Qurtubi tells of 'Abd al-'Aziz ibn Abi Dawud, who met al-Mansur in the circuit of the Ka'ba, fled once he recognised him, and recited this verse.",
            "bn": "প্রথম যুগের কোনো কোনো আলেম আয়াতটিকে যুদ্ধের ময়দানের বাইরেও পড়েছেন। কুরতুবী আশহাবের মাধ্যমে জানান, ইমাম মালিক এ আয়াত থেকে বলেছেন: কাদারিয়াদের সঙ্গে বসো না, আল্লাহর জন্য তাদের সঙ্গে শত্রুতা রাখো। কুরতুবী যোগ করেন, অন্যায় ও সীমালঙ্ঘনে লিপ্ত সব মানুষই এ অর্থের ভেতরে পড়ে। ইবন কাসীরে সুফইয়ান আর কুরতুবীতে সাওরী বলেন, লোকেরা মনে করত আয়াতটি নাযিল হয়েছে শাসকের সঙ্গে ওঠাবসা করা মানুষদের নিয়ে। কুরতুবী আরও বলেন, আব্দুল আযীয ইবন আবী দাউদ তাওয়াফের সময় মানসূরের দেখা পান। চিনতে পেরেই তিনি সরে পড়েন আর এ আয়াত তিলাওয়াত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an marks where the line sits. Many jurists, it says, apply the rule to Muslims who transgress the Shari'ah or turn from it in practice: no muwalah, intimate friendship, with them. But muwasah, sympathy, mu'amalat, dealings, and mudarah, cordiality, are a different matter, to the degree of necessity. A prayer follows, given by Ibn Kathir from al-Hasan, who names no Companion: O Allah, give no wrongdoer a favour over me, for I found in what You revealed to me: la tajidu qawman. Ma'arif, citing al-Qurtubi, explains that kindness binds a noble person to repay it with love.",
            "bn": "সীমারেখাটা কোথায়, মাআরিফুল কুরআন তা দেখিয়ে দেয়। তার ভাষ্যে, অনেক ফকীহ এ বিধান সেই মুসলমানদের বেলায়ও খাটান, যারা শরীয়ত লঙ্ঘন করে বা বাস্তব জীবনে তা থেকে মুখ ফিরিয়ে নেয়: তাদের সঙ্গে মুওয়ালাত, অর্থাৎ অন্তরঙ্গ বন্ধুত্ব নয়। তবে মুওয়াসাত বা সহমর্মিতা, মুআমালাত বা লেনদেন, আর মুদারাত বা ভদ্র ব্যবহার আলাদা ব্যাপার, প্রয়োজনের মাত্রা পর্যন্ত। এরপর আসে একটি দোয়া, যা ইবন কাসীর আনেন হাসান থেকে, আর হাসান কোনো সাহাবীর নাম নেন না: হে আল্লাহ, কোনো পাপাচারীর অনুগ্রহ যেন আমার উপর না থাকে, কারণ আমার প্রতি আপনার নাযিল করা বাণীতে আমি পেয়েছি, লা তাজিদু কাওমান। কুরতুবীর বরাতে মাআরিফুল কুরআনের ব্যাখ্যা হলো, দয়া পেলে ভদ্র মানুষ ভালোবাসা দিয়ে তা শোধ করতে নিজেকে বাধ্য মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith Inscribed, Strength Given",
          "bn": "অন্তরে গাঁথা ঈমান, পাশে শক্তি"
        },
        "p": [
          {
            "en": "Kataba fi qulubihim al-iman. At-Tabari takes it as He decreed faith for their hearts, with fi standing for li. As-Sa'di: He traced it, fixed it and planted it, so that it does not shake. Ibn Kathir: He wrote happiness for them and made faith beautiful to their inner sight. Al-Qurtubi lists created, fixed, from al-Rabi' ibn Anas, made, and gathered, from katiba, a massed troop, so that they are not people who believe in part and reject part. He prefers the common reading kataba to the passive kutiba of Abu al-'Aliya and Zirr ibn Hubaysh, since wa ayyadahum follows.",
            "bn": "কাতাবা ফী কুলূবিহিমুল ঈমান। তাবারী এর অর্থ নেন, তিনি তাদের অন্তরের জন্য ঈমানের ফয়সালা করে দিয়েছেন। এখানে 'ফী' বসেছে 'লি'-র অর্থে। সা'দী বলেন, তিনি ঈমানকে এঁকে দিয়েছেন, মজবুত করেছেন, রোপণ করেছেন, তাই তা টলে না। ইবন কাসীর বলেন, তিনি তাদের জন্য সৌভাগ্য লিখে দিয়েছেন এবং তাদের অন্তর্দৃষ্টিতে ঈমানকে সুন্দর করে তুলেছেন। কুরতুবী কয়েকটি অর্থ সাজান: সৃষ্টি করেছেন; মজবুত করেছেন, রবী' ইবন আনাস থেকে; বানিয়ে দিয়েছেন; আর জড়ো করেছেন, কাতীবা বা সংঘবদ্ধ বাহিনী শব্দ থেকে। অর্থাৎ তারা কিছু মানে আর কিছু অস্বীকার করে, এমন লোক নয়। আবুল আলিয়া ও যির ইবন হুবাইশ পড়েছেন কর্মবাচ্যে, কুতিবা। কুরতুবী সাধারণ পাঠ কাতাবা-কেই ভালো বলেন, কারণ পরেই আছে ওয়া আইয়াদাহুম।"
          },
          {
            "en": "Wa ayyadahum bi-ruhin minhu: and He supported them with a ruh from Him. The commentators do not settle on one meaning. At-Tabari: proof, light and guidance from Him. The Muyassar: His help and backing against their enemy in this world. As-Sa'di: His revelation, aid and supply. Ibn Kathir has Ibn 'Abbas: He strengthened them. Al-Baghawi gathers more: help, al-Hasan saying it is called ruh because their cause lives by it; faith, from al-Suddi; the Qur'an and its proof, from al-Rabi', citing 42:52; mercy; and Jibril (AS). Al-Qurtubi lists much the same. Ma'arif al-Qur'an gives a light entering the heart, or the Qur'an and its arguments.",
            "bn": "ওয়া আইয়াদাহুম বিরূহিম মিনহু: আর তিনি নিজের পক্ষ থেকে এক রূহ দিয়ে তাদের শক্তি জুগিয়েছেন। তাফসীরকারেরা একটি অর্থে স্থির হন না। তাবারীর মতে, তাঁর পক্ষ থেকে দলিল, নূর ও হিদায়াত। মুয়াসসারের মতে, দুনিয়ায় শত্রুর বিরুদ্ধে তাঁর সাহায্য ও সমর্থন। সা'দীর মতে, তাঁর ওহী, সহায়তা ও জোগান। ইবন কাসীর আনেন ইবন আব্বাস (রাঃ)-এর কথা: তিনি তাদের শক্তিশালী করেছেন। বাগাভী আরও অর্থ জড়ো করেন। এক অর্থ সাহায্য, আর হাসান বলেন, একে রূহ বলা হয়েছে কারণ এতেই তাদের কাজ প্রাণ পায়। আরেক অর্থ ঈমান, সুদ্দী থেকে। আরেক অর্থ কুরআন ও তার দলিল, রবী' থেকে, ৪২:৫২ আয়াতের উদ্ধৃতিসহ। আরও আছে রহমত, আর জিবরীল (আঃ)। কুরতুবীর তালিকাও প্রায় একই। মাআরিফুল কুরআন বলে, অন্তরে প্রবেশ করা এক নূর, অথবা কুরআন ও তার যুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Pleasure That Runs Both Ways",
          "bn": "দুই দিক থেকে সন্তুষ্টি"
        },
        "p": [
          {
            "en": "Radiya Allahu 'anhum wa radu 'anhu. At-Tabari: Allah is pleased with them for their obedience to Him in this world, and they are pleased with Him in the next for His bringing them into the Garden. Al-Qurtubi: He accepted their deeds, and they rejoiced in what He gave them. As-Sa'di: His pleasure settles on them and He is never displeased with them again. Ibn Kathir calls the phrase a beautiful secret: because they grew angry with their kin and clans for Allah's sake, Allah gave them His pleasure in exchange, and made them pleased with Him.",
            "bn": "রাদিয়াল্লাহু আনহুম ওয়া রাদূ আনহু। তাবারী বলেন, দুনিয়ায় তাঁর আনুগত্যের কারণে আল্লাহ তাদের উপর সন্তুষ্ট, আর আখিরাতে তাদের জান্নাতে প্রবেশ করানোর কারণে তারা তাঁর উপর সন্তুষ্ট। কুরতুবীর মতে, তিনি তাদের আমল কবুল করেছেন, আর তিনি যা দিয়েছেন তাতে তারা খুশি হয়েছে। সা'দী বলেন, তাঁর সন্তুষ্টি তাদের উপর নেমে আসে, এরপর তিনি আর কখনো তাদের উপর অসন্তুষ্ট হন না। ইবন কাসীর এ বাক্যে দেখেন এক চমৎকার রহস্য। আল্লাহর জন্য তারা নিজেদের আত্মীয় ও গোষ্ঠীর উপর রাগ করেছিল। বিনিময়ে আল্লাহ তাদের দিলেন নিজের সন্তুষ্টি, আর তাদেরও নিজের উপর সন্তুষ্ট করে দিলেন।"
          },
          {
            "en": "Ula'ika hizbu Allah. At-Tabari glosses it as Allah's troops and His allies, and al-muflihun as those who endure and succeed in reaching what they sought. Ibn Kathir: His servants and the people of His honour, set against the party of Satan in 58:19. The Muyassar: His allies. Al-Qurtubi closes with a report Sa'id ibn Abi Sa'id al-Jurjani gives from some of his teachers, in which Dawud (AS) is told who Allah's party are: lowered eyes, pure hearts, clean hands. The title is given by qualities. It is the name of no present-day party or movement, and it licenses nothing for or against any.",
            "bn": "উলাইকা হিযবুল্লাহ। তাবারী এর অর্থ করেন আল্লাহর বাহিনী ও তাঁর বন্ধু, আর আল-মুফলিহূন বলতে বোঝান তাদের, যারা টিকে থাকে এবং যা চেয়েছিল তা পেয়ে সফল হয়। ইবন কাসীর বলেন, তাঁর বান্দা ও তাঁর সম্মানের যোগ্য মানুষ, যাদের দাঁড় করানো হয়েছে ৫৮:১৯ আয়াতের শয়তানের দলের বিপরীতে। মুয়াসসার বলে, তাঁর বন্ধুরা। কুরতুবী শেষ করেন সাঈদ ইবন আবী সাঈদ আল-জুরজানীর একটি বর্ণনা দিয়ে, যা তিনি তাঁর কয়েকজন শিক্ষক থেকে নেন। তাতে দাউদ (আঃ)-কে জানানো হয় আল্লাহর দল কারা: যাদের চোখ নত, অন্তর পবিত্র, হাত পরিষ্কার। উপাধিটি দেওয়া হয়েছে গুণ দেখে। আজকের কোনো দল বা আন্দোলনের নাম এটি নয়, কারও পক্ষে বা বিপক্ষে কোনো অনুমতিও দেয় না।"
          }
        ]
      }
    ]
  }
});
