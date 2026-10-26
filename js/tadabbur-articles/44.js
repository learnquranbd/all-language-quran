/**
 * Tadabbur long-form articles — surah 44.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "44:3": {
    "sections": [
      {
        "h": {
          "en": "An Oath Answered by the Book",
          "bn": "কসমের জবাবে কিতাবেরই কথা"
        },
        "p": [
          {
            "en": "Surah ad-Dukhan opens with Ha Mim and an oath: by the clear Book (44:2). The answer comes at once in 44:3: inna anzalnahu fi laylatin mubarakatin, inna kunna mundhirin. Indeed We sent it down on a blessed night; indeed We have been warning. At-Tabari reads it exactly so: Allah swears by this Book that He sent it down on a blessed night. The Muyassar calls the Book clear in wording and meaning, and as-Sa'di calls it clear in everything that needs to be made plain.",
            "bn": "সূরা দুখান শুরু হয় হা-মীম দিয়ে, তারপর কসম: সুস্পষ্ট কিতাবের কসম (৪৪:২)। জবাব আসে সঙ্গে সঙ্গে, ৪৪:৩ আয়াতে: ইন্না আনযালনাহু ফী লাইলাতিম মুবারাকাহ, ইন্না কুন্না মুনযিরীন। আমি একে নাজিল করেছি এক বরকতময় রাতে, আমি তো সতর্ক করেই আসছি। তাবারী আয়াতটি ঠিক এভাবেই পড়েন: আল্লাহ এই কিতাবের কসম করে বলছেন, তিনি একে এক বরকতময় রাতে নাজিল করেছেন। মুয়াসসারের ভাষায় কিতাবটি শব্দে ও অর্থে সুস্পষ্ট। সা'দী বলেন, যা কিছু খুলে বলা দরকার, তার সবকিছুই এ কিতাব খুলে বলে।"
          },
          {
            "en": "The verse has eight Arabic words in two clauses, and both begin with inna, indeed We. The first says when the Book came down; the second says why it was sent at all. The next verse, 44:4, carries on with what happens on that night: therein every wise matter is made distinct. This article stays with 44:3 itself: which night the commentators took it to be, how they read the sending down, and what they say the warning means.",
            "bn": "আরবিতে আয়াতটির শব্দ আটটি, বাক্যাংশ দুটি, আর দুটোরই শুরু ইন্না দিয়ে: নিশ্চয়ই আমি। প্রথম অংশ জানায় কিতাব কখন নেমেছে। দ্বিতীয় অংশ জানায়, কিতাব আদৌ পাঠানো হলো কেন। পরের আয়াত ৪৪:৪ সেই রাতের কথাই এগিয়ে নেয়: সে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় আলাদা করে স্থির করা হয়। এ লেখা অবশ্য ৪৪:৩ আয়াতেই থাকবে। তাফসীরকারেরা রাতটিকে কোন রাত বলে বুঝেছেন, নাজিল হওয়াকে কীভাবে পড়েছেন, আর সতর্ক করার অর্থ কী বলেছেন, আলোচনা এটুকুই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blessing Lies",
          "bn": "বরকত কোথায়"
        },
        "p": [
          {
            "en": "Mubarakah, blessed, is glossed in the commentaries consulted here as abundance of good. The Muyassar, which names the night as the Night of Decree, calls it abundant in good things. As-Sa'di says it is abundant in good and in blessing. Al-Qurtubi gives a reason for the description: the night is called blessed because of the blessings, the good things and the reward that Allah sends down upon His servants in it. Each gloss describes the night by what is given in it.",
            "bn": "মুবারাকাহ, অর্থাৎ বরকতময়। হাতে থাকা তাফসীরগুলো শব্দটির ব্যাখ্যা দেয় কল্যাণের প্রাচুর্য দিয়ে। মুয়াসসার রাতটিকে ক্বদরের রাত বলে চিহ্নিত করে, আর বলে এ রাত বহু কল্যাণে ভরা। সা'দীর মতে রাতটি কল্যাণ ও বরকতে ভরপুর। কুরতুবী এ বিশেষণের কারণও বলে দেন: এ রাতে আল্লাহ তাঁর বান্দাদের উপর বরকত, কল্যাণ আর সওয়াব নাজিল করেন, তাই রাতটি বরকতময়। লক্ষ করুন, প্রতিটি ব্যাখ্যাই রাতকে চিনিয়েছে সে রাতে যা দেওয়া হয় তা দিয়ে।"
          },
          {
            "en": "As-Sa'di draws a line through the verse: the best of speech was sent down on the best of nights and days, to the best of humankind, in the language of the noble Arabs. He identifies the night as the Night of Decree, which is better than a thousand months, the wording of 97:3, whose own article treats the night's merit. Here only the order of his sentence matters. He begins with the speech, then the night, then the one who received it.",
            "bn": "সা'দী পুরো আয়াতটিকে এক সুতোয় গাঁথেন। সর্বোত্তম কালাম নাজিল হয়েছে সর্বোত্তম রাত ও দিনে, সৃষ্টির সর্বোত্তম মানুষের উপর, সম্মানিত আরবদের ভাষায়। রাতটিকে তিনি ক্বদরের রাত বলে চিহ্নিত করেন, যা হাজার মাসের চেয়ে উত্তম। কথাটি ৯৭:৩ আয়াতের, আর রাতটির মর্যাদা নিয়ে আলোচনা সেই আয়াতের লেখায় আছে। এখানে শুধু তাঁর বাক্যের ক্রমটা দেখার মতো। তিনি শুরু করেন কালাম দিয়ে, তারপর রাত, তারপর যিনি কালামটি পেয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Read as the Night of Decree",
          "bn": "ক্বদরের রাত হিসেবে পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari states the question openly: the people of interpretation differed over which night of the year this is. Some said it is the Night of Decree, and he gives their reports. From Qatada, by two chains: the blessed night is the Night of Decree. From Ibn Zayd: that night is the Night of Decree; Allah sent this Qur'an down from the Mother of the Book on that night, and then sent it down in other nights and days. Al-Baghawi names the same two, Qatada and Ibn Zayd, for this view.",
            "bn": "তাবারী প্রশ্নটা খোলাখুলি সামনে আনেন: বছরের কোন রাত এটি, তা নিয়ে তাফসীরবিদদের মতভেদ হয়েছে। কেউ বলেছেন, এটি ক্বদরের রাত। তারপর তিনি তাঁদের বর্ণনাগুলো আনেন। কাতাদা থেকে দুই সূত্রে: বরকতময় রাতটি হলো ক্বদরের রাত। ইবন যায়দ থেকে: সে রাত ক্বদরের রাত। আল্লাহ এ কুরআন সে রাতে উম্মুল কিতাব থেকে নাজিল করেন, তারপর নাজিল করেন অন্যান্য রাতে ও দিনে। বাগাভীও এ মতের জন্য একই দুজনের নাম নেন, কাতাদা ও ইবন যায়দ।"
          },
          {
            "en": "Those who hold this view rest it on other verses. Ibn Kathir says Allah sent it down on a blessed night, the Night of Decree, as He says in 97:1: inna anzalnahu fi laylati al-qadr, We sent it down in the Night of Decree. That was in Ramadan, he adds, as 2:185 says: the month of Ramadan in which the Qur'an was sent down. Ma'arif al-Qur'an cites both verses and gives this as the reading of the majority of commentators, a night in the last ten of Ramadan. The Muyassar and as-Sa'di simply name it the Night of Decree.",
            "bn": "এ মতের অনুসারীরা দলিল নেন অন্য আয়াত থেকে। ইবন কাসীর বলেন, আল্লাহ একে নাজিল করেছেন এক বরকতময় রাতে, আর তা ক্বদরের রাত। যেমন তিনি ৯৭:১ আয়াতে বলেছেন: ইন্না আনযালনাহু ফী লাইলাতিল ক্বদর, আমি একে নাজিল করেছি ক্বদরের রাতে। তিনি যোগ করেন, এটা ছিল রমজানে, কারণ ২:১৮৫ আয়াত বলছে: রমজান মাস, যাতে কুরআন নাজিল হয়েছে। মাআরিফুল কুরআনও দুটি আয়াতই আনে, আর বলে এটিই অধিকাংশ তাফসীরকারের মত: রাতটি রমজানের শেষ ১০ রাতের একটি। মুয়াসসার ও সা'দী সরাসরি একে ক্বদরের রাত বলেন।"
          },
          {
            "en": "At-Tabari's first report from Qatada carries a list of dates. In it Qatada says the scrolls of Ibrahim (AS) came down on the first night of Ramadan, the Torah after six nights of it had passed, the Zabur after sixteen, the Injil after eighteen, and the Furqan after 24. That is Qatada's own statement as at-Tabari records it. Al-Qurtubi and Ma'arif al-Qur'an give a similar list as a saying of the Prophet ﷺ through Wathila, with the Zabur on the twelfth; that version could not be confirmed in a hadith collection here, so it is not relied on.",
            "bn": "কাতাদা থেকে তাবারীর প্রথম বর্ণনায় কিছু তারিখের তালিকাও আছে। তাতে কাতাদা বলেন, ইবরাহীম (আঃ)-এর সহীফা নাজিল হয় রমজানের প্রথম রাতে। তাওরাত নাজিল হয় রমজানের ৬ রাত পার হওয়ার পর, যাবূর ১৬ রাত পর, ইনজীল ১৮ রাত পর, আর ফুরকান ২৪ রাত পর। এটা কাতাদার নিজের কথা, তাবারী যেমন লিপিবদ্ধ করেছেন। কুরতুবী ও মাআরিফুল কুরআন প্রায় একই তালিকা আনেন ওয়াসিলা (রাঃ)-এর সূত্রে নবী ﷺ-এর বাণী হিসেবে, সেখানে যাবূরের তারিখ ১২। সেই বর্ণনা কোনো হাদিস গ্রন্থে এখানে যাচাই করা যায়নি, তাই তার উপর নির্ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night in Mid-Sha'ban",
          "bn": "মধ্য-শাবানের রাত"
        },
        "p": [
          {
            "en": "The second view places the night in Sha'ban. At-Tabari reports it without names: others said, rather, it is the night of the middle of Sha'ban. Al-Baghawi likewise gives it to others. Ibn Kathir names its source as reported from Ikrimah, and al-Qurtubi states it as Ikrimah's: the blessed night here is the night of the middle of Sha'ban. Ma'arif al-Qur'an says some scholars of tafsir, like Ikrimah, took it as laylat al-bara'ah, the night of immunity, the fifteenth night of Sha'ban.",
            "bn": "দ্বিতীয় মতে রাতটি শাবান মাসের। তাবারী মতটি আনেন কারও নাম ছাড়াই: অন্যরা বলেছেন, বরং এটি মধ্য-শাবানের রাত। বাগাভীও মতটিকে অন্যদের বলে উল্লেখ করেন। ইবন কাসীর এর উৎস জানান, ইকরিমা থেকে এমন বর্ণনা আছে। কুরতুবী মতটি ইকরিমার নামেই আনেন: এখানে বরকতময় রাত মানে মধ্য-শাবানের রাত। মাআরিফুল কুরআন বলে, ইকরিমার মতো কোনো কোনো তাফসীরবিদ একে লাইলাতুল বারাআত বলে বুঝেছেন, অর্থাৎ শাবানের পনেরো তারিখের রাত।"
          },
          {
            "en": "Al-Qurtubi first names the blessed night as the Night of Decree, then adds, under the words it is said, the night of mid-Sha'ban, and records four names: the blessed night, the night of bara'ah, the night of the deed (as-sakk), and the Night of Decree. Ma'arif al-Qur'an explains how the second view arose. Some versions of a tradition say that births, deaths and sustenance are decreed on the night of mid-Sha'ban, and some use the very words of 44:4, so some scholars took the blessed night to be that night.",
            "bn": "কুরতুবী প্রথমে বরকতময় রাতকে ক্বদরের রাত বলেন। তারপর 'বলা হয়' কথাটি দিয়ে মধ্য-শাবানের রাতের মত আনেন, আর চারটি নাম লিপিবদ্ধ করেন: বরকতময় রাত, বারাআতের রাত, দলিলের রাত (আস-সাক্ক), আর ক্বদরের রাত। দ্বিতীয় মতটি কোথা থেকে এল, মাআরিফুল কুরআন তা ব্যাখ্যা করে। কোনো কোনো বর্ণনায় আছে, জন্ম, মৃত্যু আর রিযিক মধ্য-শাবানের রাতে নির্ধারিত হয়। কিছু বর্ণনায় আবার ৪৪:৪ আয়াতের হুবহু শব্দও এসেছে। এ কারণে কিছু আলেম বরকতময় রাত বলতে সেই রাতকেই বুঝেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Commentator's Own Verdict",
          "bn": "প্রত্যেক মুফাসসিরের নিজের রায়"
        },
        "p": [
          {
            "en": "Most of the commentators consulted here state a preference, and each preference is his own. At-Tabari says the correct view is that of those who said it means the Night of Decree, because Allah has informed that it is so. Al-Qurtubi says the first view is sounder, because of His words, We sent it down in the Night of Decree. Ibn Kathir is the sharpest: whoever said it is the night of mid-Sha'ban, as is reported from Ikrimah, has gone far afield, since the text of the Qur'an places it in Ramadan.",
            "bn": "হাতে থাকা তাফসীরকারদের বেশিরভাগই নিজের পছন্দের মত জানিয়েছেন, আর প্রতিটি পছন্দ তাঁর নিজের। তাবারী বলেন, সঠিক মত তাঁদের, যাঁরা বলেছেন এখানে ক্বদরের রাত উদ্দেশ্য, কারণ আল্লাহ জানিয়ে দিয়েছেন যে ব্যাপারটা এমনই। কুরতুবীর মতে প্রথম মতটি অধিক বিশুদ্ধ, কারণ আল্লাহ বলেছেন: আমি একে নাজিল করেছি ক্বদরের রাতে। ইবন কাসীরের ভাষা সবচেয়ে কড়া। ইকরিমা থেকে যেমন বর্ণিত, কেউ যদি বলে এটি মধ্য-শাবানের রাত, তবে সে লক্ষ্য থেকে অনেক দূরে সরে গেছে, কারণ কুরআনের স্পষ্ট বক্তব্য হলো রাতটি রমজানে।"
          },
          {
            "en": "Ibn Kathir also takes up a report the second view could lean on. He cites, through al-Zuhri from Uthman ibn Muhammad ibn al-Mughira ibn al-Akhnas, that the Prophet ﷺ said life-spans are cut off from Sha'ban to Sha'ban. He grades it himself: it is a mursal report, and its like cannot be set against the texts. Ma'arif al-Qur'an repeats his judgement and adds that Qadi Abu Bakr ibn al-Arabi held that no authentic report shows sustenance, births and deaths being decreed on mid-Sha'ban.",
            "bn": "দ্বিতীয় মত যে বর্ণনার উপর ভর করতে পারত, ইবন কাসীর সেটাও আলোচনায় আনেন। যুহরী থেকে, উসমান ইবন মুহাম্মাদ ইবন মুগীরা ইবন আখনাসের সূত্রে তিনি উল্লেখ করেন, নবী ﷺ বলেছেন: শাবান থেকে শাবান পর্যন্ত আয়ু নির্ধারিত হয়। বর্ণনাটির মান তিনি নিজেই বলে দেন: এটি মুরসাল, আর এমন বর্ণনা দিয়ে স্পষ্ট নস খণ্ডন করা যায় না। মাআরিফুল কুরআন তাঁর এই রায় উদ্ধৃত করে, আর যোগ করে কাযী আবু বকর ইবনুল আরাবীর কথা: রিযিক, জন্ম ও মৃত্যু মধ্য-শাবানে নির্ধারিত হওয়ার ব্যাপারে কোনো সহীহ বর্ণনা নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an also records a way of holding both. It notes that Ruh al-Ma'ani cites, without a chain, a report from Ibn Abbas (RA) that sustenance, life and death are determined on mid-Sha'ban and handed to the angels on the Night of Decree. If that is confirmed, it says, the two readings can be reconciled; otherwise the Qur'an's words point to the Night of Decree. It treats the merit of mid-Sha'ban as a separate issue: the traditions are weak and Ibn al-Arabi denied any merit, yet taken together they may gain strength, and many great scholars accepted them for meritorious deeds.",
            "bn": "মাআরিফুল কুরআন দুই মত মেলানোর একটি পথের কথাও লিখে রাখে। রূহুল মাআনী সনদ ছাড়া ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনে: রিযিক, জীবন ও মৃত্যু মধ্য-শাবানের রাতে নির্ধারিত হয়, আর ক্বদরের রাতে তা ফেরেশতাদের হাতে তুলে দেওয়া হয়। মাআরিফুল কুরআন বলে, এ বর্ণনা প্রমাণিত হলে দুই মত মিলে যায়। না হলে কুরআনের শব্দ ক্বদরের রাতের দিকেই ইঙ্গিত করে। মধ্য-শাবানের ফযীলতকে সে আলাদা বিষয় বলে। এ নিয়ে বর্ণনাগুলো দুর্বল, ইবনুল আরাবী কোনো ফযীলতই মানেননি। তবু সব সূত্র একসঙ্গে ধরলে সেগুলো শক্তি পেতে পারে, আর ফযীলতের আমলে বহু বড় আলেম সেগুলো গ্রহণ করেছেন।"
          },
          {
            "en": "Two things remain for a careful reader. None of the commentaries consulted here attaches a sound hadith to 44:3 that names the night. And the preferences above belong to those who stated them: at-Tabari, al-Qurtubi, Ibn Kathir and Ma'arif al-Qur'an each judged the night to be the Night of Decree, while Ikrimah, as they report him, and the unnamed others held the night of mid-Sha'ban. This article records the disagreement and its reasons as the texts give them, and leaves the weighing with its holders.",
            "bn": "মনোযোগী পাঠকের জন্য দুটি কথা থেকে যায়। হাতে থাকা কোনো তাফসীরই ৪৪:৩ আয়াতের সঙ্গে এমন কোনো সহীহ হাদিস জুড়ে দেয়নি, যা রাতটির নাম বলে দেয়। আর ওপরের পছন্দগুলো যাঁরা বলেছেন, তাঁদেরই। তাবারী, কুরতুবী, ইবন কাসীর ও মাআরিফুল কুরআন প্রত্যেকে রাতটিকে ক্বদরের রাত বলে রায় দিয়েছেন। অন্যদিকে তাঁদের বর্ণনামতে ইকরিমা, আর নাম না জানা অন্যরা, মধ্য-শাবানের রাতের মত পোষণ করেছেন। এ লেখা মতভেদ আর তার কারণগুলো তুলে ধরে, তাফসীরে যেমন আছে। কোন মত ভারী, সে বিচার যাঁদের মত, তাঁদের কাছেই থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "All at Once, or a Beginning",
          "bn": "একবারে, নাকি সূচনা"
        },
        "p": [
          {
            "en": "A second question is what anzalnahu, We sent it down, means here, since the Qur'an reached the Prophet ﷺ over many years. Al-Qurtubi lists three readings, each under it is said. The whole Qur'an was sent down to the lowest heaven on this night, then sent down portion by portion, najman najman, on other days as occasions arose. Or, on each Night of Decree came down what would be revealed through the rest of that year. Or, the sending down began on this night.",
            "bn": "দ্বিতীয় প্রশ্ন হলো, এখানে আনযালনাহু, আমি একে নাজিল করেছি, কথাটির মানে কী। কুরআন তো নবী ﷺ-এর কাছে পৌঁছেছে বহু বছর ধরে। কুরতুবী তিনটি ব্যাখ্যা আনেন, প্রতিটিই 'বলা হয়' দিয়ে। এক, পুরো কুরআন এ রাতে নিকটতম আসমানে নাজিল হয়, তারপর প্রয়োজন ও ঘটনা অনুযায়ী অন্যান্য দিনে অল্প অল্প করে নামে। কুরতুবীর শব্দ নাজমান নাজমান। দুই, প্রতি ক্বদরের রাতে নামত সে বছরের বাকি সময়ে যা নাজিল হওয়ার কথা। তিন, এ রাতেই নাজিলের সূচনা হয়।"
          },
          {
            "en": "Al-Qurtubi then gives the first reading in the names of Qatada and Ibn Zayd: Allah sent the whole Qur'an down on the Night of Decree from the Mother of the Book to the House of Honour, Bayt al-Izzah, in the lowest heaven, then sent it down to His Prophet ﷺ in nights and days over 23 years. Al-Baghawi gives the same two names and the same descent from the Mother of the Book, with Jibril bringing it down in portions over twenty years. The two figures differ in the texts as consulted, and both are reported as they stand.",
            "bn": "এরপর কুরতুবী প্রথম ব্যাখ্যাটি আনেন কাতাদা ও ইবন যায়দের নামে। আল্লাহ পুরো কুরআন ক্বদরের রাতে উম্মুল কিতাব থেকে নিকটতম আসমানের বাইতুল ইযযায় নাজিল করেন। তারপর ২৩ বছর ধরে রাতে ও দিনে তা নাজিল করেন তাঁর নবী ﷺ-এর উপর। বাগাভীও একই দুজনের নাম নেন, উম্মুল কিতাব থেকে নিকটতম আসমানে নামার কথাও বলেন। তবে তাঁর বর্ণনায় জিবরীল কুরআন নিয়ে আসেন অল্প অল্প করে ২০ বছরে। হাতে থাকা পাঠে দুই সংখ্যা আলাদা, তাই দুটোই যেমন আছে তেমন রাখা হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the descent of the whole as the meaning of the statement that the Qur'an came down on the Night of Decree: in its entirety, from the Preserved Tablet to the lowest heaven, in one night of Ramadan, and then to the Prophet ﷺ gradually over 23 years. Through al-Qurtubi it also reports the view of some scholars that each year's portion was sent down on that year's Night of Decree. Al-Qurtubi himself lists his three readings and states no preference among them.",
            "bn": "মাআরিফুল কুরআনের মতে কুরআন ক্বদরের রাতে নাজিল হওয়ার অর্থ পুরো কুরআন একসঙ্গে নামা। রমজানের একটি রাতে গোটা কুরআন লাওহে মাহফুয থেকে নিকটতম আসমানে নেমে আসে, তারপর ২৩ বছরে ধীরে ধীরে নবী ﷺ-এর কাছে পৌঁছায়। কুরতুবীর বরাতে সে কিছু আলেমের মতও আনে: প্রতি বছরের অংশটুকু সে বছরের ক্বদরের রাতে নাজিল হতো। কুরতুবী নিজে তাঁর তিনটি ব্যাখ্যা পাশাপাশি রেখেছেন, কোনোটিকে অন্যটির উপর প্রাধান্য দেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Long Given",
          "bn": "সতর্কবাণী, বহু আগে থেকেই"
        },
        "p": [
          {
            "en": "The second clause, inna kunna mundhirin, gives the purpose. Ibn Kathir explains it as teaching people what benefits and what harms them through the Sharia, so that Allah's proof stands against His servants. The Muyassar is close: warning people of what benefits and harms them, by sending messengers and sending down books, so that Allah's proof is established over His servants. At-Tabari reads it as warning, through this Book sent down on the blessed night, of Our punishment falling on whoever disbelieves and does not turn to Our oneness.",
            "bn": "দ্বিতীয় বাক্যাংশ, ইন্না কুন্না মুনযিরীন, উদ্দেশ্যটা বলে দেয়। ইবন কাসীরের ব্যাখ্যায় এর অর্থ: শরীয়তের মাধ্যমে মানুষকে জানিয়ে দেওয়া, কীসে তাদের উপকার আর কীসে ক্ষতি, যাতে বান্দাদের বিরুদ্ধে আল্লাহর হুজ্জত প্রতিষ্ঠিত হয়। মুয়াসসারের কথাও কাছাকাছি। রাসূল পাঠিয়ে ও কিতাব নাজিল করে মানুষকে উপকার-ক্ষতি সম্পর্কে সতর্ক করা, যাতে আল্লাহর হুজ্জত কায়েম হয়। তাবারীর পাঠে সতর্কবাণীটা এমন: বরকতময় রাতে নাজিল হওয়া এ কিতাবের মাধ্যমে জানিয়ে দেওয়া যে, যে কুফরি করে আর তাওহিদের দিকে ফেরে না, তার উপর আমার শাস্তি নেমে আসবে।"
          },
          {
            "en": "As-Sa'di says the Book was sent down to warn by it a people whom ignorance had covered and wretchedness had overcome, so that they would take light from it, follow its guidance, and gain the good of this world and the next. On his reading the warning's aim is rescue. The verse, and his description, speak of what the text speaks of and license nothing against any living person or community. The Muyassar's mention of messengers and books also places this Book in a line of warnings sent before it.",
            "bn": "সা'দী বলেন, কিতাবটি নাজিল হয়েছে এমন এক জাতিকে সতর্ক করতে, অজ্ঞতা যাদের ঢেকে ফেলেছিল আর দুর্ভাগ্য যাদের উপর চেপে বসেছিল। উদ্দেশ্য, তারা যেন এর আলো থেকে আলো নেয়, এর হেদায়াত অনুসরণ করে, আর দুনিয়া ও আখিরাতের কল্যাণ পায়। তাঁর পাঠে সতর্ক করার লক্ষ্য তাই উদ্ধার করা। আয়াতটি আর সা'দীর বর্ণনা কেবল সেটুকুই বলে, যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এখান থেকে কোনো অনুমতি মেলে না। মুয়াসসার রাসূল ও কিতাবের কথা বহুবচনে বলে, তাতে এ কিতাব আগের সতর্কবাণীগুলোর ধারাতেই এসে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Night Honoured by Its Book",
          "bn": "কিতাবের কারণে সম্মানিত রাত"
        },
        "p": [
          {
            "en": "What can a reader take from a verse whose night is disputed? First, the verse's own claim does not depend on the dispute: whichever night it was, Allah sent the Book down in it and called it blessed. Second, the dispute is itself a lesson in method. At-Tabari opens by saying the people of interpretation differed, sets out the reports, and only then gives his own preference, keeping the two apart. A reader can hold a scholar's preference as his and still know the other view and who held it.",
            "bn": "যে আয়াতের রাত নিয়েই মতভেদ, তা থেকে পাঠক কী নেবেন? প্রথমত, আয়াতের মূল দাবি এ মতভেদের উপর নির্ভর করে না। রাতটি যে রাতই হোক, আল্লাহ সে রাতে কিতাব নাজিল করেছেন আর রাতটিকে বরকতময় বলেছেন। দ্বিতীয়ত, মতভেদ নিজেই একটা শিক্ষা দেয়: মতভেদ কীভাবে সামলাতে হয়। তাবারী শুরুতেই জানিয়ে দেন যে তাফসীরবিদদের মধ্যে মতভেদ আছে। তারপর বর্ণনাগুলো সাজিয়ে দেন, আর সবশেষে নিজের পছন্দের কথা বলেন। দুটোকে তিনি আলাদা রাখেন। পাঠকও কোনো আলেমের পছন্দকে তাঁর পছন্দ হিসেবেই নিতে পারেন, আবার অন্য মতটি কী আর কারা সে মত দিয়েছেন, তাও জেনে রাখতে পারেন।"
          },
          {
            "en": "The clause on warning turns the verse toward the reader. On Ibn Kathir's and the Muyassar's reading, the warning is knowledge of what benefits and what harms, given so that Allah's proof stands. The night on which the Book came down has passed; the Book itself stays open. Reading it with that warning in view, and acting on what it says helps and harms, is the part of this verse that belongs to every night of the year.",
            "bn": "সতর্ক করার বাক্যাংশটি আয়াতকে পাঠকের দিকে ঘুরিয়ে দেয়। ইবন কাসীর ও মুয়াসসারের পাঠে এ সতর্কবাণী মানে কীসে উপকার আর কীসে ক্ষতি, সেই জ্ঞান। এ জ্ঞান দেওয়া হয়েছে, যাতে আল্লাহর হুজ্জত কায়েম থাকে। যে রাতে কিতাব নেমেছিল, সে রাত পেরিয়ে গেছে। কিন্তু কিতাবটি আজও খোলা। সেই সতর্কবাণী মাথায় রেখে কিতাবটি পড়া, আর কিতাব যাকে উপকারী বলে তা করা, যাকে ক্ষতিকর বলে তা থেকে দূরে থাকা: আয়াতের এই অংশ বছরের প্রতিটি রাতের জন্য।"
          }
        ]
      }
    ]
  },
  "44:8": {
    "sections": [
      {
        "h": {
          "en": "From Lordship to Worship",
          "bn": "রুবুবিয়াত থেকে ইবাদতে"
        },
        "p": [
          {
            "en": "The verse before ends on a condition: Lord of the heavens and the earth and all between them, if you would be certain (44:7). The Muyassar draws the inference that the condition invites: if you are certain of that, then know that the Lord of all creatures is their true God. Then 44:8 states it outright: la ilaha illa huwa, yuhyi wa yumit, rabbukum wa rabbu aba'ikum al-awwalin. There is no god but Him; He gives life and causes death; your Lord and the Lord of your first forefathers.",
            "bn": "আগের আয়াত শেষ হয় একটি শর্তে: আকাশ, পৃথিবী আর এ দুয়ের মাঝের সবকিছুর রব, যদি তোমরা দৃঢ় বিশ্বাসী হও (৪৪:৭)। মুয়াসসার এ শর্ত থেকে সিদ্ধান্তটা টেনে বের করে: এ কথায় যদি তোমাদের দৃঢ় বিশ্বাস থাকে, তবে জেনে রাখো, সব সৃষ্টির যিনি রব, তিনিই তাদের সত্য ইলাহ। তারপর ৪৪:৮ কথাটা সরাসরি বলে দেয়: লা ইলাহা ইল্লা হুয়া, ইউহয়ী ওয়া ইউমীত, রব্বুকুম ওয়া রব্বু আবাইকুমুল আওয়ালীন। তিনি ছাড়া কোনো ইলাহ নেই। তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। তিনি তোমাদের রব, তোমাদের আগের পূর্বপুরুষদেরও রব।"
          },
          {
            "en": "The order of the two verses is the argument. First comes lordship: who made and owns the heavens and the earth. Then comes the claim that follows from it: who alone may be worshipped. At-Tabari makes the link in so many words, reading la ilaha illa huwa as: you have no one to worship, O people, other than the Lord of the heavens and the earth and what is between them. The consulted Arabic commentaries on this verse are short, a few lines each, and what follows keeps to what they actually say.",
            "bn": "দুই আয়াতের ক্রমটাই এখানে যুক্তি। প্রথমে রুবুবিয়াত: আকাশ আর পৃথিবী কে বানিয়েছেন, কার মালিকানায় আছে। তারপর তা থেকে যে দাবি আসে: ইবাদত পাওয়ার অধিকার একমাত্র কার। তাবারী সংযোগটা স্পষ্ট ভাষায় বলেন। লা ইলাহা ইল্লা হুয়া-র অর্থ তাঁর কাছে: হে মানুষ, আকাশ, পৃথিবী আর দুয়ের মাঝের সবকিছুর রব ছাড়া তোমাদের আর কোনো মাবুদ নেই। এ আয়াতে যে আরবি তাফসীরগুলো সংগ্রহ করা হয়েছে, সেগুলো ছোট, প্রত্যেকটা কয়েক লাইনের। সামনের আলোচনা তাদের আসল কথার ভেতরেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Fits No Other",
          "bn": "ইবাদত আর কারও সাজে না"
        },
        "p": [
          {
            "en": "At-Tabari does not stop at the definition. He turns it into a command and gives the reason: so do not worship anyone besides Him, for worship is not fitting for any other, and it does not befit anything apart from Him. The Muyassar's wording is close: no god deserves worship except Him alone, with no partner. As-Sa'di is the briefest of all: there is nothing worshipped except His Face. In each case the negation sweeps everything away, and the exception leaves One.",
            "bn": "তাবারী সংজ্ঞা দিয়েই থামেন না। কথাটাকে তিনি আদেশে রূপ দেন, সঙ্গে কারণও দেন: কাজেই তিনি ছাড়া আর কারও ইবাদত কোরো না, কারণ ইবাদত আর কারও জন্য মানায় না, তিনি ছাড়া আর কোনো কিছুর তা প্রাপ্য নয়। মুয়াসসারের ভাষা কাছাকাছি: ইবাদতের হকদার কোনো ইলাহ নেই, শুধু তিনি ছাড়া, একা, কোনো শরিক ছাড়া। সাদী সবচেয়ে সংক্ষেপে বলেন: তাঁর সত্তা ছাড়া আর কোনো মাবুদ নেই। প্রতিটি ব্যাখ্যায় 'না' সবকিছু সরিয়ে দেয়, আর 'ছাড়া' বাকি রাখে শুধু একজনকে।"
          },
          {
            "en": "Al-Qurtubi reaches the same point by another road. For him la ilaha illa huwa means that He is the Creator of the world, and so it is not permissible to associate with Him anything else that has no power to create a thing. At-Tabari argues from what the false gods cannot do for their worshippers; al-Qurtubi argues from what they cannot make at all. Both close the door on a partner, one through benefit and harm, the other through creation.",
            "bn": "কুরতুবী একই জায়গায় পৌঁছান অন্য পথে। তাঁর মতে লা ইলাহা ইল্লা হুয়া মানে, তিনিই জগতের স্রষ্টা। তাই এমন কাউকে তাঁর শরিক বানানো জায়েয নয়, যে একটা জিনিসও সৃষ্টি করতে পারে না। তাবারীর যুক্তি: মিথ্যা উপাস্যরা তাদের পূজারীদের জন্য কিছুই করতে পারে না। কুরতুবীর যুক্তি: তারা কিছুই বানাতে পারে না। একজন উপকার-ক্ষতির দিক থেকে, অন্যজন সৃষ্টির দিক থেকে, দুজনেই শরিকের দরজা বন্ধ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Both Ends of Every Life",
          "bn": "প্রতিটি জীবনের দুই প্রান্ত"
        },
        "p": [
          {
            "en": "Yuhyi wa yumit: He gives life and He causes death. At-Tabari's gloss keeps the will in view: it is He who gives life to whatever He wills, and causes to die whatever He wills of what was living. Nothing lives because it chose to, and nothing dies outside His choosing. The phrase answers the first half of the verse with something every listener has watched happen.",
            "bn": "ইউহয়ী ওয়া ইউমীত: তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। তাবারীর ব্যাখ্যায় ইচ্ছার কথাটা সামনে থাকে: তিনিই যাকে ইচ্ছা জীবন দেন, আর জীবিতদের মধ্যে যাকে ইচ্ছা মৃত্যু দেন। নিজের পছন্দে কেউ বেঁচে থাকে না, আর তাঁর ইচ্ছার বাইরে কেউ মরে না। আয়াতের প্রথম অংশের দাবির জবাব আসে এমন জিনিস দিয়ে, যা প্রত্যেক শ্রোতা নিজের চোখে ঘটতে দেখেছে।"
          },
          {
            "en": "Al-Qurtubi turns the phrase round: He gives life to the dead and causes death to the living. His reading puts the two states side by side, each one handed over into the other by the same power. As-Sa'di stresses that the power is undivided: He alone disposes of giving life and causing death. Read together, the three glosses say one thing. Whoever controls both ends of every life is the only one with a claim on the life in between.",
            "bn": "কুরতুবী কথাটা উল্টো দিক থেকে বলেন: তিনি মৃতকে জীবন দেন, জীবিতকে মৃত্যু দেন। তাঁর ব্যাখ্যায় দুই অবস্থা পাশাপাশি দাঁড়ায়, আর একই শক্তি একটাকে অন্যটায় বদলে দেয়। সাদী জোর দেন একটি কথায়: এ ক্ষমতা ভাগ হয় না। জীবন দেওয়া আর মৃত্যু ঘটানোর এখতিয়ার একা তাঁরই। তিনটি ব্যাখ্যা একসঙ্গে পড়লে একটাই কথা দাঁড়ায়। প্রতিটি জীবনের দুই প্রান্ত যাঁর হাতে, মাঝের জীবনটার উপর দাবিও শুধু তাঁরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Owner of Every Generation",
          "bn": "প্রতিটি প্রজন্মের মালিক"
        },
        "p": [
          {
            "en": "Rabbukum wa rabbu aba'ikum al-awwalin: your Lord and the Lord of your first forefathers. At-Tabari and al-Qurtubi both take rabb here as malik, owner. At-Tabari: He is your Owner and the Owner of those of your forefathers who have passed before you. Al-Qurtubi: your Owner and the Owner of those of you who came earlier. On this reading the phrase is about possession running unbroken across time. The people who lived and died before the listeners were never their own, and neither are the listeners.",
            "bn": "রব্বুকুম ওয়া রব্বু আবাইকুমুল আওয়ালীন: তোমাদের রব, তোমাদের আগের পূর্বপুরুষদেরও রব। তাবারী আর কুরতুবী দুজনেই এখানে রব শব্দের অর্থ নেন মালিক। তাবারী বলেন: তিনি তোমাদের মালিক, আর তোমাদের যে পূর্বপুরুষেরা আগে চলে গেছে তাদেরও মালিক। কুরতুবী বলেন: তোমাদের মালিক, আর তোমাদের মধ্যে যারা আগে এসেছে তাদেরও মালিক। এ ব্যাখ্যায় কথাটা এমন এক মালিকানার, যা সময়ের ভেতর দিয়ে কখনো ছিন্ন হয়নি। শ্রোতাদের আগে যারা বেঁচে ছিল আর মারা গেছে, তারা কখনো নিজেদের ছিল না। শ্রোতারাও নয়।"
          },
          {
            "en": "As-Sa'di reads the same words through care rather than ownership: Lord of the first and the last, who nurtures them with blessings and wards off harm from them. His gloss widens the forefathers into all generations, earlier and later, and fills the word rabb with provision and protection. This is not a disagreement with at-Tabari and al-Qurtubi. Read side by side, the glosses bring out both sides of the one word rabb: the Lord who owns, and the Lord who looks after what He owns.",
            "bn": "সাদী একই শব্দ পড়েন মালিকানার চেয়ে প্রতিপালনের দিক থেকে: আগের ও পরের সবার রব, যিনি নিয়ামত দিয়ে তাদের লালন করেন আর বিপদ থেকে তাদের রক্ষা করেন। তাঁর ব্যাখ্যায় পূর্বপুরুষের কথা ছড়িয়ে যায় আগের-পরের সব প্রজন্মে, আর রব শব্দে ভরে ওঠে রিযিক আর হেফাজতের অর্থ। এটা তাবারী ও কুরতুবীর সঙ্গে মতভেদ নয়। পাশাপাশি পড়লে ব্যাখ্যাগুলো রব শব্দের দুটো দিক সামনে আনে: যে রব মালিক, আর যে রব নিজের মালিকানার জিনিসের দেখাশোনা করেন।"
          },
          {
            "en": "Notice what the phrase does with the listeners' own family line. Their forefathers are not set against Allah as rival authorities; they are placed under Him. Whatever those ancestors did or did not acknowledge, the verse counts them among His own, owned and provided for like everyone else. Respect for parents and grandparents is not cancelled by this. It is given its proper place: they were servants of the same Lord, and the honour owed to Him was never theirs to inherit or to hand on.",
            "bn": "লক্ষ করুন, কথাটা শ্রোতাদের নিজেদের বংশধারাকে কোথায় রাখে। পূর্বপুরুষদের আল্লাহর মোকাবিলায় আলাদা কর্তৃত্ব হিসেবে দাঁড় করানো হয়নি, রাখা হয়েছে তাঁরই অধীনে। সেই পূর্বপুরুষেরা তাঁকে মানুক বা না মানুক, আয়াত তাদের গণ্য করে তাঁরই বলে, আর সবার মতো তাঁর মালিকানায় ও তাঁর রিযিকে। এতে বাবা-মা, দাদা-দাদির প্রতি সম্মান বাতিল হয় না। সম্মানটা বরং ঠিক জায়গায় বসে। তারা ছিল একই রবের বান্দা। আল্লাহর যে হক, তা কখনো তাদের উত্তরাধিকারের জিনিস ছিল না, পরের প্রজন্মকে দিয়ে যাওয়ারও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Gods Without Harm or Help",
          "bn": "না উপকার, না ক্ষতি"
        },
        "p": [
          {
            "en": "Who is being spoken to? At-Tabari addresses his gloss to ayyuha an-nas, O people, and ends with a pointed conclusion: this One, whose attributes these are, is the Lord, so worship Him and not your gods, which have no power to harm or to benefit. The Muyassar closes its reading of the passage with nearly the same sentence. Both, then, hear the verse as spoken to people who worshipped gods besides Allah, and both answer them with the plainest test there is: what can those gods actually do?",
            "bn": "কথাটা কাদের উদ্দেশে? তাবারী তাঁর ব্যাখ্যা শুরু করেন আইয়ুহান নাস, হে মানুষ, বলে। শেষ করেন এক ধারালো সিদ্ধান্তে: যাঁর গুণ এই, তিনিই রব। কাজেই তাঁরই ইবাদত করো, তোমাদের সেই উপাস্যদের নয়, যাদের না আছে ক্ষতি করার ক্ষমতা, না উপকার করার। মুয়াসসারও এ অংশের ব্যাখ্যা প্রায় একই বাক্যে শেষ করে। দুজনের কাছেই তাহলে আয়াতটি তাদের উদ্দেশে, যারা আল্লাহ ছাড়া অন্য উপাস্যের পূজা করত। আর দুজনেই তাদের সামনে রাখেন সবচেয়ে সোজা পরীক্ষা: ওই উপাস্যরা আসলে কী করতে পারে?"
          },
          {
            "en": "Al-Qurtubi ends differently, with a warning: and beware of denying Muhammad, lest the punishment come down on you. None of the commentaries consulted here on this verse names the listeners further, places them in Makkah, or says they defended their worship as the way of their forefathers; they leave the phrase about forefathers as a statement of lordship. The verse speaks only of what it names. It licenses nothing against any living person or community, and its reader's work is with his own worship.",
            "bn": "কুরতুবী শেষ করেন অন্যভাবে, এক সতর্কবাণী দিয়ে: মুহাম্মাদ ﷺ-কে মিথ্যা বলা থেকে সাবধান থাকো, যেন তোমাদের উপর আযাব নেমে না আসে। এ আয়াতে সংগ্রহ করা কোনো তাফসীর শ্রোতাদের এর বেশি পরিচয় দেয় না। তাদের মক্কার লোক বলে চিহ্নিত করে না, কিংবা বলে না যে তারা পূর্বপুরুষদের রীতির দোহাই দিয়ে নিজেদের পূজা টিকিয়ে রাখত। পূর্বপুরুষদের কথাটাকে তাফসীরগুলো রুবুবিয়াতের ঘোষণা হিসেবেই রেখে দেয়। আয়াতটি যা বর্ণনা করে, ঠিক ততটুকুই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। পাঠকের কাজ নিজের ইবাদত নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Echo in al-A'raf",
          "bn": "সূরা আরাফে একই সুর"
        },
        "p": [
          {
            "en": "Ibn Kathir's whole comment on the verse, in the Arabic and in the abridged English alike, is a single comparison: this verse is like His saying in 7:158. There the Prophet ﷺ is told: Say, O mankind, indeed I am the Messenger of Allah to you all, from Him to whom belongs the dominion of the heavens and the earth. There is no deity except Him; He gives life and causes death. The words la ilaha illa huwa yuhyi wa yumit stand in both verses, letter for letter.",
            "bn": "এ আয়াতে ইবন কাসীরের পুরো মন্তব্য একটিমাত্র তুলনা, আরবি মূলেও, সংক্ষিপ্ত ইংরেজি সংস্করণেও: এ আয়াত ৭:১৫৮ আয়াতে আল্লাহর বাণীর মতো। সেখানে আল্লাহ নবী ﷺ-কে বলতে বলেছেন: হে মানুষ, আমি তোমাদের সবার কাছে আল্লাহর রাসূল, যিনি আকাশ ও পৃথিবীর রাজত্বের মালিক। তিনি ছাড়া কোনো ইলাহ নেই, তিনিই জীবন দেন, তিনিই মৃত্যু ঘটান। লা ইলাহা ইল্লা হুয়া ইউহয়ী ওয়া ইউমীত, এ কথাগুলো দুই আয়াতে হুবহু এক।"
          },
          {
            "en": "The parallel is worth reading to its end. In 7:158 the same declaration is followed at once by a call: so believe in Allah and His Messenger, the unlettered prophet, and follow him, that you may be guided. In ad-Dukhan the declaration follows the mention of the Book sent down and the messengers sent as a mercy. In both places, then, la ilaha illa huwa stands beside a messenger and a message. Ibn Kathir does not spell out the lesson of his comparison; the shared words make it.",
            "bn": "তুলনাটা শেষ পর্যন্ত পড়ার মতো। ৭:১৫৮ আয়াতে একই ঘোষণার ঠিক পরেই আসে আহ্বান: কাজেই আল্লাহ ও তাঁর রাসূল, সেই উম্মী নবীর উপর ঈমান আনো, আর তাঁর অনুসরণ করো, যাতে পথ পাও। সূরা দুখানে ঘোষণাটা আসে নাজিল হওয়া কিতাব আর রহমত হিসেবে পাঠানো রাসূলদের কথার পরে। দুই জায়গাতেই তাহলে লা ইলাহা ইল্লা হুয়া দাঁড়িয়ে আছে এক রাসূল আর এক বার্তার পাশে। তুলনার শিক্ষাটা ইবন কাসীর খুলে বলেন না। মিলে যাওয়া শব্দগুলোই তা বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "After the Dying, a Gathering",
          "bn": "মৃত্যুর পরে সমবেত হওয়া"
        },
        "p": [
          {
            "en": "One commentator carries yuhyi wa yumit a step further. As-Sa'di, right after saying that giving life and causing death belong to Allah alone, adds: and He will gather you after your death and repay you for your deeds, if good then good, and if evil then evil. In his reading, the One who gives the first life and takes it is also the One who brings people back to account. At-Tabari, al-Qurtubi and the Muyassar do not draw that line on this verse; it is as-Sa'di's addition.",
            "bn": "একজন তাফসীরকার ইউহয়ী ওয়া ইউমীত-কে আরেক ধাপ এগিয়ে নেন। জীবন দেওয়া আর মৃত্যু ঘটানো একা আল্লাহরই এখতিয়ার, এ কথা বলার পরপরই সাদী যোগ করেন: আর মৃত্যুর পর তিনি তোমাদের একত্র করবেন, তোমাদের আমলের প্রতিদান দেবেন, ভালো হলে ভালো, মন্দ হলে মন্দ। তাঁর ব্যাখ্যায় যিনি প্রথম জীবন দেন আর তা নিয়ে নেন, তিনিই আবার মানুষকে হিসাবের জন্য ফিরিয়ে আনেন। তাবারী, কুরতুবী বা মুয়াসসার এ আয়াতে এ সূত্র টানেন না। এটুকু সাদীর সংযোজন।"
          },
          {
            "en": "His addition fits the verse's own logic without straining it. If death is something Allah does, and not merely something that happens, then it is not an ending outside His reach. The forefathers in the verse are dead, and the verse does not say He was their Lord; it names Him their Lord. Whoever owned them while they lived owns them still. The listener who hears that about his ancestors is hearing it about himself as well, a generation or two early.",
            "bn": "তাঁর সংযোজন আয়াতের নিজের যুক্তির সঙ্গে টানাহেঁচড়া ছাড়াই মিলে যায়। মৃত্যু যদি আল্লাহর করা কাজ হয়, শুধু ঘটে যাওয়া কোনো ঘটনা না হয়, তবে মৃত্যু এমন কোনো সমাপ্তি নয় যা তাঁর নাগালের বাইরে। আয়াতের পূর্বপুরুষেরা মারা গেছে, তবু আয়াত বলছে না যে তিনি তাদের রব ছিলেন। বলছে, তিনি তাদের রব। বেঁচে থাকতে যিনি তাদের মালিক ছিলেন, এখনো তিনিই মালিক। নিজের পূর্বপুরুষদের সম্পর্কে এ কথা যে শোনে, সে আসলে নিজের সম্পর্কেও তা শুনছে, শুধু এক-দুই প্রজন্ম আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Short Texts, a Whole Creed",
          "bn": "ছোট তাফসীর, পূর্ণ আকীদা"
        },
        "p": [
          {
            "en": "It is worth saying plainly what the sources do not give. Al-Baghawi only restates the verse. Ma'arif al-Qur'an, whose grouped commentary covers this passage, spends it on the blessed night and has nothing particular on 44:8. No commentary consulted here attaches a hadith to this verse or reports an occasion of revelation for it, so none is offered here. The next verse turns to people who hear all this and remain in doubt; that belongs to its own place.",
            "bn": "উৎসগুলো কী দেয় না, তা-ও সোজাসুজি বলা দরকার। বাগাভী শুধু আয়াতটি আবার উল্লেখ করেন। মাআরিফুল কুরআন এ অংশের আয়াতগুলো একসঙ্গে আলোচনা করেছে, কিন্তু পুরো আলোচনাই বরকতময় রাত নিয়ে। ৪৪:৮ নিয়ে আলাদা কিছু সেখানে নেই। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি, কিংবা এর শানে নুযূল বর্ণনা করেনি। তাই এখানে তেমন কিছু আনা হলো না। পরের আয়াত সেই লোকদের কথায় যায়, যারা এত কিছু শোনার পরও সংশয়ে থাকে। সে আলোচনা তার নিজের জায়গায়।"
          },
          {
            "en": "Yet the short glosses together hold a whole creed. None is to be worshipped but Him, because He alone creates, gives life and takes it. He owned and cared for every generation before us and owns and cares for ours. Whatever cannot harm or help has no claim on our worship, however long it has been honoured. Said with understanding, la ilaha illa huwa is not only a sentence to repeat. It is a decision about where every act of worship goes.",
            "bn": "তবু ছোট ছোট এ ব্যাখ্যাগুলো একসঙ্গে মিলে পূর্ণ এক আকীদা দাঁড় করায়। তিনি ছাড়া আর কেউ ইবাদতের যোগ্য নয়, কারণ সৃষ্টি করা, জীবন দেওয়া আর জীবন নেওয়া শুধু তাঁরই কাজ। আমাদের আগের প্রতিটি প্রজন্মের তিনি মালিক ও প্রতিপালক ছিলেন, আমাদেরও তিনিই। যা ক্ষতিও করতে পারে না, উপকারও না, যত দিন ধরেই তার সম্মান চলে আসুক, আমাদের ইবাদতে তার কোনো হক নেই। বুঝে বললে লা ইলাহা ইল্লা হুয়া শুধু মুখে আওড়ানোর বাক্য থাকে না। প্রতিটি ইবাদত কোন দিকে যাবে, সে বিষয়ে এটা এক সিদ্ধান্ত।"
          }
        ]
      }
    ]
  },
  "44:17-18": {
    "sections": [
      {
        "h": {
          "en": "Before the Prophet's Own People",
          "bn": "নবীর জাতির আগে আরেক জাতি"
        },
        "p": [
          {
            "en": "The surah has just faced the people who denied the Prophet ﷺ. A clear messenger came to them, they turned away and called him a tutored madman (44:13 and 44:14), and a greater seizure was promised (44:16). Then the address turns to the past: wa-laqad fatanna qablahum qawma Fir'awn, and We had tried, before them, the people of Pharaoh. As-Sa'di explains the turn. Having mentioned those who denied Muhammad ﷺ, Allah mentions that they had predecessors among the deniers, and tells their story with Musa (AS) so that the deniers of his own day might be deterred.",
            "bn": "এর আগের আয়াতগুলোতে সূরাটি কথা বলেছে নবী ﷺ-কে অস্বীকারকারীদের নিয়ে। তাদের কাছে সুস্পষ্ট রাসূল এসেছিলেন, তারা মুখ ফিরিয়ে নিয়েছে, আর বলেছে: শেখানো বুলি আওড়ানো এক পাগল (৪৪:১৩ ও ৪৪:১৪)। তাদের জানিয়ে দেওয়া হয়েছে, সামনে আরও কঠিন পাকড়াও আসছে (৪৪:১৬)। এরপর কথা ঘুরে যায় অতীতের দিকে: ওয়া লাকাদ ফাতান্না কাবলাহুম কাওমা ফেরাউন, তাদের আগে আমি ফেরাউনের জাতিকে পরীক্ষা করেছিলাম। এই মোড় ঘোরার কারণ সা'দী বলে দেন। মুহাম্মাদ ﷺ-কে যারা অস্বীকার করছিল, তাদের কথা বলার পর আল্লাহ জানাচ্ছেন যে অস্বীকারকারীদের মধ্যে তাদের পূর্বসূরিও আছে। তারপর মূসা (আঃ)-এর সঙ্গে সেই পূর্বসূরিদের কাহিনি শোনান, যাতে তখনকার অস্বীকারকারীরা সাবধান হয়ে ফিরে আসে।"
          },
          {
            "en": "At-Tabari reads qablahum as before the idolaters of the Prophet's own people, and puts the gloss in Allah's address to him: We tried, O Muhammad, before them. Al-Muyassar draws the conclusion in plain words. A noble messenger came to Pharaoh's people, they called him a liar and were destroyed, and so We do with your enemies, O Messenger, if they do not believe. The story runs on through 44:24, to the night departure and the sea left still; these two verses are its opening exchange.",
            "bn": "তাবারীর মতে কাবলাহুম মানে নবী ﷺ-এর নিজের জাতির মুশরিকদের আগে। ব্যাখ্যাটা তিনি সাজান নবীকে সম্বোধন করে: হে মুহাম্মাদ, তাদের আগে আমি পরীক্ষা করেছিলাম। মুয়াসসার উপসংহারটা সোজা কথায় টেনে দেয়। ফেরাউনের জাতির কাছে এক সম্মানিত রাসূল এসেছিলেন। তারা তাঁকে মিথ্যাবাদী বলল, ফলে ধ্বংস হলো। হে রাসূল, আপনার শত্রুরা ঈমান না আনলে তাদের সঙ্গেও আমি এমনই করি। কাহিনিটি ৪৪:২৪ পর্যন্ত গড়িয়ে যায়, রাতের যাত্রা আর স্থির রেখে আসা সাগর পর্যন্ত। এই দুটি আয়াতে আছে তার শুরুর কথাবার্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Tried Through a Messenger",
          "bn": "রাসূলের মাধ্যমেই পরীক্ষা"
        },
        "p": [
          {
            "en": "Fatanna comes from fitna, a trial. At-Tabari glosses it with two verbs, ikhtabarna wa-btalayna, We tested and We tried; al-Muyassar uses the same pair, Ibn Kathir the first verb alone, and al-Baghawi gives balawna, We put them to the proof. Al-Qurtubi is more specific: the meaning of this trial is the command to obey. Allah dealt with them as one who tests deals, by sending Musa (AS) to them; they denied him and were destroyed. As-Sa'di says the same in his own words: We tried and tested them by sending Our messenger, Musa son of 'Imran.",
            "bn": "ফাতান্না এসেছে ফিতনা থেকে, যার অর্থ পরীক্ষা। তাবারী শব্দটির ব্যাখ্যা করেন দুটি ক্রিয়া দিয়ে: ইখতাবারনা ওয়াবতালাইনা, আমি যাচাই করেছি ও পরীক্ষায় ফেলেছি। মুয়াসসারও এই জোড়াই ব্যবহার করে, ইবন কাসীর শুধু প্রথমটি, আর বাগাভী লেখেন বালাওনা, আমি তাদের পরখ করেছি। কুরতুবী আরও নির্দিষ্ট করে বলেন, এই পরীক্ষার মর্ম হলো আনুগত্যের আদেশ। মূসা (আঃ)-কে পাঠিয়ে আল্লাহ তাদের সঙ্গে পরীক্ষকের মতো আচরণ করলেন। তারা তাঁকে অস্বীকার করল, ফলে ধ্বংস হলো। সা'দী নিজের ভাষায় একই কথা বলেন: আমার রাসূল মূসা ইবন ইমরানকে পাঠিয়ে আমি তাদের পরীক্ষা ও যাচাই করেছি।"
          },
          {
            "en": "Al-Qurtubi then reports a second reading, introduced with it is said and given no named holder: fatannahum means We punished them by drowning. On that reading, he notes, the sentence puts its parts out of order, and the sense is: a noble messenger came to Pharaoh's people, and We drowned them. The punishment came after the messenger's coming, and the conjunction wa, and, does not by itself fix a sequence. He gives it as a reported view after his main gloss, and the two can be kept side by side.",
            "bn": "এরপর কুরতুবী আরেকটি ব্যাখ্যা উল্লেখ করেন 'বলা হয়' কথাটি দিয়ে, কারও নাম না নিয়ে। সে ব্যাখ্যায় ফাতান্নাহুম মানে আমি তাদের ডুবিয়ে শাস্তি দিয়েছি। তিনি বলেন, এভাবে পড়লে বাক্যের অংশগুলো আগে-পরে বসেছে। অর্থ দাঁড়ায়: ফেরাউনের জাতির কাছে সম্মানিত রাসূল এলেন, তারপর আমি তাদের ডুবিয়ে দিলাম। কারণ শাস্তি এসেছিল রাসূলের আগমনের পরে, আর 'ওয়া' অব্যয়টি নিজে থেকে ক্রম ঠিক করে দেয় না। মূল ব্যাখ্যার পরে তিনি এটিকে একটি বর্ণিত মত হিসেবে এনেছেন। দুটিকে তাই পাশাপাশি রাখা যায়।"
          },
          {
            "en": "On the first reading, which most of these commentators give, the test was not a famine or a flood. It was a man with a message, and the question was what Pharaoh's people would do with what had reached them. That is worth sitting with. The verse does not call the drowning the trial, on that reading; it calls the messenger's coming the trial, and the drowning is what followed a failed answer.",
            "bn": "প্রথম ব্যাখ্যায়, যা এই তাফসীরকারদের বেশির ভাগ দেন, পরীক্ষাটা দুর্ভিক্ষ বা বন্যা ছিল না। পরীক্ষা ছিলেন একজন মানুষ, যাঁর হাতে ছিল এক বার্তা। প্রশ্ন ছিল, ফেরাউনের জাতি তাদের কাছে পৌঁছানো জিনিসটা নিয়ে কী করে। কথাটা একটু থেমে ভাবার মতো। এই ব্যাখ্যায় আয়াতটি ডুবে মরাকে পরীক্ষা বলছে না। পরীক্ষা বলছে রাসূলের আগমনকে। ডুবে মরা এসেছে ভুল জবাবের পরিণামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Noble in Whose Sight",
          "bn": "কার চোখে সম্মানিত"
        },
        "p": [
          {
            "en": "Wa-ja'ahum rasulun karim: and there came to them a noble messenger. At-Tabari, through Qatada, identifies him as Musa (AS), and Ibn Kathir adds that he is the prophet to whom Allah spoke. At-Tabari then gives two reasons for the word karim. Allah described him with nobility because he was honoured before Him, his station high in His sight. And it may be, at-Tabari adds, that he was so described because he was of high standing and good lineage among his own people. He offers the second as a possibility, not as the first meaning.",
            "bn": "ওয়া জাআহুম রাসূলুন কারীম: আর তাদের কাছে এসেছিলেন এক সম্মানিত রাসূল। কাতাদার সূত্রে তাবারী জানান, তিনি মূসা (আঃ)। ইবন কাসীর যোগ করেন, তিনিই সেই নবী যাঁর সঙ্গে আল্লাহ কথা বলেছেন। কারীম শব্দের দুটি কারণ তাবারী উল্লেখ করেন। প্রথমত, আল্লাহর কাছে তিনি সম্মানিত ছিলেন, তাঁর কাছে তাঁর মর্যাদা ছিল উঁচু। দ্বিতীয়ত, এমনও হতে পারে যে নিজ জাতির মধ্যে তিনি ছিলেন উঁচু বংশের, মর্যাদাবান মানুষ। দ্বিতীয়টিকে তিনি সম্ভাবনা হিসেবে আনেন, মূল অর্থ হিসেবে নয়।"
          },
          {
            "en": "Al-Qurtubi lists three senses. Noble among his people; or, as it is said, noble in character, in overlooking and forgiving; and al-Farra' says noble with his Lord, since He singled him out for prophethood and for hearing His speech. Al-Baghawi keeps to one: noble with Allah. As-Sa'di reads the word as character: the noble messenger who had generosity and fine qualities that no one else had. None of them presents these as rival readings. They are layers of one word, and a reader can hold all of them at once.",
            "bn": "কুরতুবী তিনটি অর্থ উল্লেখ করেন। নিজ জাতির মধ্যে সম্মানিত। অথবা, যেমন বলা হয়, চরিত্রে মহৎ, ক্ষমা ও মার্জনায় উদার। আর ফাররা বলেন, তিনি রবের কাছে সম্মানিত, কারণ রব তাঁকে নবুওয়াত আর নিজের কথা শোনার জন্য বেছে নিয়েছিলেন। বাগাভী একটিতেই থামেন: আল্লাহর কাছে সম্মানিত। সা'দী শব্দটি পড়েন চরিত্রের দিক থেকে: এমন সম্মানিত রাসূল, যাঁর মধ্যে ছিল এমন উদারতা ও উত্তম চরিত্র যা আর কারও মধ্যে ছিল না। এঁদের কেউ এগুলোকে পরস্পরবিরোধী মত হিসেবে পেশ করেননি। এগুলো একই শব্দের নানা স্তর, পাঠক সবগুলো একসঙ্গে ধরে রাখতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hand Over the Servants",
          "bn": "বান্দাদের আমার হাতে দাও"
        },
        "p": [
          {
            "en": "Then comes what he said: an addu ilayya 'ibada-llah. At-Tabari reads an as the content of the message the messenger came with, and explains addu as idfa'u ilayya, hand over to me: send them with me and follow me. He compares it with 26:17, an arsil ma'ana bani Isra'il, send the Children of Israel with us. On his reading, 'ibada-llah is the object of the verb: the servants of Allah are the ones to be handed over. He then notes that some interpreted it as an addu ilayya ya 'ibada-llah, O servants of Allah, making the phrase a vocative, and he names none of them.",
            "bn": "এরপর আসে তাঁর কথা: আন আদ্দূ ইলাইয়া ইবাদাল্লাহ। তাবারীর মতে 'আন' এখানে রাসূল যে বার্তা নিয়ে এসেছিলেন তার বিষয়বস্তু খুলে বলছে। আদ্দূ শব্দের ব্যাখ্যা তিনি দেন ইদফাঊ ইলাইয়া দিয়ে, অর্থাৎ আমার হাতে তুলে দাও, তাদের আমার সঙ্গে পাঠাও, আর আমার অনুসরণ করো। তিনি এটিকে ২৬:১৭-এর সঙ্গে তুলনা করেন: আন আরসিল মাআনা বানী ইসরাঈল, বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও। তাঁর পাঠে ইবাদাল্লাহ ক্রিয়ার কর্ম, অর্থাৎ আল্লাহর বান্দারাই সেই মানুষ যাদের তুলে দিতে বলা হচ্ছে। এরপর তিনি জানান, কেউ কেউ এর ব্যাখ্যা করেছেন 'হে আল্লাহর বান্দারা' অর্থে, শব্দটিকে সম্বোধন ধরে। তাঁদের কারও নাম তিনি নেননি।"
          },
          {
            "en": "The named reports at-Tabari brings for the object reading are short. Mujahid: send the Children of Israel with me. Qatada: the Children of Israel; and in a second chain Qatada has Musa (AS) say to Pharaoh, why do you hold these people, free people whom you have taken as slaves? Let them go their way. Ibn Zayd: send the servants of Allah with me, meaning the Children of Israel, and he recited 20:47, so send the Children of Israel with us and do not torment them, and said: return them to us.",
            "bn": "কর্ম হিসেবে পড়ার পক্ষে তাবারী নামসহ যে বর্ণনাগুলো আনেন, সেগুলো ছোট। মুজাহিদ: বনী ইসরাঈলকে আমার সঙ্গে পাঠিয়ে দাও। কাতাদা: অর্থ বনী ইসরাঈল। আরেক সূত্রে কাতাদার বর্ণনায় মূসা (আঃ) ফেরাউনকে বলছেন: এই লোকদের তুমি কেন আটকে রেখেছ? এরা স্বাধীন মানুষ, তুমি এদের গোলাম বানিয়ে রেখেছ। এদের পথ ছেড়ে দাও। ইবন যায়দ: আল্লাহর বান্দাদের আমার সঙ্গে পাঠাও, মানে বনী ইসরাঈলকে। এরপর তিনি ২০:৪৭ পড়লেন, অতএব বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও আর তাদের কষ্ট দিয়ো না, তারপর বললেন: তাদের আমাদের কাছে ফিরিয়ে দাও।"
          },
          {
            "en": "At-Tabari's own position is clear from how he arranges the entry. After noting the vocative view, he says that the people of interpretation said what he said about an addu ilayya, and lists his chains under that heading. His preference is the object reading, and that preference is his. Al-Baghawi, as-Sa'di and al-Muyassar likewise name the Children of Israel outright, and Ibn Kathir reads the phrase alongside 20:47. None of the four mentions the vocative.",
            "bn": "তাবারীর নিজের অবস্থান বোঝা যায় তাঁর বিন্যাস থেকে। সম্বোধনের মতটি উল্লেখ করার পর তিনি বলেন, আন আদ্দূ ইলাইয়া-র ব্যাখ্যায় তাফসীরকারেরা তা-ই বলেছেন যা তিনি বলেছেন। তারপর সেই শিরোনামের নিচে নিজের সূত্রগুলো সাজান। তাঁর পছন্দ কর্ম হিসেবে পড়া, আর এই পছন্দ তাঁর নিজের। বাগাভী, সা'দী ও মুয়াসসারও সরাসরি বনী ইসরাঈলের নাম নেন, আর ইবন কাসীর বাক্যটি পড়েন ২০:৪৭-এর পাশে রেখে। এই চারজনের কেউ সম্বোধনের মতটি উল্লেখ করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Call to Follow",
          "bn": "নাকি অনুসরণের ডাক"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets out the disagreement with names attached. Ibn 'Abbas: the meaning is that he came to them and said, follow me, so 'ibada-llah is a vocative, O servants of Allah. Mujahid: the meaning is send the servants of Allah with me and release them from the torment, so 'ibada-llah is the object. Then a third view, introduced with it is said and unnamed: render to me your hearing, so that I may convey to you the message of my Lord. Al-Qurtubi lays the three out and does not choose between them.",
            "bn": "কুরতুবী মতভেদটি নামসহ সাজিয়ে দেন। ইবন আব্বাস: অর্থ হলো, তিনি তাদের কাছে এসে বললেন, আমার অনুসরণ করো। এ হিসেবে ইবাদাল্লাহ সম্বোধন, হে আল্লাহর বান্দারা। মুজাহিদ: অর্থ হলো, আল্লাহর বান্দাদের আমার সঙ্গে পাঠাও আর শাস্তি থেকে তাদের মুক্ত করো। এ হিসেবে ইবাদাল্লাহ কর্ম। এরপর তৃতীয় একটি মত, 'বলা হয়' দিয়ে, কারও নাম ছাড়া: তোমাদের কান আমার দিকে দাও, যাতে আমি রবের বার্তা তোমাদের কাছে পৌঁছাতে পারি। কুরতুবী তিনটি মতই সাজিয়ে রাখেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "The report from Ibn 'Abbas is placed differently by the two commentators. At-Tabari quotes it through his own chain, follow me to the truth I am calling you to, and lists it among those who agree with his reading, since his gloss of addu already included follow me. Al-Qurtubi reads the same follow me as a vocative address. One report, then, is placed in two ways by two careful readers. This article reports both and leaves the matter where they leave it.",
            "bn": "ইবন আব্বাসের বর্ণনাটিকে দুই তাফসীরকার দুই জায়গায় বসান। তাবারী নিজের সূত্রে বর্ণনাটি আনেন: আমি তোমাদের যে সত্যের দিকে ডাকছি, তাতে আমার অনুসরণ করো। তারপর এটিকে রাখেন তাঁর নিজের মতের সমর্থকদের তালিকায়, কারণ আদ্দূ শব্দের ব্যাখ্যায় তিনি আগেই 'আমার অনুসরণ করো' কথাটি রেখেছিলেন। কুরতুবী সেই একই 'অনুসরণ করো' কথাকে পড়েন সম্বোধন হিসেবে। বর্ণনা একটিই, অথচ দুই সতর্ক পাঠক তা রাখেন দুই জায়গায়। এই লেখা দুটিই জানিয়ে রাখে, আর তাঁরা বিষয়টি যেখানে রেখেছেন সেখানেই রেখে দেয়।"
          },
          {
            "en": "What changes between the readings is who is being addressed and what is asked of them. On the object reading, Pharaoh and his chiefs are asked to release a people they held. On the vocative reading, the people Musa (AS) came to are themselves called servants of Allah and asked to follow him. Both fit the words, both have early names behind them in these sources, and the verse is read here with both open.",
            "bn": "দুই পাঠে বদলায় দুটি জিনিস: কাকে সম্বোধন করা হচ্ছে, আর তাদের কাছে কী চাওয়া হচ্ছে। কর্ম হিসেবে পড়লে ফেরাউন ও তার সভাসদদের বলা হচ্ছে, যে জাতিকে তারা আটকে রেখেছে তাদের ছেড়ে দিতে। সম্বোধন হিসেবে পড়লে মূসা (আঃ) যাদের কাছে এসেছিলেন, তাদেরই আল্লাহর বান্দা বলে ডাকা হচ্ছে, আর বলা হচ্ছে তাঁর অনুসরণ করতে। দুটি পাঠই শব্দের সঙ্গে খাপ খায়। এই উৎসগুলোতে দুটির পক্ষেই প্রথম যুগের মুফাসসিরদের নাম পাওয়া যায়। তাই আয়াতটি এখানে দুটি পাঠ খোলা রেখেই পড়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Released to Worship Their Lord",
          "bn": "রবের ইবাদতের জন্য মুক্তি"
        },
        "p": [
          {
            "en": "As-Sa'di gives the object reading in full. Musa (AS) said to Pharaoh and his chiefs: hand over to me the servants of Allah, meaning the Children of Israel. Send them and release them from your torment and from the evil torment you inflict on them, for they are my kin and the best of people in their time. You have wronged them and enslaved them without right, so send them, that they may worship their Lord. Al-Muyassar puts the purpose the same way: send them with me, to worship Allah alone, with no partner.",
            "bn": "কর্ম হিসেবে পড়ার পূর্ণ চিত্র দেন সা'দী। মূসা (আঃ) ফেরাউন ও তার সভাসদদের বললেন: আল্লাহর বান্দাদের, মানে বনী ইসরাঈলকে, আমার হাতে তুলে দাও। তাদের ছেড়ে দাও। তোমাদের শাস্তি আর তাদের উপর চালানো নিকৃষ্ট নির্যাতন থেকে তাদের মুক্ত করো। তারা আমার আপনজন, আর তাদের যুগে তারা ছিল সব মানুষের মধ্যে শ্রেষ্ঠ। তোমরা তাদের উপর জুলুম করেছ, অন্যায়ভাবে গোলাম বানিয়েছ। তাই তাদের যেতে দাও, যাতে তারা নিজেদের রবের ইবাদত করতে পারে। মুয়াসসারও উদ্দেশ্যটা একইভাবে বলে: তাদের আমার সঙ্গে পাঠাও, যাতে তারা শরিকহীন এক আল্লাহর ইবাদত করে।"
          },
          {
            "en": "Two other passages carry the same demand, and the commentators point to them rather than retell them. Ibn Kathir sets this verse beside 20:47, so send the Children of Israel with us and do not torment them, and al-Baghawi's gloss, release them and do not torment them, echoes its wording. At-Tabari compares 26:17. Those passages tell the meeting at greater length and are explained in their own place. Here the whole demand is pressed into a single clause, and the next verse turns at once to a warning against exalting oneself over Allah.",
            "bn": "একই দাবি আরও দুটি জায়গায় এসেছে, আর তাফসীরকারেরা সেগুলোর দিকে ইঙ্গিত করেন, নতুন করে কাহিনি বলেন না। ইবন কাসীর এই আয়াতকে রাখেন ২০:৪৭-এর পাশে: অতএব বনী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও আর তাদের কষ্ট দিয়ো না। বাগাভীর ব্যাখ্যা, তাদের ছেড়ে দাও আর কষ্ট দিয়ো না, ওই আয়াতের ভাষারই প্রতিধ্বনি। তাবারী তুলনা করেন ২৬:১৭-এর সঙ্গে। ওই আয়াতগুলো সাক্ষাৎটির কথা আরও বিস্তারে বলে, আর তাদের ব্যাখ্যা তাদের নিজের জায়গায়। এখানে পুরো দাবিটা ঠাসা হয়েছে একটিমাত্র বাক্যাংশে। পরের আয়াতই সঙ্গে সঙ্গে সতর্ক করে, আল্লাহর বিরুদ্ধে ঔদ্ধত্য দেখিয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Trust as His Credential",
          "bn": "আমানতদারিই তাঁর পরিচয়"
        },
        "p": [
          {
            "en": "The verse closes with inni lakum rasulun amin: indeed, I am to you a trustworthy messenger. At-Tabari expands it: I am to you, O people, a messenger from Allah, sent to you so that His punishment does not overtake you for disbelieving in Him; amin, trustworthy over His revelation and the message He gave me for you. Al-Baghawi says trustworthy over the revelation, al-Muyassar over His revelation and His message, and Ibn Kathir glosses amin as ma'mun, trusted in what I convey to you.",
            "bn": "আয়াতটি শেষ হয় ইন্নী লাকুম রাসূলুন আমীন দিয়ে: আমি তোমাদের জন্য বিশ্বস্ত রাসূল। তাবারী কথাটা খুলে বলেন: হে আমার জাতি, আমি আল্লাহর পক্ষ থেকে তোমাদের কাছে পাঠানো রাসূল, যাতে তাঁকে অস্বীকার করার কারণে তাঁর শাস্তি তোমাদের পাকড়াও না করে। আর আমীন মানে, তাঁর ওহি এবং তোমাদের জন্য তিনি আমাকে যে বার্তা দিয়েছেন, তাতে আমি বিশ্বস্ত। বাগাভী বলেন, ওহির ব্যাপারে বিশ্বস্ত। মুয়াসসার বলে, তাঁর ওহি ও রিসালাতের ব্যাপারে। ইবন কাসীর আমীনের ব্যাখ্যা দেন মা'মূন দিয়ে: তোমাদের কাছে যা পৌঁছাই, তাতে আমি নির্ভরযোগ্য।"
          },
          {
            "en": "Al-Qurtubi adds a sense that ties the end of the verse to its beginning. Trustworthy over the revelation, so accept my counsel; or, as it is said, trustworthy over what I ask you to hand over to me, so I will not betray it. On the object reading, the one asking to be handed a people promises to keep what he is given. As-Sa'di draws out the other side: trustworthy over what I was sent with, hiding none of it from you, adding nothing and leaving nothing out, and this, he says, requires full compliance with him.",
            "bn": "কুরতুবী এমন এক অর্থ যোগ করেন, যা আয়াতের শেষকে শুরুর সঙ্গে বেঁধে দেয়। ওহির ব্যাপারে বিশ্বস্ত, তাই আমার নসিহত কবুল করো। অথবা, যেমন বলা হয়, তোমাদের কাছে যা চাইছি তার ব্যাপারে বিশ্বস্ত, তাতে আমি খেয়ানত করব না। কর্ম হিসেবে পড়লে, যিনি একটি জাতিকে নিজের হাতে চাইছেন, তিনিই কথা দিচ্ছেন যে যা পাবেন তা রক্ষা করবেন। সা'দী অন্য দিকটা তুলে আনেন: যা নিয়ে আমি প্রেরিত, তাতে আমি বিশ্বস্ত। তার কিছুই তোমাদের কাছে লুকাই না, কিছু বাড়াই না, কিছু কমাই না। তিনি বলেন, এ কারণেই তাঁর প্রতি পূর্ণ আনুগত্য অপরিহার্য হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One People, One Age",
          "bn": "এক জাতি, এক যুগ"
        },
        "p": [
          {
            "en": "Pharaoh's people are a people the Qur'an condemns, and al-Muyassar says it in a line: they denied him and were destroyed. These verses speak only of what they name, a ruling house and its people, in their own age, who were sent a messenger and refused him. They license nothing against any living person or community. As as-Sa'di and al-Muyassar frame it, the account was told to warn those who were denying the Prophet ﷺ, and the warning lands on anyone who turns from the truth, not on a lineage or a land.",
            "bn": "ফেরাউনের জাতি এমন এক জাতি, যাদের কুরআন নিন্দা করেছে। মুয়াসসার এক বাক্যে বলে দেয়: তারা তাঁকে মিথ্যাবাদী বলল আর ধ্বংস হলো। এই আয়াতগুলো যা বর্ণনা করে, ঠিক তা-ই বর্ণনা করে। নিজেদের যুগের এক শাসকগোষ্ঠী ও তার লোকজন, যাদের কাছে রাসূল এসেছিলেন আর তারা তাঁকে ফিরিয়ে দিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। সা'দী ও মুয়াসসারের উপস্থাপনায় কাহিনিটি শোনানো হয়েছিল নবী ﷺ-কে যারা অস্বীকার করছিল তাদের সতর্ক করতে। সে সতর্কবাণী পড়ে সত্য থেকে মুখ ফেরানো যে কারও উপর, কোনো বংশ বা কোনো দেশের উপর নয়।"
          },
          {
            "en": "None of the commentators consulted for these two verses attaches a hadith to them, so none is brought here. What remains is the scene itself. A man with no army stands before a throne, asks that servants of Allah be handed over or that servants of Allah follow him, and offers one credential, that he can be trusted. The trial, on the reading most of these commentators give, was his arrival. The question it puts to a reader is what is done with truth once it has come.",
            "bn": "এই দুটি আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এগুলোর সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এখানেও কোনো হাদিস আনা হলো না। বাকি থাকে দৃশ্যটি। সৈন্যহীন একজন মানুষ সিংহাসনের সামনে দাঁড়িয়ে। তিনি চাইছেন আল্লাহর বান্দাদের তাঁর হাতে তুলে দেওয়া হোক, কিংবা আল্লাহর বান্দারা তাঁর অনুসরণ করুক। তাঁর পরিচয়পত্র একটাই: তাঁকে বিশ্বাস করা যায়। এই তাফসীরকারদের বেশির ভাগের ব্যাখ্যায় পরীক্ষাটা ছিল তাঁর আগমন। পাঠকের সামনে তাই প্রশ্ন একটাই: সত্য এসে পড়ার পর আমরা তা নিয়ে কী করি।"
          }
        ]
      }
    ]
  },
  "44:25": {
    "sections": [
      {
        "h": {
          "en": "Silence Where the Drowning Was",
          "bn": "ডুবে যাওয়ার জায়গায় নীরবতা"
        },
        "p": [
          {
            "en": "Kam taraku min jannatin wa-ʿuyun: how many gardens and springs they left behind. The verse before it ends with a command and a promise. Musa (AS) is told to leave the sea in its stillness, because the army coming after him is a host to be drowned (44:24). Then the passage moves straight to the aftermath. The drowning itself is not narrated here. Between the promise and the gardens standing empty the text leaves a gap, and the reader knows what filled it.",
            "bn": "কাম তারাকূ মিন জান্নাতিউ ওয়া উয়ূন: কত উদ্যান আর ঝর্ণা তারা ছেড়ে গেল! আগের আয়াতের শেষে আছে আদেশ আর প্রতিশ্রুতি। মূসা (আঃ)-কে বলা হয়েছে সমুদ্রকে স্থির অবস্থায় রেখে যেতে, কারণ পিছু ধাওয়া করা বাহিনী ডুবে মরবে (৪৪:২৪)। এরপর বর্ণনা সরাসরি চলে যায় পরের অবস্থায়। ডুবে যাওয়ার দৃশ্য এখানে নেই। প্রতিশ্রুতি আর খালি পড়ে থাকা বাগানের মাঝখানে কুরআন একটা ফাঁক রেখে দেয়। সে ফাঁকে কী ঘটেছিল, পাঠক তা নিজেই বোঝে।"
          },
          {
            "en": "The commentators fill that gap in a few words and no more. Al-Baghawi puts it in brackets inside the verse itself: they left, meaning after the drowning. At-Tabari says Allah is telling how much Pharaoh and his people left after their destruction and after He drowned them. Al-Muyassar, whose note covers 44:25 to 44:27, opens with nearly the same words. None of them retells the drowning under this verse. What they share is the order of events: first the end of the people, then the count of what they left.",
            "bn": "তাফসীরকারেরা এই ফাঁক পূরণ করেন অল্প কথায়, তার বেশি নয়। বাগাভী আয়াতের ভেতরেই বন্ধনী দিয়ে জুড়ে দেন: তারা ছেড়ে গেল, মানে ডুবে যাওয়ার পর। তাবারী বলেন, আল্লাহ জানাচ্ছেন ফেরাউন ও তার লোকেরা ধ্বংস হওয়ার পর, আল্লাহ তাদের ডুবিয়ে দেওয়ার পর, কত কিছু ছেড়ে গেল। মুয়াসসারের টীকা ৪৪:২৫ থেকে ৪৪:২৭ পর্যন্ত একসঙ্গে ধরে, আর শুরু হয় প্রায় একই কথা দিয়ে। এ আয়াতের আলোচনায় কেউই ডুবে যাওয়ার কাহিনি নতুন করে বলেন না। সবার কথায় মিল শুধু ঘটনার ক্রমে: আগে জাতির পরিণতি, তারপর তাদের ফেলে যাওয়া সম্পদের হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Kam, a Word for Abundance",
          "bn": "কাম: প্রাচুর্য বোঝানোর শব্দ"
        },
        "p": [
          {
            "en": "The verse opens with kam, how many. It is not asking for a figure. Al-Qurtubi's whole comment on the word is a single clause: kam here is for taktheer, for conveying a great number. The word does the work a long list would do. It tells the listener there was a great deal, without stopping to count it. Al-Qurtubi then says that the meaning of this verse has already been treated in full in Surat al-Shuʿara, and he adds nothing more under it.",
            "bn": "আয়াত শুরু হয় কাম শব্দ দিয়ে, মানে কত। এখানে কোনো সংখ্যা জানতে চাওয়া হচ্ছে না। শব্দটি নিয়ে কুরতুবীর পুরো মন্তব্য এক বাক্যের: এখানে কাম এসেছে তাকসীরের জন্য, অর্থাৎ বেশি পরিমাণ বোঝাতে। লম্বা তালিকা যে কাজ করত, এই ছোট্ট শব্দ সে কাজ সেরে দেয়। থেমে গুনে না দেখিয়েই শ্রোতাকে জানিয়ে দেয়, জিনিস ছিল প্রচুর। এরপর কুরতুবী বলেন, এ আয়াতের অর্থ সূরা শুআরায় পুরোপুরি আলোচনা হয়ে গেছে। এখানে তিনি আর কিছু যোগ করেন না।"
          },
          {
            "en": "That economy deserves notice. The verse gives no number, and no commentary gathered on it gives one either. Under this verse, none of them names a town, a river or a region. The gardens are left as gardens and the springs as springs. What the verse asks of its listener is a sense of scale rather than a survey: so much had been in their hands, and every bit of it stayed where it was when they were gone.",
            "bn": "কথার এই সংযম খেয়াল করার মতো। আয়াত কোনো সংখ্যা দেয় না, এর উপর যেসব তাফসীর সংগ্রহ করা হয়েছে সেগুলোও দেয় না। এ আয়াতের আলোচনায় কেউ কোনো শহর, নদী বা অঞ্চলের নাম নেন না। বাগান বাগানই থাকে, ঝর্ণা ঝর্ণাই। শ্রোতার কাছে আয়াত জরিপ চায় না, চায় পরিমাণের একটা আন্দাজ। কত কিছুই না তাদের হাতে ছিল! তারা চলে যাওয়ার পর তার সবটাই যেখানে ছিল সেখানে পড়ে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Orchards, Rivers and Wells",
          "bn": "বাগিচা, নদী আর কূপ"
        },
        "p": [
          {
            "en": "At-Tabari defines both nouns. The jannat are orchards and trees; that, he says, is what gardens are. The ʿuyun are the sources of water that used to burst forth within their gardens. He then runs on into the next verse and mentions the crops standing in their fields, so the picture is of a working land: trees, the water that fed them, and grain growing beside them. Al-Muyassar paints the same scene in brighter colours: orchards and verdant gardens, and springs of running water.",
            "bn": "তাবারী দুটি শব্দেরই অর্থ বলে দেন। জান্নাত মানে বাগিচা আর গাছপালা, তাঁর ভাষায় এটাই উদ্যান। আর উয়ূন হলো সেই পানির উৎস, যা তাদের বাগানের ভেতর ফুটে বের হতো। এরপর তিনি পরের আয়াতে ঢুকে মাঠে দাঁড়িয়ে থাকা ফসলের কথাও বলেন। ফলে চোখের সামনে ভেসে ওঠে কর্মমুখর এক জনপদ: গাছ, সেই গাছকে বাঁচিয়ে রাখা পানি, আর পাশেই বেড়ে ওঠা শস্য। মুয়াসসার একই দৃশ্য আঁকে আরও উজ্জ্বল রঙে: বাগিচা আর সবুজ-সতেজ উদ্যান, আর বয়ে চলা পানির ঝর্ণা।"
          },
          {
            "en": "Ibn Kathir's Arabic note is the shortest of all. The gardens, he says, are orchards. Then, beside the words and springs and crops, he writes that what is meant is rivers and wells. The English abridgement of his tafsir, whose section runs from 44:17 to 44:26, carries the same gloss: this refers to rivers and wells. So where at-Tabari speaks of springs that rose inside the gardens, Ibn Kathir names rivers and wells as the water that is meant.",
            "bn": "ইবন কাসীরের আরবি টীকা সবচেয়ে ছোট। তিনি বলেন, উদ্যান মানে বাগিচা। এরপর ঝর্ণা ও শস্য শব্দ দুটির পাশে লেখেন, এর দ্বারা উদ্দেশ্য নদী আর কূপ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে এ অংশ ৪৪:১৭ থেকে ৪৪:২৬ পর্যন্ত একসঙ্গে আলোচিত, আর সেখানেও একই ব্যাখ্যা: এর মানে নদী আর কূপ। তাবারী যেখানে বাগানের ভেতর ফুটে ওঠা ঝর্ণার কথা বলেন, ইবন কাসীর সেখানে পানির উৎস হিসেবে নাম নেন নদী আর কূপের।"
          },
          {
            "en": "These are differences of detail, and none of the texts sets them against each other. Springs rising inside the gardens, water running freely, rivers and wells: each gloss points to water, and each keeps the water beside the trees. In these texts a garden is never trees alone. It is trees with a source that keeps them alive. The verse holds the two words together, and the commentators read them together as the picture of a land that wanted for nothing.",
            "bn": "এগুলো খুঁটিনাটির পার্থক্য। কোনো তাফসীরই এগুলোকে পরস্পরের বিপরীতে দাঁড় করায় না। বাগানের ভেতর ফুটে ওঠা ঝর্ণা, অবাধে বয়ে চলা পানি, নদী আর কূপ, সব ব্যাখ্যাই পানির দিকে ইঙ্গিত করে। আর প্রতিটি ব্যাখ্যা পানিকে রাখে গাছের পাশেই। এসব তাফসীরে বাগান কখনো শুধু গাছের সারি নয়, সঙ্গে থাকে তাকে বাঁচিয়ে রাখার উৎস। আয়াত শব্দ দুটিকে পাশাপাশি রাখে, আর তাফসীরকারেরা দুটিকে মিলিয়ে দেখেন এমন দেশের ছবি হিসেবে, যার কোনো কিছুর অভাব ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Pair in al-Shuʿara",
          "bn": "শুআরায় একই জোড়া শব্দ"
        },
        "p": [
          {
            "en": "Al-Qurtubi's cross-reference sends the reader back to Surat al-Shuʿara. The matching words about Pharaoh's people there stand at 26:57: So We removed them from gardens and springs. The same pair of nouns, jannat and ʿuyun, appears in both places. Al-Qurtubi gives no verse number, but in that surah's account of Musa (AS) this is where the gardens and springs come. That verse has its own reflection, and its material is not repeated here.",
            "bn": "কুরতুবীর ইঙ্গিত পাঠককে ফিরিয়ে নেয় সূরা শুআরায়। ফেরাউনের লোকদের সম্পর্কে সেখানে মিলে যাওয়া শব্দগুলো আছে ২৬:৫৭ আয়াতে: এভাবে আমি তাদের বের করে দিলাম উদ্যান আর ঝর্ণা থেকে। জান্নাত আর উয়ূন, একই জোড়া শব্দ দুই জায়গাতেই এসেছে। কুরতুবী আয়াত নম্বর দেন না। তবে সে সূরায় মূসা (আঃ)-এর বর্ণনায় উদ্যান আর ঝর্ণার কথা আসে এখানেই। ওই আয়াত নিয়ে আলাদা আলোচনা আছে, তাই সেখানকার কথা এখানে আর বলা হচ্ছে না।"
          },
          {
            "en": "Set side by side, the two verses tell the event from two directions. In 26:57 Allah speaks: We removed them. Here the verb belongs to them: they left. Neither wording cancels the other. Seen from Allah's side it was a removal; seen from theirs it was a leaving, and a leaving they had not chosen. The same gardens appear once as taken from them and once as left by them, and both views end in the same empty orchards.",
            "bn": "দুটি আয়াত পাশাপাশি রাখলে দেখা যায়, একই ঘটনা দুই দিক থেকে বলা হয়েছে। ২৬:৫৭ আয়াতে আল্লাহ নিজে বলছেন: আমি তাদের বের করে দিলাম। এখানে ক্রিয়াটি তাদের: তারা ছেড়ে গেল। কোনো বর্ণনাই অন্যটিকে বাতিল করে না। আল্লাহর দিক থেকে দেখলে এ ছিল বের করে দেওয়া। তাদের দিক থেকে দেখলে ছেড়ে যাওয়া, আর সে যাওয়া তারা নিজেরা বেছে নেয়নি। একই বাগান এক জায়গায় তাদের কাছ থেকে কেড়ে নেওয়া, আরেক জায়গায় তাদের ফেলে যাওয়া। দুই দৃষ্টিই শেষ হয় একই খালি বাগিচায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Enjoyment Given for a Season",
          "bn": "কিছুকালের জন্য দেওয়া ভোগ"
        },
        "p": [
          {
            "en": "As-Saʿdi folds the verse into a single sentence. They left, he writes, what they had been given to enjoy of the life of this world, and he quotes 44:25 to 44:27 together as the statement of it. His verb is passive, muttiʿu bihi: they were given it to enjoy. His line says nothing of their having made this wealth. In his reading the gardens and springs were provision handed to them, and what is handed over for enjoyment in this world is, by its nature, left behind.",
            "bn": "সা'দী আয়াতটিকে এক বাক্যে গুটিয়ে আনেন। তিনি লেখেন, দুনিয়ার জীবনের যা কিছু তাদের ভোগ করতে দেওয়া হয়েছিল, তা তারা ছেড়ে গেল। এর প্রমাণ হিসেবে তিনি ৪৪:২৫ থেকে ৪৪:২৭ একসঙ্গে উদ্ধৃত করেন। তাঁর ক্রিয়াপদটি কর্মবাচ্যে, মুত্তিউ বিহি: তাদের তা ভোগ করতে দেওয়া হয়েছিল। এ সম্পদ তারা নিজেরা গড়েছিল, এমন কোনো কথা তাঁর বাক্যে নেই। তাঁর পাঠে উদ্যান আর ঝর্ণা ছিল তাদের হাতে তুলে দেওয়া রিজিক। আর দুনিয়ায় যা ভোগের জন্য দেওয়া হয়, স্বভাবতই একদিন তা ফেলে যেতে হয়।"
          },
          {
            "en": "His sentence goes on to say who received it afterwards, a question the surah itself raises at 44:28. That belongs to that verse, and this article leaves it there. What 44:25 holds on its own is the leaving. The list does continue, with crops and noble places in 44:26 and the comfort they used to delight in at 44:27, before the passage turns to what came after. Here the verse stops at the gardens and the water, and lets that be enough.",
            "bn": "তাঁর বাক্য এগিয়ে গিয়ে এটাও বলে, পরে এসবের মালিক কে হলো। সে প্রশ্ন সূরা নিজেই তুলেছে ৪৪:২৮ আয়াতে। সেটা ওই আয়াতের আলোচনা, এ লেখা তাই সেখানেই রেখে দিচ্ছে। ৪৪:২৫ আয়াতের নিজের বিষয় শুধু ছেড়ে যাওয়া। তালিকা অবশ্য থামে না। ৪৪:২৬ আয়াতে আসে শস্যক্ষেত আর অভিজাত স্থান, ৪৪:২৭ আয়াতে সেই বিলাস যাতে তারা মেতে থাকত। তারপর বর্ণনা চলে যায় পরের ঘটনায়। এখানে আয়াত থামে উদ্যান আর পানিতে, আর এটুকুই যথেষ্ট মনে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sources Fall Silent",
          "bn": "যেখানে তাফসীর নীরব"
        },
        "p": [
          {
            "en": "It is worth saying plainly how little the sources say. Each commentary gathered on this verse runs to a line or a few lines. Ma'arif al-Qur'an's note on this group of verses, 44:24 to 44:27, is given entirely to the stillness of the sea and says nothing about gardens or springs. None of these texts, under this verse, describes where the gardens lay, how large they were, what grew in them, or where the water ran.",
            "bn": "তাফসীরগুলো এখানে কত কম বলে, সেটা সোজাসুজি বলে রাখা ভালো। এ আয়াতের উপর সংগ্রহ করা প্রতিটি তাফসীর এক লাইন থেকে বড়জোর কয়েক লাইন। মাআরিফুল কুরআনের টীকা ৪৪:২৪ থেকে ৪৪:২৭ পর্যন্ত আয়াতগুলো একসঙ্গে ধরে, কিন্তু পুরোটাই সমুদ্রের স্থির থাকা নিয়ে। উদ্যান বা ঝর্ণা নিয়ে সেখানে কোনো কথা নেই। এ আয়াতের আলোচনায় কোনো তাফসীরই বলে না বাগানগুলো কোথায় ছিল, কত বড় ছিল, তাতে কী জন্মাত, বা পানি কোথা দিয়ে বইত।"
          },
          {
            "en": "No commentary gathered here attaches a hadith to this verse, and none reports an occasion of revelation for it. The verse sits inside a narrative, and its placement is its context: it follows the promise that the pursuing army would be drowned (44:24) and opens the list of what that army left. Anything beyond that would have to be brought in from elsewhere, and this article does not bring it in. The commentators were content to let these few words carry their own weight, and the reader can do the same.",
            "bn": "এখানে সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেয়নি। আয়াতটি কোন উপলক্ষে নাজিল হয়েছে, সে কথাও কেউ বলেনি। আয়াতটি একটা কাহিনির ভেতরে বসানো, আর সেই অবস্থানই এর প্রেক্ষাপট। পিছু ধাওয়া করা বাহিনী ডুবে মরবে, এই প্রতিশ্রুতির পরেই এর জায়গা (৪৪:২৪)। আর এখান থেকেই শুরু সেই বাহিনীর ফেলে যাওয়া জিনিসের তালিকা। এর বাইরে কিছু বলতে হলে অন্য জায়গা থেকে আনতে হবে, এ লেখা তা আনছে না। তাফসীরকারেরা এই অল্প কটি শব্দের উপর বাড়তি কিছু চাপাননি, শব্দগুলো নিজেরাই যথেষ্ট। পাঠকও সেভাবেই পড়তে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Condemned People, No Licence",
          "bn": "দণ্ডিত জাতি, কোনো ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "A word of care belongs here. The verse speaks of a particular people whom the Qur'an condemns, Pharaoh and his people, and it speaks only of what it names: that they were destroyed and left their gardens and springs behind. It licenses nothing against any living person or community. It gives no ground for treating anyone alive today as their heirs in guilt, and no ground for reading present-day quarrels into an account the Qur'an has already closed.",
            "bn": "এখানে একটু সাবধান হওয়া দরকার। আয়াতটি নির্দিষ্ট এক জাতির কথা বলে, যাদের কুরআন দোষী সাব্যস্ত করেছে: ফেরাউন আর তার লোকজন। আয়াত যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে। তারা ধ্বংস হয়েছিল, আর উদ্যান ও ঝর্ণা পেছনে ফেলে গিয়েছিল। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজকের কাউকে তাদের অপরাধের উত্তরাধিকারী ভাবার ভিত্তিও এখানে নেই। কুরআন যে হিসাব মিটিয়ে দিয়েছে, তাতে আজকের বিবাদ টেনে আনারও সুযোগ নেই।"
          },
          {
            "en": "Read in its place, the verse points the other way. Its listener is not invited to look down on a people long gone, but to look at what lies in their own hands. The commentators speak of orchards and water, of things given to be enjoyed. Every reader holds something of that kind, and most of us hold it without thinking of the day it will pass to other hands. The verse asks whether we hold it as Pharaoh's people held theirs, settled in it as if it would never be left behind.",
            "bn": "জায়গামতো পড়লে আয়াতের ইশারা উল্টো দিকে। বহু আগে চলে যাওয়া এক জাতিকে তুচ্ছ চোখে দেখতে শ্রোতাকে ডাকা হচ্ছে না। ডাকা হচ্ছে নিজের হাতে কী আছে তা দেখতে। তাফসীরকারেরা বলেন বাগিচা আর পানির কথা, ভোগ করতে দেওয়া জিনিসের কথা। এমন কিছু প্রত্যেক পাঠকের হাতেই আছে। আর আমরা বেশিরভাগই তা আঁকড়ে রাখি, অন্যের হাতে চলে যাওয়ার দিনটার কথা না ভেবেই। আয়াত জানতে চায়, আমরাও কি ফেরাউনের লোকদের মতো তাতে জেঁকে বসেছি, যেন এসব কোনোদিন ফেলে যেতে হবে না?"
          }
        ]
      },
      {
        "h": {
          "en": "Counting What Stays Behind",
          "bn": "যা পড়ে থাকে তার হিসাব"
        },
        "p": [
          {
            "en": "Kam, how many, is a word that suits a reckoning. The verse counts nothing out, yet it puts the reader in the posture of someone tallying what was left. That posture can be turned inward. A life also gathers its gardens: a home, savings, a name, work that took years. The verse does not condemn these, and in as-Saʿdi's words they were things given to be enjoyed. The fault the surah has named lies elsewhere: Musa (AS) warned them not to be haughty with Allah (44:19), and called them a criminal people (44:22).",
            "bn": "কাম, অর্থাৎ কত, শব্দটা হিসাব কষার সঙ্গে মানানসই। আয়াত কিছুই গুনে দেখায় না, তবু পাঠককে দাঁড় করিয়ে দেয় ফেলে যাওয়া জিনিসের হিসাব মেলানো মানুষের জায়গায়। এই দৃষ্টি নিজের দিকেও ফেরানো যায়। একটা জীবনও নিজের বাগান জমায়: ঘর, সঞ্চয়, সুনাম, বছরের পর বছরের পরিশ্রম। আয়াত এগুলোকে দোষ দেয় না। সা'দীর ভাষায় এসব ভোগের জন্য দেওয়া জিনিস। সূরা যে দোষের কথা বলেছে তা অন্য জায়গায়। মূসা (আঃ) তাদের সাবধান করেছিলেন আল্লাহর বিরুদ্ধে ঔদ্ধত্য না দেখাতে (৪৪:১৯), আর তাদের বলেছিলেন অপরাধী জাতি (৪৪:২২)।"
          },
          {
            "en": "So the question the verse leaves is practical. What am I holding as though it will always stay with me? The gardens went nowhere; their owners did. Whatever is planted and kept in this world stays in this world, standing where it stood when its keeper is gone. The verse does not ask us to stop planting. It asks us to plant knowing that we will leave the garden, and to count, before that day, how much of what we hold will simply be left behind.",
            "bn": "তাই আয়াত যে প্রশ্ন রেখে যায়, তা একেবারে বাস্তব। কোন জিনিস আমি এমনভাবে আঁকড়ে আছি, যেন তা চিরকাল আমার সঙ্গেই থাকবে? বাগান কোথাও যায়নি, গেছে তার মালিকেরা। দুনিয়ায় যা লাগানো হয় আর আগলে রাখা হয়, তা দুনিয়াতেই থেকে যায়। যে আগলে রেখেছিল সে চলে গেলেও জিনিসটা দাঁড়িয়ে থাকে আগের জায়গায়। আয়াত গাছ লাগানো বন্ধ করতে বলে না। বলে, বাগান ছেড়ে যেতে হবে জেনেই গাছ লাগাতে। আর সেদিন আসার আগেই হিসাব করে দেখতে, হাতে যা আছে তার কতটুকু শুধু পেছনে পড়ে থাকবে।"
          }
        ]
      }
    ]
  },
  "44:30": {
    "sections": [
      {
        "h": {
          "en": "Turning From the Drowned",
          "bn": "ডুবে যাওয়াদের থেকে চোখ ফিরিয়ে"
        },
        "p": [
          {
            "en": "Wa-laqad najjayna Bani Isra'il mina-l-'adhabi-l-muhin: and We certainly saved the Children of Israel from the humiliating torment. The verses before it have followed Pharaoh's people all the way to their end. Musa (AS) was told to set out by night with My servants, for they would be pursued (44:23), and to leave the sea behind him at rest (44:24). Then came the gardens and springs they left behind (44:25), the inheritance passed to another people (44:28), and the verdict that heaven and earth did not weep for them, nor were they given respite (44:29).",
            "bn": "ওয়া লাকাদ নাজ্জাইনা বানী ইসরাঈলা মিনাল আযাবিল মুহীন: আর আমি অবশ্যই বানী ইসরাঈলকে অপমানজনক শাস্তি থেকে রক্ষা করেছিলাম। এর আগের আয়াতগুলো ফেরাউনের লোকদের শেষ পরিণতি পর্যন্ত তাদের পিছু নিয়েছে। মূসা (আঃ)-কে বলা হয়েছিল আমার বান্দাদের নিয়ে রাতে বেরিয়ে পড়ো, তোমাদের পিছু ধাওয়া করা হবে (৪৪:২৩)। বলা হয়েছিল সমুদ্রকে পেছনে স্থির রেখে যেতে (৪৪:২৪)। তারপর এল তাদের ফেলে যাওয়া উদ্যান আর ঝর্ণার কথা (৪৪:২৫), অন্য জাতির হাতে সবকিছুর উত্তরাধিকার চলে যাওয়ার কথা (৪৪:২৮)। শেষে সেই রায়: তাদের জন্য আসমান-যমীন কাঁদেনি, তাদের অবকাশও দেওয়া হয়নি (৪৪:২৯)।"
          },
          {
            "en": "Then the verse turns to the people the army had been chasing. Placed side by side, 44:29 and 44:30 show the same event from its two ends: on the side of the pursuers no mourning and no reprieve, on the side of the pursued a rescue. The verse has seven Arabic words, and its sentence is not finished when the verse ends. The next verse, 44:31, completes it with min Fir'awn, from Pharaoh, and goes on to describe him. That description belongs to its own verse, and this article stops at the name.",
            "bn": "তারপর আয়াত ফিরে তাকায় সেই মানুষদের দিকে, বাহিনী যাদের পিছু নিয়েছিল। ৪৪:২৯ আর ৪৪:৩০ পাশাপাশি রাখলে একই ঘটনার দুই প্রান্ত চোখে পড়ে। যারা ধাওয়া করছিল, তাদের জন্য না আছে শোক, না অবকাশ। যাদের ধাওয়া করা হচ্ছিল, তাদের জন্য উদ্ধার। আয়াতটিতে আরবি শব্দ মাত্র সাতটি, আর আয়াত শেষ হলেও বাক্যটা শেষ হয় না। পরের আয়াত ৪৪:৩১ বাক্যটা পূর্ণ করে মিন ফেরাউন কথাটি দিয়ে, অর্থাৎ ফেরাউনের কাছ থেকে। তারপর সে আয়াত ফেরাউনের বর্ণনা দেয়। সে বর্ণনা ওই আয়াতেরই বিষয়। এই লেখা নামটুকু পর্যন্ত গিয়েই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Favour Set Before Them",
          "bn": "চোখের সামনে রাখা অনুগ্রহ"
        },
        "p": [
          {
            "en": "Ibn Kathir comments on 44:30 and 44:31 together, and the first thing he says is about what Allah is doing in the sentence: yamtannu 'alayhim ta'ala bi-dhalik, He is reminding them of His favour in this. He then restates the saving with a verb of his own, anqadhahum, He rescued them, and names what they were rescued from: mimma kanu fihi, from what they were in, of Pharaoh's humiliation and abasement of them, and his pressing them into humiliating, exhausting work. The rescue, in his reading, is something done to them and for them.",
            "bn": "ইবন কাসীর ৪৪:৩০ আর ৪৪:৩১ একসঙ্গে ব্যাখ্যা করেন। প্রথমেই তিনি বলেন, এ বাক্যে আল্লাহ কী করছেন: ইয়ামতান্নু আলাইহিম তাআলা বিযালিক, এর মাধ্যমে তিনি তাদের নিজের অনুগ্রহের কথা মনে করিয়ে দিচ্ছেন। তারপর রক্ষা করার কথাটা নিজের একটি ক্রিয়াপদে বলেন, আনকাযাহুম, তিনি তাদের উদ্ধার করলেন। কী থেকে উদ্ধার, তাও বলেন: মিম্মা কানূ ফীহি, তারা যার ভেতরে ছিল তা থেকে। অর্থাৎ ফেরাউন তাদের যে অপমান আর লাঞ্ছনা করত, আর অপমানজনক কষ্টের কাজে যেভাবে তাদের খাটিয়ে নিত, তা থেকে। তাঁর ব্যাখ্যায় উদ্ধারটা আল্লাহ তাদের সঙ্গে করেছেন, আর করেছেন তাদেরই জন্য।"
          },
          {
            "en": "As-Sa'di opens his comment with the same verb: thumma mtanna ta'ala 'ala Bani Isra'il, then Allah reminded the Children of Israel of His favour. He quotes the verse and adds a single clause, al-ladhi kanu fihi, the torment they were in. Both commentators use the words kanu fihi. On their wording the torment reads as a condition the people lived inside, not a blow that fell once and passed. Neither says in this place why the favour was given. They present it as something done for the people, and something to be remembered.",
            "bn": "সা'দীও একই ক্রিয়া দিয়ে শুরু করেন: সুম্মামতান্না তাআলা আলা বানী ইসরাঈল, তারপর আল্লাহ বানী ইসরাঈলকে তাঁর অনুগ্রহের কথা মনে করিয়ে দিলেন। আয়াতটি উদ্ধৃত করে তিনি শুধু ছোট্ট একটি অংশ যোগ করেন: আল্লাযী কানূ ফীহি, যে শাস্তির ভেতরে তারা ছিল। দুজনের লেখাতেই আছে কানূ ফীহি কথাটি। তাঁদের ভাষায় শাস্তিটা এমন এক অবস্থা, যার ভেতরে মানুষগুলো দিন কাটাত। একবার নেমে এসে চলে যাওয়া কোনো আঘাত নয়। অনুগ্রহটা কেন দেওয়া হলো, এ জায়গায় তাঁরা কেউ তা বলেন না। তাঁরা একে তুলে ধরেন মানুষগুলোর জন্য করা এক কাজ হিসেবে, যা মনে রাখার মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Torment Named by Its Effect",
          "bn": "ফল দিয়ে শাস্তির পরিচয়"
        },
        "p": [
          {
            "en": "The adjective carries the verse. At-Tabari glosses al-muhin as al-mudhill lahum, that which abased them, and al-Muyassar writes the same word into its paraphrase: al-'adhab al-mudhill lahum, the torment that abased them. Ibn Kathir's pair, ihana and idhlal, humiliation and abasement, says the same thing from Pharaoh's side, as acts he did to them. None of these glosses measures the torment by how much it hurt. Each measures it by what it did to the standing of the people who bore it: it brought them low and kept them there.",
            "bn": "আয়াতের ভার বইছে বিশেষণটি। তাবারী আল-মুহীনের ব্যাখ্যা দেন আল-মুযিল্লু লাহুম, যা তাদের লাঞ্ছিত করেছিল। মুয়াসসারও নিজের ভাষ্যে একই শব্দ বসায়: আল-আযাবুল মুযিল্লু লাহুম, যে শাস্তি তাদের হেয় করেছিল। ইবন কাসীরের জোড়া শব্দ ইহানা আর ইযলাল, অপমান আর লাঞ্ছনা। কথা একই, শুধু দেখা হয়েছে ফেরাউনের দিক থেকে, তার করা কাজ হিসেবে। এর কোনো ব্যাখ্যাই শাস্তিকে কষ্টের পরিমাণ দিয়ে মাপে না। সবাই মাপে অন্যভাবে: যারা তা সয়েছে, তাদের মর্যাদার কী দশা হয়েছিল। শাস্তিটা তাদের নিচে নামিয়েছিল, আর সেখানেই আটকে রেখেছিল।"
          },
          {
            "en": "At-Tabari also says whose torment it was: the torment with which Pharaoh and his people used to torment them. The word al-'adhab has already appeared twice in this surah. In 44:12 the deniers cry, Our Lord, remove the torment from us, and in 44:15 Allah answers that He will remove the torment a little. There it is a torment that Allah removes. Here, on at-Tabari's gloss, it is inflicted by people on people, and it is Allah who saves them from it. At-Tabari adds that the people of interpretation said as he did.",
            "bn": "কার দেওয়া শাস্তি, তাবারী সেটাও বলেন: ফেরাউন আর তার লোকেরা যে শাস্তি দিয়ে তাদের কষ্ট দিত। আল-আযাব শব্দটি এ সূরায় আগেও দুবার এসেছে। ৪৪:১২ আয়াতে অস্বীকারকারীরা ফরিয়াদ করে, হে আমাদের রব, আমাদের উপর থেকে শাস্তি সরিয়ে নিন। আর ৪৪:১৫ আয়াতে আল্লাহ জবাব দেন, তিনি শাস্তি অল্প কিছুটা সরিয়ে নেবেন। সেখানে শাস্তি এমন জিনিস, যা আল্লাহ সরিয়ে নেন। এখানে তাবারীর ব্যাখ্যায় শাস্তিটা মানুষের হাতে মানুষের উপর চাপানো, আর তা থেকে রক্ষা করছেন আল্লাহ। তাবারী আরও বলেন, তাফসীরের আলিমরাও তাঁর মতোই বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sons, Labour and Bondage",
          "bn": "ছেলে হত্যা, খাটুনি, দাসত্ব"
        },
        "p": [
          {
            "en": "What did the torment consist of? The verse does not say. The commentators do, and they say it briefly. At-Tabari's only named report on the verse comes from Qatada, through the chain Bishr, from Yazid, from Sa'id: from the humiliating torment, by the killing of their sons and the keeping alive of their women. That is the earliest voice in the texts gathered here, and it names two things. It does not mention labour, and about the women it says only that they were left alive while the sons were killed.",
            "bn": "শাস্তিটা ছিল কী? আয়াত তা বলে না। তাফসীরকারেরা বলেন, আর অল্প কথায় বলেন। আয়াতের উপর তাবারী নাম ধরে একটিমাত্র বর্ণনা আনেন, কাতাদা থেকে। সনদ বিশর, তাঁর থেকে ইয়াযীদ, তাঁর থেকে সাঈদ। কাতাদা বলেন: অপমানজনক শাস্তি মানে তাদের ছেলেদের হত্যা আর মেয়েদের বাঁচিয়ে রাখা। এখানে সংগ্রহ করা লেখাগুলোর মধ্যে এটিই সবচেয়ে পুরোনো কণ্ঠ, আর তাতে দুটি জিনিসের নাম আছে। খাটুনির কথা সেখানে নেই। নারীদের সম্পর্কে শুধু এটুকু আছে যে ছেলেদের হত্যা করা হলেও তাদের বাঁচিয়ে রাখা হতো।"
          },
          {
            "en": "Al-Baghawi keeps Qatada's pair and adds a third item: the killing of sons, the keeping alive of women, and al-ta'ab fi-l-'amal, toil in labour. Al-Muyassar gives a pair with a different second term: the killing of their sons and istikhdam nisa'ihim, the putting of their women to service. Neither cites a chain. Each writes a single line, and each turns the abstract adjective into concrete losses: sons who were killed, women kept alive or kept in service, and bodies worn down by work that was not their choice.",
            "bn": "বাগাভী কাতাদার জোড়াটি রাখেন, সঙ্গে যোগ করেন তৃতীয় আরেকটি: ছেলেদের হত্যা, মেয়েদের বাঁচিয়ে রাখা, আর আত-তাআবু ফিল আমাল, কাজের খাটুনিতে ক্লান্তি। মুয়াসসারও জোড়া দেয়, তবে দ্বিতীয় অংশটা আলাদা: তাদের ছেলেদের হত্যা আর ইসতিখদামু নিসাইহিম, তাদের নারীদের সেবার কাজে খাটানো। কেউই সনদ উল্লেখ করেন না। প্রত্যেকের কথা এক লাইনের। আর প্রত্যেকে বিমূর্ত বিশেষণটিকে বাস্তব ক্ষতির চেহারা দেন: নিহত ছেলেরা, বাঁচিয়ে রাখা বা কাজে খাটানো নারীরা, আর এমন খাটুনিতে ক্ষয়ে যাওয়া শরীর, যা তারা নিজেরা বেছে নেয়নি।"
          },
          {
            "en": "Al-Qurtubi gives the fullest list. The torment, he says, is what was done to them by Pharaoh's command: the killing of sons and the putting of women to service, their enslavement of them, and the burdening of them with arduous works. Ibn Kathir names no killing at all in this place. His gloss is about subjection: taskhiruhu iyyahum fi-l-a'mal al-muhina al-shaqqa, Pharaoh's pressing them into humiliating and exhausting labour. The word muhina returns in his sentence, so the labour itself is called humiliating, just as the torment is in the verse.",
            "bn": "সবচেয়ে পূর্ণ তালিকা দেন কুরতুবী। তাঁর ভাষায় শাস্তি হলো ফেরাউনের হুকুমে তাদের সঙ্গে যা করা হতো: ছেলেদের হত্যা, নারীদের সেবার কাজে খাটানো, তাদের দাস বানিয়ে রাখা, আর কঠিন কঠিন কাজের বোঝা চাপানো। ইবন কাসীর এ জায়গায় হত্যার কথা একেবারেই বলেন না। তাঁর ব্যাখ্যা জোর করে খাটানো নিয়ে: তাসখীরুহু ইয়্যাহুম ফিল আমালিল মুহীনাতিশ শাক্কাহ, ফেরাউন তাদের অপমানজনক আর হাড়ভাঙা কাজে বাধ্য করত। তাঁর বাক্যে মুহীনা শব্দটি আবার ফিরে আসে। ফলে আয়াত যেমন শাস্তিকে অপমানজনক বলে, তিনিও খাটুনিটাকে তেমনই অপমানজনক বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Spared, or Put to Service",
          "bn": "বাঁচিয়ে রাখা, নাকি খাটানো"
        },
        "p": [
          {
            "en": "The lists part ways at the women. Qatada, as at-Tabari reports him, and al-Baghawi say istihya', keeping them alive. Al-Muyassar and al-Qurtubi say istikhdam, putting them to service. None of the texts gathered here explains the difference or argues for its own word against the other. The two words do not make the same claim. The first says the women were spared while the sons were killed; the second says what was done with them. This article keeps both as the texts give them, and does not choose between them.",
            "bn": "নারীদের প্রসঙ্গে এসে তালিকাগুলো আলাদা হয়ে যায়। তাবারীর বর্ণনায় কাতাদা আর বাগাভী বলেন ইসতিহইয়া, অর্থাৎ বাঁচিয়ে রাখা। মুয়াসসার আর কুরতুবী বলেন ইসতিখদাম, অর্থাৎ সেবার কাজে খাটানো। এখানে সংগ্রহ করা কোনো লেখাই এই পার্থক্যের ব্যাখ্যা দেয় না, নিজের শব্দের পক্ষে অন্যটির বিরুদ্ধে যুক্তিও দেয় না। শব্দ দুটি অবশ্য একই দাবি করে না। প্রথমটি বলে, ছেলেদের হত্যা করা হলেও নারীদের বাঁচিয়ে রাখা হতো। দ্বিতীয়টি বলে, তাদের দিয়ে কী করানো হতো। লেখাগুলো যেভাবে দিয়েছে, এ লেখা দুটোকেই সেভাবে রাখে, কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "They also differ on whose hands are named. At-Tabari says Pharaoh and his people. Al-Qurtubi speaks of those acting by Pharaoh's command. Ibn Kathir speaks of Pharaoh's own humiliation of them. Al-Muyassar and as-Sa'di name no agent in their lines. The verse that follows settles the chief name, since it says the rescue was from Pharaoh (44:31). In every version the wrong sits with a ruler, his command and the people who carried it out, in that age, and the texts say nothing beyond it.",
            "bn": "কার হাতে এই জুলুম, তা নিয়েও তাঁদের কথা আলাদা। তাবারী বলেন ফেরাউন আর তার লোকেরা। কুরতুবী বলেন তাদের কথা, যারা ফেরাউনের হুকুমে এসব করত। ইবন কাসীর বলেন, ফেরাউন নিজেই তাদের অপমান করত। মুয়াসসার আর সা'দী তাঁদের লাইনে কারও নাম নেন না। প্রধান নামটি ঠিক করে দেয় পরের আয়াত, কারণ সেখানে আছে, উদ্ধারটা ছিল ফেরাউনের কাছ থেকে (৪৪:৩১)। প্রতিটি ভাষ্যেই দোষ গিয়ে পড়ে এক শাসক, তার হুকুম আর সে হুকুম যারা তামিল করেছিল তাদের উপর, সেই যুগেই। এর বাইরে লেখাগুলো কিছু বলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Texts Leave Unsaid",
          "bn": "লেখাগুলো যা বলে না"
        },
        "p": [
          {
            "en": "It should be said plainly how little these sources discuss. The verse does not say how the rescue happened, and none of the commentaries gathered on it retells the night journey or the crossing; those belong to 44:23 and 44:24. None gives a number of the killed, a length for the servitude or the name of a place. Ma'arif al-Qur'an's note, which covers 44:29 to 44:31 together, is given entirely to the weeping of heaven and earth, and says nothing about this verse at all.",
            "bn": "সোজা কথায় বলা দরকার, এই উৎসগুলো কত কম কথা বলে। রক্ষাটা কীভাবে ঘটেছিল, আয়াত তা বলে না। এখানে সংগ্রহ করা কোনো তাফসীরও এ আয়াতের আলোচনায় রাতের যাত্রা বা সমুদ্র পার হওয়ার কাহিনি আবার শোনায় না। সেসব ৪৪:২৩ আর ৪৪:২৪ আয়াতের বিষয়। কতজন নিহত হয়েছিল, দাসত্ব কত দিন চলেছিল, ঘটনা কোন জায়গার, কেউ তা বলে না। মাআরিফুল কুরআনের টীকা ৪৪:২৯ থেকে ৪৪:৩১ পর্যন্ত একসঙ্গে ধরে, কিন্তু পুরোটাই আসমান-যমীনের কান্না নিয়ে। এ আয়াত সম্পর্কে সেখানে কিছুই নেই।"
          },
          {
            "en": "Ibn Kathir's English abridgement, as available here, ends its section on these verses at 44:26, so it is not drawn on; his Arabic note is used instead. No commentary gathered on the verse attaches a hadith to it, and none reports an occasion of revelation, so neither is brought here. The verse's setting is its placement: after the destruction of the oppressors, and before the sentence that names their ruler. What remains is a handful of short glosses that agree on the main point and differ in detail, and for this verse that is enough.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণের যে কপি এখানে পাওয়া গেছে, তাতে এ আয়াতগুলোর আলোচনা থেমে গেছে ৪৪:২৬-এ। তাই সেটি থেকে কিছু নেওয়া হয়নি, নেওয়া হয়েছে তাঁর আরবি টীকা থেকে। এ আয়াতের উপর সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো হাদিস জোড়ে না, নাজিলের কোনো উপলক্ষও বলে না। তাই এখানে এর কোনোটিই আনা হয়নি। আয়াতের প্রেক্ষাপট তার অবস্থানেই: জালিমদের ধ্বংসের পরে, আর যে বাক্যে তাদের শাসকের নাম আসে, তার আগে। হাতে থাকে কয়েকটি ছোট ব্যাখ্যা। মূল কথায় সেগুলো একমত, খুঁটিনাটিতে আলাদা। এ আয়াতের জন্য এটুকুই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "History, Not a Verdict Today",
          "bn": "ইতিহাস, আজকের রায় নয়"
        },
        "p": [
          {
            "en": "A word of care is needed here. The verse names two parties in an event of the past: the Children of Israel, who were saved, and Pharaoh, from whom they were saved. It speaks only of what it names, a people held in humiliation in that age and a ruler and his people who held them there, and it licenses nothing against any living person or community. Nor does this article draw from it any link, for or against, to any people, religion or state of the present day. The rescue stays where the texts place it.",
            "bn": "এখানে সাবধানতার কথা বলা দরকার। আয়াতটি অতীতের এক ঘটনায় দুই পক্ষের নাম নেয়: বানী ইসরাঈল, যাদের রক্ষা করা হয়েছিল, আর ফেরাউন, যার কাছ থেকে তাদের রক্ষা করা হয়েছিল। লেখাগুলো যা বর্ণনা করে, আয়াতও তা-ই বর্ণনা করে: সেই যুগে অপমানের মধ্যে আটকে থাকা এক জনগোষ্ঠী, আর এক শাসক ও তার লোকেরা, যারা তাদের সেভাবে আটকে রেখেছিল। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজকের কোনো জাতি, ধর্ম বা রাষ্ট্রের সঙ্গে এ লেখা আয়াতটির কোনো সম্পর্কও টানে না, পক্ষেও না, বিপক্ষেও না। উদ্ধারের ঘটনা থাকে সেখানেই, যেখানে লেখাগুলো তাকে রেখেছে।"
          },
          {
            "en": "What the verse holds for every reader lies elsewhere. It shows that it is Allah who saves from humiliation, and it gives humiliation a name that the commentators fill in with the killing of sons, forced service and work that grinds people down. A reader who takes the verse in its place does not come away with a judgement on others. They come away with a measure for their own conduct, and with a reason to be grateful for whatever rescue has reached them, whether they noticed it at the time or not.",
            "bn": "প্রত্যেক পাঠকের জন্য আয়াতের শিক্ষা অন্য জায়গায়। আয়াত দেখায়, অপমান থেকে রক্ষা করেন আল্লাহ। আর অপমানকে এমন এক নাম দেয়, যার ভেতরটা তাফসীরকারেরা ভরে দেন ছেলেদের হত্যা, জোর করে খাটানো আর মানুষকে নিঃশেষ করে দেওয়া পরিশ্রমের কথা দিয়ে। যে পাঠক আয়াতটিকে তার জায়গায় রেখে পড়েন, তিনি অন্যদের উপর রায় নিয়ে ফেরেন না। ফেরেন নিজের আচরণ মাপার এক মানদণ্ড নিয়ে। আর যে উদ্ধার তাঁর কাছে পৌঁছেছে, তখন টের পান বা না পান, তার জন্য শোকর করার এক কারণ নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Out, and Remembering",
          "bn": "বের করে আনা, আর মনে রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir and as-Sa'di both read the verse as a favour recalled, and a favour recalled asks for memory. Most people have been brought out of something: an illness, a debt, a home where they were belittled, a job that treated them as less than a person. In time the relief fades and the rescue becomes ordinary. The verse speaks with emphasis, wa-laqad, and We certainly, and sets the past before its listener as something not to be forgotten. Its question is simple: do you remember who brought you out?",
            "bn": "ইবন কাসীর আর সা'দী দুজনেই আয়াতটিকে পড়েন অনুগ্রহের কথা মনে করিয়ে দেওয়া হিসেবে। আর যে অনুগ্রহের কথা মনে করিয়ে দেওয়া হয়, তা চায় মানুষ সেটা মনে রাখুক। বেশির ভাগ মানুষকেই কোনো না কোনো কিছু থেকে বের করে আনা হয়েছে: অসুখ, ঋণ, এমন ঘর যেখানে তাকে তুচ্ছ করা হতো, এমন চাকরি যেখানে তাকে মানুষ বলেই গণ্য করা হতো না। সময়ের সঙ্গে স্বস্তির অনুভূতি মিলিয়ে যায়, উদ্ধারটা হয়ে যায় সাধারণ ঘটনা। আয়াত কথা বলে জোর দিয়ে, ওয়া লাকাদ, আর আমি অবশ্যই। অতীতকে শ্রোতার সামনে রাখে ভুলে না যাওয়ার জিনিস হিসেবে। প্রশ্নটা সহজ: কে আপনাকে বের করে এনেছিলেন, মনে আছে?"
          },
          {
            "en": "The other half of the lesson comes from the adjective. If the torment was named, as the commentators gloss it, for the way it brought people low, then humiliation is no small harm. Anyone with power over another, a parent, an employer, a manager, a teacher, can make someone feel small, and can do it without raising a hand. The verse gives that kind of treatment a hard name. Whoever has been brought out of humiliation has the least excuse of all to become its cause in someone else's life.",
            "bn": "শিক্ষার বাকি অর্ধেক আসে বিশেষণটি থেকে। তাফসীরকারদের ব্যাখ্যামতো শাস্তিটার এই নাম যদি হয়ে থাকে মানুষকে নিচু করার কারণে, তবে অপমান ছোটখাটো ক্ষতি নয়। অন্যের উপর যার ক্ষমতা আছে, যেমন বাবা-মা, মালিক, ঊর্ধ্বতন কর্মকর্তা বা শিক্ষক, তিনি চাইলে কাউকে ছোট করে দিতে পারেন, গায়ে হাত না তুলেও। আয়াত এমন আচরণকে কঠিন এক নামে ডাকে। যাকে অপমান থেকে বের করে আনা হয়েছে, অন্যের জীবনে অপমানের কারণ হওয়ার অজুহাত তার সবচেয়ে কম।"
          }
        ]
      }
    ]
  },
  "44:38": {
    "sections": [
      {
        "h": {
          "en": "Who Is Being Answered",
          "bn": "জবাবটা কাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "Wa ma khalaqna al-samawati wal-arda wa ma baynahuma la'ibin: and We did not create the heavens and the earth and what is between them in play. The verse opens with wa, and, and the exchange it continues is quoted just above it. In 44:34 to 44:36 the Qur'an reports a group who say there is nothing but our first death and we will not be raised, and who then demand: bring back our forefathers, if you are truthful.",
            "bn": "ওয়ামা খালাকনাস সামাওয়াতি ওয়াল আরদা ওয়ামা বাইনাহুমা লা'ইবীন: আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝে যা আছে, তা আমি খেলার ছলে সৃষ্টি করিনি। আয়াতটি শুরু হয়েছে ওয়া, অর্থাৎ 'আর' দিয়ে। যে কথোপকথনের এটি অংশ, তা ঠিক উপরেই উদ্ধৃত আছে। ৪৪:৩৪ থেকে ৪৪:৩৬ আয়াতে কুরআন একদল লোকের কথা তুলে ধরে। তারা বলে, আমাদের প্রথম মৃত্যুর পর আর কিছু নেই, আমাদের আর ওঠানো হবে না। তারপর দাবি তোলে: তোমরা সত্যবাদী হলে আমাদের বাপদাদাদের ফিরিয়ে আনো।"
          },
          {
            "en": "Before the reply proper, 44:37 asks a question and gives a warning: are they better, or the people of Tubba' and those before them? We destroyed them, for they were criminals. Ma'arif al-Qur'an explains Tubba' as the royal title of the Himyarite kings of Yemen, and stresses that the Qur'an speaks of his people, not of Tubba' himself. None of the commentaries fetched attaches a hadith to 44:38 itself; a narration Ma'arif cites about Tubba' could not be checked against a collection here, so it is not quoted.",
            "bn": "মূল জবাবের আগে ৪৪:৩৭ আয়াত একটি প্রশ্ন রাখে, সঙ্গে সতর্কবাণী: এরা কি শ্রেষ্ঠ, নাকি তুব্বার সম্প্রদায় আর তাদের আগের লোকেরা? আমি তাদের ধ্বংস করেছি, কারণ তারা ছিল অপরাধী। মাআরিফুল কুরআন বলে, তুব্বা ছিল ইয়েমেনের হিময়ারি রাজাদের উপাধি। সেখানে জোর দিয়ে বলা হয়েছে, কুরআন কথা বলেছে তুব্বার সম্প্রদায় নিয়ে, তুব্বাকে নিয়ে নয়। যেসব তাফসীর আনা হয়েছে, তার কোনোটিই খোদ ৪৪:৩৮ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তুব্বা প্রসঙ্গে মাআরিফ একটি বর্ণনা উল্লেখ করে, কিন্তু এখানে কোনো হাদীসগ্রন্থের সঙ্গে মিলিয়ে দেখা যায়নি বলে সেটি উদ্ধৃত হলো না।"
          },
          {
            "en": "Why answer a denial of the resurrection with a statement about the sky? At-Tabari, on the completing verse 44:39, names what the pair intends: an alert to the soundness of the resurrection and the requital, al-tanbih 'ala sihhat al-ba'th wal-mujazah. The reply does not bring back anyone's forefathers on demand. It goes behind the demand, to the kind of Maker who made the world, and lets the conclusion about a return follow from that.",
            "bn": "পুনরুত্থান অস্বীকারের জবাবে আকাশের কথা কেন? পরের আয়াত ৪৪:৩৯ এই বাক্য পূর্ণ করে। সেখানে তাবারী জানিয়ে দেন দুই আয়াতের উদ্দেশ্য: পুনরুত্থান আর প্রতিফল যে সত্য, সে দিকে মনোযোগ ফেরানো। তাঁর ভাষায়, আত-তানবীহ আলা সিহহাতিল বা'সি ওয়াল মুজাযাহ। জবাবটা দাবিমতো কারও বাপদাদাকে হাজির করে না। দাবির পেছনে গিয়ে সে দেখায়, জগৎ যিনি বানিয়েছেন তিনি কেমন স্রষ্টা। ফিরে যাওয়ার সিদ্ধান্তটা তখন আপনা থেকেই বেরিয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heavens, Earth, and the Between",
          "bn": "আকাশ, পৃথিবী আর মাঝখান"
        },
        "p": [
          {
            "en": "The verse is seven words long in Arabic. Three phrases name what was made, al-samawat, al-ard and ma baynahuma, the heavens, the earth and whatever lies between them, and the closing word names how it was not made. At-Tabari's paraphrase fills in the scale: the seven heavens and the earths, and whatever creation lies between them. Nothing is left outside the statement. Even the between, which a listener might pass over, is counted, so whatever moves in that space falls under the same sentence.",
            "bn": "আরবিতে আয়াতটি মাত্র সাতটি শব্দের। তিনটি অংশ বলে কী সৃষ্টি হয়েছে: আস-সামাওয়াত, আল-আরদ আর মা বাইনাহুমা, অর্থাৎ আকাশমণ্ডলী, পৃথিবী আর এ দুয়ের মাঝে যা কিছু আছে। শেষ শব্দটি বলে, কোন ভঙ্গিতে তা সৃষ্টি হয়নি। তাবারীর ব্যাখ্যায় পরিসরটা আরও স্পষ্ট হয়: সাত আকাশ, একাধিক পৃথিবী, আর এগুলোর মাঝখানে যত সৃষ্টি। কোনো কিছুই এই বাক্যের বাইরে থাকে না। মাঝখানের জায়গাটুকু শ্রোতার চোখ এড়িয়ে যেতে পারত, কিন্তু সেটাও গোনা হয়েছে। ফলে সেখানে যা কিছু চলাফেরা করে, সবই একই কথার আওতায় পড়ে।"
          },
          {
            "en": "The last word, la'ibin, is a plural participle, players or ones at play, matching the We of khalaqna. At-Tabari restates it with the verbal noun la'iban, as play, and al-Muyassar does the same. Read with the participle, the denial falls on the manner of the Maker's acting rather than on the objects: what is ruled out is that He made all this while playing. On what kind of play is meant, the commentators give different glosses, and they are worth hearing one by one.",
            "bn": "শেষ শব্দ লা'ইবীন বহুবচনের কর্তাবাচক রূপ, মানে যারা খেলছে। খালাকনা ক্রিয়ার 'আমি'-র সঙ্গে এর মিল। তাবারী একে ক্রিয়াবিশেষ্য দিয়ে বলেন লা'ইবান, অর্থাৎ খেলা হিসেবে, আর মুয়াসসারও একই কথা বলে। কর্তাবাচক রূপটা মাথায় রাখলে নাকচটা পড়ে সৃষ্ট বস্তুর উপর নয়, স্রষ্টার কাজের ধরনের উপর। বাদ দেওয়া হচ্ছে এই ধারণা যে, তিনি খেলতে খেলতে এসব বানিয়েছেন। কোন ধরনের খেলার কথা বলা হচ্ছে, তা নিয়ে তাফসীরকারেরা ভিন্ন ভিন্ন ব্যাখ্যা দেন। সেগুলো একে একে শোনা দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "Heedless, Amused or Pointless",
          "bn": "উদাসীন, মজায় মগ্ন, না নিষ্ফল"
        },
        "p": [
          {
            "en": "Al-Qurtubi records two short glosses. Muqatil reads la'ibin as ghafilin, heedless: We did not make all this without attending to it. Al-Kalbi reads it as lahin, amusing Ourselves, taken up with a diversion. The two are close but not identical. Muqatil's word denies inattention, a maker who sets a thing going and looks away. Al-Kalbi's denies frivolity, a maker who makes for the pleasure of the moment. Al-Qurtubi lists both and does not choose between them.",
            "bn": "কুরতুবী দুটি ছোট ব্যাখ্যা উল্লেখ করেন। মুকাতিলের মতে লা'ইবীন মানে গাফিলীন, উদাসীন। অর্থাৎ আমি এসব বানিয়ে খেয়াল না রেখে ফেলে রাখিনি। কালবীর মতে এর মানে লাহীন, আমোদে মগ্ন, কোনো বিনোদনে ব্যস্ত। দুটো কাছাকাছি, কিন্তু হুবহু এক নয়। মুকাতিলের শব্দ নাকচ করে অমনোযোগ, যেন কেউ কোনো কিছু চালু করে দিয়ে মুখ ফিরিয়ে নিল। কালবীর শব্দ নাকচ করে লঘুতা, যেন কেউ শুধু মুহূর্তের মজার জন্য কিছু বানাল। কুরতুবী দুটোই রাখেন, কোনোটিকে বেছে নেন না।"
          },
          {
            "en": "As-Sa'di frames the verse as Allah telling of the perfection of His power and the completeness of His wisdom. His paraphrase stacks three negatives: He did not create the heavens and the earth as la'ib, play, nor as lahw, amusement, nor suda, aimlessly, min ghayr fa'ida, without benefit. Where Muqatil and al-Kalbi describe the posture of the actor, as-Sa'di's last phrase looks at the result: a creation that yields nothing. For him, the verse denies a world without a point.",
            "bn": "সা'দী আয়াতটিকে দেখেন এভাবে: আল্লাহ এখানে নিজের পরিপূর্ণ কুদরত আর পূর্ণাঙ্গ হিকমতের খবর দিচ্ছেন। তাঁর ব্যাখ্যায় তিনটি 'না' পাশাপাশি বসে। আল্লাহ আকাশ ও পৃথিবী সৃষ্টি করেননি লা'ইব হিসেবে, মানে খেলা হিসেবে। লাহও হিসেবেও নয়, মানে আমোদ হিসেবে। সুদা হিসেবেও নয়, মানে উদ্দেশ্যহীনভাবে, মিন গাইরি ফাইদা, কোনো উপকার ছাড়া। মুকাতিল আর কালবী বর্ণনা করেন কর্তার ভঙ্গি। সা'দীর শেষ কথাটি তাকায় ফলের দিকে, এমন সৃষ্টি যা থেকে কিছুই আসে না। তাঁর পাঠে আয়াতটি নাকচ করে অর্থহীন এক জগতের ধারণা।"
          },
          {
            "en": "Ibn Kathir opens with a different word altogether. He says Allah is here telling of His 'adl, His justice, and declaring Himself free of la'ib, play, 'abath, futility, and batil, falsehood. Justice is an unexpected first word for a verse about the cosmos, until one recalls who is being answered: people who deny that anyone will be raised and repaid. By leading with justice, Ibn Kathir ties the verse to the question of recompense that the surrounding verses are about.",
            "bn": "ইবন কাসীর শুরু করেন একেবারে আলাদা একটি শব্দ দিয়ে। তিনি বলেন, আল্লাহ এখানে নিজের আদল, অর্থাৎ ন্যায়বিচারের খবর দিচ্ছেন। সেই সঙ্গে নিজেকে পবিত্র ঘোষণা করছেন লা'ইব বা খেলা থেকে, আবাস বা অনর্থকতা থেকে, আর বাতিল বা অসত্য থেকে। মহাবিশ্ব নিয়ে কোনো আয়াতের প্রথম ব্যাখ্যায় ন্যায়বিচারের কথা শুনে একটু অবাক লাগে। কিন্তু মনে রাখতে হবে, জবাবটা কাদের দেওয়া হচ্ছে। তারা অস্বীকার করে যে কাউকে আবার ওঠানো হবে আর প্রতিদান দেওয়া হবে। ন্যায়বিচার দিয়ে শুরু করে ইবন কাসীর আয়াতটিকে প্রতিফলের সেই প্রশ্নের সঙ্গে জুড়ে দেন, যা নিয়ে আশপাশের আয়াতগুলো কথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Set Beside It",
          "bn": "পাশে রাখা দুটি আয়াত"
        },
        "p": [
          {
            "en": "To show that the verse does not stand alone, Ibn Kathir places two others beside it. The first is 38:27: and We did not create the heaven and the earth and what is between them batil, in vain; that is the assumption of those who disbelieve, so woe to those who disbelieve from the Fire. The wording is close to 44:38, with batil in place of la'ibin, but 38:27 says aloud what our verse leaves implicit: thinking creation purposeless is the assumption of disbelief, and it ends in the Fire.",
            "bn": "আয়াতটি যে একা নয়, তা দেখাতে ইবন কাসীর এর পাশে আরও দুটি আয়াত রাখেন। প্রথমটি ৩৮:২৭: আকাশ, পৃথিবী আর এ দুয়ের মাঝে যা আছে, তা আমি বাতিল, অর্থাৎ অনর্থক সৃষ্টি করিনি। এটা কাফিরদের ধারণা। সুতরাং কাফিরদের জন্য আগুনের দুর্ভোগ। শব্দগুলো ৪৪:৩৮ আয়াতের খুব কাছাকাছি, শুধু লা'ইবীনের জায়গায় বাতিল। তবে আমাদের আয়াত যা ইঙ্গিতে রেখে দেয়, ৩৮:২৭ তা মুখ ফুটে বলে: সৃষ্টিকে উদ্দেশ্যহীন ভাবা কুফরের ধারণা, আর এর শেষ ঠিকানা আগুন।"
          },
          {
            "en": "His second witness is 23:115 and 23:116: did you think that We created you in vain, and that to Us you would not be returned? So exalted is Allah, the King, the Truth. That passage has its own deep article. What matters here is the pairing Ibn Kathir draws on: 'abath, futility, stands beside the thought of not being returned. In both verses he cites, a creation without purpose and a denied return appear together, as one mistaken thought seen from two sides.",
            "bn": "তাঁর দ্বিতীয় সাক্ষী ২৩:১১৫ ও ২৩:১১৬: তোমরা কি ভেবেছিলে, আমি তোমাদের অনর্থক সৃষ্টি করেছি, আর তোমাদের আমার কাছে ফিরিয়ে আনা হবে না? মহিমান্বিত আল্লাহ, যিনি প্রকৃত বাদশাহ। ওই আয়াত দুটির আলাদা বিস্তারিত প্রবন্ধ আছে। এখানে দরকারি কথা হলো ইবন কাসীর যে জোড়াটি সামনে আনেন: আবাস বা অনর্থকতা বসে আছে ফিরে না যাওয়ার ধারণার পাশেই। তাঁর উদ্ধৃত দুটি আয়াতেই উদ্দেশ্যহীন সৃষ্টি আর অস্বীকৃত প্রত্যাবর্তন একসঙ্গে আসে। একই ভুল ভাবনা, দুই দিক থেকে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Only With the Truth",
          "bn": "সত্য ছাড়া নয়"
        },
        "p": [
          {
            "en": "The sentence does not end at la'ibin. 44:39 completes it: ma khalaqnahuma illa bil-haqq, We did not create the two except with the truth, but most of them do not know. A negation followed by illa, except, leaves only one possibility standing. Al-Qurtubi lists three readings of bil-haqq. Muqatil takes it as bil-amr al-haqq, by the true command; al-Kalbi and al-Hasan as lil-haqq, for the truth; and a third view as to establish the truth and make it plain: the oneness of Allah and holding fast to obeying Him.",
            "bn": "বাক্যটি লা'ইবীনে এসে শেষ হয় না। ৪৪:৩৯ আয়াত তা পূর্ণ করে: মা খালাকনাহুমা ইল্লা বিল হাক্ক, এ দুটিকে আমি সত্য ছাড়া সৃষ্টি করিনি, কিন্তু তাদের অধিকাংশই জানে না। প্রথমে 'না', তারপর ইল্লা, অর্থাৎ 'ছাড়া'। ফলে একটিমাত্র সম্ভাবনাই টিকে থাকে। বিল হাক্কের তিনটি ব্যাখ্যা দেন কুরতুবী। মুকাতিলের মতে এর মানে বিল আমরিল হাক্ক, সত্য আদেশে। কালবী ও হাসানের মতে লিল হাক্ক, সত্যের জন্য। আরেক মত হলো সত্যকে প্রতিষ্ঠা ও প্রকাশ করার জন্য, আর সেই সত্য হলো আল্লাহর তাওহীদ এবং তাঁর আনুগত্য আঁকড়ে থাকা।"
          },
          {
            "en": "Al-Baghawi gives the for-the-truth reading with a definition, introduced as it is said: the truth here is the reward for obedience and the punishment for disobedience. At-Tabari reads bil-haqq as the truth without which the governing of things would not be sound, and al-Muyassar as the truth that is Allah's way in His creation and His governing. Al-Qurtubi adds that he has already treated this meaning in Surat al-Anbiya, where 21:16 uses almost the same words as our verse.",
            "bn": "বাগাভী 'সত্যের জন্য' পাঠটি আনেন 'বলা হয়' কথাটি দিয়ে, সঙ্গে একটি সংজ্ঞাও দেন: এখানে সত্য মানে আনুগত্যের পুরস্কার আর নাফরমানির শাস্তি। তাবারীর মতে বিল হাক্ক সেই সত্য, যা ছাড়া জগতের পরিচালনা ঠিকঠাক চলতে পারে না। মুয়াসসারের মতে এটি সেই সত্য, যা নিজের সৃষ্টি ও পরিচালনায় আল্লাহর নিয়ম। কুরতুবী আরও জানান, এই অর্থ নিয়ে তিনি সূরা আল-আম্বিয়ায় আগেই আলোচনা করেছেন। সেখানে ২১:১৬ আয়াতে প্রায় হুবহু আমাদের আয়াতের শব্দগুলোই আছে।"
          },
          {
            "en": "As-Sa'di reads the preposition both ways at once: their very creation is with the truth, and the creation contains truth. Then he states the purpose outright: Allah brought the two into existence so that people would worship Him alone, without partner, and so that He would command His servants and forbid them, reward them and punish them. The readings differ in emphasis more than they conflict: one looks at the command that made the world, one at the order that runs it, one at the worship and the recompense it exists for.",
            "bn": "সা'দী অব্যয়টিকে একসঙ্গে দুই অর্থে পড়েন। এ দুটির সৃষ্টিই সত্যের সঙ্গে, আবার এই সৃষ্টির ভেতরেও সত্য নিহিত। তারপর উদ্দেশ্যটা সরাসরি বলেন: আল্লাহ এ দুটিকে অস্তিত্বে এনেছেন, যাতে মানুষ শরিকহীনভাবে একমাত্র তাঁরই ইবাদত করে। আর যাতে তিনি বান্দাদের আদেশ দেন, নিষেধ করেন, পুরস্কার দেন ও শাস্তি দেন। ব্যাখ্যাগুলোর মধ্যে বিরোধের চেয়ে জোরের পার্থক্যই বেশি। কেউ দেখেন সেই আদেশ, যা জগৎ বানিয়েছে। কেউ দেখেন সেই নিয়ম, যা জগৎ চালায়। কেউ দেখেন সেই ইবাদত ও প্রতিদান, যার জন্য জগতের অস্তিত্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "Made, Tested, Then Repaid",
          "bn": "সৃষ্টি, পরীক্ষা, তারপর প্রতিদান"
        },
        "p": [
          {
            "en": "At-Tabari spells out what play would have looked like, and so what the verse denies. We did not create creation in vain, he has Allah say, bringing them into being, giving them life as long as We willed, then annihilating them without testing them by obedience, command and prohibition, and without repaying the obedient for his obedience and the disobedient for his disobedience. Rather, We created it to test whom We willed. He closes with 53:31: that He may repay those who did evil for what they did, and repay those who did good with the best.",
            "bn": "খেলা হলে ব্যাপারটা কেমন হতো, আর তাই আয়াতটি ঠিক কী নাকচ করছে, তাবারী তা খুলে বলেন। তাঁর ব্যাখ্যায় আল্লাহর কথা এমন: আমি সৃষ্টিকে অনর্থক বানাইনি। এমন নয় যে তাদের অস্তিত্বে আনলাম, যতদিন চাইলাম বাঁচিয়ে রাখলাম, তারপর মিটিয়ে দিলাম। আনুগত্য, আদেশ আর নিষেধ দিয়ে কোনো পরীক্ষা হলো না। অনুগতকে তার আনুগত্যের, নাফরমানকে তার নাফরমানির প্রতিদানও দেওয়া হলো না। বরং আমি এসব বানিয়েছি, যাকে চাই তাকে পরীক্ষা করার জন্য। শেষে তিনি ৫৩:৩১ উদ্ধৃত করেন: যাতে তিনি মন্দকারীদের তাদের কাজের প্রতিফল দেন, আর সৎকর্মশীলদের দেন উত্তম প্রতিদান।"
          },
          {
            "en": "Ma'arif al-Qur'an, on 44:39, lists what the heavens and the earth make manifest. First, divine power. Second, the possibility of the Hereafter: the Creator who drew such vast bodies out of non-existence surely has the power to destroy them and create them again. Third, the need for recompense: without reward and punishment in the Hereafter, it says, the universe would be purposeless, since good and evil would end the same, which is far from divine wisdom. This world, in its phrase, is dar al-imtihan, the domain of testing.",
            "bn": "মাআরিফুল কুরআন ৪৪:৩৯ আয়াতের আলোচনায় গুনে দেখায়, আকাশ আর পৃথিবী কী কী প্রকাশ করে। প্রথমত, আল্লাহর কুদরত। দ্বিতীয়ত, আখিরাত যে সম্ভব। যে স্রষ্টা এত বিশাল বস্তুকে অনস্তিত্ব থেকে অস্তিত্বে এনেছেন, সেগুলো ধ্বংস করে আবার বানানোর ক্ষমতা তাঁর নিশ্চয়ই আছে। তৃতীয়ত, প্রতিফলের প্রয়োজন। মাআরিফ বলে, আখিরাতে পুরস্কার আর শাস্তি না থাকলে মহাবিশ্বই উদ্দেশ্যহীন হয়ে যেত। ভালো আর মন্দের পরিণাম তখন একই হতো, আর তা আল্লাহর হিকমতের সঙ্গে খাপ খায় না। এই দুনিয়া তার ভাষায় দারুল ইমতিহান, পরীক্ষার জায়গা।"
          },
          {
            "en": "Set beside the deniers' demand, this reads as an answer in kind. They asked for their forefathers to be produced now, as proof. The reply points to a proof already overhead: whoever raised the heavens out of nothing is not taxed by raising a person again, and whoever built a place of testing will not leave its results unread. The demand assumed that this world is the whole story. At-Tabari and Ma'arif both read the verse as saying it is only the first part.",
            "bn": "অস্বীকারকারীদের দাবির পাশে রাখলে এটা যেন একই ভাষায় জবাব। তারা চেয়েছিল, প্রমাণ হিসেবে এখনই তাদের বাপদাদাদের হাজির করা হোক। জবাব আঙুল তোলে এমন প্রমাণের দিকে, যা মাথার উপরেই আছে। যিনি শূন্য থেকে আকাশ তুলেছেন, একজন মানুষকে আবার ওঠানো তাঁর কাছে ভারী কিছু নয়। আর যিনি পরীক্ষার জায়গা বানিয়েছেন, তিনি তার ফল না দেখে ফেলে রাখবেন না। তাদের দাবির পেছনে ধারণা ছিল, এই দুনিয়াই পুরো কাহিনি। তাবারী ও মাআরিফ দুজনের পাঠেই আয়াতটি বলছে, এটা কেবল প্রথম অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Most of Them Do Not Know",
          "bn": "অধিকাংশই যা জানে না"
        },
        "p": [
          {
            "en": "The pair ends on a diagnosis: but most of them do not know. At-Tabari identifies them as most of these who associate partners with Allah, and says what their not knowing produces: they fear no punishment from His anger for what they commit, and hope for no reward for good they might do, because they deny the Return. Al-Muyassar and as-Sa'di name another effect: for that reason they did not reflect on the heavens and the earth. Al-Qurtubi reads the word more widely: most of them, he says, means most people.",
            "bn": "দুই আয়াত শেষ হয় একটি রোগ ধরিয়ে দিয়ে: কিন্তু তাদের অধিকাংশই জানে না। তাবারীর মতে এরা আল্লাহর সঙ্গে শরিককারী এই লোকদের অধিকাংশ। না জানার ফল কী, তাও তিনি বলেন: নিজেদের কাজের জন্য আল্লাহর ক্রোধের শাস্তিকে তারা ভয় করে না। ভালো কিছু করলে তার পুরস্কারও আশা করে না, কারণ তারা আখিরাতে ফেরাকে অস্বীকার করে। মুয়াসসার আর সা'দী আরেকটি ফলের কথা বলেন: এ কারণেই তারা আকাশ ও পৃথিবী নিয়ে চিন্তা করেনি। কুরতুবী শব্দটিকে আরও বড় পরিসরে পড়েন। তাঁর মতে 'তাদের অধিকাংশ' মানে মানুষের অধিকাংশ।"
          },
          {
            "en": "A word of care belongs here. These verses describe a particular group whom the Qur'an condemns, those who said there is only our first death and dared their hearers to bring back their fathers, and beside them the people of Tubba', who it says were destroyed. The verses describe what the text describes. They license nothing against any living person or community, and give no ground for labelling anyone today as those deniers. The failure the commentators name, not reflecting, is one any reader can share.",
            "bn": "এখানে একটু সাবধানতার কথা বলা দরকার। এই আয়াতগুলো এমন একটি নির্দিষ্ট দলের বর্ণনা দেয়, যাদের কুরআন নিন্দা করেছে। তারা বলেছিল, প্রথম মৃত্যুর পর আর কিছু নেই, আর শ্রোতাদের চ্যালেঞ্জ দিয়েছিল বাপদাদাদের ফিরিয়ে আনতে। পাশে আছে তুব্বার সম্প্রদায়, যাদের ধ্বংসের কথা কুরআন বলেছে। আয়াতগুলো কেবল সেটুকুই বর্ণনা করে, যা পাঠে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। আজকের কাউকে সেই অস্বীকারকারী বলে দাগিয়ে দেওয়ারও কোনো ভিত্তি এখানে নেই। তাফসীরকারেরা যে ঘাটতির কথা বলেন, চিন্তা না করা, তা যেকোনো পাঠকের মধ্যেই থাকতে পারে।"
          },
          {
            "en": "44:40 to 44:42 then state where the argument lands: the Day of Decision is the appointed time for them all, which Ibn Kathir explains as the Day of Resurrection, when Allah judges between all creatures and gathers the first of them and the last, a day when no protector avails another except those on whom Allah has mercy. The challenge thrown down in 44:36 is not brushed aside. It is given a date, and the forefathers will be there with everyone else.",
            "bn": "এরপর ৪৪:৪০ থেকে ৪৪:৪২ আয়াত জানিয়ে দেয়, যুক্তিটা কোথায় গিয়ে থামে। ফয়সালার দিনই তাদের সবার নির্ধারিত সময়। ইবন কাসীর বলেন, এটা কিয়ামতের দিন, যেদিন আল্লাহ সব সৃষ্টির মধ্যে ফয়সালা করবেন আর আগের ও পরের সবাইকে একত্র করবেন। সেদিন কোনো অভিভাবক আরেকজনের কাজে আসবে না, তবে আল্লাহ যার প্রতি রহম করেন তার কথা আলাদা। ৪৪:৩৬ আয়াতে ছুড়ে দেওয়া চ্যালেঞ্জটা তাই উড়িয়ে দেওয়া হয়নি। তাকে একটা তারিখ দেওয়া হয়েছে, আর সেদিন বাপদাদারাও থাকবে বাকি সবার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Between Sky and Ground",
          "bn": "আকাশ আর মাটির মাঝখানে"
        },
        "p": [
          {
            "en": "Whoever hears this verse is standing in the very space it names: under the heavens, on the earth, among what lies between them. What it says of the whole it says of every part, and a human life is a part. As-Sa'di's three negatives can be turned into a quiet test of a single day. Was any of it spent as la'ib, play with no aim? As lahw, distraction that crowded out what mattered? Or as suda, simply left to drift without benefit?",
            "bn": "যে এই আয়াত শোনে, সে দাঁড়িয়ে আছে ঠিক সেই জায়গায়, যার কথা আয়াতে আছে: আকাশের নিচে, মাটির উপরে, এ দুয়ের মাঝখানে। পুরোটার ব্যাপারে আয়াত যা বলে, প্রতিটি অংশের ব্যাপারেও তা-ই বলে। আর মানুষের জীবনও সেই অংশেরই একটি। সা'দীর তিনটি 'না' দিয়ে একটি দিনকে চুপচাপ যাচাই করে দেখা যায়। আজকের কোনো অংশ কি লা'ইব হয়ে গেল, লক্ষ্যহীন খেলা? নাকি লাহও, এমন বিনোদন যা জরুরি কাজকে ঠেলে সরিয়ে দিল? নাকি সুদা, কোনো উপকার ছাড়াই এমনি ভেসে যেতে দেওয়া?"
          },
          {
            "en": "Ma'arif's fourth point gives the positive side: the universe urges thinking people to obey Allah and to thank Him for granting them this whole creation as a great blessing. And the failure named in the deniers was that they did not reflect on the heavens and the earth. So the verse asks for two small habits rather than one grand gesture: to look at the sky long enough to remember who made it and why, and to live the next hour as someone who will be asked about it.",
            "bn": "মাআরিফের চতুর্থ কথাটি দেখায় ইতিবাচক দিক। মহাবিশ্ব চিন্তাশীল মানুষকে ডাকে আল্লাহর আনুগত্যের দিকে, আর এই গোটা সৃষ্টিকে বড় নিয়ামত হিসেবে দেওয়ার জন্য তাঁর শোকর আদায়ের দিকে। অস্বীকারকারীদের ঘাটতি ছিল, তারা আকাশ ও পৃথিবী নিয়ে চিন্তা করেনি। তাই আয়াতটি একটি বিরাট পদক্ষেপ চায় না, চায় দুটি ছোট অভ্যাস। আকাশের দিকে এতক্ষণ তাকানো, যাতে মনে পড়ে কে এটা বানিয়েছেন আর কেন। আর সামনের এক ঘণ্টা এমনভাবে কাটানো, যেন এর হিসাব একদিন চাওয়া হবে।"
          }
        ]
      }
    ]
  },
  "44:43": {
    "sections": [
      {
        "h": {
          "en": "Three Words, Then a Pause",
          "bn": "তিন শব্দ, তারপর বিরতি"
        },
        "p": [
          {
            "en": "Inna shajarata al-zaqqum: indeed, the tree of zaqqum. The verse is three words long, and it is not yet a sentence. Inna opens a statement and shajarata al-zaqqum is its subject; the predicate arrives only in 44:44, ta'amu al-athim, is the food of the sinful. The Muyassar treats the two verses as one unit, and Ibn Kathir quotes them together before saying anything. This article reads the subject and lets the completion stand beside it, because without it the tree has a name but no purpose.",
            "bn": "ইন্না শাজারাতায যাক্কুম: নিশ্চয়ই যাক্কুম গাছ। আয়াতটি মাত্র তিনটি শব্দের, আর এখনো পুরো বাক্য হয়ে ওঠেনি। ইন্না দিয়ে কথা শুরু, শাজারাতায যাক্কুম তার উদ্দেশ্য। বিধেয় আসে পরের আয়াতে, ৪৪:৪৪-এ: তা'আমুল আসীম, পাপীর খাদ্য। মুয়াসসার দুই আয়াতকে একই সঙ্গে ব্যাখ্যা করে, ইবন কাসীরও কিছু বলার আগে দুটো একসঙ্গে উদ্ধৃত করেন। এই লেখা উদ্দেশ্য অংশটি নিয়ে, তবে পরের অংশকে পাশে রেখেই। কারণ সেটুকু ছাড়া গাছের নাম থাকে, কিন্তু তার কাজ বোঝা যায় না।"
          },
          {
            "en": "Why does the tree appear here? As-Sa'di answers from the verses just before. Once the Day of Decision has been named, the day on which Allah judges between His servants (44:40), the text turns to how they divide into two parties, one in the Garden and one in the Blaze. The tree belongs to the second, and the description of the Garden's people follows from 44:51. What the food does and what is done to the one who eats it fill 44:45 to 44:50, and those verses are left to their own place.",
            "bn": "গাছটির কথা এখানে কেন এল? সা'দী জবাব দেন ঠিক আগের আয়াতগুলো থেকে। ফয়সালার দিনের উল্লেখ হয়ে গেছে (৪৪:৪০), যেদিন আল্লাহ বান্দাদের মধ্যে মীমাংসা করবেন। এরপর কথা ঘোরে তারা কীভাবে দুই দলে ভাগ হবে সেদিকে: একটি দল জান্নাতে, আরেকটি জ্বলন্ত আগুনে। গাছটি দ্বিতীয় দলের, আর জান্নাতবাসীদের বর্ণনা আসে ৪৪:৫১ থেকে। খাবারটি পেটে গিয়ে কী করে, আর খাওয়ার পর লোকটির সঙ্গে কী করা হয়, তা আছে ৪৪:৪৫ থেকে ৪৪:৫০ পর্যন্ত। সে আয়াতগুলো তাদের নিজের জায়গার জন্য রাখা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Ta Left Open",
          "bn": "খোলা তা-এর বানান"
        },
        "p": [
          {
            "en": "Al-Qurtubi's whole comment on these three words is about a single letter. Every mention of the tree, al-shajara, in the Book of Allah, he says, is paused on with a ha, except one instance in Surat al-Dukhan: inna shajarata al-zaqqum. The written text bears him out. The Mushaf text this site uses spells the word here with an open ta, shajarat, while the same phrase in 37:62, shajaratu al-zaqqum, ends in the round ta that turns into a ha when the reciter stops on it.",
            "bn": "এই তিনটি শব্দ নিয়ে কুরতুবীর পুরো মন্তব্যটাই একটিমাত্র হরফ ঘিরে। তিনি বলেন, আল্লাহর কিতাবে গাছ অর্থে আশ-শাজারা যেখানেই এসেছে, সেখানে থামতে হয় হা দিয়ে। ব্যতিক্রম কেবল সূরা দুখানের একটি জায়গা: ইন্না শাজারাতায যাক্কুম। লিখিত পাঠও তাঁর কথার সাক্ষ্য দেয়। এই সাইটে ব্যবহৃত মুসহাফের পাঠে শব্দটি এখানে লেখা লম্বা খোলা তা দিয়ে, শাজারাত। অথচ ৩৭:৬২ আয়াতে একই বাক্যাংশ, শাজারাতুয যাক্কুম, শেষ হয়েছে গোল তা দিয়ে, যার ওপর থামলে তা হা হয়ে যায়।"
          },
          {
            "en": "Al-Qurtubi gives no reason for the exception, and none is offered here. What the note does show is how closely the words of the Qur'an were watched: a single letter's shape in one verse among thousands was recorded, taught and carried down. A reader who meets this verse in recitation hears the same tree that al-Saffat names, yet written here in its own way. The care spent on that one letter is a reminder that every word of the warning around it was weighed as well.",
            "bn": "ব্যতিক্রমটির কারণ কুরতুবী বলেননি, এখানেও কোনো কারণ বানিয়ে বলা হবে না। তবে মন্তব্যটি একটা জিনিস স্পষ্ট দেখায়: কুরআনের শব্দ কতটা যত্নে পাহারা দেওয়া হয়েছে। হাজার হাজার আয়াতের মধ্যে একটি আয়াতে একটি হরফের আকার পর্যন্ত লিখে রাখা হয়েছে, শেখানো হয়েছে, প্রজন্ম থেকে প্রজন্মে পৌঁছেছে। তিলাওয়াতে এই আয়াত যে শোনে, সে শোনে সেই গাছেরই নাম যা সূরা সাফফাতে এসেছে, অথচ এখানে তার বানান আলাদা। একটি হরফের পেছনে এত যত্ন মনে করিয়ে দেয়, চারপাশের সতর্কবাণীর প্রতিটি শব্দও এভাবেই মেপে বসানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Tree Grows",
          "bn": "গাছটি জন্মায় কোথায়"
        },
        "p": [
          {
            "en": "The commentators describe the tree by what the Qur'an has already said of it. At-Tabari calls it the tree which Allah told us grows in the root of the Blaze, which He made food for the people of the Blaze; its fruit, in the Blaze, is the food of whoever sinned against his Lord in this world. The Muyassar uses nearly the words of 37:64, innaha shajaratun takhruju fi asli al-jahim, it is a tree that comes out at the root of the Blaze, and adds that its fruit is the food.",
            "bn": "কুরআন আগে গাছটি সম্পর্কে যা বলেছে, তাফসীরকারেরা সেটা দিয়েই একে চেনান। তাবারী বলেন, এ সেই গাছ যার কথা আল্লাহ জানিয়েছেন যে তা জাহীমের তলদেশে জন্মায়, যাকে তিনি জাহীমবাসীদের খাদ্য বানিয়েছেন। জাহীমে তার ফল খাবে সে, যে দুনিয়ায় নিজের রবের বিরুদ্ধে গুনাহ করেছে। মুয়াসসার প্রায় ৩৭:৬৪ আয়াতের ভাষাই ব্যবহার করে: ইন্নাহা শাজারাতুন তাখরুজু ফী আসলিল জাহীম, এটি এমন গাছ যা জাহীমের তলদেশ থেকে বের হয়। সঙ্গে যোগ করে, তার ফলই সেই খাদ্য।"
          },
          {
            "en": "As-Sa'di gives the tree a rank rather than a description: sharr al-ashjar wa-afza'uha, the worst of trees and the most hideous. Ma'arif al-Qur'an sends the reader back to 37:64 and 37:65 for what can be known of its reality and adds nothing of its own. None of the texts consulted for this verse explains the word zaqqum or ties the tree to any plant of this world, and this article does neither. The tree belongs to the unseen. It is known by its name, its place and its use, and no further.",
            "bn": "সা'দী গাছটির বর্ণনা না দিয়ে তার মান বলে দেন: শাররুল আশজার ওয়া আফযা'উহা, সব গাছের মধ্যে নিকৃষ্টতম আর সবচেয়ে বীভৎস। মাআরিফুল কুরআন এর বাস্তবতা জানতে পাঠককে ৩৭:৬৪ ও ৩৭:৬৫ আয়াতে ফিরে যেতে বলে, নিজে কিছু যোগ করে না। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীরে যাক্কুম শব্দের ব্যাখ্যা নেই। দুনিয়ার কোনো গাছের সঙ্গে একে মেলানোও হয়নি, এ লেখাও তা করবে না। গাছটি গায়েবের জগতের। একে চেনা যায় তার নাম, তার জায়গা আর তার কাজ দিয়ে, এর বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Food It Is",
          "bn": "এ খাবার কার জন্য"
        },
        "p": [
          {
            "en": "The completing verse names the eater, al-athim, and the commentators gloss the word only as far as the sentence needs. At-Tabari explains it as dhu al-ithm, the one who carries sin, from athima, ya'thamu. Then he narrows it: in this place it means the one whose sin is disbelief in his Lord, to the exclusion of other sins. Ibn Kathir agrees on the person: the sinful in word and in deed, and he is the disbeliever. Both read the food as reserved for those who refused Allah Himself.",
            "bn": "পরের আয়াত খাদকের নাম বলে দেয়: আল-আসীম। তাফসীরকারেরা শব্দটির ব্যাখ্যা দেন ততটুকুই, যতটুকু বাক্যের দরকার। তাবারী বলেন, এর অর্থ যুল ইসম, গুনাহের বোঝা যার ঘাড়ে, শব্দটি এসেছে আসিমা ইয়া'সামু থেকে। তারপর তিনি অর্থটা সংকীর্ণ করেন: এখানে উদ্দেশ্য সেই লোক যার গুনাহ হলো রবের সঙ্গে কুফরি, অন্য গুনাহ নয়। ইবন কাসীরও একই মানুষের কথা বলেন: কথায় ও কাজে গুনাহগার, আর সে হলো কাফির। দুজনের পাঠেই এ খাবার তাদের জন্য, যারা খোদ আল্লাহকেই অস্বীকার করেছে।"
          },
          {
            "en": "Two other voices draw the line a little wider. The Muyassar speaks of a person with many sins, and adds that the greatest of sins is associating partners with Allah. As-Sa'di names those who sin by the deeds of disbelief and by acts of disobedience, setting the two side by side. The texts do not argue the point with each other, and this article does not settle it. What they share is plain: the food of this tree is never served by chance. It is matched to what a person brought.",
            "bn": "আরও দুটি ব্যাখ্যা পরিসরটা একটু বড় করে। মুয়াসসার বলে, অনেক গুনাহের মালিক, আর যোগ করে যে সবচেয়ে বড় গুনাহ আল্লাহর সঙ্গে শিরক। সা'দী বলেন, যারা কুফরির কাজে আর নাফরমানিতে গুনাহ করেছে, দুটোকে পাশাপাশি রেখে। তাফসীরগুলো এ নিয়ে পরস্পরের সঙ্গে বিতর্কে যায়নি, এ লেখাও কোনো মীমাংসা টানবে না। তবে সবার মধ্যে মিলটা স্পষ্ট। এ গাছের খাবার কাউকে আকস্মিকভাবে দেওয়া হয় না। মানুষ যা নিয়ে আসে, খাবার মেলে তারই মাপে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Learner Who Misheard",
          "bn": "ভুল শোনা এক শিক্ষার্থী"
        },
        "p": [
          {
            "en": "At-Tabari records, by two chains through al-A'mash, Ibrahim and Hammam ibn al-Harith, that Abu al-Darda was teaching a man to recite inna shajarata al-zaqqum, ta'amu al-athim. The man kept saying ta'amu al-yatim, the food of the orphan. In the fuller version, when Abu al-Darda had repeated it to him many times and saw that he did not understand, he said: say, inna shajarata al-zaqqum ta'amu al-fajir, the food of the wicked. Ibn Kathir cites the same report through Ibn Jarir.",
            "bn": "তাবারী আ'মাশ, ইবরাহীম ও হাম্মাম ইবনুল হারিসের মাধ্যমে দুটি সনদে বর্ণনা করেন: আবুদ দারদা (রাঃ) এক লোককে পড়া শেখাচ্ছিলেন, ইন্না শাজারাতায যাক্কুম, তা'আমুল আসীম। লোকটি বারবার বলছিল তা'আমুল ইয়াতীম, এতিমের খাদ্য। বিস্তারিত বর্ণনায় আছে, আবুদ দারদা (রাঃ) অনেকবার শুধরে দিলেন, তারপর যখন দেখলেন লোকটি বুঝতে পারছে না, তখন বললেন: বলো, ইন্না শাজারাতায যাক্কুম তা'আমুল ফাজির, পাপাচারীর খাদ্য। ইবন কাসীরও ইবন জারীরের সূত্রে একই ঘটনা উল্লেখ করেছেন।"
          },
          {
            "en": "Neither commentator grades the report, and neither draws from it any ruling on recitation; this article draws none either. Ibn Kathir adds one gloss after it: that is, he will have no food other than it. The man's slip would have turned a warning into a cruelty, as if the Fire fed orphans. The teacher's patience, repeating and then finding another word, kept the meaning from being lost. A single misheard word here could have reversed the verse's whole direction.",
            "bn": "দুই তাফসীরকারের কেউ বর্ণনাটির মান নির্ণয় করেননি, আর কেউ এ থেকে তিলাওয়াতের কোনো বিধানও বের করেননি। এ লেখাও তা করবে না। ইবন কাসীর এর পরে একটি ব্যাখ্যা জুড়ে দেন: অর্থাৎ, এ ছাড়া তার আর কোনো খাবার থাকবে না। লোকটির ভুলে সতর্কবাণীটা নিষ্ঠুরতায় বদলে যেত, যেন আগুন এতিমদের খাওয়ায়। শিক্ষকের ধৈর্য, বারবার বলা আর শেষে অন্য শব্দ খুঁজে নেওয়া, অর্থটাকে হারিয়ে যেতে দেয়নি। এখানে একটি ভুল শোনা শব্দ আয়াতের পুরো দিকটাই উল্টে দিতে পারত।"
          }
        ]
      },
      {
        "h": {
          "en": "If One Drop Fell Here",
          "bn": "এক ফোঁটা যদি এখানে পড়ত"
        },
        "p": [
          {
            "en": "Ibn Kathir then quotes Mujahid: if a drop of it fell upon the earth, it would ruin for the people of the earth their means of living. At-Tabari carries a close wording further back, through Mujahid to Ibn Abbas, as Ibn Abbas's own statement: if a drop of the zaqqum of Jahannam were sent down to this world, it would ruin people's livelihoods. Ibn Kathir adds that a similar report has come earlier in his work from the Prophet ﷺ himself. That report can be checked in a collection.",
            "bn": "ইবন কাসীর এরপর মুজাহিদের কথা উদ্ধৃত করেন: এর এক ফোঁটা যদি পৃথিবীতে পড়ত, তবে পৃথিবীবাসীর জীবনযাত্রা নষ্ট করে দিত। তাবারী কাছাকাছি ভাষার একটি বর্ণনা আরও পেছনে নিয়ে যান, মুজাহিদ হয়ে ইবন আব্বাস (রাঃ) পর্যন্ত, তাঁর নিজের উক্তি হিসেবে: জাহান্নামের যাক্কুমের এক ফোঁটা যদি দুনিয়ায় নামানো হতো, মানুষের জীবিকা নষ্ট হয়ে যেত। ইবন কাসীর আরও জানান, নবী ﷺ থেকেও এরকম একটি বর্ণনা তাঁর বইয়ে আগে এসেছে। সেই বর্ণনা হাদিসগ্রন্থে মিলিয়ে দেখা যায়।"
          },
          {
            "en": "At-Tirmidhi records from Ibn Abbas that the Messenger of Allah ﷺ recited, \"Have the Taqwa of Allah as His due, and do not die except as Muslims\" (3:102), and then said: \"If only a drop of Az-Zaqqum were to drip into the abode of the world, it would spoil the peoples' livelihood, so how about the person for whom it is his food?\" At-Tirmidhi grades it hasan sahih. The Prophet ﷺ spoke it after reciting 3:102, not this verse; it is Ibn Kathir who sets it beside the tree here.",
            "bn": "তিরমিযী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ তিলাওয়াত করলেন: আল্লাহকে ভয় করো যেমন তাঁকে ভয় করা উচিত, আর মুসলিম না হয়ে মৃত্যুবরণ কোরো না (৩:১০২)। তারপর বললেন: \"যাক্কুমের এক ফোঁটা যদি দুনিয়ার ঘরে টপকে পড়ত, তাহলে দুনিয়াবাসীর জীবনযাত্রা নষ্ট করে দিত। তাহলে যার খাবারই হবে এটা, তার অবস্থা কী হবে?\" তিরমিযী একে হাসান সহীহ বলেছেন। নবী ﷺ কথাটি বলেছিলেন ৩:১০২ তিলাওয়াতের পর, এ আয়াতের সঙ্গে নয়। এখানকার গাছের পাশে একে বসিয়েছেন ইবন কাসীর।"
          },
          {
            "en": "The question at its end turns the image back on the listener. A drop would be enough to spoil the living of a whole world; then what of the one whose only meal it is? The report does not describe the tree's substance and gives no detail beyond its effect. It measures the food by what a trace of it would do here, where people farm, trade and eat. The scale is meant to be felt rather than pictured, and the verse it followed was a call to taqwa.",
            "bn": "শেষের প্রশ্নটা শ্রোতার দিকেই ঘুরে আসে। এক ফোঁটাই যদি গোটা দুনিয়ার জীবনযাত্রা নষ্ট করতে যথেষ্ট হয়, তবে যার একমাত্র খাবারই এটা, তার কী হবে? বর্ণনাটি গাছের উপাদান বলে না, তার প্রভাবের বাইরে কোনো খুঁটিনাটিও দেয় না। খাবারটিকে মাপে এখানে তার সামান্য চিহ্ন কী ঘটাত তা দিয়ে, এই দুনিয়ায়, যেখানে মানুষ চাষ করে, কেনাবেচা করে, খায়। মাপটা কল্পনায় আঁকার জন্য নয়, অনুভব করার জন্য। আর যে আয়াতের পর কথাটি এসেছিল, তা ছিল তাকওয়ার ডাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Named, but Not Confined",
          "bn": "নাম এসেছে, সীমা টানা হয়নি"
        },
        "p": [
          {
            "en": "Ibn Kathir reports that more than one commentator said the sinful one here is Abu Jahl. He gives no chain or source for the identification beyond that phrase, and he qualifies it at once: there is no doubt that Abu Jahl is included in this verse, but it is not specific to him. The eater of the tree is described by what he did, in word and in deed, and so the description reaches anyone it fits in the Hereafter, not one man of Makkah alone. None of the other texts consulted here names anyone.",
            "bn": "ইবন কাসীর জানান, একাধিক তাফসীরকার বলেছেন এখানকার পাপী হলো আবু জাহল। এই কথাটুকুর বাইরে তিনি কোনো সনদ বা সূত্র দেন না, আর সঙ্গে সঙ্গেই শর্ত জুড়ে দেন: আবু জাহল যে এ আয়াতের আওতায় পড়ে তাতে সন্দেহ নেই, কিন্তু আয়াতটি শুধু তার জন্য নির্দিষ্ট নয়। গাছের খাদককে চেনানো হয়েছে তার কাজ দিয়ে, কথায় ও কর্মে। তাই আখিরাতে এ বর্ণনা যার সঙ্গে মিলবে তার কাছেই পৌঁছায়, মক্কার একজন মানুষেই থেমে থাকে না। এখানে সংগ্রহ করা অন্য কোনো তাফসীরে কারও নাম নেই।"
          },
          {
            "en": "This needs saying plainly. The verse describes the food of the Fire and the one it is for, and Ibn Kathir's remark names a historical opponent of the Prophet ﷺ as one of those included. That licenses nothing against any living person or community. It gives no one the right to point at a neighbour, a people or a faith and assign them this tree. Who ends as al-athim is known to Allah alone, and the verse is addressed first to the one reading it.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি আগুনের খাবার আর তা কার জন্য, সেটুকু বর্ণনা করে। ইবন কাসীরের মন্তব্য নবী ﷺ-এর এক ঐতিহাসিক বিরোধীকে তাদের একজন হিসেবে চিহ্নিত করে। এ থেকে জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি মেলে না। প্রতিবেশী, কোনো জাতি বা কোনো ধর্মের দিকে আঙুল তুলে তাদের জন্য এ গাছ বরাদ্দ করার অধিকার কারও নেই। কার শেষ পরিণতি আল-আসীম হিসেবে হবে, তা কেবল আল্লাহ জানেন। আর আয়াতটি প্রথমে কথা বলে যে পড়ছে, তার সঙ্গেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Told of the Meal in Advance",
          "bn": "খাবারের খবর আগেভাগেই"
        },
        "p": [
          {
            "en": "Read slowly, the verse does something to the listener before the next one arrives. It names a tree and stops. For a moment the mind holds only the name, inside a passage about the Day of Decision, and waits to hear what the tree is for. The answer, when it comes, is the most ordinary word in the language of daily life: food. What people do every day at their own tables is set beside the strangest table there is, and the distance between them is the whole warning.",
            "bn": "ধীরে পড়লে আয়াতটি পরের আয়াত আসার আগেই শ্রোতার মনে কিছু একটা ঘটায়। একটি গাছের নাম বলে, তারপর থেমে যায়। ফয়সালার দিনের আলোচনার মাঝখানে কিছুক্ষণ মনে শুধু নামটাই থাকে, আর অপেক্ষা থাকে গাছটা কীসের জন্য তা শোনার। জবাব যখন আসে, তা দৈনন্দিন জীবনের সবচেয়ে সাধারণ শব্দ: খাবার। মানুষ রোজ নিজের দস্তরখানে যা করে, তা রাখা হলো সবচেয়ে অদ্ভুত দস্তরখানের পাশে। দুইয়ের মাঝের দূরত্বটাই পুরো সতর্কবাণী।"
          },
          {
            "en": "The Qur'an tells of this meal while the listener is still eating the food of this world, and that timing is itself a mercy. Nobody arrives at that tree without having been told of it. The verses before spoke of a Day when no friend avails a friend at all, except those on whom Allah has mercy (44:41 and 44:42), and the closing names of 44:42 are al-'Aziz al-Rahim, the Mighty, the Merciful. The warning is spoken from within that mercy, not apart from it.",
            "bn": "শ্রোতা যখন এখনো দুনিয়ার খাবার খাচ্ছে, কুরআন তখনই ওই খাবারের খবর দিয়ে দিচ্ছে। এই সময়টাই একটা রহমত। ওই গাছের কাছে কেউ না জেনে পৌঁছাবে না। আগের আয়াতগুলো বলেছে এমন এক দিনের কথা, যেদিন কোনো বন্ধু বন্ধুর কোনো কাজে আসবে না, তবে আল্লাহ যার প্রতি রহম করেন সে আলাদা (৪৪:৪১ ও ৪৪:৪২)। আর ৪৪:৪২ শেষ হয়েছে দুটি নামে: আল-আযীয, আর-রহীম, মহাপরাক্রান্ত, পরম দয়ালু। সতর্কবাণীটা আসছে সেই রহমতের ভেতর থেকেই, তার বাইরে থেকে নয়।"
          },
          {
            "en": "So the question the verse leaves is not about the tree's nature, which the texts leave with Allah, but about the reader's own choices. A person is fed in the next life according to what he brought from this world, and the commentators agree that the eater of this tree arrived carrying sin, whether they define it as disbelief alone or with disobedience beside it. What a person carries is gathered slowly, meal by meal, in what he takes in, earns and gives out, and in how he answers when Allah calls him.",
            "bn": "তাই আয়াতটি যে প্রশ্ন রেখে যায়, তা গাছের স্বরূপ নিয়ে নয়। সে বিষয় তাফসীরগুলো আল্লাহর ওপর ছেড়ে দিয়েছে। প্রশ্নটা পাঠকের নিজের বেছে নেওয়া নিয়ে। দুনিয়া থেকে মানুষ যা নিয়ে যায়, আখিরাতে তাকে খাওয়ানো হয় তারই হিসাবে। তাফসীরকারেরা একমত যে এ গাছের খাদক এসেছে গুনাহের বোঝা নিয়ে, তা শুধু কুফরি হোক বা সঙ্গে নাফরমানিও থাকুক। আর মানুষের এই বোঝা জমে ধীরে ধীরে, বেলায় বেলায়: সে কী গ্রহণ করে, কী উপার্জন করে, কী বিলায়, আর আল্লাহ ডাকলে কীভাবে সাড়া দেয়।"
          },
          {
            "en": "The Prophet ﷺ, in the report at-Tirmidhi preserves, asked about the one for whom it is his food after reciting a call to taqwa and to die only in submission. That pairing is a fair way to hold this verse: not as a picture to be studied, but as a reason to turn. The tree is named so that fewer people will meet it. The reader who hears the name, feels its weight and then changes one habit has understood what the three words were for.",
            "bn": "তিরমিযীর সংরক্ষিত বর্ণনায় নবী ﷺ তাকওয়ার আর আত্মসমর্পিত অবস্থায় মৃত্যুর ডাক তিলাওয়াত করেছিলেন, তারপর প্রশ্ন তুলেছিলেন সেই লোককে নিয়ে, যার খাবারই হবে এটা। এ আয়াতকে ধরার এটাই সঙ্গত উপায়। খুঁটিয়ে দেখার কোনো ছবি হিসেবে নয়, ফিরে আসার একটা কারণ হিসেবে। গাছটির নাম বলা হয়েছে যাতে কম মানুষ এর মুখোমুখি হয়। যে পাঠক নামটা শোনে, এর ভার টের পায়, তারপর অন্তত একটি অভ্যাস বদলায়, সে-ই বুঝেছে তিনটি শব্দ কেন বলা হয়েছিল।"
          }
        ]
      }
    ]
  },
  "44:51": {
    "sections": [
      {
        "h": {
          "en": "After Seize Him, Safety",
          "bn": "ধরো-এর পরে নিরাপত্তা"
        },
        "p": [
          {
            "en": "The verses just before this are a run of commands. In 44:47 it is said of the sinner: seize him and drag him into the midst of the Blaze. In 44:48: pour over his head the torment of scalding water. In 44:49 comes the bitter word, taste, you who were the mighty and the noble, and 44:50 closes it: this is what you used to doubt. Then, with no bridge and no pause for breath, the next verse opens with inna again, and it speaks of other people entirely.",
            "bn": "এর ঠিক আগের আয়াতগুলো একের পর এক আদেশ। ৪৪:৪৭ আয়াতে পাপীকে নিয়ে বলা হয়: ওকে ধরো, টেনে নিয়ে যাও জাহান্নামের মাঝখানে। ৪৪:৪৮ আয়াতে: ঢেলে দাও তার মাথার উপর ফুটন্ত পানির শাস্তি। ৪৪:৪৯ আয়াতে আসে তিক্ত বিদ্রূপ: স্বাদ নাও, তুমি তো ছিলে ক্ষমতাশালী, সম্মানী। ৪৪:৫০ আয়াত দৃশ্যটা শেষ করে: এ-ই সেই জিনিস, যাতে তোমরা সন্দেহ করতে। তারপর কোনো সংযোগ-শব্দ ছাড়া, দম নেওয়ার বিরতি ছাড়াই, পরের আয়াত আবার ইন্না দিয়ে শুরু হয়। আর কথা বলে সম্পূর্ণ অন্য মানুষদের নিয়ে।"
          },
          {
            "en": "The commentators name the turn. Ibn Kathir writes that when Allah has mentioned the state of the wretched, He follows it with the state of the blessed, and he adds that for this reason the Qur'an is called mathani, which his English abridgement renders as oft-repeated. Al-Qurtubi puts it in his own pair of words: having mentioned the settled abode of the disbelievers and their punishment, He mentions the lodging of the believers and their bliss. As-Sa'di opens bluntly: this is the reward of the muttaqin.",
            "bn": "মোড়টা কোথায়, তাফসীরকারেরা তা বলে দেন। ইবন কাসীর লেখেন, আল্লাহ যখন হতভাগাদের অবস্থা বলেন, তার পরেই বলেন সৌভাগ্যবানদের অবস্থা। এ কারণেই কুরআনকে মাসানী বলা হয়, আর তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণ শব্দটির অর্থ করে বারবার ফিরে আসা। কুরতুবী নিজের দুটি শব্দে কথাটা বলেন: কাফিরদের ঠিকানা আর তাদের শাস্তির কথা বলার পর তিনি বলছেন মুমিনদের আবাস আর তাদের নিয়ামতের কথা। সা'দী শুরু করেন সোজাসুজি: এ হলো মুত্তাকীদের প্রতিদান।"
          },
          {
            "en": "The contrast is drawn in the verses themselves. The tree of zaqqum in 44:43 was food for the sinner; here the first thing named for the muttaqin is a place, and its quality is safety. The man of 44:47 is seized and dragged; these are simply there, in a station, settled. He was mocked as mighty and noble; they are given no title at all, only the security of where they are. The Qur'an sets the two scenes side by side so that each is read in the light of the other.",
            "bn": "বৈপরীত্যটা আয়াতগুলোর ভেতরেই আঁকা। ৪৪:৪৩ আয়াতের যাক্কুম গাছ ছিল পাপীর খাবার। আর এখানে মুত্তাকীদের জন্য প্রথম যে জিনিসের নাম এল, তা একটি জায়গা, যার গুণ হলো নিরাপত্তা। ৪৪:৪৭ আয়াতের লোকটিকে ধরে টেনে নেওয়া হয়। এরা শুধু আছে, এক অবস্থানে, স্থির হয়ে। তাকে বিদ্রূপ করে বলা হয়েছিল ক্ষমতাশালী, সম্মানী। এদের কোনো উপাধিই দেওয়া হয়নি, দেওয়া হয়েছে কেবল নিজেদের জায়গার নিরাপত্তা। কুরআন দুটি দৃশ্য পাশাপাশি রাখে, যাতে একটিকে অন্যটির আলোয় পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Words, Read Slowly",
          "bn": "পাঁচটি শব্দ, ধীরে পড়া"
        },
        "p": [
          {
            "en": "Inna al-muttaqina fi maqamin amin: indeed, the muttaqin are in a secure station. The verse is five words. Inna gives the statement its weight, as it gave weight to the sentence about the Fire a moment earlier. Al-muttaqin carries the definite article: a known group, described elsewhere and defined by the commentators below. Fi places them inside something. Maqam names where they are, and the commentators report two readings of its first vowel. Amin, the last word, tells what kind of place it is.",
            "bn": "ইন্নাল মুত্তাকীনা ফী মাকামিন আমীন: নিশ্চয়ই মুত্তাকীরা থাকবে নিরাপদ এক অবস্থানে। আয়াতটি পাঁচ শব্দের। ইন্না কথাটিকে ভার দেয়, যেমন একটু আগে আগুনের বাক্যটিকেও দিয়েছিল। আল-মুত্তাকীন শব্দে আছে নির্দিষ্টবাচক আল, অর্থাৎ পরিচিত এক দল। তাদের বর্ণনা অন্য জায়গায় এসেছে, আর তাফসীরকারদের দেওয়া সংজ্ঞা নিচে আসছে। ফী তাদের কোনো কিছুর ভেতরে রাখে। মাকাম বলে তারা কোথায়, আর এর প্রথম স্বরের দুটি পাঠ তাফসীরকারেরা বর্ণনা করেন। শেষ শব্দ আমীন বলে দেয় জায়গাটা কেমন।"
          },
          {
            "en": "That last word is worth a second look. Amin is a describing word, and here it is laid on the place, not on the people. The commentators unpack it in two directions. Al-Qurtubi keeps it on the place: a place in which a person is made secure from harms. At-Tabari moves it to the people: they are safe in that location. Ma'arif al-Qur'an renders it as a place free from fear. The place is safe, and so its people are safe; the verse needs only the single adjective to say both.",
            "bn": "শেষ শব্দটির দিকে আরেকবার তাকানো দরকার। আমীন একটি বিশেষণ, আর এখানে তা বসেছে জায়গার উপর, মানুষের উপর নয়। তাফসীরকারেরা একে দুই দিকে খুলে দেখান। কুরতুবী একে জায়গার সঙ্গেই রাখেন: এমন স্থান, যেখানে মানুষকে বিপদ-আপদ থেকে নিরাপদ রাখা হয়। তাবারী একে নিয়ে যান মানুষের দিকে: সেই জায়গায় তারা নিরাপদ। মাআরিফুল কুরআন অর্থ করে ভয়মুক্ত স্থান। জায়গা নিরাপদ, তাই তার বাসিন্দারাও নিরাপদ। দুটি কথা বলতে আয়াতের লেগেছে একটিমাত্র বিশেষণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Station Is For",
          "bn": "অবস্থানটি কাদের জন্য"
        },
        "p": [
          {
            "en": "The commentators define al-muttaqin by what such people did. At-Tabari: those who guarded themselves before Allah by performing His obedience and avoiding disobedience to Him. The Muyassar says nearly the same: those who feared Allah by obeying His commands and avoiding His prohibitions, and it adds where, in this world, against the station, which is in the Hereafter. Ibn Kathir is shortest: those who feared Allah in this world. His English abridgement renders it as those who fear Allah and are dutiful towards Him in this world.",
            "bn": "আল-মুত্তাকীনের সংজ্ঞা তাফসীরকারেরা দেন এই মানুষদের কাজ দিয়ে। তাবারী বলেন: যারা আল্লাহর আনুগত্য করে আর তাঁর নাফরমানি এড়িয়ে আল্লাহর ব্যাপারে নিজেদের সাবধানে রেখেছে। মুয়াসসার প্রায় একই কথা বলে: যারা তাঁর আদেশ মেনে আর নিষেধ এড়িয়ে আল্লাহকে ভয় করেছে। সঙ্গে বলে দেয়, কোথায় ভয় করেছে: দুনিয়ায়। অথচ অবস্থানটি আখিরাতে। ইবন কাসীরের কথা সবচেয়ে ছোট: যারা দুনিয়ায় আল্লাহকে ভয় করেছে। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণ লেখে: যারা আল্লাহকে ভয় করে আর দুনিয়ায় তাঁর প্রতি কর্তব্যনিষ্ঠ থাকে।"
          },
          {
            "en": "As-Sa'di frames it as a guarding against something: those who guarded against His displeasure and His punishment by leaving sins and doing acts of obedience. Then he draws out a consequence in a single sentence. Since displeasure and punishment were removed from them, His good pleasure and the great reward were established for them. He does not name safety himself, but set beside this verse his sentence fits it closely: what they guarded against in this world can no longer reach them in the next.",
            "bn": "সা'দী কথাটা বলেন কিছু থেকে বেঁচে থাকার ভাষায়: যারা গুনাহ ছেড়ে আর আনুগত্যের কাজ করে তাঁর অসন্তুষ্টি ও শাস্তি থেকে বেঁচে থেকেছে। তারপর এক বাক্যে তিনি ফলাফল টেনে আনেন। অসন্তুষ্টি আর শাস্তি যখন তাদের থেকে সরে গেল, তখন তাদের জন্য সাব্যস্ত হলো আল্লাহর সন্তুষ্টি আর মহা প্রতিদান। তিনি নিজে নিরাপত্তার কথা বলেননি। তবু এ আয়াতের পাশে রাখলে তাঁর বাক্যটি খুব মিলে যায়। দুনিয়ায় যা থেকে তারা বেঁচে থেকেছে, আখিরাতে তা আর তাদের নাগাল পায় না।"
          },
          {
            "en": "Read together, the definitions agree on the shape of the thing even where their wording differs. Taqwa is located in this world and in deeds: obedience done, disobedience avoided. The station is located in the next world. None of the commentaries consulted here defines the muttaqin by lineage, by title or by a feeling alone. That matters for a reader, because it means the door to this verse is an act that can be done today, not a status a person is born into.",
            "bn": "সংজ্ঞাগুলো পাশাপাশি পড়লে দেখা যায়, শব্দ আলাদা হলেও মূল কাঠামোয় তারা একমত। তাকওয়ার জায়গা দুনিয়া, আর তার প্রকাশ আমলে: আনুগত্য পালন, নাফরমানি বর্জন। অবস্থানটির জায়গা আখিরাত। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই মুত্তাকীদের সংজ্ঞা দেয়নি বংশ, উপাধি বা নিছক অনুভূতি দিয়ে। পাঠকের জন্য কথাটা জরুরি। এর মানে এ আয়াতের দরজা এমন এক কাজ, যা আজই করা যায়। জন্মসূত্রে পাওয়া কোনো মর্যাদা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Fatha or a Damma",
          "bn": "যবর, নাকি পেশ"
        },
        "p": [
          {
            "en": "At-Tabari records that the reciters differed over the word. The general body of the readers of Madinah read fi muqamin, with a damma on the mim. The general body of the readers of the two cities, Kufah and Basrah, read fi maqamin, with a fatha, in the sense he has already given and taking it to mean that they are in a secure place and location. The fatha is the reading in the Arabic text this article quotes.",
            "bn": "তাবারী জানান, শব্দটি পড়ায় কারীদের মধ্যে মতভেদ হয়েছে। মদীনার সাধারণ কারীরা পড়েছেন ফী মুকামিন, মীমে পেশ দিয়ে। আর দুই নগরী কূফা ও বসরার সাধারণ কারীরা পড়েছেন ফী মাকামিন, যবর দিয়ে। এ পাঠের অর্থ তিনি আগেই বলেছেন, আর একে বুঝেছেন এভাবে: তারা আছে এক নিরাপদ স্থানে, নিরাপদ জায়গায়। এ প্রবন্ধে যে আরবি পাঠ উদ্ধৃত, তাতে আছে যবর।"
          },
          {
            "en": "His verdict is even-handed. Both, he says, are widespread readings in the cities, both sound in meaning, so whichever of them a reciter reads, he is right. Al-Qurtubi gives the readers by name: Nafi' and Ibn 'Amir read it with the damma, and the rest with the fatha. Al-Baghawi gives them by region: the people of Madinah and of al-Sham read the damma, as a verbal noun meaning a staying; the others read the fatha, meaning a secure sitting-place.",
            "bn": "তাঁর রায় ভারসাম্যপূর্ণ। তিনি বলেন, দুটিই নগরগুলোতে প্রচলিত পাঠ, দুটিরই অর্থ সঠিক। তাই কারী এর যেটিই পড়ুন, তিনি ঠিক পড়েছেন। কুরতুবী কারীদের নাম ধরে বলেন: নাফে' আর ইবন আমির পড়েছেন পেশ দিয়ে, বাকিরা যবর দিয়ে। বাগাভী বলেন অঞ্চল ধরে: মদীনা আর শামের লোকেরা পড়েছেন পেশ দিয়ে, ক্রিয়াবাচক বিশেষ্য হিসেবে, যার অর্থ অবস্থান করা। অন্যরা পড়েছেন যবর দিয়ে, যার অর্থ নিরাপদ বসার জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing, Staying and Sitting",
          "bn": "দাঁড়ানো, থাকা, বসা"
        },
        "p": [
          {
            "en": "Al-Qurtubi then brings in the language scholars. He quotes al-Kisa'i: maqam with the fatha is the place, and muqam with the damma is the residing, and he cites a line of verse: the dwellings are effaced, their halting-place and their staying-place. He quotes al-Jawhari more fully: either form can mean a residing, and either can mean the place where a person stands. Taken from qama, yaqumu, to stand, the word has the fatha; taken from aqama, yuqimu, to stay, it has the damma.",
            "bn": "এরপর কুরতুবী ভাষাবিদদের কথা আনেন। তিনি কিসাঈর কথা উদ্ধৃত করেন: যবরের মাকাম মানে জায়গা, আর পেশের মুকাম মানে অবস্থান করা। প্রমাণ হিসেবে আনেন কবিতার একটি পঙক্তি: মুছে গেছে বসতিগুলো, তাদের থামার জায়গা আর থাকার জায়গা। জাওহারীর কথা তিনি আরও বিস্তারে আনেন: দুটি রূপের যেকোনোটির অর্থ হতে পারে অবস্থান করা, আবার দাঁড়ানোর জায়গাও। কামা-ইয়াকূমু, অর্থাৎ দাঁড়ানো থেকে নিলে যবর হয়। আকামা-ইউকীমু, অর্থাৎ থেকে যাওয়া থেকে নিলে পেশ।"
          },
          {
            "en": "Al-Jawhari gives the reason for the damma: when a verb goes beyond three letters, its noun of place takes a damma on the mim, on the pattern of four-letter verbs, as dahraja gives mudahraj. Al-Qurtubi then adds a further view under the words it is said: maqam with the fatha is the mashhad and the majlis, the place of gathering and of sitting, while muqam with the damma may be the place itself, or a verbal noun with a word understood, in a place of residing.",
            "bn": "পেশের কারণটাও জাওহারী বলেন। ক্রিয়া যখন তিনটি অক্ষর ছাড়িয়ে যায়, তখন তার স্থানবাচক বিশেষ্যের মীমে পেশ হয়, চারটি অক্ষরের ক্রিয়ার ধাঁচে, যেমন দাহরাজা থেকে মুদাহরাজ। তারপর কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি মত যোগ করেন। যবরের মাকাম হলো মাশহাদ ও মজলিস, অর্থাৎ সমাবেশের আর বসার জায়গা। আর পেশের মুকাম হতে পারে খোদ জায়গাটি, আবার হতে পারে ক্রিয়াবাচক বিশেষ্য, যার আগে একটি শব্দ উহ্য: অবস্থানের জায়গায়।"
          },
          {
            "en": "Set side by side, the two readings say complementary things, in keeping with at-Tabari's judgement that both are sound. The fatha tells where the muttaqin are: a place, a seat, a gathering of people who are safe in it. The damma tells how they are there: they reside, they stay. A reader who knows of both hears in the verse a place to be and a staying in it, and both are qualified by the same word, amin.",
            "bn": "পাশাপাশি রাখলে দুটি পাঠ পরস্পরের পরিপূরক কথা বলে, যা তাবারীর রায়ের সঙ্গে মেলে: দুটিই সঠিক। যবর বলে মুত্তাকীরা কোথায়: এক জায়গায়, এক আসনে, এমন মানুষদের সমাবেশে, যারা সেখানে নিরাপদ। পেশ বলে তারা সেখানে কীভাবে আছে: তারা বসবাস করে, থেকে যায়। যে পাঠক দুটির কথাই জানেন, তিনি আয়াতে শোনেন থাকার একটি জায়গা আর সেখানে থেকে যাওয়া। আর দুটিকেই বিশেষিত করে একই শব্দ, আমীন।"
          }
        ]
      },
      {
        "h": {
          "en": "Safe From Which Harms",
          "bn": "ঠিক কিসের থেকে নিরাপদ"
        },
        "p": [
          {
            "en": "The verse says amin and stops; it does not list what the station is secure from. The commentators fill that silence, and they do not all fill it the same way. Al-Qurtubi is briefest: a place where a person is secured from harms. The Muyassar widens it a little: secure from harms and griefs and what is like them. At-Tabari ties it to this world: safe in that place from what they used to fear in the stations of the world, from aches, illnesses, weariness and griefs.",
            "bn": "আয়াত বলে আমীন, তারপর থেমে যায়। জায়গাটা কিসের থেকে নিরাপদ, তার তালিকা দেয় না। সেই নীরবতা তাফসীরকারেরা পূরণ করেন, তবে সবাই একভাবে নয়। কুরতুবীর কথা সবচেয়ে ছোট: এমন জায়গা, যেখানে মানুষ বিপদ-আপদ থেকে নিরাপদ। মুয়াসসার একটু বড় করে: বিপদ-আপদ, দুঃখ আর এ জাতীয় সবকিছু থেকে নিরাপদ। তাবারী একে বাঁধেন দুনিয়ার সঙ্গে: দুনিয়ার অবস্থানগুলোতে তারা যা ভয় করত, যেমন ব্যথা-যন্ত্রণা, রোগব্যাধি, ক্লান্তি আর দুঃখ, সেই জায়গায় সেসব থেকে তারা নিরাপদ।"
          },
          {
            "en": "At-Tabari then cites Qatada through a chain he gives, and Qatada's gloss opens with an oath: yes, by Allah, secure from the Shaytan, from weariness and from griefs. Al-Baghawi goes in a different direction. For him the station is secure from change, which he spells out as secure from death and from being taken out of it. His concern is not pain while there but permanence: nothing will end the stay, and nobody will be moved on.",
            "bn": "এরপর তাবারী নিজের দেওয়া সনদে কাতাদার কথা আনেন। কাতাদার ব্যাখ্যা শুরু হয় শপথ দিয়ে: হ্যাঁ, আল্লাহর কসম, শয়তান থেকে, ক্লান্তি থেকে আর দুঃখ থেকে নিরাপদ। বাগাভী যান ভিন্ন দিকে। তাঁর কাছে অবস্থানটি নিরাপদ পরিবর্তন থেকে। সেটা তিনি খুলে বলেন: মৃত্যু থেকে নিরাপদ, আর সেখান থেকে বের করে দেওয়া থেকে নিরাপদ। তাঁর চিন্তা সেখানে থাকার সময়ের কষ্ট নিয়ে নয়, স্থায়িত্ব নিয়ে। থাকাটা কিছুতেই শেষ হবে না, আর কাউকে সরিয়েও দেওয়া হবে না।"
          },
          {
            "en": "Ibn Kathir gathers nearly everything into a single sentence: in the Hereafter, in the Garden, they are secure from death and from leaving, from every worry, grief, alarm, toil and weariness, from the Shaytan and his plotting, and from all other harms and calamities. Ma'arif al-Qur'an gives the principle behind the word: the best human dwelling is a dwelling secure from every kind of danger. The glosses differ in emphasis, the world's pains for at-Tabari, permanence for al-Baghawi, the Shaytan for Qatada, and they are best kept as they stand.",
            "bn": "ইবন কাসীর প্রায় সবকিছু এক বাক্যে জড়ো করেন: আখিরাতে, জান্নাতে, তারা নিরাপদ মৃত্যু থেকে আর বেরিয়ে যাওয়া থেকে। নিরাপদ সব দুশ্চিন্তা, দুঃখ, অস্থিরতা, পরিশ্রম আর ক্লান্তি থেকে। নিরাপদ শয়তান আর তার চক্রান্ত থেকে, আর বাকি সব বিপদ ও মুসিবত থেকে। মাআরিফুল কুরআন শব্দটির পেছনের মূলনীতি বলে: মানুষের সবচেয়ে ভালো আবাস সেটিই, যা সব রকমের বিপদ থেকে নিরাপদ। ব্যাখ্যাগুলোর জোর আলাদা জায়গায়। তাবারীর কাছে দুনিয়ার কষ্ট, বাগাভীর কাছে স্থায়িত্ব, কাতাদার কাছে শয়তান। সেগুলো যেমন আছে, তেমনই রাখা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hope, Not a Badge",
          "bn": "আশা, তকমা নয়"
        },
        "p": [
          {
            "en": "The verse describes two ends, as the texts describe them, and it licenses nothing against any living person or community. It does not let anyone place a neighbour, a rival or a whole people among those dragged in 44:47, and it does not let anyone pin the name muttaqin on himself or his group. The commentators define that name by deeds, obedience done and sins left, and they place its reward in the Hereafter. A believer reads this verse as a hope to work towards, not a verdict already handed down.",
            "bn": "আয়াতটি দুটি পরিণতির কথা বলে, তাফসীরগুলো যেভাবে বর্ণনা করেছে সেভাবেই। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। প্রতিবেশী, প্রতিপক্ষ বা গোটা কোনো জাতিকে ৪৪:৪৭ আয়াতের টেনে নেওয়া লোকদের দলে বসিয়ে দেওয়ার অধিকার এটি কাউকে দেয় না। আবার নিজের বা নিজের দলের গায়ে মুত্তাকী তকমা সেঁটে দেওয়ার অধিকারও দেয় না। তাফসীরকারেরা এ নামের সংজ্ঞা দেন আমল দিয়ে: আনুগত্য পালন, গুনাহ বর্জন। আর এর প্রতিদান রাখেন আখিরাতে। মুমিন এ আয়াত পড়েন এমন আশা হিসেবে, যার দিকে কাজ করে যেতে হয়। আগেই দেওয়া রায় হিসেবে নয়।"
          },
          {
            "en": "None of the commentaries consulted here attaches a hadith to this verse, so this article cites none. What the station contains is the work of the verses that follow: 44:52 names gardens and springs, and the passage runs on to 44:57, which calls it all a bounty from your Lord and the great attainment. This verse gives the frame before any of that detail arrives. Before the garden, the garment or the fruit, the first word about the muttaqin's place is that it is safe.",
            "bn": "এখানে যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি। তাই এ প্রবন্ধও কোনো হাদিস উদ্ধৃত করছে না। অবস্থানটির ভেতরে কী আছে, সে কাজ পরের আয়াতগুলোর। ৪৪:৫২ আয়াত নাম নেয় বাগান আর ঝরনার, আর বর্ণনা চলে ৪৪:৫৭ পর্যন্ত, যেখানে সবকিছুকে বলা হয় তোমার রবের অনুগ্রহ, মহা সাফল্য। সেসব খুঁটিনাটি আসার আগেই এ আয়াত কাঠামোটা দাঁড় করিয়ে দেয়। বাগান, পোশাক বা ফলের আগে মুত্তাকীদের জায়গা নিয়ে প্রথম কথা: সেটা নিরাপদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Spending Our Fear Well",
          "bn": "ভয়টা ঠিক জায়গায় খরচ"
        },
        "p": [
          {
            "en": "At-Tabari's gloss holds a quiet observation about life here. What the muttaqin are made safe from is a list of things every person fears now: aches, illness, weariness, grief. The verse does not pretend these are absent here. It promises that there is a station where they end, and Ibn Kathir and al-Baghawi add that nothing there ends: no death, no leaving. A great deal of human effort goes into guarding health, money, reputation and family, and none of these guards ever fully succeeds.",
            "bn": "তাবারীর ব্যাখ্যায় এ দুনিয়ার জীবন নিয়ে একটা চুপচাপ পর্যবেক্ষণ আছে। মুত্তাকীদের যেসব জিনিস থেকে নিরাপদ রাখা হবে, প্রত্যেক মানুষ আজই সেগুলোকে ভয় পায়: ব্যথা, অসুখ, ক্লান্তি, দুঃখ। আয়াত এমন ভান করে না যে দুনিয়ায় এসব নেই। বরং কথা দেয়, এমন এক স্থান আছে যেখানে এসব শেষ হয়ে যায়। আর ইবন কাসীর ও বাগাভী যোগ করেন, সেখানে কিছুই শেষ হয় না: মৃত্যু নেই, বেরিয়ে যাওয়াও নেই। স্বাস্থ্য, টাকা, সুনাম আর পরিবার আগলে রাখতে মানুষ কত চেষ্টা করে। অথচ সেই পাহারা কখনো পুরোপুরি সফল হয় না।"
          },
          {
            "en": "The verse redirects that effort. The commentators' definitions all turn on the same idea: the muttaqin guarded themselves before Allah by obeying Him and leaving what He forbade. That is fear too, but fear spent where it buys something lasting. A person cannot make his house secure from death, but he can leave a sin today, keep a prayer on time, pay back what he owes. As-Sa'di's line marks the exchange: those who guarded against His displeasure find His good pleasure established for them.",
            "bn": "আয়াতটি সেই চেষ্টার দিক ঘুরিয়ে দেয়। তাফসীরকারদের সংজ্ঞাগুলো সবই একই কথায় এসে মেলে: মুত্তাকীরা আল্লাহর আনুগত্য করেছে, তাঁর নিষেধ করা জিনিস ছেড়ে দিয়েছে, আর এভাবে আল্লাহর সামনে নিজেদের রক্ষা করেছে। এ-ও ভয়, তবে এ ভয় খরচ হয় এমন জায়গায়, যেখান থেকে স্থায়ী কিছু মেলে। মানুষ নিজের ঘরকে মৃত্যু থেকে নিরাপদ করতে পারে না। কিন্তু আজ একটা গুনাহ ছাড়তে পারে, সময়মতো নামাজ পড়তে পারে, যা দেনা আছে তা শোধ করতে পারে। সা'দীর কথায় এই বিনিময়টা স্পষ্ট: যারা তাঁর অসন্তুষ্টি থেকে বেঁচে থেকেছে, তাদের জন্য সাব্যস্ত হয় তাঁর সন্তুষ্টি।"
          },
          {
            "en": "So the verse asks a practical question of the reader. Where is my fear going? Into the things that cannot be kept, or into the taqwa that leads to a station no harm can reach? The sinner of the verses before was told what he used to doubt. The muttaqin are simply told where they are. Between those two verses sits the whole of a life, and the choice of which sentence will one day be spoken about it is still open while that life lasts.",
            "bn": "তাই আয়াতটি পাঠকের সামনে একটা কাজের প্রশ্ন রাখে। আমার ভয় কোথায় যাচ্ছে? যা ধরে রাখা যায় না সেসবের পেছনে, নাকি সেই তাকওয়ার পেছনে, যা এমন অবস্থানে নিয়ে যায় যেখানে কোনো বিপদ পৌঁছায় না? আগের আয়াতগুলোর পাপীকে বলা হয়েছিল, এ-ই তো সেই জিনিস যাতে তোমরা সন্দেহ করতে। মুত্তাকীদের শুধু জানানো হয়, তারা কোথায় আছে। এই দুই আয়াতের মাঝখানে পড়ে আছে একটা গোটা জীবন। একদিন সে জীবন নিয়ে কোন বাক্যটি বলা হবে, তা বেছে নেওয়ার সুযোগ জীবন থাকা পর্যন্ত খোলা।"
          }
        ]
      }
    ]
  },
  "44:58": {
    "sections": [
      {
        "h": {
          "en": "Two Verses From the End",
          "bn": "শেষের আগে দুই আয়াত"
        },
        "p": [
          {
            "en": "Surah ad-Dukhan has spent its last verses on the God-conscious: a station that is safe (44:51), gardens and springs, silk and brocade, every fruit called for in security, no death there after the first, and protection from the punishment of the Fire. Then 44:57 seals the picture: a bounty from your Lord, that is the great attainment. With only two verses left, the address changes direction. Fa-innama yassarnahu bi-lisanika la'allahum yatadhakkarun: and We have only made it easy in your tongue, that they might take heed.",
            "bn": "সূরা দুখানের শেষ দিকের আয়াতগুলো মুত্তাকীদের নিয়ে। তাদের জন্য নিরাপদ স্থান (৪৪:৫১), বাগান আর ঝরনা, পাতলা ও পুরু রেশম, নিশ্চিন্তে চেয়ে নেওয়া সব রকম ফল। প্রথম মৃত্যুর পর সেখানে আর মৃত্যু নেই, আর আগুনের শাস্তি থেকে তারা রক্ষা পাবে। তারপর ৪৪:৫৭ ছবিটা শেষ করে: তোমার রবের অনুগ্রহ হিসেবে, এটাই মহা সাফল্য। সূরার আর মাত্র দুটি আয়াত বাকি, আর ঠিক এখানে কথার দিক বদলে যায়। ফাইন্নামা ইয়াসসারনাহু বিলিসানিকা লাআল্লাহুম ইয়াতাযাক্কারূন: আমি একে তোমার ভাষায় সহজ করে দিয়েছি, যাতে তারা উপদেশ গ্রহণ করে।"
          },
          {
            "en": "The verse is five words in Arabic, and it no longer describes the Garden or the Fire. It speaks about the Book that carried those descriptions and about the one through whom it came, addressed as you; at-Tabari reads the address as Allah speaking to His Prophet Muhammad ﷺ. After it, a single verse remains before the surah closes. This article stays with the five words: what each commentator consulted for this verse says they mean, and where those readings meet and where they part.",
            "bn": "আরবিতে আয়াতটি মাত্র পাঁচ শব্দের। এখানে আর জান্নাত বা জাহান্নামের বর্ণনা নেই। কথা হচ্ছে সেই কিতাব নিয়ে, যা এসব বর্ণনা বয়ে এনেছে, আর তাঁকে নিয়ে, যাঁর মাধ্যমে কিতাবটি এসেছে। তাঁকে ডাকা হয়েছে 'তুমি' বলে। তাবারী বলেন, এখানে আল্লাহ কথা বলছেন তাঁর নবী মুহাম্মাদ ﷺ-এর সঙ্গে। এরপর সূরা শেষ হওয়ার আগে বাকি থাকে আর মাত্র একটি আয়াত। এ লেখা ওই পাঁচটি শব্দ নিয়েই: এ আয়াতের জন্য সংগৃহীত প্রতিটি তাফসীর শব্দগুলোর কী অর্থ বলে, কোথায় তাঁদের ব্যাখ্যা মেলে আর কোথায় আলাদা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pronoun Left Unnamed",
          "bn": "যার নাম নেওয়া হয়নি"
        },
        "p": [
          {
            "en": "Yassarnahu: We made it easy. The verb carries an attached pronoun, it, and nothing in the verses just before names what it is. The commentators all supply the same answer. Qatada, in the report at-Tabari gives with its chain, says: this Qur'an. Ibn Zayd, in another report in the same place, says simply: the Qur'an. As-Sa'di glosses the pronoun as the Qur'an, al-Qurtubi opens with the words yassarnahu, meaning the Qur'an, and the Muyassar and Ibn Kathir name the Qur'an outright in their paraphrase.",
            "bn": "ইয়াসসারনাহু: আমি একে সহজ করেছি। ক্রিয়ার সঙ্গে লেগে আছে 'একে' অর্থের ছোট্ট একটি শব্দ, অথচ ঠিক আগের আয়াতগুলোতে কোথাও বলা নেই সেটা কী। তাফসীরকারেরা সবাই একই উত্তর দেন। তাবারী সনদসহ কাতাদার যে বর্ণনা আনেন, তাতে আছে: এই কুরআন। একই জায়গায় ইবন যাইদের আরেক বর্ণনায় শুধু: কুরআন। সা'দীও বলেন, এখানে কুরআনের কথাই বলা হচ্ছে। কুরতুবী শুরুই করেন এই বলে যে ইয়াসসারনাহু মানে কুরআন। আর মুয়াসসার ও ইবন কাসীর নিজেদের ব্যাখ্যায় সরাসরি কুরআনের নাম নেন।"
          },
          {
            "en": "Two of them stop to name the feature itself. Al-Baghawi calls the pronoun kinaya 'an ghayri madhkur, an allusion to something not mentioned. Al-Qurtubi says that Allah closed the surah by urging people to follow the Qur'an even though it had not been mentioned. Neither of them treats this as a problem to be solved; both simply supply the referent and move on. The texts consulted here agree, then, on what was eased. Where they part is on what the easing consisted of, and on the phrase that follows, bi-lisanika.",
            "bn": "দুজন তাফসীরকার বিষয়টা আলাদা করে উল্লেখ করেন। বাগাভী বলেন, এটি কিনায়া আন গাইরি মাযকূর, অর্থাৎ যার উল্লেখ হয়নি তার দিকে ইঙ্গিত। কুরতুবী বলেন, কুরআনের উল্লেখ না থাকলেও আল্লাহ সূরাটি শেষ করেছেন কুরআন অনুসরণের তাগিদ দিয়ে। তাঁদের কেউই একে সমাধান করার মতো কোনো সমস্যা ভাবেননি। দুজনেই শুধু বলে দিয়েছেন ইঙ্গিতটা কার দিকে, তারপর এগিয়ে গেছেন। কী সহজ করা হয়েছে, সে ব্যাপারে তাই সংগৃহীত সব তাফসীর একমত। মতের পার্থক্য দেখা দেয় অন্য দুই জায়গায়: সহজ করাটা আসলে কী, আর পরের শব্দ বিলিসানিকার অর্থ কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Eased for Reading, or More",
          "bn": "সহজ শুধু পাঠে, নাকি আরও"
        },
        "p": [
          {
            "en": "At-Tabari's paraphrase makes the ease a matter of recitation. Allah, he says, is telling His Prophet Muhammad ﷺ: We have only made easy the reading of this Qur'an, which We sent down to you, by your tongue. The purpose follows at length: so that these idolaters to whom We sent you may remember its lessons and proofs, be admonished by its admonitions and reflect on its verses when you recite it to them, then turn back to obedience to their Lord and yield to the truth once it is clear to them.",
            "bn": "তাবারীর ব্যাখ্যায় সহজ করার বিষয়টা তিলাওয়াতের সঙ্গে যুক্ত। তাঁর ভাষায় আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: তোমার উপর যে কুরআন নাজিল করেছি, তোমার জিহ্বায় আমি তার পাঠ সহজ করে দিয়েছি। এরপর উদ্দেশ্যটা তিনি বিস্তারিত বলেন। যে মুশরিকদের কাছে তোমাকে পাঠিয়েছি, তুমি যখন তাদের সামনে এটা তিলাওয়াত করবে, তারা যেন এর শিক্ষা ও দলিলগুলো মনে রাখে, এর নসিহত শুনে সতর্ক হয়, এর আয়াত নিয়ে ভাবে। তারপর যেন রবের আনুগত্যে ফিরে আসে, আর সত্য স্পষ্ট হলে তা মেনে নেয়।"
          },
          {
            "en": "The report he carries from Ibn Zayd points the same way, toward the tongue that recites. Ibn Zayd says of yassarnahu: atlaqa bihi lisanahu, He set his tongue free with it. At-Tabari places the report after Qatada's without adding a comment of his own. On this reading the ease is first an ease of delivery: the words came readily to the one who was charged with reciting them to his people, and the remembering was to follow from their hearing.",
            "bn": "ইবন যাইদ থেকে তাবারী যে বর্ণনা আনেন, সেটাও একই দিকে ইশারা করে, অর্থাৎ যে জিহ্বা তিলাওয়াত করে তার দিকে। ইয়াসসারনাহু সম্পর্কে ইবন যাইদ বলেন: আতলাকা বিহী লিসানাহু, এর দ্বারা তিনি তাঁর জিহ্বা খুলে দিয়েছেন। কাতাদার বর্ণনার পরে তাবারী এটা রেখেছেন, নিজের কোনো মন্তব্য যোগ করেননি। এ পাঠ অনুযায়ী সহজ করাটা প্রথমত পৌঁছে দেওয়ার সহজতা। যাঁর দায়িত্ব ছিল নিজের লোকদের সামনে তিলাওয়াত করা, শব্দগুলো তাঁর মুখে অনায়াসে এসেছে। আর শ্রোতারা শুনে উপদেশ নেবে, সেটা আসার কথা তার পরে।"
          },
          {
            "en": "Other texts widen the ease beyond recitation. The Muyassar says: We made easy the wording of the Qur'an and its meaning in your language, O Messenger. As-Sa'di has the same pair: through your tongue its wording became easy and its meaning became easy. Al-Qurtubi places the ease on two kinds of person: We made it easy in your language, for you and for whoever reads it. Ibn Kathir gives a run of words instead: made easy, plain, clear and evident. None of the texts consulted here argues against another here; each names where it places the ease.",
            "bn": "অন্য তাফসীরগুলো সহজতাকে তিলাওয়াতের বাইরেও ছড়িয়ে দেয়। মুয়াসসার বলে: হে রাসূল, তোমার ভাষায় আমি কুরআনের শব্দ ও অর্থ দুটোই সহজ করে দিয়েছি। সা'দীর কাছেও একই জোড়া: তোমার জিহ্বার মাধ্যমে এর শব্দ সহজ হয়েছে, এর অর্থও সহজ হয়েছে। কুরতুবী সহজতাকে দুই রকম মানুষের সঙ্গে জোড়েন: তোমার ভাষায় একে সহজ করেছি, তোমার জন্য আর যে-ই এটা পড়ে তার জন্য। ইবন কাসীর কয়েকটি শব্দ পরপর বসান: সহজ, সরল, স্পষ্ট, পরিষ্কার। এখানে সংগৃহীত কোনো তাফসীর অন্যটির বিরোধিতা করে না। প্রত্যেকে শুধু বলে দেয়, সহজতাটা সে কোথায় দেখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tongue or Language",
          "bn": "জিহ্বা, নাকি ভাষা"
        },
        "p": [
          {
            "en": "The texts consulted here use the word lisan in both of its senses. Al-Baghawi glosses bi-lisanika as 'ala lisanika, on your tongue, which sits well with at-Tabari's recitation and Ibn Zayd's freed tongue. The Muyassar and al-Qurtubi both replace lisan with lugha: bi-lughatika, in your language. In their wording the point is the language the Qur'an came in rather than the act of reciting it, and al-Qurtubi's for you and for whoever reads it carries the ease past the Prophet ﷺ to every reader.",
            "bn": "সংগৃহীত তাফসীরগুলোতে লিসান শব্দটা দুই অর্থেই এসেছে। বাগাভী বিলিসানিকার ব্যাখ্যা করেন আলা লিসানিকা দিয়ে, অর্থাৎ তোমার জিহ্বায়। এটা তাবারীর তিলাওয়াতের ব্যাখ্যা আর ইবন যাইদের খুলে দেওয়া জিহ্বার সঙ্গে মিলে যায়। মুয়াসসার আর কুরতুবী দুজনেই লিসানের জায়গায় বসান লুগা: বিলুগাতিকা, তোমার ভাষায়। তাঁদের কথায় গুরুত্ব পায় কুরআন কোন ভাষায় এসেছে সেটা, পাঠ করার কাজটা নয়। আর কুরতুবী যখন বলেন 'তোমার জন্য আর যে-ই পড়ে তার জন্য', তখন সহজতা নবী ﷺ-কে ছাড়িয়ে প্রত্যেক পাঠক পর্যন্ত পৌঁছে যায়।"
          },
          {
            "en": "Ibn Kathir and as-Sa'di take the language reading and add a praise of the language itself. Ibn Kathir calls the Prophet's ﷺ tongue the most eloquent of languages, the clearest, the sweetest and the highest. As-Sa'di calls it the most eloquent of tongues without qualification, and the most majestic. In the English abridgement of Ibn Kathir the sentence becomes: in your language, which is the most eloquent, clear and beautiful of all languages. Both tie the ease to the quality of the language in which the Book was given.",
            "bn": "ইবন কাসীর আর সা'দী ভাষার অর্থটাই নেন, সঙ্গে সে ভাষার প্রশংসাও করেন। ইবন কাসীর নবী ﷺ-এর ভাষাকে বলেন সব ভাষার মধ্যে সবচেয়ে বিশুদ্ধ, সবচেয়ে স্পষ্ট, সবচেয়ে মধুর আর সবচেয়ে উঁচু। সা'দী বলেন, এটা নিঃশর্তভাবে সবচেয়ে বিশুদ্ধ ভাষা, আর সবচেয়ে মর্যাদাপূর্ণ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে বাক্যটা দাঁড়ায় এমন: তোমার ভাষায়, যা সব ভাষার মধ্যে সবচেয়ে বিশুদ্ধ, স্পষ্ট ও সুন্দর। দুজনেই সহজতাকে জুড়ে দেন সেই ভাষার গুণের সঙ্গে, যে ভাষায় কিতাবটি দেওয়া হয়েছে।"
          },
          {
            "en": "Placed side by side, the two readings answer slightly different questions. On the tongue reading of al-Baghawi, at-Tabari and Ibn Zayd, the ease concerns how the Book reached its hearers: recited readily by the Messenger sent to them. On the language reading of the Muyassar, al-Qurtubi, as-Sa'di and Ibn Kathir, it concerns what the hearers met when it reached them: wording and meaning made easy, in Ibn Kathir's words so that they might understand. No text consulted here rules the other reading out.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে দেখা যায়, তারা একটু আলাদা প্রশ্নের উত্তর দিচ্ছে। বাগাভী, তাবারী আর ইবন যাইদের জিহ্বা-কেন্দ্রিক পাঠে প্রশ্ন হলো, কিতাব শ্রোতাদের কাছে পৌঁছাল কীভাবে। উত্তর: যাঁকে তাদের কাছে পাঠানো হয়েছে, তাঁর মুখে অনায়াস তিলাওয়াতে। মুয়াসসার, কুরতুবী, সা'দী আর ইবন কাসীরের ভাষা-কেন্দ্রিক পাঠে প্রশ্ন হলো, পৌঁছানোর পর শ্রোতারা কী পেল। উত্তর: সহজ করে দেওয়া শব্দ আর অর্থ, ইবন কাসীরের ভাষায় যাতে তারা বুঝতে পারে। সংগৃহীত কোনো তাফসীর এখানে অন্য ব্যাখ্যাটাকে বাতিল করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Taking Heed Involves",
          "bn": "উপদেশ নেওয়ার ভেতরে কী আছে"
        },
        "p": [
          {
            "en": "La'allahum yatadhakkarun: that they might remember, or take heed. The commentators fill the verb with different content. Al-Baghawi gives one word: yatta'izun, they take admonition. Al-Qurtubi and the Muyassar give the same two: yatta'izun wa-yanzajirun, they take admonition and they are held back. The second word adds restraint to the first. On their reading, the remembering the verse hopes for is not only a thought that arrives but also a check on what a person had been doing before it arrived.",
            "bn": "লাআল্লাহুম ইয়াতাযাক্কারূন: যাতে তারা স্মরণ করে, উপদেশ গ্রহণ করে। তাফসীরকারেরা এ ক্রিয়ার ভেতরে ভিন্ন ভিন্ন কথা রাখেন। বাগাভী দেন একটিমাত্র শব্দ: ইয়াত্তাইযূন, তারা উপদেশ নেয়। কুরতুবী আর মুয়াসসার দেন একই দুটি শব্দ: ইয়াত্তাইযূন ওয়া ইয়ানযাজিরূন, তারা উপদেশ নেয় এবং বিরত থাকে। দ্বিতীয় শব্দটা প্রথমটার সঙ্গে সংযম যোগ করে। তাঁদের ব্যাখ্যায় আয়াত যে স্মরণ চায়, তা শুধু মনে আসা একটা ভাবনা নয়। মানুষ এতদিন যা করছিল, তাতে লাগাম টানাও এর অংশ।"
          },
          {
            "en": "Ibn Kathir's Arabic says yatafahhamun wa-ya'malun: they come to understand, and they act. The English abridgement renders the same clause as in order that they may understand and know, which keeps the understanding and loses the action. A reader of the English alone would miss that, in Ibn Kathir's Arabic, this remembering ends in deeds. As-Sa'di is the most practical of all: they remember what benefits them and do it, and what harms them and leave it.",
            "bn": "ইবন কাসীরের আরবি পাঠে আছে ইয়াতাফাহহামূন ওয়া ইয়া'মালূন: তারা বুঝবে, আর সে অনুযায়ী আমল করবে। ইংরেজি সংক্ষিপ্ত সংস্করণ একই অংশের অনুবাদ করেছে 'যাতে তারা বোঝে ও জানে'। তাতে বোঝাটা রয়ে গেছে, কিন্তু আমলটা হারিয়ে গেছে। শুধু ইংরেজি পড়লে পাঠক টেরই পাবেন না যে ইবন কাসীরের আরবিতে এই স্মরণ গিয়ে শেষ হয় কাজে। সা'দী সবচেয়ে বেশি হাতে-কলমে কথা বলেন: যা তাদের উপকার করে তা মনে রেখে করবে, আর যা ক্ষতি করে তা মনে রেখে ছেড়ে দেবে।"
          },
          {
            "en": "At-Tabari's account is the longest, a chain of steps: remember the Qur'an's lessons and proofs, be admonished by its admonitions, reflect on its verses as they are recited, turn back to obedience to their Lord, and submit to the truth once it is clear to them. In his reading, remembering begins at hearing and ends at yielding. None of the texts consulted here reduces the word to recalling something once known, and none stops at understanding without some return or change.",
            "bn": "সবচেয়ে লম্বা ব্যাখ্যা তাবারীর, ধাপে ধাপে সাজানো। কুরআনের শিক্ষা ও দলিল মনে রাখা, তার উপদেশ থেকে উপদেশ নেওয়া, তিলাওয়াতের সময় আয়াতগুলো নিয়ে ভাবা, রবের আনুগত্যে ফিরে আসা, আর সত্য স্পষ্ট হলে তার কাছে মাথা নত করা। তাঁর পাঠে স্মরণ শুরু হয় শোনা দিয়ে, শেষ হয় মেনে নেওয়ায়। সংগৃহীত কোনো তাফসীরই শব্দটাকে একসময় জানা কিছু আবার মনে পড়ার মধ্যে সীমিত রাখেনি। কোনোটিই শুধু বোঝাতেই থেমে যায়নি, প্রত্যেকটিতে কোনো না কোনো ফেরা বা বদলের কথা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Back, Looking Ahead",
          "bn": "পেছনে ফিরে, সামনে তাকিয়ে"
        },
        "p": [
          {
            "en": "Al-Qurtubi is the one consulted commentator who ties this verse to the surah's start. He says Allah closed the surah by urging people to follow the Qur'an, as He said at its opening, We sent it down on a blessed night, and as He said elsewhere, We sent it down on the Night of Decree (97:1), pointing back to his earlier discussion. That opening verse, 44:3, has its own article here. Al-Qurtubi's point for this verse is only the frame: on his reading, the surah begins and ends with the Book.",
            "bn": "সংগৃহীত তাফসীরকারদের মধ্যে কুরতুবীই একমাত্র, যিনি এ আয়াতকে সূরার শুরুর সঙ্গে জোড়েন। তিনি বলেন, আল্লাহ সূরাটি শেষ করেছেন কুরআন অনুসরণের তাগিদ দিয়ে, যেমন সূরার শুরুতে বলেছেন: আমি একে নাজিল করেছি এক বরকতময় রাতে। আর অন্যত্র বলেছেন: আমি একে নাজিল করেছি কদরের রাতে (৯৭:১)। এ নিয়ে আগে যা বলেছেন, তিনি সেদিকে ইঙ্গিত করেন। শুরুর সেই আয়াত, ৪৪:৩, নিয়ে এখানে আলাদা লেখা আছে। এ আয়াতের বেলায় কুরতুবীর কথা শুধু কাঠামো নিয়ে: তাঁর পাঠে সূরার শুরুও কিতাব দিয়ে, শেষও কিতাব দিয়ে।"
          },
          {
            "en": "He also names a parallel, introducing it with wa-naziruhu, and its like is: and We have certainly made the Qur'an easy for remembrance, so is there anyone who will remember (54:17). That verse has its own article too. Ibn Kathir looks the other way, toward what follows. Despite this clarity, he says, some people disbelieved, opposed and were obstinate, so Allah addressed His Messenger ﷺ to console him, promise him victory and warn those who belied him of ruin, in the surah's last verse, 44:59.",
            "bn": "কুরতুবী এর মতো আরেকটি আয়াতের কথাও বলেন। শুরু করেন ওয়া নাযীরুহু বলে, অর্থাৎ এর মতোই আরেকটি আয়াত: আর আমি কুরআনকে উপদেশ গ্রহণের জন্য সহজ করে দিয়েছি, অতএব উপদেশ গ্রহণকারী কেউ আছে কি (৫৪:১৭)? সে আয়াত নিয়েও এখানে আলাদা লেখা আছে। ইবন কাসীর তাকান উল্টো দিকে, পরের আয়াতের দিকে। তিনি বলেন, এত স্পষ্টতার পরও কিছু মানুষ অস্বীকার করেছে, বিরোধিতা করেছে, হঠকারিতা দেখিয়েছে। তাই সূরার শেষ আয়াত ৪৪:৫৯-এ আল্লাহ রাসূল ﷺ-কে সান্ত্বনা দিয়েছেন, বিজয়ের প্রতিশ্রুতি দিয়েছেন, আর যারা তাঁকে মিথ্যাবাদী বলেছে তাদের ধ্বংসের ব্যাপারে সতর্ক করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones Meant by They",
          "bn": "'তারা' বলতে যাদের বোঝানো"
        },
        "p": [
          {
            "en": "The verse says they and does not name them. At-Tabari does: these idolaters, al-mushrikun, to whom We sent you. Ibn Kathir, in the sentence already quoted, describes some of the people as those who disbelieved, opposed and were obstinate despite the Book's clarity. These are the commentators' descriptions of the Prophet's ﷺ first audience. The verse speaks only of what it names, and it licenses nothing against any living person or community. The same verse, on al-Qurtubi's reading, extends the ease to whoever reads.",
            "bn": "আয়াতে আছে শুধু 'তারা', কারও নাম নেই। তাবারী নাম বলেন: যে মুশরিকদের কাছে তোমাকে পাঠিয়েছি, তারা। ইবন কাসীর, যাঁর কথা একটু আগেই এসেছে, কিছু মানুষের বর্ণনা দেন এভাবে: কিতাবের এত স্পষ্টতার পরও যারা অস্বীকার করেছে, বিরোধিতা করেছে, হঠকারিতা দেখিয়েছে। এগুলো নবী ﷺ-এর প্রথম শ্রোতাদের সম্পর্কে তাফসীরকারদের বর্ণনা। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটা দেয় না। আর কুরতুবীর পাঠে এই আয়াতই সহজতাকে বাড়িয়ে দেয় যে-কোনো পাঠক পর্যন্ত।"
          },
          {
            "en": "Two silences in the sources are worth recording. Ma'arif al-Qur'an, whose passage for this group of verses was consulted, comments on 44:56 and then closes the surah without a word on this verse. No tafsir consulted here attaches a hadith to this verse either; the narrations in Ibn Kathir's passage belong to the verses on death and bounty before it. No report on an occasion of revelation was found, so the verse is read here from its place in the surah and from what its commentators say.",
            "bn": "উৎসগুলোর দুটি নীরবতার কথাও লিখে রাখা দরকার। এ আয়াতগুচ্ছের জন্য মাআরিফুল কুরআনের যে অংশ সংগ্রহ করা হয়েছে, তা ৪৪:৫৬ নিয়ে আলোচনা করে সূরা শেষ করেছে, এ আয়াত নিয়ে একটি কথাও বলেনি। সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিসও যুক্ত করেনি। ইবন কাসীরের এ অংশে যেসব বর্ণনা আছে, সেগুলো আগের আয়াতগুলোর, যেখানে মৃত্যু আর অনুগ্রহের কথা। নাজিলের প্রেক্ষাপট নিয়েও কোনো বর্ণনা পাওয়া যায়নি। তাই আয়াতটি এখানে পড়া হয়েছে সূরায় তার অবস্থান আর তাফসীরকারদের কথা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Eased, and Still Open",
          "bn": "সহজ হয়েছে, বাকিটা খোলা"
        },
        "p": [
          {
            "en": "Read with its commentators, the verse sets out two parts. One is Allah's: the easing, whether of recitation, of wording and meaning, or of the tongue that carried it. That part is stated as done, in the past tense, We made it easy. The other part is left as a purpose, introduced by la'allahum, that they might. In at-Tabari's chain the hearer still has to reflect, return and yield, and in as-Sa'di's the hearer still has to do what helps and leave what harms.",
            "bn": "তাফসীরকারদের সঙ্গে মিলিয়ে পড়লে আয়াতে দুটি ভাগ চোখে পড়ে। একটা আল্লাহর: সহজ করে দেওয়া, সেটা তিলাওয়াতের হোক, শব্দ আর অর্থের হোক, কিংবা যে জিহ্বা কিতাব বয়ে এনেছে তার হোক। এ ভাগটা বলা হয়েছে সম্পন্ন কাজ হিসেবে: আমি সহজ করে দিয়েছি। অন্য ভাগটা রাখা হয়েছে উদ্দেশ্য হিসেবে, লাআল্লাহুম দিয়ে, যাতে তারা। তাবারীর ধাপগুলোতে শ্রোতাকে তখনো ভাবতে হয়, ফিরতে হয়, মেনে নিতে হয়। সা'দীর কথায় তাকে তখনো উপকারী কাজটা করতে হয়, আর ক্ষতিকর কাজটা ছাড়তে হয়।"
          },
          {
            "en": "That is where the verse meets a reader now. Almost every gloss the commentators give asks for movement: take admonition, be held back, understand and act, do and leave. Words that come easily to the tongue can still pass through a person without being taken up, and the verse places its hope not in the ease but in what follows it. Whatever has been made easy for us, the question it leaves is whether we will let it reach the place where we decide what to do.",
            "bn": "এখানেই আয়াতটি আজকের পাঠকের মুখোমুখি হয়। তাফসীরকারদের প্রায় প্রতিটি ব্যাখ্যাই কিছু একটা করতে বলে: উপদেশ নেওয়া, বিরত থাকা, বুঝে আমল করা, করা আর ছেড়ে দেওয়া। যে কথা সহজে জিহ্বায় আসে, তা-ও মানুষের ভেতর দিয়ে বেরিয়ে যেতে পারে, কোথাও দাগ না কেটে। তাই আয়াতের আশা সহজতায় নয়, সহজতার পরে যা আসে তাতে। আমাদের জন্য যা-ই সহজ করা হয়ে থাকুক, প্রশ্নটা থেকে যায়: যেখানে আমরা ঠিক করি কী করব, সেই জায়গা পর্যন্ত কি তাকে পৌঁছাতে দেব?"
          }
        ]
      }
    ]
  }
});
