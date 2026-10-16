/**
 * Tadabbur long-form articles — surah 67.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "67:1-2": {
    "sections": [
      {
        "h": {
          "en": "The Hand That Holds the Kingdom",
          "bn": "রাজত্ব যাঁর হাতে"
        },
        "p": [
          {
            "en": "Surah al-Mulk opens with tabaraka, a word of overflowing blessedness that the Quran uses only of Allah. Blessed is He in whose hand is al-mulk — not one kingdom among many, but dominion itself: ownership and command over everything that exists. The phrase in His hand places the whole of it under His disposal alone, and the clause that follows removes every limit: He is capable over all things. Nothing in the opening is shared out, delegated or negotiable.",
            "bn": "সূরা আল-মুলক শুরু হয় 'তাবারাকা' দিয়ে। শব্দটিতে উপচে পড়া বরকতের ভাব, আর কুরআন এ শব্দ কেবল আল্লাহর বেলাতেই বলে। বরকতময় তিনি, যাঁর হাতে আল-মুলক। এ মুলক অনেক রাজ্যের মধ্যে একটি রাজ্য নয়, খোদ রাজত্ব: যা কিছু আছে, সবকিছুর মালিকানা আর হুকুম। 'তাঁর হাতে' কথাটি পুরোটাই একমাত্র তাঁর এখতিয়ারে রাখে, আর পরের অংশ সব সীমা তুলে দেয়: তিনি সবকিছুর ওপর ক্ষমতাবান। এই শুরুতে কোনো কিছু ভাগ করা নেই, কারও হাতে ছেড়ে দেওয়া নেই, দর-কষাকষিরও কিছু নেই।"
          },
          {
            "en": "Read slowly, the sentence reorders a person's map of power. Every throne, market, illness and opportunity sits inside a dominion held by one hand, and the Quran says elsewhere that He gives dominion to whom He wills and strips it from whom He wills, as 3:26 puts it. Whoever a matter actually depends on is the one worth turning to, and this verse names Him before anything else in the surah is said.",
            "bn": "ধীরে পড়লে বাক্যটি ক্ষমতা নিয়ে মানুষের পুরো ধারণাটাই নতুন করে সাজিয়ে দেয়। প্রতিটি সিংহাসন, বাজার, অসুখ আর সুযোগ এমন এক রাজত্বের ভেতরে, যা একই হাতে ধরা। কুরআন অন্যত্রও বলে, তিনি যাকে চান রাজত্ব দেন, যার কাছ থেকে চান কেড়ে নেন; ৩:২৬ আয়াতে এ কথাই আছে। কোনো বিষয় আসলে যাঁর ওপর নির্ভর করে, ফিরতে হয় তাঁরই দিকে। আর সূরার অন্য কোনো কথার আগে এই আয়াত তাঁরই নাম নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Death Created, and Named First",
          "bn": "মৃত্যুর সৃষ্টি, আর তার নাম আগে"
        },
        "p": [
          {
            "en": "He who created death and life. Two details stop the attentive reader. First, death is created — it is not a mere absence or a failure of life, but something Allah made with intent, which means it arrives by design and on schedule, not by accident. Second, death is named before life. The commentators offer more than one reason, among them that nothing awakens a heart and drives it to act like the remembrance of death standing at the end of every plan.",
            "bn": "যিনি মৃত্যু ও জীবন সৃষ্টি করেছেন। মনোযোগী পাঠক এখানে দুটি জিনিসে থমকে দাঁড়ান। প্রথমত, মৃত্যুও আল্লাহর সৃষ্টি। তা নিছক কিছু না-থাকা বা জীবনের ব্যর্থতা নয়; আল্লাহ উদ্দেশ্য নিয়েই তা বানিয়েছেন। তাই মৃত্যু আসে পরিকল্পনামতো, নির্ধারিত সময়ে, দুর্ঘটনায় নয়। দ্বিতীয়ত, জীবনের আগে মৃত্যুর নাম এসেছে। মুফাসসিরগণ এর একাধিক কারণ বলেছেন। তার একটি হলো: প্রতিটি পরিকল্পনার শেষ মাথায় দাঁড়িয়ে থাকা মৃত্যুর স্মরণ হৃদয়কে যেভাবে জাগিয়ে তোলে আর আমলের দিকে ঠেলে দেয়, তেমন আর কিছুই পারে না।"
          },
          {
            "en": "Then comes the purpose clause: to test you as to which of you is best in deed. Life is not explained here as a reward, a punishment or an accident; it is an examination hall. A test implies an examiner who watches, a standard that is fixed, and a result that will be announced. That single clause is the surah's answer to the question every human being eventually asks about why any of this exists.",
            "bn": "এরপর আসে উদ্দেশ্যের কথা: তোমাদের পরীক্ষা করার জন্য, কে তোমাদের মধ্যে আমলে সবচেয়ে উত্তম। জীবনকে এখানে পুরস্কার, শাস্তি বা দুর্ঘটনা বলা হয়নি; জীবন এক পরীক্ষার হল। পরীক্ষা মানেই একজন পরীক্ষক আছেন, যিনি দেখছেন; একটা মানদণ্ড আছে, যা বদলায় না; আর একটা ফল আছে, যা একদিন ঘোষণা হবে। এসব কেন আছে, এ প্রশ্ন প্রত্যেক মানুষ কোনো না কোনো দিন করে। এই এক বাক্যাংশই সে প্রশ্নের প্রতি সূরার জবাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Best in Deed, Not Most",
          "bn": "উত্তম আমল, বেশি আমল নয়"
        },
        "p": [
          {
            "en": "The wording is ahsanu amala, best in deed — not akthara amala, most in deed. The early scholar Fudayl ibn Iyad explained best as the most sincere and the most correct: a deed done sincerely for Allah but not according to His guidance is not accepted, and a deed done correctly but for other than Allah is not accepted, until it is both. The verse grades quality, and quality has those two components.",
            "bn": "আয়াতের শব্দ 'আহসানু আমালা', আমলে সবচেয়ে উত্তম। 'আকসারা আমালা', সবচেয়ে বেশি আমল, বলা হয়নি। প্রথম যুগের আলিম ফুদাইল ইবনে ইয়াদ 'সবচেয়ে উত্তম'-এর ব্যাখ্যা দিয়েছেন: সবচেয়ে বেশি ইখলাসপূর্ণ আর সবচেয়ে বেশি সঠিক। কোনো আমল যদি আল্লাহর জন্য ইখলাসের সঙ্গে করা হয়, কিন্তু তাঁর দেখানো পথে না হয়, তা কবুল হয় না। আবার সঠিক পদ্ধতিতে হলেও যদি আল্লাহ ছাড়া অন্য কারও জন্য হয়, তা-ও কবুল হয় না। দুটো একসঙ্গে মিললে তবেই কবুল। আয়াতটি আমলের মান যাচাই করে, আর সেই মানের উপাদান এই দুটিই।"
          },
          {
            "en": "The same test formula appears twice more in the Quran. In 11:7 the creation of the heavens and the earth is for this trial of who is best in deed, and in 18:7 everything beautiful on the earth is called adornment placed there for the same examination. Wealth, ability and time are exam materials, not prizes. The question the verses keep asking is not how much passed through your hands but what you did with it.",
            "bn": "পরীক্ষার এই একই কথা কুরআনে আরও দুবার এসেছে। ১১:৭ আয়াতে আসমান ও যমীনের সৃষ্টিও এই পরীক্ষার জন্য: কে আমলে সবচেয়ে উত্তম। আর ১৮:৭ আয়াতে যমীনের ওপরের সব সৌন্দর্যকে বলা হয়েছে সাজসজ্জা, যা রাখা হয়েছে একই পরীক্ষার জন্য। ধন-সম্পদ, যোগ্যতা আর সময় পরীক্ষার উপকরণ, পুরস্কার নয়। আয়াতগুলো বারবার যে প্রশ্ন করে, তা এই নয় যে আপনার হাত দিয়ে কত কিছু গেল; প্রশ্ন হলো, তা দিয়ে আপনি কী করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Mighty, the Forgiving",
          "bn": "পরাক্রমশালী, ক্ষমাশীল"
        },
        "p": [
          {
            "en": "The verse seals with two names side by side: al-Aziz, the Mighty whose will cannot be resisted, and al-Ghafur, the Forgiving. The pairing is deliberate. A test set by the Mighty cannot be dodged, appealed against or outwitted, so the name warns. But a test set by the Forgiving expects that the examinee will stumble, and keeps a door open for the one who returns, so the same ending comforts.",
            "bn": "আয়াতটি শেষ হয় পাশাপাশি দুটি নামে: আল-আযীয, মহাপরাক্রমশালী, যাঁর ইচ্ছা কেউ ঠেকাতে পারে না; আর আল-গাফূর, ক্ষমাশীল। জোড়াটা ভেবেচিন্তেই রাখা। পরাক্রমশালী যে পরীক্ষা নেন, তা এড়ানো যায় না, তার বিরুদ্ধে আপিল চলে না, চালাকি করে পার পাওয়াও যায় না; তাই নামটি সতর্ক করে। আবার ক্ষমাশীল যে পরীক্ষা নেন, তাতে ধরেই নেওয়া আছে যে পরীক্ষার্থী হোঁচট খাবে, আর যে ফিরে আসে তার জন্য দরজা খোলা থাকে; তাই একই সমাপ্তি সান্ত্বনাও দেয়।"
          },
          {
            "en": "This is the Quran's habitual balance between fear and hope. The One who announces in 39:53 that He forgives all sins for those who turn back is the same One who will read out the results of the test of life. Neither name cancels the other. A believer works carefully because the Examiner is Mighty, and keeps working after every failure because the Examiner is Forgiving.",
            "bn": "ভয় আর আশার মাঝে কুরআনের এটাই চিরচেনা ভারসাম্য। যিনি ৩৯:৫৩ আয়াতে ঘোষণা দেন, যারা ফিরে আসে তাদের সব গুনাহ তিনি মাফ করেন, জীবনের পরীক্ষার ফলও তিনিই পড়ে শোনাবেন। কোনো নাম অন্যটিকে বাতিল করে না। মুমিন সাবধানে আমল করে, কারণ পরীক্ষক মহাপরাক্রমশালী; আর প্রতিবার ব্যর্থ হওয়ার পরও আমল চালিয়ে যায়, কারণ পরীক্ষক ক্ষমাশীল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Surah That Pleads for Its Companion",
          "bn": "যে সূরা তার সঙ্গীর জন্য সুপারিশ করে"
        },
        "p": [
          {
            "en": "The Prophet ﷺ said that a surah of thirty verses interceded for a man until he was forgiven, and named it: Blessed is He in whose hand is the dominion. The report is in the collection of at-Tirmidhi and others. It is also reported that the Prophet ﷺ would recite this surah before sleeping. The surah defends the one who keeps its company — and keeping its company means letting its opening verses set the terms of the day.",
            "bn": "নবী ﷺ বলেছেন, ত্রিশ আয়াতের একটি সূরা এক ব্যক্তির জন্য সুপারিশ করতে থাকে, শেষে তাকে মাফ করে দেওয়া হয়। সূরাটির নামও তিনি বলেছেন: বরকতময় তিনি, যাঁর হাতে রাজত্ব। বর্ণনাটি তিরমিযী ও অন্যান্য সংকলনে আছে। এটাও বর্ণিত আছে যে নবী ﷺ ঘুমানোর আগে এই সূরা পড়তেন। যে এই সূরার সঙ্গ ধরে রাখে, সূরাটি তার পক্ষে দাঁড়ায়। আর সঙ্গ ধরে রাখা মানে, দিনটা কীভাবে কাটবে তা এর শুরুর আয়াতগুলোকে ঠিক করে দিতে দেওয়া।"
          },
          {
            "en": "Living these two verses means measuring days by quality rather than volume. Before a task, the two questions of Fudayl apply: is this for Allah, and is it done the way He taught? A small deed that passes both tests outweighs a large one that fails either. And when the day ends with shortfalls, the closing names take over: answerable to the Mighty, hopeful in the Forgiving, and back at work tomorrow.",
            "bn": "এই দুই আয়াত নিয়ে বাঁচা মানে দিনকে পরিমাণ দিয়ে নয়, মান দিয়ে মাপা। কোনো কাজের আগে ফুদাইলের দুটি প্রশ্ন খাটে: এটা কি আল্লাহর জন্য? আর এটা কি তাঁর শেখানো পথে হচ্ছে? যে ছোট আমল দুই পরীক্ষাতেই পাশ করে, তা সেই বড় আমলের চেয়ে ভারী, যা যেকোনো একটিতে আটকে যায়। আর দিন শেষে ঘাটতি থেকে গেলে আয়াতের শেষ দুই নাম হাল ধরে: মহাপরাক্রমশালীর কাছে জবাবদিহি, ক্ষমাশীলের কাছে আশা, আর কাল আবার কাজে ফেরা।"
          }
        ]
      }
    ]
  },
  "67:3-4": {
    "sections": [
      {
        "h": {
          "en": "What the Looking Is For",
          "bn": "এই দেখা কীসের জন্য"
        },
        "p": [
          {
            "en": "Surah al-Mulk opens on dominion and then on a purpose. 67:2 says He created death and life to test you as to which of you is best in deed. Ibn Kathir points out what is not said: not which of you does the most deeds, but ahsanu amala, best in deed. Quality is the criterion, and the very next verse turns your eyes to a piece of work with no defect in it.",
            "bn": "সূরা আল-মুলক শুরু হয় রাজত্বের কথা দিয়ে, তারপর আসে একটি উদ্দেশ্যের কথা। ৬৭:২ আয়াত বলে, তিনি মৃত্যু ও জীবন সৃষ্টি করেছেন তোমাদের পরীক্ষা করার জন্য, কে তোমাদের মধ্যে আমলে উত্তম। ইবনে কাসীর দেখিয়ে দেন, কী বলা হয়নি। বলা হয়নি, তোমাদের মধ্যে কে সবচেয়ে বেশি আমল করে; বলা হয়েছে 'আহসানু আমালা', আমলে উত্তম। মাপকাঠি তাহলে মান। আর ঠিক পরের আয়াতই আপনার চোখ ফিরিয়ে দেয় এমন এক কাজের দিকে, যাতে কোনো খুঁত নেই।"
          },
          {
            "en": "So the sequence matters. The One who is grading the quality of your work is introduced first as the One whose own work you are invited to inspect for faults. The invitation is not decorative. It is an evidential move: look at what He made, and then reconsider what He has said about why He made you.",
            "bn": "তাই ক্রমটা গুরুত্বপূর্ণ। যিনি আপনার কাজের মান যাচাই করছেন, তাঁর পরিচয় আগে আসে এভাবে: তাঁরই কাজে খুঁত খুঁজে দেখতে আপনাকে ডাকা হচ্ছে। এ ডাক শুধু শোভা বাড়ানোর জন্য নয়, এ এক প্রমাণ পেশ করা। তিনি যা বানিয়েছেন তা দেখুন, তারপর আপনাকে কেন বানিয়েছেন সে বিষয়ে তিনি যা বলেছেন, তা আবার ভেবে দেখুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Seven, in Layers",
          "bn": "স্তরে স্তরে সাত আসমান"
        },
        "p": [
          {
            "en": "Alladhi khalaqa sab'a samawatin tibaqa. Tibaq describes them as set one above another, matched layer upon layer. The mufassirun differ over whether the seven touch or are separated by space between them, and Ibn Kathir prefers the second, citing what is established in the reports of the Isra'. The verse itself does not settle the question, and a reader is not obliged to settle it either.",
            "bn": "আল্লাযী খালাকা সাব'আ সামাওয়াতিন তিবাকা। 'তিবাক' মানে একটির ওপর আরেকটি, স্তরে স্তরে মিলিয়ে বসানো। সাত আসমান পরস্পর লেগে আছে, নাকি মাঝে ফাঁকা জায়গা আছে, এ নিয়ে মুফাসসিরগণের মতভেদ আছে। ইবনে কাসীর দ্বিতীয় মতটিকে প্রাধান্য দেন, আর এর পক্ষে ইসরার বর্ণনাগুলোতে যা প্রমাণিত, তার উল্লেখ করেন। আয়াত নিজে প্রশ্নটির মীমাংসা করে না, পাঠকেরও তা মীমাংসা করার দায় নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Tafawut in What ar-Rahman Made",
          "bn": "আর-রাহমানের সৃষ্টিতে কোনো 'তাফাউত' নেই"
        },
        "p": [
          {
            "en": "Ma tara fi khalqi'r-Rahmani min tafawut. Tafawut comes from a root meaning to miss or to fall out of step; it names disparity, parts that do not match, proportions that fail one another. Ibn Kathir unpacks the negation as no disunion, no conflict, no inconsistency, no deficiency, no flaw. And notice the name chosen. Not the Powerful, not the Maker, but ar-Rahman: the flawlessness is presented as mercy.",
            "bn": "মা তারা ফী খালকির-রাহমানি মিন তাফাউত। 'তাফাউত' শব্দের মূল ধাতুর অর্থ ফসকে যাওয়া বা তাল কেটে যাওয়া। শব্দটি বোঝায় বেমিল: অংশে অংশে মিল নেই, এক মাপের সঙ্গে আরেক মাপ খাপ খায় না। ইবনে কাসীর এই 'নেই'-কে খুলে বলেন: কোনো বিচ্ছিন্নতা নেই, বিরোধ নেই, অসংগতি নেই, ঘাটতি নেই, খুঁত নেই। এবার নামটি লক্ষ করুন। মহাশক্তিমান নয়, স্রষ্টা নয়, বলা হয়েছে আর-রাহমান। অর্থাৎ এই নিখুঁততা তাঁর রহমতেরই প্রকাশ।"
          },
          {
            "en": "Then the first command: fa-rji' al-basar, so return the gaze; hal tara min futur? Futur is cracks — so Ibn Abbas, Mujahid, ad-Dahhak and ath-Thawri; as-Suddi reads it as tears, Qatadah as defects. The question has the form of a genuine question, and its answer has already been supplied by the clause immediately before it. You are being sent out to verify a statement, not to discover one.",
            "bn": "এরপর প্রথম হুকুম: ফারজিয়িল বাসার, অতএব দৃষ্টি ফিরিয়ে দেখো; হাল তারা মিন ফুতূর, কোনো ফাটল দেখতে পাও কি? ইবনে আব্বাস, মুজাহিদ, দাহহাক ও সাওরীর মতে 'ফুতূর' মানে ফাটল; আস-সুদ্দীর মতে ছেঁড়া, কাতাদাহর মতে খুঁত। প্রশ্নটা দেখতে সত্যিকারের প্রশ্নের মতো, অথচ এর উত্তর ঠিক আগের বাক্যাংশেই দেওয়া আছে। আপনাকে পাঠানো হচ্ছে একটি কথা যাচাই করতে, নতুন কিছু আবিষ্কার করতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Look Again, and Again",
          "bn": "আবার দেখো, আরও একবার"
        },
        "p": [
          {
            "en": "Thumma'rji' al-basara karratayn. Qatadah reads karratayn plainly as twice. Ibn Kathir takes the sense further: however continuously you look, and however many times, the result will be the same. The dual in Arabic can stand for sheer repetition rather than an exact count, and both readings leave the instruction where it is — go back and look once more, and then once more after that.",
            "bn": "সুম্মারজিয়িল বাসারা কাররাতাইন। কাতাদাহ 'কাররাতাইন'-কে সরল অর্থে নেন: দুবার। ইবনে কাসীর অর্থটা আরও বাড়িয়ে বলেন: যতই একটানা দেখো, যতবারই দেখো, ফল একই থাকবে। আরবিতে দ্বিবচন অনেক সময় নির্দিষ্ট সংখ্যা না বুঝিয়ে শুধু বারবার করা বোঝায়। দুই ব্যাখ্যাতেই হুকুম একই থাকে: ফিরে গিয়ে আরেকবার দেখো, তারপর আরও একবার।"
          },
          {
            "en": "This is the only kind of challenge a claim of perfection can honestly issue. It does not ask you to accept a description; it hands you the test itself, sets no limit on how long you may run it, and states the outcome in advance. Whoever invites that sort of inspection into his own work is either reckless or right, and the verse leaves no doubt which of the two it takes itself to be.",
            "bn": "নিখুঁত হওয়ার দাবি সৎভাবে কেবল এ ধরনের চ্যালেঞ্জই দিতে পারে। আয়াতটি আপনাকে কোনো বর্ণনা মেনে নিতে বলে না। পরীক্ষাটাই আপনার হাতে তুলে দেয়, কতক্ষণ চালাবেন তার কোনো সীমা বাঁধে না, আর ফলাফল আগেভাগেই বলে দেয়। নিজের কাজকে যে এভাবে যাচাই করতে ডাকে, সে হয় বেপরোয়া, নয়তো সত্যিই ঠিক। আয়াতটি নিজেকে কোনটি মনে করে, তাতে কোনো সন্দেহ রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Khasi'an, and Worn Out",
          "bn": "'খাসিআন', আর ক্লান্ত"
        },
        "p": [
          {
            "en": "Yanqalib ilayka al-basaru khasi'an wa huwa hasir. Two states, not one. Khasi' is the abased, driven-off condition of something turned away: 2:65 uses it of those told to be apes, despised, and 23:108 has ikhsa'u fiha said to the people of the Fire. Ibn Abbas glosses it here as humiliated, Mujahid and Qatadah as despised. The gaze comes back having been refused.",
            "bn": "ইয়ানকালিব ইলাইকাল বাসারু খাসিআন ওয়া হুওয়া হাসীর। এখানে অবস্থা দুটি, একটি নয়। 'খাসি' হলো তাড়িয়ে দেওয়া, ফিরিয়ে দেওয়া কোনো কিছুর লাঞ্ছিত দশা। ২:৬৫ আয়াতে শব্দটি এসেছে তাদের বেলায়, যাদের বলা হয়েছিল ঘৃণিত বানর হয়ে যাও; আর ২৩:১০৮ আয়াতে জাহান্নামিদের বলা হয় 'ইখসাঊ ফীহা'। ইবনে আব্বাস এখানে এর অর্থ করেন 'লাঞ্ছিত', মুজাহিদ ও কাতাদাহ 'ঘৃণিত'। দৃষ্টি ফিরে আসে প্রত্যাখ্যাত হয়ে।"
          },
          {
            "en": "Hasir is the second, and it is a different failure. Ibn Abbas reads it as exhausted; Mujahid, Qatadah and as-Suddi as the broken-down fatigue that comes of weakness, the word used of a mount worn out by travelling. So the search ends twice over: turned away in its verdict, and spent in its strength. And what returns humiliated is al-basar, the sight itself, not the man who sent it out.",
            "bn": "দ্বিতীয় অবস্থা 'হাসীর', আর এটা আরেক রকম ব্যর্থতা। ইবনে আব্বাস এর অর্থ করেন 'ক্লান্ত'; মুজাহিদ, কাতাদাহ ও আস-সুদ্দীর মতে দুর্বলতা থেকে আসা ভেঙে পড়া অবসাদ। পথ চলতে চলতে নিঃশেষ হয়ে যাওয়া বাহনকে এই শব্দেই বলা হয়। তাহলে খোঁজাটা শেষ হয় দুইভাবে: রায়ে প্রত্যাখ্যাত, আর শক্তিতে নিঃশেষ। আর যা লাঞ্ছিত হয়ে ফেরে, তা 'আল-বাসার', দৃষ্টি নিজেই; যে মানুষ তাকে পাঠিয়েছিল, সে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Doing What the Verse Says",
          "bn": "আয়াত যা বলে, তা করে দেখা"
        },
        "p": [
          {
            "en": "The verse is an instruction and it can be obeyed literally. Go outside, at night if you can, and look for the flaw. Ibn Kathir points out that once the deficiency has been denied, 67:5 goes on to the beauty — and We adorned the nearest heaven with lamps. The order is deliberate: first there is nothing wrong with it, and only then is it beautiful.",
            "bn": "আয়াতটি একটি হুকুম, আর তা অক্ষরে অক্ষরে পালন করা যায়। বাইরে বের হোন, পারলে রাতে, আর খুঁতটা খুঁজে দেখুন। ইবনে কাসীর দেখিয়ে দেন, খুঁত নেই বলার পরই ৬৭:৫ আয়াত সৌন্দর্যের কথায় যায়: আর আমি নিকটতম আসমানকে প্রদীপমালা দিয়ে সাজিয়েছি। ক্রমটা ভেবেচিন্তে সাজানো: আগে বলা হলো তাতে কোনো খুঁত নেই, তারপরই বলা হলো তা সুন্দর।"
          },
          {
            "en": "The habit it trains is worth carrying inward. A gaze that hunts for faults is not condemned by this verse; it is sent to the one place where it is guaranteed to fail, and by failing there it learns its own size. Afterwards the search that does have something to find is the one 67:2 named, and it runs through your own deeds rather than through the sky.",
            "bn": "এ আয়াত যে অভ্যাস গড়ে, তা নিজের ভেতরেও নিয়ে যাওয়ার মতো। খুঁত খুঁজে বেড়ানো দৃষ্টিকে এ আয়াত নিন্দা করে না। বরং তাকে পাঠায় ঠিক সেই জায়গায়, যেখানে তার ব্যর্থ হওয়া নিশ্চিত; আর সেখানে ব্যর্থ হয়েই সে নিজের মাপ বুঝে নেয়। এরপর যে খোঁজে সত্যিই কিছু পাওয়ার আছে, তার কথা ৬৭:২ আয়াতই বলেছে। সে খোঁজ চলে আসমানে নয়, আপনার নিজের আমলের ভেতরে।"
          }
        ]
      }
    ]
  },
  "67:8": {
    "sections": [
      {
        "h": {
          "en": "After the Lamps, the Blaze",
          "bn": "প্রদীপের পরে জ্বলন্ত আগুন"
        },
        "p": [
          {
            "en": "Surat al-Mulk opens by pointing at what can be seen: seven heavens in layers, no flaw in what ar-Rahman made, and in 67:5 the nearest heaven adorned with lamps. Ma'arif al-Qur'an marks the turn that follows. Up to this point, it says, the evidence of Allah's knowledge and power was drawn from the kinds of creation. From 67:6 the subject becomes the punishment of those who disbelieve and the reward of the believers and the obedient. That subject, it adds, runs through seven verses before the surah returns to His knowledge and power.",
            "bn": "সূরা মুলক শুরু হয় চোখে দেখা যায় এমন জিনিসের দিকে ইশারা করে: স্তরে স্তরে সাত আসমান, রহমানের সৃষ্টিতে কোনো খুঁত নেই, আর ৬৭:৫ আয়াতে প্রদীপমালায় সাজানো নিকটতম আকাশ। এর পরের মোড়টা মাআরিফুল কুরআন চিহ্নিত করে দেয়। তার ভাষায়, এ পর্যন্ত আল্লাহর জ্ঞান ও কুদরতের প্রমাণ আনা হয়েছিল নানা রকম সৃষ্টি থেকে। ৬৭:৬ থেকে আলোচনা ঘুরে যায় কাফিরদের শাস্তি আর মুমিন ও অনুগতদের পুরস্কারের দিকে। মাআরিফ আরও বলে, এ আলোচনা চলে সাতটি আয়াত জুড়ে, তারপর সূরা আবার ফিরে যায় তাঁর জ্ঞান ও কুদরতের কথায়।"
          },
          {
            "en": "Our verse sits inside that passage. Verse 67:6 names the destination: for those who disbelieved in their Lord is the punishment of Jahannam, and wretched is the destination. Verse 67:7 describes the arrival: when they are thrown into it, they hear from it a shahiq while it boils up. Ibn Kathir, in the abridged English, quotes Ibn Jarir that shahiq means the sound of shouting, and ath-Thawri that it will boil them as a few seeds are boiled in a great deal of water. Then comes 67:8.",
            "bn": "আমাদের আয়াতটি এই অংশেরই ভেতরে। ৬৭:৬ আয়াত গন্তব্যের নাম বলে দেয়: যারা তাদের রবকে অস্বীকার করেছে, তাদের জন্য জাহান্নামের শাস্তি, আর কতই না মন্দ সে ঠিকানা। ৬৭:৭ আয়াত পৌঁছানোর মুহূর্তটা দেখায়: তাদের যখন তাতে ফেলা হবে, তারা তার শাহীক শুনবে, আর তা টগবগ করে ফুটতে থাকবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ইবনে জারীরের কথা উদ্ধৃত করে যে শাহীক মানে চিৎকারের আওয়াজ। সাওরীর কথাও আনে: অনেক পানিতে অল্প কিছু দানা যেভাবে ফোটে, জাহান্নাম তাদের সেভাবে ফোটাবে। তারপর আসে ৬৭:৮।"
          },
          {
            "en": "Read in order, the verses draw closer with each step: a destination named, a sound heard from it, then the Fire itself almost splitting apart, and finally a question put to those who have just arrived. The passage does not end on flames. Whatever the verse says about rage and bursting, its last clause is a sentence spoken to people, and that sentence is about a warner. Most of what follows is spent on the two halves of the verse, the Fire's state and the keepers' question, and on how the commentators read each.",
            "bn": "আয়াতগুলো পরপর পড়লে দেখা যায়, প্রতিটি ধাপে দৃশ্যটা আরও কাছে চলে আসে। প্রথমে গন্তব্যের নাম, তারপর সেখান থেকে ভেসে আসা আওয়াজ, তারপর জাহান্নাম নিজেই প্রায় ফেটে পড়ছে, আর সবশেষে সদ্য পৌঁছানো লোকদের সামনে একটি প্রশ্ন। অংশটা আগুনের শিখায় গিয়ে থামে না। ক্রোধ আর ফেটে পড়ার কথা যতই থাকুক, আয়াতের শেষ বাক্যটা মানুষের উদ্দেশে বলা একটি কথা, আর সে কথা একজন সতর্ককারীকে নিয়ে। সামনের আলোচনা তাই আয়াতের দুই অংশ ঘিরে: জাহান্নামের অবস্থা আর রক্ষীদের প্রশ্ন, এবং তাফসীরকারেরা প্রতিটি কীভাবে পড়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Almost Torn Apart",
          "bn": "ছিঁড়ে যাওয়ার উপক্রম"
        },
        "p": [
          {
            "en": "Takadu tamayyazu min al-ghayz. Takadu means it is about to, it very nearly does: the verse shows the Fire at the edge of something, not past it. Al-Qurtubi notes that the original form of tamayyazu is tatamayyazu, which the verse shortens. At-Tabari glosses it with two verbs, tatafarraqu wa-tataqatta'u, it scatters and is cut apart, from rage against its people, and says the people of interpretation said the same. He then gives the reports behind that statement, beginning with Ibn Abbas.",
            "bn": "তাকাদু তামায়্যাযু মিনাল গাইয। তাকাদু মানে প্রায় হয়ে যাচ্ছে, হতে হতে বাকি। আয়াতটি জাহান্নামকে দেখায় একটা কিছুর একেবারে কিনারে, তা পেরিয়ে যাওয়া অবস্থায় নয়। কুরতুবী জানান, তামায়্যাযু শব্দের মূল রূপ তাতামায়্যাযু, আয়াতে তা সংক্ষিপ্ত হয়ে এসেছে। তাবারী শব্দটির ব্যাখ্যা দেন দুটি ক্রিয়া দিয়ে: তাতাফাররাকু ওয়া তাতাকাত্তাউ, অর্থাৎ ছড়িয়ে ছিটিয়ে যায় আর টুকরো টুকরো হয়, তার বাসিন্দাদের উপর ক্রোধে। তিনি বলেন, ব্যাখ্যাকারেরাও এমনটাই বলেছেন। তারপর সে কথার পেছনের বর্ণনাগুলো আনেন, শুরু করেন ইবনে আব্বাস (রাঃ) থেকে।"
          },
          {
            "en": "Ibn Abbas comes through two chains in at-Tabari. In the first he says only tatafarraq, it scatters. In the second he says its parts almost leave one another and it splits open. Ad-Dahhak, in the same list, says tafarraq. Al-Qurtubi gives Sa'id ibn Jubayr's wording: it is cut into pieces and parts of it come away from others, and he names Ibn Abbas, ad-Dahhak and Ibn Zayd for the reading that it scatters. Ibn Kathir gives the same picture: some parts of it almost separate from others.",
            "bn": "তাবারীতে ইবনে আব্বাস (রাঃ)-এর কথা এসেছে দুটি সনদে। প্রথমটিতে তিনি শুধু বলেন তাতাফাররাক, ছড়িয়ে যায়। দ্বিতীয়টিতে বলেন, তার অংশগুলো একটা আরেকটা থেকে আলাদা হয়ে যাওয়ার উপক্রম হয়, আর তা ফেটে চৌচির হয়। একই তালিকায় দাহহাকের কথা: তাফাররাক। কুরতুবী সাঈদ ইবনে জুবাইরের ভাষা আনেন: তা টুকরো টুকরো হয়, আর এক অংশ আরেক অংশ থেকে আলাদা হয়ে যায়। ছড়িয়ে যাওয়ার অর্থের পক্ষে তিনি নাম নেন ইবনে আব্বাস (রাঃ), দাহহাক ও ইবনে যায়দের। ইবন কাসীরও একই ছবি দেন: তার কিছু অংশ অন্য অংশ থেকে প্রায় বিচ্ছিন্ন হয়ে যায়।"
          },
          {
            "en": "The others reach for neighbouring words. Al-Baghawi has tanqati', it is severed, and quotes Ibn Qutayba: it almost splits open with rage at the disbelievers. The Muyassar uses tatamazzaq, it is torn to shreds. As-Sa'di adds a phrase the others leave implicit: 'ala ijtima'iha, for all that it is gathered together, its parts almost part from one another and it is cut apart. Every gloss is a word of separation, and every one keeps the takadu: the commentators describe a Fire on the point of bursting, as the verse does.",
            "bn": "অন্যরা কাছাকাছি অর্থের শব্দ বেছে নেন। বাগাভী বলেন তানকাতি, অর্থাৎ ছিন্ন হয়ে যায়, আর ইবনে কুতাইবার কথা আনেন: কাফিরদের উপর ক্রোধে তা প্রায় ফেটে যায়। মুয়াসসার বলে তাতামায্যাক, ছিঁড়ে খণ্ড খণ্ড হয়। সা'দী একটি কথা যোগ করেন, যা অন্যদের কথায় উহ্য থাকে: আলা ইজতিমাইহা। অর্থাৎ এত একত্রে জমাট হয়ে থাকা সত্ত্বেও তার অংশগুলো একটা আরেকটা থেকে আলাদা হয়ে যাওয়ার উপক্রম, আর তা টুকরো হয়ে যায়। প্রতিটি ব্যাখ্যাই বিচ্ছিন্ন হওয়ার শব্দ, আর প্রতিটিতেই তাকাদু অটুট। আয়াতের মতোই তাফসীরকারেরা এমন এক আগুনের কথা বলেন, যা ফেটে পড়ার ঠিক আগমুহূর্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rage, or Boiling?",
          "bn": "ক্রোধ, নাকি টগবগে ফোটা?"
        },
        "p": [
          {
            "en": "Min al-ghayz: from rage. Most of the commentators read the word this way and say against whom. Ibn Kathir: from the severity of its rage against them and its fury with them. The Muyassar: from the severity of its anger at the disbelievers. At-Tabari: against its people. Al-Qurtubi: from the severity of rage against the enemies of Allah. As-Sa'di: from the severity of its rage at the disbelievers. In every one of these the rage has an object, the people being thrown in, and none of them makes it a general fury.",
            "bn": "মিনাল গাইয: ক্রোধের কারণে। অধিকাংশ তাফসীরকার শব্দটি এ অর্থেই পড়েন, আর বলে দেন ক্রোধটা কার উপর। ইবন কাসীর বলেন: তাদের উপর তার প্রচণ্ড ক্রোধ ও আক্রোশের কারণে। মুয়াসসার বলে: কাফিরদের উপর তার প্রচণ্ড রাগের কারণে। তাবারীর ভাষায়: তার বাসিন্দাদের উপর। কুরতুবী বলেন: আল্লাহর শত্রুদের উপর প্রচণ্ড ক্রোধের কারণে। সা'দী বলেন: কাফিরদের উপর তার প্রচণ্ড ক্রোধের কারণে। প্রতিটি ব্যাখ্যায় ক্রোধের একটা লক্ষ্য আছে, যাদের তাতে ফেলা হচ্ছে তারা। কেউই একে লক্ষ্যহীন সাধারণ রোষ বানান না।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari, says the most about its reason: the splitting is from rage against those who disobey Allah, out of anger for Allah and in vengeance for Him. Al-Qurtubi then records a second reading, introduced only with it was said: min al-ghayz means from boiling, al-ghalayan. On that reading the phrase describes the Fire's seething rather than its anger. Al-Qurtubi names nobody for it and does not choose between the two, so both stand here as he left them, the rage that most report and the boiling he records in a single line.",
            "bn": "কারণটা সবচেয়ে বেশি খুলে বলেন ইবনে যায়দ, তাবারীর বর্ণনায়। তাঁর মতে এই ফেটে পড়া আল্লাহর নাফরমানদের উপর ক্রোধে, আল্লাহর জন্য রাগ করে আর তাঁর পক্ষ থেকে প্রতিশোধ নিতে। কুরতুবী এরপর আরেকটি মত আনেন, শুধু 'বলা হয়েছে' কথাটি দিয়ে: মিনাল গাইয মানে ফুটে ওঠার কারণে, আল-গালায়ান। এ মত অনুযায়ী শব্দটি জাহান্নামের রাগ নয়, তার টগবগে ফোটার বর্ণনা। কুরতুবী এ মতের পক্ষে কারও নাম নেন না, আর দুটির কোনোটিকে বেছেও নেন না। তাই দুটোই এখানে থাকছে যেভাবে তিনি রেখে গেছেন: অধিকাংশের বলা ক্রোধ, আর এক লাইনে উল্লেখ করা ফুটে ওঠা।"
          },
          {
            "en": "As-Sa'di turns the description into a question for the reader: if its rage at them is this severe, what do you suppose it will do to them once they are inside it? He leaves the question unanswered, which is its force. This article keeps to the commentators' own words for the Fire's rage. They report it plainly, with an object and, in Ibn Zayd's words, a reason, and they do not go on to explain how a Fire is enraged. Nor will we.",
            "bn": "সা'দী বর্ণনাটিকে পাঠকের সামনে একটি প্রশ্নে পরিণত করেন। তাদের উপর যদি তার ক্রোধ এত প্রচণ্ড হয়, তবে ভেতরে পৌঁছে গেলে তাদের সঙ্গে কী করবে বলে আপনার ধারণা? প্রশ্নের উত্তর তিনি দেন না, আর সেখানেই তার ধার। জাহান্নামের ক্রোধের ব্যাপারে এ লেখা তাফসীরকারদের নিজেদের কথার মধ্যেই থাকছে। তাঁরা তা সোজাসুজি উল্লেখ করেন: ক্রোধের একটি লক্ষ্য আছে, আর ইবনে যায়দের ভাষায় একটি কারণও। আগুন কীভাবে ক্রুদ্ধ হয়, তার ব্যাখ্যায় তাঁরা যান না। আমরাও যাব না।"
          }
        ]
      },
      {
        "h": {
          "en": "Group After Group",
          "bn": "দলের পর দল"
        },
        "p": [
          {
            "en": "Kullama ulqiya fiha fawjun: every time a fawj is thrown into it. At-Tabari explains fawj as a jama'a, a group, and al-Baghawi as a group of them; al-Qurtubi specifies a group of the disbelievers, and the Muyassar a group of people. Kullama, every time, makes the scene a repeated one. The question that closes the verse is not asked once to a single crowd: each group, as it arrives, hears it put to them again. The verb ulqiya, is thrown, is the same one 67:7 used of them, ulqu.",
            "bn": "কুল্লামা উলকিয়া ফীহা ফাওজুন: যখনই তাতে কোনো ফাওজ ফেলা হয়। তাবারী ফাওজের ব্যাখ্যা দেন জামাআ, অর্থাৎ দল, আর বাগাভী বলেন তাদের মধ্যকার একটি দল। কুরতুবী নির্দিষ্ট করে বলেন কাফিরদের একটি দল, আর মুয়াসসার বলে মানুষের একটি দল। কুল্লামা, অর্থাৎ যখনই, দৃশ্যটাকে বারবার ঘটে চলা দৃশ্য বানিয়ে দেয়। আয়াতের শেষের প্রশ্নটি একটিমাত্র ভিড়ের সামনে একবার করা হয় না। প্রতিটি দল পৌঁছামাত্র নতুন করে সেই প্রশ্ন শোনে। উলকিয়া, অর্থাৎ ফেলা হয়, এই ক্রিয়াই ৬৭:৭ আয়াতে তাদের বেলায় এসেছে: উলকূ।"
          },
          {
            "en": "Ibn Kathir sets beside this verse another in which the same keepers ask the same thing at greater length. In 39:71, when the disbelievers reach Jahannam and its gates are opened, its keepers say: did there not come to you messengers from among yourselves, reciting to you the verses of your Lord and warning you of the meeting of this Day of yours? Read side by side, the longer verse names what the warner in 67:8 is asked about: messengers who recited their Lord's verses and who warned of this very Day.",
            "bn": "ইবন কাসীর এ আয়াতের পাশে আরেকটি আয়াত রাখেন, যেখানে একই রক্ষীরা একই কথা আরও বিস্তারিতভাবে জিজ্ঞেস করে। ৩৯:৭১ আয়াতে কাফিররা যখন জাহান্নামে পৌঁছায় আর তার দরজাগুলো খুলে দেওয়া হয়, তখন তার রক্ষীরা বলে: তোমাদের কাছে কি তোমাদের মধ্য থেকেই রাসূলগণ আসেননি, যাঁরা তোমাদের রবের আয়াত পড়ে শোনাতেন আর তোমাদের এই দিনের সাক্ষাৎ সম্পর্কে সতর্ক করতেন? দুটি আয়াত পাশাপাশি পড়লে বোঝা যায়, ৬৭:৮ আয়াতে যে সতর্ককারীর কথা জিজ্ঞেস করা হচ্ছে, দীর্ঘ আয়াতটি তাঁর পরিচয় খুলে বলে: এমন রাসূল, যাঁরা রবের আয়াত শুনিয়েছেন আর ঠিক এই দিনটির ব্যাপারেই সতর্ক করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Entrusted With It",
          "bn": "যাদের হাতে এর দায়িত্ব"
        },
        "p": [
          {
            "en": "Khazanatuha: its keepers. At-Tabari restates the clause with the keepers of Jahannam asking the group, and the Muyassar describes them as al-muwakkaluna bi-amriha, those put in charge of its affairs. That is as far as the commentaries consulted for this verse go. None of them says more here about who the keepers are, how many they are, or by what name they are called, and this article does not add it from elsewhere. What the verse itself tells us is what they do: they ask.",
            "bn": "খাযানাতুহা: তার রক্ষীরা। তাবারী বাক্যটি নতুন করে বলেন এভাবে যে জাহান্নামের রক্ষীরা দলটিকে জিজ্ঞেস করে। মুয়াসসার তাদের পরিচয় দেয় আল-মুওয়াক্কালূনা বি-আমরিহা বলে, অর্থাৎ যাদের উপর এর কাজকর্মের দায়িত্ব দেওয়া হয়েছে। এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো এর বেশি যায় না। রক্ষীরা কারা, সংখ্যায় কত, কোন নামে পরিচিত, এ নিয়ে এখানে কেউ আর কিছু বলেন না। এ লেখাও অন্য কোথাও থেকে তা জুড়ে দিচ্ছে না। আয়াত নিজে যা জানায় তা হলো তাদের কাজ: তারা প্রশ্ন করে।"
          },
          {
            "en": "They do not announce a sentence; they put a question. At-Tabari fills it out: did there not come to you, in the world, a warner who warned you of this punishment you are now in? The Muyassar has nearly the same words, with a messenger who cautioned you in place of the warner. In both, the question joins two moments, the warning heard in the world and the punishment now being met, and asks the arriving group to account for the distance between them.",
            "bn": "তারা রায় ঘোষণা করে না, প্রশ্ন রাখে। তাবারী প্রশ্নটা পুরো করে বলেন: দুনিয়াতে কি তোমাদের কাছে এমন কোনো সতর্ককারী আসেনি, যে তোমাদের এই শাস্তি সম্পর্কে সতর্ক করেছিল, যার মধ্যে তোমরা এখন আছ? মুয়াসসারের ভাষাও প্রায় একই, শুধু সতর্ককারীর জায়গায় এমন রাসূলের কথা, যিনি তোমাদের সাবধান করেছিলেন। দুই ব্যাখ্যাতেই প্রশ্নটা দুটি মুহূর্তকে জুড়ে দেয়: দুনিয়াতে শোনা সতর্কবাণী আর এখন মুখোমুখি হওয়া শাস্তি। আর সদ্য পৌঁছানো দলটির কাছে জানতে চায়, এ দুইয়ের মাঝের দূরত্বের হিসাব কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked to Rebuke, Not to Learn",
          "bn": "জানতে নয়, ধিক্কার দিতে"
        },
        "p": [
          {
            "en": "What kind of question is it? Al-Qurtubi answers in a phrase: 'ala jihat at-tawbikh wa-t-taqri', by way of rebuke and reproach. Al-Baghawi calls it su'al tawbikh, a question of rebuke, and the Muyassar says it is asked in the manner of rebuke. The keepers are not gathering information. Al-Qurtubi, al-Baghawi and the Muyassar all gloss the nadhir as a messenger, al-Qurtubi adding: a messenger in the world who warned you of this Day, so that you would be on your guard.",
            "bn": "প্রশ্নটা কেমন প্রশ্ন? কুরতুবী এক কথায় উত্তর দেন: আলা জিহাতিত তাওবীখি ওয়াত তাকরী, অর্থাৎ ধিক্কার আর ভর্ৎসনার ভঙ্গিতে। বাগাভী একে বলেন সুআলু তাওবীখ, ধিক্কারের প্রশ্ন। মুয়াসসারও বলে, প্রশ্নটা করা হয় ধিক্কার দেওয়ার জন্য। রক্ষীরা কোনো তথ্য সংগ্রহ করছে না। কুরতুবী, বাগাভী ও মুয়াসসার তিনজনই নাযীর মানে বলেন রাসূল। কুরতুবী যোগ করেন: দুনিয়াতে এমন রাসূল, যিনি তোমাদের এই দিন সম্পর্কে সতর্ক করেছিলেন, যাতে তোমরা সাবধান হও।"
          },
          {
            "en": "As-Sa'di puts the rebuke into words. Your present state, he has the keepers mean, and your having earned the Fire, are as though you were never told of it, as though the warners had never warned you against it. The reproach does not claim that no warning came. It says that the people now look like people who were never warned. His wording leaves the reader with a hard thought: a warning heard and left unheeded can leave a person looking exactly like one who never heard it.",
            "bn": "সা'দী ধিক্কারটাকে ভাষা দেন। রক্ষীদের কথার মর্ম তাঁর মতে এই: তোমাদের এখনকার অবস্থা আর জাহান্নামের যোগ্য হয়ে পড়া দেখে মনে হয়, যেন তোমাদের এর খবরই দেওয়া হয়নি, যেন সতর্ককারীরা কখনো তোমাদের এ থেকে সাবধান করেননি। ধিক্কারটা এ দাবি করে না যে সতর্কবাণী আসেনি। বরং বলে, এই লোকদের এখন দেখাচ্ছে এমন মানুষের মতো, যাদের কখনো সতর্কই করা হয়নি। তাঁর এ কথা পাঠকের মনে একটি কঠিন ভাবনা রেখে যায়: সতর্কবাণী শুনেও অবহেলা করলে মানুষকে ঠিক তার মতোই দেখায়, যে কখনো তা শোনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "No Punishment Before a Messenger",
          "bn": "রাসূল পাঠানোর আগে শাস্তি নয়"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the wider point from these verses. In them, he says, Allah reminds of His justice in dealing with His creatures: He does not punish anyone until the proof has been established against them and a messenger has been sent to them. He cites 17:15 for it: and never would We punish until We sent a messenger. On this reading the keepers' question is that principle spoken aloud to each group as it is thrown in.",
            "bn": "ইবন কাসীর এ আয়াতগুলো থেকে বড় একটি কথা বের করে আনেন। তাঁর মতে এখানে আল্লাহ তাঁর সৃষ্টির সঙ্গে নিজের ইনসাফের কথা মনে করিয়ে দিচ্ছেন। কারও বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত না হওয়া পর্যন্ত, আর তার কাছে রাসূল না পাঠানো পর্যন্ত তিনি কাউকে শাস্তি দেন না। এর পক্ষে তিনি ১৭:১৫ আয়াত আনেন: আর রাসূল না পাঠানো পর্যন্ত আমি শাস্তি দিই না। এ পড়ায় রক্ষীদের প্রশ্নটা সেই মূলনীতিরই উচ্চারণ, প্রতিটি দলকে ফেলার মুহূর্তে।"
          },
          {
            "en": "The group's answer comes in 67:9, and it begins with bala, yes. What they go on to say belongs to that verse and is left for it here. No commentary consulted for this verse attaches a hadith to it, so none is offered. For 67:8 the point stands without one: the keepers ask about one thing only, whether a warner came, and Ibn Kathir reads that single question as a reminder of Allah's justice.",
            "bn": "দলটির জবাব আসে ৬৭:৯ আয়াতে, শুরু হয় 'বালা' দিয়ে, অর্থাৎ হ্যাঁ। এরপর তারা যা বলে, তা সেই আয়াতের আলোচনা; এখানে তা ওই আয়াতের জন্যই রেখে দেওয়া হলো। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস আনা হচ্ছে না। হাদিস ছাড়াই ৬৭:৮ আয়াতের কথা পরিষ্কার। রক্ষীরা কেবল একটি বিষয়ই জিজ্ঞেস করে, সতর্ককারী এসেছিলেন কি না। আর ইবন কাসীর এই একটি প্রশ্নকে পড়েন আল্লাহর ইনসাফের স্মরণ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked While There Is Time",
          "bn": "সময় থাকতেই যে প্রশ্ন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: the Fire, its keepers and the groups thrown into it, on the Day it speaks of. It licenses nothing against any living person or community, and it gives nobody a test for sorting the people around them into those groups. No reader is told who will be asked this question, and none is put in the keepers' place. The verse's own question points the other way, at whether a warner came, and each reader can answer that only about themselves.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: যে দিনের কথা বলছে সেদিনের জাহান্নাম, তার রক্ষীরা, আর তাতে ফেলা দলগুলো। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আশপাশের মানুষদের ওই দলগুলোতে ভাগ করে ফেলার কোনো মাপকাঠিও কারও হাতে তুলে দেয় না। কাকে এ প্রশ্ন করা হবে, কোনো পাঠককে তা জানানো হয়নি, কাউকে রক্ষীদের জায়গাতেও বসানো হয়নি। আয়াতের নিজের প্রশ্ন বরং উল্টো দিকে ইশারা করে: সতর্ককারী এসেছিলেন কি না। এর উত্তর প্রত্যেক পাঠক কেবল নিজের ব্যাপারেই দিতে পারেন।"
          },
          {
            "en": "For the reader the question arrives early. It is read now, in a passage that a few verses on also says, in 67:12, that those who fear their Lord unseen will have forgiveness and a great reward. The warning and the promise sit side by side. The practical step is small: take one warning you have already met in the Qur'an and let it change one thing this week. And when you speak of the Fire to others, speak as a warner speaks, out of care, never as one who has already passed the verdict.",
            "bn": "পাঠকের কাছে প্রশ্নটা পৌঁছায় আগেভাগেই। তা পড়া হচ্ছে এখন, এমন এক অংশে, যা কয়েক আয়াত পরে ৬৭:১২ আয়াতে এ কথাও বলে: যারা না দেখেই তাদের রবকে ভয় করে, তাদের জন্য আছে মাগফিরাত আর বিরাট পুরস্কার। সতর্কবাণী আর প্রতিশ্রুতি পাশাপাশি দাঁড়িয়ে। করণীয়টা ছোট: কুরআনে ইতিমধ্যে পড়া একটি সতর্কবাণী বেছে নিন, আর এ সপ্তাহে সেটা দিয়ে নিজের একটি জিনিস বদলান। অন্যদের সঙ্গে জাহান্নামের কথা বললে বলুন সতর্ককারীর মতো, তাদের ভালো চেয়ে। এমনভাবে কখনো নয়, যেন রায় আপনি আগেই দিয়ে ফেলেছেন।"
          }
        ]
      }
    ]
  },
  "67:14": {
    "sections": [
      {
        "h": {
          "en": "A Question With One Answer",
          "bn": "যে প্রশ্নের উত্তর একটাই"
        },
        "p": [
          {
            "en": "The verse is seven words in Arabic and it is a question, but not the kind that seeks information. It opens with ala, a particle Arabic uses to make a hearer look up before the sentence arrives, joined here to the interrogative. Alone, that opening already tells you the answer is obvious and that the obviousness is the problem: the speaker is not asking because he does not know, but because his listeners have been living as though they did not.",
            "bn": "আয়াতটি আরবিতে সাত শব্দের, আর তা একটি প্রশ্ন; তবে তথ্য জানার প্রশ্ন নয়। শুরু হয় 'আলা' দিয়ে। আরবিতে এই অব্যয় বাক্য আসার আগেই শ্রোতাকে মুখ তুলে তাকাতে বাধ্য করে, আর এখানে তা প্রশ্নবোধক অব্যয়ের সঙ্গে জোড়া। শুধু এই শুরুটুকুই বলে দেয়, উত্তর তো জানা কথা, আর জানা কথা হওয়াটাই সমস্যা। বক্তা জানেন না বলে প্রশ্ন করছেন না; প্রশ্ন করছেন, কারণ শ্রোতারা এমনভাবে জীবন কাটাচ্ছে যেন তারা জানে না।"
          },
          {
            "en": "It also answers the sentence immediately before it. 67:13 says: conceal your speech or announce it aloud, He knows what is within the breasts. The order there is deliberate; concealing is mentioned first, because concealing is what the address is really about. Having stated that His knowledge reaches into the chest, the surah then supplies the reason in the form of a question, and 67:12 has already told us who benefits from the answer: those who fear their Lord bil-ghayb, unseen.",
            "bn": "আয়াতটি ঠিক আগের বাক্যেরও জবাব। ৬৭:১৩ বলে: তোমরা কথা গোপনে বলো বা জোরে বলো, তিনি তো অন্তরের ভেতরের খবরও জানেন। সেখানে ক্রমটা ভেবেচিন্তে সাজানো: গোপন করার কথা আগে এসেছে, কারণ আসল কথাটাই গোপন করা নিয়ে। তাঁর জ্ঞান বুকের ভেতর পর্যন্ত পৌঁছায়, এ কথা বলার পর সূরাটি এবার এর কারণ জানায় একটি প্রশ্নের আকারে। আর এ উত্তরে কাদের লাভ, তা ৬৭:১২ আগেই বলে দিয়েছে: যারা না দেখেই, বিল-গাইব, তাদের রবকে ভয় করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways to Read Man Khalaqa",
          "bn": "'মান খালাকা' পড়ার দুই উপায়"
        },
        "p": [
          {
            "en": "The Arabic ala ya'lamu man khalaqa can be parsed two ways, and the mufassirun record both without treating either as an error. On the first, man is the subject: does He who created not know? On the second, man is the object of the knowing and the subject is Allah, understood: does He not know the one He created? This app's translation takes the first, and so does its Bengali, which is worth noticing before you meet the second in a commentary.",
            "bn": "'আলা ইয়া'লামু মান খালাকা' আরবিতে দুইভাবে বিশ্লেষণ করা যায়। মুফাসসিরগণ দুটোই উল্লেখ করেছেন, কোনোটিকে ভুল বলেননি। প্রথম বিশ্লেষণে 'মান' কর্তা: যিনি সৃষ্টি করেছেন, তিনি কি জানেন না? দ্বিতীয়টিতে 'মান' জানার কর্ম, আর কর্তা উহ্য, অর্থাৎ আল্লাহ: যাকে তিনি সৃষ্টি করেছেন, তাকে কি তিনি জানেন না? এই অ্যাপের অনুবাদ প্রথমটি নিয়েছে, বাংলা অনুবাদও তা-ই। কোনো তাফসীরে দ্বিতীয়টি চোখে পড়ার আগে কথাটা মনে রাখা ভালো।"
          },
          {
            "en": "The two readings run in opposite directions and arrive at the same place. Read the first way, the argument moves from maker to made: whoever built the thing knows the inside of it. Read the second, it moves from made to maker: the thing that was built has no privacy from the one who built it. Since the verse is answering a sentence about hidden speech, both are useful, and the tradition's refusal to choose is not indecision but accuracy about what the wording carries.",
            "bn": "দুই পাঠ চলে উল্টো দিকে, অথচ পৌঁছায় একই জায়গায়। প্রথমভাবে পড়লে যুক্তি চলে কারিগর থেকে কাজের দিকে: যে জিনিসটা বানিয়েছে, সে তার ভেতরটা জানে। দ্বিতীয়ভাবে পড়লে যুক্তি চলে কাজ থেকে কারিগরের দিকে: যা বানানো হয়েছে, যিনি বানিয়েছেন তাঁর কাছে তার কিছুই গোপন নেই। আয়াতটি যেহেতু গোপন কথা নিয়ে বলা একটি বাক্যের জবাব, দুটো পাঠই কাজে লাগে। আর তাফসীরের ধারা যে একটিকে বেছে নেয়নি, তা দ্বিধা নয়; শব্দগুলো আসলে কী বহন করে, সে ব্যাপারে নির্ভুল থাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Khabir",
          "bn": "আল-খাবীর"
        },
        "p": [
          {
            "en": "Then two names, and the second is the one this verse leans on. Al-Khabir comes from a root that also gives khabar, a report, and khibrah, the expertise a person has of something he has handled himself. A khabir in ordinary Arabic is the guide who knows the country because he has crossed it. As a divine name the mufassirun explain it as knowledge of the inward, hidden aspects of things, the layer beneath what a general knowledge would reach.",
            "bn": "এরপর দুটি নাম, আর আয়াতটি ভর দেয় দ্বিতীয়টির ওপর। 'আল-খাবীর' যে ধাতু থেকে এসেছে, সেখান থেকেই এসেছে 'খাবার', অর্থাৎ সংবাদ, আর 'খিবরাহ', অর্থাৎ নিজ হাতে নাড়াচাড়া করে কোনো জিনিস সম্পর্কে যে দক্ষতা জন্মায়। সাধারণ আরবিতে 'খাবীর' সেই পথপ্রদর্শক, যে দেশটা চেনে, কারণ নিজে তা পাড়ি দিয়েছে। আল্লাহর নাম হিসেবে মুফাসসিরগণ এর ব্যাখ্যা করেন জিনিসের ভেতরের, গোপন দিকগুলোর জ্ঞান বলে; সাধারণ জ্ঞান যে স্তর পর্যন্ত পৌঁছায়, তার নিচের স্তরের খবর।"
          },
          {
            "en": "35:14 puts the word to work in a single clause that is hard to improve on: wa la yunabbi'uka mithlu khabir, and none can inform you like One who is Aware. Set that against 67:13, where people are told they may whisper or shout as they please. The verse is not merely saying that He overhears. It is saying that the account He holds of what was said in that room is better than the account held by the people who were in it.",
            "bn": "৩৫:১৪ আয়াত শব্দটিকে এক বাক্যাংশে এমনভাবে কাজে লাগায়, যার চেয়ে ভালো বলা কঠিন: 'ওয়া লা ইউনাব্বিউকা মিসলু খাবীর', আর সর্বজ্ঞের মতো কেউ তোমাকে জানাতে পারে না। এটা ৬৭:১৩-এর পাশে রাখুন, যেখানে মানুষকে বলা হয়েছে, ইচ্ছামতো ফিসফিস করো বা চিৎকার করো। আয়াতটি শুধু এটুকু বলছে না যে তিনি শুনে ফেলেন। বলছে, সেই ঘরে যা বলা হয়েছিল তার যে হিসাব তাঁর কাছে আছে, তা ঘরে উপস্থিত লোকদের নিজেদের হিসাবের চেয়েও ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Pair Appears Elsewhere",
          "bn": "এই নামজোড়া আর কোথায় আসে"
        },
        "p": [
          {
            "en": "A sentence about knowledge reaching into the chest could have closed on names of power or of reckoning. It closes instead on al-Latif and al-Khabir, and the pairing occurs at several points in the Quran, always attached to something small or unseen. 6:103 uses it of vision, which cannot grasp Him while He grasps it. 22:63 uses it of water sent down and an earth that turns green. 33:34 uses it of what is recited inside people's houses. Each is a place where the ordinary eye fails or does not bother to look.",
            "bn": "বুকের ভেতর পর্যন্ত পৌঁছানো জ্ঞানের কথা বলা বাক্যটি শেষ হতে পারত ক্ষমতা বা হিসাবের কোনো নামে। কিন্তু তা শেষ হয় 'আল-লাতীফ' ও 'আল-খাবীর' দিয়ে। কুরআনে এই জোড়া কয়েক জায়গায় এসেছে, আর প্রতিবারই ছোট বা অদৃশ্য কিছুর সঙ্গে। ৬:১০৩ আয়াতে এসেছে দৃষ্টির প্রসঙ্গে: দৃষ্টি তাঁকে ধরতে পারে না, অথচ তিনি দৃষ্টিকে ধরে ফেলেন। ২২:৬৩ আয়াতে নেমে আসা পানি আর সবুজ হয়ে ওঠা জমিনের প্রসঙ্গে। ৩৩:৩৪ আয়াতে মানুষের ঘরের ভেতরে যা তিলাওয়াত হয়, তার প্রসঙ্গে। প্রতিটিই এমন জায়গা, যেখানে সাধারণ চোখ হয় ব্যর্থ হয়, নয়তো তাকানোরই গরজ বোধ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে এর ছাপ"
        },
        "p": [
          {
            "en": "The first effect is on the gap most people carry between their public and private conduct. This verse does not close that gap by threatening; it closes it by removing the audience distinction that the gap depends on. There is no room in which you are performing to nobody. A useful working test is whether you would be content for the person you respect most to hear the recording, and then to remember that a better record already exists.",
            "bn": "প্রথম প্রভাব পড়ে সেই ফাঁকটার ওপর, যা বেশিরভাগ মানুষের প্রকাশ্য আর গোপন আচরণের মাঝে থেকে যায়। আয়াতটি ভয় দেখিয়ে এই ফাঁক বন্ধ করে না। ফাঁকটা টিকে থাকে এই ভেদের ওপর যে কোথাও লোক দেখছে, কোথাও দেখছে না; আয়াতটি সেই ভেদটাই তুলে দেয়। এমন কোনো ঘর নেই, যেখানে আপনার কাজ কেউ দেখছে না। কাজে লাগার মতো একটা পরীক্ষা: আপনি যাঁকে সবচেয়ে বেশি সম্মান করেন, তিনি রেকর্ডিংটা শুনলে আপনি কি স্বস্তিতে থাকতেন? তারপর মনে রাখুন, এর চেয়ে ভালো একটা রেকর্ড আগে থেকেই আছে।"
          },
          {
            "en": "The second effect is on du'a, and it is a relief rather than a burden. If He is al-Khabir, you are not required to explain your situation accurately before He can act on it. Much of what people cannot say in prayer is what they cannot put into words at all, and this name means the wordless part is already received. Both halves of the verse are then in play: fully known, and known by One whose closing names are gentleness and awareness.",
            "bn": "দ্বিতীয় প্রভাব পড়ে দু'আর ওপর, আর তা বোঝা নয়, স্বস্তি। তিনি যদি আল-খাবীর হন, তবে তিনি কিছু করার আগে আপনাকে নিজের অবস্থা নিখুঁতভাবে বুঝিয়ে বলতে হবে না। দু'আয় মানুষ যা বলতে পারে না, তার বেশিরভাগই এমন কথা, যা আদৌ ভাষায় আনা যায় না। এই নাম বলে দেয়, না-বলা অংশটুকুও আগেই তাঁর কাছে পৌঁছে গেছে। তখন আয়াতের দুই অংশই কাজ করে: আপনার সবটুকু তাঁর জানা, আর যিনি জানেন, আয়াতের শেষ দুই নাম বলে তিনি কোমল, তিনি সব খবর রাখেন।"
          }
        ]
      }
    ]
  },
  "67:15": {
    "sections": [
      {
        "h": {
          "en": "A Gift With a Warning Beside It",
          "bn": "দানের পাশেই সতর্কবাণী"
        },
        "p": [
          {
            "en": "Placement does half the work in this verse. Just before it, 67:14 asks whether He who created would not know, and He is the Subtle, the Aware. Just after it, 67:16 asks whether you feel secure that He who is above would not make the earth swallow you, so that suddenly it sways. Between a question about His knowledge and a question about His power sits a sentence telling you to walk about on the earth and eat.",
            "bn": "এই আয়াতের অর্ধেক কাজ করে দেয় এর অবস্থান। ঠিক আগে ৬৭:১৪ আয়াত জিজ্ঞেস করে, যিনি সৃষ্টি করেছেন তিনি কি জানেন না? অথচ তিনি সূক্ষ্মদর্শী, সব খবর রাখেন। ঠিক পরে ৬৭:১৬ জিজ্ঞেস করে, তোমরা কি নিশ্চিন্ত হয়ে গেছ যে ঊর্ধ্বে যিনি আছেন তিনি তোমাদের নিয়ে যমীনকে ধসিয়ে দেবেন না, আর তা হঠাৎ থরথর করে কাঁপতে থাকবে না? তাঁর জ্ঞান নিয়ে এক প্রশ্ন আর তাঁর ক্ষমতা নিয়ে আরেক প্রশ্নের মাঝখানে বসে আছে এমন এক বাক্য, যা আপনাকে যমীনে চলাফেরা করতে আর খেতে বলে।"
          },
          {
            "en": "Read in isolation the verse sounds like a licence. Read where it stands, it is a loan agreement. The steadiness under your feet is described as something done for you, and the very next sentence points out that the same ground can be made to move. Nothing here is anti-worldly; the walking and the eating are commanded. But the ground is not the guarantor of the walk.",
            "bn": "আলাদা করে পড়লে আয়াতটিকে নিছক অনুমতি মনে হয়। যেখানে আছে সেখানে রেখে পড়লে বোঝা যায়, এ আসলে ধারের চুক্তি। পায়ের নিচের স্থিরতাকে বলা হয়েছে আপনার জন্য করে দেওয়া জিনিস, আর ঠিক পরের বাক্যই মনে করিয়ে দেয়, সেই মাটিকেই নড়িয়ে দেওয়া যায়। এখানে দুনিয়াবিমুখতার কিছু নেই; চলা আর খাওয়ার হুকুমই দেওয়া হয়েছে। কিন্তু চলার জামিন মাটি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Dhalul: A Broken-In Mount",
          "bn": "যালূল: পোষ মানা বাহন"
        },
        "p": [
          {
            "en": "The word is dhalulan. In Arabic it is what you call a riding animal that has been broken in — one that no longer fights the saddle and lets itself be led. The verse does not say the earth is flat, or large, or fertile. It says it has been made docile for you. That is a description of a relationship rather than of a shape, and it puts the earth in the position of a mount and its people in the position of riders.",
            "bn": "শব্দটি 'যালূলান'। আরবিতে পোষ মানানো সওয়ারি পশুকে এ নামে ডাকা হয়, যে আর জিনের বিরুদ্ধে লড়ে না, তাকে যেদিকে নেওয়া হয় সেদিকেই যায়। আয়াতটি বলে না যে যমীন সমতল, বিশাল বা উর্বর। বলে, যমীনকে তোমাদের জন্য বশ মানানো হয়েছে। এটা আকৃতির বর্ণনা নয়, সম্পর্কের বর্ণনা। এতে যমীনের জায়গা বাহনের, আর তার বাসিন্দাদের জায়গা সওয়ারের।"
          },
          {
            "en": "A tamed animal is tame because it is held so, and the next verse says exactly that about the earth. Earthquakes are not counter-evidence to this verse; they are the reminder folded into it. What is being given here is not a property of soil and rock but a permission renewed under us every day, and the giver is named at both ends of the sentence.",
            "bn": "পোষা প্রাণী পোষ মেনে থাকে, কারণ তাকে সেভাবে ধরে রাখা হয়; আর পরের আয়াত যমীন সম্পর্কে ঠিক এ কথাই বলে। ভূমিকম্প এ আয়াতের বিপক্ষে প্রমাণ নয়; আয়াতের ভেতরেই সে কথা মনে করিয়ে দেওয়া আছে। এখানে যা দেওয়া হচ্ছে, তা মাটি-পাথরের নিজস্ব কোনো গুণ নয়; প্রতিদিন আমাদের পায়ের নিচে নতুন করে দেওয়া এক অনুমতি। আর দাতার নাম আছে বাক্যের দুই মাথাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking on Its Shoulders",
          "bn": "তার কাঁধে হেঁটে বেড়ানো"
        },
        "p": [
          {
            "en": "Famshu fi manakibiha. Manakib is the plural of mankib, which in ordinary Arabic means the shoulder. Translators render it slopes, tracts or paths, since a literal shoulder does not sit easily in English, and the early authorities cited in the tafsirs gloss it in several ways: the earth's roads and mountain passes, its outlying regions and far corners, and its mountains. The commentators do not force a single choice between these.",
            "bn": "ফামশূ ফী মানাকিবিহা। 'মানাকিব' হলো 'মানকিব'-এর বহুবচন, সাধারণ আরবিতে যার অর্থ কাঁধ। অনুবাদকেরা একে ঢাল, প্রান্তর বা পথ বলে অনুবাদ করেন, কারণ আক্ষরিক 'কাঁধ' ইংরেজিতে সহজে বসে না। তাফসীরে উদ্ধৃত পূর্বসূরিরা এর কয়েক রকম ব্যাখ্যা দিয়েছেন: যমীনের রাস্তা ও গিরিপথ, এর প্রান্ত ও দূর-দূরান্ত, আর এর পাহাড়-পর্বত। মুফাসসিরগণ এর কোনো একটিকেই জোর করে বেছে নেননি।"
          },
          {
            "en": "What holds all the readings together is the picture underneath the word. If you are walking on the shoulders of something, that something is beneath you and is carrying you. Taken with dhalul in the same clause, the image is consistent: a beast made docile, and men moving about on its back. Every road, port and border crossing in human history has happened on the shoulders of a creature that was told to hold still.",
            "bn": "সব ব্যাখ্যাকে এক সুতোয় গাঁথে শব্দের নিচের ছবিটা। কোনো কিছুর কাঁধে হাঁটলে সে জিনিস আপনার নিচে, আর আপনাকে বয়ে নিয়ে চলেছে। একই বাক্যাংশের 'যালূল'-এর সঙ্গে মিলিয়ে পড়লে ছবিটা পুরো মেলে: বশ মানানো এক পশু, আর তার পিঠে চলাফেরা করছে মানুষ। মানব ইতিহাসের প্রতিটি সড়ক, বন্দর আর সীমান্ত পারাপার হয়েছে এমন এক সৃষ্টির কাঁধে, যাকে বলা হয়েছিল স্থির থাকতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eat of His Provision",
          "bn": "তাঁর রিযিক থেকে খাও"
        },
        "p": [
          {
            "en": "The next clause guards against the obvious mistake. You walk on the earth, but what you eat is min rizqihi, of His provision — the pronoun goes back to Allah, not to the ground. The earth is the place where the food appears; it is not credited with producing it. Anyone who has watched a harvest and thanked the soil, or watched a salary arrive and thanked the employer alone, has read the first half of this verse and skipped the second.",
            "bn": "পরের বাক্যাংশ সহজে হয়ে যাওয়া একটা ভুল থেকে আগলে রাখে। আপনি হাঁটেন যমীনের ওপর, কিন্তু খান 'মিন রিযকিহি', তাঁর রিযিক থেকে। সর্বনামটি ফিরে যায় আল্লাহর দিকে, মাটির দিকে নয়। যমীন শুধু সেই জায়গা, যেখানে খাবার দেখা দেয়; খাবার উৎপাদনের কৃতিত্ব তাকে দেওয়া হয়নি। যে ফসল কাটা দেখে মাটিকে ধন্যবাদ দিয়েছে, কিংবা বেতন আসতে দেখে শুধু মালিককে ধন্যবাদ দিয়েছে, সে আয়াতের প্রথম অর্ধেক পড়ে দ্বিতীয় অর্ধেক বাদ দিয়ে গেছে।"
          },
          {
            "en": "Both verbs are imperatives — walk, eat — and the jurists read commands of this sort as permission rather than obligation. 62:10 issues the same pairing for the working week: when the prayer is finished, disperse in the land and seek of the bounty of Allah, and remember Allah much. Movement and earning are not concessions grudgingly allowed. They are instructed, on the condition that the source is kept in view while you do them.",
            "bn": "দুটি ক্রিয়াই আদেশসূচক, চলো আর খাও; আর ফকীহগণ এ ধরনের আদেশকে বাধ্যবাধকতা নয়, অনুমতি হিসেবে পড়েন। ৬২:১০ আয়াত কাজের সপ্তাহের জন্য একই জোড়া দেয়: নামাজ শেষ হলে যমীনে ছড়িয়ে পড়ো, আল্লাহর অনুগ্রহ তালাশ করো, আর বেশি বেশি আল্লাহর জিকির করো। চলাফেরা আর রোজগার অনিচ্ছায় দেওয়া কোনো ছাড় নয়। এগুলোর হুকুমই দেওয়া হয়েছে, শর্ত একটাই: কাজ করার সময় রিযিক কোথা থেকে আসে, তা চোখের সামনে রাখতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "And to Him Is the Nushur",
          "bn": "আর তাঁর কাছেই নুশূর"
        },
        "p": [
          {
            "en": "The last clause turns the whole sentence: wa ilayhi an-nushur, and to Him is the resurrection. Nushur comes from a root meaning to spread out or scatter, the same root behind the command in 62:10 to disperse in the land. So the verse ends by naming the second dispersal with a word that echoes the first. You are spread out over the earth now to seek provision; you will be spread out again, and not for that.",
            "bn": "শেষ বাক্যাংশ পুরো বাক্যের মোড় ঘুরিয়ে দেয়: ওয়া ইলাইহিন-নুশূর, আর তাঁর কাছেই পুনরুত্থান। 'নুশূর' এসেছে এমন ধাতু থেকে, যার অর্থ ছড়িয়ে দেওয়া বা বিছিয়ে দেওয়া। ৬২:১০ আয়াতে 'যমীনে ছড়িয়ে পড়ো' হুকুমের পেছনেও এই ধাতু। তাই আয়াতটি শেষ হয় দ্বিতীয় ছড়িয়ে পড়ার নাম দিয়ে, এমন শব্দে যা প্রথমটির প্রতিধ্বনি। এখন আপনাকে রিযিকের খোঁজে যমীনে ছড়িয়ে দেওয়া হয়েছে; আবারও ছড়িয়ে দেওয়া হবে, তবে সেবার রিযিকের জন্য নয়।"
          },
          {
            "en": "67:24 restates it later in the surah: it is He who multiplied you throughout the earth, and to Him you will be gathered. The practical effect is a particular kind of calm at work. The verse does not ask anyone to eat less or travel less. It asks that the sentence never be allowed to stop after eat, because in the Quran it never does.",
            "bn": "সূরার পরের দিকে ৬৭:২৪ আয়াত কথাটা আবার বলে: তিনিই তোমাদের যমীনে ছড়িয়ে দিয়েছেন, আর তাঁর কাছেই তোমাদের সমবেত করা হবে। এর ফল হাতে-কলমে দেখা যায় কাজের মধ্যে এক বিশেষ রকমের প্রশান্তিতে। আয়াতটি কাউকে কম খেতে বা কম চলাফেরা করতে বলে না। বলে শুধু এটুকু: বাক্যটাকে কখনো 'খাও'-এর পরে থেমে যেতে দেবেন না, কারণ কুরআনে তা কখনো সেখানে থামে না।"
          }
        ]
      }
    ]
  },
  "67:19": {
    "sections": [
      {
        "h": {
          "en": "After the Warning, Look Up",
          "bn": "সতর্কবাণীর পর, এবার উপরে তাকান"
        },
        "p": [
          {
            "en": "Two questions about safety come first. 67:16 asks whether you feel secure that He who is above will not cause the earth to swallow you, and 67:17 whether He will not send against you a storm of stones. 67:18 then recalls that those before them denied, and how severe His reproach was. The English abridgement of Ibn Kathir treats 67:16 to 67:19 as a single passage and opens it by calling the whole of it a sign of His gentleness and mercy towards His creatures: He is able to punish, yet He is forbearing and gives respite, as 35:45 says.",
            "bn": "আগে আসে নিরাপত্তা নিয়ে দুটি প্রশ্ন। ৬৭:১৬ জিজ্ঞেস করে, যিনি উপরে আছেন তিনি তোমাদের মাটিতে ধসিয়ে দেবেন না, এ ব্যাপারে কি তোমরা নিশ্চিন্ত? ৬৭:১৭ জিজ্ঞেস করে, তিনি পাথর-বর্ষী ঝড় পাঠাবেন না, এতেও কি নিশ্চিন্ত? এরপর ৬৭:১৮ মনে করিয়ে দেয়, আগের লোকেরাও অস্বীকার করেছিল, আর তাঁর পাকড়াও কত কঠিন ছিল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৬৭:১৬ থেকে ৬৭:১৯ পর্যন্ত এক অংশ ধরে আলোচনা করে। শুরুতেই বলে, পুরো অংশটা সৃষ্টির প্রতি তাঁর কোমলতা ও রহমতের নিদর্শন। শাস্তি দেওয়ার ক্ষমতা তাঁর আছে, তবু তিনি সহনশীল, অবকাশ দেন, যেমনটা ৩৫:৪৫ আয়াতে আছে।"
          },
          {
            "en": "Then the passage turns. A-wa lam yaraw ila at-tayri fawqahum: do they not see the birds above them? The question is put about the deniers rather than to them, and the commentators name its tone. As-Sa'di calls it a reproach together with an urging to look at the state of the birds. The Muyassar paraphrases it as a charge of heedlessness: have these disbelievers been heedless, and not looked at the birds above them? The Ibn Kathir abridgement heads the verse with its own summary: the flight of birds is by the power of Allah, and a proof that He sees everything, small and large.",
            "bn": "এরপর আলোচনা মোড় নেয়। আওয়া লাম ইয়ারাও ইলাত-তাইরি ফাওকাহুম: তারা কি তাদের উপরের পাখিগুলো দেখে না? প্রশ্নটা অস্বীকারকারীদের সরাসরি করা হয়নি, করা হয়েছে তাদের নিয়ে। প্রশ্নের সুর কেমন, তাফসীরকারেরা তা বলে দেন। সা'দী একে বলেন তিরস্কার, সঙ্গে পাখিদের অবস্থার দিকে তাকানোর তাগিদ। মুয়াসসার একে গাফিলতির অভিযোগ হিসেবে খুলে বলে: এই কাফিররা কি উদাসীন হয়ে গেছে, মাথার উপরের পাখিগুলোর দিকে তাকায়নি? ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আয়াতটির আগে নিজের একটা শিরোনাম বসায়: পাখির ওড়া আল্লাহর কুদরতে, আর তা প্রমাণ যে তিনি ছোট-বড় সবকিছু দেখেন।"
          },
          {
            "en": "The 'they' of the verse are the deniers of whom the passage has been speaking, and the verse speaks only of what it names: people who were shown a sign over their heads and did not read it. It licenses nothing against any living person or community. What it asks of anyone who hears it is the same plain act it asked of them. Look up, notice the bird, and ask what is keeping it where it is. The verse itself answers that question before it ends, in two short clauses.",
            "bn": "আয়াতের 'তারা' হলো সেই অস্বীকারকারীরা, যাদের কথা এ অংশে চলছিল। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: কিছু মানুষকে মাথার উপরে নিদর্শন দেখানো হয়েছিল, তারা তা পড়েনি। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। যে-ই আয়াতটি শোনে, তার কাছে আয়াতের দাবি সেই একই সহজ কাজ, যা তাদের কাছে ছিল। উপরে তাকান, পাখিটা লক্ষ করুন, আর জিজ্ঞেস করুন কে তাকে ওখানে রেখেছে। শেষ হওয়ার আগেই আয়াতটি দুটি ছোট বাক্যে সেই প্রশ্নের জবাব দিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Saffat: Wings Laid in a Row",
          "bn": "সাফফাত: সারি বেঁধে মেলা ডানা"
        },
        "p": [
          {
            "en": "The birds are first described as saffatin, a plural participle. Al-Baghawi glosses it in a few words: they align their wings in the air. Ibn Kathir says that at times they align their wings in the air, and the Muyassar that they spread their wings as they fly through it. Al-Qurtubi gives the same sense, spreading their wings in the sky while flying, and then explains why spreading is called by this word at all: when birds spread their wings, he says, they lay them out in a row, saffan. The image is of a wing held open and still.",
            "bn": "পাখিদের প্রথম বর্ণনা সাফফাতিন, বহুবচনের কর্তৃবাচক বিশেষ্য। বাগাভী অল্প কথায় এর ব্যাখ্যা দেন: তারা শূন্যে ডানাগুলো সারি করে মেলে রাখে। ইবন কাসীর বলেন, কখনো কখনো তারা বাতাসে ডানা সারিবদ্ধ করে রাখে। মুয়াসসার বলে, উড়ার সময় তারা শূন্যে ডানা ছড়িয়ে দেয়। কুরতুবীও একই অর্থ দেন, উড়তে উড়তে আকাশে ডানা ছড়িয়ে রাখা। তারপর তিনি ব্যাখ্যা করেন, ডানা মেলাকে এই শব্দে বলা হয় কেন। তাঁর কথায়, পাখি যখন ডানা মেলে, তখন তা এক সারিতে বিছিয়ে দেয়, যাকে আরবিতে বলে সাফ্‌ফ। ছবিটা খোলা আর স্থির ডানার।"
          },
          {
            "en": "Al-Qurtubi then quotes Abu Ja'far an-Nahhas on how Arabic speaks of birds: a bird that spreads its wings is called saff, and when it draws them together so that they strike its side, qabid, because it is gathering them in. As a witness he cites a line of the poet Abu Khirash about one that races the fall of night, seeking shelter, and drives its wing on bit-tabassuti wal-qabd, by spreading and by drawing in. In that line the same pair the verse uses describes a creature in flight.",
            "bn": "এরপর কুরতুবী আবু জা'ফর নাহহাসের কথা আনেন, পাখির বেলায় আরবি ভাষা কী বলে। যে পাখি দুই ডানা মেলে দেয়, তাকে বলে সাফ্‌ফ। আর যখন ডানা গুটিয়ে আনে, ফলে তা পাঁজরে গিয়ে লাগে, তখন বলে কাবিদ, কারণ সে ডানা টেনে নিচ্ছে। সাক্ষী হিসেবে তিনি কবি আবু খিরাশের একটি পঙ্‌ক্তি উদ্ধৃত করেন। সেখানে এমন এক উড়ন্তের কথা, যে রাত নামার আগে আশ্রয়ের দিকে ছুটছে, আর বিত-তাবাস্সুতি ওয়াল-কাবদ, অর্থাৎ মেলে আর গুটিয়ে, ডানাকে তাড়া দিচ্ছে। আয়াতের এই জোড়া শব্দই সেই পঙ্‌ক্তিতে উড়ন্ত প্রাণীর বর্ণনা দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Wa-Yaqbidna: Two Pictures",
          "bn": "ওয়া ইয়াকবিদনা: দুই রকম ছবি"
        },
        "p": [
          {
            "en": "Wa-yaqbidna: and they draw in. Here the readings separate into two pictures. Ibn Kathir, in the Arabic, reads it as a movement within flight: at times they align their wings in the air, and at times a bird gathers one wing and spreads another. The English abridgement renders the same contrast with its own glosses in brackets, gliding for the wings spread out and flapping for the gathering and spreading. Al-Qurtubi's first reading is close to this: they strike their sides with their wings. The Muyassar says they press them to their sides at times.",
            "bn": "ওয়া ইয়াকবিদনা: আর তারা গুটিয়ে নেয়। এখানে এসে ব্যাখ্যা দুই রকম ছবিতে ভাগ হয়ে যায়। আরবি তাফসীরে ইবন কাসীর একে ওড়ার ভেতরেরই একটা নড়াচড়া ধরেন। কখনো তারা বাতাসে ডানা সারি করে রাখে, কখনো একটা ডানা গুটিয়ে আরেকটা মেলে দেয়। সংক্ষিপ্ত ইংরেজি সংস্করণ একই তফাতটা বোঝাতে বন্ধনীতে নিজের দুটি শব্দ বসিয়েছে: ডানা মেলে থাকা হলো গ্লাইডিং, আর গুটিয়ে-মেলে ডানা নাড়ানো হলো ফ্ল্যাপিং। কুরতুবীর প্রথম ব্যাখ্যাও এর কাছাকাছি: তারা ডানা দিয়ে নিজেদের পাঁজরে আঘাত করে। মুয়াসসার বলে, কখনো কখনো তারা ডানা পাঁজরের সঙ্গে চেপে রাখে।"
          },
          {
            "en": "Al-Qurtubi then records a second view, introduced with qila, it is said: that they fold their wings after spreading them, when they stop flying. As-Sa'di's wording sits nearer this second picture. The birds spread their wings for flight and draw them in to come down, he says, and so stay afloat in the air, moving to and fro in it as their will and their need direct. Al-Baghawi says only that they draw their wings in after spreading. Both pictures stand in the sources, and none of the commentators consulted here argues one against the other.",
            "bn": "এরপর কুরতুবী আরেকটি মত উল্লেখ করেন, 'কীলা' অর্থাৎ 'বলা হয়' কথাটি দিয়ে। সে মতে ওড়া থামানোর সময় তারা মেলে রাখা ডানা গুটিয়ে নেয়। সা'দীর ভাষা এই দ্বিতীয় ছবির কাছাকাছি। তাঁর কথায়, পাখিরা উড়তে ডানা মেলে, নামতে ডানা গুটায়, আর এভাবে শূন্যে ভেসে থাকে, নিজের ইচ্ছা আর প্রয়োজনমতো এদিক-ওদিক যাওয়া-আসা করে। বাগাভী শুধু এটুকু বলেন যে মেলার পর তারা ডানা গুটিয়ে নেয়। দুটো ছবিই তাফসীরে রয়ে গেছে। এখানে যাঁদের তাফসীর দেখা হয়েছে, তাঁদের কেউ একটিকে অন্যটির বিপক্ষে দাঁড় করাননি।"
          },
          {
            "en": "Al-Qurtubi also notes a point of grammar: wa-yaqbidna is a present-tense verb joined to saffatin, a participle, and he cites a line of poetry in which the joining runs the other way, a participle joined to a present-tense verb. He draws no lesson from the shift, and this article will not invent one. What can be said plainly is what the two words show together. The bird is described in both of its states, open and drawn in, and in neither of them does it fall.",
            "bn": "কুরতুবী একটা ব্যাকরণগত দিকও দেখান। ওয়া ইয়াকবিদনা বর্তমান কালের ক্রিয়া, অথচ তাকে জোড়া হয়েছে সাফফাতিনের সঙ্গে, যা কর্তৃবাচক বিশেষ্য। তিনি কবিতার একটি পঙ্‌ক্তিও আনেন, যেখানে জোড়াটা উল্টো দিকে: বর্তমান কালের ক্রিয়ার সঙ্গে কর্তৃবাচক বিশেষ্য। এই বদল থেকে তিনি কোনো শিক্ষা টানেন না, এ লেখাও নতুন করে কিছু বানাবে না। তবে শব্দ দুটি মিলে যা দেখায়, তা সোজাসুজি বলা যায়। পাখিকে দেখানো হয়েছে তার দুই অবস্থাতেই, ডানা খোলা আর ডানা গোটানো। কোনো অবস্থাতেই সে পড়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Keeps Them From Falling",
          "bn": "কে তাদের পড়তে দেয় না"
        },
        "p": [
          {
            "en": "Ma yumsikuhunna illa ar-Rahman: none holds them except the Most Merciful. The commentators agree on what is being held and from what. Al-Qurtubi says none holds the birds in the air while they fly except Allah. Al-Baghawi adds the detail that answers the previous clause: none holds them back from falling, in the state of drawing in and of spreading alike. The Muyassar puts it in its own words: nothing guards them from dropping at that moment except the Most Merciful. The holding covers both states of the wing, the folded as much as the open.",
            "bn": "মা ইউমসিকুহুন্না ইল্লার-রাহমান: দয়াময় ছাড়া কেউ তাদের ধরে রাখে না। কী ধরে রাখা হচ্ছে আর কিসের থেকে, এ নিয়ে তাফসীরকারেরা একমত। কুরতুবী বলেন, উড়ন্ত অবস্থায় শূন্যে পাখিদের আল্লাহ ছাড়া কেউ ধরে রাখে না। বাগাভী আরেকটু খুলে বলেন, আর তাতে আয়াতের আগের অংশের জবাবও মেলে: ডানা গোটানো থাকুক বা মেলা, পড়ে যাওয়া থেকে তিনি ছাড়া কেউ তাদের ঠেকিয়ে রাখে না। মুয়াসসার নিজের ভাষায় বলে: তখন তাদের পড়ে যাওয়া থেকে রক্ষা করেন কেবল দয়াময়। খোলা ডানা যেমন, গোটানো ডানাও তেমনি তাঁর ধরে রাখার ভেতরে।"
          },
          {
            "en": "On how He holds them, the sources speak of what He made subject to them. Ibn Kathir says it is by the air He subjected to them, out of His mercy and His gentleness. As-Sa'di widens the account: it is He who subjected the sky and the air to them, and made their bodies and their form ready for flight. Al-Qurtubi links the verse back to an earlier one. Just as He made the earth docile for the human being, he says, He made the air docile for the birds. The dhalul of 67:15 is here spread across the sky.",
            "bn": "কীভাবে ধরে রাখেন? তাফসীরগুলো এখানে বলে, তিনি কী কী তাদের বশ করে দিয়েছেন। ইবন কাসীর বলেন, নিজের রহমত ও কোমলতায় তিনি বাতাসকে তাদের বশ করে দিয়েছেন, সেই বাতাস দিয়েই ধরে রাখেন। সা'দী কথাটা আরও বিস্তৃত করেন। তিনিই আকাশ আর বাতাস তাদের বশ করে দিয়েছেন, আর তাদের শরীর ও গড়ন ওড়ার উপযোগী করে বানিয়েছেন। কুরতুবী আয়াতটিকে আগের একটি আয়াতের সঙ্গে জুড়ে দেন। তাঁর কথায়, মানুষের জন্য যেমন তিনি মাটিকে বশ করেছেন, পাখির জন্য তেমনি বাতাসকে বশ করেছেন। ৬৭:১৫ আয়াতের যালূল এখানে আকাশজুড়ে ছড়িয়ে পড়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an is the only consulted source that frames the point in terms of physical law. It says the verse invites attention to the fact that birds have weight, that by the law of gravity weighty bodies should fall to the earth, and that normally the air cannot hold them up. Allah, it says, created the birds so that they can hold themselves up, and taught them, though they apparently have no intellect, the art of making the air carry their burden by spreading and folding their wings. Shaping the wing, enabling the air and teaching the art, it concludes, were possible only by His creative power.",
            "bn": "যেসব তাফসীর এখানে দেখা হয়েছে, তার মধ্যে কেবল মাআরিফুল কুরআন বিষয়টাকে প্রাকৃতিক নিয়মের ভাষায় বলে। তার কথায়, আয়াতটি একটা বিষয় খেয়াল করতে বলে: পাখির ওজন আছে। মাধ্যাকর্ষণের নিয়মে ভারী জিনিসের মাটিতে পড়ে যাওয়ার কথা, আর সাধারণভাবে বাতাস তাকে ধরে রাখতে পারে না। কিন্তু আল্লাহ পাখিদের এমনভাবে বানিয়েছেন যে তারা শূন্যে নিজেদের ধরে রাখতে পারে। বাহ্যত বুদ্ধি না থাকলেও তিনি তাদের শিখিয়েছেন ডানা মেলে আর গুটিয়ে বাতাসকে দিয়ে নিজেদের ভার বহন করানোর কৌশল। মাআরিফের শেষ কথা: ডানার এই গড়ন, বাতাসকে সেই ভার বইতে সক্ষম করা আর কৌশলটা শেখানো, এসব কেবল তাঁর সৃষ্টিশক্তিতেই সম্ভব ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Under the Wing",
          "bn": "ডানার নিচে রহমত"
        },
        "p": [
          {
            "en": "The clause closes on a Name: ar-Rahman, the Most Merciful. The commentators consulted here do not stop to discuss why this Name is chosen here, and that silence should be reported rather than filled. What they do is tie the holding itself to mercy. Ibn Kathir's gloss, quoted above, says the air was subjected to the birds min rahmatihi wa lutfihi, from His mercy and His gentleness. The English abridgement repeats it: Allah holds them up in the air by subjecting the air to them, out of His mercy and His gentleness.",
            "bn": "বাক্যটি শেষ হয় একটি নামে: আর-রাহমান, পরম দয়াময়। এখানে ঠিক এই নামটাই কেন এল, দেখা তাফসীরগুলো তা নিয়ে থেমে কিছু বলে না। এই নীরবতা নিজের কথা দিয়ে ভরাট না করে জানিয়ে দেওয়াই ঠিক। তবে তাঁরা ধরে রাখাটাকেই রহমতের সঙ্গে জুড়ে দেন। ইবন কাসীরের যে ব্যাখ্যা আগে এসেছে, তাতে আছে, আল্লাহ বাতাসকে পাখিদের বশ করে দিয়েছেন মিন রাহমাতিহী ওয়া লুতফিহী, তাঁর রহমত ও কোমলতা থেকে। সংক্ষিপ্ত ইংরেজি সংস্করণও একই কথা বলে: তাঁর রহমত ও কোমলতা থেকে বাতাসকে বশ করে দিয়ে আল্লাহ তাদের শূন্যে ধরে রাখেন।"
          },
          {
            "en": "The same abridgement had opened the whole passage, from 67:16, on that note: these verses are another indication of His gentleness and His mercy with His creatures, who could be punished and are given respite instead. Read beside that opening, the passage holds together. The One above, who could make the ground swallow and the sky rain stones, is the One whose mercy keeps the bird from dropping. Ar-Rahman stood over the creation of the heavens in 67:3. Here the same Name stands over something small, close and easily missed.",
            "bn": "এই সংক্ষিপ্ত সংস্করণ ৬৭:১৬ থেকে শুরু হওয়া পুরো অংশটাই খুলেছিল একই সুরে। আয়াতগুলো সৃষ্টির প্রতি তাঁর কোমলতা ও রহমতের আরেক নিদর্শন। তাদের শাস্তি দেওয়া যেত, তবু তিনি অবকাশ দেন। সেই শুরুর কথা পাশে রেখে পড়লে পুরো অংশটা এক সুতোয় গাঁথা মনে হয়। উপরে যিনি আছেন, যিনি চাইলে মাটিকে দিয়ে গ্রাস করাতে আর আকাশ থেকে পাথর বর্ষাতে পারেন, তাঁরই রহমত পাখিকে পড়তে দেয় না। ৬৭:৩ আয়াতে আর-রাহমান নামটি এসেছিল আসমানের সৃষ্টির প্রসঙ্গে। এখানে একই নাম এসেছে ছোট, কাছের, সহজে চোখ এড়িয়ে যাওয়া এক জিনিসের প্রসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Basir: Seeing What Suits Each",
          "bn": "বাসীর: কার কী মানায়, তিনি দেখেন"
        },
        "p": [
          {
            "en": "Innahu bi-kulli shay'in basir: indeed He is, of all things, Seeing. Ibn Kathir does not gloss basir as bare sight. He reads it as sight bound up with care: He sees bima yuslihu kulla shay'in min makhluqatihi, what sets each of His creatures right, which the English abridgement renders as with what is beneficial and suitable for all of His creatures. As-Sa'di is close to this. It is He who directs His servants in the way that befits them, he says, and that His wisdom requires.",
            "bn": "ইন্নাহু বিকুল্লি শাইয়িন বাসীর: নিশ্চয়ই তিনি সবকিছুর সম্যক দ্রষ্টা। ইবন কাসীর বাসীর শব্দকে কেবল দেখা অর্থে ব্যাখ্যা করেন না। তাঁর ব্যাখ্যায় এই দেখার সঙ্গে যত্ন জড়ানো: বিমা ইউসলিহু কুল্লা শাইয়িন মিন মাখলুকাতিহী, অর্থাৎ তাঁর প্রতিটি সৃষ্টির জন্য কী কল্যাণকর, তিনি তা দেখেন। সংক্ষিপ্ত ইংরেজি সংস্করণ এর অনুবাদ করেছে এভাবে: তাঁর সব সৃষ্টির জন্য যা উপকারী ও উপযুক্ত, তা তিনি দেখেন। সা'দীর কথাও কাছাকাছি। তাঁর মতে, তিনিই বান্দাদের পরিচালনা করেন সেভাবে, যেভাবে তাদের মানায় আর যেভাবে তাঁর হিকমত চায়।"
          },
          {
            "en": "The Muyassar takes the Name another way: He sees all things, it says, and no deficiency or disparity is to be seen in His creation. Its word for disparity, tafawut, is the word of 67:3. Ma'arif al-Qur'an's translation renders the clause as watchful of every thing. Between them, the readings make the closing clause more than a statement that nothing escapes His notice. The bird is seen, its need is seen, and what it is given fits it. Whoever is held in this way is also watched over.",
            "bn": "মুয়াসসার নামটিকে আরেক দিক থেকে দেখে। তার কথায়, তিনি সবকিছু দেখেন, আর তাঁর সৃষ্টিতে কোনো ঘাটতি বা অসামঞ্জস্য চোখে পড়ে না। অসামঞ্জস্যের জন্য মুয়াসসার যে শব্দ নেয়, তাফাউত, সেটা ৬৭:৩ আয়াতেরই শব্দ। মাআরিফুল কুরআনের অনুবাদে বাক্যটি দাঁড়ায়: তিনি প্রতিটি জিনিসের উপর সজাগ দৃষ্টি রাখেন। সব ব্যাখ্যা মিলিয়ে শেষ বাক্যটি শুধু এটুকু বলে না যে কিছুই তাঁর নজর এড়ায় না। তিনি পাখিকে দেখেন, তার প্রয়োজনও দেখেন, আর তাকে যা দেন তা তার জন্য মানানসই। যাকে তিনি এভাবে ধরে রাখেন, তার দেখাশোনাও তিনিই করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Near Twin in an-Nahl",
          "bn": "সূরা নাহলে প্রায় একই প্রশ্ন"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the Arabic and the English, sets beside this verse a near twin, 16:79: do they not see the birds controlled in the atmosphere of the sky? None holds them up except Allah; indeed in that are signs for a people who believe. The question, the birds and the clause ma yumsikuhunna illa are shared. The differences are there in the text: an-Nahl calls the birds musakhkharat, made subject, and names Allah, while al-Mulk speaks of wings spread and drawn in and names ar-Rahman. No source consulted here comments on the difference.",
            "bn": "আরবি ও ইংরেজি দুই তাফসীরেই ইবন কাসীর এ আয়াতের পাশে রাখেন প্রায় একই রকম আরেকটি আয়াত, ১৬:৭৯। তারা কি আকাশের শূন্যলোকে নিয়ন্ত্রিত পাখিগুলোকে দেখে না? আল্লাহ ছাড়া কেউ তাদের ধরে রাখে না। নিশ্চয়ই এতে মুমিনদের জন্য নিদর্শন আছে। প্রশ্নটা, পাখি আর মা ইউমসিকুহুন্না ইল্লা বাক্যাংশ, তিনটিই দুই আয়াতে আছে। পার্থক্যও আয়াতেই দেখা যায়। সূরা নাহল পাখিদের বলে মুসাখখারাত, অর্থাৎ বশ করে রাখা, আর নাম নেয় আল্লাহর। সূরা মুলক বলে ডানা মেলা আর গোটানোর কথা, আর নাম নেয় আর-রাহমানের। দেখা তাফসীরগুলোর কোনোটিই এই পার্থক্য নিয়ে কিছু বলেনি।"
          },
          {
            "en": "Musakhkharat is the idea as-Sa'di and Ibn Kathir reach for on this verse too: taskhir, making subject. An-Nahl also says who gains from the sight, a people who believe, and as-Sa'di says much the same here. Whoever looks at the state of the birds and takes heed, he writes, is led by it to the Creator's power and His care, and to His Oneness, He to whom alone worship is due. Ma'arif adds that a fair-minded person who weighed such signs would have no choice but to believe. None of the tafsirs consulted attaches a hadith to this verse.",
            "bn": "মুসাখখারাতের ভাবটা এই আয়াতের ব্যাখ্যাতেও সা'দী আর ইবন কাসীর টেনে আনেন: তাসখীর, বশ করে দেওয়া। দৃশ্যটা থেকে কে উপকার পায়, সূরা নাহল তাও বলে দেয়: মুমিনেরা। সা'দীও এখানে প্রায় সেই কথাই বলেন। যে পাখিদের অবস্থা দেখে শিক্ষা নেয়, এই দেখা তাকে পথ দেখায় স্রষ্টার কুদরত আর তাঁর যত্নের দিকে। আরও দেখায় যে তিনিই একক, ইবাদত কেবল তাঁরই প্রাপ্য। মাআরিফ যোগ করে, ন্যায়নিষ্ঠ কেউ এসব নিদর্শন ভালো করে ভেবে দেখলে ঈমান আনা ছাড়া তার আর উপায় থাকে না। এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Learning to Look Up",
          "bn": "উপরে তাকাতে শেখা"
        },
        "p": [
          {
            "en": "The verse is a question that can be answered on any ordinary day. Go outside and find a bird in the air. Watch it spread its wings and hold them still, then draw them in, as the commentators describe, and notice that in neither state does it fall. The verse does not ask for wonder at a rare sight. It asks for attention to a common one, the kind the deniers in this passage had over their heads every day and never read.",
            "bn": "আয়াতটি এমন এক প্রশ্ন, যার জবাব যেকোনো সাধারণ দিনেই দেওয়া যায়। বাইরে গিয়ে আকাশে একটা পাখি খুঁজে নিন। দেখুন, সে ডানা মেলে স্থির রাখে, তারপর গুটিয়ে নেয়, ঠিক যেমনটা তাফসীরকারেরা বলেছেন। আর খেয়াল করুন, কোনো অবস্থাতেই সে পড়ে যায় না। আয়াতটি বিরল কোনো দৃশ্য দেখে অবাক হতে বলে না। বলে রোজকার এক দৃশ্যে মন দিতে। এ অংশের অস্বীকারকারীদের মাথার উপর প্রতিদিন এমন দৃশ্যই থাকত, অথচ তারা কখনো তা পড়ে দেখেনি।"
          },
          {
            "en": "Then carry the question inward. The passage began with security: do you feel safe from the One above? Its answer is not a new fear but a picture of being held. Every moment the bird stays up, it is being kept up, and every moment the ground stays still beneath you, the same is true of you. That holding is mercy, and it is watched over by One who sees what each thing needs. Feeling secure is not the fault. Forgetting who holds you is.",
            "bn": "তারপর প্রশ্নটা নিজের ভেতরে নিয়ে আসুন। এ অংশ শুরু হয়েছিল নিরাপত্তার প্রশ্ন দিয়ে: যিনি উপরে আছেন, তাঁর ব্যাপারে কি তোমরা নিশ্চিন্ত? জবাবে নতুন কোনো ভয় আসে না, আসে ধরে রাখার একটা ছবি। পাখি যতক্ষণ শূন্যে থাকে, প্রতিটি মুহূর্তে কেউ তাকে ধরে রেখেছেন। পায়ের নিচের মাটি যতক্ষণ স্থির থাকে, আপনার বেলাতেও কথা একই। এই ধরে রাখাই রহমত। আর তার দেখাশোনা করেন এমন একজন, যিনি দেখেন কার কী প্রয়োজন। নিরাপদ বোধ করা দোষের নয়। দোষ হলো, কে ধরে রেখেছেন তা ভুলে যাওয়া।"
          }
        ]
      }
    ]
  },
  "67:26": {
    "sections": [
      {
        "h": {
          "en": "A Date Demanded as Proof",
          "bn": "প্রমাণ হিসেবে তারিখের দাবি"
        },
        "p": [
          {
            "en": "Verse 67:26 is a reply, and it cannot be read without the question it answers. In 67:25 they say: when is this promise, if you are truthful? Ibn Kathir places the speakers directly after the verse on the gathering. They are the disbelievers who reject the final return and doubt that it will really happen, and their question means: when will this gathering after separation, which you tell us about, take place? The surah has just said, in 67:24, that He spread them across the earth and that to Him they will be gathered.",
            "bn": "৬৭:২৬ আয়াতটি একটি জবাব। যে প্রশ্নের জবাব, সেটা না জেনে একে পড়া যায় না। ৬৭:২৫ আয়াতে তারা বলে: তোমরা সত্যবাদী হলে বল, এ ওয়াদা কবে? ইবন কাসীর প্রশ্নকারীদের চিনিয়ে দেন ঠিক সমবেত হওয়ার আয়াতের পরেই। এরা সেই কাফির, যারা শেষ প্রত্যাবর্তন অস্বীকার করে, আর তা আদৌ ঘটবে কি না তাতে সন্দেহ করে। তাদের প্রশ্নের মানে: ছড়িয়ে পড়ার পর আবার একত্র হওয়ার যে খবর তুমি দিচ্ছ, তা কবে ঘটবে? এর ঠিক আগে ৬৭:২৪ আয়াতে সূরা বলেছে, তিনিই তাদের যমীনে ছড়িয়ে দিয়েছেন, আর তাঁর কাছেই তাদের সমবেত করা হবে।"
          },
          {
            "en": "The commentators name the promise from slightly different angles. The Muyassar makes it the promise of the gathering, the Hashr, and hears the plural you of in kuntum as aimed at the believers: tell us its time, O believers, if you are truthful in what you claim. At-Tabari describes the askers as people urging the Prophet ﷺ to hasten the punishment and the coming of the Hour. As-Sa'di calls it the promise of recompense, al-jaza', which these stubborn opponents deny. Each reading points to the same Day from a different side.",
            "bn": "ওয়াদাটা কী, তাফসীরকারেরা তা বলেন একটু ভিন্ন ভিন্ন দিক থেকে। মুয়াসসারের মতে এটি হাশরের ওয়াদা। আর ইন কুনতুম, অর্থাৎ ‘তোমরা যদি’, এই বহুবচন সম্বোধন তার মতে মুমিনদের দিকে: হে মুমিনগণ, তোমাদের দাবিতে সত্যবাদী হলে এর সময়টা আমাদের জানাও। তাবারীর বর্ণনায় প্রশ্নকারীরা নবী ﷺ-কে তাগাদা দিচ্ছিল, শাস্তি আর কিয়ামত তাড়াতাড়ি এনে দেখাতে। সা'দী একে বলেন প্রতিদানের ওয়াদা, আল-জাযা, যা এই একগুঁয়ে বিরোধীরা অস্বীকার করে। প্রতিটি ব্যাখ্যা একই দিনটিকেই দেখায়, শুধু ভিন্ন ভিন্ন পাশ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Clauses, Both Narrowed",
          "bn": "দুই বাক্যে দুই সীমারেখা"
        },
        "p": [
          {
            "en": "The answer is nine Arabic words, opened by qul, say. The Prophet ﷺ is not left to compose a reply under pressure; the words are handed to him. Each of its two clauses opens with innama, the particle that narrows a statement to what follows it: the knowledge is with Allah, and with nobody else; I am a clear warner, and nothing beyond that. At-Tabari's paraphrase of the second clause shows the narrowing at work, since he renders it wa ma ana illa nadhir: I am nothing but a warner to you.",
            "bn": "জবাবটি আরবিতে নয়টি শব্দ, শুরু কুল দিয়ে, অর্থাৎ ‘বল’। চাপের মুখে নবী ﷺ-কে নিজে জবাব বানাতে হয়নি, কথাগুলো তাঁর হাতে তুলে দেওয়া হয়েছে। দুটি বাক্যের প্রতিটি শুরু হয়েছে ইন্নামা দিয়ে। এই অব্যয় কথাকে তার পরের অংশে সীমাবদ্ধ করে দেয়। জ্ঞান আল্লাহর কাছে, আর কারও কাছে নয়। আমি স্পষ্ট সতর্ককারী, এর বেশি কিছু নই। দ্বিতীয় বাক্যের ব্যাখ্যায় তাবারী লেখেন ওয়া মা আনা ইল্লা নাযীর: আমি তোমাদের জন্য সতর্ককারী ছাড়া আর কিছু নই। সীমাবদ্ধ করার অর্থটা তাঁর ব্যাখ্যাতেই স্পষ্ট হয়ে ওঠে।"
          },
          {
            "en": "The two clauses face each other. The first states what the Prophet ﷺ does not hold, and the second states what he does. One is a limit, the other a task, and the verse sets them side by side without apology. The question of 67:25 assumed that a messenger who could not name the day had no claim on anyone. The reply refuses that assumption. His claim never rested on naming the day; it rested on delivering the warning he had been given, and delivering it clearly.",
            "bn": "বাক্য দুটি যেন মুখোমুখি দাঁড়ানো। প্রথমটি বলে নবী ﷺ-এর কাছে কী নেই, দ্বিতীয়টি বলে কী আছে। একটি সীমা, অন্যটি দায়িত্ব। আয়াত দুটোকে পাশাপাশি রাখে, কোনো কৈফিয়ত ছাড়াই। ৬৭:২৫ আয়াতের প্রশ্নের পেছনে ধারণা ছিল, যে রাসূল দিনটির তারিখ বলতে পারেন না, তাঁর কথা মানার দায় কারও নেই। জবাব এই ধারণাটাই নাকচ করে দেয়। তাঁর দাবি কখনো তারিখ বলে দেওয়ার উপর দাঁড়িয়ে ছিল না। দাঁড়িয়ে ছিল তাঁকে দেওয়া সতর্কবাণী পৌঁছে দেওয়ার উপর, আর তা পরিষ্কার করে পৌঁছে দেওয়ার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-'Ilm: The Knowledge of When",
          "bn": "আল-ইলম: কবে, সেই জ্ঞান"
        },
        "p": [
          {
            "en": "The verse says al-'ilm, the knowledge, with the definite article and without naming its object. The commentators consulted here agree on what it refers to. At-Tabari: the knowledge of the Hour, and of when the Resurrection will take place, is with Allah, and none other than Him knows it. Al-Qurtubi: say to them, O Muhammad, the knowledge of the time of the Hour's coming is with Allah, and nobody else knows it. The Muyassar: knowledge of the time of the Hour is something Allah has reserved for Himself alone.",
            "bn": "আয়াতে আছে আল-ইলম, অর্থাৎ ‘সেই জ্ঞান’। নির্দিষ্টবাচক আল আছে, কিন্তু কিসের জ্ঞান তা বলা নেই। এখানে যেসব তাফসীর দেখা হয়েছে, সেগুলো এর অর্থে একমত। তাবারী বলেন, কিয়ামতের জ্ঞান, আর পুনরুত্থান কবে ঘটবে সে জ্ঞান আল্লাহর কাছে, তিনি ছাড়া কেউ তা জানে না। কুরতুবী বলেন, হে মুহাম্মাদ, তাদের বলে দাও, কিয়ামত সংঘটিত হওয়ার সময়ের জ্ঞান আল্লাহর কাছে, আর কেউ তা জানে না। মুয়াসসার বলে, কিয়ামতের সময়ের জ্ঞান আল্লাহ কেবল নিজের জন্যই রেখে দিয়েছেন।"
          },
          {
            "en": "Ibn Kathir's wording adds a qualifier worth noticing. No one knows the time of it 'ala at-ta'yin, specifically and exactly, except Allah. The English abridgement renders this as: no one knows the time of the Day of Judgement exactly except Allah. What is withheld is the fixed moment. What is not withheld, as the next clause of his comment shows, is the fact of the Day itself, and that fact is exactly what the Prophet ﷺ was commanded to announce to the people asking.",
            "bn": "ইবন কাসীরের কথায় একটা ছোট শর্ত আছে, খেয়াল করার মতো। তিনি বলেন, আলাত তা'য়ীন, অর্থাৎ সুনির্দিষ্টভাবে এর সময় আল্লাহ ছাড়া কেউ জানে না। ইংরেজি সংক্ষেপেও একই কথা: বিচার দিবসের সময় ঠিক ঠিক আল্লাহ ছাড়া কেউ জানে না। গোপন রাখা হয়েছে নির্দিষ্ট মুহূর্তটি। কিন্তু দিনটি যে আসবে, সেই সত্য গোপন নয়। তাঁর মন্তব্যের পরের অংশেই তা দেখা যায়। আর এই সত্যটিই প্রশ্নকারীদের কাছে ঘোষণা করার আদেশ নবী ﷺ পেয়েছিলেন।"
          },
          {
            "en": "At-Tabari's framing is worth keeping in view as well. The askers in his reading were hastening two things, al-'adhab and qiyam as-sa'ah, the punishment and the rising of the Hour, and the answer covers both. Their haste, as the commentators describe it, came from denial and not from longing; as-Sa'di says they put the question takdhiban, to give the lie to the promise. The verse does not argue with the haste. It moves the question from the Messenger to Allah, who holds the answer.",
            "bn": "তাবারী প্রশ্নটাকে যেভাবে দেখেন, সেটাও মনে রাখার মতো। তাঁর পাঠে প্রশ্নকারীরা দুটি জিনিস তাড়াতাড়ি চাইছিল: আল-আযাব আর কিয়ামুস সা'আহ, অর্থাৎ শাস্তি আর কিয়ামতের আগমন। জবাবে দুটোরই উত্তর আছে। তাফসীরকারদের বর্ণনায় এই তাড়ার উৎস ছিল অস্বীকার, আকাঙ্ক্ষা নয়। সা'দী বলেন, তারা প্রশ্নটা করেছিল তাকযীবান, অর্থাৎ ওয়াদাটাকে মিথ্যা প্রতিপন্ন করতে। আয়াত এই তাড়াহুড়ার সঙ্গে তর্কে যায় না। প্রশ্নটাকে রাসূলের কাছ থেকে সরিয়ে আল্লাহর দিকে ফিরিয়ে দেয়, যাঁর কাছে এর উত্তর আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Counterpart in al-A'raf",
          "bn": "আল-আ'রাফে এর জোড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi links the verse to one other place, with the single word naziruhu, its counterpart: qul innama 'ilmuha 'inda rabbi, say, its knowledge is only with my Lord. Those words are in 7:187, where people ask the Prophet ﷺ about the Hour: when is its arrival? There the knowledge is named outright, 'ilmuha, its knowledge, the pronoun pointing back to the Hour. Here it is simply al-'ilm, the knowledge, and the question of 67:25 supplies what it means.",
            "bn": "কুরতুবী আয়াতটিকে আরেকটি জায়গার সঙ্গে জুড়ে দেন একটিমাত্র শব্দে: নাযীরুহু, এর জোড়া। সেখানে আছে কুল ইন্নামা ইলমুহা ইনদা রব্বী, বল, এর জ্ঞান তো কেবল আমার রবের কাছে। কথাগুলো ৭:১৮৭ আয়াতের, যেখানে লোকেরা নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করে, তা কখন ঘটবে। সেখানে জ্ঞানের বিষয় সরাসরি বলা আছে: ইলমুহা, এর জ্ঞান, সর্বনামটি কিয়ামতের দিকে ফেরে। এখানে শুধু আল-ইলম, সেই জ্ঞান। কিসের জ্ঞান, তা বুঝিয়ে দেয় ৬৭:২৫ আয়াতের প্রশ্ন।"
          },
          {
            "en": "Read beside its counterpart, 7:187 says more on the same theme: none will reveal its time except Him; it will not come upon you except unexpectedly; they ask you as if you are familiar with it. The verse of al-Mulk keeps only the core. No hadith is attached to 67:26 in any of the commentaries consulted for it, so this article quotes none. The weight of the passage rests on the two Qur'anic replies, given in two surahs to the same question, standing side by side.",
            "bn": "জোড়া আয়াতটি পাশে রেখে পড়লে দেখা যায়, ৭:১৮৭ একই বিষয়ে আরও কিছু বলে। তিনি ছাড়া কেউ এর সময় প্রকাশ করবে না। তা তোমাদের উপর আসবে আকস্মিকভাবে। তারা তোমাকে এমনভাবে জিজ্ঞেস করে যেন তুমি এ বিষয়ে ভালো জানো। সূরা মুলকের আয়াত রাখে শুধু মূল কথাটুকু। এ আয়াতের জন্য দেখা কোনো তাফসীরেই ৬৭:২৬-এর সঙ্গে কোনো হাদিস যুক্ত নেই, তাই এ লেখাতেও কোনো হাদিস আনা হয়নি। এ অংশের ভার দুটি কুরআনী জবাবের উপর: একই প্রশ্নের জবাব, দুই সূরায়, পাশাপাশি দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth Without a Timetable",
          "bn": "সময়সূচি ছাড়াই সত্য"
        },
        "p": [
          {
            "en": "As-Sa'di names what was wrong with the question itself. The deniers made their test of truthfulness that they be told the time of its coming, and he calls this zulm and 'inad, wrongdoing and stubborn resistance. Then he gives the reason in one line: there is no necessary link between the truth of this report and the reporting of its time. A report can be wholly true while its date stays unknown even to the one who conveys it.",
            "bn": "প্রশ্নটার গলদ কোথায়, সা'দী তা ধরিয়ে দেন। অস্বীকারকারীরা সত্যবাদিতার মাপকাঠি বানিয়েছিল এই শর্ত: আগমনের সময়টা তাদের জানাতে হবে। সা'দী একে বলেন যুলম ও ইনাদ, অন্যায় আর একগুঁয়েমি। তারপর একটিমাত্র বাক্যে কারণটা দেন: এই খবর সত্য হওয়া আর তার সময় জানিয়ে দেওয়ার মধ্যে কোনো আবশ্যিক সম্পর্ক নেই। কোনো খবর পুরোপুরি সত্য হতে পারে, অথচ তার তারিখ অজানা থাকতে পারে, এমনকি যিনি খবরটি পৌঁছে দেন তাঁর কাছেও।"
          },
          {
            "en": "Truth, as-Sa'di continues, is known by its proofs, and Allah has set up proofs and evidences for this report that leave not the least doubt for whoever lends an ear and is present in mind, words that match the wording of 50:37 (the verse number is this article's own pointer, not as-Sa'di's). The surah has just laid out such proofs. In 67:23 He produced them and gave them hearing, sight and hearts; in 67:24 He spread them across the earth, and to Him they will be gathered. The question of 67:25 stepped past all of it to ask for a date.",
            "bn": "সা'দী আরও বলেন, সত্য চেনা যায় তার প্রমাণ দিয়ে। আর এ খবরের পক্ষে আল্লাহ এমন সব দলিল-প্রমাণ দাঁড় করিয়েছেন যে, যে মন দিয়ে কান পেতে শোনে, তার মনে সামান্য সন্দেহও থাকে না। তাঁর এ কথার শব্দ ৫০:৩৭ আয়াতের শব্দের সঙ্গে মেলে (আয়াত নম্বরটি এই লেখার নিজের ইঙ্গিত, সা'দীর নয়)। সূরাটি ঠিক এমন প্রমাণই এইমাত্র সাজিয়েছে। ৬৭:২৩ আয়াতে তিনি তাদের সৃষ্টি করেছেন, দিয়েছেন শোনার ও দেখার শক্তি আর অন্তর। ৬৭:২৪ আয়াতে তিনি তাদের যমীনে ছড়িয়ে দিয়েছেন, আর তাঁর কাছেই তারা সমবেত হবে। ৬৭:২৫ আয়াতের প্রশ্ন এর সবকিছু পাশ কাটিয়ে শুধু তারিখ চেয়েছে।"
          },
          {
            "en": "The principle reaches past this one exchange. People still treat a missing date as a weakness in any claim about the unseen, as though what cannot be scheduled cannot be real. As-Sa'di's line answers that too. The certainty of a thing and the knowledge of its timing are two different kinds of knowledge, and a person may hold the first firmly while the second remains with Allah. Every believer already lives this way with his own death, sure of it and unaware of its day.",
            "bn": "এই নীতি শুধু এই একটি কথোপকথনে আটকে নেই। অদৃশ্যের কোনো খবরে তারিখ না থাকলে মানুষ আজও সেটাকে দুর্বলতা ভাবে, যেন যার সময়সূচি বানানো যায় না তা বাস্তব হতে পারে না। সা'দীর কথাটি এরও জবাব। এখানে দুই ভিন্ন রকমের জ্ঞান: কোনো কিছু ঘটবে, এ নিশ্চয়তা এক জিনিস, আর কবে ঘটবে সে জ্ঞান আরেক জিনিস। প্রথমটি কেউ দৃঢ়ভাবে ধরে রাখতে পারে, আর দ্বিতীয়টি থাকে আল্লাহর কাছে। প্রত্যেক মুমিন নিজের মৃত্যুর বেলায় তো এভাবেই বাঁচে: মৃত্যু নিশ্চিত, দিনটি অজানা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warner Whose Warning Is Plain",
          "bn": "যাঁর সতর্কবাণী সুস্পষ্ট"
        },
        "p": [
          {
            "en": "Wa innama ana nadhirun mubin. At-Tabari explains the warner as one who warns them of Allah's punishment for their disbelief in Him, and mubin as one who has made his warning plain to them. The Muyassar gives the two words their two jobs: I am a warner to you, making you fear the outcome of your disbelief, and I make clear to you what Allah commanded me to make clear, with the utmost clarity. In both readings the warning is already complete before anyone asks when.",
            "bn": "ওয়া ইন্নামা আনা নাযীরুম মুবীন। তাবারীর ব্যাখ্যায় নাযীর হলেন সেই জন, যিনি তাদের সতর্ক করেন: আল্লাহকে অস্বীকার করলে তাঁর শাস্তি আসবে। আর মুবীন মানে, তিনি নিজের সতর্কবাণী তাদের কাছে স্পষ্ট করে দিয়েছেন। মুয়াসসার দুই শব্দকে দুই দায়িত্ব দেয়। আমি তোমাদের সতর্ককারী, তোমাদের কুফরির পরিণাম সম্পর্কে তোমাদের ভয় দেখাই। আর আল্লাহ যা স্পষ্ট করতে বলেছেন, তা আমি তোমাদের কাছে সবচেয়ে পরিষ্কারভাবে খুলে বলি। দুই ব্যাখ্যাতেই কেউ ‘কবে’ জিজ্ঞেস করার আগেই সতর্কবাণী পূর্ণ হয়ে আছে।"
          },
          {
            "en": "Al-Qurtubi compresses the phrase into two words: mukhawwif wa mu'allim, one who makes you fear and who teaches you. The pairing is worth dwelling on. A warning with no teaching only frightens, and teaching with no warning can leave a listener at ease when he should not be. In al-Qurtubi's gloss the Prophet ﷺ is both at once. He ranks neither above the other, and the verse lets the warner's role stand complete in itself, without a date attached to it.",
            "bn": "কুরতুবী পুরো কথাটা দুই শব্দে গুটিয়ে আনেন: মুখাওয়িফ ওয়া মু'আল্লিম, অর্থাৎ যিনি ভয় দেখান এবং শেখানও। জোড়াটা নিয়ে একটু ভাবা যায়। শিক্ষা ছাড়া সতর্কবাণী কেবল ভয় ধরায়। আবার সতর্কতা ছাড়া শিক্ষা শ্রোতাকে এমন সময় নিশ্চিন্ত রেখে দিতে পারে, যখন নিশ্চিন্ত থাকার কথা নয়। কুরতুবীর ব্যাখ্যায় নবী ﷺ একসঙ্গে দুটোই। কোনোটিকে তিনি অন্যটির উপরে রাখেন না। আর আয়াতও সতর্ককারীর দায়িত্বকে নিজের জায়গায় পূর্ণ রেখে দেয়, তার সঙ্গে কোনো তারিখ জুড়ে দেয় না।"
          },
          {
            "en": "Ibn Kathir reads the clause as a statement of duty: upon me is only the conveying, and I have conveyed it to you. The English abridgement has: I am only obligated to convey, and verily I have performed my duty towards you. The past tense matters. The answer to when is it coming ends with something that has already happened, which is that the message has been delivered. Whatever the timing of the Day, the listeners' position is settled in one respect, since the warning has reached them.",
            "bn": "ইবন কাসীর বাক্যটিকে পড়েন দায়িত্বের ঘোষণা হিসেবে: আমার উপর কেবল পৌঁছে দেওয়ার দায়, আর তা আমি তোমাদের কাছে পৌঁছে দিয়েছি। ইংরেজি সংক্ষেপেও একই কথা: আমার দায়িত্ব শুধু পৌঁছে দেওয়া, আর তোমাদের প্রতি সে দায়িত্ব আমি অবশ্যই পালন করেছি। অতীত কালটা লক্ষ করার মতো। ‘কবে আসবে’ প্রশ্নের জবাব শেষ হয় এমন এক কথায়, যা ইতিমধ্যে ঘটে গেছে: বার্তা পৌঁছে গেছে। দিনটির সময় যখনই হোক, শ্রোতাদের অবস্থা এক দিক থেকে স্থির হয়ে গেছে, কারণ সতর্কবাণী তাদের কাছে পৌঁছেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Unknown When, Certain That",
          "bn": "কবে অজানা, আসবে নিশ্চিত"
        },
        "p": [
          {
            "en": "Between the two clauses, Ibn Kathir places a sentence that holds the verse together. He gives it in the Prophet's ﷺ own voice: no one knows its time exactly except Allah, but He commanded me to tell you that it is coming and will happen without doubt, so beware of it. Fa-hdharuhu, so beware of it, is where the comment lands. The not-knowing is not offered as a reason to relax. It is placed beside a certainty and a command, and the command is to stay on guard.",
            "bn": "দুই বাক্যের মাঝখানে ইবন কাসীর এমন একটি কথা বসান, যা পুরো আয়াতকে এক সুতোয় বাঁধে। কথাটা তিনি বলেন নবী ﷺ-এর নিজের মুখে: এর সুনির্দিষ্ট সময় আল্লাহ ছাড়া কেউ জানে না, তবে তিনি আমাকে আদেশ করেছেন তোমাদের জানাতে যে এটা ঘটবেই, কোনো সন্দেহ নেই, অতএব এ থেকে সাবধান হও। ফাহযারূহু, অতএব সাবধান হও, এখানে এসেই মন্তব্যটা থামে। না জানাটাকে তিনি নিশ্চিন্ত থাকার অজুহাত বানান না। তার পাশে রাখেন একটি নিশ্চয়তা আর একটি আদেশ, আর আদেশটা হলো সতর্ক থাকা।"
          },
          {
            "en": "The askers of 67:25 are described as a group, and the commentators call them disbelievers who denied the return. The verse speaks only of what it names: a question put in denial and the answer given to it. It licenses nothing against any living person or community, and it hands no reader a label to fasten on a neighbour who asks a sincere question about the Hour. The surah's next step, in 67:27, turns to the moment they see the promise drawing near, and this article leaves that verse to its own place.",
            "bn": "৬৭:২৫ আয়াতের প্রশ্নকারীদের বর্ণনা এসেছে একটি দল হিসেবে, আর তাফসীরকারেরা তাদের বলেন প্রত্যাবর্তন অস্বীকারকারী কাফির। আয়াত কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে: অস্বীকারের সুরে করা একটি প্রশ্ন, আর তার দেওয়া জবাব। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কিয়ামত নিয়ে আন্তরিকভাবে প্রশ্ন করে এমন প্রতিবেশীর গায়ে লাগানোর মতো কোনো তকমাও কোনো পাঠকের হাতে তুলে দেয় না। সূরার পরের ধাপ ৬৭:২৭ আয়াতে, যেখানে তারা ওয়াদাকে কাছে আসতে দেখে। সে আয়াতের কথা আসবে তার নিজের জায়গায়, এ লেখায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living by the Undated Day",
          "bn": "তারিখহীন দিনের প্রস্তুতি"
        },
        "p": [
          {
            "en": "The verse closes one door firmly. Whoever claims to know the time of the Hour claims what at-Tabari, al-Qurtubi and the Muyassar each say belongs to Allah alone. A believer who meets a confident prediction, however learned its source may seem, already holds the reply that the Prophet ﷺ himself was given to speak. If the Messenger was commanded to say that the knowledge is with Allah, then no one who comes after him holds it, whatever charts or signs he brings.",
            "bn": "আয়াতটি একটা দরজা শক্ত করে বন্ধ করে দেয়। কিয়ামতের সময় জানার দাবি যে করে, সে এমন জ্ঞানের দাবি করে যা তাবারী, কুরতুবী ও মুয়াসসার প্রত্যেকের মতে কেবল আল্লাহর। কোনো মুমিনের সামনে কেউ আত্মবিশ্বাসের সঙ্গে ভবিষ্যদ্বাণী করলে, তার উৎস যত বিদ্বানই মনে হোক, জবাবটা মুমিনের হাতে আগে থেকেই আছে: নবী ﷺ-কে নিজে যে জবাব বলতে দেওয়া হয়েছিল, সেটাই। রাসূলকেই যদি বলতে আদেশ করা হয় যে জ্ঞান আল্লাহর কাছে, তবে তাঁর পরে আসা কেউ সে জ্ঞানের মালিক নয়, সে যত হিসাব-নিকাশ বা আলামতই হাজির করুক।"
          },
          {
            "en": "It also opens another door. If the date is withheld, the question becomes what to do while it stays withheld, and Ibn Kathir's so beware of it is the answer. The second clause then gives a model to anyone who speaks of the faith: say what you were given, say it plainly, and claim no more. The Prophet's ﷺ honesty about the limit of his knowledge did not weaken his message. In this verse, that honesty is part of the message he was sent to deliver.",
            "bn": "আবার আয়াতটি আরেকটা দরজা খুলেও দেয়। তারিখ যদি গোপনই থাকে, তাহলে প্রশ্ন দাঁড়ায়: যতদিন গোপন থাকে, ততদিন কী করব? ইবন কাসীরের ‘অতএব সাবধান হও’ কথাটাই এর জবাব। দ্বীনের কথা যিনি বলেন, দ্বিতীয় বাক্যটি তাঁর জন্য একটা আদর্শও রেখে যায়: যা পেয়েছেন তা বলুন, পরিষ্কার করে বলুন, আর এর বেশি দাবি করবেন না। নিজের জ্ঞানের সীমা নিয়ে নবী ﷺ-এর সততা তাঁর বার্তাকে দুর্বল করেনি। এ আয়াতে সেই সততা তাঁর পৌঁছে দেওয়া বার্তারই অংশ।"
          }
        ]
      }
    ]
  }
});
