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
            "bn": "সূরা আল-ক্বদর শুরু হয় ঘটনাটি দিয়ে, পুরস্কার দিয়ে নয়: 'ইন্না আনযালনাহু ফী লাইলাতিল ক্বদর' — আমি একে নাযিল করেছি ক্বদরের রাতে। 44:3 একই রাতকে বরকতময় বলে, আর 2:185 রমযানকে সেই মাস হিসেবে নাম দেয় যাতে কুরআন নাযিল হয়েছে। ইবনে আব্বাস (রাঃ) ও অন্যরা ব্যাখ্যা করেন, কুরআন একবারে নিকটতম আসমানে নেমে এসেছিল, তারপর নবী ﷺ-এর কাছে তাঁর নবুওয়াতের বছরগুলো জুড়ে অংশে অংশে পৌঁছেছে।"
          },
          {
            "en": "The name itself carries more than one sense, and the commentators keep them together. Qadr is measuring out and decree, which 44:4 supports directly: therein is made distinct every precise matter — Qatadah says the affairs are settled in it and the terms of life and the provisions are apportioned. Qadr is also rank and worth. A night on which the Book descended and on which the year is written is honoured by both meanings at once.",
            "bn": "নামটি নিজেই একাধিক অর্থ বহন করে, আর মুফাসসিরগণ অর্থগুলো একসঙ্গেই রাখেন। 'ক্বদর' মানে পরিমাপ ও ফায়সালা — 44:4 সরাসরি তা সমর্থন করে: এ রাতে প্রতিটি সুনির্দিষ্ট বিষয় স্পষ্ট করে দেওয়া হয়; কাতাদাহ বলেন, এতে বিষয়গুলো নির্ধারিত হয় এবং আয়ু ও রিযিক ভাগ করে দেওয়া হয়। আবার 'ক্বদর' মানে মর্যাদা ও মূল্যও। যে রাতে কিতাব নেমেছে এবং যে রাতে বছরের ফায়সালা লেখা হয়, সে রাত দুই অর্থেই একসঙ্গে সম্মানিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than a Thousand Months",
          "bn": "হাজার মাসের চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "97:2 asks what can make you know what the Night of Decree is, and 97:3 answers in six words: laylatu al-qadri khayrun min alfi shahr. The key word is khayrun min, better than. It is a comparative of superiority, not an equation, and the early commentators do not treat the verse as an exchange rate. The plain gloss of the mufassirun is that righteous work in this one night is better than righteous work in a thousand months containing no such night.",
            "bn": "97:2 জিজ্ঞেস করে, তুমি কি জান ক্বদরের রাত কী; আর 97:3 ছয়টি শব্দে জবাব দেয়: 'লাইলাতুল ক্বদরি খাইরুম মিন আলফি শাহর'। মূল শব্দ 'খাইরুম মিন' — অর্থাৎ 'চেয়ে উত্তম'। এটি শ্রেষ্ঠত্বের তুলনা, সমীকরণ নয়; আর প্রাচীন মুফাসসিরগণ আয়াতটিকে বিনিময়-হার হিসেবে দেখেন না। তাঁদের সরল ব্যাখ্যা হলো: এই এক রাতের নেক আমল এমন হাজার মাসের নেক আমলের চেয়েও উত্তম, যে হাজার মাসে এমন কোনো রাত নেই।"
          },
          {
            "en": "A number of the commentators add that Arabic uses a thousand for an abundance that is not being counted, so the figure marks superiority rather than a ceiling. That is worth holding onto, because arithmetic is the wrong instrument here. Converting the months into years and then budgeting one's worship against the total turns a gift into a transaction, and the surah is not offering a rate of exchange. It is telling you that some hours are weighted by the One who set the scales.",
            "bn": "কয়েকজন মুফাসসির যোগ করেন, আরবিতে 'হাজার' প্রায়ই এমন প্রাচুর্য বোঝায় যা গোনা হচ্ছে না; ফলে সংখ্যাটি শ্রেষ্ঠত্ব নির্দেশ করে, সর্বোচ্চ সীমা নয়। কথাটি ধরে রাখা দরকার, কারণ এখানে পাটিগণিত ভুল যন্ত্র। মাসগুলোকে বছরে বদলে নিয়ে তারপর সেই মোটের বিপরীতে নিজের ইবাদতের বাজেট কষা একটি উপহারকে লেনদেনে পরিণত করে, অথচ সূরাটি কোনো বিনিময়-হার দিচ্ছে না। এটি জানাচ্ছে, কিছু প্রহরের ওজন বাড়িয়ে দিয়েছেন তিনিই, যিনি দাঁড়িপাল্লা স্থাপন করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sought, Not Scheduled",
          "bn": "খুঁজে নিতে হয়, তারিখ দেওয়া নেই"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim record from Abu Sa'id al-Khudri (RA) that the Prophet ﷺ kept i'tikaf in the first ten nights of Ramadan, then the middle ten, and then addressed the people on the morning of the twentieth saying that he had been shown the Night of Decree and then caused to forget it, that it is in the last ten and on an odd night, and that he had seen himself prostrating in mud and water. It rained that night, and the mud was on his forehead.",
            "bn": "ইমাম বুখারী ও ইমাম মুসলিম আবু সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ রমযানের প্রথম দশ রাত ই'তিকাফ করেন, তারপর মাঝের দশ রাত, এরপর বিশ তারিখ সকালে মানুষের উদ্দেশে বলেন যে তাঁকে ক্বদরের রাত দেখানো হয়েছিল, তারপর তা ভুলিয়ে দেওয়া হয়েছে; সেটি শেষ দশকে, বেজোড় রাতে; আর তিনি নিজেকে দেখেছেন কাদা ও পানিতে সিজদা করতে। সে রাতে বৃষ্টি হয়, আর তাঁর কপালে কাদা লেগে ছিল।"
          },
          {
            "en": "Ash-Shafi'i said of this report that it is the most authentic of what has been narrated on the question. Other sound reports name particular odd nights, and the scholars differ; Ibn Kathir records the view of Abu Qilabah, adopted by Malik, ath-Thawri, Ahmad and others, that the night moves within the last ten from year to year. The uncertainty is doing work. A night with a fixed date could be observed and slept off; a hidden one has to be pursued across ten.",
            "bn": "ইমাম শাফিঈ এই বর্ণনাটি সম্পর্কে বলেন, এ বিষয়ে যা কিছু বর্ণিত হয়েছে তার মধ্যে এটিই সবচেয়ে বিশুদ্ধ। অন্যান্য সহীহ বর্ণনায় নির্দিষ্ট বেজোড় রাতের উল্লেখ আছে, আর আলিমগণ এ নিয়ে মতভেদ করেছেন; ইবনে কাসীর আবু কিলাবার সেই মত উল্লেখ করেন — যা মালিক, সুফিয়ান সাওরী, আহমাদ প্রমুখ গ্রহণ করেছেন — যে রাতটি বছর বদলের সঙ্গে শেষ দশকের ভেতরে সরে যায়। অনিশ্চয়তাটি কাজ করছে। নির্দিষ্ট তারিখের রাত পালন করে ঘুমিয়ে পড়া যায়; লুকানো রাতকে দশ রাত ধরে খুঁজতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Aisha Was Told to Say",
          "bn": "আয়িশা (রাঃ)-কে যা বলতে বলা হলো"
        },
        "p": [
          {
            "en": "At-Tirmidhi records, and graded hasan sahih, that Aisha (RA) asked: O Messenger of Allah, if I know which night is the Night of Decree, what should I say in it? He ﷺ replied: Say, Allahumma innaka afuwwun tuhibbu al-afwa fa'fu anni — O Allah, You are Pardoning, You love to pardon, so pardon me. Notice what she was not given. No list of worldly requests, and no long formula; on the best night of the year, one thing to ask for.",
            "bn": "ইমাম তিরমিযী বর্ণনা করেন এবং হাসান সহীহ বলে মান দেন যে, আয়িশা (রাঃ) জিজ্ঞেস করেছিলেন: হে আল্লাহর রাসূল, আমি যদি জানতে পারি কোন রাতটি ক্বদরের রাত, তবে সে রাতে কী বলব? তিনি ﷺ বললেন: বলো — 'আল্লাহুম্মা ইন্নাকা আফুউউন তুহিব্বুল আফওয়া ফা'ফু আন্নী' — হে আল্লাহ, আপনি ক্ষমাশীল, ক্ষমা করতে ভালোবাসেন, তাই আমাকে ক্ষমা করুন। লক্ষ করুন তাঁকে কী দেওয়া হলো না। দুনিয়াবি চাওয়ার কোনো তালিকা নয়, কোনো দীর্ঘ বাক্যবন্ধও নয়; বছরের সেরা রাতে চাওয়ার জন্য একটিই জিনিস।"
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
            "bn": "97:4 বলে, ফেরেশতাগণ ও রূহ সে রাতে তাদের প্রতিপালকের অনুমতিক্রমে প্রতিটি বিষয় নিয়ে অবতরণ করেন; আর 97:5 শেষ করে: এ রাত শান্তিময়, ফজরের উদয় পর্যন্ত। ইবনে কাসীর ব্যাখ্যা করেন, বরকত প্রচুর বলেই ফেরেশতারা প্রচুর সংখ্যায় নামেন — যেমন তাঁরা নামেন কুরআন তিলাওয়াতের সময় এবং যিকিরের মজলিসগুলো ঘিরে ধরেন। কাতাদাহ ও ইবনে যায়দ শেষের 'সালাম'-এর অর্থ করেন এই যে, গোটা রাতটিই কল্যাণময়, তাতে কোনো অকল্যাণ নেই — ফজর ফোটা পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Night Is Kept",
          "bn": "রাতটি যেভাবে কাটানো হয়"
        },
        "p": [
          {
            "en": "The surah's practical shape is simple and demanding: guard the last ten nights rather than one, and keep the odd ones with particular care. The two Sahihs record from Abu Hurayrah (RA) that the Prophet ﷺ said whoever stands in prayer on the Night of Decree out of faith and seeking reward will be forgiven what has passed of his sins. The two conditions are faith and seeking reward; neither is a quantity of rak'ahs.",
            "bn": "সূরাটির ব্যবহারিক রূপ সহজ, কিন্তু দাবিদার: একটি রাত নয়, শেষ দশ রাতকেই পাহারা দিন, আর বেজোড় রাতগুলোতে বিশেষ যত্ন নিন। সহীহ বুখারী ও সহীহ মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করে যে নবী ﷺ বলেছেন, যে ব্যক্তি ঈমানসহ ও প্রতিদানের আশায় ক্বদরের রাতে দাঁড়ায়, তার পূর্ববর্তী গুনাহ ক্ষমা করে দেওয়া হয়। শর্ত দুটি হলো ঈমান ও প্রতিদানের আশা; কোনোটিই রাকআতের সংখ্যা নয়।"
          },
          {
            "en": "And the du'a taught to Aisha (RA) sets the priority for the night before a person's own worries do. Pardon first, because a record cleared changes everything downstream of it, while a granted request leaves the record where it was. Whatever else is asked for after that is asked for by someone who has already put the most important item at the top of the list, which is exactly what the night was given for.",
            "bn": "আর আয়িশা (রাঃ)-কে শেখানো দোয়াটি রাতটির অগ্রাধিকার ঠিক করে দেয় — নিজের দুশ্চিন্তাগুলো তা ঠিক করার আগেই। আগে ক্ষমা, কারণ আমলনামা পরিষ্কার হয়ে গেলে তার পরের সবকিছু বদলে যায়, অথচ একটি চাওয়া পূরণ হলে আমলনামা যেখানে ছিল সেখানেই থাকে। এরপর আর যা কিছু চাওয়া হয়, তা চায় এমন একজন যে সবচেয়ে গুরুত্বপূর্ণ বিষয়টি ইতিমধ্যেই তালিকার শীর্ষে বসিয়ে দিয়েছে — আর ঠিক এ জন্যই রাতটি দেওয়া হয়েছে।"
          }
        ]
      }
    ]
  }
});
