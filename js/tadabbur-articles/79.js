/**
 * Tadabbur long-form articles — surah 79.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "79:1": {
    "sections": [
      {
        "h": {
          "en": "Two Words Opening a Surah",
          "bn": "দুই শব্দে সূরার দরজা খোলা"
        },
        "p": [
          {
            "en": "Wa-n-nazi'ati gharqa: by those who pull out, drawing deep. The verse is two Arabic words, and Surah an-Nazi'at takes its name from the first of them. At-Tabari opens his comment with the question this article follows: our Lord swore by an-nazi'at, and the people of interpretation differed over them, what they are and what it is that they pull out.",
            "bn": "ওয়ান নাযিআতি গারকা: শপথ তাদের, যারা টেনে বের করে, গভীর থেকে টেনে। আয়াতটি মাত্র দুটি আরবি শব্দ, আর প্রথম শব্দ থেকেই সূরা আন-নাযিআতের নাম। তাবারী তাঁর আলোচনা শুরু করেন সেই প্রশ্ন দিয়ে, যা ধরে এই লেখা এগোবে। আমাদের রব নাযিআতের শপথ করেছেন। তাফসীরকারেরা মতভেদ করেছেন, এরা কারা, আর এরা টেনে বের করে কী।"
          },
          {
            "en": "At-Tabari, al-Qurtubi, as-Sa'di, al-Muyassar and Ma'arif al-Qur'an all name it an oath, and it does not stand alone. Verses 79:2 to 79:5 bring four more of the same build: an-nashitat, as-sabihat, as-sabiqat and al-mudabbirat. The abridged English Ibn Kathir heads the passage Swearing by Five Characteristics that the Day of Judgement will occur, and Ma'arif al-Qur'an speaks of five qualities of the angels tied to the drawing out of the soul. Each of the following oaths has its own verse; this article stays with the first.",
            "bn": "তাবারী, কুরতুবী, সা'দী, মুয়াসসার আর মাআরিফুল কুরআন সবাই একে শপথ বলেছেন। তবে শপথটি একা দাঁড়িয়ে নেই। ৭৯:২ থেকে ৭৯:৫ আয়াতে একই গড়নের আরও চারটি শপথ আসে: আন-নাশিতাত, আস-সাবিহাত, আস-সাবিকাত আর আল-মুদাব্বিরাত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে অংশটির শিরোনাম: বিচারের দিন যে আসবেই, তার উপর পাঁচটি বৈশিষ্ট্যের শপথ। মাআরিফুল কুরআন বলে ফেরেশতাদের পাঁচটি গুণের কথা, যেগুলো রূহ বের করার সঙ্গে জড়িত। পরের শপথগুলোর প্রতিটির নিজস্ব আয়াত আছে। এই লেখা প্রথমটিতেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels Who Draw Souls Out",
          "bn": "রূহ টেনে আনা ফেরেশতারা"
        },
        "p": [
          {
            "en": "The reading most commentators put first is the angels. Ibn Kathir lists Ibn Mas'ud, Ibn Abbas, Masruq, Sa'id ibn Jubayr, Abu Salih, Abu ad-Duha and as-Suddi for it: an-nazi'at are the angels, meaning when they pull out the souls of the children of Adam. At-Tabari gives the chains. Through Masruq from Abdullah: the angels. Masruq himself used to say the same. From Ibn Abbas: when his soul is pulled out. And in another chain from Ibn Abbas: it pulls out the souls.",
            "bn": "বেশিরভাগ তাফসীরকার যে ব্যাখ্যা আগে রাখেন, তা হলো ফেরেশতা। ইবন কাসীর এ মতের পক্ষে নাম দেন ইবন মাসউদ (রাঃ), ইবন আব্বাস (রাঃ), মাসরূক, সাঈদ ইবন জুবাইর, আবু সালিহ, আবুদ দুহা ও সুদ্দীর। তাঁদের কথা: নাযিআত মানে ফেরেশতারা, যখন তাঁরা আদমসন্তানদের রূহ টেনে বের করেন। তাবারী সনদসহ বর্ণনাগুলো আনেন। মাসরূকের মাধ্যমে আবদুল্লাহ থেকে: ফেরেশতারা। মাসরূক নিজেও তাই বলতেন। ইবন আব্বাস (রাঃ) থেকে: যখন তার রূহ টেনে নেওয়া হয়। আরেক সনদে ইবন আব্বাস (রাঃ) থেকে: রূহগুলো টেনে বের করে।"
          },
          {
            "en": "Whose souls, though? Here the commentators part. Al-Qurtubi defines an-nazi'at as the angels who pull out the souls of the disbelievers, and credits that to Ali; then he adds that Ibn Mas'ud, Ibn Abbas, Masruq and Mujahid said: the angels who pull out the souls of the children of Adam. Al-Baghawi says the angels who pull the disbelievers' souls from their bodies. Al-Muyassar has angels who pull out the disbelievers' souls with a severe pulling, and Ma'arif al-Qur'an speaks of the angels of punishment drawing out the souls of the infidels harshly.",
            "bn": "কিন্তু কাদের রূহ? এখানে তাফসীরকারদের পথ আলাদা হয়। কুরতুবী নাযিআতের অর্থ বলেন, যে ফেরেশতারা কাফেরদের রূহ টেনে বের করেন, আর এ মত তিনি আলী (রাঃ)-এর বলে উল্লেখ করেন। তারপর যোগ করেন, ইবন মাসউদ (রাঃ), ইবন আব্বাস (রাঃ), মাসরূক ও মুজাহিদ বলেছেন: যে ফেরেশতারা আদমসন্তানদের রূহ টেনে বের করেন। বাগাভীর ভাষায়, ফেরেশতারা কাফেরদের রূহ তাদের দেহ থেকে টেনে বের করেন। মুয়াসসার বলে, ফেরেশতারা কাফেরদের রূহ কঠোরভাবে টেনে বের করেন। মাআরিফুল কুরআন বলে আজাবের ফেরেশতাদের কথা, যাঁরা কাফেরদের রূহ কঠিনভাবে টেনে আনেন।"
          },
          {
            "en": "Ibn Kathir, citing Ibn Abbas, reads the verse together with the next: some people's souls are taken with violence, so that the soul sinks deep in the pulling, and some are taken with ease, as though they were simply untied, and that easier taking is 79:2. As-Sa'di keeps the line general and names no group: the angels who pull out the souls with force and go deep in the pulling until the soul comes out, and then it is repaid for its deeds.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর বরাতে আয়াতটিকে পরের আয়াতের সঙ্গে মিলিয়ে পড়েন। কিছু মানুষের রূহ নেওয়া হয় জোর করে, টানের মধ্যে রূহ যেন তলিয়ে যায়। আর কিছু মানুষের রূহ নেওয়া হয় সহজে, যেন বাঁধন খুলে দেওয়া হলো। এই সহজ কবজের কথাই ৭৯:২ আয়াতে। সা'দী কোনো দলের নাম না নিয়ে কথাটা সাধারণ রাখেন: যে ফেরেশতারা শক্তি দিয়ে রূহ টেনে বের করেন, রূহ বেরিয়ে না আসা পর্যন্ত টানে গভীরে যান, তারপর সে নিজের আমলের প্রতিদান পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, Stars and Drawn Bows",
          "bn": "মৃত্যু, তারা আর টানা ধনুক"
        },
        "p": [
          {
            "en": "Other early voices heard something else in the word. Mujahid said: death. At-Tabari gives it through three chains and frames it as death that pulls out the souls; Ibn Kathir and al-Baghawi report the same from him. As-Suddi, in at-Tabari, al-Qurtubi and al-Baghawi, said an-nazi'at is the soul itself when it sinks in the chest. Ibn Kathir, as seen above, lists as-Suddi among those who said angels, and al-Qurtubi lists Mujahid with them too, so the sources place both men on more than a single side.",
            "bn": "প্রথম যুগের আরও কয়েকজন শব্দটিতে অন্য কিছু শুনেছেন। মুজাহিদ বলেছেন: মৃত্যু। তাবারী কথাটি তিনটি সনদে আনেন, আর ব্যাখ্যা দেন: সেই মৃত্যু, যা রূহ টেনে বের করে। ইবন কাসীর ও বাগাভীও তাঁর থেকে একই কথা বর্ণনা করেন। তাবারী, কুরতুবী ও বাগাভীতে সুদ্দী বলেন, নাযিআত হলো খোদ রূহ, যখন তা বুকের ভেতর তলিয়ে যায়। অথচ আগেই দেখা গেছে, ইবন কাসীর সুদ্দীকে ফেরেশতা-মতের লোকদের মধ্যে গোনেন। কুরতুবীও মুজাহিদকে সেই দলে রাখেন। ফলে উৎসগুলোতে দুজনের নামই একাধিক মতের পাশে পাওয়া যায়।"
          },
          {
            "en": "Al-Hasan and Qatada said: the stars. At-Tabari explains, stars that pass from horizon to horizon, and al-Baghawi adds Ibn Kaysan and the gloss that they rise and then set. Al-Qurtubi gives the language behind it: the Arabs say naza'a ilayhi, he went off to it, and naza'at al-khayl, the horses ran. On this reading gharqa means that the stars sink and vanish, then rise from another horizon, a sense he credits to Abu Ubayda, Ibn Kaysan and al-Akhfash.",
            "bn": "হাসান ও কাতাদা বলেছেন: তারা। তাবারী ব্যাখ্যা করেন, যে তারাগুলো এক দিগন্ত থেকে আরেক দিগন্তে চলে যায়। বাগাভী এ দলে ইবন কাইসানের নাম যোগ করেন এবং বলেন, তারা উদিত হয়, তারপর অস্ত যায়। কুরতুবী এর পেছনের ভাষাটা দেখান। আরবরা বলে নাযাআ ইলাইহি, অর্থাৎ সে সেদিকে চলে গেল। আবার বলে নাযাআতিল খাইল, অর্থাৎ ঘোড়াগুলো ছুটল। এ ব্যাখ্যায় গারকা মানে তারাগুলো ডুবে যায়, অদৃশ্য হয়, তারপর অন্য দিগন্তে উদিত হয়। এ অর্থ তিনি আবু উবাইদা, ইবন কাইসান ও আখফাশের বলে উল্লেখ করেন।"
          },
          {
            "en": "Ata said: the bows, which pull with the arrow; Ibn Kathir adds, bows in battle, and al-Qurtubi and al-Baghawi add Ikrima. Some said: the raiders who shoot. Al-Qurtubi treats that as the bows reading itself, since an oath by bows means those who draw them, and he compares 100:1, wal-adiyati dabha. He also reports from Yahya ibn Sallam that they are wild animals pulling away from pasture in flight. Ibn Kathir has a last report from Ibn Abbas through Ibn Abi Hatim: an-nazi'at are the disbelievers' souls, pulled out, then released, then drowned in the Fire.",
            "bn": "আতা বলেছেন: ধনুক, যা তীর নিয়ে টান দেয়। ইবন কাসীর যোগ করেন, যুদ্ধের ধনুক। কুরতুবী ও বাগাভী এ মতে ইকরিমার নামও আনেন। কেউ কেউ বলেছেন: তীর ছোড়া যোদ্ধারা। কুরতুবীর মতে এটা ধনুকের ব্যাখ্যাই, কারণ ধনুকের শপথ মানে যারা ধনুক টানে তাদের শপথ। তুলনা হিসেবে তিনি আনেন ১০০:১, ওয়াল আদিয়াতি দাবহা। ইয়াহইয়া ইবন সাল্লাম থেকে তিনি আরও বর্ণনা করেন, এরা বুনো জন্তু, যারা চারণভূমি ছেড়ে পালায়। ইবন কাসীর ইবন আবী হাতিমের সূত্রে ইবন আব্বাস (রাঃ) থেকে শেষ একটি বর্ণনা আনেন: নাযিআত হলো কাফেরদের রূহ, যা টেনে বের করা হয়, তারপর ছেড়ে দেওয়া হয়, তারপর আগুনে ডুবিয়ে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Readings Differently",
          "bn": "মতগুলো ওজন করার দুই ধরন"
        },
        "p": [
          {
            "en": "Having listed these, Ibn Kathir gives his judgement in a short line: the sound view is the first, and most hold it. The first, for him, is the angels who pull out the souls. At-Tabari, who reports the same views with their chains, settles it another way. The correct thing to say, in his view, is that Allah swore by an-nazi'at gharqa and did not single out one puller rather than another, so every puller that draws deep falls within His oath, whether angel, death, star, bow or anything else.",
            "bn": "এসব মত উল্লেখ করার পর ইবন কাসীর ছোট্ট এক বাক্যে রায় দেন: সঠিক হলো প্রথম মতটি, আর অধিকাংশ আলেম সেটাই গ্রহণ করেছেন। তাঁর কাছে প্রথম মত মানে সেই ফেরেশতারা, যাঁরা রূহ টেনে বের করেন। তাবারী একই মতগুলো সনদসহ আনেন, কিন্তু মীমাংসা করেন অন্যভাবে। তাঁর মতে সঠিক কথা হলো, আল্লাহ নাযিআতি গারকার শপথ করেছেন, কিন্তু যা টেনে বের করে এমন কোনো একটিকে আলাদা করে বেছে নেননি। তাই গভীরে টান দেয় এমন সবকিছুই তাঁর শপথের ভেতরে পড়ে, তা ফেরেশতা হোক, মৃত্যু হোক, তারা হোক, ধনুক হোক বা অন্য কিছু।"
          },
          {
            "en": "These are two different methods. Ibn Kathir weighs the reports and sides with the majority; at-Tabari keeps the word as wide as Allah left it. Al-Qurtubi, between them, points to the thread that runs through every reading: the ighraq, the intensity in pulling, he says, holds in all the lines of interpretation. The disagreement is real and old, and this article keeps it as the commentators left it, choosing none of the readings over the others.",
            "bn": "এ দুটি আলাদা পদ্ধতি। ইবন কাসীর বর্ণনাগুলো মেপে দেখেন এবং অধিকাংশের পক্ষে থাকেন। তাবারী শব্দটিকে ততটাই প্রশস্ত রাখেন, যতটা আল্লাহ রেখেছেন। দুজনের মাঝখানে কুরতুবী এমন এক সুতা দেখান, যা সব ব্যাখ্যার ভেতর দিয়ে গেছে। তাঁর ভাষায়, ইগরাক, অর্থাৎ টানের তীব্রতা, সব ব্যাখ্যাতেই বহাল থাকে। মতভেদটা সত্যিকারের এবং পুরোনো। তাফসীরকারেরা যেভাবে রেখে গেছেন, এই লেখা সেভাবেই রাখছে। কোনো একটি ব্যাখ্যাকে অন্যগুলোর উপরে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bowstring Pulled to the Arrowhead",
          "bn": "তীরের ফলা পর্যন্ত ছিলা টানা"
        },
        "p": [
          {
            "en": "The second word, gharqa, gets its own explanation. Al-Baghawi says al-gharq is a noun set in the place of al-ighraq, so the sense is: by those who pull out, an ighraq, and the ighraq meant is going to the limit in drawing. At-Tabari gives the same picture: the meaning is ighraq, as the archer draws deep in the bow. Al-Qurtubi spells out the archer's ighraq: he reaches the farthest extent of the draw until it comes to the arrowhead. The Arabs say aghraqa fi al-qaws, he took the bow to its full draw.",
            "bn": "দ্বিতীয় শব্দ গারকা নিয়ে আলাদা ব্যাখ্যা আছে। বাগাভী বলেন, আল-গারক এমন এক বিশেষ্য, যা আল-ইগরাকের জায়গায় বসানো। তাহলে অর্থ দাঁড়ায়: শপথ তাদের, যারা টেনে বের করে পূর্ণ ইগরাকে। আর ইগরাক মানে টানার শেষ সীমা পর্যন্ত যাওয়া। তাবারীও একই ছবি দেন: অর্থ ইগরাক, যেমন তীরন্দাজ ধনুকে গভীর টান দেয়। কুরতুবী তীরন্দাজের ইগরাক খুলে বলেন। সে টানের শেষ সীমায় পৌঁছায়, ছিলা টেনে আনে তীরের ফলা পর্যন্ত। আরবরা বলে আগরাকা ফিল কাওস, অর্থাৎ সে ধনুক পুরোপুরি টেনেছে।"
          },
          {
            "en": "Al-Qurtubi widens the word further. Al-istighraq, from the same family, means taking in a thing completely, and the inner skin of an egg is called ghirqi'. His last line on the verse is that gharqa means going far in the pulling. Ma'arif al-Qur'an makes the same point in English: naz' means to draw vigorously, and gharqan is a corroborative used in the sense of ighraq, to exert oneself to the utmost in a thing, and it cites the idiom aghraqa an-nazi'u fi al-qaws, he drew the bow with great vigour.",
            "bn": "কুরতুবী শব্দটিকে আরও প্রশস্ত করেন। একই পরিবারের শব্দ আল-ইসতিগরাক মানে কোনো কিছুকে পুরোপুরি ধারণ করা। ডিমের ভেতরের পাতলা আবরণকে বলা হয় গিরকি'। আয়াত নিয়ে তাঁর শেষ কথা: গারকা মানে টানে বহু দূর যাওয়া। মাআরিফুল কুরআন ইংরেজিতে একই কথা বলে। নায মানে জোরে টানা। গারকান তাগিদসূচক শব্দ, ইগরাকের অর্থে ব্যবহৃত, যার মানে কোনো কাজে সর্বশক্তি ঢেলে দেওয়া। সেখানে প্রবাদটিও আছে: আগরাকান নাযিউ ফিল কাওস, সে প্রবল শক্তিতে ধনুক টানল।"
          },
          {
            "en": "The same letters also carry the sense of drowning, and several sources keep that picture in view. In Ibn Kathir's line from Ibn Abbas, a soul taken with violence sinks deep in its pulling. Muqatil, in al-Baghawi, says the soul comes out like a man drowning in water. Al-Qurtubi reports, with it is said, that the disbeliever sees himself at the moment of the pulling as though he were drowning. The archer's full draw and the drowning man are two images held by the one word.",
            "bn": "একই অক্ষরগুলোতে ডুবে যাওয়ার অর্থও আছে, আর কয়েকটি সূত্র সেই ছবিও সামনে রাখে। ইবন আব্বাস (রাঃ) থেকে ইবন কাসীরের বর্ণনায়, জোর করে নেওয়া রূহ টানের মধ্যে তলিয়ে যায়। বাগাভীতে মুকাতিল বলেন, রূহ বের হয় পানিতে ডুবন্ত মানুষের মতো। কুরতুবী 'বলা হয়' কথাটি দিয়ে বর্ণনা করেন, টানের মুহূর্তে কাফের নিজেকে দেখে যেন সে ডুবে যাচ্ছে। তীরন্দাজের পূর্ণ টান আর ডুবন্ত মানুষ, একই শব্দের ভেতরে দুটি ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports on the Taking",
          "bn": "রূহ কবজের বিবরণে যা আসে"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi both carry a description from Ibn Mas'ud. In al-Qurtubi's wording, he meant the disbelievers' souls, which the angel of death pulls out of their bodies from beneath every hair, from beneath the nails and the roots of the feet, a pulling like a skewer drawn out of wet wool; he sinks it back, that is, returns it into their bodies, then pulls it out again, and this is his work with the disbelievers. Al-Qurtubi adds that Ibn Abbas said the same. Al-Baghawi gives it with the angel of death and his helpers.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই ইবন মাসউদ (রাঃ) থেকে একটি বিবরণ আনেন। কুরতুবীর ভাষায়, তিনি বুঝিয়েছেন কাফেরদের রূহ। মৃত্যুর ফেরেশতা তাদের দেহ থেকে সেই রূহ টেনে বের করেন প্রতিটি চুলের নিচ থেকে, নখের নিচ থেকে, পায়ের গোড়া থেকে। টানটা এমন, যেমন ভেজা পশম থেকে লোহার শিক টেনে বের করা হয়। তারপর রূহটা আবার দেহে ফিরিয়ে দেন, তারপর আবার টেনে বের করেন। কাফেরদের সঙ্গে এটাই তাঁর কাজ। কুরতুবী যোগ করেন, ইবন আব্বাস (রাঃ)-ও একই কথা বলেছেন। বাগাভী বিবরণটি আনেন মৃত্যুর ফেরেশতা ও তাঁর সহকারীদের কথা বলে।"
          },
          {
            "en": "Muqatil, in al-Baghawi, says the angel of death and his helpers pull out the disbelievers' souls as a skewer with many prongs is pulled from soaked wool. Sa'id ibn Jubayr, in at-Tabari, says: their souls were pulled out, then drowned, then cast into the Fire; al-Qurtubi's version of the same saying adds, then burned, before the casting. Ma'arif al-Qur'an adds that the pain meant here is spiritual. Those around a dying person may not sense it, and an infidel's soul often appears to slip out easily, yet that ease is only what onlookers perceive.",
            "bn": "বাগাভীতে মুকাতিল বলেন, মৃত্যুর ফেরেশতা ও তাঁর সহকারীরা কাফেরদের রূহ টেনে বের করেন, যেমন বহু কাঁটাওয়ালা শিক ভেজা পশম থেকে টেনে আনা হয়। তাবারীতে সাঈদ ইবন জুবাইর বলেন: তাদের রূহ টেনে বের করা হলো, তারপর ডুবিয়ে দেওয়া হলো, তারপর আগুনে নিক্ষেপ করা হলো। কুরতুবীর বর্ণনায় একই উক্তিতে নিক্ষেপের আগে আছে, তারপর পোড়ানো হলো। মাআরিফুল কুরআন যোগ করে, এখানকার কষ্টটা আত্মিক। মরণাপন্ন মানুষের আশপাশের লোকেরা তা টের নাও পেতে পারে। কাফেরের রূহ অনেক সময় বাইরে থেকে সহজে বেরিয়ে যেতে দেখা যায়, অথচ সেই সহজতা কেবল দর্শকের চোখে।"
          },
          {
            "en": "Ma'arif al-Qur'an then asks who can perceive that pain, and answers that we know of it only because Allah has informed us in this verse. That is also the limit of this section. None of the commentaries consulted for the verse attaches a hadith of the Prophet ﷺ to it; the descriptions above reach us as the words of Companions and later commentators, as the tafsirs report them. This article therefore quotes no narration on the angel of death or the taking of the soul, and adds no detail to the scene beyond what these sources give.",
            "bn": "মাআরিফুল কুরআন এরপর প্রশ্ন তোলে, সেই কষ্ট কে টের পাবে? জবাবও দেয়: আমরা তা জানি শুধু এজন্য যে আল্লাহ এই আয়াতে আমাদের জানিয়েছেন। এই অংশের সীমাও এখানেই। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই আয়াতটির সঙ্গে নবী ﷺ-এর কোনো হাদিস জোড়েনি। ওপরের বিবরণগুলো আমাদের কাছে এসেছে সাহাবি ও পরবর্তী তাফসীরকারদের কথা হিসেবে, তাফসীরগুলো যেভাবে বর্ণনা করেছে। তাই মৃত্যুর ফেরেশতা বা রূহ কবজ নিয়ে এই লেখা কোনো বর্ণনা উদ্ধৃত করছে না। এই সূত্রগুলো যা দিয়েছে, তার বাইরে দৃশ্যে কোনো খুঁটিনাটিও যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Oath Affirms",
          "bn": "শপথ যে কথা পাকা করে"
        },
        "p": [
          {
            "en": "An oath is sworn for something, and here that something is not spoken. Ma'arif al-Qur'an says the subject of the oath has been left out because the context supplies it, and the purport is to affirm that the Resurrection is certain. Al-Qurtubi says the same in one clause: He swore by these things that the Resurrection is true. Al-Muyassar writes the answer out: creation will surely be raised and brought to account, on the Day described in 79:6 and the verse after it. Ma'arif adds that the Resurrection starts with each person's death, which it calls a partial Day of Doom.",
            "bn": "শপথ করা হয় কোনো কথার জন্য, আর এখানে সেই কথাটা মুখে বলা হয়নি। মাআরিফুল কুরআন বলে, শপথের বিষয়বস্তু উহ্য রাখা হয়েছে, কারণ প্রসঙ্গ থেকেই তা বোঝা যায়। উদ্দেশ্য হলো কিয়ামত যে নিশ্চিত, তা পাকা করা। কুরতুবী এক বাক্যে একই কথা বলেন: আল্লাহ এসব জিনিসের শপথ করেছেন এ কথার উপর যে কিয়ামত সত্য। মুয়াসসার জবাবটা লিখে দেয়: সৃষ্টিকে অবশ্যই ওঠানো হবে, হিসাব নেওয়া হবে, সেই দিনে, যার বর্ণনা ৭৯:৬ আর তার পরের আয়াতে। মাআরিফুল কুরআন যোগ করে, কিয়ামত শুরু হয় প্রত্যেক মানুষের মৃত্যু দিয়ে। প্রত্যেকের মৃত্যু যেন তার নিজের ছোট কিয়ামত।"
          },
          {
            "en": "As-Sa'di leaves the question open between two possibilities. The thing sworn to may be the recompense and the raising, since the states of the Resurrection follow straight after. Or the thing sworn by and the thing sworn to may be the same: Allah swore about the angels themselves, because belief in them is among the six pillars of faith, and because their acts here include the recompense they carry out at death, before it and after it. Al-Muyassar adds a note of its own: a created being may not swear by anything other than its Creator, and whoever does so has committed shirk.",
            "bn": "সা'দী প্রশ্নটি দুটি সম্ভাবনার মধ্যে খোলা রাখেন। হতে পারে শপথের বিষয় প্রতিদান আর পুনরুত্থান, কারণ ঠিক পরেই কিয়ামতের অবস্থার বর্ণনা আসে। আবার হতে পারে, যার শপথ আর যে কথার শপথ, দুটো একই। অর্থাৎ আল্লাহ ফেরেশতাদের বিষয়েই শপথ করেছেন, কারণ তাঁদের প্রতি ঈমান ঈমানের ছয়টি রুকনের একটি। তা ছাড়া এখানে তাঁদের যে কাজের কথা, তার মধ্যে আছে সেই প্রতিদান, যা তাঁরা মৃত্যুর সময়, তার আগে ও পরে কার্যকর করেন। মুয়াসসার নিজের পক্ষ থেকে একটি কথা যোগ করে: সৃষ্টির জন্য স্রষ্টা ছাড়া অন্য কিছুর নামে শপথ করা জায়েয নয়, কেউ করলে সে শিরক করল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pull Turned Inward",
          "bn": "টানটা নিজের দিকে ফেরানো"
        },
        "p": [
          {
            "en": "Several commentators read this first oath as the taking of the disbelievers' souls. The verse speaks only of what it names, a drawing out at death that is known only by revelation, and it licenses nothing against any living person or community. It gives nobody the right to read another person's death, to decide from a hard or an easy end where a soul now stands, or to apply these reports to someone they dislike. Ma'arif al-Qur'an has already said that onlookers cannot see what the dying feel; the verse leaves that knowledge with Allah.",
            "bn": "কয়েকজন তাফসীরকার এই প্রথম শপথকে কাফেরদের রূহ কবজের কথা হিসেবে পড়েছেন। আয়াতটি শুধু সেটুকুই বলে, যা তার ভাষায় আছে: মৃত্যুর সময় রূহ টেনে বের করা, যা জানা যায় কেবল ওহি থেকে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কারও মৃত্যু দেখে তার অবস্থা বুঝে ফেলার অধিকার এ আয়াত কাউকে দেয় না। মৃত্যু কঠিন হলো না সহজ, তা দেখে কোনো রূহ এখন কোথায় আছে, সেই ফয়সালা করার অধিকারও দেয় না। অপছন্দের কারও গায়ে এসব বর্ণনা লাগানোর অধিকারও নয়। মাআরিফুল কুরআন আগেই বলেছে, মৃত্যুপথযাত্রী যা অনুভব করে, পাশের লোকেরা তা দেখতে পায় না। সেই জ্ঞান আয়াতটি আল্লাহর কাছেই রেখে দেয়।"
          },
          {
            "en": "What the verse does give the reader is a picture to turn inward. The surah opens on a pull taken to its full extent, whether the commentator saw an angel, death, a star or a bow. The four oaths that follow in 79:2 to 79:5 continue the series. For the reader, the first oath is a reminder that the leaving will come, and a question about what we are still holding too tightly.",
            "bn": "পাঠকের হাতে আয়াতটি তুলে দেয় একটা ছবি, যা নিজের দিকে ফিরিয়ে দেখার মতো। সূরা শুরু হয় এমন এক টান দিয়ে, যা শেষ সীমা পর্যন্ত যায়। তাফসীরকার তাতে ফেরেশতা দেখুন, মৃত্যু দেখুন, তারা দেখুন বা ধনুক। ৭৯:২ থেকে ৭৯:৫ আয়াতের চারটি শপথ এই ধারা এগিয়ে নেয়। পাঠককে প্রথম শপথটি মনে করিয়ে দেয়, বিদায় আসবেই। সেই সঙ্গে একটা প্রশ্নও রাখে: কোন জিনিস আমরা এখনো বড্ড শক্ত করে আঁকড়ে ধরে আছি?"
          }
        ]
      }
    ]
  },
  "79:7": {
    "sections": [
      {
        "h": {
          "en": "The One That Rides Behind",
          "bn": "যে আসে ঠিক পেছনে"
        },
        "p": [
          {
            "en": "Tatba'uha ar-radifa: there will follow it the one that comes behind. In Arabic the verse is two words, and it completes a scene that 79:6 opened with ar-rajifa. The pronoun ha points back to that first one, so whatever the radifa is, it is named by what it follows. As-Sa'di glosses it in a single line: the other quake, which rides behind it and comes after it. His verb, tardifuha, shares the root r-d-f with the name itself, so his gloss says the word twice: a follower is what follows.",
            "bn": "তাতবাউহার রাদিফাহ: তার পিছু পিছু আসবে পরেরটি। আরবিতে আয়াতটি মাত্র দুই শব্দের। ৭৯:৬ আয়াত আর-রাজিফাহ দিয়ে যে দৃশ্য শুরু করেছিল, এ আয়াত তা পূর্ণ করে। 'হা' সর্বনামটি সেই প্রথমটির দিকেই ফিরে যায়। ফলে রাদিফাহ যা-ই হোক, তার পরিচয় সে কার পেছনে আসে তা দিয়ে। সা'দী এক লাইনে এর ব্যাখ্যা দেন: আরেকটি কম্পন, যা তার পেছনে চড়ে আসে এবং তার পরপরই আসে। তাঁর ব্যবহার করা ক্রিয়া তারদিফুহা, আর নামটি রাদিফাহ, দুটোর ধাতু একই, র-দ-ফ। তাই তাঁর ব্যাখ্যায় শব্দটা দুবার আসে। অনুসারী মানে যে পেছনে আসে।"
          },
          {
            "en": "Ibn Abbas (RA), in the report at-Tabari gives, says the latter follows the first: the rajifa is the first blast and the radifa the last. At-Tabari's own opening gloss is the same in two words, an-nafkha ath-thaniya, the second blast. The Muyassar folds 79:1 to 79:7 into one sentence: creation will surely be raised and reckoned, on the day the earth is shaken by the first blast, the blast of death, which another blast, for bringing to life, follows. On the plainest reading, the verse is the hinge between dying and rising.",
            "bn": "তাবারীর আনা বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, পরেরটি প্রথমটির পেছনে আসে। রাজিফাহ হলো প্রথম ফুঁক, আর রাদিফাহ শেষ ফুঁক। তাবারী নিজেও আয়াতের শুরুতে দুই শব্দে একই কথা বলেন: আন-নাফখাতুস সানিয়াহ, দ্বিতীয় ফুঁক। মুয়াসসার ৭৯:১ থেকে ৭৯:৭ পর্যন্ত এক বাক্যে গেঁথে দেয়। সৃষ্টিকে অবশ্যই ওঠানো হবে, হিসাব নেওয়া হবে। সেদিন প্রথম ফুঁকে, মৃত্যুর ফুঁকে, জমিন কেঁপে উঠবে। তার পেছনে আসবে আরেক ফুঁক, জীবন ফিরিয়ে দেওয়ার জন্য। সবচেয়ে সরল পাঠে আয়াতটি তাই সেই মোড়, যেখানে মৃত্যু থেকে পুনরুত্থানের দিকে ঘুরে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Blast That Gives Life",
          "bn": "যে ফুঁকে প্রাণ ফেরে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports Ibn Abbas (RA) saying that these are the two blasts, the first and the second, and adds that Mujahid, al-Hasan, Qatada, ad-Dahhak and more than one other said the same. At-Tabari gives several of them in their own words. Ad-Dahhak: the rajifa is the first blast, the radifa the other one. Qatada calls them two cries, sayhatan: the first kills everything by Allah's leave, and the other gives life to everything by Allah's leave. Al-Qurtubi repeats that line from Ibn Abbas, al-Hasan and Qatada, and explains the two cries as the two blowings.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর কথা আনেন: এ দুটি হলো দুই ফুঁক, প্রথম আর দ্বিতীয়। তিনি জানান, মুজাহিদ, হাসান, কাতাদা, দাহহাকসহ আরও অনেকে একই কথা বলেছেন। তাবারী তাঁদের কয়েকজনের কথা তাঁদের নিজের ভাষাতেই আনেন। দাহহাক বলেন, রাজিফাহ প্রথম ফুঁক, রাদিফাহ পরের ফুঁক। কাতাদা এ দুটিকে বলেন দুই আওয়াজ, সাইহাতান। প্রথমটি আল্লাহর হুকুমে সবকিছুকে মেরে ফেলবে, আর পরেরটি আল্লাহর হুকুমে সবকিছুকে জীবিত করবে। কুরতুবী ইবন আব্বাস, হাসান ও কাতাদা থেকে একই কথা আবার বলেন। দুই আওয়াজ বলতে যে দুই ফুঁক বোঝানো হয়েছে, তাও খুলে বলেন।"
          },
          {
            "en": "Al-Hasan, as at-Tabari reports him, puts it in two clauses: the first kills the living, and the second gives life to the dead. Then he recited 39:68: and the Horn will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills; then it will be blown into another time, and at once they will be standing, looking on. The verse he chose has the same shape as the verse under study, a blowing that strikes down and then another, ukhra, after which people stand.",
            "bn": "তাবারীর বর্ণনায় হাসান কথাটা দুই টুকরায় বলেন। প্রথমটি জীবিতদের মৃত্যু ঘটাবে, দ্বিতীয়টি মৃতদের জীবিত করবে। তারপর তিনি ৩৯:৬৮ আয়াত তিলাওয়াত করেন: শিঙ্গায় ফুঁক দেওয়া হবে, তখন আসমান ও জমিনে যারা আছে সবাই মরে লুটিয়ে পড়বে, তবে আল্লাহ যাদের চান তারা ছাড়া। তারপর আবার ফুঁক দেওয়া হবে, আর সঙ্গে সঙ্গে তারা দাঁড়িয়ে তাকিয়ে থাকবে। তাঁর বেছে নেওয়া আয়াতের গড়নও এ আয়াতের মতো। প্রথমে এক ফুঁক, যা সবাইকে ফেলে দেয়। তারপর আরেকটি, উখরা, যার পরে মানুষ উঠে দাঁড়ায়।"
          },
          {
            "en": "On this reading the follower is not a second calamity piled on the first. The first undoes life; the second restores it, and restores it for a purpose, since the Muyassar's sentence ends in being raised and reckoned. The dread of 79:6 and the return of 79:7 sit two words apart. Whatever a person meets when the second blast sounds, it will be met awake and standing, as 39:68 pictures them, and facing the reckoning that the Muyassar names.",
            "bn": "এ পাঠ অনুযায়ী পেছনের ফুঁকটি প্রথম বিপদের উপর চাপানো আরেকটা বিপদ নয়। প্রথমটি জীবন কেড়ে নেয়, দ্বিতীয়টি তা ফিরিয়ে দেয়। আর ফিরিয়ে দেয় একটা উদ্দেশ্যে, কারণ মুয়াসসারের বাক্য শেষ হয় ওঠানো আর হিসাবের কথায়। ৭৯:৬ আয়াতের আতঙ্ক আর ৭৯:৭ আয়াতের ফিরে আসা, এ দুয়ের দূরত্ব মাত্র দুই শব্দ। দ্বিতীয় ফুঁক বাজলে মানুষ যা-ই সামনে পাক, পাবে জেগে উঠে, দাঁড়ানো অবস্থায়, যেমন ৩৯:৬৮ আয়াত ছবি আঁকে। আর সামনে থাকবে সেই হিসাব, যার কথা মুয়াসসার বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Quaking Earth, Splitting Sky",
          "bn": "কাঁপা জমিন, ফাটা আসমান"
        },
        "p": [
          {
            "en": "At-Tabari then opens a second view with the words wa qala akharun, and others said. Mujahid, through Ibn Abi Najih: on the day the rajifa shakes means the earth and the mountains shake, and that is the zalzala, the great quake. The radifa, he said, is the words: when the sky is split, and they are crushed with a single crushing. His phrase joins two verses, the opening of 84:1 and the close of 69:14, so the follower becomes the sky torn open and the land levelled.",
            "bn": "এরপর তাবারী 'ওয়া কালা আখারূন', অর্থাৎ অন্যরা বলেছেন, এই কথা দিয়ে দ্বিতীয় একটি মত আনেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেন, রাজিফাহ কাঁপবে মানে জমিন আর পাহাড় কাঁপবে, আর সেটাই যালযালা, মহাভূকম্পন। আর রাদিফাহ, তাঁর ভাষায়, এই কথাগুলো: যখন আসমান ফেটে যাবে, আর দুটোকে এক আঘাতে চূর্ণ করা হবে। তাঁর বাক্যে দুটি আয়াত জোড়া লেগেছে, ৮৪:১ আয়াতের শুরু আর ৬৯:১৪ আয়াতের শেষাংশ। এ মতে পেছনে যা আসে তা হলো ফেটে যাওয়া আসমান আর মাটির সঙ্গে মিশে যাওয়া জমিন।"
          },
          {
            "en": "Al-Baghawi gives the same view in a fuller sentence: the radifa is when the sky splits, and the earth and the mountains are lifted and crushed with a single crushing. Al-Qurtubi has it too, and adds that this comes after the quake. Ibn Kathir places Mujahid differently. He counts him among those who said the two blasts, then reports from him a comparison: the first is like 73:14, the day the earth and the mountains shake, and the second like 69:14. The texts read here leave the two placements as they stand.",
            "bn": "বাগাভী একই মত আরেকটু খুলে বলেন। রাদিফাহ হলো সেই সময়, যখন আসমান ফেটে যাবে, আর জমিন ও পাহাড় তুলে নিয়ে এক আঘাতে চূর্ণ করা হবে। কুরতুবীও মতটি আনেন, সঙ্গে যোগ করেন যে এটা ঘটবে ভূকম্পনের পরে। ইবন কাসীর অবশ্য মুজাহিদকে রাখেন অন্য জায়গায়। যাঁরা দুই ফুঁকের কথা বলেছেন, তাঁদের মধ্যে তিনি মুজাহিদকেও গোনেন। তারপর তাঁর কাছ থেকে একটি তুলনা আনেন: প্রথমটি ৭৩:১৪ আয়াতের মতো, যেদিন জমিন ও পাহাড় কাঁপবে, আর দ্বিতীয়টি ৬৯:১৪ আয়াতের মতো। এখানে পড়া লেখাগুলো এই দুই অবস্থানের মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as the Hour",
          "bn": "নাম যখন কিয়ামত"
        },
        "p": [
          {
            "en": "Two further glosses name the event rather than the sound. Ibn Zayd, in at-Tabari: the rajifa is the earth, and the radifa is as-sa'a, the Hour. 'Ata', in al-Baghawi: the rajifa is the Qiyama, and the radifa is the ba'th, the raising of the dead. Al-Qurtubi records one more under qila, it was said: the rajifa moves the earth, and the radifa is another quake that brings the earths to an end. He closes these glosses with fa-Allahu a'lam, and Allah knows best.",
            "bn": "আরও দুটি ব্যাখ্যা আওয়াজের বদলে ঘটনার নাম ধরে বলে। তাবারীর বর্ণনায় ইবন যায়দ বলেন, রাজিফাহ হলো জমিন, আর রাদিফাহ হলো আস-সাআহ, কিয়ামতের মুহূর্ত। বাগাভীর বর্ণনায় আতা বলেন, রাজিফাহ হলো কিয়ামত, আর রাদিফাহ হলো বা'স, মৃতদের ওঠানো। কুরতুবী 'কীলা', অর্থাৎ বলা হয়েছে, এই কথা দিয়ে আরও একটি মত আনেন। রাজিফাহ জমিনকে নাড়িয়ে দেবে, আর রাদিফাহ হলো আরেক ভূকম্পন, যা জমিনগুলোকে নিঃশেষ করে দেবে। এই ব্যাখ্যাগুলো তিনি শেষ করেন 'ফাল্লাহু আ'লাম' বলে, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "These are kept here as the sources keep them, side by side. At-Tabari opens with the second blast as the meaning, records Mujahid's and Ibn Zayd's views under others said, and passes on to the grammar of the oath without a ruling between them. What every gloss shares is the shape the verse itself gives: one thing, then a second that comes behind it. Whether it is named a blast, a quake, the Hour or the raising, the follower arrives, and each name points to the same Day.",
            "bn": "সূত্রগুলো এসব মত যেভাবে পাশাপাশি রেখেছে, এখানেও সেভাবেই রাখা হলো। তাবারী শুরু করেন দ্বিতীয় ফুঁকের অর্থ দিয়ে। তারপর মুজাহিদ আর ইবন যায়দের মত আনেন 'অন্যরা বলেছেন' শিরোনামে। এরপর শপথের ব্যাকরণে চলে যান, এগুলোর মধ্যে কোনো রায় দেন না। সব ব্যাখ্যায় একটা জিনিস মেলে, আর সেটা আয়াতের নিজেরই গড়ন। প্রথমে একটি ঘটনা, তারপর তার পেছনে আরেকটি। নাম ফুঁক হোক, কম্পন হোক, কিয়ামত হোক বা পুনরুত্থান, পেছনেরটা আসবেই। আর প্রতিটি নাম একই দিনের দিকে ইশারা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gap Between the Two",
          "bn": "দুই ফুঁকের মাঝের ফাঁক"
        },
        "p": [
          {
            "en": "How long lies between them? Qatada, in at-Tabari, says the Prophet ﷺ used to say bainahuma arba'un, between them forty, and the report adds that his companions said: by Allah, he told us no more than that. Al-Baghawi writes forty years in his own voice, and al-Qurtubi gives forty years as a hadith. The narration with the number in Sahih al-Bukhari, 4935, is discussed under 78:18, with Abu Hurayra's refusal to name the unit, and it is not retold here.",
            "bn": "দুই ফুঁকের মাঝে কতটা সময়? তাবারীর বর্ণনায় কাতাদা বলেন, নবী ﷺ বলতেন, বাইনাহুমা আরবাঊন, দুটোর মাঝে চল্লিশ। বর্ণনায় আরও আছে, তাঁর সাহাবিরা বলেছেন, আল্লাহর কসম, এর বেশি তিনি আমাদের বলেননি। বাগাভী নিজের কথায় লেখেন চল্লিশ বছর। কুরতুবী চল্লিশ বছরের কথা হাদিস হিসেবে আনেন। সংখ্যাসহ সহীহ বুখারীর বর্ণনাটি (নম্বর ৪৯৩৫) ৭৮:১৮ আয়াতের আলোচনায় এসেছে। সেখানে আবু হুরায়রা (রাঃ) চল্লিশ দিন, মাস না বছর, তা বলতে রাজি হননি। এখানে তা আর বলা হচ্ছে না।"
          },
          {
            "en": "At-Tabari also brings a long report from Abu Hurayra that counts three blowings of the Horn, of terror, of swooning and of standing, and applies these verses to the terror of the first. Its chain, as at-Tabari prints it, runs through a man and then a man of the Ansar, two narrators left unnamed, so it is not used here. Qatada's further note, introduced with it was mentioned to us, of a rain sent during the forty, is not relied on here either.",
            "bn": "তাবারী আবু হুরায়রা থেকে আরেকটি দীর্ঘ বর্ণনাও আনেন। তাতে শিঙ্গার তিনটি ফুঁকের কথা আছে: ভয়ের ফুঁক, বেহুঁশ হওয়ার ফুঁক আর দাঁড়িয়ে যাওয়ার ফুঁক। বর্ণনাটি এ আয়াতগুলোকে প্রথম ফুঁকের আতঙ্কের সঙ্গে মেলায়। কিন্তু তাবারী যে সনদ দেন, তাতে আছে 'এক ব্যক্তি', তারপর 'আনসারের এক ব্যক্তি'। দুজন বর্ণনাকারীর কারও নাম নেই। তাই বর্ণনাটি এখানে নেওয়া হলো না। কাতাদার আরেকটি কথা আসে 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে: চল্লিশের মধ্যে বৃষ্টি পাঠানোর কথা। সেটার উপরও এখানে ভর করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Woken by Two Words",
          "bn": "দুই শব্দে জেগে ওঠা"
        },
        "p": [
          {
            "en": "One narration attaches to the verse itself. At-Tabari reports from Ubayy ibn Ka'b (RA) that the Messenger of Allah ﷺ recited 79:6 and 79:7 and said: the rajifa has come, followed by the radifa; death has come with what it holds. Ibn Kathir notes that Ahmad and at-Tirmidhi both record it. In Jami' at-Tirmidhi, number 2457, the English on the page reads in full, beginning with the night:",
            "bn": "একটি বর্ণনা সরাসরি এ আয়াতের সঙ্গেই যুক্ত। তাবারী উবাই ইবন কা'ব (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ ৭৯:৬ ও ৭৯:৭ আয়াত তিলাওয়াত করে বললেন: রাজিফাহ এসে গেছে, তার পেছনে রাদিফাহ। মৃত্যু এসে গেছে, সঙ্গে যা আছে তা নিয়ে। ইবন কাসীর জানান, আহমাদ ও তিরমিযী দুজনেই এটি বর্ণনা করেছেন। জামি' তিরমিযী, নম্বর ২৪৫৭-এ পুরো বর্ণনাটি এরকম, শুরু রাতের কথা দিয়ে:"
          },
          {
            "en": "At-Tufail bin Ubayy bin Ka'b narrated from his father who said: \"When a third of the night had passed, the Messenger of Allah ﷺ stood and said: 'O you people! Remember Allah! Remember Allah! The Rajifah is coming, followed by the Radifah, death and what it brings is coming, death and what it brings is coming!'\" Ubayy said: \"I said: 'O Messenger of Allah! Indeed I say very much Salat for you. How much of my Salat should I make for you?' He said: 'As you wish.'\"",
            "bn": "তুফাইল ইবন উবাই ইবন কা'ব তাঁর পিতা থেকে বর্ণনা করেন। তিনি বলেন: \"রাতের এক-তৃতীয়াংশ পার হলে আল্লাহর রাসূল ﷺ উঠে দাঁড়ালেন এবং বললেন: 'হে লোকসকল! আল্লাহকে স্মরণ করো! আল্লাহকে স্মরণ করো! রাজিফাহ আসছে, তার পেছনে রাদিফাহ। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে!'\" উবাই বলেন: \"আমি বললাম: 'হে আল্লাহর রাসূল! আমি আপনার উপর অনেক দরুদ পড়ি। আমার দোয়ার কতটুকু আপনার জন্য রাখব?' তিনি বললেন: 'যতটুকু তুমি চাও।'\""
          },
          {
            "en": "\"[He said:] I said: 'A fourth?' He said: 'As you wish. But if you add more it would be better for you.' I said: 'Then half?' He said: 'As you wish. And if you add more it would be better [for you].' [He said:] I said: 'Then two-thirds?' He said: 'As you wish, but if you add more it would be better for you.' I said: 'Should I make all of my Salat for you?' He said: 'Then your problems would be solved and your sins would be forgiven.'\" At-Tirmidhi grades it hasan.",
            "bn": "\"আমি বললাম: 'এক-চতুর্থাংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে অর্ধেক?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে দুই-তৃতীয়াংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'আমার পুরো দোয়াটাই কি আপনার জন্য করে দেব?' তিনি বললেন: 'তাহলে তোমার দুশ্চিন্তা দূর হবে, আর তোমার গুনাহ মাফ করা হবে।'\" তিরমিযী একে হাসান বলেছেন।"
          },
          {
            "en": "The hour differs across the routes. The Arabic of at-Tirmidhi on the page consulted here reads thulutha al-layl, two thirds of the night, though the English beside it says a third; Ibn Kathir, quoting at-Tirmidhi, has a third; al-Qurtubi and al-Baghawi, by other routes, a quarter. The call itself does not change. Ubayy's question, in the Arabic, is about the salat he sends upon the Prophet ﷺ, 'alayka, and how much of his own salat to give to it.",
            "bn": "কোন প্রহরে, তা নিয়ে সূত্রগুলোতে ভিন্নতা আছে। যে পাতা দেখা হয়েছে, তাতে তিরমিযীর আরবি পাঠে আছে সুলুসাল লাইল, রাতের দুই-তৃতীয়াংশ। অথচ পাশের ইংরেজিতে লেখা এক-তৃতীয়াংশ। ইবন কাসীর তিরমিযী থেকে উদ্ধৃত করতে গিয়ে বলেন এক-তৃতীয়াংশ। কুরতুবী আর বাগাভী অন্য সূত্রে বলেন এক-চতুর্থাংশ। ডাকটা কিন্তু সব বর্ণনায় একই। আরবি পাঠে উবাইয়ের প্রশ্নটা নবী ﷺ-এর উপর দরুদ নিয়ে, আলাইকা, অর্থাৎ আপনার উপর। নিজের দোয়ার কতটুকু তিনি সেই দরুদে দেবেন, সেটাই তাঁর জিজ্ঞাসা।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, With All It Holds",
          "bn": "মৃত্যু, তার সবকিছু নিয়ে"
        },
        "p": [
          {
            "en": "The words of the call reward slow reading. The Prophet ﷺ takes the two nouns of 79:6 and 79:7 and puts them in a sentence of his own, ja'at ar-rajifa, in the past form of the verb, which the English page renders is coming. Then he sets beside it a third clause that belongs to each listener: ja'a al-mawtu bima fih, death has come with what is in it. The verse speaks of the end of all creation. The call carries it to the edge of each sleeper's bed.",
            "bn": "ডাকের কথাগুলো ধীরে পড়লে আরও খোলে। নবী ﷺ ৭৯:৬ আর ৭৯:৭ আয়াতের দুটি বিশেষ্য নিয়ে নিজের একটি বাক্য গড়েন: জাআতির রাজিফাহ। আরবিতে ক্রিয়াটি অতীত রূপে, ইংরেজি পাতায় তার অনুবাদ 'আসছে'। তারপর পাশে বসান তৃতীয় একটি কথা, যা প্রত্যেক শ্রোতার নিজের: জাআল মাওতু বিমা ফীহ, মৃত্যু এসে গেছে, তার ভেতরে যা আছে সব নিয়ে। আয়াতটি গোটা সৃষ্টির শেষের কথা বলে। আর ডাকটি সেই কথাকে নিয়ে আসে প্রতিটি ঘুমন্ত মানুষের বিছানার পাশে।"
          },
          {
            "en": "He made the call at night, with a third, two thirds or a quarter of it gone, by the routes quoted. And he called people to remember Allah, twice, before naming what was coming. That order is worth keeping: the reminder of death comes wrapped in a summons to dhikr, not left to stand as fear alone. In the same report Ubayy then asks how to spend his own prayers, and is told that giving all of them to the salat upon the Prophet ﷺ would answer his worry and bring forgiveness.",
            "bn": "ডাকটা এসেছিল রাতে, সূত্রভেদে রাতের এক-তৃতীয়াংশ, দুই-তৃতীয়াংশ বা এক-চতুর্থাংশ পার হওয়ার পর। আর কী আসছে তা বলার আগে তিনি দুবার আল্লাহকে স্মরণ করতে ডেকেছেন। এই ক্রমটা মনে রাখার মতো। মৃত্যুর কথা এখানে শুধু ভয় হয়ে দাঁড়িয়ে থাকে না, তা আসে জিকিরের ডাকের ভেতরে মোড়ানো হয়ে। একই বর্ণনায় এরপর উবাই জানতে চান, নিজের দোয়া তিনি কীভাবে ভাগ করবেন। জবাব পান, পুরোটাই যদি নবী ﷺ-এর উপর দরুদে দেন, তাহলে তাঁর দুশ্চিন্তা দূর হবে, গুনাহ মাফ হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the First Sounds",
          "bn": "প্রথম ফুঁক বাজার আগে"
        },
        "p": [
          {
            "en": "The verse is two words and holds no command. It does not tell the listener to do anything; it says that the second follows the first. In the plainest reading the sources give, the first ends life and the second returns it for the reckoning the Muyassar names. Every human life is lived before the first. That is the only time in which anything can be prepared, and the verse leaves no room for the second to be missed.",
            "bn": "আয়াতটি দুই শব্দের, তাতে কোনো আদেশ নেই। শ্রোতাকে কিছু করতে বলে না। শুধু জানায়, প্রথমটির পেছনে দ্বিতীয়টি আসে। সূত্রগুলোর সবচেয়ে সরল পাঠে প্রথম ফুঁক জীবন শেষ করে, আর দ্বিতীয়টি তা ফিরিয়ে দেয় সেই হিসাবের জন্য, যার কথা মুয়াসসার বলে। প্রতিটি মানুষের জীবন কাটে প্রথম ফুঁকের আগে। প্রস্তুতি নেওয়ার সময় শুধু এটুকুই। আর দ্বিতীয়টি ফসকে যাওয়ার কোনো ফাঁক আয়াত রাখে না।"
          },
          {
            "en": "The verses after it turn to the people of that day, and they belong to another page. This one asks something simpler: whether the listener believes the follower will follow. The night call shows what that belief looks like in a life. It wakes; it remembers Allah, twice over; it names death as near and not as a far-off event; and then, as Ubayy did, it asks what to do with the time still in hand.",
            "bn": "এর পরের আয়াতগুলো সেদিনের মানুষের কথায় যায়, সেগুলোর আলোচনা আলাদা। এ আয়াত জানতে চায় আরও সহজ একটা কথা। শ্রোতা কি বিশ্বাস করে যে পেছনেরটা আসবেই? রাতের সেই ডাক দেখিয়ে দেয়, জীবনে এ বিশ্বাসের চেহারা কেমন। সে জেগে ওঠে। দুবার করে আল্লাহকে স্মরণ করে। মৃত্যুকে দূরের ঘটনা না ভেবে কাছের বলে চেনে। তারপর উবাইয়ের মতো জিজ্ঞেস করে, হাতে যে সময়টুকু আছে, তা দিয়ে কী করব।"
          }
        ]
      }
    ]
  },
  "79:14": {
    "sections": [
      {
        "h": {
          "en": "One Cry, Then the Open Ground",
          "bn": "এক ধমক, তারপর খোলা ময়দান"
        },
        "p": [
          {
            "en": "Fa-idha hum bis-sahira: and then, all at once, they are at the sahira. The verse is three Arabic words: fa-idha, hum, and bis-sahira, a single noun carrying the preposition bi and the definite article. The fa ties it to the verse before, fa-innama hiya zajratun wahida, it is only one cry, and idha marks what happens suddenly. Al-Muyassar reads the two verses as one sentence: it is only a single blast, and then they are alive on the face of the earth, after they had been in its belly.",
            "bn": "ফা-ইযা হুম বিস-সাহিরা: আর তখনই, হঠাৎ, তারা সাহিরায়। আয়াতটি আরবিতে তিনটি শব্দের: ফা-ইযা, হুম আর বিস-সাহিরা। শেষেরটি একটিমাত্র বিশেষ্য, যার সঙ্গে জুড়ে আছে 'বি' অব্যয় আর নির্দিষ্টবাচক 'আল'। 'ফা' আয়াতটিকে বেঁধে দেয় আগের আয়াতের সঙ্গে: ফা-ইন্নামা হিয়া যাজরাতুন ওয়াহিদা, ওটা তো কেবল একটা ধমক। আর 'ইযা' বোঝায় যা হঠাৎ ঘটে যায়। মুয়াসসার দুই আয়াতকে এক বাক্য হিসেবে পড়ে: ওটা কেবল একটা ফুঁক, তারপরই তারা জীবিত হয়ে জমিনের উপরে, অথচ এতদিন ছিল তার পেটের ভেতরে।"
          },
          {
            "en": "The cry answers a question. In 79:10 to 79:12 the Qur'an reports what the deniers say: will we really be returned to our former state, even when we have become rotted bones? That, they say, would be a losing return. Those are their words, reported as theirs. Qatada, in at-Tabari's chain, explains the reply: when the resurrection seemed far away in the people's eyes, Allah said that it is only one cry, and then they are at the sahira, on the top of the earth after being inside it.",
            "bn": "ধমকটা আসলে একটা প্রশ্নের জবাব। ৭৯:১০ থেকে ৭৯:১২ আয়াতে কুরআন অস্বীকারকারীদের কথা তুলে ধরে: আমাদের কি সত্যিই আগের অবস্থায় ফিরিয়ে আনা হবে, পচা-গলা হাড় হয়ে যাওয়ার পরেও? তারা বলে, তাহলে তো সে ফেরা হবে সর্বনাশের ফেরা। কথাগুলো তাদের, কুরআন সেগুলো তাদের কথা হিসেবেই বলেছে। তাবারীর সনদে কাতাদা জবাবটা ব্যাখ্যা করেন। লোকদের চোখে পুনরুত্থান যখন বহু দূরের ব্যাপার মনে হলো, আল্লাহ বললেন, ওটা তো কেবল একটা ধমক, আর তখনই তারা সাহিরায়, অর্থাৎ মাটির ভেতরে থাকার পর মাটির উপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Pronoun Gathers",
          "bn": "'তারা' বলতে কারা"
        },
        "p": [
          {
            "en": "The commentators differ over who hum, they, are. At-Tabari keeps the pronoun on the speakers of the verses before: these deniers of the resurrection, who marvelled at Allah bringing them back to life after death, out of denial of it, are then at the sahira. Al-Qurtubi widens it: hum means al-khala'iq ajma'un, all created beings together. As-Sa'di says the same: all creatures, on the face of the earth, standing and looking, and Allah gathers them, judges between them with His just ruling, and repays them.",
            "bn": "'হুম', অর্থাৎ 'তারা' বলতে কাদের বোঝানো হয়েছে, তা নিয়ে তাফসীরকারদের মত ভিন্ন। তাবারী সর্বনামটিকে রাখেন আগের আয়াতগুলোর বক্তাদের উপর। তাঁর মতে এরা সেই পুনরুত্থান-অস্বীকারকারী, মৃত্যুর পর আল্লাহ তাদের আবার জীবিত করবেন শুনে যারা অবিশ্বাসে অবাক হতো। তারাই তখন সাহিরায়। কুরতুবী পরিধিটা বাড়িয়ে দেন: হুম মানে আল-খালায়িক আজমাউন, সমস্ত সৃষ্টি একসাথে। সা'দীও একই কথা বলেন। সব সৃষ্টি জমিনের উপরে দাঁড়িয়ে তাকিয়ে থাকবে, আল্লাহ তাদের একত্র করবেন, নিজের ন্যায্য বিধানে তাদের মধ্যে ফয়সালা করবেন, আর প্রতিদান দেবেন।"
          },
          {
            "en": "Both readings stand in the sources, and this article takes neither side. Where the verse is read of the deniers, it speaks only of what it names: people who called the return a loss, shown standing at that return in a single moment. It names no people of today, and it licenses nothing against any living person or community. Its reader is not invited to picture others on that ground. The question it puts is whether the reader's own life is ready for a return that will not be slow.",
            "bn": "দুটো পাঠই তাফসীরের সূত্রে আছে, এ লেখা কোনোটির পক্ষ নেয় না। আয়াতটিকে যেখানে অস্বীকারকারীদের কথা হিসেবে পড়া হয়, সেখানে আয়াত শুধু সেটুকুই বলে, যা তার ভাষায় আছে। কিছু লোক ফিরে আসাকে লোকসান বলেছিল, আর এক মুহূর্তে তাদের সেই ফেরার সামনেই দাঁড়িয়ে থাকতে দেখা যায়। আজকের কোনো জাতির নাম এতে নেই। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। অন্যদের ওই ময়দানে কল্পনা করতে পাঠককে ডাকা হয়নি। প্রশ্নটা পাঠকের নিজের কাছে: যে ফেরা ধীরে আসবে না, তার জন্য আপনার জীবন কি তৈরি?"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Ground Is Called Wakeful",
          "bn": "ময়দানের নাম কেন 'জাগ্রত'"
        },
        "p": [
          {
            "en": "Sahira comes from the root s-h-r, which gives sahar, staying awake. At-Tabari says the Arabs call the open desert, al-fala, and the face of the earth sahira, and he thinks they named it so because the sleep and the wakefulness of living things happen on it, so it was described by what it holds. Al-Qurtubi gives the same explanation from al-Farra', and al-Baghawi from some scholars of language. Al-Qurtubi adds a second sense: dhat sahar, a place of wakefulness, because people stay awake there out of fear of it.",
            "bn": "সাহিরা এসেছে স-হ-র ধাতু থেকে, যা থেকে 'সাহার', মানে রাত জেগে থাকা। তাবারী বলেন, আরবরা খোলা মরুভূমি, অর্থাৎ 'ফালা', আর জমিনের উপরিভাগকে সাহিরা বলে। তাঁর ধারণা, নামটা এসেছে এজন্য যে প্রাণীদের ঘুম আর জাগরণ দুটোই ঘটে এর উপরে। যা তার উপরে থাকে, সেই গুণেই তাকে চেনানো হয়েছে। কুরতুবী একই ব্যাখ্যা আনেন ফাররা থেকে, বাগাভী আনেন কয়েকজন ভাষাবিদের নামে। কুরতুবী আরেকটা অর্থও যোগ করেন: 'যাতু সাহার', জেগে থাকার জায়গা, কারণ সেখানে ভয়ে মানুষের ঘুম আসে না।"
          },
          {
            "en": "Al-Qurtubi then gives a third explanation, introduced with it is said: sahira is white, level ground, named for the mirage that runs across it. The Arabs speak of an 'ayn sahira, a waking spring, for one whose water flows, and call the opposite na'ima, sleeping. Or, he adds, the name comes because whoever crosses such ground does not sleep, for fear of perishing. From the dictionary al-Sihah, al-Qurtubi also brings the definition that the sahira is the face of the earth, and sets this verse beside it.",
            "bn": "এরপর কুরতুবী তৃতীয় একটা ব্যাখ্যা দেন, 'বলা হয়' কথাটি দিয়ে শুরু করে। সাহিরা হলো সাদা, সমতল ভূমি। এমন নাম, কারণ তার উপর দিয়ে মরীচিকা বয়ে যায়। আরবরা যে ঝরনার পানি বয়ে চলে, তাকে বলে 'আইনুন সাহিরা', জাগ্রত ঝরনা। উল্টোটাকে বলে 'নায়িমা', ঘুমন্ত। তিনি আরও বলেন, কিংবা নামটা এসেছে এজন্য যে এমন ভূমি যে পার হয়, মরে যাওয়ার ভয়ে সে ঘুমাতে পারে না। 'আস-সিহাহ' অভিধান থেকেও কুরতুবী সংজ্ঞাটা আনেন: সাহিরা হলো জমিনের উপরিভাগ। তার পাশেই তিনি এই আয়াতটি রাখেন।"
          },
          {
            "en": "The meaning was argued from poetry. In at-Tabari's chain through 'Ikrima, Ibn Abbas said the word means on the earth and cited Umayya ibn Abi as-Salt: with us is game of the sea and game of the sahira. Al-Qurtubi says Ibn Abbas and the commentators used Umayya's line as evidence. Both also quote a rider at the battle of Dhu Qar, urging his horse: your end is the dust of the sahira, then you return after it in the hafira, after you were rotting bones, nakhira. The couplet echoes words from 79:10, 79:11 and 79:14 at once.",
            "bn": "শব্দটির অর্থ প্রমাণ করা হয়েছে কবিতা দিয়ে। তাবারীর সনদে ইকরিমার মাধ্যমে ইবন আব্বাস বলেন, শব্দটির মানে জমিনের উপরে। প্রমাণ হিসেবে তিনি উমাইয়া ইবন আবিস-সালতের পঙক্তি আনেন: আমাদের কাছে আছে সাগরের শিকার আর সাহিরার শিকার। কুরতুবী বলেন, ইবন আব্বাস ও তাফসীরকারেরা উমাইয়ার এই পঙক্তিকেই দলিল বানিয়েছেন। দুজনেই যূ-কার যুদ্ধের এক ঘোড়সওয়ারের কথা আনেন, যে নিজের ঘোড়াকে সামনে এগোতে তাড়া দিচ্ছিল: তোমার শেষ ঠিকানা সাহিরার ধুলো, তারপর ফিরবে 'হাফিরা'য়, পচা-গলা হাড় হয়ে যাওয়ার পর, 'নাখিরা'। ৭৯:১০, ৭৯:১১ আর ৭৯:১৪ আয়াতের শব্দের প্রতিধ্বনি একই দুই চরণে একসাথে শোনা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Surface, Whole Earth, Level Plain",
          "bn": "উপরিভাগ, গোটা জমিন, সমতল প্রান্তর"
        },
        "p": [
          {
            "en": "Ibn Kathir sorts the early glosses. Ibn Abbas: the sahira is the whole earth, and so said Sa'id ibn Jubayr, Qatada and Abu Salih. 'Ikrima, al-Hasan, ad-Dahhak and Ibn Zayd: the face of the earth. At-Tabari's own wording is zahr al-ard, the back of the earth, and his chains give 'Ikrima, al-Hasan and ad-Dahhak saying the face of the earth, and Ibn Zayd saying the back of the earth, on top of its back. Mujahid gives al-makan al-mustawi, the level place.",
            "bn": "ইবন কাসীর শুরুর দিকের ব্যাখ্যাগুলো সাজিয়ে দেন। ইবন আব্বাস বলেন, সাহিরা মানে গোটা জমিন। সাঈদ ইবন জুবাইর, কাতাদা আর আবু সালিহও তা-ই বলেছেন। ইকরিমা, হাসান, দাহহাক আর ইবন যায়দের মতে জমিনের উপরিভাগ। তাবারীর নিজের শব্দ 'যাহরুল আরদ', জমিনের পিঠ। তাঁর সনদে ইকরিমা, হাসান ও দাহহাক বলেন জমিনের উপরিভাগ, আর ইবন যায়দ বলেন জমিনের পিঠ, পিঠের একেবারে উপরে। মুজাহিদ বলেন 'আল-মাকানুল মুসতাওয়ি', সমতল জায়গা।"
          },
          {
            "en": "Several glosses name a movement as well as a place. Ibn Kathir adds Mujahid's words: they were at its bottom, and they were brought out to its top. Qatada, in at-Tabari, says they are on the highest part of the earth after being in its hollow, and in another chain, that they come out of their graves onto the earth. Al-Qurtubi and al-Baghawi both say they come onto the face of the earth after being inside it. Ma'arif al-Qur'an adds that the earth, re-created at the Resurrection, will be wholly level, with no mountain barriers, buildings or caves.",
            "bn": "কয়েকটি ব্যাখ্যায় শুধু জায়গা নয়, একটা চলাও আছে। ইবন কাসীর মুজাহিদের কথা যোগ করেন: তারা ছিল তার তলায়, তাদের বের করে আনা হলো তার উপরে। তাবারীর বর্ণনায় কাতাদা বলেন, জমিনের পেটের ভেতরে থাকার পর তারা এখন তার সবচেয়ে উঁচু অংশে। আরেক সনদে তিনি বলেন, তারা কবর থেকে বেরিয়ে আসে মাটির উপরে। কুরতুবী ও বাগাভী দুজনেই বলেন, ভেতরে থাকার পর তারা উঠে আসে জমিনের উপরিভাগে। মাআরিফুল কুরআন যোগ করে, পুনরুত্থানের সময় নতুন করে গড়া জমিন হবে পুরোপুরি সমতল। পাহাড়ের বাধা থাকবে না, দালান বা গুহাও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Places Named in the Reports",
          "bn": "বর্ণনায় নাম আসা জায়গাগুলো"
        },
        "p": [
          {
            "en": "Others read sahira as a proper name. At-Tabari reports that some said it is a known, particular place on the earth. 'Uthman ibn Abi al-'Atika placed it in the tract between Jabal Hassan and Jabal Ariha, which Allah stretches out as He wills; al-Qurtubi gives the same and puts it in al-Sham, and Ibn Kathir sums up his view as the land of Bayt al-Maqdis, Jerusalem. Sufyan, whom al-Qurtubi and Ibn Kathir name as ath-Thawri, said a land in al-Sham, and al-Baghawi records it as well.",
            "bn": "কেউ কেউ সাহিরাকে একটা নির্দিষ্ট জায়গার নাম হিসেবে পড়েছেন। তাবারী জানান, কারও মতে এটি জমিনের পরিচিত একটি নির্দিষ্ট স্থান। উসমান ইবন আবিল-আতিকা এর অবস্থান বলেছেন জাবাল হাসসান ও জাবাল আরিহার মাঝের প্রান্তরে, আল্লাহ যেভাবে চান তা বিস্তৃত করে দেন। কুরতুবী একই কথা আনেন এবং জায়গাটিকে শামে বলেন। ইবন কাসীর তাঁর মতকে সংক্ষেপে বলেন বাইতুল মাকদিস, অর্থাৎ জেরুজালেমের ভূমি। সুফিয়ান বলেন শামের একটি ভূমি। কুরতুবী ও ইবন কাসীর তাঁকে সুফিয়ান সাওরী বলে চিনিয়েছেন, আর বাগাভীও মতটি উল্লেখ করেছেন।"
          },
          {
            "en": "Wahb ibn Munabbih, in at-Tabari and Ibn Kathir, said the sahira is a mountain beside Bayt al-Maqdis; al-Qurtubi records him as saying the mountain of Bayt al-Maqdis. A further view takes the word out of this world's map altogether. Qatada, in another report, said it is Jahannam, recorded by at-Tabari, al-Baghawi, Ibn Kathir and al-Qurtubi, who explains: these disbelievers are then in Jahannam. Al-Qurtubi also gives, as it is said, a desert at the edge of Jahannam, where they are halted on the land of the Resurrection, so that their wakefulness lasts.",
            "bn": "তাবারী ও ইবন কাসীরের বর্ণনায় ওয়াহব ইবন মুনাব্বিহ বলেন, সাহিরা বাইতুল মাকদিসের পাশের একটি পাহাড়। কুরতুবী তাঁর কথাটি এনেছেন 'বাইতুল মাকদিসের পাহাড়' হিসেবে। আরেকটি মত শব্দটিকে এই দুনিয়ার মানচিত্রের বাইরেই নিয়ে যায়। কাতাদার আরেক বর্ণনায় সাহিরা মানে জাহান্নাম। তাবারী, বাগাভী, ইবন কাসীর ও কুরতুবী সবাই এটি এনেছেন। কুরতুবী ব্যাখ্যা করেন: অর্থাৎ এই কাফেররা তখন জাহান্নামে। 'বলা হয়' বলে কুরতুবী আরও আনেন, সাহিরা জাহান্নামের কিনারে এক মরুপ্রান্তর, যেখানে কিয়ামতের ভূমিতে তাদের দাঁড় করিয়ে রাখা হবে, তাই জেগে থাকা আর শেষ হবে না।"
          },
          {
            "en": "Ibn Kathir gives a verdict on this list: all of these sayings are gharib, unusual, and the sound view is that it is the earth, its upper face. At-Tabari opens with the face of the earth as his own reading and then lists the others under the words others said, without a separate ruling on each. Note that Qatada appears on both sides: with the whole earth in Ibn Kathir, the top of the earth in at-Tabari, and Jahannam in a third report. This article lays the readings out as the sources do and chooses none.",
            "bn": "এই তালিকা নিয়ে ইবন কাসীর রায় দেন: এ সব কথাই 'গরীব', অর্থাৎ অপরিচিত। সঠিক মত হলো, সাহিরা মানে জমিন, তার উপরের দিক। তাবারী শুরু করেন জমিনের উপরিভাগকে নিজের পাঠ হিসেবে রেখে। তারপর বাকিগুলো আনেন 'অন্যরা বলেছেন' বলে, প্রতিটির উপর আলাদা রায় দেন না। খেয়াল করার মতো, কাতাদার নাম দুই দিকেই আছে। ইবন কাসীরে গোটা জমিন, তাবারীতে জমিনের উপরিভাগ, আর তৃতীয় এক বর্ণনায় জাহান্নাম। সূত্রগুলো যেভাবে সাজিয়েছে, এ লেখাও মতগুলো সেভাবেই রাখে, কোনোটি বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Earth Never Disobeyed On",
          "bn": "যে মাটিতে কখনো নাফরমানি হয়নি"
        },
        "p": [
          {
            "en": "A group of readings looks past this earth to another. Al-Qurtubi records, each under it is said, that the sahira is the white earth; that it is an earth Allah makes new on the Day of Resurrection; and that it is the name of the seventh earth, which Allah brings forward to hold the reckoning of His creatures on it, when the earth is exchanged for another. One of these he attributes: ad-Dahhak, from Ibn Abbas, said it is an earth of silver on which Allah was never once disobeyed, created at that time.",
            "bn": "একদল ব্যাখ্যা এই জমিন ছাড়িয়ে আরেক জমিনের দিকে তাকায়। কুরতুবী প্রতিটি আনেন 'বলা হয়' বলে। সাহিরা হলো সাদা জমিন। কিংবা এমন জমিন, যা আল্লাহ কিয়ামতের দিন নতুন করে গড়বেন। কিংবা সপ্তম জমিনের নাম, যেটিকে আল্লাহ সামনে নিয়ে আসবেন এবং তার উপর সৃষ্টির হিসাব নেবেন, যখন এই জমিন বদলে আরেক জমিন হয়ে যাবে। এর মধ্যে একটি মত তিনি নির্দিষ্ট বক্তার নামে আনেন। দাহহাক ইবন আব্বাস থেকে বলেন, তা রুপার এক জমিন, যার উপর একবারের জন্যও আল্লাহর নাফরমানি হয়নি। আল্লাহ সেটি সৃষ্টি করবেন তখনই।"
          },
          {
            "en": "Ibn Kathir reports ar-Rabi' ibn Anas reading this verse alongside three others: 14:48, the Day the earth is exchanged for another earth, and the heavens, and they come forth before Allah, the One, the Overpowering; 20:105 to 20:107, where the mountains are scattered and the ground left a level plain with no crookedness or rise; and 18:47, where the earth is seen laid bare. Ibn Kathir's bracket names 20:105 and 20:106, though the words he quotes run on into 20:107. The passage then says that this exposed earth is not counted as part of this one.",
            "bn": "ইবন কাসীর জানান, রাবী ইবন আনাস এ আয়াতের সঙ্গে আরও তিনটি আয়াত মিলিয়ে পড়েছেন। ১৪:৪৮: যেদিন এই জমিন বদলে আরেক জমিন হবে, আসমানগুলোও বদলে যাবে, আর সবাই হাজির হবে এক ও পরাক্রমশালী আল্লাহর সামনে। ২০:১০৫ থেকে ২০:১০৭: পাহাড়গুলো উড়িয়ে দেওয়া হবে, ভূমি পড়ে থাকবে সমতল প্রান্তর হয়ে, কোথাও বাঁক বা উঁচু-নিচু থাকবে না। আর ১৮:৪৭: জমিনকে দেখা যাবে একেবারে উন্মুক্ত। ইবন কাসীরের বন্ধনীতে লেখা ২০:১০৫ ও ২০:১০৬, তবে তিনি যে শব্দগুলো উদ্ধৃত করেন তা ২০:১০৭ পর্যন্ত গড়ায়। এরপর অনুচ্ছেদটি বলে, এই উন্মুক্ত জমিন এই দুনিয়ার জমিনের অংশ বলে গণ্য নয়।"
          },
          {
            "en": "It goes on to describe that earth in a phrase that matches ad-Dahhak's report: an earth on which no sin was ever worked and no blood ever shed. Ibn Kathir also brings, through Ibn Abi Hatim's chain to Abu Hazim, the words of the Companion Sahl ibn Sa'd on this verse: a white earth, 'afra', empty, like a loaf of pure bread. In Ibn Kathir that is given as Sahl's own comment, not as the Prophet's words. Whatever the sahira is, these readings agree that it carries no trace of what was done on the old ground.",
            "bn": "অনুচ্ছেদটি এরপর জমিনটির বর্ণনা দেয় এমন কথায়, যা দাহহাকের বর্ণনার সঙ্গে মেলে: এমন জমিন, যার উপর কখনো কোনো গুনাহ করা হয়নি, কখনো রক্ত ঝরানো হয়নি। ইবন কাসীর ইবন আবি হাতিমের সনদে আবু হাযিমের মাধ্যমে সাহাবি সাহল ইবন সা'দ (রাঃ)-এর কথাও আনেন: সাদা, লালচে-সাদা, শূন্য এক জমিন, যেন মিহি আটার রুটি। ইবন কাসীরে এটি সাহলের নিজের ব্যাখ্যা হিসেবে এসেছে, নবীর বাণী হিসেবে নয়। সাহিরা যা-ই হোক, এই ব্যাখ্যাগুলো এক জায়গায় মেলে: পুরনো মাটিতে যা করা হয়েছিল, তার কোনো দাগ ওই ভূমিতে থাকবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hadith Attached",
          "bn": "কোনো হাদিস জোড়া নেই"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted for this verse attaches a hadith of the Prophet ﷺ to it directly, and none gives a cause of revelation for it. Where Ibn Kathir describes the white earth, he gives it as Sahl ibn Sa'd's own words, through Ibn Abi Hatim, and this article reports it as Sahl's words and no more. What it adds is one plain detail: on that ground no one has a landmark. Nothing there is anyone's property, boundary or familiar corner.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো হাদিস সরাসরি এ আয়াতের সঙ্গে জোড়েনি। আয়াতটি নাজিলের কোনো প্রেক্ষাপটও কেউ দেয়নি। ইবন কাসীর সাদা ভূমির যে বর্ণনা দেন, তা সাহল ইবন সা'দের নিজের কথা হিসেবে, ইবন আবী হাতিমের সূত্রে। এখানেও তা সাহলের কথা হিসেবেই বলা হলো, তার বেশি কিছু নয়। বর্ণনাটি একটা সাদামাটা খুঁটিনাটি যোগ করে: ওই ভূমিতে কারও জন্য কোনো নিশানা নেই। সেখানে কোনো কিছুই কারও সম্পত্তি, সীমানা বা চেনা কোণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Up Awake",
          "bn": "জেগে উঠে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Put the readings side by side and the verse still says one clear thing. The deniers asked whether a return was possible and called it a loss; the reply is that it takes one cry, and the very next word finds them already there. Whether the sahira is the face of the earth, the whole earth, a level plain, a named place or an earth made new, every gloss in the sources puts people on ground that is open. Al-Muyassar's line holds the contrast: in the belly of the earth, and then on its face.",
            "bn": "সব ব্যাখ্যা পাশাপাশি রাখলেও আয়াতটি একটা কথা পরিষ্কার বলে। অস্বীকারকারীরা জানতে চেয়েছিল ফেরা সম্ভব কি না, আর সেটাকে বলেছিল লোকসান। জবাব হলো, লাগবে একটিমাত্র ধমক, আর পরের শব্দেই দেখা যায় তারা পৌঁছে গেছে। সাহিরা জমিনের উপরিভাগ হোক বা গোটা জমিন, সমতল প্রান্তর হোক বা নির্দিষ্ট কোনো জায়গা, কিংবা নতুন গড়া জমিন, সূত্রের প্রতিটি ব্যাখ্যা মানুষকে দাঁড় করায় খোলা ভূমিতে। মুয়াসসারের বাক্যেই বৈপরীত্যটা ধরা আছে: জমিনের পেটের ভেতরে, তারপর তার পিঠের উপরে।"
          },
          {
            "en": "Several commentators tie the word to wakefulness: a place where people do not sleep out of fear, a desert where waking does not end. The reader can take that as a question for now, while sleep and waking still alternate. A life can be spent awake to markets, plans and quarrels and asleep to the one return that needs no preparation time from Allah's side, only from ours. The verses after this turn to another story, which is left for its own place; this one ends with people standing, awake, on open ground.",
            "bn": "কয়েকজন তাফসীরকার শব্দটিকে জেগে থাকার সঙ্গে জুড়েছেন: এমন জায়গা, যেখানে ভয়ে ঘুম আসে না, এমন মরুপ্রান্তর, যেখানে জেগে থাকা আর শেষ হয় না। পাঠক কথাটাকে এখনকার জন্য প্রশ্ন হিসেবে নিতে পারেন, যখন ঘুম আর জাগরণ এখনো পালা করে আসে। একটা জীবন কেটে যেতে পারে বাজার, পরিকল্পনা আর ঝগড়ায় পুরো সজাগ থেকে, অথচ সেই ফেরার ব্যাপারে ঘুমিয়ে থেকে। আল্লাহর দিক থেকে সে ফেরার জন্য কোনো প্রস্তুতির সময় লাগে না, প্রস্তুতি লাগে শুধু আমাদের দিক থেকে। এর পরের আয়াতগুলো আরেকটি কাহিনিতে যায়, তার আলোচনা তার নিজের জায়গায়। এ আয়াত শেষ হয় খোলা ময়দানে জেগে দাঁড়ানো মানুষ দিয়ে।"
          }
        ]
      }
    ]
  },
  "79:20": {
    "sections": [
      {
        "h": {
          "en": "Proof Follows the Invitation",
          "bn": "দাওয়াতের পরে প্রমাণ"
        },
        "p": [
          {
            "en": "Verse 79:15 opens a story with a question: has the account of Musa (AS) reached you? The abridged English Ibn Kathir reads the whole passage as Allah informing His Messenger ﷺ about Musa, whom He sent to Fir'awn and supported with miracles. In 79:16 to 79:19 the Lord calls Musa in the sacred valley of Tuwa, tells him that Fir'awn has transgressed, and gives him the very words to say: would you purify yourself, and let me guide you to your Lord, so that you fear Him?",
            "bn": "৭৯:১৫ আয়াতে কাহিনিটা শুরু হয় একটি প্রশ্ন দিয়ে: মূসা (আঃ)-এর বৃত্তান্ত কি তোমার কাছে পৌঁছেছে? ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর পুরো অংশটাকে পড়ে এভাবে: আল্লাহ তাঁর রাসূল ﷺ-কে মূসার খবর জানাচ্ছেন, যাঁকে তিনি ফেরাউনের কাছে পাঠিয়েছিলেন আর মুজিযা দিয়ে শক্তি জুগিয়েছিলেন। ৭৯:১৬ থেকে ৭৯:১৯ আয়াতে রব পবিত্র তুয়া প্রান্তরে মূসাকে ডাকেন। জানিয়ে দেন, ফেরাউন সীমা ছাড়িয়েছে। তারপর মুখের কথাগুলোও শিখিয়ে দেন: তুমি কি পবিত্র হতে চাও? আমি কি তোমাকে তোমার রবের পথ দেখাব, যাতে তুমি তাঁকে ভয় কর?"
          },
          {
            "en": "Our verse follows in three Arabic words: fa-arahu al-ayata al-kubra, then he showed him the great sign. In the order of the passage the showing comes after the speaking. Ibn Kathir, in the Arabic, makes the link explicit: Musa made apparent to him, along with this true call, a strong proof and a clear evidence of the truth of what he had brought from Allah. The invitation is spoken first, and the sign arrives beside it, as its support rather than its substitute.",
            "bn": "তারপর আসে আমাদের আয়াত, আরবিতে তিনটি শব্দ: ফা-আরাহুল আয়াতাল কুবরা, অতঃপর তিনি তাকে মহানিদর্শন দেখালেন। অংশটার ক্রম খেয়াল করুন। আগে কথা, তারপর দেখানো। আরবি তাফসীরে ইবন কাসীর যোগসূত্রটা স্পষ্ট করে দেন: এই সত্য দাওয়াতের সঙ্গে মূসা তার সামনে তুলে ধরলেন মজবুত প্রমাণ আর পরিষ্কার দলিল, যা দেখায় যে তিনি আল্লাহর কাছ থেকে যা এনেছেন তা সত্য। দাওয়াত আগে উচ্চারিত হয়, নিদর্শন আসে তার পাশে। নিদর্শন দাওয়াতের জায়গা নেয় না, তাকে মজবুত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Made to See, and What",
          "bn": "দেখানো হলো, কিন্তু কী"
        },
        "p": [
          {
            "en": "Fa-arahu is a verb with its object attached: he showed him. Its root is r-'-y, the root of seeing, so the verse does not say that Fir'awn saw; it says Musa caused him to see. At-Tabari restates the clause with every part named: fa-ara Musa Fir'awna al-ayata al-kubra, Musa showed Fir'awn the great sign. Qatada, in a report at-Tabari carries, says the same thing from the other side: he saw the hand of Musa and his staff.",
            "bn": "ফা-আরাহু হলো কর্মসহ একটি ক্রিয়া: তিনি তাকে দেখালেন। এর ধাতু র-আ-ই, দেখার ধাতু। তাই আয়াত বলছে না যে ফেরাউন দেখল। বলছে, মূসা তাকে দেখালেন। তাবারী বাক্যটা আবার বলেন প্রতিটি অংশের নাম ধরে: ফা-আরা মূসা ফিরআউনাল আয়াতাল কুবরা, মূসা ফেরাউনকে মহানিদর্শন দেখালেন। তাবারীর উদ্ধৃত এক বর্ণনায় কাতাদা একই কথা বলেন উল্টো দিক থেকে: সে মূসার হাত আর তাঁর লাঠি দেখল।"
          },
          {
            "en": "Al-ayata is the sign, and the commentators gloss it with words of evidence. At-Tabari writes al-dalala, the indication, and says what it indicated: that Musa was a messenger whom Allah had sent to him. Al-Qurtubi and al-Muyassar both write al-'alama al-'uzma, the greatest mark, and al-Qurtubi adds wa-hiya al-mu'jiza, and that is the miracle. Ibn Kathir uses two words of argument, hujja and dalil, proof and evidence, both qualified: strong, and clear.",
            "bn": "আল-আয়াতা মানে নিদর্শন। তাফসীরকারেরা এর ব্যাখ্যায় প্রমাণ-বোঝানো শব্দ ব্যবহার করেন। তাবারী লেখেন আদ-দালালা, ইঙ্গিত বা নির্দেশক, আর বলে দেন কীসের নির্দেশক: মূসা এমন এক রাসূল, যাঁকে আল্লাহ তার কাছে পাঠিয়েছেন। কুরতুবী ও মুয়াসসার দুজনেই লেখেন আল-আলামাতুল উজমা, সবচেয়ে বড় চিহ্ন। কুরতুবী যোগ করেন, ওয়া হিয়াল মু'জিযা, আর সেটাই মুজিযা। ইবন কাসীর যুক্তির দুটি শব্দ আনেন, হুজ্জা ও দলিল, প্রমাণ ও সাক্ষ্য। প্রথমটা মজবুত, দ্বিতীয়টা পরিষ্কার।"
          },
          {
            "en": "Al-kubra is a feminine adjective from the root k-b-r, matching the feminine noun it describes. English renderings give great or greatest, and the glosses above keep that height with 'uzma. Together the three words make a short and finished clause: an act, a person on the receiving end, and the thing shown. Who received it is not in doubt, since the passage has already named Fir'awn in 79:17. What exactly was shown is the point where the commentators part.",
            "bn": "আল-কুবরা ক-ব-র ধাতুর বিশেষণ। যে বিশেষ্যের বিশেষণ, সেটি স্ত্রীলিঙ্গ, তাই এটিও স্ত্রীলিঙ্গ। অনুবাদে আসে বড় বা সবচেয়ে বড়, আর ওপরের ব্যাখ্যাগুলো উজমা শব্দে সেই উচ্চতা ধরে রাখে। তিনটি শব্দ মিলে ছোট কিন্তু পূর্ণ এক বাক্য: একটি কাজ, যাকে দেখানো হলো সেই ব্যক্তি, আর যা দেখানো হলো। কাকে দেখানো হলো, তাতে সন্দেহ নেই, কারণ ৭৯:১৭ আয়াতেই ফেরাউনের নাম এসে গেছে। ঠিক কী দেখানো হয়েছিল, সেখানেই তাফসীরকারদের পথ আলাদা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Staff and the Hand Together",
          "bn": "লাঠি আর হাত একসঙ্গে"
        },
        "p": [
          {
            "en": "At-Tabari's own answer names both. That sign, he writes, was the hand of Musa when he drew it out white for the onlookers, and his staff when it turned into a clear serpent, thu'ban mubin. He adds that the people of interpretation said the like, and lists them. Al-Hasan: his hand and his staff. Mujahid, by way of Ibn Abi Najih: his staff and his hand. Qatada, through Sa'id: he saw the hand of Musa and his staff, and they are two signs.",
            "bn": "তাবারী নিজের উত্তরে দুটোরই নাম নেন। তিনি লেখেন, সেই নিদর্শন ছিল মূসার হাত, যখন তিনি তা বের করলেন দর্শকদের চোখে সাদা হয়ে, আর তাঁর লাঠি, যখন তা পরিণত হলো স্পষ্ট অজগরে, সু'বান মুবীন। তিনি জানান, তাফসীরবিদেরাও এমনই বলেছেন, তারপর তাঁদের নাম দেন। হাসান বলেন: তাঁর হাত ও তাঁর লাঠি। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেন: তাঁর লাঠি ও তাঁর হাত। সাঈদের সূত্রে কাতাদা বলেন: সে মূসার হাত ও লাঠি দেখল, আর এ দুটি দুই নিদর্শন।"
          },
          {
            "en": "Qatada appears a second time, through Ma'mar, with the same pair: his staff and his hand. At-Tabari also shows his working on the chain for al-Hasan's report. He writes that the chain stands so in his book, and that he thinks it actually ran through Nuh ibn Qays. It is a small admission, but it is a source telling you where its own record is unsure. The reading does not hang on that chain, since Mujahid and Qatada give the same pair.",
            "bn": "মা'মারের সূত্রে কাতাদাকে আরেকবার পাওয়া যায়, একই জোড়া নিয়ে: তাঁর লাঠি ও তাঁর হাত। হাসানের বর্ণনার সনদ নিয়েও তাবারী নিজের হিসাব খোলাখুলি দেখান। তিনি লেখেন, সনদটা তাঁর কিতাবে এভাবেই আছে, তবে তাঁর ধারণা, আসলে তা এসেছে নূহ ইবন কায়সের মাধ্যমে। স্বীকারোক্তিটা ছোট। তবু এখানে একটি উৎস নিজেই জানিয়ে দিচ্ছে, তার নথির কোন জায়গায় অনিশ্চয়তা আছে। ব্যাখ্যাটা অবশ্য ওই সনদের উপর ঝুলে নেই, কারণ মুজাহিদ ও কাতাদা একই জোড়ার কথা বলেন।"
          },
          {
            "en": "Two shorter works agree. Al-Baghawi gives a single line: and it is the staff and the white hand. Al-Muyassar writes: the greatest mark, the staff and the hand. So at-Tabari, al-Baghawi and al-Muyassar, with al-Hasan, Mujahid and Qatada behind them, take the great sign as both wonders shown together. It is the reading given most often in the texts consulted for this verse. It is not the only reading, and al-Qurtubi's list shows why it cannot simply be declared the answer.",
            "bn": "দুটি সংক্ষিপ্ত তাফসীরও একমত। বাগাভী এক লাইনে বলেন: আর তা হলো লাঠি ও সাদা হাত। মুয়াসসার লেখে: সবচেয়ে বড় চিহ্ন, লাঠি ও হাত। তাহলে তাবারী, বাগাভী ও মুয়াসসার, আর তাঁদের পেছনে হাসান, মুজাহিদ ও কাতাদা, মহানিদর্শন বলতে বোঝেন একসঙ্গে দেখানো দুটি অলৌকিক ঘটনা। এ আয়াতের জন্য আনা তাফসীরগুলোতে এই ব্যাখ্যাই সবচেয়ে বেশিবার এসেছে। তবে এটাই একমাত্র ব্যাখ্যা নয়। কুরতুবীর তালিকা দেখায়, কেন একে সোজাসুজি চূড়ান্ত উত্তর বলে ঘোষণা করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Other Answers Recorded",
          "bn": "নথিতে থাকা অন্য উত্তর"
        },
        "p": [
          {
            "en": "Al-Qurtubi gathers more. After defining the sign as the miracle, he records, as it is said, the staff alone. He then gives a report from ad-Dahhak from Ibn 'Abbas: the great sign, he said, is the staff. Ibn Zayd, in at-Tabari's list, answers with al-'asa wa-l-hayya, the staff and the serpent, which names the staff and what it became and does not mention the hand. On these reports the great sign is the staff in its change.",
            "bn": "কুরতুবী আরও কিছু মত জড়ো করেন। নিদর্শনকে মুজিযা বলে সংজ্ঞা দেওয়ার পর তিনি 'বলা হয়' কথাটি দিয়ে আনেন শুধু লাঠির কথা। তারপর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ)-এর বর্ণনা দেন: মহানিদর্শন হলো লাঠি। তাবারীর তালিকায় ইবন যায়দ উত্তর দেন আল-আসা ওয়াল-হাইয়া, লাঠি ও সাপ। এতে লাঠি আর লাঠি যা হয়ে গেল তার নাম আছে, হাতের উল্লেখ নেই। এই বর্ণনাগুলো অনুযায়ী মহানিদর্শন হলো রূপ বদলে যাওয়া লাঠি।"
          },
          {
            "en": "Al-Qurtubi then records three further views, each introduced only as it is said: that the sign was the white hand, gleaming like the sun; that it was the splitting of the sea; and that al-ayah points to all of his signs and miracles together. He names nobody who held these three, and he does not rank them. Al-Hasan's view, his hand and his staff, also stands in al-Qurtubi's list, so the pair-reading sits there among the rest.",
            "bn": "এরপর কুরতুবী আরও তিনটি মত উল্লেখ করেন, প্রতিটিই শুধু 'বলা হয়' দিয়ে শুরু। প্রথম মত, নিদর্শন ছিল সাদা হাত, যা সূর্যের মতো ঝলমল করত। দ্বিতীয় মত, নিদর্শন ছিল সাগর দুভাগ হওয়া। তৃতীয় মত, আল-আয়াহ শব্দটি তাঁর সব নিদর্শন ও মুজিযার দিকে একসঙ্গে ইঙ্গিত করে। এই তিনটি মত কার, কুরতুবী কারও নাম বলেন না, আর কোনটিকে আগে রাখেন তাও জানান না। হাসানের মত, তাঁর হাত ও তাঁর লাঠি, কুরতুবীর তালিকাতেও আছে। ফলে জোড়ার ব্যাখ্যাটাও সেখানে অন্যগুলোর পাশে জায়গা পেয়েছে।"
          },
          {
            "en": "Ibn Kathir takes a different road and names no object at all. For him the great sign is a strong proof and a clear evidence of the truth of the message, and he leaves it there. This article does the same with the dispute. It reports each reading with its holder, the pair, the staff, the hand, the sea, the whole set, and chooses none of them. The verse itself says only al-ayata al-kubra, and the commentators did not agree on more than that.",
            "bn": "ইবন কাসীর ভিন্ন পথ ধরেন, কোনো বস্তুর নামই নেন না। তাঁর কাছে মহানিদর্শন মানে বার্তার সত্যতার মজবুত প্রমাণ ও পরিষ্কার দলিল। এর বেশি তিনি বলেন না। এ লেখাও বিতর্কটার বেলায় একই কাজ করে। জোড়া, লাঠি, হাত, সাগর, সব নিদর্শন একসঙ্গে, প্রতিটি ব্যাখ্যা তার বক্তার নামসহ জানিয়ে দেয়, কোনোটিকেই বেছে নেয় না। আয়াত নিজে শুধু বলে আল-আয়াতাল কুবরা। এর বেশি কিছুতে তাফসীরকারেরা একমত হননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Singular Word for Several",
          "bn": "একবচনে একাধিক নিদর্শন"
        },
        "p": [
          {
            "en": "Qatada's phrase raises a question that the grammar invites. The verse says al-ayah, the sign, in the singular, yet Qatada says of the hand and the staff, wa-huma ayatan, and they are two signs. As-Sa'di meets the tension directly. Al-ayata al-kubra, he writes, means the genus of the great sign, jins al-ayah, and so it does not conflict with there being more than a single sign. On his reading the noun names a kind, and the kind can have several members.",
            "bn": "কাতাদার কথায় একটা প্রশ্ন জাগে, যা ব্যাকরণই সামনে আনে। আয়াতে আল-আয়াহ, নিদর্শন, একবচনে। অথচ হাত ও লাঠি সম্পর্কে কাতাদা বলেন, ওয়া হুমা আয়াতান, আর এ দুটি দুই নিদর্শন। সা'দী সরাসরি এর মীমাংসা করেন। তিনি লেখেন, আল-আয়াতাল কুবরা মানে মহানিদর্শনের শ্রেণি, জিনসুল আয়াহ। তাই নিদর্শন একাধিক হলেও তাতে কোনো বিরোধ নেই। তাঁর ব্যাখ্যায় শব্দটি একটি শ্রেণির নাম, আর সেই শ্রেণিতে কয়েকটি সদস্য থাকতে পারে।"
          },
          {
            "en": "As-Sa'di then quotes, without comment of his own, the words: so he threw his staff, and at once it was a clear serpent; and he drew out his hand, and at once it was white for the onlookers. Those words stand, letter for letter, at 7:107 and 7:108, and again at 26:32 and 26:33. Rather than describe the sign himself, he lets those verses say what it consisted of, and at-Tabari's gloss above uses the same phrases.",
            "bn": "এরপর সা'দী নিজের কোনো মন্তব্য ছাড়াই উদ্ধৃত করেন: অতঃপর তিনি তাঁর লাঠি ফেললেন, আর সঙ্গে সঙ্গে তা হয়ে গেল স্পষ্ট অজগর। আর তিনি তাঁর হাত বের করলেন, আর সঙ্গে সঙ্গে তা দর্শকদের চোখে সাদা। হুবহু এই শব্দগুলো আছে ৭:১০৭ ও ৭:১০৮ আয়াতে, আবার ২৬:৩২ ও ২৬:৩৩ আয়াতে। নিদর্শনটা কেমন ছিল, তা নিজে বর্ণনা না করে তিনি ওই আয়াতগুলোকেই বলতে দেন। ওপরে তাবারীর ব্যাখ্যাতেও একই শব্দবন্ধ এসেছে।"
          },
          {
            "en": "The staff and the hand themselves are treated at length elsewhere in this collection, and this article does not repeat that work. The reflection on 20:22 follows the hand and the words another sign; 27:12 takes up the nine signs and the lists of what they were; 28:32 reads the pair as two proofs for Fir'awn and his chiefs; and 26:34 watches the court rename the sign as magic. Those pages carry the description, and this page stays with the phrase that sums it up.",
            "bn": "লাঠি ও হাত নিয়ে এ সংকলনের অন্য জায়গায় বিস্তারিত আলোচনা আছে, এ লেখা সেটার পুনরাবৃত্তি করে না। ২০:২২ আয়াতের আলোচনা হাত আর 'আরেকটি নিদর্শন' কথাটার পিছু নেয়। ২৭:১২ আয়াতের আলোচনায় আছে নয়টি নিদর্শন আর সেগুলো কী কী, তা নিয়ে নানা তালিকা। ২৮:৩২ আয়াতের আলোচনা জোড়াটাকে পড়ে ফেরাউন ও তার সভাসদদের জন্য দুটি প্রমাণ হিসেবে। আর ২৬:৩৪ আয়াতের আলোচনায় দেখা যায়, দরবার নিদর্শনটাকে জাদু নাম দিচ্ছে। বর্ণনার কাজটা ওই লেখাগুলোর। এ লেখা থাকে সেই শব্দবন্ধের কাছে, যা পুরোটাকে এক কথায় ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hadith Here, No Verdict",
          "bn": "হাদিস নেই, রায়ও নেই"
        },
        "p": [
          {
            "en": "On the Sunnah the record here is short. None of the tafsirs consulted for this verse attaches a hadith of the Prophet ﷺ to it. The reports at-Tabari and al-Qurtubi carry, from Ibn 'Abbas, al-Hasan, Mujahid, Qatada and Ibn Zayd, are early explanations of a phrase, and they are given here as such, not as narrations from the Prophet ﷺ. No occasion of revelation is given for the verse either; it stands inside a story told in sequence, from 79:15 onward.",
            "bn": "সুন্নাহর দিক থেকে এখানে বলার কথা কম। এ আয়াতের যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি। তাবারী ও কুরতুবী ইবন আব্বাস (রাঃ), হাসান, মুজাহিদ, কাতাদা ও ইবন যায়দ থেকে যে বর্ণনাগুলো এনেছেন, সেগুলো একটা শব্দবন্ধের প্রাচীন ব্যাখ্যা। এখানেও সেগুলো ব্যাখ্যা হিসেবেই রাখা হয়েছে, নবী ﷺ-এর বাণী হিসেবে নয়। আয়াতটির কোনো শানে নুযূলও উল্লেখ নেই। ৭৯:১৫ থেকে ধারাবাহিকভাবে যে কাহিনি চলছে, আয়াতটি তারই অংশ।"
          },
          {
            "en": "Fir'awn is named in this passage as a man who transgressed (79:17), and here he is shown proof. The verse speaks only of what it names: a ruler of a past age, an invitation, and a sign. It licenses nothing against any living person or community, and it gives nobody the standing to cast a present-day ruler, people or opponent as Fir'awn and treat them accordingly. Whatever it teaches about meeting a clear proof, it teaches the reader first.",
            "bn": "এ অংশে ফেরাউনের নাম এসেছে সীমালঙ্ঘনকারী হিসেবে (৭৯:১৭), আর এখানে তাকে প্রমাণ দেখানো হচ্ছে। আয়াতে যা আছে, আয়াত সেটুকুই বলে: অতীত যুগের এক শাসক, একটি দাওয়াত, একটি নিদর্শন। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। বর্তমানের কোনো শাসক, জাতি বা প্রতিপক্ষকে ফেরাউন সাজিয়ে তার সঙ্গে সেই আচরণ করার অধিকারও কাউকে দেয় না। স্পষ্ট প্রমাণের সামনে দাঁড়ানো নিয়ে এ আয়াত যা শেখায়, তা আগে পাঠকের নিজের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Shown, Then Left to Answer",
          "bn": "দেখানো শেষ, জবাব বাকি"
        },
        "p": [
          {
            "en": "Set the commentators' agreement beside their disagreement and a lesson comes into focus. They differ over which wonder the sign was. They do not differ over what it was for. At-Tabari: an indication that Musa (AS) was a messenger sent to him. Ibn Kathir: proof of the truth of what he brought from Allah. Al-Qurtubi: the mark that is the miracle. Whatever its form, the sign served the message spoken in 79:18 and 79:19, and it did not take that message's place.",
            "bn": "তাফসীরকারদের মতভেদ আর ঐকমত্য পাশাপাশি রাখলে একটা শিক্ষা পরিষ্কার হয়ে ওঠে। নিদর্শনটা কোন অলৌকিক ঘটনা ছিল, তা নিয়ে তাঁদের মত আলাদা। কিন্তু নিদর্শনটা কিসের জন্য, তা নিয়ে কোনো মতভেদ নেই। তাবারী বলেন, এটা ছিল এই ইঙ্গিত যে মূসা (আঃ) তার কাছে পাঠানো রাসূল। ইবন কাসীর বলেন, তিনি আল্লাহর কাছ থেকে যা এনেছেন, এটা তার সত্যতার প্রমাণ। কুরতুবী বলেন, এটা সেই চিহ্ন, যাকে মুজিযা বলে। রূপ যা-ই হোক, নিদর্শনটা কাজ করেছে ৭৯:১৮ ও ৭৯:১৯ আয়াতে বলা বার্তার পক্ষে, বার্তার জায়গা নিয়ে নেয়নি।"
          },
          {
            "en": "Notice the order of the passage once more. The words came first: an offer to purify himself, and an offer of guidance to his Lord, so that he would fear Him. Only after that does the verse bring the sign. In this telling Musa (AS) does not open with a wonder meant to overawe a king. He opens with an invitation, and the wonder follows as its witness. Ibn Kathir's phrase, along with this true call, keeps the two together.",
            "bn": "অংশটার ক্রম আরেকবার খেয়াল করুন। আগে এসেছে কথা: নিজেকে পবিত্র করার প্রস্তাব, আর রবের পথ দেখানোর প্রস্তাব, যাতে সে তাঁকে ভয় করে। নিদর্শনের কথা আয়াত তোলে এর পরে গিয়ে। এই বর্ণনায় মূসা (আঃ) রাজাকে ভড়কে দেওয়ার মতো কোনো অলৌকিক কাণ্ড দিয়ে শুরু করেন না। শুরু করেন দাওয়াত দিয়ে, আর অলৌকিক ঘটনা আসে তার সাক্ষী হয়ে। ইবন কাসীরের কথাটা, 'এই সত্য দাওয়াতের সঙ্গে', দুটিকে একসঙ্গে বেঁধে রাখে।"
          },
          {
            "en": "The verb tells the rest. Arahu: he made him see. Showing reaches as far as the eyes, and what the heart does with what it sees is not part of the showing. What Fir'awn did next belongs to 79:21 and its own reflection. This verse stops at the moment of full disclosure, when the great sign has been seen and no reply has yet been given. For a reader that is the moment worth recognising: something clear stands in front of you, and the answer is still yours to give.",
            "bn": "বাকিটা বলে দেয় ক্রিয়াটি। আরাহু: তিনি তাকে দেখালেন। দেখানোর সীমা চোখ পর্যন্ত। যা দেখা হলো, হৃদয় তা নিয়ে কী করবে, সেটা দেখানোর অংশ নয়। এরপর ফেরাউন কী করল, সে কথা ৭৯:২১ আয়াতের, আর তার আলোচনাও সেখানেই। এ আয়াত থেমে যায় সেই মুহূর্তে, যখন সবকিছু পুরোপুরি সামনে চলে এসেছে। মহানিদর্শন দেখা হয়ে গেছে, অথচ জবাব তখনো আসেনি। পাঠকের জন্য এই মুহূর্তটা চিনে রাখার মতো: স্পষ্ট কিছু আপনার সামনে দাঁড়িয়ে আছে, আর জবাব দেওয়ার ভার এখনো আপনারই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Beside the Great Sign",
          "bn": "মহানিদর্শনের পাশে কয়েকটি প্রশ্ন"
        },
        "p": [
          {
            "en": "A few questions to carry from the verse. What have I already been shown, in revelation, in my own life, in a conscience that keeps pointing the same way, that I still treat as not quite enough? When I ask for more proof, is the proof really lacking, or would acting on it cost me something I do not want to lose? And when I bring a truth to someone else, do I begin as this passage does, with an invitation, or with the argument I hope will win?",
            "bn": "আয়াত থেকে কয়েকটি প্রশ্ন সঙ্গে নেওয়া যায়। ওহিতে, নিজের জীবনে, বারবার একই দিকে ইশারা করা বিবেকে আমাকে ইতিমধ্যে কী দেখানো হয়েছে, অথচ আমি এখনো তাকে যথেষ্ট মনে করি না? আমি যখন আরও প্রমাণ চাই, তখন কি সত্যিই প্রমাণের ঘাটতি থাকে, নাকি সে অনুযায়ী চললে এমন কিছু হারাতে হবে, যা আমি হারাতে চাই না? আর অন্য কাউকে সত্যের কথা বলতে গেলে আমি কি এই অংশের মতো দাওয়াত দিয়ে শুরু করি, নাকি সেই যুক্তি দিয়ে, যেটা দিয়ে জিতব বলে আশা করি?"
          },
          {
            "en": "The last question is about how we read. The commentators consulted here left their disagreement standing, side by side and with names attached, and did not force it into a single answer. When the scholars differ over a detail, can I do the same, holding each view where it was found? The verse gives no supplication of its own, so the asking can be plain: that whatever clear thing I have been shown, I may answer it while I still stand in front of it.",
            "bn": "শেষ প্রশ্নটা আমাদের পড়ার ধরন নিয়ে। এখানে আনা তাফসীরকারেরা নিজেদের মতভেদ নামসহ পাশাপাশি রেখে দিয়েছেন, জোর করে একটিমাত্র উত্তরে নামিয়ে আনেননি। কোনো খুঁটিনাটি নিয়ে আলেমদের মধ্যে মতভেদ হলে আমিও কি তা-ই পারি, প্রতিটি মত যেখানে পেয়েছি, সেখানেই রেখে দিতে? আয়াতে নিজস্ব কোনো দোয়া নেই। তাই চাওয়াটা সরল হতে পারে: যে স্পষ্ট জিনিসই আমাকে দেখানো হোক, তার সামনে দাঁড়িয়ে থাকতে থাকতেই যেন তার জবাব দিতে পারি।"
          }
        ]
      }
    ]
  },
  "79:25": {
    "sections": [
      {
        "h": {
          "en": "Five Words After a Boast",
          "bn": "দম্ভের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "The story that opened at 79:15 with a question, has the account of Musa (AS) reached you, arrives here at its verdict. Pharaoh was shown the great sign; he denied and disobeyed, turned his back striving, gathered his people and called out, and then he said: I am your lord most high (79:24). The next verse is five Arabic words: fa-akhadhahu llahu nakala al-akhirati wa-l-ula. It opens with fa, and so, setting the seizing directly after the proclamation, with nothing in between.",
            "bn": "৭৯:১৫ আয়াতে কাহিনি শুরু হয়েছিল একটি প্রশ্ন দিয়ে: মূসা (আঃ)-এর বৃত্তান্ত কি আপনার কাছে পৌঁছেছে? এখানে এসে সেই কাহিনি তার রায়ে পৌঁছায়। ফেরাউনকে বড় নিদর্শন দেখানো হলো। সে মিথ্যা বলে উড়িয়ে দিল, অমান্য করল, পিঠ ফিরিয়ে তৎপর হলো, লোকজন জড়ো করে ঘোষণা দিল। তারপর বলল, আমিই তোমাদের সর্বশ্রেষ্ঠ রব (৭৯:২৪)। পরের আয়াতটি আরবিতে পাঁচটি শব্দ: ফাআখাযাহুল্লাহু নাকালাল আখিরাতি ওয়াল উলা। শুরুতেই ফা, অর্থাৎ অতঃপর। ঘোষণার ঠিক পরেই পাকড়াওয়ের কথা, মাঝখানে আর কিছু নেই।"
          },
          {
            "en": "Three things in those five words need reading. Allah is named as the one who seized. The seizing is called nakal, an exemplary punishment. And the pair al-akhira wa-l-ula, the last and the first, is left without a noun to say last and first of what. The translations shown with this verse have already chosen: the English one adds a bracketed transgression, and the Bengali one renders the pair as the Hereafter and this world. The commentators record both choices, and more besides.",
            "bn": "এই পাঁচ শব্দের তিনটি জিনিস মন দিয়ে পড়ার মতো। যিনি পাকড়াও করলেন, তাঁর নাম স্পষ্ট বলা আছে: আল্লাহ। পাকড়াওটার নাম নাকাল, অর্থাৎ দৃষ্টান্তমূলক শাস্তি। আর আল-আখিরা ওয়াল-উলা, শেষটি ও প্রথমটি, এই জোড়ার পরে কোনো বিশেষ্য নেই। কিসের শেষ আর কিসের প্রথম, আয়াত তা বলে না। এই আয়াতের সঙ্গে দেখানো অনুবাদ দুটি আগেই একটা পথ বেছে নিয়েছে। ইংরেজি অনুবাদ বন্ধনীতে সীমালঙ্ঘন শব্দটি যোগ করেছে, আর বাংলা অনুবাদ জোড়াটিকে পড়েছে আখেরাত ও দুনিয়া হিসেবে। তাফসীরকারেরা দুটি পাঠই লিখে রেখেছেন, সঙ্গে আরও কয়েকটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Seized, and Held Up to Others",
          "bn": "পাকড়াও, অন্যদের সামনে নজির"
        },
        "p": [
          {
            "en": "At-Tabari glosses fa-akhadhahu llahu in two words: fa-'aqabahu llah, so Allah punished him. Ibn Kathir gives the purpose: Allah took retribution on him, a retribution by which He made him a lesson and a deterrent for the defiant like him in this world. The Muyassar repeats nearly the same phrase, that Allah made him a lesson and a deterrent for those like him among the defiant. In both, the seizing is aimed past Pharaoh at whoever hears of it.",
            "bn": "ফাআখাযাহুল্লাহুর ব্যাখ্যা তাবারী দেন দুই শব্দে: ফাআকাবাহুল্লাহ, অর্থাৎ আল্লাহ তাকে শাস্তি দিলেন। উদ্দেশ্যটা বলেন ইবন কাসীর। আল্লাহ তার থেকে এমন প্রতিশোধ নিলেন, যা দিয়ে তাকে দুনিয়ায় তার মতো অবাধ্য লোকদের জন্য শিক্ষা আর সতর্কবার্তা বানিয়ে দিলেন। মুয়াসসারও প্রায় একই কথা বলে: আল্লাহ তাকে তার মতো উদ্ধতদের জন্য শিক্ষা ও সতর্কবার্তা বানিয়েছেন। দুই জায়গাতেই পাকড়াওয়ের লক্ষ্য ফেরাউনকে ছাড়িয়ে আরও দূরে যায়, যে-ই এ কাহিনি শোনে তার কাছে।"
          },
          {
            "en": "Al-Qurtubi defines the word: nakal is a name for what is made an example to others, a punishment for one person so that another takes warning by it. One says nakkala fulan bi-fulan when a man punishes another severely. The word comes from holding back; from it come nukul, drawing back from an oath, and nikl, a shackle. Ma'arif al-Qur'an calls nakal a punishment severe enough to deter others from the same offence. The root itself is treated in the reflection on 2:66.",
            "bn": "কুরতুবী শব্দটির সংজ্ঞা দেন। নাকাল হলো এমন কিছুর নাম, যা অন্যদের জন্য দৃষ্টান্ত বানানো হয়: একজনকে শাস্তি, যাতে আরেকজন তা দেখে সাবধান হয়। আরবরা বলে নাক্কালা ফুলানুন বিফুলান, যখন কেউ কাউকে কঠোর শাস্তি দেয়। শব্দটির মূলে আছে বিরত থাকার অর্থ। এখান থেকেই নুকূল, মানে কসম থেকে পিছিয়ে যাওয়া, আর নিকল, মানে শিকল। মাআরিফুল কুরআনের ভাষায় নাকাল এমন কঠিন শাস্তি, যা অন্যদের একই অপরাধ থেকে ফিরিয়ে রাখে। শব্দমূল নিয়ে কথা আছে ২:৬৬ আয়াতের আলোচনায়।"
          },
          {
            "en": "Al-Qurtubi also asks why nakal stands in the accusative, and records three answers. Az-Zajjaj makes it an emphatic verbal noun: Allah seized him means Allah made an example of him, so nakal takes the place of a verbal noun drawn from the verb's meaning, not its letters. Others say a preposition has dropped: He seized him with the punishment of the last and the first. Al-Farra' reads it as a seizing that was an example, that is, for the sake of example. Each keeps the seizing and the lesson as one act.",
            "bn": "নাকাল শব্দটি কেন নসব অবস্থায়, কুরতুবী সে প্রশ্নও তোলেন এবং তিনটি জবাব লিখে রাখেন। যাজ্জাজের মতে এটি জোর দেওয়ার জন্য আসা মাসদার। আল্লাহ তাকে পাকড়াও করলেন মানে আল্লাহ তাকে দৃষ্টান্ত বানালেন। তাই নাকাল এমন এক মাসদারের জায়গায় বসেছে, যা ক্রিয়ার অর্থ থেকে এসেছে, তার অক্ষর থেকে নয়। কেউ বলেন, এখানে একটি অব্যয় বাদ পড়েছে: তিনি তাকে শেষ ও প্রথমের শাস্তি দিয়ে পাকড়াও করলেন। ফাররার পাঠে এটি এমন পাকড়াও, যা দৃষ্টান্ত হওয়ার জন্যই। তিন ব্যাখ্যাতেই পাকড়াও আর শিক্ষা একই কাজের দুই দিক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sea, Then the Fire",
          "bn": "আগে সাগর, পরে আগুন"
        },
        "p": [
          {
            "en": "The first reading takes the last and the first as two worlds. At-Tabari records al-Hasan saying simply: this world and the next. Through Qatadah from al-Hasan he records: the punishment of this world and the next, and adds that this is Qatadah's own view. Al-Baghawi gives the same two names and spells it out: Allah punished him and made him an example of the last and the first, in this world by drowning and in the next by the Fire. Al-Qurtubi attributes it to Qatadah and others: the first is that He drowned him, the last the punishment to come.",
            "bn": "প্রথম পাঠে শেষ ও প্রথম মানে দুই জগৎ। তাবারী হাসানের কথা লিখেছেন সংক্ষেপে: দুনিয়া ও আখিরাত। কাতাদার সূত্রে হাসান থেকে তিনি আরও লিখেছেন: দুনিয়া ও আখিরাতের শাস্তি। সঙ্গে জানিয়েছেন, এটি কাতাদার নিজেরও মত। বাগাভী একই দুই নাম উল্লেখ করে কথাটা খুলে বলেন। আল্লাহ তাকে শাস্তি দিলেন এবং শেষ ও প্রথমের দৃষ্টান্ত বানালেন: দুনিয়ায় ডুবিয়ে, আখিরাতে আগুন দিয়ে। কুরতুবী মতটি কাতাদা ও অন্যদের নামে উল্লেখ করেন। প্রথমটি হলো তাকে ডুবিয়ে মারা, আর শেষটি হলো আখিরাতের শাস্তি।"
          },
          {
            "en": "At-Tabari also preserves Ibn Zayd's note that people differed here, and Ibn Zayd's wording of this side: the punishment of this world and of the next, Allah hastening the drowning for him along with the punishment He had prepared for him in the Hereafter. Ma'arif al-Qur'an reads it the same way: the punishment of the akhira is what awaits Pharaoh, and that of the ula is the drowning that destroyed him and his army. The Muyassar and as-Sa'di also speak only of this world and the next.",
            "bn": "ইবন যায়দের একটি মন্তব্যও তাবারী সংরক্ষণ করেছেন: এখানে লোকেরা মতভেদ করেছে। এই পক্ষের কথাটা ইবন যায়দ বলেন এভাবে: দুনিয়ার শাস্তি আর আখিরাতের শাস্তি। আল্লাহ তার জন্য ডুবে মরাটা আগেভাগে দিলেন, আর আখিরাতের শাস্তি তো তার জন্য তৈরি রেখেছেন। মাআরিফুল কুরআনও একইভাবে পড়ে। আখিরার শাস্তি ফেরাউনের সামনে অপেক্ষা করছে, আর উলার শাস্তি হলো সেই ডুবে মরা, যাতে সে ও তার বাহিনী ধ্বংস হলো। মুয়াসসার আর সা'দীও শুধু দুনিয়া ও আখিরাতের কথাই বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Sayings, Forty Years Apart",
          "bn": "দুই উক্তি, মাঝে চল্লিশ বছর"
        },
        "p": [
          {
            "en": "The second reading takes the last and the first as two things Pharaoh said. At-Tabari opens his comment with it: the punishment of the last of his two sayings, I am your lord most high, and of the first, I know of no god for you other than me. He adds that the people of interpretation said the like. The first saying is in 28:38, spoken to his chiefs, and al-Baghawi gives that place for it; the last is 79:24, the verse just before this.",
            "bn": "দ্বিতীয় পাঠে শেষ ও প্রথম মানে ফেরাউনের মুখের দুটি কথা। তাবারী তাঁর আলোচনা এ পাঠ দিয়েই শুরু করেন। শাস্তি তার দুই উক্তির শেষটির জন্য, আমিই তোমাদের সর্বশ্রেষ্ঠ রব। আর প্রথমটির জন্য, আমি ছাড়া তোমাদের আর কোনো ইলাহ আছে বলে আমি জানি না। তিনি যোগ করেন, তাফসীরবিদেরাও এমনই বলেছেন। প্রথম কথাটি আছে ২৮:৩৮ আয়াতে, সভাসদদের উদ্দেশে বলা। বাগাভী কথাটির ঠিকানা হিসেবে সূরা কাসাসের ওই আয়াতই দেখান। শেষ কথাটি ৭৯:২৪ আয়াতে, ঠিক এর আগের আয়াতে।"
          },
          {
            "en": "At-Tabari gives the reports behind it. Through one chain Ibn Abbas says: as for the first, it was when he said I know of no god for you other than me, and as for the last, when he said I am your lord most high. He records the same from Mujahid, from ash-Sha'bi and from ad-Dahhak, who adds: so Allah seized him for both his sayings together, and drowned him in the sea. Al-Qurtubi names Ibn Abbas, Mujahid and 'Ikrimah for this reading.",
            "bn": "এর পেছনের বর্ণনাগুলো তাবারী উল্লেখ করেন। এক সনদে ইবন আব্বাস বলেন: প্রথমটি তখন, যখন সে বলেছিল, আমি ছাড়া তোমাদের আর কোনো ইলাহ আছে বলে আমি জানি না। আর শেষটি তখন, যখন বলেছিল, আমিই তোমাদের সর্বশ্রেষ্ঠ রব। একই কথা তিনি লিখেছেন মুজাহিদ, শা'বী আর দাহহাক থেকে। দাহহাক আরও বলেন, আল্লাহ তাকে তার দুটি কথার জন্যই একসঙ্গে পাকড়াও করলেন এবং সাগরে ডুবিয়ে দিলেন। কুরতুবী এই পাঠের জন্য ইবন আব্বাস, মুজাহিদ ও ইকরিমার নাম নেন।"
          },
          {
            "en": "Then the interval. At-Tabari records that there were forty years between the two sayings, through a chain that reaches Ibn Abbas, and again from Mujahid, from ash-Sha'bi and from Khaythamah al-Ju'fi. Another report from Mujahid says Pharaoh remained among his people forty years after saying I am your lord most high. Al-Qurtubi attributes the forty years to Ibn Abbas, al-Baghawi to Mujahid and a group of commentators. Al-Qurtubi draws the sense: He gave him respite at the first, then seized him at the last, punishing him for both sayings.",
            "bn": "এরপর দুই কথার মাঝের সময়। তাবারী লিখেছেন, দুটি উক্তির মাঝে ছিল চল্লিশ বছর। একটি সনদ ইবন আব্বাস পর্যন্ত পৌঁছেছে। একই কথা এসেছে মুজাহিদ, শা'বী ও খায়সামা জু'ফী থেকেও। মুজাহিদের আরেক বর্ণনা বলে, আমিই তোমাদের সর্বশ্রেষ্ঠ রব বলার পরেও ফেরাউন চল্লিশ বছর নিজের লোকদের মধ্যে টিকে ছিল। কুরতুবী চল্লিশ বছরের কথা ইবন আব্বাসের নামে বলেন, বাগাভী বলেন মুজাহিদ ও একদল মুফাসসিরের নামে। অর্থটা কুরতুবী এভাবে টানেন: প্রথমবারে তাকে অবকাশ দিলেন, তারপর শেষবারে পাকড়াও করলেন, শাস্তি দিলেন দুটি কথার জন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Denial First, or First Deeds",
          "bn": "আগে অস্বীকার, নাকি প্রথম আমল"
        },
        "p": [
          {
            "en": "Two smaller readings sit beside these. Abu Razin, in at-Tabari, says the first is his denial and disobedience and the last is his saying I am your lord most high; then he recited 79:21 to 79:24, he denied and disobeyed, then turned his back striving, gathered and called out, and said I am your lord most high, and concluded: so that is the last word. Al-Qurtubi reports a similar reading from Qatadah too, the last being that saying and the first his denial of Musa (AS).",
            "bn": "এ দুই পাঠের পাশে আরও দুটি ছোট পাঠ আছে। তাবারীর বর্ণনায় আবু রাযীন বলেন, প্রথমটি তার মিথ্যা বলে উড়িয়ে দেওয়া আর অমান্য করা। শেষটি তার কথা, আমিই তোমাদের সর্বশ্রেষ্ঠ রব। তারপর তিনি ৭৯:২১ থেকে ৭৯:২৪ পর্যন্ত তিলাওয়াত করেন: সে মিথ্যা বলল ও অমান্য করল, তারপর পিঠ ফিরিয়ে তৎপর হলো, জড়ো করল ও ঘোষণা দিল, আর বলল, আমিই তোমাদের সর্বশ্রেষ্ঠ রব। শেষে বলেন, এটাই শেষ কথা। কুরতুবী কাতাদা থেকেও এমন একটি পাঠ জানান: শেষটি ওই উক্তি, আর প্রথমটি মূসা (আঃ)-কে মিথ্যা বলা।"
          },
          {
            "en": "The other reading is Mujahid's, through Mansur in at-Tabari: the first of his deeds and the last; in another wording, the first of his acts and the last of them, and elsewhere, his deeds for the last and the first. Al-Qurtubi's text gives Mujahid's words as the punishment of the start of his life and its end. Ibn Kathir lists his two sayings, and his disbelief and disobedience, under the words it was said. Mujahid stands behind more than a single reading, and Qatadah behind two in al-Qurtubi.",
            "bn": "অন্য পাঠটি মুজাহিদের, তাবারীতে মানসূরের সূত্রে: তার আমলের প্রথমটি ও শেষটি। অন্য বর্ণনায় শব্দগুলো তার কাজের প্রথম ও শেষ, আরেক জায়গায় শেষ ও প্রথমের জন্য তার আমল। কুরতুবীর পাঠে মুজাহিদের কথাটি এসেছে এভাবে: তার জীবনের শুরু ও শেষের শাস্তি। ইবন কাসীর তার দুটি উক্তি এবং তার কুফর ও অবাধ্যতা, এই দুই মতই 'বলা হয়' শব্দ দিয়ে উল্লেখ করেন। লক্ষ করার মতো, মুজাহিদের নাম একাধিক পাঠের পেছনে আছে, আর কুরতুবীতে কাতাদার নাম আছে দুটির পেছনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Each Commentator Lands",
          "bn": "কে কোন পাঠে থামেন"
        },
        "p": [
          {
            "en": "The commentators do not settle in the same place. At-Tabari leads with the two sayings, presents that reading as what the people of interpretation said, and records the others under the words others said. Ibn Kathir goes the other way and says so outright: this is the correct meaning of the verse, that the last and the first are this world and the next. After listing the alternatives he closes: the correct reading, in which there is no doubt, is the first.",
            "bn": "তাফসীরকারেরা সবাই এক জায়গায় থামেন না। তাবারী শুরু করেন দুই উক্তির পাঠ দিয়ে, সেটিকে তাফসীরবিদদের মত বলে পেশ করেন, আর বাকিগুলো আনেন 'অন্যরা বলেছেন' বলে। ইবন কাসীর যান উল্টো দিকে, আর তা খোলাখুলিই বলেন। তাঁর মতে আয়াতের সঠিক অর্থ এটাই: শেষ ও প্রথম মানে দুনিয়া ও আখিরাত। অন্য মতগুলো উল্লেখ করার পর তিনি শেষ করেন এই বলে: নিঃসন্দেহে সঠিক হলো প্রথমটিই।"
          },
          {
            "en": "Al-Qurtubi opens with the two sayings under Ibn Abbas, Mujahid and 'Ikrimah, and brings the drowning reading after it with the words it was said. Al-Baghawi puts al-Hasan and Qatadah's reading first and Mujahid's second, without a verdict. As-Sa'di, the Muyassar and Ma'arif al-Qur'an give only the two worlds. Both main readings are attested by name, and the verse's five words carry either. This reflection reports the disagreement as the sources keep it and does not choose between them.",
            "bn": "কুরতুবী শুরু করেন দুই উক্তির পাঠ দিয়ে, ইবন আব্বাস, মুজাহিদ ও ইকরিমার নামে। ডুবে মরার পাঠ আনেন পরে, 'বলা হয়েছে' শব্দ দিয়ে। বাগাভী হাসান ও কাতাদার পাঠ আগে রাখেন, মুজাহিদেরটি পরে, কোনো রায় না দিয়েই। সা'দী, মুয়াসসার ও মাআরিফুল কুরআন শুধু দুই জগতের কথা বলেন। দুটি প্রধান পাঠই নাম ধরে বর্ণিত, আর আয়াতের পাঁচটি শব্দ দুটিকেই ধারণ করতে পারে। মতভেদটা উৎসে যেভাবে আছে, এ লেখা সেভাবেই তুলে ধরে। কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses Ibn Kathir Sets Beside It",
          "bn": "ইবন কাসীর পাশে যে আয়াত রাখেন"
        },
        "p": [
          {
            "en": "Ibn Kathir supports his reading with two verses that pair this world and the Day. Of Pharaoh's people, 11:99: they were followed by a curse in this world and on the Day of Resurrection; evil is the gift that is given. And 28:41: We made them leaders who call to the Fire, and on the Day of Resurrection they will not be helped. Both have the same shape as the two-worlds reading, a penalty begun here and completed there.",
            "bn": "ইবন কাসীর নিজের পাঠের পক্ষে দুটি আয়াত আনেন, যেখানে দুনিয়া আর কিয়ামতের দিন পাশাপাশি এসেছে। ফেরাউনের লোকদের সম্পর্কে ১১:৯৯ বলে, এ দুনিয়ায় লানত তাদের পিছু নিয়েছে, কিয়ামতের দিনেও। কত নিকৃষ্ট সেই উপহার, যা তাদের দেওয়া হবে! আর ২৮:৪১ বলে, আমি তাদের এমন নেতা বানিয়েছিলাম, যারা আগুনের দিকে ডাকে, আর কিয়ামতের দিন তাদের কোনো সাহায্য করা হবে না। দুটির গড়নই দুই জগতের পাঠের মতো: শাস্তির শুরু এখানে, পূর্ণতা ওখানে।"
          },
          {
            "en": "These neighbours are already written up, so this reflection points to them by number rather than rebuilding them. The reflection on 28:41 and 28:42 sets out how Qatadah reads that passage as the twin of 11:99. The reflection on 10:92 already cites 79:25 beside the body brought up from the sea, a case made public. The drowning itself is told in the reflection on 26:66. The first saying, in 28:38, needs nothing more here than its place, which al-Baghawi supplies.",
            "bn": "এসব প্রতিবেশী আয়াত নিয়ে আগেই লেখা হয়েছে। তাই এখানে সেগুলো নতুন করে না সাজিয়ে আয়াত নম্বর ধরে দেখিয়ে দেওয়াই যথেষ্ট। কাতাদা কীভাবে ওই অংশকে ১১:৯৯ আয়াতের জোড়া হিসেবে পড়েন, তা আছে ২৮:৪১ ও ২৮:৪২ আয়াতের আলোচনায়। ১০:৯২ আয়াতের আলোচনায় সাগর থেকে তুলে আনা দেহের পাশেই ৭৯:২৫ আয়াতের উল্লেখ আছে, সবার সামনে রাখা এক নজির হিসেবে। ডুবে মরার ঘটনা বলা আছে ২৬:৬৬ আয়াতের আলোচনায়। আর ২৮:৩৮ আয়াতের প্রথম উক্তিটির জন্য এখানে শুধু ঠিকানাই দরকার, যা বাগাভী দিয়েছেন।"
          },
          {
            "en": "On narration, a short and plain answer. None of the commentaries consulted for this verse attaches a hadith of the Prophet ﷺ to it, so this reflection quotes none. The reports above, including the forty years, are the words of Companions and Successors as at-Tabari, al-Qurtubi and al-Baghawi transmit them, and they are reported here as theirs. No circumstance of revelation is given for the verse in these sources; its setting is simply its place, closing the story of Musa (AS) that began at 79:15.",
            "bn": "বর্ণনার প্রশ্নে জবাবটা ছোট ও সোজা। এই আয়াতের যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি। তাই এ লেখাতেও কোনো হাদিস উদ্ধৃত হয়নি। ওপরের বর্ণনাগুলো, চল্লিশ বছরের কথাসহ, সাহাবী ও তাবেঈদের কথা, তাবারী, কুরতুবী ও বাগাভী যেভাবে পৌঁছে দিয়েছেন। এখানেও সেগুলো তাঁদের কথা হিসেবেই আনা হলো। এই উৎসগুলোতে আয়াতটি নাজিলের কোনো প্রেক্ষাপট বলা নেই। এর প্রেক্ষাপট হলো এর অবস্থান: ৭৯:১৫ আয়াতে শুরু হওয়া মূসা (আঃ)-এর কাহিনির সমাপ্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "One Ruler, and No Licence",
          "bn": "এক শাসক, কোনো ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. Pharaoh is named in this story at 79:17, and the verse speaks only of what it names: one ruler, the claims he made, and how Allah seized him. It licenses nothing against any living person or community. It hands no reader the right to call a ruler, a nation or a neighbour Pharaoh and treat them as already sentenced. When Ibn Kathir and the Muyassar speak of a lesson for the defiant like him, they name a kind of conduct, and the judgement of who answers to it belongs to Allah.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এই কাহিনিতে ফেরাউনের নাম এসেছে ৭৯:১৭ আয়াতে। আয়াতে যা আছে, আয়াত সেটুকুই বলে: একজন শাসক, তার দাবিগুলো, আর আল্লাহ কীভাবে তাকে পাকড়াও করলেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। কোনো শাসক, জাতি বা প্রতিবেশীকে ফেরাউন বলে দেগে দিয়ে তার রায় আগেই হয়ে গেছে ধরে নেওয়ার অধিকার কোনো পাঠককে এ আয়াত দেয় না। ইবন কাসীর ও মুয়াসসার যখন তার মতো উদ্ধতদের জন্য শিক্ষার কথা বলেন, তখন তাঁরা একটা আচরণের ধরন চিনিয়ে দেন। কে সেই ধরনে পড়ে, তার বিচার আল্লাহর হাতে।"
          },
          {
            "en": "What a reader can carry is inward. The two-sayings reading shows a claim that grew: first I know of no god for you other than me, then I am your lord most high, with years between in which, as al-Qurtubi puts it, he was given respite. A respite is not approval. The honest question is whether any small claim of mine, to be beyond correction or above those around me, is growing in the same direction. The verse that follows names who draws the lesson, and that is for its own reflection.",
            "bn": "পাঠক যা সঙ্গে নিতে পারেন, তা নিজের ভেতরের ব্যাপার। দুই উক্তির পাঠ দেখায়, একটা দাবি কীভাবে বেড়ে ওঠে। আগে, আমি ছাড়া তোমাদের আর কোনো ইলাহ আছে বলে আমি জানি না। পরে, আমিই তোমাদের সর্বশ্রেষ্ঠ রব। মাঝে কেটেছে বহু বছর, যাকে কুরতুবী বলেন অবকাশ। অবকাশ মানে সম্মতি নয়। তাই সত্যিকারের প্রশ্নটা নিজের কাছে: আমার কোনো ছোট দাবি, যেমন আমার ভুল ধরা যাবে না, কিংবা আশপাশের মানুষের চেয়ে আমি ওপরে, একই দিকে বেড়ে উঠছে কি? এ থেকে কে শিক্ষা নেয়, তা বলে পরের আয়াত। সে কথা ওই আয়াতের আলোচনার জন্য তোলা থাক।"
          }
        ]
      }
    ]
  },
  "79:29": {
    "sections": [
      {
        "h": {
          "en": "Two Verbs Over the Sky",
          "bn": "আকাশের উপর দুটি ক্রিয়া"
        },
        "p": [
          {
            "en": "Wa aghtasha laylaha wa akhraja duhaha: and He darkened its night and brought out its forenoon. The verse is four Arabic words, two verbs each followed by a noun, and both nouns end in the same pronoun, -ha, its. Aghtasha is the darkening; akhraja is the bringing out. Laylaha is its night, and duhaha is its forenoon, the risen light of the day. Nothing else is said, and nothing else is needed: one act closes the light and the other opens it.",
            "bn": "ওয়া আগতাশা লাইলাহা ওয়া আখরাজা দুহাহা: আর তিনি তার রাতকে আঁধার করেছেন, আর বের করে এনেছেন তার পূর্বাহ্ণের আলো। আরবিতে আয়াতটিতে শব্দ চারটি। দুটি ক্রিয়া, প্রতিটির পরে একটি করে বিশেষ্য, আর দুটি বিশেষ্যের শেষেই একই সর্বনাম, -হা, অর্থাৎ তার। আগতাশা মানে আঁধার করা, আখরাজা মানে বের করে আনা। লাইলাহা তার রাত, দুহাহা তার দুহা, দিনের উঠে আসা আলো। এর বেশি কিছু বলা হয়নি, দরকারও নেই। একটি কাজ আলো বন্ধ করে, অন্যটি আলো খুলে দেয়।"
          },
          {
            "en": "The verse is the third link in a short chain. At 79:27 the listeners are asked whether they are harder to create or the heaven, and the answer comes at once: He built it. At 79:28 He raised its ceiling and proportioned it. Here at 79:29 the same heaven is given its night and its forenoon. The next verse, 79:30, turns to the earth after that; it has its own entry and is only named here.",
            "bn": "আয়াতটি একটি ছোট শিকলের তৃতীয় কড়া। ৭৯:২৭ আয়াতে শ্রোতাদের প্রশ্ন করা হয়, তোমাদের সৃষ্টি বেশি কঠিন, নাকি আসমানের? সঙ্গে সঙ্গে উত্তর আসে: তিনি তা নির্মাণ করেছেন। ৭৯:২৮ আয়াতে তিনি তার ছাদ উঁচু করেছেন আর তাকে সুবিন্যস্ত করেছেন। এখানে ৭৯:২৯ আয়াতে সেই একই আসমানকে দেওয়া হলো তার রাত আর তার পূর্বাহ্ণ। পরের আয়াত ৭৯:৩০ চলে যায় এরপরের যমীনের কথায়। সেটির আলোচনা আলাদা, এখানে শুধু নামটুকু উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Night Belonging to Heaven",
          "bn": "রাত কেন আসমানের"
        },
        "p": [
          {
            "en": "Whose night is it? The tafsirs read the pronoun -ha as the heaven, as-sama', named in 79:27 and built in 79:28. At-Tabari says it outright: He darkened the night of the heaven. Al-Qurtubi and al-Baghawi both say that the verse attaches the night and the forenoon to the heaven. The Muyassar, glossing 79:28 to 79:33 together, keeps the same thread: He raised the heaven above you like a building, darkened its night by the setting of its sun, and brought out its day by its rising.",
            "bn": "রাতটা কার? তাফসীরকারেরা সর্বনাম -হা বুঝেছেন আসমান অর্থে, যার নাম এসেছে ৭৯:২৭ আয়াতে আর যার নির্মাণের কথা ৭৯:২৮ আয়াতে। তাবারী সরাসরি বলেন: তিনি আসমানের রাতকে আঁধার করেছেন। কুরতুবী আর বাগাভী দুজনেই বলেন, আয়াতটি রাত ও পূর্বাহ্ণকে আসমানের সঙ্গে যুক্ত করেছে। মুয়াসসার ৭৯:২৮ থেকে ৭৯:৩৩ আয়াত একসঙ্গে ব্যাখ্যা করে, আর সুতোটা একই রাখে: তিনি আসমানকে তোমাদের উপরে ইমারতের মতো তুলেছেন, সূর্য ডুবিয়ে তার রাতকে আঁধার করেছেন, আর সূর্য উদিত করে তার দিনকে বের করে এনেছেন।"
          },
          {
            "en": "Why should the night belong to the sky? At-Tabari's answer is that night is the setting of the sun, and the sun's setting and rising both happen in the heaven, so the night is attached to the place where it occurs. He compares the Arab phrase nujum al-layl, the stars of the night, which ties the stars to the night because their rising and setting take place in it. Al-Qurtubi gives the same reasoning and the same phrase, adding that the stars belong to the night because they appear by night.",
            "bn": "রাত আসমানের হবে কেন? তাবারীর উত্তর: রাত মানে সূর্যের অস্ত যাওয়া, আর সূর্যের অস্ত যাওয়া ও উদয় হওয়া দুটোই ঘটে আসমানে। তাই যেখানে রাত ঘটে, রাতকে সেখানকার বলেই উল্লেখ করা হয়েছে। তিনি তুলনা টানেন আরবদের একটি কথার সঙ্গে, নুজুমুল লাইল, রাতের তারা। তারার উদয়-অস্ত রাতেই হয়, তাই তারাকে রাতের সঙ্গে জুড়ে বলা হয়। কুরতুবীও একই যুক্তি আর একই কথাটি আনেন, সঙ্গে যোগ করেন যে তারা রাতের, কারণ রাতেই তারা দেখা দেয়।"
          },
          {
            "en": "The forenoon is attached the same way. Al-Qurtubi says the duha is added to the heaven just as the night was, because in the heaven lies the cause of both darkness and light, namely the setting of the sun and its rising. Al-Baghawi gives a slightly different reason in one short clause: both are attached to the heaven because darkness and light alike come down from it. The two agree on the reading and differ only on how they phrase the cause.",
            "bn": "পূর্বাহ্ণকেও আসমানের সঙ্গে জোড়া হয়েছে একইভাবে। কুরতুবী বলেন, রাতকে যেমন আসমানের সঙ্গে যুক্ত করা হয়েছে, দুহাকেও তেমনি। কেননা আঁধার আর আলো, দুটোর কারণই আসমানে: সূর্যের অস্ত যাওয়া আর উদয় হওয়া। বাগাভী ছোট একটি বাক্যে কারণটা একটু অন্যভাবে বলেন: দুটোকেই আসমানের সঙ্গে জোড়া হয়েছে, কারণ আঁধার ও আলো দুটোই আসমান থেকে নামে। পাঠে দুজন একমত, তফাত শুধু কারণটা বলার ভঙ্গিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Shared With Blindness",
          "bn": "অন্ধত্বের সঙ্গে এক ধাতু"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the most on aghtasha itself. It means He made the night dark. It is said ghatisha al-layl, the night grew dark, and aghtashahu Allah, Allah darkened it, just as Arabic has zalima al-layl and azlamahu Allah. He adds that aghtasha can also be said of the night by itself, the night grew dark, while aghtashahu Allah keeps Allah as the doer of the darkening. So the verb in the verse is the form that names Allah as its subject.",
            "bn": "আগতাশা শব্দটি নিয়ে সবচেয়ে বেশি কথা বলেন কুরতুবী। এর অর্থ, তিনি রাতকে অন্ধকার করেছেন। আরবিতে বলা হয় গাতিশাল লাইল, রাত আঁধার হলো, আর আগতাশাহুল্লাহ, আল্লাহ তাকে আঁধার করলেন। ঠিক যেমন বলা হয় জালিমাল লাইল আর আযলামাহুল্লাহ। তিনি আরও বলেন, আগতাশা শব্দটি রাতের নিজের বেলাতেও বলা যায়, রাত নিজেই আঁধার হলো। কিন্তু আগতাশাহুল্লাহ বললে আঁধার করার কাজটা আল্লাহর। আয়াতের ক্রিয়াটি এই দ্বিতীয় রূপের, যেখানে কর্তা আল্লাহ।"
          },
          {
            "en": "The root carries more than night. Al-Qurtubi says al-ghatash and al-ghabash both mean darkness, a pairing al-Baghawi also gives in the same words. A man who is aghtash is blind, or close to it, and a woman ghatsha'. A night can be layla ghatsha', a dark night, and a desert falat ghatsha, an expanse where nobody finds the way. The word, in other words, is not only about the absence of light but about what that absence does to whoever cannot see.",
            "bn": "ধাতুটি শুধু রাতের কথা বলে না। কুরতুবী বলেন, আল-গাতাশ আর আল-গাবাশ দুটোরই অর্থ অন্ধকার। বাগাভীও হুবহু এই জোড়াটি দেন। যে পুরুষ আগতাশ, সে অন্ধ বা প্রায় অন্ধ, আর নারী হলে গাতশা। রাতকে বলা হয় লাইলাতুন গাতশা, আঁধার রাত। আর মরুভূমিকে বলা হয় ফালাতুন গাতশা, এমন প্রান্তর যেখানে কেউ পথ খুঁজে পায় না। শব্দটি তাই শুধু আলো না থাকার কথা বলে না। যে দেখতে পায় না, তার উপর সেই আঁধারের কী প্রভাব, সে কথাও বলে।"
          },
          {
            "en": "To show the word in use, al-Qurtubi quotes two lines by the poet al-A'sha. In the first, a trackless desert is ghatsha at night, and a sound from within it is the poet's only company. In the second, the poet slaughters his she-camel for them late at night while a deep, dark ghatash covers them, and al-Qurtubi explains that the poet means their night, which covered them with its blackness. Both lines use the word for a darkness that closes around people.",
            "bn": "শব্দটির ব্যবহার দেখাতে কুরতুবী কবি আ'শার দুটি পঙক্তি উদ্ধৃত করেন। প্রথমটিতে পথচিহ্নহীন এক মরুভূমি রাতে গাতশা, আর তার ভেতর থেকে আসা একটা শব্দই কবির একমাত্র সঙ্গী। দ্বিতীয়টিতে কবি গভীর রাতে তাদের জন্য নিজের উটনী জবাই করেন, আর তাদের ঢেকে রেখেছে ঘন কালো গাতাশ। কুরতুবী ব্যাখ্যা করেন, কবি এখানে বোঝাচ্ছেন তাদের রাতকে, যা নিজের কালো দিয়ে তাদের ঢেকে দিয়েছিল। দুটি পঙক্তিতেই শব্দটি এমন আঁধারের জন্য, যা মানুষকে চারপাশ থেকে ঘিরে ফেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Gloss, Many Chains",
          "bn": "এক ব্যাখ্যা, বহু সনদ"
        },
        "p": [
          {
            "en": "On the meaning of aghtasha the early authorities speak with one voice, and at-Tabari lines them up. Ibn Abbas, by two separate chains, says: He made its night dark. Mujahid says: He made it dark. Qatada, by two chains, says the same, once with its night and once without. Ad-Dahhak and 'Ikrima both say: He made its night dark. Ibn Zayd gives a single word, the darkness. At-Tabari introduces them with his usual formula: the people of interpretation said what we have said.",
            "bn": "আগতাশার অর্থে প্রথম যুগের ব্যাখ্যাকারেরা এক সুরে কথা বলেন, আর তাবারী তাঁদের সারি বেঁধে হাজির করেন। ইবন আব্বাস (রাঃ) দুটি আলাদা সনদে বলেন: তিনি তার রাতকে আঁধার করেছেন। মুজাহিদ বলেন: আঁধার করেছেন। কাতাদা দুটি সনদে একই কথা বলেন, একবার 'তার রাত' জুড়ে, একবার ছাড়া। দাহহাক আর ইকরিমা দুজনেই বলেন: তার রাতকে আঁধার করেছেন। ইবন যায়দ একটি শব্দেই সারেন: অন্ধকার। তাবারী তাঁদের পরিচয় দেন নিজের চেনা কথায়: আমরা যা বলেছি, ব্যাখ্যাকারেরাও তেমনই বলেছেন।"
          },
          {
            "en": "Ibn Kathir compresses the same picture. He glosses the verse as: He made its night dark, black, pitch black, and its day bright, shining, luminous and clear. Then he reports Ibn Abbas, aghtasha laylaha, He made it dark, and adds that Mujahid, 'Ikrima, Sa'id ibn Jubayr and a large group said the same. As-Sa'di keeps to the same gloss, He made it dark, and al-Baghawi gives the one word azlama, He darkened. On this half of the verse there is no disagreement to report.",
            "bn": "ইবন কাসীর একই ছবিকে সংক্ষেপে আনেন। তাঁর ব্যাখ্যায় আয়াতের অর্থ: তিনি তার রাতকে করেছেন অন্ধকার, কালো, ঘোর কালো, আর তার দিনকে করেছেন উজ্জ্বল, ঝলমলে, আলোকিত ও পরিষ্কার। তারপর তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন, আগতাশা লাইলাহা মানে তিনি তাকে আঁধার করেছেন। সঙ্গে জানান, মুজাহিদ, ইকরিমা, সাঈদ ইবন জুবায়র এবং আরও অনেকে একই কথা বলেছেন। সা'দীও একই অর্থ করেন: তিনি তাকে আঁধার করেছেন। বাগাভী দেন একটি শব্দ, আযলামা, আঁধার করলেন। আয়াতের এই অর্ধেকে কোনো মতভেদ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Bringing Out the Forenoon",
          "bn": "দুহা বের করে আনা"
        },
        "p": [
          {
            "en": "The second half, wa akhraja duhaha, draws a little more variety. At-Tabari's own gloss has three parts: He brought out its light; that is, He made its day appear and showed it; and He lit up its forenoon. His early sources each pick one thread. Mujahid says: He lit it up. Qatada says: He lit up its light. Ad-Dahhak says simply: its day. Ibn Zayd says: the light of the day. Again at-Tabari introduces them as agreeing with him.",
            "bn": "দ্বিতীয় অর্ধেক, ওয়া আখরাজা দুহাহা, নিয়ে ব্যাখ্যায় একটু বেশি বৈচিত্র্য। তাবারীর নিজের ব্যাখ্যার তিনটি অংশ। তিনি তার আলো বের করে এনেছেন। অর্থাৎ তার দিনকে প্রকাশ করেছেন, সামনে এনেছেন। আর তার দুহাকে আলোকিত করেছেন। প্রথম যুগের বর্ণনাকারীরা প্রত্যেকে একটি করে দিক ধরেন। মুজাহিদ বলেন: তাকে আলোকিত করেছেন। কাতাদা বলেন: তার আলোকে উজ্জ্বল করেছেন। দাহহাক শুধু বলেন: তার দিন। ইবন যায়দ বলেন: দিনের আলো। এখানেও তাবারী তাঁদের হাজির করেন নিজের সঙ্গে একমত হিসেবে।"
          },
          {
            "en": "The later commentators gather these into fuller phrases. Ibn Kathir: He lit up its day. Al-Qurtubi: He made its day appear, and its light, and its sun. Al-Baghawi: He made its day and its light appear and showed them. The Muyassar ties it to a cause, saying He brought out its day by the sun's rising. As-Sa'di goes furthest: He made the great light appear in it when He brought the sun. So duha is read as the day, the daylight and the brightness, and al-Qurtubi also names the sun itself.",
            "bn": "পরের যুগের তাফসীরকারেরা এগুলোকে একত্র করে আরও পূর্ণ বাক্যে বলেন। ইবন কাসীর: তিনি তার দিনকে আলোকিত করেছেন। কুরতুবী: তিনি প্রকাশ করেছেন তার দিন, তার আলো আর তার সূর্য। বাগাভী: তিনি তার দিন আর তার আলোকে সামনে এনেছেন, প্রকাশ করেছেন। মুয়াসসার এর সঙ্গে কারণ জুড়ে দেয়: সূর্য উঠিয়ে তিনি তার দিনকে বের করে এনেছেন। সবচেয়ে দূর যান সা'দী: সূর্য আনার সময় তিনি তাতে প্রকাশ করেছেন মহা আলো। দুহা তাই পড়া হয়েছে দিন, দিনের আলো আর উজ্জ্বলতা অর্থে। কুরতুবী এর সঙ্গে স্বয়ং সূর্যের নামও নেন।"
          },
          {
            "en": "These are not rival readings so much as one meaning seen from different sides. No commentator here sets one gloss against another or calls another wrong. The difference is in emphasis: the early narrators speak of light, al-Qurtubi and al-Baghawi of the day made visible, the Muyassar and as-Sa'di of the sun that brings it. Each is reported here as its author gave it, and none is ranked above the rest.",
            "bn": "এগুলো পরস্পরবিরোধী পাঠ নয়, একই অর্থকে ভিন্ন ভিন্ন দিক থেকে দেখা। এখানে কোনো তাফসীরকার এক ব্যাখ্যাকে আরেকটির বিরুদ্ধে দাঁড় করাননি, কাউকে ভুলও বলেননি। তফাত শুধু জোরের জায়গায়। প্রথম যুগের বর্ণনাকারীরা বলেন আলোর কথা। কুরতুবী আর বাগাভী বলেন দৃশ্যমান হয়ে ওঠা দিনের কথা। মুয়াসসার আর সা'দী বলেন সেই সূর্যের কথা, যে দিন নিয়ে আসে। প্রত্যেকের কথা এখানে তাঁর নিজের ভাষ্য হিসেবেই রাখা হলো, কাউকে অন্যদের উপরে স্থান দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Darkness Over Every Horizon",
          "bn": "সব দিগন্ত জুড়ে আঁধার"
        },
        "p": [
          {
            "en": "As-Sa'di draws out what each act does to the world below. When He darkened the night, he says, the darkness spread over every quarter of the sky, and so the face of the earth went dark. When He brought out the forenoon, He made the great light appear in it as He brought the sun, and people spread out into what serves their religion and their worldly life. Night closes the world; the forenoon opens it again for work and for worship.",
            "bn": "প্রতিটি কাজ নিচের পৃথিবীতে কী ঘটায়, সা'দী তা খুলে দেখান। তিনি বলেন, যখন তিনি রাতকে আঁধার করলেন, আঁধার ছড়িয়ে পড়ল আসমানের সব প্রান্তে, ফলে যমীনের চেহারাও অন্ধকার হয়ে গেল। আর যখন দুহা বের করে আনলেন, সূর্য এনে তাতে প্রকাশ করলেন মহা আলো। তখন মানুষ ছড়িয়ে পড়ল নিজেদের দীন আর দুনিয়ার কাজে। রাত পৃথিবীকে বন্ধ করে দেয়। দুহা তাকে আবার খুলে দেয় কাজের জন্য, ইবাদতের জন্যও।"
          },
          {
            "en": "That is as far as the commentators consulted here go on night and day. They speak of the sun setting and rising in the heaven, of darkness spreading over its quarters, and of light coming down from it. They do not build a theory of the sky out of the verse, and this article does not either. What the verse gives, in their reading, is a sign anyone can watch: the same heaven each evening losing its light and each morning receiving it back, by the act of the One who built it.",
            "bn": "রাত আর দিন নিয়ে যেসব তাফসীর এখানে দেখা হয়েছে, সেগুলোর কথা এ পর্যন্তই। তাঁরা বলেন আসমানে সূর্যের অস্ত ও উদয়ের কথা, তার প্রান্তে প্রান্তে আঁধার ছড়ানোর কথা, আর সেখান থেকে আলো নামার কথা। আয়াত থেকে তাঁরা আকাশ নিয়ে কোনো তত্ত্ব দাঁড় করান না, এ লেখাও করবে না। তাঁদের পাঠে আয়াত দেয় এমন এক নিদর্শন, যা যে কেউ নিজের চোখে দেখতে পারে: একই আসমান প্রতি সন্ধ্যায় আলো হারায়, প্রতি সকালে আবার তা ফিরে পায়। আর এ ঘটে তাঁরই কাজে, যিনি তা নির্মাণ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument for the Raising",
          "bn": "পুনরুত্থানের পক্ষে প্রমাণ"
        },
        "p": [
          {
            "en": "Why describe the sky's night and forenoon here at all? The commentators answer from the question in 79:27. The Muyassar paraphrases it as: is your being raised after death harder in your reckoning, O people, or the creation of the heaven? It then runs through the raised ceiling, the darkened night, the day brought out, and the earth with its water, pasture and mountains, and closes with its own bracketed comment: the re-creation of you on the Day of Resurrection is easier for Allah than creating these things, and all of it is easy for Him.",
            "bn": "আকাশের রাত আর দুহার বর্ণনা এখানে কেন? তাফসীরকারেরা উত্তর দেন ৭৯:২৭ আয়াতের প্রশ্ন থেকে। মুয়াসসার প্রশ্নটি এভাবে বলে: হে মানুষ, তোমাদের হিসাবে মৃত্যুর পর তোমাদের আবার ওঠানো বেশি কঠিন, নাকি আসমান সৃষ্টি? এরপর সে একে একে আনে উঁচু ছাদ, আঁধার রাত, বের করে আনা দিন, আর পানি, চারণভূমি ও পাহাড়সহ যমীনের কথা। শেষে বন্ধনীর ভেতরে নিজের মন্তব্য জোড়ে: কিয়ামতের দিন তোমাদের আবার সৃষ্টি করা এসব জিনিস সৃষ্টির চেয়ে আল্লাহর কাছে সহজ, আর সবই তাঁর কাছে সহজ।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement that covers 79:27 to 79:33, heads the passage as a refutation of those who reject the resurrection, and reads 79:27 as meaning that the heaven is harder to create than you. He supports it with two verses. At 40:57: the creation of the heavens and the earth is greater than the creation of mankind. At 36:81: is not He who created the heavens and the earth able to create the like of them? Yes, and He is the Creator, the All-Knowing.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ ৭৯:২৭ থেকে ৭৯:৩৩ আয়াত একসঙ্গে আলোচনা করে। সেখানে অংশটির শিরোনাম, যারা পুনরুত্থান অস্বীকার করে তাদের খণ্ডন। ৭৯:২৭ আয়াতের অর্থ তিনি করেন এভাবে: তোমাদের চেয়ে আসমান সৃষ্টি বরং বেশি কঠিন। এর সমর্থনে তিনি দুটি আয়াত আনেন। ৪০:৫৭ আয়াতে আছে, আসমান ও যমীনের সৃষ্টি মানুষের সৃষ্টির চেয়ে বড়। আর ৩৬:৮১ আয়াতে, যিনি আসমান ও যমীন সৃষ্টি করেছেন, তিনি কি তাদের মতো আবার সৃষ্টি করতে সক্ষম নন? অবশ্যই, তিনিই মহাস্রষ্টা, সর্বজ্ঞ।"
          },
          {
            "en": "Ma'arif al-Qur'an, commenting on the passage from 79:25 to 79:34, makes the same link. It recalls the deniers' question in 79:10 and 79:11, whether they will really be brought back once they are decayed bones, and answers that the One who brought the universe into being without pre-existing matter or any instrument plainly has the power to give things existence again after destroying them. Read this way, 79:29 is one strand of the evidence: the night and forenoon of a heaven harder to make than you.",
            "bn": "মাআরিফুল কুরআন ৭৯:২৫ থেকে ৭৯:৩৪ আয়াতের আলোচনায় একই যোগসূত্র টানে। সেখানে মনে করিয়ে দেওয়া হয় ৭৯:১০ ও ৭৯:১১ আয়াতে অস্বীকারকারীদের প্রশ্ন: পচে যাওয়া হাড় হয়ে যাওয়ার পরও কি সত্যিই তাদের ফিরিয়ে আনা হবে? জবাবে বলা হয়, যিনি কোনো পূর্ব উপাদান ও কোনো উপকরণ ছাড়াই মহাবিশ্বকে অস্তিত্বে এনেছেন, ধ্বংসের পর আবার অস্তিত্ব দেওয়ার ক্ষমতা তাঁর অবশ্যই আছে। এভাবে পড়লে ৭৯:২৯ আয়াত সেই প্রমাণেরই একটি সুতো। তোমাদের চেয়ে কঠিন সৃষ্টি এক আসমান, আর তার রাত ও তার দুহা।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Dusk, Each Forenoon",
          "bn": "প্রতিটি সন্ধ্যা, প্রতিটি দুহা"
        },
        "p": [
          {
            "en": "No tafsir consulted here attaches a hadith to this verse, so none is quoted here. The verse does its work without a narration. It takes the most ordinary events in a human day, the light going and the light returning, and names both as acts of Him who built the sky. The argument in 79:27 then asks the reader to finish the thought: if this is done every day without effort, raising the dead is no harder for Him.",
            "bn": "এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানেও কোনো হাদিস উদ্ধৃত হলো না। হাদিস ছাড়াই আয়াত নিজের কাজ করে যায়। মানুষের দিনের সবচেয়ে সাধারণ দুটি ঘটনা, আলো চলে যাওয়া আর আলো ফিরে আসা, দুটোকেই আয়াত বলে আসমানের নির্মাতার কাজ। তারপর ৭৯:২৭ আয়াতের যুক্তি কথাটা শেষ করার ভার দেয় পাঠকের হাতে: প্রতিদিন এ কাজ যদি অনায়াসে হয়, মৃতকে ওঠানো তাঁর কাছে কঠিন কিছু নয়।"
          },
          {
            "en": "The practical lesson follows from as-Sa'di's line. Night is a covering that the believer did not make, and the forenoon is a light he did not light. Each evening is a moment to recognise whose darkness it is; each forenoon is a moment to go out, as as-Sa'di put it, to what serves religion and worldly life. Someone who watches the sky this way is not merely noting the time. He is reading the same sign the verse set before those who doubted the raising.",
            "bn": "ব্যবহারিক শিক্ষাটা আসে সা'দীর কথা থেকে। রাত এমন এক আবরণ, যা মুমিন নিজে বানায়নি। দুহা এমন আলো, যা সে নিজে জ্বালায়নি। প্রতিটি সন্ধ্যা চিনে নেওয়ার সময়: এই আঁধার কার। প্রতিটি দুহা বেরিয়ে পড়ার সময়, সা'দীর ভাষায় দীন ও দুনিয়ার কল্যাণের কাজে। যে এভাবে আকাশের দিকে তাকায়, সে শুধু সময় দেখে না। পুনরুত্থান নিয়ে যারা সন্দেহ করত, তাদের সামনে আয়াত যে নিদর্শন রেখেছিল, সে সেটাই পড়ে।"
          }
        ]
      }
    ]
  },
  "79:40": {
    "sections": [
      {
        "h": {
          "en": "Nine Words for the Other Path",
          "bn": "অন্য পথের নয়টি শব্দ"
        },
        "p": [
          {
            "en": "Wa-amma man khafa maqama rabbihi wa naha an-nafsa 'ani-l-hawa: but as for the one who feared the standing of his Lord and forbade the self its desire. The verse is nine Arabic words long and holds two clauses joined by wa, and. The first names a fear; the second names an act of restraint. Neither clause completes the sentence. Wa-amma opens a condition, and its answer comes in 79:41, the verse that follows, which this article leaves to its own place.",
            "bn": "ওয়া আম্মা মান খাফা মাকামা রাব্বিহী ওয়া নাহান নাফসা আনিল হাওয়া: আর যে তার রবের সামনে দাঁড়ানোকে ভয় করেছে এবং নিজের মনকে তার কামনা থেকে বিরত রেখেছে। আরবিতে আয়াতটি নয়টি শব্দের। তাতে দুটি অংশ, মাঝখানে ওয়া, অর্থাৎ এবং। প্রথম অংশে একটি ভয়ের কথা, দ্বিতীয় অংশে নিজেকে থামানোর কথা। কোনো অংশেই বাক্য শেষ হয় না। ওয়া আম্মা দিয়ে একটি শর্ত শুরু হয়েছে, আর তার জবাব আসে পরের আয়াত ৭৯:৪১-এ। সে আয়াতের আলোচনা তার নিজের জায়গার জন্য তোলা রইল।"
          },
          {
            "en": "The opening particle also reaches back. Three verses earlier, fa-amma man tagha, so as for the one who transgressed, began the matching case, and 79:37 and 79:38 together spend six words on two acts: he overstepped, and he preferred the life of this world. Here a single verse spends nine words on two acts of another kind. Ma'arif al-Qur'an marks the pairing as it introduces this verse: the people of Paradise, it says, too have two characteristics.",
            "bn": "শুরুর শব্দটি পেছনের দিকেও হাত বাড়ায়। তিনটি আয়াত আগে ফা আম্মা মান তাগা, অর্থাৎ আর যে সীমা ছাড়িয়েছে, দিয়ে বিপরীত দিকটি শুরু হয়েছিল। ৭৯:৩৭ ও ৭৯:৩৮ মিলে ছয়টি শব্দে দুটি কাজের কথা বলে: সে সীমা ছাড়িয়েছে, আর দুনিয়ার জীবনকে আগে রেখেছে। এখানে একটিমাত্র আয়াত নয়টি শব্দে অন্য ধরনের দুটি কাজের কথা বলে। মাআরিফুল কুরআন এ আয়াতের শুরুতেই জোড়াটা ধরিয়ে দেয়। তার ভাষায়, জান্নাতবাসীদেরও দুটি বৈশিষ্ট্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Standing, and When",
          "bn": "কার দাঁড়ানো, কখন"
        },
        "p": [
          {
            "en": "The commentators consulted here unpack maqam as a standing, and the Muyassar and Ibn Kathir both render it al-qiyam. Whose standing, though, and when? Al-Qurtubi's own gloss takes it as the servant's: he was wary of his standing before his Lord. He then relays three earlier voices. Ar-Rabi' said it is his standing on the Day of Reckoning. Qatada used to say that Allah, Mighty and Majestic, has a standing which the believers have feared, and in that wording the maqam belongs to Allah rather than to the servant.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, সেগুলো মাকাম শব্দটিকে দাঁড়ানো অর্থে খুলে বলে। মুয়াসসার ও ইবন কাসীর দুজনেই এর জায়গায় লেখেন আল-কিয়াম। কিন্তু দাঁড়ানোটা কার, আর কখন? কুরতুবীর নিজের ব্যাখ্যায় দাঁড়ানোটা বান্দার: সে রবের সামনে নিজের দাঁড়ানোর ব্যাপারে সতর্ক ছিল। এরপর তিনি আগের তিনজনের কথা আনেন। রাবী' বলেন, এ হলো হিসাবের দিনে তার দাঁড়ানো। কাতাদা বলতেন, মহান আল্লাহর এক মাকাম আছে, যাকে মুমিনরা ভয় করেছে। এ ভাষ্যে মাকাম আল্লাহর, বান্দার নয়।"
          },
          {
            "en": "Mujahid, also in al-Qurtubi, moves the phrase out of the next world and into the present. It is a person's fear of Allah in this world at the moment of falling into a sin, so that he pulls away from it. Al-Qurtubi then sets beside the verse a parallel, nazir, in 55:46: wa li-man khafa maqama rabbihi jannatan, and for whoever feared the standing of his Lord there are two gardens. The same three words, khafa maqama rabbihi, stand in both verses.",
            "bn": "মুজাহিদের কথাও কুরতুবী এনেছেন, আর তিনি বাক্যটিকে পরকাল থেকে এনে দাঁড় করান এই দুনিয়ায়। তাঁর মতে এ হলো দুনিয়াতেই গুনাহে জড়িয়ে পড়ার মুহূর্তে আল্লাহর ভয়, যার ফলে মানুষ গুনাহটা ছেড়ে সরে আসে। এরপর কুরতুবী আয়াতটির পাশে রাখেন তার এক নজির, ৫৫:৪৬: ওয়া লিমান খাফা মাকামা রাব্বিহী জান্নাতান। যে তার রবের সামনে দাঁড়ানোকে ভয় করে, তার জন্য রয়েছে দুটি বাগান। খাফা মাকামা রাব্বিহী, এই তিনটি শব্দ দুই আয়াতেই হুবহু এক।"
          }
        ]
      },
      {
        "h": {
          "en": "Questioned, Judged, Watched Over",
          "bn": "প্রশ্ন, বিচার আর তত্ত্বাবধান"
        },
        "p": [
          {
            "en": "At-Tabari reads the fear as fear of a question. As for whoever feared Allah's asking him, when he stands before Him on the Day of Resurrection, and so guarded himself against Him by carrying out what He made obligatory and keeping away from disobeying Him. He spells out what the fear produced, duties done and sins avoided. Ibn Kathir's line is shorter and gives the fear two objects: he feared standing before Allah, and he feared Allah's judgement concerning him.",
            "bn": "তাবারী ভয়টিকে পড়েন প্রশ্নের ভয় হিসেবে। তাঁর ভাষায়, এ সেই মানুষ, যে ভয় করেছে কিয়ামতের দিন আল্লাহর সামনে দাঁড়ালে তিনি তাকে জিজ্ঞাসা করবেন। তাই সে তাঁর ফরজ করা কাজগুলো পালন করে আর তাঁর নাফরমানি থেকে দূরে থেকে নিজেকে বাঁচিয়ে চলেছে। ভয় থেকে কী জন্মাল, তাবারী তা খুলে বলেন: দায়িত্ব পালন আর গুনাহ বর্জন। ইবন কাসীরের কথা আরও ছোট, তবে তাতে ভয়ের দুটি বিষয়: সে আল্লাহর সামনে দাঁড়ানোকে ভয় করেছে, আর নিজের ব্যাপারে আল্লাহর ফয়সালাকে ভয় করেছে।"
          },
          {
            "en": "The Muyassar adds a purpose: he feared standing before Allah for the reckoning. Ma'arif al-Qur'an keeps the same picture and puts it in this life: he shudders at the thought of appearing before Allah to account for his deeds on the Day of Reckoning. As-Sa'di words it from the other side. He feared Allah's standing over him, al-qiyam 'alayhi, and His requiting him with justice. In that phrasing the standing is Allah's, over the servant, and not only the servant's, before Allah.",
            "bn": "মুয়াসসার এর সঙ্গে উদ্দেশ্য জুড়ে দেয়: সে হিসাবের জন্য আল্লাহর সামনে দাঁড়ানোকে ভয় করেছে। মাআরিফুল কুরআন একই ছবি রাখে, তবে তাকে বসায় এই জীবনে। হিসাবের দিনে আমলের হিসাব দিতে আল্লাহর সামনে হাজির হওয়ার কথা ভেবেই সে কেঁপে ওঠে। সা'দী কথাটি বলেন উল্টো দিক থেকে। সে ভয় করেছে আল্লাহর তার উপর দাঁড়িয়ে থাকাকে, আল-কিয়াম আলাইহি, আর ন্যায়ের সঙ্গে তাঁর প্রতিদান দেওয়াকে। এ ভাষায় দাঁড়ানোটা আল্লাহর, বান্দার উপর। শুধু আল্লাহর সামনে বান্দার দাঁড়ানো নয়।"
          },
          {
            "en": "So the texts consulted here give three angles without ranking them. One is the servant's standing before his Lord at the reckoning: al-Qurtubi, ar-Rabi', at-Tabari, Ibn Kathir, the Muyassar and Ma'arif. Another is a standing that belongs to Allah: Qatada's maqam, and as-Sa'di's standing over him. A third is the fear that arrives at the moment of sin in this world: Mujahid. None of them is set against the others in the text consulted, and this article does not choose between them.",
            "bn": "তাহলে যে লেখাগুলো দেখা হয়েছে, সেগুলো তিনটি দিক দেখায়, কোনোটিকে ওপরে না তুলে। একটি হলো হিসাবের সময় রবের সামনে বান্দার দাঁড়ানো। এ কথা কুরতুবী, রাবী', তাবারী, ইবন কাসীর, মুয়াসসার ও মাআরিফুল কুরআনের। আরেকটি হলো আল্লাহর নিজের এক দাঁড়ানো: কাতাদার মাকাম, আর সা'দীর 'তার উপর দাঁড়িয়ে থাকা'। তৃতীয়টি দুনিয়াতে গুনাহের মুহূর্তে আসা ভয়, এটি মুজাহিদের কথা। এদের একটিকে অন্যটির বিরুদ্ধে দাঁড় করানো হয়নি। এ লেখাও কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Forbidding One's Own Self",
          "bn": "নিজের মনকে নিষেধ করা"
        },
        "p": [
          {
            "en": "The second clause is wa naha an-nafsa, and he forbade the self. What is forbidden is not another person but the self of the man who feared. At-Tabari explains it in three steps: he forbade his self its desire in what Allah dislikes and is not pleased with from it, then he rebuked it, zajaraha, away from that, and then he went against its desire, towards what his Lord had commanded him. The self is not destroyed in this reading. It is refused, checked and turned.",
            "bn": "দ্বিতীয় অংশ ওয়া নাহান নাফসা, আর সে মনকে নিষেধ করেছে। যাকে নিষেধ করা হচ্ছে, সে অন্য কেউ নয়। সে ভয় করা মানুষটির নিজেরই মন। তাবারী একে তিনটি ধাপে বোঝান। আল্লাহ যা অপছন্দ করেন, যাতে তিনি সন্তুষ্ট নন, সেখানে সে মনকে তার কামনা থেকে নিষেধ করেছে। তারপর ধমক দিয়ে, যাজারাহা, মনকে সেখান থেকে সরিয়েছে। তারপর মনের চাওয়ার উল্টো দিকে হেঁটে গেছে রবের হুকুমের দিকে। এ ব্যাখ্যায় মনকে মেরে ফেলা হয় না। তাকে না বলা হয়, থামানো হয়, আর ঘুরিয়ে দেওয়া হয়।"
          },
          {
            "en": "Ibn Kathir's wording has a homecoming in it: he forbade his self its desire and returned it to obedience to its Master, mawlaha. Al-Qurtubi uses at-Tabari's verb, zajaraha, he restrained it, and names what from: sins and forbidden things. As-Sa'di traces a sequence. The fear left its mark on his heart, so he forbade his self the desire that holds it back from obeying Allah; his desire became a follower of what the Messenger ﷺ brought; and he struggled against the desire and appetite that turn a person away from good.",
            "bn": "ইবন কাসীরের কথায় ঘরে ফেরার একটা ছবি আছে। সে মনকে তার কামনা থেকে নিষেধ করেছে আর তাকে ফিরিয়ে এনেছে তার মালিকের, মাওলাহা, আনুগত্যে। কুরতুবী তাবারীর ক্রিয়াটিই ব্যবহার করেন, যাজারাহা, সে মনকে বিরত রেখেছে। কী থেকে, সেটাও বলেন: গুনাহ আর হারাম থেকে। সা'দী একটা ধারাবাহিকতা দেখান। ভয় তার অন্তরে দাগ কেটেছে। ফলে আল্লাহর আনুগত্যে যে কামনা বাধা হয়ে দাঁড়ায়, সে মনকে তা থেকে নিষেধ করেছে। তার চাওয়া রাসূল ﷺ-এর আনা বিধানের অনুগামী হয়ে গেছে। আর ভালো কাজ থেকে যে কামনা ও লালসা ফিরিয়ে রাখে, সে তার বিরুদ্ধে লড়াই করেছে।"
          },
          {
            "en": "In as-Sa'di's order the fear comes first, works on the heart, and the restraint grows out of it. Ma'arif al-Qur'an reaches a similar point in its own words. The verse, it says, lays down two conditions for reaching the abode, but carefully considered they are one in consequence, because fear of Allah is what causes a person to restrain the self from evil desires. On that reading the two clauses are not two separate achievements. The second is what the first looks like once it is acted on.",
            "bn": "সা'দীর ক্রমে ভয় আসে আগে, অন্তরে কাজ করে, আর তার ভেতর থেকে জন্ম নেয় নিজেকে থামানো। মাআরিফুল কুরআন নিজের ভাষায় কাছাকাছি কথাই বলে। তার মতে আয়াতটি ঠিকানায় পৌঁছানোর দুটি শর্ত দেয়। তবে ভালো করে ভাবলে ফলাফলের দিক থেকে দুটি আসলে একই। কারণ আল্লাহর ভয়ই মানুষকে মন্দ কামনা থেকে নিজেকে সামলাতে বাধ্য করে। এ পাঠে দুটি অংশ আলাদা দুটি অর্জন নয়। প্রথমটি কাজে নামলে যে চেহারা নেয়, সেটাই দ্বিতীয়টি।"
          }
        ]
      },
      {
        "h": {
          "en": "Desire, Measured by His Command",
          "bn": "কামনার মাপকাঠি তাঁর হুকুম"
        },
        "p": [
          {
            "en": "Al-hawa is desire, and the verse gives it no adjective. The commentators supply what it leaves open. Each text consulted here ties it to what Allah forbids or dislikes. At-Tabari speaks of the self's desire in what Allah dislikes. Al-Baghawi: from the forbidden things it craves. Al-Qurtubi: from sins and forbidden things. The Muyassar puts it in the plural with a qualifier, al-ahwa' al-fasida, the corrupt desires. Ma'arif al-Qur'an inserts a bracket into its rendering: he restrained his self from the [evil] desire.",
            "bn": "আল-হাওয়া মানে কামনা, আর আয়াত এর সঙ্গে কোনো বিশেষণ জোড়ে না। তাফসীরকারেরা জোড়েন। যে লেখাগুলো দেখা হয়েছে, তার প্রত্যেকটি একে বেঁধে দেয় আল্লাহ যা নিষেধ করেন বা অপছন্দ করেন তার সঙ্গে। তাবারী বলেন, আল্লাহর অপছন্দের বিষয়ে মনের কামনা। বাগাভী বলেন, মন যেসব হারাম জিনিস চায়, তা থেকে। কুরতুবী বলেন, গুনাহ আর হারাম থেকে। মুয়াসসার শব্দটিকে বহুবচনে আনে, সঙ্গে বিশেষণ: আল-আহওয়াউল ফাসিদা, নষ্ট কামনাগুলো। মাআরিফুল কুরআন তার অনুবাদে বন্ধনী বসায়: সে মনকে [মন্দ] কামনা থেকে সামলেছে।"
          },
          {
            "en": "As-Sa'di defines the desire by what it does: it holds the self back from obeying Allah, and beside it stands the appetite that bars a person from good. Read together, none of the commentaries consulted here takes the verse as a command to stop wanting altogether. What the self is forbidden is a desire pulling against what Allah commanded. The measure the commentators give is His command, not the strength of the wanting, and the line they draw runs where His command runs.",
            "bn": "সা'দী কামনাকে চেনান তার কাজ দিয়ে। সে মনকে আল্লাহর আনুগত্য থেকে আটকে রাখে, আর তার পাশে থাকে লালসা, যা মানুষকে ভালো কাজ থেকে ফিরিয়ে রাখে। সব কটি তাফসীর একসঙ্গে পড়লে দেখা যায়, কেউই আয়াতটিকে চাওয়া পুরোপুরি বন্ধ করার হুকুম হিসেবে পড়েন না। মনকে নিষেধ করা হয় সেই কামনা থেকে, যা আল্লাহর হুকুমের উল্টো দিকে টানে। তাফসীরকারদের দেওয়া মাপকাঠি তাঁর হুকুম, চাওয়ার তীব্রতা নয়। তাঁরা যে সীমারেখা টানেন, তা চলে তাঁর হুকুম বরাবর।"
          },
          {
            "en": "Al-Qurtubi relays two sayings on the word. Sahl said that leaving desire is the key to Paradise, and cited this very verse. Abdullah ibn Mas'ud (RA) said: you are in a time when truth leads desire, and a time will come when desire leads truth, and we seek refuge in Allah from that time. Al-Qurtubi gives both without a chain of narrators, and they are reported here as his citations of those two men, not as words of the Prophet ﷺ.",
            "bn": "কুরতুবী শব্দটির প্রসঙ্গে দুটি উক্তি আনেন। সাহল বলেছেন, কামনা ছেড়ে দেওয়াই জান্নাতের চাবি, আর প্রমাণ হিসেবে এই আয়াতটিই পড়েছেন। আবদুল্লাহ ইবন মাসউদ (রাঃ) বলেছেন: তোমরা এমন যুগে আছ, যখন সত্য কামনাকে চালায়। আর এমন যুগ আসবে, যখন কামনা সত্যকে চালাবে। সেই যুগ থেকে আমরা আল্লাহর আশ্রয় চাই। কুরতুবী দুটি উক্তিই বর্ণনাসূত্র ছাড়া উল্লেখ করেছেন। তাই এখানে এগুলো ওই দুজনের কথা হিসেবে কুরতুবীর উদ্ধৃতি মাত্র, নবী ﷺ-এর বাণী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Wrong Is Within Reach",
          "bn": "গুনাহ যখন হাতের নাগালে"
        },
        "p": [
          {
            "en": "Several glosses place the verse at one particular moment. Al-Baghawi cites Muqatil: it is the man who intends a sin, then remembers his standing for the reckoning, and leaves it. Al-Qurtubi gives Mujahid's version, fear at the moment of falling into sin so that he desists, and adds from al-Kalbi that it concerns someone who resolved on a sin, had the power to commit it in private, and then left it out of fear of Allah. He notes something similar from Ibn Abbas (RA), and closes: and Allah knows best.",
            "bn": "কয়েকটি ব্যাখ্যা আয়াতটিকে একটি নির্দিষ্ট মুহূর্তে বসায়। বাগাভী মুকাতিলের কথা আনেন: এ সেই মানুষ, যে কোনো গুনাহের ইচ্ছা করে, তারপর হিসাবের জন্য নিজের দাঁড়ানোর কথা মনে করে, আর গুনাহটা ছেড়ে দেয়। কুরতুবী আনেন মুজাহিদের ভাষ্য: গুনাহে জড়ানোর মুহূর্তে ভয়, ফলে সে থেমে যায়। সঙ্গে কালবীর কথা যোগ করেন। এ আয়াত সেই ব্যক্তিকে নিয়ে, যে গুনাহের সংকল্প করেছিল, নির্জনে তা করার সামর্থ্যও ছিল, তবু আল্লাহর ভয়ে ছেড়ে দিয়েছে। ইবন আব্বাস (রাঃ) থেকেও এমন কথা আছে বলে তিনি উল্লেখ করেন, আর শেষ করেন এই বলে: আল্লাহই ভালো জানেন।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing Qadi Thana'ullah Panipati's Tafsir Mazhari, describes three levels of restraining the self. The first is to avoid false beliefs that conflict with the clear texts. In the middle level a person thinks of committing a sin, remembers that he must account for his deeds before Allah, and abandons the thought; its completion is to keep away from doubtful matters too. The highest, reached through abundant remembrance and sustained struggle, is a self so cleansed that the pull towards evil is gone, and Ma'arif connects it with 15:42.",
            "bn": "মাআরিফুল কুরআন কাযী সানাউল্লাহ পানিপথীর তাফসীরে মাযহারী থেকে মনকে দমনের তিনটি স্তর তুলে ধরে। প্রথম স্তরে মানুষ এমন ভ্রান্ত বিশ্বাস থেকে দূরে থাকে, যা স্পষ্ট দলিল বিরোধী। মাঝের স্তরে মানুষের মনে গুনাহের চিন্তা আসে। তখন তার মনে পড়ে, আল্লাহর সামনে আমলের হিসাব দিতে হবে, আর সে চিন্তাটা ছেড়ে দেয়। এ স্তরের পূর্ণতা হলো সন্দেহজনক বিষয় থেকেও দূরে থাকা। সর্বোচ্চ স্তরে পৌঁছানো যায় বেশি বেশি জিকির আর লাগাতার সাধনায়। তখন মন এমন পরিচ্ছন্ন হয় যে মন্দের দিকে টান আর থাকে না। মাআরিফুল কুরআন এ স্তরকে ১৫:৪২ আয়াতের সঙ্গে যুক্ত করে।"
          },
          {
            "en": "Al-Qurtubi also lists reports on whom the verse came down about, and they do not agree. One, through ad-Dahhak from Ibn Abbas, names Mus'ab ibn Umayr (RA) and his brother; another, again from Ibn Abbas, pairs Mus'ab with a different man; as-Suddi names Abu Bakr (RA). Because the reports conflict and none was confirmed as an established cause of revelation on a page consulted for this verse, the article rests nothing on them and reads the verse by its place, as the answering half of 79:37, 79:38 and 79:39.",
            "bn": "আয়াতটি কাকে নিয়ে নাজিল হয়েছে, সে বিষয়ে কুরতুবী কয়েকটি বর্ণনাও তুলে ধরেন, আর সেগুলো একমত নয়। দাহহাকের সূত্রে ইবন আব্বাস থেকে একটি বর্ণনায় নাম আসে মুসআব ইবন উমাইর (রাঃ) ও তাঁর ভাইয়ের। ইবন আব্বাস থেকেই আরেকটি বর্ণনা মুসআবের পাশে রাখে ভিন্ন আরেকজনকে। সুদ্দী নাম নেন আবু বকর (রাঃ)-এর। বর্ণনাগুলো পরস্পরবিরোধী, আর এ আয়াতের জন্য দেখা কোনো পাতায় এর কোনোটিকে প্রতিষ্ঠিত শানে নুযূল হিসেবে নিশ্চিত করা যায়নি। তাই এ লেখা এগুলোর উপর কিছুই দাঁড় করায় না। আয়াতটিকে পড়ে তার অবস্থান দিয়ে: ৭৯:৩৭, ৭৯:৩৮ ও ৭৯:৩৯-এর জবাবি অর্ধেক হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Portraits on One Day",
          "bn": "এক দিনের দুই ছবি"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses the other side briefly. The one who transgressed rebels and behaves arrogantly, and preferring the life of this world means giving it precedence over the matters of his religion and his Hereafter. Set against that, 79:40 says nothing about this person's share of the world; it names only a fear and a restraint. Both portraits open with amma man, both are drawn in two acts, and 79:39 closes the first: fa-inna al-jahima hiya al-ma'wa. The answer to this verse comes in 79:41.",
            "bn": "ইবন কাসীর অন্য দিকটি সংক্ষেপে ব্যাখ্যা করেন। যে সীমা ছাড়িয়েছে, সে বিদ্রোহ করে আর অহংকার দেখায়। আর দুনিয়ার জীবনকে আগে রাখা মানে দ্বীন ও আখিরাতের বিষয়ের উপর তাকে প্রাধান্য দেওয়া। এর বিপরীতে ৭৯:৪০ এই মানুষটির দুনিয়ার ভাগ নিয়ে কিছুই বলে না। বলে শুধু একটি ভয় আর একটি সংযমের কথা। দুটি ছবিই শুরু হয় আম্মা মান দিয়ে, দুটিই আঁকা হয়েছে দুটি কাজে। প্রথম ছবিটি শেষ হয় ৭৯:৩৯-এ: ফা ইন্নাল জাহীমা হিয়াল মা'ওয়া। এ আয়াতের জবাব আসে ৭৯:৪১-এ।"
          },
          {
            "en": "The verses describe two kinds of conduct and two outcomes on a single Day, and they describe them in the third person. The transgressors of 79:37, 79:38 and 79:39 are drawn by what they did; no tribe, family or neighbour is named. The passage speaks only of what it names, and it licenses nothing against any living person or community. Nor does 79:40 hand anyone a way to grade another person's fear or another person's desires. The fear it names sits in a heart that no one else can see.",
            "bn": "আয়াতগুলো একই দিনের দুই রকম আচরণ আর দুই রকম পরিণতির কথা বলে, আর বলে কাউকে সরাসরি সম্বোধন না করে। ৭৯:৩৭, ৭৯:৩৮ ও ৭৯:৩৯-এর সীমালঙ্ঘনকারীদের চেনানো হয়েছে তাদের কাজ দিয়ে। কোনো গোত্র, পরিবার বা প্রতিবেশীর নাম সেখানে নেই। আয়াতগুলোতে যা আছে, তার বাইরে এরা কিছু বলে না, আর কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না। ৭৯:৪০-ও কাউকে অন্যের ভয় বা অন্যের কামনা মেপে দেখার অধিকার দেয় না। যে ভয়ের কথা এখানে, তা থাকে এমন অন্তরে, যা আর কেউ দেখতে পায় না।"
          },
          {
            "en": "No commentary consulted here attaches a sound hadith to this verse. Ma'arif al-Qur'an, in its discussion of the levels of restraint, cites general narrations, one on keeping away from doubtful matters and one on a person's desire following what the Prophet ﷺ brought. Neither is tied to this verse by the text that cites it. The first is too long to quote whole here and is not clipped; the second was not confirmed in a graded collection; neither is quoted.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো সহীহ হাদিস জুড়ে দেয়নি। মাআরিফুল কুরআন সংযমের স্তর আলোচনায় দুটি সাধারণ বর্ণনা আনে। একটি সন্দেহজনক বিষয় থেকে দূরে থাকা নিয়ে, অন্যটি মানুষের কামনা নবী ﷺ-এর আনা বিধানের অনুগামী হওয়া নিয়ে। যে লেখা এগুলো এনেছে, সেখানেও এগুলোকে এ আয়াতের সঙ্গে বাঁধা হয়নি। প্রথমটি এত দীর্ঘ যে এখানে পুরোটা তুলে দেওয়া যায় না, আর কেটে ছোট করেও দেওয়া হয়নি। দ্বিতীয়টি মান নির্ধারিত কোনো হাদিস সংকলনে নিশ্চিত করা যায়নি। তাই কোনোটিই এখানে উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Memory That Comes in Time",
          "bn": "সময়মতো যে কথা মনে পড়ে"
        },
        "p": [
          {
            "en": "The verse does not describe a person without desire. It describes one whose self wanted something and who forbade it, which assumes the wanting was there. Al-Baghawi's wording, the forbidden things it craves, keeps the craving in view. What turns the moment in every gloss gathered here is something remembered at the right time: the standing, the question, the judgement, or Allah's own standing over the servant.",
            "bn": "আয়াতটি কামনাহীন কোনো মানুষের ছবি আঁকে না। আঁকে এমন একজনের ছবি, যার মন কিছু একটা চেয়েছিল, আর সে মনকে নিষেধ করেছিল। অর্থাৎ চাওয়াটা ছিল। বাগাভীর ভাষা, মন যেসব হারাম জিনিস চায়, সেই চাওয়াকে চোখের সামনে রাখে। এখানে জড়ো করা প্রতিটি ব্যাখ্যায় মুহূর্তটার মোড় ঘোরায় ঠিক সময়ে মনে পড়া একটি কথা। কখনো তা দাঁড়ানো, কখনো প্রশ্ন, কখনো ফয়সালা, কখনো বান্দার উপর আল্লাহর নিজের দাঁড়িয়ে থাকা।"
          },
          {
            "en": "For a reader today, the verse asks something that cannot be checked from outside. Each person knows where his own self pulls, in money, in speech, in what is done when nobody is watching, and only he knows whether the thought of standing before his Lord reaches him before the act or after it. The verse holds up a mirror to whoever reads it. It is not a tool for measuring anyone else's desires or struggles, and its sentence is completed by 79:41, the verse that follows.",
            "bn": "আজকের পাঠকের কাছে আয়াতটি এমন কিছু চায়, যা বাইরে থেকে যাচাই করা যায় না। প্রত্যেকে জানে তার মন কোথায় টানে। টাকাপয়সায়, কথাবার্তায়, কিংবা কেউ না দেখলে যা করা হয় তাতে। রবের সামনে দাঁড়ানোর কথা কাজের আগে মনে পড়ে, নাকি পরে, সেটাও শুধু সে নিজেই জানে। আয়াতটি পাঠকের নিজের সামনে আয়না ধরে। অন্য কারও কামনা বা সংগ্রাম মাপার যন্ত্র এটি নয়। আর এর বাক্যটি পূর্ণ হয় পরের আয়াত ৭৯:৪১-এ।"
          }
        ]
      }
    ]
  },
  "79:46": {
    "sections": [
      {
        "h": {
          "en": "The Surah's Last Reply",
          "bn": "সূরার শেষ জবাব"
        },
        "p": [
          {
            "en": "Surah an-Nazi'at closes on this verse, and with it closes an exchange that began four verses earlier. In 79:42 they ask about the Hour: when is its arrival? Al-Muyassar, explaining 79:43 to 79:46 as one passage, names the askers as the idolaters and says they asked mockingly, about the time when the Hour they were being threatened with would fall. Its gloss of the reply is brief: the Messenger has nothing of its knowledge, its return is to Allah, and his task regarding the Hour is to warn whoever fears it.",
            "bn": "সূরা আন-নাযিআত শেষ হয় এই আয়াতে, আর সঙ্গে শেষ হয় এক প্রশ্নোত্তর, যার শুরু চারটি আয়াত আগে। ৭৯:৪২ আয়াতে তারা কিয়ামত সম্পর্কে জানতে চায়: তা কখন ঘটবে? আল-মুয়াসসার ৭৯:৪৩ থেকে ৭৯:৪৬ পর্যন্ত আয়াতগুলোকে একটি অংশ ধরে ব্যাখ্যা করে। তার ভাষ্যে প্রশ্নকারীরা মুশরিক, আর প্রশ্নটা ছিল ঠাট্টার ছলে: যে কিয়ামতের ভয় তাদের দেখানো হচ্ছে, সেটা নামবে কবে? জবাবের ব্যাখ্যাও ছোট। এর জ্ঞানের কিছুই রাসূল ﷺ-এর হাতে নেই, এর ফয়সালা আল্লাহর কাছে। কিয়ামতের ব্যাপারে তাঁর কাজ এটুকুই: যে একে ভয় করে, তাকে সতর্ক করা।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the closing verses the same way. It calls the request a mala fide demand from the disbelievers that the Prophet ﷺ tell them the exact date and time of the Day of Judgement, and answers that this knowledge is Allah's own prerogative: His wisdom did not pass it to any angel or prophet, so the demand is futile. Then the last verse speaks. It does not say when the Hour will come. It says how long the life behind them will seem to the askers once it has come.",
            "bn": "মাআরিফুল কুরআনও শেষ আয়াতগুলো এভাবেই পড়ে। তার ভাষায় এটা ছিল কাফেরদের অসৎ উদ্দেশ্যের দাবি: নবী ﷺ যেন কিয়ামতের সঠিক দিন-তারিখ তাদের জানিয়ে দেন। মাআরিফুল কুরআনের জবাব, এ জ্ঞান একান্তই আল্লাহর এখতিয়ারে। তাঁর হিকমত এ খবর কোনো ফেরেশতা বা নবীকে দেয়নি, তাই দাবিটাই অর্থহীন। এরপর আসে সূরার শেষ আয়াত। কিয়ামত কবে আসবে, আয়াত সে কথা বলে না। বলে, কিয়ামত এসে গেলে পেছনে ফেলে আসা জীবনটা প্রশ্নকারীদের কাছে কত লম্বা মনে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Sees, and What",
          "bn": "কারা দেখবে, কী দেখবে"
        },
        "p": [
          {
            "en": "Kaannahum, as though they. At-Tabari identifies them as these deniers of the Hour, al-Qurtubi as the disbelievers, and al-Baghawi more narrowly as the disbelievers of Quraysh. The pronoun in yarawnaha, they see it, points back to the Hour of 79:42. At-Tabari spells out the moment as the day they see that the Hour has come, with the immensity of its terror; al-Muyassar as the day they see the Hour established; al-Baghawi glosses the seeing as beholding the Day of Resurrection with their own eyes.",
            "bn": "কাআন্নাহুম, যেন তারা। তাবারীর মতে এরা কিয়ামত অস্বীকারকারী সেই লোকেরা। কুরতুবী বলেন কাফেররা, আর বাগাভী আরও নির্দিষ্ট করে বলেন কুরাইশের কাফেররা। ইয়ারাওনাহা, তারা তা দেখবে: এখানে সর্বনামটি ফিরে যায় ৭৯:৪২ আয়াতের কিয়ামতের দিকে। তাবারী মুহূর্তটার ছবি দেন এভাবে: যেদিন তারা দেখবে কিয়ামত এসে গেছে, তার ভয়াবহতার বিশালতা নিয়ে। মুয়াসসার বলে, যেদিন তারা কিয়ামত কায়েম হতে দেখবে। বাগাভী এই দেখাকে ব্যাখ্যা করেন নিজের চোখে কিয়ামতের দিন প্রত্যক্ষ করা হিসেবে।"
          },
          {
            "en": "Ibn Kathir fixes the moment at one particular point in the scene: when they rise from their graves and go out to the place of gathering. Then, he says, they yastaqsirun, they reckon the span of their worldly life short, until it seems to them to have been an evening of a day or a forenoon of a day. The rest of the verse is that reckoning. It is made by people who have just stood up out of the earth, looking back over everything they lived before it.",
            "bn": "ইবন কাসীর মুহূর্তটাকে দৃশ্যের একটি নির্দিষ্ট জায়গায় স্থির করেন: যখন তারা কবর থেকে উঠে হাশরের ময়দানের দিকে যাবে। তখন, তাঁর ভাষায়, তারা ইয়াসতাকসিরূন, দুনিয়ার জীবনের মেয়াদকে খাটো মনে করবে। এতটাই খাটো যে মনে হবে, তা ছিল কোনো দিনের এক সন্ধ্যা কিংবা কোনো দিনের এক পূর্বাহ্ণ। আয়াতের বাকি অংশ সেই হিসাবেরই কথা। হিসাবটা করছে এমন মানুষ, যারা এইমাত্র মাটি ফুঁড়ে উঠে দাঁড়িয়েছে আর পেছন ফিরে দেখছে আগের গোটা জীবনটা।"
          },
          {
            "en": "The verse describes the deniers who asked about the Hour in mockery, and what they will feel on the day they see it. It is a description of them and licenses nothing against any living person or community; it gives no one a warrant to point at a neighbour and assign him to this verse. Al-Muyassar's gloss of 79:45 puts the warning where it lands, on whoever fears the Hour, and that is the seat the passage offers its reader: the place of the one who is warned.",
            "bn": "আয়াতটি সেই অস্বীকারকারীদের বর্ণনা দেয়, যারা ঠাট্টা করে কিয়ামতের কথা জিজ্ঞেস করেছিল, আর বলে কিয়ামত দেখার দিন তাদের কেমন লাগবে। এটা তাদেরই বর্ণনা। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। প্রতিবেশীর দিকে আঙুল তুলে তাকে এ আয়াতের লোক বানানোর অধিকারও কাউকে দেয় না। মুয়াসসার ৭৯:৪৫ আয়াতের ব্যাখ্যায় সতর্কবাণীকে রাখে তার আসল ঠিকানায়: যে কিয়ামতকে ভয় করে, তার কাছে। পাঠকের জন্য এ অংশে জায়গা ওই একটাই, সতর্ক হওয়া মানুষের জায়গা।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Portions of Daylight",
          "bn": "দিনের আলোর দুই ভাগ"
        },
        "p": [
          {
            "en": "'Ashiyyatan aw duhaha: an evening or its forenoon. Ibn Kathir reports from Ibn Abbas (RA), through Juwaybir from ad-Dahhak, exact limits for both words. 'Ashiyyah is what lies between az-zuhr, the time of the midday prayer, and the setting of the sun; duha is what lies between sunrise and the middle of the day. Al-Muyassar adopts the same two limits in its own gloss: they will feel they stayed in the life of this world only from noon to sunset, or from sunrise to midday.",
            "bn": "আশিয়্যাতান আও দুহাহা: এক সন্ধ্যা অথবা তার পূর্বাহ্ণ। ইবন কাসীর জুওয়াইবির থেকে, তিনি দাহহাক থেকে, তিনি ইবন আব্বাস (রাঃ) থেকে দুটি শব্দেরই নির্দিষ্ট সীমা বর্ণনা করেন। আশিয়্যাহ হলো জোহরের সময় থেকে সূর্য ডোবা পর্যন্ত, আর দুহা হলো সূর্য ওঠা থেকে দুপুর পর্যন্ত। মুয়াসসারও নিজের ব্যাখ্যায় এই দুই সীমাই নেয়। তার ভাষায়, তাদের মনে হবে দুনিয়ার জীবনে তারা থেকেছে কেবল জোহর থেকে সূর্যাস্ত পর্যন্ত, অথবা সূর্যোদয় থেকে দুপুর পর্যন্ত।"
          },
          {
            "en": "Read with those limits, the two options are the two halves of one day's light, the afternoon on one side and the morning on the other. Ibn Kathir's paraphrase keeps both tied to a day: an evening of a day, or a forenoon of a day. Al-Qurtubi adds the word qadr, measure: the measure of an evening, or the measure of the forenoon that adjoins that evening. And he states the purpose of the phrase outright: the intent is to make the span of the world small.",
            "bn": "এই সীমা ধরে পড়লে বিকল্প দুটি একই দিনের আলোর দুই অর্ধেক: একদিকে বিকেল, অন্যদিকে সকাল। ইবন কাসীরের ব্যাখ্যাতেও দুটোই দিনের সঙ্গে বাঁধা: কোনো দিনের এক সন্ধ্যা, অথবা কোনো দিনের এক পূর্বাহ্ণ। কুরতুবী যোগ করেন 'কদর' শব্দটি, অর্থাৎ পরিমাণ। এক সন্ধ্যার পরিমাণ, অথবা সেই সন্ধ্যার লাগোয়া পূর্বাহ্ণের পরিমাণ। আর কথাটার উদ্দেশ্যও তিনি খোলাখুলি বলে দেন: দুনিয়ার মেয়াদকে অল্প করে দেখানোই এখানে লক্ষ্য।"
          },
          {
            "en": "Al-Qurtubi also reports, from ad-Dahhak from Ibn Abbas (RA), a reading of the whole phrase that drops the two halves altogether: as though, on the day they see it, they had stayed but a single day. Ibn Kathir's report, through the same ad-Dahhak, divides the day into its halves; al-Qurtubi's report gathers them back into one. The two do not contradict each other. Whether it is called a day or half of one, the years have shrunk to something a person could live through between two meals.",
            "bn": "কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে পুরো কথাটার আরেকটি পাঠও বর্ণনা করেন, যেখানে দুই অর্ধেকের ভাগ নেই: যেদিন তারা তা দেখবে, মনে হবে তারা যেন মাত্র একটি দিন থেকেছে। ইবন কাসীরের বর্ণনা, একই দাহহাকের সূত্রে, দিনটাকে দুই ভাগে ভাগ করে। কুরতুবীর বর্ণনা ভাগ দুটোকে আবার এক দিনে জুড়ে দেয়। দুটোর মধ্যে বিরোধ নেই। এক দিন বলা হোক বা আধা দিন, বছরের পর বছর গুটিয়ে এসে দাঁড়িয়েছে এমন এক সময়ে, যা মানুষ দুই বেলা খাবারের মাঝখানেই পার করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Forenoon Owned by an Evening",
          "bn": "সন্ধ্যার নিজের পূর্বাহ্ণ"
        },
        "p": [
          {
            "en": "The grammar raised a question early. Al-Qurtubi and al-Baghawi both quote the grammarian al-Farra': does an evening have a forenoon? The forenoon belongs to the front of the day. Yet the verse says duhaha, its forenoon, with the pronoun pointing back to the evening. Al-Farra' answers from the speech of the Arabs, who say: I will come to you in the evening or its morning, and I will come to you in the morning or its evening. In al-Qurtubi's report, the forenoon is attached to the evening because both belong to the one day in which the evening falls.",
            "bn": "ব্যাকরণ নিয়ে একটা প্রশ্ন শুরুতেই উঠেছিল। কুরতুবী ও বাগাভী দুজনেই ব্যাকরণবিদ ফাররার কথা উদ্ধৃত করেন: সন্ধ্যার আবার পূর্বাহ্ণ হয় নাকি? পূর্বাহ্ণ তো দিনের শুরুর অংশ। অথচ আয়াত বলছে দুহাহা, তার পূর্বাহ্ণ, আর সর্বনামটি ফিরে যাচ্ছে সন্ধ্যার দিকে। ফাররা জবাব দেন আরবদের মুখের ভাষা থেকে। তারা বলে: তোমার কাছে আসব সন্ধ্যায় বা তার সকালে, আবার বলে: আসব সকালে বা তার সন্ধ্যায়। কুরতুবীর বর্ণনায়, পূর্বাহ্ণকে সন্ধ্যার সঙ্গে জুড়ে দেওয়া হয়েছে, কারণ দুটোই সেই একই দিনের, যে দিনে সন্ধ্যাটি পড়ে।"
          },
          {
            "en": "At-Tabari makes the same argument in his own words. He glosses the phrase as the evening of a day or the forenoon of that same evening, cites the identical Arab expression, and explains that ghadah, morning, is used for the first part of the day and 'ashiyyah for its last. His conclusion is a single sentence: illa 'ashiyyatan aw duhaha means only the end of a day or its beginning. A footnote in the printed text traces the argument and its evidence back to al-Farra''s Ma'ani al-Qur'an.",
            "bn": "তাবারী একই যুক্তি দেন নিজের ভাষায়। তিনি কথাটির ব্যাখ্যা করেন কোনো দিনের সন্ধ্যা, অথবা সেই সন্ধ্যারই পূর্বাহ্ণ হিসেবে। তারপর আরবদের ঠিক ওই কথাটিই উদ্ধৃত করে বুঝিয়ে দেন, গাদাহ বা সকাল বলা হয় দিনের প্রথম অংশকে, আর আশিয়্যাহ বলা হয় শেষ অংশকে। তাঁর উপসংহার এক বাক্যের: ইল্লা আশিয়্যাতান আও দুহাহা মানে কেবল কোনো দিনের শেষভাগ অথবা তার শুরু। ছাপা সংস্করণের এক পাদটীকা যুক্তিটি ও তার প্রমাণ ফাররার মাআনিল কুরআন পর্যন্ত খুঁজে দেখায়।"
          },
          {
            "en": "The evidence is a line of verse which al-Farra' said a man of Banu 'Uqayl recited to him, and which both at-Tabari and al-Qurtubi quote: we fell upon 'Amir in their home at daybreak, on the evening of the new moon or its sirar. Al-Farra' read it as the evening of the new moon, or the sirar of that evening, and judged it a rarer use than the everyday I will come to you in the morning or its evening. The construction was at home in Arabic: one part of a day could be spoken of as belonging to another part of the same day.",
            "bn": "প্রমাণ হিসেবে আছে একটি কবিতার চরণ, যা ফাররার ভাষ্যমতে বনু উকাইলের এক লোক তাঁকে আবৃত্তি করে শুনিয়েছিল। তাবারী ও কুরতুবী দুজনেই চরণটি উদ্ধৃত করেন: আমরা ভোরবেলা আমিরের লোকদের ওপর তাদের ঘরে চড়াও হয়েছিলাম, নতুন চাঁদের সন্ধ্যায় অথবা তার সিরারে। ফাররা এর অর্থ নেন নতুন চাঁদের সন্ধ্যা, অথবা সেই সন্ধ্যার সিরার। তাঁর বিচারে এই প্রয়োগ রোজকার 'আসব সকালে বা তার সন্ধ্যায়' কথাটির চেয়েও বিরল। বোঝা যায়, আরবি ভাষায় এমন গঠন অচেনা ছিল না। একই দিনের এক অংশকে অন্য অংশের 'তার' বলে উল্লেখ করা চলত।"
          }
        ]
      },
      {
        "h": {
          "en": "In the World, or the Grave?",
          "bn": "দুনিয়ায়, নাকি কবরে?"
        },
        "p": [
          {
            "en": "Where did they stay so briefly? Most of the fetched commentaries answer: in the world. At-Tabari writes that they did not stay in the world except the evening of a day; al-Muyassar says in the life of this world; Ibn Kathir speaks of the span of worldly life; al-Qurtubi's first gloss reads lam yalbathu as in their worldly life; al-Baghawi's first gloss is in the world. Qatada's line, carried by both at-Tabari and Ibn Kathir, says the same: the time of the world in the eyes of the people when they beheld the hereafter.",
            "bn": "এত অল্প সময় তারা কোথায় থেকেছিল? হাতে থাকা তাফসীরগুলোর বেশির ভাগের উত্তর: দুনিয়ায়। তাবারী লেখেন, দুনিয়ায় তারা কোনো দিনের এক সন্ধ্যার বেশি থাকেনি। মুয়াসসার বলে দুনিয়ার জীবনে। ইবন কাসীর বলেন দুনিয়ার জীবনের মেয়াদের কথা। কুরতুবীর প্রথম ব্যাখ্যায় লাম ইয়ালবাসূ মানে তাদের দুনিয়ার জীবনে, আর বাগাভীর প্রথম ব্যাখ্যাও দুনিয়ায়। কাতাদার একটি কথা তাবারী ও ইবন কাসীর দুজনেই এনেছেন, সেটাও একই কথা বলে: আখিরাত চোখের সামনে দেখার পর লোকদের চোখে দুনিয়ার সময়টুকু।"
          },
          {
            "en": "A second reading appears in two of the commentaries, each time introduced with qila, it has been said, and with no name attached. Al-Baghawi adds after his first gloss: and it is said, in their graves. Al-Qurtubi gives the reason behind it: they will count their stay in the graves short because of the terror they behold. The Arabic verb lam yalbathu, they did not remain, names no place, which is what leaves room for both. The app's English and Bengali translations both add 'in the world' in brackets, the first reading. Neither commentator weighs the two, and this article does not either.",
            "bn": "দ্বিতীয় একটি পাঠ পাওয়া যায় দুটি তাফসীরে। দুবারই তা আসে 'কীলা', অর্থাৎ 'বলা হয়েছে' দিয়ে, কারও নাম ছাড়া। বাগাভী প্রথম ব্যাখ্যার পরে যোগ করেন: আর বলা হয়, তাদের কবরে। কুরতুবী এর কারণ দেন: যে ভয়াবহতা তারা দেখবে, তার কারণে কবরে কাটানো সময়কে তারা খাটো মনে করবে। আরবি ক্রিয়া লাম ইয়ালবাসূ, তারা থাকেনি, কোনো জায়গার নাম বলে না, তাই দুই পাঠেরই সুযোগ থাকে। এ অ্যাপের ইংরেজি ও বাংলা দুই অনুবাদই বন্ধনীতে যোগ করেছে 'পৃথিবীতে', যা প্রথম পাঠ। দুই তাফসীরের কেউই একটিকে অন্যটির ওপর প্রাধান্য দেননি, এ লেখাও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "What Makes the Years Shrink",
          "bn": "বছরগুলো কেন গুটিয়ে যায়"
        },
        "p": [
          {
            "en": "The commentators also name what does the shrinking, and the word three of them share is hawl, terror. At-Tabari sets the immensity of the Hour's terror beside the moment they see that it has come, and then gives the measure: the evening of a day, or its forenoon. Al-Muyassar names the same cause in so many words: they will feel they stayed so little li-hawl as-sa'ah, because of the terror of the Hour. Al-Qurtubi, explaining the graves reading, uses the same word again: for the terror they behold.",
            "bn": "কিসে এই গুটিয়ে যাওয়া ঘটে, তাফসীরকারেরা সেটাও বলেন, আর তিনজনের ব্যাখ্যায় শব্দ একটাই: হাওল, ভয়াবহতা। তাবারী কিয়ামতের ভয়াবহতার বিশালতাকে রাখেন সেই মুহূর্তের পাশে, যখন তারা দেখবে কিয়ামত এসে গেছে। তারপর দেন মাপটা: কোনো দিনের এক সন্ধ্যা, অথবা তার পূর্বাহ্ণ। মুয়াসসার কারণটা সরাসরি বলে: লি-হাওলিস সাআহ, কিয়ামতের ভয়াবহতার কারণে তাদের মনে হবে এত অল্প সময় থেকেছে। কবরের পাঠ ব্যাখ্যা করতে গিয়ে কুরতুবীও একই শব্দ আনেন: যে ভয়াবহতা তারা দেখবে, তার কারণে।"
          },
          {
            "en": "Qatada's line puts the matter in the eyes of the viewer: the time of the world as it looks to people once they have beheld the hereafter with their own eyes. Nothing in the line says the years were short while they were being lived. It says that when the hereafter is in view, the years are measured against it, and against it they come to an evening. Ibn Kathir's verb says the same from the other side: yastaqsirun, they find the span short, a judgement they themselves make on that day.",
            "bn": "কাতাদার কথাটি বিষয়টাকে রাখে দর্শকের চোখে: আখিরাত নিজের চোখে দেখে ফেলার পর লোকদের কাছে দুনিয়ার সময় কেমন দেখায়, সেই কথা। কথাটি কোথাও বলে না যে বছরগুলো কাটানোর সময়েও ছোট ছিল। বলে, আখিরাত চোখের সামনে এলে বছরগুলো মাপা হয় তার পাশে রেখে, আর তার পাশে সেগুলো এক সন্ধ্যায় এসে ঠেকে। ইবন কাসীরের ক্রিয়াটিও অন্য দিক থেকে একই কথা বলে: ইয়াসতাকসিরূন, তারা মেয়াদটাকে খাটো মনে করে। বিচারটা সেদিন তারা নিজেরাই করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Hour of a Day",
          "bn": "দিনের এক প্রহর"
        },
        "p": [
          {
            "en": "Two of the commentators set one verse beside this one. Al-Qurtubi quotes lam yalbathu illa sa'atan min nahar, they did not stay but an hour of a day, as another statement of the same lessening of the world's span. Al-Baghawi gives the full sentence with its place, al-Ahqaf 35, and calls it a parallel: as though, on the day they see what they are promised, they had not remained except an hour of a day. In 46:35 those words follow a command to the Prophet ﷺ to be patient as the messengers of firm resolve were patient.",
            "bn": "দুজন তাফসীরকার এ আয়াতের পাশে আরেকটি আয়াত রাখেন। কুরতুবী উদ্ধৃত করেন লাম ইয়ালবাসূ ইল্লা সাআতাম মিন নাহার, তারা দিনের এক প্রহরের বেশি থাকেনি। তাঁর কাছে এটা দুনিয়ার মেয়াদকে অল্প করে দেখানোর একই কথার আরেক রূপ। বাগাভী পুরো বাক্যটি দেন সূরা আল-আহকাফের ৩৫ নম্বর আয়াত উল্লেখ করে, আর একে বলেন এ আয়াতের সমতুল্য: যেদিন তারা দেখবে যার ওয়াদা তাদের দেওয়া হয়েছে, মনে হবে তারা যেন দিনের এক প্রহরের বেশি থাকেনি। ৪৬:৩৫ আয়াতে এ কথার আগে নবী ﷺ-কে আদেশ দেওয়া হয়েছে, দৃঢ় সংকল্পের রাসূলগণ যেমন ধৈর্য ধরেছিলেন, তিনিও যেন তেমনি ধৈর্য ধরেন।"
          },
          {
            "en": "The frames are close: kaannahum yawma yarawna, as though, on the day they see. There they see what they were promised; here they see the Hour. There the stay is an hour of a day; here it is an evening or its forenoon. Within an-Nazi'at itself the word duhaha has already been heard once, in 79:29, where Allah darkened the night of the sky He built and brought out its duha. The same word that there named the daylight of creation here measures the whole of a life, looked back on from the Hour.",
            "bn": "দুই আয়াতের কাঠামো খুব কাছাকাছি: কাআন্নাহুম ইয়াওমা ইয়ারাওনা, যেন তারা, যেদিন দেখবে। সেখানে তারা দেখবে যার ওয়াদা দেওয়া হয়েছিল, এখানে দেখবে কিয়ামত। সেখানে থাকার মেয়াদ দিনের এক প্রহর, এখানে এক সন্ধ্যা বা তার পূর্বাহ্ণ। সূরা আন-নাযিআতের ভেতরেই দুহাহা শব্দটি আগে একবার এসেছে, ৭৯:২৯ আয়াতে। সেখানে আল্লাহ তাঁর গড়া আকাশের রাতকে অন্ধকারে ঢেকেছেন আর বের করে এনেছেন তার দুহা, দিনের আলো। যে শব্দ সেখানে সৃষ্টির দিনের আলোর নাম ছিল, এখানে সেটাই হয়ে গেছে গোটা এক জীবনের মাপ, কিয়ামত থেকে পেছন ফিরে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "While the Evening Lasts",
          "bn": "সন্ধ্যা থাকতে থাকতেই"
        },
        "p": [
          {
            "en": "None of the fetched commentaries attaches a hadith to this verse, so none is quoted here; the narrations Ma'arif al-Qur'an gives in this stretch belong to its discussion of 79:40. That verse described the one who feared standing before his Lord, and 79:45 names the one the warning serves: whoever fears the Hour. For that reader the verse is not a threat aimed at someone else. It is a way of seeing his own years now, before the day on which everyone will see them so.",
            "bn": "হাতে থাকা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না। এ অংশে মাআরিফুল কুরআন যে বর্ণনাগুলো আনে, সেগুলো ৭৯:৪০ আয়াতের আলোচনার। ওই আয়াতে আছে সেই মানুষের কথা, যে রবের সামনে দাঁড়ানোর ভয় করেছিল। আর ৭৯:৪৫ আয়াত বলে দেয় সতর্কবাণী কার কাজে লাগে: যে কিয়ামতকে ভয় করে, তার। এমন পাঠকের কাছে আয়াতটি অন্য কারও দিকে তাক করা হুমকি নয়। এটা আজই নিজের বছরগুলোকে দেখার একটা চোখ, সেদিনের আগে, যেদিন সবাই সেগুলো এভাবেই দেখবে।"
          },
          {
            "en": "The askers wanted a date, and the surah gave none. The reader can put a different question to himself: if the whole of a life can come to seem part of one day, what is this part of it for? None of this makes the day worthless. An afternoon holds real work, and a forenoon is half the daylight. What the verse takes away is the feeling that there will be plenty of time later, and it does so while the evening is still going on and something can still be done in it.",
            "bn": "প্রশ্নকারীরা তারিখ চেয়েছিল, সূরা কোনো তারিখ দেয়নি। পাঠক নিজেকে অন্য একটা প্রশ্ন করতে পারেন: গোটা জীবনটাই যদি একদিন মনে হয় এক দিনের একটা অংশ, তাহলে এই অংশটুকু কিসের জন্য? এতে দিনটা মূল্যহীন হয়ে যায় না। এক বিকেলে অনেক কাজ ধরে, আর পূর্বাহ্ণ তো দিনের আলোর অর্ধেক। আয়াতটি যা কেড়ে নেয়, তা হলো 'পরে অনেক সময় পাওয়া যাবে' এই ধারণা। আর কেড়ে নেয় এমন সময়ে, যখন সন্ধ্যা এখনো চলছে, এখনো তাতে কিছু করা যায়।"
          }
        ]
      }
    ]
  }
});
