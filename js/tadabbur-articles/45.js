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
            "bn": "সূরা আল-জাসিয়া শুরু হয় দুটি হরফ আর কিতাব সম্পর্কে একটা ঘোষণা দিয়ে: এ কিতাব নাজিল হয়েছে মহাপরাক্রমশালী, প্রজ্ঞাময় আল্লাহর কাছ থেকে (৪৫:২)। তারপর শুরু হয় ইশারা। আকাশ আর যমীনে মু'মিনদের জন্য নিদর্শন আছে (৪৫:৩)। পরের আয়াতে আরবিতে মাত্র নয়টি শব্দ, আর ইশারাটা আরও কাছে চলে আসে: ওয়া ফী খালকিকুম ওয়া মা ইয়াবুসসু মিন দাব্বাতিন আয়াতুন লি-কাওমিন ইউকিনূন। তোমাদের সৃষ্টিতে, আর তিনি যে প্রাণী ছড়িয়ে দেন তাতে, নিদর্শন আছে এমন সম্প্রদায়ের জন্য যারা নিশ্চিত বিশ্বাস রাখে।"
          },
          {
            "en": "The order is plain in the text. First the widest frame, the heavens and the earth. Then the reader himself, addressed directly in the plural: your creation. Then the creatures around him. The next verse, 45:5, moves outward again to night and day, rain and wind, and 45:6 asks in what statement, after Allah and His signs, they will believe. This article stays with the nine words in the middle, and with what the commentators consulted for this verse say about them.",
            "bn": "ক্রমটা আয়াতের ভেতরেই স্পষ্ট। প্রথমে সবচেয়ে বড় পরিসর, আকাশ আর যমীন। তারপর পাঠক নিজে, তাকে সরাসরি বহুবচনে ডেকে বলা হয়েছে: তোমাদের সৃষ্টি। তারপর তার চারপাশের প্রাণীকুল। এর পরের আয়াত, ৪৫:৫, আবার বাইরের দিকে যায়, রাত-দিন, বৃষ্টি আর বাতাসের দিকে। আর ৪৫:৬ প্রশ্ন করে, আল্লাহ আর তাঁর আয়াতের পর তারা আর কোন কথায় ঈমান আনবে। এ লেখার বিষয় মাঝখানের ওই নয়টি শব্দ, আর এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো সেগুলো নিয়ে কী বলে।"
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
            "bn": "তাবারী ফী খালকিকুম-এর ব্যাখ্যা দেন এভাবে: হে মানুষ, আল্লাহ যে তোমাদের সৃষ্টি করেছেন তাতে। মুয়াসসার প্রায় একই কথা বলে: হে মানুষ, তোমাদের সৃষ্টিতে। এই সৃষ্টির ভেতরে কী কী আছে, তার তালিকা কেউই দেন না। কুরতুবী এ আয়াতে পৌঁছে একে ৪৫:৫-এর সঙ্গে একত্রে নেন এবং বলেন, এর সবকিছু সূরা আল-বাকারা ও অন্যান্য জায়গায় পূর্ণভাবে আলোচিত হয়ে গেছে। ইবন কাসীরের ইংরেজি সংক্ষেপ আর মাআরিফুল কুরআনও একই দিকে ইশারা করে, আর দুটোই কাছাকাছি অর্থের আয়াত হিসেবে ২:১৬৪-এর কথা বলে।"
          },
          {
            "en": "So the texts read for this verse keep fi khalqikum brief, and this article does the same. It does not add stages of growth, organs or the findings of any science to the commentators' words, because none of them does so here. What the texts do make clear is the shape of the gloss: the creation in question is Allah's act, and the ones created are the people being addressed. The sign is not a distant object. It is the listener, considered as something made.",
            "bn": "তাই এ আয়াতের জন্য পড়া তাফসীরগুলো ফী খালকিকুম নিয়ে অল্প কথাতেই থেমেছে, এ লেখাও তা-ই করবে। বেড়ে ওঠার ধাপ, অঙ্গপ্রত্যঙ্গ বা কোনো বিজ্ঞানের আবিষ্কার এ লেখা তাফসীরকারদের কথার সঙ্গে জুড়ে দেবে না, কারণ তাঁদের কেউ এখানে তা করেননি। তবে ব্যাখ্যার ধরনটা পরিষ্কার। সৃষ্টি করার কাজটা আল্লাহর, আর যাদের সৃষ্টি করা হয়েছে তারা সেই মানুষেরাই, যাদের সঙ্গে কথা বলা হচ্ছে। নিদর্শনটা দূরের কোনো বস্তু নয়। শ্রোতা নিজেই সেই নিদর্শন, যখন সে নিজেকে দেখে একটি সৃষ্টি হিসেবে।"
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
            "bn": "ওয়া মা ইয়াবুসসু মিন দাব্বাহ: আর তিনি যে প্রাণী ছড়িয়ে দেন। তাবারী এর ব্যাখ্যা দেন এভাবে: যমীনে যত প্রাণী ছড়িয়ে আছে, যারা তার উপর চলাফেরা করে, তাদের তিনি সৃষ্টি করেছেন। সঙ্গে একটি শর্ত জুড়ে দেন: তোমাদের জাতের বাইরের প্রাণী। আয়াত মাত্রই মানুষের কথা বলেছে, তাই তাঁর পাঠে এখানে দাব্বা মানে বাকি সব চলমান প্রাণী। মুয়াসসারও একই ছবি রাখে: যমীনে ছড়িয়ে থাকা, তার উপর চলাফেরা করা প্রাণীদের সৃষ্টি।"
          },
          {
            "en": "Ibn Kathir widens the frame. He speaks of what is in the heavens and the earth of creatures of differing kinds and species, and he names them: angels, jinn, humans, beasts, birds, wild animals, predators, insects, and the varied sorts in the sea. As-Sa'di likewise speaks of what He has spread in them both, the heavens and the earth, of creatures, and adds the benefits He has placed in them. Where at-Tabari and the Muyassar place the creatures on the earth, Ibn Kathir and as-Sa'di speak of both.",
            "bn": "ইবন কাসীর পরিসরটা বড় করেন। তিনি আকাশ ও যমীনে থাকা নানা জাত ও প্রজাতির সৃষ্টির কথা বলেন, আর নাম ধরে গোনান: ফেরেশতা, জিন, মানুষ, পশু, পাখি, বন্য প্রাণী, শিকারি জন্তু, কীটপতঙ্গ আর সাগরের হরেক রকম প্রাণী। সা'দীও আকাশ ও যমীন দুটোর কথাই বলেন: এ দুইয়ের মধ্যে তিনি যত প্রাণী ছড়িয়ে দিয়েছেন। সঙ্গে যোগ করেন, এদের মধ্যে তিনি কত উপকার রেখে দিয়েছেন। তাবারী আর মুয়াসসার প্রাণীদের রাখেন যমীনে, আর ইবন কাসীর ও সা'দী বলেন দুটোর কথাই।"
          },
          {
            "en": "The two pictures are a difference of scope, not a dispute: none of these commentators argues against another on the point, and this article does not choose between them. What three of them share is the verb's sense. Yabuththu is to spread or scatter, and at-Tabari and the Muyassar gloss it with tafarraqa, what is dispersed, while as-Sa'di repeats the verb itself, ma baththa. The creatures are not simply there; they have been spread, kind after kind, across the places where they live.",
            "bn": "দুই ছবির পার্থক্য পরিসরের, বিরোধের নয়। এ বিষয়ে এই তাফসীরকারদের কেউ অন্যজনের বিরুদ্ধে যুক্তি দেননি, আর এ লেখাও তাঁদের মধ্যে কোনোটি বেছে নিচ্ছে না। তাঁদের তিনজনের মিল ক্রিয়াটির অর্থে। ইয়াবুসসু মানে ছড়িয়ে দেওয়া, ছিটিয়ে দেওয়া। তাবারী আর মুয়াসসার এর ব্যাখ্যায় আনেন তাফাররাকা, অর্থাৎ যা ছড়িয়ে আছে। আর সা'দী ক্রিয়াটিই আবার বলেন: মা বাস্সা। প্রাণীরা এমনি এমনি সেখানে নেই। তাদের ছড়িয়ে দেওয়া হয়েছে, জাতের পর জাত, যার যেখানে বাস সেখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Proofs for the Certain",
          "bn": "দৃঢ় বিশ্বাসীদের জন্য দলিল"
        },
        "p": [
          {
            "en": "What are these ayat? At-Tabari answers in two words: hujajan wa adillatan, proofs and evidences. The Muyassar uses the same pair. Neither treats the signs as decoration or as wonders to be admired and left. A proof is something that establishes a conclusion. On this gloss your own creation, and the creatures spread around you, are offered to the listener as arguments, each one carrying something it is meant to establish in the mind of whoever weighs it.",
            "bn": "এই আয়াত, অর্থাৎ নিদর্শনগুলো কী? তাবারী উত্তর দেন দুই শব্দে: হুজাজান ওয়া আদিল্লাতান, দলিল ও প্রমাণ। মুয়াসসারও এই জোড়া শব্দই ব্যবহার করে। দুজনের কেউই নিদর্শনকে সাজসজ্জা বা দেখে মুগ্ধ হয়ে চলে যাওয়ার মতো বিস্ময় হিসেবে দেখেন না। দলিলের কাজই কোনো একটা সিদ্ধান্তকে প্রমাণ করা। এ ব্যাখ্যায় আপনার নিজের সৃষ্টি আর চারপাশে ছড়ানো প্রাণীরা শ্রোতার সামনে যুক্তি হয়ে হাজির। যে মন দিয়ে ভেবে দেখে, প্রত্যেকটি তার মনে কোনো একটা কথা প্রমাণ করে দিতে চায়।"
          },
          {
            "en": "For whom? Li-qawmin yuqinun, for a people who are certain. The commentators fill in the object of that certainty differently. At-Tabari says they are certain of the realities of things, so they affirm them and know them to be sound. The Muyassar says they are certain of Allah and His law. Al-Baghawi says they are certain that there is no god other than Him. Ibn Kathir's English abridgement renders the phrase as those who have faith with certainty.",
            "bn": "কাদের জন্য? লি-কাওমিন ইউকিনূন, এমন সম্প্রদায়ের জন্য যারা নিশ্চিত বিশ্বাস রাখে। কিসের ব্যাপারে এই নিশ্চয়তা, সে প্রশ্নে তাফসীরকারদের উত্তর ভিন্ন ভিন্ন। তাবারী বলেন, জিনিসের আসল সত্য সম্পর্কে তারা নিশ্চিত, তাই সেগুলো মেনে নেয় আর জানে যে সেগুলো সঠিক। মুয়াসসার বলে, তারা আল্লাহ ও তাঁর শরীয়ত সম্পর্কে নিশ্চিত। বাগাভী বলেন, তারা নিশ্চিত যে তিনি ছাড়া কোনো ইলাহ নেই। ইবন কাসীরের ইংরেজি সংক্ষেপে এর অর্থ: যারা নিশ্চিত বিশ্বাসের সঙ্গে ঈমান রাখে।"
          },
          {
            "en": "These are not rival positions so much as different angles. At-Tabari's reading is the broadest: the certain are those who acknowledge what is real when they meet it. Al-Baghawi's is the most pointed, tying the certainty to the oneness of Allah. The Muyassar joins belief in Allah to acceptance of what He has prescribed. Together they suggest that the signs are not addressed to a mood but to a settled assent, whatever its object is said to be in each gloss.",
            "bn": "এগুলোকে পরস্পরবিরোধী মত বলার চেয়ে একই কথাকে ভিন্ন ভিন্ন দিক থেকে দেখা বলাই ঠিক। তাবারীর ব্যাখ্যা সবচেয়ে প্রশস্ত: নিশ্চিত বিশ্বাসী তারা, যারা সত্যের মুখোমুখি হলে তা মেনে নেয়। বাগাভীর ব্যাখ্যা সবচেয়ে নির্দিষ্ট, তিনি নিশ্চয়তাকে বেঁধে দেন আল্লাহর একত্বের সঙ্গে। মুয়াসসার আল্লাহর উপর ঈমানের সঙ্গে জুড়ে দেয় তাঁর দেওয়া বিধান মেনে নেওয়াকে। সব মিলিয়ে বোঝা যায়, নিদর্শনগুলো ক্ষণিকের আবেগকে ডাকে না, ডাকে স্থির ও পাকা স্বীকৃতিকে, প্রতিটি ব্যাখ্যায় সেই স্বীকৃতির বিষয় যা-ই বলা হোক।"
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
            "en": "Read the three verses together and the endings change, which anyone can see in the text: signs li-l-mu'minin, for the believers (45:3); li-qawmin yuqinun, for a people who are certain (45:4); li-qawmin ya'qilun, for a people who reason (45:5). Why they change is a question the text does not answer in so many words, and two of the sources consulted for this verse answer it in two different ways. Both are reported here as their authors give them.",
            "bn": "তিনটি আয়াত একসঙ্গে পড়লে যে কেউ দেখবেন, প্রতিটির শেষ কথা বদলে যাচ্ছে: লিল-মু'মিনীন, মু'মিনদের জন্য নিদর্শন (৪৫:৩); লি-কাওমিন ইউকিনূন, নিশ্চিত বিশ্বাসী সম্প্রদায়ের জন্য (৪৫:৪); লি-কাওমিন ইয়া'কিলূন, বিবেক খাটায় এমন সম্প্রদায়ের জন্য (৪৫:৫)। কেন বদলায়, আয়াত নিজে তা স্পষ্ট ভাষায় বলে না। এ আয়াতের জন্য সংগ্রহ করা উৎসের মধ্যে দুটি এর উত্তর দেয় দুই ভিন্নভাবে। দুটোই এখানে তুলে ধরা হলো, লেখকেরা যেভাবে বলেছেন সেভাবে।"
          },
          {
            "en": "Ibn Kathir's English abridgement reads the sequence as a climb. Allah said first, signs for the believers, then for those who have faith with certainty, then for those who understand, thus ascending from an honourable stage to a more honourable stage, higher in grade. On this reading each ending names a station above the last, and the verse on human beings and creatures sits at the middle rung, above belief and below understanding.",
            "bn": "ইবন কাসীরের ইংরেজি সংক্ষেপ এ ক্রমকে দেখে ওপরে ওঠার সিঁড়ি হিসেবে। আল্লাহ প্রথমে বলেছেন মু'মিনদের জন্য নিদর্শন, তারপর যারা নিশ্চিত বিশ্বাসের সঙ্গে ঈমান রাখে তাদের জন্য, তারপর যারা বোঝে তাদের জন্য। এভাবে এক সম্মানিত স্তর থেকে আরও সম্মানিত ও উঁচু মর্যাদার স্তরে ওঠা। এ পাঠে প্রতিটি সমাপ্তি আগেরটির চেয়ে উঁচু এক স্তরের নাম। আর মানুষ ও প্রাণীকুলের এই আয়াতটি থাকে মাঝের ধাপে, ঈমানের ওপরে, বোঝার নিচে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the same endings by who benefits. It calls them stylistic variations, but finds more in them. The first, it says, indicates that only those who have faith will benefit. The second will benefit people who may not embrace faith at once but do develop certainty in their hearts that these signs point to the Oneness of Allah, a certainty that may one day turn into faith. The third reaches those not yet firm in belief who have a sound heart to understand.",
            "bn": "মাআরিফুল কুরআন একই সমাপ্তিগুলো পড়ে কে উপকৃত হয় সেই দিক থেকে। একে বলে বর্ণনাভঙ্গির বৈচিত্র্য, তবে এর মধ্যে আরও কিছু খুঁজে পায়। তার মতে প্রথমটি বোঝায়, উপকার পাবে কেবল ঈমানদারেরা। দ্বিতীয়টির উপকার পাবে এমন লোকেরা, যারা হয়তো সঙ্গে সঙ্গে ঈমান আনে না, কিন্তু অন্তরে এই নিশ্চয়তা জন্মায় যে নিদর্শনগুলো আল্লাহর একত্বের দিকেই ইশারা করে। আর এই নিশ্চয়তা হয়তো একদিন ঈমানে পরিণত হবে। তৃতীয়টি পৌঁছায় তাদের কাছে, যারা এখনো বিশ্বাসে দৃঢ় নয়, তবে বোঝার মতো সুস্থ অন্তর রাখে।"
          },
          {
            "en": "The two accounts do not line up. In Ibn Kathir's abridgement the certain stand above the believers; in Ma'arif al-Qur'an the certainty of 45:4 can belong to someone who has not yet believed. Ma'arif adds that people without sound intellect, or unwilling to use it, stay unconvinced even if thousands of proofs are set before them. Both readings are kept here as they stand, with their authors' names on them, and neither is preferred.",
            "bn": "দুই ব্যাখ্যা এক জায়গায় মেলে না। ইবন কাসীরের সংক্ষেপে নিশ্চিত বিশ্বাসীদের স্থান মু'মিনদের ওপরে। মাআরিফুল কুরআনে ৪৫:৪-এর নিশ্চয়তা এমন কারও হতে পারে, যে এখনো ঈমান আনেনি। মাআরিফ আরও বলে, যাদের সুস্থ বিবেক নেই, কিংবা যারা তা কাজে লাগাতে চায় না, তাদের সামনে হাজার হাজার প্রমাণ রাখলেও তারা মানে না। দুটো পাঠই এখানে যেমন আছে তেমন রাখা হলো, লেখকদের নামসহ। কোনোটিকে প্রাধান্য দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ayatun and Ayatin",
          "bn": "আয়াতুন ও আয়াতিন"
        },
        "p": [
          {
            "en": "One word in this verse is read in two ways. Al-Qurtubi reports that the general reading is ayatun, with damma, both here and in 45:5, while Hamza and al-Kisa'i read ayatin, with kasra, in both. Al-Baghawi names Hamza, al-Kisa'i and Ya'qub for ayatin, and says the others read ayatun. Al-Qurtubi adds that there is no disagreement over 45:3, where la-ayatin is the noun of inna and its predicate is fi s-samawati.",
            "bn": "এ আয়াতের একটি শব্দ দুইভাবে পড়া হয়। কুরতুবী জানান, সাধারণ কিরাআত হলো আয়াতুন, পেশ দিয়ে, এখানে এবং ৪৫:৫-এও। আর হামযা ও কিসাঈ দুই জায়গাতেই পড়েন আয়াতিন, যের দিয়ে। বাগাভী আয়াতিন-এর জন্য নাম নেন হামযা, কিসাঈ ও ইয়াকুবের, আর বলেন বাকিরা পড়েন আয়াতুন। কুরতুবী আরও বলেন, ৪৫:৩ নিয়ে কোনো মতভেদ নেই। সেখানে লা-আয়াতিন হলো ইন্না-র ইসম, আর তার খবর ফিস-সামাওয়াতি।"
          },
          {
            "en": "The grammar each gives is short. Ayatin, al-Qurtubi says, is joined to what inna governed, as if the verse said: inna fi khalqikum ... ayatin. Al-Baghawi says it refers back to la-ayatin and stands in the accusative position. For ayatun, al-Qurtubi's discussion, which runs on into 45:5, says it is read on the position of inna together with what it governed, or else as a fresh start, a subject with what precedes as its predicate, one sentence joined to another. Al-Baghawi calls it isti'naf and cites the Arab saying in which the second noun may be accusative or nominative.",
            "bn": "দুজনেই ব্যাকরণের কথা বলেন সংক্ষেপে। কুরতুবী বলেন, আয়াতিন যুক্ত হয়েছে ইন্না যার উপর কাজ করেছে তার সঙ্গে, যেন আয়াতটি বলছে: ইন্না ফী খালকিকুম ... আয়াতিন। বাগাভী বলেন, এটি লা-আয়াতিন-এর দিকে ফিরে যায় এবং যবরের অবস্থানে আছে। আয়াতুন নিয়ে কুরতুবীর আলোচনা ৪৫:৫ পর্যন্ত গড়ায়। তিনি বলেন, এটি পড়া হয় ইন্না ও তার আমলসহ পুরো অংশের অবস্থান ধরে। অথবা নতুন করে শুরু হিসেবে: আগের অংশ খবর, এটি মুবতাদা, এক বাক্যের সঙ্গে আরেক বাক্য জোড়া। বাগাভী একে বলেন ইস্তি'নাফ, আর আরবদের একটি কথা উদ্ধৃত করেন, যেখানে দ্বিতীয় বিশেষ্যে যবর বা পেশ দুটোই চলে।"
          },
          {
            "en": "At-Tabari gives the fullest account. He says the general readers of Medina and Basra, and some of Kufa, read ayatun as a subject, not referring it back to 45:3, while the general readers of Kufa read ayatin, with kasra in the sense of the accusative, referring it back. Later readers of ayatin, he reports, claimed that in Ubayy's reading all three verses carry la-ayatin with the lam. At-Tabari answers that this is no proof, since no sound narration of it from Ubayy exists.",
            "bn": "সবচেয়ে বিস্তারিত বিবরণ তাবারীর। তিনি বলেন, মদীনা ও বসরার সাধারণ কারীরা, আর কূফার কেউ কেউ, আয়াতুন পড়েন মুবতাদা হিসেবে, ৪৫:৩-এর দিকে ফিরিয়ে না নিয়ে। আর কূফার সাধারণ কারীরা পড়েন আয়াতিন, যের দিয়ে কিন্তু যবরের অর্থে, ৪৫:৩-এর দিকে ফিরিয়ে। তিনি জানান, পরবর্তী যুগের যারা আয়াতিন পড়েন, তারা দাবি করেছিলেন উবাই (রাঃ)-এর কিরাআতে তিনটি আয়াতেই লাম-সহ লা-আয়াতিন আছে। তাবারীর জবাব, এটা কোনো দলিল নয়, কারণ উবাই (রাঃ) থেকে এ বিষয়ে কোনো সহীহ বর্ণনা নেই।"
          },
          {
            "en": "Even if it were sound, at-Tabari goes on, it would not settle the case, since the Arabs can put the lam on the predicate of a clause that follows one governed by inna, and he cites a line of Humayd ibn Thawr al-Hilali to show it. His verdict states no preference: the two are widely spread readings in the cities, read by learned reciters, both sound in meaning, and whoever reads with either is correct.",
            "bn": "তাবারী আরও বলেন, বর্ণনাটা সহীহ হলেও তাতে বিষয়টার মীমাংসা হতো না। কারণ ইন্না-যুক্ত বাক্যের পরে আসা বাক্যের খবরেও আরবরা লাম বসাতে পারে, আর তা দেখাতে তিনি হুমাইদ ইবন সাওর আল-হিলালীর একটি কবিতার চরণ উদ্ধৃত করেন। তাঁর রায়ে কোনো পক্ষকে অগ্রাধিকার নেই। দুই কিরাআতই বিভিন্ন নগরে ব্যাপকভাবে প্রচলিত কিরাআত, বিজ্ঞ কারীরা দুটোই পড়েছেন, অর্থের দিক থেকে দুটোই বিশুদ্ধ, আর যে-কোনোটি দিয়ে পড়লে পাঠক সঠিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added to the Texts",
          "bn": "উৎসের বাইরে কিছু নয়"
        },
        "p": [
          {
            "en": "Some things are absent, and saying so is part of reading honestly. None of the commentaries consulted for this verse attaches a hadith to it, so none is cited here. None gives an occasion of revelation for it. None explains fi khalqikum through embryology or any modern science, and this article does not either. The subjection of all that is in the heavens and the earth comes later, in 45:13, and has its own article.",
            "bn": "কিছু জিনিস এখানে নেই, আর সেটা বলাও সৎভাবে পড়ার অংশ। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো হাদিস যুক্ত করেনি, তাই এখানে কোনো হাদিস উদ্ধৃত হচ্ছে না। কোনো তাফসীর এর শানে নুযূলও দেয়নি। ভ্রূণবিদ্যা বা আধুনিক কোনো বিজ্ঞান দিয়ে কেউ ফী খালকিকুম ব্যাখ্যা করেননি, এ লেখাও করবে না। আকাশ ও যমীনের সবকিছু অধীন করে দেওয়ার কথা আসে পরে, ৪৫:১৩-এ, আর তার আলাদা লেখা আছে।"
          },
          {
            "en": "What remains is enough. The verse gives two places to look, the self and the creatures, and one kind of person who reads them rightly. The commentators give the words their sense, record a reading in two forms that at-Tabari accepts equally, and disagree openly over why the endings shift. Nothing in that needs to be padded with more than the sources say in order to do its work on the reader.",
            "bn": "যা আছে, তা-ই যথেষ্ট। আয়াত তাকানোর দুটো জায়গা দেখিয়ে দেয়, নিজের সত্তা আর প্রাণীকুল। আর বলে এক শ্রেণির মানুষের কথা, যারা এগুলো ঠিকভাবে পড়তে পারে। তাফসীরকারেরা শব্দগুলোর অর্থ বলে দেন। একটি শব্দের দুই রকম কিরাআত লিখে রাখেন, তাবারী যার দুটোকেই সমানভাবে মেনে নেন। আর আয়াতের শেষ কথাটা কেন বদলায়, তা নিয়ে খোলাখুলি ভিন্নমত রাখেন। পাঠকের মনে কাজ করার জন্য এর সঙ্গে উৎসের বাইরের কিছু জুড়ে দেওয়ার দরকার নেই।"
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
            "bn": "৪৫:৩ থেকে ৪৫:৪-এ চোখ যেভাবে সরে আসে, তা থেকে একটা অভ্যাসের ইঙ্গিত মেলে। আকাশের দিকে তাকানোর পর নিজের হাতের দিকে তাকান, যে শ্বাস আপনি শুরু করেননি তার দিকে, যে শরীরে আপনি থাকেন অথচ যার নকশা আপনার করা নয় তার দিকে। তারপর তাকান চারপাশে যারা চলাফেরা করে তাদের দিকে: দেয়ালের উপর একটা কাক, সিঁড়ি বেয়ে চলা পিঁপড়ের সারি, রাস্তা পার হওয়া একটা বিড়াল। তাবারীর ব্যাখ্যায় এদের প্রত্যেকেই দলিল হিসেবে হাজির, দৃশ্যপট হিসেবে নয়।"
          },
          {
            "en": "And then ask the question the verse's ending raises, whichever commentator's account of it you follow: does this looking leave me more certain than before? The signs are spread for a people who are certain. The hope is to be counted among them, so that what is seen is also acknowledged, and what is acknowledged settles into a conviction that does not need to be argued afresh each morning.",
            "bn": "তারপর নিজেকে সেই প্রশ্নটা করুন, যা আয়াতের শেষ কথাটা তোলে। এর ব্যাখ্যায় আপনি যে তাফসীরকারকেই মানুন, প্রশ্নটা একই: এই দেখা কি আমাকে আগের চেয়ে বেশি নিশ্চিত করল? নিদর্শনগুলো ছড়িয়ে আছে নিশ্চিত বিশ্বাসী সম্প্রদায়ের জন্য। আশা এটুকুই, যেন তাদের মধ্যে গণ্য হওয়া যায়। যা চোখে দেখা হলো, তা যেন মনেও মেনে নেওয়া হয়। আর যা মেনে নেওয়া হলো, তা যেন এমন পাকা বিশ্বাসে স্থির হয়, যাকে প্রতিদিন সকালে নতুন করে যুক্তি দিয়ে দাঁড় করাতে হয় না।"
          }
        ]
      }
    ]
  },
  "45:5": {
    "sections": [
      {
        "h": {
          "en": "Night, Rain and the Wind",
          "bn": "রাত, বৃষ্টি আর বাতাস"
        },
        "p": [
          {
            "en": "Surah al-Jathiya has begun pointing. There are signs in the heavens and the earth for the believers (45:3), and signs in your own creation and in the creatures He spreads abroad for a people who are certain (45:4). The third verse turns outward again, and it is the longest of the three, twenty words in the Arabic: wa-khtilafi al-layli wan-nahari wa ma anzala Allahu mina as-sama'i min rizqin fa-ahya bihi al-arda ba'da mawtiha wa tasrifi ar-riyahi ayatun li-qawmin ya'qilun.",
            "bn": "সূরা আল-জাসিয়া ইশারা করতে শুরু করেছে। আকাশ আর যমীনে মু'মিনদের জন্য নিদর্শন আছে (৪৫:৩)। তোমাদের নিজেদের সৃষ্টিতে আর তিনি যে প্রাণী ছড়িয়ে দেন তাতে নিদর্শন আছে নিশ্চিত বিশ্বাসীদের জন্য (৪৫:৪)। তৃতীয় আয়াতটি আবার দৃষ্টিকে বাইরের দিকে ফিরিয়ে নেয়। তিনটির মধ্যে এটিই দীর্ঘতম, আরবিতে ২০টি শব্দ: ওয়াখতিলাফিল লাইলি ওয়ান-নাহারি ওয়া মা আনযালাল্লাহু মিনাস সামা-ই মির রিযকিন ফা-আহইয়া বিহিল আরদা বা'দা মাওতিহা ওয়া তাসরীফির রিয়াহি আয়াতুল লি-কাওমিই ইয়া'কিলূন।"
          },
          {
            "en": "And in the alternation of night and day, and in what Allah sends down from the sky of provision, giving life by it to the earth after its death, and in the turning of the winds, are signs for a people who reason. Four things are named: a cycle, a sending down, a revival and a turning. None of them is begun or halted by the one who hears the verse. This article takes them in order, with what the commentaries fetched for this verse say of each, and then turns to the ending.",
            "bn": "অর্থাৎ রাত ও দিনের আবর্তনে, আল্লাহ আকাশ থেকে যে রিযিক নামান আর তা দিয়ে মৃত যমীনকে আবার জীবিত করেন তাতে, আর বাতাসের ঘুরিয়ে দেওয়ায় নিদর্শন আছে সেই সম্প্রদায়ের জন্য, যারা বুদ্ধি খাটায়। চারটি জিনিসের নাম এসেছে: একটি চক্র, একটি নামিয়ে দেওয়া, একটি পুনর্জীবন আর একটি ঘুরিয়ে দেওয়া। যে মানুষ আয়াতটি শোনে, এর কোনোটাই তার হাতে শুরু হয় না, তার হাতে থামেও না। এ প্রবন্ধ এগুলোকে একে একে নেবে। এ আয়াতের জন্য যে তাফসীরগুলো পড়া হয়েছে, প্রতিটি সম্পর্কে সেগুলো কী বলে তা দেখবে, তারপর যাবে আয়াতের শেষ কথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Darkness, Then Brightness",
          "bn": "অন্ধকার, তারপর আলো"
        },
        "p": [
          {
            "en": "At-Tabari reads ikhtilaf as succession, and he turns the phrase toward the listener: the alternation of night and day, O people, and their following one another upon you, this one with its darkness and blackness and that one with its light and brightness. The Muyassar keeps his words, their succession upon you. Ibn Kathir adds a pair of words that carry the weight: da'ibayn la yafturan, the two keep going and never slacken, the one with its darkness and the other with its light.",
            "bn": "তাবারী ইখতিলাফ শব্দের অর্থ নেন একটির পর আরেকটির আসা। আর কথাটা তিনি ঘুরিয়ে দেন শ্রোতার দিকে: হে মানুষ, রাত আর দিনের আবর্তন, তোমাদের উপর একটির পর আরেকটির আসা। একটি আসে তার আঁধার আর কালো নিয়ে, অন্যটি তার আলো আর ঔজ্জ্বল্য নিয়ে। মুয়াসসারও তাঁর কথাই রাখে: তোমাদের উপর পালা করে আসা। ইবন কাসীর দুটি শব্দ যোগ করেন, যার উপর পুরো ভার: দা'ইবাইনি লা ইয়াফতুরান। অর্থাৎ দুটি অবিরাম চলছে, কখনো ঢিলে পড়ে না, একটি তার অন্ধকার নিয়ে, অন্যটি তার আলো নিয়ে।"
          },
          {
            "en": "None of them says more here, and al-Qurtubi gives the reason for his own brevity: all of this, he says, was treated in full in Surah al-Baqara and elsewhere. The longer discussion of ikhtilaf belongs to 2:164, which has its own article. What 45:5 offers in these glosses is the address. In at-Tabari's wording the cycle is not described from the outside; it happens upon you, O people, every evening and every dawn, whether or not anyone stops to notice it.",
            "bn": "এখানে তাঁরা কেউ এর বেশি বলেন না। কুরতুবী নিজের সংক্ষেপের কারণও জানিয়ে দেন: এসবের পূর্ণ আলোচনা সূরা আল-বাকারায় ও অন্যত্র আগেই হয়ে গেছে। ইখতিলাফ নিয়ে দীর্ঘ আলোচনার জায়গা তাই ২:১৬৪, যার আলাদা প্রবন্ধ আছে। এই ব্যাখ্যাগুলোতে ৪৫:৫ যা দেয় তা হলো সম্বোধন। তাবারীর ভাষায় চক্রটিকে বাইরে থেকে বর্ণনা করা হয়নি। হে মানুষ, এটা ঘটছে তোমাদের উপর, প্রতি সন্ধ্যায়, প্রতি ভোরে, কেউ থেমে খেয়াল করুক বা না করুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Rain Called by Its Fruit",
          "bn": "ফলের নামে বৃষ্টির নাম"
        },
        "p": [
          {
            "en": "Then wa ma anzala Allahu mina as-sama'i min rizqin: and what Allah sends down from the sky of provision. The verse does not say water. Five of the commentaries fetched for this verse gloss the word, and all five identify the provision as rain. Al-Qurtubi and the Muyassar simply name it, al-matar. At-Tabari and al-Baghawi call it al-ghayth, and both say why it counts as provision: at-Tabari, because by it the earth brings out the provisions and food of Allah's servants; al-Baghawi, because it is the cause of those provisions.",
            "bn": "তারপর ওয়া মা আনযালাল্লাহু মিনাস সামা-ই মির রিযক: আর আল্লাহ আকাশ থেকে যে রিযিক নামান। আয়াত এখানে পানি বলেনি। এ আয়াতের জন্য পড়া তাফসীরগুলোর পাঁচটি শব্দটির ব্যাখ্যা দেয়, আর পাঁচটিই এই রিযিককে বৃষ্টি বলে চিনিয়েছে। কুরতুবী আর মুয়াসসার সরাসরি নাম বলে দেন: আল-মাতার, বৃষ্টি। তাবারী আর বাগাভী একে বলেন আল-গাইস, আর দুজনেই জানান কেন একে রিযিক বলা হলো। তাবারীর মতে, কারণ এর দ্বারাই যমীন আল্লাহর বান্দাদের রিযিক আর খাবার বের করে আনে। বাগাভীর মতে, কারণ বান্দাদের রিযিক আসে এরই মাধ্যমে।"
          },
          {
            "en": "Ibn Kathir states the reasoning in one clause: He called it rizq because by it rizq comes about. He adds a detail of timing as well. Allah sends the rain down from the clouds fi waqti al-hajati ilayhi, at the time it is needed. So five glosses agree on what the word points to, and three of them give the same logic for the name: the rain is called provision because provision grows from it.",
            "bn": "ইবন কাসীর যুক্তিটা এক বাক্যে বলে দেন: একে রিযিক বলা হয়েছে, কারণ এর দ্বারাই রিযিক হাসিল হয়। সময়ের একটা কথাও তিনি যোগ করেন। আল্লাহ মেঘ থেকে বৃষ্টি নামান ফী ওয়াকতিল হাজাতি ইলাইহি, যখন তার প্রয়োজন পড়ে। তাহলে শব্দটি কীসের দিকে ইশারা করছে, তা নিয়ে পাঁচটি ব্যাখ্যা একমত। আর নামকরণের একই যুক্তি দেন তাঁদের তিনজন: বৃষ্টিকে রিযিক বলা হয়েছে, কারণ রিযিক তা থেকেই জন্মায়।"
          },
          {
            "en": "Ibn Kathir also sets this verse beside 2:164 and quotes that verse in full, and Ma'arif al-Qur'an names the same parallel. Read side by side, the two show one difference of wording: where 2:164 says min ma'in, of water, 45:5 says min rizqin, of provision. None of the commentaries fetched here remarks on it. Ma'arif says only that the argument in the two places differs slightly, and points readers to ar-Razi's Tafsir Kabir for the finer points without giving them itself.",
            "bn": "ইবন কাসীর এ আয়াতকে ২:১৬৪-এর পাশে রাখেন এবং সে আয়াত পুরোটা উদ্ধৃত করেন। মাআরিফুল কুরআনও একই মিলের কথা বলে। দুটি পাশাপাশি পড়লে শব্দের একটা পার্থক্য চোখে পড়ে। ২:১৬৪ বলে মিম মা-ইন, পানি থেকে। আর ৪৫:৫ বলে মির রিযকিন, রিযিক থেকে। এখানে পড়া কোনো তাফসীর এ পার্থক্য নিয়ে কিছু বলে না। মাআরিফ শুধু এটুকু বলে যে দুই জায়গার যুক্তিতে সামান্য পার্থক্য আছে। সূক্ষ্ম দিকগুলোর জন্য পাঠককে সে পাঠায় রাযীর তাফসীরে কাবীরের কাছে, নিজে সেগুলো তুলে ধরে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ground That Lay Still",
          "bn": "যে মাটি নিথর পড়ে ছিল"
        },
        "p": [
          {
            "en": "Fa-ahya bihi al-arda ba'da mawtiha: and gives life by it to the earth after its death. At-Tabari's gloss is the fullest. The rain, he says, made the dead earth grow, until it stirred with plants and crops after its death, and he explains that death in three phrases: after its drought, its dearth, and its having become ground with no growth in it and no crop. The Muyassar says after its dryness, and keeps the same picture of the earth stirring with plants and crops.",
            "bn": "ফা-আহইয়া বিহিল আরদা বা'দা মাওতিহা: আর তা দিয়ে যমীনকে তার মৃত্যুর পর জীবিত করেন। তাবারীর ব্যাখ্যা সবচেয়ে বিস্তারিত। তিনি বলেন, বৃষ্টি মৃত যমীনে ফসল ফলাল, এমনকি মৃত্যুর পর সে চারা আর শস্যে নড়ে উঠল। সেই মৃত্যুকে তিনি খুলে বলেন তিনটি কথায়: খরার পর, অভাবের পর, আর এমন মাটি হয়ে যাওয়ার পর, যাতে না কোনো চারা গজায়, না কোনো ফসল। মুয়াসসার বলে, শুকিয়ে যাওয়ার পর। চারা আর শস্যে যমীনের নড়ে ওঠার ছবিটা সেও রেখে দেয়।"
          },
          {
            "en": "Ibn Kathir uses the word hamida: after it had lain still, with no plant in it and nothing at all. As-Sa'di's comment on this verse looks back over everything named. All of these, he says, are clear signs and plain proofs of the truthfulness of this great Qur'an and the soundness of the wisdom and rulings it contains, and they point as well to Allah's perfection and to the resurrection and the raising of the dead. He names the resurrection among what the signs show, and leaves it there.",
            "bn": "ইবন কাসীর ব্যবহার করেন হামিদা শব্দটি: যখন তা নিথর পড়ে ছিল, তাতে কোনো চারা ছিল না, কিছুই ছিল না। সা’দী এ আয়াতে এসে আগের সব কিছুর দিকে ফিরে তাকান। তিনি বলেন, এ সবই সুস্পষ্ট নিদর্শন আর পরিষ্কার দলিল। এগুলো প্রমাণ করে মহান এই কুরআন সত্য, আর তাতে যে হিকমত ও বিধান আছে তা সঠিক। এগুলো আরও নির্দেশ করে আল্লাহর পূর্ণতার দিকে, আর পুনরুত্থান ও হাশরের দিকে। নিদর্শনগুলো যা দেখায় তার মধ্যে তিনি পুনরুত্থানের নাম নেন, আর সেখানেই থামেন।"
          },
          {
            "en": "He does not set out how the signs show it, and this article does not supply the argument for him. What the verse's own words show is simpler. The same ground is called dead and then alive, and the change is credited to Allah through something sent down from above. Whoever has walked over cracked earth in a dry month and then over the same field after rain has seen the two words of the verse, mawt and ihya', on one patch of soil.",
            "bn": "নিদর্শনগুলো কীভাবে তা দেখায়, সে যুক্তি তিনি খুলে বলেন না, এ প্রবন্ধও তাঁর হয়ে সে যুক্তি সাজাবে না। আয়াতের নিজের শব্দ যা দেখায় তা আরও সরল। একই মাটিকে প্রথমে মৃত বলা হয়েছে, পরে জীবিত। আর বদলটা হয়েছে আল্লাহর কাজে, উপর থেকে নামানো এক জিনিসের মাধ্যমে। শুকনো মাসে ফাটা মাটির উপর দিয়ে যে হেঁটেছে, আবার বৃষ্টির পর সেই একই মাঠ পেরিয়েছে, সে আয়াতের দুটি শব্দ, মাওত আর ইহইয়া, এক টুকরো মাটিতেই দেখে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Winds From Every Quarter",
          "bn": "সব দিক থেকে বাতাস"
        },
        "p": [
          {
            "en": "Wa tasrifi ar-riyah: and the turning of the winds. At-Tabari reads it as Allah's turning of them for you: now north and now south, at times the saba and at others the dabur, li-manafi'ikum, for your benefit. The Muyassar says from every direction, and again for your benefit. Ibn Kathir gives the same four names, the south wind and the north, the dabur and the saba, the last pair appearing in his English abridgement as easterly and westerly winds.",
            "bn": "ওয়া তাসরীফির রিয়াহ: আর বাতাসের ঘুরিয়ে দেওয়া। তাবারী এর অর্থ নেন, তোমাদের জন্য আল্লাহ বাতাসকে ঘুরিয়ে দেন। কখনো উত্তরে, কখনো দক্ষিণে, কখনো সাবা, কখনো দাবূর, লি-মানাফি'ইকুম, তোমাদের উপকারের জন্য। মুয়াসসার বলে, সব দিক থেকে, আর সেও বলে তোমাদের উপকারের জন্য। ইবন কাসীরও এই চারটি নামই আনেন: দক্ষিণের বাতাস আর উত্তরের, দাবূর আর সাবা। তাঁর ইংরেজি সংক্ষেপে শেষ জোড়াটি এসেছে পূবালি আর পশ্চিমা বাতাস হিসেবে।"
          },
          {
            "en": "Ibn Kathir then sorts them in further ways: winds of the sea and winds of the land, winds of the night and winds of the day. And he sorts them by what they do. Some are for rain. Some are for liqah, pollination. Some are ghidha'un lil-arwah, nourishment for the spirits. And some are 'aqim, barren, producing nothing. He offers the list as his gloss on the single word tasrif, a description of variety drawn from what people could feel and see.",
            "bn": "এরপর ইবন কাসীর বাতাসকে আরও কয়েকভাবে ভাগ করেন: সাগরের বাতাস আর স্থলের বাতাস, রাতের বাতাস আর দিনের বাতাস। কাজ অনুযায়ীও ভাগ করেন। কোনোটা বৃষ্টির জন্য। কোনোটা লিকাহ, অর্থাৎ পরাগায়নের জন্য। কোনোটা গিযা'উন লিল-আরওয়াহ, প্রাণের খোরাক। আর কোনোটা 'আকীম, বন্ধ্যা, কিছুই জন্মায় না। তাসরীফ এই একটি শব্দের ব্যাখ্যা হিসেবেই তিনি তালিকাটা দেন। মানুষ যা গায়ে টের পায় আর চোখে দেখে, তা থেকেই বৈচিত্র্যের এই বর্ণনা।"
          },
          {
            "en": "That is where the article's own voice stops. None of the commentators consulted explains the winds through any modern science, and nothing is added to them here. What they give is a picture a listener in any age can check against his own day: wind from this side and then from that, by night and by day, sometimes bringing rain and sometimes bringing nothing. In at-Tabari's gloss the turning is His and the benefit is yours.",
            "bn": "প্রবন্ধের নিজের কথা এখানেই শেষ। যে তাফসীরকারদের পড়া হয়েছে, তাঁদের কেউ আধুনিক কোনো বিজ্ঞান দিয়ে বাতাসের ব্যাখ্যা দেননি, এখানেও তাঁদের কথার সঙ্গে কিছু জোড়া হচ্ছে না। তাঁরা যে ছবি দেন, যে কোনো যুগের শ্রোতা নিজের দিনের সঙ্গে তা মিলিয়ে নিতে পারে। বাতাস একবার এক দিক থেকে, তারপর অন্য দিক থেকে। রাতে আর দিনে। কখনো বৃষ্টি নিয়ে আসে, কখনো কিছুই আনে না। তাবারীর ব্যাখ্যায় ঘোরানোটা তাঁর, আর উপকারটা তোমাদের।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy if He Wills",
          "bn": "তিনি চাইলে রহমত"
        },
        "p": [
          {
            "en": "At-Tabari records a second reading, introduced with qad qila, it has been said: that the turning meant is the winds' being sent sometimes as mercy and sometimes as punishment. He names who said it, with his chain through Ma'mar to Qatada, whose words are short: its turning is that if He wills He makes it mercy, and if He wills He makes it punishment. At-Tabari reports it after his own gloss of directions and benefits, and adds nothing to it.",
            "bn": "তাবারী আরেকটি ব্যাখ্যা উল্লেখ করেন কাদ কীলা বলে, অর্থাৎ বলা হয়েছে: ঘুরিয়ে দেওয়া মানে বাতাসকে কখনো রহমত হিসেবে পাঠানো, কখনো আযাব হিসেবে। কে বলেছেন তাও তিনি জানান, মা'মার হয়ে কাতাদা পর্যন্ত নিজের সনদে। কাতাদার কথা ছোট্ট: বাতাসের ঘুরিয়ে দেওয়া হলো, তিনি চাইলে একে রহমত বানান, চাইলে আযাব বানান। দিক আর উপকার নিয়ে নিজের ব্যাখ্যার পরে তাবারী এটি উল্লেখ করেন, এর সঙ্গে আর কিছু যোগ করেন না।"
          },
          {
            "en": "The two readings fit the same three words. One looks at where the wind comes from, the other at what it brings. Ibn Kathir's list holds wind that brings rain and wind that is barren, though he does not use the word punishment. The 2:164 article takes up at-Tabari's longer treatment of the phrase there, and it is not repeated. Here Qatada's sentence is enough to change how a breeze is felt: the same air, sent by the same Lord, can arrive as either.",
            "bn": "একই তিনটি শব্দে দুটি ব্যাখ্যাই খাপ খায়। একটি দেখে বাতাস কোথা থেকে আসে, অন্যটি দেখে বাতাস কী নিয়ে আসে। ইবন কাসীরের তালিকায় বৃষ্টি আনা বাতাসও আছে, বন্ধ্যা বাতাসও আছে, যদিও আযাব শব্দটি তিনি ব্যবহার করেননি। ২:১৬৪ আয়াতে তাবারী এ বাক্যাংশ নিয়ে যে দীর্ঘ আলোচনা করেছেন, তা সে আয়াতের প্রবন্ধে এসেছে, এখানে আর বলা হচ্ছে না। এখানে কাতাদার একটি বাক্যই যথেষ্ট, মৃদু হাওয়াকেও তা অন্যভাবে অনুভব করায়। একই রবের পাঠানো একই বাতাস দুটোর যেকোনোটা হয়ে আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Third Ending Stands",
          "bn": "তৃতীয় সমাপ্তির জায়গা"
        },
        "p": [
          {
            "en": "Li-qawmin ya'qilun: for a people who reason. At-Tabari calls the signs adilla and hujaj, evidences and proofs of Allah against His creation, for people who understand from Allah His proofs and grasp what He admonishes them with. Read with 45:3 and 45:4, the ending completes a sequence: believers, the certain, those who reason. Ibn Kathir calls it a taraqqin, a rising from a noble state to one nobler and higher. On his account the people who reason, named in this verse, stand at the top.",
            "bn": "লি-কাওমিই ইয়া'কিলূন: সেই সম্প্রদায়ের জন্য, যারা বুদ্ধি খাটায়। তাবারী নিদর্শনগুলোকে বলেন আদিল্লা ও হুজাজ, সৃষ্টির উপর আল্লাহর দলিল ও প্রমাণ। এগুলো তাদের জন্য, যারা আল্লাহর কাছ থেকে তাঁর প্রমাণ বুঝে নেয়, আর তিনি যে উপদেশ দেন তা ধরতে পারে। ৪৫:৩ ও ৪৫:৪-এর সঙ্গে মিলিয়ে পড়লে এই সমাপ্তি একটি ধারা পূর্ণ করে: মু'মিন, নিশ্চিত বিশ্বাসী, বুদ্ধি খাটানো মানুষ। ইবন কাসীর একে বলেন তারাক্কী, এক মর্যাদাপূর্ণ অবস্থা থেকে তার চেয়েও উঁচু ও সম্মানিত অবস্থায় ওঠা। তাঁর হিসাবে এ আয়াতে যাদের নাম এসেছে, বুদ্ধি খাটানো সেই মানুষেরাই সবার উপরে।"
          },
          {
            "en": "Ma'arif al-Qur'an places the third ending differently. It sees all three as stylistic variations that also say who benefits. The third, it says, could benefit people who may not yet be believers, or firm in belief, but who have a sound heart to understand; if they search the signs with deep insight, they will in the end reach faith and firm belief. Here ya'qilun reaches furthest outward rather than highest up. The 45:4 article sets both readings out in full; neither is preferred.",
            "bn": "মাআরিফুল কুরআন তৃতীয় সমাপ্তিকে রাখে অন্য জায়গায়। তার চোখে তিনটিই বর্ণনাভঙ্গির ভিন্নতা, তবে এতে এটাও বলা আছে যে উপকার পাবে কারা। তৃতীয়টি সম্পর্কে সে বলে, এর উপকার পেতে পারে এমন মানুষও, যারা হয়তো এখনো মু'মিন নয়, বা বিশ্বাসে দৃঢ় নয়, কিন্তু যাদের বোঝার মতো সুস্থ অন্তর আছে। গভীর দৃষ্টি নিয়ে নিদর্শনগুলো খুঁজলে শেষ পর্যন্ত তারা ঈমান আর দৃঢ় বিশ্বাসে পৌঁছাবে। এখানে ইয়া'কিলূন সবচেয়ে উঁচুতে নয়, সবচেয়ে দূর পর্যন্ত পৌঁছায়। ৪৫:৪-এর প্রবন্ধে দুটি ব্যাখ্যা পুরোটা তুলে ধরা হয়েছে। কোনোটিকেই অগ্রাধিকার দেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Ways to Parse Ayatin",
          "bn": "আয়াতিন পড়ার তিন ব্যাকরণ"
        },
        "p": [
          {
            "en": "One grammatical point belongs to this verse. Al-Qurtubi reports that the general reading has ayatun at the end of both 45:4 and 45:5, while Hamza and al-Kisa'i read ayatin in both; the two readings are set out in the 45:4 article. In 45:5 the accusative needs more explaining, and he gives three accounts. Either the word is repeated because the sentence had grown long, as one says darabtu Zaydan Zaydan. Or fi is understood before wa-khtilafi, dropped because it was already said.",
            "bn": "ব্যাকরণের একটি প্রশ্ন বিশেষভাবে এ আয়াতের। কুরতুবী জানান, সাধারণ কিরাআতে ৪৫:৪ আর ৪৫:৫ দুটোর শেষেই আয়াতুন, আর হামযা ও কিসাঈ দুই জায়গাতেই পড়েন আয়াতিন। দুই কিরাআতের কথা ৪৫:৪-এর প্রবন্ধে এসেছে। ৪৫:৫-এ আয়াতিন কেন নসবের অবস্থানে, সেটা বেশি ব্যাখ্যা চায়, আর কুরতুবী তিনটি ব্যাখ্যা দেন। এক, কথা দীর্ঘ হয়ে যাওয়ায় শব্দটি আবার বলা হয়েছে, যেমন বলা হয় দারাবতু যাইদান যাইদান। দুই, ওয়াখতিলাফির আগে ফী উহ্য আছে। আগে একবার বলা হয়েছে বলে এখানে তা বাদ পড়েছে।"
          },
          {
            "en": "For that omission he cites a line of verse that Sibawayh quoted. The third account is 'atf 'ala 'amilayn, one conjunction serving two different governing words. Sibawayh did not allow it; al-Akhfash and a group of the Kufans did, and al-Qurtubi's text calls it ugly, since a conjunction stands in for one governing word and cannot stand in for two at once. For ayatun he allows a fresh sentence. And he adds that al-Farra' related both wa-khtilafu and ayatun in the nominative, making the alternation itself the signs.",
            "bn": "এই বাদ পড়ার পক্ষে তিনি একটি কবিতার চরণ আনেন, যা সিবাওয়াইহ উদ্ধৃত করেছিলেন। তিন, 'আতফ 'আলা 'আমিলাইন, অর্থাৎ একটি সংযোজক অব্যয় দুটি ভিন্ন নিয়ন্ত্রক শব্দের কাজ করছে। সিবাওয়াইহ এটা বৈধ মানেননি। আখফাশ আর কূফার একদল ব্যাকরণবিদ মেনেছেন। কুরতুবীর লেখায় একে বলা হয়েছে অসুন্দর, কারণ সংযোজক অব্যয় একটি নিয়ন্ত্রকের জায়গা নিতে পারে, একসঙ্গে দুটির নয়। আয়াতুন পড়ার বেলায় তিনি নতুন বাক্য ধরার সুযোগ রাখেন। তিনি আরও জানান, ফাররা ওয়াখতিলাফু আর আয়াতুন দুটোকেই পেশ দিয়ে বর্ণনা করেছেন। তাতে আবর্তনটাই হয়ে যায় নিদর্শন।"
          }
        ]
      },
      {
        "h": {
          "en": "An Ordinary Day, Read Slowly",
          "bn": "সাধারণ একটি দিন, ধীরে পড়া"
        },
        "p": [
          {
            "en": "Some things are absent from the sources, and saying so is part of reading them honestly. None of the commentaries fetched for this verse attaches a hadith to it, and none gives an occasion of revelation. Ibn Kathir notes that Ibn Abi Hatim brought here a long report from Wahb ibn Munabbih on the making of the human being from four humours, and he calls it gharib, strange. He does not reproduce it, and neither does this article.",
            "bn": "সূত্রগুলোতে কিছু জিনিস নেই, আর সেটা বলে দেওয়াও সৎভাবে পড়ার অংশ। এ আয়াতের জন্য পড়া কোনো তাফসীর এর সঙ্গে কোনো হাদীস জোড়েনি, কোনো শানে নুযূলও দেয়নি। ইবন কাসীর জানান, ইবন আবী হাতিম এখানে ওয়াহব ইবন মুনাব্বিহ থেকে একটি দীর্ঘ বর্ণনা এনেছেন, চারটি খিলত বা দেহরস থেকে মানুষ সৃষ্টির বিষয়ে। ইবন কাসীর একে বলেন গারীব, অদ্ভুত। তিনি বর্ণনাটি উদ্ধৃত করেন না, এ প্রবন্ধও করছে না।"
          },
          {
            "en": "What the verse leaves is a practice that fits into an ordinary day. Watch the light go at evening and return at dawn, and remember that it happens upon you. When rain falls, call it what the verse calls it, provision. When the wind shifts, recall that it can come as mercy, and ask for that. The next verse, 45:6, calls these the signs of Allah recited in truth, and asks in what statement after them people will believe. The hope is to be among those who reason, and to let the reasoning arrive somewhere.",
            "bn": "আয়াতটি যা রেখে যায়, তা এমন এক অভ্যাস যা সাধারণ একটি দিনেই ধরে যায়। সন্ধ্যায় আলো চলে যাওয়া আর ভোরে ফিরে আসা দেখুন, আর মনে রাখুন এটা ঘটছে আপনার উপর। বৃষ্টি নামলে তাকে সেই নামে ডাকুন যে নামে আয়াত ডেকেছে: রিযিক। বাতাস দিক বদলালে মনে করুন, তা রহমত হয়েও আসতে পারে, আর রহমতটাই চেয়ে নিন। পরের আয়াত, ৪৫:৬, এগুলোকে বলে আল্লাহর আয়াত, যা সত্যসহ তিলাওয়াত করা হয়। আর প্রশ্ন করে, এরপর তারা কোন কথায় ঈমান আনবে? আশা এটুকুই, যারা বুদ্ধি খাটায় তাদের মধ্যে থাকা, আর সেই চিন্তাকে কোথাও না কোথাও পৌঁছাতে দেওয়া।"
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
            "bn": "এর আগের পাঁচটি আয়াত কঠিন। ৪৫:৭ আয়াত প্রত্যেক পাপী মিথ্যুকের ধ্বংস ঘোষণা করে। ৪৫:৮ আয়াতে এমন লোকের ছবি, যার সামনে আল্লাহর আয়াত পড়া হয়, তবু সে অহংকারে অটল থাকে, যেন কিছুই শোনেনি। ৪৫:৯ আয়াত বলে, সে আয়াতগুলোকে ঠাট্টার বস্তু বানায়। ৪৫:১১ আয়াতে এ পর্বের শেষ কথা: এটা হিদায়াত, আর যারা রবের আয়াত অস্বীকার করে তাদের জন্য যন্ত্রণাদায়ক শাস্তি। এরপর কোনো ভূমিকা ছাড়াই ৪৫:১২ শুরু হয় আল্লাহর নাম আর একটি সমুদ্র দিয়ে। যে মুখ ফিরিয়ে নিল, সূরা তার বর্ণনা থামিয়ে দেখাতে শুরু করে সে আসলে কী থেকে মুখ ফেরাল।"
          },
          {
            "en": "At-Tabari reads the opening word as a claim in its own right. Allah, O people, he paraphrases, is the One to whom alone godhood is fitting, the One who has bestowed on you these favours that He has made clear in these verses. The favour he then names is the sea made to serve. Those earlier verses describe a type, the arrogant hearer, as the text itself describes him; they license nothing against any living person or community. The reader's part is to check which way he himself is facing when the verses are recited.",
            "bn": "তাবারী শুরুর শব্দটিকেই একটা স্বতন্ত্র দাবি হিসেবে পড়েন। তাঁর ব্যাখ্যায়: হে লোকেরা, আল্লাহ তিনিই, উলূহিয়্যাত একমাত্র যাঁর জন্যই শোভা পায়, যিনি তোমাদের এই নিয়ামতগুলো দিয়েছেন এবং এই আয়াতগুলোতে তা স্পষ্ট করে বলেছেন। এরপর তিনি যে নিয়ামতের নাম নেন, তা হলো সেবায় লাগানো সমুদ্র। আগের আয়াতগুলো এক ধরনের মানুষের ছবি আঁকে, অহংকারী শ্রোতার, আয়াত নিজে যেভাবে তাকে এঁকেছে। এ দিয়ে জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অধিকার কারও জন্মায় না। পাঠকের কাজ হলো, আয়াত তিলাওয়াত হওয়ার সময় তিনি নিজে কোন দিকে মুখ করে আছেন, তা যাচাই করা।"
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
            "bn": "লিতাজরিয়াল ফুলকু ফীহি বিআমরিহী: যাতে তাঁর হুকুমে নৌযানগুলো তাতে চলে। ইবন কাসীর আল-ফুলকের অর্থ বলেন সোজা কথায়: জাহাজ। তারপর বিআমরিহীর ব্যাখ্যায় এমন একটা বাক্য আনেন, যা হুকুমটাকে সমুদ্রের ঘাড়েই রাখে: তিনিই সমুদ্রকে আদেশ করেছেন জাহাজগুলো বহন করতে। এই পাঠে আদেশটা জাহাজের প্রতি নয়, তার নির্মাতা বা মাঝিমাল্লার প্রতিও নয়। আদেশ গেছে নিচের পানির কাছে, আর পানি সেটাই বয়ে নেয় যা বইতে তাকে বলা হয়েছে।"
          },
          {
            "en": "As-Sa'di pairs the command with a second word. The sea is subjected, he writes, for the passage of vessels and ships by His command and His taysir, His making it easy. The pairing is worth holding on to. Command names the authority behind the passage; ease names how it feels to the traveller, a crossing that goes smoothly. At-Tabari and the Muyassar repeat the phrase by His command without expanding it, and neither the Arabic texts consulted for this verse nor Ma'arif dwells on wind, storm or wreck here.",
            "bn": "সা'দী হুকুমের সঙ্গে আরেকটি শব্দ জুড়ে দেন। তিনি লেখেন, নৌযান ও জাহাজের চলাচলের জন্য সমুদ্রকে বশ করা হয়েছে তাঁর হুকুমে এবং তাঁর তাইসীরে, অর্থাৎ সহজ করে দেওয়ায়। জোড়াটা মনে রাখার মতো। হুকুম বলে দেয় চলাচলের পেছনে কার কর্তৃত্ব। আর সহজ করে দেওয়া বলে, মুসাফিরের কাছে পারাপারটা কেমন লাগে: নির্বিঘ্ন। তাবারী আর মুয়াসসার বিআমরিহী কথাটা শুধু পুনরাবৃত্তি করেন, বিস্তারে যান না। এ আয়াতের জন্য আনা আরবি তাফসীরগুলো বা মাআরিফ, কোনোটিই এখানে বাতাস, ঝড় বা জাহাজডুবির আলোচনায় যায় না।"
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
            "bn": "সা'দী আয়াতের ব্যাখ্যা শুরু করেন তার কাঠামো দিয়ে: আল্লাহ জানাচ্ছেন বান্দাদের প্রতি তাঁর ফযল আর ইহসানের কথা, অর্থাৎ তাঁর অনুগ্রহ ও দয়ার কথা, সমুদ্রকে বশ করে দেওয়ার মধ্য দিয়ে। এরপর আয়াত মানুষকে পাঠায় মিন ফাদলিহী, তাঁর অনুগ্রহ থেকে খুঁজে নিতে। ফলে সা'দীর ভাষায় একই শব্দ দাঁড়িয়ে আছে দুই প্রান্তে। কেউ একবার বৈঠা ফেলার আগেই সেবায় লাগানো সমুদ্র এক অনুগ্রহ। আর সেখান থেকে মানুষ যা ঘরে আনে, তাও অনুগ্রহ। মানুষের চেষ্টা চলে এমন এক দয়ার ভেতরে, যা আগে থেকেই ছিল।"
          },
          {
            "en": "Al-Qurtubi's whole comment is one sentence, and it points the same way. The verse, he says, mentions the perfection of His power and the completeness of His favour upon His servants, and makes clear that He created what He created for their benefit. That last clause is the weight of the word lakum, for you, near the start of the verse. The sea was not subjected for its own sake or left to chance. It was made, in al-Qurtubi's word, for the benefit of His servants.",
            "bn": "কুরতুবীর পুরো মন্তব্যটা একটিমাত্র বাক্য, আর তা একই দিকে ইশারা করে। তিনি বলেন, আয়াতটি তাঁর কুদরতের পূর্ণতা আর বান্দাদের প্রতি তাঁর নিয়ামতের পরিপূর্ণতার কথা বলে, আর স্পষ্ট করে যে তিনি যা সৃষ্টি করেছেন তা তাদের উপকারের জন্যই করেছেন। আয়াতের শুরুর দিকে আছে লাকুম, অর্থাৎ তোমাদের জন্য। শব্দটির ভার এই শেষ কথাতেই। সমুদ্রকে বশ করার উদ্দেশ্য সমুদ্র নিজে নয়, আবার তাকে ভাগ্যের হাতেও ছেড়ে দেওয়া হয়নি। কুরতুবীর ভাষায়, তাকে বানানো হয়েছে তাঁর বান্দাদের উপকারের জন্য।"
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
            "en": "Wa-li-tabtaghu min fadlihi: and so that you may seek of His bounty. The commentators consulted here give the clause a narrow, concrete content. Ibn Kathir says: in trades and earnings, al-matajir wa-l-makasib. The Muyassar and as-Sa'di use almost the same words, with the various kinds of trade and earning. None of the three lists cargoes, catches or goods. They leave the bounty as a category, the many ways a person earns, and let the reader fill it from his own life.",
            "bn": "ওয়ালিতাবতাগূ মিন ফাদলিহী: আর যাতে তোমরা তাঁর অনুগ্রহ তালাশ কর। এখানে আনা তাফসীরগুলোতে এ অংশের অর্থ সীমিত, একেবারে বাস্তব। ইবন কাসীর বলেন: ব্যবসা-বাণিজ্য আর উপার্জনে, আল-মাতাজির ওয়াল-মাকাসিব। মুয়াসসার আর সা'দী প্রায় একই কথা বলেন: নানা রকম ব্যবসা ও উপার্জনের মাধ্যমে। জাহাজের মাল, ধরা মাছ বা পণ্যের কোনো তালিকা তিনজনের কেউই দেন না। অনুগ্রহকে তাঁরা একটা শ্রেণি হিসেবেই রেখে দেন, মানুষ যত উপায়ে রোজগার করে। বাকিটা পাঠক নিজের জীবন থেকে মিলিয়ে নেবেন।"
          },
          {
            "en": "At-Tabari ties the seeking more tightly to the ships. The vessels run by His command, he says, for your livelihoods, li-ma'ayishikum, and your moving about in the lands, wa-tasarrufikum fi l-bilad, to seek His bounty in them. In his paraphrase the sailing is not an end in itself. It serves two human needs at once: making a living, and being able to go from one land to another. The sea becomes a road, and the bounty is found at the far end of it, in the lands it opens.",
            "bn": "তাবারী খোঁজাকে জাহাজের সঙ্গে আরও শক্ত করে বাঁধেন। তাঁর ভাষায়, নৌযানগুলো তাঁর হুকুমে চলে তোমাদের জীবিকার জন্য, লিমাআয়িশিকুম, আর দেশে দেশে তোমাদের চলাফেরার জন্য, ওয়া তাসাররুফিকুম ফিল বিলাদ, যাতে সেখানে তাঁর অনুগ্রহ খুঁজতে পার। তাঁর ব্যাখ্যায় জাহাজ চলা নিজেই লক্ষ্য নয়। তা একসঙ্গে মানুষের দুটি প্রয়োজন মেটায়: রুজি রোজগার, আর এক দেশ থেকে আরেক দেশে যেতে পারা। সমুদ্র হয়ে যায় একটা পথ, আর অনুগ্রহ মেলে সেই পথের ওপারে, যে দেশগুলো সে খুলে দেয় সেখানে।"
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
            "bn": "মাআরিফুল কুরআন ৪৫:১২ ও ৪৫:১৩ আয়াত একসঙ্গে আলোচনা করে, আর এ অংশটি বোঝার একাধিক পথ সামনে রাখে। প্রথমত, তার কথায়, কুরআন সাধারণত যখন তাঁর অনুগ্রহ তালাশ করার কথা বলে, তখন বোঝায় জীবিকার জন্য খাটাখাটনি করা। দ্বিতীয়ত, কথাটার অর্থ হতে পারে যে মানুষকে পানির উপর নৌকা চালানো আর জাহাজ পরিচালনার দক্ষতা দেওয়া হয়েছে, যাতে সে দুনিয়াজুড়ে বাণিজ্য চালাতে পারে। দুটো অর্থই খোঁজাকে রাখে কাজ আর ব্যবসার কাছাকাছি।"
          },
          {
            "en": "The third sense, Ma'arif says, is possible because seeking grace may have nothing to do with the sailing of boats at all. Subjugating the sea then has a special meaning: Allah created many useful things in the sea and subjugated it for mankind's benefit, so that they may draw out its minerals and other wealth. Ma'arif adds a remark of its own about how much the oceans hold; that is its observation, not something the Arabic commentaries consulted for this verse say. It leaves the three senses side by side without choosing.",
            "bn": "মাআরিফ বলে, তৃতীয় অর্থটিও সম্ভব, কারণ অনুগ্রহ তালাশের সঙ্গে নৌকা বা জাহাজ চলার হয়তো কোনো সম্পর্কই নেই। তখন সমুদ্রকে বশ করার একটা বিশেষ অর্থ দাঁড়ায়: আল্লাহ সমুদ্রে বহু উপকারী জিনিস সৃষ্টি করেছেন আর মানুষের কল্যাণে তাকে বশ করে দিয়েছেন, যাতে তারা তার খনিজ ও অন্যান্য সম্পদ বের করে আনতে পারে। সাগরে কত সম্পদ লুকিয়ে আছে, সে বিষয়ে মাআরিফ নিজের একটা মন্তব্যও যোগ করে। সেটা তার নিজের পর্যবেক্ষণ, এ আয়াতের জন্য আনা আরবি তাফসীরগুলোর কথা নয়। তিনটি অর্থকে সে পাশাপাশি রেখে দেয়, কোনোটিকে বেছে নেয় না।"
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
            "en": "Wa-la'allakum tashkurun: and perhaps you will be grateful. Grateful for what, exactly? The commentators consulted here answer from slightly different places, and their answers sit together without contradiction. Ibn Kathir points to the goods. The thanks is for obtaining the benefits brought to you from distant regions and far horizons, min al-aqalim an-na'iya wa-l-afaq al-qasiya. His eye is on the arrival: what reaches a person across water he did not cross himself, from places he may never see.",
            "bn": "ওয়া লাআল্লাকুম তাশকুরূন: আর হয়তো তোমরা শোকর করবে। কিন্তু শোকর ঠিক কীসের জন্য? এখানে যাঁদের তাফসীর আনা হয়েছে, তাঁরা উত্তর দেন একটু ভিন্ন ভিন্ন দিক থেকে। তবু উত্তরগুলো পরস্পরবিরোধী নয়, পাশাপাশিই থাকে। ইবন কাসীর দেখান মালামালের দিকে। তাঁর মতে শোকর হলো দূরদূরান্তের অঞ্চল আর দূরতম দিগন্ত থেকে তোমাদের কাছে বয়ে আনা উপকারগুলো পাওয়ার জন্য, মিনাল আকালীমিন না-ইয়া ওয়াল আফাকিল কাসিয়া। তাঁর নজর জিনিস এসে পৌঁছানোর দিকে: যে সাগর মানুষ নিজে পাড়ি দেয়নি, তা পেরিয়ে এমন সব জায়গা থেকে জিনিস তার হাতে আসে, যা সে হয়তো কোনোদিন চোখেও দেখবে না।"
          },
          {
            "en": "At-Tabari and the Muyassar point instead to the subjection itself, and then say what the thanks consists of. At-Tabari: so that you thank your Lord for His subjecting that to you, and so worship Him and obey Him in what He commands you and forbids you. The Muyassar uses nearly the same sentence and adds one word, wahdahu: worship Him alone. In both, gratitude is not left as a feeling. It is spelled out as worship and obedience, the opposite of the arrogant persistence of the hearer in 45:8.",
            "bn": "তাবারী আর মুয়াসসার আঙুল তোলেন খোদ বশ করে দেওয়ার দিকে, তারপর বলে দেন শোকর আসলে কী দিয়ে হয়। তাবারীর কথা: যাতে তোমাদের জন্য এটা বশ করে দেওয়ার কারণে তোমরা রবের শোকর কর, অর্থাৎ তাঁর ইবাদত কর আর তিনি যা আদেশ করেন ও যা নিষেধ করেন তাতে তাঁর আনুগত্য কর। মুয়াসসার প্রায় একই বাক্য বলে, শুধু একটা শব্দ যোগ করে, ওয়াহদাহু: কেবল তাঁরই ইবাদত কর। দুজনের কাছেই শোকর শুধু একটা অনুভূতি হয়ে থাকে না। তা খুলে বলা হয় ইবাদত আর আনুগত্য হিসেবে, ৪৫:৮ আয়াতের শ্রোতার অহংকারী জেদের ঠিক উল্টো।"
          },
          {
            "en": "As-Sa'di looks forward, to what thanks brings. Thank Allah, he writes, for if you thank Him He will increase you in His favours and reward you for your gratitude with an abundant reward. So the three answers line up along a single path: notice the goods that arrived, recognise the One who arranged their arrival, and answer Him with worship and obedience, and the gift does not end there but grows. None of the commentators here claims that any one of these is the only meaning of the clause.",
            "bn": "সা'দী তাকান সামনের দিকে, শোকর কী এনে দেয় সেদিকে। তিনি লেখেন, আল্লাহর শোকর কর, কারণ শোকর করলে তিনি তোমাদের নিয়ামত বাড়িয়ে দেবেন আর শোকরের বিনিময়ে বিপুল প্রতিদান দেবেন। তাহলে তিনটি উত্তর এক পথেই সাজানো: যে মালামাল এসে পৌঁছাল তা খেয়াল করা, যিনি তা পৌঁছানোর ব্যবস্থা করলেন তাঁকে চেনা, আর ইবাদত ও আনুগত্য দিয়ে তাঁকে জবাব দেওয়া। তাতে দান সেখানেই থেমে যায় না, বাড়তে থাকে। এখানকার কোনো তাফসীরকারই দাবি করেন না যে এর যেকোনো একটিই এ অংশের একমাত্র অর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Commentaries Stop",
          "bn": "যেখানে তাফসীর থেমে যায়"
        },
        "p": [
          {
            "en": "It is worth saying plainly what these texts do not do. Al-Baghawi, in the text consulted for this verse, simply quotes it and adds no comment. None of the commentaries consulted here cites a parallel verse for 45:12, attaches a hadith to it, or reports an occasion of revelation for it, so this article offers none. None of them mentions fishing, pearls or ornaments under this verse, and none describes storms or the fear of drowning here. Whatever other passages may hold, these comments on 45:12 do not go there.",
            "bn": "এই তাফসীরগুলো কী করে না, সেটাও সোজাসুজি বলা দরকার। এ আয়াতের জন্য আনা বাগাভীর লেখায় তিনি শুধু আয়াতটি উদ্ধৃত করেন, কোনো মন্তব্য যোগ করেন না। আনা তাফসীরগুলোর কোনোটিই ৪৫:১২ আয়াতের সঙ্গে কাছাকাছি অর্থের কোনো আয়াত মেলায় না, কোনো হাদিস জুড়ে দেয় না, নাজিলের কোনো প্রেক্ষাপটও বলে না। তাই এ লেখাতেও সেসব নেই। এ আয়াতের আলোচনায় মাছ ধরা, মুক্তা বা অলংকারের কথা তাঁরা কেউ আনেন না, ঝড় বা ডুবে মরার ভয়ের কথাও এখানে বলেন না। অন্য আয়াতে যা-ই থাকুক, ৪৫:১২ নিয়ে এই মন্তব্যগুলো সেদিকে যায় না।"
          },
          {
            "en": "What they do say is enough to read the verse by. Ibn Kathir's abridged English edition sets 45:12 under a heading that calls the subjection of the sea one of Allah's signs, and the very next verse, 45:13, widens the same subjection to whatever is in the heavens and on the earth. That wider claim has its own treatment. Here the commentators keep to one element, one command, one kind of seeking and one hoped-for response, and the verse is better served by staying with that than by importing what it does not mention.",
            "bn": "তাঁরা যা বলেন, আয়াতটি পড়ার জন্য তাই যথেষ্ট। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪৫:১২ আয়াতকে রাখে এমন এক শিরোনামের নিচে, যা সমুদ্রকে বশ করে দেওয়াকে আল্লাহর নিদর্শনগুলোর একটি বলে। আর ঠিক পরের আয়াত, ৪৫:১৩, এই বশ করে দেওয়াকে বিস্তৃত করে আকাশ ও পৃথিবীর সবকিছু পর্যন্ত। সেই বড় দাবির আলোচনা আলাদা। এখানে তাফসীরকারেরা থাকেন একটি উপাদান, একটি হুকুম, এক ধরনের খোঁজা আর একটি প্রত্যাশিত সাড়া নিয়ে। আয়াত যা বলেনি তা বাইরে থেকে টেনে আনার চেয়ে এর মধ্যে থাকাই আয়াতের প্রতি বেশি সুবিচার।"
          }
        ]
      },
      {
        "h": {
          "en": "Tracing What Arrives",
          "bn": "যা এসে পৌঁছায় তার খোঁজ"
        },
        "p": [
          {
            "en": "The verse can be read in a day's ordinary objects. Take Ibn Kathir's phrase about benefits brought from distant regions and ask of a few things in your house where they came from and what they crossed to reach you. You did not cross that distance. Someone set out to seek a living, and on the commentators' reading the road he used was held open by a command he did not give. Answering that question honestly, item by item, is the first of the three steps the commentators set out together.",
            "bn": "আয়াতটি পড়া যায় দিনের সাধারণ জিনিসপত্রের মধ্যেও। দূরদূরান্তের অঞ্চল থেকে বয়ে আনা উপকার নিয়ে ইবন কাসীরের কথাটা মনে রেখে ঘরের কয়েকটা জিনিসকে জিজ্ঞেস করুন: কোথা থেকে এলে, আমার কাছে পৌঁছাতে কী কী পার হলে? সেই দূরত্ব আপনি পার হননি। কেউ রুজির খোঁজে বেরিয়েছিল। আর তাফসীরকারদের পাঠে, সে যে পথ ধরেছিল তা খোলা রেখেছিল এমন এক হুকুম, যা সে নিজে দেয়নি। এক এক করে সৎভাবে এ প্রশ্নের উত্তর দেওয়াই তাফসীরকারদের একসঙ্গে দেখানো তিনটি ধাপের প্রথমটি।"
          },
          {
            "en": "The second and third steps are harder because they reach into conduct. At-Tabari and the Muyassar make gratitude a matter of worshipping Allah and obeying Him in what He commands and forbids. That puts the question into the seeking itself. If the bounty you go out for is His, then how you seek it is part of how you thank Him for it. A living earned in disobedience sits awkwardly beside the words la'allakum tashkurun, because the thanks the verse hopes for is shown in obedience.",
            "bn": "দ্বিতীয় আর তৃতীয় ধাপ কঠিন, কারণ তা আচরণের ভেতরে ঢুকে পড়ে। তাবারী আর মুয়াসসার শোকরকে বানান আল্লাহর ইবাদত আর তাঁর আদেশ-নিষেধ মানার বিষয়। ফলে প্রশ্নটা খোঁজার ভেতরেই চলে আসে। যে অনুগ্রহের খোঁজে আপনি বের হন তা যদি তাঁরই হয়, তবে কীভাবে খুঁজছেন সেটাও তাঁর শোকরেরই অংশ। নাফরমানির পথে কামানো রুজি লাআল্লাকুম তাশকুরূন কথাটার পাশে বেমানান দাঁড়ায়, কারণ আয়াত যে শোকরের আশা করে তা প্রকাশ পায় আনুগত্যে।"
          },
          {
            "en": "And as-Sa'di's promise turns the whole exercise from duty into hope. Thanks, he says, brings increase and an abundant reward. The verse began right after a portrait of someone who heard the signs and walked past them. It ends by asking you to do the opposite with something as plain as water: look at it, see whose command holds it, earn your share of His bounty in a way He approves, and say thank you in the form of obedience. That is a small enough practice to begin today.",
            "bn": "আর সা'দীর প্রতিশ্রুতি পুরো ব্যাপারটাকে দায় থেকে আশায় নিয়ে যায়। তাঁর কথায়, শোকর বাড়তি নিয়ামত আর বিপুল প্রতিদান আনে। আয়াতটা শুরু হয়েছিল এমন এক লোকের ছবির ঠিক পরে, যে নিদর্শন শুনেও পাশ কাটিয়ে চলে গেছে। শেষ হয় আপনাকে উল্টোটা করতে বলে, পানির মতো সাদামাটা একটা জিনিস দিয়ে। তাকিয়ে দেখুন, বুঝুন কার হুকুম তাকে ধরে রেখেছে, তাঁর অনুগ্রহ থেকে নিজের ভাগ রোজগার করুন তাঁর পছন্দের পথে, আর আনুগত্যের রূপে বলুন: শুকরিয়া। অভ্যাসটা এতই ছোট যে আজই শুরু করা যায়।"
          }
        ]
      }
    ]
  },
  "45:13": {
    "sections": [
      {
        "h": {
          "en": "From the Sea to Everything",
          "bn": "সমুদ্র থেকে সবকিছুতে"
        },
        "p": [
          {
            "en": "Wa sakhkhara lakum ma fi al-samawati wa ma fi al-ardi jami'an minhu: and He has subjected to you whatever is in the heavens and whatever is on the earth, all of it from Him. The verse opens with and, carrying on the sentence of 45:12, where Allah subjected the sea so that ships run on it by His command. Ibn Kathir introduces the pair as some of the favours Allah gave His servants, and at-Tabari, closing his comment here, speaks of what Allah subjected to you in these two verses.",
            "bn": "ওয়া সাখখারা লাকুম মা ফিস সামাওয়াতি ওয়া মা ফিল আরদি জামী'আন মিনহু: আর আকাশে যা আছে আর জমিনে যা আছে, সবই তিনি তোমাদের কাজে লাগিয়ে দিয়েছেন, সবই তাঁর পক্ষ থেকে। আয়াতের শুরু 'আর' দিয়ে। অর্থাৎ কথাটা ৪৫:১২ আয়াতেরই ধারাবাহিকতা, যেখানে আল্লাহ সমুদ্রকে বশ করে দিয়েছেন, যাতে তাঁর হুকুমে তাতে জাহাজ চলে। ইবন কাসীর এ দুই আয়াতকে পরিচয় করান বান্দাদের প্রতি আল্লাহর কিছু অনুগ্রহের বিবরণ হিসেবে। তাবারীও এখানে আলোচনা শেষ করতে গিয়ে বলেন, এই দুই আয়াতে আল্লাহ তোমাদের জন্য যা বশ করে দিয়েছেন বলে জানিয়েছেন।"
          },
          {
            "en": "Around the pair, the surah is busy with other things. Before 45:12 it describes the man who hears Allah's verses recited and persists in arrogance as if he had not heard them, and 45:11 calls this Qur'an guidance. After it, 45:14 tells the believers to forgive those who do not hope for the days of Allah. Between the warning and the forbearance, these two verses set out what has already been given, and this verse widens the gift from the sea to everything above and below. It ends: in that are signs for a people who reflect.",
            "bn": "এ দুই আয়াতের আশপাশে সূরার আলোচনা অন্য দিকে। ৪৫:১২-এর আগে আছে সেই লোকের কথা, যে আল্লাহর আয়াত তিলাওয়াত শোনে, তারপর অহংকারে অটল থাকে, যেন শোনেইনি। ৪৫:১১ আয়াত বলে, এই কুরআন হিদায়াত। পরে ৪৫:১৪ আয়াত মুমিনদের বলে, যারা আল্লাহর দিনগুলোর আশা রাখে না তাদের ক্ষমা করে দিতে। সতর্কবাণী আর ক্ষমার মাঝখানে এ দুই আয়াত গুনে দেখায় কী কী আগেই দেওয়া হয়ে গেছে। আর এই আয়াত দানের পরিধি সমুদ্র থেকে বাড়িয়ে নিয়ে যায় উপরে-নিচে সবকিছুতে। শেষ কথা: এতে চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sun, Beast and Mountain",
          "bn": "সূর্য, প্রাণী আর পাহাড়"
        },
        "p": [
          {
            "en": "The commentators fill the two halves of the verse with examples, and their lists differ in length. At-Tabari puts the sun, the moon and the stars in the heavens; on the earth he names beasts, trees, mountains, inanimate things and ships, all subjected for your benefits and your interests. Al-Muyassar keeps nearly the same list: sun, moon and stars above, beasts, trees and ships below, and more besides, for your benefit. Ibn Kathir names the stars, the mountains, the seas and the rivers, and all that you put to use.",
            "bn": "তাফসীরকারেরা আয়াতের দুই অংশ ভরে দেন উদাহরণ দিয়ে, তবে কারও তালিকা লম্বা, কারও ছোট। তাবারীর মতে আকাশে আছে সূর্য, চাঁদ আর তারকা। জমিনে তিনি গোনেন জীবজন্তু, গাছপালা, পাহাড়, জড়বস্তু আর নৌযান। এ সবই বশ করা হয়েছে তোমাদের উপকার আর কল্যাণের জন্য। মুয়াসসারের তালিকাও প্রায় একই: উপরে সূর্য, চাঁদ, তারা, নিচে জীবজন্তু, গাছপালা, নৌযান, আরও অনেক কিছু, সবই তোমাদের উপকারে। ইবন কাসীর নাম করেন তারকারাজি, পাহাড়, সাগর আর নদীর, সঙ্গে সেই সবকিছুর, যা তোমরা কাজে লাগাও।"
          },
          {
            "en": "As-Sa'di draws the widest circle. The verse, he says, covers the bodies of the heavens and the earth themselves, and what Allah placed in them: the sun and the moon, the stars fixed and moving, the kinds of animals, the varieties of trees and fruits, the classes of minerals and other things besides. All of it, in his words, is made ready for the interests of the children of Adam, and for the interests of whatever their own necessities depend on.",
            "bn": "সবচেয়ে বড় বৃত্তটা আঁকেন সা'দী। তাঁর কথায়, আয়াতের আওতায় পড়ে আকাশ আর জমিনের নিজস্ব দেহ, আর আল্লাহ এ দুয়ের ভেতরে যা রেখে দিয়েছেন তা-ও। সূর্য, চাঁদ, স্থির আর চলমান তারকা, নানা জাতের প্রাণী, নানা রকম গাছ ও ফল, নানা শ্রেণির খনিজ, আরও কত কী। তিনি বলেন, এ সবকিছু প্রস্তুত রাখা হয়েছে আদম সন্তানের কল্যাণের জন্য। শুধু তাদের নয়, তাদের জীবনের প্রয়োজন যেসব জিনিসের উপর নির্ভর করে, সেগুলোর কল্যাণের জন্যও।"
          },
          {
            "en": "What does subjected mean, when nobody rides a star? Al-Baghawi answers in one line: the meaning of their subjection is that He created them for our benefit, so a thing is subjected to us in the sense that we draw benefit from it. At-Tabari adds a phrase in his comment on the verse's ending: these are things that none but Allah is able to subject. The serving is real, and the commentators never let it drift loose from the One who set it serving.",
            "bn": "তারার পিঠে তো কেউ চড়ে না, তাহলে বশ করা মানে কী? বাগাভী জবাব দেন একটিমাত্র বাক্যে: এগুলোকে বশ করার অর্থ, আল্লাহ এগুলো সৃষ্টি করেছেন আমাদের উপকারের জন্য। কাজেই কোনো জিনিস আমাদের বশীভূত এই অর্থে যে আমরা তা থেকে উপকার পাই। আয়াতের শেষাংশের আলোচনায় তাবারী আরেকটি কথা যোগ করেন: এগুলো এমন জিনিস, যা আল্লাহ ছাড়া আর কেউ বশ করতে পারে না। সেবাটা সত্যি। কিন্তু যিনি এগুলোকে সেবায় লাগিয়েছেন, তাঁর থেকে তাফসীরকারেরা সেবাকে কখনো আলাদা করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "All of It, From Him",
          "bn": "সবটাই তাঁর পক্ষ থেকে"
        },
        "p": [
          {
            "en": "Then come the two words jami'an minhu. On the reading of the majority, jami'an gathers everything just listed and minhu names its source. At-Tabari paraphrases: all that I have mentioned to you of these favours, O people, are favours from Allah that He bestowed on you, and a bounty from Him with which He favoured you. Al-Qurtubi says it is His act and His creation, and kindness and favour from Him. As-Sa'di reads minhu as from His bounty and His kindness.",
            "bn": "এরপর আসে দুটি শব্দ: জামী'আন মিনহু। অধিকাংশ কারীর পাঠে জামী'আন এইমাত্র গোনা সবকিছুকে এক জায়গায় জড়ো করে, আর মিনহু বলে দেয় এগুলো কোথা থেকে এল। তাবারী অর্থটা খুলে বলেন এভাবে: হে মানুষ, এসব নিয়ামতের যা কিছু তোমাদের কাছে উল্লেখ করেছি, সবই আল্লাহর দেওয়া নিয়ামত, যা তিনি তোমাদের দান করেছেন, তাঁর অনুগ্রহ, যা দিয়ে তিনি তোমাদের ধন্য করেছেন। কুরতুবী বলেন, এ তাঁরই কাজ, তাঁরই সৃষ্টি, তাঁর পক্ষ থেকে ইহসান ও নিয়ামত। সা'দী মিনহু-র অর্থ করেন: তাঁর অনুগ্রহ ও ইহসান থেকে।"
          },
          {
            "en": "Ibn Kathir takes the words in two steps. All of it, he says, is from His bounty, His kindness and His favour; then jami'an minhu means from Him alone, with no partner sharing in it. He sets beside it 16:53: and whatever blessing you have, it is from Allah; then when harm touches you, it is to Him that you cry for help. The cited verse ties both ends to one address. The blessing comes from Him, and in hardship it is to Him that people cry.",
            "bn": "ইবন কাসীর শব্দ দুটি ধরেন দুই ধাপে। প্রথমে বলেন, সবই তাঁর অনুগ্রহ, ইহসান আর দয়ার দান। তারপর বলেন, জামী'আন মিনহু মানে কেবল তাঁরই কাছ থেকে, এতে তাঁর কোনো শরিক নেই। পাশে তিনি এনে রাখেন ১৬:৫৩ আয়াত: তোমাদের কাছে যে নিয়ামতই আছে, তা আল্লাহর পক্ষ থেকে। তারপর যখন দুঃখকষ্ট তোমাদের ছোঁয়, তখন তাঁর কাছেই তোমরা আর্তনাদ করো। উদ্ধৃত আয়াতটি দুই প্রান্তকে একই ঠিকানায় বাঁধে। নিয়ামত আসে তাঁর কাছ থেকে, আর বিপদে মানুষ ডাকে তাঁকেই।"
          },
          {
            "en": "Al-Baghawi brings two short glosses. Ibn 'Abbas (RA), he reports, said of jami'an minhu: all of that is mercy from Him. Az-Zajjaj said: all of that is bounty and kindness from Him. Al-Muyassar gathers the sense into one sentence: all these blessings are a favour from Allah alone, which He bestowed on you, and a bounty He gave. The wording varies, mercy here, favour or bounty there, but none of them reads the two words as anything other than a statement of where the gift came from.",
            "bn": "বাগাভী দুটি ছোট ব্যাখ্যা আনেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) জামী'আন মিনহু সম্পর্কে বলেছেন: এর সবটাই তাঁর পক্ষ থেকে রহমত। যাজ্জাজ বলেছেন: এর সবটাই তাঁর অনুগ্রহ ও ইহসান। মুয়াসসার পুরো অর্থটা একটি বাক্যে গুছিয়ে দেয়: এসব নিয়ামত কেবল আল্লাহর পক্ষ থেকে দয়া, যা তিনি তোমাদের দান করেছেন, তাঁর দেওয়া অনুগ্রহ। কোথাও রহমত, কোথাও দয়া বা অনুগ্রহ, শব্দ বদলায়। কিন্তু কেউই এ দুই শব্দকে দানের উৎস জানিয়ে দেওয়া ছাড়া অন্য কিছু হিসেবে পড়েন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Minnatan: Another Reading",
          "bn": "মিন্নাতান: ভিন্ন এক পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi records that the same two words were also read another way. Ibn 'Abbas (RA), al-Jahdari and others read jami'an minnatan, with a kasra under the mim, a doubled nun and tanwin at the end, in the accusative as a verbal noun. The sense then becomes: all of it, as a favour. Abu 'Amr is quoted as saying that he heard Maslamah read it the same way, minnatan, meaning out of bounty and generosity.",
            "bn": "কুরতুবী জানান, এ দুই শব্দ অন্যভাবেও পড়া হয়েছে। ইবন আব্বাস (রাঃ), জাহদারী ও আরও কেউ কেউ পড়েছেন জামী'আন মিন্নাতান। মীমের নিচে যের, নূনে তাশদীদ, শেষে তানবীন, আর শব্দটি মাসদার হিসেবে মানসূব। তখন অর্থ দাঁড়ায়: সবটাই, অনুগ্রহ হিসেবে। আবু আমরের উক্তি তিনি উদ্ধৃত করেন যে মাসলামাকেও তিনি এভাবে মিন্নাতান পড়তে শুনেছেন, অর্থাৎ দয়া ও মহানুভবতা হিসেবে।"
          },
          {
            "en": "A third form is reported from Maslamah ibn Muharib as well: jami'an mannuhu, with the word for favour joined to the pronoun, His favour. Abu Hatim, as al-Qurtubi gives it, takes this as the predicate of an omitted subject: that is His favour, or it is His favour. Al-Qurtubi then remarks that the reading of the majority is plain in meaning. On each of these readings the subjection is presented as a favour from Allah; what differs is how the words carry that meaning, and the article leaves the matter there.",
            "bn": "মাসলামা ইবন মুহারিব থেকে তৃতীয় আরেকটি রূপও বর্ণিত: জামী'আন মান্নুহু। এখানে অনুগ্রহবাচক শব্দটি সর্বনামের সঙ্গে যুক্ত, অর্থ: তাঁর অনুগ্রহ। কুরতুবীর বর্ণনায় আবু হাতিম একে ধরেন উহ্য উদ্দেশ্যের বিধেয় হিসেবে: ওটা তাঁর অনুগ্রহ, বা এটা তাঁর অনুগ্রহ। এরপর কুরতুবী মন্তব্য করেন, অধিকাংশের পাঠের অর্থ সুস্পষ্ট। প্রতিটি পাঠেই বশ করে দেওয়াটা আল্লাহর অনুগ্রহ হিসেবে এসেছে। পার্থক্য কেবল শব্দগুলো সে অর্থ কীভাবে বহন করে তাতে। এ লেখা বিষয়টিকে সেখানেই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports Through Ibn 'Abbas",
          "bn": "ইবন আব্বাস (রাঃ) সূত্রে দুই বর্ণনা"
        },
        "p": [
          {
            "en": "At-Tabari, and Ibn Kathir after him, carry a longer report through al-'Awfi from Ibn 'Abbas (RA) on this verse: everything is from Allah, and that name in it is one of His names; so it is all from Him, no disputer can dispute Him in it, and be certain that it is so. Ibn Kathir's English abridgement renders the middle clause as: that is a Name from His Names. Neither commentator explains the clause further, so it is left here as they leave it.",
            "bn": "তাবারী, আর তাঁর পরে ইবন কাসীর, আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে এ আয়াত নিয়ে একটু দীর্ঘ বর্ণনা আনেন: সবকিছু আল্লাহর পক্ষ থেকে, আর এতে যে নাম আছে তা তাঁর নামসমূহের একটি। কাজেই সবটাই তাঁর কাছ থেকে, এতে কোনো বিরোধী তাঁর সঙ্গে বিরোধ করতে পারে না, আর নিশ্চিত জেনে রাখো যে ব্যাপারটা এমনই। ইবন কাসীরের ইংরেজি সংক্ষেপে মাঝের অংশটির অনুবাদ: ওটা তাঁর নামসমূহের একটি নাম। দুজনের কেউই অংশটির আর ব্যাখ্যা দেননি। তাই এখানেও তা রেখে দেওয়া হলো যেমন তাঁরা রেখেছেন।"
          },
          {
            "en": "Ibn Kathir also brings, from Ibn Abi Hatim, a report in which a man asks 'Abdullah ibn 'Amr (RA) and then Ibn 'Abbas (RA) what creation was made from, and this verse is recited in answer. Ibn Kathir passes his own judgement on it: a gharib report, with nakarah in it, something objectionable. Nothing is built on it here. As for the Prophet ﷺ, none of the commentaries consulted here attaches a hadith of his to this verse, so the article quotes none.",
            "bn": "ইবন কাসীর ইবন আবী হাতিম থেকে আরেকটি বর্ণনাও আনেন। তাতে এক ব্যক্তি আবদুল্লাহ ইবন আমর (রাঃ) ও পরে ইবন আব্বাস (রাঃ)-কে জিজ্ঞেস করে, সৃষ্টিজগৎ কী থেকে সৃষ্টি হয়েছে, আর জবাবে এ আয়াত তিলাওয়াত করা হয়। ইবন কাসীর নিজেই এর বিচার করে দেন: বর্ণনাটি গারীব, আর এতে নাকারাত আছে, অর্থাৎ আপত্তিকর কিছু। তাই এর উপর এখানে কিছুই দাঁড় করানো হয়নি। আর নবী ﷺ-এর কোনো হাদীস এ আয়াতের সঙ্গে যুক্ত করেননি এখানে দেখা তাফসীরগুলোর কেউই। কাজেই এ লেখায় কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs That Need a Thinker",
          "bn": "নিদর্শন চায় চিন্তাশীল মন"
        },
        "p": [
          {
            "en": "The verse closes: inna fi dhalika la-ayatin li-qawmin yatafakkarun, in that are signs for a people who reflect. At-Tabari takes that as Allah's subjecting to you what He told you of in these two verses, and the signs as marks and indications that you have no god but Him, who bestowed these favours and subjected things none but He can subject. The people who reflect, in his gloss, are those who think over Allah's signs, proofs and evidences, take lessons from them and are admonished when they ponder them.",
            "bn": "আয়াতের শেষ: ইন্না ফী যালিকা লা-আয়াতিল লিকাওমিই ইয়াতাফাক্কারূন, এতে চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন আছে। তাবারীর মতে 'এতে' মানে এই দুই আয়াতে আল্লাহ যা কিছু তোমাদের জন্য বশ করে দেওয়ার কথা জানিয়েছেন, তাতে। আর নিদর্শন মানে এমন আলামত ও প্রমাণ যে তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। তিনিই এসব নিয়ামত দিয়েছেন, তিনিই এমন জিনিস বশ করেছেন যা আর কেউ পারে না। চিন্তাশীল কারা? তাবারী বলেন, যারা আল্লাহর আয়াত, দলিল ও প্রমাণ নিয়ে ভাবে, তা থেকে শিক্ষা নেয়, আর গভীরভাবে ভাবলে উপদেশ গ্রহণ করে।"
          },
          {
            "en": "Al-Muyassar says the same in brief: in what Allah has subjected to you are marks and indications of His oneness, for a people who reflect on His signs and proofs and take lessons from them. As-Sa'di explains why the verse ends this way. What was given, he writes, obliges people to spend their utmost effort in thanking Him for His favour, and to let their thoughts sink deep into pondering His signs and His wisdom; and for this reason Allah said: in that are signs for a people who reflect.",
            "bn": "মুয়াসসার একই কথা বলে সংক্ষেপে: আল্লাহ তোমাদের জন্য যা বশ করেছেন, তাতে তাঁর একত্বের আলামত ও প্রমাণ আছে, সেই সম্প্রদায়ের জন্য যারা তাঁর আয়াত ও দলিল নিয়ে ভাবে আর শিক্ষা নেয়। আয়াতটা কেন এভাবে শেষ হলো, সা'দী তার কারণ দেখান। তাঁর কথায়, এই দান মানুষের উপর দায় চাপায়, যেন তারা তাঁর নিয়ামতের শোকর আদায়ে সর্বোচ্চ চেষ্টা ঢেলে দেয়, আর তাঁর আয়াত ও হিকমত নিয়ে ভাবনায় তাদের চিন্তা গভীরে ঢুকে যায়। এ কারণেই আল্লাহ বলেছেন: এতে চিন্তাশীল সম্প্রদায়ের জন্য নিদর্শন আছে।"
          },
          {
            "en": "He then sets out what the reflection finds. The creating, ordering and subjecting of these things point to Allah's will being carried through and to His complete power. Their precision, mastery, wondrous craft and beautiful form point to the completeness of His wisdom and knowledge. Their vastness, greatness and number point to the breadth of His dominion and authority. The particular ways things are set apart, and the opposites among them, show that He does whatever He wills. Their benefits, for religion and for this world, point to the breadth of His mercy and kindness.",
            "bn": "তারপর তিনি দেখান, ভাবলে কী পাওয়া যায়। এগুলোর সৃষ্টি, পরিচালনা আর বশ করে দেওয়া প্রমাণ করে, আল্লাহর ইচ্ছা কার্যকর হয় আর তাঁর ক্ষমতা পরিপূর্ণ। এগুলোর নিখুঁত গড়ন, মজবুতি, অপূর্ব কারিগরি আর সুন্দর আকৃতি দেখায় তাঁর হিকমত ও জ্ঞান কত পূর্ণ। এগুলোর বিশালতা, মহিমা আর সংখ্যার প্রাচুর্য দেখায় তাঁর রাজত্ব ও কর্তৃত্ব কত বিস্তৃত। জিনিসগুলোর আলাদা আলাদা বৈশিষ্ট্য আর পরস্পরবিরোধী বস্তুর সহাবস্থান প্রমাণ করে, তিনি যা চান তা-ই করেন। আর দ্বীন ও দুনিয়ার যত উপকার এগুলোতে আছে, তা দেখায় তাঁর রহমত ও ইহসান কত প্রশস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Thanks With No Partner",
          "bn": "শরিকহীন শোকর"
        },
        "p": [
          {
            "en": "As-Sa'di's conclusion follows: all of that shows that He alone is the one worshipped, to whom alone worship, humility and love are due, and that His messengers are truthful in what they brought. These, he says, are clear proofs of reason that admit neither suspicion nor doubt. At-Tabari draws the same consequence earlier, at jami'an minhu: so praise Him and no other, since no partner shared with Him in bestowing these favours; He alone bestowed them, and all of them are from Him.",
            "bn": "সা'দীর উপসংহার: এ সবকিছু প্রমাণ করে, একমাত্র তিনিই মা'বুদ, ইবাদত, বিনয় আর ভালোবাসা কেবল তাঁরই প্রাপ্য, আর তাঁর রাসূলগণ যা নিয়ে এসেছেন তাতে তাঁরা সত্যবাদী। তিনি বলেন, এগুলো বুদ্ধির স্পষ্ট দলিল, যাতে সন্দেহ বা সংশয়ের জায়গা নেই। তাবারী একই সিদ্ধান্ত টানেন আরও আগে, জামী'আন মিনহু-র আলোচনায়। তাঁর কথায়: কাজেই তাঁরই প্রশংসা করো, আর কারও নয়। কারণ এসব নিয়ামত দানে কোনো শরিক তাঁর সঙ্গে ছিল না। তিনি একাই তা দিয়েছেন, আর সবই তাঁর কাছ থেকে।"
          },
          {
            "en": "From there at-Tabari turns the favour into a charge: do not give Him a partner in your thanks to Him; single Him out for thanks and worship, and make divinity His alone, for you have no god besides Him. Al-Muyassar says: so worship Him, and do not set up a partner to Him. Al-Baghawi reads the same lesson straight from jami'an minhu: so do not set up rivals to Allah. The verse before ended with perhaps you will be grateful; on this one the commentators spell out to whom the gratitude belongs.",
            "bn": "এখান থেকে তাবারী নিয়ামতকে দায়িত্বে রূপ দেন: তাঁর শোকরে তাঁর কোনো শরিক বানিয়ো না। শোকর আর ইবাদত কেবল তাঁর জন্য রাখো, ইলাহ হওয়ার অধিকার একমাত্র তাঁকেই দাও, কারণ তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। মুয়াসসার বলে: কাজেই তাঁরই ইবাদত করো, তাঁর কোনো শরিক দাঁড় করিয়ো না। বাগাভী জামী'আন মিনহু থেকেই সরাসরি একই শিক্ষা পড়েন: সুতরাং আল্লাহর সমকক্ষ দাঁড় করিয়ো না। আগের আয়াত শেষ হয়েছিল 'যাতে তোমরা শোকর করো' দিয়ে। এ আয়াতে তাফসীরকারেরা খুলে বলেন, সেই শোকর কার প্রাপ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the List Slowly",
          "bn": "তালিকাটা ধীরে পড়া"
        },
        "p": [
          {
            "en": "The commentators' method on this verse is simple. They name what is plain to any listener, sun, moon and stars, beasts, trees, mountains, rivers and ships, and then ask two things of each: whose favour is this, and what does it show of Him. Their glosses stay close to the words of the verse. Its own ending, a people who reflect, sets the direction: the list is given in order to be thought over, and in their reading the thinking ends at the Giver.",
            "bn": "এ আয়াতে তাফসীরকারদের পদ্ধতি সরল। যে কোনো শ্রোতার চোখের সামনে যা আছে, সেগুলোরই নাম করেন তাঁরা: সূর্য, চাঁদ, তারা, জীবজন্তু, গাছপালা, পাহাড়, নদী, নৌযান। তারপর প্রতিটি সম্পর্কে দুটি প্রশ্ন তোলেন: এ কার অনুগ্রহ, আর এটা তাঁর সম্পর্কে কী দেখায়। তাঁদের ব্যাখ্যা আয়াতের শব্দের কাছাকাছিই থাকে। দিকটা ঠিক করে দেয় আয়াতের নিজের শেষ কথা, চিন্তাশীল সম্প্রদায়। তালিকা দেওয়া হয়েছে ভেবে দেখার জন্য, আর তাঁদের পাঠে সেই ভাবনা গিয়ে থামে দাতার কাছে।"
          },
          {
            "en": "That gives a plain practice. Take one thing from the commentators' lists that served you today without your asking, the sun, a tree, an animal, a river or a ship, and say the verse over it: subjected to me, and all of it from Him. Then give it the two responses the commentaries name: thanks to Him with no partner in it, and reflection that ends in worship. The verse promises signs only to a people who reflect, which makes the reflecting a task for the listener and not something the list does on its own.",
            "bn": "এ থেকে একটা সহজ অভ্যাস দাঁড়ায়। তাফসীরকারদের তালিকা থেকে এমন একটা জিনিস বেছে নিন, যা আজ না চাইতেই আপনার কাজে এসেছে: সূর্য, একটা গাছ, কোনো প্রাণী, নদী বা নৌযান। তার উপর আয়াতটা মনে মনে বলুন: আমার জন্য বশ করা হয়েছে, আর সবটাই তাঁর পক্ষ থেকে। তারপর তাফসীরগুলো যে দুটি জবাবের কথা বলে, সে দুটি দিন: শরিকহীন শোকর, আর এমন ভাবনা যা গিয়ে শেষ হয় ইবাদতে। আয়াত নিদর্শনের ওয়াদা দেয় কেবল চিন্তাশীলদের। কাজেই ভাবার দায়টা শ্রোতার, তালিকা নিজে নিজে তা করে দেয় না।"
          }
        ]
      }
    ]
  },
  "45:17": {
    "sections": [
      {
        "h": {
          "en": "One More Gift, Then a Split",
          "bn": "আরও এক দান, তারপর বিভেদ"
        },
        "p": [
          {
            "en": "Wa ataynahum bayyinatin min al-amr: and We gave them clear proofs of the matter. The sentence carries on from 45:16, where Allah lists what He gave the Children of Israel: the Book, al-hukm and prophethood, good things for provision, and preference over the worlds. Ibn Kathir, in the English abridgement, reads 45:16 to 45:20 as one passage. This verse adds one more gift to the list, and then the list turns.",
            "bn": "ওয়া আতাইনাহুম বাইয়িনাতিম মিনাল আমর: আর আমি তাদের দিয়েছিলাম দ্বীনের বিষয়ে সুস্পষ্ট প্রমাণ। বাক্যটি চলে এসেছে ৪৫:১৬ থেকে। সেখানে আল্লাহ গুনে গুনে বলেছেন বনী ইসরাঈলকে কী কী দিয়েছিলেন: কিতাব, হুকুম ও নবুওয়াত, উত্তম রিযক, আর বিশ্ববাসীর ওপর শ্রেষ্ঠত্ব। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৪৫:১৬ থেকে ৪৫:২০ পর্যন্ত এক টানা অংশ হিসেবে পড়ে। এ আয়াত তালিকায় আরও একটি দান যোগ করে, তারপরই তালিকার মোড় ঘুরে যায়।"
          },
          {
            "en": "After it comes 45:18: thumma ja'alnaka 'ala shari'atin min al-amr, then We put you on a way of the matter, so follow it. The same two words, min al-amr, close the gift in both verses: clear proofs of the matter for them, a set way of the matter for the Prophet ﷺ. Ma'arif al-Qur'an says these verses confirm the messengership of the Final Messenger ﷺ and console him over what his enemies did to him. So the verse has two listeners: a past people whose story is told, and the Prophet ﷺ, addressed as inna rabbaka, your Lord.",
            "bn": "এর পরেই ৪৫:১৮: সুম্মা জাআলনাকা আলা শারীআতিম মিনাল আমর, তারপর আমি তোমাকে দ্বীনের এক নির্ধারিত পথের ওপর রেখেছি, কাজেই তুমি তারই অনুসরণ কর। দুই আয়াতেই দানের শেষে একই শব্দজোড়া, মিনাল আমর। তাদের জন্য দ্বীনের বিষয়ে সুস্পষ্ট প্রমাণ, আর নবী ﷺ-এর জন্য দ্বীনের এক বাঁধা পথ। মাআরিফুল কুরআন বলে, এ আয়াতগুলো শেষ রাসূল ﷺ-এর রিসালাতকে প্রতিষ্ঠিত করে, আর শত্রুদের হাতে তিনি যা সয়েছেন তাতে তাঁকে সান্ত্বনা দেয়। কাজেই আয়াতের শ্রোতা দুজন। এক অতীত জাতি, যাদের কাহিনি বলা হচ্ছে। আর নবী ﷺ, যাঁকে সম্বোধন করা হচ্ছে ইন্না রাব্বাকা, তোমার রব, বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Clear Proofs Were",
          "bn": "সুস্পষ্ট প্রমাণগুলো কী ছিল"
        },
        "p": [
          {
            "en": "The commentators agree that bayyinat are things that make the truth plain, and differ over what they were. Ibn Kathir calls them arguments, proofs and decisive evidences, so that the proof stood against them. The Muyassar names clear laws on the lawful and the unlawful, and indications that show the truth apart from falsehood. At-Tabari ties them to revelation: clear things from Our command, through Our sending down to them the Torah, in which is a detailed explanation of everything.",
            "bn": "বাইয়িনাত মানে এমন জিনিস, যা সত্যকে স্পষ্ট করে দেয়। এখানে তাফসীরকারেরা একমত। মতভেদ হলো সেগুলো আসলে কী ছিল, তা নিয়ে। ইবন কাসীর বলেন, যুক্তি, প্রমাণ আর অকাট্য দলিল, ফলে তাদের বিরুদ্ধে হুজ্জত প্রতিষ্ঠিত হয়ে গেল। মুয়াসসার বলে, হালাল ও হারামের স্পষ্ট বিধান, আর এমন আলামত যা হক ও বাতিলকে আলাদা করে দেখায়। তাবারী এগুলোকে ওহীর সঙ্গে জোড়েন: আমার আদেশ থেকে স্পষ্ট বিষয়, তাদের কাছে তাওরাত নাযিল করার মাধ্যমে, যাতে আছে সব কিছুর বিস্তারিত বিবরণ।"
          },
          {
            "en": "As-Sa'di reads al-amr another way: the command of decree, which Allah brought to them, and he says these signs were the miracles they saw at the hands of Musa (AS). Al-Qurtubi opens with a report from Ibn 'Abbas (RA) that points forward instead: it means the matter of the Prophet ﷺ and the evidences of his prophethood, that he would emigrate from Tihama to Yathrib and the people of Yathrib would support him. Al-Baghawi takes the same line: the knowledge of Muhammad's ﷺ being sent, and what was made clear to them of his matter.",
            "bn": "সা'দী আমর শব্দটা পড়েন অন্যভাবে: তাকদীরের আদেশ, যা আল্লাহ তাদের কাছে পৌঁছে দিয়েছিলেন। তাঁর মতে এ নিদর্শনগুলো ছিল সেই মুজিযা, যা তারা মূসা (আঃ)-এর হাতে দেখেছিল। কুরতুবী শুরু করেন ইবন আব্বাস (রাঃ)-এর এক বর্ণনা দিয়ে, যা উল্টো সামনের দিকে ইশারা করে। তাঁর মতে এর অর্থ নবী ﷺ-এর বিষয় আর তাঁর নবুওয়াতের সাক্ষ্যগুলো: তিনি তিহামা থেকে ইয়াসরিবে হিজরত করবেন, আর ইয়াসরিবের লোকেরা তাঁকে সাহায্য করবে। বাগাভীও একই পথে: মুহাম্মাদ ﷺ-এর আগমনের জ্ঞান, আর তাঁর বিষয়ে তাদের কাছে যা স্পষ্ট করে দেওয়া হয়েছিল।"
          },
          {
            "en": "So the readings run in two directions. One looks back to what Israel already held: the Torah, its law, the miracles of Musa (AS). The other looks ahead to a Prophet foretold. Al-Qurtubi carries both, giving the backward-looking one, clear laws on the lawful and unlawful together with miracles, under the words it was said. The texts read here do not choose, and neither does this article. Every reading agrees on the point the verse needs: nothing they later quarrelled over had been left unclear.",
            "bn": "তাই ব্যাখ্যাগুলো দুই দিকে যায়। একটি পেছনে তাকায়, বনী ইসরাঈলের হাতে যা আগে থেকেই ছিল তার দিকে: তাওরাত, তার শরীআত, মূসা (আঃ)-এর মুজিযা। অন্যটি সামনে তাকায়, এক প্রতিশ্রুত নবীর দিকে। কুরতুবী দুটোই রাখেন। পেছনে তাকানো ব্যাখ্যাটি, অর্থাৎ হালাল-হারামের স্পষ্ট বিধান ও মুজিযা, তিনি আনেন 'বলা হয়েছে' কথাটি দিয়ে। এখানে পড়া তাফসীরগুলো এ দুইয়ের কোনোটিকে বেছে নেয় না, এ লেখাও নেয় না। তবে আয়াতের যে কথাটি দরকার, তাতে সব ব্যাখ্যা একমত: পরে যা নিয়ে তারা ঝগড়া করেছে, তার কিছুই অস্পষ্ট রাখা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Only Once the Knowledge Came",
          "bn": "জ্ঞান আসার পরেই কেবল"
        },
        "p": [
          {
            "en": "Fa-ma khtalafu illa min ba'di ma ja'ahumu al-'ilm: and they did not differ except after the knowledge had come to them. A negation followed by illa closes every other door: no other time for difference existed. Al-Qurtubi reports two views of which knowledge is meant. An-Naqqash related that it means Yusha' ibn Nun, in whom some of them believed and some disbelieved. Others, under it was said, take it as the prophethood of the Prophet ﷺ, over which they then differed.",
            "bn": "ফামাখতালাফূ ইল্লা মিম বা'দি মা জাআহুমুল ইলম: জ্ঞান তাদের কাছে আসার পরেই কেবল তারা মতভেদ করেছিল। আগে না-বাচক কথা, তারপর ইল্লা, ফলে অন্য সব সম্ভাবনা বন্ধ হয়ে যায়। মতভেদের আর কোনো সময় ছিল না, এ সময়টা ছাড়া। কোন জ্ঞানের কথা বলা হচ্ছে, সে বিষয়ে কুরতুবী দুটি মত আনেন। নাক্কাশের বর্ণনায় এর অর্থ ইউশা ইবন নূন, যাঁর প্রতি তাদের কেউ ঈমান এনেছিল, কেউ কুফরি করেছিল। আরেক মত, যা তিনি 'বলা হয়েছে' দিয়ে আনেন: এ জ্ঞান হলো নবী ﷺ-এর নবুওয়াত, যা নিয়ে তারা পরে মতভেদ করে।"
          },
          {
            "en": "As-Sa'di describes the knowledge by what it should have done: it was the knowledge that called for there being no difference. The favours Allah gave the Children of Israel, he says, required them to carry them out in the most complete way and to gather on the truth He had made clear to them. Instead the matter was turned round. They treated the favours the opposite of what was due, and divided over the very thing they had been commanded to unite upon.",
            "bn": "সা'দী জ্ঞানটার পরিচয় দেন, সেটার যা করার কথা ছিল তা দিয়ে: এমন জ্ঞান, যা মতভেদ না থাকাকেই অনিবার্য করে। তাঁর কথায়, আল্লাহ বনী ইসরাঈলকে যেসব নিয়ামত দিয়েছিলেন, অবস্থার দাবি ছিল তারা সেগুলোর হক পূর্ণভাবে আদায় করবে, আর আল্লাহ যে হক স্পষ্ট করে দিয়েছেন তার ওপর এক হবে। কিন্তু ব্যাপারটা উল্টে গেল। যা করা উচিত ছিল, নিয়ামতের সঙ্গে তারা করল তার উল্টো। যে বিষয়ে এক থাকার আদেশ পেয়েছিল, ঠিক সে বিষয়েই তারা বিভক্ত হয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "Baghyan and the Wish to Lead",
          "bn": "বাগইয়ান: নেতৃত্বের লোভ"
        },
        "p": [
          {
            "en": "Then the verse names the cause: baghyan baynahum, out of baghy among themselves. The commentators read the word as the motive that drove the split. As-Sa'di: what carried them into difference was the baghy of some of them against others, and wrongdoing. The Muyassar says the same and names what the baghy sought: elevation and leadership. At-Tabari is the plainest of all. They differed, he says, in pursuit of positions of leadership, and in abandoning the clear explanation Allah had given in what He sent down to them.",
            "bn": "এরপর আয়াত কারণটা জানিয়ে দেয়: বাগইয়াম বাইনাহুম, নিজেদের মধ্যে সীমালঙ্ঘনের কারণে। তাফসীরকারেরা শব্দটাকে পড়েন সেই তাড়না হিসেবে, যা বিভক্তির দিকে ঠেলে দিয়েছিল। সা'দী বলেন, তাদের মতভেদে টেনে নিয়েছিল একে অপরের ওপর সীমালঙ্ঘন আর জুলুম। মুয়াসসারও একই কথা বলে, আর জানিয়ে দেয় সে সীমালঙ্ঘন কী চাইছিল: উঁচু আসন আর নেতৃত্ব। তাবারী সবচেয়ে সোজা ভাষায় বলেন। তাঁর মতে তারা মতভেদ করেছিল নেতৃত্বের পদ পাওয়ার আশায়, আর আল্লাহ তাঁর নাযিল করা কিতাবে যে স্পষ্ট বর্ণনা দিয়েছিলেন, তা ছেড়ে দিয়ে।"
          },
          {
            "en": "Al-Qurtubi gives the meaning ad-Dahhak gave: envy towards the Prophet ﷺ. He then adds a wider reading: some transgressing against others, seeking precedence and leadership. And he turns it at once to the Prophet's ﷺ own listeners: so too the idolaters of your age, O Muhammad; the clear proofs came to them, but they turned away from them out of rivalry for leadership. Ma'arif al-Qur'an, citing Bayan al-Qur'an, says the rejection came not from any lack of arguments and signs, but from jealousy, love of the world and personal desire.",
            "bn": "কুরতুবী দাহহাকের দেওয়া অর্থ আনেন: নবী ﷺ-এর প্রতি হিংসা। তারপর আরেকটি বিস্তৃত অর্থ যোগ করেন: শ্রেষ্ঠত্ব আর নেতৃত্বের খোঁজে একে অপরের ওপর সীমালঙ্ঘন। আর সঙ্গে সঙ্গে কথাটা ঘুরিয়ে দেন নবী ﷺ-এর নিজের যুগের শ্রোতাদের দিকে। হে মুহাম্মাদ, তোমার যুগের মুশরিকরাও এমনই। সুস্পষ্ট প্রমাণ তাদের কাছে এসেছে, কিন্তু নেতৃত্ব নিয়ে প্রতিযোগিতার কারণে তারা মুখ ফিরিয়ে নিয়েছে। মাআরিফুল কুরআন বায়ানুল কুরআনের বরাতে বলে, প্রত্যাখ্যানের কারণ যুক্তি বা নিদর্শনের অভাব ছিল না। কারণ ছিল হিংসা, দুনিয়ার মোহ আর ব্যক্তিগত খেয়ালখুশি।"
          },
          {
            "en": "Notice where al-Qurtubi's turn leaves the word. Baghy is not the trait of one lineage; he finds the same thing among the idolaters of the Prophet's ﷺ own age. And baynahum, among themselves, puts the cause inside the community: Ibn Kathir reads it as baghy from some of them against others. Read together, the commentators place the failure in the will rather than the mind. The knowledge was there. What was missing was a heart that wanted the truth more than the place at the front, and a scholar can lack it as easily as anyone.",
            "bn": "কুরতুবীর এ মোড় শব্দটাকে কোথায় দাঁড় করায়, খেয়াল করুন। বাগই কোনো এক বংশের স্বভাব নয়। নবী ﷺ-এর নিজের যুগের মুশরিকদের মধ্যেও তিনি একই জিনিস দেখেন। আর বাইনাহুম, নিজেদের মধ্যে, শব্দটা কারণটাকে সম্প্রদায়ের ভেতরেই রাখে। ইবন কাসীর একে পড়েন তাদের কারও কারও অন্যদের ওপর সীমালঙ্ঘন হিসেবে। সব মিলিয়ে তাফসীরকারেরা ব্যর্থতাটা খুঁজে পান ইচ্ছার মধ্যে, বুদ্ধির মধ্যে নয়। জ্ঞান ছিল। যা ছিল না, তা হলো এমন অন্তর, যে সামনের সারির জায়গার চেয়ে সত্যকে বেশি চায়। আর একজন আলিমেরও তা না থাকতে পারে, অন্য যে কারও মতোই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Right Made Plain",
          "bn": "হকপন্থী যেদিন স্পষ্ট হবে"
        },
        "p": [
          {
            "en": "Inna rabbaka yaqdi baynahum yawma al-qiyamati fima kanu fihi yakhtalifun: your Lord will judge between them on the Day of Resurrection concerning what they used to differ over. At-Tabari reads it as spoken to the Prophet ﷺ about those of the Children of Israel who differed out of baghy, after the knowledge and clear explanation that had come to them. On that Day, he says, Allah will give those in the right victory over those in falsehood, by a ruling that settles it. Ibn Kathir: He will decide between them by His just judgement.",
            "bn": "ইন্না রাব্বাকা ইয়াকদী বাইনাহুম ইয়াওমাল কিয়ামাতি ফীমা কানূ ফীহি ইয়াখতালিফূন: তারা যে বিষয়ে মতভেদ করত, কিয়ামতের দিন তোমার রব সে বিষয়ে তাদের মধ্যে ফয়সালা করবেন। তাবারী একে পড়েন নবী ﷺ-এর প্রতি সম্বোধন হিসেবে, বনী ইসরাঈলের সেই লোকদের সম্পর্কে, যারা জ্ঞান আর স্পষ্ট বর্ণনা আসার পরেও সীমালঙ্ঘন করে মতভেদ করেছিল। তাঁর কথায়, সেদিন আল্লাহ চূড়ান্ত রায় দিয়ে হকপন্থীকে বাতিলপন্থীর ওপর জয়ী করবেন। ইবন কাসীর বলেন, তিনি তাঁর ন্যায়বিচার দিয়ে তাদের মধ্যে মীমাংসা করবেন।"
          },
          {
            "en": "As-Sa'di adds what the judgement will uncover. Allah will separate those in the right from those in falsehood, and also those whom desire, or something else, drove to differ. The Day will rule on the motive as well as the position. That is a sobering thought for anyone who was right on a question for the wrong reason. Al-Qurtubi glosses yaqdi simply: He will rule and decide. What the verse does not do is hand that ruling to anyone before the Day.",
            "bn": "বিচার কী উন্মোচন করবে, সা'দী তা যোগ করেন। আল্লাহ হকপন্থীকে বাতিলপন্থী থেকে আলাদা করবেন। আলাদা করবেন তাকেও, যাকে খেয়ালখুশি বা অন্য কিছু মতভেদের দিকে ঠেলে দিয়েছিল। অর্থাৎ সেদিনের রায় শুধু অবস্থানের ওপর নয়, নিয়তের ওপরও। যে মানুষ কোনো প্রশ্নে সঠিক ছিল, কিন্তু ভুল উদ্দেশ্যে, তার জন্য কথাটা ভাবনার। কুরতুবী ইয়াকদী শব্দের অর্থ সংক্ষেপে বলেন: তিনি হুকুম দেবেন ও মীমাংসা করবেন। কিন্তু আয়াতটি সে রায় কিয়ামতের আগে কারও হাতে তুলে দেয় না।"
          },
          {
            "en": "So this must be said plainly. The verse describes the Children of Israel of a past age, and in some readings in al-Qurtubi, al-Baghawi and Ma'arif al-Qur'an those who met the Prophet ﷺ. It names no present-day state, nation or people, and it licenses nothing against any living person or community, Jews today included. It gives no one leave to insult, suspect or harm anyone. The verdict it speaks of belongs to Allah, on a Day He has named, and no reader inherits it now.",
            "bn": "তাই কথাটা সোজাসুজি বলা দরকার। আয়াতটি অতীত যুগের বনী ইসরাঈলের বর্ণনা দেয়। কুরতুবী, বাগাভী ও মাআরিফুল কুরআনে আনা কিছু ব্যাখ্যায় এর মধ্যে আছে নবী ﷺ-এর সমকালীন লোকেরাও। আজকের কোনো রাষ্ট্র, জাতি বা গোষ্ঠীর নাম এতে নেই। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে, আজকের ইহুদিদের বিরুদ্ধেও, আয়াতটি কোনো কিছুর অনুমতি দেয় না। কাউকে গালি দেওয়া, সন্দেহ করা বা ক্ষতি করার অধিকার এ আয়াত কাউকে দেয় না। যে রায়ের কথা এখানে, তা আল্লাহর, তাঁর নির্ধারিত দিনে। কোনো পাঠক আজ সে রায়ের উত্তরাধিকারী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Addressed Homeward",
          "bn": "সতর্কবাণী নিজের ঘরের দিকে"
        },
        "p": [
          {
            "en": "Ibn Kathir's note on the verse comes to the sentence that decides how it should be read: in this is a warning to this umma against walking their path and aiming at their way. The Muyassar ends in nearly the same words. The English abridgement of Ibn Kathir draws the next step. This is why, it says, Allah follows at once with 45:18: then We put you on a way of the matter, so follow it, and do not follow the desires of those who do not know.",
            "bn": "আয়াতের আলোচনায় ইবন কাসীর এমন এক বাক্যে পৌঁছান, যা ঠিক করে দেয় আয়াতটি কীভাবে পড়তে হবে: এতে এ উম্মতের জন্য সতর্কবাণী আছে, তারা যেন ওদের পথে না চলে, ওদের তরিকার দিকে না যায়। মুয়াসসারও শেষ করে প্রায় একই কথায়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ পরের ধাপটা দেখিয়ে দেয়। সেখানে বলা হয়, এ কারণেই আল্লাহ সঙ্গে সঙ্গে ৪৫:১৮ এনেছেন: তারপর আমি তোমাকে দ্বীনের এক পথের ওপর রেখেছি, কাজেই তারই অনুসরণ কর, আর যারা জানে না তাদের খেয়ালখুশির অনুসরণ করো না।"
          },
          {
            "en": "So the commentators do not leave the verse as a charge sheet against others. Its weight falls on the community that now holds the final Book, because that community has also been given clear proofs, and can also divide after knowledge out of the wish to stand above each other. A Muslim who reads the verse only about someone else has read past the sentence Ibn Kathir wrote for him. No tafsir read for this verse attaches a hadith to it, so none is quoted here.",
            "bn": "তাই তাফসীরকারেরা আয়াতটিকে অন্যের বিরুদ্ধে অভিযোগপত্র বানিয়ে রাখেন না। এর ভার পড়ে সেই উম্মতের ওপর, শেষ কিতাব এখন যাদের হাতে। কারণ তাদেরও সুস্পষ্ট প্রমাণ দেওয়া হয়েছে, আর তারাও জ্ঞান পাওয়ার পর একে অপরের ওপরে থাকার বাসনায় বিভক্ত হতে পারে। যে মুসলিম আয়াতটি শুধু অন্যদের সম্পর্কে পড়ে, ইবন কাসীর তার জন্যই যে বাক্যটি লিখেছেন, সেটি সে পাশ কাটিয়ে গেছে। এ আয়াতের জন্য পড়া কোনো তাফসীর এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Baghyan Baynahum Elsewhere",
          "bn": "বাগইয়াম বাইনাহুম আরও যেখানে"
        },
        "p": [
          {
            "en": "The Qur'an says this more than once, in nearly the same words. 10:93 is also about the Children of Israel, settled and given good provision, and it closes with the very clause that closes this verse: your Lord will judge between them on the Day of Resurrection concerning what they used to differ over. 3:19 uses the same phrase, min ba'di ma ja'ahumu al-'ilmu baghyan baynahum, of those given the Scripture, right after the words that the religion with Allah is Islam. 42:14 says it with tafarraqu, they split, and adds that but for a word already gone out from your Lord, the matter would have been settled between them.",
            "bn": "কুরআন কথাটা একাধিকবার বলেছে, প্রায় একই শব্দে। ১০:৯৩ আয়াতও বনী ইসরাঈলকে নিয়ে, যাদের উত্তম আবাস আর পবিত্র রিযক দেওয়া হয়েছিল। সে আয়াত শেষ হয় হুবহু এ আয়াতের শেষ বাক্যে: তারা যে বিষয়ে মতভেদ করত, কিয়ামতের দিন তোমার রব সে বিষয়ে তাদের মধ্যে ফয়সালা করবেন। ৩:১৯ আয়াতে একই কথা, মিম বা'দি মা জাআহুমুল ইলমু বাগইয়াম বাইনাহুম, কিতাবপ্রাপ্তদের সম্পর্কে, ঠিক এ ঘোষণার পরে যে আল্লাহর কাছে দ্বীন হলো ইসলাম। ৪২:১৪ আয়াত একই কথা বলে তাফাররাকূ, তারা বিভক্ত হলো, শব্দে। সঙ্গে যোগ করে, তোমার রবের পক্ষ থেকে একটি কথা আগেই স্থির না হয়ে থাকলে তাদের মধ্যে ফয়সালা হয়েই যেত।"
          },
          {
            "en": "2:213 gives the pattern in its widest frame: none differed over the Book except those who were given it, after clear proofs came, baghyan baynahum; and Allah guided the believers to the truth they had differed over. Then 3:105 speaks to the believers directly: do not be like those who split and differed after the clear proofs had come to them. What Ibn Kathir and the Muyassar draw from this verse as a warning, 3:105 says outright as a command.",
            "bn": "২:২১৩ আয়াত ধারাটাকে দেখায় সবচেয়ে বড় পরিসরে। কিতাব যাদের দেওয়া হয়েছিল, সুস্পষ্ট প্রমাণ আসার পর তারাই নিজেদের মধ্যে সীমালঙ্ঘন করে তা নিয়ে মতভেদ করল। তারপর মতভেদের বিষয়ে আল্লাহ মুমিনদের হকের পথ দেখালেন। এরপর ৩:১০৫ সরাসরি মুমিনদের বলে: তোমরা তাদের মতো হয়ো না, যারা সুস্পষ্ট প্রমাণ আসার পরও বিভক্ত হয়েছে ও মতভেদ করেছে। ইবন কাসীর ও মুয়াসসার এ আয়াত থেকে যে সতর্কবাণী বের করেন, ৩:১০৫ তা সরাসরি আদেশ হিসেবেই বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Learning Without Climbing",
          "bn": "জ্ঞান, সিঁড়ি নয়"
        },
        "p": [
          {
            "en": "At-Tabari's gloss gives a test anyone can carry into a disagreement: am I after the truth, or after a position? One way to tell is to ask whether I would be glad if the other person turned out to be right. Another is to watch what I do with something newly learned about the religion. If I act on it before I correct anyone with it, it is working on me. If its first use is to show who knows less, it has begun to work like the baghy the verse describes.",
            "bn": "তাবারীর ব্যাখ্যা এমন একটা পরীক্ষা দেয়, যা যে কেউ মতবিরোধের সময় সঙ্গে রাখতে পারে: আমি কি সত্য চাইছি, নাকি একটা আসন? বোঝার একটা উপায় হলো নিজেকে জিজ্ঞেস করা, অন্যজন সঠিক প্রমাণিত হলে আমি কি খুশি হব? আরেকটা উপায়, দ্বীনের নতুন শেখা কথাটা দিয়ে আমি কী করি তা লক্ষ করা। কাউকে শুধরে দেওয়ার আগে যদি নিজে আমল করি, তবে জ্ঞানটা আমার ওপর কাজ করছে। আর যদি তার প্রথম ব্যবহার হয় কে কম জানে তা দেখানো, তবে সে জ্ঞান আয়াতে বলা সেই সীমালঙ্ঘনের মতো কাজ করতে শুরু করেছে।"
          },
          {
            "en": "In a hard season, when a family, a masjid committee or a study circle splits over a religious question, the verse offers two things together. It does not pretend the difference is unreal; it says Allah will judge it. And it takes the final verdict out of our hands, which frees us to disagree without contempt. We can state what we hold, with its evidence, and still greet, visit and help the person who holds otherwise, leaving the last word where the verse leaves it.",
            "bn": "কঠিন সময়ে, যখন কোনো পরিবার, মসজিদ কমিটি বা পাঠচক্র দ্বীনি কোনো প্রশ্নে ভাগ হয়ে যায়, আয়াতটি একসঙ্গে দুটি জিনিস দেয়। মতভেদ যে বাস্তব, তা অস্বীকার করে না। বলে, আল্লাহ এর ফয়সালা করবেন। আবার চূড়ান্ত রায়টা আমাদের হাত থেকে সরিয়ে নেয়, ফলে অবজ্ঞা ছাড়াই দ্বিমত করার সুযোগ থাকে। আমরা দলিলসহ নিজের মত বলতে পারি, তবু ভিন্নমতের মানুষটিকে সালাম দিতে, তার খোঁজ নিতে, তাকে সাহায্য করতে পারি। শেষ কথাটা থাকুক সেখানে, যেখানে আয়াত তা রেখেছে।"
          },
          {
            "en": "For a du'a, the Qur'an supplies one in 3:8: rabbana la tuzigh qulubana ba'da idh hadaytana wa hab lana min ladunka rahmah, innaka anta al-wahhab. Our Lord, let not our hearts deviate after You have guided us, and grant us mercy from Yourself; indeed You are the Bestower. It asks for steadiness after guidance, the very moment this verse warns about. And in the verse's own words, as a supplication composed here: O Allah, You have made the truth clear to us; keep us from differing over it out of envy among ourselves.",
            "bn": "দোয়ার জন্য কুরআন নিজেই একটি দিয়েছে, ৩:৮ আয়াতে: রাব্বানা লা তুযিগ কুলূবানা বা'দা ইয হাদাইতানা ওয়া হাব লানা মিল লাদুনকা রাহমাহ, ইন্নাকা আনতাল ওয়াহহাব। হে আমাদের রব, হিদায়াত দেওয়ার পর আমাদের অন্তরকে বাঁকা করে দিও না, আর তোমার কাছ থেকে আমাদের রহমত দান কর। নিশ্চয়ই তুমিই মহাদাতা। এ দোয়া চায় হিদায়াতের পরে অবিচল থাকা, ঠিক সেই মুহূর্তে, যার ব্যাপারে এ আয়াত সতর্ক করে। আর আয়াতের নিজের শব্দে, এখানে রচিত একটি দোয়া: হে আল্লাহ, তুমি আমাদের সামনে হক স্পষ্ট করে দিয়েছ। নিজেদের মধ্যে হিংসার বশে তা নিয়ে মতভেদ করা থেকে আমাদের রক্ষা কর।"
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
            "bn": "ওয়া খালাকাল্লাহুস সামাওয়াতি ওয়াল আরদা বিল-হাক্ক, ওয়া লিতুজযা কুল্লু নাফসিম বিমা কাসাবাত, ওয়া হুম লা য়ুযলামূন: আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হক সহকারে, আর যাতে প্রত্যেক প্রাণকে তার উপার্জনের প্রতিদান দেওয়া হয়, আর তাদের উপর জুলুম করা হবে না। আয়াতটি এসেছে ঠিক ৪৫:২১-এর পরে। সেখানে প্রশ্ন ছিল: যারা মন্দ কাজ করে, তারা কি ভেবেছে আল্লাহ তাদেরকে ঈমানদার ও সৎকর্মশীলদের মতো বানিয়ে দেবেন, জীবনে ও মরণে সমান করে? সে আয়াতের শেষ কথা: কত মন্দ তাদের এ ফয়সালা!"
          },
          {
            "en": "At-Tabari ties the two verses together in so many words. Allah created the heavens and the earth for justice and truth, he says, and not for what these people ignorant of Allah reckoned: that He would make the one who committed evil deeds, disobeyed Him and went against His command like those who believe and do righteous deeds, in life and in death. Ma'arif al-Qur'an, commenting on 45:21 and 45:22 together, calls the second verse a complement to the same subject. Here 45:21 serves only to place the verse.",
            "bn": "দুই আয়াতকে তাবারী স্পষ্ট ভাষায় জুড়ে দেন। তাঁর কথায়, আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন ইনসাফ ও হকের জন্য। আল্লাহ সম্পর্কে অজ্ঞ এ লোকেরা যা ভেবেছিল, সেজন্য নয়। তারা ভেবেছিল, যে মন্দ কাজ করেছে, তাঁর নাফরমানি করেছে, তাঁর হুকুমের বিরোধিতা করেছে, তাকে তিনি জীবনে ও মরণে ঈমানদার সৎকর্মশীলদের মতো করে দেবেন। মাআরিফুল কুরআন ৪৫:২১ ও ৪৫:২২ একসঙ্গে আলোচনা করে বলে, দ্বিতীয় আয়াতটি একই বিষয়কে পূর্ণতা দেয়। এখানে ৪৫:২১ শুধু আয়াতটির জায়গা বোঝানোর জন্য।"
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
            "en": "The commentators consulted for this verse gloss bil-haqq in more than one way. Ibn Kathir, in the Arabic, gives a single word: bil-'adl, with justice; the English abridgement renders it, meaning, in justice. At-Tabari pairs two words, justice and truth, and his gloss is worded with li, for: li'l-'adli wal-haqq, for justice and truth. The difference is in his paraphrase. He does not stop to comment on the preposition, and this article draws no rule from it.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোতে বিল-হাক্কের ব্যাখ্যা একরকম নয়। ইবন কাসীর আরবি মূলে একটিমাত্র শব্দে বলেন: বিল-আদল, অর্থাৎ ইনসাফের সঙ্গে। ইংরেজি সংক্ষিপ্ত সংস্করণেও আছে, মানে ইনসাফের সঙ্গে। তাবারী পাশাপাশি রাখেন দুটি শব্দ, ইনসাফ ও হক, আর তাঁর ভাষ্যে শব্দ দুটি আসে লি, অর্থাৎ 'জন্য', দিয়ে: লিল-আদলি ওয়াল-হাক্ক, ইনসাফ ও হকের জন্য। পার্থক্যটা কেবল তাঁর ভাষ্যের শব্দে। এই অব্যয় নিয়ে তিনি আলাদা কিছু বলেননি, আর এ লেখাও এ থেকে কোনো নিয়ম বের করছে না।"
          },
          {
            "en": "The Muyassar widens the gloss to three: Allah created the heavens and the earth with truth, justice and wisdom. Al-Qurtubi gives bil-amri'l-haqq, with the true matter, and adds nothing more on the phrase. As-Sa'di says with wisdom, al-hikmah, and joins a second aim to it at once: and so that He alone be worshipped, with no partner. Of the eight texts consulted, al-Baghawi's carries the verse alone with no comment, so he is not cited for any reading here.",
            "bn": "মুয়াসসার ব্যাখ্যাটা তিনটি শব্দে বিস্তৃত করে: আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হক, ইনসাফ ও হিকমত সহকারে। কুরতুবী বলেন বিল-আমরিল হাক্ক, অর্থাৎ সত্য বিষয় সহকারে, এর বেশি কিছু যোগ করেননি। সা'দী বলেন হিকমত সহকারে, আর সঙ্গে সঙ্গেই আরেকটি লক্ষ্য জুড়ে দেন: যাতে শুধু তাঁরই ইবাদত হয়, তাঁর কোনো শরীক নেই। হাতে থাকা আটটি লেখার মধ্যে বাগাভীর লেখায় শুধু আয়াতটিই আছে, কোনো ব্যাখ্যা নেই। তাই কোনো অর্থের জন্য এখানে তাঁর নাম আনা হয়নি।"
          },
          {
            "en": "So the glosses fall on three words. Justice comes from Ibn Kathir, at-Tabari and the Muyassar; wisdom from the Muyassar and as-Sa'di; truth from at-Tabari, the Muyassar and al-Qurtubi's true matter. None of these texts argues against another, and several hold two or three of the words at once. They are not set out here as rival readings, and the article does not pick one. What each gives is a word for what the creation was made with, and each word is kept under its own name.",
            "bn": "তাহলে ব্যাখ্যাগুলো ঘোরে তিনটি শব্দের চারপাশে। ইনসাফের কথা বলেন ইবন কাসীর, তাবারী ও মুয়াসসার। হিকমতের কথা মুয়াসসার ও সা'দীর। হকের কথা তাবারী ও মুয়াসসারের, আর কুরতুবীর সত্য বিষয়ের মধ্যেও তা আছে। কোনো লেখা অন্যটির বিরুদ্ধে যুক্তি দেয়নি, কয়েকটিতে দুই-তিনটি শব্দ একসঙ্গেই আছে। তাই এগুলোকে পরস্পরবিরোধী মত হিসেবে সাজানো হয়নি, আর এ লেখা কোনো একটিকে বেছেও নেয়নি। প্রত্যেকে বলেছেন সৃষ্টি কী সহকারে হয়েছে, আর প্রত্যেকের শব্দ তাঁর নামেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Built for Oppression",
          "bn": "জুলুমের জন্য গড়া নয়"
        },
        "p": [
          {
            "en": "At-Tabari does not leave bil-haqq as a gloss; he turns it into an argument. To make the disobedient like the believer who did good, he says, would be the act of those who are not people of justice and fairness. Then he puts the point in Allah's voice, as he reads it: Allah did not create the heavens and the earth for wrong and oppression, li'z-zulmi wal-jawr, but We created them for truth and justice. The reckoning of 45:21 is answered by what the creation is for.",
            "bn": "তাবারী বিল-হাক্ককে শুধু শব্দার্থে রেখে দেননি, একে যুক্তিতে পরিণত করেছেন। তাঁর কথায়, নাফরমানকে সৎকর্মশীল ঈমানদারের সমান করে দেওয়া তাদেরই কাজ, যারা ইনসাফ আর ন্যায়ের লোক নয়। এরপর তিনি নিজের পাঠ অনুযায়ী কথাটা আল্লাহর জবানিতে বলেন: আল্লাহ আসমান ও যমীন জুলুম আর অত্যাচারের জন্য সৃষ্টি করেননি, লিয-যুলমি ওয়াল-জাওর। বরং আমি এগুলো সৃষ্টি করেছি হক ও ইনসাফের জন্য। ৪৫:২১-এর ভুল হিসাবের জবাব আসে সৃষ্টির উদ্দেশ্য থেকে।"
          },
          {
            "en": "He then names one thing that belongs to that truth: wa minal-haqqi an nukhalifa bayna hukmi'l-musi'i wal-muhsin, fil-'ajili wal-ajil. Part of the truth is that We make a difference between how the wrongdoer and the doer of good are dealt with, in the near term and the later. At-Tabari places the difference in both, the present and what comes after. He does not say in this passage what the difference in the near term consists of, so nothing is added to it here.",
            "bn": "তারপর তিনি সেই হকের একটি অংশের নাম বলেন: ওয়া মিনাল হাক্কি আন নুখালিফা বাইনা হুকমিল মুসীয়ি ওয়াল মুহসিন, ফিল-আজিলি ওয়াল-আজিল। অর্থাৎ হকের একটা অংশ এই যে, মন্দকারী আর সৎকর্মশীলের সঙ্গে আমার আচরণ এক হবে না, এখনও না, পরেও না। তাবারী পার্থক্যটা দুই জায়গাতেই রাখেন, এ দুনিয়ায় এবং পরের জীবনে। দুনিয়ার পার্থক্যটা কেমন, তা তিনি এ অংশে বলেননি। তাই এ লেখাও এর সঙ্গে কিছু যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Clause and Its And",
          "bn": "উদ্দেশ্য আর শুরুর ওয়া"
        },
        "p": [
          {
            "en": "Wa li-tujza kullu nafsin: and so that every soul may be recompensed. Al-Qurtubi glosses the opening as wa li-kay tujza, and in order that it be recompensed, and the Muyassar uses the same wa li-kay. Both read the li as stating a purpose. Both also say when the recompense falls. Al-Qurtubi adds, after bima kasabat, ay fil-akhirah: that is, in the Hereafter. The Muyassar says the soul is recompensed in the Hereafter for what it earned, of good or of evil.",
            "bn": "ওয়া লিতুজযা কুল্লু নাফসিন: আর যাতে প্রত্যেক প্রাণকে প্রতিদান দেওয়া হয়। কুরতুবী শুরুর অংশের ব্যাখ্যা দেন ওয়া লিকাই তুজযা, অর্থাৎ যেন প্রতিদান দেওয়া হয়। মুয়াসসারও একই ওয়া লিকাই ব্যবহার করে। দুজনেই লি-কে উদ্দেশ্য বোঝানোর শব্দ হিসেবে পড়েন। প্রতিদান কখন, সেটাও দুজনে বলেন। কুরতুবী বিমা কাসাবাতের পরে যোগ করেন, আই ফিল-আখিরাহ: অর্থাৎ আখিরাতে। মুয়াসসার বলে, প্রত্যেক প্রাণ ভালো-মন্দ যা উপার্জন করেছে, আখিরাতে তার প্রতিদান পাবে।"
          },
          {
            "en": "The clause opens with wa, and. A reader may ask what that and is joined to, since no other purpose is spoken before it. None of the commentaries consulted for this verse answers the question. They gloss the purpose and move on. As-Sa'di's paraphrase sets wisdom and the worship of Allah alone first and then says, after that He recompenses, but he offers this as a paraphrase, not as a note on the conjunction. This article leaves the grammar where the texts leave it.",
            "bn": "বাক্যাংশটি শুরু হয়েছে ওয়া দিয়ে, অর্থাৎ আর। পাঠকের মনে প্রশ্ন জাগতে পারে, এই 'আর' কীসের সঙ্গে জুড়েছে, কারণ এর আগে অন্য কোনো উদ্দেশ্যের কথা বলা নেই। এ আয়াতের যে তাফসীরগুলো হাতে আছে, তার কোনোটিই এর জবাব দেয়নি। সবাই উদ্দেশ্যটা ব্যাখ্যা করে সামনে এগিয়েছেন। সা'দীর ভাষ্যে আগে আসে হিকমত আর এক আল্লাহর ইবাদত, তারপর তিনি বলেন: এরপর তিনি প্রতিদান দেবেন। তবে এটা তাঁর ভাষ্য, ওয়া শব্দটি নিয়ে আলাদা মন্তব্য নয়। ব্যাকরণের প্রশ্নটা তাফসীরগুলো যেখানে রেখেছে, এ লেখাও সেখানেই রাখল।"
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
            "bn": "বিমা কাসাবাত: যা সে উপার্জন করেছে তার জন্য। তাবারী অংশটি নতুন করে বলেন এভাবে: আল্লাহ প্রত্যেক আমলকারীকে তার আমলের প্রতিদান দেবেন। সৎকর্মশীলকে দেবেন ভালো দিয়ে, আল-মুহসিনু বিল-ইহসান। আর মন্দকারীকে দেবেন তার যা প্রাপ্য, বিমা হুয়া আহলুহ। দুই অংশের শব্দ এক রকম নয়। ভালোর জবাব আসে নাম ধরে ভালো দিয়ে, আর মন্দের জবাব আসে তার প্রাপ্য দিয়ে। মুয়াসসার উপার্জনকে দুই দিকেই খোলা রাখে: প্রাণ যা উপার্জন করেছে, ভালো হোক বা মন্দ।"
          },
          {
            "en": "At-Tabari then rules out three things the recompense is not. It is not that We cheat the doer of good of the reward of his good deed; nor that We load onto him the crime of someone else and punish him for it; nor that We give the wrongdoer the reward of someone else's good and honour him for it. But it is that We recompense each for what his own hands earned. In his reading, nobody's deeds pass to anybody else's account.",
            "bn": "এরপর তাবারী তিনটি জিনিস বাদ দেন, প্রতিদান যা নয়। সৎকর্মশীলকে তার নেকির সওয়াব থেকে কম দেওয়া হবে না। অন্যের অপরাধ তার ঘাড়ে চাপিয়ে তাকে শাস্তিও দেওয়া হবে না। আবার মন্দকারীকে অন্যের নেকির সওয়াব দিয়ে সম্মানিতও করা হবে না। বরং প্রত্যেককে প্রতিদান দেওয়া হবে তার নিজের হাতের উপার্জন অনুযায়ী। তাবারীর পাঠে কারও আমল অন্য কারও হিসাবে চলে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "None of Them Wronged",
          "bn": "কারও প্রতি জুলুম হবে না"
        },
        "p": [
          {
            "en": "The verse closes on wa hum la yuzlamun, and they will not be wronged. At-Tabari and the Muyassar gloss it in nearly the same words: they will not be wronged in the recompense of their deeds, jaza'a a'malihim. Al-Qurtubi and Ibn Kathir, in the Arabic, repeat the words of the verse and add no gloss of their own. The verb is passive, and none of the texts consulted stops on that. The clause is read, in the two that explain it, as a statement about the recompense.",
            "bn": "আয়াতের শেষ কথা ওয়া হুম লা য়ুযলামূন: আর তাদের উপর জুলুম করা হবে না। তাবারী ও মুয়াসসার প্রায় একই শব্দে এর ব্যাখ্যা দেন: তাদের আমলের প্রতিদানে তাদের উপর জুলুম হবে না, জাযাআ আ'মালিহিম। কুরতুবী আর আরবি মূলের ইবন কাসীর আয়াতের শব্দগুলোই আবার বলেন, নিজেদের কোনো ব্যাখ্যা যোগ করেন না। ক্রিয়াটি কর্মবাচ্যে, তবে হাতে থাকা কোনো লেখা এ নিয়ে থামেনি। যে দুটি লেখা ব্যাখ্যা দিয়েছে, তাতে বাক্যটি প্রতিদান সম্পর্কে একটি ঘোষণা।"
          },
          {
            "en": "At-Tabari's three exclusions in the previous section are his own way of spelling out the same assurance: the doer of good is not cut short, and nobody carries a crime that is not his. Ma'arif al-Qur'an, closing its comment on this verse, says that the Day of Requital is necessary in order to wipe out wrong and injustice. Beyond what these texts say, this article adds no account of its own of how divine justice works. The verse's own words carry the assurance.",
            "bn": "আগের অংশে তাবারীর তিনটি না-বাচক কথা আসলে একই আশ্বাসকে খুলে বলার তাঁর নিজস্ব ধরন। সৎকর্মশীলকে কম দেওয়া হবে না, আর যে অপরাধ যার নয়, তা কেউ বহন করবে না। মাআরিফুল কুরআন এ আয়াতের আলোচনা শেষ করতে গিয়ে বলে, অন্যায় আর অবিচার মুছে ফেলার জন্যই প্রতিদান দিবস জরুরি। এসব লেখা যা বলেছে, তার বাইরে আল্লাহর ইনসাফ কীভাবে কাজ করে, সে বিষয়ে এ লেখা নিজের থেকে কোনো ব্যাখ্যা যোগ করছে না। আশ্বাসটা বহন করে আয়াতের নিজের শব্দই।"
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
            "bn": "মাআরিফুল কুরআন ৪৫:২১ ও ৪৫:২২ দুটিকে একটি যুক্তি হিসেবে পড়ে। তার ভিত্তি হলো: দুনিয়ায় কেউ তার আমলের পুরো পুরস্কার বা পুরো শাস্তি পায় না। সেখান থেকে সে সিদ্ধান্ত টানে যে আরেকটি জগৎ থাকতেই হবে, আখিরাত ও মৃত্যুর পরের জীবন, যেখানে মানুষ পুরো প্রতিদান পাবে। আর বলে, ৪৫:২২ এ কথাকেই পূর্ণতা দেয়। আমাদের আয়াত থেকে সে উদ্ধৃত করে ওয়া লিতুজযা কুল্লু নাফসিম বিমা কাসাবাত ওয়া হুম লা য়ুযলামূন, অর্থাৎ উদ্দেশ্য ও আশ্বাস একসঙ্গে।"
          },
          {
            "en": "It then raises the obvious question, why people are not repaid in this world, and answers that repayment here would not fit the divine wisdom of creation: Allah made this world the domain of deeds and of test and trial, not the domain of requital. It ends, Allah knows best. Set beside at-Tabari, who places a difference between the wrongdoer and the doer of good both now and later, Ma'arif speaks of the full measure. These are two emphases, and neither text addresses the other.",
            "bn": "এরপর সে স্বাভাবিক প্রশ্নটা তোলে: মানুষকে দুনিয়াতেই প্রতিদান দেওয়া হয় না কেন? জবাব: তা সৃষ্টির ঐশী হিকমতের সঙ্গে মেলে না। আল্লাহ এ দুনিয়াকে বানিয়েছেন আমল আর পরীক্ষার ঘর, প্রতিদানের ঘর নয়। শেষে বলে, আল্লাহই ভালো জানেন। তাবারী মন্দকারী আর সৎকর্মশীলের পার্থক্য রাখেন এখনও এবং পরেও। মাআরিফ কথা বলে পুরো প্রতিদান নিয়ে। পাশাপাশি রাখলে দুটি আলাদা জোর দেওয়ার জায়গা দেখা যায়, আর কোনো লেখাই অন্যটির জবাব দেয়নি।"
          },
          {
            "en": "As-Sa'di adds a different question to the same span between creation and recompense. Allah created the heavens and the earth with wisdom and so that He alone be worshipped, he says; then, after that, He recompenses those He commanded to worship Him and on whom He bestowed favours, outward and inward. The question at the recompense, in his words: did they thank Allah and carry out what they were commanded, or did they deny, and so deserve the recompense of the ungrateful?",
            "bn": "সৃষ্টি আর প্রতিদানের মাঝের এ পরিসরে সা'দী আরেকটি প্রশ্ন যোগ করেন। তাঁর কথায়, আল্লাহ আসমান ও যমীন সৃষ্টি করেছেন হিকমত সহকারে, আর যাতে শুধু তাঁরই ইবাদত হয়। এরপর তিনি প্রতিদান দেবেন তাদের, যাদের তিনি ইবাদতের হুকুম দিয়েছেন আর প্রকাশ্য ও গোপন নিয়ামত দিয়েছেন। প্রতিদানের সময়ের প্রশ্নটা তাঁর ভাষায়: তারা কি আল্লাহর শুকরিয়া আদায় করেছে, যা হুকুম করা হয়েছিল তা পালন করেছে? নাকি অস্বীকার করেছে, আর তাই অকৃতজ্ঞের প্রতিদানের যোগ্য হয়েছে?"
          }
        ]
      },
      {
        "h": {
          "en": "No Verdict Handed to Readers",
          "bn": "পাঠকের হাতে কোনো রায় নেই"
        },
        "p": [
          {
            "en": "One thing needs saying plainly. The evildoers of 45:21, whose reckoning this verse answers, are a group the text describes: those who commit evil deeds and think they will be made equal with those who believe. The verse speaks only of what it names and licenses nothing against any living person or community. The recompense it names belongs to Allah, on the terms He states. It hands no reader a verdict on a neighbour, a rival or a people, and nobody is named by it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। ৪৫:২১-এর যে মন্দকারীদের ভুল হিসাবের জবাব এ আয়াত দিচ্ছে, তারা আয়াতে বর্ণিত একটি দল: যারা মন্দ কাজ করে আর ভাবে, তাদেরকে ঈমানদারদের সমান করা হবে। আয়াত শুধু তাদের বর্ণনাই দেয়। এ দিয়ে কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অধিকার কারও জন্মায় না। যে প্রতিদানের কথা এখানে, তা আল্লাহর হাতে, তাঁরই বলা শর্তে। প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো জাতির ব্যাপারে এ আয়াত পাঠকের হাতে কোনো রায় তুলে দেয় না। এতে কারও নামও নেই।"
          },
          {
            "en": "None of the eight commentaries consulted for this verse attaches a hadith to it, so none is given here. Nor do they report an occasion of revelation for it; the verse is read in its place, after 45:21. The cross-references a reader might expect on creation in truth are not drawn here either, because none of these texts draws them on this verse. What remains is the verse itself, and the glosses the named commentators give.",
            "bn": "এ আয়াতের জন্য হাতে থাকা আটটি তাফসীরের কোনোটিই এর সঙ্গে কোনো হাদিস জুড়ে দেয়নি, তাই এখানে কোনো হাদিস আনা হয়নি। নাজিলের কোনো উপলক্ষও তারা বর্ণনা করেনি। আয়াতটি পড়া হয়েছে তার জায়গায়, ৪৫:২১-এর পরে। হক সহকারে সৃষ্টি নিয়ে অন্য যে আয়াতগুলোর কথা পাঠকের মনে আসতে পারে, সেগুলোও এখানে টানা হয়নি, কারণ এসব তাফসীর এ আয়াতে সেগুলো টানেনি। বাকি থাকে আয়াতটি নিজে, আর নাম ধরে উল্লেখ করা তাফসীরকারদের ব্যাখ্যা।"
          },
          {
            "en": "The verse speaks of every soul, kullu nafsin, so the reader is inside it before anyone else. A practical way to hold it: at the end of a day, name one thing done that no one saw, and trust that it was not lost; name one thing done to someone else that you would not want to meet again, and set it right while it can still be set right. Then leave the accounts of others where the verse leaves them.",
            "bn": "আয়াতটি বলে প্রত্যেক প্রাণের কথা, কুল্লু নাফসিন। তাই অন্য কারও আগে পাঠক নিজেই এর ভেতরে আছেন। হাতে-কলমে ধরে রাখার একটা উপায়: দিনের শেষে এমন একটা কাজের কথা মনে করুন, যা কেউ দেখেনি, আর ভরসা রাখুন, সেটা হারিয়ে যায়নি। আরেকটা কাজের কথাও মনে করুন, যা আপনি কারও সঙ্গে করেছেন আর যার মুখোমুখি আবার হতে চাইবেন না। শোধরানোর সুযোগ থাকতে থাকতেই তা শুধরে নিন। আর অন্যদের হিসাব সেখানেই রেখে দিন, আয়াত যেখানে রেখেছে।"
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
            "bn": "ওয়া লিল্লাহি মুলকুস সামাওয়াতি ওয়াল আরদ, ওয়া ইয়াওমা তাকূমুস সা'আতু ইয়াওমাইযিন ইয়াখসারুল মুবতিলূন: আকাশ ও জমিনের রাজত্ব আল্লাহরই, আর যেদিন কিয়ামত কায়েম হবে, সেদিন বাতিলপন্থীরা ক্ষতিগ্রস্ত হবে। আরবিতে মাত্র দশটি শব্দ, দুটি বাক্যাংশে ভাগ করা। আয়াতটি আসে ৪৫:২৪ থেকে ৪৫:২৬ আয়াতের ঠিক পরে। সেখানে অস্বীকারকারীরা বলে, কাল ছাড়া আর কিছু আমাদের ধ্বংস করে না। তারা দাবি তোলে, আমাদের বাপদাদাদের ফিরিয়ে আনো। জবাবে বলা হয়, আল্লাহই জীবন দেন, তিনিই মৃত্যু দেন, আর তিনিই তোমাদের কিয়ামতের দিনে একত্র করবেন।"
          },
          {
            "en": "The verse adds to that reply rather than repeating it. Ibn Kathir joins its two halves with a single phrase. Allah tells us, he writes, that He is the owner of the heavens and the earth and the one who rules over them in this world and in the Hereafter, and for this reason He said: and on the Day the Hour is established. He does not spell the link out any further. In his reading the dominion comes first, and the Day is introduced as following from it.",
            "bn": "আয়াতটি আগের জবাবের পুনরাবৃত্তি করে না, তার সঙ্গে নতুন কথা জোড়ে। ইবন কাসীর এর দুই অংশকে একটিমাত্র কথায় বেঁধে দেন। তিনি লেখেন, আল্লাহ জানাচ্ছেন যে তিনিই আকাশ ও জমিনের মালিক, দুনিয়া ও আখিরাতে দুটোরই শাসক। আর এ কারণেই তিনি বলেছেন: যেদিন কিয়ামত কায়েম হবে। সম্পর্কটা তিনি এর বেশি খুলে বলেন না। তাঁর পাঠে রাজত্বের কথা আসে আগে, আর সেই দিনটিকে আনা হয় তারই ফল হিসেবে।"
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
            "bn": "তাবারী মুলক শব্দের অর্থ করেন সুলতান, অর্থাৎ সাত আসমান ও জমিনের উপর সার্বভৌম কর্তৃত্ব। তারপর সঙ্গে সঙ্গেই এ থেকে যুক্তি দাঁড় করান। তিনি বলেন, এ কর্তৃত্ব আল্লাহর। তোমরা যাকে তাঁর শরিক বলে দাবি করো, তাঁকে ছেড়ে যার ইবাদত করো, এ কর্তৃত্ব তার নয়। যেসব উপাস্য আর প্রতিদ্বন্দ্বীকে তোমরা ডাকো, তারা নিজেরাই তাঁর রাজত্বের ভেতরে, তাদের উপরও তাঁর হুকুম চলে। তাহলে এমন অবস্থানের কেউ কীভাবে তাঁর শরিক হয়? আর যিনি তোমাদের মালিক, তোমাদের উপাস্যদেরও মালিক, তাঁর ইবাদত ছেড়ে তোমরা কীভাবে ওদের ইবাদত করো?"
          },
          {
            "en": "The others keep to description. Al-Qurtubi qualifies the dominion with two words: in creation and in ownership, khalqan wa mulkan. The Muyassar adds a third: the seven heavens and the earth are His in creation, ownership and servitude, 'ubudiyya. Ibn Kathir, as quoted above, has Him as owner and as ruler in both worlds. As-Sa'di speaks of the breadth of His dominion and of His being alone in disposing of affairs and managing them at all times.",
            "bn": "বাকিরা শুধু বর্ণনা দিয়েই থামেন। কুরতুবী রাজত্বের সঙ্গে দুটি শব্দ জোড়েন: খালকান ওয়া মুলকান, সৃষ্টি হিসেবে আর মালিকানা হিসেবে। মুয়াসসার যোগ করে তৃতীয়টি। তার ভাষায় সাত আসমান ও জমিন আল্লাহর সৃষ্টি, তাঁর মালিকানা, আর সবই তাঁর বন্দেগিতে নিয়োজিত, যাকে বলে উবূদিয়্যা। ইবন কাসীরের কথা আগেই এসেছে: তাঁর ভাষায় আল্লাহ দুই জগতেরই মালিক ও শাসক। সা'দী বলেন তাঁর রাজত্বের ব্যাপকতার কথা, আর সব সময় সব কিছুর পরিচালনা ও ব্যবস্থাপনায় তিনি যে একা, সে কথা।"
          },
          {
            "en": "These are differences of emphasis, and they are worth keeping apart. At-Tabari reads the clause as a refutation aimed at those who give Allah partners. Al-Qurtubi and the Muyassar list the ways in which things belong to Him. Ibn Kathir and as-Sa'di stress rule across time, Ibn Kathir carrying it explicitly into the Hereafter. None of the texts consulted here ranks one reading over another, and this article does not rank them either.",
            "bn": "পার্থক্যগুলো আসলে জোর কোথায় পড়ছে, তার। তবু এগুলো আলাদা করে বুঝে রাখা দরকার। তাবারী বাক্যটিকে পড়েন আল্লাহর সঙ্গে শরিককারীদের বিরুদ্ধে খণ্ডন হিসেবে। কুরতুবী ও মুয়াসসার গুনে দেখান কোন কোন দিক থেকে সবকিছু তাঁর। ইবন কাসীর ও সা'দী জোর দেন সব কালে তাঁর শাসনের উপর, আর ইবন কাসীর সেটাকে স্পষ্ট করে আখিরাত পর্যন্ত টেনে নেন। সংগৃহীত কোনো তাফসীর একটি পাঠকে অন্যটির উপরে রাখে না। এ লেখাও রাখছে না।"
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
            "bn": "আরবিতে দিনটির নাম আসে দুবার। প্রথমে ওয়া ইয়াওমা তাকূমুস সা'আহ, যেদিন কিয়ামত কায়েম হবে। তারপর ইয়াওমাইযিন, সেদিন। কুরতুবী গঠনটা ব্যাখ্যা করেন। তাঁর মতে প্রথম ইয়াওম শব্দটি মানসূব, তাকে নিয়ন্ত্রণ করছে ইয়াখসারু, অর্থাৎ ক্ষতিগ্রস্ত হবে। আর ইয়াওমাইযিন হয় জোর দেওয়ার জন্য পুনরাবৃত্তি, নয়তো প্রথমটির বদল। এরপর 'বলা হয়েছে' কথাটি দিয়ে তিনি দ্বিতীয় একটি মত আনেন। সেই মতে অর্থ দাঁড়ায়: যেদিন কিয়ামত কায়েম হবে, সেদিনের রাজত্বও তাঁরই। তখন ইয়াখসারু নিয়ন্ত্রণ করে ইয়াওমাইযিনকে।"
          },
          {
            "en": "On the first construction the verse makes two statements, one about dominion and one about loss, and the doubled day presses the second home. On the second, the Day itself falls within what belongs to Allah, and the loss is then announced for it. Al-Qurtubi gives the first as his own analysis and reports the second without endorsing or rejecting it. Both are kept here as he gives them.",
            "bn": "প্রথম গঠন অনুযায়ী আয়াতে দুটি আলাদা কথা: একটি রাজত্বের, একটি ক্ষতির। আর দুবার বলা দিনটি দ্বিতীয় কথাটিকে আরও জোরালো করে। দ্বিতীয় গঠন অনুযায়ী সেই দিনটিও আল্লাহর রাজত্বের অংশ, তারপর সেদিনের ক্ষতির ঘোষণা আসে। কুরতুবী প্রথমটিকে নিজের বিশ্লেষণ হিসেবে দেন, আর দ্বিতীয়টি উল্লেখ করেন গ্রহণ বা খণ্ডন না করে। দুটোকেই এখানে তাঁর দেওয়া রূপেই রাখা হলো।"
          },
          {
            "en": "What the Hour's being established involves is described in similar terms. At-Tabari: the Hour comes in which Allah raises the dead from their graves and gathers them for the standing of presentation, mawqif al-'ard. The Muyassar: the dead are raised from their graves and brought to account. As-Sa'di: He gathers all creatures for the standing of the Resurrection. Ibn Kathir names it simply the Day of Resurrection.",
            "bn": "কিয়ামত কায়েম হওয়ার মানে কী, সে বর্ণনা তাফসীরগুলোতে প্রায় একই রকম। তাবারীর ভাষায়, সেই সময় আসবে যখন আল্লাহ মৃতদের কবর থেকে জীবিত করে উঠাবেন আর হাজির করার জায়গায়, মাওকিফুল আরদে, একত্র করবেন। মুয়াসসার বলে, মৃতরা কবর থেকে উঠবে আর তাদের হিসাব নেওয়া হবে। সা'দীর ভাষায়, তিনি সব সৃষ্টিকে কিয়ামতের অবস্থানস্থলে জড়ো করবেন। ইবন কাসীর একে সোজাসুজি কিয়ামতের দিন বলেন।"
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
            "bn": "আল-মুবতিলূন কারা? ইবন কাসীর এক কথায় উত্তর দেন: যারা আল্লাহকে অস্বীকার করে, আর তিনি তাঁর রাসূলদের কাছে যে সুস্পষ্ট নিদর্শন ও পরিষ্কার প্রমাণ নাজিল করেছেন তা প্রত্যাখ্যান করে। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণেও একই সংজ্ঞা, সেখানে শব্দটির অনুবাদ বাতিলের অনুসারী। মুয়াসসারও প্রায় একই কথা বলে, বদল শুধু এক জায়গায়: তার ভাষায় প্রমাণগুলো নাজিল হয়েছে তাঁর রাসূলের কাছে, একবচনে। এ পাঠে মুবতিলের পরিচয় তার প্রত্যাখ্যান দিয়ে। প্রমাণ ছিল স্পষ্ট, তার সামনেই রাখা হয়েছিল, তবু সে ফিরিয়ে দিয়েছে।"
          },
          {
            "en": "At-Tabari defines the word by speech and worship. The mubtilun are those who dealt in falsehood in this world in their words, in their claim that Allah has a partner, and in their worship of gods besides Him. This ties the end of the verse to its beginning in his own reading, where the dominion clause was already an argument against such partners. For at-Tabari the falsehood is specific: the false word spoken about Allah, and the worship that follows from it.",
            "bn": "তাবারী শব্দটির সংজ্ঞা দেন কথা আর ইবাদত দিয়ে। মুবতিলূন তারা, যারা দুনিয়ায় বাতিলের কারবার করেছে নিজেদের কথায়, আল্লাহর শরিক আছে বলে দাবি করে, আর তাঁকে ছেড়ে অন্য উপাস্যদের ইবাদত করে। তাবারীর নিজের পাঠে এভাবে আয়াতের শেষ অংশ তার শুরুর সঙ্গে জুড়ে যায়, কারণ রাজত্বের বাক্যটিকেই তিনি আগে এমন শরিকদের বিরুদ্ধে যুক্তি হিসেবে পড়েছেন। তাঁর কাছে বাতিলটা নির্দিষ্ট: আল্লাহ সম্পর্কে বলা মিথ্যা কথা, আর সেখান থেকে জন্ম নেওয়া ইবাদত।"
          },
          {
            "en": "As-Sa'di defines them by purpose and by result. They are those who came with falsehood, al-batil, in order to refute the truth with it, and whose deeds were batila, void, because those deeds were attached to falsehood, so on the Day of Resurrection they batalat, came to nothing. Al-Baghawi is briefest: the disbelievers who are ashab al-abatil, people of falsehoods. So four portraits: the rejecter of proofs, the speaker of a false claim about Allah, whoever argues against the truth, and the holder of falsehoods. The texts set them side by side, and so does this article.",
            "bn": "সা'দী সংজ্ঞা দেন উদ্দেশ্য ও পরিণতি দিয়ে। তারা বাতিল নিয়ে এসেছিল সত্যকে খণ্ডন করার জন্য। তাদের আমলও ছিল বাতিলা, অর্থাৎ অসার, কারণ সেগুলোর ভিত্তি ছিল বাতিলের উপর। তাই কিয়ামতের দিন সেগুলো বাতালাত, অর্থাৎ নিষ্ফল হয়ে গেল। বাগাভী সবচেয়ে সংক্ষেপে বলেন: কাফেররা, যারা আসহাবুল আবাতীল, বাতিলের ধারক। তাহলে চারটি ছবি পাওয়া গেল: যে প্রমাণ ফিরিয়ে দেয়, যে আল্লাহ সম্পর্কে মিথ্যা দাবি করে, যে সত্যের বিরুদ্ধে তর্ক করে, আর যে বাতিল আঁকড়ে থাকে। তাফসীরগুলো এদের পাশাপাশি রাখে, এ লেখাও তাই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Places Exchanged, Deeds Undone",
          "bn": "বদলে যাওয়া ঠিকানা, নিষ্ফল আমল"
        },
        "p": [
          {
            "en": "What is lost? At-Tabari explains yakhsaru with yughbanu: they are cheated, as a trader is cheated in a bargain. The cheating lies in this, he says: those who held to the truth, al-muhiqqun, win the mubtilun's places in Paradise, and the mubtilun are given in exchange places in the Fire that had been meant for the people of truth. Their own places in Paradise are given to others. That, at-Tabari ends, is the manifest loss.",
            "bn": "ক্ষতিটা কী? তাবারী ইয়াখসারু শব্দের ব্যাখ্যা করেন ইউগবানু দিয়ে, অর্থাৎ লেনদেনে ঠকে যাওয়া। তিনি বলেন, ঠকাটা এখানে: যারা সত্যের উপর ছিল, সেই মুহিক্কূন জান্নাতে মুবতিলূনের ঠিকানাগুলো জিতে নেয়। আর বদলে মুবতিলূনকে দেওয়া হয় জাহান্নামের সেই ঠিকানাগুলো, যা রাখা ছিল সত্যপন্থীদের জন্য। জান্নাতে তাদের নিজেদের জায়গা চলে যায় অন্যদের হাতে। তাবারী শেষ করেন এই বলে: এটাই সুস্পষ্ট ক্ষতি।"
          },
          {
            "en": "Al-Qurtubi reaches the same object by grammar. The object of yakhsaru is left unstated, he notes, and the meaning is that they lose their places in Paradise. So two commentators, working by different routes, name the same thing as what is lost: a place that was there to be had. Neither text describes the loss as a mere absence of reward; both describe something that could have been theirs and passes to others or is forfeited.",
            "bn": "কুরতুবী একই জিনিসে পৌঁছান ব্যাকরণের পথে। তিনি দেখান, ইয়াখসারু ক্রিয়ার কর্ম উহ্য রাখা হয়েছে, আর অর্থ হলো: তারা জান্নাতে নিজেদের ঠিকানা হারাবে। ফলে দুই মুফাসসির দুই ভিন্ন পথে এসে একই জিনিসকে হারানো বলে চিহ্নিত করেন: এমন এক ঠিকানা, যা পাওয়ার সুযোগ ছিল। দুজনের কেউই ক্ষতিটাকে শুধু প্রতিদান না পাওয়া বলে বর্ণনা করেন না। তাঁদের বর্ণনায় এমন কিছু, যা তাদের হতে পারত, অথচ হাতছাড়া হয়ে যায় বা অন্যের কাছে চলে যায়।"
          },
          {
            "en": "As-Sa'di describes the loss differently. On the Day of Resurrection, the day on which realities become clear, their deeds came to nothing and faded away from them; the reward escaped them and they obtained painful punishment. Here what is lost is the work itself, which had no foundation. Al-Baghawi puts it in terms of disclosure: on that Day their loss becomes apparent, in that they end up in the Fire. A forfeited place, a voided work, a loss made visible: the differences stand as differences.",
            "bn": "সা'দী ক্ষতিটাকে বর্ণনা করেন অন্যভাবে। কিয়ামতের দিন, যেদিন সব বাস্তবতা স্পষ্ট হয়ে যায়, তাদের আমল নিষ্ফল হয়ে মিলিয়ে গেল। সওয়াব তাদের হাতছাড়া হলো, আর তারা পেল যন্ত্রণাদায়ক শাস্তি। এখানে হারানো জিনিস হলো আমল নিজেই, যার কোনো ভিত্তি ছিল না। বাগাভী কথাটা বলেন প্রকাশের ভাষায়: সেদিন তাদের ক্ষতি প্রকাশ পাবে, কারণ তারা গিয়ে পৌঁছাবে জাহান্নামে। হাতছাড়া ঠিকানা, নিষ্ফল আমল, প্রকাশ পাওয়া ক্ষতি। পার্থক্যগুলো পার্থক্য হিসেবেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Put to a Jester",
          "bn": "এক রসিককে করা প্রশ্ন"
        },
        "p": [
          {
            "en": "Ibn Kathir closes his comment with a report he takes from Ibn Abi Hatim. Sufyan ath-Thawri came to Madinah and heard al-Ma'afiri saying some of the things that people are made to laugh at. He said to him: O shaykh, do you not know that Allah has a day on which the people of falsehood will lose? The narrator adds that it remained recognizable in al-Ma'afiri until he went to meet Allah, Mighty and Majestic. The text does not say exactly what remained, whether the effect of the words or a changed manner.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন ইবন আবী হাতিম থেকে নেওয়া একটি বর্ণনা দিয়ে। সুফিয়ান সাওরী মদীনায় এলেন। সেখানে শুনলেন, মাআফিরী লোক-হাসানো কিছু কথা বলছেন। তিনি তাঁকে বললেন: হে শায়খ, আপনি কি জানেন না, আল্লাহর এমন এক দিন আছে যেদিন বাতিলপন্থীরা ক্ষতিগ্রস্ত হবে? বর্ণনাকারী যোগ করেন, মহান আল্লাহর সঙ্গে মিলিত হওয়া পর্যন্ত মাআফিরীর মধ্যে তা চেনা যেত। ঠিক কী চেনা যেত, কথাটার প্রভাব নাকি বদলে যাওয়া আচরণ, পাঠে তা বলা নেই।"
          },
          {
            "en": "Two things should be clear about this report. It is about later figures, not a saying of the Prophet ﷺ, and Ibn Kathir gives it with only the words Ibn Abi Hatim mentioned it, with no chain quoted and no grading. His English abridgement omits it. It is told here exactly as far as that text goes. As for hadith, none of the commentaries consulted for this verse attaches a hadith to it, so none is cited here.",
            "bn": "এ বর্ণনা সম্পর্কে দুটি কথা পরিষ্কার থাকা দরকার। এটি পরবর্তী যুগের মানুষদের ঘটনা, নবী ﷺ-এর বাণী নয়। ইবন কাসীর এটি এনেছেন শুধু এটুকু বলে যে ইবন আবী হাতিম এটি উল্লেখ করেছেন। কোনো সনদ উদ্ধৃত করেননি, এর মান নিয়েও কিছু বলেননি। তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণে বর্ণনাটি নেই। এখানে তা বলা হলো ঠিক ততটুকুই, যতটুকু ওই পাঠে আছে। আর হাদিসের ব্যাপারে: এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো হাদিস জোড়েনি। তাই এখানে কোনো হাদিস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Portrait, Not a Warrant",
          "bn": "ছবি আঁকা, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "The mubtilun are a condemned group, and this needs saying plainly. The verse speaks only of what it names: those who, in the commentators' words, rejected the proofs sent to the messengers, claimed partners for Allah, argued against the truth or held to falsehoods, and the loss that meets them on the Day of Resurrection. It licenses nothing against any living person or community. It hands no reader a list of names, and this article attaches none to it.",
            "bn": "মুবতিলূন এক নিন্দিত দল, আর কথাটা সোজাসুজি বলা দরকার। তাফসীরগুলো যা বর্ণনা করে, আয়াতও তা-ই বর্ণনা করে: মুফাসসিরদের ভাষায় যারা রাসূলদের কাছে পাঠানো প্রমাণ প্রত্যাখ্যান করেছে, আল্লাহর শরিক দাবি করেছে, সত্যের বিরুদ্ধে তর্ক করেছে বা বাতিল আঁকড়ে থেকেছে, আর কিয়ামতের দিন তাদের যে ক্ষতির মুখে পড়তে হবে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কোনো পাঠকের হাতে এ আয়াত নামের তালিকা তুলে দেয় না, আর এ লেখাও তাতে কোনো নাম জুড়ে দিচ্ছে না।"
          },
          {
            "en": "Notice also where the verse places the loss: on the Day the Hour is established, and in the dominion of Allah. The judgement belongs to the one who owns the heavens and the earth, and the time of it is that Day. Nothing in the commentaries consulted here turns the verse into a warrant for one person to declare another lost now. The surah goes on to describe that Day further in the verses that follow, which are left to their own pages.",
            "bn": "এটাও খেয়াল করুন, আয়াত ক্ষতিটাকে কোথায় রাখে: যেদিন কিয়ামত কায়েম হবে সেদিনে, আর আল্লাহর রাজত্বের ভেতরে। ফয়সালা তাঁর, যিনি আকাশ ও জমিনের মালিক, আর তার সময় সেই দিন। সংগৃহীত কোনো তাফসীর এ আয়াতকে এমন ছাড়পত্র বানায় না, যা দিয়ে একজন মানুষ আরেকজনকে এখনই ক্ষতিগ্রস্ত ঘোষণা করতে পারে। সূরাটি পরের আয়াতগুলোতে সেই দিনের আরও বর্ণনা দেয়। সেগুলোর আলোচনা তাদের নিজ নিজ পাতায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Auditing One's Own Claims",
          "bn": "নিজের দাবির হিসাব নেওয়া"
        },
        "p": [
          {
            "en": "Turned inward, the verse asks a reader to weigh what he stands on. Each of the four portraits has a quieter form in an ordinary life: a clear reminder heard and set aside, a claim repeated because it is convenient rather than true, an argument pressed against something one knows to be right, a falsehood held because letting go of it would cost something. The commentators speak of the deniers; the reader who wants to benefit asks where his own words have drifted the same way.",
            "bn": "নিজের দিকে ফেরালে আয়াতটি পাঠককে জিজ্ঞেস করে, সে কিসের উপর দাঁড়িয়ে আছে। চারটি ছবিরই সাধারণ জীবনে একটা চুপচাপ, ছোট রূপ আছে। স্পষ্ট উপদেশ শুনেও পাশে সরিয়ে রাখা। সত্য বলে নয়, সুবিধাজনক বলে কোনো দাবি বারবার বলা। যা সঠিক বলে জানি, তার বিরুদ্ধেই তর্ক চালিয়ে যাওয়া। ছাড়তে গেলে কিছু হারাতে হবে বলে কোনো মিথ্যা আঁকড়ে থাকা। মুফাসসিররা কথা বলেছেন অস্বীকারকারীদের নিয়ে। যে পাঠক উপকার পেতে চান, তিনি খুঁজে দেখেন, তাঁর নিজের কথাও কোথায় সেই দিকে সরে গেছে।"
          },
          {
            "en": "The verse also places that weighing inside a larger fact. The heavens and the earth already belong to Allah; nothing a person owns or argues for sits outside that. Sufyan ath-Thawri's question to al-Ma'afiri, as Ibn Kathir reports it, used this verse to stop a man in the middle of his talk. A reader can put the same question to himself before he speaks, jokes or defends a position: will this still stand on the Day when whatever rests on falsehood is lost?",
            "bn": "আয়াতটি এ যাচাইকে আরও বড় এক সত্যের ভেতরে রাখে। আকাশ ও জমিন এখনই আল্লাহর। মানুষ যা কিছুর মালিক, যা নিয়ে তর্ক করে, তার কিছুই এর বাইরে নয়। ইবন কাসীরের বর্ণনা অনুযায়ী সুফিয়ান সাওরী মাআফিরীকে কথার মাঝখানে থামাতে এ আয়াতকেই কাজে লাগিয়েছিলেন। পাঠকও কথা বলার আগে, রসিকতা করার আগে, কোনো মতের পক্ষে দাঁড়ানোর আগে নিজেকে একই প্রশ্ন করতে পারেন: যেদিন মিথ্যার উপর দাঁড়ানো সবকিছু হারিয়ে যাবে, সেদিন কি এটা টিকে থাকবে?"
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
            "bn": "ওয়া ইযা কীলা ইন্না ওয়া'দাল্লাহি হাক্কুন ওয়াস-সা'আতু লা রাইবা ফীহা, কুলতুম মা নাদরী মাস-সা'আহ, ইন নাযুন্নু ইল্লা যান্নান ওয়া মা নাহনু বিমুসতাইকিনীন: আর যখন বলা হয়েছিল, আল্লাহর প্রতিশ্রুতি সত্য, আর কিয়ামত, তাতে কোনো সন্দেহ নেই, তোমরা বলেছিলে, কিয়ামত কী আমরা জানি না, আমরা শুধু আন্দাজ করি, আর আমরা নিশ্চিত নই। আরবিতে মোট ২২টি শব্দ। আয়াতটি নতুন কোনো দৃশ্য খোলে না। ৪৫:৩১ আয়াতে কাফিরদের উদ্দেশে যে সম্বোধন শুরু হয়েছে, এটি তারই ধারাবাহিকতা। তার আগে ৪৫:৩০ আয়াতে মুমিনরা রহমতের ভেতরে প্রবেশ করেছেন।"
          },
          {
            "en": "At-Tabari frames it this way: wa yuqalu lahum hina'idhin, and it will be said to them at that time, followed by the verse. As-Sa'di places it in the same chain of reproach: yuwabbakhuna aydan, they are rebuked also, with these words, and he adds that they had said what they said munkirina, denying it. The abridged English Ibn Kathir says, on 45:31, that they will be admonished and criticised with the question put there. So the sentence is a reminder delivered on the Day itself: a quotation of what they used to say, set beside what they now see.",
            "bn": "তাবারী প্রসঙ্গটা বেঁধে দেন এভাবে: ওয়া য়ুকালু লাহুম হীনাইযিন, তখন তাদের বলা হবে। তারপর আসে আয়াতটি। সা'দী একে তিরস্কারের একই ধারায় রাখেন: য়ুওয়াব্বাখূনা আইদান, এ কথা দিয়েও তাদের ভর্ৎসনা করা হবে। তিনি যোগ করেন, তারা কথাগুলো বলেছিল মুনকিরীনা হয়ে, মানে অস্বীকার করে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি ভাষ্য ৪৫:৩১ আয়াতের আলোচনায় বলে, সেখানকার প্রশ্ন দিয়ে তাদের তিরস্কার আর সমালোচনা করা হবে। তাহলে বাক্যটি সেই দিনেই দেওয়া এক স্মরণ। দুনিয়ায় তারা যা বলত, তা এখন তাদের চোখের সামনের দৃশ্যের পাশে রেখে শোনানো হচ্ছে।"
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
            "bn": "কথাটা তাদের কে বলেছিল? কীলা, বলা হয়েছিল, এই কর্মবাচ্য ক্রিয়া বক্তার নাম বলে না। ইবন কাসীর বক্তার পরিচয় দেন: ইযা কালা লাকুমুল মুমিনূনা যালিকা, যখন মুমিনরা তোমাদের এ কথা বলত। তাঁর সংক্ষিপ্ত ইংরেজি ভাষ্যেও একই কথা আছে। তাবারী আর মুয়াসসার সম্বোধনটা সাধারণ রাখেন, ইযা কীলা লাকুম, যখন তোমাদের বলা হতো। কে বলেছিল, তা তাঁরা উল্লেখ করেন না। যেভাবেই পড়া হোক, কথা দুটোই: আল্লাহর প্রতিশ্রুতি সত্য, আর কিয়ামতে কোনো সন্দেহ নেই।"
          },
          {
            "en": "At-Tabari unpacks both. The promise is that which Allah made to His servants, that He would give them life after their death and raise them from their graves. The Hour is that which He told them He would establish to gather them, for the reckoning, for reward on obedience and for punishment on disobedience. He adds that the ha in fiha refers back to the Hour. Al-Qurtubi glosses the promise in two words, al-ba'thu ka'in, the resurrection will come to be. The Muyassar names it as Allah's promise to raise people from their graves.",
            "bn": "তাবারী দুটোই খুলে বলেন। প্রতিশ্রুতি হলো বান্দাদের প্রতি আল্লাহর সেই অঙ্গীকার: মৃত্যুর পর তিনি তাদের জীবিত করবেন, কবর থেকে ওঠাবেন। আর কিয়ামত সেই সময়, যা তিনি কায়েম করবেন বলে জানিয়েছেন, যাতে সবাইকে একত্র করা হয় হিসাবের জন্য, আনুগত্যের পুরস্কার আর নাফরমানির শাস্তির জন্য। তিনি এটাও বলেন, ফীহা শব্দের 'হা' সর্বনাম কিয়ামতের দিকেই ফিরেছে। কুরতুবী প্রতিশ্রুতির ব্যাখ্যা দেন দুটি শব্দে: আল-বা'সু কাইন, পুনরুত্থান ঘটবেই। মুয়াসসার বলে, এ হলো মানুষকে কবর থেকে ওঠানোর বিষয়ে আল্লাহর প্রতিশ্রুতি।"
          },
          {
            "en": "At-Tabari then states what the announcement was meant to do. Its meaning, he says, is this: the Hour, there is no doubt about its coming, so fear Allah, believe in Allah and His Messenger, and work for what will save you from Allah's punishment in it. On his reading the announcement was never a bare fact to be filed away. It carried a summons to act, and that is what makes the reply so stark: the message called for preparation, and the answer was to profess not knowing.",
            "bn": "এরপর তাবারী বলেন, ঘোষণাটার উদ্দেশ্য কী ছিল। তাঁর ভাষায় কথাটার মর্ম এই: কিয়ামত আসবে, তাতে কোনো সন্দেহ নেই। কাজেই আল্লাহকে ভয় করো, আল্লাহ আর তাঁর রাসূলের উপর ঈমান আনো, আর এমন আমল করো যা সেদিন আল্লাহর আযাব থেকে তোমাদের বাঁচাবে। তাঁর পাঠে ঘোষণাটা নিছক কোনো তথ্য ছিল না, যা শুনে তুলে রাখা যায়। এর ভেতরে ছিল কাজের ডাক। জবাবটা এত কঠিন শোনায় সে কারণেই। বার্তা ডেকেছিল প্রস্তুতির দিকে, আর উত্তরে তারা বলেছিল, আমরা জানি না।"
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
            "bn": "ওয়াস-সা'আতু লা রাইবা ফীহা অংশটি দুইভাবে পড়া হয়, আর তাফসীরকারদের তিনজন তা উল্লেখ করেছেন। তাবারী বলেন, মদীনা ও বসরার সাধারণ কারীরা এবং কুফার কিছু কারী আস-সা'আতু পড়েন পেশ দিয়ে, নতুন বাক্যের শুরু হিসেবে। আর কুফার সাধারণ কারীরা পড়েন আস-সা'আতা, যবর দিয়ে, ইন্না ওয়া'দাল্লাহি হাক্কুন অংশের সঙ্গে জুড়ে। কুরতুবী আর বাগাভী যবরের কিরাআতটি হামযার বলে উল্লেখ করেন, যেখানে শব্দটি প্রতিশ্রুতির সঙ্গে জোড়া। তাঁরা বলেন, বাকিরা পড়েন পেশ দিয়ে, নতুন বাক্যের শুরু হিসেবে।"
          },
          {
            "en": "Al-Qurtubi adds a second account of the nominative: it may be joined to the grammatical position of inna wa'da Allahi. He rules out joining it to the pronoun held within the verbal noun, because that pronoun has not been reinforced, and a nominative pronoun is joined to without reinforcement only in poetry. At-Tabari closes the question with his own verdict: both are widespread readings in the cities, sound in their Arabic and close in meaning, so whichever of them the reciter reads, he is right. In either reading the Hour belongs to what they were told.",
            "bn": "পেশের কিরাআতের আরেকটি ব্যাখ্যাও কুরতুবী দেন: শব্দটিকে ইন্না ওয়া'দাল্লাহি অংশের ব্যাকরণগত অবস্থানের সঙ্গে জোড়া ধরা যায়। তবে মাসদারের ভেতরে থাকা সর্বনামের সঙ্গে জোড়া ধরাকে তিনি ঠিক মনে করেন না। কারণ সে সর্বনামকে জোরদার করা হয়নি, আর জোরদার না করে কর্তৃকারকের সর্বনামের সঙ্গে কিছু জোড়া হয় কেবল কবিতায়। তাবারী প্রশ্নটার নিষ্পত্তি করেন নিজের রায় দিয়ে: দুটোই বিভিন্ন শহরে প্রচলিত কিরাআত, আরবি ভাষায় বিশুদ্ধ, অর্থেও কাছাকাছি। তাই কারী যেটাই পড়ুন, ঠিক পড়েছেন। যেভাবেই পড়া হোক, কিয়ামত তাদের শোনানো কথারই অংশ।"
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
            "bn": "তাদের প্রথম কথা ছিল মা নাদরী মাস-সা'আহ, কিয়ামত কী আমরা জানি না। এই না-জানাকে তাফসীরকারেরা ভিন্ন ভিন্ন সুরে শোনেন। তাবারীর কাছে এটা জ্ঞানের ঘাটতি নয়, একটা অবস্থান। তাঁর ভাষায় তারা কথাটা বলেছিল তাকযীব হিসেবে: আল্লাহর প্রতিশ্রুতিকে মিথ্যা বলে, তাঁর দেওয়া খবরকে ফিরিয়ে দিয়ে, আর মৃত্যুর পর তাদের জীবিত করার ব্যাপারে তাঁর কুদরতকে অস্বীকার করে। সা'দীর কথা আগেই এসেছে: তারা এ কথা বলেছিল মুনকিরীনা হয়ে, অস্বীকার করে। এই পাঠে কথাগুলো শুনতে অজ্ঞতার মতো, কিন্তু কাজ করে প্রত্যাখ্যান হিসেবে।"
          },
          {
            "en": "Al-Qurtubi gives the clause a narrower paraphrase: we do not know what the Hour is, hal hiya haqqun am batil, whether it is true or false. Ibn Kathir reads it as la na'rifuha, we do not know it, and the abridged English renders this as we do not recognise what you are talking about. The emphasis differs, with at-Tabari stressing denial and al-Qurtubi an uncertainty over true or false, and the two are left here side by side. The verse itself places the speakers among those whom 45:31 calls arrogant when the verses were recited.",
            "bn": "কুরতুবী অংশটির অর্থ করেন আরও সীমিতভাবে: কিয়ামত কী আমরা জানি না, হাল হিয়া হাক্কুন আম বাতিল, তা সত্য না মিথ্যা। ইবন কাসীর পড়েন লা না'রিফুহা, আমরা তা চিনি না। সংক্ষিপ্ত ইংরেজি ভাষ্যে কথাটা দাঁড়ায়: তোমরা কী বলছ, আমরা তা বুঝি না। জোরটা পড়েছে দুই জায়গায়। তাবারী জোর দেন অস্বীকারের উপর, আর কুরতুবী সত্য-মিথ্যা নিয়ে অনিশ্চয়তার উপর। দুটো পাঠই এখানে পাশাপাশি রাখা হলো। আয়াত নিজে এই বক্তাদের যে দলে রাখে, তাদের কথা ৪৫:৩১ জানিয়েছে: আয়াত পাঠ করে শোনানো হলে তারা অহংকার করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Supposing and Nothing Firmer",
          "bn": "আন্দাজের বেশি কিছু নয়"
        },
        "p": [
          {
            "en": "Then in nazunnu illa zannan, literally: we do not suppose except a supposition. Al-Qurtubi reports three ways of supplying what the phrase leaves implicit. The first is al-Mubarrad's: its underlying form is in nahnu illa nazunnu zannan, we are nothing but people supposing a supposition. The other two are each introduced with qila, it was said. The second is in nazunnu illa annakum tazunnuna zannan: we only suppose that you are yourselves supposing. The third restores the frame of the address: and you said, we only suppose, and we are not certain that the Hour is coming.",
            "bn": "এরপর ইন নাযুন্নু ইল্লা যান্নান, শব্দে শব্দে: আমরা আন্দাজ ছাড়া কিছু আন্দাজ করি না। বাক্যটির ভেতরে যা উহ্য আছে, তা পূরণের তিনটি পথ কুরতুবী উল্লেখ করেন। প্রথমটি মুবাররাদের: মূল গঠন হলো ইন নাহনু ইল্লা নাযুন্নু যান্নান, আমরা আন্দাজকারী ছাড়া আর কিছু নই। বাকি দুটি তিনি আনেন কীলা, বলা হয়েছে, শব্দ দিয়ে। দ্বিতীয়টি হলো: ইন নাযুন্নু ইল্লা আন্নাকুম তাযুন্নূনা যান্নান, আমরা শুধু এটুকু ধারণা করি যে তোমরা নিজেরাই আন্দাজ করছ। তৃতীয়টি সম্বোধনের কাঠামো ফিরিয়ে আনে: আর তোমরা বলেছিলে, আমরা শুধু আন্দাজ করি, কিয়ামত যে আসছে, তাতে আমরা নিশ্চিত নই।"
          },
          {
            "en": "The second of these turns the word back on those who spoke to them: the certainty of those who told them would itself be only a guess. Al-Qurtubi records it without preferring it, and he gives no ranking among the three. At-Tabari does not discuss the construction at all; he paraphrases it plainly: and you said, we do not suppose that the Hour is coming, except as a supposition. The Arabic is kept here as the commentators give it, with no further theory of the grammar added in this article's own voice.",
            "bn": "দ্বিতীয় ব্যাখ্যায় কথাটা ঘুরে যায় তাদের দিকে, যারা এদের কিয়ামতের কথা বলেছিল: সেই বক্তাদের নিশ্চয়তাও নাকি আন্দাজ মাত্র। কুরতুবী একে উল্লেখ করেন, অগ্রাধিকার দেন না। তিনটির মধ্যে কোনটি আগে, সে বিচারও তিনি করেন না। তাবারী গঠন নিয়ে কোনো আলোচনাই করেন না। তিনি সোজা অর্থ বলে দেন: তোমরা বলেছিলে, কিয়ামত আসবে, এ ধারণা আমরা আন্দাজের বেশি কিছু করি না। তাফসীরকারেরা আরবিটা যেভাবে দিয়েছেন, এখানে সেভাবেই রাখা হলো। এ লেখা নিজের পক্ষ থেকে ব্যাকরণের নতুন কোনো তত্ত্ব যোগ করেনি।"
          },
          {
            "en": "Others gloss the weight of the guess. Ibn Kathir explains it as in natawahhamu wuqu'aha illa tawahhuman, we only fancy that it will happen, and adds: marjuhan, a likelihood outweighed. The abridged English puts it as we only remotely think that it might come. Al-Baghawi says they knew it only hadsan wa tawahhuman, by guesswork and fancy, and the Muyassar likewise says they expected its occurrence only as a fancy. On these glosses the supposition was not a leaning towards belief. It was a possibility they ranked as the less likely.",
            "bn": "অন্যরা ব্যাখ্যা করেন, আন্দাজটার ওজন কতটুকু ছিল। ইবন কাসীর বলেন, ইন নাতাওয়াহহামু উকূ'আহা ইল্লা তাওয়াহহুমান, এটা ঘটবে বলে আমরা শুধু কল্পনা করি। তারপর যোগ করেন: মারজূহান, অর্থাৎ যে সম্ভাবনা অন্য সম্ভাবনার কাছে হার মেনেছে। সংক্ষিপ্ত ইংরেজি ভাষ্যে কথাটা এমন: আমরা দূর থেকে ভাবি, হয়তো আসতেও পারে। বাগাভী বলেন, তারা এটা জানত শুধু হাদসান ওয়া তাওয়াহহুমান, অনুমান আর কল্পনায়। মুয়াসসারও বলে, এর ঘটার আশা তারা করত কেবল কল্পনা হিসেবে। এসব ব্যাখ্যায় আন্দাজটা বিশ্বাসের দিকে ঝোঁক ছিল না। ছিল এমন এক সম্ভাবনা, যাকে তারা কম সম্ভাব্য বলেই ধরে রেখেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty They Disowned",
          "bn": "যে ইয়াকিন তারা মানেনি"
        },
        "p": [
          {
            "en": "The last clause, wa ma nahnu bi-mustayqinin, and we are not certain, completes the reply. Ibn Kathir links it to what came before with wa li-hadha qala, and for this reason He said: because their thought was the weaker likelihood, the clause follows that they were not mutahaqqiqin, not sure. At-Tabari names the object: not certain that it is coming, nor that it will be. Al-Baghawi has not certain that it will be, and the Muyassar, not sure that the Hour is coming.",
            "bn": "শেষ অংশ ওয়া মা নাহনু বিমুসতাইকিনীন, আর আমরা নিশ্চিত নই, জবাবটা পূর্ণ করে। ইবন কাসীর একে আগের কথার সঙ্গে জোড়েন ওয়া লিহাযা কালা বলে, মানে এ কারণেই তিনি বললেন। তাদের ধারণা যেহেতু দুর্বল সম্ভাবনার দিকে ছিল, তাই পরের অংশে আসে, তারা মুতাহাক্কিকীন নয়, নিশ্চিত নয়। তাবারী বলে দেন কী বিষয়ে নিশ্চিত নয়: কিয়ামত যে আসছে, কিংবা তা যে ঘটবে, সে ব্যাপারে। বাগাভীর ভাষায়, তা ঘটবে বলে তারা নিশ্চিত নয়। মুয়াসসারের ভাষায়, কিয়ামত আসছে বলে তারা নিশ্চিত নয়।"
          },
          {
            "en": "A reader of the whole surah may notice that this vocabulary has appeared before. In 45:24 the Qur'an reports those who say there is only this worldly life, and states that they have no knowledge of it: in hum illa yazunnun, they only suppose. Here, on the Day, the same root z-n-n returns in their own mouths, now quoted to them. And the announcement they answered, la rayba fiha, echoes 45:26, where the Day of Resurrection is called a day about which there is no doubt. The commentaries cited here do not draw these links; they are observations from the text itself.",
            "bn": "পুরো সূরা যিনি পড়েন, তিনি খেয়াল করবেন, এই শব্দগুলো আগেও এসেছে। ৪৫:২৪ আয়াতে কুরআন তাদের কথা জানায়, যারা বলে দুনিয়ার এই জীবনই সব। কুরআন বলে, এ বিষয়ে তাদের কোনো জ্ঞান নেই: ইন হুম ইল্লা য়াযুন্নূন, তারা শুধু আন্দাজ করে। এখানে, সেই দিনে, য-ন-ন ধাতুটি ফিরে এসেছে তাদের নিজেদের মুখে, আর তাদেরকেই তা শোনানো হচ্ছে। যে ঘোষণার জবাব তারা দিয়েছিল, সেই লা রাইবা ফীহা মনে করিয়ে দেয় ৪৫:২৬ আয়াতকে, যেখানে কিয়ামতের দিনকে বলা হয়েছে এমন দিন, যাতে কোনো সন্দেহ নেই। এখানে উদ্ধৃত তাফসীরগুলো এই যোগসূত্র টানে না। এগুলো আয়াতের পাঠ থেকেই চোখে পড়া কথা।"
          },
          {
            "en": "The verses on either side carry the rest. The loss of the people of falsehood on the Day the Hour comes was announced in 45:27, and what becomes of these speakers after this exchange is the subject of the verses that follow, which this article leaves to them. This verse holds a single moment: words they once said, returned to them in a place where no one can call the Hour a guess any longer.",
            "bn": "বাকি কথা আছে আগে-পরের আয়াতগুলোতে। কিয়ামতের দিন বাতিলপন্থীরা যে ক্ষতিগ্রস্ত হবে, সে ঘোষণা এসেছে ৪৫:২৭ আয়াতে। আর এ কথোপকথনের পর এই বক্তাদের কী হয়, তা পরের আয়াতগুলোর বিষয়। সে আলোচনা সেখানেই থাকল। এ আয়াত ধরে রাখে একটিমাত্র মুহূর্ত: তারা একদিন যে কথা বলেছিল, তা তাদের কাছে ফিরে এসেছে এমন জায়গায়, যেখানে কিয়ামতকে আর কেউ আন্দাজ বলতে পারে না।"
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
            "en": "This needs saying plainly. The verse speaks only of what it names: a group of deniers on the Day, rebuked because, when the verses were recited to them, they met them with arrogance, as 45:31 says, and answered the promise with professed ignorance. It licenses nothing against any living person or community. It hands no reader a verdict on anyone's final standing, and no warrant to treat a neighbour, a relative or a whole people as the speakers of this verse.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: সেই দিনের একদল অস্বীকারকারী, যাদের তিরস্কার করা হচ্ছে। তাদের সামনে আয়াত পাঠ করা হয়েছিল, তারা অহংকার করেছিল, ৪৫:৩১ যেমন বলে। আর আল্লাহর প্রতিশ্রুতির জবাবে তারা না-জানার দাবি করেছিল। আজ বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কারও শেষ পরিণতি নিয়ে রায় দেওয়ার অধিকার কোনো পাঠককে দেয় না। প্রতিবেশী, আত্মীয় বা গোটা কোনো জাতিকে এ আয়াতের বক্তা বানিয়ে দেখার ছাড়পত্রও দেয় না।"
          },
          {
            "en": "Nor does it turn a person who has questions or doubts today into one of them. The speakers here are marked by their reply after the message reached them, which at-Tabari reads as denial of the promise and rejection of the report. Someone who carries a question to learning is doing the opposite of saying we do not know and walking away. No commentary consulted for this verse attaches a sound hadith to it, so none is cited here, and none gives an occasion of revelation for it.",
            "bn": "আজ যার মনে প্রশ্ন বা সংশয় আছে, এ আয়াত তাকেও ওই দলের একজন বানায় না। এখানকার বক্তাদের চেনা যায় বার্তা পৌঁছানোর পর তাদের জবাব দিয়ে। তাবারীর পাঠে সে জবাব ছিল প্রতিশ্রুতিকে মিথ্যা বলা আর খবরকে ফিরিয়ে দেওয়া। যে মানুষ নিজের প্রশ্ন নিয়ে ইলমের কাছে যায়, সে তো উল্টো কাজ করছে। সে আমরা জানি না বলে মুখ ফিরিয়ে চলে যাচ্ছে না। এ আয়াতের জন্য সংগ্রহ করা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি, তাই এখানে কোনো হাদিস উদ্ধৃত হয়নি। কোনো তাফসীর এর শানে নুযূলও উল্লেখ করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing Your Own Yaqin",
          "bn": "নিজের ইয়াকিন মেপে দেখা"
        },
        "p": [
          {
            "en": "What can a believer take from words spoken by others? At-Tabari's paraphrase points the way: the announcement that there is no doubt about the Hour came with a summons to fear Allah, to believe, and to work for what saves. Certainty, on that reading, is meant to show in conduct. A person may affirm the Hour sincerely and still live a week as if it were a remote possibility. The verse invites an honest look at that gap, in oneself first, without turning the look outward onto others.",
            "bn": "অন্যদের মুখের কথা থেকে একজন মুমিন কী নেবেন? তাবারীর ব্যাখ্যা পথ দেখায়। কিয়ামতে কোনো সন্দেহ নেই, এই ঘোষণার সঙ্গে এসেছিল ডাক: আল্লাহকে ভয় করো, ঈমান আনো, আর এমন আমল করো যা বাঁচাবে। এই পাঠে ইয়াকিন ধরা পড়ার কথা মানুষের কাজে। মানুষ আন্তরিকভাবে কিয়ামত মেনেও গোটা একটা সপ্তাহ কাটিয়ে দিতে পারে এমনভাবে, যেন তা দূরের কোনো সম্ভাবনা। আয়াতটি সেই ফাঁকটার দিকে সৎভাবে তাকাতে ডাকে, আগে নিজের ভেতরে, অন্যের দিকে আঙুল না তুলে।"
          },
          {
            "en": "Some practical steps follow from the verse's own vocabulary. Notice where the word perhaps has crept into how you think of the Day, and set against it what was announced: Allah's promise is true. Bring the questions you carry to learning, to people of knowledge and to prayer, instead of letting them settle into a convenient guess. And test a single plan this week against certainty: if the Hour were as sure as tomorrow's morning, would this choice still stand? That is a mirror held up to the reader, and to nobody else.",
            "bn": "আয়াতের নিজের শব্দগুলো থেকেই কিছু কাজের কথা বেরিয়ে আসে। খেয়াল করুন, আখিরাতের কথা ভাবতে গিয়ে কোথায় 'হয়তো' শব্দটা ঢুকে পড়েছে। তার জায়গায় রাখুন সেই ঘোষণা: আল্লাহর প্রতিশ্রুতি সত্য। মনে যে প্রশ্নগুলো বয়ে বেড়াচ্ছেন, সেগুলো সুবিধাজনক আন্দাজ হয়ে থিতিয়ে যেতে দেবেন না। নিয়ে যান ইলমের কাছে, আলেমদের কাছে, দোয়ায়। আর এ সপ্তাহের অন্তত একটা পরিকল্পনা নিশ্চয়তার মাপে যাচাই করুন: কিয়ামত যদি কালকের সকালের মতোই নিশ্চিত হতো, এই সিদ্ধান্ত কি টিকত? এ আয়না পাঠকের নিজের জন্য, আর কারও জন্য নয়।"
          }
        ]
      }
    ]
  }
});
