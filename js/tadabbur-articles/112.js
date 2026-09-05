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
          "bn": "যে প্রশ্নের উত্তর এটি"
        },
        "p": [
          {
            "en": "The books of tafsir relate that questioners came to the Prophet ﷺ asking him to describe his Lord — to give His lineage, His ancestry, as one would describe a tribal chief. Surah al-Ikhlas came down as the answer. Whoever the askers were, the demand was the same: fit your Lord into the categories we use for creatures. The surah answers by refusing the categories themselves, one by one, until nothing creaturely is left in the idea of God.",
            "bn": "তাফসীরের কিতাবসমূহ বর্ণনা করে, প্রশ্নকারীরা নবী ﷺ-এর কাছে এসে তাঁর রবের বর্ণনা চেয়েছিল — তাঁর বংশ, তাঁর কুল-পরিচয়, যেভাবে কোনো গোত্রপতির পরিচয় দেওয়া হয়। উত্তর হিসেবে নাযিল হয় সূরা আল-ইখলাস। প্রশ্নকারী যারাই হোক, দাবিটি ছিল একই: তোমার রবকে সেই ছাঁচে ফেলো, যে ছাঁচ আমরা সৃষ্টির জন্য ব্যবহার করি। সূরাটি উত্তর দেয় সেই ছাঁচগুলোকেই একে একে প্রত্যাখ্যান করে, যতক্ষণ না আল্লাহর ধারণায় সৃষ্টির কোনো বৈশিষ্ট্যই অবশিষ্ট থাকে।"
          },
          {
            "en": "The surah is called al-Ikhlas, purity, though the word itself never appears in it; the name describes what the four verses do, purifying the idea of Allah from every borrowed image. Notice also its first word. Qul, say, means the Prophet ﷺ does not describe his Lord from his own imagination. The description is dictated to him, and through him to us, so that what we believe about Allah rests on revelation rather than guesswork.",
            "bn": "সূরাটির নাম আল-ইখলাস — বিশুদ্ধতা — যদিও শব্দটি সূরার ভেতরে কোথাও নেই; নামটি বর্ণনা করে চারটি আয়াত কী করে: আল্লাহর ধারণাকে প্রতিটি ধার-করা চিত্র থেকে বিশুদ্ধ করে। প্রথম শব্দটিও লক্ষ করুন। কুল — বলুন — অর্থ নবী ﷺ নিজের কল্পনা থেকে তাঁর রবের বর্ণনা দেন না। বর্ণনাটি তাঁকে বলে দেওয়া হয়, এবং তাঁর মাধ্যমে আমাদের, যাতে আল্লাহ সম্পর্কে আমাদের বিশ্বাস অনুমানের ওপর নয়, ওহীর ওপর দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahad, Not Merely One",
          "bn": "আহাদ — কেবল এক নয়"
        },
        "p": [
          {
            "en": "Arabic has an ordinary word for one, wahid, the first of a possible series. The surah instead says Ahad. Used in affirmation this word is reserved for Allah, and the commentators hear in it a oneness that admits no parts, no division and no second of its kind. He is not the first of a category with others behind Him; He is one in a way nothing else is one, unique in essence, attributes and right to worship.",
            "bn": "আরবিতে এক বোঝাতে সাধারণ শব্দ আছে — ওয়াহিদ, সম্ভাব্য কোনো ধারার প্রথম। সূরাটি বরং বলে আহাদ। ইতিবাচক বাক্যে এই শব্দ আল্লাহর জন্যই সংরক্ষিত, আর মুফাসসিরগণ এতে শোনেন এমন এক একত্ব, যাতে কোনো অংশ নেই, কোনো বিভাজন নেই, আর তাঁর জাতের দ্বিতীয় কেউ নেই। তিনি কোনো শ্রেণির প্রথম নন, যার পেছনে আরও কেউ আছে; তিনি এমনভাবে এক, যেভাবে আর কিছুই এক নয় — সত্তায়, গুণাবলিতে ও ইবাদতের অধিকারে অনন্য।"
          },
          {
            "en": "This is the same creed 2:163 states — your God is one God — and the same argument 21:22 compresses into a sentence: had there been gods besides Allah in the heavens and the earth, both would have fallen into ruin. Oneness in the Quran is never idle arithmetic. It is a claim about where worship, fear and hope may rightly go, and it tolerates no partner in any of them.",
            "bn": "এ সেই একই আকীদা যা 2:163 ঘোষণা করে — তোমাদের ইলাহ এক ইলাহ — আর সেই একই যুক্তি যা 21:22 এক বাক্যে সংকুচিত করে: আসমান ও যমীনে আল্লাহ ছাড়া আরও ইলাহ থাকলে উভয়ই ধ্বংস হয়ে যেত। কুরআনে একত্ব কখনো নিছক গাণিতিক হিসাব নয়। এটি একটি দাবি — ইবাদত, ভয় ও আশা ন্যায্যত কোথায় যেতে পারে সে সম্পর্কে — এবং এর কোনোটিতেই এটি কোনো অংশীদার সহ্য করে না।"
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
            "bn": "দ্বিতীয় আয়াতটি এমন একটি নাম দেয় যা কুরআনের আর কোথাও নেই: আস-সামাদ। প্রাথমিক যুগের মুফাসসিরগণ এর ব্যাখ্যা করেন: সেই কর্তা, যাঁর কাছে সব বিষয় ফিরিয়ে আনা হয়; যাঁকে সব সৃষ্টি অস্তিত্ব ও রিযিকের জন্য প্রয়োজন বোধ করে, অথচ তাঁর কিছুরই প্রয়োজন নেই। ইবনে আব্বাস (রাঃ) আস-সামাদের বর্ণনা দেন: মহিমার প্রতিটি গুণে যিনি পরিপূর্ণ। অর্থাৎ নির্ভরতা কেবল এক দিকেই প্রবাহিত — যা কিছু আছে সবকিছু থেকে তাঁর দিকে।"
          },
          {
            "en": "Set the two names together and the surah's logic appears. Because He is Ahad, no one shares His station; because He is as-Samad, everyone stands in need of Him, as 35:15 says plainly: you are the ones in need of Allah, and Allah is the Free of need, the Praiseworthy. A being needed by all and needing none is exactly the One to whom prayer makes sense.",
            "bn": "নাম দুটিকে পাশাপাশি রাখলে সূরার যুক্তিটি ফুটে ওঠে। তিনি আহাদ বলে তাঁর মর্যাদায় কারও অংশ নেই; তিনি আস-সামাদ বলে সবাই তাঁর মুখাপেক্ষী — যেমন 35:15 স্পষ্ট বলে: তোমরাই আল্লাহর মুখাপেক্ষী, আর আল্লাহ অভাবমুক্ত, প্রশংসিত। যাঁকে সবার প্রয়োজন অথচ যাঁর কাউকে প্রয়োজন নেই — প্রার্থনা ঠিক তাঁর কাছেই অর্থবহ।"
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
            "bn": "তিনি জন্ম দেন না এবং জন্ম নেননি। প্রথম অস্বীকৃতি তাদের সবার জবাব যারা আল্লাহর প্রতি সন্তান আরোপ করেছে: মুশরিকরা ফেরেশতাদের আল্লাহর কন্যা বলত — যে দাবি 16:57 প্রত্যাখ্যান করে — আর যারা তাঁর জন্য পুত্র দাবি করেছে, যাকে 19:88-92 এমন ভয়ংকর কথা বলে বর্ণনা করে যে তাতে আসমান প্রায় ফেটে পড়ে। দ্বিতীয় অস্বীকৃতি অন্য দিকটি বন্ধ করে: তাঁর কোনো উৎস নেই, কোনো শুরু নেই, তাঁর আগে কেউ নেই যাঁর থেকে তিনি এসেছেন।"
          },
          {
            "en": "The last verse seals it: and there is none comparable to Him. The Arabic ends on the word ahad again, so the surah closes on the note it opened with. 42:11 makes the same guard: there is nothing like Him, and He is the Hearing, the Seeing. Whatever image the imagination builds, the surah has already ruled it out; He is not that.",
            "bn": "শেষ আয়াতটি সিলমোহর দেয়: আর তাঁর সমতুল্য কেউ নেই। আরবিতে শেষ শব্দটি আবারও আহাদ, ফলে সূরাটি যে সুরে শুরু হয়েছিল সেই সুরেই শেষ হয়। 42:11 একই রক্ষাকবচ দেয়: তাঁর মতো কিছুই নেই, আর তিনি সর্বশ্রোতা, সর্বদ্রষ্টা। কল্পনা যে চিত্রই গড়ুক, সূরাটি আগেই তা নাকচ করে দিয়েছে; তিনি তা নন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Third of the Quran",
          "bn": "কুরআনের এক-তৃতীয়াংশ"
        },
        "p": [
          {
            "en": "Al-Bukhari relates that the Prophet ﷺ said this surah is equal to a third of the Quran. Scholars have explained the weighing by the Quran's great themes — who Allah is, what He commands, and what He has done and will do — and this surah carries the first theme whole. Four short verses hold the entire doctrine of tawheed without one word to spare.",
            "bn": "আল-বুখারী বর্ণনা করেন, নবী ﷺ বলেছেন এই সূরা কুরআনের এক-তৃতীয়াংশের সমান। আলিমগণ এই ওজনের ব্যাখ্যা করেছেন কুরআনের প্রধান বিষয়বস্তু দিয়ে — আল্লাহ কে, তিনি কী আদেশ করেন, এবং তিনি কী করেছেন ও করবেন — আর এই সূরাটি প্রথম বিষয়টিকে সম্পূর্ণ বহন করে। চারটি ছোট আয়াত একটি বাড়তি শব্দ ছাড়াই তাওহীদের গোটা আকীদা ধারণ করে।"
          },
          {
            "en": "Al-Bukhari also relates the man who led prayer and ended every recitation with this surah; asked why, he said: because it is the description of the Most Merciful, and I love to recite it. The Prophet ﷺ said: tell him that Allah loves him. And Aisha (RA) reports that every night the Prophet ﷺ would recite this surah with the two surahs of refuge, blow into his palms and wipe over his body.",
            "bn": "আল-বুখারী আরও বর্ণনা করেন সেই ব্যক্তির কথা, যিনি নামাযে ইমামতি করতেন এবং প্রতিটি তিলাওয়াত এই সূরা দিয়ে শেষ করতেন; কারণ জিজ্ঞেস করা হলে তিনি বলেন: কারণ এটি পরম করুণাময়ের বর্ণনা, আর আমি এটি পড়তে ভালোবাসি। নবী ﷺ বলেন: তাকে জানিয়ে দাও, আল্লাহ তাকে ভালোবাসেন। আর আয়েশা (রাঃ) বর্ণনা করেন, প্রতি রাতে নবী ﷺ এই সূরা ও আশ্রয়ের দুই সূরা পড়ে দুই হাতের তালুতে ফুঁ দিতেন এবং শরীরে বুলিয়ে নিতেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Its Purity",
          "bn": "এর বিশুদ্ধতা জীবনে ধারণ"
        },
        "p": [
          {
            "en": "Familiarity is the danger with a surah this short. Recited quickly, it becomes a sound; read slowly, it is four claims about reality, each one correcting something we quietly believe when afraid — that help lies with the powerful, that we are on our own, that God is far and vague. The surah replaces all of that with One who is near, needed by all and unlike anything.",
            "bn": "এত ছোট সূরার বিপদ হলো অতিপরিচিতি। দ্রুত পড়লে এটি কেবল একটি ধ্বনি হয়ে যায়; ধীরে পড়লে এটি বাস্তবতা সম্পর্কে চারটি দাবি, যার প্রতিটি সংশোধন করে সেই বিশ্বাসগুলোকে যা ভয়ের সময় আমরা নীরবে পুষে রাখি — সাহায্য ক্ষমতাবানদের হাতে, আমরা একা, আল্লাহ দূরের ও অস্পষ্ট। সূরাটি এসবের জায়গায় বসায় এমন এক সত্তাকে, যিনি নিকটবর্তী, যাঁকে সবার প্রয়োজন এবং যিনি কোনো কিছুর মতো নন।"
          },
          {
            "en": "Its practice is already built into a Muslim's day: in the voluntary prayers where the Prophet ﷺ loved to recite it, in the morning and evening remembrances, and before sleep. Carry its meaning with the words. When you ask, you are asking as-Samad, who owns what you need and is not wearied by your asking; and nothing you fear holds any share of His power.",
            "bn": "এর চর্চা একজন মুসলিমের দিনে আগে থেকেই গাঁথা: নফল নামাযে, যেখানে নবী ﷺ এটি পড়তে ভালোবাসতেন, সকাল-সন্ধ্যার যিকিরে, আর ঘুমের আগে। শব্দের সঙ্গে অর্থটাও বহন করুন। আপনি যখন চান, তখন চাইছেন আস-সামাদের কাছে — আপনার প্রয়োজনের মালিক তিনিই, আর আপনার চাওয়া তাঁকে ক্লান্ত করে না; এবং আপনি যা ভয় করেন তার কোনোটিরই তাঁর ক্ষমতায় কোনো অংশ নেই।"
          }
        ]
      }
    ]
  }
});
