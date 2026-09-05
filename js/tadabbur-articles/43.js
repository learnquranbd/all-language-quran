/**
 * Tadabbur long-form articles — surah 43.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "43:32": {
    "sections": [
      {
        "h": {
          "en": "The Objection It Answers",
          "bn": "যে আপত্তির জবাব"
        },
        "p": [
          {
            "en": "This verse is a reply, and the objection it replies to is quoted a line earlier. In 43:31 they said: why was this Quran not sent down upon a great man from one of the two cities? Greatness, in that sentence, means wealth and standing. Their complaint was not about the message but about the messenger's bank balance and clan.",
            "bn": "এই আয়াতটি একটি জবাব, আর যে আপত্তির জবাব তা এক লাইন আগেই উদ্ধৃত। 43:31 আয়াতে তারা বলেছিল: এই কুরআন দুই জনপদের কোনো গণ্যমান্য ব্যক্তির উপর কেন নাযিল হলো না? সেই বাক্যে 'গণ্যমান্য' মানে সম্পদ ও প্রতিপত্তি। তাদের অভিযোগ বার্তা নিয়ে ছিল না, ছিল বার্তাবাহকের সম্পদ ও বংশমর্যাদা নিয়ে।"
          },
          {
            "en": "So the answer opens: a-hum yaqsimuna rahmata rabbik — do they distribute the mercy of your Lord? The mufassirun read that mercy as prophethood itself, which is what the objection was about. The verse is therefore not a general lecture on wealth. It is an answer to people who thought the appointment of a prophet should follow the same rankings they used among themselves.",
            "bn": "তাই জবাব শুরু হয় এভাবে: আহুম ইয়াক্‌সিমূনা রাহমাতা রাব্বিক — তোমার প্রতিপালকের রহমত কি তারা বণ্টন করে? মুফাসসিরগণ এখানে 'রহমত' বলতে নবুয়তকেই বোঝেন, কারণ আপত্তিটি ছিল সেটি নিয়েই। অর্থাৎ আয়াতটি সম্পদ নিয়ে সাধারণ কোনো বক্তৃতা নয়। এটি সেই মানুষদের জবাব যারা ভেবেছিল, নবী নিয়োগও তাদের নিজেদের ব্যবহৃত মর্যাদাক্রম মেনেই হওয়া উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument From the Smaller Case",
          "bn": "ছোট দৃষ্টান্ত থেকে যুক্তি"
        },
        "p": [
          {
            "en": "Nahnu qasamna baynahum ma'ishatahum. The pronoun nahnu is placed in front of the verb, which in Arabic restricts the doing to the one named: We, and no one else, apportioned it. And the thing apportioned is deliberately modest. Not thrones or empires — ma'ishah, from 'aysh, living: the daily means a person lives on, the trade and the wage and the harvest.",
            "bn": "নাহনু কাসামনা বাইনাহুম মা'ঈশাতাহুম। সর্বনাম 'নাহনু' বসানো হয়েছে ক্রিয়ার আগে, যা আরবিতে কাজটিকে কেবল উল্লিখিত সত্তার মধ্যেই সীমাবদ্ধ করে: আমিই, অন্য কেউ নয়, তা বণ্টন করেছি। আর যা বণ্টিত হয়েছে তা ইচ্ছাকৃতভাবেই সাধারণ। সিংহাসন বা সাম্রাজ্য নয় — 'মা'ঈশাহ', যা এসেছে ''আইশ' অর্থাৎ জীবনযাপন থেকে: মানুষ যা দিয়ে দিন চালায়, তার ব্যবসা, মজুরি ও ফসল।"
          },
          {
            "en": "The argument runs from the smaller case to the larger. You did not set your own livelihood; the work available to you, the household you were born into, the health you woke up with, none of that was assigned by you. If the lesser distribution was never in your hands, the appointment of a prophet certainly is not. The objectors were auditing a ledger they had no signature on.",
            "bn": "যুক্তিটি চলে ছোট দৃষ্টান্ত থেকে বড়টির দিকে। নিজের জীবিকা আপনি নিজে ঠিক করেননি; যে কাজ আপনার নাগালে আছে, যে পরিবারে আপনার জন্ম, যে স্বাস্থ্য নিয়ে আপনি ঘুম থেকে উঠেছেন — কোনোটিই আপনার নির্ধারণ করা নয়। ছোট বণ্টনটিই যদি কখনো আপনার হাতে না থাকে, তবে নবী নিয়োগ তো নিশ্চয়ই নয়। আপত্তিকারীরা এমন এক খতিয়ান যাচাই করছিল যেখানে তাদের সইয়ের কোনো জায়গা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Degrees, and Mutual Service",
          "bn": "মর্যাদা ও পারস্পরিক সেবা"
        },
        "p": [
          {
            "en": "Wa rafa'na ba'dahum fawqa ba'din darajat — and We raised some of them above others in degrees. The two terms are ba'd and ba'd, some and some: indefinite, unnamed, and stated in both directions. Nobody is identified as the permanently upper party. The elevation is described as darajat within ma'ishah in the life of this world, which the verse has already bounded as belonging to this world only.",
            "bn": "ওয়া রাফা'না বা'দাহুম ফাওকা বা'দিন দারাজাত — আর মর্যাদায় আমি এককে অন্যের উপরে উন্নীত করেছি। এখানে দুই পক্ষই 'বা'দ' ও 'বা'দ', অর্থাৎ কেউ ও কেউ: অনির্দিষ্ট, নামহীন, এবং উভয় দিক থেকেই বলা। কাউকেই চিরস্থায়ী উঁচু পক্ষ হিসেবে চিহ্নিত করা হয়নি। এই উন্নীতকরণকে বলা হয়েছে পার্থিব জীবনের 'মা'ঈশাহ'-এর ভেতরকার 'দারাজাত', আর আয়াতটি আগেই তার সীমা টেনে দিয়েছে এই দুনিয়ার মধ্যে।"
          },
          {
            "en": "Then the purpose: li-yattakhidha ba'duhum ba'dan sukhriyya. The commentators derive sukhriyy from taskhir, being put to work for another, and read the clause as mutual employment rather than one class owning another. The grammar makes it reciprocal — some of them, of some of them — so the builder needs the farmer and the farmer needs the builder. Difference is presented as the reason people cannot live alone.",
            "bn": "তারপর উদ্দেশ্য: লিইয়াত্তাখিযা বা'দুহুম বা'দান সুখরিয়্যা। মুফাসসিরগণ 'সুখরিয়্য' শব্দটিকে 'তাসখীর' থেকে নেন, অর্থাৎ একজনকে অন্যের কাজে নিয়োজিত করা; আর বাক্যটিকে পড়েন পারস্পরিক নিয়োগ হিসেবে, এক শ্রেণির অন্য শ্রেণির উপর মালিকানা হিসেবে নয়। ব্যাকরণটিই একে পারস্পরিক করে তোলে — তাদের কেউ, তাদেরই কারও — তাই রাজমিস্ত্রির দরকার কৃষককে, আর কৃষকের দরকার রাজমিস্ত্রিকে। পার্থক্যকে উপস্থাপন করা হয়েছে এই কারণ হিসেবে যে, মানুষ একা বাঁচতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver Roofs and Staircases",
          "bn": "রুপার ছাদ ও সিঁড়ি"
        },
        "p": [
          {
            "en": "If any doubt remained that rank in provision measures worth, the next verses remove it. 43:33 says that were it not that people would become one community, He would have given those who disbelieve in the Most Merciful houses with ceilings and staircases of silver, and 43:34 adds doors and couches. 43:35 calls the whole inventory the enjoyment of worldly life, and gives the Hereafter to the righteous.",
            "bn": "রিযিকের তারতম্য মানুষের মূল্য মাপে কি না, সে বিষয়ে কোনো সন্দেহ থাকলে পরের আয়াতগুলো তা দূর করে দেয়। 43:33 বলে, মানুষ যদি এক দলে পরিণত হওয়ার আশঙ্কা না থাকত, তবে যারা রহমানকে অস্বীকার করে তাদের ঘরের ছাদ ও সিঁড়ি তিনি রুপার করে দিতেন; আর 43:34 যোগ করে দরজা ও আসনের কথা। 43:35 গোটা তালিকাটিকে বলে পার্থিব জীবনের ভোগসামগ্রী, আর আখিরাতকে দেয় মুত্তাকীদের।"
          },
          {
            "en": "That is a striking thing to say. Silver ceilings were withheld from the deniers only because too many people would have been drawn to disbelief by the sight of them. Wealth is thereby described as something Allah is content to hand to those furthest from Him, and holds back for a reason that has nothing to do with their merit. It cannot then be a signal of standing with Him.",
            "bn": "কথাটি বেশ চমকপ্রদ। অস্বীকারকারীদের কাছ থেকে রুপার ছাদ কেবল এ কারণেই আটকে রাখা হয়েছে যে, তা দেখে বহু মানুষ কুফরির দিকে ঝুঁকে পড়ত। এভাবে সম্পদকে বর্ণনা করা হচ্ছে এমন বস্তু হিসেবে, যা আল্লাহ তাঁর থেকে সবচেয়ে দূরের মানুষদের হাতেও তুলে দিতে দ্বিধা করেন না, আর আটকে রাখেন এমন কারণে যার সঙ্গে তাদের যোগ্যতার কোনো সম্পর্ক নেই। কাজেই সম্পদ তাঁর কাছে মর্যাদার চিহ্ন হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than What They Gather",
          "bn": "তারা যা জমায় তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "The verse ends where it began. It opened by asking whether they distribute the mercy of your Lord; it closes with wa rahmatu rabbika khayrun mimma yajma'un — and the mercy of your Lord is better than what they gather. The same phrase frames both ends, so the argument returns to its own first word after passing through livelihoods, ranks and service.",
            "bn": "আয়াতটি শেষ হয় সেখানেই যেখানে শুরু হয়েছিল। শুরুতে প্রশ্ন ছিল, তোমার প্রতিপালকের রহমত কি তারা বণ্টন করে; আর শেষ হয় — ওয়া রাহমাতু রাব্বিকা খাইরুম মিম্মা ইয়াজমা'ঊন, তোমার প্রতিপালকের রহমত তারা যা জমা করে তার চেয়ে উত্তম। একই শব্দবন্ধ দুই প্রান্তেই কাঠামো গড়ে, ফলে জীবিকা, মর্যাদা ও সেবার আলোচনা পেরিয়ে যুক্তিটি নিজের প্রথম শব্দে ফিরে আসে।"
          },
          {
            "en": "Yajma'un is a verb of heaping up, and it is what the objectors had been doing while they judged the Prophet ﷺ by his lack of it. The verse lets their standard stand for a moment and then simply outbids it. What they were gathering is real; it is also, on the verse's accounting, the lesser of the two things on the table, and the only one they cannot distribute.",
            "bn": "'ইয়াজমা'ঊন' হলো স্তূপ করে জমানোর ক্রিয়া, আর আপত্তিকারীরা ঠিক এ কাজটিই করছিল — যখন তারা নবী ﷺ-কে বিচার করছিল তাঁর এই জিনিসের অভাব দিয়ে। আয়াতটি তাদের মানদণ্ডকে এক মুহূর্তের জন্য টিকে থাকতে দেয়, তারপর সহজেই তার চেয়ে বেশি দর হাঁকে। তারা যা জমাচ্ছিল তা বাস্তব; কিন্তু আয়াতের হিসাবে তা টেবিলে থাকা দুটি জিনিসের মধ্যে ছোটটি — আর সেটিই একমাত্র জিনিস যা তারা বণ্টন করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside the Division",
          "bn": "বণ্টনের ভেতরে বাঁচা"
        },
        "p": [
          {
            "en": "Read this way, the verse dismantles two habits at once. Envy loses its object, because the person above you in provision did not appoint himself there and has not been told he is preferred. And contempt loses its object too, since the person below you occupies a rank in the same temporary column, and the column was drawn by Someone else.",
            "bn": "এভাবে পড়লে আয়াতটি একসঙ্গে দুটি অভ্যাস ভেঙে দেয়। হিংসা তার লক্ষ্য হারায়, কারণ রিযিকে আপনার উপরে থাকা মানুষটি নিজে নিজেকে সেখানে বসায়নি, আর তাকে বলাও হয়নি যে সে অগ্রাধিকারপ্রাপ্ত। আর অবজ্ঞাও তার লক্ষ্য হারায়, কারণ আপনার নিচে থাকা মানুষটির অবস্থান একই সাময়িক কলামের ভেতরে — আর কলামটি এঁকেছেন অন্য কেউ।"
          },
          {
            "en": "What is left is the reason the verse gives for the differences: that people take one another into service. Needing help is written into the design, so asking for it is not a humiliation, and giving it is not a favour conferred from above. And the closing clause keeps the ranking honest by naming something that outranks every position in it.",
            "bn": "যা অবশিষ্ট থাকে তা হলো পার্থক্যের জন্য আয়াতের দেওয়া কারণটি: মানুষ যেন পরস্পরকে কাজে লাগাতে পারে। সাহায্যের প্রয়োজন এই পরিকল্পনারই অংশ, তাই তা চাওয়া অপমান নয়, আর তা দেওয়া উপর থেকে বর্ষিত অনুগ্রহও নয়। আর শেষ বাক্যটি গোটা ক্রমটিকে সৎ রাখে, কারণ তা এমন এক জিনিসের নাম বলে যা ওই ক্রমের প্রতিটি অবস্থানের চেয়ে উঁচু।"
          }
        ]
      }
    ]
  }
});
