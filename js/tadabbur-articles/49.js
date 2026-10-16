/**
 * Tadabbur long-form articles — surah 49.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "49:3": {
    "sections": [
      {
        "h": {
          "en": "After the Warning, Praise",
          "bn": "সতর্কবাণীর পরে প্রশংসা"
        },
        "p": [
          {
            "en": "The surah opens with two commands about conduct towards the Messenger ﷺ. 49:1 forbids putting oneself forward before Allah and His Messenger, and 49:2 forbids raising the voice above the voice of the Prophet, warning that deeds may come to nothing while a person does not perceive it. Then 49:3 changes its tone. It forbids nothing at all. It describes those who do lower their voices, names what Allah has done to their hearts, and closes on a promise: forgiveness and a great reward.",
            "bn": "সূরাটি শুরু হয় রাসূল ﷺ-এর সঙ্গে আচরণ নিয়ে দুটি আদেশ দিয়ে। ৪৯:১ আয়াত নিষেধ করে আল্লাহ ও তাঁর রাসূলের আগে বেড়ে যেতে। ৪৯:২ আয়াত নিষেধ করে নবীর আওয়াজের উপর নিজের আওয়াজ তুলতে, আর সতর্ক করে যে এতে মানুষের অজান্তেই তার আমল নিষ্ফল হয়ে যেতে পারে। তারপর ৪৯:৩ আয়াতে সুর বদলে যায়। এখানে কোনো নিষেধ নেই। আছে তাদের বর্ণনা, যারা সত্যিই আওয়াজ নিচু রাখে। আল্লাহ তাদের অন্তরের সঙ্গে কী করেছেন, আয়াতটি তা জানায়, আর শেষ হয় একটি ওয়াদায়: মাগফিরাত ও বিরাট পুরস্কার।"
          },
          {
            "en": "Ibn Kathir marks the turn with four verbs. After the prohibition, he writes, Allah nadaba ila khafd as-sawt 'indahu: He recommended lowering the voice in his presence, urged it, guided people to it and made it desirable. As-Sa'di frames the verse the same way, as praise: thumma madaha, then He praised whoever lowers his voice at the Messenger of Allah ﷺ. The warning of 49:2 has been given; this verse shows what obedience to it looks like, and what it is worth.",
            "bn": "ইবন কাসীর এই মোড়টা বোঝান চারটি ক্রিয়া দিয়ে। তিনি লেখেন, নিষেধের পর আল্লাহ নাদাবা ইলা খাফদিস সাওতি ইন্দাহু: তাঁর সামনে আওয়াজ নিচু রাখতে আহ্বান জানালেন, এতে উৎসাহ দিলেন, এর পথ দেখালেন, একে প্রিয় করে তুললেন। সা'দীও আয়াতটিকে প্রশংসা হিসেবেই পড়েন: সুম্মা মাদাহা, তারপর আল্লাহ প্রশংসা করলেন তার, যে রাসূলুল্লাহ ﷺ-এর কাছে নিজের আওয়াজ নিচু রাখে। ৪৯:২ আয়াতে সতর্কবাণী দেওয়া হয়ে গেছে। এ আয়াত দেখায়, সেটা মেনে চলা দেখতে কেমন, আর তার দাম কতখানি।"
          },
          {
            "en": "One change of wording is visible on the page. Where 49:2 speaks of the voice of an-Nabi, the Prophet, this verse says 'inda rasuli-llah, at the Messenger of Allah. The next verse, 49:4, turns to people who called out to him from behind the private rooms, and that scene belongs to its own article. Here the subject is quieter: the ordinary speech of those who sat with him.",
            "bn": "পাতার দিকে তাকালেই শব্দের একটি বদল চোখে পড়ে। ৪৯:২ আয়াতে বলা হয়েছে আন-নাবী, অর্থাৎ নবীর আওয়াজের কথা। এ আয়াতে বলা হয়েছে ইন্দা রাসূলিল্লাহ, আল্লাহর রাসূলের কাছে। পরের আয়াত, ৪৯:৪, ফিরে তাকায় সেই লোকদের দিকে, যারা হুজরাগুলোর বাইরে থেকে তাঁকে ডাকাডাকি করেছিল। সে দৃশ্যের আলোচনা তার নিজের প্রবন্ধে। এখানকার বিষয় আরও নিচু স্বরের: যারা তাঁর পাশে বসত, তাদের রোজকার কথাবার্তা।"
          }
        ]
      },
      {
        "h": {
          "en": "Holding Back, Softly",
          "bn": "নরমভাবে নিজেকে সামলানো"
        },
        "p": [
          {
            "en": "Yaghudduna aswatahum: they lower their voices. At-Tabari explains it as yakuffuna raf' aswatihim, they hold back from raising their voices, and gives the root sense: asl al-ghadd al-kaff fi lin, the basis of ghadd is restraint with softness. From it, he says, comes ghadd al-basar, holding the eye back from looking, citing a line of Jarir. The Qur'an uses the same verb for the gaze in 24:30, and Luqman's advice to his son in 31:19 uses it for the voice.",
            "bn": "ইয়াগুদ্দূনা আসওয়াতাহুম: তারা নিজেদের আওয়াজ নিচু রাখে। তাবারী এর ব্যাখ্যা দেন ইয়াকুফফূনা রাফআ আসওয়াতিহিম বলে, অর্থাৎ তারা আওয়াজ উঁচু করা থেকে নিজেদের বিরত রাখে। শব্দের মূল অর্থও তিনি বলে দেন: গদ্দ মানে নরমভাবে বিরত রাখা। তাঁর মতে চোখ নামিয়ে রাখা, গদ্দুল বাসার, এখান থেকেই এসেছে, মানে দেখা থেকে চোখকে ফিরিয়ে রাখা। সঙ্গে কবি জারীরের একটি পঙক্তি উদ্ধৃত করেন। কুরআন ২৪:৩০ আয়াতে দৃষ্টির বেলায় এই একই ক্রিয়া ব্যবহার করেছে। আর ৩১:১৯ আয়াতে ছেলেকে লুকমানের উপদেশে তা এসেছে আওয়াজের বেলায়।"
          },
          {
            "en": "The Muyassar and al-Baghawi gloss the verb more simply as yakhfiduna, they lower, and al-Baghawi adds why: ijlalan lahu, out of reverence for him. Al-Qurtubi gives the same reason and then names two situations. They lower their voices in his presence when they speak to him, out of reverence for him, or when they speak to someone else bayna yadayhi, in front of him. On his reading the restraint covers both the words addressed to the Prophet ﷺ and the talk among his companions while he sat with them.",
            "bn": "মুয়াসসার আর বাগাভী ক্রিয়াটির অর্থ করেন আরও সহজ করে: ইয়াখফিদূনা, তারা নিচু করে। বাগাভী কারণটাও জুড়ে দেন: ইজলালান লাহু, তাঁর প্রতি সম্মান থেকে। কুরতুবীও একই কারণ বলেন, তারপর দুটি অবস্থার কথা আলাদা করে উল্লেখ করেন। সম্মানের কারণে তারা তাঁর সামনে আওয়াজ নিচু রাখে যখন তাঁর সঙ্গে কথা বলে। আবার যখন তাঁর সামনে, বাইনা ইয়াদাইহি, অন্য কারও সঙ্গে কথা বলে, তখনও। তাঁর ব্যাখ্যায় এই সংযম নবী ﷺ-কে বলা কথাতেও খাটে, আবার তিনি সাহাবিদের মধ্যে বসে থাকলে তাদের নিজেদের আলাপেও খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beyond His Lifetime",
          "bn": "তাঁর ইন্তেকালের পরেও"
        },
        "p": [
          {
            "en": "Does the lowering end with his lifetime? The Arabic commentaries consulted for this verse speak only of his presence. Ma'arif al-Qur'an, discussing 49:2 and 49:3 together, goes further. It reports Qadi Abu Bakr Ibn al-'Arabi as saying that respect for the Prophet ﷺ after his passing is as obligatory as it was in his lifetime. It adds that some scholars hold it disrespectful to give salam or speak very loudly in front of his resting place, and that noise is discourteous where his ahadith are being recited.",
            "bn": "আওয়াজ নিচু রাখার এই আদব কি তাঁর জীবনের সঙ্গেই শেষ? এ আয়াতের জন্য যে আরবি তাফসীরগুলো দেখা হয়েছে, সেগুলো কেবল তাঁর উপস্থিতির কথাই বলে। মাআরিফুল কুরআন ৪৯:২ ও ৪৯:৩ আয়াত একসঙ্গে আলোচনা করতে গিয়ে আরও এগিয়ে যায়। সেখানে কাজী আবু বকর ইবনুল আরাবীর বরাতে আছে: ইন্তেকালের পরেও নবী ﷺ-এর প্রতি সম্মান দেখানো ঠিক ততটাই জরুরি, যতটা ছিল তাঁর জীবদ্দশায়। গ্রন্থটি আরও জানায়, কিছু আলেমের মতে তাঁর রওজার সামনে সালাম দিতে বা কথা বলতে গিয়ে খুব উঁচু গলা করা বেয়াদবি। আর যেখানে তাঁর হাদিস পড়া হচ্ছে, সেখানে শোরগোল করাও আদবের খেলাপ।"
          },
          {
            "en": "Its reason for the last point is that when his words are recited, listening to them in silence is required. Ma'arif al-Qur'an then cites al-Qurtubi for a further extension: as the command of 49:1 applies to the scholars as heirs of the Prophet, so the command about voices applies to the great scholars too, and in their gatherings a person should not raise the voice so far that theirs is drowned. These are Ma'arif al-Qur'an's positions and those of the scholars it names. This article reports them and makes no ruling of its own.",
            "bn": "শেষ কথাটির কারণ হিসেবে গ্রন্থটি বলে, তাঁর কথা যখন পড়া হয়, তখন চুপ করে শোনা জরুরি। এরপর মাআরিফুল কুরআন কুরতুবীর বরাতে আরেক ধাপ এগোয়। আলেমরা নবীর উত্তরসূরি, তাই ৪৯:১ আয়াতের আদেশ যেমন তাঁদের বেলায় খাটে, তেমনি আওয়াজ নিয়ে আদেশটিও বড় আলেমদের বেলায় খাটে। তাঁদের মজলিসে এমনভাবে গলা চড়ানো উচিত নয়, যাতে তাঁদের আওয়াজ চাপা পড়ে যায়। এগুলো মাআরিফুল কুরআনের অবস্থান, আর সেখানে যাঁদের নাম এসেছে তাঁদের। এ প্রবন্ধ শুধু সেগুলো জানাচ্ছে, নিজে থেকে কোনো বিধান দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Gold Tried in Fire",
          "bn": "আগুনে পরখ করা সোনা"
        },
        "p": [
          {
            "en": "Ulaika lladhina mtahana llahu qulubahum li-t-taqwa: those are the ones whose hearts Allah has tested for taqwa. At-Tabari reads it as a test followed by a result: He tested their hearts, then chose them and made them pure for taqwa, which he defines as guarding against Allah by doing what He commands and avoiding what He forbids. His image is a refiner's: kama yumtahanu dh-dhahabu bi-n-nar, as gold is tested in fire, so that its good part is freed and its dross is cast off. Al-Baghawi gives the same picture of gold in the fire.",
            "bn": "উলাইকাল্লাযীনামতাহানাল্লাহু কুলূবাহুম লিত-তাকওয়া: এরাই তারা, যাদের অন্তর আল্লাহ তাকওয়ার জন্য পরীক্ষা করেছেন। তাবারী একে পড়েন পরীক্ষা আর তার ফল হিসেবে। আল্লাহ তাদের অন্তর যাচাই করলেন, তারপর বেছে নিয়ে তাকওয়ার জন্য খাঁটি করে দিলেন। তাকওয়ার সংজ্ঞাও তিনি দেন: আল্লাহর আনুগত্য পালন আর তাঁর নাফরমানি থেকে দূরে থাকার মাধ্যমে তাঁকে ভয় করে চলা। তাঁর উপমা স্বর্ণকারের: কামা ইউমতাহানুয যাহাবু বিন-নার, যেমন আগুনে সোনা পরখ করা হয়। তাতে ভালো অংশটা খাঁটি হয়ে বেরিয়ে আসে, আর খাদ ঝরে যায়। বাগাভীও আগুনে সোনার একই ছবি আঁকেন।"
          },
          {
            "en": "Several short glosses sit beside this. At-Tabari reports Mujahid: akhlasa, He made pure; and Qatada: Allah made their hearts pure in what He loves. The Muyassar joins the two steps: He tested their hearts and made them pure for His taqwa. Ibn Kathir has akhlasaha laha wa ja'alaha ahlan wa mahallan: He made them pure for it, and made them fit for it and a place where it dwells. Al-Qurtubi quotes two grammarians: al-Farra', who says made pure, and al-Akhfash, who says ikhtassaha, singled them out for taqwa.",
            "bn": "এর পাশে আরও কয়েকটি ছোট ছোট ব্যাখ্যা আছে। তাবারী মুজাহিদের কথা উদ্ধৃত করেন: আখলাসা, তিনি খাঁটি করলেন। কাতাদার কথাও আনেন: আল্লাহ যা ভালোবাসেন, সে বিষয়ে তাদের অন্তর খাঁটি করে দিলেন। মুয়াসসার দুটি ধাপ একসঙ্গে বলে: তিনি তাদের অন্তর পরীক্ষা করলেন আর নিজের তাকওয়ার জন্য খাঁটি করলেন। ইবন কাসীর বলেন আখলাসাহা লাহা ওয়া জাআলাহা আহলান ওয়া মাহাল্লান: তাকওয়ার জন্য অন্তরকে খাঁটি করলেন, একে তার যোগ্য বানালেন, তার থাকার জায়গা বানালেন। কুরতুবী দুজন ভাষাবিদের কথা আনেন। ফাররা বলেন, খাঁটি করলেন। আখফাশ বলেন, ইখতাসসাহা, তাকওয়ার জন্য আলাদা করে বেছে নিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hide Stretched Wide",
          "bn": "টেনে চওড়া করা চামড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi then opens the word itself. Imtihan, he says, is the ifti'al form of mahantu l-adima, I worked the hide until I widened it. On that root the verse means Allah widened their hearts and opened them for taqwa. On the other readings it means He tested them and then made them pure, as in the saying: I tested the silver, tried it until it came out pure; the word purity is then left unsaid and understood. He also quotes Abu 'Amr: anything you have worked hard, you have put through mihna.",
            "bn": "এরপর কুরতুবী শব্দটিকেই খুলে দেখান। তিনি বলেন, ইমতিহান এসেছে মাহানতুল আদীম থেকে, যার মানে: চামড়াটা আমি এত খাটালাম যে তা চওড়া হয়ে গেল। এই মূল ধরলে আয়াতের অর্থ, আল্লাহ তাকওয়ার জন্য তাদের অন্তর প্রশস্ত করলেন, খুলে দিলেন। অন্য ব্যাখ্যাগুলো ধরলে অর্থ, তিনি অন্তর পরীক্ষা করে খাঁটি করলেন। যেমন বলা হয়, রুপা পরখ করলাম, যাচাই করতে করতে তা খাঁটি হয়ে বেরোল। তখন খাঁটি হওয়ার কথাটা উহ্য থাকে, বাক্য থেকেই বোঝা যায়। আবু আমরের কথাও তিনি আনেন: যে জিনিসকে তুমি খুব খাটিয়েছ, তাকে তুমি মিহনার ভেতর দিয়ে নিয়েছ।"
          },
          {
            "en": "Ibn Abbas (RA), in al-Qurtubi's report, says Allah cleansed them of everything foul and placed fear of Him and taqwa in their hearts. As-Sa'di keeps to the test: ibtalaha wa-khtabaraha, He tried and examined them, and the result showed, for their hearts became sound for taqwa. He draws a principle from it. Allah tests hearts by command, prohibition and hardship. Whoever holds to His command, seeks His pleasure, hurries to it and puts it before his own desire is refined for taqwa, and whoever is not like that is known to be unfit for it.",
            "bn": "কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহ তাদের সব রকম মন্দ থেকে পবিত্র করলেন, আর তাদের অন্তরে নিজের ভয় ও তাকওয়া রেখে দিলেন। সা'দী থাকেন পরীক্ষার অর্থেই: ইবতালাহা ওয়াখতাবারাহা, তিনি অন্তরগুলো যাচাই করলেন, পরখ করলেন। ফলও প্রকাশ পেল, তাদের অন্তর তাকওয়ার উপযুক্ত হয়ে উঠল। এখান থেকে তিনি একটি নীতি বের করেন। আল্লাহ অন্তর পরীক্ষা করেন আদেশ দিয়ে, নিষেধ দিয়ে, বিপদ দিয়ে। যে তাঁর আদেশ আঁকড়ে থাকে, তাঁর সন্তুষ্টি খোঁজে, সেদিকে ছুটে যায় আর নিজের খায়েশের আগে তা রাখে, সে তাকওয়ার জন্য খাঁটি হয়ে ওঠে। আর যে এমন নয়, বোঝা যায় সে এর উপযুক্ত নয়।"
          },
          {
            "en": "Made pure, singled out, widened, proven through command and hardship: the glosses stand side by side in the sources, and none of the commentators consulted here declares the others wrong. Al-Qurtubi himself sets out both roots, the hide and the silver, and leaves both standing. This article does the same. Whichever sense is meant, the plain words of the verse already tie the lowered voice to a heart that Allah has worked on, and they name the purpose of that work: taqwa.",
            "bn": "খাঁটি করা, আলাদা করে বেছে নেওয়া, প্রশস্ত করা, আদেশ আর বিপদের ভেতর দিয়ে যাচাই করা: তাফসীরগুলোতে এই ব্যাখ্যাগুলো পাশাপাশি আছে। এখানে আনা কোনো মুফাসসির অন্যদের ভুল বলেননি। কুরতুবী নিজেই দুটি মূল তুলে ধরেছেন, চামড়ার আর রুপার, এবং দুটোই রেখে দিয়েছেন। এ প্রবন্ধও তাই করছে। অর্থ যেটাই হোক, আয়াতের সরল কথাতেই নিচু আওয়াজের সঙ্গে এমন অন্তরের যোগ বাঁধা, যার উপর আল্লাহ কাজ করেছেন। আর সেই কাজের লক্ষ্যও আয়াত বলে দিয়েছে: তাকওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports From 'Umar",
          "bn": "উমর (রাঃ)-এর দুটি বর্ণনা"
        },
        "p": [
          {
            "en": "Two sayings of 'Umar (RA) on this phrase reach us through the commentaries. Al-Qurtubi gives one in a line: adhhaba 'an qulubihim ash-shahawat, He removed desires from their hearts. Ibn Kathir gives the other, from Imam Ahmad's Kitab az-Zuhd through Mujahid. Someone wrote to 'Umar: Commander of the Believers, who is better, a man who does not desire sin and does not commit it, or a man who desires sin and does not commit it? 'Umar wrote back: those who desire sin and do not commit it are the ones whose hearts Allah has tested for taqwa.",
            "bn": "এ বাক্যাংশ নিয়ে উমর (রাঃ)-এর দুটি কথা তাফসীরের মাধ্যমে আমাদের কাছে পৌঁছেছে। কুরতুবী একটি আনেন এক লাইনে: আযহাবা আন কুলূবিহিমুশ শাহাওয়াত, আল্লাহ তাদের অন্তর থেকে খায়েশ দূর করে দিয়েছেন। অন্যটি আনেন ইবন কাসীর, ইমাম আহমাদের কিতাবুয যুহদ থেকে, মুজাহিদের সূত্রে। কেউ উমরকে চিঠি লিখল: হে আমীরুল মুমিনীন, কে উত্তম? যার গুনাহের খায়েশ জাগে না এবং গুনাহ করে না, সে? নাকি যার গুনাহের খায়েশ জাগে, তবু করে না, সে? উমর জবাবে লিখলেন: যাদের গুনাহের খায়েশ জাগে অথচ তারা তা করে না, তারাই সেই লোক, যাদের অন্তর আল্লাহ তাকওয়ার জন্য পরীক্ষা করেছেন।"
          },
          {
            "en": "Read side by side, the two reports point in different directions. One describes hearts from which desire has been taken away; the other praises the person who feels its pull and still holds back. Al-Qurtubi gives the first and Ibn Kathir the second, and neither commentator mentions the other report or tries to reconcile them. This article leaves both standing. What they share is that the test of this verse reaches below speech, into what a person wants.",
            "bn": "দুটি বর্ণনা পাশাপাশি রাখলে দেখা যায়, দুটি দুই দিকে ইশারা করে। একটিতে এমন অন্তরের কথা, যেখান থেকে খায়েশই তুলে নেওয়া হয়েছে। অন্যটিতে প্রশংসা তার, যে খায়েশের টান টের পায়, তবু নিজেকে সামলে রাখে। প্রথমটি কুরতুবীর, দ্বিতীয়টি ইবন কাসীরের। তাঁদের কেউই অন্য বর্ণনার উল্লেখ করেননি, মেলানোর চেষ্টাও করেননি। এ প্রবন্ধ দুটোই যেমন আছে তেমন রেখে দিচ্ছে। তবে দুটোর মিল এক জায়গায়: এ আয়াতের পরীক্ষা কথার নিচে নেমে যায়, মানুষ ভেতরে কী চায় সেখানে গিয়ে পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Someone Sharing a Secret",
          "bn": "কানে কানে কথা বলার মতো"
        },
        "p": [
          {
            "en": "On the occasion, the commentators carry several reports. Al-Qurtubi gives Abu Hurayra (RA): when la tarfa'u aswatakum came down, Abu Bakr (RA) said, by Allah, I will not raise my voice except like someone sharing a secret, ka-akhi s-sirar. He gives the same oath through Abu Salama, tied there to 49:1. Al-Baghawi carries it from Abu Hurayra and Ibn Abbas (RA), under this verse, opening with when this verse came down. Ma'arif al-Qur'an cites it to ad-Durr al-Manthur on al-Bayhaqi's authority. No hadith collection was checked for this oath here.",
            "bn": "আয়াতটি কোন প্রেক্ষাপটে নাজিল হলো, সে নিয়ে মুফাসসিররা কয়েকটি বর্ণনা আনেন। কুরতুবী আবু হুরায়রা (রাঃ)-এর বরাতে বলেন, লা তারফাউ আসওয়াতাকুম নাজিল হলে আবু বকর (রাঃ) বললেন: আল্লাহর কসম, এখন থেকে আমি কানে কানে গোপন কথা বলার মতো করেই কথা বলব, কা-আখিস সিরার। একই কসম তিনি আবু সালামার সূত্রেও আনেন, তবে সেখানে তা ৪৯:১ আয়াতের সঙ্গে যুক্ত। বাগাভী এটি আনেন আবু হুরায়রা ও ইবন আব্বাস (রাঃ)-এর বরাতে, এ আয়াতের আলোচনাতেই, আর শুরু করেন এভাবে: যখন এ আয়াত নাজিল হলো। মাআরিফুল কুরআন এটি আদ-দুররুল মানসূর থেকে উদ্ধৃত করে, বায়হাকীর বরাতে। এ কসমের জন্য এখানে কোনো হাদিসগ্রন্থ মিলিয়ে দেখা হয়নি।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report from 'Abdullah ibn az-Zubayr that after 49:2, 'Umar (RA) spoke to the Prophet ﷺ so low that he had to ask what he had said, and that 49:3 was then revealed. Ibn Kathir, on the passage that contains this verse, cites al-Bukhari for the background. In Sahih al-Bukhari (4845), Ibn Abi Mulayka said: The two righteous ones were close to ruin, Abu Bakr and 'Umar. They raised their voices in the presence of the Prophet ﷺ when a party of Banu Tamim came to him.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই আবদুল্লাহ ইবনুয যুবাইরের বরাতে বলেন, ৪৯:২ আয়াতের পর উমর (রাঃ) নবী ﷺ-এর সঙ্গে এত নিচু গলায় কথা বলতেন যে নবীকে জিজ্ঞেস করে নিতে হতো, তিনি কী বললেন। এরপর ৪৯:৩ আয়াত নাজিল হয়। এ আয়াতসহ পুরো অংশের আলোচনায় ইবন কাসীর পটভূমি হিসেবে বুখারীর বরাত দেন। সহীহ বুখারীতে (৪৮৪৫) ইবন আবী মুলাইকা বলেন: দুই নেককার মানুষ ধ্বংসের কাছাকাছি পৌঁছে গিয়েছিলেন, আবু বকর ও উমর। বনু তামীমের একটি প্রতিনিধিদল নবী ﷺ-এর কাছে এলে তাঁরা দুজন তাঁর সামনে নিজেদের আওয়াজ উঁচু করেছিলেন।"
          },
          {
            "en": "One of them pointed to al-Aqra' ibn Habis, of Banu Mujashi', and the other to another man. Nafi' said: I do not remember his name. Abu Bakr said to 'Umar: You wanted nothing but to oppose me. 'Umar said: I did not want to oppose you. Their voices rose over it, and Allah revealed: O you who believe, do not raise your voices, to the end of the verse. Ibn az-Zubayr said: After this verse, 'Umar would not let the Messenger of Allah ﷺ hear him until he asked him to repeat. He did not mention that from his father, meaning Abu Bakr.",
            "bn": "তাঁদের একজন বনু মুজাশি গোত্রের আকরা ইবন হাবিসের নাম প্রস্তাব করলেন, অন্যজন আরেকজনের। বর্ণনাকারী নাফে বলেন: তার নাম আমার মনে নেই। আবু বকর উমরকে বললেন: তুমি তো শুধু আমার বিরোধিতাই করতে চেয়েছ। উমর বললেন: আমি আপনার বিরোধিতা করতে চাইনি। এ নিয়ে তাঁদের আওয়াজ উঁচু হয়ে গেল। তখন আল্লাহ নাজিল করলেন: হে মুমিনগণ, তোমরা নিজেদের আওয়াজ উঁচু করো না, আয়াতের শেষ পর্যন্ত। ইবনুয যুবাইর বলেন: এ আয়াতের পর উমর রাসূলুল্লাহ ﷺ-এর সঙ্গে এত নিচু স্বরে কথা বলতেন যে তিনি আবার জিজ্ঞেস না করা পর্যন্ত শুনতে পেতেন না। তবে নিজের 'পিতা', অর্থাৎ আবু বকর সম্পর্কে তিনি এমন কথা উল্লেখ করেননি।"
          },
          {
            "en": "Al-Bukhari placed the report in his Sahih. Three things are worth keeping apart. This wording ties the dispute to 49:2, while another narration in al-Bukhari (4847), which Ibn Kathir also mentions, names 49:1; that question belongs to those verses. The hadith does not itself say that 49:3 came down about 'Umar; that addition is in the reports al-Qurtubi and al-Baghawi carry. And where Ibn az-Zubayr says nothing of Abu Bakr, those two commentators report his whispering oath through others. The story of Thabit ibn Qays (RA) turns on the warning of 49:2 and is left for that verse.",
            "bn": "বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। এখানে তিনটি বিষয় আলাদা রাখা দরকার। এই বর্ণনায় বিবাদটি ৪৯:২ আয়াতের সঙ্গে যুক্ত। অথচ বুখারীর আরেকটি বর্ণনায় (৪৮৪৭), যার কথা ইবন কাসীরও বলেন, এসেছে ৪৯:১ আয়াতের নাম। সে প্রশ্নের আলোচনা ওই আয়াতগুলোতেই হবে। হাদিসটি নিজে বলে না যে ৪৯:৩ আয়াত উমরকে নিয়ে নাজিল হয়েছে। এ কথা আছে কুরতুবী ও বাগাভীর আনা বর্ণনায়। আর ইবনুয যুবাইর আবু বকর সম্পর্কে কিছু না বললেও এ দুই মুফাসসির অন্যদের সূত্রে তাঁর সেই ফিসফিস করে কথা বলার কসম বর্ণনা করেন। সাবিত ইবন কায়স (রাঃ)-এর ঘটনা ৪৯:২ আয়াতের সতর্কবাণীকে ঘিরে, তাই সেটা ওই আয়াতের জন্য রেখে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Pardon First, Then Reward",
          "bn": "আগে মাফ, তারপর প্রতিদান"
        },
        "p": [
          {
            "en": "Lahum maghfiratun wa ajrun 'azim: for them is forgiveness and a great reward. At-Tabari explains the forgiveness as Allah's pardon of their past sins and His overlooking of them, and the great reward as abundant recompense, which is Paradise; the Muyassar says the same. As-Sa'di separates the two gifts. Forgiveness brings the removal of evil and of what is disliked; the great reward, whose description only Allah knows, brings the presence of what is loved. The first clears away, and the second gives.",
            "bn": "লাহুম মাগফিরাতুন ওয়া আজরুন আযীম: তাদের জন্য আছে মাগফিরাত আর বিরাট পুরস্কার। তাবারীর ব্যাখ্যায় মাগফিরাত মানে আল্লাহ তাদের আগের গুনাহ মাফ করে দেবেন, সেগুলো আর ধরবেন না। আর বিরাট পুরস্কার মানে প্রচুর সওয়াব, অর্থাৎ জান্নাত। মুয়াসসারও একই কথা বলে। সা'দী দুটি দানকে আলাদা করে দেখান। মাগফিরাতে মন্দ আর অপছন্দের জিনিস দূর হয়। আর বিরাট পুরস্কার, যার বিবরণ আল্লাহ ছাড়া কেউ জানে না, তাতে প্রিয় জিনিস হাতে আসে। প্রথমটি সরিয়ে দেয়, দ্বিতীয়টি দান করে।"
          },
          {
            "en": "How far the command reaches after his lifetime is a question the sources answer in different measure. The inner side of the verse is open to every reader either way. Al-Qurtubi and al-Baghawi name the motive as ijlal, reverence, and the commentators describe the heart as tested, made pure and fit for taqwa. A person who notices his voice climbing in an argument he is sure of, and lowers it, practises in a small way the outward habit the verse praises; the inner part is the heart it names.",
            "bn": "তাঁর ইন্তেকালের পর আদেশটি কতদূর পৌঁছায়, সে প্রশ্নে তাফসীরগুলোর উত্তর এক মাপের নয়। তবে আয়াতের ভেতরের দিকটা যেকোনো পাঠকের জন্য খোলা। কুরতুবী ও বাগাভী এর প্রেরণাকে বলেন ইজলাল, অর্থাৎ সম্মান ও আদব। আর মুফাসসিররা অন্তরের বর্ণনা দেন এভাবে: পরীক্ষিত, খাঁটি, তাকওয়ার উপযুক্ত। নিজের নিশ্চিত মত নিয়ে তর্কের সময় কেউ যদি টের পায় গলা চড়ছে, আর তা নামিয়ে আনে, তবে আয়াতে প্রশংসিত বাইরের অভ্যাসটা সে অল্প হলেও চর্চা করল। ভেতরের অংশটা হলো সেই অন্তর, যার কথা আয়াত বলে।"
          }
        ]
      }
    ]
  },
  "49:10": {
    "sections": [
      {
        "h": {
          "en": "A Fact Before a Command",
          "bn": "নির্দেশের আগে একটি সত্য"
        },
        "p": [
          {
            "en": "Innama al-mu'minuna ikhwah: the believers are but brothers. The sentence is built on innama, the particle of restriction, and on a bold word choice: ikhwah is the plural Arabic typically uses for brothers by birth. The Quran takes the strongest bond the language has and declares it the existing relation between all believers. It is stated as a fact, not an aspiration — not that believers should feel brotherly, but that believers are brothers, with everything a brother is owed following from it.",
            "bn": "ইন্নামাল মু'মিনূনা ইখওয়াহ: মুমিনরা তো পরস্পর ভাই। বাক্যটির ভিত দুটি জিনিস। একটি 'ইন্নামা', যা কথাটিকে সীমাবদ্ধ করে দেয়। অন্যটি সাহসী এক শব্দ বাছাই: 'ইখওয়াহ' সেই বহুবচন, আরবিতে সাধারণত যা বলা হয় রক্তের সম্পর্কের ভাইদের বেলায়। ভাষার সবচেয়ে শক্ত বন্ধনটি নিয়ে কুরআন ঘোষণা করছে, সব মুমিনের মধ্যে এই সম্পর্কটাই আছে। কথাটা বলা হয়েছে বাস্তবতা হিসেবে, আশা হিসেবে নয়। মুমিনদের মনে ভাইয়ের মতো টান থাকা উচিত, ব্যাপারটা এমন নয়। মুমিনরা ভাই-ই। আর ভাইয়ের যা যা প্রাপ্য, সবই এখান থেকে আসে।"
          },
          {
            "en": "The command then rides on the fact: fa-aslihu bayna akhawaykum, so set things right between your two brothers — and the dual, your two brothers, is precise. Reconciliation is not only for wars between factions; it reaches down to any two individuals at odds. The verse ends by tying the work to taqwa and to hope: and fear Allah, that you may be shown mercy — as if mercy from above is kept moving by mercy repaired below.",
            "bn": "এরপর সেই বাস্তবতার ওপর দাঁড়িয়ে আসে হুকুম: ফা-আসলিহূ বাইনা আখাওয়াইকুম, অতএব তোমাদের দুই ভাইয়ের মধ্যে মীমাংসা করে দাও। এখানে দ্বিবচনটি, 'তোমাদের দুই ভাই', খুব হিসাব করে বলা। মীমাংসা শুধু দলে দলে লড়াইয়ের জন্য নয়। বিবাদে জড়ানো যেকোনো দুজন মানুষ পর্যন্ত তা নেমে আসে। আয়াত শেষ হয় কাজটিকে তাকওয়া আর আশার সঙ্গে বেঁধে: আর আল্লাহকে ভয় করো, যাতে তোমাদের প্রতি রহম করা হয়। যেন নিচে মানুষের মাঝে রহমত জোড়া লাগালে ওপর থেকে রহমত আসা চালু থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "সূরায় আয়াতটির জায়গা"
        },
        "p": [
          {
            "en": "The verse follows 49:9, which faces the hardest case honestly: two parties of believers actually fighting. Even there the Quran calls both sides believers, orders the community to make peace, to fight the aggressing side until it returns to Allah's command, and then to reconcile with justice. 49:10 supplies the ground for all of it: intervention is not interference, because the quarrelling parties are your brothers; a bystander to a family fracture is not neutral, he is negligent.",
            "bn": "আয়াতটি এসেছে ৪৯:৯ আয়াতের পরে। সেখানে কুরআন সবচেয়ে কঠিন অবস্থাটির কথা খোলাখুলি বলেছে: মুমিনদের দুটি দল সত্যিই লড়াইয়ে নেমেছে। তখনও কুরআন দুই পক্ষকেই মুমিন বলে। মুসলিম সমাজকে হুকুম দেয় মীমাংসা করতে, যে পক্ষ বাড়াবাড়ি করছে সে আল্লাহর হুকুমে ফিরে না আসা পর্যন্ত তার বিরুদ্ধে লড়তে, তারপর ইনসাফের সঙ্গে মিটমাট করে দিতে। ৪৯:১০ এসবের ভিত্তি জোগায়। এখানে মাঝে পড়া মানে অন্যের ব্যাপারে নাক গলানো নয়, কারণ বিবাদে জড়ানো দুই পক্ষ আপনারই ভাই। পরিবারে ভাঙন দেখে যে চুপচাপ দাঁড়িয়ে থাকে, সে নিরপেক্ষ নয়। সে দায়িত্বে গাফিল।"
          },
          {
            "en": "And immediately after, 49:11-12 ban the small solvents that dissolve brotherhood before any fight begins: mockery, insulting nicknames, suspicion, spying, backbiting — the last pictured as eating a dead brother's flesh. The arrangement is a complete policy: 49:9 treats the open wound, 49:10 states the bond, 49:11-12 remove the slow poisons. The surah legislates for brotherhood the way one maintains anything precious: repair, foundation, and prevention.",
            "bn": "আর ঠিক তার পরেই ৪৯:১১-১২ আয়াত সেই ছোট ছোট জিনিসগুলো নিষেধ করে, যেগুলো লড়াই শুরুর আগেই ভ্রাতৃত্বকে ভেতর থেকে ক্ষইয়ে দেয়: ঠাট্টা-বিদ্রূপ, খারাপ নামে ডাকা, কুধারণা, গোয়েন্দাগিরি আর গীবত। গীবতের ছবি আঁকা হয়েছে মৃত ভাইয়ের গোশত খাওয়া হিসেবে। পুরো সাজানোটাই যেন এক পূর্ণ নীতি। ৪৯:৯ খোলা ক্ষতের চিকিৎসা করে, ৪৯:১০ বন্ধনটির কথা ঘোষণা করে, ৪৯:১১-১২ ধীরে ধীরে কাজ করা বিষগুলো সরিয়ে দেয়। দামি যেকোনো জিনিস মানুষ যেভাবে যত্নে রাখে, সূরাটি ভ্রাতৃত্বের জন্য সেভাবেই বিধান দেয়: মেরামত, ভিত্তি আর প্রতিরোধ।"
          }
        ]
      },
      {
        "h": {
          "en": "What Brotherhood Obliges",
          "bn": "ভ্রাতৃত্ব কী দাবি করে"
        },
        "p": [
          {
            "en": "The Prophet ﷺ filled the word with duties. Muslim relates from Abu Hurayrah (RA): do not envy one another, do not inflate prices against one another, do not hate one another, do not turn away from one another, and be, servants of Allah, brothers — the Muslim is the brother of the Muslim; he does not wrong him, nor forsake him, nor despise him. The hadith then points at the chest: taqwa is here. The bond's failures begin as inner states.",
            "bn": "নবী ﷺ এই শব্দটিকে দায়িত্ব দিয়ে ভরে দিয়েছেন। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: তোমরা পরস্পরকে হিংসা কোরো না, একে অন্যকে ঠকাতে দাম চড়িয়ো না, পরস্পরকে ঘৃণা কোরো না, একে অন্যের থেকে মুখ ফিরিয়ে নিয়ো না। হে আল্লাহর বান্দারা, ভাই ভাই হয়ে যাও। মুসলিম মুসলিমের ভাই। সে তার ওপর জুলুম করে না, তাকে বিপদে একা ফেলে যায় না, তাকে তুচ্ছও করে না। এরপর বুকের দিকে ইশারা করে বলা হয়েছে: তাকওয়া এখানে। অর্থাৎ বন্ধনটা ভাঙতে শুরু করে মনের ভেতর থেকেই।"
          },
          {
            "en": "Al-Bukhari relates from Abu Musa (RA): the believer to the believer is like a building, parts of it binding other parts — and the Prophet ﷺ interlaced his fingers. And 3:103 tells the believers to remember the favour: you were enemies, and He joined your hearts, and by His favour you became brothers. Brotherhood is listed among Allah's gifts, not among human achievements — which is why damaging it is treated in the surah with such severity.",
            "bn": "বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: এক মুমিন আরেক মুমিনের জন্য দালানের মতো, যার এক অংশ আরেক অংশকে শক্ত করে ধরে রাখে। এ কথা বলে নবী ﷺ এক হাতের আঙুল আরেক হাতের আঙুলের ফাঁকে ঢুকিয়ে দেখালেন। আর ৩:১০৩ আয়াত মুমিনদের সেই নিয়ামতের কথা মনে করতে বলে: তোমরা ছিলে একে অপরের শত্রু, তিনি তোমাদের অন্তর জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই ভাই হয়ে গেলে। ভ্রাতৃত্বকে গণ্য করা হয়েছে আল্লাহর দানের মধ্যে, মানুষের অর্জনের মধ্যে নয়। এ জন্যই সূরাটি এর ক্ষতি করাকে এত কঠোর চোখে দেখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rank of the Peacemaker",
          "bn": "মীমাংসাকারীর মর্যাদা"
        },
        "p": [
          {
            "en": "Because the bond is Allah's gift, mending it ranks startlingly high. Abu Dawud relates from Abu ad-Darda (RA) that the Prophet ﷺ said: shall I not inform you of a degree better than the rank of fasting, prayer and charity? Setting right what is between people — and the corruption of what is between people is the shaver. At-Tirmidhi's narration adds: I do not say it shaves hair, but it shaves the religion.",
            "bn": "বন্ধনটি যেহেতু আল্লাহর দান, তাই তা জোড়া লাগানোর মর্যাদা অবাক করার মতো উঁচু। আবু দাউদ আবু দারদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমি কি তোমাদের এমন এক মর্তবার কথা বলব না, যা রোজা, নামাজ ও সদকার মর্তবার চেয়েও উত্তম? তা হলো মানুষের মাঝের সম্পর্ক ঠিক করে দেওয়া। আর মানুষের মাঝের সম্পর্ক নষ্ট হওয়াই হলো মুণ্ডনকারী। তিরমিযীর বর্ণনায় আরও আছে: আমি বলছি না, তা চুল কামিয়ে দেয়। বরং তা দ্বীনকে কামিয়ে সাফ করে দেয়।"
          },
          {
            "en": "The permissions granted to peacemaking mark its weight too: the one who conveys good and adds good in order to reconcile people is not counted a liar — al-Bukhari relates it from Umm Kulthum bint Uqbah (RA). Exaggeration is forbidden and backbiting is forbidden, yet the strictness of literal reporting is relaxed for this one purpose. The law itself signals that a repaired bond between believers outweighs conventions it would normally never touch.",
            "bn": "মীমাংসার জন্য শরিয়ত যে ছাড় দিয়েছে, তা থেকেও এর ওজন বোঝা যায়। মানুষের মধ্যে মিল করাতে গিয়ে যে ভালো কথা পৌঁছে দেয়, ভালো কথা বাড়িয়ে বলে, তাকে মিথ্যাবাদী ধরা হয় না। বুখারী এটি উম্মে কুলসুম বিনতে উকবা (রাঃ) থেকে বর্ণনা করেন। অতিরঞ্জন নিষেধ, গীবতও নিষেধ। তবু শুধু এই একটি উদ্দেশ্যে কথা হুবহু পৌঁছানোর কড়াকড়ি শিথিল করা হয়েছে। শরিয়ত নিজেই বুঝিয়ে দিচ্ছে: মুমিনদের মধ্যে ভাঙা বন্ধন জোড়া লাগানোর ওজন এমন সব নিয়মের চেয়েও বেশি, যেগুলোতে সে সাধারণত কখনো হাত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Be Shown Mercy",
          "bn": "যাতে তোমাদের প্রতি রহম করা হয়"
        },
        "p": [
          {
            "en": "The closing clauses discipline the peacemaker. Wa-attaqu Allaha: reconciliation is done with taqwa — justly, as 49:9 demanded, without favouring the stronger side, without burying a right to end a quarrel quickly. La'allakum turhamun: that you may be shown mercy. The commentators hear the correspondence: those who labour to restore mercy between servants stand in the path of mercy from their Master. At-Tirmidhi relates the Prophet's ﷺ words: those who show mercy are shown mercy by the Most Merciful; show mercy to those on earth, and the One above the heaven will show mercy to you.",
            "bn": "আয়াতের শেষ বাক্যগুলো মীমাংসাকারীকে নিয়মে বাঁধে। ওয়াত্তাকুল্লাহ: মীমাংসা করতে হবে তাকওয়া নিয়ে, ৪৯:৯ আয়াতের দাবি মতো ইনসাফের সঙ্গে। শক্তিশালী পক্ষের দিকে ঝুঁকে পড়া চলবে না, তাড়াতাড়ি ঝগড়া মেটাতে গিয়ে কারও হক চাপা দেওয়াও চলবে না। লাআল্লাকুম তুরহামূন: যাতে তোমাদের প্রতি রহম করা হয়। মুফাসসিররা এখানে একটা মিল খেয়াল করেন: বান্দাদের মধ্যে রহমত ফিরিয়ে আনতে যারা খাটে, তারা নিজেরাই মালিকের রহমত পাওয়ার পথে দাঁড়িয়ে যায়। তিরমিযী নবী ﷺ-এর এই কথা বর্ণনা করেন: যারা দয়া করে, পরম দয়াময় তাদের প্রতি দয়া করেন। জমিনে যারা আছে তাদের প্রতি দয়া করো, আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Doing the Verse",
          "bn": "আয়াতটি জীবনে আনা"
        },
        "p": [
          {
            "en": "The verse assigns work to the third party, which is most of us most of the time. Somewhere in every believer's circle two people are not speaking. The verse's claim is that their quarrel is your file, because both are your brothers; the passive hope that it resolves itself is not among the options offered. The method is modest: carry good words in both directions, host the meeting, absorb a little of the blame if it helps, and keep the justice of 49:9 in view throughout.",
            "bn": "আয়াতটি কাজ দিচ্ছে তৃতীয় পক্ষকে, আর বেশির ভাগ সময় আমরা বেশির ভাগ মানুষ সেই তৃতীয় পক্ষই। প্রত্যেক মুমিনের চেনাজানা মহলে কোথাও না কোথাও দুজন মানুষ একে অন্যের সঙ্গে কথা বলছে না। আয়াত বলছে, তাদের ঝগড়াটা আপনারও দায়, কারণ দুজনেই আপনার ভাই। নিজে নিজে মিটে যাবে, এই ভরসায় হাত গুটিয়ে বসে থাকার সুযোগ আয়াত রাখেনি। পদ্ধতিটা সাদামাটা: দুই দিকেই ভালো কথা পৌঁছে দিন, দুজনকে এক জায়গায় বসানোর ব্যবস্থা করুন, কাজে লাগলে দোষের খানিকটা নিজের কাঁধে নিন, আর পুরো সময় ৪৯:৯ আয়াতের ইনসাফ চোখের সামনে রাখুন।"
          },
          {
            "en": "And for one's own quarrels, the Prophet ﷺ set a deadline: it is not lawful for a Muslim to forsake his brother beyond three nights, the two meeting and each turning away — and the better of them is the one who begins with the salam; al-Bukhari relates it from Abu Ayyub (RA). Brotherhood, the verse's fact, outlives every argument; the greeting that reopens it costs one word, and the better man pays it first.",
            "bn": "আর নিজের ঝগড়ার বেলায় নবী ﷺ একটি সময়সীমা বেঁধে দিয়েছেন: কোনো মুসলিমের জন্য তিন রাতের বেশি তার ভাইকে এড়িয়ে চলা বৈধ নয়, এমনভাবে যে দেখা হলে দুজনেই মুখ ফিরিয়ে নেয়। তাদের মধ্যে উত্তম সে, যে আগে সালাম দেয়। বুখারী এটি আবু আইয়ুব (রাঃ) থেকে বর্ণনা করেন। আয়াত যে সত্যটি বলেছে, সেই ভ্রাতৃত্ব যেকোনো তর্কের চেয়ে বেশি দিন টেকে। আবার কথা শুরু করার সালামটার দাম মাত্র একটি শব্দ, আর উত্তম মানুষটিই সে দাম আগে চুকিয়ে দেয়।"
          }
        ]
      }
    ]
  },
  "49:11": {
    "sections": [
      {
        "h": {
          "en": "The Surah That Legislates Manners",
          "bn": "যে সূরা আদব শেখায়"
        },
        "p": [
          {
            "en": "Al-Hujurat is short and almost entirely about how believers handle one another. The verse just before, 49:10, states the bond as a fact: the believers are but brothers. This verse comes immediately after and removes what corrodes that bond in company, and 49:12 comes immediately after this one to deal with what happens behind a person's back. The address is ya ayyuha alladhina amanu — the people warned here are believers, not strangers to faith.",
            "bn": "সূরা আল-হুজুরাত ছোট সূরা, আর তার প্রায় পুরোটাই মুমিনরা একে অন্যের সঙ্গে কেমন আচরণ করবে, তা নিয়ে। ঠিক আগের আয়াত, ৪৯:১০, বন্ধনটিকে বাস্তবতা হিসেবে ঘোষণা করে: মুমিনরা তো পরস্পর ভাই। এই আয়াত তার ঠিক পরে এসে সেসব জিনিস সরিয়ে দেয়, যা লোকজনের সামনেই সেই বন্ধনে ঘুণ ধরায়। আর এর ঠিক পরে ৪৯:১২ আয়াত ধরে পিঠপিছে যা ঘটে, সেটা। সম্বোধন হলো ইয়া আইয়ুহাল্লাযীনা আমানূ। অর্থাৎ যাদের এখানে সতর্ক করা হচ্ছে, তারা মুমিন, ঈমানের বাইরের কেউ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Acts, Each Named",
          "bn": "তিনটি কাজ, প্রত্যেকটির নাম ধরে"
        },
        "p": [
          {
            "en": "The verse forbids three things and names each one. Sukhriyah, from la yaskhar, is ridicule: making a person into the joke, whether by word, imitation or a look. Lamz, from la talmizu, is the direct insult — the jab, the sneer, the cutting remark delivered where it lands. Tanabuz bil-alqab is calling people by names that shame them. Between them they cover the joke, the insult and the label, which is most of how contempt actually travels.",
            "bn": "আয়াতটি তিনটি কাজ নিষেধ করে, আর প্রত্যেকটির নাম ধরে বলে। সুখরিয়াহ, লা ইয়াসখার থেকে, মানে উপহাস: কথা দিয়ে, নকল করে বা চাহনি দিয়ে কাউকে হাসির খোরাক বানানো। লাময, লা তালমিযূ থেকে, মানে মুখের ওপর অপমান: খোঁচা, তাচ্ছিল্যের হাসি, এমন ধারালো কথা যা ঠিক জায়গায় গিয়ে বেঁধে। তানাবুয বিল-আলকাব মানে মানুষকে এমন নামে ডাকা, যাতে সে লজ্জা পায়। তিনটি মিলে ঠাট্টা, অপমান আর তকমা, সবই ধরা পড়ে। অবজ্ঞা আসলে বেশির ভাগ সময় এই তিন পথেই ছড়ায়।"
          },
          {
            "en": "Lamz should not be merged with ghibah. Ghibah is forbidden in the next verse, 49:12, and it is what is said about a person who is not there, pictured as eating the flesh of a dead brother. Lamz belongs to this verse because it happens in the open. Notice also the object: wa la talmizu anfusakum, do not defame yourselves. The commentators read anfusakum as one another, on the ground that the believers are one body, so the insult you throw lands on your own side.",
            "bn": "লাময আর গীবতকে এক করে ফেলা ঠিক নয়। গীবত নিষেধ করা হয়েছে পরের আয়াতে, ৪৯:১২-তে। গীবত হলো এমন কারও সম্পর্কে বলা কথা, যে সেখানে নেই, আর আয়াত একে মৃত ভাইয়ের গোশত খাওয়ার সঙ্গে তুলনা করেছে। লাময এই আয়াতের বিষয়, কারণ তা ঘটে সামনাসামনি। কাদের কথা বলা হচ্ছে, সেটাও লক্ষ করুন: ওয়া লা তালমিযূ আনফুসাকুম, তোমরা নিজেদের কটাক্ষ কোরো না। মুফাসসিররা আনফুসাকুম মানে করেন একে অপরকে। কারণ মুমিনরা এক দেহের মতো, তাই আপনি যে অপমান ছুড়ে দেন, তা এসে পড়ে আপনার নিজের দলের ওপরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Said Twice, for Men and for Women",
          "bn": "দুবার বলা: পুরুষদের ও নারীদের জন্য"
        },
        "p": [
          {
            "en": "The prohibition of ridicule is issued twice. First no qawm is to ridicule another qawm, perhaps they are better than them; then no women are to ridicule other women, perhaps they are better than them. The Quran does not leave the second case to be inferred from the first. Mockery inside a group of women and mockery inside a group of men are named separately, and each is given the same reason, in the same words.",
            "bn": "উপহাসের নিষেধ এসেছে দুবার। প্রথমে: কোনো কাওম যেন অন্য কাওমকে উপহাস না করে, হতে পারে তারা এদের চেয়ে উত্তম। তারপর: নারীরাও যেন অন্য নারীদের উপহাস না করে, হতে পারে তারা এদের চেয়ে উত্তম। প্রথমটি থেকে দ্বিতীয়টি আন্দাজ করে নেওয়ার ভার কুরআন পাঠকের ওপর ছাড়েনি। নারীদের মধ্যে ঠাট্টা আর পুরুষদের মধ্যে ঠাট্টা, দুটোর কথাই আলাদা করে বলা হয়েছে, আর দুটোর বেলাতেই একই কারণ, একই শব্দে।"
          },
          {
            "en": "The reason given is worth weighing. It is not that the person mocked might be offended, but that he might be better — 'asa an yakunu khayran minhum. The scale being used is Allah's, and we cannot read it. Muslim relates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. Mockery is almost always aimed at exactly what is not being weighed.",
            "bn": "দেওয়া কারণটি ভেবে দেখার মতো। কারণটা এই নয় যে যাকে নিয়ে ঠাট্টা হচ্ছে সে কষ্ট পেতে পারে। কারণ হলো, সে হয়তো উত্তম: আসা আন ইয়াকূনূ খাইরাম মিনহুম। মাপকাঠিটা আল্লাহর, আর সে মাপ আমরা পড়তে পারি না। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে। ঠাট্টা প্রায় সবসময় ঠিক সেই জিনিসকেই নিশানা করে, যার ওজন আল্লাহর পাল্লায় ধরাই হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Names of Banu Salamah",
          "bn": "বনু সালামার নামগুলো"
        },
        "p": [
          {
            "en": "Abu Dawud and at-Tirmidhi relate from Abu Jabirah ibn ad-Dahhak that this verse came down about them, the Banu Salamah: when the Prophet ﷺ reached Madinah, a man among them would have two or three names, and if the Prophet ﷺ called him by one they would say he dislikes that name. At-Tirmidhi graded the report hasan sahih. Not every added name is banned, though. Al-Bukhari relates from Sahl ibn Sa'd (RA) that no name was dearer to Ali (RA) than Abu Turab, which the Prophet ﷺ had given him.",
            "bn": "আবু দাউদ ও তিরমিযী আবু জাবীরা ইবনুদ দাহহাক থেকে বর্ণনা করেন, এই আয়াত তাঁদের, অর্থাৎ বনু সালামার ব্যাপারে নাজিল হয়েছিল। নবী ﷺ যখন মদীনায় এলেন, তখন তাঁদের একেকজনের দুই-তিনটি করে নাম ছিল। নবী ﷺ কাউকে এর কোনো একটি নামে ডাকলে লোকেরা বলত, এ নামটা তার অপছন্দ। তিরমিযী বর্ণনাটিকে হাসান সহীহ বলেছেন। তবে বাড়তি সব নামই নিষেধ নয়। বুখারী সাহল ইবনে সা'দ (রাঃ) থেকে বর্ণনা করেন, আলী (রাঃ)-এর কাছে আবু তুরাব নামের চেয়ে প্রিয় কোনো নাম ছিল না, আর নামটি নবী ﷺ-ই তাঁকে দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wretched Is the Name",
          "bn": "কত মন্দ সেই নাম"
        },
        "p": [
          {
            "en": "Then the verdict: bi'sa al-ismu al-fusuqu ba'da al-iman — wretched is the name of disobedience after faith. Commentators read this both as how evil it is that a believer should be labelled with a name of sin, and as how evil it is that a believer should earn for himself the reputation of fisq by doing these things. The verse then ends harder than its subject seems to warrant: whoever does not repent, those are the wrongdoers. A joke has been placed under the heading of zulm.",
            "bn": "এরপর রায়: বি'সাল ইসমুল ফুসূকু বা'দাল ঈমান, ঈমানের পর ফাসিকির নাম কতই না মন্দ! মুফাসসিররা কথাটি দুভাবেই পড়েন। এক, কোনো মুমিনকে গুনাহের নামে ডাকা কত মন্দ। দুই, এসব কাজ করে কোনো মুমিনের নিজের গায়ে ফাসিকির দুর্নাম লাগানো কত মন্দ। তারপর আয়াতটি এমন কঠিন কথায় শেষ হয়, বিষয় দেখে যতটা আশা করা যায় তার চেয়েও কঠিন: যারা তওবা করে না, তারাই জালিম। একটা ঠাট্টাকে জুলুমের খাতায় তুলে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Breaks Now",
          "bn": "আজকের ভাঙন কোথায়"
        },
        "p": [
          {
            "en": "Most of this now happens in writing, in groups, and with an audience that laughs without typing. The three acts survive intact: the imitation clip is sukhriyah, the cutting reply is lamz, the label that follows a person for years is tanabuz. The verse offers one test that costs nothing to apply. Before the remark goes out, ask whether the person it targets might stand better with Allah than you do — and notice that you have no way of knowing.",
            "bn": "এসবের বেশির ভাগ এখন ঘটে লেখায়, গ্রুপ চ্যাটে, এমন দর্শকদের সামনে যারা কিছু না লিখেই হাসে। তিনটি কাজই অবিকল টিকে আছে: কাউকে নকল করে বানানো ক্লিপ হলো সুখরিয়াহ, খোঁচা দেওয়া জবাব হলো লাময, আর যে তকমা বছরের পর বছর মানুষের পিছু ছাড়ে না, সেটা তানাবুয। আয়াত এমন একটা পরীক্ষা শিখিয়ে দেয়, যাতে কোনো খরচ নেই। মন্তব্যটা পাঠানোর আগে নিজেকে জিজ্ঞেস করুন, যাকে নিয়ে বলছেন, সে কি আল্লাহর কাছে আপনার চেয়ে ভালো অবস্থানে আছে? তারপর খেয়াল করুন, সেটা জানার কোনো উপায় আপনার নেই।"
          }
        ]
      }
    ]
  },
  "49:12-13": {
    "sections": [
      {
        "h": {
          "en": "A Surah of Social Repair",
          "bn": "সামাজিক সংস্কারের সূরা"
        },
        "p": [
          {
            "en": "Surah al-Hujurat is a short manual for a community's life together. It has already commanded verifying news before acting on it in 49:6, reconciling fighting believers in 49:9, and, in 49:11, it has banned mockery, insult and wounding nicknames. Then 49:12 moves indoors. Having cleared the public square of open contempt, the surah pursues contempt into its hiding places: the assumption, the investigation, and the conversation behind a back.",
            "bn": "সূরা আল-হুজুরাত মুসলিম সমাজের একসঙ্গে বসবাসের ছোট্ট নির্দেশিকা। এর আগেই সূরাটি ৪৯:৬ আয়াতে হুকুম দিয়েছে, কোনো খবর পেলে তা যাচাই না করে কিছু করা যাবে না। ৪৯:৯ আয়াতে বলেছে, লড়াইয়ে জড়ানো মুমিনদের মধ্যে মীমাংসা করে দিতে। আর ৪৯:১১ আয়াতে নিষেধ করেছে ঠাট্টা, অপমান আর মনে আঘাত দেওয়া ডাকনাম। তারপর ৪৯:১২ ঢোকে ঘরের ভেতরে। প্রকাশ্য জায়গা থেকে খোলাখুলি অবজ্ঞা সাফ করার পর সূরা অবজ্ঞাকে তাড়া করে তার লুকানোর জায়গাগুলোতে: মনের আন্দাজে, গোপন খোঁজাখুঁজিতে, আর পিঠপিছের আলাপে।"
          },
          {
            "en": "The order is diagnostic. Backbiting is rarely the first sin; it is fed by spying, and spying is fed by suspicion. So the verse cuts the chain at its first link: ijtanibu kathiran min az-zann — avoid much of assumption, for some assumption is sin. Not all of it: the verse legislates precisely. What is forbidden is the baseless assumption of evil about people whose outward state is sound.",
            "bn": "এই ক্রমটাই রোগ চিনিয়ে দেয়। গীবত সাধারণত প্রথম গুনাহ নয়। তাকে খোরাক জোগায় গোয়েন্দাগিরি, আর গোয়েন্দাগিরিকে খোরাক জোগায় সন্দেহ। তাই আয়াত শিকলটা কাটে প্রথম কড়াতেই: ইজতানিবূ কাসীরাম মিনায যান্ন, অনেক ধারণা থেকে বেঁচে থাকো, কারণ কোনো কোনো ধারণা গুনাহ। সব ধারণা নয়, আয়াতের বিধান খুব মাপা। নিষেধ হলো এমন মানুষ সম্পর্কে ভিত্তিহীন খারাপ ধারণা করা, যার বাইরের অবস্থা ভালো।"
          }
        ]
      },
      {
        "h": {
          "en": "Suspicion and Spying",
          "bn": "সন্দেহ ও গোয়েন্দাগিরি"
        },
        "p": [
          {
            "en": "Wa la tajassasu — and do not spy. Suspicion left alive goes looking for evidence; tajassus is suspicion with a search warrant it wrote for itself. The command protects the cover Allah Himself has left over people's faults. The commentators note that the community is instructed to deal with what people show, and to leave what they conceal to their Lord — the opposite of a culture of surveillance, exposure, and files kept on neighbours.",
            "bn": "ওয়া লা তাজাসসাসূ: আর কারও গোপন দোষ খুঁজে বেড়িয়ো না। সন্দেহকে মনে পুষে রাখলে সে প্রমাণ খুঁজতে বের হয়। তাজাসসুস হলো এমন সন্দেহ, যে নিজের হাতে নিজের তল্লাশির পরোয়ানা লিখে নিয়েছে। এই নিষেধ রক্ষা করে সেই পর্দা, যা আল্লাহ নিজেই মানুষের দোষের ওপর টেনে রেখেছেন। মুফাসসিররা খেয়াল করেন, মুসলিম সমাজকে বলা হয়েছে মানুষ যা প্রকাশ করে তা দেখেই আচরণ করতে, আর যা গোপন রাখে তা তার রবের হাতে ছেড়ে দিতে। নজরদারি, দোষ ফাঁস করা আর প্রতিবেশীর নামে খাতা খুলে রাখার সংস্কৃতি এর ঠিক উল্টো।"
          },
          {
            "en": "The three sins also share one convenience: each is committed in the target's absence. The suspected, the spied-upon and the backbitten cannot answer, because they are not there. That is exactly what the verse's famous image will seize on — and it is why these sins feel so cheap to commit. No confrontation, no risk, no reply. The surah that banned insulting a believer to his face now bans the coward's versions of the same contempt.",
            "bn": "এই তিন গুনাহের মধ্যে আরেকটা মিল আছে, যা এগুলোকে সহজ করে দেয়: প্রতিটিই ঘটে যাকে নিয়ে, তার অনুপস্থিতিতে। যাকে সন্দেহ করা হয়, যার পেছনে গোয়েন্দাগিরি চলে, যার গীবত হয়, কেউই জবাব দিতে পারে না, কারণ সে সেখানে নেই। আয়াতের বিখ্যাত উপমাটি ঠিক এ জায়গাটাই ধরবে। আর এ কারণেই এই গুনাহগুলো এত সস্তা মনে হয়। মুখোমুখি হতে হয় না, ঝুঁকি নেই, কেউ জবাবও দেয় না। যে সূরা মুমিনকে মুখের ওপর অপমান করা নিষেধ করেছে, সে এখন নিষেধ করছে একই অবজ্ঞার কাপুরুষোচিত রূপগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Flesh of a Dead Brother",
          "bn": "মৃত ভাইয়ের গোশত"
        },
        "p": [
          {
            "en": "Would one of you love to eat the flesh of his dead brother? You would detest it. The Prophet ﷺ defined the sin in the hadith Muslim relates: mentioning your brother with what he dislikes; if what you say is true, you have backbitten him, and if it is false, you have slandered him. The definition removes the standard excuse before it is offered — but it is true is precisely what makes it ghibah.",
            "bn": "তোমাদের কেউ কি তার মৃত ভাইয়ের গোশত খেতে পছন্দ করবে? তোমরা তো তা ঘৃণাই করো। মুসলিমের বর্ণিত হাদিসে নবী ﷺ গুনাহটির সংজ্ঞা দিয়েছেন: তোমার ভাই সম্পর্কে এমন কথা বলা, যা সে অপছন্দ করে। তুমি যা বলছ তা যদি সত্য হয়, তবে তুমি তার গীবত করলে। আর যদি মিথ্যা হয়, তবে তাকে অপবাদ দিলে। প্রচলিত অজুহাতটা মুখে আসার আগেই এই সংজ্ঞা তা বাতিল করে দেয়। 'কিন্তু কথাটা তো সত্যি', ঠিক এ কারণেই তো সেটা গীবত।"
          },
          {
            "en": "The image works because it is exact. The absent person is like the dead: unable to defend himself. His honour is his flesh; the gossip session is a meal, shared and even enjoyed. The verse makes the ugliness of a normalised habit suddenly visible, then adds fa-karihtumuh — you already detest it. The moral sense needed is present in every hearer; the verse only connects it to the act it had excused.",
            "bn": "উপমাটা এত কাজে লাগে, কারণ তা একদম নিখুঁত। যে মানুষ উপস্থিত নেই, সে মৃতের মতো: নিজেকে বাঁচাতে পারে না। তার সম্মানই তার গোশত। আর গীবতের আড্ডা যেন এক ভোজ, সবাই মিলে খাওয়া, এমনকি মজা করে খাওয়া। যে অভ্যাস গা-সওয়া হয়ে গেছে, আয়াত হঠাৎ তার কদর্য চেহারা চোখের সামনে এনে দেয়। তারপর যোগ করে: ফা-কারিহতুমূহ, তোমরা তো তা ঘৃণাই করো। যে নৈতিক বোধ দরকার, তা প্রত্যেক শ্রোতার মধ্যেই আছে। আয়াত শুধু সেই বোধকে সেই কাজের সঙ্গে জুড়ে দেয়, যাকে সে এতদিন ছাড় দিয়ে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Origin, Many Peoples",
          "bn": "এক উৎস, বহু জাতি"
        },
        "p": [
          {
            "en": "49:13 widens the address from the believers to everyone: ya ayyuhan-nas, O mankind. We created you from one male and one female — every claimed superiority of blood collapses at the shared parents — and made you peoples and tribes li-ta'arafu, that you may know one another. Difference exists for acquaintance, not for ranking. Nation and tribe are given the status of a name and an address: useful for meeting, useless for boasting.",
            "bn": "৪৯:১৩ আয়াতে সম্বোধন মুমিনদের ছাড়িয়ে সবার দিকে যায়: ইয়া আইয়ুহান নাস, হে মানুষ। আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে। সবার বাবা-মা যখন একই, তখন রক্তের জোরে বড় হওয়ার সব দাবি সেখানেই ভেঙে পড়ে। আর তোমাদের বানিয়েছি নানা জাতি ও গোত্র, লি-তাআরাফূ, যাতে তোমরা একে অপরকে চিনতে পারো। ভিন্নতা আছে চেনাজানার জন্য, ছোট-বড় মাপার জন্য নয়। জাতি আর গোত্রকে দেওয়া হয়েছে নাম আর ঠিকানার মর্যাদা: পরিচয়ের কাজে লাগে, বড়াইয়ের কাজে লাগে না।"
          },
          {
            "en": "Then the verse relocates nobility entirely: the most noble of you with Allah is the most God-conscious of you. And since the verse ends inna Allaha alimun khabir — He is Knowing, Acquainted — the new ranking is unmeasurable by us. Taqwa sits in hearts only He reads. The verse thus abolishes not just racism but the whole project of publicly ranking souls; the true league table exists, and no human being holds a copy.",
            "bn": "তারপর আয়াত মর্যাদার ঠিকানাই পুরোপুরি বদলে দেয়: আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে, যে তোমাদের মধ্যে সবচেয়ে বেশি তাকওয়াবান। আর আয়াত শেষ হয় ইন্নাল্লাহা আলীমুন খাবীর দিয়ে, তিনি সব জানেন, সব খবর রাখেন। তাই নতুন এই মাপে কে কোথায়, আমরা মাপতে পারি না। তাকওয়া থাকে অন্তরে, আর অন্তর কেবল তিনিই পড়েন। ফলে আয়াতটি শুধু বর্ণবাদ নয়, প্রকাশ্যে মানুষের মান ঠিক করে ছোট-বড় সাজানোর পুরো চেষ্টাটাই বাতিল করে দেয়। আসল তালিকা ঠিকই আছে, কিন্তু তার কোনো কপি কোনো মানুষের হাতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Farewell Declaration",
          "bn": "বিদায় হজের ঘোষণা"
        },
        "p": [
          {
            "en": "The Prophet ﷺ preached this verse's content to the largest audience of his life. In the sermon of the farewell pilgrimage days he ﷺ declared, as Ahmad relates with a sound chain: no Arab has superiority over a non-Arab, nor a non-Arab over an Arab, nor red — the light-skinned — over black, nor black over red, except by taqwa. The verse and the sermon together close the door that lineage-pride, the boast of jahiliyyah, keeps trying to reopen.",
            "bn": "নবী ﷺ এই আয়াতের কথাগুলো শুনিয়েছেন তাঁর জীবনের সবচেয়ে বড় সমাবেশে। বিদায় হজের দিনগুলোর খুতবায় তিনি ﷺ ঘোষণা করেন, যা ইমাম আহমাদ সহীহ সনদে বর্ণনা করেছেন: অনারবের ওপর আরবের কোনো শ্রেষ্ঠত্ব নেই, আরবের ওপর অনারবেরও নেই। লাল, অর্থাৎ ফর্সা মানুষের কালোর ওপর কোনো শ্রেষ্ঠত্ব নেই, কালোরও নেই লালের ওপর। শ্রেষ্ঠত্ব কেবল তাকওয়ায়। আয়াত আর খুতবা মিলে সেই দরজাটা বন্ধ করে দেয়, যা বংশের অহংকার, অর্থাৎ জাহিলিয়াতের বড়াই, বারবার খুলতে চায়।"
          },
          {
            "en": "Living the two verses means policing one small organ and one large instinct. The tongue: no relaying of the absent one's faults, and 104:1 pronounces woe upon every habitual slanderer and fault-hunter. The instinct: the quiet conviction that our people are inherently better. Both verses converge on the same discipline — treat the concealed as Allah's business and the different as a person to know, and judge no one's rank, including your own.",
            "bn": "আয়াত দুটি মেনে চলা মানে একটি ছোট অঙ্গ আর একটি বড় প্রবৃত্তিকে পাহারায় রাখা। ছোট অঙ্গটি জিভ: যে উপস্থিত নেই, তার দোষ আর মুখে মুখে ছড়ানো নয়। ১০৪:১ আয়াত তো প্রত্যেক অভ্যাসী নিন্দুক আর দোষ খুঁজে বেড়ানো লোকের জন্য ধ্বংস ঘোষণা করেছে। বড় প্রবৃত্তিটি হলো মনের ভেতরের চাপা বিশ্বাস যে আমাদের লোকেরাই জন্ম থেকে ভালো। দুটি আয়াতই একই শিক্ষায় এসে মেলে: যা গোপন, তা আল্লাহর ব্যাপার বলে মানুন। যে আলাদা, তাকে চেনার মতো মানুষ হিসেবে দেখুন। আর কারও মর্যাদার রায় দেবেন না, নিজেরও না।"
          }
        ]
      }
    ]
  }
});
