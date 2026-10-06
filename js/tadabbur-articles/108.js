/**
 * Tadabbur long-form articles — surah 108.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "108:1": {
    "sections": [
      {
        "h": {
          "en": "Three Words That Give",
          "bn": "দান দিয়ে শুরু তিন শব্দ"
        },
        "p": [
          {
            "en": "Inna a'taynaka al-Kawthar: indeed We have given you al-Kawthar. In Arabic the verse is three words, and al-Qurtubi notes that the surah it opens has three verses in all. The one addressed is the Prophet ﷺ. At-Tabari glosses the verse with a vocative: We have given you, O Muhammad, al-Kawthar. The Muyassar inserts O Prophet in the same place. As-Sa'di frames it as Allah speaking to His Prophet Muhammad ﷺ, reminding him of a favour He has done him.",
            "bn": "ইন্না আ'তাইনাকাল কাওসার: নিশ্চয় আমি তোমাকে কাওসার দান করেছি। আরবিতে আয়াতটি তিন শব্দের। কুরতুবী জানান, এ আয়াত দিয়ে যে সূরার শুরু, তাতে আয়াত মোট তিনটি। সম্বোধন নবী ﷺ-এর প্রতি। তাবারী আয়াতের ব্যাখ্যায় সরাসরি ডাক জুড়ে দেন: হে মুহাম্মাদ, আমি তোমাকে কাওসার দিয়েছি। মুয়াসসার একই জায়গায় বসায় 'হে নবী'। সা'দীর ভাষায়, আল্লাহ এখানে তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন, তাঁর প্রতি নিজের অনুগ্রহের কথা মনে করিয়ে দিয়ে।"
          },
          {
            "en": "Al-Qurtubi also records a second way of reading the verb. The general reading is a'taynaka, with the letter 'ayn. Al-Hasan and Talha ibn Musarrif read antaynaka, with a nun, and al-Qurtubi says Umm Salama narrated that reading from the Prophet ﷺ. It is, he explains, a dialect form of the same word for giving: antaytuhu means a'taytuhu. None of the commentaries read here comments on the verb's tense, so this article builds nothing on it.",
            "bn": "ক্রিয়াটির আরেকটি পাঠও কুরতুবী লিপিবদ্ধ করেছেন। সাধারণ পাঠ আ'তাইনাকা, আইন অক্ষর দিয়ে। হাসান আর তালহা ইবন মুসাররিফ পড়েছেন আনতাইনাকা, নূন দিয়ে। কুরতুবী বলেন, এ পাঠ উম্মে সালামা (রাঃ) নবী ﷺ থেকে বর্ণনা করেছেন। তাঁর ব্যাখ্যায় এটা দান করা অর্থের একই শব্দের আঞ্চলিক রূপ: আনতাইতুহু মানে আ'তাইতুহু। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর ক্রিয়াটির কাল নিয়ে আলাদা করে কিছু বলেনি। তাই এই লেখাও তার উপর কোনো সিদ্ধান্ত দাঁড় করায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Built From Plenty",
          "bn": "প্রাচুর্য থেকে গড়া নাম"
        },
        "p": [
          {
            "en": "Al-Qurtubi begins with the word. Kawthar is on the pattern fawʿal from kathra, abundance, like nawfal from nafl and jawhar from jahr. The Arabs, he says, call anything a kawthar that is great in number, in worth or in importance. He reports from Sufyan that an old woman was asked what her son had come home with from a journey, and she answered: with a kawthar, meaning with a great deal of wealth.",
            "bn": "কুরতুবী শুরু করেন শব্দটি দিয়ে। কাওসার শব্দটি ফাওআল ওজনে, কাসরা অর্থাৎ প্রাচুর্য থেকে, যেমন নাফল থেকে নাওফাল আর জাহর থেকে জাওহার। তিনি বলেন, সংখ্যায়, মূল্যে বা মর্যাদায় যা-ই বিপুল, আরবরা তাকে কাওসার বলে। সুফইয়ান থেকে তিনি একটি ঘটনা আনেন। এক বৃদ্ধার ছেলে সফর থেকে ফিরেছে। তাঁকে জিজ্ঞেস করা হলো, ছেলে কী নিয়ে ফিরল? তিনি বললেন, কাওসার নিয়ে। অর্থাৎ অনেক ধনসম্পদ নিয়ে।"
          },
          {
            "en": "Among men, a kawthar is a chief abundant in good; the word also means a large number of companions and followers, and even a great cloud of dust. Al-Baghawi reports the same from the scholars of the language. The abridged English Ibn Kathir says the word comes from kathrah and linguistically means an abundance of goodness. At-Tabari, who holds that it names a river, says Allah described it with abundance because of the greatness of its standing.",
            "bn": "মানুষের মধ্যে কাওসার সেই নেতা, যার কল্যাণ অনেক। শব্দটি দিয়ে বোঝায় সঙ্গী ও অনুসারীদের বড় দলকেও, এমনকি ঘন ধুলোর মেঘকেও। বাগাভী ভাষাবিদদের থেকে একই কথা বর্ণনা করেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, শব্দটি এসেছে কাসরা থেকে, আর ভাষাগত অর্থ কল্যাণের প্রাচুর্য। তাবারীর মতে কাওসার একটি নহরের নাম। তিনি বলেন, এর মর্যাদা বিশাল বলেই আল্লাহ একে প্রাচুর্যের গুণে বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Said a River",
          "bn": "যাঁরা বললেন, একটি নহর"
        },
        "p": [
          {
            "en": "At-Tabari opens plainly: the interpreters differed over the meaning of al-Kawthar. Some said it is a river in Paradise that Allah gave His Prophet Muhammad ﷺ. Under this view he lists reports from Ibn 'Umar; from Ibn 'Abbas, by way of Sa'id ibn Jubayr and by a second chain; from 'A'isha; from Anas; from Mujahid; and from Abu al-'Aliya. Ibn Kathir adds that the same is reported from Anas, Abu al-'Aliya, Mujahid and more than one of the early generations.",
            "bn": "তাবারী মতভেদটা সোজাসুজি সামনে আনেন: কাওসারের অর্থ নিয়ে তাফসীরবিদদের মধ্যে মতভেদ হয়েছে। কেউ বলেছেন, এটি জান্নাতের একটি নহর, যা আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে দিয়েছেন। এ মতের পক্ষে তিনি বর্ণনা আনেন ইবন উমর (রাঃ) থেকে, ইবন আব্বাস (রাঃ) থেকে সাঈদ ইবন জুবাইরের সূত্রে এবং আরেকটি সূত্রে, আয়েশা (রাঃ) থেকে, আনাস (রাঃ) থেকে, মুজাহিদ থেকে আর আবুল আলিয়া থেকে। ইবন কাসীর যোগ করেন, আনাস (রাঃ), আবুল আলিয়া, মুজাহিদ এবং পূর্বসূরিদের আরও অনেকের থেকে একই কথা বর্ণিত।"
          },
          {
            "en": "The descriptions are the narrators' own, and this article keeps to them. In at-Tabari's report from Ibn 'Umar, its banks are of gold and silver, it runs over pearls and rubies, and its water is whiter than milk and sweeter than honey. In 'A'isha's words as he gives them, it lies in the middle of Paradise, its banks are palaces of pearl and ruby, and its soil is musk. Mujahid's report gives its soil as fragrant musk. Al-Baghawi calls the river view the well-known view.",
            "bn": "বর্ণনাগুলো বর্ণনাকারীদের নিজেদের ভাষা, আর এই লেখা সে ভাষার বাইরে যায় না। তাবারীর আনা ইবন উমর (রাঃ)-এর বর্ণনায় এর দুই তীর সোনা ও রুপার, এটি বয়ে চলে মুক্তা আর ইয়াকুতের উপর দিয়ে, পানি দুধের চেয়ে সাদা আর মধুর চেয়ে মিষ্টি। তাবারীর উদ্ধৃত আয়েশা (রাঃ)-এর কথায়, এটি জান্নাতের মাঝখানে। দুই তীরে মুক্তা ও ইয়াকুতের প্রাসাদ, মাটি মিশকের। মুজাহিদের বর্ণনায় এর মাটি সুগন্ধি মিশক। বাগাভী নহরের মতটিকে বলেন সুপরিচিত মত।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Said All the Good",
          "bn": "যাঁরা বললেন, সমস্ত কল্যাণ"
        },
        "p": [
          {
            "en": "Others, at-Tabari continues, said al-Kawthar means abundant good. Here he names Ibn 'Abbas, by way of Sa'id ibn Jubayr; Sa'id himself; 'Ikrima; Mujahid; and Qatada. Their wordings vary. 'Ikrima is reported once as saying prophethood and the good Allah gave him, once as abundant good, the Qur'an and wisdom, and once as the good of prophethood and Islam. Mujahid is reported as saying all good, and also as saying the good of this world and the next.",
            "bn": "তাবারী আরও বলেন, অন্যরা বলেছেন কাওসার মানে অফুরন্ত কল্যাণ। এখানে তিনি নাম নেন সাঈদ ইবন জুবাইরের সূত্রে ইবন আব্বাস (রাঃ)-এর, সাঈদের নিজের, ইকরিমার, মুজাহিদের আর কাতাদার। তাঁদের ভাষা এক নয়। ইকরিমা থেকে একবার বর্ণিত: নবুওয়াত আর আল্লাহ তাঁকে যে কল্যাণ দিয়েছেন। আরেকবার: অফুরন্ত কল্যাণ, কুরআন ও হিকমত। আরেকবার: নবুওয়াত ও ইসলামের কল্যাণ। মুজাহিদ থেকে বর্ণিত: সব কল্যাণ। আবার তাঁর কথায়: দুনিয়া ও আখিরাতের কল্যাণ।"
          },
          {
            "en": "The two shortest commentaries here take this second line and fold the river into it. The Muyassar reads: We have given you, O Prophet, abundant good in this world and the next, and among it the river of al-Kawthar in Paradise, whose banks are tents of hollow pearl and whose clay is musk. As-Sa'di reads abundant good and plentiful favour, and counts within it the river called al-Kawthar that Allah gives His Prophet ﷺ on the Day of Resurrection, together with the pool.",
            "bn": "এখানকার সবচেয়ে সংক্ষিপ্ত দুটি তাফসীর এই দ্বিতীয় মতটিই নেয়, আর নহরকে তার ভেতরে রাখে। মুয়াসসারের ভাষ্য: হে নবী, আমি তোমাকে দুনিয়া ও আখিরাতের অফুরন্ত কল্যাণ দিয়েছি। তার মধ্যে আছে জান্নাতের কাওসার নহর, যার দুই তীরে ফাঁপা মুক্তার তাঁবু, আর যার কাদা মিশকের। সা'দী বলেন অফুরন্ত কল্যাণ আর প্রচুর অনুগ্রহের কথা। তার মধ্যেই তিনি গণনা করেন কাওসার নামের নহর, যা কিয়ামতের দিন আল্লাহ তাঁর নবী ﷺ-কে দেবেন, আর সেই সঙ্গে হাওয।"
          },
          {
            "en": "Al-Qurtubi widens the list to sixteen sayings. Beside the river and the pool, he records prophethood and the Book, from 'Ikrima; the Qur'an, from al-Hasan; Islam; the easing of the Qur'an and the lightening of the laws; the great number of companions and followers, from Abu Bakr ibn 'Ayyash and Yaman ibn Ri'ab; preferring others over oneself; the raising of his mention, which he relays from al-Mawardi; intercession; the testimony of faith; understanding of the religion; and the five prayers.",
            "bn": "কুরতুবী তালিকাটা বাড়িয়ে ষোলোটি মতে নিয়ে যান। নহর আর হাওযের পাশাপাশি তিনি লিপিবদ্ধ করেন: ইকরিমা থেকে নবুওয়াত ও কিতাব, হাসান থেকে কুরআন, ইসলাম, কুরআনকে সহজ করা ও শরীয়তের বিধান হালকা করা, আবু বাকর ইবন আইয়াশ ও ইয়ামান ইবন রিআব থেকে সাহাবি, উম্মত ও অনুসারীর আধিক্য। আরও আছে নিজের উপর অন্যকে প্রাধান্য দেওয়া, মাওয়ার্দীর সূত্রে তাঁর আলোচনাকে উঁচু করা, শাফাআত, কালিমায়ে তাওহীদ, দ্বীনের গভীর বোঝাপড়া আর পাঁচ ওয়াক্ত নামায।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Put to Sa'id",
          "bn": "সাঈদের কাছে এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Where the two views meet is preserved in a short exchange. Ibn Kathir and al-Baghawi cite it from al-Bukhari's Sahih, number 4966. In the English of the quranx page: Narrated Abu Bishr: Sa`id bin Jubair said that Ibn `Abbas said about Al-Kauthar. \"That is the good which Allah has bestowed upon His Apostle.\" I said to Sa`id bin Jubair. \"But the people claim that it is a river in Paradise.\" Sa`id said, \"The river in Paradise is part of the good which Allah has bestowed on His Apostle.\"",
            "bn": "দুই মত কোথায় এসে মেলে, তা ধরা আছে ছোট্ট এক কথোপকথনে। ইবন কাসীর ও বাগাভী এটি বুখারীর সহীহ থেকে উদ্ধৃত করেন, নম্বর ৪৯৬৬। কুরানএক্স পাতার ইংরেজির অনুবাদ: আবু বিশর বর্ণনা করেন, সাঈদ ইবন জুবাইর বলেছেন যে ইবন আব্বাস (রাঃ) কাওসার সম্পর্কে বলেছেন: \"এটা সেই কল্যাণ, যা আল্লাহ তাঁর রাসূলকে দান করেছেন।\" আমি সাঈদ ইবন জুবাইরকে বললাম: \"কিন্তু লোকেরা বলে, এটা জান্নাতের একটি নহর।\" সাঈদ বললেন: \"জান্নাতের নহরটি সেই কল্যাণেরই অংশ, যা আল্লাহ তাঁর রাসূলকে দান করেছেন।\""
          },
          {
            "en": "So the words that join the two views belong to Sa'id ibn Jubayr, given in answer while he was reporting Ibn 'Abbas. At-Tabari has a second exchange with him. Hilal asked about the verse, and Sa'id said Allah gave him abundance of good; Hilal asked whether it was a river in Paradise, and Sa'id answered: a river, and more besides. Ibn Kathir adds that it is soundly reported from Ibn 'Abbas that he also explained al-Kawthar as the river, and gives the chain at-Tabari records for it.",
            "bn": "তাহলে দুই মতকে জোড়া দেওয়ার কথাটি সাঈদ ইবন জুবাইরের। ইবন আব্বাস (রাঃ)-এর কথা বর্ণনা করতে গিয়ে প্রশ্নের জবাবে তিনি তা বলেছেন। তাবারীতে তাঁর সঙ্গে আরেকটি কথোপকথন আছে। হিলাল আয়াতটি সম্পর্কে জিজ্ঞেস করলে সাঈদ বললেন, আল্লাহ তাঁকে প্রচুর কল্যাণ দিয়েছেন। হিলাল জানতে চাইলেন, এটা কি জান্নাতের একটি নহর? সাঈদের জবাব: নহরও, তার বাইরেও আরও। ইবন কাসীর যোগ করেন, ইবন আব্বাস (রাঃ) থেকে সহীহভাবে প্রমাণিত যে তিনিও কাওসারকে নহর বলে ব্যাখ্যা করেছেন। এর জন্য তাবারীর লিপিবদ্ধ সূত্রটিও তিনি উল্লেখ করেন।"
          },
          {
            "en": "The other side answered in the same spirit. At-Tabari and Ibn Kathir both record that Muharib ibn Dithar asked 'Ata' ibn as-Sa'ib what Sa'id ibn Jubayr said about al-Kawthar. Told that Sa'id reported Ibn 'Abbas as saying abundant good, Muharib replied: he spoke the truth, by Allah, it is abundant good. But Ibn 'Umar told us, he went on, that when the verse came down the Prophet ﷺ said al-Kawthar is a river in Paradise, its banks of gold, running over pearls and rubies.",
            "bn": "অপর পক্ষও জবাব দিয়েছে একই মেজাজে। তাবারী ও ইবন কাসীর দুজনেই লিপিবদ্ধ করেন, মুহারিব ইবন দিসার আতা ইবনুস সাইবকে জিজ্ঞেস করলেন, কাওসার সম্পর্কে সাঈদ ইবন জুবাইর কী বলেন? আতা জানালেন, সাঈদ ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন যে এর অর্থ অফুরন্ত কল্যাণ। মুহারিব বললেন: আল্লাহর কসম, তিনি সত্য বলেছেন, এটা অফুরন্ত কল্যাণই। তবে ইবন উমর (রাঃ) আমাদের বলেছেন, আয়াতটি নাযিল হলে নবী ﷺ বললেন, কাওসার জান্নাতের একটি নহর, যার দুই তীর সোনার, আর তা বয়ে চলে মুক্তা ও ইয়াকুতের উপর দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Each Commentator Weighs It",
          "bn": "কে কোন পাল্লায় মাপেন"
        },
        "p": [
          {
            "en": "At-Tabari records a third group too: 'Ata' said al-Kawthar is a pool given to the Prophet ﷺ in Paradise. Then he states his own view. The most correct of these sayings to him is that it is the name of the river given to the Prophet ﷺ in Paradise, which Allah described with abundance because of the greatness of its standing. His reason is that the reports from the Prophet ﷺ follow one after another saying so, and he then lists them, most of them from Anas.",
            "bn": "তাবারী তৃতীয় একটি দলের কথাও লিপিবদ্ধ করেন: আতা বলেছেন, কাওসার একটি হাওয, যা জান্নাতে নবী ﷺ-কে দেওয়া হয়েছে। এরপর তিনি নিজের মত জানান। তাঁর কাছে সবচেয়ে সঠিক কথা হলো, কাওসার সেই নহরের নাম, যা জান্নাতে নবী ﷺ-কে দেওয়া হয়েছে। এর মর্যাদা বিশাল বলে আল্লাহ একে প্রাচুর্যের গুণে বর্ণনা করেছেন। কারণ হিসেবে তিনি বলেন, নবী ﷺ থেকে একের পর এক বর্ণনা এ কথাই বলে। তারপর তিনি সেই বর্ণনাগুলো সাজিয়ে দেন, যার বেশির ভাগ আনাস (রাঃ) থেকে।"
          },
          {
            "en": "Ibn Kathir weighs it the other way. After citing Ibn 'Abbas's abundant good, he says this explanation takes in the river and other things as well, because al-Kawthar comes from kathra and is abundant good, and the river is part of it. He names Ibn 'Abbas, 'Ikrima, Sa'id ibn Jubayr, Mujahid, Muharib ibn Dithar and al-Hasan al-Basri for this line. He ends the verse with 'Ata''s saying that it is a pool in Paradise.",
            "bn": "ইবন কাসীর মাপেন উল্টো দিক থেকে। ইবন আব্বাস (রাঃ)-এর অফুরন্ত কল্যাণের ব্যাখ্যা উদ্ধৃত করে তিনি বলেন, এ ব্যাখ্যা নহরকেও ধরে, তার বাইরের জিনিসকেও। কারণ কাওসার এসেছে কাসরা থেকে, এর মানে অফুরন্ত কল্যাণ, আর নহর তারই অংশ। এ মতের পক্ষে তিনি নাম নেন ইবন আব্বাস (রাঃ), ইকরিমা, সাঈদ ইবন জুবাইর, মুজাহিদ, মুহারিব ইবন দিসার আর হাসান বসরীর। আয়াতের আলোচনা তিনি শেষ করেন আতার এ কথায় যে, এটি জান্নাতের একটি হাওয।"
          },
          {
            "en": "Al-Qurtubi judges that the soundest of his sixteen sayings are the first two, the river and the pool, because each is established from the Prophet ﷺ as a text on al-Kawthar. Everything else said about it, he adds, was given to the Prophet ﷺ in addition to his pool. Ma'arif al-Qur'an reads the river and the abundant good together, and places the river itself in Paradise and the fountain on the Plain of Gathering. This article sets the readings side by side and chooses none.",
            "bn": "কুরতুবীর রায়: তাঁর ষোলোটি মতের মধ্যে সবচেয়ে বিশুদ্ধ প্রথম দুটি, নহর আর হাওয। কারণ দুটিই কাওসার সম্পর্কে নবী ﷺ থেকে স্পষ্ট বক্তব্য হিসেবে প্রমাণিত। তিনি যোগ করেন, এর বাইরে কাওসারের ব্যাখ্যায় যা কিছু বলা হয়েছে, সবই নবী ﷺ-কে তাঁর হাওযের অতিরিক্ত হিসেবে দেওয়া হয়েছে। মাআরিফুল কুরআন নহর আর অফুরন্ত কল্যাণকে একসঙ্গে পড়ে। তার বর্ণনায় আসল নহরটি জান্নাতে, আর হাওযটি হাশরের ময়দানে। এই লেখা মতগুলো পাশাপাশি রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Given in Full",
          "bn": "পূর্ণরূপে উদ্ধৃত বর্ণনা"
        },
        "p": [
          {
            "en": "Ibn Kathir quotes al-Bukhari's wording of Anas's report from the ascension, and at-Tabari gives it by the same chain. In the quranx English of Sahih al-Bukhari 4964: Narrated Anas: When the Prophet (ﷺ) was made to ascend to the Heavens, he said (after his return), \"I came upon a river the banks of which were made of tents of hollow pearls. I asked Gabriel. What is this (river?) He replied, 'This is the Kauthar.'",
            "bn": "মি'রাজের ঘটনায় আনাস (রাঃ)-এর বর্ণনাটি ইবন কাসীর উদ্ধৃত করেন বুখারীর ভাষায়, আর তাবারী আনেন একই সূত্রে। সহীহ বুখারী ৪৯৬৪-এর কুরানএক্স ইংরেজির অনুবাদ: আনাস (রাঃ) বর্ণনা করেন, নবী ﷺ-কে যখন আসমানে আরোহণ করানো হলো, (ফিরে এসে) তিনি বললেন: \"আমি এমন এক নহরের কাছে এলাম, যার দুই তীর ফাঁপা মুক্তার তাঁবু দিয়ে তৈরি। আমি জিবরীলকে জিজ্ঞেস করলাম, এটা (কোন নহর)? তিনি জবাব দিলেন, 'এটাই কাওসার।'\""
          },
          {
            "en": "Ibn Kathir also cites 'A'isha's explanation from al-Bukhari's Sahih. It is her own word on the verse, not a saying she attributes to the Prophet ﷺ. In the quranx English of Sahih al-Bukhari 4965: Narrated Abu Ubaida: I asked `Aisha 'regarding the verse:--'Verily we have granted you the Kauthar.' She replied, \"The Kauthar is a river which has been given to your Prophet on the banks of which there are (tents of) hollow pearls and its utensils are as numberless as the stars.\"",
            "bn": "ইবন কাসীর বুখারীর সহীহ থেকে আয়েশা (রাঃ)-এর ব্যাখ্যাও আনেন। এটা আয়াত সম্পর্কে তাঁর নিজের কথা, নবী ﷺ-এর বাণী হিসেবে তিনি এটি বর্ণনা করেননি। সহীহ বুখারী ৪৯৬৫-এর কুরানএক্স ইংরেজির অনুবাদ: আবু উবাইদা বর্ণনা করেন, আমি আয়েশা (রাঃ)-কে 'নিশ্চয় আমি তোমাকে কাওসার দান করেছি' আয়াত সম্পর্কে জিজ্ঞেস করলাম। তিনি বললেন: \"কাওসার একটি নহর, যা তোমাদের নবীকে দেওয়া হয়েছে। এর দুই তীরে আছে ফাঁপা মুক্তার (তাঁবু), আর এর পাত্র আকাশের তারার মতো অগণিত।\""
          },
          {
            "en": "Ibn Kathir and al-Qurtubi both cite Ibn 'Umar's report as the Prophet's ﷺ own saying, and both note that at-Tirmidhi graded it hasan sahih; the Arabic on the quranx page carries that grading. In the page's English of Jami' at-Tirmidhi 3361: `Abdullah bin `Umar narrated that : the Messenger of Allah said: \"Al-Kauthar is a river in Paradise, whose banks are of gold, and it flows over pearls and corundum. Its dirt is purer than musk, and its water is sweeter than honey and whiter than milk.\"",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই ইবন উমর (রাঃ)-এর বর্ণনাটি নবী ﷺ-এর নিজের বাণী হিসেবে উদ্ধৃত করেন। দুজনেই জানান, তিরমিযী একে হাসান সহীহ বলেছেন। কুরানএক্স পাতার আরবিতেও সেই মান লেখা আছে। জামে তিরমিযী ৩৩৬১-এর পাতার ইংরেজির অনুবাদ: আবদুল্লাহ ইবন উমর (রাঃ) বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: \"কাওসার জান্নাতের একটি নহর। এর দুই তীর সোনার, আর তা বয়ে চলে মুক্তা ও ইয়াকুতের উপর দিয়ে। এর মাটি মিশকের চেয়েও পবিত্র, আর এর পানি মধুর চেয়ে মিষ্টি, দুধের চেয়ে সাদা।\""
          },
          {
            "en": "One report is left unquoted here. Ibn Kathir, al-Qurtubi, al-Baghawi and Ma'arif al-Qur'an all cite a narration in Sahih Muslim from Anas, in which the Prophet ﷺ dozed briefly among his companions, raised his head smiling, and told them a surah had just been revealed to him. Its English on the quranx page is too long to quote whole here, and it is not quoted in part. Ibn Kathir notes that many reciters took it as evidence that the surah is Madinan, and many jurists that the basmala belongs to the surah.",
            "bn": "একটি বর্ণনা এখানে উদ্ধৃত হয়নি। ইবন কাসীর, কুরতুবী, বাগাভী আর মাআরিফুল কুরআন সবাই সহীহ মুসলিম থেকে আনাস (রাঃ)-এর একটি বর্ণনা আনেন। তাতে নবী ﷺ সাহাবিদের মাঝে অল্প সময়ের জন্য তন্দ্রাচ্ছন্ন হন, তারপর হাসিমুখে মাথা তুলে জানান, এইমাত্র তাঁর উপর একটি সূরা নাযিল হয়েছে। কুরানএক্স পাতায় এর ইংরেজি এত দীর্ঘ যে এখানকার একটি অনুচ্ছেদে পুরোটা ধরে না, আর আংশিক উদ্ধৃতি এখানে দেওয়া হয় না। ইবন কাসীর জানান, অনেক কারী একে সূরাটি মাদানী হওয়ার দলিল হিসেবে নিয়েছেন, আর অনেক ফকীহ দলিল নিয়েছেন যে বিসমিল্লাহ সূরারই অংশ।"
          },
          {
            "en": "Ibn Kathir also marks what is weak. A report through Haram ibn 'Uthman, in which a woman congratulates the Prophet ﷺ on being given a river called al-Kawthar, he calls weak on account of that narrator, while adding that the root of the matter is sound, and indeed mass-transmitted according to many hadith scholars, as are the reports of the pool.",
            "bn": "দুর্বল বর্ণনাকেও ইবন কাসীর চিহ্নিত করে দেন। হারাম ইবন উসমানের সূত্রে একটি বর্ণনায় এক নারী নবী ﷺ-কে কাওসার নামের নহর পাওয়ার জন্য অভিনন্দন জানান। ওই বর্ণনাকারীর কারণে তিনি একে দুর্বল বলেন। তবে সঙ্গে যোগ করেন, মূল বিষয়টি সহীহ, বরং অনেক হাদীস-ইমামের কাছে তা মুতাওয়াতির, হাওযের হাদীসগুলোর মতোই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Surah Stands",
          "bn": "সূরাটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "They differ even on where the surah came down. Al-Qurtubi calls it Makkan on the word of Ibn 'Abbas, al-Kalbi and Muqatil, and al-Baghawi calls it Makkan; Ibn Kathir calls it Madinan, adding that it is also said to be Makkan. The reports on its occasion differ as well, and they concern the taunt answered in 108:3. Ibn Kathir's abridgement and Ma'arif al-Qur'an name al-'As ibn Wa'il, 'Uqba ibn Abi Mu'ayt, Ka'b ibn al-Ashraf with a group of Quraysh, and Abu Lahab. This article settles none of them.",
            "bn": "সূরাটি কোথায় নাযিল হয়েছে, তা নিয়েও তাফসীরকারদের মতভেদ আছে। কুরতুবী ইবন আব্বাস (রাঃ), কালবী ও মুকাতিলের কথার ভিত্তিতে একে মাক্কী বলেন, বাগাভীও বলেন মাক্কী। ইবন কাসীর বলেন মাদানী, সঙ্গে যোগ করেন যে মাক্কী বলেও মত আছে। নাযিলের প্রেক্ষাপট নিয়েও বর্ণনা ভিন্ন ভিন্ন, আর সেগুলো ১০৮:৩ আয়াতে জবাব দেওয়া এক বিদ্রূপকে ঘিরে। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আর মাআরিফুল কুরআন নাম নেয় আস ইবন ওয়াইল, উকবা ইবন আবী মুআইত, কুরাইশের একদল লোকসহ কা'ব ইবন আশরাফ এবং আবু লাহাবের। এই লেখা এর কোনোটির পক্ষে রায় দেয় না।"
          },
          {
            "en": "Those reports concern particular men of that time, and 108:3 has its own entry. What the verses say about the Prophet's opponents describes what the text describes and licenses nothing against any living person or community. The rest of the surah is named here only as context: 108:2, so pray to your Lord and sacrifice, which the abridged Ibn Kathir reads as: just as We have given you abundant good, make your prayer and your sacrifice for your Lord alone; and 108:3, which calls the Prophet's enemy al-abtar, the cut off.",
            "bn": "ওই বর্ণনাগুলো সে যুগের নির্দিষ্ট কিছু মানুষের কথা বলে, আর ১০৮:৩ আয়াতের আলাদা আলোচনা আছে। নবী ﷺ-এর বিরোধীদের সম্পর্কে আয়াতগুলো যা বলে, তা কেবল পাঠে যা আছে তারই বর্ণনা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে তা কোনো কিছুর অনুমতি দেয় না। সূরার বাকি অংশ এখানে শুধু প্রসঙ্গ হিসেবে উল্লেখ করা হলো। ১০৮:২: কাজেই তোমার রবের উদ্দেশ্যে নামায পড়ো আর কুরবানী করো। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ এর অর্থ করে: যেমন আমি তোমাকে অফুরন্ত কল্যাণ দিয়েছি, তেমনি তোমার নামায আর কুরবানী কেবল তোমার রবের জন্য করো। আর ১০৮:৩, যা নবী ﷺ-এর শত্রুকে বলে আল-আবতার, শিকড়কাটা।"
          }
        ]
      }
    ]
  }
});
