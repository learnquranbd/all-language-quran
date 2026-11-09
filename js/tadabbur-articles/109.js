/**
 * Tadabbur long-form articles — surah 109.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "109:1": {
    "sections": [
      {
        "h": {
          "en": "Three Words, One Commission",
          "bn": "তিন শব্দে এক দায়িত্ব"
        },
        "p": [
          {
            "en": "Qul ya ayyuha al-kafirun: say, O disbelievers. In the Arabic of the mushaf the verse is three words, qul, ya-ayyuha and al-kafirun, and it opens a surah of six verses. The first word is an imperative, so before anyone is addressed the speaker is commissioned. What follows is given to the Messenger ﷺ to deliver, beginning with the call itself. The message proper starts in 109:2, the verse that follows, which is not treated here.",
            "bn": "কুল ইয়া আইয়ুহাল কাফিরুন: বলো, হে কাফিররা। মুসহাফের আরবিতে আয়াতটি তিন শব্দের: কুল, ইয়া-আইয়ুহা আর আল-কাফিরুন। এ দিয়েই ছয় আয়াতের সূরাটি শুরু। প্রথম শব্দটি আদেশ। তাই কাউকে ডাকার আগেই বক্তাকে দায়িত্ব বুঝিয়ে দেওয়া হচ্ছে। এরপর যা আসছে, সবই রাসূল ﷺ-কে দেওয়া হয়েছে পৌঁছে দেওয়ার জন্য, আর তার শুরু এই ডাক দিয়েই। বার্তার মূল কথা শুরু হয় পরের আয়াত ১০৯:২ থেকে। সে আয়াত নিয়ে এই লেখায় আলোচনা নেই।"
          },
          {
            "en": "The commentators consulted here gloss qul in three ways. At-Tabari makes it personal and occasioned: say, O Muhammad, to these mushrikin who asked you to worship their gods for a year on condition that they worship your God for a year. Al-Muyassar makes it descriptive: say, O Messenger, to those who disbelieved in Allah and His Messenger, O you who disbelieve in Allah. As-Sa'di gives the shortest gloss and puts the weight on the manner: say it to the disbelievers mu'linan wa musarrihan, announcing it and stating it openly.",
            "bn": "যেসব তাফসীর এখানে দেখা হয়েছে, তাতে কুল শব্দের ব্যাখ্যা তিন রকম। তাবারী একে যুক্ত করেন নির্দিষ্ট ঘটনা ও ব্যক্তির সঙ্গে: হে মুহাম্মাদ, এই মুশরিকদের বলো, যারা তোমাকে প্রস্তাব দিয়েছে, এক বছর তুমি তাদের দেবতাদের ইবাদত করবে, বিনিময়ে তারা এক বছর তোমার ইলাহের ইবাদত করবে। মুয়াসসার দেন বর্ণনামূলক অর্থ: হে রাসূল, যারা আল্লাহ ও তাঁর রাসূলকে অস্বীকার করেছে তাদের বলো, হে আল্লাহকে অস্বীকারকারীরা। সা'দীর ব্যাখ্যা সবচেয়ে ছোট, আর তাঁর জোর বলার ধরনে: কাফিরদের বলো মু'লিনান ওয়া মুসাররিহান, ঘোষণা দিয়ে, খোলাখুলি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Qul Stays in the Text",
          "bn": "কুল শব্দটি কেন রয়ে গেল"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports Abu Bakr ibn al-Anbari on a reading put forward by someone attacking the Qur'an: say to those who disbelieved, I do not worship what you worship, claimed as the correct text. Ibn al-Anbari calls it a fabrication against the Lord of the worlds that weakens the surah. The received reading, he argues, already holds that meaning, since in Arabic say to Zayd, come to us, means say to Zayd, O Zayd, come to us. What the altered wording loses is the direct address itself.",
            "bn": "কুরতুবী আবু বকর ইবনুল আনবারীর একটি বক্তব্য উদ্ধৃত করেন। কুরআনের সমালোচক এক ব্যক্তি পড়ত: যারা কুফরি করেছে তাদের বলো, তোমরা যার ইবাদত কর আমি তার ইবাদত করি না। তার দাবি, এটাই সঠিক পাঠ। ইবনুল আনবারী একে রাব্বুল আলামীনের নামে মিথ্যা রটনা বলেন, যা সূরার অর্থকে দুর্বল করে। তাঁর যুক্তি, প্রচলিত পাঠে ওই অর্থ আগেই আছে। আরবিতে যায়দকে বলো, আমাদের কাছে এসো, এর মানে দাঁড়ায়: যায়দকে বলো, হে যায়দ, আমাদের কাছে এসো। বদলে দেওয়া শব্দে যা হারায়, তা হলো সরাসরি সম্বোধনটাই।"
          },
          {
            "en": "That address, Ibn al-Anbari says, was the point: the Messenger ﷺ went to them in their gathering and said, O disbelievers, knowing they were angered at being counted among the disbelievers, while he was guarded from any hand stretched against him. Whoever drops qul, he says, drops a sign given to the Messenger. Al-Baghawi's report describes the delivery: he went to al-Masjid al-Haram, where the notables of Quraysh sat, stood over them and recited the surah to the end. They then despaired of him, and harmed him and his companions.",
            "bn": "ইবনুল আনবারীর মতে আসল কথাটা ওই সম্বোধনেই। রাসূল ﷺ তাদের মজলিসে গিয়ে বললেন, হে কাফিররা। তিনি জানতেন, কাফিরদের দলে গণ্য হলে তারা রেগে যায়। তবু তাঁর দিকে কোনো হাত বাড়েনি, তিনি ছিলেন সুরক্ষিত। ইবনুল আনবারী বলেন, যে কুল বাদ দেয়, সে রাসূলকে দেওয়া একটি নিদর্শন বাদ দেয়। বাগাভীর বর্ণনায় সেই পৌঁছে দেওয়ার ছবি আছে। তিনি মাসজিদুল হারামে গেলেন, যেখানে কুরাইশের নেতারা বসে ছিল। তাদের মাথার কাছে দাঁড়িয়ে পুরো সূরা পড়ে শোনালেন। এরপর তারা তাঁর ব্যাপারে আশা ছেড়ে দিল, আর তাঁকে ও তাঁর সাহাবিদের কষ্ট দিতে লাগল।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom Al-Kafirun Named",
          "bn": "আল-কাফিরুন বলতে কারা"
        },
        "p": [
          {
            "en": "At-Tabari explains why the address takes this form. The speech from Allah to His Messenger, he says, concerned particular persons, ashkhas bi-a'yanihim, among the mushrikin, whom He knew would never believe, that having already preceded in His knowledge. So the Prophet ﷺ was ordered to make them despair of what they hoped for, and he in turn was made to despair of their faith. At-Tabari adds that so it proved: some of them were killed at Badr and some died before it, still disbelieving.",
            "bn": "সম্বোধনটি কেন এই রূপে এল, তাবারী তা ব্যাখ্যা করেন। তাঁর কথায়, আল্লাহ তাঁর রাসূলকে এ কথা বলেছিলেন মুশরিকদের মধ্যে নির্দিষ্ট কিছু লোকের ব্যাপারে: আশখাস বি-আ'য়ানিহিম। আল্লাহ জানতেন তারা কখনো ঈমান আনবে না, তাঁর জ্ঞানে এ কথা আগেই স্থির ছিল। তাই নবী ﷺ-কে আদেশ দেওয়া হলো, তারা যে আশা করছিল সে আশা যেন তিনি ভেঙে দেন। আর তাঁকেও তাদের ঈমানের আশা ছেড়ে দিতে বলা হলো। তাবারী যোগ করেন, ঘটেছিলও তাই। তাদের কেউ বদরে নিহত হলো, কেউ তার আগেই মারা গেল, সবাই কুফরির ওপরেই।"
          },
          {
            "en": "Al-Qurtubi makes the same point through grammar. The al- of al-kafirun, he says, refers to the ma'hud, people already known and specific, even though in form it is generic, because the address is to those who in Allah's knowledge would die in disbelief: min al-khusus alladhi ja'a bi-lafz al-'umum, a specific meaning in general wording. He cites al-Mawardi to the same effect: the verse came as an answer and meant a specific people, not all disbelievers, since some disbelievers later believed and worshipped Allah.",
            "bn": "কুরতুবী একই কথা বলেন ব্যাকরণের পথ ধরে। তাঁর মতে আল-কাফিরুন শব্দের আল ইঙ্গিত করে মা'হূদের দিকে, অর্থাৎ আগে থেকে জানা নির্দিষ্ট লোকদের দিকে। গঠনে শব্দটি সাধারণ হলেও এখানে সম্বোধন তাদের প্রতি, যারা আল্লাহর জ্ঞানে কুফরির উপরই মারা যাবে। তাঁর ভাষায়: মিনাল খুসূসিল্লাযী জা'আ বি-লাফযিল উমূম, সাধারণ শব্দে আসা নির্দিষ্ট অর্থ। মাওয়ারদীর বক্তব্যও তিনি আনেন একই সুরে। আয়াতটি এসেছিল জবাব হিসেবে, আর কাফির বলতে বোঝানো হয়েছে নির্দিষ্ট এক দলকে, সব কাফিরকে নয়। কারণ কাফিরদের কেউ কেউ পরে ঈমান এনে আল্লাহর ইবাদত করেছে।"
          },
          {
            "en": "Ibn Kathir puts it differently. The words, he says, include every disbeliever on the face of the earth, but those faced with this address were the disbelievers of Quraysh. He calls the whole surah a surah of bara'a, disavowal, from the deed the mushrikin practise, and a command to sincerity in worship. So at-Tabari, al-Qurtubi and al-Mawardi read al-kafirun as particular people, while Ibn Kathir reads the wording as wide and the people addressed as Quraysh. The article sets the two readings side by side and chooses neither.",
            "bn": "ইবন কাসীর বিষয়টা দেখেন অন্যভাবে। তাঁর মতে শব্দগুলো পৃথিবীর সব কাফিরকে শামিল করে, তবে এই সম্বোধনের মুখোমুখি হয়েছিল কুরাইশের কাফিররা। পুরো সূরাটিকে তিনি বলেন বারাআতের সূরা: মুশরিকরা যে আমল করে, তা থেকে সম্পর্কচ্ছেদ, আর ইবাদতে ইখলাসের আদেশ। তাহলে তাবারী, কুরতুবী ও মাওয়ারদীর কাছে আল-কাফিরুন মানে নির্দিষ্ট কিছু মানুষ। আর ইবন কাসীরের কাছে শব্দ ব্যাপক, কিন্তু যাদের সম্বোধন করা হয়েছে তারা কুরাইশ। এই লেখা দুটি পাঠই পাশাপাশি রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Year for a Year",
          "bn": "এক বছরের বদলে এক বছর"
        },
        "p": [
          {
            "en": "At-Tabari frames the surah as an answer to an offer, introduced with fima dhukira, as has been reported. His first report runs from Muhammad ibn Musa al-Harashi, through Abu Khalaf and Dawud, to 'Ikrima from Ibn 'Abbas (RA). Quraysh offered wealth enough to make him the richest man in Makkah, marriage to whomever he wished, and their following, if he stopped speaking ill of their gods. Failing that: worship our gods, al-Lat and al-'Uzza, for a year, and we worship your God for a year.",
            "bn": "তাবারী সূরাটিকে দেখান একটি প্রস্তাবের জবাব হিসেবে, আর শুরুতেই বলে নেন ফীমা যুকিরা, অর্থাৎ যেমন বর্ণিত আছে। তাঁর প্রথম বর্ণনার সূত্র মুহাম্মাদ ইবন মূসা আল-হারাশী থেকে আবু খালাফ ও দাউদ হয়ে ইকরিমা, তিনি ইবন আব্বাস (রাঃ) থেকে। কুরাইশ প্রস্তাব দিল, এত সম্পদ দেবে যে তিনি মক্কার সবচেয়ে ধনী মানুষ হবেন। যাকে চান তার সঙ্গে বিয়ে দেবে, তাঁর পেছনে চলবে। শর্ত একটাই, তাদের দেবতাদের মন্দ বলা বন্ধ করতে হবে। তা না হলে বিকল্প: এক বছর আমাদের দেবতা লাত ও উয্যার ইবাদত করো, আর এক বছর আমরা তোমার ইলাহের ইবাদত করব।"
          },
          {
            "en": "That report, which at-Tabari gives with no grading, records a reply from him that is not quoted here. Then the surah came, and with it 39:64 to 39:66. At-Tabari's second report, through Ibn Ishaq from Sa'id ibn Mina, client of al-Bakhtari, names al-Walid ibn al-Mughira, al-'As ibn Wa'il, al-Aswad ibn al-Muttalib and Umayya ibn Khalaf, who proposed that each side worship what the other worshipped and share in the whole affair. Al-Qurtubi gives this from Ibn Ishaq and others from Ibn 'Abbas (RA), naming al-Aswad ibn 'Abd al-Muttalib.",
            "bn": "ওই বর্ণনায় তাঁর একটি জবাবের কথা আছে; তাবারী এর কোনো মান উল্লেখ করেননি, তাই এখানে তা উদ্ধৃত করা হলো না। তারপর সূরাটি নাজিল হলো, সঙ্গে ৩৯:৬৪ থেকে ৩৯:৬৬ আয়াত। তাবারীর দ্বিতীয় বর্ণনা ইবন ইসহাক হয়ে আল-বাখতারীর মাওলা সাঈদ ইবন মীনা থেকে। সেখানে নাম আছে ওয়ালীদ ইবনুল মুগীরা, আস ইবন ওয়াইল, আসওয়াদ ইবনুল মুত্তালিব ও উমাইয়া ইবন খালাফের। তাদের প্রস্তাব ছিল, এক পক্ষ অন্য পক্ষের মাবুদের ইবাদত করবে, আর পুরো ব্যাপারে দুই পক্ষ অংশীদার থাকবে। কুরতুবী এ বর্ণনা আনেন ইবন ইসহাক ও অন্যদের সূত্রে ইবন আব্বাস (রাঃ) থেকে, আর সেখানে নামটি আসওয়াদ ইবন আবদিল মুত্তালিব।"
          },
          {
            "en": "Al-Qurtubi adds, from Abu Salih via Ibn 'Abbas (RA), that they said: if you touched some of these gods, we would believe you. Al-Baghawi names six men of Quraysh, among them al-Harith ibn Qays as-Sahmi and al-Aswad ibn 'Abd Yaghuth. None of the texts consulted here grades these chains, and Ibn Kathir introduces the offer only with qila, it has been said. Ma'arif al-Qur'an reads the reports together as proposals made on different occasions, all answered at once. The names are given here as each source gives them.",
            "bn": "কুরতুবী আবু সালিহের সূত্রে ইবন আব্বাস (রাঃ) থেকে আরও আনেন, তারা বলেছিল: এই দেবতাদের কয়েকটাকে একটু ছুঁয়ে দিলেই আমরা তোমাকে সত্য বলে মেনে নেব। বাগাভী কুরাইশের লোকদের মোট ছয়টি নাম দেন, তাদের মধ্যে হারিস ইবন কায়স আস-সাহমী ও আসওয়াদ ইবন আবদি ইয়াগূস। এখানে দেখা কোনো তাফসীরে এসব সনদের মান নির্ণয় করা হয়নি। আর ইবন কাসীর প্রস্তাবটি আনেন কেবল কীলা বলে, অর্থাৎ বলা হয়। মাআরিফুল কুরআন সব বর্ণনা মিলিয়ে বলে, প্রস্তাবগুলো এসেছিল ভিন্ন ভিন্ন সময়ে, আর সূরা সবগুলোর জবাব দিয়েছে একসঙ্গে। নামগুলো এখানে প্রতিটি উৎসে যেভাবে আছে সেভাবেই দেওয়া হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Lines That Come Back",
          "bn": "যে বাক্য ফিরে ফিরে আসে"
        },
        "p": [
          {
            "en": "The call opens a design. After it come four short refusals in 109:2 to 109:5, two of them nearly identical, and the close in 109:6: lakum dinukum wa liya din. At-Tabari reads the lines by time. I do not worship what you worship, now; nor do you worship what I worship, now; nor will I worship, in what lies ahead, what you worshipped in the past; nor will you ever, in what lies ahead, worship what I worship. He ties this to the addressees named above.",
            "bn": "এই ডাক দিয়েই সূরার বিন্যাস শুরু। এরপর ১০৯:২ থেকে ১০৯:৫ পর্যন্ত চারটি ছোট অস্বীকৃতি, যার দুটি প্রায় হুবহু এক। শেষে ১০৯:৬: লাকুম দীনুকুম ওয়া লিয়া দীন। তাবারী বাক্যগুলো পড়েন সময় ধরে। তোমরা এখন যার ইবাদত কর, আমি তার ইবাদত করি না। আমি এখন যার ইবাদত করি, তোমরা তার ইবাদতকারী নও। সামনের দিনেও আমি তার ইবাদত করব না, যার ইবাদত তোমরা অতীতে করেছ। আর সামনের দিনে তোমরাও কখনো তার ইবাদত করবে না, যার ইবাদত আমি করি। এ পাঠকে তিনি যুক্ত করেন আগে বলা সেই সম্বোধিত লোকদের সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi gives two explanations of the repetition. The first is emphasis, to cut off their hopes, as someone swears, by Allah I will not do it, and then again, by Allah I will not do it. Most scholars of meaning, he reports, hold that the Qur'an came in the Arabs' tongue, whose ways include repetition for emphasis, and he cites 55:13, 77:15, 78:4 and 78:5, and 94:5 and 94:6. The second, introduced with qila, matches their offer turn for turn, year after year, so each part is answered with its opposite: this will never be.",
            "bn": "পুনরাবৃত্তির দুটি ব্যাখ্যা দেন কুরতুবী। প্রথমটি জোর দেওয়া, যাতে তাদের আশা কেটে যায়। যেমন কেউ বলে, আল্লাহর কসম, আমি এ কাজ করব না, তারপর আবার বলে, আল্লাহর কসম, করব না। তিনি জানান, আয়াতের অর্থ নিয়ে কাজ করা আলিমদের বেশির ভাগের মত হলো, কুরআন নাজিল হয়েছে আরবদের ভাষায়, আর জোর দিতে কথা ফিরিয়ে বলা তাদের রীতি। উদাহরণ হিসেবে তিনি আনেন ৫৫:১৩, ৭৭:১৫, ৭৮:৪ ও ৭৮:৫, এবং ৯৪:৫ ও ৯৪:৬। দ্বিতীয় ব্যাখ্যা তিনি আনেন কীলা বলে। এতে বাক্যগুলো তাদের প্রস্তাবের সঙ্গে পালা ধরে মিলে যায়, বছরের পর বছর। ফলে প্রতিটি অংশের জবাব আসে তার উল্টো দিয়ে: এমনটা কখনোই হবে না।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement, reads the pairs differently: ma in 109:3 means whom, and the second pair means I do not worship in your manner of worship, so the disavowal covers both the one worshipped and the way of worship. He links 109:6 to 10:41 and 28:55. Ma'arif al-Qur'an lists three views: a present and future reading it attributes to al-Bukhari, preferred in Bayan ul-Qur'an; Ibn Kathir's distinction of object and manner; and plain emphasis, with 94:5 and 94:6 as its example.",
            "bn": "ইংরেজি সংক্ষিপ্ত সংস্করণে ইবন কাসীর জোড়াগুলো পড়েন ভিন্নভাবে। ১০৯:৩ আয়াতে মা মানে যাঁর। আর দ্বিতীয় জোড়ার অর্থ: তোমাদের ইবাদতের ধরনে আমি ইবাদত করি না। ফলে সম্পর্কচ্ছেদ দুই জায়গাতেই, মাবুদের বেলাতেও, ইবাদতের পদ্ধতির বেলাতেও। ১০৯:৬ আয়াতকে তিনি যুক্ত করেন ১০:৪১ ও ২৮:৫৫ আয়াতের সঙ্গে। মাআরিফুল কুরআন তিনটি মত উল্লেখ করে। একটি হলো বর্তমান ও ভবিষ্যৎ ভাগ করে পড়া। মাআরিফুল কুরআন এ মত বুখারীর বলে উল্লেখ করে, আর বায়ানুল কুরআনে এটিই অগ্রাধিকার পেয়েছে। আরেকটি ইবন কাসীরের মাবুদ ও পদ্ধতির পার্থক্য। তৃতীয়টি নিছক জোর দেওয়া, যার উদাহরণ ৯৪:৫ ও ৯৪:৬।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at Dawn and at Bedtime",
          "bn": "ফজরে ও ঘুমের আগে তিলাওয়াত"
        },
        "p": [
          {
            "en": "The narrations here concern the surah as a whole; none is attached to this verse's wording alone. Ibn Kathir opens with Sahih Muslim from Abu Hurayrah (RA). Muslim's wording, hadith 726, as the quranx page gives it: \"Abu Huraira reported that the Messenger of Allah (ﷺ) recited in the two (supererogatory) rak'ahs of the dawn (prayer): \" Say: O unbelievers,\" (Qur'an, cix.) and\" Say: Allah is one\" (cxii.).\" Jabir's report of the two rak'ahs of tawaf, also cited by Ibn Kathir, was not consulted and is left out.",
            "bn": "এখানকার বর্ণনাগুলো পুরো সূরা নিয়ে, শুধু এই আয়াতের শব্দের সঙ্গে কোনোটি যুক্ত নয়। ইবন কাসীর শুরু করেন সহীহ মুসলিম থেকে, আবু হুরায়রা (রাঃ)-এর বর্ণনা দিয়ে। কুরআনএক্স পাতায় মুসলিমের ৭২৬ নম্বর হাদিসের ভাষ্য: আবু হুরায়রা বর্ণনা করেছেন, আল্লাহর রাসূল ﷺ ফজরের দুই রাকআত (নফল) নামাজে পড়েছেন: বলো, হে কাফিররা (সূরা ১০৯), এবং বলো, আল্লাহ এক (সূরা ১১২)। তাওয়াফের দুই রাকআত নিয়ে জাবিরের যে বর্ণনা ইবন কাসীর আনেন, তার পাঠ এখানে সংগ্রহ করা হয়নি, তাই বাদ রাখা হলো।"
          },
          {
            "en": "Ibn Kathir then gives Ibn 'Umar's (RA) report, which at-Tirmidhi records as hadith 417: \"Ibn Umar narrated: 'I watched the Prophet (S) for a month. In the two Rak'ah before Fajr he would recite: Say: \"O you disbelievers!\" and Say: \"Allah is One\".'\" At-Tirmidhi's own grading, in the Arabic on the same page, is hadithu Ibn 'Umar hadithun hasan: the hadith of Ibn 'Umar is hasan. Ibn Kathir reports the same grading.",
            "bn": "এরপর ইবন কাসীর আনেন ইবন উমার (রাঃ)-এর বর্ণনা, যা তিরমিযী লিপিবদ্ধ করেছেন ৪১৭ নম্বর হাদিস হিসেবে: ইবন উমার বলেন, আমি এক মাস নবী ﷺ-কে লক্ষ করেছি। ফজরের আগের দুই রাকআতে তিনি পড়তেন: বলো, হে কাফিররা, আর বলো, আল্লাহ এক। একই পাতার আরবিতে তিরমিযী নিজের মান উল্লেখ করেছেন: হাদিসু ইবনি উমারা হাদিসুন হাসান, অর্থাৎ ইবন উমারের হাদিসটি হাসান। ইবন কাসীরও এই মানই উল্লেখ করেন।"
          },
          {
            "en": "For bedtime, Ibn Kathir gives from Imam Ahmad the report of Farwa ibn Nawfal from his father. Abu Dawud's wording, hadith 5055: \"Farwah b. Nawfal quoted his father as saying that the Prophet (ﷺ) said to Nawfal (his father): Recite (the Surah) 'Say, O you disbelievers!' and then go to sleep at its end, for it is a declaration of freedom from polytheism.\" The page shows no grading from Abu Dawud.",
            "bn": "ঘুমের আগের আমল নিয়ে ইবন কাসীর ইমাম আহমাদ থেকে আনেন ফারওয়া ইবন নাওফালের বর্ণনা, তিনি তাঁর পিতা থেকে। আবু দাউদের ৫০৫৫ নম্বর হাদিসের ভাষ্য: ফারওয়া ইবন নাওফাল তাঁর পিতা থেকে বর্ণনা করেন, নবী ﷺ নাওফালকে বললেন: (সূরা) বলো, হে কাফিররা, পড়ো, তারপর এর শেষে ঘুমিয়ে পড়ো। কারণ এটি শিরক থেকে মুক্তির ঘোষণা। ওই পাতায় আবু দাউদের দেওয়া কোনো মান নেই।"
          },
          {
            "en": "Ibn Kathir also recalls a hadith that the surah equals a fourth of the Qur'an, and al-Qurtubi names at-Tirmidhi from Anas. At-Tirmidhi's wording, hadith 2893: \"Narrated Anas bin Malik: that the Messenger of Allah (ﷺ) said: 'Whoever recites Idha Zulzilat, it equals half of the Qur'an for him. Whoever recites: Qul Ya Ayyuhal-Kafirun it equals a fourth of the Qur'an for him. And whoever recites: Qul Huwa Allahu Ahad it equals a third of the Qur'an for him.'\" At-Tirmidhi grades it gharib, known only through one shaykh, al-Hasan ibn Salm.",
            "bn": "ইবন কাসীর এমন একটি হাদিসের কথাও উল্লেখ করেন, যাতে আছে এ সূরা কুরআনের এক-চতুর্থাংশের সমান। কুরতুবী এর সূত্র হিসেবে তিরমিযীতে আনাসের বর্ণনার কথা বলেন। তিরমিযীর ২৮৯৩ নম্বর হাদিসের ভাষ্য: আনাস ইবন মালিক বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: যে ইযা যুলযিলাত পড়ে, তার জন্য তা কুরআনের অর্ধেকের সমান। যে কুল ইয়া আইয়ুহাল কাফিরুন পড়ে, তার জন্য তা কুরআনের এক-চতুর্থাংশের সমান। আর যে কুল হুয়াল্লাহু আহাদ পড়ে, তার জন্য তা কুরআনের এক-তৃতীয়াংশের সমান। তিরমিযী একে গারীব বলেছেন: হাদিসটি কেবল একজন শায়খ, হাসান ইবন সালমের সূত্রেই জানা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "An Address Fixed in Its Hour",
          "bn": "নির্দিষ্ট সময়ে বাঁধা এক সম্বোধন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: words commanded to the Messenger ﷺ and spoken to specific people in a specific moment, as the commentaries consulted here report it. They are at-Tabari's particular persons known never to believe, al-Qurtubi's and al-Mawardi's specific people, and Ibn Kathir's disbelievers of Quraysh who faced the address. The verse licenses nothing against any living person or community. It names no living group, and this article draws from it no conclusion about how anyone today should address, treat or regard the followers of any religion.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ততটুকুই বর্ণনা করে, যতটুকু তার শব্দে আছে। রাসূল ﷺ-কে কিছু কথা বলার আদেশ দেওয়া হয়েছিল, আর তিনি তা বলেছিলেন নির্দিষ্ট কিছু মানুষকে, নির্দিষ্ট এক সময়ে। এখানে দেখা তাফসীরগুলো এভাবেই জানায়। তাবারীর কাছে তারা সেই নির্দিষ্ট ব্যক্তিরা, যারা কখনো ঈমান আনবে না বলে জানা ছিল। কুরতুবী ও মাওয়ারদীর কাছে নির্দিষ্ট এক দল। ইবন কাসীরের কাছে কুরাইশের সেই কাফিররা, যারা এই সম্বোধনের মুখোমুখি হয়েছিল। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। কোনো জীবিত গোষ্ঠীর নামও এতে নেই। অন্য কোনো ধর্মের অনুসারীদের সঙ্গে আজ কেউ কীভাবে কথা বলবে, আচরণ করবে বা তাদের নিয়ে কী ভাববে, সে বিষয়ে এই লেখা আয়াত থেকে কোনো সিদ্ধান্ত টানছে না।"
          },
          {
            "en": "What the sources name as the surah's subject is a matter of worship. Ibn Kathir calls it disavowal from the deed the mushrikin practised and a command to sincerity. Al-Qurtubi reports Ibn 'Abbas (RA) saying that nothing in the Qur'an angers Iblis more, because it is tawhid and disavowal of shirk. Questions of conduct towards others lie beyond what these commentators say about this verse. The article reports their words on the addressees and stops there.",
            "bn": "সূত্রগুলো সূরার যে বিষয়ের কথা বলে, তা ইবাদতের প্রশ্ন। ইবন কাসীরের কাছে এ সূরা মুশরিকদের আমল থেকে সম্পর্কচ্ছেদ আর ইখলাসের আদেশ। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: কুরআনে এর চেয়ে বেশি ইবলীসকে আর কিছু ক্ষুব্ধ করে না, কারণ এ সূরা তাওহিদ আর শিরক থেকে মুক্তি। এই আয়াত নিয়ে তাফসীরকারেরা যা বলেছেন, অন্যদের সঙ্গে আচরণের প্রশ্ন তার বাইরে। সম্বোধিতদের নিয়ে তাঁরা যা বলেছেন, এই লেখা ততটুকুই জানায়, এর বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reading for the Reader's Resolve",
          "bn": "পাঠকের নিজের দৃঢ়তার জন্য"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not any commentator's. The answer to the offer arrives in the surah itself as words to be said, beginning with qul: the reply is given to the Messenger ﷺ, not composed by him. A reader can take from that a question about the self: whether my worship has a part I treat as settled, and whether I have left the deciding of it to my own comfort or to what Allah has sent down.",
            "bn": "এখান থেকে যা বলা হচ্ছে, তা এই লেখার নিজের পাঠ, কোনো তাফসীরকারের নয়। প্রস্তাবের জবাব এসেছে সূরাটির ভেতরেই, মুখে বলার মতো কিছু কথা হয়ে, যার শুরু কুল দিয়ে: জবাবটি রাসূল ﷺ-কে দেওয়া হয়েছে, তিনি নিজে তা রচনা করেননি। পাঠক এখান থেকে নিজেকে নিয়ে একটা প্রশ্ন তুলে নিতে পারেন। আমার ইবাদতে কি এমন কোনো অংশ আছে, যাকে আমি মীমাংসিত বলে ধরে নিয়েছি? আর তার ফয়সালা কি আমি ছেড়ে দিয়েছি নিজের আরামের হাতে, নাকি আল্লাহ যা নাজিল করেছেন তার উপর?"
          },
          {
            "en": "The same reading notices as-Sa'di's two words, announcing and stating openly. For most readers the test is smaller than a gathering of notables: a prayer quietly skipped to fit in, a conviction blurred so that a conversation stays easy. This reading asks only that the reader know what in their own worship is not for trading, and when asked, say so plainly, while leaving the verse's addressees where the commentators placed them, in their own time.",
            "bn": "এই পাঠ সা'দীর দুটি শব্দও খেয়াল করে: ঘোষণা দিয়ে, খোলাখুলি। বেশির ভাগ পাঠকের পরীক্ষা নেতাদের মজলিসের চেয়ে অনেক ছোট। দশজনের সঙ্গে মিশে যেতে চুপচাপ একটা নামাজ ছেড়ে দেওয়া, কিংবা আলাপ সহজ রাখতে নিজের বিশ্বাসের কথা ঝাপসা করে ফেলা। এই পাঠ পাঠকের কাছে শুধু এটুকু চায়: নিজের ইবাদতের কোন জিনিস দরদামের বাইরে, তা জেনে রাখুন, আর কেউ জিজ্ঞেস করলে সোজাসুজি বলুন। আয়াতের সম্বোধিতরা থাকুক সেখানেই, যেখানে তাফসীরকারেরা তাদের রেখেছেন, তাদের নিজেদের সময়ে।"
          }
        ]
      }
    ]
  },
  "109:4": {
    "sections": [
      {
        "h": {
          "en": "A Noun Where the Verb Stood",
          "bn": "ক্রিয়ার জায়গায় বিশেষ্য"
        },
        "p": [
          {
            "en": "Wa la ana 'abidun ma 'abadtum: nor am I a worshipper of what you have worshipped. Set beside 109:2, la a'budu ma ta'budun, the line changes in two places. Where 109:2 has a present verb, a'budu, I worship, this verse has the pronoun ana and the active participle 'abid, worshipper, so the refusal now rests on a noun. And where 109:2 has ta'budun, you worship, this verse has 'abadtum, a past tense: what you have worshipped.",
            "bn": "ওয়ালা আনা আবিদুম মা আবাদতুম: তোমরা যার ইবাদত করে এসেছ, আমি তার ইবাদতকারী নই। ১০৯:২ আয়াতের পাশে রাখলে দুই জায়গায় বদল চোখে পড়ে। সেখানে ছিল বর্তমান কালের ক্রিয়া, আ'বুদু, আমি ইবাদত করি। এখানে এসেছে সর্বনাম আনা আর কর্তাবাচক শব্দ আবিদ, ইবাদতকারী। অস্বীকারটা তাই এবার দাঁড়িয়েছে একটা বিশেষ্যের উপর। আর সেখানে ছিল তা'বুদূন, তোমরা ইবাদত করো। এখানে আবাদতুম, অতীত কাল: তোমরা যার ইবাদত করে এসেছ।"
          },
          {
            "en": "The commentators gloss this verse briefly. Al-Muyassar gives the plain sense: nor am I a worshipper of what you worshipped of idols and false gods. At-Tabari puts the two words in time: 'abid, in what lies ahead of me, and 'abadtum, in what has passed. Al-Qurtubi calls the verse a denial that he worships what they worshipped in the past. Al-Baghawi marks it in two words, fi al-istiqbal, of the future.",
            "bn": "এ আয়াতে তাফসীরকারেরা অল্প কথা বলেন। মুয়াসসার সোজা অর্থটা দেয়: মূর্তি আর বাতিল উপাস্যের মধ্যে তোমরা যাদের ইবাদত করেছ, আমি তাদের ইবাদতকারী নই। তাবারী শব্দ দুটিকে সময়ের ঘরে বসান। আবিদ মানে আমার সামনের দিনগুলোতে, আর আবাদতুম মানে যা পেরিয়ে গেছে তাতে। কুরতুবীর কাছে আয়াতটি অস্বীকার করে যে, অতীতে তারা যার ইবাদত করেছে তিনি তার ইবাদত করেন। বাগাভী দুই শব্দেই সেরে নেন: ফিল ইসতিকবাল, ভবিষ্যতের কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Ahead of Me, Behind You",
          "bn": "আমার সামনে, তোমাদের পেছনে"
        },
        "p": [
          {
            "en": "Al-Baghawi spreads the tense reading across the surah: 109:2 and 109:3 are fi al-hal, of the present, and 109:4 and 109:5 fi al-istiqbal, of the future. Al-Qurtubi relays the same division from al-Akhfash and al-Mubarrad. I do not worship at this hour what you worship, nor do you at this hour worship what I worship; then, nor will I in the future worship what you worshipped, nor will you in the future worship what I worship.",
            "bn": "সময় ধরে পড়ার এই রীতি বাগাভী গোটা সূরায় বিছিয়ে দেন। ১০৯:২ ও ১০৯:৩ ফিল হাল, বর্তমানের কথা। ১০৯:৪ ও ১০৯:৫ ফিল ইসতিকবাল, ভবিষ্যতের কথা। কুরতুবী একই ভাগ বর্ণনা করেন আখফাশ ও মুবাররাদ থেকে। এই মুহূর্তে তোমরা যার ইবাদত করো, আমি তার ইবাদত করি না। এই মুহূর্তে আমি যার ইবাদত করি, তোমরাও তার ইবাদত করো না। এরপর: তোমরা যার ইবাদত করেছ, ভবিষ্যতেও আমি তার ইবাদত করব না, আর আমি যার ইবাদত করি, ভবিষ্যতে তোমরাও তার ইবাদত করবে না।"
          },
          {
            "en": "Ibn Kathir, closing the surah, quotes al-Bukhari reporting what others said: I do not worship what you worship now, and I will not answer you in what remains of my life. Summing up, though, Ibn Kathir labels this view past and future, as al-Bukhari and other commentators related it: the first pair past, the second future. Ma'arif al-Qur'an calls the same view present and future, and reports that Ashraf Thanawi preferred it in Bayan ul-Qur'an.",
            "bn": "সূরার শেষে ইবন কাসীর বুখারীর একটি উদ্ধৃতি আনেন, যেখানে বুখারী অন্যদের কথা জানান: তোমরা যার ইবাদত করো, এখন আমি তার ইবাদত করি না, আর জীবনের বাকি সময়েও তোমাদের ডাকে সাড়া দেব না। অথচ মতগুলো গুছিয়ে বলার সময় ইবন কাসীর একে অতীত ও ভবিষ্যতের মত বলেন। বুখারী ও অন্য মুফাসসিররা যেমন বর্ণনা করেছেন, প্রথম জোড়া অতীতের, দ্বিতীয় জোড়া ভবিষ্যতের। মাআরিফুল কুরআন একই মতকে বলে বর্তমান ও ভবিষ্যৎ, আর জানায় যে আশরাফ থানভী বায়ানুল কুরআনে এ মতকেই প্রাধান্য দিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi notices where the pairing is uneven. Exact mirrors would have 109:5 say ma 'abadtu, what I worshipped, to answer ma 'abadtum here; it says ma a'budu. He reads the turn as a sign that He who was worshipped in the past is He who is worshipped in the future, adding that past and future can stand in each other's place, most often in what Allah reports. So the past tense falls only on their side.",
            "bn": "এরপর কুরতুবী লক্ষ করেন, জোড়াটা কোথায় অসমান। আয়াতগুলো হুবহু একে অপরের প্রতিচ্ছবি হলে এখানকার মা আবাদতুমের জবাবে ১০৯:৫ আয়াতে থাকত মা আবাদতু, আমি যার ইবাদত করেছি। কিন্তু সেখানে আছে মা আ'বুদু। কুরতুবীর ব্যাখ্যায় এই বাঁক জানিয়ে দেয়, অতীতে যাঁর ইবাদত হয়েছে, ভবিষ্যতেও ইবাদত হবে তাঁরই। তিনি যোগ করেন, অতীত আর ভবিষ্যৎ একে অপরের জায়গা নিতে পারে, আর তা বেশি ঘটে আল্লাহর দেওয়া সংবাদে। ফলে অতীত কাল পড়েছে কেবল ওদের দিকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Idols Set Aside Yesterday",
          "bn": "গতকালের ফেলে দেওয়া মূর্তি"
        },
        "p": [
          {
            "en": "Al-Qurtubi relays another reading, under qila, it has been said, which takes the past tense of 'abadtum at its word. They used to worship idols, it runs, and when they wearied of an idol they discarded it and took up another by their own desire. If they passed stones that pleased them, they threw these down and raised those, setting them up as gods to worship.",
            "bn": "কুরতুবী আরেকটি ব্যাখ্যা আনেন কীলা, বলা হয়েছে, এই শব্দে। এ ব্যাখ্যা আবাদতুমের অতীত কালকে আক্ষরিক অর্থেই ধরে। তারা মূর্তির পূজা করত। কোনো মূর্তিতে বিরক্ত হলে সেটা ফেলে দিত। তারপর মনের খেয়ালে আরেকটা ধরত। পথে চোখে লাগার মতো পাথর পেলে আগেরগুলো ফেলে নতুনগুলো তুলে নিত। সেগুলোকে খাড়া করে উপাস্য বানিয়ে তাদের ইবাদত শুরু করত।"
          },
          {
            "en": "On this reading the two lines name two sets of idols. La a'budu ma ta'budun means: I do not worship what you worship today, these gods now before you. Wa la ana 'abidun ma 'abadtum then means: nor what you worshipped bi-l-ams, yesterday, the gods you discarded when you turned to these. The refusal reaches the old gods as well as the new. Al-Qurtubi gives the view with qila and does not adopt it as his own.",
            "bn": "এ ব্যাখ্যায় দুই আয়াত দুই দল মূর্তির কথা বলে। লা আ'বুদু মা তা'বুদূনের অর্থ: আজ তোমরা যার ইবাদত করো, তোমাদের সামনে রাখা এই উপাস্যদের, আমি তাদের ইবাদত করি না। আর ওয়ালা আনা আবিদুম মা আবাদতুমের অর্থ: বিল আমস, গতকাল তোমরা যাদের ইবাদত করেছ, এদের দিকে ঝোঁকার সময় যাদের ফেলে দিয়েছ, আমি তাদেরও ইবাদতকারী নই। অস্বীকার তাই পুরোনো ও নতুন দুই দলকেই ছুঁয়ে যায়। কুরতুবী মতটি এনেছেন কীলা দিয়ে, নিজের মত বলে গ্রহণ করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Not Whom Alone, but How",
          "bn": "শুধু কার নয়, কীভাবেও"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the pairs by object and by manner. Of 109:3 he says that ma there carries the sense of man, who, since the One worshipped is Allah alone. At this verse he gives the other sense: I do not worship your worship, la a'budu 'ibadatakum. I do not walk in it, he explains, and I do not follow it; I worship Allah only in the way He loves and is pleased with, 'ala al-wajh alladhi yuhibbuhu wa yardahu.",
            "bn": "ইবন কাসীর জোড়া দুটিকে পড়েন একটিকে উপাস্য দিয়ে, অন্যটিকে ইবাদতের ধরন দিয়ে। ১০৯:৩ আয়াত সম্পর্কে তিনি বলেন, সেখানে মা শব্দটি মান অর্থে, অর্থাৎ যিনি, কারণ উপাস্য তো একমাত্র আল্লাহ। এ আয়াতে তিনি অন্য অর্থটি দেন: তোমাদের ইবাদতের মতো ইবাদত আমি করি না, লা আ'বুদু ইবাদাতাকুম। তাঁর ব্যাখ্যায়, আমি সে পথে চলি না, তার অনুসরণও করি না। আমি আল্লাহর ইবাদত করি কেবল সেভাবে, যেভাবে তিনি ভালোবাসেন ও যাতে তিনি সন্তুষ্ট।"
          },
          {
            "en": "Of 109:5 he gives the matching sense: you do not follow Allah's commands and His law in worshipping Him, but have invented something of your own accord, and he cites 53:23. The disavowal, he concludes, covers all they were in. Every worshipper must have one he worships and a way of worship he travels to Him, so the Messenger ﷺ and those who follow him worship Allah by what He has laid down.",
            "bn": "১০৯:৫ আয়াতে তিনি এর জোড়া অর্থটি দেন। আল্লাহর ইবাদতে তোমরা তাঁর আদেশ আর তাঁর দেওয়া বিধান মানো না, বরং নিজেদের মন থেকে কিছু একটা বানিয়ে নিয়েছ। এখানে তিনি ৫৩:২৩ আয়াত আনেন। তাঁর সিদ্ধান্ত, তারা যা কিছুতে ছিল, সবকিছু থেকেই এই সম্পর্কচ্ছেদ। প্রত্যেক ইবাদতকারীর একজন উপাস্য থাকতে হয়, আর থাকতে হয় তাঁর কাছে পৌঁছানোর একটা ইবাদতের পথ। তাই রাসূল ﷺ ও তাঁর অনুসারীরা আল্লাহর ইবাদত করেন তাঁরই দেওয়া বিধান মেনে।"
          },
          {
            "en": "From this Ibn Kathir reads the testimony of Islam: none is worshipped but Allah, and there is no path to Him except what the Messenger ﷺ brought. Al-Qurtubi records a close reading under qila, taking ma as masdariyya: I do not worship with the like of your worship, and you do not worship with the like of mine, which is tawhid. As-Sa'di, at 109:3, puts the other side bluntly: their worship of Allah, joined with shirk, is not called worship at all.",
            "bn": "এখান থেকেই ইবন কাসীর ইসলামের সাক্ষ্যবাক্য পড়েন: আল্লাহ ছাড়া কোনো উপাস্য নেই, আর রাসূল ﷺ যা নিয়ে এসেছেন তা ছাড়া তাঁর কাছে পৌঁছানোর কোনো পথ নেই। কুরতুবী কীলা দিয়ে কাছাকাছি একটি ব্যাখ্যা আনেন, যেখানে মা মাসদারিয়্যা। অর্থ দাঁড়ায়: তোমাদের ইবাদতের মতো ইবাদত আমি করি না, আর আমার ইবাদতের মতো ইবাদত তোমরা করো না, যে ইবাদত হলো তাওহীদ। সা'দী ১০৯:৩ আয়াতে অন্য দিকটা সোজাসুজি বলেন। শিরকের সঙ্গে মেশানো আল্লাহর ইবাদতকে ইবাদতই বলা হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Said Again Because Asked Again",
          "bn": "বারবার প্রস্তাব, বারবার জবাব"
        },
        "p": [
          {
            "en": "Other views ask why the line repeats at all. Al-Qurtubi, at 109:2, relays from Ibn 'Abbas (RA) the account of Quraysh's offer that each side worship the other's deity for a year, and draws his conclusion from it: the repetition came because the people repeated their proposal to him time after time. He adds two views under qila: that it was repeated for taghliz, to make the refusal severe, and the present and future reading given above.",
            "bn": "অন্য কিছু ব্যাখ্যা প্রশ্ন তোলে, আয়াতটি আদৌ ফিরে আসে কেন। কুরতুবী ১০৯:২ আয়াতে ইবন আব্বাস (রাঃ) থেকে কুরাইশের সেই প্রস্তাবের বিবরণ আনেন, যেখানে প্রত্যেক পক্ষ এক বছর অন্য পক্ষের উপাস্যের ইবাদত করবে। সেখান থেকেই তিনি সিদ্ধান্ত টানেন: লোকেরা বারবার তাঁর কাছে একই প্রস্তাব নিয়ে এসেছিল, তাই কথাও বারবার এসেছে। কীলা দিয়ে তিনি আরও দুটি মত যোগ করেন। এক, কঠোরতা বোঝাতে, তাগলীযের জন্য পুনরাবৃত্তি। দুই, বর্তমান ও ভবিষ্যতের সেই ব্যাখ্যা, যা আগে বলা হয়েছে।"
          },
          {
            "en": "Al-Baghawi gives a related view from al-Qutabi, that is, Ibn Qutayba: the speech repeats because the time repeats. They had said, he reports, that if it pleased him they would enter his religion for a year, provided he entered theirs for a year, and the surah came down. Al-Baghawi also reports, from most scholars of meaning, that the Qur'an came in the Arabs' tongue, whose ways include repetition for emphasis and understanding, just as they include brevity for ease.",
            "bn": "বাগাভী কাছাকাছি একটি মত আনেন কুতাবী, অর্থাৎ ইবন কুতাইবা থেকে: সময় ফিরে ফিরে আসে বলে কথাও ফিরে ফিরে আসে। বাগাভীর বর্ণনায় তারা বলেছিল, আপনি চাইলে আমরা এক বছর আপনার দ্বীনে ঢুকব, শর্ত হলো আপনি এক বছর আমাদের দ্বীনে ঢুকবেন। তখন সূরাটি নাযিল হয়। বাগাভী অধিকাংশ ভাষাবিদের মতও জানান। কুরআন নাযিল হয়েছে আরবদের ভাষায়। জোর দিতে আর ভালো করে বোঝাতে কথা দোহরানো তাদের রীতি, ঠিক যেমন সহজ করতে সংক্ষেপে বলাও তাদের রীতি।"
          },
          {
            "en": "Ibn Kathir names a third view, pure emphasis, ta'kid mahd. He reports that Ibn Jarir relayed it from some scholars of Arabic, and at-Tabari's own text bears this out, citing 94:5 and 94:6, and 102:6 and 102:7, as parallels. Ibn Kathir adds that some, Ibn al-Jawzi among them, relayed it from Ibn Qutayba. So one name stands behind two explanations in these sources: al-Baghawi ties Ibn Qutayba to repeated time, Ibn Kathir's report to emphasis. The article sets both down as given.",
            "bn": "ইবন কাসীর তৃতীয় একটি মতের নাম দেন: নিছক জোর দেওয়া, তা'কীদ মাহদ। তিনি জানান, ইবন জারীর এটি কিছু আরবি ভাষাবিদ থেকে বর্ণনা করেছেন। তাবারীর নিজের লেখাতেও তা আছে, যেখানে উদাহরণ হিসেবে এসেছে ৯৪:৫ ও ৯৪:৬, আর ১০২:৬ ও ১০২:৭। ইবন কাসীর আরও বলেন, ইবনুল জাওযীসহ কেউ কেউ মতটি ইবন কুতাইবা থেকে বর্ণনা করেছেন। ফলে এই উৎসগুলোতে একই নামের পেছনে দুই ব্যাখ্যা দাঁড়ায়। বাগাভী ইবন কুতাইবাকে জুড়েছেন সময়ের পুনরাবৃত্তির সঙ্গে, ইবন কাসীরের বর্ণনা জুড়েছে জোর দেওয়ার সঙ্গে। এ লেখা দুটোকেই যেমন পাওয়া গেছে তেমন রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Refusing the Very Possibility",
          "bn": "সম্ভাবনাটুকুও নাকচ"
        },
        "p": [
          {
            "en": "Ibn Kathir then records a fourth view, which he says Abu al-'Abbas ibn Taymiyya supported in some of his books, and it turns on the noun this verse brings in. La a'budu ma ta'budun negates the act, since it is a verbal sentence. Wa la ana 'abidun ma 'abadtum negates his accepting it at all, because negation by a nominal sentence is stronger. The meaning is a denial that it happens and also that it is possible in the religion, nafy al-imkan ash-shar'i.",
            "bn": "এরপর ইবন কাসীর চতুর্থ একটি মত উল্লেখ করেন। তাঁর ভাষায়, আবুল আব্বাস ইবন তাইমিয়া তাঁর কোনো কোনো বইয়ে এ মতের পক্ষ নিয়েছেন। মতটি ঘোরে এ আয়াতের নতুন বিশেষ্যটিকে ঘিরে। লা আ'বুদু মা তা'বুদূন ক্রিয়াভিত্তিক বাক্য, তাই তা কাজটিকে নাকচ করে। ওয়ালা আনা আবিদুম মা আবাদতুম কাজটি মেনে নেওয়াকেই পুরোপুরি নাকচ করে, কারণ বিশেষ্যভিত্তিক বাক্যে না বলা বেশি জোরালো। অর্থ দাঁড়ায়, কাজটি ঘটেও না, দ্বীনে তার সম্ভাবনাও নেই: নাফয়ুল ইমকান আশ শার'ঈ।"
          },
          {
            "en": "Ibn Kathir calls this a good view too, and closes with Allah knows best. As-Sa'di reaches a near distinction on the other side of the pairing. At 109:3, and again at 109:5, he says the statement was repeated so that the first shows the act does not exist, and the second that it has become a lasting trait, wasf lazim. Those comments sit on the lines about the listeners; the fetched text of as-Sa'di has nothing filed at this verse.",
            "bn": "ইবন কাসীর একেও ভালো মত বলেন, তারপর শেষ করেন আল্লাহই ভালো জানেন বলে। জোড়ার অন্য দিকে সা'দী কাছাকাছি একটি পার্থক্য টানেন। ১০৯:৩ আয়াতে, আবার ১০৯:৫ আয়াতে তিনি বলেন, কথাটি দুবার এসেছে যাতে প্রথমবার বোঝায় কাজটির অস্তিত্ব নেই, আর দ্বিতীয়বার বোঝায় তা স্থায়ী স্বভাবে পরিণত হয়েছে, ওয়াসফ লাযিম। তাঁর এ মন্তব্য শ্রোতাদের নিয়ে বলা আয়াতগুলোর উপর। এ আয়াতে সা'দীর যে লেখা পাওয়া গেছে, তাতে কিছুই নেই।"
          },
          {
            "en": "At-Tabari reaches permanence through the hearers. The address, he says, concerned particular persons whom Allah knew would never believe, so the Prophet ﷺ was told to make them despair of what they had hoped for, and to tell them it would not come from him or from them fi waqtin min al-awqat, at any time at all. His gloss on 'abid, in what lies ahead of me, carries that never.",
            "bn": "তাবারী স্থায়িত্বে পৌঁছান শ্রোতাদের পথ ধরে। তাঁর কথায়, সম্বোধনটি ছিল নির্দিষ্ট কিছু মানুষের প্রতি, আল্লাহ জানতেন তারা কখনো ঈমান আনবে না। তাই নবী ﷺ-কে আদেশ করা হলো, যে আশা তারা করেছিল, তা থেকে তাদের নিরাশ করে দিতে। জানিয়ে দিতে যে এমন কিছু তাঁর দিক থেকেও ঘটবে না, তাদের দিক থেকেও না, ফী ওয়াকতিম মিনাল আওকাত, কোনো সময়েই না। আবিদ শব্দের যে ব্যাখ্যা তিনি দেন, আমার সামনের দিনগুলোতে, তার ভেতরেই আছে এই কখনো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Din and My Din",
          "bn": "তোমাদের দ্বীন, আমার দ্বীন"
        },
        "p": [
          {
            "en": "The surah closes in 109:6: lakum dinukum wa liya din, for you is your religion and for me is mine. Ibn Kathir sets it beside 10:41, for me are my deeds and for you are your deeds, and 28:55, ours are our deeds and yours are your deeds. He quotes al-Bukhari: lakum dinukum, disbelief, wa liya din, Islam, with al-Bukhari's note that the word is din and not dini because the verses end in nun, as in 26:78 and 26:80.",
            "bn": "সূরা শেষ হয় ১০৯:৬ আয়াতে: লাকুম দীনুকুম ওয়ালিয়া দীন, তোমাদের জন্য তোমাদের দ্বীন, আমার জন্য আমার দ্বীন। ইবন কাসীর এর পাশে রাখেন ১০:৪১ আয়াত, আমার কাজ আমার, তোমাদের কাজ তোমাদের। আর রাখেন ২৮:৫৫ আয়াত, আমাদের আমল আমাদের, তোমাদের আমল তোমাদের। তিনি বুখারীর কথা উদ্ধৃত করেন: লাকুম দীনুকুম মানে কুফর, ওয়ালিয়া দীন মানে ইসলাম। বুখারী এও বলেন, শব্দটা দীনী না হয়ে দীন হয়েছে, কারণ আয়াতগুলোর শেষ নূন দিয়ে, যেমন ২৬:৭৮ ও ২৬:৮০ আয়াতে।"
          },
          {
            "en": "Al-Baghawi glosses it the same way: yours is shirk, and mine is Islam. Al-Qurtubi hears a threat in it, ma'na at-tahdid, like 28:55: if you are content with your religion, we are content with ours. He also gives din as recompense: yours is the recompense of your religion, and mine of mine, since din can mean jaza'. Ma'arif al-Qur'an reports that Bayan ul-Qur'an also takes din as jaza', and so differs there from al-Bukhari's gloss.",
            "bn": "বাগাভীর ব্যাখ্যাও একই: তোমাদেরটা শিরক, আমারটা ইসলাম। কুরতুবী এতে হুমকির সুর শোনেন, মা'নাত তাহদীদ, ২৮:৫৫ আয়াতের মতো। তোমরা নিজেদের দ্বীনে খুশি থাকলে আমরাও আমাদের দ্বীনে খুশি। তিনি দ্বীনের আরেক অর্থও দেন, প্রতিদান। তোমাদের জন্য তোমাদের দ্বীনের প্রতিদান, আমার জন্য আমার দ্বীনের প্রতিদান, কারণ দ্বীন শব্দের এক অর্থ জাযা। মাআরিফুল কুরআন জানায়, বায়ানুল কুরআনও দ্বীনকে জাযা অর্থে নিয়েছে, আর এখানে বুখারীর ব্যাখ্যা থেকে আলাদা হয়েছে।"
          },
          {
            "en": "At-Tabari reads permanence here too. Yours is your religion, which you will never leave, for it has been sealed upon you and decreed that you die on it; mine is the religion I am on, which I will never leave, since it preceded in Allah's knowledge that I would not move from it to another. As-Sa'di says the verse marks off the two parties and separates the two groups, citing 17:84, each acts according to his own way, and 10:41.",
            "bn": "তাবারী এখানেও স্থায়িত্বই পড়েন। তোমাদের দ্বীন তোমাদের, তা তোমরা কখনো ছাড়বে না, কারণ তোমাদের উপর মোহর পড়ে গেছে, ফয়সালা হয়ে গেছে যে তোমরা এর উপরেই মরবে। আমার দ্বীন, যার উপর আমি আছি, তা আমি কখনো ছাড়ব না, কারণ আল্লাহর জ্ঞানে আগেই স্থির হয়ে আছে যে আমি তা ছেড়ে অন্য কিছুতে যাব না। সা'দী বলেন, আয়াতটি দুই পক্ষকে আলাদা করে দেয়, দুই দলের মাঝে সীমা টেনে দেয়। এখানে তিনি আনেন ১৭:৮৪, প্রত্যেকে নিজ নিজ ধরনে কাজ করে, আর ১০:৪১ আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogated, or a Plain Statement",
          "bn": "মানসুখ, নাকি নিছক সংবাদ"
        },
        "p": [
          {
            "en": "Whether 109:6 still stands as a ruling is itself disputed in these sources. Al-Qurtubi writes that the verse came before the command to fight and was abrogated by ayat as-sayf, the verse of the sword. He then records two further views under qila: that the whole surah is abrogated, and that nothing in it is abrogated, because it is khabar, a statement.",
            "bn": "১০৯:৬ আয়াতের বিধান এখনো বহাল কি না, তা নিয়েই এই উৎসগুলোতে মতভেদ আছে। কুরতুবী লেখেন, আয়াতটি এসেছিল যুদ্ধের আদেশের আগে, পরে আয়াতুস সাইফ, তরবারির আয়াত দিয়ে তা মানসুখ হয়েছে। এরপর তিনি কীলা দিয়ে আরও দুটি মত উল্লেখ করেন। একটি মতে গোটা সূরাই মানসুখ। আরেকটি মতে এর কিছুই মানসুখ হয়নি, কারণ এটি খবর, একটি সংবাদ।"
          },
          {
            "en": "Ma'arif al-Qur'an reports that some commentators held the surah abrogated, arguing from 109:6 that it appears to conflict with the rulings of jihad. It answers that the verse neither guarantees nor permits their disbelief, but means what 28:55 means, and it calls non-abrogation the correct position, held by the majority of scholars. The article records the disagreement with its holders and takes no side.",
            "bn": "মাআরিফুল কুরআন জানায়, কিছু তাফসীরকার সূরাটিকে মানসুখ মনে করেছেন। তাঁদের যুক্তি ১০৯:৬ আয়াত, যা বাহ্যত জিহাদের বিধানের সঙ্গে মেলে না বলে তাঁরা ধরেছেন। মাআরিফুল কুরআনের জবাব, আয়াতটি তাদের কুফরের নিশ্চয়তাও দেয় না, অনুমতিও দেয় না। এর অর্থ ২৮:৫৫ আয়াতের অর্থের মতো। সূরাটি মানসুখ নয়, এটাকেই সে বলে সঠিক মত, যা অধিকাংশ আলেমের। এ লেখা মতভেদটি তার ধারকদের নামসহ তুলে রাখছে, কোনো পক্ষ নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Kept to Their Hearers",
          "bn": "যাদের শোনানো, কথা তাদেরই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what it describes: words the Messenger ﷺ was commanded to say to particular people of his own time, whom at-Tabari calls persons Allah knew would never believe. It licenses nothing against any living person or community, and the dispute over abrogation reported above records what commentators wrote, not a ruling drawn here for anyone today. No fetched commentary attaches a hadith to this verse's own wording.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। এ ছিল রাসূল ﷺ-কে দেওয়া আদেশ, তাঁর সময়ের নির্দিষ্ট কিছু মানুষকে কথাগুলো শোনানোর। তাবারীর ভাষায় তারা এমন লোক, যাদের সম্পর্কে আল্লাহ জানতেন তারা কখনো ঈমান আনবে না। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। উপরে মানসুখ হওয়া নিয়ে যে মতভেদের কথা এসেছে, তা তাফসীরকারদের লেখার বিবরণ মাত্র, আজকের কারও জন্য এখান থেকে টানা কোনো বিধান নয়। এ আয়াতের নিজস্ব শব্দের সঙ্গে কোনো হাদীস জুড়ে দেয়নি সংগৃহীত কোনো তাফসীর।"
          },
          {
            "en": "What follows is this article's own reading, not a commentator's. The verse turns a refusal from something done into something one is: not I do not, but I am not one who does. A reader can put that to themselves without looking at anyone else. Which of my refusals are still decisions I make afresh each time, and which have become who I am? And Ibn Kathir's pairing leaves a second question: whether I guard the way I worship, by what was taught, as closely as whom I worship.",
            "bn": "এরপরের কথা এ লেখার নিজস্ব পাঠ, কোনো তাফসীরকারের নয়। আয়াতটি অস্বীকারকে একটা কাজ থেকে বদলে দেয় পরিচয়ে। আমি করি না, শুধু এটুকু নয়, আমি এমন মানুষই নই যে তা করে। অন্য কারও দিকে না তাকিয়েই পাঠক এ প্রশ্ন নিজেকে করতে পারেন। আমার কোন অস্বীকারগুলো এখনো প্রতিবার নতুন করে নেওয়া সিদ্ধান্ত, আর কোনগুলো আমার পরিচয় হয়ে গেছে? ইবন কাসীরের জোড়া ব্যাখ্যা রেখে যায় আরেকটি প্রশ্ন। কার ইবাদত করি, তা যতটা আগলে রাখি, শেখানো পথ মেনে কীভাবে ইবাদত করি, সেটাও কি ততটা আগলে রাখি?"
          }
        ]
      }
    ]
  }
});
