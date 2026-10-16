/**
 * Tadabbur long-form articles — surah 112.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "112:1-4": {
    "sections": [
      {
        "h": {
          "en": "The Question It Answers",
          "bn": "যে প্রশ্নের জবাবে এই সূরা"
        },
        "p": [
          {
            "en": "The books of tafsir relate that questioners came to the Prophet ﷺ asking him to describe his Lord — to give His lineage, His ancestry, as one would describe a tribal chief. Surah al-Ikhlas came down as the answer. Whoever the askers were, the demand was the same: fit your Lord into the categories we use for creatures. The surah answers by refusing the categories themselves, one by one, until nothing creaturely is left in the idea of God.",
            "bn": "তাফসীরের কিতাবে বর্ণিত আছে, কিছু লোক নবী ﷺ-এর কাছে এসে তাঁর রবের পরিচয় জানতে চেয়েছিল। তারা জানতে চাইল তাঁর বংশ, তাঁর কুলপরিচয়, ঠিক যেভাবে কোনো গোত্রপতির পরিচয় দেওয়া হয়। জবাবে নাজিল হয় সূরা আল-ইখলাস। প্রশ্নকারীরা যারাই হোক, দাবি ছিল একটাই: সৃষ্টিকে আমরা যে ছাঁচে মাপি, তোমার রবকেও সেই ছাঁচে ফেলো। সূরাটি জবাব দেয় সেই ছাঁচগুলোকেই একে একে বাতিল করে দিয়ে। শেষে আল্লাহর ধারণায় সৃষ্টির কোনো ছাপই আর বাকি থাকে না।"
          },
          {
            "en": "The surah is called al-Ikhlas, purity, though the word itself never appears in it; the name describes what the four verses do, purifying the idea of Allah from every borrowed image. Notice also its first word. Qul, say, means the Prophet ﷺ does not describe his Lord from his own imagination. The description is dictated to him, and through him to us, so that what we believe about Allah rests on revelation rather than guesswork.",
            "bn": "সূরাটির নাম আল-ইখলাস, মানে বিশুদ্ধতা। অথচ শব্দটি সূরার ভেতরে কোথাও নেই। নামটি আসলে বলে দেয় চারটি আয়াত কী কাজ করে: বাইরে থেকে ধার করা সব ছবি সরিয়ে আল্লাহর ধারণাকে খাঁটি করে তোলে। এবার প্রথম শব্দটি লক্ষ করুন। কুল, অর্থাৎ বলুন। মানে নবী ﷺ নিজের কল্পনা থেকে তাঁর রবের বর্ণনা দিচ্ছেন না। বর্ণনাটি আল্লাহ তাঁকে বলে দিয়েছেন, আর তাঁর মাধ্যমে আমাদের। ফলে আল্লাহ সম্পর্কে আমাদের বিশ্বাস দাঁড়িয়ে থাকে ওহির ওপর, অনুমানের ওপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahad, Not Merely One",
          "bn": "আহাদ — কেবল এক নয়"
        },
        "p": [
          {
            "en": "Arabic has an ordinary word for one, wahid, the first of a possible series. The surah instead says Ahad. Used in affirmation this word is reserved for Allah, and the commentators hear in it a oneness that admits no parts, no division and no second of its kind. He is not the first of a category with others behind Him; He is one in a way nothing else is one, unique in essence, attributes and right to worship.",
            "bn": "আরবিতে 'এক'-এর সাধারণ শব্দ হলো ওয়াহিদ। এটি এমন এক-কে বোঝায়, যার পরে দুই-তিন আসতে পারে। সূরাটি কিন্তু সে শব্দ নেয়নি, বলেছে আহাদ। হ্যাঁ-বাচক বাক্যে এই শব্দ কেবল আল্লাহর জন্যই রাখা। মুফাসসিরগণ এতে এমন এক একত্ব দেখেন, যার কোনো অংশ নেই, কোনো ভাগ নেই, তাঁর মতো দ্বিতীয় কেউ নেই। তিনি কোনো শ্রেণির প্রথম সদস্য নন যে তাঁর পেছনে আরও কেউ আছে। তিনি এমনভাবে এক, যেভাবে আর কিছুই এক নয়: সত্তায়, গুণে আর ইবাদত পাওয়ার হকে তিনি অনন্য।"
          },
          {
            "en": "This is the same creed 2:163 states — your God is one God — and the same argument 21:22 compresses into a sentence: had there been gods besides Allah in the heavens and the earth, both would have fallen into ruin. Oneness in the Quran is never idle arithmetic. It is a claim about where worship, fear and hope may rightly go, and it tolerates no partner in any of them.",
            "bn": "২:১৬৩ আয়াত এই আকীদাই ঘোষণা করে: তোমাদের ইলাহ এক ইলাহ। আর ২১:২২ একই যুক্তি এক বাক্যে বলে দেয়: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে দুটোই ধ্বংস হয়ে যেত। কুরআনে একত্ব কখনো নিছক অঙ্কের হিসাব নয়। এটা আসলে একটা দাবি: ইবাদত, ভয় আর আশা ন্যায্যভাবে কার দিকে যেতে পারে। আর এর কোনোটিতেই এই দাবি কোনো শরিক মেনে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name As-Samad",
          "bn": "আস-সামাদ নামটি"
        },
        "p": [
          {
            "en": "The second verse gives a name that occurs nowhere else in the Quran: as-Samad. The early commentators explain it as the master to whom every matter is referred, the One all creatures need for existence and provision while He needs nothing at all. Ibn Abbas (RA) describes as-Samad as the one perfect in every attribute of majesty. Dependence, in other words, flows in one direction only, from everything that exists toward Him.",
            "bn": "দ্বিতীয় আয়াতে এমন এক নাম এসেছে, যা কুরআনের আর কোথাও নেই: আস-সামাদ। প্রথম যুগের মুফাসসিরগণ এর ব্যাখ্যা দিয়েছেন এভাবে: তিনি সেই মালিক, সব বিষয়ে যাঁর কাছেই ফিরে যেতে হয়। অস্তিত্ব আর রিযিকের জন্য সব সৃষ্টি তাঁর মুখাপেক্ষী, অথচ তাঁর কোনো কিছুরই প্রয়োজন নেই। ইবনে আব্বাস (রাঃ) বলেন, আস-সামাদ তিনিই, যিনি মহিমার প্রতিটি গুণে পরিপূর্ণ। অর্থাৎ নির্ভরতা চলে কেবল এক দিকে: যা কিছু আছে, সবকিছু থেকে তাঁর দিকে।"
          },
          {
            "en": "Set the two names together and the surah's logic appears. Because He is Ahad, no one shares His station; because He is as-Samad, everyone stands in need of Him, as 35:15 says plainly: you are the ones in need of Allah, and Allah is the Free of need, the Praiseworthy. A being needed by all and needing none is exactly the One to whom prayer makes sense.",
            "bn": "নাম দুটি পাশাপাশি রাখুন, সূরার যুক্তিটা পরিষ্কার হয়ে যাবে। তিনি আহাদ, তাই তাঁর আসনে আর কারও ভাগ নেই। তিনি আস-সামাদ, তাই সবাই তাঁর মুখাপেক্ষী। ৩৫:১৫ সোজাসুজি বলে: তোমরাই আল্লাহর মুখাপেক্ষী, আর আল্লাহ অভাবমুক্ত, প্রশংসিত। যাঁকে সবার প্রয়োজন অথচ যাঁর কাউকে প্রয়োজন নেই, দোয়া তো ঠিক তাঁর কাছেই অর্থবহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Begetting Nor Born",
          "bn": "জন্ম দেন না, জন্মও নেননি"
        },
        "p": [
          {
            "en": "He neither begets nor is begotten. The first negation answers everyone who assigned Allah offspring: the pagans who called the angels daughters of Allah, a claim 16:57 rejects, and those who claimed for Him a son, which 19:88-92 describes as a word so monstrous the heavens nearly rupture at it. The second negation closes the other direction: He has no origin, no beginning, no one before Him from whom He came.",
            "bn": "তিনি জন্ম দেন না, জন্মও নেননি। প্রথম 'না' জবাব দেয় তাদের সবাইকে, যারা আল্লাহর সন্তান আছে বলে দাবি করেছে। মুশরিকরা ফেরেশতাদের বলত আল্লাহর কন্যা, আর ১৬:৫৭ সে দাবি নাকচ করে। আবার কেউ কেউ দাবি করেছে, তাঁর পুত্র আছে। ১৯:৮৮-৯২ আয়াতগুলো একে বলেছে এমন জঘন্য কথা, যাতে আসমান প্রায় ফেটে পড়ে। দ্বিতীয় 'না' অন্য দিকটাও বন্ধ করে দেয়: তাঁর কোনো উৎস নেই, কোনো শুরু নেই, তাঁর আগে এমন কেউ নেই যাঁর থেকে তিনি এসেছেন।"
          },
          {
            "en": "The last verse seals it: and there is none comparable to Him. The Arabic ends on the word ahad again, so the surah closes on the note it opened with. 42:11 makes the same guard: there is nothing like Him, and He is the Hearing, the Seeing. Whatever image the imagination builds, the surah has already ruled it out; He is not that.",
            "bn": "শেষ আয়াত এসে মোহর মেরে দেয়: আর তাঁর সমতুল্য কেউ নেই। আরবিতে শেষ শব্দটি আবার সেই আহাদ, ফলে সূরা যে সুরে শুরু হয়েছিল, সেই সুরেই শেষ হয়। ৪২:১১ আয়াতও একই সীমা টেনে দেয়: তাঁর মতো কিছুই নেই, আর তিনি সর্বশ্রোতা, সর্বদ্রষ্টা। কল্পনা যে ছবিই আঁকুক, সূরাটি আগেই তা বাতিল করে দিয়েছে। তিনি সেটা নন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third of the Quran",
          "bn": "কুরআনের এক-তৃতীয়াংশ"
        },
        "p": [
          {
            "en": "Al-Bukhari relates that the Prophet ﷺ said this surah is equal to a third of the Quran. Scholars have explained the weighing by the Quran's great themes — who Allah is, what He commands, and what He has done and will do — and this surah carries the first theme whole. Four short verses hold the entire doctrine of tawheed without one word to spare.",
            "bn": "আল-বুখারী বর্ণনা করেছেন, নবী ﷺ বলেছেন: এই সূরা কুরআনের এক-তৃতীয়াংশের সমান। আলিমগণ এই হিসাবের ব্যাখ্যা দিয়েছেন কুরআনের বড় বড় বিষয় দিয়ে: আল্লাহ কে, তিনি কী আদেশ করেন, আর তিনি কী করেছেন ও করবেন। এই সূরা প্রথম বিষয়টি পুরোটাই ধারণ করে। মাত্র চারটি ছোট আয়াতে তাওহিদের গোটা আকীদা, একটি শব্দও বাড়তি নেই।"
          },
          {
            "en": "Al-Bukhari also relates the man who led prayer and ended every recitation with this surah; asked why, he said: because it is the description of the Most Merciful, and I love to recite it. The Prophet ﷺ said: tell him that Allah loves him. And Aisha (RA) reports that every night the Prophet ﷺ would recite this surah with the two surahs of refuge, blow into his palms and wipe over his body.",
            "bn": "আল-বুখারী আরেকটি ঘটনাও বর্ণনা করেছেন। এক ব্যক্তি নামাজে ইমামতি করতেন, আর প্রতিবার তিলাওয়াত শেষ করতেন এই সূরা দিয়ে। কারণ জানতে চাইলে তিনি বললেন: এতে যে পরম করুণাময়ের পরিচয় আছে, তাই আমি এটি পড়তে ভালোবাসি। নবী ﷺ বললেন: তাকে জানিয়ে দাও, আল্লাহ তাকে ভালোবাসেন। আর আয়েশা (রাঃ) বর্ণনা করেন, নবী ﷺ প্রতি রাতে এই সূরা আর আশ্রয় চাওয়ার দুই সূরা পড়ে দুই হাতের তালুতে ফুঁ দিতেন, তারপর তা শরীরে বুলিয়ে নিতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Its Purity",
          "bn": "জীবনে এর বিশুদ্ধতা"
        },
        "p": [
          {
            "en": "Familiarity is the danger with a surah this short. Recited quickly, it becomes a sound; read slowly, it is four claims about reality, each one correcting something we quietly believe when afraid — that help lies with the powerful, that we are on our own, that God is far and vague. The surah replaces all of that with One who is near, needed by all and unlike anything.",
            "bn": "এত ছোট সূরার বিপদ হলো, তা খুব বেশি চেনা হয়ে যায়। তাড়াতাড়ি পড়লে এটি কেবল কিছু আওয়াজ হয়ে থাকে। ধীরে পড়লে দেখা যায়, এ হলো বাস্তবতা নিয়ে চারটি দাবি। প্রতিটি দাবি আমাদের এমন কোনো বিশ্বাস শুধরে দেয়, যা ভয়ের সময় আমরা চুপচাপ মনে পুষে রাখি: সাহায্য ক্ষমতাবানদের হাতে, আমরা একা, আল্লাহ অনেক দূরের, অস্পষ্ট। সূরাটি এসবের জায়গায় দাঁড় করায় এমন এক সত্তাকে, যিনি কাছে আছেন, যাঁকে সবার প্রয়োজন, আর যিনি কোনো কিছুর মতো নন।"
          },
          {
            "en": "Its practice is already built into a Muslim's day: in the voluntary prayers where the Prophet ﷺ loved to recite it, in the morning and evening remembrances, and before sleep. Carry its meaning with the words. When you ask, you are asking as-Samad, who owns what you need and is not wearied by your asking; and nothing you fear holds any share of His power.",
            "bn": "এই সূরার আমল মুসলিমের প্রতিদিনের জীবনে আগে থেকেই গাঁথা আছে: নফল নামাজে, যেখানে নবী ﷺ এটি পড়তে ভালোবাসতেন; সকাল-সন্ধ্যার জিকিরে; আর ঘুমের আগে। শব্দের সঙ্গে এর অর্থটাও মনে রাখুন। আপনি যখন কিছু চান, চাইছেন আস-সামাদের কাছে। আপনার যা দরকার, তার মালিক তিনিই, আর আপনার চাওয়ায় তিনি ক্লান্ত হন না। আর যা কিছুকে আপনি ভয় পান, তাঁর ক্ষমতায় তার কোনো ভাগ নেই।"
          }
        ]
      }
    ]
  }
});
