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
  },
  "61:14": {
    "sections": [
      {
        "h": {
          "en": "Where the Surah Ends",
          "bn": "যেখানে সূরাটি থামে"
        },
        "p": [
          {
            "en": "Ya ayyuha alladhina amanu kunu ansar Allah: O you who believe, be supporters of Allah. This is the last verse of as-Saff. The surah opened by rebuking those who say what they do not do (61:2), and just before this verse it offered a transaction: believe, strive with your wealth and your lives, and receive forgiveness, gardens and a victory near at hand (61:10 to 61:13). Al-Baghawi marks the turn in a single clause: then Allah urged them to support the religion and to strive against those who oppose it.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ কূনূ আনসারাল্লাহ: হে মুমিনগণ, তোমরা আল্লাহর সাহায্যকারী হও। সূরা আস-সফের এটিই শেষ আয়াত। সূরার শুরুতে তিরস্কার ছিল তাদের প্রতি, যারা মুখে যা বলে কাজে তা করে না (৬১:২)। এ আয়াতের ঠিক আগে এসেছিল এক ব্যবসার প্রস্তাব: ঈমান আনো, জান ও মাল দিয়ে জিহাদ কর, তবেই মিলবে মাগফিরাত, জান্নাত আর আসন্ন বিজয় (৬১:১০ থেকে ৬১:১৩)। বাগাভী মোড়টা ধরিয়ে দেন এক বাক্যে: এরপর আল্লাহ তাদের উদ্বুদ্ধ করলেন দীনের সাহায্যে আর বিরোধীদের বিরুদ্ধে জিহাদে।"
          },
          {
            "en": "Al-Qurtubi reads the verse as a reinforcement of the command to strive: be the disciples of your Prophet, so that Allah gives you the upper hand over those who oppose you, as He gave it to the disciples of Isa (AS). He records two views of who is speaking. On one, a word is understood before the command: say to them, O Muhammad, be supporters of Allah. On the other, the address begins directly from Allah: be supporters, as the companions of Isa (AS) were.",
            "bn": "কুরতুবীর চোখে আয়াতটি জিহাদের নির্দেশকে আরও জোরালো করে। অর্থ দাঁড়ায়: তোমরা নিজেদের নবীর হাওয়ারী হয়ে যাও, যাতে আল্লাহ বিরোধীদের উপর তোমাদের বিজয়ী করেন, যেমন বিজয়ী করেছিলেন ঈসা (আঃ)-এর হাওয়ারীদের। কে বলছেন, এ নিয়ে তিনি দুটি মত উল্লেখ করেন। এক মতে নির্দেশের আগে একটি কথা উহ্য আছে: হে মুহাম্মাদ, তাদের বলুন, আল্লাহর সাহায্যকারী হও। অন্য মতে সম্বোধনটা সরাসরি আল্লাহর পক্ষ থেকে: সাহায্যকারী হও, যেমন হয়েছিলেন ঈসা (আঃ)-এর সঙ্গীরা।"
          },
          {
            "en": "The phrase itself has two readings. At-Tabari reports that most readers of Medina and Basra read ansaran, with tanwin, so the sense is helpers for Allah, while most readers of Kufa read ansara Allah, joining the noun to the Name; he judges both well known and sound in meaning. Al-Qurtubi notes that Abu 'Ubayda preferred the joined form to match the disciples' own reply, nahnu ansaru Allah, and glosses it: be supporters of Allah's religion.",
            "bn": "শব্দবন্ধটির দুটি কিরাআত আছে। তাবারী জানান, মদীনা ও বসরার অধিকাংশ কারী তানবীনসহ পড়েছেন আনসারান, তাতে অর্থ হয় আল্লাহর জন্য সাহায্যকারী। কূফার অধিকাংশ কারী পড়েছেন আনসারাল্লাহ, বিশেষ্যটিকে সরাসরি আল্লাহর নামের সঙ্গে যুক্ত করে। তাঁর রায়: দুটিই সুপরিচিত, দুটিরই অর্থ সঠিক। কুরতুবী জানান, আবু উবাইদা যুক্ত রূপটি পছন্দ করেছেন, কারণ হাওয়ারীদের নিজেদের জবাবও ছিল নাহনু আনসারুল্লাহ। এর অর্থ তিনি করেন: আল্লাহর দীনের সাহায্যকারী হও।"
          }
        ]
      },
      {
        "h": {
          "en": "Supporters of His Religion",
          "bn": "তাঁর দীনের পাশে দাঁড়ানো"
        },
        "p": [
          {
            "en": "What does it mean to support Allah? The commentators answer by naming what is supported. The Muyassar glosses ansar Allah as supporters of Allah's religion. Ibn Kathir widens the scope: Allah commands the believers to be His supporters in all their states, in their words and deeds, with their selves and their wealth, and to respond to Allah and His Messenger as the disciples responded to Isa (AS). As-Sa'di also says by words and deeds, and spells it out: upholding Allah's religion, being keen to establish it among others, and striving with body and wealth against whoever resists it.",
            "bn": "আল্লাহর সাহায্য করার মানে কী? তাফসীরকারেরা জবাব দেন, কীসের সাহায্য, সেটা বলে দিয়ে। মুয়াসসার আনসারাল্লাহর অর্থ করে আল্লাহর দীনের সাহায্যকারী। ইবন কাসীর পরিধিটা আরও বড় করেন। তাঁর কথায়, আল্লাহ মুমিনদের নির্দেশ দিচ্ছেন সব অবস্থায় তাঁর সাহায্যকারী হতে, কথায় ও কাজে, জান ও মাল দিয়ে। আর আল্লাহ ও তাঁর রসূলের ডাকে সাড়া দিতে, যেভাবে হাওয়ারীরা সাড়া দিয়েছিলেন ঈসা (আঃ)-এর ডাকে। সা'দীও বলেন কথায় ও কাজে, তারপর খুলে বলেন এর ভেতরে কী আছে: আল্লাহর দীন কায়েম রাখা, অন্যদের মাঝেও তা প্রতিষ্ঠার আগ্রহ রাখা, আর যে এর বিরোধিতা করে তার বিরুদ্ধে শরীর ও সম্পদ দিয়ে জিহাদ করা।"
          },
          {
            "en": "As-Sa'di's list then reaches past the battlefield. Supporting Allah's religion includes answering whoever supports falsehood with what he claims is knowledge: refuting his argument, establishing the proof against him and warning people of him. It includes learning the Book of Allah and the Sunnah of His Messenger and urging others to it, and enjoining what is right and forbidding what is wrong. Read this way, the command reaches the one who studies and the one who teaches, not only the one who stands in a line of battle.",
            "bn": "সা'দীর তালিকা এরপর যুদ্ধের ময়দান ছাড়িয়ে যায়। কেউ জ্ঞানের দাবি তুলে বাতিলের পক্ষ নিলে তার জবাব দেওয়াও আল্লাহর দীনের সাহায্য। তার যুক্তি খণ্ডন করা, তার বিরুদ্ধে দলিল দাঁড় করানো, মানুষকে তার ব্যাপারে সতর্ক করা, সবই এর অংশ। আল্লাহর কিতাব আর রসূলের সুন্নাহ শেখা, অন্যকে শিখতে উৎসাহ দেওয়া, সৎকাজের আদেশ আর অসৎকাজে নিষেধ, এগুলোও তাঁর তালিকায় আছে। এভাবে পড়লে নির্দেশটা শুধু রণাঙ্গনের মানুষের জন্য নয়। যে শেখে আর যে শেখায়, তার কাছেও একই ডাক পৌঁছে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "With Allah or Towards Him",
          "bn": "আল্লাহর সঙ্গে, নাকি তাঁর দিকে"
        },
        "p": [
          {
            "en": "Then comes the comparison: kama qala Isa ibn Maryam lil-hawariyyin man ansari ila Allah, as Isa son of Maryam said to the disciples, who are my supporters ila Allah? The small word ila carries two readings. Al-Baghawi and al-Qurtubi take it as with: who will support me together with Allah. Al-Qurtubi backs this from Arabic usage, citing the saying al-dhawdu ila al-dhawdi ibil, a few camels with a few make a herd, where ila means with. He then gives a second view: who will support me in what brings one near to Allah.",
            "bn": "এরপর আসে তুলনা: কামা কালা ঈসাবনু মারইয়ামা লিলহাওয়ারিয়্যীনা মান আনসারী ইলাল্লাহ, যেমন মারইয়ামের পুত্র ঈসা হাওয়ারীদের বলেছিলেন, ইলাল্লাহ কে আমার সাহায্যকারী? ছোট্ট শব্দ ইলা এখানে দুই অর্থে বোঝা হয়েছে। বাগাভী আর কুরতুবী এর অর্থ নেন সঙ্গে: আল্লাহর সঙ্গে মিলে কে আমাকে সাহায্য করবে? কুরতুবী আরবদের ব্যবহার থেকে এর পক্ষে প্রমাণ দেন। প্রবাদ আছে, আয-যাওদু ইলায যাওদি ইবিল, কয়েকটি উটের সঙ্গে আরও কয়েকটি মিললে পাল হয়। সেখানেও ইলা মানে সঙ্গে। এরপর তিনি দ্বিতীয় একটি মত দেন: যা আল্লাহর নৈকট্যে পৌঁছে দেয়, সেই কাজে কে আমার সাহায্যকারী?"
          },
          {
            "en": "Others follow the direction in the word. The Muyassar has: who among you will take up supporting and helping me in what brings near to Allah. Ibn Kathir: who will aid me in calling to Allah. At-Tabari's paraphrase turns on Allah's own help: who among you are my supporters towards Allah's support of me. Mujahid, in at-Tabari, gives the plainest gloss: who will follow me to Allah. Al-Qurtubi refers back to Al Imran, where the same question and the same answer appear at 3:52, there after Isa (AS) sensed disbelief among his people.",
            "bn": "অন্যরা শব্দটির দিকনির্দেশক অর্থ ধরে রাখেন। মুয়াসসারের ভাষায়: তোমাদের মধ্যে কে আমার সাহায্য ও সহযোগিতার ভার নেবে সেই কাজে, যা আল্লাহর নৈকট্যে নিয়ে যায়? ইবন কাসীরের ভাষায়: আল্লাহর দিকে দাওয়াতের কাজে কে আমাকে সাহায্য করবে? তাবারীর ব্যাখ্যা ঘোরে আল্লাহর নিজের সাহায্যকে ঘিরে: আমার প্রতি আল্লাহর সাহায্যের পথে তোমাদের কে আমার সাহায্যকারী হবে? তাবারীর বর্ণনায় মুজাহিদের ব্যাখ্যা সবচেয়ে সরল: আল্লাহর দিকে কে আমার অনুসরণ করবে? কুরতুবী পাঠককে ফিরিয়ে দেন সূরা আলে ইমরানে। সেখানে ৩:৫২ আয়াতে একই প্রশ্ন, একই জবাব। সেখানে প্রসঙ্গ ছিল, ঈসা (আঃ) তাঁর লোকদের মধ্যে কুফর টের পেয়েছিলেন।"
          },
          {
            "en": "The disciples answered without hesitation: nahnu ansaru Allah, we are Allah's supporters. As-Sa'di pictures the moment: the disciples hastened forward. At-Tabari glosses their reply: supporters of Allah upon the truth He sent His prophets with. Ibn Kathir: we are your supporters in what you were sent with, and we will stand by you in it. For this reason, he adds, Isa (AS) sent them out as callers to people in the lands of Sham, among the Israelites and the Greeks.",
            "bn": "হাওয়ারীরা দ্বিধা ছাড়াই জবাব দিলেন: নাহনু আনসারুল্লাহ, আমরাই আল্লাহর সাহায্যকারী। সা'দী মুহূর্তটার ছবি আঁকেন এভাবে: হাওয়ারীরা আগ বাড়িয়ে ছুটে এলেন। তাবারী তাঁদের জবাবের ব্যাখ্যা দেন: আল্লাহ তাঁর নবীদের যে সত্য দিয়ে পাঠিয়েছেন, সেই সত্যের উপর আমরা আল্লাহর সাহায্যকারী। ইবন কাসীরের ভাষায় জবাবটা ছিল: আপনাকে যা দিয়ে পাঠানো হয়েছে, তাতে আমরা আপনার সাহায্যকারী, আপনার পাশে আছি। তিনি যোগ করেন, এ কারণেই ঈসা (আঃ) তাঁদের দাঈ বানিয়ে পাঠিয়েছিলেন শামের ভূখণ্ডে, বনী ইসরাঈল ও গ্রিকদের মাঝে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why They Were Called Hawariyyun",
          "bn": "হাওয়ারী নামের পেছনে"
        },
        "p": [
          {
            "en": "Who were the hawariyyun? Ma'arif al-Qur'an, citing Ruh al-Ma'ani from al-Azhari, defines a hawari as a sincere friend free of any kind of adulteration, and says this is why those who believed in Isa (AS) bore the name; they were twelve in number. Al-Qurtubi calls the hawariyyun the elect of the messengers and Isa's chosen ones, twelve men, and reports from Ibn 'Abbas that they were the first of the Children of Israel to believe in him.",
            "bn": "হাওয়ারী কারা ছিলেন? মাআরিফুল কুরআন রূহুল মাআনীর বরাতে আযহারীর ব্যাখ্যা আনে: হাওয়ারী মানে এমন খাঁটি বন্ধু, যার মধ্যে কোনো ভেজাল নেই। এ কারণেই ঈসা (আঃ)-এর প্রতি ঈমান আনা লোকদের এই নাম, আর তাঁরা ছিলেন ১২ জন। কুরতুবী হাওয়ারীদের বলেন রসূলদের বিশেষ ঘনিষ্ঠজন, ঈসা (আঃ)-এর বাছাই করা বারোজন মানুষ। ইবন আব্বাস (রাঃ)-এর বরাতে তিনি জানান, বনী ইসরাঈলের মধ্যে তাঁরাই সবার আগে তাঁর প্রতি ঈমান এনেছিলেন।"
          },
          {
            "en": "Other reports explain the name by a trade. At-Tabari has Ibn 'Abbas say they were named for the whiteness of their clothes and were fishermen, and ad-Dahhak say the word means washers in Nabataean. Al-Qurtubi relates from Muqatil that Allah told Isa (AS) to go to the river where the fullers worked and ask them for support; they answered, we will support you, then believed him and helped him.",
            "bn": "কিছু বর্ণনা নামটির ব্যাখ্যা দেয় পেশা দিয়ে। তাবারীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, সাদা পোশাকের কারণে তাঁদের এই নাম, আর তাঁরা ছিলেন মাছ শিকারি। দাহহাক বলেন, নাবাতী ভাষায় হাওয়ারী মানে ধোপা। কুরতুবী মুকাতিলের বরাতে আনেন: আল্লাহ ঈসা (আঃ)-কে বললেন, নদীর যে ঘাটে কাপড় ধোয়ার লোকেরা কাজ করে, সেখানে গিয়ে তাদের কাছে সাহায্য চাও। তিনি গেলেন, প্রশ্ন করলেন। তারা বলল, আমরা আপনাকে সাহায্য করব। তারপর তাঁকে সত্য বলে মানল, সাহায্যও করল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Earned at al-'Aqaba",
          "bn": "আকাবায় পাওয়া এক নাম"
        },
        "p": [
          {
            "en": "Ibn Kathir sets a parallel beside the disciples. In the days of Hajj, he writes, the Messenger of Allah ﷺ used to ask who would shelter him until he conveyed his Lord's message, for Quraysh had prevented him. Ibn Kathir names no collection for that wording. A report of the same scene is in at-Tirmidhi (2925), from Jabir: the Prophet ﷺ would present himself at the standing place and say, \"Is there no man who will carry me to his people? For Quraysh have prevented me from conveying the speech of my Lord.\" At-Tirmidhi grades it gharib sahih.",
            "bn": "হাওয়ারীদের পাশে ইবন কাসীর একটি সমান্তরাল ছবি রাখেন। তিনি লেখেন, হজের দিনগুলোতে আল্লাহর রসূল ﷺ জিজ্ঞেস করতেন, কে তাঁকে আশ্রয় দেবে যাতে তিনি রবের বার্তা পৌঁছাতে পারেন, কারণ কুরাইশ তাঁকে বাধা দিয়েছে। এই শব্দগুলোর জন্য ইবন কাসীর কোনো হাদীসগ্রন্থের নাম বলেননি। একই দৃশ্যের একটি বর্ণনা আছে তিরমিযীতে (২৯২৫), জাবির (রাঃ) থেকে। নবী ﷺ মাওকিফে নিজেকে মানুষের সামনে পেশ করতেন আর বলতেন: \"এমন কেউ কি নেই, যে আমাকে তার কওমের কাছে নিয়ে যাবে? কারণ কুরাইশ আমাকে আমার রবের কালাম পৌঁছাতে বাধা দিয়েছে।\" তিরমিযী একে গরীব সহীহ বলেছেন।"
          },
          {
            "en": "Then, Ibn Kathir continues, Allah brought him the Aws and the Khazraj of Medina. They pledged to him, stood by him, and accepted the condition that they would protect him from everyone, the black and the red, if he emigrated to them; when he came with his Companions, they kept what they had promised Allah. That is why Allah and His Messenger named them al-Ansar, the Supporters, and the name became theirs. At-Tabari carries Qatada's comment on the verse: Allah had supporters from this community who strove for His Book and His right.",
            "bn": "ইবন কাসীর বলে চলেন, এরপর আল্লাহ তাঁর জন্য মদীনার আওস ও খাযরাজকে এনে দিলেন। তারা তাঁর হাতে বাইআত করল, তাঁর পাশে দাঁড়াল। শর্ত মেনে নিল, তিনি হিজরত করে এলে কালো-লাল নির্বিশেষে সবার হাত থেকে তাঁকে রক্ষা করবে। সঙ্গীদের নিয়ে তিনি যখন এলেন, আল্লাহর সঙ্গে করা অঙ্গীকার তারা পূরণ করল। এ কারণেই আল্লাহ ও তাঁর রসূল তাদের নাম দিলেন আনসার, সাহায্যকারী দল। নামটা তাদের পরিচয় হয়ে গেল। তাবারী এ আয়াতে কাতাদার মন্তব্য আনেন: এই উম্মতের মধ্যেও আল্লাহর সাহায্যকারী ছিল, যারা তাঁর কিতাব ও তাঁর হকের জন্য জিহাদ করেছে।"
          },
          {
            "en": "Qatada's reports in at-Tabari add numbers and names. In one he says seventy men came and pledged at al-'Aqaba, supported him and sheltered him until Allah made His religion prevail; in another line the count is seventy-two. Al-Qurtubi gives Ma'mar's version, seventy men who pledged on the night of al-'Aqaba. Yet a separate report from Qatada in at-Tabari says the disciples of this community were all from Quraysh and names twelve, among them Abu Bakr, 'Umar and 'Ali. The two reports point the word at different men, and neither commentator settles it.",
            "bn": "তাবারীতে কাতাদার বর্ণনাগুলো সংখ্যা আর নামও যোগ করে। একটিতে তিনি বলেন, সত্তরজন লোক এসে আকাবায় বাইআত করেছিল। তারা তাঁকে সাহায্য করেছিল, আশ্রয় দিয়েছিল, যতক্ষণ না আল্লাহ তাঁর দীনকে বিজয়ী করলেন। আরেক জায়গায় সংখ্যাটা বাহাত্তর। কুরতুবী আনেন মা'মারের ভাষ্য: সত্তরজন, যারা আকাবার রাতে বাইআত করেছিল। অথচ তাবারীতেই কাতাদার আরেক বর্ণনা বলে, এই উম্মতের হাওয়ারীরা সবাই ছিলেন কুরাইশের, আর সেখানে ১২ জনের নাম আছে, যাঁদের মধ্যে আবু বকর, উমর ও আলী (রাঃ)। দুই বর্ণনা শব্দটিকে দুই দল মানুষের দিকে ইঙ্গিত করে। কোনো তাফসীরকারই এর মীমাংসা করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Divided Over Him",
          "bn": "তাঁকে ঘিরে দুই ভাগ"
        },
        "p": [
          {
            "en": "Fa-amanat ta'ifatun min bani Isra'il wa kafarat ta'ifa: a faction of the Children of Israel believed and a faction disbelieved. At-Tabari keeps to the plain sense: a faction believed in Isa (AS) and a faction of them disbelieved in him. As-Sa'di ties the belief to the call of Isa (AS) and the disciples; the others would not yield to it. Al-Qurtubi places both factions in the time of Isa (AS) and says they divided after he was raised to heaven.",
            "bn": "ফাআমানাত তাইফাতুম মিম বানী ইসরাঈলা ওয়া কাফারাত তাইফাহ: বনী ইসরাঈলের একদল ঈমান আনল, আরেক দল কুফরি করল। তাবারী সরল অর্থেই থাকেন: একদল ঈসা (আঃ)-এর প্রতি ঈমান আনল, আরেক দল তাঁকে অস্বীকার করল। সা'দী ঈমানকে জুড়ে দেন ঈসা (আঃ) ও হাওয়ারীদের দাওয়াতের সঙ্গে। অন্যরা সেই দাওয়াতের কাছে মাথা নোয়ায়নি। কুরতুবী দুই দলকেই রাখেন ঈসা (আঃ)-এর যুগে, আর বলেন, তাঁকে আসমানে তুলে নেওয়ার পর তারা বিভক্ত হয়ে পড়ে।"
          },
          {
            "en": "Ibn Kathir describes the division further. One faction was guided by what Isa (AS) brought; another went astray, denied his prophethood and cast grave slanders at him and his mother; and a faction among his followers went to excess about him, raising him above the prophethood Allah gave him, and split into sects. A report from Ibn 'Abbas, carried by at-Tabari, al-Baghawi and Ibn Kathir, says that after he was raised his people split into three: one said he was God, one said he was the son of God, and one said he was Allah's servant and messenger, and these were the believers.",
            "bn": "ইবন কাসীর বিভক্তিটা আরও খুলে বলেন। একদল ঈসা (আঃ)-এর আনা হিদায়াত গ্রহণ করল। আরেক দল পথ হারাল। তারা তাঁর নবুওয়াত অস্বীকার করল, তাঁর ও তাঁর মায়ের নামে জঘন্য অপবাদ রটাল। আর তাঁর অনুসারীদের মধ্যে একদল তাঁকে নিয়ে বাড়াবাড়ি করল। আল্লাহ তাঁকে যে নবুওয়াত দিয়েছিলেন, তারা তাঁকে তুলে দিল তারও উপরে, তারপর নানা উপদলে ভাগ হয়ে গেল। তাবারী, বাগাভী ও ইবন কাসীর ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন। তাঁকে তুলে নেওয়ার পর তাঁর লোকেরা তিনটি দলে ভাগ হয়। একটি দল বলল, তিনি ছিলেন স্বয়ং আল্লাহ। আরেক দল বলল, আল্লাহর পুত্র। তৃতীয় দল বলল, তিনি আল্লাহর বান্দা ও রসূল। এরাই ছিল মুমিন।"
          }
        ]
      },
      {
        "h": {
          "en": "When and How They Prevailed",
          "bn": "বিজয় কখন, কীভাবে"
        },
        "p": [
          {
            "en": "Fa-ayyadna alladhina amanu 'ala 'aduwwihim fa-asbahu zahirin: so We supported those who believed against their enemy, and they became dominant. Mujahid, in at-Tabari, glosses ayyadna as qawwayna, We strengthened; as-Sa'di as We strengthened them and helped them. For zahirin al-Baghawi gives exalted and prevailing, and al-Qurtubi derives it from zahartu 'ala al-ha'it, I climbed up onto the wall: they rose above. The harder question is when they prevailed, and by what.",
            "bn": "ফাআইয়াদনাল্লাযীনা আমানূ আলা আদুওয়্যিহিম ফাআসবাহূ যাহিরীন: তখন যারা ঈমান এনেছিল, তাদের আমি শত্রুর বিরুদ্ধে শক্তি দিলাম, ফলে তারা বিজয়ী হলো। তাবারীর বর্ণনায় মুজাহিদ আইয়াদনার অর্থ করেন কাওয়াইনা, আমি শক্তিশালী করলাম। সা'দীর ভাষায়: আমি তাদের শক্তি দিলাম, সাহায্য করলাম। যাহিরীনের অর্থ বাগাভী দেন উচ্চে আসীন ও প্রবল। কুরতুবী শব্দটির মূল খোঁজেন আরবদের কথায়: যাহারতু আলাল হাইত, আমি দেয়ালের উপরে উঠলাম। অর্থাৎ তারা উপরে উঠে গেল। কঠিন প্রশ্নটা হলো, তারা বিজয়ী হলো কখন, আর কীসের জোরে।"
          },
          {
            "en": "In the Ibn 'Abbas report, the two disbelieving factions overcame the believing faction, and Islam remained obscured until Allah sent Muhammad ﷺ; then the believing faction prevailed. At-Tabari's own reading follows it: Allah strengthened the believers among the Children of Israel through Muhammad's ﷺ confirming that Isa (AS) is the servant of Allah and His Messenger. Ibrahim, in at-Tabari, says their proof became manifest. The Muyassar and Ibn Kathir also place the victory at the sending of Muhammad ﷺ. Ma'arif al-Qur'an, from Mazhari, reads those who believed as the followers of Isa (AS), triumphing through the Final Messenger ﷺ.",
            "bn": "ইবন আব্বাস (রাঃ)-এর বর্ণনায় কুফরি করা দুই দল মুমিন দলটিকে পরাস্ত করে। আল্লাহ মুহাম্মাদ ﷺ-কে পাঠানো পর্যন্ত ইসলাম চাপা পড়ে থাকে। তারপর মুমিন দলটি বিজয়ী হয়। তাবারীর নিজের ব্যাখ্যাও এ পথে চলে। মুহাম্মাদ ﷺ সাক্ষ্য দিলেন যে ঈসা (আঃ) আল্লাহর বান্দা ও রসূল, আর এর মাধ্যমেই আল্লাহ বনী ইসরাঈলের মুমিনদের শক্তি দিলেন। তাবারীর বর্ণনায় ইবরাহীম বলেন, তাদের দলিল তখন স্পষ্ট হয়ে উঠল। মুয়াসসার ও ইবন কাসীরও বিজয়টাকে রাখেন মুহাম্মাদ ﷺ-এর আগমনের সময়ে। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, এখানে মুমিন বলতে ঈসা (আঃ)-এর অনুসারীরা, যারা শেষ নবী ﷺ-এর মাধ্যমে বিজয় পেল।"
          },
          {
            "en": "Others keep the victory in the time of Isa (AS). Mujahid, in al-Qurtubi, says they were supported in their own day against those who disbelieved in him. Al-Qurtubi also records a view that the support is for the Muslims now, over the two errant factions, because Isa (AS) did not fight anyone and his companions' religion after him had no fighting. Zayd ibn 'Ali and Qatada say they prevailed by argument and proof. Ma'arif notes, from Ruh al-Ma'ani, that his religion is commonly held to have had no jihad, and allows only that believers may have defended themselves.",
            "bn": "অন্যরা বিজয়টাকে রাখেন ঈসা (আঃ)-এর যুগেই। কুরতুবীর বর্ণনায় মুজাহিদ বলেন, যারা ঈসা (আঃ)-কে অস্বীকার করেছিল, তাদের বিরুদ্ধে মুমিনদের সাহায্য করা হয়েছিল তাদের নিজেদের সময়েই। কুরতুবী আরেকটি মতও আনেন: সাহায্যটা এখনকার মুসলিমদের জন্য, পথভ্রষ্ট দুই দলের বিরুদ্ধে। কারণ ঈসা (আঃ) কারও সঙ্গে যুদ্ধ করেননি, তাঁর পরে তাঁর সঙ্গীদের দীনেও যুদ্ধ ছিল না। যায়দ ইবন আলী ও কাতাদা বলেন, তারা বিজয়ী হয়েছিল যুক্তি ও প্রমাণের জোরে। মাআরিফুল কুরআন রূহুল মাআনীর বরাতে জানায়, প্রচলিত মত হলো তাঁর দীনে জিহাদের বিধান ছিল না। বড়জোর এটুকু সম্ভব যে মুমিনরা আত্মরক্ষা করতে বাধ্য হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Licence Against Anyone",
          "bn": "কারও বিরুদ্ধে ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes two factions in the time of Isa (AS), and what Allah did for the faction that believed. It licenses nothing against any living person or community, whether Christians, Jews or anyone else. Several of the commentators read the victory as the victory of a proof: a testimony to who Isa (AS) truly was, a servant of Allah and His messenger, honoured here as a prophet whose call was answered. And the command it gives the believer is to support, to call and to learn, not to carry an old quarrel into the present.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঈসা (আঃ)-এর যুগের দুই দলের কথা বলে, আর বলে ঈমান আনা দলটির জন্য আল্লাহ কী করেছিলেন। আজকের কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না, খ্রিস্টান হোক, ইহুদি হোক বা অন্য কেউ। কয়েকজন তাফসীরকার এই বিজয়কে পড়েছেন দলিলের বিজয় হিসেবে। ঈসা (আঃ) আসলে কে ছিলেন, তার সাক্ষ্য: আল্লাহর বান্দা ও রসূল, এমন এক নবী, যাঁর ডাকে সাড়া মিলেছিল। মুমিনকে আয়াতটি নির্দেশ দেয় সাহায্য করতে, দাওয়াত দিতে আর শিখতে। পুরোনো কোনো বিবাদ বর্তমানে টেনে আনতে নয়।"
          },
          {
            "en": "The surah that began with saying what you do not do ends here, with a question that waits for a deed. Ibn Kathir closes his commentary by saying the community of Muhammad ﷺ will remain upon the truth, prevailing, until Allah's command comes, and he refers to sound hadiths without quoting them here. As-Sa'di closes with an address: so you, community of Muhammad, be supporters of Allah and callers to His religion, and He will help you as He helped those before you, and give you the upper hand over your enemy.",
            "bn": "যে সূরা শুরু হয়েছিল না-করা কথা মুখে বলার তিরস্কার দিয়ে, তা শেষ হলো এমন এক প্রশ্নে, যার জবাব চায় কাজ। ইবন কাসীর তাঁর তাফসীর শেষ করেন এই বলে যে মুহাম্মাদ ﷺ-এর উম্মত আল্লাহর আদেশ আসা পর্যন্ত সত্যের উপর বিজয়ী থাকবে। এ প্রসঙ্গে তিনি সহীহ হাদীসের কথা বলেন, তবে কোনো হাদীস উদ্ধৃত করেন না। সা'দী শেষ করেন সম্বোধন দিয়ে: হে মুহাম্মাদের উম্মত, তোমরা আল্লাহর সাহায্যকারী হও, তাঁর দীনের দাঈ হও। তিনি তোমাদের সাহায্য করবেন, যেমন সাহায্য করেছিলেন তোমাদের পূর্ববর্তীদের, আর শত্রুর উপর তোমাদের বিজয়ী করবেন।"
          }
        ]
      }
    ]
  }
});
