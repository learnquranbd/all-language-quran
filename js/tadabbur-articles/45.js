/**
 * Tadabbur long-form articles — surah 45.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "45:4": {
    "sections": [
      {
        "h": {
          "en": "From the Sky to Yourself",
          "bn": "আকাশ থেকে নিজের দিকে"
        },
        "p": [
          {
            "en": "Surah al-Jathiya opens with two letters and a statement about the Book: its revelation is from Allah, the Exalted in Might, the Wise (45:2). Then it begins pointing. In the heavens and the earth are signs for the believers (45:3). The next verse, nine words in the Arabic, brings the pointing closer: wa fi khalqikum wa ma yabuththu min dabbatin ayatun li-qawmin yuqinun. And in your creation, and in what He spreads abroad of moving creatures, are signs for a people who are certain.",
            "bn": "সূরা আল-জাসিয়া শুরু হয় দুটি হরফ আর কিতাব সম্পর্কে একটি ঘোষণা দিয়ে: এ কিতাব অবতীর্ণ মহাপরাক্রমশালী, প্রজ্ঞাময় আল্লাহর কাছ থেকে (৪৫:২)। তারপর শুরু হয় ইশারা। আকাশ আর যমীনে মু'মিনদের জন্য নিদর্শন আছে (৪৫:৩)। পরের আয়াতে আরবিতে মাত্র নয়টি শব্দ, আর ইশারাটা আরও কাছে চলে আসে: ওয়া ফী খালকিকুম ওয়া মা ইয়াবুসসু মিন দাব্বাতিন আয়াতুন লি-কাওমিন ইউকিনূন। তোমাদের সৃষ্টিতে, আর তিনি যে প্রাণী ছড়িয়ে দেন তাতে, নিদর্শন আছে এমন সম্প্রদায়ের জন্য যারা নিশ্চিত বিশ্বাস রাখে।"
          },
          {
            "en": "The order is plain in the text. First the widest frame, the heavens and the earth. Then the reader himself, addressed directly in the plural: your creation. Then the creatures around him. The next verse, 45:5, moves outward again to night and day, rain and wind, and 45:6 asks in what statement, after Allah and His signs, they will believe. This article stays with the nine words in the middle, and with what the commentators fetched for this verse say about them.",
            "bn": "ক্রমটা আয়াতের ভেতরেই স্পষ্ট। প্রথমে সবচেয়ে বড় পরিসর, আকাশ আর যমীন। তারপর পাঠক নিজে, বহুবচনে সরাসরি সম্বোধন করে: তোমাদের সৃষ্টি। তারপর তার চারপাশের প্রাণীকুল। এর পরের আয়াত, ৪৫:৫, আবার বাইরের দিকে যায়, রাত-দিন, বৃষ্টি আর বাতাসের দিকে। আর ৪৫:৬ প্রশ্ন করে, আল্লাহ আর তাঁর আয়াতের পর তারা আর কোন কথায় ঈমান আনবে। এ লেখা থাকবে মাঝখানের ওই নয়টি শব্দের সঙ্গে, আর এই আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো সেগুলো নিয়ে কী বলে, তার সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Own Making Named First",
          "bn": "প্রথমে নিজের সৃষ্টির কথা"
        },
        "p": [
          {
            "en": "At-Tabari glosses fi khalqikum as in Allah's creating of you, O people. The Muyassar says the same in almost the same words: in your creation, O people. Neither stops to list what that creation involves. Al-Qurtubi, reaching this verse, takes it together with 45:5 and says that all of it has already been treated in full in Surah al-Baqara and elsewhere, a pointer that Ibn Kathir's English abridgement and Ma'arif al-Qur'an also make, both naming 2:164 as the close parallel.",
            "bn": "তাবারী ফী খালকিকুম-এর ব্যাখ্যা দেন এভাবে: হে মানুষ, আল্লাহ যে তোমাদের সৃষ্টি করেছেন তাতে। মুয়াসসার প্রায় একই কথা বলে: হে মানুষ, তোমাদের সৃষ্টিতে। এই সৃষ্টির ভেতরে কী কী আছে, তার তালিকা কেউই দেন না। কুরতুবী এ আয়াতে পৌঁছে একে ৪৫:৫-এর সঙ্গে একত্রে নেন এবং বলেন, এর সবকিছু সূরা আল-বাকারা ও অন্যান্য জায়গায় পূর্ণভাবে আলোচিত হয়ে গেছে। ইবন কাসীরের ইংরেজি সংক্ষেপ আর মাআরিফুল কুরআনও একই দিকে ইশারা করে, আর দুটোই ২:১৬৪-কে ঘনিষ্ঠ সমান্তরাল আয়াত হিসেবে উল্লেখ করে।"
          },
          {
            "en": "So the texts read for this verse keep fi khalqikum brief, and this article does the same. It does not add stages of growth, organs or the findings of any science to the commentators' words, because none of them does so here. What the texts do make clear is the shape of the gloss: the creation in question is Allah's act, and the ones created are the people being addressed. The sign is not a distant object. It is the listener, considered as something made.",
            "bn": "অর্থাৎ এ আয়াতের জন্য পড়া তাফসীরগুলো ফী খালকিকুম নিয়ে সংক্ষেপে থামে, এ লেখাও তাই থামবে। বেড়ে ওঠার ধাপ, অঙ্গপ্রত্যঙ্গ বা কোনো বিজ্ঞানের আবিষ্কার তাফসীরকারদের কথার সঙ্গে এখানে জোড়া হবে না, কারণ তাঁদের কেউ এখানে তা করেননি। তবে ব্যাখ্যার কাঠামোটা পরিষ্কার। সৃষ্টির কাজটা আল্লাহর, আর যাদের সৃষ্টি করা হয়েছে তারা সেই মানুষেরাই, যাদের সম্বোধন করা হচ্ছে। নিদর্শনটা দূরের কোনো বস্তু নয়। শ্রোতা নিজেই সেই নিদর্শন, এক সৃষ্ট সত্তা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Creature That Creeps",
          "bn": "যত প্রাণী চলে ফিরে"
        },
        "p": [
          {
            "en": "Wa ma yabuththu min dabbatin: and what He spreads abroad of moving creatures. At-Tabari explains it as His creating what is scattered in the earth of creatures that creep upon it, and he adds a qualifier: creatures not of your kind. The verse has just named the human being, so the dabba here, on his reading, is everything else that moves. The Muyassar keeps the same picture: the creation of what is scattered in the earth, of creatures that creep upon it.",
            "bn": "ওয়া মা ইয়াবুসসু মিন দাব্বাহ: আর তিনি যে প্রাণী ছড়িয়ে দেন। তাবারী এর ব্যাখ্যা দেন এভাবে: যমীনে যত প্রাণী ছড়িয়ে আছে, যারা তার উপর চলাফেরা করে, তাদের তিনি সৃষ্টি করেছেন। সঙ্গে একটি শর্ত জুড়ে দেন: তোমাদের জাতের বাইরের প্রাণী। আয়াত মাত্রই মানুষের কথা বলেছে, তাই তাঁর পাঠে এখানে দাব্বা মানে বাকি সব চলমান প্রাণী। মুয়াসসারও একই ছবি রাখে: যমীনে ছড়িয়ে থাকা, তার উপর চলাফেরা করা প্রাণীদের সৃষ্টি।"
          },
          {
            "en": "Ibn Kathir widens the frame. He speaks of what is in the heavens and the earth of creatures of differing kinds and species, and he names them: angels, jinn, humans, beasts, birds, wild animals, predators, insects, and the varied sorts in the sea. As-Sa'di likewise speaks of what He has spread in them both, the heavens and the earth, of creatures, and adds the benefits He has placed in them. Where at-Tabari and the Muyassar place the creatures on the earth, Ibn Kathir and as-Sa'di speak of both.",
            "bn": "ইবন কাসীর পরিসরটা বড় করেন। তিনি আকাশ ও যমীনে থাকা নানা জাত ও প্রজাতির সৃষ্টির কথা বলেন, আর নাম ধরে গোনান: ফেরেশতা, জিন, মানুষ, পশু, পাখি, বন্য প্রাণী, শিকারি জন্তু, কীটপতঙ্গ আর সাগরের হরেক রকম প্রাণী। সা'দীও বলেন, আকাশ ও যমীন দুটোতেই তিনি যে প্রাণী ছড়িয়ে দিয়েছেন, তার কথা, আর সঙ্গে যোগ করেন সেখানে তিনি যে উপকার গচ্ছিত রেখেছেন। তাবারী আর মুয়াসসার প্রাণীদের রাখেন যমীনে, আর ইবন কাসীর ও সা'দী বলেন দুটোর কথাই।"
          },
          {
            "en": "The two pictures are a difference of scope, not a dispute: none of these commentators argues against another on the point, and this article does not choose between them. What three of them share is the verb's sense. Yabuththu is to spread or scatter, and at-Tabari and the Muyassar gloss it with tafarraqa, what is dispersed, while as-Sa'di repeats the verb itself, ma baththa. The creatures are not simply there; they have been spread, kind after kind, across the places where they live.",
            "bn": "দুই ছবির পার্থক্য পরিসরের, বিরোধের নয়। এ বিষয়ে এই তাফসীরকারদের কেউ অন্যজনের বিরুদ্ধে যুক্তি দেননি, আর এ লেখাও তাঁদের মধ্যে কোনোটি বেছে নিচ্ছে না। তাঁদের তিনজনের মিল ক্রিয়াটির অর্থে। ইয়াবুসসু মানে ছড়িয়ে দেওয়া, ছিটিয়ে দেওয়া। তাবারী আর মুয়াসসার এর ব্যাখ্যায় আনেন তাফাররাকা, অর্থাৎ যা ছড়িয়ে আছে। আর সা'দী ক্রিয়াটিই আবার বলেন: মা বাস্সা। প্রাণীরা এমনি এমনি সেখানে নেই। তাদের ছড়িয়ে দেওয়া হয়েছে, যেখানে তারা থাকে সেখানে জাতের পর জাত।"
          }
        ]
      },
      {
        "h": {
          "en": "Proofs for the Certain",
          "bn": "দৃঢ় বিশ্বাসীদের জন্য দলিল"
        },
        "p": [
          {
            "en": "What are these ayat? At-Tabari answers in two words: hujajan wa adillatan, proofs and evidences. The Muyassar uses the same pair. Neither treats the signs as decoration or as wonders to be admired and left. A proof is something that establishes a conclusion. On this gloss your own creation, and the creatures spread around you, are offered to the listener as arguments, each one carrying something it is meant to establish in the mind of whoever weighs it.",
            "bn": "এই আয়াত, অর্থাৎ নিদর্শনগুলো কী? তাবারী উত্তর দেন দুই শব্দে: হুজাজান ওয়া আদিল্লাতান, দলিল ও প্রমাণ। মুয়াসসারও এই জোড়া শব্দই ব্যবহার করে। দুজনের কেউই নিদর্শনকে সাজসজ্জা বা দেখে মুগ্ধ হয়ে চলে যাওয়ার মতো বিস্ময় হিসেবে দেখেন না। দলিল এমন জিনিস, যা কোনো সিদ্ধান্ত প্রতিষ্ঠা করে। এ ব্যাখ্যা অনুযায়ী আপনার নিজের সৃষ্টি আর চারপাশে ছড়ানো প্রাণীরা শ্রোতার সামনে যুক্তি হিসেবে হাজির। যে মন দিয়ে ওজন করে দেখে, প্রত্যেকটি তার মনে কিছু একটা প্রতিষ্ঠা করার জন্যই আছে।"
          },
          {
            "en": "For whom? Li-qawmin yuqinun, for a people who are certain. The commentators fill in the object of that certainty differently. At-Tabari says they are certain of the realities of things, so they affirm them and know them to be sound. The Muyassar says they are certain of Allah and His law. Al-Baghawi says they are certain that there is no god other than Him. Ibn Kathir's English abridgement renders the phrase as those who have faith with certainty.",
            "bn": "কাদের জন্য? লি-কাওমিন ইউকিনূন, এমন সম্প্রদায়ের জন্য যারা নিশ্চিত বিশ্বাস রাখে। কিসের উপর এই নিশ্চয়তা, তা তাফসীরকারেরা ভিন্নভাবে পূরণ করেন। তাবারী বলেন, তারা বস্তুর প্রকৃত সত্য সম্পর্কে নিশ্চিত, তাই সেগুলো স্বীকার করে আর সেগুলোর বিশুদ্ধতা জানে। মুয়াসসার বলে, তারা আল্লাহ ও তাঁর শরীয়তের উপর নিশ্চিত। বাগাভী বলেন, তারা নিশ্চিত যে তিনি ছাড়া কোনো ইলাহ নেই। ইবন কাসীরের ইংরেজি সংক্ষেপ এর অর্থ করে: যারা নিশ্চিত বিশ্বাসের সঙ্গে ঈমান রাখে।"
          },
          {
            "en": "These are not rival positions so much as different angles. At-Tabari's reading is the broadest: the certain are those who acknowledge what is real when they meet it. Al-Baghawi's is the most pointed, tying the certainty to the oneness of Allah. The Muyassar joins belief in Allah to acceptance of what He has prescribed. Together they suggest that the signs are not addressed to a mood but to a settled assent, whatever its object is said to be in each gloss.",
            "bn": "এগুলো পরস্পরবিরোধী মত যতটা, তার চেয়ে বেশি ভিন্ন ভিন্ন দৃষ্টিকোণ। তাবারীর ব্যাখ্যা সবচেয়ে প্রশস্ত: নিশ্চিত বিশ্বাসী তারা, যারা যা সত্য তার মুখোমুখি হলে তা মেনে নেয়। বাগাভীর ব্যাখ্যা সবচেয়ে নির্দিষ্ট, নিশ্চয়তাকে তিনি বেঁধে দেন আল্লাহর একত্বের সঙ্গে। মুয়াসসার আল্লাহর উপর ঈমানের সঙ্গে জুড়ে দেয় তিনি যা বিধান দিয়েছেন তা মেনে নেওয়াকে। সব মিলিয়ে বোঝা যায়, নিদর্শনগুলো ক্ষণিকের কোনো মেজাজের উদ্দেশে নয়, বরং স্থির স্বীকৃতির উদ্দেশে, প্রতিটি ব্যাখ্যায় তার বিষয় যা-ই বলা হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "Believers, the Certain, the Reasoning",
          "bn": "মু'মিন, নিশ্চিত, বিবেচক"
        },
        "p": [
          {
            "en": "Read the three verses together and the endings change, which anyone can see in the text: signs li-l-mu'minin, for the believers (45:3); li-qawmin yuqinun, for a people who are certain (45:4); li-qawmin ya'qilun, for a people who reason (45:5). Why they change is a question the text does not answer in so many words, and two of the sources fetched for this verse answer it in two different ways. Both are reported here as their authors give them.",
            "bn": "তিনটি আয়াত একসঙ্গে পড়লে দেখা যায় শেষের কথাগুলো বদলে যাচ্ছে, যা আয়াতেই স্পষ্ট: লিল-মু'মিনীন, মু'মিনদের জন্য নিদর্শন (৪৫:৩); লি-কাওমিন ইউকিনূন, নিশ্চিত বিশ্বাসী সম্প্রদায়ের জন্য (৪৫:৪); লি-কাওমিন ইয়া'কিলূন, বিবেক খাটায় এমন সম্প্রদায়ের জন্য (৪৫:৫)। কেন বদলায়, আয়াত নিজে তা স্পষ্ট ভাষায় বলে না। এ আয়াতের জন্য সংগ্রহ করা উৎসের মধ্যে দুটি এর উত্তর দেয় দুই ভিন্নভাবে। দুটোই এখানে তুলে ধরা হলো, লেখকেরা যেভাবে বলেছেন সেভাবে।"
          },
          {
            "en": "Ibn Kathir's English abridgement reads the sequence as a climb. Allah said first, signs for the believers, then for those who have faith with certainty, then for those who understand, thus ascending from an honourable stage to a more honourable stage, higher in grade. On this reading each ending names a station above the last, and the verse on human beings and creatures sits at the middle rung, above belief and below understanding.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষেপ এ ক্রমকে দেখে ওপরে ওঠার সিঁড়ি হিসেবে। আল্লাহ প্রথমে বলেছেন মু'মিনদের জন্য নিদর্শন, তারপর যারা নিশ্চিত বিশ্বাসের সঙ্গে ঈমান রাখে তাদের জন্য, তারপর যারা বোঝে তাদের জন্য। এভাবে এক সম্মানিত স্তর থেকে আরও সম্মানিত ও উঁচু মর্যাদার স্তরে ওঠা। এ পাঠে প্রতিটি সমাপ্তি আগেরটির চেয়ে উঁচু এক স্তরের নাম। আর মানুষ ও প্রাণীকুলের এই আয়াতটি থাকে মাঝের ধাপে, ঈমানের ওপরে, বোঝার নিচে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the same endings by who benefits. It calls them stylistic variations, but finds more in them. The first, it says, indicates that only those who have faith will benefit. The second will benefit people who may not embrace faith at once but do develop certainty in their hearts that these signs point to the Oneness of Allah, a certainty that may one day turn into faith. The third reaches those not yet firm in belief who have a sound heart to understand.",
            "bn": "মাআরিফুল কুরআন একই সমাপ্তিগুলো পড়ে কে উপকৃত হয় সেই দিক থেকে। একে বলে বর্ণনাভঙ্গির বৈচিত্র্য, তবে এর মধ্যে আরও কিছু খুঁজে পায়। তার মতে প্রথমটি বোঝায়, উপকার পাবে কেবল ঈমানদারেরা। দ্বিতীয়টির উপকার পাবে এমন লোকেরা, যারা হয়তো সঙ্গে সঙ্গে ঈমান আনে না, কিন্তু অন্তরে এই নিশ্চয়তা জন্মায় যে নিদর্শনগুলো আল্লাহর একত্বের দিকেই ইশারা করে। আর এই নিশ্চয়তা হয়তো একদিন ঈমানে পরিণত হবে। তৃতীয়টি পৌঁছায় তাদের কাছে, যারা এখনো বিশ্বাসে দৃঢ় নয়, তবে বোঝার মতো সুস্থ অন্তর রাখে।"
          },
          {
            "en": "The two accounts do not line up. In Ibn Kathir's abridgement the certain stand above the believers; in Ma'arif al-Qur'an the certainty of 45:4 can belong to someone who has not yet believed. Ma'arif adds that people without sound intellect, or unwilling to use it, stay unconvinced even if thousands of proofs are set before them. Both readings are kept here as they stand, with their authors' names on them, and neither is preferred.",
            "bn": "দুই ব্যাখ্যা এক জায়গায় মেলে না। ইবন কাসীরের সংক্ষেপে নিশ্চিত বিশ্বাসীদের স্থান মু'মিনদের ওপরে। মাআরিফুল কুরআনে ৪৫:৪-এর নিশ্চয়তা এমন কারও হতে পারে, যে এখনো ঈমান আনেনি। মাআরিফ আরও বলে, যাদের সুস্থ বিবেক নেই, কিংবা যারা তা কাজে লাগাতে চায় না, তাদের সামনে হাজার হাজার প্রমাণ রাখলেও তারা মানে না। দুটো পাঠই এখানে যেমন আছে তেমন রাখা হলো, লেখকদের নামসহ। কোনোটিকে প্রাধান্য দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ayatun and Ayatin",
          "bn": "আয়াতুন ও আয়াতিন"
        },
        "p": [
          {
            "en": "One word in this verse is read in two ways. Al-Qurtubi reports that the general reading is ayatun, with damma, both here and in 45:5, while Hamza and al-Kisa'i read ayatin, with kasra, in both. Al-Baghawi names Hamza, al-Kisa'i and Ya'qub for ayatin, and says the others read ayatun. Al-Qurtubi adds that there is no disagreement over 45:3, where la-ayatin is the noun of inna and its predicate is fi s-samawati.",
            "bn": "এ আয়াতের একটি শব্দ দুইভাবে পড়া হয়। কুরতুবী জানান, সাধারণ কিরাআত হলো আয়াতুন, পেশ দিয়ে, এখানে এবং ৪৫:৫-এও। আর হামযা ও কিসাঈ দুই জায়গাতেই পড়েন আয়াতিন, যের দিয়ে। বাগাভী আয়াতিন-এর জন্য নাম নেন হামযা, কিসাঈ ও ইয়াকুবের, আর বলেন বাকিরা পড়েন আয়াতুন। কুরতুবী আরও বলেন, ৪৫:৩ নিয়ে কোনো মতভেদ নেই। সেখানে লা-আয়াতিন হলো ইন্না-র ইসম, আর তার খবর ফিস-সামাওয়াতি।"
          },
          {
            "en": "The grammar each gives is short. Ayatin, al-Qurtubi says, is joined to what inna governed, as if the verse said: inna fi khalqikum ... ayatin. Al-Baghawi says it refers back to la-ayatin and stands in the accusative position. For ayatun, al-Qurtubi's discussion, which runs on into 45:5, says it is read on the position of inna together with what it governed, or else as a fresh start, a subject with what precedes as its predicate, one sentence joined to another. Al-Baghawi calls it isti'naf and cites the Arab saying in which the second noun may be accusative or nominative.",
            "bn": "প্রত্যেকে যে ব্যাকরণ দেন তা সংক্ষিপ্ত। কুরতুবী বলেন, আয়াতিন যুক্ত হয়েছে ইন্না যার উপর কাজ করেছে তার সঙ্গে, যেন আয়াতটি বলছে: ইন্না ফী খালকিকুম ... আয়াতিন। বাগাভী বলেন, এটি লা-আয়াতিন-এর দিকে ফিরে যায় এবং যবরের অবস্থানে আছে। আয়াতুন নিয়ে কুরতুবীর আলোচনা ৪৫:৫ পর্যন্ত গড়ায়। তিনি বলেন, এটি পড়া হয় ইন্না ও তার আমলসহ পুরো অংশের অবস্থান ধরে। অথবা নতুন করে শুরু হিসেবে: আগের অংশ খবর, এটি মুবতাদা, এক বাক্যের সঙ্গে আরেক বাক্য জোড়া। বাগাভী একে বলেন ইস্তি'নাফ, আর আরবদের একটি কথা উদ্ধৃত করেন, যেখানে দ্বিতীয় বিশেষ্যে যবর বা পেশ দুটোই চলে।"
          },
          {
            "en": "At-Tabari gives the fullest account. He says the general readers of Medina and Basra, and some of Kufa, read ayatun as a subject, not referring it back to 45:3, while the general readers of Kufa read ayatin, with kasra in the sense of the accusative, referring it back. Later readers of ayatin, he reports, claimed that in Ubayy's reading all three verses carry la-ayatin with the lam. At-Tabari answers that this is no proof, since no sound narration of it from Ubayy exists.",
            "bn": "সবচেয়ে বিস্তারিত বিবরণ তাবারীর। তিনি বলেন, মদীনা ও বসরার সাধারণ কারীরা, আর কূফার কেউ কেউ, আয়াতুন পড়েন মুবতাদা হিসেবে, ৪৫:৩-এর দিকে ফিরিয়ে না নিয়ে। আর কূফার সাধারণ কারীরা পড়েন আয়াতিন, যের দিয়ে কিন্তু যবরের অর্থে, ৪৫:৩-এর দিকে ফিরিয়ে। তিনি জানান, পরবর্তী যুগের যারা আয়াতিন পড়েন, তারা দাবি করেছিলেন উবাই (রাঃ)-এর কিরাআতে তিনটি আয়াতেই লাম-সহ লা-আয়াতিন আছে। তাবারীর জবাব, এটা কোনো দলিল নয়, কারণ উবাই (রাঃ) থেকে এ বিষয়ে কোনো সহীহ বর্ণনা নেই।"
          },
          {
            "en": "Even if it were sound, at-Tabari goes on, it would not settle the case, since the Arabs can put the lam on the predicate of a clause that follows one governed by inna, and he cites a line of Humayd ibn Thawr al-Hilali to show it. His verdict states no preference: the two are widely spread readings in the cities, read by learned reciters, both sound in meaning, and whoever reads with either is correct.",
            "bn": "তাবারী আরও বলেন, বর্ণনাটা সহীহ হলেও তাতে বিষয়টার মীমাংসা হতো না। কারণ ইন্না-যুক্ত বাক্যের পরে আসা বাক্যের খবরেও আরবরা লাম বসাতে পারে, আর তা দেখাতে তিনি হুমাইদ ইবন সাওর আল-হিলালীর একটি কবিতার চরণ উদ্ধৃত করেন। তাঁর রায়ে কোনো পক্ষকে অগ্রাধিকার নেই। দুই কিরাআতই বিভিন্ন নগরে ব্যাপকভাবে প্রচলিত কিরাআত, বিজ্ঞ কারীরা দুটোই পড়েছেন, অর্থের দিক থেকে দুটোই বিশুদ্ধ, আর যে-কোনোটি দিয়ে পড়লে পাঠক সঠিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added to the Texts",
          "bn": "উৎসের বাইরে কিছু নয়"
        },
        "p": [
          {
            "en": "Some things are absent, and saying so is part of reading honestly. None of the commentaries fetched for this verse attaches a hadith to it, so none is cited here. None gives an occasion of revelation for it. None explains fi khalqikum through embryology or any modern science, and this article does not either. The subjection of all that is in the heavens and the earth comes later, in 45:13, and has its own article.",
            "bn": "কিছু জিনিস এখানে নেই, আর সেটা বলাও সৎভাবে পড়ার অংশ। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হচ্ছে না। কোনো তাফসীর এর শানে নুযূলও দেয়নি। ভ্রূণবিদ্যা বা আধুনিক কোনো বিজ্ঞান দিয়ে কেউ ফী খালকিকুম ব্যাখ্যা করেননি, এ লেখাও করবে না। আকাশ ও যমীনের সবকিছু অধীন করে দেওয়ার কথা আসে পরে, ৪৫:১৩-এ, আর তার আলাদা লেখা আছে।"
          },
          {
            "en": "What remains is enough. The verse gives two places to look, the self and the creatures, and one kind of person who reads them rightly. The commentators give the words their sense, record a reading in two forms that at-Tabari accepts equally, and disagree openly over why the endings shift. Nothing in that needs to be padded with more than the sources say in order to do its work on the reader.",
            "bn": "যা আছে, তা-ই যথেষ্ট। আয়াত দেখার জন্য দুই জায়গা দেখায়, নিজের সত্তা আর প্রাণীকুল, আর সেগুলো ঠিকভাবে পড়ে এমন একটি শ্রেণির মানুষের কথা বলে। তাফসীরকারেরা শব্দগুলোর অর্থ দেন, দুই রূপের এক কিরাআত লিপিবদ্ধ করেন যার দুটিকেই তাবারী সমানভাবে গ্রহণ করেন, আর সমাপ্তি কেন বদলায় তা নিয়ে খোলাখুলি ভিন্নমত রাখেন। পাঠকের উপর কাজ করার জন্য এর সঙ্গে উৎসের বাইরের কোনো কথা জুড়ে দেওয়ার দরকার পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Close at Home",
          "bn": "কাছের নিদর্শনে চোখ রাখা"
        },
        "p": [
          {
            "en": "The movement of 45:3 and 45:4 suggests a practice. After looking up at the sky, look at your own hands, at the breath you did not start, at the body you live in without having designed it. Then look at what moves around you: a crow on a wall, ants along a step, a cat crossing the road. Each, on at-Tabari's gloss, is offered as a proof, not as scenery.",
            "bn": "৪৫:৩ আর ৪৫:৪-এর গতিপথ থেকে একটা অভ্যাস তৈরি হতে পারে। আকাশের দিকে তাকানোর পর নিজের হাতের দিকে তাকান, যে শ্বাস আপনি শুরু করেননি তার দিকে, যে শরীরে আপনি থাকেন অথচ যার নকশা আপনার করা নয় তার দিকে। তারপর তাকান চারপাশে যারা চলাফেরা করে তাদের দিকে: দেয়ালের উপর একটা কাক, সিঁড়ি বেয়ে চলা পিঁপড়ের সারি, রাস্তা পার হওয়া একটা বিড়াল। তাবারীর ব্যাখ্যায় এদের প্রত্যেকেই দলিল হিসেবে হাজির, দৃশ্যপট হিসেবে নয়।"
          },
          {
            "en": "And then ask the question the verse's ending raises, whichever commentator's account of it you follow: does this looking leave me more certain than before? The signs are spread for a people who are certain. The hope is to be counted among them, so that what is seen is also acknowledged, and what is acknowledged settles into a conviction that does not need to be argued afresh each morning.",
            "bn": "তারপর আয়াতের সমাপ্তি যে প্রশ্ন তোলে, সেটা নিজেকে করুন, সমাপ্তির ব্যাখ্যায় যে তাফসীরকারকেই অনুসরণ করুন না কেন: এই দেখা কি আমাকে আগের চেয়ে বেশি নিশ্চিত করল? নিদর্শনগুলো ছড়িয়ে আছে নিশ্চিত বিশ্বাসী সম্প্রদায়ের জন্য। আশা এটুকুই, যেন তাদের মধ্যে গণ্য হওয়া যায়। যা দেখা হলো তা যেন স্বীকৃতও হয়, আর যা স্বীকৃত হলো তা যেন এমন দৃঢ় বিশ্বাসে স্থির হয়, যাকে প্রতিদিন সকালে নতুন করে যুক্তি দিয়ে দাঁড় করাতে হয় না।"
          }
        ]
      }
    ]
  },
  "45:12": {
    "sections": [
      {
        "h": {
          "en": "From the Mocker to the Sea",
          "bn": "বিদ্রূপকারী থেকে সমুদ্রের দিকে"
        },
        "p": [
          {
            "en": "The five verses before this one are hard. 45:7 pronounces woe on every sinful liar; 45:8 describes one who hears the verses of Allah recited, then persists in arrogance as if he had not heard them; 45:9 says he takes them in ridicule. 45:11 closes the run: this is guidance, and those who disbelieve in the signs of their Lord have a painful punishment. Then, with no word of transition, 45:12 begins with the name Allah and a sea. The surah stops describing the one who turns away and starts showing what he is turning away from.",
            "bn": "এর আগের পাঁচটি আয়াত কঠিন। ৪৫:৭ আয়াত প্রত্যেক পাপী মিথ্যুকের ধ্বংস ঘোষণা করে। ৪৫:৮ আয়াতে এমন লোকের ছবি, যার সামনে আল্লাহর আয়াত পড়া হয়, তবু সে অহংকারে অটল থাকে, যেন কিছুই শোনেনি। ৪৫:৯ আয়াত বলে, সে আয়াতগুলোকে ঠাট্টার বস্তু বানায়। ৪৫:১১ আয়াতে এ পর্বের শেষ কথা: এটা হিদায়াত, আর যারা রবের আয়াত অস্বীকার করে তাদের জন্য যন্ত্রণাদায়ক শাস্তি। এরপর কোনো ভূমিকা ছাড়াই ৪৫:১২ শুরু হয় আল্লাহর নাম আর একটি সমুদ্র দিয়ে। যে মুখ ফিরিয়ে নিল, সূরা তার বর্ণনা থামিয়ে দেখাতে শুরু করে সে আসলে কী থেকে মুখ ফেরাল।"
          },
          {
            "en": "At-Tabari reads the opening word as a claim in its own right. Allah, O people, he paraphrases, is the One to whom alone godhood is fitting, the One who has bestowed on you these favours that He has made clear in these verses. The favour he then names is the sea made to serve. Those earlier verses describe a type, the arrogant hearer, as the text itself describes him; they license nothing against any living person or community. The reader's part is to check which way he himself is facing when the verses are recited.",
            "bn": "তাবারী শুরুর শব্দটিকেই একটা স্বতন্ত্র দাবি হিসেবে পড়েন। তাঁর ব্যাখ্যায়: হে লোকেরা, আল্লাহ তিনিই, উলূহিয়্যাত একমাত্র যাঁর জন্যই শোভা পায়, যিনি তোমাদের এই নিয়ামতগুলো দিয়েছেন এবং এই আয়াতগুলোতে তা স্পষ্ট করে বলেছেন। এরপর তিনি যে নিয়ামতের নাম নেন, তা হলো সেবায় লাগানো সমুদ্র। আগের আয়াতগুলো একটা ধরনের মানুষের বর্ণনা দেয়, অহংকারী শ্রোতার, ঠিক যেভাবে পাঠ তাকে বর্ণনা করেছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াতগুলো কিছুরই অনুমতি দেয় না। পাঠকের কাজ হলো, আয়াত পড়া হলে নিজে কোন দিকে মুখ করে আছেন তা যাচাই করা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Command Given to Water",
          "bn": "পানির প্রতি এক হুকুম"
        },
        "p": [
          {
            "en": "Li-tajriya l-fulku fihi bi-amrihi: so that the ships may run in it by His command. Ibn Kathir glosses al-fulk simply as the ships, and then explains bi-amrihi with a clause that moves the command onto the sea itself: He is the One who commanded the sea to carry them. On this reading the order is not addressed to the vessel, its builder or its crew. It is addressed to the water underneath them, which carries what it has been told to carry.",
            "bn": "লিতাজরিয়াল ফুলকু ফীহি বিআমরিহী: যাতে তাঁর হুকুমে নৌযানগুলো তাতে চলে। ইবন কাসীর আল-ফুলকের অর্থ বলেন সোজা কথায়: জাহাজ। তারপর বিআমরিহীর ব্যাখ্যায় এমন একটা বাক্য আনেন, যা হুকুমটাকে সমুদ্রের ঘাড়েই রাখে: তিনিই সমুদ্রকে আদেশ করেছেন জাহাজগুলো বহন করতে। এই পাঠে আদেশটা জাহাজের প্রতি নয়, তার নির্মাতা বা মাঝিমাল্লার প্রতিও নয়। আদেশ গেছে নিচের পানির কাছে, আর পানি সেটাই বয়ে নেয় যা বইতে তাকে বলা হয়েছে।"
          },
          {
            "en": "As-Sa'di pairs the command with a second word. The sea is subjected, he writes, for the passage of vessels and ships by His command and His taysir, His making it easy. The pairing is worth holding on to. Command names the authority behind the passage; ease names how it feels to the traveller, a crossing that goes smoothly. At-Tabari and the Muyassar repeat the phrase by His command without expanding it, and neither the Arabic texts fetched for this verse nor Ma'arif dwells on wind, storm or wreck here.",
            "bn": "সা'দী হুকুমের সঙ্গে আরেকটি শব্দ জুড়ে দেন। তিনি লেখেন, নৌযান ও জাহাজের চলাচলের জন্য সমুদ্রকে বশ করা হয়েছে তাঁর হুকুমে এবং তাঁর তাইসীরে, অর্থাৎ সহজ করে দেওয়ায়। জোড়াটা মনে রাখার মতো। হুকুম বলে দেয় চলাচলের পেছনে কার কর্তৃত্ব। আর সহজ করে দেওয়া বলে, মুসাফিরের কাছে পারাপারটা কেমন লাগে: নির্বিঘ্ন। তাবারী আর মুয়াসসার বিআমরিহী কথাটা শুধু পুনরাবৃত্তি করেন, বিস্তারে যান না। এ আয়াতের জন্য আনা আরবি তাফসীরগুলো বা মাআরিফ, কোনোটিই এখানে বাতাস, ঝড় বা জাহাজডুবির আলোচনায় যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Favour Before Any Seeking",
          "bn": "খোঁজার আগেই অনুগ্রহ"
        },
        "p": [
          {
            "en": "As-Sa'di opens his comment on the verse with its frame: Allah informs of His fadl upon His servants and His ihsan towards them, His grace and His kindness, in subjecting the sea. The verse then sends people out to seek min fadlihi, of His bounty. So in as-Sa'di's wording the same word stands at both ends. The sea made to serve is already fadl before anyone has rowed a stroke, and what people bring home from it is fadl again. The human effort happens inside a grace that was there first.",
            "bn": "সা'দী আয়াতের ব্যাখ্যা শুরু করেন তার কাঠামো দিয়ে: আল্লাহ জানাচ্ছেন বান্দাদের প্রতি তাঁর ফযল আর ইহসানের কথা, অর্থাৎ তাঁর অনুগ্রহ ও দয়ার কথা, সমুদ্রকে বশ করে দেওয়ার মধ্য দিয়ে। এরপর আয়াত মানুষকে পাঠায় মিন ফাদলিহী, তাঁর অনুগ্রহ থেকে খুঁজে নিতে। ফলে সা'দীর ভাষায় একই শব্দ দাঁড়িয়ে আছে দুই প্রান্তে। কেউ একবার বৈঠা ফেলার আগেই সেবায় লাগানো সমুদ্র এক অনুগ্রহ। আর সেখান থেকে মানুষ যা ঘরে আনে, তাও অনুগ্রহ। মানুষের চেষ্টা চলে এমন এক দয়ার ভেতরে, যা আগে থেকেই ছিল।"
          },
          {
            "en": "Al-Qurtubi's whole comment is one sentence, and it points the same way. The verse, he says, mentions the perfection of His power and the completeness of His favour upon His servants, and makes clear that He created what He created for their benefit. That last clause is the weight of the word lakum, for you, near the start of the verse. The sea was not subjected for its own sake or left to chance. It was made, in al-Qurtubi's word, for the benefit of His servants.",
            "bn": "কুরতুবীর পুরো মন্তব্যটা একটিমাত্র বাক্য, আর তা একই দিকে ইশারা করে। তিনি বলেন, আয়াতটি তাঁর কুদরতের পূর্ণতা আর বান্দাদের প্রতি তাঁর নিয়ামতের পরিপূর্ণতার কথা বলে, আর স্পষ্ট করে যে তিনি যা সৃষ্টি করেছেন তা তাদের উপকারের জন্যই করেছেন। শেষ কথাটাই আয়াতের শুরুর দিকের লাকুম শব্দের ভার, অর্থাৎ তোমাদের জন্য। সমুদ্রকে নিজের জন্য বশ করা হয়নি, ভাগ্যের হাতেও ছেড়ে দেওয়া হয়নি। কুরতুবীর ভাষায়, তাকে বানানো হয়েছে তাঁর বান্দাদের উপকারের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Seeking Covers",
          "bn": "খোঁজার পরিধি কতটুকু"
        },
        "p": [
          {
            "en": "Wa-li-tabtaghu min fadlihi: and so that you may seek of His bounty. The commentators fetched here give the clause a narrow, concrete content. Ibn Kathir says: in trades and earnings, al-matajir wa-l-makasib. The Muyassar and as-Sa'di use almost the same words, with the various kinds of trade and earning. None of the three lists cargoes, catches or goods. They leave the bounty as a category, the many ways a person earns, and let the reader fill it from his own life.",
            "bn": "ওয়ালিতাবতাগূ মিন ফাদলিহী: আর যাতে তোমরা তাঁর অনুগ্রহ তালাশ কর। এখানে আনা তাফসীরগুলো এ অংশকে দেয় সংকীর্ণ ও বাস্তব একটা অর্থ। ইবন কাসীর বলেন: ব্যবসা-বাণিজ্য আর উপার্জনে, আল-মাতাজির ওয়াল-মাকাসিব। মুয়াসসার আর সা'দী প্রায় একই কথা বলেন: নানা রকম ব্যবসা ও উপার্জনের মাধ্যমে। তিনজনের কেউই পণ্যের, মাছ ধরার বা মালামালের কোনো তালিকা দেন না। অনুগ্রহকে তাঁরা একটা শ্রেণি হিসেবেই রেখে দেন, মানুষ যত উপায়ে রোজগার করে। বাকিটা পাঠক ভরাট করবেন নিজের জীবন থেকে।"
          },
          {
            "en": "At-Tabari ties the seeking more tightly to the ships. The vessels run by His command, he says, for your livelihoods, li-ma'ayishikum, and your moving about in the lands, wa-tasarrufikum fi l-bilad, to seek His bounty in them. In his paraphrase the sailing is not an end in itself. It serves two human needs at once: making a living, and being able to go from one land to another. The sea becomes a road, and the bounty is found at the far end of it, in the lands it opens.",
            "bn": "তাবারী খোঁজাকে জাহাজের সঙ্গে আরও শক্ত করে বাঁধেন। তাঁর ভাষায়, নৌযানগুলো তাঁর হুকুমে চলে তোমাদের জীবিকার জন্য, লিমাআয়িশিকুম, আর দেশে দেশে তোমাদের চলাফেরার জন্য, ওয়া তাসাররুফিকুম ফিল বিলাদ, যাতে সেখানে তাঁর অনুগ্রহ খুঁজতে পার। তাঁর ব্যাখ্যায় জাহাজ চলা নিজেই লক্ষ্য নয়। তা একসঙ্গে মানুষের দুটি প্রয়োজন মেটায়: রুজি রোজগার, আর এক দেশ থেকে আরেক দেশে যেতে পারা। সমুদ্র হয়ে যায় একটা পথ, আর অনুগ্রহ মেলে সেই পথের ওপারে, যে দেশগুলো সে খুলে দেয় সেখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ma'arif Weighs Three Senses",
          "bn": "মাআরিফের তিন সম্ভাব্য অর্থ"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, in a comment that covers 45:12 and 45:13 together, lays out several ways of taking the clause. First, it says, when the Qur'an generally uses the expression to seek His grace, it refers to exerting oneself in seeking a livelihood. Second, the phrase could mean that man has been given the skill to move boats and pilot ships on the surface of the waters, so that he may carry out his commercial activities across the globe. Both keep the seeking close to work and trade.",
            "bn": "মাআরিফুল কুরআন ৪৫:১২ ও ৪৫:১৩ আয়াত একসঙ্গে আলোচনা করে, আর এ অংশটি বোঝার একাধিক পথ সামনে রাখে। প্রথমত, তার কথায়, কুরআন সাধারণত যখন তাঁর অনুগ্রহ তালাশ করার কথা বলে, তখন বোঝায় জীবিকার জন্য খাটাখাটনি করা। দ্বিতীয়ত, কথাটার অর্থ হতে পারে যে মানুষকে পানির উপর নৌকা চালানো আর জাহাজ পরিচালনার দক্ষতা দেওয়া হয়েছে, যাতে সে দুনিয়াজুড়ে বাণিজ্য চালাতে পারে। দুটো অর্থই খোঁজাকে রাখে কাজ আর ব্যবসার কাছাকাছি।"
          },
          {
            "en": "The third sense, Ma'arif says, is possible because seeking grace may have nothing to do with the sailing of boats at all. Subjugating the sea then has a special meaning: Allah created many useful things in the sea and subjugated it for mankind's benefit, so that they may draw out its minerals and other wealth. Ma'arif adds a remark of its own about how much the oceans hold; that is its observation, not something the Arabic commentaries fetched for this verse say. It leaves the three senses side by side without choosing.",
            "bn": "মাআরিফ বলে, তৃতীয় অর্থটিও সম্ভব, কারণ অনুগ্রহ তালাশের সঙ্গে নৌকা বা জাহাজ চলার হয়তো কোনো সম্পর্কই নেই। তখন সমুদ্রকে বশ করার একটা বিশেষ অর্থ দাঁড়ায়: আল্লাহ সমুদ্রে বহু উপকারী জিনিস সৃষ্টি করেছেন আর মানুষের কল্যাণে তাকে বশ করে দিয়েছেন, যাতে তারা তার খনিজ ও অন্যান্য সম্পদ বের করে আনতে পারে। সাগরে কত সম্পদ লুকিয়ে আছে, সে বিষয়ে মাআরিফ নিজের একটা মন্তব্যও যোগ করে। সেটা তার নিজের পর্যবেক্ষণ, এ আয়াতের জন্য আনা আরবি তাফসীরগুলোর কথা নয়। তিনটি অর্থকে সে পাশাপাশি রেখে দেয়, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks Aimed at Something",
          "bn": "শোকরের লক্ষ্য কী"
        },
        "p": [
          {
            "en": "Wa-la'allakum tashkurun: and perhaps you will be grateful. Grateful for what, exactly? The commentators fetched here answer from slightly different places, and their answers sit together without contradiction. Ibn Kathir points to the goods. The thanks is for obtaining the benefits brought to you from distant regions and far horizons, min al-aqalim an-na'iya wa-l-afaq al-qasiya. His eye is on the arrival: what reaches a person across water he did not cross himself, from places he may never see.",
            "bn": "ওয়া লাআল্লাকুম তাশকুরূন: আর হয়তো তোমরা শোকর করবে। কিন্তু শোকর ঠিক কীসের জন্য? এখানে আনা তাফসীরকারেরা উত্তর দেন একটু ভিন্ন ভিন্ন জায়গা থেকে, আর তাঁদের উত্তরগুলো পরস্পরবিরোধী নয়, পাশাপাশি থাকে। ইবন কাসীর দেখান মালামালের দিকে। তাঁর মতে শোকর হলো দূরদূরান্তের অঞ্চল আর দূরতম দিগন্ত থেকে তোমাদের কাছে বয়ে আনা উপকারগুলো পাওয়ার জন্য, মিনাল আকালীমিন না-ইয়া ওয়াল আফাকিল কাসিয়া। তাঁর নজর পৌঁছানোর উপর: যে পানি মানুষ নিজে পার হয়নি, তা পেরিয়ে এমন সব জায়গা থেকে যা তার কাছে আসে, যে জায়গা সে হয়তো কখনো দেখবেও না।"
          },
          {
            "en": "At-Tabari and the Muyassar point instead to the subjection itself, and then say what the thanks consists of. At-Tabari: so that you thank your Lord for His subjecting that to you, and so worship Him and obey Him in what He commands you and forbids you. The Muyassar uses nearly the same sentence and adds one word, wahdahu: worship Him alone. In both, gratitude is not left as a feeling. It is spelled out as worship and obedience, the opposite of the arrogant persistence of the hearer in 45:8.",
            "bn": "তাবারী আর মুয়াসসার আঙুল তোলেন খোদ বশ করে দেওয়ার দিকে, তারপর বলে দেন শোকর আসলে কী দিয়ে হয়। তাবারীর কথা: যাতে তোমাদের জন্য এটা বশ করে দেওয়ার কারণে তোমরা রবের শোকর কর, অর্থাৎ তাঁর ইবাদত কর আর তিনি যা আদেশ করেন ও যা নিষেধ করেন তাতে তাঁর আনুগত্য কর। মুয়াসসার প্রায় একই বাক্য বলে, শুধু একটা শব্দ যোগ করে, ওয়াহদাহু: কেবল তাঁরই ইবাদত কর। দুজনের কাছেই শোকর শুধু একটা অনুভূতি হয়ে থাকে না। তা খুলে বলা হয় ইবাদত আর আনুগত্য হিসেবে, ৪৫:৮ আয়াতের শ্রোতার অহংকারী জেদের ঠিক উল্টো।"
          },
          {
            "en": "As-Sa'di looks forward, to what thanks brings. Thank Allah, he writes, for if you thank Him He will increase you in His favours and reward you for your gratitude with an abundant reward. So the three answers line up along a single path: notice the goods that arrived, recognise the One who arranged their arrival, and answer Him with worship and obedience, and the gift does not end there but grows. None of the commentators here claims that any one of these is the only meaning of the clause.",
            "bn": "সা'দী তাকান সামনের দিকে, শোকর কী এনে দেয় সেদিকে। তিনি লেখেন, আল্লাহর শোকর কর, কারণ শোকর করলে তিনি তোমাদের নিয়ামত বাড়িয়ে দেবেন আর শোকরের বিনিময়ে বিপুল প্রতিদান দেবেন। তাহলে তিনটি উত্তর এক পথেই সাজানো: যে মালামাল এসে পৌঁছাল তা খেয়াল করা, যিনি তা পৌঁছানোর ব্যবস্থা করলেন তাঁকে চেনা, আর ইবাদত ও আনুগত্য দিয়ে তাঁকে জবাব দেওয়া। তাতে দান সেখানেই থেমে যায় না, বাড়তে থাকে। এখানকার কোনো তাফসীরকারই দাবি করেন না যে এর যেকোনো একটিই এ অংশের একমাত্র অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Commentaries Stop",
          "bn": "যেখানে তাফসীর থেমে যায়"
        },
        "p": [
          {
            "en": "It is worth saying plainly what these texts do not do. Al-Baghawi, in the text fetched for this verse, simply quotes it and adds no comment. None of the fetched commentaries cites a parallel verse for 45:12, attaches a hadith to it, or reports an occasion of revelation for it, so this article offers none. None of them mentions fishing, pearls or ornaments under this verse, and none describes storms or the fear of drowning here. Whatever other passages may hold, these comments on 45:12 do not go there.",
            "bn": "এই লেখাগুলো কী করে না, তাও সোজাসুজি বলা দরকার। এ আয়াতের জন্য আনা বাগাভীর পাঠে তিনি শুধু আয়াতটি উদ্ধৃত করেন, কোনো মন্তব্য যোগ করেন না। আনা তাফসীরগুলোর কোনোটিই ৪৫:১২ আয়াতের জন্য সমার্থক কোনো আয়াতের উল্লেখ করে না, কোনো হাদীস জুড়ে দেয় না, নাযিলের কোনো প্রেক্ষাপটও বর্ণনা করে না। তাই এ লেখাতেও সেসব নেই। মাছ ধরা, মুক্তা বা অলংকারের কথাও এ আয়াতের আলোচনায় তাঁরা কেউ আনেন না, ঝড় বা ডুবে যাওয়ার ভয়ের বর্ণনাও এখানে নেই। অন্য জায়গায় যা-ই থাকুক, ৪৫:১২ নিয়ে এই মন্তব্যগুলো সেদিকে যায় না।"
          },
          {
            "en": "What they do say is enough to read the verse by. Ibn Kathir's abridged English edition sets 45:12 under a heading that calls the subjection of the sea one of Allah's signs, and the very next verse, 45:13, widens the same subjection to whatever is in the heavens and on the earth. That wider claim has its own treatment. Here the commentators keep to one element, one command, one kind of seeking and one hoped-for response, and the verse is better served by staying with that than by importing what it does not mention.",
            "bn": "তাঁরা যা বলেন, আয়াতটি পড়ার জন্য তাই যথেষ্ট। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪৫:১২ আয়াতকে রাখে এমন এক শিরোনামের নিচে, যা সমুদ্রকে বশ করে দেওয়াকে আল্লাহর নিদর্শনগুলোর একটি বলে। আর ঠিক পরের আয়াত, ৪৫:১৩, এই বশ করে দেওয়াকে বিস্তৃত করে আকাশ ও পৃথিবীর সবকিছু পর্যন্ত। সেই বড় দাবির আলোচনা আলাদা। এখানে তাফসীরকারেরা থাকেন একটি উপাদান, একটি হুকুম, এক ধরনের খোঁজা আর একটি প্রত্যাশিত সাড়া নিয়ে। আয়াত যা বলেনি তা বাইরে থেকে টেনে আনার চেয়ে এর মধ্যে থাকাই আয়াতের প্রতি বেশি সুবিচার।"
          }
        ]
      },
      {
        "h": {
          "en": "Tracing What Arrives",
          "bn": "যা এসে পৌঁছায় তার খোঁজ"
        },
        "p": [
          {
            "en": "The verse can be read in a day's ordinary objects. Take Ibn Kathir's phrase about benefits brought from distant regions and ask of a few things in your house where they came from and what they crossed to reach you. You did not cross that distance. Someone set out to seek a living, and on the commentators' reading the road he used was held open by a command he did not give. Answering that question honestly, item by item, is the first of the three steps the commentators set out together.",
            "bn": "আয়াতটি পড়া যায় দিনের সাধারণ জিনিসপত্রের মধ্যেও। দূরদূরান্তের অঞ্চল থেকে বয়ে আনা উপকার নিয়ে ইবন কাসীরের কথাটা মনে রেখে ঘরের কয়েকটা জিনিসকে জিজ্ঞেস করুন: কোথা থেকে এলে, আমার কাছে পৌঁছাতে কী কী পার হলে? সেই দূরত্ব আপনি পার হননি। কেউ রুজির খোঁজে বেরিয়েছিল। আর তাফসীরকারদের পাঠে, সে যে পথ ধরেছিল তা খোলা রেখেছিল এমন এক হুকুম, যা সে নিজে দেয়নি। এক এক করে সৎভাবে এ প্রশ্নের উত্তর দেওয়াই তাফসীরকারদের একসঙ্গে দেখানো তিনটি ধাপের প্রথমটি।"
          },
          {
            "en": "The second and third steps are harder because they reach into conduct. At-Tabari and the Muyassar make gratitude a matter of worshipping Allah and obeying Him in what He commands and forbids. That puts the question into the seeking itself. If the bounty you go out for is His, then how you seek it is part of how you thank Him for it. A living earned in disobedience sits awkwardly beside the words la'allakum tashkurun, because the thanks the verse hopes for is shown in obedience.",
            "bn": "দ্বিতীয় আর তৃতীয় ধাপ কঠিন, কারণ তা আচরণের ভেতরে ঢুকে পড়ে। তাবারী আর মুয়াসসার শোকরকে বানান আল্লাহর ইবাদত আর তাঁর আদেশ-নিষেধ মানার বিষয়। ফলে প্রশ্নটা খোঁজার ভেতরেই চলে আসে। যে অনুগ্রহের খোঁজে আপনি বের হন তা যদি তাঁরই হয়, তবে কীভাবে খুঁজছেন সেটাও তাঁর শোকরেরই অংশ। নাফরমানির পথে কামানো রুজি লাআল্লাকুম তাশকুরূন কথাটার পাশে বেমানান দাঁড়ায়, কারণ আয়াত যে শোকরের আশা করে তা প্রকাশ পায় আনুগত্যে।"
          },
          {
            "en": "And as-Sa'di's promise turns the whole exercise from duty into hope. Thanks, he says, brings increase and an abundant reward. The verse began right after a portrait of someone who heard the signs and walked past them. It ends by asking you to do the opposite with something as plain as water: look at it, see whose command holds it, earn your share of His bounty in a way He approves, and say thank you in the form of obedience. That is a small enough practice to begin today.",
            "bn": "আর সা'দীর প্রতিশ্রুতি পুরো ব্যাপারটাকে দায় থেকে আশায় নিয়ে যায়। তাঁর কথায়, শোকর বাড়তি নিয়ামত আর বিপুল প্রতিদান আনে। আয়াতটা শুরু হয়েছিল এমন এক লোকের ছবির ঠিক পরে, যে নিদর্শন শুনেও পাশ কাটিয়ে চলে গেছে। শেষ হয় আপনাকে উল্টোটা করতে বলে, পানির মতো সাদামাটা একটা জিনিস দিয়ে। তাকিয়ে দেখুন, বুঝুন কার হুকুম তাকে ধরে রেখেছে, তাঁর অনুগ্রহ থেকে নিজের ভাগ রোজগার করুন তাঁর পছন্দের পথে, আর আনুগত্যের রূপে বলুন: শুকরিয়া। শুরু করার জন্য এটুকু অভ্যাস আজই যথেষ্ট ছোট।"
          }
        ]
      }
    ]
  },
  "45:13": {
    "sections": [
      {
        "h": {
          "en": "One Verse Wider Than the Last",
          "bn": "আগের আয়াতের চেয়ে প্রশস্ত"
        },
        "p": [
          {
            "en": "45:12 begins the passage with something specific: Allah subjected the sea for you, so that ships run upon it by His command and you may seek of His bounty — and it ends, perhaps you will be grateful. That is a bounded claim about one element people already knew they could not control. Then this verse removes the boundary altogether.",
            "bn": "45:12 অংশটি শুরু করে নির্দিষ্ট কিছু দিয়ে: আল্লাহ তোমাদের জন্য সমুদ্রকে অধীন করেছেন, যাতে তাঁর নির্দেশে জাহাজ তাতে চলে এবং তোমরা তাঁর অনুগ্রহ তালাশ করতে পার — আর আয়াতটি শেষ হয় এই বলে, যেন তোমরা কৃতজ্ঞ হও। এটি এমন একটি উপাদান নিয়ে সীমিত দাবি, যাকে মানুষ আগে থেকেই জানত যে তারা নিয়ন্ত্রণ করতে পারে না। এরপর এই আয়াত সীমাটিই মুছে দেয়।"
          },
          {
            "en": "Whatever is in the heavens and whatever is on the earth, all of it, subjected for you. The Arabic particle ma, whatever, does not halt at the catalogue we have compiled; it takes in what nobody has yet named. A reader in Makkah and a reader with a telescope are both standing inside the same sentence, and neither of them has reached its edge.",
            "bn": "আসমানসমূহে যা কিছু আছে আর যমীনে যা কিছু আছে, তার সবই তোমাদের অধীন করা হয়েছে। আরবি শব্দ 'মা' — অর্থাৎ 'যা কিছু' — আমাদের তৈরি করা তালিকায় এসে থামে না; এটি ধরে ফেলে তা-ও, যার নাম এখনো কেউ রাখেনি। মক্কার একজন পাঠক আর দূরবীন হাতে একজন পাঠক — দুজনেই একই বাক্যের ভেতরে দাঁড়িয়ে আছেন, আর দুজনের কেউই এর প্রান্ত পর্যন্ত পৌঁছাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "What Sakhkhara Means",
          "bn": "সাখখারা শব্দের অর্থ"
        },
        "p": [
          {
            "en": "Taskhir is to put a thing to work in someone's service without its consent, its wage or its awareness. The sun is not an employee. It is not consulted about the harvest it ripens and it sends no bill. The verb appears across the Quran with steady content: 22:65 for the earth and the ships, 16:12 for night and day and sun and moon and stars, 14:32-33 for ships, rivers, sun, moon, night and day.",
            "bn": "তাসখীর মানে কোনো কিছুকে কারও সেবায় খাটিয়ে নেওয়া — তার সম্মতি ছাড়া, তার পারিশ্রমিক ছাড়া, এমনকি তার জানা ছাড়াই। সূর্য কোনো কর্মচারী নয়। যে ফসল সে পাকায় তা নিয়ে তার সাথে পরামর্শ করা হয় না, আর সে কোনো বিলও পাঠায় না। ক্রিয়াটি কুরআনজুড়ে একই অর্থ নিয়ে আসে: 22:65 আয়াতে যমীন ও জাহাজের জন্য, 16:12 আয়াতে রাত ও দিন এবং সূর্য, চাঁদ ও তারার জন্য, 14:32-33 আয়াতে জাহাজ, নদী, সূর্য, চাঁদ, রাত ও দিনের জন্য।"
          },
          {
            "en": "31:20 places the same subjection beside a second phrase worth keeping: He has amply bestowed upon you His favours, apparent and unapparent. Some of the service is visible — the rain that fell, the crop that came in. Most of it is not, running below any line we would notice, which is precisely why a verse has to inform us that it is happening at all.",
            "bn": "31:20 একই অধীনস্থ করাকে রাখে আরেকটি মনে রাখার মতো বাক্যের পাশে: তিনি তোমাদের ওপর তাঁর নিয়ামত পূর্ণ করে দিয়েছেন, প্রকাশ্য ও অপ্রকাশ্য। এই সেবার কিছু অংশ দৃশ্যমান — যে বৃষ্টি নামল, যে ফসল ঘরে উঠল। বেশিরভাগই দৃশ্যমান নয়, চলে আমাদের নজরে পড়ার সীমার অনেক নিচ দিয়ে — আর ঠিক এ কারণেই একটি আয়াতকে আমাদের জানাতে হয় যে ব্যাপারটি আদৌ ঘটছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Words Jami'an Minhu",
          "bn": "জামী'আন মিনহু শব্দ দুটি"
        },
        "p": [
          {
            "en": "The two words after the list have been read in more than one way, and the difference is worth stating without settling it. Read one way, jami'an gathers the whole of what was mentioned — all of it, without exception, subjected — and minhu names the source: it is from Him. Read the other way, the weight falls on minhu, so that the subjection itself is a favour proceeding from Him alone, which is how the classical commentators most often summarise the sense.",
            "bn": "তালিকার পরের এই দুটি শব্দ একাধিকভাবে পড়া হয়েছে, আর পার্থক্যটি কোনো এক পক্ষ না নিয়েই বলে রাখা ভালো। এক পাঠে জামী'আন পুরো উল্লিখিত বিষয়টিকে একত্র করে — সবই, ব্যতিক্রম ছাড়া, অধীন করা হয়েছে — আর মিনহু উৎসের নাম নেয়: তা তাঁর কাছ থেকে। অন্য পাঠে ভারটি পড়ে মিনহু শব্দের ওপর, যাতে অধীন করাটাই কেবল তাঁর কাছ থেকে আসা এক অনুগ্রহ — ধ্রুপদী মুফাসসিরগণ অধিকাংশ সময় এভাবেই অর্থটি সংক্ষেপ করেন।"
          },
          {
            "en": "Either way the phrase closes a door. In both readings min marks origin — where this came from — and not a portion of anything. So nothing in the arrangement is owed to us and nothing in it arrived by itself. The verse does not say that the heavens and the earth serve us because that is their nature. It says they were made to serve, by Someone, as a favour.",
            "bn": "যেভাবেই পড়া হোক, বাক্যাংশটি একটি দরজা বন্ধ করে দেয়। দুই পাঠেই 'মিন' উৎস নির্দেশ করে — এটি কোথা থেকে এসেছে — কোনো কিছুর অংশ নয়। ফলে এই ব্যবস্থার কিছুই আমাদের প্রাপ্য নয়, আর কিছুই আপনাআপনি এসে যায়নি। আয়াতটি বলে না যে আসমান ও যমীন আমাদের সেবা করে কারণ সেটিই তাদের স্বভাব। এটি বলে, কেউ একজন তাদের সেবায় নিয়োজিত করেছেন, অনুগ্রহ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs for People Who Think",
          "bn": "চিন্তাশীল মানুষের জন্য নিদর্শন"
        },
        "p": [
          {
            "en": "The two verses end differently, and the difference is the point. 45:12 ends with perhaps you will be grateful; this one ends with signs for a people who give thought. Thanks is the response to a gift you have noticed. Thought is what turns a noticed gift into evidence. The passage asks for both, and in that order.",
            "bn": "দুটি আয়াত ভিন্নভাবে শেষ হয়, আর এই ভিন্নতাই মূল কথা। 45:12 শেষ হয় 'যেন তোমরা কৃতজ্ঞ হও' দিয়ে; এটি শেষ হয় 'চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন' দিয়ে। কৃতজ্ঞতা হলো লক্ষ করা কোনো দানের প্রতি সাড়া। আর চিন্তা হলো সেই লক্ষ করা দানকে প্রমাণে রূপান্তরিত করা। অংশটি দুটোই চায়, এবং এই ক্রমেই চায়।"
          },
          {
            "en": "as-Sa'di traces what the thinking finds. The precision of the making points to knowledge; the scale of it to dominion; the sheer usefulness of it to mercy; and creatures set to opposite tasks to a will that does as it chooses. Taken together, he argues, the subjection of a universe to so small a creature argues for One who alone deserves worship. 59:21 says these examples are struck for people so that they might reflect.",
            "bn": "আস-সা'দী দেখান, এই চিন্তা কী খুঁজে পায়। সৃষ্টির নিখুঁততা নির্দেশ করে জ্ঞানের দিকে; এর বিশালতা নির্দেশ করে কর্তৃত্বের দিকে; এর নিছক উপকারিতা নির্দেশ করে রহমতের দিকে; আর পরস্পরবিরোধী কাজে নিয়োজিত সৃষ্টিগুলো নির্দেশ করে এমন এক ইচ্ছার দিকে যা যা চায় তা-ই করে। সব মিলিয়ে, তিনি বলেন, এত ক্ষুদ্র এক সৃষ্টির অধীনে গোটা বিশ্বজগৎকে দিয়ে দেওয়া প্রমাণ করে যে ইবাদতের যোগ্য একমাত্র তিনিই। 59:21 বলে, এসব দৃষ্টান্ত মানুষের জন্য দেওয়া হয় যাতে তারা চিন্তা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Served, Not Sovereign",
          "bn": "সেবা পাচ্ছি, মালিক নই"
        },
        "p": [
          {
            "en": "A gift is easily misread as a right. Nothing in this verse makes the human being the owner of what serves him; the verb has a subject, and the subject is Allah. The sea in 45:12 runs by His command, not the captain's. Read carefully, the verse enlarges the human place in creation and shrinks the human claim over it in the same breath.",
            "bn": "দান সহজেই অধিকার বলে ভুল পড়া হয়। এই আয়াতের কিছুই মানুষকে তার সেবাকারীদের মালিক বানায় না; ক্রিয়াটির একজন কর্তা আছেন, আর সেই কর্তা আল্লাহ। 45:12 আয়াতের সমুদ্র চলে তাঁর নির্দেশে, নাবিকের নির্দেশে নয়। মনোযোগ দিয়ে পড়লে দেখা যায়, আয়াতটি একই নিঃশ্বাসে সৃষ্টিতে মানুষের স্থানকে বড় করে আর তার ওপর মানুষের দাবিকে ছোট করে।"
          },
          {
            "en": "The practice is small and specific. Take one thing today that served you without being asked — light, running water, an unbroken night, a body that carried you where you needed to go — and hold it long enough to see both ends of the sentence: that it was subjected, and that it came from Him. Do that once a day and the verse has been read the way it asks to be read.",
            "bn": "চর্চাটি ছোট ও নির্দিষ্ট। আজ এমন একটি জিনিস বেছে নিন যা না চাইতেই আপনার সেবা করেছে — আলো, বহতা পানি, নির্বিঘ্ন একটি রাত, কিংবা এমন একটি শরীর যা আপনাকে যেখানে দরকার সেখানে বয়ে নিয়ে গেছে — আর তা নিয়ে ততক্ষণ থামুন যতক্ষণে বাক্যটির দুই প্রান্তই দেখা যায়: এটিকে অধীন করা হয়েছে, আর এটি এসেছে তাঁরই কাছ থেকে। দিনে একবার এটি করুন, তাহলেই আয়াতটি সেভাবে পড়া হলো যেভাবে সে পড়তে বলে।"
          }
        ]
      }
    ]
  },
  "45:22": {
    "sections": [
      {
        "h": {
          "en": "An Answer to a Reckoning",
          "bn": "এক ভুল হিসাবের জবাব"
        },
        "p": [
          {
            "en": "Wa khalaqa Allahu as-samawati wal-arda bil-haqq, wa li-tujza kullu nafsin bima kasabat, wa hum la yuzlamun: and Allah created the heavens and the earth in truth, and so that every soul may be recompensed for what it has earned, and they will not be wronged. The verse follows 45:21 directly. That verse asks whether those who commit evil deeds think Allah will make them like those who believe and do righteous deeds, equal in their life and their death, and it closes: evil is what they judge.",
            "bn": "ওয়া খালাকাল্লাহুস সামাওয়াতি ওয়াল আরদা বিল-হাক্ক, ওয়া লিতুজযা কুল্লু নাফসিম বিমা কাসাবাত, ওয়া হুম লা য়ুযলামূন: আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হক সহকারে, আর যাতে প্রত্যেক প্রাণকে তার উপার্জনের প্রতিদান দেওয়া হয়, আর তাদের উপর জুলুম করা হবে না। আয়াতটি এসেছে ঠিক ৪৫:২১-এর পরে। সেখানে প্রশ্ন ছিল: যারা মন্দ কাজ করে, তারা কি ভেবেছে আল্লাহ তাদেরকে ঈমানদার ও সৎকর্মশীলদের মতো বানিয়ে দেবেন, জীবনে ও মরণে সমান করে? সে আয়াতের শেষ কথা: কত মন্দ তাদের এ ফয়সালা!"
          },
          {
            "en": "At-Tabari ties the two verses together in so many words. Allah created the heavens and the earth for justice and truth, he says, and not for what these people ignorant of Allah reckoned: that He would make the one who committed evil deeds, disobeyed Him and went against His command like those who believe and do righteous deeds, in life and in death. Ma'arif al-Qur'an, commenting on 45:21 and 45:22 together, calls the second verse a complement to the same subject. Here 45:21 serves only to place the verse.",
            "bn": "দুই আয়াতকে তাবারী স্পষ্ট ভাষায় জুড়ে দেন। তাঁর কথায়, আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন ইনসাফ ও হকের জন্য। আল্লাহ সম্পর্কে অজ্ঞ এ লোকেরা যা ভেবেছিল, সেজন্য নয়। তারা ভেবেছিল, যে মন্দ কাজ করেছে, তাঁর নাফরমানি করেছে, তাঁর হুকুমের বিরোধিতা করেছে, তাকে তিনি জীবনে ও মরণে ঈমানদার সৎকর্মশীলদের মতো করে দেবেন। মাআরিফুল কুরআন ৪৫:২১ ও ৪৫:২২ একসঙ্গে আলোচনা করে বলে, দ্বিতীয় আয়াতটি একই বিষয়কে পূর্ণতা দেয়। এখানে ৪৫:২১ শুধু আয়াতটির জায়গা বোঝানোর জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "What Bil-Haqq Is Given",
          "bn": "বিল-হাক্ক শব্দের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "The commentators fetched for this verse gloss bil-haqq in more than one way. Ibn Kathir, in the Arabic, gives a single word: bil-'adl, with justice; the English abridgement renders it, meaning, in justice. At-Tabari pairs two words, justice and truth, and his gloss is worded with li, for: li'l-'adli wal-haqq, for justice and truth. The difference is in his paraphrase. He does not stop to comment on the preposition, and this article draws no rule from it.",
            "bn": "এ আয়াতের যে তাফসীরগুলো হাতে আছে, সেগুলোতে বিল-হাক্কের ব্যাখ্যা একরকম নয়। আরবী ইবন কাসীর একটিমাত্র শব্দে বলেন: বিল-আদল, অর্থাৎ ইনসাফের সঙ্গে। ইংরেজি সংক্ষিপ্ত সংস্করণও লিখেছে, মানে ইনসাফের সঙ্গে। তাবারী দুটি শব্দ পাশাপাশি রাখেন, ইনসাফ ও হক। তাঁর ব্যাখ্যার শব্দ লি দিয়ে: লিল-আদলি ওয়াল-হাক্ক, অর্থাৎ ইনসাফ ও হকের জন্য। পার্থক্যটা তাঁর নিজের ভাষ্যের শব্দে। এ নিয়ে তিনি আলাদা কিছু বলেননি, আর এ লেখাও এখান থেকে কোনো নিয়ম বের করছে না।"
          },
          {
            "en": "The Muyassar widens the gloss to three: Allah created the heavens and the earth with truth, justice and wisdom. Al-Qurtubi gives bil-amri'l-haqq, with the true matter, and adds nothing more on the phrase. As-Sa'di says with wisdom, al-hikmah, and joins a second aim to it at once: and so that He alone be worshipped, with no partner. Of the eight texts fetched, al-Baghawi's carries the verse alone with no comment, so he is not cited for any reading here.",
            "bn": "মুয়াসসার ব্যাখ্যাটা তিনটি শব্দে বিস্তৃত করে: আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হক, ইনসাফ ও হিকমত সহকারে। কুরতুবী বলেন বিল-আমরিল হাক্ক, অর্থাৎ সত্য বিষয় সহকারে, এর বেশি কিছু যোগ করেননি। সা'দী বলেন হিকমত সহকারে, আর সঙ্গে সঙ্গেই আরেকটি লক্ষ্য জুড়ে দেন: যাতে শুধু তাঁরই ইবাদত হয়, তাঁর কোনো শরীক নেই। হাতে থাকা আটটি লেখার মধ্যে বাগাভীর লেখায় শুধু আয়াতটিই আছে, কোনো ব্যাখ্যা নেই। তাই কোনো অর্থের জন্য এখানে তাঁর নাম আনা হয়নি।"
          },
          {
            "en": "So the glosses fall on three words. Justice comes from Ibn Kathir, at-Tabari and the Muyassar; wisdom from the Muyassar and as-Sa'di; truth from at-Tabari, the Muyassar and al-Qurtubi's true matter. None of these texts argues against another, and several hold two or three of the words at once. They are not set out here as rival readings, and the article does not pick one. What each gives is a word for what the creation was made with, and each word is kept under its own name.",
            "bn": "তাহলে ব্যাখ্যাগুলো ঘোরে তিনটি শব্দের চারপাশে। ইনসাফের কথা বলেন ইবন কাসীর, তাবারী ও মুয়াসসার। হিকমতের কথা মুয়াসসার ও সা'দীর। হকের কথা তাবারী ও মুয়াসসারের, আর কুরতুবীর সত্য বিষয়ের মধ্যেও তা আছে। কোনো লেখা অন্যটির বিরুদ্ধে যুক্তি দেয়নি, কয়েকটিতে দুই-তিনটি শব্দ একসঙ্গেই আছে। তাই এগুলোকে পরস্পরবিরোধী মত হিসেবে সাজানো হয়নি, আর এ লেখা কোনো একটিকে বেছেও নেয়নি। প্রত্যেকে বলেছেন সৃষ্টি কী সহকারে হয়েছে, আর প্রত্যেকের শব্দ তাঁর নামেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Built for Oppression",
          "bn": "জুলুমের জন্য গড়া নয়"
        },
        "p": [
          {
            "en": "At-Tabari does not leave bil-haqq as a gloss; he turns it into an argument. To make the disobedient like the believer who did good, he says, would be the act of those who are not people of justice and fairness. Then he puts the point in Allah's voice, as he reads it: Allah did not create the heavens and the earth for wrong and oppression, li'z-zulmi wal-jawr, but We created them for truth and justice. The reckoning of 45:21 is answered by what the creation is for.",
            "bn": "তাবারী বিল-হাক্ককে শুধু শব্দার্থে রেখে দেননি, একে যুক্তিতে পরিণত করেছেন। তাঁর কথায়, যে নাফরমানি করেছে তাকে সৎকর্মশীল ঈমানদারের সমান করা হবে তাদের কাজ, যারা ইনসাফ ও ন্যায্যতার লোক নয়। এরপর তিনি নিজের পাঠ অনুযায়ী কথাটা আল্লাহর জবানিতে বলেন: আল্লাহ আসমান ও যমীন জুলুম আর অত্যাচারের জন্য সৃষ্টি করেননি, লিয-যুলমি ওয়াল-জাওর। বরং আমি এগুলো সৃষ্টি করেছি হক ও ইনসাফের জন্য। ৪৫:২১-এর ভুল হিসাবের জবাব আসে সৃষ্টির উদ্দেশ্য থেকে।"
          },
          {
            "en": "He then names one thing that belongs to that truth: wa minal-haqqi an nukhalifa bayna hukmi'l-musi'i wal-muhsin, fil-'ajili wal-ajil. Part of the truth is that We make a difference between how the wrongdoer and the doer of good are dealt with, in the near term and the later. At-Tabari places the difference in both, the present and what comes after. He does not say in this passage what the difference in the near term consists of, so nothing is added to it here.",
            "bn": "তারপর তিনি সেই হকের একটি অংশের নাম বলেন: ওয়া মিনাল হাক্কি আন নুখালিফা বাইনা হুকমিল মুসীয়ি ওয়াল মুহসিন, ফিল-আজিলি ওয়াল-আজিল। অর্থাৎ হকের মধ্যেই আছে যে আমি মন্দকারী আর সৎকর্মশীলের ফয়সালা আলাদা করব, এখনও এবং পরেও। তাবারী পার্থক্যটা দুই জায়গাতেই রাখেন, এ দুনিয়ায় এবং পরের জীবনে। দুনিয়ার পার্থক্যটা কেমন, তা তিনি এ অংশে বলেননি। তাই এখানে এর সঙ্গে কিছু যোগ করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Clause and Its And",
          "bn": "উদ্দেশ্য আর শুরুর ওয়া"
        },
        "p": [
          {
            "en": "Wa li-tujza kullu nafsin: and so that every soul may be recompensed. Al-Qurtubi glosses the opening as wa li-kay tujza, and in order that it be recompensed, and the Muyassar uses the same wa li-kay. Both read the li as stating a purpose. Both also say when the recompense falls. Al-Qurtubi adds, after bima kasabat, ay fil-akhirah: that is, in the Hereafter. The Muyassar says the soul is recompensed in the Hereafter for what it earned, of good or of evil.",
            "bn": "ওয়া লিতুজযা কুল্লু নাফসিন: আর যাতে প্রত্যেক প্রাণকে প্রতিদান দেওয়া হয়। কুরতুবী শুরুর অংশের ব্যাখ্যা দেন ওয়া লিকাই তুজযা, অর্থাৎ যেন প্রতিদান দেওয়া হয়। মুয়াসসারও একই ওয়া লিকাই ব্যবহার করে। দুজনেই লি-কে উদ্দেশ্য বোঝানোর শব্দ হিসেবে পড়েন। প্রতিদান কখন, সেটাও দুজনে বলেন। কুরতুবী বিমা কাসাবাতের পরে যোগ করেন, আই ফিল-আখিরাহ: অর্থাৎ আখিরাতে। মুয়াসসার বলে, প্রত্যেক প্রাণ আখিরাতে প্রতিদান পাবে, ভালো হোক বা মন্দ, যা সে উপার্জন করেছে তার।"
          },
          {
            "en": "The clause opens with wa, and. A reader may ask what that and is joined to, since no other purpose is spoken before it. None of the commentaries fetched for this verse answers the question. They gloss the purpose and move on. As-Sa'di's paraphrase sets wisdom and the worship of Allah alone first and then says, after that He recompenses, but he offers this as a paraphrase, not as a note on the conjunction. This article leaves the grammar where the texts leave it.",
            "bn": "বাক্যাংশটি শুরু হয়েছে ওয়া দিয়ে, অর্থাৎ আর। পাঠকের মনে প্রশ্ন জাগতে পারে, এ আর কীসের সঙ্গে যুক্ত, কারণ আগে আর কোনো উদ্দেশ্যের কথা মুখে বলা হয়নি। এ আয়াতের যে তাফসীরগুলো হাতে আছে, তার কোনোটিই এর জবাব দেয়নি। সবাই উদ্দেশ্যটা ব্যাখ্যা করে সামনে এগিয়েছেন। সা'দীর ভাষ্যে আগে আসে হিকমত আর এক আল্লাহর ইবাদত, তারপর তিনি বলেন: এরপর তিনি প্রতিদান দেবেন। তবে এটা তাঁর ভাষ্য, ওয়া শব্দটি নিয়ে আলাদা মন্তব্য নয়। ব্যাকরণের প্রশ্নটা তাফসীরগুলো যেখানে রেখেছে, এ লেখাও সেখানেই রাখল।"
          }
        ]
      },
      {
        "h": {
          "en": "Each Paid What It Earned",
          "bn": "যার যা উপার্জন, তার তা-ই"
        },
        "p": [
          {
            "en": "Bima kasabat, for what it has earned. At-Tabari restates the clause as Allah rewarding every doer for what he did: the doer of good with good, al-muhsin bil-ihsan, and the wrongdoer with what he is due, bima huwa ahluh. The two halves are not worded alike. The good meets good, named as such, while the wrong is met with what it deserves. The Muyassar keeps the earning open on both sides: whatever a soul earned, of good or of evil.",
            "bn": "বিমা কাসাবাত: যা সে উপার্জন করেছে তার জন্য। তাবারী অংশটি নতুন করে বলেন এভাবে: আল্লাহ প্রত্যেক আমলকারীকে তার আমলের প্রতিদান দেবেন। সৎকর্মশীলকে দেবেন ভালো দিয়ে, আল-মুহসিনু বিল-ইহসান। আর মন্দকারীকে দেবেন তার যা প্রাপ্য, বিমা হুয়া আহলুহ। দুই অংশের শব্দ এক রকম নয়। ভালোর জবাব আসে নাম ধরে ভালো দিয়ে, আর মন্দের জবাব আসে তার প্রাপ্য দিয়ে। মুয়াসসার উপার্জনকে দুই দিকেই খোলা রাখে: প্রাণ যা উপার্জন করেছে, ভালো হোক বা মন্দ।"
          },
          {
            "en": "At-Tabari then rules out three things the recompense is not. It is not that We cheat the doer of good of the reward of his good deed; nor that We load onto him the crime of someone else and punish him for it; nor that We give the wrongdoer the reward of someone else's good and honour him for it. But it is that We recompense each for what his own hands earned. In his reading, nobody's deeds pass to anybody else's account.",
            "bn": "এরপর তাবারী তিনটি জিনিস বাদ দেন, প্রতিদান যা নয়। সৎকর্মশীলকে তার নেকির সওয়াব থেকে কম দেওয়া হবে না। অন্যের অপরাধ তার ঘাড়ে চাপিয়ে তাকে শাস্তিও দেওয়া হবে না। আবার মন্দকারীকে অন্যের নেকির সওয়াব দিয়ে সম্মানিতও করা হবে না। বরং প্রত্যেককে প্রতিদান দেওয়া হবে তার নিজের হাতের উপার্জন অনুযায়ী। তাবারীর পাঠে কারও আমল অন্য কারও হিসাবে চলে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "None of Them Wronged",
          "bn": "ওয়া হুম লা য়ুযলামূন"
        },
        "p": [
          {
            "en": "The verse closes on wa hum la yuzlamun, and they will not be wronged. At-Tabari and the Muyassar gloss it in nearly the same words: they will not be wronged in the recompense of their deeds, jaza'a a'malihim. Al-Qurtubi and Ibn Kathir, in the Arabic, repeat the words of the verse and add no gloss of their own. The verb is passive, and none of the texts fetched stops on that. The clause is read, in the two that explain it, as a statement about the recompense.",
            "bn": "আয়াতের শেষ কথা ওয়া হুম লা য়ুযলামূন: আর তাদের উপর জুলুম করা হবে না। তাবারী ও মুয়াসসার প্রায় একই শব্দে এর ব্যাখ্যা দেন: তাদের আমলের প্রতিদানে তাদের উপর জুলুম হবে না, জাযাআ আ'মালিহিম। কুরতুবী ও আরবী ইবন কাসীর আয়াতের শব্দগুলোই আবার উল্লেখ করেন, নিজেদের কোনো ব্যাখ্যা যোগ করেননি। ক্রিয়াটি কর্মবাচ্যে, তবে হাতে থাকা কোনো লেখা এ নিয়ে থামেনি। যে দুটি লেখা ব্যাখ্যা দিয়েছে, তাতে বাক্যটি প্রতিদান সম্পর্কে একটি ঘোষণা।"
          },
          {
            "en": "At-Tabari's three exclusions in the previous section are his own way of spelling out the same assurance: the doer of good is not cut short, and nobody carries a crime that is not his. Ma'arif al-Qur'an, closing its comment on this verse, says that the Day of Requital is necessary in order to wipe out wrong and injustice. Beyond what these texts say, this article adds no account of its own of how divine justice works. The verse's own words carry the assurance.",
            "bn": "আগের অংশে তাবারীর তিনটি না-বাচক কথা আসলে একই আশ্বাসকে খুলে বলার তাঁর নিজস্ব ধরন। সৎকর্মশীলকে কম দেওয়া হবে না, আর যে অপরাধ যার নয়, তা কেউ বহন করবে না। মাআরিফুল কুরআন এ আয়াতের আলোচনা শেষ করতে গিয়ে বলে, অন্যায় আর অবিচার মুছে ফেলার জন্যই প্রতিদান দিবস জরুরি। এসব লেখা যা বলেছে, তার বাইরে আল্লাহর ইনসাফ কীভাবে কাজ করে, সে বিষয়ে এ লেখা নিজের থেকে কোনো ব্যাখ্যা যোগ করছে না। আশ্বাসটা বহন করে আয়াতের নিজের শব্দই।"
          }
        ]
      },
      {
        "h": {
          "en": "A House of Deeds and Testing",
          "bn": "আমল ও পরীক্ষার ঘর"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an reads 45:21 and 45:22 as one argument. Its premise is that no one receives the full measure of reward or punishment for his deeds in this world. From that it concludes that there must be another world, the Hereafter and life after death, where people are recompensed fully, and it says that 45:22 complements this. The clause it quotes from our verse is wa li-tujza kullu nafsin bima kasabat wa hum la yuzlamun, the purpose and the assurance together.",
            "bn": "মাআরিফুল কুরআন ৪৫:২১ ও ৪৫:২২ দুটিকে একটি যুক্তি হিসেবে পড়ে। তার ভিত্তি হলো: দুনিয়ায় কেউ তার আমলের পুরো পুরস্কার বা পুরো শাস্তি পায় না। সেখান থেকে সে সিদ্ধান্ত টানে যে আরেকটি জগৎ থাকতেই হবে, আখিরাত ও মৃত্যুর পরের জীবন, যেখানে মানুষ পুরো প্রতিদান পাবে। আর বলে, ৪৫:২২ এ কথাকেই পূর্ণতা দেয়। আমাদের আয়াত থেকে সে উদ্ধৃত করে ওয়া লিতুজযা কুল্লু নাফসিম বিমা কাসাবাত ওয়া হুম লা য়ুযলামূন, অর্থাৎ উদ্দেশ্য ও আশ্বাস একসঙ্গে।"
          },
          {
            "en": "It then raises the obvious question, why people are not repaid in this world, and answers that repayment here would not fit the divine wisdom of creation: Allah made this world the domain of deeds and of test and trial, not the domain of requital. It ends, Allah knows best. Set beside at-Tabari, who places a difference between the wrongdoer and the doer of good both now and later, Ma'arif speaks of the full measure. These are two emphases, and neither text addresses the other.",
            "bn": "এরপর সে স্বাভাবিক প্রশ্নটা তোলে: মানুষকে দুনিয়াতেই প্রতিদান দেওয়া হয় না কেন? জবাব: তা সৃষ্টির ঐশী হিকমতের সঙ্গে মেলে না। আল্লাহ এ দুনিয়াকে বানিয়েছেন আমল আর পরীক্ষার ঘর, প্রতিদানের ঘর নয়। শেষে বলে, আল্লাহই ভালো জানেন। তাবারী মন্দকারী আর সৎকর্মশীলের পার্থক্য রাখেন এখনও এবং পরেও। মাআরিফ কথা বলে পুরো প্রতিদান নিয়ে। পাশাপাশি রাখলে দুটি আলাদা জোর দেওয়ার জায়গা দেখা যায়, আর কোনো লেখাই অন্যটির জবাব দেয়নি।"
          },
          {
            "en": "As-Sa'di adds a different question to the same span between creation and recompense. Allah created the heavens and the earth with wisdom and so that He alone be worshipped, he says; then, after that, He recompenses those He commanded to worship Him and on whom He bestowed favours, outward and inward. The question at the recompense, in his words: did they thank Allah and carry out what they were commanded, or did they deny, and so deserve the recompense of the ungrateful?",
            "bn": "সৃষ্টি আর প্রতিদানের মাঝের এ পরিসরে সা'দী আরেকটি প্রশ্ন যোগ করেন। তাঁর কথায়, আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হিকমত সহকারে, আর যাতে শুধু তাঁরই ইবাদত হয়। এরপর তিনি প্রতিদান দেবেন তাদের, যাদের তিনি ইবাদতের হুকুম দিয়েছেন আর প্রকাশ্য ও গোপন নিয়ামত দিয়েছেন। প্রতিদানের সময়ের প্রশ্নটা তাঁর ভাষায়: তারা কি আল্লাহর শুকরিয়া আদায় করেছে, যা হুকুম করা হয়েছিল তা পালন করেছে? নাকি অস্বীকার করেছে, আর তাই অকৃতজ্ঞের প্রতিদানের যোগ্য হয়েছে?"
          }
        ]
      },
      {
        "h": {
          "en": "No Verdict Handed to Readers",
          "bn": "পাঠকের হাতে কোনো রায় নেই"
        },
        "p": [
          {
            "en": "One thing needs saying plainly. The evildoers of 45:21, whose reckoning this verse answers, are a group the text describes: those who commit evil deeds and think they will be made equal with those who believe. The verse describes what the text describes and licenses nothing against any living person or community. The recompense it names belongs to Allah, on the terms He states. It hands no reader a verdict on a neighbour, a rival or a people, and nobody is named by it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। ৪৫:২১-এর যে মন্দকারীদের ভুল হিসাবের জবাব এ আয়াত দেয়, তারা লেখায় বর্ণিত একটি দল: যারা মন্দ কাজ করে আর ভাবে তাদেরকে ঈমানদারদের সমান করা হবে। আয়াতটি শুধু তা-ই বর্ণনা করে যা লেখায় আছে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। যে প্রতিদানের কথা এখানে, তা আল্লাহর হাতে, তাঁর বলা শর্তে। প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো জাতির ব্যাপারে কোনো রায় এ আয়াত পাঠকের হাতে তুলে দেয় না, এতে কারও নামও নেই।"
          },
          {
            "en": "None of the eight commentaries fetched for this verse attaches a hadith to it, so none is given here. Nor do they report an occasion of revelation for it; the verse is read in its place, after 45:21. The cross-references a reader might expect on creation in truth are not drawn here either, because none of these texts draws them on this verse. What remains is the verse itself, and the glosses the named commentators give.",
            "bn": "এ আয়াতের জন্য হাতে থাকা আটটি তাফসীরের কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয়নি, তাই এখানে কোনো হাদীস আনা হয়নি। নাযিলের কোনো উপলক্ষও তারা বর্ণনা করেনি। আয়াতটি পড়া হয়েছে তার জায়গায়, ৪৫:২১-এর পরে। হক সহকারে সৃষ্টি নিয়ে অন্য যে আয়াতগুলোর কথা পাঠকের মনে আসতে পারে, সেগুলোও এখানে টানা হয়নি, কারণ এসব তাফসীর এ আয়াতে সেগুলো টানেনি। বাকি থাকে আয়াতটি নিজে, আর নাম ধরে উল্লেখ করা তাফসীরকারদের ব্যাখ্যা।"
          },
          {
            "en": "The verse speaks of every soul, kullu nafsin, so the reader is inside it before anyone else. A practical way to hold it: at the end of a day, name one thing done that no one saw, and trust that it was not lost; name one thing done to someone else that you would not want to meet again, and set it right while it can still be set right. Then leave the accounts of others where the verse leaves them.",
            "bn": "আয়াতটি বলে প্রত্যেক প্রাণের কথা, কুল্লু নাফসিন। তাই অন্য কারও আগে পাঠক নিজেই এর ভেতরে আছেন। হাতে-কলমে ধরে রাখার একটা উপায়: দিনের শেষে এমন একটা কাজের নাম নিন যা কেউ দেখেনি, আর ভরসা রাখুন তা হারিয়ে যায়নি। এমন একটা কাজের নামও নিন যা কারও সঙ্গে করেছেন আর যার সঙ্গে আবার দেখা হোক চান না। শোধরানোর সুযোগ থাকতেই তা শুধরে নিন। আর অন্যদের হিসাব সেখানেই রেখে দিন, আয়াত যেখানে রেখেছে।"
          }
        ]
      }
    ]
  },
  "45:27": {
    "sections": [
      {
        "h": {
          "en": "Ten Words After the Answer",
          "bn": "জবাবের পরে দশটি শব্দ"
        },
        "p": [
          {
            "en": "Wa lillahi mulku as-samawati wal-ard, wa yawma taqumu as-sa'atu yawma'idhin yakhsaru al-mubtilun: and to Allah belongs the dominion of the heavens and the earth, and on the Day the Hour is established, that Day the people of falsehood will lose. Ten Arabic words in two clauses. The verse comes straight after 45:24 to 45:26, where the deniers say that only time destroys them and demand that their forefathers be brought back, and the reply is given that Allah gives life, gives death and gathers them for the Day of Resurrection.",
            "bn": "ওয়া লিল্লাহি মুলকুস সামাওয়াতি ওয়াল আরদ, ওয়া ইয়াওমা তাকূমুস সা'আতু ইয়াওমাইযিন ইয়াখসারুল মুবতিলূন: আকাশ ও জমিনের রাজত্ব আল্লাহরই, আর যেদিন কিয়ামত কায়েম হবে, সেদিন বাতিলপন্থীরা ক্ষতিগ্রস্ত হবে। আরবিতে মাত্র দশটি শব্দ, দুটি বাক্যাংশে ভাগ করা। আয়াতটি আসে ৪৫:২৪ থেকে ৪৫:২৬ আয়াতের ঠিক পরে। সেখানে অস্বীকারকারীরা বলে, কাল ছাড়া আর কিছু আমাদের ধ্বংস করে না। তারা দাবি তোলে, আমাদের বাপদাদাদের ফিরিয়ে আনো। জবাবে বলা হয়, আল্লাহই জীবন দেন, তিনিই মৃত্যু দেন, আর তিনিই তোমাদের কিয়ামতের দিনে একত্র করবেন।"
          },
          {
            "en": "The verse adds to that reply rather than repeating it. Ibn Kathir joins its two halves with a single phrase. Allah tells us, he writes, that He is the owner of the heavens and the earth and the one who rules over them in this world and in the Hereafter, and for this reason He said: and on the Day the Hour is established. He does not spell the link out any further. In his reading the dominion comes first, and the Day is introduced as following from it.",
            "bn": "আয়াতটি আগের জবাবের পুনরাবৃত্তি করে না, তার সঙ্গে নতুন কথা জোড়ে। ইবন কাসীর এর দুই অংশকে একটিমাত্র কথায় বেঁধে দেন। তিনি লেখেন, আল্লাহ জানাচ্ছেন যে তিনিই আকাশ ও জমিনের মালিক, দুনিয়া ও আখিরাতে দুটোরই শাসক। আর এ কারণেই তিনি বলেছেন: যেদিন কিয়ামত কায়েম হবে। সম্পর্কটা তিনি এর বেশি খুলে বলেন না। তাঁর পাঠে রাজত্বের কথা আসে আগে, আর সেই দিনটিকে আনা হয় তারই ফল হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sovereignty Turned Into Argument",
          "bn": "রাজত্ব থেকে যুক্তি"
        },
        "p": [
          {
            "en": "At-Tabari renders mulk as sultan, sovereign authority over the seven heavens and the earth, and at once turns it into an argument. The authority is His, he says, and not that of what you claim as His partner and worship besides Him. The gods and rivals you call on are themselves inside His dominion, and His rule runs over them. How then can something in that position be His partner? And how can you worship it, and leave the worship of Him who owns you and owns what you worship as well?",
            "bn": "তাবারী মুলক শব্দের অর্থ করেন সুলতান, অর্থাৎ সাতটি আসমান ও জমিনের উপর সার্বভৌম কর্তৃত্ব। তারপর সঙ্গে সঙ্গেই সেটাকে যুক্তিতে পরিণত করেন। তিনি বলেন, এ কর্তৃত্ব আল্লাহর, তোমরা যাকে তাঁর শরিক বলে দাবি করো আর তাঁকে ছেড়ে যার ইবাদত করো, তার নয়। যেসব উপাস্য আর প্রতিদ্বন্দ্বীকে তোমরা ডাকো, তারা নিজেরাই তাঁর রাজত্বের ভেতরে, তাদের উপরও তাঁর হুকুম চলে। তাহলে এমন অবস্থানের কেউ কীভাবে তাঁর শরিক হয়? আর যিনি তোমাদের মালিক, তোমাদের উপাস্যদেরও মালিক, তাঁর ইবাদত ছেড়ে তোমরা কীভাবে ওদের ইবাদত করো?"
          },
          {
            "en": "The others keep to description. Al-Qurtubi qualifies the dominion with two words: in creation and in ownership, khalqan wa mulkan. The Muyassar adds a third: the seven heavens and the earth are His in creation, ownership and servitude, 'ubudiyya. Ibn Kathir, as quoted above, has Him as owner and as ruler in both worlds. As-Sa'di speaks of the breadth of His dominion and of His being alone in disposing of affairs and managing them at all times.",
            "bn": "বাকিরা বর্ণনার মধ্যেই থাকেন। কুরতুবী রাজত্বের সঙ্গে দুটি শব্দ জোড়েন: খালকান ওয়া মুলকান, সৃষ্টি হিসেবে আর মালিকানা হিসেবে। মুয়াসসার যোগ করে তৃতীয়টি। তার ভাষায় সাতটি আসমান ও জমিন আল্লাহর সৃষ্টি, তাঁর মালিকানা, আর তাঁর দাসত্বে বাঁধা, যাকে বলা হয় উবূদিয়্যা। ইবন কাসীর, আগেই যেমন এসেছে, তাঁকে মালিক ও দুই জগতের শাসক বলেন। সা'দী বলেন তাঁর রাজত্বের ব্যাপকতার কথা, আর সব সময় সব কিছুর পরিচালনা ও ব্যবস্থাপনায় তিনি যে একা, সে কথা।"
          },
          {
            "en": "These are differences of emphasis, and they are worth keeping apart. At-Tabari reads the clause as a refutation aimed at those who give Allah partners. Al-Qurtubi and the Muyassar list the ways in which things belong to Him. Ibn Kathir and as-Sa'di stress rule across time, Ibn Kathir carrying it explicitly into the Hereafter. None of the fetched texts ranks one reading over another, and this article does not rank them either.",
            "bn": "পার্থক্যগুলো জোরের জায়গায়, আর এগুলো আলাদা করে রাখাই ভালো। তাবারী বাক্যটিকে পড়েন আল্লাহর সঙ্গে শরিককারীদের বিরুদ্ধে খণ্ডন হিসেবে। কুরতুবী ও মুয়াসসার গুনে দেখান কোন কোন দিক থেকে সবকিছু তাঁর। ইবন কাসীর ও সা'দী জোর দেন সময়জুড়ে তাঁর শাসনের উপর, আর ইবন কাসীর সেটাকে স্পষ্ট করে আখিরাত পর্যন্ত টেনে নেন। সংগৃহীত কোনো তাফসীর একটি পাঠকে অন্যটির উপরে রাখে না। এ লেখাও রাখছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Named Twice",
          "bn": "দুবার উচ্চারিত দিন"
        },
        "p": [
          {
            "en": "The Arabic names the day twice: wa yawma taqumu as-sa'atu, and on the Day the Hour is established, then yawma'idhin, on that Day. Al-Qurtubi explains the structure. The first yawm is in the accusative, governed by yakhsaru, will lose, and yawma'idhin is either a repetition for emphasis or a substitute for the first, a badal. He then records a second view under the words it was said: that the sense is and His is the dominion on the Day the Hour is established, with yakhsaru governing yawma'idhin.",
            "bn": "আরবিতে দিনটির নাম আসে দুবার। প্রথমে ওয়া ইয়াওমা তাকূমুস সা'আহ, যেদিন কিয়ামত কায়েম হবে। তারপর ইয়াওমাইযিন, সেদিন। কুরতুবী গঠনটা ব্যাখ্যা করেন। তাঁর মতে প্রথম ইয়াওম শব্দটি মানসূব, তাকে নিয়ন্ত্রণ করছে ইয়াখসারু, অর্থাৎ ক্ষতিগ্রস্ত হবে। আর ইয়াওমাইযিন হয় জোর দেওয়ার জন্য পুনরাবৃত্তি, নয়তো প্রথমটির বদল। এরপর 'বলা হয়েছে' কথাটি দিয়ে তিনি দ্বিতীয় একটি মত আনেন। সেই মতে অর্থ দাঁড়ায়: যেদিন কিয়ামত কায়েম হবে, সেদিনের রাজত্বও তাঁরই। তখন ইয়াখসারু নিয়ন্ত্রণ করে শুধু ইয়াওমাইযিনকে।"
          },
          {
            "en": "On the first construction the verse makes two statements, one about dominion and one about loss, and the doubled day presses the second home. On the second, the Day itself falls within what belongs to Allah, and the loss is then announced for it. Al-Qurtubi gives the first as his own analysis and reports the second without endorsing or rejecting it. Both are kept here as he gives them.",
            "bn": "প্রথম গঠন অনুযায়ী আয়াতে দুটি আলাদা কথা: একটি রাজত্বের, একটি ক্ষতির। আর দুবার বলা দিনটি দ্বিতীয় কথাটিকে আরও জোরালো করে। দ্বিতীয় গঠন অনুযায়ী সেই দিনটিও আল্লাহর রাজত্বের অংশ, তারপর সেদিনের ক্ষতির ঘোষণা আসে। কুরতুবী প্রথমটিকে নিজের বিশ্লেষণ হিসেবে দেন, আর দ্বিতীয়টি উল্লেখ করেন গ্রহণ বা খণ্ডন না করে। দুটোকেই এখানে তাঁর দেওয়া রূপেই রাখা হলো।"
          },
          {
            "en": "What the Hour's being established involves is described in similar terms. At-Tabari: the Hour comes in which Allah raises the dead from their graves and gathers them for the standing of presentation, mawqif al-'ard. The Muyassar: the dead are raised from their graves and brought to account. As-Sa'di: He gathers all creatures for the standing of the Resurrection. Ibn Kathir names it simply the Day of Resurrection.",
            "bn": "কিয়ামত কায়েম হওয়ার মানে কী, সে বর্ণনা তাফসীরগুলোতে প্রায় একই রকম। তাবারীর ভাষায়, সেই সময় আসবে যখন আল্লাহ মৃতদের কবর থেকে জীবিত করে উঠাবেন আর হাজির করার জায়গায়, মাওকিফুল আরদে, একত্র করবেন। মুয়াসসার বলে, মৃতরা কবর থেকে উঠবে আর তাদের হিসাব নেওয়া হবে। সা'দীর ভাষায়, তিনি সব সৃষ্টিকে কিয়ামতের অবস্থানস্থলে জড়ো করবেন। ইবন কাসীর একে সোজাসুজি কিয়ামতের দিন বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Portraits of the Mubtilun",
          "bn": "মুবতিলূনের চার ছবি"
        },
        "p": [
          {
            "en": "Who are al-mubtilun? Ibn Kathir answers in one line: they are those who disbelieve in Allah and reject what He sent down to His messengers of clear signs and evident proofs. His English abridgement keeps the same definition, rendering the word as the followers of falsehood. The Muyassar uses almost the same words, with one change: what is rejected was sent down to His Messenger, in the singular. On this reading the mubtil is defined by what he refuses: proofs that were plain and were put in front of him.",
            "bn": "আল-মুবতিলূন কারা? ইবন কাসীর এক লাইনে উত্তর দেন: যারা আল্লাহকে অস্বীকার করে, আর তিনি তাঁর রাসূলদের কাছে যে সুস্পষ্ট নিদর্শন ও পরিষ্কার প্রমাণ নাযিল করেছেন তা প্রত্যাখ্যান করে। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণেও একই সংজ্ঞা, সেখানে শব্দটির অনুবাদ বাতিলের অনুসারী। মুয়াসসারও প্রায় একই কথা বলে, শুধু একটি জায়গায় বদল: যা প্রত্যাখ্যাত হয়েছে তা নাযিল হয়েছে তাঁর রাসূলের কাছে, একবচনে। এ পাঠে মুবতিলের পরিচয় তার প্রত্যাখ্যান দিয়ে। প্রমাণ ছিল স্পষ্ট, তার সামনেই রাখা হয়েছিল, তবু সে ফিরিয়ে দিয়েছে।"
          },
          {
            "en": "At-Tabari defines the word by speech and worship. The mubtilun are those who dealt in falsehood in this world in their words, in their claim that Allah has a partner, and in their worship of gods besides Him. This ties the end of the verse to its beginning in his own reading, where the dominion clause was already an argument against such partners. For at-Tabari the falsehood is specific: the false word spoken about Allah, and the worship that follows from it.",
            "bn": "তাবারী শব্দটির সংজ্ঞা দেন কথা আর ইবাদত দিয়ে। মুবতিলূন তারা, যারা দুনিয়ায় বাতিলের কারবার করেছে নিজেদের কথায়, আল্লাহর শরিক আছে বলে দাবি করে, আর তাঁকে ছেড়ে অন্য উপাস্যদের ইবাদত করে। তাবারীর নিজের পাঠে এভাবে আয়াতের শেষ অংশ তার শুরুর সঙ্গে জুড়ে যায়, কারণ রাজত্বের বাক্যটিকেই তিনি আগে এমন শরিকদের বিরুদ্ধে যুক্তি হিসেবে পড়েছেন। তাঁর কাছে বাতিলটা নির্দিষ্ট: আল্লাহ সম্পর্কে বলা মিথ্যা কথা, আর সেখান থেকে জন্ম নেওয়া ইবাদত।"
          },
          {
            "en": "As-Sa'di defines them by purpose and by result. They are those who came with falsehood, al-batil, in order to refute the truth with it, and whose deeds were batila, void, because those deeds were attached to falsehood, so on the Day of Resurrection they batalat, came to nothing. Al-Baghawi is briefest: the disbelievers who are ashab al-abatil, people of falsehoods. So four portraits: the rejecter of proofs, the speaker of a false claim about Allah, whoever argues against the truth, and the holder of falsehoods. The texts set them side by side, and so does this article.",
            "bn": "সা'দী সংজ্ঞা দেন উদ্দেশ্য ও পরিণতি দিয়ে। তারা বাতিল নিয়ে এসেছিল সত্যকে খণ্ডন করার জন্য। তাদের আমলও ছিল বাতিলা, অর্থাৎ অসার, কারণ সেগুলোর ভিত্তি ছিল বাতিলের উপর। তাই কিয়ামতের দিন সেগুলো বাতালাত, অর্থাৎ নিষ্ফল হয়ে গেল। বাগাভী সবচেয়ে সংক্ষেপে বলেন: কাফেররা, যারা আসহাবুল আবাতীল, বাতিলের ধারক। তাহলে চারটি ছবি পাওয়া গেল: প্রমাণ প্রত্যাখ্যানকারী, আল্লাহ সম্পর্কে মিথ্যা দাবির বক্তা, সত্যের বিরুদ্ধে তর্ককারী, আর বাতিলের ধারক। তাফসীরগুলো এদের পাশাপাশি রাখে, এ লেখাও তাই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Places Exchanged, Deeds Undone",
          "bn": "বদলে যাওয়া ঠিকানা, নিষ্ফল আমল"
        },
        "p": [
          {
            "en": "What is lost? At-Tabari explains yakhsaru with yughbanu: they are cheated, as a trader is cheated in a bargain. The cheating lies in this, he says: those who held to the truth, al-muhiqqun, win the mubtilun's places in Paradise, and the mubtilun are given in exchange places in the Fire that had been meant for the people of truth. Their own places in Paradise are given to others. That, at-Tabari ends, is the manifest loss.",
            "bn": "ক্ষতিটা কী? তাবারী ইয়াখসারু শব্দের ব্যাখ্যা করেন ইউগবানু দিয়ে, অর্থাৎ লেনদেনে ঠকে যাওয়া। তিনি বলেন, ঠকাটা এখানে: যারা সত্যের উপর ছিল, সেই মুহিক্কূন জান্নাতে মুবতিলূনের ঠিকানাগুলো জিতে নেয়। আর বদলে মুবতিলূনকে দেওয়া হয় জাহান্নামের সেই ঠিকানাগুলো, যা রাখা ছিল সত্যপন্থীদের জন্য। জান্নাতে তাদের নিজেদের জায়গা চলে যায় অন্যদের হাতে। তাবারী শেষ করেন এই বলে: এটাই সুস্পষ্ট ক্ষতি।"
          },
          {
            "en": "Al-Qurtubi reaches the same object by grammar. The object of yakhsaru is left unstated, he notes, and the meaning is that they lose their places in Paradise. So two commentators, working by different routes, name the same thing as what is lost: a place that was there to be had. Neither text describes the loss as a mere absence of reward; both describe something that could have been theirs and passes to others or is forfeited.",
            "bn": "কুরতুবী একই জিনিসে পৌঁছান ব্যাকরণের পথে। তিনি দেখান, ইয়াখসারু ক্রিয়ার কর্ম উহ্য রাখা হয়েছে, আর অর্থ হলো: তারা জান্নাতে নিজেদের ঠিকানা হারাবে। ফলে দুই মুফাসসির দুই ভিন্ন পথে এসে একই জিনিসকে হারানো বলে চিহ্নিত করেন: এমন এক ঠিকানা, যা পাওয়ার সুযোগ ছিল। দুজনের কেউই ক্ষতিটাকে শুধু প্রতিদান না পাওয়া বলে বর্ণনা করেন না। তাঁদের বর্ণনায় এমন কিছু, যা তাদের হতে পারত, অথচ হাতছাড়া হয়ে যায় বা অন্যের কাছে চলে যায়।"
          },
          {
            "en": "As-Sa'di describes the loss differently. On the Day of Resurrection, the day on which realities become clear, their deeds came to nothing and faded away from them; the reward escaped them and they obtained painful punishment. Here what is lost is the work itself, which had no foundation. Al-Baghawi puts it in terms of disclosure: on that Day their loss becomes apparent, in that they end up in the Fire. A forfeited place, a voided work, a loss made visible: the differences stand as differences.",
            "bn": "সা'দী ক্ষতিটাকে বর্ণনা করেন অন্যভাবে। কিয়ামতের দিন, যেদিন সব বাস্তবতা স্পষ্ট হয়ে যায়, তাদের আমল নিষ্ফল হয়ে মিলিয়ে গেল। সওয়াব তাদের হাতছাড়া হলো, আর তারা পেল যন্ত্রণাদায়ক শাস্তি। এখানে হারানো জিনিস হলো আমল নিজেই, যার কোনো ভিত্তি ছিল না। বাগাভী কথাটা বলেন প্রকাশের ভাষায়: সেদিন তাদের ক্ষতি প্রকাশ পাবে, কারণ তারা গিয়ে পৌঁছাবে জাহান্নামে। হাতছাড়া ঠিকানা, নিষ্ফল আমল, প্রকাশ পাওয়া ক্ষতি। পার্থক্যগুলো পার্থক্য হিসেবেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Put to a Jester",
          "bn": "রসিকতাকারীর প্রতি এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a report he takes from Ibn Abi Hatim. Sufyan ath-Thawri came to Madinah and heard al-Ma'afiri saying some of the things that people are made to laugh at. He said to him: O shaykh, do you not know that Allah has a day on which the people of falsehood will lose? The narrator adds that it remained recognizable in al-Ma'afiri until he went to meet Allah, Mighty and Majestic. The text does not say exactly what remained, whether the effect of the words or a changed manner.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন ইবন আবী হাতিম থেকে নেওয়া একটি বর্ণনা দিয়ে। সুফিয়ান সাওরী মদীনায় এলেন। সেখানে শুনলেন, মাআফিরী এমন কিছু কথা বলছেন যা দিয়ে লোকদের হাসানো হয়। তিনি তাঁকে বললেন: হে শায়খ, আপনি কি জানেন না, আল্লাহর এমন এক দিন আছে যেদিন বাতিলপন্থীরা ক্ষতিগ্রস্ত হবে? বর্ণনাকারী যোগ করেন, মহান আল্লাহর সঙ্গে মিলিত হওয়া পর্যন্ত মাআফিরীর মধ্যে তা চেনা যেত। ঠিক কী চেনা যেত, কথাটার প্রভাব নাকি বদলে যাওয়া আচরণ, পাঠে তা বলা নেই।"
          },
          {
            "en": "Two things should be clear about this report. It is about later figures, not a saying of the Prophet ﷺ, and Ibn Kathir gives it with only the words Ibn Abi Hatim mentioned it, with no chain quoted and no grading. His English abridgement omits it. It is told here exactly as far as that text goes. As for hadith, none of the commentaries fetched for this verse attaches a hadith to it, so none is cited here.",
            "bn": "এ বর্ণনা সম্পর্কে দুটি কথা পরিষ্কার থাকা দরকার। এটি পরবর্তী যুগের মানুষদের ঘটনা, নবী ﷺ-এর বাণী নয়। ইবন কাসীর একে এনেছেন শুধু এই কথা বলে যে ইবন আবী হাতিম এটি উল্লেখ করেছেন। কোনো সনদ উদ্ধৃত করেননি, কোনো মানও দেননি। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণে বর্ণনাটি নেই। এখানে তা বলা হলো ঠিক ততটুকুই, যতটুকু ওই পাঠে আছে। আর হাদীসের কথা বললে, এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Warrant",
          "bn": "ছবি আঁকা, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "The mubtilun are a condemned group, and this needs saying plainly. The verse describes what the texts describe: those who, in the commentators' words, rejected the proofs sent to the messengers, claimed partners for Allah, argued against the truth or held to falsehoods, and the loss that meets them on the Day of Resurrection. It licenses nothing against any living person or community. It hands no reader a list of names, and this article attaches none to it.",
            "bn": "মুবতিলূন এক নিন্দিত দল, আর কথাটা সোজাসুজি বলা দরকার। তাফসীরগুলো যা বর্ণনা করে, আয়াতও তা-ই বর্ণনা করে: মুফাসসিরদের ভাষায় যারা রাসূলদের কাছে পাঠানো প্রমাণ প্রত্যাখ্যান করেছে, আল্লাহর শরিক দাবি করেছে, সত্যের বিরুদ্ধে তর্ক করেছে বা বাতিল আঁকড়ে থেকেছে, আর কিয়ামতের দিন তাদের যে ক্ষতির মুখে পড়তে হবে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কোনো পাঠকের হাতে এ আয়াত নামের তালিকা তুলে দেয় না, আর এ লেখাও তাতে কোনো নাম জুড়ে দিচ্ছে না।"
          },
          {
            "en": "Notice also where the verse places the loss: on the Day the Hour is established, and in the dominion of Allah. The judgement belongs to the one who owns the heavens and the earth, and the time of it is that Day. Nothing in the fetched commentaries turns the verse into a warrant for one person to declare another lost now. The surah goes on to describe that Day further in the verses that follow, which are left to their own pages.",
            "bn": "এটাও খেয়াল করুন, আয়াত ক্ষতিটাকে কোথায় রাখে: যেদিন কিয়ামত কায়েম হবে সেদিনে, আর আল্লাহর রাজত্বের ভেতরে। ফয়সালা তাঁর, যিনি আকাশ ও জমিনের মালিক, আর তার সময় সেই দিন। সংগৃহীত কোনো তাফসীর এ আয়াতকে এমন ছাড়পত্র বানায় না, যা দিয়ে একজন মানুষ আরেকজনকে এখনই ক্ষতিগ্রস্ত ঘোষণা করতে পারে। সূরাটি পরের আয়াতগুলোতে সেই দিনের আরও বর্ণনা দেয়। সেগুলো তাদের নিজেদের পাতার জন্য রাখা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing One's Own Claims",
          "bn": "নিজের দাবির হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "Turned inward, the verse asks a reader to weigh what he stands on. Each of the four portraits has a quieter form in an ordinary life: a clear reminder heard and set aside, a claim repeated because it is convenient rather than true, an argument pressed against something one knows to be right, a falsehood held because letting go of it would cost something. The commentators speak of the deniers; the reader who wants to benefit asks where his own words have drifted the same way.",
            "bn": "নিজের দিকে ফেরালে আয়াতটি পাঠককে জিজ্ঞেস করে, সে কিসের উপর দাঁড়িয়ে আছে। চারটি ছবির প্রতিটিরই সাধারণ জীবনে এক নিচু স্বরের রূপ আছে। স্পষ্ট উপদেশ শুনেও পাশে সরিয়ে রাখা। সত্য বলে নয়, সুবিধাজনক বলে কোনো দাবি বারবার বলা। যা সঠিক বলে জানি, তার বিরুদ্ধেই তর্ক চালিয়ে যাওয়া। ছাড়তে গেলে কিছু হারাতে হবে বলে কোনো মিথ্যা আঁকড়ে থাকা। মুফাসসিররা কথা বলেছেন অস্বীকারকারীদের নিয়ে। যে পাঠক উপকৃত হতে চায়, সে খোঁজে তার নিজের কথা কোথায় একই দিকে সরে গেছে।"
          },
          {
            "en": "The verse also places that weighing inside a larger fact. The heavens and the earth already belong to Allah; nothing a person owns or argues for sits outside that. Sufyan ath-Thawri's question to al-Ma'afiri, as Ibn Kathir reports it, used this verse to stop a man in the middle of his talk. A reader can put the same question to himself before he speaks, jokes or defends a position: will this still stand on the Day when whatever rests on falsehood is lost?",
            "bn": "আয়াতটি এ যাচাইকে আরও বড় এক সত্যের ভেতরে রাখে। আকাশ ও জমিন এখনই আল্লাহর। মানুষ যা কিছুর মালিক, যা নিয়ে তর্ক করে, তার কিছুই এর বাইরে নয়। ইবন কাসীরের বর্ণনা অনুযায়ী সুফিয়ান সাওরী মাআফিরীকে কথার মাঝখানে থামাতে এ আয়াতকেই কাজে লাগিয়েছিলেন। পাঠকও কথা বলার আগে, রসিকতা করার আগে, কোনো মতের পক্ষে দাঁড়ানোর আগে নিজেকে একই প্রশ্ন করতে পারেন: যেদিন মিথ্যার উপর দাঁড়ানো সবকিছু হারিয়ে যাবে, সেদিন কি এটা টিকে থাকবে?"
          }
        ]
      }
    ]
  },
  "45:32": {
    "sections": [
      {
        "h": {
          "en": "Their Old Words Returned",
          "bn": "পুরোনো কথা ফিরে এল"
        },
        "p": [
          {
            "en": "Wa idha qila inna wa'da Allahi haqqun wa as-sa'atu la rayba fiha, qultum ma nadri ma as-sa'atu, in nazunnu illa zannan wa ma nahnu bi-mustayqinin: and when it was said, the promise of Allah is true and the Hour, there is no doubt about it, you said, we do not know what the Hour is; we only suppose, and we are not certain. 22 Arabic words. The verse does not open a new scene. It continues the address that 45:31 begins, spoken to those who disbelieved, after the believers of 45:30 have been admitted into mercy.",
            "bn": "ওয়া ইযা কীলা ইন্না ওয়া'দাল্লাহি হাক্কুন ওয়াস-সা'আতু লা রাইবা ফীহা, কুলতুম মা নাদরী মাস-সা'আহ, ইন নাযুন্নু ইল্লা যান্নান ওয়া মা নাহনু বিমুসতাইকিনীন: আর যখন বলা হয়েছিল, আল্লাহর প্রতিশ্রুতি সত্য, আর কিয়ামত, তাতে কোনো সন্দেহ নেই, তোমরা বলেছিলে, কিয়ামত কী আমরা জানি না, আমরা শুধু আন্দাজ করি, আর আমরা নিশ্চিত নই। আরবিতে মোট ২২টি শব্দ। আয়াতটি নতুন কোনো দৃশ্য খোলে না। ৪৫:৩১ আয়াতে কাফিরদের উদ্দেশে যে সম্বোধন শুরু হয়েছে, এটি তারই ধারাবাহিকতা। তার আগে ৪৫:৩০ আয়াতে মুমিনরা রহমতের ভেতরে প্রবেশ করেছেন।"
          },
          {
            "en": "At-Tabari frames it this way: wa yuqalu lahum hina'idhin, and it will be said to them at that time, followed by the verse. As-Sa'di places it in the same chain of reproach: yuwabbakhuna aydan, they are rebuked also, with these words, and he adds that they had said what they said munkirina, denying it. The abridged English Ibn Kathir says, on 45:31, that they will be admonished and criticised with the question put there. So the sentence is a reminder delivered on the Day itself: a quotation of what they used to say, set beside what they now see.",
            "bn": "তাবারী প্রসঙ্গটা বেঁধে দেন এভাবে: ওয়া য়ুকালু লাহুম হীনাইযিন, তখন তাদের বলা হবে। তারপর আসে আয়াতটি। সা'দী একে তিরস্কারের একই ধারায় রাখেন: য়ুওয়াব্বাখূনা আইদান, এ কথা দিয়েও তাদের ভর্ৎসনা করা হবে। তিনি যোগ করেন, তারা কথাগুলো বলেছিল মুনকিরীনা হয়ে, মানে অস্বীকার করে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য ৪৫:৩১ আয়াতের আলোচনায় বলে, সেখানকার প্রশ্ন দিয়ে তাদের তিরস্কার আর সমালোচনা করা হবে। তাহলে বাক্যটি সেই দিনেই দেওয়া এক স্মরণ। দুনিয়ায় তারা যা বলত, তা এখন তাদের চোখের সামনের দৃশ্যের পাশে রেখে শোনানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Spoke and What They Said",
          "bn": "কে বলেছিল, কী বলেছিল"
        },
        "p": [
          {
            "en": "Who said it to them? The passive qila, it was said, leaves the speaker unnamed. Ibn Kathir supplies a speaker: idha qala lakum al-mu'minuna dhalika, when the believers said that to you, and the abridged English repeats it. At-Tabari and the Muyassar keep the address general, idha qila lakum, when it was said to you, without naming who spoke. Either way the content is the same pair of claims: that Allah's promise is true, and that there is no doubt about the Hour.",
            "bn": "কথাটা তাদের কে বলেছিল? কীলা, বলা হয়েছিল, এই কর্মবাচ্য ক্রিয়া বক্তার নাম বলে না। ইবন কাসীর বক্তার পরিচয় দেন: ইযা কালা লাকুমুল মুমিনূনা যালিকা, যখন মুমিনরা তোমাদের এ কথা বলত। তাঁর সংক্ষিপ্ত ইংরেজি ভাষ্যেও একই কথা আছে। তাবারী আর মুয়াসসার সম্বোধনটা সাধারণ রাখেন, ইযা কীলা লাকুম, যখন তোমাদের বলা হতো। কে বলেছিল, তা তাঁরা উল্লেখ করেন না। যেভাবেই পড়া হোক, কথা দুটোই: আল্লাহর প্রতিশ্রুতি সত্য, আর কিয়ামতে কোনো সন্দেহ নেই।"
          },
          {
            "en": "At-Tabari unpacks both. The promise is that which Allah made to His servants, that He would give them life after their death and raise them from their graves. The Hour is that which He told them He would establish to gather them, for the reckoning, for reward on obedience and for punishment on disobedience. He adds that the ha in fiha refers back to the Hour. Al-Qurtubi glosses the promise in two words, al-ba'thu ka'in, the resurrection will come to be. The Muyassar names it as Allah's promise to raise people from their graves.",
            "bn": "তাবারী দুটোই খুলে বলেন। প্রতিশ্রুতি হলো বান্দাদের প্রতি আল্লাহর সেই অঙ্গীকার: মৃত্যুর পর তিনি তাদের জীবিত করবেন, কবর থেকে ওঠাবেন। আর কিয়ামত সেই সময়, যা তিনি কায়েম করবেন বলে জানিয়েছেন, যাতে সবাইকে একত্র করা হয় হিসাবের জন্য, আনুগত্যের পুরস্কার আর নাফরমানির শাস্তির জন্য। তিনি এটাও বলেন, ফীহা শব্দের 'হা' সর্বনাম কিয়ামতের দিকেই ফিরেছে। কুরতুবী প্রতিশ্রুতির ব্যাখ্যা দেন দুটি শব্দে: আল-বা'সু কাইন, পুনরুত্থান ঘটবেই। মুয়াসসার বলে, এ হলো মানুষকে কবর থেকে ওঠানোর বিষয়ে আল্লাহর প্রতিশ্রুতি।"
          },
          {
            "en": "At-Tabari then states what the announcement was meant to do. Its meaning, he says, is this: the Hour, there is no doubt about its coming, so fear Allah, believe in Allah and His Messenger, and work for what will save you from Allah's punishment in it. On his reading the announcement was never a bare fact to be filed away. It carried a summons to act, and that is what makes the reply so stark: the message called for preparation, and the answer was to profess not knowing.",
            "bn": "এরপর তাবারী বলেন, ঘোষণাটার উদ্দেশ্য কী ছিল। তাঁর ভাষায় কথাটার মর্ম এই: কিয়ামত আসবে, তাতে কোনো সন্দেহ নেই। কাজেই আল্লাহকে ভয় করো, আল্লাহ আর তাঁর রাসূলের উপর ঈমান আনো, আর এমন আমল করো যা সেদিন আল্লাহর আযাব থেকে তোমাদের বাঁচাবে। তাঁর পাঠে ঘোষণাটা নিছক কোনো তথ্য ছিল না, যা শুনে তুলে রাখা যায়। এর ভেতরে ছিল কাজের ডাক। জবাবটা এত কঠিন শোনায় সে কারণেই। বার্তা ডেকেছিল প্রস্তুতির দিকে, আর উত্তরে তারা বলেছিল, আমরা জানি না।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'atu or As-Sa'ata",
          "bn": "আস-সা'আতু, না আস-সা'আতা"
        },
        "p": [
          {
            "en": "The phrase wa as-sa'atu la rayba fiha is read two ways, and three of the commentators report it. At-Tabari says that the general body of the readers of Medina and Basra, with some readers of Kufa, read as-sa'atu in the nominative, as the start of a new clause. The general body of the readers of Kufa read as-sa'ata in the accusative, joining it to inna wa'da Allahi haqqun. Al-Qurtubi and al-Baghawi name the accusative reading as Hamza's, joined to the promise, and say that the rest read the nominative, as the start of a clause.",
            "bn": "ওয়াস-সা'আতু লা রাইবা ফীহা অংশটি দুইভাবে পড়া হয়, আর তাফসীরকারদের তিনজন তা উল্লেখ করেছেন। তাবারী বলেন, মদীনা ও বসরার সাধারণ কারীরা এবং কুফার কিছু কারী আস-সা'আতু পড়েন পেশ দিয়ে, নতুন বাক্যের শুরু হিসেবে। আর কুফার সাধারণ কারীরা পড়েন আস-সা'আতা, যবর দিয়ে, ইন্না ওয়া'দাল্লাহি হাক্কুন অংশের সঙ্গে জুড়ে। কুরতুবী আর বাগাভী যবরের কিরাআতটি হামযার বলে উল্লেখ করেন, যেখানে শব্দটি প্রতিশ্রুতির সঙ্গে জোড়া। তাঁরা বলেন, বাকিরা পড়েন পেশ দিয়ে, নতুন বাক্যের শুরু হিসেবে।"
          },
          {
            "en": "Al-Qurtubi adds a second account of the nominative: it may be joined to the grammatical position of inna wa'da Allahi. He rules out joining it to the pronoun held within the verbal noun, because that pronoun has not been reinforced, and a nominative pronoun is joined to without reinforcement only in poetry. At-Tabari closes the question with his own verdict: both are widespread readings in the cities, sound in their Arabic and close in meaning, so whichever of them the reciter reads, he is right. In either reading the Hour belongs to what they were told.",
            "bn": "পেশের কিরাআতের আরেকটি ব্যাখ্যাও কুরতুবী দেন: শব্দটিকে ইন্না ওয়া'দাল্লাহি অংশের ব্যাকরণগত অবস্থানের সঙ্গে জোড়া ধরা যায়। তবে মাসদারের ভেতরে থাকা সর্বনামের সঙ্গে জোড়া ধরাকে তিনি ঠিক মনে করেন না। কারণ সে সর্বনামকে জোরদার করা হয়নি, আর জোরদার না করে কর্তৃকারকের সর্বনামের সঙ্গে কিছু জোড়া হয় কেবল কবিতায়। তাবারী প্রশ্নটার নিষ্পত্তি করেন নিজের রায় দিয়ে: দুটোই বিভিন্ন শহরে প্রচলিত কিরাআত, আরবি ভাষায় বিশুদ্ধ, অর্থেও কাছাকাছি। তাই কারী যেটাই পড়ুন, ঠিক পড়েছেন। যেভাবেই পড়া হোক, কিয়ামত তাদের শোনানো কথারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Professing Not to Know",
          "bn": "না জানার দাবি"
        },
        "p": [
          {
            "en": "Their first words were ma nadri ma as-sa'atu, we do not know what the Hour is. The commentators hear this not-knowing in different keys. At-Tabari treats it as a stance rather than a gap: they said it as takdhib, a denial of Allah's promise, a rejection of His report, and a denial of His power to give them life after their death. As-Sa'di, as noted, has them saying it munkirina, denying. On this reading the words sound like ignorance but work as refusal.",
            "bn": "তাদের প্রথম কথা ছিল মা নাদরী মাস-সা'আহ, কিয়ামত কী আমরা জানি না। এই না-জানাকে তাফসীরকারেরা ভিন্ন ভিন্ন সুরে শোনেন। তাবারীর কাছে এটা জ্ঞানের ঘাটতি নয়, একটা অবস্থান। তাঁর ভাষায় তারা কথাটা বলেছিল তাকযীব হিসেবে: আল্লাহর প্রতিশ্রুতিকে মিথ্যা বলে, তাঁর দেওয়া খবরকে ফিরিয়ে দিয়ে, আর মৃত্যুর পর তাদের জীবিত করার ব্যাপারে তাঁর কুদরতকে অস্বীকার করে। সা'দীর কথা আগেই এসেছে: তারা এ কথা বলেছিল মুনকিরীনা হয়ে, অস্বীকার করে। এই পাঠে কথাগুলো শুনতে অজ্ঞতার মতো, কিন্তু কাজ করে প্রত্যাখ্যান হিসেবে।"
          },
          {
            "en": "Al-Qurtubi gives the clause a narrower paraphrase: we do not know what the Hour is, hal hiya haqqun am batil, whether it is true or false. Ibn Kathir reads it as la na'rifuha, we do not know it, and the abridged English renders this as we do not recognise what you are talking about. The emphasis differs, with at-Tabari stressing denial and al-Qurtubi an uncertainty over true or false, and the two are left here side by side. The verse itself places the speakers among those whom 45:31 calls arrogant when the verses were recited.",
            "bn": "কুরতুবী অংশটির অর্থ করেন আরও সীমিতভাবে: কিয়ামত কী আমরা জানি না, হাল হিয়া হাক্কুন আম বাতিল, তা সত্য না মিথ্যা। ইবন কাসীর পড়েন লা না'রিফুহা, আমরা তা চিনি না। সংক্ষিপ্ত ইংরেজি ভাষ্যে কথাটা দাঁড়ায়: তোমরা কী বলছ, আমরা তা বুঝি না। জোরটা পড়েছে দুই জায়গায়। তাবারী জোর দেন অস্বীকারের উপর, আর কুরতুবী সত্য-মিথ্যা নিয়ে অনিশ্চয়তার উপর। দুটো পাঠই এখানে পাশাপাশি রাখা হলো। তবে আয়াতটি নিজেই এই বক্তাদের রেখেছে তাদের মধ্যে, যাদের সামনে আয়াত পাঠ করা হলে তারা অহংকার করেছিল বলে ৪৫:৩১ জানায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Supposing and Nothing Firmer",
          "bn": "আন্দাজের বেশি কিছু নয়"
        },
        "p": [
          {
            "en": "Then in nazunnu illa zannan, literally: we do not suppose except a supposition. Al-Qurtubi reports three ways of supplying what the phrase leaves implicit. The first is al-Mubarrad's: its underlying form is in nahnu illa nazunnu zannan, we are nothing but people supposing a supposition. The other two are each introduced with qila, it was said. The second is in nazunnu illa annakum tazunnuna zannan: we only suppose that you are yourselves supposing. The third restores the frame of the address: and you said, we only suppose, and we are not certain that the Hour is coming.",
            "bn": "এরপর ইন নাযুন্নু ইল্লা যান্নান, শব্দে শব্দে: আমরা আন্দাজ ছাড়া কিছু আন্দাজ করি না। বাক্যটির ভেতরে যা উহ্য আছে, তা পূরণের তিনটি পথ কুরতুবী উল্লেখ করেন। প্রথমটি মুবাররাদের: মূল গঠন হলো ইন নাহনু ইল্লা নাযুন্নু যান্নান, আমরা আন্দাজকারী ছাড়া আর কিছু নই। বাকি দুটি তিনি আনেন কীলা, বলা হয়েছে, শব্দ দিয়ে। দ্বিতীয়টি হলো: ইন নাযুন্নু ইল্লা আন্নাকুম তাযুন্নূনা যান্নান, আমরা শুধু এটুকু ধারণা করি যে তোমরা নিজেরাই আন্দাজ করছ। তৃতীয়টি সম্বোধনের কাঠামো ফিরিয়ে আনে: আর তোমরা বলেছিলে, আমরা শুধু আন্দাজ করি, কিয়ামত যে আসছে, তাতে আমরা নিশ্চিত নই।"
          },
          {
            "en": "The second of these turns the word back on those who spoke to them: the certainty of those who told them would itself be only a guess. Al-Qurtubi records it without preferring it, and he gives no ranking among the three. At-Tabari does not discuss the construction at all; he paraphrases it plainly: and you said, we do not suppose that the Hour is coming, except as a supposition. The Arabic is kept here as the commentators give it, with no further theory of the grammar added in this article's own voice.",
            "bn": "এর দ্বিতীয় ব্যাখ্যাটি কথাটাকে ঘুরিয়ে দেয় তাদের দিকে, যারা কথাটা বলেছিল: যারা তাদের বলেছিল, তাদের নিশ্চয়তাও নাকি আন্দাজ মাত্র। কুরতুবী একে উল্লেখ করেন, অগ্রাধিকার দেন না। তিনটির মধ্যে কোনটি আগে, সে বিচারও তিনি করেন না। তাবারী গঠন নিয়ে কোনো আলোচনাই করেন না। তিনি সোজা অর্থ বলে দেন: তোমরা বলেছিলে, কিয়ামত আসবে, এমন ধারণা আমরা আন্দাজ হিসেবেই করি। তাফসীরকারেরা আরবিটা যেভাবে দিয়েছেন, এখানে সেভাবেই রাখা হলো। এ লেখা নিজের পক্ষ থেকে ব্যাকরণের নতুন কোনো তত্ত্ব যোগ করেনি।"
          },
          {
            "en": "Others gloss the weight of the guess. Ibn Kathir explains it as in natawahhamu wuqu'aha illa tawahhuman, we only fancy that it will happen, and adds: marjuhan, a likelihood outweighed. The abridged English puts it as we only remotely think that it might come. Al-Baghawi says they knew it only hadsan wa tawahhuman, by guesswork and fancy, and the Muyassar likewise says they expected its occurrence only as a fancy. On these glosses the supposition was not a leaning towards belief. It was a possibility they ranked as the less likely.",
            "bn": "অন্যরা ব্যাখ্যা করেন, আন্দাজটার ওজন কতটুকু ছিল। ইবন কাসীর বলেন, ইন নাতাওয়াহহামু উকূ'আহা ইল্লা তাওয়াহহুমান, এটা ঘটবে বলে আমরা শুধু কল্পনা করি। তারপর যোগ করেন: মারজূহান, অর্থাৎ যে সম্ভাবনা অন্য সম্ভাবনার কাছে হার মেনেছে। সংক্ষিপ্ত ইংরেজি ভাষ্যে কথাটা এমন: আমরা দূর থেকে ভাবি, হয়তো আসতেও পারে। বাগাভী বলেন, তারা এটা জানত শুধু হাদসান ওয়া তাওয়াহহুমান, অনুমান আর কল্পনায়। মুয়াসসারও বলে, এর ঘটার আশা তারা করত কেবল কল্পনা হিসেবে। এসব ব্যাখ্যায় আন্দাজটা বিশ্বাসের দিকে ঝোঁক ছিল না। ছিল এমন এক সম্ভাবনা, যাকে তারা কম সম্ভাব্য বলেই ধরে রেখেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty They Disowned",
          "bn": "যে ইয়াকিন তারা মানেনি"
        },
        "p": [
          {
            "en": "The last clause, wa ma nahnu bi-mustayqinin, and we are not certain, completes the reply. Ibn Kathir links it to what came before with wa li-hadha qala, and for this reason He said: because their thought was the weaker likelihood, the clause follows that they were not mutahaqqiqin, not sure. At-Tabari names the object: not certain that it is coming, nor that it will be. Al-Baghawi has not certain that it will be, and the Muyassar, not sure that the Hour is coming.",
            "bn": "শেষ অংশ ওয়া মা নাহনু বিমুসতাইকিনীন, আর আমরা নিশ্চিত নই, জবাবটা পূর্ণ করে। ইবন কাসীর একে আগের কথার সঙ্গে জোড়েন ওয়া লিহাযা কালা বলে, মানে এ কারণেই তিনি বললেন। তাদের ধারণা যেহেতু দুর্বল সম্ভাবনার দিকে ছিল, তাই পরের অংশে আসে, তারা মুতাহাক্কিকীন নয়, নিশ্চিত নয়। তাবারী বলে দেন কী বিষয়ে নিশ্চিত নয়: কিয়ামত যে আসছে, কিংবা তা যে ঘটবে, সে ব্যাপারে। বাগাভীর ভাষায়, তা ঘটবে বলে তারা নিশ্চিত নয়। মুয়াসসারের ভাষায়, কিয়ামত আসছে বলে তারা নিশ্চিত নয়।"
          },
          {
            "en": "A reader of the whole surah may notice that this vocabulary has appeared before. In 45:24 the Qur'an reports those who say there is only this worldly life, and states that they have no knowledge of it: in hum illa yazunnun, they only suppose. Here, on the Day, the same root z-n-n returns in their own mouths, now quoted to them. And the announcement they answered, la rayba fiha, echoes 45:26, where the Day of Resurrection is called a day about which there is no doubt. The commentaries cited here do not draw these links; they are observations from the text itself.",
            "bn": "পুরো সূরা যিনি পড়েন, তিনি খেয়াল করবেন, এই শব্দগুলো আগেও এসেছে। ৪৫:২৪ আয়াতে কুরআন তাদের কথা জানায়, যারা বলে দুনিয়ার এই জীবনই সব। কুরআন বলে, এ বিষয়ে তাদের কোনো জ্ঞান নেই: ইন হুম ইল্লা য়াযুন্নূন, তারা শুধু আন্দাজ করে। এখানে, সেই দিনে, য-ন-ন ধাতুটি ফিরে এসেছে তাদের নিজেদের মুখে, আর তাদেরকেই তা শোনানো হচ্ছে। যে ঘোষণার জবাব তারা দিয়েছিল, সেই লা রাইবা ফীহা মনে করিয়ে দেয় ৪৫:২৬ আয়াতকে, যেখানে কিয়ামতের দিনকে বলা হয়েছে এমন দিন, যাতে কোনো সন্দেহ নেই। এখানে উদ্ধৃত তাফসীরগুলো এই যোগসূত্র টানে না। এগুলো আয়াতের পাঠ থেকেই চোখে পড়া কথা।"
          },
          {
            "en": "The verses on either side carry the rest. The loss of the people of falsehood on the Day the Hour comes was announced in 45:27, and what becomes of these speakers after this exchange is the subject of the verses that follow, which this article leaves to them. This verse holds a single moment: words they once said, returned to them in a place where no one can call the Hour a guess any longer.",
            "bn": "বাকি কথা বহন করে আগে-পরের আয়াতগুলো। কিয়ামতের দিন মিথ্যার অনুসারীরা যে ক্ষতিগ্রস্ত হবে, সে ঘোষণা এসেছে ৪৫:২৭ আয়াতে। আর এ কথোপকথনের পর এই বক্তাদের কী হয়, তা পরের আয়াতগুলোর বিষয়। এ লেখা সেটা সেগুলোর জন্যই রেখে দিল। এ আয়াত ধরে রাখে একটিমাত্র মুহূর্ত: তারা একদিন যে কথা বলেছিল, তা তাদের কাছে ফিরে এসেছে এমন জায়গায়, যেখানে কিয়ামতকে আর কেউ আন্দাজ বলতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Doubt Is Not This Refusal",
          "bn": "প্রশ্ন আর প্রত্যাখ্যান আলাদা"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what it describes: a group of deniers on the Day, rebuked because, when the verses were recited to them, they met them with arrogance, as 45:31 says, and answered the promise with professed ignorance. It licenses nothing against any living person or community. It hands no reader a verdict on anyone's final standing, and no warrant to treat a neighbour, a relative or a whole people as the speakers of this verse.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: সেই দিনের একদল অস্বীকারকারী, যাদের তিরস্কার করা হচ্ছে। তাদের সামনে আয়াত পাঠ করা হয়েছিল, তারা অহংকার করেছিল, ৪৫:৩১ যেমন বলে। আর আল্লাহর প্রতিশ্রুতির জবাবে তারা না-জানার দাবি করেছিল। আজ বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কারও শেষ পরিণতি নিয়ে রায় দেওয়ার অধিকার কোনো পাঠককে দেয় না। প্রতিবেশী, আত্মীয় বা গোটা কোনো জাতিকে এ আয়াতের বক্তা বানিয়ে দেখার ছাড়পত্রও দেয় না।"
          },
          {
            "en": "Nor does it turn a person who has questions or doubts today into one of them. The speakers here are marked by their reply after the message reached them, which at-Tabari reads as denial of the promise and rejection of the report. Someone who carries a question to learning is doing the opposite of saying we do not know and walking away. No commentary fetched for this verse attaches a sound hadith to it, so none is cited here, and none gives an occasion of revelation for it.",
            "bn": "আজ যার মনে প্রশ্ন বা সংশয় আছে, এ আয়াত তাকেও ওই দলের একজন বানায় না। এখানকার বক্তাদের চেনা যায় বার্তা পৌঁছানোর পর তাদের জবাব দিয়ে। তাবারীর পাঠে সে জবাব ছিল প্রতিশ্রুতিকে মিথ্যা বলা আর খবরকে ফিরিয়ে দেওয়া। যে মানুষ নিজের প্রশ্ন নিয়ে ইলমের কাছে যায়, সে তো উল্টো কাজ করছে। সে আমরা জানি না বলে মুখ ফিরিয়ে চলে যাচ্ছে না। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। কোনো তাফসীর এর শানে নুযূলও উল্লেখ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing Your Own Yaqin",
          "bn": "নিজের ইয়াকিন মেপে দেখা"
        },
        "p": [
          {
            "en": "What can a believer take from words spoken by others? At-Tabari's paraphrase points the way: the announcement that there is no doubt about the Hour came with a summons to fear Allah, to believe, and to work for what saves. Certainty, on that reading, is meant to show in conduct. A person may affirm the Hour sincerely and still live a week as if it were a remote possibility. The verse invites an honest look at that gap, in oneself first, without turning the look outward onto others.",
            "bn": "অন্যদের মুখের কথা থেকে একজন মুমিন কী নেবেন? তাবারীর ব্যাখ্যা পথ দেখায়। কিয়ামতে কোনো সন্দেহ নেই, এই ঘোষণার সঙ্গে এসেছিল ডাক: আল্লাহকে ভয় করো, ঈমান আনো, আর এমন আমল করো যা বাঁচাবে। এই পাঠে নিশ্চিত বিশ্বাসের প্রকাশ ঘটার কথা কাজে। মানুষ আন্তরিকভাবে কিয়ামত মেনেও গোটা একটা সপ্তাহ কাটিয়ে দিতে পারে এমনভাবে, যেন তা দূরের কোনো সম্ভাবনা। আয়াতটি সেই ফাঁকটার দিকে সৎভাবে তাকাতে ডাকে, আগে নিজের ভেতরে, অন্যের দিকে আঙুল না তুলে।"
          },
          {
            "en": "Some practical steps follow from the verse's own vocabulary. Notice where the word perhaps has crept into how you think of the Day, and set against it what was announced: Allah's promise is true. Bring the questions you carry to learning, to people of knowledge and to prayer, instead of letting them settle into a convenient guess. And test a single plan this week against certainty: if the Hour were as sure as tomorrow's morning, would this choice still stand? That is a mirror held up to the reader, and to nobody else.",
            "bn": "আয়াতের নিজের শব্দগুলো থেকেই কিছু কাজের কথা বেরিয়ে আসে। খেয়াল করুন, আখিরাতের কথা ভাবতে গিয়ে কোথায় 'হয়তো' শব্দটা ঢুকে পড়েছে। তার জায়গায় রাখুন সেই ঘোষণা: আল্লাহর প্রতিশ্রুতি সত্য। মনে যে প্রশ্নগুলো বয়ে বেড়াচ্ছেন, সেগুলো সুবিধাজনক আন্দাজ হয়ে থিতিয়ে যেতে দেবেন না। নিয়ে যান ইলমের কাছে, আলেমদের কাছে, দোয়ায়। আর এ সপ্তাহের অন্তত একটা পরিকল্পনা নিশ্চয়তার মাপে যাচাই করুন: কিয়ামত যদি কালকের সকালের মতোই নিশ্চিত হতো, এই সিদ্ধান্ত কি টিকত? এ আয়না পাঠকের নিজের জন্য, আর কারও জন্য নয়।"
          }
        ]
      }
    ]
  }
});
