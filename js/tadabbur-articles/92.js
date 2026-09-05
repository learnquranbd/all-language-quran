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
  }
});
