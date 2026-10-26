/**
 * Tadabbur long-form articles — surah 95.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "95:4": {
    "sections": [
      {
        "h": {
          "en": "What Four Oaths Were For",
          "bn": "চারটি শপথ যে কথার জন্য"
        },
        "p": [
          {
            "en": "Laqad khalaqna-l-insana fi ahsani taqwim: We have certainly created the human being in the best of shapings. Six Arabic words, and they are what the opening of Surah at-Tin has been building toward. The surah swears by the fig and the olive in 95:1, by Mount Sinin in 95:2 and by this secure city in 95:3, and only then says what the oaths were sworn upon. Ma'arif al-Qur'an counts four oaths, the fig, the olive, the mountain and the city, and calls this verse their single subject.",
            "bn": "লাকাদ খালাকনাল ইনসানা ফী আহসানি তাকবীম: আমি মানুষকে সৃষ্টি করেছি সবচেয়ে সুন্দর গড়নে। আরবিতে মোট ছয়টি শব্দ, আর সূরা তীনের শুরুটা এগোচ্ছিল এ কথার দিকেই। ৯৫:১ আয়াতে শপথ তীন ও যায়তূনের, ৯৫:২ আয়াতে তূরে সীনীনের, ৯৫:৩ আয়াতে এই নিরাপদ নগরীর। এরপরই জানানো হয়, শপথগুলো কোন কথার ওপর। মাআরিফুল কুরআন এখানে চারটি শপথ গোনে: তীন, যায়তূন, পাহাড় আর নগরী। তার ভাষায়, চারটিরই বিষয় এই একটি আয়াত।"
          },
          {
            "en": "At-Tabari names the verse in the grammarians' term: this is the answer of the oath, jawab al-qasam, so the sentence runs, by the fig and the olive, We created the human being in the best shaping. He supports it with a report from Qatadah: the oath falls here. Ibn Kathir, al-Baghawi and as-Sa'di use the other standard term, al-muqsam 'alayh, the thing sworn upon. The oaths are the preparation, and the verse that follows them carries their weight; the rest of the surah, down to the closing question in 95:8, unfolds from it.",
            "bn": "তাবারী ব্যাকরণের পরিভাষায় আয়াতটির পরিচয় দেন: এটি জাওয়াবুল কাসাম, অর্থাৎ শপথের জবাব। তাহলে বাক্যটা দাঁড়ায় এমন: তীন ও যায়তূনের শপথ, আমি মানুষকে সৃষ্টি করেছি সেরা গড়নে। নিজের কথার পক্ষে তিনি কাতাদার একটি বর্ণনা আনেন: শপথ এসে পড়েছে এখানেই। ইবন কাসীর, বাগাভী ও সা'দী ব্যবহার করেন আরেকটি প্রচলিত পরিভাষা, আল-মুকসাম আলাইহি, যে কথার ওপর শপথ করা হয়েছে। শপথগুলো ভূমিকা মাত্র, তাদের ভার বহন করে এই আয়াত। সূরার বাকি অংশ, ৯৫:৮ আয়াতের শেষ প্রশ্ন পর্যন্ত, এখান থেকেই খুলতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fruits, Mosques and Messengers",
          "bn": "ফল, মসজিদ, নাকি নবীদের দেশ"
        },
        "p": [
          {
            "en": "On the fig, Ibn Kathir reports al-'Awfi's narration from Ibn 'Abbas that at-tin is the mosque of Nuh (AS), built upon Mount al-Judi, while Mujahid said: it is this fig that you have. On the olive he reports Ka'b al-Ahbar, Qatadah and Ibn Zayd: it is the mosque of Jerusalem, Bayt al-Maqdis; Mujahid and 'Ikrimah said: it is this olive which you press. The Muyassar takes the plain route and calls them two well-known fruits. Both kinds of reading stand in the record, and the verse is not made to choose.",
            "bn": "তীন প্রসঙ্গে ইবন কাসীর আওফীর সূত্রে ইবন আব্বাস (রাঃ)-এর মত আনেন: তীন হলো নূহ (আঃ)-এর মসজিদ, যা জূদী পাহাড়ের ওপর বানানো হয়েছিল। মুজাহিদ বলেন, এ তো তোমাদের চেনা এই ডুমুরই। যায়তূন প্রসঙ্গে তিনি কা'ব আল-আহবার, কাতাদা ও ইবন যায়দের কথা আনেন: এটি বায়তুল মাকদিসের মসজিদ। মুজাহিদ ও ইকরিমা বলেন, এ সেই জলপাই, যা তোমরা পিষে তেল বের করো। মুয়াসসার সোজা পথে হাঁটে: দুটিই সুপরিচিত ফল। দুই ধরনের ব্যাখ্যাই তাফসীরের ভাণ্ডারে আছে। আয়াতকে এর কোনো একটি বেছে নিতে বাধ্য করা হয় না।"
          },
          {
            "en": "The other two oaths are settled. Ka'b al-Ahbar and others say Tur Sinin is the mountain on which Allah spoke to Musa (AS), and the Muyassar says the same. This secure city is Makkah: Ibn Kathir lists Ibn 'Abbas, Mujahid, 'Ikrimah, al-Hasan, Ibrahim an-Nakha'i, Ibn Zayd and Ka'b al-Ahbar for it, then adds that there is no difference of opinion about it. The Muyassar glosses al-amin as secure from every fear, and calls Makkah the place where Islam came down.",
            "bn": "বাকি দুই শপথ নিয়ে মতভেদ নেই। কা'ব আল-আহবারসহ অনেকে বলেন, তূরে সীনীন সেই পাহাড়, যেখানে আল্লাহ মূসা (আঃ)-এর সঙ্গে কথা বলেছিলেন। মুয়াসসারও তা-ই বলে। এই নিরাপদ নগরী হলো মক্কা। ইবন কাসীর এ মতের পক্ষে নাম গোনান ইবন আব্বাস (রাঃ), মুজাহিদ, ইকরিমা, হাসান, ইবরাহীম নাখঈ, ইবন যায়দ ও কা'ব আল-আহবারের। তারপর যোগ করেন, এ নিয়ে কোনো মতভেদ নেই। মুয়াসসার আল-আমীন শব্দের অর্থ করে সব ভয় থেকে নিরাপদ, আর মক্কাকে বলে ইসলামের অবতরণস্থল।"
          },
          {
            "en": "Ibn Kathir then reports a reading from some of the imams that binds the oaths together. On this view they name three places, to each of which Allah sent a leading messenger with a great law: the land of the fig and the olive, Jerusalem, where 'Isa ibn Maryam (AS) was sent; Mount Sinai, where Allah spoke to Musa (AS); and Makkah, where Muhammad ﷺ was sent. Its holders cite a passage at the end of the Torah naming the three, and read the order as rising from a noble place to a nobler, then to the noblest of them.",
            "bn": "এরপর ইবন কাসীর কয়েকজন ইমামের এমন একটি ব্যাখ্যা উল্লেখ করেন, যা শপথগুলোকে এক সুতোয় গেঁথে দেয়। তাঁদের মতে এখানে তিনটি স্থানের কথা, আর প্রতিটিতে আল্লাহ পাঠিয়েছেন একজন শীর্ষস্থানীয় রাসূল, বড় শরীয়ত দিয়ে। তীন ও যায়তূনের দেশ বায়তুল মাকদিস, যেখানে পাঠানো হয় ঈসা ইবন মারইয়াম (আঃ)-কে। তূরে সীনা, যেখানে আল্লাহ মূসা (আঃ)-এর সঙ্গে কথা বলেন। আর মক্কা, যেখানে পাঠানো হয় মুহাম্মাদ ﷺ-কে। এ মতের লোকেরা তাওরাতের শেষাংশের একটি অনুচ্ছেদ দেখান, যেখানে তিনটি জায়গার নাম আছে। ক্রমটিকে তাঁরা পড়েন ধাপে ধাপে ওঠা হিসেবে: সম্মানিত স্থান, তারপর আরও সম্মানিত, তারপর সবচেয়ে সম্মানিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Glosses on Taqwim",
          "bn": "তাকবীমের তিন ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Taqwim, Ma'arif al-Qur'an explains, means setting a thing aright, laying its foundation straight, or forming it into a fitting shape in balanced measure. At-Tabari reports that the early interpreters differed over what this best shaping is, and he records three groups. The first says: the most balanced creation and the best form. Ibn 'Abbas, through Abu Razin, said: in the most balanced creation. Ibrahim an-Nakha'i, Abu al-'Aliyah, Mujahid, Qatadah and al-Kalbi said: in the best form, and Mujahid in other chains: the best creation.",
            "bn": "মাআরিফুল কুরআনের ব্যাখ্যায় তাকবীম মানে কোনো কিছুকে ঠিকঠাক করা, তার ভিত সোজা করে গাঁথা, কিংবা পরিমিত মাপে উপযুক্ত আকৃতি দেওয়া। তাবারী জানান, এই সেরা গড়ন আসলে কী, তা নিয়ে প্রথম যুগের ব্যাখ্যাকারদের মধ্যে মতভেদ ছিল। তিনি তিনটি দলের কথা লেখেন। প্রথম দল বলে: সবচেয়ে ভারসাম্যপূর্ণ সৃষ্টি আর সবচেয়ে সুন্দর চেহারা। আবূ রাযীনের সূত্রে ইবন আব্বাস (রাঃ) বলেন, সবচেয়ে ভারসাম্যপূর্ণ সৃষ্টিতে। ইবরাহীম নাখঈ, আবুল আলিয়া, মুজাহিদ, কাতাদা ও কালবী বলেন, সবচেয়ে সুন্দর চেহারায়। অন্য সূত্রে মুজাহিদের কথা: সবচেয়ে সুন্দর সৃষ্টি।"
          },
          {
            "en": "The second group ties the phrase to a stage of life. In their reading Allah created the human being and brought him to the full evenness of his youth, his hardiness and his strength, the best and most balanced state he will ever be in. 'Ikrimah said: the strong, hardy young man. A report from Ibn 'Abbas says: his youth, when he first grows. The third group points to posture. Ibn 'Abbas, through 'Ikrimah, said that Allah created every creature bent over on its face, except the human being.",
            "bn": "দ্বিতীয় দল কথাটিকে জীবনের একটি পর্বের সঙ্গে জুড়ে দেয়। তাদের ব্যাখ্যায়, আল্লাহ মানুষকে সৃষ্টি করে তাকে পৌঁছে দিয়েছেন পূর্ণ যৌবনে, যখন তার শরীর মজবুত আর শক্তি টগবগে। এর চেয়ে সুন্দর ও সুষম অবস্থা তার জীবনে আর আসে না। ইকরিমা বলেন: শক্তিশালী, পোক্ত যুবক। ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনায় আছে: বেড়ে ওঠার শুরুর দিকের যৌবন। তৃতীয় দল তাকায় দেহের ভঙ্গির দিকে। ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) বলেন, আল্লাহ সব প্রাণীকে মুখ নিচু করে ঝুঁকে থাকা অবস্থায় সৃষ্টি করেছেন, মানুষ ছাড়া।"
          },
          {
            "en": "At-Tabari's own preference is the first: the best and most balanced form. His reason is grammatical. Ahsani taqwim describes a noun that has been left unsaid, so the full thought is in a shaping, the best of shapings, as if the verse said: We created him in a shaping that is the best shaping. He calls this the most correct of the views, in his usual formula. The youth and the upright posture remain in his record as what their narrators said, each with its chain.",
            "bn": "তাবারী নিজে প্রথম মতটিকেই অগ্রাধিকার দেন: সবচেয়ে সুন্দর ও ভারসাম্যপূর্ণ আকৃতি। তাঁর যুক্তি ব্যাকরণের। আহসানি তাকবীম এমন এক বিশেষ্যের গুণ বলছে, যা বাক্যে উহ্য রাখা হয়েছে। পুরো কথাটা তাই এরকম: এক গড়নে, যা সব গড়নের সেরা। যেন আয়াত বলছে, আমি তাকে এমন গড়নে বানিয়েছি, যা শ্রেষ্ঠ গড়ন। তাঁর চেনা ভঙ্গিতে তিনি একে বলেন মতগুলোর মধ্যে সবচেয়ে সঠিক। যৌবন আর সোজা ভঙ্গির ব্যাখ্যা দুটিও তাঁর সংকলনে থেকে যায়, যাঁরা বলেছেন তাঁদের কথা হিসেবে, প্রতিটি নিজ নিজ সনদসহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Upright, With Hands and Reason",
          "bn": "সোজা দেহ, হাত আর বুদ্ধি"
        },
        "p": [
          {
            "en": "The later commentators spell out what the best shaping contains. Ibn Kathir: Allah created the human being in the best image and shape, upright in stature, with even, well-made limbs. Al-Baghawi: the most balanced stature and the best form, since every animal was created bent toward the ground except the human being, made tall, taking his food with his hand, adorned with reason and discernment. As-Sa'di: complete in creation, proportioned in limb, upright, lacking nothing he needs outwardly or inwardly.",
            "bn": "পরের যুগের মুফাসসিররা খুলে বলেন, এই সেরা গড়নের ভেতরে কী কী আছে। ইবন কাসীর বলেন: আল্লাহ মানুষকে বানিয়েছেন সবচেয়ে সুন্দর চেহারা ও আকৃতিতে, সোজা দাঁড়ানো দেহে, সুষম আর সুগঠিত অঙ্গপ্রত্যঙ্গ দিয়ে। বাগাভীর কথা: সবচেয়ে সুষম কাঠামো আর সুন্দরতম চেহারা। কারণ প্রতিটি প্রাণী মাটির দিকে ঝুঁকে আছে, শুধু মানুষ লম্বা হয়ে দাঁড়ায়, নিজের হাতে খাবার তুলে নেয়, আর তাকে সাজানো হয়েছে বুদ্ধি ও বিচারশক্তি দিয়ে। সা'দী বলেন: পূর্ণাঙ্গ সৃষ্টি, মাপমতো অঙ্গ, সোজা দেহ। বাইরে বা ভেতরে যা দরকার, তার কিছুই তার কম নেই।"
          },
          {
            "en": "Al-Qurtubi says the generality of commentators explain the phrase as his balance and the evenness of his youth, and adds the fluent tongue, and the hand and fingers with which he grasps. He quotes Abu Bakr ibn Tahir: adorned with reason, carrying out the command, guided by discernment. Then Ibn al-'Arabi: Allah has no creation finer than the human being, made living, knowing, able, willing, speaking, hearing, seeing, planning and wise. Ma'arif al-Qur'an sums it up as the best natural powers and qualities, given to no other creature.",
            "bn": "কুরতুবী বলেন, অধিকাংশ মুফাসসির কথাটির ব্যাখ্যা করেছেন মানুষের ভারসাম্য আর যৌবনের পূর্ণতা দিয়ে। তিনি যোগ করেন সাবলীল জিহ্বা, আর হাত ও আঙুল, যা দিয়ে সে আঁকড়ে ধরে। আবূ বকর ইবন তাহিরের কথা তিনি উদ্ধৃত করেন: বুদ্ধিতে সাজানো, আদেশ পালনকারী, বিচারশক্তিতে পথ পাওয়া। তারপর ইবনুল আরাবীর উক্তি: আল্লাহর সৃষ্টিতে মানুষের চেয়ে সুন্দর কিছু নেই। তাকে দেওয়া হয়েছে জীবন, জ্ঞান, সামর্থ্য, ইচ্ছা, বাকশক্তি, শ্রবণ, দৃষ্টি, পরিকল্পনা আর প্রজ্ঞা। মাআরিফুল কুরআনের সারকথা: মানুষকে দেওয়া হয়েছে সেরা স্বভাবগত শক্তি ও গুণ, যা আর কোনো সৃষ্টিকে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "From Head to Feet",
          "bn": "মাথা থেকে পা পর্যন্ত"
        },
        "p": [
          {
            "en": "Al-Qurtubi turns the phrase into an inventory. The human being, he writes, is the finest of Allah's creation inwardly and outwardly, in beauty of form and marvel of composition: the head and what it holds, the chest and what it gathers, the belly and what it contains, the hands and what they grip, the feet and what they carry. That, he adds, is why the philosophers called the human being the small world, since everything found in created things is gathered in him.",
            "bn": "কুরতুবী কথাটিকে একটা তালিকায় রূপ দেন। তাঁর ভাষায়, ভেতরে ও বাইরে মানুষই আল্লাহর সেরা সৃষ্টি, চেহারার সৌন্দর্যে আর গঠনের বিস্ময়ে। মাথা, আর তার ভেতরে যা আছে। বুক, আর তাতে যা জমা। পেট, আর তার ভেতরে যা ধরা। দুই হাত, আর তারা যা আঁকড়ে ধরে। দুই পা, আর তারা যা বয়ে নেয়। তিনি যোগ করেন, এ কারণেই দার্শনিকেরা মানুষকে বলেছেন ছোট জগৎ। সৃষ্টিজগতে যা কিছু আছে, সবই তার মধ্যে একত্র হয়েছে।"
          },
          {
            "en": "Ma'arif al-Qur'an, drawing on al-Qurtubi, carries the list further. Every limb can move in many ways; the hands and arms hold, move and lift; the thumb alone is a masterpiece without which nothing could be gripped. Ears, eyes, mouth, teeth and nose are each a wonder, gathered on the head so that each completes the others. The tongue's flexibility, the setting of the teeth and the vocal cords let the same throat roar or sing. The Sufis, it adds, supported the idea of the small world.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর সূত্র ধরে তালিকাটা আরও লম্বা করে। প্রতিটি অঙ্গ নানা দিকে নড়তে পারে। হাত আর বাহু দিয়ে মানুষ ধরে, সরায়, তোলে। শুধু বুড়ো আঙুলটাই সৃষ্টির এক অনন্য নমুনা, এটা না থাকলে কিছুই মুঠোয় ধরা যেত না। কান, চোখ, মুখ, দাঁত, নাক, প্রতিটিই আলাদা বিস্ময়, আর মাথায় এরা এমনভাবে বসানো যে একটি আরেকটিকে পূর্ণ করে। জিহ্বার নমনীয়তা, দাঁতের বিন্যাস আর কণ্ঠনালী মিলে একই গলা গর্জনও করতে পারে, গানও গাইতে পারে। মাআরিফুল কুরআন আরও জানায়, সুফিরাও এই ছোট জগতের ধারণা সমর্থন করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Old Age or the Fire",
          "bn": "বার্ধক্য, নাকি জাহান্নাম"
        },
        "p": [
          {
            "en": "Then comes 95:5: thumma radadnahu asfala safilin, then We return him to the lowest of the low. Ibn Kathir reports two readings, and the disagreement is real. The first is the Fire. Mujahid, Abu al-'Aliyah, al-Hasan, Ibn Zayd and others said it, and Ibn Kathir explains: after this attractiveness and beauty, their destination is the Fire if they disobey Allah and deny the messengers. The Muyassar reads it the same way: We return him to the Fire if he does not obey Allah and follow the messengers.",
            "bn": "এরপর ৯৫:৫ আয়াত: সুম্মা রাদাদনাহু আসফালা সাফিলীন, তারপর আমি তাকে ফিরিয়ে দিই নিচুদের চেয়েও নিচে। ইবন কাসীর এর দুই ব্যাখ্যা দেন, আর মতভেদটা সত্যিকারের। প্রথম ব্যাখ্যায় এটি জাহান্নাম। মুজাহিদ, আবুল আলিয়া, হাসান, ইবন যায়দসহ অনেকে এ কথা বলেছেন। ইবন কাসীর বুঝিয়ে বলেন: এত সৌন্দর্য আর রূপের পরও তাদের শেষ ঠিকানা জাহান্নাম, যদি তারা আল্লাহর নাফরমানি করে আর রাসূলদের মিথ্যা বলে। মুয়াসসারও একই পথে চলে: আল্লাহর আনুগত্য না করলে আর রাসূলদের অনুসরণ না করলে আমি তাকে জাহান্নামে ফিরিয়ে দিই।"
          },
          {
            "en": "The second reading is decrepit old age, reported from Ibn 'Abbas and 'Ikrimah, and Ibn Kathir notes that Ibn Jarir at-Tabari preferred it. 'Ikrimah went further: whoever gathers the Qur'an will not be returned to decrepit old age. The same two names stand behind the youth-and-strength gloss of ahsani taqwim in at-Tabari's record. Read together, their account of the two verses runs from the prime of a person's youth to the frailest point of his old age, the whole arc of a bodily life.",
            "bn": "দ্বিতীয় ব্যাখ্যায় এটি জরাজীর্ণ বার্ধক্য। এ মত বর্ণিত হয়েছে ইবন আব্বাস (রাঃ) ও ইকরিমা থেকে, আর ইবন কাসীর জানান, ইবন জারীর তাবারী এটিকেই অগ্রাধিকার দিয়েছেন। ইকরিমা আরও বলেন: যে পুরো কুরআন ধারণ করে, তাকে জরাজীর্ণ বার্ধক্যে ফেরানো হয় না। খেয়াল করার মতো ব্যাপার, তাবারীর সংকলনে আহসানি তাকবীমের যৌবন ও শক্তির ব্যাখ্যাও এই দুজনেরই। দুটো মিলিয়ে পড়লে দুই আয়াতে তাঁদের বর্ণনা চলে যৌবনের পূর্ণতা থেকে বার্ধক্যের সবচেয়ে দুর্বল বিন্দু পর্যন্ত, দেহের গোটা জীবনপথ জুড়ে।"
          },
          {
            "en": "Ibn Kathir himself favours the Fire, and gives his reason from 95:6. That verse excepts those who believe and do righteous deeds; if the low place were old age, the believers could not be excepted from it, since some of them also reach the senility of age. He does not record how the holders of the old-age reading answer this. Both readings are kept here as they stand, each with its own authorities, and the verse is read under both without a verdict.",
            "bn": "ইবন কাসীর নিজে জাহান্নামের ব্যাখ্যাকেই বেছে নেন, আর যুক্তি আনেন ৯৫:৬ আয়াত থেকে। সেখানে ঈমানদার ও সৎকর্মশীলদের আলাদা করা হয়েছে। নিচের ঠিকানা যদি বার্ধক্য হতো, তবে মুমিনদের তা থেকে আলাদা করা যেত না, কারণ তাদের কেউ কেউও বার্ধক্যের অক্ষমতায় পৌঁছায়। বার্ধক্যের মতের লোকেরা এর কী জবাব দেন, ইবন কাসীর তা উল্লেখ করেননি। এখানে দুই ব্যাখ্যাই যেমন আছে তেমন রাখা হলো, প্রত্যেকটির পেছনে নিজ নিজ আলেমদের নাম। কোনো রায় না দিয়ে আয়াতটিকে দুই আলোতেই পড়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reward Never Cut Off",
          "bn": "যে প্রতিদান কখনো থামে না"
        },
        "p": [
          {
            "en": "Who is the human being of these verses? Al-Qurtubi records two views. Some said the disbeliever, naming al-Walid ibn al-Mughirah or Kaladah ibn Usayd, on which the passage came down about those who denied the resurrection; others said Adam and his descendants. Either way, 95:6 names the exception: those who believe and do righteous deeds, fa-lahum ajrun ghayru mamnun, for they have a reward uninterrupted. Ibn Kathir explains it as a reward that will not end. The Muyassar calls it immense, not cut off and not diminished.",
            "bn": "এ আয়াতগুলোর মানুষ কে? কুরতুবী দুটি মত উল্লেখ করেন। কেউ বলেছেন কাফির, আর নাম নিয়েছেন ওয়ালীদ ইবন মুগীরা কিংবা কালাদা ইবন উসাইদের। সে হিসেবে অংশটি নাযিল হয়েছে পুনরুত্থান অস্বীকারকারীদের প্রসঙ্গে। অন্যরা বলেছেন আদম (আঃ) ও তাঁর বংশধর। যে মতই ধরা হোক, ৯৫:৬ আয়াত ব্যতিক্রমের নাম বলে দেয়: যারা ঈমান আনে ও সৎকাজ করে, ফালাহুম আজরুন গাইরু মামনূন, তাদের জন্য আছে বিরামহীন প্রতিদান। ইবন কাসীরের ব্যাখ্যায়, এমন প্রতিদান যা কখনো শেষ হবে না। মুয়াসসার বলে, বিশাল প্রতিদান, যা কাটা পড়ে না, কমেও না।"
          },
          {
            "en": "Ibn Kathir compares the pairing with 103:1 to 103:3: by time, the human being is in loss, except those who believe and do righteous deeds. In both, a statement about the whole race is followed by illa and the same two qualities. As-Sa'di supplies the bridge from the best shaping to the fall. Such great blessings, he says, call for gratitude; yet most people turn away from thanking the Giver, busy with amusement and play, content for themselves with the lowest of things and the meanest of manners.",
            "bn": "ইবন কাসীর এই জোড়াটিকে মিলিয়ে দেখান ১০৩:১ থেকে ১০৩:৩ আয়াতের সঙ্গে: সময়ের শপথ, মানুষ ক্ষতির মধ্যে আছে, তারা ছাড়া যারা ঈমান আনে ও সৎকাজ করে। দুই জায়গাতেই গোটা মানবজাতি নিয়ে একটি কথা, তারপর ইল্লা, তারপর সেই একই দুই গুণ। সেরা গড়ন থেকে পতন পর্যন্ত সেতুটা গড়ে দেন সা'দী। তাঁর কথায়, এত বড় নিয়ামতের দাবি হলো শোকর। অথচ বেশির ভাগ মানুষ দাতার শোকর থেকে মুখ ফিরিয়ে খেলাধুলা আর তামাশায় ডুবে থাকে। নিজের জন্য তারা বেছে নেয় সবচেয়ে নিচু বিষয় আর সবচেয়ে হীন চরিত্র।"
          }
        ]
      },
      {
        "h": {
          "en": "A Judge Who Wrongs No One",
          "bn": "যিনি কারও ওপর জুলুম করেন না"
        },
        "p": [
          {
            "en": "The surah closes with two questions. 95:7: fa-ma yukadhdhibuka ba'du bi-d-din, so what makes you deny the Recompense after this? Ibn Kathir takes the address as O son of Adam, and paraphrases: you know the beginning, and you know that He who is able to begin creation is able to repeat it, which is easier; so what makes you deny the final return once you know this? The argument comes straight out of 95:4. He who shaped the human being so well can shape him again.",
            "bn": "সূরা শেষ হয় দুটি প্রশ্নে। ৯৫:৭ আয়াত: ফামা ইউকাযযিবুকা বা'দু বিদ্দীন, এরপরও কিসে তোমাকে প্রতিদান দিবসকে মিথ্যা বলাচ্ছে? ইবন কাসীরের মতে সম্বোধনটা আদমসন্তানের প্রতি। তাঁর ব্যাখ্যা মোটামুটি এমন: শুরুটা তো তুমি জানো। এটাও জানো, যিনি সৃষ্টির সূচনা করতে পারেন, তিনি তা আবার করতেও পারেন, আর সেটা আরও সহজ। এসব জানার পরও শেষ ফিরে যাওয়াকে অস্বীকার করছ কেন? যুক্তিটা সরাসরি আসে ৯৫:৪ আয়াত থেকে। যিনি মানুষকে এত সুন্দর গড়নে বানিয়েছেন, তিনি আবারও বানাতে পারেন।"
          },
          {
            "en": "95:8 answers with a question of its own: alaysa-llahu bi-ahkami-l-hakimin, is not Allah the most just of judges? Ibn Kathir explains: the best of judges, who oppresses no one and wrongs no one, and part of His justice is that He will establish the Judgement and give the wronged their due from whoever wronged them in this life. None of the commentaries used here attaches a hadith on a spoken reply to this verse, so none is quoted. The denier of 95:7, like the disbeliever of al-Qurtubi's first view, is a description in the text, licensing nothing against any living person or community.",
            "bn": "৯৫:৮ আয়াত জবাব দেয় আরেকটি প্রশ্নে: আলাইসাল্লাহু বিআহকামিল হাকিমীন, আল্লাহ কি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক নন? ইবন কাসীর বলেন: তিনি সেরা বিচারক, কারও ওপর জুলুম বা অবিচার করেন না। তাঁর ইনসাফেরই অংশ যে তিনি বিচার কায়েম করবেন, আর দুনিয়ায় যে যার ওপর জুলুম করেছে, মজলুমকে তার কাছ থেকে প্রাপ্য আদায় করে দেবেন। এখানে ব্যবহৃত কোনো তাফসীর এ আয়াতের মুখে বলা জবাব নিয়ে কোনো হাদীস জুড়ে দেয়নি, তাই কোনো হাদীস উদ্ধৃত করা হলো না। ৯৫:৭ আয়াতের অস্বীকারকারী, কুরতুবীর প্রথম মতের কাফিরের মতোই, পাঠের একটি বর্ণনা মাত্র। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না।"
          },
          {
            "en": "One narration belongs to the surah as a whole, not to this verse. In al-Bukhari's Sahih (769), al-Bara' said: I heard the Prophet ﷺ reciting wat-tini waz-zaytun in the 'Isha' prayer, and I never heard a sweeter voice or a better way of recitation than that of the Prophet. In al-Bara's Arabic the word is ahsan, the same word as the verse's ahsani taqwim. The surah about the finest of shapings was heard, in his account, in the finest of voices.",
            "bn": "একটি হাদীস গোটা সূরার সঙ্গে সম্পর্কিত, আলাদাভাবে এই আয়াতের সঙ্গে নয়। সহীহ বুখারীতে (৭৬৯) বারা (রাঃ) বলেন: আমি নবী ﷺ-কে ইশার নামাযে ওয়াত্তীনি ওয়াযযাইতূন পড়তে শুনেছি। তাঁর চেয়ে সুন্দর কণ্ঠ বা সুন্দর তিলাওয়াত আমি আর কারও কাছে শুনিনি। বারা (রাঃ)-এর আরবিতে শব্দটি আহসান, আয়াতের আহসানি তাকবীমের সেই একই শব্দ। তাঁর বর্ণনায়, সেরা গড়নের কথা বলা সূরাটি শোনা গিয়েছিল সেরা কণ্ঠে।"
          }
        ]
      }
    ]
  }
});
