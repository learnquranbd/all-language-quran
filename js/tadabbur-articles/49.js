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
  "49:6": {
    "sections": [
      {
        "h": {
          "en": "From His Chambers to the News",
          "bn": "হুজরার দরজা থেকে খবরের দিকে"
        },
        "p": [
          {
            "en": "Surah al-Hujurat opens with manners owed to Allah and His Messenger ﷺ: do not put yourselves ahead of them (49:1), do not raise your voices over his (49:2), and do not call him from behind the chambers (49:4 and 49:5). Then the same call, O you who have believed, turns to something every community handles daily: news. If a fasiq comes to you with a report, make it clear. The next verse keeps the thread, reminding them that the Messenger of Allah is among them.",
            "bn": "সূরা হুজুরাত শুরু হয় আল্লাহ ও তাঁর রসূল ﷺ-এর প্রতি আদবের কথা দিয়ে। তাঁদের আগে বেড়ে যেয়ো না (৪৯:১), নবীর আওয়াজের উপর আওয়াজ তুলো না (৪৯:২), হুজরার বাইরে থেকে তাঁকে ডেকো না (৪৯:৪ ও ৪৯:৫)। তারপর সেই একই ডাক, হে মু’মিনগণ, এবার এমন এক বিষয়ে ফেরে, যা প্রতিটি সমাজ রোজ সামলায়: খবর। কোনো ফাসিক তোমাদের কাছে খবর নিয়ে এলে তা পরিষ্কার করে নাও। পরের আয়াতও একই সুতো ধরে রাখে। মনে করিয়ে দেয়, আল্লাহর রসূল তাদের মাঝেই আছেন।"
          },
          {
            "en": "The Muyassar puts the verse plainly. O you who believed Allah and His Messenger and acted by His law: if a fasiq brings you a report, make sure of it before you believe it and before you pass it on, until you know it is sound, for fear that you strike an innocent people with a wrong done by you, and then regret it. Two acts are named there, believing and passing on, and the verse asks for a pause before each of them.",
            "bn": "মুয়াসসার আয়াতটিকে সহজ কথায় বলে দেয়। হে যারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনেছ আর তাঁর শরীয়ত অনুযায়ী আমল করেছ: কোনো ফাসিক খবর আনলে তা বিশ্বাস করার আগে, অন্যকে জানানোর আগে যাচাই করে নাও, যতক্ষণ না জানতে পারো সেটা সঠিক। ভয় এই যে, নিজেদের অন্যায়ে নিরপরাধ কোনো সম্প্রদায়কে আঘাত করে বসবে, তারপর অনুতাপ করবে। এখানে দুটি কাজের নাম আছে: বিশ্বাস করা আর ছড়িয়ে দেওয়া। দুটির আগেই আয়াত একটু থামতে বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Make It Clear, Hold Firm",
          "bn": "স্পষ্ট করো, স্থির থাকো"
        },
        "p": [
          {
            "en": "The command has two readings, and at-Tabari records both. The generality of the readers of Madinah read fa-tathabbatu, hold firm, with the letter tha, and he notes that it is reported to be dotted that way in the codex of 'Abdullah. Others read fa-tabayyanu, make it clear, with the letter ba. He explains the second as: give it time until you know it is sound, and do not hurry to accept it. That, he says, is also the meaning of fa-tathabbatu.",
            "bn": "আদেশটির দুটি কিরাআত আছে, তাবারী দুটোই উল্লেখ করেন। মদীনার অধিকাংশ কারী পড়তেন ফাতাছাব্বাতূ, অর্থাৎ স্থির থাকো, ছা অক্ষর দিয়ে। তিনি জানান, আবদুল্লাহর মুসহাফে শব্দটি এভাবেই ছা-এর নুকতা দিয়ে লেখা ছিল বলে উল্লেখ আছে। অন্যরা পড়তেন ফাতাবাইয়ানূ, অর্থাৎ স্পষ্ট করে নাও, বা অক্ষর দিয়ে। দ্বিতীয়টির ব্যাখ্যা তাঁর ভাষায়: সময় নাও, যতক্ষণ না জানতে পারো খবরটা সঠিক। গ্রহণ করতে তাড়াহুড়ো করো না। তিনি বলেন, ফাতাছাব্বাতূ-রও অর্থ এটাই।"
          },
          {
            "en": "His verdict on the pair is direct: they are two well-known readings, close in meaning, and whichever of them a reciter reads, he is right. Al-Qurtubi names different readers. In his account Hamzah and al-Kisa'i read fa-tathabbatu, from tathabbut, and the rest read fa-tabayyanu, from tabyin. Each is reported here as he gives it. On what the command asks of the listener, at-Tabari has already said the two readings come to nearly the same thing.",
            "bn": "দুই কিরাআত নিয়ে তাঁর রায় সোজাসাপ্টা। দুটোই সুপরিচিত কিরাআত, অর্থ কাছাকাছি, যেকোনোটি পড়লেই পাঠক সঠিক। কুরতুবী অবশ্য ভিন্ন কারীদের নাম বলেন। তাঁর বর্ণনায় হামযা ও কিসাঈ পড়েছেন ফাতাছাব্বাতূ, তাছাব্বুত থেকে, আর বাকিরা পড়েছেন ফাতাবাইয়ানূ, তাবয়ীন থেকে। এখানে প্রত্যেকের কথা তাঁর মতো করেই রাখা হলো। আর শ্রোতার কাছে আদেশটা কী চায়, সে প্রশ্নে তাবারী তো আগেই বলেছেন, দুই কিরাআতের অর্থ প্রায় এক।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Jassas, draws out the sense of tathabbatu: do not rush into action; be steady and stand firm where you are; do not be easily moved or shaken; wait until the report is confirmed by other, independent sources. The two readings describe one discipline from two sides. Tabayyun is the work of finding out what actually happened. Tathabbut is the self-restraint that keeps a person from acting before that work is finished.",
            "bn": "মাআরিফুল কুরআন জাসসাসের বরাতে তাছাব্বুতের অর্থ খুলে বলে। কাজে ঝাঁপিয়ে পড়ো না। স্থির হও, নিজের জায়গায় অটল থাকো। সহজে নড়ে যেয়ো না, টলে যেয়ো না। অপেক্ষা করো, যতক্ষণ না অন্য স্বাধীন সূত্র থেকে খবরটা নিশ্চিত হয়। দুই কিরাআত মিলিয়ে দেখলে একই অনুশাসন দুই দিক থেকে দেখা যায়। তাবাইয়ুন হলো আসলে কী ঘটেছে তা খুঁজে বের করার কাজ। তাছাব্বুত হলো সেই সংযম, যা কাজটা শেষ হওয়ার আগে মানুষকে পদক্ষেপ নিতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Report Waits",
          "bn": "কার খবর অপেক্ষায় থাকে"
        },
        "p": [
          {
            "en": "Al-Baghawi glosses bi-naba' simply as bi-khabar, with a report. The weight falls on the bearer, the fasiq, and al-Qurtubi collects what earlier scholars said the word means. Ibn Zayd, Muqatil and Sahl ibn 'Abdullah said the fasiq is the liar. Abu al-Hasan al-Warraq said he is the one who commits sin openly. Ibn Tahir said he is the one who feels no shame before Allah. The three answers differ in scope, but each describes a person whose word cannot simply be taken at face value.",
            "bn": "বাগাভী বিনাবাইন শব্দের ব্যাখ্যা দেন সংক্ষেপে: বিখাবারিন, অর্থাৎ একটা খবর নিয়ে। মূল ভার পড়ে খবরবাহকের উপর, অর্থাৎ ফাসিকের উপর। শব্দটির অর্থ নিয়ে আগের আলেমরা কী বলেছেন, কুরতুবী তা একত্র করেন। ইবন যায়দ, মুকাতিল ও সাহল ইবন আবদুল্লাহর মতে ফাসিক মানে মিথ্যাবাদী। আবুল হাসান আল-ওয়াররাক বলেন, যে প্রকাশ্যে গুনাহ করে। ইবন তাহির বলেন, যে আল্লাহকে লজ্জা করে না। তিনটি উত্তরের পরিধি আলাদা। তবে প্রতিটিই এমন মানুষের কথা বলে, যার কথা চোখ বুজে মেনে নেওয়া যায় না।"
          },
          {
            "en": "As-Sa'di counts the verse among the manners that people of understanding are to take on and practise. When a fasiq tells them something, they are to make sure of it and not take it bare. To treat his word as the word of a truthful, upright person, and to rule by it, puts lives and property in danger without right, and that is what brings regret. The duty, he says, is verification: if the evidence and surrounding signs show it is true, act on it; if they show it is false, reject it.",
            "bn": "সা'দী আয়াতটিকে সেই আদবগুলোর মধ্যে গণ্য করেন, যা বুদ্ধিমান মানুষের আয়ত্ত করা ও কাজে লাগানো উচিত। কোনো ফাসিক কিছু জানালে তা যাচাই করতে হবে, যেমন এসেছে তেমনই মেনে নেওয়া চলবে না। তাঁর মতে ফাসিকের খবরকে সত্যবাদী, ন্যায়নিষ্ঠ মানুষের খবরের মর্যাদা দিয়ে সে অনুযায়ী ফয়সালা করলে অন্যায়ভাবে প্রাণ ও সম্পদ নষ্ট হতে পারে। অনুতাপের কারণ সেটাই। তিনি বলেন, ওয়াজিব হলো যাচাই করা। প্রমাণ ও আলামত যদি সত্যের দিকে ইঙ্গিত করে, তবে মেনে নিয়ে আমল করো। যদি মিথ্যার দিকে ইঙ্গিত করে, তবে প্রত্যাখ্যান করো।"
          },
          {
            "en": "From this he draws a three-part rule. The report of the truthful is accepted, the report of the liar is rejected, and the report of the fasiq is suspended until the evidence decides it. That is why, he adds, the early Muslims accepted the narrations of many men from a rebel group who were known for truthfulness, even though they counted them as fasiq. For as-Sa'di the verse says to hold a report until it can be weighed, not to throw it away.",
            "bn": "এখান থেকে তিনি তিন ভাগের একটি নিয়ম বের করেন। সত্যবাদীর খবর গ্রহণযোগ্য, মিথ্যাবাদীর খবর প্রত্যাখ্যাত, আর ফাসিকের খবর স্থগিত থাকবে, যতক্ষণ না প্রমাণ ফয়সালা দেয়। তিনি যোগ করেন, এ কারণেই সালাফ এক বিদ্রোহী দলের এমন অনেকের বর্ণনা গ্রহণ করতেন, যারা সত্যবাদিতার জন্য পরিচিত ছিল, যদিও তাঁরা তাদের ফাসিক মনে করতেন। সা'দীর কাছে আয়াতের নির্দেশ খবর ছুড়ে ফেলা নয়, ওজন করা না যাওয়া পর্যন্ত ধরে রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Zakat That Never Left",
          "bn": "যে যাকাত আর আনা হয়নি"
        },
        "p": [
          {
            "en": "The commentators connect the verse with an episode, and they introduce it with care. At-Tabari writes that it was mentioned that the verse came down about al-Walid ibn 'Uqbah ibn Abi Mu'ayt; al-Qurtubi opens with it is said. Ibn Kathir notes that many commentators mention it, that it is reported by several routes, and that among the best of them is a report in Imam Ahmad's Musnad from al-Harith ibn Dirar, chief of Banu al-Mustaliq and father of Juwayriyah, Mother of the Believers. None of the fetched tafsirs grades these chains further.",
            "bn": "মুফাসসিরগণ আয়াতটিকে একটি ঘটনার সঙ্গে যুক্ত করেন, আর তা আনেন সাবধানে। তাবারী লেখেন, উল্লেখ আছে যে আয়াতটি ওয়ালীদ ইবন উকবা ইবন আবী মুআইতের ব্যাপারে নাযিল হয়েছিল। কুরতুবী শুরু করেন 'বলা হয়' দিয়ে। ইবন কাসীর জানান, বহু মুফাসসির এটি উল্লেখ করেছেন, কয়েকটি সূত্রে এটি বর্ণিত, আর সেগুলোর মধ্যে উত্তম একটি হলো ইমাম আহমাদের মুসনাদে হারিস ইবন দিরারের বর্ণনা। হারিস ছিলেন বনু মুসতালিকের নেতা, উম্মুল মু’মিনীন জুওয়াইরিয়া (রাঃ)-এর পিতা। যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ সনদগুলোর আর কোনো মান নির্ণয় করেনি।"
          },
          {
            "en": "In Ahmad's report al-Harith accepted Islam and zakat and offered to collect it from those of his people who responded, asking that a collector be sent at an agreed time. He gathered it, but no one came, and he feared the delay meant displeasure from Allah and His Messenger. He set out for Madinah with the leaders of his people. Al-Walid had been sent, but partway he grew afraid, turned back, and reported that al-Harith had withheld the zakat and wanted to kill him.",
            "bn": "আহমাদের বর্ণনায় হারিস ইসলাম ও যাকাত দুটোই গ্রহণ করেন। প্রস্তাব দেন, তাঁর সম্প্রদায়ের যারা সাড়া দেবে, তিনি তাদের যাকাত জমা করবেন। একটা নির্ধারিত সময়ে যেন আদায়কারী পাঠানো হয়। তিনি যাকাত জমা করলেন, কিন্তু কেউ এল না। তাঁর ভয় হলো, এই দেরি হয়তো আল্লাহ ও তাঁর রসূলের অসন্তুষ্টির লক্ষণ। তাই সম্প্রদায়ের নেতাদের নিয়ে তিনি মদীনার পথে রওনা দিলেন। ওদিকে ওয়ালীদকে পাঠানো হয়েছিল। কিন্তু পথের মাঝে তিনি ভয় পেয়ে ফিরে আসেন এবং জানান, হারিস যাকাত দেননি আর তাঁকে হত্যা করতে চেয়েছেন।"
          },
          {
            "en": "A detachment was sent toward al-Harith and met him on the road outside Madinah. Told why they had come, he swore by the One who sent Muhammad with the truth that he had never seen al-Walid, nor had al-Walid come to him. Before the Prophet ﷺ he repeated the oath and explained that he had come only because the envoy was late and he feared displeasure. Al-Harith says the verse then came down. Ibn Kathir adds that at-Tabarani names him al-Harith ibn Sirar, and corrects it to Dirar.",
            "bn": "হারিসের দিকে একটি দল পাঠানো হলো, মদীনার বাইরে পথে তাদের সঙ্গে তাঁর দেখা হলো। কেন এসেছে শুনে তিনি কসম খেলেন সেই সত্তার নামে, যিনি মুহাম্মাদকে সত্য দিয়ে পাঠিয়েছেন: ওয়ালীদকে তিনি দেখেননি, ওয়ালীদ তাঁর কাছে যাননি। নবী ﷺ-এর সামনেও তিনি একই কসম খেলেন। বললেন, দূত দেরি করায় অসন্তুষ্টির ভয়েই তিনি এসেছেন। হারিস বলেন, তখনই আয়াতটি নাযিল হয়। ইবন কাসীর যোগ করেন, তাবারানী তাঁর নাম লিখেছেন হারিস ইবন সিরার, আর সঠিক নাম হলো দিরার।"
          },
          {
            "en": "Other reports, which at-Tabari gives from Ibn 'Abbas, Umm Salamah, Mujahid, Qatadah and Yazid ibn Ruman, tell it differently: the tribe came out to meet the envoy, gladly in some versions, and he turned back without collecting anything. Umm Salamah's report says Satan suggested to him that they meant to kill him. Al-Baghawi says there had been enmity between him and them before Islam. In Qatadah's account Khalid ibn al-Walid was sent with orders to verify and not hurry, and his scouts heard their call to prayer.",
            "bn": "তাবারী ইবন আব্বাস, উম্মে সালামা, মুজাহিদ, কাতাদা ও ইয়াযীদ ইবন রূমান থেকে আরও কিছু বর্ণনা আনেন, সেগুলোর বিবরণ আলাদা। সেখানে গোত্রের লোকেরা দূতকে অভ্যর্থনা জানাতে বেরিয়ে আসে, কোনো কোনো বর্ণনায় খুশি মনে। আর তিনি কিছু না নিয়েই ফিরে যান। উম্মে সালামার বর্ণনায় আছে, শয়তান তাঁর মনে কুমন্ত্রণা দিয়েছিল যে তারা তাঁকে হত্যা করতে চায়। বাগাভী বলেন, জাহিলী যুগে তাঁর আর তাদের মধ্যে শত্রুতা ছিল। কাতাদার বর্ণনায় খালিদ ইবনুল ওয়ালীদকে পাঠানো হয়, নির্দেশ ছিল যাচাই করবে, তাড়াহুড়ো করবে না। তাঁর গুপ্তচরেরা তাদের আযান ও নামায শুনতে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Companion and a Word",
          "bn": "একজন সাহাবী ও একটি শব্দ"
        },
        "p": [
          {
            "en": "Here the commentators differ. Al-Baghawi, glossing the verse, says the fasiq means al-Walid ibn 'Uqbah. Al-Qurtubi says he was called fasiq in the sense of kadhib, one whose report was untrue. Ma'arif al-Qur'an argues the other way: it is not necessary that the verse calls him fasiq at all, since he had done nothing before this to earn the name, and he conveyed in good faith what he thought was true, though it was not.",
            "bn": "এখানে মুফাসসিরদের মধ্যে মতভেদ আছে। বাগাভী আয়াতের ব্যাখ্যায় বলেন, ফাসিক বলতে ওয়ালীদ ইবন উকবাকে বোঝানো হয়েছে। কুরতুবী বলেন, তাঁকে ফাসিক বলা হয়েছে কাযিব অর্থে, অর্থাৎ এমন একজন, যাঁর খবর সত্য ছিল না। মাআরিফুল কুরআন উল্টো যুক্তি দেয়। আয়াত যে তাঁকে আদৌ ফাসিক বলছে, তা জরুরি নয়। কারণ এর আগে তিনি এমন কিছু করেননি, যার জন্য এ নাম তাঁর প্রাপ্য হয়। আর তিনি সরল বিশ্বাসে এমন খবর পৌঁছে দিয়েছিলেন, যা তিনি সত্য ভেবেছিলেন, অথচ তা সত্য ছিল না।"
          },
          {
            "en": "Ma'arif then sets the question in a wider frame. Citing al-Alusi, it says that in the view of most scholars the Companions are not infallible and may fall into sin, but they do not persist in it, and it points to Allah's words that He is pleased with them and they with Him (98:8). It concludes that it is not lawful for any of us to regard any of them as fasiq. This article takes no side between these views and passes no verdict on al-Walid. The verse addresses its hearers, not him.",
            "bn": "এরপর মাআরিফুল কুরআন প্রশ্নটিকে আরও বড় পরিসরে রাখে। আলূসীর বরাতে বলে, অধিকাংশ আলেমের মতে সাহাবীগণ নিষ্পাপ নন, তাঁদের থেকেও গুনাহ হতে পারে। কিন্তু তাঁরা গুনাহে অটল থাকেন না। সঙ্গে আল্লাহর বাণীর দিকে ইঙ্গিত করে: আল্লাহ তাঁদের প্রতি সন্তুষ্ট, তাঁরাও তাঁর প্রতি সন্তুষ্ট (৯৮:৮)। উপসংহারে বলে, আমাদের কারও জন্য তাঁদের কাউকে ফাসিক মনে করা বৈধ নয়। এ লেখা এই ব্যাখ্যাগুলোর কোনো পক্ষ নেয় না, ওয়ালীদ (রাঃ)-এর ব্যাপারে কোনো রায়ও দেয় না। আয়াতের সম্বোধন তাঁর প্রতি নয়, শ্রোতাদের প্রতি।"
          },
          {
            "en": "Two further points follow from the texts. The reports describe one envoy, one tribe and one near-expedition, and in Ibn 'Abbas's report, as at-Tabari gives it, Allah sent down the tribe's excuse in the Book. The verse describes what the reports describe and licenses nothing against any living person or community, nor against anyone who shares a name or lineage with those in the story. And Ma'arif says the plain import of the verse is a general rule about the report of a fasiq. The occasion is where the verse came down, not where its instruction stops.",
            "bn": "বর্ণনাগুলো থেকে আরও দুটি কথা বেরিয়ে আসে। বর্ণনায় আছে একজন দূত, একটি গোত্র আর প্রায় শুরু হয়ে যাওয়া এক অভিযানের কথা। তাবারীর আনা ইবন আব্বাসের বর্ণনায় আছে, আল্লাহ কিতাবে সেই গোত্রের ওজর নাযিল করলেন। আয়াত শুধু সেটুকুই বলে, যা বর্ণনাগুলো বলে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। কাহিনির কারও সঙ্গে যার নাম বা বংশ মেলে, তার বিরুদ্ধেও না। মাআরিফুল কুরআন আরও বলে, আয়াতের সরল অর্থ হলো ফাসিকের খবর সম্পর্কে একটি সাধারণ নিয়ম। ঘটনাটা আয়াত নাযিলের উপলক্ষ, নির্দেশের সীমা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Haste and the Harm It Does",
          "bn": "তাড়াহুড়ো আর তার ক্ষতি"
        },
        "p": [
          {
            "en": "At-Tabari reads the close of the verse this way: make it clear, lest you strike a people innocent of what they were accused of, with an offence committed out of ignorance on your part, and then regret having struck them. Al-Qurtubi glosses bi-jahalah as by mistake, and reads the regret as regret over haste and the abandoning of deliberation. Al-Baghawi names the harm in that episode directly: lest you strike them with killing and fighting.",
            "bn": "আয়াতের শেষাংশ তাবারী এভাবে পড়েন: স্পষ্ট করে নাও, যাতে এমন সম্প্রদায়কে আঘাত না করো, যাদের উপর আনা অভিযোগ থেকে তারা মুক্ত। তোমাদের অজ্ঞতা থেকে এক অন্যায় ঘটে যাবে, তারপর তাদের আঘাত করার জন্য তোমরা অনুতপ্ত হবে। কুরতুবী বিজাহালাহ-এর অর্থ করেন ভুলবশত। আর অনুতাপকে পড়েন তাড়াহুড়ো ও ধীরস্থিরতা ছেড়ে দেওয়ার অনুতাপ হিসেবে। বাগাভী সেই ঘটনার ক্ষতিটা সরাসরি বলেন: যাতে হত্যা ও যুদ্ধ দিয়ে তাদের আঘাত না করো।"
          },
          {
            "en": "In Qatadah's account, as at-Tabari and Ibn Kathir give it, the Prophet ﷺ used to say: at-tabayyun min Allah, wa-l-'ajalah min ash-shaytan, making clear is from Allah and haste is from Satan. Al-Qurtubi gives it as at-ta'anni, deliberation, in place of at-tabayyun. It comes as part of Qatadah's narrative and none of the fetched tafsirs grades it. Beyond Ahmad's report above, no tafsir fetched for this verse attaches to it a hadith from the six major collections.",
            "bn": "কাতাদার বর্ণনায়, যেভাবে তাবারী ও ইবন কাসীর এনেছেন, নবী ﷺ বলতেন: আত-তাবাইয়ুনু মিনাল্লাহ, ওয়াল-আজালাতু মিনাশ শাইতান। স্পষ্ট করে নেওয়া আল্লাহর পক্ষ থেকে, আর তাড়াহুড়ো শয়তানের পক্ষ থেকে। কুরতুবী আত-তাবাইয়ুনের জায়গায় এনেছেন আত-তাআন্নী, অর্থাৎ ধীরস্থিরতা। কথাটি এসেছে কাতাদার বিবরণের অংশ হিসেবে, আর যে তাফসীরগুলো দেখা হয়েছে তার কোনোটিই এর মান নির্ণয় করেনি। আগে উল্লেখ করা আহমাদের বর্ণনা ছাড়া, এ আয়াতের জন্য দেখা কোনো তাফসীর ছয়টি প্রধান হাদীসগ্রন্থ থেকে কোনো হাদীস আয়াতটির সঙ্গে যুক্ত করেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Rule for Every Narrator",
          "bn": "প্রত্যেক বর্ণনাকারীর জন্য নিয়ম"
        },
        "p": [
          {
            "en": "Ibn Kathir says the command exists so that no one rules on a fasiq's word when he may in fact be lying or mistaken. From it, he notes, groups of scholars refused narrations from a narrator whose state is unknown, since he might be a fasiq, while others accepted them, since only the report of a known fasiq must be verified. Al-Qurtubi takes the stricter line: the verse refutes the claim that every Muslim is upright until a flaw is proven, because verification comes before acceptance.",
            "bn": "ইবন কাসীর বলেন, আদেশটি এজন্য যে, ফাসিক হয়তো আসলে মিথ্যা বলছে বা ভুল করছে, অথচ কেউ তার কথায় ফয়সালা দিয়ে বসবে। তিনি জানান, এখান থেকেই আলেমদের কয়েকটি দল অজ্ঞাত অবস্থার বর্ণনাকারীর বর্ণনা গ্রহণ করেননি, কারণ সে ফাসিক হতে পারে। অন্যরা গ্রহণ করেছেন, কারণ যাচাইয়ের নির্দেশ কেবল প্রমাণিত ফাসিকের খবরের বেলায়। কুরতুবী কঠোর দিকটি নেন। তাঁর মতে আয়াতটি সেই দাবি খণ্ডন করে যে, দোষ প্রমাণ না হওয়া পর্যন্ত প্রত্যেক মুসলিম ন্যায়নিষ্ঠ। কারণ যাচাই আসে গ্রহণের আগে।"
          },
          {
            "en": "Al-Qurtubi also marks the rule's limits, relaying al-Qushayri on the first of them. Judging by what is most probable, as on two upright witnesses or a qualified scholar's word, is not acting in ignorance; acting in ignorance is accepting a word that yields no such probability. By consensus, he adds, even a fasiq is believed when he says someone sent you this gift. Ma'arif al-Qur'an makes the same point through the verse's stated cause, lest you harm a people: ordinary matters that carry no such harm fall outside the rule.",
            "bn": "কুরতুবী নিয়মটির সীমাও চিহ্নিত করেন, প্রথমটি কুশাইরীর বরাতে। যা সবচেয়ে সম্ভাব্য, তার ভিত্তিতে ফয়সালা করা অজ্ঞতাবশত কাজ নয়, যেমন দুজন ন্যায়নিষ্ঠ সাক্ষী বা যোগ্য আলেমের কথার ভিত্তিতে। অজ্ঞতাবশত কাজ হলো এমন কথা মেনে নেওয়া, যা থেকে এমন প্রবল ধারণা জন্মায় না। তিনি যোগ করেন, ইজমা অনুযায়ী ফাসিকও যদি বলে, অমুক তোমাকে এই উপহার পাঠিয়েছে, তার কথা গ্রহণ করা হয়। মাআরিফুল কুরআন একই কথা বলে আয়াতে উল্লিখিত কারণ ধরে: যাতে কোনো সম্প্রদায়ের ক্ষতি না করো। যে সাধারণ বিষয়ে এমন ক্ষতির আশঙ্কা নেই, তা এ নিয়মের বাইরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Forwarded Message",
          "bn": "ফরোয়ার্ড করা খবর"
        },
        "p": [
          {
            "en": "The Muyassar's two verbs, believing and passing on, fit a forwarded message as well as an envoy's report. A screenshot, a clip or a voice note about a person or a group is a naba' brought by someone whose state the reader rarely knows. The verse asks the hearer to hold it until it is clear, and its warning is about harm done to people, not only about being wrong.",
            "bn": "মুয়াসসারের দুটি ক্রিয়া, বিশ্বাস করা আর ছড়িয়ে দেওয়া, দূতের আনা খবরের মতো ফরোয়ার্ড করা মেসেজের বেলায়ও খাটে। কোনো মানুষ বা দল নিয়ে একটা স্ক্রিনশট, ভিডিও ক্লিপ বা ভয়েস নোটও এক রকম নাবা, আর যে আনে তার অবস্থা পাঠক কমই জানেন। আয়াত বলে, বিষয়টা পরিষ্কার না হওয়া পর্যন্ত ধরে রাখো। আর তার সতর্কবাণী শুধু ভুল হওয়া নিয়ে নয়, মানুষের ক্ষতি করা নিয়ে।"
          },
          {
            "en": "A general narration, not attached to this verse, says the same of the tongue. Abu Dawud (4992) records from Abu Hurayrah that the Prophet ﷺ said: kafa bi-l-mar'i ithman an yuhaddith bi-kulli ma sami', it is sin enough for a man to relate everything he hears. Abu Dawud notes that only 'Ali ibn Hafs al-Mada'ini gave it a connected chain. Both set a standard for the reader's own conduct; neither is a ruling on anyone else.",
            "bn": "একটি সাধারণ বর্ণনা, যা এ আয়াতের সঙ্গে যুক্ত নয়, জিহ্বার ব্যাপারে একই কথা বলে। আবু দাউদ (৪৯৯২) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: কাফা বিল-মারই ইছমান আন ইউহাদ্দিসা বিকুল্লি মা সামিআ। মানুষের গুনাহগার হওয়ার জন্য এটুকুই যথেষ্ট যে, সে যা শোনে তা-ই বলে বেড়ায়। আবু দাউদ জানান, কেবল আলী ইবন হাফস আল-মাদাইনী এর সনদ মুত্তাসিলভাবে বর্ণনা করেছেন। আয়াত ও হাদীস দুটোই পাঠকের নিজের আচরণের মানদণ্ড, অন্য কারও উপর রায় নয়।"
          }
        ]
      }
    ]
  },
  "49:10": {
    "sections": [
      {
        "h": {
          "en": "Brothers in the Religion",
          "bn": "দ্বীনের সূত্রে ভাই"
        },
        "p": [
          {
            "en": "Innama al-mu'minuna ikhwatun: the believers are nothing but brothers. The verse opens with innama, which translations render as but or only, and the commentators gloss the clause briefly. At-Tabari has Allah telling the people of faith that the believers are brothers fi al-din, in the religion; the Muyassar says the same, and Ibn Kathir explains that all of them are brothers in the religion. The bond is named first, before any duty is laid on it.",
            "bn": "ইন্নামাল মু'মিনূনা ইখওয়াহ: মু'মিনরা তো ভাই ভাই ছাড়া আর কিছু নয়। আয়াতের শুরু ইন্নামা দিয়ে, অনুবাদে যার অর্থ আসে 'তো' বা 'কেবল'। তাফসীরকারেরা বাক্যটা সংক্ষেপে বুঝিয়ে দেন। তাবারী বলেন, আল্লাহ ঈমানদারদের জানাচ্ছেন যে মু'মিনরা ফিদ-দ্বীন, দ্বীনের ভাই। মুয়াসসারও একই কথা বলে, আর ইবন কাসীরের ব্যাখ্যা হলো, তারা সবাই দ্বীনের সূত্রে ভাই। কোনো দায়িত্ব চাপানোর আগে বন্ধনটির নাম ঘোষণা করা হলো।"
          },
          {
            "en": "Two commentators widen the gloss. Al-Baghawi says brothers in religion and in wilayah, the loyalty and mutual support of believers. Al-Qurtubi says in religion and in hurmah, the sanctity each owes the other, and not in lineage. None of the texts fetched for this verse comments on the word ikhwah itself, so nothing is drawn here from the choice of plural. What they share is this: the relation is a fact Allah declares, and the command that follows rests on it with fa, so.",
            "bn": "দুজন তাফসীরকার ব্যাখ্যাটা আরেকটু বিস্তৃত করেন। বাগাভী বলেন, দ্বীনে ও বেলায়াতে ভাই, অর্থাৎ মু'মিনদের পারস্পরিক আনুগত্য ও সহযোগিতার বন্ধনে। কুরতুবী বলেন, দ্বীনে ও হুরমাতে ভাই, মানে একজনের উপর আরেকজনের মর্যাদা রক্ষার দায়ে, বংশের সূত্রে নয়। এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর ইখওয়াহ শব্দটি নিয়ে আলাদা কিছু বলেনি। তাই বহুবচনের এই রূপ থেকে এখানে কোনো সিদ্ধান্ত টানা হচ্ছে না। সবার কথায় যা মেলে তা হলো, সম্পর্কটি আল্লাহর ঘোষিত এক বাস্তবতা, আর পরের নির্দেশটি 'ফা', অর্থাৎ 'কাজেই' দিয়ে এর উপরেই দাঁড়িয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Firmer Than the Bond of Birth",
          "bn": "রক্তের বাঁধনের চেয়ে মজবুত"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds a saying he introduces with qila, it has been said: the brotherhood of religion is firmer than the brotherhood of lineage, because brotherhood of lineage is cut off when religion differs, while brotherhood of religion is not cut off when lineage differs. The point is not that family ties count for little. It is that the tie this verse names is not broken by distance, tribe or birth, and it holds in places where a tie of blood can give way.",
            "bn": "কুরতুবী একটি উক্তি আনেন 'কীলা', অর্থাৎ 'বলা হয়েছে' বলে: দ্বীনের ভ্রাতৃত্ব বংশের ভ্রাতৃত্বের চেয়ে বেশি মজবুত। কারণ দ্বীন আলাদা হলে বংশের ভ্রাতৃত্ব ছিন্ন হয়ে যায়, কিন্তু বংশ আলাদা হলে দ্বীনের ভ্রাতৃত্ব ছিন্ন হয় না। এর মানে এই নয় যে আত্মীয়তার বাঁধন তুচ্ছ। কথাটা হলো, এ আয়াত যে বাঁধনের নাম নিচ্ছে, দূরত্ব, গোত্র বা জন্ম তাকে ভাঙতে পারে না। রক্তের সম্পর্ক যেখানে কখনো ভেঙে পড়ে, এ বাঁধন সেখানেও টিকে থাকে।"
          },
          {
            "en": "As-Sa'di calls the sentence an 'aqd, a contract Allah Himself has tied between the believers. Whoever, in the east of the earth or its west, is found to have faith in Allah, His angels, His books, His messengers and the Last Day is a brother to the believers. He then spells out what that brotherhood obliges: that the believers love for him what they love for themselves, and dislike for him what they dislike for themselves. On his reading, a believer you have never met, in a land you will never visit, is already owed this.",
            "bn": "সা'দী বাক্যটিকে বলেন 'আকদ, এমন এক চুক্তি যা আল্লাহ নিজে মু'মিনদের মধ্যে বেঁধে দিয়েছেন। পৃথিবীর পূর্বে হোক বা পশ্চিমে, যার মধ্যেই আল্লাহ, তাঁর ফেরেশতা, কিতাব, রাসূল ও আখিরাতের প্রতি ঈমান পাওয়া যাবে, সে মু'মিনদের ভাই। এই ভ্রাতৃত্ব কী দাবি করে, তাও তিনি খুলে বলেন। মু'মিনরা নিজেদের জন্য যা ভালোবাসে, তার জন্যও তা ভালোবাসবে। নিজেদের জন্য যা অপছন্দ করে, তার জন্যও তা অপছন্দ করবে। তাঁর ব্যাখ্যায়, যে মু'মিনকে আপনি কখনো দেখেননি, যে দেশে হয়তো কোনোদিন যাবেন না, সেখানকার সেই মানুষটির এই হক আপনার উপর আগে থেকেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Muslim Owes the Muslim",
          "bn": "মুসলিমের উপর মুসলিমের হক"
        },
        "p": [
          {
            "en": "Ibn Kathir opens with a saying of the Prophet ﷺ, which al-Baghawi gives more fully with his own chain to Salim and his father. Al-Bukhari records it in his Sahih (2442) from 'Abdullah ibn 'Umar (RA): \"A Muslim is a brother of another Muslim, so he should not oppress him, nor should he hand him over to an oppressor. Whoever fulfilled the needs of his brother, Allah will fulfill his needs; whoever brought his (Muslim) brother out of a discomfort, Allah will bring him out of the discomforts of the Day of Resurrection, and whoever screened a Muslim, Allah will screen him on the Day of Resurrection.\"",
            "bn": "ইবন কাসীর শুরু করেন নবী ﷺ-এর একটি বাণী দিয়ে। বাগাভী নিজের সনদে সালিম ও তাঁর পিতা পর্যন্ত পৌঁছে বাণীটি আরও পূর্ণরূপে আনেন। বুখারী তাঁর সহীহ গ্রন্থে (২৪৪২) আবদুল্লাহ ইবন উমার (রাঃ) থেকে বর্ণনা করেন: \"মুসলিম মুসলিমের ভাই। সে তার উপর জুলুম করবে না, তাকে জালিমের হাতে ছেড়েও দেবে না। যে তার ভাইয়ের প্রয়োজন পূরণ করে, আল্লাহ তার প্রয়োজন পূরণ করেন। যে কোনো মুসলিমকে কষ্ট থেকে উদ্ধার করে, আল্লাহ কিয়ামতের দিনের কষ্টগুলোর একটি থেকে তাকে উদ্ধার করবেন। আর যে কোনো মুসলিমের দোষ ঢেকে রাখে, আল্লাহ কিয়ামতের দিন তার দোষ ঢেকে রাখবেন।\""
          },
          {
            "en": "Its place in al-Bukhari's Sahih is his own verdict on it. In al-Baghawi's wording he does not wrong him and does not revile him; the quotation above keeps to al-Bukhari's. Al-Qurtubi and as-Sa'di bring a second narration, which al-Qurtubi gives from Abu Hurayrah (RA) in Muslim's wording, beginning: do not envy each other, do not hate each other, and be, servants of Allah, brothers. It adds that a Muslim does not forsake his brother or look down on him, and in al-Qurtubi's text the Prophet ﷺ points to his chest three times: taqwa is here.",
            "bn": "হাদীসটি বুখারী তাঁর সহীহ গ্রন্থে রেখেছেন, এটাই এর ব্যাপারে তাঁর নিজের রায়। বাগাভীর পাঠে আছে: সে তার উপর জুলুম করে না, তাকে গালিও দেয় না। উপরের উদ্ধৃতি বুখারীর পাঠ থেকে নেওয়া। কুরতুবী ও সা'দী আরেকটি বর্ণনা আনেন। কুরতুবী সেটি আবু হুরায়রা (রাঃ) থেকে মুসলিমের শব্দে উল্লেখ করেন, যার শুরু এরকম: তোমরা পরস্পর হিংসা করো না, বিদ্বেষ রেখো না, আর আল্লাহর বান্দারা, ভাই ভাই হয়ে যাও। সেখানে আরও আছে, মুসলিম তার ভাইকে অসহায় ফেলে যায় না, তাকে তুচ্ছও করে না। কুরতুবীর পাঠে নবী ﷺ তিনবার নিজের বুকের দিকে ইশারা করে বলেন: তাকওয়া এখানে।"
          },
          {
            "en": "Ibn Kathir then cites more from the Sahih. Allah helps His servant as long as the servant helps his brother. And the believers, in their love and mercy, are like one body: when a limb aches, the rest answers with fever and sleeplessness. Muslim records that last image from an-Nu'man ibn Bashir (RA) (2586). From Ahmad, Ibn Kathir adds that the believer is to the people of faith as the head is to the body, noting that Ahmad alone records it and that there is no harm in its chain.",
            "bn": "এরপর ইবন কাসীর সহীহ থেকে আরও বর্ণনা আনেন। বান্দা যতক্ষণ তার ভাইয়ের সাহায্যে থাকে, আল্লাহ ততক্ষণ বান্দার সাহায্যে থাকেন। আর ভালোবাসা ও দয়ায় মু'মিনরা এক দেহের মতো। একটি অঙ্গ ব্যথায় কাতর হলে বাকি দেহ জ্বর আর নির্ঘুম রাত দিয়ে সাড়া দেয়। শেষ উপমাটি মুসলিম নু'মান ইবন বাশীর (রাঃ) থেকে বর্ণনা করেছেন (২৫৮৬)। ইবন কাসীর আহমাদ থেকে আরও আনেন যে ঈমানদারদের কাছে মু'মিন যেন দেহের কাছে মাথা। তিনি জানান, এটি কেবল আহমাদই বর্ণনা করেছেন, আর এর সনদে দোষ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Two Brothers",
          "bn": "তোমাদের দুই ভাই"
        },
        "p": [
          {
            "en": "Fa-aslihu bayna akhawaykum: so make peace between your two brothers. Akhawaykum is dual, and the commentators ask who the two are. Ibn Kathir ties it to the case of 49:9: the two factions that fought. At-Tabari says the two brothers here mean any two who fight from among the people of faith, and the peace is made by bringing both to the judgement of Allah and of His Messenger. Al-Qurtubi's first gloss is wider still: between any two Muslims who have quarrelled.",
            "bn": "ফাআসলিহূ বাইনা আখাওয়াইকুম: কাজেই তোমাদের দুই ভাইয়ের মধ্যে মীমাংসা করে দাও। আখাওয়াইকুম শব্দটি দ্বিবচন, আর তাফসীরকারেরা প্রশ্ন তোলেন, এই দুজন কারা। ইবন কাসীর একে ৪৯:৯ আয়াতের ঘটনার সাথে জোড়েন, অর্থাৎ লড়াইয়ে জড়ানো দুই দল। তাবারী বলেন, এখানে দুই ভাই মানে ঈমানদারদের মধ্যে যে-কোনো দুই পক্ষ, যারা পরস্পর লড়ছে। আর মীমাংসা হবে দুজনকেই আল্লাহ ও তাঁর রাসূলের ফয়সালার কাছে নিয়ে এসে। কুরতুবীর প্রথম ব্যাখ্যা আরও ব্যাপক: যে-কোনো দুই মুসলিম, যাদের মধ্যে বিবাদ বেধেছে।"
          },
          {
            "en": "Al-Qurtubi then records other views. Abu 'Ali held that the two brothers are the two factions, since the dual can be used where many are meant, as in bal yadahu mabsutatan, rather, both His hands are outstretched (5:64). Abu 'Ubaydah read it as make peace between every two brothers, so that it reaches all of them. Al-Qurtubi also gives the view that the two are al-Aws and al-Khazraj, referring back to what he said on the verse before.",
            "bn": "এরপর কুরতুবী আরও কয়েকটি মত উল্লেখ করেন। আবু আলীর মতে দুই ভাই মানে দুই দল, কারণ দ্বিবচন বলে অনেককেও বোঝানো যায়, যেমন বাল ইয়াদাহু মাবসূতাতান, বরং তাঁর দুই হাতই প্রসারিত (৫:৬৪)। আবু উবাইদা অর্থ করেন: প্রতি দুই ভাইয়ের মধ্যে মীমাংসা করো, ফলে নির্দেশটি সবার কাছেই পৌঁছে যায়। কুরতুবী আরেকটি মতও আনেন যে এই দুজন হলো আওস ও খাযরাজ, আর এ ব্যাপারে আগের আয়াতে যা বলেছেন সেদিকে ইঙ্গিত করেন।"
          },
          {
            "en": "The readings differ too. At-Tabari says the readers of the great cities read the dual, and that Ibn Sirin is reported to have read ikhwanikum, a plural with nun; he calls it sound Arabic but will not read it, since it departs from the cities' readers. Al-Qurtubi gives ikhwatikum, a plural with ta, to Ibn Sirin, Nasr ibn 'Asim, Abu al-'Aliyah, al-Jahdari and Ya'qub, and ikhwanikum to al-Hasan, with the rest reading the dual. Al-Baghawi names Ya'qub for ikhwatikum. The two disagree on what Ibn Sirin read.",
            "bn": "কিরাআতেও ভিন্নতা আছে। তাবারী বলেন, বড় বড় শহরের কারীরা দ্বিবচনেই পড়েছেন। আর ইবন সীরীন সম্পর্কে বর্ণিত আছে যে তিনি 'নূন' দিয়ে বহুবচনে ইখওয়ানিকুম পড়তেন। তাবারীর মতে আরবি ভাষার দিক থেকে তা শুদ্ধ, তবু শহরগুলোর কারীদের বিপরীত হওয়ায় তিনি এভাবে পড়া পছন্দ করেন না। কুরতুবী 'তা' দিয়ে বহুবচন ইখওয়াতিকুম পড়ার কথা বলেন ইবন সীরীন, নাসর ইবন আসিম, আবুল আলিয়া, জাহদারী ও ইয়াকুবের নামে, আর ইখওয়ানিকুম হাসানের নামে। বাকিরা পড়েছেন দ্বিবচনে। বাগাভী ইখওয়াতিকুম পড়ার কথা বলেন ইয়াকুবের নামে। ইবন সীরীন কী পড়েছিলেন, এ নিয়ে দুজনের বর্ণনা মেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Palm Branches and Sandals",
          "bn": "খেজুরের ডাল আর জুতা"
        },
        "p": [
          {
            "en": "The verse completes a passage that begins in 49:9, where two factions of believers actually fight. Ma'arif al-Qur'an, reading the two verses together, says the commentators narrate several incidents as their background, and all of them together may have been the occasion. Ibn Kathir's abridged commentary gives two. Sa'id ibn Jubayr said the Aws and the Khazraj once came to blows with palm branches and sandals, and the verse came commanding peace between them.",
            "bn": "আয়াতটি ৪৯:৯ থেকে শুরু হওয়া একটি অংশ সম্পূর্ণ করে, যেখানে মু'মিনদের দুই দল সত্যিই লড়াইয়ে জড়িয়ে পড়ে। মাআরিফুল কুরআন দুটি আয়াত একসাথে পড়ে বলে, তাফসীরকারেরা এর পটভূমি হিসেবে কয়েকটি ঘটনা বর্ণনা করেছেন, আর হতে পারে সবগুলো মিলেই নাযিলের উপলক্ষ। ইবন কাসীরের সংক্ষিপ্ত তাফসীর দুটি বর্ণনা আনে। সাঈদ ইবন জুবাইর বলেন, একবার আওস ও খাযরাজ খেজুরের ডাল আর জুতা নিয়ে মারামারিতে জড়ায়, তখন তাদের মধ্যে মীমাংসার নির্দেশ দিয়ে আয়াত নাযিল হয়।"
          },
          {
            "en": "As-Suddi's account is a household quarrel. A man of the Ansar named 'Imran kept his wife, Umm Zayd, shut in an upper room so that she could not visit her family. Her people came while he was absent, brought her down and meant to take her away; his family called their cousins to stop them, and the pushing turned into a fight with sandals. The verse came in their case, as-Suddi says, and the Messenger ﷺ sent someone to make peace, and both sides agreed to accept the judgement of Allah.",
            "bn": "সুদ্দীর বর্ণনাটি এক সংসারের ঝগড়া। ইমরান নামে এক আনসারি তাঁর স্ত্রী উম্মু যায়দকে উপরের এক কামরায় আটকে রেখেছিলেন, যাতে তিনি বাপের বাড়ির লোকদের সাথে দেখা করতে না পারেন। স্বামীর অনুপস্থিতিতে স্ত্রীর লোকেরা এসে তাঁকে নামিয়ে নিয়ে যেতে চাইল। স্বামীর পরিবার তখন চাচাতো ভাইদের ডেকে আনল তাদের ঠেকাতে। ধাক্কাধাক্কি গড়াল জুতা দিয়ে মারামারিতে। সুদ্দী বলেন, তাদের ব্যাপারেই আয়াত নাযিল হয়। রাসূল ﷺ মীমাংসার জন্য লোক পাঠালেন, আর দুই পক্ষই আল্লাহর ফয়সালা মেনে নিতে রাজি হলো।"
          },
          {
            "en": "Neither report comes with a chain or a grading in the texts fetched here, and no sound hadith is attached in them as the verse's occasion. Ibn Kathir does bring one narration from al-Bukhari on reconciliation itself. Al-Bukhari records in his Sahih (2704), at the end of a longer report from Abu Bakrah (RA), that the Prophet ﷺ said on the pulpit, with al-Hasan ibn 'Ali (RA) at his side: \"This son of mine is a Saiyid (i.e. a noble) and may Allah make peace between two big groups of Muslims through him.\" Ibn Kathir notes that it came to pass.",
            "bn": "এখানে সংগৃহীত তাফসীরগুলোতে দুটি বর্ণনার কোনোটির সাথেই সনদ বা মান উল্লেখ নেই, আর এগুলোতে আয়াতের শানে নুযূল হিসেবে কোনো সহীহ হাদীস যুক্ত নেই। তবে মীমাংসা প্রসঙ্গে ইবন কাসীর বুখারী থেকে একটি বর্ণনা আনেন। বুখারী তাঁর সহীহ গ্রন্থে (২৭০৪) আবু বাকরা (রাঃ)-এর এক দীর্ঘ বর্ণনার শেষে উল্লেখ করেন, নবী ﷺ মিম্বারে ছিলেন, পাশে হাসান ইবন আলী (রাঃ), আর তিনি বললেন: \"আমার এই ছেলে একজন সাইয়্যিদ, অর্থাৎ নেতা। আশা করা যায়, আল্লাহ এর মাধ্যমে মুসলিমদের বড় দুটি দলের মধ্যে মীমাংসা করে দেবেন।\" ইবন কাসীর জানান, কথাটি বাস্তবে ঘটেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Transgressors Still Called Brothers",
          "bn": "সীমালঙ্ঘন করেও তারা ভাই"
        },
        "p": [
          {
            "en": "Al-Qurtubi and al-Baghawi draw the same point from this verse and the one before it: baghy, transgression, does not remove the name of faith, because Allah called the parties brothers and believers while they were transgressing. Ibn Kathir's abridged commentary says al-Bukhari and other scholars took 49:9 as evidence that committing a sin, however major, does not cancel faith. As-Sa'di states it as the position of Ahl al-Sunnah wal-Jama'ah: faith and its brotherhood do not vanish when fighting occurs, as with the other major sins short of shirk.",
            "bn": "কুরতুবী ও বাগাভী এ আয়াত ও এর আগের আয়াত থেকে একই সিদ্ধান্ত টানেন। বাগই, অর্থাৎ সীমালঙ্ঘন, ঈমানের নাম মুছে দেয় না। কারণ সীমালঙ্ঘনের মধ্যে থাকা অবস্থাতেই আল্লাহ পক্ষগুলোকে ভাই ও মু'মিন বলে ডেকেছেন। ইবন কাসীরের সংক্ষিপ্ত তাফসীর বলে, বুখারী ও অন্য আলেমরা ৪৯:৯ আয়াতকে দলিল হিসেবে নিয়েছেন যে গুনাহ যত বড়ই হোক, তা ঈমান বাতিল করে না। সা'দী একে আহলুস সুন্নাহ ওয়াল জামাআহর মত হিসেবে উল্লেখ করেন। শিরকের নিচের অন্য বড় গুনাহের মতোই, লড়াই ঘটলেও ঈমান ও ঈমানি ভ্রাতৃত্ব লোপ পায় না।"
          },
          {
            "en": "As-Sa'di keeps the other half in view. Fighting between believers, he says, is contrary to the brotherhood of faith, and for that reason it is among the greatest of the major sins. The passage holds both at once: the fight is grave, and the fighters remain brothers. So the command to those watching is to make peace, not to disown either side, and 49:9 orders the settlement to be made with justice once the fighting stops.",
            "bn": "সা'দী অন্য দিকটাও চোখের সামনে রাখেন। তাঁর কথায়, মু'মিনদের মধ্যে লড়াই ঈমানি ভ্রাতৃত্বের পরিপন্থী, আর এ কারণেই তা সবচেয়ে বড় কবীরা গুনাহগুলোর একটি। আয়াত দুটি একসাথে দুটো কথা ধরে রাখে। লড়াইটা গুরুতর অন্যায়, আবার যারা লড়ছে তারা এখনো ভাই। তাই যারা দেখছে, তাদের প্রতি নির্দেশ মীমাংসা করার, কোনো পক্ষকে ত্যাগ করার নয়। আর ৪৯:৯ বলে দেয়, লড়াই থামলে ফয়সালা হবে ইনসাফের সাথে।"
          }
        ]
      },
      {
        "h": {
          "en": "Taqwa, Then Mercy",
          "bn": "তাকওয়া, তারপর রহমত"
        },
        "p": [
          {
            "en": "Wa-ttaqu Allaha la'allakum turhamun: and fear Allah, that you may be shown mercy. At-Tabari makes the taqwa concrete. Fear Allah by carrying out what He has made obligatory on you in making peace with justice between believers who fight, and in His other obligations, and by avoiding disobedience to Him, so that your Lord may have mercy on you and pardon your past offences, if you obey Him. Al-Baghawi says: do not disobey Him or go against His command. Ibn Kathir and the Muyassar extend it to all your affairs.",
            "bn": "ওয়াত্তাকুল্লাহা লাআল্লাকুম তুরহামূন: আর আল্লাহকে ভয় করো, যাতে তোমরা রহমত পাও। তাবারী তাকওয়াকে বাস্তব কাজের রূপ দেন। লড়াইয়ে জড়ানো মু'মিনদের মধ্যে ইনসাফের সাথে মীমাংসা করার যে দায়িত্ব আল্লাহ তোমাদের উপর ফরজ করেছেন, তা পালন করে তাঁকে ভয় করো। তাঁর অন্য ফরজগুলোও আদায় করো, তাঁর নাফরমানি থেকে দূরে থাকো। তাহলে তোমাদের রব তোমাদের উপর রহম করবেন। তোমরা তাঁর আনুগত্য করলে তিনি তোমাদের আগের অপরাধগুলো মাফ করে দেবেন। বাগাভী বলেন: তাঁর নাফরমানি করো না, তাঁর আদেশের বিরোধিতা করো না। ইবন কাসীর ও মুয়াসসার একে সব কাজে ছড়িয়ে দেন।"
          },
          {
            "en": "Ibn Kathir reads the closing words as Allah's confirmation of mercy for whoever fears Him; the Muyassar keeps them as hope that you will be shown mercy. As-Sa'di ties them to the whole verse. Allah ordered taqwa in general and made mercy follow from fulfilling the rights of the believers and fearing Him, and when mercy comes, the good of this world and the next comes with it. He then draws the reverse: failing in the rights of the believers is among the greatest barriers to mercy.",
            "bn": "ইবন কাসীর শেষ কথাগুলোকে দেখেন আল্লাহর পক্ষ থেকে নিশ্চয়তা হিসেবে, যে তাঁকে ভয় করে তার জন্য রহমত অবধারিত। মুয়াসসার একে রাখে আশা হিসেবে: যাতে তোমরা রহমত পাও। সা'দী এগুলোকে পুরো আয়াতের সাথে জোড়েন। আল্লাহ সাধারণভাবে তাকওয়ার আদেশ দিয়েছেন, আর মু'মিনদের হক আদায় ও তাকওয়ার ফল হিসেবে রেখেছেন রহমত। রহমত এলে দুনিয়া ও আখিরাতের কল্যাণও আসে। এরপর তিনি উল্টো দিকটাও দেখান: মু'মিনদের হক আদায়ে গাফিলতি রহমতের পথে সবচেয়ে বড় বাধাগুলোর একটি।"
          }
        ]
      },
      {
        "h": {
          "en": "When Two You Know Fall Out",
          "bn": "চেনা দুজনের মধ্যে ফাটল ধরলে"
        },
        "p": [
          {
            "en": "As-Sa'di describes what the peacemaking is for. Fighting splits hearts, breeds hatred and makes people turn their backs on each other, so the believers must make peace between their brothers and work at whatever removes their enmity. Ma'arif al-Qur'an, on 49:9, asks for more than a ceasefire: think about removing the cause of the quarrel and the resentment, so that the heart-burnings end, and settle it with fairness so that no one's right is violated.",
            "bn": "মীমাংসার উদ্দেশ্য কী, সা'দী তা বুঝিয়ে দেন। লড়াই মনকে ভাগ করে, বিদ্বেষ জন্মায়, মানুষকে একে অপরের দিকে পিঠ ফেরাতে শেখায়। তাই মু'মিনদের কর্তব্য ভাইদের মধ্যে মীমাংসা করে দেওয়া, আর যাতে তাদের শত্রুতা দূর হয় সে চেষ্টায় লেগে থাকা। মাআরিফুল কুরআন ৪৯:৯ আয়াতের আলোচনায় শুধু যুদ্ধবিরতিতে থামতে চায় না। ঝগড়া আর অসন্তোষের কারণটাই দূর করার কথা ভাবতে বলে, যাতে মনের জ্বালা মিটে যায়। আর মীমাংসা হতে হবে ইনসাফের সাথে, যাতে কারও হক নষ্ট না হয়।"
          },
          {
            "en": "Most quarrels a reader meets are smaller than a battle: two relatives, two colleagues, two neighbours who no longer speak. On al-Qurtubi's gloss, any two Muslims who have quarrelled, the verse reaches them too, and the hadith above names the reward: whoever brought his brother out of a discomfort, Allah will bring him out of the discomforts of the Day of Resurrection. The next verse, 49:11, guards the same bond by forbidding mockery and insulting nicknames. And 49:12 and 49:13 forbid suspicion, spying and backbiting, and remind people that they were created from a male and a female.",
            "bn": "পাঠক যে ঝগড়াগুলোর মুখোমুখি হন, বেশিরভাগই যুদ্ধের চেয়ে অনেক ছোট। দুই আত্মীয়, দুই সহকর্মী, দুই প্রতিবেশী, যারা আর কথা বলেন না। কুরতুবীর ব্যাখ্যা অনুযায়ী যে-কোনো দুই মুসলিম, যাদের মধ্যে বিবাদ বেধেছে, আয়াত তাদের কাছেও পৌঁছায়। আর উপরের হাদীস পুরস্কারের কথাও বলে দেয়: যে কোনো মুসলিমকে কষ্ট থেকে উদ্ধার করে, আল্লাহ কিয়ামতের দিনের কষ্টগুলোর একটি থেকে তাকে উদ্ধার করবেন। পরের আয়াত ৪৯:১১ ঠাট্টা-বিদ্রূপ আর মন্দ নামে ডাকা নিষেধ করে একই বাঁধন পাহারা দেয়। আর ৪৯:১২ ও ৪৯:১৩ নিষেধ করে কুধারণা, গোপন দোষ খোঁজা ও গীবত, আর মনে করিয়ে দেয় যে মানুষকে সৃষ্টি করা হয়েছে এক পুরুষ ও এক নারী থেকে।"
          }
        ]
      }
    ]
  },
  "49:11": {
    "sections": [
      {
        "h": {
          "en": "From His Rights to Theirs",
          "bn": "নবীর হক থেকে পরস্পরের হক"
        },
        "p": [
          {
            "en": "Al-Hujurat opened with the rights of the Prophet ﷺ and the manners owed to him. Ma'arif al-Qur'an notes that it then turns to the rights Muslims owe each other. On its reading, the two verses before it dealt with repairing society as a whole, when two parties of believers fall out, and this verse moves to the rights between individuals. It counts three social evils forbidden here: ridiculing each other, finding fault with each other, and reviling each other with nicknames.",
            "bn": "সূরা হুজুরাত শুরু হয়েছিল নবী ﷺ-এর হক আর তাঁর সঙ্গে আদব রক্ষার কথা দিয়ে। মাআরিফুল কুরআন দেখায়, এরপর সূরাটি চলে আসে মুসলিমদের পরস্পরের হকে। তার ব্যাখ্যায় আগের দুই আয়াতের বিষয় ছিল গোটা সমাজের মেরামত, যখন মু'মিনদের দুই দল বিবাদে জড়ায়। আর এই আয়াত নেমে আসে ব্যক্তি থেকে ব্যক্তির হকে। মাআরিফুল কুরআন এখানে তিনটি সামাজিক ব্যাধি গুনে দেখায়: একে অন্যকে ঠাট্টা করা, একে অন্যের দোষ ধরা, আর মন্দ নামে একে অন্যকে ডাকা।"
          },
          {
            "en": "As-Sa'di opens his comment the same way: this too is among the rights believers hold over each other. At-Tabari glosses the address, ya ayyuha alladhina amanu, as you who have affirmed the truth of Allah and His Messenger, and reads every clause as believers about believers: let no believing people mock a believing people. The verse before, 49:10, calls the believers brothers; the verse after, 49:12, turns to suspicion, spying and backbiting.",
            "bn": "সা'দীও কথা শুরু করেন একইভাবে: এটিও মু'মিনদের পরস্পরের ওপর থাকা হকের একটি। তাবারী সম্বোধনটির ব্যাখ্যা দেন এভাবে: হে তোমরা, যারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনেছ। প্রতিটি নিষেধকে তিনি পড়েন মু'মিনের ব্যাপারে মু'মিনের প্রতি নিষেধ হিসেবে: কোনো মু'মিন দল যেন আরেক মু'মিন দলকে নিয়ে হাসাহাসি না করে। আগের আয়াত ৪৯:১০ মু'মিনদের ভাই বলে ঘোষণা করেছে। পরের আয়াত ৪৯:১২ যাবে কুধারণা, গোয়েন্দাগিরি আর গীবতের প্রসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Perhaps the Mocked Is Better",
          "bn": "যাকে নিয়ে হাসি, সে-ই হয়তো উত্তম"
        },
        "p": [
          {
            "en": "Ibn Kathir defines the mockery forbidden here as ihtiqar and istihza': despising people and making fun of them. He links it to a saying of the Prophet ﷺ in the Sahih, which Muslim relates from Abdullah ibn Mas'ud (RA) within a longer hadith on pride: \"Pride is disdaining the truth (out of self-conceit) and contempt for the people.\" Such contempt is forbidden, Ibn Kathir says, because the one despised may be greater in rank with Allah, and dearer to Him, than the one who mocks him.",
            "bn": "ইবন কাসীর এখানে নিষিদ্ধ বিদ্রূপের সংজ্ঞা দেন দুটি শব্দে: ইহতিকার ও ইসতিহযা, অর্থাৎ মানুষকে তুচ্ছ ভাবা আর তাদের নিয়ে মজা করা। এর সঙ্গে তিনি জুড়ে দেন সহীহ গ্রন্থে বর্ণিত নবী ﷺ-এর একটি বাণী। মুসলিম এটি অহংকার বিষয়ক একটি দীর্ঘ হাদীসের ভেতরে আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে বর্ণনা করেছেন: \"অহংকার হলো সত্যকে অগ্রাহ্য করা আর মানুষকে তুচ্ছ জ্ঞান করা।\" ইবন কাসীর বলেন, এই তাচ্ছিল্য হারাম। কারণ যাকে তুচ্ছ করা হচ্ছে, আল্লাহর কাছে তার মর্যাদা হয়তো বিদ্রূপকারীর চেয়ে বেশি, সে হয়তো তাঁর কাছে বেশি প্রিয়।"
          },
          {
            "en": "At-Tabari reads 'asa an yakunu khayran minhum plainly: the mocked are better than the mockers. Al-Qurtubi offers two senses, better in Allah's sight, or better in belief and sounder within. As-Sa'di says mockery comes only from a heart filled with bad character, and cites the Prophet's ﷺ words, which Muslim relates from Abu Hurayrah (RA) inside a longer hadith: \"A Muslim is the brother of a Muslim. He neither oppresses him nor humiliates him nor looks down upon him. The piety is here, (and while saying so) he pointed towards his chest thrice. It is a serious evil for a Muslim that he should look down upon his brother Muslim.\"",
            "bn": "'আসা আঁই ইয়াকূনূ খাইরাম মিনহুম, তাবারী এর সরল অর্থ করেন: যাদের নিয়ে হাসা হচ্ছে, তারা হাসিওয়ালাদের চেয়ে উত্তম। কুরতুবী দুটি অর্থ দেন। হয় আল্লাহর কাছে উত্তম, নয়তো বিশ্বাসে উত্তম আর ভেতরে বেশি খাঁটি। সা'দী বলেন, বিদ্রূপ জন্মায় কেবল এমন অন্তর থেকে, যা মন্দ স্বভাবে ভরা। এর প্রমাণে তিনি আনেন নবী ﷺ-এর বাণী, যা মুসলিম একটি দীর্ঘ হাদীসের ভেতরে আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন: \"মুসলিম মুসলিমের ভাই। সে তার ওপর জুলুম করে না, তাকে অপদস্থ করে না, তাকে তুচ্ছ ভাবে না। তাকওয়া এখানে, এই বলে তিনি তিনবার নিজের বুকের দিকে ইশারা করলেন। কোনো মানুষের মন্দ হওয়ার জন্য এটুকুই যথেষ্ট যে সে তার মুসলিম ভাইকে তুচ্ছ ভাবে।\""
          }
        ]
      },
      {
        "h": {
          "en": "Mocked for What?",
          "bn": "বিদ্রূপ, কিন্তু কিসের জন্য?"
        },
        "p": [
          {
            "en": "At-Tabari records a disagreement over which mockery is meant. Mujahid said it is the rich mocking the poor: when a poor man asks something of a rich one, or someone does him a favour, he is not to be made fun of. Ibn Zayd said it forbids the believer whose sins Allah has veiled from mocking one whose slip has been exposed; perhaps the exposure is better for him in the Hereafter, and your veiled slip worse for you, since you cannot know it will be forgiven. At-Tabari's verdict: the prohibition is general, so no believer may mock another for poverty, for a sin, or for anything else.",
            "bn": "কোন বিদ্রূপের কথা বলা হচ্ছে, এ নিয়ে তাবারী একটি মতভেদ লিপিবদ্ধ করেন। মুজাহিদের মতে এটি ধনীর হাতে গরিবের উপহাস। গরিব লোক ধনীর কাছে কিছু চাইলে, কিংবা কেউ তার প্রতি দয়া দেখালে, তাকে নিয়ে হাসা চলবে না। ইবন যায়দের মতে, যার গুনাহ আল্লাহ ঢেকে রেখেছেন, এমন মু'মিনকে নিষেধ করা হচ্ছে সেই লোককে নিয়ে হাসতে, যার পদস্খলন প্রকাশ পেয়ে গেছে। হতে পারে প্রকাশ পাওয়াটাই আখিরাতে তার জন্য ভালো, আর আপনার ঢাকা পদস্খলনটাই আপনার জন্য মন্দ। আপনি তো জানেন না সেটি মাফ হবে কি না। তাবারীর রায়: নিষেধটি সার্বিক। দারিদ্র্য, গুনাহ বা অন্য কোনো কারণেই এক মু'মিন আরেক মু'মিনকে বিদ্রূপ করতে পারে না।"
          },
          {
            "en": "Al-Qurtubi applies it to anyone who looks shabby, has a bodily defect or speaks awkwardly; he may be purer of heart than his mocker. He cites from Sahih Muslim, from Abu Hurayrah (RA), that the Messenger of Allah ﷺ said: \"Verily Allah does not look to your faces and your wealth but He looks to your heart and to your deeds.\" He draws a rule from it: no one is to be judged with certainty by the outward look of his deeds, which are probable signs, not decisive proofs. Despise the bad state, he writes, not the person in it.",
            "bn": "কুরতুবী নিষেধটি প্রয়োগ করেন এমন সবার বেলায়, যাকে দেখতে জীর্ণ লাগে, যার শরীরে খুঁত আছে, কিংবা যে গুছিয়ে কথা বলতে পারে না। হতে পারে তার অন্তর বিদ্রূপকারীর চেয়ে পরিচ্ছন্ন। তিনি সহীহ মুসলিম থেকে আবু হুরায়রা (রাঃ)-এর সূত্রে আনেন, আল্লাহর রসূল ﷺ বলেছেন: \"আল্লাহ তোমাদের চেহারা ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে।\" কুরতুবী এ থেকে একটি নীতি টানেন। আমলের বাহ্যিক চেহারা দেখে কারও ব্যাপারে চূড়ান্ত রায় দেওয়া যায় না। আমল কেবল সম্ভাব্য আলামত, অকাট্য প্রমাণ নয়। তাঁর কথায়, ঘৃণা করুন মন্দ অবস্থাটাকে, মানুষটাকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Said to Men, Said to Women",
          "bn": "পুরুষদের বলা, নারীদেরও বলা"
        },
        "p": [
          {
            "en": "The prohibition comes twice, each time with its own \"perhaps they are better\". Ibn Kathir says the verse states the prohibition for men and then joins the prohibition for women to it. Al-Qurtubi notes that qawm in the language means males specifically, citing a line of Zuhayr that sets qawm against nisa', though women may be included by extension. Al-Baghawi says qawm gathers men and women and is sometimes kept for men alone, and here he glosses it as men.",
            "bn": "নিষেধটি এসেছে দুবার, প্রতিবার নিজস্ব \"হয়তো তারাই উত্তম\" কথাটি সঙ্গে নিয়ে। ইবন কাসীর বলেন, আয়াতটি আগে পুরুষদের নিষেধ স্পষ্ট করে, তারপর তার সঙ্গে জুড়ে দেয় নারীদের নিষেধ। কুরতুবী জানান, ভাষায় কওম শব্দটি বিশেষভাবে পুরুষদের জন্য। প্রমাণে তিনি যুহাইরের একটি পঙক্তি আনেন, যেখানে কওমকে নিসার বিপরীতে রাখা হয়েছে। তবে রূপক অর্থে নারীরাও এর ভেতরে আসতে পারে। বাগাভীর মতে কওম শব্দ পুরুষ ও নারী দুই দলকেই ধারণ করে, কখনো কেবল পুরুষদের বোঝায়। আর এখানে তিনি এর অর্থ করেন পুরুষ।"
          },
          {
            "en": "Why name the women separately? Al-Qurtubi's answer is that mockery is more frequent among them. Ma'arif al-Qur'an gives a different reason: mockery usually arises where people mix freely, and men and women are not to mix freely. It adds at once that this does not make it lawful for men to mock women or for women to mock men. Whatever the reason, the verse gives both groups the same warning in the same words.",
            "bn": "নারীদের কথা আলাদা করে কেন? কুরতুবীর জবাব, তাদের মধ্যে বিদ্রূপ বেশি ঘটে। মাআরিফুল কুরআন ভিন্ন কারণ দেখায়। বিদ্রূপ সাধারণত জন্মায় অবাধ মেলামেশার জায়গায়, আর নারী-পুরুষের অবাধ মেলামেশা নিষেধ। সঙ্গে সঙ্গে মাআরিফুল কুরআন যোগ করে: এর মানে এই নয় যে পুরুষেরা নারীদের, কিংবা নারীরা পুরুষদের বিদ্রূপ করতে পারে। কারণ যা-ই হোক, আয়াতটি দুই দলকেই একই সতর্কবাণী দেয়, হুবহু একই শব্দে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Reports Say",
          "bn": "বর্ণনাগুলো কী বলে"
        },
        "p": [
          {
            "en": "The commentators give several occasions, none with a graded chain in the texts fetched for this verse. Al-Qurtubi and al-Baghawi relate from Ibn Abbas that it came down about Thabit ibn Qays ibn Shammas (RA), who was hard of hearing and was given room beside the Prophet ﷺ. Arriving late for the dawn prayer, he pushed forward until a man told him to sit where he was. Thabit asked his name, then said, \"Son of so-and-so,\" naming a mother he had been taunted with in the Jahiliyyah, and the man lowered his head in shame.",
            "bn": "তাফসীরকারেরা আয়াতের কয়েকটি উপলক্ষ উল্লেখ করেন। তবে এ আয়াতের জন্য সংগৃহীত লেখাগুলোতে এর কোনোটির সঙ্গেই মান নির্ণীত সনদ নেই। কুরতুবী ও বাগাভী ইবন আব্বাস থেকে বর্ণনা করেন, আয়াতটি নাযিল হয় সাবিত ইবন কায়স ইবন শাম্মাস (রাঃ)-কে কেন্দ্র করে। তিনি কানে কম শুনতেন, তাই লোকেরা তাঁকে নবী ﷺ-এর পাশে বসার জায়গা করে দিত। ফজরের নামাযে একবার দেরিতে এসে তিনি সামনে এগোতে থাকেন, শেষে এক লোক বলল, যেখানে আছেন সেখানেই বসুন। সাবিত তার নাম জিজ্ঞেস করলেন, তারপর বললেন, \"অমুক মহিলার ছেলে!\" জাহিলিয়াতে যে মায়ের নাম ধরে তাকে খোঁটা দেওয়া হতো, সেই নামটাই তুললেন। লোকটি লজ্জায় মাথা নিচু করল।"
          },
          {
            "en": "Ad-Dahhak, in both, said it came down about the delegation of Banu Tamim, who mocked poor Companions such as Ammar, Khabbab, Bilal, Suhayb and Salman (RA) for their shabby state, and both add that it was revealed concerning those of them who believed. Al-Qurtubi also gives, introduced with \"it is said\", Ikrimah ibn Abi Jahl, whom Muslims called \"son of the Pharaoh of this ummah\" when he came to Madinah as a Muslim, until he complained to the Prophet ﷺ.",
            "bn": "দাহহাকের বর্ণনা, যা দুই তাফসীরেই আছে, বলছে আয়াতটি বনু তামীমের প্রতিনিধিদল সম্পর্কে। তারা আম্মার, খাব্বাব, বিলাল, সুহাইব ও সালমান (রাঃ)-এর মতো গরিব সাহাবীদের জীর্ণ দশা দেখে উপহাস করেছিল। দুজনেই যোগ করেন, আয়াতটি নাযিল হয় তাদের মধ্যে যারা ঈমান এনেছিল তাদের ব্যাপারে। কুরতুবী 'বলা হয়' কথাটি দিয়ে আরেকটি বর্ণনাও আনেন। ইকরিমা ইবন আবী জাহল মুসলিম হয়ে মদীনায় এলে মুসলিমরা তাঁকে বলত \"এই উম্মতের ফেরাউনের ছেলে\"। শেষে তিনি নবী ﷺ-এর কাছে অভিযোগ করেন।"
          },
          {
            "en": "For the women's clause, al-Baghawi relates from Anas that the Prophet's ﷺ wives had taunted Umm Salamah (RA) for being short, and from Ikrimah, from Ibn Abbas, that women called Safiyyah bint Huyayy (RA) \"a Jewess, daughter of two Jews\". Al-Qurtubi gives the Prophet's ﷺ reply to her: why did you not say, my father is Harun (AS), my uncle is Musa (AS), and my husband is Muhammad? He also cites at-Tirmidhi's report from Aisha (RA): when she gestured that Safiyyah was short, he said, \"You have said a statement which, if it were mixed in with the water of the sea, it would pollute it.\"",
            "bn": "নারীদের অংশের ব্যাপারে বাগাভী আনাস থেকে বর্ণনা করেন, নবী ﷺ-এর স্ত্রীগণ উম্মে সালামা (রাঃ)-কে খাটো বলে খোঁটা দিয়েছিলেন। আর ইকরিমার সূত্রে ইবন আব্বাস থেকে বর্ণনা করেন, মহিলারা সাফিয়্যা বিনতে হুয়াই (রাঃ)-কে বলত \"ইহুদি, দুই ইহুদির মেয়ে\"। কুরতুবী তাঁকে দেওয়া নবী ﷺ-এর জবাবটি আনেন: তুমি কেন বললে না, আমার পিতা হারূন (আঃ), আমার চাচা মূসা (আঃ), আর আমার স্বামী মুহাম্মাদ? কুরতুবী তিরমিযীর একটি বর্ণনাও উদ্ধৃত করেন। আয়েশা (রাঃ) হাতের ইশারায় সাফিয়্যাকে খাটো বোঝালে তিনি বললেন, \"তুমি এমন একটি কথা বললে, যা সমুদ্রের পানিতে মেশালে তাও দূষিত হয়ে যেত।\""
          }
        ]
      },
      {
        "h": {
          "en": "Your Brother Is Yourself",
          "bn": "ভাইকে খোঁটা, নিজেকেই খোঁটা"
        },
        "p": [
          {
            "en": "Lamz, al-Qurtubi says, is finding fault. At-Tabari relates from Mujahid, Qatadah and Ibn Abbas that it means taunting: let none of you taunt another; Ibn Kathir adds Sa'id ibn Jubayr and Muqatil ibn Hayyan to that list. At-Tabari's own gloss joins two things, let none of you backbite another and let none of you taunt another. Ad-Dahhak, in al-Qurtubi, read it as cursing each other. The commentators also differ on how lamz relates to its twin word, hamz.",
            "bn": "কুরতুবী বলেন, লামযের অর্থ দোষ ধরা। তাবারী মুজাহিদ, কাতাদা ও ইবন আব্বাস থেকে বর্ণনা করেন, এর অর্থ খোঁচা দেওয়া: তোমরা কেউ কাউকে খোঁচা দিয়ো না। ইবন কাসীর এই তালিকায় সাঈদ ইবন জুবাইর ও মুকাতিল ইবন হাইয়ানের নামও যোগ করেন। তাবারীর নিজের ব্যাখ্যায় দুটি কথা একসঙ্গে আছে: কেউ কারও গীবত করবে না, আর কেউ কাউকে খোঁচা দেবে না। কুরতুবীর বর্ণনায় দাহহাক এর অর্থ করেছেন পরস্পরকে লানত করা। লামযের যমজ শব্দ হামযের সঙ্গে এর সম্পর্ক নিয়েও তাফসীরকারদের মত আলাদা।"
          },
          {
            "en": "Ibn Kathir, citing 104:1 and 68:11, says hamz is by deed and lamz by word, and as-Sa'di says the same. Al-Qurtubi reports at-Tabari the other way round: lamz is by hand, eye, tongue and gesture, while hamz is by the tongue alone. The difference is left standing; both sides agree that the two are forbidden, and as-Sa'di adds that both carry the threat of the Fire.",
            "bn": "ইবন কাসীর ১০৪:১ ও ৬৮:১১ আয়াত উদ্ধৃত করে বলেন, হাময হয় কাজে আর লাময কথায়। সা'দীও তা-ই বলেন। কুরতুবী তাবারীর মত উল্টোভাবে বর্ণনা করেন: লাময হয় হাত, চোখ, জিহ্বা ও ইশারায়, আর হাময কেবল জিহ্বায়। মতভেদটি এখানে যেমন আছে তেমনই থাকুক। তবে দুই পক্ষই একমত যে দুটোই নিষিদ্ধ। সা'দী আরও বলেন, দুটোর জন্যই জাহান্নামের হুমকি রয়েছে।"
          },
          {
            "en": "Then anfusakum, yourselves. At-Tabari explains that Allah made the one who taunts his brother a taunter of himself, because believers are like one man in what they owe each other, and he cites the Prophet's ﷺ saying, which Muslim relates from an-Nu'man ibn Bashir (RA): \"The similitude of believers in regard to mutual love, affection, fellow-feeling is that of one body; when any limb of it aches, the whole body aches, because of sleeplessness and fever.\" Ibn Kathir compares 4:29, do not kill yourselves, meaning each other. As-Sa'di adds that whoever taunts another invites the taunt back.",
            "bn": "এরপর আনফুসাকুম, অর্থাৎ নিজেদের। তাবারী ব্যাখ্যা করেন, যে তার ভাইকে খোঁচা দেয়, আল্লাহ তাকে নিজেকেই খোঁচাদাতা বলেছেন। কারণ পরস্পরের প্রতি দায়িত্বে মু'মিনরা একজন মানুষের মতো। প্রমাণে তিনি নবী ﷺ-এর বাণী আনেন, যা মুসলিম নু'মান ইবন বাশীর (রাঃ) থেকে বর্ণনা করেছেন: \"পারস্পরিক ভালোবাসা, দয়া ও সহমর্মিতায় মু'মিনদের উপমা একটি দেহের মতো। তার কোনো অঙ্গ ব্যথা পেলে গোটা দেহ নির্ঘুম রাত আর জ্বরে তার সঙ্গী হয়।\" ইবন কাসীর তুলনা করেন ৪:২৯ আয়াতের সঙ্গে: নিজেদের হত্যা করো না, অর্থাৎ একে অন্যকে। সা'দী যোগ করেন, যে অন্যকে খোঁচা দেয়, সে পাল্টা খোঁচাকে ডেকে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Names a Person Dislikes",
          "bn": "যে নামে মানুষ কষ্ট পায়"
        },
        "p": [
          {
            "en": "At-Tabari says nabz and laqab mean the same thing, and records a disagreement over which names are meant. One group said the verse concerns people who had names from the Jahiliyyah and, once Muslim, were forbidden to call each other by the ones they disliked. At-Tirmidhi relates from Abu Jubayrah ibn ad-Dahhak: \"A man among us would be known by two or three names. He would be called by one that perhaps he disliked, so this Ayah was revealed: Nor insult with nicknames (49:11).\" At-Tirmidhi graded it hasan sahih.",
            "bn": "তাবারী বলেন, নাবয ও লাকাব একই অর্থের শব্দ। কোন নামের কথা বলা হচ্ছে, এ নিয়ে তিনি মতভেদ লিপিবদ্ধ করেন। একদল বলেন, আয়াতটি এমন লোকদের ব্যাপারে, যাদের জাহিলিয়াতের কিছু নাম ছিল। মুসলিম হওয়ার পর তাদের নিষেধ করা হয় সেসব নামে একে অন্যকে ডাকতে, যা তারা অপছন্দ করত। তিরমিযী আবু জুবাইরা ইবনুদ দাহহাক থেকে বর্ণনা করেন: \"আমাদের মধ্যে একজন লোকের দুই বা তিনটি নাম থাকত। তাকে হয়তো এমন নামে ডাকা হতো যা সে অপছন্দ করত। তখন এই আয়াত নাযিল হয়: আর তোমরা একে অপরকে মন্দ নামে ডেকো না (৪৯:১১)।\" তিরমিযী একে হাসান সহীহ বলেছেন।"
          },
          {
            "en": "Abu Dawud's wording, from the same Companion, places it among the Banu Salimah: when the Messenger of Allah ﷺ came and called a man by one of those names, they would say, Hold on, Messenger of Allah, he gets angry at this name. Abu Dawud adds no grading of his own. Ibn Kathir cites the report from Imam Ahmad and Abu Dawud, and Ma'arif al-Qur'an adds that the Prophet ﷺ used such names unaware that they offended.",
            "bn": "আবু দাউদের বর্ণনা একই সাহাবী থেকে, তাতে ঘটনাটি বনু সালিমার। আল্লাহর রসূল ﷺ এসে কাউকে সেসব নামের কোনো একটিতে ডাকলে লোকেরা বলত, থামুন, হে আল্লাহর রসূল, এই নামে সে রেগে যায়। আবু দাউদ এখানে নিজের পক্ষ থেকে কোনো মান উল্লেখ করেননি। ইবন কাসীর বর্ণনাটি ইমাম আহমাদ ও আবু দাউদ থেকে উদ্ধৃত করেন। মাআরিফুল কুরআন যোগ করে, নামগুলো যে কষ্ট দেয় তা না জেনেই নবী ﷺ সেগুলো ব্যবহার করতেন।"
          },
          {
            "en": "Others took the laqab to be a label of sin or unbelief. Ikrimah said it is calling a man hypocrite or disbeliever; Qatadah, sinner or hypocrite; Mujahid, a Muslim called a disbeliever. Ibn Abbas said it is reproaching a man for evil deeds he has repented of. Al-Hasan said a Jew or Christian who became Muslim was hailed by his old faith. Al-Baghawi adds Ata: calling your brother a dog, a donkey or a pig. At-Tabari accepts every one of these, since the prohibition is general: any name or description a person dislikes.",
            "bn": "অন্যরা লাকাব বলতে বুঝেছেন গুনাহ বা কুফরির তকমা। ইকরিমা বলেন, কাউকে মুনাফিক বা কাফির বলে ডাকা। কাতাদা বলেন, ফাসিক বা মুনাফিক বলে ডাকা। মুজাহিদ বলেন, মুসলিমকে কাফির বলে ডাকা। ইবন আব্বাস বলেন, এমন মন্দ কাজের জন্য কাউকে খোঁটা দেওয়া, যা থেকে সে তওবা করেছে। হাসান বলেন, কোনো ইহুদি বা খ্রিস্টান মুসলিম হলে তাকে তার পুরনো ধর্মের নামে ডাকা হতো। বাগাভী আতার মতও আনেন: ভাইকে কুকুর, গাধা বা শূকর বলা। তাবারী এর একটিকেও বাদ দেন না, কারণ নিষেধটি সার্বিক। মানুষ অপছন্দ করে এমন যে-কোনো নাম বা বিশেষণই এর আওতায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Names That Honour",
          "bn": "যে নামে সম্মান মেলে"
        },
        "p": [
          {
            "en": "As-Sa'di says titles that are not blameworthy fall outside the prohibition, and al-Qurtubi quotes Ibn al-Arabi's measure: whatever a person dislikes being called is not allowed, because it hurts him. Customary names such as al-A'raj, the lame, were accepted where the bearer felt no hurt, and Ibn al-Mubarak said there is no harm in such a name if you mean the description and not the fault. Al-Qurtubi and Ma'arif al-Qur'an also list honouring titles: as-Siddiq for Abu Bakr and al-Faruq for Umar (RA).",
            "bn": "সা'দী বলেন, যে উপাধিতে নিন্দা নেই, তা এই নিষেধের বাইরে। আর কুরতুবী ইবনুল আরাবীর মাপকাঠিটা উদ্ধৃত করেন: যে নামে ডাকা হলে মানুষ অপছন্দ করে, সে নাম চলবে না, কারণ তাতে সে কষ্ট পায়। আল-আ'রাজ, অর্থাৎ খোঁড়া, এ ধরনের প্রচলিত নাম গৃহীত হয়েছিল সেখানে, যেখানে নামধারী কষ্ট পেতেন না। ইবনুল মুবারক বলেন, দোষ নয়, শুধু পরিচয় বোঝাতে চাইলে এমন নামে সমস্যা নেই। কুরতুবী ও মাআরিফুল কুরআন সম্মানের উপাধিগুলোও উল্লেখ করেন: আবু বকরের জন্য আস-সিদ্দীক, উমরের জন্য আল-ফারূক (রাঃ)।"
          }
        ]
      },
      {
        "h": {
          "en": "Wretched Is the Name",
          "bn": "কত নিকৃষ্ট সেই নাম"
        },
        "p": [
          {
            "en": "Bi'sa al-ismu al-fusuqu ba'da al-iman. At-Tabari reads it as a warning to the doer: whoever mocks, taunts or labels a believer after his own faith is a fasiq, so do not do it and earn that wretched name. Ibn Zayd read it as calling a Muslim fasiq after Islam; at-Tabari rejects this, since a verse that opens by forbidding these acts should close by threatening those who commit them. Al-Baghawi gives both readings. Ibn Kathir takes the fusuq to be the nicknaming itself, as practised in the Jahiliyyah; the Muyassar extends it to the mockery and taunting as well.",
            "bn": "বি'সাল ইসমুল ফুসূকু বা'দাল ঈমান। তাবারী এটিকে পড়েন যে করে তার প্রতি সতর্কবাণী হিসেবে। নিজে ঈমান আনার পর যে কোনো মু'মিনকে বিদ্রূপ করে, খোঁচা দেয় বা তকমা লাগায়, সে ফাসিক। কাজেই এমন করে ওই নিকৃষ্ট নাম কামাই করো না। ইবন যায়দের ব্যাখ্যা ছিল, ইসলামের পর কোনো মুসলিমকে ফাসিক বলে ডাকা। তাবারী তা গ্রহণ করেন না। কারণ যে আয়াত এসব কাজ নিষেধ করে শুরু হয়েছে, তার শেষে হুমকি থাকা উচিত যারা তা করে তাদের জন্য। বাগাভী দুটি ব্যাখ্যাই আনেন। ইবন কাসীরের মতে এখানে ফুসূক মানে খোদ এই মন্দ নামে ডাকা, জাহিলিয়াতে যেমন চলত। মুয়াসসার এর মধ্যে বিদ্রূপ আর খোঁচাকেও ধরেছে।"
          },
          {
            "en": "Wa man lam yatub. At-Tabari: whoever does not repent of nicknaming, taunting or mocking his brother has wronged himself, earning Allah's punishment by doing what He forbade. As-Sa'di spells out the repentance owed here: turning to Allah, and clearing his brother's right by asking his pardon, seeking forgiveness, and praising him in place of the blame. Then he divides people into two kinds, a wrongdoer to himself who does not repent and a repentant who succeeds, with no third.",
            "bn": "ওয়া মাল লাম ইয়াতুব। তাবারী বলেন, ভাইকে মন্দ নামে ডাকা, খোঁচা দেওয়া বা বিদ্রূপ করা থেকে যে তওবা করে না, সে নিজের ওপরই জুলুম করল। আল্লাহর নিষেধ অমান্য করে সে নিজের জন্য তাঁর শাস্তি কামাই করল। সা'দী খুলে বলেন এখানে কেমন তওবা পাওনা। আল্লাহর দিকে ফিরে আসা, আর ভাইয়ের হক থেকে মুক্ত হওয়া: তার কাছে মাফ চেয়ে নেওয়া, ইস্তিগফার করা, আর নিন্দার জায়গায় তার প্রশংসা করা। তারপর তিনি মানুষকে দুই ভাগে ভাগ করেন। একদল নিজের ওপর জুলুমকারী, তওবা করে না। আরেকদল তওবাকারী, সফলকাম। এর মাঝামাঝি তৃতীয় কোনো দল নেই।"
          }
        ]
      }
    ]
  },
  "49:12-13": {
    "sections": [
      {
        "h": {
          "en": "Contempt Driven Out of Sight",
          "bn": "চোখের আড়ালে অবজ্ঞা"
        },
        "p": [
          {
            "en": "The verse before this, 49:11, banned ridicule, insults and wounding nicknames, all aimed at a person's face, and 49:10 had called the believers brothers. 49:12 follows contempt to where it hides. Ma'arif al-Qur'an counts three prohibitions in it: zann, unfounded suspicion; tajassus, secretly looking into others' faults; and ghibah, speaking of someone behind his back in a way that would hurt him if he heard it. Of the three, it says, backbiting is condemned most harshly.",
            "bn": "এর আগের আয়াত ৪৯:১১ নিষেধ করেছে ঠাট্টা, খোঁটা আর মন্দ নামে ডাকা। এগুলো সবই করা হয় মানুষের মুখের ওপর। তারও আগে ৪৯:১০ মু'মিনদের ভাই বলে ঘোষণা করেছে। এবার ৪৯:১২ অবজ্ঞার পিছু নেয় তার লুকানোর জায়গা পর্যন্ত। মাআরিফুল কুরআন এ আয়াতে তিনটি নিষেধ গোনে। যান্ন, মানে ভিত্তিহীন সন্দেহ। তাজাসসুস, মানে গোপনে অন্যের দোষ খুঁজে বেড়ানো। আর গীবত, মানে কারও অনুপস্থিতিতে এমন কথা বলা যা শুনলে সে কষ্ট পেত। মাআরিফ বলছে, তিনটির মধ্যে সবচেয়ে কঠোর নিন্দা এসেছে গীবতের।"
          },
          {
            "en": "Ma'arif explains the severity. A hurtful word said to someone's face can be answered, and fear of the answer keeps most people quiet; behind his back no one defends him, so the meanest person will speak against the greatest, and the talk keeps spreading. Ibn Kathir joins the next verse to this: Allah addresses mankind, he says, right after forbidding backbiting and people's contempt for each other, to remind them that they are equal in their humanity.",
            "bn": "এত কঠোরতার কারণও মাআরিফ বলে দেয়। মুখের ওপর কষ্টদায়ক কথা বললে লোকটি জবাব দিতে পারে, আর জবাবের ভয়ে বেশির ভাগ মানুষ চুপ থাকে। কিন্তু পেছনে তার পক্ষে কেউ দাঁড়ায় না। তাই সবচেয়ে নীচ লোকও সবচেয়ে বড় মানুষের নামে কথা বলার সাহস পায়, আর কথা ছড়াতেই থাকে। ইবন কাসীর পরের আয়াতকে এর সঙ্গে জুড়ে দেন। তাঁর ভাষায়, গীবত আর একে অন্যকে তুচ্ছ করার নিষেধের ঠিক পরেই আল্লাহ সব মানুষকে ডেকে মনে করিয়ে দেন যে মানুষ হিসেবে তারা সবাই সমান।"
          }
        ]
      },
      {
        "h": {
          "en": "Much Suspicion, Not All",
          "bn": "সব ধারণা নয়, অনেক ধারণা"
        },
        "p": [
          {
            "en": "Ijtanibu kathiran min az-zann: avoid much of suspicion. At-Tabari asks why much and not all. The suspicion meant is thinking evil of believers, which the thinker has no right to; but Allah permitted believers to think good of each other, as in 24:12: why, when you heard it, did the believing men and women not think good of their own people? From Ibn 'Abbas he relates that the believer's evil thought about a believer, not his good thought, is the sin.",
            "bn": "ইজতানিবূ কাসীরাম মিনায যান্ন: অনেক ধারণা থেকে বেঁচে থাকো। আয়াত কেন 'সব' না বলে 'অনেক' বলল, তাবারী সে প্রশ্ন তোলেন। এখানে উদ্দেশ্য মু'মিনদের সম্পর্কে মন্দ ধারণা, যা পোষণ করার কোনো অধিকার ধারণাকারীর নেই। অথচ মু'মিনদের পরস্পরের প্রতি ভালো ধারণা রাখার অনুমতি আল্লাহ দিয়েছেন। প্রমাণ হিসেবে তিনি আনেন ২৪:১২: তোমরা যখন কথাটা শুনলে, তখন মু'মিন নারী-পুরুষেরা কেন নিজেদের লোকদের ব্যাপারে ভালো ধারণা করল না? ইবন আব্বাস থেকে তিনি বর্ণনা করেন, মু'মিনের প্রতি মু'মিনের মন্দ ধারণাই গুনাহ, ভালো ধারণা নয়।"
          },
          {
            "en": "Al-Qurtubi narrows the target. Zann here, his scholars say, is tuhmah, an accusation with no cause behind it, such as suspecting someone of indecency or drinking while nothing in his conduct shows it. The test is the outward state: suspecting corruption in someone whose life shows discretion, righteousness and trustworthiness is forbidden, unlike someone known for open wrongdoing. Nor is all reasoning on probability condemned; most rulings of the Shari'ah, he notes, rest on a strong probability backed by evidence.",
            "bn": "কুরতুবী লক্ষ্যটা আরও সরু করে আনেন। তাঁর আলেমদের মতে এখানে যান্ন মানে তুহমা, অর্থাৎ এমন অভিযোগ যার পেছনে কোনো কারণ নেই। যেমন কাউকে অশ্লীলতা বা মদপানের সন্দেহ করা, অথচ তার আচরণে এমন কিছুই দেখা যায়নি। মাপকাঠি হলো মানুষটির বাহ্যিক অবস্থা। যার জীবনে দেখা যায় দোষ ঢেকে চলা, সৎকর্ম আর আমানতদারি, তার সম্পর্কে অসততার সন্দেহ হারাম। প্রকাশ্যে অন্যায় করার জন্য যে পরিচিত, তার কথা আলাদা। আবার সম্ভাবনার ভিত্তিতে সব বিচারই নিন্দিত নয়। তিনি বলেন, শরীয়তের বেশির ভাগ বিধান দাঁড়িয়ে আছে প্রমাণসমর্থিত প্রবল ধারণার ওপর।"
          },
          {
            "en": "Ibn Kathir, al-Baghawi and al-Qurtubi bring the hadith of Abu Hurayrah here. Al-Bukhari records it (6066): Allah's Messenger ﷺ said, 'Beware of suspicion, for suspicion is the most lying of speech. Do not seek out news of others, do not spy, do not bid up prices to deceive, do not envy each other, do not hate each other, do not turn your backs on each other, and be, O servants of Allah, brothers.' As-Sa'di explains the danger: evil suspicion left in the heart keeps at its owner until he says and does what he should not.",
            "bn": "ইবন কাসীর, বাগাভী ও কুরতুবী এখানে আবু হুরায়রা (রাঃ)-এর হাদীসটি আনেন। বুখারী এটি সংকলন করেছেন (৬০৬৬): আল্লাহর রাসূল ﷺ বলেছেন, 'তোমরা ধারণা থেকে বেঁচে থাকো, কারণ ধারণা সবচেয়ে মিথ্যা কথা। অন্যের খবর খুঁজে বেড়িয়ো না, গোয়েন্দাগিরি করো না, ধোঁকা দিয়ে দাম চড়িয়ো না, পরস্পর হিংসা করো না, বিদ্বেষ রেখো না, একে অন্যের দিক থেকে পিঠ ফিরিয়ে নিয়ো না। হে আল্লাহর বান্দারা, ভাই ভাই হয়ে যাও।' বিপদটা কোথায়, সা'দী বুঝিয়ে দেন। মন্দ ধারণা অন্তরে থেকে গেলে সেখানেই থামে না। মানুষকে তা ঠেলতেই থাকে, যতক্ষণ না সে অনুচিত কথা বলে আর অনুচিত কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Leave What Allah Has Covered",
          "bn": "আল্লাহ যা ঢেকে রেখেছেন"
        },
        "p": [
          {
            "en": "Wa la tajassasu: and do not spy. At-Tabari: let none of you follow up another's private faults or dig into his secrets to uncover his flaws; be content with what has appeared of him, and praise or blame by that. Mujahid puts it shorter: take what appears and leave what Allah has covered. Ibn Kathir separates the near twins: tajassus is mostly used of evil, hence jasus, a spy; tahassus mostly of good, as when Ya'qub (AS) sends his sons in 12:87 to search for Yusuf (AS) and his brother.",
            "bn": "ওয়া লা তাজাসসাসূ: আর গোয়েন্দাগিরি করো না। তাবারী ব্যাখ্যা করেন, তোমাদের কেউ যেন অন্যের গোপন দোষের পিছু না নেয়, দোষ বের করার আশায় তার ভেতরের কথা খুঁড়ে না বেড়ায়। তার যা প্রকাশ পেয়েছে তাতেই সন্তুষ্ট থাকো, প্রশংসা বা নিন্দা তার ভিত্তিতেই করো। মুজাহিদের কথা আরও ছোট: যা প্রকাশ পেয়েছে তা নাও, আল্লাহ যা ঢেকে রেখেছেন তা ছেড়ে দাও। ইবন কাসীর কাছাকাছি দুটি শব্দের পার্থক্য দেখান। তাজাসসুস সাধারণত মন্দ অর্থে আসে, তা থেকেই জাসূস বা গুপ্তচর। আর তাহাসসুস সাধারণত ভালো অর্থে, যেমন ১২:৮৭ আয়াতে ইয়াকূব (আঃ) ছেলেদের পাঠান ইউসুফ (আঃ) ও তাঁর ভাইয়ের খোঁজ নিতে।"
          },
          {
            "en": "Two reports show it in practice. Ibn Kathir, al-Baghawi and al-Qurtubi relate that a man was brought to Ibn Mas'ud, accused of having wine dripping from his beard, and he said: we have been forbidden to spy, but if something becomes apparent to us, we will act on it. Al-Qurtubi adds from 'Abd ar-Rahman ibn 'Awf: on a night watch with 'Umar in Madinah they saw a lamp behind a closed door and heard loud voices, and 'Umar said those inside were drinking. 'Abd ar-Rahman answered that they had spied, though Allah had forbidden it, and 'Umar left them.",
            "bn": "দুটি বর্ণনায় এর চর্চা দেখা যায়। ইবন কাসীর, বাগাভী ও কুরতুবী বর্ণনা করেন, এক ব্যক্তিকে ইবন মাসউদ (রাঃ)-এর কাছে আনা হলো এই অভিযোগে যে তার দাড়ি থেকে মদ ঝরছে। তিনি বললেন, আমাদের গোয়েন্দাগিরি করতে নিষেধ করা হয়েছে, তবে কিছু প্রকাশ পেলে আমরা সে অনুযায়ী ব্যবস্থা নেব। কুরতুবী আবদুর রহমান ইবন আওফ (রাঃ)-এর একটি বর্ণনা যোগ করেন। এক রাতে তিনি উমর (রাঃ)-এর সঙ্গে মদীনায় পাহারা দিচ্ছিলেন। বন্ধ দরজার আড়ালে বাতি জ্বলছে, ভেতরে উঁচু গলার শোরগোল। উমর (রাঃ) বললেন, ওরা এখন মদ খাচ্ছে। আবদুর রহমান (রাঃ) বললেন, আল্লাহ গোয়েন্দাগিরি নিষেধ করেছেন, অথচ আমরা তা-ই করে ফেলেছি। উমর (রাঃ) তাদের ছেড়ে ফিরে গেলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whatever He Would Dislike",
          "bn": "যা শুনলে তার খারাপ লাগত"
        },
        "p": [
          {
            "en": "Wa la yaghtab ba'dukum ba'da: and do not backbite each other. The Prophet ﷺ defined the word. Muslim records it (2589), and al-Baghawi relates it on this verse: 'Do you know what backbiting is?' They said: Allah and His Messenger know best. He said: 'Your mentioning your brother with what he dislikes.' It was said: What if what I say is actually in my brother? He said: 'If what you say is in him, you have backbitten him, and if it is not in him, you have slandered him.'",
            "bn": "ওয়া লা ইয়াগতাব বা'দুকুম বা'দা: আর তোমরা একে অন্যের গীবত করো না। শব্দটির সংজ্ঞা নবী ﷺ নিজেই দিয়েছেন। মুসলিম এটি সংকলন করেছেন (২৫৮৯), আর বাগাভী এ আয়াতের আলোচনায় তা বর্ণনা করেন: 'তোমরা কি জানো গীবত কী?' সাহাবীরা বললেন, আল্লাহ ও তাঁর রাসূলই ভালো জানেন। তিনি বললেন, 'তোমার ভাইকে এমনভাবে উল্লেখ করা, যা সে অপছন্দ করে।' জিজ্ঞেস করা হলো, আমি যা বলছি তা যদি সত্যিই আমার ভাইয়ের মধ্যে থাকে? তিনি বললেন, 'তুমি যা বলছ তা যদি তার মধ্যে থাকে, তবে তুমি তার গীবত করলে। আর যদি না থাকে, তবে তুমি তাকে অপবাদ দিলে।'"
          },
          {
            "en": "So the familiar defence, but it is true, is exactly what makes it backbiting; if it is false, it becomes buht, slander. At-Tabari relates the same division from Masruq. Al-Qurtubi quotes al-Hasan that there are three, all named in Allah's Book: ghibah, saying of your brother what is in him; ifk, saying what has reached you about him; and buhtan, saying what is not in him at all.",
            "bn": "তাহলে চেনা অজুহাতটা, 'কিন্তু কথা তো সত্যি', ঠিক সেটাই কাজটাকে গীবত বানায়। কথা মিথ্যা হলে তা হয়ে যায় বুহত, মানে অপবাদ। তাবারী মাসরূক থেকেও একই ভাগ বর্ণনা করেন। কুরতুবী হাসানের কথা উদ্ধৃত করেন যে এর তিন রূপ, তিনটিই আল্লাহর কিতাবে আছে। গীবত হলো ভাইয়ের মধ্যে যা আছে তা বলা। ইফক হলো তার সম্পর্কে যা কানে এসেছে তা বলা। আর বুহতান হলো তার মধ্যে যা একেবারেই নেই তা বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "Flesh No One Would Eat",
          "bn": "যে গোশত কেউ মুখে তোলে না"
        },
        "p": [
          {
            "en": "Then the image: would any of you like to eat his dead brother's flesh? You would detest it. At-Tabari draws the line: if you would not love to eat his flesh after death, hate to backbite him in life, for Allah forbade both. Qatada sharpens it: as you would loathe eating from a carcass crawling with worms, loathe backbiting him while he lives. Al-Qurtubi gives the point of the likeness: the dead man does not know his flesh is eaten, as the living man does not know he is backbitten.",
            "bn": "এরপর সেই ছবি: তোমাদের কেউ কি তার মৃত ভাইয়ের গোশত খেতে পছন্দ করবে? তোমরা তো তা ঘৃণাই করো। তাবারী সোজা রেখা টানেন। মৃত্যুর পর তার গোশত খেতে যদি তোমার রুচি না হয়, তবে জীবিত অবস্থায় তার গীবতকেও ঘৃণা করো, কারণ আল্লাহ দুটিকেই হারাম করেছেন। কাতাদা কথাটাকে আরও তীক্ষ্ণ করেন: পোকায় ভরা মরা পশু খেতে যেমন তোমার ঘেন্না হয়, জীবিত ভাইয়ের গীবতেও তেমন ঘেন্না রাখো। উপমাটা কোথায় মেলে, কুরতুবী বলে দেন। মৃত মানুষ জানে না তার গোশত খাওয়া হচ্ছে, যেমন জীবিত মানুষ জানে না তার গীবত হচ্ছে।"
          },
          {
            "en": "Ibn Kathir, al-Baghawi and al-Qurtubi also bring a report from Anas. Abu Dawud records it (4878): the Prophet ﷺ said, 'When I was taken up, I passed by people with nails of copper, scratching their faces and chests. I said: Who are these, Jibril? He said: These are the people who eat people's flesh and attack their honour.' Abu Dawud gives no grading; he notes that Yahya ibn 'Uthman transmitted it from Baqiyyah without Anas. As-Sa'di concludes from the comparison that backbiting is a major sin.",
            "bn": "ইবন কাসীর, বাগাভী ও কুরতুবী আনাস (রাঃ)-এর একটি বর্ণনাও আনেন। আবু দাউদ এটি সংকলন করেছেন (৪৮৭৮): নবী ﷺ বলেছেন, 'আমাকে যখন ঊর্ধ্বে নিয়ে যাওয়া হলো, আমি এমন কিছু লোকের পাশ দিয়ে গেলাম যাদের নখ তামার, তা দিয়ে তারা নিজেদের মুখ ও বুক আঁচড়াচ্ছিল। আমি বললাম, জিবরীল, এরা কারা? তিনি বললেন, এরা মানুষের গোশত খায় আর তাদের ইজ্জতে আঘাত করে।' আবু দাউদ এর কোনো মান উল্লেখ করেননি। তিনি শুধু জানান, ইয়াহইয়া ইবন উসমান বাকিয়্যা থেকে এটি আনাসের উল্লেখ ছাড়া বর্ণনা করেছেন। সা'দী উপমাটি থেকেই সিদ্ধান্ত টানেন যে গীবত কবীরা গুনাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Limits, and the Way Back",
          "bn": "সীমারেখা ও ফেরার পথ"
        },
        "p": [
          {
            "en": "The ban has edges. Ibn Kathir calls backbiting forbidden by consensus, except where a weightier benefit is served, as in assessing narrators and giving sincere advice; he cites the Prophet's ﷺ words to Fatimah bint Qays, when two men had proposed to her, that one was penniless and the other never put his stick down from his shoulder. Al-Qurtubi adds the open sinner who flaunts his wrongdoing, a complaint to a judge against a wrongdoer, and a description given to obtain a ruling.",
            "bn": "নিষেধের একটা সীমানা আছে। ইবন কাসীর বলেন, গীবত সর্বসম্মতভাবে হারাম, তবে যেখানে এর চেয়ে বড় কল্যাণ জড়িত, যেমন বর্ণনাকারীদের যাচাই আর আন্তরিক পরামর্শ, সেখানে ব্যতিক্রম। উদাহরণ হিসেবে তিনি আনেন ফাতিমা বিনতে কায়স (রাঃ)-কে বলা নবী ﷺ-এর কথা। দুজন লোক তাঁকে বিয়ের প্রস্তাব দিয়েছিলেন। নবী ﷺ বললেন, একজন নিঃস্ব, আর অন্যজন কাঁধ থেকে লাঠি নামায় না। কুরতুবী যোগ করেন প্রকাশ্য পাপীর কথা, যে নিজের অন্যায় জাহির করে বেড়ায়। জুলুমকারীর বিরুদ্ধে বিচারকের কাছে নালিশ, আর ফতোয়া জানতে ঘটনার বিবরণ দেওয়াও এর মধ্যে পড়ে।"
          },
          {
            "en": "Wa-ttaqu Allah, inna Allaha tawwabun rahim. As-Sa'di explains at-Tawwab as He who permits His servant's repentance, grants him success in it, then accepts it. How the backbiter repents is disputed. Ibn Kathir gives the majority view: he stops and resolves not to return; whether remorse is required, and whether he must seek the wronged person's pardon, is argued. Others said he need not tell him, as it could hurt him more, but should praise him where he had blamed him. Al-Qurtubi holds that pardon must be sought.",
            "bn": "ওয়াত্তাকুল্লাহ, ইন্নাল্লাহা তাওয়াবুর রাহীম। সা'দী তাওয়াব নামের ব্যাখ্যা দেন এভাবে: তিনি বান্দাকে তওবার অনুমতি দেন, তওবা করার তাওফীক দেন, তারপর তা কবুল করেন। গীবতকারী কীভাবে তওবা করবে, তা নিয়ে মতভেদ আছে। ইবন কাসীর অধিকাংশ আলেমের মত জানান: সে গীবত ছেড়ে দেবে আর ফিরে না যাওয়ার সংকল্প করবে। অনুশোচনা শর্ত কি না, আর যার গীবত করেছে তার কাছে মাফ চাইতে হবে কি না, তা নিয়ে বিতর্ক আছে। অন্যরা বলেছেন, তাকে জানানোর দরকার নেই, কারণ জানলে সে আরও কষ্ট পেতে পারে। বরং যেখানে নিন্দা করেছিল, সেখানে তার প্রশংসা করবে। কুরতুবীর মত হলো, মাফ চেয়ে নিতেই হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Pair, Many Lineages",
          "bn": "এক জোড়া, বহু বংশধারা"
        },
        "p": [
          {
            "en": "49:13 turns to everyone: ya ayyuha an-nas, O mankind, We created you from a male and a female. The Muyassar, al-Baghawi, Ibn Kathir, al-Qurtubi and as-Sa'di take these to be Adam (AS) and Hawwa', and the Muyassar concludes at once: so there is no ranking among you in lineage. At-Tabari reads it differently, with Mujahid: each of you was formed from the water of a man and of a woman. Al-Qurtubi notes that 4:1, opening Surah an-Nisa', says the same about creation.",
            "bn": "৪৯:১৩ আয়াত মু'মিনদের ছাড়িয়ে সব মানুষকে ডাকে: ইয়া আইয়ুহান নাস, হে মানুষ, আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে। মুয়াসসার, বাগাভী, ইবন কাসীর, কুরতুবী ও সা'দী বলেন, এঁরা আদম (আঃ) ও হাওয়া। মুয়াসসার সঙ্গে সঙ্গে ফল টানে: সুতরাং বংশের দিক থেকে তোমাদের কেউ কারও চেয়ে বড় নয়। তাবারী কথাটা পড়েন অন্যভাবে, মুজাহিদের সূত্রে: তোমাদের প্রত্যেককে গড়া হয়েছে পুরুষের পানি আর নারীর পানি থেকে। কুরতুবী মনে করিয়ে দেন, সূরা নিসার শুরুতে ৪:১ আয়াতও সৃষ্টির ব্যাপারে একই কথা বলে।"
          },
          {
            "en": "Shu'uban wa qaba'il: peoples and tribes. At-Tabari takes shu'ub as distant lineage, as when an Arab asked his sha'b answers Mudar or Rabi'ah, and qaba'il as nearer lineage, like Tamim within Mudar; he also records Ibn 'Abbas calling the shu'ub the great assemblies and the tribes clans. Then li-ta'arafu: so that you know each other in nearness and distance of kinship, at-Tabari says, not for any merit or nearness to Allah it earns. As-Sa'di lists what that knowing allows: mutual help, inheritance and the rights of kin.",
            "bn": "শু'ঊবান ওয়া কাবাইল: নানা জাতি ও গোত্র। তাবারীর মতে শু'ঊব মানে দূরের বংশধারা। কোনো আরবকে তার শা'ব জিজ্ঞেস করলে সে বলে মুদার বা রাবীআ। আর কাবাইল কাছের বংশধারা, যেমন মুদারের ভেতরে তামীম। তিনি ইবন আব্বাসের এই ব্যাখ্যাও আনেন যে শু'ঊব হলো বড় বড় জনসমষ্টি আর কাবাইল হলো শাখাগোত্র। তারপর লিতাআরাফূ: যাতে তোমরা পরস্পরকে চিনতে পারো। তাবারী বলেন, এ চেনা আত্মীয়তার কাছে-দূরে বোঝার জন্য, এতে কোনো শ্রেষ্ঠত্ব নেই, আল্লাহর নৈকট্যও নেই। সা'দী গুনে দেখান এই চেনাজানা কী এনে দেয়: পারস্পরিক সাহায্য, উত্তরাধিকার আর আত্মীয়ের হক আদায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports of the Occasion",
          "bn": "নাযিলের পটভূমির বর্ণনা"
        },
        "p": [
          {
            "en": "The commentators record several occasions for 49:13, each as its narrator's report. Al-Baghawi gives it from Muqatil and al-Qurtubi from Ibn 'Abbas: on the day Makkah was conquered, the Prophet ﷺ had Bilal climb onto the Ka'bah and give the adhan, and some men present made remarks, among them a slur on his colour. Jibril told the Prophet ﷺ, who called and questioned them; they admitted it, and the verse came down forbidding boasting of lineage, piling up wealth and scorning the poor.",
            "bn": "৪৯:১৩ নাযিলের পটভূমি নিয়ে তাফসীরকারেরা কয়েকটি বর্ণনা এনেছেন, প্রতিটি তার বর্ণনাকারীর নামে। বাগাভী এটি আনেন মুকাতিল থেকে, কুরতুবী ইবন আব্বাস থেকে। মক্কা বিজয়ের দিন নবী ﷺ বিলাল (রাঃ)-কে কা'বার ছাদে উঠে আযান দিতে বললেন। সেখানে উপস্থিত কয়েকজন মন্তব্য করল, তার মধ্যে ছিল তাঁর গায়ের রং নিয়ে কটূক্তি। জিবরীল (আঃ) নবী ﷺ-কে জানালেন। তিনি তাদের ডেকে জিজ্ঞেস করলেন, তারা স্বীকার করল। তখন আয়াতটি নাযিল হলো, বংশের গর্ব, সম্পদের বড়াই আর গরিবদের তুচ্ছ করা নিষেধ করে।"
          },
          {
            "en": "Al-Baghawi relates from Ibn 'Abbas, and al-Qurtubi as a reported view, that it came down about Thabit ibn Qays, who shamed a man by naming his mother: the Prophet ﷺ told him to look at the faces around him and, when Thabit said he saw white, red and black, told him he surpassed them only in religion and taqwa. Al-Qurtubi adds a mursal report from az-Zuhri, in Abu Dawud's Marasil: told to marry a woman of theirs to Abu Hind, the cupper, Banu Bayadah asked whether they should marry their daughters to their freedmen, and the verse came down.",
            "bn": "বাগাভী ইবন আব্বাস থেকে আরেকটি বর্ণনা আনেন, কুরতুবীও তা 'বলা হয়' বলে উল্লেখ করেন। সাবিত ইবন কায়স (রাঃ) এক ব্যক্তিকে তার মায়ের নাম ধরে খোঁটা দিয়েছিলেন। নবী ﷺ তাঁকে মজলিসের মুখগুলোর দিকে তাকাতে বললেন। সাবিত বললেন, আমি সাদা, লাল আর কালো দেখছি। নবী ﷺ বললেন, দ্বীন ও তাকওয়া ছাড়া আর কিছুতে তুমি তাদের চেয়ে শ্রেষ্ঠ নও। কুরতুবী যুহরী থেকে একটি মুরসাল বর্ণনাও যোগ করেন, যা আবু দাউদের মারাসীলে আছে। নবী ﷺ বনু বায়াদাকে শিঙা লাগানোর কাজ করা আবু হিন্দের সঙ্গে তাদের এক মেয়ের বিয়ে দিতে বললেন। তারা বলল, আমরা কি নিজেদের মুক্ত দাসদের সঙ্গে মেয়েদের বিয়ে দেব? তখন আয়াতটি নাযিল হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobility Weighed by Taqwa",
          "bn": "সম্মানের মাপ তাকওয়া"
        },
        "p": [
          {
            "en": "Inna akramakum 'inda Allahi atqakum: the most noble of you with Allah is the most God-fearing of you. At-Tabari: whoever guards himself most against Him by doing what He made obligatory and avoiding disobedience, not whoever has the greatest house or the largest clan. He relates from Ibn 'Abbas that people deny this verse, saying instead that the most noble is whoever has the greatest house. Al-Baghawi quotes Qatada: the noblest nobility is taqwa, and the meanest meanness is wickedness.",
            "bn": "ইন্না আকরামাকুম ইনদাল্লাহি আতকাকুম: আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে, যে সবচেয়ে বেশি তাকওয়াবান। তাবারীর ব্যাখ্যা: যে ফরজগুলো আদায় করে আর নাফরমানি এড়িয়ে তাঁকে সবচেয়ে বেশি ভয় করে চলে, সে-ই। যার ঘর সবচেয়ে বড় বা গোত্র সবচেয়ে ভারী, সে নয়। ইবন আব্বাস থেকে তিনি বর্ণনা করেন, লোকে এই আয়াত মানে না, বরং বলে সবচেয়ে সম্মানিত সে, যার ঘর সবচেয়ে বড়। বাগাভী কাতাদার কথা আনেন: সবচেয়ে বড় সম্মান তাকওয়া, আর সবচেয়ে বড় হীনতা পাপাচার।"
          },
          {
            "en": "Al-Bukhari (4689), from Abu Hurayrah, attached by Ibn Kathir and al-Baghawi: Allah's Messenger ﷺ was asked: Who is the most noble of people? He said: 'The most noble of them with Allah is the most God-fearing.' They said: We do not ask about that. He said: 'Then the most noble of people is Yusuf, Allah's prophet, son of Allah's prophet, son of Allah's prophet, son of Allah's Khalil.' They said: We do not ask about that. He said: 'Do you ask me about the lineages of the Arabs?' They said: Yes. He said: 'The best of you in the Jahiliyyah are the best of you in Islam, if they understand.'",
            "bn": "বুখারী আবু হুরায়রা (রাঃ)-এর একটি হাদীস সংকলন করেছেন (৪৬৮৯), আর ইবন কাসীর ও বাগাভী তা এ আয়াতের সঙ্গে আনেন: আল্লাহর রাসূল ﷺ-কে জিজ্ঞেস করা হলো, মানুষের মধ্যে সবচেয়ে সম্মানিত কে? তিনি বললেন, 'আল্লাহর কাছে তাদের মধ্যে সবচেয়ে সম্মানিত সে, যে সবচেয়ে বেশি তাকওয়াবান।' তারা বলল, আমরা এ বিষয়ে জিজ্ঞেস করছি না। তিনি বললেন, 'তাহলে মানুষের মধ্যে সবচেয়ে সম্মানিত ইউসুফ (আঃ), আল্লাহর নবী, আল্লাহর নবীর পুত্র, যিনিও আল্লাহর নবীর পুত্র, আর তিনি আল্লাহর খলীলের পুত্র।' তারা বলল, আমরা এ বিষয়েও জিজ্ঞেস করছি না। তিনি বললেন, 'তাহলে কি আরবদের বংশমূল সম্পর্কে জিজ্ঞেস করছ?' তারা বলল, হ্যাঁ। তিনি বললেন, 'জাহিলিয়াতে তোমাদের মধ্যে যারা শ্রেষ্ঠ ছিল, ইসলামেও তারাই শ্রেষ্ঠ, যদি তারা দ্বীনের বুঝ অর্জন করে।'"
          },
          {
            "en": "Al-Qurtubi brings, from at-Tabari's Adab an-Nufus, a report through Abu Nadrah from someone who heard the Prophet ﷺ preach at Mina in the middle of the days of tashriq: O people, your Lord is one and your father is one; no Arab has merit over a non-Arab, nor a non-Arab over an Arab, nor black over red, nor red over black, except by taqwa. It stands here as al-Qurtubi gives it, with no grading checked. The verse closes 'alimun khabir, and as-Sa'di explains: Allah knows who keeps taqwa inwardly and outwardly, and who keeps it only outwardly.",
            "bn": "কুরতুবী তাবারীর 'আদাবুন নুফূস' গ্রন্থ থেকে একটি বর্ণনা আনেন। আবু নাদরা তা বর্ণনা করেছেন এমন একজনের কাছ থেকে, যিনি তাশরীকের দিনগুলোর মাঝামাঝি মিনায় নবী ﷺ-এর খুতবা শুনেছিলেন: হে মানুষ, তোমাদের রব একজন, তোমাদের পিতাও একজন। আরবের ওপর অনারবের, অনারবের ওপর আরবের, কালোর ওপর লালের বা লালের ওপর কালোর কোনো শ্রেষ্ঠত্ব নেই, তাকওয়া ছাড়া। কুরতুবী যেভাবে এনেছেন সেভাবেই এখানে রইল, এর কোনো মান যাচাই করা হয়নি। আয়াত শেষ হয় আলীমুন খাবীর দিয়ে। সা'দী বলেন, কে ভেতরে-বাইরে তাকওয়া রাখে আর কে শুধু বাইরে, আল্লাহ তা জানেন।"
          }
        ]
      }
    ]
  },
  "49:15": {
    "sections": [
      {
        "h": {
          "en": "The Word That Narrows",
          "bn": "যে শব্দ সীমা টেনে দেয়"
        },
        "p": [
          {
            "en": "Innama al-mu'minun: the believers are only those. The verse opens with the same two words as 49:10, where the believers are called brothers, but here the restricting innama does a different job. It comes straight after the bedouins' claim in 49:14 has been answered with \"you have not believed\", and al-Baghawi marks the turn in one clause: then He explained the reality of faith. Where the previous verse refused a word to people who had used it, this one describes the people to whom the word belongs.",
            "bn": "ইন্নামাল মু'মিনূন: মু'মিন কেবল তারাই। ৪৯:১০ আয়াতও এই দুই শব্দ দিয়ে শুরু, সেখানে মু'মিনদের ভাই বলা হয়েছে। কিন্তু এখানে সীমা টানা 'ইন্নামা' শব্দটি অন্য কাজ করছে। ৪৯:১৪ আয়াতে বেদুঈনদের দাবির জবাব এসেছে, 'তোমরা ঈমান আননি'। তার ঠিক পরেই এ আয়াত। বাগাভী এক বাক্যে মোড়টা চিনিয়ে দেন: এরপর আল্লাহ ঈমানের হাকীকত বুঝিয়ে দিলেন। আগের আয়াত একটি শব্দ তাদের মুখ থেকে ফিরিয়ে দিয়েছিল, যারা শব্দটি ব্যবহার করেছিল। এ আয়াত দেখায়, শব্দটি আসলে কাদের প্রাপ্য।"
          },
          {
            "en": "The commentators read the \"only\" as describing faith at its fullness. Ibn Kathir glosses it as the complete believers, al-kummal. As-Sa'di says: the believers in reality. At-Tabari keeps the address in view and reads the whole verse as spoken to the bedouins who said \"we believe\" while faith had not yet entered their hearts: the believers, O people, are those who... The verse works as a definition offered to people who had claimed the name, and the description that follows has four parts: belief, no doubt after it, striving, and the name truthful.",
            "bn": "তাফসীরকারেরা এই 'কেবল' শব্দকে পূর্ণাঙ্গ ঈমানের বর্ণনা হিসেবে পড়েন। ইবন কাসীর ব্যাখ্যা করেন: পরিপূর্ণ মু'মিনেরা, আল-কুম্মাল। সা'দী বলেন: প্রকৃত অর্থে মু'মিন। তাবারী সম্বোধনটা চোখের সামনে রাখেন। তাঁর মতে গোটা আয়াত সেই বেদুঈনদের উদ্দেশে, যারা বলেছিল 'আমরা ঈমান এনেছি' অথচ ঈমান তখনো তাদের অন্তরে ঢোকেনি: হে লোকসকল, মু'মিন তো তারা, যারা... তাই আয়াতটা এক সংজ্ঞার মতো, দেওয়া হয়েছে তাদের সামনে যারা নামটা দাবি করেছিল। এরপর যে বর্ণনা আসে তার চারটি অংশ: ঈমান, তারপর সন্দেহহীনতা, জিহাদ, আর সত্যবাদী নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Belief That Carries Duties",
          "bn": "যে বিশ্বাস দায়িত্ব বয়ে আনে"
        },
        "p": [
          {
            "en": "Alladhina amanu bi-llahi wa-rasulihi: those who have believed in Allah and His Messenger. At-Tabari renders amanu as saddaqu, they affirmed the truth of Allah and His Messenger. The Muyassar uses the same verb and adds a clause of its own: and they acted by His law. Al-Qurtubi's gloss also begins with affirmation and then sets beside it what made the affirmation real, which the verse names a few words later: they made it true through jihad and righteous deeds. In each reading, the belief is the start of a description, not the whole of it.",
            "bn": "আল্লাযীনা আমানূ বিল্লাহি ওয়া রসূলিহী: যারা আল্লাহ ও তাঁর রসূলের উপর ঈমান এনেছে। তাবারী 'আমানূ' শব্দের অর্থ করেন 'সাদ্দাকূ', অর্থাৎ তারা আল্লাহ ও তাঁর রসূলকে সত্য বলে মেনে নিয়েছে। মুয়াসসারও একই ক্রিয়া ব্যবহার করে, সঙ্গে নিজের একটি কথা জোড়ে: আর তারা তাঁর শরীয়ত মোতাবেক আমল করেছে। কুরতুবীর ব্যাখ্যাও শুরু হয় সত্য বলে মেনে নেওয়া দিয়ে। তারপর তিনি পাশে রাখেন সেই জিনিস, যা এই মেনে নেওয়াকে বাস্তব করে তোলে, আর আয়াত কয়েক শব্দ পরে তার নাম নেয়: জিহাদ ও নেক আমলের মাধ্যমে তারা একে সত্যে পরিণত করেছে। প্রতিটি পাঠেই ঈমান বর্ণনার শুরু, পুরোটা নয়।"
          },
          {
            "en": "At-Tabari's explanation of the next clause shows how much he folds into the word belief. Whoever does not doubt, he says, has bound himself to obedience to Allah and obedience to His Messenger, and to acting on the obligations Allah made binding on him, without doubting that they are binding on him. Belief on this reading is not an opinion held at a distance. It is an affirmation that places duties on the person who makes it, and it accepts them as duties.",
            "bn": "পরের অংশের ব্যাখ্যায় তাবারী দেখিয়ে দেন, ঈমান শব্দের ভেতরে তিনি কত কিছু রাখেন। যে সন্দেহ করে না, তিনি বলেন, সে নিজের উপর আল্লাহর আনুগত্য ও তাঁর রসূলের আনুগত্য অপরিহার্য করে নিয়েছে। আল্লাহ তার উপর যেসব ফরজ চাপিয়েছেন, সেগুলোর উপর আমল করাকেও অপরিহার্য করে নিয়েছে, আর সেগুলো যে তার উপর ফরজ, তাতে তার কোনো সন্দেহ নেই। এ পাঠে ঈমান দূর থেকে পোষণ করা কোনো মতামত নয়। ঈমান এমন এক স্বীকৃতি, যা স্বীকারকারীর কাঁধে দায়িত্ব তুলে দেয়, আর সে দায়িত্বকে দায়িত্ব বলেই মেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Then No Wavering",
          "bn": "তারপর আর দোলাচল নয়"
        },
        "p": [
          {
            "en": "Thumma lam yartabu: then they did not doubt. The verb comes from rayb, and as-Sa'di defines it plainly: ar-rayb, and it is doubt. Ibn Kathir's gloss goes beyond the absence of doubt. They did not doubt, he says, and did not waver, la tazalzalu, but held firm on a single state, which is pure affirmation. His verb for wavering shares its root with zulzilat in 99:1, where the earth is shaken with its shaking. His picture is of faith that keeps one condition over time rather than rising and falling with what happens to its owner.",
            "bn": "সুম্মা লাম ইয়ারতাবূ: তারপর তারা সন্দেহ করেনি। ক্রিয়াটি এসেছে 'রাইব' থেকে, আর সা'দী সোজা ভাষায় এর সংজ্ঞা দেন: রাইব মানে সন্দেহ। ইবন কাসীরের ব্যাখ্যা শুধু সন্দেহ না থাকার কথায় থামে না। তিনি বলেন, তারা সন্দেহ করেনি, টলেও যায়নি, লা তাযালযালূ। বরং তারা এক অবস্থায় অটল থেকেছে, আর তা হলো খাঁটি বিশ্বাস। টলে যাওয়া বোঝাতে তিনি যে ক্রিয়া আনেন, তার মূল আর ৯৯:১ আয়াতের 'যুলযিলাত' শব্দের মূল একই, যেখানে পৃথিবীকে তার প্রবল কম্পনে কাঁপিয়ে দেওয়া হয়। তাঁর আঁকা ছবিতে ঈমান সময়ের সঙ্গে একই অবস্থায় টিকে থাকে। মালিকের জীবনে যা-ই ঘটুক, তার সঙ্গে ওঠানামা করে না।"
          },
          {
            "en": "What they did not doubt is named in different ways. At-Tabari spells it out: they did not doubt the oneness of Allah, nor the prophethood of His Prophet ﷺ, nor that the obligations laid on them were binding. The Muyassar says: they did not doubt in their faith. Al-Baghawi says: they did not doubt in their religion. As-Sa'di then explains why the verse makes this a condition at all. Allah set the absence of doubt as a condition of faith, he says, because the faith that benefits is certain, settled conviction in what Allah commanded belief in, which no doubt touches in any respect.",
            "bn": "কোন বিষয়ে তারা সন্দেহ করেনি, তা একেকজন একেকভাবে বলেন। তাবারী খুলে বলেন: তারা আল্লাহর একত্বে সন্দেহ করেনি, তাঁর নবী ﷺ-এর নবুওয়াতে সন্দেহ করেনি, আর তাদের উপর চাপানো ফরজগুলো যে আবশ্যক, তাতেও সন্দেহ করেনি। মুয়াসসার বলে: তারা নিজেদের ঈমানে সন্দেহ করেনি। বাগাভী বলেন: নিজেদের দ্বীনে সন্দেহ করেনি। এরপর সা'দী ব্যাখ্যা করেন, আয়াত কেন একে শর্ত বানাল। তাঁর কথায়, আল্লাহ সন্দেহ না থাকাকে ঈমানের শর্ত করেছেন। কারণ যে ঈমান কাজে আসে, তা হলো আল্লাহ যেসব বিষয়ে ঈমান আনতে বলেছেন, সেগুলোর উপর নিশ্চিত ও দৃঢ় বিশ্বাস, যাকে কোনো দিক থেকেই সন্দেহ ছুঁতে পারে না।"
          },
          {
            "en": "The small word thumma, then, shapes how the clause is heard. The verse does not stop at \"believed\"; it sets \"did not doubt\" after it, as something that follows belief and stays with it. Ibn Kathir's \"held firm on a single state\" reads it that way, as steadfastness. The question the clause puts to a reader is less about the first moment of belief than about the years after it: whether what was affirmed on the first day is still affirmed, unshaken, on the last.",
            "bn": "তাই 'সুম্মা', অর্থাৎ 'তারপর', ছোট্ট এই শব্দটিই ঠিক করে দেয় অংশটা কীভাবে শোনা হবে। আয়াত 'ঈমান এনেছে' বলে থেমে যায়নি। এর পরে বসিয়েছে 'সন্দেহ করেনি', যা ঈমানের পরে আসে আর তার সঙ্গেই থেকে যায়। ইবন কাসীরের 'এক অবস্থায় অটল থেকেছে' কথাটিও একে এভাবেই পড়ে, অবিচলতা হিসেবে। পাঠকের সামনে এ অংশ যে প্রশ্ন রাখে, তা ঈমানের প্রথম মুহূর্ত নিয়ে ততটা নয়, যতটা তার পরের বছরগুলো নিয়ে। প্রথম দিন যা মেনে নেওয়া হয়েছিল, শেষ দিনেও কি তা অটলভাবে মানা হচ্ছে?"
          }
        ]
      },
      {
        "h": {
          "en": "Wealth First, Then Selves",
          "bn": "আগে মাল, তারপর জান"
        },
        "p": [
          {
            "en": "Wa-jahadu bi-amwalihim wa-anfusihim fi sabili llah: and strove with their wealth and their selves in the way of Allah. The commentators draw the scope of this striving differently. At-Tabari reads it as the jihad of fighting: they strove against the polytheists by spending their wealth and giving their lifeblood in that striving, as Allah had commanded them, and that is His way, so that the word of Allah is highest and the word of those who disbelieved is lowest. Al-Qurtubi's gloss is wider: they made their belief real through jihad and righteous deeds.",
            "bn": "ওয়া জাহাদূ বিআমওয়ালিহিম ওয়া আনফুসিহিম ফী সাবীলিল্লাহ: আর তারা নিজেদের মাল ও জান দিয়ে আল্লাহর পথে জিহাদ করেছে। এই জিহাদের পরিসর তাফসীরকারেরা ভিন্ন ভিন্নভাবে আঁকেন। তাবারী একে যুদ্ধের জিহাদ হিসেবে পড়েন: আল্লাহ যেমন আদেশ দিয়েছিলেন, সে অনুযায়ী তারা মুশরিকদের বিরুদ্ধে জিহাদ করেছে, তাতে নিজেদের মাল খরচ করেছে আর প্রাণ বিলিয়ে দিয়েছে। তাঁর কথায় এটাই আল্লাহর পথ, যাতে আল্লাহর বাণী সমুন্নত থাকে আর কাফেরদের কথা নিচু হয়ে যায়। কুরতুবীর ব্যাখ্যা আরও প্রশস্ত: জিহাদ ও নেক আমলের মাধ্যমে তারা নিজেদের ঈমানকে বাস্তব করে তুলেছে।"
          },
          {
            "en": "Ibn Kathir names no opponent at all. They gave their lifeblood and the most precious of their wealth, he says, in obedience to Allah and for His pleasure. The Muyassar joins the two readings: they gave the most precious of their wealth and their lives in jihad in the way of Allah, and in His obedience and His pleasure. As-Sa'di speaks of striving against the disbelievers, and then draws an inference that turns inward: whoever strives against others for Islam and for upholding its laws strives against his own self for it all the more.",
            "bn": "ইবন কাসীর কোনো প্রতিপক্ষের নামই নেন না। তাঁর কথায়, তারা আল্লাহর আনুগত্যে ও তাঁর সন্তুষ্টির জন্য নিজেদের প্রাণ আর সবচেয়ে মূল্যবান সম্পদ বিলিয়ে দিয়েছে। মুয়াসসার দুটি পাঠকে এক করে: তারা নিজেদের সবচেয়ে মূল্যবান সম্পদ আর প্রাণ খরচ করেছে আল্লাহর পথে জিহাদে, তাঁর আনুগত্যে আর তাঁর সন্তুষ্টির খোঁজে। সা'দী কাফেরদের বিরুদ্ধে জিহাদের কথা বলেন। তারপর এমন এক সিদ্ধান্ত টানেন, যা ভেতরের দিকে ফেরে: যে ইসলাম ও তার বিধান কায়েমের জন্য অন্যের বিরুদ্ধে জিহাদ করে, সে এর জন্য নিজের নফসের বিরুদ্ধে জিহাদ করবে আরও বেশি করে।"
          },
          {
            "en": "The order in the verse is worth noticing: wealth first, then selves, giving at two levels, what a person owns and what a person is. At-Tabari reads the verse as addressed to people of the Prophet's ﷺ own time, and none of these commentators is speaking of any conflict of a later age. This article does not read the verse as a verdict on any present-day war, side or cause. What it does ask of a reader is contained in each of these glosses: what of my wealth and my self have I actually given for Allah's sake, in His obedience and for His pleasure?",
            "bn": "আয়াতের ক্রমটাও লক্ষ করার মতো: আগে মাল, তারপর জান। দেওয়ার দুই স্তর, মানুষের যা আছে, আর মানুষ নিজে যা। তাবারীর পাঠে আয়াতের সম্বোধন নবী ﷺ-এর নিজের যুগের লোকদের প্রতি। পরবর্তী কোনো যুগের কোনো সংঘাত নিয়ে এই তাফসীরকারদের কেউ কথা বলছেন না। এ লেখা আয়াতটিকে আজকের কোনো যুদ্ধ, পক্ষ বা আন্দোলন সম্পর্কে রায় হিসেবে পড়ে না। পাঠকের কাছে আয়াত যা চায়, তা এসব ব্যাখ্যার প্রতিটিতেই আছে: আল্লাহর জন্য, তাঁর আনুগত্যে ও তাঁর সন্তুষ্টির খোঁজে, আমি আমার মাল আর নিজের জান থেকে আসলে কী দিয়েছি?"
          }
        ]
      },
      {
        "h": {
          "en": "Truthful in What They Said",
          "bn": "নিজেদের কথায় সত্যবাদী"
        },
        "p": [
          {
            "en": "Ula'ika humu s-sadiqun: those, they are the truthful. Truthful in what? Ibn Kathir answers: in their saying, when they say that they are believers, unlike some of the bedouins who had nothing of the religion with them but the outward word. At-Tabari gives the same object, truthful in their saying \"we are believers\", and sets a contrast: not one who entered the religion out of fear of the sword, to keep his blood and his wealth safe. Al-Qurtubi's contrast adds a second motive: not one who submitted out of fear of being killed and hope of gain.",
            "bn": "উলাইকা হুমুস সাদিকূন: তারাই সত্যবাদী। কিসে সত্যবাদী? ইবন কাসীর জবাব দেন: নিজেদের কথায়, যখন তারা বলে যে তারা মু'মিন। কিছু বেদুঈনের মতো নয়, যাদের কাছে দ্বীনের বাইরের শব্দটুকু ছাড়া আর কিছু ছিল না। তাবারীও একই কথা বলেন, 'আমরা মু'মিন' দাবিতে তারা সত্যবাদী। সঙ্গে একটি তুলনা টানেন: সে নয়, যে তলোয়ারের ভয়ে নিজের রক্ত ও সম্পদ বাঁচাতে দ্বীনে ঢুকেছে। কুরতুবীর তুলনায় যোগ হয় আরেকটি উদ্দেশ্য: সে নয়, যে নিহত হওয়ার ভয়ে আর লাভের আশায় ইসলাম গ্রহণ করেছে।"
          },
          {
            "en": "At-Tabari closes with the reading of Ibn Zayd: they made their faith true by their deeds, saddaqu imanahum bi-a'malihim. As-Sa'di uses nearly the same words and then gives the reason. Truthfulness, he says, is a large claim in everything a person claims, and whoever makes it needs proof and evidence. The greatest of all claims is the claim of faith, on which happiness and lasting success turn. Whoever claims it and carries out its duties and what it requires is the truthful believer in truth; whoever does not is known not to be truthful in his claim.",
            "bn": "তাবারী শেষ করেন ইবন যায়দের পাঠ দিয়ে: তারা নিজেদের আমল দিয়ে নিজেদের ঈমানকে সত্য প্রমাণ করেছে, সাদ্দাকূ ঈমানাহুম বিআ'মালিহিম। সা'দী প্রায় একই শব্দ ব্যবহার করেন, তারপর কারণটা বলেন। তাঁর কথায়, মানুষ যে বিষয়েই দাবি করুক, সত্যবাদিতা এক বড় দাবি, আর দাবিদারের দলিল-প্রমাণ লাগে। সবচেয়ে বড় দাবি হলো ঈমানের দাবি, কারণ সৌভাগ্য আর চিরস্থায়ী সাফল্য এর উপরই নির্ভর করে। যে এ দাবি করে আর এর কর্তব্য ও দাবিগুলো পূরণ করে, সে-ই প্রকৃত সত্যবাদী মু'মিন। যে তা করে না, বোঝা যায় নিজের দাবিতে সে সত্যবাদী নয়।"
          },
          {
            "en": "The word returns two verses later. 49:17 ends: if you are truthful, in kuntum sadiqin, and Ibn Kathir explains it as: in your claim that you are believers. Between the two stands 49:16, asking whether they would inform Allah of their religion when He knows what is in the heavens and the earth. Al-Qurtubi and al-Baghawi report that once these verses came down, the bedouins came swearing by Allah that they were believers, and that revelation came again in answer. The name truthful is given by the description; an oath does not earn it.",
            "bn": "দুই আয়াত পরে শব্দটি আবার ফিরে আসে। ৪৯:১৭ আয়াত শেষ হয় এভাবে: যদি তোমরা সত্যবাদী হও, ইন কুনতুম সাদিকীন। ইবন কাসীর ব্যাখ্যা করেন: তোমরা যে মু'মিন, সেই দাবিতে। এ দুইয়ের মাঝে ৪৯:১৬ আয়াত, যা প্রশ্ন করে: তোমরা কি আল্লাহকে তোমাদের দ্বীনের খবর দিতে চাও, অথচ আসমান-যমীনে যা আছে সবই তিনি জানেন? কুরতুবী ও বাগাভী বর্ণনা করেন, এই আয়াতগুলো নাযিল হওয়ার পর বেদুঈনরা এসে আল্লাহর নামে কসম খেয়ে বলল যে তারা মু'মিন। তার জবাবে আবার ওহী নাযিল হলো। সত্যবাদী নামটি আসে বর্ণনা পূরণ করে, কসম খেয়ে তা পাওয়া যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Submission and Faith, Weighed",
          "bn": "ইসলাম আর ঈমান, পাশাপাশি"
        },
        "p": [
          {
            "en": "Who were the people being answered, and what did they lack? Here the commentators differ, and the difference should be left standing. Ibn Kathir holds that the bedouins of 49:14 were not hypocrites. They were Muslims in whose hearts faith had not yet settled firmly, who claimed a higher grade than the grade they had reached and were taught a lesson for it. He says this agrees with what is reported from Ibn Abbas, Ibrahim an-Nakha'i and Qatada, and is the view Ibn Jarir preferred, and he takes the verse as proof that faith is a higher grade than islam.",
            "bn": "যাদের জবাব দেওয়া হচ্ছে, তারা কারা ছিল, আর তাদের কী ঘাটতি ছিল? এখানে তাফসীরকারদের মত আলাদা, আর এ মতভেদ মতভেদ হিসেবেই থাকা উচিত। ইবন কাসীরের মতে ৪৯:১৪ আয়াতের বেদুঈনরা মুনাফিক ছিল না। তারা ছিল মুসলিম, তবে ঈমান তখনো তাদের অন্তরে মজবুতভাবে বসেনি। তারা যে স্তরে পৌঁছেছিল, তার চেয়ে উঁচু স্তর দাবি করেছিল, আর সেজন্য তাদের শিক্ষা দেওয়া হয়েছে। তিনি বলেন, ইবন আব্বাস (রাঃ), ইবরাহীম নাখঈ ও কাতাদা থেকে বর্ণিত অর্থের সঙ্গে এটা মেলে, আর ইবন জারীরও এ মতকেই প্রাধান্য দিয়েছেন। এ আয়াতকে তিনি প্রমাণ হিসেবে নেন যে ঈমান ইসলামের চেয়ে উঁচু স্তর।"
          },
          {
            "en": "Ma'arif al-Qur'an describes them more harshly: not sincere believers, who professed Islam to draw on the charity funds. It also reads aslamna in 49:14 in its literal sense of outward surrender, not the technical one, so that in its view the verse does not itself settle the technical difference between islam and iman. In the Shari'ah, it says, the two differ in meaning but complete each other, so that a person cannot be a Muslim without being a believer, or the reverse; a split between them is possible only in the lexical sense, as with the hypocrites.",
            "bn": "মাআরিফুল কুরআন তাদের বর্ণনা দেয় আরও কঠোরভাবে: তারা খাঁটি মু'মিন ছিল না, সদকার তহবিল থেকে সাহায্য নিতেই ইসলাম প্রকাশ করেছিল। ৪৯:১৪ আয়াতের 'আসলামনা' শব্দকেও এ তাফসীর পড়ে আভিধানিক অর্থে, বাহ্যিক আত্মসমর্পণ হিসেবে, পারিভাষিক অর্থে নয়। তাই তার মতে ইসলাম ও ঈমানের পারিভাষিক পার্থক্য এ আয়াত নিজে মীমাংসা করে না। শরীয়তে, তার ভাষায়, দুটির অর্থ আলাদা হলেও একটি অন্যটিকে পূর্ণ করে। তাই কেউ মু'মিন না হয়ে মুসলিম হতে পারে না, উল্টোটাও না। দুটো আলাদা হওয়া সম্ভব কেবল আভিধানিক অর্থে, যেমন মুনাফিকদের বেলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Kinds of Believer",
          "bn": "মু'মিনের তিন রকম"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches one narration to this verse. He relays it from the Musnad of Imam Ahmad, through Abu Sa'id, as words of the Prophet ﷺ that divide the believers of this world into three kinds, the first described in the very terms of this verse. Ibn Kathir gives it no grading, and it could not be checked against a hadith collection for this article, so its wording is not quoted here and nothing rests on it.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে একটি বর্ণনা যুক্ত করেন। তিনি ইমাম আহমাদের মুসনাদ থেকে, আবু সাঈদ (রাঃ)-এর সূত্রে, নবী ﷺ-এর বাণী হিসেবে এমন একটি বর্ণনা আনেন, যা দুনিয়ার মু'মিনদের তিনটি ভাগে ভাগ করে, আর প্রথম ভাগের বর্ণনা ঠিক এ আয়াতের ভাষাতেই। ইবন কাসীর এর কোনো মান উল্লেখ করেননি, আর এই লেখার জন্য কোনো হাদীস সংকলনে তা মিলিয়ে দেখা যায়নি। তাই এর শব্দ এখানে উদ্ধৃত করা হলো না, কোনো কিছুর ভিত্তিও এর উপর রাখা হলো না।"
          },
          {
            "en": "Ibn Kathir gives no grading for this report, and none of the other commentators read for this verse cites it, so it is given here as the narration he places under the verse, not as an established hadith. No tafsir read for this verse attaches a hadith graded sound to it. What the verse says does not depend on the report. Its own words already name the marks of the people it describes, and its last word, the truthful, names them.",
            "bn": "ইবন কাসীর এ বর্ণনার কোনো মান উল্লেখ করেননি। এ আয়াতের জন্য পড়া অন্য তাফসীরগুলোর কোনোটিতেও এটি নেই। তাই এখানে এটি দেওয়া হলো তিনি আয়াতের নিচে যে বর্ণনা রেখেছেন সেভাবে, প্রতিষ্ঠিত হাদীস হিসেবে নয়। এ আয়াতের জন্য পড়া কোনো তাফসীর সহীহ বলে মান দেওয়া কোনো হাদীস এর সঙ্গে যুক্ত করেনি। আয়াতের বক্তব্য এ বর্ণনার উপর নির্ভর করে না। যাদের কথা আয়াত বলছে, তাদের চিহ্নগুলো আয়াতের নিজের শব্দেই আছে, আর শেষ শব্দ 'সত্যবাদী' তাদের নাম জানিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scale Kept by Allah",
          "bn": "যে দাঁড়িপাল্লা আল্লাহর হাতে"
        },
        "p": [
          {
            "en": "As-Sa'di ends his comment with a caution. Faith in the heart, he says, is something no one sees but Allah, so asserting it or denying it amounts to informing Allah of what is in the heart, which is poor manners and a poor thought of Allah; the next verse asks exactly that question. This verse holds up a description beside a group, the bedouins answered in 49:14. It describes what the text describes. It gives no licence to declare any living person not a believer, nor to judge desert people or any community by it.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শেষ করেন একটি সতর্কবাণী দিয়ে। তিনি বলেন, অন্তরের ঈমান আল্লাহ ছাড়া কেউ দেখে না। তাই একে প্রতিষ্ঠা করা বা অস্বীকার করা মানে অন্তরে কী আছে সে খবর আল্লাহকে জানাতে যাওয়া, যা বেয়াদবি এবং আল্লাহ সম্পর্কে মন্দ ধারণা। পরের আয়াত ঠিক এই প্রশ্নটাই তোলে। এ আয়াত একটি দলের পাশে, অর্থাৎ ৪৯:১৪ আয়াতে জবাব পাওয়া বেদুঈনদের পাশে, একটি বর্ণনা দাঁড় করায়। আয়াত শুধু তা-ই বর্ণনা করে, যা তার শব্দে আছে। কোনো জীবিত মানুষকে বেঈমান ঘোষণা করার, কিংবা এর ভিত্তিতে গ্রামের বা মরুর মানুষদের অথবা কোনো সম্প্রদায়কে বিচার করার অনুমতি এ আয়াত দেয় না।"
          },
          {
            "en": "So the verse is a mirror held up to its reader. Its measures are not hard to name: belief in Allah and His Messenger, kept without wavering; wealth and self given in His way, in His obedience and for His pleasure; and a claim of faith that deeds have made true, as Ibn Zayd put it. The question it leaves is not whether others are truthful. It is whether \"I believe\", said by me, would be found true when Allah, who knows the unseen of the heavens and the earth, weighs it.",
            "bn": "তাই আয়াতটি এক আয়না, ধরা হয়েছে পাঠকের নিজের সামনে। এর মাপকাঠিগুলো চিনতে কষ্ট হয় না: আল্লাহ ও তাঁর রসূলের উপর ঈমান, যা টলে না; তাঁর পথে, তাঁর আনুগত্যে ও তাঁর সন্তুষ্টির জন্য মাল ও জান খরচ; আর এমন ঈমানের দাবি, যাকে আমল সত্য প্রমাণ করেছে, যেমনটা ইবন যায়দ বলেছেন। আয়াত যে প্রশ্ন রেখে যায়, তা অন্যরা সত্যবাদী কি না, সেটা নয়। প্রশ্নটা হলো, আসমান ও যমীনের অদৃশ্য যিনি জানেন, সেই আল্লাহ যখন আমার মুখের 'আমি ঈমান এনেছি' কথাটি মাপবেন, তখন কি তা সত্য বলে পাওয়া যাবে?"
          }
        ]
      }
    ]
  }
});
