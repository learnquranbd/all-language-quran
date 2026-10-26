/**
 * Tadabbur long-form articles — surah 99.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "99:7-8": {
    "sections": [
      {
        "h": {
          "en": "The Last Two Lines",
          "bn": "শেষ দুই পংক্তি"
        },
        "p": [
          {
            "en": "Surah az-Zalzalah spends its opening verses on the earth itself. It is shaken with its final quake, throws out its burdens, and reports its news because its Lord has inspired it. Then 99:6 turns to people: on that Day they come out in scattered groups, li-yuraw a'malahum, to be shown their deeds. Ibn Kathir explains ashtat as separate kinds, the wretched and the happy, those sent to Paradise and those sent to the Fire, and the showing as recompense for the good and evil they did.",
            "bn": "সূরা আয-যালযালাহ শুরুর আয়াতগুলো খরচ করে পৃথিবীকে নিয়ে। সে শেষ কম্পনে কেঁপে ওঠে, ভেতরের বোঝা বের করে দেয়, আর রবের আদেশ পেয়ে নিজের বৃত্তান্ত বলে। তারপর ৯৯:৬ আয়াত ফেরে মানুষের দিকে: সেদিন তারা ভিন্ন ভিন্ন দলে বেরিয়ে আসবে, লিইউরাও আ'মালাহুম, যাতে তাদের আমল তাদের দেখানো হয়। ইবন কাসীর আশতাত শব্দের ব্যাখ্যা দেন আলাদা আলাদা শ্রেণি হিসেবে: হতভাগা আর সৌভাগ্যবান, জান্নাতের দিকে পাঠানো আর জাহান্নামের দিকে পাঠানো। আর দেখানো মানে, তাঁর ভাষায়, ভালো-মন্দ যা করেছে তার প্রতিদান পাওয়া।"
          },
          {
            "en": "Ibn Kathir then says: therefore Allah goes on to say, fa-man ya'mal. The fa ties the last two verses to the showing. At-Tabari notices something in the tense. The verb ya'mal looks forward, whoever does, yet on that Day the deeds are already past. He explains that the meaning is whoever did, as 99:6 makes clear, and the future form was kept because it urges the people of this world to work in obedience to Allah and holds them back from disobeying Him.",
            "bn": "এরপর ইবন কাসীর বলেন, এ কারণেই আল্লাহ বলে চলেন: ফামাই ইয়া'মাল। ফা অক্ষরটি শেষ দুই আয়াতকে সেই দেখানোর সঙ্গে বেঁধে দেয়। তাবারী ক্রিয়ার কালের দিকে নজর দেন। ইয়া'মাল শব্দটা সামনের দিকে তাকায়, অর্থাৎ যে করবে। অথচ সেদিন সব আমল তো অতীত হয়ে গেছে। তাঁর ব্যাখ্যা: অর্থ আসলে যে করেছে, ৯৯:৬ আয়াতই তা পরিষ্কার করে দেয়। ভবিষ্যৎ কালের রূপটা রাখা হয়েছে, কারণ এতে দুনিয়ার মানুষকে আল্লাহর আনুগত্যে আমল করার তাগিদ আছে, আর তাঁর নাফরমানি থেকে বিরত রাখার ধমকও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Weight of a Dharrah",
          "bn": "এক যাররার ওজন"
        },
        "p": [
          {
            "en": "Mithqal is a weight, and the word that carries the verse is dharrah. The commentators gloss it with the smallest things they could name. Al-Muyassar says the weight of a small ant. Al-Baghawi sharpens it: a small ant, the smallest there is of ants. Sa'id ibn Jubayr, in a report Ibn Kathir carries, says the weight of the smallest ant. At-Tabari gives Ibn Abbas (RA), through 'Ikrimah, as saying a red ant, or in another narrator's wording a red dharrah.",
            "bn": "মিসকাল মানে ওজন, আর আয়াতের ভার বহন করছে যাররাহ শব্দটি। তাফসীরকারেরা এর ব্যাখ্যায় এমন সব জিনিসের নাম নেন, যার চেয়ে ছোট কিছু তাঁরা ভাবতে পারেননি। মুয়াসসার বলে, ছোট একটি পিঁপড়ার ওজন। বাগাভী আরও নির্দিষ্ট করেন: ছোট পিঁপড়া, পিঁপড়াদের মধ্যে যত ছোট হতে পারে। ইবন কাসীরের আনা এক বর্ণনায় সাঈদ ইবন জুবাইর বলেন, সবচেয়ে ছোট পিঁপড়ার ওজন। তাবারী ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: লাল পিঁপড়া। আরেক বর্ণনাকারীর ভাষায়, লাল যাররাহ।"
          },
          {
            "en": "Other glosses push the thing below the scale altogether. At-Tabari records that it is said the dharrah is a small red worm with no weight, and that Yazid ibn Harun remarked that people claimed it weighs nothing. Al-Qurtubi cites a report that the dharrah has no weight, and calls the phrase a parable: Allah overlooks nothing a human being does, small or great, as in 4:40, where He wrongs no one by a dharrah's weight. He adds a lexical gloss, which he also reports from Ibn Abbas (RA): each grain of dust that clings to a hand struck on the ground.",
            "bn": "কিছু ব্যাখ্যা জিনিসটাকে দাঁড়িপাল্লার নিচেই নামিয়ে দেয়। তাবারী লেখেন, বলা হয় যাররাহ হলো ছোট্ট এক লাল পোকা, যার কোনো ওজন নেই। ইয়াযীদ ইবন হারূন বলেছেন, লোকেরা মনে করত এর কোনো ওজনই নেই। কুরতুবী একটি বর্ণনা আনেন যে যাররার কোনো ওজন নেই। তাঁর মতে কথাটা এক উপমা: আদমসন্তানের ছোট-বড় কোনো আমলই আল্লাহ উপেক্ষা করেন না। যেমন ৪:৪০ আয়াতে তিনি বলেন, কারও প্রতি এক যাররাহ পরিমাণও জুলুম করেন না। ভাষাবিদদের একটি ব্যাখ্যাও কুরতুবী দেন, যা তিনি ইবন আব্বাস (রাঃ) থেকেও উল্লেখ করেন: মাটিতে হাত চাপড়ে তুললে যে ধুলো লেগে থাকে, তার প্রতিটি কণা একেকটি যাররাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Verse Without Exceptions",
          "bn": "ব্যতিক্রমহীন এক আয়াত"
        },
        "p": [
          {
            "en": "As-Sa'di calls the pair inclusive and general, covering all good and all evil. If a person sees the dharrah, the most insignificant of things, and is recompensed for it, then whatever lies above it is all the more certain. The two verses match word for word except khayran and sharran, good and evil, so the same weight and the same certainty apply on both sides. He finds in them the utmost encouragement to do good, however little, and the utmost warning against evil, however slight.",
            "bn": "সা'দী এই আয়াত দুটিকে বলেন ব্যাপক ও সাধারণ, সব ভালো আর সব মন্দ এর আওতায়। যাররাহ সবচেয়ে নগণ্য জিনিস। মানুষ যদি তা-ও দেখতে পায় এবং তার প্রতিদান পায়, তাহলে এর চেয়ে বড় যা কিছু, তা তো আরও নিশ্চিতভাবে দেখবে। দুই আয়াত হুবহু এক, শুধু খাইরান আর শাররান আলাদা, মানে ভালো আর মন্দ। তাই দুই দিকেই একই ওজন, একই নিশ্চয়তা। সা'দী এখানে দেখেন ভালো কাজের প্রতি চূড়ান্ত উৎসাহ, তা যত অল্পই হোক। আর মন্দ কাজ থেকে চূড়ান্ত সতর্কবাণী, তা যত তুচ্ছই হোক।"
          },
          {
            "en": "Al-Qurtubi reports Ibn Mas'ud (RA) calling this the most decisive verse in the Qur'an, and adds his own verdict: he spoke the truth. The scholars, he says, agree that the verse is general, both those who hold that general wording is taken as general and those who do not. At-Tabari records a quieter reaction. Al-Harith ibn Suwayd recited the surah through to its last verse and said: this is a severe reckoning.",
            "bn": "কুরতুবী ইবন মাসউদ (রাঃ)-এর কথা আনেন: কুরআনের সবচেয়ে সুদৃঢ় আয়াত এটি। তারপর নিজের মন্তব্য জুড়ে দেন: তিনি সত্য বলেছেন। তাঁর ভাষ্যে, আলিমরা একমত যে এ আয়াত সাধারণ অর্থে প্রযোজ্য। যাঁরা সাধারণ শব্দকে সাধারণ অর্থে নেন, আর যাঁরা নেন না, দুই দলই এখানে এক কথা বলেন। তাবারী আরও নীরব এক প্রতিক্রিয়ার কথা লিখেছেন। হারিস ইবন সুওয়াইদ সূরাটি শেষ আয়াত পর্যন্ত পড়লেন, তারপর বললেন: এ তো কঠিন হিসাব।"
          }
        ]
      },
      {
        "h": {
          "en": "What Exactly Is Seen",
          "bn": "ঠিক কী দেখা যাবে"
        },
        "p": [
          {
            "en": "Yarah: he will see it. But a deed has already passed. Al-Qurtubi records the reasoning: it is said that he sees its recompense, because what he did has gone and ceased to exist. At-Tabari reads it the same way: whoever did a dharrah's weight of good in this world sees its reward there, and whoever did a dharrah's weight of evil sees its recompense there. Al-Muyassar says plainly: he sees its reward, or its punishment, in the Hereafter.",
            "bn": "ইয়ারাহ: সে তা দেখবে। কিন্তু আমল তো ঘটে গিয়ে শেষ হয়ে গেছে। কুরতুবী একটি যুক্তি উল্লেখ করেন: বলা হয়, সে দেখবে তার প্রতিদান, কারণ যা সে করেছিল তা অতীত হয়ে বিলীন হয়ে গেছে। তাবারীর পাঠও একই রকম। দুনিয়াতে যে এক যাররাহ পরিমাণ ভালো করেছে, সে সেখানে তার সওয়াব দেখবে। আর যে এক যাররাহ পরিমাণ মন্দ করেছে, সে সেখানে তার প্রতিফল দেখবে। মুয়াসসার সহজ ভাষায় বলে: আখিরাতে সে তার সওয়াব দেখবে, কিংবা তার শাস্তি।"
          },
          {
            "en": "Sa'id ibn Jubayr, in the report Ibn Kathir carries, gives a second picture: he sees it in his book, and it pleases him. As-Sa'di sets beside the verse 3:30, the Day every soul finds the good it did brought before it, and the evil it did, wishing a long distance lay between it and that, and the words of 18:49, they found what they had done present. Both pictures stand in the commentaries, the record and the recompense.",
            "bn": "ইবন কাসীরের আনা বর্ণনায় সাঈদ ইবন জুবাইর আরেকটি ছবি দেন: সে তা দেখবে তার আমলনামায়, আর তাতে সে খুশি হবে। সা'দী আয়াতের পাশে রাখেন ৩:৩০ আয়াত: সেদিন প্রত্যেকে নিজের করা ভালো কাজ সামনে হাজির পাবে, আর মন্দ কাজও। তখন সে চাইবে, তার আর ওই মন্দের মাঝে যদি অনেক দূরত্ব থাকত! সঙ্গে রাখেন ১৮:৪৯ আয়াতের কথা: তারা যা করেছিল, তা সামনে উপস্থিত পেল। তাফসীরে দুটি ছবিই পাশাপাশি আছে, আমলনামা আর প্রতিদান।"
          },
          {
            "en": "There is also a variant reading. Al-Qurtubi notes that the general reading is yarahu, he sees it, in both verses. Al-Jahdari, as-Sulami, 'Isa ibn 'Umar, and Aban reporting from 'Asim read yurahu, he is shown it, meaning Allah shows it to him. Al-Qurtubi prefers the first and gives 3:30 as his reason. The two readings meet in 99:6, where people come out li-yuraw a'malahum, to be shown their deeds.",
            "bn": "এখানে একটি ভিন্ন কিরাআতও আছে। কুরতুবী জানান, অধিকাংশের কিরাআত দুই আয়াতেই ইয়ারাহু, অর্থাৎ সে দেখবে। জাহদারী, সুলামী, ঈসা ইবন উমর, আর আসিম থেকে আবান পড়েছেন ইউরাহু, অর্থাৎ তাকে দেখানো হবে, আল্লাহ তাকে তা দেখাবেন। কুরতুবী প্রথমটিকে অগ্রাধিকার দেন, আর কারণ হিসেবে আনেন ৩:৩০ আয়াত। দুই কিরাআত এসে মেলে ৯৯:৬ আয়াতে, যেখানে মানুষ বেরিয়ে আসে লিইউরাও আ'মালাহুম, যাতে তাদের আমল তাদের দেখানো হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When and Where It Is Seen",
          "bn": "কখন, কোথায় দেখা"
        },
        "p": [
          {
            "en": "The real disagreement is over two cases: the believer's small evil and the disbeliever's small good. At-Tabari begins with a saying of Ibn Abbas (RA). No believer and no disbeliever does good or evil in this world without Allah bringing it to him. The believer is shown his good deeds and his bad deeds, and Allah forgives him the bad. The disbeliever's good deeds are turned back, and he is punished for his bad ones. Al-Baghawi gives the same saying, adding that the believer is rewarded for his good.",
            "bn": "আসল মতভেদ দুটি ক্ষেত্রে: মুমিনের ছোট মন্দ আর কাফিরের ছোট ভালো। তাবারী শুরু করেন ইবন আব্বাস (রাঃ)-এর একটি কথা দিয়ে। দুনিয়াতে কোনো মুমিন বা কাফির ভালো-মন্দ যা-ই করুক, আল্লাহ তা তার সামনে এনে দেবেন। মুমিনকে তার নেকি আর গুনাহ দুটোই দেখানো হবে, তারপর আল্লাহ তার গুনাহ মাফ করে দেবেন। কাফিরের নেকিগুলো ফিরিয়ে দেওয়া হবে, আর তার গুনাহের জন্য তাকে শাস্তি দেওয়া হবে। বাগাভীও একই কথা আনেন, সঙ্গে যোগ করেন যে মুমিনকে তার নেকির প্রতিদানও দেওয়া হবে।"
          },
          {
            "en": "Muhammad ibn Ka'b al-Qurazi reads it otherwise, and at-Tabari, al-Qurtubi and al-Baghawi all carry his words. A disbeliever who does a dharrah's weight of good sees its reward in this world, in himself, his family, his wealth and his children, until he leaves the world with no good left for him with Allah. A believer who does a dharrah's weight of evil sees its punishment in this world in the same ways, until he leaves it with no evil left. Al-Qurtubi gives a saying of Ibn Abbas (RA) close to this.",
            "bn": "মুহাম্মাদ ইবন কা'ব আল-কুরাযী ভিন্নভাবে পড়েন, আর তাবারী, কুরতুবী, বাগাভী তিনজনই তাঁর কথা এনেছেন। কাফির এক যাররাহ পরিমাণ ভালো করলে তার প্রতিদান দেখে নেয় দুনিয়াতেই: নিজের জীবনে, পরিবারে, সম্পদে, সন্তানে। শেষে সে দুনিয়া ছেড়ে যায় এমন অবস্থায় যে আল্লাহর কাছে তার জন্য কোনো ভালো জমা নেই। মুমিন এক যাররাহ পরিমাণ মন্দ করলে তার শাস্তিও দুনিয়াতেই দেখে নেয়, একইভাবে। শেষে দুনিয়া ছেড়ে যায় কোনো মন্দ সঙ্গে না নিয়ে। কুরতুবী ইবন আব্বাস (রাঃ)-এর এমন একটি কথাও আনেন, যা এর কাছাকাছি।"
          },
          {
            "en": "So the companion's name stands on both sides, through different reports. At-Tabari then cites narrations he says point to the second view, among them one through Anas (RA): Abu Bakr (RA) was eating with the Prophet ﷺ when these verses came down, and he lifted his hand. The Prophet ﷺ said: whatever you see in this world that you dislike is the dharrah-weights of evil, and Allah stores up for you the dharrah-weights of good until you are given them in full on the Day of Resurrection. At-Tabari attaches no grading to it.",
            "bn": "অর্থাৎ ভিন্ন ভিন্ন বর্ণনার সূত্রে একই সাহাবীর নাম দুই দিকেই আছে। এরপর তাবারী কিছু বর্ণনা আনেন, যা তাঁর মতে দ্বিতীয় মতের দিকে ইঙ্গিত করে। এর একটি আনাস (রাঃ)-এর সূত্রে: আবু বকর (রাঃ) নবী ﷺ-এর সঙ্গে খাচ্ছিলেন, এমন সময় এ আয়াত দুটি নাজিল হয়। তিনি খাবার থেকে হাত তুলে নিলেন। নবী ﷺ বললেন: দুনিয়াতে অপছন্দের যা কিছু তুমি দেখো, তা মন্দের যাররাহ পরিমাণ ওজনগুলো। আর ভালোর যাররাহ পরিমাণ ওজনগুলো আল্লাহ তোমার জন্য জমা রাখেন, কিয়ামতের দিন পুরোপুরি দিয়ে দেওয়া পর্যন্ত। তাবারী এর মান সম্পর্কে কিছু বলেননি।"
          },
          {
            "en": "Ma'arif al-Qur'an holds that a good deed counts in the Hereafter only when done with faith, and that the evil meant is evil not repented of. At-Tabari also carries 'A'ishah's (RA) question about Ibn Jud'an, which Muslim (214) records thus: Ibn Jud'an kept ties of kinship and fed the poor in the Jahiliyyah; would that benefit him? He said: it will not benefit him; he never once said, my Lord, forgive me my sin on the Day of Judgement. These verses describe the reckoning on that Day; they license nothing against any living person or community.",
            "bn": "মাআরিফুল কুরআনের মতে, ভালো কাজ আখিরাতে গণ্য হয় কেবল ঈমানের সঙ্গে করা হলে। আর এখানে মন্দ বলতে বোঝানো হয়েছে সেই মন্দ, যার জন্য তওবা করা হয়নি। তাবারী ইবন জুদআন সম্পর্কে আয়িশা (রাঃ)-এর প্রশ্নটিও এনেছেন। মুসলিম (২১৪) তা এভাবে বর্ণনা করেছেন: ইবন জুদআন জাহিলি যুগে আত্মীয়তার বন্ধন রক্ষা করত, মিসকীনকে খাওয়াত, এতে কি তার কোনো উপকার হবে? নবী ﷺ বললেন: উপকার হবে না, কারণ সে কোনো দিন বলেনি, হে আমার রব, বিচারের দিন আমার গুনাহ মাফ করে দিয়ো। এ দুই আয়াত সেদিনের হিসাবের বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Small to Count",
          "bn": "গোনার মতো নয় ভেবে"
        },
        "p": [
          {
            "en": "Ibn Kathir carries, from Ibn Abi Hatim, a report from Sa'id ibn Jubayr on the setting of these verses. When 76:8 came down, praising those who give food out of love for it, some Muslims thought they would earn no reward for the little they gave. A poor man would come to their doors and they thought a date, a crust or a walnut too little, and turned him away, saying: this is nothing; we are rewarded only for what we give while we love it.",
            "bn": "ইবন কাসীর ইবন আবী হাতিম থেকে সাঈদ ইবন জুবাইরের একটি বর্ণনা আনেন, এ আয়াত দুটির প্রেক্ষাপট নিয়ে। ৭৬:৮ আয়াত নাজিল হলো, যেখানে প্রশংসা আছে তাদের, যারা নিজের প্রিয় খাবার অন্যকে খাওয়ায়। তখন কিছু মুসলমান ভাবলেন, অল্প কিছু দিলে তার সওয়াব মিলবে না। কোনো মিসকীন দরজায় এলে একটা খেজুর, এক টুকরো রুটি বা একটা আখরোট দেওয়াকে তাঁরা খুব কম মনে করতেন। তাকে ফিরিয়ে দিয়ে বলতেন: এ তো কিছুই না। সওয়াব তো কেবল সেই জিনিস দিলে, যা আমাদের নিজেদের প্রিয়।"
          },
          {
            "en": "Others thought they would not be blamed for a slight sin: a lie, a glance, backbiting, since Allah promised the Fire only for the major sins. So, in the report, these verses came down to make them want the little good, because it soon grows, and to warn them off the slight evil, because it too soon grows. Al-Qurtubi and al-Baghawi give the same account from Muqatil, as concerning two men, and add that on that Day the small sin will look greater than mountains to its doer. It is a reported setting, given on these men's word, not a settled one.",
            "bn": "আরেক দল ভাবত, ছোটখাটো গুনাহে কোনো দোষ ধরা হবে না: একটা মিথ্যা, একবার তাকানো, একটু গীবত। তাদের যুক্তি, আল্লাহ জাহান্নামের হুমকি দিয়েছেন কেবল কবীরা গুনাহের জন্য। বর্ণনা অনুযায়ী তখন এ আয়াত দুটি নাজিল হয়। উদ্দেশ্য, অল্প ভালো কাজে তাদের আগ্রহী করা, কারণ তা দেখতে দেখতে বেড়ে যায়। আর অল্প মন্দ থেকে সাবধান করা, কারণ সেটাও দেখতে দেখতে বেড়ে যায়। কুরতুবী আর বাগাভী একই ঘটনা মুকাতিল থেকে আনেন, দুজন মানুষকে ঘিরে। তাঁরা যোগ করেন, সেদিন ছোট গুনাহটাও তার কর্তার চোখে পাহাড়ের চেয়ে বড় দেখাবে। এটি বর্ণিত প্রেক্ষাপট, এই বর্ণনাকারীদের কথার ওপর দাঁড়ানো, প্রতিষ্ঠিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unique, Comprehensive Verse",
          "bn": "একক ও সর্বব্যাপী আয়াত"
        },
        "p": [
          {
            "en": "Ibn Kathir places here a hadith of Abu Hurayrah (RA) from al-Bukhari, which Muslim also records. Most of it concerns horses, a reward for one man, a shield for another, a burden for a third. Al-Bukhari (2371) gives its closing part in these words: The Messenger of Allah ﷺ was asked about donkeys, and he said: nothing has been sent down to me about them except this comprehensive, unique verse, whoever does a dharrah's weight of good will see it, and whoever does a dharrah's weight of evil will see it.",
            "bn": "ইবন কাসীর এখানে আবু হুরাইরা (রাঃ)-এর একটি হাদীস আনেন বুখারী থেকে, মুসলিমও যা বর্ণনা করেছেন। হাদীসের বেশির ভাগ ঘোড়া নিয়ে: কারও জন্য তা সওয়াব, কারও জন্য আড়াল, আবার কারও জন্য বোঝা। বুখারী (২৩৭১) এর শেষ অংশটি এভাবে বর্ণনা করেছেন: রাসূলুল্লাহ ﷺ-কে গাধা সম্পর্কে জিজ্ঞেস করা হলো। তিনি বললেন, এ বিষয়ে আমার ওপর কিছুই নাজিল হয়নি, এই সর্বব্যাপী ও একক আয়াতটি ছাড়া: যে এক যাররাহ পরিমাণ ভালো করবে, সে তা দেখবে, আর যে এক যাররাহ পরিমাণ মন্দ করবে, সে-ও তা দেখবে।"
          },
          {
            "en": "Al-Baghawi says the question was about zakat on donkeys. Al-Qurtubi reports Ibn al-'Arabi's explanation of the answer: the Prophet ﷺ had described the lasting reward in horses, so the questioner asked about donkeys, and was answered by the general sweep of the verse, for in a donkey there are many dharrah-weights. A narrow question about one kind of property received a principle that covers every act of every person.",
            "bn": "বাগাভী বলেন, প্রশ্নটা ছিল গাধার যাকাত নিয়ে। কুরতুবী জবাবটির একটি ব্যাখ্যা আনেন ইবনুল আরাবী থেকে। নবী ﷺ ঘোড়ার মধ্যে স্থায়ী সওয়াবের কথা বলেছিলেন, তাই প্রশ্নকারী গাধার কথা জানতে চাইলেন। জবাব এল আয়াতের ব্যাপকতা দিয়ে, কারণ একটি গাধার মধ্যেও যাররাহ পরিমাণ ওজন আছে অনেক। এক ধরনের সম্পদ নিয়ে ছোট্ট একটি প্রশ্ন, আর জবাবে এল এমন এক নীতি, যা প্রত্যেক মানুষের প্রতিটি কাজকে ঘিরে ফেলে।"
          },
          {
            "en": "Ibn Kathir and Ma'arif al-Qur'an both attach a warning given to 'A'ishah (RA). Ibn Majah (4243) records it in these words: O 'A'ishah, beware of deeds regarded as insignificant, for they have a pursuer from Allah. Ibn Majah gives no grading of his own. Ibn Kathir cites it from Ahmad, whose wording speaks of insignificant sins, and notes that an-Nasa'i and Ibn Majah recorded it. What a person dismisses as too small to matter is not dismissed; something is still coming after it.",
            "bn": "ইবন কাসীর আর মাআরিফুল কুরআন দুটিতেই আয়িশা (রাঃ)-কে দেওয়া একটি সতর্কবাণী আছে। ইবন মাজাহ (৪২৪৩) তা এভাবে বর্ণনা করেছেন: হে আয়িশা, তুচ্ছ মনে হওয়া আমল থেকে সাবধান থেকো, কারণ আল্লাহর পক্ষ থেকে সেগুলোর পেছনে একজন তলবকারী আছে। ইবন মাজাহ নিজে এর কোনো মান উল্লেখ করেননি। ইবন কাসীর হাদীসটি এনেছেন আহমাদ থেকে, যাঁর বর্ণনায় শব্দটা তুচ্ছ গুনাহ। তিনি জানান, নাসাঈ আর ইবন মাজাহও এটি বর্ণনা করেছেন। মানুষ যাকে তুচ্ছ বলে ঝেড়ে ফেলে, তা আসলে ঝরে যায় না। কিছু একটা তখনও তার পিছু নিয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Single Grape",
          "bn": "একটিমাত্র আঙুর"
        },
        "p": [
          {
            "en": "Some took the verses literally in their giving. Al-Qurtubi cites the Muwatta: a poor man asked 'A'ishah (RA) for food while grapes lay before her. She told someone to take one grape and give it to him, and when the man looked at it in surprise she said: are you surprised? How many dharrah-weights do you see in this grape? Al-Baghawi says that 'Umar ibn al-Khattab and 'A'ishah each gave a grape in charity and said there are many weights in it.",
            "bn": "কেউ কেউ দান করতে গিয়ে আয়াতটিকে আক্ষরিক অর্থেই নিয়েছিলেন। কুরতুবী মুয়াত্তা থেকে আনেন: এক মিসকীন আয়িশা (রাঃ)-এর কাছে খাবার চাইল, তখন তাঁর সামনে আঙুর রাখা। তিনি একজনকে বললেন, একটা দানা নিয়ে তাকে দাও। লোকটা দানাটার দিকে অবাক হয়ে তাকিয়ে রইল। আয়িশা (রাঃ) বললেন: অবাক হচ্ছ? এই একটা দানায় কত যাররাহ পরিমাণ ওজন আছে, দেখতে পাচ্ছ? বাগাভী বলেন, উমর ইবনুল খাত্তাব আর আয়িশা দুজনেই একটি করে আঙুর দান করেছিলেন, আর বলেছিলেন, এর মধ্যে বহু ওজন আছে।"
          },
          {
            "en": "Ibn Kathir sets here a saying the Prophet ﷺ gave in general, not about this verse, and it is told whole in al-Bukhari (1417) from 'Adi ibn Hatim: guard yourselves against the Fire, even with half a date. Ibn Kathir's wording adds even with a good word. Al-Qurtubi adds that Sa'd ibn Abi Waqqas, giving two dates, said they hold many dharrah-weights. Half a date, one grape: the verse made the small gift worth giving.",
            "bn": "ইবন কাসীর এখানে নবী ﷺ-এর একটি সাধারণ বাণী আনেন। এটি এই আয়াত নিয়ে বলা নয়। বুখারী (১৪১৭) আদী ইবন হাতিম থেকে তা পুরোটা বর্ণনা করেছেন: আধখানা খেজুর দিয়ে হলেও জাহান্নাম থেকে বাঁচো। ইবন কাসীরের বর্ণনায় এর সঙ্গে আছে, একটি ভালো কথা দিয়ে হলেও। কুরতুবী জানান, সা'দ ইবন আবী ওয়াক্কাস দুটি খেজুর দান করে বলেছিলেন, এতে বহু যাররাহ পরিমাণ ওজন আছে। আধখানা খেজুর, একটি আঙুর: আয়াতটি ছোট দানকেও দেওয়ার যোগ্য করে তুলেছে।"
          },
          {
            "en": "Al-Baghawi closes with a scene from ar-Rabi' ibn Khuthaym: a man passed al-Hasan while he was reciting this surah, and when he reached its end he said: enough for me; the admonition is complete. The report leaves unclear who was reciting and who spoke. The practical charge is simple all the same. Stop grading your deeds by how large they look, give the date you were about to keep, and leave alone the small wrong you were about to excuse.",
            "bn": "বাগাভী শেষ করেন রাবী ইবন খুসাইমের বর্ণিত একটি দৃশ্য দিয়ে: এক ব্যক্তি হাসানের পাশ দিয়ে যাচ্ছিল, আর তখন এই সূরা পড়া চলছিল। সূরার শেষে পৌঁছে বলা হলো: আমার জন্য এটুকুই যথেষ্ট, উপদেশ পূর্ণ হয়ে গেছে। বর্ণনায় কে পড়ছিলেন আর কে বললেন, তা স্পষ্ট নয়। করণীয়টা তবু সহজ। নিজের আমলকে বড়-ছোট দেখে বিচার করা বন্ধ করুন। যে খেজুরটা রেখে দিতে যাচ্ছিলেন, সেটা দিয়ে দিন। আর যে ছোট অন্যায়টাকে মাফ করে দিতে যাচ্ছিলেন নিজের মনে, সেটা থেকে দূরে থাকুন।"
          }
        ]
      }
    ]
  }
});
