/**
 * Tadabbur long-form articles — surah 92.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "92:4": {
    "sections": [
      {
        "h": {
          "en": "Three Oaths, Set in Pairs",
          "bn": "তিন শপথ, জোড়ায় সাজানো"
        },
        "p": [
          {
            "en": "Surah al-Layl opens with three oaths before it says anything. 92:1 swears by the night when it covers, 92:2 by the day when it appears, and 92:3 by the One who created the male and the female. Ibn Kathir draws the obvious line: just as the things sworn by are set out as opposites, so is the matter being sworn about. The oath is not decoration before the point; it is a demonstration of the point in three quick strokes.",
            "bn": "সূরা আল-লাইল কিছু বলার আগেই তিনটি শপথ দিয়ে শুরু হয়। 92:1 শপথ করে রাতের, যখন সে ঢেকে দেয়; 92:2 শপথ করে দিনের, যখন সে উদ্ভাসিত হয়; আর 92:3 শপথ করে তাঁর, যিনি পুরুষ ও নারী সৃষ্টি করেছেন। ইবনে কাসীর স্পষ্ট সূত্রটি টেনে দেন: যেসব জিনিসের শপথ করা হচ্ছে সেগুলো যেমন বিপরীত জোড়ায় সাজানো, যে বিষয়ে শপথ করা হচ্ছে সেটিও তেমনই। শপথ এখানে মূল কথার আগে কেবল অলংকার নয়; তিনটি দ্রুত টানে মূল কথারই প্রদর্শন।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Striving Is Scattered",
          "bn": "তোমাদের চেষ্টা ছড়িয়ে আছে"
        },
        "p": [
          {
            "en": "Then the answer, in three words: inna sa'yakum lashatta. Sa'y is effort that moves — labouring, pressing forward, the same word that names the walking between Safa and Marwah. Shatta is a plural, and its sense is scattered and divergent rather than merely unequal. The verse does not say some of you strive more than others. It says the strivings themselves head off in different directions, which is a claim about aim rather than about quantity.",
            "bn": "এরপর তিন শব্দে জবাব: 'ইন্না সা'ইয়াকুম লাশাত্তা'। 'সা'ই' হলো চলমান প্রচেষ্টা — খাটুনি, সামনে এগিয়ে যাওয়া; সাফা ও মারওয়ার মধ্যে দৌড়ানোকেও এই শব্দেই ডাকা হয়। 'শাত্তা' একটি বহুবচন, আর এর অর্থ ছড়ানো ও বিভিন্নমুখী — কেবল কমবেশি নয়। আয়াতটি বলছে না যে তোমাদের কেউ কেউ অন্যদের চেয়ে বেশি চেষ্টা করে। বলছে, চেষ্টাগুলো নিজেরাই ভিন্ন ভিন্ন দিকে ছুটে যায় — অর্থাৎ কথাটি পরিমাণ নিয়ে নয়, অভিমুখ নিয়ে।"
          },
          {
            "en": "This sits alongside the older statement in 53:39, that a man has nothing except what he strove for. That verse establishes ownership: your effort is yours and nobody else's. This one adds the question ownership does not answer, because a securely owned effort can still be pointed at nothing. Read together they close a loop — the striving is registered to you, and the direction it took is registered with it. Busyness is never the achievement; it is only the raw material.",
            "bn": "এটি 53:39-এর প্রাচীন ঘোষণার পাশে এসে বসে: মানুষ যা চেষ্টা করেছে তা ছাড়া তার জন্য কিছুই নেই। ওই আয়াত মালিকানা প্রতিষ্ঠা করে — আপনার প্রচেষ্টা আপনারই, অন্য কারও নয়। আর এই আয়াত যোগ করে সেই প্রশ্নটি, মালিকানা যার জবাব দেয় না; কারণ নিরাপদে নিজের বলে গণ্য একটি প্রচেষ্টাও শূন্যের দিকে তাক করা থাকতে পারে। দুটি একসঙ্গে পড়লে বৃত্তটি সম্পূর্ণ হয় — প্রচেষ্টা আপনার নামে লেখা হয়, আর তার অভিমুখও তার সঙ্গেই লেখা হয়। ব্যস্ততা কখনোই অর্জন নয়; তা কেবল কাঁচামাল।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Marks on Each Side",
          "bn": "দুই দিকে তিনটি করে চিহ্ন"
        },
        "p": [
          {
            "en": "The surah then divides the scattered strivings into two, and gives each side three marks. 92:5-6: he who gives, and has taqwa, and affirms al-husna, the best. 92:8-9: he who withholds, and thinks himself free of need, and denies al-husna. The first mark on each side is about wealth, the third about believing the reward is real, and the middle one is the tell — taqwa on one side, istighna on the other, the illusion of needing nobody.",
            "bn": "এরপর সূরাটি ছড়ানো প্রচেষ্টাগুলোকে দুই ভাগে ভাগ করে, আর প্রতিটি দিকে তিনটি করে চিহ্ন দেয়। 92:5-6: যে দান করে, আল্লাহকে ভয় করে, এবং 'আল-হুসনা' তথা উত্তম প্রতিদানকে সত্য মানে। 92:8-9: যে কৃপণতা করে, নিজেকে অভাবমুক্ত মনে করে, এবং 'আল-হুসনা'-কে অস্বীকার করে। দুই দিকেরই প্রথম চিহ্নটি সম্পদ নিয়ে, তৃতীয়টি উত্তম প্রতিদানকে সত্য মানা বা না-মানা নিয়ে; আর মাঝের চিহ্নটিই আসল পরিচায়ক — একদিকে তাক্বওয়া, অন্যদিকে 'ইস্তিগনা', অর্থাৎ কাউকে দরকার নেই এই বিভ্রম।"
          },
          {
            "en": "The two consequences are stated in one shape with one word changed: We shall ease him toward al-yusra, ease, in 92:7; We shall ease him toward al-usra, hardship, in 92:10. Easing somebody toward hardship is a deliberately jarring phrase. The commentators read it as a description of how habit works: the road a person keeps choosing becomes the road he can travel without effort, and the other road slowly stops being available to him at all.",
            "bn": "পরিণতি দুটি একই গঠনে বলা হয়েছে, কেবল একটি শব্দ বদলে: 92:7-এ 'আমি তার জন্য আল-ইউসরা তথা সহজ পথ সহজ করে দেব'; 92:10-এ 'আমি তার জন্য আল-উসরা তথা কঠিন পথ সহজ করে দেব'। কাউকে কাঠিন্যের দিকে সহজ করে দেওয়া — কথাটি ইচ্ছাকৃতভাবেই ধাক্কা দেয়। মুফাসসিরগণ একে অভ্যাসের বর্ণনা হিসেবে পড়েন: মানুষ যে পথ বারবার বেছে নেয়, সেটিই তার জন্য বিনা চেষ্টায় চলার পথ হয়ে যায়, আর অন্য পথটি ধীরে ধীরে তার নাগালের বাইরে চলে যেতে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Work, For It Is Made Easy",
          "bn": "আমল করো, তা সহজ করে দেওয়া হয়"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Ali ibn Abi Talib (RA) that the Companions were at a funeral in the Baqi cemetery when the Prophet ﷺ told them that there is none among them but his place in the Garden and his place in the Fire has already been written. They asked whether they should then rely on that. He answered: Work, for everyone will find easy that for which he was created. Then he recited these very verses, 92:5-10, as the proof.",
            "bn": "ইমাম বুখারী আলী ইবনে আবী তালিব (রাঃ) থেকে বর্ণনা করেন, সাহাবীগণ বাকী কবরস্থানে এক জানাযায় ছিলেন, তখন নবী ﷺ তাঁদের বলেন যে তাঁদের প্রত্যেকেরই জান্নাতের ঠিকানা ও জাহান্নামের ঠিকানা ইতিমধ্যেই লিখে দেওয়া হয়েছে। তাঁরা জিজ্ঞেস করলেন, তবে কি তাঁরা সেটির ওপর ভরসা করে বসে থাকবেন? তিনি উত্তর দিলেন: আমল করো, কারণ যাকে যে জন্য সৃষ্টি করা হয়েছে তার জন্য সেটিই সহজ করে দেওয়া হয়। এরপর তিনি প্রমাণ হিসেবে এই আয়াতগুলোই — 92:5-10 — তিলাওয়াত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Surah Ends",
          "bn": "সূরাটি যেভাবে শেষ হয়"
        },
        "p": [
          {
            "en": "92:17-21 closes with a portrait of the one kept furthest from the Fire: al-atqa, who gives his wealth yatazakka, purifying himself by it, who is not repaying anyone's favour, but seeks only the face of his Lord Most High — and he is going to be pleased. Notice the verb yatazakka, from the same root as 91:9. Giving is not described here as a transfer of money but as a method of cleaning the giver.",
            "bn": "92:17-21 শেষ হয় এমন একজনের প্রতিকৃতি দিয়ে, যাকে আগুন থেকে সবচেয়ে দূরে রাখা হবে: 'আল-আতক্বা', যে নিজের সম্পদ দান করে 'ইয়াতাযাক্কা' — অর্থাৎ তা দিয়ে নিজেকে পরিশুদ্ধ করতে; যে কারও অনুগ্রহের প্রতিদান দিচ্ছে না, বরং কেবল তার সর্বোচ্চ প্রতিপালকের সন্তুষ্টি চায় — আর সে অবশ্যই সন্তুষ্ট হবে। 'ইয়াতাযাক্কা' ক্রিয়াটি লক্ষ করুন, 91:9-এর সঙ্গে একই ধাতুমূল। দান এখানে টাকা হস্তান্তর হিসেবে নয়, বরং দাতাকে পরিষ্কার করার পদ্ধতি হিসেবে বর্ণিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing the Direction",
          "bn": "অভিমুখের হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "The verse asks a question that a calendar can answer honestly. Not how hard did I work this week, which almost everyone passes, but where did the week's effort point. Sort the hours into what serves only the next few years and what will still be standing after them, and the sorting is the tafsir. Two people at identical desks, identically tired, can be on opposite sides of 92:4, and neither of them can tell from the tiredness.",
            "bn": "আয়াতটি এমন এক প্রশ্ন করে, যার সৎ জবাব ক্যালেন্ডার দিতে পারে। প্রশ্নটি 'এই সপ্তাহে আমি কত পরিশ্রম করলাম' নয় — সেই পরীক্ষায় প্রায় সবাই পাস করে — বরং 'এই সপ্তাহের পরিশ্রম কোন দিকে তাক করা ছিল'। ঘণ্টাগুলোকে ভাগ করুন: কোনটি কেবল আগামী কয়েক বছরের কাজে লাগবে, আর কোনটি তারপরও দাঁড়িয়ে থাকবে; এই ভাগ করাটাই তাফসীর। একই টেবিলে বসা, সমান ক্লান্ত দুজন মানুষ 92:4-এর দুই বিপরীত পাশে থাকতে পারে, আর ক্লান্তি দেখে কেউই তা বুঝতে পারবে না।"
          },
          {
            "en": "The good news in the surah is that the sorting mark is small and daily. Giving, taqwa and believing that the best reward is real: none of these requires a change of career or circumstance, and all three can be started this afternoon. And the easing runs both ways, which means the first few deliberate steps in the better direction are the hardest ones you will have to take without help.",
            "bn": "সূরার সুসংবাদ হলো, ভাগ করার চিহ্নটি ছোট এবং দৈনন্দিন। দান করা, তাক্বওয়া, আর উত্তম প্রতিদান সত্য বলে বিশ্বাস করা — এর কোনোটির জন্যই পেশা বা পরিস্থিতি বদলাতে হয় না, আর তিনটিই আজ বিকেলে শুরু করা যায়। আর সহজ করে দেওয়ার নিয়মটি দুই দিকেই কাজ করে; অর্থাৎ ভালো দিকে সচেতনভাবে ফেলা প্রথম কয়েকটি পদক্ষেপই সবচেয়ে কঠিন, যেগুলো সাহায্য ছাড়াই ফেলতে হবে।"
          }
        ]
      }
    ]
  },
  "92:11": {
    "sections": [
      {
        "h": {
          "en": "Six Words After the Portrait",
          "bn": "ছবির শেষে ছয়টি শব্দ"
        },
        "p": [
          {
            "en": "Wa-ma yughni 'anhu maluhu idha taradda: and what will his wealth avail him when he falls? The verse is six Arabic words, and it closes the second of the two portraits that Surat al-Layl draws. The first, in 92:5 to 92:7, is of a person who gives. The second, in 92:8 to 92:10, is of the man who withholds, thinks himself free of need and denies al-husna, the best. Verse 92:11 is the last thing said about him.",
            "bn": "ওয়ামা ইউগনী আনহু মালুহু ইযা তারাদ্দা: সে যখন পড়ে যাবে, তার সম্পদ তখন তার কী কাজে আসবে? আরবিতে আয়াতটি ছয়টি শব্দের। সূরা লাইল দুই রকম মানুষের ছবি আঁকে, আর এ আয়াতে এসে দ্বিতীয় ছবিটা শেষ হয়। প্রথম ছবি ৯২:৫ থেকে ৯২:৭ পর্যন্ত, সেখানে আছে দানশীল মানুষ। দ্বিতীয় ছবি ৯২:৮ থেকে ৯২:১০ পর্যন্ত। সে কৃপণতা করে, নিজেকে কারও মুখাপেক্ষী ভাবে না, আর আল-হুসনা, অর্থাৎ উত্তমকে মিথ্যা বলে। তার সম্পর্কে শেষ কথাটি ৯২:১১।"
          },
          {
            "en": "The verse before it, 92:10, says he will be eased toward hardship, and the verse after it, 92:12, turns to another subject: upon Us is the guidance. Both are named here only to place the verse; this article stays with the words between them. Those words hold two questions the commentators work through. Is the little word ma a denial or a question? And what does taradda mean: to die, or to fall into the Fire? They differ, and their difference is kept here as they leave it.",
            "bn": "আগের আয়াত ৯২:১০ বলে, তার জন্য কঠিন পথ সহজ করে দেওয়া হবে। পরের আয়াত ৯২:১২ চলে যায় অন্য প্রসঙ্গে: পথ দেখানোর দায়িত্ব আমারই। আয়াতটির অবস্থান বোঝাতেই শুধু এ দুটির নাম এল। এ লেখা থাকবে মাঝখানের শব্দগুলো নিয়ে। সেখানে দুটি প্রশ্ন আছে, যা নিয়ে তাফসীরকারেরা আলোচনা করেছেন। ছোট্ট শব্দ মা কি অস্বীকৃতি, নাকি প্রশ্ন? আর তারাদ্দা মানে কী: মারা যাওয়া, নাকি আগুনে পড়ে যাওয়া? এ নিয়ে তাঁদের মতভেদ আছে। সে মতভেদ তাঁরা যেভাবে রেখে গেছেন, এখানেও সেভাবেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Denial or a Rebuke",
          "bn": "অস্বীকৃতি, নাকি ভর্ৎসনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi takes up the first question directly. Ma, he writes, can be read as a denial, jahd, meaning: his wealth will not avail him anything. It can also be read as a question whose meaning is rebuke, tawbikh: what thing will avail him when he perishes and falls into Jahannam! He sets the two side by side and does not choose. Both end in the same place, that the wealth does nothing for him, but by different roads: the first states it, the second demands an answer and leaves him without any.",
            "bn": "প্রথম প্রশ্নটা কুরতুবী সরাসরি তোলেন। তাঁর মতে মা শব্দটিকে অস্বীকৃতি, অর্থাৎ জাহদ হিসেবে পড়া যায়। তখন অর্থ দাঁড়ায়: তার সম্পদ তার কোনোই কাজে আসবে না। আবার একে এমন প্রশ্ন হিসেবেও পড়া যায়, যার আসল অর্থ ভর্ৎসনা, অর্থাৎ তাওবীখ: সে যখন ধ্বংস হয়ে জাহান্নামে পড়বে, তখন কোন জিনিসটা তার কাজে আসবে! দুটি পাঠ তিনি পাশাপাশি রাখেন, কোনোটিকে বেছে নেন না। দুই পথেই পৌঁছানো যায় একই জায়গায়: সম্পদ তার কিছুই করে না। তবে পথ আলাদা। প্রথমটি কথাটা জানিয়ে দেয়। দ্বিতীয়টি জবাব চায়, আর তাকে জবাবহীন দাঁড় করিয়ে রাখে।"
          },
          {
            "en": "At-Tabari's paraphrase takes the shape of a question: what thing will his wealth ward off from this man, who was stingy with his wealth and thought himself free of need of his Lord, on the Day of Resurrection, when he falls? He sets the scene on that Day. Al-Muyassar puts it as a flat statement: his wealth that he withheld will not benefit him when he falls into the Fire. Ma'arif al-Qur'an's English also reads a negation: and his wealth will not help him when he will fall down.",
            "bn": "তাবারীর ব্যাখ্যা প্রশ্নের আকারে সাজানো: যে লোক নিজের সম্পদ নিয়ে কৃপণতা করেছে আর নিজেকে তার রবের মুখাপেক্ষী ভাবেনি, কিয়ামতের দিন যখন সে পড়ে যাবে, তার সম্পদ তার থেকে কোন জিনিসটা ঠেকাবে? দৃশ্যটা তিনি রাখেন সেই দিনেই। মুয়াসসার কথাটা বলে সোজা বিবৃতিতে: যে সম্পদ সে আটকে রেখেছিল, আগুনে পড়ার সময় তা তার কোনো উপকারে আসবে না। মাআরিফুল কুরআনের ইংরেজি পাঠও না-বাচক: সে যখন পড়ে যাবে, তার সম্পদ তাকে সাহায্য করবে না।"
          },
          {
            "en": "The two translations shown with this verse in the app split the same way. The English asks: and what will his wealth avail him when he falls? The Bengali states: when he perishes, that is, dies, his hoarded wealth will be of no use at all. Al-Qurtubi allowed both readings of ma, so each rendering has a commentator behind it. Notice too that the Bengali has already settled the second question, glossing the fall as death; the commentators, as the next sections show, did not all settle it that way.",
            "bn": "অ্যাপে এ আয়াতের সঙ্গে যে দুটি অনুবাদ দেখানো হয়, সেগুলোও একইভাবে দুই দিকে গেছে। ইংরেজি অনুবাদ প্রশ্ন করে: সে যখন পড়ে যাবে, তার সম্পদ তার কী কাজে আসবে? বাংলা অনুবাদ সরাসরি বলে: যখন সে ধ্বংস হবে, অর্থাৎ মরবে, তখন তার সঞ্চিত সম্পদ কোনোই কাজে আসবে না। কুরতুবী মা শব্দের দুটি পাঠই মেনেছেন, তাই দুই অনুবাদের পেছনেই একজন তাফসীরকারের সমর্থন আছে। খেয়াল করুন, বাংলা অনুবাদ দ্বিতীয় প্রশ্নেরও মীমাংসা করে ফেলেছে, পতনকে বুঝিয়েছে মৃত্যু দিয়ে। পরের অংশগুলো দেখাবে, তাফসীরকারেরা সবাই এভাবে মীমাংসা করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Dropping Into Jahannam",
          "bn": "জাহান্নামে গড়িয়ে পড়া"
        },
        "p": [
          {
            "en": "On the second question at-Tabari says plainly that the people of interpretation differed over idha taradda. Some said it means: when he falls into Jahannam, saqata fiha fa-hawa, he dropped into it and plunged. He gives two reports for this. Abu Salih said of the verse: in Jahannam. Qatada said: when he falls into the Fire. Ibn Kathir carries the same reading from Abu Salih, and from Malik from Zayd ibn Aslam: when he falls into the Fire.",
            "bn": "দ্বিতীয় প্রশ্নে তাবারী খোলাখুলি বলেন, ইযা তারাদ্দা নিয়ে ব্যাখ্যাকারদের মধ্যে মতভেদ হয়েছে। কেউ কেউ বলেছেন, এর অর্থ: যখন সে জাহান্নামে পড়বে। সাকাতা ফীহা ফাহাওয়া, অর্থাৎ সে তাতে পড়ে নিচে তলিয়ে গেল। এ মতের পক্ষে তিনি দুটি বর্ণনা আনেন। আবু সালিহ আয়াতটি সম্পর্কে বলেছেন: জাহান্নামে। কাতাদা বলেছেন: যখন সে আগুনে পড়বে। ইবন কাসীরও একই মত আনেন আবু সালিহ থেকে, আর মালিকের সূত্রে যায়দ ইবন আসলাম থেকে: যখন সে আগুনে পড়বে।"
          },
          {
            "en": "Al-Qurtubi names Abu Salih and Zayd ibn Aslam for the same reading: he fell into Jahannam. Al-Baghawi names Qatada and Abu Salih: he plunged into Jahannam. Al-Muyassar, which names no authorities, writes this reading straight into its paraphrase: his wealth will not benefit him idha waqa'a fi al-nar, when he falls into the Fire. Across the texts read for this verse, then, the Fire reading has three named authorities behind it, Abu Salih, Qatada and Zayd ibn Aslam.",
            "bn": "কুরতুবী এ মতের জন্য আবু সালিহ আর যায়দ ইবন আসলামের নাম নেন: সে জাহান্নামে পড়ল। বাগাভী নাম নেন কাতাদা আর আবু সালিহের: সে জাহান্নামে তলিয়ে গেল। মুয়াসসার কোনো বর্ণনাকারীর নাম নেয় না, তবে এই অর্থটাই সরাসরি তার ব্যাখ্যায় বসিয়ে দেয়: ইযা ওয়াকাআ ফিন্নার, যখন সে আগুনে পড়বে, তখন তার সম্পদ তার কোনো উপকারে আসবে না। তাহলে এ আয়াতের জন্য পড়া লেখাগুলোয় আগুনে পড়ার ব্যাখ্যার পেছনে আছেন তিনজন বর্ণনাকারী: আবু সালিহ, কাতাদা আর যায়দ ইবন আসলাম।"
          },
          {
            "en": "At-Tabari then states his own weighing. The more correct of the two sayings, he writes, is that it means falling into Jahannam, because that is the known sense of taraddi. When death is meant, the usage is radiya fulan, so-and-so perished, and taradda is seldom said for it. His argument rests on how the word is used: the form with the added ta' and doubled dal is, for him, the verb of falling. That is at-Tabari's preference, reported as his; the other reading has its own authorities.",
            "bn": "এরপর তাবারী নিজের বিচার জানান। তাঁর মতে দুটি মতের মধ্যে বেশি সঠিক হলো জাহান্নামে পড়ার অর্থ। কারণ তারাদ্দী শব্দের পরিচিত অর্থ এটাই। মৃত্যু বোঝাতে চাইলে বলা হয় রাদিয়া ফুলান, অর্থাৎ অমুক ধ্বংস হলো। সে অর্থে তারাদ্দা খুব কমই বলা হয়। তাঁর যুক্তির ভিত্তি শব্দের ব্যবহার। বাড়তি তা আর দ্বিত্ব দাল-ওয়ালা রূপটি তাঁর কাছে পড়ে যাওয়ার ক্রিয়া। এটা তাবারীর নিজের পছন্দ, তাঁর নামেই বলা হলো। অন্য ব্যাখ্যাটির পেছনেও নিজস্ব বর্ণনাকারী আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Simply When He Dies",
          "bn": "নাকি শুধু মৃত্যুর মুহূর্ত"
        },
        "p": [
          {
            "en": "At-Tabari introduces the second reading with the words: others said, rather it means when he dies. All three reports he gives for it go back to Mujahid, two through Layth and the third through Ibn Abi Najih, and each says the same thing: idha mata, when he dies. Ibn Kathir's brief note on the verse opens with this reading, naming Mujahid before the others. Al-Baghawi does the same: Mujahid said, when he dies; only then does he give the Fire reading from Qatada and Abu Salih.",
            "bn": "দ্বিতীয় ব্যাখ্যা তাবারী শুরু করেন এ কথায়: অন্যরা বলেছেন, বরং এর অর্থ, যখন সে মারা যাবে। এর পক্ষে তিনি তিনটি বর্ণনা আনেন, তিনটিই মুজাহিদ পর্যন্ত পৌঁছায়। দুটি এসেছে লাইসের সূত্রে, বাকিটি ইবন আবী নাজীহের সূত্রে। প্রতিটির কথা একই: ইযা মাতা, যখন সে মারা যাবে। ইবন কাসীরের ছোট্ট টীকাও শুরু হয় এই অর্থ দিয়ে, অন্যদের আগে তিনি মুজাহিদের নাম নেন। বাগাভীও তাই করেন: মুজাহিদ বলেছেন, যখন সে মারা যাবে। আগুনে পড়ার ব্যাখ্যা তিনি আনেন এরপরে, কাতাদা আর আবু সালিহের নামে।"
          },
          {
            "en": "Al-Qurtubi also leads with this sense: ay mata, that is, he died. He grounds it in the language: radiya al-rajul yarda radan, said of a man when he perished. He quotes a line of verse in support, in which a poet says he turned desire away from them min khashyat al-rada, for fear of ruin. Only after that does he give the Fire reading from Abu Salih and Zayd ibn Aslam. So al-Qurtubi opens with death, while at-Tabari, weighing the same verb, prefers the Fire.",
            "bn": "কুরতুবীও শুরু করেন এই অর্থ দিয়ে: আই মাতা, অর্থাৎ সে মারা গেল। ভাষা থেকে তিনি এর ভিত্তি দেখান: রাদিয়ার রাজুলু ইয়ারদা রাদান, কেউ ধ্বংস হলে তার সম্পর্কে এভাবে বলা হয়। সমর্থনে তিনি একটি কবিতার চরণ আনেন। সেখানে কবি বলছেন, মিন খাশইয়াতির রাদা, ধ্বংসের ভয়ে তিনি তাদের দিক থেকে কামনা ফিরিয়ে নিয়েছেন। এরপরেই কেবল তিনি আবু সালিহ আর যায়দ ইবন আসলামের নামে আগুনে পড়ার ব্যাখ্যা আনেন। মানে কুরতুবী শুরু করেন মৃত্যু দিয়ে, আর একই ক্রিয়া বিচার করে তাবারী পছন্দ করেন আগুনের অর্থ।"
          },
          {
            "en": "As-Sa'di folds two verbs into his paraphrase: idha halaka wa mata, when he perished and died. He does not mention the Fire at this point. His attention goes instead to what becomes of the wealth after its owner has gone, a point taken up in the last section of this article. Between them, then, the death reading is carried by Mujahid's reports in three commentaries, by al-Qurtubi's own lead gloss, and by as-Sa'di's paraphrase, while the Fire reading has at-Tabari's preference and al-Muyassar's wording.",
            "bn": "সা'দী তাঁর ব্যাখ্যায় দুটি ক্রিয়া একসঙ্গে রাখেন: ইযা হালাকা ওয়া মাতা, যখন সে ধ্বংস হলো ও মারা গেল। এখানে তিনি আগুনের কথা তোলেন না। তাঁর মনোযোগ বরং মালিক চলে যাওয়ার পর সম্পদের কী হয়, সেদিকে। সে কথা এ লেখার শেষ অংশে আসবে। সব মিলিয়ে মৃত্যুর অর্থের পেছনে আছে তিনটি তাফসীরে আনা মুজাহিদের বর্ণনা, কুরতুবীর প্রথম ব্যাখ্যা আর সা'দীর ভাষ্য। আগুনের অর্থের পেছনে আছে তাবারীর পছন্দ আর মুয়াসসারের ভাষা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verb That Holds Both",
          "bn": "দুই অর্থ ধরে রাখা ক্রিয়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi's word notes show why the verse can carry both readings. Radiya fi al-bi'r wa taradda is said of someone who falls into a well, or who tumbles headlong from a mountain. Ma adri ayna radiya means: I do not know where he has gone. And from the same sense, he says, comes the word al-mutaraddiya. Falling, perishing and disappearing sit together in this verb, and each of the two readings takes hold of a part of it.",
            "bn": "কুরতুবীর শব্দ-টীকা দেখায়, আয়াতটি কেন দুটি অর্থই বইতে পারে। কেউ কুয়ায় পড়ে গেলে বা পাহাড় থেকে গড়িয়ে পড়লে বলা হয়: রাদিয়া ফিল বি'রি ওয়া তারাদ্দা। মা আদরী আইনা রাদিয়া মানে: জানি না সে কোথায় গেল। তিনি বলেন, এ অর্থ থেকেই এসেছে আল-মুতারাদ্দিয়া শব্দটি। পড়ে যাওয়া, ধ্বংস হওয়া আর হারিয়ে যাওয়া, তিনটিই এ ক্রিয়ার ভেতরে পাশাপাশি থাকে। দুটি ব্যাখ্যার প্রতিটি এর একেকটা দিক আঁকড়ে ধরে।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the literal sense in its English as 'to fall into a pit and perish', and then declines to narrow it. Nothing, not even his wealth, will save him, it says, 'whether in grave after his death, or on the Day of Judgment, when he will be falling into the abyss of Hell.' Its note joins the two readings, keeping death and the Fire as two moments of a single fall. That is Ma'arif's position. At-Tabari, as shown above, weighed the two and chose.",
            "bn": "মাআরিফুল কুরআন তার ইংরেজি পাঠে শব্দটির আক্ষরিক অর্থ দেয়: গর্তে পড়ে ধ্বংস হওয়া। তারপর অর্থটাকে আর সংকুচিত করে না। সেখানে বলা হয়েছে, কোনো কিছুই, এমনকি তার সম্পদও, তাকে বাঁচাতে পারবে না: না মৃত্যুর পর কবরে, না বিচারের দিন, যখন সে জাহান্নামের অতলে পড়তে থাকবে। এ টীকা দুটি ব্যাখ্যাকে জুড়ে দেয়। মৃত্যু আর আগুন তার কাছে একই পতনের দুটি মুহূর্ত। এটা মাআরিফের মত। ওপরে যেমন দেখা গেছে, তাবারী দুটিকে ওজন করে একটি বেছে নিয়েছিলেন।"
          },
          {
            "en": "This article does not choose between them. Each reading has named authorities in the texts fetched for this verse, and on either reading the verse says the same thing about the wealth: at the moment of the fall it is of no use to him. What the readings change is where the reader is asked to stand. On Mujahid's reading it is a deathbed, with the wealth left in the room. On Abu Salih's and Qatada's it is the edge of the Fire.",
            "bn": "এ লেখা কোনো একটিকে বেছে নেয় না। এ আয়াতের জন্য সংগ্রহ করা লেখাগুলোয় প্রতিটি ব্যাখ্যার পেছনে নাম-জানা বর্ণনাকারী আছেন। আর যে ব্যাখ্যাই ধরা হোক, সম্পদ নিয়ে আয়াতের কথা একই: পতনের মুহূর্তে তা তার কোনো কাজে আসে না। ব্যাখ্যা বদলালে বদলায় শুধু পাঠকের দাঁড়ানোর জায়গা। মুজাহিদের ব্যাখ্যায় জায়গাটা মৃত্যুশয্যা, সম্পদ পড়ে থাকে ঘরেই। আবু সালিহ আর কাতাদার ব্যাখ্যায় জায়গাটা আগুনের কিনারা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Behind the Pronoun",
          "bn": "সর্বনামের আড়ালের মানুষ"
        },
        "p": [
          {
            "en": "The pronoun in 'anhu, from him, and in maluhu, his wealth, points back to the man of 92:8 to 92:10. The commentators make the link explicit, each in his own words. At-Tabari: this man who was stingy with his wealth and thought himself free of need of his Lord. Al-Baghawi: his wealth, alladhi bakhila bihi, which he withheld. As-Sa'di: the wealth which made him transgress, by which he thought himself free of need, and which he withheld.",
            "bn": "আনহু, তার থেকে, আর মালুহু, তার সম্পদ: এ দুই শব্দের সর্বনাম ফিরে যায় ৯২:৮ থেকে ৯২:১০ আয়াতের মানুষটির দিকে। তাফসীরকারেরা যোগসূত্রটা স্পষ্ট করে দেন, প্রত্যেকে নিজের ভাষায়। তাবারী বলেন: সেই লোক, যে নিজের সম্পদ নিয়ে কৃপণতা করেছে আর নিজেকে তার রবের মুখাপেক্ষী ভাবেনি। বাগাভী বলেন: তার সম্পদ, আল্লাযী বাখিলা বিহী, যা সে আটকে রেখেছিল। সা'দী বলেন: সেই সম্পদ, যা তাকে সীমালঙ্ঘনে ঠেলে দিয়েছিল, যার জোরে সে নিজেকে কারও মুখাপেক্ষী ভাবেনি, আর যা নিয়ে সে কৃপণতা করেছিল।"
          },
          {
            "en": "Al-Muyassar restates the whole passage before reaching the verse: whoever withheld his wealth, thought himself free of need of his Lord's recompense, and denied la ilaha illa Allah, what it points to and the recompense that follows from it. There is a small difference worth noticing. At-Tabari has the man free of need of his Lord; al-Muyassar, free of need of his Lord's recompense. Both make the wealth of 92:11 the same wealth that was withheld in 92:8.",
            "bn": "আয়াতে পৌঁছানোর আগে মুয়াসসার পুরো অংশটা নতুন করে বলে নেয়: যে নিজের সম্পদ আটকে রেখেছে, নিজেকে তার রবের প্রতিদানের মুখাপেক্ষী ভাবেনি, আর লা ইলাহা ইল্লাল্লাহকে মিথ্যা বলেছে, সেই সঙ্গে এর নির্দেশিত সত্য আর এর ফলে যে প্রতিদান আসে তাকেও। এখানে ছোট্ট একটা পার্থক্য চোখে পড়ার মতো। তাবারীর ভাষায় লোকটি নিজেকে রবের মুখাপেক্ষী ভাবেনি। মুয়াসসারের ভাষায়, রবের প্রতিদানের মুখাপেক্ষী ভাবেনি। তবে দুজনের কাছেই ৯২:১১ আয়াতের সম্পদ সেই সম্পদ, যা ৯২:৮ আয়াতে আটকে রাখা হয়েছিল।"
          },
          {
            "en": "None of the commentaries fetched for this verse names the man, and none of them gives an occasion of revelation for it. So this article names nobody and supplies no story. Nor does any of them attach a hadith to this verse. The narration discussed in the article on 92:4 concerns 92:5 to 92:10 and belongs with those verses; it is not attached to this verse in the texts read for it, and it is not repeated here.",
            "bn": "এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর লোকটির নাম বলে না, কোনোটিই এর নাজিলের কোনো উপলক্ষ বর্ণনা করে না। তাই এ লেখাও কারও নাম নেয় না, কোনো কাহিনি জোড়ে না। এর কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীসও যুক্ত করে না। ৯২:৪ আয়াতের লেখায় যে বর্ণনার আলোচনা আছে, তা ৯২:৫ থেকে ৯২:১০ আয়াত নিয়ে, আর সেটা ওই আয়াতগুলোরই প্রসঙ্গ। এ আয়াতের জন্য পড়া লেখাগুলোয় তা এ আয়াতের সঙ্গে যুক্ত নয়, তাই এখানে তার পুনরাবৃত্তি হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Verdict",
          "bn": "ছবি, রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a man marked by three traits in 92:8 to 92:10, withholding, thinking himself free of need and denying the best, and the end this verse sets before him. It licenses nothing against any living person or community. It names nobody, and it gives no reader the standing to look at a neighbour's wealth, or a rich family, or a whole class of people, and announce where they will fall.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি শুধু সেটুকুই বর্ণনা করে, যা আয়াতে আছে। ৯২:৮ থেকে ৯২:১০ আয়াতে তিনটি বৈশিষ্ট্যে চেনানো একজন মানুষ: কৃপণতা, নিজেকে কারও মুখাপেক্ষী না ভাবা আর উত্তমকে মিথ্যা বলা। আর এ আয়াত তার সামনে যে পরিণতি রাখে, সেটুকু। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। এখানে কারও নাম নেই। প্রতিবেশীর সম্পদ, কোনো ধনী পরিবার বা গোটা কোনো শ্রেণির দিকে তাকিয়ে তারা কোথায় গিয়ে পড়বে, সে ঘোষণা দেওয়ার অধিকার এ আয়াত কোনো পাঠককে দেয় না।"
          },
          {
            "en": "Nor do the commentaries read here make wealth itself the fault. In each of them the wealth in question is tied to the withholding: the wealth he was stingy with, the wealth by which he thought himself free of need. What the verse answers, on any of their readings, is a stance toward wealth and toward Allah, held by the man the passage portrays. Whether anybody alive holds that stance is not for a reader to decide about someone else; the verse hands the question back to whoever is reading it.",
            "bn": "এখানে পড়া তাফসীরগুলো সম্পদকেই দোষী বানায় না। প্রতিটিতে সম্পদের কথা এসেছে কৃপণতার সঙ্গে বাঁধা অবস্থায়: যে সম্পদ নিয়ে সে কৃপণতা করেছে, যার জোরে সে নিজেকে কারও মুখাপেক্ষী ভাবেনি। তাঁদের যে ব্যাখ্যাই ধরা হোক, আয়াতের জবাব সম্পদ আর আল্লাহর প্রতি এক বিশেষ মনোভাবের উদ্দেশে, যে মনোভাব এ অংশে আঁকা মানুষটির। আজ কোনো জীবিত মানুষের মধ্যে সে মনোভাব আছে কি না, অন্যের বেলায় তা ঠিক করার দায় পাঠকের নয়। আয়াত প্রশ্নটা ফিরিয়ে দেয় যিনি পড়ছেন, তাঁর কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent Ahead or Left Behind",
          "bn": "আগে পাঠানো, নাকি পেছনে ফেলে যাওয়া"
        },
        "p": [
          {
            "en": "As-Sa'di draws the practical line from the verse. When he perishes and dies, he writes, nothing goes with him except his righteous deeds. As for his wealth from which he did not pay what was due, a clause the printed text sets in square brackets, it becomes a burden, wabal, upon him, since he sent none of it ahead for his Hereafter. On as-Sa'di's reading the wealth does more than fail to help. It turns into a weight on its owner.",
            "bn": "সা'দী আয়াত থেকে বাস্তব শিক্ষাটা টেনে আনেন। তিনি লেখেন, যখন সে ধ্বংস হয় ও মারা যায়, তখন তার নেক আমল ছাড়া আর কিছুই তার সঙ্গে যায় না। আর যে সম্পদ থেকে সে প্রাপ্য হক আদায় করেনি (ছাপা পাঠে এ অংশটুকু বন্ধনীর ভেতরে), সেটা তার জন্য বোঝা, ওয়াবাল হয়ে দাঁড়ায়। কারণ আখিরাতের জন্য সে তার কিছুই আগে পাঠায়নি। সা'দীর ব্যাখ্যায় তাই সম্পদ শুধু কাজে না লেগে থেমে থাকে না। মালিকের ঘাড়ে তা ভার হয়ে চাপে।"
          },
          {
            "en": "That gives the reader a test that needs no verdict on anybody else. On as-Sa'di's terms, what I own divides into what I send ahead and what I leave behind. The man of 92:8 to 92:10 thought his money made him free of need; the verse asks what it did for him when he fell. The question is short enough to carry through a day: of what is in my hands now, how much would still be of any use to me at that moment?",
            "bn": "এতে পাঠক এমন একটা পরীক্ষা পান, যার জন্য অন্য কারও ওপর রায় দিতে হয় না। সা'দীর হিসাবে আমার সব সম্পদ দুই ভাগে ভাগ হয়: যা আগে পাঠাই, আর যা পেছনে রেখে যাই। ৯২:৮ থেকে ৯২:১০ আয়াতের মানুষটি ভেবেছিল, টাকাই তাকে কারও মুখাপেক্ষী হওয়া থেকে মুক্ত রেখেছে। আয়াত জানতে চায়, পতনের সময় সেই টাকা তার জন্য কী করল। প্রশ্নটা এত ছোট যে সারা দিন সঙ্গে রাখা যায়: এ মুহূর্তে আমার হাতে যা আছে, তার কতটুকু সেই সময়ে আমার কোনো কাজে আসবে?"
          }
        ]
      }
    ]
  }
});
