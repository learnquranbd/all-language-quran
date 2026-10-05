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
            "bn": "সূরা দুখান শুরু হয় হা-মীম দিয়ে, তারপর একটি কসম: সুস্পষ্ট কিতাবের কসম (৪৪:২)। জবাব আসে সঙ্গে সঙ্গে, ৪৪:৩ আয়াতে: ইন্না আনযালনাহু ফী লাইলাতিম মুবারাকাহ, ইন্না কুন্না মুনযিরীন। আমি একে নাযিল করেছি এক বরকতময় রাতে, আমি তো সতর্ক করেই আসছি। তাবারী আয়াতটি ঠিক এভাবেই পড়েন: আল্লাহ এই কিতাবের কসম করে বলছেন, তিনি একে এক বরকতময় রাতে নাযিল করেছেন। মুয়াসসারের ভাষায় কিতাবটি শব্দে ও অর্থে সুস্পষ্ট। সা'দী বলেন, যা কিছু খুলে বলা দরকার, তার সবকিছুই এ কিতাব খুলে বলে।"
          },
          {
            "en": "The verse has eight Arabic words in two clauses, and both begin with inna, indeed We. The first says when the Book came down; the second says why it was sent at all. The next verse, 44:4, carries on with what happens on that night: therein every wise matter is made distinct. This article stays with 44:3 itself: which night the commentators took it to be, how they read the sending down, and what they say the warning means.",
            "bn": "আরবিতে আয়াতটির শব্দ আটটি, বাক্যাংশ দুটি, আর দুটোরই শুরু ইন্না দিয়ে: নিশ্চয়ই আমি। প্রথম অংশ জানায় কিতাব কখন নেমেছে। দ্বিতীয় অংশ জানায়, কিতাব আদৌ পাঠানো হলো কেন। পরের আয়াত ৪৪:৪ সেই রাতের কথাই এগিয়ে নেয়: সে রাতে প্রতিটি প্রজ্ঞাপূর্ণ বিষয় আলাদা করে স্থির করা হয়। এ লেখা অবশ্য ৪৪:৩ আয়াতেই থাকবে। তাফসীরকারেরা রাতটিকে কোন রাত বলে বুঝেছেন, নাযিল হওয়াকে কীভাবে পড়েছেন, আর সতর্ক করার অর্থ কী বলেছেন, আলোচনা এটুকুই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Blessing Lies",
          "bn": "বরকত কোথায়"
        },
        "p": [
          {
            "en": "Mubarakah, blessed, is glossed in the fetched commentaries as abundance of good. The Muyassar, which names the night as the Night of Decree, calls it abundant in good things. As-Sa'di says it is abundant in good and in blessing. Al-Qurtubi gives a reason for the description: the night is called blessed because of the blessings, the good things and the reward that Allah sends down upon His servants in it. Each gloss describes the night by what is given in it.",
            "bn": "মুবারাকাহ, অর্থাৎ বরকতময়। হাতে থাকা তাফসীরগুলো শব্দটির ব্যাখ্যা দেয় কল্যাণের প্রাচুর্য দিয়ে। মুয়াসসার রাতটিকে ক্বদরের রাত বলে চিহ্নিত করে, আর বলে এ রাত বহু কল্যাণে ভরা। সা'দীর মতে রাতটি কল্যাণ ও বরকতে ভরপুর। কুরতুবী এ বিশেষণের কারণও বলে দেন: এ রাতে আল্লাহ তাঁর বান্দাদের উপর বরকত, কল্যাণ আর সওয়াব নাযিল করেন, তাই রাতটি বরকতময়। লক্ষ করুন, প্রতিটি ব্যাখ্যাই রাতকে চিনিয়েছে সে রাতে যা দেওয়া হয় তা দিয়ে।"
          },
          {
            "en": "As-Sa'di draws a line through the verse: the best of speech was sent down on the best of nights and days, to the best of humankind, in the language of the noble Arabs. He identifies the night as the Night of Decree, which is better than a thousand months, the wording of 97:3, whose own article treats the night's merit. Here only the order of his sentence matters. He begins with the speech, then the night, then the one who received it.",
            "bn": "সা'দী আয়াতটির ভেতর দিয়ে একটি রেখা টানেন। সর্বোত্তম কালাম নাযিল হয়েছে সর্বোত্তম রাত ও দিনে, সৃষ্টির সর্বোত্তম মানুষের উপর, সম্মানিত আরবদের ভাষায়। রাতটিকে তিনি ক্বদরের রাত বলে চিহ্নিত করেন, যা হাজার মাসের চেয়ে উত্তম। কথাটি ৯৭:৩ আয়াতের, আর রাতটির মর্যাদা নিয়ে আলোচনা সেই আয়াতের লেখায় আছে। এখানে শুধু তাঁর বাক্যের ক্রমটা দেখার মতো। তিনি শুরু করেন কালাম দিয়ে, তারপর রাত, তারপর যিনি কালামটি গ্রহণ করেছেন।"
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
            "bn": "তাবারী প্রশ্নটা খোলাখুলি সামনে আনেন: বছরের কোন রাত এটি, তা নিয়ে তাফসীরবিদদের মতভেদ হয়েছে। কেউ বলেছেন, এটি ক্বদরের রাত। তারপর তিনি তাঁদের বর্ণনাগুলো আনেন। কাতাদা থেকে দুই সূত্রে: বরকতময় রাতটি হলো ক্বদরের রাত। ইবন যায়দ থেকে: সে রাত ক্বদরের রাত। আল্লাহ এ কুরআন সে রাতে উম্মুল কিতাব থেকে নাযিল করেন, তারপর নাযিল করেন অন্যান্য রাতে ও দিনে। বাগাভীও এ মতের জন্য একই দুজনের নাম নেন, কাতাদা ও ইবন যায়দ।"
          },
          {
            "en": "Those who hold this view rest it on other verses. Ibn Kathir says Allah sent it down on a blessed night, the Night of Decree, as He says in 97:1: inna anzalnahu fi laylati al-qadr, We sent it down in the Night of Decree. That was in Ramadan, he adds, as 2:185 says: the month of Ramadan in which the Qur'an was sent down. Ma'arif al-Qur'an cites both verses and gives this as the reading of the majority of commentators, a night in the last ten of Ramadan. The Muyassar and as-Sa'di simply name it the Night of Decree.",
            "bn": "এ মতের অনুসারীরা দলিল নেন অন্য আয়াত থেকে। ইবন কাসীর বলেন, আল্লাহ একে নাযিল করেছেন এক বরকতময় রাতে, আর তা ক্বদরের রাত। যেমন তিনি ৯৭:১ আয়াতে বলেছেন: ইন্না আনযালনাহু ফী লাইলাতিল ক্বদর, আমি একে নাযিল করেছি ক্বদরের রাতে। তিনি যোগ করেন, এটা ছিল রমযানে, কারণ ২:১৮৫ আয়াত বলছে: রমযান মাস, যাতে কুরআন নাযিল হয়েছে। মাআরিফুল কুরআনও দুটি আয়াতই আনে, আর বলে এটিই অধিকাংশ তাফসীরকারের মত: রাতটি রমযানের শেষ ১০ রাতের একটি। মুয়াসসার ও সা'দী সরাসরি একে ক্বদরের রাত বলেন।"
          },
          {
            "en": "At-Tabari's first report from Qatada carries a list of dates. In it Qatada says the scrolls of Ibrahim (AS) came down on the first night of Ramadan, the Torah after six nights of it had passed, the Zabur after sixteen, the Injil after eighteen, and the Furqan after 24. That is Qatada's own statement as at-Tabari records it. Al-Qurtubi and Ma'arif al-Qur'an give a similar list as a saying of the Prophet ﷺ through Wathila, with the Zabur on the twelfth; that version could not be confirmed in a hadith collection here, so it is not relied on.",
            "bn": "কাতাদা থেকে তাবারীর প্রথম বর্ণনায় কিছু তারিখের তালিকাও আছে। তাতে কাতাদা বলেন, ইবরাহীম (আঃ)-এর সহীফা নাযিল হয় রমযানের প্রথম রাতে। তাওরাত নাযিল হয় রমযানের ৬ রাত পার হওয়ার পর, যাবূর ১৬ রাত পর, ইনজীল ১৮ রাত পর, আর ফুরকান ২৪ রাত পর। এটা কাতাদার নিজের কথা, তাবারী যেমন লিপিবদ্ধ করেছেন। কুরতুবী ও মাআরিফুল কুরআন প্রায় একই তালিকা আনেন ওয়াসিলা (রাঃ)-এর সূত্রে নবী ﷺ-এর বাণী হিসেবে, সেখানে যাবূরের তারিখ ১২। সেই বর্ণনা কোনো হাদীস গ্রন্থে এখানে যাচাই করা যায়নি, তাই তার উপর নির্ভর করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night in Mid-Sha'ban",
          "bn": "মধ্য-শাবানের রাতের মত"
        },
        "p": [
          {
            "en": "The second view places the night in Sha'ban. At-Tabari reports it without names: others said, rather, it is the night of the middle of Sha'ban. Al-Baghawi likewise gives it to others. Ibn Kathir names its source as reported from Ikrimah, and al-Qurtubi states it as Ikrimah's: the blessed night here is the night of the middle of Sha'ban. Ma'arif al-Qur'an says some scholars of tafsir, like Ikrimah, took it as laylat al-bara'ah, the night of immunity, the fifteenth night of Sha'ban.",
            "bn": "দ্বিতীয় মতে রাতটি শাবান মাসের। তাবারী মতটি আনেন কারও নাম ছাড়াই: অন্যরা বলেছেন, বরং এটি মধ্য-শাবানের রাত। বাগাভীও মতটিকে অন্যদের বলে উল্লেখ করেন। ইবন কাসীর এর উৎস জানান, ইকরিমা থেকে এমন বর্ণনা আছে। কুরতুবী মতটি ইকরিমার নামেই আনেন: এখানে বরকতময় রাত মানে মধ্য-শাবানের রাত। মাআরিফুল কুরআন বলে, ইকরিমার মতো কোনো কোনো তাফসীরবিদ একে লাইলাতুল বারাআত বলে বুঝেছেন, অর্থাৎ শাবানের পনেরো তারিখের রাত।"
          },
          {
            "en": "Al-Qurtubi first names the blessed night as the Night of Decree, then adds, under the words it is said, the night of mid-Sha'ban, and records four names: the blessed night, the night of bara'ah, the night of the deed (as-sakk), and the Night of Decree. Ma'arif al-Qur'an explains how the second view arose. Some versions of a tradition say that births, deaths and sustenance are decreed on the night of mid-Sha'ban, and some use the very words of 44:4, so some scholars took the blessed night to be that night.",
            "bn": "কুরতুবী প্রথমে বরকতময় রাতকে ক্বদরের রাত বলেন। তারপর 'বলা হয়' কথাটি দিয়ে মধ্য-শাবানের রাতের মত আনেন, আর চারটি নাম লিপিবদ্ধ করেন: বরকতময় রাত, বারাআতের রাত, সনদের রাত (আস-সাক্ক), আর ক্বদরের রাত। দ্বিতীয় মতটি কোথা থেকে এল, মাআরিফুল কুরআন তা ব্যাখ্যা করে। কোনো কোনো বর্ণনায় আছে, জন্ম, মৃত্যু আর রিযিক মধ্য-শাবানের রাতে নির্ধারিত হয়। কিছু বর্ণনায় আবার ৪৪:৪ আয়াতের হুবহু শব্দও এসেছে। এ কারণে কিছু আলেম বরকতময় রাত বলতে সেই রাতকেই বুঝেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Commentator's Own Verdict",
          "bn": "প্রত্যেক মুফাসসিরের নিজের রায়"
        },
        "p": [
          {
            "en": "Most of the fetched commentators state a preference, and each preference is his own. At-Tabari says the correct view is that of those who said it means the Night of Decree, because Allah has informed that it is so. Al-Qurtubi says the first view is sounder, because of His words, We sent it down in the Night of Decree. Ibn Kathir is the sharpest: whoever said it is the night of mid-Sha'ban, as is reported from Ikrimah, has gone far afield, since the text of the Qur'an places it in Ramadan.",
            "bn": "হাতে থাকা তাফসীরকারদের বেশিরভাগই নিজের পছন্দের মত জানিয়েছেন, আর প্রতিটি পছন্দ তাঁর নিজের। তাবারী বলেন, সঠিক মত তাঁদের, যাঁরা বলেছেন এখানে ক্বদরের রাত উদ্দেশ্য, কারণ আল্লাহ জানিয়ে দিয়েছেন যে ব্যাপারটা এমনই। কুরতুবীর মতে প্রথম মতটি অধিক বিশুদ্ধ, কারণ আল্লাহ বলেছেন: আমি একে নাযিল করেছি ক্বদরের রাতে। ইবন কাসীরের ভাষা সবচেয়ে কড়া। ইকরিমা থেকে যেমন বর্ণিত, কেউ যদি বলে এটি মধ্য-শাবানের রাত, তবে সে লক্ষ্য থেকে অনেক দূরে সরে গেছে, কারণ কুরআনের স্পষ্ট বক্তব্য হলো রাতটি রমযানে।"
          },
          {
            "en": "Ibn Kathir also takes up a report the second view could lean on. He cites, through al-Zuhri from Uthman ibn Muhammad ibn al-Mughira ibn al-Akhnas, that the Prophet ﷺ said life-spans are cut off from Sha'ban to Sha'ban. He grades it himself: it is a mursal report, and its like cannot be set against the texts. Ma'arif al-Qur'an repeats his judgement and adds that Qadi Abu Bakr ibn al-Arabi held that no authentic report shows sustenance, births and deaths being decreed on mid-Sha'ban.",
            "bn": "দ্বিতীয় মত যে বর্ণনার উপর ভর করতে পারত, ইবন কাসীর সেটাও আলোচনায় আনেন। যুহরী থেকে, উসমান ইবন মুহাম্মাদ ইবন মুগীরা ইবন আখনাসের সূত্রে তিনি উল্লেখ করেন, নবী ﷺ বলেছেন: শাবান থেকে শাবান পর্যন্ত আয়ু নির্ধারিত হয়। বর্ণনাটির মান তিনি নিজেই বলে দেন: এটি মুরসাল, আর এমন বর্ণনা দিয়ে স্পষ্ট নস খণ্ডন করা যায় না। মাআরিফুল কুরআন তাঁর এই রায় উদ্ধৃত করে, আর যোগ করে কাযী আবু বকর ইবনুল আরাবীর কথা: রিযিক, জন্ম ও মৃত্যু মধ্য-শাবানে নির্ধারিত হওয়ার ব্যাপারে কোনো সহীহ বর্ণনা নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an also records a way of holding both. It notes that Ruh al-Ma'ani cites, without a chain, a report from Ibn Abbas (RA) that sustenance, life and death are determined on mid-Sha'ban and handed to the angels on the Night of Decree. If that is confirmed, it says, the two readings can be reconciled; otherwise the Qur'an's words point to the Night of Decree. It treats the merit of mid-Sha'ban as a separate issue: the traditions are weak and Ibn al-Arabi denied any merit, yet taken together they may gain strength, and many great scholars accepted them for meritorious deeds.",
            "bn": "মাআরিফুল কুরআন দুই মত মেলানোর একটি পথের কথাও লিখে রাখে। রূহুল মাআনী সনদ ছাড়া ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনে: রিযিক, জীবন ও মৃত্যু মধ্য-শাবানের রাতে নির্ধারিত হয়, আর ক্বদরের রাতে তা ফেরেশতাদের হাতে তুলে দেওয়া হয়। মাআরিফুল কুরআন বলে, এ বর্ণনা প্রমাণিত হলে দুই মত মিলে যায়। না হলে কুরআনের শব্দ ক্বদরের রাতের দিকেই ইঙ্গিত করে। মধ্য-শাবানের ফযীলতকে সে আলাদা বিষয় বলে। এ নিয়ে বর্ণনাগুলো দুর্বল, ইবনুল আরাবী কোনো ফযীলতই মানেননি। তবু সব সূত্র একসঙ্গে ধরলে সেগুলো শক্তি পেতে পারে, আর ফযীলতের আমলে বহু বড় আলেম সেগুলো গ্রহণ করেছেন।"
          },
          {
            "en": "Two things remain for a careful reader. None of the fetched commentaries attaches a sound hadith to 44:3 that names the night. And the preferences above belong to those who stated them: at-Tabari, al-Qurtubi, Ibn Kathir and Ma'arif al-Qur'an each judged the night to be the Night of Decree, while Ikrimah, as they report him, and the unnamed others held the night of mid-Sha'ban. This article records the disagreement and its reasons as the texts give them, and leaves the weighing with its holders.",
            "bn": "মনোযোগী পাঠকের জন্য দুটি কথা থেকে যায়। হাতে থাকা কোনো তাফসীরই ৪৪:৩ আয়াতের সঙ্গে এমন কোনো সহীহ হাদীস জুড়ে দেয়নি, যা রাতটির নাম বলে দেয়। আর ওপরের পছন্দগুলো যাঁরা বলেছেন, তাঁদেরই। তাবারী, কুরতুবী, ইবন কাসীর ও মাআরিফুল কুরআন প্রত্যেকে রাতটিকে ক্বদরের রাত বলে রায় দিয়েছেন। অন্যদিকে তাঁদের বর্ণনামতে ইকরিমা, আর নাম না জানা অন্যরা, মধ্য-শাবানের রাতের মত পোষণ করেছেন। এ লেখা মতভেদ আর তার কারণগুলো তুলে ধরে, তাফসীরে যেমন আছে। কোন মত ভারী, সে বিচার যাঁদের মত, তাঁদের কাছেই থাকুক।"
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
            "bn": "দ্বিতীয় প্রশ্ন হলো, এখানে আনযালনাহু, আমি একে নাযিল করেছি, কথাটির মানে কী। কুরআন তো নবী ﷺ-এর কাছে পৌঁছেছে বহু বছর ধরে। কুরতুবী তিনটি ব্যাখ্যা আনেন, প্রতিটিই 'বলা হয়' দিয়ে। এক, পুরো কুরআন এ রাতে নিকটতম আসমানে নাযিল হয়, তারপর প্রয়োজন ও ঘটনা অনুযায়ী অন্যান্য দিনে অল্প অল্প করে নামে। কুরতুবীর শব্দ নাজমান নাজমান। দুই, প্রতি ক্বদরের রাতে নামত সে বছরের বাকি সময়ে যা নাযিল হওয়ার কথা। তিন, এ রাতেই নাযিলের সূচনা হয়।"
          },
          {
            "en": "Al-Qurtubi then gives the first reading in the names of Qatada and Ibn Zayd: Allah sent the whole Qur'an down on the Night of Decree from the Mother of the Book to the House of Honour, Bayt al-Izzah, in the lowest heaven, then sent it down to His Prophet ﷺ in nights and days over 23 years. Al-Baghawi gives the same two names and the same descent from the Mother of the Book, with Jibril bringing it down in portions over twenty years. The two figures differ in the texts as fetched, and both are reported as they stand.",
            "bn": "এরপর কুরতুবী প্রথম ব্যাখ্যাটি আনেন কাতাদা ও ইবন যায়দের নামে। আল্লাহ পুরো কুরআন ক্বদরের রাতে উম্মুল কিতাব থেকে নিকটতম আসমানের বাইতুল ইযযায় নাযিল করেন। তারপর ২৩ বছর ধরে রাতে ও দিনে তা নাযিল করেন তাঁর নবী ﷺ-এর উপর। বাগাভীও একই দুজনের নাম নেন, উম্মুল কিতাব থেকে নিকটতম আসমানে নামার কথাও বলেন। তবে তাঁর বর্ণনায় জিবরীল কুরআন নিয়ে আসেন অল্প অল্প করে ২০ বছরে। হাতে থাকা পাঠে দুই সংখ্যা আলাদা, তাই দুটোই যেমন আছে তেমন রাখা হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the descent of the whole as the meaning of the statement that the Qur'an came down on the Night of Decree: in its entirety, from the Preserved Tablet to the lowest heaven, in one night of Ramadan, and then to the Prophet ﷺ gradually over 23 years. Through al-Qurtubi it also reports the view of some scholars that each year's portion was sent down on that year's Night of Decree. Al-Qurtubi himself lists his three readings and states no preference among them.",
            "bn": "মাআরিফুল কুরআনের মতে কুরআন ক্বদরের রাতে নাযিল হওয়ার অর্থ পুরো কুরআন একসঙ্গে নামা। রমযানের একটি রাতে গোটা কুরআন লাওহে মাহফুয থেকে নিকটতম আসমানে নেমে আসে, তারপর ২৩ বছরে ধীরে ধীরে নবী ﷺ-এর কাছে পৌঁছায়। কুরতুবীর বরাতে সে কিছু আলেমের মতও আনে: প্রতি বছরের অংশটুকু সে বছরের ক্বদরের রাতে নাযিল হতো। কুরতুবী নিজে তাঁর তিনটি ব্যাখ্যা পাশাপাশি রেখেছেন, কোনোটিকে অন্যটির উপর প্রাধান্য দেননি।"
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
            "bn": "দ্বিতীয় বাক্যাংশ, ইন্না কুন্না মুনযিরীন, উদ্দেশ্যটা বলে দেয়। ইবন কাসীরের ব্যাখ্যায় এর অর্থ: শরীয়তের মাধ্যমে মানুষকে জানিয়ে দেওয়া, কীসে তাদের উপকার আর কীসে ক্ষতি, যাতে বান্দাদের বিরুদ্ধে আল্লাহর হুজ্জত প্রতিষ্ঠিত হয়। মুয়াসসারের কথাও কাছাকাছি। রাসূল পাঠিয়ে ও কিতাব নাযিল করে মানুষকে উপকার-ক্ষতি সম্পর্কে সতর্ক করা, যাতে আল্লাহর হুজ্জত কায়েম হয়। তাবারীর পাঠে সতর্কবাণীটা এমন: বরকতময় রাতে নাযিল হওয়া এ কিতাবের মাধ্যমে জানিয়ে দেওয়া যে, যে কুফরি করে আর তাওহীদের দিকে ফেরে না, তার উপর আমার শাস্তি নেমে আসবে।"
          },
          {
            "en": "As-Sa'di says the Book was sent down to warn by it a people whom ignorance had covered and wretchedness had overcome, so that they would take light from it, follow its guidance, and gain the good of this world and the next. On his reading the warning's aim is rescue. The verse, and his description, speak of what the text speaks of and license nothing against any living person or community. The Muyassar's mention of messengers and books also places this Book in a line of warnings sent before it.",
            "bn": "সা'দী বলেন, কিতাবটি নাযিল হয়েছে এমন এক জাতিকে সতর্ক করতে, অজ্ঞতা যাদের ঢেকে ফেলেছিল আর দুর্ভাগ্য যাদের উপর চেপে বসেছিল। উদ্দেশ্য, তারা যেন এর আলো থেকে আলো নেয়, এর হেদায়াত অনুসরণ করে, আর দুনিয়া ও আখিরাতের কল্যাণ পায়। তাঁর পাঠে সতর্ক করার লক্ষ্য তাই উদ্ধার করা। আয়াতটি আর সা'দীর বর্ণনা কেবল সেটুকুই বলে, যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এখান থেকে কোনো অনুমতি মেলে না। মুয়াসসার রাসূল ও কিতাবের কথা বহুবচনে বলে, তাতে এ কিতাব আগের সতর্কবাণীগুলোর ধারাতেই এসে দাঁড়ায়।"
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
            "bn": "যে আয়াতের রাত নিয়ে মতভেদ, তা থেকে পাঠক কী নেবেন? প্রথমত, আয়াতের মূল দাবি এ মতভেদের উপর নির্ভর করে না। রাতটি যে রাতই হোক, আল্লাহ সে রাতে কিতাব নাযিল করেছেন আর রাতটিকে বরকতময় বলেছেন। দ্বিতীয়ত, মতভেদটাই এক পদ্ধতির শিক্ষা। তাবারী শুরুতে জানান যে তাফসীরবিদদের মতভেদ আছে, বর্ণনাগুলো সাজিয়ে দেন, তারপরই কেবল নিজের পছন্দ বলেন, দুটি জিনিস আলাদা রেখে। পাঠকও কোনো আলেমের পছন্দকে তাঁর পছন্দ হিসেবেই নিতে পারেন, আর সঙ্গে অন্য মতটি এবং কারা সে মত পোষণ করতেন, তাও জেনে রাখতে পারেন।"
          },
          {
            "en": "The clause on warning turns the verse toward the reader. On Ibn Kathir's and the Muyassar's reading, the warning is knowledge of what benefits and what harms, given so that Allah's proof stands. The night on which the Book came down has passed; the Book itself stays open. Reading it with that warning in view, and acting on what it says helps and harms, is the part of this verse that belongs to every night of the year.",
            "bn": "সতর্ক করার বাক্যাংশটি আয়াতকে পাঠকের দিকে ঘুরিয়ে দেয়। ইবন কাসীর ও মুয়াসসারের পাঠে এ সতর্কবাণী হলো উপকার আর ক্ষতির জ্ঞান, দেওয়া হয়েছে যাতে আল্লাহর হুজ্জত কায়েম থাকে। যে রাতে কিতাব নেমেছিল, সে রাত পেরিয়ে গেছে। কিন্তু কিতাবটি আজও খোলা। সতর্কবাণী মাথায় রেখে কিতাবটি পড়া, আর কীসে উপকার কীসে ক্ষতি সে কথা মেনে চলা, এ আয়াতের এই অংশটুকু বছরের প্রতিটি রাতের।"
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
          "bn": "কাদের জবাব দেওয়া হচ্ছে"
        },
        "p": [
          {
            "en": "The verse is an answer, and the people it answers are quoted just above it. In 44:35 they say there is nothing but our first death and we will not be resurrected, and in 44:36 they demand: then bring back our forefathers, if you are truthful. 44:37 asks whether they are better than the people of Tubba' and those before them, who were destroyed.",
            "bn": "আয়াতটি একটি জবাব, আর যাদের জবাব দেওয়া হচ্ছে তাদের কথা ঠিক উপরেই উদ্ধৃত। 44:35 আয়াতে তারা বলে, আমাদের প্রথম মৃত্যুর পর আর কিছু নেই এবং আমরা পুনরুত্থিত হব না; আর 44:36 আয়াতে তারা দাবি করে: তবে আমাদের পূর্বপুরুষদের ফিরিয়ে আনো, যদি তোমরা সত্যবাদী হও। 44:37 প্রশ্ন করে, তারা কি তুব্বা'র সম্প্রদায় ও তাদের পূর্ববর্তীদের চেয়ে ভালো, যাদের ধ্বংস করা হয়েছিল।"
          },
          {
            "en": "Only then comes the denial that creation was play. So this is not a general meditation on the meaning of life. It is placed as evidence against a specific claim: that death is the end of the file. The reply does not argue about bodies and bones. It argues from the character of the Maker, and lets the conclusion about resurrection follow from that.",
            "bn": "এরপরই আসে এই অস্বীকৃতি যে সৃষ্টি খেলার জন্য ছিল। অর্থাৎ এটি জীবনের অর্থ নিয়ে সাধারণ কোনো ভাবনা নয়। এটি রাখা হয়েছে একটি নির্দিষ্ট দাবির বিরুদ্ধে প্রমাণ হিসেবে: মৃত্যুই ফাইলের শেষ। জবাবটি হাড় ও দেহ নিয়ে তর্কে যায় না। তা যুক্তি টানে স্রষ্টার স্বভাব থেকে, আর পুনরুত্থানের সিদ্ধান্তটিকে সেখান থেকেই বেরিয়ে আসতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Describes the Maker",
          "bn": "শব্দটি স্রষ্টাকেই বর্ণনা করে"
        },
        "p": [
          {
            "en": "La'ibin is a plural participle in the accusative, and grammatically it describes the state of the one acting, not the nature of the thing made. The sentence is not quite We did not create these as a game; it is We did not create them being players. The denial lands on the Maker's posture. What is ruled out is an attitude, and everything else follows from ruling it out.",
            "bn": "'লা'ইবীন' একটি বহুবচন কর্তৃবাচক বিশেষণ, নাসব অবস্থায়; ব্যাকরণগতভাবে এটি কর্তার অবস্থা বর্ণনা করে, সৃষ্ট বস্তুর প্রকৃতি নয়। বাক্যটির অর্থ ঠিক 'আমি এগুলোকে খেলা হিসেবে সৃষ্টি করিনি' নয়; বরং 'আমি খেলোয়াড় অবস্থায় এগুলো সৃষ্টি করিনি'। অস্বীকৃতিটি গিয়ে পড়ে স্রষ্টার ভঙ্গির উপর। যা বাতিল করা হচ্ছে তা একটি মনোভাব, আর বাকি সবকিছু সেই বাতিলকরণ থেকেই আসে।"
          },
          {
            "en": "The word occurs three times in the Quran. Twice it denies play in creation, here and at 21:16; the third, 21:55, is Ibrahim's (AS) people asking whether he has come to them with truth or is one of those who jest. In every case it is the seriousness of the speaker or the actor that is at issue, never the seriousness of the object.",
            "bn": "শব্দটি কুরআনে এসেছে তিনবার। দুবার তা সৃষ্টিতে খেলার কথা অস্বীকার করে — এখানে এবং 21:16 আয়াতে; তৃতীয়টি 21:55, যেখানে ইবরাহীম (আঃ)-এর সম্প্রদায় জিজ্ঞেস করে তিনি সত্য নিয়ে এসেছেন, নাকি তিনি তামাশাকারীদের একজন। প্রতিটি ক্ষেত্রেই প্রশ্নটি বক্তা বা কর্তার গাম্ভীর্য নিয়ে, কখনোই বস্তুটির গাম্ভীর্য নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sentence Is Not Finished",
          "bn": "বাক্যটি এখানে শেষ নয়"
        },
        "p": [
          {
            "en": "A denial on its own leaves a gap, and the next verse fills it. 44:39 says: We did not create them except in truth, but most of them do not know. The structure is a negation followed by an exception, so nothing is left hanging. Haqq here carries both senses the word holds in Arabic — what is true, and what is due.",
            "bn": "কেবল অস্বীকৃতি একটি শূন্যস্থান রেখে যায়, আর পরের আয়াত তা পূরণ করে। 44:39 বলে: আমি ও দুটিকে সত্য উদ্দেশ্য ছাড়া সৃষ্টি করিনি, কিন্তু তাদের অধিকাংশই তা জানে না। কাঠামোটি হলো অস্বীকৃতির পর ব্যতিক্রম, তাই কিছুই ঝুলে থাকে না। এখানে 'হক্ব' শব্দটি আরবিতে যে দুটি অর্থ ধরে রাখে দুটিই বহন করে — যা সত্য, আর যা প্রাপ্য।"
          },
          {
            "en": "Then 44:40 draws the conclusion the deniers had demanded: indeed the Day of Judgement is the appointed time for them all. Their request was for their forefathers now; the answer is that there is a fixed miqat for everyone and it is not on their schedule. Purposeful making, truth, and a dated appointment are laid down in three consecutive verses.",
            "bn": "এরপর 44:40 সেই সিদ্ধান্তে পৌঁছে যা অস্বীকারকারীরা দাবি করছিল: নিশ্চয়ই ফয়সালার দিনটিই তাদের সবার নির্ধারিত সময়। তাদের দাবি ছিল পূর্বপুরুষদের এখনই ফিরিয়ে আনা; জবাব হলো, সবার জন্য একটি নির্ধারিত 'মীক্বাত' আছে এবং তা তাদের সময়সূচি অনুযায়ী নয়। উদ্দেশ্যপূর্ণ সৃষ্টি, সত্য, আর তারিখ-নির্ধারিত সাক্ষাৎ — পরপর তিনটি আয়াতে এই তিনটি স্থাপন করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Play Would Have Meant",
          "bn": "খেলা হলে যা দাঁড়াত"
        },
        "p": [
          {
            "en": "It is worth asking what the denied alternative would actually involve. Play is action taken for the doing of it. It needs no result outside itself, it can be abandoned halfway without loss, and nothing that happens inside it is owed to anyone afterwards. A universe made in that spirit would have no reason to be finished and no reason to be assessed.",
            "bn": "যে বিকল্পটি অস্বীকার করা হলো, তা আসলে কী দাঁড়াত — সেটি জিজ্ঞেস করা দরকার। খেলা হলো এমন কাজ যা করার জন্যই করা হয়। এর বাইরে কোনো ফল দরকার হয় না, মাঝপথে ছেড়ে দিলেও কিছু হারায় না, আর এর ভেতরে যা ঘটে তার জন্য পরে কারও কাছে কোনো দায় থাকে না। সেই মেজাজে বানানো মহাবিশ্বের শেষ করার কোনো কারণ থাকত না, হিসাব নেওয়ারও নয়।"
          },
          {
            "en": "21:17 handles the same suggestion from another side: had We intended to take a diversion, We could have taken it from what is with Us. The point is that amusement would never have required a creation at all. Bringing an entire universe into being, and then a reckoning at the end of it, is precisely what play does not need and purpose does.",
            "bn": "21:17 আয়াত একই প্রস্তাবকে অন্য দিক থেকে সামলায়: আমি যদি খেলার বস্তু বানাতে চাইতাম, তবে আমার কাছে যা আছে তা থেকেই তা নিতাম। কথাটির মর্ম হলো, কৌতুকের জন্য আদৌ কোনো সৃষ্টির দরকার হতো না। একটি গোটা মহাবিশ্বকে অস্তিত্বে আনা, আর তারপর তার শেষে একটি হিসাব — এ জিনিস খেলার প্রয়োজন হয় না, উদ্দেশ্যের হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Play Is Not Forbidden",
          "bn": "খেলা নিষিদ্ধ নয়"
        },
        "p": [
          {
            "en": "The verse is easy to misread as a verdict against enjoyment, and the Quran itself blocks that. 6:32 says the worldly life is nothing but amusement and diversion, and 57:20 expands the same description into a list. So the Book is willing to call this life a game. What it refuses to call a game is the making of it.",
            "bn": "আয়াতটিকে সহজেই আনন্দের বিরুদ্ধে রায় বলে ভুল পড়া যায়, আর কুরআন নিজেই সেই পথ আটকে দেয়। 6:32 বলে, দুনিয়ার জীবন খেল-তামাশা ছাড়া আর কিছু নয়; আর 57:20 একই বর্ণনাকে বিস্তৃত করে একটি তালিকায়। অর্থাৎ কিতাব এই জীবনকে খেলা বলতে রাজি। যাকে সে খেলা বলতে রাজি নয়, তা হলো এই জীবনের সৃষ্টিকর্ম।"
          },
          {
            "en": "The two statements fit together once the subject of each is noticed. 6:32 describes how the world behaves towards those living in it — brief, diverting, quickly over. 44:38 describes the intention behind its existence. A person can therefore hold the world lightly and hold his own life seriously, which is the exact combination the surah is arguing for.",
            "bn": "প্রতিটি বক্তব্যের কর্তা কে, তা লক্ষ করলেই দুটি মিলে যায়। 6:32 বর্ণনা করে দুনিয়া তার ভেতরে বসবাসকারীদের সঙ্গে কেমন আচরণ করে — সংক্ষিপ্ত, মনোহর, দ্রুত ফুরিয়ে যাওয়া। আর 44:38 বর্ণনা করে এর অস্তিত্বের পেছনের উদ্দেশ্য। তাই মানুষ দুনিয়াকে হালকাভাবে ধরতে পারে আর নিজের জীবনকে গুরুত্ব দিয়ে ধরতে পারে — সূরাটি ঠিক এই সমন্বয়ের পক্ষেই যুক্তি দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Inside the Claim",
          "bn": "দাবিটির ভেতরে দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "The verse speaks about the sky and the ground, but the person hearing it is standing between them. Whatever is said about the whole is said about every part, and the reader is a part. To accept the sentence about the heavens and refuse it about one's own week is to keep an exemption the verse never issued.",
            "bn": "আয়াতটি বলছে আসমান ও যমীনের কথা, কিন্তু যে শুনছে সে দাঁড়িয়ে আছে এ দুইয়ের মাঝখানে। গোটার সম্পর্কে যা বলা হয়, তা প্রতিটি অংশ সম্পর্কেও বলা হয় — আর পাঠক সেই অংশগুলোরই একটি। আসমান সম্পর্কে বাক্যটি মেনে নিয়ে নিজের সপ্তাহের ক্ষেত্রে তা অস্বীকার করা মানে এমন এক ছাড় ধরে রাখা, যা আয়াতটি কখনো দেয়নি।"
          },
          {
            "en": "In practice that shows up less in large decisions than in small ones. Time given away without noticing, work done to a standard nobody will check, an hour spent because it was easier than choosing. None of that is wickedness; it is simply the assumption 44:38 denies, applied to a small scale. The verse asks that the seriousness of the making be matched by the seriousness of the use.",
            "bn": "বাস্তবে এটি বড় সিদ্ধান্তে যতটা, ছোট সিদ্ধান্তে তার চেয়ে বেশি ধরা পড়ে। খেয়াল না করেই বিলিয়ে দেওয়া সময়, এমন মানে করা কাজ যা কেউ যাচাই করবে না, বেছে নেওয়ার চেয়ে সহজ বলেই কাটিয়ে দেওয়া একটি ঘণ্টা। এর কোনোটিই দুষ্কর্ম নয়; এগুলো কেবল সেই ধারণাটিই — যা 44:38 অস্বীকার করে — ছোট পরিসরে প্রয়োগ করা। আয়াতটি চায়, সৃষ্টির গাম্ভীর্যের সঙ্গে ব্যবহারের গাম্ভীর্য মিলুক।"
          }
        ]
      }
    ]
  }
});
