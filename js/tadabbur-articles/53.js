/**
 * Tadabbur long-form articles — surah 53.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "53:4": {
    "sections": [
      {
        "h": {
          "en": "Five Words After the Oath",
          "bn": "শপথের পরে পাঁচটি শব্দ"
        },
        "p": [
          {
            "en": "In huwa illa wahyun yuha: it is nothing but a revelation revealed. The surah opens with an oath by the star when it descends, and the oath is answered about a man the listeners knew well: your companion has not strayed, nor has he erred (53:2), nor does he speak from desire (53:3). Those are three denials, each carried by the negative ma. This fourth verse, five Arabic words, is the passage's first positive claim, and what the following verses say about his teacher rests on it.",
            "bn": "ইন হুয়া ইল্লা ওয়াহয়ুন ইউহা: এ তো ওহী ছাড়া আর কিছু নয়, যা তাঁর কাছে পাঠানো হয়। সূরার শুরুতে শপথ, অস্ত যাওয়া তারকার নামে। শপথের জবাব আসে এমন এক মানুষকে নিয়ে, যাঁকে শ্রোতারা খুব ভালো করে চিনত। তোমাদের সঙ্গী পথ হারাননি, বিপথেও যাননি (৫৩:২), আর মনের খেয়ালে কথাও বলেন না (৫৩:৩)। তিনটিই অস্বীকার, প্রতিটিতে না-বোধক 'মা'। চতুর্থ এ আয়াতটি আরবিতে পাঁচ শব্দের। পুরো অংশে এটাই প্রথম ইতিবাচক দাবি। যিনি তাঁকে শিখিয়েছেন, তাঁর সম্পর্কে পরের আয়াতগুলো যা বলে, তা এই দাবির উপরেই দাঁড়িয়ে।"
          },
          {
            "en": "The shape of the sentence does much of the work. In here is not the conditional if but a negative, and illa, except, closes the frame: nothing but. What survives the exclusion is a single thing, wahy, revelation, and the verb after it comes from the same root, w-h-y, in the passive: yuha, it is revealed. The sentence defines his speech by its origin. The passive leaves the one who reveals unnamed in this verse, and at-Tabari, as the next section shows, spells the sender out.",
            "bn": "বাক্যের গড়নই অনেকখানি কথা বলে দেয়। এখানে 'ইন' শর্তের 'যদি' নয়, বরং না-বোধক। তারপর 'ইল্লা', মানে ছাড়া। দুটো মিলে দাঁড়ায়: অমুক ছাড়া আর কিছুই নয়। সব বাদ দেওয়ার পর থাকে কেবল একটি জিনিস, ওহী। তার পরের ক্রিয়াটিও একই ধাতু ও-হ-য় থেকে, কর্মবাচ্যে: ইউহা, যা পাঠানো হয়। অর্থাৎ তাঁর কথার পরিচয় দেওয়া হচ্ছে তার উৎস দিয়ে। কর্মবাচ্য বলে কে পাঠান, এ আয়াতে তাঁর নাম নেই। তাবারী সেই প্রেরককে খুলে বলেন, পরের অংশে তা আসছে।"
          },
          {
            "en": "Al-Qurtubi records a small grammatical quarrel over how this verse joins what precedes it. As-Sijistani allowed that in huwa illa wahyun yuha could be taken as a substitute, a badal, for ma dalla sahibukum, the denial in 53:2. Ibn al-Anbari called that a mistake: the light in, he argued, cannot stand in as a substitute for ma. He tested it against an oath, observing that nobody says wallahi ma qumtu, in ana la-qa'id, by Allah I did not stand, I am indeed sitting. Al-Qurtubi lets the objection have the last word.",
            "bn": "এ আয়াত আগের আয়াতের সঙ্গে কীভাবে জুড়েছে, তা নিয়ে ব্যাকরণের ছোট্ট একটা বিতর্ক কুরতুবী তুলে রেখেছেন। সিজিস্তানীর মতে 'ইন হুয়া ইল্লা ওয়াহয়ুন ইউহা'-কে চাইলে ৫৩:২ আয়াতের 'মা দাল্লা সাহিবুকুম'-এর বদল বা স্থলাভিষিক্ত ধরা যায়। ইবনুল আনবারী একে ভুল বলেছেন। তাঁর যুক্তি, হালকা 'ইন' কখনো 'মা'-র বদল হয় না। প্রমাণ হিসেবে তিনি একটা শপথবাক্য সামনে আনেন। কেউ বলে না: ওয়াল্লাহি মা কুমতু, ইন আনা লা-কাইদ, আল্লাহর কসম, আমি দাঁড়াইনি, আমি তো বসে আছি। শেষ কথাটা কুরতুবী এই আপত্তিকেই বলতে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "From Lord to Angel to Messenger",
          "bn": "রব থেকে ফেরেশতা, ফেরেশতা থেকে রাসূল"
        },
        "p": [
          {
            "en": "At-Tabari's note on the verse is a single chain: Allah, Blessed and Exalted, reveals to Jibril, and Jibril reveals to Muhammad ﷺ. Al-Baghawi says it more briefly still: a revelation from Allah, revealed to him. The verse that follows describes the one who taught him as intense in strength (53:5), and that description belongs to its own verse. At-Tabari also records, with the words and it was said, that 'an al-hawa in 53:3 means bil-hawa: he does not speak with desire, rather than from it.",
            "bn": "এ আয়াতে তাবারীর ব্যাখ্যা একটি ধারাবাহিকতায় সীমাবদ্ধ। বরকতময় ও মহান আল্লাহ ওহী পাঠান জিবরাঈল (আঃ)-এর কাছে, আর জিবরাঈল (আঃ) তা পৌঁছে দেন মুহাম্মাদ ﷺ-এর কাছে। বাগাভী আরও সংক্ষেপে বলেন: আল্লাহর পক্ষ থেকে ওহী, যা তাঁর কাছে পাঠানো হয়। যিনি তাঁকে শিখিয়েছেন, পরের আয়াত তাঁকে প্রবল শক্তির অধিকারী বলে পরিচয় দেয় (৫৩:৫)। সে বর্ণনা ওই আয়াতেরই আলোচ্য। তাবারী 'বলা হয়েছে' কথাটি দিয়ে আরেকটি মতও এনেছেন। ৫৩:৩ আয়াতের 'আনিল হাওয়া' মানে 'বিল হাওয়া', অর্থাৎ তিনি খেয়াল নিয়ে কথা বলেন না।"
          },
          {
            "en": "Ibn Kathir turns from the source to the delivery. The verse means, he says, that the Prophet ﷺ says only what he was commanded to say, conveying it to people complete and in full, without addition and without reduction. Ma'arif al-Qur'an repeats the point almost word for word. As-Sa'di frames it as conduct rather than delivery alone: he follows nothing but the guidance and taqwa that Allah revealed to him, in himself and in others. On that reading the verse describes how he lived as well as what he passed on.",
            "bn": "ইবন কাসীর উৎস থেকে নজর ফেরান পৌঁছে দেওয়ার দিকে। তাঁর ব্যাখ্যায় আয়াতের অর্থ, নবী ﷺ কেবল তা-ই বলেন যা বলার আদেশ তাঁকে দেওয়া হয়েছে। মানুষের কাছে তা পৌঁছান পুরোপুরি, পূর্ণ মাত্রায়, কিছু না বাড়িয়ে, কিছু না কমিয়ে। মাআরিফুল কুরআন প্রায় হুবহু একই কথা বলে। সা'দী বিষয়টিকে শুধু পৌঁছে দেওয়ার মধ্যে আটকে রাখেন না, জীবনাচরণের দিকেও নিয়ে যান। তাঁর মতে আল্লাহ যে হিদায়াত ও তাকওয়া ওহী করেছেন, নিজের বেলায় আর অন্যের বেলায় তিনি কেবল সেটাই মেনে চলেন। এ ব্যাখ্যায় আয়াতটি তাঁর পৌঁছে দেওয়া বার্তার সঙ্গে তাঁর জীবনেরও বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "How Far the Pronoun Reaches",
          "bn": "সর্বনামটি কতদূর পৌঁছায়"
        },
        "p": [
          {
            "en": "Huwa, it, has to point at something, and the commentators read here do not all point at the same thing. Al-Baghawi sets two readings side by side. In the first, it is his speech in religion, ma nutquhu fi d-din, a phrase whose noun nutq picks up the verb of 53:3, yantiqu, he speaks. The second he introduces with and it is said, without naming who said it: it is the Qur'an. He does not choose between them, and neither reading is pressed here over the other.",
            "bn": "'হুয়া' মানে 'এ', আর সর্বনাম কিছু একটার দিকে ইঙ্গিত করবেই। যে তাফসীরগুলো এখানে পড়া হয়েছে, সেগুলো সবাই একই জিনিসের দিকে ইঙ্গিত দেখেন না। বাগাভী দুটি ব্যাখ্যা পাশাপাশি রাখেন। প্রথমটিতে 'এ' মানে দ্বীনের ব্যাপারে তাঁর কথা, মা নুতকুহু ফিদ্দীন। এখানে 'নুতক' শব্দটি ৫৩:৩ আয়াতের ক্রিয়া 'ইয়ানতিকু', তিনি কথা বলেন, তার সঙ্গেই মেলে। দ্বিতীয়টি তিনি আনেন 'বলা হয়' দিয়ে, কে বলেছেন তা উল্লেখ না করে: 'এ' মানে কুরআন। তিনি কোনোটিকে বেছে নেননি। এ লেখাও কোনোটিকে অন্যটির উপরে তুলে ধরছে না।"
          },
          {
            "en": "Al-Muyassar takes the widest reading. After paraphrasing 53:1 to 53:3, it says that the Qur'an and the Sunnah are nothing but revelation from Allah to His Prophet Muhammad ﷺ. As-Sa'di says the verse indicates that the Sunnah is revelation from Allah to His Messenger ﷺ, and cites in support: and Allah has sent down to you the Book and the Wisdom (4:113). He adds that the Prophet ﷺ is protected in what he reports about Allah and His law, because his speech issues from revelation and not from desire.",
            "bn": "সবচেয়ে বিস্তৃত ব্যাখ্যা মুয়াসসারের। ৫৩:১ থেকে ৫৩:৩ আয়াতের সারকথা বলার পর সেখানে বলা হয়েছে, কুরআন আর সুন্নাহ দুটোই আল্লাহর পক্ষ থেকে তাঁর নবী মুহাম্মাদ ﷺ-এর প্রতি ওহী, এর বাইরে কিছু নয়। সা'দীর মতে আয়াতটি প্রমাণ করে যে সুন্নাহও আল্লাহর পক্ষ থেকে তাঁর রাসূল ﷺ-এর প্রতি ওহী। সমর্থনে তিনি আনেন: আর আল্লাহ আপনার প্রতি নাযিল করেছেন কিতাব ও হিকমাহ (৪:১১৩)। তিনি আরও বলেন, আল্লাহ সম্পর্কে আর তাঁর শরীয়ত সম্পর্কে নবী ﷺ যা জানান, তাতে তিনি সুরক্ষিত। কারণ তাঁর কথা খেয়াল থেকে আসে না, আসে ওহী থেকে।"
          },
          {
            "en": "Al-Qurtubi's wording is more measured: the verse also indicates that the Sunnah is like revealed revelation in practice, kal-wahy al-munzal fi l-'amal. The likeness and the limit, in practice, are both his. Ma'arif al-Qur'an, from an analysis of the reports in Bukhari, sorts wahy into kinds: a kind whose wording and meaning are both from Allah, which is the Qur'an, and a kind whose meaning alone comes from Allah while the Messenger ﷺ puts it in his own words, which it calls Hadith or Sunnah. These framings differ, and this article does not choose among them.",
            "bn": "কুরতুবীর ভাষা আরেকটু মাপা। তাঁর মতে আয়াতটি এ ইঙ্গিতও দেয় যে আমলের ক্ষেত্রে সুন্নাহ নাযিলকৃত ওহীর মতো, কাল-ওয়াহয়িল মুনযাল ফিল আমাল। 'মতো' শব্দটি আর 'আমলের ক্ষেত্রে' সীমাটি, দুটোই তাঁর নিজের। মাআরিফুল কুরআন বুখারীর বর্ণনাগুলো বিশ্লেষণ করে ওহীকে কয়েক ভাগে ভাগ করে। এক ভাগে শব্দ আর অর্থ দুটোই আল্লাহর, সেটা কুরআন। আরেক ভাগে শুধু অর্থ আল্লাহর, আর রাসূল ﷺ তা নিজের ভাষায় প্রকাশ করেন। একে বলা হয় হাদীস বা সুন্নাহ। ব্যাখ্যাগুলো এক নয়, আর এ লেখা তাদের মধ্যে কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Revelation and His Own Reasoning",
          "bn": "ওহী আর নিজস্ব ইজতিহাদ"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens his comment on the verse with an argument other people make from it: it may be cited, he says, by those who do not allow the Messenger ﷺ ijtihad, his own reasoning, in matters as they arise. He names the use and the users' position, then moves to the Sunnah and to grammar without settling the question on this verse. The question itself is plain enough: if all his speech in religion is revelation, was there any room left for his own judgement?",
            "bn": "কুরতুবী এ আয়াতের আলোচনা শুরু করেন এমন একটি যুক্তি দিয়ে, যা অন্যরা এ আয়াত থেকে টানেন। তিনি বলেন, যাঁরা নতুন নতুন ঘটনায় রাসূল ﷺ-এর জন্য ইজতিহাদ, অর্থাৎ নিজস্ব বিচারবুদ্ধি খাটানো বৈধ মনে করেন না, তাঁরা এ আয়াতকে দলিল হিসেবে আনতে পারেন। তিনি যুক্তিটি আর তাঁদের অবস্থান উল্লেখ করেন, তারপর চলে যান সুন্নাহ আর ব্যাকরণের আলোচনায়। এ আয়াতে প্রশ্নটির মীমাংসা তিনি করেননি। প্রশ্নটা অবশ্য সহজ: দ্বীনের ব্যাপারে তাঁর সব কথাই যদি ওহী হয়, তবে নিজের বিচারবুদ্ধির জন্য আর কোনো জায়গা কি থাকে?"
          },
          {
            "en": "Ma'arif al-Qur'an raises the same question as an objection and answers it. Authentic reports, it notes, record cases where he set a ruling and revelation later came down and changed it. Its answer is that the second kind of revelation sometimes lays down a general principle, from which the Messenger ﷺ derives rulings by ijtihad; because the principle is from Allah, the rulings are called revelation from Allah. Ma'arif adds that where a prophet's judgement of this kind missed the mark, revelation came to amend it so that it did not persist.",
            "bn": "মাআরিফুল কুরআন এই প্রশ্নকেই আপত্তি আকারে তোলে, তারপর জবাব দেয়। সেখানে বলা হয়েছে, সহীহ বর্ণনায় এমন ঘটনা আছে যেখানে তিনি একটি বিধান দিয়েছিলেন, পরে ওহী নেমে সেটা বদলে দেয়। মাআরিফের জবাব হলো, দ্বিতীয় ধরনের ওহী কখনো কখনো একটি সাধারণ মূলনীতি দেয়। সেই মূলনীতি থেকে রাসূল ﷺ ইজতিহাদ করে বিধান বের করেন। মূলনীতি যেহেতু আল্লাহর, তাই সেসব বিধানকেও আল্লাহর ওহী বলা হয়। মাআরিফ আরও বলে, এ ধরনের বিচারে কোনো নবীর সিদ্ধান্ত লক্ষ্য না ছুঁলে ওহী এসে তা সংশোধন করে দিত, যাতে তা টিকে না থাকে।"
          },
          {
            "en": "The two do not read the verse the same way on this point. Al-Qurtubi reports a position that takes the verse to leave no room for the Prophet's own reasoning; Ma'arif al-Qur'an reads the verse as compatible with it, through revealed principles. Ma'arif closes its own discussion with Allah knows best. This article keeps the two side by side and leaves the question to the scholars of usul who treat it at length.",
            "bn": "এ বিষয়ে দুই তাফসীর আয়াতটিকে একভাবে পড়েনি। কুরতুবী এমন এক অবস্থানের কথা জানান, যার মতে আয়াতটি নবী ﷺ-এর নিজস্ব বিচারবুদ্ধির জন্য কোনো জায়গা রাখে না। মাআরিফুল কুরআন পড়ে উল্টোভাবে: ওহীতে আসা মূলনীতির মাধ্যমে ইজতিহাদ আয়াতের সঙ্গে মিলে যায়। মাআরিফ নিজের আলোচনা শেষ করে 'আল্লাহই ভালো জানেন' বলে। এ লেখা দুটো মতকে পাশাপাশি রেখে দিচ্ছে। প্রশ্নটির বিস্তারিত মীমাংসা উসূলের আলেমদের কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Write: Only Truth Leaves It",
          "bn": "লেখো: এখান থেকে শুধু সত্য"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches a narration of 'Abdullah ibn 'Amr to this verse. He gives it through Imam Ahmad and notes that Abu Dawud also recorded it, through Musaddad and Abu Bakr ibn Abi Shaybah, both from Yahya ibn Sa'id al-Qattan. Abu Dawud's chain on the page checked runs through those two names and Yahya, as Ibn Kathir says. What follows is Abu Dawud's wording alone, in the translation on that page, and not a blend of his version with Ahmad's.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে আব্দুল্লাহ ইবন আমর (রাঃ)-এর একটি বর্ণনা জুড়ে দিয়েছেন। তিনি সেটা এনেছেন ইমাম আহমাদের সূত্রে, আর জানিয়েছেন আবু দাউদও তা বর্ণনা করেছেন মুসাদ্দাদ ও আবু বকর ইবন আবী শাইবার মাধ্যমে, দুজনেই ইয়াহইয়া ইবন সাঈদ আল-কাত্তান থেকে। যে পৃষ্ঠাটি মিলিয়ে দেখা হয়েছে, সেখানে আবু দাউদের সনদ ঠিক এই দুই নাম আর ইয়াহইয়ার মধ্য দিয়েই এসেছে, যেমনটা ইবন কাসীর বলেছেন। নিচে শুধু আবু দাউদের ভাষ্য দেওয়া হলো। আহমাদের বর্ণনার সঙ্গে মিশিয়ে নয়।"
          },
          {
            "en": "In Abu Dawud (3646), 'Abdullah ibn 'Amr ibn al-'As said: \"I used to write everything which I heard from the Messenger of Allah (ﷺ). I intended (by it) to memorise it. The Quraysh prohibited me saying: Do you write everything that you hear from him while the Messenger of Allah (ﷺ) is a human being: he speaks in anger and pleasure? So I stopped writing, and mentioned it to the Messenger of Allah (ﷺ). He signalled with his finger to [his] mouth and said: Write, by Him in Whose hand my soul lies, only right comes out from it.\" The page checked shows no grading.",
            "bn": "আবু দাউদে (৩৬৪৬) আব্দুল্লাহ ইবন আমর ইবনুল আস (রাঃ) বলেন: আমি রাসূলুল্লাহ ﷺ-এর কাছ থেকে যা শুনতাম, মুখস্থ রাখার জন্য সবই লিখে রাখতাম। কুরাইশরা আমাকে নিষেধ করে বলল, তুমি তাঁর কাছ থেকে যা শোনো সবই লিখে রাখো? অথচ রাসূলুল্লাহ ﷺ একজন মানুষ, রাগের সময়ও কথা বলেন, খুশির সময়ও। তখন আমি লেখা বন্ধ করে দিলাম। পরে বিষয়টা রাসূলুল্লাহ ﷺ-কে জানালাম। তিনি আঙুল দিয়ে নিজের মুখের দিকে ইশারা করে বললেন: লেখো। যাঁর হাতে আমার প্রাণ, তাঁর কসম, এখান থেকে সত্য ছাড়া কিছু বের হয় না। যে পৃষ্ঠাটি দেখা হয়েছে, সেখানে এর কোনো মান উল্লেখ নেই।"
          },
          {
            "en": "The worry the Quraysh raised in that report, speech shaped by anger or pleasure, is speech from desire, the very thing 53:3 denies. Ibn Kathir lists further narrations here, from Abu Umamah and Abu Hurayra, through Ahmad and through al-Bazzar; they could not be checked against a collection for this article and are not quoted. Al-Qurtubi points back to a hadith of al-Miqdam ibn Ma'dikarib given in the introduction to his book; that introduction was not read for this verse, so it is not quoted either. No fetched source gives an occasion of revelation for the verse.",
            "bn": "ঐ বর্ণনায় কুরাইশদের আশঙ্কা ছিল রাগ বা খুশির টানে বলা কথা নিয়ে। সেটা তো খেয়াল থেকে বলা কথাই, ৫৩:৩ আয়াত ঠিক যা অস্বীকার করে। ইবন কাসীর এখানে আবু উমামা ও আবু হুরাইরা (রাঃ) থেকে আরও কিছু বর্ণনা এনেছেন, আহমাদ ও বাযযারের সূত্রে। এ লেখার জন্য সেগুলো কোনো হাদীসগ্রন্থের সঙ্গে মিলিয়ে দেখা যায়নি, তাই উদ্ধৃত করা হয়নি। কুরতুবী মিকদাম ইবন মা'দীকারিব (রাঃ)-এর একটি হাদীসের দিকে ইঙ্গিত করেছেন, যা তিনি নিজের গ্রন্থের ভূমিকায় এনেছেন। এ আয়াতের জন্য সেই ভূমিকা পড়া হয়নি, তাই সেটিও উদ্ধৃত হয়নি। যে উৎসগুলো দেখা হয়েছে, তার কোনোটিতে এ আয়াতের শানে নুযূল নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Common Ground, Then the Difference",
          "bn": "যেখানে মিল, তারপর যেখানে অমিল"
        },
        "p": [
          {
            "en": "Plainly, then: the sources read for this verse differ on how far its revelation reaches, from the Qur'an alone to the Qur'an and the Sunnah, and on how it bears on his own reasoning. This article reports those positions with their holders. It gives no ruling of its own on the standing of hadith, on which reports bind, or on how a ruling in the Sunnah relates to a ruling in the Qur'an. Those questions belong to the sciences of hadith and usul, and to the scholars qualified in them.",
            "bn": "তাহলে সোজা কথায়: এ আয়াতের জন্য যে উৎসগুলো পড়া হয়েছে, সেগুলোর মধ্যে মতভেদ আছে দুটি জায়গায়। এক, এখানকার ওহী কতদূর বিস্তৃত, শুধু কুরআন নাকি কুরআন ও সুন্নাহ দুটোই। দুই, তাঁর নিজস্ব ইজতিহাদের সঙ্গে আয়াতটির সম্পর্ক কী। এ লেখা প্রতিটি মত তার ধারকের নামসহ তুলে ধরেছে। হাদীসের মর্যাদা নিয়ে, কোন বর্ণনা মানা বাধ্যতামূলক তা নিয়ে, কিংবা সুন্নাহর বিধান কুরআনের বিধানের সঙ্গে কীভাবে সম্পর্কিত তা নিয়ে এ লেখা নিজে কোনো রায় দেয় না। এসব প্রশ্ন হাদীস ও উসূলের শাস্ত্রের, আর সেই শাস্ত্রে যোগ্য আলেমদের।"
          },
          {
            "en": "What the sources share comes first, and the difference begins only after it. Ibn Kathir says the Prophet ﷺ conveyed what he was commanded without addition or reduction. Ma'arif al-Qur'an calls it absolutely impossible for him to forge lies and impute them to Allah. As-Sa'di says he is protected in what he reports from Allah. None of the commentators read here treats the message as his invention. Their disagreement concerns the reach of the word wahy in this verse, not whether he spoke the truth.",
            "bn": "উৎসগুলোর মধ্যে যেখানে মিল, সেটা আগে। অমিল শুরু হয় তার পরে। ইবন কাসীর বলেন, নবী ﷺ যা পৌঁছাতে আদিষ্ট হয়েছিলেন, তা কিছু না বাড়িয়ে, কিছু না কমিয়ে পৌঁছে দিয়েছেন। মাআরিফুল কুরআনের ভাষায়, মিথ্যা বানিয়ে আল্লাহর নামে চালিয়ে দেওয়া রাসূল ﷺ-এর পক্ষে একেবারেই অসম্ভব। সা'দী বলেন, আল্লাহর পক্ষ থেকে তিনি যা জানান, তাতে তিনি সুরক্ষিত। এখানে পড়া কোনো তাফসীরকারই বার্তাটিকে তাঁর বানানো মনে করেন না। তাঁদের মতভেদ এ আয়াতে 'ওহী' শব্দের পরিধি নিয়ে, তিনি সত্য বলেছেন কি না তা নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Our Words Come From",
          "bn": "আমাদের কথা আসে কোথা থেকে"
        },
        "p": [
          {
            "en": "Read together, 53:3 and 53:4 work as a pair: one denies a source of speech, the other names the true one. Most human speech has a source as well, and it is not always admitted. A sharp word in an argument often comes from wanting to win; a story retold with a neater ending, from wanting to be listened to. The verse describes him, not us, and no reader receives revelation. Yet it hands every reader a question to put to their own speech before it leaves the mouth: where did this come from?",
            "bn": "৫৩:৩ আর ৫৩:৪ পাশাপাশি পড়লে দেখা যায়, দুটো আয়াত জোড়ায় কাজ করে। একটি কথার এক উৎসকে অস্বীকার করে, অন্যটি আসল উৎসের নাম বলে। মানুষের প্রায় সব কথারই একটা উৎস থাকে, শুধু সবসময় তা স্বীকার করা হয় না। তর্কের সময় কড়া কথাটা অনেক সময় আসে জেতার ইচ্ছা থেকে। কোনো ঘটনা আরেকটু গুছিয়ে বলার পেছনে থাকে মনোযোগ পাওয়ার ইচ্ছা। আয়াতটি তাঁর বর্ণনা, আমাদের নয়। কোনো পাঠকের কাছে ওহী আসে না। তবু মুখ থেকে কথা বেরোনোর আগে নিজেকে একটা প্রশ্ন করার সুযোগ আয়াতটি সবাইকে দেয়: এ কথা আসছে কোথা থেকে?"
          },
          {
            "en": "The objection in 'Abdullah ibn 'Amr's report, that a man speaks in anger and in pleasure, was answered for the Prophet ﷺ; for everyone else it is simply an accurate description. Anger exaggerates and pleasure flatters. Someone who knows this about themselves can slow down before speaking in either state, and can hold back from writing, posting or forwarding what was said in heat, so that the record they leave is closer to what they would stand by later.",
            "bn": "আব্দুল্লাহ ইবন আমর (রাঃ)-এর বর্ণনায় আপত্তি ছিল, মানুষ রাগের সময়ও কথা বলে, খুশির সময়ও। নবী ﷺ-এর ক্ষেত্রে সে আপত্তির জবাব এসে গেছে। কিন্তু বাকি সবার বেলায় কথাটা একদম ঠিক বর্ণনা। রাগ বাড়িয়ে বলায়, খুশি তোষামোদ করায়। নিজের এ স্বভাব যিনি চেনেন, তিনি দুই অবস্থাতেই কথা বলার আগে একটু থামতে পারেন। উত্তেজনার মুহূর্তে বলা কথা লিখে রাখা, পোস্ট করা বা অন্যকে পাঠানো থেকেও বিরত থাকতে পারেন। তাহলে তাঁর রেখে যাওয়া কথাগুলো এমন হবে, যার দায় পরেও তিনি নিতে পারবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Passing It On Intact",
          "bn": "যেমন পেলাম, তেমনই পৌঁছানো"
        },
        "p": [
          {
            "en": "Ibn Kathir's phrase for the Prophet's delivery, complete and in full, without addition or reduction, describes a messenger's trust. No one after him carries revelation, but anyone who repeats a verse, a hadith or a scholar's view to someone else is handling what they did not author. The practical habits follow: give the source with the saying, say I do not know when that is the truth, and do not round a weak report up or a real disagreement down.",
            "bn": "নবী ﷺ-এর পৌঁছে দেওয়া নিয়ে ইবন কাসীরের কথা, পুরোপুরি, পূর্ণ মাত্রায়, কিছু না বাড়িয়ে, কিছু না কমিয়ে, একজন বার্তাবাহকের আমানতের বর্ণনা। তাঁর পরে আর কেউ ওহী বহন করেন না। তবু যে কেউ অন্যকে কোনো আয়াত, হাদীস বা কোনো আলেমের মত শোনান, তিনি এমন কিছু নাড়াচাড়া করছেন যা তাঁর নিজের রচনা নয়। এখান থেকে কয়েকটি অভ্যাস আসে। কথার সঙ্গে উৎস বলুন। না জানলে বলুন, জানি না। দুর্বল বর্ণনাকে টেনে মজবুত বানাবেন না, আর সত্যিকারের মতভেদকে ছোট করে মিলিয়ে দেবেন না।"
          },
          {
            "en": "The commentators on this very verse show the habit at work. Al-Baghawi keeps two readings without choosing. Al-Qurtubi records a grammatical suggestion together with the objection to it. Ibn Kathir quotes al-Bazzar's own note that he knew one of his reports only through a single chain. Each passes on what he received with its limits showing. The verse speaks of revelation conveyed without addition; those who hand on what came from it can at least keep from adding to it.",
            "bn": "এ আয়াতের তাফসীরকারেরাই অভ্যাসটা হাতে-কলমে দেখিয়েছেন। বাগাভী দুটি ব্যাখ্যা রেখেছেন, কোনোটি বেছে নেননি। কুরতুবী ব্যাকরণের একটি প্রস্তাব এনেছেন তার বিরুদ্ধে আপত্তিসহ। ইবন কাসীর বাযযারের নিজের মন্তব্য উদ্ধৃত করেছেন যে একটি বর্ণনা তিনি কেবল একটি সনদেই জানেন। প্রত্যেকে যা পেয়েছেন তা পৌঁছে দিয়েছেন তার সীমাসহ, কিছু লুকিয়ে নয়। আয়াতটি এমন ওহীর কথা বলে, যা কিছু না বাড়িয়ে পৌঁছানো হয়েছে। যাঁরা সেখান থেকে পাওয়া কথা অন্যকে দেন, তাঁরা অন্তত তাতে নিজের কিছু যোগ না করার চেষ্টা করতে পারেন।"
          }
        ]
      }
    ]
  },
  "53:23": {
    "sections": [
      {
        "h": {
          "en": "Names With Nothing Behind",
          "bn": "নামের পেছনে কিছু নেই"
        },
        "p": [
          {
            "en": "The verse follows directly on the naming of the three idols and the exposure of an unfair division in 53:19 to 53:22. In hiya illa asma'un sammaytumuha antum wa aba'ukum: they are nothing but names that you have named, you and your fathers. The sentence is built as a restriction, in ... illa, nothing but, and the same frame returns in the next clause: in yattabi'una illa z-zann, they follow nothing but assumption. Two exclusions in a single verse leave very little standing.",
            "bn": "তিনটি মূর্তির নাম নেওয়া আর এক অন্যায় ভাগাভাগির মুখোশ খুলে দেওয়ার পরপরই এ আয়াত আসে, ৫৩:১৯ থেকে ৫৩:২২ পর্যন্ত যার বর্ণনা। ইন হিয়া ইল্লা আসমাউন সাম্মাইতুমূহা আনতুম ওয়া আবাউকুম: এগুলো কিছু নাম ছাড়া আর কিছু নয়, যা তোমরা আর তোমাদের বাপদাদারা রেখেছ। বাক্যের গড়নটাই সীমা টেনে দেওয়ার: ইন ... ইল্লা, অর্থাৎ শুধু এটুকুই। পরের বাক্যাংশে একই ছাঁচ আবার ফিরে আসে: ইন ইয়াত্তাবিঊনা ইল্লায যান্না, তারা আন্দাজ ছাড়া কিছুই অনুসরণ করে না। এক আয়াতে দুটি নাকচ, দাঁড়িয়ে থাকার মতো প্রায় কিছুই আর বাকি থাকে না।"
          },
          {
            "en": "What does hiya, they, point to? At-Tabari makes it the names themselves: these names you have given, which are al-Lat, al-'Uzza and Manat the third, the other, are only names that you and your fathers before you gave, O you who associate partners with God. Al-Qurtubi and al-Baghawi make it the idols: these awthan, says al-Qurtubi, these asnam, says al-Baghawi. Ibn Kathir frames the verse as a rebuke for worshipping the idols and calling them gods, and the Muyassar says these idols are mere names with nothing of the attributes of perfection in them.",
            "bn": "হিয়া, অর্থাৎ এগুলো, বলতে কী বোঝানো হচ্ছে? তাবারীর মতে নামগুলোই। যে নাম তোমরা দিয়েছ, মানে লাত, উযযা আর তৃতীয় আরেকটি মানাত, এগুলো কেবল নাম, যা তোমরা আর তোমাদের আগের বাপদাদারা রেখেছ, হে আল্লাহর সঙ্গে শরিককারীরা। কুরতুবী আর বাগাভী সর্বনামটিকে মূর্তির দিকে ফেরান। কুরতুবী বলেন, এই আওসান। বাগাভী বলেন, এই আসনাম। ইবন কাসীর পুরো আয়াতকে দেখেন মূর্তিপূজা আর সেগুলোকে ইলাহ বলে ডাকার বিরুদ্ধে ভর্ৎসনা হিসেবে। মুয়াসসার বলে, এই মূর্তিগুলো নিছক নাম, পূর্ণতার কোনো গুণ এদের মধ্যে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Carved, Then Called Gods",
          "bn": "খোদাই করে ইলাহ ডাকা"
        },
        "p": [
          {
            "en": "Al-Qurtubi reads the naming as the last step of a making. Sammaytumuha, he says, means you carved them and named them gods. On antum wa aba'ukum he adds a single word, qalladtumuhum: you imitated your fathers in it. Ibn Kathir glosses the same phrase as min tilqa'i anfusikum, of your own accord, and his abridged English renders it as of your own desire. The fathers appear in the verse not as an excuse but as the channel through which the names arrived.",
            "bn": "কুরতুবীর চোখে নাম রাখাটা ছিল বানানোর শেষ ধাপ। তাঁর ব্যাখ্যায় সাম্মাইতুমূহা মানে, তোমরা ওগুলো খোদাই করেছ, তারপর ইলাহ নামে ডেকেছ। আনতুম ওয়া আবাউকুম প্রসঙ্গে তিনি শুধু এক শব্দ যোগ করেন, কাল্লাদতুমূহুম: এ ব্যাপারে তোমরা বাপদাদার অন্ধ অনুকরণ করেছ। ইবন কাসীর একই অংশের ব্যাখ্যা দেন মিন তিলকাই আনফুসিকুম, অর্থাৎ নিজেদের মনগড়া করে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা দাঁড়িয়েছে, নিজেদের ইচ্ছামতো। বাপদাদারা আয়াতে এসেছেন অজুহাত হিসেবে নয়, বরং সেই পথ হিসেবে, যে পথ ধরে নামগুলো এসে পৌঁছেছে।"
          },
          {
            "en": "Ibn Kathir's abridged English, in the passage covering 53:19 to 53:26, quotes Ibn Jarir (at-Tabari) on how two of the names were formed: they derived al-Lat from the name Allah and made it feminine, and al-'Uzza from God's name al-'Aziz. On that account the names borrowed their weight from the divine names they echoed, while nothing of the One so named stood behind them. The verse's charge fits it exactly: a word was coined, and the reality it implied was never sent down.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে ৫৩:১৯ থেকে ৫৩:২৬ পর্যন্ত আয়াতের আলোচনায় ইবন জারীর (তাবারী)-এর একটি উক্তি আছে, দুটি নাম কীভাবে গড়া হয়েছিল তা নিয়ে। আল্লাহ নাম থেকে তারা লাত বানিয়ে নিয়েছিল, স্ত্রীবাচক করে। আর আল্লাহর নাম আল-আযীয থেকে বানিয়েছিল উযযা। তা-ই যদি হয়, তবে নামগুলো ওজন ধার করেছিল আল্লাহর নামের প্রতিধ্বনি থেকে, অথচ সেই নামের মালিকের কিছুই তাদের পেছনে ছিল না। আয়াতের অভিযোগ ঠিক এখানেই খাপ খায়। একটা শব্দ বানানো হয়েছে, কিন্তু শব্দটা যে বাস্তবতার দাবি করে, তা কখনো নাজিল হয়নি।"
          },
          {
            "en": "The root of sammaytumuha, s-m-y, to name, returns four verses later. In 53:27 those who do not believe in the Hereafter layusammuna l-mala'ikata tasmiyata l-untha: they name the angels with female names. The passage thus binds two acts of naming together, idols given names and angels given names, and in both the name came from the namers, not from God. In 53:28 the refrain of this verse comes back, in yattabi'una illa z-zann. Those verses are pointers only here.",
            "bn": "সাম্মাইতুমূহা শব্দের ধাতু স-ম-য়, নাম রাখা। চারটি আয়াত পরে ধাতুটা আবার ফিরে আসে। ৫৩:২৭ আয়াতে যারা আখিরাতে বিশ্বাস করে না, তাদের সম্পর্কে বলা হয়েছে: লাইউসাম্মূনাল মালাইকাতা তাসমিয়াতাল উনসা, তারা ফেরেশতাদের নারীর নামে ডাকে। এভাবে এ অংশ দুটি নামকরণকে এক সুতোয় গাঁথে। মূর্তির নাম রাখা আর ফেরেশতার নাম রাখা, দুই ক্ষেত্রেই নাম এসেছে যারা রেখেছে তাদের কাছ থেকে, আল্লাহর কাছ থেকে নয়। ৫৩:২৮ আয়াতে এ আয়াতের ধুয়াটাও ফিরে আসে: ইন ইয়াত্তাবিঊনা ইল্লায যান্না। ওই আয়াতগুলো এখানে শুধু ইঙ্গিত হিসেবে রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant Sent Down",
          "bn": "নাজিল হয়নি কোনো সনদ"
        },
        "p": [
          {
            "en": "Ma anzala llahu biha min sultan: God has sent down for them no sultan. Most of the commentators fetched here read sultan as proof. Ibn Kathir glosses it min hujja, of proof. Al-Qurtubi says hujja wa la burhan, neither proof nor demonstration. Al-Baghawi says a proof for what you claim, that they are gods, and the Muyassar a proof that would confirm your claim about them. On this reading the verse asks for evidence and notes that none was ever given.",
            "bn": "মা আনযালাল্লাহু বিহা মিন সুলতান: আল্লাহ এগুলোর পক্ষে কোনো সুলতান নাজিল করেননি। এখানে যেসব তাফসীর দেখা হয়েছে, তার বেশির ভাগ সুলতান মানে করে প্রমাণ। ইবন কাসীরের ব্যাখ্যা মিন হুজ্জা, অর্থাৎ কোনো প্রমাণ। কুরতুবী বলেন, হুজ্জা ওয়া লা বুরহান, না প্রমাণ, না দলিল। বাগাভীর ভাষায়, ওগুলো ইলাহ বলে তোমরা যা দাবি করো, তার পক্ষে প্রমাণ। মুয়াসসারের ভাষায়, এমন প্রমাণ, যা তাদের নিয়ে তোমাদের দাবিকে সত্য বলে সমর্থন করবে। এ পাঠে আয়াতটি দলিল চায়, আর জানিয়ে দেয় যে কোনো দলিল কখনো দেওয়া হয়নি।"
          },
          {
            "en": "At-Tabari words it differently. Ma anzala llahu biha, he explains, means God did not make that permissible for you, nor give you leave for it: lam yubih Allahu dhalika lakum wa la adhina lakum bihi. Here the missing sultan is a warrant, a permission from Him who alone could grant it. The two readings are not the same. For most of these commentators the gap lies in the evidence; for at-Tabari it lies in the authorisation. Each is kept here as its holder gave it.",
            "bn": "তাবারী কথাটা বলেন অন্যভাবে। তাঁর ব্যাখ্যায় মা আনযালাল্লাহু বিহা মানে, আল্লাহ তোমাদের জন্য এটা বৈধ করেননি, এর অনুমতিও দেননি: লাম ইউবিহিল্লাহু যালিকা লাকুম ওয়া লা আযিনা লাকুম বিহি। এখানে যে সুলতান নেই, তা অনুমতিপত্র, এমন সত্তার দেওয়া অনুমতি, যিনি ছাড়া আর কেউ তা দিতে পারেন না। দুটি পাঠ এক নয়। এই তাফসীরকারদের বেশির ভাগের মতে ঘাটতিটা প্রমাণে, আর তাবারীর মতে ঘাটতিটা অনুমোদনে। এখানে প্রত্যেকের কথা তাঁর নিজের ভাষ্যেই রাখা হলো।"
          },
          {
            "en": "As-Sa'di ties the proof to its consequence. Sultan, he says, is proof and demonstration of the soundness of your way. Then he states a general rule: every matter for which God has sent down no sultan is false and corrupt, and is not to be taken as religion. He adds that the idolaters themselves were not following a demonstration that gave them certainty about their position. The rule concerns what may be taken as religion; it is a measure for claims, not a verdict on persons.",
            "bn": "সা'দী প্রমাণের সঙ্গে তার পরিণতিও জুড়ে দেন। তাঁর মতে সুলতান মানে তোমাদের পথ যে সঠিক, তার প্রমাণ ও দলিল। তারপর তিনি একটা সাধারণ নীতি বলেন: যে বিষয়ের পক্ষে আল্লাহ কোনো সুলতান নাজিল করেননি, তা বাতিল ও ভ্রষ্ট, তাকে দ্বীন হিসেবে গ্রহণ করা যায় না। তিনি আরও বলেন, মূর্তিপূজকেরা নিজেরাও এমন কোনো দলিলের অনুসরণ করছিল না, যা থেকে নিজেদের অবস্থান সম্পর্কে নিশ্চিত হওয়া যায়। নীতিটা হলো কোনটাকে দ্বীন বলে নেওয়া যাবে তার মাপকাঠি। দাবি যাচাইয়ের মানদণ্ড এটি, কোনো মানুষের উপর রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Address to Report",
          "bn": "সম্বোধন থেকে বিবরণে"
        },
        "p": [
          {
            "en": "Read the verse aloud and the grammatical person changes in the middle. It begins with you: names you have named, you and your fathers. Then it turns: they follow nothing but assumption. Al-Qurtubi marks the turn in a phrase, 'ada min al-khitab ila l-khabar, it returned from address to report. Al-Baghawi says the same, raja'a ila l-khabar ba'da l-mukhataba. The idolaters are first spoken to and then spoken about, as though the verse steps back to describe them to the listener.",
            "bn": "আয়াতটি জোরে পড়লে মাঝপথে সম্বোধনের ধরন বদলে যায়। শুরু হয় সরাসরি তোমরা দিয়ে: নাম যা তোমরা রেখেছ, তোমরা আর তোমাদের বাপদাদারা। তারপর মোড় ঘোরে: তারা আন্দাজ ছাড়া কিছুই অনুসরণ করে না। কুরতুবী এই মোড়টা চিহ্নিত করেন এক বাক্যে: আদা মিনাল খিতাবি ইলাল খাবার, সম্বোধন থেকে বিবরণে ফিরে এল। বাগাভীও একই কথা বলেন: রাজাআ ইলাল খাবারি বা'দাল মুখাতাবা। মূর্তিপূজকদের প্রথমে সরাসরি বলা হচ্ছে, তারপর তাদের নিয়ে বলা হচ্ছে। যেন আয়াতটি এক পা পিছিয়ে শ্রোতার সামনে তাদের অবস্থা তুলে ধরছে।"
          },
          {
            "en": "Al-Qurtubi also records a variant reading. The common reading, he says, is yattabi'una, with the letter ya: they follow. 'Isa ibn 'Umar, Ayyub and Ibn as-Samayfa' read tattabi'una, with the letter ta: you follow, keeping the direct address, and he adds that this is the reading of Ibn Mas'ud and Ibn 'Abbas. On either reading the charge is the same. What changes is whether it is made to their face or reported about them to others.",
            "bn": "কুরতুবী এখানে কিরাআতের একটি ভিন্নতাও উল্লেখ করেন। তাঁর ভাষ্যে সাধারণ কিরাআত ইয়াত্তাবিঊনা, ইয়া অক্ষর দিয়ে: তারা অনুসরণ করে। ঈসা ইবন উমর, আইয়ুব আর ইবনুস সামাইফা পড়েছেন তাত্তাবিঊনা, তা অক্ষর দিয়ে: তোমরা অনুসরণ করো। এতে সরাসরি সম্বোধনটা বজায় থাকে। তিনি জানান, ইবন মাসউদ (রাঃ) আর ইবন আব্বাস (রাঃ)-এর কিরাআতও এটাই। যে কিরাআতই ধরা হোক, অভিযোগ একই থাকে। বদলায় শুধু এটুকু: কথাটা তাদের মুখের উপর বলা হচ্ছে, নাকি অন্যদের কাছে তাদের সম্পর্কে জানানো হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Guess and a Craving",
          "bn": "আন্দাজ আর মনের টান"
        },
        "p": [
          {
            "en": "In yattabi'una illa z-zann. At-Tabari explains: in the names they gave their gods, these idolaters follow nothing but the assumption that what they say is true, and not certainty. Ibn Kathir names what the assumption leaned on: they have no support except their good opinion of their fathers, who walked this false path before them. As-Sa'di is sharper. What led them to their position, he says, was corrupt assumption and stagnant ignorance, al-jahl al-kasid, together with what their selves desired.",
            "bn": "ইন ইয়াত্তাবিঊনা ইল্লায যান্না। তাবারীর ব্যাখ্যা: নিজেদের উপাস্যদের যে নাম তারা দিয়েছে, সে ব্যাপারে এই মুশরিকেরা কেবল এই ধারণার পেছনে চলে যে তাদের কথা সত্য। এর পেছনে কোনো ইয়াকীন, অর্থাৎ নিশ্চিত জ্ঞান, নেই। এই আন্দাজ কিসের উপর ভর করে ছিল, ইবন কাসীর তা বলে দেন। তাদের একমাত্র অবলম্বন বাপদাদার প্রতি ভালো ধারণা, যারা তাদের আগেই এই বাতিল পথে হেঁটেছিল। সা'দীর ভাষা আরও কড়া। তাঁর মতে তাদের এ অবস্থানে টেনে এনেছে ভ্রষ্ট ধারণা আর অচল মূর্খতা, আল-জাহলুল কাসিদ, সঙ্গে তাদের মনের চাওয়া।"
          },
          {
            "en": "Wa ma tahwa l-anfus: and what the selves desire. Here the commentators give different shades. At-Tabari reads it as their own desire, because they did not take these names from a revelation from God or from a messenger who told them; they made them up themselves, or took them from fathers who held the same disbelief. Ibn Kathir names the share their selves took in leadership and in honouring their ancient fathers. Al-Qurtubi says it is what the self inclines towards, and al-Baghawi what Shaytan made attractive to them.",
            "bn": "ওয়া মা তাহওয়াল আনফুস: আর মন যা চায়। এখানে তাফসীরকারদের ব্যাখ্যায় নানা রং দেখা যায়। তাবারীর মতে এটা তাদের নিজেদের প্রবৃত্তি। নামগুলো তারা আল্লাহর কোনো ওহি থেকে পায়নি, কোনো রাসূলও তাদের জানাননি। নিজেরাই বানিয়েছে, নয়তো নিয়েছে সেই বাপদাদার কাছ থেকে, যারা একই কুফরের উপর ছিল। ইবন কাসীর এখানে দেখেন নেতৃত্বের লোভ আর প্রাচীন পূর্বপুরুষদের মহিমা বাড়ানোয় মনের যে ভাগ, সেটা। কুরতুবীর মতে মন যেদিকে ঝোঁকে, তা-ই। বাগাভীর মতে শয়তান তাদের চোখে যা সুন্দর করে দেখিয়েছে।"
          },
          {
            "en": "The Muyassar speaks of selves turned aside from the sound fitra, and as-Sa'di of the shirk and innovations that agreed with their desires. These are shades rather than a dispute: one locates the desire in status, another in an outside whisper, another in a nature bent from its first shape. What they share is the verse's own pairing. Assumption supplies the claim and desire supplies the motive, and neither of them is knowledge.",
            "bn": "মুয়াসসার বলে, তাদের মন সুস্থ ফিতরা থেকে সরে গিয়েছিল। সা'দী বলেন সেই শিরক আর বিদআতের কথা, যা তাদের প্রবৃত্তির সঙ্গে মিলে যেত। এগুলো মতবিরোধ নয়, একই জিনিসের নানা দিক। কেউ চাওয়ার উৎস খোঁজেন মর্যাদার লোভে, কেউ বাইরের কুমন্ত্রণায়, কেউ আসল গড়ন থেকে বেঁকে যাওয়া স্বভাবে। সবার মিল আয়াতের নিজের জোড়ায়। দাবিটা জোগায় আন্দাজ, তাগিদটা জোগায় প্রবৃত্তি। আর এ দুটির কোনোটাই জ্ঞান নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Zann That Is Not Blamed",
          "bn": "যে যান্ন নিন্দনীয় নয়"
        },
        "p": [
          {
            "en": "Because the verse condemns following zann, a reader may ask about the many rulings Muslims act on with less than certain evidence. Ma'arif al-Qur'an takes this up in its note on the same refrain in 53:28, within a group that covers 53:23 to 53:28. The Arabic word zann, it says, is used in several senses. One of them is baseless thoughts, and that is the sense here, because baseless thoughts were the cause of idolatry and the verse sets out to remove that cause.",
            "bn": "আয়াতটি যান্নের অনুসরণকে নিন্দা করছে। তাহলে মুসলমানেরা যে অনেক বিধান নিশ্চিত প্রমাণের চেয়ে কম মানের দলিলের ভিত্তিতে মানেন, সেগুলোর কী হবে? এ প্রশ্ন পাঠকের মনে আসতে পারে। মাআরিফুল কুরআন ৫৩:২৩ থেকে ৫৩:২৮ পর্যন্ত আয়াতের দলবদ্ধ আলোচনায়, ৫৩:২৮ আয়াতে একই ধুয়ার প্রসঙ্গে বিষয়টি তোলে। সেখানে বলা হয়েছে, আরবি যান্ন শব্দ কয়েকটি অর্থে ব্যবহৃত হয়। তার একটি হলো ভিত্তিহীন ধারণা, আর এখানে অর্থ সেটাই। কারণ ভিত্তিহীন ধারণাই ছিল মূর্তিপূজার মূলে, আর আয়াতটি সেই মূলটাই উপড়ে ফেলতে চায়।"
          },
          {
            "en": "Zann is also used, Ma'arif goes on, as the opposite of yaqin, assured knowledge of something that really exists, such as what comes from the Qur'an and from reports carried by so many that agreement on a falsehood is impossible. Against that, zann can mean knowledge based on a proof that is not so certain as to rule out other possibilities, as with injunctions based on general narratives of the Prophet ﷺ. That kind is recognised by the Shari'ah, and the Ummah agrees that acting on it is obligatory. The verse, it concludes, denounces the first kind, so there is no contradiction.",
            "bn": "মাআরিফুল কুরআন আরও বলে, যান্ন শব্দ ইয়াকীনের বিপরীত অর্থেও আসে। ইয়াকীন হলো বাস্তবে আছে এমন কিছুর নিশ্চিত জ্ঞান, যেমন কুরআন থেকে পাওয়া জ্ঞান, কিংবা এত বিপুল সংখ্যক মানুষের বর্ণনা, যাদের সবাই মিথ্যার উপর একমত হওয়া অসম্ভব। এর বিপরীতে যান্ন কখনো এমন জ্ঞানকে বোঝায়, যা দলিলের উপর দাঁড়িয়ে আছে, তবে দলিলটা এত নিশ্চিত নয় যে অন্য সম্ভাবনা পুরোপুরি বাদ পড়ে যায়। নবী ﷺ-এর সাধারণ বর্ণনানির্ভর বিধানগুলো এর উদাহরণ। শরিয়ত এ ধরনের যান্নকে স্বীকৃতি দেয়, আর উম্মাহ একমত যে এর উপর আমল করা ওয়াজিব। সিদ্ধান্ত হলো, আয়াতটি প্রথম ধরনের যান্নকেই নিন্দা করে, তাই এতে কোনো বিরোধ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Guidance Had Already Come",
          "bn": "হেদায়াত আগেই এসেছিল"
        },
        "p": [
          {
            "en": "Wa laqad ja'ahum min rabbihimu l-huda: and guidance had certainly come to them from their Lord. At-Tabari spells out what that guidance was: the clear exposition, by the revelation given to Muhammad ﷺ, that worshipping these idols is not fitting, and that worship is fit only for God, the One, the Overpowering. Al-Qurtubi calls it the clarification from the Messenger that they are not gods. Al-Baghawi says the same and names its two carriers, the Book and the Messenger.",
            "bn": "ওয়া লাকাদ জাআহুম মির রাব্বিহিমুল হুদা: অথচ তাদের রবের কাছ থেকে তাদের কাছে হেদায়াত এসেই গিয়েছিল। সে হেদায়াত কী, তাবারী খুলে বলেন। মুহাম্মাদ ﷺ-এর উপর নাজিল হওয়া ওহির মাধ্যমে স্পষ্ট বর্ণনা এসেছিল যে এসব মূর্তির ইবাদত শোভা পায় না। ইবাদতের উপযুক্ত কেবল আল্লাহ, যিনি এক, যিনি সবার উপর প্রবল। কুরতুবীর ভাষায় এটা রাসূলের পক্ষ থেকে আসা সেই বর্ণনা, যা জানিয়ে দেয় এগুলো ইলাহ নয়। বাগাভীও একই কথা বলেন, আর এর দুটি বাহকের নাম নেন: কিতাব আর রাসূল।"
          },
          {
            "en": "Ibn Kathir widens the frame: God sent them messengers with the illuminating truth and the decisive proof, and yet they did not follow what was brought to them or submit to it. So at-Tabari, al-Qurtubi and al-Baghawi tie the guidance to the Prophet ﷺ and his revelation, while Ibn Kathir speaks of messengers in the plural. Both are recorded here as given. At-Tabari also quotes Ibn Zayd on this clause in three words, fa-ma ntafa'u bihi: and they did not benefit from it. The Muyassar ends its gloss the same way.",
            "bn": "ইবন কাসীর পরিসরটা বড় করেন। তাঁর ব্যাখ্যায় আল্লাহ তাদের কাছে রাসূলদের পাঠিয়েছিলেন উজ্জ্বল সত্য আর অকাট্য প্রমাণ দিয়ে, তবু তারা সে পথে চলেনি, মাথাও নোয়ায়নি। তাবারী, কুরতুবী আর বাগাভী হেদায়াতকে বাঁধেন নবী ﷺ আর তাঁর ওহির সঙ্গে। ইবন কাসীর বলেন বহুবচনে, রাসূলদের কথা। দুটি ভাষ্যই এখানে যেমন আছে তেমন রাখা হলো। তাবারী এ অংশে ইবন যায়দের তিনটি শব্দের একটি মন্তব্যও আনেন: ফামান তাফাঊ বিহি, কিন্তু তারা এতে কোনো উপকার নেয়নি। মুয়াসসারও তার ব্যাখ্যা শেষ করে একই কথায়।"
          },
          {
            "en": "As-Sa'di draws out the consequence. The guidance, he says, directs them in tawhid, in prophethood and in all that the servants need, and God has made it clear in the most complete way, with proofs that oblige them and others to follow it. After that clarification no excuse or argument remains for anyone. To stay on a path whose end is lasting misery is the most foolish folly and the worst wrong, and still, he adds, they nurse wishes and are deceived about themselves. The next verse, 53:24, asks: or will man have whatever he wishes?",
            "bn": "সা'দী এর পরিণতিটা টেনে বের করেন। তাঁর মতে এ হেদায়াত পথ দেখায় তাওহীদে, নবুওয়াতে, আর বান্দার প্রয়োজনের সব বিষয়ে। আল্লাহ তা সবচেয়ে পূর্ণ আর স্পষ্টভাবে বর্ণনা করেছেন, সঙ্গে দিয়েছেন এমন দলিল, যা তাদের এবং অন্যদেরও তা মেনে চলতে বাধ্য করে। এমন বর্ণনার পর কারও কোনো ওজর বা যুক্তি আর বাকি থাকে না। যে পথের শেষ চিরস্থায়ী দুর্ভাগ্য, তার উপর টিকে থাকা চরম বোকামি আর সবচেয়ে বড় জুলুম। তবু, তিনি যোগ করেন, তারা নানা আশা পোষে আর নিজেদের নিয়ে ধোঁকায় থাকে। ঠিক পরের আয়াত ৫৩:২৪ প্রশ্ন করে: মানুষ কি যা চায় তা-ই পায়?"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It Without a Target",
          "bn": "কাউকে নিশানা না বানিয়ে"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse addresses the idolaters of the Prophet's ﷺ time and the names they gave to al-Lat, al-'Uzza and Manat. It describes what the text describes, and it licenses nothing against any living person or community. It is not a label to fix on any present-day group or practice. Its condemnation falls on a claim made without authority from God, and the commentators fetched here read it of those who made that claim, not of a people to be named today.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নবী ﷺ-এর যুগের মূর্তিপূজকদের সম্বোধন করে, আর লাত, উযযা ও মানাতকে তারা যে নাম দিয়েছিল তার কথা বলে। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। এ যুগের কোনো দল বা কোনো রীতির গায়ে সেঁটে দেওয়ার তকমাও এটা নয়। এর নিন্দা পড়েছে আল্লাহর অনুমোদন ছাড়া করা এক দাবির উপর। এখানে দেখা তাফসীরগুলো আয়াতটি পড়ে সেই দাবিদারদের প্রসঙ্গেই, আজ কারও নাম ধরে চিহ্নিত করার জন্য নয়।"
          },
          {
            "en": "No fetched commentary attaches a hadith to this verse, so none is quoted. The reports in Ibn Kathir's grouped passage concern the idols themselves, in 53:19 and 53:20, and the wishing of 53:24, and they belong to those verses. The neighbours are pointers only: the unfair division of 53:21 and 53:22, which this verse answers, and the naming of angels with the refrain on assumption in 53:27 and 53:28, which carry its argument further.",
            "bn": "এখানে দেখা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই কোনো হাদীস উদ্ধৃত হলো না। ইবন কাসীরের দলবদ্ধ আলোচনায় যে বর্ণনাগুলো আছে, সেগুলো ৫৩:১৯ ও ৫৩:২০ আয়াতের মূর্তিগুলো নিয়ে, আর ৫৩:২৪ আয়াতের আশা-আকাঙ্ক্ষা নিয়ে। সেগুলো ওই আয়াতগুলোরই। পাশের আয়াতগুলো এখানে শুধু ইঙ্গিত। ৫৩:২১ ও ৫৩:২২ আয়াতের অন্যায় ভাগাভাগি, যার জবাব এ আয়াত। আর ৫৩:২৭ ও ৫৩:২৮ আয়াতে ফেরেশতাদের নামকরণ ও আন্দাজ নিয়ে সেই ধুয়া, যা এ আয়াতের যুক্তিকে আরও সামনে নিয়ে যায়।"
          },
          {
            "en": "What remains for a reader is the verse's test, turned inward. What do I hold that has no sultan behind it, only a habit, a good opinion of those who came before me, or a wish? The verse sets three things on one side, a name, a guess and a desire, and on the other a single thing, the guidance that came from their Lord. The question it leaves is not about anyone else's names but about what I myself follow, and whether I have let the guidance that reached me do its work.",
            "bn": "পাঠকের জন্য যা বাকি থাকে, তা আয়াতের পরীক্ষাটা নিজের দিকে ফেরানো। আমি এমন কী ধরে আছি, যার পেছনে কোনো সুলতান নেই? আছে শুধু অভ্যাস, আগের মানুষদের প্রতি ভালো ধারণা, নয়তো মনের ইচ্ছা? আয়াত এক পাল্লায় রাখে তিনটি জিনিস: নাম, আন্দাজ আর চাওয়া। অন্য পাল্লায় রাখে মাত্র একটি: তাদের রবের কাছ থেকে আসা হেদায়াত। যে প্রশ্ন আয়াতটি রেখে যায়, তা অন্য কারও নাম নিয়ে নয়। প্রশ্নটা আমি নিজে কী অনুসরণ করি তা নিয়ে, আর আমার কাছে যে হেদায়াত পৌঁছেছে, তাকে কাজ করতে দিয়েছি কি না, তা নিয়ে।"
          }
        ]
      }
    ]
  },
  "53:39-42": {
    "sections": [
      {
        "h": {
          "en": "An Ancient Charter",
          "bn": "এক প্রাচীন সনদ"
        },
        "p": [
          {
            "en": "These four short verses close an argument that begins at 53:33 with a portrait: a man who turned away, gave a little, and then withheld. Does he have knowledge of the unseen, the surah asks, or has he not been told what is in the scrolls of Musa (AS) and of Ibrahim (AS), who fulfilled his covenant? What follows from 53:38 onward is presented as the content of those earlier scriptures: no bearer of burdens bears the burden of another, and man has only that for which he strives.",
            "bn": "এই চারটি ছোট আয়াত এমন এক যুক্তির সমাপ্তি টানে, যা শুরু হয় 53:33 আয়াতে একটি প্রতিকৃতি দিয়ে: এক ব্যক্তি — যে মুখ ফিরিয়ে নিল, সামান্য দিল, তারপর বন্ধ করে দিল। সূরাটি জিজ্ঞেস করে, তার কাছে কি গায়েবের জ্ঞান আছে, নাকি তাকে জানানো হয়নি মূসা (আঃ)-এর সহীফায় কী আছে, আর ইবরাহীম (আঃ)-এর সহীফায় — যিনি তাঁর অঙ্গীকার পূর্ণ করেছিলেন? এরপর 53:38 আয়াত থেকে যা আসে তা উপস্থাপিত হয় সেই আগের কিতাবগুলোরই বিষয়বস্তু হিসেবে: কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না, আর মানুষের জন্য কেবল তা-ই আছে যার জন্য সে চেষ্টা করেছে।"
          },
          {
            "en": "The framing matters: these are not rules invented for one community but principles Allah affirms from scriptures given long before. The verses answer a man who acted as though another could carry his burden; the answer he receives is a law as old as revealed religion itself. Responsibility cannot be transferred, and reward cannot be inherited from someone else's labor. Whatever else changed between the prophets, this clause of the charter did not.",
            "bn": "কাঠামোটিই গুরুত্বপূর্ণ: এগুলো কোনো এক উম্মতের জন্য বানানো নিয়ম নয়, বরং এমন নীতি, যা আল্লাহ বহু আগে দেওয়া কিতাবগুলো থেকে সত্যায়িত করছেন। আয়াতগুলো এমন এক ব্যক্তির জবাব, যে এমন আচরণ করছিল যেন অন্য কেউ তার বোঝা বইতে পারবে; সে যে উত্তর পায় তা ওহীভিত্তিক দ্বীনের সমান পুরোনো এক বিধান। দায় হস্তান্তর করা যায় না, আর অন্যের শ্রম থেকে প্রতিদান উত্তরাধিকারসূত্রে পাওয়া যায় না। নবীদের মাঝে আর যা-ই বদলে থাকুক, সনদের এই ধারাটি বদলায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Only What You Strive For",
          "bn": "কেবল যার জন্য তুমি চেষ্টা করেছ"
        },
        "p": [
          {
            "en": "53:39 states the rule with Arabic's tightest restriction: laysa lil-insani illa ma sa'a — there is not, for man, except what he strove for. Sa'a is a verb of effort, of laboring and pressing forward, and its verbal noun sa'y also names the walking between Safa and Marwah in the pilgrimage. Notice what the verse attaches ownership to: not to what a person achieved, gained, or was credited with, but to the striving itself. Outcomes pass through many hands; the effort alone is unambiguously yours.",
            "bn": "53:39 আয়াত নিয়মটি ঘোষণা করে আরবির সবচেয়ে আঁটসাঁট সীমাবদ্ধকরণে: লাইসা লিল-ইনসানি ইল্লা মা সা'আ — মানুষের জন্য তা ছাড়া কিছু নেই, যার জন্য সে চেষ্টা করেছে। সা'আ প্রচেষ্টার ক্রিয়াপদ — খাটা ও সামনে এগিয়ে যাওয়ার; আর তার ক্রিয়াবিশেষ্য সা'ঈ দিয়েই হজে সাফা ও মারওয়ার মাঝের চলাকে ডাকা হয়। লক্ষ করুন, আয়াতটি মালিকানা কীসের সঙ্গে জুড়ে দেয়: মানুষ যা অর্জন করল, পেল বা যার কৃতিত্ব পেল তার সঙ্গে নয় — খোদ চেষ্টাটির সঙ্গে। ফলাফল বহু হাত ঘুরে আসে; একমাত্র প্রচেষ্টাই দ্ব্যর্থহীনভাবে তোমার।"
          },
          {
            "en": "The mufassirun draw out the negative and positive sides together. Negatively, no one enters the account of that Day carrying credit generated by another's work while he himself slept — lineage, association, and wishful attachment purchase nothing. 2:281 warns of a Day when every soul is paid in full what it earned. Positively, nothing sincerely worked for is lost in transit: however small, however private, the striving is registered to its owner and to no one else.",
            "bn": "মুফাসসিরগণ নেতিবাচক ও ইতিবাচক দুটি দিকই একসঙ্গে টেনে আনেন। নেতিবাচক দিক: সেদিনের হিসাবে কেউ এমন পুঁজি নিয়ে ঢোকে না, যা তৈরি করেছে অন্যের শ্রম যখন সে নিজে ঘুমিয়েছিল — বংশ, সম্পর্ক আর আশাবাদী আঁকড়ে ধরা কিছুই কিনতে পারে না। 2:281 আয়াত সতর্ক করে এমন এক দিনের ব্যাপারে, যেদিন প্রতিটি প্রাণকে তার অর্জন পূর্ণমাত্রায় বুঝিয়ে দেওয়া হবে। ইতিবাচক দিক: আন্তরিকভাবে খাটা কোনো কিছু পথে হারায় না — যত ছোটই হোক, যত গোপনই হোক, চেষ্টাটি নিবন্ধিত হয় তার মালিকের নামে, আর কারও নামে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Then Paid in Full",
          "bn": "দেখা হবে, তারপর পূর্ণ প্রতিদান"
        },
        "p": [
          {
            "en": "53:40 promises that his striving will be seen — sawfa yura, a passive verb: the effort itself will be brought into view. 53:41 completes it: then he will be recompensed for it with the fullest recompense, al-jaza' al-awfa, where awfa is a superlative — not adequate payment but the most complete payment possible. The sequence is deliberate: first disclosure, then settlement. 99:7-8 gives the fine grain of the scales — whoever does an atom's weight of good will see it, and an atom's weight of evil will see it.",
            "bn": "53:40 আয়াত প্রতিশ্রুতি দেয়, তার চেষ্টা দেখা হবে — সাওফা ইউরা, কর্মবাচ্য ক্রিয়াপদ: প্রচেষ্টাটিকেই দৃষ্টির সামনে আনা হবে। 53:41 আয়াত তা সম্পূর্ণ করে: তারপর তাকে এর প্রতিদান দেওয়া হবে পূর্ণতম প্রতিদানে — আল-জাযাউল আওফা, যেখানে আওফা একটি অতিশয়ার্থক রূপ: যথেষ্ট পাওনা নয়, সম্ভাব্য সবচেয়ে পূর্ণ পাওনা। ধারাক্রমটি ইচ্ছাকৃত: আগে প্রকাশ, তারপর নিষ্পত্তি। 99:7-8 আয়াত দাঁড়িপাল্লার সূক্ষ্মতম এককটি দেয় — যে অণু পরিমাণ ভালো করবে সে তা দেখবে, আর যে অণু পরিমাণ মন্দ করবে সেও তা দেখবে।"
          },
          {
            "en": "For anyone whose best work goes unnoticed, this is the passage to stand on. The parent's unthanked years, the honesty that cost a promotion, the charity no ledger records — sawfa yura, it will be seen. And 76:22 addresses the people of the Garden with a sentence worth a lifetime: indeed this is a reward for you, and your striving has been appreciated. In both of the places the word mashkur, appreciated, occurs in the Quran — there and in 17:19 — it describes sa'y: Allah answers strivers with thanks.",
            "bn": "যার সেরা কাজগুলো কারও চোখে পড়ে না, তার দাঁড়ানোর জায়গা এই অংশটিই। মা-বাবার ধন্যবাদহীন বছরগুলো, যে সততার দাম গেছে পদোন্নতি, যে দান কোনো খাতায় ওঠেনি — সাওফা ইউরা, তা দেখা হবে। আর 76:22 আয়াত জান্নাতবাসীদের সম্বোধন করে এমন এক বাক্যে, যা এক জীবনের সমান দামি: নিশ্চয়ই এ তোমাদের প্রতিদান, আর তোমাদের প্রচেষ্টা সাদরে স্বীকৃত হয়েছে। কুরআনে মাশকূর — সাদরে স্বীকৃত — শব্দটি যে দুটি জায়গায় আছে — সেখানে এবং 17:19 আয়াতে — দুটিতেই তা বর্ণনা করছে সা'ঈকে: আল্লাহ চেষ্টাকারীদের জবাব দেন কৃতজ্ঞতা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Striving With Conditions",
          "bn": "শর্তসাপেক্ষ প্রচেষ্টা"
        },
        "p": [
          {
            "en": "17:19 spells out when striving is received with thanks: whoever desires the Hereafter, and strives for it the striving it deserves, and is a believer — the verse lays down intention, effort, and faith together. Effort alone is not the whole account; direction and belief give it its weight. 92:4 adds the observation that frames every biography: indeed your striving is diverse. All human beings expend effort; what separates lives is not whether they strive, but toward what.",
            "bn": "17:19 আয়াত খুলে বলে, কখন প্রচেষ্টা কৃতজ্ঞতার সঙ্গে গৃহীত হয়: যে আখিরাত চায়, এবং তার জন্য তার প্রাপ্য চেষ্টাটুকু করে, এবং মুমিন হয় — আয়াতটি নিয়ত, প্রচেষ্টা ও ঈমান তিনটিকে একসঙ্গে স্থাপন করে। কেবল প্রচেষ্টাই পুরো হিসাব নয়; অভিমুখ ও বিশ্বাসই তাকে ওজন দেয়। 92:4 আয়াত যোগ করে সেই পর্যবেক্ষণ, যা প্রতিটি জীবনীর কাঠামো: নিশ্চয়ই তোমাদের প্রচেষ্টা বিচিত্র। সব মানুষই পরিশ্রম ঢালে; জীবনগুলোকে আলাদা করে দেয় তারা চেষ্টা করে কি না তা নয় — কীসের দিকে করে, সেটিই।"
          },
          {
            "en": "The scholars discussed one debated edge of the rule. Ibn Kathir records that from 53:39 ash-Shafi'i concluded that the reward of reciting Quran does not reach the dead, since it was not of their doing, while other scholars allowed such gifts. He also relates what does continue: Muslim reports from Abu Hurairah (RA) that when a person dies, his works end except three — ongoing charity, knowledge that benefits, and a righteous child who prays for him. All three are fruits the person himself planted.",
            "bn": "আলিমগণ নিয়মটির একটি বিতর্কিত প্রান্ত নিয়ে আলোচনা করেছেন। ইবনে কাসীর লিপিবদ্ধ করেন, 53:39 আয়াত থেকে আশ-শাফি'ঈ সিদ্ধান্ত টানেন যে কুরআন তিলাওয়াতের সওয়াব মৃতের কাছে পৌঁছায় না, কারণ তা তার নিজের কাজ ছিল না; অন্য আলিমগণ অবশ্য এমন উপহারের অনুমতি দিয়েছেন। তিনি এ-ও বর্ণনা করেন, কোনটি চালু থাকে: মুসলিম আবু হুরাইরা (রাঃ) থেকে রিওয়ায়াত করেন — মানুষ মারা গেলে তার আমল বন্ধ হয়ে যায়, তিনটি ছাড়া: চলমান সদকা, উপকারে আসা জ্ঞান, আর তার জন্য দু'আকারী সৎ সন্তান। তিনটিই সেই ফল, যার চারা মানুষটি নিজেই পুঁতেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "To Your Lord Is the End",
          "bn": "তোমার রবের কাছেই সমাপ্তি"
        },
        "p": [
          {
            "en": "53:42 seals the passage: and that to your Lord is the finality — al-muntaha, the end point at which everything terminates. Courses of effort, chains of cause, journeys of every soul: all of them run out at Him. The mufassirun read it both as destiny — the return and the judgement are to Him — and as a closure of appeal: there is nothing beyond Him to aspire to or to fear. The One who sees the striving and pays the fullest wage is also, Himself, the destination.",
            "bn": "53:42 আয়াত অংশটিতে মোহর দেয়: আর তোমার রবের কাছেই চূড়ান্ত সমাপ্তি — আল-মুনতাহা, সেই শেষবিন্দু যেখানে সবকিছু গিয়ে থামে। প্রচেষ্টার ধারা, কার্যকারণের শৃঙ্খল, প্রতিটি প্রাণের সফর — সবই তাঁর কাছে গিয়ে ফুরায়। মুফাসসিরগণ একে পড়েন নিয়তি হিসেবেও — প্রত্যাবর্তন ও বিচার তাঁরই কাছে — আবার আবেদনের দরজা বন্ধ হওয়া হিসেবেও: তাঁর ওপারে আকাঙ্ক্ষা করার বা ভয় করার কিছু নেই। যিনি চেষ্টা দেখেন এবং পূর্ণতম মজুরি দেন, তিনি নিজেই গন্তব্যও।"
          }
        ]
      },
      {
        "h": {
          "en": "Working for the One Who Sees",
          "bn": "যিনি দেখেন তাঁর জন্য কাজ"
        },
        "p": [
          {
            "en": "Practically, the passage relocates a worker's attention from outcomes to effort, and from audience to Allah. Outcomes are shared and uncertain; effort is owned, and certain to be seen. That single shift answers the two diseases of work: despair when results fail, and performing for eyes when results succeed. A person who believes sawfa yura has an Audience whether or not anyone is watching, and a full wage whether or not anyone pays.",
            "bn": "ব্যবহারিকভাবে এই অংশটি কর্মীর মনোযোগ সরিয়ে আনে ফলাফল থেকে প্রচেষ্টায়, আর দর্শক থেকে আল্লাহয়। ফলাফল ভাগাভাগির জিনিস ও অনিশ্চিত; প্রচেষ্টা নিজের, এবং তা দেখা হবেই — নিশ্চিত। এই একটিমাত্র স্থানান্তর কাজের দুই ব্যাধিরই জবাব: ফল না এলে হতাশা, আর ফল এলে চোখের সামনে অভিনয়। যে বিশ্বাস করে সাওফা ইউরা, কেউ দেখুক বা না দেখুক তার একজন দর্শক আছেন, আর কেউ দাম দিক বা না দিক তার পূর্ণ মজুরি আছে।"
          },
          {
            "en": "It also ends excuse-making by proxy. No one's piety can be borrowed and no one's burden outsourced — not a family's reputation, a shaykh's standing, or a community's history. The question the passage leaves each reader is singular and freeing: what is my sa'y, and toward what is it pointed? Answer it while the striving is still being written, because it will surely be seen, paid in full, and traced — like everything — to your Lord at the end.",
            "bn": "এটি অন্যের ঘাড়ে ভর দেওয়া অজুহাতেরও সমাপ্তি টানে। কারও তাকওয়া ধার করা যায় না, কারও কাঁধে নিজের বোঝা চালান করা যায় না — পরিবারের সুনামেও না, কোনো শাইখের মর্যাদায়ও না, কোনো সম্প্রদায়ের ইতিহাসেও না। অংশটি প্রতিটি পাঠকের জন্য যে প্রশ্ন রেখে যায় তা একবচন এবং মুক্তিদায়ক: আমার সা'ঈ কী, আর তা কোন দিকে তাক করা? উত্তরটি দাও যতক্ষণ চেষ্টাটি এখনো লেখা হচ্ছে — কারণ তা অবশ্যই দেখা হবে, পূর্ণ প্রতিদান পাবে, এবং — সবকিছুর মতোই — শেষ প্রান্তে গিয়ে পৌঁছাবে তোমার রবের কাছে।"
          }
        ]
      }
    ]
  },
  "53:45": {
    "sections": [
      {
        "h": {
          "en": "Another That in the List",
          "bn": "তালিকার আরেকটি 'এই যে'"
        },
        "p": [
          {
            "en": "From 53:36 Surah an-Najm asks whether a man who turned away was never told what is in the scrolls of Musa (AS) and of Ibrahim (AS), who fulfilled. Then comes a string of clauses, each opening with an or anna, that: that no bearer of burdens bears another's burden, that a person has only what he strove for, that to your Lord is the final end. The verse studied here is one more link in that chain. It opens wa-annahu, and that He, and goes on: khalaqa az-zawjayni adh-dhakara wa-l-untha.",
            "bn": "৫৩:৩৬ থেকে সূরা আন-নাজম প্রশ্ন তোলে: যে লোক মুখ ফিরিয়ে নিয়েছে, তাকে কি জানানো হয়নি মূসা (আঃ)-এর সহীফায় কী আছে, আর ইবরাহীম (আঃ)-এর সহীফায়, যিনি পুরোপুরি পালন করেছিলেন? এরপর আসে একের পর এক বাক্য, প্রতিটির শুরু আন বা আন্না দিয়ে, অর্থাৎ 'এই যে'। এই যে, কোনো বোঝা বহনকারী অন্যের বোঝা বহন করবে না। এই যে, মানুষ পায় শুধু তা-ই, যার জন্য সে চেষ্টা করে। এই যে, শেষ গন্তব্য তোমার রবের কাছে। এখানে যে আয়াত নিয়ে আলোচনা, সেটিও এই শিকলের একটি কড়া। শুরু ওয়া-আন্নাহু দিয়ে, আর এই যে তিনি। তারপর: খালাকায যাওজাইনিয যাকারা ওয়াল উনসা।"
          },
          {
            "en": "Immediately before it stand two verses about the very edges of a human life: that it is He who makes laugh and makes weep, and that it is He who causes death and gives life. Immediately after it, 53:46 names the drop from which the pair comes, and 53:47 says the other creation is upon Him. Those neighbours have their own entries. This entry keeps to five Arabic words: and that He created the two mates, the male and the female. The sources fetched for it are brief, and the article stays inside what they say.",
            "bn": "ঠিক আগে দুটি আয়াত মানুষের জীবনের দুই প্রান্ত নিয়ে: তিনিই হাসান ও কাঁদান, আর তিনিই মারেন ও বাঁচান। ঠিক পরে ৫৩:৪৬ সেই ফোঁটার কথা বলে, যা থেকে জোড়া আসে। ৫৩:৪৭ বলে, পরবর্তী সৃষ্টির দায়িত্ব তাঁরই। এই প্রতিবেশী আয়াতগুলোর আলাদা আলোচনা আছে। এখানে কথা শুধু পাঁচটি আরবি শব্দ নিয়ে: আর এই যে, তিনিই সৃষ্টি করেছেন জোড়া দুটি, পুরুষ ও নারী। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, সেগুলো সংক্ষিপ্ত। এ লেখা তাদের কথার বাইরে যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dual, Then Its Names",
          "bn": "দ্বিবচন, তারপর দুই নাম"
        },
        "p": [
          {
            "en": "Az-zawjayn is a dual: the two zawj, the two mates or counterparts. The verse does not leave the dual abstract. It names the two at once, adh-dhakar, the male, and al-untha, the female. As-Sa'di puts it in exactly those terms: He explained az-zawjayn by His words the male and the female. Then he adds a remark about the reach of the words: this is an ism jins, a noun naming a whole kind, that takes in all living creatures, those that speak and the dumb animals alike, and Allah alone creates them.",
            "bn": "আয-যাওজাইন শব্দটি দ্বিবচন: দুটি যাওজ, অর্থাৎ পরস্পরের দুই জোড়া। আয়াত দ্বিবচনটাকে অস্পষ্ট রেখে দেয়নি, সঙ্গে সঙ্গেই দুজনের নাম বলে দিয়েছে: আয-যাকার, পুরুষ, আর আল-উনসা, নারী। সা'দী ঠিক এ কথাই বলেন: আয-যাওজাইনের ব্যাখ্যা আল্লাহ নিজেই দিয়েছেন পুরুষ ও নারী বলে। এরপর তিনি শব্দের পরিধি নিয়ে একটা মন্তব্য যোগ করেন। এটি ইসমে জিনস, এমন বিশেষ্য যা পুরো একটা জাতকে বোঝায়। কথা বলে এমন প্রাণী আর বোবা পশু, সবাই এর আওতায়। আর এদের সৃষ্টিতে আল্লাহ একক।"
          },
          {
            "en": "The verb is khalaqa, He created, and at-Tabari reads it as origination: ibtada'a insha'a az-zawjayn, He originated the bringing into being of the two mates, and made them two mates. The full phrase az-zawjayni adh-dhakara wa-l-untha occurs in exactly two places in the Qur'an: here, and in 75:39, where the verb is ja'ala, He made, and the line comes at the end of a short account of a human beginning. Ibn Kathir sets those two passages side by side, as a later section shows.",
            "bn": "ক্রিয়াটি খালাকা, তিনি সৃষ্টি করেছেন। তাবারী একে পড়েন প্রথম সূচনা হিসেবে: ইবতাদাআ ইনশাআয যাওজাইন, অর্থাৎ জোড়া দুটিকে অস্তিত্বে আনার সূচনা তিনিই করেছেন, আর তাদের বানিয়েছেন পরস্পরের জোড়া। আয-যাওজাইনিয যাকারা ওয়াল উনসা, পুরো এই বাক্যাংশ কুরআনে ঠিক দুই জায়গায় আছে। একটি এখানে, অন্যটি ৭৫:৩৯ আয়াতে। সেখানে ক্রিয়াটি জাআলা, তিনি বানিয়েছেন, আর বাক্যটি এসেছে মানুষের সূচনার এক সংক্ষিপ্ত বর্ণনার শেষে। ইবন কাসীর এ দুই অংশকে পাশাপাশি রেখেছেন। পরের এক অংশে সে কথা আসবে।"
          },
          {
            "en": "One more small feature of the wording can be seen by setting it beside its neighbours. In 53:43, 53:44, 53:48 and 53:49 the clause reads wa-annahu huwa, and that it is He, with the added pronoun huwa. In 53:45 there is no huwa: simply wa-annahu khalaqa, and that He created. None of the commentators fetched for this verse remarks on the difference, so this article notes it as something visible in the text and offers no explanation for it.",
            "bn": "প্রতিবেশী আয়াতের পাশে রাখলে শব্দগঠনের আরও একটা ছোট বৈশিষ্ট্য চোখে পড়ে। ৫৩:৪৩, ৫৩:৪৪, ৫৩:৪৮ ও ৫৩:৪৯ আয়াতে বাক্যটি ওয়া-আন্নাহু হুয়া, আর এই যে তিনিই। সেখানে বাড়তি সর্বনাম হুয়া আছে। ৫৩:৪৫ আয়াতে হুয়া নেই, আছে শুধু ওয়া-আন্নাহু খালাকা, আর এই যে তিনি সৃষ্টি করেছেন। এ আয়াতের জন্য আনা কোনো তাফসীরকার এই পার্থক্য নিয়ে কিছু বলেননি। তাই এ লেখা বিষয়টা শুধু পাঠে যা দেখা যায় সেভাবেই উল্লেখ করছে, এর কোনো ব্যাখ্যা দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Each the Other's Zawj",
          "bn": "দুজনেই দুজনের যাওজ"
        },
        "p": [
          {
            "en": "At-Tabari's short comment spends most of its words on one point: why the two are called zawjayn at all. His answer is that the male is the zawj of the female, and the female is his zawj, so they are two zawj, each one of them a zawj to the other. The word, on this reading, does not name either of them by itself. It names a relation that runs both ways, and neither side of it is the mate without the other side being the mate too.",
            "bn": "তাবারীর সংক্ষিপ্ত ব্যাখ্যার বেশির ভাগ কথা একটা বিষয় নিয়ে: দুজনকে যাওজাইন বলা হলো কেন। তাঁর জবাব: পুরুষ নারীর যাওজ, আর নারী পুরুষের যাওজ। তাই তারা দুই যাওজ, প্রত্যেকে অন্যজনের যাওজ। এ পাঠ অনুযায়ী শব্দটা দুজনের কাউকে আলাদা করে বোঝায় না। বোঝায় এমন এক সম্পর্ক, যা দুই দিকেই চলে। একজন জোড়া হলে অন্যজনও জোড়া, একজনকে বাদ দিয়ে অন্যজন জোড়া হয় না।"
          },
          {
            "en": "That is all at-Tabari says, and it is worth not saying more on his behalf. He does not draw rules from it here or build a discussion on it. What he does is make the dual readable: two, and yet named only through each other. For a reader who knows the verse mainly from translation, his gloss is a reminder that the English word mates carries the reciprocity of the Arabic, and that the verse speaks of both members of the pair in a single breath, under a single verb.",
            "bn": "তাবারী এটুকুই বলেন, আর তাঁর নামে এর বেশি কিছু বলা ঠিক হবে না। এখান থেকে তিনি কোনো বিধান বের করেননি, কোনো আলোচনাও দাঁড় করাননি। তিনি শুধু দ্বিবচনটাকে বোঝার মতো করে দিয়েছেন: সংখ্যায় দুই, অথচ প্রত্যেকের পরিচয় অন্যজনের মাধ্যমে। যিনি আয়াতটি মূলত অনুবাদে পড়েন, তাঁর জন্য এ ব্যাখ্যা একটা কথা মনে করিয়ে দেয়। জোড়া শব্দে আরবির সেই পারস্পরিকতা ধরা আছে। আর আয়াত দুজনের কথাই বলেছে এক নিঃশ্বাসে, একটিমাত্র ক্রিয়ার অধীনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Human Pairs or Every Creature",
          "bn": "শুধু মানুষ, নাকি সব প্রাণী"
        },
        "p": [
          {
            "en": "Here the commentators fetched for this verse genuinely part ways, on a question the five words leave open: whose male and female are meant? Al-Qurtubi answers narrowly. He glosses the verse as meaning of the children of Adam, and adds that Allah did not mean by it that Adam (AS) and Hawwa were created from a drop. His reading looks ahead to the next verse, min nutfatin, from a drop, and limits the pair to those who come into being that way: the descendants of Adam.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরকারেরা এখানে সত্যিই দুই পথে গেছেন। প্রশ্নটা পাঁচ শব্দের আয়াত খোলা রেখেছে: কাদের পুরুষ আর কাদের নারী? কুরতুবীর জবাব সীমিত। তাঁর ব্যাখ্যায় আয়াতের অর্থ আদম সন্তানদের মধ্য থেকে। সঙ্গে তিনি যোগ করেন, এ কথায় আল্লাহ বোঝাননি যে আদম (আঃ) ও হাওয়া ফোঁটা থেকে সৃষ্ট হয়েছেন। তাঁর পাঠ পরের আয়াতের দিকে তাকায়, মিন নুতফাতিন, এক ফোঁটা থেকে। তাই তিনি জোড়াকে সীমিত রাখেন তাদের মধ্যে, যারা এভাবে অস্তিত্বে আসে: আদমের বংশধর।"
          },
          {
            "en": "Three others read the words more widely. As-Sa'di, as already quoted, calls male and female a noun of kind covering all living creatures, the speaking and the dumb. Al-Baghawi adds just three words after the verse: min kulli hayawan, of every living creature. Al-Muyassar says the male and the female of human beings and of animals, from a drop poured into the womb. On their reading the pair the verse has in view is wider than humankind, and the human pair is one case of it.",
            "bn": "আরও তিনজন শব্দগুলো পড়েন আরও ব্যাপকভাবে। আগেই যেমন উদ্ধৃত হয়েছে, সা'দী পুরুষ ও নারীকে বলেন জাতবাচক বিশেষ্য, যার আওতায় সব প্রাণী, কথা বলা আর বোবা দুই-ই। বাগাভী আয়াতের পরে মাত্র তিনটি শব্দ যোগ করেন: মিন কুল্লি হায়াওয়ান, প্রত্যেক প্রাণী থেকে। মুয়াসসার বলে, মানুষ ও পশুর পুরুষ ও নারী, এক ফোঁটা থেকে, যা জরায়ুতে ঢালা হয়। তাঁদের পাঠে আয়াতের জোড়া মানবজাতির চেয়ে বড় পরিসরের, আর মানুষের জোড়া তারই একটি দৃষ্টান্ত।"
          },
          {
            "en": "At-Tabari and Ibn Kathir do not take up the question directly. At-Tabari speaks of the male and the female without naming a kind, and Ibn Kathir's parallel from Surah al-Qiyamah is about the human being in particular. The difference between al-Qurtubi and the reading shared by as-Sa'di, al-Baghawi and al-Muyassar is real, and this article leaves it standing as they left it. Both readings agree on the point the verse is making: whatever the scope, it is Allah who created the pair.",
            "bn": "তাবারী ও ইবন কাসীর প্রশ্নটা সরাসরি তোলেননি। তাবারী পুরুষ ও নারীর কথা বলেন, কোনো জাতের নাম নেন না। আর সূরা আল-কিয়ামাহ থেকে ইবন কাসীর যে সমান্তরাল আয়াত আনেন, সেটা বিশেষভাবে মানুষকে নিয়ে। এক দিকে কুরতুবী, অন্য দিকে সা'দী, বাগাভী ও মুয়াসসার, এ মতভেদ সত্যিকারের। তাঁরা যেভাবে রেখে গেছেন, এ লেখাও সেভাবেই রাখছে। তবে আয়াতের মূল কথায় দুই পাঠই একমত: পরিসর যতটুকুই হোক, জোড়াকে সৃষ্টি করেছেন আল্লাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Read With the Next Line",
          "bn": "পরের লাইনের সঙ্গে মিলিয়ে পড়া"
        },
        "p": [
          {
            "en": "Several of the sources treat 53:45 and 53:46 as one sentence. At-Tabari opens his comment by quoting both together: and that He created the two mates, the male and the female, from a drop when it is emitted. Ibn Kathir quotes them as a unit too, in the Arabic and in the abridged English, and al-Muyassar's single sentence covers both verses. On this grouping the phrase min nutfatin idha tumna, from a drop when it is emitted, completes the thought begun with khalaqa: He created the pair, from a drop.",
            "bn": "কয়েকটি সূত্র ৫৩:৪৫ ও ৫৩:৪৬ আয়াতকে একটি বাক্য হিসেবে পড়ে। তাবারী তাঁর ব্যাখ্যা শুরুই করেন দুটো একসঙ্গে উদ্ধৃত করে: আর এই যে, তিনিই সৃষ্টি করেছেন জোড়া দুটি, পুরুষ ও নারী, এক ফোঁটা থেকে, যখন তা নিক্ষিপ্ত হয়। ইবন কাসীরও দুটোকে একসঙ্গে উদ্ধৃত করেন, আরবিতে এবং সংক্ষিপ্ত ইংরেজি সংস্করণেও। আর মুয়াসসারের একটিমাত্র বাক্যে দুই আয়াতই এসে গেছে। এই পাঠে মিন নুতফাতিন ইযা তুমনা, এক ফোঁটা থেকে, যখন তা নিক্ষিপ্ত হয়, খালাকা দিয়ে শুরু হওয়া কথাটাকে পূর্ণ করে। অর্থাৎ তিনি জোড়া সৃষ্টি করেছেন এক ফোঁটা থেকে।"
          },
          {
            "en": "That grouping is also what gives al-Qurtubi's narrower reading its footing, since his exclusion of Adam (AS) and Hawwa depends on the drop. Beyond that, the drop belongs to its own verse and its own entry. The sources fetched here say almost nothing about it: al-Muyassar's phrase, a drop poured into the womb, is the whole of their description. This article adds nothing to it, whether from older natural lore or from modern science, because none of the commentators read for this verse goes there.",
            "bn": "কুরতুবীর সীমিত পাঠের ভিত্তিও এই একসঙ্গে পড়া। কারণ আদম (আঃ) ও হাওয়াকে তিনি যে বাদ রাখেন, তা ফোঁটার কথার উপরেই দাঁড়িয়ে। এর বাইরে ফোঁটার আলোচনা তার নিজের আয়াতের, তার নিজের লেখার। এখানে আনা সূত্রগুলো এ নিয়ে প্রায় কিছুই বলে না। মুয়াসসারের কথাটুকু, জরায়ুতে ঢালা এক ফোঁটা, এই হলো তাদের পুরো বর্ণনা। পুরোনো প্রকৃতিবিদ্যা থেকে হোক বা আধুনিক বিজ্ঞান থেকে, এ লেখা এর সঙ্গে কিছুই যোগ করছে না। কারণ এ আয়াতের জন্য পড়া কোনো তাফসীরকার সেদিকে যাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Kathir's Parallel in al-Qiyamah",
          "bn": "আল-কিয়ামাহয় ইবন কাসীরের সমান্তরাল"
        },
        "p": [
          {
            "en": "Ibn Kathir's whole comment on the verse is a single comparison: it is like His saying, and then he quotes 75:36 to 75:40. Does man think he will be left neglected? Was he not a drop of semen emitted? Then he was an 'alaqah, and He created and proportioned, and made of him the two mates, the male and the female. Is not That One able to give life to the dead? The fourth line of that passage is the twin of this verse, the one other place where the same phrase stands.",
            "bn": "এ আয়াতে ইবন কাসীরের পুরো ব্যাখ্যা একটিমাত্র তুলনা: এটা আল্লাহর এই কথার মতো। তারপর তিনি উদ্ধৃত করেন ৭৫:৩৬ থেকে ৭৫:৪০। মানুষ কি ভাবে, তাকে এমনি ছেড়ে দেওয়া হবে? সে কি ছিল না নিক্ষিপ্ত বীর্যের এক ফোঁটা? তারপর সে হলো আলাকাহ, অতঃপর তিনি সৃষ্টি করলেন ও সুঠাম করলেন। তারপর তা থেকে বানালেন জোড়া দুটি, পুরুষ ও নারী। তবু কি তিনি মৃতকে জীবিত করতে সক্ষম নন? ওই অংশের চতুর্থ আয়াতটি এ আয়াতের যমজ, একই বাক্যাংশ আছে এমন একমাত্র অন্য জায়গা।"
          },
          {
            "en": "What the comparison shows is where that passage takes the pair. In al-Qiyamah the making of male and female is not the end of the argument; it is the step just before the question about raising the dead. Ibn Kathir does not spell out the lesson in his comment here. He lets the quotation do it. In Surah an-Najm the sequence runs the same way: one verse after the drop, 53:47 says that the other creation is upon Him. That verse has its own entry and is only pointed to here.",
            "bn": "তুলনাটা দেখায়, ওই অংশ জোড়ার কথাকে কোথায় নিয়ে যায়। আল-কিয়ামাহয় পুরুষ ও নারী বানানোর কথাতেই যুক্তি শেষ হয়নি। এটা মৃতকে জীবিত করার প্রশ্নের ঠিক আগের ধাপ। ইবন কাসীর এখানে শিক্ষাটা নিজের ভাষায় খুলে বলেননি, উদ্ধৃতিকেই সে কাজ করতে দিয়েছেন। সূরা আন-নাজমেও ক্রম একই দিকে যায়। ফোঁটার আয়াতের পরেই ৫৩:৪৭ বলে, পরবর্তী সৃষ্টির দায়িত্ব তাঁরই। সে আয়াতের আলাদা আলোচনা আছে, এখানে শুধু তার দিকে ইঙ্গিত করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Narrated on This Verse",
          "bn": "এখানে কোনো বর্ণনা যুক্ত নেই"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, sound or otherwise, so this article quotes none. Ibn Kathir's abridged English does relate a report from Mu'adh ibn Jabal in the same passage, but it is given on 53:42, about the return to Allah, and not on this verse. No occasion of revelation is reported for 53:45 in these sources either. Ma'arif al-Qur'an, whose comment covers this verse within a group, in fact speaks only about laughter and weeping in 53:43.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীরে এর সঙ্গে কোনো হাদীস যুক্ত নেই, সহীহ হোক বা অন্য কিছু। তাই এ লেখা কোনো হাদীস উদ্ধৃত করছে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে একই অংশে মুআয ইবন জাবাল (রাঃ)-এর একটি বর্ণনা আছে বটে। তবে সেটা ৫৩:৪২ আয়াতের আলোচনায়, আল্লাহর কাছে ফিরে যাওয়া নিয়ে, এ আয়াত নিয়ে নয়। এসব সূত্রে ৫৩:৪৫ আয়াতের কোনো শানে নুযূলও বর্ণিত হয়নি। মাআরিফুল কুরআনের ব্যাখ্যা একটি গুচ্ছের ভেতরে এ আয়াতকেও ধরে, কিন্তু আসলে কথা বলে শুধু ৫৩:৪৩ আয়াতের হাসি-কান্না নিয়ে।"
          },
          {
            "en": "That leaves a short verse with short commentary, and the honest course is to let it stay short. The sources give a gloss on the dual, a reciprocal reading of zawj, a disagreement over scope, a grouping with the drop, and one parallel that ends on the raising of the dead. They do not use this verse to rank one of the pair over the other or to settle questions it does not raise, and this article does not either. What remains is the verse's own claim, and what a reader does with it.",
            "bn": "রইল এক ছোট আয়াত আর তার ছোট ব্যাখ্যা। সততার দাবি, একে ছোটই থাকতে দেওয়া। সূত্রগুলো যা দেয়: দ্বিবচনের একটা ব্যাখ্যা, যাওজ শব্দের পারস্পরিক অর্থ, পরিসর নিয়ে একটা মতভেদ, ফোঁটার আয়াতের সঙ্গে একসঙ্গে পড়া, আর এমন এক সমান্তরাল আয়াত যা শেষ হয় মৃতকে জীবিত করার কথায়। জোড়ার একজনকে অন্যজনের উপরে স্থান দিতে তারা এ আয়াত ব্যবহার করেনি। আয়াত যে প্রশ্ন তোলেনি, তার মীমাংসাও এখানে খোঁজেনি। এ লেখাও তা করছে না। বাকি থাকে আয়াতের নিজের দাবি, আর পাঠক তা নিয়ে কী করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Receiving What You Did Not Make",
          "bn": "যা নিজে বানাননি, তা গ্রহণ করা"
        },
        "p": [
          {
            "en": "The list this verse belongs to is a list of things no human being does for themselves. Nobody commands their own laughter and tears at will, and nobody sets the hour of their own death. In the same way nobody created themselves, and nobody created the person beside them. As-Sa'di's phrase is that Allah alone creates them. Read slowly, the verse moves a reader from the habit of taking their own existence for granted to the recognition that it was given.",
            "bn": "এ আয়াত যে তালিকার অংশ, তার প্রতিটি কাজ এমন, যা কোনো মানুষ নিজের জন্য করে না। ইচ্ছা করলেই কেউ নিজের হাসি-কান্নার হুকুম দিতে পারে না। নিজের মৃত্যুর সময়ও কেউ ঠিক করে না। ঠিক তেমনি কেউ নিজেকে সৃষ্টি করেনি, পাশের মানুষটাকেও না। সা'দীর ভাষায়, এদের সৃষ্টিতে আল্লাহ একক। ধীরে পড়লে আয়াতটি পাঠককে এক অভ্যাস থেকে সরিয়ে আনে। নিজের অস্তিত্বকে আমরা ধরে নিই এমনিই পাওয়া। আয়াত মনে করিয়ে দেয়, এটা দান।"
          },
          {
            "en": "At-Tabari's gloss offers a second thing to carry. Each of the pair is the zawj of the other: the word itself refuses to describe either one alone. Whatever a person's place in a family or a community, the verse names male and female together, under one verb whose subject is Allah. A reader can take from that a simple discipline: to look at every man and every woman they meet first as the work of the same Creator, before any other way of measuring them begins.",
            "bn": "তাবারীর ব্যাখ্যা দ্বিতীয় আরেকটা জিনিস সঙ্গে নেওয়ার মতো করে দেয়। জোড়ার প্রত্যেকে অন্যজনের যাওজ। শব্দটাই কাউকে একা বোঝাতে রাজি নয়। পরিবারে বা সমাজে কার কী অবস্থান, তা যা-ই হোক, আয়াত পুরুষ ও নারীর নাম নিয়েছে একসঙ্গে, এমন এক ক্রিয়ার অধীনে যার কর্তা আল্লাহ। পাঠক এখান থেকে একটা সহজ অভ্যাস নিতে পারেন। দেখা হওয়া প্রত্যেক পুরুষ আর প্রত্যেক নারীকে অন্য কোনো মাপকাঠিতে মাপার আগে প্রথমে দেখা, একই স্রষ্টার সৃষ্টি হিসেবে।"
          },
          {
            "en": "And there is the direction the verse faces. Ibn Kathir's parallel ends with a question about the dead, and the surah moves within two verses to the other creation. Remembering how a life began is not only an exercise in gratitude. He who made the pair is He who will raise it, and a person who receives their own creation as a gift may be better prepared to meet the Giver. The verse asks for that recognition, nothing more elaborate, and nothing less.",
            "bn": "আর আছে আয়াতের মুখ কোন দিকে, সে কথা। ইবন কাসীরের সমান্তরাল আয়াত শেষ হয় মৃতদের নিয়ে এক প্রশ্নে, আর সূরাটি দুই আয়াতের মধ্যেই পৌঁছে যায় পরবর্তী সৃষ্টির কথায়। নিজের শুরুর কথা মনে করা তাই শুধু শোকরের অনুশীলন নয়। যিনি জোড়া বানিয়েছেন, তিনিই আবার তাকে জীবিত করবেন। নিজের সৃষ্টিকে যে দান হিসেবে গ্রহণ করে, দাতার সামনে দাঁড়ানোর জন্য সে হয়তো বেশি প্রস্তুত থাকে। আয়াত এই স্বীকৃতিটুকুই চায়। এর চেয়ে জটিল কিছু নয়, আবার এর চেয়ে কমও নয়।"
          }
        ]
      }
    ]
  },
  "53:56": {
    "sections": [
      {
        "h": {
          "en": "Five Words After the Ruins",
          "bn": "ধ্বংসস্তূপের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "Hadha nadhirun mina n-nudhuri l-ula: this is a warner of the warners of old. The verse is five Arabic words. A nadhir is someone who warns of a danger before it arrives; nudhur is its plural, and al-ula means the first, the earlier. The sentence comes straight after a roll call of the destroyed. Verses 53:50 to 53:54 name 'Ad, Thamud, the people of Nuh and the overturned towns, and 53:55 asks the listener which of the favours of his Lord he will dispute.",
            "bn": "হাযা নাযীরুম মিনান নুযুরিল ঊলা: এ পূর্বের সতর্ককারীদেরই একজন সতর্ককারী। আরবিতে আয়াতটি মাত্র পাঁচ শব্দের। নাযীর সেই ব্যক্তি, যে বিপদ আসার আগেই সাবধান করে দেয়। নুযুর তার বহুবচন, আর আল-ঊলা মানে প্রথম, আগের। বাক্যটি আসে ধ্বংসপ্রাপ্তদের এক তালিকার ঠিক পরে। ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতে আদ, সামূদ, নূহের জাতি আর উল্টে দেওয়া জনপদের নাম এসেছে। তারপর ৫৩:৫৫ আয়াত শ্রোতাকে জিজ্ঞেস করে, প্রতিপালকের কোন নিয়ামত নিয়ে সে বিতর্ক করবে।"
          },
          {
            "en": "That list is itself part of a longer passage. It opens at 53:36 and 53:37 with a question: has he not been told what is in the scrolls of Musa, and of Ibrahim (AS) who fulfilled his obligations? Al-Qurtubi reports from as-Suddi, from Abu Salih, that everything from that question down to this very verse is in the scrolls of Ibrahim and Musa. So the word hadha, this, stands at a seam. Behind it lies a long account of what earlier revelation said; ahead of it, in 53:57, the surah announces that the Approaching has approached.",
            "bn": "তালিকাটি নিজেও এক দীর্ঘ অংশের ভেতরে পড়ে। সে অংশ শুরু হয় ৫৩:৩৬ ও ৫৩:৩৭ আয়াতে এক প্রশ্ন দিয়ে: তাকে কি জানানো হয়নি মূসার সহীফায় কী আছে, আর সেই ইবরাহীমের (আঃ) সহীফায়, যিনি নিজের দায়িত্ব পূর্ণ করেছিলেন? কুরতুবী সুদ্দী থেকে, তিনি আবু সালিহ থেকে বর্ণনা করেন: সেই প্রশ্ন থেকে এই আয়াত পর্যন্ত সবটুকুই ইবরাহীম ও মূসার সহীফায় আছে। তাই হাযা, অর্থাৎ 'এ', শব্দটি দাঁড়িয়ে আছে এক সন্ধিস্থলে। এর পেছনে আগের ওহির দীর্ঘ বিবরণ। সামনে ৫৩:৫৭ আয়াতে সূরা ঘোষণা দেয়, আসন্ন মুহূর্ত কাছে এসে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pointing at a Person",
          "bn": "ইঙ্গিত এক ব্যক্তির দিকে"
        },
        "p": [
          {
            "en": "Who is meant by this? Most of the commentators fetched here answer: the Prophet ﷺ. Ibn Kathir says plainly that hadha nadhir means Muhammad ﷺ, and al-Baghawi says the same. The Muyassar glosses it as Muhammad ﷺ, a warner with the truth the prophets before him warned with. As-Sa'di names him in full, the Qurayshi, Hashimi messenger, Muhammad son of 'Abdullah. Al-Qurtubi reports this reading from Ibn Jurayj and Muhammad ibn Ka'b, and at-Tabari brings it with his chains from Qatadah and from Abu Ja'far, who said simply: he is Muhammad ﷺ.",
            "bn": "'এ' বলতে কাকে বোঝানো হয়েছে? এখানে যে তাফসীরগুলো দেখা হয়েছে, তার বেশির ভাগের জবাব: নবী ﷺ। ইবন কাসীর সোজাসুজি বলেন, হাযা নাযীর মানে মুহাম্মাদ ﷺ। বাগাভীও একই কথা বলেন। মুয়াসসারের ব্যাখ্যা: ইনি মুহাম্মাদ ﷺ, আগের নবীরা যে সত্য দিয়ে সতর্ক করেছিলেন, সেই সত্য দিয়েই তিনি সতর্ককারী। সা'দী পুরো পরিচয় দিয়ে নাম নেন: কুরাইশি, হাশিমি রাসূল, আবদুল্লাহর পুত্র মুহাম্মাদ। কুরতুবী এ ব্যাখ্যা বর্ণনা করেন ইবন জুরাইজ ও মুহাম্মাদ ইবন কা'ব থেকে। তাবারী নিজের সনদে আনেন কাতাদা আর আবু জা'ফর থেকে। আবু জা'ফর শুধু বলেছিলেন: তিনি মুহাম্মাদ ﷺ।"
          },
          {
            "en": "A second answer points not at the man but at the book he brought. Al-Qurtubi reports from Qatadah that the verse means the Qur'an: it is a warner with what the earlier scriptures warned of. Ma'arif al-Qur'an keeps both open, saying the demonstrative hadha points either to the Prophet ﷺ or to the Qur'an; on the second reading, he has come with a book of guidance that brings success in this world and the next to those who follow it. This article does not choose between the person and the book.",
            "bn": "দ্বিতীয় জবাব ইঙ্গিত করে মানুষটির দিকে নয়, তিনি যে কিতাব নিয়ে এসেছেন তার দিকে। কুরতুবী কাতাদা থেকে বর্ণনা করেন, আয়াতের উদ্দেশ্য কুরআন: আগের কিতাবগুলো যা নিয়ে সতর্ক করেছিল, কুরআনও তা নিয়েই সতর্ক করে। মাআরিফুল কুরআন দুটো পথই খোলা রাখে। তার মতে ইঙ্গিতবাচক শব্দ হাযা হয় নবী ﷺ-এর দিকে, নয়তো কুরআনের দিকে। দ্বিতীয় অর্থে কথাটা দাঁড়ায়: তিনি এমন এক হিদায়াতের কিতাব নিয়ে এসেছেন, যা মেনে চললে দুনিয়া ও আখিরাতে সাফল্য মেলে। মানুষ না কিতাব, এ লেখা তার কোনোটিকে বেছে নেয় না।"
          },
          {
            "en": "Notice one detail in the reports themselves. At-Tabari lists Qatadah among those who say the warner is the Prophet ﷺ: Muhammad ﷺ warned as the messengers before him warned. Al-Baghawi quotes Qatadah in the same words. Al-Qurtubi, however, attributes the Qur'an reading to Qatadah. The sources fetched here carry both reports under his name and do not reconcile them, so neither is set aside. The two readings are close in any case, since the Prophet ﷺ warned with the Qur'an and the Qur'an came through him.",
            "bn": "বর্ণনাগুলোর ভেতরেই একটা খুঁটিনাটি খেয়াল করার মতো। তাবারী কাতাদাকে রেখেছেন তাঁদের মধ্যে, যাঁরা বলেন সতর্ককারী নবী ﷺ: মুহাম্মাদ ﷺ সতর্ক করেছেন, যেমন তাঁর আগের রাসূলরা সতর্ক করেছিলেন। বাগাভীও কাতাদার একই কথা উদ্ধৃত করেন। অথচ কুরতুবী কুরআনের ব্যাখ্যাটি কাতাদার নামে বলেন। এখানে দেখা সূত্রগুলোতে তাঁর নামে দুটো বর্ণনাই আছে, আর সূত্রগুলো এর মীমাংসা করেনি। তাই কোনোটিই বাদ দেওয়া হলো না। তা ছাড়া দুই ব্যাখ্যা পরস্পরের খুব কাছাকাছি। নবী ﷺ কুরআন দিয়েই সতর্ক করেছেন, আর কুরআন এসেছে তাঁরই মাধ্যমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Last, Yet Among the First",
          "bn": "সর্বশেষ, তবু পূর্বসূরিদের দলে"
        },
        "p": [
          {
            "en": "At-Tabari opens his discussion with a puzzle. Allah describes the Prophet ﷺ as being from the first warners, yet he is the last of them. How can the last be counted among the first? Those who read the verse as being about the Prophet ﷺ answer with a turn of ordinary speech. He is a warner to his people, as the warners before him were warners to theirs, just as one says: this is one of the children of Adam, one of the people. On this reading, min, of, marks membership in a kind, not a place in time.",
            "bn": "তাবারী আলোচনা শুরু করেন একটি ধাঁধা দিয়ে। আল্লাহ নবী ﷺ-কে প্রথম দিকের সতর্ককারীদের একজন বলছেন, অথচ তিনি তাঁদের সর্বশেষ। সর্বশেষজন প্রথমদের মধ্যে গণ্য হন কীভাবে? যাঁরা আয়াতটিকে নবী ﷺ-এর বিষয়ে পড়েন, তাঁরা জবাব দেন সাধারণ কথার এক রীতি দিয়ে। তিনি নিজের জাতির জন্য সতর্ককারী, যেমন তাঁর আগের সতর্ককারীরা ছিলেন নিজ নিজ জাতির জন্য। ঠিক যেমন বলা হয়: এ আদম সন্তানদেরই একজন, মানুষদেরই একজন। এ ব্যাখ্যায় 'মিন' বোঝায় কোনো শ্রেণির সদস্য হওয়া, সময়ের কোনো অবস্থান নয়।"
          },
          {
            "en": "Ibn Kathir puts it briefly: min jinsihim, of their kind. He was sent as they were sent, and Ibn Kathir supports this with 46:9, where the Prophet ﷺ is told to say: I am not something new among the messengers. The Muyassar and as-Sa'di both echo that phrase, laysa bi-bid'in mina r-rusul, not new among the messengers. Al-Baghawi says he is a messenger sent to you, as they were sent to their peoples. Ma'arif al-Qur'an adds a contrast: earlier prophets were sent to their own nations, while he is sent to all mankind.",
            "bn": "ইবন কাসীর কথাটা বলেন সংক্ষেপে: মিন জিনসিহিম, তাঁদেরই শ্রেণির। তাঁরা যেভাবে প্রেরিত হয়েছিলেন, তিনিও সেভাবে প্রেরিত। এর সমর্থনে ইবন কাসীর আনেন ৪৬:৯, যেখানে নবী ﷺ-কে বলতে বলা হয়েছে: আমি রাসূলদের মধ্যে নতুন কিছু নই। মুয়াসসার ও সা'দী দুজনেই সেই কথার প্রতিধ্বনি তোলেন: লাইসা বিবিদ'ইম মিনার রুসুল, রাসূলদের মধ্যে নতুন নন। বাগাভী বলেন, তিনি তোমাদের কাছে প্রেরিত এক রাসূল, যেমন তাঁরা প্রেরিত হয়েছিলেন নিজ নিজ জাতির কাছে। মাআরিফুল কুরআন একটা পার্থক্যও যোগ করে: আগের নবীরা পাঠানো হয়েছিলেন নিজেদের জাতির কাছে, আর তিনি পাঠানো হয়েছেন সমগ্র মানবজাতির কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Or a Warning From the Scrolls",
          "bn": "নাকি সহীফার সতর্কবাণী"
        },
        "p": [
          {
            "en": "At-Tabari then reports a reading that differs from all of this. On it, hadha points back to what the surah has just said: this warning I have given you, people, about the blows I struck against the nations before you, is of the warnings those nations were given in the scrolls of Ibrahim and Musa. He brings it from Abu Malik, who said: it is from what they warned their peoples with in the scrolls of Ibrahim and Musa. Al-Qurtubi reports Abu Malik's saying too, in nearly the same words.",
            "bn": "এরপর তাবারী এমন এক ব্যাখ্যা আনেন, যা এর সবকিছু থেকে আলাদা। এ ব্যাখ্যায় হাযা ইঙ্গিত করে সূরা এইমাত্র যা বলেছে তার দিকে। অর্থ দাঁড়ায়: হে লোকসকল, তোমাদের আগের জাতিগুলোর ওপর আমি যে আঘাত হেনেছি, তা নিয়ে তোমাদের যে সতর্ক করলাম, তা সেই সতর্কবাণীগুলোরই অংশ, যা ইবরাহীম ও মূসার সহীফায় ওই জাতিগুলোকে দেওয়া হয়েছিল। তাবারী এটি আনেন আবু মালিক থেকে। তিনি বলেছিলেন: এ সেই সতর্কবাণীর অংশ, যা দিয়ে তাঁরা ইবরাহীম ও মূসার সহীফায় নিজেদের জাতিকে সতর্ক করেছিলেন। কুরতুবীও আবু মালিকের কথাটি প্রায় একই ভাষায় বর্ণনা করেন।"
          },
          {
            "en": "Al-Qurtubi adds a further line, introduced with wa-qila, it is said. On it, the reports of past nations that perished are a warning to this community, lest what befell them befall it too. Here nudhur is a verbal noun meaning warning, as Arabic uses nukr to mean disapproval. The sense becomes: this is a warning to you. Read this way, the verse names no warner at all. It labels what came before it, the ruins of 53:50 to 53:54, as the same old warning, delivered once more.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি ব্যাখ্যা যোগ করেন। সে অনুযায়ী, ধ্বংস হয়ে যাওয়া অতীত জাতিগুলোর খবর এই উম্মতের জন্য এক সতর্কবাণী, যাতে তাদের ওপর যা নেমেছিল তা এদের ওপর না নামে। এখানে নুযুর ক্রিয়াবাচক বিশেষ্য, মানে সতর্ক করা। আরবিতে যেমন নুক্‌র মানে অস্বীকৃতি বা আপত্তি। তখন অর্থ হয়: এ তোমাদের জন্য এক সতর্কবাণী। এভাবে পড়লে আয়াতে কোনো সতর্ককারীর কথাই নেই। আয়াতটি আগের অংশকে, অর্থাৎ ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতের ধ্বংসস্তূপগুলোকে, চিহ্নিত করে সেই পুরোনো সতর্কবাণী হিসেবে, যা আরেকবার পৌঁছে দেওয়া হলো।"
          },
          {
            "en": "At-Tabari then states his own preference. He judges Abu Malik's reading closer to the verse's meaning, because Allah placed it within verses He said are in the scrolls of Ibrahim and Musa, so hadha more fittingly points to the speech before it. Ibn Kathir, al-Baghawi, the Muyassar and as-Sa'di, on the other hand, take hadha as the Prophet ﷺ without mentioning the alternative. Both readings stand in the sources; at-Tabari's preference is reported as his, and this article adopts neither.",
            "bn": "এরপর তাবারী নিজের পছন্দ জানান। তাঁর বিচারে আবু মালিকের ব্যাখ্যা আয়াতের অর্থের বেশি কাছাকাছি। কারণ আল্লাহ এ কথা রেখেছেন এমন আয়াতগুলোর ধারায়, যেগুলো সম্পর্কে তিনি জানিয়েছেন যে সেগুলো ইবরাহীম ও মূসার সহীফায় আছে। তাই হাযা দিয়ে আগের কথার দিকে ইঙ্গিত করাই বেশি সংগত। অন্যদিকে ইবন কাসীর, বাগাভী, মুয়াসসার ও সা'দী বিকল্পটির উল্লেখ না করেই হাযা বলতে নবী ﷺ-কে বুঝিয়েছেন। দুটি ব্যাখ্যাই সূত্রে আছে। তাবারীর পছন্দ তাঁর নিজের হিসেবেই জানানো হলো। এ লেখা কোনোটিই গ্রহণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Reject a Familiar Message?",
          "bn": "চেনা বার্তা অস্বীকার কেন"
        },
        "p": [
          {
            "en": "On every reading, the verse makes the same claim: what the listener is hearing is not new. As-Sa'di draws out what follows from that, in a string of questions. Messengers came before him and called to what he calls to, so on what ground is his message denied, and by what proof is his call made void? Is his character not the highest of the noble messengers? Did he not bring the Qur'an, which falsehood cannot approach from before it or behind it? Did Allah not destroy those who denied the messengers before him?",
            "bn": "যে ব্যাখ্যাই ধরি, আয়াতের দাবি একই: শ্রোতা যা শুনছে তা নতুন নয়। সা'দী এ থেকে কী বেরিয়ে আসে, তা দেখান একের পর এক প্রশ্নে। তাঁর আগেও রাসূলরা এসেছেন, আর তিনি যেদিকে ডাকেন তাঁরাও সেদিকেই ডেকেছেন। তাহলে কিসের ভিত্তিতে তাঁর রিসালাত অস্বীকার করা হয়? কোন প্রমাণে তাঁর দাওয়াত বাতিল হয়? তাঁর চরিত্র কি সম্মানিত রাসূলদের মধ্যে সবচেয়ে উঁচু নয়? তিনি কি সেই কুরআন আনেননি, যার সামনে বা পেছন থেকে বাতিল ঢুকতে পারে না? আল্লাহ কি তাঁর আগের রাসূলদের যারা মিথ্যা বলেছিল, তাদের ধ্বংস করেননি?"
          },
          {
            "en": "Al-Qurtubi's report from Ibn Jurayj and Muhammad ibn Ka'b gives the same point as a choice: if you obey him you will succeed, and if not, what befell those who denied the earlier messengers will befall you. These words address the deniers who first heard the surah, and the peoples of 53:50 to 53:54 are named by the text itself. The verse describes what it describes. It licenses nothing against any living person or community, and gives no reader a list of others to place among the ruined.",
            "bn": "কুরতুবী ইবন জুরাইজ ও মুহাম্মাদ ইবন কা'ব থেকে যা বর্ণনা করেন, তাতে একই কথা এসেছে এক বেছে নেওয়ার প্রশ্ন হয়ে: তাঁকে মানলে তোমরা সফল হবে। না মানলে আগের রাসূলদের অস্বীকারকারীদের ওপর যা নেমেছিল, তা তোমাদের ওপরও নামবে। এ কথাগুলোর লক্ষ্য সেই অস্বীকারকারীরা, যারা প্রথম এ সূরা শুনেছিল। আর ৫৩:৫০ থেকে ৫৩:৫৪ আয়াতের জাতিগুলোর নাম আয়াতই নিয়েছে। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ কোনো অনুমতি দেয় না। কোনো পাঠককে এমন তালিকাও দেয় না, যাতে সে অন্যদের ধ্বংসপ্রাপ্তদের কাতারে বসাতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Warner Who Ran Unclothed",
          "bn": "বস্ত্রহীন ছুটে আসা সতর্ককারী"
        },
        "p": [
          {
            "en": "None of the commentaries fetched here attaches a narration to this verse alone. Ibn Kathir, in the abridged English that treats 53:56 together with the verses after it, says what a warner is: someone eager to pass on what he knows of a disaster close at hand, so that it does not fall on the people he warns. He cites 34:46, he is only a warner to you before a severe punishment, and then a phrase from a hadith, I am the naked warner, which he says suits the next verse, 53:57, on the nearing of the Hour.",
            "bn": "এখানে দেখা তাফসীরগুলোর কোনোটিই শুধু এই আয়াতের সঙ্গে কোনো বর্ণনা জুড়ে দেয়নি। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৫৩:৫৬ আয়াতকে পরের আয়াতগুলোর সঙ্গে মিলিয়ে আলোচনা করে। সেখানে তিনি বলেন, সতর্ককারী সে, যে আসন্ন বিপদের খবর জানলে তা পৌঁছে দিতে ব্যাকুল থাকে, যাতে যাদের সে সতর্ক করছে তাদের ওপর বিপদটা না নামে। তিনি উদ্ধৃত করেন ৩৪:৪৬: তিনি তো এক কঠিন শাস্তির আগে তোমাদের জন্য কেবল একজন সতর্ককারী। তারপর এক হাদীসের অংশ আনেন: আমিই সেই নগ্ন সতর্ককারী। তাঁর মতে এ অর্থ মানায় পরের আয়াত ৫৩:৫৭-এর সঙ্গে, যেখানে কিয়ামত কাছে আসার কথা।"
          },
          {
            "en": "Ibn Kathir quotes only that phrase and names no collection. The full narration is in Sahih al-Bukhari (6482), from Abu Musa, in this wording: \"My example and the example of the message with which Allah has sent me is like that of a man who came to some people and said, I have seen with my own eyes the enemy forces, and I am a naked warner (to you) so save yourself, save yourself! A group of them obeyed him and went out at night, slowly and stealthily and were safe, while another group did not believe him and thus the army took them in the morning and destroyed them.\"",
            "bn": "ইবন কাসীর শুধু ওই অংশটুকুই উদ্ধৃত করেন, কোনো গ্রন্থের নাম বলেন না। পুরো বর্ণনাটি সহীহ বুখারীতে (৬৪৮২) আবু মূসা (রাঃ) থেকে এসেছে, এই ভাষায়: \"আমার আর আল্লাহ আমাকে যে বার্তা দিয়ে পাঠিয়েছেন তার দৃষ্টান্ত এমন এক ব্যক্তির মতো, যে এক সম্প্রদায়ের কাছে এসে বলল, আমি নিজের চোখে শত্রুবাহিনী দেখেছি, আর আমি (তোমাদের জন্য) নগ্ন সতর্ককারী। তাই বাঁচো, বাঁচো! তাদের একদল তার কথা মানল, রাতেই ধীরে ধীরে চুপিসারে বেরিয়ে পড়ল আর বেঁচে গেল। আরেক দল তাকে বিশ্বাস করল না। ফলে সকালে বাহিনী তাদের ধরে ফেলল এবং ধ্বংস করে দিল।\""
          },
          {
            "en": "Al-Bukhari placed it in his Sahih, and that is its grading here; nothing is added to it. Ibn Kathir explains the image: a man who has seen the danger rushes so fast to warn his people that he does not stop to dress. Ibn Kathir links the hadith to the meaning of a warner and to 53:57, not to the wording of this verse, and that is how it is used here. Ibn Kathir also brings a report on small sins, recorded by Imam Ahmad; it is not attached to this verse and is left out.",
            "bn": "ইমাম বুখারী এটি তাঁর সহীহ গ্রন্থে রেখেছেন। এখানে এর মান সেটুকুই, তার বেশি কিছু জোড়া হয়নি। ছবিটা ইবন কাসীর ব্যাখ্যা করেন এভাবে: বিপদ দেখে ফেলা মানুষটি নিজের লোকদের সাবধান করতে এত তাড়াহুড়ো করে ছোটে যে কাপড় পরার জন্যও থামে না। ইবন কাসীর হাদীসটিকে যুক্ত করেন সতর্ককারীর অর্থের সঙ্গে আর ৫৩:৫৭ আয়াতের সঙ্গে, এ আয়াতের শব্দের সঙ্গে নয়। এখানেও তা সেভাবেই ব্যবহার হলো। ইবন কাসীর ছোট গুনাহ নিয়ে ইমাম আহমাদের সংকলিত একটি বর্ণনাও আনেন। সেটি এ আয়াতের সঙ্গে যুক্ত নয়, তাই বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Is Concern",
          "bn": "সতর্ক করা মানে মমতা"
        },
        "p": [
          {
            "en": "The parable shows what kind of word nadhir is. The man in it gains nothing by being believed. He has seen an army, and his only thought is the people still asleep in its path. That is why Ibn Kathir defines the warner by eagerness: the wish that the disaster not fall on those he warns. A warning in this sense is not a threat. A threat says, I will harm you. A warning says, harm is coming and I want you safe. The verse places the Prophet ﷺ, or the message he carried, in that line.",
            "bn": "দৃষ্টান্তটি দেখায়, নাযীর শব্দটা আসলে কোন ধরনের। সেখানে লোকটির কথা কেউ বিশ্বাস করলে তার নিজের কোনো লাভ নেই। সে একটা বাহিনী দেখেছে, আর তার একমাত্র চিন্তা সেই মানুষগুলো, যারা তখনো বাহিনীর পথে ঘুমিয়ে আছে। এ জন্যই ইবন কাসীর সতর্ককারীকে চেনান তার ব্যাকুলতা দিয়ে: যাদের সে সতর্ক করছে, তাদের ওপর যেন বিপদ না নামে। এ অর্থে সতর্কবাণী হুমকি নয়। হুমকি বলে, আমি তোমার ক্ষতি করব। সতর্কবাণী বলে, ক্ষতি আসছে, আর আমি চাই তুমি নিরাপদ থাকো। আয়াতটি নবী ﷺ-কে, কিংবা তাঁর বহন করা বার্তাকে, সেই ধারাতেই রাখে।"
          },
          {
            "en": "Seen this way, the placement after 53:55 is worth noticing. That verse asks which of the favours of your Lord you will dispute, and the next words name a warner. The text does not say that the warning is one of those favours, and no commentator fetched here says so either. But the parable invites the thought on its own terms. The group that listened in the night owed its life to a man who would not keep quiet. Being told of danger in time is not a hardship placed on a people.",
            "bn": "এভাবে দেখলে ৫৩:৫৫ আয়াতের পরে এর অবস্থান খেয়াল করার মতো। সে আয়াত জিজ্ঞেস করে, তোমার প্রতিপালকের কোন নিয়ামত নিয়ে তুমি বিতর্ক করবে। আর ঠিক পরের কথাতেই আসে এক সতর্ককারীর উল্লেখ। সতর্কবাণী সেই নিয়ামতগুলোর একটি, এমন কথা আয়াত বলেনি, এখানে দেখা কোনো তাফসীরকারও বলেননি। তবে দৃষ্টান্তটি নিজের মতো করেই ভাবনাটা জাগায়। যে দল রাতে কথা শুনেছিল, তাদের প্রাণ বেঁচেছিল এমন একজনের কারণে, যে চুপ করে থাকেনি। সময় থাকতে বিপদের খবর পাওয়া কোনো জাতির ওপর চাপানো কষ্ট নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearing an Old Warning Afresh",
          "bn": "পুরোনো সতর্কবাণী নতুন করে শোনা"
        },
        "p": [
          {
            "en": "There is a danger in familiarity. A warning repeated across generations can start to sound like background noise, and the verse names exactly that quality: of old, one of a long line. Yet the line exists because the danger did not go away. Whichever reading one follows, the listener is told that the message reaching him is the message that reached 'Ad and Thamud. Its age is not a reason to discount it. It is evidence that it has been true for a very long time.",
            "bn": "চেনা জিনিসের মধ্যে একটা বিপদ থাকে। প্রজন্মের পর প্রজন্ম ধরে বারবার শোনা সতর্কবাণী একসময় পেছনের গুঞ্জনের মতো শোনাতে পারে। আর আয়াতটি ঠিক সেই গুণটির নামই নেয়: পূর্বের, এক দীর্ঘ ধারার অংশ। অথচ ধারাটা টিকে আছে, কারণ বিপদ সরে যায়নি। যে ব্যাখ্যাই অনুসরণ করা হোক, শ্রোতাকে জানানো হচ্ছে: তার কাছে যে বার্তা পৌঁছাচ্ছে, তা সেই বার্তাই, যা আদ ও সামূদের কাছে পৌঁছেছিল। পুরোনো বলে একে হালকা করার কারণ নেই। বরং এ প্রমাণ যে কথাটা বহু কাল ধরে সত্য।"
          },
          {
            "en": "Two practical lessons follow. The first is about receiving. When a true reminder reaches us, from the Qur'an, from a teacher, from someone who cares, the right response is the response of the group that set out in the night, not irritation at being disturbed. The second is about giving. Whoever warns others should warn as the man in the parable warned: urgently, plainly, and out of fear for them, never out of pleasure at their danger or at being proved right.",
            "bn": "এখান থেকে দুটি বাস্তব শিক্ষা আসে। প্রথমটি গ্রহণ করা নিয়ে। কুরআন থেকে হোক, শিক্ষকের কাছ থেকে হোক, বা আমাদের ভালো চায় এমন কারও কাছ থেকে, সত্যিকারের উপদেশ এলে সঠিক জবাব সেই দলের জবাব, যারা রাতেই বেরিয়ে পড়েছিল। বিরক্ত হওয়া নয় যে কেউ আমাদের আরামে ব্যাঘাত ঘটাল। দ্বিতীয়টি দেওয়া নিয়ে। যে অন্যকে সতর্ক করে, সে যেন দৃষ্টান্তের সেই মানুষটির মতো সতর্ক করে: তাড়াতাড়ি, সোজা কথায়, আর তাদের জন্য ভয় থেকে। তাদের বিপদে বা নিজে সঠিক প্রমাণিত হওয়ায় তৃপ্তি থেকে কখনো নয়।"
          }
        ]
      }
    ]
  }
});
