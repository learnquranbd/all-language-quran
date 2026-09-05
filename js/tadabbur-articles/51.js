/**
 * Tadabbur long-form articles — surah 51.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "51:20-21": {
    "sections": [
      {
        "h": {
          "en": "Where the Two Lines Fall",
          "bn": "দুই পঙ্‌ক্তি কোথায় বসেছে"
        },
        "p": [
          {
            "en": "Surah adh-Dhariyat opens with oaths and moves quickly to the Day that is coming. Then it describes the people who are ready for it: at 51:15 they are among gardens and springs, at 51:17 they used to sleep but little of the night, at 51:18 they sought forgiveness in the hours before dawn, and at 51:19 there was a due in their wealth for the one who asked and the one who was deprived. That is the portrait. Only then does the surah turn to the evidence.",
            "bn": "সূরা আয-যারিয়াত শুরু হয় শপথ দিয়ে, আর দ্রুতই এগিয়ে যায় আগত সেই দিনটির দিকে। এরপর সে বর্ণনা করে সেই মানুষদের যারা তার জন্য প্রস্তুত: 51:15 আয়াতে তারা জান্নাত ও ঝর্ণাধারার মাঝে, 51:17 আয়াতে তারা রাতে সামান্যই ঘুমাত, 51:18 আয়াতে ভোরের আগের প্রহরে ক্ষমা প্রার্থনা করত, আর 51:19 আয়াতে তাদের সম্পদে ছিল প্রার্থী ও বঞ্চিতের হক। এই হলো ছবিটা। এরপরই সূরাটি ফেরে প্রমাণের দিকে।"
          },
          {
            "en": "The order matters. The signs on the earth and in the self are not offered to settle an argument with a sceptic; they are placed just after a description of people who pray at night and give from their wealth. And 51:22 completes the sweep: in the heaven is your provision and whatever you are promised. Earth, then the self, then the sky. The reader is being walked around his own position and shown that there is no direction in which the evidence is absent.",
            "bn": "ক্রমটা গুরুত্বপূর্ণ। যমীনের ও নিজের ভেতরের নিদর্শনগুলো কোনো সন্দেহবাদীর সঙ্গে তর্ক মেটানোর জন্য পেশ করা হয়নি; সেগুলো রাখা হয়েছে ঠিক সেই মানুষদের বর্ণনার পরে, যারা রাতে নামায পড়ে ও সম্পদ থেকে দেয়। আর 51:22 আয়াত বৃত্তটি পূর্ণ করে: আকাশেই রয়েছে তোমাদের রিযিক আর তোমাদের যা প্রতিশ্রুতি দেওয়া হয়েছে। যমীন, তারপর নিজ সত্তা, তারপর আকাশ। পাঠককে তার নিজের অবস্থানের চারপাশে ঘুরিয়ে দেখানো হচ্ছে যে কোনো দিকেই প্রমাণের অভাব নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Sentence, Two Halves",
          "bn": "একটি বাক্য, দুটি অর্ধেক"
        },
        "p": [
          {
            "en": "In the Arabic, 51:21 does not repeat the word for signs. It reads simply wa fi anfusikum, and in your own selves, hanging on the clause before it. Grammatically the self is not a second topic; it is a second location for the same signs. Anyone splitting these two lines into separate lessons is cutting a sentence in half. What is on the earth and what is in you are being named in one breath as the same kind of evidence.",
            "bn": "আরবিতে 51:21 আয়াত 'নিদর্শন' শব্দটি আবার বলে না। সেখানে কেবল আছে ওয়া ফী আনফুসিকুম — আর তোমাদের নিজেদের মধ্যে — যা আগের বাক্যাংশের ওপর ঝুলে থাকে। ব্যাকরণগতভাবে নিজ সত্তা এখানে দ্বিতীয় কোনো প্রসঙ্গ নয়; এটি একই নিদর্শনের দ্বিতীয় ঠিকানা। যিনি এই দুই পঙ্‌ক্তিকে আলাদা দুটি শিক্ষায় ভাগ করেন, তিনি একটি বাক্যকে মাঝখান থেকে কাটছেন। যমীনে যা আছে আর তোমার ভেতরে যা আছে — একই নিঃশ্বাসে দুটিকে একই ধরনের প্রমাণ বলা হচ্ছে।"
          },
          {
            "en": "The person addressed also changes. 51:20 speaks about the muqinin in the third person, those settled in certainty; 51:21 turns and addresses you directly, and ends with a question: afala tubsirun, will you not then see? The closing verb is about looking, not about proving. The complaint the verse lodges is not that the evidence is thin. It is that a man can carry the evidence around inside his own skin for seventy years and never once look at it.",
            "bn": "সম্বোধিত ব্যক্তিও বদলে যায়। 51:20 আয়াত মুক্বিনীনদের কথা বলে তৃতীয় পুরুষে — যারা দৃঢ় প্রত্যয়ে থিতু; আর 51:21 আয়াত ঘুরে সরাসরি তোমাকেই সম্বোধন করে, এবং শেষ হয় একটি প্রশ্নে: আফালা তুবসিরূন — তবু কি তোমরা দেখবে না? শেষ ক্রিয়াপদটি দেখা নিয়ে, প্রমাণ করা নিয়ে নয়। আয়াতটির অভিযোগ এই নয় যে প্রমাণ কম। অভিযোগ হলো, একজন মানুষ সত্তর বছর ধরে নিজের চামড়ার ভেতরে প্রমাণটি বয়ে বেড়াতে পারে অথচ একবারও সেদিকে তাকায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Self as Evidence",
          "bn": "নিজ সত্তাই প্রমাণ"
        },
        "p": [
          {
            "en": "What the mufassirun draw out of anfusikum is deliberately wide: the making of the body and the fitting of each part to its use, the powers of the soul, the provision a person receives and the guidance he is offered. Their recurring observation is a simple one. A person is nearer to himself than to anything else in existence, and knows himself less carefully than he knows his own trade. The nearest sign is the one most reliably overlooked.",
            "bn": "আনফুসিকুম শব্দ থেকে মুফাসসিরগণ যা বের করেন তা ইচ্ছাকৃতভাবেই প্রশস্ত: দেহের গঠন ও প্রতিটি অঙ্গকে তার কাজের সঙ্গে মানিয়ে দেওয়া, আত্মার শক্তিগুলো, মানুষ যে রিযিক পায় এবং যে হিদায়াত তাকে দেওয়া হয়। তাঁদের বারবার বলা পর্যবেক্ষণটি সরল। অস্তিত্বের আর সবকিছুর চেয়ে মানুষ নিজের বেশি কাছে, অথচ নিজের পেশাকে যতটা যত্ন করে জানে নিজেকে ততটা নয়। সবচেয়ে কাছের নিদর্শনটিই সবচেয়ে নিশ্চিতভাবে চোখ এড়িয়ে যায়।"
          },
          {
            "en": "The verse invites this looking without prescribing a method, and the safest reflections are the plainest. You did not choose to be born, or when, or to whom. You cannot command your own sleep, or make yourself forget a thing on purpose, or produce a memory that will not come. 80:24 makes the same move with something even more ordinary, telling man to look at his food. The sign is not exotic. It is the person reading this line.",
            "bn": "আয়াতটি এই তাকানোর দাওয়াত দেয়, কিন্তু কোনো পদ্ধতি বেঁধে দেয় না; আর সবচেয়ে নিরাপদ চিন্তাগুলোই সবচেয়ে সাদামাটা। আপনি জন্ম নেওয়ার সিদ্ধান্ত নেননি, কখন জন্মাবেন তা-ও নয়, কার ঘরে তা-ও নয়। আপনি নিজের ঘুমকে হুকুম করতে পারেন না, ইচ্ছা করে কোনো কিছু ভুলে যেতে পারেন না, আর যে স্মৃতি আসছে না তাকে টেনে আনতেও পারেন না। 80:24 আয়াত আরও সাধারণ কিছু দিয়ে একই কাজ করে — মানুষকে বলে তার খাবারের দিকে তাকাতে। নিদর্শনটি দুর্লভ কিছু নয়। নিদর্শনটি এই লাইনটি যিনি পড়ছেন, তিনিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Horizons and Selves",
          "bn": "দিগন্ত আর নিজ সত্তা"
        },
        "p": [
          {
            "en": "This pairing of outward and inward is not unique to Surah adh-Dhariyat. 41:53 promises that He will show them His signs in the horizons and within themselves until it becomes clear to them that it is the truth. 30:8 asks whether they do not contemplate within themselves. The Quran keeps setting the two arenas together, and it never lets the outward one stand alone. Astronomy without self-examination is exactly the kind of knowledge these verses decline to praise.",
            "bn": "বাইরে ও ভেতরের এই জোড়া কেবল সূরা আয-যারিয়াতের নিজস্ব নয়। 41:53 আয়াত প্রতিশ্রুতি দেয় যে তিনি তাদের দেখাবেন তাঁর নিদর্শন দিগন্তে এবং তাদের নিজেদের মধ্যেও, যতক্ষণ না তাদের কাছে স্পষ্ট হয়ে যায় যে এটিই সত্য। 30:8 আয়াত জিজ্ঞেস করে, তারা কি তাদের নিজেদের মনে ভেবে দেখে না। কুরআন বারবার এই দুই ক্ষেত্রকে পাশাপাশি রাখে, আর বাইরেরটিকে কখনো একা দাঁড়াতে দেয় না। আত্মপরীক্ষা ছাড়া জ্যোতির্বিদ্যা ঠিক সেই ধরনের জ্ঞান, যার প্রশংসা এই আয়াতগুলো করে না।"
          },
          {
            "en": "The same surah later answers the question the invitation raises. If I look into myself, what am I looking for? 51:56 states it: I did not create the jinn and mankind except to worship Me. Reading the two together closes a circle. The self is offered as proof that there is a Maker, and then told what the Maker made it for. Investigation that stops before that second point has stopped one step short.",
            "bn": "এই দাওয়াত যে প্রশ্নটি তোলে, একই সূরা পরে তার উত্তর দেয়। নিজের ভেতরে তাকালে আমি কী খুঁজব? 51:56 আয়াত তা বলে দেয়: আমি জিন ও মানুষকে সৃষ্টি করেছি কেবল আমার ইবাদতের জন্য। দুটি একসঙ্গে পড়লে বৃত্তটি সম্পূর্ণ হয়। নিজ সত্তাকে পেশ করা হয় এই প্রমাণ হিসেবে যে একজন স্রষ্টা আছেন, আর তারপর বলে দেওয়া হয় সেই স্রষ্টা তাকে কী জন্য বানিয়েছেন। যে অনুসন্ধান দ্বিতীয় কথাটির আগেই থেমে যায়, সেটি এক ধাপ আগে থেমেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Attention, Not Argument",
          "bn": "মনোযোগ, তর্ক নয়"
        },
        "p": [
          {
            "en": "The practical shape of these two lines is unusually small. They do not ask for study; they ask for a pause. Take one faculty, one ordinary function of your own body or your own day, and hold it in view for a minute without moving on. Certainty grows that way far more reliably than by collecting arguments, which is presumably why the verse names the muqinin first and then asks the rest of us why we are not looking.",
            "bn": "এই দুই পঙ্‌ক্তির ব্যবহারিক রূপটি অস্বাভাবিক রকম ছোট। এগুলো পড়াশোনা চায় না; চায় একটু থামা। নিজের দেহের বা নিজের দিনের একটি শক্তি, একটি সাধারণ কাজ বেছে নিন, আর এক মিনিট সেটির দিকে তাকিয়ে থাকুন, পরের কিছুতে না গিয়ে। যুক্তি জমানোর চেয়ে এভাবেই দৃঢ় প্রত্যয় অনেক নিশ্চিতভাবে বাড়ে — সম্ভবত সে কারণেই আয়াতটি আগে মুক্বিনীনদের নাম নেয়, তারপর বাকিদের জিজ্ঞেস করে আমরা কেন তাকাচ্ছি না।"
          }
        ]
      }
    ]
  },
  "51:22": {
    "sections": [
      {
        "h": {
          "en": "Place First, Then the Thing",
          "bn": "আগে স্থান, তারপর বস্তু"
        },
        "p": [
          {
            "en": "Wa fis-sama'i rizqukum wa ma tu'adun: five words in Arabic, and the order of them is the first thing to notice. The sentence does not say your provision is in the heaven; it puts the location in front and the provision after it. Arabic allows that fronting, and the grammarians read it as the emphasis falling on whatever has been moved forward. Where the provision is kept, is the news being delivered.",
            "bn": "'ওয়া ফিস সামাই রিযকুকুম ওয়া মা তূআদূন' — আরবিতে পাঁচটি শব্দ, আর প্রথমে লক্ষ করার বিষয় তাদের ক্রম। বাক্যটি বলে না 'তোমাদের রিযক আকাশে আছে'; বরং স্থানটিকে সামনে বসায় আর রিযককে তার পরে। আরবি এই অগ্রবর্তীকরণের অনুমতি দেয়, আর ব্যাকরণবিদগণ পড়েন যে যাকে সামনে আনা হয় জোরটি তার উপরেই পড়ে। রিযক কোথায় রাখা আছে — সেটিই এখানে পরিবেশিত সংবাদ।"
          },
          {
            "en": "The verse is the third in a short sweep. 51:20 puts signs in the earth for those who are certain, 51:21 puts them in your own selves, and this verse lifts the eye once more. The person being addressed has been walked around his own position, and is now shown the one direction he cannot reach with his hands, and told that what he lives on is kept there.",
            "bn": "আয়াতটি একটি সংক্ষিপ্ত পরিক্রমার তৃতীয়টি। 51:20 যমীনে নিদর্শন রাখে দৃঢ়বিশ্বাসীদের জন্য, 51:21 রাখে তোমাদের নিজেদের ভেতরে, আর এই আয়াত চোখটি আরও একবার তুলে দেয়। যাকে সম্বোধন করা হচ্ছে তাকে তার নিজের অবস্থানের চারপাশে ঘুরিয়ে আনা হলো, তারপর দেখানো হলো একমাত্র সেই দিকটি যেখানে তার হাত পৌঁছায় না — আর বলা হলো, সে যা খেয়ে বাঁচে তা সেখানেই রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Reading: Rain",
          "bn": "প্রথম ব্যাখ্যা: বৃষ্টি"
        },
        "p": [
          {
            "en": "The oldest gloss in the commentaries takes provision in the heaven to mean rain, because rain is what produces everything a person eats. Tafsir Ahsanul Bayaan states it in exactly those terms. The Quran makes the identification itself: 45:5 lists among its signs what Allah sends down from the sky of rizq, giving life by it to the earth after its death, and 2:22 says He brought out fruits by that water as provision for you.",
            "bn": "তাফসীরগুলোর প্রাচীনতম ব্যাখ্যাটি 'আকাশে রিযক' বলতে বোঝে বৃষ্টি, কারণ মানুষ যা কিছু খায় তার সবই বৃষ্টিই উৎপন্ন করে। তাফসীর আহসানুল বায়ান ঠিক এই ভাষাতেই কথাটি বলে। কুরআন নিজেই এই পরিচয়টি দেয়: 45:5 তার নিদর্শনগুলোর মধ্যে গণনা করে আল্লাহ আকাশ থেকে যে রিযক নামান তা, যা দিয়ে তিনি যমীনকে তার মৃত্যুর পর জীবিত করেন; আর 2:22 বলে, সেই পানি দিয়েই তিনি তোমাদের জীবিকার জন্য ফলমূল বের করেন।"
          },
          {
            "en": "Read that way the verse is not making a claim about the sky as a warehouse. It is naming the point in the chain at which the whole system stops being ours. Land can be bought, seed can be sown, labour can be hired and machinery can be maintained; the one input that decides whether any of it comes to anything is released from above, on a schedule nobody down here sets or negotiates.",
            "bn": "এভাবে পড়লে আয়াতটি আকাশকে কোনো গুদাম বলে দাবি করছে না। এটি শৃঙ্খলের সেই বিন্দুটির নাম বলছে যেখান থেকে গোটা ব্যবস্থাটি আর আমাদের থাকে না। জমি কেনা যায়, বীজ বোনা যায়, শ্রমিক নেওয়া যায়, যন্ত্রপাতি ঠিক রাখা যায়; কিন্তু এসবের কোনোটি আদৌ ফল দেবে কি না তা যে একটিমাত্র উপাদান ঠিক করে, তা উপর থেকে ছাড়া হয় — এমন এক সময়সূচিতে যা এখানকার কেউ নির্ধারণও করে না, তা নিয়ে দরও কষতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Second Reading: Written Above",
          "bn": "দ্বিতীয় ব্যাখ্যা: উপরে লেখা"
        },
        "p": [
          {
            "en": "The second line of interpretation takes the heaven as where the provision is decided rather than where it is stored. Al-Muyassar closes its comment on this verse by saying that all of it is written and decreed. 15:21 states the same in the Quran's own terms: there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.",
            "bn": "দ্বিতীয় ব্যাখ্যাধারাটি আকাশকে বোঝে সেই জায়গা হিসেবে যেখানে রিযক নির্ধারিত হয়, যেখানে তা জমা থাকে সেই জায়গা হিসেবে নয়। তাফসীর মুয়াসসার এই আয়াতের ব্যাখ্যা শেষ করে এই কথা বলে যে এর সবটাই লেখা ও নির্ধারিত। 15:21 একই কথা বলে কুরআনের নিজের ভাষায়: এমন কোনো জিনিস নেই যার ভাণ্ডার আমার কাছে নেই, আর আমি তা নামাই কেবল এক নির্দিষ্ট পরিমাণে।"
          },
          {
            "en": "The two readings are not rivals. Rain descends by a measure, and so does everything else. What the second reading adds is that the measure was fixed before the year began, which is the part that touches anxiety directly. A person can compete over a share whose size is still open. He cannot compete over one that has already been written down and is being released at an appointed rate.",
            "bn": "দুটি ব্যাখ্যা পরস্পরের প্রতিদ্বন্দ্বী নয়। বৃষ্টি নামে একটি পরিমাপে, আর বাকি সবকিছুও তাই। দ্বিতীয় ব্যাখ্যাটি যা যোগ করে তা হলো, পরিমাপটি বছর শুরু হওয়ার আগেই স্থির হয়ে গেছে — আর এই অংশটিই দুশ্চিন্তায় সরাসরি হাত দেয়। যে ভাগের আকার এখনো খোলা, মানুষ তা নিয়ে প্রতিযোগিতা করতে পারে। কিন্তু যা আগেই লিখে রাখা হয়েছে এবং নির্ধারিত হারে ছাড়া হচ্ছে, তা নিয়ে প্রতিযোগিতা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "And Whatever You Are Promised",
          "bn": "আর যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছে"
        },
        "p": [
          {
            "en": "The verse does not stop at bread. Wa ma tu'adun, and whatever you are promised, is joined to provision by a single conjunction and located in the same place. Al-Muyassar spells out the range: good and evil, reward and punishment, all of it written and decreed. The surah had opened on that promise, with 51:5 saying that what you are promised is true and 51:6 that the recompense is to occur.",
            "bn": "আয়াতটি রুটিতে থেমে থাকে না। 'ওয়া মা তূআদূন' — আর যার প্রতিশ্রুতি তোমাদের দেওয়া হয়েছে — একটিমাত্র সংযোজক দিয়ে রিযকের সঙ্গে জোড়া, আর একই জায়গায় স্থাপিত। তাফসীর মুয়াসসার পরিধিটি খুলে বলে: কল্যাণ ও অকল্যাণ, পুরস্কার ও শাস্তি — সবই লেখা ও নির্ধারিত। সূরাটি সেই প্রতিশ্রুতি দিয়েই শুরু হয়েছিল: 51:5 বলে তোমাদের যার প্রতিশ্রুতি দেওয়া হয়েছে তা সত্য, আর 51:6 বলে কর্মফল অবশ্যই ঘটবে।"
          },
          {
            "en": "Putting the two into one sentence is the verse's real work. Most people file next month's income and the Day of Judgement in separate parts of the mind, treat one as urgent and the other as distant, and worry over them at completely different intensities. This verse says both are held by the same One, in the same place, on the same terms. Neither of them is any nearer to your control than the other.",
            "bn": "দুটিকে একই বাক্যে রাখাই আয়াতটির আসল কাজ। বেশিরভাগ মানুষ আগামী মাসের আয় আর কিয়ামতের দিনকে মনের আলাদা আলাদা তাকে তুলে রাখে, একটিকে জরুরি ও অন্যটিকে দূরবর্তী মনে করে, আর সম্পূর্ণ ভিন্ন মাত্রায় দুশ্চিন্তা করে। এই আয়াত বলে, দুটোই একই সত্তার হাতে, একই জায়গায়, একই শর্তে। আপনার নিয়ন্ত্রণের কাছাকাছি দুটোর একটিও অন্যটির চেয়ে বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Oath That Follows",
          "bn": "এরপর যে শপথ"
        },
        "p": [
          {
            "en": "51:23 comes next and it is unusually forceful: then by the Lord of the heaven and the earth, indeed it is truth, just as it is that you are speaking. The oath is sworn by the Lord of exactly the two places this passage has been touring. And the comparison chosen is not a remote certainty; it is the reader's own act of speech, going on in his mouth at the moment he doubts.",
            "bn": "এরপর আসে 51:23, আর তা অস্বাভাবিক রকম জোরালো: আকাশ ও যমীনের প্রতিপালকের শপথ, নিশ্চয়ই এটি সত্য — ঠিক যেমন সত্য এই যে তোমরা কথা বলছ। শপথটি নেওয়া হয়েছে ঠিক সেই দুটি জায়গার প্রতিপালকের নামে, এই অংশটি যেগুলো ঘুরে দেখাচ্ছিল। আর যে তুলনাটি বেছে নেওয়া হলো তা দূরের কোনো নিশ্চয়তা নয়; তা পাঠকের নিজেরই কথা বলার কাজ, যা তার সংশয়ের মুহূর্তেই তার মুখে চলছে।"
          },
          {
            "en": "The surah finishes the thought at 51:57-58, where Allah says He wants no provision from His creatures and names Himself ar-Razzaq, the Provider, possessed of firm strength. Between the two ends stands 51:19, where a due for the beggar and the deprived sits inside the wealth of the righteous. People who believe their portion is kept above them hold it loosely. That, and not idleness, is what this verse changes.",
            "bn": "সূরাটি চিন্তাটি শেষ করে 51:57-58-এ, যেখানে আল্লাহ বলেন তিনি তাঁর সৃষ্টির কাছ থেকে কোনো রিযক চান না, আর নিজের নাম বলেন আর-রাযযাক — রিযকদাতা, প্রবল শক্তির অধিকারী। দুই প্রান্তের মাঝখানে দাঁড়িয়ে আছে 51:19, যেখানে সৎকর্মশীলদের সম্পদের ভেতরেই যাচ্ঞাকারী ও বঞ্চিতের একটি অধিকার বসানো। যারা বিশ্বাস করে তাদের ভাগটি উপরে রাখা আছে, তারা তা আলগা হাতে ধরে। এই আয়াত সেটিই বদলায়, অলসতা নয়।"
          }
        ]
      }
    ]
  },
  "51:47-49": {
    "sections": [
      {
        "h": {
          "en": "After the Ruins, a Building",
          "bn": "ধ্বংসাবশেষের পর এক নির্মাণ"
        },
        "p": [
          {
            "en": "The passage before these verses is a tour of wreckage. 51:41 recalls Ad and the wind that was sent against them, 51:43 recalls Thamud, and 51:46 closes the list with the people of Nuh (AS). Then the subject changes completely: and the heaven, We built it. Having shown what was pulled down over those who defied Him, the surah turns to what He has been quietly holding up over the heads of the people being addressed.",
            "bn": "এই আয়াতগুলোর আগের অংশটি ধ্বংসাবশেষের ভেতর দিয়ে এক ভ্রমণ। 51:41 আয়াত স্মরণ করায় আদ জাতিকে ও তাদের বিরুদ্ধে পাঠানো সেই বাতাসকে, 51:43 আয়াত স্মরণ করায় সামূদকে, আর 51:46 আয়াত তালিকাটি শেষ করে নূহ (আঃ)-এর কওম দিয়ে। এরপর বিষয়টিই বদলে যায়: আর আকাশ — আমি তা নির্মাণ করেছি। যারা তাঁকে অমান্য করেছিল তাদের ওপর যা ভেঙে পড়েছিল তা দেখানোর পর সূরাটি ফেরে সেদিকে, যা তিনি নীরবে ধরে রেখেছেন যাদের সম্বোধন করা হচ্ছে তাদেরই মাথার ওপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Built With Ayd",
          "bn": "'আইদ' দিয়ে নির্মিত"
        },
        "p": [
          {
            "en": "Wa's-sama'a banaynaha bi-aydin. The verb is bana, to build, from the root that gives 2:22 its word for the sky: a bina', a built structure raised over an earth spread out as bedding. Building language carries a plan, materials in proportion, and something meant to stand. Nothing in the wording suggests a thing that merely came to be there.",
            "bn": "ওয়াস-সামাআ বানাইনাহা বি-আইদ। ক্রিয়াপদটি 'বানা' — নির্মাণ করা; এই ধাতু থেকেই 2:22 আয়াতে আকাশের জন্য শব্দটি এসেছে: 'বিনা', অর্থাৎ নির্মিত এক কাঠামো, যা বিছানার মতো বিছিয়ে দেওয়া যমীনের ওপর তোলা হয়েছে। নির্মাণের ভাষা নিজের সঙ্গে বয়ে আনে একটি নকশা, পরিমাণমতো উপকরণ, আর টিকে থাকার উদ্দেশ্য। শব্দচয়নের কোথাও ইঙ্গিত নেই যে জিনিসটি এমনিতেই সেখানে হয়ে গেছে।"
          },
          {
            "en": "Bi-aydin is where care is needed. It looks like a plural of yad, hand, and some renderings turn it into hands. The mufassirun read it otherwise: Ibn Abbas, Mujahid, Qatadah and ath-Thawri gloss it as bi-quwwah, with strength, and Ibn Kathir passes their reading on as the meaning. The word here is ayd, might. The clause is telling you how firmly the roof was set, not describing a limb.",
            "bn": "সতর্কতা দরকার 'বি-আইদ' শব্দটিতে। দেখতে এটি 'ইয়াদ' অর্থাৎ হাতের বহুবচনের মতো, আর কোনো কোনো অনুবাদে তা 'হাত' হিসেবেই আসে। মুফাসসিরগণ একে অন্যভাবে পড়েন: ইবনে আব্বাস, মুজাহিদ, কাতাদাহ ও সুফইয়ান আস-সাওরী এর ব্যাখ্যা করেন 'বি-কুওয়্যাহ' অর্থাৎ শক্তি দিয়ে, আর ইবনে কাসীর তাঁদের এই পাঠকেই অর্থ হিসেবে বর্ণনা করেন। এখানকার শব্দটি 'আইদ', অর্থাৎ ক্ষমতা। বাক্যাংশটি বলছে ছাদটি কত দৃঢ়ভাবে বসানো হয়েছে; এটি কোনো অঙ্গের বর্ণনা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "And Indeed, We Are Musi'un",
          "bn": "আর নিশ্চয়ই আমরা 'মূসিউন'"
        },
        "p": [
          {
            "en": "Wa inna la-musi'un. Musi' is the active participle of awsa'a, to make wide or to have ample room, and the classical readings stay inside that range. Ibn Kathir explains it as: We made its expanse vast and raised its roof without pillars to hold it. Others take it of Allah Himself — that He is possessed of vastness, in power and in provision, so that nothing He builds strains what He has.",
            "bn": "ওয়া ইন্না লামূসিঊন। 'মূসি' হলো 'আওসাআ' ক্রিয়ার কর্তৃবাচক বিশেষণ — প্রশস্ত করা, বা প্রশস্ততার অধিকারী হওয়া; আর ধ্রুপদী ব্যাখ্যাগুলো এই অর্থসীমার ভেতরেই থাকে। ইবনে কাসীর ব্যাখ্যা করেন: আমি তার বিস্তারকে প্রশস্ত করেছি এবং কোনো খুঁটি ছাড়াই তার ছাদ উঁচু করেছি। আবার কেউ কেউ একে নেন স্বয়ং আল্লাহর বর্ণনা হিসেবে — তিনি প্রশস্ততার অধিকারী, শক্তিতে ও রিযিকে; ফলে তিনি যা-ই নির্মাণ করেন, তাতে তাঁর সামর্থ্যে টান পড়ে না।"
          },
          {
            "en": "That second reading has a plain Quranic anchor. 2:236 uses the same participle of a man: 'ala al-musi'i qadaruh, upon the one of ample means is his measure. The commentators did not read our verse as a report on the physical behaviour of the sky, and it is not necessary to make them. The point they draw is about the Builder: a roof on this scale cost Him nothing, and He has room to spare.",
            "bn": "এই দ্বিতীয় পাঠটির জন্য কুরআনেই স্পষ্ট ভিত্তি আছে। 2:236 আয়াতে একই বিশেষণ ব্যবহৃত হয়েছে মানুষের জন্য: 'আলাল মূসিয়ি কাদারুহ' — সচ্ছল ব্যক্তির ওপর তার সাধ্যমতো। মুফাসসিরগণ আমাদের এই আয়াতটিকে আকাশের ভৌত আচরণ সম্পর্কে কোনো বিবরণ হিসেবে পড়েননি, আর তাঁদের দিয়ে তা পড়ানোর প্রয়োজনও নেই। তাঁরা যে কথাটি বের করেন তা নির্মাতাকে নিয়ে: এত বড় মাপের একটি ছাদ তাঁর কিছুই খরচ করেনি, আর তাঁর হাতে জায়গা উদ্বৃত্তই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Spread Out, and What a Preparer",
          "bn": "বিছানো, আর কতই না উত্তম প্রস্তুতকারী"
        },
        "p": [
          {
            "en": "Wa'l-arda farashnaha. Farsh is bedding, what you spread on the ground in order to lie on it, and 2:22 uses the noun outright: He made the earth a firash for you. The praise that follows, fa-ni'ma al-mahidun, comes from the root of mahd, a cradle — the word 20:53 uses when it says He made the earth a mahd, and 78:6 when it asks whether He did not make it a mihad.",
            "bn": "ওয়াল-আরদা ফারাশনাহা। 'ফারশ' মানে বিছানা — যা মাটিতে বিছিয়ে দেওয়া হয় তার ওপর শোয়ার জন্য; আর 2:22 আয়াতে শব্দটি সরাসরিই এসেছে: তিনি তোমাদের জন্য যমীনকে 'ফিরাশ' বানিয়েছেন। এরপরের প্রশংসাবাক্য 'ফানি'মাল মাহিদূন' এসেছে 'মাহদ' অর্থাৎ দোলনার ধাতু থেকে — 20:53 আয়াত এই শব্দই ব্যবহার করে যখন বলে তিনি যমীনকে 'মাহদ' বানিয়েছেন, আর 78:6 আয়াত যখন জিজ্ঞেস করে তিনি কি একে 'মিহাদ' বানাননি।"
          },
          {
            "en": "Two images, bedding and a cradle, and both are chosen for a creature that has to lie down, that sleeps, that is carried before it can walk. Ibn Kathir glosses farashnaha as: We made it a resting place for the created. The earth is not presented here as raw material waiting to be conquered. It is presented as something already made comfortable for a body that tires.",
            "bn": "দুটি চিত্র — বিছানা আর দোলনা — আর দুটিই বাছা হয়েছে এমন এক সৃষ্টির জন্য, যাকে শুতে হয়, যে ঘুমায়, আর যে হাঁটতে শেখার আগে কোলে বাহিত হয়। ইবনে কাসীর 'ফারাশনাহা'-র ব্যাখ্যা করেন: আমি একে সৃষ্টিকুলের জন্য বিশ্রামের জায়গা বানিয়েছি। যমীনকে এখানে জয় করার অপেক্ষায় থাকা কাঁচামাল হিসেবে উপস্থাপন করা হয়নি। উপস্থাপন করা হয়েছে এমন কিছু হিসেবে, যা ক্লান্ত হয়ে পড়া এক শরীরের জন্য আগে থেকেই আরামদায়ক করে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two of Every Thing",
          "bn": "প্রত্যেক জিনিসের দুটি"
        },
        "p": [
          {
            "en": "Wa min kulli shay'in khalaqna zawjayn. Ibn Kathir reads the pairs widely — heaven and earth, night and day, sun and moon, land and sea, light and darkness, faith and disbelief, death and life, the Garden and the Fire — alongside the pairing of animals and plants. 36:36 stretches it further: exalted is He who created all the pairs, from what the earth grows, from themselves, and from what they do not know.",
            "bn": "ওয়া মিন কুল্লি শাইয়িন খালাকনা যাওজাইন। ইবনে কাসীর 'জোড়া'-কে ব্যাপক অর্থে পড়েন — আসমান ও যমীন, রাত ও দিন, সূর্য ও চাঁদ, স্থল ও সমুদ্র, আলো ও অন্ধকার, ঈমান ও কুফর, মৃত্যু ও জীবন, জান্নাত ও জাহান্নাম — এর সঙ্গে প্রাণী ও উদ্ভিদের জোড়াও। 36:36 আয়াত একে আরও প্রসারিত করে: পবিত্র তিনি, যিনি সব জোড়া সৃষ্টি করেছেন — যমীন যা উৎপন্ন করে তা থেকে, তাদের নিজেদের থেকে, আর তারা যা জানে না তা থেকেও।"
          },
          {
            "en": "Then the purpose clause: la'allakum tadhakkarun, that you may remember. Ibn Kathir spells out what is to be remembered — that the Creator is One, without a partner. The argument is quiet and it is finished. Everything you are able to inspect arrives in twos and is incomplete without its counterpart; the One who made them in twos is the only item in the account that is paired with nothing.",
            "bn": "এরপর উদ্দেশ্যবাচক বাক্যাংশ: লা'আল্লাকুম তাযাক্কারূন — যাতে তোমরা স্মরণ কর। ইবনে কাসীর খোলাসা করে বলেন কী স্মরণ করতে হবে — স্রষ্টা এক, তাঁর কোনো শরিক নেই। যুক্তিটি নিচু স্বরের, আর তা সম্পূর্ণ। তুমি যা কিছু পরীক্ষা করে দেখতে পারো তার সবই আসে জোড়ায়, আর নিজের জুড়ি ছাড়া তা অসম্পূর্ণ; যিনি এগুলোকে জোড়ায় বানিয়েছেন, গোটা হিসাবের মধ্যে কেবল তিনিই এমন, যাঁর কোনো জুড়ি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "So Flee",
          "bn": "অতএব দৌড়াও"
        },
        "p": [
          {
            "en": "The conclusion is not left to the reader to find. 51:50 follows at once: fa-firru ila Allah, so flee to Allah; indeed I am to you from Him a clear warner. Ibn Kathir glosses that fleeing as taking shelter with Him and entrusting your affairs to Him, and 51:51 completes it — do not set up another god along with Allah. 2:22 ends its own list of sky and earth on the same command.",
            "bn": "সিদ্ধান্তটি পাঠকের খুঁজে নেওয়ার জন্য ফেলে রাখা হয়নি। সঙ্গে সঙ্গেই আসে 51:50 আয়াত: ফাফিররূ ইলাল্লাহ — অতএব আল্লাহর দিকে দৌড়াও; নিশ্চয়ই আমি তোমাদের জন্য তাঁর পক্ষ থেকে স্পষ্ট সতর্ককারী। ইবনে কাসীর এই দৌড়ানোর ব্যাখ্যা করেন তাঁর কাছে আশ্রয় নেওয়া এবং সব বিষয় তাঁর হাতে সঁপে দেওয়া হিসেবে; আর 51:51 আয়াত তা পূর্ণ করে — আল্লাহর সঙ্গে অন্য কোনো ইলাহ দাঁড় করিয়ো না। 2:22 আয়াতও আসমান-যমীনের নিজের তালিকাটি একই নির্দেশে শেষ করে।"
          },
          {
            "en": "Fleeing is ordinarily movement away from a danger and towards a refuge, and here both ends of the movement are the same One. That is the practical shape of these three verses. They are not offered as material for wonder that leaves a reader where it found him. They are the reasons given for a decision, and the decision named is to run out of every other shelter and into His.",
            "bn": "দৌড়ে পালানো সাধারণত বিপদ থেকে দূরে সরে আশ্রয়ের দিকে যাওয়া, আর এখানে চলাচলের দুই প্রান্তেই একই সত্তা। এই তিনটি আয়াতের ব্যবহারিক রূপ এটিই। এগুলো এমন বিস্ময়ের উপকরণ হিসেবে দেওয়া হয়নি, যা পাঠককে যেখানে পেয়েছিল সেখানেই রেখে দেয়। এগুলো একটি সিদ্ধান্তের পক্ষে দেওয়া কারণ, আর সিদ্ধান্তটির নাম বলা আছে: অন্য সব আশ্রয় ছেড়ে তাঁরই আশ্রয়ে ছুটে যাওয়া।"
          }
        ]
      }
    ]
  },
  "51:55-56": {
    "sections": [
      {
        "h": {
          "en": "Keep Reminding",
          "bn": "স্মরণ করাতে থাকো"
        },
        "p": [
          {
            "en": "The command arrives as the correction of a possible misreading. The verse before it, 51:54, tells the Prophet ﷺ to turn away from those who obstinately refuse, and clears him of blame. If the passage ended there, withdrawal might look like the whole policy. 51:55 immediately reopens the work: and remind, for indeed the reminder benefits the believers. Turning from the mocker never cancels the reminding, because the reminder was never measured by the mocker's response.",
            "bn": "নির্দেশটি আসে একটি সম্ভাব্য ভুল পাঠের সংশোধন হয়ে। ঠিক আগের আয়াত 51:54 নবী ﷺ-কে বলে একগুঁয়ে অস্বীকারকারীদের থেকে মুখ ফিরিয়ে নিতে, এবং তাঁকে দায়মুক্ত ঘোষণা করে। অনুচ্ছেদ সেখানেই শেষ হলে সরে আসাটাই পুরো নীতি বলে মনে হতে পারত। 51:55 সাথে সাথে কাজটি আবার খুলে দেয়: আর স্মরণ করিয়ে দাও, কারণ স্মরণিকা মুমিনদের উপকারে আসে। উপহাসকারী থেকে মুখ ফেরানো কখনোই স্মরণ করানো বাতিল করে না, কারণ স্মরণিকার মাপকাঠি কোনোদিন উপহাসকারীর সাড়া ছিল না।"
          },
          {
            "en": "The mufassirun pause on whom the reminder profits: the believers — including those who already know. Knowledge sits in the heart like embers; reminding stirs it back to flame. This is why the Quran repeats itself, why the Friday sermon returns weekly, and why a believer can hear a truth learned in childhood and feel it land as if new. The benefit is not new information but the renewed presence of old truth.",
            "bn": "মুফাসসিরগণ থামেন এই প্রশ্নে — স্মরণিকা কার উপকারে আসে: মুমিনদের — যারা আগে থেকেই জানে তাদেরও। জ্ঞান অন্তরে থাকে জ্বলন্ত কয়লার মতো; স্মরণ করানো তাকে নেড়ে আবার শিখায় ফেরায়। এ কারণেই কুরআন নিজের কথা ফিরিয়ে বলে, জুমার খুতবা প্রতি সপ্তাহে ফিরে আসে, আর একজন মুমিন শৈশবে শেখা সত্য শুনেও অনুভব করে যেন তা নতুন করে নামল। উপকারটি নতুন তথ্য নয়, বরং পুরনো সত্যের নবায়িত উপস্থিতি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Sentence",
          "bn": "উদ্দেশ্যের বাক্য"
        },
        "p": [
          {
            "en": "Then comes one of the most quoted sentences in the Quran: wa ma khalaqtu al-jinna wal-insa illa li-ya'budun — I did not create the jinn and mankind except to worship Me. Arabic reaches its strongest exclusivity through negation followed by exception: first everything is denied, then one thing alone is restored. Whatever other purposes creatures invent for themselves, the Maker has stated His, and He states it in the first person.",
            "bn": "তারপর আসে কুরআনের সবচেয়ে বেশি উদ্ধৃত বাক্যগুলোর একটি: ওয়া মা খালাকতুল-জিন্না ওয়াল-ইনসা ইল্লা লিইয়া'বুদূন — আমি জিন ও মানুষকে সৃষ্টি করিনি আমার ইবাদত ছাড়া অন্য কোনো উদ্দেশ্যে। আরবি তার প্রবলতম একচ্ছত্রতায় পৌঁছায় অস্বীকৃতির পর ব্যতিক্রম দিয়ে: প্রথমে সবকিছু নাকচ হয়, তারপর একটিমাত্র জিনিস ফিরিয়ে আনা হয়। সৃষ্টিরা নিজেদের জন্য আর যত উদ্দেশ্যই বানাক, নির্মাতা তাঁরটি বলে দিয়েছেন — এবং বলেছেন উত্তম পুরুষে, নিজের জবানে।"
          },
          {
            "en": "The commentators are careful with the word worship. 'Ibadah in their usage is not ritual alone but the whole posture of a life — obedience, love, humility, gratitude, and the rituals that carry them. The prayer five times a day is worship; so, when done for Allah and within His bounds, are honest work, kept promises and kindness. The verse does not shrink life into the mosque; it stretches the mosque's meaning over life.",
            "bn": "ইবাদত শব্দটি নিয়ে মুফাসসিরগণ সতর্ক। তাঁদের ব্যবহারে 'ইবাদাহ কেবল আনুষ্ঠানিকতা নয়, বরং একটি জীবনের সামগ্রিক ভঙ্গি — আনুগত্য, ভালোবাসা, বিনয়, কৃতজ্ঞতা, আর সেগুলো বহনকারী আনুষ্ঠানিক আমল। দিনে পাঁচবারের নামায ইবাদত; তেমনি — আল্লাহর জন্য ও তাঁর সীমার ভেতরে করা হলে — সৎ কাজ, রক্ষা করা প্রতিশ্রুতি আর সদয়তাও ইবাদত। আয়াতটি জীবনকে মসজিদে সংকুচিত করে না; মসজিদের অর্থকে জীবনের উপর প্রসারিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Does Not Need",
          "bn": "তাঁর যা প্রয়োজন নেই"
        },
        "p": [
          {
            "en": "The next verses close a misunderstanding before it can form. 51:57 says: I seek no provision from them, nor do I want them to feed Me. And 51:58 answers: indeed Allah is ar-Razzaq, the Provider, possessor of firm strength. Worship adds nothing to Allah, and its absence takes nothing from Him. The arrangement is the reverse of every human hierarchy: the One who is served is the One who provides, and the servants are the only beneficiaries of their service.",
            "bn": "পরের আয়াতগুলো একটি ভুল বোঝাবুঝি তৈরি হওয়ার আগেই তা বন্ধ করে দেয়। 51:57 বলে: আমি তাদের কাছে কোনো রিযিক চাই না, আর চাই না যে তারা আমাকে খাওয়াবে। আর 51:58 জবাব দেয়: নিশ্চয়ই আল্লাহই আর-রাযযাক — মহান রিযিকদাতা, প্রবল শক্তির অধিকারী। ইবাদত আল্লাহর কিছুই বাড়ায় না, তার অনুপস্থিতিও তাঁর কিছু কমায় না। বিন্যাসটি প্রতিটি মানবীয় স্তরবিন্যাসের উল্টো: যাঁর সেবা করা হয় তিনিই রিযিক দেন, আর সেবার একমাত্র উপকারভোগী সেবকরাই।"
          },
          {
            "en": "As-Sa'di draws the tender inversion out of the sequence: He created them to worship Him, and then He undertakes to provide for them while they do it. The servant's job description does not include supplying his own existence. This is why the surah swore earlier, in 51:22-23, that your provision is in heaven, and that this is as true as your own speech. Worship performed in a panic about sustenance has misread both verses at once.",
            "bn": "আস-সা'দী এই ক্রম থেকে কোমল উল্টোযাত্রাটি টেনে বের করেন: তিনি তাদের সৃষ্টি করেছেন তাঁর ইবাদতের জন্য, আর তারা তা করতে থাকা অবস্থায় তাদের রিযিকের দায়িত্ব তিনিই নিয়েছেন। বান্দার কাজের বিবরণে নিজের অস্তিত্বের জোগান দেওয়া নেই। এ কারণেই সূরাটি আগে, 51:22-23 আয়াতে, শপথ করেছিল — তোমাদের রিযিক আসমানে, আর এ কথা তেমনই সত্য যেমন সত্য তোমাদের নিজেদের কথা বলা। রিযিকের দুশ্চিন্তায় আতঙ্কিত হয়ে করা ইবাদত দুটি আয়াতকেই একসাথে ভুল পড়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship as a Path",
          "bn": "পথ হিসেবে ইবাদত"
        },
        "p": [
          {
            "en": "Other verses frame the same purpose from other angles. 2:21 calls mankind to worship the Lord who created them and those before them, so that they may attain taqwa. 36:61 recalls the covenant: worship Me — this is a straight path. Purpose and path are the same thing seen twice: worship is what we were made for and also the road that keeps a life from wandering. A thing worked against its design suffers for it, and the verse lets us name why a life without worship feels unanchored.",
            "bn": "অন্য আয়াতগুলো একই উদ্দেশ্যকে অন্য কোণ থেকে ফ্রেমে বাঁধে। 2:21 মানুষকে ডাকে সেই রবের ইবাদতে, যিনি তাদের ও তাদের পূর্ববর্তীদের সৃষ্টি করেছেন — যেন তারা তাকওয়া অর্জন করে। 36:61 অঙ্গীকারটি মনে করিয়ে দেয়: আমার ইবাদত করো — এটিই সরল পথ। উদ্দেশ্য আর পথ আসলে একই জিনিস দুবার দেখা: ইবাদত সেটিই যার জন্য আমরা নির্মিত, আবার সেই রাস্তাও যা একটি জীবনকে পথ হারানো থেকে বাঁচায়। কোনো জিনিস তার নকশার বিরুদ্ধে খাটালে সে-ই ভোগে; আর আয়াতটি আমাদের সেই কারণের নাম দিতে দেয় — ইবাদতহীন জীবন কেন নোঙরহীন লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Intention Widens the Gate",
          "bn": "নিয়ত দরজা প্রশস্ত করে"
        },
        "p": [
          {
            "en": "Al-Bukhari records the Prophet's ﷺ words: actions are only by intentions, and every person has only what he intended. Read beside 51:56, the hadith widens the gate of worship: the same hours of work, study or child-raising can be folded into the purpose of creation when they are done for Allah and within His limits. But the scholars keep the order straight — intention ennobles the permitted; it does not replace the prescribed. No sincere career substitutes for the prayer.",
            "bn": "বুখারী নবী ﷺ-এর বাণী লিপিবদ্ধ করেন: আমল তো নিয়ত দিয়েই, আর প্রত্যেকে তা-ই পায় যার সে নিয়ত করেছে। 51:56 আয়াতের পাশে রেখে পড়লে হাদীসটি ইবাদতের দরজা প্রশস্ত করে: কাজ, পড়াশোনা বা সন্তান লালনের একই ঘণ্টাগুলো সৃষ্টির উদ্দেশ্যের ভেতরে ভাঁজ হয়ে ঢুকে যেতে পারে — যখন তা আল্লাহর জন্য এবং তাঁর সীমার ভেতরে করা হয়। কিন্তু আলিমগণ ক্রমটি সোজা রাখেন — নিয়ত বৈধকে মহিমান্বিত করে; নির্ধারিত ফরযের বিকল্প হয় না। কোনো আন্তরিক পেশাই নামাযের জায়গা নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Folding the Day Back",
          "bn": "দিনটিকে উদ্দেশ্যে ফেরানো"
        },
        "p": [
          {
            "en": "The lived form of these two verses is a pair of habits. First, receive reminders without offense: when a verse, a sermon or a friend repeats what you already know, 51:55 has answered the objection in advance — benefit was promised precisely to those who know. Second, run the day backward through 51:56 each night: which hours folded into the purpose, and which ran loose beside it. Not to manufacture guilt, but to aim tomorrow.",
            "bn": "এই দুই আয়াতের যাপিত রূপ এক জোড়া অভ্যাস। প্রথমত, স্মরণিকা গ্রহণ করুন অসন্তুষ্ট না হয়ে: কোনো আয়াত, খুতবা বা বন্ধু যখন আপনার জানা কথাই আবার বলে, 51:55 আপত্তিটির জবাব আগেই দিয়ে রেখেছে — উপকারের প্রতিশ্রুতি তো তাদের জন্যই যারা জানে। দ্বিতীয়ত, প্রতি রাতে দিনটিকে 51:56 আয়াতের ভেতর দিয়ে উল্টো চালিয়ে দেখুন: কোন ঘণ্টাগুলো উদ্দেশ্যের ভাঁজে ঢুকল, আর কোনগুলো তার পাশে আলগা হয়ে গড়াল। অপরাধবোধ বানানোর জন্য নয়, আগামীকালের নিশানা ঠিক করার জন্য।"
          },
          {
            "en": "The verse also quietly reassigns worth. If the purpose of existence is worship, then the scale of a life is not output, audience or accumulation, but the degree to which it answered its Maker. That measure is available equally to the famous and the unknown, the strong and the ill. Whoever worships has hit the target of their creation, whatever else the world records; whoever does not has missed it, whatever else the world applauds.",
            "bn": "আয়াতটি নীরবে মূল্যের হিসাবও নতুন করে বসায়। অস্তিত্বের উদ্দেশ্য যদি ইবাদত হয়, তবে একটি জীবনের মাপকাঠি তার উৎপাদন, দর্শক বা সঞ্চয় নয়, বরং সে তার নির্মাতাকে কতটা সাড়া দিল সেটাই। এই মাপকাঠি বিখ্যাত ও অখ্যাত, সবল ও অসুস্থ — সবার জন্য সমানভাবে খোলা। যে ইবাদত করে সে তার সৃষ্টির নিশানায় লেগেছে — দুনিয়া আর যা-ই লিখুক; আর যে করে না সে তা ফসকেছে — দুনিয়া আর যত করতালিই দিক।"
          }
        ]
      }
    ]
  }
});
