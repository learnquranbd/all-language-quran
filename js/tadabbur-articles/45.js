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
  }
});
