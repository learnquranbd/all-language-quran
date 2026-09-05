/**
 * Tadabbur long-form articles — surah 75.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "75:36": {
    "sections": [
      {
        "h": {
          "en": "The Same Question Twice",
          "bn": "একই প্রশ্ন দু'বার"
        },
        "p": [
          {
            "en": "The phrase ayahsabu al-insanu, does man think, occurs exactly twice in the Quran, and both times in this surah. The first is 75:3, asking whether he thinks We will not assemble his bones. The last is this verse, asking whether he thinks he will be left suda. Surah al-Qiyamah opens with a doubt about the body and closes with a doubt about the point of it.",
            "bn": "'আ ইয়াহসাবুল ইনসান' — মানুষ কি মনে করে — এই বাক্যাংশটি কুরআনে ঠিক দু'বার এসেছে, আর দু'বারই এই সূরায়। প্রথমটি 75:3 আয়াত, যা জিজ্ঞেস করে সে কি ভাবে আমি তার হাড়গুলো একত্র করব না। শেষটি এই আয়াত, যা জিজ্ঞেস করে সে কি ভাবে তাকে 'সুদা' অবস্থায় ছেড়ে দেওয়া হবে। সূরা আল-কিয়ামাহ শুরু হয় দেহ নিয়ে এক সন্দেহ দিয়ে, আর শেষ হয় তার উদ্দেশ্য নিয়ে এক সন্দেহ দিয়ে।"
          },
          {
            "en": "The placement is pointed. 75:31 and 75:32 describe a man who neither believed nor prayed but denied and turned away, and 75:33 has him walking back to his people swaggering. 75:34 and 75:35 pronounce woe over him twice. The question of this verse lands directly after that portrait. The man who strutted home is asked what exactly he imagined the arrangement was.",
            "bn": "অবস্থানটি তাৎপর্যপূর্ণ। 75:31 ও 75:32 আয়াত এমন এক ব্যক্তির বর্ণনা দেয় যে বিশ্বাসও করেনি, নামাযও পড়েনি, বরং প্রত্যাখ্যান করেছে ও মুখ ফিরিয়ে নিয়েছে; আর 75:33 আয়াতে সে দম্ভভরে নিজের পরিবারের কাছে ফিরে যায়। 75:34 ও 75:35 আয়াত তার উপর দু'বার দুর্ভোগ উচ্চারণ করে। এই আয়াতের প্রশ্নটি এসে পড়ে ঠিক সেই চিত্রটির পরেই। যে লোকটি দম্ভভরে ঘরে ফিরেছিল, তাকেই জিজ্ঞেস করা হচ্ছে — সে আসলে ভেবেছিলটা কী।"
          }
        ]
      },
      {
        "h": {
          "en": "Suda",
          "bn": "সুদা"
        },
        "p": [
          {
            "en": "The word suda occurs once in the whole Quran, here. It describes livestock turned loose with no herdsman — a camel left to graze where it likes, unclaimed, uncounted, answerable to nobody. Ibn Kathir's gloss is compact: left neglected, neither commanded nor forbidden. The app renders it left neglected, and that is the sense to hold: not unloved, but unsupervised.",
            "bn": "'সুদা' শব্দটি গোটা কুরআনে একবারই এসেছে, এখানে। এটি এমন গবাদিপশু বোঝায় যাকে রাখাল ছাড়াই ছেড়ে দেওয়া হয়েছে — যে উট যেখানে খুশি চরে বেড়ায়, যার কোনো দাবিদার নেই, হিসাব নেই, কারও কাছে জবাবদিহি নেই। ইবনে কাসীরের ব্যাখ্যাটি সংক্ষিপ্ত: উপেক্ষিত অবস্থায় ছেড়ে দেওয়া, যাকে কোনো আদেশও করা হয় না, নিষেধও করা হয় না। অ্যাপের অনুবাদ বলে 'এমনি ছেড়ে দেওয়া' — অর্থটি এভাবেই ধরতে হবে: অপ্রিয় নয়, বরং তত্ত্বাবধানহীন।"
          },
          {
            "en": "That distinction changes what the verse is accusing us of. It is not asking whether anyone thinks Allah does not exist, and it is not asking whether anyone doubts the resurrection outright. It is asking whether a person quietly assumes that his own life, unlike everything else, has been left running without instructions and will not be collected at the end.",
            "bn": "এই পার্থক্যটি বদলে দেয় আয়াতটি আমাদের বিরুদ্ধে কী অভিযোগ আনছে। এটি জিজ্ঞেস করছে না কেউ আল্লাহর অস্তিত্বে অবিশ্বাসী কি না, কিংবা কেউ পুনরুত্থানকে সরাসরি অস্বীকার করে কি না। এটি জিজ্ঞেস করছে, মানুষ কি চুপচাপ ধরে নেয় যে অন্য সব কিছুর বিপরীতে তার নিজের জীবনটিকে কোনো নির্দেশনা ছাড়াই চলতে দেওয়া হয়েছে এবং শেষে তা আর তুলে নেওয়া হবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "It Is a Question",
          "bn": "এটি একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse never states that man will not be left neglected. It asks whether he thinks he will be. That form matters. An assertion can be argued with from the outside; a question of this shape makes the listener produce the claim himself and then look at it, which is far harder to shrug off, because the belief being examined is one he has never said aloud.",
            "bn": "আয়াতটি কোথাও বলে না যে মানুষকে উপেক্ষিত অবস্থায় ছেড়ে দেওয়া হবে না। এটি জিজ্ঞেস করে, সে কি তা-ই মনে করে। এই গঠনটি গুরুত্বপূর্ণ। বিবৃতির সঙ্গে বাইরে থেকে তর্ক করা যায়; কিন্তু এই ধরনের প্রশ্ন শ্রোতাকে দিয়েই দাবিটি উচ্চারণ করায় এবং তারপর তার দিকে তাকাতে বাধ্য করে — যা ঝেড়ে ফেলা অনেক কঠিন, কারণ যে বিশ্বাসটি পরীক্ষা করা হচ্ছে সে তা কখনো মুখে বলেনি।"
          },
          {
            "en": "The Quran then declines to answer with an assertion either. 75:37 to 75:39 walk backwards through the reader's own origin — a drop of fluid, then a clinging clot, then a form created and proportioned, then made into the two mates, male and female. And 75:40 closes the surah with one more question: is not that One able to give life to the dead? A doubt about purpose is answered with evidence about power.",
            "bn": "এরপর কুরআন কোনো বিবৃতি দিয়েও উত্তর দিতে অস্বীকার করে। 75:37 থেকে 75:39 আয়াত পাঠকের নিজের উৎপত্তির পথ ধরে পিছিয়ে যায় — এক ফোঁটা তরল, তারপর জমাট রক্তপিণ্ড, তারপর সৃষ্ট ও সুবিন্যস্ত এক আকৃতি, তারপর তা থেকে জোড়া — পুরুষ ও নারী। আর 75:40 আয়াত সূরাটি শেষ করে আরও একটি প্রশ্ন দিয়ে: এমন সত্তা কি মৃতকে জীবিত করতে সক্ষম নন? উদ্দেশ্য নিয়ে সন্দেহের জবাব আসে ক্ষমতা নিয়ে প্রমাণ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Was Made in Play",
          "bn": "কিছুই খেলাচ্ছলে বানানো হয়নি"
        },
        "p": [
          {
            "en": "The principle behind the question is stated flatly elsewhere. 21:16 and 44:38 both deny that the heavens, the earth and what lies between them were created in play, and 44:39 adds that they were created only in truth. 38:27 says the same and then names the alternative honestly: that assumption belongs to those who disbelieve. This verse takes a rule already applied to the sky and applies it to one person.",
            "bn": "প্রশ্নটির পেছনের নীতিটি অন্যত্র সরাসরিই বলা হয়েছে। 21:16 ও 44:38 উভয় আয়াতই অস্বীকার করে যে আসমান, যমীন ও এ দুয়ের মাঝে যা আছে তা খেলাচ্ছলে সৃষ্টি করা হয়েছে, আর 44:39 আয়াত যোগ করে যে তা সৃষ্টি করা হয়েছে কেবল সত্য উদ্দেশ্যেই। 38:27 আয়াত একই কথা বলে, তারপর বিকল্প ধারণাটির নাম সৎভাবে বলে দেয়: এ ধারণা কাফিরদেরই। এই আয়াত আসমানের উপর ইতিমধ্যেই প্রযুক্ত একটি নীতিকে একজন মানুষের উপর প্রয়োগ করে।"
          },
          {
            "en": "23:115 puts the identical challenge in the second person plural, asking a whole audience whether they thought they were created uselessly and would not be returned. Read side by side, the two verses close the gap that heedlessness lives in: a universe with a purpose does not contain one exempt species, and a species with a purpose does not contain one exempt afternoon.",
            "bn": "23:115 আয়াত হুবহু একই চ্যালেঞ্জ রাখে মধ্যম পুরুষের বহুবচনে, গোটা শ্রোতৃমণ্ডলীকে জিজ্ঞেস করে — তারা কি ভেবেছিল তাদের অনর্থক সৃষ্টি করা হয়েছে এবং তাদের ফিরিয়ে আনা হবে না। পাশাপাশি পড়লে আয়াত দুটি সেই ফাঁকটি বন্ধ করে দেয় যেখানে গাফলতি বাস করে: উদ্দেশ্যসম্পন্ন এক বিশ্বে ছাড়প্রাপ্ত কোনো প্রজাতি থাকে না, আর উদ্দেশ্যসম্পন্ন এক প্রজাতির মধ্যে ছাড়প্রাপ্ত কোনো বিকেল থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Bites",
          "bn": "যেখানে এটি বেঁধে"
        },
        "p": [
          {
            "en": "Because suda means unsupervised rather than sinful, the verse reaches past the obvious failures. Most people have some region of life they treat as off the record — how they speak when tired, what they do with an idle hour, the standard they hold to when no one whose opinion matters is watching. That region is exactly what the question is about.",
            "bn": "যেহেতু 'সুদা' মানে পাপাচারী নয়, বরং তত্ত্বাবধানহীন, তাই আয়াতটি স্পষ্ট ব্যর্থতাগুলোর ওপারেও পৌঁছে যায়। বেশির ভাগ মানুষেরই জীবনের এমন কোনো এলাকা থাকে যাকে তারা হিসাবের বাইরের বলে ধরে নেয় — ক্লান্ত অবস্থায় তারা কীভাবে কথা বলে, অলস একটি ঘণ্টা তারা কীভাবে কাটায়, যার মতামত গুরুত্বপূর্ণ এমন কেউ না দেখলে তারা কোন মান বজায় রাখে। প্রশ্নটি ঠিক সেই এলাকাটিকে নিয়েই।"
          },
          {
            "en": "The remedy the surah offers is not more anxiety but a better memory. Someone took that much trouble over your making, working from a drop of fluid to a finished human being, and the verses that follow the question say so in order. Such care does not lose interest halfway. Live the ordinary hours as claimed hours, and the question stops being frightening and starts being steadying.",
            "bn": "সূরাটি যে প্রতিকার দেয় তা বাড়তি উদ্বেগ নয়, বরং উন্নততর স্মৃতি। কেউ একজন আপনার নির্মাণের পেছনে এতটা যত্ন করেছেন, এক ফোঁটা তরল থেকে শুরু করে পূর্ণাঙ্গ এক মানুষ পর্যন্ত — প্রশ্নটির পরের আয়াতগুলো ক্রম ধরে সে কথাই বলে। এমন যত্ন মাঝপথে আগ্রহ হারায় না। সাধারণ ঘণ্টাগুলোকে দাবিকৃত ঘণ্টা হিসেবে যাপন করুন, তখন প্রশ্নটি আর ভয় দেখায় না, বরং স্থির করে দেয়।"
          }
        ]
      }
    ]
  }
});
