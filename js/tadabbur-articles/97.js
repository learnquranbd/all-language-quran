/**
 * Tadabbur long-form articles — surah 97.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "97:3": {
    "sections": [
      {
        "h": {
          "en": "The Night the Book Came Down",
          "bn": "যে রাতে কিতাব নেমে এল"
        },
        "p": [
          {
            "en": "Surah al-Qadr begins with the event, not the reward: inna anzalnahu fi laylati al-qadr, We sent it down in the Night of Decree. 44:3 calls the same night blessed, and 2:185 names Ramadan as the month in which the Quran was sent down. Ibn Abbas (RA) and others explain that the Quran came down in one descent to the lowest heaven, and then reached the Prophet ﷺ in portions across the years of his mission.",
            "bn": "সূরা আল-ক্বদর শুরু হয় ঘটনা দিয়ে, পুরস্কার দিয়ে নয়: 'ইন্না আনযালনাহু ফী লাইলাতিল ক্বদর', আমি একে নাজিল করেছি ক্বদরের রাতে। ৪৪:৩ এই রাতকেই বরকতময় বলেছে, আর ২:১৮৫ বলছে, রমজান সেই মাস, যে মাসে কুরআন নাজিল হয়েছে। ইবনে আব্বাস (রাঃ) ও অন্যরা ব্যাখ্যা করেন, কুরআন প্রথমে একবারে পুরোটা নিকটতম আসমানে নেমে আসে। তারপর নবুওয়াতের বছরগুলো জুড়ে অল্প অল্প করে নবী ﷺ-এর কাছে পৌঁছায়।"
          },
          {
            "en": "The name itself carries more than one sense, and the commentators keep them together. Qadr is measuring out and decree, which 44:4 supports directly: therein is made distinct every precise matter — Qatadah says the affairs are settled in it and the terms of life and the provisions are apportioned. Qadr is also rank and worth. A night on which the Book descended and on which the year is written is honoured by both meanings at once.",
            "bn": "এ নামের অর্থ একটি নয়, আর মুফাসসিররা অর্থগুলো আলাদা না করে একসঙ্গেই ধরেন। 'ক্বদর' মানে মেপে ভাগ করা, ফায়সালা করা। ৪৪:৪ সরাসরি এর পক্ষে কথা বলে: এ রাতে প্রতিটি সুনির্দিষ্ট বিষয় আলাদা করে স্পষ্ট করে দেওয়া হয়। কাতাদাহ বলেন, এ রাতে বিষয়গুলোর ফায়সালা হয়, আর আয়ু ও রিযিক ভাগ করে দেওয়া হয়। আবার 'ক্বদর' মানে মর্যাদা ও মূল্যও। যে রাতে কিতাব নেমেছে, যে রাতে সারা বছরের ফায়সালা লেখা হয়, সে রাত দুই অর্থেই সম্মানিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than a Thousand Months",
          "bn": "হাজার মাসের চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "97:2 asks what can make you know what the Night of Decree is, and 97:3 answers in six words: laylatu al-qadri khayrun min alfi shahr. The key word is khayrun min, better than. It is a comparative of superiority, not an equation, and the early commentators do not treat the verse as an exchange rate. The plain gloss of the mufassirun is that righteous work in this one night is better than righteous work in a thousand months containing no such night.",
            "bn": "৯৭:২ জিজ্ঞেস করে, তুমি কি জান ক্বদরের রাত কী? আর ৯৭:৩ জবাব দেয় ছয় শব্দে: 'লাইলাতুল ক্বদরি খাইরুম মিন আলফি শাহর'। আসল শব্দ 'খাইরুম মিন', মানে 'চেয়ে উত্তম'। এখানে একটিকে আরেকটির চেয়ে শ্রেষ্ঠ বলা হচ্ছে, দুটিকে সমান ধরা হচ্ছে না। প্রথম যুগের মুফাসসিররাও আয়াতটিকে লেনদেনের দর হিসেবে পড়েননি। তাঁদের সোজা ব্যাখ্যা: এই এক রাতের নেক আমল এমন হাজার মাসের নেক আমলের চেয়েও উত্তম, যে হাজার মাসে এমন কোনো রাত নেই।"
          },
          {
            "en": "A number of the commentators add that Arabic uses a thousand for an abundance that is not being counted, so the figure marks superiority rather than a ceiling. That is worth holding onto, because arithmetic is the wrong instrument here. Converting the months into years and then budgeting one's worship against the total turns a gift into a transaction, and the surah is not offering a rate of exchange. It is telling you that some hours are weighted by the One who set the scales.",
            "bn": "কয়েকজন মুফাসসির আরও বলেন, আরবিতে 'হাজার' দিয়ে প্রায়ই এমন প্রাচুর্য বোঝানো হয়, যা গুনে দেখার জন্য নয়। তাই সংখ্যাটি শ্রেষ্ঠত্ব বোঝায়, কোনো ঊর্ধ্বসীমা নয়। কথাটি মনে রাখার মতো, কারণ এখানে অঙ্ক কষে কাজ হয় না। মাসকে বছরে বদলে নিয়ে সেই মোট হিসাবের সঙ্গে মিলিয়ে ইবাদতের মাপজোখ করলে উপহারটাই লেনদেন হয়ে যায়। অথচ সূরাটি কোনো বিনিময়ের দর দিচ্ছে না। সূরাটি জানাচ্ছে, কিছু সময়ের ওজন বাড়িয়ে দিয়েছেন তিনিই, যিনি দাঁড়িপাল্লা বসিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sought, Not Scheduled",
          "bn": "খুঁজে নিতে হয়, তারিখ দেওয়া নেই"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim record from Abu Sa'id al-Khudri (RA) that the Prophet ﷺ kept i'tikaf in the first ten nights of Ramadan, then the middle ten, and then addressed the people on the morning of the twentieth saying that he had been shown the Night of Decree and then caused to forget it, that it is in the last ten and on an odd night, and that he had seen himself prostrating in mud and water. It rained that night, and the mud was on his forehead.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ রমজানের প্রথম দশ রাত ই'তিকাফ করেন, তারপর মাঝের দশ রাত। এরপর বিশ তারিখ সকালে তিনি লোকদের উদ্দেশে বলেন, তাঁকে ক্বদরের রাত দেখানো হয়েছিল, পরে তা ভুলিয়ে দেওয়া হয়েছে। রাতটি শেষ দশকে, কোনো বেজোড় রাতে। আর তিনি দেখেছেন, তিনি কাদা ও পানির মধ্যে সিজদা করছেন। সে রাতে বৃষ্টি হলো, আর তাঁর কপালে কাদা লেগে ছিল।"
          },
          {
            "en": "Ash-Shafi'i said of this report that it is the most authentic of what has been narrated on the question. Other sound reports name particular odd nights, and the scholars differ; Ibn Kathir records the view of Abu Qilabah, adopted by Malik, ath-Thawri, Ahmad and others, that the night moves within the last ten from year to year. The uncertainty is doing work. A night with a fixed date could be observed and slept off; a hidden one has to be pursued across ten.",
            "bn": "ইমাম শাফিঈ এই বর্ণনা সম্পর্কে বলেছেন, এ প্রশ্নে যত বর্ণনা এসেছে, তার মধ্যে এটিই সবচেয়ে সহীহ। অন্য কিছু সহীহ বর্ণনায় নির্দিষ্ট বেজোড় রাতের কথা আছে, আর আলিমদের মধ্যে এ নিয়ে মতভেদ রয়েছে। ইবনে কাসীর আবু কিলাবার মত উল্লেখ করেছেন: রাতটি বছর বছর শেষ দশকের ভেতরেই জায়গা বদলায়। মালিক, সুফিয়ান সাওরী, আহমাদ প্রমুখ এই মত গ্রহণ করেছেন। এই অনিশ্চয়তা অকারণে নয়। তারিখ জানা থাকলে সেই এক রাত জেগে তারপর ঘুমিয়ে পড়া যেত; লুকানো রাতকে খুঁজতে হয় পুরো দশ রাত ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Aisha Was Told to Say",
          "bn": "আয়িশা (রাঃ)-কে যা বলতে বলা হলো"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, and graded hasan sahih, that Aisha (RA) asked: O Messenger of Allah, if I know which night is the Night of Decree, what should I say in it? He ﷺ replied: Say, Allahumma innaka afuwwun tuhibbu al-afwa fa'fu anni — O Allah, You are Pardoning, You love to pardon, so pardon me. Notice what she was not given. No list of worldly requests, and no long formula; on the best night of the year, one thing to ask for.",
            "bn": "ইমাম তিরমিযী বর্ণনা করেছেন এবং হাদিসটিকে হাসান সহীহ বলেছেন: আয়িশা (রাঃ) জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, কোন রাতটি ক্বদরের রাত তা যদি জানতে পারি, তবে সে রাতে কী বলব? তিনি ﷺ বললেন, বলো: 'আল্লাহুম্মা ইন্নাকা আফুউউন তুহিব্বুল আফওয়া ফা'ফু আন্নী', হে আল্লাহ, আপনি ক্ষমাশীল, ক্ষমা করতে ভালোবাসেন, তাই আমাকে ক্ষমা করুন। খেয়াল করুন, তাঁকে কী দেওয়া হয়নি। দুনিয়ার চাওয়া-পাওয়ার কোনো ফর্দ নেই, লম্বা কোনো দোয়া-বাক্যও নেই। বছরের সেরা রাতে চাওয়ার জিনিস মাত্র একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Peace Until Dawn",
          "bn": "ফজর পর্যন্ত শান্তি"
        },
        "p": [
          {
            "en": "97:4 says the angels and the Ruh descend in it by their Lord's permission with every matter, and 97:5 closes: peace it is, until the emergence of dawn. Ibn Kathir explains that the angels descend in abundance because the blessing is abundant, as they descend when the Quran is recited and gather around circles of remembrance. Qatadah and Ibn Zayd read the closing salam as meaning that the whole night is good, with no evil in it, until dawn breaks.",
            "bn": "৯৭:৪ বলছে, সে রাতে ফেরেশতারা ও রূহ তাঁদের রবের অনুমতিতে প্রতিটি বিষয় নিয়ে নেমে আসেন। আর ৯৭:৫ শেষ হয় এভাবে: শান্তিময় এ রাত, ফজরের উদয় পর্যন্ত। ইবনে কাসীর ব্যাখ্যা করেন, এ রাতে বরকত অনেক, তাই ফেরেশতারাও নামেন অনেক বেশি সংখ্যায়। যেমন তাঁরা নামেন কুরআন তিলাওয়াতের সময়, আর জিকিরের মজলিস ঘিরে রাখেন। কাতাদাহ ও ইবনে যায়দ শেষের 'সালাম' শব্দের অর্থ করেন: পুরো রাতটিই কল্যাণে ভরা, তাতে কোনো অনিষ্ট নেই, ভোর না হওয়া পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Night Is Kept",
          "bn": "রাতটি যেভাবে কাটানো হয়"
        },
        "p": [
          {
            "en": "The surah's practical shape is simple and demanding: guard the last ten nights rather than one, and keep the odd ones with particular care. The two Sahihs record from Abu Hurayrah (RA) that the Prophet ﷺ said whoever stands in prayer on the Night of Decree out of faith and seeking reward will be forgiven what has passed of his sins. The two conditions are faith and seeking reward; neither is a quantity of rak'ahs.",
            "bn": "সূরাটি থেকে আমলের যে রূপ দাঁড়ায় তা সহজ, তবে খাটুনির: শুধু একটি রাত নয়, শেষ দশ রাতের সবগুলোকেই আগলে রাখুন, আর বেজোড় রাতগুলোতে বিশেষ যত্ন নিন। সহীহ বুখারী ও সহীহ মুসলিমে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: যে ব্যক্তি ঈমানের সঙ্গে ও সওয়াবের আশায় ক্বদরের রাতে নামাজে দাঁড়ায়, তার আগের গুনাহ মাফ করে দেওয়া হয়। শর্ত দুটি: ঈমান আর সওয়াবের আশা। কোনোটিই রাকআতের সংখ্যা নয়।"
          },
          {
            "en": "And the du'a taught to Aisha (RA) sets the priority for the night before a person's own worries do. Pardon first, because a record cleared changes everything downstream of it, while a granted request leaves the record where it was. Whatever else is asked for after that is asked for by someone who has already put the most important item at the top of the list, which is exactly what the night was given for.",
            "bn": "আর আয়িশা (রাঃ)-কে শেখানো দোয়াটি মানুষের নিজের দুশ্চিন্তা মাথায় আসার আগেই রাতটির অগ্রাধিকার ঠিক করে দেয়। আগে ক্ষমা। কারণ আমলনামা পরিষ্কার হলে তার পরের সবকিছু বদলে যায়, অথচ কোনো একটি চাওয়া পূরণ হলে আমলনামা যেমন ছিল তেমনই থাকে। এরপর আর যা কিছু চাওয়া হয়, তা চাইছেন এমন একজন, যিনি সবচেয়ে জরুরি জিনিসটি আগেই তালিকার শীর্ষে বসিয়ে দিয়েছেন। আর ঠিক এ জন্যই রাতটি দেওয়া হয়েছে।"
          }
        ]
      }
    ]
  }
});
