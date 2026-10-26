/**
 * Tadabbur long-form articles — surah 55.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "55:1": {
    "sections": [
      {
        "h": {
          "en": "One Word, a Whole Verse",
          "bn": "এক শব্দে পূর্ণ আয়াত"
        },
        "p": [
          {
            "en": "Surah ar-Rahman begins with a verse of a single word: ar-Rahman, the Most Merciful. That verse says nothing about Him except His name. The next verse, 55:2, continues: 'allama l-Qur'an, He taught the Qur'an. Then 55:3 and 55:4 add that He created man and taught him al-bayan. Those three verses have their own place in this module and are only pointed to here. This article stays with the opening word, and with what the commentators say it is doing at the head of the surah.",
            "bn": "সূরা আর-রাহমানের প্রথম আয়াত মাত্র একটি শব্দ: আর-রাহমান, পরম দয়ালু। তাঁর নাম ছাড়া এ আয়াত আর কিছুই বলে না। পরের আয়াত, ৫৫:২, কথাটা এগিয়ে নেয়: আল্লামাল কুরআন, তিনি কুরআন শিখিয়েছেন। তারপর ৫৫:৩ ও ৫৫:৪ জানায়, তিনি মানুষ সৃষ্টি করেছেন আর তাকে আল-বায়ান শিখিয়েছেন। এই তিনটি আয়াতের আলোচনা এ মডিউলে আলাদা জায়গায় আছে, এখানে শুধু সেদিকে ইশারা করা হলো। এ লেখা থাকবে প্রথম শব্দটির কাছে। সূরার মাথায় বসে শব্দটি কী কাজ করছে, তাফসীরকারেরা সে বিষয়ে কী বলেন, সেটাই এখানে দেখার বিষয়।"
          },
          {
            "en": "As-Sa'di describes the design of the whole surah in a single sentence. Allah opened this noble surah with His name ar-Rahman, which points to the breadth of His mercy. Then He mentioned what shows that mercy and its effect: the favours He has brought to His servants in their religion, in their worldly life and in the Hereafter. After every kind of favour, as-Sa'di adds, the surah alerts the two weighty races, jinn and mankind, to give Him thanks, asking: which of the favours of your Lord will you two deny?",
            "bn": "সা'দী গোটা সূরার নকশা এক বাক্যে বলে দেন। আল্লাহ এই মহান সূরা শুরু করেছেন তাঁর আর-রাহমান নাম দিয়ে। এ নাম জানিয়ে দেয়, তাঁর রহমত কত প্রশস্ত। এরপর তিনি সেসব কথা বলেছেন, যাতে সেই রহমত আর তার ফল চোখে পড়ে: দ্বীন, দুনিয়া আর আখিরাতে বান্দাদের তিনি যত নিয়ামত দিয়েছেন। সা'দী আরও বলেন, প্রতিটি ধরনের নিয়ামতের পর সূরাটি জিন ও মানুষ, এই দুই ভারী জাতিকে শুকরিয়ার কথা মনে করিয়ে দেয় আর প্রশ্ন করে: তোমরা দুজন তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে?"
          }
        ]
      },
      {
        "h": {
          "en": "Breadth of Mercy, Width of Bounty",
          "bn": "রহমতের প্রশস্ততা, দানের বিস্তার"
        },
        "p": [
          {
            "en": "The words as-Sa'di chooses for the name are worth reading slowly. Ar-Rahman, he writes, is the name that points to the breadth of His mercy, the generality of His ihsan, the abundance of His goodness and the width of His bounty. He sets the four phrases side by side: mercy that is broad, kindness that reaches all, goodness given in large measure, favour without narrow limits. Ma'arif al-Qur'an renders the name as the All-Merciful. On the word itself the commentaries consulted here say no more than this, and this article adds nothing to them.",
            "bn": "নামটির জন্য সা'দী যে শব্দগুলো বেছে নিয়েছেন, সেগুলো ধীরে পড়ার মতো। তিনি লেখেন, আর-রাহমান নামটি জানিয়ে দেয় তাঁর রহমত কত প্রশস্ত, তাঁর ইহসান কত ব্যাপক, তাঁর কল্যাণ কত অঢেল আর তাঁর অনুগ্রহ কত বিস্তৃত। চারটি কথা তিনি পাশাপাশি রাখেন: প্রশস্ত রহমত, সবার কাছে পৌঁছে যাওয়া দয়া, অঢেল পরিমাণে দেওয়া কল্যাণ, আর এমন অনুগ্রহ যার কোনো সংকীর্ণ সীমা নেই। মাআরিফুল কুরআন নামটির অনুবাদ করে সর্বদয়াময়। শব্দটি নিয়ে আনা তাফসীরগুলো এর বেশি কিছু বলে না, আর এ লেখাও নিজের থেকে কিছু যোগ করছে না।"
          },
          {
            "en": "At-Tabari explains the name by what it does in the passage, and his paraphrase speaks to the reader directly: ar-Rahman, O people, out of His mercy towards you, taught you the Qur'an. By that He favoured you, since through it He showed you what pleases your Lord and made known to you what angers Him, so that you would obey Him, earn His abundant reward and be saved from His painful punishment. Ibn Kathir opens his comment on the same note: here Allah tells of His favour and His mercy towards His creation.",
            "bn": "তাবারী নামটি বোঝান এ অংশে নামটি কী কাজ করছে তা দেখিয়ে। তাঁর ব্যাখ্যা সরাসরি পাঠকের সঙ্গে কথা বলে: হে মানুষ, আর-রাহমান তোমাদের প্রতি রহমত করে তোমাদের কুরআন শিখিয়েছেন। এভাবে তিনি তোমাদের উপর অনুগ্রহ করেছেন। কারণ কুরআন দিয়েই তিনি দেখিয়ে দিয়েছেন কিসে তোমাদের রব সন্তুষ্ট হন, আর জানিয়ে দিয়েছেন কিসে তিনি অসন্তুষ্ট হন, যাতে তোমরা তাঁর আনুগত্য করো, তাঁর বিপুল সওয়াব লাভ করো আর তাঁর যন্ত্রণাদায়ক শাস্তি থেকে বাঁচো। ইবন কাসীরও তাঁর আলোচনা শুরু করেন একই সুরে: এখানে আল্লাহ তাঁর সৃষ্টির প্রতি নিজের অনুগ্রহ আর রহমতের খবর দিচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Completed by the Next Verse",
          "bn": "পরের আয়াতে বাক্যটি পূর্ণ"
        },
        "p": [
          {
            "en": "Several commentators read the first verse straight into the second. At-Tabari's paraphrase, quoted above, makes ar-Rahman the one who taught. Al-Muyassar, which comments on 55:1 and 55:2 together, puts it in one line: ar-Rahman taught man the Qur'an, by making its recitation, its memorising and the understanding of its meanings easy. On this reading the name does not stand alone. It is the first word of a sentence that the next verse completes, and the mercy is named before the act that comes from it.",
            "bn": "কয়েকজন তাফসীরকার প্রথম আয়াতকে সরাসরি দ্বিতীয় আয়াতের সঙ্গে মিলিয়ে পড়েন। ওপরে তাবারীর যে ব্যাখ্যা এসেছে, তাতে আর-রাহমানই সেই সত্তা, যিনি শিখিয়েছেন। মুয়াসসার ৫৫:১ ও ৫৫:২ একসঙ্গে ব্যাখ্যা করে, আর কথাটা বলে এক লাইনে: আর-রাহমান মানুষকে কুরআন শিখিয়েছেন। কীভাবে? এর তিলাওয়াত, মুখস্থ করা আর অর্থ বোঝা সহজ করে দিয়ে। এভাবে পড়লে নামটি একা দাঁড়িয়ে থাকে না। এ যেন একটি বাক্যের প্রথম শব্দ, যা পরের আয়াতে গিয়ে পূর্ণ হয়। রহমতের নাম আগে আসে, তারপর আসে সেই কাজ, যা ওই রহমত থেকে জন্ম নেয়।"
          },
          {
            "en": "Ibn Kathir reads the passage the same way and quotes 55:1 to 55:4 as one unit. Allah, he says, sent down the Qur'an to His servants and made its memorising and understanding easy for those to whom He showed mercy. Ma'arif al-Qur'an makes a related point from the other end: of all the favours the surah goes on to list, the greatest is the knowledge of the Qur'an, because it is a comprehensive Book guiding people in the affairs of this world and the next. What that teaching covers belongs to the article on 55:2.",
            "bn": "ইবন কাসীরও অংশটি এভাবেই পড়েন, আর ৫৫:১ থেকে ৫৫:৪ একসঙ্গে উদ্ধৃত করেন। তিনি বলেন, আল্লাহ তাঁর বান্দাদের প্রতি কুরআন নাজিল করেছেন, আর যাদের প্রতি দয়া করেছেন তাদের জন্য তা মুখস্থ করা ও বোঝা সহজ করে দিয়েছেন। মাআরিফুল কুরআন একই কথার কাছে পৌঁছায় অন্য দিক থেকে। সূরাটি সামনে যত নিয়ামতের তালিকা দেয়, তার মধ্যে সবচেয়ে বড় হলো কুরআনের জ্ঞান। কারণ এ এমন এক পূর্ণাঙ্গ কিতাব, যা দুনিয়া ও আখিরাত দুই জগতের বিষয়ে মানুষকে পথ দেখায়। শেখানোর মধ্যে কী কী পড়ে, সে আলোচনা ৫৫:২ আয়াতের লেখার বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reported as a Reply",
          "bn": "জবাব হিসেবে বর্ণিত"
        },
        "p": [
          {
            "en": "Al-Baghawi's note on the verse is short, and it records two reports, each introduced with qila, it is said. In the first, it was revealed when they said: and what is ar-Rahman? Those words are found in 25:60, where people told to prostrate to ar-Rahman answer with that very question. In the second, it is a reply to the people of Makkah when they said: it is only a human being who teaches him, words the Qur'an itself quotes in 16:103. Al-Baghawi gives both and does not choose between them.",
            "bn": "আয়াতটি নিয়ে বাগাভীর আলোচনা ছোট। তাতে তিনি দুটি বর্ণনা আনেন, দুটোরই শুরুতে আছে কীলা, অর্থাৎ বলা হয়। প্রথম বর্ণনা মতে, আয়াতটি নাজিল হয় যখন তারা বলেছিল: আর-রাহমান আবার কী? কথাটা আছে ২৫:৬০ আয়াতে। সেখানে লোকদের আর-রাহমানকে সিজদা করতে বলা হলে তারা ঠিক এই প্রশ্ন দিয়েই জবাব দেয়। দ্বিতীয় বর্ণনা মতে, আয়াতটি মক্কাবাসীর একটি কথার জবাব। তারা বলেছিল: তাকে তো একজন মানুষই শেখায়। কুরআন নিজেই কথাটা উদ্ধৃত করেছে ১৬:১০৩ আয়াতে। বাগাভী দুটোই উল্লেখ করেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "Set beside at-Tabari and al-Muyassar, these reports give the opening word a second shape. Read with those two, ar-Rahman begins a sentence that 55:2 completes. Read with al-Baghawi's reports, the name also stands as an answer: to a question about who ar-Rahman is, or to a claim about who was teaching the Prophet ﷺ. The sources place the two framings side by side without a verdict, and al-Baghawi marks both of his reports with it is said. This article leaves the matter where they leave it and chooses neither.",
            "bn": "তাবারী আর মুয়াসসারের পাশে রাখলে এই বর্ণনাগুলো প্রথম শব্দটিকে আরেকটি চেহারা দেয়। ওই দুজনের সঙ্গে পড়লে আর-রাহমান একটি বাক্যের শুরু, যা ৫৫:২ আয়াতে গিয়ে পূর্ণ হয়। বাগাভীর বর্ণনার সঙ্গে পড়লে নামটি একটি জবাবও বটে: হয় আর-রাহমান কে, সেই প্রশ্নের জবাব; নয়তো নবী ﷺ-কে কে শেখাচ্ছে, সে বিষয়ে তোলা দাবির জবাব। উৎসগুলো দুটি ব্যাখ্যা পাশাপাশি রাখে, কোনো রায় দেয় না। বাগাভী নিজেও দুটো বর্ণনার সঙ্গেই 'বলা হয়' কথাটি জুড়ে দিয়েছেন। তাঁরা বিষয়টা যেখানে রেখেছেন, এ লেখাও সেখানেই রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Opened for Them",
          "bn": "তাদের সামনে খুলে দেওয়া নাম"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an gives two reasons for opening the surah with this name, and marks the first with the word presumably. The disbelievers of Makkah, it says, were unaware of this name of Allah and used to ask what ar-Rahman is, as 25:60 records, so the name was chosen here to make it known to them. The second reason is that teaching the Qur'an, the act named in the next verse, was a pure gift flowing from His beneficence. It was not binding on Allah, nor something for which He could be held to account, nor done out of any need of His.",
            "bn": "এ নাম দিয়ে সূরা শুরু করার দুটি কারণ বলে মাআরিফুল কুরআন, আর প্রথমটির সঙ্গে জুড়ে দেয় সম্ভবত শব্দটি। সেখানে বলা হয়েছে, মক্কার কাফিররা আল্লাহর এই নাম জানত না। তারা জিজ্ঞেস করত, আর-রাহমান আবার কী, যেমনটা ২৫:৬০ আয়াতে আছে। তাই নামটি তাদের জানানোর জন্য এখানে বেছে নেওয়া হয়েছে। দ্বিতীয় কারণ হলো, পরের আয়াতে যে কাজের কথা আছে, সেই কুরআন শেখানো ছিল তাঁর দয়া থেকে আসা খাঁটি দান। এটা আল্লাহর উপর বাধ্যতামূলক কিছু ছিল না, এর জন্য তাঁকে জবাবদিহিও করতে হয় না, আর তাঁর কোনো প্রয়োজন থেকেও তা করা হয়নি।"
          },
          {
            "en": "Those who asked what ar-Rahman is, and those who said a human being was teaching the Prophet ﷺ, appear here only as the commentators report them. The verse answers what was said in Makkah at that time. It licenses nothing against any living person or community, and it hands no reader a label for anyone who questions the name or does not yet know it. The response the passage invites, on Ma'arif al-Qur'an's account, is to come to know the name, since it was placed here so that they would know it.",
            "bn": "যারা জিজ্ঞেস করেছিল আর-রাহমান কী, আর যারা বলেছিল একজন মানুষ নবী ﷺ-কে শেখাচ্ছে, তারা এখানে আসে শুধু তাফসীরকারদের বর্ণনা অনুযায়ী। আয়াতটি সেই সময়ে মক্কায় বলা কথার জবাব দেয়। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। যে নামটি নিয়ে প্রশ্ন তোলে বা এখনো নামটি জানে না, তার গায়ে লাগানোর মতো কোনো তকমাও এ আয়াত কোনো পাঠকের হাতে তুলে দেয় না। মাআরিফুল কুরআনের বর্ণনা অনুযায়ী, এ অংশ যে সাড়া চায় তা হলো নামটিকে চেনা। কারণ নামটি এখানে রাখাই হয়েছিল, যাতে তারা চিনতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Openings, One Name",
          "bn": "তিন সূচনা মিলে এক নাম"
        },
        "p": [
          {
            "en": "Al-Qurtubi records an unusual view from Sa'id ibn Jubayr and 'Amir ash-Sha'bi. Ar-Rahman, they said, is made up of the openings of three surahs which, when brought together, form one of the names of Allah: Alif-Lam-Ra, Ha-Mim and Nun, whose letters joined give ar-Rahman. Al-Qurtubi reports it as their saying and moves on to the next verse without weighing it. The article records it the same way, as the view of those two named early scholars, and adds nothing of its own about what the separate letters at the head of those surahs mean.",
            "bn": "কুরতুবী সাঈদ ইবন জুবাইর আর আমির আশ-শা'বীর একটি ব্যতিক্রমী মত উল্লেখ করেন। তাঁদের মতে, আর-রাহমান তিনটি সূরার সূচনা দিয়ে গঠিত। সেগুলো একত্র করলে আল্লাহর নামগুলোর একটি দাঁড়ায়: আলিফ-লাম-রা, হা-মীম আর নূন, যাদের অক্ষর মিলিয়ে হয় আর-রাহমান। কুরতুবী একে তাঁদের কথা হিসেবেই উদ্ধৃত করেন, যাচাই না করে পরের আয়াতে চলে যান। এ লেখাও একে সেভাবেই রাখছে, প্রথম যুগের ওই দুই আলিমের মত হিসেবে। ওই সূরাগুলোর শুরুতে থাকা বিচ্ছিন্ন অক্ষরগুলোর অর্থ কী, সে বিষয়ে এ লেখা নিজের থেকে কিছু যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Revealed in Makkah or Madinah",
          "bn": "মক্কায় না মদিনায় নাজিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi also records a disagreement over where the surah was revealed. In the view of al-Hasan, 'Urwa ibn az-Zubayr, 'Ikrima, 'Ata and Jabir, it is Makkan in its entirety. Ibn 'Abbas held it Makkan except for one verse, the one that begins: all who are in the heavens and the earth ask of Him, which is 55:29. Ibn Mas'ud and Muqatil held it Madinan in its entirety. Al-Qurtubi judges the first view the sounder, and Ma'arif al-Qur'an, summarising him, notes that he concluded the surah is Makkan and preferred that view.",
            "bn": "সূরাটি কোথায় নাজিল হয়েছিল, তা নিয়েও কুরতুবী একটি মতভেদ উল্লেখ করেন। হাসান, উরওয়া ইবন যুবাইর, ইকরিমা, আতা আর জাবিরের মতে পুরো সূরাটিই মক্কি। ইবন আব্বাসের মতে একটি আয়াত ছাড়া বাকি সব মক্কি। সেই আয়াতটি শুরু হয় এভাবে: আসমান ও জমিনে যারা আছে, সবাই তাঁর কাছেই চায়, অর্থাৎ ৫৫:২৯। ইবন মাসঊদ আর মুকাতিলের মতে পুরো সূরাটিই মাদানি। কুরতুবী প্রথম মতকে বেশি সঠিক বলে রায় দেন। মাআরিফুল কুরআন তাঁর আলোচনার সারকথা টেনে জানায়, তিনি সূরাটিকে মক্কি বলে সিদ্ধান্তে পৌঁছেছেন আর এ মতকেই অগ্রাধিকার দিয়েছেন।"
          },
          {
            "en": "For his judgement al-Qurtubi gives a report he relates from 'Urwa ibn az-Zubayr, without a chain or a grading in the text consulted. The first man after the Prophet ﷺ to recite the Qur'an aloud in Makkah was Ibn Mas'ud. The Companions said Quraysh had never heard it recited openly, and asked who would make them hear it. Ibn Mas'ud said he would. They feared for him and wanted a man with a clan to protect him, but he refused. He stood at the Maqam and recited, after the basmala: ar-Rahman, 'allama l-Qur'an, raising his voice.",
            "bn": "নিজের রায়ের পক্ষে কুরতুবী উরওয়া ইবন যুবাইর থেকে একটি বর্ণনা আনেন। যে লেখাটি আনা হয়েছে, তাতে এর কোনো সনদ বা মান উল্লেখ নেই। নবী ﷺ-এর পরে মক্কায় প্রথম যিনি উঁচু গলায় কুরআন পড়েছিলেন, তিনি ইবন মাসঊদ। সাহাবিরা বলেছিলেন, কুরাইশ কখনো প্রকাশ্যে কুরআন পড়া শোনেনি, কে তাদের শোনাবে? ইবন মাসঊদ বললেন, আমি। তাঁরা তাঁর জন্য ভয় পেলেন। তাঁরা চাইছিলেন এমন কাউকে, যার গোত্র তাকে রক্ষা করবে। কিন্তু তিনি রাজি হলেন না। মাকামের কাছে দাঁড়িয়ে বিসমিল্লাহর পর তিনি গলা উঁচু করে পড়লেন: আর-রাহমান, আল্লামাল কুরআন।"
          },
          {
            "en": "He went on reciting while Quraysh sat in their gatherings. They listened, asked what Ibn Umm 'Abd was saying, and were told it was what Muhammad claims was revealed to him. Then they struck him until they left marks on his face. Those men appear here because the report describes them, and only as it describes them. The account tells what happened to one Companion at one moment in Makkah. It licenses nothing against any living person or community, and the disagreement over where the surah was revealed stays as al-Qurtubi records it.",
            "bn": "কুরাইশরা তখন নিজেদের মজলিসে বসে, আর তিনি পড়েই চললেন। তারা কান পেতে শুনল, জিজ্ঞেস করল ইবন উম্মি আবদ কী বলছে। জবাব এল, মুহাম্মাদ দাবি করে তাঁর উপর যা নাজিল হয়েছে, সেটাই সে পড়ছে। তারপর তারা তাঁকে এমন মারল যে তাঁর মুখে দাগ বসে গেল। ওই লোকেরা এখানে আসে শুধু এ কারণে যে বর্ণনায় তাদের কথা আছে, আর ঠিক ততটুকুই, যতটুকু বর্ণনা বলে। ঘটনাটি মক্কার এক মুহূর্তে একজন সাহাবির সঙ্গে যা ঘটেছিল তার বিবরণ। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। আর সূরাটি কোথায় নাজিল হয়েছে, সে মতভেদ কুরতুবী যেভাবে লিখেছেন সেভাবেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited From Its First Word",
          "bn": "প্রথম শব্দ থেকে শেষ পর্যন্ত"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds a hadith to the same argument, and Ibn Kathir and Ma'arif al-Qur'an cite it too. At-Tirmidhi records (3291) from Jabir (RA): The Messenger of Allah ﷺ came out to his Companions, and recited Surat ar-Rahman from its beginning to its end for them, and they were silent. So he said: I recited it to the jinn on the Night of the Jinn, and they had a better response to it than you did. Each time I came to Allah's saying, which of your Lord's favours do you deny, they said: We do not deny any of Your favours, our Lord, and Yours is praise.",
            "bn": "একই যুক্তির পক্ষে কুরতুবী একটি হাদিস আনেন, ইবন কাসীর আর মাআরিফুল কুরআনও হাদিসটি উল্লেখ করেছে। তিরমিযী (৩২৯১) জাবির (রাঃ) থেকে বর্ণনা করেন: রাসূলুল্লাহ ﷺ তাঁর সাহাবিদের কাছে বেরিয়ে এলেন এবং শুরু থেকে শেষ পর্যন্ত সূরা আর-রাহমান তাঁদের পড়ে শোনালেন। তাঁরা চুপ করে রইলেন। তখন তিনি বললেন: জিনদের রাতে আমি এটি জিনদের পড়ে শুনিয়েছিলাম, তারা তোমাদের চেয়ে সুন্দর সাড়া দিয়েছিল। যখনই আমি আল্লাহর এই বাণীতে পৌঁছাতাম, তোমাদের রবের কোন কোন নিয়ামত তোমরা অস্বীকার করবে, তারা বলত: হে আমাদের রব, আপনার কোনো নিয়ামতই আমরা অস্বীকার করি না, সব প্রশংসা আপনারই।"
          },
          {
            "en": "At-Tirmidhi calls the hadith gharib and says he knows it only through a single chain, from Zuhayr ibn Muhammad. He adds Ahmad ibn Hanbal's remark that the Zuhayr known in Syria seems not to be the one narrated from in Iraq, because of the munkar reports told from him, and al-Bukhari's that the people of Syria narrate munkar reports from Zuhayr. That is the collector's own grading, and it is not raised here. Al-Qurtubi uses the hadith as further sign that the surah is Makkan, and Ma'arif al-Qur'an explains why: the Night of the Jinn took place in Makkah.",
            "bn": "তিরমিযী হাদিসটিকে গরীব বলেছেন। তিনি জানান, এটি তিনি কেবল একটি সূত্রেই জানেন, যুহাইর ইবন মুহাম্মাদ থেকে। সঙ্গে আহমাদ ইবন হাম্বলের মন্তব্য আনেন: শামে যে যুহাইরকে চেনা যায়, মনে হয় তিনি সেই যুহাইর নন, ইরাকে যাঁর থেকে বর্ণনা নেওয়া হয়; কারণ তাঁর নামে মুনকার বর্ণনা পাওয়া যায়। বুখারীর মন্তব্যও আনেন: শামের লোকেরা যুহাইর থেকে মুনকার বর্ণনা করে। এটাই সংকলকের নিজের দেওয়া মান, এখানে তা বাড়িয়ে বলা হচ্ছে না। কুরতুবী হাদিসটিকে সূরাটি মক্কী হওয়ার আরেকটি ইঙ্গিত হিসেবে নেন। মাআরিফুল কুরআন কারণটা বলে দেয়: জিনদের রাতের ঘটনা ঘটেছিল মক্কায়।"
          },
          {
            "en": "The refrain the jinn answered, first heard in 55:13, has its own article, and this one does not repeat it. Al-Qurtubi also relates, with it is narrated and no source named, a saying through 'Ali that everything has a bride and the bride of the Qur'an is Surat ar-Rahman. Ibn Kathir gives a second report of the jinn's answer from Ibn 'Umar, through at-Tabari's chain. Neither was confirmed in a graded collection for this article, so neither is relied on here, and the article rests its one hadith on at-Tirmidhi alone.",
            "bn": "জিনেরা যে বারবার ফিরে আসা প্রশ্নের জবাব দিয়েছিল, তা প্রথম আসে ৫৫:১৩ আয়াতে। সে আয়াত নিয়ে আলাদা লেখা আছে, তাই এখানে আর বলা হচ্ছে না। কুরতুবী রুউইয়া, অর্থাৎ বর্ণিত আছে, বলে কোনো উৎসের নাম না নিয়ে আলী থেকে একটি কথা আনেন: প্রত্যেক জিনিসের একটি কনে আছে, আর কুরআনের কনে সূরা আর-রাহমান। ইবন কাসীর তাবারীর সনদে ইবন উমার থেকে জিনদের জবাব নিয়ে দ্বিতীয় একটি বর্ণনা আনেন। এ লেখার জন্য মান যাচাই করা কোনো হাদিস-সংকলনে এ দুটোর কোনোটিই মেলানো যায়নি। তাই এখানে এগুলোর উপর ভর করা হচ্ছে না। এ লেখার একমাত্র হাদিস তিরমিযীর বর্ণনাটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Starting From the Name",
          "bn": "নাম দিয়েই শুরু"
        },
        "p": [
          {
            "en": "What does the opening ask of a reader? As-Sa'di's description gives an order: the name first, then the favours that show it, then, after each kind of favour, the call to thank Him. At-Tabari's paraphrase turns the same order towards the hearer: the Qur'an was taught to you out of His mercy, so that you would know what pleases Him and act on it. Read that way, the first gift this surah sets before its hearers is guidance itself, and it is placed directly under the name of the Most Merciful.",
            "bn": "শুরুর এই আয়াত পাঠকের কাছে কী চায়? সা'দীর বর্ণনায় একটা ক্রম আছে। আগে নাম, তারপর সেই নিয়ামতগুলো যা নামটিকে দেখিয়ে দেয়, তারপর প্রতিটি ধরনের নিয়ামতের পর শুকরিয়ার ডাক। তাবারীর ব্যাখ্যা একই ক্রমকে শ্রোতার দিকে ঘুরিয়ে দেয়: তাঁর রহমতের কারণেই তোমাদের কুরআন শেখানো হয়েছে, যাতে তোমরা জানো কিসে তিনি খুশি হন আর সে অনুযায়ী আমল করো। এভাবে পড়লে এ সূরা শ্রোতাদের সামনে প্রথম যে দান রাখে, তা হিদায়াত নিজেই। আর সেটা বসানো হয়েছে ঠিক পরম দয়ালুর নামের নিচে।"
          },
          {
            "en": "The same order can shape an ordinary day. Before a reading, a day's work or a meal, the name can come first, as it does here, and the counting of gifts can follow it. Ma'arif al-Qur'an remarks that those who heeded the Qur'an and gave it its due, like the Companions, were raised by Allah in rank. Whoever has been taught even a little of the Qur'an holds the gift named straight after ar-Rahman, and has a place to begin: thanking Him for it, and passing it on.",
            "bn": "একই ক্রম দিয়ে সাধারণ একটা দিনও সাজানো যায়। পড়া, দিনের কাজ বা খাবারের আগে নামটি আগে আসতে পারে, যেমন এখানে এসেছে, আর নিয়ামতের হিসাব আসতে পারে তার পরে। মাআরিফুল কুরআন বলে, যারা কুরআনের কথা মেনেছে আর তার হক আদায় করেছে, যেমন সাহাবিরা, আল্লাহ তাদের মর্যাদা উঁচু করেছেন। যাকে কুরআনের সামান্যটুকুও শেখানো হয়েছে, তার হাতে আছে আর-রাহমানের ঠিক পরে উল্লেখ করা দানটি। শুরু করার জায়গাও তার আছে: এর জন্য তাঁর শুকরিয়া আদায় করা, আর অন্যকে তা পৌঁছে দেওয়া।"
          }
        ]
      }
    ]
  },
  "55:9": {
    "sections": [
      {
        "h": {
          "en": "A Scale Among the Favours",
          "bn": "নিয়ামতের সারিতে এক পাল্লা"
        },
        "p": [
          {
            "en": "Surah ar-Rahman opens by naming favours: the Qur'an taught, the human created, al-bayan, clear speech, given to him, the sun and the moon moving by a reckoning, an-najm and the trees bowing down. Then 55:7: the sky He raised high, and He set down the balance. 55:8 gives the purpose, that you not transgress within the balance, and 55:9 turns that purpose into a command. Only after it does 55:10 lay out the earth for the creatures. The balance stands between the raised sky and the spread earth.",
            "bn": "সূরা আর-রাহমান শুরু হয় নিয়ামতের নাম ধরে ধরে। কুরআন শেখানো, মানুষ সৃষ্টি, তাকে আল-বায়ান অর্থাৎ মনের কথা স্পষ্ট করে বলার ক্ষমতা দান, হিসাব মেনে সূর্য আর চাঁদের চলা, নাজম আর গাছপালার সাজদা। তারপর ৫৫:৭ বলে, আকাশকে তিনি উঁচু করেছেন আর স্থাপন করেছেন মানদণ্ড। ৫৫:৮ জানায় এর উদ্দেশ্য: যাতে তোমরা মানদণ্ডে সীমা না ছাড়াও। ৫৫:৯ সেই উদ্দেশ্যকেই হুকুমে বদলে দেয়। এর পরে গিয়ে ৫৫:১০ আয়াতে জমিনকে সৃষ্টিকুলের জন্য বিছিয়ে দেওয়ার কথা আসে। মানদণ্ডের জায়গা তাই উঁচু আকাশ আর বিছানো জমিনের মাঝখানে।"
          },
          {
            "en": "The verse is six words in Arabic: wa-aqimu al-wazna bil-qisti wa la tukhsiru al-mizan. Its first half commands and its second forbids. The verbs are plural, spoken to a group, while the refrain at 55:13 addresses its hearers in the dual, the Lord of the two of you. Ibn Kathir reads 55:8 as saying that Allah created the heavens and the earth in justice and truth, so that everything is founded on justice and truth and keeps to them. On that reading, honest weighing extends an order already built into creation.",
            "bn": "আরবিতে আয়াতটি মাত্র ছয়টি শব্দ: ওয়া আকীমুল ওয়াযনা বিল কিসতি ওয়া লা তুখসিরুল মীযান। প্রথম অংশে আদেশ, দ্বিতীয় অংশে নিষেধ। ক্রিয়াগুলো বহুবচনে, একটা দলকে সম্বোধন করা। অথচ ৫৫:১৩ আয়াতের বারবার ফিরে আসা প্রশ্নে শ্রোতাদের ডাকা হয় দ্বিবচনে, তোমাদের দুই দলের রব বলে। ইবন কাসীর ৫৫:৮ আয়াতের অর্থ করেন এভাবে: আল্লাহ আসমান ও জমিন সৃষ্টি করেছেন ন্যায় ও সত্যের সঙ্গে, যাতে সবকিছু ন্যায় ও সত্যের উপর দাঁড়িয়ে থাকে আর তা মেনে চলে। এই পাঠে সৎভাবে ওজন করা মানে সৃষ্টির ভেতরে আগে থেকেই গাঁথা নিয়মটাকে নিজের হাতে বহাল রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Qist, Wazn and a Shortfall",
          "bn": "কিসত, ওয়াযন আর ঘাটতি"
        },
        "p": [
          {
            "en": "Al-Qurtubi glosses the command as: do it upright, with justice. As-Sa'di says: make it stand with justice, the justice that your capacity and your means can reach, a limit that keeps the demand within what a person can do. At-Tabari glosses bil-qist simply as bil-'adl, with justice. Ma'arif al-Qur'an says qist literally means justice and calls the meaning obvious: observe the weight with equity. Al-Qurtubi also reports from Mujahid that al-qist is the word for justice in ar-Rumiyyah, the language of the Romans.",
            "bn": "কুরতুবী হুকুমটির ব্যাখ্যা দেন এভাবে: কাজটা সোজা রেখে ন্যায়ের সঙ্গে করো। সা'দী বলেন: ওজনকে ন্যায়ের উপর দাঁড় করাও, সেই ন্যায়ের উপর যতদূর তোমাদের সামর্থ্য আর সুযোগ পৌঁছায়। এই সীমাটুকু দাবিকে মানুষের সাধ্যের ভেতরে রাখে। তাবারী বিল কিসত শব্দের অর্থ সোজাসুজি বলেন বিল আদল, অর্থাৎ ইনসাফের সঙ্গে। মাআরিফুল কুরআন জানায়, কিসত শব্দের আক্ষরিক অর্থ ন্যায়, আর আয়াতের অর্থ স্পষ্ট: ইনসাফের সঙ্গে ওজন ঠিক রাখো। কুরতুবী মুজাহিদ থেকে এটাও বর্ণনা করেন যে কিসত হলো রূমীদের ভাষায় ন্যায়ের প্রতিশব্দ।"
          },
          {
            "en": "The second half turns on tukhsiru. Ma'arif al-Qur'an explains khusr as to skimp or make deficient. At-Tabari reports Ibn Zayd: whoever diminishes it has made it suffer loss; its takhsir is its diminishing. At-Tabari's own gloss is: do not reduce the weight when you weigh for people, and so wrong them. As-Sa'di says: do not diminish it and act by its opposite, which is jawr, zulm and tughyan, injustice, wrongdoing and transgression. The last of his three words shares a root with the verb of 55:8.",
            "bn": "দ্বিতীয় অংশের ভার তুখসিরু শব্দের উপর। মাআরিফুল কুরআন খুসর শব্দের অর্থ করে: কম দেওয়া, ঘাটতি রাখা। তাবারী ইবন যায়দের কথা আনেন: যে এতে কমায়, সে এটাকে ক্ষতির মুখে ফেলে, এর তাখসীর মানেই কমিয়ে দেওয়া। তাবারীর নিজের ব্যাখ্যা: মানুষের জন্য ওজন করার সময় কম দিও না, তাতে তাদের উপর জুলুম হয়। সা'দী বলেন, একে কমিয়ো না, আর এর উল্টো কাজও কোরো না। সেই উল্টো কাজ হলো জাওর, জুলম আর তুগইয়ান, অর্থাৎ অবিচার, জুলুম আর সীমালঙ্ঘন। তাঁর তিনটি শব্দের শেষটি ৫৫:৮ আয়াতের ক্রিয়ার সঙ্গে একই ধাতু থেকে এসেছে।"
          },
          {
            "en": "Al-Qurtubi records a variant. The common reading is tukhsiru, with the ta' and sin voweled u and i. Bilal ibn Abi Burdah, and Aban from Uthman, read takhsaru, with fathah on both, and he says the two are dialect forms: akhsartu al-mizan and khasartuhu, like ajbartuhu and jabartuhu. Another view reads takhsaru with a preposition understood: do not lose in the balance. Ma'arif al-Qur'an draws the structure together: the first part is the positive side of the injunction, the second its negative side.",
            "bn": "কুরতুবী একটি ভিন্ন কিরাআতের কথাও লিখেছেন। প্রচলিত পাঠ তুখসিরু, যেখানে তা-তে পেশ আর সীনে যের। বিলাল ইবন আবী বুরদা এবং উসমান থেকে আবান পড়েছেন তাখসারু, দুটিতেই যবর দিয়ে। কুরতুবীর মতে দুটোই আরবদের ভিন্ন ভিন্ন বাকরীতি: আখসারতুল মীযান আর খাসারতুহু, যেমন আজবারতুহু আর জাবারতুহু। আরেক মতে তাখসারু পাঠে একটা অব্যয় উহ্য আছে, অর্থ দাঁড়ায়: মানদণ্ডে তোমরা ক্ষতিগ্রস্ত হয়ো না। মাআরিফুল কুরআন পুরো কাঠামোটা মিলিয়ে দেখায়: প্রথম অংশ হুকুমের ইতিবাচক দিক, দ্বিতীয় অংশ তার নেতিবাচক দিক।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was Set Beside the Sky",
          "bn": "আকাশের পাশে যা রাখা হলো"
        },
        "p": [
          {
            "en": "Everything in 55:9 depends on what al-mizan meant two verses earlier. The largest group reads it as justice. At-Tabari explains 55:7 as: He set down justice among His creation on the earth, and gives Mujahid's word for it, al-'adl. Al-Baghawi cites Mujahid too. Al-Qurtubi names Mujahid, Qatadah and as-Suddi: He placed on earth the justice He commanded, as one says that Allah laid down the Shari'ah. The Muyassar agrees, and Ibn Kathir sets 57:25 beside it, where the Book and the balance are sent with the messengers so that people may uphold qist.",
            "bn": "৫৫:৯ আয়াতের পুরো অর্থ নির্ভর করে দুই আয়াত আগে আল-মীযান বলতে কী বোঝানো হয়েছে, তার উপর। সবচেয়ে বড় দলটি একে পড়ে ন্যায় হিসেবে। তাবারী ৫৫:৭ আয়াতের ব্যাখ্যায় বলেন, তিনি জমিনে তাঁর সৃষ্টির মাঝে ন্যায় স্থাপন করেছেন। প্রমাণ হিসেবে আনেন মুজাহিদের একটি শব্দ: আল-আদল। বাগাভীও মুজাহিদের কথা উদ্ধৃত করেন। কুরতুবী নাম নেন মুজাহিদ, কাতাদা ও সুদ্দীর। তাঁদের মতে আল্লাহ জমিনে সেই ন্যায় রেখেছেন যার হুকুম তিনি দিয়েছেন, যেমন বলা হয়, আল্লাহ শরীআত স্থাপন করেছেন। মুয়াসসারও এ মতের সঙ্গে একমত। ইবন কাসীর এর পাশে রাখেন ৫৭:২৫ আয়াত, যেখানে রাসূলদের সঙ্গে কিতাব ও মীযান পাঠানো হয়েছে, যাতে মানুষ কিসত প্রতিষ্ঠা করে।"
          },
          {
            "en": "Al-Qurtubi lists other readings without settling among them. Al-Husayn ibn al-Fadl took the balance to be the Qur'an, since it explains what people need. Al-Hasan, Qatadah again, and ad-Dahhak took it to be the actual scale with a tongue, by which people obtain their due from each other, and al-Qurtubi adds that this is a statement carrying the sense of a command to justice, shown by 55:9 itself. Under qila he adds that it means judgement, and that it means the balance set up in the Hereafter for weighing deeds.",
            "bn": "কুরতুবী আরও কয়েকটি মত উল্লেখ করেন, কোনোটিকে চূড়ান্ত না করেই। হুসাইন ইবনুল ফাদলের মতে মীযান হলো কুরআন, কারণ মানুষের যা দরকার তার ব্যাখ্যা এতে আছে। হাসান, আবারও কাতাদা, এবং যাহহাকের মতে এটা কাঁটাওয়ালা আসল দাঁড়িপাল্লা, যা দিয়ে মানুষ একে অপরের কাছ থেকে নিজের পাওনা বুঝে নেয়। কুরতুবী যোগ করেন, বাক্যটি খবরের আকারে এলেও এর অর্থ ন্যায়ের হুকুম, আর তার প্রমাণ ৫৫:৯ আয়াত নিজেই। 'বলা হয়' কথাটি দিয়ে তিনি আরও আনেন যে এর অর্থ বিচার-ফয়সালা, আবার এ-ও যে এটা আখিরাতের সেই মীযান, যাতে আমল ওজন করা হবে।"
          },
          {
            "en": "As-Sa'di widens the first reading rather than choosing against the others. The balance, he says, is justice between the servants in words and in deeds, and it does not mean the familiar scale alone. It takes in the scale, the measure by which things and quantities are measured, the surveys by which unknown quantities are fixed, and the realities by which created things are told apart and justice is set up among them. At-Tabari adds that in the reading of Abdullah it is khafada al-mizan, and that khafd and wad' are close in meaning.",
            "bn": "সা'দী প্রথম মতটিকেই প্রশস্ত করেন, অন্যগুলোর বিপক্ষে রায় দেন না। তাঁর মতে মীযান হলো বান্দাদের মাঝে কথা ও কাজে ন্যায়, শুধু পরিচিত দাঁড়িপাল্লা নয়। এর ভেতরে পড়ে দাঁড়িপাল্লা, যে পাত্রে জিনিস আর পরিমাণ মাপা হয়, মাপজোখের সেই পদ্ধতি যা দিয়ে অজানা পরিমাণ নির্ধারণ হয়, আর সেই সব বাস্তবতা যা দিয়ে সৃষ্টির এক জিনিসকে আরেকটি থেকে আলাদা করা যায় এবং তাদের মাঝে ন্যায় কায়েম হয়। তাবারী আরও জানান, আবদুল্লাহর কিরাআতে আছে খাফাদাল মীযান, আর খাফদ ও ওয়াদ শব্দ দুটির অর্থ কাছাকাছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Upright Needle, Steady Heart",
          "bn": "সোজা কাঁটা, স্থির অন্তর"
        },
        "p": [
          {
            "en": "Several early authorities read aqimu quite literally. At-Tabari glosses the clause as: set the tongue of the balance upright with justice. Lisan al-mizan is the pointer on the beam, the part that shows whether the two pans hang even. Al-Qurtubi attributes the same wording to Abu ad-Darda (RA), with qist and justice, and al-Baghawi attributes it to Abu ad-Darda and 'Ata. On this reading, to establish the weight is to make the needle stand straight, and the command reaches down to the small movement of a hand at the scale.",
            "bn": "প্রথম যুগের কয়েকজন আলিম আকীমু শব্দটিকে প্রায় আক্ষরিক অর্থে নিয়েছেন। তাবারী অংশটির ব্যাখ্যা দেন: ন্যায়ের সঙ্গে দাঁড়িপাল্লার জিহ্বা সোজা রাখো। লিসানুল মীযান হলো দাঁড়ির মাঝখানের কাঁটা, যা দেখিয়ে দেয় দুই পাল্লা সমান ঝুলছে কি না। কুরতুবী একই কথা আবুদ দারদা (রাঃ)-এর নামে আনেন, সঙ্গে কিসত ও আদল দুটি শব্দই। বাগাভী এটাকে আবুদ দারদা আর আতার কথা বলে উল্লেখ করেন। এই পাঠে ওজন প্রতিষ্ঠা করা মানে কাঁটাটাকে সোজা দাঁড় করানো। হুকুমটা তাই নেমে আসে দাঁড়িপাল্লার সামনে হাতের ছোট্ট নড়াচড়া পর্যন্ত।"
          },
          {
            "en": "Ibn 'Uyaynah, quoted by both al-Qurtubi and al-Baghawi, divides the verse between two organs: al-iqamah bil-yad, wal-qist bil-qalb. The establishing is by the hand, and the justice is by the heart. The hand can level a needle while the heart is already leaning, and the reverse also happens, an intention to be fair carried out with a careless hand. His sentence asks for both together. As-Sa'di's limit, justice as far as capacity reaches, keeps this from becoming a demand for a precision no human hand possesses.",
            "bn": "ইবন উয়াইনার কথা কুরতুবী ও বাগাভী দুজনেই এনেছেন। তিনি আয়াতটিকে দুটি অঙ্গের মাঝে ভাগ করে দেন: আল-ইকামাতু বিল ইয়াদ, ওয়াল কিসতু বিল কালব। প্রতিষ্ঠা হয় হাত দিয়ে, আর ইনসাফ হয় অন্তর দিয়ে। এমন হয় যে হাত কাঁটা সমান করে দিচ্ছে, অথচ অন্তর আগেই এক দিকে ঝুঁকে আছে। উল্টোটাও ঘটে: নিয়ত ইনসাফেরই, কিন্তু হাত অসাবধান। তাঁর বাক্য দুটোকেই একসঙ্গে চায়। সা'দীর বেঁধে দেওয়া সীমা, অর্থাৎ যতদূর সামর্থ্য পৌঁছায় ততদূর ন্যায়, এ দাবিকে মানুষের সাধ্যের বাইরে যেতে দেয় না। এমন নিখুঁত মাপ চাওয়া হচ্ছে না, যা কোনো মানুষের হাতে সম্ভব নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept Up Like a Prayer",
          "bn": "নামাজের মতো কায়েম রাখা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a different sense of the verb under qila. Aqimu here would be like the phrase aqama as-salah, he established the prayer, meaning he performed it at its time, and like aqama an-nas aswaqahum, the people kept up their markets, meaning they came to them at their time. The command then means: do not abandon dealing by weight with justice. Where the tongue reading looks at the needle in a single transaction, this reading looks at a practice kept up over time, the way a prayer is kept up.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে ক্রিয়াটির আরেকটি অর্থ লিখে রাখেন। এখানে আকীমু হতে পারে আকামাস সালাত বাক্যের মতো, যার অর্থ সে নামাজ কায়েম করল, অর্থাৎ সময়মতো আদায় করল। আবার আকামান নাসু আসওয়াকাহুম বাক্যের মতো, অর্থাৎ লোকেরা তাদের বাজার চালু রাখল, ঠিক সময়ে সেখানে হাজির হলো। তখন হুকুমের অর্থ দাঁড়ায়: ইনসাফের সঙ্গে ওজন করে লেনদেন করা কখনো ছেড়ে দিয়ো না। জিহ্বার ব্যাখ্যা তাকায় এক লেনদেনের কাঁটার দিকে। এই ব্যাখ্যা তাকায় সময় ধরে টিকিয়ে রাখা অভ্যাসের দিকে, যেমন নামাজ টিকিয়ে রাখা হয়।"
          },
          {
            "en": "Al-mizan occurs three times in 55:7, 55:8 and 55:9, and al-Qurtubi gives two explanations for the repetition: it was repeated for the sake of the verse endings, and, under qila, it was repeated to press the command to give full weight and to keep justice in it. He also reports, under qila, a reading of the second half that looks beyond the market altogether: do not make deficient the balance of your good deeds on the Day of Resurrection, so that it becomes a grief for you. He leaves these readings side by side.",
            "bn": "আল-মীযান শব্দটি তিনবার এসেছে: ৫৫:৭, ৫৫:৮ আর ৫৫:৯ আয়াতে। এই পুনরাবৃত্তির দুটি কারণ কুরতুবী উল্লেখ করেন। এক, আয়াতের শেষের মিল রাখার জন্য। দুই, 'বলা হয়' কথাটি দিয়ে, পূর্ণ ওজন দেওয়া আর তাতে ন্যায় বজায় রাখার হুকুমকে জোরালো করার জন্য। আয়াতের দ্বিতীয় অংশের এমন একটি অর্থও তিনি 'বলা হয়' দিয়ে আনেন, যা বাজার ছাড়িয়ে আরও দূরে তাকায়: কিয়ামতের দিন তোমাদের নেক আমলের পাল্লা হালকা করে ফেলো না, তাহলে সেটাই তোমাদের জন্য আফসোসের কারণ হবে। মতগুলো তিনি পাশাপাশি রেখে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Plural Reaches",
          "bn": "বহুবচন কাদের ছুঁয়ে যায়"
        },
        "p": [
          {
            "en": "The sources read the addressees in more than a single way, and they need not be forced into agreement. The Muyassar, explaining 55:8 and 55:9 together, speaks to whoever weighs for others: lest you transgress and betray the person you weighed for; establish weight with justice, and do not reduce the balance when you weigh for people. At-Tabari's gloss has the same shape, do not reduce the weight when you weigh for people. On this reading the plural gathers everyone who holds a scale on another's behalf.",
            "bn": "সম্বোধিত কারা, সে প্রশ্নে সূত্রগুলো একভাবে পড়ে না, আর তাদের জোর করে এক মতে আনার দরকারও নেই। মুয়াসসার ৫৫:৮ ও ৫৫:৯ আয়াত একসঙ্গে ব্যাখ্যা করে। সেখানে কথা বলা হয় তার সঙ্গে, যে অন্যের জন্য ওজন করে: যার জন্য ওজন করেছ, তার সঙ্গে সীমালঙ্ঘন আর খেয়ানত কোরো না। ইনসাফের সঙ্গে ওজন ঠিক রাখো, আর মানুষের জন্য মাপার সময় পাল্লায় কম দিও না। তাবারীর ব্যাখ্যার গড়নও একই: মানুষের জন্য ওজন করার সময় কম দিও না। এই পাঠে বহুবচনটি সেই সবাইকে ধরে, যারা অন্যের হয়ে পাল্লা হাতে নেয়।"
          },
          {
            "en": "Qatadah, as al-Qurtubi quotes him on this verse, speaks to every human being: be just, son of Adam, as you love to be dealt with justly, and give in full as you love to be given in full, for justice is the wellbeing of people. At-Tabari, with his chain through Qatadah, has Ibn Abbas (RA) address a particular group of his own day: O company of mawali, you have been put in charge of two matters by which those before you were destroyed. Let a man fear Allah at his scale; let a man fear Allah at his measure.",
            "bn": "কুরতুবী এ আয়াতের আলোচনায় কাতাদার যে কথা উদ্ধৃত করেন, তা প্রত্যেক মানুষের উদ্দেশে: হে আদম সন্তান, ইনসাফ করো, যেমন তুমি চাও তোমার প্রতি ইনসাফ করা হোক। পুরো মেপে দাও, যেমন তুমি চাও তোমাকে পুরো মেপে দেওয়া হোক, কারণ ইনসাফেই মানুষের কল্যাণ। তাবারী কাতাদার মাধ্যমে নিজের সনদে ইবন আব্বাস (রাঃ)-এর একটি কথা আনেন, যেখানে তিনি তাঁর সময়ের একটি নির্দিষ্ট দলকে সম্বোধন করছেন: হে মাওয়ালীর দল, তোমাদের হাতে এমন দুটি বিষয়ের দায়িত্ব এসেছে, যার কারণে তোমাদের আগের লোকেরা ধ্বংস হয়েছিল। মানুষ যেন তার দাঁড়িপাল্লার সামনে আল্লাহকে ভয় করে। মানুষ যেন তার মাপের পাত্রের সামনে আল্লাহকে ভয় করে।"
          },
          {
            "en": "Ibn Abbas goes on: only a small thing makes it even, and that does not lessen a man; rather Allah increases him, if Allah wills. These are a Companion's words of counsel, not a saying of the Prophet ﷺ, and at-Tabari reports them without a grading. None of the tafsirs consulted for this verse attaches a hadith of the Prophet ﷺ to it; the narrations Ibn Kathir brings at the opening of the surah concern its recitation and the refrain of 55:13. So the verse stands on its own words, and the readers above give its plural at least three different reaches.",
            "bn": "ইবন আব্বাস (রাঃ) আরও বলেন: সামান্য একটু হলেই মাপ সমান হয়ে যায়, আর তাতে মানুষের কিছু কমে না। বরং আল্লাহ চাইলে তাকে আরও বাড়িয়ে দেন। এগুলো একজন সাহাবীর নসীহত, নবী ﷺ-এর বাণী নয়, আর তাবারী এর মান সম্পর্কে কোনো মন্তব্য করেননি। এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলোর কোনোটিতেই আয়াতটির সঙ্গে নবী ﷺ-এর কোনো হাদিস যুক্ত নেই। সূরার শুরুতে ইবন কাসীর যে বর্ণনাগুলো আনেন, সেগুলো সূরাটির তিলাওয়াত আর ৫৫:১৩ আয়াতের বারবার ফিরে আসা প্রশ্ন নিয়ে। তাই আয়াতটি দাঁড়িয়ে আছে নিজের শব্দের উপর। আর উপরের ব্যাখ্যাকারেরা এর বহুবচনকে অন্তত তিনটি ভিন্ন পরিসরে পৌঁছে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Echoes the Mufassirun Heard",
          "bn": "মুফাসসিরদের কানে প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "The commentators consulted here set the verse beside others. Ibn Kathir places 26:182 next to it: and weigh with the straight balance, al-qistas al-mustaqim, words of Shu'ayb (AS) to the people of the thicket. Al-Qurtubi, on the second half, cites do not diminish the measure and the balance, the wording of 11:84, said by Shu'ayb (AS) to Madyan. In both places the balance belongs to a prophet's call to a whole people. Ibn Kathir, on 55:7, adds 57:25, where the balance is sent down with the Book itself.",
            "bn": "এখানে সংগ্রহ করা তাফসীরগুলো আয়াতটিকে আরও কিছু আয়াতের পাশে রাখে। ইবন কাসীর এর পাশে রাখেন ২৬:১৮২ আয়াত: সঠিক দাঁড়িপাল্লায় ওজন করো, আল-কিসতাসুল মুসতাকীম। কথাটি আইকাবাসীর প্রতি শুআইব (আঃ)-এর। কুরতুবী দ্বিতীয় অংশের ব্যাখ্যায় আনেন: মাপে ও ওজনে কম দিও না। এটা ১১:৮৪ আয়াতের শব্দ, মাদইয়ানবাসীকে শুআইব (আঃ) বলেছিলেন। দুই জায়গাতেই দাঁড়িপাল্লার কথা এসেছে গোটা এক জাতির প্রতি একজন নবীর দাওয়াতের অংশ হিসেবে। ইবন কাসীর ৫৫:৭ আয়াতের আলোচনায় আরও আনেন ৫৭:২৫, যেখানে মীযান নাজিল হয়েছে কিতাবের সঙ্গেই।"
          },
          {
            "en": "The verse's nearest neighbours deserve only a pointer here, since each has its own weight. 55:8, that you not transgress within the balance, is the purpose that 55:9 turns into practice, and the root of its verb, tagha, is the overstepping of a bound. 55:10, the earth laid out for the creatures, resumes the list of favours once the command is given. Ibn Kathir reads al-anam there, through Ibn Abbas, Mujahid, Qatadah and Ibn Zayd, as the creatures. The command to weigh justly sits between the sky and the ground that feeds everyone.",
            "bn": "আয়াতটির সবচেয়ে কাছের প্রতিবেশীদের দিকে এখানে শুধু ইশারা করাই যথেষ্ট, কারণ প্রত্যেকটির নিজস্ব ভার আছে। ৫৫:৮ আয়াত বলে, যাতে তোমরা মানদণ্ডে সীমা না ছাড়াও। এটাই সেই উদ্দেশ্য, ৫৫:৯ আয়াত যাকে হাতে-কলমে কাজে নামিয়ে আনে। ওই আয়াতের ক্রিয়ার ধাতু তাগা, যার অর্থ সীমা ছাড়িয়ে যাওয়া। ৫৫:১০ আয়াতে আছে সৃষ্টিকুলের জন্য বিছানো জমিনের কথা। হুকুম দেওয়ার পর সেখানে আবার নিয়ামতের তালিকা শুরু হয়। ইবন কাসীর ইবন আব্বাস, মুজাহিদ, কাতাদা ও ইবন যায়দের সূত্রে সেখানে আল-আনাম শব্দের অর্থ বলেন সৃষ্টিকুল। ন্যায়ের সঙ্গে ওজনের হুকুম তাই দাঁড়িয়ে আছে আকাশ আর সেই জমিনের মাঝে, যা সবাইকে খাওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Scales Nobody Else Inspects",
          "bn": "যে পাল্লা কেউ পরখ করে না"
        },
        "p": [
          {
            "en": "Whoever follows as-Sa'di's wider reading, justice in words and in deeds, finds scales in places that have no pans. A reader might notice them in how a teacher marks two papers, in how a story about an absent person is retold, in how shared work is divided at home, in how a reference is written for someone you dislike. These are not rulings, and the verse itself names only weight and the balance. They are simply where the question of the needle comes up, again and again, in an ordinary week.",
            "bn": "যে সা'দীর প্রশস্ত ব্যাখ্যা গ্রহণ করে, অর্থাৎ কথা ও কাজ দুয়েতেই ন্যায়, সে এমন সব জায়গায় পাল্লা খুঁজে পায় যেখানে কোনো পাল্লার থালাই নেই। পাঠক হয়তো তা দেখবেন শিক্ষক কীভাবে দুটি খাতায় নম্বর দেন সেখানে। অনুপস্থিত কারও সম্পর্কে শোনা কথা কীভাবে আবার বলা হয়, সেখানে। ঘরের ভাগাভাগি কাজ কীভাবে বণ্টন হয়, সেখানে। অপছন্দের মানুষের জন্য সুপারিশপত্র কীভাবে লেখা হয়, সেখানেও। এগুলো কোনো ফতোয়া নয়, আর আয়াত নিজে শুধু ওজন ও দাঁড়িপাল্লার কথাই বলে। এগুলো কেবল সেই জায়গা, যেখানে সাধারণ একটা সপ্তাহে কাঁটার প্রশ্ন বারবার সামনে আসে।"
          },
          {
            "en": "The sources give the method in their own words. Ibn 'Uyayna puts the justice in the heart before it reaches the hand. Qatadah supplies the test: deal as you love to be dealt with. Ibn Abbas (RA) notes how little it usually takes, only a small thing to make the pans even, and that Allah, if He wills, gives more for it. As-Sa'di keeps the demand to what capacity can reach. Read together beside the raised sky, the verse asks for a needle held level where only Allah is watching it.",
            "bn": "পদ্ধতিটা সূত্রগুলো নিজেদের ভাষাতেই দিয়ে দেয়। ইবন উয়াইনা ইনসাফকে আগে রাখেন অন্তরে, তারপর তা হাতে পৌঁছায়। কাতাদা দেন পরীক্ষাটা: নিজের সঙ্গে যেমন আচরণ চান, অন্যের সঙ্গে তেমনই করুন। ইবন আব্বাস (রাঃ) মনে করিয়ে দেন, সাধারণত খুব অল্পতেই কাজ হয়ে যায়, সামান্য একটু দিলেই পাল্লা সমান হয়। আর আল্লাহ চাইলে এর বদলে আরও বেশি দেন। সা'দী দাবিটাকে সামর্থ্যের সীমার ভেতরে রাখেন। উঁচু আকাশের পাশে রেখে সব মিলিয়ে পড়লে আয়াতটি এমন কাঁটা চায়, যা সোজা থাকে সেখানেও, যেখানে কেবল আল্লাহই দেখছেন।"
          }
        ]
      }
    ]
  },
  "55:13": {
    "sections": [
      {
        "h": {
          "en": "First of Thirty-One Askings",
          "bn": "একত্রিশ প্রশ্নের প্রথমটি"
        },
        "p": [
          {
            "en": "Fa-bi-ayyi ala'i rabbikuma tukadhdhiban: then which of the favours of your Lord will you two deny? Four Arabic words, and in Surah ar-Rahman they come back again and again. Counted in the Arabic text, the same four words stand as a whole verse thirty-one times, from here at 55:13 to 55:77, the verse before the surah's last. This is the first time the question is asked, and it is asked only after twelve verses have laid out what it will be asking about.",
            "bn": "ফাবিআইয়ি আলায়ি রাব্বিকুমা তুকাযযিবান: অতএব তোমরা দুজন তোমাদের রবের কোন নিয়ামতকে অস্বীকার করবে? আরবিতে মাত্র চারটি শব্দ, অথচ সূরা আর-রহমানে এরা ফিরে আসে বারবার। আরবি পাঠ গুনে দেখলে এই চার শব্দ পুরো একটি আয়াত হয়ে এসেছে একত্রিশবার, এখানে ৫৫:১৩ থেকে ৫৫:৭৭ পর্যন্ত। শেষেরটি সূরার শেষ আয়াতের ঠিক আগের আয়াত। প্রশ্নটা এখানে প্রথমবার উঠছে। তবে ওঠার আগে বারোটি আয়াত মেলে ধরেছে, প্রশ্নটা ঠিক কী নিয়ে।"
          },
          {
            "en": "Al-Qurtubi retraces those twelve verses in the words of Muhammad ibn Ali at-Tirmidhi, not Abu Isa at-Tirmidhi, whose hadith collection is cited below. The surah opens with the name ar-Rahman, he says, so that servants know all it then describes reaches them from His mercy: He taught the Qur'an, created man, set sun and moon to a reckoning, made star and tree prostrate, raised the sky, set down the balance, which is justice, and laid out the earth for the creatures. The name at 55:1 and the scale at 55:9 have articles of their own here.",
            "bn": "কুরতুবী এই বারোটি আয়াতের দিকে আবার ফিরে তাকান মুহাম্মাদ ইবন আলী তিরমিযীর কথায়। ইনি আবু ঈসা তিরমিযী নন, যাঁর হাদীসগ্রন্থের কথা সামনে আসবে। তাঁর মতে সূরাটি আর-রহমান নাম দিয়ে শুরু হয়েছে, যাতে বান্দারা জানে, এরপর যা কিছুর বর্ণনা আসছে সবই তাদের কাছে পৌঁছেছে তাঁর রহমত থেকে। তিনি কুরআন শিখিয়েছেন, মানুষ সৃষ্টি করেছেন, সূর্য ও চাঁদকে হিসাবে বেঁধেছেন, তারা ও গাছকে সিজদায় নত করেছেন, আকাশ উঁচু করেছেন, মানদণ্ড রেখেছেন, আর সেই মানদণ্ড হলো ন্যায়। জমিন বিছিয়েছেন সৃষ্টিকুলের জন্য। ৫৫:১ আয়াতের নাম আর ৫৫:৯ আয়াতের দাঁড়িপাল্লা নিয়ে এখানে আলাদা লেখা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ala': Gifts or Power",
          "bn": "আলা: নিয়ামত, না কুদরত"
        },
        "p": [
          {
            "en": "At-Tabari glosses the verse as: which of your Lord's favours, ni'am, from among these favours, O company of jinn and mankind, do you two deny? The reports he brings agree on the word. Al-Hasan says: which favour of your Lord do you deny. Ibn Abbas, in another report, says: which favour of Allah. Qatada says it is spoken to the jinn and mankind: which of Allah's favours. The Muyassar and as-Sa'di widen the scope in two adjectives: favours of religion and favours of this world, ad-diniyya wa-d-dunyawiyya.",
            "bn": "তাবারী আয়াতের অর্থ করেন এভাবে: হে জিন ও মানুষের দল, এই নিয়ামতগুলোর মধ্যে তোমাদের রবের কোন নিয়ামতকে তোমরা দুজন অস্বীকার করবে? তিনি যেসব বর্ণনা আনেন, শব্দটার অর্থে সবাই একমত। হাসান বলেন, তোমাদের রবের কোন নিয়ামত তোমরা অস্বীকার করবে। আরেক বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহর কোন নিয়ামত। কাতাদা বলেন, কথাটা জিন ও মানুষকে বলা হচ্ছে: আল্লাহর কোন কোন নিয়ামত? মুয়াসসার আর সা'দী দুটি বিশেষণে পরিধিটা বাড়িয়ে দেন: দ্বীনের নিয়ামত আর দুনিয়ার নিয়ামত।"
          },
          {
            "en": "Al-Qurtubi states that ala' means favours, an-ni'am, and calls this the saying of all the commentators. He adds that the singular comes in four forms, which an-Nahhas recorded from the dialects of the Arabs. Ma'arif al-Qur'an, writing in English, calls ala' a plural and spreads its meaning across a row of near-synonyms: benefits, benefaction, favour, boon, blessing or bounty. On this gloss the question asks about gifts, each of them received.",
            "bn": "কুরতুবী বলেন, আলা মানে নিয়ামত, আর এটাই সব মুফাসসিরের কথা। তিনি আরও জানান, শব্দটির একবচন চারটি রূপে আসে। নাহহাস আরবদের বিভিন্ন উপভাষা থেকে রূপগুলো লিখে রেখেছেন। মাআরিফুল কুরআনের ইংরেজি পাঠ আলাকে বহুবচন বলে, আর এর অর্থ ছড়িয়ে দেয় কাছাকাছি কয়েকটি শব্দে: উপকার, অনুগ্রহ, দান, বরকত, নিয়ামত। এই অর্থে প্রশ্নটা পাওয়া উপহার নিয়ে, যার প্রতিটি হাতে এসে পৌঁছেছে।"
          },
          {
            "en": "Yet al-Qurtubi then records a second gloss. Ibn Zayd said ala' here is al-qudra, power, so the question runs: which power of your Lord do you two deny? At-Tabari carries Ibn Zayd's words directly: your creation was thus and thus, so which of Allah's power do you deny, O two weighty kinds, jinn and mankind. Al-Qurtubi adds that al-Kalbi said the same, and that Muhammad ibn Ali at-Tirmidhi chose it. Both glosses sit in his text side by side, and the first is the one he calls universal.",
            "bn": "তবু কুরতুবী এরপর দ্বিতীয় একটি ব্যাখ্যাও লেখেন। ইবন যায়দ বলেছেন, এখানে আলা মানে কুদরত, অর্থাৎ ক্ষমতা। তখন প্রশ্ন দাঁড়ায়: তোমাদের রবের কোন কুদরতকে তোমরা দুজন অস্বীকার করবে? তাবারী ইবন যায়দের কথা সরাসরি উদ্ধৃত করেন: তোমাদের সৃষ্টি হয়েছে এভাবে এভাবে, তাহলে হে দুই ভারী জাতি, জিন ও মানুষ, আল্লাহর কোন কুদরতকে তোমরা অস্বীকার করবে? কুরতুবী যোগ করেন, কালবীও একই কথা বলেছেন, আর মুহাম্মাদ ইবন আলী তিরমিযী এটিই বেছে নিয়েছেন। দুটি ব্যাখ্যাই তাঁর লেখায় পাশাপাশি আছে। তবে সবার কথা বলে তিনি প্রথমটিকেই উল্লেখ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Jinn and Mankind Addressed",
          "bn": "সম্বোধন জিন ও মানুষকে"
        },
        "p": [
          {
            "en": "Rabbikuma, your Lord, and tukadhdhiban, you two deny, are both dual. At-Tabari raises the objection himself: how can two be addressed when the surah had named only one, al-insan, man? His answer is that the address turns to man and the jinn, and he points to what follows: 55:14 and 55:15, man created from dry clay like pottery, the jinn from a smokeless flame of fire. Ibn Kathir reads it the same way, O company of the two weighty kinds, mankind and jinn, names Mujahid and others for it, and says the context after it shows this.",
            "bn": "রাব্বিকুমা, তোমাদের দুজনের রব, আর তুকাযযিবান, তোমরা দুজন অস্বীকার করবে, দুটোই দ্বিবচন। তাবারী নিজেই আপত্তিটা তোলেন: সূরার শুরুতে তো একজনেরই নাম এসেছে, আল-ইনসান, মানুষ। তাহলে দুজনকে ডাকা হলো কীভাবে? তাঁর জবাব, সম্বোধন এখানে ফিরে গেছে মানুষ ও জিনের দিকে। প্রমাণ হিসেবে তিনি দেখান পরের কথা: ৫৫:১৪ ও ৫৫:১৫, মানুষের সৃষ্টি পোড়ামাটির মতো শুকনো মাটি থেকে, জিনের সৃষ্টি ধোঁয়াহীন আগুনের শিখা থেকে। ইবন কাসীরও একইভাবে পড়েন: হে দুই ভারী জাতি, মানুষ ও জিন। তিনি এ মতের জন্য মুজাহিদ ও আরও অনেকের নাম নেন, আর বলেন, পরের প্রসঙ্গই এটা দেখিয়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi calls this the saying of the majority, al-jumhur, and gathers its supports. Al-anam in 55:10, the creatures for whom the earth was laid, covers both kinds. The pairing of man's creation with the jinn's shows that what comes before and after concerns them both. The surah later says, we shall attend to you, O two weighty kinds, at 55:31, and calls out, O company of jinn and mankind, at 55:33, the verse Ma'arif al-Qur'an also points to. He also cites the hadith of Jabir, given below.",
            "bn": "কুরতুবী একে বলেন জুমহুর, অর্থাৎ অধিকাংশ আলেমের মত, আর এর পক্ষে প্রমাণ জড়ো করেন। ৫৫:১০ আয়াতের আল-আনাম, যাদের জন্য জমিন বিছানো হয়েছে, দুই জাতিকেই বোঝায়। মানুষ ও জিনের সৃষ্টির কথা পাশাপাশি আসায় বোঝা যায়, আগে-পরে যা বলা হয়েছে তা দুজনের জন্যই। সূরাটি পরে ৫৫:৩১ আয়াতে বলে, হে দুই ভারী জাতি, শিগগিরই আমি তোমাদের হিসাব নিতে মন দেব। আর ৫৫:৩৩ আয়াতে ডাকে, হে জিন ও মানুষের দল। মাআরিফুল কুরআনও এই আয়াতের দিকে ইশারা করে। জাবির (রাঃ)-এর হাদীসও তিনি প্রমাণ হিসেবে আনেন, যা নিচে আসছে।"
          },
          {
            "en": "One question remains: the jinn have not yet been mentioned when the refrain first falls. Al-Qurtubi gives al-Jurjani's answer. The Qur'an can speak of what it has not yet named, as in 38:32, until it was hidden behind the veil. The jinn had been mentioned in parts of the Qur'an revealed earlier, and the Qur'an is like a single surah. Once it is established that the jinn are charged with duties as mankind is, both kinds are addressed by these verses.",
            "bn": "তবু একটা প্রশ্ন থেকে যায়। প্রশ্নটা প্রথমবার যখন আসে, তখনো জিনের কোনো উল্লেখ হয়নি। কুরতুবী এর জবাব দেন জুরজানীর কথায়। কুরআন এমন জিনিসের কথাও বলে যার নাম তখনো আসেনি, যেমন ৩৮:৩২ আয়াতে: শেষে তা পর্দার আড়ালে চলে গেল। তা ছাড়া আগে নাযিল হওয়া কুরআনের অংশে জিনের কথা এসে গেছে, আর পুরো কুরআন যেন একটিই সূরা। জিনরাও মানুষের মতো শরীয়তের দায়িত্বপ্রাপ্ত, এটা যখন প্রতিষ্ঠিত, তখন এই আয়াতগুলোতে দুই জাতিকেই ডাকা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Listener, a Dual Verb",
          "bn": "শ্রোতা একজন, ক্রিয়া দ্বিবচন"
        },
        "p": [
          {
            "en": "At-Tabari records the second reading with the words, it has been said: the dual is used though the account began with one, because the Arabs address a single person with a verb for two, saying khalliyaha ya ghulam, leave her, young man, in the dual. Al-Baghawi records it too and cites 50:24, alqiya fi jahannam, throw into Hell, a dual command. Al-Qurtubi gives the same reading, the address being to mankind in the Arabs' habit, and cites the opening of Imru' al-Qays, qifa nabki, stop, you two, let us weep, as the same usage.",
            "bn": "তাবারী দ্বিতীয় মতটি আনেন 'বলা হয়েছে' কথাটি দিয়ে। এ মতে বর্ণনা একজনকে দিয়ে শুরু হলেও দ্বিবচন এসেছে, কারণ আরবরা একজনকে দুজনের ক্রিয়ায় ডাকে। তারা বলে খাল্লিয়াহা ইয়া গুলাম, ওহে ছেলে, ওকে ছেড়ে দাও, অথচ ক্রিয়াটা দ্বিবচনে। বাগাভীও মতটি উল্লেখ করেন এবং প্রমাণ দেন ৫০:২৪ আয়াত থেকে: আলকিয়া ফী জাহান্নাম, জাহান্নামে নিক্ষেপ করো, যেখানে আদেশটি দ্বিবচনে। কুরতুবীও একই মত আনেন, অর্থাৎ সম্বোধন শুধু মানুষকে, আরবদের রীতি অনুযায়ী। উদাহরণ হিসেবে তিনি ইমরুল কায়সের কবিতার শুরু উদ্ধৃত করেন: কিফা নাবকি, থামো তোমরা দুজন, একটু কাঁদি।"
          },
          {
            "en": "Even on that reading, al-Qurtubi notes, the refrains after the creation of man and jinn are addressed to both. Then he gives his own judgment: the correct view is the majority's, because of 55:10, and the earth He laid out for the creatures. At-Tabari sets the jinn-and-mankind answer first and the other after it, with no further ruling here. Both readings are held by named scholars, and this article leaves them as they stand.",
            "bn": "কুরতুবী মনে করিয়ে দেন, এই মত মানলেও মানুষ ও জিনের সৃষ্টির কথার পরে যত প্রশ্ন এসেছে, সেগুলো দুই জাতিকেই বলা। এরপর তিনি নিজের রায় দেন: ঠিক মত জুমহুরের, কারণ ৫৫:১০ আয়াত বলছে, তিনি জমিন বিছিয়েছেন সৃষ্টিকুলের জন্য। তাবারী জিন ও মানুষের জবাবটি আগে রাখেন, অন্যটি পরে, এখানে আর কোনো ফয়সালা দেন না। দুটি মতই নাম জানা আলেমদের, আর এই লেখা দুটিকে যেমন আছে তেমনই রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How a Favour Is Denied",
          "bn": "নিয়ামত অস্বীকারের ধরন"
        },
        "p": [
          {
            "en": "Tukadhdhiban is from takdhib, to call something false. How is a favour called false? Al-Qurtubi's quotation of Muhammad ibn Ali at-Tirmidhi gives one answer. The two kinds saw what came forth from His power and dominion through the mercy He showed them, and they set up idols beside Him and every object of worship taken in His place, and denied the mercy through which these things had come to them. Their takdhib, he says, was this: they made Him a partner in these things, one who owns with Him and has power with Him.",
            "bn": "তুকাযযিবান এসেছে তাকযীব থেকে, যার মানে কোনো কিছুকে মিথ্যা বলা। নিয়ামতকে মিথ্যা বলা যায় কীভাবে? কুরতুবীর উদ্ধৃতিতে মুহাম্মাদ ইবন আলী তিরমিযী একটি জবাব দেন। দুই জাতি দেখেছে, তাঁর কুদরত ও রাজত্ব থেকে কত কিছু বেরিয়ে এসেছে সেই রহমতের পথে, যা তিনি তাদের দেখিয়েছেন। তবু তারা তাঁর সঙ্গে মূর্তি দাঁড় করিয়েছে, তাঁকে ছেড়ে নানা উপাস্য বানিয়েছে, আর যে রহমতের পথে এসব তাদের কাছে এসেছিল তা অস্বীকার করেছে। তাঁর মতে এটাই তাদের তাকযীব: এসব জিনিসে তারা তাঁর এক শরীক বানিয়েছে, যে তাঁর সঙ্গে মালিক, তাঁর সঙ্গে ক্ষমতাবান।"
          },
          {
            "en": "The other commentators frame it as ingratitude. Al-Baghawi likens the refrain to a man speaking to someone he has treated well, gift after gift, while the other denies the gifts and is ungrateful for them, yunkiruha wa-yakfuruha. Ibn Kathir describes listeners who cannot deny at all: the favours are plain upon you and you are immersed in them, unable to disown or reject them. As-Sa'di says Allah made them acknowledge His favours by asking, qarrarahum. On these readings the question is less an accusation than a call for an admission already due.",
            "bn": "অন্য মুফাসসিররা বিষয়টা দেখেন অকৃতজ্ঞতা হিসেবে। বাগাভী প্রশ্নটাকে তুলনা করেন এমন এক মানুষের কথার সঙ্গে, যে আরেকজনের প্রতি একের পর এক অনুগ্রহ করেছে, আর সে লোক সেই অনুগ্রহ অস্বীকার করে, তার নাশোকরি করে। ইবন কাসীরের বর্ণনায় শ্রোতা অস্বীকার করতেই পারে না: নিয়ামত তোমাদের উপর স্পষ্ট, তোমরা তাতে ডুবে আছ, তা না মানার বা উড়িয়ে দেওয়ার সাধ্য তোমাদের নেই। সা'দী বলেন, প্রশ্ন করে আল্লাহ তাদের দিয়ে নিয়ামতগুলো স্বীকার করিয়ে নিয়েছেন। এই পাঠে প্রশ্নটা অভিযোগের চেয়ে বেশি এক পাওনা স্বীকারোক্তির ডাক।"
          },
          {
            "en": "One thing should be said plainly. The verse questions the two kinds it addresses, and the commentators describe a denial that consists in giving Allah partners. It describes what the text describes and licenses nothing against any living person or community. It is not a label for a neighbour, and no reader is appointed to rule on another's gratitude. By the surah's own form, the question is turned on each listener, one refrain at a time.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। আয়াতটি যে দুই জাতিকে ডাকছে তাদেরকেই প্রশ্ন করছে, আর মুফাসসিররা যে অস্বীকারের কথা বলেন তা হলো আল্লাহর শরীক বানানো। আয়াত যা বর্ণনা করে কেবল তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটি দেয় না। প্রতিবেশীর গায়ে লাগানোর তকমা এটা নয়, আর কারও কৃতজ্ঞতার বিচার করার দায়িত্ব কোনো পাঠককে দেওয়া হয়নি। সূরার গড়নই প্রশ্নটাকে ঘুরিয়ে দেয় প্রত্যেক শ্রোতার দিকে, এক এক করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Again After Each Gift",
          "bn": "প্রতিটি দানের পর আবার প্রশ্ন"
        },
        "p": [
          {
            "en": "Why ask it thirty-one times? Al-Baghawi says the verse is repeated to establish the favour and press the reminder home, in the Arabs' way of saying a thing fully: He counts His favours to creation and between every two favours places what alerts them to it. Then comes his analogy, which al-Qurtubi also gives from al-Qutabi: were you not poor, and I made you rich; do you deny this? Were you not unclothed, and I clothed you; do you deny this? Such repetition, al-Baghawi says, is common in Arabic and good for establishing a point.",
            "bn": "প্রশ্নটা একত্রিশবার কেন? বাগাভী বলেন, নিয়ামতকে প্রতিষ্ঠিত করতে আর স্মরণটা জোরালো করতে আয়াতটি বারবার এসেছে। কথা পুরোপুরি পৌঁছে দেওয়ার এটাই ছিল আরবদের রীতি। আল্লাহ সৃষ্টির সামনে নিজের নিয়ামত গুনে দেখান, আর প্রতি দুটি নিয়ামতের মাঝে এমন কথা রাখেন যা তাদের সজাগ করে। তারপর তাঁর উপমা, যা কুরতুবীও কুতাবী থেকে আনেন: তুমি কি গরিব ছিলে না, আমি তোমাকে ধনী করিনি? এটা কি অস্বীকার করবে? তুমি কি বস্ত্রহীন ছিলে না, আমি তোমাকে কাপড় দিইনি? এটা কি অস্বীকার করবে? বাগাভী বলেন, আরবি ভাষায় এমন পুনরাবৃত্তি প্রচলিত, আর কথা পোক্ত করতে তা সুন্দর।"
          },
          {
            "en": "Al-Qurtubi adds lines of Arabic verse built on the same device, one of them: how many favours you had, how many, how many, and how many. He records two further explanations. Al-Husayn ibn al-Fadl said the repetition is to drive away heedlessness and to confirm the proof. Muhammad ibn Ali at-Tirmidhi said that in every creation after a creation there is a power after a power, so the repetition is for emphasis and for establishing the proof against them, stopping them at one created thing after another.",
            "bn": "কুরতুবী একই কৌশলে গাঁথা কয়েকটি আরবি কবিতার পঙক্তিও আনেন। একটিতে আছে: কত নিয়ামত ছিল তোমাদের, কত, কত, আর কত! তিনি আরও দুটি ব্যাখ্যা লেখেন। হুসাইন ইবনুল ফাদল বলেছেন, পুনরাবৃত্তি গাফলতি তাড়াতে আর প্রমাণ পাকা করতে। মুহাম্মাদ ইবন আলী তিরমিযী বলেছেন, প্রতিটি সৃষ্টির পর আরেক সৃষ্টিতে আছে কুদরতের পর আরেক কুদরত। তাই পুনরাবৃত্তি জোর দেওয়ার জন্য, তাদের উপর প্রমাণ কায়েম করার জন্য। একেকটি সৃষ্টির সামনে তাদের দাঁড় করিয়ে দেওয়া হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Jinn Replied",
          "bn": "যখন জিনেরা জবাব দিল"
        },
        "p": [
          {
            "en": "Al-Qurtubi supports the majority reading with the hadith of Jabir, which he says at-Tirmidhi recorded, and al-Baghawi gives it in his own wording. In Jami' at-Tirmidhi (3291), Jabir (RA) said: The Messenger of Allah ﷺ came out to his Companions and recited Surah ar-Rahman to them from its beginning to its end, and they were silent. He said: I recited it to the jinn on the Night of the Jinn, and they responded better than you. Whenever I came to His saying, then which of the favours of your Lord will you two deny, they said: Not any of Your favours, our Lord, do we deny; Yours is the praise.",
            "bn": "কুরতুবী জুমহুরের মতের পক্ষে জাবির (রাঃ)-এর হাদীস আনেন এবং বলেন, তিরমিযী এটি বর্ণনা করেছেন। বাগাভীও নিজের শব্দে হাদীসটি আনেন। জামি তিরমিযীতে (৩২৯১) জাবির (রাঃ) বলেন: রাসূলুল্লাহ ﷺ সাহাবীদের কাছে বেরিয়ে এলেন এবং তাদের সামনে সূরা আর-রহমান শুরু থেকে শেষ পর্যন্ত তিলাওয়াত করলেন। তাঁরা চুপ করে রইলেন। তিনি বললেন, আমি জিনের রাতে জিনদের সামনে এটি তিলাওয়াত করেছিলাম, তারা তোমাদের চেয়ে ভালো জবাব দিয়েছিল। যখনই আমি তাঁর এই বাণীতে পৌঁছাতাম, অতএব তোমরা দুজন তোমাদের রবের কোন নিয়ামতকে অস্বীকার করবে, তারা বলত: হে আমাদের রব, তোমার কোনো নিয়ামতকেই আমরা অস্বীকার করি না, সব প্রশংসা তোমারই।"
          },
          {
            "en": "At-Tirmidhi's own verdict follows the report: a gharib hadith, which he knows only through al-Walid ibn Muslim from Zuhayr ibn Muhammad. He adds Ahmad ibn Hanbal's remark that the Zuhayr reported from in Syria seems not to be the Zuhayr reported from in Iraq, because of the munkar reports carried from him, and al-Bukhari's remark that the people of Syria report munkar narrations from Zuhayr while the people of Iraq report from him narrations near to sound. The grading stays his: gharib, with those remarks attached.",
            "bn": "বর্ণনার পরেই তিরমিযী নিজের মত দেন: হাদীসটি গরীব। আল-ওয়ালীদ ইবন মুসলিম যুহাইর ইবন মুহাম্মাদ থেকে যে সূত্রে বর্ণনা করেছেন, সেটি ছাড়া অন্য কোনো সূত্রে তিনি এটি জানেন না। তিনি আহমাদ ইবন হাম্বলের মন্তব্যও যোগ করেন। আহমাদের মতে শামে যে যুহাইর থেকে বর্ণনা হয়েছে, তিনি সম্ভবত ইরাকের যুহাইর নন, কারণ তাঁর নামে মুনকার বর্ণনা চলে। বুখারীর মন্তব্যও আছে: শামের লোকেরা যুহাইর থেকে মুনকার বর্ণনা করে, আর ইরাকের লোকেরা তাঁর থেকে মোটামুটি গ্রহণযোগ্য বর্ণনা করে। মান নির্ধারণ তিরমিযীরই: গরীব, সঙ্গে এই মন্তব্যগুলো।"
          },
          {
            "en": "At-Tabari gives, with its chain and no grading, a report from Ibn Umar in which the Prophet ﷺ asks why he hears the jinn answering their Lord better than his listeners. Ibn Abbas, in reports at-Tabari carries through Mujahid and in Ibn Kathir's text, would say on reading the verse: la bi-ayyiha, not any of them, O Lord. Ibn Kathir says: we say as the believing jinn said.",
            "bn": "তাবারী সনদসহ, কোনো মান নির্ধারণ ছাড়া, ইবন উমর (রাঃ)-এর একটি বর্ণনা আনেন। তাতে নবী ﷺ জানতে চান, কেন তিনি শুনছেন জিনেরা তাদের রবকে শ্রোতাদের চেয়ে ভালো জবাব দিচ্ছে। তাবারী মুজাহিদের সূত্রে জানান, ইবন কাসীরও উল্লেখ করেন, ইবন আব্বাস (রাঃ) আয়াতটি পড়লে বলতেন: লা বিআইয়িহা, হে রব, কোনোটিকেই না। ইবন কাসীর বলেন, ঈমানদার জিনেরা যা বলেছিল, আমরাও তা-ই বলি।"
          }
        ]
      },
      {
        "h": {
          "en": "From Clay to the Two Gardens",
          "bn": "মাটির মানুষ থেকে দুই বাগান"
        },
        "p": [
          {
            "en": "The verses that follow turn at once to the two addressed. 55:14 and 55:15 tell of man made from dry clay like pottery and the jinn from a smokeless flame, and 55:16 asks the same question again. It will follow the two seas that meet at 55:19, and the passing of everyone on the earth while the Face of your Lord remains, at 55:26 and 55:27. It will follow the two gardens promised to whoever fears standing before his Lord at 55:46, and the reward of excellence at 55:60.",
            "bn": "এই আয়াতের পরেই কথা ফিরে যায় সেই দুই শ্রোতার দিকে। ৫৫:১৪ ও ৫৫:১৫ আয়াত জানায়, মানুষকে বানানো হয়েছে পোড়ামাটির মতো শুকনো মাটি থেকে, আর জিনকে ধোঁয়াহীন আগুনের শিখা থেকে। তারপর ৫৫:১৬ আয়াতে সেই প্রশ্ন আবার। প্রশ্নটা আসবে ৫৫:১৯ আয়াতে মিলিত দুই সাগরের পর, আর ৫৫:২৬ ও ৫৫:২৭ আয়াতের পর, যেখানে জমিনের সবকিছু ধ্বংস হয় আর থেকে যায় আপনার রবের চেহারা। আসবে ৫৫:৪৬ আয়াতের পর, যেখানে রবের সামনে দাঁড়ানোর ভয় যার আছে তার জন্য দুটি বাগানের ওয়াদা, আর ৫৫:৬০ আয়াতে ইহসানের প্রতিদানের পর।"
          },
          {
            "en": "The Muyassar and as-Sa'di close on what the servant should do. As-Sa'di says: this is what befits the servant when Allah's favours and gifts are recited to him, that he acknowledge them, give thanks, and praise Allah for them. The jinn's reply gives the words for it. Ibn Abbas's short form, not any of them, O Lord, gives a version that fits between refrains while the recitation runs on. Each refrain leaves a gift to name and a question to answer.",
            "bn": "মুয়াসসার ও সা'দী শেষ করেন বান্দার করণীয় দিয়ে। সা'দী বলেন, বান্দার সামনে যখন আল্লাহর নিয়ামত ও দানের কথা পড়া হয়, তখন তার উচিত সেগুলো স্বীকার করা, শোকর করা, আর এর জন্য আল্লাহর প্রশংসা করা। কী বলতে হবে, জিনদের জবাবে তা পাওয়া যায়। ইবন আব্বাস (রাঃ)-এর ছোট্ট কথাটি, হে রব, কোনোটিকেই না, তিলাওয়াত চলার মাঝেই দুই প্রশ্নের ফাঁকে বলা যায়। প্রতিটি প্রশ্ন রেখে যায় নাম ধরে বলার মতো একটি দান, আর জবাব দেওয়ার মতো একটি প্রশ্ন।"
          }
        ]
      }
    ]
  },
  "55:19": {
    "sections": [
      {
        "h": {
          "en": "From Horizons to Waters",
          "bn": "দিগন্ত থেকে পানির দিকে"
        },
        "p": [
          {
            "en": "In this stretch of Surah ar-Rahman the duals gather. Verse 55:17 named Allah Lord of the two places of sunrise and the two places of sunset, and the refrain followed in 55:18, asking the jinn and mankind together which of their Lord's favours they deny. Then comes 55:19, three Arabic words: maraja l-bahrayni yaltaqiyan, He let loose the two seas, meeting. At-Tabari reads it straight on from what precedes it: the Lord of the two easts and the Lord of the two wests released the two seas, which meet.",
            "bn": "সূরা আর-রহমানের এই অংশে দ্বিবচন একের পর এক আসছে। ৫৫:১৭ আয়াত আল্লাহকে বলেছে দুই উদয়স্থল ও দুই অস্তস্থলের রব। তারপর ৫৫:১৮ আয়াতে সেই পরিচিত প্রশ্ন জিন ও মানুষকে একসঙ্গে ডেকে জানতে চায়, তোমাদের রবের কোন নিয়ামত তোমরা অস্বীকার করবে? এরপর আসে ৫৫:১৯, আরবিতে মাত্র তিনটি শব্দ: মারাজাল বাহরাইনি ইয়ালতাকিয়ান। তিনি দুই সাগরকে ছেড়ে দিয়েছেন, তারা মিলিত হয়। তাবারী আয়াতটিকে আগের আয়াতের সঙ্গে জুড়ে পড়েন। তাঁর ভাষায়, দুই পূর্ব ও দুই পশ্চিমের রবই দুই সাগরকে ছেড়ে দিয়েছেন, আর তারা মিলিত হয়।"
          },
          {
            "en": "The verse is short, and it does not stand alone. The very next verse, 55:20, speaks of a barrier between the two seas, and after another refrain, 55:22 tells of pearl and coral coming out of them both. Those are separate verses with their own weight, and this article leaves them for their own place, touching them only where the commentators on 55:19 reach for them. The subject here is narrower: the letting loose, the identity of the two seas, and their meeting.",
            "bn": "আয়াতটি ছোট, তবে একা দাঁড়িয়ে নেই। ঠিক পরের আয়াত ৫৫:২০ দুই সাগরের মাঝখানের আড়ালের কথা বলে। আরেকবার সেই প্রশ্নের পর ৫৫:২২ আয়াত জানায়, দুটো থেকেই মুক্তা ও প্রবাল বের হয়। ওগুলো আলাদা আয়াত, ওজনও আলাদা। এই লেখা সেগুলোকে তাদের নিজের জায়গার জন্য রেখে দিচ্ছে। ৫৫:১৯-এর তাফসীরে মুফাসসিররা যেখানে সেগুলোর দিকে হাত বাড়িয়েছেন, শুধু সেখানেই ছুঁয়ে যাবে। এখানে আলোচনা আরও সরু: ছেড়ে দেওয়া, দুই সাগর আসলে কোনগুলো, আর তাদের মিলন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb from the Pasture",
          "bn": "চারণভূমির শব্দ মারাজা"
        },
        "p": [
          {
            "en": "Maraja is the verb that carries the verse. At-Tabari glosses it as arsala wa-khalla: He sent forth and left free. He takes it from the Arab saying maraja fulanun dabbatahu, said when a man has turned his riding animal loose and left it to itself. He adds that the people of interpretation said the same, and cites Ibn 'Abbas (RA) glossing maraja l-bahrayni with a single word, arsala, He sent forth. Ibn Kathir reports the same gloss from Ibn 'Abbas: He sent them forth.",
            "bn": "আয়াতের ভার বহন করছে মারাজা ক্রিয়াটি। তাবারী এর অর্থ করেন আরসালা ওয়া খাল্লা: পাঠিয়ে দিলেন, মুক্ত ছেড়ে দিলেন। শব্দটা তিনি নেন আরবদের এক কথা থেকে, মারাজা ফুলানুন দাব্বাতাহু। কেউ নিজের বাহনের পশুকে খুলে দিয়ে আপন মনে চরতে ছেড়ে দিলে এভাবে বলা হতো। তিনি জানান, তাফসীরের আলেমরাও একই কথা বলেছেন। তারপর ইবন আব্বাস (রাঃ)-এর বক্তব্য আনেন, যিনি মারাজাল বাহরাইনের ব্যাখ্যা দিয়েছেন একটিমাত্র শব্দে: আরসালা, পাঠিয়ে দিলেন। ইবন কাসীরও ইবন আব্বাস (রাঃ) থেকে একই ব্যাখ্যা উদ্ধৃত করেন: তিনি দুটোকে ছেড়ে দিলেন।"
          },
          {
            "en": "Al-Qurtubi gathers more. Maraja, he says, means khalla, arsala and ahmala: left free, sent forth, left untended. People say maraja s-sultanu n-nasa when a ruler has left people to themselves, and the root's first sense is ihmal, leaving alone, as a beast is left to roam in the marj, the pasture. He then gives a second sense: it is said that maraja means khalata, to mix. And he records from al-Akhfash that some people say amraja l-bahrayni, the af'ala form carrying the same meaning as fa'ala.",
            "bn": "কুরতুবী আরও কিছু জড়ো করেন। তাঁর মতে মারাজা মানে খাল্লা, আরসালা ও আহমালা: মুক্ত ছেড়ে দেওয়া, পাঠিয়ে দেওয়া, দেখভাল ছাড়া রেখে দেওয়া। শাসক যখন লোকদের নিজেদের হালে ছেড়ে দেয়, তখন বলা হয় মারাজাস সুলতানুন নাস। তিনি বলেন, এই ধাতুর মূল অর্থ ইহমাল, অর্থাৎ আপন অবস্থায় ছেড়ে রাখা। যেমন পশুকে মারজ বা চারণভূমিতে ঘুরে বেড়াতে ছেড়ে দেওয়া হয়। এরপর তিনি দ্বিতীয় অর্থ আনেন: বলা হয়, মারাজা মানে খালাতা, মিশিয়ে দেওয়া। আখফাশ থেকে তিনি আরও জানান, কেউ কেউ বলে আমরাজাল বাহরাইন। আফআলা রূপটির অর্থ এখানে ফাআলার মতোই।"
          },
          {
            "en": "The later works keep both senses in view. Al-Baghawi says He sent the fresh and the salt forth and left them free. The Muyassar takes the mixing sense: Allah mixed the water of the two seas, fresh and salt, so that they meet. Ma'arif al-Qur'an says that literally the verb means to let loose. So the word holds a picture and a result side by side: waters released from any pen that held them, and waters that, once released, come together. The sources give both, and the reader may hear both.",
            "bn": "পরের যুগের তাফসীরগুলোতেও দুটো অর্থই চোখে পড়ে। বাগাভী বলেন, তিনি মিঠা আর লোনা পানিকে পাঠিয়ে দিয়েছেন, মুক্ত ছেড়ে দিয়েছেন। মুয়াসসার নেয় মেশানোর অর্থটি: আল্লাহ দুই সাগরের পানি, মিঠা ও লোনা, মিশিয়ে দিয়েছেন, ফলে তারা একে অপরের সঙ্গে মেলে। মাআরিফুল কুরআন বলে, ক্রিয়াটির আক্ষরিক অর্থ ছেড়ে দেওয়া। তাই শব্দটায় পাশাপাশি আছে একটা ছবি আর তার ফল। এক দিকে পানি, যাকে আটকে রাখার কোনো খোঁয়াড় নেই। অন্য দিকে সেই পানি, যা ছাড়া পেয়ে এসে মেলে। সূত্রগুলো দুটোই দিয়েছে, পাঠকও দুটোই শুনতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Yaltaqiyan: The Pair That Meets",
          "bn": "ইয়ালতাকিয়ান: জোড়ার মিলন"
        },
        "p": [
          {
            "en": "Yaltaqiyan is a present-tense verb in the dual: the two of them meet. As-Sa'di describes the meeting as he understands it: the two both meet, the fresh pours into the salt, and they mix and blend. The Muyassar pictures them meeting with no divide between them that the eye can see. For both, the meeting belongs to the world the surah addresses. The Muyassar then turns at once to the barrier of the next verse, which this article leaves to 55:20 and to its own discussion there.",
            "bn": "ইয়ালতাকিয়ান বর্তমান কালের ক্রিয়া, দ্বিবচনে: তারা দুজন মিলিত হয়। সা'দী মিলনটা বোঝান নিজের বোঝা অনুযায়ী। তাঁর ভাষায়, দুটোই এসে মেলে, মিঠা পানি গিয়ে পড়ে লোনা সাগরে, আর দুটো মিশে একাকার হয়। মুয়াসসারের ছবিতে তারা এমনভাবে মেলে যে চোখে দেখা যায় এমন কোনো ভাগ তাদের মাঝে নেই। দুজনের কাছেই এ মিলন সেই জগতের ঘটনা, যাকে সূরাটি সম্বোধন করছে। এরপর মুয়াসসার সঙ্গে সঙ্গে পরের আয়াতের আড়ালের দিকে চলে যায়। সে আলোচনা এই লেখা ছেড়ে রাখছে ৫৫:২০ আয়াতের জন্য।"
          },
          {
            "en": "Others tie the meeting to their answer about which seas are meant. Al-Qurtubi, setting out the view that they are a sea of the sky and a sea of the earth, says they meet every year; at-Tabari carries a report from Ibn 'Abbas with the same picture, a sea in the sky and the earth that meet every year. Al-Qurtubi adds, under it is said, that their two ends meet. Ibn Kathir, commenting on yaltaqiyan itself, quotes Ibn Zayd reaching ahead to the next verse: He kept them from meeting by the dividing barrier He placed between them.",
            "bn": "কেউ কেউ মিলনের অর্থ বেঁধে দিয়েছেন কোন দুই সাগর, সেই প্রশ্নের উত্তরের সঙ্গে। কুরতুবী যেখানে মত আনেন যে এরা আকাশের এক সাগর আর পৃথিবীর এক সাগর, সেখানে বলেন, তারা প্রতি বছর মিলিত হয়। তাবারীও ইবন আব্বাস (রাঃ) থেকে একই ছবির একটি বর্ণনা আনেন: আকাশে ও পৃথিবীতে একটি সাগর, যারা প্রতি বছর মেলে। কুরতুবী 'বলা হয়' কথাটি জুড়ে আরও আনেন যে তাদের দুই প্রান্ত মিলিত হয়। ইবন কাসীর ইয়ালতাকিয়ান শব্দের ব্যাখ্যায় ইবন যায়দের কথা আনেন, যা পরের আয়াতের দিকে এগিয়ে যায়: তিনি দুটোর মাঝে যে বিভাজক আড়াল রেখেছেন, তা দিয়েই তাদের মিলিত হতে দেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Two Seas Are Meant",
          "bn": "কোন দুই সাগরের কথা"
        },
        "p": [
          {
            "en": "At-Tabari states plainly that the people of knowledge differed over which two seas Allah meant in this verse. One group said a sea in the sky and a sea on the earth. He gives it from Ibn Abza and from Sa'id, and a report from Ibn 'Abbas (RA). Al-Qurtubi gives the same view from Ibn 'Abbas and says Mujahid and Sa'id ibn Jubayr held it. Ibn Kathir lists it as narrated from Mujahid, Sa'id ibn Jubayr, 'Atiyya and Ibn Abza.",
            "bn": "তাবারী সোজাসুজি বলেন, এই আয়াতে আল্লাহ কোন দুই সাগরের কথা বলেছেন, তা নিয়ে আলেমদের মধ্যে মতভেদ হয়েছে। একটি দল বলেছে, আকাশে একটি সাগর আর পৃথিবীতে একটি সাগর। এ মত তিনি আনেন ইবন আবযা ও সাঈদ থেকে, সঙ্গে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা। কুরতুবীও এ মত ইবন আব্বাস (রাঃ) থেকে আনেন, আর বলেন মুজাহিদ ও সাঈদ ইবন জুবাইরেরও এই মত। ইবন কাসীরের তালিকায় মতটি বর্ণিত হয়েছে মুজাহিদ, সাঈদ ইবন জুবাইর, আতিয়্যা ও ইবন আবযা থেকে।"
          },
          {
            "en": "A second group named two seas of the known world. At-Tabari cites al-Hasan: the sea of the Romans, and the sea of Persia and Yemen. He cites Qatada by two chains: the two seas are the sea of Persia and the sea of the Romans. Al-Qurtubi gives this view from al-Hasan and Qatada together. These are the only named seas that the commentaries consulted for this verse give, and this article adds no others, nor does it try to match them to any modern map.",
            "bn": "দ্বিতীয় একটি দল চেনা দুনিয়ার দুটি সাগরের নাম নিয়েছে। তাবারী আল-হাসানের কথা আনেন: রোমের সাগর, আর পারস্য ও ইয়েমেনের সাগর। কাতাদার কথা তিনি আনেন দুই সনদে: দুই সাগর হলো পারস্যের সাগর ও রোমের সাগর। কুরতুবী এ মত আল-হাসান ও কাতাদা দুজনের নামেই আনেন। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তাতে নাম ধরে বলা সাগর শুধু এগুলোই। এই লেখা এর বাইরে কোনো নাম যোগ করছে না, আধুনিক কোনো মানচিত্রের সঙ্গে মেলানোর চেষ্টাও করছে না।"
          },
          {
            "en": "A third answer, taken by most of the commentaries consulted here, is the fresh water and the salt. Al-Qurtubi gives it from Ibn Jurayj: the salt sea and the fresh rivers. Ibn Kathir states it as the meaning: the salt and the sweet, the sweet being these rivers that run among people. Al-Baghawi, as-Sa'di, the Muyassar and Ma'arif al-Qur'an all read it so. Al-Qurtubi then records two further views under it is said: the sea of the east and the sea of the west, whose ends meet, and the sea of pearl and coral.",
            "bn": "তৃতীয় উত্তরটি এখানে দেখা বেশির ভাগ তাফসীরের: মিঠা পানি আর লোনা পানি। কুরতুবী এটি আনেন ইবন জুরাইজ থেকে: লোনা সাগর আর মিঠা পানির নদীগুলো। ইবন কাসীর এটিকেই আয়াতের উদ্দেশ্য বলে জানান: লোনা আর মিঠা, আর মিঠা মানে মানুষের মাঝে বয়ে চলা এই নদীগুলো। বাগাভী, সা'দী, মুয়াসসার ও মাআরিফুল কুরআন সবাই এভাবেই পড়েছেন। এরপর কুরতুবী 'বলা হয়' বলে আরও দুটি মত লিখে রাখেন। একটি হলো পূর্বের সাগর আর পশ্চিমের সাগর, যাদের প্রান্ত গিয়ে মেলে। অন্যটি মুক্তা ও প্রবালের সাগর।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Argues, Ibn Kathir Demurs",
          "bn": "তাবারীর যুক্তি, ইবন কাসীরের আপত্তি"
        },
        "p": [
          {
            "en": "At-Tabari does not leave the question open for himself. The most correct of the views in his judgement is that the sea of the sky and the sea of the earth are meant. His reason comes from 55:22, which says that pearl and coral come out of them both. Pearl and coral, he says, come out only from the shells of the earth's sea, from the drops of the sky's water, so it is known that the two are the earth's sea and the sky's. That is his reasoning as he gives it; this article reports it and makes no claim of its own about how pearls form.",
            "bn": "তাবারী নিজের জন্য প্রশ্নটা খোলা রাখেন না। তাঁর বিচারে সবচেয়ে সঠিক মত হলো, এখানে আকাশের সাগর আর পৃথিবীর সাগর উদ্দেশ্য। যুক্তিটা তিনি নেন ৫৫:২২ আয়াত থেকে, যেখানে বলা হয়েছে, দুটো থেকেই মুক্তা ও প্রবাল বের হয়। তাঁর কথায়, মুক্তা ও প্রবাল বের হয় কেবল পৃথিবীর সাগরের ঝিনুক থেকে, আকাশের পানির ফোঁটা থেকে। তাই বোঝা যায়, দুই সাগর হলো পৃথিবীর সাগর আর আকাশের সাগর। এটি তাঁর নিজের দেওয়া যুক্তি। এই লেখা শুধু তা উদ্ধৃত করছে, মুক্তা কীভাবে তৈরি হয় সে বিষয়ে নিজে কোনো দাবি করছে না।"
          },
          {
            "en": "Ibn Kathir knew this choice and did not follow it. He reports that Ibn Jarir, that is at-Tabari, chose the sky and the earth here, that the view is narrated from Mujahid, Sa'id ibn Jubayr, 'Atiyya and Ibn Abza, and he repeats Ibn Jarir's reason about the pearl. Then he answers: even if that is so, it is not what is meant, for the wording does not support it. His own reading is the salt and the sweet, and he notes that he discussed the matter under 25:53 in Surat al-Furqan.",
            "bn": "ইবন কাসীর এই বাছাইয়ের কথা জানতেন, তবু তা মানেননি। তিনি জানান, ইবন জারীর, অর্থাৎ তাবারী, এখানে আকাশ ও পৃথিবীর মতটি বেছে নিয়েছেন। মতটি বর্ণিত হয়েছে মুজাহিদ, সাঈদ ইবন জুবাইর, আতিয়্যা ও ইবন আবযা থেকে। মুক্তা নিয়ে ইবন জারীরের যুক্তিও তিনি তুলে ধরেন। তারপর জবাব দেন: ব্যাপারটা তেমন হলেও আয়াতের উদ্দেশ্য সেটা নয়, কারণ শব্দ এ অর্থকে সমর্থন করে না। তাঁর নিজের পাঠ লোনা আর মিঠা পানি। তিনি এটাও জানান, সূরা আল-ফুরকানের ২৫:৫৩ আয়াতের আলোচনায় বিষয়টি তিনি আগেই বলেছেন।"
          },
          {
            "en": "Both men are reading the same three words with care, and they reach different answers. At-Tabari reasons from the verse's surroundings, from what the surah says next; Ibn Kathir reasons from what the wording of this verse will bear. This article does not settle between them. A reader may hold the sky-and-earth reading with at-Tabari, the fresh-and-salt reading with Ibn Kathir and the later works, or keep the list as at-Tabari himself first set it out: a difference among people of knowledge.",
            "bn": "দুজনেই একই তিনটি শব্দ যত্ন নিয়ে পড়ছেন, অথচ পৌঁছেছেন ভিন্ন উত্তরে। তাবারী যুক্তি টানেন আয়াতের আশপাশ থেকে, সূরা পরে কী বলছে তা থেকে। ইবন কাসীর যুক্তি টানেন এই আয়াতের শব্দ কতটুকু বহন করতে পারে তা থেকে। এই লেখা দুজনের মাঝে রায় দিচ্ছে না। পাঠক চাইলে তাবারীর সঙ্গে আকাশ ও পৃথিবীর পাঠ রাখতে পারেন। চাইলে ইবন কাসীর ও পরের তাফসীরগুলোর সঙ্গে মিঠা ও লোনা পানির পাঠ রাখতে পারেন। অথবা তালিকাটা সেভাবেই রাখতে পারেন, যেভাবে তাবারী নিজে প্রথমে সাজিয়েছিলেন: আলেমদের মধ্যে এক মতভেদ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Bring Alongside",
          "bn": "তাফসীরকারেরা পাশে যা আনেন"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith of the Prophet ﷺ to it, so no hadith is quoted here. What they bring instead are the explanations of early authorities: Ibn 'Abbas (RA), Mujahid, Sa'id ibn Jubayr, al-Hasan, Qatada, Ibn Jurayj, Ibn Zayd and others. Those have been given above, each under its own name, as reports of how these men read the verse, and none of them is presented as a saying of the Prophet ﷺ.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিতেই নবী ﷺ-এর কোনো হাদিস এ আয়াতের সঙ্গে যুক্ত করা হয়নি। তাই এখানে কোনো হাদিস উদ্ধৃত হচ্ছে না। তাঁরা বরং এনেছেন প্রথম যুগের আলেমদের ব্যাখ্যা: ইবন আব্বাস (রাঃ), মুজাহিদ, সাঈদ ইবন জুবাইর, আল-হাসান, কাতাদা, ইবন জুরাইজ, ইবন যায়দ প্রমুখ। এসব ব্যাখ্যা উপরে প্রত্যেকের নিজের নামেই এসেছে। সেগুলো এই মানুষেরা আয়াতটি কীভাবে পড়েছেন তার বর্ণনা, নবী ﷺ-এর বাণী হিসেবে কোনোটিকেই পেশ করা হয়নি।"
          },
          {
            "en": "Ibn Kathir sends the reader to 25:53, where the same verb opens a fuller description: it is He who let loose the two seas, one palatable and sweet, the other salt and bitter, and set between them a barrier and a complete partition. Within ar-Rahman itself, 55:20 names the barrier and 55:22 the pearl and coral on which at-Tabari's argument rests. The commentaries consulted for 55:19 cite no other verse on the two seas, so none is added here.",
            "bn": "ইবন কাসীর পাঠককে পাঠান ২৫:৫৩ আয়াতে। সেখানে একই ক্রিয়া দিয়ে শুরু হয় আরও খোলামেলা বর্ণনা: তিনিই দুই সাগরকে ছেড়ে দিয়েছেন, একটি সুস্বাদু মিঠা, অন্যটি লোনা ও তেতো, আর দুটোর মাঝে রেখেছেন এক আড়াল ও অলঙ্ঘ্য প্রাচীর। আর-রহমান সূরার ভেতরেই ৫৫:২০ আয়াত আড়ালের কথা বলে, আর ৫৫:২২ আয়াত বলে মুক্তা ও প্রবালের কথা, যার উপর তাবারীর যুক্তি দাঁড়িয়ে। ৫৫:১৯-এর জন্য দেখা তাফসীরগুলো দুই সাগর নিয়ে আর কোনো আয়াত আনেনি, তাই এখানে আর কিছু যোগ করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks That Need Not Wait",
          "bn": "যে শুকরিয়া অপেক্ষা করে না"
        },
        "p": [
          {
            "en": "After this verse and the next, the refrain returns in 55:21: which, then, of your Lord's favours will you deny? The commentators differ on which seas are meant, yet whichever reading is taken, the verse still stands in the surah's line of favours, with the refrain after it. That suggests an order for the reader: first receive the favour the verse names, then weigh the details. Someone who postpones thanks until every scholarly question is settled has turned a difference among scholars into a reason for silence, and the verse gives no such reason.",
            "bn": "এই আয়াত আর পরের আয়াতের পর ৫৫:২১ আয়াতে আবার সেই প্রশ্ন ফিরে আসে: তোমাদের রবের কোন নিয়ামত তোমরা অস্বীকার করবে? কোন সাগরের কথা, তা নিয়ে মুফাসসিরদের মতভেদ আছে। তবু যে পাঠই নেওয়া হোক, আয়াতটি সূরার নিয়ামতের সারিতেই দাঁড়িয়ে থাকে, আর তার পরেই আসে সেই প্রশ্ন। পাঠকের জন্য এতে একটা ক্রম পাওয়া যায়। আগে আয়াতের দেখানো নিয়ামতটা গ্রহণ করুন, তারপর খুঁটিনাটি নিয়ে ভাবুন। যে লোক আলেমদের সব প্রশ্নের মীমাংসা না হওয়া পর্যন্ত শুকরিয়া পিছিয়ে রাখে, সে আলেমদের মতভেদকে চুপ থাকার অজুহাত বানিয়ে ফেলেছে। আয়াত এমন কোনো অজুহাত দেয় না।"
          },
          {
            "en": "Water enters a day many times: at wudu before prayer, in a glass at the table, in rain on the way to work, in a river crossed on a journey. The verse invites a believer to notice, at one of those moments, that waters are let loose by Allah and brought together by Him, and to say al-hamdu lillah with that in mind. It is a small habit, but the surah itself works by small repetitions, asking its question again after each favour it names.",
            "bn": "দিনে বহুবার পানি আমাদের সামনে আসে। নামাজের আগে অজুতে, খাবারের সময় গ্লাসে, কাজে যাওয়ার পথে বৃষ্টিতে, সফরে পার হওয়া নদীতে। আয়াতটি মুমিনকে ডাকে, এমন কোনো এক মুহূর্তে খেয়াল করতে যে পানিকে আল্লাহই ছেড়ে দেন, আর তিনিই মিলিয়ে দেন। সেটা মনে রেখে আলহামদুলিল্লাহ বলতে। অভ্যাসটা ছোট। কিন্তু সূরাটি নিজেও চলে ছোট ছোট পুনরাবৃত্তিতে। প্রতিটি নিয়ামতের নাম নেওয়ার পর সে আবার একই প্রশ্ন করে।"
          },
          {
            "en": "The difference among the commentators is also a lesson in adab. At-Tabari chose a view and gave his reason; Ibn Kathir declined it and gave his. Both books are still read side by side, centuries later, and both preserve the views they did not take. When a study circle meets two readings of a verse, it can do what these books do: name each view with those who held it, state the reason given for it, and leave the other reading standing with respect.",
            "bn": "মুফাসসিরদের এই মতভেদ আদবেরও একটা শিক্ষা। তাবারী একটি মত বেছে নিয়েছেন, কারণও বলেছেন। ইবন কাসীর তা গ্রহণ করেননি, তিনিও নিজের কারণ বলেছেন। শত শত বছর পরেও দুটো বই পাশাপাশি পড়া হয়। আর যে মত তাঁরা নেননি, দুটো বইয়েই সেগুলোও যত্ন করে রাখা আছে। কোনো পাঠচক্র যখন একটা আয়াতের দুই রকম পাঠের মুখোমুখি হয়, তখন এই বইগুলোর মতো করেই চলতে পারে: প্রতিটি মত যাঁরা ধরেছেন তাঁদের নামসহ বলা, তার পক্ষের যুক্তিটা বলা, আর অন্য পাঠটিকে সম্মানের সঙ্গে থাকতে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Beside the Water",
          "bn": "পানির ধারে এক দোয়া"
        },
        "p": [
          {
            "en": "No Sunnah supplication is attached to this verse in the sources consulted. A short supplication in the verse's own vocabulary, offered as such and not as a narrated du'a, might be: O Lord of the two easts and the two wests, who let loose the two seas, make me count Your favours and never deny them, and let whatever You have released into my life run towards obedience to You.",
            "bn": "দেখা সূত্রগুলোতে এই আয়াতের সঙ্গে সুন্নাহর কোনো দোয়া যুক্ত নেই। আয়াতের নিজের শব্দ থেকে একটা ছোট দোয়া এভাবে হতে পারে। এটি বর্ণিত কোনো দোয়া নয়, শুধু আয়াতের ভাষা থেকে বানানো: হে দুই পূর্ব ও দুই পশ্চিমের রব, যিনি দুই সাগরকে ছেড়ে দিয়েছেন, আমাকে আপনার নিয়ামত গুনে রাখার তাওফীক দিন, কখনো অস্বীকার করতে দেবেন না। আর আমার জীবনে আপনি যা কিছু ছেড়ে দিয়েছেন, সবকিছু আপনার আনুগত্যের দিকে বইয়ে দিন।"
          },
          {
            "en": "With children, the verse can be taught through its three words and a simple picture: a cup of water poured into a bowl, and the question, who let this water go free? Older students can be shown the list of views, the sky and the earth, two named seas, the fresh and the salt, with the names of those who held each, and asked to explain at-Tabari's reason and Ibn Kathir's reply in their own words, without being asked to pick a winner.",
            "bn": "শিশুদের এই আয়াত শেখানো যায় তার তিনটি শব্দ আর একটা সহজ ছবি দিয়ে। এক কাপ পানি একটা বাটিতে ঢেলে জিজ্ঞেস করুন, এই পানিকে কে ছেড়ে দিল? বড়দের সামনে মতগুলোর তালিকা রাখা যায়: আকাশ ও পৃথিবী, নাম ধরে বলা দুই সাগর, মিঠা ও লোনা পানি, সঙ্গে প্রতিটি মতের ধারকদের নাম। তারপর তাদের বলুন তাবারীর যুক্তি আর ইবন কাসীরের জবাব নিজের ভাষায় বুঝিয়ে বলতে। কে জিতল, সেটা বাছতে বলবেন না।"
          }
        ]
      }
    ]
  },
  "55:26-27": {
    "sections": [
      {
        "h": {
          "en": "Everyone Upon It",
          "bn": "এর উপর যারা আছে"
        },
        "p": [
          {
            "en": "Kullu man alayha fan — everyone upon it is passing away. The pronoun in alayha, upon it, has no noun standing beside it; the commentators refer it back to the earth, which the surah had laid out for the creatures earlier, at 55:10 in its opening list. The word for those upon it is man, who, the Arabic for beings with reason rather than things. The wider case is stated elsewhere: 28:88 says everything will perish except His Face.",
            "bn": "কুল্লু মান আলাইহা ফান: এর উপর যারা আছে, সবাই বিলীন হয়ে যাবে। আলাইহা, অর্থাৎ এর উপর, শব্দের সর্বনামটির পাশে কোনো বিশেষ্য নেই। মুফাসসিররা একে জমিনের দিকে ফিরিয়ে দেন। সূরাটি শুরুর তালিকায়, ৫৫:১০ আয়াতে, এই জমিনকেই সৃষ্টিকুলের জন্য বিছিয়ে দেওয়ার কথা বলেছে। এর উপর যারা আছে, তাদের বোঝাতে শব্দটি হলো মান, অর্থাৎ যারা। আরবিতে এ শব্দ বস্তুর জন্য নয়, বিবেকবান সত্তার জন্য ব্যবহৃত হয়। আরও ব্যাপক কথাটি এসেছে অন্য জায়গায়: ২৮:৮৮ আয়াত বলে, তাঁর চেহারা ছাড়া সবকিছুই ধ্বংস হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Participle, Not a Forecast",
          "bn": "ভবিষ্যদ্বাণী নয়, ইসমে ফায়েল"
        },
        "p": [
          {
            "en": "Fan is the active participle, not a future verb. Arabic could have said everyone upon it will perish as an event scheduled for later; instead it describes a state that is already the case. Everyone upon the earth is perishing — in the process, on the way out, currently in the condition of passing. That grammatical choice moves the whole verse out of eschatology and into this afternoon. Nothing has to happen for the sentence to be true.",
            "bn": "'ফান' শব্দটি ইসমে ফায়েল, অর্থাৎ কর্তৃবাচক বিশেষ্য; ভবিষ্যৎকালের ক্রিয়া নয়। আরবিতে বলা যেত, এর উপর যারা আছে সবাই ধ্বংস হবে, যেন পরে কোনো এক সময়ের নির্ধারিত ঘটনা। আয়াতটি তা না বলে এমন এক অবস্থার কথা বলছে, যা এখনই চলছে। যমীনের উপর প্রত্যেকেই বিলীন হয়ে চলেছে: যাওয়ার পথে আছে, বিদায় নিচ্ছে, এই মুহূর্তেই ফুরিয়ে যাচ্ছে। ব্যাকরণের এই বাছাইটুকু গোটা আয়াতকে আখিরাতের আলোচনা থেকে তুলে এনে বসিয়ে দেয় আজকের এই বিকেলে। কথাটা সত্য হওয়ার জন্য নতুন কিছু ঘটার দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "And the Face of Your Lord Remains",
          "bn": "আর থেকে যায় আপনার রবের চেহারা"
        },
        "p": [
          {
            "en": "Wa yabqa wajhu rabbika. Baqa', remaining, is the exact counterpart of fana', passing, and the two verses are built as one balanced sentence: everything on this side goes, that on the other side stays. Ahl as-Sunnah affirm the wajh as Allah affirmed it for Himself, without likening it to anything created and without emptying the word of meaning; among the mufassirun there are also those who gloss wajh here as His very Self.",
            "bn": "ওয়া ইয়াবকা ওয়াজহু রাব্বিক। 'বাকা' মানে থেকে যাওয়া, 'ফানা' মানে বিলীন হওয়া; একটি অন্যটির ঠিক উল্টো জোড়া। দুই আয়াত মিলে যেন একটিই সুষম বাক্য: এ পারের সবকিছু চলে যায়, ও পারে যা আছে তা থেকে যায়। আল্লাহ নিজের জন্য যেভাবে 'ওয়াজহ' সাব্যস্ত করেছেন, আহলুস সুন্নাহ সেভাবেই তা মেনে নেন। সৃষ্টির কোনো কিছুর সঙ্গে তুলনা করেন না, আবার শব্দটিকে অর্থশূন্যও করেন না। মুফাসসিরদের কেউ কেউ এখানে 'ওয়াজহ'-এর অর্থ করেছেন স্বয়ং তাঁর সত্তা।"
          },
          {
            "en": "The word does other work in the Quran that is worth holding beside this. 2:115 says that wherever you turn, there is the Face of Allah. And 76:9 uses it for motive: we feed you only for the Face of Allah, wanting from you neither reward nor thanks. So the thing that remains is also the thing an act can be aimed at — which quietly tells you what to do with a world described as already perishing.",
            "bn": "কুরআনে শব্দটি আরও কিছু জায়গায় এসেছে, সেগুলোও এর পাশে রেখে পড়ার মতো। 2:115 আয়াত বলে, তোমরা যেদিকেই মুখ ফেরাও, সেদিকেই আল্লাহর চেহারা। আর 76:9 আয়াতে শব্দটি এসেছে নিয়তের অর্থে: আমরা তোমাদের খাওয়াই কেবল আল্লাহর চেহারার উদ্দেশে, তোমাদের কাছে কোনো প্রতিদান চাই না, কৃতজ্ঞতাও না। তার মানে, যা থেকে যায়, কোনো কাজের লক্ষ্যও হতে পারে সেটিই। এভাবে আয়াতগুলো চুপচাপ বলে দেয়, যে দুনিয়া এখনই বিলীন হয়ে চলেছে, তাকে নিয়ে কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Owner of Majesty and Honour",
          "bn": "মহিমা ও সম্মানের অধিকারী"
        },
        "p": [
          {
            "en": "Dhu al-jalal wal-ikram. Jalal is greatness that overwhelms and puts a creature in its place; ikram is the generosity that honours and lifts one up. The title holds fear and hope together in a few words, which is why it is chosen here rather than a name of power alone. What remains is not merely the strongest thing; it is the thing that both humbles you and treats you generously.",
            "bn": "যুল-জালালি ওয়াল-ইকরাম। 'জালাল' সেই মহত্ত্ব, যা সৃষ্টিকে অভিভূত করে, তাকে তার আসল জায়গা চিনিয়ে দেয়। 'ইকরাম' সেই উদারতা, যা সম্মান দেয়, উঁচুতে তুলে ধরে। অল্প কয়েকটি শব্দে এই উপাধি ভয় আর আশাকে একসঙ্গে ধরে রাখে। এ কারণেই এখানে শুধু ক্ষমতা বোঝায় এমন কোনো নাম না এনে এটিকেই বেছে নেওয়া হয়েছে। যিনি থেকে যান, তিনি কেবল সবচেয়ে শক্তিশালী নন; তিনি আপনাকে বিনয়ীও করেন, আবার উদারভাবে সম্মানও দেন।"
          },
          {
            "en": "There is a fine grammatical detail here. In the reading of Hafs, the phrase at 55:27 stands in the nominative, dhu, agreeing with the Face; at the surah's closing verse, 55:78, it stands in the genitive, dhi, agreeing with your Lord — blessed is the name of your Lord, Owner of Majesty and Honour. The surah opened on a single name at 55:1, ar-Rahman, and it closes on this one, with the same title turned to the Lord Himself.",
            "bn": "এখানে ব্যাকরণের একটি সূক্ষ্ম বিষয় আছে। হাফসের কিরাতে 55:27 আয়াতে শব্দটি কর্তৃকারকে, 'যূ', কারণ তা 'চেহারা' শব্দের সঙ্গে মিল রাখে। আর সূরার শেষ আয়াত 55:78-এ তা সম্বন্ধপদে, 'যী', কারণ সেখানে তা মিল রাখে 'আপনার রব'-এর সঙ্গে: মহিমা ও সম্মানের অধিকারী আপনার রবের নাম বড়ই বরকতময়। সূরাটি 55:1 আয়াতে শুরু হয়েছিল একটিমাত্র নাম দিয়ে, আর-রাহমান। আর শেষ হয় এই উপাধি দিয়ে, যা এবার সরাসরি রবের দিকে ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Baqa Asks For",
          "bn": "'বাকা' যা দাবি করে"
        },
        "p": [
          {
            "en": "If everything on the earth is already in the state of passing, then the worth of a thing is measured by what survives it. That is not a mood the verse produces; it is an arithmetic it hands you. 18:46 does the same sum openly: wealth and children are the adornment of the worldly life, but the enduring good deeds — al-baqiyat as-salihat, from the very root of yabqa in our verse — are better with your Lord for reward and better for hope.",
            "bn": "যমীনের সবকিছুই যদি এখনই বিলীন হয়ে চলে, তাহলে কোনো জিনিসের দাম মাপতে হবে তার পরেও কী টিকে থাকে, তা দিয়ে। এটা আয়াতের জাগানো কোনো মনের ভাব নয়; এটা একটা হিসাব, যা আয়াত আপনার হাতে তুলে দেয়। 18:46 আয়াত একই হিসাব খোলাখুলি কষে দেখায়: ধনসম্পদ আর সন্তানসন্ততি দুনিয়ার জীবনের শোভা, কিন্তু স্থায়ী নেক আমলগুলো তোমার রবের কাছে প্রতিদানে উত্তম, আশার দিক থেকেও উত্তম। এই 'স্থায়ী নেক আমল' হলো আল-বাকিয়াতুস সালিহাত, আর শব্দটি এসেছে আমাদের আয়াতের 'ইয়াবকা'-র সেই একই ধাতু থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways to Live It",
          "bn": "জীবনে আনার দুটি পথ"
        },
        "p": [
          {
            "en": "The first is already in your prayer. Muslim relates from Thawban (RA) that when the Prophet ﷺ finished his prayer he sought forgiveness three times and then said: O Allah, You are as-Salam, and from You is peace; blessed are You, O Owner of Majesty and Honour. The title of 55:27 was placed at the end of every obligatory prayer, so a Muslim says aloud, five times a day, the name of the One who remains.",
            "bn": "প্রথম পথটি আপনার নামাজের ভেতরেই আছে। ইমাম মুসলিম সাওবান (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নামাজ শেষ করে তিনবার ইস্তিগফার করতেন, তারপর বলতেন: হে আল্লাহ, আপনিই আস-সালাম, আপনার কাছ থেকেই শান্তি; আপনি বরকতময়, হে মহিমা ও সম্মানের অধিকারী। এভাবে 55:27 আয়াতের উপাধিটি জায়গা পেয়েছে প্রতিটি ফরজ নামাজের শেষে। ফলে একজন মুসলিম দিনে পাঁচবার মুখে উচ্চারণ করেন সেই সত্তার নাম, যিনি থেকে যান।"
          },
          {
            "en": "The second is a question to put to a decision before you make it: what part of this survives the earth it is done on? A meal cooked for a neighbour, an hour of study, a debt forgiven, a prayer nobody saw — each of these is done on perishing ground and yet aimed past it. The verse does not ask you to leave the world. It asks you to stop expecting the world to keep anything for you.",
            "bn": "দ্বিতীয় পথটি হলো কোনো সিদ্ধান্ত নেওয়ার আগে নিজেকে একটা প্রশ্ন করা: যে মাটির উপর দাঁড়িয়ে কাজটা করছি, সেই মাটি চলে গেলেও এর কোন অংশটা টিকে থাকবে? প্রতিবেশীর জন্য রান্না করা এক বেলার খাবার, পড়াশোনার একটি ঘণ্টা, মাফ করে দেওয়া একটা ঋণ, এমন এক নামাজ যা কেউ দেখেনি: প্রতিটি কাজ হয় বিলীন হয়ে চলা মাটির উপরেই, অথচ লক্ষ্য থাকে তার ওপারে। আয়াতটি আপনাকে দুনিয়া ছেড়ে দিতে বলে না। বলে শুধু এই আশা ছাড়তে যে দুনিয়া আপনার জন্য কিছু ধরে রাখবে।"
          }
        ]
      }
    ]
  },
  "55:35": {
    "sections": [
      {
        "h": {
          "en": "Eight Words After the Dare",
          "bn": "চ্যালেঞ্জের পরে আট শব্দ"
        },
        "p": [
          {
            "en": "Yursalu 'alaykuma shuwazun min narin wa-nuhasun fa-la tantasiran: there will be sent upon you both a shuwaz of fire, and nuhas, and you will not be helped. The verse is eight words in the Arabic. It stands between two of the surah's refrains, 55:34 and 55:36, and comes straight after 55:33, where jinn and humans are told to pass beyond the regions of the heavens and the earth if they are able, and are told that they will not pass except by authority. Its two key nouns, shuwaz and nuhas, are where the commentators linger.",
            "bn": "ইউরসালু আলাইকুমা শুওয়াযুম মিন নারিও ওয়া নুহাসুন ফালা তানতাসিরান: তোমাদের দুই দলের উপর পাঠানো হবে আগুনের শুওয়ায আর নুহাস, তখন তোমরা কোনো সাহায্য পাবে না। আরবীতে আয়াতটি মাত্র আটটি শব্দের। সূরার দুটি ধুয়ার মাঝখানে এর জায়গা, ৫৫:৩৪ আর ৫৫:৩৬। ঠিক আগেই আছে ৫৫:৩৩, যেখানে জ্বিন ও মানুষকে বলা হয়েছে: পারলে আকাশ ও পৃথিবীর সীমানা পেরিয়ে যাও, তবে অনুমতি ছাড়া তোমরা পেরোতে পারবে না। আয়াতের মূল দুটি শব্দ শুওয়ায আর নুহাস। তাফসীরকারেরা এখানেই সবচেয়ে বেশি সময় দিয়েছেন।"
          },
          {
            "en": "The address is dual: 'alaykuma, upon you two, and tantasiran, you two will not be helped. At-Tabari names the pair as the thaqalan, addressed on the Day of Resurrection, and he carries a report from Qatada that the two meant are the jinn and humankind. The surah's dual address as such is taken up in the article on 55:13 and is not repeated here. For this verse it is enough that both kinds of accountable creation hear the same warning, and neither is told that it will fare any differently from the other.",
            "bn": "সম্বোধনটি দ্বিবচনে: আলাইকুমা, তোমাদের দুজনের উপর, আর তানতাসিরান, তোমরা দুজন সাহায্য পাবে না। তাবারী এই জোড়াকে বলেছেন সাকালান, যাদের ডাকা হচ্ছে কিয়ামতের দিন। কাতাদার একটি বর্ণনাও তিনি এনেছেন: এ দুই দল মানে জ্বিন আর মানুষ। গোটা সূরায় এই দুই দলকে একসঙ্গে ডাকার আলোচনা ৫৫:১৩ আয়াতের প্রবন্ধে হয়ে গেছে, এখানে আর তা ফিরিয়ে আনা হলো না। এ আয়াতের জন্য এটুকুই যথেষ্ট: দায়বদ্ধ দুই সৃষ্টিই একই সতর্কবাণী শুনছে। কোনো দলকেই বলা হয়নি যে তার পরিণতি অন্যটির চেয়ে আলাদা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Flame With No Smoke",
          "bn": "ধোঁয়াহীন আগুনের জিভ"
        },
        "p": [
          {
            "en": "At-Tabari defines shuwaz as the flame of the fire where it blazes and is stoked, with no smoke in it, and cites the poet Ru'bah on a fire of war that stokes the shuwaz. He reports the gloss 'flame of fire' from Ibn 'Abbas by two chains, and in similar words from Mujahid, ad-Dahhak, Qatada and Ibn Zayd. Al-Baghawi calls the flame without smoke the view of most of the commentators. Al-Qurtubi gives it as the view of Ibn 'Abbas and others, and Ma'arif al-Qur'an reports the same from Ibn 'Abbas and other leading authorities.",
            "bn": "তাবারীর সংজ্ঞায় শুওয়ায হলো আগুনের সেই শিখা, যেখানে আগুন দাউ দাউ করে জ্বলে ওঠে, অথচ তাতে কোনো ধোঁয়া নেই। প্রমাণ হিসেবে তিনি কবি রু'বার একটি পঙক্তি আনেন, যেখানে যুদ্ধের আগুন শুওয়ায উসকে দেয়। আগুনের শিখা, এই ব্যাখ্যা তিনি ইবন আব্বাস (রাঃ) থেকে দুটি সূত্রে বর্ণনা করেন। মুজাহিদ, দাহহাক, কাতাদা ও ইবন যায়দ থেকেও কাছাকাছি কথা আনেন। বাগাভী বলেন, ধোঁয়াহীন শিখা, এটাই অধিকাংশ তাফসীরকারের মত। কুরতুবী একে ইবন আব্বাস (রাঃ) ও অন্যদের মত বলে উল্লেখ করেন। মাআরিফুল কুরআনও একই কথা আনে ইবন আব্বাস (রাঃ) ও অন্য শীর্ষ তাফসীরকারদের সূত্রে।"
          },
          {
            "en": "As-Sa'di puts it in two words: a pure flame. Ibn Kathir adds a report he takes from at-Tabarani, by way of Juwaybir from ad-Dahhak. Nafi' ibn al-Azraq asked Ibn 'Abbas about shuwaz, and he answered that it is the flame that has no smoke with it. Asked for a witness from the Arabs' speech, he recited lines that Ibn Kathir gives as Umayya ibn Abi as-Salt's, in which a smith works his bellows and keeps blowing the flame of the shuwaz. Ibn Kathir names the chain and gives no grading; it is reported here only as he gives it.",
            "bn": "সা'দী কথাটা সারেন দুই শব্দে: খাঁটি শিখা। ইবন কাসীর এর সঙ্গে একটি বর্ণনা যোগ করেন, যা তিনি নিয়েছেন তাবারানী থেকে, জুওয়াইবিরের মাধ্যমে দাহহাকের সূত্রে। নাফি' ইবনুল আযরাক ইবন আব্বাস (রাঃ)-কে শুওয়ায সম্পর্কে জিজ্ঞেস করেন। তিনি বলেন, এ হলো সেই শিখা যার সঙ্গে কোনো ধোঁয়া থাকে না। আরবদের ভাষা থেকে সাক্ষী চাইলে তিনি কয়েকটি পঙক্তি শোনান, ইবন কাসীর যেগুলোকে উমাইয়া ইবন আবিস সালতের বলে উল্লেখ করেন। তাতে এক কামার হাপর চেপে অবিরাম শুওয়াযের শিখায় ফুঁ দিয়ে চলে। ইবন কাসীর সনদের নাম বলেছেন, মান নিয়ে কিছু বলেননি। তাই বর্ণনাটি এখানে তাঁর ভাষ্য হিসেবেই রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Green Tongues and Smoke",
          "bn": "সবুজ শিখা, নাকি ধোঁয়া"
        },
        "p": [
          {
            "en": "Not every report fits that picture. Mujahid, in several of at-Tabari's chains, calls shuwaz the green flame that breaks off from the fire, and al-Qurtubi, al-Baghawi and Ibn Kathir all carry this. Abu Salih, in Ibn Kathir, places it as the flame above the fire and below the smoke. Ad-Dahhak is reported three ways: as simply the flame in one of at-Tabari's chains; as the smoke that comes out of the flame, not the smoke of firewood, in another; and as a torrent of fire in Ibn Kathir. Al-Qurtubi says Sa'id ibn Jubayr also held the smoke view.",
            "bn": "সব বর্ণনা অবশ্য এই ছবির সঙ্গে মেলে না। তাবারীর কয়েকটি সূত্রে মুজাহিদ বলেন, শুওয়ায হলো আগুন থেকে ছিটকে আলাদা হয়ে যাওয়া সবুজ শিখা। কুরতুবী, বাগাভী ও ইবন কাসীর সবাই এ কথা এনেছেন। ইবন কাসীরের বর্ণনায় আবু সালিহ একে রাখেন আগুনের উপরে আর ধোঁয়ার নিচে থাকা শিখা হিসেবে। দাহহাক থেকে এসেছে তিনটি ভিন্ন কথা। তাবারীর একটি সূত্রে শুধু শিখা। আরেক সূত্রে শিখা থেকে বের হওয়া ধোঁয়া, কাঠ পোড়ার ধোঁয়া নয়। আর ইবন কাসীরে আগুনের স্রোত। কুরতুবী জানান, সাঈদ ইবন জুবাইরও ধোঁয়ার মতটি দিয়েছেন।"
          },
          {
            "en": "Ibn Kathir also has Ibn 'Abbas, through Sa'id ibn Jubayr, gloss shuwaz as smoke, beside his other report from Ibn 'Abbas of flame. Al-Qurtubi records a further view, that shuwaz is the fire and the smoke together, from one 'Amr, and says al-Akhfash reported it from some of the Arabs. So the word is held between pure flame, flame carrying smoke, and smoke itself. At-Tabari states his own definition, flame without smoke, and lists the smoke view under 'others said'. The rest set the glosses out without ranking them, and this article leaves them there.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে সাঈদ ইবন জুবাইরের সূত্রে আরেকটি বর্ণনাও এনেছেন, যেখানে শুওয়ায মানে ধোঁয়া। অথচ ইবন আব্বাস (রাঃ) থেকেই তাঁর অন্য বর্ণনায় এর অর্থ শিখা। কুরতুবী আরও একটি মত লিখেছেন: শুওয়ায মানে আগুন আর ধোঁয়া দুটোই একসঙ্গে। মতটি আমর নামের একজনের, আর আখফাশ এটি কিছু আরবের মুখ থেকে বর্ণনা করেছেন। ফলে শব্দটির অর্থ ঘোরে তিন জায়গায়: খাঁটি শিখা, ধোঁয়ামেশানো শিখা, আর খোদ ধোঁয়া। তাবারী নিজের সংজ্ঞা স্পষ্ট বলেছেন, ধোঁয়াহীন শিখা, আর ধোঁয়ার মতটি রেখেছেন 'অন্যরা বলেছেন' শিরোনামে। বাকিরা ব্যাখ্যাগুলো সাজিয়ে দিয়েছেন, কোনোটিকে এগিয়ে রাখেননি। এ প্রবন্ধও সেখানেই থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nuhas: Smoke or Brass",
          "bn": "নুহাস: ধোঁয়া, না পিতল"
        },
        "p": [
          {
            "en": "On nuhas, at-Tabari says plainly that the people of interpretation differed. One group took it as smoke: Ibn 'Abbas, in reports through Abu Salih and through 'Ali ibn Abi Talhah, and Sa'id ibn Jubayr. Another took it as sufr, brass: Ibn 'Abbas again, in a third chain, saying it is brass with which they are punished, and Mujahid, who says the brass is melted and poured down on their heads. Qatada says He threatened the two with brass, and in another report, that He frightens them with the fire and with nuhas.",
            "bn": "নুহাস নিয়ে তাবারী সোজাসুজি বলেন, তাফসীরকারদের মধ্যে মতভেদ আছে। একদল একে ধোঁয়া বলেছেন। তাঁদের মধ্যে আছেন ইবন আব্বাস (রাঃ), আবু সালিহ ও আলী ইবন আবী তালহার মাধ্যমে আসা বর্ণনায়, আর সাঈদ ইবন জুবাইর। আরেক দল বলেছেন সুফর, অর্থাৎ পিতল। এখানেও আছেন ইবন আব্বাস (রাঃ), তৃতীয় একটি সূত্রে: এটি সেই পিতল, যা দিয়ে তাদের আজাব দেওয়া হবে। মুজাহিদ বলেন, পিতল গলিয়ে তাদের মাথার উপর ঢেলে দেওয়া হবে। কাতাদা বলেন, আল্লাহ দুই দলকে পিতলের ভয় দেখিয়েছেন। তাঁর আরেক বর্ণনায় আছে, তিনি তাদের ভয় দেখাচ্ছেন আগুন আর নুহাস দিয়ে।"
          },
          {
            "en": "At-Tabari then states a preference and gives his reason. The more correct of the two views, he says, is smoke. Since the shuwaz already sent is pure fire with no smoke mixed in, the threat is best followed by its opposite within the same kind of punishment, which is smoke, rather than by something of another kind altogether. He adds that the Arabs call smoke nuhas, and quotes a line of an-Nabigha on a lamp that shines like the light of an oil lamp, in which God has put no nuhas, meaning no smoke.",
            "bn": "এরপর তাবারী নিজের পছন্দ জানান, কারণসহ। তাঁর মতে দুই মতের মধ্যে বেশি সঠিক হলো ধোঁয়া। কারণ, যে শুওয়ায পাঠানো হচ্ছে তা খাঁটি আগুন, তাতে ধোঁয়ার কোনো মিশেল নেই। তাই এই হুমকির পরে মানানসই হলো একই ধরনের আজাবের ভেতর থেকে তার উল্টোটা আনা, আর সেটা ধোঁয়া। সম্পূর্ণ ভিন্ন জাতের কিছু আনা ততটা মানায় না। তিনি আরও বলেন, আরবরা ধোঁয়াকে নুহাস বলে। সাক্ষী হিসেবে আনেন নাবিগার একটি পঙক্তি: সেটি জ্বলে তেলের প্রদীপের আলোর মতো, আল্লাহ তাতে কোনো নুহাস রাখেননি। মানে, কোনো ধোঁয়া নেই।"
          },
          {
            "en": "The others do not rank. Ibn Kathir lists smoke from Ibn 'Abbas, Abu Salih, Sa'id ibn Jubayr and Abu Sinan, then Mujahid and Qatada on molten brass poured on heads, and ad-Dahhak's torrent of nuhas. Al-Baghawi and al-Qurtubi carry the same two camps, and both add that Ibn Mas'ud called it al-muhl; al-Qurtubi adds ad-Dahhak's dregs of boiling oil and al-Kisa'i's fire with a fierce wind. The Muyassar reads molten copper poured on the heads. As-Sa'di reads a flame mixed with smoke, and Ma'arif al-Qur'an smoke with no flame.",
            "bn": "বাকিরা কোনো মতকে এগিয়ে রাখেননি। ইবন কাসীর ধোঁয়ার মত আনেন ইবন আব্বাস (রাঃ), আবু সালিহ, সাঈদ ইবন জুবাইর ও আবু সিনান থেকে। তারপর মুজাহিদ ও কাতাদা থেকে মাথায় ঢালা গলানো পিতলের কথা, আর দাহহাক থেকে নুহাসের স্রোত। বাগাভী ও কুরতুবীতেও এই দুই দল আছে। দুজনেই যোগ করেন, ইবন মাসউদ (রাঃ) একে বলেছেন আল-মুহল। কুরতুবী আরও আনেন দাহহাকের মত, ফুটন্ত তেলের তলানি, আর কিসাঈর মত, প্রচণ্ড ঝাপটাওয়ালা আগুন। মুয়াসসার বলে, মাথায় ঢালা গলানো তামা। সা'দীর কাছে এ হলো ধোঁয়ামেশানো শিখা, আর মাআরিফুল কুরআনের কাছে শিখাহীন ধোঁয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Reciters Read",
          "bn": "কারীদের পাঠের ভিন্নতা"
        },
        "p": [
          {
            "en": "The reciters differed over the first vowel of shuwaz. At-Tabari says the general reciters of Madinah, Kufah and Basrah read shuwaz, with damma, except Ibn Abi Ishaq, who with 'Abdullah ibn Kathir read shiwaz, with kasra. Both, he says, are dialect forms, like suwar and siwar for a herd of cattle, and he prefers the damma as the familiar form and the reading of the reciters of the cities. Al-Qurtubi and al-Baghawi give shiwaz to Ibn Kathir and shuwaz to the rest, and also call them two dialect forms.",
            "bn": "শুওয়ায শব্দের প্রথম স্বরধ্বনি নিয়ে কারীদের মধ্যে ভিন্নতা আছে। তাবারী বলেন, মদীনা, কুফা ও বসরার সাধারণ কারীরা পড়েছেন শুওয়ায, পেশ দিয়ে। ব্যতিক্রম ইবন আবী ইসহাক। তিনি এবং আবদুল্লাহ ইবন কাসীর পড়েছেন শিওয়ায, যের দিয়ে। তাবারীর মতে দুটোই আরবদের প্রচলিত উচ্চারণ, যেমন গরুর পালকে বলা হয় সুওয়ার ও সিওয়ার দুভাবেই। তিনি পেশকে পছন্দ করেন, কারণ এটাই পরিচিত রূপ এবং বড় বড় শহরের কারীদের পাঠ। কুরতুবী ও বাগাভী শিওয়ায পাঠ ইবন কাসীরের নামে রাখেন, বাকিদের নামে শুওয়ায, আর দুটোকেই বলেন আরবদের দুই উচ্চারণ।"
          },
          {
            "en": "On nuhas the difference is in the case ending. Al-Qurtubi says the general reading is nuhasun, nominative, joined to shuwaz, while Ibn Kathir, Ibn Muhaysin, Mujahid and Abu 'Amr read nuhasin, genitive, joined to nar. Al-Baghawi names Ibn Kathir and Abu 'Amr for the genitive. On the nominative, he says one may be sent at one time and the other at another, or both together without mixing. The genitive, he says, is weak, since a shuwaz cannot be made of nuhas, unless one understands 'and something of nuhas'. Al-Qurtubi, citing al-Mahdawi, reasons the same way.",
            "bn": "নুহাস শব্দে ভিন্নতা শেষ স্বরে। কুরতুবী বলেন, সাধারণ পাঠ নুহাসুন, পেশযুক্ত, যা শুওয়াযের সঙ্গে যুক্ত। আর ইবন কাসীর, ইবন মুহাইসিন, মুজাহিদ ও আবু আমর পড়েছেন নুহাসিন, যেরযুক্ত, যা নার শব্দের সঙ্গে যুক্ত। বাগাভী যেরের পাঠে ইবন কাসীর ও আবু আমরের নাম নেন। পেশের পাঠ সম্পর্কে তিনি বলেন, একবার এটা পাঠানো হবে, আরেকবার ওটা। আবার দুটো একসঙ্গেও পাঠানো হতে পারে, কোনোটা অন্যটার সঙ্গে না মিশে। যেরের পাঠকে তিনি দুর্বল বলেন, কারণ নুহাস দিয়ে শুওয়ায হয় না। তবে 'আর কিছু নুহাস' কথাটা উহ্য ধরলে চলে। কুরতুবীও মাহদাবীর বরাতে একই যুক্তি দেন।"
          },
          {
            "en": "Al-Qurtubi adds, from al-Mahdawi, that the genitive is clear for anyone who takes shuwaz as fire and smoke together. A further vowel is reported. At-Tabari says the Arabs say both nuhas and nihas for smoke, but that the reciters agree on the damma, nuhas. Al-Qurtubi reports nihas, with kasra, from Mujahid, Humayd, 'Ikrimah and Abu al-'Aliyah, and lists further rarer readings besides. Both statements are given here as each commentator gives them.",
            "bn": "কুরতুবী মাহদাবীর বরাতে আরও বলেন, যাঁরা শুওয়াযকে আগুন ও ধোঁয়া দুটোই মনে করেন, তাঁদের কাছে যেরের পাঠ একেবারে স্পষ্ট। আরেকটি স্বরের কথাও এসেছে। তাবারী বলেন, ধোঁয়া বোঝাতে আরবরা নুহাস ও নিহাস দুটোই বলে, তবে কারীরা সবাই পেশ দিয়ে নুহাস পড়েছেন। অন্যদিকে কুরতুবী মুজাহিদ, হুমাইদ, ইকরিমা ও আবুল আলিয়া থেকে যের দিয়ে নিহাস পাঠের কথা জানান, সঙ্গে আরও কিছু বিরল পাঠের তালিকা দেন। দুজনের কথাই এখানে রাখা হলো যেভাবে তাঁরা বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Turned Back, or the Fire",
          "bn": "ফিরিয়ে দেওয়া, নাকি জাহান্নাম"
        },
        "p": [
          {
            "en": "Where does this happen? Al-Qurtubi opens with one reading and then gives three more, each introduced by 'it was said'. The first ties the verse to the challenge before it: if you went out, a shuwaz of fire would be sent on you, and the punishment would hold you back from passing. The second says the verse is not tied to the passing at all: Allah is informing that He punishes the disobedient with fire. The third links it to the refrain: the flame and nuhas are sent as punishment for denying the favours of their Lord.",
            "bn": "ঘটনাটা ঘটবে কোথায়? কুরতুবী শুরু করেন একটি ব্যাখ্যা দিয়ে, তারপর আরও তিনটি আনেন, প্রতিটির আগে 'বলা হয়েছে'। প্রথমটি আয়াতকে আগের চ্যালেঞ্জের সঙ্গে বাঁধে: তোমরা বেরোতে চাইলে তোমাদের উপর আগুনের শুওয়ায পাঠানো হবে, আর সেই আজাবই তোমাদের পেরোতে দেবে না। দ্বিতীয় মতে, আয়াতটির সঙ্গে পেরোনোর কোনো সম্পর্কই নেই। আল্লাহ শুধু জানিয়ে দিচ্ছেন, নাফরমানদের তিনি আগুনের আজাব দেবেন। তৃতীয় মত একে ধুয়ার সঙ্গে জোড়ে: রবের নি'মাত অস্বীকার করার শাস্তি হিসেবেই শিখা আর নুহাস পাঠানো হবে।"
          },
          {
            "en": "In the fourth, the creatures are ringed round by angels and by a tongue of fire, and are then called, O company of jinn and humankind; that fire is the shuwaz of this verse. Ibn Kathir reads the challenge-link on every view of the words: if you went fleeing on the Day of Resurrection, the angels and the keepers of Hell would turn you back by sending flame and molten brass upon you. As-Sa'di places the verse in that tremendous standing, the two terrible things sent upon jinn and humans and closing round them.",
            "bn": "চতুর্থ মতে, সৃষ্টিকুলকে চারদিক থেকে ঘিরে রাখবে ফেরেশতারা আর আগুনের একটি জিভ। তারপর ডাক আসবে: হে জ্বিন ও মানুষের দল। সেই আগুনই এ আয়াতের শুওয়ায। ইবন কাসীর শব্দের যে ব্যাখ্যাই নেওয়া হোক, আয়াতকে চ্যালেঞ্জের সঙ্গেই যুক্ত করেন। তাঁর কথায়: কিয়ামতের দিন তোমরা পালাতে চাইলে ফেরেশতারা আর জাহান্নামের প্রহরীরা তোমাদের উপর শিখা আর গলানো পিতল ছুড়ে তোমাদের ফিরিয়ে দেবে। সা'দী আয়াতটিকে রাখেন সেই ভয়াবহ অবস্থানের দিনে। দুটি ভয়ংকর জিনিস জ্বিন ও মানুষের উপর পাঠানো হবে, আর চারদিক থেকে তাদের ঘিরে ফেলবে।"
          },
          {
            "en": "Ma'arif al-Qur'an gives both main framings. The verse could mean that after the reckoning, when the disbelievers are sent to Hell, they meet two kinds of punishment: in some places fire with no smoke, in others smoke with no flame. Other commentators, it says, read it as a supplement to the verse before: if you try to escape on the Day of Resurrection, the angels will bring you back by directing flame and smoke at you. At-Tabari sets the verse on the Day of Resurrection and, in the text read here, does not tie it to the challenge.",
            "bn": "মাআরিফুল কুরআন প্রধান দুটি ব্যাখ্যাই দেয়। এক, হিসাব শেষে কাফিরদের যখন জাহান্নামে পাঠানো হবে, তখন তারা দুই রকম আজাবের মুখোমুখি হবে। কোথাও থাকবে ধোঁয়াহীন আগুন, কোথাও শিখাহীন ধোঁয়া। দুই, অন্য তাফসীরকারেরা একে আগের আয়াতেরই পরিপূরক ধরেন। কিয়ামতের দিন তোমরা পালাতে চাইলে ফেরেশতারা শিখা আর ধোঁয়া ছুড়ে তোমাদের ফিরিয়ে আনবে। তাবারী আয়াতটিকে রাখেন কিয়ামতের দিনে। তবে এখানে পড়া তাঁর লেখায় তিনি একে চ্যালেঞ্জের সঙ্গে জুড়ে দেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "No One to Rescue",
          "bn": "উদ্ধার করার কেউ নেই"
        },
        "p": [
          {
            "en": "The verse closes on fa-la tantasiran. Ma'arif al-Qur'an derives the verb from intisar, getting help to defend oneself against a calamity. At-Tabari reads it as: you will not be helped against Him when He punishes you in this way, and you will not be rescued from Him. Al-Baghawi: you will not be able to hold yourselves back from Allah, and you will have no helper against Him. As-Sa'di: no help will come, neither from a helper among yourselves nor from anyone besides Allah. The three readings share one point: nothing stands between the two and what is sent.",
            "bn": "আয়াতের শেষ কথা ফালা তানতাসিরান। মাআরিফুল কুরআন ক্রিয়াটির মূল দেখায় ইনতিসার, অর্থাৎ বিপদ ঠেকাতে কারও সাহায্য পাওয়া। তাবারীর ব্যাখ্যায়: তিনি যখন এভাবে আজাব দেবেন, তখন তাঁর বিরুদ্ধে তোমরা কোনো সাহায্য পাবে না, তাঁর হাত থেকে তোমাদের কেউ ছাড়িয়েও আনতে পারবে না। বাগাভী বলেন: আল্লাহর হাত থেকে তোমরা নিজেদের বাঁচাতে পারবে না, তাঁর বিরুদ্ধে তোমাদের কোনো সাহায্যকারীও থাকবে না। সা'দী বলেন: সাহায্য আসবে না, না তোমাদের নিজেদের কোনো সাহায্যকারীর কাছ থেকে, না আল্লাহ ছাড়া অন্য কারও কাছ থেকে। তিনটি ব্যাখ্যার মিল একটি জায়গায়: পাঠানো আজাব আর এই দুই দলের মাঝখানে কিছুই দাঁড়াবে না।"
          },
          {
            "en": "Al-Qurtubi, the Muyassar and Ma'arif al-Qur'an turn the clause towards the pair themselves: jinn and humans will not be able to help each other, try as they might. Whatever alliances held between them before, the verse says they hold nothing here. No commentary read for this verse attaches a hadith to it, and none gives an occasion of revelation, so the article offers neither.",
            "bn": "কুরতুবী, মুয়াসসার ও মাআরিফুল কুরআন কথাটিকে ঘুরিয়ে দেন দুই দলের নিজেদের দিকে: জ্বিন আর মানুষ যত চেষ্টাই করুক, একে অপরকে সাহায্য করতে পারবে না। আগে তাদের মধ্যে যত জোট আর বন্ধুত্বই থাকুক, আয়াত বলছে এখানে তার কোনো দাম নেই। এ আয়াতের যে তাফসীরগুলো পড়া হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদিস জোড়েনি, নাজিলের কোনো প্রেক্ষাপটও বলেনি। তাই এ প্রবন্ধেও এর কোনোটি আনা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Heard in Time",
          "bn": "সময় থাকতে শোনা সতর্কবাণী"
        },
        "p": [
          {
            "en": "The verse speaks only of what it names: a warning addressed to jinn and humankind about the Day, in the text's own terms. It names no person and no community, and it licenses nothing against any living person or community. It gives no one the right to assign another to the flame, or to use its words as a curse. What it does is speak to the reader before the Day arrives, and the surah follows it at 55:36 with the same question it asks after its favours.",
            "bn": "আয়াতটি যা বর্ণনা করে, ঠিক তা-ই বর্ণনা করে: কিয়ামতের দিন সম্পর্কে জ্বিন ও মানুষের প্রতি একটি সতর্কবাণী, কুরআনের নিজের ভাষায়। এতে কোনো ব্যক্তি বা সম্প্রদায়ের নাম নেই। আজ বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতিও এ আয়াত দেয় না। কাউকে আগুনের যোগ্য বলে রায় দেওয়ার, কিংবা এর শব্দগুলোকে অভিশাপ হিসেবে ব্যবহার করার অধিকার কারও নেই। আয়াতটি বরং পাঠকের সঙ্গে কথা বলে সেই দিন আসার আগেই। আর সূরাটি ৫৫:৩৬ আয়াতে এর পরে সেই প্রশ্নই আবার তোলে, যা সে প্রতিটি নি'মাতের পরে তোলে।"
          },
          {
            "en": "What the verse asks of a reader is plain. Every defence a person builds, wealth, people, standing, an excuse ready before anyone asks, is named here by its absence: you will not be helped. The one protection that remains is the one sought from Allah before that Day, by turning back to Him while turning is still possible. The flame and the nuhas are described now, in words, while the warning can still be heeded and the door of repentance is still open.",
            "bn": "পাঠকের কাছে আয়াতটির দাবি সোজা। মানুষ নিজেকে বাঁচাতে কত কিছুই না গড়ে তোলে: টাকা-পয়সা, লোকজন, পদমর্যাদা, কেউ জিজ্ঞেস করার আগেই সাজিয়ে রাখা অজুহাত। আয়াত এগুলোর একটিরও নাম নেয় না, শুধু বলে: তোমরা কোনো সাহায্য পাবে না। এতেই সবগুলোর কথা বলা হয়ে যায়। একটি আশ্রয়ই বাকি থাকে: সেই দিনের আগেই আল্লাহর কাছে আশ্রয় চাওয়া, ফেরার সুযোগ থাকতে থাকতেই তাঁর দিকে ফিরে আসা। শিখা আর নুহাসের কথা এখন শোনানো হচ্ছে কেবল কথায়, যখন সতর্ক হওয়ার সময় আছে, তওবার দরজাও খোলা।"
          }
        ]
      }
    ]
  },
  "55:37": {
    "sections": [
      {
        "h": {
          "en": "When the Sky Gives Way",
          "bn": "আকাশ যখন ফেটে পড়বে"
        },
        "p": [
          {
            "en": "The verses just before speak to jinn and mankind together. If you are able to pass beyond the regions of the heavens and the earth, then pass (55:33); then the refrain; then flame and smoke sent against them (55:35), which is studied on its own. Now comes fa-idha inshaqqat as-sama'u: and when the sky splits apart. At-Tabari, al-Qurtubi, Ibn Kathir, as-Sa'di and the Muyassar all place it on the Day of Resurrection. At-Tabari explains: when the sky splits and cracks open, and that is the Day of Resurrection. Al-Qurtubi glosses the verb as insada'at, it is rent.",
            "bn": "ঠিক আগের আয়াতগুলো জ্বিন ও মানুষকে একসঙ্গে ডাকছে। আকাশ ও পৃথিবীর সীমানা পেরোতে পারলে পেরিয়ে যাও (৫৫:৩৩)। তারপর সেই প্রশ্নবাক্য, তারপর আগুনের শিখা ও ধোঁয়া পাঠানোর কথা (৫৫:৩৫), যার আলোচনা আলাদা জায়গায়। এবার আসে ফা ইযান শাক্কাতিস সামা: আর যখন আকাশ ফেটে যাবে। তাবারী, কুরতুবী, ইবন কাসীর, সা'দী ও মুয়াসসার, সবাই একে কিয়ামতের দিনের ঘটনা বলেছেন। তাবারী ব্যাখ্যা করেন: আকাশ যখন ফাটবে, চৌচির হবে, আর সেটা কিয়ামতের দিন। কুরতুবী ক্রিয়াটির অর্থ করেন ইনসাদাআত, অর্থাৎ চিরে যাবে।"
          },
          {
            "en": "Ibn Kathir says this meaning is shown by the verse together with others like it, and he lists them: the sky will split, for that Day it is frail (69:16); the Day the sky splits open with clouds and the angels are sent down in a great descent (25:25); and when the sky splits and listens to its Lord, as it must (84:1 and 84:2). Al-Baghawi glosses the verb as infarajat, it parts, and adds that the sky becomes gates for the angels to come down. As-Sa'di fills in the scene: its sun and moon eclipsed, its stars scattered.",
            "bn": "ইবন কাসীর বলেন, এ অর্থ এ আয়াত থেকে যেমন বোঝা যায়, একই অর্থের অন্য আয়াতগুলো থেকেও তেমনি বোঝা যায়। তিনি সেগুলো তুলে ধরেন: আকাশ ফেটে যাবে, সেদিন তা হবে দুর্বল (৬৯:১৬)। যেদিন মেঘসহ আকাশ বিদীর্ণ হবে আর ফেরেশতাদের দলে দলে নামানো হবে (২৫:২৫)। আর যখন আকাশ ফেটে যাবে এবং তার রবের হুকুম শুনবে, তার তো এটাই করণীয় (৮৪:১ ও ৮৪:২)। বাগাভী ক্রিয়াটির অর্থ করেন ইনফারাজাত, ফাঁক হয়ে যাবে। সঙ্গে যোগ করেন, ফেরেশতাদের নামার জন্য আকাশ তখন দরজায় দরজায় ভরে যাবে। সা'দী দৃশ্যটা পূর্ণ করেন: সূর্য ও চাঁদ আলো হারাবে, তারাগুলো ছিটকে পড়বে।"
          }
        ]
      },
      {
        "h": {
          "en": "Warda: Rose or Roan",
          "bn": "ওয়ারদা: গোলাপ, না ঘোড়া"
        },
        "p": [
          {
            "en": "Then fa-kanat wardatan ka-d-dihan: and it becomes warda, like dihan. Both nouns carry real disagreement. For warda, the Muyassar takes the flower: the sky turns red, like the colour of the rose. Al-Qurtubi relates, as something said, that it takes on the redness of the rose and the flowing of oil. Sa'id ibn Jubayr and Qatada, in al-Qurtubi's report, say simply that it becomes red. At-Tabari carries Qatada's fuller words by several chains: today it is green, as you see, and that Day it will have another colour; one chain says its colour then is redness.",
            "bn": "তারপর ফা কানাত ওয়ারদাতান কাদ্দিহান: আর তা হয়ে যাবে ওয়ারদা, দিহানের মতো। দুটি শব্দ নিয়েই সত্যিকারের মতভেদ আছে। ওয়ারদা বলতে মুয়াসসার ফুলটাই বোঝে: আকাশ লাল হয়ে যাবে, গোলাপের রঙের মতো। কুরতুবী 'বলা হয়' বলে একটি মত আনেন: আকাশ ধরবে গোলাপের লালিমা আর তেলের মতো গড়িয়ে চলা। সাঈদ ইবন জুবাইর ও কাতাদা থেকে কুরতুবীর বর্ণনা ছোট: আকাশ লাল হয়ে যাবে। কাতাদার পুরো কথা তাবারী কয়েকটি সনদে আনেন: আজ তা সবুজ, যেমন তোমরা দেখছ, আর সেদিন তার রং হবে অন্য রকম। একটি সনদে আছে, সেদিন তার রং হবে লাল।"
          },
          {
            "en": "Others read warda as a horse. Ibn Abbas, by the chain of Abu Kudayna from Qabus from his father, says: like the ward horse; at-Tabari and Ibn Kathir both carry this. At-Tabari's own explanation follows it: its colour will be that of the red ward pack-horse, and he says the people of interpretation said the same. Abu Salih: like the colour of the ward pack-horse, then afterwards like dihan. Ad-Dahhak, in at-Tabari: the sky changes until its colour is that of a ward mount. As-Suddi, in Ibn Kathir: like the colour of the ward she-mule.",
            "bn": "অন্যরা ওয়ারদাকে ঘোড়া অর্থে নিয়েছেন। আবু কুদাইনা, কাবূস ও তাঁর পিতার সনদে ইবন আব্বাস (রাঃ) বলেন: ওয়ারদ ঘোড়ার মতো। তাবারী ও ইবন কাসীর দুজনেই এ বর্ণনা এনেছেন। তাবারী নিজেও এ অর্থেই ব্যাখ্যা করেন: আকাশের রং হবে লালচে ওয়ারদ মালবাহী ঘোড়ার রঙের মতো। তিনি বলেন, তাফসীরকারেরাও তা-ই বলেছেন। আবু সালিহ বলেন: ওয়ারদ মালবাহী ঘোড়ার রঙের মতো, তারপর দিহানের মতো। তাবারীর বর্ণনায় দাহহাক বলেন: আকাশ বদলে যাবে, তার রং হবে ওয়ারদ সওয়ারি পশুর মতো। ইবন কাসীরের বর্ণনায় সুদ্দী বলেন: ওয়ারদ মাদী খচ্চরের রঙের মতো।"
          },
          {
            "en": "Why a horse? Because its coat changes. Al-Qurtubi gives Ibn Abbas: the ward horse is a yellowish bay in spring, a red bay at the start of winter, and a dusky bay when winter grows harsh; a bay is called ward when it shifts through colours. Al-Farra', in al-Qurtubi, says the same and concludes that the sky's changing is likened to the changing of ward horses. Al-Baghawi defines the ward horse as white shading into red and yellow and relates the seasonal account; Ibn Kathir says al-Baghawi and others relate it. Al-Hasan, in Ibn Kathir: it becomes colours.",
            "bn": "ঘোড়া কেন? কারণ তার গায়ের রং বদলায়। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: ওয়ারদ ঘোড়া বসন্তে হলদেটে বাদামি, শীতের শুরুতে লালচে বাদামি, আর শীত কড়া হলে ধূসর বাদামি। বাদামি ঘোড়া নানা রঙে বদলাতে থাকলে তাকে ওয়ারদ বলা হয়। কুরতুবীর বর্ণনায় ফাররাও একই কথা বলেন, আর শেষে বলেন, আকাশের রং বদলানোকে ওয়ারদ ঘোড়ার রং বদলানোর সঙ্গে তুলনা করা হয়েছে। বাগাভী ওয়ারদ ঘোড়ার পরিচয় দেন: সাদা, তাতে লাল আর হলুদের আভা। ঋতুবদলের বর্ণনাটাও তিনি আনেন। ইবন কাসীর বলেন, বাগাভী ও অন্যরা এটা বর্ণনা করেছেন। ইবন কাসীরের বর্ণনায় হাসান বসরী বলেন: আকাশ নানা রঙের হয়ে যাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dihan: Oil or Hide",
          "bn": "দিহান: তেল, না চামড়া"
        },
        "p": [
          {
            "en": "For dihan, most of the reports point to oil. Al-Qurtubi gives it from Mujahid, ad-Dahhak and others: dihan is oil, and the sense is that the sky takes on the clearness of oil, dihan being the plural of duhn. At-Tabari has Mujahid say simply: like oil; Ibn Kathir has him say: like the colours of dihan. Ad-Dahhak, in at-Tabari, glosses it as pure, and Ibn Zayd as shining. Al-Baghawi says the shifting colours of the ward are likened to oil and its shifting colours, and names ad-Dahhak, Mujahid, Qatada and ar-Rabi' for it.",
            "bn": "দিহান নিয়ে বেশির ভাগ বর্ণনা তেলের দিকে যায়। কুরতুবী মুজাহিদ, দাহহাক ও অন্যদের থেকে আনেন: দিহান মানে তেল। অর্থাৎ আকাশ তেলের মতো স্বচ্ছ হয়ে যাবে, আর দিহান হলো দুহন শব্দের বহুবচন। তাবারীর বর্ণনায় মুজাহিদের কথা ছোট: তেলের মতো। ইবন কাসীরের বর্ণনায় তিনি বলেন: দিহানের নানা রঙের মতো। তাবারীর বর্ণনায় দাহহাক এর অর্থ করেন খাঁটি, আর ইবন যায়দ করেন ঝলমলে। বাগাভী বলেন, ওয়ারদার বদলাতে থাকা রংকে তেল আর তেলের বদলাতে থাকা রঙের সঙ্গে তুলনা করা হয়েছে। এ মতের জন্য তিনি দাহহাক, মুজাহিদ, কাতাদা ও রাবী'র নাম নেন।"
          },
          {
            "en": "Within the oil reading the pictures still differ. Ata al-Khurasani, in Ibn Kathir: like the colour of rose oil in its yellowness. Muqatil, in al-Baghawi: like pure rose oil. Ata ibn Abi Rabah, in al-Baghawi: like pressed olive oil, which changes colour within the hour. Al-Hasan, in al-Qurtubi: like oil being poured, for when you pour it you see colours in it. Abu al-Jawza', in Ibn Kathir: in the clearness of oil. Zayd ibn Aslam, in al-Qurtubi: like the dregs of oil, and as-Suddi, in Ibn Kathir, likewise speaks of oil dregs.",
            "bn": "তেলের অর্থ নিলেও ছবিটা সবার কাছে এক নয়। ইবন কাসীরের বর্ণনায় আতা খুরাসানী বলেন: গোলাপ-তেলের হলদে রঙের মতো। বাগাভীর বর্ণনায় মুকাতিল বলেন: খাঁটি গোলাপ-তেলের মতো। বাগাভীর বর্ণনায় আতা ইবন আবী রাবাহ বলেন: নিংড়ানো জলপাই তেলের মতো, যা ঘণ্টার ভেতরে নানা রঙে বদলায়। কুরতুবীর বর্ণনায় হাসান বসরী বলেন: ঢালা তেলের মতো, ঢাললে তাতে নানা রং দেখা যায়। ইবন কাসীরের বর্ণনায় আবুল জাওযা বলেন: তেলের স্বচ্ছতার মতো। কুরতুবীর বর্ণনায় যায়দ ইবন আসলাম বলেন: তেলের তলানির মতো। ইবন কাসীরের বর্ণনায় সুদ্দীও তেলের তলানির কথা বলেন।"
          },
          {
            "en": "The other reading is leather. Ad-Dahhak relates from Ibn Abbas, in Ibn Kathir: it is red tanned hide. Al-Qurtubi relates, as something said, that dihan is pure red leather, citing Abu Ubayd and al-Farra': the sky turns red like hide from the fierce heat of the fire. Al-Kalbi, in al-Baghawi: like red hide. At-Tabari sets oil and hide side by side and ranks them: the sounder view is oil in the brightness of its colour, because that is the known usage of the Arabs. He alone ranks. This site's English translation follows the rose and oil; its Bengali follows red leather.",
            "bn": "আরেকটি মত চামড়া। ইবন কাসীরের বর্ণনায় দাহহাক ইবন আব্বাস (রাঃ) থেকে বলেন: এটা লাল পাকা চামড়া। কুরতুবী 'বলা হয়' বলে আনেন যে দিহান মানে খাঁটি লাল চামড়া, আর এর সূত্র দেন আবু উবায়দ ও ফাররা। অর্থাৎ আগুনের প্রচণ্ড তাপে আকাশ চামড়ার মতো লাল হয়ে যাবে। বাগাভীর বর্ণনায় কালবী বলেন: লাল চামড়ার মতো। তাবারী তেল আর চামড়া, দুই মতই পাশাপাশি রাখেন এবং একটিকে অগ্রাধিকার দেন: বেশি সঠিক হলো তেলের ঝলমলে রং, কারণ আরবদের ভাষায় এটাই পরিচিত। অগ্রাধিকার দেন কেবল তিনিই। এ সাইটের ইংরেজি অনুবাদ গোলাপ ও তেলের অর্থ নিয়েছে, আর বাংলা অনুবাদ নিয়েছে লাল চামড়ার অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sky That Melts",
          "bn": "যে আকাশ গলে যায়"
        },
        "p": [
          {
            "en": "Some commentators read the verse less as a single colour than as a state. Ibn Kathir's own explanation joins both: the sky melts as dregs and silver melt in the smelting, and it takes on colours as dyes used for painting do, now red, now yellow, blue or green. The Muyassar has it red like the rose, and like boiling oil and molten lead. As-Sa'di says it becomes, from the intensity of fear and alarm, like muhl and molten lead and the like. Each of these turns on heat, liquid and changing colour.",
            "bn": "কিছু তাফসীরকার আয়াতটিকে কোনো একক রঙের চেয়ে বরং আকাশের এক অবস্থা হিসেবে পড়েছেন। ইবন কাসীর নিজের ব্যাখ্যায় দুটো একসঙ্গে বলেন: চুল্লিতে তলানি আর রুপা যেমন গলে, আকাশও তেমনি গলবে। আর রং লাগানোর রঞ্জকের মতো তা নানা রং ধরবে, কখনো লাল, কখনো হলুদ, নীল বা সবুজ। মুয়াসসার বলে, আকাশ হবে গোলাপের মতো লাল, ফুটন্ত তেল আর গলা সিসার মতো। সা'দী বলেন, প্রচণ্ড ভয় ও অস্থিরতায় আকাশ হয়ে যাবে মুহলের মতো, গলা সিসা ও এ জাতীয় কিছুর মতো। এসব ব্যাখ্যার কেন্দ্রে আছে উত্তাপ, তরলতা আর রং বদল।"
          },
          {
            "en": "Some name the cause of the melting. Ibn Jurayj, in both Ibn Kathir and al-Baghawi, says the sky becomes like melted oil, and that is when the heat of Jahannam reaches it. Al-Qurtubi relates, as something said, that it melts with the splitting until it is red from the heat of the fire of Jahannam, and becomes like oil in its thinness and melting. And three of them, Ibn Kathir, the Muyassar and as-Sa'di, tie the picture to the same root: the severity of the matter and the terror of that Day. On that point these three agree.",
            "bn": "কেউ কেউ গলে যাওয়ার কারণও বলেন। ইবন কাসীর ও বাগাভী দুজনের বর্ণনাতেই ইবন জুরাইজ বলেন: আকাশ গলা তেলের মতো হয়ে যাবে, আর তা হবে যখন জাহান্নামের তাপ তাকে ছুঁয়ে যাবে। কুরতুবী 'বলা হয়' বলে আনেন: ফেটে যাওয়ার সঙ্গে সঙ্গে আকাশ গলতে থাকবে, জাহান্নামের আগুনের তাপে লাল হয়ে যাবে, আর পাতলা হয়ে গলে তেলের মতো হবে। তিনটি তাফসীর, ইবন কাসীর, মুয়াসসার ও সা'দী, ছবিটাকে একই মূলে বাঁধে: ব্যাপারের ভয়াবহতা আর সেই দিনের আতঙ্ক। এ জায়গায় তিনটি তাফসীরই একমত।"
          }
        ]
      },
      {
        "h": {
          "en": "A When Left Hanging",
          "bn": "উত্তরহীন 'যখন'"
        },
        "p": [
          {
            "en": "Fa-idha means and when, and a when normally waits for its then. Here the verse ends on the image, and what follows is the refrain at 55:38. None of the commentaries consulted for this verse says where the answer to that when falls, or whether it is left unstated, so this article supplies none. What they do say is that the colour belongs to the moment of splitting: al-Baghawi speaks of the sky's change of colour at its splitting, and al-Qurtubi's unnamed view has it melt with the splitting. The Muyassar runs straight from the image into the refrain.",
            "bn": "ফা ইযা মানে আর যখন। সাধারণত যখন বললে তারপর কী হবে, সেটা শোনার অপেক্ষা থাকে। এখানে আয়াতটি ছবিটা দেখিয়েই শেষ হয়, আর পরে আসে ৫৫:৩৮ আয়াতের প্রশ্নবাক্য। এ আয়াতের জন্য পড়া কোনো তাফসীরই বলেনি যখন-এর জবাব কোথায়, বা সেটা উহ্য রাখা হয়েছে কি না। তাই এ লেখাও কোনো জবাব বসিয়ে দিচ্ছে না। তাঁরা যা বলেন তা হলো, রং বদলানো ঘটবে ফেটে যাওয়ার মুহূর্তেই। বাগাভী ফেটে যাওয়ার সময় আকাশের রং বদলের কথা বলেন, আর কুরতুবীর আনা নামহীন মতে ফাটার সঙ্গে সঙ্গেই আকাশ গলতে থাকে। মুয়াসসার ছবির বর্ণনা থেকে সরাসরি প্রশ্নবাক্যে চলে যায়।"
          },
          {
            "en": "On narration, the record is short. No commentary consulted here attaches a hadith from the six major collections to this verse. Ibn Kathir cites a single narration through Imam Ahmad's chain, which could not be checked against a hadith collection for this article, so it is left out rather than quoted. No occasion of revelation is given for the verse by any of these sources. Ma'arif al-Qur'an treats this verse within a group, and its comment there speaks only to 55:35, so it is not used here.",
            "bn": "বর্ণনার দিক থেকে কথা অল্প। এখানে পড়া কোনো তাফসীর এ আয়াতের সঙ্গে ছয়টি প্রধান হাদিসগ্রন্থের কোনো হাদিস জুড়ে দেয়নি। ইবন কাসীর ইমাম আহমদের সনদে একটিমাত্র বর্ণনা আনেন। এ লেখার জন্য তা কোনো হাদিসগ্রন্থের সঙ্গে মিলিয়ে দেখা যায়নি, তাই উদ্ধৃত না করে বাদ রাখা হয়েছে। এসব সূত্রের কোনোটিই এ আয়াতের শানে নুযূল উল্লেখ করেনি। মাআরিফুল কুরআন আয়াতটিকে কয়েকটি আয়াতের দলের ভেতরে আলোচনা করেছে, তবে সেখানে তার মন্তব্য কেবল ৫৫:৩৫ আয়াত নিয়ে, তাই এখানে তা ব্যবহার হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Terror Followed by Favour",
          "bn": "ভয়ের পরেই নিয়ামতের প্রশ্ন"
        },
        "p": [
          {
            "en": "After the image, the refrain returns at 55:38: so which of the favours of your Lord will you deny? Its pattern and its address to jinn and mankind are studied at 55:13 and are not repeated here. The question in this place is narrower. Why ask about favours straight after a sky that splits, reddens and melts? A reader might expect the refrain after fruit or the creation of man, all named earlier in the surah, and not after a scene of terror.",
            "bn": "ছবির পরেই ৫৫:৩৮ আয়াতে প্রশ্নবাক্যটি ফিরে আসে: তোমরা তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? এর বারবার ফিরে আসা আর জ্বিন ও মানুষকে একসঙ্গে ডাকার আলোচনা ৫৫:১৩ আয়াতে হয়েছে, এখানে আর তা তোলা হচ্ছে না। এখানকার প্রশ্নটা আরও নির্দিষ্ট। আকাশ ফাটবে, লাল হবে, গলে যাবে, আর ঠিক তার পরেই নিয়ামতের কথা কেন? পাঠক হয়তো আশা করবেন, এ প্রশ্ন আসবে ফলমূল বা মানুষ সৃষ্টির মতো নিয়ামতের পরে, যেগুলোর কথা সূরার শুরুর দিকে এসেছে, ভয়ের দৃশ্যের পরে নয়।"
          },
          {
            "en": "Ibn Kathir's abridged English commentary, which treats 55:37 to 55:45 together, gives an answer for the whole group. Punishing the criminals and favouring the people of taqwa, it says, are both from Allah's grace, mercy, justice and kindness to His creatures. His warnings of punishment, such as those in these verses, should move every creature to leave shirk and disobedience, and that is why He reminds them of this favour. On this reading, being told plainly of the Day before it comes is itself among the gifts the refrain counts.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৫৫:৩৭ থেকে ৫৫:৪৫ পর্যন্ত আয়াত একসঙ্গে আলোচনা করে, আর পুরো দলের জন্য একটি জবাব দেয়। সেখানে বলা হয়েছে, অপরাধীদের শাস্তি দেওয়া আর মুত্তাকীদের প্রতি অনুগ্রহ করা, দুটোই সৃষ্টির প্রতি আল্লাহর দয়া, রহমত, ন্যায় ও মমতা থেকে আসে। এসব আয়াতে যে শাস্তির সতর্কবাণী আছে, তা প্রত্যেক সৃষ্টিকে শিরক আর নাফরমানি ছেড়ে দিতে উদ্বুদ্ধ করার কথা। আর এ কারণেই আল্লাহ তাদের এ নিয়ামতের কথা মনে করিয়ে দেন। এ পাঠ অনুযায়ী, দিনটি আসার আগেই সে সম্পর্কে স্পষ্ট করে জানিয়ে দেওয়াও প্রশ্নবাক্যের গোনা নিয়ামতগুলোর একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Colours, One Warning",
          "bn": "রং অনেক, সতর্কবাণী এক"
        },
        "p": [
          {
            "en": "It helps to see how wide the reports run. Ibn Abbas alone is quoted three ways by three chains: red tanned hide, through ad-Dahhak; the ward horse, through Qabus; and simply that its colour changes, through al-Awfi. Qatada is quoted with green giving way to redness. Rose, horse, oil, dregs, hide and molten lead all appear in the texts read for this verse. Except for at-Tabari's preference for oil, none of these commentators sets the readings in rank, and this article does not either. The two translations on this site have each chosen from within that range.",
            "bn": "বর্ণনাগুলো কত দূর ছড়িয়ে আছে, সেটা দেখা কাজে দেয়। শুধু ইবন আব্বাস (রাঃ) থেকেই তিনটি সনদে তিন রকম কথা এসেছে। দাহহাকের সূত্রে লাল পাকা চামড়া, কাবূসের সূত্রে ওয়ারদ ঘোড়া, আর আওফীর সূত্রে শুধু এটুকু যে আকাশের রং বদলে যাবে। কাতাদা থেকে এসেছে সবুজ বদলে লাল হওয়ার কথা। গোলাপ, ঘোড়া, তেল, তলানি, চামড়া, গলা সিসা, সবই এ আয়াতের জন্য পড়া তাফসীরে পাওয়া যায়। তেলের পক্ষে তাবারীর অগ্রাধিকার ছাড়া এসব তাফসীরকারের কেউ মতগুলোকে ক্রমে সাজাননি, এ লেখাও সাজাচ্ছে না। এ সাইটের দুই অনুবাদ এই পরিসরের ভেতর থেকেই নিজ নিজ অর্থ বেছে নিয়েছে।"
          },
          {
            "en": "What the readings share is plainer than what divides them. The disagreement is about the picture: a flower, a coat, a liquid, a hide. It is not about the event. Each of these commentators has the sky that now stands over us split, change and lose its familiar face on that Day. A reader can carry the open question honestly and still receive the whole of the warning. Arguing over the shade while ignoring what it announces would miss their shared point.",
            "bn": "মতগুলো কোথায় আলাদা, তার চেয়ে কোথায় মেলে, সেটাই বেশি স্পষ্ট। মতভেদ ছবি নিয়ে: ফুল, ঘোড়ার গায়ের রং, তরল, নাকি চামড়া। ঘটনা নিয়ে কোনো মতভেদ নেই। এসব তাফসীরকারের প্রত্যেকের কাছেই আজ মাথার উপর যে আকাশ দাঁড়িয়ে আছে, সেদিন তা ফাটবে, বদলাবে, তার চেনা চেহারা হারাবে। খোলা প্রশ্নটা সততার সঙ্গে খোলা রেখেও পাঠক পুরো সতর্কবাণীটা গ্রহণ করতে পারেন। রঙের সূক্ষ্ম তফাত নিয়ে তর্কে মেতে রংটা কী ঘোষণা করছে তা ভুলে গেলে, সবার মিলিত কথাটাই হারিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Under Tonight's Sky",
          "bn": "আজ রাতের আকাশের নিচে"
        },
        "p": [
          {
            "en": "Qatada's words in at-Tabari begin with the sky as you see it today. That is where the verse meets its reader. Few things feel more settled than the sky; it was there over our grandparents and will be there, we assume, over our grandchildren. The verse takes the most stable thing in ordinary sight and shows it giving way. If the sky can split and change colour, then health, wealth, position and the plans we treat as fixed are held far more loosely than they look. The verse invites honest stock-taking, not despair.",
            "bn": "তাবারীর বর্ণনায় কাতাদার কথা শুরু হয় আজকের আকাশ দিয়ে, যেমনটা তোমরা দেখছ। পাঠকের সঙ্গে আয়াতের যোগটা ঠিক এখানেই। আকাশের চেয়ে স্থির কিছু খুব কমই মনে হয়। দাদা-দাদির মাথার উপর ছিল, আমরা ধরে নিই নাতি-নাতনির মাথার উপরও থাকবে। চোখে দেখা সবচেয়ে স্থির জিনিসটাকেই আয়াতটি ভেঙে পড়তে দেখায়। আকাশই যদি ফাটতে আর রং বদলাতে পারে, তাহলে সুস্থতা, সম্পদ, পদমর্যাদা আর যেসব পরিকল্পনাকে আমরা পাকা ভেবে বসে আছি, সেগুলোর বাঁধন দেখতে যেমন, আসলে তার চেয়ে অনেক আলগা। এ আয়াত হতাশ হতে বলে না, বলে নিজের হিসাবটা সৎভাবে মিলিয়ে নিতে।"
          },
          {
            "en": "As-Sa'di ties the sky's change to intense fear and alarm, and Ibn Kathir to the severity of the matter and the terror of that Day. Fear is a fitting response here, so long as it turns the heart towards Allah and not away from Him. A practical answer is to name one sin to leave and one duty to restore, and to do it now, while the sky still keeps its familiar face. Repentance delayed until the scene arrives is repentance delayed too long; the time to act on the warning is before it comes true.",
            "bn": "সা'দী আকাশের এ পরিবর্তনকে প্রচণ্ড ভয় ও অস্থিরতার সঙ্গে জুড়েছেন, আর ইবন কাসীর জুড়েছেন ব্যাপারের ভয়াবহতা ও সেই দিনের আতঙ্কের সঙ্গে। এখানে ভয় পাওয়াটাই স্বাভাবিক, যদি সেই ভয় অন্তরকে আল্লাহর দিকে ফেরায়, তাঁর থেকে দূরে না সরায়। বাস্তবে এর জবাব হতে পারে এমন: একটা গুনাহ ঠিক করুন যা ছেড়ে দেবেন, আর একটা দায়িত্ব যা আবার শুরু করবেন। আর সেটা করুন এখনই, আকাশ তার চেনা চেহারায় থাকতে থাকতেই। দৃশ্যটা সামনে আসা পর্যন্ত তওবা ফেলে রাখলে অনেক দেরি হয়ে যায়। সতর্কবাণী সত্য হয়ে দেখা দেওয়ার আগেই তা মেনে আমল করার সময়।"
          },
          {
            "en": "Then let the refrain do its work. If a plain warning given in advance is a favour, as Ibn Kathir's English commentary on this group of verses says, the right answer to which favour will you deny is thanks, and thanks shows in obedience. Whatever colour the commentators pictured, the sky will not hold its shape forever, and He who warned of it is He whose mercy can still be sought.",
            "bn": "তারপর প্রশ্নবাক্যটিকে তার কাজ করতে দিন। এই আয়াতগুলোর দল নিয়ে ইবন কাসীরের ইংরেজি তাফসীর যেমন বলে, আগেভাগে স্পষ্ট সতর্ক করাও যদি নিয়ামত হয়, তবে কোন নিয়ামত অস্বীকার করবে, এ প্রশ্নের সঠিক জবাব হলো শোকর। আর শোকর দেখা যায় আনুগত্যে। তাফসীরকারেরা যে রঙের ছবিই আঁকুন, আকাশ চিরকাল এই আকারে থাকবে না। আর যিনি এ বিষয়ে সতর্ক করেছেন, তাঁর রহমত এখনো চাওয়া যায়।"
          }
        ]
      }
    ]
  },
  "55:46-47": {
    "sections": [
      {
        "h": {
          "en": "Where the Turn Happens",
          "bn": "যেখানে মোড় ঘোরে"
        },
        "p": [
          {
            "en": "The verses just before this one are not gentle. 55:43 points and says: this is Jahannam, which the criminals used to deny. 55:44 has them circulating between it and scalding water heated to the utmost. 55:45 sounds the refrain. Then 55:46 turns to the other side: wa liman khafa maqama rabbihi jannatan — and for whoever feared the standing before his Lord, two gardens.",
            "bn": "এর ঠিক আগের আয়াতগুলো মোটেও কোমল নয়। 55:43 আয়াত যেন আঙুল তুলে দেখায়: এই সেই জাহান্নাম, অপরাধীরা যাকে অস্বীকার করত। 55:44 আয়াতে তারা ঘুরপাক খায় জাহান্নাম আর টগবগে ফুটন্ত পানির মাঝে। 55:45 আয়াতে আবার বেজে ওঠে সেই ধুয়া। তারপর 55:46 আয়াত মুখ ফেরায় অন্য দিকে: 'ওয়া লিমান খাফা মাকামা রাব্বিহী জান্নাতান', আর যে তার রবের সামনে দাঁড়ানোকে ভয় করেছে, তার জন্য আছে দুটি বাগান।"
          },
          {
            "en": "The whole verse is five words of Arabic, and it contains both the condition and its reward. Everything that follows to the end of the surah is the description of what those five words bought. Ar-Rahman has been alternating gifts and warnings throughout; the reward passage opening here is the longest continuous stretch of description anywhere in it.",
            "bn": "পুরো আয়াতটি আরবিতে মাত্র পাঁচ শব্দের, অথচ এর ভেতরেই আছে শর্ত, আছে পুরস্কারও। এরপর সূরার শেষ পর্যন্ত যা আসে, সবই ওই পাঁচ শব্দের বিনিময়ে পাওয়া জিনিসের বর্ণনা। আর-রাহমান সূরা শুরু থেকেই নিয়ামত আর সতর্কবাণী পালা করে এনেছে। এখানে পুরস্কারের যে অংশ শুরু হলো, গোটা সূরায় এর চেয়ে লম্বা একটানা বর্ণনা আর নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Standing Before His Lord",
          "bn": "রবের সামনে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Maqam is a noun of place and of standing, and here it is joined to rabbihi, his Lord. Ibn Kathir reads khafa maqama rabbihi as fearing the standing before his Lord on the Day of Resurrection, and he pairs it at once with 79:40, which uses the identical phrase and then adds what the fear does: and restrained the soul from desire.",
            "bn": "'মাকাম' এমন বিশেষ্য, যা স্থানও বোঝায়, দাঁড়ানোও বোঝায়। এখানে তা জুড়েছে 'রাব্বিহী', অর্থাৎ তার রবের সঙ্গে। ইবনে কাসীর 'খাফা মাকামা রাব্বিহী'-র অর্থ করেন: কিয়ামতের দিন রবের সামনে দাঁড়াতে হবে, সেই ভয়। আর সঙ্গে সঙ্গেই এর পাশে রাখেন 79:40 আয়াত। সেখানে হুবহু একই শব্দগুচ্ছ আছে, তারপর বলা আছে এই ভয় কী করে: আর সে নিজের নফসকে খেয়ালখুশি থেকে ফিরিয়ে রেখেছে।"
          },
          {
            "en": "79:41 then completes the sentence: so indeed Paradise is the refuge. The Quran states the same condition twice, in two surahs, and attaches a garden to it both times. That repetition is the strongest gloss available on our verse. What is being rewarded is not anxiety and not a temperament; it is a fear that reached as far as the hand and stopped it.",
            "bn": "এরপর 79:41 আয়াত বাক্যটি শেষ করে: তবে জান্নাতই হবে তার ঠিকানা। একই শর্ত কুরআন দুবার বলেছে, দুটি সূরায়, আর দুবারই তার সঙ্গে বাগান জুড়ে দিয়েছে। আমাদের আয়াত বোঝার জন্য এই পুনরাবৃত্তিই সবচেয়ে জোরালো ব্যাখ্যা। প্রতিদান মিলছে দুশ্চিন্তার জন্য নয়, কারও স্বভাবের জন্যও নয়। প্রতিদান সেই ভয়ের, যা হাত পর্যন্ত পৌঁছে হাতটাকে থামিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man, Two Gardens, Then Two More",
          "bn": "একজন মানুষ, দুটি বাগান, তারপর আরও দুটি"
        },
        "p": [
          {
            "en": "Liman is singular: for whoever, one person. Jannatan is dual: two gardens. One man, two of them, and the Arabic does not bury the number inside a plural. Then, after the descriptions have run their course, 55:62 adds wa min dunihima jannatan — and besides those two, two gardens. Four in all, and it is the Arabic duals that do the counting.",
            "bn": "'লিমান' একবচন: যে-ই হোক, একজন মানুষ। 'জান্নাতান' দ্বিবচন: দুটি বাগান। মানুষ একজন, বাগান দুটি। আরবি এখানে সংখ্যাটা বহুবচনের আড়ালে ঢেকে রাখেনি। তারপর বর্ণনা শেষ হলে 55:62 আয়াত যোগ করে: 'ওয়া মিন দূনিহিমা জান্নাতান', আর এ দুটি ছাড়া আরও দুটি বাগান। সব মিলিয়ে চারটি, আর গুনে দিচ্ছে আরবির দ্বিবচনগুলোই।"
          },
          {
            "en": "The two pairs are described differently. The first has two springs flowing at 55:50 and of every fruit two kinds at 55:52; the second has two springs gushing at 55:66 and fruit, date-palms and pomegranates at 55:68. Min dunihima is read by the mufassirun as below those two in rank. The reward is graded, and the grading shows in the vocabulary rather than being announced.",
            "bn": "দুই জোড়ার বর্ণনা এক রকম নয়। প্রথম জোড়ায় আছে 55:50 আয়াতে দুটি বহমান ঝর্ণা, আর 55:52 আয়াতে প্রতিটি ফলের দুই রকম। দ্বিতীয় জোড়ায় 55:66 আয়াতে দুটি উথলে ওঠা ঝর্ণা, আর 55:68 আয়াতে ফল, খেজুরগাছ ও আনার। মুফাসসিররা 'মিন দূনিহিমা'-র অর্থ করেন: মর্যাদায় ওই দুটির চেয়ে নিচে। পুরস্কারের স্তর আছে, তবে তা ঘোষণা করে বলা হয়নি; শব্দের বাছাইয়েই তা ধরা পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver and Gold",
          "bn": "রুপা ও সোনা"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Musa al-Ash'ari (RA) that the Prophet ﷺ said: two gardens of silver, their vessels and all that is in them, and two gardens of gold, their vessels and all that is in them; and there is nothing between the people and their looking upon their Lord except the cloak of pride upon His Face, in the Garden of Adn.",
            "bn": "ইমাম বুখারী আবু মূসা আল-আশ'আরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দুটি বাগান রুপার, তার পাত্র আর তাতে যা কিছু আছে সবই রুপার। আর দুটি বাগান সোনার, তার পাত্র আর তাতে যা কিছু আছে সবই সোনার। জান্নাতে আদনে লোকদের আর তাদের রবের দিকে তাকানোর মাঝে তাঁর চেহারার উপর বড়ত্বের চাদর ছাড়া আর কোনো আড়াল থাকবে না।"
          },
          {
            "en": "That hadith is the classical key to the four gardens, and it also places the ceiling somewhere other than the gardens themselves: what is withheld is the sight of Him, and what withholds it is named. Ibn Kathir adds a point easy to miss — the verse says liman, whoever, without restriction, so the promise reaches the believers among the jinn too, which is what the dual refrain has assumed throughout.",
            "bn": "চারটি বাগান বোঝার জন্য এই হাদিসই পুরোনো আলেমদের চাবি। হাদিসটি আরও দেখায়, সবচেয়ে বড় প্রাপ্তি বাগানের ভেতরে নয়, অন্যখানে। যা আড়ালে রাখা হয়েছে তা হলো তাঁকে দেখা, আর কী আড়াল করে রেখেছে, তার নামও বলে দেওয়া হয়েছে। ইবনে কাসীর এমন একটি কথা যোগ করেন, যা সহজে চোখ এড়িয়ে যায়। আয়াত বলেছে 'লিমান', অর্থাৎ যে-ই হোক, কোনো সীমা না টেনে। তাই এ ওয়াদা জিনদের মধ্যে যারা মুমিন, তাদের জন্যও। দ্বিবচনের ধুয়াটি শুরু থেকে এ কথাই ধরে নিয়ে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question in Between",
          "bn": "মাঝখানের প্রশ্নটি"
        },
        "p": [
          {
            "en": "55:47 is the refrain, and its position here is exact. It does not fall after the gardens have been described, because 55:48 has not yet said a word about their branches. It falls between the promise and its description, so the favour the hearer is asked about is the promise itself — that such a thing was pledged at all, to someone who has not yet seen any of it.",
            "bn": "55:47 আয়াতটিই সেই ধুয়া, আর এখানে এর জায়গাটা একেবারে মাপা। বাগানের বর্ণনা শেষ হওয়ার পরে এটি আসেনি, কারণ 55:48 আয়াত তখনো বাগানের ডালপালা নিয়ে একটি কথাও বলেনি। এটি এসেছে ওয়াদা আর তার বর্ণনার মাঝখানে। তাই শ্রোতাকে যে নিয়ামতের কথা জিজ্ঞেস করা হচ্ছে, তা স্বয়ং ওয়াদাটিই: এমন কিছুর কথা আদৌ দেওয়া হয়েছে, তাও এমন একজনকে, যে এখনো এর কিছুই দেখেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fear That Builds It",
          "bn": "যে ভয়ে বাগান গড়ে ওঠে"
        },
        "p": [
          {
            "en": "The practical content of this verse is a single mechanism: a fear of one specific moment, applied at the moment of a decision. 79:40 supplies the test — did the fear restrain the soul from what it wanted? A fear that changes nothing is not what has been described here. A fear that stops a hand is, whether or not any particular feeling accompanied it.",
            "bn": "আমলের দিক থেকে এ আয়াতের কথা একটাই: একটি নির্দিষ্ট মুহূর্তের ভয়, যা কাজে লাগে সিদ্ধান্ত নেওয়ার মুহূর্তে। যাচাইয়ের মাপকাঠি দেয় 79:40 আয়াত: ভয়টা কি নফসকে তার চাওয়া জিনিস থেকে ফিরিয়ে রেখেছে? যে ভয় কিছুই বদলায় না, এখানে তার কথা বলা হচ্ছে না। কথা সেই ভয়ের, যা হাতটা থামিয়ে দেয়, তার সঙ্গে কোনো বিশেষ অনুভূতি থাকুক বা না থাকুক।"
          },
          {
            "en": "It is worth noticing what the verse does not require. Not scholarship, not a public role, not one great deed; just a person who took the standing seriously enough to let it govern him. That is why the reward is stated before any description begins. The gardens are enormous and the entry condition is small, and the surah puts them in that order on purpose.",
            "bn": "খেয়াল করার মতো, আয়াতটি কী কী চায় না। পাণ্ডিত্য চায় না, সমাজে কোনো পদ চায় না, বিরাট কোনো কীর্তিও চায় না। চায় শুধু এমন একজন মানুষ, যে রবের সামনে দাঁড়ানোর কথাটা এতটা গুরুত্ব দিয়ে নিয়েছে যে সেটাই তাকে চালায়। এ কারণেই কোনো বর্ণনা শুরুর আগেই পুরস্কারের কথা বলে দেওয়া হয়েছে। বাগানগুলো বিশাল, ঢোকার শর্ত ছোট, আর সূরাটি জেনেবুঝেই এগুলো এই ক্রমে রেখেছে।"
          }
        ]
      }
    ]
  },
  "55:54": {
    "sections": [
      {
        "h": {
          "en": "The Residents Come Into View",
          "bn": "এবার দেখা দেন অধিবাসীরা"
        },
        "p": [
          {
            "en": "Since 55:46 the surah has described two gardens promised to whoever fears the standing before his Lord: their spreading branches in 55:48, two flowing springs in 55:50, two kinds of every fruit in 55:52, each followed by the refrain. From 55:48 on, the description has dwelt on the gardens alone. This verse is the first to show the people in them, and it shows them at rest: muttaki'ina, reclining, on couches whose linings are of brocade, with the fruit of the two gardens hanging near.",
            "bn": "৫৫:৪৬ থেকে সূরাটি সেই দুই বাগানের বর্ণনা দিয়ে আসছে, যার ওয়াদা রবের সামনে দাঁড়ানোকে ভয় করা মানুষের জন্য। ৫৫:৪৮ আয়াতে তাদের ছড়ানো ডালপালা, ৫৫:৫০ আয়াতে দুটি বহমান ঝর্ণা, ৫৫:৫২ আয়াতে প্রতিটি ফলের দুই প্রকার। প্রতিটির পরে এসেছে সেই প্রশ্নবাক্য। ৫৫:৪৮ থেকে বর্ণনা ছিল শুধু বাগানেরই। এই আয়াতেই প্রথম বাগানের মানুষগুলো সামনে আসেন, আর আসেন বিশ্রামের অবস্থায়: মুত্তাকিঈনা, হেলান দিয়ে বসা, এমন শয্যায় যার আস্তর পুরু রেশমের। আর দুই বাগানের ফল ঝুলে আছে হাতের কাছে।"
          },
          {
            "en": "Who are the ones reclining? At-Tabari answers through the grammar. Muttaki'in is in the accusative as a hal, a description of state, drawn from the meaning of what came before: the passage reports that whoever feared the standing before his Lord is in bliss, enjoying himself in the two gardens, and the verse goes on to describe how he enjoys it. Al-Qurtubi also reads the word as a hal. So the reclining belongs to the same people promised in 55:46, which is where that promise and its condition are discussed.",
            "bn": "হেলান দিয়ে কারা বসে আছেন? তাবারী উত্তর দেন ব্যাকরণ দিয়ে। মুত্তাকিঈন শব্দটি হাল, অর্থাৎ অবস্থার বিবরণ, তাই এর শেষে নসব। তাঁর মতে এই হাল এসেছে আগের কথার অর্থ থেকে। আগের অংশ জানাচ্ছিল, যে রবের সামনে দাঁড়ানোকে ভয় করে সে আছে নি‘মাত আর আনন্দে, দুই বাগানে সুখ ভোগ করছে। আয়াতটি এবার বলছে, সে সুখ কেমন। কুরতুবীও শব্দটিকে হাল হিসেবে পড়েন। তাই হেলান দিয়ে বসা মানুষগুলো তাঁরাই, যাঁদের ওয়াদা দেওয়া হয়েছে ৫৫:৪৬ আয়াতে। সেই ওয়াদা আর তার শর্তের আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Lying Back or Sitting Easy",
          "bn": "শুয়ে, নাকি আরাম করে বসে"
        },
        "p": [
          {
            "en": "What posture is ittika'? Ibn Kathir says that here it means lying down, al-idtija', and adds under the words it is said that it means sitting cross-legged. As-Sa'di describes it as sitting in ease, settled and at rest, like kings sitting on their thrones. The two descriptions are not far apart: both picture a body that has nothing left to do and nowhere it has to go. The Muyassar keeps to the plain wording: reclining on couches lined with thick brocade, and the fruit of the two gardens near them.",
            "bn": "ইত্তিকা মানে কোন ভঙ্গি? ইবন কাসীর বলেন, এখানে এর অর্থ শুয়ে থাকা, আল-ইদতিজা। তারপর 'বলা হয়' কথাটি জুড়ে আনেন আরেকটি অর্থ: আসন করে বসা। সা'দী এর বর্ণনা দেন এভাবে: স্থির হয়ে, নিশ্চিন্তে, আরামে বসা, যেমন বাদশাহরা সিংহাসনে বসেন। দুই বর্ণনার দূরত্ব বেশি নয়। দুটিতেই এমন একজনের ছবি, যার আর কোনো কাজ বাকি নেই, কোথাও যাওয়ার তাড়াও নেই। মুয়াসসার আয়াতের সাদা অর্থেই থামে: পুরু রেশমের আস্তর দেওয়া শয্যায় হেলান দিয়ে বসা, আর দুই বাগানের ফল তাদের কাছে।"
          },
          {
            "en": "Furush is the plural of firash, a bed or spread, as al-Qurtubi and al-Baghawi both note. Al-Qurtubi records that Abu Haywah read it fursh, with the middle letter silent. The word is general: it names what one lies or sits on without fixing its shape. The verse spends no words on the frame of these couches, their height or their number. Its one detail is a surprising one, because it describes the part of the couch that nobody sees.",
            "bn": "ফুরুশ শব্দটি ফিরাশের বহুবচন, অর্থাৎ বিছানা বা শয্যা। কুরতুবী আর বাগাভী দুজনেই কথাটি উল্লেখ করেন। কুরতুবী আরও জানান, আবূ হাইওয়া শব্দটি পড়েছেন ফুরশ, মাঝের অক্ষরে সাকিন দিয়ে। শব্দটি সাধারণ। যার উপর শোয়া বা বসা হয় তাকেই বোঝায়, আকার নির্দিষ্ট করে না। এই শয্যার কাঠামো, উচ্চতা বা সংখ্যা নিয়ে আয়াত একটি শব্দও খরচ করে না। এর একমাত্র বিবরণটি বরং চমকে দেওয়ার মতো। কারণ সে বিবরণ শয্যার এমন অংশের, যা কেউ দেখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Brocade Beneath",
          "bn": "নিচের দিকেও রেশম"
        },
        "p": [
          {
            "en": "Bata'in is the plural of bitana, the lining. Al-Qurtubi and al-Baghawi define it as what lies under the zihara, the outer face; al-Baghawi cites az-Zajjaj that it is the side next to the ground. Istabraq is thick brocade. Ibn Kathir gives this from Ikrimah, ad-Dahhak and Qatadah, and at-Tabari says that among the Arabs istabraq meant brocade that was thick and coarse. He reports that Salim ibn Abdullah asked Yahya ibn Abi Ishaq what istabraq was, and Yahya answered: what is thick and coarse of brocade.",
            "bn": "বাতাইন শব্দটি বিতানার বহুবচন, মানে আস্তর। কুরতুবী আর বাগাভী এর সংজ্ঞা দেন: যা যাহারা, অর্থাৎ বাইরের দিকের নিচে থাকে। বাগাভী যাজ্জাজের কথা আনেন যে বিতানা মাটির দিকের অংশ। ইসতাবরাক মানে পুরু রেশমি কাপড়। ইবন কাসীর এ অর্থ আনেন ইকরিমা, দাহহাক ও কাতাদা থেকে। তাবারী বলেন, আরবদের কাছে ইসতাবরাক ছিল মোটা আর খসখসে রেশমি কাপড়। তিনি বর্ণনা করেন, সালিম ইবন আবদুল্লাহ ইয়াহইয়া ইবন আবী ইসহাককে জিজ্ঞেস করেছিলেন ইসতাবরাক কী। ইয়াহইয়া উত্তর দিয়েছিলেন: রেশমি কাপড়ের মধ্যে যা মোটা আর খসখসে।"
          },
          {
            "en": "Other descriptions add colour. Ibn Kathir reports Abu Imran al-Jawni saying it is brocade worked with gold. At-Tabari mentions a Basran scholar of Arabic who called istabraq a fabric neither as dense as brocade nor as light as the cloth called al-'araqa. As-Sa'di calls it the finest and most splendid of silk. Whatever the exact weave, all of them are describing a costly cloth, and the verse has placed that cloth on the hidden side, the side al-Qurtubi and as-Sa'di both describe as facing the ground.",
            "bn": "অন্য বর্ণনায় আরও রং যোগ হয়। ইবন কাসীর আবূ ইমরান আল-জাওনীর কথা আনেন: সোনার কাজ করা রেশমি কাপড়। তাবারী বসরার এক আরবি ভাষাবিদের মত উল্লেখ করেন, যাঁর মতে ইসতাবরাক এমন কাপড়, যা রেশমি কাপড়ের মতো ঘন নয়, আবার 'আরাকা' নামের কাপড়ের মতো পাতলাও নয়। সা'দী একে বলেন রেশমের মধ্যে সবচেয়ে সুন্দর আর সবচেয়ে দামি। বুনন যেমনই হোক, সবাই দামি এক কাপড়ের কথাই বলছেন। আর আয়াত সেই কাপড় রেখেছে লুকানো দিকে। কুরতুবী আর সা'দী দুজনেই বলেন, সে দিকটা মাটির দিকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Then What of the Outer Face?",
          "bn": "তবে উপরের দিকটা কেমন?"
        },
        "p": [
          {
            "en": "The early reaction to this detail is preserved with its chains. Ibn Kathir, citing Ibn Abi Hatim, gives it through Abu Ishaq from Hubayra ibn Yarim from Abdullah ibn Mas'ud (RA): these are the linings, so how would it be if you saw the outer sides? At-Tabari has it from Ibn Mas'ud in the form: you have been told of the linings, so how would it be if you were told of the outer sides? In another of his chains the remark stops at Hubayra: these are the linings, so what do you think of the outer sides?",
            "bn": "এই বিবরণ শুনে আগের যুগের মানুষ কী বলেছিলেন, তা সনদসহ সংরক্ষিত আছে। ইবন কাসীর ইবন আবী হাতিমের বরাতে আনেন: আবূ ইসহাক, হুবায়রা ইবন ইয়ারীম থেকে, তিনি আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে। তিনি বলেছেন, এ তো আস্তরের কথা, উপরের দিকগুলো দেখলে কেমন হতো? তাবারী ইবন মাসউদ (রাঃ) থেকে আনেন এই শব্দে: আস্তরের খবর তোমাদের দেওয়া হলো, উপরের দিকের খবর দেওয়া হলে কেমন হতো? তাবারীর আরেক সনদে কথাটি থেমে যায় হুবায়রার কাছে: এ তো আস্তর, তবে উপরের দিক সম্পর্কে তোমাদের কী ধারণা?"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi attribute the remark to Ibn Mas'ud and Abu Hurayra (RA) together, without giving chains. As-Sa'di makes the same inference in his own voice: the linings, the side next to the ground, are of the finest silk, so what of the outer sides that touch their skin? Ibn Kathir names the device at work. He calls it tanbih bil-adna 'ala al-a'la, drawing attention to the higher by mentioning the lower: the nobility of the outer face is signalled through the nobility of the lining.",
            "bn": "কুরতুবী আর বাগাভী কথাটি একসঙ্গে ইবন মাসউদ ও আবু হুরায়রা (রাঃ)-এর নামে আনেন, সনদ উল্লেখ না করে। সা'দী একই সিদ্ধান্ত টানেন নিজের ভাষায়। মাটির দিকের আস্তরই যদি সবচেয়ে সুন্দর রেশমের হয়, তবে উপরের যে দিক তাদের শরীর ছুঁয়ে থাকে, তা কেমন হবে? ইবন কাসীর এই কৌশলের একটা নামও দেন: তানবীহ বিল-আদনা আলাল-আ'লা। মানে নিচেরটা বলে উপরেরটার দিকে ইশারা করা। আস্তরের মর্যাদা দেখিয়ে বাইরের দিকের মর্যাদা বুঝিয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Light, Mercy, or Unknown",
          "bn": "নূর, রহমত, নাকি অজানা"
        },
        "p": [
          {
            "en": "Some early figures ventured an answer. Ibn Kathir, again from Ibn Abi Hatim, reports Malik ibn Dinar: its linings are of brocade and its outer sides of light. Sufyan ath-Thawri or Sharik, the narrator was unsure which: its outer sides are of solid light. Al-Qasim ibn Muhammad: its outer sides are of mercy. Al-Qurtubi gives solid light from al-Hasan, and al-Baghawi from Sa'id ibn Jubayr. Ibn Kathir's last report, from Abu Abdullah ash-Shami, refuses to describe at all: Allah mentioned the linings and not the outer sides, and only Allah knows what lies beneath what covers them.",
            "bn": "আগের যুগের কেউ কেউ একটা উত্তর দেওয়ার চেষ্টা করেছেন। ইবন কাসীর আবারও ইবন আবী হাতিম থেকে আনেন মালিক ইবন দীনারের কথা: আস্তর রেশমের, আর উপরের দিক নূরের। সুফিয়ান সাওরী অথবা শারীক বলেছেন, উপরের দিক জমাট নূরের। কে বলেছেন, বর্ণনাকারী নিশ্চিত নন। কাসিম ইবন মুহাম্মাদ বলেছেন, উপরের দিক রহমতের। কুরতুবী জমাট নূরের কথা আনেন আল-হাসান থেকে, আর বাগাভী আনেন সাঈদ ইবন জুবাইর থেকে। ইবন কাসীরের শেষ বর্ণনাটি আবূ আবদুল্লাহ আশ-শামীর। তিনি কোনো বর্ণনাই দেন না। আল্লাহ আস্তরের কথা বলেছেন, উপরের দিকের কথা বলেননি। আর সেগুলো যা দিয়ে ঢাকা, তার নিচে কী আছে, আল্লাহ ছাড়া কেউ জানে না।"
          },
          {
            "en": "Sa'id ibn Jubayr was asked the question directly, at-Tabari, al-Qurtubi and al-Baghawi all report: the linings are of brocade, so what are the outer sides? He answered that this is among what Allah meant by no soul knows what has been hidden for them of delight of the eyes, 32:17. Al-Qurtubi reports Ibn Abbas (RA) saying the linings were described so that your hearts would be guided towards it, while the outer sides only Allah knows; al-Baghawi's version is that nobody on earth knows what they are.",
            "bn": "সাঈদ ইবন জুবাইরকে সরাসরি প্রশ্নটা করা হয়েছিল। তাবারী, কুরতুবী আর বাগাভী তিনজনেই তা বর্ণনা করেন: আস্তর তো রেশমের, তবে উপরের দিক কী? তিনি উত্তর দিলেন, এটা সেই জিনিসের অন্তর্ভুক্ত, যার কথা আল্লাহ বলেছেন: কেউ জানে না তাদের জন্য চোখ জুড়ানো কী লুকিয়ে রাখা হয়েছে (৩২:১৭)। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: আস্তরের বর্ণনা দেওয়া হয়েছে যেন তোমাদের মন সেদিকে পথ পায়। আর উপরের দিক আল্লাহ ছাড়া কেউ জানে না। বাগাভীর বর্ণনায় কথাটি এমন: দুনিয়ার কেউ জানে না সেগুলো কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Could the Lining Be the Face?",
          "bn": "আস্তরই কি বাইরের দিক?"
        },
        "p": [
          {
            "en": "Not everyone read bata'in as the hidden side. Al-Qurtubi reports from al-Hasan, as a second view from him, that the linings are the outer faces, and says this is the view of al-Farra' and has been narrated from Qatadah. The argument is linguistic: the Arabs can call the outside a batn, and say of the sky this is its back and this is its belly, both for the side we see. At-Tabari reports the same argument from the scholars of Arabic: a lining can be an outer face and an outer face a lining, since either can be a face.",
            "bn": "সবাই বাতাইনকে লুকানো দিক হিসেবে পড়েননি। কুরতুবী আল-হাসান থেকে তাঁর দ্বিতীয় একটি মত আনেন: আস্তরগুলোই বাইরের দিক। কুরতুবী বলেন, এটা ফাররারও মত, আর কাতাদা থেকেও এমন বর্ণিত হয়েছে। যুক্তিটা ভাষার। আরবরা বাইরের দিককেও বাতন বলতে পারে। আকাশের যে দিক আমরা দেখি, তাকে তারা বলে আকাশের পিঠ, আবার বলে আকাশের পেট। তাবারীও আরবি ভাষাবিদদের কাছ থেকে একই যুক্তি আনেন। তাঁদের দাবি, আস্তর কখনো বাইরের দিক হতে পারে, বাইরের দিকও আস্তর হতে পারে, কারণ দুটোর যে কোনোটাই সামনের দিক হতে পারে।"
          },
          {
            "en": "Al-Qurtubi then records the objection. Ibn Qutayba and others rejected the reading and said this usage holds only for two equal faces, each of which faces a different group of people, like a wall standing between you and another people; that, they said, is how the sky is spoken of. Al-Qurtubi sets the two positions side by side without settling between them, and this article leaves them there too. It is worth noting only that the remark of Ibn Mas'ud (RA) and the answer of Sa'id ibn Jubayr both rest on the first reading, lining as the underside.",
            "bn": "কুরতুবী এরপর আপত্তিটাও লিখে রাখেন। ইবন কুতায়বা ও অন্যরা এই ব্যাখ্যা মানেননি। তাঁদের মতে এমন ব্যবহার চলে শুধু এমন দুটি সমান দিকের বেলায়, যার একেকটি একেক দল মানুষের দিকে মুখ করে থাকে। যেমন আপনার আর আরেক দল মানুষের মাঝখানে দাঁড়ানো একটা দেয়াল। আকাশের কথাও তাঁদের মতে এভাবেই বলা হয়। কুরতুবী দুই মত পাশাপাশি রাখেন, কোনো ফয়সালা দেন না। এই লেখাও সেভাবেই রেখে দিচ্ছে। শুধু এটুকু খেয়াল রাখার মতো: ইবন মাসউদ (রাঃ)-এর মন্তব্য আর সাঈদ ইবন জুবাইরের উত্তর, দুটোই দাঁড়িয়ে আছে প্রথম পাঠের উপর, যেখানে আস্তর মানে নিচের দিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Fruit That Bends Down",
          "bn": "যে ফল নিজেই নুয়ে আসে"
        },
        "p": [
          {
            "en": "Wa-jana al-jannatayni dan: and the jana of the two gardens is near. Al-Qurtubi and al-Baghawi define jana as whatever is gathered from trees, and al-Qurtubi notes a reading jina, with the first letter vowelled i. As-Sa'di specifies ripe fruit. Dan is the active participle of dana, to come near. At-Tabari explains the nearness by what it spares them: they do not tire themselves climbing the palms and trees to gather the fruit, but gather it sitting, without any toil.",
            "bn": "ওয়া জানাল জান্নাতাইনি দান: আর দুই বাগানের জানা কাছেই। কুরতুবী আর বাগাভী জানার সংজ্ঞা দেন: গাছ থেকে যা তোলা হয়। কুরতুবী জানান, শব্দটির আরেক পাঠ জিনা, প্রথম অক্ষরে যের দিয়ে। সা'দী নির্দিষ্ট করে বলেন, পাকা ফল। দান এসেছে দানা ক্রিয়া থেকে, যার অর্থ কাছে আসা। এই কাছে থাকার মানে তাবারী বোঝান, তারা কোন কষ্ট থেকে রেহাই পায় তা দেখিয়ে। খেজুর গাছে বা অন্য গাছে চড়ে ফল পাড়তে তাদের কষ্ট করতে হয় না। বসে বসেই ফল তুলে নেয়, কোনো খাটুনি ছাড়া।"
          },
          {
            "en": "The commentators then list the postures in which the fruit can be reached. Al-Qurtubi reports Ibn Abbas (RA): the tree comes down until the friend of Allah picks from it, standing if he wishes, sitting if he wishes, lying down if he wishes. Al-Baghawi's version of the same report names standing and sitting. As-Sa'di says the one standing, the one sitting and the one lying down all reach it, and al-Baghawi's own gloss has the one standing, sitting and sleeping. Qatadah, in at-Tabari and al-Baghawi, puts it negatively: neither distance nor thorns turn their hands back.",
            "bn": "এরপর তাফসীরকারেরা জানান, কোন কোন ভঙ্গিতে ফলের নাগাল পাওয়া যায়। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: গাছ নিচে নেমে আসে, যতক্ষণ না আল্লাহর ওলী তা থেকে ফল তুলে নেন। চাইলে দাঁড়িয়ে, চাইলে বসে, চাইলে শুয়ে। একই বর্ণনা বাগাভী যেভাবে এনেছেন, তাতে আছে দাঁড়ানো আর বসার কথা। সা'দী বলেন, যে দাঁড়িয়ে আছে, যে বসে আছে, যে শুয়ে আছে, সবাই ফলের নাগাল পায়। বাগাভীর নিজের ব্যাখ্যায় আছে দাঁড়ানো, বসা আর ঘুমন্ত মানুষের কথা। তাবারী আর বাগাভীর বর্ণনায় কাতাদা কথাটি বলেন না-বাচক ভাষায়: দূরত্ব বা কাঁটা কোনোটাই তাদের হাত ফিরিয়ে দেয় না।"
          },
          {
            "en": "Ibn Kathir says the fruit is near them, so that whenever they wish they take it, in whatever state they are in, and he sets the verse beside two others. 69:23 says its clusters are near, and 76:14 says its shade is close over them and its clusters have been made to hang low. He explains that the fruit does not hold back from whoever reaches for it, but comes down to him from its branches. The verse's own word is enough: nothing stands between the hand and the fruit.",
            "bn": "ইবন কাসীর বলেন, ফল তাদের কাছেই। যখন খুশি, যে অবস্থাতেই থাকুক, তারা তা নিয়ে নেয়। এরপর তিনি আয়াতটিকে আরও দুটি আয়াতের পাশে রাখেন। ৬৯:২৩ বলছে, তার ফলের থোকা কাছে ঝুলে থাকবে। আর ৭৬:১৪ বলছে, তার ছায়া তাদের উপর ঝুঁকে থাকবে, আর ফলের থোকা একেবারে নাগালের মধ্যে নামিয়ে দেওয়া হবে। ইবন কাসীরের ব্যাখ্যা, যে হাত বাড়ায় তার কাছ থেকে ফল নিজেকে আটকে রাখে না, বরং ডাল থেকে নেমে আসে তার দিকে। আয়াতের নিজের শব্দটাই যথেষ্ট: হাত আর ফলের মাঝে কোনো কিছু দাঁড়িয়ে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Remains Hidden",
          "bn": "যা গোপন রাখা হয়েছে"
        },
        "p": [
          {
            "en": "None of the tafsir consulted for this verse attaches a sound, sourced hadith to the furnishings or the fruit; at-Tabari and al-Qurtubi each mention a report from the Prophet ﷺ without naming a collection, and this article does not use them. The verse that Sa'id ibn Jubayr reached for, 32:17, does have one, recorded by al-Bukhari in Sahih al-Bukhari (4779) under that verse, not under ours. Abu Hurayra (RA) narrates that the Messenger of Allah ﷺ said:",
            "bn": "এ আয়াতের যেসব তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই শয্যা বা ফল নিয়ে সূত্রসহ কোনো সহীহ হাদিস আনেনি। তাবারী আর কুরতুবী দুজনেই নবী ﷺ থেকে একটি করে বর্ণনা উল্লেখ করেন, কিন্তু কোনো হাদিসগ্রন্থের নাম দেন না। এ প্রবন্ধে সেগুলো নেওয়া হয়নি। তবে সাঈদ ইবন জুবাইর যে আয়াতের দিকে ইশারা করেছিলেন, সেই ৩২:১৭ আয়াতের সঙ্গে একটি হাদিস আছে। ইমাম বুখারী তা এনেছেন সহীহ বুখারীতে (৪৭৭৯), ওই আয়াতের অধীনে, আমাদের আয়াতের অধীনে নয়। আবু হুরায়রা (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন:"
          },
          {
            "en": "\"Allah said, 'I have prepared for my pious worshipers such things as no eye has ever seen, no ear has ever heard of, and nobody has ever thought of.'\" Abu Hurayra added: if you wish you can read, 'No soul knows what is kept hidden (in reserve) for them of joy as reward for what they used to do.' The narration is general, about all that is prepared in Paradise, and it is not attached to 55:54. It does fit the restraint the early answers showed. A lining is described; the rest is left to that promise.",
            "bn": "\"আল্লাহ বলেছেন: আমি আমার নেক বান্দাদের জন্য এমন জিনিস তৈরি করে রেখেছি, যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের মনে কখনো কল্পনাও আসেনি।\" আবু হুরায়রা (রাঃ) যোগ করলেন: চাইলে পড়ে নাও, কেউ জানে না তাদের আমলের প্রতিদান হিসেবে চোখ জুড়ানো কী লুকিয়ে রাখা হয়েছে। বর্ণনাটি সাধারণ, জান্নাতে যা কিছু প্রস্তুত আছে তার সবকিছু নিয়ে। ৫৫:৫৪ আয়াতের সঙ্গে এটি যুক্ত নয়। তবে আগের যুগের উত্তরগুলোতে যে সংযম ছিল, তার সঙ্গে এর মিল আছে। একটি আস্তরের বর্ণনা দেওয়া হলো, বাকিটা ছেড়ে দেওয়া হলো এই ওয়াদার হাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Rest That Has Been Earned",
          "bn": "খাটুনির পরের বিশ্রাম"
        },
        "p": [
          {
            "en": "Everything in this verse is ease: a body leaning back, a cloth so fine it is wasted on the underside, fruit that comes down to the hand. The ease is not offered to everyone. It is the reward of the man described in 55:46, whose fear of the standing before his Lord cost him something in this life. The verse does not dwell on that cost, but its picture is the opposite of it: here there is climbing and thorns, there neither distance nor thorns turn the hand back.",
            "bn": "এই আয়াতের সবটাই আরাম। একটা শরীর হেলান দিয়ে আছে। কাপড় এত মিহি যে নিচের দিকে লাগানো যেন অপচয়। আর ফল নিজেই নেমে আসে হাতের কাছে। এ আরাম সবার জন্য নয়। এটা ৫৫:৪৬ আয়াতে বর্ণিত সেই মানুষের প্রতিদান, রবের সামনে দাঁড়ানোর ভয় যাকে দুনিয়াতে কিছু না কিছু ছাড়তে বাধ্য করেছে। সেই ত্যাগ নিয়ে আয়াত কিছু বলে না, কিন্তু আয়াতের ছবিটা সেই ত্যাগের ঠিক উল্টো। দুনিয়াতে গাছে চড়তে হয়, কাঁটা বিঁধে। সেখানে দূরত্ব বা কাঁটা কিছুই হাত ফিরিয়ে দেয় না।"
          },
          {
            "en": "Two practical lines follow. The first is to accept the half-told promise as the early readers did, with eagerness rather than with demands for detail: Ibn Abbas (RA), in al-Qurtubi's report, said the linings were described so that hearts would be guided towards it. The second is to choose where to spend effort. Rest here is real and lawful, but it does not last; the verse places lasting rest after the fear has done its work. The surah goes on to the people who share these couches and then to a second pair of gardens, each with its own verse.",
            "bn": "এ থেকে দুটি বাস্তব শিক্ষা পাওয়া যায়। প্রথমটি হলো, অর্ধেক বলা এই ওয়াদাকে সেভাবে গ্রহণ করা, যেভাবে আগের যুগের মানুষেরা করেছিলেন: আগ্রহ নিয়ে, খুঁটিনাটির দাবি না তুলে। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেছেন, আস্তরের বর্ণনা দেওয়া হয়েছে, যাতে মন সেদিকে পথ খুঁজে পায়। দ্বিতীয়টি হলো, খাটুনি কোথায় খরচ করবেন তা বেছে নেওয়া। দুনিয়ার বিশ্রাম সত্যি, হালালও, কিন্তু তা টেকে না। আয়াতটি স্থায়ী বিশ্রাম রেখেছে ভয় তার কাজ শেষ করার পরে। সূরা এরপর বলবে এই শয্যার সঙ্গীদের কথা, তারপর আরও এক জোড়া বাগানের কথা, প্রতিটি নিজ নিজ আয়াতে।"
          }
        ]
      }
    ]
  },
  "55:60": {
    "sections": [
      {
        "h": {
          "en": "A Question Built to Deny",
          "bn": "যে প্রশ্নের উত্তর একটাই: না"
        },
        "p": [
          {
            "en": "Hal jaza' al-ihsani illa al-ihsan. Five words in Arabic, and the shape of the sentence carries as much as the vocabulary. Hal is the interrogative particle, but paired with illa, except, it forms the construction Arabic uses for emphatic negation dressed as a question. The literal sense is: is the recompense of ihsan anything except ihsan? The intended sense is: there is nothing else it could be.",
            "bn": "হাল জাযাউল-ইহসানি ইল্লাল-ইহসান। আরবিতে মাত্র পাঁচটি শব্দ। এখানে শব্দের মতো বাক্যের গড়নও সমান কথা বলে। হাল প্রশ্ন করার অব্যয়। কিন্তু ইল্লা, অর্থাৎ ‘ছাড়া’, এর সঙ্গে জুড়লে তা আরবির এমন এক গঠন হয়ে যায়, যা প্রশ্নের চেহারায় জোর দিয়ে ‘না’ বলে। আক্ষরিক অর্থ: ইহসানের প্রতিদান কি ইহসান ছাড়া আর কিছু? আসল বক্তব্য: আর কিছু হতেই পারে না।"
          },
          {
            "en": "A statement would have said the reward of good is good. The question does something a statement cannot: it hands the conclusion to the listener to draw. Nobody is being informed; everybody is being asked to admit what he already knows. That is why the line has travelled so far beyond its own surah, and why it works as an argument even with someone who does not accept the Book it comes from.",
            "bn": "সোজা বিবৃতি হলে বলা হতো: ভালোর প্রতিদান ভালো। প্রশ্ন এমন কাজ করে, যা বিবৃতি পারে না। সিদ্ধান্তটা শ্রোতা নিজেই টানেন। এখানে কাউকে নতুন কিছু জানানো হচ্ছে না। সবাইকে বলা হচ্ছে, যা আগে থেকেই জানেন, তা মুখে স্বীকার করুন। এ কারণেই কথাটি নিজের সূরা ছাড়িয়ে এত দূর পৌঁছেছে। আর এ কারণেই, যে এই কিতাব মানে না, তার সঙ্গেও যুক্তি হিসেবে এটা খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Jaza and Ihsan",
          "bn": "জাযা ও ইহসান"
        },
        "p": [
          {
            "en": "Jaza is not a gift. It is requital — what is due back, an exact settling of accounts, the same root that gives the phrase jazak Allahu khayran. Putting jaza and ihsan in one sentence is already a claim: that goodness is not left to chance or to the generosity of whoever received it, but falls under a law of return.",
            "bn": "জাযা কোনো উপহার নয়। জাযা হলো প্রতিদান: যা পাওনা, তা ফিরিয়ে দেওয়া, কড়ায়-গণ্ডায় হিসাব মেটানো। জাযাকাল্লাহু খাইরান কথাটিও এসেছে একই ধাতু থেকে। জাযা আর ইহসানকে এক বাক্যে বসানোতেই একটা দাবি আছে। ভালো কাজ ভাগ্যের হাতে ছেড়ে দেওয়া হয়নি, যে উপকার পেল তার উদারতার হাতেও নয়। ভালো কাজ একটা নিয়ম মেনে ফিরে আসে।"
          },
          {
            "en": "Ihsan is from husn, beauty. It is not merely doing good but doing it well and completely, without the corners cut that nobody would have noticed. Both occurrences carry the definite article, al-ihsan, so the recompense is not merely something pleasant; it is of the same named kind as the deed. Beauty is repaid with beauty, and the sentence is closed at both ends by the same word.",
            "bn": "ইহসান এসেছে হুসন থেকে, যার অর্থ সৌন্দর্য। ইহসান মানে শুধু ভালো কাজ করা নয়, কাজটা সুন্দর করে, পুরোপুরি করা। এমন ফাঁকিও না দেওয়া, যা কেউ টেরই পেত না। দুই জায়গাতেই শব্দটি এসেছে ‘আল’ সহ: আল-ইহসান। তাই প্রতিদান শুধু ভালো লাগার মতো কিছু নয়। কাজের যে নাম, প্রতিদানেরও সেই নাম, সেই জাত। সৌন্দর্যের প্রতিদান সৌন্দর্য। বাক্যের শুরু আর শেষ, দুই মাথাই বাঁধা একই শব্দে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Is Named",
          "bn": "কারও নাম নেই"
        },
        "p": [
          {
            "en": "The verse names neither the one who does the ihsan nor the one who repays it. That silence is not a gap; the commentators read the line in more than one direction and the wording carries all of them. It is the servant's ihsan towards his Lord, answered by his Lord's ihsan towards him. It is also ihsan shown to people, whose return is guaranteed even when the people themselves do not provide it.",
            "bn": "যে ইহসান করে, আয়াতে তার নাম নেই। যে প্রতিদান দেয়, তারও নাম নেই। এই নীরবতা কোনো ফাঁক নয়। তাফসীরকারেরা কথাটি একাধিক দিক থেকে পড়েছেন, আর আয়াতের শব্দ সবগুলো অর্থই ধারণ করে। এক অর্থে এটা রবের প্রতি বান্দার ইহসান, যার জবাবে আসে বান্দার প্রতি রবের ইহসান। আরেক অর্থে এটা মানুষের প্রতি করা ইহসান। মানুষ নিজে প্রতিদান না দিলেও এর প্রতিদান নিশ্চিত।"
          },
          {
            "en": "Set beside it 10:26: for those who did good is al-husna and more. Husna, the best, plus ziyadah, an addition beyond it. So the law of exact return is not a ceiling. Ihsan is repaid in kind as a minimum, and then something is added that the equation did not require. The verse before us states the floor; the promise elsewhere removes the roof.",
            "bn": "এর পাশে রাখুন ১০:২৬ আয়াত: যারা ইহসান করেছে, তাদের জন্য আছে আল-হুসনা, আর আরও বেশি। হুসনা মানে সবচেয়ে উত্তম, আর যিয়াদাহ মানে তার ওপরে বাড়তি। তাহলে কড়ায়-গণ্ডায় প্রতিদানের নিয়মটা কোনো ঊর্ধ্বসীমা নয়। ইহসানের প্রতিদান অন্তত সমান মাপে ফেরে। তারপর এমন কিছু যোগ হয়, যা হিসাবমতে পাওনা ছিল না। আমাদের সামনের আয়াত নিচের সীমাটা বলে দেয়। আর অন্য আয়াতের ওয়াদা উপরের সীমাটাই তুলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seam Between Two Gardens",
          "bn": "দুই জান্নাতের সংযোগস্থল"
        },
        "p": [
          {
            "en": "Surah ar-Rahman is built on a refrain — so which of the favours of your Lord will you two deny — repeated thirty-one times, and 55:61 is one of those repetitions, coming immediately after our line. The placement matters. From 55:46 the surah has been describing two gardens for the one who feared the standing before his Lord, with their branches, springs and fruits.",
            "bn": "সূরা আর-রাহমান দাঁড়িয়ে আছে একটি ধুয়ার ওপর: অতএব তোমরা উভয়ে তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? ধুয়াটি এসেছে একত্রিশবার। ৫৫:৬১ তারই একটি, আর তা আসে আমাদের আয়াতের ঠিক পরেই। এই অবস্থানটা গুরুত্বপূর্ণ। ৫৫:৪৬ থেকে সূরাটি দুটি বাগানের বর্ণনা দিয়ে আসছে। বাগান দুটি তার জন্য, যে রবের সামনে দাঁড়ানোকে ভয় করেছে। একে একে এসেছে সেগুলোর ডালপালা, ঝরনা আর ফলের কথা।"
          },
          {
            "en": "Immediately after the refrain, 55:62 begins the second pair: and besides these two, two other gardens. So our verse sits exactly on the seam. It is not an isolated aphorism about kindness. It is the summary line that explains the entire passage of reward: everything described on either side of it is there because this rule holds. The gardens are the answer to the question the verse asks.",
            "bn": "ধুয়ার ঠিক পরেই ৫৫:৬২ শুরু করে দ্বিতীয় জোড়া: আর এ দুটি ছাড়া আরও দুটি বাগান। তাহলে আমাদের আয়াতটি বসে আছে ঠিক দুই জোড়ার সংযোগস্থলে। এটা দয়া নিয়ে বিচ্ছিন্ন কোনো জ্ঞানের কথা নয়। পুরো প্রতিদান-অংশটার ব্যাখ্যা এই এক লাইনে: এর দুই পাশে যা কিছু বর্ণনা করা হয়েছে, সবই আছে এই নিয়ম সত্য বলে। আয়াত যে প্রশ্ন করছে, বাগানগুলোই তার উত্তর।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan in the Sunnah",
          "bn": "সুন্নাহতে ইহসান"
        },
        "p": [
          {
            "en": "The word is given its definition in the hadith of Jibril, recorded in both Sahih al-Bukhari and Sahih Muslim: asked what ihsan is, the Prophet ﷺ answered that it is to worship Allah as though you see Him, and if you do not see Him, then He sees you. Ihsan is therefore not a level of effort but a level of awareness, and everything else follows from it.",
            "bn": "জিবরীলের হাদিসে শব্দটির সংজ্ঞা এসেছে। হাদিসটি সহীহ বুখারী ও সহীহ মুসলিম, দুটিতেই আছে। ইহসান কী, জিজ্ঞেস করা হলে নবী ﷺ বলেন: আল্লাহর ইবাদত এমনভাবে করা, যেন তুমি তাঁকে দেখছ। আর যদি তুমি তাঁকে না দেখো, তবে তিনি তো তোমাকে দেখছেন। তাহলে ইহসান খাটুনির কোনো মাত্রা নয়, সচেতনতার মাত্রা। বাকি সবকিছু আসে এখান থেকেই।"
          },
          {
            "en": "Sahih Muslim also preserves the instruction that Allah has prescribed ihsan in everything — and the example given there is the slaughter of an animal, that the blade be sharpened and the creature spared distress. The scope is worth noticing. Ihsan is not reserved for prayer and charity. It is asked for in the most ordinary work a person does with his hands, including work that nobody will inspect.",
            "bn": "সহীহ মুসলিমে আরও আছে, আল্লাহ সবকিছুতে ইহসান ফরজ করেছেন। সেখানে উদাহরণ এসেছে পশু জবাইয়ের: ছুরিতে ধার দিতে হবে, আর পশুটিকে কষ্ট থেকে রেহাই দিতে হবে। এর পরিসরটা খেয়াল করার মতো। ইহসান শুধু নামাজ আর দান-সদকার জন্য তোলা নেই। মানুষ নিজ হাতে যে সবচেয়ে সাধারণ কাজ করে, সেখানেও ইহসান চাওয়া হয়েছে। এমনকি যে কাজ কেউ কখনো যাচাই করতে আসবে না, সেখানেও।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে যেভাবে মানা যায়"
        },
        "p": [
          {
            "en": "The practical value of this verse shows up in the moment good is not returned — the favour forgotten, the help repaid with coldness, years of care met with a shrug. The verse does not deny that this happens; it relocates the debt. Because no repayer is named, the account is not with the person who benefited. Expecting return from them is what turns generosity bitter, and this line quietly removes the expectation.",
            "bn": "এ আয়াতের আসল কাজটা বোঝা যায় ঠিক তখন, যখন ভালোর বদলে ভালো ফেরে না। উপকারের কথা লোকে ভুলে যায়, সাহায্যের জবাব আসে শীতল আচরণে, বছরের পর বছরের যত্নের জবাবে মেলে উদাসীনতা। আয়াত অস্বীকার করে না যে এমন হয়। বরং ঋণের ঠিকানাটাই বদলে দেয়। প্রতিদান কে দেবে, তার নাম নেই। তাই হিসাবটা যে উপকার পেয়েছে, তার সঙ্গে নয়। তার কাছে প্রতিদান আশা করলেই উদারতা তেতো হয়ে যায়। এই আয়াত চুপচাপ সেই আশাটাই সরিয়ে নেয়।"
          },
          {
            "en": "It also raises the standard of the work itself. If the return matches the kind, then a job half done returns half done, and quality is not a matter of who is watching. Concretely: finish the thing properly when nobody will check, answer the message you could ignore, sharpen the knife. And read the verse in reverse for a sharper test — if the reward of ihsan is ihsan, what is the reward of the other thing?",
            "bn": "এ আয়াত কাজের মানও উঁচু করে দেয়। প্রতিদান যদি কাজের জাত মেনেই আসে, তবে আধা-খেঁচড়া কাজ ফেরেও আধা-খেঁচড়া হয়ে। কে দেখছে, তার ওপর কাজের মান নির্ভর করে না। হাতে-কলমে বললে: কেউ যাচাই করবে না জেনেও কাজটা ঠিকঠাক শেষ করুন। যে বার্তার জবাব না দিলেও চলত, তার জবাব দিন। ছুরিতে ধার দিন। আর পরীক্ষাটা আরও কঠিন করতে আয়াতটা উল্টো দিক থেকে পড়ুন: ইহসানের প্রতিদান যদি ইহসান হয়, তবে এর উল্টোটার প্রতিদান কী?"
          }
        ]
      }
    ]
  },
  "55:62": {
    "sections": [
      {
        "h": {
          "en": "Three Words, a Second Pair",
          "bn": "তিন শব্দে দ্বিতীয় জোড়া"
        },
        "p": [
          {
            "en": "Wa-min dunihima jannatan: and, min dunihima, two gardens. The verse is three Arabic words, and the phrase of relation comes first while the noun waits until last, so the listener hears where before hearing what. From 55:46 the surah has described two gardens for whoever fears the standing before his Lord. At 55:60 it asked whether the reward of good is anything but good, and the refrain followed at 55:61. Now a second pair opens. The article on 55:60 has already looked at that hinge; here the focus is the small word that makes it.",
            "bn": "ওয়া মিন দূনিহিমা জান্নাতান: আর মিন দূনিহিমা, দুটি বাগান। আয়াতটি আরবিতে মাত্র তিনটি শব্দ। সম্পর্কের শব্দগুচ্ছটি আগে এসেছে, আর বিশেষ্যটি অপেক্ষা করেছে একেবারে শেষ পর্যন্ত। ফলে শ্রোতা কী আছে শোনার আগেই শোনেন কোথায় আছে। ৫৫:৪৬ থেকে সূরা বর্ণনা করে আসছে দুটি বাগান, সেই মানুষের জন্য যে তার রবের সামনে দাঁড়ানোকে ভয় করে। ৫৫:৬০ প্রশ্ন তুলেছে, উত্তম কাজের প্রতিদান কি উত্তম ছাড়া আর কিছু? ৫৫:৬১ আয়াতে এসেছে সেই চেনা প্রশ্ন। এবার খুলছে দ্বিতীয় জোড়া। জোড়া দুটির সংযোগস্থল নিয়ে ৫৫:৬০ আয়াতের প্রবন্ধে কথা হয়ে গেছে। এখানে আমরা থাকব সেই ছোট্ট শব্দটির কাছে, যা সংযোগটা তৈরি করে।"
          },
          {
            "en": "The translations on this site take a side without announcing it. The English reads: and below them both [in excellence] are two [other] gardens. The words in square brackets belong to the translator. In excellence is an interpretation of min dun, not a word in the Arabic, and it adopts one of the readings set out below. The Bengali says that besides these two gardens there are more gardens, which stays nearer a neutral besides but loses the dual: jannatan is exactly two. Al-Muyassar says only that besides the two earlier gardens there are two other gardens.",
            "bn": "এ সাইটের অনুবাদ দুটি নিঃশব্দে একটি পক্ষ নিয়েছে। ইংরেজিতে আছে: and below them both [in excellence] are two [other] gardens, অর্থাৎ ওই দুটির নিচে [মর্যাদায়] আরও দুটি বাগান। বন্ধনীর শব্দগুলো অনুবাদকের নিজের। মর্যাদায় কথাটি মিন দূন-এর একটি ব্যাখ্যা, আরবিতে এমন কোনো শব্দ নেই। নিচে যে মতগুলো আসছে, তার একটিকে এ অনুবাদ আগেই বেছে নিয়েছে। বাংলা অনুবাদ বলছে, এ দুটো বাগান ছাড়াও আরো বাগান আছে। ছাড়াও কথাটি নিরপেক্ষতার কাছাকাছি থাকে, কিন্তু দ্বিবচন হারিয়ে যায়। জান্নাতান মানে ঠিক দুটি বাগান। তাফসীর মুয়াসসার শুধু এটুকু বলে: আগের দুটি বাগান ছাড়া আরও দুটি বাগান।"
          }
        ]
      },
      {
        "h": {
          "en": "Lower in Degree or Merit",
          "bn": "স্তরে নিচে, না মর্যাদায়"
        },
        "p": [
          {
            "en": "At-Tabari begins plainly: besides these two gardens, the ones Allah described as belonging to whoever fears the standing of his Lord, there are two gardens. Then he writes that the people of interpretation differed over the meaning of min dunihima in this place. One group said: below them in degrees, fi d-daraj. He files under it a report from Ibn Abbas (RA) by way of Sa'id ibn Jubayr, which this article returns to later. Another group said: below them in excellence, fi l-fadl. For this he gives Ibn Zayd's words whole: they are lower than these two, for the companions of the right.",
            "bn": "তাবারী শুরু করেন সোজা কথায়: যে দুটি বাগানের বর্ণনা আল্লাহ দিয়েছেন রবের সামনে দাঁড়ানোকে ভয় করা মানুষের জন্য, তার বাইরে আরও দুটি বাগান আছে। তারপর তিনি লেখেন, এখানে মিন দূনিহিমা শব্দের অর্থ নিয়ে তাফসীরকারদের মতভেদ হয়েছে। একদল বলেছেন: স্তরে নিচে, ফিদ-দারাজ। এ মতের অধীনে তিনি সাঈদ ইবন জুবাইরের সূত্রে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন, যার কথা এ প্রবন্ধে পরে আসবে। আরেক দল বলেছেন: মর্যাদায় নিচে, ফিল-ফাদল। এর পক্ষে তিনি ইবন যাইদের কথা পুরোটা তুলে দেন: এ দুটি ওই দুটির চেয়ে নিচু, ডান দিকের লোকদের জন্য।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi record the same pair in nearly the same words: Ibn Abbas said, below them in degrees; Ibn Zayd said, below them in excellence. Ibn Kathir cites both too. The two readings sit close together, yet they are not one claim. Degrees describe a ladder, a place higher or lower in Paradise; excellence describes worth, how fine the gift is. In the text consulted for this verse, at-Tabari lays out the disagreement and its narrations and does not state which of the two he prefers, so this article does not supply a preference for him.",
            "bn": "কুরতুবী আর বাগাভী প্রায় একই ভাষায় এ দুটি মত উল্লেখ করেন: ইবন আব্বাস (রাঃ) বলেছেন, স্তরে নিচে; ইবন যাইদ বলেছেন, মর্যাদায় নিচে। ইবন কাসীরও দুটিই উদ্ধৃত করেন। মত দুটি কাছাকাছি, তবু এক কথা নয়। স্তর বলতে বোঝায় সিঁড়ির ধাপ, জান্নাতে উঁচু বা নিচু অবস্থান। মর্যাদা বলতে বোঝায় দানের মান, উপহারটি কতটা উৎকৃষ্ট। এ আয়াতের জন্য তাবারীর যে লেখা সংগ্রহ করা হয়েছে, তাতে তিনি মতভেদ আর তার বর্ণনাগুলো সাজিয়ে দিয়েছেন, কিন্তু কোনটি তাঁর পছন্দ তা বলেননি। তাই এ প্রবন্ধও তাঁর পক্ষ থেকে কোনো পছন্দ বসিয়ে দেবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Comes First Is Honoured",
          "bn": "আগে আসার সম্মান"
        },
        "p": [
          {
            "en": "Ibn Kathir does not treat the lower reading as one option among several. These two gardens, he writes, are below the two before them in rank, excellence and station, bi-nass al-Qur'an, by the text of the Qur'an itself, and he quotes the verse as his evidence. He then says the superiority of the first pair rests on several grounds, and gives the first of them: Allah described the first pair before this one, and putting a thing first shows the care taken over it. Then He said wa-min dunihima. That, says Ibn Kathir, is plain in the honour of what comes first.",
            "bn": "ইবন কাসীর নিচের অর্থটিকে কয়েকটি সম্ভাবনার একটি হিসেবে দেখেন না। তিনি লেখেন, এ দুটি বাগান আগের দুটির চেয়ে স্তরে, মর্যাদায় ও অবস্থানে নিচে, আর তা বিনাস্সিল কুরআন, কুরআনের নিজের ভাষ্য দিয়েই প্রমাণিত। প্রমাণ হিসেবে তিনি এ আয়াতটিই উদ্ধৃত করেন। তারপর বলেন, প্রথম জোড়ার শ্রেষ্ঠত্বের পক্ষে কয়েকটি দিক আছে, এবং প্রথম দিকটি তুলে ধরেন। আল্লাহ প্রথম জোড়ার বর্ণনা দিয়েছেন এ জোড়ার আগে, আর কোনো কিছুকে আগে আনা তার প্রতি বিশেষ মনোযোগের লক্ষণ। এরপরই তিনি বলেছেন ওয়া মিন দূনিহিমা। ইবন কাসীরের ভাষায়, আগে আসার মর্যাদা আর দ্বিতীয়টির ওপর তার উচ্চতা এতে স্পষ্ট।"
          },
          {
            "en": "Al-Qurtubi argues the same way at length. He sets the descriptions of the two pairs side by side: springs that flow against springs that gush, every fruit in pairs against fruit, palms and pomegranates, the maidens likened to rubies and coral against good and beautiful ones. Of the springs he says that gushing falls short of flowing. He closes with this: perhaps the differences left unmentioned outnumber those mentioned. The second-pair verses, from 55:64 to 55:76, have their own articles to come. Here only the method matters: the rank is read from the description rather than announced.",
            "bn": "কুরতুবী একই পথে যুক্তি দেন, আরও বিস্তারিতভাবে। তিনি দুই জোড়ার বর্ণনা পাশাপাশি রাখেন। একদিকে বয়ে চলা ঝরনা, অন্যদিকে উথলে ওঠা ঝরনা। একদিকে প্রত্যেক ফল জোড়ায় জোড়ায়, অন্যদিকে ফল, খেজুর আর ডালিম। একদিকে পদ্মরাগ ও প্রবালের মতো হুর, অন্যদিকে সচ্চরিত্রা সুন্দরীরা। ঝরনা প্রসঙ্গে তিনি বলেন, উথলে ওঠা বয়ে চলার চেয়ে কম। শেষে তিনি বলেন: হয়তো যে পার্থক্যগুলো বলা হয়নি, সেগুলো বলা পার্থক্যের চেয়েও বেশি। দ্বিতীয় জোড়ার আয়াতগুলো, ৫৫:৬৪ থেকে ৫৫:৭৬ পর্যন্ত, আলোচিত হবে নিজ নিজ প্রবন্ধে। এখানে শুধু পদ্ধতিটুকু দেখার বিষয়: স্তরের ঘোষণা নেই, স্তর পড়ে নিতে হয় বর্ণনা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "In Front, or Nearer the Throne",
          "bn": "সামনে, নাকি আরশের কাছে"
        },
        "p": [
          {
            "en": "Not every early reader heard below. Al-Baghawi reports al-Kisa'i: min dunihima means in front of them and before them, amamahuma wa qablahuma. He adds that the view of ad-Dahhak supports this: the first two gardens are of gold and silver, the other two of ruby. Al-Qurtubi gives ad-Dahhak's position more fully. The first pair are of gold and silver; the second pair are of ruby and emerald, and they are better than the first; and min dunihima means in front of them and before them. On this reading the verse moves forward, not down.",
            "bn": "প্রথম যুগের সবাই এখানে নিচে অর্থ বোঝেননি। বাগাভী কিসাঈর মত উল্লেখ করেন: মিন দূনিহিমা মানে ওই দুটির সামনে ও আগে, আমামাহুমা ওয়া কাবলাহুমা। তিনি আরও বলেন, দাহহাকের মত এর পক্ষে সাক্ষ্য দেয়। দাহহাকের মতে প্রথম দুটি বাগান সোনা ও রুপার, আর পরের দুটি ইয়াকূত পাথরের। কুরতুবী দাহহাকের মত আরও পূর্ণভাবে দেন। প্রথম জোড়া সোনা ও রুপার, দ্বিতীয় জোড়া ইয়াকূত ও যমররুদের, আর এ দুটিই প্রথম দুটির চেয়ে উত্তম। মিন দূনিহিমা মানে তাদের সামনে, তাদের আগে। এ পাঠে আয়াতটি নিচে নামে না, সামনে এগোয়।"
          },
          {
            "en": "Al-Qurtubi names one more scholar on this side: al-Hakim at-Tirmidhi, in Nawadir al-Usul, who explained min dunihima as dun hadha ila l-arsh, from these towards the Throne, that is, nearer and closer to the Throne, and then set about ranking this pair above the first. Al-Qurtubi also records Muqatil's names for the four: the first pair are the Garden of Adn and the Garden of Na'im, the second the Garden of Firdaus and the Garden of Ma'wa. Those names come without a ranking attached, and this article adds none. Where a source ranks, this article reports who ranks; it does not rank in its own voice.",
            "bn": "কুরতুবী এ পক্ষে আরও একজন আলিমের নাম বলেন: হাকীম তিরমিযী, তাঁর নাওয়াদিরুল উসূল গ্রন্থে। তাঁর ব্যাখ্যায় মিন দূনিহিমা মানে দূনা হাযা ইলাল আরশ, এখান থেকে আরশের দিকে, অর্থাৎ আরশের আরও কাছে, আরও নিকটে। এরপর তিনি এ জোড়াকে প্রথম জোড়ার ওপর শ্রেষ্ঠত্ব দিতে শুরু করেন। কুরতুবী মুকাতিলের দেওয়া চারটি নামও উল্লেখ করেন: প্রথম জোড়া জান্নাতুল আদন ও জান্নাতুন নাঈম, দ্বিতীয় জোড়া জান্নাতুল ফিরদাউস ও জান্নাতুল মাওয়া। সংগৃহীত অংশে নামগুলো এসেছে কোনো স্তরবিন্যাস ছাড়া, এ প্রবন্ধও কোনো বিন্যাস যোগ করবে না। কোনো উৎস যেখানে স্তর ঠিক করে, এ প্রবন্ধ জানায় কে তা করেছেন। নিজের কণ্ঠে এ প্রবন্ধ কোনো স্তর ঠিক করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Given the Second Pair",
          "bn": "দ্বিতীয় জোড়া কাদের জন্য"
        },
        "p": [
          {
            "en": "Those who read below then ask who lives there. Ibn Jurayj, reported by both al-Qurtubi and al-Baghawi, counts four gardens: two for the foremost, the ones brought near, with every fruit in pairs, and two for the companions of the right, with fruit, palms and pomegranates. Al-Baghawi adds a saying of Abu Musa al-Ash'ari (RA): two gardens of gold for those who went ahead and two of silver for those who followed. As-Sa'di is brief and specific: of silver are their buildings, their vessels, their ornaments and all that is in them, for the companions of the right.",
            "bn": "যাঁরা নিচে অর্থ নেন, তাঁদের সামনে পরের প্রশ্ন: সেখানে থাকবে কারা? কুরতুবী ও বাগাভী দুজনেই ইবন জুরাইজের মত উল্লেখ করেন। তাঁর হিসাবে বাগান চারটি। দুটি অগ্রগামী নৈকট্যপ্রাপ্তদের জন্য, যেখানে প্রত্যেক ফল জোড়ায় জোড়ায়। আর দুটি ডান দিকের লোকদের জন্য, যেখানে ফল, খেজুর আর ডালিম। বাগাভী আবূ মূসা আশআরী (রাঃ)-এর একটি উক্তি যোগ করেন: সোনার দুটি বাগান অগ্রগামীদের জন্য, রুপার দুটি অনুসারীদের জন্য। সা'দী সংক্ষেপে কিন্তু নির্দিষ্ট করে বলেন: এ দুটির দালান, পাত্র, অলংকার আর ভেতরের সবকিছু রুপার, ডান দিকের লোকদের জন্য।"
          },
          {
            "en": "Other answers appear beside these. Al-Qurtubi quotes al-Mawardi's possibility that the second pair belong to the believer's followers, because their station falls short of his: one garden for the maidens of Paradise and one for the immortal youths, so that male and female are kept apart. He also reports Ibn Abbas (RA) that all the gardens are for whoever fears the standing of his Lord, with palms and trees in the first pair and crops, plants and what spreads low in the second. Al-Mawardi offers his view as a possibility, and it should be read as one.",
            "bn": "এর পাশাপাশি আরও কিছু উত্তর আছে। কুরতুবী মাওয়ারদীর একটি সম্ভাবনার কথা উদ্ধৃত করেন। দ্বিতীয় জোড়া হতে পারে মুমিনের অনুসারীদের জন্য, কারণ তাদের অবস্থান তার চেয়ে নিচে। একটি বাগান হুরদের জন্য, আরেকটি চিরকিশোর সেবকদের জন্য, যাতে পুরুষ ও নারী আলাদা থাকে। কুরতুবী ইবন আব্বাস (রাঃ)-এর মতও আনেন: সবগুলো বাগানই রবের সামনে দাঁড়ানোকে ভয় করা মানুষের জন্য। প্রথম জোড়ায় খেজুরগাছ ও অন্যান্য বৃক্ষ, দ্বিতীয় জোড়ায় শস্য, লতাগুল্ম আর মাটিতে ছড়িয়ে থাকা গাছগাছালি। মাওয়ারদী নিজেই তাঁর কথাকে সম্ভাবনা বলেছেন, তাই সম্ভাবনা হিসেবেই তা পড়তে হবে।"
          },
          {
            "en": "Al-Qurtubi then asks the question a careful listener asks. The owner of the first pair was named at 55:46: whoever fears the standing of his Lord. Why are the owners of this pair not named? His answer: all four gardens are for whoever fears the standing of his Lord, but those who fear have ranks. The first pair are for the servants highest in rank in their fear of Allah, and the second for those whose state in fear fell short. The condition does not change between the pairs. What changes is how fully it was met.",
            "bn": "এরপর কুরতুবী সেই প্রশ্নটি তোলেন, যা একজন মনোযোগী শ্রোতার মনে আসে। প্রথম জোড়ার মালিকের পরিচয় ৫৫:৪৬ আয়াতে এসেছে: যে তার রবের সামনে দাঁড়ানোকে ভয় করে। তাহলে এ জোড়ার মালিকদের কথা বলা হলো না কেন? তাঁর উত্তর: চারটি বাগানই রবের সামনে দাঁড়ানোকে ভয় করা মানুষের জন্য, তবে ভয়কারীদের মধ্যেও স্তর আছে। আল্লাহকে ভয় করায় যে বান্দারা সবার ওপরে, প্রথম জোড়া তাদের। আর ভয়ের ক্ষেত্রে যাদের অবস্থা পিছিয়ে ছিল, দ্বিতীয় জোড়া তাদের। শর্ত দুই জোড়াতেই এক। বদলায় শুধু শর্তটি কতখানি পূর্ণ হয়েছে, সেটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "The Metals in the Hadith",
          "bn": "হাদিসে সোনা ও রুপা"
        },
        "p": [
          {
            "en": "The article on 55:46 and 55:47 has already quoted this hadith; it is given here once more because the commentators on 55:62 lean on it. Al-Bukhari records in his Sahih (no. 4878) from Abdullah ibn Qais that Allah's Messenger ﷺ said: \"Two gardens, the utensils and the contents of which are of silver, and two other gardens, the utensils and contents of which are of gold. And nothing will prevent the people who will be in the Garden of Eden from seeing their Lord except the curtain of Majesty over His Face.\" Al-Baghawi cites the same narration through al-Bukhari's chain.",
            "bn": "৫৫:৪৬ ও ৫৫:৪৭ আয়াতের প্রবন্ধে হাদিসটি আগেই এসেছে। এখানে আরেকবার আনা হলো, কারণ ৫৫:৬২ আয়াতের তাফসীরকারেরা এর ওপর ভর করেন। ইমাম বুখারী তাঁর সহীহ গ্রন্থে (হাদিস ৪৮৭৮) আবদুল্লাহ ইবন কাইস থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: \"দুটি জান্নাত, যার পাত্র ও ভেতরের সবকিছু রুপার। আর অন্য দুটি জান্নাত, যার পাত্র ও ভেতরের সবকিছু সোনার। জান্নাতে আদনের বাসিন্দাদের তাদের রবকে দেখা থেকে কোনো কিছুই আটকাবে না, শুধু তাঁর চেহারার ওপর মহিমার চাদর ছাড়া।\" বাগাভীও বুখারীর সনদ ধরে একই বর্ণনা উদ্ধৃত করেন।"
          },
          {
            "en": "Notice what the wording itself says. It names two gardens of silver and two of gold, and it does not say which pair belongs to which verse. Ibn Kathir's Arabic quotes it with a closing clause, the first two for those brought near and the other two for the companions of the right, and then gives a saying of Abu Musa to the same effect. That allocation is how the hadith is joined to this verse. Ad-Dahhak's metals, gold and silver for the first pair and gems for the second, point the other way. No commentary consulted here gives a cause of revelation for this verse.",
            "bn": "হাদিসের শব্দ কী বলে আর কী বলে না, তা খেয়াল করার মতো। এতে রুপার দুটি আর সোনার দুটি বাগানের কথা আছে, কিন্তু কোন জোড়া কোন আয়াতের, তা বলা নেই। ইবন কাসীর আরবিতে হাদিসটি উদ্ধৃত করেন শেষে একটি বাক্যসহ: প্রথম দুটি নৈকট্যপ্রাপ্তদের, পরের দুটি ডান দিকের লোকদের। এরপর তিনি একই মর্মে আবূ মূসা (রাঃ)-এর একটি উক্তিও আনেন। এই বণ্টনের মাধ্যমেই হাদিসটি এ আয়াতের সঙ্গে যুক্ত হয়েছে। দাহহাকের মতে প্রথম জোড়া সোনা ও রুপার, দ্বিতীয় জোড়া রত্নের, যা উল্টো দিকে ইঙ্গিত করে। সংগৃহীত কোনো তাফসীরে এ আয়াতের শানে নুযূল নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens No Creature Knows",
          "bn": "যে বাগানের খবর কেউ জানে না"
        },
        "p": [
          {
            "en": "The report from Ibn Abbas (RA) that at-Tabari placed under the reading in degrees is unusual. Through Sa'id ibn Jubayr, on the words His Throne was upon the water (11:7), Ibn Abbas is reported to have said: Allah's Throne was upon the water; then He took for Himself a garden, then below it another garden, then closed them both over with a single pearl. Then he recited wa-min dunihima jannatan and said that these are the ones about which no soul knows what comfort of the eyes has been hidden for them, as reward for what they used to do, the words of 32:17.",
            "bn": "ইবন আব্বাস (রাঃ)-এর যে বর্ণনাটি তাবারী স্তরে নিচে মতের অধীনে রেখেছেন, সেটি একটু ভিন্ন ধরনের। সাঈদ ইবন জুবাইরের সূত্রে, ওয়া কানা আরশুহু আলাল মা, তাঁর আরশ ছিল পানির ওপর (১১:৭), এ কথার ব্যাখ্যায় তিনি বলেছেন বলে বর্ণিত: আল্লাহর আরশ ছিল পানির ওপর। তারপর তিনি নিজের জন্য একটি বাগান বানালেন, এরপর তার নিচে আরেকটি বাগান, তারপর দুটিকেই একটিমাত্র মুক্তা দিয়ে ঢেকে দিলেন। এরপর তিনি পাঠ করলেন ওয়া মিন দূনিহিমা জান্নাতান, আর বললেন, এ দুটিই সেই বাগান যার সম্পর্কে ৩২:১৭ আয়াত বলে: কেউ জানে না তাদের আমলের প্রতিদান হিসেবে তাদের জন্য চোখজুড়ানো কী লুকিয়ে রাখা হয়েছে।"
          },
          {
            "en": "The report goes on: no creature knows what is in them, and a gift comes to their people from them every day. At-Tabari gives it with its chain and a second chain through Salim al-Aftas from Sa'id with similar wording; he attaches no grading in the passage consulted, and this article adds none. He files it under the reading in degrees and draws no further ranking from it, and neither does this article. What can be said is narrower: in this narration, the gardens of 55:62 are tied to a reward kept hidden, not to a reward kept small.",
            "bn": "বর্ণনাটি আরও বলে: সৃষ্টিজগতের কেউ জানে না এ দুটির ভেতরে কী আছে, আর প্রতিদিন সেখান থেকে তাদের কাছে একটি করে উপহার আসে। তাবারী এটি সনদসহ দিয়েছেন, সঙ্গে সালিম আফতাস থেকে সাঈদের সূত্রে আরেকটি সনদে কাছাকাছি ভাষায়। সংগৃহীত অংশে তিনি এর মান নিয়ে কিছু বলেননি, এ প্রবন্ধও কিছু যোগ করছে না। তিনি এটি স্তরে নিচে মতের অধীনে রেখেছেন, এর থেকে আর কোনো স্তরবিন্যাস টানেননি। এ প্রবন্ধও টানবে না। শুধু এটুকু বলা যায়: এ বর্ণনায় ৫৫:৬২ আয়াতের বাগান দুটিকে জোড়া হয়েছে লুকিয়ে রাখা প্রতিদানের সঙ্গে, ছোট করে রাখা প্রতিদানের সঙ্গে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reaching for the Higher Pair",
          "bn": "উঁচু জোড়ার দিকে হাত বাড়ানো"
        },
        "p": [
          {
            "en": "Whichever way min dunihima is read, the refrain at 55:63 follows at once: so which of the favours of your Lord would you two deny? The second pair is counted among the favours before a single detail of it has been given. Read with Ibn Kathir and al-Qurtubi, this is striking: a garden described as lower is still described, still offered, and still made the ground of a question to jinn and humankind. Read with ad-Dahhak or al-Hakim at-Tirmidhi, the refrain lands on something better still. Either way, nothing here is a leftover.",
            "bn": "মিন দূনিহিমা যেভাবেই পড়া হোক, ৫৫:৬৩ আয়াতে সঙ্গে সঙ্গে ফিরে আসে সেই প্রশ্ন: তোমরা দুই দল তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? দ্বিতীয় জোড়ার একটি খুঁটিনাটিও বলার আগেই তাকে নিয়ামতের তালিকায় তোলা হয়েছে। ইবন কাসীর ও কুরতুবীর পাঠে এটি লক্ষ করার মতো। যে বাগানকে নিচের বলা হচ্ছে, তারও বর্ণনা আছে, সেটিও দান করা হচ্ছে, আর তার ভিত্তিতেই জিন ও মানুষকে প্রশ্ন করা হচ্ছে। দাহহাক বা হাকীম তিরমিযীর পাঠে প্রশ্নটি গিয়ে পড়ে আরও উত্তম কিছুর ওপর। যেভাবেই দেখুন, এ আয়াতে কোনো কিছুই উচ্ছিষ্ট নয়।"
          },
          {
            "en": "For the many who read below, the verse holds two lessons that pull against each other, and both are needed. The first is ambition. If the fearers have ranks, as al-Qurtubi says, then a believer should want the higher pair and work for it: in prayer, in honesty, in the private moments where fear of the standing before Allah is tested. The second is hope. A person who knows he has fallen short of the foremost has not fallen outside the promise. The gardens below are still gardens, and the surah does not hurry past them.",
            "bn": "যাঁরা নিচে অর্থ নেন, তাঁদের পাঠে আয়াতটি দুটি শিক্ষা দেয়। শিক্ষা দুটি দুই দিকে টানে, আর দুটিই দরকার। প্রথমটি উচ্চাকাঙ্ক্ষা। কুরতুবী যেমন বলেন, ভয়কারীদের মধ্যে যদি স্তর থাকে, তবে মুমিনের উচিত উঁচু জোড়াটি চাওয়া আর তার জন্য খাটা। নামাজে, সততায়, আর সেই একান্ত মুহূর্তগুলোতে, যেখানে আল্লাহর সামনে দাঁড়ানোর ভয় পরীক্ষায় পড়ে। দ্বিতীয়টি আশা। যে জানে সে অগ্রগামীদের সারিতে পৌঁছাতে পারেনি, সে প্রতিশ্রুতির বাইরে পড়ে যায়নি। নিচের বাগানও বাগান, আর সূরা সেগুলোর পাশ দিয়ে তাড়াহুড়ো করে চলে যায় না।"
          },
          {
            "en": "There is one misuse to refuse. The verse describes gardens and ranks among the people of Paradise; it does not tell anyone which rank another person will reach, and it licenses no one to sort living Muslims into first-pair and second-pair believers. The only placement it invites is one's own, and even that is a direction rather than a verdict. The question to carry away is the one the card asks: where am I aiming, and why so low, when the One who describes both pairs is the One who gives them?",
            "bn": "একটি অপব্যবহার থেকে দূরে থাকতে হবে। আয়াতটি জান্নাতবাসীদের বাগান আর স্তরের বর্ণনা দেয়। কে কোন স্তরে পৌঁছাবে, তা কাউকে জানায় না। জীবিত মুসলমানদের প্রথম জোড়া আর দ্বিতীয় জোড়ার দলে ভাগ করার কোনো অনুমতিও কাউকে দেয় না। আয়াতটি যে হিসাবের দিকে ডাকে, তা কেবল নিজের হিসাব। সেটিও রায় নয়, শুধু পথের দিকনির্দেশ। শেষে যে প্রশ্নটি সঙ্গে রাখার, তা কার্ডেও আছে: আমার লক্ষ্য কোথায়, আর তা এত নিচু কেন? দুই জোড়ার বর্ণনা যিনি দিয়েছেন, দান করবেন তো তিনিই।"
          }
        ]
      }
    ]
  },
  "55:68": {
    "sections": [
      {
        "h": {
          "en": "Fruit, Palms and Pomegranates",
          "bn": "ফল, খেজুর আর ডালিম"
        },
        "p": [
          {
            "en": "Fihima fakihatun wa nakhlun wa rummanun: in both of them are fruit, and palms, and pomegranates. The verse is four words long. It belongs to the second pair of gardens, the pair opened at 55:62, whose rank and residents are taken up in that verse's own article. Since then the surah has called these gardens dark green at 55:64 and given them two gushing springs at 55:66. Now it turns to what grows in them, and the refrain at 55:69 follows at once.",
            "bn": "ফীহিমা ফাকিহাতুঁও ওয়া নাখলুঁও ওয়া রুম্মান: দুটিতেই আছে ফল, আর খেজুর গাছ, আর ডালিম। আয়াতটি মোটে চারটি শব্দের। এটি দ্বিতীয় জোড়া বাগানের অংশ। সে জোড়ার শুরু ৫৫:৬২ আয়াতে, আর তার স্তর ও বাসিন্দাদের আলোচনা সেই আয়াতের নিজস্ব প্রবন্ধে। এর মধ্যে সূরা ৫৫:৬৪ আয়াতে বাগান দুটিকে গাঢ় সবুজ বলেছে, আর ৫৫:৬৬ আয়াতে দিয়েছে উথলে ওঠা দুটি ঝরনা। এবার কথা ঘোরে সেখানে কী জন্মায় তার দিকে। ঠিক পরেই ৫৫:৬৯ আয়াতে আসে ধুয়া।"
          },
          {
            "en": "The commentators start from plain glosses. At-Tabari paraphrases the verse as in these two dark-green gardens are fruit, palms and pomegranates, tying the pronoun back to the colour just described. Al-Muyassar renders fakiha as the kinds of fruit, and as-Sa'di as fruit of every sort. So far the verse reads as a list. The question that occupies the longer commentaries is why the list does not stop after its first word, when palms and pomegranates are themselves things that bear fruit.",
            "bn": "তাফসীরকারেরা শুরু করেন সরল ব্যাখ্যা দিয়ে। তাবারী আয়াতটির অর্থ বলেন এভাবে: এই গাঢ় সবুজ বাগান দুটিতে আছে ফল, খেজুর গাছ আর ডালিম। এতে 'দুটিতে' সর্বনামটি সদ্য বলা রঙের সঙ্গে জুড়ে যায়। মুয়াসসার ফাকিহা শব্দের অর্থ করে নানা জাতের ফল, আর সা'দী বলেন সব রকমের ফল। এ পর্যন্ত আয়াতটি একটা তালিকা মাত্র। বড় তাফসীরগুলো যে প্রশ্নে সময় দেয় তা হলো, প্রথম শব্দেই তালিকা থামল না কেন, যখন খেজুর আর ডালিমও তো ফলই দেয়?"
          }
        ]
      },
      {
        "h": {
          "en": "Why Name Them a Second Time",
          "bn": "দ্বিতীয়বার নাম কেন"
        },
        "p": [
          {
            "en": "At-Tabari states the problem directly. There has been disagreement, he says, over why palms and pomegranates were mentioned again, when it had already been said that fruit is in the two gardens. Some said they were mentioned because palms and pomegranates are not fruit. Others said they are fruit. Al-Baghawi reports the same split in fewer words, and al-Qurtubi treats the verse under two questions: whether the two belong to fruit at all, and a ruling on oaths that follows from the answer.",
            "bn": "তাবারী সমস্যাটি সরাসরি তুলে ধরেন। বাগান দুটিতে ফল আছে, এ কথা আগেই বলা হয়ে গেছে। তবু খেজুর আর ডালিমের নাম আবার কেন এল, তিনি বলেন, তা নিয়ে মতভেদ হয়েছে। কেউ বলেছেন, নাম এসেছে কারণ খেজুর আর ডালিম ফলের মধ্যে পড়ে না। অন্যরা বলেছেন, এ দুটিও ফল। বাগাভী অল্প কথায় একই বিভাজন জানান। আর কুরতুবী আয়াতটি আলোচনা করেন দুটি প্রশ্নের অধীনে: এ দুটি আদৌ ফলের মধ্যে পড়ে কি না, আর সেই উত্তর থেকে বেরিয়ে আসা কসমের একটি বিধান।"
          },
          {
            "en": "What is at stake is the small word wa, and. In ordinary speech a thing is joined by and to something other than itself. If palms and pomegranates are fruit, the and needs explaining. If they are not, the verse simply lists three different gifts. Both sides read the same words and accept the same gift; they differ on what the joining tells us. The sources keep that difference open, and so does this article, giving each side in the words of those who report it.",
            "bn": "মূল প্রশ্নটা ছোট্ট একটি শব্দ নিয়ে: ওয়া, অর্থাৎ আর। সাধারণ কথায় 'আর' দিয়ে কোনো জিনিসকে জোড়া হয় তার থেকে ভিন্ন কিছুর সঙ্গে। খেজুর আর ডালিম যদি ফলই হয়, তবে এই 'আর'-এর ব্যাখ্যা দরকার। যদি ফল না হয়, তবে আয়াতটি সোজা তিনটি আলাদা দানের তালিকা। দুই পক্ষই একই শব্দ পড়েন, একই দান মেনে নেন। তফাত শুধু এতে যে জোড়াটা আমাদের কী জানায়। উৎসগুলো মতভেদটা খোলা রেখেছে, এ প্রবন্ধও তাই রাখছে। প্রত্যেক পক্ষের কথা আসছে যাঁরা তা বর্ণনা করেছেন তাঁদের ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Outside the Word Fruit",
          "bn": "ফল শব্দের বাইরে"
        },
        "p": [
          {
            "en": "The first view, as al-Qurtubi gives it: some scholars said that palms and pomegranates are not fruit, because a thing is not joined to itself but only to something else, and he adds that this is the apparent sense of the words. At-Tabari reports the same position in a line, that the two were named again because they are not fruit, and al-Baghawi attributes it to some without naming them. On this reading the verse counts three separate things growing in the gardens.",
            "bn": "প্রথম মত, কুরতুবী যেভাবে বলেন: কিছু আলিম বলেছেন খেজুর আর ডালিম ফল নয়। কারণ কোনো জিনিসকে তার নিজের সঙ্গে জোড়া হয় না, জোড়া হয় অন্য কিছুর সঙ্গে। কুরতুবী যোগ করেন, বাক্যের বাহ্যিক অর্থ এটাই। তাবারী একই মত এক লাইনে জানান: দুটির নাম আবার এসেছে কারণ এরা ফল নয়। বাগাভী মতটি 'কেউ কেউ'-এর বলে উল্লেখ করেন, নাম বলেন না। এই পাঠে আয়াতটি বাগানে জন্মানো তিনটি আলাদা জিনিস গুনছে।"
          },
          {
            "en": "Al-Qurtubi then records a reason drawn from the first hearers, introduced with it is said. Palms and pomegranates were to them at that time what wheat is to us. The palm was their general staple, the pomegranate like everyday produce, and both were planted widely, from Madina to Makka and on to the land of Yemen, because people needed them. Fruit, by contrast, meant the kinds they enjoyed and admired. So the verse names fruit, then sets the two apart for being so common among them.",
            "bn": "এরপর কুরতুবী 'বলা হয়' বলে প্রথম শ্রোতাদের অবস্থা থেকে নেওয়া একটি কারণ উল্লেখ করেন। সে সময় তাদের কাছে খেজুর আর ডালিম ছিল আমাদের কাছে গমের মতো। খেজুর ছিল তাদের সাধারণ খাদ্য, আর ডালিম ছিল রোজকার ফলফসলের মতো। প্রয়োজনের কারণে দুটোই বেশি বেশি লাগানো হতো, মদীনা থেকে মক্কা হয়ে ইয়ামানের ভূমি পর্যন্ত। অন্যদিকে ফল বলতে বোঝাত সেসব জাত, যা খেয়ে তারা মজা পেত আর মুগ্ধ হতো। তাই আয়াতটি আগে ফলের কথা বলে, তারপর তাদের মধ্যে এত প্রচলিত বলে এ দুটিকে আলাদা করে।"
          },
          {
            "en": "A further reason, again under it is said: the two were named on their own because the fruit of the palm is both fruit and food, and the pomegranate both fruit and remedy, so neither is purely for tafakkuh, the eating of something for its pleasure. This is al-Qurtubi's report of a classification, not a claim about diet. Its point is linguistic: on this view the word fakiha covers what is eaten for enjoyment, and these two serve more than enjoyment.",
            "bn": "'বলা হয়' দিয়ে আরও একটি কারণ আসে। দুটির নাম আলাদা এসেছে, কারণ খেজুর গাছের ফল একসঙ্গে ফলও, খাবারও। আর ডালিম একসঙ্গে ফলও, ওষুধও। ফলে কোনোটিই নিছক তাফাক্কুহ, অর্থাৎ মজা করে খাওয়ার জন্য নয়। এটা কুরতুবীর বর্ণনা করা শ্রেণিবিভাগ, খাদ্য নিয়ে কোনো দাবি নয়। এর মূল কথাটা ভাষাগত। এই মতে ফাকিহা শব্দ বোঝায় যা আনন্দের জন্য খাওয়া হয়, আর এ দুটির কাজ শুধু আনন্দে সীমিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Oath That Turns on Fakiha",
          "bn": "ফাকিহা শব্দে ঝুলে থাকা কসম"
        },
        "p": [
          {
            "en": "Al-Qurtubi's second question shows that the dispute was not idle. From the view that the two are not purely fruit, he says, comes the position of Abu Hanifa: if a man swears that he will not eat fruit, and then eats a pomegranate or fresh dates, he has not broken his oath. Al-Qurtubi then adds in the same breath that Abu Hanifa's two companions disagreed with him, and so did people in general.",
            "bn": "কুরতুবীর দ্বিতীয় প্রশ্ন দেখায়, মতভেদটা নিছক কথার কথা ছিল না। তিনি বলেন, এ দুটি খাঁটি ফল নয়, এই মত থেকেই আবু হানীফার অবস্থান এসেছে। কেউ যদি কসম খায় যে সে ফল খাবে না, তারপর ডালিম বা তাজা খেজুর খায়, তবে তার কসম ভাঙেনি। একই সঙ্গে কুরতুবী জানিয়ে দেন, আবু হানীফার দুই সাথী তাঁর সঙ্গে একমত হননি, সাধারণভাবে অন্যরাও হননি।"
          },
          {
            "en": "The ruling belongs to this world and the verse to the next; what links them is the meaning of a single word. An oath is judged by what its words mean, so a question about how fakiha is used in Arabic became a question about whether a vow was kept. The article reports the positions as al-Qurtubi gives them and settles nothing. Anyone actually bound by such an oath should ask a qualified scholar rather than lean on a summary of a commentary.",
            "bn": "বিধানটা দুনিয়ার, আয়াতটা আখিরাতের। দুটিকে জুড়েছে কেবল একটি শব্দের অর্থ। কসমের বিচার হয় তার শব্দের অর্থ দিয়ে। তাই আরবিতে ফাকিহা শব্দ কীভাবে ব্যবহৃত হয়, সে প্রশ্ন গিয়ে দাঁড়াল কসম রক্ষা হলো কি না, সেই প্রশ্নে। কুরতুবী যেভাবে দিয়েছেন, এ প্রবন্ধ মতগুলো সেভাবেই জানায়, কোনো মীমাংসা করে না। কেউ সত্যিই এমন কসমে বাঁধা পড়লে তাফসীরের সারসংক্ষেপের উপর ভর না করে একজন যোগ্য আলিমকে জিজ্ঞেস করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Named Again for Their Worth",
          "bn": "মর্যাদার কারণে আবার নাম"
        },
        "p": [
          {
            "en": "The second view, again in al-Qurtubi's words: the majority say the two are fruit, and the verse names them again for their merit and the fine place they hold among fruit. He gives two parallels. At 2:238 the believers are told to guard the prayers, and the middle prayer. At 2:98 the verse names Allah's angels and messengers, and then Jibril and Mika'il. Al-Baghawi reports the same, that most hold them to be fruit, named again to single them out and to give detail, citing 2:98.",
            "bn": "দ্বিতীয় মত, এটাও কুরতুবীর ভাষায়: অধিকাংশ আলিম বলেন এ দুটি ফলই। ফলের মধ্যে তাদের মর্যাদা আর সুন্দর অবস্থানের কারণে আয়াতটি আবার তাদের নাম নিয়েছে। তিনি দুটি দৃষ্টান্ত দেন। ২:২৩৮ আয়াতে মুমিনদের বলা হয়েছে সালাতগুলোর হেফাজত করতে, আর মধ্যবর্তী সালাতের। ২:৯৮ আয়াতে আল্লাহর ফেরেশতা ও রাসূলদের কথা বলার পর আলাদা করে নাম এসেছে জিবরীল আর মীকাঈলের। বাগাভীও একই কথা জানান: অধিকাংশের মতে এরা ফল, আলাদা করে চিহ্নিত করা আর বিস্তারিত বলার জন্য আবার নাম এসেছে। তিনিও ২:৯৮ উদ্ধৃত করেন।"
          },
          {
            "en": "At-Tabari gives the argument of this side at more length. They said the two are fruit because the Arabs count them as fruit. If asked why they are named again, they answered with 2:238: Allah commanded care for every prayer, then named one again to stress it, and at-Tabari's report identifies it as the afternoon prayer. In the same way palms and pomegranates were named again to make the people of Paradise long for them. Their second parallel is 22:18, where many of mankind are named after all in the heavens and the earth.",
            "bn": "এ পক্ষের যুক্তি তাবারী আরও বিস্তারে দেন। তাঁরা বলেছেন, এ দুটি ফল, কারণ আরবরা এদের ফলের মধ্যেই গণ্য করে। আবার নাম কেন এল, এ প্রশ্নের উত্তরে তাঁরা আনেন ২:২৩৮ আয়াত। আল্লাহ প্রতিটি সালাতের যত্ন নিতে বলেছেন, তারপর জোর দিতে একটির নাম আবার নিয়েছেন। তাবারীর বর্ণনায় সেটি আসরের সালাত। একইভাবে খেজুর আর ডালিমের নাম আবার এসেছে জান্নাতবাসীদের মনে আগ্রহ জাগাতে। তাঁদের দ্বিতীয় দৃষ্টান্ত ২২:১৮ আয়াত। সেখানে আসমান ও জমিনে যারা আছে সবার কথা বলার পর আবার আসে, আর মানুষের মধ্যে অনেকে।"
          },
          {
            "en": "Ibn Kathir names the device: the specific joined to the general, as al-Bukhari and others set it out, and he says the palm and the pomegranate were singled out for their nobility over other fruit. As-Sa'di folds the same reading into a sentence: fruit of every sort, and the most special of it the palm and the pomegranate, with the benefits they carry. Neither of these two mentions the opposing view in the text consulted for this verse; they simply read it this way.",
            "bn": "ইবন কাসীর কৌশলটির নাম বলেন: সাধারণের সঙ্গে বিশেষকে জোড়া, যেমন বুখারী ও অন্যরা তা সাব্যস্ত করেছেন। তিনি বলেন, অন্য ফলের উপর মর্যাদার কারণেই খেজুর আর ডালিমকে আলাদা করে নেওয়া হয়েছে। সা'দী একই পাঠ এক বাক্যে বলেন: সব রকমের ফল, আর তার মধ্যে বিশেষ হলো খেজুর আর ডালিম, যাদের মধ্যে আছে নানা উপকার। এ আয়াতে তাঁদের যে লেখা আনা হয়েছে, তাতে এ দুজনের কেউই বিপরীত মতের কথা তোলেন না। তাঁরা আয়াতটি সোজা এভাবেই পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Fruit in Pairs, Then Fruit",
          "bn": "জোড়ায় জোড়ায় সব ফল, তারপর ফল"
        },
        "p": [
          {
            "en": "Ibn Kathir also reads the verse against its counterpart in the first pair of gardens. There, at 55:52, the surah said: in both of them, of every fruit, two kinds. Here it says: in both of them, fruit, and palms, and pomegranates. He judges the first without doubt the wider, richer in single items and in variety. His grammatical reason is that fakiha here is an indefinite noun in a positive statement, and such a noun does not by itself take in every kind.",
            "bn": "ইবন কাসীর আয়াতটি প্রথম জোড়া বাগানের সমতুল্য আয়াতের পাশে রেখেও পড়েন। সেখানে ৫৫:৫২ আয়াতে সূরা বলেছে: দুটিতেই আছে প্রত্যেক ফলের দুই রকম। এখানে বলছে: দুটিতেই আছে ফল, আর খেজুর গাছ, আর ডালিম। তাঁর বিচারে প্রথমটি নিঃসন্দেহে বেশি ব্যাপক, তাতে আলাদা আলাদা ফল আর বৈচিত্র্য দুটোই বেশি। তাঁর ব্যাকরণগত কারণ হলো, এখানে ফাকিহা শব্দটি হ্যাঁ-বাচক বাক্যে অনির্দিষ্ট বিশেষ্য। এমন বিশেষ্য নিজে থেকে সব জাতকে শামিল করে না।"
          },
          {
            "en": "The abridged English Ibn Kathir, which treats 55:62 to 55:71 together, sets the two lists side by side and says plainly that the first description is better and covers more variety and more kinds of fruit. That ranking is his, made by comparing the two descriptions, and it fits his reading of the second pair as lower in rank. The first pair has its own treatment in the article on 55:46 and 55:47. Here it is enough that even the lower list is followed by the same refrain.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫৫:৬২ থেকে ৫৫:৭১ পর্যন্ত আয়াত একসঙ্গে আলোচনা করে। সেখানে দুটি তালিকা পাশাপাশি রেখে তিনি পরিষ্কার বলেন, প্রথম বর্ণনাটিই উত্তম, তাতে বৈচিত্র্য আর ফলের জাত বেশি। এই স্তরভেদ তাঁর নিজের, দুটি বর্ণনা মিলিয়ে দেখে করা। দ্বিতীয় জোড়াকে নিচের স্তর বলে তিনি যে পাঠ করেন, তার সঙ্গেও এটা মেলে। প্রথম জোড়ার আলোচনা আছে ৫৫:৪৬ ও ৫৫:৪৭ আয়াতের প্রবন্ধে। এখানে এটুকুই যথেষ্ট যে নিচের তালিকার পরেও আসে সেই একই ধুয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Left Unquoted Here",
          "bn": "যে বর্ণনাগুলো এখানে আসেনি"
        },
        "p": [
          {
            "en": "The commentaries attach several narrations to this verse. Ibn Kathir cites, through Abd ibn Humayd, a report from Umar (RA) of Jews asking the Prophet ﷺ whether Paradise has fruit, and, through Ibn Abi Hatim, a report from Abu Sa'id al-Khudri (RA) about the size of its pomegranates. The text consulted here gives no grading for either, and neither was confirmed on a consulted page with its collector's grading. So neither is quoted here. No tafsir consulted for this verse attaches a sound hadith to it.",
            "bn": "তাফসীরগুলো এ আয়াতের সঙ্গে কয়েকটি বর্ণনা জুড়ে দেয়। ইবন কাসীর আবদ ইবন হুমাইদের সূত্রে উমর (রাঃ)-এর একটি বর্ণনা আনেন। তাতে কয়েকজন ইহুদি নবী ﷺ-কে জিজ্ঞেস করে, জান্নাতে কি ফল আছে। আর ইবন আবী হাতিমের সূত্রে আনেন আবু সাঈদ খুদরী (রাঃ)-এর একটি বর্ণনা, জান্নাতের ডালিমের আকার নিয়ে। আনা লেখায় কোনোটিরই মান বলা নেই, আর সংকলকের নিজের দেওয়া মানসহ কোনো পাতায় কোনোটি যাচাই করা যায়নি। তাই এখানে কোনোটিই উদ্ধৃত হয়নি। এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে সহীহ হাদিস জোড়েনি।"
          },
          {
            "en": "The rest are not words of the Prophet ﷺ at all but sayings of Companions and later figures: Ibn Abbas (RA), Sa'id ibn Jubayr, Wahb al-Dhimari and Abu Ubayda, describing the trunks, fronds and fruit of the palms of Paradise. At-Tabari, al-Qurtubi, al-Baghawi and Ibn Kathir all carry some of them, without grading. Because the verse itself says only palms, and the article's rule is to rest on what can be confirmed, their details are left aside rather than retold as if they were settled.",
            "bn": "বাকিগুলো নবী ﷺ-এর কথাই নয়, সাহাবী ও পরবর্তী মানুষদের উক্তি: ইবন আব্বাস (রাঃ), সাঈদ ইবন জুবাইর, ওয়াহব আয-যিমারী আর আবু উবাইদা। তাঁরা জান্নাতের খেজুর গাছের কাণ্ড, পাতা আর ফলের বর্ণনা দিয়েছেন। তাবারী, কুরতুবী, বাগাভী আর ইবন কাসীর সবাই এর কিছু কিছু এনেছেন, কিন্তু মান উল্লেখ করেননি। আয়াত নিজে শুধু খেজুর গাছের কথা বলে। আর এ প্রবন্ধের নিয়ম হলো যাচাই করা যায় এমন কিছুর উপর দাঁড়ানো। তাই সেসব খুঁটিনাটি নিশ্চিত কথা হিসেবে আবার বলা হয়নি, পাশে সরিয়ে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks That Names the Gift",
          "bn": "নাম ধরে শুকরিয়া"
        },
        "p": [
          {
            "en": "Set side by side, the two views share more than they divide. Both read the same four words, and both accept that the gardens hold fruit, palms and pomegranates. Al-Qurtubi calls the second view the majority's and the first the apparent sense of the words; at-Tabari, in the text consulted, sets out both without choosing. The difference is over what the and signals: a new kind, or a familiar kind lifted out of the group. This article leaves the matter where the sources leave it.",
            "bn": "দুটি মত পাশাপাশি রাখলে দেখা যায়, অমিলের চেয়ে মিলই বেশি। দুই পক্ষই একই চারটি শব্দ পড়েন। দুই পক্ষই মানেন যে বাগানে আছে ফল, খেজুর গাছ আর ডালিম। কুরতুবী দ্বিতীয় মতকে বলেন অধিকাংশের মত, আর প্রথমটিকে বাক্যের বাহ্যিক অর্থ। আনা লেখায় তাবারী দুটি মতই তুলে ধরেন, কোনোটি বেছে নেন না। তফাত কেবল 'আর' শব্দটির ইঙ্গিতে: নতুন কোনো জাত, নাকি চেনা জাতকেই দল থেকে তুলে আলাদা করা। উৎসগুলো বিষয়টি যেখানে রেখেছে, এ প্রবন্ধও সেখানেই রাখছে।"
          },
          {
            "en": "Whichever reading one holds, the verse does something visible: it does not let palms and pomegranates disappear into a general word. Then 55:69 asks, as it has asked throughout the surah, which of the favours of your Lord the two of you will deny. Earlier, 55:60 asked whether the reward of good could be anything but good. In this verse the answer comes as gifts with names, even in the gardens described as the lower pair.",
            "bn": "যে পাঠই গ্রহণ করুন, আয়াতটি একটা কাজ স্পষ্টভাবে করে। খেজুর আর ডালিমকে একটা সাধারণ শব্দের ভিড়ে হারিয়ে যেতে দেয় না। তারপর ৫৫:৬৯ আয়াত সেই প্রশ্নটাই আবার করে, যা গোটা সূরা জুড়ে চলছে: তোমরা দুজন তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে? এর আগে ৫৫:৬০ আয়াত জিজ্ঞেস করেছিল, উত্তম কাজের প্রতিদান কি উত্তম ছাড়া অন্য কিছু হতে পারে? এ আয়াতে সেই উত্তর আসে নাম ধরে ধরে দেওয়া দানের আকারে, এমনকি নিচের জোড়া বলে বর্ণিত বাগানেও।"
          },
          {
            "en": "That suggests a habit for the reader. Thanks offered in general is easy and easily forgotten. Thanks that names the gift, this meal, this child, this hour of health, holds the mind on what was given. The verse does not command this; it shows it, and the refrain asks for an answer. It also teaches patience with honest scholarly difference over a single and. And it gives a reason to work for these gardens, and to aim higher than them.",
            "bn": "পাঠকের জন্য এখান থেকে একটা অভ্যাসের ইঙ্গিত মেলে। মোটা দাগে শুকরিয়া আদায় সহজ, ভুলে যাওয়াও সহজ। কিন্তু যে শুকরিয়া দানের নাম ধরে, যেমন এই খাবার, এই সন্তান, সুস্থ থাকার এই সময়টুকু, তা মনকে আটকে রাখে যা দেওয়া হয়েছে তার উপর। আয়াতটি এ নিয়ে হুকুম দেয় না, করে দেখায়। আর ধুয়া উত্তর চায়। একটিমাত্র 'আর' নিয়ে আলিমদের সৎ মতভেদের প্রতি ধৈর্যও এখান থেকে শেখা যায়। আর এ বাগানগুলোর জন্য আমল করার, এমনকি এর চেয়ে উঁচুতে লক্ষ্য রাখার কারণও এখানে আছে।"
          }
        ]
      }
    ]
  },
  "55:76": {
    "sections": [
      {
        "h": {
          "en": "The Residents of the Second Pair",
          "bn": "দ্বিতীয় জোড়ার বাসিন্দারা"
        },
        "p": [
          {
            "en": "Muttaki'ina 'ala rafrafin khudrin wa-'abqariyyin hisan: reclining on green rafraf and beautiful 'abqari. Six Arabic words, and two of them are the puzzle of the verse. The setting is the second pair of gardens, introduced in 55:62. Since then the surah has described their colour, their springs, their fruit, palms and pomegranates, and then the good and beautiful companions of 55:70 to 55:74. Now, as it did for the first pair, it turns to the people who live there and shows them at ease.",
            "bn": "মুত্তাকিঈনা আলা রফরফিন খুদরিন ওয়া আবকারিয়্যিন হিসান: তারা হেলান দিয়ে থাকবে সবুজ রফরফ আর সুন্দর আবকারীর উপর। আরবিতে মাত্র ছয়টি শব্দ, তার দুটিই এ আয়াতের ধাঁধা। পটভূমি দ্বিতীয় জোড়া বাগান, যার শুরু ৫৫:৬২ আয়াতে। এরপর সূরা একে একে বলেছে সেগুলোর রং, ঝরনা, ফল, খেজুর আর ডালিমের কথা। তারপর ৫৫:৭০ থেকে ৫৫:৭৪ আয়াতে এসেছে উত্তম স্বভাবের সুন্দরী সঙ্গিনীদের প্রসঙ্গ। প্রথম জোড়ার বেলায় যেমন হয়েছিল, এবারও সূরা ফেরে সেখানকার বাসিন্দাদের দিকে, আর তাদের দেখায় নিশ্চিন্ত আরামে।"
          },
          {
            "en": "At-Tabari's paraphrase sets the scene: those whom Allah has honoured with the honour described in these verses enjoy themselves in the two gardens, reclining on green rafraf and beautiful 'abqari. The Muyassar renders the verse plainly: reclining on cushions with green covers and on wondrous furnishings of surpassing workmanship and utmost beauty. What ittika', reclining, means as a posture was discussed under 55:54, where the residents of the first pair recline on beds lined with brocade. This verse adds nothing about the posture. All its new detail lies in what is beneath them.",
            "bn": "তাবারীর ব্যাখ্যায় ছবিটা এমন: এই আয়াতগুলোতে যে সম্মানের কথা এসেছে, আল্লাহ যাদের তা দিয়েছেন, তারা দুই বাগানে সুখে আছে, হেলান দিয়ে আছে সবুজ রফরফ আর সুন্দর আবকারীর উপর। মুয়াসসার পুরো আয়াতটা সহজ কথায় বলে: সবুজ ঢাকনাওয়ালা বালিশে আর অসাধারণ কারুকাজের অপরূপ বিছানায় তারা হেলান দিয়ে থাকবে। ইত্তিকা বা হেলান দেওয়া ঠিক কোন ভঙ্গি, সে আলোচনা হয়েছে ৫৫:৫৪ আয়াতে, যেখানে প্রথম জোড়ার বাসিন্দারা রেশমের আস্তর দেওয়া বিছানায় হেলান দিয়ে আছে। ভঙ্গি নিয়ে এ আয়াত নতুন কিছু বলে না। নতুন যা কিছু, সবই তাদের নিচে বিছানো জিনিস নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Meadows, Coverings or Cushions",
          "bn": "বাগিচা, ঢাকনা নাকি বালিশ"
        },
        "p": [
          {
            "en": "At-Tabari begins with a plain statement: the people of interpretation differed over the meaning of rafraf. He then sets out three positions, each with its chains. The first is that rafraf means riyad al-jannah, the meadows or gardens of Paradise, with rafrafa as its singular. He gives this from Sa'id ibn Jubayr by several routes, one through Shu'bah from Abu Bishr. Ibn Kathir gives the same report through Abu Dawud at-Tayalisi, and al-Baghawi records it from Sa'id ibn Jubayr and says it is also narrated from Ibn Abbas (RA).",
            "bn": "তাবারী শুরুতেই সোজা কথা বলেন: রফরফের অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। তারপর তিনি সনদসহ তিনটি মত সাজান। প্রথম মত, রফরফ মানে রিয়াদুল জান্নাহ, জান্নাতের বাগিচা বা উদ্যান। এর একবচন রফরফা। এ মত তিনি সাঈদ ইবন জুবায়র থেকে একাধিক সূত্রে আনেন, তার একটি শু'বা হয়ে আবু বিশর থেকে। ইবন কাসীর একই বর্ণনা আনেন আবু দাউদ তায়ালিসীর সূত্রে। বাগাভী এটি সাঈদ ইবন জুবায়র থেকে উল্লেখ করে বলেন, ইবন আব্বাস (রাঃ) থেকেও এমন বর্ণিত আছে।"
          },
          {
            "en": "The second position is that rafraf means al-mahabis, coverings. At-Tabari gives it from Ibn Abbas (RA) through Ali ibn Abi Talhah, and from Qatadah, ad-Dahhak and Ibn Zayd; one of Qatadah's chains has green mahabis. In another chain Ibn Abbas says the rafraf is the fudul, the extra lengths, of the mahabis and the spreads. A man named Ghazwan, and one Marwan, say the extra lengths of the mahabis; 'Antarah's father says of the beds and the mahabis. Al-Hasan says they are spreads, and the report adds that the people of Madinah say so.",
            "bn": "দ্বিতীয় মত, রফরফ মানে মাহাবিস, অর্থাৎ ঢাকনা বা আবরণ। তাবারী এটি এনেছেন আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে, আর কাতাদা, দাহহাক ও ইবন যায়দ থেকে। কাতাদার একটি সূত্রে আছে সবুজ মাহাবিস। আরেক সূত্রে ইবন আব্বাস বলেন, রফরফ হলো মাহাবিস আর বিছানার ফুদূল, মানে বাড়তি অংশ। গাযওয়ান নামের এক ব্যক্তি আর মারওয়ান বলেন মাহাবিসের বাড়তি অংশ। আনতারার পিতা বলেন বিছানা আর মাহাবিসের বাড়তি অংশ। হাসানের মতে এগুলো বিছানা বা গালিচা। বর্ণনায় এ কথাও আছে যে মদিনার লোকেরাও তা-ই বলে।"
          },
          {
            "en": "The third position is that rafraf means marafiq, cushions to lean on. At-Tabari reports through Qatadah that al-Hasan said: the rafraf are green marafiq. So al-Hasan stands in two camps, and that is how the reports reach us. At-Tabari sets the views side by side and, in the text consulted for this verse, does not say which he prefers. The site's translations take one path: green cushions in English, and green taqiyah, bolsters, in Bengali. That is one of the readings the early scholars held, not the only one.",
            "bn": "তৃতীয় মত, রফরফ মানে মারাফিক, অর্থাৎ ঠেস দেওয়ার বালিশ। তাবারী কাতাদার সূত্রে বর্ণনা করেন, হাসান বলেছেন: রফরফ হলো সবুজ মারাফিক। তাহলে হাসানকে দুই দলেই পাওয়া যায়। বর্ণনাগুলো আমাদের কাছে এভাবেই পৌঁছেছে। তাবারী মতগুলো পাশাপাশি রাখেন। এ আয়াতের যে পাঠ আনা হয়েছে, তাতে তিনি কোনটিকে প্রাধান্য দেন তা বলেন না। এ সাইটের অনুবাদ একটি পথ বেছে নিয়েছে: ইংরেজিতে সবুজ কুশন, বাংলায় সবুজ তাকীয়াহ্। এটি পূর্বসূরিদের একটি মত, একমাত্র মত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Near Neighbours in Meaning",
          "bn": "কাছাকাছি অর্থের সারি"
        },
        "p": [
          {
            "en": "The other commentators widen the list. Ibn Kathir names Mujahid, Ikrimah, al-Hasan, Qatadah and ad-Dahhak for mahabis, and reports al-'Ala' ibn Badr: the rafraf on the couch is like mahabis hanging down. He gives 'Asim al-Jahdari for wasa'id, pillows, and says this is also reported as al-Hasan al-Basri's view. Al-Baghawi has al-Hasan, Muqatil and al-Qurazi for spreads, ad-Dahhak and Qatadah for green majalis, seat coverings, above the beds, Ibn Kaysan for marafiq, and Ibn 'Uyaynah for zarabi, carpets.",
            "bn": "অন্য তাফসীরকারেরা তালিকাটা আরও বড় করেন। ইবন কাসীর মাহাবিসের মতের পক্ষে মুজাহিদ, ইকরিমা, হাসান, কাতাদা ও দাহহাকের নাম দেন। আলা ইবন বদরের কথাও আনেন: খাটের উপর রফরফ ঝুলে থাকা মাহাবিসের মতো। আসিম জাহদারীর মতে রফরফ মানে ওয়াসাইদ, বালিশ, আর ইবন কাসীর বলেন, হাসান বসরী থেকেও এ মত বর্ণিত আছে। বাগাভীর কাছে বিছানার মত হাসান, মুকাতিল ও কুরাযীর। দাহহাক ও কাতাদার মতে এগুলো বিছানার উপরে সবুজ মাজালিস, বসার আসন। ইবন কায়সানের মতে মারাফিক, আর ইবন উয়ায়নার মতে যারাবী, গালিচা।"
          },
          {
            "en": "Al-Qurtubi brings in the scholars of language. Abu 'Ubaydah says it is the border of a garment. Al-Layth says it is a kind of green cloth that is spread out. Some say raised beds; others say the Arabs call any broad cloth a rafraf, and al-Qurtubi quotes a line of the poet Ibn Muqbil to show the usage. Then he gives his judgement on the whole list: these are views close to one another. Apart from the meadows, nearly every gloss describes something of cloth, laid or hung where one reclines.",
            "bn": "কুরতুবী ভাষাবিদদের মত যোগ করেন। আবু উবায়দার মতে রফরফ কাপড়ের কিনারা। লায়সের মতে এক ধরনের সবুজ কাপড়, যা বিছিয়ে দেওয়া হয়। কেউ বলেছেন উঁচু বিছানা। আবার কেউ বলেছেন, আরবরা যেকোনো চওড়া কাপড়কেই রফরফ বলে। এ ব্যবহার দেখাতে কুরতুবী কবি ইবন মুকবিলের একটি পঙ্‌ক্তি উদ্ধৃত করেন। তারপর পুরো তালিকা নিয়ে তাঁর রায়: মতগুলো একটি আরেকটির কাছাকাছি। বাগিচার মতটি বাদ দিলে প্রায় সব ব্যাখ্যাই কাপড়ের কোনো জিনিসের কথা বলে, যা হেলান দেওয়ার জায়গায় বিছানো থাকে বা ঝুলে থাকে।"
          },
          {
            "en": "Al-Qurtubi also traces the root. Rafraf, he says, comes from raffa, said of something that rises; from it comes the rafrafa of a bird beating its wings in the air. The rafraf is also the lower edge of a tent and what hangs from a garment's sides. A view he relays from ath-Tha'labi ties it instead to a plant grown fresh and lush. He quotes the dictionary as-Sihah: green cloth from which mahabis are made. Ma'arif al-Qur'an cites the Qamus for greenish silk used for carpets, pillows and cushions, and the Sihah for patterns of trees and flowers.",
            "bn": "কুরতুবী শব্দটির মূলেও যান। তিনি বলেন, রফরফ এসেছে রাফ্‌ফা থেকে, যা বলা হয় কোনো কিছু উপরে উঠলে। সেখান থেকেই পাখির রফরফা, মানে বাতাসে ডানা ঝাপটানো। তাঁবুর নিচের কিনারা আর জামার পাশ থেকে যা ঝুলে থাকে, তাকেও রফরফ বলে। সা'লাবীর বরাতে তিনি আরেকটি মত আনেন, যা শব্দটিকে যুক্ত করে সতেজ হয়ে ওঠা সবুজ চারাগাছের সঙ্গে। অভিধান আস-সিহাহ থেকে তিনি উদ্ধৃত করেন: রফরফ সবুজ কাপড়, যা দিয়ে মাহাবিস বানানো হয়। মাআরিফুল কুরআন কামূসের বরাতে বলে, এটি সবুজাভ রেশমি কাপড়, যা দিয়ে গালিচা, বালিশ ও কুশন তৈরি হয়। আর সিহাহর বরাতে বলে, তাতে থাকে গাছ ও ফুলের নকশা।"
          }
        ]
      },
      {
        "h": {
          "en": "Carpets, Brocade and Fine Pile",
          "bn": "গালিচা, দীবাজ আর মিহি রোঁয়া"
        },
        "p": [
          {
            "en": "The second word, 'abqari, gathers its own list. Ibn Kathir reports that Ibn Abbas (RA), Qatadah, ad-Dahhak and as-Suddi said it means zarabi, carpets; in one of at-Tabari's chains Ibn Abbas says beautiful zarabi. Sa'id ibn Jubayr said 'itaq az-zarabi, which Ibn Kathir explains as the finest of them, and al-Baghawi gives that wording from Qatadah. Mujahid said dibaj, brocade. Ibn Zayd, in at-Tabari, said tanafis, a kind of rug. Abu al-'Aliyah, in Ibn Kathir and al-Baghawi, said tanafis with a pile, tending to fineness.",
            "bn": "দ্বিতীয় শব্দ আবকারী নিয়েও আলাদা একটা তালিকা আছে। ইবন কাসীর জানান, ইবন আব্বাস (রাঃ), কাতাদা, দাহহাক ও সুদ্দী বলেছেন এর অর্থ যারাবী, গালিচা। তাবারীর এক সূত্রে ইবন আব্বাস বলেন, সুন্দর গালিচা। সাঈদ ইবন জুবায়র বলেছেন ইতাকুয যারাবী, ইবন কাসীরের ব্যাখ্যায় গালিচার সেরাগুলো। বাগাভী এ কথাটি এনেছেন কাতাদা থেকে। মুজাহিদের মতে দীবাজ, মানে রেশমি কিংখাব। তাবারীতে ইবন যায়দের মত তানাফিস, এক ধরনের কার্পেট। ইবন কাসীর ও বাগাভী আবুল আলিয়ার মত আনেন: রোঁয়াওয়ালা তানাফিস, যার রোঁয়া মিহি।"
          },
          {
            "en": "At-Tabari's text, straight after al-Hasan's words on rafraf, says that 'abqari is the thick tanafis, a plural whose singular is 'abqariyya, and that it has been mentioned that the Arabs call every kind of spread 'abqari. Then comes the line: the people of interpretation said something like what we have said. Mujahid's brocade follows as the other view. Al-Baghawi defines it as zarabi and thick tanafis; al-Qurtubi gives the thick tanafis from al-Farra'. Ma'arif al-Qur'an keeps it broad: every fine, beautiful fabric, with hisan, beautiful, describing it.",
            "bn": "তাবারীর পাঠে রফরফ নিয়ে হাসানের কথার ঠিক পরেই আছে: আবকারী হলো পুরু তানাফিস। শব্দটি বহুবচন, একবচন আবকারিয়্যা। সেখানে আরও আছে, বলা হয় আরবরা সব ধরনের বিছানাকেই আবকারী বলে। এরপর আসে এই বাক্য: আমরা যা বলেছি, তাফসীরকারেরাও তার কাছাকাছি কথা বলেছেন। তারপর ভিন্ন মত হিসেবে আসে মুজাহিদের দীবাজ। বাগাভীর সংজ্ঞায় এটি গালিচা আর পুরু তানাফিস। কুরতুবী পুরু তানাফিসের মতটি আনেন ফাররা থেকে। মাআরিফুল কুরআন অর্থটা খোলা রাখে: যেকোনো মিহি, সুন্দর কাপড়। আর হিসান, অর্থাৎ সুন্দর, শব্দটি তারই গুণ বলে।"
          },
          {
            "en": "Some reports keep a sense of the unknown. Al-Hasan al-Basri, asked about the phrase, said: they are the spreads of the people of Paradise, la aba lakum, an Arabic cry of urging, so seek them. Another report from him says marafiq. Zayd ibn Aslam said: red, yellow and green. Al-'Ala' ibn Zayd, asked about 'abqari, said: the spreads are lower than that. And Abu Hazra Ya'qub ibn Mujahid said it is among the garments of the people of Paradise, which nobody knows. All of these come from Ibn Kathir.",
            "bn": "কিছু বর্ণনায় অজানার একটা ছোঁয়া থেকে যায়। হাসান বসরীকে এ শব্দ নিয়ে জিজ্ঞেস করা হলে তিনি বলেন: এগুলো জান্নাতবাসীদের বিছানা, লা আবা লাকুম, অতএব এগুলো পাওয়ার চেষ্টা করো। লা আবা লাকুম আরবদের এক ধরনের তাগিদের ডাক। তাঁর থেকে আরেক বর্ণনায় আছে মারাফিক। যায়দ ইবন আসলাম বলেন: লাল, হলুদ আর সবুজ। আলা ইবন যায়দকে আবকারী সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন: বিছানা তো এর চেয়ে নিচু জিনিস। আর আবু হাযরা ইয়াকুব ইবন মুজাহিদ বলেন, এটি জান্নাতবাসীদের এমন কাপড়, যা কেউ চেনে না। এসব বর্ণনা ইবন কাসীরের।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Arabs Used Abqari",
          "bn": "আরবদের মুখে আবকারী"
        },
        "p": [
          {
            "en": "Why this word? The lexical notes explain how the Arabs used it. Al-Qutaybi said every embroidered garment is 'abqari among the Arabs; Abu 'Ubaydah, that it is attributed to a land where embroidery was made. Al-Qurtubi adds, under it is said, that 'Abqar was a village in the region of Yemen where patterned spreads were woven. He reports Ibn al-Anbari: 'Abqar was originally a village inhabited by jinn, to which everything excellent was attributed; and al-Jawhari: a place that the Arabs claim, taz'umu, is of the land of the jinn.",
            "bn": "এই শব্দটিই কেন? ভাষার আলোচনাগুলো জানায়, আরবরা শব্দটি কীভাবে ব্যবহার করত। কুতায়বী বলেন, আরবদের কাছে যেকোনো নকশাদার কাপড়ই আবকারী। আবু উবায়দার মতে শব্দটি এমন এক ভূমির দিকে সম্পর্কিত, যেখানে নকশার কাজ হতো। কুরতুবী 'বলা হয়' বলে যোগ করেন, আবকার ছিল ইয়ামানের দিকে একটি গ্রাম, যেখানে নকশাদার বিছানা বোনা হতো। তিনি ইবনুল আনবারীর কথা আনেন: মূলে আবকার ছিল জিনদের বসতির এক গ্রাম, সব অসাধারণ জিনিসকে তার দিকে সম্পর্কিত করা হতো। আর জাওহারীর কথা: আবকার এমন এক জায়গা, যাকে আরবরা জিনদের এলাকা বলে ধারণা করত।"
          },
          {
            "en": "Then, al-Qurtubi says, they attributed to it anything whose skill, fine work and strength amazed them. The sources report this as the Arabs' belief and manner of speech, not as a fact about jinn or geography, and it is given here the same way. Al-Khalil widens it: whatever is grand and excellent, in people or things, the Arabs call 'abqari. Al-Qurtubi's conclusion is that Allah addressed them with what they were familiar with. And he asks: if the Creator of every pattern calls them beautiful, what do you imagine those carpets to be?",
            "bn": "কুরতুবী বলেন, এরপর যে জিনিসের দক্ষতা, সূক্ষ্ম কারিগরি আর শক্তি দেখে তারা অবাক হতো, সেটাকেই তারা আবকারের সঙ্গে জুড়ে দিত। উৎসগুলোতে এটা এসেছে আরবদের বিশ্বাস আর কথার ধরন হিসেবে, জিন বা ভূগোল সম্পর্কে কোনো তথ্য হিসেবে নয়। এখানেও কথাটা সেভাবেই রাখা হলো। খলীল অর্থটা আরও ব্যাপক করেন: মানুষ হোক বা জিনিস, যা কিছু মহৎ আর উৎকৃষ্ট, আরবরা তাকে আবকারী বলে। কুরতুবীর সিদ্ধান্ত, আল্লাহ তাদের সঙ্গে কথা বলেছেন তাদের চেনা ভাষায়। তারপর তিনি প্রশ্ন রাখেন: সব নকশার স্রষ্টা নিজেই যখন এগুলোকে সুন্দর বলছেন, ভেবে দেখুন তো, সেই গালিচাগুলো তবে কেমন হবে?"
          }
        ]
      },
      {
        "h": {
          "en": "The Word in a Prophetic Dream",
          "bn": "নবীজির ﷺ স্বপ্নে শব্দটি"
        },
        "p": [
          {
            "en": "Ibn Kathir, al-Baghawi and al-Qurtubi all cite, after al-Khalil, the Prophet's words about Umar (RA): I have not seen an 'abqari doing his work as he did it. The full hadith is in Sahih al-Bukhari, number 3682, from Abdullah ibn Umar (RA). It is not attached to this verse; it shows how the word was used. On the same page al-Bukhari's text adds Ibn Jubayr's gloss, al-'abqari is the finest of carpets, and Yahya's, that zarabi are tanafis with a fine pile. Hadith and tafsir meet on one word.",
            "bn": "ইবন কাসীর, বাগাভী ও কুরতুবী তিনজনই খলীলের কথার পর উমর (রাঃ) সম্পর্কে নবীজি ﷺ-এর বাণীটি আনেন: তাঁর মতো করে কাজটা করতে পারে, এমন কোনো আবকারী আমি দেখিনি। পূর্ণ হাদিসটি আবদুল্লাহ ইবন উমর (রাঃ) থেকে সহীহ বুখারীতে আছে, নম্বর ৩৬৮২। হাদিসটি এ আয়াতের সঙ্গে যুক্ত নয়; শব্দটা তখন কীভাবে বলা হতো, শুধু সেটুকুই দেখায়। একই জায়গায় বুখারীর পাঠে ইবন জুবায়রের ব্যাখ্যাও আছে: আবকারী মানে সেরা গালিচা। আর ইয়াহইয়ার কথা: যারাবী হলো মিহি রোঁয়াওয়ালা তানাফিস। হাদিস আর তাফসীর এখানে একই শব্দে এসে মেলে।"
          },
          {
            "en": "The Darussalam English reads: \"In a dream I saw myself drawing water from a well with a bucket. Abu Bakr came and drew a bucket or two weakly. May Allah forgive him. Then 'Umar bin Al-Khattab came and the bucket turned into a very large one in his hands. I had never seen such a mighty person as he in doing such hard work till all the people drank to their satisfaction and watered their camels that knelt down there.\" The Arabic behind such a mighty person is 'abqari.",
            "bn": "দারুসসালামের ইংরেজি অনুবাদে হাদিসটি এরকম: স্বপ্নে দেখলাম, আমি একটা কূপ থেকে বালতি দিয়ে পানি তুলছি। আবু বকর এসে দুর্বলভাবে এক-দুই বালতি তুললেন। আল্লাহ তাঁকে ক্ষমা করুন। তারপর এলেন উমর ইবনুল খাত্তাব, আর তাঁর হাতে বালতিটা বিশাল বড় হয়ে গেল। এমন কঠিন কাজ তাঁর মতো করে করতে পারে, এমন শক্তিমান কাউকে আমি দেখিনি। শেষে সব মানুষ তৃপ্ত হয়ে পান করল, আর উটগুলোকে পানি খাইয়ে সেখানে বসিয়ে রাখল। এখানে যাকে শক্তিমান বলা হলো, আরবিতে সে শব্দটি আবকারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Rafarif, Abaqiri: Rare Readings",
          "bn": "রাফারিফ ও আবাকিরী: বিরল পাঠ"
        },
        "p": [
          {
            "en": "No sound hadith is attached to 55:76 itself in the commentaries consulted. At-Tabari mentions a report from the Prophet ﷺ that the words were read rafarifa khudrin wa-'abaqiriyya, with an alif in both, and calls it not preserved and not sound in its chain. He notes that the reciters of every city read both words without the alif. He reports that Zuhayr al-Furqubi read both with the alif, and judges that rafarif could carry a correct sense, while 'abaqiri has none according to the grammarians of Arabic.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তাতে ৫৫:৭৬ আয়াতের সঙ্গে সরাসরি যুক্ত কোনো সহীহ হাদিস নেই। তাবারী নবীজি ﷺ থেকে একটি বর্ণনার কথা বলেন, যাতে শব্দ দুটি আলিফসহ পড়া হয়েছে: রাফারিফা খুদরিন ওয়া আবাকিরিয়্যা। তিনি বলেন, বর্ণনাটি সংরক্ষিত নয়, সনদও সহীহ নয়। সব শহরের কারীরা দুটি শব্দই আলিফ ছাড়া পড়েন। তাবারী জানান, যুহায়র ফুরকুবী দুটিই আলিফসহ পড়তেন। তাঁর বিচারে রাফারিফ পাঠের একটা শুদ্ধ অর্থ হতে পারে, কিন্তু আরবি ব্যাকরণবিদদের মতে আবাকিরী পাঠের কোনো শুদ্ধ অর্থ নেই।"
          },
          {
            "en": "Al-Qurtubi reports that Uthman (RA), al-Jahdari, al-Hasan and others read rafarif, a plural, and likewise 'abaqiri. Further on he says that some read 'abaqiri and calls it a mistake, because a word formed by attribution is not pluralised on that pattern; Qutrub disagreed, comparing it to kursi and karasi. Al-Qurtubi also mentions, through ath-Tha'labi, a report from one Abu Bakr that the Prophet ﷺ recited rafarifa khudrin wa-'abaqira hisan, and attaches no grading to it. The reading of the cities stands as recited.",
            "bn": "কুরতুবী জানান, উসমান (রাঃ), জাহদারী, হাসান ও আরও কয়েকজন বহুবচনে রাফারিফ পড়েছেন, আবাকিরীও তেমনি। কিছু পরে তিনি বলেন, কেউ কেউ আবাকিরী পড়েছেন, আর তিনি একে ভুল বলেন। কারণ, সম্বন্ধবাচক শব্দের বহুবচন এই ছাঁচে হয় না। কুতরুব এ মত মানেননি; তাঁর উদাহরণ কুরসী থেকে কারাসী। কুরতুবী সা'লাবীর সূত্রে আবু বকর নামের এক ব্যক্তির একটি বর্ণনাও আনেন: নবীজি ﷺ পড়েছেন রাফারিফা খুদরিন ওয়া আবাকিরা হিসান। এর মান সম্পর্কে তিনি কিছু বলেন না। তিলাওয়াতে চালু আছে শহরগুলোর পাঠই।"
          }
        ]
      },
      {
        "h": {
          "en": "Lower Pair, Still Beyond Telling",
          "bn": "নিচের জোড়াও বর্ণনার অতীত"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment on this verse with a comparison he draws himself. However rafraf and 'abqari are explained, he says, the furnishings of the first two gardens are higher, for there Allah said reclining on beds whose linings are of istabraq, 55:54, praising the linings and leaving the outer faces unsaid. He adds that the first pair ends with is the reward of ihsan anything but ihsan, 55:60, which names its people as people of ihsan, and he asks Allah to make us among the people of the first pair.",
            "bn": "এ আয়াতের আলোচনা ইবন কাসীর শেষ করেন নিজের একটা তুলনা দিয়ে। তিনি বলেন, রফরফ আর আবকারীর ব্যাখ্যা যা-ই হোক, প্রথম দুই বাগানের বিছানার মর্যাদা বেশি। কারণ সেখানে আল্লাহ বলেছেন, তারা হেলান দেবে এমন বিছানায়, যার আস্তর ইস্তাবরাকের (৫৫:৫৪)। আল্লাহ আস্তরের প্রশংসা করেছেন, উপরের দিকের কথা আর বলেননি। তিনি আরও বলেন, প্রথম জোড়ার বর্ণনা শেষ হয়েছে ৫৫:৬০ আয়াতে: ইহসানের প্রতিদান ইহসান ছাড়া আর কী? এ আয়াত সেখানকার বাসিন্দাদের ইহসানের লোক বলে পরিচয় দেয়। তারপর তিনি দোয়া করেন, আল্লাহ যেন আমাদের প্রথম জোড়ার বাসিন্দা বানান।"
          },
          {
            "en": "As-Sa'di also sets the two verses side by side, with the companions of each pair, and says the difference between them is known. He holds the first pair for the near ones, the prophets, the truthful and the elect, and the second for believers in general. Yet he insists that each of these gardens holds what no eye has seen, no ear has heard and no heart has imagined, and that each resident sees nobody better off than himself. The refrain of 55:77 follows, asking once more which of these favours could be denied.",
            "bn": "সা'দীও দুই আয়াত পাশাপাশি রাখেন, সঙ্গে দুই জোড়ার সঙ্গিনীদের কথাও, আর বলেন: দুইয়ের পার্থক্য তো জানা কথা। তাঁর মতে প্রথম জোড়া আল্লাহর নৈকট্যপ্রাপ্তদের জন্য: নবী, সিদ্দীক আর বিশেষ নেক বান্দারা। দ্বিতীয় জোড়া সাধারণ মুমিনদের জন্য। তবু তিনি জোর দিয়ে বলেন, এর প্রতিটি বাগানেই আছে এমন কিছু, যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, কোনো মানুষের মনে কল্পনাও আসেনি। আর সেখানকার প্রত্যেকেই ভাববে, তার চেয়ে ভালো অবস্থায় কেউ নেই। তারপর আসে ৫৫:৭৭ আয়াতের সেই প্রশ্ন: তোমাদের রবের কোন কোন নি'মাতকে অস্বীকার করবে?"
          }
        ]
      }
    ]
  }
});
