/**
 * Tadabbur long-form articles — surah 65.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "65:2-3": {
    "sections": [
      {
        "h": {
          "en": "A Promise Planted in Law",
          "bn": "আইনের মাঝে রোপিত প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "The famous promise of the way out does not stand in a chapter on trust; it stands in the middle of divorce law. 65:1-2 regulate the waiting period, command that women not be expelled from their homes, and require that a parting be either an honourable keeping or an honourable release, witnessed by two just people. Then, mid-passage, the register lifts: whoever has taqwa of Allah, He will make for him a makhraj, a way out.",
            "bn": "উত্তরণের পথের বিখ্যাত প্রতিশ্রুতিটি ভরসা-বিষয়ক কোনো অধ্যায়ে দাঁড়িয়ে নেই; এটি দাঁড়িয়ে আছে তালাকের বিধানের ঠিক মাঝখানে। 65:1-2 ইদ্দতের নিয়ম দেয়, নারীদের ঘর থেকে বের করে না দেওয়ার নির্দেশ দেয়, এবং দাবি করে বিচ্ছেদ হবে হয় সম্মানজনকভাবে রেখে দেওয়া নয়তো সম্মানজনকভাবে ছেড়ে দেওয়া — দুজন ন্যায়পরায়ণ সাক্ষীর উপস্থিতিতে। তারপর, অনুচ্ছেদের মাঝপথে, সুর উঁচুতে ওঠে: যে আল্লাহর তাকওয়া অবলম্বন করে, তিনি তার জন্য করে দেন 'মাখরাজ' — একটি বেরোনোর পথ।"
          },
          {
            "en": "The placement is the first lesson. Divorce is the terrain of grief, money, children and the strong temptation to win by wronging; taqwa is hardest exactly there. So the Quran attaches its broadest promise of relief to its narrowest legal setting: the one who keeps Allah's limits when keeping them costs the most is the one the promise names first. The commentators generalise the promise, but they do not forget where it was planted.",
            "bn": "এই অবস্থানই প্রথম শিক্ষা। তালাক হলো শোক, অর্থ, সন্তান আর অন্যায় করে জিতে যাওয়ার প্রবল প্রলোভনের ময়দান; তাকওয়া ঠিক সেখানেই সবচেয়ে কঠিন। তাই কুরআন তার সবচেয়ে প্রশস্ত স্বস্তির প্রতিশ্রুতিকে জুড়ে দিয়েছে তার সবচেয়ে সংকীর্ণ আইনি প্রেক্ষাপটে: যে ব্যক্তি আল্লাহর সীমাগুলো রক্ষা করে তখন, যখন রক্ষা করার মূল্য সবচেয়ে বেশি — প্রতিশ্রুতি প্রথমে তারই নাম নেয়। মুফাসসিরগণ প্রতিশ্রুতিটিকে ব্যাপক অর্থ দেন, কিন্তু এটি কোথায় রোপণ করা হয়েছিল তা ভোলেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Way Out, an Unreckoned Provision",
          "bn": "বেরোনোর পথ, অহিসেবি রিযিক"
        },
        "p": [
          {
            "en": "Makhraj is a place of exit — the word assumes a person who feels enclosed. The verse does not deny the tightness; it promises a door in it. Then the provision: min haythu la yahtasib, from where he does not reckon. Yahtasib is from hisab, calculation: the sustenance will arrive from outside the person's own arithmetic — outside the plans, salaries and contingencies he has counted. What taqwa buys is not a bigger calculation but a Provider who is not bound by calculations.",
            "bn": "'মাখরাজ' মানে বেরোনোর জায়গা — শব্দটিই ধরে নেয় এমন একজন মানুষকে, যে নিজেকে ঘেরা অবস্থায় পাচ্ছে। আয়াতটি সংকীর্ণতা অস্বীকার করে না; সে সংকীর্ণতার মধ্যেই একটি দরজার প্রতিশ্রুতি দেয়। তারপর রিযিক: 'মিন হাইসু লা ইয়াহতাসিব' — যেখান থেকে সে হিসাব করে না। 'ইয়াহতাসিব' এসেছে 'হিসাব' থেকে: জীবিকা আসবে মানুষের নিজের অঙ্কের বাইরে থেকে — তার গোনা পরিকল্পনা, বেতন আর বিকল্পগুলোর বাইরে থেকে। তাকওয়া যা কিনে দেয় তা আরও বড় কোনো হিসাব নয়, বরং এমন এক রিযিকদাতা, যিনি হিসাবের বাঁধনে বাঁধা নন।"
          },
          {
            "en": "The mufassirun keep both scopes of the promise. Narrowly, the one who fears Allah in divorce will be given an exit from its distress and provision after its losses. Broadly — and Ibn Kathir states it this way — whoever has taqwa in whatever he faces, Allah appoints him a way out of every hardship and provides for him from where it never occurred to him. The verse's own grammar, whoever, refuses to stay confined to its occasion.",
            "bn": "মুফাসসিরগণ প্রতিশ্রুতির দুটি পরিসরই ধরে রাখেন। সংকীর্ণ অর্থে: যে তালাকের ক্ষেত্রে আল্লাহকে ভয় করে, তাকে দেওয়া হবে সেই দুর্দশা থেকে বেরোনোর পথ আর ক্ষতির পরে রিযিক। ব্যাপক অর্থে — এবং ইবনে কাসীর এভাবেই বলেন — যে যেকোনো পরিস্থিতিতে তাকওয়া অবলম্বন করে, আল্লাহ তার জন্য প্রতিটি সংকট থেকে বেরোনোর পথ নির্ধারণ করেন এবং এমন জায়গা থেকে রিযিক দেন, যা তার কল্পনাতেও আসেনি। আয়াতের নিজস্ব ব্যাকরণ — 'যে কেউ' — নিজেকে তার উপলক্ষে আবদ্ধ রাখতে অস্বীকার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sufficient for Him",
          "bn": "তার জন্য তিনিই যথেষ্ট"
        },
        "p": [
          {
            "en": "65:3 then moves from taqwa to tawakkul: whoever relies upon Allah — He is sufficient for him, hasbuh. Sufficiency is a strong claim. It does not say Allah will help alongside other supports; it says the reliant one has, in Allah, enough. The verse then explains why such a sentence can be signed: Allah accomplishes His purpose — balighu amrih; no intention of His has ever failed to arrive. Reliance is only as sound as the reliability of the one relied upon, and His is absolute.",
            "bn": "এরপর 65:3 তাকওয়া থেকে তাওয়াক্কুলে এগোয়: যে আল্লাহর ওপর ভরসা করে — তিনিই তার জন্য যথেষ্ট, 'হাসবুহ'। যথেষ্ট হওয়া একটি জোরালো দাবি। এতে বলা হয়নি আল্লাহ অন্যান্য অবলম্বনের পাশাপাশি সাহায্য করবেন; বলা হয়েছে, ভরসাকারী আল্লাহর মধ্যেই যথেষ্ট পেয়ে গেছে। আয়াতটি তারপর ব্যাখ্যা করে এমন বাক্যে কেন সই করা যায়: আল্লাহ তাঁর উদ্দেশ্য পূর্ণ করেই ছাড়েন — 'বালিগু আমরিহ'; তাঁর কোনো অভিপ্রায় কখনো পৌঁছাতে ব্যর্থ হয়নি। ভরসা ততটাই মজবুত, যতটা নির্ভরযোগ্য সেই সত্তা যাঁর ওপর ভরসা — আর তাঁর নির্ভরযোগ্যতা নিরঙ্কুশ।"
          },
          {
            "en": "The closing clause completes it: Allah has set for every thing a qadr, a measure. Relief, provision and hardship all have appointed sizes and appointed times. The commentators read this as the discipline inside the promise: the way out is certain, but its hour is measured, so tawakkul includes waiting without panic. What is scheduled cannot be hurried by anxiety, and what has been measured for you cannot be diverted to anyone else.",
            "bn": "সমাপ্তির বাক্যটি একে সম্পূর্ণ করে: আল্লাহ প্রতিটি জিনিসের জন্য একটি 'কাদর' — একটি পরিমাপ — নির্ধারণ করে রেখেছেন। স্বস্তি, রিযিক ও কষ্ট — সবকিছুর নির্ধারিত আকার ও নির্ধারিত সময় আছে। মুফাসসিরগণ এটিকে পড়েন প্রতিশ্রুতির ভেতরের শৃঙ্খলা হিসেবে: বেরোনোর পথ নিশ্চিত, কিন্তু তার ক্ষণ মাপা — তাই তাওয়াক্কুলের মধ্যে আতঙ্কহীন অপেক্ষাও পড়ে। যা সময়সূচিতে বাঁধা, উদ্বেগ তাকে ত্বরান্বিত করতে পারে না; আর যা আপনার জন্য মাপা হয়েছে, তা অন্য কারও দিকে সরানো যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Taqwa and Tawakkul Together",
          "bn": "তাকওয়া ও তাওয়াক্কুল একসঙ্গে"
        },
        "p": [
          {
            "en": "The two verses bind two virtues in order: taqwa in conduct, tawakkul in heart. One without the other limps. Taqwa without tawakkul keeps the limits but carries the terror alone; tawakkul without taqwa trusts Allah while disobeying Him, which is not trust but presumption. 8:29 makes a parallel bargain in other terms: if you have taqwa of Allah, He will grant you a furqan, a criterion, and remove your misdeeds. The gate to Allah's undertakings is on the servant's side of the wall.",
            "bn": "আয়াত দুটি দুটি গুণকে ক্রমানুসারে বেঁধে দেয়: আচরণে তাকওয়া, অন্তরে তাওয়াক্কুল। একটিকে ছাড়া অন্যটি খোঁড়ায়। তাওয়াক্কুলহীন তাকওয়া সীমা রক্ষা করে, কিন্তু আতঙ্কের ভার বয় একা; আর তাকওয়াহীন তাওয়াক্কুল আল্লাহর অবাধ্যতা করতে করতে তাঁর ওপর ভরসা করে — যা ভরসা নয়, ধৃষ্টতা। 8:29 অন্য ভাষায় সমান্তরাল একটি চুক্তি পেশ করে: তোমরা যদি আল্লাহর তাকওয়া অবলম্বন করো, তিনি তোমাদের দেবেন 'ফুরকান' — সত্য-মিথ্যা চেনার মানদণ্ড — এবং তোমাদের পাপ মুছে দেবেন। আল্লাহর অঙ্গীকারগুলোর ফটক দেয়ালের বান্দার দিকটাতেই।"
          },
          {
            "en": "At-Tirmidhi relates from Umar (RA) that the Prophet ﷺ said: if you relied upon Allah with true reliance, He would provide for you as He provides for the birds — they go out hungry in the morning and return full. The commentators point at the verbs: the birds go out. Tawakkul is not the abandoning of means but the abandoning of dependence upon means; the going out remains, and the reckoning moves to Allah.",
            "bn": "তিরমিযী উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: তোমরা যদি আল্লাহর ওপর যথার্থ ভরসায় ভরসা করতে, তিনি তোমাদের রিযিক দিতেন যেভাবে পাখিদের দেন — তারা সকালে খালি পেটে বের হয় আর ভরা পেটে ফেরে। মুফাসসিরগণ ক্রিয়াপদগুলোর দিকে আঙুল দেখান: পাখিরা বের হয়। তাওয়াক্কুল মানে উপায়-উপকরণ ছেড়ে দেওয়া নয়, বরং উপকরণের ওপর নির্ভরতা ছেড়ে দেওয়া; বের হওয়াটা থেকে যায়, আর হিসাবটা চলে যায় আল্লাহর কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah Keeps Repeating It",
          "bn": "সূরাটি বারবার বলে"
        },
        "p": [
          {
            "en": "Surah at-Talaq will not let the theme go. 65:4 promises that whoever has taqwa of Allah, He will make his affair easy for him; 65:5 adds that He will erase his misdeeds and magnify his reward. Three promises within a few verses, each hung on the same condition, each placed between rulings about waiting periods and maintenance. The repetition teaches that ease is not the absence of hard rulings; it is what Allah threads through them for the one who keeps them.",
            "bn": "সূরা আত-তালাক বিষয়টি ছাড়ে না। 65:4 প্রতিশ্রুতি দেয়: যে আল্লাহর তাকওয়া অবলম্বন করে, তিনি তার কাজ সহজ করে দেন; 65:5 যোগ করে: তিনি তার পাপ মুছে দেবেন এবং তার প্রতিদান বহুগুণ করবেন। কয়েক আয়াতের মধ্যে তিনটি প্রতিশ্রুতি — প্রতিটি ঝোলানো একই শর্তে, প্রতিটি বসানো ইদ্দত ও ভরণপোষণের বিধানের ফাঁকে ফাঁকে। এই পুনরাবৃত্তি শেখায়: সহজতা মানে কঠিন বিধানের অনুপস্থিতি নয়; সহজতা হলো তা-ই, যা আল্লাহ সেই বিধানগুলোর ভেতর দিয়ে বুনে দেন তার জন্য, যে সেগুলো রক্ষা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Living on the Promise",
          "bn": "প্রতিশ্রুতির ওপর ভর করে চলা"
        },
        "p": [
          {
            "en": "The promise has a working shape. In any pressed situation, the verse asks one question first — where, in this exact matter, is taqwa being bent? The unfair clause, the concealed fact, the vengeful word: that bend is the blocked door. Straightening it is not a spiritual extra alongside solving the problem; on the verse's account, it is the solving, because the makhraj is written on the far side of the fear of Allah.",
            "bn": "প্রতিশ্রুতিটির একটি কার্যকর রূপ আছে। যেকোনো চাপা পরিস্থিতিতে আয়াতটি প্রথমে একটি প্রশ্ন করে — ঠিক এই বিষয়টিতে তাকওয়া কোথায় বাঁকানো হচ্ছে? অন্যায্য শর্তটি, লুকানো তথ্যটি, প্রতিশোধের কথাটি: সেই বাঁকটিই আটকে থাকা দরজা। সেটি সোজা করা সমস্যা সমাধানের পাশাপাশি কোনো বাড়তি আধ্যাত্মিক কাজ নয়; আয়াতের হিসাবে সেটিই সমাধান, কারণ 'মাখরাজ' লেখা আছে আল্লাহভীতির ওপারে।"
          },
          {
            "en": "And the promise disciplines expectation without shrinking it. Expect the way out — the verse guarantees it; do not dictate its route, since the provision comes precisely from where you do not reckon. Many people miss their relief by staring at the one door they had planned. Keep the limits, keep working, keep asking, and let the hour be decided by the measure Allah has set for every thing; He accomplishes His purpose.",
            "bn": "আর প্রতিশ্রুতিটি প্রত্যাশাকে সংকুচিত না করেই শৃঙ্খলায় আনে। বেরোনোর পথ প্রত্যাশা করুন — আয়াত তার নিশ্চয়তা দেয়; কিন্তু তার রাস্তা নির্দেশ করে দেবেন না, কারণ রিযিক আসে ঠিক সেখান থেকেই, যেখানকার হিসাব আপনি করেননি। বহু মানুষ নিজের পরিকল্পনা করা একটিমাত্র দরজার দিকে তাকিয়ে থেকে নিজের স্বস্তিটাই হারায়। সীমা রক্ষা করুন, কাজ চালিয়ে যান, চাইতে থাকুন — আর ক্ষণটির সিদ্ধান্ত ছেড়ে দিন সেই পরিমাপের হাতে, যা আল্লাহ প্রতিটি জিনিসের জন্য নির্ধারণ করেছেন; তিনি তাঁর উদ্দেশ্য পূর্ণ করেই ছাড়েন।"
          }
        ]
      }
    ]
  }
});
