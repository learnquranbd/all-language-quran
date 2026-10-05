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
            "bn": "সূরাটি শুরু হয় রসূল ﷺ-এর সঙ্গে আচরণ নিয়ে দুটি আদেশ দিয়ে। ৪৯:১ আয়াত নিষেধ করে আল্লাহ ও তাঁর রসূলের আগে বেড়ে যেতে। ৪৯:২ আয়াত নিষেধ করে নবীর আওয়াজের উপর নিজের আওয়াজ তুলতে, আর সতর্ক করে যে এতে মানুষের অজান্তেই তার আমল নিষ্ফল হয়ে যেতে পারে। তারপর ৪৯:৩ আয়াতে সুর বদলে যায়। এখানে কোনো নিষেধ নেই। আছে তাদের বর্ণনা, যারা সত্যিই আওয়াজ নিচু রাখে। আল্লাহ তাদের অন্তরের সঙ্গে কী করেছেন, আয়াতটি তা জানায়, আর শেষ হয় একটি ওয়াদায়: মাগফিরাত ও বিরাট পুরস্কার।"
          },
          {
            "en": "Ibn Kathir marks the turn with four verbs. After the prohibition, he writes, Allah nadaba ila khafd as-sawt 'indahu: He recommended lowering the voice in his presence, urged it, guided people to it and made it desirable. As-Sa'di frames the verse the same way, as praise: thumma madaha, then He praised whoever lowers his voice at the Messenger of Allah ﷺ. The warning of 49:2 has been given; this verse shows what obedience to it looks like, and what it is worth.",
            "bn": "ইবন কাসীর এই মোড় বোঝান চারটি ক্রিয়া দিয়ে। নিষেধের পর, তিনি লেখেন, আল্লাহ নাদাবা ইলা খাফদিস সাওতি ইন্দাহু: তাঁর সামনে আওয়াজ নিচু রাখার প্রতি আহ্বান জানালেন। তারপর এতে উৎসাহ দিলেন, এর পথ দেখালেন, একে প্রিয় করে তুললেন। সা'দীও আয়াতটিকে প্রশংসা হিসেবেই পড়েন: সুম্মা মাদাহা, তারপর আল্লাহ প্রশংসা করলেন তার, যে রসূলুল্লাহ ﷺ-এর কাছে নিজের আওয়াজ নিচু রাখে। ৪৯:২ আয়াতের সতর্কবাণী দেওয়া হয়ে গেছে। এ আয়াত দেখায়, তা মেনে চলার চেহারা কেমন, আর তার মূল্য কতখানি।"
          },
          {
            "en": "One change of wording is visible on the page. Where 49:2 speaks of the voice of an-Nabi, the Prophet, this verse says 'inda rasuli-llah, at the Messenger of Allah. The next verse, 49:4, turns to people who called out to him from behind the private rooms, and that scene belongs to its own article. Here the subject is quieter: the ordinary speech of those who sat with him.",
            "bn": "পাতার দিকে তাকালেই শব্দের একটি বদল চোখে পড়ে। ৪৯:২ আয়াতে বলা হয়েছে আন-নাবী, অর্থাৎ নবীর আওয়াজের কথা। এ আয়াতে বলা হয়েছে ইন্দা রসূলিল্লাহ, আল্লাহর রসূলের কাছে। পরের আয়াত, ৪৯:৪, ফিরে তাকায় সেই লোকদের দিকে, যারা হুজরাগুলোর বাইরে থেকে তাঁকে ডাকাডাকি করেছিল। সে দৃশ্যের আলোচনা তার নিজের প্রবন্ধে। এখানকার বিষয় আরও নিচু স্বরের: যারা তাঁর পাশে বসত, তাদের রোজকার কথাবার্তা।"
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
            "bn": "ইয়াগুদ্দূনা আসওয়াতাহুম: তারা নিজেদের আওয়াজ নিচু রাখে। তাবারী এর ব্যাখ্যা দেন ইয়াকুফফূনা রাফআ আসওয়াতিহিম বলে, অর্থাৎ তারা আওয়াজ উঁচু করা থেকে নিজেদের বিরত রাখে। শব্দের মূল অর্থও তিনি বলে দেন: গদ্দ মানে নরমভাবে বিরত রাখা। তাঁর মতে চোখ নামিয়ে রাখা, গদ্দুল বাসার, এখান থেকেই এসেছে, মানে দেখা থেকে চোখকে ফিরিয়ে রাখা। সঙ্গে কবি জারীরের একটি পঙক্তি উদ্ধৃত করেন। কুরআন ২৪:৩০ আয়াতে দৃষ্টির বেলায় এই একই ক্রিয়া ব্যবহার করেছে। আর ৩১:১৯ আয়াতে ছেলেকে লুকমানের উপদেশে তা এসেছে আওয়াজের বেলায়।"
          },
          {
            "en": "The Muyassar and al-Baghawi gloss the verb more simply as yakhfiduna, they lower, and al-Baghawi adds why: ijlalan lahu, out of reverence for him. Al-Qurtubi gives the same reason and then names two situations. They lower their voices in his presence when they speak to him, out of reverence for him, or when they speak to someone else bayna yadayhi, in front of him. On his reading the restraint covers both the words addressed to the Prophet ﷺ and the talk among his companions while he sat with them.",
            "bn": "মুয়াসসার আর বাগাভী ক্রিয়াটির অর্থ করেন আরও সহজ করে: ইয়াখফিদূনা, তারা নিচু করে। বাগাভী কারণটাও জুড়ে দেন: ইজলালান লাহু, তাঁর প্রতি সম্মান থেকে। কুরতুবীও একই কারণ বলেন, তারপর দুটি অবস্থার কথা আলাদা করে উল্লেখ করেন। সম্মানের কারণে তারা তাঁর সামনে আওয়াজ নিচু রাখে যখন তাঁর সঙ্গে কথা বলে। আবার যখন তাঁর সামনে, বাইনা ইয়াদাইহি, অন্য কারও সঙ্গে কথা বলে, তখনও। তাঁর ব্যাখ্যায় এই সংযম নবী ﷺ-কে বলা কথাতেও খাটে, আবার তিনি সাহাবিদের মধ্যে বসে থাকলে তাদের নিজেদের আলাপেও খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beyond His Lifetime",
          "bn": "তাঁর জীবৎকালের পরেও"
        },
        "p": [
          {
            "en": "Does the lowering end with his lifetime? The Arabic commentaries fetched for this verse speak only of his presence. Ma'arif al-Qur'an, discussing 49:2 and 49:3 together, goes further. It reports Qadi Abu Bakr Ibn al-'Arabi as saying that respect for the Prophet ﷺ after his passing is as obligatory as it was in his lifetime. It adds that some scholars hold it disrespectful to give salam or speak very loudly in front of his resting place, and that noise is discourteous where his ahadith are being recited.",
            "bn": "আওয়াজ নিচু রাখার বিষয়টি কি তাঁর জীবনের সঙ্গেই শেষ? এ আয়াতের জন্য যে আরবি তাফসীরগুলো আনা হয়েছে, সেগুলো কেবল তাঁর উপস্থিতির কথাই বলে। মাআরিফুল কুরআন ৪৯:২ ও ৪৯:৩ আয়াত একসঙ্গে আলোচনা করতে গিয়ে আরও এগিয়ে যায়। কাজী আবু বকর ইবনুল আরাবীর বরাতে সেখানে বলা হয়েছে, ইন্তেকালের পরেও নবী ﷺ-এর প্রতি সম্মান তাঁর জীবদ্দশার মতোই অপরিহার্য। গ্রন্থটি আরও জানায়, কিছু আলেমের মতে তাঁর রওজার সামনে সালাম দেওয়া বা খুব উঁচু গলায় কথা বলা বেয়াদবি। আর যেখানে তাঁর হাদীস পড়া হচ্ছে, সেখানে শোরগোল করাও অশোভন।"
          },
          {
            "en": "Its reason for the last point is that when his words are recited, listening to them in silence is required. Ma'arif al-Qur'an then cites al-Qurtubi for a further extension: as the command of 49:1 applies to the scholars as heirs of the Prophet, so the command about voices applies to the great scholars too, and in their gatherings a person should not raise the voice so far that theirs is drowned. These are Ma'arif al-Qur'an's positions and those of the scholars it names. This article reports them and makes no ruling of its own.",
            "bn": "শেষ কথাটির কারণ হিসেবে গ্রন্থটি বলে, তাঁর কথা যখন পড়া হয়, তখন চুপ করে শোনা জরুরি। এরপর মাআরিফুল কুরআন কুরতুবীর বরাতে আরেক ধাপ এগোয়। নবীর উত্তরসূরি হিসেবে ৪৯:১ আয়াতের আদেশ যেমন আলেমদের বেলাতেও খাটে, তেমনি আওয়াজ নিয়ে আদেশটিও বড় আলেমদের বেলায় খাটে। তাঁদের মজলিসে এমনভাবে গলা চড়ানো উচিত নয়, যাতে তাঁদের আওয়াজ চাপা পড়ে যায়। এগুলো মাআরিফুল কুরআনের অবস্থান, আর সেখানে যাঁদের নাম এসেছে তাঁদের। এ প্রবন্ধ শুধু সেগুলো তুলে ধরছে, নিজে থেকে কোনো বিধান দিচ্ছে না।"
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
            "bn": "উলাইকাল্লাযীনামতাহানাল্লাহু কুলূবাহুম লিত-তাকওয়া: এরাই তারা, যাদের অন্তর আল্লাহ তাকওয়ার জন্য পরীক্ষা করেছেন। তাবারী একে পড়েন পরীক্ষা আর তার ফল হিসেবে। আল্লাহ তাদের অন্তর যাচাই করলেন, তারপর বেছে নিয়ে তাকওয়ার জন্য খাঁটি করে দিলেন। তাকওয়ার সংজ্ঞাও তিনি দেন: আল্লাহর আনুগত্য পালন আর তাঁর নাফরমানি থেকে দূরে থাকার মাধ্যমে তাঁকে ভয় করে চলা। তাঁর উপমা স্বর্ণকারের: কামা ইউমতাহানুয যাহাবু বিন-নার, যেমন আগুনে সোনা পরখ করা হয়। তাতে ভালো অংশটা খাঁটি হয়ে বেরিয়ে আসে, আর খাদ ঝরে যায়। বাগাভীও আগুনে সোনার একই ছবি আঁকেন।"
          },
          {
            "en": "Several short glosses sit beside this. At-Tabari reports Mujahid: akhlasa, He made pure; and Qatada: Allah made their hearts pure in what He loves. The Muyassar joins the two steps: He tested their hearts and made them pure for His taqwa. Ibn Kathir has akhlasaha laha wa ja'alaha ahlan wa mahallan: He made them pure for it, and made them fit for it and a place where it dwells. Al-Qurtubi quotes two grammarians: al-Farra', who says made pure, and al-Akhfash, who says ikhtassaha, singled them out for taqwa.",
            "bn": "এর পাশে আরও কয়েকটি ছোট ছোট ব্যাখ্যা আছে। তাবারী মুজাহিদের কথা উদ্ধৃত করেন: আখলাসা, তিনি খাঁটি করলেন। কাতাদার কথাও আনেন: আল্লাহ যা ভালোবাসেন, সে বিষয়ে তাদের অন্তর খাঁটি করে দিলেন। মুয়াসসার দুটি ধাপ একসঙ্গে বলে: তিনি তাদের অন্তর পরীক্ষা করলেন আর নিজের তাকওয়ার জন্য খাঁটি করলেন। ইবন কাসীর বলেন আখলাসাহা লাহা ওয়া জাআলাহা আহলান ওয়া মাহাল্লান: তাকওয়ার জন্য অন্তরকে খাঁটি করলেন, একে তার যোগ্য বানালেন, তার থাকার জায়গা বানালেন। কুরতুবী দুজন ভাষাবিদের কথা আনেন। ফাররা বলেন, খাঁটি করলেন। আখফাশ বলেন, ইখতাসসাহা, তাকওয়ার জন্য আলাদা করে বেছে নিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Hide Stretched Wide",
          "bn": "টেনে চওড়া করা চামড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi then opens the word itself. Imtihan, he says, is the ifti'al form of mahantu l-adima, I worked the hide until I widened it. On that root the verse means Allah widened their hearts and opened them for taqwa. On the other readings it means He tested them and then made them pure, as in the saying: I tested the silver, tried it until it came out pure; the word purity is then left unsaid and understood. He also quotes Abu 'Amr: anything you have worked hard, you have put through mihna.",
            "bn": "এরপর কুরতুবী শব্দটিকেই খুলে দেখান। তিনি বলেন, ইমতিহান এসেছে মাহানতুল আদীম থেকে, যার মানে: চামড়াটা আমি এত খাটালাম যে তা চওড়া হয়ে গেল। এই মূল ধরলে আয়াতের অর্থ, আল্লাহ তাকওয়ার জন্য তাদের অন্তর প্রশস্ত করলেন, খুলে দিলেন। অন্য ব্যাখ্যাগুলো ধরলে অর্থ, তিনি অন্তর পরীক্ষা করে খাঁটি করলেন। যেমন বলা হয়, রুপা পরখ করলাম, যাচাই করতে করতে তা খাঁটি হয়ে বেরোল। তখন খাঁটি হওয়ার কথাটা উহ্য থাকে, বাক্য থেকেই বোঝা যায়। আবু আমরের কথাও তিনি আনেন: যে জিনিসকে তুমি খুব খাটিয়েছ, তাকে তুমি মিহনার ভেতর দিয়ে নিয়েছ।"
          },
          {
            "en": "Ibn Abbas (RA), in al-Qurtubi's report, says Allah cleansed them of everything foul and placed fear of Him and taqwa in their hearts. As-Sa'di keeps to the test: ibtalaha wa-khtabaraha, He tried and examined them, and the result showed, for their hearts became sound for taqwa. He draws a principle from it. Allah tests hearts by command, prohibition and hardship. Whoever holds to His command, seeks His pleasure, hurries to it and puts it before his own desire is refined for taqwa, and whoever is not like that is known to be unfit for it.",
            "bn": "কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, আল্লাহ তাদের সব রকম মন্দ থেকে পবিত্র করলেন, আর তাদের অন্তরে নিজের ভয় ও তাকওয়া রেখে দিলেন। সা'দী থাকেন পরীক্ষার অর্থেই: ইবতালাহা ওয়াখতাবারাহা, তিনি অন্তরগুলো যাচাই করলেন, পরখ করলেন। ফলও প্রকাশ পেল, তাদের অন্তর তাকওয়ার উপযুক্ত হয়ে উঠল। এখান থেকে তিনি একটি নীতি বের করেন। আল্লাহ অন্তর পরীক্ষা করেন আদেশ দিয়ে, নিষেধ দিয়ে, বিপদ দিয়ে। যে তাঁর আদেশ আঁকড়ে থাকে, তাঁর সন্তুষ্টি খোঁজে, সেদিকে ছুটে যায় আর নিজের খায়েশের আগে তা রাখে, সে তাকওয়ার জন্য খাঁটি হয়ে ওঠে। আর যে এমন নয়, বোঝা যায় সে এর উপযুক্ত নয়।"
          },
          {
            "en": "Made pure, singled out, widened, proven through command and hardship: the glosses stand side by side in the sources, and none of the commentators fetched here declares the others wrong. Al-Qurtubi himself sets out both roots, the hide and the silver, and leaves both standing. This article does the same. Whichever sense is meant, the plain words of the verse already tie the lowered voice to a heart that Allah has worked on, and they name the purpose of that work: taqwa.",
            "bn": "খাঁটি করা, আলাদা করে বেছে নেওয়া, প্রশস্ত করা, আদেশ আর বিপদের ভেতর দিয়ে যাচাই করা: তাফসীরগুলোতে এই ব্যাখ্যাগুলো পাশাপাশি আছে। এখানে আনা কোনো মুফাসসির অন্যদের ভুল বলেননি। কুরতুবী নিজেই দুটি মূল তুলে ধরেছেন, চামড়ার আর রুপার, এবং দুটোই রেখে দিয়েছেন। এ প্রবন্ধও তাই করছে। অর্থ যেটাই হোক, আয়াতের সরল কথাতেই নিচু আওয়াজের সঙ্গে এমন অন্তরের যোগ বাঁধা, যার উপর আল্লাহ কাজ করেছেন। আর সেই কাজের লক্ষ্যও আয়াত বলে দিয়েছে: তাকওয়া।"
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
            "bn": "এ বাক্যাংশ নিয়ে উমর (রাঃ)-এর দুটি কথা তাফসীরের মাধ্যমে আমাদের কাছে পৌঁছেছে। কুরতুবী একটি আনেন এক লাইনে: আযহাবা আন কুলূবিহিমুশ শাহাওয়াত, আল্লাহ তাদের অন্তর থেকে খায়েশ দূর করে দিয়েছেন। অন্যটি আনেন ইবন কাসীর, ইমাম আহমাদের কিতাবুয যুহদ থেকে, মুজাহিদের সূত্রে। কেউ উমরকে চিঠি লিখল: হে আমীরুল মুমিনীন, কে উত্তম? যার গুনাহের খায়েশ জাগে না এবং গুনাহ করে না, সে? নাকি যার গুনাহের খায়েশ জাগে, তবু করে না, সে? উমর জবাবে লিখলেন: যাদের গুনাহের খায়েশ জাগে অথচ তারা তা করে না, তারাই সেই লোক, যাদের অন্তর আল্লাহ তাকওয়ার জন্য পরীক্ষা করেছেন।"
          },
          {
            "en": "Read side by side, the two reports point in different directions. One describes hearts from which desire has been taken away; the other praises the person who feels its pull and still holds back. Al-Qurtubi gives the first and Ibn Kathir the second, and neither commentator mentions the other report or tries to reconcile them. This article leaves both standing. What they share is that the test of this verse reaches below speech, into what a person wants.",
            "bn": "দুটি বর্ণনা পাশাপাশি রাখলে দেখা যায়, দুটি দুই দিকে ইশারা করে। একটিতে এমন অন্তরের কথা, যেখান থেকে খায়েশই তুলে নেওয়া হয়েছে। অন্যটিতে প্রশংসা তার, যে খায়েশের টান টের পায়, তবু নিজেকে সামলে রাখে। প্রথমটি কুরতুবীর, দ্বিতীয়টি ইবন কাসীরের। তাঁদের কেউই অন্য বর্ণনার উল্লেখ করেননি, মেলানোর চেষ্টাও করেননি। এ প্রবন্ধ দুটোই যেমন আছে তেমন রেখে দিচ্ছে। তবে দুটোর মিল এক জায়গায়: এ আয়াতের পরীক্ষা কথার নিচে নেমে যায়, মানুষ ভেতরে কী চায় সেখানে গিয়ে পৌঁছায়।"
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
            "bn": "আয়াত নাযিলের প্রেক্ষাপট নিয়ে মুফাসসিররা কয়েকটি বর্ণনা আনেন। কুরতুবী আবু হুরায়রা (রাঃ)-এর বরাতে বলেন, লা তারফাউ আসওয়াতাকুম নাযিল হলে আবু বকর (রাঃ) বললেন: আল্লাহর কসম, এখন থেকে আমি কানে কানে গোপন কথা বলার মতো করেই কথা বলব, কা-আখিস সিরার। একই কসম তিনি আবু সালামার সূত্রেও আনেন, তবে সেখানে তা ৪৯:১ আয়াতের সঙ্গে যুক্ত। বাগাভী এটি আনেন আবু হুরায়রা ও ইবন আব্বাস (রাঃ)-এর বরাতে, এ আয়াতের আলোচনায়। শুরুটা এভাবে: যখন এ আয়াত নাযিল হলো। মাআরিফুল কুরআন এর সূত্র দেয় আদ-দুররুল মানসূর, বায়হাকীর বরাতে। এ কসমের জন্য এখানে কোনো হাদীসগ্রন্থ মিলিয়ে দেখা হয়নি।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report from 'Abdullah ibn az-Zubayr that after 49:2, 'Umar (RA) spoke to the Prophet ﷺ so low that he had to ask what he had said, and that 49:3 was then revealed. Ibn Kathir, on the passage that contains this verse, cites al-Bukhari for the background. In Sahih al-Bukhari (4845), Ibn Abi Mulayka said: The two righteous ones were close to ruin, Abu Bakr and 'Umar. They raised their voices in the presence of the Prophet ﷺ when a party of Banu Tamim came to him.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই আবদুল্লাহ ইবনুয যুবাইরের বরাতে বলেন, ৪৯:২ আয়াতের পর উমর (রাঃ) নবী ﷺ-এর সঙ্গে এত নিচু গলায় কথা বলতেন যে তিনি কী বললেন তা নবীকে জিজ্ঞেস করে নিতে হতো। এরপর ৪৯:৩ আয়াত নাযিল হয়। ইবন কাসীর এ আয়াতসহ পুরো অংশের আলোচনায় পটভূমির জন্য বুখারীর বরাত দেন। সহীহ বুখারীতে (৪৮৪৫) ইবন আবী মুলাইকা বলেন: দুই নেককার মানুষ ধ্বংসের কাছাকাছি পৌঁছে গিয়েছিলেন, আবু বকর ও উমর। বনু তামীমের একটি কাফেলা নবী ﷺ-এর কাছে এলে তাঁরা দুজন তাঁর সামনে নিজেদের আওয়াজ উঁচু করেছিলেন।"
          },
          {
            "en": "One of them pointed to al-Aqra' ibn Habis, of Banu Mujashi', and the other to another man. Nafi' said: I do not remember his name. Abu Bakr said to 'Umar: You wanted nothing but to oppose me. 'Umar said: I did not want to oppose you. Their voices rose over it, and Allah revealed: O you who believe, do not raise your voices, to the end of the verse. Ibn az-Zubayr said: After this verse, 'Umar would not let the Messenger of Allah ﷺ hear him until he asked him to repeat. He did not mention that from his father, meaning Abu Bakr.",
            "bn": "তাঁদের একজন বনু মুজাশি গোত্রের আকরা ইবন হাবিসের নাম প্রস্তাব করলেন, অন্যজন আরেকজনের। বর্ণনাকারী নাফে বলেন: তার নাম আমার মনে নেই। আবু বকর উমরকে বললেন: তুমি তো শুধু আমার বিরোধিতাই করতে চেয়েছ। উমর বললেন: আমি আপনার বিরোধিতা করতে চাইনি। এ নিয়ে তাঁদের আওয়াজ উঁচু হয়ে গেল। তখন আল্লাহ নাযিল করলেন: হে মুমিনগণ, তোমরা নিজেদের আওয়াজ উঁচু করো না, আয়াতের শেষ পর্যন্ত। ইবনুয যুবাইর বলেন: এ আয়াতের পর উমর রসূলুল্লাহ ﷺ-এর সঙ্গে এত নিচু স্বরে কথা বলতেন যে তিনি আবার জিজ্ঞেস না করা পর্যন্ত শুনতে পেতেন না। তিনি এ কথা তাঁর পিতা, অর্থাৎ আবু বকর থেকে উল্লেখ করেননি।"
          },
          {
            "en": "Al-Bukhari placed the report in his Sahih. Three things are worth keeping apart. This wording ties the dispute to 49:2, while another narration in al-Bukhari (4847), which Ibn Kathir also mentions, names 49:1; that question belongs to those verses. The hadith does not itself say that 49:3 came down about 'Umar; that addition is in the reports al-Qurtubi and al-Baghawi carry. And where Ibn az-Zubayr says nothing of Abu Bakr, those two commentators report his whispering oath through others. The story of Thabit ibn Qays (RA) turns on the warning of 49:2 and is left for that verse.",
            "bn": "বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। এখানে তিনটি বিষয় আলাদা রাখা দরকার। এই বর্ণনায় বিবাদটি ৪৯:২ আয়াতের সঙ্গে যুক্ত। অথচ বুখারীর আরেকটি বর্ণনা (৪৮৪৭), যার কথা ইবন কাসীরও বলেন, ৪৯:১ আয়াতের নাম নেয়। সে প্রশ্নের আলোচনা ওই আয়াতগুলোর জায়গায়। হাদীসটি নিজে বলে না যে ৪৯:৩ আয়াত উমরকে নিয়ে নাযিল হয়েছে। এ কথা আছে কুরতুবী ও বাগাভীর আনা বর্ণনায়। আর ইবনুয যুবাইর আবু বকর সম্পর্কে কিছু না বললেও এ দুই মুফাসসির অন্যদের সূত্রে তাঁর ফিসফিস করে কথা বলার কসম বর্ণনা করেন। সাবিত ইবন কায়স (রাঃ)-এর ঘটনা ৪৯:২ আয়াতের সতর্কবাণীকে ঘিরে, তাই তা ওই আয়াতের জন্য রেখে দেওয়া হলো।"
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
            "bn": "লাহুম মাগফিরাতুন ওয়া আজরুন আযীম: তাদের জন্য আছে মাগফিরাত আর বিরাট পুরস্কার। তাবারীর ব্যাখ্যায় মাগফিরাত মানে তাদের আগের গুনাহ আল্লাহর মাফ করে দেওয়া, সেগুলো উপেক্ষা করা। আর বিরাট পুরস্কার মানে প্রচুর সওয়াব, অর্থাৎ জান্নাত। মুয়াসসারও একই কথা বলে। সা'দী দুটি দানকে আলাদা করে দেখান। মাগফিরাতে মন্দ আর অপছন্দের জিনিস দূর হয়। আর বিরাট পুরস্কার, যার বিবরণ আল্লাহ ছাড়া কেউ জানে না, তাতে প্রিয় জিনিস হাতে আসে। প্রথমটি সরিয়ে দেয়, দ্বিতীয়টি দান করে।"
          },
          {
            "en": "How far the command reaches after his lifetime is a question the sources answer in different measure. The inner side of the verse is open to every reader either way. Al-Qurtubi and al-Baghawi name the motive as ijlal, reverence, and the commentators describe the heart as tested, made pure and fit for taqwa. A person who notices his voice climbing in an argument he is sure of, and lowers it, practises in a small way the outward habit the verse praises; the inner part is the heart it names.",
            "bn": "তাঁর ইন্তেকালের পর আদেশটি কতদূর পৌঁছায়, সে প্রশ্নে তাফসীরগুলোর উত্তর এক মাপের নয়। তবে আয়াতের ভেতরের দিকটা যেকোনো পাঠকের জন্য খোলা। কুরতুবী ও বাগাভী এর প্রেরণাকে বলেন ইজলাল, অর্থাৎ সম্মান ও আদব। আর মুফাসসিররা অন্তরের বর্ণনা দেন এভাবে: পরীক্ষিত, খাঁটি, তাকওয়ার উপযুক্ত। নিজের নিশ্চিত মত নিয়ে তর্কের সময় কেউ যদি টের পায় গলা চড়ছে, আর তা নামিয়ে আনে, তবে আয়াতে প্রশংসিত বাইরের অভ্যাসটা সে অল্প হলেও চর্চা করল। ভেতরের অংশটা হলো সেই অন্তর, যার কথা আয়াত বলে।"
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
            "bn": "'ইন্নামাল মু'মিনূনা ইখওয়াহ' — মুমিনরা তো পরস্পর ভাই। বাক্যটি দাঁড়িয়ে আছে 'ইন্নামা' — সীমাবদ্ধকারী অব্যয় — এবং একটি সাহসী শব্দচয়নের ওপর: 'ইখওয়াহ' সেই বহুবচন, আরবি সাধারণত যা ব্যবহার করে জন্মসূত্রের ভাইদের জন্য। ভাষার সবচেয়ে শক্ত বন্ধনটি নিয়ে কুরআন ঘোষণা করে — এ-ই সব মুমিনের মধ্যে বিদ্যমান সম্পর্ক। এটি বলা হয়েছে সত্য হিসেবে, আকাঙ্ক্ষা হিসেবে নয় — মুমিনদের ভাইসুলভ বোধ করা উচিত, তা নয়; বরং মুমিনরা ভাই-ই — আর একজন ভাইয়ের যা যা প্রাপ্য, সবই তা থেকে অনুসৃত হয়।"
          },
          {
            "en": "The command then rides on the fact: fa-aslihu bayna akhawaykum, so set things right between your two brothers — and the dual, your two brothers, is precise. Reconciliation is not only for wars between factions; it reaches down to any two individuals at odds. The verse ends by tying the work to taqwa and to hope: and fear Allah, that you may be shown mercy — as if mercy from above is kept moving by mercy repaired below.",
            "bn": "নির্দেশটি তারপর সেই সত্যের ওপর চড়ে: 'ফা-আসলিহূ বাইনা আখাওয়াইকুম' — অতএব তোমাদের দুই ভাইয়ের মধ্যে মীমাংসা করে দাও — আর দ্বিবচনটি — তোমাদের দুই ভাই — সুনির্দিষ্ট। মীমাংসা কেবল দলে দলে যুদ্ধের জন্য নয়; তা নেমে আসে বিবাদে জড়ানো যেকোনো দুজন মানুষ পর্যন্ত। আয়াত শেষ হয় কাজটিকে তাকওয়া ও আশার সঙ্গে বেঁধে: আর আল্লাহকে ভয় করো, যাতে তোমাদের প্রতি রহম করা হয় — যেন ওপরের রহমত সচল থাকে নিচে মেরামত করা রহমতের জোরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Stands",
          "bn": "আয়াতটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "The verse follows 49:9, which faces the hardest case honestly: two parties of believers actually fighting. Even there the Quran calls both sides believers, orders the community to make peace, to fight the aggressing side until it returns to Allah's command, and then to reconcile with justice. 49:10 supplies the ground for all of it: intervention is not interference, because the quarrelling parties are your brothers; a bystander to a family fracture is not neutral, he is negligent.",
            "bn": "আয়াতটি আসে 49:9 আয়াতের পরে, যা সবচেয়ে কঠিন ঘটনাটির মুখোমুখি হয় সততার সঙ্গে: মুমিনদের দুটি দল সত্যিই লড়ছে। সেখানেও কুরআন দুই পক্ষকেই বলে মুমিন, সম্প্রদায়কে নির্দেশ দেয় মীমাংসা করতে, বাড়াবাড়িকারী পক্ষের বিরুদ্ধে লড়তে যতক্ষণ না সে আল্লাহর নির্দেশে ফিরে আসে, তারপর ইনসাফের সঙ্গে মীমাংসা করতে। 49:10 এসবের ভিতটি জোগায়: হস্তক্ষেপ এখানে অনধিকারচর্চা নয়, কারণ বিবাদমান পক্ষরা তোমার ভাই; পরিবারের ভাঙনের সামনে দাঁড়ানো দর্শক নিরপেক্ষ নয়, সে দায়িত্বে অবহেলাকারী।"
          },
          {
            "en": "And immediately after, 49:11-12 ban the small solvents that dissolve brotherhood before any fight begins: mockery, insulting nicknames, suspicion, spying, backbiting — the last pictured as eating a dead brother's flesh. The arrangement is a complete policy: 49:9 treats the open wound, 49:10 states the bond, 49:11-12 remove the slow poisons. The surah legislates for brotherhood the way one maintains anything precious: repair, foundation, and prevention.",
            "bn": "আর ঠিক পরেই 49:11-12 নিষিদ্ধ করে সেই ছোট দ্রাবকগুলো, কোনো লড়াই শুরুর আগেই যা ভ্রাতৃত্বকে গলিয়ে দেয়: উপহাস, আপত্তিকর ডাকনাম, কুধারণা, গোয়েন্দাগিরি, গীবত — শেষটিকে চিত্রিত করা হয়েছে মৃত ভাইয়ের গোশত খাওয়া রূপে। বিন্যাসটি একটি পূর্ণাঙ্গ নীতি: 49:9 খোলা ক্ষতের চিকিৎসা করে, 49:10 বন্ধনটি ঘোষণা করে, 49:11-12 ধীর বিষগুলো সরায়। মূল্যবান যেকোনো জিনিস মানুষ যেভাবে রক্ষণাবেক্ষণ করে, সূরাটি ভ্রাতৃত্বের জন্য সেভাবেই আইন করে: মেরামত, ভিত্তি, আর প্রতিরোধ।"
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
            "bn": "নবী ﷺ শব্দটিকে দায়িত্বে পূর্ণ করেছেন। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: তোমরা পরস্পরকে হিংসা কোরো না, একে অন্যের বিরুদ্ধে দাম বাড়িয়ে দিয়ো না, পরস্পরকে ঘৃণা কোরো না, একে অন্যের দিক থেকে মুখ ফিরিয়ে নিয়ো না — আর হে আল্লাহর বান্দারা, ভাই হয়ে যাও — মুসলিম মুসলিমের ভাই; সে তার প্রতি জুলুম করে না, তাকে অসহায় ফেলে না, তাকে তুচ্ছও করে না। হাদীসটি এরপর বুকের দিকে ইশারা করে: তাকওয়া এখানে। বন্ধনটির ব্যর্থতাগুলো শুরু হয় ভেতরের অবস্থা হিসেবে।"
          },
          {
            "en": "Al-Bukhari relates from Abu Musa (RA): the believer to the believer is like a building, parts of it binding other parts — and the Prophet ﷺ interlaced his fingers. And 3:103 tells the believers to remember the favour: you were enemies, and He joined your hearts, and by His favour you became brothers. Brotherhood is listed among Allah's gifts, not among human achievements — which is why damaging it is treated in the surah with such severity.",
            "bn": "বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: মুমিন মুমিনের জন্য ইমারতের মতো — যার এক অংশ আরেক অংশকে শক্ত করে ধরে রাখে — আর নবী ﷺ নিজের আঙুলগুলো পরস্পরে প্রবেশ করালেন। আর 3:103 মুমিনদের বলে নিয়ামতটি স্মরণ করতে: তোমরা ছিলে শত্রু, তিনি তোমাদের হৃদয়গুলো জুড়ে দিলেন, আর তাঁর অনুগ্রহে তোমরা ভাই হয়ে গেলে। ভ্রাতৃত্ব তালিকাভুক্ত আল্লাহর দানের মধ্যে, মানুষের অর্জনের মধ্যে নয় — আর এ কারণেই এর ক্ষতিসাধনকে সূরাটিতে এত কঠোরভাবে দেখা হয়েছে।"
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
            "bn": "বন্ধনটি যেহেতু আল্লাহর দান, তাই তা জোড়া লাগানোর মর্যাদা চমকে দেওয়ার মতো উঁচু। আবু দাউদ আবু দারদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমি কি তোমাদের এমন এক স্তরের কথা জানাব না, যা রোযা, নামায ও সদকার মর্যাদার চেয়েও উত্তম? মানুষের পারস্পরিক সম্পর্ক ঠিক করে দেওয়া — আর পারস্পরিক সম্পর্কের বিনাশই হলো মুণ্ডনকারী। তিরমিযীর বর্ণনা যোগ করে: আমি বলছি না তা চুল কামায়, বরং তা দ্বীনকে কামিয়ে ফেলে।"
          },
          {
            "en": "The permissions granted to peacemaking mark its weight too: the one who conveys good and adds good in order to reconcile people is not counted a liar — al-Bukhari relates it from Umm Kulthum bint Uqbah (RA). Exaggeration is forbidden and backbiting is forbidden, yet the strictness of literal reporting is relaxed for this one purpose. The law itself signals that a repaired bond between believers outweighs conventions it would normally never touch.",
            "bn": "মীমাংসার জন্য দেওয়া ছাড়গুলোও এর ওজন চিহ্নিত করে: মানুষের মধ্যে মিলমিশ করাতে যে ভালো কথা পৌঁছে দেয় ও ভালো কথা যোগ করে, সে মিথ্যাবাদী গণ্য হয় না — বুখারী এটি উম্মে কুলসুম বিনতে উকবা (রাঃ) থেকে বর্ণনা করেন। অতিরঞ্জন নিষিদ্ধ, গীবতও নিষিদ্ধ, তবু আক্ষরিক প্রতিবেদনের কঠোরতা শিথিল করা হয়েছে কেবল এই একটি উদ্দেশ্যে। শরীয়ত নিজেই সংকেত দেয়: মুমিনদের মধ্যে জোড়া লাগা একটি বন্ধনের ওজন এমন সব রীতির চেয়ে বেশি, সাধারণত যা সে স্পর্শই করত না।"
          }
        ]
      },
      {
        "h": {
          "en": "That You May Be Shown Mercy",
          "bn": "যাতে তোমাদের প্রতি রহম করা হয়"
        },
        "p": [
          {
            "en": "The closing clauses discipline the peacemaker. Wa-attaqu Allaha: reconciliation is done with taqwa — justly, as 49:9 demanded, without favouring the stronger side, without burying a right to end a quarrel quickly. La'allakum turhamun: that you may be shown mercy. The commentators hear the correspondence: those who labour to restore mercy between servants stand in the path of mercy from their Master. At-Tirmidhi relates the Prophet's ﷺ words: those who show mercy are shown mercy by the Most Merciful; show mercy to those on earth, and the One above the heaven will show mercy to you.",
            "bn": "সমাপ্তির বাক্যগুলো মীমাংসাকারীকে শৃঙ্খলায় আনে। 'ওয়াত্তাকুল্লাহ': মীমাংসা হবে তাকওয়ার সঙ্গে — ইনসাফে, যেমন 49:9 দাবি করেছে — শক্তিশালী পক্ষের প্রতি পক্ষপাত না করে, ঝগড়া দ্রুত মেটাতে কারও হক চাপা না দিয়ে। 'লাআল্লাকুম তুরহামূন' — যাতে তোমাদের প্রতি রহম করা হয়। মুফাসসিরগণ সাদৃশ্যটি শুনতে পান: বান্দাদের মধ্যে রহমত ফিরিয়ে আনতে যারা পরিশ্রম করে, তারা দাঁড়ায় তাদের মালিকের রহমতের পথে। তিরমিযী নবী ﷺ-এর কথাটি বর্ণনা করেন: দয়াশীলদের প্রতি পরম দয়াময় দয়া করেন; যমীনে যারা আছে তাদের প্রতি দয়া করো — আসমানের ওপরে যিনি আছেন তিনি তোমাদের প্রতি দয়া করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Doing the Verse",
          "bn": "আয়াতটি কাজে করা"
        },
        "p": [
          {
            "en": "The verse assigns work to the third party, which is most of us most of the time. Somewhere in every believer's circle two people are not speaking. The verse's claim is that their quarrel is your file, because both are your brothers; the passive hope that it resolves itself is not among the options offered. The method is modest: carry good words in both directions, host the meeting, absorb a little of the blame if it helps, and keep the justice of 49:9 in view throughout.",
            "bn": "আয়াতটি কাজ বরাদ্দ করে তৃতীয় পক্ষকে — বেশিরভাগ সময় যা আমরা অধিকাংশ মানুষই। প্রতিটি মুমিনের বৃত্তের কোথাও না কোথাও দুজন মানুষ কথা বলছে না। আয়াতের দাবি: তাদের ঝগড়াটি তোমার নথি, কারণ দুজনেই তোমার ভাই; নিজে নিজে মিটে যাবে — এই নিষ্ক্রিয় আশা প্রস্তাবিত বিকল্পগুলোর মধ্যে নেই। পদ্ধতিটি বিনীত: দুই দিকেই ভালো কথা বয়ে নাও, সাক্ষাতের আয়োজন করো, কাজে লাগলে দোষের খানিকটা নিজের কাঁধে নাও, আর পুরোটা সময় 49:9 আয়াতের ইনসাফ চোখের সামনে রাখো।"
          },
          {
            "en": "And for one's own quarrels, the Prophet ﷺ set a deadline: it is not lawful for a Muslim to forsake his brother beyond three nights, the two meeting and each turning away — and the better of them is the one who begins with the salam; al-Bukhari relates it from Abu Ayyub (RA). Brotherhood, the verse's fact, outlives every argument; the greeting that reopens it costs one word, and the better man pays it first.",
            "bn": "আর নিজের ঝগড়ার জন্য নবী ﷺ একটি সময়সীমা বেঁধে দিয়েছেন: কোনো মুসলিমের জন্য বৈধ নয় তিন রাতের বেশি তার ভাইকে বর্জন করা — দুজনের দেখা হয় আর দুজনেই মুখ ফিরিয়ে নেয় — আর তাদের মধ্যে উত্তম সে-ই, যে আগে সালাম দিয়ে শুরু করে; বুখারী এটি আবু আইয়ুব (রাঃ) থেকে বর্ণনা করেন। ভ্রাতৃত্ব — আয়াতের সেই সত্য — প্রতিটি তর্কের চেয়ে দীর্ঘজীবী; যে অভিবাদন তা আবার খুলে দেয় তার দাম একটি শব্দ, আর উত্তম মানুষটিই তা আগে চুকায়।"
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
          "bn": "যে সূরা আদব শেখায়"
        },
        "p": [
          {
            "en": "Al-Hujurat is short and almost entirely about how believers handle one another. The verse just before, 49:10, states the bond as a fact: the believers are but brothers. This verse comes immediately after and removes what corrodes that bond in company, and 49:12 comes immediately after this one to deal with what happens behind a person's back. The address is ya ayyuha alladhina amanu — the people warned here are believers, not strangers to faith.",
            "bn": "সূরা আল-হুজুরাত ছোট, আর প্রায় পুরোটাই মুমিনরা একে অপরের সাথে কীভাবে চলবে সে বিষয়ে। ঠিক আগের আয়াত 49:10 বন্ধনটিকে একটি বাস্তবতা হিসেবে ঘোষণা করে: মুমিনরা তো পরস্পর ভাই। এই আয়াতটি তার ঠিক পরেই এসে সরিয়ে দেয় সেসব জিনিস, যা মজলিসের মধ্যেই সেই বন্ধনে ক্ষয় ধরায়; আর 49:12 আসে এই আয়াতের ঠিক পরে, মানুষের অনুপস্থিতিতে যা ঘটে তার হিসাব নিতে। সম্বোধনটি 'ইয়া আইয়ুহাল্লাযীনা আমানূ' — এখানে যাদের সতর্ক করা হচ্ছে তারা মুমিন, ঈমানের অচেনা কেউ নয়।"
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
            "bn": "আয়াতটি তিনটি জিনিস নিষেধ করে এবং প্রত্যেকটির নাম ধরে বলে। 'সুখরিয়াহ', এসেছে 'লা ইয়াসখার' থেকে, মানে উপহাস: কথায়, নকল করে বা দৃষ্টি দিয়ে কাউকে হাসির পাত্র বানানো। 'লাময', এসেছে 'লা তালমিযূ' থেকে, মানে সরাসরি অপমান — খোঁচা, বিদ্রূপের ভঙ্গি, ধারালো মন্তব্য, যা যেখানে লাগার সেখানেই লাগে। 'তানাবুয বিল-আলকাব' মানে মানুষকে এমন নামে ডাকা যা তাকে লজ্জা দেয়। এই তিনটি মিলে ঠাট্টা, অপমান ও তকমা — তিনটিকেই ধরে ফেলে, আর অবজ্ঞা মূলত এই তিন পথেই চলাচল করে।"
          },
          {
            "en": "Lamz should not be merged with ghibah. Ghibah is forbidden in the next verse, 49:12, and it is what is said about a person who is not there, pictured as eating the flesh of a dead brother. Lamz belongs to this verse because it happens in the open. Notice also the object: wa la talmizu anfusakum, do not defame yourselves. The commentators read anfusakum as one another, on the ground that the believers are one body, so the insult you throw lands on your own side.",
            "bn": "'লাময'-কে 'গীবত'-এর সাথে মিলিয়ে ফেলা যাবে না। গীবত নিষিদ্ধ হয়েছে পরের আয়াতে, 49:12 আয়াতে, আর তা হলো অনুপস্থিত ব্যক্তি সম্পর্কে যা বলা হয় — যাকে মৃত ভাইয়ের গোশত খাওয়ার সাথে তুলনা করা হয়েছে। 'লাময' এই আয়াতেরই বিষয়, কারণ তা ঘটে সামনাসামনি, প্রকাশ্যে। কর্মপদটিও লক্ষ করুন: 'ওয়া লা তালমিযূ আনফুসাকুম' — তোমরা নিজেদেরকে কটাক্ষ কোরো না। মুফাসসিরগণ 'আনফুসাকুম'-কে 'একে অপরকে' অর্থে পড়েন, এই ভিত্তিতে যে মুমিনরা একই দেহ; ফলে আপনি যে অপমান ছুড়ছেন তা আপনার নিজের দিকেই এসে পড়ে।"
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
            "bn": "উপহাসের নিষেধাজ্ঞা দুবার জারি করা হয়েছে। প্রথমে: কোনো 'কাওম' যেন অন্য 'কাওম'-কে উপহাস না করে, হতে পারে তারা তাদের চেয়ে উত্তম; এরপর: নারীরা যেন অন্য নারীদের উপহাস না করে, হতে পারে তারা তাদের চেয়ে উত্তম। কুরআন দ্বিতীয় ক্ষেত্রটিকে প্রথমটি থেকে অনুমান করে নেওয়ার জন্য ছেড়ে দেয়নি। নারীদের মজলিসের উপহাস আর পুরুষদের মজলিসের উপহাস — দুটিকেই আলাদাভাবে নাম ধরে বলা হয়েছে, আর দুটির জন্যই একই কারণ, একই শব্দে দেওয়া হয়েছে।"
          },
          {
            "en": "The reason given is worth weighing. It is not that the person mocked might be offended, but that he might be better — 'asa an yakunu khayran minhum. The scale being used is Allah's, and we cannot read it. Muslim relates from Abu Hurayrah (RA) that the Prophet ﷺ said Allah does not look at your forms and your wealth, but He looks at your hearts and your deeds. Mockery is almost always aimed at exactly what is not being weighed.",
            "bn": "যে কারণটি দেওয়া হয়েছে তা ভেবে দেখার মতো। কারণটি এই নয় যে উপহাসের শিকার ব্যক্তি হয়তো কষ্ট পাবে, বরং এই যে সে হয়তো উত্তম — 'আসা আন ইয়াকূনূ খাইরাম মিনহুম'। এখানে যে মাপকাঠি ব্যবহৃত হচ্ছে তা আল্লাহর, আর আমরা তা পড়তে পারি না। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ তোমাদের আকৃতি ও সম্পদের দিকে তাকান না, বরং তিনি তাকান তোমাদের অন্তর ও আমলের দিকে। উপহাস প্রায় সবসময়ই ঠিক সেই জিনিসকেই লক্ষ্য করে, যা ওজন করা হচ্ছে না।"
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
            "bn": "আবু দাউদ ও তিরমিযী আবু জাবীরা ইবনুদ দাহহাক থেকে বর্ণনা করেন যে এই আয়াতটি তাঁদের, অর্থাৎ বনু সালামার ব্যাপারে নাযিল হয়েছিল: নবী ﷺ যখন মদীনায় পৌঁছান, তাঁদের একেকজনের দুই-তিনটি করে নাম ছিল, আর নবী ﷺ কোনো একটি নামে কাউকে ডাকলে লোকেরা বলত, এই নামটি তার অপছন্দ। তিরমিযী বর্ণনাটিকে হাসান সহীহ বলেছেন। তবে বাড়তি প্রতিটি নামই নিষিদ্ধ নয়। ইমাম বুখারী সাহল ইবনে সা'দ (রাঃ) থেকে বর্ণনা করেন যে আলী (রাঃ)-এর কাছে 'আবু তুরাব' নামটির চেয়ে প্রিয় কোনো নাম ছিল না, আর নামটি নবী ﷺ-ই তাঁকে দিয়েছিলেন।"
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
            "bn": "এরপর আসে রায়: 'বি'সাল ইসমুল ফুসূকু বা'দাল ঈমান' — ঈমানের পর ফাসিকীর নাম কতই না মন্দ। মুফাসসিরগণ এটিকে দুভাবেই পড়েন: একজন মুমিনকে পাপের নামে তকমা দেওয়া কত মন্দ, এবং একজন মুমিন এসব কাজ করে নিজের জন্য ফাসিকীর দুর্নাম কামিয়ে নেওয়া কত মন্দ। এরপর আয়াতটি এমন কঠিনভাবে শেষ হয় যা বিষয়বস্তু দেখে আশা করা যায় না: যারা তওবা করে না, তারাই যালিম। একটি ঠাট্টাকে যুলমের শিরোনামের নিচে বসিয়ে দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Breaks Now",
          "bn": "এখন এটি কোথায় ভাঙে"
        },
        "p": [
          {
            "en": "Most of this now happens in writing, in groups, and with an audience that laughs without typing. The three acts survive intact: the imitation clip is sukhriyah, the cutting reply is lamz, the label that follows a person for years is tanabuz. The verse offers one test that costs nothing to apply. Before the remark goes out, ask whether the person it targets might stand better with Allah than you do — and notice that you have no way of knowing.",
            "bn": "এসবের বেশির ভাগই এখন ঘটে লেখায়, গ্রুপে, আর এমন শ্রোতাদের সামনে যারা না লিখেই হাসে। তিনটি কাজ অবিকল টিকে আছে: নকল করা ক্লিপটি সুখরিয়াহ, ধারালো জবাবটি লাময, আর যে তকমা বছরের পর বছর মানুষের পিছু ছাড়ে না সেটি তানাবুয। আয়াতটি এমন একটি পরীক্ষা দেয় যা প্রয়োগ করতে কিছুই খরচ হয় না। মন্তব্যটি পাঠানোর আগে জিজ্ঞেস করুন, যাকে লক্ষ্য করা হচ্ছে সে আল্লাহর কাছে আপনার চেয়ে উত্তম অবস্থানে আছে কি না — আর লক্ষ করুন, তা জানার কোনো উপায়ই আপনার নেই।"
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
            "bn": "সূরা আল-হুজুরাত একটি সম্প্রদায়ের যৌথ জীবনের সংক্ষিপ্ত নির্দেশিকা। 49:6-এ সে ইতিমধ্যে আদেশ দিয়েছে খবর যাচাই না করে তার ওপর কাজ না করতে, 49:9-এ লড়াইরত মুমিনদের মীমাংসা করতে, আর 49:11-এ নিষিদ্ধ করেছে উপহাস, গালি ও আঘাত করা ডাকনাম। এরপর 49:12 ঘরের ভেতরে ঢোকে। প্রকাশ্য চত্বর থেকে খোলা অবজ্ঞা সাফ করার পর সূরা অবজ্ঞাকে ধাওয়া করে তার লুকানোর জায়গাগুলোতে: অনুমানে, অনুসন্ধানে, আর পিঠের পেছনের আলাপে।"
          },
          {
            "en": "The order is diagnostic. Backbiting is rarely the first sin; it is fed by spying, and spying is fed by suspicion. So the verse cuts the chain at its first link: ijtanibu kathiran min az-zann — avoid much of assumption, for some assumption is sin. Not all of it: the verse legislates precisely. What is forbidden is the baseless assumption of evil about people whose outward state is sound.",
            "bn": "ক্রমটিই রোগনির্ণয়। গীবত সাধারণত প্রথম গুনাহ নয়; তাকে খাওয়ায় গোয়েন্দাগিরি, আর গোয়েন্দাগিরিকে খাওয়ায় সন্দেহ। তাই আয়াত শিকলটি কাটে তার প্রথম কড়িতে: ইজতানিবু কাসীরাম মিনায যান্ন — অনুমানের অনেকটুকু বর্জন করো, কারণ কিছু অনুমান গুনাহ। সবটুকু নয়: আয়াত সূক্ষ্মভাবে বিধান দেয়। নিষিদ্ধ হলো তাদের সম্পর্কে ভিত্তিহীন মন্দ ধারণা, যাদের বাহ্যিক অবস্থা নির্দোষ।"
          }
        ]
      },
      {
        "h": {
          "en": "Suspicion and Spying",
          "bn": "সন্দেহ ও গোয়েন্দাগিরি"
        },
        "p": [
          {
            "en": "Wa la tajassasu — and do not spy. Suspicion left alive goes looking for evidence; tajassus is suspicion with a search warrant it wrote for itself. The command protects the cover Allah Himself has left over people's faults. The commentators note that the community is instructed to deal with what people show, and to leave what they conceal to their Lord — the opposite of a culture of surveillance, exposure, and files kept on neighbours.",
            "bn": "ওয়া লা তাজাসসাসু — আর গোপন দোষ খুঁজে বেড়িয়ো না। সন্দেহকে বাঁচিয়ে রাখলে সে প্রমাণ খুঁজতে বের হয়; তাজাসসুস হলো সেই সন্দেহ, যে নিজের জন্য নিজেই তল্লাশি-পরোয়ানা লিখে নিয়েছে। এই নিষেধ রক্ষা করে সেই আবরণ, যা আল্লাহ নিজেই মানুষের দোষের ওপর রেখে দিয়েছেন। মুফাসসিরগণ লক্ষ করেন, সম্প্রদায়কে বলা হয়েছে মানুষ যা প্রকাশ করে তা নিয়েই চলতে, আর যা তারা গোপন রাখে তা তাদের রবের হাতে ছেড়ে দিতে — নজরদারি, ফাঁস করা আর প্রতিবেশীর নামে নথি জমানোর সংস্কৃতির ঠিক উল্টো।"
          },
          {
            "en": "The three sins also share one convenience: each is committed in the target's absence. The suspected, the spied-upon and the backbitten cannot answer, because they are not there. That is exactly what the verse's famous image will seize on — and it is why these sins feel so cheap to commit. No confrontation, no risk, no reply. The surah that banned insulting a believer to his face now bans the coward's versions of the same contempt.",
            "bn": "তিনটি গুনাহের একটি সাধারণ সুবিধাও আছে: প্রতিটিই ঘটে লক্ষ্যবস্তুর অনুপস্থিতিতে। যাকে সন্দেহ করা হয়, যার ওপর নজরদারি চলে, যার গীবত হয় — কেউই জবাব দিতে পারে না, কারণ তারা সেখানে নেই। আয়াতের বিখ্যাত চিত্রটি ঠিক এখানটাই ধরবে — আর এ কারণেই এই গুনাহগুলো করা এত সস্তা মনে হয়। কোনো মুখোমুখি নয়, কোনো ঝুঁকি নেই, কোনো জবাব নেই। যে সূরা মুমিনকে মুখের ওপর অপমান করা নিষিদ্ধ করেছে, সে এখন নিষিদ্ধ করছে একই অবজ্ঞার কাপুরুষী সংস্করণগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Flesh of a Dead Brother",
          "bn": "মৃত ভাইয়ের মাংস"
        },
        "p": [
          {
            "en": "Would one of you love to eat the flesh of his dead brother? You would detest it. The Prophet ﷺ defined the sin in the hadith Muslim relates: mentioning your brother with what he dislikes; if what you say is true, you have backbitten him, and if it is false, you have slandered him. The definition removes the standard excuse before it is offered — but it is true is precisely what makes it ghibah.",
            "bn": "তোমাদের কেউ কি তার মৃত ভাইয়ের মাংস খেতে পছন্দ করবে? তোমরা তো তা ঘৃণাই করো। নবী ﷺ গুনাহটির সংজ্ঞা দিয়েছেন মুসলিমের বর্ণিত হাদীসে: তোমার ভাইয়ের এমন উল্লেখ, যা সে অপছন্দ করে; তুমি যা বলছ তা সত্য হলে তুমি তার গীবত করলে, আর মিথ্যা হলে তার ওপর অপবাদ দিলে। এই সংজ্ঞা প্রচলিত অজুহাতটিকে পেশ হওয়ার আগেই সরিয়ে দেয় — 'কিন্তু কথাটা তো সত্যি' — ঠিক সেটিই একে গীবত বানায়।"
          },
          {
            "en": "The image works because it is exact. The absent person is like the dead: unable to defend himself. His honour is his flesh; the gossip session is a meal, shared and even enjoyed. The verse makes the ugliness of a normalised habit suddenly visible, then adds fa-karihtumuh — you already detest it. The moral sense needed is present in every hearer; the verse only connects it to the act it had excused.",
            "bn": "চিত্রটি কাজ করে কারণ তা নিখুঁত। অনুপস্থিত মানুষটি মৃতের মতো: আত্মরক্ষায় অক্ষম। তার সম্মানই তার মাংস; আড্ডার গীবত-আসরটি এক ভোজ — ভাগ করে খাওয়া, এমনকি উপভোগ করা। আয়াতটি এক স্বাভাবিক-হয়ে-যাওয়া অভ্যাসের কদর্যতাকে হঠাৎ দৃশ্যমান করে দেয়, তারপর যোগ করে: ফা-কারিহতুমুহ — তোমরা তো তা ঘৃণাই করো। প্রয়োজনীয় নৈতিক বোধ প্রত্যেক শ্রোতার মধ্যেই আছে; আয়াত কেবল সেটিকে জুড়ে দেয় সেই কাজের সঙ্গে, যাকে সে এতদিন ছাড় দিয়ে এসেছে।"
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
            "bn": "49:13 সম্বোধনকে মুমিনদের থেকে সবার দিকে প্রশস্ত করে: ইয়া আইয়ুহান নাস — হে মানবজাতি। আমি তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে — রক্তের প্রতিটি দাবি করা শ্রেষ্ঠত্ব অভিন্ন পিতামাতার কাছে এসে ধসে পড়ে — আর তোমাদের করেছি বিভিন্ন জাতি ও গোত্র, লি-তাআরাফু — যেন তোমরা পরস্পরকে চেনো। ভিন্নতার অস্তিত্ব পরিচয়ের জন্য, ক্রমতালিকার জন্য নয়। জাতি ও গোত্রকে দেওয়া হয়েছে নাম ও ঠিকানার মর্যাদা: সাক্ষাতের জন্য দরকারি, বড়াইয়ের জন্য অকেজো।"
          },
          {
            "en": "Then the verse relocates nobility entirely: the most noble of you with Allah is the most God-conscious of you. And since the verse ends inna Allaha alimun khabir — He is Knowing, Acquainted — the new ranking is unmeasurable by us. Taqwa sits in hearts only He reads. The verse thus abolishes not just racism but the whole project of publicly ranking souls; the true league table exists, and no human being holds a copy.",
            "bn": "এরপর আয়াত মর্যাদার ঠিকানাই বদলে দেয়: আল্লাহর কাছে তোমাদের মধ্যে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি তাকওয়াবান। আর আয়াত যেহেতু শেষ হয় ইন্নাল্লাহা আলীমুন খাবীর দিয়ে — তিনি সর্বজ্ঞ, সম্যক অবগত — নতুন এই ক্রমতালিকা আমাদের পক্ষে মাপা অসম্ভব। তাকওয়া থাকে হৃদয়ে, যা কেবল তিনিই পড়েন। ফলে আয়াতটি শুধু বর্ণবাদ নয়, প্রকাশ্যে আত্মাদের র‍্যাংকিং করার গোটা প্রকল্পটিই বাতিল করে দেয়; প্রকৃত মেধাতালিকা আছে ঠিকই — কিন্তু তার কপি কোনো মানুষের হাতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Farewell Declaration",
          "bn": "বিদায়ের ঘোষণা"
        },
        "p": [
          {
            "en": "The Prophet ﷺ preached this verse's content to the largest audience of his life. In the sermon of the farewell pilgrimage days he ﷺ declared, as Ahmad relates with a sound chain: no Arab has superiority over a non-Arab, nor a non-Arab over an Arab, nor red — the light-skinned — over black, nor black over red, except by taqwa. The verse and the sermon together close the door that lineage-pride, the boast of jahiliyyah, keeps trying to reopen.",
            "bn": "নবী ﷺ এই আয়াতের বক্তব্য প্রচার করেছেন তাঁর জীবনের বৃহত্তম শ্রোতৃমণ্ডলীর সামনে। বিদায় হজের দিনগুলোর ভাষণে তিনি ﷺ ঘোষণা করেন — ইমাম আহমাদ সহীহ সনদে বর্ণনা করেছেন: কোনো আরবের শ্রেষ্ঠত্ব নেই অনারবের ওপর, অনারবেরও নেই আরবের ওপর; লাল (ফর্সা) বর্ণের নেই কালোর ওপর, কালোরও নেই লালের ওপর — তাকওয়া ছাড়া। আয়াত ও ভাষণ মিলে সেই দরজাটি বন্ধ করে দেয়, যা বংশ-অহংকার — জাহিলিয়াতের বড়াই — বারবার খুলতে চায়।"
          },
          {
            "en": "Living the two verses means policing one small organ and one large instinct. The tongue: no relaying of the absent one's faults, and 104:1 pronounces woe upon every habitual slanderer and fault-hunter. The instinct: the quiet conviction that our people are inherently better. Both verses converge on the same discipline — treat the concealed as Allah's business and the different as a person to know, and judge no one's rank, including your own.",
            "bn": "আয়াত দুটি নিয়ে বাঁচা মানে একটি ছোট অঙ্গ আর একটি বড় প্রবৃত্তিকে পাহারায় রাখা। জিভ: অনুপস্থিত মানুষের দোষ আর বয়ে বেড়ানো নয় — 104:1 ধ্বংস ঘোষণা করে প্রত্যেক অভ্যাসগত নিন্দুক ও ছিদ্রান্বেষীর ওপর। প্রবৃত্তি: এই নীরব প্রত্যয় যে আমাদের লোকেরাই জন্মগতভাবে ভালো। দুটি আয়াতই এক অভিন্ন অনুশীলনে মেলে — গোপন বিষয়কে আল্লাহর এখতিয়ার মানুন, ভিন্ন মানুষকে চেনার মতো একজন মানুষ ভাবুন, আর কারও মর্যাদার রায় দেবেন না — নিজেরটারও নয়।"
          }
        ]
      }
    ]
  }
});
