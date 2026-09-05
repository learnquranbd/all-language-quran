/**
 * Tadabbur long-form articles — surah 21.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "21:30": {
    "sections": [
      {
        "h": {
          "en": "A Question for Deniers",
          "bn": "অস্বীকারকারীদের প্রতি প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse opens with a question aimed at a specific audience: have those who disbelieve not considered? Surah al-Anbiya has been dismantling shirk by argument — 21:22 reasons that had there been gods in the heavens and the earth besides Allah, both would have fallen to ruin. Now the surah turns from the logic of governance to the evidence of origins, and asks the deniers to look at the world's own history: the heavens and the earth were ratq, and We parted them.",
            "bn": "আয়াতটি খোলে একটি নির্দিষ্ট শ্রোতাদের দিকে তাক করা প্রশ্ন দিয়ে: যারা কুফরি করে তারা কি ভেবে দেখেনি? সূরা আল-আম্বিয়া যুক্তি দিয়ে শিরক ভেঙে চলছিল — 21:22 যুক্তি দেয়, আসমান-যমীনে আল্লাহ ছাড়া আরও উপাস্য থাকলে দুটোই ধ্বংস হয়ে যেত। এবার সূরাটি পরিচালনার যুক্তি থেকে উৎপত্তির সাক্ষ্যে ফেরে, আর অস্বীকারকারীদের বলে জগতের নিজের ইতিহাসের দিকে তাকাতে: আসমানসমূহ ও যমীন ছিল রাতক, আর আমরা সে দুটিকে পৃথক করে দিলাম।"
          },
          {
            "en": "The form of the question matters. Awalam yara — have they not seen — appeals not to a hidden doctrine but to something available for inspection; the deniers are treated as people with eyes and a world in front of them. The surah has just challenged them in 21:24 to bring their proof. The Quran holds itself to the same standard and produces its exhibits: origins, rain, life, order. Denial is portrayed not as a shortage of evidence but as a refusal to look at it.",
            "bn": "প্রশ্নের গঠনটিই তাৎপর্যপূর্ণ। আওয়ালাম ইয়ারা — তারা কি দেখেনি — কোনো গোপন মতবাদের কাছে নয়, বরং পরিদর্শনযোগ্য কিছুর কাছে আবেদন জানায়; অস্বীকারকারীদের গণ্য করা হয়েছে চোখওয়ালা মানুষ হিসেবে, যাদের সামনে একটা জগৎ আছে। সূরাটি এইমাত্র 21:24 আয়াতে বলেছে: তোমাদের প্রমাণ আনো। কুরআন নিজেকেও একই মানদণ্ডে বাঁধে এবং নিজের প্রদর্শনী হাজির করে: উৎপত্তি, বৃষ্টি, প্রাণ, শৃঙ্খলা। অস্বীকারকে আঁকা হয়েছে প্রমাণের ঘাটতি হিসেবে নয়, বরং তা দেখতে অস্বীকৃতি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ratq and Fatq",
          "bn": "রাতক ও ফাতক"
        },
        "p": [
          {
            "en": "The two Arabic words carry the whole image. Ratq is a thing sewn shut, joined, closed; fataqa is to split, to open apart. The verse states that the heavens and the earth were a joined, closed thing — kanata ratqan — and that Allah parted them, fataqnahuma. What exactly the joining and the parting were, the verse does not elaborate, and the earliest authorities read it in more than one way, all recorded by at-Tabari with their chains.",
            "bn": "আরবি শব্দ দুটিই পুরো চিত্রটি বহন করে। রাতক হলো সেলাই করে আটকানো, জোড়া লাগানো, বন্ধ কিছু; ফাতাকা মানে চিরে ফেলা, ফাঁক করে খোলা। আয়াতটি বলে, আসমানসমূহ ও যমীন ছিল জোড়া, বন্ধ এক বস্তু — কানাতা রাতকান — আর আল্লাহ সে দুটিকে পৃথক করলেন — ফাতাকনাহুমা। জোড়াটা ও পৃথক করাটা ঠিক কী ছিল, আয়াত তার বিস্তারিত দেয় না, আর প্রাচীনতম কর্তৃপক্ষগণ এটিকে একাধিকভাবে পড়েছেন — সবই আত-তাবারী সনদসহ লিপিবদ্ধ করেছেন।"
          },
          {
            "en": "One reading, related from early authorities: the heavens and the earth were one joined entity, and He separated them from each other. Another: the heaven was a single layer, and He split it into seven, and the earth likewise into seven. A third, related from Ibn Abbas (RA) among others: the heaven was closed and gave no rain, and the earth was closed and grew nothing, and He opened the one with rain and the other with plants.",
            "bn": "একটি পাঠ, প্রাচীন কর্তৃপক্ষদের থেকে বর্ণিত: আসমানসমূহ ও যমীন ছিল একটিই জোড়া সত্তা, আর তিনি সে দুটিকে পরস্পর থেকে আলাদা করলেন। আরেকটি: আসমান ছিল একটিই স্তর, তিনি তাকে সাতে বিভক্ত করলেন, যমীনকেও তেমনি সাতে। তৃতীয়টি, ইবনে আব্বাস (রাঃ)-সহ অন্যদের থেকে বর্ণিত: আসমান ছিল বন্ধ — বৃষ্টি দিত না, আর যমীন ছিল বন্ধ — কিছু ফলাত না; তিনি একটিকে খুললেন বৃষ্টি দিয়ে, অন্যটিকে উদ্ভিদ দিয়ে।"
          },
          {
            "en": "At-Tabari himself preferred the rain-and-growth reading, arguing from the clause that immediately follows — and We made from water every living thing — so that the verse's two halves speak of one connected mercy. Ibn Kathir presents the parting of a joined creation. The classical tradition held these readings side by side without anxiety; the verse's argument lands on every reading, because each describes a world wholly arranged by One doer, before any human eye watched.",
            "bn": "আত-তাবারী নিজে বৃষ্টি-ও-উদ্ভিদের পাঠটিকে প্রাধান্য দিয়েছেন — যুক্তি টেনেছেন ঠিক পরের বাক্যাংশ থেকে — আর আমরা পানি থেকে প্রতিটি জীবন্ত জিনিস বানিয়েছি — যাতে আয়াতের দুই অর্ধ একটিই সংযুক্ত রহমতের কথা বলে। ইবনে কাসীর উপস্থাপন করেন জোড়া সৃষ্টিকে পৃথক করার পাঠটি। ধ্রুপদী ঐতিহ্য এই পাঠগুলোকে কোনো উদ্বেগ ছাড়াই পাশাপাশি রেখেছে; আয়াতের যুক্তি প্রতিটি পাঠেই নিশানায় লাগে, কারণ প্রতিটিই বর্ণনা করে এমন এক জগৎকে, যা সম্পূর্ণভাবে সাজিয়েছেন এক কর্তা — কোনো মানুষের চোখ দেখার আগেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Living Thing From Water",
          "bn": "পানি থেকে প্রতিটি প্রাণ"
        },
        "p": [
          {
            "en": "Wa ja'alna minal-ma'i kulla shay'in hayy — and We made from water every living thing. The commentators read it in two ways that converge: water as the material from which living things were created, or water as that without which no living thing survives. Other verses keep the theme: 24:45 says Allah created every moving creature from water, and 25:54 that He created from water a human being and gave him lineage and marriage. The most ordinary substance in the world is the signature on every living thing.",
            "bn": "ওয়া জা'আলনা মিনাল-মা'ই কুল্লা শাইয়িন হাইয় — আর আমরা পানি থেকে বানিয়েছি প্রতিটি জীবন্ত জিনিস। মুফাসসিরগণ এটিকে দুইভাবে পড়েন, যা এক জায়গায় মেশে: পানি সেই উপাদান যা থেকে জীবেরা সৃষ্ট, অথবা পানি সেই জিনিস যা ছাড়া কোনো জীব বাঁচে না। অন্য আয়াতগুলো প্রসঙ্গটি ধরে রাখে: 24:45 বলে, আল্লাহ প্রতিটি বিচরণশীল প্রাণী পানি থেকে সৃষ্টি করেছেন; আর 25:54 বলে, তিনি পানি থেকে মানুষ সৃষ্টি করে তাকে দিয়েছেন বংশ ও বৈবাহিক সম্পর্ক। জগতের সবচেয়ে সাধারণ পদার্থটিই প্রতিটি জীবন্ত জিনিসের গায়ে সই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Signs Keep Coming",
          "bn": "নিদর্শন আসতেই থাকে"
        },
        "p": [
          {
            "en": "The verse is the first of a series. 21:31 sets firm mountains in the earth lest it shake with its people, and opens broad passes in them as roads. 21:32 makes the sky a protected ceiling — yet, it adds, they turn away from its signs. 21:33 gives night and day, and the sun and the moon, each swimming in an orbit, a falak. The passage piles up what every denier already stands on, drinks and shelters under, then lets the accumulation press its single question.",
            "bn": "আয়াতটি একটি ধারার প্রথম। 21:31 যমীনে সুদৃঢ় পাহাড় স্থাপন করে, যেন তা অধিবাসীদের নিয়ে টলে না যায়, আর তাতে খুলে দেয় প্রশস্ত গিরিপথ — চলার রাস্তা হিসেবে। 21:32 আকাশকে বানায় এক সুরক্ষিত ছাদ — অথচ, যোগ করে আয়াতটি, তারা এর নিদর্শনগুলো থেকে মুখ ফিরিয়ে থাকে। 21:33 দেয় রাত-দিন, আর সূর্য ও চাঁদ — প্রত্যেকে সাঁতার কাটছে এক কক্ষপথে — ফালাক। অনুচ্ছেদটি স্তূপ করে তোলে সেসব জিনিস, যার উপর প্রতিটি অস্বীকারকারী এমনিতেই দাঁড়িয়ে আছে, যা পান করছে, যার নিচে আশ্রয় নিচ্ছে — তারপর সেই স্তূপকেই তার একটিমাত্র প্রশ্ন চাপতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Will They Not Believe",
          "bn": "তবুও কি ঈমান আনবে না"
        },
        "p": [
          {
            "en": "The verse ends: afala yu'minun — will they not then believe? The question assumes that honest looking leads somewhere; it treats the world as evidence, not scenery. The Quran elsewhere praises exactly this use of the eyes: 3:191 describes those who remember Allah standing, sitting and on their sides, and reflect on the creation of the heavens and the earth, concluding: our Lord, You did not create this in vain. Observation is meant to end in a verdict, and the verdict in worship.",
            "bn": "আয়াতটি শেষ হয়: আফালা ইউ'মিনূন — তবুও কি তারা ঈমান আনবে না? প্রশ্নটি ধরে নেয়, সৎ দৃষ্টিপাত কোথাও না কোথাও পৌঁছায়; এটি জগৎকে গণ্য করে সাক্ষ্যপ্রমাণ হিসেবে, দৃশ্যপট হিসেবে নয়। কুরআন অন্যত্র চোখের ঠিক এই ব্যবহারেরই প্রশংসা করে: 3:191 বর্ণনা করে তাদের, যারা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করে এবং আসমান-যমীনের সৃষ্টি নিয়ে চিন্তা করে, উপসংহারে বলে: হে আমাদের রব, আপনি এসব অনর্থক সৃষ্টি করেননি। পর্যবেক্ষণের গন্তব্য একটি রায়, আর রায়ের গন্তব্য ইবাদত।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking as a Practice",
          "bn": "দেখা যখন অনুশীলন"
        },
        "p": [
          {
            "en": "The lived form of the verse costs nothing and is available daily: rain arriving on dead ground, a glass of water, the sky holding. The classical readings, for all their variety, exit through the same door — everything you see was arranged, opened and watered by One who did it deliberately, and the fitting response is gratitude and tawhid. A believer who drinks water with that sentence somewhere in mind has read 21:30 the way its first readers were asked to.",
            "bn": "আয়াতটির যাপিত রূপে কোনো খরচ নেই এবং তা প্রতিদিনই হাতের কাছে: মরা মাটিতে নেমে আসা বৃষ্টি, এক গ্লাস পানি, টিকে থাকা আকাশ। ধ্রুপদী পাঠগুলো, যত বৈচিত্র্যই থাকুক, বেরোয় একই দরজা দিয়ে — আপনি যা দেখছেন সবই সাজিয়েছেন, খুলেছেন ও সিঞ্চন করেছেন এমন একজন, যিনি তা করেছেন সজ্ঞানে; আর মানানসই সাড়া হলো কৃতজ্ঞতা ও তাওহীদ। যে মুমিন এই বাক্যটি মনের কোথাও রেখে পানি পান করে, সে 21:30 পড়েছে ঠিক সেভাবে, যেভাবে এর প্রথম পাঠকদের পড়তে বলা হয়েছিল।"
          }
        ]
      }
    ]
  },
  "21:35": {
    "sections": [
      {
        "h": {
          "en": "The Taunt This Answers",
          "bn": "যে খোঁচার জবাব এটি"
        },
        "p": [
          {
            "en": "Surah al-Anbiya is arguing with people who treated the Prophet ﷺ as a nuisance they could simply outlive. The verse just before this one, 21:34 in the same surah, puts their assumption as a question: We granted no man before you immortality, so if you die, will they live on forever? The reply does not defend the Prophet's life at all. It removes the ground the taunt was standing on. Every soul will taste death, and that includes every soul now waiting for his.",
            "bn": "সূরা আল-আম্বিয়া এমন লোকদের সঙ্গে তর্ক করছে, যারা নবী ﷺ-কে এমন এক ঝামেলা মনে করত যাকে টিকে থেকেই পার হয়ে যাওয়া যাবে। ঠিক আগের আয়াত 21:34 তাদের সেই ধারণাকে প্রশ্নের আকারে রাখে: তোমার আগে কোনো মানুষকে আমি চিরস্থায়ী করিনি, তুমি মারা গেলে তারা কি চিরকাল থাকবে? জবাবটি নবীর ﷺ জীবনের পক্ষে কোনো সাফাই গায় না। বরং খোঁচাটি যে ভিত্তির ওপর দাঁড়িয়ে ছিল, সেটিই সরিয়ে দেয়। প্রত্যেক প্রাণকেই মৃত্যুর স্বাদ নিতে হবে — যারা এখন তাঁর মৃত্যুর অপেক্ষায় বসে আছে, তারা সহ।"
          },
          {
            "en": "The Arabic is worth hearing precisely. Kullu nafsin dha'iqatu al-mawt is built on a participle, not a plain future tense: every soul is a taster of death. It reads less like a forecast of a distant event and more like a description of what a soul already is. And the verb chosen is taste. Tasting is short, it is undergone, and something follows it. The sentence therefore refuses both of the ways people usually handle death: pretending it is far off, and treating it as the end of the story.",
            "bn": "আরবিটি ঠিকভাবে শোনা দরকার। 'কুল্লু নাফসিন যা-ইক্বাতুল মাউত' গঠিত হয়েছে ইসম ফায়িল দিয়ে, সাধারণ ভবিষ্যৎ ক্রিয়া দিয়ে নয়: প্রত্যেক প্রাণ মৃত্যুর আস্বাদনকারী। এটি দূরবর্তী কোনো ঘটনার পূর্বাভাসের মতো নয়, বরং একটি প্রাণ এখনই যা, তার বর্ণনার মতো শোনায়। আর যে ক্রিয়াটি বেছে নেওয়া হয়েছে তা হলো আস্বাদন। আস্বাদন সংক্ষিপ্ত, তা অতিক্রম করতে হয়, আর তার পরে কিছু একটা থাকে। ফলে বাক্যটি মৃত্যু সামলানোর দুটি প্রচলিত পদ্ধতিকেই বাতিল করে: একে বহুদূরের বলে ভাবা, আর একে গল্পের শেষ বলে ধরা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause Only This Verse Has",
          "bn": "কেবল এই আয়াতেই যে বাক্যাংশ"
        },
        "p": [
          {
            "en": "This opening sentence occurs three times in the Quran, and each occurrence is finished differently. In 29:57 it is followed only by the return to Allah. In 3:185 it is followed by wages paid in full on the Day of Resurrection and a verdict on this world as the enjoyment of delusion. Here it is followed by something neither of those two contains: and We test you with evil and with good as a trial. Death is not being announced by itself. It is being set as the closing date of an examination already under way.",
            "bn": "এই শুরুর বাক্যটি কুরআনে তিনবার এসেছে, আর প্রতিবার তা শেষ হয়েছে ভিন্নভাবে। 29:57 আয়াতে এর পরে কেবল আল্লাহর দিকে প্রত্যাবর্তনের কথা আছে। 3:185 আয়াতে এর পরে আছে ক্বিয়ামতের দিনে পূর্ণ প্রতিদান পাওয়ার কথা এবং দুনিয়াকে ছলনার ভোগ বলে রায়। আর এখানে এর পরে আছে এমন কিছু, যা ওই দুটির কোনোটিতেই নেই: আর আমি তোমাদের মন্দ ও ভালো দিয়ে পরীক্ষা করি। মৃত্যুকে এখানে একা ঘোষণা করা হচ্ছে না। একে বসানো হচ্ছে চলমান এক পরীক্ষার শেষ তারিখ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Evil Named First",
          "bn": "মন্দের নাম আগে"
        },
        "p": [
          {
            "en": "Wa nablukum bish-sharri wal-khayri fitnatan. Notice the order: evil is named first and good second. Ibn Kathir reads the clause as testing sometimes by calamities and sometimes by blessings, so that it becomes clear who gives thanks and who is ungrateful, who is patient and who despairs. On that reading, comfort is not the gap between tests. Comfort is the second half of the test, and it is the half people are least likely to notice they are sitting in.",
            "bn": "'ওয়া নাবলূকুম বিশ্‌-শাররি ওয়াল-খাইরি ফিতনাহ্‌।' ক্রমটি লক্ষ করুন: মন্দের নাম আগে, ভালোর নাম পরে। ইবনে কাসীর এই বাক্যাংশের ব্যাখ্যায় বলেন, কখনো বিপদ দিয়ে আর কখনো নিয়ামত দিয়ে পরীক্ষা করা হয়, যাতে স্পষ্ট হয় কে শোকর করে আর কে অকৃতজ্ঞ হয়, কে ধৈর্য ধরে আর কে হতাশ হয়ে পড়ে। এই পাঠ অনুযায়ী স্বাচ্ছন্দ্য দুই পরীক্ষার মাঝের ফাঁক নয়। স্বাচ্ছন্দ্য পরীক্ষারই দ্বিতীয় অর্ধেক, আর এই অর্ধেকের ভেতরে যে বসে আছে তা মানুষ সবচেয়ে কম টের পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Fitnah Means",
          "bn": "ফিতনাহ শব্দের অর্থ"
        },
        "p": [
          {
            "en": "The clause closes on fitnatan, and in its root sense fitnah is what a smith does to gold: putting the metal into fire so that what is pure separates from what is not. The word does not mean disaster; it means assay. That is why a comfortable life can be a fitnah in the same sense a hard one is. Both apply heat, and both bring out what was already in the metal. 89:15-16 shows a man failing both halves: given plenty he says my Lord has honoured me, given little he says my Lord has humiliated me. He has read a verdict where a question was asked.",
            "bn": "বাক্যাংশটি শেষ হয় 'ফিতনাতান' শব্দ দিয়ে, আর মূল অর্থে ফিতনাহ হলো স্বর্ণকার সোনার সঙ্গে যা করে তা-ই: ধাতুটিকে আগুনে দেওয়া, যাতে খাঁটি অংশ ভেজাল থেকে আলাদা হয়ে যায়। শব্দটির অর্থ বিপর্যয় নয়; অর্থ যাচাই। এ কারণেই স্বাচ্ছন্দ্যের জীবনও ঠিক সেই অর্থেই ফিতনাহ হতে পারে যে অর্থে কষ্টের জীবন ফিতনাহ। দুটিই তাপ দেয়, আর দুটিই ধাতুর ভেতরে যা ছিল তা বের করে আনে। 89:15-16 আয়াতে এক ব্যক্তিকে দেখা যায় দুই অর্ধেকেই ব্যর্থ হতে: প্রাচুর্য পেলে সে বলে আমার রব আমাকে সম্মান দিয়েছেন, স্বল্পতা পেলে বলে আমার রব আমাকে অপমান করেছেন। যেখানে প্রশ্ন করা হয়েছিল, সেখানে সে রায় পড়ে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And to Us You Return",
          "bn": "আর আমার কাছেই ফিরে আসা"
        },
        "p": [
          {
            "en": "The third clause is what makes the first two coherent. A test with no marking is only pressure; a death with no return is only an ending. By closing on the return to Allah, the verse turns both halves of life into answered questions rather than raw experience. 7:168 states the same pairing about an earlier community, tested with good times and bad so that they might return. And 21:47 later in this same surah describes the scales set for the Day of Resurrection, precise to the weight of a mustard seed.",
            "bn": "তৃতীয় বাক্যাংশটিই প্রথম দুটিকে অর্থবহ করে তোলে। মূল্যায়নহীন পরীক্ষা কেবল চাপ; প্রত্যাবর্তনহীন মৃত্যু কেবল সমাপ্তি। আল্লাহর দিকে ফিরে যাওয়ার কথা দিয়ে শেষ করে আয়াতটি জীবনের দুই অর্ধেককেই নিছক অভিজ্ঞতা থেকে জবাবযোগ্য প্রশ্নে বদলে দেয়। 7:168 আয়াতে পূর্ববর্তী এক জাতি সম্পর্কে একই জোড়ার কথা আছে — সুসময় ও দুঃসময় দিয়ে পরীক্ষা, যাতে তারা ফিরে আসে। আর এই সূরারই পরবর্তী অংশে 21:47 আয়াতে ক্বিয়ামতের দিনের জন্য স্থাপিত পাল্লার কথা আছে, যা সরিষা দানার ওজন পর্যন্ত সূক্ষ্ম।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Questions, Not One",
          "bn": "একটি নয়, দুটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Lived out, this verse replaces the single question most people carry. In hardship we ask what Allah wants from us; the verse says to ask it in ease as well, because both are the same examination in different clothes. Muslim narrates from Suhayb (RA) that the Prophet ﷺ said the affair of the believer is wondrous, for all of it is good, and that belongs to no one but the believer: if ease reaches him he is grateful and it is good for him, and if harm reaches him he is patient and it is good for him.",
            "bn": "জীবনে প্রয়োগ করলে এই আয়াত অধিকাংশ মানুষের বয়ে বেড়ানো একমাত্র প্রশ্নটিকে বদলে দেয়। কষ্টে আমরা জিজ্ঞেস করি আল্লাহ আমাদের কাছে কী চান; আয়াতটি বলে স্বাচ্ছন্দ্যেও একই প্রশ্ন করতে, কারণ দুটিই ভিন্ন পোশাকে একই পরীক্ষা। মুসলিম সুহাইব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, মুমিনের ব্যাপারটি বিস্ময়কর, কারণ তার সবটাই কল্যাণ, আর এটি মুমিন ছাড়া আর কারও নয়: তার কাছে স্বাচ্ছন্দ্য এলে সে শোকর করে আর তা তার জন্য কল্যাণ হয়, আর তার কাছে কষ্ট পৌঁছলে সে ধৈর্য ধরে আর তা তার জন্য কল্যাণ হয়।"
          },
          {
            "en": "The practical form of this is a single added habit. When something good lands, ask what the test inside it is, before enjoying it; when something hard lands, ask the same question, before complaining of it. Both questions have answers the verse has already supplied: gratitude for one, patience for the other. And because the closing clause fixes a return, neither answer is wasted effort. What is given here is not the reward; it is the question paper.",
            "bn": "এর ব্যবহারিক রূপ একটি বাড়তি অভ্যাস মাত্র। ভালো কিছু এলে তা উপভোগ করার আগে জিজ্ঞেস করুন এর ভেতরের পরীক্ষাটি কী; কঠিন কিছু এলে অভিযোগ করার আগে সেই একই প্রশ্ন করুন। দুটি প্রশ্নেরই উত্তর আয়াতটি আগেই দিয়ে রেখেছে: একটির জন্য কৃতজ্ঞতা, অন্যটির জন্য ধৈর্য। আর যেহেতু শেষ বাক্যাংশটি প্রত্যাবর্তন নির্ধারণ করে দেয়, তাই কোনো উত্তরই বৃথা যায় না। এখানে যা দেওয়া হয়েছে তা পুরস্কার নয়; তা প্রশ্নপত্র।"
          }
        ]
      }
    ]
  },
  "21:87": {
    "sections": [
      {
        "h": {
          "en": "A Chain of Rescues",
          "bn": "উদ্ধারের এক ধারাবাহিকতা"
        },
        "p": [
          {
            "en": "Surah al-Anbiya recounts prophet after prophet in a single rhythm: a servant in distress calls, and Allah answers. A few verses before, 21:83-84 tell of Ayyub (AS), who called out that harm had touched him, and was healed. Just after, 21:89-90 tell of Zakariyya (AS), who called for an heir and was given Yahya (AS). Set in that chain, the story of the man in the fish is told not as a marvel but as one more proof of the same pattern.",
            "bn": "সূরা আল-আম্বিয়া একই ছন্দে একের পর এক নবীর কথা বলে: বিপদগ্রস্ত এক বান্দা ডাকে, আর আল্লাহ সাড়া দেন। এই আয়াতের কয়েক আয়াত আগে 21:83-84 বলে আইয়ুব (আঃ)-এর কথা, যিনি ডেকে বলেছিলেন যে কষ্ট তাঁকে স্পর্শ করেছে, এবং তাঁকে সুস্থতা দেওয়া হয়। ঠিক পরে 21:89-90 বলে যাকারিয়া (আঃ)-এর কথা, যিনি উত্তরাধিকারী চেয়ে ডেকেছিলেন এবং তাঁকে ইয়াহইয়া (আঃ) দেওয়া হয়। সেই ধারাবাহিকতায় বসিয়ে মাছের ভেতরের মানুষটির ঘটনা বলা হয়েছে — অলৌকিক বিস্ময় হিসেবে নয়, বরং একই নিয়মের আরেকটি প্রমাণ হিসেবে।"
          },
          {
            "en": "The verse names him Dhun-Nun, the companion of the nun, the great fish. Elsewhere the Quran calls him Yunus (AS) — 10:98 names his people as the one community whose faith, once it came, was accepted and benefited them. Here he is named by his trial, because the trial is the lesson: the surah is teaching how a prophet prays from the darkness of the sea, so the fish, not the biography, carries the point.",
            "bn": "আয়াতটি তাঁকে বলে যুন-নূন — নূন অর্থাৎ বিশাল মাছের সঙ্গী। কুরআনের অন্যত্র তাঁকে ইউনুস (আঃ) নামে ডাকা হয়েছে — 10:98 তাঁর জাতিকে চিহ্নিত করে সেই একমাত্র জনপদ হিসেবে, যাদের ঈমান আসার পর তা কবুল হয়েছিল এবং তাদের উপকারে এসেছিল। এখানে তাঁকে তাঁর পরীক্ষার নামে ডাকা হয়েছে, কারণ পরীক্ষাটিই শিক্ষা: সূরাটি শেখাচ্ছে সমুদ্রের অন্ধকার থেকে একজন নবী কীভাবে দোয়া করেন — তাই মূল কথা বহন করে মাছটি, জীবনী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Leaving in Anger",
          "bn": "রাগ করে চলে যাওয়া"
        },
        "p": [
          {
            "en": "He went off mughadiban, in anger. The commentators explain that his anger was at his people, who had persisted in rejection, and that he left them without awaiting Allah's permission — a slip weighed at a prophet's scale, not a sin of appetite. Then the difficult phrase: he thought that We would not naqdira 'alayhi. The mufassirun, Tabari and Ibn Kathir among them, read the verb from qadr, decree and restriction: he thought no constraint would be decreed on him for leaving.",
            "bn": "তিনি চলে গিয়েছিলেন 'মুগাদিবান' — রাগ করে। মুফাসসিরগণ ব্যাখ্যা করেন, তাঁর রাগ ছিল নিজের জাতির ওপর, যারা প্রত্যাখ্যানে অটল ছিল, এবং তিনি আল্লাহর অনুমতির অপেক্ষা না করে তাদের ছেড়ে যান — এটি নবীর মাপকাঠিতে মাপা একটি পদস্খলন, প্রবৃত্তির কোনো পাপ নয়। তারপর কঠিন বাক্যাংশটি: তিনি ভেবেছিলেন আমরা তাঁর ওপর 'নাকদিরা' করব না। মুফাসসিরগণ — তাবারী ও ইবনে কাসীর তাঁদের মধ্যে — ক্রিয়াপদটিকে 'কাদর' অর্থাৎ ফায়সালা ও সংকীর্ণতা থেকে পড়েন: তিনি ভেবেছিলেন চলে যাওয়ার জন্য তাঁর ওপর কোনো সংকট নির্ধারিত হবে না।"
          },
          {
            "en": "They insist the phrase cannot mean he doubted Allah's power, since no prophet doubts that. Read rightly, the words describe something more familiar: a good man, wronged and weary, assumes that walking away carries no consequence. The sequence that follows — the laden ship, the casting of lots that fell against him, the fish that swallowed him, as 37:140-142 recount — showed that the decree reaches wherever a servant goes.",
            "bn": "তাঁরা জোর দিয়ে বলেন, বাক্যাংশটির অর্থ এ হতে পারে না যে তিনি আল্লাহর ক্ষমতায় সন্দেহ করেছিলেন, কারণ কোনো নবী তাতে সন্দেহ করেন না। ঠিকভাবে পড়লে শব্দগুলো বর্ণনা করে অনেক চেনা একটি বিষয়: একজন ভালো মানুষ, অন্যায়ের শিকার ও ক্লান্ত, ধরে নেন যে চলে যাওয়ার কোনো পরিণতি নেই। এরপরের ঘটনাক্রম — বোঝাই জাহাজ, লটারি যা তাঁর বিপক্ষে পড়ল, যে মাছ তাঁকে গিলে ফেলল — যেমন 37:140-142 বর্ণনা করে — দেখিয়ে দিল যে বান্দা যেখানেই যাক, ফায়সালা সেখানে পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Layered Darknesses",
          "bn": "স্তরে স্তরে অন্ধকার"
        },
        "p": [
          {
            "en": "He called out fi az-zulumat, in the darknesses — the Arabic is plural. The commentators say the layers were the darkness of the night, the darkness of the sea and the darkness of the fish's belly. The plural is doing honest work: this was not gloom but the stacking of one blackness upon another, a place from which no human means of rescue existed at all. From exactly there, the verse says, he called — nada, a cry sent to One he could not see but knew was listening.",
            "bn": "তিনি ডেকেছিলেন 'ফিয-যুলুমাত' — অন্ধকারসমূহের মধ্যে; আরবিতে শব্দটি বহুবচন। মুফাসসিরগণ বলেন, স্তরগুলো ছিল রাতের অন্ধকার, সমুদ্রের অন্ধকার আর মাছের পেটের অন্ধকার। বহুবচনটি সৎ কাজ করছে: এ ছিল নিছক আঁধার নয়, বরং এক কালোর ওপর আরেক কালোর স্তূপ — এমন এক জায়গা, যেখান থেকে উদ্ধারের কোনো মানবীয় উপায়ই ছিল না। ঠিক সেখান থেকে, আয়াত বলে, তিনি ডাকলেন — 'নাদা', এমন একজনের উদ্দেশে পাঠানো আর্তি, যাঁকে তিনি দেখতে পাচ্ছিলেন না কিন্তু জানতেন তিনি শুনছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Anatomy of the Call",
          "bn": "ডাকটির গঠন"
        },
        "p": [
          {
            "en": "The call has three parts and not one word of request. First tawhid: la ilaha illa anta, there is no god but You — the truth his people had refused, affirmed by their prophet from the bottom of the sea. Then tanzih: subhanaka, exalted are You — declaring Allah free of any wrong in what had happened; the fault was not in the decree. Last, confession: inni kuntu min az-zalimin, I have been of the wrongdoers — plain ownership of his own share, with no excuse attached.",
            "bn": "ডাকটির তিনটি অংশ, অথচ আবেদনের একটি শব্দও নেই। প্রথমে তাওহীদ: 'লা ইলাহা ইল্লা আনতা' — তুমি ছাড়া কোনো ইলাহ নেই — যে সত্য তাঁর জাতি প্রত্যাখ্যান করেছিল, তা তাদের নবী ঘোষণা করলেন সমুদ্রের তলদেশ থেকে। তারপর তানযীহ: 'সুবহানাকা' — তুমি পবিত্র, মহিমান্বিত — যা ঘটেছে তাতে আল্লাহর কোনো অন্যায় নেই বলে ঘোষণা; ত্রুটি ফায়সালায় ছিল না। সবশেষে স্বীকারোক্তি: 'ইন্নী কুনতু মিনায-যালিমীন' — আমি তো জালিমদের অন্তর্ভুক্ত ছিলাম — নিজের অংশটুকুর সরল স্বীকার, কোনো অজুহাত ছাড়া।"
          },
          {
            "en": "Notice what is missing: he never says save me. The commentators draw the lesson that the state of the caller outweighs the wording of the demand. He put the praise of Allah and the honest naming of his own fault forward, and left the rescue to the One being praised. 21:88 records the result: so We responded to him and saved him from the grief — and then widens it deliberately: and thus do We save the believers.",
            "bn": "লক্ষ করুন কী অনুপস্থিত: তিনি একবারও বলেননি 'আমাকে বাঁচাও'। মুফাসসিরগণ এ থেকে শিক্ষা নেন যে, আহ্বানকারীর অবস্থা আবেদনের শব্দের চেয়ে ভারী। তিনি সামনে রাখলেন আল্লাহর প্রশংসা আর নিজের দোষের সৎ স্বীকৃতি, এবং উদ্ধারের ভার ছেড়ে দিলেন যাঁর প্রশংসা করছেন তাঁর হাতে। 21:88 ফলাফল লিপিবদ্ধ করে: তখন আমরা তাঁর ডাকে সাড়া দিলাম এবং দুশ্চিন্তা থেকে তাঁকে উদ্ধার করলাম — তারপর ইচ্ছাকৃতভাবে তা প্রশস্ত করে দেয়: আর এভাবেই আমরা মুমিনদের উদ্ধার করি।"
          }
        ]
      },
      {
        "h": {
          "en": "Because He Was One Who Glorified",
          "bn": "কারণ তিনি ছিলেন তাসবীহকারী"
        },
        "p": [
          {
            "en": "37:143-144 give the reason the rescue found him: had he not been of those who glorify Allah, he would have remained in its belly until the Day they are resurrected. The glorifying that saved him in the darkness was the habit he had built in the light. The commentators take this at face value: a stock of remembrance laid down in easy days is what a servant draws on when the hard day arrives without warning.",
            "bn": "37:143-144 জানায় উদ্ধার কেন তাঁকে খুঁজে পেল: তিনি যদি তাসবীহকারীদের অন্তর্ভুক্ত না হতেন, তবে পুনরুত্থানের দিন পর্যন্ত তাঁকে মাছের পেটেই থাকতে হতো। অন্ধকারে যে তাসবীহ তাঁকে বাঁচাল, তা ছিল আলোর দিনগুলোতে গড়ে তোলা অভ্যাস। মুফাসসিরগণ এটিকে সোজা অর্থেই নেন: সহজ দিনে জমিয়ে রাখা যিকিরের ভান্ডার থেকেই বান্দা খরচ করে, যখন কঠিন দিন কোনো সতর্কবার্তা ছাড়াই এসে পড়ে।"
          },
          {
            "en": "The Quran also fixes how the story must not be used. 68:48 tells the Prophet ﷺ to be patient for his Lord's judgement and not to be like the companion of the fish — the leaving in anger is not the model; the calling from the darkness is. And the ending is mercy multiplied: he was cast ashore sick, shaded by a plant Allah caused to grow, then sent to a hundred thousand or more, and they believed, as 37:145-148 recount.",
            "bn": "কুরআন এটাও ঠিক করে দেয়, ঘটনাটি কীভাবে ব্যবহার করা যাবে না। 68:48 নবী ﷺ-কে বলে তাঁর রবের ফায়সালার জন্য ধৈর্য ধরতে এবং মাছের সঙ্গীর মতো না হতে — রাগ করে চলে যাওয়াটা আদর্শ নয়; অন্ধকার থেকে ডাকাটাই আদর্শ। আর সমাপ্তিটি বহুগুণ রহমতের: তাঁকে অসুস্থ অবস্থায় তীরে নিক্ষেপ করা হয়, আল্লাহর গজিয়ে দেওয়া এক গাছ তাঁকে ছায়া দেয়, তারপর তাঁকে পাঠানো হয় এক লক্ষ বা তারও বেশি মানুষের কাছে, এবং তারা ঈমান আনে — যেমন 37:145-148 বর্ণনা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying the Du'a",
          "bn": "দোয়াটি সঙ্গে রাখা"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Sa'd ibn Abi Waqqas (RA) that the Prophet ﷺ said: the supplication of Dhun-Nun when he called in the belly of the fish — la ilaha illa anta subhanaka inni kuntu min az-zalimin — no Muslim ever supplicates with it for anything except that Allah responds to him. The promise is attached to the words, and through the words to the posture they force on anyone who says them honestly.",
            "bn": "তিরমিযী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মাছের পেটে যুন-নূন যে দোয়া দিয়ে ডেকেছিলেন — 'লা ইলাহা ইল্লা আনতা সুবহানাকা ইন্নী কুনতু মিনায-যালিমীন' — কোনো মুসলিম কোনো বিষয়ে এই দোয়া করলে আল্লাহ তার ডাকে সাড়া না দিয়ে থাকেন না। প্রতিশ্রুতিটি শব্দগুলোর সঙ্গে বাঁধা, আর শব্দগুলোর মধ্য দিয়ে সেই অবস্থানের সঙ্গে, যা সততার সঙ্গে উচ্চারণকারী যে কাউকে নিতে বাধ্য করে।"
          },
          {
            "en": "That posture is the practical teaching. Distress tempts a person toward two false moves: blaming the decree, and excusing the self. This call blocks both in one line — Allah is declared faultless, the self is declared at fault — and the heart that manages both at once has already turned. Say it slowly in hardship, meaning each clause, and let the request stay unspoken; the One addressed knew Yunus (AS) needed rescue before he was asked.",
            "bn": "সেই অবস্থানটিই ব্যবহারিক শিক্ষা। বিপদ মানুষকে দুটি ভুল পদক্ষেপের দিকে প্রলুব্ধ করে: ফায়সালাকে দোষ দেওয়া, আর নিজেকে অজুহাত দেওয়া। এই ডাক এক লাইনে দুটোই আটকে দেয় — আল্লাহকে ঘোষণা করা হয় নির্দোষ, নিজেকে ঘোষণা করা হয় দোষী — আর যে হৃদয় একসঙ্গে দুটোই পারে, সে ইতিমধ্যে ফিরে এসেছে। কষ্টের সময় এটি ধীরে বলুন, প্রতিটি অংশের অর্থ বুঝে, আর আবেদনটুকু অনুচ্চারিতই থাকুক; যাঁকে সম্বোধন করা হচ্ছে তিনি ইউনুস (আঃ)-এর উদ্ধারের প্রয়োজন জানতেন চাওয়ার আগেই।"
          }
        ]
      }
    ]
  },
  "21:89": {
    "sections": [
      {
        "h": {
          "en": "The Shortest Telling",
          "bn": "সংক্ষিপ্ততম বর্ণনা"
        },
        "p": [
          {
            "en": "Surah al-Anbiya moves through prophet after prophet at speed, and Zakariyya (AS) gets two verses. Everything Surah Al Imran spreads across 3:37-41 and Surah Maryam across 19:2-11 is compressed here into one call and one answer. Ibn Kathir notes plainly that the story has already been given in detail elsewhere and that an abbreviated version is what is offered here.",
            "bn": "সূরা আল-আম্বিয়া দ্রুতগতিতে একের পর এক নবীর কথা বলে যায়, আর যাকারিয়া (আঃ) পান দুটি আয়াত। সূরা আলে ইমরান 3:37-41 জুড়ে আর সূরা মারইয়াম 19:2-11 জুড়ে যা বিস্তারিত বলেছে, এখানে তা সংকুচিত হয়ে দাঁড়ায় একটি ডাক আর একটি সাড়ায়। ইবনে কাসীর সরাসরিই উল্লেখ করেন, ঘটনাটি অন্যত্র বিস্তারিত এসেছে, আর এখানে দেওয়া হয়েছে তার সংক্ষিপ্ত রূপ।"
          },
          {
            "en": "Compression sharpens things. Stripped of the mihrab, the out-of-season fruit, the angels and the three days of silence, what remains is the bare architecture of a supplication: a man in need, a sentence naming the need, and a sentence naming Allah. Read beside the fuller accounts, this version shows what a du'a is when everything removable has been removed.",
            "bn": "সংক্ষেপণ জিনিসকে আরও ধারালো করে তোলে। মিহরাব, অসময়ের ফল, ফেরেশতা আর তিন দিনের নীরবতা সরিয়ে নিলে যা থাকে তা হলো একটি দোয়ার নগ্ন কাঠামো: অভাবগ্রস্ত একজন মানুষ, প্রয়োজনটির নাম বলা একটি বাক্য, আর আল্লাহর নাম বলা একটি বাক্য। বিস্তারিত বর্ণনাগুলোর পাশে রেখে পড়লে এই সংস্করণটি দেখায়, সরানোর মতো সবকিছু সরিয়ে নিলে দোয়া আসলে কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Leave Me Alone",
          "bn": "আমাকে একা রেখো না"
        },
        "p": [
          {
            "en": "The petition is cast as a negative: rabbi la tadharni fardan, my Lord, do not leave me alone. He does not say give me a son. He names the condition he does not want to be left in, which is a different kind of honesty. Ibn Kathir explains fardan here as being without a child and without an heir to stand among the people after him.",
            "bn": "আবেদনটি রাখা হয়েছে নেতিবাচক গঠনে: রাব্বি লা তাযারনী ফারদান — হে আমার প্রতিপালক, আমাকে একা রেখো না। তিনি বলেন না, আমাকে একটি পুত্র দাও। তিনি সেই অবস্থাটির নাম বলেন, যাতে তিনি পড়ে থাকতে চান না — আর এটি ভিন্ন ধরনের একটি সততা। ইবনে কাসীর এখানে ফারদান-এর ব্যাখ্যা করেন সন্তানহীন থাকা এবং তাঁর পরে মানুষের মাঝে দাঁড়ানোর মতো কোনো উত্তরাধিকারী না থাকা হিসেবে।"
          },
          {
            "en": "The app's Bengali translation makes that reading explicit, rendering the phrase as do not leave me childless. Either way, the ache being described is not the absence of a child in the abstract. It is the prospect of a work ending with the worker, of a sanctuary served for a lifetime with nobody left to serve it after him.",
            "bn": "অ্যাপের বাংলা অনুবাদ এই পাঠটিকে স্পষ্ট করে দেয়, বাক্যাংশটিকে অনুবাদ করে — আমাকে সন্তানহীন করে রেখো না। যেভাবেই পড়ুন, এখানে বর্ণিত যন্ত্রণাটি বিমূর্তভাবে সন্তান না থাকার যন্ত্রণা নয়। এটি হলো কাজটি কর্মীর সঙ্গেই শেষ হয়ে যাওয়ার আশঙ্কা — সারা জীবন যে ইবাদতগৃহের খিদমত করা হলো, তাঁর পরে তার খিদমতের জন্য কেউ না থাকার আশঙ্কা।"
          }
        ]
      },
      {
        "h": {
          "en": "Alone Is Where Everyone Ends",
          "bn": "একাকী — সেখানেই সবার পরিণতি"
        },
        "p": [
          {
            "en": "The word fardan appears in three verses of the Quran, and the other two are worth putting beside this one. 19:95 says that every one of them will come to Him on the Day of Resurrection fardan, alone. 19:80 says of a particular boaster: We will inherit from him what he speaks of, and he will come to Us alone.",
            "bn": "ফারদান শব্দটি কুরআনের তিনটি আয়াতে এসেছে, আর বাকি দুটিকে এটির পাশে রাখা মূল্যবান। 19:95 বলে, কিয়ামতের দিন তাদের প্রত্যেকেই তাঁর কাছে আসবে ফারদান — একাকী। 19:80 এক নির্দিষ্ট অহংকারী সম্পর্কে বলে, সে যেসব বিষয়ের গর্ব করে তার উত্তরাধিকারী হবেন আল্লাহ, আর সে আমার কাছে আসবে একাকী।"
          },
          {
            "en": "So the state Zakariyya (AS) asks to be spared in this life is the state in which every human being will arrive in the next. That is not a rebuke of his prayer; the Quran nowhere treats his request as excessive, and it was answered. But it quietly resizes what an heir can do. Descendants keep a work going here. They do not accompany anyone there.",
            "bn": "কাজেই যাকারিয়া (আঃ) এই জীবনে যে অবস্থা থেকে রেহাই চান, পরকালে প্রত্যেক মানুষ সেই অবস্থাতেই গিয়ে হাজির হবে। এটি তাঁর দোয়ার প্রতি কোনো তিরস্কার নয়; কুরআন কোথাও তাঁর চাওয়াকে বাড়াবাড়ি বলেনি, আর তা কবুলও হয়েছে। তবে এটি নীরবে বুঝিয়ে দেয়, একজন উত্তরাধিকারী কতটুকু করতে পারে। বংশধরেরা এখানে কাজটি চালিয়ে নেয়। ওখানে তারা কারও সঙ্গী হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Best of Inheritors",
          "bn": "সর্বোত্তম উত্তরাধিকারী"
        },
        "p": [
          {
            "en": "The verse ends wa anta khayru al-warithin, and You are the best of inheritors. Ibn Kathir calls this a supplication together with a form of praise befitting the topic, and the fit is exact: a man asking for an heir closes by naming Allah the One who inherits everything. The name chosen matches the need being brought, which is how the Quran teaches its supplicants to speak.",
            "bn": "আয়াতটি শেষ হয় ওয়া আনতা খাইরুল ওয়ারিসীন — আর তুমিই সর্বোত্তম উত্তরাধিকারী। ইবনে কাসীর একে বলেন দোয়া ও বিষয়ের সঙ্গে মানানসই প্রশংসার সমন্বয়; আর মিলটি একেবারে নিখুঁত: যিনি উত্তরাধিকারী চাইছেন, তিনি শেষ করছেন আল্লাহকে সবকিছুর উত্তরাধিকারী হিসেবে নাম ধরে ডেকে। যে নামটি বেছে নেওয়া হলো তা পেশ করা প্রয়োজনের সঙ্গে মেলে — কুরআন এভাবেই তার প্রার্থীদের কথা বলা শেখায়।"
          },
          {
            "en": "The phrase khayr al-warithin occurs only here in the Quran. Notice that it does not soften the request or withdraw it. Zakariyya (AS) still wants an heir. He simply says, in the same breath, that if none comes the estate is not lost, because it returns to the One it always belonged to. Wanting something badly and holding it loosely turn out to be compatible.",
            "bn": "খাইরুল ওয়ারিসীন বাক্যাংশটি কুরআনে কেবল এখানেই এসেছে। লক্ষ করুন, এটি আবেদনটিকে নরমও করে না, ফিরিয়েও নেয় না। যাকারিয়া (আঃ) উত্তরাধিকারী চানই। তিনি কেবল একই নিঃশ্বাসে বলেন, কেউ না এলেও সম্পত্তি হারিয়ে যায় না, কারণ তা ফিরে যায় সেই সত্তার কাছেই, যাঁর তা বরাবরই ছিল। প্রবলভাবে কিছু চাওয়া আর তা আলগা হাতে ধরে রাখা — দেখা যাচ্ছে দুটি একসঙ্গেই সম্ভব।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Answer Is Explained",
          "bn": "উত্তরের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "21:90 gives the response: We answered him, granted him Yahya, and amended his wife for him. Ibn Kathir reports from Ibn Abbas (RA), Mujahid and Sa'id ibn Jubayr that she had been barren and then bore a child. The verb used of her is aslahna, We put right — the same verb family used for repairing what was broken, applied to a body and a household at once.",
            "bn": "21:90 সাড়াটি দেয়: আমি তার ডাকে সাড়া দিলাম, তাকে ইয়াহইয়া দান করলাম, আর তার জন্য তার স্ত্রীকে যোগ্য করে দিলাম। ইবনে কাসীর ইবনে আব্বাস (রাঃ), মুজাহিদ ও সাঈদ ইবনে জুবাইর থেকে বর্ণনা করেন যে তিনি বন্ধ্যা ছিলেন, এরপর সন্তান প্রসব করেন। তাঁর সম্পর্কে ব্যবহৃত ক্রিয়াটি আসলাহনা — আমি ঠিক করে দিলাম; যা ভেঙে যাওয়া জিনিস মেরামতের জন্য ব্যবহৃত ক্রিয়াবর্গেরই অংশ, আর এখানে তা একসঙ্গে একটি দেহ ও একটি সংসারের ওপর প্রযুক্ত।"
          },
          {
            "en": "Then the verse explains the answer, and the explanation is a description of a life rather than of a technique. They used to hasten in good deeds, and supplicate Us raghaban wa rahaban, in longing and in dread, and they were humbly submissive to Us. The plural is deliberate; the mufassirun read it of the household, and also of the prophets the surah has been naming one by one.",
            "bn": "এরপর আয়াতটি সাড়ার ব্যাখ্যা দেয়, আর ব্যাখ্যাটি কোনো কৌশলের নয়, একটি জীবনের বর্ণনা। তারা সৎকাজে ক্ষিপ্রগতি ছিল, আর আমাকে ডাকত রাগাবান ওয়া রাহাবান — আকাঙ্ক্ষা নিয়ে ও ভয় নিয়ে; আর তারা ছিল আমার প্রতি বিনীতভাবে অবনত। বহুবচনটি ইচ্ছাকৃত; মুফাসসিরগণ একে পড়েন গোটা পরিবারের বর্ণনা হিসেবে, আবার সূরাটি একে একে যে নবীদের নাম নিয়ে এসেছে তাঁদের বর্ণনা হিসেবেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Real Fear",
          "bn": "আসল ভয়টির নাম বলা"
        },
        "p": [
          {
            "en": "Zakariyya (AS) told Allah what he was actually afraid of. In 19:5 he says outright that he fears the successors after him and that his wife is barren. He does not present a tidy request with the fear edited out of it. That is the transferable part: the thing you would be embarrassed to say aloud is usually the thing the du'a is really about.",
            "bn": "যাকারিয়া (আঃ) আল্লাহকে বলেছিলেন তিনি আসলে কীসে ভীত। 19:5-এ তিনি স্পষ্টই বলেন, তাঁর পরে তাঁর স্বগোত্রীয়দের নিয়ে তিনি আশঙ্কা করছেন এবং তাঁর স্ত্রী বন্ধ্যা। তিনি ভয়টিকে ছেঁটে ফেলে পরিপাটি কোনো আবেদন পেশ করেন না। এখানেই আছে গ্রহণ করার মতো অংশটি: যে কথাটি উচ্চারণ করতে আপনার লজ্জা করে, সাধারণত সেটিই আপনার দোয়ার আসল বিষয়।"
          },
          {
            "en": "The second half of the pattern is the clause he ends on. Say the need without dressing it up, then say something true about Allah that the need itself points to. In hope and dread, as 21:90 puts it — hope, because He is the best of inheritors; dread, because nothing is owed. Both halves are in one short verse, and it can be prayed tonight.",
            "bn": "কাঠামোটির দ্বিতীয় অর্ধেক হলো তিনি যে বাক্য দিয়ে শেষ করেন সেটি। প্রয়োজনটি সাজিয়ে-গুছিয়ে না বলে সরাসরি বলুন, তারপর আল্লাহ সম্পর্কে এমন সত্য কিছু বলুন যেদিকে সেই প্রয়োজনটিই ইঙ্গিত করে। 21:90-এর ভাষায় আশা ও ভয় নিয়ে — আশা, কারণ তিনিই সর্বোত্তম উত্তরাধিকারী; ভয়, কারণ কিছুই পাওনা নয়। দুই অর্ধেকই আছে একটি ছোট আয়াতে, আর আজ রাতেই তা পড়া যায়।"
          }
        ]
      }
    ]
  },
  "21:107": {
    "sections": [
      {
        "h": {
          "en": "A Mission Defined by Exclusion",
          "bn": "একটিমাত্র পরিচয়ে সংজ্ঞায়িত মিশন"
        },
        "p": [
          {
            "en": "Arabic has a construction that defines by exclusion: ma... illa, not... except. This verse spends it on the final Messenger ﷺ: We did not send you except as a mercy to the worlds. Everything the mission is, the sentence claims, falls inside mercy; whatever stands outside mercy is not the mission. Mercy here is not one of the message's qualities, listed beside others. It is the message's definition, stated by the One who sent it.",
            "bn": "আরবিতে এমন এক গঠন আছে যা বর্জনের মাধ্যমে সংজ্ঞা দেয়: মা... ইল্লা — নয়... ছাড়া। এই আয়াত সেই গঠনটি ব্যয় করে শেষ রাসূল ﷺ-এর ওপর: আমি আপনাকে পাঠাইনি সমগ্র জগতের জন্য রহমত ছাড়া। বাক্যটির দাবি: মিশন যা কিছু, তার সবটাই রহমতের ভেতরে; রহমতের বাইরে যা দাঁড়িয়ে, তা মিশন নয়। এখানে রহমত বার্তার অনেক গুণের একটি নয়, যা অন্যগুলোর পাশে তালিকাভুক্ত। এটি বার্তাটির সংজ্ঞা — বলেছেন তিনিই, যিনি তা পাঠিয়েছেন।"
          },
          {
            "en": "The verse arrives as a summation. Surah al-Anbiya has spent its length on prophet after prophet — Ibrahim, Lut, Nuh, Dawud, Sulayman, Ayyub, Yunus, Zakariyya (AS) — each sent to a people, each story a rescue. Near the surah's close, the last of the line is announced with a scope none before him carried: not to a city or a century, but lil-alamin, to the worlds. 34:28 states the same reach: to all mankind entirely.",
            "bn": "আয়াতটি আসে এক সারসংক্ষেপ হিসেবে। সূরা আল-আম্বিয়া তার দৈর্ঘ্য জুড়ে বলেছে নবীর পর নবীর কথা — ইবরাহীম, লূত, নূহ, দাউদ, সুলাইমান, আইয়ুব, ইউনুস, যাকারিয়া (আঃ) — প্রত্যেকে প্রেরিত এক-একটি জাতির কাছে, প্রতিটি কাহিনি এক-একটি উদ্ধার। সূরার শেষপ্রান্তে এই ধারার সর্বশেষজনকে ঘোষণা করা হয় এমন এক ব্যাপ্তিতে, যা তাঁর আগে কেউ বহন করেননি: কোনো নগরী বা শতাব্দীর জন্য নয় — লিল-আলামীন, সমগ্র জগতের জন্য। 34:28 একই ব্যাপ্তির কথা বলে: সমগ্র মানবজাতির জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "To the Worlds",
          "bn": "সকল জগতের জন্য"
        },
        "p": [
          {
            "en": "Al-alamin is deliberately vast — all peoples, all generations, and the commentators include the jinn, to whom the Quran was also recited. 7:158 has the Prophet ﷺ declare it himself: say, O mankind, I am the Messenger of Allah to you all. The letters he ﷺ sent to the rulers of the surrounding empires acted on that scope. No previous prophet's mission is described in the Quran with this universality; his ﷺ mercy has no border drawn around it.",
            "bn": "আল-আলামীন ইচ্ছাকৃতভাবেই বিশাল — সব জাতি, সব প্রজন্ম, আর মুফাসসিরগণ এতে জিনদেরও ধরেন, যাদের কাছেও কুরআন তিলাওয়াত করা হয়েছিল। 7:158-এ নবী ﷺ নিজেই তা ঘোষণা করেন: বলুন, হে মানবজাতি, আমি তোমাদের সবার কাছে আল্লাহর রাসূল। আশপাশের সাম্রাজ্যগুলোর শাসকদের কাছে তাঁর ﷺ পাঠানো চিঠিগুলো সেই পরিধির ওপরই আমল ছিল। আগের কোনো নবীর মিশন কুরআনে এই সর্বজনীনতায় বর্ণিত হয়নি; তাঁর ﷺ রহমতের চারপাশে কোনো সীমান্তরেখা টানা নেই।"
          },
          {
            "en": "The mufassirun, following what is related from Ibn Abbas (RA), extend the mercy even to those who rejected: earlier nations that denied their messengers were destroyed by uprooting punishments, while the deniers of this ummah's age were spared that immediate ruin for his ﷺ sake. Whoever accepted found the mercy in full, guidance now and salvation later; whoever refused still lived inside its shade, granted time that earlier deniers were not granted.",
            "bn": "মুফাসসিরগণ — ইবনে আব্বাস (রাঃ) থেকে বর্ণিত কথার অনুসরণে — এই রহমত প্রত্যাখ্যানকারীদের পর্যন্তও প্রসারিত করেন: আগের যেসব জাতি তাদের রাসূলদের অস্বীকার করেছিল তারা সমূলে উৎপাটনকারী শাস্তিতে ধ্বংস হয়েছিল, অথচ এই উম্মতের যুগের অস্বীকারকারীরা তাঁর ﷺ কারণে সেই তাৎক্ষণিক ধ্বংস থেকে রেহাই পেয়েছে। যে গ্রহণ করেছে সে রহমত পেয়েছে পূর্ণরূপে — এখনই হিদায়াত, পরে মুক্তি; আর যে প্রত্যাখ্যান করেছে সেও এর ছায়াতেই বেঁচে থেকেছে — এমন অবকাশ পেয়ে, যা আগের অস্বীকারকারীদের দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy in His Conduct",
          "bn": "তাঁর আচরণে রহমত"
        },
        "p": [
          {
            "en": "The definition held under test. When Ta'if had answered his ﷺ preaching with injury, the angel of the mountains came, as al-Bukhari and Muslim relate, offering to crush his people between the two mountains, al-Akhshabayn. He ﷺ refused, hoping that Allah would bring forth from their descendants those who would worship Him alone. At the one moment he ﷺ could have traded mercy for vengeance, with an angel awaiting orders, he chose the mission's definition.",
            "bn": "সংজ্ঞাটি পরীক্ষার মধ্যেও টিকে ছিল। তায়েফ যখন তাঁর ﷺ দাওয়াতের জবাব দিয়েছিল আঘাতে, তখন পাহাড়ের ফেরেশতা এলেন — বুখারী ও মুসলিম বর্ণনা করেন — তাঁর কওমকে দুই পাহাড় — আল-আখশাবাইন — এর মাঝে পিষে দেওয়ার প্রস্তাব নিয়ে। তিনি ﷺ অস্বীকার করলেন — এই আশায় যে আল্লাহ তাদের বংশধরদের মধ্য থেকে এমন মানুষ বের করবেন, যারা এককভাবে তাঁরই ইবাদত করবে। যে একটি মুহূর্তে তিনি ﷺ রহমতের বদলে প্রতিশোধ নিতে পারতেন — আদেশের অপেক্ষায় এক ফেরেশতা দাঁড়িয়ে — তিনি বেছে নিলেন মিশনের সংজ্ঞাটিই।"
          },
          {
            "en": "Muslim relates that when he ﷺ was asked to curse the mushrikin, he answered: I was not sent as one who curses; I was only sent as a mercy. The reply consciously echoes this verse's grammar — sent only as. 9:128 describes his ﷺ posture toward people: grieved by what distresses you, anxiously eager for you, and to the believers ra'uf rahim — kind and merciful, two names the Quran elsewhere gives to Allah Himself.",
            "bn": "ইমাম মুসলিম বর্ণনা করেন: তাঁকে ﷺ মুশরিকদের অভিশাপ দিতে বলা হলে তিনি উত্তর দেন — আমাকে অভিশাপকারী হিসেবে পাঠানো হয়নি; আমাকে তো পাঠানো হয়েছে কেবল রহমত হিসেবে। উত্তরটি সচেতনভাবে এই আয়াতের ব্যাকরণেরই প্রতিধ্বনি — কেবল... হিসেবেই প্রেরিত। 9:128 মানুষের প্রতি তাঁর ﷺ ভঙ্গিটি বর্ণনা করে: তোমাদের কষ্ট তাঁকে পীড়া দেয়, তিনি তোমাদের কল্যাণে ব্যাকুল, আর মুমিনদের প্রতি রাউফ ও রাহীম — স্নেহশীল ও পরম দয়ালু — যে দুটি নাম কুরআন অন্যত্র স্বয়ং আল্লাহকে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy Built Into the Message",
          "bn": "বার্তার ভেতরে গাঁথা রহমত"
        },
        "p": [
          {
            "en": "The mercy is not only in the man; it is in what he brought. A law with ease built into its foundations — burdens sized to capacity as 2:286 states, hardship lifted in travel and illness, repentance open until death. Guidance itself is the greatest mercy the verse intends: being told, reliably, what the Lord of the worlds wants. And 3:159 names mercy as the very texture of his ﷺ leadership: by mercy from Allah you were lenient with them.",
            "bn": "রহমত কেবল মানুষটির মধ্যে নয়; তিনি যা এনেছেন তার মধ্যেও। এমন এক বিধান, যার ভিত্তিতেই সহজতা গাঁথা — 2:286 যেমন বলে, বোঝা সামর্থ্যের মাপে; সফর ও অসুস্থতায় কঠোরতা তুলে নেওয়া; তওবার দরজা মৃত্যু পর্যন্ত খোলা। আর হিদায়াত নিজেই সেই সর্বোচ্চ রহমত, যা আয়াতের অভিপ্রায়: নির্ভরযোগ্যভাবে জেনে যাওয়া — জগতসমূহের রব কী চান। আর 3:159 রহমতকে বলে তাঁর ﷺ নেতৃত্বের খোদ বুনন: আল্লাহর রহমতেই আপনি তাদের প্রতি কোমল হয়েছিলেন।"
          },
          {
            "en": "The circle even exceeds the human. Sound hadith record reward in kindness to every living creature, his ﷺ command to sharpen the blade and spare the animal distress, and his ﷺ telling of a person forgiven for giving water to a thirsty dog. Lil-alamin proved wide enough in practice to cover the treatment of animals, enemies, and everything between — a scope his ﷺ own conduct kept demonstrating was meant literally.",
            "bn": "বৃত্তটি এমনকি মানুষকেও ছাড়িয়ে যায়। সহীহ হাদীসে লিপিবদ্ধ আছে প্রতিটি প্রাণীর প্রতি সদয়তায় সওয়াব, তাঁর ﷺ আদেশ — ছুরি ধার দিয়ে নাও, পশুকে কষ্ট দিয়ো না — আর তাঁর ﷺ শোনানো সেই ঘটনা: তৃষ্ণার্ত এক কুকুরকে পানি খাওয়ানোয় এক ব্যক্তিকে ক্ষমা করে দেওয়া হয়। লিল-আলামীন বাস্তবে এতটাই প্রশস্ত প্রমাণিত হয়েছে যে তা ঢেকে নেয় পশুর সঙ্গে আচরণ, শত্রুর সঙ্গে আচরণ, আর এর মাঝের সবকিছু — তাঁর ﷺ নিজের আচরণই বারবার দেখিয়ে গেছে, ব্যাপ্তিটি আক্ষরিক অর্থেই বোঝানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying What He Carried",
          "bn": "তিনি যা বহন করেছেন তা বহন করা"
        },
        "p": [
          {
            "en": "The verse quietly audits everyone who represents this religion. If the message itself is mercy to the worlds, then a carrier of the message who is habitually harsh is misrepresenting the cargo. The Prophet ﷺ said, in the sound hadith, that those who show mercy are shown mercy by the Most Merciful: show mercy to those on the earth, and He who is above the heaven will show mercy to you.",
            "bn": "আয়াতটি নীরবে নিরীক্ষা করে তাদের প্রত্যেককে, যারা এই দ্বীনের প্রতিনিধিত্ব করে। বার্তাটি নিজেই যদি জগতসমূহের জন্য রহমত হয়, তবে বার্তার এমন বাহক — যে অভ্যাসগতভাবে রূঢ় — সে আসলে মালামালের ভুল পরিচয় দিচ্ছে। নবী ﷺ সহীহ হাদীসে বলেছেন: দয়াশীলদের প্রতি পরম দয়াময় দয়া করেন; যমীনে যারা আছে তাদের প্রতি দয়া করো — আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।"
          },
          {
            "en": "So the lived question the verse leaves behind is direct: does my way of carrying this faith feel like mercy to the people around me — family, neighbours, the difficult, the different, the still-unconvinced? The circle of one's compassion is a fair measure of how much of lil-alamin one has understood. Whoever carries this message forward carries mercy, or has misunderstood what he carries.",
            "bn": "সুতরাং আয়াতটি যে যাপিত প্রশ্ন রেখে যায় তা সোজাসাপ্টা: আমি যেভাবে এই দ্বীন বহন করছি, তা কি আমার চারপাশের মানুষের কাছে রহমতের মতো লাগে — পরিবার, প্রতিবেশী, কঠিন মানুষ, ভিন্ন মানুষ, এখনো-না-মানা মানুষ? নিজের মমতার বৃত্তটিই একটি ন্যায্য মাপকাঠি — লিল-আলামীনের কতটুকু আমরা বুঝেছি তার। যে এই বার্তা সামনে বহন করে নেয়, সে রহমতই বহন করে — নয়তো সে যা বহন করছে তা-ই ভুল বুঝেছে।"
          }
        ]
      }
    ]
  }
});
