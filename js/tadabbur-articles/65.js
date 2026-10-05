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
  },
  "65:12": {
    "sections": [
      {
        "h": {
          "en": "Where the Surah Lifts Its Gaze",
          "bn": "সূরা যেখানে চোখ তুলে তাকায়"
        },
        "p": [
          {
            "en": "Allahu alladhi khalaqa sab'a samawatin wa mina al-ardi mithlahunna: it is Allah who created seven heavens, and of the earth their like. This is the last verse of Surat at-Talaq, coming after rulings on divorce, the waiting period, housing, maintenance and nursing. Ibn Kathir opens his comment by saying that Allah is here informing of His complete power and immense dominion, so that this becomes a motive to revere the upright religion He has legislated. On his reading, the verse about the heavens stands in the service of the rulings before it.",
            "bn": "আল্লাহুল্লাযী খালাকা সাব‘আ সামাওয়াতিন ওয়া মিনাল আরদি মিসলাহুন্না: আল্লাহই সাতটি আসমান সৃষ্টি করেছেন, আর যমীন থেকেও সেগুলোর মতো। সূরা তালাকের এটিই শেষ আয়াত। এর আগে এসেছে তালাক, ইদ্দত, থাকার ব্যবস্থা, খরচ আর শিশুকে দুধ খাওয়ানোর বিধান। ইবন কাসীর তাঁর ব্যাখ্যা শুরু করেন এই বলে যে, আল্লাহ এখানে নিজের পূর্ণ কুদরত আর বিশাল রাজত্বের খবর দিচ্ছেন, যাতে মানুষ তাঁর দেওয়া সরল দীনকে সম্মান করতে উদ্বুদ্ধ হয়। তাঁর পাঠে আসমানের এই আয়াত আগের বিধানগুলোরই কাজে লাগে।"
          },
          {
            "en": "The other commentators frame the opening differently. At-Tabari hears a contrast: it is Allah who created seven heavens, not the gods and idols the polytheists worship, which cannot create anything. Al-Qurtubi says the verse shows the perfection of His power, and that He is able to raise the dead and bring them to account. Ibn Kathir sets two verses beside the first clause: the words of Nuh (AS) in 71:15, do you not see how Allah created seven heavens in layers, and 17:44, the seven heavens and the earth and whoever is in them glorify Him.",
            "bn": "অন্য তাফসীরকারেরা শুরুটা পড়েন অন্যভাবে। তাবারী এখানে একটা তুলনা শোনেন: সাতটি আসমান সৃষ্টি করেছেন আল্লাহ, মুশরিকরা যেসব দেবতা আর মূর্তির পূজা করে সেগুলো নয়, কারণ ওরা কিছুই সৃষ্টি করতে পারে না। কুরতুবী বলেন, আয়াতটি তাঁর কুদরতের পূর্ণতা দেখায়, আর দেখায় যে তিনি মৃতকে আবার উঠিয়ে হিসাব নিতে সক্ষম। প্রথম বাক্যাংশের পাশে ইবন কাসীর দুটি আয়াত রাখেন। একটি ৭১:১৫, যেখানে নূহ (আঃ) তাঁর কওমকে বলেন: তোমরা কি দেখো না, আল্লাহ কীভাবে স্তরে স্তরে সাত আসমান বানিয়েছেন? অন্যটি ১৭:৪৪: সাত আসমান, যমীন আর এগুলোর ভেতরে যারা আছে, সবাই তাঁর তাসবীহ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Like: Number or Arrangement?",
          "bn": "মিসলাহুন্না: সংখ্যায়, না বিন্যাসে?"
        },
        "p": [
          {
            "en": "Al-Qurtubi starts from what is agreed. There is no disagreement, he says, that the heavens are seven, each above the next, as the hadith of the Night Journey and other reports show. Wa mina al-ardi mithlahunna then means seven earths. On how they are arranged he records two views. The first, which he gives as the view of the majority, is seven earths in layers, each above the next, with a distance between every two earths like the distance between two heavens, and inhabitants from Allah's creation on each.",
            "bn": "কুরতুবী শুরু করেন সর্বসম্মত কথা দিয়ে। তিনি বলেন, আসমান যে সাতটি এবং একটির উপর আরেকটি, এ নিয়ে কোনো মতভেদ নেই। মি‘রাজের হাদীস ও অন্যান্য বর্ণনা তা-ই দেখায়। তাহলে ওয়া মিনাল আরদি মিসলাহুন্না মানে সাতটি যমীন। এগুলোর বিন্যাস নিয়ে তিনি দুই মত উল্লেখ করেন। প্রথম মতকে তিনি জমহুর বা অধিকাংশের মত বলেন। সে মতে সাতটি যমীন স্তরে স্তরে সাজানো, প্রতিটি আরেকটির উপরে। দুই আসমানের মাঝে যতটা দূরত্ব, দুই যমীনের মাঝেও ততটা, আর প্রতিটি যমীনে আল্লাহর সৃষ্টির মধ্য থেকে বাসিন্দা আছে।"
          },
          {
            "en": "The second view is ad-Dahhak's: seven earths, but laid upon each other with no gaps between them, unlike the heavens. Al-Qurtubi judges the first view sounder, because reports in at-Tirmidhi, an-Nasa'i and others point to it. He then adds a third view, which al-Kalbi relates from Abu Salih from Ibn Abbas (RA): seven earths spread out, not stacked, with seas dividing them and the sky shading them all. He records al-Mawardi weighing whether, on each picture, the call of Islam would bind anyone on the other earths, and closes: Allah knows best what He has kept to Himself.",
            "bn": "দ্বিতীয় মতটি দাহহাকের। যমীন সাতটিই, তবে একটির উপর আরেকটি এমনভাবে চাপানো যে মাঝে কোনো ফাঁক নেই, আসমানের মতো নয়। কুরতুবী প্রথম মতকে বেশি সঠিক মনে করেন, কারণ তিরমিযী, নাসাঈ ও অন্যান্য গ্রন্থের বর্ণনা সেদিকেই ইঙ্গিত করে। এরপর তিনি তৃতীয় একটি মত আনেন, যা কালবী আবু সালিহের সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন। সে মতে সাতটি যমীন পাশাপাশি বিছানো, স্তূপ করা নয়। সাগর এগুলোকে আলাদা করে রেখেছে, আর আকাশ সবগুলোর উপর ছায়া দেয়। প্রতিটি ছবিতে অন্য যমীনের কারও উপর ইসলামের দাওয়াত বর্তায় কি না, মাওয়ার্দীর সেই বিচারও তিনি তুলে আনেন। শেষে বলেন: আল্লাহ যা নিজের জ্ঞানে রেখে দিয়েছেন, তা তিনিই ভালো জানেন।"
          },
          {
            "en": "Others place the likeness elsewhere. Al-Baghawi glosses mithlahunna with a two-word addition: in number. At-Tabari locates it in what the earths contain: He created of the earth their like, because in each of them there is creation as there is in the heavens. Ibn Kathir reads it as seven as well, and rejects a further reading. Whoever took the seven to mean seven climes, he says, went far from the mark, strained the sense, and went against the Qur'an and the hadith without support. The Muyassar keeps to the plain gloss that He created seven earths.",
            "bn": "কেউ কেউ সাদৃশ্যটা খোঁজেন অন্য জায়গায়। বাগাভী মিসলাহুন্না শব্দের পাশে দুই শব্দের একটা ব্যাখ্যা জুড়ে দেন: সংখ্যায়। তাবারী সাদৃশ্য দেখেন যমীনগুলোর ভেতরের জিনিসে। তাঁর মতে আল্লাহ যমীন থেকেও আসমানের মতো সৃষ্টি করেছেন, কারণ আসমানে যেমন সৃষ্টি আছে, প্রতিটি যমীনেও তেমনি আছে। ইবন কাসীরও একে সাতটিই পড়েন, আর আরেকটি পাঠ নাকচ করেন। তাঁর ভাষায়, যে এই সাতকে সাতটি ভূখণ্ড বা ইকলীম ধরেছে, সে লক্ষ্য থেকে অনেক দূরে সরে গেছে, অর্থ টেনে বাড়িয়েছে, আর কোনো দলিল ছাড়াই কুরআন ও হাদীসের বিরোধিতা করেছে। মুয়াসসার সোজা কথায় থামে: তিনি সাতটি যমীন সৃষ্টি করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions the Text Leaves Open",
          "bn": "যে প্রশ্ন আয়াত খোলা রাখে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an asks what a curious reader would ask. Are the earths stacked in layers or separate, with distance between them as between the heavens? Do creatures live on each, with air and atmosphere? The Qur'an, it answers, is silent on these questions. Traditions exist, but the leading hadith authorities disagree about them: some scholars authenticated them, others graded them fabricated. None of our religious or worldly needs depends on settling this, and nobody will be questioned about it in the grave or at the Resurrection.",
            "bn": "মাআরিফুল কুরআন সেই প্রশ্নগুলোই তোলে, যা কৌতূহলী পাঠকের মনে আসে। যমীনগুলো কি স্তরে স্তরে সাজানো, নাকি আলাদা আলাদা? আসমানের মতো এগুলোর মাঝেও কি দূরত্ব আছে? প্রতিটিতে কি আলাদা প্রাণী থাকে, সেখানে কি বাতাস আর আবহমণ্ডল আছে? তার জবাব হলো, এসব প্রশ্নে কুরআন নীরব। এ বিষয়ে কিছু বর্ণনা আছে, তবে হাদীসের শীর্ষ ইমামেরা সেগুলোর বিশুদ্ধতা নিয়ে একমত নন। কেউ সেগুলোকে সহীহ বলেছেন, কেউ বানোয়াট বলেছেন। আমাদের দীন বা দুনিয়ার কোনো প্রয়োজন এর মীমাংসার উপর নির্ভর করে না। কবরে বা কিয়ামতে এ নিয়ে কাউকে প্রশ্নও করা হবে না।"
          },
          {
            "en": "So it names what it calls the safest position: to believe that there are seven earths as there are seven heavens, created by Allah's power, since that much the Qur'an mentions. It credits the pious predecessors with a rule: leave unexplained what Allah has left unexplained, where no ruling or need is at stake. The earliest reports show the same reserve. At-Tabari and Ibn Kathir both relate, through Mujahid, that Ibn Abbas (RA) said of this verse: were I to tell you its interpretation you would disbelieve, and your disbelief would be your denying it.",
            "bn": "তাই মাআরিফুল কুরআন যাকে সবচেয়ে নিরাপদ অবস্থান বলে, তা হলো এই বিশ্বাস রাখা যে, যেমন সাতটি আসমান আছে, তেমনি সাতটি যমীনও আছে, আল্লাহ নিজের কুদরতে সেগুলো বানিয়েছেন। কুরআন এটুকুই বলেছে। পূর্বসূরি নেককারদের একটা নীতিও সে উল্লেখ করে: আল্লাহ যা অস্পষ্ট রেখেছেন, তা অস্পষ্টই থাকতে দাও। তবে তা সেখানেই, যেখানে কোনো বিধান বা প্রয়োজন জড়িত নয়। একই রকম সংযম দেখা যায় একেবারে প্রথম যুগের বর্ণনায়। তাবারী ও ইবন কাসীর দুজনেই মুজাহিদের সূত্রে বর্ণনা করেন, ইবন আব্বাস (রাঃ) এ আয়াত সম্পর্কে বলেছিলেন: আমি যদি তোমাদের এর ব্যাখ্যা বলি, তোমরা কুফরি করবে, আর তোমাদের কুফরি হবে একে অস্বীকার করা।"
          },
          {
            "en": "At-Tabari also relies on a report through Abu ad-Duha from Ibn Abbas (RA): in every earth there is the like of Ibrahim (AS), and the like of the creation on this earth. Ibn Kathir gives a fuller version from al-Bayhaqi, with al-Bayhaqi's own verdict: its chain to Ibn Abbas is sound, yet it is highly anomalous, and he knew of no corroboration for Abu ad-Duha in it. Ibn Kathir also brings a report from Ibn Abi ad-Dunya about a white land in the west, and calls it mursal and very munkar.",
            "bn": "তাবারী আবুদ দুহার সূত্রে ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনার উপরও ভর দেন: প্রতিটি যমীনে ইবরাহীম (আঃ)-এর মতো কেউ আছেন, আর এই যমীনের সৃষ্টির মতো সৃষ্টি আছে। ইবন কাসীর বায়হাকী থেকে এর আরও বিস্তারিত রূপ আনেন, তারপর বায়হাকীর নিজের রায়ও উদ্ধৃত করেন। রায়টি এই: ইবন আব্বাস পর্যন্ত এর সনদ সহীহ, কিন্তু বর্ণনাটি একেবারেই শায, আর এ বিষয়ে আবুদ দুহার কোনো সমর্থক বর্ণনাকারী তাঁর জানা নেই। পশ্চিমের এক সাদা ভূমি নিয়ে ইবন আবিদ দুনইয়ার একটি বর্ণনাও ইবন কাসীর আনেন, এবং একে মুরসাল ও অত্যন্ত মুনকার বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hand-Span Down to Seven",
          "bn": "এক বিঘত থেকে সাত যমীন"
        },
        "p": [
          {
            "en": "For the number itself, Ibn Kathir points to a hadith he says is in both Sahihs. Al-Bukhari records it in his Sahih (2453), and this is its wording. Abu Salama had a dispute with some people over land, and he mentioned it to Aisha (RA). She said: O Abu Salama, keep away from the land, for the Prophet ﷺ said: whoever wrongfully takes a hand-span of land will have it put around his neck from seven earths. Al-Bukhari also records, from Ibn Umar (RA) (2454): whoever takes any of the land without right will be sunk on the Day of Resurrection down to seven earths.",
            "bn": "সংখ্যার পক্ষে ইবন কাসীর এমন একটি হাদীসের দিকে ইঙ্গিত করেন, যা তাঁর ভাষায় দুই সহীহ গ্রন্থেই আছে। বুখারী তাঁর সহীহ গ্রন্থে (২৪৫৩) তা বর্ণনা করেছেন, আর তার ভাষ্য এই। আবু সালামার সঙ্গে কিছু লোকের জমি নিয়ে বিবাদ ছিল। তিনি আয়িশা (রাঃ)-কে তা জানালেন। আয়িশা (রাঃ) বললেন: হে আবু সালামা, জমি থেকে দূরে থাকো, কারণ নবী ﷺ বলেছেন: যে অন্যায়ভাবে এক বিঘত জমি নেয়, সাতটি যমীন পর্যন্ত তা তার গলায় পরিয়ে দেওয়া হবে। বুখারী ইবন উমার (রাঃ) থেকেও বর্ণনা করেছেন (২৪৫৪): যে অন্যায়ভাবে জমির কোনো অংশ নেয়, কিয়ামতের দিন তাকে সাতটি যমীন পর্যন্ত ধসিয়ে দেওয়া হবে।"
          },
          {
            "en": "Al-Qurtubi cites the same warning from Sahih Muslim through Sa'id ibn Zayd, mentions a like report from Aisha (RA), and calls a wording from Abu Hurayra clearer than both. The hadith itself does not mention this verse; the commentators bring it as evidence that the earths, like the heavens, are seven. Yet it also hands the reader of a vast verse a small and exact warning. The scale it uses is not the heavens but a hand-span of someone else's ground, and the punishment it names reaches through all the earths the verse has just counted.",
            "bn": "কুরতুবী একই সতর্কবাণী সহীহ মুসলিম থেকে সাঈদ ইবন যায়দের সূত্রে উদ্ধৃত করেন। আয়িশা (রাঃ)-এর অনুরূপ বর্ণনার কথাও বলেন, আর আবু হুরায়রার একটি ভাষ্যকে দুটির চেয়েও স্পষ্ট বলেন। হাদীসটিতে এ আয়াতের উল্লেখ নেই। তাফসীরকারেরা একে আনেন এ কথার প্রমাণ হিসেবে যে, আসমানের মতো যমীনও সাতটি। তবু বিশাল এক আয়াতের পাঠকের হাতে হাদীসটি তুলে দেয় ছোট ও নিখুঁত এক সতর্কবাণী। এর মাপকাঠি আসমান নয়, অন্যের জমির এক বিঘত। আর যে শাস্তির কথা বলে, তা আয়াতে গোনা সবগুলো যমীন পর্যন্ত পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Command Descending Among Them",
          "bn": "তাদের মাঝে নেমে আসা আদেশ"
        },
        "p": [
          {
            "en": "Yatanazzalu al-amru baynahunna: the command descends among them. At-Tabari explains it as the command of Allah coming down between the seventh heaven and the seventh earth, and he cites Mujahid for the same span, between the seventh earth and the seventh heaven. Al-Qurtubi gives Mujahid's line as the command descending from the seven heavens to the seven earths, and adds al-Hasan's: between every two heavens there is an earth and a command. Al-Baghawi says it comes down with revelation, from the seventh heaven to the lowest earth.",
            "bn": "ইয়াতানাযযালুল আমরু বাইনাহুন্না: সেগুলোর মাঝে আদেশ নেমে আসে। তাবারী ব্যাখ্যা করেন, আল্লাহর আদেশ সপ্তম আসমান থেকে সপ্তম যমীনের মাঝখানে নেমে আসে। একই বিস্তারের কথা তিনি মুজাহিদ থেকেও আনেন: সপ্তম যমীন থেকে সপ্তম আসমান পর্যন্ত। কুরতুবী মুজাহিদের কথাটি আনেন এভাবে: সাতটি আসমান থেকে সাতটি যমীনে আদেশ নামে। সঙ্গে হাসানের কথাও জুড়ে দেন: প্রতি দুই আসমানের মাঝে একটি যমীন আর একটি আদেশ আছে। বাগাভী বলেন, আদেশ নামে ওহী নিয়ে, সপ্তম আসমান থেকে সবচেয়ে নিচের যমীন পর্যন্ত।"
          },
          {
            "en": "What is the amr here? Al-Qurtubi sets out the answers and shows how the answer changes the span of baynahunna. In the view of Muqatil and others the amr is revelation; then among them points to the space between this uppermost earth, the nearest, and the seventh heaven, the highest. Another view, which he calls the view of most scholars, takes it as decree and destiny, al-qada' wa al-qadar; then the span runs from the lowest earth, the farthest, up to the seventh heaven. He records both and does not settle between them.",
            "bn": "এখানে আমর বলতে কী বোঝানো হয়েছে? কুরতুবী উত্তরগুলো সাজিয়ে দেখান, উত্তর বদলালে বাইনাহুন্না বা মাঝখানের বিস্তারও বদলে যায়। মুকাতিল ও আরও কারও মতে আমর মানে ওহী। তাহলে মাঝখান বলতে বোঝায় আমাদের এই সবচেয়ে উপরের, সবচেয়ে কাছের যমীন থেকে সবচেয়ে উঁচু সপ্তম আসমান পর্যন্ত। আরেক মতকে তিনি অধিকাংশের মত বলেন। সে মতে আমর মানে কাযা ও কদর, অর্থাৎ ফয়সালা ও তাকদীর। তখন বিস্তারটা হয় সবচেয়ে নিচের, সবচেয়ে দূরের যমীন থেকে সপ্তম আসমান পর্যন্ত। তিনি দুটিই উল্লেখ করেন, কোনোটির পক্ষে রায় দেন না।"
          },
          {
            "en": "He lists further glosses. The command comes down with the life of some and the death of others, the wealth of some people and the poverty of others. Or it is the wonder of His management within them: He sends down rain, brings out plants, brings night and day, summer and winter, and creates animals of every kind and form, moving them from state to state. Ibn Kaysan, he notes, says this rests on the breadth of the language, as death is called the amr of Allah, and so are wind and cloud.",
            "bn": "কুরতুবী আরও কিছু ব্যাখ্যা উল্লেখ করেন। আদেশ নামে কারও জীবন আর কারও মৃত্যু নিয়ে, কোনো জাতির সচ্ছলতা আর কোনো জাতির অভাব নিয়ে। অথবা এর মানে এগুলোর ভেতরে তাঁর বিস্ময়কর ব্যবস্থাপনা। তিনি বৃষ্টি নামান, গাছপালা উদ্গত করেন, রাত-দিন আর গ্রীষ্ম-শীত আনেন। নানা জাত ও আকৃতির প্রাণী সৃষ্টি করেন, আর এক অবস্থা থেকে আরেক অবস্থায় নিয়ে যান। কুরতুবী জানান, ইবন কাইসানের মতে এ ব্যাখ্যা ভাষার প্রশস্ততার উপর দাঁড়িয়ে। মৃত্যুকেও আল্লাহর আমর বলা হয়, বাতাস আর মেঘকেও।"
          }
        ]
      },
      {
        "h": {
          "en": "Law and Decree in Tandem",
          "bn": "শরীয়ত আর তাকদীর পাশাপাশি"
        },
        "p": [
          {
            "en": "Some commentators hold the readings together. As-Sa'di says the amr Allah sent down is the laws and religious rulings He revealed to His messengers to remind and admonish His servants, and likewise the cosmic commands of decree by which He manages creation. The Muyassar says it briefly: what He revealed to His messengers and that by which He manages His creation. Qatada, reported by both at-Tabari and al-Baghawi, says that in every earth and every heaven of His there is a creation of His, a command of His and a decree of His.",
            "bn": "কোনো কোনো তাফসীরকার ব্যাখ্যাগুলোকে একসঙ্গে ধরেন। সা'দী বলেন, আল্লাহ আমর নাযিল করেছেন। তা হলো সেই শরীয়ত ও দীনি বিধান, যা তিনি রাসূলদের কাছে ওহী করেছেন বান্দাদের মনে করিয়ে দিতে ও নসীহত করতে। সেই সঙ্গে আছে তাকদীরের সেই সৃষ্টিগত আদেশ, যা দিয়ে তিনি সৃষ্টিজগৎ পরিচালনা করেন। মুয়াসসার সংক্ষেপে একই কথা বলে: তিনি নাযিল করেছেন রাসূলদের কাছে পাঠানো ওহী, আর যা দিয়ে তিনি সৃষ্টিকে পরিচালনা করেন। তাবারী ও বাগাভী দুজনেই কাতাদা থেকে আনেন: তাঁর প্রতিটি যমীন আর প্রতিটি আসমানে আছে তাঁর এক সৃষ্টি, তাঁর এক আদেশ আর তাঁর এক ফয়সালা।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the pairing names. Tashri'i commands are the laws prescribed for those obliged to keep them, brought by angels to the prophets and passed on to humans and jinn. Takwini commands are the decrees by which the universe is brought into being, grows, is depleted and replenished, with life and death among them, and these cover the whole creation. So even if some creature lived between two earths without being bound by the Shari'ah, it says, the verse would still apply.",
            "bn": "মাআরিফুল কুরআন এই জোড়ার দুটি নাম দেয়। তাশরীয়ী আদেশ হলো সেই বিধান, যা পালন করা যাদের উপর ফরয তাদের জন্য নির্ধারিত। ফেরেশতারা তা নবীদের কাছে আনেন, আর নবীরা মানুষ ও জিনের কাছে পৌঁছে দেন। তাকবীনী আদেশ হলো সেই ফয়সালা, যা দিয়ে মহাবিশ্ব অস্তিত্বে আসে, বেড়ে ওঠে, ক্ষয় হয় আর আবার পূর্ণ হয়। জীবন ও মৃত্যুও এরই অংশ, আর তা গোটা সৃষ্টিকে ঘিরে আছে। তাই মাআরিফুল কুরআন বলে, দুই যমীনের মাঝে যদি এমন কোনো প্রাণী থেকেও থাকে যার উপর শরীয়তের দায় নেই, আয়াতের কথা তার বেলায়ও খাটবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Verse Says Know",
          "bn": "কেন বলা হলো: যেন জানো"
        },
        "p": [
          {
            "en": "Li-ta'lamu anna Allaha 'ala kulli shay'in qadir: so that you may know that Allah has power over all things. At-Tabari ties this to the descent: His decree and command come down between them so that people may know the full extent of His power and dominion, and that nothing He wills is beyond Him. Al-Qurtubi argues from the greater to the lesser: whoever made this immense dominion is all the more able over the creation between them, and over pardon and retribution, though all of it is equal within His power.",
            "bn": "লিতা‘লামূ আন্নাল্লাহা ‘আলা কুল্লি শাইয়িন কাদীর: যাতে তোমরা জানো, আল্লাহ সব কিছুর উপর ক্ষমতাবান। তাবারী এই উদ্দেশ্যবাচক অংশকে আদেশ নামার সঙ্গে জুড়ে দেন। তাঁর ব্যাখ্যায়, আল্লাহর ফয়সালা ও আদেশ এগুলোর মাঝে নামে, যাতে মানুষ তাঁর কুদরত আর রাজত্বের পুরো গভীরতা জানতে পারে, আর জানে যে তিনি যা ইচ্ছা করেন তা তাঁর সাধ্যের বাইরে নয়। কুরতুবী বড় থেকে ছোটর দিকে যুক্তি টানেন। যিনি এত বিশাল রাজত্ব বানিয়েছেন, এগুলোর মাঝের সৃষ্টির উপর তাঁর ক্ষমতা আরও বেশি, ক্ষমা আর শাস্তির উপরও। যদিও তাঁর কুদরতের সামনে এর সবই সমান।"
          },
          {
            "en": "Wa anna Allaha qad ahata bi-kulli shay'in 'ilma: and that Allah has encompassed all things in knowledge. At-Tabari says not an atom's weight escapes Him in the earth or in the heavens. Then he draws out a warning: fear His punishment, you who go against your Lord's command, and He encompasses your deeds, counting them against you to repay you on the day every soul is repaid for what it earned. Al-Qurtubi notes the grammar: 'ilman is a confirming verbal noun, because ahata here carries the meaning of knew.",
            "bn": "ওয়া আন্নাল্লাহা কাদ আহাতা বিকুল্লি শাইয়িন ‘ইলমা: আর আল্লাহ জ্ঞানে সব কিছুকে ঘিরে রেখেছেন। তাবারী বলেন, যমীন বা আসমানে অণু পরিমাণ কিছুও তাঁর অগোচরে থাকে না, তারপর তিনি এ থেকে সতর্কবাণী বের করেন। যারা রবের আদেশের বিরোধিতা করো, তাঁর শাস্তিকে ভয় করো। তোমাদের আমলও তিনি ঘিরে রেখেছেন, সেগুলো গুনে রাখছেন, যাতে সেদিন প্রতিদান দেন, যেদিন প্রত্যেকে তার উপার্জনের প্রতিদান পাবে। কুরতুবী ব্যাকরণের দিকটি দেখান: ‘ইলমান শব্দটি জোর দেওয়ার জন্য মাসদার, কারণ এখানে আহাতা মানে জেনেছেন।"
          },
          {
            "en": "As-Sa'di carries the purpose further. All of it, the creation and the command, is so that the servants know Him and know that His power and His knowledge take in everything. When they know Him by His holy attributes and His beautiful names, they worship Him, love Him and fulfil His right. That, he says, is the intended goal of creation and command: knowing Allah and worshipping Him. Those of His righteous servants granted success took it up; the wrongdoers turned away from it.",
            "bn": "সা'দী উদ্দেশ্যটিকে আরও এক ধাপ এগিয়ে নেন। সৃষ্টি আর আদেশ, সবই এজন্য যে বান্দারা তাঁকে চিনবে, আর জানবে যে তাঁর কুদরত ও তাঁর জ্ঞান সব কিছুকে ঘিরে আছে। যখন তারা তাঁর পবিত্র গুণাবলি আর সুন্দর নামগুলোর মাধ্যমে তাঁকে চেনে, তখন তাঁর ইবাদত করে, তাঁকে ভালোবাসে আর তাঁর হক আদায় করে। সা'দীর ভাষায়, সৃষ্টি ও আদেশের আসল লক্ষ্য এটাই: আল্লাহকে চেনা আর তাঁর ইবাদত করা। তাঁর নেক বান্দাদের মধ্যে যারা তাওফীক পেয়েছে, তারা তা পালন করেছে। আর জালিমরা মুখ ফিরিয়ে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Back Inside the House",
          "bn": "আবার সেই ঘরের ভেতরে"
        },
        "p": [
          {
            "en": "The verse does not hand the reader a map of the earths, and the commentary keeps its gathered detail beside Ibn Abbas's reserve. What the verse hands over is something to know. The husband deciding where a divorced wife may live, the father settling a nursing wage, the person tempted to cut corners on a waiting period or on a hand-span of land: all act before a power nothing escapes and a knowledge that takes everything in. The promise of 65:2 and 65:3, a way out and provision from where one does not reckon, comes from this same Lord.",
            "bn": "আয়াতটি পাঠকের হাতে যমীনগুলোর কোনো মানচিত্র তুলে দেয় না। তাফসীরও তার সংগৃহীত খুঁটিনাটির পাশেই রেখে দেয় ইবন আব্বাসের সংযম। আয়াত যা তুলে দেয়, তা হলো জানার একটা বিষয়। তালাকপ্রাপ্তা স্ত্রী কোথায় থাকবে তা ঠিক করছেন যে স্বামী, দুধ খাওয়ানোর পারিশ্রমিক মেটাচ্ছেন যে বাবা, ইদ্দত বা এক বিঘত জমির বেলায় ফাঁকি দিতে প্রলুব্ধ যে মানুষ, সবাই এমন এক কুদরতের সামনে, যার হাত থেকে কিছুই ফসকায় না, আর এমন জ্ঞানের সামনে, যা সব কিছু ঘিরে আছে। ৬৫:২ ও ৬৫:৩ আয়াতের প্রতিশ্রুতি, বেরোনোর পথ আর অভাবনীয় উৎস থেকে রিযক, আসে এই একই রবের কাছ থেকে।"
          }
        ]
      }
    ]
  }
});
