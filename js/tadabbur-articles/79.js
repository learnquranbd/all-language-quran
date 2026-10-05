/**
 * Tadabbur long-form articles — surah 79.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "79:7": {
    "sections": [
      {
        "h": {
          "en": "The One That Rides Behind",
          "bn": "যে আসে ঠিক পেছনে"
        },
        "p": [
          {
            "en": "Tatba'uha ar-radifa: there will follow it the one that comes behind. In Arabic the verse is two words, and it completes a scene that 79:6 opened with ar-rajifa. The pronoun ha points back to that first one, so whatever the radifa is, it is named by what it follows. As-Sa'di glosses it in a single line: the other quake, which rides behind it and comes after it. His verb, tardifuha, shares the root r-d-f with the name itself, so his gloss says the word twice: a follower is what follows.",
            "bn": "তাতবাউহার রাদিফাহ: তার পিছু পিছু আসবে পরেরটি। আরবিতে আয়াতটি মাত্র দুই শব্দের। ৭৯:৬ আয়াত আর-রাজিফাহ দিয়ে যে দৃশ্য শুরু করেছিল, এ আয়াত তা পূর্ণ করে। 'হা' সর্বনামটি সেই প্রথমটির দিকেই ফিরে যায়। ফলে রাদিফাহ যা-ই হোক, তার পরিচয় সে কার পেছনে আসে তা দিয়ে। সা'দী এক লাইনে এর ব্যাখ্যা দেন: আরেকটি কম্পন, যা তার পেছনে চড়ে আসে এবং তার পরপরই আসে। তাঁর ব্যবহার করা ক্রিয়া তারদিফুহা, আর নামটি রাদিফাহ, দুটোর ধাতু একই, র-দ-ফ। তাই তাঁর ব্যাখ্যায় শব্দটা দুবার আসে। অনুসারী মানে যে পেছনে আসে।"
          },
          {
            "en": "Ibn Abbas (RA), in the report at-Tabari gives, says the latter follows the first: the rajifa is the first blast and the radifa the last. At-Tabari's own opening gloss is the same in two words, an-nafkha ath-thaniya, the second blast. The Muyassar folds 79:1 to 79:7 into one sentence: creation will surely be raised and reckoned, on the day the earth is shaken by the first blast, the blast of death, which another blast, for bringing to life, follows. On the plainest reading, the verse is the hinge between dying and rising.",
            "bn": "তাবারীর আনা বর্ণনায় ইবন আব্বাস (রাঃ) বলেন, পরেরটি প্রথমটির পেছনে আসে। রাজিফাহ হলো প্রথম ফুঁক, আর রাদিফাহ শেষ ফুঁক। তাবারী নিজেও আয়াতের শুরুতে দুই শব্দে একই কথা বলেন: আন-নাফখাতুস সানিয়াহ, দ্বিতীয় ফুঁক। মুয়াসসার ৭৯:১ থেকে ৭৯:৭ পর্যন্ত এক বাক্যে গেঁথে দেয়। সৃষ্টিকে অবশ্যই ওঠানো হবে, হিসাব নেওয়া হবে। সেদিন প্রথম ফুঁকে, মৃত্যুর ফুঁকে, জমিন কেঁপে উঠবে। তার পেছনে আসবে আরেক ফুঁক, জীবন ফিরিয়ে দেওয়ার জন্য। সবচেয়ে সরল পাঠে আয়াতটি তাই সেই মোড়, যেখানে মৃত্যু থেকে পুনরুত্থানের দিকে ঘুরে যাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Blast That Gives Life",
          "bn": "যে ফুঁকে প্রাণ ফেরে"
        },
        "p": [
          {
            "en": "Ibn Kathir reports Ibn Abbas (RA) saying that these are the two blasts, the first and the second, and adds that Mujahid, al-Hasan, Qatada, ad-Dahhak and more than one other said the same. At-Tabari gives several of them in their own words. Ad-Dahhak: the rajifa is the first blast, the radifa the other one. Qatada calls them two cries, sayhatan: the first kills everything by Allah's leave, and the other gives life to everything by Allah's leave. Al-Qurtubi repeats that line from Ibn Abbas, al-Hasan and Qatada, and explains the two cries as the two blowings.",
            "bn": "ইবন কাসীর ইবন আব্বাস (রাঃ)-এর কথা আনেন: এ দুটি হলো দুই ফুঁক, প্রথম আর দ্বিতীয়। তিনি জানান, মুজাহিদ, হাসান, কাতাদা, দাহহাকসহ আরও অনেকে একই কথা বলেছেন। তাবারী তাঁদের কয়েকজনের কথা তাঁদের নিজের ভাষাতেই আনেন। দাহহাক বলেন, রাজিফাহ প্রথম ফুঁক, রাদিফাহ পরের ফুঁক। কাতাদা এ দুটিকে বলেন দুই আওয়াজ, সাইহাতান। প্রথমটি আল্লাহর হুকুমে সবকিছুকে মেরে ফেলবে, আর পরেরটি আল্লাহর হুকুমে সবকিছুকে জীবিত করবে। কুরতুবী ইবন আব্বাস, হাসান ও কাতাদা থেকে একই কথা আবার বলেন। দুই আওয়াজ বলতে যে দুই ফুঁক বোঝানো হয়েছে, তাও খুলে বলেন।"
          },
          {
            "en": "Al-Hasan, as at-Tabari reports him, puts it in two clauses: the first kills the living, and the second gives life to the dead. Then he recited 39:68: and the Horn will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills; then it will be blown into another time, and at once they will be standing, looking on. The verse he chose has the same shape as the verse under study, a blowing that strikes down and then another, ukhra, after which people stand.",
            "bn": "তাবারীর বর্ণনায় হাসান কথাটা দুই টুকরায় বলেন। প্রথমটি জীবিতদের মৃত্যু ঘটাবে, দ্বিতীয়টি মৃতদের জীবিত করবে। তারপর তিনি ৩৯:৬৮ আয়াত তিলাওয়াত করেন: শিঙ্গায় ফুঁক দেওয়া হবে, তখন আসমান ও জমিনে যারা আছে সবাই বেহুঁশ হয়ে পড়ে যাবে, তবে আল্লাহ যাদের চান তারা ছাড়া। তারপর আবার ফুঁক দেওয়া হবে, আর সঙ্গে সঙ্গে তারা দাঁড়িয়ে তাকিয়ে থাকবে। তাঁর বেছে নেওয়া আয়াতের গড়নও এ আয়াতের মতো। প্রথমে এক ফুঁক, যা সবাইকে ফেলে দেয়। তারপর আরেকটি, উখরা, যার পরে মানুষ উঠে দাঁড়ায়।"
          },
          {
            "en": "On this reading the follower is not a second calamity piled on the first. The first undoes life; the second restores it, and restores it for a purpose, since the Muyassar's sentence ends in being raised and reckoned. The dread of 79:6 and the return of 79:7 sit two words apart. Whatever a person meets when the second blast sounds, it will be met awake and standing, as 39:68 pictures them, and facing the reckoning that the Muyassar names.",
            "bn": "এ পাঠ অনুযায়ী পেছনের ফুঁকটি প্রথম বিপদের উপর চাপানো আরেকটা বিপদ নয়। প্রথমটি জীবন কেড়ে নেয়, দ্বিতীয়টি তা ফিরিয়ে দেয়। আর ফিরিয়ে দেয় একটা উদ্দেশ্যে, কারণ মুয়াসসারের বাক্য শেষ হয় ওঠানো আর হিসাবের কথায়। ৭৯:৬ আয়াতের আতঙ্ক আর ৭৯:৭ আয়াতের ফিরে আসা, এ দুয়ের দূরত্ব মাত্র দুই শব্দ। দ্বিতীয় ফুঁক বাজলে মানুষ যা-ই সামনে পাক, পাবে জেগে উঠে, দাঁড়ানো অবস্থায়, যেমন ৩৯:৬৮ আয়াত ছবি আঁকে। আর সামনে থাকবে সেই হিসাব, যার কথা মুয়াসসার বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Quaking Earth, Splitting Sky",
          "bn": "কাঁপা জমিন, ফাটা আসমান"
        },
        "p": [
          {
            "en": "At-Tabari then opens a second view with the words wa qala akharun, and others said. Mujahid, through Ibn Abi Najih: on the day the rajifa shakes means the earth and the mountains shake, and that is the zalzala, the great quake. The radifa, he said, is the words: when the sky is split, and they are crushed with a single crushing. His phrase joins two verses, the opening of 84:1 and the close of 69:14, so the follower becomes the sky torn open and the land levelled.",
            "bn": "এরপর তাবারী 'ওয়া কালা আখারূন', অর্থাৎ অন্যরা বলেছেন, এই কথা দিয়ে দ্বিতীয় একটি মত আনেন। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেন, রাজিফাহ কাঁপবে মানে জমিন আর পাহাড় কাঁপবে, আর সেটাই যালযালা, মহাভূকম্পন। আর রাদিফাহ, তাঁর ভাষায়, এই কথাগুলো: যখন আসমান ফেটে যাবে, আর দুটোকে এক আঘাতে চূর্ণ করা হবে। তাঁর বাক্যে দুটি আয়াত জোড়া লেগেছে, ৮৪:১ আয়াতের শুরু আর ৬৯:১৪ আয়াতের শেষাংশ। এ মতে পেছনে যা আসে তা হলো ফেটে যাওয়া আসমান আর মাটির সঙ্গে মিশে যাওয়া জমিন।"
          },
          {
            "en": "Al-Baghawi gives the same view in a fuller sentence: the radifa is when the sky splits, and the earth and the mountains are lifted and crushed with a single crushing. Al-Qurtubi has it too, and adds that this comes after the quake. Ibn Kathir places Mujahid differently. He counts him among those who said the two blasts, then reports from him a comparison: the first is like 73:14, the day the earth and the mountains shake, and the second like 69:14. The texts read here leave the two placements as they stand.",
            "bn": "বাগাভী একই মত আরেকটু খুলে বলেন। রাদিফাহ হলো সেই সময়, যখন আসমান ফেটে যাবে, আর জমিন ও পাহাড় তুলে নিয়ে এক আঘাতে চূর্ণ করা হবে। কুরতুবীও মতটি আনেন, সঙ্গে যোগ করেন যে এটা ঘটবে ভূকম্পনের পরে। ইবন কাসীর অবশ্য মুজাহিদকে রাখেন অন্য জায়গায়। যাঁরা দুই ফুঁকের কথা বলেছেন, তাঁদের মধ্যে তিনি মুজাহিদকেও গোনেন। তারপর তাঁর কাছ থেকে একটি তুলনা আনেন: প্রথমটি ৭৩:১৪ আয়াতের মতো, যেদিন জমিন ও পাহাড় কাঁপবে, আর দ্বিতীয়টি ৬৯:১৪ আয়াতের মতো। এখানে পড়া লেখাগুলো এই দুই অবস্থানের মীমাংসা করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as the Hour",
          "bn": "নাম যখন কিয়ামত"
        },
        "p": [
          {
            "en": "Two further glosses name the event rather than the sound. Ibn Zayd, in at-Tabari: the rajifa is the earth, and the radifa is as-sa'a, the Hour. 'Ata', in al-Baghawi: the rajifa is the Qiyama, and the radifa is the ba'th, the raising of the dead. Al-Qurtubi records one more under qila, it was said: the rajifa moves the earth, and the radifa is another quake that brings the earths to an end. He closes these glosses with fa-Allahu a'lam, and Allah knows best.",
            "bn": "আরও দুটি ব্যাখ্যা আওয়াজের বদলে ঘটনার নাম ধরে বলে। তাবারীর বর্ণনায় ইবন যায়দ বলেন, রাজিফাহ হলো জমিন, আর রাদিফাহ হলো আস-সাআহ, কিয়ামতের মুহূর্ত। বাগাভীর বর্ণনায় আতা বলেন, রাজিফাহ হলো কিয়ামত, আর রাদিফাহ হলো বা'স, মৃতদের ওঠানো। কুরতুবী 'কীলা', অর্থাৎ বলা হয়েছে, এই কথা দিয়ে আরও একটি মত আনেন। রাজিফাহ জমিনকে নাড়িয়ে দেবে, আর রাদিফাহ হলো আরেক ভূকম্পন, যা জমিনগুলোকে নিঃশেষ করে দেবে। এই ব্যাখ্যাগুলো তিনি শেষ করেন 'ফাল্লাহু আ'লাম' বলে, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "These are kept here as the sources keep them, side by side. At-Tabari opens with the second blast as the meaning, records Mujahid's and Ibn Zayd's views under others said, and passes on to the grammar of the oath without a ruling between them. What every gloss shares is the shape the verse itself gives: one thing, then a second that comes behind it. Whether it is named a blast, a quake, the Hour or the raising, the follower arrives, and each name points to the same Day.",
            "bn": "সূত্রগুলো এসব মত যেভাবে পাশাপাশি রেখেছে, এখানেও সেভাবেই রাখা হলো। তাবারী শুরু করেন দ্বিতীয় ফুঁকের অর্থ দিয়ে। তারপর মুজাহিদ আর ইবন যায়দের মত আনেন 'অন্যরা বলেছেন' শিরোনামে। এরপর শপথের ব্যাকরণে চলে যান, এগুলোর মধ্যে কোনো রায় দেন না। সব ব্যাখ্যায় একটা জিনিস মেলে, আর সেটা আয়াতের নিজেরই গড়ন। প্রথমে একটি ঘটনা, তারপর তার পেছনে আরেকটি। নাম ফুঁক হোক, কম্পন হোক, কিয়ামত হোক বা পুনরুত্থান, পেছনেরটা আসবেই। আর প্রতিটি নাম একই দিনের দিকে ইশারা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Gap Between the Two",
          "bn": "দুই ফুঁকের মাঝের ফাঁক"
        },
        "p": [
          {
            "en": "How long lies between them? Qatada, in at-Tabari, says the Prophet ﷺ used to say bainahuma arba'un, between them forty, and the report adds that his companions said: by Allah, he told us no more than that. Al-Baghawi writes forty years in his own voice, and al-Qurtubi gives forty years as a hadith. The narration with the number in Sahih al-Bukhari, 4935, is discussed under 78:18, with Abu Hurayra's refusal to name the unit, and it is not retold here.",
            "bn": "দুই ফুঁকের মাঝে কতটা সময়? তাবারীর বর্ণনায় কাতাদা বলেন, নবী ﷺ বলতেন, বাইনাহুমা আরবাঊন, দুটোর মাঝে চল্লিশ। বর্ণনায় আরও আছে, তাঁর সঙ্গীরা বলেছেন, আল্লাহর কসম, এর বেশি তিনি আমাদের বলেননি। বাগাভী নিজের কথায় লেখেন চল্লিশ বছর। কুরতুবী চল্লিশ বছরের কথা হাদীস হিসেবে আনেন। সংখ্যাসহ সহীহ বুখারীর বর্ণনাটি, নম্বর ৪৯৩৫, ৭৮:১৮ আয়াতের আলোচনায় এসেছে। সেখানে আবু হুরায়রা (রাঃ) একক বলতে অস্বীকার করেছিলেন। এখানে তা আবার বলা হচ্ছে না।"
          },
          {
            "en": "At-Tabari also brings a long report from Abu Hurayra that counts three blowings of the Horn, of terror, of swooning and of standing, and applies these verses to the terror of the first. Its chain, as at-Tabari prints it, runs through a man and then a man of the Ansar, two narrators left unnamed, so it is not used here. Qatada's further note, introduced with it was mentioned to us, of a rain sent during the forty, is not relied on here either.",
            "bn": "তাবারী আবু হুরায়রা থেকে আরেকটি দীর্ঘ বর্ণনাও আনেন। তাতে শিঙ্গার তিনটি ফুঁকের কথা আছে: ভয়ের ফুঁক, বেহুঁশ হওয়ার ফুঁক আর দাঁড়িয়ে যাওয়ার ফুঁক। এ আয়াতগুলোকে সেখানে প্রথম ফুঁকের আতঙ্কের সঙ্গে জোড়া হয়েছে। কিন্তু তাবারী যে সনদ দেন, তাতে আছে 'এক ব্যক্তি', তারপর 'আনসারের এক ব্যক্তি'। দুজন বর্ণনাকারীর নামই নেই। তাই বর্ণনাটি এখানে নেওয়া হলো না। কাতাদার আরেকটি কথা আসে 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে, চল্লিশের মধ্যে বৃষ্টি পাঠানোর কথা। সেটার উপরও এখানে ভর করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Woken by Two Words",
          "bn": "দুই শব্দে জেগে ওঠা"
        },
        "p": [
          {
            "en": "One narration attaches to the verse itself. At-Tabari reports from Ubayy ibn Ka'b (RA) that the Messenger of Allah ﷺ recited 79:6 and 79:7 and said: the rajifa has come, followed by the radifa; death has come with what it holds. Ibn Kathir notes that Ahmad and at-Tirmidhi both record it. In Jami' at-Tirmidhi, number 2457, the English on the page reads in full, beginning with the night:",
            "bn": "একটি বর্ণনা সরাসরি এ আয়াতের সঙ্গেই যুক্ত। তাবারী উবাই ইবন কা'ব (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রাসূল ﷺ ৭৯:৬ ও ৭৯:৭ আয়াত তিলাওয়াত করে বললেন: রাজিফাহ এসে গেছে, তার পেছনে রাদিফাহ। মৃত্যু এসে গেছে, সঙ্গে যা আছে তা নিয়ে। ইবন কাসীর জানান, আহমাদ ও তিরমিযী দুজনেই এটি বর্ণনা করেছেন। জামি' তিরমিযী, নম্বর ২৪৫৭-এ পুরো বর্ণনাটি এরকম, শুরু রাতের কথা দিয়ে:"
          },
          {
            "en": "At-Tufail bin Ubayy bin Ka'b narrated from his father who said: \"When a third of the night had passed, the Messenger of Allah ﷺ stood and said: 'O you people! Remember Allah! Remember Allah! The Rajifah is coming, followed by the Radifah, death and what it brings is coming, death and what it brings is coming!'\" Ubayy said: \"I said: 'O Messenger of Allah! Indeed I say very much Salat for you. How much of my Salat should I make for you?' He said: 'As you wish.'\"",
            "bn": "তুফাইল ইবন উবাই ইবন কা'ব তাঁর পিতা থেকে বর্ণনা করেন। তিনি বলেন: \"রাতের এক-তৃতীয়াংশ পার হলে আল্লাহর রাসূল ﷺ উঠে দাঁড়ালেন এবং বললেন: 'হে লোকসকল! আল্লাহকে স্মরণ করো! আল্লাহকে স্মরণ করো! রাজিফাহ আসছে, তার পেছনে রাদিফাহ। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে। মৃত্যু আসছে, সঙ্গে যা আনে তা নিয়ে!'\" উবাই বলেন: \"আমি বললাম: 'হে আল্লাহর রাসূল! আমি আপনার উপর অনেক দরুদ পড়ি। আমার দোয়ার কতটুকু আপনার জন্য রাখব?' তিনি বললেন: 'যতটুকু তুমি চাও।'\""
          },
          {
            "en": "\"[He said:] I said: 'A fourth?' He said: 'As you wish. But if you add more it would be better for you.' I said: 'Then half?' He said: 'As you wish. And if you add more it would be better [for you].' [He said:] I said: 'Then two-thirds?' He said: 'As you wish, but if you add more it would be better for you.' I said: 'Should I make all of my Salat for you?' He said: 'Then your problems would be solved and your sins would be forgiven.'\" At-Tirmidhi grades it hasan.",
            "bn": "\"আমি বললাম: 'এক-চতুর্থাংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে অর্ধেক?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'তাহলে দুই-তৃতীয়াংশ?' তিনি বললেন: 'যতটুকু তুমি চাও। তবে বাড়ালে তোমার জন্যই ভালো।' আমি বললাম: 'আমার পুরো দোয়াটাই কি আপনার জন্য করে দেব?' তিনি বললেন: 'তাহলে তোমার দুশ্চিন্তা দূর হবে, আর তোমার গুনাহ মাফ করা হবে।'\" তিরমিযী একে হাসান বলেছেন।"
          },
          {
            "en": "The hour differs across the routes. The Arabic of at-Tirmidhi on the fetched page reads thulutha al-layl, two thirds of the night, though the English beside it says a third; Ibn Kathir, quoting at-Tirmidhi, has a third; al-Qurtubi and al-Baghawi, by other routes, a quarter. The call itself does not change. Ubayy's question, in the Arabic, is about the salat he sends upon the Prophet ﷺ, 'alayka, and how much of his own salat to give to it.",
            "bn": "কোন প্রহরে, তা নিয়ে সূত্রগুলোতে ভিন্নতা আছে। যে পাতা দেখা হয়েছে, তাতে তিরমিযীর আরবি পাঠে আছে সুলুসাল লাইল, রাতের দুই-তৃতীয়াংশ। পাশের ইংরেজিতে অবশ্য লেখা এক-তৃতীয়াংশ। ইবন কাসীর তিরমিযী থেকে উদ্ধৃত করতে গিয়ে বলেন এক-তৃতীয়াংশ। কুরতুবী আর বাগাভী অন্য সূত্রে বলেন এক-চতুর্থাংশ। ডাকটা কিন্তু সব বর্ণনায় একই। উবাইয়ের প্রশ্নটা আরবিতে নবী ﷺ-এর উপর, আলাইকা, দরুদ পাঠ নিয়ে। নিজের দোয়ার কতটুকু তিনি তার জন্য রাখবেন, সেটাই তাঁর জিজ্ঞাসা।"
          }
        ]
      },
      {
        "h": {
          "en": "Death, With All It Holds",
          "bn": "মৃত্যু, তার সবকিছু নিয়ে"
        },
        "p": [
          {
            "en": "The words of the call reward slow reading. The Prophet ﷺ takes the two nouns of 79:6 and 79:7 and puts them in a sentence of his own, ja'at ar-rajifa, in the past form of the verb, which the English page renders is coming. Then he sets beside it a third clause that belongs to each listener: ja'a al-mawtu bima fih, death has come with what is in it. The verse speaks of the end of all creation. The call carries it to the edge of each sleeper's bed.",
            "bn": "ডাকের কথাগুলো ধীরে পড়লে আরও খোলে। নবী ﷺ ৭৯:৬ আর ৭৯:৭ আয়াতের দুটি বিশেষ্য নিয়ে নিজের একটি বাক্য গড়েন: জাআতির রাজিফাহ। আরবিতে ক্রিয়াটি অতীত রূপে, ইংরেজি পাতায় তার অনুবাদ 'আসছে'। তারপর পাশে বসান তৃতীয় একটি কথা, যা প্রত্যেক শ্রোতার নিজের: জাআল মাওতু বিমা ফীহ, মৃত্যু এসে গেছে, তার ভেতরে যা আছে সব নিয়ে। আয়াতটি গোটা সৃষ্টির শেষের কথা বলে। আর ডাকটি সেই কথাকে নিয়ে আসে প্রতিটি ঘুমন্ত মানুষের বিছানার পাশে।"
          },
          {
            "en": "He made the call at night, with a third, two thirds or a quarter of it gone, by the routes quoted. And he called people to remember Allah, twice, before naming what was coming. That order is worth keeping: the reminder of death comes wrapped in a summons to dhikr, not left to stand as fear alone. In the same report Ubayy then asks how to spend his own prayers, and is told that giving all of them to the salat upon the Prophet ﷺ would answer his worry and bring forgiveness.",
            "bn": "ডাকটা এসেছিল রাতে, সূত্রভেদে রাতের এক-তৃতীয়াংশ, দুই-তৃতীয়াংশ বা এক-চতুর্থাংশ পার হওয়ার পর। আর কী আসছে তা বলার আগে তিনি দুবার আল্লাহকে স্মরণ করতে ডেকেছেন। এই ক্রমটা মনে রাখার মতো। মৃত্যুর কথা এখানে শুধু ভয় হয়ে দাঁড়িয়ে থাকে না, তা আসে জিকিরের ডাকের ভেতরে মোড়ানো হয়ে। একই বর্ণনায় এরপর উবাই জানতে চান, নিজের দোয়া তিনি কীভাবে ভাগ করবেন। জবাব পান, পুরোটাই যদি নবী ﷺ-এর উপর দরুদে দেন, তাহলে তাঁর দুশ্চিন্তা দূর হবে, গুনাহ মাফ হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the First Sounds",
          "bn": "প্রথম ফুঁক বাজার আগে"
        },
        "p": [
          {
            "en": "The verse is two words and holds no command. It does not tell the listener to do anything; it says that the second follows the first. In the plainest reading the sources give, the first ends life and the second returns it for the reckoning the Muyassar names. Every human life is lived before the first. That is the only time in which anything can be prepared, and the verse leaves no room for the second to be missed.",
            "bn": "আয়াতটি দুই শব্দের, তাতে কোনো আদেশ নেই। শ্রোতাকে কিছু করতে বলে না। শুধু জানায়, প্রথমটির পেছনে দ্বিতীয়টি আসে। সূত্রগুলোর সবচেয়ে সরল পাঠে প্রথম ফুঁক জীবন শেষ করে, আর দ্বিতীয়টি তা ফিরিয়ে দেয় সেই হিসাবের জন্য, যার কথা মুয়াসসার বলে। প্রতিটি মানুষের জীবন কাটে প্রথম ফুঁকের আগে। প্রস্তুতি নেওয়ার সময় শুধু এটুকুই। আর দ্বিতীয়টি ফসকে যাওয়ার কোনো ফাঁক আয়াত রাখে না।"
          },
          {
            "en": "The verses after it turn to the people of that day, and they belong to another page. This one asks something simpler: whether the listener believes the follower will follow. The night call shows what that belief looks like in a life. It wakes; it remembers Allah, twice over; it names death as near and not as a far-off event; and then, as Ubayy did, it asks what to do with the time still in hand.",
            "bn": "এর পরের আয়াতগুলো সেদিনের মানুষের কথায় যায়, সেগুলোর আলোচনা আলাদা। এ আয়াত জানতে চায় আরও সহজ একটা কথা। শ্রোতা কি বিশ্বাস করে যে পেছনেরটা আসবেই? রাতের সেই ডাক দেখিয়ে দেয়, জীবনে এ বিশ্বাসের চেহারা কেমন। সে জেগে ওঠে। দুবার করে আল্লাহকে স্মরণ করে। মৃত্যুকে দূরের ঘটনা না ভেবে কাছের বলে চেনে। তারপর উবাইয়ের মতো জিজ্ঞেস করে, হাতে যে সময়টুকু আছে, তা দিয়ে কী করব।"
          }
        ]
      }
    ]
  },
  "79:46": {
    "sections": [
      {
        "h": {
          "en": "A Question and a Refusal",
          "bn": "একটি প্রশ্ন ও একটি প্রত্যাখ্যান"
        },
        "p": [
          {
            "en": "The verse answers a question asked four verses earlier. In 79:42 they ask the Prophet ﷺ about the Hour: when is its arrival? 79:43 replies with a question of its own — in what position are you that you should mention it? — and 79:44 puts the matter where it belongs, saying that to your Lord is its finality. Then 79:45 leaves him one role and only one: he is a warner for whoever fears it.",
            "bn": "আয়াতটি এমন এক প্রশ্নের উত্তর দেয় যা করা হয়েছিল চার আয়াত আগে। 79:42-এ তারা নবী ﷺ-কে কিয়ামত সম্পর্কে জিজ্ঞেস করে: কখন তা ঘটবে? 79:43 উত্তর দেয় নিজেরই একটি প্রশ্ন দিয়ে — এর আলোচনার সঙ্গে তোমার সম্পর্ক কী? — আর 79:44 বিষয়টিকে তার যথাস্থানে রাখে, বলে যে এ সংক্রান্ত জ্ঞান তোমার প্রতিপালক পর্যন্তই শেষ। এরপর 79:45 তাঁর জন্য রাখে একটিমাত্র ভূমিকা: যারা একে ভয় করে তিনি কেবল তাদেরই সতর্ককারী।"
          },
          {
            "en": "So the date is refused, and then this verse arrives. It is not a compromise. It supplies no year, no interval and no sign to watch for. What it supplies instead is a measurement of an entirely different kind: not when the Hour will come, but how long the whole of this life will feel to the people standing there on the day they see it. The question was about the clock. The answer describes the memory.",
            "bn": "কাজেই তারিখ জানাতে অস্বীকার করা হলো, আর তারপরেই আসে এই আয়াত। এটি কোনো আপস নয়। এটি কোনো সন, কোনো ব্যবধান বা লক্ষ করার মতো কোনো চিহ্ন দেয় না। বরং এটি দেয় সম্পূর্ণ অন্য ধরনের একটি পরিমাপ: কিয়ামত কখন আসবে তা নয়, বরং যেদিন মানুষ তা দেখবে সেদিন তাদের কাছে এই গোটা জীবনটা কত দীর্ঘ মনে হবে। প্রশ্নটি ছিল ঘড়ি নিয়ে। উত্তরটি বর্ণনা করে স্মৃতিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Evening or Its Morning",
          "bn": "এক সন্ধ্যা কিংবা তার সকাল"
        },
        "p": [
          {
            "en": "The Arabic runs kaannahum yawma yarawnaha lam yalbathu illa 'ashiyyatan aw duhaha. 'Ashiyyah is the late part of the day, the stretch that runs down toward sunset, which this app renders afternoon. Duha is the forenoon, the brightening that follows sunrise. Both are portions of daylight, not days; the verse never offers the option of a day, and neither of its two words can be stretched to mean one.",
            "bn": "আরবিতে আয়াতটি: 'কাআন্নাহুম ইয়াওমা ইয়ারাওনাহা লাম ইয়ালবাসূ ইল্লা আশিয়্যাতান আও দুহাহা'। 'আশিয়্যাহ' হলো দিনের শেষভাগ — সূর্যাস্তের দিকে নেমে আসা সময়টুকু। 'দুহা' হলো পূর্বাহ্ণ — সূর্যোদয়ের পরের উজ্জ্বল হয়ে ওঠা সময়। দুটোই দিনের অংশ, গোটা দিন নয়; আয়াতটি কখনোই একটি পূর্ণ দিনের বিকল্প দেয় না, আর এর দুটি শব্দের কোনোটিকেই টেনে একটি দিন বানানো যায় না।"
          },
          {
            "en": "The pronoun at the end is the sharpest part of it. Duhaha is not the forenoon but its forenoon, the morning belonging to the very day whose evening has just been named. The commentators observe that the day itself is never mentioned in the verse at all; it is carried entirely by that one attached suffix. So the two options are not an evening or some other morning. They are the two ends of a single day.",
            "bn": "শেষের সর্বনামটিই এর সবচেয়ে ধারালো অংশ। 'দুহাহা' মানে কেবল পূর্বাহ্ণ নয়, বরং 'তার' পূর্বাহ্ণ — অর্থাৎ যে দিনটির সন্ধ্যার কথা এইমাত্র বলা হলো, সেই দিনটিরই সকাল। মুফাসসিরগণ লক্ষ করেন, আয়াতে দিনটির উল্লেখ কোথাও নেই; পুরো ভারটি বহন করছে ওই একটিমাত্র যুক্ত সর্বনাম। কাজেই বিকল্প দুটি এক সন্ধ্যা আর অন্য কোনো সকাল নয়। সে দুটি একটিমাত্র দিনেরই দুই প্রান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Scale, Not a Date",
          "bn": "তারিখ নয়, মাপকাঠি"
        },
        "p": [
          {
            "en": "That is why the refusal in 79:43-44 is not evasion. A date would change a person's arithmetic; a scale changes his valuation. A life measured against a known date can be budgeted, spent down to the last month and settled at the end. A life that will finally register as an evening cannot be budgeted at all, because no stretch of it is long enough to be safely written off, and the settling cannot be scheduled for a month whose number nobody has.",
            "bn": "এ কারণেই 79:43-44-এর প্রত্যাখ্যানটি এড়িয়ে যাওয়া নয়। তারিখ বদলে দিত মানুষের হিসাব; মাপকাঠি বদলে দেয় তার মূল্যায়ন। জানা তারিখের বিপরীতে মাপা জীবনকে বাজেট করা যায় — শেষ মাসটি পর্যন্ত খরচ করে শেষে হিসাব চুকিয়ে নেওয়া যায়। কিন্তু যে জীবন শেষ পর্যন্ত এক সন্ধ্যার মতো ঠেকবে, তাকে আদৌ বাজেট করা যায় না; কারণ তার কোনো অংশই এত দীর্ঘ নয় যে নিরাপদে অপচয় করা চলে, আর হিসাব চুকানোর জন্য এমন কোনো মাস ঠিক করা যায় না যার সংখ্যাটা কারও জানা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Answer Elsewhere",
          "bn": "একই উত্তর অন্যত্র"
        },
        "p": [
          {
            "en": "The Quran states this compression repeatedly, and almost always as something the people themselves say. In 10:45 it is as though they had not remained but an hour of a day. In 30:55 the criminals swear they stayed only an hour. 20:103-104 has them murmuring that they remained ten, while the most accurate among them says one day. In 23:112-114 they are asked how many years, answer a day or part of a day, and are told they stayed only a little.",
            "bn": "কুরআন এই সংকোচনের কথা বারবার বলে, আর প্রায় সবসময়ই মানুষের নিজেদের মুখ দিয়ে। 10:45-এ মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। 30:55-এ অপরাধীরা শপথ করে বলবে তারা এক ঘণ্টাই ছিল। 20:103-104-এ তারা নিজেদের মধ্যে চুপিচুপি বলবে তারা দশ দিন ছিল, আর তাদের মধ্যে সবচেয়ে সঠিক কথা বলা লোকটি বলবে — একদিন। 23:112-114-এ তাদের জিজ্ঞেস করা হবে কত বছর ছিলে, তারা বলবে একদিন বা দিনের কিছু অংশ, আর জবাব আসবে — তোমরা সামান্যই ছিলে।"
          },
          {
            "en": "46:35 says it in nearly the words of our verse: on the day they see what they are promised, it will be as though they had not remained except an hour of a day. Set beside each other, these passages make the compression a fixed feature of the scene rather than a rhetorical flourish in one surah. Some put the estimate into the mouths of those who lived the years and some state it as the scene itself, and every one of them shortens the years drastically.",
            "bn": "46:35 প্রায় আমাদের আয়াতেরই ভাষায় কথাটি বলে: যেদিন তারা প্রতিশ্রুত জিনিসটি দেখবে, সেদিন মনে হবে যেন তারা দিনের এক ঘণ্টার বেশি অবস্থান করেনি। পাশাপাশি রাখলে এই অংশগুলো বুঝিয়ে দেয়, এই সংকোচন কোনো একটি সূরার অলংকার নয়, বরং সেই দৃশ্যের একটি স্থায়ী বৈশিষ্ট্য। কোথাও হিসাবটি বসানো হয়েছে তাদেরই মুখে যারা বছরগুলো কাটিয়ে এসেছে, কোথাও তা বলা হয়েছে দৃশ্যের বর্ণনা হিসেবেই; আর প্রতিটি ক্ষেত্রেই বছরগুলো নাটকীয়ভাবে ছোট হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Changes Today",
          "bn": "আজ এটি কী বদলায়"
        },
        "p": [
          {
            "en": "The verse is not asking anyone to conclude that life is worthless. Nothing in it says the evening was wasted; it says the evening was short. The practical consequence is a reordering rather than a withdrawal. Whatever has its whole value used up inside the evening — a rank, a purchase, an argument won — gets priced at what an evening is worth, and whatever outlasts the evening gets the remainder of the attention.",
            "bn": "আয়াতটি কাউকে এই সিদ্ধান্তে আসতে বলছে না যে জীবন মূল্যহীন। এতে কোথাও বলা হয়নি সন্ধ্যাটি অপচয় হয়েছে; বলা হয়েছে সন্ধ্যাটি ছোট। এর ব্যবহারিক ফল গুটিয়ে যাওয়া নয়, বরং অগ্রাধিকার নতুন করে সাজানো। যার পুরো মূল্য ওই সন্ধ্যার ভেতরেই ফুরিয়ে যায় — একটি পদ, একটি কেনাকাটা, জিতে যাওয়া একটি তর্ক — তার দাম ধরা হবে এক সন্ধ্যার সমান; আর যা সন্ধ্যার পরেও টিকে থাকে, মনোযোগের বাকিটুকু তারই।"
          },
          {
            "en": "It also settles a particular kind of grief. Waiting is the hardest part of most trials: waiting for health, for a marriage, for a child, for relief that keeps not arriving. This verse does not shorten the wait. It tells you in advance what the wait will look like from the far side of it, and the answer is that it will be the same length as everyone else's ease was — an evening, or the morning of the same day.",
            "bn": "এটি এক বিশেষ ধরনের বেদনাকেও থিতু করে দেয়। বেশির ভাগ পরীক্ষার সবচেয়ে কঠিন অংশ হলো অপেক্ষা: সুস্থতার অপেক্ষা, বিয়ের অপেক্ষা, সন্তানের অপেক্ষা, কিংবা যে স্বস্তি আসতেই চায় না তার অপেক্ষা। আয়াতটি অপেক্ষাকে ছোট করে দেয় না। এটি আগেভাগে জানিয়ে দেয়, ওপারে গিয়ে সেই অপেক্ষাটি দেখতে কেমন লাগবে — আর উত্তরটি হলো, অন্যরা যে স্বাচ্ছন্দ্য পেয়েছিল ঠিক তারই সমান দৈর্ঘ্যের: এক সন্ধ্যা, কিংবা সেই দিনেরই সকাল।"
          }
        ]
      }
    ]
  }
});
