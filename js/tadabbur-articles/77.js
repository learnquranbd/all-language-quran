/**
 * Tadabbur long-form articles — surah 77.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "77:1": {
    "sections": [
      {
        "h": {
          "en": "An Oath Without a Noun",
          "bn": "নামহীন এক শপথ"
        },
        "p": [
          {
            "en": "Wa-l-mursalati 'urfa: by those sent forth, 'urfan. The surah opens on two Arabic words. The first is a feminine plural participle, those that are sent, and the verse never says what they are. Ma'arif al-Qur'an, on 77:1 to 77:5, makes the point directly: the names of the things sworn by are not given, only their attributes, five in a row. The second word, 'urfan, describes the sending, and it too carries several meanings.",
            "bn": "ওয়াল মুরসালাতি উরফা: শপথ সেই প্রেরিতদের, উরফান। সূরা শুরু হয় মাত্র দুটি আরবি শব্দে। প্রথমটি ক্রিয়া থেকে গড়া স্ত্রীলিঙ্গ বহুবচন শব্দ, অর্থ যাদের পাঠানো হয়। কিন্তু তারা কারা, আয়াত তা বলে না। মাআরিফুল কুরআন ৭৭:১ থেকে ৭৭:৫ আয়াতের আলোচনায় কথাটা সরাসরি বলে: যেসব জিনিসের শপথ করা হয়েছে, তাদের নাম আসেনি, এসেছে শুধু তাদের গুণ, পরপর পাঁচটি। দ্বিতীয় শব্দ উরফান বলে পাঠানোর ধরন, আর এরও অর্থ কয়েকটি।"
          },
          {
            "en": "What the oath is for is not in doubt. As-Sa'di says Allah swears here on the resurrection and on recompense for deeds. The Muyassar reads 77:1 to 77:7 as one movement: an oath by winds that blow in succession, one following another, by violent winds, by the angels who drive the clouds wherever Allah wills, by angels who bring what separates truth from falsehood, and by angels who carry revelation down to the prophets, as an excuse and a warning from Allah to His creation. Then comes the answer in 77:7: what you are promised will surely occur.",
            "bn": "শপথটা কিসের জন্য, তাতে কোনো সন্দেহ নেই। সা'দী বলেন, আল্লাহ এখানে শপথ করছেন পুনরুত্থান আর আমলের প্রতিদানের উপর। মুয়াসসার ৭৭:১ থেকে ৭৭:৭ পর্যন্ত পুরোটাকে একটানা পড়ে। শপথ সেই বাতাসের, যা একটার পর একটা বয়ে আসে। শপথ প্রচণ্ড ঝড়ো বাতাসের, সেই ফেরেশতাদের যারা আল্লাহর ইচ্ছামতো মেঘ হাঁকিয়ে নেয়, যারা হক আর বাতিলের পার্থক্য নিয়ে নামে, আর যারা নবীদের কাছে ওহি নিয়ে আসে। এসবই সৃষ্টির প্রতি আল্লাহর পক্ষ থেকে ওজর মিটিয়ে দেওয়া আর সতর্ক করা। তারপর আসে জবাব, ৭৭:৭ আয়াতে: তোমাদের যার ওয়াদা দেওয়া হয়েছে, তা ঘটবেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Winds, Angels or Messengers",
          "bn": "বাতাস, ফেরেশতা, না রাসূল"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying that the people of interpretation differed over this verse. One group said the mursalat are the winds, following one another. He gives this through several chains from 'Abdullah ibn Mas'ud (RA), who was asked by Abu al-'Ubaydayn and answered: the wind. He reports the same from Ibn 'Abbas (RA), from Abu Salih, from Mujahid and from Qatadah. Al-Qurtubi goes further and says that the majority of the commentators hold the mursalat to be the winds, and he points to the Qur'an's own usage in 15:22 and 7:57, where Allah sends the winds.",
            "bn": "তাবারী শুরুতেই জানান, এ আয়াতের ব্যাখ্যায় মুফাসসিরদের মধ্যে মতভেদ আছে। একদল বলেছেন, মুরসালাত মানে বাতাস, যা একটার পর একটা আসে। এ মত তিনি একাধিক সূত্রে আনেন আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে। আবুল উবাইদাইন তাঁকে জিজ্ঞেস করেছিলেন, আর তিনি জবাব দিয়েছিলেন: বাতাস। একই কথা তাবারী আনেন ইবন আব্বাস (রাঃ), আবু সালিহ, মুজাহিদ আর কাতাদা থেকে। কুরতুবী আরও এগিয়ে বলেন, অধিকাংশ মুফাসসির মুরসালাতকে বাতাসই ধরেছেন। এর পক্ষে তিনি দেখান কুরআনেরই ব্যবহার, ১৫:২২ আর ৭:৫৭ আয়াতে, যেখানে আল্লাহ বাতাস পাঠানোর কথা বলেছেন।"
          },
          {
            "en": "A second group said they are the angels, sent with al-'urf. At-Tabari reports Masruq saying so, and also relating it from 'Abdullah; al-Baghawi identifies that report as Masruq's from Ibn Mas'ud (RA), and gives the same reading from Muqatil: the angels sent with what is right of Allah's command and prohibition. Ibn Kathir, in the Arabic text, brings Abu Hurayrah (RA) through Ibn Abi Hatim saying: the angels. He adds that the like is reported from Masruq, Abu ad-Duha, Mujahid in one of his reports, as-Suddi and ar-Rabi' ibn Anas.",
            "bn": "আরেক দল বলেছেন, এরা ফেরেশতা, যাদের পাঠানো হয় উরফসহ। তাবারী মাসরূকের এ মত আনেন, আর আনেন মাসরূকের সূত্রে আবদুল্লাহর বর্ণনাও। বাগাভী স্পষ্ট করেন, এটি ইবন মাসউদ (রাঃ) থেকে মাসরূকের বর্ণনা। একই ব্যাখ্যা তিনি দেন মুকাতিল থেকে: সেই ফেরেশতারা, যাদের পাঠানো হয়েছে আল্লাহর আদেশ-নিষেধের ভালো বিষয়গুলো নিয়ে। ইবন কাসীর আরবি তাফসীরে ইবন আবি হাতিমের সূত্রে আবু হুরায়রা (রাঃ)-এর কথা আনেন: ফেরেশতা। তিনি যোগ করেন, মাসরূক, আবুদ দুহা, এক বর্ণনায় মুজাহিদ, সুদ্দী আর রাবী ইবন আনাস থেকেও এমনই বর্ণিত।"
          },
          {
            "en": "A third answer points to messengers. Asked about the verse, Abu Salih said: they are al-rusul, sent with what is right; at-Tabari files this under the angels reading, since the word can mean angelic envoys. Al-Qurtubi reports Abu Salih as meaning messengers sent with the miracles that identify them, and Ibn 'Abbas (RA) as saying they are the prophets, sent with la ilaha illa Allah. So names cross sides: Ibn Mas'ud (RA) is reported for winds and for angels by different students, Ibn 'Abbas (RA) for winds and for prophets.",
            "bn": "তৃতীয় জবাব হলো, এরা রাসূলগণ। আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে আবু সালিহ বলেন: এরা আর-রুসুল, যাদের পাঠানো হয় ভালো বার্তা দিয়ে। তাবারী অবশ্য একে রেখেছেন ফেরেশতাদের মতের তালিকায়, কারণ শব্দটি ফেরেশতা দূতদেরও বোঝাতে পারে। কুরতুবীর বর্ণনায় আবু সালিহর উদ্দেশ্য সেই রাসূলগণ, যাদের চেনা যায় তাঁদের মুজিযা দেখে। আর ইবন আব্বাস (রাঃ) থেকে তিনি আনেন: এরা নবীগণ, যাদের পাঠানো হয়েছে লা ইলাহা ইল্লাল্লাহ দিয়ে। ফলে একই নাম একাধিক মতে পাওয়া যায়। ভিন্ন ভিন্ন শিষ্যের সূত্রে ইবন মাসউদ (রাঃ) আছেন বাতাস আর ফেরেশতা দুই মতেই, আর ইবন আব্বাস (রাঃ) আছেন বাতাস আর নবী দুই মতে।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Keeps the Oath Wide",
          "bn": "তাবারী শপথকে সংকুচিত করেন না"
        },
        "p": [
          {
            "en": "Having set out the reports, at-Tabari gives his own judgment, and it is worth hearing in full. The correct view, he says, is that Allah swore by al-mursalat 'urfan; angels are sent 'urfan, and winds are sent in the same way, and there is no indication that one of the two parties is meant rather than the other. Allah made His oath general, covering everything that has this description. So whatever fits it falls within the oath, whether an angel, a wind, or a messenger sent from among the children of Adam.",
            "bn": "বর্ণনাগুলো সাজিয়ে তাবারী নিজের রায় দেন, আর পুরোটা শোনার মতো। তিনি বলেন, সঠিক কথা হলো, আল্লাহ শপথ করেছেন আল-মুরসালাতি উরফা দিয়ে। ফেরেশতাদেরও উরফান পাঠানো হয়, বাতাসকেও তেমনি পাঠানো হয়। দুই দলের কোনো একটিকেই বোঝানো হয়েছে, অন্যটিকে নয়, এমন কোনো প্রমাণ নেই। আল্লাহ তাঁর শপথকে ব্যাপক রেখেছেন, এই গুণ যার মধ্যে আছে তার সবটাকে ঘিরে। তাই যা-ই এ গুণে মেলে, তা শপথের ভেতরে পড়ে: ফেরেশতা হোক, বাতাস হোক, কিংবা আদম সন্তানদের মধ্য থেকে পাঠানো কোনো রাসূল।"
          },
          {
            "en": "Ma'arif al-Qur'an summarises at-Tabari as holding it safer to keep silent and side with no particular interpretation. The text consulted for this verse does decline to choose between the parties, but it does not stop at silence. It gathers all three into the oath, naming the human messenger beside the angel and the wind. His answer to the dispute is not that the matter is unknown, but that the verse is wide enough to hold every sent thing.",
            "bn": "মাআরিফুল কুরআন তাবারীর অবস্থানকে এভাবে সংক্ষেপ করে: চুপ থাকাই নিরাপদ, কোনো নির্দিষ্ট ব্যাখ্যার পক্ষ নেওয়া নয়। এ আয়াতের যে তাফসীর আনা হয়েছে, তাতে তিনি সত্যিই দুই দলের মধ্যে বাছাই করেননি। কিন্তু নীরবতায় থেমেও যাননি। শেষে তিনি তিনটিকেই শপথের ভেতরে জড়ো করেন, ফেরেশতা আর বাতাসের পাশে মানুষ রাসূলের নামও নেন। বিতর্কের জবাবে তাঁর কথা এই নয় যে বিষয়টা অজানা। তাঁর কথা হলো, আয়াতটি এত প্রশস্ত যে প্রেরিত সবকিছুকেই ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Like the Mane of a Horse",
          "bn": "ঘোড়ার কেশরের মতো সারি"
        },
        "p": [
          {
            "en": "The second word divides the readers again. At-Tabari reports some who said 'urfan means in succession, like the mane of a horse, the 'urf al-faras, its hairs lying one after another. He cites the Arab saying that the people are a single 'urf towards so-and-so when they flock to him, and Salih ibn Buraydah's gloss: they follow one another. Al-Qurtubi repeats the mane and the saying. Al-Baghawi adds from the same saying a further sense, 'urfan as many, the meaning, he says, of what Mujahid and Qatadah held.",
            "bn": "দ্বিতীয় শব্দটি নিয়েও পাঠকেরা ভাগ হয়ে যান। তাবারী কারও কারও মত আনেন: উরফান মানে পরপর, ঘোড়ার কেশরের মতো, যাকে বলে উরফুল ফারাস, যার চুলগুলো একটার পর একটা সাজানো। তিনি আরবদের একটি কথা উদ্ধৃত করেন: লোকেরা অমুকের দিকে এক উরফ, অর্থাৎ দলে দলে তার দিকে ছুটে গেছে। সালিহ ইবন বুরাইদার ব্যাখ্যাও তিনি আনেন: একটার পেছনে আরেকটা আসে। কুরতুবী কেশর আর প্রবাদটি দুটোই আবার উল্লেখ করেন। সেই প্রবাদ থেকে বাগাভী আরেকটি অর্থও আনেন, উরফান মানে অনেক। তাঁর মতে মুজাহিদ আর কাতাদার কথার অর্থ এটাই।"
          },
          {
            "en": "The other sense takes 'urf as what is right and known to be good, al-ma'ruf. At-Tabari's angels group read the verse as the angels sent with Allah's command and prohibition, and he adds: that is al-'urf. Al-Qurtubi sets out the grammar. Taken as a circumstantial accusative or as a verbal noun, 'urfan means in succession; or a preposition is understood, sent with al-'urf, and then the angels, or the angels and the messengers, are meant. As-Sa'di reads it so: sent with what is right, with wisdom and benefit, not with evil or idle purpose.",
            "bn": "আরেক অর্থে উরফ মানে যা ভালো বলে জানা, আল-মারূফ। তাবারীর ফেরেশতা-দল আয়াতটি পড়েন এভাবে: সেই ফেরেশতারা, যাদের পাঠানো হয়েছে আল্লাহর আদেশ আর নিষেধ নিয়ে। তাবারী যোগ করেন, এটাই উরফ। কুরতুবী ব্যাকরণটা খুলে বলেন। অবস্থাবাচক বা ক্রিয়াবিশেষ্য হিসেবে নিলে উরফান মানে পরপর। কিংবা একটি অব্যয় উহ্য ধরা হয়, যেন আয়াত বলছে উরফসহ পাঠানো, আর তখন উদ্দেশ্য ফেরেশতা, অথবা ফেরেশতা ও রাসূল উভয়ে। সা'দী এভাবেই পড়েন: পাঠানো হয়েছে ভালো, প্রজ্ঞা আর কল্যাণ নিয়ে, মন্দ বা অনর্থক কিছু নিয়ে নয়।"
          },
          {
            "en": "The two questions travel together. Succession suits the winds, gust after gust; what is right suits angels and messengers who carry a command. Ma'arif al-Qur'an, following its reading of Ibn Kathir, keeps both senses open even for the winds: 'urfan could mean beneficial and useful, since rain-bearing winds plainly are, or it could mean one after another. Al-Qurtubi also records, each under it was said, that the mursalat may be the clouds, which bring both blessing and punishment, or the warnings and admonitions, which come in succession or, in al-Hasan's gloss, flow through the hearts.",
            "bn": "দুটি প্রশ্ন একসঙ্গে চলে। পরপর আসার অর্থটা বাতাসের সঙ্গে মেলে, এক ঝাপটার পর আরেক ঝাপটা। ভালোর অর্থটা মেলে ফেরেশতা আর রাসূলদের সঙ্গে, যারা আদেশ বয়ে আনেন। মাআরিফুল কুরআন ইবন কাসীরের পাঠ অনুসরণ করে বাতাসের বেলাতেও দুটি অর্থ খোলা রাখে। উরফান মানে হতে পারে উপকারী, কারণ বৃষ্টি আনা বাতাস নিঃসন্দেহে উপকারী। আবার হতে পারে একটার পর একটা। কুরতুবী 'বলা হয়েছে' বলে আরও দুটি মত লিখে রাখেন। মুরসালাত হতে পারে মেঘ, যা রহমত আর আজাব দুটোই আনে। কিংবা সেই সতর্কবাণী আর উপদেশ, যা আসে পরপর, অথবা হাসানের ব্যাখ্যায়, বয়ে চলে অন্তরের ভেতর দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Winds, Then Angels",
          "bn": "আগে তিন বাতাস, পরে ফেরেশতা"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English text that covers 77:1 to 77:10, divides the five oaths. After setting out both camps, he says the most obvious meaning is the winds, quoting 15:22, And We send the winds fertilising, and 7:57, It is He who sends the winds as glad tidings before His mercy. The 'asifat of 77:2 are winds that roar as they blow, and the nashirat of 77:3 are winds that spread clouds across the horizons. Then for 77:4 and 77:5 he turns to the angels, and says there is no difference of opinion there.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৭৭:১ থেকে ৭৭:১০ পর্যন্ত আয়াত একসঙ্গে আলোচনা করে। সেখানে তিনি পাঁচটি শপথকে ভাগ করেন। দুই দলের মত তুলে ধরার পর তিনি বলেন, সবচেয়ে স্পষ্ট অর্থ বাতাস। প্রমাণ হিসেবে আনেন ১৫:২২, আমি বাতাস পাঠাই উর্বরকারী করে, আর ৭:৫৭, তিনিই তাঁর রহমতের আগে সুসংবাদবাহী বাতাস পাঠান। ৭৭:২ আয়াতের আসিফাত হলো সেই বাতাস যা গর্জন তুলে বয়। ৭৭:৩ আয়াতের নাশিরাত হলো সেই বাতাস যা দিগন্তজুড়ে মেঘ ছড়িয়ে দেয়। এরপর ৭৭:৪ ও ৭৭:৫ আয়াতে তিনি ফেরেশতাদের দিকে ফেরেন, আর বলেন, সেখানে কোনো মতভেদ নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an adopts this division. No traceable hadith gives the exact interpretation, it says, so the Companions and their students differed. Some attributes fit the angels and stretch to cover winds, and others fit the winds and stretch to cover angels, so it judges Ibn Kathir's approach the best. Then, granting that the wisdom of Allah's speech cannot be fathomed, it offers a hypothesis: the winds belong to the seen world and come first, and the unseen world of angels and revelation follows.",
            "bn": "মাআরিফুল কুরআন এ ভাগটাই গ্রহণ করে। তার কথায়, সঠিক ব্যাখ্যা জানিয়ে দেয় এমন কোনো সূত্রবদ্ধ হাদিস নেই, তাই সাহাবি আর তাঁদের শিষ্যদের মধ্যে মতভেদ হয়েছে। কয়েকটি গুণ ফেরেশতার সঙ্গে মেলে, বাতাসের উপর খাটাতে হলে টেনে আনতে হয়। আবার কয়েকটি মেলে বাতাসের সঙ্গে, ফেরেশতার উপর খাটাতে টানাটানি লাগে। তাই ইবন কাসীরের পথকেই সে সবচেয়ে ভালো মনে করে। আল্লাহর কালামের হিকমত পুরোপুরি বোঝা যায় না, এ কথা মেনে নিয়ে সে একটা অনুমান দেয়: বাতাস দৃশ্যমান জগতের, তাই আগে এসেছে, তারপর অদৃশ্য জগৎ, ফেরেশতা আর ওহি।"
          },
          {
            "en": "As-Sa'di reads 77:1 differently again. For him the mursalat are the angels, sent with Allah's affairs of decree and the running of the world, and with His affairs of law and His revelation to His messengers. So the commentators consulted here stand in three places: at-Tabari holds all three in the oath; Ibn Kathir and Ma'arif, like the Muyassar, read winds here and angels further on; as-Sa'di reads angels from the start. The difference is real, and this article leaves it standing.",
            "bn": "সা'দী ৭৭:১ আয়াতকে আবার ভিন্নভাবে পড়েন। তাঁর কাছে মুরসালাত হলো ফেরেশতা। আল্লাহ তাদের পাঠান তাঁর তাকদীরের কাজ আর জগৎ পরিচালনার জন্য, আবার পাঠান শরীয়তের কাজ আর রাসূলদের কাছে ওহি পৌঁছানোর জন্য। ফলে এখানে যাঁদের তাফসীর দেখা হলো, তাঁরা তিন জায়গায় দাঁড়িয়ে। তাবারী শপথে তিনটিকেই রাখেন। ইবন কাসীর আর মাআরিফ, মুয়াসসারের মতোই, এখানে পড়েন বাতাস, আর পরের আয়াতগুলোতে ফেরেশতা। সা'দী শুরু থেকেই পড়েন ফেরেশতা। মতভেদটা সত্যিকারের, আর এ লেখা সেটাকে মতভেদ হিসেবেই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Received From His Mouth",
          "bn": "তাঁর মুখ থেকে শিখে নেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with a report from al-Bukhari, and al-Bukhari's Sahih carries it as Hadith 4934. 'Abdullah ibn Mas'ud (RA) said: \"While we were with the Prophet (ﷺ) in a cave, Surat wal-Mursalat was revealed to him and he recited it, and I heard it directly from his mouth as soon as he recited its revelation. Suddenly a snake sprang at us, and the Prophet (ﷺ) said, 'Kill it!' We ran to kill it but it escaped quickly. The Prophet (ﷺ) said, 'It has escaped your evil, and you too have escaped its evil.'\"",
            "bn": "ইবন কাসীর সূরার শুরুতে বুখারীর একটি বর্ণনা আনেন। সহীহ বুখারীতে এটি ৪৯৩৪ নম্বর হাদিস। আবদুল্লাহ ইবন মাসউদ (রাঃ) বলেন: \"আমরা একটি গুহায় নবী ﷺ-এর সঙ্গে ছিলাম, তখন তাঁর উপর সূরা ওয়াল মুরসালাত নাজিল হলো। তিনি তা তিলাওয়াত করলেন, আর নাজিল হওয়া আয়াতগুলো তিনি পড়ার সঙ্গে সঙ্গেই আমি সরাসরি তাঁর মুখ থেকে তা শুনে নিলাম। হঠাৎ একটি সাপ আমাদের দিকে লাফিয়ে এল। নবী ﷺ বললেন, 'ওটাকে মেরে ফেলো!' আমরা মারতে ছুটলাম, কিন্তু সেটা দ্রুত পালিয়ে গেল। নবী ﷺ বললেন, 'সে তোমাদের অনিষ্ট থেকে বেঁচে গেল, যেমন তোমরা বেঁচে গেলে তার অনিষ্ট থেকে।'\""
          },
          {
            "en": "The Arabic has a phrase the English softens: wa inna fahu la-ratbun biha, his mouth was still moist with it. The place comes from the chain. In al-Bukhari's own text the narrator 'Umar ibn Hafs adds that he memorised from his father the words in a cave at Mina, and Ibn Kathir, quoting through the same chain, puts at Mina into the report. Ibn Kathir notes that Muslim also recorded it by way of al-A'mash. Al-Bukhari placed it in his Sahih; that is the collector's own standing for it, and nothing here goes beyond it.",
            "bn": "আরবিতে একটি কথা আছে, যা ইংরেজি অনুবাদে নরম হয়ে গেছে: ওয়া ইন্না ফাহু লারাতবুন বিহা, তাঁর মুখ তখনও এর তিলাওয়াতে ভেজা। জায়গার নামটা এসেছে সনদের ভেতর থেকে। বুখারীর নিজের পাঠে বর্ণনাকারী উমর ইবন হাফস যোগ করেন, তিনি বাবার কাছ থেকে 'মিনার একটি গুহায়' কথাটা মুখস্থ করেছিলেন। ইবন কাসীর একই সনদে উদ্ধৃত করে বর্ণনার ভেতরেই মিনার নাম রেখেছেন। তিনি এও জানান, মুসলিমও আ'মাশের সূত্রে এটি বর্ণনা করেছেন। বুখারী এটিকে তাঁর সহীহ গ্রন্থে রেখেছেন। সংকলকের নিজের দেওয়া মর্যাদা এটুকুই, আর এখানে তার বেশি কিছু দাবি করা হচ্ছে না।"
          },
          {
            "en": "Ibn Kathir also brings the report of Ibn 'Abbas (RA), carried in al-Bukhari as Hadith 763: \"(My mother) Umu-l-Fadl heard me reciting 'Wal Mursalati 'Urfan' and said, 'O my son! By Allah, your recitation made me remember that it was the last Sura I heard from Allah's Messenger (ﷺ). He recited it in the Maghrib prayer.'\" Both reports concern the surah as a whole, its revelation and its recitation. Neither explains what the mursalat are, and no sound hadith in these sources fixes that meaning, which is why the commentators differ.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর বর্ণনাও আনেন, যা বুখারীতে ৭৬৩ নম্বর হাদিস: \"(আমার মা) উম্মুল ফজল আমাকে 'ওয়াল মুরসালাতি উরফা' পড়তে শুনে বললেন, 'বাছা! আল্লাহর কসম, তোমার তিলাওয়াত আমাকে মনে করিয়ে দিল, এটাই শেষ সূরা যা আমি আল্লাহর রাসূল ﷺ-এর মুখে শুনেছি। তিনি মাগরিবের নামাজে এটি পড়েছিলেন।'\" দুটি বর্ণনাই পুরো সূরা নিয়ে, তার নাজিল হওয়া আর তিলাওয়াত নিয়ে। মুরসালাত কারা, তা কোনোটিই ব্যাখ্যা করে না। এখানকার উৎসগুলোতে এমন কোনো সহীহ হাদিস নেই যা সেই অর্থ ঠিক করে দেয়, আর এ কারণেই মুফাসসিরদের মধ্যে মতভেদ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Five Oaths Land",
          "bn": "পাঁচ শপথ যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "77:1 is the first link in a chain. The five descriptions run from 77:1 to 77:5, then 77:6 gives their purpose, 'udhran aw nudhran, as an excuse or a warning, and 77:7 gives the answer: what you are promised will surely occur. Ibn Kathir calls 77:7 the subject of these oaths, and spells out the promise: the Hour, the blowing of the horn, the raising of bodies, the gathering of the first and the last on one plain, and every doer repaid for his deed, good for good and evil for evil.",
            "bn": "৭৭:১ একটি শিকলের প্রথম কড়া। পাঁচটি গুণ চলে ৭৭:১ থেকে ৭৭:৫ পর্যন্ত। তারপর ৭৭:৬ বলে তাদের উদ্দেশ্য, উযরান আও নুযরান, ওজর মিটিয়ে দেওয়া অথবা সতর্ক করা। আর ৭৭:৭ দেয় জবাব: তোমাদের যার ওয়াদা দেওয়া হয়েছে, তা ঘটবেই। ইবন কাসীর ৭৭:৭ আয়াতকে বলেন এই শপথগুলোর মূল বিষয়। প্রতিশ্রুতিটা তিনি খুলে বলেন: কিয়ামত, শিঙায় ফুঁ, দেহগুলোর পুনরুত্থান, আগের ও পরের সবাইকে এক ময়দানে জড়ো করা, আর প্রত্যেককে তার আমলের প্রতিদান দেওয়া। ভালোর বদলে ভালো, মন্দের বদলে মন্দ।"
          },
          {
            "en": "The Muyassar names the reason for the whole sending: an excuse and a warning from Allah to His creation, so that they have no argument left. Whatever the mursalat are, they arrive before the promise does, so that nobody meets the Day unwarned. The verses after 77:7 describe that Day and have their own pages; here it is enough to see that the opening oath and its answer belong together.",
            "bn": "পুরো পাঠানোর কারণ মুয়াসসার বলে দেয়: সৃষ্টির প্রতি আল্লাহর পক্ষ থেকে ওজর মিটিয়ে দেওয়া আর সতর্ক করা, যাতে তাদের হাতে কোনো যুক্তি না থাকে। মুরসালাত যা-ই হোক, প্রতিশ্রুত দিনের আগেই তারা এসে পৌঁছায়, যাতে কেউ সতর্কবাণী না পেয়ে সেদিনের মুখোমুখি না হয়। ৭৭:৭ আয়াতের পরের আয়াতগুলো সেই দিনের বর্ণনা দেয়, আর সেগুলোর আলোচনা আলাদা। এখানে এটুকু দেখাই যথেষ্ট যে শুরুর শপথ আর তার জবাব একসঙ্গে বাঁধা।"
          }
        ]
      },
      {
        "h": {
          "en": "Everything That Reaches You Was Sent",
          "bn": "যা পৌঁছায়, সবই পাঠানো"
        },
        "p": [
          {
            "en": "Whichever reading a reader follows, the verse fixes attention on being sent. Winds do not wander in, angels do not come of their own accord, and prophets do not appoint themselves. At-Tabari's verdict that everything so sent falls within the oath lets the verse reach the reader's own day: the wind that turns the weather, the verse heard in prayer, a friend's reminder. Each was sent for something, and as-Sa'di's gloss on 'urfan names what it was not sent with: evil or idle purpose.",
            "bn": "পাঠক যে ব্যাখ্যাই মানুন, আয়াতটি নজর টেনে আনে পাঠানোর দিকে। বাতাস পথ ভুলে আসে না, ফেরেশতারা নিজের ইচ্ছায় নামেন না, নবীরাও নিজেদের নিযুক্ত করেন না। তাবারীর রায় হলো, এভাবে পাঠানো সবকিছুই শপথের ভেতরে পড়ে। এই রায় আয়াতটিকে পাঠকের নিজের দিন পর্যন্ত নিয়ে আসে: যে বাতাস আবহাওয়া বদলে দেয়, নামাজে শোনা কোনো আয়াত, বন্ধুর মুখের একটি উপদেশ। প্রতিটিই কোনো উদ্দেশ্যে পাঠানো। আর উরফানের ব্যাখ্যায় সা'দী বলে দেন, কোনোটিই মন্দ বা অনর্থক উদ্দেশ্যে পাঠানো হয়নি।"
          },
          {
            "en": "Ma'arif al-Qur'an's hypothesis suggests a way to read. Begin with the seen: the wind on your face, the clouds it brings, the rain that follows. Let that lead to the unseen, the angels and the revelation whose arrival cannot be watched. Then hold both against 77:7. The Lord who sends the wind in succession has made a promise, and the oath says it will surely occur. The question left is whether we treat what reaches us as sent, and live as people expecting that Day.",
            "bn": "মাআরিফুল কুরআনের অনুমানটি আয়াত পড়ার একটা পথ দেখায়। শুরু করুন দৃশ্যমান থেকে: মুখে লাগা বাতাস, তার বয়ে আনা মেঘ, তারপরের বৃষ্টি। সেখান থেকে যান অদৃশ্যের দিকে, ফেরেশতা আর ওহি, যাদের আসা চোখে দেখা যায় না। তারপর দুটিকেই মিলিয়ে দেখুন ৭৭:৭ আয়াতের সঙ্গে। যে রব পরপর বাতাস পাঠান, তিনিই একটি ওয়াদা দিয়েছেন, আর শপথটি বলছে সেই ওয়াদা অবশ্যই পূর্ণ হবে। প্রশ্ন রয়ে যায়: যা আমাদের কাছে পৌঁছায় তাকে কি আমরা পাঠানো বলে চিনি, আর সেই দিনের অপেক্ষায় থাকা মানুষের মতো বাঁচি?"
          }
        ]
      }
    ]
  },
  "77:5": {
    "sections": [
      {
        "h": {
          "en": "Those Who Cast a Reminder",
          "bn": "যারা যিকর পৌঁছে দেয়"
        },
        "p": [
          {
            "en": "Fa-l-mulqiyati dhikra: then by those who cast down a reminder. Two Arabic words, and they close a run of five. Like the four before it, the first word is a feminine plural participle with no noun beside it: al-mulqiyat, those that cast, from alqa, to throw down or to deliver. The second word, dhikran, names what is cast. At-Tabari glosses the participle as al-muballighat, those that convey, and says that what they convey is Allah's revelation to His messengers.",
            "bn": "ফাল-মুলকিয়াতি যিকরা: অতঃপর শপথ তাদের, যারা যিকর নামিয়ে দেয়। আরবিতে দুটি শব্দ, আর এ দুটি দিয়েই পাঁচ শপথের সারি শেষ হয়। আগের চারটির মতো প্রথম শব্দটিও স্ত্রীলিঙ্গ বহুবচনের কর্তৃবাচক রূপ, পাশে কোনো বিশেষ্য নেই। আল-মুলকিয়াত মানে যারা ফেলে বা পৌঁছে দেয়, এসেছে আলকা থেকে, যার অর্থ নিচে ছুঁড়ে দেওয়া বা হাতে তুলে দেওয়া। দ্বিতীয় শব্দ যিকরান বলে দেয় কী পৌঁছানো হচ্ছে। তাবারী শব্দটির ব্যাখ্যা দেন আল-মুবাল্লিগাত দিয়ে, অর্থাৎ যারা পৌঁছে দেয়। আর যা তারা পৌঁছায়, তা আল্লাহর ওহি, তাঁর রাসূলদের কাছে।"
          },
          {
            "en": "The opening fa joins the verse to the one before it, as it joins 77:2 to 77:1 and 77:4 to 77:3, so the five descriptions run on without a pause. Then 77:6 says why the reminder is cast, 'udhran aw nudhra, as an excuse or a warning, and 77:7 gives the sentence the oaths were sworn for: what you are promised will surely occur. The page on 77:1 follows the oath through to that answer. This page stays with the fifth link, the one that names the reminder itself.",
            "bn": "শুরুর ফা আয়াতটিকে আগের আয়াতের সঙ্গে জুড়ে দেয়, যেমন জুড়েছে ৭৭:২-কে ৭৭:১-এর সঙ্গে আর ৭৭:৪-কে ৭৭:৩-এর সঙ্গে। তাই পাঁচটি বিবরণ একটানা চলে, মাঝে থামে না। এরপর ৭৭:৬ জানায় যিকর কেন পৌঁছানো হয়: উযরান আও নুযরা, ওজর শেষ করতে অথবা সতর্ক করতে। আর ৭৭:৭ আয়াতে আসে সেই বাক্য, যার জন্য এত শপথ: তোমাদের যে ওয়াদা দেওয়া হয়েছে, তা অবশ্যই ঘটবে। ৭৭:১ আয়াতের পাতা শপথটিকে সেই জবাব পর্যন্ত অনুসরণ করেছে। এ পাতা থাকবে পঞ্চম কড়িটির কাছে, যেখানে যিকরের নাম এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Disputed, One Settled",
          "bn": "চারটিতে মতভেদ, একটিতে মীমাংসা"
        },
        "p": [
          {
            "en": "Who the first four are is disputed, and the page for 77:1 sets the dispute out. In brief: Ibn Kathir, in the abridged English text covering 77:1 to 77:10, reports Ibn Mas'ud (RA), Ibn 'Abbas (RA), Mujahid and Qatadah reading the first three as winds, and Abu Hurayrah (RA), Masruq and others reading the mursalat as angels. Abu Salih is reported once as saying they are messengers. Ibn Kathir himself judges the first three to be winds, citing 15:22 and 7:57, and turns to the angels at 77:4.",
            "bn": "প্রথম চারটি কারা, তা নিয়ে মতভেদ আছে, আর ৭৭:১ আয়াতের পাতায় সে আলোচনা বিস্তারিত এসেছে। সংক্ষেপে বলা যায়: ইবন কাসীর তাঁর সংক্ষিপ্ত ইংরেজি পাঠে, যা ৭৭:১ থেকে ৭৭:১০ পর্যন্ত জুড়ে আছে, জানান যে ইবন মাসঊদ (রাঃ), ইবন আব্বাস (রাঃ), মুজাহিদ ও কাতাদা প্রথম তিনটিকে বাতাস বলেছেন। আবূ হুরায়রা (রাঃ), মাসরূক ও আরও কয়েকজন মুরসালাতকে বলেছেন ফেরেশতা। আবু সালিহ থেকে একটি বর্ণনায় এসেছে, এরা রাসূল। ইবন কাসীর নিজে প্রথম তিনটিকে বাতাস ধরেন, দলিল দেন ১৫:২২ ও ৭:৫৭ আয়াত থেকে, আর ৭৭:৪ থেকে ফেরেশতার দিকে যান।"
          },
          {
            "en": "Ma'arif al-Qur'an, on 77:1 to 77:5, lists the range: some say all five attributes are angels, some that different groups of angels bear them, some that they are kinds of winds, and some that they are the prophets and messengers. It adopts Ibn Kathir's division as the reading that needs the least stretching. The Muyassar, which treats 77:2 to 77:7 together, reads two winds and then three companies of angels: those who drive the clouds, those who bring what separates truth from falsehood, and those who receive the revelation and bring it down.",
            "bn": "মাআরিফুল কুরআন ৭৭:১ থেকে ৭৭:৫ আয়াতের আলোচনায় মতগুলো গুনে দেখায়। কেউ বলেন পাঁচটি গুণই ফেরেশতাদের, কেউ বলেন ফেরেশতাদের ভিন্ন ভিন্ন দল এগুলোর ধারক। কারও মতে এগুলো নানা ধরনের বাতাস, আর কারও মতে নবী ও রাসূলগণ। মাআরিফ শেষে ইবন কাসীরের ভাগটাই গ্রহণ করে, কারণ এতে টেনেটুনে অর্থ মেলাতে হয় সবচেয়ে কম। মুয়াসসার ৭৭:২ থেকে ৭৭:৭ একসঙ্গে ব্যাখ্যা করে। তার পাঠে প্রথমে দুই রকম বাতাস, তারপর ফেরেশতাদের তিনটি দল: যারা মেঘ হাঁকিয়ে নেয়, যারা হক ও বাতিলের মধ্যে পার্থক্য করার বাণী নিয়ে নামে, আর যারা ওহি গ্রহণ করে তা নিয়ে নেমে আসে।"
          },
          {
            "en": "So the first four descriptions are contested in more than one direction; the fifth very nearly is not. Every commentator consulted for this verse names the angels, and the one dissent on record comes through al-Qurtubi, with a name attached. What remains is a difference of emphasis: what the angels do with the reminder, and what the reminder is.",
            "bn": "অর্থাৎ প্রথম চারটি বিবরণ নিয়ে টানাটানি একাধিক দিকে, পঞ্চমটি নিয়ে প্রায় কোনো মতভেদ নেই। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, সবগুলোই ফেরেশতার কথা বলে। একমাত্র ভিন্নমতটি আসে কুরতুবীর মাধ্যমে, একজনের নাম সহ। বাকি যা থাকে, তা জোরের তফাত: যিকর নিয়ে ফেরেশতারা কী করে, আর যিকর জিনিসটা কী।"
          }
        ]
      },
      {
        "h": {
          "en": "No Disagreement Here",
          "bn": "এখানে কোনো মতভেদ নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir's Arabic text on this verse is a single sentence, and it is worth reading whole. It means the angels, he says, and he names those who said so: Ibn Mas'ud, Ibn 'Abbas, Masruq, Mujahid, Qatadah, ar-Rabi' ibn Anas, as-Suddi and ath-Thawri. Then: there is no disagreement here, for they descend by Allah's command upon the messengers and cast revelation to them. Ibn Mas'ud (RA), reported in the same tafsir as reading the opening oaths as winds, is the first name on this list.",
            "bn": "এ আয়াতে ইবন কাসীরের আরবি পাঠ মাত্র এক বাক্যের, আর পুরোটাই পড়ার মতো। তিনি বলেন, এর অর্থ ফেরেশতা। কারা এ কথা বলেছেন, তাও জানান: ইবন মাসঊদ, ইবন আব্বাস, মাসরূক, মুজাহিদ, কাতাদা, রাবী ইবন আনাস, সুদ্দী ও সাওরী। তারপর বলেন: এখানে কোনো মতভেদ নেই। কারণ ফেরেশতারাই আল্লাহর আদেশে রাসূলদের কাছে নেমে আসে এবং তাঁদের কাছে ওহি পৌঁছে দেয়। লক্ষ করার মতো বিষয়, ইবন মাসঊদ (রাঃ) এই তালিকার প্রথম নাম। অথচ একই তাফসীরে তাঁর থেকেই বর্ণিত হয়েছে যে শুরুর শপথগুলো বাতাসের।"
          },
          {
            "en": "Ma'arif al-Qur'an describes at-Tabari as declining to side with either reading of the opening oaths. On this verse he names one party without hesitation. Fa-l-mulqiyati dhikra, he says, means those that convey Allah's revelation to His messengers, and they are the angels; the people of interpretation said the same. He gives four reports. From Ibn 'Abbas (RA): the angels. From Qatadah, by two routes: the angels who cast the reminder to the messengers and convey it, and, in the other, the angels cast the Qur'an. From Sufyan: the angels.",
            "bn": "মাআরিফুল কুরআনের বর্ণনায় তাবারী শুরুর শপথগুলোর ব্যাপারে কোনো একটি পাঠের পক্ষ নেননি। কিন্তু এ আয়াতে তিনি দ্বিধা ছাড়াই একটি পক্ষের নাম বলেন। তাঁর ব্যাখ্যায় ফাল-মুলকিয়াতি যিকরা মানে যারা আল্লাহর ওহি তাঁর রাসূলদের কাছে পৌঁছে দেয়, আর তারা ফেরেশতা। তিনি জানান, তাফসীরবিদরাও এ কথাই বলেছেন। এর পক্ষে তিনি চারটি বর্ণনা আনেন। ইবন আব্বাস (রাঃ) থেকে: ফেরেশতারা। কাতাদা থেকে দুই সূত্রে: একটিতে, ফেরেশতারা রাসূলদের কাছে যিকর পৌঁছে দেয় ও প্রচার করে; অন্যটিতে, ফেরেশতারা কুরআন পৌঁছে দেয়। সুফইয়ান থেকে: ফেরেশতারা।"
          },
          {
            "en": "As-Sa'di and al-Baghawi agree in a line each: the angels, casting the reminder to the messengers, or in al-Baghawi's word, to the prophets. Al-Baghawi adds a parallel from the Qur'an, 40:15, yulqi ar-ruha min amrihi, He casts the spirit by His command. The verb is the same one. In 40:15 Allah is its subject, and the verse goes on, upon whom He wills of His servants, to warn of the Day of Meeting. In 77:5 the angels carry out the casting, and 77:6 names the same purpose: a warning.",
            "bn": "সা'দী আর বাগাভী এক লাইনেই একমত: এরা ফেরেশতা, যারা রাসূলদের কাছে যিকর পৌঁছে দেয়, বাগাভীর ভাষায় নবীদের কাছে। বাগাভী কুরআন থেকে একটি মিল দেখান, ৪০:১৫ আয়াত: ইউলকির রূহা মিন আমরিহী, তিনি নিজ আদেশে রূহ নাজিল করেন। ক্রিয়াটি একই। ৪০:১৫ আয়াতে কর্তা আল্লাহ নিজে, আর আয়াতটি এগিয়ে যায়: তাঁর বান্দাদের মধ্যে যার উপর তিনি চান, যাতে সে সাক্ষাতের দিন সম্পর্কে সতর্ক করে। ৭৭:৫ আয়াতে পৌঁছে দেওয়ার কাজটি করে ফেরেশতারা। আর ৭৭:৬ আয়াতও একই উদ্দেশ্যের নাম নেয়: সতর্ক করা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Consensus and Two Asides",
          "bn": "ইজমা, আর পাশে দুটি কথা"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens with the strongest word available. The mulqiyat are the angels bi-ijma', by consensus, casting the books of Allah to the prophets, and he credits that wording to al-Mahdawi. Then, in the manner of his tafsir, he records what else has been said. One view, introduced with it was said, is that Jibril alone is meant, called by a plural because he was the one who brought the revelation down. That does not leave the angels reading; it narrows the group to a single angel.",
            "bn": "কুরতুবী শুরু করেন সবচেয়ে জোরালো শব্দ দিয়ে। মুলকিয়াত হলো ফেরেশতা, বিল-ইজমা, অর্থাৎ সর্বসম্মতভাবে। তারা আল্লাহর কিতাবসমূহ নবীদের কাছে পৌঁছে দেয়, আর এ ভাষ্য তিনি মাহদাভীর বলে উল্লেখ করেন। তারপর নিজের তাফসীরের ধারা মেনে আর কী কী বলা হয়েছে, তা লিখে রাখেন। 'বলা হয়েছে' দিয়ে আনা একটি মত হলো, এখানে শুধু জিবরীলকে বোঝানো হয়েছে। বহুবচনে তাঁর নাম এসেছে, কারণ ওহি নিয়ে তিনিই নামতেন। এ মত ফেরেশতার ব্যাখ্যা থেকে সরে যায় না, দলটিকে শুধু একজন ফেরেশতায় এনে ঠেকায়।"
          },
          {
            "en": "The second aside is a real dissent. It was said, al-Qurtubi continues, that the messengers are meant, who cast to their nations what Allah sent down to them, and he names who held it: Qutrub. On this reading the casting happens one step further down, from messenger to people. Al-Qurtubi does not explain how a named dissent sits beside the word consensus, and this page does not try to settle it. The consensus is his claim and Qutrub's view is his report; both stand as he gives them.",
            "bn": "দ্বিতীয় কথাটি সত্যিকারের ভিন্নমত। কুরতুবী লেখেন, বলা হয়েছে এখানে রাসূলদের বোঝানো হয়েছে, যারা আল্লাহর নাজিল করা বাণী নিজ নিজ উম্মতের কাছে পৌঁছে দেন। মতটি কার, তাও তিনি জানান: কুতরুবের। এ পাঠে পৌঁছে দেওয়ার কাজটা ঘটে এক ধাপ নিচে, রাসূল থেকে মানুষের কাছে। সর্বসম্মতির কথা বলার পর নাম সহ একটি ভিন্নমত কীভাবে পাশাপাশি থাকে, কুরতুবী তা ব্যাখ্যা করেননি। এ পাতাও তার মীমাংসা করতে যাবে না। ইজমার দাবি তাঁর নিজের, আর কুতরুবের মত তাঁর বর্ণনা। দুটোই থাকুক যেভাবে তিনি রেখেছেন।"
          },
          {
            "en": "Al-Qurtubi also records a variant reading from Ibn 'Abbas (RA), with the qaf given a fatha and doubled. He offers no gloss, only a parallel, 27:6, wa innaka la-tulaqqa al-Qur'an, and indeed you receive the Qur'an. The parallel points from casting towards receiving. The Muyassar, without mentioning any variant, describes the angels of this verse in just those terms: those who receive the revelation from Allah and bring it down to His prophets. Receiving and delivering are the two halves of one errand.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ)-এর একটি ভিন্ন কিরাআতও উল্লেখ করেন, যেখানে কাফ বর্ণে যবর ও তাশদীদ। তিনি কোনো ব্যাখ্যা দেন না, শুধু মিলিয়ে দেখান ২৭:৬ আয়াতের সঙ্গে: ওয়া ইন্নাকা লাতুলাক্কাল কুরআন, নিশ্চয়ই আপনি কুরআন গ্রহণ করছেন। এই মিল ইঙ্গিত দেয়, অর্থটা পৌঁছে দেওয়া থেকে গ্রহণ করার দিকে সরে যায়। মুয়াসসার কোনো কিরাআতের উল্লেখ না করেই এ আয়াতের ফেরেশতাদের বর্ণনা দেয় ঠিক সেভাবে: যারা আল্লাহর কাছ থেকে ওহি গ্রহণ করে আর তা নিয়ে তাঁর নবীদের কাছে নেমে আসে। গ্রহণ আর পৌঁছানো একই দায়িত্বের দুই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Revelation, Qur'an, or Books",
          "bn": "ওহি, কুরআন, নাকি কিতাবসমূহ"
        },
        "p": [
          {
            "en": "The second word is dhikran, a reminder, and the commentators consulted give it different widths. At-Tabari's gloss makes it revelation in general, Allah's wahy to His messengers. Qatadah, in the second report at-Tabari gives, makes it the Qur'an. Ma'arif al-Qur'an keeps both: dhikr, it says, refers to the Qur'an or to revelation in general. Al-Qurtubi, through al-Mahdawi, speaks of the books of Allah, in the plural, cast to the prophets. The word in the verse is indefinite, and the readings do not compete: each names a reminder.",
            "bn": "দ্বিতীয় শব্দ যিকরান, অর্থাৎ উপদেশ বা স্মরণ করিয়ে দেওয়ার বাণী। যে তাফসীরগুলো দেখা হয়েছে, সেগুলো শব্দটিকে ভিন্ন ভিন্ন পরিসরে বোঝে। তাবারীর ব্যাখ্যায় এ হলো সাধারণভাবে ওহি, রাসূলদের প্রতি আল্লাহর প্রত্যাদেশ। তাবারীর আনা দ্বিতীয় বর্ণনায় কাতাদা একে বলেন কুরআন। মাআরিফুল কুরআন দুটোই রাখে: যিকর মানে কুরআন, অথবা সাধারণভাবে ওহি। কুরতুবী মাহদাভীর সূত্রে বলেন আল্লাহর কিতাবসমূহের কথা, বহুবচনে, যা নবীদের কাছে পৌঁছানো হয়। আয়াতের শব্দটি অনির্দিষ্ট। তাই এ পাঠগুলো পরস্পরের প্রতিদ্বন্দ্বী নয়, প্রতিটিই কোনো না কোনো যিকরের নাম।"
          },
          {
            "en": "As-Sa'di describes what the reminder contains rather than what form it takes. The angels, he says, cast the noblest of commands, and that is the dhikr by which Allah shows mercy to His servants, reminding them in it of what benefits them and what sets their affairs right. In his reading the reminder is first of all a mercy. His verb for what it does, yudhakkiruhum, he reminds them, is from the same root as dhikr. The revelation brings the servant back to what is good for him.",
            "bn": "সা'দী যিকরের রূপ নয়, তার ভেতরের কথা বলেন। তাঁর মতে ফেরেশতারা পৌঁছে দেয় সবচেয়ে মর্যাদাপূর্ণ আদেশ। সেটিই যিকর, যার মাধ্যমে আল্লাহ তাঁর বান্দাদের প্রতি রহমত করেন। এতে তিনি তাদের মনে করিয়ে দেন কোনটা তাদের উপকারে আসে, কোনটা তাদের জীবন ঠিকঠাক রাখে। সা'দীর পাঠে যিকর সবার আগে রহমত। যিকর কী করে, তা বোঝাতে তিনি যে ক্রিয়া ব্যবহার করেন, ইউযাক্কিরুহুম, অর্থাৎ তিনি তাদের মনে করিয়ে দেন, সেটি যিকরেরই ধাতু থেকে। ওহি বান্দাকে ফিরিয়ে আনে তার নিজের কল্যাণের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angel in a Man's Form",
          "bn": "মানুষের রূপ ধরে আসা ফেরেশতা"
        },
        "p": [
          {
            "en": "No commentator consulted attaches a hadith to this verse, and Ma'arif al-Qur'an notes that no traceable hadith fixes the meaning of these five descriptions. The report of the surah coming down in a cave at Mina is given on the page for 77:1 and is not repeated here. One sound narration, attached to this verse by none of these commentators, does describe the delivery the verse speaks of, told from the side of the one who received it.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। মাআরিফুল কুরআন জানায়, এই পাঁচ বিবরণের অর্থ নির্দিষ্ট করে দেয় এমন কোনো সূত্রযুক্ত হাদীস নেই। মিনার একটি গুহায় সূরাটি নাজিল হওয়ার বর্ণনা ৭৭:১ আয়াতের পাতায় এসেছে, এখানে আর তা দোহরানো হলো না। তবে একটি সহীহ বর্ণনা আছে, যা এ তাফসীরকারদের কেউ এ আয়াতের সঙ্গে যুক্ত করেননি। সেটি এই আয়াতে বলা পৌঁছে দেওয়ার কাজটিকেই বর্ণনা করে, যিনি গ্রহণ করতেন তাঁর দিক থেকে।"
          },
          {
            "en": "In al-Bukhari's Sahih, Hadith 2, it reads: Narrated 'Aisha: (the mother of the faithful believers) Al-Harith bin Hisham asked Allah's Messenger (ﷺ) \"O Allah's Messenger (ﷺ)! How is the Divine Inspiration revealed to you?\" Allah's Messenger (ﷺ) replied, \"Sometimes it is (revealed) like the ringing of a bell, this form of Inspiration is the hardest of all and then this state passes off after I have grasped what is inspired. Sometimes the Angel comes in the form of a man and talks to me and I grasp whatever he says.\"",
            "bn": "সহীহ বুখারীর ২ নম্বর হাদীসে এসেছে: উম্মুল মুমিনীন আয়েশা (রাঃ) বর্ণনা করেন, হারিস ইবন হিশাম (রাঃ) রাসূলুল্লাহ ﷺ-কে জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, আপনার কাছে ওহি কীভাবে আসে? রাসূলুল্লাহ ﷺ বললেন: কখনো তা আসে ঘণ্টার ঝনঝন ধ্বনির মতো, আর এটাই আমার জন্য সবচেয়ে কঠিন। তারপর সে অবস্থা কেটে যায়, ততক্ষণে তিনি যা বলেছেন তা আমি আত্মস্থ করে নিই। আর কখনো ফেরেশতা মানুষের রূপ ধরে আমার সামনে আসেন, আমার সঙ্গে কথা বলেন, আর তিনি যা বলেন আমি তা আত্মস্থ করি।"
          },
          {
            "en": "The report goes on: 'Aisha added: Verily I saw the Prophet (ﷺ) being inspired divinely on a very cold day and noticed the sweat dropping from his forehead (as the Inspiration was over). The hadith speaks of revelation to the Prophet ﷺ in general and does not mention this verse; it is quoted to show what the verse's two words carry. Al-Bukhari placed it in his Sahih, and that is the collector's own standing for it.",
            "bn": "বর্ণনাটি আরও বলে: আয়েশা (রাঃ) বলেন, আমি প্রচণ্ড শীতের দিনেও তাঁর উপর ওহি নাজিল হতে দেখেছি। ওহি শেষ হলে দেখতাম তাঁর কপাল থেকে ঘাম ঝরছে। হাদীসটি সাধারণভাবে নবী ﷺ-এর কাছে ওহি আসার কথা বলে, এ আয়াতের উল্লেখ এতে নেই। এখানে আনা হয়েছে শুধু এটুকু দেখাতে যে আয়াতের দুটি শব্দের ভেতরে কী আছে। ইমাম বুখারী হাদীসটি তাঁর সহীহ গ্রন্থে রেখেছেন। সংকলকের নিজের দেওয়া মর্যাদা এটুকুই।"
          },
          {
            "en": "Set beside the verse, the hadith fills in what the commentators summarise. Sometimes the reminder came as a sound so heavy that it passed only once its words were taken in; sometimes the angel spoke as a man and the Prophet ﷺ grasped what he said. Either way it arrived whole, at a cost the body showed: the casting of 77:5, seen from the receiving end.",
            "bn": "আয়াতের পাশে রাখলে তাফসীরকারেরা যা সংক্ষেপে বলেছেন, হাদীসটি তা ভরাট করে দেয়। কখনো যিকর আসত এমন ভারী ধ্বনিতে, যা কেটে যেত কেবল কথাগুলো আত্মস্থ হওয়ার পর। কখনো ফেরেশতা মানুষের রূপে কথা বলতেন, আর নবী ﷺ তাঁর কথা আত্মস্থ করতেন। দুই অবস্থাতেই যিকর পৌঁছাত পুরোপুরি, আর তার ভার দেখা যেত শরীরে। গ্রহণকারীর দিক থেকে দেখলে ৭৭:৫ আয়াতের পৌঁছে দেওয়া এমনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Cast as Excuse or Warning",
          "bn": "ওজর শেষ করতে, নয়তো সতর্ক করতে"
        },
        "p": [
          {
            "en": "77:6 finishes the thought: 'udhran aw nudhra. At-Tabari reads it straight on from 77:5: those who cast a reminder to the messengers, as an excuse from Allah to His creation and a warning from Him to them. Al-Qurtubi lists, among the grammatical options, that the two words may stand in apposition to dhikran, so that the reminder itself is the excuse or the warning. As-Sa'di explains both halves: it warns people of the fears that lie ahead of them and cuts off their excuse, so they have no argument against Allah.",
            "bn": "৭৭:৬ আয়াতে কথাটি পূর্ণ হয়: উযরান আও নুযরা। তাবারী একে পড়েন ৭৭:৫ আয়াতের সঙ্গে টানা: যারা রাসূলদের কাছে যিকর পৌঁছে দেয়, সৃষ্টির প্রতি আল্লাহর পক্ষ থেকে ওজর শেষ করে দিতে এবং তাঁর পক্ষ থেকে তাদের সতর্ক করতে। কুরতুবী ব্যাকরণের সম্ভাব্য দিকগুলোর মধ্যে উল্লেখ করেন, শব্দ দুটি যিকরান-এর বদল হতে পারে। তখন যিকর নিজেই ওজর শেষ করার বাণী, অথবা সতর্কবাণী। সা'দী দুটো দিকই খুলে বলেন: সামনে যে ভয়ের বিষয়গুলো আছে, যিকর মানুষকে সে সম্পর্কে সতর্ক করে আর তাদের অজুহাতের পথ বন্ধ করে দেয়। ফলে আল্লাহর বিরুদ্ধে তাদের কোনো যুক্তি থাকে না।"
          },
          {
            "en": "Who each half is for, the early authorities put differently. Qatadah, in both at-Tabari and al-Qurtubi, says: an excuse for Allah to His creation, and a warning for the believers, who benefit from it and take it up. Al-Qurtubi also brings Ibn 'Abbas (RA), through ad-Dahhak, reading 'udhr as what Allah casts of the excuses of His friends, which is repentance, and nudhr as the warning to His enemies. From Abu Salih he reports that the messengers are meant, who excuse and warn.",
            "bn": "কোন অংশ কার জন্য, এ নিয়ে পূর্বসূরিদের কথা ভিন্ন। তাবারী ও কুরতুবী দুজনের কাছেই কাতাদার কথা আছে: সৃষ্টির প্রতি আল্লাহর ওজর শেষ করা, আর মুমিনদের জন্য সতর্কবাণী, যারা তা থেকে উপকার নেয় ও তা আঁকড়ে ধরে। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ)-এর ব্যাখ্যাও আনেন। তাঁর মতে উযর হলো আল্লাহ তাঁর বন্ধুদের যে ওজর দান করেন, আর সেটি হলো তওবা। আর নুযর হলো তাঁর শত্রুদের প্রতি সতর্কবাণী। আবু সালিহ থেকে কুরতুবী বর্ণনা করেন, এখানে রাসূলদের বোঝানো হয়েছে, যারা ওজর শেষ করেন ও সতর্ক করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Delivered the Whole Way",
          "bn": "পুরো পথ পেরিয়ে পৌঁছেছে"
        },
        "p": [
          {
            "en": "Read together, the commentators describe a chain of handing on. In the Muyassar the angels receive the revelation from Allah and bring it down; in at-Tabari they convey it to the messengers; in Ibn Kathir they descend by His command and cast it; in Qutrub's view the messengers cast it on to their nations. Each link is someone sent, carrying what is not his own. By the time a verse is recited in a mosque near you, or read from a printed copy, the reminder has come the whole way.",
            "bn": "সব তাফসীর একসঙ্গে পড়লে হাতবদলের একটি ধারা চোখে পড়ে। মুয়াসসারে ফেরেশতারা আল্লাহর কাছ থেকে ওহি গ্রহণ করে তা নিয়ে নামে। তাবারীতে তারা তা রাসূলদের কাছে পৌঁছে দেয়। ইবন কাসীরে তারা আল্লাহর আদেশে নেমে এসে তা পৌঁছায়। আর কুতরুবের মতে রাসূলরা তা পৌঁছে দেন নিজ নিজ উম্মতের কাছে। প্রতিটি কড়িই কারও পাঠানো, আর বহন করে এমন কিছু যা তার নিজের নয়। আপনার কাছের মসজিদে যখন একটি আয়াত তিলাওয়াত হয়, বা ছাপা মুসহাফ থেকে পড়া হয়, ততক্ষণে যিকর পুরো পথ পেরিয়ে এসেছে।"
          },
          {
            "en": "That is why 77:6 follows so closely. As-Sa'di says the reminder cuts off excuses, and the Muyassar says it is sent so that people have no argument left. The verse does not ask anyone to go and fetch the reminder; others have carried it. Only the receiving is left. Ibn 'Abbas's reading keeps the gentler half in view as well: for Allah's friends, the excuse He gives is repentance. Then 77:7 names what the reminder is about, a promise that will surely occur.",
            "bn": "এ কারণেই ৭৭:৬ আয়াত এত কাছাকাছি আসে। সা'দী বলেন, যিকর অজুহাতের পথ বন্ধ করে দেয়। মুয়াসসার বলে, যিকর পাঠানো হয় যাতে মানুষের হাতে আর কোনো যুক্তি না থাকে। আয়াতটি কাউকে যিকর খুঁজে আনতে বলে না, অন্যরা তা বয়ে এনেছে। বাকি আছে শুধু গ্রহণ করা। ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা কোমল দিকটিও সামনে রাখে: আল্লাহর বন্ধুদের জন্য তাঁর দেওয়া ওজর হলো তওবা। তারপর ৭৭:৭ আয়াত বলে দেয় যিকরের বিষয় কী: এমন এক ওয়াদা, যা অবশ্যই ঘটবে।"
          }
        ]
      }
    ]
  },
  "77:8": {
    "sections": [
      {
        "h": {
          "en": "A Sign Instead of a Date",
          "bn": "তারিখের বদলে আলামত"
        },
        "p": [
          {
            "en": "Fa-idha an-nujumu tumisat: so when the stars are effaced. Three Arabic words, and they come straight after the sentence for which the opening oaths of the surah were sworn. Ibn Kathir names 77:7, innama tu'aduna la-waqi', what you are promised will surely occur, as the subject of those oaths, and Ma'arif al-Qur'an says the same. The promise has been made and sworn to. The next question any listener would ask is when, and 77:8 is where the surah begins to answer it.",
            "bn": "ফা ইযান নুজূমু তুমিসাত: অতঃপর যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে। আরবিতে মাত্র তিনটি শব্দ। এগুলো আসে ঠিক সেই বাক্যের পরে, যার জন্য সূরার শুরুর শপথগুলো করা হয়েছে। ইবন কাসীর বলেন, ৭৭:৭ আয়াতই ওই শপথগুলোর বিষয়: ইন্নামা তূআদূনা লাওয়াকি', তোমাদের যার ওয়াদা দেওয়া হয়েছে তা অবশ্যই ঘটবে। মাআরিফুল কুরআনও একই কথা বলে। ওয়াদা দেওয়া হয়ে গেছে, শপথ করে পাকা করাও হয়েছে। এরপর যে কোনো শ্রোতার মনে প্রশ্ন জাগে: কবে? ৭৭:৮ আয়াত থেকেই সূরা সেই প্রশ্নের জবাব দিতে শুরু করে।"
          },
          {
            "en": "Al-Qurtubi reads the link in just this way. His comment opens: then He made clear the time of its occurrence, and said, so when the stars are effaced. The fa that begins the verse carries the listener forward from the promise to its moment. Notice what kind of answer it is. No year is named and no count of days is given. The time is fixed by an event, and by an event that no human hand can bring about or hold back. The listener is told not the date of the Day but how it will be recognised.",
            "bn": "কুরতুবী সংযোগটা ঠিক এভাবেই পড়েন। তাঁর ব্যাখ্যা শুরু হয় এ কথায়: তারপর তিনি তা ঘটার সময় স্পষ্ট করলেন এবং বললেন, অতঃপর যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে। আয়াতের শুরুর 'ফা' শ্রোতাকে ওয়াদা থেকে তার মুহূর্তের দিকে এগিয়ে নেয়। জবাবটা কেমন, খেয়াল করুন। কোনো সাল বলা হয়নি, দিনের কোনো হিসাবও দেওয়া হয়নি। সময়টা বাঁধা হয়েছে একটা ঘটনা দিয়ে। আর সে ঘটনা কোনো মানুষের হাতে ঘটানো যায় না, ঠেকানোও যায় না। শ্রোতা জানতে পারে দিনটার তারিখ নয়, বরং দিনটাকে চেনা যাবে কীভাবে।"
          },
          {
            "en": "Ibn Kathir spells out what the promise contains: the establishment of the Hour, the blowing of the horn, the raising of bodies, the gathering of the first and the last on one common ground, and the repaying of every doer according to his deed, good for good and evil for evil. All of this, he says, will come to pass and there is no avoiding it. Then, before turning to 77:8, he puts a heading over the verses that follow: a mention of some of what will occur on the Day of Judgement.",
            "bn": "ওয়াদার ভেতরে কী কী আছে, ইবন কাসীর তা খুলে বলেন: কিয়ামত কায়েম হওয়া, শিঙায় ফুঁক দেওয়া, দেহগুলোকে আবার জীবিত করা, আগের ও পরের সবাইকে এক ময়দানে জড়ো করা, আর প্রত্যেক আমলকারীকে তার আমল অনুযায়ী প্রতিদান দেওয়া। ভালোর বদলে ভালো, মন্দের বদলে মন্দ। তিনি বলেন, এর সবই ঘটবে, এড়ানোর কোনো পথ নেই। এরপর ৭৭:৮ আয়াতে যাওয়ার আগে তিনি সামনের আয়াতগুলোর ওপর একটা শিরোনাম বসান: বিচার দিবসে যা ঘটবে, তার কিছু বিবরণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Writing Worn Away",
          "bn": "ক্ষয়ে যাওয়া লেখার মতো"
        },
        "p": [
          {
            "en": "The verb is tumisat, from the root t-m-s. Al-Qurtubi gives the most textured account of it among the commentators consulted for this verse. Their light goes, he says, and their brightness is erased, ka-tamsi al-kitab, like the effacing of writing. Then he gives the word's everyday use: it is said of a thing, tamasa, when it wears away and is rubbed out, and the thing is then matmus. His last example comes from the open ground: the wind effaces tracks, so the wind is the effacer and the track is the effaced.",
            "bn": "ক্রিয়াটি হলো তুমিসাত, ধাতু ত-ম-স। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার মধ্যে কুরতুবীর বিবরণই সবচেয়ে খুঁটিনাটি। তিনি বলেন, তারাগুলোর আলো চলে যাবে, তাদের জ্যোতি মুছে দেওয়া হবে, কাতামসিল কিতাব, যেমন লেখা মুছে যায়। তারপর শব্দটির রোজকার ব্যবহার দেখান। কোনো জিনিস ক্ষয়ে গিয়ে মুছে গেলে বলা হয় তামাসা, আর জিনিসটা তখন মাতমূস। শেষ উদাহরণটা তিনি আনেন খোলা মাঠ থেকে। বাতাস পায়ের ছাপ মুছে দেয়। তাই বাতাস হলো মোছনেওয়ালা, আর ছাপটা হলো মুছে যাওয়া জিনিস।"
          },
          {
            "en": "Both of al-Qurtubi's pictures are of a mark losing its legibility. Writing that has been effaced may leave the page behind, but what was on it can no longer be read. A track the wind has covered was once a sign of who passed that way; afterwards the ground says nothing. Read through his examples, tumisat is less about a thing being smashed than about a thing ceasing to show what it used to show. Whatever else happens to the stars, the light by which they were seen is what the word takes away.",
            "bn": "কুরতুবীর দুটি ছবিই এমন চিহ্নের, যা আর পড়া যায় না। মুছে যাওয়া লেখার কাগজটা হয়তো থেকে যায়, কিন্তু তাতে যা লেখা ছিল তা আর পড়া যায় না। বাতাসে ঢাকা পড়া পায়ের ছাপ একসময় বলে দিত কে এ পথে গেছে। তারপর মাটি আর কিছুই বলে না। তাঁর উদাহরণগুলো দিয়ে পড়লে তুমিসাত মানে কোনো কিছু ভেঙে চুরমার হওয়া ততটা নয়, যতটা আগে যা দেখাত তা আর না দেখানো। তারাগুলোর আর যা-ই ঘটুক, যে আলোয় তাদের দেখা যেত, শব্দটা কেড়ে নেয় সেটাই।"
          },
          {
            "en": "The verb is also passive. The stars do not fade; they are effaced, and the verse does not stop to name who effaces them. The same is true of the three verses that follow. Each of 77:8 to 77:11 is three Arabic words long, each opens with idha, when, followed by a noun, and each ends in a passive verb. Sky, mountains and messengers are all acted upon, like the stars. Only the first of the four opens with fa; the other three join on with wa, and.",
            "bn": "ক্রিয়াটি কর্মবাচ্যেও। তারাগুলো নিজে নিজে ম্লান হয় না, তাদের মুছে দেওয়া হয়। কে মোছেন, আয়াত থেমে তা বলে না। পরের তিনটি আয়াতও একই রকম। ৭৭:৮ থেকে ৭৭:১১ পর্যন্ত প্রতিটি আয়াত আরবিতে তিন শব্দের। প্রতিটি শুরু হয় ইযা, অর্থাৎ যখন, দিয়ে, তারপর একটি বিশেষ্য, আর শেষে একটি কর্মবাচ্য ক্রিয়া। তারার মতোই আকাশ, পাহাড় আর রাসূলগণ, সবার ওপরই কিছু একটা ঘটানো হয়। চারটির মধ্যে শুধু প্রথমটি শুরু হয় 'ফা' দিয়ে। বাকি তিনটি জুড়েছে 'ওয়া', অর্থাৎ এবং, দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Light Nor Glow",
          "bn": "না আলো, না দীপ্তি"
        },
        "p": [
          {
            "en": "Most of the commentators consulted for this verse read tumisat as the loss of the stars' light. At-Tabari puts it fully: the stars, their brightness gone, so that they had neither light nor glow. Al-Baghawi needs only two words, muhiya nuruha, their light was erased. Ibn Kathir in his Arabic tafsir says dhahaba daw'uha, their light went, and the abridged English rendering of his work gives the same: their light will leave. The Muyassar keeps to one line: the stars were effaced and their brightness went.",
            "bn": "এ আয়াতের জন্য দেখা তাফসীরকারদের বেশিরভাগই তুমিসাত মানে বোঝেন তারাগুলোর আলো হারানো। তাবারী কথাটা পুরো করে বলেন: নক্ষত্রগুলোর দীপ্তি চলে গেল, তাদের আর না রইল আলো, না রইল উজ্জ্বলতা। বাগাভীর লাগে মাত্র দুটি শব্দ: মুহিয়া নূরুহা, তাদের আলো মুছে দেওয়া হলো। ইবন কাসীর তাঁর আরবি তাফসীরে বলেন যাহাবা দাওউহা, তাদের আলো চলে গেল। তাঁর গ্রন্থের সংক্ষিপ্ত ইংরেজি রূপেও একই কথা: তাদের আলো বিদায় নেবে। মুয়াসসার এক লাইনেই থামে: নক্ষত্রগুলো মুছে দেওয়া হলো, আর তাদের দীপ্তি চলে গেল।"
          },
          {
            "en": "On this reading the stars stay in the sentence as its subject, and what is taken from them is their shining. At-Tabari's doubled negative, neither light nor glow, leaves no remainder: not a dimming but an ending of the light. Al-Qurtubi, whose word study was traced above, stands with this group too, since his first gloss is that their light goes and their brightness is erased. Put together, these five texts describe a night sky in which the stars give nothing more to be seen by.",
            "bn": "এই পাঠে তারাগুলো বাক্যের কর্তা হয়েই থাকে, কেড়ে নেওয়া হয় শুধু তাদের ঝলক। তাবারী দুবার 'না' বলেছেন, না আলো, না উজ্জ্বলতা, তাতে কিছুই বাকি থাকে না। এ আলো কমে আসা নয়, আলো একেবারে ফুরিয়ে যাওয়া। ওপরে যাঁর শব্দ বিশ্লেষণ দেখা হলো, সেই কুরতুবীও এই দলেই পড়েন। কারণ তাঁর প্রথম ব্যাখ্যাই হলো, তাদের আলো চলে যাবে আর জ্যোতি মুছে দেওয়া হবে। এই পাঁচটি তাফসীর মিলিয়ে যে রাতের আকাশের ছবি দাঁড়ায়, সেখানে তারাগুলো দেখার মতো আর কোনো আলো দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Scattered From Their Places",
          "bn": "নিজের জায়গা থেকে ছিটকে"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse differently. He first sets it inside the event as a whole: when what was promised occurs, the world undergoes such change, and such severe terrors arrive, as unsettle hearts and make distress grow heavy. Then he glosses the verse: fa-tantamisu an-nujumu, the stars are effaced, that is, tatanatharu wa tazulu 'an amakiniha, they scatter and are removed from their places. His explanation does not speak of light at all. For him the effacing is the stars' leaving the places they held.",
            "bn": "সা'দী আয়াতটি পড়েন অন্যভাবে। প্রথমে তিনি একে পুরো ঘটনার ভেতরে বসান: ওয়াদা করা দিনটি এলে দুনিয়ায় এমন পরিবর্তন ঘটবে, আর এমন কঠিন বিভীষিকা নেমে আসবে, যা অন্তরকে অস্থির করে তোলে আর কষ্টকে ভারী করে। তারপর আয়াতের ব্যাখ্যা দেন: নক্ষত্রগুলো মুছে যাবে, অর্থাৎ তাতানাসারু ওয়া তাযূলু আন আমাকিনিহা, তারা ছড়িয়ে পড়বে আর নিজেদের জায়গা থেকে সরে যাবে। তাঁর ব্যাখ্যায় আলোর কথা নেই। তাঁর কাছে মুছে যাওয়া মানে তারাগুলোর নিজ নিজ জায়গা ছেড়ে চলে যাওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an holds the question open. The stars will be extinguished, it says, which could mean that they will be completely destroyed, or that they will remain but their light will be lost; either way the whole world will be plunged into total darkness. So the texts give two readings. The light goes and the stars remain, in at-Tabari, al-Baghawi, al-Qurtubi, Ibn Kathir and the Muyassar; the stars themselves scatter and leave their places, in as-Sa'di. The verse's word allows the difference, and this article does not settle it.",
            "bn": "মাআরিফুল কুরআন প্রশ্নটা খোলা রাখে। সেখানে বলা হয়েছে, নক্ষত্রগুলো নিভিয়ে দেওয়া হবে। এর মানে হতে পারে সেগুলো পুরোপুরি ধ্বংস হয়ে যাবে, আবার হতে পারে সেগুলো থেকে যাবে কিন্তু তাদের আলো হারিয়ে যাবে। যেভাবেই হোক, গোটা দুনিয়া ডুবে যাবে নিকষ অন্ধকারে। তাহলে তাফসীরগুলোতে দুটি পাঠ পাওয়া গেল। তাবারী, বাগাভী, কুরতুবী, ইবন কাসীর ও মুয়াসসারের মতে আলো চলে যাবে, তারাগুলো থেকে যাবে। সা'দীর মতে তারাগুলো নিজেরাই ছড়িয়ে পড়বে, জায়গা ছেড়ে সরে যাবে। আয়াতের শব্দে দুটোরই অবকাশ আছে, আর এ লেখা কোনোটির পক্ষে রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Verses Ibn Kathir Adds",
          "bn": "ইবন কাসীরের জোড়া দুই আয়াত"
        },
        "p": [
          {
            "en": "Ibn Kathir does not leave the verse alone. Right after his gloss, their light went, he sets two other verses beside it, introducing each with ka-qawlihi, like His saying. The first is 81:2, wa idha an-nujumu nkadarat, which the abridged English renders as and when the stars fall. The second is 82:2, wa idha al-kawakibu ntatharat, rendered and when the stars have fallen and scattered. All three verses open with idha and name the stars, and all three belong to a run of such when-clauses.",
            "bn": "ইবন কাসীর আয়াতটিকে একা ছেড়ে দেন না। 'তাদের আলো চলে গেল', এই ব্যাখ্যার ঠিক পরেই তিনি পাশে আরও দুটি আয়াত বসান, প্রতিটির আগে লেখেন কাকাওলিহি, যেমন তাঁর বাণী। প্রথমটি ৮১:২, ওয়া ইযান নুজূমুন কাদারাত। সংক্ষিপ্ত ইংরেজি রূপে এর অনুবাদ: আর যখন নক্ষত্রগুলো খসে পড়বে। দ্বিতীয়টি ৮২:২, ওয়া ইযাল কাওয়াকিবুন তাসারাত, অনুবাদে: আর যখন নক্ষত্রগুলো খসে পড়ে ছড়িয়ে যাবে। তিনটি আয়াতই শুরু হয় ইযা দিয়ে, তিনটিতেই আছে তারার নাম। আর তিনটিই এমন কিছু 'যখন'-বাক্যের সারির অংশ।"
          },
          {
            "en": "One detail in this pairing is worth seeing. Ibn Kathir's own gloss speaks of light leaving, yet the second verse he cites carries the verb intatharat, from the root n-th-r, to scatter. That is the same root as as-Sa'di's word for the stars in this verse, tatanatharu, they scatter. Ibn Kathir does not comment on the overlap, and nothing here suggests that either scholar was answering the other. But the two readings set out above meet on one page, in the verses a single commentator chose to set beside 77:8.",
            "bn": "এই জোড়া লাগানোর মধ্যে একটা খুঁটিনাটি দেখার মতো। ইবন কাসীরের নিজের ব্যাখ্যায় আছে আলো চলে যাওয়ার কথা। অথচ তাঁর উদ্ধৃত দ্বিতীয় আয়াতের ক্রিয়া ইনতাসারাত, ধাতু ন-স-র, যার অর্থ ছড়িয়ে পড়া। এ আয়াতে তারাগুলো সম্পর্কে সা'দী যে শব্দ ব্যবহার করেছেন, তাতানাসারু, অর্থাৎ ছড়িয়ে পড়ে, সেটিও একই ধাতুর। এই মিল নিয়ে ইবন কাসীর কিছু বলেননি। কেউ কারও জবাব দিচ্ছিলেন, এমন কোনো ইঙ্গিতও এখানে নেই। তবু ওপরের দুটি পাঠ এক পাতায় এসে মিলে যায়: একই তাফসীরকার ৭৭:৮ আয়াতের পাশে যে আয়াতগুলো বেছে বসিয়েছেন, তাদের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The First of Four Whens",
          "bn": "চারটি 'যখন'-এর প্রথমটি"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an counts the events in order: the stars are the first, the splitting of the sky the second, the mountains blown away as dust the third, and the fourth comes in 77:11. Ibn Kathir describes the sky as cleft and its edges weakened, and the mountains as removed until no sight or trace of them remains. The Muyassar reads 77:11 as the messengers being given an appointed time for the judgement between them and their nations. Those verses have their own entries; here they matter as the line 77:8 heads.",
            "bn": "মাআরিফুল কুরআন ঘটনাগুলো ক্রমানুসারে গোনে: প্রথম তারাগুলো, দ্বিতীয় আকাশ ফেটে যাওয়া, তৃতীয় পাহাড়গুলো ধূলির মতো উড়ে যাওয়া, আর চতুর্থটি আসে ৭৭:১১ আয়াতে। ইবন কাসীর বলেন, আকাশ ফেটে চৌচির হবে, তার কিনারাগুলো দুর্বল হয়ে পড়বে। আর পাহাড়গুলো এমনভাবে সরিয়ে নেওয়া হবে যে তাদের কোনো চিহ্ন বা ছাপ থাকবে না। মুয়াসসার ৭৭:১১ পড়ে এভাবে: রাসূলগণকে তাঁদের ও তাঁদের উম্মতের মধ্যে ফয়সালার জন্য একটা নির্দিষ্ট সময় দেওয়া হবে। ওই আয়াতগুলোর আলোচনা আলাদা। এখানে সেগুলোর গুরুত্ব শুধু এটুকু যে ৭৭:৮ সেই সারির শুরুতে দাঁড়িয়ে।"
          },
          {
            "en": "Read as a line, the four move from what is highest and farthest to what stands on the earth, and then to the messengers, to people. The stars come first, the lights that seem most remote from any human affair. In the Muyassar's reading of the group, the run ends with the Day of Judgement between all creatures, and with great ruin on that Day for those who deny it. That warning speaks only of what it names, and it licenses nothing against any living person or community; it is addressed to whoever hears it.",
            "bn": "সারি হিসেবে পড়লে চারটি ঘটনা এগোয় সবচেয়ে উঁচু আর দূরের জিনিস থেকে মাটির ওপরের জিনিসের দিকে, তারপর রাসূলগণের দিকে, অর্থাৎ মানুষের দিকে। সবার আগে আসে তারাগুলো, যে আলোগুলোকে মানুষের সব ব্যাপার থেকে সবচেয়ে দূরের মনে হয়। মুয়াসসারের পাঠে এই সারি গিয়ে থামে সেই দিনে, যেদিন সমস্ত সৃষ্টির মধ্যে ফয়সালা হবে, আর যারা সেই দিনকে অস্বীকার করে তাদের জন্য সেদিনের মহাধ্বংসে। এ সতর্কবাণী শুধু তা-ই বলে, যা আয়াতে বলা আছে। এর জোরে কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি মেলে না। কথাটা তাকেই বলা, যে শুনছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at the Hour of Maghrib",
          "bn": "মাগরিবের সময়ের তিলাওয়াত"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a sound hadith to it, and none gives an occasion of revelation for it. There is a narration about the surah as a whole, which is not attached to this verse. Al-Bukhari records in his Sahih (Bukhari 763) from Ibn 'Abbas: (My mother) Umm al-Fadl heard me reciting Wal-mursalati 'urfan and said, \"O my son! By Allah, your recitation made me remember that it was the last surah I heard from Allah's Messenger ﷺ. He recited it in the Maghrib prayer.\"",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি, নাজিলের কোনো উপলক্ষও উল্লেখ করেনি। পুরো সূরা নিয়ে একটি বর্ণনা আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়। বুখারী তাঁর সহীহ গ্রন্থে (বুখারী ৭৬৩) ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: (আমার মা) উম্মুল ফাদল (রাঃ) আমাকে ওয়াল মুরসালাতি উরফা পড়তে শুনে বললেন, \"হে আমার ছেলে! আল্লাহর কসম, তোমার তিলাওয়াত আমাকে মনে করিয়ে দিল যে এটাই ছিল আল্লাহর রাসূল ﷺ-এর কাছ থেকে শোনা আমার শেষ সূরা। তিনি মাগরিবের নামাজে এটি পড়েছিলেন।\""
          },
          {
            "en": "The narration says nothing about this verse in particular, and nothing should be drawn from it about the stars. But a reader may notice the hour it names. Maghrib is prayed as the daylight leaves and the night begins. Whoever recites this surah in that prayer reaches the words so when the stars are effaced just as the first stars of the evening are coming into view. The sky that the verse speaks of losing is the very sky that is appearing overhead while it is recited.",
            "bn": "এ বর্ণনায় এই আয়াত সম্পর্কে আলাদা কোনো কথা নেই, তাই এ থেকে তারাগুলো নিয়ে কিছু বের করা ঠিক নয়। তবে পাঠক বর্ণনায় উল্লিখিত সময়টা খেয়াল করতে পারেন। মাগরিব পড়া হয় দিনের আলো বিদায় নেওয়ার সময়, রাত যখন শুরু হয়। যে এ নামাজে সূরাটি পড়ে, সে 'যখন নক্ষত্রগুলোকে মুছে দেওয়া হবে' কথাটায় পৌঁছায় ঠিক তখন, যখন সন্ধ্যার প্রথম তারাগুলো চোখে পড়তে শুরু করেছে। যে আকাশ হারিয়ে যাওয়ার কথা আয়াত বলছে, তিলাওয়াতের সময় মাথার ওপর সেই আকাশই ফুটে উঠছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Lights We Steer By",
          "bn": "যে আলো দেখে পথ চলি"
        },
        "p": [
          {
            "en": "For anyone who has looked up on a clear night, the stars seem the least changeable thing in view. Seasons turn, cities rise and fall, and the same lights appear in their places. The verse chooses exactly these as the first sign that the promised Day has come. If what looks most permanent is effaced first, then every lesser light a person leans on, wealth, health, a name, the people one depends on, is held on the same terms. None of them is worthless; none of them was ever the ground to stand on.",
            "bn": "পরিষ্কার রাতে যে কখনো আকাশের দিকে তাকিয়েছে, তার কাছে তারাগুলোকেই মনে হয় চোখের সামনে সবচেয়ে অপরিবর্তনীয় জিনিস। ঋতু বদলায়, শহর গড়ে ওঠে আর ভেঙে পড়ে, অথচ সেই একই আলো নিজ নিজ জায়গায় দেখা দেয়। ওয়াদা করা দিন যে এসে গেছে, তার প্রথম আলামত হিসেবে আয়াত বেছে নিয়েছে ঠিক এগুলোকেই। যা সবচেয়ে স্থায়ী দেখায়, তা-ই যদি আগে মুছে যায়, তবে মানুষ যে ছোট ছোট আলোর ওপর ভর করে, সম্পদ, সুস্থতা, সুনাম, ভরসার মানুষজন, সবই সেই একই শর্তে তার হাতে আছে। এগুলো মূল্যহীন নয়। কিন্তু এগুলো কখনোই দাঁড়ানোর মাটি ছিল না।"
          },
          {
            "en": "What does not fail is the sentence the stars were made to time. The surah swears to 77:7 and then gives signs, not dates, so that the promise can be recognised when it arrives. Ibn Kathir says the angels bring revelation to the messengers carrying excuse for the creatures and warning of Allah's punishment for those who defy His command. The warning, then, comes first, while the stars are still shining. By the time they are effaced, the warning will long since have been given, and heard or ignored.",
            "bn": "যা ব্যর্থ হয় না, তা হলো সেই বাক্য, যার সময় জানাতে তারাগুলোকে আলামত বানানো হয়েছে। সূরা ৭৭:৭ আয়াতের ওপর শপথ করে, তারপর তারিখ নয়, আলামত দেয়, যাতে ওয়াদা এসে পড়লে চেনা যায়। ইবন কাসীর বলেন, ফেরেশতারা রাসূলগণের কাছে ওহি নিয়ে আসেন। তাতে থাকে সৃষ্টির জন্য অজুহাত দূর করার কথা, আর যারা আল্লাহর আদেশের বিরোধিতা করে তাদের জন্য তাঁর শাস্তির সতর্কবাণী। তাহলে সতর্কবাণী আসে আগে, তারাগুলো যখনও জ্বলছে। তারা যখন মুছে যাবে, তার অনেক আগেই সতর্কবাণী পৌঁছে গেছে। কেউ তা শুনেছে, কেউ উপেক্ষা করেছে।"
          },
          {
            "en": "So the verse leaves a quiet task for tonight. Look up, if the sky is clear, and see lights that seem to have been there forever. Each of them has a last night, known to Allah alone. The question is not when that night will be, since the surah has already declined to give a date, but what is being done with the nights before it. The promise of 77:7 will occur. The stars are only how it will be known; the preparing has to happen while they still shine.",
            "bn": "তাই আয়াতটি আজ রাতের জন্য একটা নীরব কাজ রেখে যায়। আকাশ পরিষ্কার থাকলে ওপরে তাকান। দেখবেন এমন সব আলো, যেগুলোকে মনে হয় চিরকাল ওখানেই ছিল। প্রতিটিরই একটা শেষ রাত আছে, যা কেবল আল্লাহই জানেন। প্রশ্নটা সেই রাত কবে, তা নয়। সূরা তো তারিখ দিতে আগেই অস্বীকার করেছে। প্রশ্ন হলো, তার আগের রাতগুলো দিয়ে কী করা হচ্ছে। ৭৭:৭ আয়াতের ওয়াদা ঘটবেই। তারাগুলো শুধু জানিয়ে দেবে কখন। প্রস্তুতি নিতে হবে তারা জ্বলতে জ্বলতেই।"
          }
        ]
      }
    ]
  },
  "77:13": {
    "sections": [
      {
        "h": {
          "en": "An Answer in Two Words",
          "bn": "দুই শব্দের জবাব"
        },
        "p": [
          {
            "en": "Li-yawmi al-fasl: for the Day of Decision. The whole verse is two Arabic words, and it is an answer. Surat al-Mursalat has just run through four conditions, each opened by wa-idha, and when: when the stars are blotted out, when the sky is split, when the mountains are blown away, and when the messengers are given their appointed time (77:8 to 77:11). Then comes a question in 77:12, for what day was it deferred? This verse replies without a verb, naming only the day.",
            "bn": "লিয়াওমিল ফাসল: চূড়ান্ত ফয়সালার দিনের জন্য। গোটা আয়াত আরবিতে মাত্র দুটি শব্দ, আর পুরোটাই একটা জবাব। সূরা আল-মুরসালাত এর ঠিক আগে চারটি অবস্থার কথা বলেছে, প্রতিটির শুরু ওয়া ইযা, অর্থাৎ যখন দিয়ে। যখন নক্ষত্রের আলো মুছে যাবে, যখন আকাশ ফেটে যাবে, যখন পাহাড় উড়িয়ে দেওয়া হবে, আর যখন রাসূলদের জন্য সময় ঠিক করে দেওয়া হবে (৭৭:৮ থেকে ৭৭:১১)। তারপর ৭৭:১২ আয়াতে প্রশ্ন: কোন দিনের জন্য একে পিছিয়ে রাখা হয়েছে? এ আয়াত জবাব দেয় কোনো ক্রিয়া ছাড়াই, শুধু দিনটির নাম বলে।"
          },
          {
            "en": "The shape matters. A question raised and answered by the same speaker is not a request for information; it is a way of making the listener wait for the name. Al-Baghawi marks the turn with a single phrase: then He made it clear, and said, for the Day of Decision. As-Sa'di does the same: then He answered with His words. This article stays with the name and with the deferral it answers. The cosmic signs before it and the refrain after it belong to their own verses.",
            "bn": "গঠনটাই এখানে কথা বলে। একই বক্তা যখন প্রশ্ন তোলেন আর নিজেই জবাব দেন, তখন সেটা তথ্য জানতে চাওয়া নয়। শ্রোতাকে নামটার জন্য একটু অপেক্ষা করানোই উদ্দেশ্য। বাগাভী মোড়টা চিহ্নিত করেন এক কথায়: তারপর তিনি স্পষ্ট করে বললেন, ফয়সালার দিনের জন্য। সা'দীও একই কথা বলেন: তারপর তিনি নিজের বাণী দিয়ে জবাব দিলেন। এ লেখা শুধু নামটি নিয়ে, আর নামটি পিছিয়ে রাখার যে প্রশ্নের জবাব দেয়, সেটি নিয়ে। আগের মহাজাগতিক আলামত আর পরের ধুয়া, দুটোর আলোচনাই তাদের নিজ নিজ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Meant to Awe",
          "bn": "বিস্ময় জাগানো প্রশ্ন"
        },
        "p": [
          {
            "en": "Why ask at all? The commentators agree that 77:12 is not a real question. At-Tabari says Allah asks it to make His servants marvel at the terror and severity of that day: for what day were the messengers deferred and given their time, how immense it is and how dreadful. Al-Qurtubi glosses ujjilat as ukhkhirat, it was put back, and calls it a question of ta'zim, of magnifying the day. As-Sa'di uses three words for it: exalting, magnifying and making fearful.",
            "bn": "প্রশ্নটা করার দরকার কী? তাফসীরকারেরা একমত যে ৭৭:১২ আসলে কিছু জানতে চাওয়া নয়। তাবারী বলেন, আল্লাহ এ প্রশ্ন করেন সেই দিনের ভয়াবহতা আর কঠোরতা দেখিয়ে বান্দাদের বিস্মিত করতে। কোন দিনের জন্য রাসূলদের পিছিয়ে রাখা হলো, সময় বেঁধে দেওয়া হলো? কত বিরাট সেই দিন, কত ভয়ংকর! কুরতুবী উজ্জিলাত শব্দের অর্থ করেন উখখিরাত, পিছিয়ে দেওয়া হয়েছে। তাঁর মতে প্রশ্নটা তা'যীমের, দিনটির মহিমা বোঝানোর। সা'দী এর জন্য তিনটি শব্দ ব্যবহার করেন: মর্যাদা বাড়ানো, বড় করে দেখানো আর ভয় জাগানো।"
          },
          {
            "en": "Al-Baghawi adds the listener's side. A term was struck for gathering the messengers, he says, and so the servants were made to wonder at that day. Then 77:13 gives the name, and 77:14 asks again, and what will make you know what the Day of Decision is? Al-Qurtubi's comment there is short: He followed magnifying with more magnifying. The pattern is question, name, then a further question, so that the name arrives framed on both sides by wonder. The verse is the still point between them.",
            "bn": "বাগাভী যোগ করেন শ্রোতার দিকটা। তিনি বলেন, রাসূলদের একত্র করার জন্য একটা মেয়াদ বেঁধে দেওয়া হয়েছিল, তাই বান্দারা সেই দিনটি নিয়ে বিস্মিত হলো। তারপর ৭৭:১৩ আয়াত নামটা বলে দেয়, আর ৭৭:১৪ আবার জিজ্ঞেস করে: ফয়সালার দিন কী, তা তোমাকে কিসে জানাবে? সেখানে কুরতুবীর মন্তব্য ছোট্ট: মহিমার পরে আরও মহিমা জুড়ে দিলেন। ক্রমটা তাই এরকম: প্রশ্ন, তারপর নাম, তারপর আরেক প্রশ্ন। নামটা আসে দুই দিক থেকে বিস্ময়ে ঘেরা হয়ে। আয়াতটি সেই দুইয়ের মাঝখানের স্থির বিন্দু।"
          }
        ]
      },
      {
        "h": {
          "en": "Messengers Given Their Time",
          "bn": "রাসূলদের বেঁধে দেওয়া সময়"
        },
        "p": [
          {
            "en": "What was deferred? The subject of ujjilat is the messengers of 77:11, wa-idha al-rusulu uqqitat. At-Tabari reads it as: when the messengers are deferred to assemble at their time on the Day of Resurrection. He then gives the early glosses. Ibn 'Abbas said uqqitat means they were gathered. Mujahid said it means they were deferred. Ibrahim said they were promised. Ibn Zayd recited 5:109, the Day Allah will gather the messengers, and said their term runs to that day until they reach it.",
            "bn": "পিছিয়ে রাখা হয়েছিল কাকে? উজ্জিলাত ক্রিয়ার কর্তা ৭৭:১১ আয়াতের রাসূলগণ: ওয়া ইযার রুসুলু উক্কিতাত। তাবারী অর্থ করেন: যখন রাসূলদের কিয়ামতের দিন তাঁদের নির্ধারিত সময়ে একত্র হওয়ার জন্য পিছিয়ে রাখা হবে। তারপর তিনি আগের যুগের ব্যাখ্যাগুলো আনেন। ইবন আব্বাস (রাঃ) বলেন, উক্কিতাত মানে তাঁদের একত্র করা হলো। মুজাহিদ বলেন, পিছিয়ে রাখা হলো। ইবরাহীম বলেন, তাঁদের ওয়াদা দেওয়া হলো। ইবন যায়দ পড়েন ৫:১০৯ আয়াত, যেদিন আল্লাহ রাসূলদের একত্র করবেন। তিনি বলেন, সেই দিন পর্যন্তই তাঁদের মেয়াদ, যতক্ষণ না তাঁরা সেখানে পৌঁছান।"
          },
          {
            "en": "Al-Qurtubi sets out two views. The first: the messengers were given a time and a term for the decision and judgement between them and their nations, on the Day of Resurrection. The second, introduced with it is said: this happens in this world, the messengers being gathered to the time set for punishing those who denied them. He judges the first better, because the timing in 77:11 belongs with the blotting of stars and the scattering of mountains, which happen on that Day, and a timing before it does not fit.",
            "bn": "কুরতুবী দুটি মত তুলে ধরেন। প্রথম মত: কিয়ামতের দিন রাসূল আর তাঁদের উম্মতদের মধ্যে ফয়সালা ও বিচারের জন্য তাঁদের একটা সময় ও মেয়াদ দেওয়া হয়েছে। দ্বিতীয় মতটি তিনি আনেন 'বলা হয়' দিয়ে: ব্যাপারটা দুনিয়াতেই, যারা রাসূলদের অস্বীকার করেছিল তাদের শাস্তির জন্য ঠিক করা সময়ে রাসূলদের জমা করা হয়েছে। কুরতুবী প্রথমটিকে উত্তম বলেন। কারণ ৭৭:১১ আয়াতের সময় বেঁধে দেওয়া নক্ষত্রের আলো মুছে যাওয়া আর পাহাড় উড়ে যাওয়ার সঙ্গেই গাঁথা। সেগুলো ঘটবে সেই দিনেই, আর তার আগের কোনো সময় নির্ধারণ এখানে খাপ খায় না।"
          },
          {
            "en": "The word itself was read in more than one way. At-Tabari reports uqqitat with alif and a doubled qaf, wuqqitat with waw and a doubled qaf, and Abu Ja'far's wuqitat with a single qaf. He rules that all are known readings of one meaning, from waqt, time, the waw becoming a hamza because some Arabs find a waw with damma heavy. Ma'arif al-Qur'an cites az-Zamakhshari, through Ruh al-Ma'ani, for the sense of arriving at an appointed time, and prefers it here.",
            "bn": "শব্দটি একাধিকভাবে পড়া হয়েছে। তাবারী জানান, কেউ পড়েছেন আলিফ ও তাশদীদযুক্ত কাফ দিয়ে উক্কিতাত, কেউ ওয়াও ও তাশদীদযুক্ত কাফ দিয়ে ওয়ুক্কিতাত, আর আবু জা'ফর পড়েছেন তাশদীদ ছাড়া ওয়ুকিতাত। তাবারীর রায়: সবগুলোই পরিচিত কিরাআত, অর্থ একটাই। মূল শব্দ ওয়াকত, অর্থাৎ সময়। আরবদের কেউ কেউ পেশযুক্ত ওয়াওকে ভারী মনে করে হামযা বানিয়ে ফেলে, পার্থক্য সেখান থেকেই। মাআরিফুল কুরআন রূহুল মাআনীর সূত্রে যামাখশারীর ব্যাখ্যা আনে: নির্ধারিত সময়ে এসে পৌঁছানো। এখানে এ অর্থটিকেই বেশি মানানসই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Over Until the Hour",
          "bn": "কিয়ামত পর্যন্ত তোলা রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir names what the deferral holds back: for what day were the messengers deferred and their matter postponed, until the Hour stands. He then reads it beside 14:47 and 14:48: so never think that Allah will fail His promise to His messengers, on the Day the earth is replaced by another earth, and the heavens, and they come out before Allah, the One, the Prevailing. That, he says, is the Day of Decision, as Allah said, li-yawmi al-fasl.",
            "bn": "স্থগিত রাখা হয়েছে কী, ইবন কাসীর তা নাম ধরে বলেন: কোন দিনের জন্য রাসূলদের পিছিয়ে রাখা হলো আর তাঁদের বিষয়টা মুলতবি রাখা হলো? কিয়ামত কায়েম হওয়া পর্যন্ত। এরপর তিনি পাশে রাখেন ১৪:৪৭ ও ১৪:৪৮ আয়াত: কখনো ভেবো না আল্লাহ তাঁর রাসূলদের দেওয়া ওয়াদা ভঙ্গ করবেন। সেদিন এ পৃথিবী বদলে অন্য পৃথিবী হবে, আসমানও বদলে যাবে, আর সবাই হাজির হবে একমাত্র ও প্রবল আল্লাহর সামনে। ইবন কাসীর বলেন, এটাই ফয়সালার দিন, যেমন আল্লাহ বলেছেন: লিয়াওমিল ফাসল।"
          },
          {
            "en": "Put the two readings together and the deferral has a content. The messengers were sent, they called, and their peoples answered as they answered. In this world their case with those peoples is left open. The Muyassar puts it plainly: the messengers were given a time and a term for the decision between them and the nations. As-Sa'di says the same: deferred for the judgement between them and their nations. What the messengers carried is not closed when they die; it is held over to a day appointed for closing it.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে বোঝা যায়, স্থগিতের ভেতরে কী আছে। রাসূলদের পাঠানো হয়েছিল, তাঁরা দাওয়াত দিয়েছেন, আর তাঁদের কওম যেভাবে সাড়া দেওয়ার দিয়েছে। দুনিয়াতে কওমের সঙ্গে তাঁদের এ মামলা খোলাই থেকে যায়। মুয়াসসার সোজা কথায় বলে: রাসূলদের জন্য একটা সময় আর মেয়াদ ঠিক করা হয়েছে, যাতে তাঁদের আর উম্মতদের মধ্যে ফয়সালা হয়। সা'দীও তাই বলেন: তাঁদের আর তাঁদের উম্মতদের মধ্যে বিচারের জন্য পিছিয়ে রাখা হয়েছে। রাসূলরা যা বয়ে এনেছিলেন, তাঁদের মৃত্যুতে তার নিষ্পত্তি হয় না। নিষ্পত্তির জন্য একটা দিন ঠিক করা আছে, সব তোলা থাকে সেই দিনের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Sorting Creatures, Settling Claims",
          "bn": "সৃষ্টিকে বাছাই, দাবির নিষ্পত্তি"
        },
        "p": [
          {
            "en": "Why call it al-fasl? The root f-s-l means to part things from each other, and from that, to decide between parties. At-Tabari gives the fullest gloss: the day on which Allah separates between His creation in judgement, so He takes for the wronged from whoever wronged him, and repays whoever did good for his good and whoever did evil for his evil. He adds that the people of interpretation said the same. Al-Baghawi reports Ibn 'Abbas: the day the Most Merciful decides between the creatures.",
            "bn": "নাম কেন আল-ফাসল? ফ-স-ল ধাতুর মূল অর্থ এক জিনিসকে আরেকটা থেকে আলাদা করা। সেখান থেকেই দুই পক্ষের মধ্যে রায় দেওয়া। তাবারীর ব্যাখ্যা সবচেয়ে বিস্তারিত: সেদিন আল্লাহ বিচারের মাধ্যমে তাঁর সৃষ্টির মধ্যে ফয়সালা করবেন। মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করে দেবেন। সৎকর্মশীলকে তার সৎকাজের প্রতিদান দেবেন, আর মন্দকারীকে তার মন্দের। তাবারী যোগ করেন, তাফসীরবিদরাও এরকমই বলেছেন। বাগাভী ইবন আব্বাস (রাঃ)-এর কথা আনেন: সেদিন পরম দয়ালু সৃষ্টিজগতের মধ্যে ফয়সালা করবেন।"
          },
          {
            "en": "Qatada, in a report at-Tabari carries and al-Qurtubi repeats, puts it as a sorting: the day on which people are separated by their deeds, to the Garden and to the Fire. At-Tabari has and to the Fire; al-Qurtubi's wording has or to the Fire. So the name holds two pictures at once. One is a court, where claims between creatures are settled and every wrong is paid back. The other is a parting of ways, where each person goes, by what he did, to one of two homes.",
            "bn": "কাতাদা এটাকে দেখেন বাছাই হিসেবে। তাবারী তাঁর বর্ণনাটি এনেছেন, কুরতুবীও তা উদ্ধৃত করেছেন: সেদিন মানুষকে তাদের আমল অনুযায়ী আলাদা করা হবে, জান্নাতের দিকে আর জাহান্নামের দিকে। তাবারীর পাঠে আছে 'আর জাহান্নামের দিকে', কুরতুবীর পাঠে 'অথবা জাহান্নামের দিকে'। নামটির ভেতরে তাই একসঙ্গে দুটি ছবি। একটি আদালতের ছবি, যেখানে সৃষ্টির পরস্পরের দাবির নিষ্পত্তি হবে, প্রতিটি জুলুমের বদলা আদায় হবে। আরেকটি পথ ভাগ হয়ে যাওয়ার ছবি, যেখানে প্রত্যেকে নিজের আমল অনুযায়ী দুই ঠিকানার একটিতে যাবে।"
          },
          {
            "en": "These two are not set against each other in the sources. At-Tabari gives the judgement gloss and then cites Qatada's sorting as agreeing with it. As-Sa'di joins them in one line: between the creatures, some of them against others, and the reckoning of each of them on his own. The first half is the court of claims; the second is each person's own account. The Muyassar, glossing the group, calls it the Day of judgement and of decision between the creatures.",
            "bn": "সূত্রগুলো এ দুটিকে পরস্পরের বিপরীতে দাঁড় করায় না। তাবারী আগে বিচারের ব্যাখ্যা দেন, তারপর কাতাদার বাছাইয়ের কথাকে তারই সমর্থন হিসেবে আনেন। সা'দী দুটিকে একটি বাক্যে জোড়েন: সৃষ্টিজগতের মধ্যে, একের বিরুদ্ধে অন্যের দাবি, আর প্রত্যেকের আলাদা আলাদা হিসাব। প্রথম অংশ পরস্পরের দাবির আদালত, দ্বিতীয় অংশ প্রত্যেকের নিজের হিসাব। মুয়াসসার পুরো অংশের ব্যাখ্যায় দিনটিকে বলে সৃষ্টিজগতের মধ্যে বিচার ও ফয়সালার দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Again, Named Again",
          "bn": "আবার প্রশ্ন, আবার নাম"
        },
        "p": [
          {
            "en": "The name is no sooner given than it is questioned. In 77:14, wa-ma adraka ma yawmu al-fasl, at-Tabari hears Allah addressing His Prophet Muhammad ﷺ: and what has made you know, O Muhammad, what the Day of Decision is, magnifying its matter and the severity of its terror. He cites Qatada: a magnifying of that day. The Muyassar addresses the line instead to you, O human being: what will make you know what the Day of Decision is, its severity and its terror?",
            "bn": "নামটা বলার সঙ্গে সঙ্গেই আবার প্রশ্ন ওঠে। ৭৭:১৪ আয়াতে, ওয়ামা আদরাকা মা ইয়াওমুল ফাসল, তাবারী শোনেন নবী মুহাম্মাদ ﷺ-কে আল্লাহর সম্বোধন: হে মুহাম্মাদ, ফয়সালার দিন কী, তা তোমাকে কিসে জানাল? এতে দিনটির গুরুত্ব আর তার ভয়াবহতার তীব্রতা বড় করে দেখানো হয়েছে। তিনি কাতাদার কথা আনেন: সেই দিনের মহিমা বোঝানো। মুয়াসসার সম্বোধনটা ধরে ভিন্নভাবে: হে মানুষ, ফয়সালার দিন কী, তার কঠোরতা আর ভয়াবহতা কেমন, তা তোমাকে কিসে জানাবে?"
          },
          {
            "en": "So the sources differ on who is first addressed: at-Tabari names the Prophet ﷺ, and the Muyassar names the human being. Both readings leave the same weight on the listener, since what is beyond the Messenger's knowing until it is told is beyond everyone's. The surah does not leave the name there. In 77:38 it returns as a statement on the day itself: this is the Day of Decision; We have gathered you and the former peoples. The deferral of 77:12 ends in that gathering.",
            "bn": "অর্থাৎ প্রথম সম্বোধন কার প্রতি, তা নিয়ে সূত্রগুলো আলাদা কথা বলে। তাবারী বলেন নবী ﷺ-এর কথা, মুয়াসসার বলে মানুষের কথা। দুই ব্যাখ্যাতেই শ্রোতার উপর ভার একই থাকে। রাসূলও যা না বলে দেওয়া পর্যন্ত জানেন না, তা অন্য কারও জানার বাইরে তো আরও বেশি। সূরাটি নামটাকে এখানেই ছেড়ে দেয় না। ৭৭:৩৮ আয়াতে সেটা ফিরে আসে সেদিনের ঘোষণা হয়ে: এটাই ফয়সালার দিন, আমি তোমাদেরকে আর আগের লোকেদের একত্র করেছি। ৭৭:১২ আয়াতের স্থগিত শেষ হয় এই সমাবেশে।"
          },
          {
            "en": "Between those two points the surah sets its refrain for the first time, in 77:15: woe that day to the deniers. The Muyassar, closing its gloss on this passage, reads the woe as great ruin on that day for those who deny this promised day. The deniers there are named by what they deny, which is the very day this verse names. What the woe consists of is left as the verse gives it here; the refrain recurs through the surah and is treated where it stands.",
            "bn": "এ দুইয়ের মাঝে সূরাটি প্রথমবারের মতো তার ধুয়া বসায়, ৭৭:১৫ আয়াতে: সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। মুয়াসসার এ অংশের ব্যাখ্যা শেষ করে এভাবে: এই প্রতিশ্রুত দিনকে যারা অস্বীকার করে, সেদিন তাদের জন্য মহা ধ্বংস। সেখানে মিথ্যারোপকারীদের পরিচয় তারা কী অস্বীকার করে তা দিয়ে, আর সেটা ঠিক সেই দিন, যার নাম এ আয়াত বলছে। দুর্ভোগটা কী, এখানে তা আয়াতের ভাষাতেই রেখে দেওয়া হলো। ধুয়াটি সূরাজুড়ে বারবার ফিরে আসে, আর প্রতিটি জায়গায় তার আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Left Unclaimed Here",
          "bn": "যে বর্ণনা এখানে আনা হলো না"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted for this verse attaches a sound hadith to it with a collection and a grading. Al-Qurtubi quotes one narration about people waiting for the decision, introduced only with in the hadith, and names no collection; it could not be confirmed, so it is not reproduced. A report that woe in the refrain is a valley in Jahannam is also left out, since no source consulted here carries it. No occasion of revelation is given for the verse in these texts.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই সংকলন ও মানসহ কোনো সহীহ হাদিস এর সঙ্গে যুক্ত করেনি। কুরতুবী ফয়সালার অপেক্ষায় থাকা মানুষদের নিয়ে একটি বর্ণনা আনেন শুধু 'হাদিসে আছে' বলে, কোনো সংকলনের নাম দেন না। সেটা যাচাই করা যায়নি, তাই এখানে আনা হলো না। ধুয়ার ওয়াইল শব্দটি জাহান্নামের একটি উপত্যকা, এমন বর্ণনাও বাদ রাখা হলো, কারণ এখানে দেখা কোনো সূত্রে তা নেই। এসব সূত্রে আয়াতটির কোনো শানে নুযূলও উল্লেখ নেই।"
          },
          {
            "en": "One thing must be said plainly. The deniers of 77:15 and the former peoples of 77:16 are described as the text describes them, as those who deny the promised day, and the decision on them belongs to Allah on that day. The verse licenses nothing against any living person or community. It names a day on which Allah decides, and that is the point: the judging is His, and it is deferred to Him. No reader is made a judge of anyone by reading it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। ৭৭:১৫ আয়াতের মিথ্যারোপকারী আর ৭৭:১৬ আয়াতের আগেকার লোকেদের কথা আয়াত যেভাবে বলেছে, সেভাবেই এসেছে: তারা প্রতিশ্রুত দিনকে অস্বীকার করেছে। তাদের ব্যাপারে ফয়সালা সেদিন আল্লাহর হাতে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আয়াতটি এমন এক দিনের নাম বলে, যেদিন আল্লাহ ফয়সালা করবেন। মূল কথা এটাই: বিচার তাঁর, আর তা তাঁর কাছেই তোলা রাখা হয়েছে। এ আয়াত পড়ে কোনো পাঠক কারও বিচারক হয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Before a Fixed Verdict",
          "bn": "নির্ধারিত রায়ের আগের জীবন"
        },
        "p": [
          {
            "en": "The verse teaches a way of reading delay. In 77:12 something is deferred, and the next verse says it is deferred to a named day, not cancelled. Ibn Kathir's pairing with 14:47 makes the same point from the other side: never think Allah will fail His promise. A wronged person who saw no justice in this life has not been overlooked; his claim is on the list of a day whose purpose, in at-Tabari's words, is to take for the wronged from the one who wronged him.",
            "bn": "আয়াতটি দেরিকে কীভাবে দেখতে হয়, তা শেখায়। ৭৭:১২ আয়াতে কিছু একটা পিছিয়ে রাখা হয়েছে, আর পরের আয়াত বলে, পিছিয়েছে একটা নির্দিষ্ট দিনের জন্য, বাতিল হয়নি। ইবন কাসীর ১৪:৪৭ আয়াতকে পাশে রেখে একই কথা অন্য দিক থেকে বলেন: কখনো ভেবো না আল্লাহ ওয়াদা ভঙ্গ করবেন। যে মাযলুম এ জীবনে ইনসাফ দেখেনি, তাকে কেউ ভুলে যায়নি। তার দাবি তোলা আছে এমন এক দিনের তালিকায়, যার কাজই তাবারীর ভাষায় মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করা।"
          },
          {
            "en": "The same reading turns back on the reader. If claims are held over, so are the claims against me. Qatada's sorting is by deeds, and as-Sa'di's reckoning is of each person on his own, so the day that comforts the wronged also waits for whoever wronged them. There is still time on this side of it: to return what was taken, to ask pardon of the one I hurt, and to leave to the Day of Decision the verdicts I was never meant to give.",
            "bn": "একই কথা পাঠকের দিকেও ফিরে আসে। দাবিগুলো যদি তোলা থাকে, তবে আমার বিরুদ্ধে যে দাবি, সেগুলোও তোলা আছে। কাতাদার বাছাই আমল দিয়ে, আর সা'দীর হিসাব প্রত্যেকের আলাদা। তাই যে দিন মাযলুমকে সান্ত্বনা দেয়, সেই দিনই জালিমের জন্যও অপেক্ষা করে আছে। সেই দিনের এপারে এখনো সময় আছে। যা কেড়ে নিয়েছি তা ফিরিয়ে দেওয়ার, যাকে কষ্ট দিয়েছি তার কাছে মাফ চাওয়ার। আর যে রায় দেওয়ার দায়িত্ব কখনো আমার ছিল না, তা ফয়সালার দিনের হাতে ছেড়ে দেওয়ার।"
          }
        ]
      }
    ]
  },
  "77:16": {
    "sections": [
      {
        "h": {
          "en": "Three Words Over the Ruins",
          "bn": "ধ্বংসস্তূপের ওপর তিন শব্দ"
        },
        "p": [
          {
            "en": "A-lam nuhliki al-awwalin: did We not destroy the former peoples? Three Arabic words, and the surah changes its approach. Until this point it has described the Day itself: the stars put out, the mountains blown away, the messengers given their appointed time, and then the first woe in 77:15 on those who deny it. Here it turns to evidence the listener can check for himself. The verse asks about something that has already happened, so that what is promised can be weighed against what is on record.",
            "bn": "আলাম নুহলিকিল আওয়ালীন: আমি কি আগেকার লোকদের ধ্বংস করিনি? আরবিতে মাত্র তিনটি শব্দ, আর এতেই সূরার ধরন বদলে যায়। এতক্ষণ সূরা সেই দিনটির ছবি আঁকছিল। তারকারা নিভে যাবে, পাহাড় উড়ে যাবে, রাসূলদের জন্য নির্ধারিত সময় এসে পড়বে। তারপর ৭৭:১৫ আয়াতে প্রথমবার এল অস্বীকারকারীদের জন্য দুর্ভোগের ঘোষণা। এখানে এসে সূরা এমন প্রমাণের দিকে ফেরে, যা শ্রোতা নিজেই যাচাই করে দেখতে পারে। প্রশ্নটা এমন এক বিষয়ে, যা ঘটে গেছে। যাতে ভবিষ্যতের প্রতিশ্রুতিকে মেলানো যায় অতীতের নথির সঙ্গে।"
          },
          {
            "en": "The form is a question that expects the answer yes. As-Sa'di recasts it in one line: a-ma ahlakna al-mukadhdhibin as-sabiqin, did We not destroy the earlier deniers? His paraphrase adds a word the verse leaves unspoken. The former peoples are not simply those who lived earlier; they are the earlier deniers. Al-Baghawi says the same from another side: the past nations, destroyed with punishment in this world when they denied their messengers. The destruction he describes is worldly, and its cause is named.",
            "bn": "প্রশ্নটা এমন, যার উত্তর একটাই: হ্যাঁ। সা'দী একে এক লাইনে নতুন করে বলেন: আমা আহলাকনাল মুকাযযিবীনাস সাবিকীন, আমি কি আগেকার মিথ্যারোপকারীদের ধ্বংস করিনি? আয়াতে যে শব্দটা উহ্য ছিল, তাঁর ব্যাখ্যায় সেটা স্পষ্ট হয়ে ওঠে। আগেকার লোক মানে শুধু আগে যারা জন্মেছিল তারা নয়। তারা আগেকার অস্বীকারকারী। বাগাভী অন্য দিক থেকে একই কথা বলেন: অতীতের জাতিগুলো, যারা নিজেদের রাসূলদের মিথ্যা বলেছিল, তখন দুনিয়াতেই শাস্তি দিয়ে তাদের ধ্বংস করা হয়। তিনি যে ধ্বংসের কথা বলেন তা এই দুনিয়ার, আর তার কারণও তিনি নাম ধরে বলে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Nations Named First",
          "bn": "প্রথমে যাদের নাম আসে"
        },
        "p": [
          {
            "en": "At-Tabari gives them names. In his paraphrase Allah says: did We not destroy the past nations who denied My messengers and rejected My signs, the people of Nuh (AS), 'Ad and Thamud? The Muyassar gives the same three and the same cause: the earlier ones among the past nations, destroyed for denying the messengers. Ibn Kathir, citing Ibn Jarir, who is at-Tabari, keeps to the description without names: those who denied the messengers and opposed what the messengers brought them.",
            "bn": "তাবারী তাদের নাম বলে দেন। তাঁর ভাষ্যে আল্লাহ বলছেন: আমি কি সেই অতীত জাতিগুলোকে ধ্বংস করিনি, যারা আমার রাসূলদের মিথ্যা বলেছিল আর আমার আয়াতগুলো অস্বীকার করেছিল? নূহ (আঃ)-এর কওম, আদ আর সামূদ। মুয়াসসার একই তিনটি নাম দেয়, কারণও একই: অতীত জাতিগুলোর মধ্যে আগেকার যারা, রাসূলদের মিথ্যারোপের কারণে যাদের ধ্বংস করা হয়েছে। ইবন কাসীর ইবন জারীরের বরাত দেন, অর্থাৎ তাবারীর। তবে তিনি নাম না নিয়ে শুধু পরিচয়টা দেন: যারা রাসূলদের মিথ্যা বলেছিল, আর রাসূলরা যা নিয়ে এসেছিলেন তার বিরোধিতা করেছিল।"
          },
          {
            "en": "Two sources draw the circle differently. Ma'arif al-Qur'an lists 'Ad, Thamud, the people of Lut (AS) and Pharaoh, destroyed for their obstinacy. Al-Qurtubi draws it widest of all: the verse tells of the destruction of the disbelievers among the past nations from the time of Adam (AS) to Muhammad ﷺ. The core of the list is shared, and its edges differ. What none of them does is define the former peoples by date alone. Every gloss names them by what they did with their messengers.",
            "bn": "দুটি উৎস বৃত্তটা একটু অন্যভাবে আঁকে। মাআরিফুল কুরআনের তালিকায় আছে আদ, সামূদ, লূত (আঃ)-এর কওম আর ফিরআউন, যারা নিজেদের হঠকারিতার জন্য ধ্বংস হয়েছিল। কুরতুবী বৃত্তটা টানেন সবচেয়ে বড় করে। তাঁর মতে আয়াতটি আদম (আঃ)-এর সময় থেকে মুহাম্মাদ ﷺ পর্যন্ত অতীত জাতিগুলোর কাফিরদের ধ্বংসের খবর দেয়। তালিকার মূল অংশ সবার এক, পার্থক্য কেবল কিনারায়। তবে কেউই আগেকার লোকদের শুধু সময় দিয়ে চেনান না। প্রত্যেকের ব্যাখ্যায় তাদের পরিচয় তারা নিজেদের রাসূলদের সঙ্গে কী আচরণ করেছিল তা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Later Ones Named Twice",
          "bn": "পরবর্তীদের দুই পরিচয়"
        },
        "p": [
          {
            "en": "Then 77:17: thumma nutbi'uhum al-akhirin, then We make the later ones follow them. At-Tabari reads the later ones as later nations of the past: those who took the same road of disbelief in Allah and His messenger, such as the people of Ibrahim (AS), the people of Lut (AS) and the people of Madyan, so that Allah destroys them as He destroyed the former ones before them. In his reading both groups lie in history, and the second simply comes after the first in time.",
            "bn": "তারপর ৭৭:১৭: সুম্মা নুতবিউহুমুল আখিরীন, অতঃপর পরবর্তীদেরও আমি তাদের পেছনে পাঠাব। তাবারীর কাছে এই পরবর্তীরাও অতীতেরই জাতি। আল্লাহ ও তাঁর রাসূলকে অস্বীকারের সেই একই পথে যারা হেঁটেছিল, যেমন ইবরাহীম (আঃ)-এর কওম, লূত (আঃ)-এর কওম আর মাদইয়ানবাসী। আগেরদের যেভাবে ধ্বংস করা হয়েছিল, এদেরও সেভাবেই ধ্বংস করা হয়। তাঁর পাঠে দুটি দলই ইতিহাসের মানুষ। দ্বিতীয় দলটা প্রথম দলের পরে এসেছে, পার্থক্য শুধু এটুকু।"
          },
          {
            "en": "Al-Baghawi reads the same words differently. The later ones are those who walk the former peoples' road in disbelief and denial, and he names them: the disbelievers of Makka, for their denial of Muhammad ﷺ. The Muyassar, glossing 77:17 and 77:18 together, says the later ones who were like them in denial and disobedience will be joined to them, and it identifies the criminals of 77:18 as the disbelievers of Makka who denied the Messenger ﷺ. On this reading the later ones are the Prophet's own first audience.",
            "bn": "বাগাভী একই শব্দ পড়েন অন্যভাবে। তাঁর মতে পরবর্তীরা হলো তারা, যারা কুফর আর মিথ্যারোপে আগেরদের পথ ধরেছে। তিনি নামও বলে দেন: মক্কার কাফিররা, যারা মুহাম্মাদ ﷺ-কে মিথ্যা বলেছিল। মুয়াসসার ৭৭:১৭ ও ৭৭:১৮ একসঙ্গে ব্যাখ্যা করে। সেখানে বলা হয়েছে, মিথ্যারোপ আর নাফরমানিতে যারা আগেরদের মতো ছিল, তাদেরও তাদের সঙ্গে মিলিয়ে দেওয়া হবে। আর ৭৭:১৮-এর অপরাধীদের মুয়াসসার চিহ্নিত করে মক্কার সেই কাফিরদের হিসেবে, যারা রাসূল ﷺ-কে মিথ্যা বলেছিল। এই পাঠে পরবর্তীরা নবী ﷺ-এর প্রথম শ্রোতারাই।"
          },
          {
            "en": "Two sources keep the description open. Ibn Kathir says only: those who resemble them. As-Sa'di says: then We make them follow by destroying whoever denied among the later ones. So the difference is real, and both sides stand: at-Tabari names past nations, while al-Baghawi and the Muyassar name the disbelievers of Makka. One small sign of how fluid the grouping is: the people of Lut (AS), whom Ma'arif al-Qur'an counts among the former peoples, appear in at-Tabari's list of the later ones.",
            "bn": "দুটি উৎস পরিচয়টা খোলা রাখে। ইবন কাসীর শুধু বলেন: যারা তাদের মতো। সা'দী বলেন: পরবর্তীদের মধ্যে যারা মিথ্যারোপ করেছে, তাদের ধ্বংস করে আমি আগেরদের পেছনে জুড়ে দিই। তাহলে মতভেদটা সত্যিকারের, আর দুই পক্ষই টিকে থাকে। তাবারী নাম দেন অতীতের জাতিগুলোর, বাগাভী ও মুয়াসসার নাম দেন মক্কার কাফিরদের। দলগুলোর সীমা যে কত নমনীয়, তার একটা ছোট নমুনাও আছে। লূত (আঃ)-এর কওমকে মাআরিফুল কুরআন রেখেছে আগেরদের তালিকায়, আর তাবারী রেখেছেন পরবর্তীদের তালিকায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Vowel, Two Timelines",
          "bn": "এক স্বরচিহ্নে দুই কাল"
        },
        "p": [
          {
            "en": "Al-Qurtubi records how the verb of 77:17 was read. The general body of readers read thumma nutbi'uhum with a final u, the raf', as a new sentence: then We make them follow. Al-A'raj read it with the final vowel dropped, the jazm, joined to nuhlik inside the question, as in the phrase a-lam tazurni thumma ukrimka, did you not visit me and then I honour you. On that reading, al-Qurtubi explains, the meaning is that Allah destroyed people after people, at the different times of the messengers.",
            "bn": "৭৭:১৭-এর ক্রিয়াটি কীভাবে পড়া হয়েছে, কুরতুবী তা লিখে রেখেছেন। অধিকাংশ কারী পড়েছেন সুম্মা নুতবিউহুম, শেষে পেশ দিয়ে, যাকে রাফ' বলে। তখন এটি নতুন বাক্য: তারপর আমি তাদের পেছনে পাঠাই। আ'রাজ পড়েছেন শেষের স্বর ফেলে দিয়ে, যাকে জযম বলে। তখন ক্রিয়াটি প্রশ্নের ভেতরে নুহলিক-এর সঙ্গে যুক্ত হয়ে যায়। যেমন আরবিতে বলা হয়: আলাম তাযুরনী সুম্মা উকরিমকা, তুমি কি আমার কাছে আসোনি, তারপর আমি তোমাকে সম্মান করিনি? কুরতুবী বলেন, এই পাঠে অর্থ দাঁড়ায়: রাসূলদের ভিন্ন ভিন্ন সময়ে আল্লাহ এক কওমের পর আরেক কওমকে ধ্বংস করেছেন।"
          },
          {
            "en": "He adds two further notes. The silent final letter in al-A'raj's reading may instead be only a lightening of nutbi'uhum, since several short vowels follow each other, and that lightening is also reported from al-A'raj himself. And in the reading of Ibn Mas'ud (RA) the verse runs thumma sa-nutbi'uhum, with the particle sa- that marks the future: then We shall make them follow. Al-Qurtubi reports these readings and leaves them there, beyond calling the raf' the reading of the general body.",
            "bn": "এরপর তিনি আরও দুটি কথা যোগ করেন। আ'রাজের পাঠে শেষ অক্ষরের সাকিন হয়তো জযমই নয়। পরপর কয়েকটি স্বর আসায় নুতবিউহুম উচ্চারণ হালকা করা হয়েছে মাত্র, আর এই হালকা উচ্চারণের বর্ণনাও আ'রাজ থেকেই এসেছে। আর ইবন মাসউদ (রাঃ)-এর কিরাআতে আয়াতটি সুম্মা সানুতবিউহুম। এখানে সা অব্যয়টি ভবিষ্যৎ বোঝায়: তারপর আমি অচিরেই তাদের পেছনে পাঠাব। কুরতুবী এই কিরাআতগুলো শুধু উল্লেখ করেন। রাফ'কে অধিকাংশের পাঠ বলা ছাড়া তিনি আর কোনো বিচারে যান না।"
          },
          {
            "en": "The grammar carries a real difference in time. With the raf', the question ends at 77:16 and 77:17 becomes a fresh statement about what Allah does and will do, which is how the verse is usually translated. With the jazm, both verbs stand inside the question and both look back at what has already happened. Ibn Mas'ud's sa- points plainly forward. None of the commentators ties his list of the later ones to a reading, so the readings and the identifications should be kept as two separate questions.",
            "bn": "ব্যাকরণের এই পার্থক্যে সময়ের হিসাবও বদলে যায়। রাফ' দিয়ে পড়লে প্রশ্ন শেষ হয় ৭৭:১৬-এ, আর ৭৭:১৭ হয়ে যায় আলাদা একটি ঘোষণা: আল্লাহ যা করেন এবং করবেন। আয়াতটির প্রচলিত অনুবাদ এভাবেই করা হয়। জযম দিয়ে পড়লে দুটি ক্রিয়াই প্রশ্নের ভেতরে থাকে, আর দুটিই তাকায় ঘটে যাওয়া অতীতের দিকে। ইবন মাসউদ (রাঃ)-এর সা স্পষ্টতই সামনের দিকে ইঙ্গিত করে। তবে কোনো তাফসীরকারই পরবর্তীদের পরিচয়কে কোনো কিরাআতের সঙ্গে বাঁধেননি। তাই কিরাআতের প্রশ্ন আর পরিচয়ের প্রশ্ন আলাদা করেই রাখা উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Way Kept With Criminals",
          "bn": "অপরাধীদের বেলায় একই রীতি"
        },
        "p": [
          {
            "en": "Then 77:18: kadhalika naf'alu bi-l-mujrimin, thus do We deal with the criminals. At-Tabari reads it as a statement of Allah's settled way. As We destroyed these for their disbelief in Me and their denial of My messengers, so is My sunna among their like of the disbelieving nations: We destroy the criminals for their crimes when they transgress and oppress. The condition in his last clause matters. The destruction he describes falls on transgression and oppression, not on a people merely for being a people.",
            "bn": "তারপর ৭৭:১৮: কাযালিকা নাফআলু বিলমুজরিমীন, অপরাধীদের সঙ্গে আমি এমনই করে থাকি। তাবারী একে পড়েন আল্লাহর স্থির নিয়মের ঘোষণা হিসেবে। আমার প্রতি কুফর আর আমার রাসূলদের মিথ্যা বলার কারণে যেভাবে এদের ধ্বংস করেছি, কাফির জাতিগুলোর মধ্যে তাদের মতো লোকদের বেলায় এটাই আমার সুন্নাত। অপরাধীরা যখন সীমা ছাড়ায় আর জুলুম করে, তখন তাদের অপরাধের জন্যই তাদের ধ্বংস করি। তাঁর শেষ শর্তটা খেয়াল করার মতো। তিনি যে ধ্বংসের কথা বলেন তা নেমে আসে সীমালঙ্ঘন আর জুলুমের ওপর, কোনো জাতি শুধু জাতি হওয়ার কারণে নয়।"
          },
          {
            "en": "As-Sa'di uses the same word, sunna. This is His way, he says, past and to come, with every criminal: their punishment is bound to come. Then he turns the verse into a question for the listener: why then do you not take a lesson from what you see and hear? The Muyassar calls what fell on the earlier nations a terrible destruction. In as-Sa'di's hands the ruins become evidence. They are there to be looked at and learned from before the same pattern reaches the one who is looking.",
            "bn": "সা'দীও একই শব্দ ব্যবহার করেন: সুন্নাত। তিনি বলেন, আগে ও পরে প্রত্যেক অপরাধীর বেলায় এটাই তাঁর নিয়ম, তাদের শাস্তি আসবেই। তারপর আয়াতটিকে তিনি শ্রোতার দিকে প্রশ্ন বানিয়ে ঘুরিয়ে দেন: তাহলে যা দেখছ আর শুনছ, তা থেকে শিক্ষা নাও না কেন? আগের জাতিগুলোর ওপর যা নেমেছিল, মুয়াসসার তাকে বলে ভয়াবহ ধ্বংস। সা'দীর ব্যাখ্যায় সেই ধ্বংসাবশেষ হয়ে ওঠে প্রমাণ। তা পড়ে আছে দেখার জন্য, শেখার জন্য। যে দেখছে, একই নিয়ম তার কাছে পৌঁছানোর আগেই।"
          },
          {
            "en": "Al-Qurtubi applies the verse to its first audience: as We did with those before, We do with the polytheists of Quraysh, either by the sword or by destruction. He takes the kaf of kadhalika as a likeness: like that destruction, We do it with every polytheist. Then he records two views on what the verse threatens. Some said it is a dreadful portrayal of their destruction in this world, to be taken as a lesson; others said it is a report of their punishment in the Hereafter. He leaves both standing.",
            "bn": "কুরতুবী আয়াতটিকে প্রয়োগ করেন এর প্রথম শ্রোতাদের ওপর। আগেরদের সঙ্গে যা করেছি, কুরাইশের মুশরিকদের সঙ্গেও তাই করি, হয় তলোয়ারে, নয়তো ধ্বংস দিয়ে। কাযালিকা-র কাফ অক্ষরকে তিনি সাদৃশ্য অর্থে নেন: সেই ধ্বংসের মতোই ধ্বংস আমি প্রত্যেক মুশরিকের বেলায় ঘটাই। এরপর আয়াতের হুমকি নিয়ে তিনি দুটি মত উল্লেখ করেন। কেউ বলেছেন, দুনিয়াতে তাদের ধ্বংসের ভয়াবহতা তুলে ধরা হয়েছে, যাতে মানুষ শিক্ষা নেয়। কেউ বলেছেন, এটা আখিরাতে তাদের শাস্তির খবর। তিনি দুটি মতই রেখে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Woe Said Again",
          "bn": "দুর্ভোগের কথা আবার"
        },
        "p": [
          {
            "en": "Then 77:19 repeats, word for word, the line of 77:15: wayl yawma'idhin li-l-mukadhdhibin, woe that Day to the deniers. What the first refrain means is not retold here. What this passage adds is a reason for saying it again. Al-Qurtubi, on 77:19, explains the repetition across the surah: Allah divides the woe among the deniers according to their denial, since each thing a person denies carries its own punishment, and some denials are graver than others, being uglier and a greater rejection of Allah.",
            "bn": "তারপর ৭৭:১৯ হুবহু ফিরিয়ে আনে ৭৭:১৫-এর লাইনটি: ওয়াইলুঁ ইয়াওমাইযিল লিলমুকাযযিবীন, সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। প্রথমবারের এই ধুয়ার অর্থ এখানে আবার বলা হচ্ছে না। এখানে নতুন যা আছে, তা হলো কথাটা আবার বলার কারণ। কুরতুবী ৭৭:১৯-এর আলোচনায় পুরো সূরায় এই পুনরাবৃত্তির ব্যাখ্যা দেন। আল্লাহ দুর্ভোগ ভাগ করে দেন অস্বীকারকারীদের মধ্যে, যার অস্বীকার যতটা, সেই অনুপাতে। কারণ মানুষ যা যা অস্বীকার করে, তার প্রতিটির আলাদা শাস্তি আছে। আর কোনো কোনো অস্বীকার অন্যগুলোর চেয়ে গুরুতর, কারণ তা আরও কদর্য, আল্লাহর কথা ফিরিয়ে দেওয়ায় আরও বড়।"
          },
          {
            "en": "He ties this to 78:26, jaza'an wifaqa, a recompense that fits. The woe, on his account, is measured to the denial. At-Tabari, on 77:19, names what is being denied at this point: Allah's reports given in these verses, and His power over whatever He wills. As-Sa'di adds the aggravating fact: they deny after having seen clear signs, punishments and examples. Placed straight after the ruins of 77:16 and 77:17, the refrain falls on people who were shown the evidence and denied it anyway.",
            "bn": "এর সঙ্গে তিনি জুড়ে দেন ৭৮:২৬: জাযাআঁও ওয়িফাকা, যথাযথ প্রতিফল। তাঁর ব্যাখ্যায় দুর্ভোগ মাপা হয় অস্বীকারের মাপে। তাবারী ৭৭:১৯-এর আলোচনায় বলে দেন, এখানে কী অস্বীকার করা হচ্ছে: এই আয়াতগুলোতে আল্লাহ যে খবর দিয়েছেন সেগুলো, আর তিনি যা চান তা করার ক্ষমতা। সা'দী যোগ করেন অপরাধকে আরও ভারী করে তোলা কথাটি। তারা অস্বীকার করে স্পষ্ট নিদর্শন, শাস্তি আর দৃষ্টান্ত দেখার পরেও। ৭৭:১৬ ও ৭৭:১৭-এর ধ্বংসাবশেষের ঠিক পরে বসায় এই ধুয়া গিয়ে পড়ে তাদের ওপর, যাদের প্রমাণ দেখানো হয়েছিল, তবু তারা অস্বীকার করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports and a Plain Limit",
          "bn": "বর্ণনা আর স্পষ্ট সীমা"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted for this verse attaches a sound hadith to 77:16, and none gives an occasion of revelation for it. On 77:19, al-Qurtubi relays a report raised to the Prophet ﷺ about the word wayl, introduced only with it is narrated; he names no collection and gives no grading, so it is mentioned here and nothing is built on it. The surah's verses are enough for the point this passage makes, and the commentators quoted above all argue from those verses, not from a narration.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই ৭৭:১৬-এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি, আর কোনোটিই এর নাযিলের প্রেক্ষাপট দেয়নি। ৭৭:১৯-এর আলোচনায় কুরতুবী ওয়াইল শব্দটি নিয়ে নবী ﷺ-এর দিকে সম্বন্ধিত একটি বর্ণনা আনেন, শুধু 'বর্ণিত আছে' বলে। তিনি কোনো হাদীসগ্রন্থের নাম বলেননি, মানও জানাননি। তাই এখানে কেবল এর উল্লেখ রইল, এর ওপর কিছু দাঁড় করানো হয়নি। এ অংশের বক্তব্যের জন্য সূরার আয়াতগুলোই যথেষ্ট। ওপরে যাঁদের কথা এসেছে, তাঁরা সবাই যুক্তি দিয়েছেন আয়াত থেকেই, কোনো বর্ণনা থেকে নয়।"
          },
          {
            "en": "This needs saying plainly. The verses describe the former and the later deniers as the text describes them, and the names the commentators give belong to history: the people of Nuh (AS), 'Ad and Thamud, the people of Ibrahim (AS), of Lut (AS) and of Madyan, and the disbelievers of Makka in the Prophet's time. The verse licenses nothing against any living person or community. It names no people of today as the later ones, and it makes no reader a judge of which disaster is a punishment or whom Allah will destroy.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আগের ও পরের অস্বীকারকারীদের আয়াতগুলো যেভাবে বর্ণনা করেছে, তারা ঠিক সেভাবেই। তাফসীরকারেরা যে নামগুলো দিয়েছেন, সবই ইতিহাসের: নূহ (আঃ)-এর কওম, আদ ও সামূদ, ইবরাহীম (আঃ)-এর কওম, লূত (আঃ)-এর কওম ও মাদইয়ানবাসী, আর নবী ﷺ-এর যুগের মক্কার কাফিররা। আজকের কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। বর্তমানের কোনো জাতিকে এটি পরবর্তীদের দলে ফেলে না। কোন বিপর্যয় শাস্তি, কিংবা আল্লাহ কাকে ধ্বংস করবেন, তা ঠিক করার বিচারকও কোনো পাঠককে বানায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ruins Read as a Mirror",
          "bn": "ধ্বংসাবশেষে নিজের মুখ"
        },
        "p": [
          {
            "en": "What the verse asks of its listener is an answer: yes, He destroyed them. To give that answer honestly is to accept the next line too, that the same pattern runs on, and the line after it, that the pattern follows a crime and not a calendar. At-Tabari's condition, when they transgress and oppress, and as-Sa'di's question, why do you not take a lesson, both turn the verse back on the one who hears it rather than on anyone else. Neither of them asks the listener to look for the guilty elsewhere; both ask what the listener will do now that the record has been read out.",
            "bn": "আয়াতটি শ্রোতার কাছে একটা উত্তর চায়: হ্যাঁ, তিনি তাদের ধ্বংস করেছেন। এই উত্তর সৎভাবে দিলে পরের লাইনটাও মেনে নিতে হয়, যে একই নিয়ম চলতে থাকে। তার পরের লাইনটাও, যে এ নিয়ম চলে অপরাধ ধরে, পঞ্জিকা ধরে নয়। তাবারীর শর্ত, যখন তারা সীমা ছাড়ায় আর জুলুম করে, আর সা'দীর প্রশ্ন, তোমরা শিক্ষা নাও না কেন, দুটোই আয়াতটিকে ফিরিয়ে দেয় শ্রোতার নিজের দিকে, অন্য কারও দিকে নয়। দোষী খুঁজতে তাঁরা কেউই শ্রোতাকে অন্যত্র পাঠান না। দুজনেই জানতে চান, এই নথি শোনার পর শ্রোতা এখন কী করবে।"
          },
          {
            "en": "So the useful reading is personal. Stories of fallen nations can be told as entertainment, as politics, or as proof that someone else deserved what came to them. These verses tell them as a mirror. The question for the reader is not which people today resemble 'Ad or Thamud. It is where denial, transgression and the refusal to learn might already have a place in the reader's own life, and what to change while the Day of Decision is still ahead and the door to repentance is open.",
            "bn": "তাই কাজের পাঠ হলো নিজের দিকে তাকানো। ধ্বংস হয়ে যাওয়া জাতির কাহিনি বলা যায় বিনোদন হিসেবে, রাজনীতি হিসেবে, কিংবা অন্যরা যা পেয়েছে তা তাদের প্রাপ্য ছিল, এর প্রমাণ হিসেবে। এই আয়াতগুলো সেই কাহিনি বলে আয়না হিসেবে। পাঠকের প্রশ্ন এটা নয় যে আজ কোন জাতি আদ বা সামূদের মতো। প্রশ্ন হলো, অস্বীকার, সীমালঙ্ঘন আর শিক্ষা নিতে না চাওয়া হয়তো নিজের জীবনেই কোথাও জায়গা করে নিয়েছে। ফয়সালার দিন এখনো সামনে, তওবার দরজাও খোলা। তাই এখনই ভেবে দেখার সময়, কী বদলাতে হবে।"
          }
        ]
      }
    ]
  },
  "77:20": {
    "sections": [
      {
        "h": {
          "en": "Turning From Ruins to Origins",
          "bn": "ধ্বংসস্তূপ থেকে নিজের শুরুতে"
        },
        "p": [
          {
            "en": "Alam nakhluqkum min ma'in mahin: did We not create you from a water held cheap? Five Arabic words, and the address turns. The verses just before it look outward and backward, to the former peoples destroyed in 77:16 and the later ones made to follow them in 77:17. This verse looks at the listener himself. Ibn Kathir marks the turn in one clause: Allah then speaks, reminding His creatures of His favour upon them, and arguing for the second creation from the first.",
            "bn": "আলাম নাখলুক্কুম মিম মা-ইম মাহীন: আমি কি তোমাদেরকে নগণ্য পানি থেকে সৃষ্টি করিনি? আরবিতে মাত্র পাঁচটি শব্দ, আর এখানেই কথার মুখ ঘুরে যায়। আগের আয়াতগুলোর চোখ ছিল বাইরে আর অতীতে। ৭৭:১৬ আয়াতে ধ্বংস হয়ে যাওয়া আগেকার জাতিগুলো, ৭৭:১৭ আয়াতে তাদের পেছনে পরের লোকেরা। এ আয়াত তাকায় শ্রোতার নিজের দিকে। ইবন কাসীর এই মোড়টা একটিমাত্র বাক্যে ধরিয়ে দেন। তাঁর ভাষায়, এরপর আল্লাহ সৃষ্টিকে নিজের অনুগ্রহের কথা মনে করিয়ে দেন, আর প্রথম সৃষ্টি দিয়ে দ্বিতীয়বার সৃষ্টির পক্ষে দলিল দেন।"
          },
          {
            "en": "The surah asks its listener three such questions, each opening with alam: did We not destroy the former peoples (77:16), did We not create you (77:20), have We not made the earth a container (77:25). The first points to history, the second to the body, the third to the ground underfoot. The text answers none of them aloud. The commentators show the expected answer by how they paraphrase. As-Sa'di recasts it as a-ma khalaqnakum, have We not created you; the Muyassar keeps one question running across four verses, to the end of 77:23.",
            "bn": "সূরাটি শ্রোতাকে এমন তিনটি প্রশ্ন করে, প্রতিটির শুরু আলাম দিয়ে। আমি কি আগেকার লোকদের ধ্বংস করিনি (৭৭:১৬)? আমি কি তোমাদের সৃষ্টি করিনি (৭৭:২০)? আমি কি পৃথিবীকে ধারণকারী বানাইনি (৭৭:২৫)? প্রথমটি দেখায় ইতিহাস, দ্বিতীয়টি নিজের শরীর, তৃতীয়টি পায়ের নিচের মাটি। কোনোটির উত্তর আয়াতে মুখে বলা নেই। প্রত্যাশিত উত্তরটা বোঝা যায় তাফসীরকারদের ব্যাখ্যার ধরন থেকে। সা'দী প্রশ্নটা নতুন করে বলেন আমা খালাকনাকুম, আমি কি তোমাদের সৃষ্টি করিনি। আর মুয়াসসার একটিমাত্র প্রশ্নকে টেনে নেয় চারটি আয়াত জুড়ে, ৭৭:২৩ পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Weak, or Held Cheap?",
          "bn": "দুর্বল, নাকি তুচ্ছ?"
        },
        "p": [
          {
            "en": "What does mahin mean here? The commentators consulted for this verse answer with two words, and not all of them use both. At-Tabari glosses the phrase as min nutfa da'ifa, from a weak drop, and backs it with a chain to Ibn 'Abbas (RA): by al-mahin is meant al-da'if, the weak. Weakness is the whole of his gloss; he says nothing of lowness or contempt. Al-Baghawi gives no gloss of the adjective at all. He names the water and stops: ya'ni al-nutfa, meaning the drop.",
            "bn": "মাহীন শব্দের মানে এখানে কী? এ আয়াতের যেসব তাফসীর দেখা হয়েছে, সেগুলো উত্তর দেয় দুটি শব্দে, তবে সবাই দুটোই ব্যবহার করেন না। তাবারী ব্যাখ্যা করেন মিন নুতফাতিন দাঈফা, অর্থাৎ দুর্বল এক ফোঁটা থেকে। সঙ্গে সনদসহ ইবন আব্বাস (রাঃ)-এর কথা আনেন: মাহীন বলতে বোঝানো হয়েছে দাঈফ, দুর্বল। তাবারীর ব্যাখ্যায় আছে শুধু দুর্বলতা। নিচুতা বা অবজ্ঞার কথা তিনি বলেন না। বাগাভী বিশেষণটির কোনো ব্যাখ্যাই দেন না। পানিটা কী, শুধু সেটুকু বলে থামেন: ইয়া'নিন নুতফা, মানে বীর্যের ফোঁটা।"
          },
          {
            "en": "Others add the second word. Al-Qurtubi has da'if haqir, weak and lowly, and also names the water as the drop. The Muyassar uses the same pair, ma' da'if haqir, and likewise calls it the nutfa. As-Sa'di leaves weakness aside and takes lowliness to its limit: fi ghayat al-haqara, at the utmost degree of lowliness. Ibn Kathir has da'if haqir as well, but he adds a qualifier that changes the weight of the second word, and the next section turns to it.",
            "bn": "অন্যরা দ্বিতীয় শব্দটাও যোগ করেন। কুরতুবী বলেন দাঈফ হাকীর, দুর্বল ও তুচ্ছ, আর তিনিও পানিটিকে নুতফা বলেই চিহ্নিত করেন। মুয়াসসার একই জোড়া শব্দ নেয়, মা-উন দাঈফুন হাকীর, এবং একেও নুতফা বলে। সা'দী দুর্বলতার কথা তোলেন না। তুচ্ছতাকে তিনি নিয়ে যান শেষ সীমায়: ফী গায়াতিল হাকারা, চরম তুচ্ছতার মধ্যে। ইবন কাসীরও বলেন দাঈফ হাকীর। তবে তিনি এর সঙ্গে একটা শর্ত জুড়ে দেন, যাতে দ্বিতীয় শব্দটির ভার বদলে যায়। পরের অংশে সেই কথা।"
          },
          {
            "en": "The renderings split along the same line. The English translation shown with the verse here gives a liquid disdained; the abridged English Ibn Kathir has a despised water, glossed as weak and despised. The Bengali shown with the verse says nagonno pani, insignificant water, which sits nearer the weakness reading. None of these is wrong, since the commentators carry both senses. What a reader should avoid is taking one English word for the whole of the Arabic, when at-Tabari and Ibn 'Abbas (RA) give only weak, and as-Sa'di gives only lowly.",
            "bn": "অনুবাদগুলোও ভাগ হয়ে যায় এই একই রেখায়। এখানে আয়াতের সঙ্গে দেওয়া ইংরেজি অনুবাদে আছে a liquid disdained, অবজ্ঞাত তরল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আছে a despised water, যার ব্যাখ্যা দুর্বল ও ঘৃণিত। আয়াতের সঙ্গে দেওয়া বাংলা অনুবাদ বলে নগণ্য পানি, যা দুর্বলতার অর্থের দিকেই বেশি ঝোঁকে। এর কোনোটিই ভুল নয়, কারণ তাফসীরকারদের কথায় দুটো অর্থই আছে। পাঠকের শুধু এটুকু সাবধানতা দরকার: একটি শব্দকে পুরো আরবির সমান ধরে নেবেন না। তাবারী ও ইবন আব্বাস (রাঃ) বলেন শুধু দুর্বল, আর সা'দী বলেন শুধু তুচ্ছ।"
          }
        ]
      },
      {
        "h": {
          "en": "Small Beside His Power",
          "bn": "তাঁর কুদরতের পাশে ছোট"
        },
        "p": [
          {
            "en": "Ibn Kathir's full wording is da'if haqir bi-l-nisba ila qudrat al-Bari 'azza wa jall: weak and lowly in relation to the power of the Maker, mighty and majestic is He. The abridged English keeps the point: weak and despised in comparison to the power of the Creator. The lowliness he names is a comparison, not a verdict on the human being in himself. Set beside its Maker, the drop is next to nothing; that is the measure he gives here, and he gives no other.",
            "bn": "ইবন কাসীরের পুরো কথা হলো: দাঈফ হাকীর বিন-নিসবাতি ইলা কুদরাতিল বারী আযযা ওয়া জাল্ল। অর্থাৎ মহান স্রষ্টার কুদরতের তুলনায় দুর্বল ও তুচ্ছ। সংক্ষিপ্ত ইংরেজি সংস্করণও কথাটা রেখেছে: স্রষ্টার ক্ষমতার তুলনায় দুর্বল ও ঘৃণিত। তিনি যে তুচ্ছতার কথা বলেন, তা তুলনার কথা। মানুষ নিজে কী, তার উপর কোনো রায় নয়। যিনি বানিয়েছেন তাঁর পাশে রাখলে ফোঁটাটা প্রায় কিছুই না। এখানে মাপকাঠি তিনি এটাই দেন, অন্য কোনো মাপকাঠি দেন না।"
          },
          {
            "en": "That qualifier matters for how the verse is heard. The very next verses have Allah placing this water in a secure lodging and determining it, which is care, not scorn. Read with Ibn Kathir's comparison, mahin gives no warrant for contempt toward human origins, still less toward any human being. It asks the listener to measure himself against his Maker, and to find the distance wide enough to quiet the doubt that the same Maker could form him a second time.",
            "bn": "শ্রোতা আয়াতটা কীভাবে শুনবে, তাতে এই শর্তটার বড় ভূমিকা আছে। ঠিক পরের আয়াতগুলোতে আল্লাহ এই পানিকে রাখেন সুরক্ষিত স্থানে, তারপর তাকে নির্ধারিত রূপ দেন। এ তো যত্নের কথা, অবজ্ঞার নয়। ইবন কাসীরের তুলনার আলোয় পড়লে মাহীন শব্দ মানুষের উৎসকে ঘৃণা করার কোনো সনদ দেয় না, কোনো মানুষকে ঘৃণা করার তো নয়ই। শব্দটা বরং শ্রোতাকে বলে নিজেকে স্রষ্টার পাশে মেপে দেখতে। দূরত্বটা এত বড় যে, সেই একই স্রষ্টা তাকে আবার গড়তে পারবেন কি না, এই সন্দেহ সেখানেই থেমে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked of Whom?",
          "bn": "প্রশ্নটা কার কাছে?"
        },
        "p": [
          {
            "en": "The commentators also differ on who is being asked. At-Tabari supplies the vocative ayyuha al-nas, O people, so the question goes to everyone. As-Sa'di writes ayyuha al-adamiyyun, O children of Adam, which is just as wide. The Muyassar narrows it: ya ma'shar al-kuffar, O company of disbelievers. Its reading fits the run of the passage, since the refrain in 77:19 has just named the deniers, and the question then meets those who deny the Return with the fact of their own making.",
            "bn": "প্রশ্নটা কাকে করা হচ্ছে, তা নিয়েও তাফসীরকারদের কথা আলাদা। তাবারী সম্বোধন জুড়ে দেন আইয়ুহান নাস, হে মানুষ। ফলে প্রশ্নটা সবার জন্য। সা'দী লেখেন আইয়ুহাল আদামিয়্যূন, হে আদমসন্তানেরা, এটাও সমান ব্যাপক। মুয়াসসার পরিসর ছোট করে আনে: ইয়া মা'শারাল কুফফার, হে কাফিরদের দল। এই পাঠ আয়াতের ধারার সঙ্গে মেলে। ৭৭:১৯ আয়াতের ধুয়ায় সবে মিথ্যারোপকারীদের কথা এসেছে। তারপরই প্রশ্নটা পুনরুত্থান অস্বীকারকারীদের সামনে তুলে ধরে তাদের নিজেদের সৃষ্টির কথা।"
          },
          {
            "en": "The texts consulted here do not argue the point. Each simply supplies its own vocative, and the difference is left here as it stands. On the wider reading every reader is asked; on the narrower one the reader overhears a question put to those who denied. Either way, this needs saying plainly: the verse speaks only of what it names, a question put in this passage to the deniers of its own setting. It licenses nothing against any living person or community, and gives no one leave to brand another a denier on its strength.",
            "bn": "যেসব তাফসীর দেখা হয়েছে, সেগুলো এ নিয়ে তর্ক করে না। প্রত্যেকে শুধু নিজের সম্বোধনটা বসিয়ে দেয়। পার্থক্যটা তাই এখানে যেমন আছে তেমনই রাখা হলো। ব্যাপক পাঠে প্রশ্নটা প্রত্যেক পাঠকের কাছে। সংকীর্ণ পাঠে প্রশ্নটা অস্বীকারকারীদের উদ্দেশে, আর পাঠক পাশে দাঁড়িয়ে তা শুনছেন। যেভাবেই পড়ুন, একটা কথা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: এই প্রসঙ্গে, সেই সময়ের অস্বীকারকারীদের প্রতি একটি প্রশ্ন। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। এর জোরে কাউকে অস্বীকারকারী বলে দাগিয়ে দেওয়ারও অধিকার কারও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Favour First, Then Proof",
          "bn": "আগে অনুগ্রহ, পরে দলিল"
        },
        "p": [
          {
            "en": "Ibn Kathir names two purposes for the question in a single clause: mumtannan 'ala khalqihi wa muhtajjan 'ala al-i'ada bi-l-bada'a. The first is a reminder of favour. Being made at all, and made from so little, is a gift the listener did nothing to earn. The second is argument: the return, al-i'ada, is proved by the beginning, al-bada'a. The abridged English puts the pair as reminding His creatures of His favour, and using the beginning of creation to support the idea of repeating it.",
            "bn": "ইবন কাসীর এক বাক্যে প্রশ্নটির দুটি উদ্দেশ্য বলেন: মুমতান্নান আলা খালকিহী ওয়া মুহতাজ্জান আলাল ই'আদাতি বিল বাদাআহ। প্রথমটি অনুগ্রহের কথা মনে করিয়ে দেওয়া। আদৌ সৃষ্টি হওয়া, তাও এত সামান্য জিনিস থেকে, এমন এক দান যা শ্রোতা নিজে কিছু করে অর্জন করেনি। দ্বিতীয়টি দলিল। ফিরিয়ে আনা, অর্থাৎ ই'আদা, প্রমাণিত হয় শুরু দিয়ে, অর্থাৎ বাদাআ দিয়ে। সংক্ষিপ্ত ইংরেজি সংস্করণ জোড়াটাকে বলে এভাবে: সৃষ্টিকে নিজের অনুগ্রহ মনে করানো, আর সৃষ্টির শুরু দিয়ে তার পুনরাবৃত্তির কথাকে সমর্থন করা।"
          },
          {
            "en": "On Ibn Kathir's reading the argument can be short, because its premise is one no listener can dispute: he exists, and he did not make himself. If the One who made him once did it from a drop the commentators call weak, a second making asks nothing greater. As-Sa'di adds a phrase about the water's course, kharaja min bayn al-sulb wa-l-tara'ib, it came out from between the backbone and the ribs. Those are the words of 86:7. He brings them in without further comment, and this article adds none.",
            "bn": "ইবন কাসীরের পাঠে যুক্তিটা ছোট হতে পারে, কারণ এর ভিত্তিটা কোনো শ্রোতা অস্বীকার করতে পারে না। সে আছে, আর নিজেকে সে নিজে বানায়নি। যিনি তাকে একবার বানিয়েছেন এমন এক ফোঁটা থেকে, যাকে তাফসীরকারেরা দুর্বল বলেন, তাঁর কাছে দ্বিতীয়বার বানানো এর চেয়ে বড় কিছু নয়। সা'দী পানিটা কোথা থেকে আসে, সে বিষয়ে একটা বাক্যাংশ যোগ করেন: খারাজা মিম বাইনিস সুলবি ওয়াত তারাইব, তা বেরিয়েছে পিঠ ও পাঁজরের মাঝখান থেকে। শব্দগুলো ৮৬:৭ আয়াতের। তিনি বাড়তি কোনো ব্যাখ্যা ছাড়াই তা আনেন, আর এ লেখাও কিছু যোগ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spittle in an Open Palm",
          "bn": "খোলা হাতের তালুতে থুতু"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches one narration to this verse, pointing back to what he wrote on Surat Ya-Sin: the hadith of Busr bin Jahhash, in which Allah says, ibn Adam, anna tu'jizuni wa qad khalaqtuka min mithli hadhih. The abridged English renders it: O son of Adam, how can you think that I am unable, and yet I created you from something like this. He quotes only that line. The full report is in Sunan Ibn Majah, number 2707, and its wording there is given whole below.",
            "bn": "ইবন কাসীর এ আয়াতের সঙ্গে একটি বর্ণনা জুড়ে দেন, আর তার জন্য পাঠককে ফিরিয়ে নেন সূরা ইয়াসীনের আলোচনায়। এটি বুসর ইবন জাহহাশের হাদিস, যেখানে আল্লাহ বলেন: ইবনা আদামা, আন্না তু'জিযুনী ওয়া কাদ খালাকতুকা মিন মিসলি হাযিহ। সংক্ষিপ্ত ইংরেজি সংস্করণে এর অর্থ: হে আদমসন্তান, তুমি কীভাবে ভাবো আমি অক্ষম, অথচ তোমাকে আমি এর মতো জিনিস থেকে সৃষ্টি করেছি? তিনি শুধু এই অংশটুকুই উদ্ধৃত করেন। পুরো বর্ণনাটি আছে সুনান ইবন মাজাহয়, ২৭০৭ নম্বরে। সেখানকার ভাষ্য নিচে পুরোটা দেওয়া হলো।"
          },
          {
            "en": "Busr bin Jahhash al-Qurashi narrated: \"The Prophet (ﷺ) spat in his palm then pointed to it with his index finger and said: 'Allah (SWT) says: Do you think you can escape from My punishment, O son of Adam, when I have created you from something like this? When your soul reaches here' - and (the Prophet (ﷺ)) pointed to his throat - 'You say: I give charity. But it is too late for charity?'\" (Sunan Ibn Majah 2707)",
            "bn": "বুসর ইবন জাহহাশ আল-কুরাশী বর্ণনা করেন: নবী ﷺ নিজের হাতের তালুতে থুতু ফেললেন, তারপর তর্জনী দিয়ে সেদিকে ইশারা করে বললেন: আল্লাহ বলেন, হে আদমসন্তান, তুমি কি ভাবো আমার শাস্তি থেকে পালিয়ে বাঁচতে পারবে, অথচ তোমাকে আমি এর মতো জিনিস থেকে সৃষ্টি করেছি? যখন তোমার প্রাণ এখানে এসে পৌঁছায় (এ কথা বলে নবী ﷺ নিজের গলার দিকে ইশারা করলেন), তখন তুমি বলো, আমি সদকা করছি। কিন্তু তখন সদকার সময় আর কোথায়? (সুনান ইবন মাজাহ ২৭০৭)"
          },
          {
            "en": "Ibn Majah recorded it without a grading of his own, and the page consulted for this article shows none, so none is added here. The first half, the palm and the question, is what Ibn Kathir quotes, and its fit with the verse is plain: the same small water, shown in a hand, and the same question about whether anything can escape Allah's power. The second half, which Ibn Kathir leaves unquoted here, turns to the throat and to charity offered when it is already too late.",
            "bn": "ইবন মাজাহ নিজে এর কোনো মান নির্ধারণ করেননি, আর এ লেখার জন্য যে পৃষ্ঠা দেখা হয়েছে, সেখানেও কোনো মান দেওয়া নেই। তাই এখানেও কোনো মান যোগ করা হলো না। হাদিসের প্রথম অংশ, মানে হাতের তালু আর প্রশ্নটুকু, ইবন কাসীর উদ্ধৃত করেছেন। আয়াতের সঙ্গে এর মিল স্পষ্ট: সেই একই সামান্য পানি, হাতে রেখে দেখানো, আর সেই একই প্রশ্ন, আল্লাহর কুদরত এড়িয়ে কিছু কি পালাতে পারে? দ্বিতীয় অংশ ইবন কাসীর এখানে উদ্ধৃত করেননি। সেখানে কথা গলার দিকে যায়, আর সেই সদকার দিকে, যার সময় ততক্ষণে পেরিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lodged, Timed and Shaped",
          "bn": "নিরাপদ আশ্রয়, নির্দিষ্ট মেয়াদ, নিখুঁত গড়ন"
        },
        "p": [
          {
            "en": "The question does not stop at the water. The next three verses carry it on: placed in a secure lodging, for a known term, then determined. The Muyassar reads all four as one sentence ending in a single question mark. In its paraphrase the water is set in a protected place, the woman's womb, until a time limited and known to Allah; then We had power over its creation, its forming and its bringing out, and excellent are We who have power. The verse at hand opens that one long question.",
            "bn": "প্রশ্নটা পানিতে এসে থেমে যায় না। পরের তিনটি আয়াত তাকে আরও এগিয়ে নেয়: সুরক্ষিত স্থানে রাখা, নির্দিষ্ট মেয়াদ পর্যন্ত, তারপর নির্ধারণ। মুয়াসসার চারটি আয়াতকে একটাই বাক্য হিসেবে পড়ে, যার শেষে একটাই প্রশ্নচিহ্ন। তার ব্যাখ্যা অনুযায়ী পানিকে রাখা হয় সুরক্ষিত জায়গায়, মানে নারীর গর্ভে, আল্লাহর জানা এক নির্দিষ্ট সময় পর্যন্ত। তারপর আল্লাহ বলেন, তাকে সৃষ্টি করা, আকৃতি দেওয়া আর বের করে আনার ক্ষমতা আমার ছিল, আর আমি কতই না উত্তম ক্ষমতাবান। আলোচ্য আয়াতটি দিয়েই সেই দীর্ঘ প্রশ্নের শুরু।"
          },
          {
            "en": "Ibn Kathir's abridged English, covering the same verses, reads differently in two places. It gives the known term as a fixed period of six to nine months, where the Muyassar says only that the time is known to Allah. And it renders faqadarna as so We did measure, and We are the best to measure, taking the word from measuring out, where the Muyassar takes it from power. Each is reported here as its source gives it. Both belong to the following verses, and this article does not settle them.",
            "bn": "একই আয়াতগুলোর আলোচনায় ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ দুই জায়গায় আলাদা কথা বলে। সেখানে নির্দিষ্ট মেয়াদ মানে ৬ থেকে ৯ মাসের এক নির্ধারিত সময়, অথচ মুয়াসসার শুধু বলে, সময়টা আল্লাহর জানা। আর ফাকাদারনা শব্দকে সংস্করণটি নেয় পরিমাপ অর্থে: আমি পরিমাপ করেছি, আর আমি কতই না উত্তম পরিমাপকারী। মুয়াসসার শব্দটাকে নেয় ক্ষমতা অর্থে। দুটো পাঠই এখানে রাখা হলো, যার যার উৎস যেমন বলেছে তেমন করে। দুটোই পরের আয়াতগুলোর বিষয়, আর এ লেখা এর মীমাংসা করছে না।"
          },
          {
            "en": "Al-Qurtubi adds one remark on this verse that a reader should meet with care. He writes that the verse is a basis for those who held that the embryo is formed from the man's water alone, and that the discussion was given earlier; he does not reopen it here. Ibn Kathir's abridged text, on 77:21, speaks of the womb as where the fluid of the man and the woman settles. Both remarks are reported as theirs. This article makes no claim of its own about how a child is formed.",
            "bn": "এ আয়াতে কুরতুবী একটা মন্তব্য যোগ করেছেন, যা পাঠককে সাবধানে পড়তে হবে। তিনি লেখেন, যাঁরা বলেছেন ভ্রূণ তৈরি হয় শুধু পুরুষের পানি থেকে, এ আয়াত তাঁদের কথার একটি ভিত্তি। আর এ নিয়ে আলোচনা আগেই হয়ে গেছে, এখানে তিনি তা আবার তোলেন না। অন্যদিকে ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ৭৭:২১ আয়াতের আলোচনায় গর্ভকে বলে সেই জায়গা, যেখানে পুরুষ ও নারীর পানি এসে স্থির হয়। দুটো মন্তব্যই তাঁদের নিজেদের কথা হিসেবে উল্লেখ করা হলো। সন্তান কীভাবে গঠিত হয়, সে বিষয়ে এ লেখা নিজে থেকে কোনো দাবি করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Remembering the First Drop",
          "bn": "প্রথম ফোঁটার কথা মনে রাখা"
        },
        "p": [
          {
            "en": "What the verse asks of its listener is simple to state. It asks him to remember where he began, and to let that memory do two things at once: soften him with gratitude, since the making was a favour, and steady his certainty in the Return, since the making was also a proof. Ibn Kathir's two words, favour and argument, are the two halves of that. Someone who keeps only the first may be grateful and still doubt; someone who keeps only the second may win the argument and stay proud.",
            "bn": "আয়াতটি শ্রোতার কাছে কী চায়, তা বলা সহজ। চায় সে মনে রাখুক কোথা থেকে তার শুরু, আর সেই স্মৃতি একসঙ্গে দুটি কাজ করুক। কৃতজ্ঞতায় তাকে নরম করুক, কারণ সৃষ্টি ছিল অনুগ্রহ। আবার আখিরাতে ফেরার বিশ্বাসে তাকে দৃঢ় করুক, কারণ সেই সৃষ্টিই প্রমাণ। ইবন কাসীরের দুটি শব্দ, অনুগ্রহ আর দলিল, এরই দুই দিক। যে শুধু প্রথমটা ধরে রাখে, সে কৃতজ্ঞ হয়েও সন্দেহে থাকতে পারে। যে শুধু দ্বিতীয়টা ধরে, সে তর্কে জিতেও অহংকারী থেকে যেতে পারে।"
          },
          {
            "en": "There is a plain humility in it too. Everyone reading this began the same way, from water the commentators call weak and lowly when set beside Allah's power. No lineage, wealth or learning changes that first fact, and none of it was chosen. The verse gives no one a reason to despise anyone; it gives everyone a reason not to think too highly of himself. And the full report in Ibn Majah adds the urgency: the gesture moves from the palm to the throat, so give while there is still time.",
            "bn": "এর মধ্যে সাদামাটা এক বিনয়ের শিক্ষাও আছে। যিনি এ লেখা পড়ছেন, তাঁর শুরুও একইভাবে, এমন পানি থেকে যাকে তাফসীরকারেরা আল্লাহর কুদরতের পাশে দুর্বল ও তুচ্ছ বলেন। বংশ, সম্পদ বা বিদ্যা সেই প্রথম সত্যকে বদলায় না, আর এর কোনোটিই কেউ বেছে নেয়নি। আয়াতটি কাউকে ছোট ভাবার কারণ দেয় না। বরং প্রত্যেককে কারণ দেয় নিজেকে বড় না ভাবার। ইবন মাজাহর পুরো বর্ণনাটি এর সঙ্গে একটা তাগিদও যোগ করে: ইশারা হাতের তালু থেকে সরে যায় গলায়। তাই সময় থাকতেই দান করুন।"
          }
        ]
      }
    ]
  },
  "77:25": {
    "sections": [
      {
        "h": {
          "en": "A Word for Gathering In",
          "bn": "টেনে জড়ো করার শব্দ"
        },
        "p": [
          {
            "en": "Alam naj'ali al-arda kifata: have We not made the earth a kifat? The weight of the verse sits on its last word. Al-Baghawi glosses it as a container, wi'a', and gives the root sense: kaft is joining and gathering, so one says kafata the thing when one draws it together and holds it. At-Tabari also gives container, and adds a turn of everyday speech: this is the kift of that, said of anything that holds another thing inside it.",
            "bn": "আলাম নাজ'আলিল আরদা কিফাতা: আমি কি পৃথিবীকে কিফাত বানাইনি? আয়াতের পুরো ভার শেষ শব্দটির উপর। বাগাভী এর অর্থ করেন আধার, ওয়িআ। ধাতুর মূল অর্থও তিনি বলে দেন: কাফত মানে মিলিয়ে নেওয়া আর জড়ো করা। কোনো জিনিসকে টেনে এক জায়গায় এনে ধরে রাখলে বলা হয়, কাফাতাহু। তাবারীও আধার অর্থই নেন। সঙ্গে আরবদের মুখের একটা কথাও জুড়ে দেন: যে জিনিস অন্য কিছুকে নিজের ভেতরে রাখে, তাকে বলা হয় এটা ওটার কিফত।"
          },
          {
            "en": "Al-Qurtubi gathers the philology. Abu 'Ubayd said kifat means containers, and al-Qurtubi adds that the skin bag for milk is called a kift because it holds the milk and encloses it. Sibawayh recited a line about generous men in the season when vipers draw back into their holes from the frost, using a verb from the same root for the snakes' retreat. Ma'arif al-Qur'an says the word names a thing that holds many things within itself. At-Tabari relays from Ibn 'Abbas (RA), through 'Ali ibn Abi Talhah, a one-word gloss that Ibn Kathir also cites: a shelter.",
            "bn": "শব্দতত্ত্বের কথাগুলো কুরতুবী এক জায়গায় জড়ো করেছেন। আবু উবাইদ বলেছেন, কিফাত মানে আধারসমূহ। কুরতুবী যোগ করেন, দুধ রাখার চামড়ার থলেকেও কিফত বলা হয়, কারণ সে দুধ ধরে রাখে, ঘিরে রাখে। সীবাওয়াইহ একটি কবিতার চরণ উদ্ধৃত করেছেন, যেখানে উদার মানুষদের কথা বলা হয়েছে সেই মৌসুমে, যখন সাপেরা শীতে কুঁকড়ে নিজেদের গর্তে ঢুকে যায়। সাপের এই গুটিয়ে ঢোকার জন্য কবি যে ক্রিয়া ব্যবহার করেছেন, তা এই একই ধাতু থেকে। মাআরিফুল কুরআন বলে, শব্দটি এমন জিনিসের নাম যা নিজের ভেতরে অনেক কিছু ধারণ করে। তাবারী আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ)-এর এক শব্দের ব্যাখ্যা আনেন, ইবন কাসীরও যা উল্লেখ করেছেন: আশ্রয়।"
          }
        ]
      },
      {
        "h": {
          "en": "From the Womb to the Ground",
          "bn": "মাতৃগর্ভ থেকে মাটিতে"
        },
        "p": [
          {
            "en": "This is the second question in the surah to open with alam, have We not. The first, at 77:20, asked about the water a person is made from and the place where it is lodged; the refrain of 77:24 then followed. Now the question widens from the body to the ground the body stands on. At-Tabari reads it as Allah alerting His servants to His favours upon them: have We not made the earth, O people, a holder for you? As-Sa'di frames it the same way, as a favour done by subjecting the earth to your interests.",
            "bn": "সূরায় আলাম, অর্থাৎ 'আমি কি... নই', দিয়ে শুরু হওয়া এটি দ্বিতীয় প্রশ্ন। প্রথমটি ছিল ৭৭:২০ আয়াতে, যে পানি থেকে মানুষ তৈরি আর যেখানে তা রাখা হয়, সে বিষয়ে। তারপর এসেছে ৭৭:২৪ আয়াতের ধুয়া। এবার প্রশ্নের পরিসর শরীর থেকে সরে গেল সেই মাটির দিকে, যার উপর শরীর দাঁড়িয়ে আছে। তাবারীর মতে আল্লাহ এখানে বান্দাদের সজাগ করছেন তাদের উপর তাঁর নিয়ামতের ব্যাপারে: হে মানুষ, আমি কি তোমাদের জন্য পৃথিবীকে আধার বানাইনি? সা'দীও একই দৃষ্টিতে দেখেন। তাঁর ভাষায় এ অনুগ্রহ হলো, পৃথিবীকে তোমাদের প্রয়োজনের অধীন করে দেওয়া।"
          },
          {
            "en": "The question is not asking for information. It expects a yes, and the yes is already in the listener's daily life. The next verse, 77:26, completes the sense in two words, ahya'an wa amwata, the living and the dead. The Muyassar reads 77:25 to 77:27 as one sentence: this earth you live on holds on its back the living beyond count and in its belly the dead beyond reckoning, and further favours follow in 77:27. Ibn Kathir's abridged English takes the refrain of 77:28 as woe to whoever reflects on such created things and still rejects their Creator.",
            "bn": "প্রশ্নটা তথ্য জানতে চায় না। সে 'হ্যাঁ' শুনতে চায়, আর সেই 'হ্যাঁ' শ্রোতার রোজকার জীবনেই লেখা আছে। পরের আয়াত ৭৭:২৬ দুই শব্দে অর্থটা পূর্ণ করে: আহইয়াআন ওয়া আমওয়াতা, জীবিত ও মৃত। মুয়াসসার ৭৭:২৫ থেকে ৭৭:২৭ পর্যন্ত একটি বাক্য হিসেবে পড়ে। যে পৃথিবীতে তোমরা বাস কর, তার পিঠে আছে অগণিত জীবিত, আর পেটে অসংখ্য মৃত। তারপর ৭৭:২৭ আয়াতে আরও অনুগ্রহের কথা আসে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৭৭:২৮ আয়াতের ধুয়ার অর্থ করে এভাবে: দুর্ভোগ তার, যে এসব সৃষ্টি নিয়ে ভাবে, তবু এগুলোর স্রষ্টাকে অস্বীকার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Back and Its Belly",
          "bn": "মাটির পিঠ আর পেট"
        },
        "p": [
          {
            "en": "The reading most of the sources share is the plainest. At-Tabari relays from ash-Sha'bi, through Waki', Sharik and Bayan: its belly is for your dead and its back for your living. Ibn Kathir cites the same words. Qatadah, in two reports at-Tabari carries, says the living dwell in it and the dead are buried in it, and then, more pictorially, the living above it on its back and the dead laid in graves within it. Ibn Kathir's abridged English adds that Mujahid and Qatadah also said this.",
            "bn": "বেশির ভাগ সূত্র যে ব্যাখ্যায় মেলে, সেটাই সবচেয়ে সরল। তাবারী ওয়াকী', শারীক ও বায়ানের সূত্রে শা'বী থেকে বর্ণনা করেন: এর পেট তোমাদের মৃতদের জন্য, আর এর পিঠ তোমাদের জীবিতদের জন্য। ইবন কাসীরও হুবহু এই কথা উদ্ধৃত করেন। তাবারীর আনা দুটি বর্ণনায় কাতাদা বলেন, জীবিতরা এতে বাস করে আর মৃতদের এতে দাফন করা হয়। অন্য বর্ণনায় ছবিটা আরও স্পষ্ট: জীবিতরা তার উপরে, তার পিঠে, আর মৃতদের কবর দেওয়া হয় তার ভেতরে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ যোগ করে, মুজাহিদ ও কাতাদাও এ কথা বলেছেন।"
          },
          {
            "en": "At-Tabari then states the meaning in his own words. The sentence means: have We not made the earth the kifat of your living and your dead? It holds your living in their dwellings and homes, drawing them together and gathering them there, and holds your dead in its belly, in graves, where they are buried. Al-Baghawi relays al-Farra' in nearly the same terms: it gathers them alive on its back in their houses and dwellings, and gathers them dead in its belly. Al-Qurtubi, the Muyassar and Ma'arif al-Qur'an all keep this picture of surface and interior.",
            "bn": "তারপর তাবারী নিজের ভাষায় অর্থটা বলেন। বাক্যের মানে দাঁড়ায়: আমি কি পৃথিবীকে তোমাদের জীবিত ও মৃতদের কিফাত বানাইনি? জীবিতদের সে ধরে রাখে তাদের ঘরবাড়ি আর বাসস্থানে, সেখানে তাদের টেনে এনে জড়ো করে। আর মৃতদের রাখে নিজের পেটে, কবরে, যেখানে তাদের দাফন করা হয়। বাগাভী ফাররা থেকে প্রায় একই কথা আনেন: জীবিত অবস্থায় সে তাদের পিঠে ধরে রাখে, তাদের ঘরে আর বাসস্থানে, আর মৃত অবস্থায় রাখে নিজের পেটে। কুরতুবী, মুয়াসসার ও মাআরিফুল কুরআন সবাই উপর আর ভেতরের এই ছবিটাই রেখেছেন।"
          },
          {
            "en": "Al-Qurtubi adds a grammarian's angle. Al-Khalil said takfit is turning a thing over, back to belly or belly to back, and one says inkafata al-qawmu ila manazilihim when people turn back to their homes. So, al-Qurtubi concludes, kifat means that people move about on its back, turn back into it, and are buried in it. He offers one more image: people settling on the face of the earth and then lying down upon it is itself a drawing close to it.",
            "bn": "কুরতুবী এখানে ব্যাকরণবিদের একটি দিক যোগ করেন। খলীল বলেছেন, তাকফীত মানে কোনো জিনিস উল্টে দেওয়া, পিঠ থেকে পেটে বা পেট থেকে পিঠে। মানুষ যখন নিজেদের ঘরে ফিরে যায়, তখন বলা হয় ইনকাফাতাল কাওমু ইলা মানাযিলিহিম। কুরতুবীর সিদ্ধান্ত তাই এই: কিফাতের অর্থ হলো, মানুষ তার পিঠে চলাফেরা করে, তারই ভেতরে ফিরে যায়, আর তাতেই দাফন হয়। তিনি আরও একটি ছবি দেন। মানুষের মাটির উপর থিতু হওয়া, তারপর তার উপরই শুয়ে পড়া, এটাও তার সঙ্গে মিশে যাওয়ারই এক রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Houses and a Burial Ground",
          "bn": "ঘরবাড়ি আর গোরস্থান"
        },
        "p": [
          {
            "en": "Al-Qurtubi preserves a scene that makes the verse visible. Ash-Sha'bi went out with a funeral, looked at the burial ground and said: these are the kifat of the dead. Then he looked at the houses and said: these are the kifat of the living. The same word served both sights. A town and its cemetery stood side by side, and one Qur'anic noun covered the two of them, because each is a place where the earth gathers people in and keeps them.",
            "bn": "কুরতুবী এমন একটি দৃশ্য সংরক্ষণ করেছেন, যাতে আয়াতটা চোখের সামনে ভেসে ওঠে। শা'বী একটি জানাযার সঙ্গে বের হয়েছিলেন। গোরস্থানের দিকে তাকিয়ে বললেন: এগুলো মৃতদের কিফাত। তারপর ঘরবাড়ির দিকে তাকিয়ে বললেন: আর এগুলো জীবিতদের কিফাত। দুটি দৃশ্যের জন্য একটিই শব্দ। পাশাপাশি একটা জনপদ আর তার কবরস্থান, আর কুরআনের একটি বিশেষ্য দুটোকেই ধরে ফেলে। কারণ দুই জায়গাতেই মাটি মানুষকে নিজের কাছে টেনে এনে রেখে দেয়।"
          },
          {
            "en": "Al-Qurtubi also records that people used to call the graveyard of Baqi' al-Gharqad Kaftah, because it was a graveyard that held the dead. And he quotes a line of poetry addressed to a living man: today you are alive upon the earth, and tomorrow it will hold you in a kifat. The poem and the place-name show that the word was not the commentators' coinage but ordinary speech about homes and graves, which is why the verse could ask its question and trust the listener to see the answer around him.",
            "bn": "কুরতুবী আরও উল্লেখ করেন, মানুষ বাকী'উল গারকাদের গোরস্থানকে বলত কাফতা, কারণ এটি এমন কবরস্থান যা মৃতদের নিজের কাছে ধরে রাখে। তিনি একজন জীবিত মানুষকে সম্বোধন করে লেখা একটি কবিতার চরণও উদ্ধৃত করেন: আজ তুমি মাটির উপরে জীবিত, আর কাল সে তোমাকে এক কিফাতের ভেতরে ঘিরে রাখবে। কবিতা আর জায়গার নামটা দেখায়, শব্দটি তাফসীরকারদের বানানো নয়। ঘর আর কবর নিয়ে মানুষের মুখের সাধারণ কথাতেই এর চল ছিল। তাই আয়াত প্রশ্নটা রেখে নিশ্চিন্ত থাকতে পারে, উত্তর শ্রোতা নিজের চারপাশেই দেখতে পাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Living Leave Behind",
          "bn": "জীবিতরা যা রেখে যায়"
        },
        "p": [
          {
            "en": "Not every early reader took the living to mean people in their houses. At-Tabari relays from Mujahid, through 'Uthman ibn al-Aswad, that the earth gathers in their harm, adha, and in a second telling, their harm and what comes out of them: the living, it covers it over; the dead, they are buried. At-Tabari himself allows this as possible. The verse may mean, he says, that the earth takes in people's filth while they live and their remains after they die. A further report from Mujahid says the living hide in it whatever they wish.",
            "bn": "আগের যুগের সব ব্যাখ্যাকার জীবিত বলতে ঘরে থাকা মানুষ বোঝেননি। তাবারী উসমান ইবনুল আসওয়াদের সূত্রে মুজাহিদ থেকে বর্ণনা করেন: মাটি তাদের ময়লা, আযা, নিজের কাছে টেনে নেয়। আরেক বর্ণনায় আছে, তাদের ময়লা আর তাদের দেহ থেকে যা বের হয়। জীবিত অবস্থায় মাটি তা ঢেকে দেয়, আর মৃতদের তাতে দাফন করা হয়। তাবারী নিজেও এ অর্থকে সম্ভব বলে মানেন। তাঁর কথায়, আয়াতের মানে হতে পারে, মানুষ বেঁচে থাকতে মাটি তাদের ময়লা ধারণ করে, আর মরে গেলে তাদের দেহ। মুজাহিদের আরেক বর্ণনায় আছে, জীবিতরা যা ইচ্ছা তাতে লুকিয়ে রাখে।"
          },
          {
            "en": "Al-Qurtubi records the argument behind this reading, under it is said. The earth is a kifat for the living in that what leaves the human body is buried in it, because there is no enfolding in people merely being upon the earth; enfolding implies being surrounded on every side. That is a fair objection to the surface-and-interior reading, and al-Qurtubi lets it stand beside his own. The two do not cancel each other: the earth can hold the living in their homes and also take in what they discard.",
            "bn": "এই ব্যাখ্যার পেছনের যুক্তি কুরতুবী 'বলা হয়' শিরোনামে উল্লেখ করেন। জীবিতদের জন্য মাটি কিফাত এই অর্থে যে মানুষের দেহ থেকে যা বের হয়, তা মাটিতে পুঁতে ফেলা হয়। কারণ শুধু মাটির উপর থাকায় ঘিরে রাখার কিছু নেই। ঘিরে রাখা মানে চারদিক থেকে বেষ্টন করা। উপর আর ভেতরের ব্যাখ্যার বিরুদ্ধে এটা যুক্তিসংগত আপত্তি, আর কুরতুবী নিজের ব্যাখ্যার পাশে এটাকেও থাকতে দেন। দুটি ব্যাখ্যা একে অপরকে বাতিল করে না। মাটি জীবিতদের তাদের ঘরে ধরে রাখতে পারে, আবার তারা যা ফেলে দেয় তাও নিজের ভেতরে নিতে পারে।"
          },
          {
            "en": "At-Tabari attaches two small acts to this reading. Through ar-Rabi' ibn Khuthaym, he relays that 'Abdullah ibn Mas'ud (RA) found a louse in his garment, buried it in the mosque and recited this verse with the next. And Mujahid, speaking of a man who sees a louse in his clothes while in the mosque, said: if you wish, throw it out, and if you wish, cover it over; then he recited the same words. These are what a Companion and a Successor did and said, as at-Tabari reports them.",
            "bn": "তাবারী এ ব্যাখ্যার সঙ্গে দুটি ছোট ঘটনা জুড়ে দেন। রাবী' ইবন খুসাইমের সূত্রে তিনি বর্ণনা করেন, আবদুল্লাহ ইবন মাসউদ (রাঃ) নিজের কাপড়ে একটা উকুন পেয়ে সেটাকে মসজিদে পুঁতে দেন, তারপর এই আয়াত ও পরের আয়াত তিলাওয়াত করেন। মসজিদে থাকা অবস্থায় কেউ কাপড়ে উকুন দেখলে, সে প্রসঙ্গে মুজাহিদ বলেছেন: চাইলে ফেলে দাও, চাইলে ঢেকে দাও। তারপর তিনি একই আয়াত পড়েছেন। তাবারীর বর্ণনা অনুযায়ী এগুলো একজন সাহাবী ও একজন তাবেয়ীর কাজ ও কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Two Words Are Accusative",
          "bn": "দুই শব্দের যবরের কারণ"
        },
        "p": [
          {
            "en": "Ahya'an wa amwata stand in the accusative, and at-Tabari reports that the grammarians differed over what puts them there. Some Basran grammarians said they are circumstantial, a hal. Some Kufan grammarians said the noun kifat itself governs them, as if the verse had said kifata ahya'in wa amwatin, a holder of the living and the dead; when the governing noun takes tanwin, what follows goes into the accusative. They compared the reading aw it'amun fi yawmin dhi masghabatin yatiman, in 90:14 and 90:15. At-Tabari says the Kufan view is closer to correct in his judgement.",
            "bn": "আহইয়াআন ওয়া আমওয়াতা শব্দ দুটি যবরযুক্ত, মানসূব। তাবারী জানান, কিসের কারণে এরা মানসূব, তা নিয়ে ব্যাকরণবিদদের মধ্যে মতভেদ আছে। বসরার কিছু ব্যাকরণবিদ বলেছেন, এগুলো হাল, অর্থাৎ অবস্থা বোঝায়। কূফার কিছু ব্যাকরণবিদ বলেছেন, কিফাত বিশেষ্যটি নিজেই এদের নিয়ন্ত্রণ করে, যেন বলা হয়েছে কিফাতা আহইয়াইন ওয়া আমওয়াতিন, জীবিত ও মৃতের আধার। নিয়ন্ত্রক বিশেষ্যে তানবীন থাকলে পরের শব্দ যবর পায়। তাঁরা তুলনা টেনেছেন ৯০:১৪ ও ৯০:১৫ আয়াতের পাঠের সঙ্গে: আও ইত'আমুন ফী ইয়াওমিন যী মাসগাবাতিন ইয়াতীমান। তাবারী বলেন, তাঁর বিবেচনায় কূফার মতটাই সঠিকের বেশি কাছাকাছি।"
          },
          {
            "en": "Al-Qurtubi names al-Farra' as the holder of the Kufan view, and glosses the circumstantial reading as describing the earth: of it, some is this and some is that. He then records a different reading altogether. Al-Akhfash, Abu 'Ubaydah and Mujahid in one of his two views took living and dead to describe the earth itself: land that is alive, which grows plants, and land that is dead, which does not. Al-Akhfash also held that kifat is the plural of kafitah, the earth being meant as a plural and so described with one.",
            "bn": "কুরতুবী কূফার মতের প্রবক্তা হিসেবে ফাররার নাম নেন। আর হালের ব্যাখ্যাকে তিনি পৃথিবীর বর্ণনা হিসেবে পড়েন: তার কিছু অংশ এমন, কিছু অংশ তেমন। তারপর তিনি সম্পূর্ণ ভিন্ন একটি ব্যাখ্যা উল্লেখ করেন। আখফাশ, আবু উবাইদা এবং মুজাহিদ তাঁর দুই মতের একটিতে বলেছেন, জীবিত ও মৃত শব্দ দুটি পৃথিবীরই বিশেষণ। জীবিত জমি, যাতে ফসল গজায়, আর মৃত জমি, যাতে কিছু গজায় না। আখফাশ আরও বলেছেন, কিফাত হলো কাফিতা শব্দের বহুবচন। পৃথিবী বলতে এখানে বহু ভূখণ্ড বোঝানো হয়েছে, তাই বহুবচন দিয়ে তার বর্ণনা।"
          },
          {
            "en": "The choice changes the picture. On the reading at-Tabari prefers, the living and the dead are what the earth holds, people above and people below. On the reading of al-Akhfash and Abu 'Ubaydah, they are two kinds of earth, the fertile and the barren. Both are reported by named authorities, and at-Tabari's preference is his own. Most of the sources fetched for this verse, at-Tabari, Ibn Kathir, al-Baghawi, as-Sa'di and the Muyassar among them, explain it in terms of people.",
            "bn": "কোন ব্যাখ্যা নেওয়া হলো, তাতে ছবিটাই বদলে যায়। তাবারী যেটা পছন্দ করেন, সে অনুযায়ী জীবিত ও মৃত হলো সেই মানুষেরা, যাদের মাটি ধরে রাখে, কেউ উপরে, কেউ নিচে। আখফাশ ও আবু উবাইদার ব্যাখ্যায় এরা দুই রকম জমি, উর্বর আর অনুর্বর। দুটি মতই নাম ধরে উল্লেখিত আলেমদের থেকে বর্ণিত, আর পছন্দটা তাবারীর নিজের। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার বেশির ভাগই মানুষের কথা দিয়ে ব্যাখ্যা করেছে। তাবারী, ইবন কাসীর, বাগাভী, সা'দী ও মুয়াসসার তাদের মধ্যে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Grave Counted as Mercy",
          "bn": "কবরও এক রহমত"
        },
        "p": [
          {
            "en": "As-Sa'di, on 77:26, gives the second half of the verse its most tender turn. The living are held in houses and the dead in graves. Then he draws the parallel: just as houses and palaces are among Allah's blessings and favours to His servants, so too are graves. They are a mercy for the dead and a covering for them, so that their bodies do not lie exposed to wild animals and other creatures. On this reading the grave is not only where a life ends. It is a shelter given to the body.",
            "bn": "৭৭:২৬ আয়াতের আলোচনায় সা'দী আয়াতের দ্বিতীয় অর্ধেককে সবচেয়ে কোমল অর্থে পড়েন। জীবিতদের ঠাঁই ঘরে, মৃতদের ঠাঁই কবরে। তারপর তিনি মিলটা দেখান। ঘরবাড়ি আর প্রাসাদ যেমন বান্দাদের প্রতি আল্লাহর নিয়ামত ও অনুগ্রহ, কবরও তেমনই। কবর মৃতদের জন্য রহমত আর পর্দা, যাতে তাদের দেহ বন্য পশু ও অন্যান্য প্রাণীর সামনে খোলা পড়ে না থাকে। এই পাঠ অনুযায়ী কবর শুধু জীবনের শেষ ঠিকানা নয়। এ হলো দেহকে দেওয়া এক আশ্রয়।"
          },
          {
            "en": "Al-Qurtubi draws legal points from the verse, and they are his. He says it indicates that the dead must be covered and buried, and, under the same duty, a person's hair and whatever else is removed from him. He also relays from Rabi'ah that a grave robber's hand is cut, because, Rabi'ah reasoned from this verse, the earth is a secure place of keeping, a hirz; al-Qurtubi refers to al-Ma'idah for it. The article reports these positions as he gives them and offers no ruling of its own.",
            "bn": "কুরতুবী আয়াত থেকে কিছু ফিকহী বিধান বের করেন, আর সেগুলো তাঁরই সিদ্ধান্ত। তিনি বলেন, আয়াতটি নির্দেশ করে যে মৃতকে ঢেকে দেওয়া ও দাফন করা আবশ্যক। একই দায়িত্বের আওতায় তিনি মানুষের চুল এবং তার শরীর থেকে সরানো অন্য সব কিছুকেও রাখেন। তিনি রাবীআ থেকে আরও বর্ণনা করেন, কবরচোরের হাত কাটা হবে। এ আয়াত থেকে রাবীআর যুক্তি ছিল, মাটি এক সুরক্ষিত হেফাজতের স্থান, হিরয। এ জন্য কুরতুবী সূরা মায়িদার দিকে ইঙ্গিত করেন। এখানে মতগুলো তাঁর বয়ান অনুযায়ীই তুলে ধরা হলো। এ লেখা নিজে কোনো বিধান দিচ্ছে না।"
          },
          {
            "en": "No tafsir fetched for this verse attaches a sound hadith to it. Al-Qurtubi does cite, without a chain or a grading in the text fetched, words he ascribes to the Prophet ﷺ on the subject of nail clippings, and refers back to al-Baqarah for it. It is mentioned here only so that the reader knows it is there; nothing in this article rests on it. What the sources do supply are the reports from Companions and Successors already given, each attributed to the scholar who carries it.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয়নি। কুরতুবী অবশ্য কাটা নখ প্রসঙ্গে নবী ﷺ-এর নামে কিছু কথা উল্লেখ করেছেন, আর এর ব্যাখ্যার জন্য সূরা বাকারার দিকে ইঙ্গিত করেছেন। তবে দেখা পাঠে তার কোনো সনদ বা মান নির্ণয় নেই। পাঠক যেন জানেন যে এমন বর্ণনা আছে, শুধু সেজন্যই এখানে উল্লেখ। এ লেখার কোনো কথা এর উপর দাঁড়িয়ে নেই। সূত্রগুলো যা দিয়েছে, তা হলো উপরে উল্লেখিত সাহাবী ও তাবেয়ীদের বর্ণনা, প্রতিটি সেই আলেমের নামে, যিনি তা বহন করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking on a Keeping Ground",
          "bn": "যে মাটি আগলে রাখে"
        },
        "p": [
          {
            "en": "The surah around this verse is full of warning: the Day of Decision, the refrain of woe repeated after each sign. Yet this verse asks the listener to look down at something ordinary. The ground is presented as a host, not a threat. It holds a person's home, takes in what he discards, and at the end receives his body and covers it. Ash-Sha'bi saw that in one glance at a funeral: houses on one side, graves on the other, and one word for both.",
            "bn": "এ আয়াতের চারপাশে সূরাটি সতর্কবাণীতে ভরা: ফয়সালার দিন, আর প্রতিটি নিদর্শনের পর দুর্ভোগের ধুয়া। তবু এ আয়াত শ্রোতাকে বলে, পায়ের নিচের সাধারণ জিনিসটার দিকে তাকাও। মাটিকে এখানে দেখানো হয়েছে আতিথেয়তা দেওয়া গৃহস্থের মতো, হুমকি হিসেবে নয়। সে মানুষের ঘর ধরে রাখে, মানুষ যা ফেলে দেয় তা নিজের ভেতরে নেয়, আর শেষে তার দেহ গ্রহণ করে ঢেকে দেয়। জানাযায় দাঁড়িয়ে এক নজরেই শা'বী তা দেখেছিলেন। একপাশে ঘরবাড়ি, অন্যপাশে কবর, আর দুটোর জন্য একটি শব্দ।"
          },
          {
            "en": "The verse asks for an answer in the life of whoever hears it. Gratitude for a roof is part of it, since as-Sa'di counts houses among the favours. Respect for the body is part of it, since he counts the grave as a mercy and a covering. Care for what we put into the ground follows from the reading at-Tabari allows. And the refrain that closes the passage at 77:28 is the reminder that a person who sees all this, and still denies the One who made it so, has been warned.",
            "bn": "আয়াতটি উত্তর চায় শ্রোতার জীবনে। মাথার উপরের ছাদের জন্য শোকর তার একটা অংশ, কারণ সা'দী ঘরবাড়িকে নিয়ামতের মধ্যে গুনেছেন। দেহের প্রতি সম্মান তার আরেকটা অংশ, কারণ তিনি কবরকে রহমত ও পর্দা বলেছেন। মাটিতে আমরা যা রাখি তার প্রতি যত্ন আসে সেই ব্যাখ্যা থেকে, যাকে তাবারী সম্ভব বলে মেনেছেন। আর ৭৭:২৮ আয়াতে অংশটির শেষের ধুয়া মনে করিয়ে দেয়, যে এসব দেখেও এর স্রষ্টাকে অস্বীকার করে, তাকে আগেই সতর্ক করা হয়েছে।"
          }
        ]
      }
    ]
  },
  "77:27": {
    "sections": [
      {
        "h": {
          "en": "Two Gifts Laid on the Ground",
          "bn": "মাটির উপর আরও দুই দান"
        },
        "p": [
          {
            "en": "Wa ja'alna fiha rawasiya shamikhatin wa asqaynakum ma'an furata: and We placed in it lofty, firm ones, and gave you sweet water to drink. The verse is seven Arabic words in two clauses joined by and, with Allah speaking as We in both. The pronoun fiha, in it, points back to the earth; at-Tabari and al-Qurtubi both supply the word, fi al-ard. The ground has just been named in 77:25 and 77:26, a question treated in its own place, and this verse sets two further gifts on it.",
            "bn": "ওয়া জাআলনা ফীহা রাওয়াসিয়া শামিখাতিওঁ ওয়া আসকাইনাকুম মাআন ফুরাতা: আর আমি তাতে স্থাপন করেছি অনড় সুউচ্চ পর্বতমালা, আর তোমাদের পান করিয়েছি মিঠা পানি। আরবিতে আয়াতটি সাতটি শব্দের। দুটি অংশ, মাঝখানে একটি 'আর', আর দুই অংশেই আল্লাহ কথা বলছেন 'আমি' বলে। ফীহা মানে তাতে, আর এই 'তা' হলো পৃথিবী। তাবারী ও কুরতুবী দুজনেই শব্দটা জুড়ে দেন: ফিল আরদ, পৃথিবীতে। মাটির কথা এসেছে ঠিক আগে, ৭৭:২৫ ও ৭৭:২৬ আয়াতে। সে প্রশ্নের আলোচনা তার নিজের জায়গায়। এ আয়াত সেই মাটির উপর আরও দুটি দান রাখে।"
          },
          {
            "en": "The Muyassar reads 77:25 to 77:27 as a single question. Have We not made this earth you live on hold the living on its back and the dead in its belly, and placed in it firm, high mountains so that it does not shake with you, and given you sweet water, easy to swallow? Then 77:28 brings the refrain: woe that Day to the deniers. The passage moves as 77:20 to 77:24 did, from what the listener can see to the warning. This article follows the two gifts, then the line after them.",
            "bn": "মুয়াসসার ৭৭:২৫ থেকে ৭৭:২৭ পর্যন্ত পুরোটাকে একটি প্রশ্ন হিসেবে পড়ে। যে পৃথিবীতে তোমরা বাস করো, আমি কি তাকে এমন করিনি যে তার পিঠে থাকে জীবিতরা আর পেটে মৃতরা? তাতে কি বসাইনি উঁচু অনড় পাহাড়, যাতে তা তোমাদের নিয়ে দুলে না ওঠে? আর তোমাদের কি পান করাইনি মিঠা, সহজে গলা দিয়ে নামে এমন পানি? এরপর ৭৭:২৮ আয়াতে আসে সেই ধুয়া: সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। ৭৭:২০ থেকে ৭৭:২৪ আয়াতেও ধারা ছিল এমনই। শ্রোতা যা চোখে দেখে, সেখান থেকে সতর্কবাণীতে। এ লেখা দান দুটির পিছু নেবে, তারপর তাদের পরের লাইনটির।"
          }
        ]
      },
      {
        "h": {
          "en": "Firm Ones With No Noun",
          "bn": "নামহীন অনড়েরা"
        },
        "p": [
          {
            "en": "The verse names the gift with two describing words and no noun: rawasi, firm ones, and shamikhat, lofty ones. The commentators supply the noun, and all of them supply the same one. Qatada, in a report at-Tabari carries, says only ya'ni al-jibal, he means the mountains. Al-Qurtubi writes the same words and then defines the first: al-rawasi al-thawabit, the rawasi are the firm, fixed ones. At-Tabari, in his own paraphrase, writes jibalan thabitatin fiha, mountains standing fixed in it. The Muyassar has jibalan thawabit, and al-Baghawi simply jibalan, mountains.",
            "bn": "আয়াতে দানটির পরিচয় দুটি বিশেষণে, কোনো বিশেষ্য নেই: রাওয়াসি মানে অনড়েরা, আর শামিখাত মানে সুউচ্চেরা। বিশেষ্যটা জুড়ে দেন তাফসীরকারেরা, আর সবাই একই শব্দ জোড়েন। তাবারী কাতাদার একটি বর্ণনা আনেন, তাতে শুধু এটুকু: ইয়া'নী আল-জিবাল, অর্থাৎ পাহাড়। কুরতুবীও একই কথা লেখেন, তারপর প্রথম শব্দের সংজ্ঞা দেন: আর-রাওয়াসি আছ-ছাওয়াবিত, রাওয়াসি হলো যেগুলো স্থির ও অটল। তাবারী নিজের ভাষায় লেখেন: জিবালান ছাবিতাতিন ফীহা, পৃথিবীতে গেঁথে থাকা পাহাড়। মুয়াসসার লেখে জিবালান ছাওয়াবিত, আর বাগাভী শুধু জিবালান, পাহাড়।"
          },
          {
            "en": "As-Sa'di reads the word the other way round. For him the rawasi are jibalan tursi al-ard, mountains that anchor the earth, li-alla tamida bi-ahliha, so that it does not sway with its people, and he adds fa-thabbataha Allah, so Allah made it steady. Ibn Kathir writes al-jibal rasa biha al-ard, the mountains by which He made the earth firm, li-alla tamida wa tadtarib, so that it does not sway and shake. On at-Tabari's and al-Qurtubi's gloss the mountains are fixed; on as-Sa'di's and Ibn Kathir's they fix the earth.",
            "bn": "সা'দী শব্দটা পড়েন উল্টো দিক থেকে। তাঁর কাছে রাওয়াসি হলো জিবালান তুরসিল আরদ, যে পাহাড় পৃথিবীকে নোঙর করে রাখে, লি-আল্লা তামীদা বি-আহলিহা, যাতে তা বাসিন্দাদের নিয়ে দুলে না যায়। সঙ্গে যোগ করেন: ফা-ছাব্বাতাহাল্লাহ, এভাবে আল্লাহ তাকে স্থির করেছেন। ইবন কাসীর লেখেন: আল-জিবাল রাসা বিহাল আরদ, যে পাহাড় দিয়ে তিনি পৃথিবীকে অটল করেছেন, লি-আল্লা তামীদা ওয়া তাদতারিব, যাতে তা না দোলে, না কাঁপে। তাবারী আর কুরতুবীর ব্যাখ্যায় পাহাড় নিজে অটল। সা'দী আর ইবন কাসীরের ব্যাখ্যায় পাহাড় পৃথিবীকে অটল রাখে।"
          },
          {
            "en": "The two glosses do not compete; the word bears both. What matters is where the purpose clause appears. Three of the sources for this verse give it: Ibn Kathir, as-Sa'di and the Muyassar, whose wording is li-alla tadtariba bikum, so that it does not shake with you. At-Tabari, al-Qurtubi and al-Baghawi give no purpose here at all. None of the seven says how the steadying works, and this article adds nothing to what they say. The fuller treatment of mountains as what holds the earth still is read at 50:7 and 31:10.",
            "bn": "দুই ব্যাখ্যার মধ্যে কোনো বিরোধ নেই, শব্দটা দুটো অর্থই বহন করে। দেখার বিষয় হলো, উদ্দেশ্যের কথাটা কোথায় আছে। এ আয়াতের তিনটি উৎস তা বলে: ইবন কাসীর, সা'দী আর মুয়াসসার। মুয়াসসারের ভাষা: লি-আল্লা তাদতারিবা বিকুম, যাতে তা তোমাদের নিয়ে কেঁপে না ওঠে। তাবারী, কুরতুবী আর বাগাভী এখানে কোনো উদ্দেশ্যের কথাই বলেন না। স্থির রাখার কাজটা কীভাবে ঘটে, সাতটি উৎসের কোনোটিই তা বলে না, আর এ লেখাও তাদের কথার বাইরে কিছু যোগ করে না। পাহাড় যে পৃথিবীকে স্থির রাখে, সে আলোচনা বিস্তারিত পড়া যাবে ৫০:৭ ও ৩১:১০ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "How High Is Shamikh?",
          "bn": "শামিখ কতটা উঁচু?"
        },
        "p": [
          {
            "en": "The second word draws more glosses than the first. At-Tabari gives a pair, badhikhatin shahiqatin, towering and soaring. By a chain ending in Ibn 'Abbas he brings: jibalan mushrifatin, mountains that look down over what lies around them. Al-Baghawi and the Muyassar both write 'aliyat, high. Al-Qurtubi writes al-tiwal, the tall ones. As-Sa'di alone gives two dimensions, al-tiwal al-'irad, tall and broad.",
            "bn": "প্রথম শব্দের চেয়ে দ্বিতীয় শব্দের ব্যাখ্যা বেশি। তাবারী দেন একজোড়া শব্দ: বাযিখাতিন শাহিকাতিন, আকাশছোঁয়া, সুউচ্চ। ইবন আব্বাস (রাঃ) পর্যন্ত পৌঁছানো এক সূত্রে তিনি আনেন: জিবালান মুশরিফাতিন, এমন পাহাড় যা চারপাশের সবকিছুর উপর দিয়ে তাকিয়ে থাকে। বাগাভী ও মুয়াসসার দুজনেই লেখেন আলিয়াত, উঁচু। কুরতুবী লেখেন আত-তিওয়াল, দীর্ঘ। শুধু সা'দী দুটো মাপ দেন: আত-তিওয়াল আল-ইরাদ, লম্বা ও চওড়া।"
          },
          {
            "en": "Al-Qurtubi then gives the word's everyday use: wa minhu yuqalu shamakha bi-anfihi idha rafa'ahu kibran, from it people say that a man shamakha with his nose when he raises it in pride. He draws no lesson from it, and none is claimed for him. A reader may still notice what the verse sets beside that usage. The mountain's height was placed there; ja'alna, We placed, is the verb that governs it. A man who raises his nose has nothing of that kind to point to, since nothing in him was set up by his own hand.",
            "bn": "এরপর কুরতুবী শব্দটির দৈনন্দিন ব্যবহার দেখান: ওয়া মিনহু ইউকালু শামাখা বি-আনফিহী ইযা রাফাআহু কিবরান। অর্থাৎ কেউ অহংকারে নাক উঁচু করলে বলা হয়, সে শামাখা করেছে। কুরতুবী এ থেকে কোনো শিক্ষা টানেন না, তাঁর নামে কোনো শিক্ষা দাবিও করা হচ্ছে না। তবু পাঠক খেয়াল করতে পারেন, আয়াত ওই ব্যবহারের পাশে কী রাখছে। পাহাড়ের উচ্চতা বসিয়ে দেওয়া হয়েছে। যে ক্রিয়ার অধীনে এটা এসেছে, তা হলো জাআলনা, আমি স্থাপন করেছি। নাক উঁচু করা মানুষের হাতে এমন কিছু নেই যা দেখিয়ে সে গর্ব করতে পারে, কারণ তার ভেতরের কোনো কিছুই সে নিজের হাতে বসায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Sweet, Clear, Easy to Swallow",
          "bn": "মিঠা, স্বচ্ছ, সহজে গেলা যায়"
        },
        "p": [
          {
            "en": "Then the second gift: wa asqaynakum ma'an furata, and We gave you sweet water to drink. On furat the early readers agree on a single word. At-Tabari glosses it 'adhban, sweet, and backs the gloss with three reports, from Ibn 'Abbas, from Mujahid and from Qatada, each saying 'adhban. He adds that the people of interpretation said the like. Ibn Kathir and as-Sa'di both write 'adhban zulalan, sweet and clear. The Muyassar writes 'adhban sa'ighan, sweet and easy to swallow, and al-Baghawi keeps to the single word 'adhban.",
            "bn": "এরপর দ্বিতীয় দান: ওয়া আসকাইনাকুম মাআন ফুরাতা, আর তোমাদের পান করিয়েছি মিঠা পানি। ফুরাত শব্দের অর্থে পূর্বসূরিরা এক শব্দে একমত। তাবারী এর ব্যাখ্যা করেন আযবান, মিঠা। নিজের ব্যাখ্যার পক্ষে তিনি আনেন তিনটি বর্ণনা: ইবন আব্বাস (রাঃ), মুজাহিদ ও কাতাদা থেকে, প্রত্যেকেই বলেছেন আযবান। সঙ্গে বলেন, তাফসীরবিদেরা এমনটাই বলেছেন। ইবন কাসীর ও সা'দী দুজনেই লেখেন আযবান যুলালান, মিঠা ও স্বচ্ছ। মুয়াসসার লেখে আযবান সাইগান, মিঠা আর সহজে গলা দিয়ে নামে। বাগাভী থাকেন এক শব্দেই: আযবান।"
          },
          {
            "en": "Al-Qurtubi looks at the verb as well as the noun. He glosses asqaynakum as ja'alna lakum suqyan, We made for you a supply to drink from, and defines furat as the sweet water that is drunk and with which crops are watered. On his reading the gift is not a single cup handed over but a standing provision, reaching the field as well as the mouth. He then sums up the verse in a single line: khalaqna al-jibal wa anzalna al-ma' al-furat, We created the mountains and sent down the sweet water.",
            "bn": "কুরতুবী শুধু বিশেষ্য নয়, ক্রিয়াটার দিকেও তাকান। আসকাইনাকুম-এর অর্থ তিনি করেন জাআলনা লাকুম সুকইয়ান, তোমাদের জন্য পান করার ব্যবস্থা করে দিয়েছি। আর ফুরাতের সংজ্ঞা দেন: সেই মিঠা পানি, যা মানুষ পান করে আর যা দিয়ে ফসলে সেচ দেওয়া হয়। তাঁর পাঠে দানটা এক গ্লাস পানি হাতে তুলে দেওয়া নয়। এ এক স্থায়ী ব্যবস্থা, যা মুখ পর্যন্ত পৌঁছায়, ক্ষেত পর্যন্তও। তারপর এক লাইনে তিনি পুরো আয়াতের সারকথা বলেন: খালাকনাল জিবালা ওয়া আনযালনাল মাআল ফুরাত, আমি পাহাড় সৃষ্টি করেছি আর মিঠা পানি নাযিল করেছি।"
          },
          {
            "en": "Where does the water come from? Ibn Kathir names two sources in a single clause: min al-sahab aw mimma anba'ahu min 'uyun al-ard, from the clouds, or from what He made gush out of the springs of the earth. As-Sa'di, after his gloss, quotes 56:68 to 56:70: have you seen the water you drink, did you bring it down from the rain-clouds or are We the ones who bring it down? If We willed, We could make it bitter; so why do you not give thanks? That passage is read at 56:69 and is not retold here.",
            "bn": "পানি আসে কোথা থেকে? ইবন কাসীর এক বাক্যে দুটি উৎসের নাম বলেন: মিনাস সাহাব আও মিম্মা আনবাআহু মিন উয়ূনিল আরদ, মেঘ থেকে, অথবা মাটির ঝরনা থেকে যা তিনি উৎসারিত করেছেন। সা'দী নিজের ব্যাখ্যার পর উদ্ধৃত করেন ৫৬:৬৮ থেকে ৫৬:৭০ আয়াত: যে পানি তোমরা পান করো, তা কি তোমরা মেঘ থেকে নামিয়েছ, নাকি আমিই নামাই? চাইলে আমি তা লোনা-তিতা করে দিতে পারতাম, তবু কেন তোমরা শোকর করো না? ওই আয়াতগুলোর আলোচনা আছে ৫৬:৬৯ আয়াতে, এখানে তা আর বলা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Shared With a River",
          "bn": "যে শব্দ একটি নদীরও নাম"
        },
        "p": [
          {
            "en": "Furat is also the name of a river, the Euphrates, and both at-Tabari and al-Qurtubi bring reports that touch it. At-Tabari, after his gloss, relays a report from Ibn 'Abbas by a chain through 'Ikrima: from four rivers, Sayhan, Jayhan, the Nile and the Euphrates; every water the son of Adam drinks is from these rivers, and they come out from under a rock near Bayt al-Maqdis. It is a Companion's statement as at-Tabari carries it, not words of the Prophet ﷺ. At-Tabari gives it no grading and does not adopt it; his own gloss stays 'adhban.",
            "bn": "ফুরাত একটি নদীরও নাম, ইউফ্রেটিস। তাবারী ও কুরতুবী দুজনেই এ নিয়ে কিছু বর্ণনা আনেন। তাবারী নিজের ব্যাখ্যার পর ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা উল্লেখ করেন: পানি আসে চারটি নদী থেকে, সাইহান, জাইহান, নীল আর ফুরাত। আদমসন্তান যে পানিই পান করে, তা এই নদীগুলোরই। আর নদীগুলো বের হয় বাইতুল মাকদিসের কাছে একটি পাথরের নিচ থেকে। তাবারী যেভাবে এনেছেন, তাতে এটা একজন সাহাবীর কথা, নবী ﷺ-এর বাণী নয়। তাবারী এর কোনো মান নির্ধারণ করেন না, গ্রহণও করেন না। তাঁর নিজের ব্যাখ্যা আযবান, মিঠা, সেখানেই থাকে।"
          },
          {
            "en": "Al-Qurtubi brings two items. The first is a saying of Abu Hurayra, introduced only with in some hadith, that names rivers of Paradise in the earth; he gives no collection and no chain, so it is noted and not used. The second he cites to Sahih Muslim, and it is confirmed there (Muslim 2839): Abu Huraira reported Allah's Messenger (ﷺ) as saying: Saihan, Jaihan, Euphrates and Nile are all among the rivers of Paradise. Muslim placed it in his Sahih. The same narration is read at 26:57.",
            "bn": "কুরতুবী দুটি জিনিস আনেন। প্রথমটি আবু হুরায়রা (রাঃ)-এর একটি উক্তি, যা তিনি শুধু 'কোনো এক হাদীসে' বলে শুরু করেন। তাতে পৃথিবীতে জান্নাতের কিছু নদীর নাম আছে। কুরতুবী কোনো গ্রন্থ বা সনদের নাম দেন না, তাই এখানে কেবল উল্লেখ করা হলো, এর উপর কিছু দাঁড় করানো হলো না। দ্বিতীয়টির সূত্র তিনি দেন সহীহ মুসলিম, আর সেখানে তা পাওয়া যায় (মুসলিম ২৮৩৯): আবু হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: সাইহান, জাইহান, ফুরাত ও নীল, প্রতিটিই জান্নাতের নদীগুলোর একটি। মুসলিম এটি তাঁর সহীহ গ্রন্থে স্থান দিয়েছেন। একই হাদীস পড়া যাবে ২৬:৫৭ আয়াতে।"
          },
          {
            "en": "What does the hadith add to this verse? Only what al-Qurtubi uses it for: the water the verse calls furat shares its name with a river the Prophet ﷺ counted among the rivers of Paradise. The hadith does not explain the verse's word, and none of the commentators reads ma'an furata as meaning that river alone. The verse speaks of every sweet water given to drink; the river is one water among them.",
            "bn": "এ হাদীস আয়াতে কী যোগ করে? কুরতুবী যে কাজে এটা ব্যবহার করেছেন, শুধু সেটুকু। আয়াত যে পানিকে ফুরাত বলছে, সেই নাম এমন এক নদীরও, যাকে নবী ﷺ জান্নাতের নদীগুলোর মধ্যে গুনেছেন। হাদীসটি আয়াতের শব্দের ব্যাখ্যা নয়। কোনো তাফসীরকারই মাআন ফুরাতা বলতে কেবল ওই নদীকে বোঝেননি। আয়াতের কথা সব মিঠা পানির, যা মানুষকে পান করানো হয়েছে। নদীটা তার মধ্যে একটি মাত্র।"
          }
        ]
      },
      {
        "h": {
          "en": "Greater Wonders Than the Raising",
          "bn": "পুনরুত্থানের চেয়েও বড় বিস্ময়"
        },
        "p": [
          {
            "en": "Why set mountains and water in a surah about the Day of Decision? Al-Qurtubi answers in one sentence, right after his summary of the verse: wa hadhihi al-umur a'jabu min al-ba'th, and these matters are more wondrous than the resurrection. Al-Baghawi, commenting on 77:28, gives the same thought to Muqatil: wa hadha kulluhu a'jabu min al-ba'th, and all of this is more wondrous than the resurrection. Muqatil's kulluhu, all of it, reads most naturally as gathering what came since the last refrain: the ground, the mountains and the water.",
            "bn": "কিয়ামতের ফয়সালার দিন নিয়ে যে সূরা, তাতে পাহাড় আর পানির কথা কেন? কুরতুবী উত্তর দেন এক বাক্যে, আয়াতের সারকথা বলার ঠিক পরেই: ওয়া হাযিহিল উমূরু আ'জাবু মিনাল বা'ছ, আর এ বিষয়গুলো পুনরুত্থানের চেয়েও বেশি বিস্ময়কর। বাগাভী ৭৭:২৮ আয়াতের আলোচনায় একই কথা আনেন মুকাতিলের নামে: ওয়া হাযা কুল্লুহু আ'জাবু মিনাল বা'ছ, এসবই পুনরুত্থানের চেয়ে বেশি বিস্ময়কর। মুকাতিলের 'কুল্লুহু', এসবই, শব্দটিকে স্বাভাবিকভাবে পড়া যায় আগের ধুয়ার পর থেকে যা এসেছে তার সমষ্টি হিসেবে: মাটি, পাহাড় আর পানি।"
          },
          {
            "en": "Neither of them spells out the reasoning, but the shape of it is plain from the sentence. The listener who doubted that the dead would rise had never doubted the mountain on his horizon or the water in his cup. Both are larger works, by this reading, than the one he denied. The verse does not argue the point; it shows him what he already accepts and lets the comparison do its work. That is why the refrain can follow at once, without a word of argument in between.",
            "bn": "দুজনের কেউই যুক্তিটা খুলে বলেননি, তবে বাক্যের গড়ন থেকেই তা পরিষ্কার। যে শ্রোতা মৃতদের আবার জীবিত হওয়ায় সন্দেহ করত, সে কখনো দিগন্তের পাহাড় বা হাতের পানির পাত্র নিয়ে সন্দেহ করেনি। এই ব্যাখ্যা অনুযায়ী দুটোই সেই কাজের চেয়ে বড়, যা সে অস্বীকার করছিল। আয়াত তর্কে নামে না। সে যা আগে থেকেই মেনে নিয়েছে, শুধু সেটাই চোখের সামনে রাখে, আর তুলনাটা নিজের কাজ নিজেই করে। তাই মাঝখানে যুক্তির একটি কথাও না বলে সঙ্গে সঙ্গে ধুয়াটা আসতে পারে।"
          },
          {
            "en": "Ibn Kathir frames the same step differently. On 77:28 he writes: ay waylun li-man ta'ammala hadhihi al-makhluqat al-dallah 'ala 'azamati khaliqiha thumma ba'da hadha yastamirru 'ala takdhibihi wa kufrih, woe to whoever reflects on these created things that point to the greatness of their Creator, and then after this persists in his denial and disbelief. For him the mountains and the water are evidence, dallah, pointing beyond themselves. The woe falls on the one who has looked and still turns away.",
            "bn": "ইবন কাসীর একই ধাপটা দেখান অন্যভাবে। ৭৭:২৮ আয়াতে তিনি লেখেন: আই ওয়াইলুন লি-মান তাআম্মালা হাযিহিল মাখলূকাতিদ দাল্লাতি আলা আযামাতি খালিকিহা, ছুম্মা বা'দা হাযা ইয়াসতামিররু আলা তাকযীবিহী ওয়া কুফরিহ। অর্থাৎ দুর্ভোগ তার জন্য, যে এই সৃষ্টিগুলো নিয়ে ভাবে, যা স্রষ্টার মহত্ত্বের দিকে ইশারা করে, তারপরও মিথ্যারোপ আর কুফরিতে অটল থাকে। তাঁর কাছে পাহাড় আর পানি প্রমাণ, দাল্লাহ, যা নিজেদের ছাড়িয়ে অন্য কিছুর দিকে দেখায়। দুর্ভোগ নামে তার উপর, যে দেখেছে, তবু মুখ ফিরিয়ে নিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Woe Measured to the Denial",
          "bn": "অস্বীকারের মাপে দুর্ভোগ"
        },
        "p": [
          {
            "en": "The refrain that follows, 77:28, is the same three words the surah has already used: waylun yawma'idhin lil-mukadhdhibin, woe that Day to the deniers. Here the commentators tie it to what has just been shown. At-Tabari: woe that Day to those who deny these favours that I bestowed on you from My creation, disbelieving in them. As-Sa'di: woe to them despite the favours Allah showed them, which He alone grants and with which He singled them out, and they met them with denial. On both readings the denial named here is the denial of a gift.",
            "bn": "পরের আয়াত ৭৭:২৮ সেই তিনটি শব্দের ধুয়া, যা সূরায় আগেও এসেছে: ওয়াইলুঁই ইয়াওমাইযিল লিল মুকাযযিবীন, সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। এখানে তাফসীরকারেরা একে সদ্য দেখানো জিনিসগুলোর সঙ্গে বাঁধেন। তাবারী বলেন: সেদিন দুর্ভোগ তাদের, যারা আমার সৃষ্টি থেকে তোমাদের দেওয়া এই নিয়ামতগুলো অস্বীকার করে, এগুলোর প্রতি কুফরি করে। সা'দী বলেন: আল্লাহ তাদের যে নিয়ামত দেখিয়েছেন, যা তিনি একাই দেন আর বিশেষ করে তাদেরই দিয়েছেন, তার জবাবে তারা দিয়েছে মিথ্যারোপ। দুই ব্যাখ্যাতেই এখানকার অস্বীকার মানে দানকে অস্বীকার।"
          },
          {
            "en": "So the passage carries two emphases, and the sources leave them side by side. At-Tabari and as-Sa'di put the weight on ingratitude: the gift was met with denial. Al-Qurtubi and Muqatil put it on proof: the gift is greater than the Return, so denying the Return makes no sense. Ibn Kathir sits close to the second, with the created things as evidence. None of them rejects the other's emphasis, and this article does not choose between them.",
            "bn": "তাহলে এ অংশে জোর পড়ে দুই জায়গায়, আর উৎসগুলো দুটোকে পাশাপাশি রেখে দেয়। তাবারী ও সা'দী জোর দেন অকৃতজ্ঞতায়: দানের জবাবে এসেছে অস্বীকার। কুরতুবী ও মুকাতিল জোর দেন প্রমাণে: দানটা পুনরুত্থানের চেয়েও বড়, তাই পুনরুত্থান অস্বীকারের কোনো যুক্তি নেই। ইবন কাসীর দ্বিতীয়টির কাছাকাছি, তাঁর কাছে সৃষ্টিগুলো প্রমাণ। কেউই অন্যের জোরকে নাকচ করেন না, আর এ লেখাও তাঁদের মধ্যে কোনো একটিকে বেছে নেয় না।"
          },
          {
            "en": "Al-Qurtubi's note on the refrain explains why it returns. He says it is repeated at each sign because the woe is divided among the deniers according to their denial: whoever denies one thing has a punishment beyond his denial of another, and some denials are graver, so each receives woe in that measure, which is His word jaza'an wifaqa, a fitting recompense (78:26). He also relays, without chain or collection, that wayl is a valley in Jahannam, with a report raised to the Prophet ﷺ; it is not graded there, and nothing here rests on it.",
            "bn": "ধুয়াটা কেন বারবার ফিরে আসে, কুরতুবী তার ব্যাখ্যা দেন। তাঁর মতে প্রতিটি নিদর্শনের পর এটা আসে, কারণ দুর্ভোগ মিথ্যারোপকারীদের মধ্যে ভাগ করা হয় তাদের অস্বীকারের মাপে। যে এক জিনিস অস্বীকার করে, অন্য জিনিস অস্বীকারের শাস্তির বাইরে তার জন্য আলাদা শাস্তি আছে। আর কোনো কোনো অস্বীকার বেশি গুরুতর। তাই প্রত্যেকে দুর্ভোগ পায় সেই মাপে। এটাই আল্লাহর বাণী জাযাআঁও ওয়িফাকা, যথাযথ প্রতিফল (৭৮:২৬)। কুরতুবী সনদ বা গ্রন্থের নাম ছাড়া এ কথাও আনেন যে ওয়াইল জাহান্নামের একটি উপত্যকা, সঙ্গে নবী ﷺ-এর দিকে সম্পৃক্ত একটি বর্ণনা। সেখানে এর কোনো মান বলা নেই, আর এখানে এর উপর কিছুই দাঁড় করানো হয়নি।"
          },
          {
            "en": "The refrain describes the deniers as the text describes them, on that Day, and it licenses nothing against any living person or community. No reader is handed a list on which to place a neighbour. The verse before it has just reminded every listener of water drunk and ground stood on, and the question the woe leaves behind is about the reader's own response to those gifts, not about anyone else's.",
            "bn": "ধুয়াটি মিথ্যারোপকারীদের বর্ণনা দেয় যেভাবে আয়াত দিয়েছে, সেই দিনের প্রেক্ষাপটে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটা কোনো অনুমতি দেয় না। কোনো পাঠকের হাতে এমন তালিকা দেওয়া হয়নি, যাতে সে প্রতিবেশীর নাম বসাবে। ঠিক আগের আয়াত প্রত্যেক শ্রোতাকে মনে করিয়ে দিয়েছে কোন পানি সে পান করে, কোন মাটিতে দাঁড়িয়ে থাকে। দুর্ভোগের কথা যে প্রশ্ন রেখে যায়, তা পাঠকের নিজের জবাব নিয়ে, অন্য কারও নয়।"
          }
        ]
      }
    ]
  },
  "77:31-32": {
    "sections": [
      {
        "h": {
          "en": "Marched Towards a Shadow",
          "bn": "ছায়ার দিকে হাঁকিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Two commands frame these verses. In 77:29 the deniers are told intaliqu: set off towards what you used to call a lie. In 77:30 the order comes again, this time with a destination: a shadow of three branches. Al-Muyassar spells out the scene. On the Day of Resurrection the disbelievers are told to go on to the punishment of Jahannam they denied in the world, and to take shade in the smoke of Jahannam, from which three pieces branch off. Verse 31 then says what kind of shade it is.",
            "bn": "এ আয়াতগুলোর আগে আছে দুটি হুকুম, সেগুলোই প্রেক্ষাপট তৈরি করে। ৭৭:২৯ আয়াতে অস্বীকারকারীদের বলা হয়, ইনতালিকূ: চলো সেই জিনিসের দিকে, যাকে তোমরা মিথ্যা বলতে। ৭৭:৩০ আয়াতে একই হুকুম আবার আসে, এবার গন্তব্যসহ: তিন শাখাওয়ালা এক ছায়া। মুয়াসসার দৃশ্যটা খুলে বলে। কিয়ামতের দিন কাফিরদের বলা হবে, দুনিয়ায় যে জাহান্নামের আযাবকে তোমরা অস্বীকার করতে, সেদিকে চলো। চলো, জাহান্নামের ধোঁয়ার নিচে ছায়া নাও, যা থেকে তিনটি টুকরো বেরিয়ে আলাদা হয়ে গেছে। সে ছায়া কেমন, ৩১ নম্বর আয়াত তা জানিয়ে দেয়।"
          },
          {
            "en": "Ibn Kathir names it the same way: the shade of the smoke that faces the flame. The English abridgement of his tafsir gives the picture of a flame rising and climbing with smoke, which by its severity and force splits into three columns. The two verses studied here describe that shade and then the Fire behind it: la zalilin wa la yughni mina l-lahab, no shading and no help against the flame; then innaha tarmi bi-shararin ka-l-qasr, it throws sparks like al-qasr. What al-qasr means divides the commentators more than anything else here.",
            "bn": "ইবন কাসীরও একে একই নাম দেন: আগুনের শিখার মুখোমুখি থাকা ধোঁয়ার ছায়া। তাঁর তাফসীরের ইংরেজি সংক্ষেপে ছবিটা এমন: আগুনের শিখা ধোঁয়া নিয়ে উপরে উঠছে, আর প্রচণ্ডতা ও জোরের কারণে তিনটি স্তম্ভে ভাগ হয়ে যাচ্ছে। এখানে আলোচ্য দুটি আয়াত প্রথমে সেই ছায়ার বর্ণনা দেয়, তারপর তার পেছনের আগুনের। লা যালীলিন ওয়া লা ইউগনী মিনাল লাহাব: ছায়াও দেয় না, শিখা থেকেও বাঁচায় না। তারপর ইন্নাহা তারমী বিশারারিন কালকাসর: সে আগুন কাসরের মতো স্ফুলিঙ্গ ছুড়ে মারে। এই কাসর মানে কী, তা নিয়েই তাফসীরকারদের মতভেদ সবচেয়ে বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "Shade in Name Only",
          "bn": "নামেই শুধু ছায়া"
        },
        "p": [
          {
            "en": "At-Tabari reads la zalil as: it does not shade them from the Fire's heat, and wa la yughni mina l-lahab as: it does not shelter them from its flame. Al-Qurtubi says it is not like the shade that guards against the heat of the sun, and it repels nothing of the flame of Jahannam. He defines lahab as what rises above a fire when it blazes, red, yellow and green. Al-Baghawi cites al-Kalbi: it does not turn the flame of Jahannam away from you. When they seek its shade, it keeps none of the heat off them.",
            "bn": "তাবারী লা যালীলের অর্থ করেন: আগুনের তাপ থেকে তা তাদের ছায়া দেয় না। আর ওয়া লা ইউগনী মিনাল লাহাবের অর্থ: তার শিখা থেকে তাদের আড়াল করে না। কুরতুবী বলেন, রোদের তাপ থেকে বাঁচানো ছায়ার মতো এটা নয়, জাহান্নামের শিখার কিছুই তা ঠেকায় না। লাহাবের সংজ্ঞাও তিনি দেন: আগুন দাউ দাউ করে জ্বলে উঠলে তার উপরে যা ওঠে, লাল, হলুদ আর সবুজ। বাগাভী কালবীর কথা আনেন: সে ছায়া জাহান্নামের শিখাকে তোমাদের থেকে ফেরাবে না। মানে, তারা সেই ছায়ার নিচে আশ্রয় নিলেও শিখার তাপ একটুও সরবে না।"
          },
          {
            "en": "As-Sa'di takes the words past heat alone. La zalil, he says, means there is no rest in that shade and no calm; and it does not help whoever stays in it against the flame, because the flame has already surrounded him, right and left and from every side. He sets beside it 39:16, canopies of fire above them and canopies beneath, and 7:41, a bed of Jahannam with coverings over them. Ibn Kathir's phrase is shorter still: the smoke is not shading in itself. The word that promises cover is the thing that fails.",
            "bn": "সা'দী কথাটাকে শুধু তাপের মধ্যে আটকে রাখেন না। তাঁর মতে লা যালীল মানে সেই ছায়ায় কোনো আরাম নেই, কোনো স্থিরতাও নেই। আর যে সেখানে থাকে, শিখা থেকে তা তাকে বাঁচায় না, কারণ শিখা আগেই তাকে ডানে, বামে, সব দিক থেকে ঘিরে ফেলেছে। পাশে তিনি রাখেন ৩৯:১৬ আয়াত: তাদের উপরে আগুনের আচ্ছাদন, নিচেও আচ্ছাদন। আর ৭:৪১ আয়াত: জাহান্নামের বিছানা, উপরে জাহান্নামেরই চাদর। ইবন কাসীরের কথা আরও ছোট: ধোঁয়াটা নিজেই কোনো ছায়া দেয় না। যে শব্দ আড়ালের আশা জাগায়, ঠিক সেটাই এখানে ব্যর্থ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Three Branches Are",
          "bn": "তিন শাখা আসলে কী"
        },
        "p": [
          {
            "en": "Al-Qurtubi gathers what was said about the three branches, most of it under the words it was said. Ad-Dahhak named them: dari', zaqqum and ghislin. Another view: flame, then sparks, then smoke, the three states that mark a fire at its fiercest. Another: a neck of fire comes out and splits three ways. Light stands over the heads of the believers, smoke over the hypocrites, and pure flame over the disbelievers. These are reports he records, not a picture the verse itself spells out.",
            "bn": "তিন শাখা নিয়ে যা বলা হয়েছে, কুরতুবী তা এক জায়গায় জড়ো করেন। বেশির ভাগই আসে 'বলা হয়েছে' কথাটি দিয়ে। দাহহাক তিনটির নাম বলেছেন: দারী', যাক্কুম আর গিসলীন। আরেক মত: আগে শিখা, তারপর স্ফুলিঙ্গ, তারপর ধোঁয়া। আগুন যখন সবচেয়ে প্রচণ্ড, তখন তার এই তিন অবস্থাই চোখে পড়ে। আরেক মত: আগুন থেকে একটা গলার মতো অংশ বেরিয়ে তিন ভাগ হয়ে যায়। আলো থাকে মুমিনদের মাথার উপর, ধোঁয়া মুনাফিকদের উপর, আর খাঁটি শিখা কাফিরদের উপর। এগুলো তাঁর উদ্ধৃত বর্ণনা। আয়াত নিজে এ ছবি খুলে বলে না।"
          },
          {
            "en": "Two more follow. It is the suradiq, a tongue of fire that encloses them and then branches into three, shading them until their reckoning is over. Or it is the shade of yahmum, which al-Qurtubi links to 56:43 and 56:44: a shade of yahmum, neither cool nor kind. He does not choose among them. The smoke reading is what al-Muyassar and Ibn Kathir carry, and Ibn Kathir explains the three columns by the flame's force. The others stand as he left them, as views reported and not settled.",
            "bn": "আরও দুটি মত আছে। এক, এটা সুরাদিক: আগুনের এক জিহ্বা, যা তাদের ঘিরে ফেলে, তারপর তিনটি শাখায় ভাগ হয়ে হিসাব শেষ না হওয়া পর্যন্ত তাদের উপর ছায়া ফেলে রাখে। দুই, এটা ইয়াহমূমের ছায়া। কুরতুবী একে জোড়েন ৫৬:৪৩ ও ৫৬:৪৪ আয়াতের সঙ্গে: ইয়াহমূমের ছায়া, যা ঠান্ডাও নয়, আরামদায়কও নয়। এগুলোর কোনোটিকে তিনি বেছে নেন না। ধোঁয়ার ব্যাখ্যাটা মুয়াসসার আর ইবন কাসীরের, আর তিন স্তম্ভের কারণ হিসেবে ইবন কাসীর শিখার প্রচণ্ডতার কথা বলেন। বাকিগুলো তিনি যেমন রেখেছেন, তেমনই থাকুক: বর্ণিত মত, মীমাংসিত নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sparks Flung Every Way",
          "bn": "চারদিকে ছিটকে পড়া স্ফুলিঙ্গ"
        },
        "p": [
          {
            "en": "Innaha, it: al-Baghawi and at-Tabari both say the pronoun is Jahannam. Sharar, al-Qurtubi explains, is whatever flies off a fire in every direction, and its singular is shararah. He traces the word to sharartu th-thawb, said when you spread a garment out in the sun to dry, an image of something spread and scattered. As-Sa'di reads the size of the sparks as a sign of the size of the Fire itself. They show, he says, its vastness and horror, and how ugly it is to look upon.",
            "bn": "ইন্নাহা, অর্থাৎ সে: বাগাভী আর তাবারী দুজনেই বলেন, এ সর্বনাম জাহান্নামের দিকে ফিরেছে। কুরতুবী বলেন, শারার হলো আগুন থেকে চারদিকে যা ছিটকে যায়, তার একবচন শারারাহ। শব্দটার মূল তিনি খুঁজে পান শারারতুস সাওব কথাটিতে। কাপড় শুকাতে রোদে মেলে দিলে আরবরা এভাবে বলে। মানে, মেলে দেওয়া আর ছড়িয়ে দেওয়ার ছবি। সা'দী স্ফুলিঙ্গের আকার থেকে আগুনের আকার বুঝে নেন। তাঁর মতে এগুলো জানিয়ে দেয় জাহান্নাম কত বিশাল, কত ভয়ংকর, আর দেখতে কত কুৎসিত।"
          },
          {
            "en": "At-Tabari pauses on a point of grammar. Sharar is plural, yet the comparison is ka-l-qasr, singular. He records two explanations. The singular may stand for the plural to keep the verse endings in step, as in 54:45, where dubur serves for backs. Or the meaning may be like the size of a palace, the likeness lying in a quality and not in the thing, as in 33:19, eyes rolling like a man fainting at death. Al-Muyassar's paraphrase follows the second: each spark like a towering building in size and height.",
            "bn": "তাবারী এখানে একটু ব্যাকরণের দিকে তাকান। শারার বহুবচন, অথচ তুলনা করা হয়েছে কালকাসর দিয়ে, যা একবচন। এর দুটি ব্যাখ্যা তিনি উল্লেখ করেন। এক, আয়াতের শেষগুলোর মিল রাখতে একবচন দিয়ে বহুবচন বোঝানো হয়েছে, যেমন ৫৪:৪৫ আয়াতে দুবুর শব্দটি সবার পিঠ বোঝায়। দুই, অর্থটা হলো প্রাসাদের আকারের মতো। তুলনা এখানে বস্তুর সঙ্গে নয়, তার গুণের সঙ্গে, যেমন ৩৩:১৯ আয়াতে মৃত্যুর ঘোরে অচেতন মানুষের মতো চোখ ঘোরানোর তুলনা। মুয়াসসারের ব্যাখ্যা দ্বিতীয়টিরই পথ ধরে: প্রতিটি স্ফুলিঙ্গ আকারে আর উচ্চতায় সুউচ্চ দালানের মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Palace or Winter Logs",
          "bn": "প্রাসাদ, নাকি শীতের কাঠ"
        },
        "p": [
          {
            "en": "At-Tabari reports that those who read al-qasr with a still sad differed over its meaning. One group took it as the singular of qusur, palaces. He gives this from Ibn Abbas through Ali ibn Abi Talhah, like the great palace, and from al-Qurazi, who said that a wall surrounds Jahannam, and what flies out beyond it is the size of a palace and the colour of tar. Ibn Mas'ud's gloss, in al-Baghawi and Ibn Kathir, is: like fortresses.",
            "bn": "তাবারী জানান, যাঁরা কাসর শব্দের সোয়াদে সাকিন দিয়ে পড়েছেন, অর্থ নিয়ে তাঁদের মধ্যেই মতভেদ হয়েছে। একটি দলের মতে এটা কুসূর অর্থাৎ প্রাসাদের একবচন। এ মত তিনি আনেন আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে: বিশাল প্রাসাদের মতো। কুরাযী থেকেও আনেন। তিনি বলতেন, জাহান্নামের চারপাশে এক প্রাচীর আছে। প্রাচীরের ওপারে যা ছিটকে যায়, তা আকারে প্রাসাদের মতো, রঙে আলকাতরার মতো। বাগাভী আর ইবন কাসীরে ইবন মাসউদ (রাঃ)-এর ব্যাখ্যা: দুর্গের মতো।"
          },
          {
            "en": "The other group took it as thick timber, like palm trunks. At-Tabari gives this from Ibn Abbas through Abd al-Rahman ibn Abis: wood we stored for winter, three cubits long, more or less, and we called it al-qasr. Mujahid has bundles of trees; Qatadah, the bases of trees and palms; ad-Dahhak, the bases of great trees. Ibn Kathir lists Ibn Abbas, Mujahid, Qatadah and Zayd ibn Aslam for tree trunks, and al-Baghawi adds Sa'id ibn Jubayr beside ad-Dahhak. In at-Tabari's chains, Ibn Abbas stands on both sides.",
            "bn": "অন্য দলের মতে এটা মোটা কাঠ, খেজুর গাছের গুঁড়ির মতো। তাবারী এ মত আনেন আবদুর রহমান ইবন আবিসের সূত্রে ইবন আব্বাস (রাঃ) থেকে: শীতের জন্য আমরা কাঠ জমিয়ে রাখতাম, ৩ হাত লম্বা, কমবেশি, আর তাকে কাসর বলতাম। মুজাহিদের মতে গাছের আঁটি, কাতাদার মতে গাছ আর খেজুর গাছের গোড়া, দাহহাকের মতে বড় বড় গাছের গোড়া। ইবন কাসীর গাছের গুঁড়ির মতটি দেন ইবন আব্বাস, মুজাহিদ, কাতাদা আর যায়দ ইবন আসলামের নামে। বাগাভী দাহহাকের পাশে সাঈদ ইবন জুবাইরকে যোগ করেন। তাবারীর সনদগুলোতে ইবন আব্বাস (রাঃ) দুই দিকেই আছেন।"
          },
          {
            "en": "On which is right, the commentators part ways. At-Tabari prefers the palace. The next verse compares the sparks to camels, he argues, and the Arabs liken camels to built palaces; he quotes al-Akhtal describing a she-camel as a Roman tower raised with plaster, brick and stone. Al-Qurtubi, after returning to Ibn Abbas's account of the cut wood, closes: this is the soundest of what has been said about it, and Allah knows best. Two careful readers reach two conclusions, and this article keeps both.",
            "bn": "কোনটা ঠিক, এখানে এসে তাফসীরকারেরা আলাদা পথ নেন। তাবারী প্রাসাদের অর্থকেই অগ্রাধিকার দেন। তাঁর যুক্তি, পরের আয়াতে স্ফুলিঙ্গকে উটের সঙ্গে তুলনা করা হয়েছে, আর আরবরা উটকে নির্মিত প্রাসাদের সঙ্গে তুলনা করে। প্রমাণে তিনি আখতালের কবিতা আনেন, যেখানে এক উটনীকে চুন, ইট আর পাথরে গাঁথা রোমান মিনারের মতো বলা হয়েছে। কুরতুবী আবার ইবন আব্বাস (রাঃ)-এর কাটা কাঠের কথায় ফিরে গিয়ে শেষ করেন: এ বিষয়ে যা বলা হয়েছে, তার মধ্যে এটাই সবচেয়ে সঠিক, আল্লাহই ভালো জানেন। দুই যত্নশীল তাফসীরকার দুই সিদ্ধান্তে পৌঁছেছেন। এ লেখা দুটিকেই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Read With an Open Sad",
          "bn": "সোয়াদে যবর দিয়ে পড়া"
        },
        "p": [
          {
            "en": "There is also a question of how the word was voiced. At-Tabari says the readers of the great cities read ka-l-qasr with the sad unvoweled, and that Ibn Abbas is reported to have read ka-l-qasar, with qaf and sad both opened. Al-Baghawi attributes the qasar reading to Ali and Ibn Abbas, meaning the necks of palm trees. Al-Qurtubi gives it to Ibn Abbas, Mujahid, Humayd and as-Sulami with the same meaning, and adds Qatadah's sense of it: the necks of camels.",
            "bn": "শব্দটা কীভাবে উচ্চারিত হবে, সে প্রশ্নও আছে। তাবারী বলেন, বড় বড় শহরের কারীরা কালকাসর পড়েছেন সোয়াদে সাকিন দিয়ে। আর ইবন আব্বাস (রাঃ) থেকে বর্ণিত আছে, তিনি পড়তেন কালকাসার, কাফ আর সোয়াদ দুটোতেই যবর দিয়ে। বাগাভী কাসার পাঠটি আলী (রাঃ) ও ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন, যার অর্থ খেজুর গাছের গলা। কুরতুবী একই অর্থে পাঠটির কথা বলেন ইবন আব্বাস, মুজাহিদ, হুমাইদ আর সুলামীর নামে। সঙ্গে কাতাদার ব্যাখ্যাও আনেন: উটের গলা।"
          },
          {
            "en": "Al-Qurtubi also records Sa'id ibn Jubayr reading qisar, with a kasrah on the qaf, as another plural of qasrah. He names the still sad the reading of the generality. At-Tabari, after laying out the readings, judges the sounder reading to be that of the readers of the cities, the still sad, and the sounder meaning to be the palace. The variant voicings are reported from early readers; they widen the picture of the sparks but do not overturn the reading he and al-Qurtubi call the common reading.",
            "bn": "কুরতুবী আরও জানান, সাঈদ ইবন জুবাইর পড়েছেন কিসার, কাফে যের দিয়ে, যা কাসরাহ শব্দেরই আরেক বহুবচন। সোয়াদে সাকিনের পাঠকে তিনি বলেন সাধারণের পাঠ। তাবারী সব পাঠ সাজিয়ে রায় দেন: শহরের কারীরা যেভাবে পড়েন, সোয়াদে সাকিন দিয়ে, সেটাই বেশি সঠিক পাঠ। আর অর্থের দিক থেকে প্রাসাদই বেশি সঠিক। ভিন্ন উচ্চারণগুলো আগের যুগের কারীদের থেকে বর্ণিত। স্ফুলিঙ্গের ছবিটা এতে আরও প্রশস্ত হয়, কিন্তু তাবারী আর কুরতুবী যে পাঠকে প্রচলিত বলেন, তা উল্টে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wood Laid By for Winter",
          "bn": "শীতের জন্য তুলে রাখা কাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi and Ibn Kathir both attach to this verse a report from al-Bukhari, and it appears there as Bukhari 4932. Abd al-Rahman ibn Abis said he heard Ibn Abbas on \"It throws sparks like al-qasr\": \"We used to raise wood in lengths of three cubits or less, and put it away for the winter, and we called it al-qasar.\" Al-Bukhari placed it in his Sahih. It is Ibn Abbas explaining a word from memory of his people's usage, not a saying of the Prophet ﷺ.",
            "bn": "কুরতুবী আর ইবন কাসীর দুজনেই এ আয়াতের সঙ্গে বুখারীর একটি বর্ণনা জুড়ে দেন। বুখারীতে তা আছে ৪৯৩২ নম্বরে। আবদুর রহমান ইবন আবিস বলেন, তিনি ইবন আব্বাস (রাঃ)-কে 'সে আগুন কাসরের মতো স্ফুলিঙ্গ ছুড়ে মারে' আয়াত সম্পর্কে বলতে শুনেছেন: \"আমরা ৩ হাত বা তার চেয়ে ছোট মাপে কাঠ কেটে তুলে রাখতাম, শীতের জন্য রেখে দিতাম, আর তাকে কাসার বলতাম।\" বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন। তবে এটা নবী ﷺ-এর বাণী নয়। নিজের লোকেরা শব্দটা কীভাবে ব্যবহার করত, সেই স্মৃতি থেকে ইবন আব্বাস (রাঃ) একটা শব্দের ব্যাখ্যা দিচ্ছেন।"
          },
          {
            "en": "Al-Qurtubi draws a ruling from it. Under the heading mas'alah he says the verse is evidence that storing firewood and charcoal is permitted, though they are not food, since they belong to a person's welfare and needs. Good sense, he argues, buys them outside the time of need, when they are cheaper and easier to find. He compares it with the Prophet ﷺ storing provision when it was plentiful. A verse about the sparks of the Fire thus yields, through one Companion's memory, a small lesson in foresight.",
            "bn": "কুরতুবী এ থেকে একটা মাসআলাও বের করেন। তাঁর মতে আয়াতটি প্রমাণ করে, জ্বালানি কাঠ আর কয়লা জমিয়ে রাখা জায়েয, যদিও তা খাবার নয়। কারণ এগুলো মানুষের প্রয়োজন আর সুবিধার জিনিস। বুদ্ধির দাবি হলো, দরকারের সময়ের আগেই তা জোগাড় করা, যখন দাম কম আর পাওয়াও সহজ। তিনি এর তুলনা দেন নবী ﷺ-এর সঙ্গে, যিনি খাবার সহজলভ্য থাকার সময় তা জমিয়ে রাখতেন। এভাবে জাহান্নামের স্ফুলিঙ্গের আয়াত থেকে, এক সাহাবীর স্মৃতির পথ ধরে, দূরদর্শিতার ছোট্ট একটা শিক্ষা বেরিয়ে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Camels Dark and Yellow",
          "bn": "হলদেটে কালো উটের সারি"
        },
        "p": [
          {
            "en": "The next verse, 77:33, finishes the picture: ka-annahu jimalatun sufr, as if they were sufr camels. Al-Muyassar renders it black camels whose colour leans towards yellow. As-Sa'di says the same and draws from it that the Fire is dark, its flame, embers and sparks black and hideous to see. Ibn Kathir names Mujahid, al-Hasan, Qatadah and ad-Dahhak for black camels and notes that Ibn Jarir favoured it. Ma'arif al-Qur'an keeps yellow, picturing castle-sized sparks breaking into smaller pieces like yellowish camels, and notes that some rendered sufr as black.",
            "bn": "পরের আয়াত, ৭৭:৩৩, ছবিটা পূর্ণ করে: কাআন্নাহু জিমালাতুন সুফর, যেন সেগুলো সুফর রঙের উট। মুয়াসসার এর অর্থ করে কালো উট, যার রং হলুদের দিকে ঝোঁকা। সা'দীও তাই বলেন। তা থেকে তিনি বুঝে নেন, জাহান্নামের আগুন অন্ধকার। তার শিখা, অঙ্গার আর স্ফুলিঙ্গ সবই কালো, দেখতে বীভৎস। ইবন কাসীর কালো উটের মতটি দেন মুজাহিদ, হাসান, কাতাদা আর দাহহাকের নামে, আর জানান যে ইবন জারীর এটাকেই অগ্রাধিকার দিয়েছেন। মাআরিফুল কুরআন হলুদ অর্থটাই রাখে। তার ছবিতে প্রাসাদের মতো বড় স্ফুলিঙ্গ ভেঙে ছোট ছোট টুকরো হয়, যেন হলদেটে উট। সঙ্গে জানায়, কেউ কেউ সুফরের অর্থ করেছেন কালো।"
          },
          {
            "en": "Ibn Kathir also reports from Ibn Abbas, Mujahid and Sa'id ibn Jubayr that jimalat here are the ropes of ships, and al-Qurtubi says al-Bukhari records it: ship ropes bundled until they are as thick as men's waists. Al-Qurtubi adds that Ibn Abbas read jumalat, with a dammah. Among the seven readings he records that Hafs, Hamzah and al-Kisa'i read jimalah, and the rest jimalat. That verse deserves its own study; here it shows how the commentators pictured the sparks once they had flown.",
            "bn": "ইবন কাসীর আরও জানান, ইবন আব্বাস, মুজাহিদ আর সাঈদ ইবন জুবাইরের মতে এখানে জিমালাত মানে জাহাজের রশি। কুরতুবী বলেন, বুখারীও এটা উল্লেখ করেছেন: জাহাজের রশি একসঙ্গে বাঁধা হয়, যতক্ষণ না তা মানুষের কোমরের মতো মোটা হয়। কুরতুবী আরও বলেন, ইবন আব্বাস (রাঃ) পড়তেন জুমালাত, জীমে পেশ দিয়ে। সাতটি কিরাআতের মধ্যে হাফস, হামযা আর কিসাঈ পড়েছেন জিমালাহ, বাকিরা জিমালাত। সে আয়াতের আলাদা আলোচনা দরকার। এখানে তা শুধু দেখায়, স্ফুলিঙ্গ উড়ে যাওয়ার পর তাফসীরকারেরা সেগুলোকে কেমন কল্পনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Shade Worth Seeking",
          "bn": "যে ছায়া খোঁজার মতো"
        },
        "p": [
          {
            "en": "These verses describe what will be said to the deniers on the Day of Resurrection, al-mukadhdhibin of the refrain in 77:28 and 77:34, and the fate is theirs as the text describes it. They license nothing against any living person or community. No reader is given the right to point at a neighbour and assign them the smoke. The warning reaches whoever recites it first, and the question it leaves concerns the reader's own denials, not someone else's.",
            "bn": "আয়াতগুলো বলে, কিয়ামতের দিন অস্বীকারকারীদের কী বলা হবে। এরা সেই মুকাযযিবীন, যাদের কথা ৭৭:২৮ ও ৭৭:৩৪ আয়াতের বারবার ফিরে আসা বাক্যে আছে। পরিণতিটা তাদেরই, ঠিক যেভাবে আয়াত বর্ণনা করে। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। প্রতিবেশীর দিকে আঙুল তুলে তাকে ওই ধোঁয়ার ভাগীদার বানানোর অধিকার কোনো পাঠকের নেই। সতর্কবাণী সবার আগে পৌঁছায় যে পড়ছে তার কাছে। প্রশ্নটা তাই নিজের অস্বীকার নিয়ে, অন্যের নয়।"
          },
          {
            "en": "Al-Qurtubi, on verse 31, sets the opposite scene beside it. While the deniers are sent to the shadow of three branches, the friends of Allah will be in the shade of His Throne, or wherever of shade He wills, until the reckoning is finished; then each group is sent to its abode in the Garden or the Fire. As-Sa'di closes his note on verse 32 with a prayer: we ask Allah for safety from it. That prayer is the right reply to these verses, and the shade worth seeking is the one only He can give.",
            "bn": "কুরতুবী ৩১ নম্বর আয়াতের আলোচনায় এর বিপরীত দৃশ্যটাও পাশে রাখেন। অস্বীকারকারীদের যখন তিনটি শাখার ছায়ার দিকে পাঠানো হবে, আল্লাহর ওলীরা তখন থাকবেন তাঁর আরশের ছায়ায়, কিংবা তিনি যেখানে চান সেই ছায়ায়, হিসাব শেষ হওয়া পর্যন্ত। তারপর প্রত্যেক দলকে পাঠানো হবে নিজ ঠিকানায়, জান্নাতে বা জাহান্নামে। সা'দী ৩২ নম্বর আয়াতের আলোচনা শেষ করেন একটি দোয়া দিয়ে: আমরা আল্লাহর কাছে তা থেকে নিরাপত্তা চাই। এ আয়াতগুলোর সঠিক জবাব এই দোয়াই। আর খোঁজার মতো ছায়া সেটাই, যা কেবল তিনিই দিতে পারেন।"
          }
        ]
      }
    ]
  },
  "77:38": {
    "sections": [
      {
        "h": {
          "en": "The Day Spoken Of as Here",
          "bn": "দিনটি এখন চোখের সামনে"
        },
        "p": [
          {
            "en": "Hadha yawmu al-fasl; jama'nakum wa-l-awwalin: this is the Day of Decision; We have gathered you and the former peoples. The verse is five Arabic words in two clauses. The first points at the day with hadha, this, as though it is already in view. The second reports a gathering as something done. The name al-fasl has been explained where the surah first gives it, in 77:13 and 77:14, and is not taken up again here. This article stays with who is gathered, and with the dare of 77:39.",
            "bn": "হাযা ইয়াওমুল ফাসল, জামা'নাকুম ওয়াল আওয়ালীন: এটাই ফয়সালার দিন, আমি একত্র করেছি তোমাদের আর আগের লোকদের। আরবিতে পাঁচটি শব্দ, দুটি অংশ। প্রথম অংশ হাযা, অর্থাৎ এই, বলে দিনটির দিকে ইশারা করে, যেন দিনটা চোখের সামনেই আছে। দ্বিতীয় অংশ জমায়েতের খবর দেয় ঘটে যাওয়া কাজের মতো করে। আল-ফাসল নামের ব্যাখ্যা সূরা আগেই দিয়েছে, যেখানে নামটি প্রথম আসে, ৭৭:১৩ ও ৭৭:১৪ আয়াতে। এখানে আর সে আলোচনায় ফেরা হবে না। এ লেখার বিষয় কাদের জমায়েত করা হলো, আর ৭৭:৩৯ আয়াতের চ্যালেঞ্জ।"
          },
          {
            "en": "Who is speaking, and to whom? Ibn Kathir calls the verse an address from the Creator to His servants. At-Tabari says Allah says it to these deniers of the resurrection on the day they are raised. Al-Qurtubi supplies an unspoken verb: and it will be said to them. All three place the words on the day itself, spoken to people already standing in it. So the past tense of jama'nakum is not a forecast. It describes a gathering to those already brought to it.",
            "bn": "কে বলছেন, কাকে বলছেন? ইবন কাসীর বলেন, এ হলো স্রষ্টার পক্ষ থেকে তাঁর বান্দাদের প্রতি সম্বোধন। তাবারী বলেন, পুনরুত্থান অস্বীকারকারীদের যেদিন ওঠানো হবে, সেদিন আল্লাহ তাদের এ কথা বলবেন। কুরতুবী একটা অনুক্ত ক্রিয়া জুড়ে দেন: আর তাদের বলা হবে। তিনজনই কথাগুলোকে বসান সেই দিনের ভেতরেই, যারা ইতিমধ্যে সেখানে দাঁড়িয়ে আছে তাদের উদ্দেশে। তাই জামা'নাকুম শব্দের অতীত রূপ কোনো ভবিষ্যদ্বাণী নয়। এ হলো সেই লোকদের কাছে জমায়েতের বর্ণনা, যাদের আগেই সেখানে এনে হাজির করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Silent at One Station",
          "bn": "এক পর্বের নীরবতা"
        },
        "p": [
          {
            "en": "The verse arrives straight after a hard silence. In 77:35 and 77:36: this is a day on which they will not speak, nor will they be permitted to make excuses. Then 77:37 repeats the refrain, woe that day to the deniers. At-Tabari raises the obvious question himself. How can it say they will not speak, when Allah reports them saying, our Lord, bring us out of it (23:107), and our Lord, You caused us to die twice and gave us life twice (40:11)? His answer is short: that holds in some of the day's conditions and not in others.",
            "bn": "আয়াতটি আসে কঠিন এক নীরবতার ঠিক পরে। ৭৭:৩৫ ও ৭৭:৩৬ আয়াতে বলা হয়েছে, এ এমন দিন যেদিন তারা কথা বলবে না, ওজর পেশের অনুমতিও তাদের দেওয়া হবে না। তারপর ৭৭:৩৭ আয়াতে ফিরে আসে সেই বাক্য: সেদিন দুর্ভোগ অস্বীকারকারীদের জন্য। স্বাভাবিক প্রশ্নটা তাবারী নিজেই তোলেন। আল্লাহ তো জানিয়েছেন, তারা বলবে: হে আমাদের রব, আমাদের এখান থেকে বের করুন (২৩:১০৭)। আরও বলবে: হে আমাদের রব, আপনি আমাদের দুবার মৃত্যু দিয়েছেন, দুবার জীবন দিয়েছেন (৪০:১১)। তাহলে তারা কথা বলবে না, এ কথা কীভাবে? তাঁর জবাব সংক্ষিপ্ত: সেদিনের কিছু অবস্থায় এমন হবে, সব অবস্থায় নয়।"
          },
          {
            "en": "His proof is from the language: the Arabs attach the word day to a verb only when they mean an hour of that day, as in I came the day your brother visited you. Al-Qurtubi speaks of the Day's stations and appointed times, this being one in which they are silent. He also carries a report from 'Ikrima from Ibn 'Abbas, who was asked about this verse beside 20:108, you hear nothing but a whisper. Ibn 'Abbas recited 22:47, a day with your Lord is as a thousand years, and said each measure of those days has its own colour.",
            "bn": "এর পক্ষে তিনি ভাষা থেকে প্রমাণ দেন। আরবরা দিন শব্দটিকে কোনো ক্রিয়ার সঙ্গে জোড়ে কেবল তখন, যখন সেই দিনের একটা সময় বোঝাতে চায়। যেমন তারা বলে, তোমার ভাই যেদিন তোমার কাছে এল, সেদিন আমি এসেছিলাম। কুরতুবী বলেন, কিয়ামতের দিনের অনেকগুলো স্থান ও নির্ধারিত সময় আছে, আর এটি তার একটি, যখন তারা কথা বলবে না। তিনি ইকরিমার সূত্রে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনাও আনেন। তাঁকে এ আয়াত আর ২০:১০৮ আয়াত নিয়ে প্রশ্ন করা হয়েছিল, যেখানে আছে: তুমি মৃদু আওয়াজ ছাড়া কিছুই শুনবে না। জবাবে তিনি ২২:৪৭ আয়াত পড়েন, তোমার রবের কাছে একটি দিন তোমাদের গণনার হাজার বছরের মতো। তারপর বলেন, সেই দিনগুলোর প্রতিটি পর্বের রং আলাদা।"
          },
          {
            "en": "Al-Qurtubi adds the view of al-Hasan: they will not speak with an argument, even though they speak. Ibn Kathir describes the courts of that day as passing in stages, the Lord telling of one stage here and another there, to show its terrors. Ma'arif al-Qur'an, citing Ruh al-Ma'ani, also speaks of stages on the plain of gathering. The texts take the matter that far, and no further here. What matters for 77:38 is the order: the deniers are first left without words, and then told where they are standing, and with whom.",
            "bn": "কুরতুবী হাসানের মতও আনেন: তারা কথা বললেও এমন কোনো যুক্তি দিয়ে বলবে না যা কাজে আসে। ইবন কাসীরের বর্ণনায় সেদিনের বিচারপর্ব চলবে ধাপে ধাপে। রব কোথাও একটি ধাপের খবর দেন, কোথাও আরেকটির, সেদিনের ভয়াবহতা দেখানোর জন্য। মাআরিফুল কুরআনও রূহুল মাআনীর বরাতে হাশরের ময়দানের নানা ধাপের কথা বলে। গ্রন্থগুলো বিষয়টিকে এ পর্যন্তই নিয়ে যায়, এখানেও এর বেশি নয়। ৭৭:৩৮ আয়াতের জন্য জরুরি হলো ক্রমটা। অস্বীকারকারীদের আগে নির্বাক করে দেওয়া হয়। তারপর জানানো হয় তারা কোথায় দাঁড়িয়ে, আর কাদের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the You Are",
          "bn": "এই তোমরা কারা"
        },
        "p": [
          {
            "en": "Jama'nakum, We have gathered you: who is you? At-Tabari's answer is in his opening words, these deniers of the resurrection. The Muyassar names them as a group: O company of the disbelievers of this community, the umma to which Muhammad ﷺ was sent. Al-Baghawi says the same in three words, the deniers of this umma. Al-Qurtubi carries a report from ad-Dahhak from Ibn 'Abbas: He gathered those who denied Muhammad and those who denied the prophets before him. In these glosses, then, the you is the people who heard this message and rejected it.",
            "bn": "জামা'নাকুম, আমি তোমাদের একত্র করেছি। এই তোমরা কারা? তাবারীর জবাব তাঁর শুরুর কথাতেই আছে: পুনরুত্থান অস্বীকারকারী এই লোকেরা। মুয়াসসার তাদের একটা দল হিসেবে চিহ্নিত করে: হে এই উম্মতের কাফিরেরা, অর্থাৎ যে উম্মতের কাছে মুহাম্মাদ ﷺ প্রেরিত হয়েছিলেন। বাগাভী তিনটি শব্দে একই কথা বলেন: এই উম্মতের অস্বীকারকারীরা। কুরতুবী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ)-এর বর্ণনা আনেন: যারা মুহাম্মাদকে অস্বীকার করেছিল আর যারা তাঁর আগের নবীদের অস্বীকার করেছিল, তিনি তাদের একত্র করলেন। এসব ব্যাখ্যায় তাহলে তোমরা মানে সেই লোকেরা, যারা এ বাণী শুনেছিল এবং প্রত্যাখ্যান করেছিল।"
          },
          {
            "en": "The surah itself points the same way. The refrain that frames this verse, in 77:37 and again in 77:40, is woe that day to the deniers, and at-Tabari opens his comment on 77:35 with the same people, these deniers of Allah's reward and punishment. Ibn Kathir frames the verse more widely. For him it is an address from the Creator to His servants, and he says Allah gathers all of them by His power on one plain. The texts leave the difference as it is: the narrower glosses name who is rebuked, Ibn Kathir the gathering that holds everyone.",
            "bn": "সূরার নিজের গঠনও একই দিকে ইঙ্গিত করে। এ আয়াতের দুপাশে, ৭৭:৩৭ ও ৭৭:৪০ আয়াতে, একই বাক্য: সেদিন দুর্ভোগ অস্বীকারকারীদের জন্য। আর ৭৭:৩৫ আয়াতের ব্যাখ্যা তাবারী শুরু করেন এই লোকদের দিয়েই, যারা আল্লাহর পুরস্কার ও শাস্তি অস্বীকার করে। ইবন কাসীর আয়াতটিকে দেখেন আরও বড় পরিসরে। তাঁর কাছে এটি বান্দাদের প্রতি স্রষ্টার সম্বোধন। তিনি বলেন, আল্লাহ নিজের কুদরতে তাদের সবাইকে এক ময়দানে জড়ো করেন। গ্রন্থগুলো পার্থক্যটা যেমন আছে তেমনই রেখে দেয়। সংকীর্ণ ব্যাখ্যাগুলো বলে কাদের তিরস্কার করা হচ্ছে, আর ইবন কাসীর বর্ণনা করেন এমন এক জমায়েত, যাতে সবাই আছে।"
          },
          {
            "en": "What defines the group in these glosses? Not a city or a tribe: the Muyassar says the disbelievers of this community, and al-Baghawi says its deniers. Ibn 'Abbas, in al-Qurtubi's report, says those who denied Muhammad. The category is drawn by what a person did with the message, not by where or when he was born. A reader of this umma is therefore not addressed by the rebuke merely by belonging to it, and is not safe from it merely by belonging either.",
            "bn": "এসব ব্যাখ্যায় দলটা চেনা যায় কী দিয়ে? শহর বা গোত্র দিয়ে নয়। মুয়াসসার বলে এই উম্মতের কাফিরেরা, আর বাগাভী বলেন এর অস্বীকারকারীরা। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, যারা মুহাম্মাদকে অস্বীকার করেছিল। দলটা চিহ্নিত হচ্ছে বাণীর সঙ্গে মানুষটি কী আচরণ করেছে তা দিয়ে, কোথায় বা কবে জন্মেছে তা দিয়ে নয়। তাই এই উম্মতের কোনো পাঠক শুধু এর সদস্য বলেই এ তিরস্কারের লক্ষ্য হন না। আবার শুধু সদস্য বলেই এ থেকে নিরাপদও নন।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Went Before",
          "bn": "যারা আগে চলে গেছে"
        },
        "p": [
          {
            "en": "Wa-l-awwalin, and the former peoples: who are they? At-Tabari glosses the gathering as being between you and all who were before you of the destroyed nations. Al-Baghawi says the former ones who denied their prophets. The Muyassar says the former disbelievers of the past nations. Ibn 'Abbas, in al-Qurtubi's report, says those who denied the prophets before Muhammad. None of these makes al-awwalin simply everyone who lived earlier. In each gloss the former peoples are the earlier deniers, the nations who met their own messengers as the deniers of this umma met theirs.",
            "bn": "ওয়াল আওয়ালীন, আর আগের লোকেরা। তারা কারা? তাবারী জমায়েতের ব্যাখ্যা দেন এভাবে: তোমাদের আর তোমাদের আগের সব ধ্বংসপ্রাপ্ত জাতির মধ্যে জমায়েত। বাগাভী বলেন, আগের সেই লোকেরা যারা নিজেদের নবীদের অস্বীকার করেছিল। মুয়াসসার বলে, অতীত জাতিগুলোর আগের কাফিরেরা। কুরতুবীর বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, যারা মুহাম্মাদের আগের নবীদের অস্বীকার করেছিল। এদের কেউই আওয়ালীন বলতে আগে জন্মানো সব মানুষকে বোঝান না। প্রতিটি ব্যাখ্যায় আগের লোকেরা মানে আগের অস্বীকারকারীরা। তারা সেই জাতি, যারা নিজেদের রাসূলের সঙ্গে তেমনই আচরণ করেছিল, যেমন এই উম্মতের অস্বীকারকারীরা করেছিল তাদের রাসূলের সঙ্গে।"
          },
          {
            "en": "The word has been heard before in this surah. In 77:16, a-lam nuhliki al-awwalin: did We not destroy the former peoples? Then 77:17: then We make the later ones follow them, and 77:18: thus do We deal with the criminals. The same al-awwalin who were named there as destroyed are named here as gathered. At-Tabari's phrase for them in this verse, the destroyed nations, lets the two verses meet. The first listeners knew those peoples as stories of ruined towns. In 77:38 the stories are no longer told to them. They are standing beside them.",
            "bn": "শব্দটি এ সূরায় আগেও এসেছে। ৭৭:১৬ আয়াতে: আমি কি আগের লোকদের ধ্বংস করিনি? তারপর ৭৭:১৭: এরপর পরের লোকদেরও তাদের পেছনে পাঠাব। আর ৭৭:১৮: অপরাধীদের সঙ্গে আমি এমনই করে থাকি। যে আওয়ালীনের কথা সেখানে ধ্বংসপ্রাপ্ত হিসেবে এসেছে, এখানে তাদের কথা আসছে জমায়েত হওয়া মানুষ হিসেবে। এ আয়াতে তাবারী তাদের বলেছেন ধ্বংসপ্রাপ্ত জাতি, আর এই শব্দেই দুই আয়াত মিলে যায়। প্রথম শ্রোতারা ওই জাতিগুলোকে চিনত বিরান জনপদের কাহিনি হিসেবে। ৭৭:৩৮ আয়াতে সেই কাহিনি আর তাদের শোনানো হচ্ছে না। তারা এখন ওই লোকদের পাশেই দাঁড়িয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Plain for Every Age",
          "bn": "সব যুগের এক ময়দান"
        },
        "p": [
          {
            "en": "Ibn Kathir describes the gathering in one sentence with three pictures. Allah gathers them by His power fi sa'idin wahid, on one plain; the caller makes them hear; and the sight reaches through them. One ground, so no generation has a separate place. One voice, so no one stands too far back to be summoned. One gaze that takes in every one of them, so no one is hidden behind a crowd. Centuries of people who never met now stand within the same view.",
            "bn": "ইবন কাসীর এক বাক্যে জমায়েতের তিনটি ছবি আঁকেন। আল্লাহ নিজের কুদরতে তাদের জড়ো করেন ফী সাঈদিন ওয়াহিদ, এক ময়দানে। আহ্বানকারী তাদের সবাইকে নিজের ডাক শোনায়। আর দৃষ্টি তাদের সবাইকে ভেদ করে পৌঁছে যায়। মাটি একটাই, তাই কোনো প্রজন্মের আলাদা জায়গা নেই। ডাক একটাই, তাই এত পেছনে কেউ নেই যে ডাক শুনবে না। দৃষ্টি একটাই, যা প্রত্যেককে দেখে, তাই ভিড়ের আড়ালে কেউ লুকাতে পারে না। শত শত বছরের যে মানুষেরা কখনো একে অপরকে দেখেনি, তারা এখন একই দৃষ্টির ভেতরে দাঁড়িয়ে।"
          },
          {
            "en": "Those words also appear in a long hadith of intercession in Sahih al-Bukhari (4712), narrated by Abu Hurayra, in which the Prophet ﷺ said: \"The people, the first and the last, will be gathered on one plain; the caller will make them hear, and the sight will reach through them.\" No tafsir consulted for this verse attaches it to the verse, so it stands here as a general report about the Day. The Qur'an says the same in its own words in 56:49 and 56:50: the former and the later will be gathered to the appointed time of a known day.",
            "bn": "এই কথাগুলো সহীহ বুখারীর (৪৭১২) শাফাআতের এক দীর্ঘ হাদিসেও আছে। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: \"আগের ও পরের সব মানুষকে এক ময়দানে জড়ো করা হবে। আহ্বানকারী তাদের ডাক শোনাবে, আর দৃষ্টি তাদের সবার কাছে পৌঁছে যাবে।\" এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বর্ণনাটিকে আয়াতের সঙ্গে যুক্ত করেনি। তাই এখানে এটি এসেছে সেদিন সম্পর্কে একটি সাধারণ বর্ণনা হিসেবে। কুরআন নিজের ভাষায় একই কথা বলেছে ৫৬:৪৯ ও ৫৬:৫০ আয়াতে: আগের ও পরের সবাইকে একত্র করা হবে এক নির্দিষ্ট দিনের নির্ধারিত সময়ে।"
          },
          {
            "en": "At-Tabari adds what the gathering means for those who denied it. We have gathered you, he says, for your appointment that We used to promise you in the world, the gathering of you with all who came before you; and then a short sentence: fa-qad waffayna lakum bi-dhalik, so We have kept that promise to you. The resurrection was the very thing these people called impossible. The first fact they are told on its day is that it has been done as it was said. The past tense of the verse carries that weight.",
            "bn": "অস্বীকারকারীদের জন্য এ জমায়েতের মানে কী, তাবারী তা যোগ করেন। তিনি বলেন, আমি তোমাদের জমায়েত করেছি তোমাদের সেই নির্ধারিত সময়ের জন্য, যার ওয়াদা দুনিয়াতে তোমাদের দিয়ে আসছিলাম, অর্থাৎ তোমাদের আর তোমাদের আগের সবার একসঙ্গে জমায়েত। তারপর ছোট্ট একটি বাক্য: ফাকাদ ওয়াফফাইনা লাকুম বিযালিক, সে ওয়াদা আমি তোমাদের কাছে পূরণ করেছি। পুনরুত্থানকেই এরা অসম্ভব বলত। সেদিন তাদের প্রথম যে খবর দেওয়া হয়, তা হলো, যেমন বলা হয়েছিল ঠিক তেমনই ঘটে গেছে। আয়াতের অতীতকাল সেই ভারটুকু বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Dare No One Takes Up",
          "bn": "যে চ্যালেঞ্জ কেউ নেয় না"
        },
        "p": [
          {
            "en": "The gathering is followed at once by 77:39: fa-in kana lakum kaydun fa-kidun, so if you have a plan, then plan against Me. At-Tabari reads it as: if you have some stratagem for escaping His punishment today, use it. The Muyassar adds, and rescue yourselves from Allah's seizing and His retribution. Al-Baghawi reports Muqatil: if you have a stratagem, devise it for yourselves. As-Sa'di explains the plan as power to get out of My dominion, then says they have no power and no authority, and cites 55:33, the dare to pass beyond the regions of the heavens and the earth.",
            "bn": "জমায়েতের পরপরই আসে ৭৭:৩৯: ফাইন কানা লাকুম কাইদুন ফাকীদূন, তোমাদের কোনো কৌশল থাকলে আমার বিরুদ্ধে খাটাও। তাবারীর ব্যাখ্যা: আজ তাঁর শাস্তি থেকে বাঁচার কোনো ফন্দি থাকলে তা কাজে লাগাও। মুয়াসসার যোগ করে: আর আল্লাহর পাকড়াও ও প্রতিশোধ থেকে নিজেদের উদ্ধার করো। বাগাভী মুকাতিলের কথা আনেন: কোনো ফন্দি থাকলে নিজেদের জন্য তা খাটাও। সা'দীর ব্যাখ্যায় কৌশল মানে আমার রাজত্ব থেকে বেরিয়ে যাওয়ার ক্ষমতা। তারপর তিনি বলেন, তাদের কোনো ক্ষমতা নেই, কোনো জোরও নেই। সঙ্গে আনেন ৫৫:৩৩, যেখানে আসমান ও জমিনের সীমানা পেরিয়ে যাওয়ার চ্যালেঞ্জ।"
          },
          {
            "en": "Al-Qurtubi keeps several readings side by side without choosing. The first matches the others: a stratagem for escaping ruin, and you will find none. Then, from ad-Dahhak from Ibn 'Abbas: if you are able to wage war, wage it against Me; in the world you fought Muhammad ﷺ and fought Me, so fight Me today. Another view: in the world you went on in disobedience, and now you can neither do it nor defend yourselves. A last view makes the words the Prophet's ﷺ own, like the words of Hud (AS) in 11:55: so plot against me all together.",
            "bn": "কুরতুবী কয়েকটি ব্যাখ্যা পাশাপাশি রাখেন, কোনোটিকে বেছে নেন না। প্রথমটি অন্যদের মতোই: ধ্বংস থেকে বাঁচার ফন্দি, যা তোমরা পাবে না। তারপর দাহহাকের সূত্রে ইবন আব্বাস (রাঃ)-এর কথা: যুদ্ধ করার সামর্থ্য থাকলে আমার বিরুদ্ধে করো। দুনিয়াতে তোমরা মুহাম্মাদ ﷺ-এর বিরুদ্ধে লড়েছ, আমার বিরুদ্ধে লড়েছ, আজ আমার সঙ্গে লড়ে দেখাও। আরেকটি মত: দুনিয়াতে তোমরা নাফরমানি করে চলেছিলে, আজ তা করার সাধ্যও নেই, নিজেদের রক্ষার সাধ্যও নেই। শেষ মতে কথাগুলো নবী ﷺ-এর নিজের, ১১:৫৫ আয়াতে হুদ (আঃ)-এর কথার মতো: তোমরা সবাই মিলে আমার বিরুদ্ধে ফন্দি আঁটো।"
          },
          {
            "en": "Ibn Kathir calls it a serious threat and a harsh warning: if you can save yourselves from My seizing, then do so, but you cannot. He cites 11:57, you will not harm Him at all, and a hadith which Sahih Muslim (2577) records from Abu Dharr, in which the Prophet ﷺ relates from his Lord: \"O My servants, you will never reach harming Me so as to harm Me, and you will never reach benefiting Me so as to benefit Me.\" Set after 77:38, the dare lands on a full assembly. Every plotter of every generation stands on one plain, and not one plan is put forward.",
            "bn": "ইবন কাসীর একে বলেন কঠিন হুমকি ও কড়া সতর্কবাণী: আমার পাকড়াও থেকে নিজেদের বাঁচাতে পারলে বাঁচাও, কিন্তু তোমরা পারবে না। তিনি আনেন ১১:৫৭, তোমরা তাঁর কোনোই ক্ষতি করতে পারবে না। আরও আনেন একটি হাদিস, যা সহীহ মুসলিম (২৫৭৭) আবু যর (রাঃ) থেকে বর্ণনা করেছে। নবী ﷺ তাঁর রবের পক্ষ থেকে বলেছেন: \"হে আমার বান্দারা, তোমরা কখনো আমার ক্ষতি করার পর্যায়ে পৌঁছাবে না যে আমার ক্ষতি করবে, আর কখনো আমার উপকার করার পর্যায়েও পৌঁছাবে না যে আমার উপকার করবে।\" ৭৭:৩৮ আয়াতের পরে চ্যালেঞ্জটা পড়ে পূর্ণ এক সমাবেশের উপর। সব প্রজন্মের সব ষড়যন্ত্রকারী এক ময়দানে দাঁড়িয়ে, অথচ একটি কৌশলও কেউ সামনে আনে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read Without a Target",
          "bn": "কারও দিকে আঙুল নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The commentators identify the you with the deniers of this umma and the former peoples with earlier nations who denied their prophets, and the verse describes them as the text describes them, on a day when Allah alone decides. It licenses nothing against any living person or community, and it makes no reader a judge of who will stand in which company. No tafsir consulted here attaches a hadith to 77:38 itself, and none gives an occasion of revelation for it; the two narrations above are cited as general reports.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। তাফসীরকারেরা তোমরা বলতে বোঝান এই উম্মতের অস্বীকারকারীদের, আর আগের লোকেরা বলতে সেই জাতিগুলোকে, যারা নিজেদের নবীদের অস্বীকার করেছিল। আয়াত তাদের বর্ণনা দেয় ঠিক ততটুকু, যতটুকু পাঠে আছে, আর সেদিন ফয়সালা করবেন একমাত্র আল্লাহ। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কে কোন দলে দাঁড়াবে, সে বিচারের ভারও কোনো পাঠককে দেয় না। এখানে দেখা কোনো তাফসীর ৭৭:৩৮ আয়াতের সঙ্গে সরাসরি কোনো হাদিস যুক্ত করেনি, নাজিলের কোনো প্রেক্ষাপটও উল্লেখ করেনি। ওপরের বর্ণনা দুটি এসেছে সাধারণ বর্ণনা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing With the Generations",
          "bn": "সব প্রজন্মের সারিতে"
        },
        "p": [
          {
            "en": "The verse turns history into company. The peoples whose ruins a reader passes over in other surahs are not finished with; they are waiting on the same plain, and the reader will stand there too. Which of them a person is gathered among is not fixed by birth, as the glosses showed. It is settled by what each one did with the message that reached him. That question can still be answered, today, while the speaking and the excuses of this world are still allowed.",
            "bn": "এ আয়াতে ইতিহাস আর দূরের কাহিনি থাকে না, পাশের সঙ্গী হয়ে যায়। অন্য সূরায় যেসব জাতির ধ্বংসাবশেষের কথা পাঠক পেরিয়ে যান, তাদের অধ্যায় শেষ হয়নি। তারা একই ময়দানে অপেক্ষায়, আর পাঠককেও সেখানে দাঁড়াতে হবে। কে কাদের মধ্যে জমায়েত হবে, তা জন্ম দিয়ে ঠিক হয় না, ব্যাখ্যাগুলো সেটাই দেখিয়েছে। ঠিক হয় তার কাছে পৌঁছানো বাণী নিয়ে সে কী করেছে তা দিয়ে। এ প্রশ্নের জবাব এখনো দেওয়া যায়, আজই, যখন দুনিয়াতে কথা বলা আর ওজর পেশ করা এখনো চলে।"
          },
          {
            "en": "The dare of 77:39 turns back on the reader as well. Every plan made in this life against what Allah has commanded, every quiet arrangement to put off obedience, is a kayd of a small kind. On that day it will be asked for in the open, and it will have nothing to offer. The safer course is to bring the plans out now and lay them down, and to spend the time that remains preparing deeds, since words may not be allowed there.",
            "bn": "৭৭:৩৯ আয়াতের চ্যালেঞ্জ পাঠকের দিকেও ফিরে আসে। আল্লাহর হুকুমের বিপরীতে দুনিয়ার জীবনে আঁটা প্রতিটি পরিকল্পনা, আনুগত্য পিছিয়ে দেওয়ার প্রতিটি চুপচাপ বন্দোবস্ত, ছোট মাপের এক কাইদ। সেদিন প্রকাশ্যে তা হাজির করতে বলা হবে, আর তার দেওয়ার মতো কিছুই থাকবে না। নিরাপদ পথ হলো এখনই সেসব ফন্দি সামনে এনে নামিয়ে রাখা। আর বাকি সময়টা আমলের প্রস্তুতিতে ব্যয় করা, কারণ সেখানে হয়তো কথার অনুমতিই মিলবে না।"
          }
        ]
      }
    ]
  },
  "77:41": {
    "sections": [
      {
        "h": {
          "en": "The Turn After the Dare",
          "bn": "চ্যালেঞ্জের পরেই মোড়"
        },
        "p": [
          {
            "en": "Inna l-muttaqina fi zilalin wa 'uyun: indeed, the God-conscious are amid shades and springs. Five Arabic words, and they arrive without warning. Just before them, 77:38 names the Day of Decision, on which this generation is gathered with the peoples before it; 77:39 dares the deniers to use any plan they have against Allah; and 77:40 answers with the refrain, woe that day to the deniers. Then, with no connecting word, the scene changes, and for the first time in the surah the people of reward are shown.",
            "bn": "ইন্নাল মুত্তাকীনা ফী যিলালিন ওয়া উয়ূন: নিশ্চয়ই মুত্তাকীরা থাকবে ছায়া আর ঝর্ণার মাঝে। আরবিতে মাত্র পাঁচটি শব্দ, আর তারা আসে কোনো আগাম ইঙ্গিত ছাড়াই। ঠিক আগে ৭৭:৩৮ আয়াত ঘোষণা করেছে ফয়সালার দিনের কথা, যেদিন এ প্রজন্মকে আগের জাতিগুলোর সঙ্গে একত্র করা হবে। ৭৭:৩৯ আয়াত অস্বীকারকারীদের চ্যালেঞ্জ দিয়েছে: কোনো কৌশল থাকলে আল্লাহর বিরুদ্ধে খাটাও। ৭৭:৪০ আয়াত জবাব দিয়েছে সেই পরিচিত পুনরাবৃত্তি দিয়ে: সেদিন দুর্ভোগ অস্বীকারকারীদের জন্য। তারপর কোনো সংযোগ-শব্দ ছাড়াই দৃশ্য বদলে যায়। সূরায় এই প্রথম পুরস্কারপ্রাপ্তদের দেখানো হলো।"
          },
          {
            "en": "Al-Qurtubi opens his note on the verse with one framing sentence: Allah informs of what the God-conscious will come to ghadan, tomorrow. The word is his, and it brings the Day of Decision as close as the morning after. The verse also carries the surah's only use of the word al-muttaqin. Ten times al-Mursalat says woe that day to the deniers, from 77:15 to 77:49, and this verse sits between the seventh and the eighth. The deniers are named over and over; the God-conscious are named once, here.",
            "bn": "কুরতুবী এ আয়াতের আলোচনা শুরু করেন একটি বাক্যে: মুত্তাকীরা গাদান, অর্থাৎ আগামীকাল কোথায় গিয়ে পৌঁছবে, আল্লাহ তা জানাচ্ছেন। 'আগামীকাল' শব্দটা তাঁর নিজের। এতে ফয়সালার দিন যেন রাত পোহালেই সকালের মতো কাছে চলে আসে। এ আয়াতেই সূরা মুরসালাতে আল-মুত্তাকীন শব্দটি একবারমাত্র এসেছে। সেদিন দুর্ভোগ অস্বীকারকারীদের জন্য, এ বাক্য সূরায় দশটি জায়গায় এসেছে, ৭৭:১৫ থেকে ৭৭:৪৯ পর্যন্ত। আমাদের আয়াতটি বসেছে সপ্তম আর অষ্টমটির মাঝখানে। অস্বীকারকারীদের নাম এসেছে বারবার, মুত্তাকীদের নাম একবার, এখানেই।"
          },
          {
            "en": "Read in order, the placement is a mercy of its own; this is the article's reading, not a commentator's. Forty verses of oaths, ruined nations, an origin in weak water and a Fire whose sparks fly like al-qasr have made the listener afraid, and fear left alone can harden into despair. The surah does not leave it alone. Before the next woe, it shows the other road and where it ends. The warning is not the last word the listener hears; the shade is held out while the listener can still choose it.",
            "bn": "ক্রম ধরে পড়লে এই বসানোটাই এক রহমত। এটা এ লেখার নিজস্ব পাঠ, কোনো তাফসীরকারের কথা নয়। চল্লিশ আয়াত জুড়ে শপথ, ধ্বংস হওয়া জাতি, তুচ্ছ পানি থেকে মানুষের শুরু, আর এমন আগুন, যার স্ফুলিঙ্গ ছোটে আল-কাসরের মতো, এসব শুনে শ্রোতা ভয় পেয়েছে। ভয়কে একা ফেলে রাখলে তা জমে হতাশা হয়ে যেতে পারে। সূরাটি তাকে একা ফেলে রাখে না। পরের দুর্ভোগের ঘোষণার আগেই দেখিয়ে দেয় অন্য পথটি, আর সে পথ কোথায় গিয়ে শেষ হয়। সতর্কবাণী শ্রোতার কানে শেষ কথা নয়। ছায়াটি সামনে রাখা হয়েছে এমন সময়ে, যখন শ্রোতা এখনো তা বেছে নিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Root, Two Shades",
          "bn": "এক ধাতু, দুই ছায়া"
        },
        "p": [
          {
            "en": "The contrast the commentators draw is with 77:30 and 77:31. There the deniers are told: intaliqu ila zillin dhi thalathi shu'ab, la zalilin wa la yughni mina l-lahab, set off towards a shade of three branches, neither shading nor of any use against the flame. At-Tabari makes the link in so many words. The God-conscious, he says, are in shades that truly shade, zilal zalilah, at a time when the disbelievers in Allah are in a shade of three branches that neither shades nor avails against the flame.",
            "bn": "তাফসীরকারেরা যে তুলনা টানেন, তা ৭৭:৩০ ও ৭৭:৩১ আয়াতের সঙ্গে। সেখানে অস্বীকারকারীদের বলা হয়েছে: ইনতালিকূ ইলা যিল্লিন যী সালাসি শুআব, লা যালীলিন ওয়ালা ইউগনী মিনাল লাহাব। অর্থাৎ চলো তিনটি শাখায় ভাগ হওয়া এক ছায়ার দিকে, যা না ছায়া দেয়, না শিখা থেকে কোনো কাজে আসে। তাবারী সম্পর্কটা সরাসরি বলে দেন। তাঁর ভাষায়, মুত্তাকীরা থাকবে এমন ছায়ায়, যা সত্যিই ছায়া দেয়, যিলাল যালীলা। আর সে সময় আল্লাহকে অস্বীকারকারীরা থাকবে তিনটি শাখার সেই ছায়ায়, যা ছায়াও দেয় না, শিখা থেকেও বাঁচায় না।"
          },
          {
            "en": "Al-Qurtubi makes the same pairing and says what the shades are: the shades of trees and the shades of palaces, in place of the shade in the three branches. Ibn Kathir draws his contrast in other words. The God-conscious, he says, will be in gardens and springs, unlike what the wretched are in, a shade of yahmum, which he explains as black and foul-smelling smoke. Yahmum is the word of 56:43, where the people of the left are given a shade of black smoke, neither cool nor kind.",
            "bn": "কুরতুবীও একই জোড়া মিলিয়েছেন, আর বলে দিয়েছেন ছায়াগুলো কিসের: গাছের ছায়া আর প্রাসাদের ছায়া, তিনটি শাখার ছায়ার বদলে। ইবন কাসীর তুলনাটা টানেন অন্য শব্দে। তাঁর মতে মুত্তাকীরা থাকবে বাগান আর ঝর্ণার মাঝে, হতভাগারা যেখানে আছে তার একেবারে উল্টো অবস্থায়। হতভাগাদের ভাগে ইয়াহমূমের ছায়া, আর ইয়াহমূমের ব্যাখ্যা তিনি দেন কালো, দুর্গন্ধময় ধোঁয়া বলে। ইয়াহমূম শব্দটি এসেছে ৫৬:৪৩ আয়াতে। সেখানে বাম দিকের লোকদের দেওয়া হয়েছে কালো ধোঁয়ার ছায়া, যা শীতলও নয়, আরামদায়কও নয়।"
          },
          {
            "en": "Two details in the wording sharpen the contrast, and both are this article's own observation rather than a commentator's. The deniers are sent to one zill, a single shade; the God-conscious are in zilal, shades in the plural. And the adjective that 77:31 denies to the Fire's shade, zalil, is the very word at-Tabari reaches for to describe the shades of 77:41. What the counterfeit lacked by name, the true shade has. The surah shows the imitation first, so that the real thing can be known when it comes.",
            "bn": "শব্দের দুটি খুঁটিনাটি তুলনাটাকে আরও ধারালো করে। দুটিই এ লেখার নিজস্ব পর্যবেক্ষণ, কোনো তাফসীরকারের নয়। অস্বীকারকারীদের পাঠানো হয় একটিমাত্র যিল্ল, এক ছায়ার দিকে। মুত্তাকীরা থাকে যিলালে, বহুবচনের ছায়ায়। আর ৭৭:৩১ আয়াত আগুনের ছায়াকে যে গুণ থেকে বঞ্চিত বলেছে, সেই যালীল শব্দটিই তাবারী বেছে নিয়েছেন ৭৭:৪১ আয়াতের ছায়াগুলোর বর্ণনায়। নকল ছায়ায় যা ছিল না বলে নাম ধরে বলা হয়েছে, আসল ছায়ায় ঠিক সেটাই আছে। সূরাটি আগে নকলটা দেখায়, যাতে আসলটা এলে চিনে নেওয়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept From Heat and Cold",
          "bn": "রোদ আর শীত থেকে আড়াল"
        },
        "p": [
          {
            "en": "At-Tabari's gloss does not stop at the word shade. The God-conscious, he says, are in shades that shade and in a kinn kanin, a covering well sheltered, where no harm reaches them from heat or from cold. Shade in his reading is more than a refuge from the noon sun; it is shelter from whatever the weather could bring. The Qur'an says something close in 76:13, where the people of the Garden see there neither burning sun nor bitter cold. At-Tabari does not cite that verse here; the link is this article's.",
            "bn": "তাবারীর ব্যাখ্যা শুধু ছায়া শব্দে থেমে থাকে না। তিনি বলেন, মুত্তাকীরা থাকবে এমন ছায়ায় যা ছায়া দেয়, আর কিন্নিন কানীনে, অর্থাৎ ভালোভাবে ঢাকা এক আশ্রয়ে। সেখানে গরম বা ঠান্ডা, কোনোটারই কষ্ট তাদের ছুঁতে পারবে না। তাঁর পাঠে ছায়া কেবল দুপুরের রোদ থেকে বাঁচার জায়গা নয়। আবহাওয়া যা কিছু কষ্ট আনতে পারে, সবকিছু থেকেই আশ্রয়। ৭৬:১৩ আয়াতেও কুরআন কাছাকাছি কথা বলে: জান্নাতবাসীরা সেখানে না দেখবে প্রখর রোদ, না কনকনে শীত। তাবারী এখানে সে আয়াত উল্লেখ করেননি। সংযোগটা এ লেখার নিজের।"
          },
          {
            "en": "The other commentators look at where the shade comes from. Al-Baghawi says zilal is the plural of zill, and means the shades of trees. Al-Muyassar speaks of the shades of al-ashjar al-wari'ah, trees spreading wide and full, beside springs of running water. As-Sa'di says the shades come from the great number of trees of many kinds, bright and lovely to see. Set beside Ibn Kathir's smoke, and the pairing is this article's own, the difference is plain: one shade is grown by living trees, the other rises off a fire.",
            "bn": "বাকি তাফসীরকারেরা দেখেন ছায়াটা আসছে কোথা থেকে। বাগাভী বলেন, যিলাল হলো যিল্লের বহুবচন, আর এর মানে গাছের ছায়া। মুয়াসসারে আছে আল-আশজার আল-ওয়ারিয়ার ছায়া, অর্থাৎ ডালপালা ছড়ানো ঘন গাছের ছায়া, পাশে বয়ে চলা পানির ঝর্ণা। সা'দী বলেন, নানা জাতের অজস্র গাছ থেকেই এ ছায়া, যে গাছগুলো উজ্জ্বল আর দেখতে মনোরম। এবার ইবন কাসীরের বলা ধোঁয়ার পাশে রাখুন। এই জোড়া মেলানোটা এ লেখার নিজের। পার্থক্যটা তখন স্পষ্ট: একটি ছায়া জন্মায় জীবন্ত গাছ থেকে, অন্যটা ওঠে আগুন থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Shade of Trees and Palaces",
          "bn": "গাছের ছায়া, প্রাসাদের ছায়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi's gloss names two sources of shade, trees and palaces, and then points to Surah Ya Sin: hum wa azwajuhum fi zilalin 'ala l-ara'iki muttaki'un, they and their spouses are in shades, reclining on couches (36:56). The same plural, zilal, stands in both verses. In Ya Sin it surrounds rest and company; in al-Mursalat it answers a shade that failed. Ibn Kathir, for his part, retells the verse with jannat, gardens, where the Arabic has zilal, so that his paraphrase speaks of the God-conscious in gardens and springs.",
            "bn": "কুরতুবীর ব্যাখ্যায় ছায়ার দুটি উৎসের নাম আছে, গাছ আর প্রাসাদ। তারপর তিনি সূরা ইয়াসীনের দিকে ইশারা করেন: হুম ওয়া আযওয়াজুহুম ফী যিলালিন আলাল আরাইকি মুত্তাকিঊন, তারা ও তাদের স্ত্রীরা ছায়ায় থাকবে, আসনে হেলান দিয়ে (৩৬:৫৬)। দুই আয়াতেই একই বহুবচন, যিলাল। ইয়াসীনে সে ছায়া ঘিরে আছে বিশ্রাম আর সঙ্গকে। মুরসালাতে সে ছায়া এসেছে ব্যর্থ এক ছায়ার জবাব হয়ে। ইবন কাসীর আবার আয়াতটা নিজের ভাষায় বলতে গিয়ে যিলালের জায়গায় এনেছেন জান্নাত, অর্থাৎ বাগান। তাঁর ভাষ্যে তাই মুত্তাকীরা থাকে বাগান আর ঝর্ণার মাঝে।"
          },
          {
            "en": "That paraphrase echoes the Qur'an's own wording elsewhere, and noticing it is this article's step. In 15:45 and 51:15 the sentence reads inna l-muttaqina fi jannatin wa 'uyun, the same as 77:41 but for one word. Here, a few verses after the deniers were marched to a shade, the word is shades. Al-Qurtubi also records a variant: the generality of readers read zilal, while al-A'raj, az-Zuhri and Talhah read zulal, the plural of zullah, which he says means in the Garden. He adds no more, and neither reading changes the promise.",
            "bn": "ইবন কাসীরের এ ভাষ্য কুরআনেরই অন্য জায়গার শব্দের প্রতিধ্বনি। এটা খেয়াল করা এ লেখার নিজের কাজ। ১৫:৪৫ ও ৫১:১৫ আয়াতে বাক্যটি হলো ইন্নাল মুত্তাকীনা ফী জান্নাতিন ওয়া উয়ূন। ৭৭:৪১ আয়াতের সঙ্গে তফাত শুধু একটি শব্দে। এখানে, অস্বীকারকারীদের এক ছায়ার দিকে হাঁকিয়ে নেওয়ার কয়েক আয়াত পরেই, শব্দটি হয়েছে ছায়াসমূহ। কুরতুবী একটি ভিন্ন কিরাআতও উল্লেখ করেন। অধিকাংশ কারী পড়েন যিলাল। আরাজ, যুহরী ও তালহা পড়েন যুলাল, যুল্লার বহুবচন, আর তাঁর মতে এর মানে জান্নাতে। এর বেশি তিনি কিছু বলেননি। কোনো কিরাআতেই প্রতিশ্রুতি বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Where the Flame Was",
          "bn": "শিখার জায়গায় বয়ে চলা পানি"
        },
        "p": [
          {
            "en": "Then 'uyun, springs. At-Tabari explains them as rivers running among the trees of their gardens. Al-Muyassar has springs of running water, and al-Baghawi says simply: water. As-Sa'di names some of them: springs running with salsabil, with rahiq and with others. Both names belong to the Qur'an's own picture of the Garden. 76:18 speaks of a spring there called salsabil, and 83:25 says the righteous are given to drink of a rahiq that is sealed. His gloss lets those verses fill out this single word.",
            "bn": "তারপর উয়ূন, ঝর্ণাসমূহ। তাবারী এর ব্যাখ্যা দেন: তাদের বাগানের গাছপালার ফাঁকে ফাঁকে বয়ে চলা নদী। মুয়াসসারে আছে বয়ে চলা পানির ঝর্ণা। বাগাভী শুধু বলেন: পানি। সা'দী কয়েকটির নামও বলেন: সালসাবীল, রাহীক ও আরও নানা কিছুর ধারা বয়ে চলা ঝর্ণা। দুটি নামই এসেছে কুরআনের নিজের আঁকা জান্নাতের ছবি থেকে। ৭৬:১৮ আয়াতে আছে সেখানকার এক ঝর্ণার কথা, যার নাম সালসাবীল। আর ৮৩:২৫ আয়াত বলে, নেককারদের পান করানো হবে মোহর করা রাহীক। সা'দীর ব্যাখ্যায় ওই আয়াতগুলো এসে এই এক শব্দকে ভরে তোলে।"
          },
          {
            "en": "Placed against 77:31, the water answers the flame; that pairing is this article's own. The deniers' shade avails nothing against the lahab, and in 77:32 the Fire throws sparks. Those under the true shade have water running beside them. The next verses complete the welcome: wa fawakiha mimma yashtahun, and fruits of whatever they desire (77:42), then 77:43, eat and drink with ease for what you used to do. Al-Muyassar sums the scene up: they enjoy fruit their souls desire, and are told to eat and drink with ease because of the good they put forward in the world.",
            "bn": "৭৭:৩১ আয়াতের পাশে রাখলে এই পানি যেন শিখার জবাব। জোড়াটা এ লেখার নিজের মেলানো। অস্বীকারকারীদের ছায়া লাহাব, অর্থাৎ শিখার বিরুদ্ধে কোনো কাজে আসে না, আর ৭৭:৩২ আয়াতে আগুন স্ফুলিঙ্গ ছোড়ে। আসল ছায়ার নিচে যারা, তাদের পাশ দিয়ে বয়ে যায় পানি। পরের আয়াতগুলো অভ্যর্থনা পূর্ণ করে: ওয়া ফাওয়াকিহা মিম্মা ইয়াশতাহূন, আর তাদের মন যা চায় সেই ফলমূল (৭৭:৪২)। তারপর ৭৭:৪৩: তোমরা যা করতে, তার বিনিময়ে তৃপ্তির সঙ্গে খাও আর পান করো। মুয়াসসার দৃশ্যটা গুছিয়ে বলে: মনের চাওয়া ফলমূল তারা উপভোগ করবে, আর দুনিয়ায় আগে পাঠানো নেক আমলের কারণে তাদের বলা হবে তৃপ্তি নিয়ে খাও, পান করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded Against Denial",
          "bn": "অস্বীকার থেকে বেঁচে থাকা"
        },
        "p": [
          {
            "en": "Who are al-muttaqin? The article on 77:44 sets out how each commentator defines them, and that ground need not be walked again. One thread matters here. As-Sa'di describes them as those who guarded against takdhib, denial, and were marked by tasdiq, affirming the truth, in their words, their actions and their deeds. The refrain on either side of this verse condemns al-mukadhdhibin, the deniers, from the same root as takdhib. His gloss names the God-conscious by the very thing they refused to become.",
            "bn": "আল-মুত্তাকীন কারা? ৭৭:৪৪ আয়াতের আলোচনায় প্রত্যেক তাফসীরকারের সংজ্ঞা সাজানো আছে, সে পথে আবার হাঁটার দরকার নেই। এখানে একটি সূত্রই জরুরি। সা'দী তাদের বর্ণনা দেন এভাবে: যারা তাকযীব, অর্থাৎ অস্বীকার থেকে বেঁচে থেকেছে, আর যাদের কথা, কাজ ও আমলে ছিল তাসদীক, অর্থাৎ সত্যকে মেনে নেওয়ার ছাপ। এ আয়াতের দুই পাশের পুনরাবৃত্ত বাক্য দুর্ভোগ ঘোষণা করে আল-মুকাযযিবীনের জন্য, যে শব্দ তাকযীবেরই ধাতু থেকে। সা'দীর ব্যাখ্যা তাই মুত্তাকীদের চেনায় সেই জিনিস দিয়ে, যা হতে তারা অস্বীকার করেছে।"
          },
          {
            "en": "At-Tabari and al-Muyassar add a place to the definition: fi d-dunya, in the world. At-Tabari speaks of those who guarded against Allah's punishment by carrying out His obligations in the world and keeping away from disobeying Him; al-Muyassar, of those who feared their Lord in the world. The guarding happens here, and the shade is found there. The Qur'an draws a like line in 13:35, a link this article makes: the Garden promised to the God-conscious has lasting fruit, and its shade, and the end of the disbelievers is the Fire.",
            "bn": "তাবারী ও মুয়াসসার সংজ্ঞায় একটি জায়গার কথা যোগ করেন: ফিদ দুনইয়া, দুনিয়াতে। তাবারী বলেন তাদের কথা, যারা দুনিয়াতে আল্লাহর ফরজগুলো আদায় করে আর তাঁর নাফরমানি থেকে দূরে থেকে তাঁর শাস্তি থেকে বেঁচেছে। মুয়াসসার বলে, যারা দুনিয়াতে তাদের রবকে ভয় করেছে। বেঁচে থাকার কাজটা হয় এখানে, ছায়া মেলে সেখানে। ১৩:৩৫ আয়াতেও কুরআন এমন রেখা টানে, আর সংযোগটা এ লেখার করা। মুত্তাকীদের যে জান্নাতের ওয়াদা দেওয়া হয়েছে, তার ফল চিরস্থায়ী, তার ছায়াও। আর কাফিরদের পরিণাম আগুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Seating Plan",
          "bn": "কে কোথায় বসবে, তার তালিকা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The deniers of 77:30 and 77:31 are described as the text describes them, on the Day it describes, and the passage licenses nothing against any living person or community. It hands no reader the right to decide who will sit under the shade and who will be marched to the smoke. The God-conscious are not a group anyone joins by name or loses by birth. As-Sa'di and at-Tabari define them by what they affirmed and what they did, and the weighing of that belongs to Allah alone.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। ৭৭:৩০ ও ৭৭:৩১ আয়াতের অস্বীকারকারীদের বর্ণনা ততটুকুই, যতটুকু কুরআন দিয়েছে, আর সেই দিনের, যে দিনের কথা কুরআন বলেছে। এ আয়াতগুলো কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। কে ছায়ার নিচে বসবে আর কাকে ধোঁয়ার দিকে হাঁকিয়ে নেওয়া হবে, তা ঠিক করার অধিকার কোনো পাঠককে দেওয়া হয়নি। মুত্তাকী হওয়া যায় না নামের জোরে, আর জন্মের কারণে তা হারায়ও না। সা'দী ও তাবারী তাদের চেনান তারা কী মেনেছে আর কী করেছে তা দিয়ে। আর তার ওজন করার মালিক একমাত্র আল্লাহ।"
          },
          {
            "en": "Nor is the verse a badge. Hope in it is something to walk towards, not something to sit on; whoever feels sure of the shade has stopped seeking it. On narrations, plainly: none of the commentaries consulted for this verse attaches a hadith to it, so this article quotes none rather than borrowing one from another verse. What the verse gives is enough on its own terms: a promise from Allah, placed exactly where a listener shaken by the warnings around it will hear it, and in time to act on it.",
            "bn": "আয়াতটি কোনো তকমাও নয়। এখানকার আশা এমন জিনিস, যার দিকে হাঁটতে হয়, যার উপর বসে থাকা যায় না। যে ছায়া পাকা ধরে নিয়েছে, সে আসলে তা খোঁজা ছেড়ে দিয়েছে। হাদীসের ব্যাপারে সোজা কথা: এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয়নি। তাই অন্য আয়াত থেকে একটি ধার করে আনার বদলে এ লেখা কোনো হাদীসই উদ্ধৃত করছে না। আয়াতটি যা দেয়, তা নিজেই যথেষ্ট: আল্লাহর এক প্রতিশ্রুতি, যা রাখা হয়েছে ঠিক সেখানে, যেখানে চারপাশের সতর্কবাণীতে কেঁপে ওঠা শ্রোতা তা শুনবে, আর শুনবে কাজ করার সময় থাকতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Planting Shade Before Noon",
          "bn": "দুপুরের আগেই ছায়ার গাছ লাগানো"
        },
        "p": [
          {
            "en": "The commentators give the verse a practical edge. If, as al-Muyassar says, the welcome comes because of the good put forward in the world, then the shade is prepared before it is needed. As-Sa'di's three words for affirming the truth, in words, actions and deeds, make a simple test for a week. In words: saying the true thing when a convenient denial would be easier. In actions: one obligation, perhaps a prayer often rushed, given its full time. In deeds: one forbidden habit finally left, which is how at-Tabari describes guarding against punishment.",
            "bn": "তাফসীরকারদের কথায় আয়াতটির একটা ব্যবহারিক দিকও খুলে যায়। মুয়াসসার যেমন বলে, অভ্যর্থনাটা আসে দুনিয়ায় আগে পাঠানো নেক আমলের কারণে। তাহলে ছায়াটা তৈরি হয় দরকার পড়ার আগেই। সত্য মেনে নেওয়ার জন্য সা'দীর তিনটি শব্দ, কথা, কাজ ও আমল, দিয়ে এক সপ্তাহের সহজ পরীক্ষা বানানো যায়। কথায়: সুবিধাজনক অস্বীকারের বদলে সত্য কথাটা বলা। কাজে: কোনো একটা ফরজ, ধরুন যে নামাজ প্রায়ই তাড়াহুড়োয় সারা হয়, তাকে পুরো সময় দেওয়া। আমলে: কোনো একটা হারাম অভ্যাস শেষমেশ ছেড়ে দেওয়া। তাবারী শাস্তি থেকে বেঁচে থাকার বর্ণনা তো এভাবেই দেন।"
          },
          {
            "en": "The verse can also be carried into ordinary heat. Someone waiting in the sun, walking a long road or working through a summer afternoon can remember that the shade promised here does not fail and its water keeps running, and ask Allah for it in their own words. The surah supplies the contrast itself: the shade the deniers are sent to keeps off nothing, and the shade of the God-conscious keeps off heat and cold alike, as at-Tabari reads it. This is a reflection drawn from the verse, not a practice reported from the early generations.",
            "bn": "আয়াতটিকে প্রতিদিনের গরমের মধ্যেও সঙ্গে নেওয়া যায়। রোদে দাঁড়িয়ে অপেক্ষা করছেন, লম্বা পথ হাঁটছেন, বা গ্রীষ্মের দুপুরে কাজ করে যাচ্ছেন, এমন কেউ মনে করতে পারেন: এখানে যে ছায়ার ওয়াদা, তা কখনো সরে যায় না, তার পানি বয়েই চলে। তারপর নিজের ভাষায় আল্লাহর কাছে তা চাইতে পারেন। তুলনাটা সূরাই জুগিয়ে দেয়। অস্বীকারকারীদের যে ছায়ায় পাঠানো হয়, তা কিছুই আটকায় না। আর তাবারীর পাঠে মুত্তাকীদের ছায়া গরম ও ঠান্ডা দুটোই আটকায়। এটা আয়াত থেকে নেওয়া একটি ভাবনা, পূর্বসূরিদের কাছ থেকে বর্ণিত কোনো আমল নয়।"
          },
          {
            "en": "Above all, the verse is placed to keep hope alive. It comes after the dare and before the next woe, so that no listener leaves the passage having heard only the threat. Whoever hears al-Mursalat and feels the weight of its warnings has not been shut out; the same surah names the shade in the next breath. The way there is the one the commentators describe, guarding against denial and keeping what Allah commands, and nothing in the verse closes that way to anyone who begins on it today.",
            "bn": "সবচেয়ে বড় কথা, আয়াতটি বসানো হয়েছে আশাকে বাঁচিয়ে রাখতে। চ্যালেঞ্জের পরে আর পরের দুর্ভোগের ঘোষণার আগে এর জায়গা। ফলে কোনো শ্রোতা শুধু হুমকি শুনে অংশটা শেষ করে না। যে সূরা মুরসালাত শুনে তার সতর্কবাণীর ভার অনুভব করছে, তার জন্য দরজা বন্ধ হয়নি। একই সূরা পরের নিঃশ্বাসেই ছায়ার নাম নেয়। সেখানে যাওয়ার পথ সেটাই, যা তাফসীরকারেরা বলেছেন: অস্বীকার থেকে বেঁচে থাকা আর আল্লাহর হুকুম মেনে চলা। আজ যে এ পথে পা রাখে, আয়াতের কোনো কথাই তার জন্য পথটা বন্ধ করে না।"
          }
        ]
      }
    ]
  },
  "77:44": {
    "sections": [
      {
        "h": {
          "en": "Four Words Between Two Woes",
          "bn": "দুই দুর্ভোগের মাঝে চার শব্দ"
        },
        "p": [
          {
            "en": "Inna kadhalika najzi al-muhsinin: indeed, thus do We reward the doers of good. The verse is four words long, and it stands between two identical lines. At 77:40 the refrain says woe that day to the deniers, and at 77:45 it says it again. Before the turn, the deniers have been shown on the Day of Decision, gathered with the peoples before them and dared at 77:39 to use any plan they have. Then the scene changes, and for three verses the God-fearing are shown in their place.",
            "bn": "ইন্না কাযালিকা নাজযিল মুহসিনীন: নিশ্চয়ই এভাবেই আমি সৎকর্মশীলদের প্রতিদান দিই। আয়াতটি মাত্র চারটি শব্দের, আর তার দুই পাশে হুবহু একই বাক্য। ৭৭:৪০ আয়াতে বলা হয়েছে, সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য, ৭৭:৪৫ আয়াতে আবার সেই কথা। এর আগে মিথ্যারোপকারীদের দেখানো হয়েছে ফয়সালার দিনে। আগের জাতিগুলোর সঙ্গে তাদের একত্র করা হয়েছে, আর ৭৭:৩৯ আয়াতে চ্যালেঞ্জ দেওয়া হয়েছে: কোনো কৌশল থাকলে খাটাও দেখি। তারপর দৃশ্য বদলায়। পরের তিনটি আয়াতে সামনে আসেন মুত্তাকীরা, তাঁদের নিজেদের ঠিকানায়।"
          },
          {
            "en": "As-Sa'di names the turn in one clause: having mentioned the punishment of the deniers, He mentioned the reward of the muhsinin. So before the word appears in 77:44, he has already used it for the God-fearing of 77:41. Ibn Kathir, on 77:41, sets their shades and springs against what the wretched are in, a shade of yahmum, which he explains as black and foul smoke. Al-Qurtubi, on the same verse, says these shades stand in place of the shade of three branches that the deniers were sent to at 77:30.",
            "bn": "মোড়টা সা'দী এক বাক্যে ধরিয়ে দেন: মিথ্যারোপকারীদের শাস্তির কথা বলার পর আল্লাহ মুহসিনদের প্রতিদানের কথা বললেন। অর্থাৎ ৭৭:৪৪ আয়াতে শব্দটি আসার আগেই তিনি ৭৭:৪১ আয়াতের মুত্তাকীদের মুহসিন বলে ডেকেছেন। ইবন কাসীর ৭৭:৪১ আয়াতে তাঁদের ছায়া আর ঝর্ণাকে দাঁড় করান হতভাগাদের অবস্থার বিপরীতে। ওরা থাকবে ইয়াহমুমের ছায়ায়, যার ব্যাখ্যা তিনি দেন কালো, দুর্গন্ধময় ধোঁয়া। কুরতুবী একই আয়াতে বলেন, এই ছায়াগুলো তিনটি শাখাওয়ালা সেই ছায়ার বদলে, যার দিকে ৭৭:৩০ আয়াতে মিথ্যারোপকারীদের পাঠানো হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "What Kadhalika Points Back To",
          "bn": "কাযালিকা কোন দিকে ইশারা করে"
        },
        "p": [
          {
            "en": "Kadhalika is ka, like, joined to dhalika, that: like that. The word points backwards, and the commentators say to what. At-Tabari paraphrases: as We have rewarded these God-fearing ones with the reward We described, for their obedience to Us in the world, so do We reward the people of ihsan. The Muyassar renders it with the like of that great reward. So the that is everything in 77:41 to 77:43: shades, running springs, fruit of whatever they desire, and the words eat and drink with ease.",
            "bn": "কাযালিকা শব্দটি দুই ভাগে গড়া: কা মানে মতো, যালিকা মানে ওটা। মানে, ওটার মতো। শব্দটা পেছনের দিকে ইশারা করে, আর কিসের দিকে, তা তাফসীরকারেরা বলে দেন। তাবারীর ভাষায়: দুনিয়াতে আমার আনুগত্যের জন্য এই মুত্তাকীদের যেমন বর্ণিত প্রতিদান দিয়েছি, তেমনি প্রতিদান দিই ইহসানওয়ালাদের। মুয়াসসার বলে, সেই মহান প্রতিদানের মতো প্রতিদান দিয়ে। তাহলে ওটা মানে ৭৭:৪১ থেকে ৭৭:৪৩ আয়াতের সবকিছু: ছায়া, বয়ে চলা ঝর্ণা, মন যা চায় সেই ফল, আর তৃপ্তির সঙ্গে খাও ও পান কর, এই আহ্বান।"
          },
          {
            "en": "Najzi comes from j-z-y, to repay or requite, and at-Tabari pairs it with nuthibu, We give recompense. His paraphrase moves from a past tense, as We rewarded these, to a present one, so do We reward, which makes the verse a statement of how Allah deals and not a report about one group. Ibn Kathir reads it the same way: a fresh statement, meaning this is Our recompense for whoever does deeds well. The sentence opens with inna, indeed, and the speaker is the divine We.",
            "bn": "নাজযী এসেছে জ-য-ই ধাতু থেকে, যার অর্থ প্রতিদান দেওয়া, বিনিময় শোধ করা। তাবারী এর পাশে বসান নুসীবু, আমি সওয়াব দিই। তাঁর ব্যাখ্যা অতীতকাল থেকে বর্তমানকালে সরে আসে: এদের যেমন প্রতিদান দিয়েছি, তেমনি প্রতিদান দিই। ফলে আয়াতটি শুধু একটি দলের খবর থাকে না, হয়ে ওঠে আল্লাহর রীতির ঘোষণা: তিনি এভাবেই প্রতিদান দেন। ইবন কাসীরও একইভাবে পড়েন। তাঁর মতে এটি নতুন করে দেওয়া একটি খবর, যার মানে: যে সুন্দরভাবে আমল করে, তার জন্য এটাই আমার প্রতিদান। বাক্যের শুরু ইন্না, অর্থাৎ নিশ্চয়ই দিয়ে, আর বক্তা স্বয়ং আল্লাহ, যিনি এখানে মর্যাদার বহুবচনে কথা বলছেন।"
          },
          {
            "en": "Al-muhsinin are those who practise ihsan, from the root h-s-n, goodness and beauty. As-Sa'di's wording shows the two directions the word can face: ahsana fi, to do well in something, and ahsana ila, to do good to someone. He uses both, of the worship of Allah and of Allah's servants. And the verse changes the name. The people called al-muttaqin in 77:41 are called al-muhsinin here, and at-Tabari's paraphrase joins the two: as We rewarded these God-fearing, so We reward the people of ihsan.",
            "bn": "মুহসিনীন মানে যারা ইহসান করে। ধাতু হ-স-ন, যার মধ্যে আছে ভালো আর সুন্দর দুটো অর্থই। সা'দীর বাক্যে শব্দটির দুটি দিক স্পষ্ট হয়: আহসানা ফী, কোনো কাজ সুন্দর করে করা, আর আহসানা ইলা, কারও প্রতি ভালো ব্যবহার করা। তিনি দুটোই ব্যবহার করেছেন, আল্লাহর ইবাদতের বেলায় এবং আল্লাহর বান্দাদের বেলায়। লক্ষ করার মতো আরেকটি বিষয়, আয়াতে নাম বদলে গেছে। ৭৭:৪১ আয়াতে যারা মুত্তাকীন, এখানে তারাই মুহসিনীন। তাবারীর ব্যাখ্যা দুটোকে জুড়ে দেয়: এই মুত্তাকীদের যেমন দিয়েছি, তেমনি দিই ইহসানওয়ালাদের।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Readings of al-Muhsinin",
          "bn": "মুহসিন কারা: পাঁচটি ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari defines them by obedience and worship: the people of ihsan in their obedience to Us and their worship of Us in the world. The Muyassar is close to him: the people of ihsan in their deeds and their obedience to Us. On 77:41 the Muyassar has already said who the God-fearing are: those who feared their Lord in the world and guarded against His punishment by following His commands and avoiding what He forbade. In both readings, the doer of good is the obedient servant.",
            "bn": "তাবারী মুহসিনদের চেনান আনুগত্য আর ইবাদত দিয়ে: দুনিয়াতে যারা আমার আনুগত্যে ও আমার ইবাদতে ইহসান করেছে। মুয়াসসারের কথাও কাছাকাছি: যারা নিজেদের আমলে ও আমার আনুগত্যে ইহসান করেছে। ৭৭:৪১ আয়াতে মুয়াসসার আগেই বলে দিয়েছে মুত্তাকী কারা। তারা দুনিয়াতে নিজের রবকে ভয় করেছে, তাঁর আদেশ মেনে আর নিষেধ এড়িয়ে চলে তাঁর শাস্তি থেকে আত্মরক্ষা করেছে। দুই ব্যাখ্যাতেই মুহসিন মানে অনুগত বান্দা।"
          },
          {
            "en": "Al-Qurtubi brings belief into the definition: We reward those who did well in their affirmation of Muhammad ﷺ and in their deeds in the world. Ibn Kathir keeps it short: whoever does deeds well. On 77:41 he describes the God-fearing as servants who worshipped Allah by carrying out the obligations and leaving the forbidden. Each gloss names something the others take for granted. Al-Qurtubi makes explicit that faith in the Messenger ﷺ comes first, and Ibn Kathir that the measure is how the deed is done.",
            "bn": "কুরতুবী সংজ্ঞায় ঈমানকে সামনে আনেন: যারা মুহাম্মাদ ﷺ-কে সত্য বলে মেনে নেওয়ায় এবং দুনিয়ার আমলে ইহসান করেছে, আমি তাদের প্রতিদান দিই। ইবন কাসীর সংক্ষেপে বলেন: যে সুন্দরভাবে আমল করেছে। ৭৭:৪১ আয়াতে তিনি মুত্তাকীদের পরিচয় দেন এমন বান্দা হিসেবে, যারা ফরজ আদায় করে আর হারাম ছেড়ে আল্লাহর ইবাদত করেছে। প্রতিটি ব্যাখ্যা এমন কিছুর নাম নেয়, যা অন্যরা ধরে নিয়েছেন। কুরতুবী খুলে বলেন, রাসূল ﷺ-এর প্রতি ঈমান আগে। ইবন কাসীর বলেন, মাপকাঠি হলো আমলটা কেমন করে করা হলো।"
          },
          {
            "en": "As-Sa'di widens the circle. On 77:41 he describes the God-fearing as those who guarded against denial and were marked by affirming the truth in their words, their actions and their deeds, which they could only be by doing the obligations and leaving the forbidden. On 77:43 he adds: and so is everyone who did well in the worship of Allah and did good to the servants of Allah. These are differences of emphasis rather than a dispute; no commentator here excludes what another includes.",
            "bn": "সা'দী পরিধিটা বড় করেন। ৭৭:৪১ আয়াতে তিনি মুত্তাকীদের বর্ণনা দেন এভাবে: যারা মিথ্যারোপ থেকে বেঁচে থেকেছে, কথায়, কাজে ও আমলে সত্যকে মেনে নেওয়া যাদের পরিচয়। আর ফরজ আদায় ও হারাম বর্জন ছাড়া কেউ এমন হতে পারে না। ৭৭:৪৩ আয়াতে তিনি যোগ করেন: যে-ই আল্লাহর ইবাদতে ইহসান করেছে আর আল্লাহর বান্দাদের প্রতি সদাচরণ করেছে, তার বেলাতেও তাই। এগুলো জোর দেওয়ার পার্থক্য, মতবিরোধ নয়। এখানে কোনো তাফসীরকার অন্যজনের অন্তর্ভুক্ত করা বিষয়কে বাদ দেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds, Kindness, Nothing Lost",
          "bn": "আমল, অনুগ্রহ, কিছুই হারায় না"
        },
        "p": [
          {
            "en": "The welcome in 77:43 ends with bima kuntum ta'malun, for what you used to do. At-Tabari explains: it will be said to them, this is a recompense for the obedience to Allah you used to do in the world, and your striving in what brought you near to Him. Al-Baghawi says the same in a few words: in the world, by obedience to Me. As-Sa'di is the most direct: your deeds are the cause that brings you to this lasting bliss.",
            "bn": "৭৭:৪৩ আয়াতের সম্ভাষণ শেষ হয় বিমা কুনতুম তা'মালূন দিয়ে, তোমরা যা করতে তার বিনিময়ে। তাবারী ব্যাখ্যা করেন: তাদের বলা হবে, দুনিয়াতে আল্লাহর যে আনুগত্য তোমরা করতে, আর যে কাজ তোমাদের তাঁর কাছে নিয়ে যেত তাতে যে চেষ্টা করতে, এ তারই প্রতিদান। বাগাভী একই কথা বলেন অল্প কথায়: দুনিয়াতে, আমার আনুগত্যের মাধ্যমে। সা'দী সবচেয়ে সরাসরি: তোমাদের আমলই সেই কারণ, যা তোমাদের এই চিরস্থায়ী নিয়ামতে পৌঁছে দিয়েছে।"
          },
          {
            "en": "At-Tabari closes his comment on 77:44 with a promise: for their ihsan, We do not let their reward be lost in the hereafter. Ibn Kathir adds a note on 77:43 that changes its tone: these words are said to them by way of ihsan towards them, out of kindness. The same word now runs both ways, the servants' good doing and the kindness with which they are addressed. The commentaries consulted for these verses do not take up the larger question of mercy and deeds, and this article does not settle it on their behalf.",
            "bn": "৭৭:৪৪ আয়াতে তাবারী তাঁর ব্যাখ্যা শেষ করেন একটি প্রতিশ্রুতি দিয়ে: তাদের ইহসানের প্রতিদান আমি আখিরাতে নষ্ট হতে দিই না। ইবন কাসীর ৭৭:৪৩ আয়াতে একটি কথা যোগ করেন, যা পুরো বাক্যের সুর বদলে দেয়: তাদের প্রতি অনুগ্রহ করেই কথাগুলো বলা হবে। আরবিতে তিনি এখানেও ইহসান শব্দই ব্যবহার করেছেন। ফলে শব্দটি দুই দিকে চলে: বান্দার সুন্দর আমল, আর যে দয়ার সঙ্গে তাদের সম্বোধন করা হয়। এ আয়াতগুলোর যে তাফসীর আমরা পড়েছি, সেগুলো রহমত আর আমলের সম্পর্কের বড় প্রশ্নে যায়নি। তাই তাদের হয়ে এ লেখাও সে প্রশ্নের মীমাংসা করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Refrain That Answers It",
          "bn": "যে বাক্য এর জবাবে আসে"
        },
        "p": [
          {
            "en": "Straight after the promise, 77:45 repeats: woe that day to the deniers. As-Sa'di reads the two verses together and draws one line from them: if the deniers had no share of this woe except missing this bliss, that alone would be enough deprivation and loss. Then 77:46 turns the same verb on them: eat and enjoy yourselves a little, you are criminals. Ibn Kathir calls it a command of threat and warning. One group is told to eat with ease; the other, to eat for a little while.",
            "bn": "প্রতিশ্রুতির ঠিক পরেই ৭৭:৪৫ আয়াত আবার বলে: সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। সা'দী দুই আয়াত একসঙ্গে পড়েন এবং একটি কথা বের করে আনেন: এই দুর্ভোগে তাদের আর কিছু না থাকলেও শুধু এই নিয়ামত হাতছাড়া হওয়াটাই বঞ্চনা আর ক্ষতি হিসেবে যথেষ্ট। এরপর ৭৭:৪৬ আয়াত একই ক্রিয়া তাদের দিকে ঘুরিয়ে দেয়: অল্প কিছুকাল খেয়ে নাও, ভোগ করে নাও, তোমরা তো অপরাধী। ইবন কাসীর একে বলেন হুমকি ও ভীতি প্রদর্শনের আদেশ। এক দলকে বলা হয় তৃপ্তির সঙ্গে খেতে, অন্য দলকে অল্প কিছুকাল।"
          },
          {
            "en": "The deniers in these verses are described as the text describes them, on the Day it describes; the passage licenses nothing against any living person or community, and gives nobody the right to name who is a denier and who a doer of good. Its warning is addressed to the listener's own heart. On the hadith slot, plainly: none of the commentaries consulted for this verse attaches a narration to it, so this article quotes none rather than borrowing from elsewhere.",
            "bn": "এই আয়াতগুলোতে মিথ্যারোপকারীদের বর্ণনা ততটুকুই, যতটুকু কুরআন দিয়েছে, আর তা সেই দিনের কথা, যে দিনের কথা কুরআন বলছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ অংশ কোনো কিছুর অনুমতি দেয় না। কে মিথ্যারোপকারী আর কে মুহসিন, সে রায় দেওয়ার অধিকারও কাউকে দেয় না। এর সতর্কবাণী শ্রোতার নিজের অন্তরের জন্য। হাদিসের ব্যাপারে সোজা কথা: এই আয়াতের যেসব তাফসীর আমরা পড়েছি, তার কোনোটিই এর সঙ্গে কোনো বর্ণনা যুক্ত করেনি। তাই অন্য জায়গা থেকে ধার করে না এনে এ লেখায় কোনো হাদিস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Words Elsewhere",
          "bn": "একই বাক্য অন্য সূরায়"
        },
        "p": [
          {
            "en": "The same four Arabic words close 37:80, 37:121 and 37:131, each time after peace is invoked on a prophet: on Nuh (AS) in 37:79, on Musa and Harun (AS) in 37:120, on Ilyas (AS) in 37:130. In 37:105 they follow the call to Ibrahim (AS) that he has fulfilled the vision. There what comes before it is a good mention left among later generations and peace upon a prophet; here it is a garden. The words stay the same while the gift changes.",
            "bn": "হুবহু এই চারটি আরবি শব্দ দিয়ে শেষ হয় ৩৭:৮০, ৩৭:১২১ ও ৩৭:১৩১ আয়াত, প্রতিবার কোনো নবীর উপর সালামের পর। ৩৭:৭৯ আয়াতে নূহ (আঃ)-এর উপর, ৩৭:১২০ আয়াতে মূসা ও হারূন (আঃ)-এর উপর, ৩৭:১৩০ আয়াতে ইলইয়াস (আঃ)-এর উপর। ৩৭:১০৫ আয়াতে ইবরাহীম (আঃ)-কে ডেকে জানানো হয়, তিনি স্বপ্নকে সত্যে পরিণত করেছেন, আর তার পরেই আসে এ বাক্য। সেখানে এর আগে আছে পরবর্তী প্রজন্মের মাঝে সুনাম রেখে যাওয়া আর নবীর উপর সালাম, এখানে জান্নাত। বাক্য একই থাকে, দানের রূপ বদলায়।"
          },
          {
            "en": "In 12:22 and 28:14, when Yusuf and then Musa (AS) reach full strength, Allah gives each of them judgement and knowledge, and says: thus do We reward the doers of good. 55:60 asks the question that sums up the theme: is the reward of ihsan anything but ihsan? And 9:120 and 18:30 state the promise at-Tabari draws from this verse, that Allah does not let the reward of those who do good be lost. 52:19 repeats the welcome of 77:43 word for word.",
            "bn": "১২:২২ ও ২৮:১৪ আয়াতে ইউসুফ (আঃ) আর পরে মূসা (আঃ) যখন পূর্ণ যৌবনে পৌঁছান, আল্লাহ তাঁদের প্রত্যেককে প্রজ্ঞা ও জ্ঞান দেন, আর বলেন: এভাবেই আমি সৎকর্মশীলদের প্রতিদান দিই। ৫৫:৬০ আয়াত পুরো বিষয়টি এক প্রশ্নে বেঁধে দেয়: ইহসানের প্রতিদান ইহসান ছাড়া আর কী হতে পারে? ৯:১২০ ও ১৮:৩০ আয়াতে সেই প্রতিশ্রুতি, যা তাবারী এই আয়াত থেকে বের করেন: যারা ভালো কাজ করে, আল্লাহ তাদের প্রতিদান নষ্ট করেন না। আর ৫২:১৯ আয়াত ৭৭:৪৩ আয়াতের সম্ভাষণটি হুবহু ফিরিয়ে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Just Doing, Doing Well",
          "bn": "শুধু করা নয়, সুন্দর করে করা"
        },
        "p": [
          {
            "en": "The glosses give a practical test. At-Tabari and the Muyassar speak of ihsan in obedience and worship, which asks how a prayer is prayed, not only whether. One prayer a day, chosen in advance, can be given unhurried time: wudu done slowly, the recitation understood, the sitting after it kept for a few minutes of remembrance. Ibn Kathir and as-Sa'di tie the God-fearing to doing the obligations and leaving the forbidden, so the week also needs one thing quietly given up.",
            "bn": "তাফসীরগুলো থেকে একটা বাস্তব পরীক্ষা পাওয়া যায়। তাবারী আর মুয়াসসার আনুগত্য ও ইবাদতে ইহসানের কথা বলেন। প্রশ্ন তাই শুধু নামাজ পড়লাম কি না, তা নয়, কেমন করে পড়লাম। দিনের একটি নামাজ আগে থেকে বেছে নিয়ে তাকে তাড়াহুড়ো ছাড়া সময় দেওয়া যায়: ধীরে অজু, বুঝে বুঝে তিলাওয়াত, সালামের পর কয়েক মিনিট বসে জিকির। ইবন কাসীর ও সা'দী মুত্তাকীদের পরিচয় বেঁধেছেন ফরজ আদায় আর হারাম বর্জনের সঙ্গে। তাই সপ্তাহে অন্তত একটা জিনিস চুপচাপ ছেড়ে দেওয়াও দরকার।"
          },
          {
            "en": "As-Sa'di's second direction, doing good to the servants of Allah, turns the test outward. It might mean paying a worker before he asks, answering a parent's call with patience, or doing a dull task at work as carefully as if someone were checking it. Al-Qurtubi's gloss puts affirmation of the Messenger ﷺ at the root, so the same week can include reading one of his sayings and acting on it. These are not a checklist; they sketch the life the verse calls ihsan.",
            "bn": "সা'দীর দ্বিতীয় দিক, আল্লাহর বান্দাদের প্রতি সদাচরণ, পরীক্ষাটাকে বাইরের দিকে ঘুরিয়ে দেয়। হতে পারে চাওয়ার আগেই কর্মচারীর পাওনা মিটিয়ে দেওয়া, ধৈর্যের সঙ্গে মা-বাবার ডাকে সাড়া দেওয়া, কিংবা অফিসের একঘেয়ে কাজটা এমন যত্নে করা যেন কেউ খুঁটিয়ে দেখছে। কুরতুবীর ব্যাখ্যায় গোড়ায় আছে রাসূল ﷺ-কে সত্য বলে মেনে নেওয়া। তাই এই সপ্তাহে তাঁর একটি হাদিস পড়ে সে অনুযায়ী আমল করাও এর অংশ হতে পারে। এগুলো কোনো তালিকা নয়। আয়াত যাকে ইহসান বলছে, এগুলো সেই জীবনের কয়েকটি রেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Among Them",
          "bn": "তাদের দলে থাকার মিনতি"
        },
        "p": [
          {
            "en": "This is a short supplication composed in the vocabulary of 77:41 to 77:44, not a narrated du'a: Allahumma-j'alna min al-muttaqin al-muhsinin, wa a'inna 'ala ihsani 'ibadatika wal-ihsani ila 'ibadik. O Allah, place us among the God-fearing, the doers of good, and help us to do well in Your worship and to do good to Your servants. Let us hear on that Day: eat and drink with ease, and do not let any good we did be lost.",
            "bn": "নিচের দু'আটি ৭৭:৪১ থেকে ৭৭:৪৪ আয়াতের শব্দ দিয়ে সাজানো একটি ছোট মিনতি, কোনো বর্ণিত দু'আ নয়: আল্লাহুম্মাজ'আলনা মিনাল মুত্তাকীনাল মুহসিনীন, ওয়া আ'ইন্না 'আলা ইহসানি 'ইবাদাতিকা ওয়াল ইহসানি ইলা 'ইবাদিক। হে আল্লাহ, আমাদের মুত্তাকী ও মুহসিনদের দলে রাখুন। আপনার ইবাদত সুন্দর করে করতে আর আপনার বান্দাদের সঙ্গে ভালো ব্যবহার করতে আমাদের সাহায্য করুন। সেদিন আমাদের শুনতে দিন, তৃপ্তির সঙ্গে খাও আর পান কর। আর আমাদের কোনো ভালো কাজ নষ্ট হতে দেবেন না।"
          },
          {
            "en": "The du'a borrows its words from the verses rather than adding to them. It asks for the two names the passage gives the same people, and for both directions of ihsan that as-Sa'di names. Its last line leans on the promise at-Tabari reads in 77:44, that the reward of those who do good is not lost. It can be said after any prayer, and it is best said by someone who has just tried, that day, to do one thing well.",
            "bn": "দু'আটি আয়াতের শব্দই ধার নিয়েছে, নতুন কিছু জোড়েনি। একই মানুষদের এই অংশ যে দুটি নাম দিয়েছে, দু'আয় সেই দুটিই চাওয়া হয়েছে। সা'দী ইহসানের যে দুই দিকের কথা বলেন, দুটোই আছে। শেষ লাইনটি দাঁড়িয়ে আছে সেই প্রতিশ্রুতির উপর, যা তাবারী ৭৭:৪৪ আয়াতে পড়েন: ভালো কাজ যারা করে, তাদের প্রতিদান নষ্ট হয় না। যেকোনো নামাজের পর এটি পড়া যায়। আর সবচেয়ে মানায় তার মুখে, যে সেদিন অন্তত একটা কাজ সুন্দর করে করার চেষ্টা করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Welcome",
          "bn": "সম্ভাষণের আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Which of my daily acts of worship do I complete correctly but without care, and what would it take to do just one of them well tomorrow? When I think of the people around me, who would say I have done good to them, and who would pause before answering? Does guarding against wrong in my life come together with doing good, or have I settled for avoiding sins while leaving good undone?",
            "bn": "প্রতিদিনের কোন ইবাদতটা আমি নিয়ম মেনে শেষ করি, কিন্তু যত্ন ছাড়া? কাল অন্তত একটাকে সুন্দর করে করতে হলে কী লাগবে? আশপাশের মানুষগুলোর কথা ভাবলে কারা বলবে আমি তাদের সঙ্গে ভালো ব্যবহার করেছি, আর কারা উত্তর দেওয়ার আগে থমকে যাবে? আমার জীবনে অন্যায় থেকে বেঁচে থাকা কি ভালো কাজের সঙ্গে হাত ধরে চলে? নাকি গুনাহ এড়িয়েই আমি সন্তুষ্ট, আর ভালো কাজগুলো করাই হয় না?"
          },
          {
            "en": "If the words eat and drink with ease were spoken to me, what would I hope they referred to in my life? Which small good have I left undone because I assumed nobody would notice it, when 9:120 says the reward of those who do good is not lost? And when I hear the woe of 77:45, do I first think of others, or do I let it ask about me?",
            "bn": "তৃপ্তির সঙ্গে খাও আর পান কর, এই কথা যদি আমাকে বলা হয়, আমার জীবনের কোন কাজগুলোর দিকে তা ইশারা করুক বলে আমি আশা করি? কেউ টের পাবে না ভেবে কোন ছোট ভালো কাজটা আমি করিনি, অথচ ৯:১২০ আয়াত বলছে, ভালো কাজ যারা করে তাদের প্রতিদান নষ্ট হয় না? আর ৭৭:৪৫ আয়াতের দুর্ভোগের কথা শুনলে আমার মনে আগে অন্যদের কথা আসে, নাকি প্রশ্নটা আমি নিজের দিকে ফেরাই?"
          }
        ]
      }
    ]
  }
});
