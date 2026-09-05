/**
 * Tadabbur long-form articles — surah 74.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "74:38": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Falls",
          "bn": "বাক্যটি কোথায় পড়ে"
        },
        "p": [
          {
            "en": "The verse arrives at a hinge in Surah al-Muddaththir. Oaths are sworn by the moon, by the night as it departs and by the morning as it brightens, and then 74:35 says that the Fire is one of the greatest of matters. 74:36 calls it a warning to humanity, and 74:37 narrows that to whoever among you wills to go forward or to hang back. That is a sentence about choice. Ours states what the choice costs, in five Arabic words.",
            "bn": "আয়াতটি এসে দাঁড়ায় সূরা আল-মুদ্দাসসিরের এক সন্ধিক্ষণে। শপথ করা হয় চাঁদের, বিদায় নেওয়া রাতের এবং উজ্জ্বল হয়ে ওঠা প্রভাতের; এরপর 74:35 বলে, সেই আগুন মহা বিষয়গুলোর একটি। 74:36 একে বলে মানুষের জন্য সতর্কবাণী, আর 74:37 তা সংকুচিত করে তার দিকে — তোমাদের মধ্যে যে এগিয়ে যেতে চায় বা পিছিয়ে থাকতে চায়। ওটি পছন্দ সম্পর্কে একটি বাক্য। আমাদের আয়াতটি পাঁচটি আরবি শব্দে বলে দেয়, সেই পছন্দের মূল্য কী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pledge Held in Hand",
          "bn": "হাতে ধরা বন্ধক"
        },
        "p": [
          {
            "en": "Rahinah comes from a root that occurs three times in the whole Quran, and one of the other two fixes its meaning. 2:283 is the commercial occurrence: a traveller who cannot find a scribe to write down the contract may instead give a pledge taken in hand. That is a real object, deposited by a debtor, held by the creditor, and released only when the debt is discharged. This verse takes that word and applies it to the person.",
            "bn": "'রাহীনাহ' এসেছে এমন এক মূলধাতু থেকে যা গোটা কুরআনে তিনবার এসেছে, আর অন্য দুটির একটি এর অর্থ পাকা করে দেয়। 2:283 হলো বাণিজ্যিক প্রয়োগ: সফরে থাকা যে ব্যক্তি চুক্তি লিখে দেওয়ার মতো কোনো লেখক পায় না, সে বদলে হাতে-নেওয়া বন্ধক দিতে পারে। সেটি একটি বাস্তব বস্তু — ঋণগ্রহীতা জমা রাখে, পাওনাদার ধরে রাখে, আর ঋণ শোধ হলেই কেবল তা ছাড়া পায়। এই আয়াত সেই শব্দটিই নিয়ে এসে মানুষের উপর প্রয়োগ করে।"
          },
          {
            "en": "That is a harder image than it first sounds. The pledge in a loan is something other than the borrower — a ring, a garment, a beast. Here the thing deposited and the borrower are the same. A person is not said to owe something; a person is said to be the security, held against an account that his own hands are still writing. Nothing is being seized from him. He is what is being held.",
            "bn": "চিত্রটি প্রথম শোনায় যতটা মনে হয়, তার চেয়ে কঠিন। ঋণের বন্ধক সাধারণত ঋণগ্রহীতার থেকে আলাদা কিছু — একটি আংটি, একটি কাপড়, একটি পশু। এখানে যা জমা রাখা হচ্ছে আর যে ঋণ নিচ্ছে, দুটি একই। বলা হচ্ছে না যে মানুষ কিছু ঋণী; বলা হচ্ছে, মানুষ নিজেই জামানত — এমন এক হিসাবের বিপরীতে ধরে রাখা, যে হিসাব তার নিজের হাতই এখনো লিখে চলেছে। তার কাছ থেকে কিছু কেড়ে নেওয়া হচ্ছে না। সে নিজেই সেই ধরে রাখা জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Differs at 52:21",
          "bn": "52:21-এ যে শব্দটি আলাদা"
        },
        "p": [
          {
            "en": "52:21 makes almost the same statement with three words changed. There it reads kullu imri'in bima kasaba rahin; here it reads kullu nafsin bima kasabat rahinah. The subject moves from imru', a man, to nafs, a soul, and the predicate takes a feminine ending, rahinah rather than rahin, because nafs is feminine in Arabic. The verb of earning follows the same agreement: kasaba there, kasabat here. The rule is one rule, stated twice.",
            "bn": "52:21 প্রায় একই কথা বলে, তবে তিনটি শব্দ বদলে। সেখানে আছে 'কুল্লুম্‌রিইন বিমা কাসাবা রাহীন'; এখানে আছে 'কুল্লু নাফসিম বিমা কাসাবাত রাহীনাহ'। উদ্দেশ্য বদলে যায় 'ইমরুউন' — একজন পুরুষ — থেকে 'নাফস' — একটি প্রাণ — এ; আর বিধেয় নেয় স্ত্রীবাচক প্রত্যয়, 'রাহীন'-এর বদলে 'রাহীনাহ', কারণ আরবিতে 'নাফস' স্ত্রীলিঙ্গ। অর্জনের ক্রিয়াপদও সেই একই মিল রাখে: সেখানে 'কাসাবা', এখানে 'কাসাবাত'। নীতিটি একটিই, বলা হয়েছে দুবার।"
          },
          {
            "en": "The settings could hardly differ more. 52:21 closes a passage of favour: those who believed and whose descendants followed them in faith will have those descendants joined to them, with nothing at all deducted from their own deeds — and then the rule, marking the limit of the grant. Here the same rule closes a warning, and what follows it is not a limit but an exception. 74:39 names the companions of the right, who are not held.",
            "bn": "প্রেক্ষাপট দুটি এর চেয়ে বেশি আলাদা হওয়া কঠিন। 52:21 শেষ করে অনুগ্রহের একটি অংশ: যারা ঈমান এনেছে এবং যাদের সন্তানেরা ঈমানে তাদের অনুসরণ করেছে, তাদের সন্তানদের তাদের সঙ্গে মিলিয়ে দেওয়া হবে, অথচ তাদের নিজেদের আমল থেকে কিছুই কমানো হবে না — এরপর আসে নীতিটি, দানের সীমা চিহ্নিত করে। এখানে সেই একই নীতি শেষ করে একটি সতর্কবাণী, আর এর পরে আসে সীমা নয়, ব্যতিক্রম। 74:39 নাম নেয় ডান দিকের সঙ্গীদের, যারা আটক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pledge Left Unredeemed",
          "bn": "যে বন্ধক ছাড়ানো হয়নি"
        },
        "p": [
          {
            "en": "The passage then shows one going unredeemed. In 74:40-42 the people of the gardens ask the criminals what put them into Saqar, and the answer comes in the criminals' own words, in four items: we were not of those who prayed, nor did we feed the poor, we used to plunge into vain talk with those who plunged, and we used to deny the Day of Recompense — until the certainty came to us, says 74:47.",
            "bn": "এরপর এই অংশ দেখায়, একটি বন্ধক ছাড়ানো হয়নি। 74:40-42-এ জান্নাতবাসীরা অপরাধীদের জিজ্ঞেস করে, কীসে তাদের সাকারে নিয়ে গেল; আর উত্তর আসে অপরাধীদের নিজেদের মুখে, চারটি বিষয়ে: আমরা সালাত আদায়কারীদের অন্তর্ভুক্ত ছিলাম না, আমরা মিসকীনকে খাওয়াতাম না, আমরা অনর্থক আলাপে মগ্নদের সঙ্গে মগ্ন হতাম, আর আমরা কর্মফল দিবসকে অস্বীকার করতাম — 74:47 বলে, যতক্ষণ না আমাদের কাছে নিশ্চিত বিষয়টি এসে পড়ল।"
          },
          {
            "en": "Notice what the four are. Two are things not done and two are things done; two concern Allah directly and two concern other people and the tongue. Then 74:48 states the outcome for those who gave that answer: the intercession of intercessors will not benefit them. The pledge was not redeemed while redemption was possible, and the passage places the closing of that window at the arrival of what it calls the certainty.",
            "bn": "লক্ষ করুন চারটি কী কী। দুটি হলো না-করা কাজ, দুটি হলো করা কাজ; দুটি সরাসরি আল্লাহর সঙ্গে সম্পর্কিত, দুটি অন্য মানুষ ও জিহ্বার সঙ্গে। এরপর 74:48 জানায় ওই উত্তরদাতাদের পরিণতি: সুপারিশকারীদের সুপারিশ তাদের কোনো উপকারে আসবে না। বন্ধক ছাড়ানোর সুযোগ যতক্ষণ ছিল ততক্ষণে তা ছাড়ানো হয়নি, আর এই অংশটি সেই সুযোগ বন্ধ হওয়ার মুহূর্তটি রাখে সেই জিনিসের আগমনে, যাকে সে বলে 'নিশ্চিত বিষয়'।"
          }
        ]
      },
      {
        "h": {
          "en": "Held, Not Condemned",
          "bn": "আটক, দণ্ডিত নয়"
        },
        "p": [
          {
            "en": "A pledge is not a punishment; it is a holding, and a thing held can be redeemed. The verse does not say that every soul is condemned for what it earned. It says every soul is held against what it earned, which is why an exception in 74:39 is possible at all. The four confessions of 74:43-46 are best read the same way, as a list of what was left unpaid rather than as a verdict already passed.",
            "bn": "বন্ধক কোনো শাস্তি নয়; এটি ধরে রাখা, আর ধরে রাখা জিনিস ছাড়ানো যায়। আয়াতটি বলে না যে প্রত্যেক প্রাণ তার অর্জনের কারণে দণ্ডিত। এটি বলে, প্রত্যেক প্রাণ তার অর্জনের বিপরীতে আটক — আর এ কারণেই 74:39-এ কোনো ব্যতিক্রম আদৌ সম্ভব। 74:43-46-এর চারটি স্বীকারোক্তিও একইভাবে পড়া ভালো: ইতিমধ্যে ঘোষিত কোনো রায় হিসেবে নয়, বরং কী কী অপরিশোধিত রয়ে গিয়েছিল তার তালিকা হিসেবে।"
          },
          {
            "en": "What the word finally enforces is that the debt is personal. Comparison stops being useful, because nobody else's surplus transfers to an account held in your own name. What is left is ordinary and available: the prayer that was skipped, the poor person who was not fed, the hours the tongue is spent on, and what the heart actually does with the Day of Recompense while there is still time to do something about it.",
            "bn": "শেষ পর্যন্ত শব্দটি যা কার্যকর করে তা হলো — ঋণটি একান্ত ব্যক্তিগত। তুলনা করা আর কাজে আসে না, কারণ আপনার নিজের নামে থাকা হিসাবে অন্য কারও উদ্বৃত্ত স্থানান্তরিত হয় না। যা বাকি থাকে তা সাধারণ ও হাতের নাগালে: যে সালাতটি বাদ পড়েছে, যে অভাবীকে খাওয়ানো হয়নি, জিহ্বা যেসব ঘণ্টায় ব্যয় হয়, আর কর্মফল দিবসকে নিয়ে হৃদয় আসলে কী করে — যখন সে বিষয়ে কিছু করার সময় এখনো আছে।"
          }
        ]
      }
    ]
  }
});
