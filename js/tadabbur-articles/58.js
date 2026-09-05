/**
 * Tadabbur long-form articles — surah 58.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "58:7": {
    "sections": [
      {
        "h": {
          "en": "A Surah That Begins in Private",
          "bn": "যে সূরার শুরু গোপনে"
        },
        "p": [
          {
            "en": "Surah al-Mujadilah opens at 58:1 with Allah declaring that He has heard the speech of a woman who was disputing with the Prophet ﷺ about her husband and directing her complaint to Allah, and adds that He hears the exchange between the two of them. A conversation held by two people is reported back to them in revelation before the surah has said anything else.",
            "bn": "সূরা আল-মুজাদালাহ শুরু হয় 58:1 দিয়ে, যেখানে আল্লাহ ঘোষণা করেন যে তিনি সেই নারীর কথা শুনেছেন যিনি তাঁর স্বামীর বিষয়ে নবী ﷺ-এর সঙ্গে বাদানুবাদ করছিলেন এবং আল্লাহর কাছে অভিযোগ পেশ করছিলেন; আর যোগ করা হয় যে তিনি তাঁদের দুজনের কথোপকথনও শোনেন। সূরাটি অন্য কিছু বলার আগেই, দুজন মানুষের একটি আলাপ ওহীর মাধ্যমে তাঁদেরই কাছে ফিরিয়ে জানিয়ে দেওয়া হয়।"
          },
          {
            "en": "By the time we reach this verse the same fact has become a general law. What was granted to one woman in one difficulty is stated as the standing condition of every private conference anyone will ever hold. The surah moves from a particular case to a rule, which is the ordinary direction of Quranic legislation, and here the rule concerns who is listening.",
            "bn": "আলোচ্য আয়াতে পৌঁছাতে পৌঁছাতে সেই একই সত্য একটি সাধারণ বিধানে পরিণত হয়। এক নারীকে এক দুর্দশায় যা দেওয়া হয়েছিল, তা এখন ঘোষিত হচ্ছে যেকোনো মানুষের যেকোনো গোপন পরামর্শের স্থায়ী অবস্থা হিসেবে। সূরাটি একটি নির্দিষ্ট ঘটনা থেকে বিধানের দিকে এগোয় — কুরআনি বিধানের এটিই স্বাভাবিক গতি — আর এখানে বিধানটি এই নিয়ে যে, শুনছেন কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge on Both Sides",
          "bn": "দুই প্রান্তেই জ্ঞান"
        },
        "p": [
          {
            "en": "The verse opens by saying that Allah knows what is in the heavens and what is on the earth, and it closes by saying that Allah is Knowing of all things. Between those two statements of knowledge sits the clause about His being with them wherever they are. The frame is not decorative; it tells the reader how the middle is to be understood.",
            "bn": "আয়াতটি শুরু হয় এই কথা দিয়ে যে, আসমানে যা আছে আর যমীনে যা আছে আল্লাহ সব জানেন; আর শেষ হয় এই কথা দিয়ে যে, আল্লাহ সকল বিষয়ে অবগত। জ্ঞানের এই দুই ঘোষণার মাঝখানে বসে আছে সেই বাক্যটি — তারা যেখানেই থাকুক তিনি তাদের সঙ্গে আছেন। কাঠামোটি অলংকার নয়; এটিই পাঠককে জানায় মাঝের অংশটি কীভাবে বুঝতে হবে।"
          },
          {
            "en": "The classical commentators are settled on the reading the frame requires: the withness here is one of knowledge, hearing and seeing, not of mixture with creation. The same construction is used at 57:4, and in both places the clause is fenced by knowledge before it and awareness after it. The verse defines its own terms, and it does so twice over.",
            "bn": "প্রাচীন মুফাসসিরগণ কাঠামোটি যে পাঠ দাবি করে সেটিতেই স্থির: এখানে 'সঙ্গে থাকা' মানে জ্ঞান, শ্রবণ ও দর্শনের সঙ্গে থাকা, সৃষ্টির সঙ্গে মিশে যাওয়া নয়। একই গঠন ব্যবহৃত হয়েছে 57:4 আয়াতে, আর দুই জায়গাতেই বাক্যটির আগে জ্ঞান ও পরে অবগতির বেড়া দেওয়া। আয়াতটি নিজের পরিভাষা নিজেই নির্ধারণ করে দেয়, আর তা করে দুবার।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Counts",
          "bn": "আয়াতটি যা গোনে"
        },
        "p": [
          {
            "en": "Count what is actually named. The verse gives two group sizes and two positions: three, and He is their fourth; five, and He is their sixth. Then it closes both directions at once with a pair of negations — no fewer than that and no more. Two numbers are stated and every other number in existence is swept in behind them.",
            "bn": "আসলে কী কী নাম নেওয়া হয়েছে, তা গুনে দেখুন। আয়াতটি দুটি দলের আকার ও দুটি অবস্থান দেয়: তিনজন, আর তিনি তাদের চতুর্থজন; পাঁচজন, আর তিনি তাদের ষষ্ঠজন। তারপর দুটি অস্বীকৃতি দিয়ে একসঙ্গে দুই দিকই বন্ধ করে দেয় — এর কমও নয়, বেশিও নয়। দুটি সংখ্যার নাম নেওয়া হয়, আর অস্তিত্বের বাকি সব সংখ্যা তাদের পিছু পিছু ভেতরে ঢুকে পড়ে।"
          },
          {
            "en": "The counting is what makes the verse concrete. A statement that Allah knows everything is easy to hold at a distance. A statement that a meeting of three has a fourth present in it is not, because it puts a number on the room you were in yesterday. The smallest group the verse names is three, so its subject is never a solitary person; it is people together.",
            "bn": "এই গণনাই আয়াতটিকে বাস্তব করে তোলে। 'আল্লাহ সবকিছু জানেন' — এমন কথা দূর থেকে ধরে রাখা সহজ। কিন্তু 'তিনজনের বৈঠকে একজন চতুর্থ উপস্থিত থাকেন' — এ কথা দূরে রাখা যায় না, কারণ তা গতকাল আপনি যে ঘরে ছিলেন সেটির উপর একটি সংখ্যা বসিয়ে দেয়। আয়াতটি সবচেয়ে ছোট যে দলের নাম নেয় তা তিনজনের; তাই এর বিষয় কখনোই একাকী কোনো মানুষ নয় — এর বিষয় একত্র হওয়া মানুষ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Only Other Verse",
          "bn": "একমাত্র অন্য আয়াতটি"
        },
        "p": [
          {
            "en": "The words rabi'uhum and sadisuhum, their fourth and their sixth, occur in only one other place in the Quran. 18:22 has people arguing over the sleepers of the cave: they will say three, the fourth of them their dog, and they will say five, the sixth of them their dog. The counting formula is identical, down to the two numbers chosen.",
            "bn": "'রাবি'উহুম' ও 'সাদিসুহুম' — তাদের চতুর্থজন ও তাদের ষষ্ঠজন — এই শব্দ দুটি কুরআনে আর মাত্র একটি জায়গায় এসেছে। 18:22 আয়াতে মানুষ গুহাবাসীদের সংখ্যা নিয়ে তর্ক করছে: কেউ বলবে তারা ছিল তিনজন, চতুর্থটি তাদের কুকুর; আর কেউ বলবে তারা ছিল পাঁচজন, ষষ্ঠটি তাদের কুকুর। গণনার ছাঁচটি হুবহু এক, এমনকি বেছে নেওয়া দুটি সংখ্যাও এক।"
          },
          {
            "en": "And 18:22 labels that counting as guessing at the unseen, then tells the Prophet ﷺ to say that his Lord knows their number best. So the Quran uses the same formula twice: once for human beings speculating about a hidden matter and getting it wrong, and once for Allah stating His own presence in every hidden matter. The contrast between the two is the point.",
            "bn": "আর 18:22 সেই গণনাকে চিহ্নিত করে অদৃশ্য বিষয়ে অনুমান হিসেবে, তারপর নবী ﷺ-কে বলতে বলে যে তাঁর প্রতিপালকই তাদের সংখ্যা সবচেয়ে ভালো জানেন। অর্থাৎ কুরআন একই ছাঁচ দুবার ব্যবহার করে: একবার মানুষের জন্য, যারা গোপন বিষয়ে অনুমান করে ভুল করে; আর একবার আল্লাহর জন্য, যিনি প্রতিটি গোপন বিষয়ে নিজের উপস্থিতি ঘোষণা করেন। এই দুইয়ের বৈসাদৃশ্যই মূল কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Najwa Is Not the Problem",
          "bn": "গোপন পরামর্শ নিজে সমস্যা নয়"
        },
        "p": [
          {
            "en": "Najwa, private conference, occurs eleven times in the Quran, and five of those are in this surah: 58:7, 58:8, 58:10, 58:12 and 58:13. This is where the Book legislates on secret talk, and its ruling is not that believers should stop holding it. 58:9 tells them that when they confer privately they must not confer about sin, aggression and disobedience to the Messenger, but about righteousness and taqwa.",
            "bn": "'নাজওয়া' অর্থাৎ গোপন পরামর্শ কুরআনে এসেছে এগারো বার, আর তার পাঁচটিই এই সূরায়: 58:7, 58:8, 58:10, 58:12 এবং 58:13। গোপন আলাপ নিয়ে কিতাব এখানেই বিধান দেয়, আর সেই বিধান এই নয় যে মুমিনরা গোপন পরামর্শ বন্ধ করে দেবে। 58:9 তাদের বলে, যখন তারা গোপনে পরামর্শ করে তখন যেন পাপ, সীমালঙ্ঘন ও রাসূলের অবাধ্যতার পরামর্শ না করে, বরং সৎকর্ম ও তাকওয়ার পরামর্শ করে।"
          },
          {
            "en": "So the fourth of every three is not there to abolish privacy. Councils, confidences and closed rooms are all left standing; what the passage regulates is their content. 58:8 shows the alternative in action, describing people forbidden from such talk who return to it and confer about sin and aggression, and who greet the Prophet ﷺ with words Allah does not use to greet him.",
            "bn": "তাই প্রতি তিনজনের চতুর্থজন থাকার কথা গোপনীয়তা বিলুপ্ত করার জন্য নয়। পরামর্শসভা, বিশ্বাসের কথা ও বন্ধ ঘর — সবই বহাল থাকে; অংশটি নিয়ন্ত্রণ করে সেগুলোর বিষয়বস্তু। 58:8 বিকল্পটিকে কাজে দেখায়: যাদের এমন আলাপ থেকে নিষেধ করা হয়েছিল তারা আবার তাতেই ফিরে যায়, পাপ ও সীমালঙ্ঘনের পরামর্শ করে, আর নবী ﷺ-কে এমন কথায় অভিবাদন জানায় যা দিয়ে আল্লাহ তাঁকে অভিবাদন জানান না।"
          }
        ]
      },
      {
        "h": {
          "en": "Then He Will Inform Them",
          "bn": "তারপর তিনি জানিয়ে দেবেন"
        },
        "p": [
          {
            "en": "Thumma yunabbi'uhum bima 'amilu yawma al-qiyamah — then He will inform them of what they did, on the Day of Resurrection. Thumma opens a gap between the knowing and the telling, and the whole of a life fits inside that gap. 58:6, immediately before, has already said that Allah enumerated their deeds while they themselves forgot them.",
            "bn": "ছুম্মা ইউনাব্বিউহুম বিমা 'আমিলূ ইয়াওমাল-ক্বিয়ামাহ — তারপর কিয়ামতের দিন তিনি তাদের জানিয়ে দেবেন তারা কী করেছিল। 'ছুম্মা' শব্দটি জানা ও জানানোর মাঝখানে একটি ব্যবধান খুলে দেয়, আর গোটা একটি জীবন সেই ব্যবধানের ভেতরে এঁটে যায়। ঠিক আগের আয়াত 58:6 আগেই বলেছে, আল্লাহ তাদের আমল গুনে রেখেছেন, অথচ তারা নিজেরাই তা ভুলে গেছে।"
          },
          {
            "en": "Notice the last shift: the verse began with talk and ends with deeds, what they did rather than what they said. A private conference is where things are decided before they are done, so the record of the room is filed under actions. That is where the verse becomes usable — not as a rule against whispering, but as a question about what your meetings decide.",
            "bn": "শেষ মোড়টি লক্ষ করুন: আয়াতটি শুরু হয়েছিল কথা দিয়ে, শেষ হয় আমল দিয়ে — তারা কী বলেছিল নয়, কী করেছিল। গোপন পরামর্শ সেই জায়গা যেখানে কাজ করার আগেই সিদ্ধান্ত নেওয়া হয়, তাই সেই ঘরের নথি জমা পড়ে কাজের খাতায়। এখানেই আয়াতটি কাজে লাগে — ফিসফিসানির বিরুদ্ধে কোনো নিয়ম হিসেবে নয়, বরং এই প্রশ্ন হিসেবে যে আপনার বৈঠকগুলো কী সিদ্ধান্ত নেয়।"
          }
        ]
      }
    ]
  }
});
