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
  },
  "95:8": {
    "sections": [
      {
        "h": {
          "en": "A Question Built for Yes",
          "bn": "যে প্রশ্নের জবাব হ্যাঁ"
        },
        "p": [
          {
            "en": "Alaysa-llahu bi-ahkami-l-hakimin: is not Allah the most just of judges? Four Arabic words close Surah at-Tin, and they close it with a question rather than a statement. Al-Qurtubi explains how such a question works. When the interrogative alif enters a negation, and the sentence carries the sense of making the hearer stop and acknowledge, the whole becomes an affirmation. The question does not ask for information. It asks for agreement, and the answer it is built to draw out is yes.",
            "bn": "আলাইসাল্লাহু বিআহকামিল হাকিমীন: আল্লাহ কি বিচারকদের মধ্যে শ্রেষ্ঠ বিচারক নন? আরবিতে মাত্র চারটি শব্দ, আর এগুলো দিয়েই সূরা আত-তীন শেষ হয়। শেষটা কোনো ঘোষণা নয়, একটি প্রশ্ন। এমন প্রশ্ন কীভাবে কাজ করে, কুরতুবী তা বুঝিয়ে দেন। প্রশ্নবোধক আলিফ যখন না-বাচক বাক্যের শুরুতে বসে, আর বাক্যের ভেতরে থাকে শ্রোতাকে থামিয়ে স্বীকার করিয়ে নেওয়ার ভাব, তখন পুরো কথাটা হয়ে যায় হ্যাঁ-বাচক। এ প্রশ্ন কিছু জানতে চায় না, সম্মতি চায়। আর যে জবাব টেনে আনার জন্য প্রশ্নটা গড়া, তা হলো হ্যাঁ।"
          },
          {
            "en": "He shows the pattern with a line of Arabic verse: are you not the best of all who ride on mounts, the most open-handed of the worlds? No listener takes that line as doubt about the man it praises; it is praise shaped as a question. The Muyassar writes the answer straight into its own gloss. Is not Allah, who made this Day for deciding between people, the most just of judges in all that He has created? Then one word: bala, yes indeed.",
            "bn": "উদাহরণ হিসেবে তিনি একটি আরবি কবিতার চরণ আনেন: তোমরা কি বাহনে চড়া সবার মধ্যে সেরা নও, জগতের সবচেয়ে দরাজ হাতের মানুষ নও? এ চরণ শুনে কেউ ভাবে না যে প্রশংসিত মানুষটিকে নিয়ে কবির সন্দেহ আছে। এটা প্রশ্নের চেহারায় প্রশংসা। মুয়াসসার জবাবটা নিজের ব্যাখ্যার ভেতরেই লিখে দেয়। যিনি মানুষের মধ্যে ফয়সালার জন্য এই দিনটি নির্ধারণ করেছেন, সেই আল্লাহ কি তাঁর সব সৃষ্টির ব্যাপারে শ্রেষ্ঠ বিচারক নন? তারপর একটি শব্দ: বালা, অবশ্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Exact in Making, Just in Judging",
          "bn": "নিখুঁত গড়নে, ন্যায্য বিচারে"
        },
        "p": [
          {
            "en": "The commentators read ahkam in two directions, toward making and toward judging. Al-Qurtubi gives both readings. The first: the most exact in workmanship of all who judge, in everything He created. The second, introduced with it is said: the most just of judges in deciding by the truth and in fairness among His creatures. The first reading looks back to the best of shapings in 95:4; the second looks forward to a Day of decision.",
            "bn": "আহকাম শব্দটি তাফসীরকারেরা দুই দিকে পড়েন: একদিকে সৃষ্টির নিপুণতা, অন্যদিকে বিচার। কুরতুবী দুটো ব্যাখ্যাই দেন। প্রথমটি: যা কিছু তিনি সৃষ্টি করেছেন, তার নির্মাণে তিনি সবচেয়ে নিখুঁত কারিগর। দ্বিতীয়টি তিনি আনেন 'বলা হয়েছে' দিয়ে: সত্য দিয়ে ফয়সালা করা আর সৃষ্টির মধ্যে ইনসাফ করায় তিনি শ্রেষ্ঠ বিচারক। প্রথম ব্যাখ্যা পেছনে তাকায় ৯৫:৪-এর সুন্দরতম গড়নের দিকে। দ্বিতীয়টি সামনে তাকায় ফয়সালার এক দিনের দিকে।"
          },
          {
            "en": "At-Tabari takes the second path and makes the address personal: is not Allah, O Muhammad, the most just of all who have judged, in His rulings and in settling His decree among His servants? Al-Baghawi compresses it into two words, aqda al-qadin, the most decisive of those who pass judgement. Al-Qurtubi adds that the question presses a point on those disbelievers who acknowledged a Maker without beginning. It asks them to carry what they already grant a step further, to the Judge who is coming.",
            "bn": "তাবারী দ্বিতীয় পথ ধরেন, আর সম্বোধনটা করেন ব্যক্তিগত: হে মুহাম্মাদ, আল্লাহ কি তাঁর বিধানে আর বান্দাদের মধ্যে ফয়সালা চূড়ান্ত করায় সব বিচারকের চেয়ে শ্রেষ্ঠ নন? বাগাভী পুরো কথাটা দুই শব্দে বলেন: আকদাল কাদীন, অর্থাৎ যারা রায় দেয় তাদের মধ্যে সবচেয়ে চূড়ান্ত রায়দাতা। কুরতুবী যোগ করেন, এ প্রশ্ন সেই কাফিরদের উপর যুক্তিটা চাপিয়ে দেয়, যারা অনাদি এক স্রষ্টাকে স্বীকার করত। যা তারা আগেই মানে, প্রশ্নটা তাদের সেখান থেকে এক ধাপ এগিয়ে নিয়ে যায় সেই সত্তার দিকে, যিনি বিচার করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to Man or Messenger",
          "bn": "মানুষকে, না রাসূলকে"
        },
        "p": [
          {
            "en": "The verse before it, 95:7, asks fa-ma yukadhdhibuka ba'du bi-d-din, and at-Tabari reports that the early interpreters differed over whom it addresses. One group read it as speech to the human being: what makes you deny, O human, after these proofs? Mansur asked Mujahid whether it meant the Prophet ﷺ, and Mujahid answered: Allah forbid! It means the human being. At-Tabari carries that answer through three chains, and al-Kalbi said the same: I created you in the best shaping, so what makes you deny?",
            "bn": "এর আগের আয়াত ৯৫:৭ জিজ্ঞেস করে: ফামা ইউকাযযিবুকা বা'দু বিদ্দীন। তাবারী জানান, এখানে সম্বোধন কার প্রতি, তা নিয়ে প্রথম যুগের ব্যাখ্যাকারদের মধ্যে মতভেদ ছিল। একদল একে মানুষের প্রতি কথা ধরেছেন: হে মানুষ, এসব প্রমাণের পরও কিসে তোমাকে অস্বীকার করায়? মানসূর মুজাহিদকে জিজ্ঞেস করেছিলেন, এখানে কি নবী ﷺ-কে বোঝানো হয়েছে? মুজাহিদ বললেন: আল্লাহর পানাহ! এখানে মানুষকে বোঝানো হয়েছে। তাবারী এ জবাব তিনটি সনদে আনেন। কালবীও একই কথা বলেছেন: আমি তোমাকে সুন্দরতম গড়নে সৃষ্টি করেছি, তবু কিসে তোমাকে অস্বীকার করায়?"
          },
          {
            "en": "A second group took the words as said to the Prophet ﷺ himself. Qatadah glossed them: be certain, after the clear exposition that has come to you from Allah, that Allah is the most just of judges. A third reading treats ma as meaning who: who can call you a liar, O Muhammad, after this exposition, about the Recompense? At-Tabari names this third reading as the most correct. Al-Qurtubi lays out the same three and credits the third to Qatadah and al-Farra', noting that at-Tabari chose it.",
            "bn": "আরেক দল এ কথাকে স্বয়ং নবী ﷺ-এর প্রতি সম্বোধন ধরেছেন। কাতাদা এর ব্যাখ্যা দিয়েছেন: আল্লাহর কাছ থেকে যে স্পষ্ট বর্ণনা তোমার কাছে এসেছে, তার পর দৃঢ় বিশ্বাস রাখো যে আল্লাহই শ্রেষ্ঠ বিচারক। তৃতীয় একটি পাঠে 'মা' শব্দটি 'কে' অর্থে: হে মুহাম্মাদ, এই বর্ণনার পর প্রতিদানের ব্যাপারে কে তোমাকে মিথ্যাবাদী বলতে পারে? তাবারী এই তৃতীয় পাঠকেই সবচেয়ে সঠিক বলেন। কুরতুবীও এই তিনটি মত তুলে ধরেন। তৃতীয়টিকে তিনি কাতাদা ও ফাররার মত বলে উল্লেখ করেন, আর জানান যে তাবারী এটাই বেছে নিয়েছেন।"
          },
          {
            "en": "Under at-Tabari's choice the Prophet ﷺ is addressed as the man denied, never as a denier; Mujahid, for his part, refused to read the Prophet ﷺ into the words at all. As-Sa'di and al-Baghawi read the address as O human being, and Ibn Kathir as O son of Adam. On 95:8 al-Baghawi relays Muqatil in the same personal register as at-Tabari: is not Allah He who will judge between you, O Muhammad, and those who deny you? The disagreement over the addressee stays open here, each reading with its holders.",
            "bn": "তাবারীর বেছে নেওয়া পাঠে নবী ﷺ-কে সম্বোধন করা হয়েছে এমন মানুষ হিসেবে, যাঁকে অস্বীকার করা হয়। তিনি কখনো অস্বীকারকারী নন। আর মুজাহিদ তো এ কথার মধ্যে নবী ﷺ-কে টেনে আনতেই রাজি হননি। সা'দী ও বাগাভী সম্বোধনটা পড়েন 'হে মানুষ' হিসেবে, আর ইবন কাসীর পড়েন 'হে আদম সন্তান' হিসেবে। ৯৫:৮ আয়াতে বাগাভী মুকাতিলের ব্যাখ্যা আনেন, যা তাবারীর মতোই ব্যক্তিগত: হে মুহাম্মাদ, আল্লাহ কি তোমার আর তোমাকে যারা অস্বীকার করে তাদের মধ্যে ফয়সালা করবেন না? সম্বোধন কার প্রতি, সে প্রশ্ন এখানে খোলাই থাকছে, প্রতিটি পাঠ তার ধারকদের নামসহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Din as Repayment in Kind",
          "bn": "দীন মানে যেমন কর্ম তেমন ফল"
        },
        "p": [
          {
            "en": "The same verse ends bi-d-din, and at-Tabari records a second disagreement over that word. 'Ikrimah said: the reckoning, al-hisab. A report from Ibn 'Abbas glosses it as the judgement of Allah: what makes you deny the judgement of Allah? At-Tabari prefers the first. Din here, he says, is repayment and reckoning, since that is one of its meanings in the speech of the Arabs, as in their saying kama tadinu tudan: as you deal, so you will be dealt with.",
            "bn": "একই আয়াতের শেষ শব্দ বিদ্দীন। এ শব্দ নিয়েও তাবারী আরেকটি মতভেদ লিখে রাখেন। ইকরিমা বলেছেন: হিসাব। ইবন আব্বাস (রাঃ) থেকে বর্ণিত এক ব্যাখ্যায় এর অর্থ আল্লাহর ফয়সালা: আল্লাহর ফয়সালাকে অস্বীকার করতে কিসে তোমাকে প্রলুব্ধ করে? তাবারী প্রথম মতটিকে অগ্রাধিকার দেন। তাঁর মতে এখানে দীন মানে প্রতিদান ও হিসাব, কারণ আরবদের ভাষায় দীন শব্দের এটি একটি অর্থ। যেমন তারা বলে, কামা তাদীনু তুদান: যেমন আচরণ করবে, তেমন আচরণ পাবে।"
          },
          {
            "en": "He adds that he does not know judgement among the meanings of din in their speech, unless what is meant is the command of Allah that He has laid on you, to obey Him in it. Al-Baghawi, al-Qurtubi and as-Sa'di all land near at-Tabari: the reckoning and the recompense for deeds. Read that way, 95:7 asks about a repayment, and 95:8 names who will make it. The surah ends by placing the settling of every account in the hands of the most just of judges.",
            "bn": "তিনি আরও বলেন, আরবদের কথায় দীন শব্দের অর্থ হিসেবে 'ফয়সালা' তাঁর জানা নেই। তবে যদি এর দ্বারা বোঝানো হয় আল্লাহর সেই আদেশ, যা তিনি তোমার উপর দিয়েছেন যেন তুমি তাতে তাঁর আনুগত্য করো, তাহলে সে অর্থ হতে পারে। বাগাভী, কুরতুবী ও সা'দী সবাই তাবারীর কাছাকাছি থাকেন: আমলের হিসাব ও প্রতিদান। এভাবে পড়লে ৯৫:৭ প্রশ্ন তোলে এক প্রতিদান নিয়ে, আর ৯৫:৮ জানিয়ে দেয় সেই প্রতিদান কে দেবেন। সব হিসাব মেটানোর ভার শ্রেষ্ঠ বিচারকের হাতে রেখেই সূরাটি শেষ হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument Drawn From Frailty",
          "bn": "দুর্বলতা থেকে টানা যুক্তি"
        },
        "p": [
          {
            "en": "Ba'du, after this, points back to proofs already given, and at-Tabari's sense of what those proofs were shapes his reading of 95:5. He lists two groups on asfala safilin. Ibn 'Abbas, 'Ikrimah, Ibrahim and Qatadah said: the most decrepit stage of life, or in Qatadah's word, al-haram, extreme old age. Abu al-'Aliyah said: in the worst of forms. Mujahid, al-Hasan and Ibn Zayd said: the Fire. At-Tabari prefers the first: the age of those whose minds have gone through senility.",
            "bn": "বা'দু, অর্থাৎ এর পরে, শব্দটি আগেই দেওয়া কিছু প্রমাণের দিকে ইঙ্গিত করে। সেই প্রমাণগুলো কী, তা নিয়ে তাবারীর বোঝাপড়া থেকেই তৈরি হয় ৯৫:৫-এর ব্যাপারে তাঁর পাঠ। আসফালা সাফিলীন নিয়ে তিনি দুটি দল উল্লেখ করেন। ইবন আব্বাস (রাঃ), ইকরিমা, ইবরাহীম ও কাতাদা বলেছেন: জীবনের সবচেয়ে জরাজীর্ণ স্তর। কাতাদার শব্দে: আল-হারাম, চরম বার্ধক্য। আবুল আলিয়া বলেছেন: নিকৃষ্টতম আকৃতিতে। মুজাহিদ, হাসান ও ইবন যায়দ বলেছেন: জাহান্নাম। তাবারী প্রথম মতকে প্রাধান্য দেন: সেই বয়স, যখন বার্ধক্যের ভারে মানুষের বুদ্ধি লোপ পায়।"
          },
          {
            "en": "His reason comes from the closing questions. Allah told of creating the son of Adam and turning him from state to state as an argument against those who denied His power to raise the dead; that is why He says, so what makes you deny after this? And it is impossible, at-Tabari writes, to argue against a people by means of the very thing they deny. A denier of the resurrection does not grant the Fire, but he cannot deny the decline of the body he lives in.",
            "bn": "তাঁর যুক্তি আসে সূরার শেষ প্রশ্নগুলো থেকে। আল্লাহ আদম সন্তানকে সৃষ্টি করা আর তাকে এক অবস্থা থেকে আরেক অবস্থায় ঘোরানোর কথা জানিয়েছেন। উদ্দেশ্য ছিল তাদের বিরুদ্ধে প্রমাণ দাঁড় করানো, যারা মৃত্যুর পর পুনরুত্থানে তাঁর ক্ষমতা অস্বীকার করত। তাই তিনি বলেন: এরপর কিসে তোমাকে অস্বীকার করায়? তাবারী লেখেন, যে জিনিস কোনো সম্প্রদায় নিজেই অস্বীকার করে, তা দিয়ে তাদের বিরুদ্ধে যুক্তি দেওয়া অসম্ভব। পুনরুত্থান অস্বীকারকারী জাহান্নাম মানে না, কিন্তু নিজের শরীরের ক্ষয় সে অস্বীকার করতে পারে না।"
          },
          {
            "en": "Al-Baghawi draws the picture of that decline. His mind diminishes and his body weakens; the low ones of the phrase are the weak, the chronically ill and small children, and the very old man sinks below them all. Al-Qurtubi gives the same reading from ad-Dahhak, al-Kalbi and others: weakness after strength, until he becomes like a child in his first state.",
            "bn": "সেই ক্ষয়ের ছবি আঁকেন বাগাভী। তার বুদ্ধি কমে যায়, শরীর দুর্বল হয়। আয়াতের 'নিচু লোকেরা' হলো দুর্বল, দীর্ঘ রোগে পঙ্গু মানুষ আর ছোট শিশুরা, আর খুব বুড়ো মানুষ তাদের সবার চেয়েও নিচে নেমে যায়। কুরতুবীও দাহহাক, কালবী ও অন্যদের সূত্রে একই ব্যাখ্যা দেন: শক্তির পর দুর্বলতা, এমনকি মানুষ আবার শিশুর প্রথম অবস্থার মতো হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Exception Excepts",
          "bn": "ব্যতিক্রমটা কিসের থেকে"
        },
        "p": [
          {
            "en": "The reading of 95:5 decides the grammar of 95:6, illa-lladhina amanu, except those who believe. Al-Qurtubi states it in a line. On the view that the lowest of the low is the Fire, the exception is connected: the believers are taken out of the very group that is returned there. On the view that it is old age, the exception is disconnected, and illa works like but. The believers are not lifted out of old age; something else is said about them.",
            "bn": "৯৫:৫ কীভাবে পড়া হয়, তার উপরই নির্ভর করে ৯৫:৬-এর ব্যাকরণ: ইল্লাল্লাযীনা আমানূ, তবে যারা ঈমান এনেছে তারা ছাড়া। কুরতুবী কথাটা এক লাইনে বলেন। যারা বলেন সবচেয়ে নিচু স্থান মানে জাহান্নাম, তাদের মতে ব্যতিক্রমটি সংযুক্ত। অর্থাৎ যে দলকে সেখানে ফেরানো হয়, মুমিনদের সেই দল থেকেই বের করে আনা হয়েছে। আর যারা বলেন এর মানে বার্ধক্য, তাদের মতে ব্যতিক্রমটি বিচ্ছিন্ন, আর ইল্লা এখানে 'কিন্তু' অর্থে। মুমিনরা বার্ধক্য থেকে মুক্তি পান না। তাদের সম্পর্কে বলা হয় ভিন্ন এক কথা।"
          },
          {
            "en": "At-Tabari's preferred reading spells out that other thing. We returned him to the most decrepit age, except those who believed and did righteous deeds while they were healthy and young: they have a reward uncut after their old age, like the reward they had for their work when they were strong enough to do it. It also meets the objection Ibn Kathir later raised, that the exception would not fit, since senility reaches some believers too. The exception is not from old age, but from the loss that comes with it.",
            "bn": "সেই ভিন্ন কথাটা তাবারীর পছন্দের পাঠে খুলে বলা আছে। আমি তাকে ফিরিয়ে দিই সবচেয়ে জরাজীর্ণ বয়সে, তবে তারা ছাড়া যারা সুস্থ ও যুবক থাকা অবস্থায় ঈমান এনেছে আর নেক আমল করেছে। বার্ধক্যের পরও তাদের জন্য আছে অবিচ্ছিন্ন প্রতিদান, ঠিক তেমন, যেমনটা তারা পেত শক্তি থাকা অবস্থায় করা আমলের জন্য। পরে ইবন কাসীর আপত্তি তোলেন, বার্ধক্য তো কিছু মুমিনকেও ধরে, তাই এখানে ব্যতিক্রম খাপ খায় না। তাবারীর পাঠে এ আপত্তিরও জবাব মেলে: ব্যতিক্রমটা বার্ধক্য থেকে নয়, বার্ধক্যের সঙ্গে আসা ক্ষতি থেকে।"
          },
          {
            "en": "Al-Baghawi gives the same sense: for the others, minds go and deeds are cut off and no good deed is written for them, but for those who believe, there is written after old age and dotage the like of what they used to do in youth and health. Al-Qurtubi relays from Ibn 'Abbas, through ad-Dahhak, that when a servant prayed, fasted and gave much in his youth and then grew too weak, Allah keeps running for him what he used to do. As-Sa'di and Ibn Kathir read the lowest of the low as the Fire; both readings are kept here, with no verdict between them.",
            "bn": "বাগাভীও একই অর্থ দেন। অন্যদের বুদ্ধি লোপ পায়, আমল বন্ধ হয়ে যায়, তাদের জন্য আর কোনো নেকি লেখা হয় না। কিন্তু যারা ঈমান এনেছে, বার্ধক্য ও বুদ্ধিভ্রংশের পরও তাদের জন্য লেখা হয় ঠিক তেমন আমল, যেমনটা তারা যৌবনে আর সুস্থ অবস্থায় করত। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: কোনো বান্দা যদি যৌবনে বেশি বেশি নামায, রোযা আর সদকা করে থাকে, তারপর দুর্বল হয়ে সেগুলো আর করতে না পারে, তবু আল্লাহ তার জন্য সেই আমলের সওয়াব জারি রাখেন। অন্যদিকে সা'দী ও ইবন কাসীর সবচেয়ে নিচু স্থান বলতে জাহান্নাম বোঝেন। দুটি পাঠই এখানে রাখা হলো, কোনোটির পক্ষে রায় না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bedouin Without a Name",
          "bn": "নামহীন এক বেদুইন"
        },
        "p": [
          {
            "en": "At-Tirmidhi's Jami' (3347) carries a reply to this verse. Isma'il ibn Umayyah said: I heard a Bedouin man say: I heard Abu Hurayrah, relating it: whoever recites wat-tini waz-zaytun and recites alaysa-llahu bi-ahkami-l-hakimin, let him say: bala, wa ana 'ala dhalika mina sh-shahidin, yes indeed, and I am one of the witnesses to that. At-Tirmidhi then adds his own remark: this hadith is narrated only with this chain, from this Bedouin from Abu Hurayrah, and he is not named.",
            "bn": "তিরমিযীর জামি'তে (৩৩৪৭) এ আয়াতের একটি জবাবের কথা আছে। ইসমাঈল ইবন উমাইয়া বলেন: আমি এক বেদুইনকে বলতে শুনেছি, আমি আবু হুরায়রা (রাঃ)-কে বর্ণনা করতে শুনেছি: যে ওয়াত্তীনি ওয়াযযাইতূন পড়ে, আর পড়তে পড়তে আলাইসাল্লাহু বিআহকামিল হাকিমীন পর্যন্ত পৌঁছায়, সে যেন বলে: বালা, ওয়া আনা আলা যালিকা মিনাশ শাহিদীন, অবশ্যই, আর আমি এর সাক্ষীদের একজন। এরপর তিরমিযী নিজের মন্তব্য যোগ করেন: এ হাদীস কেবল এই সনদেই বর্ণিত, এই বেদুইনের মাধ্যমে আবু হুরায়রা (রাঃ) থেকে, আর তার নাম উল্লেখ করা হয়নি।"
          },
          {
            "en": "Abu Dawud's Sunan (887) has the same chain through the same unnamed Bedouin, with the words raised plainly to the Messenger of Allah ﷺ, and it goes on to 75:40 at the close of Surah al-Qiyamah, answered with yes, and 77:50 at the close of Surah al-Mursalat, answered with we believe in Allah. Abu Dawud gives no grading there. The link that matters is unnamed, as at-Tirmidhi himself says, and nothing more is claimed for the report here.",
            "bn": "আবু দাউদের সুনানেও (৮৮৭) একই সনদ, একই নামহীন বেদুইনের মাধ্যমে, তবে সেখানে কথাগুলো স্পষ্টভাবে আল্লাহর রাসূল ﷺ-এর বাণী হিসেবে এসেছে। বর্ণনাটি আরও এগিয়ে সূরা আল-কিয়ামাহর শেষে ৭৫:৪০ আর সূরা আল-মুরসালাতের শেষে ৭৭:৫০ আয়াতের কথাও বলে। প্রথমটির জবাব 'অবশ্যই', দ্বিতীয়টির জবাব 'আমরা আল্লাহর উপর ঈমান এনেছি'। আবু দাউদ সেখানে কোনো মান নির্ণয় করেননি। আসল যোগসূত্রটির নাম নেই, তিরমিযী নিজেই তা বলেছেন। তাই এখানে বর্ণনাটির পক্ষে এর বেশি কিছু দাবি করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Companions Who Answered Aloud",
          "bn": "যে সাহাবীরা মুখে জবাব দিতেন"
        },
        "p": [
          {
            "en": "Ibn Kathir cites the Abu Hurayrah report at this verse, al-Qurtubi notes that at-Tirmidhi narrated it, and at-Tabari mentions the reply from the Prophet ﷺ twice without a connected chain, once with according to what has reached us and once from Qatadah with it was mentioned to us. The Companions' own practice is reported too. At-Tabari reports through Sa'id ibn Jubayr that Ibn 'Abbas, on reciting the verse, would say: subhanaka-llahumma, wa bala, glory be to You, O Allah, and yes indeed.",
            "bn": "ইবন কাসীর এ আয়াতে আবু হুরায়রা (রাঃ)-এর বর্ণনাটি আনেন, কুরতুবী জানান যে তিরমিযী এটি বর্ণনা করেছেন। তাবারী নবী ﷺ থেকে জবাবটির কথা দুবার উল্লেখ করেন, কিন্তু কোনোবারই নবী ﷺ পর্যন্ত যুক্ত সনদ নেই। একবার বলেন 'আমাদের কাছে যা পৌঁছেছে সে অনুযায়ী', আরেকবার কাতাদা থেকে 'আমাদের কাছে উল্লেখ করা হয়েছে'। সাহাবীদের নিজেদের আমলের কথাও বর্ণিত আছে। তাবারী সাঈদ ইবন জুবাইরের সূত্রে জানান, ইবন আব্বাস (রাঃ) আয়াতটি পড়ে বলতেন: সুবহানাকাল্লাহুম্মা, ওয়া বালা, হে আল্লাহ, তুমি পবিত্র, আর অবশ্যই।"
          },
          {
            "en": "Ma'mar said that Qatadah, on reciting it, said: bala, wa ana 'ala dhalika mina sh-shahidin, and the narrator adds: I think he used to raise it to the Prophet ﷺ. Qatadah answered 75:40 with bala, and 77:50 with: I believe in Allah and in what He sent down. Al-Qurtubi reports that Ibn 'Abbas and 'Ali ibn Abi Talib both said bala, wa ana 'ala dhalika mina sh-shahidin, and calls it the preferred practice. Ma'arif al-Qur'an records that the jurists have ruled the words mustahab, recommended.",
            "bn": "মা'মার বলেন, কাতাদা আয়াতটি পড়ে বলতেন: বালা, ওয়া আনা আলা যালিকা মিনাশ শাহিদীন। বর্ণনাকারী যোগ করেন: আমার ধারণা, তিনি কথাটা নবী ﷺ পর্যন্ত পৌঁছাতেন। কাতাদা ৭৫:৪০ আয়াতের জবাবে বলতেন 'বালা', আর ৭৭:৫০ আয়াতের জবাবে বলতেন: আমি আল্লাহর উপর আর তিনি যা নাযিল করেছেন তার উপর ঈমান এনেছি। কুরতুবী জানান, ইবন আব্বাস (রাঃ) ও আলী ইবন আবী তালিব (রাঃ) দুজনেই বলতেন: বালা, ওয়া আনা আলা যালিকা মিনাশ শাহিদীন। তিনি একে পছন্দনীয় আমল বলেন। মাআরিফুল কুরআন জানায়, ফকীহগণ এ কথাগুলো বলাকে মুস্তাহাব বলে রায় দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Creation Not Left to Wander",
          "bn": "সৃষ্টিকে উদ্দেশ্যহীন ছাড়া হয়নি"
        },
        "p": [
          {
            "en": "The Muyassar and as-Sa'di turn the question into another. Would His wisdom leave creation to wander, neither commanded nor forbidden, neither rewarded nor punished? The Muyassar answers: that is not sound and will not be. As-Sa'di reasons from the whole surah: He who created the human being stage after stage, brought him blessings past counting and raised him with fine nurture must return His creatures to an abode that is their settling place and their goal.",
            "bn": "মুয়াসসার ও সা'দী প্রশ্নটাকে আরেকটি প্রশ্নে রূপ দেন। তাঁর প্রজ্ঞা কি সৃষ্টিকে এমনি ছেড়ে দেবে, যেখানে কোনো আদেশ নেই, নিষেধ নেই, পুরস্কার নেই, শাস্তিও নেই? মুয়াসসারের জবাব: তা ঠিক নয়, আর তা হবেও না। সা'দী পুরো সূরা থেকে যুক্তি টানেন। যিনি মানুষকে ধাপে ধাপে সৃষ্টি করেছেন, অগণিত নিয়ামত তার কাছে পৌঁছে দিয়েছেন, সুন্দরভাবে লালন করেছেন, তিনি অবশ্যই তাঁর সৃষ্টিকে এমন এক আবাসে ফিরিয়ে নেবেন, যা তাদের স্থায়ী ঠিকানা আর চূড়ান্ত গন্তব্য।"
          },
          {
            "en": "The denier whom 95:7 and 95:8 confront is a figure the text describes, someone who rejects the Recompense after its proofs. The verses describe what the text describes and license nothing against any living person or community. What they ask of the reader is simpler: to hear the closing question as addressed to oneself, and to answer it as Ibn 'Abbas did, with glory to Allah and a yes.",
            "bn": "৯৫:৭ ও ৯৫:৮ যে অস্বীকারকারীর মুখোমুখি হয়, সে আয়াতে বর্ণিত এক চরিত্র, যে প্রমাণ দেখার পরও প্রতিদান অস্বীকার করে। আয়াত দুটি কেবল সেটুকুই বর্ণনা করে, যা পাঠে আছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কিছুরই অনুমতি দেয় না। পাঠকের কাছে এদের চাওয়া আরও সহজ: শেষ প্রশ্নটাকে নিজের প্রতি করা প্রশ্ন হিসেবে শোনা, আর ইবন আব্বাস (রাঃ)-এর মতো আল্লাহর পবিত্রতা ঘোষণা করে জবাব দেওয়া: অবশ্যই।"
          }
        ]
      }
    ]
  }
});
