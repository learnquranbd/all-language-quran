/**
 * Tadabbur long-form articles — surah 61.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "61:2": {
    "sections": [
      {
        "h": {
          "en": "A Question That Cuts",
          "bn": "যে প্রশ্ন কেটে বসে"
        },
        "p": [
          {
            "en": "Ya ayyuha alladhina amanu lima taquluna ma la taf'alun: O you who believe, why do you say what you do not do? The Quran uses questions when it wants the listener to convict himself, and this one leaves no shelter: it is addressed to believers, in the vocative of honour, about a gap everyone recognises from inside. No hypocrite is being unmasked here; the people of faith are being asked to look at the distance between their sentences and their schedules.",
            "bn": "'ইয়া আইয়ুহাল্লাযীনা আমানূ লিমা তাকূলূনা মা লা তাফআলূন' — হে ঈমানদারগণ, তোমরা কেন বলো যা তোমরা করো না? কুরআন তখনই প্রশ্ন ব্যবহার করে যখন সে চায় শ্রোতা নিজেই নিজেকে দোষী সাব্যস্ত করুক — আর এই প্রশ্নটি কোনো আশ্রয় রাখে না: এটি সম্বোধিত মুমিনদের প্রতি, সম্মানের সম্বোধনে, এমন এক ফাঁক নিয়ে যা প্রত্যেকে ভেতর থেকে চেনে। এখানে কোনো মুনাফিকের মুখোশ খোলা হচ্ছে না; ঈমানের মানুষদেরই বলা হচ্ছে তাদের বাক্য আর তাদের রুটিনের মধ্যকার দূরত্বটির দিকে তাকাতে।"
          },
          {
            "en": "The next verse states the weight: kabura maqtan 'inda Allahi an taqulu ma la taf'alun — grievous is it, as maqt, in the sight of Allah, that you say what you do not do, 61:3 warns. Maqt is not mild displeasure; the language uses it for the most intense detestation. The commentators pause at that severity: among the sins of the tongue, the unkept word is singled out with a term of loathing the Quran reserves for very few things.",
            "bn": "পরের আয়াত ওজনটি জানায়: 'কাবুরা মাকতান ইনদাল্লাহি আন তাকূলূ মা লা তাফআলূন' — আল্লাহর দৃষ্টিতে 'মাকত' হিসেবে তা কত গুরুতর — তোমরা তা বলো, যা করো না — 61:3। 'মাকত' কোনো মৃদু অসন্তোষ নয়; ভাষায় এটি ব্যবহৃত হয় তীব্রতম ঘৃণার জন্য। মুফাসসিরগণ এই কঠোরতায় থামেন: জিহ্বার পাপগুলোর মধ্যে, না-রাখা কথাটিকেই আলাদা করা হয়েছে এমন এক ঘৃণাসূচক শব্দ দিয়ে, কুরআন যা খুব অল্প জিনিসের জন্য তুলে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Occasion Reported",
          "bn": "বর্ণিত প্রেক্ষাপট"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Abdullah ibn Salam (RA): a group of the companions sat and said, if only we knew which deed is most beloved to Allah, we would offer it — and Allah sent down Surah as-Saff, in which this reproach and the answer both came. They had spoken sincerely, and still the surah begins by tightening the bolt between saying and doing: a wish voiced creates a liability the sincere feel more, not less.",
            "bn": "তিরমিযী আবদুল্লাহ ইবনে সালাম (রাঃ) থেকে বর্ণনা করেন: সাহাবীদের একটি দল বসে বলেছিলেন — আমরা যদি জানতাম কোন আমল আল্লাহর কাছে সবচেয়ে প্রিয়, আমরা তা পেশ করতাম — আর আল্লাহ নাযিল করলেন সূরা আস-সাফ, যাতে এই ভর্ৎসনা ও উত্তর দুটোই এল। তাঁরা কথাটি বলেছিলেন আন্তরিকভাবে, তবু সূরাটি শুরু হয় বলা ও করার মধ্যকার স্ক্রুটি টেনে দিয়ে: মুখে আনা একটি ইচ্ছা এমন এক দায় তৈরি করে, আন্তরিক মানুষরা যা কম নয়, বরং বেশি অনুভব করে।"
          },
          {
            "en": "The surah's structure completes the thought. Two verses after the reproach, 61:4 names what Allah loves: those who fight in His cause in a row, as though they were a structure joined with lead. The contrast is deliberate — speech scatters easily; a saff, a row, is speech become arrangement, bodies actually placed where the words pointed. The companions had asked for the most beloved deed; they were answered with an image of commitment holding formation.",
            "bn": "সূরার কাঠামো ভাবনাটি সম্পূর্ণ করে। ভর্ৎসনার দুই আয়াত পরে, 61:4 নাম বলে আল্লাহ কী ভালোবাসেন: যারা তাঁর পথে লড়ে সারিবদ্ধ হয়ে — যেন তারা সীসা-ঢালাই করা এক ইমারত। বৈপরীত্যটি ইচ্ছাকৃত — কথা সহজে ছড়িয়ে পড়ে; 'সাফ' — সারি — হলো কথা যখন বিন্যাসে পরিণত, দেহগুলো সত্যিই সেখানে স্থাপিত, শব্দগুলো যেদিকে ইশারা করেছিল। সাহাবীরা চেয়েছিলেন সবচেয়ে প্রিয় আমল; উত্তরে তাঁদের দেওয়া হলো ব্যূহ ধরে রাখা অঙ্গীকারের একটি চিত্র।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying Without Doing",
          "bn": "না করে বলা"
        },
        "p": [
          {
            "en": "Tabari relates the range the early commentators saw in the verse: the man who claims deeds he did not do; the one who promises and does not fulfil; those who said they longed to fight, then flinched when fighting was prescribed. The wording covers them all, and later scholars extended the light it casts: the vow deferred, the resolution announced each Ramadan and abandoned, the advice dispensed to others by a tongue its own limbs ignore.",
            "bn": "তাবারী প্রাথমিক যুগের মুফাসসিরগণ আয়াতটিতে যে পরিসর দেখেছেন তা বর্ণনা করেন: যে ব্যক্তি এমন আমলের দাবি করে যা সে করেনি; যে প্রতিশ্রুতি দেয় কিন্তু পূরণ করে না; যারা বলেছিল তারা লড়াইয়ের আকাঙ্ক্ষা রাখে, তারপর লড়াই ফরয হলে পিছিয়ে গেল। শব্দবিন্যাস সবাইকে ঢেকে নেয়, আর পরবর্তী আলিমগণ এর আলো আরও ছড়িয়ে দেন: ফেলে রাখা মানত, প্রতি রমযানে ঘোষিত ও পরিত্যক্ত সংকল্প, আর সেই জিহ্বার অন্যদের বিলানো উপদেশ, যার নিজের অঙ্গ-প্রত্যঙ্গই তা মানে না।"
          },
          {
            "en": "That last case has its own verses and its own terror. 2:44 asks: do you command people to righteousness and forget yourselves, while you recite the Book? Al-Bukhari relates from Usamah ibn Zayd (RA) that the Prophet ﷺ described a man thrown into the Fire whose entrails spill out, and he circles them like a donkey at a mill; asked by people who had known his preaching, he answers: I commanded good and did not do it, and forbade evil and did it.",
            "bn": "শেষ ক্ষেত্রটির নিজস্ব আয়াত এবং নিজস্ব ভয় আছে। 2:44 জিজ্ঞেস করে: তোমরা কি মানুষকে সৎকাজের নির্দেশ দাও আর নিজেদের ভুলে যাও, অথচ তোমরা কিতাব তিলাওয়াত করো? বুখারী উসামা ইবনে যায়েদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ এক ব্যক্তির বর্ণনা দিয়েছেন — তাকে আগুনে নিক্ষেপ করা হবে, তার নাড়িভুঁড়ি বেরিয়ে পড়বে, আর সে তা নিয়ে ঘুরবে যেভাবে গাধা ঘোরে জাঁতাকলে; তার ওয়াজ চেনা লোকেরা জিজ্ঞেস করলে সে উত্তর দেবে: আমি সৎকাজের নির্দেশ দিতাম কিন্তু নিজে করতাম না, মন্দ থেকে নিষেধ করতাম অথচ নিজে করতাম।"
          }
        ]
      },
      {
        "h": {
          "en": "The Standard Kept",
          "bn": "রক্ষিত মানদণ্ড"
        },
        "p": [
          {
            "en": "The Quran also shows the standard kept. Shu'ayb (AS) told his people in 11:88 — I do not intend to differ from you in that which I forbid you — the preacher's integrity stated as policy. And of the Prophet ﷺ, Aisha (RA) said, in what Muslim relates, that his character was the Quran: the Book was not a text he delivered but a description of how he lived. 33:21 draws the conclusion for us: in the Messenger of Allah you have a beautiful example.",
            "bn": "কুরআন মানদণ্ডটি রক্ষিত অবস্থাতেও দেখায়। শুআইব (আঃ) 11:88 আয়াতে তাঁর জাতিকে বলেছিলেন: আমি তোমাদের যা নিষেধ করি, তাতে নিজে তোমাদের বিপরীত করতে চাই না — দাঈর সততা নীতি হিসেবে ঘোষিত। আর নবী ﷺ সম্পর্কে আয়েশা (রাঃ) বলেছেন — মুসলিম যা বর্ণনা করেন — তাঁর চরিত্রই ছিল কুরআন: কিতাবটি তাঁর পৌঁছে দেওয়া কোনো পাঠ্য ছিল না, ছিল তাঁর জীবনযাপনের বিবরণ। 33:21 আমাদের জন্য সিদ্ধান্তটি টেনে দেয়: আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে উত্তম আদর্শ।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Ban on Imperfect Teachers",
          "bn": "অপূর্ণ শিক্ষকদের জন্য নিষেধাজ্ঞা নয়"
        },
        "p": [
          {
            "en": "The commentators are careful about what the verse does not say. It does not require silence from anyone still struggling; if only the flawless could enjoin good, the duty of 3:104 — let there be a community calling to good — would fall from everyone. The condemned thing is the settled split: speaking with no intention of doing, wearing words as costume. The one who commands what he attempts, fails at and repents of is in a different condition entirely — his gap is a wound he is treating, not a wardrobe.",
            "bn": "আয়াতটি কী বলে না, সে বিষয়ে মুফাসসিরগণ সতর্ক। এটি সংগ্রামরত কারও কাছে নীরবতা দাবি করে না; নিখুঁত মানুষরাই কেবল সৎকাজের আদেশ দিতে পারলে 3:104 আয়াতের দায়িত্ব — একটি দল থাকুক যারা কল্যাণের দিকে ডাকে — সবার কাঁধ থেকেই খসে পড়ত। নিন্দিত জিনিসটি হলো থিতু হয়ে যাওয়া বিভাজন: করার কোনো নিয়ত ছাড়াই বলা, শব্দকে পোশাকের মতো পরা। যে ব্যক্তি সেই কাজের আদেশ দেয় যা সে চেষ্টা করে, যাতে ব্যর্থ হয় ও যার জন্য তওবা করে — সে সম্পূর্ণ ভিন্ন অবস্থায় — তার ফাঁকটি একটি ক্ষত, যার সে চিকিৎসা করছে; কোনো পোশাক-আলমারি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Closing the Gap",
          "bn": "ফাঁকটি বন্ধ করা"
        },
        "p": [
          {
            "en": "The verse's discipline runs through the tongue's ledger. Say less ahead of deeds: the Prophet ﷺ, as al-Bukhari relates from Aisha (RA), held the most beloved deeds to Allah to be the most constant, even if small — sustained action over announced ambition. Move commitments from speech to schedule before speaking of them, and let some good deeds remain unannounced entirely, as 2:271 permits concealing charity and calls it better. Words spent after the deed are testimony; spent before it, they are debt.",
            "bn": "আয়াতটির শৃঙ্খলা চলে জিহ্বার খাতা ধরে। আমলের আগে কম বলুন: নবী ﷺ — বুখারী আয়েশা (রাঃ) থেকে যা বর্ণনা করেন — আল্লাহর কাছে সবচেয়ে প্রিয় আমল মনে করতেন সবচেয়ে নিয়মিতটিকে, তা অল্প হলেও — ঘোষিত উচ্চাশার বদলে টিকে থাকা কাজ। অঙ্গীকারগুলো মুখে আনার আগে কথা থেকে রুটিনে সরান, আর কিছু নেক আমল একেবারেই অঘোষিত থাকতে দিন — যেমন 2:271 সদকা গোপন করার অনুমতি দেয় এবং তাকে বলে উত্তম। আমলের পরে খরচ করা শব্দ সাক্ষ্য; আগে খরচ করলে তা ঋণ।"
          },
          {
            "en": "And use the verse as a filter rather than a torment. Before the next promise, the next public resolution, the next piece of advice, its question is available in the Quran's own words: will I do this? Asked honestly, it shrinks speech to the size of intention — and then, strangely, enlarges action, because words no longer spend the energy the deeds needed. The believers of 61:4, standing in their welded row, are the finished picture: people whose saying and doing had become one thing.",
            "bn": "আর আয়াতটিকে যন্ত্রণা নয়, ছাঁকনি হিসেবে ব্যবহার করুন। পরের প্রতিশ্রুতি, পরের প্রকাশ্য সংকল্প, পরের উপদেশটির আগে এর প্রশ্নটি কুরআনের নিজের ভাষাতেই হাতের কাছে: আমি কি এটা করব? সততার সঙ্গে জিজ্ঞেস করলে এটি কথাকে ছেঁটে আনে নিয়তের মাপে — আর তারপর, আশ্চর্যভাবে, কাজকে বড় করে দেয়, কারণ আমলের যে শক্তিটুকু দরকার ছিল, শব্দরা আর তা খরচ করে না। 61:4 আয়াতের মুমিনরা, তাদের ঢালাই-জোড়া সারিতে দাঁড়িয়ে, সমাপ্ত ছবিটি: এমন মানুষ, যাদের বলা আর করা এক জিনিস হয়ে গিয়েছিল।"
          }
        ]
      }
    ]
  }
});
