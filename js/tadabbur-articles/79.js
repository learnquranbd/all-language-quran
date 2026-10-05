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
            "bn": "ওয়ান নাযিআতি গারকা: শপথ তাদের, যারা টেনে বের করে, গভীর থেকে টেনে। আয়াতটি মাত্র দুটি আরবি শব্দ, আর প্রথম শব্দ থেকেই সূরা আন-নাযিআতের নাম। তাবারী তাঁর আলোচনা শুরু করেন সেই প্রশ্ন দিয়ে, যা ধরে এই লেখা এগোবে। আমাদের রব নাযিআতের শপথ করেছেন। তাফসীরকারেরা মতভেদ করেছেন, এরা কারা, আর এরা টেনে বের করে কী।"
          },
          {
            "en": "At-Tabari, al-Qurtubi, as-Sa'di, al-Muyassar and Ma'arif al-Qur'an all name it an oath, and it does not stand alone. Verses 79:2 to 79:5 bring four more of the same build: an-nashitat, as-sabihat, as-sabiqat and al-mudabbirat. The abridged English Ibn Kathir heads the passage Swearing by Five Characteristics that the Day of Judgement will occur, and Ma'arif al-Qur'an speaks of five qualities of the angels tied to the drawing out of the soul. Each of the following oaths has its own verse; this article stays with the first.",
            "bn": "তাবারী, কুরতুবী, সা'দী, মুয়াসসার আর মাআরিফুল কুরআন সবাই একে শপথ বলেছেন। তবে শপথটি একা দাঁড়িয়ে নেই। ৭৯:২ থেকে ৭৯:৫ আয়াতে একই গড়নের আরও চারটি শপথ আসে: আন-নাশিতাত, আস-সাবিহাত, আস-সাবিকাত আর আল-মুদাব্বিরাত। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অংশটির শিরোনাম দেয়: পাঁচটি বৈশিষ্ট্যের শপথ যে বিচারের দিন আসবেই। মাআরিফুল কুরআন বলে ফেরেশতাদের পাঁচটি গুণের কথা, যেগুলো রূহ বের করার সঙ্গে জড়িত। পরের শপথগুলোর প্রতিটির নিজস্ব আয়াত আছে। এই লেখা প্রথমটিতেই থাকবে।"
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
            "bn": "বেশিরভাগ তাফসীরকার যে ব্যাখ্যা আগে রাখেন, তা হলো ফেরেশতা। ইবন কাসীর এ মতের পক্ষে নাম দেন ইবন মাসউদ (রাঃ), ইবন আব্বাস (রাঃ), মাসরূক, সাঈদ ইবন জুবাইর, আবু সালিহ, আবুদ দুহা ও সুদ্দীর। তাঁদের কথা: নাযিআত মানে ফেরেশতারা, যখন তাঁরা আদমসন্তানদের রূহ টেনে বের করেন। তাবারী সনদসহ বর্ণনাগুলো আনেন। মাসরূকের মাধ্যমে আবদুল্লাহ থেকে: ফেরেশতারা। মাসরূক নিজেও তাই বলতেন। ইবন আব্বাস (রাঃ) থেকে: যখন তার রূহ টেনে নেওয়া হয়। আরেক সনদে ইবন আব্বাস (রাঃ) থেকে: রূহগুলো টেনে বের করে।"
          },
          {
            "en": "Whose souls, though? Here the commentators part. Al-Qurtubi defines an-nazi'at as the angels who pull out the souls of the disbelievers, and credits that to Ali; then he adds that Ibn Mas'ud, Ibn Abbas, Masruq and Mujahid said: the angels who pull out the souls of the children of Adam. Al-Baghawi says the angels who pull the disbelievers' souls from their bodies. Al-Muyassar has angels who pull out the disbelievers' souls with a severe pulling, and Ma'arif al-Qur'an speaks of the angels of punishment drawing out the souls of the infidels harshly.",
            "bn": "কিন্তু কাদের রূহ? এখানে তাফসীরকারদের পথ আলাদা হয়। কুরতুবী নাযিআতের অর্থ বলেন, যে ফেরেশতারা কাফেরদের রূহ টেনে বের করেন, আর এ মত তিনি আলী (রাঃ)-এর বলে উল্লেখ করেন। তারপর যোগ করেন, ইবন মাসউদ (রাঃ), ইবন আব্বাস (রাঃ), মাসরূক ও মুজাহিদ বলেছেন: যে ফেরেশতারা আদমসন্তানদের রূহ টেনে বের করেন। বাগাভীর ভাষায়, ফেরেশতারা কাফেরদের রূহ তাদের দেহ থেকে টেনে বের করেন। মুয়াসসার বলে, ফেরেশতারা কাফেরদের রূহ কঠোরভাবে টেনে বের করেন। মাআরিফুল কুরআন বলে আজাবের ফেরেশতাদের কথা, যাঁরা কাফেরদের রূহ কঠিনভাবে টেনে আনেন।"
          },
          {
            "en": "Ibn Kathir, citing Ibn Abbas, reads the verse together with the next: some people's souls are taken with violence, so that the soul sinks deep in the pulling, and some are taken with ease, as though they were simply untied, and that easier taking is 79:2. As-Sa'di keeps the line general and names no group: the angels who pull out the souls with force and go deep in the pulling until the soul comes out, and then it is repaid for its deeds.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর বরাতে আয়াতটিকে পরের আয়াতের সঙ্গে মিলিয়ে পড়েন। কিছু মানুষের রূহ নেওয়া হয় জোর করে, টানের মধ্যে রূহ যেন তলিয়ে যায়। আর কিছু মানুষের রূহ নেওয়া হয় সহজে, যেন বাঁধন খুলে দেওয়া হলো। এই সহজ কবজের কথাই ৭৯:২ আয়াতে। সা'দী কোনো দলের নাম না নিয়ে কথাটা সাধারণ রাখেন: যে ফেরেশতারা শক্তি দিয়ে রূহ টেনে বের করেন, রূহ বেরিয়ে না আসা পর্যন্ত টানে গভীরে যান, তারপর সে নিজের আমলের প্রতিদান পায়।"
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
            "bn": "প্রথম যুগের আরও কয়েকজন শব্দটিতে অন্য কিছু শুনেছেন। মুজাহিদ বলেছেন: মৃত্যু। তাবারী তিনটি সনদে কথাটি আনেন এবং ব্যাখ্যা করেন, মৃত্যু, যা রূহগুলো টেনে বের করে। ইবন কাসীর ও বাগাভীও তাঁর থেকে একই কথা বর্ণনা করেন। তাবারী, কুরতুবী ও বাগাভীতে সুদ্দী বলেন, নাযিআত হলো খোদ রূহ, যখন তা বুকের ভেতর তলিয়ে যায়। অথচ ইবন কাসীর, আগেই দেখা গেছে, সুদ্দীকে ফেরেশতা-মতের লোকদের মধ্যে গণনা করেন। কুরতুবীও মুজাহিদকে সেই দলে রাখেন। ফলে উৎসগুলোতে দুজনের নামই একাধিক মতের পাশে পাওয়া যায়।"
          },
          {
            "en": "Al-Hasan and Qatada said: the stars. At-Tabari explains, stars that pass from horizon to horizon, and al-Baghawi adds Ibn Kaysan and the gloss that they rise and then set. Al-Qurtubi gives the language behind it: the Arabs say naza'a ilayhi, he went off to it, and naza'at al-khayl, the horses ran. On this reading gharqa means that the stars sink and vanish, then rise from another horizon, a sense he credits to Abu Ubayda, Ibn Kaysan and al-Akhfash.",
            "bn": "হাসান ও কাতাদা বলেছেন: তারা। তাবারী ব্যাখ্যা করেন, যে তারাগুলো এক দিগন্ত থেকে আরেক দিগন্তে চলে যায়। বাগাভী এ দলে ইবন কাইসানের নাম যোগ করেন এবং বলেন, তারা উদিত হয়, তারপর অস্ত যায়। কুরতুবী এর পেছনের ভাষাটা দেখান। আরবরা বলে নাযাআ ইলাইহি, অর্থাৎ সে সেদিকে চলে গেল। আবার বলে নাযাআতিল খাইল, অর্থাৎ ঘোড়াগুলো ছুটল। এ ব্যাখ্যায় গারকা মানে তারাগুলো ডুবে যায়, অদৃশ্য হয়, তারপর অন্য দিগন্তে উদিত হয়। এ অর্থ তিনি আবু উবাইদা, ইবন কাইসান ও আখফাশের বলে উল্লেখ করেন।"
          },
          {
            "en": "Ata said: the bows, which pull with the arrow; Ibn Kathir adds, bows in battle, and al-Qurtubi and al-Baghawi add Ikrima. Some said: the raiders who shoot. Al-Qurtubi treats that as the bows reading itself, since an oath by bows means those who draw them, and he compares 100:1, wal-adiyati dabha. He also reports from Yahya ibn Sallam that they are wild animals pulling away from pasture in flight. Ibn Kathir has a last report from Ibn Abbas through Ibn Abi Hatim: an-nazi'at are the disbelievers' souls, pulled out, then released, then drowned in the Fire.",
            "bn": "আতা বলেছেন: ধনুক, যা তীর নিয়ে টান দেয়। ইবন কাসীর যোগ করেন, যুদ্ধের ধনুক। কুরতুবী ও বাগাভী এ মতে ইকরিমার নামও আনেন। কেউ কেউ বলেছেন: তীর ছোড়া যোদ্ধারা। কুরতুবীর মতে এটা ধনুকের ব্যাখ্যাই, কারণ ধনুকের শপথ মানে যারা ধনুক টানে তাদের শপথ। তুলনা হিসেবে তিনি আনেন ১০০:১, ওয়াল আদিয়াতি দাবহা। ইয়াহইয়া ইবন সাল্লাম থেকে তিনি আরও বর্ণনা করেন, এরা বুনো জন্তু, যারা চারণভূমি ছেড়ে পালায়। ইবন কাসীর ইবন আবী হাতিমের সূত্রে ইবন আব্বাস (রাঃ) থেকে শেষ একটি বর্ণনা আনেন: নাযিআত হলো কাফেরদের রূহ, যা টেনে বের করা হয়, তারপর ছেড়ে দেওয়া হয়, তারপর আগুনে ডুবিয়ে দেওয়া হয়।"
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
            "bn": "এসব মত উল্লেখ করার পর ইবন কাসীর ছোট্ট এক বাক্যে রায় দেন: সঠিক হলো প্রথম মতটি, আর অধিকাংশ আলেম সেটাই গ্রহণ করেছেন। তাঁর কাছে প্রথম মত মানে রূহ টেনে বের করা ফেরেশতারা। তাবারী একই মতগুলো সনদসহ আনেন, কিন্তু মীমাংসা করেন অন্যভাবে। তাঁর মতে সঠিক কথা হলো, আল্লাহ নাযিআতি গারকার শপথ করেছেন, কিন্তু একটি টানদাতাকে বাদ দিয়ে আরেকটিকে নির্দিষ্ট করেননি। তাই গভীরে টান দেয় এমন প্রত্যেকেই তাঁর শপথের ভেতরে পড়ে, তা ফেরেশতা হোক, মৃত্যু হোক, তারা হোক, ধনুক হোক বা অন্য কিছু।"
          },
          {
            "en": "These are two different methods. Ibn Kathir weighs the reports and sides with the majority; at-Tabari keeps the word as wide as Allah left it. Al-Qurtubi, between them, points to the thread that runs through every reading: the ighraq, the intensity in pulling, he says, holds in all the lines of interpretation. The disagreement is real and old, and this article keeps it as the commentators left it, choosing none of the readings over the others.",
            "bn": "এ দুটি আলাদা পদ্ধতি। ইবন কাসীর বর্ণনাগুলো মেপে দেখেন এবং অধিকাংশের পক্ষে থাকেন। তাবারী শব্দটিকে ততটাই প্রশস্ত রাখেন, যতটা আল্লাহ রেখেছেন। দুজনের মাঝখানে কুরতুবী এমন এক সুতা দেখান, যা সব ব্যাখ্যার ভেতর দিয়ে গেছে। তাঁর ভাষায়, ইগরাক, অর্থাৎ টানের তীব্রতা, সব ব্যাখ্যাতেই বহাল থাকে। মতভেদটা সত্যিকারের এবং পুরোনো। তাফসীরকারেরা যেভাবে রেখে গেছেন, এই লেখা সেভাবেই রাখছে। কোনো একটি ব্যাখ্যাকে অন্যগুলোর উপরে বেছে নিচ্ছে না।"
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
            "bn": "দ্বিতীয় শব্দ গারকা নিয়ে আলাদা ব্যাখ্যা আছে। বাগাভী বলেন, আল-গারক এমন এক বিশেষ্য, যা আল-ইগরাকের জায়গায় বসানো। তাহলে অর্থ দাঁড়ায়: শপথ তাদের, যারা টেনে বের করে পূর্ণ ইগরাকে। আর ইগরাক মানে টানার শেষ সীমা পর্যন্ত যাওয়া। তাবারীও একই ছবি দেন: অর্থ ইগরাক, যেমন তীরন্দাজ ধনুকে গভীর টান দেয়। কুরতুবী তীরন্দাজের ইগরাক খুলে বলেন। সে টানের শেষ সীমায় পৌঁছায়, ছিলা টেনে আনে তীরের ফলা পর্যন্ত। আরবরা বলে আগরাকা ফিল কাওস, অর্থাৎ সে ধনুক পুরোপুরি টেনেছে।"
          },
          {
            "en": "Al-Qurtubi widens the word further. Al-istighraq, from the same family, means taking in a thing completely, and the inner skin of an egg is called ghirqi'. His last line on the verse is that gharqa means going far in the pulling. Ma'arif al-Qur'an makes the same point in English: naz' means to draw vigorously, and gharqan is a corroborative used in the sense of ighraq, to exert oneself to the utmost in a thing, and it cites the idiom aghraqa an-nazi'u fi al-qaws, he drew the bow with great vigour.",
            "bn": "কুরতুবী শব্দটিকে আরও প্রশস্ত করেন। একই পরিবারের শব্দ আল-ইসতিগরাক মানে কোনো কিছুকে পুরোপুরি ধারণ করা। ডিমের ভেতরের পাতলা আবরণকে বলা হয় গিরকি'। আয়াত নিয়ে তাঁর শেষ কথা: গারকা মানে টানে বহু দূর যাওয়া। মাআরিফুল কুরআন ইংরেজিতে একই কথা বলে। নায মানে জোরে টানা। গারকান তাগিদসূচক শব্দ, ইগরাকের অর্থে ব্যবহৃত, যার মানে কোনো কাজে সর্বশক্তি ঢেলে দেওয়া। সেখানে প্রবাদটিও আছে: আগরাকান নাযিউ ফিল কাওস, সে প্রবল শক্তিতে ধনুক টানল।"
          },
          {
            "en": "The same letters also carry the sense of drowning, and several sources keep that picture in view. In Ibn Kathir's line from Ibn Abbas, a soul taken with violence sinks deep in its pulling. Muqatil, in al-Baghawi, says the soul comes out like a man drowning in water. Al-Qurtubi reports, with it is said, that the disbeliever sees himself at the moment of the pulling as though he were drowning. The archer's full draw and the drowning man are two images held by the one word.",
            "bn": "একই অক্ষরগুলোতে ডুবে যাওয়ার অর্থও আছে, আর কয়েকটি সূত্র সেই ছবিও সামনে রাখে। ইবন আব্বাস (রাঃ) থেকে ইবন কাসীরের বর্ণনায়, জোর করে নেওয়া রূহ টানের মধ্যে তলিয়ে যায়। বাগাভীতে মুকাতিল বলেন, রূহ বের হয় পানিতে ডুবন্ত মানুষের মতো। কুরতুবী 'বলা হয়' কথাটি দিয়ে বর্ণনা করেন, টানের মুহূর্তে কাফের নিজেকে দেখে যেন সে ডুবে যাচ্ছে। তীরন্দাজের পূর্ণ টান আর ডুবন্ত মানুষ, একই শব্দের ভেতরে দুটি ছবি।"
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
            "bn": "কুরতুবী ও বাগাভী দুজনেই ইবন মাসউদ (রাঃ) থেকে একটি বিবরণ আনেন। কুরতুবীর ভাষায়, তিনি বুঝিয়েছেন কাফেরদের রূহ। মৃত্যুর ফেরেশতা তাদের দেহ থেকে সেই রূহ টেনে বের করেন প্রতিটি চুলের নিচ থেকে, নখের নিচ থেকে, পায়ের গোড়া থেকে। টানটা এমন, যেমন ভেজা পশম থেকে লোহার শিক টেনে বের করা হয়। তারপর রূহটা আবার দেহে ফিরিয়ে দেন, তারপর আবার টেনে বের করেন। কাফেরদের সঙ্গে এটাই তাঁর কাজ। কুরতুবী যোগ করেন, ইবন আব্বাস (রাঃ)-ও একই কথা বলেছেন। বাগাভী বিবরণটি আনেন মৃত্যুর ফেরেশতা ও তাঁর সহকারীদের কথা বলে।"
          },
          {
            "en": "Muqatil, in al-Baghawi, says the angel of death and his helpers pull out the disbelievers' souls as a skewer with many prongs is pulled from soaked wool. Sa'id ibn Jubayr, in at-Tabari, says: their souls were pulled out, then drowned, then cast into the Fire; al-Qurtubi's version of the same saying adds, then burned, before the casting. Ma'arif al-Qur'an adds that the pain meant here is spiritual. Those around a dying person may not sense it, and an infidel's soul often appears to slip out easily, yet that ease is only what onlookers perceive.",
            "bn": "বাগাভীতে মুকাতিল বলেন, মৃত্যুর ফেরেশতা ও তাঁর সহকারীরা কাফেরদের রূহ টেনে বের করেন, যেমন বহু কাঁটাওয়ালা শিক ভেজা পশম থেকে টেনে আনা হয়। তাবারীতে সাঈদ ইবন জুবাইর বলেন: তাদের রূহ টেনে বের করা হলো, তারপর ডুবিয়ে দেওয়া হলো, তারপর আগুনে নিক্ষেপ করা হলো। কুরতুবীর বর্ণনায় একই উক্তিতে নিক্ষেপের আগে আছে, তারপর পোড়ানো হলো। মাআরিফুল কুরআন যোগ করে, এখানকার কষ্টটা আত্মিক। মরণাপন্ন মানুষের আশপাশের লোকেরা তা টের নাও পেতে পারে। কাফেরের রূহ অনেক সময় বাইরে থেকে সহজে বেরিয়ে যেতে দেখা যায়, অথচ সেই সহজতা কেবল দর্শকের চোখে।"
          },
          {
            "en": "Ma'arif al-Qur'an then asks who can perceive that pain, and answers that we know of it only because Allah has informed us in this verse. That is also the limit of this section. None of the commentaries fetched for the verse attaches a hadith of the Prophet ﷺ to it; the descriptions above reach us as the words of Companions and later commentators, as the tafsirs report them. This article therefore quotes no narration on the angel of death or the taking of the soul, and adds no detail to the scene beyond what these sources give.",
            "bn": "মাআরিফুল কুরআন এরপর প্রশ্ন তোলে, সেই কষ্ট কে টের পাবে? উত্তর দেয়, আমরা তা জানি শুধু এ কারণে যে আল্লাহ এই আয়াতে আমাদের জানিয়েছেন। এই অংশের সীমাও এখানেই। এ আয়াতের জন্য আনা কোনো তাফসীর নবী ﷺ-এর কোনো হাদীস আয়াতটির সঙ্গে যুক্ত করেনি। ওপরের বিবরণগুলো এসেছে সাহাবি ও পরবর্তী তাফসীরকারদের কথা হিসেবে, তাফসীরগুলো যেভাবে বর্ণনা করেছে। তাই এই লেখা মৃত্যুর ফেরেশতা বা রূহ কবজ নিয়ে কোনো বর্ণনা উদ্ধৃত করছে না। এই সূত্রগুলো যা দিয়েছে, তার বাইরে দৃশ্যে কোনো খুঁটিনাটি যোগ করছে না।"
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
            "bn": "শপথ করা হয় কোনো কথার জন্য, আর এখানে সেই কথাটা মুখে বলা হয়নি। মাআরিফুল কুরআন বলে, শপথের বিষয়বস্তু উহ্য রাখা হয়েছে, কারণ প্রসঙ্গ থেকেই তা বোঝা যায়। উদ্দেশ্য হলো কিয়ামত যে নিশ্চিত, তা পাকা করা। কুরতুবী এক বাক্যে একই কথা বলেন: আল্লাহ এসব জিনিসের শপথ করেছেন এ কথার উপর যে কিয়ামত সত্য। মুয়াসসার জবাবটা লিখে দেয়: সৃষ্টিকে অবশ্যই ওঠানো হবে, হিসাব নেওয়া হবে, সেই দিনে, যার বর্ণনা ৭৯:৬ আর তার পরের আয়াতে। মাআরিফুল কুরআন যোগ করে, কিয়ামত শুরু হয় প্রত্যেক মানুষের মৃত্যু দিয়ে। প্রত্যেকের মৃত্যু যেন তার নিজের ছোট কিয়ামত।"
          },
          {
            "en": "As-Sa'di leaves the question open between two possibilities. The thing sworn to may be the recompense and the raising, since the states of the Resurrection follow straight after. Or the thing sworn by and the thing sworn to may be the same: Allah swore about the angels themselves, because belief in them is among the six pillars of faith, and because their acts here include the recompense they carry out at death, before it and after it. Al-Muyassar adds a note of its own: a created being may not swear by anything other than its Creator, and whoever does so has committed shirk.",
            "bn": "সা'দী প্রশ্নটি দুটি সম্ভাবনার মধ্যে খোলা রাখেন। হতে পারে শপথের বিষয় প্রতিদান আর পুনরুত্থান, কারণ ঠিক পরেই কিয়ামতের অবস্থার বর্ণনা আসে। আবার হতে পারে, যার শপথ আর যে কথার শপথ, দুটো একই। অর্থাৎ আল্লাহ ফেরেশতাদের বিষয়েই শপথ করেছেন, কারণ তাঁদের প্রতি ঈমান ঈমানের ছয়টি রুকনের একটি। তা ছাড়া এখানে তাঁদের যে কাজের কথা, তার মধ্যে আছে সেই প্রতিদান, যা তাঁরা মৃত্যুর সময়, তার আগে ও পরে কার্যকর করেন। মুয়াসসার নিজের পক্ষ থেকে একটি কথা যোগ করে: সৃষ্টির জন্য স্রষ্টা ছাড়া অন্য কিছুর নামে শপথ করা জায়েয নয়, কেউ করলে সে শিরক করল।"
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
            "en": "Several commentators read this first oath as the taking of the disbelievers' souls. The verse describes what the text describes, a drawing out at death that is known only by revelation, and it licenses nothing against any living person or community. It gives nobody the right to read another person's death, to decide from a hard or an easy end where a soul now stands, or to apply these reports to someone they dislike. Ma'arif al-Qur'an has already said that onlookers cannot see what the dying feel; the verse leaves that knowledge with Allah.",
            "bn": "কয়েকজন তাফসীরকার এই প্রথম শপথকে কাফেরদের রূহ কবজ হিসেবে পড়েছেন। আয়াতটি বর্ণনা করে কেবল তা-ই, যা পাঠে আছে: মৃত্যুর সময় রূহ টেনে আনা, যা জানা যায় শুধু ওহির মাধ্যমে। এটি কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুরই অনুমতি দেয় না। কারও মৃত্যু দেখে তার অবস্থা পড়ে ফেলার অধিকার এ আয়াত কাউকে দেয় না। কঠিন বা সহজ মৃত্যু দেখে কোনো রূহ এখন কোথায়, তা ঠিক করার অধিকারও নয়। অপছন্দের কারও গায়ে এসব বর্ণনা লাগানোর অধিকারও নয়। মাআরিফুল কুরআন আগেই বলেছে, মরণাপন্ন মানুষ যা অনুভব করে, দর্শক তা দেখতে পায় না। সেই জ্ঞান আয়াতটি আল্লাহর কাছেই রেখে দেয়।"
          },
          {
            "en": "What the verse does give the reader is a picture to turn inward. The surah opens on a pull taken to its full extent, whether the commentator saw an angel, death, a star or a bow. The four oaths that follow in 79:2 to 79:5 continue the series. For the reader, the first oath is a reminder that the leaving will come, and a question about what we are still holding too tightly.",
            "bn": "আয়াতটি পাঠককে যা দেয়, তা হলো নিজের দিকে ফেরানোর মতো একটি ছবি। সূরা শুরু হয় এমন এক টান দিয়ে, যা শেষ সীমা পর্যন্ত যায়। তাফসীরকার তাতে ফেরেশতা দেখুন, মৃত্যু দেখুন, তারা দেখুন বা ধনুক। ৭৯:২ থেকে ৭৯:৫ আয়াতের চারটি শপথ এই ধারা এগিয়ে নেয়। পাঠকের জন্য প্রথম শপথটি এক স্মরণ যে বিদায় আসবেই। সেই সঙ্গে এক প্রশ্ন: কোন জিনিস আমরা এখনো খুব শক্ত করে ধরে আছি?"
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
            "bn": "তাতবাউহার রাদিফাহ: তার পিছু পিছু আসবে পরেরটি। আরবিতে আয়াতটি মাত্র দুই শব্দের। ৭৯:৬ আয়াত আর-রাজিফাহ দিয়ে যে দৃশ্য শুরু করেছিল, এ আয়াত তা পূর্ণ করে। 'হা' সর্বনামটি সেই প্রথমটির দিকেই ফিরে যায়। ফলে রাদিফাহ যা-ই হোক, তার পরিচয় সে কার পেছনে আসে তা দিয়ে। সা'দী এক লাইনে এর ব্যাখ্যা দেন: আরেকটি কম্পন, যা তার পেছনে চড়ে আসে এবং তার পরপরই আসে। তাঁর ব্যবহার করা ক্রিয়া তারদিফুহা, আর নামটি রাদিফাহ, দুটোর ধাতু একই, র-দ-ফ। তাই তাঁর ব্যাখ্যায় শব্দটা দুবার আসে। অনুসারী মানে যে পেছনে আসে।"
          },
          {
            "en": "Ibn Abbas (RA), in the report at-Tabari gives, says the latter follows the first: the rajifa is the first blast and the radifa the last. At-Tabari's own opening gloss is the same in two words, an-nafkha ath-thaniya, the second blast. The Muyassar folds 79:1 to 79:7 into one sentence: creation will surely be raised and reckoned, on the day the earth is shaken by the first blast, the blast of death, which another blast, for bringing to life, follows. On the plainest reading, the verse is the hinge between dying and rising.",
            "bn": "তাবারীর আনা বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, পরেরটি প্রথমটির পেছনে আসে। রাজিফাহ হলো প্রথম ফুঁক, আর রাদিফাহ শেষ ফুঁক। তাবারী নিজেও আয়াতের শুরুতে দুই শব্দে একই কথা বলেন: আন-নাফখাতুস সানিয়াহ, দ্বিতীয় ফুঁক। মুয়াসসার ৭৯:১ থেকে ৭৯:৭ পর্যন্ত এক বাক্যে গেঁথে দেয়। সৃষ্টিকে অবশ্যই ওঠানো হবে, হিসাব নেওয়া হবে। সেদিন প্রথম ফুঁকে, মৃত্যুর ফুঁকে, জমিন কেঁপে উঠবে। তার পেছনে আসবে আরেক ফুঁক, জীবন ফিরিয়ে দেওয়ার জন্য। সবচেয়ে সরল পাঠে আয়াতটি তাই সেই মোড়, যেখানে মৃত্যু থেকে পুনরুত্থানের দিকে ঘুরে যাওয়া।"
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
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর কথা আনেন: এ দুটি হলো দুই ফুঁক, প্রথম আর দ্বিতীয়। তিনি জানান, মুজাহিদ, হাসান, কাতাদা, দাহহাকসহ আরও অনেকে একই কথা বলেছেন। তাবারী তাঁদের কয়েকজনের কথা তাঁদের নিজের ভাষাতেই আনেন। দাহহাক বলেন, রাজিফাহ প্রথম ফুঁক, রাদিফাহ পরের ফুঁক। কাতাদা এ দুটিকে বলেন দুই আওয়াজ, সাইহাতান। প্রথমটি আল্লাহর হুকুমে সবকিছুকে মেরে ফেলবে, আর পরেরটি আল্লাহর হুকুমে সবকিছুকে জীবিত করবে। কুরতুবী ইবন আব্বাস, হাসান ও কাতাদা থেকে একই কথা আবার বলেন। দুই আওয়াজ বলতে যে দুই ফুঁক বোঝানো হয়েছে, তাও খুলে বলেন।"
          },
          {
            "en": "Al-Hasan, as at-Tabari reports him, puts it in two clauses: the first kills the living, and the second gives life to the dead. Then he recited 39:68: and the Horn will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills; then it will be blown into another time, and at once they will be standing, looking on. The verse he chose has the same shape as the verse under study, a blowing that strikes down and then another, ukhra, after which people stand.",
            "bn": "তাবারীর বর্ণনায় হাসান কথাটা দুই টুকরায় বলেন। প্রথমটি জীবিতদের মৃত্যু ঘটাবে, দ্বিতীয়টি মৃতদের জীবিত করবে। তারপর তিনি ৩৯:৬৮ আয়াত তিলাওয়াত করেন: শিঙ্গায় ফুঁক দেওয়া হবে, তখন আসমান ও জমিনে যারা আছে সবাই বেহুঁশ হয়ে পড়ে যাবে, তবে আল্লাহ যাদের চান তারা ছাড়া। তারপর আবার ফুঁক দেওয়া হবে, আর সঙ্গে সঙ্গে তারা দাঁড়িয়ে তাকিয়ে থাকবে। তাঁর বেছে নেওয়া আয়াতের গড়নও এ আয়াতের মতো। প্রথমে এক ফুঁক, যা সবাইকে ফেলে দেয়। তারপর আরেকটি, উখরা, যার পরে মানুষ উঠে দাঁড়ায়।"
          },
          {
            "en": "On this reading the follower is not a second calamity piled on the first. The first undoes life; the second restores it, and restores it for a purpose, since the Muyassar's sentence ends in being raised and reckoned. The dread of 79:6 and the return of 79:7 sit two words apart. Whatever a person meets when the second blast sounds, it will be met awake and standing, as 39:68 pictures them, and facing the reckoning that the Muyassar names.",
            "bn": "এ পাঠ অনুযায়ী পেছনের ফুঁকটি প্রথম বিপদের উপর চাপানো আরেকটা বিপদ নয়। প্রথমটি জীবন কেড়ে নেয়, দ্বিতীয়টি তা ফিরিয়ে দেয়। আর ফিরিয়ে দেয় একটা উদ্দেশ্যে, কারণ মুয়াসসারের বাক্য শেষ হয় ওঠানো আর হিসাবের কথায়। ৭৯:৬ আয়াতের আতঙ্ক আর ৭৯:৭ আয়াতের ফিরে আসা, এ দুয়ের দূরত্ব মাত্র দুই শব্দ। দ্বিতীয় ফুঁক বাজলে মানুষ যা-ই সামনে পাক, পাবে জেগে উঠে, দাঁড়ানো অবস্থায়, যেমন ৩৯:৬৮ আয়াত ছবি আঁকে। আর সামনে থাকবে সেই হিসাব, যার কথা মুয়াসসার বলে।"
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
            "bn": "এরপর তাবারী 'ওয়া কালা আখারূন', অর্থাৎ অন্যরা বলেছেন, এই কথা দিয়ে দ্বিতীয় একটি মত আনেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেন, রাজিফাহ কাঁপবে মানে জমিন আর পাহাড় কাঁপবে, আর সেটাই যালযালা, মহাভূকম্পন। আর রাদিফাহ, তাঁর ভাষায়, এই কথাগুলো: যখন আসমান ফেটে যাবে, আর দুটোকে এক আঘাতে চূর্ণ করা হবে। তাঁর বাক্যে দুটি আয়াত জোড়া লেগেছে, ৮৪:১ আয়াতের শুরু আর ৬৯:১৪ আয়াতের শেষাংশ। এ মতে পেছনে যা আসে তা হলো ফেটে যাওয়া আসমান আর মাটির সঙ্গে মিশে যাওয়া জমিন।"
          },
          {
            "en": "Al-Baghawi gives the same view in a fuller sentence: the radifa is when the sky splits, and the earth and the mountains are lifted and crushed with a single crushing. Al-Qurtubi has it too, and adds that this comes after the quake. Ibn Kathir places Mujahid differently. He counts him among those who said the two blasts, then reports from him a comparison: the first is like 73:14, the day the earth and the mountains shake, and the second like 69:14. The texts read here leave the two placements as they stand.",
            "bn": "বাগাভী একই মত আরেকটু খুলে বলেন। রাদিফাহ হলো সেই সময়, যখন আসমান ফেটে যাবে, আর জমিন ও পাহাড় তুলে নিয়ে এক আঘাতে চূর্ণ করা হবে। কুরতুবীও মতটি আনেন, সঙ্গে যোগ করেন যে এটা ঘটবে ভূকম্পনের পরে। ইবন কাসীর অবশ্য মুজাহিদকে রাখেন অন্য জায়গায়। যাঁরা দুই ফুঁকের কথা বলেছেন, তাঁদের মধ্যে তিনি মুজাহিদকেও গোনেন। তারপর তাঁর কাছ থেকে একটি তুলনা আনেন: প্রথমটি ৭৩:১৪ আয়াতের মতো, যেদিন জমিন ও পাহাড় কাঁপবে, আর দ্বিতীয়টি ৬৯:১৪ আয়াতের মতো। এখানে পড়া লেখাগুলো এই দুই অবস্থানের মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as the Hour",
          "bn": "নাম যখন কিয়ামত"
        },
        "p": [
          {
            "en": "Two further glosses name the event rather than the sound. Ibn Zayd, in at-Tabari: the rajifa is the earth, and the radifa is as-sa'a, the Hour. 'Ata', in al-Baghawi: the rajifa is the Qiyama, and the radifa is the ba'th, the raising of the dead. Al-Qurtubi records one more under qila, it was said: the rajifa moves the earth, and the radifa is another quake that brings the earths to an end. He closes these glosses with fa-Allahu a'lam, and Allah knows best.",
            "bn": "আরও দুটি ব্যাখ্যা আওয়াজের বদলে ঘটনার নাম ধরে বলে। তাবারীর বর্ণনায় ইবন যায়দ বলেন, রাজিফাহ হলো জমিন, আর রাদিফাহ হলো আস-সাআহ, কিয়ামতের মুহূর্ত। বাগাভীর বর্ণনায় আতা বলেন, রাজিফাহ হলো কিয়ামত, আর রাদিফাহ হলো বা'স, মৃতদের ওঠানো। কুরতুবী 'কীলা', অর্থাৎ বলা হয়েছে, এই কথা দিয়ে আরও একটি মত আনেন। রাজিফাহ জমিনকে নাড়িয়ে দেবে, আর রাদিফাহ হলো আরেক ভূকম্পন, যা জমিনগুলোকে নিঃশেষ করে দেবে। এই ব্যাখ্যাগুলো তিনি শেষ করেন 'ফাল্লাহু আ'লাম' বলে, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "These are kept here as the sources keep them, side by side. At-Tabari opens with the second blast as the meaning, records Mujahid's and Ibn Zayd's views under others said, and passes on to the grammar of the oath without a ruling between them. What every gloss shares is the shape the verse itself gives: one thing, then a second that comes behind it. Whether it is named a blast, a quake, the Hour or the raising, the follower arrives, and each name points to the same Day.",
            "bn": "সূত্রগুলো এসব মত যেভাবে পাশাপাশি রেখেছে, এখানেও সেভাবেই রাখা হলো। তাবারী শুরু করেন দ্বিতীয় ফুঁকের অর্থ দিয়ে। তারপর মুজাহিদ আর ইবন যায়দের মত আনেন 'অন্যরা বলেছেন' শিরোনামে। এরপর শপথের ব্যাকরণে চলে যান, এগুলোর মধ্যে কোনো রায় দেন না। সব ব্যাখ্যায় একটা জিনিস মেলে, আর সেটা আয়াতের নিজেরই গড়ন। প্রথমে একটি ঘটনা, তারপর তার পেছনে আরেকটি। নাম ফুঁক হোক, কম্পন হোক, কিয়ামত হোক বা পুনরুত্থান, পেছনেরটা আসবেই। আর প্রতিটি নাম একই দিনের দিকে ইশারা করে।"
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
            "bn": "দুই ফুঁকের মাঝে কতটা সময়? তাবারীর বর্ণনায় কাতাদা বলেন, নবী ﷺ বলতেন, বাইনাহুমা আরবাঊন, দুটোর মাঝে চল্লিশ। বর্ণনায় আরও আছে, তাঁর সঙ্গীরা বলেছেন, আল্লাহর কসম, এর বেশি তিনি আমাদের বলেননি। বাগাভী নিজের কথায় লেখেন চল্লিশ বছর। কুরতুবী চল্লিশ বছরের কথা হাদীস হিসেবে আনেন। সংখ্যাসহ সহীহ বুখারীর বর্ণনাটি, নম্বর ৪৯৩৫, ৭৮:১৮ আয়াতের আলোচনায় এসেছে। সেখানে আবু হুরায়রা (রাঃ) একক বলতে অস্বীকার করেছিলেন। এখানে তা আবার বলা হচ্ছে না।"
          },
          {
            "en": "At-Tabari also brings a long report from Abu Hurayra that counts three blowings of the Horn, of terror, of swooning and of standing, and applies these verses to the terror of the first. Its chain, as at-Tabari prints it, runs through a man and then a man of the Ansar, two narrators left unnamed, so it is not used here. Qatada's further note, introduced with it was mentioned to us, of a rain sent during the forty, is not relied on here either.",
            "bn": "তাবারী আবু হুরায়রা থেকে আরেকটি দীর্ঘ বর্ণনাও আনেন। তাতে শিঙ্গার তিনটি ফুঁকের কথা আছে: ভয়ের ফুঁক, বেহুঁশ হওয়ার ফুঁক আর দাঁড়িয়ে যাওয়ার ফুঁক। এ আয়াতগুলোকে সেখানে প্রথম ফুঁকের আতঙ্কের সঙ্গে জোড়া হয়েছে। কিন্তু তাবারী যে সনদ দেন, তাতে আছে 'এক ব্যক্তি', তারপর 'আনসারের এক ব্যক্তি'। দুজন বর্ণনাকারীর নামই নেই। তাই বর্ণনাটি এখানে নেওয়া হলো না। কাতাদার আরেকটি কথা আসে 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে, চল্লিশের মধ্যে বৃষ্টি পাঠানোর কথা। সেটার উপরও এখানে ভর করা হলো না।"
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
            "bn": "একটি বর্ণনা সরাসরি এ আয়াতের সঙ্গেই যুক্ত। তাবারী উবাই ইবন কা'ব (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ ৭৯:৬ ও ৭৯:৭ আয়াত তিলাওয়াত করে বললেন: রাজিফাহ এসে গেছে, তার পেছনে রাদিফাহ। মৃত্যু এসে গেছে, সঙ্গে যা আছে তা নিয়ে। ইবন কাসীর জানান, আহমাদ ও তিরমিযী দুজনেই এটি বর্ণনা করেছেন। জামি' তিরমিযী, নম্বর ২৪৫৭-এ পুরো বর্ণনাটি এরকম, শুরু রাতের কথা দিয়ে:"
          },
          {
            "en": "At-Tufail bin Ubayy bin Ka'b narrated from his father who said: \"When a third of the night had passed, the Messenger of Allah ﷺ stood and said: 'O you people! Remember Allah! Remember Allah! The Rajifah is coming, followed by the Radifah, death and what it brings is coming, death and what it brings is coming!'\" Ubayy said: \"I said: 'O Messenger of Allah! Indeed I say very much Salat for you. How much of my Salat should I make for you?' He said: 'As you wish.'\"",
            "bn": "তুফাইল ইবন উবাই ইবন কা'ব তাঁর পিতা থেকে বর্ণনা করেন। তিনি বলেন: \"রাতের এক-তৃতীয়াংশ পার হলে আল্লাহর রাসূল ﷺ উঠে দাঁড়ালেন এবং বললেন: 'হে লোকসকল! আল্লাহকে স্মরণ করো! আল্লাহকে স্মরণ করো! রাজিফাহ আসছে, তার পেছনে রাদিফাহ। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে!'\" উবাই বলেন: \"আমি বললাম: 'হে আল্লাহর রাসূল! আমি আপনার উপর অনেক দরুদ পড়ি। আমার দোয়ার কতটুকু আপনার জন্য রাখব?' তিনি বললেন: 'যতটুকু তুমি চাও।'\""
          },
          {
            "en": "\"[He said:] I said: 'A fourth?' He said: 'As you wish. But if you add more it would be better for you.' I said: 'Then half?' He said: 'As you wish. And if you add more it would be better [for you].' [He said:] I said: 'Then two-thirds?' He said: 'As you wish, but if you add more it would be better for you.' I said: 'Should I make all of my Salat for you?' He said: 'Then your problems would be solved and your sins would be forgiven.'\" At-Tirmidhi grades it hasan.",
            "bn": "\"আমি বললাম: 'এক-চতুর্থাংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে অর্ধেক?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে দুই-তৃতীয়াংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'আমার পুরো দোয়াটাই কি আপনার জন্য করে দেব?' তিনি বললেন: 'তাহলে তোমার দুশ্চিন্তা দূর হবে, আর তোমার গুনাহ মাফ করা হবে।'\" তিরমিযী একে হাসান বলেছেন।"
          },
          {
            "en": "The hour differs across the routes. The Arabic of at-Tirmidhi on the fetched page reads thulutha al-layl, two thirds of the night, though the English beside it says a third; Ibn Kathir, quoting at-Tirmidhi, has a third; al-Qurtubi and al-Baghawi, by other routes, a quarter. The call itself does not change. Ubayy's question, in the Arabic, is about the salat he sends upon the Prophet ﷺ, 'alayka, and how much of his own salat to give to it.",
            "bn": "কোন প্রহরে, তা নিয়ে সূত্রগুলোতে ভিন্নতা আছে। যে পাতা দেখা হয়েছে, তাতে তিরমিযীর আরবি পাঠে আছে সুলুসাল লাইল, রাতের দুই-তৃতীয়াংশ। পাশের ইংরেজিতে অবশ্য লেখা এক-তৃতীয়াংশ। ইবন কাসীর তিরমিযী থেকে উদ্ধৃত করতে গিয়ে বলেন এক-তৃতীয়াংশ। কুরতুবী আর বাগাভী অন্য সূত্রে বলেন এক-চতুর্থাংশ। ডাকটা কিন্তু সব বর্ণনায় একই। উবাইয়ের প্রশ্নটা আরবিতে নবী ﷺ-এর উপর, আলাইকা, দরুদ পাঠ নিয়ে। নিজের দোয়ার কতটুকু তিনি তার জন্য রাখবেন, সেটাই তাঁর জিজ্ঞাসা।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, With All It Holds",
          "bn": "মৃত্যু, তার সবকিছু নিয়ে"
        },
        "p": [
          {
            "en": "The words of the call reward slow reading. The Prophet ﷺ takes the two nouns of 79:6 and 79:7 and puts them in a sentence of his own, ja'at ar-rajifa, in the past form of the verb, which the English page renders is coming. Then he sets beside it a third clause that belongs to each listener: ja'a al-mawtu bima fih, death has come with what is in it. The verse speaks of the end of all creation. The call carries it to the edge of each sleeper's bed.",
            "bn": "ডাকের কথাগুলো ধীরে পড়লে আরও খোলে। নবী ﷺ ৭৯:৬ আর ৭৯:৭ আয়াতের দুটি বিশেষ্য নিয়ে নিজের একটি বাক্য গড়েন: জাআতির রাজিফাহ। আরবিতে ক্রিয়াটি অতীত রূপে, ইংরেজি পাতায় তার অনুবাদ 'আসছে'। তারপর পাশে বসান তৃতীয় একটি কথা, যা প্রত্যেক শ্রোতার নিজের: জাআল মাওতু বিমা ফীহ, মৃত্যু এসে গেছে, তার ভেতরে যা আছে সব নিয়ে। আয়াতটি গোটা সৃষ্টির শেষের কথা বলে। আর ডাকটি সেই কথাকে নিয়ে আসে প্রতিটি ঘুমন্ত মানুষের বিছানার পাশে।"
          },
          {
            "en": "He made the call at night, with a third, two thirds or a quarter of it gone, by the routes quoted. And he called people to remember Allah, twice, before naming what was coming. That order is worth keeping: the reminder of death comes wrapped in a summons to dhikr, not left to stand as fear alone. In the same report Ubayy then asks how to spend his own prayers, and is told that giving all of them to the salat upon the Prophet ﷺ would answer his worry and bring forgiveness.",
            "bn": "ডাকটা এসেছিল রাতে, সূত্রভেদে রাতের এক-তৃতীয়াংশ, দুই-তৃতীয়াংশ বা এক-চতুর্থাংশ পার হওয়ার পর। আর কী আসছে তা বলার আগে তিনি দুবার আল্লাহকে স্মরণ করতে ডেকেছেন। এই ক্রমটা মনে রাখার মতো। মৃত্যুর কথা এখানে শুধু ভয় হয়ে দাঁড়িয়ে থাকে না, তা আসে জিকিরের ডাকের ভেতরে মোড়ানো হয়ে। একই বর্ণনায় এরপর উবাই জানতে চান, নিজের দোয়া তিনি কীভাবে ভাগ করবেন। জবাব পান, পুরোটাই যদি নবী ﷺ-এর উপর দরুদে দেন, তাহলে তাঁর দুশ্চিন্তা দূর হবে, গুনাহ মাফ হবে।"
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
            "bn": "আয়াতটি দুই শব্দের, তাতে কোনো আদেশ নেই। শ্রোতাকে কিছু করতে বলে না। শুধু জানায়, প্রথমটির পেছনে দ্বিতীয়টি আসে। সূত্রগুলোর সবচেয়ে সরল পাঠে প্রথম ফুঁক জীবন শেষ করে, আর দ্বিতীয়টি তা ফিরিয়ে দেয় সেই হিসাবের জন্য, যার কথা মুয়াসসার বলে। প্রতিটি মানুষের জীবন কাটে প্রথম ফুঁকের আগে। প্রস্তুতি নেওয়ার সময় শুধু এটুকুই। আর দ্বিতীয়টি ফসকে যাওয়ার কোনো ফাঁক আয়াত রাখে না।"
          },
          {
            "en": "The verses after it turn to the people of that day, and they belong to another page. This one asks something simpler: whether the listener believes the follower will follow. The night call shows what that belief looks like in a life. It wakes; it remembers Allah, twice over; it names death as near and not as a far-off event; and then, as Ubayy did, it asks what to do with the time still in hand.",
            "bn": "এর পরের আয়াতগুলো সেদিনের মানুষের কথায় যায়, সেগুলোর আলোচনা আলাদা। এ আয়াত জানতে চায় আরও সহজ একটা কথা। শ্রোতা কি বিশ্বাস করে যে পেছনেরটা আসবেই? রাতের সেই ডাক দেখিয়ে দেয়, জীবনে এ বিশ্বাসের চেহারা কেমন। সে জেগে ওঠে। দুবার করে আল্লাহকে স্মরণ করে। মৃত্যুকে দূরের ঘটনা না ভেবে কাছের বলে চেনে। তারপর উবাইয়ের মতো জিজ্ঞেস করে, হাতে যে সময়টুকু আছে, তা দিয়ে কী করব।"
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
          "bn": "এক ধমক, তারপর খোলা ময়দান"
        },
        "p": [
          {
            "en": "Fa-idha hum bis-sahira: and then, all at once, they are at the sahira. The verse is three Arabic words: fa-idha, hum, and bis-sahira, a single noun carrying the preposition bi and the definite article. The fa ties it to the verse before, fa-innama hiya zajratun wahida, it is only one cry, and idha marks what happens suddenly. Al-Muyassar reads the two verses as one sentence: it is only a single blast, and then they are alive on the face of the earth, after they had been in its belly.",
            "bn": "ফা-ইযা হুম বিস-সাহিরা: আর তখনই, হঠাৎ, তারা সাহিরায়। আয়াতটি আরবিতে তিনটি শব্দের: ফা-ইযা, হুম আর বিস-সাহিরা। শেষেরটি একটিমাত্র বিশেষ্য, যার সঙ্গে জুড়ে আছে 'বি' অব্যয় আর নির্দিষ্টবাচক 'আল'। 'ফা' আয়াতটিকে বেঁধে দেয় আগের আয়াতের সঙ্গে: ফা-ইন্নামা হিয়া যাজরাতুন ওয়াহিদা, ওটা তো কেবল একটা ধমক। আর 'ইযা' বোঝায় যা হঠাৎ ঘটে যায়। মুয়াসসার দুই আয়াতকে এক বাক্য হিসেবে পড়ে: ওটা কেবল একটা ফুঁক, তারপরই তারা জীবিত হয়ে জমিনের উপরে, অথচ এতদিন ছিল তার পেটের ভেতরে।"
          },
          {
            "en": "The cry answers a question. In 79:10 to 79:12 the Qur'an reports what the deniers say: will we really be returned to our former state, even when we have become rotted bones? That, they say, would be a losing return. Those are their words, reported as theirs. Qatada, in at-Tabari's chain, explains the reply: when the resurrection seemed far away in the people's eyes, Allah said that it is only one cry, and then they are at the sahira, on the top of the earth after being inside it.",
            "bn": "ধমকটা আসলে একটা প্রশ্নের জবাব। ৭৯:১০ থেকে ৭৯:১২ আয়াতে কুরআন অস্বীকারকারীদের কথা তুলে ধরে: আমাদের কি সত্যিই আগের অবস্থায় ফিরিয়ে আনা হবে, পচা-গলা হাড় হয়ে যাওয়ার পরেও? তারা বলে, তাহলে তো সে ফেরা হবে সর্বনাশের ফেরা। কথাগুলো তাদের, কুরআন সেগুলো তাদের কথা হিসেবেই বলেছে। তাবারীর সনদে কাতাদা জবাবটা ব্যাখ্যা করেন। লোকদের চোখে পুনরুত্থান যখন বহু দূরের ব্যাপার মনে হলো, আল্লাহ বললেন, ওটা তো কেবল একটা ধমক, আর তখনই তারা সাহিরায়, অর্থাৎ মাটির ভেতরে থাকার পর মাটির উপরে।"
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
            "bn": "'হুম', অর্থাৎ 'তারা' বলতে কাদের বোঝানো হয়েছে, তা নিয়ে তাফসীরকারদের মত ভিন্ন। তাবারী সর্বনামটিকে রাখেন আগের আয়াতগুলোর বক্তাদের উপর। তাঁর মতে এরা সেই পুনরুত্থান-অস্বীকারকারী, মৃত্যুর পর আল্লাহ তাদের আবার জীবিত করবেন শুনে যারা অবিশ্বাসে অবাক হতো। তারাই তখন সাহিরায়। কুরতুবী পরিধিটা বাড়িয়ে দেন: হুম মানে আল-খালায়িক আজমাউন, সমস্ত সৃষ্টি একসাথে। সা'দীও একই কথা বলেন। সব সৃষ্টি জমিনের উপরে দাঁড়িয়ে তাকিয়ে থাকবে, আল্লাহ তাদের একত্র করবেন, নিজের ন্যায্য বিধানে তাদের মধ্যে ফয়সালা করবেন, আর প্রতিদান দেবেন।"
          },
          {
            "en": "Both readings stand in the sources, and this article takes neither side. Where the verse is read of the deniers, it describes what the text describes: people who called the return a loss, shown standing at that return in a single moment. It names no people of today, and it licenses nothing against any living person or community. Its reader is not invited to picture others on that ground. The question it puts is whether the reader's own life is ready for a return that will not be slow.",
            "bn": "দুটো পাঠই তাফসীরের সূত্রে আছে, এ লেখা কোনোটির পক্ষ নেয় না। যেখানে আয়াতটিকে অস্বীকারকারীদের কথা হিসেবে পড়া হয়, সেখানে আয়াত শুধু তা-ই বলে যা তার পাঠে আছে। কিছু লোক ফিরে আসাকে লোকসান বলেছিল, আর এক মুহূর্তে তাদের সেই ফেরার সামনেই দাঁড় করানো হলো। আজকের কোনো জাতির নাম এতে নেই। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কোনো কিছুর অনুমতিও এ আয়াত দেয় না। পাঠককে অন্যদের ওই ময়দানে কল্পনা করতে ডাকা হয়নি। প্রশ্নটা তার নিজের: যে ফেরা ধীরে আসবে না, তার জন্য আপনার জীবন কি তৈরি?"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Ground Is Called Wakeful",
          "bn": "ময়দানের নাম কেন 'জাগ্রত'"
        },
        "p": [
          {
            "en": "Sahira comes from the root s-h-r, which gives sahar, staying awake. At-Tabari says the Arabs call the open desert, al-fala, and the face of the earth sahira, and he thinks they named it so because the sleep and the wakefulness of living things happen on it, so it was described by what it holds. Al-Qurtubi gives the same explanation from al-Farra', and al-Baghawi from some scholars of language. Al-Qurtubi adds a second sense: dhat sahar, a place of wakefulness, because people stay awake there out of fear of it.",
            "bn": "সাহিরা এসেছে স-হ-র ধাতু থেকে, যা থেকে 'সাহার', মানে রাত জেগে থাকা। তাবারী বলেন, আরবরা খোলা মরুভূমি, অর্থাৎ 'ফালা', আর জমিনের উপরিভাগকে সাহিরা বলে। তাঁর ধারণা, নামটা এসেছে এজন্য যে প্রাণীদের ঘুম আর জাগরণ দুটোই ঘটে এর উপরে। যা তার উপরে থাকে, সেই গুণেই তাকে চেনানো হয়েছে। কুরতুবী একই ব্যাখ্যা আনেন ফাররা থেকে, বাগাভী আনেন কয়েকজন ভাষাবিদের নামে। কুরতুবী আরেকটা অর্থও যোগ করেন: 'যাতু সাহার', জেগে থাকার জায়গা, কারণ সেখানে ভয়ে মানুষের ঘুম আসে না।"
          },
          {
            "en": "Al-Qurtubi then gives a third explanation, introduced with it is said: sahira is white, level ground, named for the mirage that runs across it. The Arabs speak of an 'ayn sahira, a waking spring, for one whose water flows, and call the opposite na'ima, sleeping. Or, he adds, the name comes because whoever crosses such ground does not sleep, for fear of perishing. From the dictionary al-Sihah, al-Qurtubi also brings the definition that the sahira is the face of the earth, and sets this verse beside it.",
            "bn": "এরপর কুরতুবী তৃতীয় একটা ব্যাখ্যা দেন, 'বলা হয়' কথাটি দিয়ে শুরু করে। সাহিরা হলো সাদা, সমতল ভূমি। এমন নাম, কারণ তার উপর দিয়ে মরীচিকা বয়ে যায়। আরবরা যে ঝরনার পানি বয়ে চলে, তাকে বলে 'আইনুন সাহিরা', জাগ্রত ঝরনা। উল্টোটাকে বলে 'নায়িমা', ঘুমন্ত। তিনি আরও বলেন, কিংবা নামটা এসেছে এজন্য যে এমন ভূমি যে পার হয়, মরে যাওয়ার ভয়ে সে ঘুমাতে পারে না। 'আস-সিহাহ' অভিধান থেকেও কুরতুবী সংজ্ঞাটা আনেন: সাহিরা হলো জমিনের উপরিভাগ। তার পাশেই তিনি এই আয়াতটি রাখেন।"
          },
          {
            "en": "The meaning was argued from poetry. In at-Tabari's chain through 'Ikrima, Ibn Abbas said the word means on the earth and cited Umayya ibn Abi as-Salt: with us is game of the sea and game of the sahira. Al-Qurtubi says Ibn Abbas and the commentators used Umayya's line as evidence. Both also quote a rider at the battle of Dhu Qar, urging his horse: your end is the dust of the sahira, then you return after it in the hafira, after you were rotting bones, nakhira. The couplet echoes words from 79:10, 79:11 and 79:14 at once.",
            "bn": "শব্দটির অর্থ প্রমাণ করা হয়েছে কবিতা দিয়ে। তাবারীর সনদে ইকরিমার মাধ্যমে ইবন আব্বাস বলেন, শব্দটির মানে জমিনের উপরে। প্রমাণ হিসেবে তিনি উমাইয়া ইবন আবিস-সালতের পঙক্তি আনেন: আমাদের কাছে আছে সাগরের শিকার আর সাহিরার শিকার। কুরতুবী বলেন, ইবন আব্বাস ও তাফসীরকারেরা উমাইয়ার এই পঙক্তিকেই দলিল বানিয়েছেন। দুজনেই যূ-কার যুদ্ধের এক ঘোড়সওয়ারের কথা আনেন, যে নিজের ঘোড়াকে সামনে এগোতে তাড়া দিচ্ছিল: তোমার শেষ ঠিকানা সাহিরার ধুলো, তারপর ফিরবে 'হাফিরা'য়, পচা-গলা হাড় হয়ে যাওয়ার পর, 'নাখিরা'। ৭৯:১০, ৭৯:১১ আর ৭৯:১৪ আয়াতের শব্দের প্রতিধ্বনি একই দুই চরণে একসাথে শোনা যায়।"
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
            "bn": "ইবন কাসীর শুরুর দিকের ব্যাখ্যাগুলো সাজিয়ে দেন। ইবন আব্বাস বলেন, সাহিরা মানে গোটা জমিন। সাঈদ ইবন জুবাইর, কাতাদা আর আবু সালিহও তা-ই বলেছেন। ইকরিমা, হাসান, দাহহাক আর ইবন যায়দের মতে জমিনের উপরিভাগ। তাবারীর নিজের শব্দ 'যাহরুল আরদ', জমিনের পিঠ। তাঁর সনদে ইকরিমা, হাসান ও দাহহাক বলেন জমিনের উপরিভাগ, আর ইবন যায়দ বলেন জমিনের পিঠ, পিঠের একেবারে উপরে। মুজাহিদ বলেন 'আল-মাকানুল মুসতাওয়ি', সমতল জায়গা।"
          },
          {
            "en": "Several glosses name a movement as well as a place. Ibn Kathir adds Mujahid's words: they were at its bottom, and they were brought out to its top. Qatada, in at-Tabari, says they are on the highest part of the earth after being in its hollow, and in another chain, that they come out of their graves onto the earth. Al-Qurtubi and al-Baghawi both say they come onto the face of the earth after being inside it. Ma'arif al-Qur'an adds that the earth, re-created at the Resurrection, will be wholly level, with no mountain barriers, buildings or caves.",
            "bn": "কয়েকটি ব্যাখ্যায় শুধু জায়গা নয়, একটা চলাও আছে। ইবন কাসীর মুজাহিদের কথা যোগ করেন: তারা ছিল তার তলায়, তাদের বের করে আনা হলো তার উপরে। তাবারীর বর্ণনায় কাতাদা বলেন, জমিনের পেটের ভেতরে থাকার পর তারা এখন তার সবচেয়ে উঁচু অংশে। আরেক সনদে তিনি বলেন, তারা কবর থেকে বেরিয়ে আসে মাটির উপরে। কুরতুবী ও বাগাভী দুজনেই বলেন, ভেতরে থাকার পর তারা উঠে আসে জমিনের উপরিভাগে। মাআরিফুল কুরআন যোগ করে, পুনরুত্থানের সময় নতুন করে গড়া জমিন হবে পুরোপুরি সমতল। পাহাড়ের বাধা থাকবে না, দালান বা গুহাও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Places Named in the Reports",
          "bn": "বর্ণনায় নাম আসা জায়গাগুলো"
        },
        "p": [
          {
            "en": "Others read sahira as a proper name. At-Tabari reports that some said it is a known, particular place on the earth. 'Uthman ibn Abi al-'Atika placed it in the tract between Jabal Hassan and Jabal Ariha, which Allah stretches out as He wills; al-Qurtubi gives the same and puts it in al-Sham, and Ibn Kathir sums up his view as the land of Bayt al-Maqdis, Jerusalem. Sufyan, whom al-Qurtubi and Ibn Kathir name as ath-Thawri, said a land in al-Sham, and al-Baghawi records it as well.",
            "bn": "কেউ কেউ সাহিরাকে একটা নির্দিষ্ট জায়গার নাম হিসেবে পড়েছেন। তাবারী জানান, কারও মতে এটি জমিনের পরিচিত একটি নির্দিষ্ট স্থান। উসমান ইবন আবিল-আতিকা এর অবস্থান বলেছেন জাবাল হাসসান ও জাবাল আরিহার মাঝের প্রান্তরে, আল্লাহ যেভাবে চান তা বিস্তৃত করে দেন। কুরতুবী একই কথা আনেন এবং জায়গাটিকে শামে বলেন। ইবন কাসীর তাঁর মতকে সংক্ষেপে বলেন বাইতুল মাকদিস, অর্থাৎ জেরুজালেমের ভূমি। সুফিয়ান বলেন শামের একটি ভূমি। কুরতুবী ও ইবন কাসীর তাঁকে সুফিয়ান সাওরী বলে চিনিয়েছেন, আর বাগাভীও মতটি উল্লেখ করেছেন।"
          },
          {
            "en": "Wahb ibn Munabbih, in at-Tabari and Ibn Kathir, said the sahira is a mountain beside Bayt al-Maqdis; al-Qurtubi records him as saying the mountain of Bayt al-Maqdis. A further view takes the word out of this world's map altogether. Qatada, in another report, said it is Jahannam, recorded by at-Tabari, al-Baghawi, Ibn Kathir and al-Qurtubi, who explains: these disbelievers are then in Jahannam. Al-Qurtubi also gives, as it is said, a desert at the edge of Jahannam, where they are halted on the land of the Resurrection, so that their wakefulness lasts.",
            "bn": "তাবারী ও ইবন কাসীরের বর্ণনায় ওয়াহব ইবন মুনাব্বিহ বলেন, সাহিরা বাইতুল মাকদিসের পাশের একটি পাহাড়। কুরতুবী তাঁর কথাটি এনেছেন 'বাইতুল মাকদিসের পাহাড়' হিসেবে। আরেকটি মত শব্দটিকে এই দুনিয়ার মানচিত্রের বাইরেই নিয়ে যায়। কাতাদার আরেক বর্ণনায় সাহিরা মানে জাহান্নাম। তাবারী, বাগাভী, ইবন কাসীর ও কুরতুবী সবাই এটি এনেছেন। কুরতুবী ব্যাখ্যা করেন: অর্থাৎ এই কাফেররা তখন জাহান্নামে। 'বলা হয়' বলে কুরতুবী আরও আনেন, সাহিরা জাহান্নামের কিনারে এক মরুপ্রান্তর, যেখানে কিয়ামতের ভূমিতে তাদের দাঁড় করিয়ে রাখা হবে, তাই জেগে থাকা আর শেষ হবে না।"
          },
          {
            "en": "Ibn Kathir gives a verdict on this list: all of these sayings are gharib, unusual, and the sound view is that it is the earth, its upper face. At-Tabari opens with the face of the earth as his own reading and then lists the others under the words others said, without a separate ruling on each. Note that Qatada appears on both sides: with the whole earth in Ibn Kathir, the top of the earth in at-Tabari, and Jahannam in a third report. This article lays the readings out as the sources do and chooses none.",
            "bn": "এই তালিকা নিয়ে ইবন কাসীর রায় দেন: এ সব কথাই 'গরীব', অর্থাৎ অপরিচিত। সঠিক মত হলো, সাহিরা মানে জমিন, তার উপরের দিক। তাবারী শুরু করেন জমিনের উপরিভাগকে নিজের পাঠ হিসেবে রেখে। তারপর বাকিগুলো আনেন 'অন্যরা বলেছেন' বলে, প্রতিটির উপর আলাদা রায় দেন না। খেয়াল করার মতো, কাতাদার নাম দুই দিকেই আছে। ইবন কাসীরে গোটা জমিন, তাবারীতে জমিনের উপরিভাগ, আর তৃতীয় এক বর্ণনায় জাহান্নাম। সূত্রগুলো যেভাবে সাজিয়েছে, এ লেখাও মতগুলো সেভাবেই রাখে, কোনোটি বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Earth Never Disobeyed On",
          "bn": "যে মাটিতে কখনো নাফরমানি হয়নি"
        },
        "p": [
          {
            "en": "A group of readings looks past this earth to another. Al-Qurtubi records, each under it is said, that the sahira is the white earth; that it is an earth Allah makes new on the Day of Resurrection; and that it is the name of the seventh earth, which Allah brings forward to hold the reckoning of His creatures on it, when the earth is exchanged for another. One of these he attributes: ad-Dahhak, from Ibn Abbas, said it is an earth of silver on which Allah was never once disobeyed, created at that time.",
            "bn": "একদল ব্যাখ্যা এই জমিন ছাড়িয়ে আরেক জমিনের দিকে তাকায়। কুরতুবী প্রতিটি আনেন 'বলা হয়' বলে। সাহিরা হলো সাদা জমিন। কিংবা এমন জমিন, যা আল্লাহ কিয়ামতের দিন নতুন করে গড়বেন। কিংবা সপ্তম জমিনের নাম, যেখানে আল্লাহ সৃষ্টির হিসাব নেওয়ার জন্য তা সামনে আনবেন, যখন এই জমিন বদলে আরেক জমিন হয়ে যাবে। এর মধ্যে একটি তিনি নির্দিষ্ট সূত্রে আনেন। দাহহাক ইবন আব্বাস থেকে বলেন, তা রুপার এক জমিন, যার উপর আল্লাহর একবারও নাফরমানি হয়নি, আর সেটি তিনি তখনই সৃষ্টি করবেন।"
          },
          {
            "en": "Ibn Kathir reports ar-Rabi' ibn Anas reading this verse alongside three others: 14:48, the Day the earth is exchanged for another earth, and the heavens, and they come forth before Allah, the One, the Overpowering; 20:105 to 20:107, where the mountains are scattered and the ground left a level plain with no crookedness or rise; and 18:47, where the earth is seen laid bare. Ibn Kathir's bracket names 20:105 and 20:106, though the words he quotes run on into 20:107. The passage then says that this exposed earth is not counted as part of this one.",
            "bn": "ইবন কাসীর জানান, রাবী ইবন আনাস এ আয়াতের সঙ্গে আরও তিনটি আয়াত একই সাথে মিলিয়ে পড়তেন। ১৪:৪৮: যেদিন এই জমিন বদলে আরেক জমিন হবে, আসমানগুলোও, আর সবাই হাজির হবে এক ও পরাক্রমশালী আল্লাহর সামনে। ২০:১০৫ থেকে ২০:১০৭: পাহাড়গুলো উড়িয়ে দেওয়া হবে, ভূমি পড়ে থাকবে সমতল প্রান্তর হয়ে, কোথাও বাঁক বা উঁচু-নিচু থাকবে না। আর ১৮:৪৭: জমিনকে দেখা যাবে একেবারে উন্মুক্ত। ইবন কাসীরের বন্ধনীতে লেখা ২০:১০৫ ও ২০:১০৬, তবে তিনি যে শব্দগুলো উদ্ধৃত করেন তা ২০:১০৭ পর্যন্ত গড়ায়। এরপর অনুচ্ছেদটি বলে, এই উন্মুক্ত জমিন এই দুনিয়ার জমিনের অংশ বলে গণ্য নয়।"
          },
          {
            "en": "It goes on to describe that earth in a phrase that matches ad-Dahhak's report: an earth on which no sin was ever worked and no blood ever shed. Ibn Kathir also brings, through Ibn Abi Hatim's chain to Abu Hazim, the words of the Companion Sahl ibn Sa'd on this verse: a white earth, 'afra', empty, like a loaf of pure bread. In Ibn Kathir that is given as Sahl's own comment, not as the Prophet's words. Whatever the sahira is, these readings agree that it carries no trace of what was done on the old ground.",
            "bn": "অনুচ্ছেদটি এরপর জমিনটির বর্ণনা দেয় এমন কথায়, যা দাহহাকের বর্ণনার সঙ্গে মেলে: এমন জমিন, যার উপর কখনো কোনো গুনাহ করা হয়নি, কখনো রক্ত ঝরানো হয়নি। ইবন কাসীর ইবন আবি হাতিমের সনদে আবু হাযিমের মাধ্যমে সাহাবি সাহল ইবন সা'দ (রাঃ)-এর কথাও আনেন: সাদা, লালচে-সাদা, শূন্য এক জমিন, যেন মিহি আটার রুটি। ইবন কাসীরে এটি সাহলের নিজের ব্যাখ্যা হিসেবে এসেছে, নবীর বাণী হিসেবে নয়। সাহিরা যা-ই হোক, এই ব্যাখ্যাগুলো এক জায়গায় মেলে: পুরনো মাটিতে যা করা হয়েছিল, তার কোনো দাগ ওই ভূমিতে থাকবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hadith Attached",
          "bn": "কোনো হাদীস জোড়া নেই"
        },
        "p": [
          {
            "en": "None of the tafsirs fetched for this verse attaches a hadith of the Prophet ﷺ to it directly, and none gives a cause of revelation for it. Where Ibn Kathir describes the white earth, he gives it as Sahl ibn Sa'd's own words, through Ibn Abi Hatim, and this article reports it as Sahl's words and no more. What it adds is one plain detail: on that ground no one has a landmark. Nothing there is anyone's property, boundary or familiar corner.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই নবী ﷺ-এর কোনো হাদীস সরাসরি এ আয়াতের সঙ্গে জোড়েনি। কোনোটিই এর নাযিলের কোনো প্রেক্ষাপটও দেয়নি। ইবন কাসীর সাদা ভূমির যে বর্ণনা দেন, তা সাহল ইবন সা'দের নিজের কথা হিসেবে, ইবন আবী হাতিমের সূত্রে। এখানেও তা সাহলের কথা হিসেবেই বলা হলো, তার বেশি কিছু নয়। বর্ণনাটি একটা সাদামাটা তথ্য যোগ করে: ওই ভূমিতে কারও কোনো চিহ্ন থাকবে না। সেখানে কোনো কিছুই কারও সম্পত্তি, সীমানা বা চেনা কোণ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing Up Awake",
          "bn": "জেগে উঠে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Put the readings side by side and the verse still says one clear thing. The deniers asked whether a return was possible and called it a loss; the reply is that it takes one cry, and the very next word finds them already there. Whether the sahira is the face of the earth, the whole earth, a level plain, a named place or an earth made new, every gloss in the sources puts people on ground that is open. Al-Muyassar's line holds the contrast: in the belly of the earth, and then on its face.",
            "bn": "সব ব্যাখ্যা পাশাপাশি রাখলেও আয়াতটি একটা কথা পরিষ্কার বলে। অস্বীকারকারীরা জানতে চেয়েছিল ফেরা সম্ভব কি না, আর সেটাকে বলেছিল লোকসান। জবাব হলো, লাগবে একটিমাত্র ধমক, আর পরের শব্দেই দেখা যায় তারা পৌঁছে গেছে। সাহিরা জমিনের উপরিভাগ হোক বা গোটা জমিন, সমতল প্রান্তর হোক বা নির্দিষ্ট কোনো জায়গা, কিংবা নতুন গড়া জমিন, সূত্রের প্রতিটি ব্যাখ্যা মানুষকে দাঁড় করায় খোলা ভূমিতে। মুয়াসসারের বাক্যেই বৈপরীত্যটা ধরা আছে: জমিনের পেটের ভেতরে, তারপর তার পিঠের উপরে।"
          },
          {
            "en": "Several commentators tie the word to wakefulness: a place where people do not sleep out of fear, a desert where waking does not end. The reader can take that as a question for now, while sleep and waking still alternate. A life can be spent awake to markets, plans and quarrels and asleep to the one return that needs no preparation time from Allah's side, only from ours. The verses after this turn to another story, which is left for its own place; this one ends with people standing, awake, on open ground.",
            "bn": "কয়েকজন তাফসীরকার শব্দটিকে জেগে থাকার সঙ্গে জুড়েছেন: এমন জায়গা, যেখানে ভয়ে ঘুম আসে না, এমন মরুপ্রান্তর, যেখানে জেগে থাকা আর শেষ হয় না। পাঠক কথাটাকে এখনকার জন্য প্রশ্ন হিসেবে নিতে পারেন, যখন ঘুম আর জাগরণ এখনো পালা করে আসে। একটা জীবন কেটে যেতে পারে বাজার, পরিকল্পনা আর ঝগড়ায় পুরো সজাগ থেকে, অথচ সেই ফেরার ব্যাপারে ঘুমিয়ে থেকে। আল্লাহর দিক থেকে সে ফেরার জন্য কোনো প্রস্তুতির সময় লাগে না, প্রস্তুতি লাগে শুধু আমাদের দিক থেকে। এর পরের আয়াতগুলো আরেকটি কাহিনিতে যায়, তার আলোচনা তার নিজের জায়গায়। এ আয়াত শেষ হয় খোলা ময়দানে জেগে দাঁড়ানো মানুষ দিয়ে।"
          }
        ]
      }
    ]
  },
  "79:46": {
    "sections": [
      {
        "h": {
          "en": "A Question and a Refusal",
          "bn": "একটি প্রশ্ন ও একটি প্রত্যাখ্যান"
        },
        "p": [
          {
            "en": "The verse answers a question asked four verses earlier. In 79:42 they ask the Prophet ﷺ about the Hour: when is its arrival? 79:43 replies with a question of its own — in what position are you that you should mention it? — and 79:44 puts the matter where it belongs, saying that to your Lord is its finality. Then 79:45 leaves him one role and only one: he is a warner for whoever fears it.",
            "bn": "আয়াতটি এমন এক প্রশ্নের উত্তর দেয় যা করা হয়েছিল চার আয়াত আগে। 79:42-এ তারা নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করে: কখন তা ঘটবে? 79:43 উত্তর দেয় নিজেরই একটি প্রশ্ন দিয়ে — এর আলোচনার সঙ্গে তোমার সম্পর্ক কী? — আর 79:44 বিষয়টিকে তার যথাস্থানে রাখে, বলে যে এ সংক্রান্ত জ্ঞান তোমার প্রতিপালক পর্যন্তই শেষ। এরপর 79:45 তাঁর জন্য রাখে একটিমাত্র ভূমিকা: যারা একে ভয় করে তিনি কেবল তাদেরই সতর্ককারী।"
          },
          {
            "en": "So the date is refused, and then this verse arrives. It is not a compromise. It supplies no year, no interval and no sign to watch for. What it supplies instead is a measurement of an entirely different kind: not when the Hour will come, but how long the whole of this life will feel to the people standing there on the day they see it. The question was about the clock. The answer describes the memory.",
            "bn": "কাজেই তারিখ জানাতে অস্বীকার করা হলো, আর তারপরেই আসে এই আয়াত। এটি কোনো আপস নয়। এটি কোনো সন, কোনো ব্যবধান বা লক্ষ করার মতো কোনো চিহ্ন দেয় না। বরং এটি দেয় সম্পূর্ণ অন্য ধরনের একটি পরিমাপ: কিয়ামত কখন আসবে তা নয়, বরং যেদিন মানুষ তা দেখবে সেদিন তাদের কাছে এই গোটা জীবনটা কত দীর্ঘ মনে হবে। প্রশ্নটি ছিল ঘড়ি নিয়ে। উত্তরটি বর্ণনা করে স্মৃতিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Evening or Its Morning",
          "bn": "এক সন্ধ্যা কিংবা তার সকাল"
        },
        "p": [
          {
            "en": "The Arabic runs kaannahum yawma yarawnaha lam yalbathu illa 'ashiyyatan aw duhaha. 'Ashiyyah is the late part of the day, the stretch that runs down toward sunset, which this app renders afternoon. Duha is the forenoon, the brightening that follows sunrise. Both are portions of daylight, not days; the verse never offers the option of a day, and neither of its two words can be stretched to mean one.",
            "bn": "আরবিতে আয়াতটি: 'কাআন্নাহুম ইয়াওমা ইয়ারাওনাহা লাম ইয়ালবাসূ ইল্লা আশিয়্যাতান আও দুহাহা'। 'আশিয়্যাহ' হলো দিনের শেষভাগ — সূর্যাস্তের দিকে নেমে আসা সময়টুকু। 'দুহা' হলো পূর্বাহ্ণ — সূর্যোদয়ের পরের উজ্জ্বল হয়ে ওঠা সময়। দুটোই দিনের অংশ, গোটা দিন নয়; আয়াতটি কখনোই একটি পূর্ণ দিনের বিকল্প দেয় না, আর এর দুটি শব্দের কোনোটিকেই টেনে একটি দিন বানানো যায় না।"
          },
          {
            "en": "The pronoun at the end is the sharpest part of it. Duhaha is not the forenoon but its forenoon, the morning belonging to the very day whose evening has just been named. The commentators observe that the day itself is never mentioned in the verse at all; it is carried entirely by that one attached suffix. So the two options are not an evening or some other morning. They are the two ends of a single day.",
            "bn": "শেষের সর্বনামটিই এর সবচেয়ে ধারালো অংশ। 'দুহাহা' মানে কেবল পূর্বাহ্ণ নয়, বরং 'তার' পূর্বাহ্ণ — অর্থাৎ যে দিনটির সন্ধ্যার কথা এইমাত্র বলা হলো, সেই দিনটিরই সকাল। মুফাসসিরগণ লক্ষ করেন, আয়াতে দিনটির উল্লেখ কোথাও নেই; পুরো ভারটি বহন করছে ওই একটিমাত্র যুক্ত সর্বনাম। কাজেই বিকল্প দুটি এক সন্ধ্যা আর অন্য কোনো সকাল নয়। সে দুটি একটিমাত্র দিনেরই দুই প্রান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scale, Not a Date",
          "bn": "তারিখ নয়, মাপকাঠি"
        },
        "p": [
          {
            "en": "That is why the refusal in 79:43-44 is not evasion. A date would change a person's arithmetic; a scale changes his valuation. A life measured against a known date can be budgeted, spent down to the last month and settled at the end. A life that will finally register as an evening cannot be budgeted at all, because no stretch of it is long enough to be safely written off, and the settling cannot be scheduled for a month whose number nobody has.",
            "bn": "এ কারণেই 79:43-44-এর প্রত্যাখ্যানটি এড়িয়ে যাওয়া নয়। তারিখ বদলে দিত মানুষের হিসাব; মাপকাঠি বদলে দেয় তার মূল্যায়ন। জানা তারিখের বিপরীতে মাপা জীবনকে বাজেট করা যায় — শেষ মাসটি পর্যন্ত খরচ করে শেষে হিসাব চুকিয়ে নেওয়া যায়। কিন্তু যে জীবন শেষ পর্যন্ত এক সন্ধ্যার মতো ঠেকবে, তাকে আদৌ বাজেট করা যায় না; কারণ তার কোনো অংশই এত দীর্ঘ নয় যে নিরাপদে অপচয় করা চলে, আর হিসাব চুকানোর জন্য এমন কোনো মাস ঠিক করা যায় না যার সংখ্যাটা কারও জানা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Answer Elsewhere",
          "bn": "একই উত্তর অন্যত্র"
        },
        "p": [
          {
            "en": "The Quran states this compression repeatedly, and almost always as something the people themselves say. In 10:45 it is as though they had not remained but an hour of a day. In 30:55 the criminals swear they stayed only an hour. 20:103-104 has them murmuring that they remained ten, while the most accurate among them says one day. In 23:112-114 they are asked how many years, answer a day or part of a day, and are told they stayed only a little.",
            "bn": "কুরআন এই সংকোচনের কথা বারবার বলে, আর প্রায় সবসময়ই মানুষের নিজেদের মুখ দিয়ে। 10:45-এ মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। 30:55-এ অপরাধীরা শপথ করে বলবে তারা এক ঘণ্টাই ছিল। 20:103-104-এ তারা নিজেদের মধ্যে চুপিচুপি বলবে তারা দশ দিন ছিল, আর তাদের মধ্যে সবচেয়ে সঠিক কথা বলা লোকটি বলবে — একদিন। 23:112-114-এ তাদের জিজ্ঞেস করা হবে কত বছর ছিলে, তারা বলবে একদিন বা দিনের কিছু অংশ, আর জবাব আসবে — তোমরা সামান্যই ছিলে।"
          },
          {
            "en": "46:35 says it in nearly the words of our verse: on the day they see what they are promised, it will be as though they had not remained except an hour of a day. Set beside each other, these passages make the compression a fixed feature of the scene rather than a rhetorical flourish in one surah. Some put the estimate into the mouths of those who lived the years and some state it as the scene itself, and every one of them shortens the years drastically.",
            "bn": "46:35 প্রায় আমাদের আয়াতেরই ভাষায় কথাটি বলে: যেদিন তারা প্রতিশ্রুত জিনিসটি দেখবে, সেদিন মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। পাশাপাশি রাখলে এই অংশগুলো বুঝিয়ে দেয়, এই সংকোচন কোনো একটি সূরার অলংকার নয়, বরং সেই দৃশ্যের একটি স্থায়ী বৈশিষ্ট্য। কোথাও হিসাবটি বসানো হয়েছে তাদেরই মুখে যারা বছরগুলো কাটিয়ে এসেছে, কোথাও তা বলা হয়েছে দৃশ্যের বর্ণনা হিসেবেই; আর প্রতিটি ক্ষেত্রেই বছরগুলো নাটকীয়ভাবে ছোট হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Changes Today",
          "bn": "আজ এটি কী বদলায়"
        },
        "p": [
          {
            "en": "The verse is not asking anyone to conclude that life is worthless. Nothing in it says the evening was wasted; it says the evening was short. The practical consequence is a reordering rather than a withdrawal. Whatever has its whole value used up inside the evening — a rank, a purchase, an argument won — gets priced at what an evening is worth, and whatever outlasts the evening gets the remainder of the attention.",
            "bn": "আয়াতটি কাউকে এই সিদ্ধান্তে আসতে বলছে না যে জীবন মূল্যহীন। এতে কোথাও বলা হয়নি সন্ধ্যাটি অপচয় হয়েছে; বলা হয়েছে সন্ধ্যাটি ছোট। এর ব্যবহারিক ফল গুটিয়ে যাওয়া নয়, বরং অগ্রাধিকার নতুন করে সাজানো। যার পুরো মূল্য ওই সন্ধ্যার ভেতরেই ফুরিয়ে যায় — একটি পদ, একটি কেনাকাটা, জিতে যাওয়া একটি তর্ক — তার দাম ধরা হবে এক সন্ধ্যার সমান; আর যা সন্ধ্যার পরেও টিকে থাকে, মনোযোগের বাকিটুকু তারই।"
          },
          {
            "en": "It also settles a particular kind of grief. Waiting is the hardest part of most trials: waiting for health, for a marriage, for a child, for relief that keeps not arriving. This verse does not shorten the wait. It tells you in advance what the wait will look like from the far side of it, and the answer is that it will be the same length as everyone else's ease was — an evening, or the morning of the same day.",
            "bn": "এটি এক বিশেষ ধরনের বেদনাকেও থিতু করে দেয়। বেশির ভাগ পরীক্ষার সবচেয়ে কঠিন অংশ হলো অপেক্ষা: সুস্থতার অপেক্ষা, বিয়ের অপেক্ষা, সন্তানের অপেক্ষা, কিংবা যে স্বস্তি আসতেই চায় না তার অপেক্ষা। আয়াতটি অপেক্ষাকে ছোট করে দেয় না। এটি আগেভাগে জানিয়ে দেয়, ওপারে গিয়ে সেই অপেক্ষাটি দেখতে কেমন লাগবে — আর উত্তরটি হলো, অন্যরা যে স্বাচ্ছন্দ্য পেয়েছিল ঠিক তারই সমান দৈর্ঘ্যের: এক সন্ধ্যা, কিংবা সেই দিনেরই সকাল।"
          }
        ]
      }
    ]
  }
});
