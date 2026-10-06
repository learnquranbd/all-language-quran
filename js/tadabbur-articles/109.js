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
          "bn": "প্রথম শব্দেই রাসূলের দায়িত্ব"
        },
        "p": [
          {
            "en": "Qul ya ayyuha al-kafirun: say, O disbelievers. In the Arabic of the mushaf the verse is three words, qul, ya-ayyuha and al-kafirun, and it opens a surah of six verses. The first word is an imperative, so before anyone is addressed the speaker is commissioned. What follows is given to the Messenger ﷺ to deliver, beginning with the call itself. The message proper starts in 109:2, the verse that follows, which is not treated here.",
            "bn": "কুল ইয়া আইয়ুহাল কাফিরুন: বলো, হে কাফিররা। মুসহাফের আরবিতে আয়াতটি তিনটি শব্দ: কুল, ইয়া-আইয়ুহা আর আল-কাফিরুন। এ দিয়েই ছয়টি আয়াতের সূরাটি শুরু। প্রথম শব্দটি আদেশসূচক। ফলে কাউকে ডাকার আগেই বক্তাকে দায়িত্ব বুঝিয়ে দেওয়া হচ্ছে। এরপর যা আসছে, রাসূল ﷺ-এর হাতে তা তুলে দেওয়া হয়েছে পৌঁছে দেওয়ার জন্য, আর তার শুরু এই ডাক দিয়েই। বার্তার মূল কথা শুরু হয় পরের আয়াত ১০৯:২ থেকে। সে আয়াত এই লেখায় আলোচিত নয়, তার নিজের জায়গায় থাকুক।"
          },
          {
            "en": "The fetched commentators gloss qul in three ways. At-Tabari makes it personal and occasioned: say, O Muhammad, to these mushrikin who asked you to worship their gods for a year on condition that they worship your God for a year. Al-Muyassar makes it descriptive: say, O Messenger, to those who disbelieved in Allah and His Messenger, O you who disbelieve in Allah. As-Sa'di gives the shortest gloss and puts the weight on the manner: say it to the disbelievers mu'linan wa musarrihan, announcing it and stating it openly.",
            "bn": "যেসব তাফসীর এখানে দেখা হয়েছে, তাতে কুল শব্দের ব্যাখ্যা তিনটি। তাবারী একে যুক্ত করেন নির্দিষ্ট ঘটনা ও ব্যক্তির সঙ্গে: হে মুহাম্মাদ, এই মুশরিকদের বলো, যারা তোমার কাছে চেয়েছে এক বছর তুমি তাদের দেবতাদের ইবাদত করবে, এই শর্তে যে তারা এক বছর তোমার ইলাহের ইবাদত করবে। মুয়াসসার দেন বর্ণনামূলক অর্থ: হে রাসূল, যারা আল্লাহ ও তাঁর রাসূলকে অস্বীকার করেছে তাদের বলো, হে আল্লাহকে অস্বীকারকারীরা। সা'দীর ব্যাখ্যা সবচেয়ে ছোট, আর তাঁর জোর বলার ধরনে: কাফিরদের বলো মু'লিনান ওয়া মুসাররিহান, ঘোষণা দিয়ে, খোলাখুলি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Qul Stays in the Text",
          "bn": "কুল শব্দটি কেন রয়ে গেল"
        },
        "p": [
          {
            "en": "Al-Qurtubi reports Abu Bakr ibn al-Anbari on a reading put forward by someone attacking the Qur'an: say to those who disbelieved, I do not worship what you worship, claimed as the correct text. Ibn al-Anbari calls it a fabrication against the Lord of the worlds that weakens the surah. The received reading, he argues, already holds that meaning, since in Arabic say to Zayd, come to us, means say to Zayd, O Zayd, come to us. What the altered wording loses is the direct address itself.",
            "bn": "কুরতুবী আবু বকর ইবনুল আনবারীর একটি বক্তব্য উদ্ধৃত করেন। কুরআনের সমালোচক এক ব্যক্তি পড়ত: যারা কুফরি করেছে তাদের বলো, তোমরা যার ইবাদত কর আমি তার ইবাদত করি না। তার দাবি, এটাই সঠিক পাঠ। ইবনুল আনবারী একে রাব্বুল আলামীনের নামে মিথ্যা রটনা বলেন, যা সূরার অর্থকে দুর্বল করে। তাঁর যুক্তি, প্রচলিত পাঠে ওই অর্থ আগেই আছে। আরবিতে যায়দকে বলো, আমাদের কাছে এসো, এর মানে দাঁড়ায়: যায়দকে বলো, হে যায়দ, আমাদের কাছে এসো। বদলে দেওয়া শব্দে যা হারায়, তা হলো সরাসরি সম্বোধনটাই।"
          },
          {
            "en": "That address, Ibn al-Anbari says, was the point: the Messenger ﷺ went to them in their gathering and said, O disbelievers, knowing they were angered at being counted among the disbelievers, while he was guarded from any hand stretched against him. Whoever drops qul, he says, drops a sign given to the Messenger. Al-Baghawi's report describes the delivery: he went to al-Masjid al-Haram, where the notables of Quraysh sat, stood over them and recited the surah to the end. They then despaired of him, and harmed him and his companions.",
            "bn": "ইবনুল আনবারীর মতে আসল কথাটা ওই সম্বোধনেই। রাসূল ﷺ তাদের মজলিসে গিয়ে বলতেন, হে কাফিররা। তিনি জানতেন, কাফিরদের দলে গণ্য হলে তারা রেগে যায়। তবু কোনো হাত তাঁর দিকে বাড়তে পারেনি, তিনি ছিলেন সুরক্ষিত। তাঁর কথায়, যে কুল বাদ দেয়, সে রাসূলের একটি নিদর্শন বাদ দেয়। বাগাভীর বর্ণনায় সেই পৌঁছে দেওয়ার ছবি আছে। তিনি মাসজিদুল হারামে গেলেন, যেখানে কুরাইশের নেতারা বসে ছিল। তাদের মাথার কাছে দাঁড়িয়ে পুরো সূরা পড়ে শোনালেন। এরপর তারা তাঁর ব্যাপারে আশা ছেড়ে দিল, আর তাঁকে ও তাঁর সাহাবিদের কষ্ট দিতে লাগল।"
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
            "bn": "সম্বোধনটি কেন এই রূপে এল, তাবারী তা ব্যাখ্যা করেন। তাঁর কথায়, আল্লাহর এই বাণী তাঁর রাসূলকে বলা হয়েছিল মুশরিকদের মধ্যে নির্দিষ্ট কিছু ব্যক্তির ব্যাপারে, আশখাস বি-আ'য়ানিহিম। আল্লাহ জানতেন তারা কখনো ঈমান আনবে না, আর তাঁর জ্ঞানে এ কথা আগেই স্থির ছিল। তাই নবী ﷺ-কে আদেশ দেওয়া হলো, তারা যে আশা করছিল সে আশা যেন তিনি ভেঙে দেন। তাঁকেও তাদের ঈমানের আশা ছেড়ে দিতে বলা হলো। তাবারী যোগ করেন, ঘটেছিলও তাই। তাদের কেউ বদরে নিহত হয়, কেউ তার আগেই কুফরি অবস্থায় মারা যায়।"
          },
          {
            "en": "Al-Qurtubi makes the same point through grammar. The al- of al-kafirun, he says, refers to the ma'hud, people already known and specific, even though in form it is generic, because the address is to those who in Allah's knowledge would die in disbelief: min al-khusus alladhi ja'a bi-lafz al-'umum, a specific meaning in general wording. He cites al-Mawardi to the same effect: the verse came as an answer and meant a specific people, not all disbelievers, since some disbelievers later believed and worshipped Allah.",
            "bn": "কুরতুবী একই কথা বলেন ব্যাকরণের পথ ধরে। তাঁর মতে আল-কাফিরুন শব্দের আল ইঙ্গিত করে মা'হূদের দিকে, অর্থাৎ আগে থেকে জানা নির্দিষ্ট লোকদের দিকে। গঠনে শব্দটি সাধারণ হলেও এখানে সম্বোধন তাদের প্রতি, যারা আল্লাহর জ্ঞানে কুফরির উপরই মারা যাবে। তাঁর ভাষায়: মিনাল খুসূসিল্লাযী জা'আ বি-লাফযিল উমূম, সাধারণ শব্দে আসা নির্দিষ্ট অর্থ। মাওয়ারদীর বক্তব্যও তিনি আনেন একই সুরে। আয়াতটি এসেছিল জবাব হিসেবে, আর কাফির বলতে বোঝানো হয়েছে নির্দিষ্ট এক দলকে, সব কাফিরকে নয়। কারণ কাফিরদের কেউ কেউ পরে ঈমান এনে আল্লাহর ইবাদত করেছে।"
          },
          {
            "en": "Ibn Kathir puts it differently. The words, he says, include every disbeliever on the face of the earth, but those faced with this address were the disbelievers of Quraysh. He calls the whole surah a surah of bara'a, disavowal, from the deed the mushrikin practise, and a command to sincerity in worship. So at-Tabari, al-Qurtubi and al-Mawardi read al-kafirun as particular people, while Ibn Kathir reads the wording as wide and the people addressed as Quraysh. The article sets the two readings side by side and chooses neither.",
            "bn": "ইবন কাসীর বিষয়টা দেখেন অন্যভাবে। তাঁর মতে শব্দগুলো পৃথিবীর সব কাফিরকে শামিল করে, তবে যাদের মুখোমুখি এই সম্বোধন করা হয়েছিল, তারা কুরাইশের কাফিররা। পুরো সূরাটিকে তিনি বলেন বারাআতের সূরা: মুশরিকরা যে আমল করে, তা থেকে সম্পর্কচ্ছেদ, আর ইবাদতে ইখলাসের আদেশ। তাহলে তাবারী, কুরতুবী ও মাওয়ারদী আল-কাফিরুন বলতে বোঝেন নির্দিষ্ট মানুষ। আর ইবন কাসীর শব্দকে ধরেন ব্যাপক অর্থে, সম্বোধিত মানুষকে কুরাইশ বলে। এই লেখা দুটি পাঠই পাশাপাশি রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
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
            "bn": "তাবারী সূরাটিকে দেখান একটি প্রস্তাবের জবাব হিসেবে, আর শুরুতেই বলে নেন ফীমা যুকিরা, অর্থাৎ যেমন বর্ণিত আছে। তাঁর প্রথম বর্ণনার সূত্র মুহাম্মাদ ইবন মূসা আল-হারাশী থেকে আবু খালাফ ও দাউদ হয়ে ইকরিমা, তিনি ইবন আব্বাস (রাঃ) থেকে। কুরাইশ প্রস্তাব দিল, এত সম্পদ দেবে যে তিনি মক্কার সবচেয়ে ধনী মানুষ হবেন। যাকে চান তার সঙ্গে বিয়ে দেবে, তাঁর পেছনে চলবে। শর্ত একটাই, তাদের দেবতাদের মন্দ বলা বন্ধ করতে হবে। তা না হলে বিকল্প: এক বছর আমাদের দেবতা লাত ও উয্যার ইবাদত করো, আর এক বছর আমরা তোমার ইলাহের ইবাদত করব।"
          },
          {
            "en": "In that report he answered: until I see what comes from my Lord. Then the surah came, and with it 39:64 to 39:66. At-Tabari's second report, through Ibn Ishaq from Sa'id ibn Mina, client of al-Bakhtari, names al-Walid ibn al-Mughira, al-'As ibn Wa'il, al-Aswad ibn al-Muttalib and Umayya ibn Khalaf, who proposed that each side worship what the other worshipped and share in the whole affair. Al-Qurtubi gives this from Ibn Ishaq and others from Ibn 'Abbas (RA), naming al-Aswad ibn 'Abd al-Muttalib.",
            "bn": "ওই বর্ণনায় তিনি জবাব দিলেন: দেখি আমার রবের কাছ থেকে কী আসে। তারপর সূরাটি নাযিল হলো, সঙ্গে ৩৯:৬৪ থেকে ৩৯:৬৬ আয়াত। তাবারীর দ্বিতীয় বর্ণনা ইবন ইসহাক হয়ে আল-বাখতারীর মাওলা সাঈদ ইবন মীনা থেকে। সেখানে নাম আছে ওয়ালীদ ইবনুল মুগীরা, আস ইবন ওয়াইল, আসওয়াদ ইবনুল মুত্তালিব ও উমাইয়া ইবন খালাফের। তাদের প্রস্তাব ছিল, এক পক্ষ অন্য পক্ষের মাবুদের ইবাদত করবে, আর পুরো ব্যাপারে দুই পক্ষ অংশীদার থাকবে। কুরতুবী এ বর্ণনা আনেন ইবন ইসহাক ও অন্যদের সূত্রে ইবন আব্বাস (রাঃ) থেকে, আর সেখানে নামটি আসওয়াদ ইবন আবদিল মুত্তালিব।"
          },
          {
            "en": "Al-Qurtubi adds, from Abu Salih via Ibn 'Abbas (RA), that they said: if you touched some of these gods, we would believe you. Al-Baghawi names six men of Quraysh, among them al-Harith ibn Qays as-Sahmi and al-Aswad ibn 'Abd Yaghuth. None of the fetched texts grades these chains, and Ibn Kathir introduces the offer only with qila, it has been said. Ma'arif al-Qur'an reads the reports together as proposals made on different occasions, all answered at once. The names are given here as each source gives them.",
            "bn": "কুরতুবী আবু সালিহের সূত্রে ইবন আব্বাস (রাঃ) থেকে আরও আনেন, তারা বলেছিল: এই দেবতাদের কয়েকটাকে একটু ছুঁয়ে দিলেই আমরা তোমাকে সত্য বলে মেনে নেব। বাগাভী কুরাইশের লোকদের মোট ছয়টি নাম দেন, তাদের মধ্যে হারিস ইবন কায়স আস-সাহমী ও আসওয়াদ ইবন আবদি ইয়াগূস। এখানে দেখা কোনো তাফসীরে এসব সনদের মান নির্ণয় করা হয়নি। আর ইবন কাসীর প্রস্তাবটি আনেন কেবল কীলা বলে, অর্থাৎ বলা হয়। মাআরিফুল কুরআন সব বর্ণনা মিলিয়ে বলে, প্রস্তাবগুলো এসেছিল ভিন্ন ভিন্ন সময়ে, আর সূরা সবগুলোর জবাব দিয়েছে একসঙ্গে। নামগুলো এখানে প্রতিটি উৎসে যেভাবে আছে সেভাবেই দেওয়া হলো।"
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
            "bn": "এই ডাক দিয়ে শুরু হয় একটি গঠন। এরপর ১০৯:২ থেকে ১০৯:৫ পর্যন্ত চারটি ছোট অস্বীকৃতি, যার দুটি প্রায় হুবহু এক। শেষে ১০৯:৬: লাকুম দীনুকুম ওয়া লিয়া দীন। তাবারী বাক্যগুলো পড়েন সময় ধরে। তোমরা এখন যার ইবাদত কর, আমি তার ইবাদত করি না। আমি এখন যার ইবাদত করি, তোমরা তার ইবাদতকারী নও। সামনের দিনেও আমি তার ইবাদত করব না, যার ইবাদত তোমরা অতীতে করেছ। আর সামনের দিনে তোমরাও কখনো তার ইবাদত করবে না, যার ইবাদত আমি করি। এ পাঠকে তিনি যুক্ত করেন আগে বলা সেই সম্বোধিত লোকদের সঙ্গে।"
          },
          {
            "en": "Al-Qurtubi gives two explanations of the repetition. The first is emphasis, to cut off their hopes, as someone swears, by Allah I will not do it, and then again, by Allah I will not do it. Most scholars of meaning, he reports, hold that the Qur'an came in the Arabs' tongue, whose ways include repetition for emphasis, and he cites 55:13, 77:15, 78:4 and 78:5, and 94:5 and 94:6. The second, introduced with qila, matches their offer turn for turn, year after year, so each part is answered with its opposite: this will never be.",
            "bn": "পুনরাবৃত্তির দুটি ব্যাখ্যা দেন কুরতুবী। প্রথমটি জোর দেওয়া, যাতে তাদের আশা কেটে যায়। যেমন কেউ বলে, আল্লাহর কসম, আমি এ কাজ করব না, তারপর আবার বলে, আল্লাহর কসম, করব না। তিনি জানান, অর্থবিদদের অধিকাংশের মত হলো, কুরআন নাযিল হয়েছে আরবদের ভাষায়, আর জোর দিতে কথা ফিরিয়ে বলা তাদের রীতির অংশ। উদাহরণ হিসেবে তিনি আনেন ৫৫:১৩, ৭৭:১৫, ৭৮:৪ ও ৭৮:৫, এবং ৯৪:৫ ও ৯৪:৬। দ্বিতীয় ব্যাখ্যা তিনি আনেন কীলা বলে। এতে বাক্যগুলো তাদের প্রস্তাবের পালার সঙ্গে মিলে যায়, বছরের পর বছর। ফলে প্রতিটি অংশের জবাব আসে তার উল্টো দিয়ে: এমনটা কখনোই হবে না।"
          },
          {
            "en": "Ibn Kathir, in the English abridgement, reads the pairs differently: ma in 109:3 means whom, and the second pair means I do not worship in your manner of worship, so the disavowal covers both the one worshipped and the way of worship. He links 109:6 to 10:41 and 28:55. Ma'arif al-Qur'an lists three views: a present and future reading it attributes to al-Bukhari, preferred in Bayan ul-Qur'an; Ibn Kathir's distinction of object and manner; and plain emphasis, with 94:5 and 94:6 as its example.",
            "bn": "ইবন কাসীর, তাঁর ইংরেজি সংক্ষিপ্ত সংস্করণে, জোড়াগুলো পড়েন ভিন্নভাবে। ১০৯:৩ আয়াতে মা মানে যাঁর। আর দ্বিতীয় জোড়ার অর্থ: তোমাদের ইবাদতের ধরনে আমি ইবাদত করি না। ফলে সম্পর্কচ্ছেদ দুই জায়গাতেই, মাবুদের বেলাতেও, ইবাদতের পদ্ধতির বেলাতেও। ১০৯:৬ আয়াতকে তিনি যুক্ত করেন ১০:৪১ ও ২৮:৫৫ আয়াতের সঙ্গে। মাআরিফুল কুরআন তিনটি মত উল্লেখ করে। একটি বর্তমান ও ভবিষ্যৎ ভাগ করে পড়া, যা সে বুখারীর নামে আনে আর বায়ানুল কুরআন যেটিকে অগ্রাধিকার দেয়। আরেকটি ইবন কাসীরের মাবুদ ও পদ্ধতির পার্থক্য। তৃতীয়টি নিছক জোর দেওয়া, যার উদাহরণ ৯৪:৫ ও ৯৪:৬।"
          }
        ]
      },
      {
        "h": {
          "en": "Recited at Dawn and at Bedtime",
          "bn": "ফজরে ও ঘুমের আগে তিলাওয়াত"
        },
        "p": [
          {
            "en": "The narrations here concern the surah as a whole; none is attached to this verse's wording alone. Ibn Kathir opens with Sahih Muslim from Abu Hurayrah (RA). Muslim's wording, hadith 726, as the quranx page gives it: \"Abu Huraira reported that the Messenger of Allah (ﷺ) recited in the two (supererogatory) rak'ahs of the dawn (prayer): \" Say: O unbelievers,\" (Qur'an, cix.) and\" Say: Allah is one\" (cxii.).\" Jabir's report of the two rak'ahs of tawaf, also cited by Ibn Kathir, was not fetched and is left out.",
            "bn": "এখানকার বর্ণনাগুলো পুরো সূরা নিয়ে, শুধু এই আয়াতের শব্দের সঙ্গে কোনোটি যুক্ত নয়। ইবন কাসীর শুরু করেন সহীহ মুসলিম থেকে, আবু হুরায়রা (রাঃ)-এর বর্ণনা দিয়ে। কুরআনএক্স পাতায় মুসলিমের ৭২৬ নম্বর হাদীসের ভাষ্য: আবু হুরায়রা বর্ণনা করেছেন, আল্লাহর রাসূল ﷺ ফজরের দুই রাকআত (নফল) নামাযে পড়েছেন: বলো, হে কাফিররা (সূরা ১০৯), এবং বলো, আল্লাহ এক (সূরা ১১২)। ইবন কাসীর মুসলিম থেকে জাবিরের একটি বর্ণনাও আনেন, তাওয়াফের দুই রাকআত নিয়ে। সে ভাষ্য এখানে যাচাই করে দেখা হয়নি, তাই বাদ রাখা হলো।"
          },
          {
            "en": "Ibn Kathir then gives Ibn 'Umar's (RA) report, which at-Tirmidhi records as hadith 417: \"Ibn Umar narrated: 'I watched the Prophet (S) for a month. In the two Rak'ah before Fajr he would recite: Say: \"O you disbelievers!\" and Say: \"Allah is One\".'\" At-Tirmidhi's own grading, in the Arabic on the same page, is hadithu Ibn 'Umar hadithun hasan: the hadith of Ibn 'Umar is hasan. Ibn Kathir reports the same grading.",
            "bn": "এরপর ইবন কাসীর আনেন ইবন উমার (রাঃ)-এর বর্ণনা, যা তিরমিযী লিপিবদ্ধ করেছেন ৪১৭ নম্বর হাদীস হিসেবে: ইবন উমার বলেন, আমি এক মাস নবী ﷺ-কে লক্ষ করেছি। ফজরের আগের দুই রাকআতে তিনি পড়তেন: বলো, হে কাফিররা, আর বলো, আল্লাহ এক। একই পাতার আরবিতে তিরমিযী নিজের মান উল্লেখ করেছেন: হাদীসু ইবনি উমারা হাদীসুন হাসান, অর্থাৎ ইবন উমারের হাদীসটি হাসান। ইবন কাসীরও এই মানই উল্লেখ করেন।"
          },
          {
            "en": "For bedtime, Ibn Kathir gives from Imam Ahmad the report of Farwa ibn Nawfal from his father. Abu Dawud's wording, hadith 5055: \"Farwah b. Nawfal quoted his father as saying that the Prophet (ﷺ) said to Nawfal (his father): Recite (the Surah) 'Say, O you disbelievers!' and then go to sleep at its end, for it is a declaration of freedom from polytheism.\" The page shows no grading from Abu Dawud.",
            "bn": "ঘুমের আগের আমল নিয়ে ইবন কাসীর ইমাম আহমাদ থেকে আনেন ফারওয়া ইবন নাওফালের বর্ণনা, তিনি তাঁর পিতা থেকে। আবু দাউদের ৫০৫৫ নম্বর হাদীসের ভাষ্য: ফারওয়া ইবন নাওফাল তাঁর পিতা থেকে বর্ণনা করেন, নবী ﷺ নাওফালকে বললেন: (সূরা) বলো, হে কাফিররা, পড়ো, তারপর এর শেষে ঘুমিয়ে পড়ো। কারণ এটি শিরক থেকে মুক্তির ঘোষণা। ওই পাতায় আবু দাউদের দেওয়া কোনো মান নেই।"
          },
          {
            "en": "Ibn Kathir also recalls a hadith that the surah equals a fourth of the Qur'an, and al-Qurtubi names at-Tirmidhi from Anas. At-Tirmidhi's wording, hadith 2893: \"Narrated Anas bin Malik: that the Messenger of Allah (ﷺ) said: 'Whoever recites Idha Zulzilat, it equals half of the Qur'an for him. Whoever recites: Qul Ya Ayyuhal-Kafirun it equals a fourth of the Qur'an for him. And whoever recites: Qul Huwa Allahu Ahad it equals a third of the Qur'an for him.'\" At-Tirmidhi grades it gharib, known only through one shaykh, al-Hasan ibn Salm.",
            "bn": "ইবন কাসীর আরও স্মরণ করেন এক হাদীস, যাতে বলা হয়েছে সূরাটি কুরআনের এক-চতুর্থাংশের সমান। কুরতুবী সূত্র হিসেবে তিরমিযীতে আনাসের বর্ণনার নাম নেন। তিরমিযীর ২৮৯৩ নম্বর হাদীসের ভাষ্য: আনাস ইবন মালিক বর্ণনা করেন, আল্লাহর রাসূল ﷺ বলেছেন: যে ইযা যুলযিলাত পড়ে, তার জন্য তা কুরআনের অর্ধেকের সমান। যে কুল ইয়া আইয়ুহাল কাফিরুন পড়ে, তার জন্য তা কুরআনের এক-চতুর্থাংশের সমান। আর যে কুল হুয়াল্লাহু আহাদ পড়ে, তার জন্য তা কুরআনের এক-তৃতীয়াংশের সমান। তিরমিযী একে গারীব বলেছেন, কেবল একজন শায়খ হাসান ইবন সালমের সূত্রে পরিচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "An Address Fixed in Its Hour",
          "bn": "নির্দিষ্ট সময়ে বাঁধা এক সম্বোধন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: words commanded to the Messenger ﷺ and spoken to specific people in a specific moment, as the fetched commentaries report it. They are at-Tabari's particular persons known never to believe, al-Qurtubi's and al-Mawardi's specific people, and Ibn Kathir's disbelievers of Quraysh who faced the address. The verse licenses nothing against any living person or community. It names no living group, and this article draws from it no conclusion about how anyone today should address, treat or regard the followers of any religion.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ততটুকুই বর্ণনা করে, যতটুকু তার শব্দে আছে। রাসূল ﷺ-কে কিছু কথা বলার আদেশ দেওয়া হয়েছিল, আর তিনি তা বলেছিলেন নির্দিষ্ট কিছু মানুষকে, নির্দিষ্ট এক সময়ে। এখানে দেখা তাফসীরগুলো এভাবেই জানায়। তাবারীর কাছে তারা সেই নির্দিষ্ট ব্যক্তিরা, যারা কখনো ঈমান আনবে না বলে জানা ছিল। কুরতুবী ও মাওয়ারদীর কাছে নির্দিষ্ট এক দল। ইবন কাসীরের কাছে কুরাইশের সেই কাফিররা, যারা এই সম্বোধনের মুখোমুখি হয়েছিল। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। কোনো জীবিত গোষ্ঠীর নামও এতে নেই। অন্য কোনো ধর্মের অনুসারীদের সঙ্গে আজ কেউ কীভাবে কথা বলবে, আচরণ করবে বা তাদের নিয়ে কী ভাববে, সে বিষয়ে এই লেখা আয়াত থেকে কোনো সিদ্ধান্ত টানছে না।"
          },
          {
            "en": "What the sources name as the surah's subject is a matter of worship. Ibn Kathir calls it disavowal from the deed the mushrikin practised and a command to sincerity. Al-Qurtubi reports Ibn 'Abbas (RA) saying that nothing in the Qur'an angers Iblis more, because it is tawhid and disavowal of shirk. Questions of conduct towards others lie beyond what these commentators say about this verse. The article reports their words on the addressees and stops there.",
            "bn": "সূত্রগুলো সূরার যে বিষয়ের কথা বলে, তা ইবাদতের প্রশ্ন। ইবন কাসীরের কাছে এ সূরা মুশরিকদের আমল থেকে সম্পর্কচ্ছেদ আর ইখলাসের আদেশ। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: কুরআনে এর চেয়ে বেশি ইবলীসকে আর কিছু ক্ষুব্ধ করে না, কারণ এ সূরা তাওহীদ আর শিরক থেকে মুক্তি। অন্যদের সঙ্গে আচরণের প্রশ্ন এই আয়াত নিয়ে এই তাফসীরকারদের বক্তব্যের বাইরে পড়ে। সম্বোধিতদের নিয়ে তাঁরা যা বলেছেন, এই লেখা ততটুকুই জানায়, এর বেশি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reading for the Reader's Resolve",
          "bn": "পাঠকের নিজের দৃঢ়তার জন্য"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not any commentator's. In at-Tabari's first report the Messenger ﷺ does not answer the offer from himself. He waits, until I see what comes from my Lord, and the answer arrives as words to be said, beginning with qul. A reader can take from that a question about the self: whether my worship has a part I treat as settled, and whether I have left the deciding of it to my own comfort or to what Allah has sent down.",
            "bn": "এখান থেকে যা বলা হচ্ছে, তা এই লেখার নিজের পাঠ, কোনো তাফসীরকারের নয়। তাবারীর প্রথম বর্ণনায় রাসূল ﷺ প্রস্তাবের জবাব নিজের পক্ষ থেকে দেননি। তিনি অপেক্ষা করেছেন: দেখি আমার রবের কাছ থেকে কী আসে। আর জবাব এসেছে বলার জন্য দেওয়া কিছু কথা হয়ে, যার শুরু কুল দিয়ে। পাঠক এখান থেকে নিজেকে নিয়ে একটা প্রশ্ন তুলে নিতে পারেন। আমার ইবাদতে কি এমন কোনো অংশ আছে, যাকে আমি মীমাংসিত বলে ধরি? আর তার ফয়সালা কি আমি ছেড়ে দিয়েছি নিজের আরামের হাতে, নাকি আল্লাহ যা নাযিল করেছেন তার উপর?"
          },
          {
            "en": "The same reading notices as-Sa'di's two words, announcing and stating openly. For most readers the test is smaller than a gathering of notables: a prayer quietly skipped to fit in, a conviction blurred so that a conversation stays easy. This reading asks only that the reader know what in their own worship is not for trading, and when asked, say so plainly, while leaving the verse's addressees where the commentators placed them, in their own time.",
            "bn": "এই পাঠ সা'দীর দুটি শব্দও খেয়াল করে: ঘোষণা দিয়ে, খোলাখুলি। বেশির ভাগ পাঠকের পরীক্ষা নেতাদের মজলিসের চেয়ে অনেক ছোট। দশজনের সঙ্গে মিশে যেতে চুপচাপ একটা নামায ছেড়ে দেওয়া, কিংবা আলাপ সহজ রাখতে নিজের বিশ্বাসের কথা ঝাপসা করে ফেলা। এই পাঠ পাঠকের কাছে শুধু এটুকু চায়: নিজের ইবাদতের কোন জিনিস দরদামের বাইরে, তা জেনে রাখুন, আর কেউ জিজ্ঞেস করলে সোজাসুজি বলুন। আয়াতের সম্বোধিতরা থাকুক সেখানেই, যেখানে তাফসীরকারেরা তাদের রেখেছেন, তাদের নিজেদের সময়ে।"
          }
        ]
      }
    ]
  }
});
