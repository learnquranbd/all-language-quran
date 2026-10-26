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
