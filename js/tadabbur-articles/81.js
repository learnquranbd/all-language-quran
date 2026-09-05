/**
 * Tadabbur long-form articles — surah 81.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "81:26": {
    "sections": [
      {
        "h": {
          "en": "Two Words",
          "bn": "দুটি শব্দ"
        },
        "p": [
          {
            "en": "The Arabic is two words: fa-ayna tadhhabun. The first is the connective fa, and so, written joined to ayna, where; the second is a verb in the second-person plural, are you going. There is no noun, no object and no destination named anywhere in it. A question that short can only work if everything it depends on has already been said, and in this surah all of it has.",
            "bn": "আরবিতে এটি দুটি শব্দ: 'ফাআইনা তাযহাবূন'। প্রথমটি সংযোজক 'ফা' — অর্থাৎ 'কাজেই' — যা 'আইনা' অর্থাৎ 'কোথায়'-এর সঙ্গে জুড়ে লেখা; দ্বিতীয়টি মধ্যম পুরুষ বহুবচনের ক্রিয়াপদ, 'তোমরা চলেছ'। এর কোথাও কোনো বিশেষ্য নেই, কোনো কর্ম নেই, কোনো গন্তব্যের নামও নেই। এত ছোট প্রশ্ন তখনই কাজ করতে পারে যখন এটি যার উপর দাঁড়িয়ে সেসব আগেই বলা হয়ে গেছে — আর এই সূরায় সেসব বলা হয়েছে।"
          },
          {
            "en": "The verb is worth weighing. Dhahaba is to go, to depart, plain motion, and the question is built on it rather than on believing or thinking. It does not ask what you hold to be true. It asks which way you are moving, which is a different question and often has a different answer, since people routinely walk in a direction they would not defend if they were asked to describe it aloud.",
            "bn": "ক্রিয়াপদটি ভেবে দেখার মতো। 'যাহাবা' মানে যাওয়া, রওনা হওয়া — নিছক চলা; আর প্রশ্নটি গড়া হয়েছে সেই চলার উপর, বিশ্বাস বা চিন্তার উপর নয়। এটি জিজ্ঞেস করে না, তুমি কী সত্য বলে মানো। এটি জিজ্ঞেস করে, তুমি কোন দিকে চলছ — যা আলাদা প্রশ্ন এবং প্রায়ই এর উত্তরও আলাদা; কারণ মানুষ নিয়মিতভাবেই এমন দিকে হাঁটে, মুখে বর্ণনা করতে বললে যে দিকটির পক্ষে সে দাঁড়াত না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Question Follows",
          "bn": "প্রশ্নটি কীসের পরে আসে"
        },
        "p": [
          {
            "en": "The surah has been building for twenty-five verses. It opens with a run of clauses describing the world coming apart — the sun wound up, the stars falling, the mountains moved, the seas set ablaze, the pages spread open — and closes that stretch in 81:14 with a soul knowing what it has brought. Then come oaths on the retreating stars, the night as it closes in and the dawn as it breathes.",
            "bn": "সূরাটি পঁচিশ আয়াত ধরে গড়ে উঠছিল। এটি শুরু হয় একের পর এক বাক্যে জগৎ ভেঙে পড়ার বর্ণনা দিয়ে — সূর্য গুটিয়ে যাওয়া, তারা খসে পড়া, পাহাড় সরে যাওয়া, সমুদ্র উত্তাল হয়ে ওঠা, আমলনামা খুলে ধরা — আর সেই ধারা শেষ হয় 81:14-এ, যেখানে প্রত্যেক প্রাণ জেনে যাবে সে কী নিয়ে এসেছে। তারপর আসে শপথ: পিছিয়ে যাওয়া তারকারাজির, ঘনিয়ে আসা রাতের এবং শ্বাস নেওয়া ভোরের।"
          },
          {
            "en": "What the oaths introduce is a defence. 81:19-21 describe the one who brings the message as a noble messenger, possessed of power, secure in rank with the Owner of the Throne, obeyed there and trustworthy. Then the charges are answered one at a time: 81:22 says your companion is not mad, 81:23 says he has already seen him on the clear horizon, 81:24 says he is not stingy with the unseen, and 81:25 says this is not the speech of an accursed devil.",
            "bn": "সেই শপথগুলো যা উপস্থাপন করে তা হলো একটি প্রতিরক্ষা। 81:19-21 বাণীবাহককে বর্ণনা করে এক সম্মানিত বার্তাবাহক হিসেবে — শক্তিধর, আরশের মালিকের কাছে সুপ্রতিষ্ঠিত, সেখানে আনুগত্যপ্রাপ্ত ও বিশ্বস্ত। এরপর অভিযোগগুলোর জবাব আসে একটি একটি করে: 81:22 বলে তোমাদের সঙ্গী পাগল নয়, 81:23 বলে তিনি তাঁকে সুস্পষ্ট দিগন্তে দেখেছেন, 81:24 বলে তিনি গায়েবের ব্যাপারে কৃপণ নন, আর 81:25 বলে এটি কোনো অভিশপ্ত শয়তানের কথা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Said to Someone Off the Road",
          "bn": "পথভ্রষ্ট পথিককে বলা কথা"
        },
        "p": [
          {
            "en": "With the objections gone, the question follows as a consequence, and that is the work the fa is doing. Nothing has been left for a listener to hold on to, so where is he going? The mufassirun read the phrase as the ordinary Arabic said to a traveller who has stepped off the road: which way are you taking, now that the road has been pointed out to you? It is not a request for information. Nobody who asks it expects to be told a place name, and no answer is recorded in the surah.",
            "bn": "আপত্তিগুলো সরে যাওয়ার পর প্রশ্নটি আসে একটি পরিণতি হিসেবে — 'ফা' শব্দটি ঠিক এই কাজটিই করছে। শ্রোতার আঁকড়ে ধরার মতো কিছুই আর অবশিষ্ট নেই, তাহলে সে চলেছে কোথায়? মুফাসসিরগণ বাক্যটিকে পড়েন সেই সাধারণ আরবি কথার মতো, যা বলা হয় পথ থেকে সরে যাওয়া পথিককে: পথ তো তোমাকে দেখিয়ে দেওয়া হলো, এখন তুমি কোন দিকে যাচ্ছ? এটি কোনো তথ্য জানতে চাওয়া প্রশ্ন নয়। যে এ প্রশ্ন করে সে কোনো জায়গার নাম শোনার আশা করে না, আর সূরাতেও কোনো উত্তর লিপিবদ্ধ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Answered Within Three Verses",
          "bn": "তিন আয়াতের মধ্যেই উত্তর"
        },
        "p": [
          {
            "en": "The Quran does not leave its own question hanging. 81:27 answers in the negative direction first: this is nothing but a reminder to the worlds. 81:28 then names who the road is open to, whoever among you wills to go straight. And 81:29 closes any boast about that willing: you do not will unless Allah, Lord of the worlds, wills. Question, road, permission and the limit of the human will, inside three verses.",
            "bn": "কুরআন নিজের প্রশ্নটি ঝুলিয়ে রাখে না। 81:27 প্রথমে নেতিবাচক দিক থেকে উত্তর দেয়: এটি বিশ্ববাসীর জন্য উপদেশ ছাড়া কিছুই নয়। এরপর 81:28 জানায় পথটি কার জন্য খোলা — তোমাদের মধ্যে যে সোজা পথে চলতে চায় তার জন্য। আর 81:29 সেই চাওয়া নিয়ে কোনো অহংকারের পথ বন্ধ করে দেয়: বিশ্বজগতের প্রতিপালক আল্লাহ না চাইলে তোমরা চাইতেও পারো না। প্রশ্ন, পথ, অনুমতি আর মানুষের ইচ্ছার সীমা — সবই তিন আয়াতের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked of a Crowd",
          "bn": "ভিড়কে করা প্রশ্ন"
        },
        "p": [
          {
            "en": "Notice the two numbers. The question is plural, where are you all going, while the answer in 81:28 narrows to liman sha'a minkum, for whoever among you wills. A crowd is asked and an individual answers. That is usually how it works. Drift is collective, absorbed from whoever happens to be walking alongside you, whereas the turn is made alone and has to be made by somebody with a name.",
            "bn": "সংখ্যা দুটি লক্ষ করুন। প্রশ্নটি বহুবচনে — তোমরা সবাই কোথায় চলেছ; অথচ 81:28-এর উত্তর সংকুচিত হয়ে আসে 'লিমান শাআ মিনকুম'-এ — তোমাদের মধ্যে যে চায় তার জন্য। প্রশ্ন করা হয় ভিড়কে, উত্তর দেয় একজন। সাধারণত এভাবেই ঘটে। ভেসে যাওয়া সমষ্টিগত — পাশে যারা হাঁটছে তাদের কাছ থেকেই তা শুষে নেওয়া হয়; কিন্তু মোড় ফেরাটা একা করতে হয়, আর তা করতে হয় নাম আছে এমন কাউকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Device for Stopping",
          "bn": "থামার একটি উপায়"
        },
        "p": [
          {
            "en": "As a practice the verse works as a stopping device rather than a doctrine. It is short enough to be recalled in the middle of an action, and it asks for a destination rather than a defence. Much of what fills a life has a direction that was never chosen — inherited, drifted into, or agreed to by not objecting. The verse does not accuse anyone of choosing badly; it asks whether the direction was chosen at all. Two verses on, it supplies the reason the question is worth stopping for: 81:28 says the straight road stands open to whoever among you wills.",
            "bn": "অনুশীলন হিসেবে আয়াতটি কোনো মতবাদের মতো নয়, বরং থামিয়ে দেওয়ার একটি উপায়ের মতো কাজ করে। এটি এত ছোট যে কাজের মাঝপথেই মনে পড়ে যায়, আর এটি সাফাই নয়, গন্তব্য জানতে চায়। জীবনের যা কিছু দিয়ে ভরা থাকে, তার অনেকটারই দিক কখনো বেছে নেওয়া হয়নি — তা উত্তরাধিকারে পাওয়া, ভেসে ভেসে এসে পড়া, কিংবা সে সময় আপত্তি না করেই মেনে নেওয়া। আয়াতটি কাউকে ভুল বেছে নেওয়ার দায়ে অভিযুক্ত করে না; এটি জিজ্ঞেস করে, দিকটি আদৌ বেছে নেওয়া হয়েছিল কি না। আর দুই আয়াত পরেই এটি জানিয়ে দেয়, প্রশ্নটির জন্য থামা কেন সার্থক — কারণ 81:28 বলে, তোমাদের মধ্যে যে চায় তার জন্য সোজা পথটি খোলাই আছে।"
          }
        ]
      }
    ]
  }
});
