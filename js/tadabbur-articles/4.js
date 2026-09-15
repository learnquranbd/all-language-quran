/**
 * Tadabbur long-form articles — surah 4.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "4:1": {
    "sections": [
      {
        "h": {
          "en": "The Ground Under the Laws",
          "bn": "বিধানের নিচের ভিত"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan; Ibn Kathir reports from Ibn Abbas (RA) that it was revealed in Madinah. Its name means the women, and much of it is law for the people with the least power in a household: orphans and their property, wives and their dower, daughters and widows and their shares of an estate. Yet its first word is not addressed to guardians, husbands or heirs. It is addressed to everyone: O mankind. The surah names the ground before it builds on it.",
            "bn": "সূরা নিসা মাদানি। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেছেন যে সূরাটি মদিনায় নাযিল হয়েছে। নিসা মানে নারীরা। সূরার বড় অংশ জুড়ে আছে ঘরের সবচেয়ে কম ক্ষমতার মানুষদের জন্য বিধান: এতিম আর তাদের সম্পদ, স্ত্রী আর তাদের মোহর, কন্যা ও বিধবা আর মিরাসে তাদের অংশ। অথচ সূরার প্রথম ডাক অভিভাবক, স্বামী বা ওয়ারিশদের প্রতি নয়। ডাক সবার প্রতি: হে মানুষ। কিছু গড়ার আগে সূরা আগে ভিতটা দেখিয়ে দেয়।"
          },
          {
            "en": "The verse after it, 4:2, turns straight to practice: give the orphans their property, and do not swap your defective goods for their good ones. 4:3 speaks of justice to orphan girls and to wives, 4:4 of the dower given graciously, and 4:7 of a share for men and a share for women in what parents and relatives leave. Each of these is a claim one person has on another. 4:1 tells the reader why such claims exist at all: they share an origin, they share a Lord, and He sees.",
            "bn": "ঠিক পরের আয়াত, ৪:২, সোজা চলে যায় কাজের কথায়: এতিমদের সম্পদ তাদের দিয়ে দাও, নিজের খারাপ জিনিস দিয়ে তাদের ভালো জিনিস বদলে নিয়ো না। ৪:৩ আয়াত বলে এতিম মেয়েদের প্রতি আর স্ত্রীদের প্রতি ইনসাফের কথা, ৪:৪ আয়াত খুশিমনে মোহর দেওয়ার কথা, আর ৪:৭ আয়াত বলে বাবা-মা ও আত্মীয়দের রেখে যাওয়া সম্পদে পুরুষের অংশ আর নারীর অংশের কথা। এর প্রতিটিই একজনের ওপর আরেকজনের হক। এমন হক আদৌ কেন আছে, ৪:১ আয়াত তার উত্তর দেয়। মানুষের উৎস এক, রব এক, আর তিনি সব দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Soul, Asking, and Wombs",
          "bn": "এক প্রাণ, দোহাই আর গর্ভ"
        },
        "p": [
          {
            "en": "Nafs wahidah is one soul, one self. From it came its zawj, a word for one of a pair, used for husband and wife alike. Then baththa: He spread, scattered, from the two of them many men and women. The verb pictures something scattered and spread wide. The whole human family, with its peoples and colours, is traced back to a single pair, so that no one in it can claim a separate origin. The verse says this before it says anything about rights.",
            "bn": "নাফসুন ওয়াহিদা মানে এক প্রাণ, এক সত্তা। তা থেকে এসেছে তার যাওজ। শব্দটা জোড়ার একজনকে বোঝায়, স্বামী আর স্ত্রী দুজনের জন্যই চলে। তারপর বাছ্ছা: তিনি দুজন থেকে ছড়িয়ে দিয়েছেন বহু পুরুষ আর নারী। ক্রিয়াটায় চারদিকে ছড়িয়ে-ছিটিয়ে দেওয়ার ছবি আছে। নানা জাতি আর নানা রঙের গোটা মানবপরিবারকে আয়াত ফিরিয়ে নিয়ে যায় একটিমাত্র জোড়ার কাছে। ফলে কেউ আলাদা উৎসের দাবি করতে পারে না। হকের কোনো কথা বলার আগেই আয়াত এটা বলে নেয়।"
          },
          {
            "en": "The command to fear appears twice. First: fear your Lord, Rabb, the one who created and nurtures, which suits a sentence about creation. Then: fear Allah, alladhi tasa'aluna bihi, by whom you ask one another. Tasa'alun, from the root s-'-l, is mutual asking; people press their claims on each other in His name. Al-arham is the plural of rahim, the womb, and by extension the ties of kinship. It shares its root, r-h-m, with rahmah, mercy. The second call to taqwa is placed where people meet one another.",
            "bn": "ভয় করার আদেশ এসেছে দুবার। প্রথমবার: তোমাদের রবকে ভয় করো। রব মানে যিনি সৃষ্টি করেন আর লালন করেন, সৃষ্টির কথা বলা বাক্যে এই নামটাই মানায়। দ্বিতীয়বার: আল্লাহকে ভয় করো, আল্লাযী তাসাআলূনা বিহী, যাঁর নামে তোমরা একে অন্যের কাছে চাও। তাসাআলূন এসেছে সীন-হামযা-লাম মূল থেকে, অর্থ পরস্পরের কাছে চাওয়া। মানুষ তাঁর দোহাই দিয়ে একে অন্যের কাছে পাওনা দাবি করে। আল-আরহাম হলো রাহিমের বহুবচন। রাহিম মানে গর্ভ, আর তা থেকে আত্মীয়তার বন্ধন। এর মূল রা-হা-মীম, রহমতের মূলও তা-ই। তাকওয়ার দ্বিতীয় ডাকটা রাখা হয়েছে ঠিক সেখানে, যেখানে মানুষ মানুষের মুখোমুখি হয়।"
          },
          {
            "en": "The Quran reciters differ on one vowel here. The widespread reading, followed by the translations in this app, is wal-arhama: fear Allah, and fear to cut the wombs. The reading of Hamzah is wal-arhami: Allah, through whom and through the wombs you ask one another, echoing the Arabs' habit of pleading by kinship. Al-Qurtubi records both. Either way the verse sets the bond of kinship beside the name of Allah, and closes by reminding its hearers that Allah is watching over them.",
            "bn": "এখানে একটি হরকত নিয়ে কারিদের পাঠে ভিন্নতা আছে। প্রচলিত পাঠ, এই অ্যাপের অনুবাদ যা অনুসরণ করে, ওয়াল-আরহামা: আল্লাহকে ভয় করো, আর আত্মীয়তার বন্ধন ছিন্ন করাকে ভয় করো। ইমাম হামযার পাঠ ওয়াল-আরহামি: সেই আল্লাহ, যাঁর নামে আর আত্মীয়তার দোহাই দিয়ে তোমরা একে অন্যের কাছে চাও। আরবরা আত্মীয়তার দোহাই দিয়ে অনুরোধ করত, এ পাঠে তারই প্রতিধ্বনি। কুরতুবী দুটো পাঠই উল্লেখ করেছেন। যে পাঠই ধরা হোক, আয়াত আত্মীয়তার বন্ধনকে আল্লাহর নামের পাশে রাখে, আর শেষে মনে করিয়ে দেয় যে আল্লাহ তাদের ওপর নজর রাখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Read It",
          "bn": "মুফাসসিরদের পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both take the one soul to be Adam (AS). Ibn Kathir understands its mate to be Hawwa, created from him, and cites the hadith that woman was created from a rib. In al-Bukhari's wording from Abu Hurayrah (RA), that hadith opens with a command to treat women well. Ibn Kathir then draws the lesson the verse is heading toward: Allah mentions that He created people from one father and one mother so that they would feel compassion for one another and be kind to the weaker among them.",
            "bn": "তাবারী ও ইবনে কাসীর দুজনেই এক প্রাণ বলতে আদম (আঃ)-কে বুঝেছেন। ইবনে কাসীরের মতে তাঁর জোড়া হলেন হাওয়া, যাঁকে তাঁর থেকে সৃষ্টি করা হয়েছে। এর পক্ষে তিনি সেই হাদীস আনেন, যাতে বলা হয়েছে নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে হাদীসটি যে শব্দে এনেছেন, তার শুরুতেই আছে নারীদের সঙ্গে ভালো ব্যবহারের আদেশ। এরপর ইবনে কাসীর সেই শিক্ষাটি টানেন, যেদিকে আয়াত এগোচ্ছে। আল্লাহ জানিয়ে দিলেন, তিনি মানুষকে এক বাবা আর এক মা থেকে সৃষ্টি করেছেন, যাতে তারা একে অন্যের প্রতি মমতা বোধ করে আর দুর্বলদের সঙ্গে সদয় হয়।"
          },
          {
            "en": "On by whom you ask one another, Ibn Kathir reports from Ibrahim an-Nakha'i, Mujahid and al-Hasan that it refers to people saying, I ask you by Allah, and by the tie of kinship. Ad-Dahhak read it more broadly as fearing Allah in whose name you make transactions and contracts. On the wombs, he reports from Ibn Abbas (RA), Ikrimah, Mujahid, al-Hasan and others that it means do not cut the ties of kinship, but keep and honour them. The two explanations do not compete; one names the habit, the other the duty.",
            "bn": "যাঁর নামে তোমরা একে অন্যের কাছে চাও, এ অংশ সম্পর্কে ইবনে কাসীর ইবরাহীম নাখায়ী, মুজাহিদ ও হাসান বসরী থেকে বর্ণনা করেন: মানুষ বলত, আল্লাহর দোহাই আর আত্মীয়তার দোহাই দিয়ে তোমার কাছে চাইছি। দাহহাক একে আরও বড় করে পড়েছেন: যে আল্লাহর নামে তোমরা লেনদেন আর চুক্তি করো, তাঁকে ভয় করো। গর্ভ প্রসঙ্গে ইবনে কাসীর ইবনে আব্বাস (রাঃ), ইকরিমা, মুজাহিদ, হাসান প্রমুখ থেকে বর্ণনা করেন, এর মানে আত্মীয়তার বন্ধন ছিন্ন কোরো না, বরং তা বজায় রাখো, তার মর্যাদা দাও। দুই ব্যাখ্যায় বিরোধ নেই। একটি অভ্যাসটার নাম বলে, অন্যটি দায়িত্বের।"
          },
          {
            "en": "Al-Qurtubi states the legal weight plainly: the community of faith agrees that keeping the ties of kinship is obligatory and that cutting them is forbidden. He does not leave the verse as a pleasant sentiment about family. On the closing words, Ibn Kathir says Allah sees every deed and every circumstance, and he connects this to the hadith of Jibril: worship Allah as though you see Him, for though you do not see Him, He sees you. The watching at the end governs everything before it.",
            "bn": "কুরতুবী এর বিধানগত ওজন সোজাসুজি বলেছেন: দ্বীনের অনুসারীরা একমত যে আত্মীয়তার বন্ধন রক্ষা করা ওয়াজিব আর তা ছিন্ন করা হারাম। পরিবার নিয়ে কোনো মধুর অনুভূতি হিসেবে তিনি আয়াতটিকে ছেড়ে দেননি। শেষ কথাগুলো প্রসঙ্গে ইবনে কাসীর বলেন, আল্লাহ প্রতিটি আমল আর প্রতিটি অবস্থা দেখেন। এর সঙ্গে তিনি জিবরীলের হাদীসটি জুড়ে দেন: আল্লাহর ইবাদত করো যেন তুমি তাঁকে দেখছ, আর তুমি তাঁকে না দেখলেও তিনি তোমাকে দেখছেন। শেষের এই নজরদারি আগের সবকিছুর ওপর কর্তৃত্ব রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sermon for the Poor of Mudar",
          "bn": "মুদারের গরিবদের জন্য খুতবা"
        },
        "p": [
          {
            "en": "Imam Muslim records from Jarir ibn Abdullah (RA) that a group from the tribe of Mudar came to the Prophet ﷺ in striped woollen garments, visibly poor. The Prophet's ﷺ face changed at the sight of their need. He led the prayer, then stood and addressed the people, reciting this verse, O mankind, fear your Lord who created you from one soul, to its end, and then 59:18, let every soul look to what it has put forth for tomorrow. Then he urged them to give, from a dinar, a dirham, a measure of wheat, a measure of dates.",
            "bn": "ইমাম মুসলিম জারীর ইবনে আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেছেন, মুদার গোত্রের একদল লোক ডোরাকাটা পশমি কাপড় পরে নবী ﷺ-এর কাছে এল। তাদের দারিদ্র্য চোখে পড়ার মতো। তাদের অভাব দেখে নবী ﷺ-এর চেহারা বদলে গেল। তিনি নামাজ পড়ালেন, তারপর দাঁড়িয়ে লোকদের উদ্দেশে কথা বললেন। তিলাওয়াত করলেন এই আয়াত, হে মানুষ, তোমাদের রবকে ভয় করো যিনি তোমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, শেষ পর্যন্ত। তারপর ৫৯:১৮ আয়াত: প্রত্যেকে দেখুক আগামীকালের জন্য সে কী পাঠিয়েছে। এরপর তিনি দান করতে উৎসাহ দিলেন, দিনার থেকে, দিরহাম থেকে, এক মাপ গম থেকে, এক মাপ খেজুর থেকে।"
          },
          {
            "en": "The choice of verse is the lesson. Strangers from another tribe stood in need, and the Prophet ﷺ did not open with their tribe or their merit. He opened with the one soul. The poor of Mudar were family, and the verse made that visible before a single coin changed hands. Al-Bukhari also records from Abu Hurayrah (RA) that when Allah finished creation, the rahim stood and sought refuge with Him from being cut, and He promised to keep connection with whoever keeps it and to cut off whoever cuts it. Abu Hurayrah then recited 47:22.",
            "bn": "আয়াত বেছে নেওয়াটাই শিক্ষা। অন্য গোত্রের অচেনা মানুষ অভাবে দাঁড়িয়ে, আর নবী ﷺ তাদের গোত্র বা যোগ্যতার কথা দিয়ে শুরু করেননি। শুরু করেছেন এক প্রাণের কথা দিয়ে। মুদারের গরিবরা পরিবারেরই লোক, একটি মুদ্রা হাতবদলের আগেই আয়াত তা চোখের সামনে এনে দিল। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে আরও বর্ণনা করেছেন, আল্লাহ সৃষ্টি শেষ করলে রাহিম, অর্থাৎ আত্মীয়তার বন্ধন, দাঁড়িয়ে ছিন্ন হওয়া থেকে তাঁর কাছে আশ্রয় চাইল। আল্লাহ কথা দিলেন, যে তাকে জুড়ে রাখবে তিনি তার সঙ্গে সম্পর্ক রাখবেন, আর যে তাকে ছিন্ন করবে তিনি তাকে ছিন্ন করবেন। এরপর আবু হুরায়রা (রাঃ) ৪৭:২২ আয়াত তিলাওয়াত করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Quran Says It Again",
          "bn": "কুরআনে একই কথা আরও যেখানে"
        },
        "p": [
          {
            "en": "7:189 and 39:6 repeat the opening almost word for word: He created you from one soul and made from it its mate. 7:189 adds the purpose of the pairing, that he might dwell in security with her, and 30:21 widens it into affection and mercy placed between spouses. 49:13 addresses mankind again: We created you from male and female and made you peoples and tribes that you may know one another, and the most noble of you is the most righteous. Shared origin rules out boasting, and it does not erase difference.",
            "bn": "৭:১৮৯ আর ৩৯:৬ আয়াত শুরুর কথাটা প্রায় হুবহু আবার বলে: তিনি তোমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, আর তা থেকে তার জোড়া। ৭:১৮৯ আয়াত জোড়ার উদ্দেশ্যও জানায়, যাতে সে তার কাছে শান্তি পায়। ৩০:২১ আয়াত তা আরও বড় করে: স্বামী-স্ত্রীর মাঝে ভালোবাসা আর দয়া রেখে দেওয়া হয়েছে। ৪৯:১৩ আয়াত আবার সব মানুষকে ডাকে: তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে, বানিয়েছি নানা জাতি ও গোত্র, যাতে তোমরা একে অন্যকে চেনো। আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি মুত্তাকি। এক উৎস অহংকারের পথ বন্ধ করে, কিন্তু পার্থক্য মুছে দেয় না।"
          },
          {
            "en": "On the wombs, 13:21 praises those who join what Allah has ordered to be joined, and fear their Lord and the evil of the account. 47:22 asks, with a question that cuts, whether people who turned away would spread corruption on earth and sever their ties of relationship. And 17:26 turns the tie into something that can be paid: give the relative his right, and the poor and the traveller. Kinship in the Quran is a right owed, not a mood.",
            "bn": "আত্মীয়তার প্রসঙ্গে ১৩:২১ আয়াত প্রশংসা করে তাদের, যারা আল্লাহ যা জুড়ে রাখতে বলেছেন তা জুড়ে রাখে, রবকে ভয় করে আর কঠিন হিসাবের ভয় রাখে। ৪৭:২২ আয়াত বিঁধে যাওয়ার মতো প্রশ্ন করে: মুখ ফিরিয়ে নিলে তোমরা কি পৃথিবীতে বিপর্যয় ছড়াবে আর আত্মীয়তার বন্ধন ছিন্ন করবে? আর ১৭:২৬ আয়াত সম্পর্কটাকে এমন কিছু বানায়, যা আদায় করা যায়: আত্মীয়কে তার হক দাও, মিসকিন আর মুসাফিরকেও। কুরআনে আত্মীয়তা মনের কোনো অবস্থা নয়, আদায় করার মতো হক।"
          }
        ]
      },
      {
        "h": {
          "en": "Living by One Soul",
          "bn": "এক প্রাণের কথা মেনে চলা"
        },
        "p": [
          {
            "en": "The verse is widely known from the sermon of need, which Abu Dawud and at-Tirmidhi record from Ibn Mas'ud (RA) and which is recited at many marriage contracts. It fits that moment. A marriage joins two families and begins new wombs, new ties that will one day carry claims. A believer who hears it at a wedding can take it home as a charge: this household is now part of a web of rights, and Allah, in whose name the contract was made, is watching how it is kept.",
            "bn": "আয়াতটি ব্যাপকভাবে পরিচিত খুতবাতুল হাজাহ থেকে। আবু দাউদ ও তিরমিযী ইবনে মাসউদ (রাঃ) থেকে এই খুতবা বর্ণনা করেছেন, আর অনেক বিয়ের আকদে এটি পড়া হয়। মুহূর্তটার সঙ্গে আয়াত খুব মানায়। বিয়ে দুটি পরিবারকে জোড়ে, শুরু করে নতুন আত্মীয়তা, যা একদিন নিজের হক নিয়ে দাঁড়াবে। বিয়েতে আয়াতটি শুনে একজন মুমিন তা দায়িত্ব হিসেবে ঘরে নিয়ে যেতে পারেন। এই সংসার এখন হকের এক জালের অংশ। আর যে আল্লাহর নামে আকদ হলো, তিনি দেখছেন সেই হক কীভাবে রক্ষা হয়।"
          },
          {
            "en": "In an ordinary week the verse asks for small, specific acts. Call the aunt no one calls. Visit the cousin who has fallen on hard times before he has to ask. When a family dispute over land or money starts, remember that the name of Allah was invoked on both sides and that both sides are one soul's children. And when you meet a worker from another country, another colour or another class, let the first thought be the one the Prophet ﷺ gave the poor of Mudar.",
            "bn": "সাধারণ একটা সপ্তাহে আয়াত ছোট আর নির্দিষ্ট কিছু কাজ চায়। সেই খালা বা ফুফুকে ফোন করুন, যাঁকে কেউ ফোন করে না। যে চাচাতো ভাই কঠিন সময়ে পড়েছে, সে মুখ ফুটে চাওয়ার আগেই তার কাছে যান। জমি বা টাকা নিয়ে পারিবারিক বিবাদ শুরু হলে মনে রাখুন, দুই পক্ষই আল্লাহর নাম নিয়েছে, আর দুই পক্ষই এক প্রাণের সন্তান। আর অন্য দেশের, অন্য রঙের বা অন্য শ্রেণির কোনো শ্রমিকের সঙ্গে দেখা হলে প্রথম ভাবনাটা যেন হয় সেটাই, যা নবী ﷺ মুদারের গরিবদের সামনে তুলে ধরেছিলেন।"
          },
          {
            "en": "Keeping ties does not require pretending that every relative is easy. The duty holds even when warmth does not come naturally, and it can be done in measured ways: a greeting on the occasions that matter, help in real need, prayer for them in absence, and a refusal to speak ill of them. Cutting off is the thing the verse warns against. A strained but maintained tie is still a tie kept, and the verse ends by reminding that Allah sees the effort.",
            "bn": "আত্মীয়তা রক্ষা করতে গিয়ে ভান করতে হয় না যে প্রত্যেক আত্মীয়ই সহজ মানুষ। উষ্ণতা আপনা থেকে না এলেও দায়িত্ব থেকে যায়। আর তা পালন করা যায় মেপে মেপে: গুরুত্বপূর্ণ উপলক্ষে সালাম আর খোঁজ, সত্যিকার প্রয়োজনে সাহায্য, অনুপস্থিতিতে তাদের জন্য দোয়া, আর তাদের নিয়ে মন্দ কথা না বলা। আয়াত সতর্ক করে ছিন্ন করা নিয়ে। টানাপোড়েন থাকলেও যে বন্ধন টিকিয়ে রাখা হয়েছে, তা রক্ষিত বন্ধনই। আর আয়াতের শেষ কথা মনে করিয়ে দেয়, এই চেষ্টাটুকু আল্লাহ দেখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for the Family",
          "bn": "পরিবারের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is a command rather than a supplication, so what follows is a short du'a built from its own vocabulary, offered as such and not as a transmitted text. O Allah, our Lord who created us from one soul, make us fear You in how we treat one another. Let us never use Your name to take what is not ours. Help us keep the ties You commanded us to keep, soften the hearts of the relatives we have drifted from, and keep us mindful that You are watching over us.",
            "bn": "আয়াতটি আদেশ, দোয়া নয়। তাই এখানে আয়াতের নিজের শব্দ দিয়ে গড়া ছোট একটি দোয়া দেওয়া হলো। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়। হে আল্লাহ, আমাদের রব, যিনি আমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, একে অন্যের সঙ্গে আচরণে আমাদের আপনার ভয় দিন। আপনার নাম নিয়ে যা আমাদের নয় তা যেন কখনো না নিই। যে বন্ধন রক্ষার আদেশ দিয়েছেন, তা রক্ষায় আমাদের সাহায্য করুন। যে আত্মীয়দের থেকে দূরে সরে গেছি, তাদের অন্তর নরম করে দিন। আর আমাদের মনে রাখতে দিন যে আপনি আমাদের ওপর নজর রাখছেন।"
          },
          {
            "en": "The Prophet ﷺ paired this verse with 59:18 in the Mudar sermon, and a reader can pair them in prayer too: O Allah, let me look to what I have sent ahead for tomorrow, and let some of it be the relatives I kept and the strangers I treated as family. Said after a visit, a phone call or a gift to a relative, a supplication like this turns an ordinary errand into worship.",
            "bn": "মুদারের খুতবায় নবী ﷺ এই আয়াতের সঙ্গে ৫৯:১৮ আয়াত জুড়ে দিয়েছিলেন। পাঠকও দোয়ায় দুটোকে একসঙ্গে রাখতে পারেন: হে আল্লাহ, আগামীকালের জন্য আমি কী পাঠিয়েছি তা যেন দেখি। আর তার মধ্যে যেন থাকে সেই আত্মীয়রা, যাদের সঙ্গে সম্পর্ক রেখেছি, আর সেই অচেনা মানুষেরা, যাদের পরিবারের লোক মনে করে আচরণ করেছি। কোনো আত্মীয়ের বাড়ি ঘুরে এসে, একটা ফোনের পর বা একটা উপহার দিয়ে এমন দোয়া করলে সাধারণ একটা কাজও ইবাদত হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Heart",
          "bn": "অন্তরের জন্য প্রশ্ন"
        },
        "p": [
          {
            "en": "When I look at someone of another people or class, do I see a stranger or a relative from one soul? Which tie of kinship have I let go slack, and am I waiting for the other side to move first? Have I ever used the name of Allah to press my own claim while ignoring what I owe? If my family knew that Allah was watching my dealings with them, would they see any difference in me?",
            "bn": "অন্য জাতি বা অন্য শ্রেণির কাউকে দেখলে আমি কি একজন অচেনা মানুষ দেখি, নাকি এক প্রাণ থেকে আসা একজন আত্মীয়? আত্মীয়তার কোন বন্ধনটা আমি ঢিলে হতে দিয়েছি, আর আমি কি অপেক্ষা করছি অন্য পক্ষ আগে এগিয়ে আসুক? নিজের দাবি আদায়ে আমি কি কখনো আল্লাহর নাম ব্যবহার করেছি, অথচ নিজের দেনার কথা ভুলে থেকেছি? আল্লাহ আমার লেনদেন দেখছেন, এ কথা আমার মনে থাকলে পরিবারের লোকেরা কি আমার মধ্যে কোনো পরিবর্তন দেখত?"
          },
          {
            "en": "Whom in my wider family would the Prophet ﷺ, standing where he stood before the poor of Mudar, point to and say: this one is yours? And is there a quarrel over property in my family that I could soften by remembering that both sides once asked each other by Allah and by the womb?",
            "bn": "মুদারের গরিবদের সামনে নবী ﷺ যেখানে দাঁড়িয়েছিলেন, সেখানে দাঁড়িয়ে আমার বড় পরিবারের কার দিকে তিনি আঙুল তুলে বলতেন, এ তোমার দায়িত্ব? আর আমার পরিবারে সম্পদ নিয়ে এমন কোনো ঝগড়া কি আছে, যা নরম হতে পারত এ কথা মনে রাখলে যে দুই পক্ষই একদিন আল্লাহর দোহাই আর আত্মীয়তার দোহাই দিয়ে একে অন্যের কাছে চেয়েছিল?"
          }
        ]
      },
      {
        "h": {
          "en": "Teaching It at Home",
          "bn": "ঘরে শেখানো"
        },
        "p": [
          {
            "en": "With children, draw a family tree together, going as far back as anyone remembers, and then read the verse and add one line above the oldest name: one soul. Let them see that every branch, including the families of classmates who look different, joins that line. Then choose one relative on the tree whom the family rarely contacts, and plan a call or a visit together. The lesson of the verse is best learned by doing what it commands.",
            "bn": "শিশুদের সঙ্গে মিলে একটা বংশতালিকা আঁকুন, যতদূর পর্যন্ত কারও মনে আছে। তারপর আয়াতটি পড়ে সবচেয়ে পুরোনো নামের ওপরে একটা লাইন যোগ করুন: এক প্রাণ। ওদের দেখতে দিন, প্রতিটি শাখা সেই লাইনে গিয়ে মেলে, দেখতে আলাদা সহপাঠীদের পরিবারও। এরপর তালিকা থেকে এমন একজন আত্মীয় বেছে নিন, যাঁর সঙ্গে পরিবারের যোগাযোগ কম, আর সবাই মিলে তাঁকে ফোন করা বা দেখতে যাওয়ার পরিকল্পনা করুন। আয়াত যা আদেশ করে, তা করে দেখানোই এর শিক্ষা শেখার সবচেয়ে ভালো উপায়।"
          },
          {
            "en": "In a study circle, read 4:1 and then skim the first twelve verses of the surah, asking at each command whose right is being protected and how the opening verse prepares the ground for it. The group will find that orphans, wives, daughters and parents all stand under the single umbrella of one soul, a shared Lord and a watching God.",
            "bn": "পাঠচক্রে ৪:১ আয়াত পড়ে সূরার প্রথম বারোটি আয়াতে চোখ বুলিয়ে নিন। প্রতিটি আদেশে জিজ্ঞেস করুন, এখানে কার হক রক্ষা করা হচ্ছে, আর শুরুর আয়াত কীভাবে তার ভিত তৈরি করে রেখেছে। দলটি দেখবে, এতিম, স্ত্রী, কন্যা আর বাবা-মা সবাই দাঁড়িয়ে আছে একই ছাতার নিচে: এক প্রাণ, এক রব, আর সব দেখা আল্লাহ।"
          }
        ]
      }
    ]
  },
  "4:11": {
    "sections": [
      {
        "h": {
          "en": "Division Taken Out of Human Hands",
          "bn": "মানুষের হাত থেকে সরিয়ে নেওয়া ভাগ"
        },
        "p": [
          {
            "en": "4:7 laid down the principle: for men is a share of what parents and close relatives leave, and for women is a share, be it little or much, an obligatory share. 4:8 asks that relatives, orphans and the needy present at the division be given something and spoken to kindly, 4:9 tells guardians to fear for orphans as they would for weak offspring of their own, and 4:10 warns those who devour orphans' property that they eat fire. This verse then sets out the shares of children and parents, 4:12 those of spouses and of siblings in a certain case, and 4:13-14 call the whole scheme the limits of Allah.",
            "bn": "৪:৭ আয়াত মূলনীতিটা বলে দিয়েছিল: বাবা-মা ও নিকটাত্মীয়দের রেখে যাওয়া সম্পদে পুরুষদের অংশ আছে, নারীদেরও অংশ আছে, তা কম হোক বা বেশি, এক নির্ধারিত অংশ। ৪:৮ আয়াত বলে, ভাগের সময় উপস্থিত আত্মীয়, এতিম আর মিসকিনদেরও কিছু দাও, তাদের সঙ্গে ভালো কথা বলো। ৪:৯ আয়াত অভিভাবকদের বলে, নিজের অসহায় সন্তান রেখে গেলে তাদের নিয়ে যেমন ভয় হতো, এতিমদের ব্যাপারেও তেমন ভয় রাখুক। ৪:১০ আয়াত সতর্ক করে তাদের, যারা এতিমের সম্পদ গ্রাস করে। তারা পেটে আগুনই ভরে। এরপর এই আয়াত সন্তান আর বাবা-মায়ের অংশ ঠিক করে দেয়। ৪:১২ আয়াত ঠিক করে স্বামী-স্ত্রীর অংশ, আর বিশেষ এক অবস্থায় ভাই-বোনের অংশ। ৪:১৩ ও ৪:১৪ আয়াত গোটা ব্যবস্থাকে বলে আল্লাহর সীমা।"
          },
          {
            "en": "Ibn Kathir notes that the knowledge of inheritance, al-fara'id, rests on this verse, the one after it and the last verse of the surah, 4:176, together with the hadith that explain them. He brings two reports as the occasion. In the first, from al-Bukhari, Jabir ibn Abdullah (RA) lay ill and asked the Prophet ﷺ what to do with his wealth. Ibn Kathir himself remarks that this seems to concern 4:176, since Jabir then had sisters and no children or parents. The second, about the daughters of Sa'd ibn ar-Rabi' (RA), is given in the hadith section.",
            "bn": "ইবনে কাসীর বলেন, মিরাসের জ্ঞান, যাকে আল-ফারায়েয বলা হয়, দাঁড়িয়ে আছে এই আয়াত, এর পরের আয়াত আর সূরার শেষ আয়াত ৪:১৭৬ এবং সেগুলোর ব্যাখ্যায় আসা হাদীসের ওপর। নাযিলের প্রেক্ষাপট হিসেবে তিনি দুটি বর্ণনা আনেন। প্রথমটি বুখারী থেকে: জাবির ইবনে আবদুল্লাহ (রাঃ) অসুস্থ অবস্থায় নবী ﷺ-কে জিজ্ঞেস করেছিলেন তাঁর সম্পদ নিয়ে কী করবেন। ইবনে কাসীর নিজেই মন্তব্য করেছেন, এটা সম্ভবত ৪:১৭৬ আয়াতের সঙ্গে সম্পর্কিত, কারণ জাবিরের তখন বোন ছিল, সন্তান বা বাবা-মা ছিল না। দ্বিতীয়টি সা'দ ইবনে রাবী' (রাঃ)-এর মেয়েদের ঘটনা, যা হাদীসের অংশে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Instruction, a Share, an Obligation",
          "bn": "নির্দেশ, অংশ, ফরজ"
        },
        "p": [
          {
            "en": "The verse opens with yusikumullah, Allah instructs you. The root w-s-y carries charging someone with a matter and entrusting it to them, and a wasiyyah is a bequest. The same root returns later in the verse: after any wasiyyah he has made. So the verse begins with Allah's own charge concerning the children, and places the dying person's bequest inside it. Hazz is a portion or allotted share. The verse closes with faridatan minallah, an obligation from Allah; farida, from f-r-d, is a portion fixed and made binding, and it gave the science its name.",
            "bn": "আয়াত শুরু হয় ইউসীকুমুল্লাহ দিয়ে, আল্লাহ তোমাদের নির্দেশ দিচ্ছেন। ওয়াও-সোয়াদ-ইয়া মূলের মধ্যে আছে কাউকে কোনো দায়িত্ব বুঝিয়ে দেওয়া, তার হাতে সঁপে দেওয়ার ভাব। ওয়াসিয়ত শব্দও এই মূল থেকে। আয়াতের পরের দিকে মূলটি আবার আসে: সে যে ওয়াসিয়ত করে গেছে তার পর। অর্থাৎ আয়াত শুরু হয় সন্তানদের ব্যাপারে আল্লাহর নিজের নির্দেশ দিয়ে, আর মৃত ব্যক্তির ওয়াসিয়তকে রাখে তার ভেতরে। হাযয মানে ভাগ, বরাদ্দ অংশ। আয়াত শেষ হয় ফারীদাতাম মিনাল্লাহ দিয়ে, আল্লাহর পক্ষ থেকে ফরজ। ফা-রা-দোয়াদ মূলের ফারীদা মানে নির্ধারিত আর বাধ্যতামূলক অংশ, আর এ থেকেই এই শাস্ত্রের নাম।"
          },
          {
            "en": "Two phrases deserve a slower reading. For daughters the Arabic says fawqa ithnatayn, literally above two, which the app renders two or more; Ibn Kathir holds that two daughters also take two thirds, pointing to 4:176, where two sisters take two thirds, and to the Prophet's ﷺ ruling for Sa'd's two daughters. And near the end: your parents or your children, you do not know which of them is nearest to you in benefit. The verse explains its own firmness in the middle of its details.",
            "bn": "দুটি কথা একটু ধীরে পড়ার মতো। মেয়েদের প্রসঙ্গে আরবিতে আছে ফাওকাছনাতাইন, আক্ষরিক অর্থে দুজনের বেশি। অ্যাপের ইংরেজি অনুবাদে তা দুই বা ততোধিক, বাংলা অনুবাদে দুজনের অধিক। ইবনে কাসীরের মত, দুই মেয়েও তিন ভাগের দুই ভাগ পাবে। দলিল হিসেবে তিনি দেখান ৪:১৭৬ আয়াত, যেখানে দুই বোন পায় তিন ভাগের দুই ভাগ, আর সা'দের দুই মেয়ের ব্যাপারে নবী ﷺ-এর ফয়সালা। আর আয়াতের শেষের দিকে: তোমাদের বাবা-মা আর তোমাদের সন্তান, তোমরা জানো না উপকারে কে তোমাদের বেশি কাছের। খুঁটিনাটির মাঝখানেই আয়াত নিজের দৃঢ়তার কারণ বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wisdom the Commentators Give",
          "bn": "মুফাসসিরদের বলা হিকমত"
        },
        "p": [
          {
            "en": "Ibn Kathir begins with the custom the verse brought to an end. The people of the Jahiliyyah, he says, gave inheritance to males and not to females, so Allah commanded that both take a share. He adds that the verse shows Allah is more merciful to children than their own parents, since He commands parents to be just among them. He also cites al-Bukhari's report from Ibn Abbas (RA): wealth used to pass to the children, and parents received only what was bequeathed to them, until Allah abrogated from that arrangement what He willed and set the shares.",
            "bn": "ইবনে কাসীর শুরু করেন সেই প্রথা দিয়ে, যার অবসান ঘটিয়েছে এই আয়াত। তিনি বলেন, জাহিলিয়াতের লোকেরা মিরাস দিত পুরুষদের, নারীদের নয়। তাই আল্লাহ আদেশ দিলেন, দুজনেই অংশ পাবে। তিনি আরও বলেন, আয়াতটি দেখায় আল্লাহ সন্তানদের প্রতি তাদের বাবা-মায়ের চেয়েও বেশি দয়ালু, কারণ তিনি বাবা-মাকে সন্তানদের মধ্যে ইনসাফ করতে আদেশ দিচ্ছেন। ইবনে আব্বাস (রাঃ) থেকে বুখারীর বর্ণনাও তিনি আনেন: আগে সম্পদ যেত সন্তানদের কাছে, আর বাবা-মা পেতেন কেবল তাঁদের জন্য করা ওয়াসিয়তটুকু। পরে আল্লাহ সে ব্যবস্থার যতটুকু চাইলেন রহিত করলেন, আর অংশগুলো নির্ধারণ করে দিলেন।"
          },
          {
            "en": "On why the son takes the share of two daughters, Ibn Kathir ties it to obligations: men need wealth to spend on their dependants, on their work and dealings, and to meet what is required of them. The Quran itself places the dower on the husband in 4:4 and names men's spending from their wealth in 4:34. The rule concerns sons and daughters inheriting together, and 4:176 gives it for brothers and sisters together. It is not stated for every man and woman: in 4:12 maternal siblings share equally, as Ibn Kathir notes, and here each parent takes a sixth when there are children.",
            "bn": "ছেলে কেন দুই মেয়ের সমান পায়, এ প্রশ্নে ইবনে কাসীর একে দায়িত্বের সঙ্গে জুড়েছেন। পুরুষের সম্পদ দরকার পোষ্যদের পেছনে খরচ করতে, কাজকর্ম আর লেনদেন চালাতে, আর তার ওপর যা দায় আছে তা মেটাতে। কুরআন নিজেই ৪:৪ আয়াতে মোহরের দায় স্বামীর ওপর রেখেছে, আর ৪:৩৪ আয়াতে পুরুষদের নিজেদের সম্পদ থেকে খরচের কথা বলেছে। বিধানটা ছেলে আর মেয়ে একসঙ্গে ওয়ারিশ হলে, আর ৪:১৭৬ আয়াতে ভাই আর বোন একসঙ্গে ওয়ারিশ হলে। প্রত্যেক নারী-পুরুষের ক্ষেত্রে এ কথা বলা হয়নি। ইবনে কাসীর যেমন উল্লেখ করেছেন, ৪:১২ আয়াতে মায়ের দিকের ভাই-বোনেরা সমান ভাগ পায়। আর এই আয়াতেই সন্তান থাকলে বাবা ও মা প্রত্যেকে ছয় ভাগের এক ভাগ পান।"
          },
          {
            "en": "Ibn Ashur draws attention to the wording. The verse could have said the daughter takes half the son's share; instead it makes the share of two females the measure by which the male's share is stated. He sees in this a pointer that the female's share, which the Jahiliyyah had denied, is now the fixed reference point, announced in the first words the listener hears. On the order of bequest and debt, Ibn Kathir reports that the scholars of every generation agree that debt is paid before a bequest is carried out.",
            "bn": "ইবনে আশুর শব্দচয়নের দিকে দৃষ্টি দেন। আয়াত বলতে পারত, মেয়ে পাবে ছেলের অর্ধেক। তা না বলে আয়াত দুই নারীর অংশকে মাপকাঠি বানিয়ে তার হিসাবে পুরুষের অংশ বলেছে। তাঁর মতে এতে ইঙ্গিত আছে যে জাহিলিয়াত নারীর যে অংশ অস্বীকার করত, সেটাই এখন নির্ধারিত মাপকাঠি। আর শ্রোতার কানে প্রথম যে কথাগুলো পৌঁছায়, তাতেই সেটা ঘোষণা করা হয়েছে। ওয়াসিয়ত আর ঋণের ক্রম প্রসঙ্গে ইবনে কাসীর জানান, আগের ও পরের সব যুগের আলেমরা একমত যে ওয়াসিয়ত কার্যকর করার আগে ঋণ শোধ করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Daughters and a Third",
          "bn": "দুই মেয়ে আর এক-তৃতীয়াংশ"
        },
        "p": [
          {
            "en": "Ibn Kathir cites a report from Jabir (RA), recorded by Ahmad, Abu Dawud, at-Tirmidhi and Ibn Majah. The widow of Sa'd ibn ar-Rabi' (RA), who had been killed at Uhud, came to the Prophet ﷺ with her two daughters. Their uncle had taken all of Sa'd's wealth and left them nothing, and they could not marry without means. The Prophet ﷺ said that Allah would decide the matter. When the verse of inheritance came, he sent word to the uncle to give the two daughters two thirds and their mother an eighth, and to keep the remainder.",
            "bn": "ইবনে কাসীর জাবির (রাঃ) থেকে একটি বর্ণনা আনেন, যা ইমাম আহমাদ, আবু দাউদ, তিরমিযী ও ইবনে মাজাহ বর্ণনা করেছেন। উহুদে শহীদ সা'দ ইবনে রাবী' (রাঃ)-এর স্ত্রী দুই মেয়েকে নিয়ে নবী ﷺ-এর কাছে এলেন। মেয়েদের চাচা সা'দের সব সম্পদ নিয়ে নিয়েছিল, তাদের জন্য কিছুই রাখেনি। আর সম্পদ না থাকলে তাদের বিয়েও হবে না। নবী ﷺ বললেন, আল্লাহ এ বিষয়ে ফয়সালা করবেন। মিরাসের আয়াত নাযিল হলে তিনি চাচার কাছে খবর পাঠালেন: দুই মেয়েকে তিন ভাগের দুই ভাগ দাও, তাদের মাকে আট ভাগের এক ভাগ, আর বাকিটা তোমার।"
          },
          {
            "en": "The report shows the verse arriving as protection. Two girls and a widow, with no man left to speak for them, were being pushed out by a stronger relative, and revelation named their shares so that no uncle could argue. Al-Bukhari also records from Sa'd ibn Abi Waqqas (RA) that when he was ill and asked to bequeath a large part of his wealth, the Prophet ﷺ allowed a third and said a third is much, and that leaving one's heirs well off is better than leaving them dependent, asking from people.",
            "bn": "বর্ণনাটি দেখায়, আয়াত এসেছিল রক্ষাকবচ হয়ে। দুটি মেয়ে আর একজন বিধবা, তাদের হয়ে কথা বলার মতো কোনো পুরুষ আর বেঁচে নেই। জোরালো এক আত্মীয় তাদের ঠেলে সরিয়ে দিচ্ছিল। ওহি তাদের অংশ নাম ধরে বলে দিল, যাতে কোনো চাচা আর তর্ক করতে না পারে। ইমাম বুখারী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকেও বর্ণনা করেছেন: অসুস্থ অবস্থায় তিনি নিজের সম্পদের বড় একটা অংশ ওয়াসিয়ত করে যেতে চাইলে নবী ﷺ এক-তৃতীয়াংশের অনুমতি দিলেন। বললেন, এক-তৃতীয়াংশও অনেক। আর ওয়ারিশদের সচ্ছল রেখে যাওয়া তাদের এমন অভাবী রেখে যাওয়ার চেয়ে ভালো, যাতে তারা মানুষের কাছে হাত পাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses Around the Shares",
          "bn": "অংশগুলোর চারপাশের আয়াত"
        },
        "p": [
          {
            "en": "4:7 is the verse to hear first, because it states in one sentence that women inherit, whether the estate is little or much. 4:12 completes the family: spouses inherit from each other, and a person with neither ascendants nor descendants is inherited by siblings. 4:176, the surah's last verse, returns to that case and gives two sisters two thirds. 2:180 had earlier prescribed a bequest for parents and near relatives, which matches the arrangement Ibn Abbas (RA) describes from before the shares were set.",
            "bn": "প্রথমে শোনার মতো আয়াত ৪:৭, কারণ এক বাক্যেই তা জানিয়ে দেয় নারীরা ওয়ারিশ হয়, সম্পদ কম হোক বা বেশি। ৪:১২ আয়াত পরিবারের বাকি অংশ পূর্ণ করে: স্বামী-স্ত্রী একে অন্যের ওয়ারিশ, আর যার বাবা-মা বা সন্তান কেউ নেই, তার ওয়ারিশ হয় ভাই-বোন। সূরার শেষ আয়াত ৪:১৭৬ সেই অবস্থায় ফিরে এসে দুই বোনকে তিন ভাগের দুই ভাগ দেয়। আর আগে ২:১৮০ আয়াত বাবা-মা ও নিকটাত্মীয়দের জন্য ওয়াসিয়ত করার বিধান দিয়েছিল। অংশগুলো নির্ধারিত হওয়ার আগের যে ব্যবস্থার কথা ইবনে আব্বাস (রাঃ) বর্ণনা করেছেন, তার সঙ্গে এটা মিলে যায়।"
          },
          {
            "en": "4:13-14 put the shares under the heading of the limits of Allah: whoever obeys Allah and His Messenger in them enters gardens, and whoever transgresses them faces a humiliating punishment. And 4:32, a little later, speaks to the heart that watches another's share: do not wish for that by which Allah has made some of you exceed others; for men is a share of what they earned and for women a share of what they earned, and ask Allah of His bounty.",
            "bn": "৪:১৩ ও ৪:১৪ আয়াত অংশগুলোকে রাখে আল্লাহর সীমার শিরোনামে: এ ব্যাপারে যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে সে জান্নাতে যাবে, আর যে সীমা লঙ্ঘন করে তার জন্য অপমানজনক শাস্তি। আর একটু পরে ৪:৩২ আয়াত কথা বলে সেই মনের সঙ্গে, যে অন্যের ভাগের দিকে তাকিয়ে থাকে: আল্লাহ যা দিয়ে তোমাদের কাউকে কারও ওপর বাড়তি দিয়েছেন, তা কামনা কোরো না। পুরুষের জন্য তার উপার্জনের অংশ, নারীর জন্য তার উপার্জনের অংশ। আর আল্লাহর কাছে তাঁর অনুগ্রহ চাও।"
          }
        ]
      },
      {
        "h": {
          "en": "When an Estate Is Divided",
          "bn": "যখন সম্পদ ভাগ হয়"
        },
        "p": [
          {
            "en": "The verse asks for preparation before death. Write down what you owe and what is owed to you, because debts come first and heirs cannot pay what they do not know about. If you make a bequest, keep it within what the Prophet ﷺ allowed Sa'd. And do not try to rearrange the shares through quiet arrangements before death; Ibn Kathir, at 4:13, describes obedience in this matter as giving each heir the share Allah appointed without adding or taking away by tricks and plots.",
            "bn": "আয়াত মৃত্যুর আগেই প্রস্তুতি চায়। আপনার কাছে কার কী পাওনা আর আপনার কার কাছে কী পাওনা, লিখে রাখুন। কারণ ঋণ আগে, আর যে ঋণের কথা ওয়ারিশরা জানে না, তা তারা শোধ করতে পারে না। ওয়াসিয়ত করলে তা রাখুন সেই সীমার ভেতরে, যা নবী ﷺ সা'দকে দিয়েছিলেন। আর মৃত্যুর আগে চুপচাপ কোনো ব্যবস্থা করে অংশগুলো ঘুরিয়ে দেওয়ার চেষ্টা করবেন না। ৪:১৩ আয়াতের ব্যাখ্যায় ইবনে কাসীর এ ব্যাপারে আনুগত্যের বর্ণনা দিয়েছেন এভাবে: কৌশল আর ফন্দি করে কিছু না বাড়িয়ে, না কমিয়ে প্রত্যেক ওয়ারিশকে আল্লাহর ঠিক করা অংশ দেওয়া।"
          },
          {
            "en": "After a death, the hardest test often falls on the family's women. A sister may be told that asking for her share will break the family, or a widow may be made to feel that her portion is a favour. The verse settles that argument before it starts: the share is a farida from Allah, not a gift from the brothers. Families should work out the actual calculation with a qualified scholar, since real estates involve many heirs and details this page does not address, but no one should need a scholar to know that a daughter inherits.",
            "bn": "মৃত্যুর পর সবচেয়ে কঠিন পরীক্ষাটা প্রায়ই আসে পরিবারের নারীদের ওপর। বোনকে হয়তো বলা হয়, নিজের অংশ চাইলে পরিবার ভেঙে যাবে। বিধবাকে হয়তো বোঝানো হয়, তাঁর ভাগটা আসলে দয়া। আয়াত এ তর্ক শুরু হওয়ার আগেই মিটিয়ে দেয়। অংশটা আল্লাহর দেওয়া ফরজ, ভাইদের দেওয়া উপহার নয়। আসল হিসাব পরিবারগুলো যোগ্য আলেমের কাছ থেকে করে নেবে, কারণ বাস্তবে ওয়ারিশ অনেক থাকে, খুঁটিনাটিও অনেক, যা এই লেখা আলোচনা করছে না। তবে মেয়ে যে ওয়ারিশ, এটুকু জানতে কারও আলেমের দরকার হওয়ার কথা নয়।"
          },
          {
            "en": "The phrase you do not know which of them is nearest to you in benefit also helps the one who inherits less than he hoped. Perhaps a parent favoured a child who stayed home, or a son resents that a sister who moved away receives her share. The verse answers that no one can weigh benefit in this world and the next accurately enough to redistribute what Allah has fixed. Accepting the division is itself an act of trust in the One who is Knowing and Wise.",
            "bn": "তোমরা জানো না উপকারে কে বেশি কাছের, এ কথা তাকেও সাহায্য করে, যে আশার চেয়ে কম পেয়েছে। হয়তো বাবা-মা ঘরে থেকে যাওয়া কোনো সন্তানের প্রতি বেশি টান রাখতেন। কিংবা কোনো ছেলে মনে মনে অসন্তুষ্ট, দূরে চলে যাওয়া বোনও কেন পুরো অংশ পাবে। আয়াতের জবাব, দুনিয়া আর আখিরাতের উপকার এত নিখুঁতভাবে কেউ মাপতে পারে না যে আল্লাহর ঠিক করা ভাগ নতুন করে সাজাবে। ভাগটা মেনে নেওয়াই সেই সর্বজ্ঞ, প্রজ্ঞাময় সত্তার ওপর ভরসার আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Before and After",
          "bn": "আগে ও পরের দোয়া"
        },
        "p": [
          {
            "en": "The verse is law, not supplication, so this is a short du'a in its own vocabulary, offered as such and not as a transmitted text. For the one preparing: O Allah, let me leave my affairs clear and my debts known, let my bequest harm no heir, and let my heirs receive what You have fixed for them without dispute. For the one inheriting: O Allah, You are Knowing and Wise; make me content with the share You appointed and just in handing others theirs, and do not let wealth cut the ties You commanded me to keep.",
            "bn": "আয়াতটি বিধান, দোয়া নয়। তাই এখানে আয়াতের নিজের শব্দ দিয়ে গড়া ছোট একটি দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়। যিনি প্রস্তুতি নিচ্ছেন তাঁর জন্য: হে আল্লাহ, আমার কাজকর্ম পরিষ্কার আর ঋণ জানা অবস্থায় রেখে যেতে দিন। আমার ওয়াসিয়ত যেন কোনো ওয়ারিশের ক্ষতি না করে, আর আমার ওয়ারিশরা যেন বিবাদ ছাড়া আপনার ঠিক করা অংশ পায়। যিনি ওয়ারিশ হচ্ছেন তাঁর জন্য: হে আল্লাহ, আপনি সর্বজ্ঞ, প্রজ্ঞাময়। আপনার ঠিক করা অংশে আমাকে সন্তুষ্ট রাখুন, অন্যদের অংশ বুঝিয়ে দিতে ইনসাফকারী বানান। আর যে বন্ধন রক্ষার আদেশ দিয়েছেন, সম্পদ যেন তা ছিন্ন করতে না পারে।"
          },
          {
            "en": "A family can say such a du'a together on the day the estate is discussed, before the numbers are opened. It reminds everyone in the room that the division they are about to carry out was not written by any of them, and that the One who wrote it is watching how it is carried out.",
            "bn": "যেদিন সম্পদ নিয়ে আলোচনা হবে, হিসাবের কাগজ খোলার আগে পরিবারের সবাই মিলে এমন দোয়া করতে পারেন। এতে ঘরে উপস্থিত সবার মনে পড়ে যায়, যে ভাগ তারা করতে যাচ্ছে তা তাদের কারও লেখা নয়। আর যিনি তা লিখেছেন, তিনি দেখছেন ভাগটা কীভাবে কার্যকর হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Estate",
          "bn": "সম্পদ ভাগের আগের প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there a woman in my family whose share I have assumed she will give up, and have I ever asked her what she wants? If I died tonight, would my heirs know my debts, or would they be left to guess? Do I secretly believe that some of my relatives deserve more than Allah gave them, and what does that belief say about my trust in His knowledge?",
            "bn": "আমার পরিবারে কি এমন কোনো নারী আছেন, যাঁর ব্যাপারে ধরে নিয়েছি তিনি নিজের অংশ ছেড়ে দেবেন? আমি কি কখনো তাঁকে জিজ্ঞেস করেছি তিনি কী চান? আজ রাতে মারা গেলে আমার ওয়ারিশরা কি আমার ঋণের কথা জানবে, নাকি আন্দাজ করে বেড়াবে? মনে মনে কি বিশ্বাস করি, আল্লাহ আমার কোনো আত্মীয়কে যা দিয়েছেন সে তার চেয়ে বেশি পাওয়ার যোগ্য? আর সেই বিশ্বাস তাঁর জ্ঞানের ওপর আমার ভরসা নিয়ে কী বলে?"
          },
          {
            "en": "When I receive something by inheritance, do I thank Allah for it as provision, or do I measure it against what my siblings received? And when relatives, orphans or the needy are present at a division, as 4:8 describes, do I give them something and speak to them kindly, or do I treat them as intruders?",
            "bn": "মিরাসে কিছু পেলে আমি কি একে রিজিক ভেবে আল্লাহর শোকর করি, নাকি ভাই-বোনেরা কী পেল তার সঙ্গে মাপতে বসি? আর ৪:৮ আয়াত যেমন বলে, ভাগের সময় আত্মীয়, এতিম বা মিসকিন উপস্থিত থাকলে আমি কি তাদের কিছু দিই, ভালো কথা বলি, নাকি তাদের অনাহূত মনে করি?"
          }
        ]
      }
    ]
  },
  "4:15-16": {
    "sections": [
      {
        "h": {
          "en": "A Ruling That Waited for a Way",
          "bn": "যে বিধান অপেক্ষায় ছিল এক পথের"
        },
        "p": [
          {
            "en": "Surah an-Nisa has just finished the shares of inheritance and called them the limits of Allah in 4:13-14. It now turns from wealth to conduct within the community. These two verses concern fahishah, which Ibn Kathir explains here as unlawful sexual intercourse. They are among the verses the commentators describe as belonging to an early stage of the law, and the first of them points to this in its own words: the measure it sets lasts until death or until Allah ordains another way for them.",
            "bn": "সূরা নিসা এইমাত্র মিরাসের অংশগুলো শেষ করেছে, আর ৪:১৩ ও ৪:১৪ আয়াতে সেগুলোকে বলেছে আল্লাহর সীমা। এবার সূরা সম্পদ থেকে সমাজের ভেতরের আচরণের দিকে যায়। এই দুই আয়াতের বিষয় ফাহিশা। ইবনে কাসীর এখানে এর ব্যাখ্যা করেছেন ব্যভিচার হিসেবে। মুফাসসিররা এ আয়াতগুলোকে বিধানের প্রথম পর্যায়ের বলে উল্লেখ করেন। প্রথম আয়াতটি নিজের ভাষাতেই সেদিকে ইঙ্গিত দেয়: এর ব্যবস্থা থাকবে মৃত্যু পর্যন্ত, কিংবা যতক্ষণ না আল্লাহ তাদের জন্য অন্য কোনো পথ ঠিক করে দেন।"
          },
          {
            "en": "What follows matters for reading them. 4:16 ends with Allah as Accepting of Repentance and Merciful, and 4:17-18 then explain repentance at length: it is accepted from those who do wrong in ignorance and repent soon after, and not from those who persist until death arrives. 4:19 then forbids inheriting women against their will. The legal measure is framed on one side by the limits of Allah and on the other by the door of repentance, and the reader should hold both.",
            "bn": "এগুলো পড়ার জন্য পরের আয়াতগুলো জরুরি। ৪:১৬ আয়াত শেষ হয় এ কথায় যে আল্লাহ তওবা কবুলকারী, পরম দয়ালু। এরপর ৪:১৭ ও ৪:১৮ আয়াত তওবা নিয়ে বিস্তারিত বলে: তওবা কবুল হয় তাদের, যারা অজ্ঞতাবশত মন্দ কাজ করে ফেলে তারপর দ্রুত তওবা করে। তাদের নয়, যারা মৃত্যু হাজির হওয়া পর্যন্ত গুনাহ করেই চলে। তারপর ৪:১৯ আয়াত জোর করে নারীদের ওয়ারিশ হওয়া নিষেধ করে। বিধানগত ব্যবস্থাটার এক পাশে আল্লাহর সীমা, অন্য পাশে তওবার দরজা। পাঠককে দুটোই মনে রাখতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Witnesses and an Open Door",
          "bn": "চার সাক্ষী আর খোলা দরজা"
        },
        "p": [
          {
            "en": "Fahishah comes from the root f-h-sh, what goes beyond bounds in foulness. The Quran uses it for more than one grave act, which is why the commentators ask what it means in each place. Then fastashhidu alayhinna arba'atan minkum: call four from among you to bear witness against them. The verb asks for testimony to be sought, and the number is high. Only fa-in shahidu, if they testify, does any measure follow. Suspicion, rumour and a single account do not reach the threshold.",
            "bn": "ফাহিশা শব্দ এসেছে ফা-হা-শীন মূল থেকে। এর মানে এমন নোংরা কাজ যা সীমা ছাড়িয়ে যায়। কুরআন একাধিক গুরুতর কাজের জন্য শব্দটি ব্যবহার করেছে, তাই মুফাসসিররা প্রতিটি জায়গায় জিজ্ঞেস করেন এখানে এর মানে কী। তারপর: ফাসতাশহিদূ আলাইহিন্না আরবাআতাম মিনকুম, তাদের বিরুদ্ধে তোমাদের মধ্য থেকে চারজনের সাক্ষ্য নাও। ক্রিয়াটা সাক্ষ্য চেয়ে নেওয়ার কথা বলে, আর সংখ্যাটা বড়। কেবল ফাইন শাহিদূ, যদি তারা সাক্ষ্য দেয়, তখনই কোনো ব্যবস্থা। সন্দেহ, গুজব বা একজনের কথা সেই সীমায় পৌঁছায় না।"
          },
          {
            "en": "Aw yaj'alallahu lahunna sabila: or Allah ordains for them a way. Sabil is a road or path, and the phrase leaves the ruling visibly unfinished. In 4:16, fa-adhuhuma comes from the root a-dh-y, to hurt or trouble, a word that names a punishment without specifying its form. Then comes the turn: fa-in taba wa aslaha, if they repent and set right, fa-a'ridu anhuma, turn away from them. The verb for leaving them alone is the same one used for turning aside from something, and the verse ends on tawwaban rahima.",
            "bn": "আও ইয়াজআলাল্লাহু লাহুন্না সাবীলা: কিংবা আল্লাহ তাদের জন্য কোনো পথ করে দেন। সাবীল মানে রাস্তা, পথ। কথাটা বিধানটিকে স্পষ্টতই অসমাপ্ত রেখে দেয়। ৪:১৬ আয়াতে ফাআযূহুমা এসেছে হামযা-যাল-ইয়া মূল থেকে, অর্থ কষ্ট দেওয়া। শব্দটা শাস্তির কথা বলে, কিন্তু তার ধরন নির্দিষ্ট করে না। তারপর মোড়: ফাইন তাবা ওয়া আসলাহা, যদি তারা তওবা করে আর শুধরে নেয়, ফাআরিদূ আনহুমা, তাদের থেকে মুখ ফিরিয়ে নাও। ছেড়ে দেওয়া বোঝাতে যে ক্রিয়া, সেটাই কোনো কিছু থেকে সরে যাওয়ার অর্থে আসে। আর আয়াত শেষ হয় তাওওয়াবার রাহীমা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogation and a Difference",
          "bn": "রহিত হওয়া আর মতভেদ"
        },
        "p": [
          {
            "en": "Ibn Kathir explains that at the beginning of Islam, when such an act was established by sufficient proof, the woman was confined to her home. He reports from Ibn Abbas (RA) that this was the early ruling until Allah sent down Surah an-Nur, which abrogated it, and he names Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah, ad-Dahhak and others as saying the same. He calls this a matter that is agreed upon. The way promised in the verse, on this reading, is the later ruling.",
            "bn": "ইবনে কাসীর ব্যাখ্যা করেন, ইসলামের শুরুতে পর্যাপ্ত প্রমাণে এমন কাজ প্রমাণিত হলে নারীকে তার ঘরে আটকে রাখা হতো। ইবনে আব্বাস (রাঃ) থেকে তিনি বর্ণনা করেন, এটা ছিল প্রথম দিকের বিধান, যতক্ষণ না আল্লাহ সূরা নূর নাযিল করেন, যা এটিকে রহিত করে দেয়। ইকরিমা, সাঈদ ইবনে জুবায়র, হাসান বসরী, কাতাদা, দাহহাক প্রমুখও একই কথা বলেছেন বলে তিনি উল্লেখ করেন। তাঁর ভাষায় বিষয়টি সর্বসম্মত। এই পাঠ অনুযায়ী আয়াতে প্রতিশ্রুত পথ হলো পরের বিধান।"
          },
          {
            "en": "The commentators differ over whom 4:16 describes. Ibn Kathir reports Mujahid's view that it concerns two men, adding that Allah knows best. Another view, recorded by at-Tabari and preferred by him, is that 4:15 concerns women and 4:16 an unmarried man and woman. Others read the two as a man and a woman without further distinction. Al-Qurtubi gathers these positions. On the hurt in fa-adhuhuma, Ibn Kathir reports from Ibn Abbas (RA) and Sa'id ibn Jubayr that it included verbal reproach and shaming, and he adds that this too was later abrogated.",
            "bn": "৪:১৬ আয়াত কাদের কথা বলছে, এ নিয়ে মুফাসসিরদের মতভেদ আছে। ইবনে কাসীর মুজাহিদের মত উল্লেখ করেন যে এখানে দুজন পুরুষের কথা, সঙ্গে বলেন আল্লাহই ভালো জানেন। আরেকটি মত তাবারী উল্লেখ করেছেন আর প্রাধান্যও দিয়েছেন: ৪:১৫ আয়াত নারীদের নিয়ে, আর ৪:১৬ আয়াত অবিবাহিত পুরুষ ও নারীকে নিয়ে। অন্যরা দুজন বলতে আলাদা কোনো ভাগ ছাড়াই একজন পুরুষ ও একজন নারী বুঝেছেন। কুরতুবী এই মতগুলো একত্র করেছেন। ফাআযূহুমার কষ্ট প্রসঙ্গে ইবনে কাসীর ইবনে আব্বাস (রাঃ) ও সাঈদ ইবনে জুবায়র থেকে বর্ণনা করেন, এর মধ্যে ছিল মুখে তিরস্কার আর লজ্জা দেওয়া। সঙ্গে তিনি যোগ করেন, এটাও পরে রহিত হয়েছে।"
          },
          {
            "en": "On leave them alone, Ibn Kathir says: do not revile them after that, because one who truly repents is like one who has no sin. This page does not set out the later penalties or how and by whom they are applied; that belongs to qualified jurists and to lawful authority, not to individuals or to an article. What the verses give every reader is their shape: a demanding standard of proof, a ruling given in stages, and an insistence that repentance changes how a person is to be treated.",
            "bn": "তাদের ছেড়ে দাও, এ কথার ব্যাখ্যায় ইবনে কাসীর বলেন: এরপর আর তাদের গালমন্দ কোরো না, কারণ যে সত্যিকার তওবা করে, সে এমন মানুষের মতো যার কোনো গুনাহ নেই। পরের শাস্তিগুলো কী, কীভাবে আর কার হাতে তা কার্যকর হয়, এই লেখা তা আলোচনা করছে না। সেটা যোগ্য ফকিহ আর বৈধ কর্তৃপক্ষের বিষয়, কোনো ব্যক্তি বা কোনো লেখার নয়। আয়াতগুলো প্রত্যেক পাঠককে যা দেয় তা হলো এর গড়ন: প্রমাণের কঠিন মানদণ্ড, ধাপে ধাপে দেওয়া বিধান, আর এই জোরালো কথা যে তওবা একজন মানুষের সঙ্গে আচরণ বদলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Take It From Me",
          "bn": "আমার কাছ থেকে নাও"
        },
        "p": [
          {
            "en": "Imam Muslim records from Ubadah ibn as-Samit (RA) that the Prophet ﷺ said: take it from me, take it from me, Allah has made a way for them. He then set out the penalties for the unmarried and for the married. Ibn Kathir cites this narration directly under 4:15, because its words take up the verse's own promise of a way. The narration is the link between the open ending of this verse and the ruling that followed it.",
            "bn": "ইমাম মুসলিম উবাদা ইবনে সামিত (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বললেন: আমার কাছ থেকে নাও, আমার কাছ থেকে নাও, আল্লাহ তাদের জন্য পথ করে দিয়েছেন। এরপর তিনি অবিবাহিত আর বিবাহিতদের শাস্তির কথা বললেন। ইবনে কাসীর বর্ণনাটি সরাসরি ৪:১৫ আয়াতের নিচে এনেছেন, কারণ এর শব্দগুলো আয়াতের পথ দেওয়ার প্রতিশ্রুতিকেই তুলে নেয়। আয়াতের খোলা সমাপ্তি আর তার পরে আসা বিধানের মাঝে এই বর্ণনাই যোগসূত্র।"
          },
          {
            "en": "Two things in it are worth noticing without going into the penalties themselves. The Prophet ﷺ presents the new ruling as the fulfilment of what the Quran had promised, not as his own invention, so the Sunnah and the verse speak with one voice. And the repeated take it from me shows the care with which he wanted the community to receive it. Ibn Kathir brings other narrations under these verses; this page confines itself to the one that answers the verse's own words.",
            "bn": "শাস্তির খুঁটিনাটিতে না গিয়েও এতে দুটি জিনিস লক্ষ করার মতো। নবী ﷺ নতুন বিধানকে তুলে ধরেছেন কুরআনের দেওয়া প্রতিশ্রুতির পূর্ণতা হিসেবে, নিজের বানানো কিছু হিসেবে নয়। ফলে সুন্নাহ আর আয়াত এক সুরে কথা বলে। আর দুবার বলা আমার কাছ থেকে নাও দেখায়, উম্মাহ বিষয়টি কতটা যত্ন নিয়ে গ্রহণ করুক, তিনি তা চেয়েছিলেন। ইবনে কাসীর এই আয়াতগুলোর নিচে আরও বর্ণনা এনেছেন। এই লেখা কেবল সেই বর্ণনাতেই সীমাবদ্ধ থাকছে, যা আয়াতের নিজের শব্দের জবাব দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Surah an-Nur and the Door of Repentance",
          "bn": "সূরা নূর আর তওবার দরজা"
        },
        "p": [
          {
            "en": "24:2 is where, according to Ibn Abbas (RA), the promised way came in the Quran. The same surah turns the standard of four witnesses into a protection: 24:4 punishes those who accuse chaste women and do not produce four witnesses, and bars their testimony, and 24:13 asks why the slanderers did not bring four witnesses, and says that without them they are the liars in the sight of Allah. 24:19 warns those who love that indecency should spread among the believers.",
            "bn": "ইবনে আব্বাস (রাঃ)-এর বর্ণনা অনুযায়ী কুরআনে প্রতিশ্রুত পথটা এসেছে ২৪:২ আয়াতে। একই সূরা চার সাক্ষীর শর্তকে সুরক্ষায় পরিণত করে। ২৪:৪ আয়াত শাস্তি দেয় তাদের, যারা সতী নারীদের ওপর অপবাদ দেয় অথচ চারজন সাক্ষী আনে না, আর তাদের সাক্ষ্য কখনো গ্রহণ না করতে বলে। ২৪:১৩ আয়াত প্রশ্ন করে, অপবাদকারীরা চারজন সাক্ষী আনল না কেন? সাক্ষী না আনলে আল্লাহর কাছে তারাই মিথ্যাবাদী। আর ২৪:১৯ আয়াত সতর্ক করে তাদের, যারা চায় মুমিনদের মধ্যে অশ্লীলতা ছড়িয়ে পড়ুক।"
          },
          {
            "en": "On the side of repentance, 4:17, the very next verse, says that repentance is accepted from those who do wrong in ignorance and repent soon after. 3:135 describes the God-fearing as people who, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness and do not persist. And 25:70, after naming the gravest sins, makes an exception for those who repent, believe and do righteous work: Allah will replace their evil deeds with good.",
            "bn": "তওবার দিকে, ঠিক পরের আয়াত ৪:১৭ বলে, তওবা কবুল হয় তাদের, যারা অজ্ঞতাবশত মন্দ কাজ করে তারপর দ্রুত তওবা করে। ৩:১৩৫ আয়াত মুত্তাকিদের বর্ণনা দেয় এমন মানুষ হিসেবে, যারা কোনো অশ্লীল কাজ করে ফেললে বা নিজেদের ওপর জুলুম করলে আল্লাহকে স্মরণ করে, গুনাহের মাফ চায়, আর জেনেশুনে তা বারবার করে না। আর ২৫:৭০ আয়াত সবচেয়ে বড় গুনাহগুলোর উল্লেখের পর ব্যতিক্রম রাখে তাদের জন্য, যারা তওবা করে, ঈমান আনে আর নেক আমল করে: আল্লাহ তাদের মন্দ কাজগুলো নেকিতে বদলে দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarding Tongues and Covering Faults",
          "bn": "জিহ্বা সামলানো, দোষ ঢেকে রাখা"
        },
        "p": [
          {
            "en": "Most readers will never sit in judgement over anyone, but every reader has a tongue. The standard of four witnesses teaches how little a rumour is worth. Before repeating a story about someone's private life, ask what you actually know and what it would take to prove it. If the Quran demands four witnesses before any measure and calls an accuser without them a liar, a believer has no business passing on a whisper. Al-Bukhari records from Ibn Umar (RA) that the Prophet ﷺ said whoever covers a Muslim, Allah will cover him on the Day of Resurrection.",
            "bn": "বেশির ভাগ পাঠক কখনো কারও বিচারে বসবেন না, কিন্তু প্রত্যেক পাঠকেরই জিহ্বা আছে। চার সাক্ষীর শর্ত শেখায়, গুজবের দাম কত সামান্য। কারও ব্যক্তিগত জীবন নিয়ে কোনো গল্প আরেকজনকে বলার আগে নিজেকে জিজ্ঞেস করুন, আমি আসলে কী জানি, আর তা প্রমাণ করতে কী লাগবে। কোনো ব্যবস্থার আগে কুরআন যদি চারজন সাক্ষী চায়, আর সাক্ষী ছাড়া অভিযোগকারীকে মিথ্যাবাদী বলে, তাহলে কানাকানি ছড়ানোর কোনো অধিকার মুমিনের নেই। ইমাম বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, যে কোনো মুসলিমের দোষ ঢেকে রাখে, আল্লাহ কিয়ামতের দিন তার দোষ ঢেকে রাখবেন।"
          },
          {
            "en": "For someone who has fallen, the verses point toward return rather than exposure. Repent soon, as 4:17 says, and do not wait. Do not advertise the sin: al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said all of his community will be pardoned except those who expose themselves, doing a wrong at night that Allah has covered and then telling people about it in the morning. Seek help from someone trustworthy if you need to, and set things right in your life, as aslaha asks.",
            "bn": "যে পড়ে গেছে, আয়াতগুলো তাকে প্রকাশের দিকে নয়, ফিরে আসার দিকে দেখায়। ৪:১৭ আয়াত যেমন বলে, দ্রুত তওবা করুন, দেরি করবেন না। গুনাহের কথা প্রচার করবেন না। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, তাঁর উম্মতের সবাই মাফ পাবে, তারা ছাড়া যারা নিজেদের প্রকাশ করে দেয়। রাতে কেউ একটা অন্যায় করল, আল্লাহ তা ঢেকে রাখলেন, আর সকালে সে নিজেই লোকদের তা বলে বেড়াল। দরকার হলে কোনো বিশ্বস্ত মানুষের সাহায্য নিন, আর আসলাহা শব্দটি যা চায়, নিজের জীবনটা ঠিক করে নিন।"
          },
          {
            "en": "For a family or community that knows of someone's past and has seen their repentance, fa-a'ridu anhuma is a command, not a suggestion. Stop bringing it up. Do not let it follow them into a marriage proposal, a job or a mosque committee as gossip. Ibn Kathir's gloss is plain: one who repents is like one with no sin. Treating a repentant person as permanently marked claims a severity that the verse, ending on the Accepting of Repentance and the Merciful, does not claim.",
            "bn": "কোনো পরিবার বা সমাজ যদি কারও অতীত জানে, আর তার তওবাও দেখে থাকে, তাহলে ফাআরিদূ আনহুমা তাদের জন্য আদেশ, পরামর্শ নয়। প্রসঙ্গটা তোলা বন্ধ করুন। বিয়ের প্রস্তাবে, চাকরিতে বা মসজিদ কমিটিতে সেই কথা যেন কানাকানি হয়ে তার পিছু না নেয়। ইবনে কাসীরের ব্যাখ্যা সোজা: তওবাকারী এমন, যেন তার কোনো গুনাহ নেই। তওবাকারী মানুষকে চিরকালের জন্য দাগ লাগানো মনে করা মানে এমন কঠোরতা দাবি করা, যা আয়াত নিজে দাবি করে না। আয়াত তো শেষ হয়েছে তওবা কবুলকারী আর পরম দয়ালুর নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a of Return",
          "bn": "ফিরে আসার দোয়া"
        },
        "p": [
          {
            "en": "The Quran gives a du'a of return in 7:23, the words of Adam (AS) and his wife after their slip: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers. It asks for exactly what 4:16 ends on, forgiveness and mercy. Alongside it, a short supplication in the vocabulary of these verses, offered as such and not as a transmitted text: O Allah, You are Tawwab and Rahim; accept my repentance, help me set right what I have spoiled, and cover my faults as I cover the faults of others.",
            "bn": "কুরআন ৭:২৩ আয়াতে ফিরে আসার একটি দোয়া দিয়েছে। ভুলের পর আদম (আঃ) ও তাঁর স্ত্রীর কথা: হে আমাদের রব, আমরা নিজেদের ওপর জুলুম করেছি, আপনি যদি আমাদের মাফ না করেন আর দয়া না করেন, তাহলে আমরা অবশ্যই ক্ষতিগ্রস্তদের মধ্যে পড়ে যাব। এতে চাওয়া হয়েছে ঠিক সেই দুটি জিনিস, যা দিয়ে ৪:১৬ আয়াত শেষ হয়, মাফ আর রহমত। সঙ্গে এই আয়াতগুলোর শব্দে গড়া ছোট একটি দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আপনি তাওওয়াব, আপনি রাহীম। আমার তওবা কবুল করুন, যা নষ্ট করেছি তা শুধরে নিতে সাহায্য করুন, আর আমি যেমন অন্যের দোষ ঢেকে রাখি, আপনিও আমার দোষ ঢেকে রাখুন।"
          },
          {
            "en": "A second short supplication in the same vocabulary, also composed rather than transmitted, for the one who fears speaking wrongly about others: O Allah, keep my tongue from accusing anyone without proof, and keep my heart from loving that indecency should spread. These are prayers that can be said daily, not only after a fall.",
            "bn": "একই শব্দভান্ডারে আরেকটি ছোট দোয়া, এটাও বানানো, বর্ণিত নয়। যে অন্যের ব্যাপারে ভুল কথা বলার ভয় করে, তার জন্য: হে আল্লাহ, প্রমাণ ছাড়া কাউকে অভিযুক্ত করা থেকে আমার জিহ্বা বাঁচিয়ে রাখুন, আর অশ্লীলতা ছড়িয়ে পড়ুক এমন চাওয়া থেকে আমার অন্তর বাঁচিয়ে রাখুন। এ দোয়াগুলো কেবল পড়ে যাওয়ার পর নয়, প্রতিদিনই পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Sit With",
          "bn": "যে প্রশ্ন নিয়ে বসা যায়"
        },
        "p": [
          {
            "en": "When did I last pass on something about another person's private life that I could not have proved to anyone? Is there someone whose past I still bring up, though they have long since turned back to Allah? If Allah exposed what He has covered of mine, how would I want people to treat me afterwards, and do I treat others that way now?",
            "bn": "শেষ কবে আমি কারও ব্যক্তিগত জীবন নিয়ে এমন কিছু বলেছি, যা কারও কাছেই প্রমাণ করতে পারতাম না? এমন কেউ কি আছে, যে বহু আগেই আল্লাহর দিকে ফিরে এসেছে, অথচ আমি এখনো তার অতীত টেনে আনি? আমার যা আল্লাহ ঢেকে রেখেছেন তা যদি প্রকাশ করে দিতেন, তারপর মানুষ আমার সঙ্গে কেমন আচরণ করুক, তা চাইতাম? আর আমি কি এখন অন্যদের সঙ্গে তেমন আচরণ করি?"
          },
          {
            "en": "Is there a wrong in my own life that I keep postponing repentance for, telling myself there will be time? When someone I know has repented and set things right, can I obey fa-a'ridu anhuma and truly leave the matter alone, as Ibn Kathir explains it, without reviling them afterwards? And what does it teach me about Allah that He brought His law in stages, and closed even these stern verses with His names the Accepting of Repentance and the Merciful?",
            "bn": "আমার নিজের জীবনে কি এমন কোনো অন্যায় আছে, যার তওবা আমি সময় আছে ভেবে বারবার পিছিয়ে দিচ্ছি? পরিচিত কেউ তওবা করে নিজেকে শুধরে নিলে আমি কি ফাআরিদূ আনহুমা মেনে সত্যিই বিষয়টা ছেড়ে দিতে পারি, ইবনে কাসীরের ব্যাখ্যা অনুযায়ী পরে আর তাকে গালমন্দ না করে? আর আল্লাহ যে ধাপে ধাপে বিধান দিয়েছেন, এমন কঠিন আয়াতগুলোকেও শেষ করেছেন তওবা কবুলকারী আর পরম দয়ালু নামে, এ থেকে আল্লাহ সম্পর্কে আমি কী শিখি?"
          }
        ]
      }
    ]
  },
  "4:19-21": {
    "sections": [
      {
        "h": {
          "en": "A Widow Is Not an Estate",
          "bn": "বিধবা কোনো পরিত্যক্ত সম্পত্তি নয়"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan. Its opening verses set out the rights of orphans and, in 4:11-12, the shares of inheritance, closing with the limits of Allah in 4:13-14. Then 4:15-16 address grave indecency and 4:17-18 the terms of repentance. At 4:19 comes the surah's first call of ya ayyuha alladhina amanu, O you who have believed. The talk turns from what a dead man leaves to how the living treat the women of the house, and right after this passage 4:22-24 name the women who may not be married.",
            "bn": "সূরা নিসা মাদানি। শুরুর আয়াতগুলোতে এতিমদের হক, আর ৪:১১ ও ৪:১২ আয়াতে মিরাসের অংশ, যার শেষে ৪:১৩ ও ৪:১৪ আয়াতে আল্লাহর সীমারেখার কথা। তারপর ৪:১৫ ও ৪:১৬ আয়াতে গুরুতর অশ্লীলতার বিধান, আর ৪:১৭ ও ৪:১৮ আয়াতে তওবার শর্ত। ৪:১৯ আয়াতে এসে সূরায় প্রথমবার ডাক আসে, ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ। মৃত মানুষ কী রেখে গেল, সেই আলোচনা থেকে কথা ঘুরে যায় জীবিতরা ঘরের নারীদের সঙ্গে কেমন আচরণ করবে তার দিকে। এই অংশের ঠিক পরে ৪:২২ থেকে ৪:২৪ আয়াতে বলা আছে কোন নারীদের বিয়ে করা যাবে না।"
          },
          {
            "en": "The verse also has a known occasion. Ibn Kathir cites al-Bukhari's report from Ibn Abbas (RA): before it, when a man died, his male relatives held the right to do as they wished with his wife. If one of them wished, he married her, or gave her in marriage, or kept her from marrying at all, for they held more right over her than her own family did. Then this verse was revealed. As-Sa'di describes the same custom and adds that she might be kept from marrying until she handed over part of her late husband's wealth or of her dowry.",
            "bn": "আয়াতটির নাজিলের প্রেক্ষাপটও জানা। ইবনে কাসীর ইমাম বুখারীর বর্ণনা আনেন ইবনে আব্বাস (রাঃ) থেকে: এর আগে কোনো পুরুষ মারা গেলে তার স্ত্রীর ব্যাপারে যা খুশি করার অধিকার পেত মৃতের পুরুষ আত্মীয়রা। তাদের কেউ চাইলে নিজে তাকে বিয়ে করত, চাইলে অন্যের সঙ্গে বিয়ে দিত, আবার চাইলে বিয়েই করতে দিত না। কারণ তার ওপর তার নিজের পরিবারের চেয়ে তাদের দাবিই বেশি ধরা হতো। তখন এই আয়াত নাজিল হয়। আস-সাদী একই প্রথার বর্ণনা দেন, আর যোগ করেন: মৃত স্বামীর সম্পদ বা মোহরের কিছু অংশ তুলে না দেওয়া পর্যন্ত তাকে বিয়ে করতে না দেওয়াও হতো।"
          }
        ]
      },
      {
        "h": {
          "en": "One Root, Three Times",
          "bn": "এক ধাতু, তিনবার"
        },
        "p": [
          {
            "en": "The prohibition is phrased la yahillu lakum, it is not lawful for you, the language of the permitted and the forbidden. What is not lawful is an tarithu an-nisa'a karhan, that you inherit women by compulsion. Karhan means against one's will. Then comes wa la ta'duluhunna, and do not constrain them. The same verb appears in 2:232, where it is rendered do not prevent them from remarrying. Ibn Kathir explains it here as treating a woman harshly so that she gives back all or part of her dowry, or gives up one of her rights under pressure.",
            "bn": "নিষেধটা এসেছে লা ইয়াহিল্লু লাকুম দিয়ে, তোমাদের জন্য বৈধ নয়। এ হালাল-হারামের ভাষা। কী বৈধ নয়? আন তারিসুন নিসাআ কারহা, জোর করে নারীদের ওয়ারিশ হওয়া। কারহা মানে অমতে, ইচ্ছার বিরুদ্ধে। এরপর আসে ওয়া লা তা'দুলূহুন্না, তাদের আটকে রেখে কষ্ট দিয়ো না। একই ক্রিয়া আছে ২:২৩২ আয়াতে, যেখানে অনুবাদ হয়েছে: তাদের বাধা দিও না। এখানে ইবনে কাসীরের ব্যাখ্যা হলো, নারীর সঙ্গে এমন কঠোর আচরণ করা, যাতে সে মোহরের পুরোটা বা কিছু অংশ ফিরিয়ে দেয়, কিংবা চাপে পড়ে নিজের কোনো হক ছেড়ে দেয়।"
          },
          {
            "en": "In place of pressure the verse sets wa 'ashiruhunna bil-ma'ruf, live with them in kindness. The verb is from the root '-sh-r, the root of mu'asharah, living in one another's company, and bil-ma'ruf ties that company to what is known and recognised as good. Ibn Kathir fills it in: kind words, kind treatment, and making one's appearance pleasing for her as far as one can, just as a husband would like the same from her, and he cites 2:228. As-Sa'di adds clothing and provision, according to the husband's means, her situation, and the custom of the time and place.",
            "bn": "চাপের জায়গায় আয়াত রাখে ওয়া আশিরূহুন্না বিল মা'রূফ, তাদের সঙ্গে সদ্ভাবে জীবন যাপন করো। ক্রিয়াটির ধাতু আইন-শীন-রা, যা থেকে আসে মুআশারা, মানে একসঙ্গে মিলেমিশে থাকা। আর বিল মা'রূফ এই সঙ্গকে বেঁধে দেয় সেই আচরণের সঙ্গে, যাকে সবাই ভালো বলে চেনে। ইবনে কাসীর এর ব্যাখ্যা দেন: নরম কথা, ভালো ব্যবহার, আর সাধ্যমতো স্ত্রীর জন্য নিজেকে পরিপাটি রাখা, ঠিক যেমন স্বামী নিজেও স্ত্রীর কাছে তা চায়। এর পাশে তিনি আনেন ২:২২৮ আয়াত। আস-সাদী যোগ করেন পোশাক আর ভরণপোষণের কথা, স্বামীর সামর্থ্য, স্ত্রীর অবস্থা আর সেই সময় ও দেশের প্রচলন অনুযায়ী।"
          },
          {
            "en": "Listen to the verse and one root returns three times: k-r-h, unwillingness and dislike. Karhan, the woman's unwillingness, opens it. Karihtumuhunna, if you dislike them, and takrahu shay'an, you dislike a thing, close it. The first is her will, which men had once overridden; the last two are the husband's dislike, which he is asked to hold in check. And the closing clause widens from them to a thing, so that it reads as a principle as much as a counsel about one marriage: perhaps you dislike a thing and Allah places in it much good.",
            "bn": "আয়াতটা মন দিয়ে শুনলে একটা ধাতু তিনবার ফিরে আসে: কাফ-রা-হা, অনিচ্ছা আর অপছন্দ। শুরুতে কারহা, নারীর অনিচ্ছা। শেষে কারিহতুমূহুন্না, যদি তাদের অপছন্দ করো, আর তাকরাহূ শাইআ, কোনো কিছু অপছন্দ করো। প্রথমটা নারীর নিজের ইচ্ছা, যা একসময় পুরুষেরা অগ্রাহ্য করত। পরের দুটো স্বামীর অপছন্দ, আর সেই অপছন্দকে সংযত রাখতে বলা হচ্ছে স্বামীকেই। শেষ বাক্যে কথাটা তাদের থেকে ছড়িয়ে যায় যেকোনো জিনিসে। তাই এটা এক বিয়ের উপদেশ যতটা, ততটাই এক সাধারণ নীতি: হতে পারে তোমরা কিছু অপছন্দ করছ, অথচ আল্লাহ তাতে অনেক কল্যাণ রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Indecency, Consent and Patience",
          "bn": "অশ্লীলতা, সম্মতি ও সবর"
        },
        "p": [
          {
            "en": "The exception, unless they commit a clear fahishah, drew more than one reading. Ibn Kathir reports from Ibn Mas'ud (RA), Ibn Abbas (RA) and a long list of early authorities that it means illicit sexual relations. He also reports from Ibn Abbas, Ikrimah and ad-Dahhak that it means defiance and disobedience. Ibn Jarir at-Tabari, he says, held the word to be general, covering all of these, and Ibn Kathir calls that view good. Al-Muyassar gives adultery as its example. What the exception permits in practice is a question of fiqh, and this page leaves it to the scholars.",
            "bn": "ব্যতিক্রমটা, যদি না তারা স্পষ্ট ফাহিশা করে, এর একাধিক ব্যাখ্যা আছে। ইবনে কাসীর ইবনে মাসউদ (রাঃ), ইবনে আব্বাস (রাঃ) আর প্রথম যুগের দীর্ঘ এক তালিকা থেকে বর্ণনা করেন যে এর মানে অবৈধ যৌন সম্পর্ক। আবার ইবনে আব্বাস (রাঃ), ইকরিমা ও দাহহাক থেকে তিনি বর্ণনা করেন যে এর মানে নাফরমানি ও অবাধ্য আচরণ। তাঁর ভাষ্যে, ইবনে জারীর তাবারী শব্দটাকে ব্যাপক ধরেছেন, যার মধ্যে এসবই পড়ে, আর ইবনে কাসীর এই মতকে ভালো বলেছেন। আল-মুয়াসসার উদাহরণ হিসেবে জিনার কথা বলে। এই ব্যতিক্রম বাস্তবে কী অনুমতি দেয়, সে প্রশ্ন ফিকহের, আর এই লেখা তা আলেমদের হাতেই ছেড়ে দিচ্ছে।"
          },
          {
            "en": "As-Sa'di draws out what karhan leaves open. The verse forbids taking a widow against her will, so if she herself agrees to marry a relative of her late husband, that is not what the verse forbids. The line concerning a father's wives is drawn separately, three verses later, in 4:22. He then reads the command to live in kindness as reaching every good word and deed, so that a husband does not harm his wife, does good to her, and is gracious in how he deals with her.",
            "bn": "কারহা শব্দটা কী খোলা রাখে, আস-সাদী তা দেখান। আয়াত নিষেধ করেছে বিধবাকে তার অমতে নেওয়া। তাই সে নিজে যদি মৃত স্বামীর কোনো আত্মীয়কে বিয়ে করতে রাজি হয়, আয়াতটি সেটা নিষেধ করছে না। বাবার স্ত্রীদের ব্যাপারে সীমা টানা হয়েছে আলাদাভাবে, তিন আয়াত পরে, ৪:২২ আয়াতে। এরপর তিনি সদ্ভাবে বসবাসের আদেশকে প্রতিটি ভালো কথা আর ভালো কাজ পর্যন্ত বিস্তৃত করেন: স্বামী স্ত্রীকে কষ্ট দেবে না, তার উপকার করবে, আর তার সঙ্গে ব্যবহারে হবে কোমল।"
          },
          {
            "en": "On the closing clause the commentators point the same way and name different goods. Ibn Kathir says a husband's patience in keeping a wife he dislikes brings good for him in this life and the Hereafter, and he cites Ibn Abbas (RA): that he may come to feel tenderness for her, and Allah may give him a child by her in whom there is much good. As-Sa'di adds that the man who holds his home together against his feelings gains fine character in the struggle, and that dislike very often turns to love. Al-Muyassar says: if you dislike them for some worldly reason, be patient.",
            "bn": "শেষ বাক্যের ব্যাপারে মুফাসসিরদের দিক একই, তবে প্রত্যেকে আলাদা কল্যাণের কথা বলেন। ইবনে কাসীর বলেন, অপছন্দের স্ত্রীকে ধরে রাখার এই সবর স্বামীর জন্য দুনিয়া ও আখিরাতে কল্যাণ বয়ে আনে। তিনি ইবনে আব্বাস (রাঃ)-এর কথা আনেন: হয়তো স্ত্রীর প্রতি তার মমতা জাগবে, আর আল্লাহ তার গর্ভে তাকে এমন সন্তান দেবেন, যার মধ্যে অনেক কল্যাণ। আস-সাদী যোগ করেন, নিজের মনের বিরুদ্ধে যে সংসার ধরে রাখে, এই লড়াইয়ে সে উত্তম চরিত্র অর্জন করে, আর অপছন্দ অনেক সময়ই ভালোবাসায় বদলে যায়। আল-মুয়াসসার বলে: দুনিয়াবি কোনো কারণে তাদের অপছন্দ করলে সবর করো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Best to Their Families",
          "bn": "পরিবারের কাছে যে উত্তম"
        },
        "p": [
          {
            "en": "Under this verse Ibn Kathir cites the Prophet ﷺ: the best of you is the best of you to his family, and I am the best of you to my family. At-Tirmidhi records it from Aishah (RA). Ibn Kathir then describes the Prophet's ﷺ own home: kind, cheerful and playful with his wives, gentle, spending on them and laughing with them. He relates from Aishah (RA) that the Prophet ﷺ raced her and she won, before she had put on weight, and that later he raced her again and won, and said: this is for that.",
            "bn": "এই আয়াতের আলোচনায় ইবনে কাসীর নবী ﷺ-এর বাণী আনেন: তোমাদের মধ্যে সেই উত্তম, যে তার পরিবারের কাছে উত্তম, আর আমি আমার পরিবারের কাছে তোমাদের সবার চেয়ে উত্তম। ইমাম তিরমিযী আয়েশা (রাঃ) থেকে এটি বর্ণনা করেছেন। এরপর ইবনে কাসীর নবী ﷺ-এর নিজের ঘরের ছবি দেন: স্ত্রীদের সঙ্গে তিনি ছিলেন কোমল, হাসিখুশি, আমুদে আর দয়ালু। তাঁদের জন্য খরচ করতেন, তাঁদের সঙ্গে হাসতেন। আয়েশা (রাঃ) থেকে ইবনে কাসীর আরও বর্ণনা করেন, নবী ﷺ তাঁর সঙ্গে দৌড় প্রতিযোগিতা করেছিলেন, আর জিতেছিলেন আয়েশা (রাঃ) নিজে। তখনো তাঁর শরীর ভারী হয়নি। পরে আবার দৌড়ে নবী ﷺ জিতলেন, আর বললেন: এটা ওটার বদলে।"
          },
          {
            "en": "For the heart that has cooled, Ibn Kathir cites a second hadith, which Muslim records from Abu Hurayrah (RA): a believing man should not hate a believing woman; if he dislikes one trait in her, he will be pleased with another. The Arabic verb, la yafrak, names the particular aversion that can grow between spouses. The hadith does not tell the husband to pretend. It tells him to look again, and it is the practical form of the verse's own counsel, that Allah may have placed much good in what he dislikes.",
            "bn": "যে মনের টান কমে গেছে, তার জন্য ইবনে কাসীর আরেকটি হাদীস আনেন, যা ইমাম মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন: কোনো মুমিন পুরুষ যেন কোনো মুমিন নারীকে ঘৃণা না করে। তার একটা স্বভাব অপছন্দ হলে আরেকটা স্বভাবে সে খুশি হবে। আরবি ক্রিয়াটি লা ইয়াফরাক, যা বিশেষভাবে স্বামী-স্ত্রীর মাঝে জন্মানো বিতৃষ্ণা বোঝায়। হাদীসটি স্বামীকে ভান করতে বলে না। বলে আবার তাকিয়ে দেখতে। অপছন্দের জিনিসে আল্লাহ অনেক কল্যাণ রাখতে পারেন, আয়াতের এই উপদেশের হাতে-কলমে রূপ এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Stand Beside It",
          "bn": "পাশে দাঁড়ানো আয়াতগুলো"
        },
        "p": [
          {
            "en": "2:228 is the verse Ibn Kathir sets beside the command of kindness: due to wives is similar to what is expected of them, according to what is reasonable. The same word, ma'ruf, carries both verses. 2:231 closes the door this verse closes, telling husbands not to keep their wives intending harm, to transgress against them, and saying that whoever does so has wronged himself. And 2:229, which Ibn Kathir also cites here, says it is not lawful to take back anything given to a wife unless both fear that they cannot keep within the limits of Allah.",
            "bn": "সদ্ভাবের আদেশের পাশে ইবনে কাসীর যে আয়াত রাখেন তা ২:২২৮: নিয়ম অনুযায়ী পুরুষদের যেমন নারীদের ওপর হক আছে, নারীদেরও তেমনি পুরুষদের ওপর হক আছে। দুই আয়াতেই আছে একই শব্দ, মা'রূফ। এই আয়াত যে দরজা বন্ধ করে, ২:২৩১ আয়াতও তা বন্ধ করে: ক্ষতি করার উদ্দেশ্যে বাড়াবাড়ি করে স্ত্রীদের আটকে রেখো না, যে এমন করে সে নিজের ওপরই জুলুম করে। আর ২:২২৯, যা ইবনে কাসীর এখানেই উল্লেখ করেন, বলে: স্ত্রীকে যা দেওয়া হয়েছে তার কিছুই ফেরত নেওয়া বৈধ নয়, তবে যদি দুজনেরই আশঙ্কা হয় যে তারা আল্লাহর সীমা রক্ষা করতে পারবে না।"
          },
          {
            "en": "2:216 carries the closing clause into another field. There it follows the command to fight, which was hateful to the believers: perhaps you hate a thing and it is good for you, and perhaps you love a thing and it is bad for you, and Allah knows while you know not. The same root k-r-h is there, which shows the principle is not about marriage alone. 30:21 then names what a marriage is meant to hold: mates from among yourselves in whom to find tranquillity, with affection and mercy placed between you. Kindness in 4:19 is the daily work of keeping that mercy alive.",
            "bn": "শেষ বাক্যটিকে ২:২১৬ আয়াত নিয়ে যায় আরেক ক্ষেত্রে। সেখানে কথাটা আসে যুদ্ধের আদেশের পরে, যা মুমিনদের কাছে অপ্রিয় ছিল: হতে পারে তোমরা কিছু অপছন্দ করো অথচ তা তোমাদের জন্য কল্যাণকর, আর কিছু পছন্দ করো অথচ তা অকল্যাণকর, আর আল্লাহ জানেন, তোমরা জানো না। সেখানেও একই কাফ-রা-হা ধাতু, তাই নীতিটা শুধু বিয়ের নয়। ৩০:২১ আয়াত বলে দেয় বিয়ে কী ধরে রাখার জন্য: তোমাদের মধ্য থেকেই সঙ্গী, যাতে তার কাছে শান্তি পাও, আর তোমাদের মাঝে রাখা হয়েছে ভালোবাসা ও দয়া। ৪:১৯ আয়াতের সদ্ভাব সেই দয়াকে রোজ বাঁচিয়ে রাখার কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Kindness Nobody Else Sees",
          "bn": "যে সদ্ভাব বাইরের কেউ দেখে না"
        },
        "p": [
          {
            "en": "The first application is the plainest. Ibn Kathir's description gives a husband a list he can keep in an ordinary week: a kind word when he comes in, time to talk in the evening, care over how he looks for her, as he would like her to take care for him, and spending on the home according to his means without making her ask twice. None of this needs a crisis. It is what the verse means by living together bil-ma'ruf, and it is easy to neglect precisely because nobody outside the house will ever notice.",
            "bn": "প্রথম প্রয়োগটাই সবচেয়ে সরল। ইবনে কাসীরের বর্ণনা থেকে একজন স্বামী সাধারণ একটা সপ্তাহের জন্য তালিকা বানিয়ে নিতে পারেন: ঘরে ঢুকে নরম একটা কথা, সন্ধ্যায় একটু গল্প করার সময়, স্ত্রীর জন্য নিজেকে পরিপাটি রাখা, ঠিক যেমন নিজে তার কাছে তা চান, আর সামর্থ্য অনুযায়ী সংসারের খরচ, যেন তাকে বারবার চাইতে না হয়। এর কোনোটার জন্যই বড় কোনো সংকট লাগে না। আয়াতে বিল মা'রূফ বসবাস বলতে এগুলোই বোঝায়। আর এগুলোই সহজে বাদ পড়ে যায়, কারণ ঘরের বাইরের কেউ কখনো টেরও পায় না।"
          },
          {
            "en": "The prohibition has its application too. A widow can still find herself pressed by her late husband's family over whom she may marry or over the share she inherited, and a wife can be worn down until she gives up a dowry that is hers. Pressure of that kind, by silence, withholding or hardship, is what this verse describes and forbids, whatever name is given to it. Where there is a real dispute, the way forward lies with the law the Quran sets out and the scholars who explain it, not with quiet pressure at home.",
            "bn": "নিষেধেরও প্রয়োগ আছে। স্বামী মারা যাওয়ার পর কোনো বিধবা আজও শ্বশুরবাড়ির চাপে পড়তে পারেন: কাকে বিয়ে করবেন, বা মিরাসে পাওয়া অংশ নিয়ে। কোনো স্ত্রীকেও এমনভাবে ক্লান্ত করে ফেলা যায় যে তিনি নিজের পাওনা মোহর ছেড়ে দেন। চুপ থেকে, আটকে রেখে বা কষ্ট দিয়ে এ ধরনের চাপ, তার যে নামই দেওয়া হোক, এই আয়াত সেটারই বর্ণনা দিয়ে নিষেধ করেছে। সত্যিকারের বিরোধ থাকলে সমাধান কুরআনের দেওয়া বিধান আর তার ব্যাখ্যাকারী আলেমদের কাছে, ঘরের ভেতরের নীরব চাপে নয়।"
          },
          {
            "en": "For the season when affection has thinned, the hadith gives a practice. Write down the traits in her that you are pleased with, as the Prophet ﷺ said you will find them. Keep being kind while the feeling returns, not only after it has. Ask Allah to show you the good He may have placed in what you dislike. The verse does not promise that every hard marriage will turn sweet. It holds out the hope of much good, and the fuller law of what follows, from 4:20-21 onward, is there for the cases where the marriage cannot hold.",
            "bn": "যে সময়ে ভালোবাসা ফিকে হয়ে আসে, তার জন্য হাদীসটি একটা আমল দেয়। স্ত্রীর যে স্বভাবগুলোতে আপনি খুশি, সেগুলো লিখে ফেলুন, নবী ﷺ বলেছেন এমন স্বভাব আপনি পাবেন। শুধু অনুভূতি ফিরে আসার পরে নয়, ফিরে আসার সময়টাতেও ভালো ব্যবহার চালিয়ে যান। আল্লাহর কাছে চান, যা অপছন্দ করছেন তাতে তিনি যে কল্যাণ রেখেছেন তা যেন দেখান। আয়াত কথা দেয় না যে প্রতিটি কঠিন বিয়ে মধুর হয়ে উঠবে। আয়াত অনেক কল্যাণের আশা দেয়। আর যেখানে সংসার টেকে না, তার জন্য ৪:২০ ও ৪:২১ আয়াত থেকে শুরু করে পরের বিস্তারিত বিধান রয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Home",
          "bn": "ঘরের জন্য একটি দোয়া"
        },
        "p": [
          {
            "en": "The Quran itself gives a prayer for this. In 25:74 the servants of the Most Merciful say: our Lord, grant us from among our wives and offspring comfort to our eyes, and make us a leader for the righteous. It asks for a home that is a comfort to the eyes, and in the same breath it asks that the one praying become an example. A husband who wants the first has to work at the second, and the command to live in kindness is where that work begins.",
            "bn": "কুরআন নিজেই এর জন্য দোয়া দিয়েছে। ২৫:৭৪ আয়াতে রহমানের বান্দারা বলে: হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের দিয়ে আমাদের চোখ জুড়িয়ে দাও, আর আমাদের মুত্তাকীদের নেতা বানাও। দোয়াটা এমন একটা ঘর চায়, যা চোখ জুড়ায়। আর একই নিঃশ্বাসে চায়, দোয়াকারী নিজে আদর্শ হোক। প্রথমটা যে স্বামী চান, দ্বিতীয়টার জন্য তাকে খাটতে হয়। সদ্ভাবে বসবাসের আদেশ থেকেই সেই খাটুনি শুরু।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, make me one who lives with his family in kindness. Do not let me take from anyone by pressure what You have made theirs. When my heart dislikes a thing, show me the good You have placed in it, and give me patience until I see it. And make me good to my family, as Your Messenger ﷺ was the best of people to his.",
            "bn": "আয়াতের নিজের শব্দ থেকে একটি দোয়া, যা এখানে এভাবেই দেওয়া হলো, বর্ণিত কোনো দোয়া হিসেবে নয়: হে আল্লাহ, আমাকে এমন বানাও, যে পরিবারের সঙ্গে সদ্ভাবে বসবাস করে। তুমি যা কারও জন্য নির্ধারণ করেছ, চাপ দিয়ে তা কেড়ে নিতে আমাকে দিয়ো না। আমার মন কোনো কিছু অপছন্দ করলে, তাতে তুমি যে কল্যাণ রেখেছ তা আমাকে দেখাও, আর তা দেখা পর্যন্ত আমাকে সবর দাও। আর তোমার রাসূল ﷺ যেমন নিজের পরিবারের কাছে মানুষের মধ্যে সবচেয়ে উত্তম ছিলেন, আমাকেও আমার পরিবারের কাছে ভালো বানাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Ask at Home",
          "bn": "ঘরে বসে নিজেকে প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry from this passage. When my feelings toward someone in my home change, does my kindness change with them, or does it hold? Is there anyone, a wife, a mother, a widowed relative, from whom I or my family have taken something by pressure rather than by right? If my wife were asked for the kindest thing I did for her this week, would she have to think hard before she could answer?",
            "bn": "এই অংশ থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। ঘরের কারও প্রতি আমার অনুভূতি বদলে গেলে আমার ভালো ব্যবহারও কি বদলে যায়, নাকি টিকে থাকে? স্ত্রী, মা বা বিধবা কোনো আত্মীয়, এমন কেউ কি আছেন, যার কাছ থেকে আমি বা আমার পরিবার হক দিয়ে নয়, চাপ দিয়ে কিছু নিয়েছি? এই সপ্তাহে আমি তার জন্য সবচেয়ে ভালো কী করেছি, আমার স্ত্রীকে জিজ্ঞেস করলে উত্তর দিতে কি তাকে অনেক ভাবতে হবে?"
          },
          {
            "en": "Which trait in the person I find hardest to live with have I stopped noticing, because I only count what I dislike? And when I call my marriage a covenant, as 4:21 does, do I mean a promise made before Allah that I keep in lean seasons too, or only terms I am willing to keep for as long as they suit me?",
            "bn": "যার সঙ্গে থাকা আমার কাছে সবচেয়ে কঠিন, তার কোন ভালো স্বভাব আমার চোখে পড়া বন্ধ হয়ে গেছে, কারণ আমি শুধু অপছন্দের জিনিসগুলো গুনি? আর ৪:২১ আয়াতের মতো আমি যখন বিয়েকে অঙ্গীকার বলি, তখন কি বোঝাই আল্লাহর সামনে দেওয়া এমন ওয়াদা, যা কঠিন সময়েও রাখি, নাকি এমন শর্ত, যা সুবিধা থাকা পর্যন্তই মানি?"
          }
        ]
      }
    ]
  },
  "4:25": {
    "sections": [
      {
        "h": {
          "en": "The Man Without Means",
          "bn": "যার সামর্থ্য নেই"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and this part of it builds the law of marriage step by step. 4:22-23 name the women a man may never marry, and 4:24 adds women already married, then declares the rest lawful to those who seek them with their wealth, desiring chastity and not unlawful relations. That verse takes it for granted that the man has wealth to offer. Our verse turns at once to the man who does not, and asks what the law holds for him.",
            "bn": "সূরা নিসা মাদানি, আর সূরার এই অংশে বিয়ের বিধান ধাপে ধাপে গড়ে উঠছে। ৪:২২ ও ৪:২৩ আয়াত সেই নারীদের নাম বলে, যাদের কোনো পুরুষ কখনো বিয়ে করতে পারে না। ৪:২৪ আয়াত তাদের সঙ্গে যোগ করে অন্যের স্ত্রীদের, তারপর বাকিদের হালাল ঘোষণা করে তাদের জন্য, যারা নিজেদের সম্পদ দিয়ে তাদের বিয়ে করতে চায়, সতীত্ব রক্ষার জন্য, অবৈধ সম্পর্কের জন্য নয়। সে আয়াত ধরেই নেয় যে পুরুষটির দেওয়ার মতো সম্পদ আছে। আমাদের আয়াত সঙ্গে সঙ্গে তাকায় তার দিকে, যার তা নেই। তার জন্য আইনে কী রাখা আছে?"
          },
          {
            "en": "The verses that follow give the spirit of the passage. 4:26 says Allah wants to make things clear to you, to guide you to the ways of those before you and to accept your repentance, and 4:28 says Allah wants to lighten your burden, for mankind was created weak. This verse is one of those lightenings. It speaks into a society in which slavery was an existing institution, and it legislates for that society as it was. Ibn Kathir's commentary gives it no occasion of revelation, so it is read from its words and its place.",
            "bn": "পরের আয়াতগুলো গোটা অংশের মর্ম বলে দেয়। ৪:২৬ আয়াত বলে, আল্লাহ তোমাদের কাছে বিধান স্পষ্ট করতে চান, তোমাদের আগের লোকদের পথ দেখাতে চান, তোমাদের তওবা কবুল করতে চান। ৪:২৮ আয়াত বলে, আল্লাহ তোমাদের ভার হালকা করতে চান, কারণ মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে। এই আয়াত সেই ভার হালকা করারই একটি। যে সমাজে দাসপ্রথা তখন চালু ব্যবস্থা ছিল, আয়াত সেই সমাজকে সম্বোধন করে, আর সমাজটা যেমন ছিল তার জন্যই বিধান দেয়। ইবনে কাসীরের তাফসীরে এর কোনো শানে নুযূল নেই। তাই আয়াতকে পড়তে হয় তার শব্দ আর তার অবস্থান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Means, Fortresses, Young Women",
          "bn": "সামর্থ্য, দুর্গ, তরুণী"
        },
        "p": [
          {
            "en": "The verse opens with man lam yastati' minkum tawlan, whoever among you is not able in tawl. Tawl shares its root with the word for length, and it names an ampleness of means. Ibn Kathir explains it here as financial capability, the means to marry free believing women. His fuller commentary records that at-Tabari cited an early reading of tawl as desire and then rejected it. The verse is about what a man can afford, not about where his inclination runs.",
            "bn": "আয়াত শুরু হয় মান লাম ইয়াসতাতি' মিনকুম তাওলান দিয়ে, তোমাদের মধ্যে যার তাওল নেই। তাওল শব্দটা দৈর্ঘ্য বোঝানো শব্দের একই মূল থেকে এসেছে, এর মানে সামর্থ্যের প্রাচুর্য। ইবনে কাসীর এখানে এর ব্যাখ্যা করেছেন আর্থিক সামর্থ্য দিয়ে, অর্থাৎ স্বাধীন মুমিন নারীকে বিয়ে করার সংগতি। তাঁর বিস্তারিত তাফসীরে আছে, ইমাম তাবারী তাওলের একটি পুরোনো ব্যাখ্যা এনেছিলেন, যাতে এর মানে বলা হয়েছিল বাসনা। তারপর তিনি সে ব্যাখ্যা খণ্ডন করেন। আয়াতের কথা পুরুষটির সামর্থ্য নিয়ে, তার মন কোন দিকে টানে তা নিয়ে নয়।"
          },
          {
            "en": "Then one root runs through the verse. The letters h-s-n, whose noun hisn is a fortress, appear four times in its Arabic. Al-muhsanat al-mu'minat at the start are free believing women. Muhsanat in the middle describes the bondwomen themselves as chaste, and the verse spells out what that excludes: women who commit open fornication and women who take secret lovers. Fa-idha uhsinna, once they are married, uses the root again, and Ibn Kathir reports from Ibn Abbas (RA) that it means their marriage. The fourth occurrence returns to free women in the ruling on punishment.",
            "bn": "এরপর একটি মূল গোটা আয়াত জুড়ে চলে। হা-সোয়াদ-নূন, যার বিশেষ্য হিসন মানে দুর্গ, আরবি আয়াতে এসেছে চারবার। শুরুতে আল-মুহসানাতুল মু'মিনাত মানে স্বাধীন মুমিন নারী। মাঝখানে মুহসানাত বলা হয়েছে দাসীদেরই, অর্থাৎ তারা সচ্চরিত্রা হবে। আয়াত খুলে বলে দেয় এর বাইরে কারা: প্রকাশ্যে ব্যভিচারে লিপ্ত নারী আর গোপন প্রেমিক রাখা নারী। ফাইযা উহসিন্না, বিয়ে হয়ে যাওয়ার পর, সেখানে মূলটা আবার ফিরে আসে। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, এর মানে তাদের বিয়ে হয়ে যাওয়া। চতুর্থবার শব্দটা শাস্তির বিধানে আবার স্বাধীন নারীদের কথা বলে।"
          },
          {
            "en": "The bondwomen are called fatayatikum al-mu'minat, your believing young women. Fatat is the ordinary word for a young woman, and the Sunnah reaches for the same word. Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said that none of you should say my slave or my slave-girl, but should say my young man and my young woman. Whatever else the verse regulates, it speaks of the women concerned first as believers, in a word that carries no contempt.",
            "bn": "দাসীদের এখানে বলা হয়েছে ফাতায়াতিকুমুল মু'মিনাত, তোমাদের মুমিন তরুণীরা। ফাতাত সাধারণভাবে তরুণী বোঝানোর শব্দ, আর সুন্নাহও এই শব্দটাই বেছে নেয়। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, তোমাদের কেউ যেন আমার দাস, আমার দাসী না বলে, বরং বলে আমার যুবক, আমার তরুণী। আয়াত আর যা-ই নিয়ন্ত্রণ করুক, এই নারীদের কথা সে বলে আগে মুমিন হিসেবে, এমন এক শব্দে, যাতে তুচ্ছতার কোনো ছোঁয়া নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith Named Before Rank",
          "bn": "মর্যাদার আগে ঈমান"
        },
        "p": [
          {
            "en": "In the middle of the permission comes a sentence that is not a condition at all: wallahu a'lamu bi-imanikum, ba'dukum min ba'd, Allah is most knowing about your faith, you are of one another. Ibn Kathir explains that Allah knows the reality and the secrets of all things, while people know only what appears. He draws the practical point from the next clause. Give them their dowry with a good heart, he says, and do not hold any of it back, belittling the matter because they are owned.",
            "bn": "অনুমতির মাঝখানে এমন একটা বাক্য আসে, যা আসলে কোনো শর্তই নয়: ওয়াল্লাহু আ'লামু বিঈমানিকুম, বা'দুকুম মিম বা'দ, আল্লাহ তোমাদের ঈমান সবচেয়ে ভালো জানেন, তোমরা একে অন্যের থেকেই। ইবনে কাসীর ব্যাখ্যা করেন, সব কিছুর আসল অবস্থা আর গোপন কথা আল্লাহ জানেন, মানুষ জানে কেবল বাইরেরটুকু। এর বাস্তব দিকটা তিনি বের করেন পরের অংশ থেকে। তিনি বলেন, তাদের মোহর খুশিমনে দিয়ে দাও। তারা অন্যের মালিকানায় আছে বলে ব্যাপারটাকে ছোট করে দেখে তার কিছুই আটকে রেখো না।"
          },
          {
            "en": "Ibn Kathir then sets out the conditions as the verse gives them. With the permission of their people means, he says, that the owner is responsible for her, so she may not marry without his permission. She is to be chaste. If, once married, she commits indecency, her punishment is half that of free women, and he explains that this can only be a punishment that divides in half, which is flogging. The allowance, he adds, is for the man who fears for his chastity and finds restraint too hard.",
            "bn": "এরপর ইবনে কাসীর আয়াতে যেভাবে আছে, সেভাবেই শর্তগুলো সাজিয়ে দেন। তাদের অভিভাবকদের অনুমতি নিয়ে, এর মানে তিনি বলেন, দাসীর দায়িত্ব তার মালিকের, তাই মালিকের অনুমতি ছাড়া তার বিয়ে হতে পারে না। সে হবে সচ্চরিত্রা। বিয়ের পর যদি সে অশ্লীল কাজ করে, তাহলে তার শাস্তি স্বাধীন নারীদের অর্ধেক। ইবনে কাসীর ব্যাখ্যা করেন, এটা কেবল এমন শাস্তিই হতে পারে যা অর্ধেক করা যায়, অর্থাৎ বেত্রাঘাত। তিনি আরও বলেন, এই অনুমতি সেই পুরুষের জন্য, যে নিজের সতীত্ব নিয়ে ভয় পায় আর সংযম রাখা যার জন্য খুব কঠিন।"
          },
          {
            "en": "The commentators did not all read the conditions alike. Ibn Kathir records that the majority took two of them as binding: inability to marry a free woman, and fear of falling into sin. He records that Abu Hanifa and his companions held a wider view, and he says the outward sense of the verse supports the majority. On the closing counsel he gives a reason of that time: children born of such a marriage would belong to the woman's owner. This page records the difference and does not settle a ruling.",
            "bn": "শর্তগুলো সব মুফাসসির একইভাবে পড়েননি। ইবনে কাসীর উল্লেখ করেন, অধিকাংশ আলেম দুটো শর্তকে বাধ্যতামূলক ধরেছেন: স্বাধীন নারীকে বিয়ে করার অক্ষমতা, আর গুনাহে পড়ার ভয়। তিনি এটাও উল্লেখ করেন যে ইমাম আবু হানিফা ও তাঁর সঙ্গীরা আরও প্রশস্ত মত রাখতেন, আর তিনি নিজে বলেন, আয়াতের বাহ্যিক অর্থ অধিকাংশের মতকেই সমর্থন করে। শেষের পরামর্শের পেছনে তিনি সে যুগের একটা কারণ দেখান: এমন বিয়েতে জন্মানো সন্তান ওই নারীর মালিকের অধীন হতো। এই লেখা মতভেদটা শুধু তুলে ধরছে, কোনো ফতোয়ার মীমাংসা করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience, and a Shield",
          "bn": "সবর, আর একটা ঢাল"
        },
        "p": [
          {
            "en": "The verse closes: wa an tasbiru khayrun lakum, wallahu ghafurun rahim, and that you be patient is better for you, and Allah is Forgiving, Merciful. At-Tafsir al-Muyassar explains the patience meant here as holding back from marrying bondwomen while keeping chaste, and calls it the better and more virtuous course. It reads the closing names as mercy in the permission itself: Allah is forgiving and merciful to you in allowing such marriage when marrying a free woman is beyond you.",
            "bn": "আয়াত শেষ হয় এভাবে: ওয়া আন তাসবিরূ খাইরুল্লাকুম, ওয়াল্লাহু গাফূরুর রাহীম, আর ধৈর্য ধরা তোমাদের জন্য উত্তম, আল্লাহ ক্ষমাশীল, পরম দয়ালু। আত-তাফসীরুল মুয়াসসার বলে, এখানে ধৈর্য মানে সতীত্ব রক্ষা করে দাসী বিয়ে থেকে বিরত থাকা, আর একেই বলে উত্তম ও অধিক মর্যাদার পথ। শেষের নাম দুটোকে তাফসীরটি পড়ে অনুমতির ভেতরের রহমত হিসেবে। স্বাধীন নারীকে বিয়ে করা যখন সাধ্যের বাইরে, তখন এমন বিয়ের অনুমতি দেওয়াতেই আল্লাহ তোমাদের প্রতি ক্ষমাশীল ও দয়ালু।"
          },
          {
            "en": "The Sunnah speaks to the man in this verse in the same order. Al-Bukhari records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: O young men, whoever among you is able to marry, let him marry, for it lowers the gaze more and guards chastity more; and whoever is not able, let him fast, for it is a shield for him. Marriage comes first where it is possible. Where it is not, restraint is not left as bare waiting. It is given a practice that carries it.",
            "bn": "এই আয়াতের পুরুষটিকে সুন্নাহও একই ক্রমে কথা বলে। ইমাম বুখারী আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন: হে যুবকেরা, তোমাদের মধ্যে যার বিয়ের সামর্থ্য আছে, সে যেন বিয়ে করে, কারণ তা দৃষ্টিকে বেশি নত রাখে আর লজ্জাস্থানকে বেশি হেফাজত করে। আর যার সামর্থ্য নেই, সে যেন রোজা রাখে, কারণ রোজা তার জন্য ঢাল। যেখানে সম্ভব, সেখানে আগে বিয়ে। যেখানে সম্ভব নয়, সেখানে সংযমকে খালি অপেক্ষার ওপর ছেড়ে দেওয়া হয়নি। তাকে বয়ে নেওয়ার জন্য একটা আমল দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Quran Takes This Further",
          "bn": "কুরআন যেখানে কথাটা আরও এগিয়ে নেয়"
        },
        "p": [
          {
            "en": "24:32 commands the community to marry off the unmarried among them and the righteous among their male and female slaves, and promises that if they are poor Allah will enrich them from His bounty. 24:33 then gives the counsel of our verse's close to everyone: let those who find no means to marry keep chaste until Allah enriches them. The same verse orders a written contract of freedom for slaves who seek one, if there is good in them, and a gift toward it from Allah's wealth.",
            "bn": "২৪:৩২ আয়াত সমাজকে আদেশ দেয়, তোমাদের মধ্যে যারা অবিবাহিত তাদের বিয়ে দাও, আর তোমাদের সৎ দাস-দাসীদেরও। সঙ্গে প্রতিশ্রুতি দেয়, তারা গরিব হলে আল্লাহ নিজের অনুগ্রহে তাদের অভাবমুক্ত করবেন। এরপর ২৪:৩৩ আয়াত আমাদের আয়াতের শেষের পরামর্শটাই সবার জন্য বলে: যাদের বিয়ের সম্বল নেই, তারা যেন সংযম রাখে, যতক্ষণ না আল্লাহ তাদের অভাবমুক্ত করেন। একই আয়াত আদেশ দেয়, যে দাস-দাসী মুক্তির লিখিত চুক্তি চায়, তাদের মধ্যে কল্যাণ দেখলে তাদের সঙ্গে চুক্তি করো, আর আল্লাহর দেওয়া সম্পদ থেকে তাদের কিছু দাও।"
          },
          {
            "en": "2:221 had already said that a believing slave woman is better than a polytheist woman, even though the latter might please you, so faith outranks both freedom and attraction. 4:28, three verses on from ours, names the reason for allowances like this one: Allah wants to lighten your burden, and mankind was created weak. And 90:13 names the freeing of a slave as the first of the deeds that make up the steep path a person is urged to climb.",
            "bn": "২:২২১ আয়াত আগেই বলেছিল, মুমিন দাসী মুশরিক নারীর চেয়ে উত্তম, ওই নারীকে যতই ভালো লাগুক। অর্থাৎ ঈমান স্বাধীনতার চেয়েও ওপরে, আকর্ষণের চেয়েও ওপরে। আমাদের আয়াতের তিন আয়াত পরে ৪:২৮ আয়াত এ ধরনের ছাড়ের কারণটা বলে দেয়: আল্লাহ তোমাদের ভার হালকা করতে চান, আর মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে। আর ৯০:১৩ আয়াত দাসমুক্তিকে গোনে সেই দুর্গম গিরিপথের প্রথম কাজ হিসেবে, যা পার হতে মানুষকে ডাকা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wait Before Marriage",
          "bn": "বিয়ের আগের অপেক্ষা"
        },
        "p": [
          {
            "en": "The institution this verse regulates has passed out of most of the world, but the man it addresses has not. He wants to marry, he cannot yet afford it, and he fears for himself. The verse neither shames him nor leaves him to fall into what is unlawful. It looks for a lawful path within his means, and then it tells him, gently, that patience is better. A young person in that position today can take both halves: seek the lawful way that is truly within reach, and fill the wait with fasting, a lowered gaze and work toward the means.",
            "bn": "এই আয়াত যে ব্যবস্থার বিধান দেয়, পৃথিবীর বেশির ভাগ জায়গা থেকে তা উঠে গেছে। কিন্তু আয়াত যে পুরুষকে সম্বোধন করে, সে রয়ে গেছে। সে বিয়ে করতে চায়, এখনো সামর্থ্য নেই, আর নিজেকে নিয়ে ভয় পায়। আয়াত তাকে লজ্জা দেয় না, আবার হারামে পড়তেও ছেড়ে দেয় না। তার সাধ্যের মধ্যে একটা হালাল পথ খোঁজে, তারপর নরম সুরে বলে, সবরই ভালো। আজ এমন অবস্থায় থাকা তরুণ দুটো অংশই নিতে পারেন। যে হালাল পথ সত্যিই নাগালে, সেটা খুঁজুন। আর অপেক্ষাটা ভরিয়ে তুলুন রোজা, নত দৃষ্টি আর সামর্থ্য গড়ার পরিশ্রম দিয়ে।"
          },
          {
            "en": "The verse also has a word for the people around him. Its first question is about means, and 24:32 makes helping the unmarried to marry a duty of the community, not a private problem. A family that measures a proposal by lineage and display before faith has reversed the order of this verse, which named faith in the middle of a law about status. Whoever is asked to judge a match can ask the verse's own question first: what does this person carry of faith? Allah knows it best, but its signs can be seen.",
            "bn": "আশপাশের মানুষদের জন্যও আয়াতের কথা আছে। এর প্রথম প্রশ্ন সামর্থ্য নিয়ে, আর ২৪:৩২ আয়াত অবিবাহিতদের বিয়েতে সাহায্য করাকে কারও ব্যক্তিগত সমস্যা নয়, গোটা সমাজের দায়িত্ব বানিয়েছে। যে পরিবার বিয়ের প্রস্তাব মাপে আগে বংশ আর জাঁকজমক দিয়ে, ঈমান দিয়ে পরে, সে এই আয়াতের ক্রমটা উল্টে দিয়েছে। অথচ আয়াত মর্যাদা নিয়ে এক বিধানের ঠিক মাঝখানে ঈমানের নাম নিয়েছে। কোনো সম্বন্ধ বিচার করতে বলা হলে আগে আয়াতের নিজের প্রশ্নটাই করা যায়: এই মানুষটার ঈমান কেমন? তা সবচেয়ে ভালো জানেন আল্লাহ, তবে তার আলামত চোখে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Chastity and Sufficiency",
          "bn": "সতীত্ব আর সচ্ছলতার দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah holds a du'a that gathers the two needs of this verse, chastity and means. Muslim records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: Allahumma inni as'aluka al-huda wat-tuqa wal-'afafa wal-ghina, O Allah, I ask You for guidance, piety, chastity and sufficiency. The man of this verse lacked sufficiency and feared for his chastity. The Prophet ﷺ asked for both, and placed them after guidance and piety, which make both of them good.",
            "bn": "সুন্নাহয় এমন একটা দোয়া আছে, যাতে এই আয়াতের দুই প্রয়োজন একসঙ্গে আছে, সতীত্ব আর সামর্থ্য। ইমাম মুসলিম আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলতেন: আল্লাহুম্মা ইন্নী আসআলুকাল হুদা ওয়াত-তুকা ওয়াল-আফাফা ওয়াল-গিনা, হে আল্লাহ, আমি আপনার কাছে হিদায়াত, তাকওয়া, চারিত্রিক পবিত্রতা আর সচ্ছলতা চাই। এই আয়াতের পুরুষটির সচ্ছলতা ছিল না, আর সে নিজের সতীত্ব নিয়ে ভয় পাচ্ছিল। নবী ﷺ দুটোই চেয়েছেন, আর দুটোকে রেখেছেন হিদায়াত ও তাকওয়ার পরে, যা এ দুটোকে কল্যাণময় করে তোলে।"
          },
          {
            "en": "Alongside it, a short supplication composed in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, if You have delayed for me the means, give me the patience You called better; keep me chaste until You enrich me from Your bounty; let me weigh people by their faith, as You weigh them; and You are the Forgiving, the Merciful, so forgive what I fell short in while I waited.",
            "bn": "এর পাশাপাশি আয়াতের নিজের শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমার সামর্থ্য যদি আপনি দেরিতে দিতে চান, তাহলে আমাকে সেই সবর দিন, যাকে আপনি উত্তম বলেছেন। নিজের অনুগ্রহে অভাবমুক্ত না করা পর্যন্ত আমাকে পবিত্র রাখুন। আমাকে মানুষ মাপতে শেখান ঈমান দিয়ে, যেভাবে আপনি মাপেন। আর আপনি ক্ষমাশীল, পরম দয়ালু, তাই অপেক্ষার দিনগুলোতে আমার যা ত্রুটি হয়েছে তা মাফ করে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Waiting Season",
          "bn": "অপেক্ষার দিনের প্রশ্ন"
        },
        "p": [
          {
            "en": "What do I want that is lawful but not yet within my means, and am I waiting for it with patience or with resentment? When a shortcut is permitted, do I ever ask whether patience would be better for me, as this verse asks? What practice, like the fast the Prophet ﷺ prescribed, have I given my restraint to lean on, or have I left it to carry itself?",
            "bn": "এমন কী আমি চাই, যা হালাল, অথচ এখনো সামর্থ্যের বাইরে? আমি কি সবর নিয়ে তার জন্য অপেক্ষা করছি, নাকি ক্ষোভ নিয়ে? কোনো সহজ পথ জায়েজ থাকলে আমি কি কখনো জিজ্ঞেস করি, এই আয়াতের মতো, সবর করাই আমার জন্য ভালো হবে কি না? নবী ﷺ যেমন রোজার কথা বলেছেন, তেমন কোন আমলের ওপর আমি আমার সংযমকে ভর দিতে দিয়েছি? নাকি সংযমকে একাই নিজের ভার বইতে ছেড়ে দিয়েছি?"
          },
          {
            "en": "When I look at a person whose place in the world is lower than mine, do I remember that Allah knows best their faith and that we are of one another? Have I ever given someone less than their due, or given it grudgingly, because of who they are? And if I have a say in someone else's marriage, am I making the way easier for them, or harder than Allah has made it?",
            "bn": "দুনিয়ায় যার অবস্থান আমার চেয়ে নিচে, তার দিকে তাকালে কি মনে থাকে যে তার ঈমান আল্লাহই সবচেয়ে ভালো জানেন, আর আমরা একে অন্যের থেকেই? মানুষটা কে, তা দেখে কি কখনো কাউকে তার প্রাপ্যের চেয়ে কম দিয়েছি, কিংবা অখুশি মনে দিয়েছি? আর অন্য কারও বিয়েতে আমার যদি কোনো মত দেওয়ার থাকে, আমি কি তার পথ সহজ করছি, নাকি আল্লাহ যতটা রেখেছেন তার চেয়ে কঠিন করে তুলছি?"
          }
        ]
      }
    ]
  },
  "4:36": {
    "sections": [
      {
        "h": {
          "en": "Worship, Then Everyone Around You",
          "bn": "ইবাদত, তারপর চারপাশের সবাই"
        },
        "p": [
          {
            "en": "The verse opens with the two halves of tawhid: worship Allah, and associate nothing with Him. The word for nothing sits indefinite inside a negation, which in Arabic sweeps away every partner of every size. Then, with no break, comes wa bil-walidayni ihsana — and to parents, ihsan. A single preposition then runs on through the whole list that follows, so every group named after the parents hangs grammatically on that same word. Belief in One God is not left as a private conviction; it is turned straight into conduct.",
            "bn": "আয়াতটি শুরু হয় তাওহীদের দুই অর্ধেক দিয়ে: আল্লাহর ইবাদত করো, আর কোনো কিছুকেই তাঁর সাথে শরিক কোরো না। 'কোনো কিছু' শব্দটি নেতিবাচক বাক্যে অনির্দিষ্ট রূপে বসেছে, আর আরবিতে এই গঠন ছোট-বড় সব ধরনের শরিককেই একসাথে মুছে দেয়। এরপর কোনো বিরতি ছাড়াই আসে ওয়া বিল-ওয়ালিদাইনি ইহসানা — আর পিতামাতার প্রতি ইহসান। একটিমাত্র অব্যয় এরপর পুরো তালিকা জুড়ে চলতে থাকে, ফলে পিতামাতার পরে উল্লেখিত প্রতিটি শ্রেণি ব্যাকরণগতভাবে ওই একই শব্দের সাথে ঝুলে থাকে। এক আল্লাহর প্রতি ঈমান এখানে ব্যক্তিগত বিশ্বাস হয়ে পড়ে থাকে না; তা সরাসরি আচরণে রূপ নেয়।"
          },
          {
            "en": "Ihsan is not the same as justice. Justice, 'adl, hands a person exactly what is owed; ihsan goes past the debt, into kindness no one could have claimed. So the command is not merely that we deal fairly with the groups named here, which was required already, but that we deal with them beautifully. 16:90 sets the two words side by side, ordering justice and ihsan together and in that order.",
            "bn": "ইহসান আর ইনসাফ এক নয়। ইনসাফ বা 'আদল মানুষকে ঠিক ততটুকুই দেয় যতটুকু তার প্রাপ্য; ইহসান সেই প্রাপ্যের সীমা পেরিয়ে যায়, এমন সদয়তায় পৌঁছায় যা কেউ দাবি করতে পারত না। তাই আদেশটি কেবল এই নয় যে এখানে উল্লেখিত শ্রেণিগুলোর সাথে আমরা ন্যায়সঙ্গত আচরণ করব — সেটি তো আগে থেকেই আবশ্যক ছিল — বরং আদেশ হলো আমরা তাদের সাথে সুন্দর আচরণ করব। 16:90 আয়াতে শব্দ দুটিকে পাশাপাশি রাখা হয়েছে, ন্যায়বিচার ও ইহসানের আদেশ একসাথে এবং এই ক্রমেই এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nine Named, in Rings",
          "bn": "বৃত্ত ধরে ধরে নয়টি নাম"
        },
        "p": [
          {
            "en": "Count them in the Arabic and there are nine. Al-walidayn, the parents; dhu'l-qurba, the relatives; al-yatama, the orphans; al-masakin, the needy; al-jar dhi'l-qurba, the near neighbour; al-jar al-junub, the neighbour further off; as-sahib bi'l-janb, the companion at your side; ibn as-sabil, the traveller; and ma malakat aymanukum, those whom your right hands possess. The order moves outward in rings, from the two people who raised you to someone with no claim on you beyond the fact that he is standing there, before closing on the household.",
            "bn": "আরবিতে গুনে দেখলে সংখ্যাটি নয়। আল-ওয়ালিদাইন — পিতামাতা; যুল-কুরবা — আত্মীয়স্বজন; আল-ইয়াতামা — এতিমরা; আল-মাসাকীন — অভাবীরা; আল-জার যিল-কুরবা — নিকট প্রতিবেশী; আল-জার আল-জুনুব — দূরের প্রতিবেশী; আস-সাহিব বিল-জাম্ব — পাশের সঙ্গী; ইবনুস-সাবীল — পথিক; আর মা মালাকাত আইমানুকুম — তোমাদের অধিকারভুক্তরা। ক্রমটি বৃত্ত ধরে ধরে বাইরের দিকে যায় — যে দুজন আপনাকে বড় করেছেন তাঁদের থেকে শুরু করে এমন একজন পর্যন্ত, যার আপনার ওপর কোনো দাবিই নেই, কেবল এটুকু ছাড়া যে সে পাশে দাঁড়িয়ে আছে; আর শেষ হয় ঘরের অধিকারভুক্তদের দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Neighbour Gets Two Places",
          "bn": "প্রতিবেশী কেন দুবার এল"
        },
        "p": [
          {
            "en": "Neighbours are the only group given two separate phrases. The commentators record more than one way of dividing them: that al-jar dhi'l-qurba is the neighbour who is also a relative while al-jar al-junub is the one who is a stranger, and that the first means the door beside yours while the second means the houses further down the street. Either way the verse refuses to let the word neighbour shrink to the neighbours we already like.",
            "bn": "প্রতিবেশীই একমাত্র শ্রেণি যাদের জন্য দুটি আলাদা বাক্যাংশ এসেছে। মুফাসসিরগণ এই দুটিকে ভাগ করার একাধিক পদ্ধতি বর্ণনা করেন: আল-জার যিল-কুরবা হলো সেই প্রতিবেশী যে আত্মীয়ও, আর আল-জার আল-জুনুব হলো যে আত্মীয় নয়; অথবা প্রথমটি বোঝায় আপনার ঠিক পাশের দরজা, আর দ্বিতীয়টি বোঝায় রাস্তার আরও দূরের বাড়িগুলো। যেভাবেই পড়ুন, আয়াতটি 'প্রতিবেশী' শব্দটিকে কেবল আমাদের পছন্দের প্রতিবেশীদের মধ্যে সংকুচিত হতে দেয় না।"
          },
          {
            "en": "The sunnah presses the same point hard. Al-Bukhari relates from Ibn Umar (RA) that the Prophet ﷺ said Jibril kept urging him about the neighbour until he thought the neighbour would be given a share of inheritance. Al-Bukhari also relates from Abu Shurayh (RA) that the Prophet ﷺ swore three times that a man does not believe, and when asked who, answered: the one whose neighbour is not safe from his harm. A neighbour is chosen by nobody and owed by everybody.",
            "bn": "সুন্নাহ এই কথাটির ওপরই জোর দেয়। ইমাম বুখারী ইবনে উমার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: জিবরীল প্রতিবেশীর ব্যাপারে আমাকে এত বেশি অসিয়ত করতে থাকলেন যে আমার মনে হলো প্রতিবেশীকে উত্তরাধিকারের অংশ দিয়ে দেওয়া হবে। ইমাম বুখারী আবু শুরাইহ (রাঃ) থেকেও বর্ণনা করেন যে নবী ﷺ তিনবার শপথ করে বললেন, সে ঈমানদার নয়; জিজ্ঞেস করা হলে কে, তিনি বললেন: যার প্রতিবেশী তার অনিষ্ট থেকে নিরাপদ নয়। প্রতিবেশী কেউ বেছে নেয় না, অথচ তার হক সবার ওপরই বর্তায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones Easiest to Overlook",
          "bn": "যাদের সহজেই চোখ এড়িয়ে যায়"
        },
        "p": [
          {
            "en": "As-sahib bi'l-janb is the companion at your side, and the commentators give the phrase a wide range: the wife, the travelling companion, the person who happens to be sitting next to you. What they share is nearness without any formal claim. Ibn as-sabil, literally the son of the road, is the traveller cut off from his own resources — a stranger you will most likely never meet again, which is precisely why the verse names him.",
            "bn": "আস-সাহিব বিল-জাম্ব মানে পাশের সঙ্গী, আর মুফাসসিরগণ এই বাক্যাংশটিকে বেশ প্রশস্ত অর্থ দেন: স্ত্রী, সফরসঙ্গী, কিংবা যে ব্যক্তি ঘটনাচক্রে আপনার পাশে বসেছে। এদের সবার মধ্যে মিল একটাই — নৈকট্য আছে, কিন্তু আনুষ্ঠানিক কোনো দাবি নেই। ইবনুস-সাবীল, আক্ষরিক অর্থে 'পথের সন্তান', হলো সেই পথিক যে নিজের সম্বল থেকে বিচ্ছিন্ন — এমন এক অচেনা মানুষ যার সাথে সম্ভবত আর কখনোই দেখা হবে না, আর ঠিক এ কারণেই আয়াতটি তার নাম নেয়।"
          },
          {
            "en": "The list closes with those whom your right hands possess. Al-Bukhari relates from Abu Dharr (RA) that the Prophet ﷺ described them as brothers whom Allah has placed under our hand, and instructed that whoever has such a brother under his hand should feed him from what he eats and clothe him from what he wears, and not burden him beyond his strength. Abu Dawud relates from Ali (RA) that among the last counsels of the Prophet ﷺ were the prayer, and those whom your right hands possess.",
            "bn": "তালিকাটি শেষ হয় তাদের দিয়ে যারা তোমাদের অধিকারভুক্ত। ইমাম বুখারী আবু যার (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ তাদের বর্ণনা করেছেন আমাদের ভাই হিসেবে, যাদের আল্লাহ আমাদের হাতের নিচে রেখেছেন; আর তিনি নির্দেশ দিয়েছেন, যার হাতের নিচে এমন ভাই আছে সে যেন তাকে নিজে যা খায় তা থেকে খাওয়ায় এবং নিজে যা পরে তা থেকে পরায়, আর সাধ্যের বাইরে বোঝা না চাপায়। আবু দাউদ আলী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ-এর শেষ অসিয়তগুলোর মধ্যে ছিল নামায, আর তোমাদের অধিকারভুক্তরা।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Ends With Pride",
          "bn": "শেষটা অহংকার দিয়ে কেন"
        },
        "p": [
          {
            "en": "The verse closes on what looks at first like a change of subject: Allah does not love the one who is mukhtal fakhur. Mukhtal comes from khuyala', self-delusion, and describes a bearing, the swagger of a man impressed with himself. Fakhur is the boaster, who needs an audience to hear about it. One word faces inward and one faces outward, and between them they explain why the nine claims above go unmet. A man too pleased with himself does not notice a neighbour.",
            "bn": "আয়াতটি এমন কিছু দিয়ে শেষ হয় যা প্রথম দেখায় প্রসঙ্গান্তর মনে হয়: আল্লাহ সেই ব্যক্তিকে ভালোবাসেন না যে মুখতাল ও ফাখূর। 'মুখতাল' এসেছে খুয়ালা অর্থাৎ আত্মমুগ্ধতা থেকে, আর এটি একটি ভঙ্গির বর্ণনা — নিজেকে নিয়ে মুগ্ধ মানুষের দম্ভিত চলন। 'ফাখূর' হলো সেই অহংকারী যার শোনানোর জন্য শ্রোতা দরকার। একটি শব্দ ভেতরের দিকে তাকায়, অন্যটি বাইরের দিকে, আর দুটি মিলে ব্যাখ্যা করে উপরে উল্লেখিত নয়টি হক কেন অপূর্ণ থেকে যায়। নিজেকে নিয়ে অতিরিক্ত তৃপ্ত মানুষ প্রতিবেশীকে চোখেই দেখে না।"
          },
          {
            "en": "The verses that follow confirm the link. 4:37 describes those who are stingy, who order stinginess on others, and who conceal what Allah gave them of His bounty, and 4:38 adds those who spend only to be seen by people. Arrogance, meanness and display are handled as one illness with three symptoms. The same pair of words, mukhtal fakhur, appears inside the counsel of Luqman at 31:18 and returns in 57:23 about not exulting over what you were given.",
            "bn": "পরের আয়াতগুলো এই সম্পর্কটিই নিশ্চিত করে। 4:37 আয়াতে বর্ণিত হয়েছে তারা, যারা কৃপণতা করে, অন্যদেরও কৃপণতার আদেশ দেয়, এবং আল্লাহ নিজ অনুগ্রহে তাদের যা দিয়েছেন তা গোপন করে; আর 4:38 আয়াতে যোগ হয় তারা, যারা কেবল লোক-দেখানোর জন্য ব্যয় করে। অহংকার, কার্পণ্য ও লোকদেখানো — তিনটিকে একই রোগের তিন উপসর্গ হিসেবে দেখা হয়েছে। এই একই শব্দজোড়া, মুখতাল ফাখূর, লুকমানের উপদেশের ভেতরে 31:18 আয়াতে এসেছে, আর ফিরে আসে 57:23 আয়াতে — যা দেওয়া হয়েছে তা নিয়ে উৎফুল্ল না হওয়ার প্রসঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Working Through the Rings",
          "bn": "বৃত্তগুলো ধরে ধরে চলা"
        },
        "p": [
          {
            "en": "The verse turns easily into an audit. Take the nine in order and ask, for each ring, when you last did something for someone in it that was not owed. Most people find the gap is in the middle rings: the neighbour still unnamed after four years, the colleague at the next desk, the person who works in the house. They are named because they are the easiest to step past.",
            "bn": "আয়াতটি সহজেই একটি আত্মপর্যালোচনার তালিকায় পরিণত হয়। নয়টি শ্রেণিকে ক্রমানুসারে নিন এবং প্রতিটি বৃত্ত সম্পর্কে জিজ্ঞেস করুন — শেষ কবে আপনি সেই বৃত্তের কারও জন্য এমন কিছু করেছেন যা আপনার ওপর বাধ্যতামূলক ছিল না। বেশির ভাগ মানুষ দেখতে পান, ঘাটতিটা মাঝের বৃত্তগুলোতে: চার বছর পরেও যে প্রতিবেশীর নাম জানা হয়নি, পাশের ডেস্কের সহকর্মী, ঘরে যিনি কাজ করেন। তাদের নাম এসেছে কারণ এদেরই পাশ কাটানো সবচেয়ে সহজ।"
          }
        ]
      }
    ]
  },
  "4:38-40": {
    "sections": [
      {
        "h": {
          "en": "After the Misers, the Performers",
          "bn": "কৃপণদের পরে প্রদর্শনকারীরা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan. 4:36 commands the worship of Allah alone and good treatment of parents, relatives, orphans, the needy, neighbours near and far, the companion at one's side, the traveller and those under one's hand, and it closes by saying that Allah does not like the self-deluding and boastful. 4:37 describes those who are stingy, who order stinginess on others and who conceal what Allah gave them of His bounty. Our passage begins at 4:38 with a second failure, one that looks at first like the opposite of the first.",
            "bn": "সূরা নিসা মাদানি। ৪:৩৬ আয়াত আদেশ দেয় একমাত্র আল্লাহর ইবাদতের, আর বাবা-মা, আত্মীয়, ইয়াতিম, অভাবী, কাছের ও দূরের প্রতিবেশী, পাশের সঙ্গী, মুসাফির আর অধীনস্থদের সঙ্গে সদ্ব্যবহারের। আয়াত শেষ হয় এই কথায় যে, আল্লাহ অহংকারী, দাম্ভিককে পছন্দ করেন না। ৪:৩৭ আয়াত বলে তাদের কথা, যারা কৃপণতা করে, মানুষকেও কৃপণ হতে বলে, আর আল্লাহ নিজের অনুগ্রহে যা দিয়েছেন তা লুকিয়ে রাখে। আমাদের অংশ ৪:৩৮ আয়াতে শুরু হয় দ্বিতীয় এক ব্যর্থতা দিয়ে, যা প্রথম দেখায় আগেরটার ঠিক উল্টো মনে হয়।"
          },
          {
            "en": "Ibn Kathir notices the order. Allah first mentions the misers who do not spend, he says, and then those who spend to show off, to gain a name for generosity and not for the face of Allah. 4:39 then asks what those spenders would have lost by believing, and 4:40 answers the fear that sits behind the question. After it, 4:41 turns to the Day when a witness is brought from every nation. Ibn Kathir gives these verses no occasion of revelation, and they are read in this sequence.",
            "bn": "ইবনে কাসীর এই ক্রমটা লক্ষ করেন। তিনি বলেন, আল্লাহ প্রথমে সেই কৃপণদের কথা বলেছেন, যারা খরচই করে না। তারপর বলেছেন তাদের কথা, যারা খরচ করে লোক দেখাতে, দানশীল নাম কামাতে, আল্লাহর সন্তুষ্টির জন্য নয়। এরপর ৪:৩৯ আয়াত জিজ্ঞেস করে, ঈমান আনলে এই খরচকারীদের কী হারাতে হতো। আর ৪:৪০ আয়াত জবাব দেয় সেই ভয়ের, যা প্রশ্নটার পেছনে লুকিয়ে আছে। তার পরে ৪:৪১ আয়াত ফিরে যায় সেই দিনের দিকে, যেদিন প্রত্যেক উম্মত থেকে একজন সাক্ষী আনা হবে। ইবনে কাসীর এই আয়াতগুলোর কোনো শানে নুযূল উল্লেখ করেননি, তাই এগুলো পড়তে হয় এই ধারাবাহিকতার ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Yoked, Weighed",
          "bn": "দেখানো, জুড়ে থাকা, ওজন"
        },
        "p": [
          {
            "en": "The spending of 4:38 is ri'a'a an-nas, for the seeing of people. Ri'a' comes from the root r-'-y, to see, and it names a deed shown so that others will see it. The fault is not that a gift is visible, since 2:271 calls disclosed charity good and concealed charity better. The fault is whom the gift is addressed to. The verse ties it at once to a missing belief: they do not believe in Allah or in the Last Day. Whoever expects no Last Day has only people left to pay him.",
            "bn": "৪:৩৮ আয়াতের খরচটা রিআআন নাস, মানুষকে দেখানোর জন্য। রিয়া শব্দটা এসেছে রা-হামযা-ইয়া মূল থেকে, যার মানে দেখা। রিয়া মানে এমন আমল, যা করা হয় অন্যরা দেখবে বলে। দান চোখে পড়াটা দোষ নয়, কারণ ২:২৭১ আয়াত প্রকাশ্য দানকে বলেছে ভালো, গোপন দানকে আরও ভালো। দোষ হলো দানটা কাকে উদ্দেশ করে দেওয়া হচ্ছে। আয়াত সঙ্গে সঙ্গে একে বেঁধে দেয় একটা অনুপস্থিত বিশ্বাসের সঙ্গে: তারা আল্লাহ ও আখিরাতে ঈমান রাখে না। যে শেষ দিবসের আশাই রাখে না, তার পাওনা মেটানোর জন্য মানুষ ছাড়া আর কেউ থাকে না।"
          },
          {
            "en": "Then: wa man yakun ash-shaytanu lahu qarinan fa-sa'a qarina, and whoever has Satan as a qarin, then evil is he as a qarin. Qarin comes from the root q-r-n, joining one thing to another, and the lexicons use it for the companion bound at a person's side, the way a single rope can tie two camels together. The word comes twice within a few words. The first time it names the bond, and the second time it passes the verdict on it.",
            "bn": "তারপর: ওয়া মাই ইয়াকুনিশ শাইতানু লাহু কারীনান ফাসাআ কারীনা, আর শয়তান যার কারীন, সে কারীন হিসেবে কতই না নিকৃষ্ট! কারীন শব্দের মূল কাফ-রা-নূন, অর্থ এক জিনিসকে আরেক জিনিসের সঙ্গে জুড়ে দেওয়া। অভিধানে শব্দটা ব্যবহার হয় মানুষের পাশে বাঁধা হয়ে থাকা সঙ্গীর জন্য, যেমন এক দড়িতে দুটো উট একসঙ্গে বাঁধা থাকে। অল্প কয়েকটা শব্দের মধ্যে কারীন এসেছে দুবার। প্রথমবার শব্দটা বন্ধনের নাম বলে, দ্বিতীয়বার সেই বন্ধনের ওপর রায় দেয়।"
          },
          {
            "en": "4:39 opens with a rhetorical question, wa madha 'alayhim, and what would have been upon them? What burden would belief and spending from Allah's provision have laid on them? The question answers itself. 4:40 then speaks of mithqal dharrah, the weight of a dharrah, which Ibn Kathir glosses as a speck of dust, and goes on: if it is a good deed He multiplies it, and gives min ladunhu, from His own presence, a great reward. At-Tafsir al-Muyassar reads that last phrase as a further favour added on top of the multiplying.",
            "bn": "৪:৩৯ আয়াত শুরু হয় একটা অলংকারপূর্ণ প্রশ্ন দিয়ে, ওয়া মাযা আলাইহিম, তাদের ওপর কী চাপত? ঈমান আনা আর আল্লাহর দেওয়া রিজিক থেকে খরচ করা তাদের ওপর কোন বোঝা চাপাত? প্রশ্নটার জবাব প্রশ্নের ভেতরেই আছে। এরপর ৪:৪০ আয়াত বলে মিসকালা যাররাহর কথা, এক যাররাহর ওজন। ইবনে কাসীর যাররাহর ব্যাখ্যা দিয়েছেন ধূলিকণা দিয়ে। আয়াত আরও বলে, নেক কাজ হলে তিনি তা বহুগুণ করেন, আর মিল্লাদুনহু, নিজের কাছ থেকে দেন বিরাট প্রতিদান। আত-তাফসীরুল মুয়াসসার শেষ কথাটা পড়ে বহুগুণ করার ওপরে বাড়তি অনুগ্রহ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Read It",
          "bn": "মুফাসসিররা যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "On 4:38 Ibn Kathir says that it is Satan who lured such people into this evil in place of doing the good deed as it should be done. Satan encouraged them, stirred them and drew them on by making the evil look good, and that is the companionship the verse condemns. At-Tafsir al-Muyassar adds precision to the phrase about belief: they do not believe in Allah and the Day of Resurrection in conviction and in practice, and these bad deeds are among the things Satan calls to.",
            "bn": "৪:৩৮ আয়াত প্রসঙ্গে ইবনে কাসীর বলেন, শয়তানই এই লোকদের এই মন্দ কাজে টেনে এনেছে, নেক কাজটা যেভাবে করা উচিত সেভাবে করার বদলে। শয়তান তাদের উৎসাহ দিয়েছে, উসকে দিয়েছে, মন্দকে সুন্দর করে দেখিয়ে টেনে নিয়ে গেছে। আয়াত যে সঙ্গের নিন্দা করে, সেটা এই সঙ্গই। আত-তাফসীরুল মুয়াসসার ঈমানের কথাটা আরও স্পষ্ট করে। তারা আল্লাহ আর কিয়ামতের দিনে ঈমান রাখে না, বিশ্বাসেও না, আমলেও না। আর এই মন্দ কাজগুলো সেসব জিনিসের মধ্যে পড়ে, যেদিকে শয়তান ডাকে।"
          },
          {
            "en": "On 4:39 Ibn Kathir asks the verse's question in plain words: what harm would it do them to believe in Allah, walk the righteous path, replace showing off with sincerity, and wait for His promise in the Hereafter? The closing words, and Allah is ever Knowing of them, he explains as His complete knowledge of their intentions, good or evil. Al-Muyassar describes the spending the verse wanted from them as spending in hope of Allah's reward and with sincerity, and adds that Allah will call them to account.",
            "bn": "৪:৩৯ আয়াত প্রসঙ্গে ইবনে কাসীর আয়াতের প্রশ্নটাই সহজ ভাষায় করেন: আল্লাহর ওপর ঈমান আনলে, সৎ পথে চললে, লোক দেখানোর জায়গায় ইখলাস আনলে, আর আখিরাতে তাঁর প্রতিশ্রুতির অপেক্ষা করলে তাদের কী ক্ষতি হতো? শেষের কথা, আল্লাহ তাদের সম্পর্কে ভালোভাবে জানেন, এর ব্যাখ্যায় তিনি বলেন, তাদের নিয়ত ভালো হোক বা মন্দ, আল্লাহ তা পুরোপুরি জানেন। মুয়াসসার বলে, আয়াত তাদের কাছে যে খরচ চেয়েছিল তা আল্লাহর কাছে সওয়াবের আশায় আর ইখলাসের সঙ্গে খরচ। সঙ্গে যোগ করে, আল্লাহ তাদের হিসাব নেবেন।"
          },
          {
            "en": "On 4:40 Ibn Kathir says that Allah does not wrong any of His servants on the Day of Resurrection by the weight of a mustard seed or a speck of dust, and that He rewards a good deed and multiplies it. For the great reward from His own presence he reports, from Abu Hurayrah (RA), Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah and ad-Dahhak, that it means Paradise, and al-Muyassar names Paradise too.",
            "bn": "৪:৪০ আয়াত প্রসঙ্গে ইবনে কাসীর বলেন, কিয়ামতের দিন আল্লাহ তাঁর কোনো বান্দার ওপর সরিষার দানা বা ধূলিকণা পরিমাণও জুলুম করবেন না, বরং নেক কাজের প্রতিদান দেবেন আর তা বহুগুণ করবেন। নিজের কাছ থেকে দেওয়া বিরাট প্রতিদান সম্পর্কে তিনি আবু হুরাইরা (রাঃ), ইকরিমা, সাঈদ ইবনে জুবাইর, হাসান বসরী, কাতাদা ও দাহহাক থেকে বর্ণনা করেন যে এর মানে জান্নাত। মুয়াসসারও জান্নাতের নাম নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "It Was Said, and a Speck Remained",
          "bn": "বলা হয়েছে, আর এক কণা রয়ে গেছে"
        },
        "p": [
          {
            "en": "Ibn Kathir brings under these verses the hadith of the first people to be judged, which Muslim records from Abu Hurayrah (RA). Among them is a man to whom Allah gave wealth of every kind. He is asked what he did with it and says he left no path in which Allah loves spending without spending in it. He is told that he lied: he did it so that it would be said he is generous, and it was said. The man wanted to be spoken of, he was spoken of, and nothing was left owing to him.",
            "bn": "ইবনে কাসীর এই আয়াতগুলোর অধীনে সেই হাদীস আনেন, যাতে সবার আগে বিচার হওয়া লোকদের কথা আছে। ইমাম মুসলিম হাদীসটি আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন। তাদের একজন এমন মানুষ, যাকে আল্লাহ সব রকম সম্পদ দিয়েছিলেন। তাকে জিজ্ঞেস করা হয়, সম্পদ দিয়ে কী করেছে। সে বলে, আল্লাহ যে পথে খরচ ভালোবাসেন, এমন কোনো পথ সে বাদ রাখেনি। তাকে বলা হয়, তুমি মিথ্যা বলেছ। তুমি এসব করেছ যাতে বলা হয় তুমি দানশীল, আর তা বলা হয়েছে। লোকটা চেয়েছিল মানুষ তার কথা বলুক, মানুষ বলেছে, তার আর কোনো পাওনা বাকি থাকেনি।"
          },
          {
            "en": "On the other side of the scale, Ibn Kathir cites from the two Sahihs the long hadith of intercession narrated by Abu Sa'id al-Khudri (RA). In it the believers are sent back again and again to bring out of the Fire whoever has in his heart even the smallest weight of faith, and they bring out many. Abu Sa'id then told his listeners that they could recite, if they wished, 4:40: Allah does not do injustice even as much as an atom's weight. What is given for Allah is never too small to be found.",
            "bn": "পাল্লার অন্য দিকে, ইবনে কাসীর দুই সহীহ গ্রন্থ থেকে আবু সাঈদ খুদরী (রাঃ)-এর বর্ণিত শাফাআতের দীর্ঘ হাদীস উল্লেখ করেন। তাতে মুমিনদের বারবার ফেরত পাঠানো হয়, যার অন্তরে সামান্যতম ওজনের ঈমানও আছে, তাকে জাহান্নাম থেকে বের করে আনতে। তারা বহু মানুষকে বের করে আনেন। এরপর আবু সাঈদ (রাঃ) শ্রোতাদের বললেন, চাইলে তোমরা ৪:৪০ আয়াত পড়ো: আল্লাহ অণু পরিমাণও জুলুম করেন না। আল্লাহর জন্য যা দেওয়া হয়, তা এত ছোট হয় না যে খুঁজে পাওয়া যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rock, the Prayer, the Companion",
          "bn": "পাথর, নামাজ, সঙ্গী"
        },
        "p": [
          {
            "en": "2:264 draws the one who spends his wealth to be seen by people and does not believe in Allah and the Last Day as a smooth rock under a thin coat of soil, which a heavy rain leaves bare. The words match 4:38 closely, and the picture shows what the performance comes to. 107:4-6 carry the same illness into worship: woe to those who pray, who are heedless of their prayer, those who make show. Display can spoil a prayer as surely as it spoils a gift.",
            "bn": "২:২৬৪ আয়াত যে মানুষ লোক দেখানোর জন্য সম্পদ খরচ করে আর আল্লাহ ও আখিরাতে ঈমান রাখে না, তাকে তুলনা করে পাতলা মাটির আস্তরণে ঢাকা মসৃণ পাথরের সঙ্গে, যাকে প্রবল বৃষ্টি ধুয়ে খালি করে দেয়। শব্দগুলো ৪:৩৮ আয়াতের খুব কাছাকাছি, আর ছবিটা দেখিয়ে দেয় এই প্রদর্শনের শেষ পরিণতি কী। ১০৭:৪ থেকে ১০৭:৬ আয়াত একই রোগ নিয়ে যায় ইবাদতে: দুর্ভোগ সেই নামাজিদের, যারা নামাজের ব্যাপারে উদাসীন, যারা লোক দেখানোর জন্য করে। দানকে যেমন লোক দেখানো নষ্ট করে, নামাজকেও তেমনই।"
          },
          {
            "en": "43:36 shows how such a companion is acquired: whoever is blinded from the remembrance of the Most Merciful, We appoint for him a devil, and he is to him a companion. 43:38 shows the end of it, when the man says he wishes there were between them the distance of the east and the west, and what a wretched companion. 50:27 has the companion disown him: our Lord, I did not make him transgress. And 99:7-8 apply the scale of 4:40 to everyone: an atom's weight of good will be seen, and an atom's weight of evil.",
            "bn": "এমন সঙ্গী কীভাবে জোটে, ৪৩:৩৬ আয়াত তা দেখায়: যে দয়াময়ের জিকির থেকে মুখ ফিরিয়ে নেয়, আমি তার জন্য এক শয়তান নিয়োজিত করি, সে হয় তার সঙ্গী। ৪৩:৩৮ আয়াত দেখায় এর শেষ, যখন লোকটা বলবে, হায়, আমার আর তোমার মাঝে যদি পূর্ব আর পশ্চিমের দূরত্ব থাকত! কতই না নিকৃষ্ট সঙ্গী! ৫০:২৭ আয়াতে সেই সঙ্গীই তাকে অস্বীকার করে: হে আমাদের রব, আমি তাকে বিদ্রোহী বানাইনি। আর ৯৯:৭ ও ৯৯:৮ আয়াত ৪:৪০ আয়াতের পাল্লা সবার ওপর খাটায়: অণু পরিমাণ ভালো কাজও দেখা যাবে, অণু পরিমাণ মন্দ কাজও।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving to the Right Address",
          "bn": "ঠিক ঠিকানায় দান"
        },
        "p": [
          {
            "en": "The verse does not forbid being seen giving. 35:29 praises those who spend secretly and publicly, and a public campaign for a well or a hospital may need names and numbers. What the verse forbids is giving addressed to people. A simple test: before any gift, ask whether the amount, or the recipient, would change if no one were ever to know. Where the answer is yes, move part of that giving into secret, where only Allah can be its audience, and keep it there.",
            "bn": "দান করতে গিয়ে চোখে পড়াকে আয়াত নিষেধ করে না। ৩৫:২৯ আয়াত প্রশংসা করে তাদের, যারা গোপনে ও প্রকাশ্যে খরচ করে। কুয়া বা হাসপাতালের জন্য প্রকাশ্য উদ্যোগে নাম আর অঙ্কের দরকারও হতে পারে। আয়াত নিষেধ করে সেই দান, যা মানুষকে উদ্দেশ করে দেওয়া। সহজ একটা পরীক্ষা আছে। কোনো দানের আগে নিজেকে জিজ্ঞেস করুন, কেউ কোনো দিন না জানলে পরিমাণ বা যাকে দিচ্ছেন সে কি বদলে যেত? উত্তর হ্যাঁ হলে সেই দানের একটা অংশ গোপনে সরিয়ে নিন, যেখানে একমাত্র আল্লাহই দেখছেন, আর সেটা গোপনই রাখুন।"
          },
          {
            "en": "Fear of display must not become a reason to stop giving. An-Nawawi records the saying of al-Fudayl ibn Iyad: leaving a deed because of people is showing off, doing a deed for people is shirk, and sincerity is that Allah frees you from both. So the cure is not to give less but to give for the right One. And watch the company you keep. Voices, circles and feeds that reward every good deed with applause work like the qarin of this verse, turning deeds toward the crowd.",
            "bn": "লোক দেখানোর ভয় যেন দান বন্ধ করার অজুহাত না হয়ে যায়। ইমাম নববী ফুদাইল ইবনে ইয়াদের একটি কথা উল্লেখ করেছেন: মানুষের কারণে আমল ছেড়ে দেওয়া রিয়া, মানুষের জন্য আমল করা শিরক, আর ইখলাস হলো আল্লাহ আপনাকে এ দুটো থেকেই মুক্ত রাখেন। তাই চিকিৎসা কম দেওয়া নয়, ঠিক সত্তার জন্য দেওয়া। আর কাদের সঙ্গে ওঠাবসা করছেন, সেদিকে খেয়াল রাখুন। যেসব কণ্ঠ, আসর আর ফিড প্রতিটি ভালো কাজের জবাব দেয় হাততালি দিয়ে, সেগুলো এই আয়াতের কারীনের মতোই কাজ করে, আমলের মুখ ঘুরিয়ে দেয় ভিড়ের দিকে।"
          },
          {
            "en": "4:40 also speaks to the opposite discouragement, the feeling that one's gift is too small to matter. An atom's weight of good is not lost, and a small deed given for Allah can be multiplied beyond what it was. The coin given quietly to a neighbour, the unseen hour of help, the transfer no one else will ever read about: each is a deed the verse promises will be found and increased by the One who wrongs no one.",
            "bn": "উল্টো দিকের হতাশাকেও ৪:৪০ আয়াত জবাব দেয়, এই ধারণাকে যে আমার দান এত ছোট যে কোনো দাম নেই। অণু পরিমাণ ভালো কাজও হারায় না, আর আল্লাহর জন্য দেওয়া ছোট আমলও তার আসল পরিমাণ ছাড়িয়ে বহুগুণ হতে পারে। প্রতিবেশীকে চুপচাপ দেওয়া কয়েকটা টাকা, কারও চোখে না পড়া এক ঘণ্টার সাহায্য, এমন একটা লেনদেন যার কথা আর কেউ কখনো পড়বে না, এর প্রতিটি সেই আমল, যা খুঁজে পাওয়া যাবে আর বাড়ানো হবে বলে আয়াত কথা দেয়। কথা দেন সেই সত্তা, যিনি কারও ওপর জুলুম করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Our Lord, Accept From Us",
          "bn": "হে আমাদের রব, কবুল করুন"
        },
        "p": [
          {
            "en": "The passage is warning and promise rather than supplication, so the du'a here is taken from elsewhere in the Quran. In 2:127 Ibrahim (AS) and Isma'il (AS), while raising the foundations of the House, say: Our Lord, accept this from us; indeed You are the Hearing, the Knowing. They were doing one of the greatest deeds in history, and their only concern was whether the One they did it for would accept it. That is the reverse of ri'a'.",
            "bn": "এই অংশে আছে সতর্কবাণী আর প্রতিশ্রুতি, দোয়া নয়। তাই এখানে দোয়া নেওয়া হলো কুরআনের অন্য জায়গা থেকে। ২:১২৭ আয়াতে ইবরাহীম (আঃ) আর ইসমাঈল (আঃ) কাবার ভিত তুলতে তুলতে বলছেন: হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন, নিশ্চয়ই আপনি সব শোনেন, সব জানেন। তাঁরা করছিলেন ইতিহাসের সবচেয়ে বড় কাজগুলোর একটি, আর তাঁদের একমাত্র চিন্তা ছিল, যাঁর জন্য করছেন, তিনি কবুল করবেন কি না। রিয়ার ঠিক উল্টো এটাই।"
          },
          {
            "en": "Alongside it, a short supplication composed in the vocabulary of these verses, offered as such and not as a transmitted text: O Allah, do not let us spend for the eyes of people; keep Satan from being our companion, and give us companions who remind us of You; let us believe in You and the Last Day in conviction and in deed; and do not let even an atom's weight of what we give for You be lost, but multiply it, and give us from Your own presence a great reward.",
            "bn": "এর পাশাপাশি এই আয়াতগুলোর শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমাদের মানুষকে দেখানোর জন্য খরচ করতে দেবেন না। শয়তানকে আমাদের সঙ্গী হতে দেবেন না, আর আমাদের এমন সঙ্গী দিন, যারা আপনার কথা মনে করিয়ে দেয়। আমাদের আপনার ওপর আর আখিরাতের ওপর ঈমান রাখতে দিন, বিশ্বাসেও, আমলেও। আর আপনার জন্য যা দিই, তার অণু পরিমাণও হারাতে দেবেন না, বরং বহুগুণ করুন, আর নিজের কাছ থেকে আমাদের বিরাট প্রতিদান দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Audience",
          "bn": "দর্শক নিয়ে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "When I remember the good I have done, whose reaction do I picture? If a gift of mine were praised by no one, thanked by no one and known to no one, would I regret giving it? What would it actually cost me, as 4:39 asks, to give one thing this month that only Allah will ever know about?",
            "bn": "নিজের করা ভালো কাজের কথা মনে পড়লে আমি কার প্রতিক্রিয়া কল্পনা করি? আমার কোনো দানের প্রশংসা যদি কেউ না করত, কেউ ধন্যবাদ না দিত, কেউ না জানত, তাহলে কি দিয়ে আফসোস হতো? ৪:৩৯ আয়াতের প্রশ্নটাই নিজেকে করি: এই মাসে এমন একটা কিছু দিতে, যার কথা আল্লাহ ছাড়া কেউ কোনো দিন জানবে না, আমার আসলে কী খরচ হবে?"
          },
          {
            "en": "Who are my companions, in person and on the screen, and do they make my deeds larger in Allah's sight or only louder in people's ears? Have I ever held back a good deed because I feared it would look like showing off, instead of correcting my intention and doing it? And which small deed have I dismissed as too little, when 4:40 says an atom's weight is not lost?",
            "bn": "সামনাসামনি আর পর্দার ওপারে আমার সঙ্গী কারা? তারা কি আমার আমলকে আল্লাহর কাছে বড় করে, নাকি শুধু মানুষের কানে জোরালো করে? লোক দেখানো মনে হবে এই ভয়ে কি কখনো কোনো ভালো কাজ আটকে রেখেছি, নিয়ত ঠিক করে কাজটা করার বদলে? আর কোন ছোট আমলকে আমি খুব সামান্য বলে বাদ দিয়েছি, যখন ৪:৪০ আয়াত বলে অণু পরিমাণও হারায় না?"
          }
        ]
      }
    ]
  },
  "4:43": {
    "sections": [
      {
        "h": {
          "en": "A Call Between Two Warnings",
          "bn": "দুই সতর্কবাণীর মাঝে একটি ডাক"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan. The verses before this one move from the rights of people in 4:36 to the misers and the performers of 4:37-40, and then to the Day in 4:41-42, when a witness is brought from every nation and those who disbelieved wish the earth were levelled over them. Our verse turns back to the believers with ya ayyuha alladhina amanu, O you who have believed, the first such call since 4:29. Right after it, 4:44 turns to those who were given a portion of the Scripture.",
            "bn": "সূরা নিসা মাদানি। এর আগের আয়াতগুলো ৪:৩৬ আয়াতে মানুষের হক থেকে সরে আসে ৪:৩৭ থেকে ৪:৪০ আয়াতের কৃপণ আর লোক দেখানো খরচকারীদের কথায়। তারপর ৪:৪১ ও ৪:৪২ আয়াতে সেই দিনের কথা, যেদিন প্রত্যেক উম্মত থেকে সাক্ষী আনা হবে, আর কাফিররা চাইবে মাটি যদি তাদের ঢেকে সমান করে দিত। আমাদের আয়াত আবার ফেরে ঈমানদারদের দিকে, ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ, এই ডাক দিয়ে। ৪:২৯ আয়াতের পর এমন ডাক এই প্রথম। ঠিক পরে ৪:৪৪ আয়াত ফিরে তাকায় তাদের দিকে, যাদের কিতাবের একটা অংশ দেওয়া হয়েছিল।"
          },
          {
            "en": "The verse also has a place in time. Ibn Kathir states that it was revealed before intoxicants were completely prohibited, and he places it in a sequence. 2:219 had said that in wine and gambling is great sin and some benefit, and that the sin is greater. This verse then forbade approaching the prayer while intoxicated. The final word came in 5:90-91, which call intoxicants defilement from the work of Satan and command the believers to avoid them. The hadith section below gives the report behind that sequence.",
            "bn": "সময়ের হিসেবেও আয়াতটির একটা জায়গা আছে। ইবনে কাসীর বলেন, নেশাজাতীয় জিনিস পুরোপুরি হারাম হওয়ার আগে এটি নাযিল হয়েছিল, আর তিনি একে একটা ধারাবাহিকতায় বসান। ২:২১৯ আয়াত বলেছিল, মদ আর জুয়ায় বড় গুনাহ আছে, মানুষের কিছু উপকারও আছে, তবে গুনাহটাই বেশি। এরপর এই আয়াত নেশাগ্রস্ত অবস্থায় নামাজের কাছে যাওয়া নিষেধ করে। চূড়ান্ত কথা আসে ৫:৯০ ও ৫:৯১ আয়াতে, যা মদকে বলে শয়তানের কাজের নাপাকি, আর ঈমানদারদের তা বর্জন করতে বলে। এই ধারাবাহিকতার পেছনের বর্ণনাটি নিচে হাদীসের অংশে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Approach, Until, Intend",
          "bn": "কাছে যাওয়া, যতক্ষণ না, সংকল্প"
        },
        "p": [
          {
            "en": "The verse does not say do not pray. It says la taqrabu as-salata, do not approach the prayer, a prohibition that stops a person before he reaches the act. Then two limits follow, each introduced by hatta, until. The first is hatta ta'lamu ma taqulun, until you know what you are saying. The second is hatta taghtasilu, until you have washed. One limit concerns the mind, the other the body, and the prayer waits behind both.",
            "bn": "আয়াত বলে না নামাজ পড়ো না। বলে লা তাকরাবুস সালাহ, নামাজের কাছে যেয়ো না। এমন নিষেধ মানুষকে কাজটার কাছে পৌঁছানোর আগেই থামিয়ে দেয়। তারপর আসে দুটো সীমা, দুটোই হাত্তা দিয়ে শুরু, মানে যতক্ষণ না। প্রথমটি হাত্তা তা'লামূ মা তাকূলূন, যতক্ষণ না তোমরা বুঝতে পারো কী বলছ। দ্বিতীয়টি হাত্তা তাগতাসিলূ, যতক্ষণ না গোসল করো। একটা সীমা মনের, আরেকটা শরীরের, আর নামাজ অপেক্ষা করে দুটোরই ওপারে।"
          },
          {
            "en": "Ibn Kathir calls until you know what you are saying the best description of intoxication: the state in which a person does not know the meaning of his own words. The criterion is not a quantity of drink but the loss of understanding. The verse then gives the concession its name. Fa-tayammamu sa'idan tayyiban: Ibn Kathir explains that tayammum in the language means to intend or to aim for something, so the command is to seek out clean earth, which he explains as dust.",
            "bn": "যতক্ষণ না বুঝতে পারো কী বলছ, এই কথাকে ইবনে কাসীর বলেন নেশার সবচেয়ে ভালো বর্ণনা: এমন অবস্থা, যখন মানুষ নিজের কথার মানেই বোঝে না। মাপকাঠি এখানে কতটুকু পান করা হলো তা নয়, বোধ হারিয়ে যাওয়া। এরপর আয়াত ছাড়টির নাম দেয়। ফাতায়াম্মামূ সাঈদান তাইয়িবা: ইবনে কাসীর ব্যাখ্যা করেন, ভাষায় তায়াম্মুম মানে কোনো কিছুর সংকল্প করা, সেদিকে লক্ষ্য করা। তাই আদেশটা হলো পবিত্র মাটির খোঁজ করা, আর তিনি এই মাটির ব্যাখ্যা দেন ধুলা দিয়ে।"
          },
          {
            "en": "The closing pair is 'afuwwan ghafura, Pardoning, Forgiving. Ibn Kathir reads it directly into what came before: part of Allah's pardon and forgiveness is that He allows tayammum, and prayer after it, when there is no water, to make things easy for His servants. The names at the end are not a separate topic. They explain the concession the verse has just given.",
            "bn": "শেষের জোড়া নাম আফুওয়ান গাফূরা, মার্জনাকারী, ক্ষমাশীল। ইবনে কাসীর নাম দুটোকে আগের কথার সঙ্গেই পড়েন। তাঁর ব্যাখ্যায়, পানি না থাকলে তায়াম্মুম করে নামাজ পড়ার অনুমতি দেওয়া আল্লাহর মার্জনা আর ক্ষমারই অংশ, যাতে বান্দাদের জন্য কাজটা সহজ হয়। শেষের নাম দুটো আলাদা কোনো বিষয় নয়। আয়াত এইমাত্র যে ছাড় দিল, নাম দুটো তারই ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Commentators Differ",
          "bn": "মুফাসসিরদের মতভেদ যেখানে"
        },
        "p": [
          {
            "en": "Even the first word drew more than one reading. Ibn Kathir's fuller commentary reports that ad-Dahhak took sukr here to mean the heaviness of sleep, not drink, and that at-Tabari held the correct meaning to be intoxication from drink. Ibn Kathir also explains why the state disqualifies: the drunk person makes obvious mistakes in recitation and cannot be humble in the prayer.",
            "bn": "প্রথম শব্দটারও একাধিক ব্যাখ্যা আছে। ইবনে কাসীরের বিস্তারিত তাফসীরে আছে, দাহহাক এখানে সুকরের মানে নিয়েছিলেন ঘুমের ঘোর, মদ নয়। আর ইমাম তাবারী বলেছেন, সঠিক অর্থ পানীয় থেকে আসা নেশা। অবস্থাটা কেন নামাজের অযোগ্য করে, ইবনে কাসীর তাও ব্যাখ্যা করেন: নেশাগ্রস্ত মানুষ তিলাওয়াতে স্পষ্ট ভুল করে, আর নামাজে বিনয়ী হতে পারে না।"
          },
          {
            "en": "The phrase illa 'abiri sabil, except those passing along a way, divided the early authorities. Ali (RA) read it as the traveller: a person in major impurity may not pray until he washes, unless he is on a journey and finds no water. Ibn Kathir reports from Ibn Abbas (RA) and a long list of early authorities that it means passing through a mosque without sitting in it. At-Tabari preferred the second, because the traveller who finds no water is named explicitly later in the same verse. Both app translations follow that reading in their brackets.",
            "bn": "ইল্লা আবিরী সাবীল, পথ অতিক্রমকারী ছাড়া, এই কথা নিয়ে প্রথম যুগের আলেমরা দুই ভাগ হয়েছেন। আলী (রাঃ) একে পড়েছেন মুসাফির হিসেবে: বড় নাপাকির অবস্থায় গোসল না করে নামাজ পড়া যাবে না, তবে সফরে থাকলে আর পানি না পেলে ভিন্ন কথা। ইবনে কাসীর ইবনে আব্বাস (রাঃ) আর প্রথম যুগের দীর্ঘ এক তালিকা থেকে বর্ণনা করেন যে এর মানে মসজিদে না বসে তার ভেতর দিয়ে চলে যাওয়া। ইমাম তাবারী দ্বিতীয় মতটাকে অগ্রাধিকার দিয়েছেন, কারণ পানি না পাওয়া মুসাফিরের কথা একই আয়াতে পরে আলাদা করে বলা আছে। এই অ্যাপের দুই অনুবাদই বন্ধনীতে সেই পাঠ অনুসরণ করেছে।"
          },
          {
            "en": "Aw lamastum an-nisa', or you have contacted women, is the third place of difference. Ibn Kathir reports from Ibn Abbas (RA), and similarly from Ali (RA) and Ubayy ibn Ka'b (RA), that it means intercourse, stated with a courteous indirectness. He also records that Ibn Mas'ud (RA) and Ibn Umar (RA) took it to include touching with the hand and kissing, and that this is the position of ash-Shafi'i and his companions. The difference shapes rulings on wudu, and this page leaves those to the scholars.",
            "bn": "আও লামাসতুমুন নিসা, অথবা তোমরা স্ত্রীদের স্পর্শ করেছ, এটা তৃতীয় মতভেদের জায়গা। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে, আর একইভাবে আলী (রাঃ) ও উবাই ইবনে কা'ব (রাঃ) থেকে বর্ণনা করেন যে এর মানে সহবাস, যা শালীনভাবে ইঙ্গিতে বলা হয়েছে। তিনি এটাও উল্লেখ করেন যে ইবনে মাসউদ (রাঃ) আর ইবনে উমর (রাঃ) এর মধ্যে হাত দিয়ে স্পর্শ আর চুম্বনও ধরেছেন, আর ইমাম শাফিঈ ও তাঁর অনুসারীদের মতও এটাই। এই মতভেদ থেকে অজুর বিধানে পার্থক্য তৈরি হয়। সে বিধান এই লেখা আলেমদের হাতেই ছেড়ে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer of Umar, a Lost Necklace",
          "bn": "উমরের দোয়া, হারানো হার"
        },
        "p": [
          {
            "en": "Ibn Kathir gives, in the wording of Abu Dawud, the report behind the sequence. When 2:219 was recited to Umar (RA), he said: O Allah, make the ruling on wine clear to us. When this verse came down and was recited to him, he said the same. After it, the people would not drink close to the times of prayer, and a caller would announce at prayer time that no one intoxicated should approach the prayer. When 5:90-91 were revealed, ending with so will you not desist, Umar (RA) said: we desist, we desist.",
            "bn": "ধারাবাহিকতার পেছনের বর্ণনাটি ইবনে কাসীর দিয়েছেন আবু দাউদের শব্দে। ২:২১৯ আয়াত যখন উমর (রাঃ)-কে পড়ে শোনানো হলো, তিনি বললেন: হে আল্লাহ, মদের বিধান আমাদের জন্য স্পষ্ট করে দিন। এই আয়াত নাযিল হয়ে তাঁকে শোনানো হলে তিনি আবারও একই কথা বললেন। এরপর লোকেরা নামাজের সময়ের কাছাকাছি আর পান করত না, আর নামাজের সময় একজন ঘোষণা দিত, নেশাগ্রস্ত কেউ যেন নামাজের কাছে না আসে। যখন ৫:৯০ ও ৫:৯১ আয়াত নাযিল হলো, যার শেষে আছে, তবু কি তোমরা বিরত হবে না, তখন উমর (রাঃ) বললেন: আমরা বিরত হলাম, আমরা বিরত হলাম।"
          },
          {
            "en": "For the tayammum clause Ibn Kathir brings a report from Aishah (RA) that al-Bukhari and Muslim record. On a journey, at al-Bayda' or Dhat al-Jaysh, her necklace broke and was lost. The Prophet ﷺ stayed to search for it, and so did the people, where there was no water. Abu Bakr (RA) came and reproached her while the Prophet ﷺ slept with his head on her lap. At dawn there was still no water, and Allah revealed the verses of tayammum. Usayd ibn Hudayr (RA) said: this is not the first blessing of yours, O family of Abu Bakr. When her camel was moved, the necklace was found beneath it.",
            "bn": "তায়াম্মুমের অংশের জন্য ইবনে কাসীর আয়েশা (রাঃ)-এর একটি বর্ণনা আনেন, যা ইমাম বুখারী ও মুসলিম উল্লেখ করেছেন। এক সফরে, বাইদা বা যাতুল জাইশ নামের জায়গায়, তাঁর হার ছিঁড়ে হারিয়ে যায়। নবী ﷺ সেটা খুঁজতে থেমে যান, সঙ্গের লোকেরাও থামে, অথচ সেখানে পানি ছিল না। আবু বকর (রাঃ) এসে মেয়েকে ভর্ৎসনা করেন, নবী ﷺ তখন তাঁর কোলে মাথা রেখে ঘুমিয়ে ছিলেন। ভোর হলো, তখনো পানি নেই, আর আল্লাহ তায়াম্মুমের আয়াত নাযিল করলেন। উসাইদ ইবনে হুদাইর (রাঃ) বললেন, হে আবু বকরের পরিবার, এটা তোমাদের প্রথম বরকত নয়। পরে আয়েশা (রাঃ)-এর উট সরাতেই তার নিচে হারটা পাওয়া গেল।"
          },
          {
            "en": "Which verse that report refers to is a real question. Ibn Kathir brings it here, under 4:43, as the reason tayammum was allowed. In his commentary on 5:6, he cites al-Bukhari's narration of the same event, in which the verse revealed is quoted with the opening words of 5:6. Both verses carry the same tayammum clause, and the report is attached to one or the other. This page records both placements and does not decide between them.",
            "bn": "বর্ণনাটি কোন আয়াতের কথা বলছে, প্রশ্নটা সত্যিই আছে। ইবনে কাসীর বর্ণনাটি এখানে, ৪:৪৩ আয়াতের অধীনে, তায়াম্মুমের অনুমতির কারণ হিসেবে এনেছেন। আবার ৫:৬ আয়াতের তাফসীরে তিনি একই ঘটনার বুখারীর বর্ণনা উল্লেখ করেন, যেখানে নাযিল হওয়া আয়াত হিসেবে ৫:৬ আয়াতের শুরুর শব্দগুলো উদ্ধৃত আছে। দুই আয়াতেই তায়াম্মুমের একই অংশ আছে, আর বর্ণনাটিকে কেউ এটার সঙ্গে, কেউ ওটার সঙ্গে যুক্ত করেন। এই লেখা দুটো অবস্থানই উল্লেখ করছে, কোনোটার পক্ষে রায় দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Ease Written Into the Law",
          "bn": "বিধানের ভেতরেই সহজতা"
        },
        "p": [
          {
            "en": "5:6 repeats the tayammum clause after the full description of wudu and adds its reason in plain words: Allah does not intend to make difficulty for you, but He intends to purify you and complete His favour upon you, that you may be grateful. 2:185, in the rulings of fasting, gives the same principle with the same two exceptions, the ill and the traveller: Allah intends for you ease and does not intend for you hardship.",
            "bn": "৫:৬ আয়াত অজুর পুরো বিবরণের পর তায়াম্মুমের অংশটা আবার বলে, আর সোজা ভাষায় কারণটাও জানিয়ে দেয়: আল্লাহ তোমাদের ওপর সংকীর্ণতা চাপাতে চান না, বরং তোমাদের পবিত্র করতে চান আর তোমাদের ওপর তাঁর নিয়ামত পূর্ণ করতে চান, যাতে তোমরা শুকরিয়া আদায় করো। রোজার বিধানে ২:১৮৫ আয়াত একই মূলনীতি বলে, একই দুই ব্যতিক্রমসহ, অসুস্থ আর মুসাফির: আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না।"
          },
          {
            "en": "5:91 names what intoxicants take from a believer: Satan wants through them to cause enmity and hatred and to turn you away from the remembrance of Allah and from prayer. What our verse guarded for the length of a prayer, that verse guards for a whole life. And 23:2 describes the believers who succeed as those who are humbly intent in their prayer, which is exactly the state the drunk person, in Ibn Kathir's explanation, cannot reach.",
            "bn": "মদ মুমিনের কাছ থেকে কী কেড়ে নেয়, ৫:৯১ আয়াত তার নাম বলে দেয়: শয়তান মদ আর জুয়ার মাধ্যমে তোমাদের মধ্যে শত্রুতা আর বিদ্বেষ তৈরি করতে চায়, আর আল্লাহর জিকির ও নামাজ থেকে ফিরিয়ে রাখতে চায়। আমাদের আয়াত যা রক্ষা করেছিল এক নামাজের সময়টুকুর জন্য, সেই আয়াত তা রক্ষা করে সারা জীবনের জন্য। আর ২৩:২ আয়াত সফল মুমিনদের পরিচয় দেয় তাদের নামাজে বিনয়ী বলে। ইবনে কাসীরের ব্যাখ্যা অনুযায়ী, নেশাগ্রস্ত মানুষ ঠিক এই অবস্থাতেই পৌঁছাতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing What You Say",
          "bn": "যা বলছেন তা বোঝা"
        },
        "p": [
          {
            "en": "The intoxicant is gone from a believer's life, but the criterion of the verse remains. Ibn Kathir brings under it a hadith that al-Bukhari records from Anas (RA): if one of you becomes drowsy while praying, let him leave off and sleep until he knows what he is saying. Exhaustion, a phone still in the hand and a mind racing with work can all put a person in the state the verse describes. A minute of stillness before the takbir, and learning the meaning of al-Fatihah and the adhkar of the prayer, begin the repair.",
            "bn": "মুমিনের জীবন থেকে নেশা বিদায় নিয়েছে, কিন্তু আয়াতের মাপকাঠি রয়ে গেছে। ইবনে কাসীর এর অধীনে একটি হাদীস আনেন, যা ইমাম বুখারী আনাস (রাঃ) থেকে বর্ণনা করেছেন: নামাজ পড়তে পড়তে তোমাদের কারও তন্দ্রা এলে সে যেন ফিরে গিয়ে ঘুমিয়ে নেয়, যতক্ষণ না বুঝতে পারে কী বলছে। ক্লান্তি, হাতে ধরা ফোন, কাজের চিন্তায় ছুটতে থাকা মন, এর যেকোনোটাই মানুষকে আয়াতের বর্ণিত অবস্থায় ফেলে দিতে পারে। তাকবীরের আগে এক মিনিট স্থির হওয়া, আর সূরা ফাতিহা ও নামাজের জিকিরগুলোর অর্থ শেখা, মেরামতের শুরু সেখান থেকেই।"
          },
          {
            "en": "The verse's other half closes a door that many people open for themselves. Ibn Kathir sums up the verse this way: prayer is too sacred to be performed in a deficient state, yet Allah makes exceptions for illness and the absence of water out of mercy. In a hospital bed, on a long journey, or where water cannot be used, the prayer is not dropped. Its purity is reduced to what the person can do. Learn how tayammum is done before the day it is needed, from a qualified teacher.",
            "bn": "আয়াতের দ্বিতীয় অর্ধেক এমন একটা দরজা বন্ধ করে, যা অনেকে নিজেরাই খুলে নেয়। ইবনে কাসীর গোটা আয়াতের সারকথা বলেন এভাবে: নামাজ এত পবিত্র যে তা ত্রুটিপূর্ণ অবস্থায় পড়া চলে না, তবু আল্লাহ দয়া করে অসুখ আর পানি না থাকার ব্যতিক্রম রেখেছেন। হাসপাতালের বিছানায়, দীর্ঘ সফরে, কিংবা যেখানে পানি ব্যবহার করা যায় না, সেখানে নামাজ বাদ পড়ে না। পবিত্রতার শর্ত নেমে আসে মানুষটার সাধ্যের মধ্যে। প্রয়োজনের দিন আসার আগেই যোগ্য শিক্ষকের কাছ থেকে তায়াম্মুমের নিয়ম শিখে নিন।"
          },
          {
            "en": "The sequence itself teaches something about change. The Companions were brought from 2:219 to 5:90-91 by stages, and Umar (RA) kept asking for clarity until it came. Those stages belong to the time of revelation, and the ruling that reached us is the final one. What a believer can take from them is the attitude: to want Allah's command to be clear, and to answer it, when it comes, with we desist.",
            "bn": "এই ধারাবাহিকতা পরিবর্তন সম্পর্কেও কিছু শেখায়। সাহাবিদের ধাপে ধাপে ২:২১৯ থেকে ৫:৯০ ও ৫:৯১ আয়াত পর্যন্ত আনা হয়েছিল, আর উমর (রাঃ) স্পষ্ট বিধান না আসা পর্যন্ত বারবার তা চেয়ে গেছেন। ধাপগুলো ছিল ওহি নাযিলের যুগের, আর আমাদের কাছে যে বিধান পৌঁছেছে সেটাই চূড়ান্ত। মুমিন এখান থেকে যা নিতে পারেন তা হলো মনোভাব: আল্লাহর হুকুম স্পষ্ট হোক, এই চাওয়া, আর হুকুম এলে জবাব দেওয়া, আমরা বিরত হলাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Me to Worship You Well",
          "bn": "সুন্দরভাবে ইবাদতের সাহায্য"
        },
        "p": [
          {
            "en": "The Sunnah has a du'a that asks for exactly what this verse protects. Abu Dawud records from Mu'adh ibn Jabal (RA) that the Prophet ﷺ took his hand, told him that he loved him, and advised him never to leave off saying after every prayer: Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik, O Allah, help me to remember You, to thank You, and to worship You well. Worship done well is worship done knowing what one says.",
            "bn": "সুন্নাহয় এমন একটা দোয়া আছে, যা ঠিক সেটাই চায়, যা এই আয়াত রক্ষা করে। ইমাম আবু দাউদ মুআয ইবনে জাবাল (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ তাঁর হাত ধরে বললেন, তিনি তাঁকে ভালোবাসেন, আর উপদেশ দিলেন প্রতি নামাজের পর এই দোয়া কখনো না ছাড়তে: আল্লাহুম্মা আইন্নী আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক, হে আল্লাহ, আপনার জিকির, আপনার শুকরিয়া আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন। সুন্দর ইবাদত মানে বুঝে বুঝে ইবাদত।"
          },
          {
            "en": "Alongside it, a short supplication composed in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, let me never approach the prayer without knowing what I say; purify me for it as fully as I am able; when water fails me or my body fails me, do not let the prayer fail me; You are the Pardoning, the Forgiving, so pardon what was absent from my prayers and forgive what I did not understand.",
            "bn": "এর পাশাপাশি আয়াতের নিজের শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমি যেন কখনো না বুঝে নামাজের কাছে না যাই। নামাজের জন্য আমাকে যতটা পারি পুরোপুরি পবিত্র করুন। পানি না পেলে বা শরীর সাথ না দিলে নামাজ যেন আমার হাতছাড়া না হয়। আপনি মার্জনাকারী, ক্ষমাশীল, তাই আমার নামাজ থেকে যা অনুপস্থিত ছিল তা মার্জনা করুন, আর যা বুঝিনি তা ক্ষমা করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Takbir",
          "bn": "তাকবীরের আগের প্রশ্ন"
        },
        "p": [
          {
            "en": "In my last prayer, how much of what I said did I actually understand, and how much did I merely pronounce? What habitually clouds my mind before I pray, and what could I change in the five minutes before the prayer to clear it? Is there a surah I recite every day whose meaning I have never learned?",
            "bn": "শেষ নামাজে যা বলেছি, তার কতটুকু সত্যিই বুঝেছি, আর কতটুকু শুধু উচ্চারণ করেছি? নামাজের আগে কোন জিনিস অভ্যাসবশত আমার মাথা ঘোলা করে দেয়, আর নামাজের আগের পাঁচ মিনিটে কী বদলালে তা পরিষ্কার হতো? এমন কোনো সূরা কি আছে, যা রোজ পড়ি অথচ তার অর্থ কখনো শিখিনি?"
          },
          {
            "en": "Have I ever missed a prayer because I was ill, travelling or away from water, when Allah had already made a way for me? When a command of Allah is unclear to me, do I ask and seek, as Umar (RA) did, or do I leave it vague so that it asks nothing of me? And when it becomes clear, is my answer we desist?",
            "bn": "অসুস্থ ছিলাম, সফরে ছিলাম বা পানি ছিল না বলে কি কখনো নামাজ ছুটে গেছে, অথচ আল্লাহ আগেই আমার জন্য পথ করে রেখেছিলেন? আল্লাহর কোনো হুকুম অস্পষ্ট মনে হলে আমি কি উমর (রাঃ)-এর মতো জিজ্ঞেস করি, খুঁজি, নাকি অস্পষ্টই রেখে দিই, যাতে তা আমার কাছে কিছু না চায়? আর হুকুম স্পষ্ট হলে আমার জবাব কি হয়, আমরা বিরত হলাম?"
          }
        ]
      }
    ]
  },
  "4:54-55": {
    "sections": [
      {
        "h": {
          "en": "Envy in a Run of Questions",
          "bn": "প্রশ্নের সারিতে হিংসা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and in this stretch it answers a group of that time. 4:49 asks about those who claim themselves pure, and 4:50 shows how they invent untruth about Allah. 4:51 names those who were given a portion of the Scripture and who said of the disbelievers that they were better guided than the believers, and 4:52 says Allah has cursed them. 4:53 then asks: or have they a share of dominion? If they had, they would not give people even the speck on a date seed. Our verse opens with the same word, am, or, and asks a second question.",
            "bn": "সূরা নিসা মাদানি, আর এই অংশে জবাব দেওয়া হচ্ছে সেই সময়ের একটি দলকে। ৪:৪৯ আয়াত প্রশ্ন তোলে তাদের নিয়ে, যারা নিজেদের পবিত্র বলে দাবি করে, আর ৪:৫০ আয়াত দেখায় তারা আল্লাহর নামে কেমন মিথ্যা রচনা করে। ৪:৫১ আয়াত বলে তাদের কথা, যাদের কিতাবের একাংশ দেওয়া হয়েছিল, আর যারা কাফিরদের সম্পর্কে বলত, তারাই মুমিনদের চেয়ে বেশি সঠিক পথে। ৪:৫২ আয়াত জানায়, আল্লাহ তাদের লানত করেছেন। তারপর ৪:৫৩ আয়াত জিজ্ঞেস করে: রাজত্বে কি তাদের কোনো অংশ আছে? থাকলে তো তারা মানুষকে তিল পরিমাণও দিত না। আমাদের আয়াত শুরু হয় সেই একই শব্দে, আম, অথবা, আর তোলে দ্বিতীয় একটি প্রশ্ন।"
          },
          {
            "en": "The verses describe a particular group who said a particular thing at a particular time, and 4:55 is careful to say that some among them believed while some turned away. The commentators identify whom the envy was aimed at. Ibn Kathir says it was envy of the Prophet ﷺ for the prophethood Allah had entrusted to him, and that their envy led them to reject him because he was an Arab and not of the Children of Israel. Al-Muyassar adds envy of his Companions, for the faith they had been guided to and their following of the Messenger.",
            "bn": "আয়াতগুলো নির্দিষ্ট একটি দলের কথা বলে, যারা নির্দিষ্ট সময়ে নির্দিষ্ট একটা কথা বলেছিল। আর ৪:৫৫ আয়াত সতর্কভাবে জানায়, তাদের কেউ ঈমান এনেছিল, কেউ মুখ ফিরিয়েছিল। হিংসা কার প্রতি ছিল, মুফাসসিররা তা চিহ্নিত করেছেন। ইবনে কাসীর বলেন, এ ছিল নবী ﷺ-এর প্রতি হিংসা, আল্লাহ তাঁকে যে নবুওয়াত দিয়েছিলেন তার জন্য। আর এই হিংসাই তাদের তাঁকে প্রত্যাখ্যানের দিকে ঠেলে দিয়েছিল, কারণ তিনি ছিলেন আরব, বনী ইসরাঈলের কেউ নন। আল-মুয়াসসার যোগ করে তাঁর সাহাবিদের প্রতি হিংসার কথা, ঈমানের যে তাওফিক তাঁরা পেয়েছিলেন আর রাসূলের যে অনুসরণ করতেন তার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Or, Envy, Bounty",
          "bn": "অথবা, হিংসা, অনুগ্রহ"
        },
        "p": [
          {
            "en": "Am yahsuduna an-nas: or do they envy people? The word am ties this question to the one before it in 4:53, so that the two stand side by side as a pair. Ibn Kathir calls the question in 4:53 a rebuke, since they have no share of dominion, and the second question comes in the same form. Neither asks for information. Each leaves the listener to supply the answer and see it for himself. The first exposes a grasping that would give nothing away; the second names what lies beneath it.",
            "bn": "আম ইয়াহসুদূনান নাস: অথবা তারা কি মানুষকে হিংসা করে? আম শব্দটা এই প্রশ্নকে ৪:৫৩ আয়াতের আগের প্রশ্নের সঙ্গে জুড়ে দেয়, ফলে দুটো পাশাপাশি দাঁড়ায় জোড়া হয়ে। ইবনে কাসীর ৪:৫৩ আয়াতের প্রশ্নটাকে বলেন তিরস্কার, কারণ রাজত্বে তাদের কোনো অংশ নেই। দ্বিতীয় প্রশ্নটাও আসে একই ধাঁচে। কোনোটাই তথ্য জানতে চাওয়া নয়। দুটোই উত্তরটা শ্রোতার হাতে ছেড়ে দেয়, যাতে সে নিজেই দেখে। প্রথম প্রশ্ন খুলে দেয় এমন কৃপণতা, যা কাউকে কিছুই দিতে চায় না। দ্বিতীয়টা নাম নেয় তার নিচে লুকানো জিনিসের।"
          },
          {
            "en": "Hasad is more than wanting what another has. Al-Muyassar's gloss on this verse spells out its sharpest edge: they wish that this bounty would be taken away from those who were given it. That wish is what separates envy from ordinary longing. And the object of the envy is named with care: ma atahumu Allahu min fadlihi, what Allah has given them of His bounty. The gift is traced to its Giver twice, by the verb and by the word fadl, a grace no one was owed. The wording itself suggests that resentment of the gift reaches, in the end, toward the One who gave it.",
            "bn": "হাসাদ মানে কেবল অন্যের জিনিস নিজের জন্য চাওয়া নয়। এই আয়াতের ব্যাখ্যায় আল-মুয়াসসার এর সবচেয়ে ধারালো দিকটা খুলে বলে: তারা চায়, যাদের এই অনুগ্রহ দেওয়া হয়েছে তাদের কাছ থেকে তা চলে যাক। সাধারণ আকাঙ্ক্ষা থেকে হিংসাকে আলাদা করে এই চাওয়াটাই। আর হিংসার বিষয়টার নামও নেওয়া হয়েছে যত্ন করে: মা আতাহুমুল্লাহু মিন ফাদলিহী, আল্লাহ নিজ অনুগ্রহ থেকে তাদের যা দিয়েছেন। দানটাকে দুইবার দাতার দিকে ফেরানো হয়েছে, ক্রিয়াপদ দিয়ে আর ফাদল শব্দ দিয়ে, মানে এমন অনুগ্রহ যা কারও পাওনা ছিল না। আয়াতের এই ভাষাই ইঙ্গিত দেয়, দানের প্রতি ক্ষোভ শেষ পর্যন্ত গিয়ে ঠেকে দাতার দিকে।"
          },
          {
            "en": "The second half of the verse brings the Giver forward to speak for Himself. The verse began, Allah has given them; then comes fa-qad atayna, We had already given, and wa ataynahum, and We gave them. The verb of giving comes three times in one verse, and in the last two Allah speaks of His own giving directly: the family of Ibrahim received the Book, wisdom and a great kingdom. The answer to envy here is not an argument about merit. It is a reminder of who has been giving all along.",
            "bn": "আয়াতের দ্বিতীয় অর্ধে দাতা নিজেই সামনে এসে কথা বলেন। শুরুতে বলা হয়েছিল, আল্লাহ তাদের দিয়েছেন। তারপর আসে ফাকাদ আতাইনা, আমি তো আগেই দিয়েছিলাম, আর ওয়া আতাইনাহুম, আর তাদের দিয়েছিলাম। দেওয়ার ক্রিয়াটি এক আয়াতে তিনবার আসে, আর শেষ দুবার আল্লাহ নিজের দানের কথা নিজেই বলেন: ইবরাহীমের বংশধরেরা পেয়েছিল কিতাব, হিকমাত আর বিশাল রাজত্ব। এখানে হিংসার জবাব যোগ্যতা নিয়ে তর্ক নয়। জবাব হলো মনে করিয়ে দেওয়া, শুরু থেকে দিয়ে আসছেন কে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Family of Ibrahim Received",
          "bn": "ইবরাহীমের বংশ কী পেয়েছিল"
        },
        "p": [
          {
            "en": "Ibn Kathir explains the family of Ibrahim as the tribes of the Children of Israel, who are among Ibrahim's offspring: Allah gave them prophethood, sent down Books to them, and made kings among them, and their prophets ruled them by prophetic guidance. As-Sa'di names Dawud and Sulayman (AS) among the prophets honoured with that kingship, and then draws out the argument: why then refuse to accept that Allah gave prophethood, victory and rule to Muhammad ﷺ? Al-Muyassar explains the wisdom as what was revealed to them that was not a recited Book.",
            "bn": "ইবনে কাসীর ইবরাহীমের বংশধর বলতে বোঝান বনী ইসরাঈলের গোত্রগুলোকে, যারা ইবরাহীম (আঃ)-এর সন্তানদের অন্তর্ভুক্ত। আল্লাহ তাদের নবুওয়াত দিয়েছিলেন, তাদের কাছে কিতাব নাজিল করেছিলেন, তাদের মধ্যে রাজা বানিয়েছিলেন, আর তাদের নবীরা নবুওয়াতের আদর্শে তাদের শাসন করতেন। আস-সাদী সেই রাজত্বে সম্মানিত নবীদের মধ্যে দাউদ ও সুলাইমান (আঃ)-এর নাম নেন, তারপর যুক্তিটা সামনে আনেন: তাহলে আল্লাহ মুহাম্মাদ ﷺ-কে নবুওয়াত, বিজয় আর শাসন দিয়েছেন, এটা মেনে নিতে আপত্তি কেন? আল-মুয়াসসার হিকমাতের ব্যাখ্যা দেয় এভাবে: তাদের প্রতি যা ওহি করা হয়েছিল, অথচ তা পাঠ করার মতো কিতাব ছিল না।"
          },
          {
            "en": "4:55 then says fa-minhum man amana bihi, some among them believed in it, and some were averse to it. The commentators differ over the pronoun. Ibn Kathir first takes it as Allah's favour just described, the prophets, Books and kingship: some of the Children of Israel believed in it and some rejected it, though it came from among them and for them. He then gives Mujahid's reading, that it means believing in him, the Prophet ﷺ, and as-Sa'di reads it the same way. Both readings keep the verse's own fairness. It does not say that all of them turned away.",
            "bn": "এরপর ৪:৫৫ আয়াত বলে ফামিনহুম মান আমানা বিহী, তাদের কেউ তাতে ঈমান এনেছিল, আর কেউ তা থেকে মুখ ফিরিয়ে রেখেছিল। সর্বনামটা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। ইবনে কাসীর প্রথমে একে ধরেন আল্লাহর সেই অনুগ্রহ হিসেবে, যার কথা এইমাত্র এলো: নবী, কিতাব আর রাজত্ব। বনী ইসরাঈলের কেউ তাতে ঈমান এনেছিল, কেউ অস্বীকার করেছিল, যদিও তা এসেছিল তাদের মধ্য থেকেই, তাদেরই জন্য। তারপর তিনি মুজাহিদের ব্যাখ্যা আনেন: এর মানে তাঁর প্রতি, অর্থাৎ নবী ﷺ-এর প্রতি ঈমান আনা। আস-সাদীও একই রকম পড়েছেন। দুই ব্যাখ্যাতেই আয়াতের নিজের ইনসাফ অটুট থাকে। আয়াত বলে না যে তাদের সবাই মুখ ফিরিয়েছিল।"
          },
          {
            "en": "The verse closes: and sufficient is Hell as a blaze. Ibn Kathir calls it a just recompense for disbelief, rebellion and defiance of Allah's Books and messengers. The verses that follow, 4:56-57, set the Fire and the Gardens side by side. For a reader today the weight of this passage falls less on identifying a people than on recognising a sickness. In these verses envy was strong enough to turn people away from a prophet, and as-Sa'di links it to the statement of 4:51, that the disbelievers were better guided than the believers.",
            "bn": "আয়াত শেষ হয় এভাবে: আর দগ্ধ করার জন্য জাহান্নামই যথেষ্ট। ইবনে কাসীর একে বলেন কুফরি, বিদ্রোহ আর আল্লাহর কিতাব ও রাসূলদের বিরোধিতার ন্যায্য প্রতিফল। পরের দুই আয়াত, ৪:৫৬ ও ৪:৫৭, আগুন আর জান্নাতকে পাশাপাশি রাখে। আজকের পাঠকের জন্য এই অংশের ভার কোনো জাতিকে চিহ্নিত করায় যতটা, তার চেয়ে বেশি একটা রোগ চিনে নেওয়ায়। এই আয়াতগুলোতে হিংসা এতটাই প্রবল ছিল যে তা মানুষকে একজন নবী থেকে ফিরিয়ে দিয়েছিল। আর আস-সাদী একে জুড়ে দেন ৪:৫১ আয়াতের সেই কথার সঙ্গে, কাফিররাই মুমিনদের চেয়ে বেশি সঠিক পথে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Envy Except in Two",
          "bn": "দুই ক্ষেত্র ছাড়া হিংসা নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir does not attach a particular hadith to this verse, and this page will not fill the place with a weak one. But a hadith on envy speaks of two of the same kinds of gift. Al-Bukhari records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: there is no envy except in two cases, a man to whom Allah has given wealth and who spends it in what is right, and a man to whom Allah has given wisdom, who judges by it and teaches it. Wealth and hikmah stand in the hadith as a kingdom and wisdom stand in 4:54.",
            "bn": "ইবনে কাসীর এই আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদীস জুড়ে দেননি, আর এই লেখাও দুর্বল কোনো বর্ণনা দিয়ে সেই জায়গা ভরাবে না। তবে হিংসা নিয়ে একটি হাদীসে একই ধরনের দুটি দানের কথা আছে। ইমাম বুখারী আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দুই ক্ষেত্র ছাড়া হিংসা নেই। এক, এমন মানুষ যাকে আল্লাহ সম্পদ দিয়েছেন, আর সে তা ন্যায়ের পথে খরচ করে। দুই, এমন মানুষ যাকে আল্লাহ হিকমাত দিয়েছেন, আর সে তা দিয়ে ফয়সালা করে ও অন্যকে শেখায়। ৪:৫৪ আয়াতে যেমন রাজত্ব আর হিকমাত, হাদীসে তেমনি সম্পদ আর হিকমাত।"
          },
          {
            "en": "The commentators on this hadith explain envy in it as ghibtah: wishing to have the like of someone's blessing without wishing it taken from him. That is the very line al-Muyassar draws at 4:54, where the envy condemned is the wish that the bounty be removed. So the Prophet ﷺ did not ask believers to feel nothing when they see another given more. He turned that feeling toward two things worth competing for, and away from the wish that anyone lose what Allah gave them.",
            "bn": "এই হাদীসের ব্যাখ্যাকারীরা বলেন, এখানে হিংসা মানে গিবতা: কারও নিয়ামতের মতো নিয়ামত নিজেও পেতে চাওয়া, কিন্তু তার কাছ থেকে তা চলে যাক এমন না চাওয়া। ৪:৫৪ আয়াতে আল-মুয়াসসার ঠিক এই রেখাটাই টানে, যেখানে নিন্দিত হিংসা হলো অনুগ্রহ সরে যাওয়ার কামনা। তাই অন্য কাউকে বেশি পেতে দেখলে মুমিন কিছুই অনুভব করবে না, নবী ﷺ এমন কথা বলেননি। তিনি সেই অনুভূতিকে ঘুরিয়ে দিয়েছেন প্রতিযোগিতার যোগ্য দুটি জিনিসের দিকে, আর সরিয়ে এনেছেন আল্লাহর দেওয়া জিনিস কেউ হারাক, এই কামনা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard Alongside",
          "bn": "পাশাপাশি শোনার আয়াত"
        },
        "p": [
          {
            "en": "4:32, earlier in this same surah, gives the believer's side of the lesson: do not wish for that by which Allah has made some of you exceed others, and ask Allah of His bounty. The word fadl returns, and it turns the eye from another person's share toward the Giver. 43:32 answers a related objection, from people who questioned the choice of the one to whom the revelation came: do they distribute the mercy of your Lord? It is Allah who has apportioned their livelihood among them and raised some above others in degrees.",
            "bn": "এই সূরারই আগের দিকে ৪:৩২ আয়াত শিক্ষাটার মুমিনের দিকটা বলে দেয়: আল্লাহ যা দিয়ে তোমাদের কাউকে কারও ওপর মর্যাদা দিয়েছেন, তা কামনা করো না, আর আল্লাহর কাছে তাঁর অনুগ্রহ চাও। সেখানেও ফাদল শব্দ ফিরে আসে, আর চোখটাকে অন্যের ভাগ থেকে সরিয়ে দাতার দিকে ফেরায়। ৪৩:৩২ আয়াত জবাব দেয় কাছাকাছি একটা আপত্তির, যারা প্রশ্ন তুলেছিল ওহি কার ওপর এল তা নিয়ে: তারা কি তোমার রবের রহমত বণ্টন করে? দুনিয়ার জীবনে তাদের জীবিকা আল্লাহই বণ্টন করেছেন, আর মর্যাদায় একজনকে আরেকজনের ওপর তুলেছেন।"
          },
          {
            "en": "62:4 states the rule in a single line: that is the bounty of Allah, which He gives to whom He wills, and Allah is the possessor of great bounty. 20:131 gives a practice: do not extend your eyes toward the enjoyment given to others, the splendour of worldly life by which they are tested, for the provision of your Lord is better and more enduring. And 113:5 teaches the believer to seek refuge from the evil of an envier when he envies, a reminder that envy harms others as well as the heart that carries it.",
            "bn": "৬২:৪ আয়াত নীতিটা এক লাইনে বলে দেয়: এটা আল্লাহর অনুগ্রহ, যাকে ইচ্ছা তিনি দেন, আর আল্লাহ মহা অনুগ্রহের মালিক। ২০:১৩১ আয়াত দেয় একটা আমল: অন্যদের যে ভোগের সামগ্রী দেওয়া হয়েছে, দুনিয়ার সেই চাকচিক্য, যা দিয়ে তাদের পরীক্ষা করা হয়, সেদিকে চোখ তুলে তাকিয়ো না। তোমার রবের দেওয়া রিজিকই উত্তম ও বেশি স্থায়ী। আর ১১৩:৫ আয়াত মুমিনকে শেখায় হিংসুকের অনিষ্ট থেকে আশ্রয় চাইতে, যখন সে হিংসা করে। এটা মনে করিয়ে দেয়, হিংসা যে মনে থাকে শুধু তারই ক্ষতি করে না, অন্যেরও করে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Someone Else Is Given",
          "bn": "যখন অন্য কেউ পায়"
        },
        "p": [
          {
            "en": "Envy rarely announces itself. It shows up as a flicker of discomfort at a cousin's wedding, a colleague's promotion, a friend's child who did better in exams. The verse gives a test for that moment. The question is not whether I wanted the same thing; wanting is human. The question is whether some part of me wishes it had not been given to them. If it does, admit it to yourself honestly, and remember whose giving it was: what Allah has given them of His bounty.",
            "bn": "হিংসা খুব কমই ঢাকঢোল পিটিয়ে আসে। আসে চাচাতো ভাইয়ের বিয়েতে, সহকর্মীর পদোন্নতিতে, বন্ধুর সন্তানের ভালো রেজাল্টে মনের ভেতর হালকা একটা খচখচানি হয়ে। সেই মুহূর্তের জন্য আয়াত একটা পরীক্ষা দেয়। প্রশ্নটা এই নয় যে আমিও একই জিনিস চেয়েছিলাম কি না। চাওয়া মানুষেরই স্বভাব। প্রশ্ন হলো, আমার ভেতরের কোনো অংশ কি চাইছে, জিনিসটা তাকে না দেওয়া হলেই ভালো হতো? যদি চায়, নিজের কাছে সততার সঙ্গে তা স্বীকার করুন, আর মনে রাখুন দানটা কার: আল্লাহ নিজ অনুগ্রহে তাকে যা দিয়েছেন।"
          },
          {
            "en": "Then turn the feeling where the hadith turns it. If what you envy is wealth, the gift worth longing for is wealth spent in what is right, and you can begin with what you already have. If it is knowledge, the gift worth longing for is knowledge acted on and taught, and you can begin learning today. And make du'a for the person by name, asking Allah to bless them in what He gave. It is hard to go on wishing a blessing away from someone you are praying for.",
            "bn": "তারপর অনুভূতিটাকে সেদিকে ঘোরান, যেদিকে হাদীস ঘুরিয়েছে। যদি সম্পদ দেখে হিংসা হয়, তবে কামনার যোগ্য দান হলো ন্যায়ের পথে খরচ করা সম্পদ, আর তা শুরু করা যায় আপনার হাতে যা আছে তা দিয়েই। যদি জ্ঞান দেখে হয়, তবে কামনার যোগ্য দান হলো এমন জ্ঞান, যার ওপর আমল হয় আর যা শেখানো হয়, আর তা শেখা আজই শুরু করা যায়। আর মানুষটির নাম ধরে তার জন্য দোয়া করুন, আল্লাহ তাকে যা দিয়েছেন তাতে যেন বরকত দেন। যার জন্য দোয়া করছেন, তার নিয়ামত চলে যাক, এমন কামনা বেশিদিন টিকিয়ে রাখা কঠিন।"
          },
          {
            "en": "Envy also leaks into speech and judgment. On a small scale it is the habit of finding a fault in every person who is praised, or refusing to admit that a rival is right. When you notice yourself doing that, stop and ask what the person has been given, and by whom. And do not let this passage become a reason for contempt toward any community today. The Quran itself took care to say that some among them believed, and its lesson is aimed first at the heart of the one reading it.",
            "bn": "হিংসা কথাবার্তা আর বিচারেও চুঁইয়ে পড়ে। ছোট পরিসরে এটা এমন অভ্যাস, যে কারও প্রশংসা হলেই তার একটা দোষ খুঁজে বের করা, কিংবা প্রতিদ্বন্দ্বী ঠিক বললেও তা মানতে না চাওয়া। নিজেকে এমন করতে দেখলে থামুন, আর জিজ্ঞেস করুন মানুষটিকে কী দেওয়া হয়েছে, আর কে দিয়েছেন। আর এই অংশকে আজকের কোনো সম্প্রদায়ের প্রতি অবজ্ঞার কারণ বানাবেন না। কুরআন নিজেই যত্ন করে বলেছে, তাদের কেউ কেউ ঈমান এনেছিল। আর এর শিক্ষা সবার আগে লক্ষ্য করে যে পড়ছে তার নিজের হৃদয়কে।"
          }
        ]
      },
      {
        "h": {
          "en": "Refuge From Envy, Both Ways",
          "bn": "দুই দিকের হিংসা থেকে আশ্রয়"
        },
        "p": [
          {
            "en": "Two Quranic prayers meet this verse from two sides. Surah al-Falaq, recited morning and evening by many believers, ends in 113:5 with refuge from the evil of an envier when he envies. That protects you from the envy of others. And 59:10 protects you from your own: our Lord, forgive us and our brothers who preceded us in faith, and put not in our hearts any resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful. Between them they cover both the one who is envied and the one who envies.",
            "bn": "কুরআনের দুটি দোয়া এই আয়াতের দুই দিক থেকে এসে মেলে। সূরা ফালাক, যা অনেক মুমিন সকাল-সন্ধ্যা পড়েন, ১১৩:৫ আয়াতে শেষ হয় হিংসুকের অনিষ্ট থেকে আশ্রয় চেয়ে, যখন সে হিংসা করে। এটা আপনাকে রক্ষা করে অন্যের হিংসা থেকে। আর ৫৯:১০ আয়াত রক্ষা করে আপনার নিজের হিংসা থেকে: হে আমাদের রব, আমাদের ক্ষমা করো, আর আমাদের সেই ভাইদেরও, যারা ঈমানে আমাদের আগে গেছেন, আর যারা ঈমান এনেছে তাদের ব্যাপারে আমাদের অন্তরে কোনো বিদ্বেষ রেখো না। হে আমাদের রব, তুমি তো দয়ার্দ্র, পরম দয়ালু। দুটি মিলে যাকে হিংসা করা হয় আর যে হিংসা করে, দুজনকেই ঢেকে দেয়।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, what You have given others of Your bounty, make me glad for them. Give me of Your bounty, for all bounty is Yours. Do not let my heart wish any gift of Yours removed from anyone. Protect me from the envy of others, and protect others from mine.",
            "bn": "আয়াতের নিজের শব্দ থেকে একটি দোয়া, যা এখানে এভাবেই দেওয়া হলো, বর্ণিত কোনো দোয়া হিসেবে নয়: হে আল্লাহ, তুমি নিজ অনুগ্রহে অন্যদের যা দিয়েছ, তাতে আমাকে তাদের জন্য খুশি হতে দাও। তোমার অনুগ্রহ থেকে আমাকেও দাও, কারণ সব অনুগ্রহ তোমারই। তোমার কোনো দান কারও কাছ থেকে চলে যাক, আমার মন যেন এমন কামনা না করে। অন্যের হিংসা থেকে আমাকে রক্ষা করো, আর আমার হিংসা থেকে অন্যদের রক্ষা করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for an Honest Heart",
          "bn": "খোলা মনে কয়েকটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry from these verses. Whose blessing do I find hardest to be glad about, and what is it about that person that makes it hard? When I heard good news about someone recently, was my first feeling gladness, or a quiet wish that it had gone to me instead? Do I think of the good things in other people's lives as taken from my share, or as given to them by Allah from a bounty that has no limit?",
            "bn": "এই আয়াতগুলো থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। কার নিয়ামতে খুশি হওয়া আমার কাছে সবচেয়ে কঠিন, আর সেই মানুষটির কোন ব্যাপারটা একে কঠিন করে তোলে? সম্প্রতি কারও সুখবর শুনে আমার প্রথম অনুভূতি কী ছিল, খুশি, নাকি মনে মনে চাওয়া যে এটা আমার হলে ভালো হতো? অন্যদের জীবনের ভালো জিনিসগুলোকে কি আমি আমার ভাগ থেকে কেড়ে নেওয়া মনে করি, নাকি আল্লাহর সীমাহীন অনুগ্রহ থেকে তাদের দেওয়া দান?"
          },
          {
            "en": "What has Allah given me that I have stopped noticing because I keep looking at others? Is there someone I have spoken against, or refused to credit, only because they were given what I wanted? And if the two gifts of the hadith, wealth spent rightly and wisdom taught, were the only things I let myself compete for, how would my week look different?",
            "bn": "অন্যদের দিকে তাকিয়ে থাকতে থাকতে আল্লাহর দেওয়া কোন জিনিস আমার চোখেই পড়ে না? এমন কেউ কি আছে, যার বিরুদ্ধে আমি কথা বলেছি বা যার কৃতিত্ব মানিনি, শুধু এই কারণে যে আমি যা চেয়েছিলাম সে তা পেয়েছে? আর হাদীসের সেই দুটি দান, ন্যায়ের পথে খরচ করা সম্পদ আর শেখানো হিকমাত, যদি এগুলোই হতো আমার একমাত্র প্রতিযোগিতার বিষয়, তাহলে আমার সপ্তাহটা কতটা অন্যরকম হতো?"
          }
        ]
      }
    ]
  },
  "4:57": {
    "sections": [
      {
        "h": {
          "en": "The Second Half of a Pair",
          "bn": "জোড়ার দ্বিতীয় অর্ধেক"
        },
        "p": [
          {
            "en": "Surah an-Nisa is a Madinan surah, and this stretch of it answers a group who were given a portion of the Scripture and who, in 4:51, said of the disbelievers that they were better guided than the believers. 4:54 asks whether they envy people for what Allah has given them of His bounty, and 4:55 says that some of them believed in it and some were averse to it, and Hell is sufficient as a blaze. 4:56 then describes the Fire for those who disbelieve in Allah's verses, where skins are replaced so the punishment is tasted again. 4:57 opens with wa, and, and turns to the other side.",
            "bn": "সূরা আন-নিসা মাদানি সূরা। এর এই অংশে জবাব দেওয়া হচ্ছে এমন এক দলকে, যাদের কিতাবের একাংশ দেওয়া হয়েছিল, আর যারা ৪:৫১ আয়াত অনুযায়ী কাফিরদের সম্পর্কে বলত, তারাই মুমিনদের চেয়ে বেশি সঠিক পথে আছে। ৪:৫৪ আয়াত প্রশ্ন করে, আল্লাহ নিজ অনুগ্রহে মানুষকে যা দিয়েছেন, তার জন্য কি তারা হিংসা করে? ৪:৫৫ আয়াত বলে, তাদের কেউ ঈমান এনেছে, কেউ মুখ ফিরিয়েছে, আর প্রজ্বলিত জাহান্নামই যথেষ্ট। এরপর ৪:৫৬ আয়াতে আছে আল্লাহর আয়াত অস্বীকারকারীদের আগুন, যেখানে চামড়া বদলে দেওয়া হবে যেন শাস্তির স্বাদ বারবার পায়। ৪:৫৭ আয়াত শুরু হয় ওয়া, আর, দিয়ে, এবং অন্য পক্ষের দিকে ফেরে।"
          },
          {
            "en": "Ibn Kathir explains, at 2:25, that this kind of pairing is part of why the Quran is called mathani: it mentions faith and then disbelief, the miserable and then the happy, one after the other. Here the pairing is tight. Both verses speak in Allah's own voice with a verb of the future, We will make them enter a fire, and We will admit them to gardens, so the reader hears one against the other. And the verse that follows, 4:58, moves straight to rendering trusts and judging with justice, so the promise lands between a warning and a command to act.",
            "bn": "ইবনে কাসীর ২:২৫ আয়াতের ব্যাখ্যায় বলেন, কুরআনকে মাসানি বলার একটি কারণ এই জোড়া বাঁধা: ঈমানের কথা, তারপর কুফরের কথা; হতভাগাদের কথা, তারপর সৌভাগ্যবানদের কথা, একটির পর আরেকটি। এখানে জোড়াটা খুব ঘনিষ্ঠ। দুটি আয়াতেই আল্লাহ নিজে কথা বলছেন ভবিষ্যৎ কালের ক্রিয়ায়: আমি তাদের আগুনে প্রবেশ করাব, আর আমি তাদের জান্নাতে দাখিল করব। ফলে পাঠক একটিকে অন্যটির পাশে রেখেই শোনে। আর পরের আয়াত ৪:৫৮ সোজা চলে যায় আমানত ফিরিয়ে দেওয়া আর ন্যায়বিচারের নির্দেশে। প্রতিশ্রুতিটি তাই এসে বসে এক সতর্কবাণী আর এক কাজের নির্দেশের মাঝখানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Faith and Deeds Held Together",
          "bn": "ঈমান ও আমল একসঙ্গে"
        },
        "p": [
          {
            "en": "Alladhina amanu wa 'amilu as-salihat, those who believe and do righteous deeds. The two are joined by a single wa, and the Quran keeps them joined in verse after verse, as in 2:25, 2:82 and 103:3. As-salihat is plural and definite: not a single good act done once, but righteous deeds as the shape of a life. Al-Muyassar explains the people meant here as those whose hearts found rest in faith in Allah and in affirming the message of His Messenger ﷺ, and who stood firm on obedience. Faith and steadiness both appear in that gloss.",
            "bn": "আল্লাযীনা আমানূ ওয়া আমিলুস সালিহাত, যারা ঈমান আনে ও নেক আমল করে। দুটিকে জুড়েছে একটিমাত্র ওয়া, আর কুরআন আয়াতের পর আয়াতে এ দুটিকে জুড়েই রাখে, যেমন ২:২৫, ২:৮২ ও ১০৩:৩ আয়াতে। আস-সালিহাত বহুবচন, নির্দিষ্টও। মানে একবার করা কোনো একক ভালো কাজ নয়, বরং নেক আমল যখন জীবনের ধরন হয়ে যায়। তাফসীরে মুয়াসসার এখানে তাদের কথা বলে, যাদের অন্তর আল্লাহর প্রতি ঈমান আর তাঁর রসূল ﷺ-এর রিসালাতের স্বীকৃতিতে প্রশান্ত হয়েছে, আর যারা আনুগত্যে অটল থেকেছে। সেই ব্যাখ্যায় ঈমান আর অবিচলতা দুটিই আছে।"
          },
          {
            "en": "As-Sa'di draws the link between the two halves plainly: these are people whose faith moved them to do righteous deeds, both the obligatory and the recommended. Faith is the root, and the deeds are what grows from it. Ahsanul Bayaan, the Bengali tafsir in the app, makes the same point with an image, that faith without righteous deeds is like a flower without fragrance or a tree without fruit. The promise is addressed to a person, and the verse names that person by two things that are not meant to be separated.",
            "bn": "আল্লামা সাদি দুই অংশের সম্পর্কটা সোজাসুজি বলেন: এরা এমন মানুষ, যাদের ঈমান তাদের নেক আমলে চালিত করেছে, ফরজ আমলেও, মুস্তাহাব আমলেও। ঈমান হলো শিকড়, আর আমল তা থেকে গজিয়ে ওঠা ডালপালা। অ্যাপে থাকা বাংলা তাফসীর আহসানুল বায়ান একই কথা বলে একটি উপমায়: নেক আমল ছাড়া ঈমান যেন সুবাসহীন ফুল, ফলহীন গাছ। প্রতিশ্রুতিটি একজন মানুষের উদ্দেশে, আর আয়াতটি সেই মানুষকে চেনায় এমন দুটি জিনিস দিয়ে, যা আলাদা করার জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Forever, Purity and Shade",
          "bn": "চিরকাল, পবিত্রতা ও ছায়া"
        },
        "p": [
          {
            "en": "Khalidina fiha abada, abiding therein forever. Khalidin already carries lasting residence, and abada, forever, is added to it. Ibn Kathir says they will reside in it for eternity, will not be moved from it, and will not want to move, which is what 18:108 says of the people of Firdaws. Then azwajun mutahharah, purified spouses. The form is a passive participle, made pure, with the purifying left to Allah. Ibn Kathir describes them as free of filth, bad manners and shortcomings, and gathers from Ibn Abbas (RA) that they are purified of filth and foul things.",
            "bn": "খালিদীনা ফীহা আবাদা, সেখানে তারা চিরকাল থাকবে। খালিদীন শব্দেই স্থায়ী বসবাসের অর্থ আছে, তার সঙ্গে যোগ হয়েছে আবাদা, চিরকাল। ইবনে কাসীর বলেন, তারা সেখানে অনন্তকাল থাকবে, তাদের সেখান থেকে সরানো হবে না, আর তারা নিজেরাও সরে যেতে চাইবে না। ১৮:১০৮ আয়াত ফিরদাউসবাসীদের সম্পর্কে ঠিক এ কথাই বলে। তারপর আযওয়াজুম মুতাহহারাহ, পবিত্র সঙ্গী। শব্দটি কর্মবাচ্য, অর্থাৎ পবিত্র করা হয়েছে, আর পবিত্র করার কাজটি আল্লাহর। ইবনে কাসীর নিজে বলেন, তারা ময়লা, মন্দ স্বভাব ও ত্রুটি থেকে মুক্ত। আর ইবনে আব্বাস (রাঃ) থেকে আনেন, তারা ময়লা ও অশুচি থেকে পবিত্র।"
          },
          {
            "en": "Then the last clause: wa nudkhiluhum zillan zalila, and We will admit them to deepening shade. The verb of admitting is used a second time, now for the shade alone, as if the shade were a place of its own. The noun and its adjective come from one root, zill and zalil, a pairing Arabic uses to intensify. Ibn Kathir explains it as wide, extensive, pure and fine; al-Muyassar calls it thick and extended, and as-Sa'di a shade that always stays dense. Mujahid, as Ibn Kathir reports on 56:28-29, said the Quraysh loved the shade of their thorny desert trees.",
            "bn": "তারপর শেষ অংশ: ওয়া নুদখিলুহুম যিল্লান যালীলা, আর আমি তাদের দাখিল করব ঘন ছায়ায়। দাখিল করার ক্রিয়াটি এখানে দ্বিতীয়বার এসেছে, এবার শুধু ছায়ার জন্য, যেন ছায়া নিজেই আলাদা এক ঠিকানা। বিশেষ্য আর তার বিশেষণ একই মূল থেকে, যিল্ল আর যালীল। আরবিতে এমন জোড়া অর্থকে জোরালো করতে ব্যবহার হয়। ইবনে কাসীর এর অর্থ করেন প্রশস্ত, বিস্তৃত, নির্মল ও মনোরম ছায়া। তাফসীরে মুয়াসসার বলে ঘন ও বিস্তৃত, আর আল্লামা সাদি বলেন এমন ছায়া যা সবসময় ঘন থাকে। ইবনে কাসীর ৫৬:২৮-২৯ আয়াতের ব্যাখ্যায় মুজাহিদের কথা আনেন: কুরাইশরা তাদের মরুভূমির কাঁটাগাছের ছায়া খুব ভালোবাসত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tree Whose Shade Has No End",
          "bn": "যে গাছের ছায়া ফুরায় না"
        },
        "p": [
          {
            "en": "Ibn Kathir brings one narration to this clause. Through at-Tabari he cites Abu Hurayrah (RA) that the Prophet ﷺ said that in Paradise there is a tree in whose shade a rider could travel for a hundred years without crossing it. Al-Bukhari also records the narration of this tree and its shade from Abu Hurayrah (RA), and in that narration it is joined to the words of 56:30, and shade extended. The picture speaks to a traveller. A rider in open country counts his shade in minutes, under a rock or a single tree, and here is shade that outlasts a lifetime of riding.",
            "bn": "এই অংশে ইবনে কাসীর একটি বর্ণনা আনেন। তিনি ইমাম তাবারির সূত্রে আবু হুরাইরা (রাঃ) থেকে উল্লেখ করেন, নবী ﷺ বলেছেন, জান্নাতে এমন এক গাছ আছে, যার ছায়ায় একজন আরোহী একশো বছর চলেও তা পার হতে পারবে না। ইমাম বুখারীও আবু হুরাইরা (রাঃ) থেকে এই গাছ ও তার ছায়ার বর্ণনা এনেছেন, আর সেই বর্ণনায় তা জুড়ে আছে ৫৬:৩০ আয়াতের শব্দের সঙ্গে, বিস্তৃত ছায়া। ছবিটা মুসাফিরের মনে সরাসরি লাগে। খোলা প্রান্তরে একজন আরোহী ছায়া পায় কয়েক মিনিটের জন্য, কোনো পাথর বা একলা গাছের নিচে। আর এখানে এমন ছায়া, যা সারা জীবনের সফরকেও ছাড়িয়ে যায়।"
          },
          {
            "en": "A second narration keeps the reader honest about what such words can do. Al-Bukhari records from Abu Hurayrah (RA) that Allah says He has prepared for His righteous servants what no eye has seen, no ear has heard, and what has never crossed the heart of a human being. The rivers, the purity and the shade of 4:57 are described in words people already know, because those are the only words people have. The hadith warns against supposing that the words are the whole of the thing.",
            "bn": "দ্বিতীয় একটি বর্ণনা পাঠককে মনে করিয়ে দেয়, এমন শব্দ কতদূর যেতে পারে। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, আল্লাহ বলেন, তিনি তাঁর নেক বান্দাদের জন্য এমন কিছু প্রস্তুত রেখেছেন, যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের অন্তরে যার কল্পনাও জাগেনি। ৪:৫৭ আয়াতের নদী, পবিত্রতা আর ছায়ার বর্ণনা এসেছে মানুষের চেনা শব্দে, কারণ মানুষের কাছে চেনা শব্দই আছে। হাদীসটি সাবধান করে দেয়, শব্দগুলোকেই পুরো জিনিসটা ভেবে নেওয়া ঠিক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise Heard Elsewhere",
          "bn": "অন্য আয়াতে একই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "4:122, later in the same surah, repeats almost the whole promise, gardens beneath which rivers flow, abiding therein forever, and then seals it: the promise of Allah is truth, and who is more truthful than Allah in statement? 2:25 gives the same gardens and purified spouses as good tidings, and adds the fruit that seems like what they were given before. 3:15 names gardens, purified spouses, and then what is beyond both, approval from Allah.",
            "bn": "একই সূরার পরের দিকে ৪:১২২ আয়াত প্রায় পুরো প্রতিশ্রুতিটাই আবার বলে: এমন জান্নাত, যার পাদদেশে ঝর্ণাধারা প্রবাহিত, সেখানে তারা চিরকাল থাকবে। তারপর তাতে মোহর লাগিয়ে দেয়: আল্লাহর ওয়াদা সত্য, আর কথায় আল্লাহর চেয়ে বেশি সত্যবাদী কে? ২:২৫ আয়াত একই জান্নাত আর পবিত্র সঙ্গিনীর সুসংবাদ দেয়, সঙ্গে যোগ করে এমন ফলের কথা, যা দেখে তারা বলবে, আগেও তো আমরা এমনটা পেয়েছি। ৩:১৫ আয়াত জান্নাত ও পবিত্র সঙ্গীর কথা বলে, তারপর উল্লেখ করে এ দুয়েরও ঊর্ধ্বে যা, আল্লাহর সন্তুষ্টি।"
          },
          {
            "en": "On the shade itself, 13:35 says the fruit of Paradise is lasting, and its shade; 56:30 speaks of shade extended; and 76:13-14 adds that they will see no burning sun or freezing cold there, and its shades are near above them. 18:107-108 gives the Gardens of Firdaws as a lodging to those who believe and do righteous deeds, and says they will not desire any transfer from it. Each of these verses takes one thread of 4:57 and draws it further.",
            "bn": "শুধু ছায়ার কথায় এলে, ১৩:৩৫ আয়াত বলে জান্নাতের ফল চিরস্থায়ী, তার ছায়াও। ৫৬:৩০ আয়াত বলে বিস্তৃত ছায়ার কথা। ৭৬:১৩-১৪ আয়াত যোগ করে, সেখানে তারা অতি গরম বা অতি শীত দেখবে না, আর গাছের ছায়া থাকবে তাদের ওপর। ১৮:১০৭-১০৮ আয়াত বলে, যারা ঈমান আনে ও নেক আমল করে, তাদের আপ্যায়নের জন্য আছে ফিরদাউসের বাগান, আর সেখান থেকে তারা অন্য কোথাও যেতে চাইবে না। প্রতিটি আয়াত ৪:৫৭ আয়াতের একেকটি সুতো ধরে আরও দূর পর্যন্ত টেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Toward the Shade",
          "bn": "ছায়ার দিকে হাঁটা"
        },
        "p": [
          {
            "en": "The verse ties the promise to two things a person can do today: believe, and do righteous deeds. In practice that means treating deeds as the evidence of faith, not an optional extra. Someone who keeps his prayers but cheats a customer, or gives charity but lies about a colleague, has separated what the verse joins. The very next verse names the test: 4:58 commands rendering trusts to whom they are due and judging with justice. Paradise is promised in one verse, and honest dealing is commanded in the next.",
            "bn": "আয়াতটি প্রতিশ্রুতিকে বেঁধে দেয় এমন দুটি কাজের সঙ্গে, যা মানুষ আজই করতে পারে: ঈমান আনা আর নেক আমল করা। বাস্তবে এর মানে, আমলকে ঈমানের প্রমাণ হিসেবে দেখা, ইচ্ছামতো বাড়তি কিছু হিসেবে নয়। যে নামাজ ঠিক রাখে কিন্তু ক্রেতাকে ঠকায়, কিংবা দান করে কিন্তু সহকর্মীর নামে মিথ্যা বলে, সে আয়াতের জোড়া লাগানো দুটি জিনিসকে আলাদা করে ফেলেছে। পরীক্ষাটা পরের আয়াতেই আছে। ৪:৫৮ আয়াত নির্দেশ দেয় হকদারের আমানত তাকে ফিরিয়ে দিতে আর ন্যায়ের সঙ্গে বিচার করতে। এক আয়াতে জান্নাতের প্রতিশ্রুতি, ঠিক পরের আয়াতে সৎ লেনদেনের হুকুম।"
          },
          {
            "en": "The verse also changes how present hardship feels. A labourer in a hot field, a nurse on a night shift, a parent awake beside a sick child can recall zillan zalila, a shade that does not thin, and know that the tiredness has a destination. That is not escape from the day. It is the Quran's own way of giving present effort a future, the way a traveller keeps walking because he has been told where the water is.",
            "bn": "আয়াতটি এখনকার কষ্টের অনুভূতিও বদলে দেয়। রোদে পোড়া মাঠের শ্রমিক, রাতের শিফটের নার্স, অসুস্থ সন্তানের পাশে জেগে থাকা মা-বাবা মনে করতে পারেন যিল্লান যালীলা, এমন ছায়া যা পাতলা হয় না। তখন বোঝা যায়, এই ক্লান্তির একটি গন্তব্য আছে। এ দিনের দায় থেকে পালানো নয়। এ হলো বর্তমান পরিশ্রমকে ভবিষ্যৎ দেওয়ার কুরআনি পদ্ধতি, যেমন মুসাফির হাঁটতে থাকে, কারণ তাকে বলে দেওয়া হয়েছে পানি কোথায়।"
          },
          {
            "en": "Finally, the pairing with 4:56 teaches balance, in one's own heart and in how one speaks of Allah to others. Read the warning and the promise together. A person who hears only the Fire can slide into despair, and one who hears only the Garden can grow careless. The Quran sets them side by side, and a believer's own reading, and the way he talks to his children about the Hereafter, can keep them side by side as well.",
            "bn": "শেষ কথা, ৪:৫৬ আয়াতের সঙ্গে এই জোড়া ভারসাম্য শেখায়, নিজের অন্তরেও, অন্যের কাছে আল্লাহর কথা বলার সময়ও। সতর্কবাণী আর প্রতিশ্রুতি একসঙ্গে পড়ুন। যে শুধু আগুনের কথা শোনে, সে হতাশায় ডুবে যেতে পারে। আর যে শুধু জান্নাতের কথা শোনে, সে উদাসীন হয়ে যেতে পারে। কুরআন দুটিকে পাশাপাশি রেখেছে। একজন মুমিনের নিজের তিলাওয়াতেও, সন্তানদের সঙ্গে আখিরাত নিয়ে কথা বলার সময়ও দুটি পাশাপাশি থাকতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Garden",
          "bn": "জান্নাত চেয়ে দোয়া"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ told the believers that when they ask Allah, they should ask Him for al-Firdaws, which he described as the middle of Paradise and its highest part. The verse supplies the vocabulary for such asking. What follows is a supplication composed from the words of 4:57, not a transmitted du'a: O Allah, make us among those who believe and do righteous deeds, admit us to gardens beneath which rivers flow, and bring us into a shade that never thins.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ মুমিনদের বলেছেন, আল্লাহর কাছে চাইলে তাঁর কাছে ফিরদাউস চাইবে। তিনি ফিরদাউসকে বলেছেন জান্নাতের মধ্যভাগ আর তার সবচেয়ে উঁচু স্থান। এমন চাওয়ার ভাষা আয়াতটিই জুগিয়ে দেয়। নিচের দোয়াটি ৪:৫৭ আয়াতের শব্দ থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আমাদের তাদের অন্তর্ভুক্ত করো, যারা ঈমান আনে ও নেক আমল করে; আমাদের এমন জান্নাতে দাখিল করো, যার নিচে নদী বয়ে চলে; আর আমাদের এমন ছায়ায় নিয়ে যাও, যা কখনো পাতলা হয় না।"
          },
          {
            "en": "O Allah, purify us and those we love, never move us away from Your mercy, and do not make us among those described in the verse before it. The supplication follows the verse's own order, faith and deeds first, then the garden, the purity and the shade. It also asks protection from the warning that stands beside the promise, because the two verses are meant to be read as a pair.",
            "bn": "হে আল্লাহ, আমাদের ও আমাদের প্রিয়জনদের পবিত্র করো, তোমার রহমত থেকে আমাদের কখনো সরিয়ে দিয়ো না, আর আগের আয়াতে যাদের কথা আছে, আমাদের তাদের অন্তর্ভুক্ত কোরো না। দোয়াটি আয়াতের নিজের ক্রম মেনে চলে: আগে ঈমান ও আমল, তারপর জান্নাত, পবিত্রতা আর ছায়া। প্রতিশ্রুতির পাশে যে সতর্কবাণী দাঁড়িয়ে আছে, দোয়াটি তা থেকেও আশ্রয় চায়, কারণ দুটি আয়াত জোড়া হিসেবেই পড়ার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Heat of the Day",
          "bn": "দিনের রোদে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "When I read of the Fire in 4:56 and the Garden in 4:57, which one do I hurry past, and what does that say about my heart? Is my faith visible in righteous deeds that someone could actually point to this week, or does it live mostly in what I believe about myself? Where in my life have I kept faith and deeds apart, praying well but dealing badly with people, or dealing well and neglecting the prayer?",
            "bn": "৪:৫৬ আয়াতে আগুনের কথা আর ৪:৫৭ আয়াতে জান্নাতের কথা পড়ার সময় আমি কোনটা তাড়াহুড়ো করে পার হই, আর তা আমার অন্তর সম্পর্কে কী বলে? আমার ঈমান কি এমন নেক আমলে দেখা যায়, যা এই সপ্তাহে কেউ সত্যিই দেখিয়ে দিতে পারবে? নাকি তা বেশির ভাগ আছে নিজের সম্পর্কে আমার ধারণায়? জীবনের কোথায় আমি ঈমান আর আমলকে আলাদা রেখেছি: নামাজ ঠিক, কিন্তু মানুষের সঙ্গে আচরণ খারাপ; কিংবা আচরণ ভালো, কিন্তু নামাজে অবহেলা?"
          },
          {
            "en": "What present heat, a job, an illness, a long wait, could I carry more patiently if I remembered the shade this verse promises? When I speak about Paradise to my children or friends, do I use the Quran's own words and its restraint, or a picture I have invented? And if I were told that the promise begins with what I do before sunset today, what would I do differently?",
            "bn": "এখনকার কোন রোদ, কোনো চাকরি, কোনো অসুখ, কোনো দীর্ঘ অপেক্ষা, আমি আরও ধৈর্যের সঙ্গে বইতে পারতাম, যদি এই আয়াতের প্রতিশ্রুত ছায়ার কথা মনে রাখতাম? সন্তান বা বন্ধুদের কাছে জান্নাতের কথা বলার সময় আমি কি কুরআনের নিজের শব্দ আর তার সংযম ব্যবহার করি, নাকি নিজের বানানো কোনো ছবি? আর যদি আমাকে বলা হতো, প্রতিশ্রুতির শুরু আজ সূর্য ডোবার আগে আমি কী করি তা থেকে, তবে আমি কী ভিন্নভাবে করতাম?"
          }
        ]
      }
    ]
  },
  "4:60-63": {
    "sections": [
      {
        "h": {
          "en": "Right After the Command to Refer Back",
          "bn": "ফিরিয়ে দেওয়ার নির্দেশের ঠিক পরে"
        },
        "p": [
          {
            "en": "The passage follows two commands. 4:58 tells the believers to render trusts to whom they are due and to judge between people with justice, and 4:59 tells them to obey Allah, the Messenger and those in authority, and to refer any disagreement to Allah and the Messenger. 4:60 then asks the Prophet ﷺ, have you not seen, about people who claim to believe in what was revealed to him and before him, yet wish to take their disputes to taghut, though they were commanded to reject it. The portrait stands directly against the instruction it breaks.",
            "bn": "এই অংশ আসে দুটি নির্দেশের পরে। ৪:৫৮ আয়াত মুমিনদের বলে হকদারের আমানত তাকে ফিরিয়ে দিতে আর মানুষের মধ্যে ন্যায়ের সঙ্গে বিচার করতে। ৪:৫৯ আয়াত বলে আল্লাহ, রসূল ও দায়িত্বশীলদের আনুগত্য করতে, আর কোনো বিষয়ে মতভেদ হলে তা আল্লাহ ও রসূলের দিকে ফিরিয়ে দিতে। এরপর ৪:৬০ আয়াত নবী ﷺ-কে জিজ্ঞেস করে, তুমি কি দেখোনি? কাদের? যারা দাবি করে, তাঁর প্রতি ও তাঁর আগে যা নাযিল হয়েছে তাতে তারা ঈমান এনেছে, অথচ বিবাদ নিয়ে যেতে চায় তাগূতের কাছে, যদিও তাদের তা অস্বীকার করার আদেশ দেওয়া হয়েছিল। ছবিটা ঠিক সেই নির্দেশের মুখোমুখি দাঁড়িয়ে, যা এরা ভাঙছে।"
          },
          {
            "en": "4:61 adds that when they are told to come to what Allah has revealed and to the Messenger, the hypocrites turn away in aversion. 4:62 describes them after their own deeds bring a disaster upon them: they come to him swearing by Allah that they intended nothing but good conduct and accommodation. 4:63 tells him how to respond. The passage then runs on into 4:64-65, that every messenger was sent to be obeyed, and that they will not truly believe until they make him judge in their disputes and accept his judgement without discomfort.",
            "bn": "৪:৬১ আয়াত যোগ করে, তাদের যখন বলা হয় আল্লাহর নাযিল করা বিধান আর রসূলের দিকে এসো, তখন মুনাফিকরা বিরক্ত হয়ে মুখ ফিরিয়ে নেয়। ৪:৬২ আয়াত দেখায়, নিজেদের কাজের ফলে বিপদ নেমে এলে তাদের অবস্থা কী হয়: তারা নবী ﷺ-এর কাছে এসে আল্লাহর নামে কসম খায়, আমরা সদ্ভাব আর সম্প্রীতি ছাড়া কিছুই চাইনি। ৪:৬৩ আয়াত তাঁকে জানিয়ে দেয় কীভাবে জবাব দেবেন। এরপর আলোচনা গড়িয়ে যায় ৪:৬৪-৬৫ আয়াতে: প্রত্যেক রসূলকে পাঠানো হয়েছে আনুগত্যের জন্য, আর তারা প্রকৃত মুমিন হবে না যতক্ষণ না বিবাদে তাঁকে বিচারক মানে এবং তাঁর ফয়সালা মনে কোনো কুণ্ঠা ছাড়াই মেনে নেয়।"
          },
          {
            "en": "The reports on the occasion differ. Al-Wahidi reports a dispute between a Jewish man and a hypocrite who professed Islam, in which the Jewish man asked that the Prophet ﷺ judge between them and the hypocrite insisted on Ka'b ibn al-Ashraf. Ibn Kathir gives a report of this kind alongside others, one saying the verse concerned hypocrites who wanted the judgement of the Jahiliyyah, and notes that still other reasons were reported. He then says the verse is general, rebuking everyone who turns from the Book and the Sunnah to a falsehood of his own choosing.",
            "bn": "আয়াত নাযিলের প্রেক্ষাপট নিয়ে বর্ণনাগুলো এক নয়। ইমাম ওয়াহিদি একটি বিবাদের কথা বর্ণনা করেন, এক ইহুদি আর ইসলামের দাবিদার এক মুনাফিকের মধ্যে। ইহুদি লোকটি চেয়েছিল নবী ﷺ বিচার করুন, আর মুনাফিকটি জেদ ধরেছিল কাব ইবনুল আশরাফের কাছে যাওয়ার। ইবনে কাসীর এ ধরনের একটি বর্ণনা আনেন আরও কয়েকটির পাশে। একটিতে বলা হয়েছে, আয়াতটি সেই মুনাফিকদের নিয়ে, যারা জাহিলি যুগের বিচার চাইত। তিনি এও বলেন যে আরও কারণ বর্ণিত আছে। তারপর বলেন, আয়াতের অর্থ ব্যাপক: কিতাব ও সুন্নাহ ছেড়ে নিজের পছন্দের কোনো বাতিলের কাছে বিচার চাওয়া প্রত্যেককেই তা তিরস্কার করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Claim, a Court and an Oath",
          "bn": "দাবি, আদালত আর কসম"
        },
        "p": [
          {
            "en": "Yaz'umuna, they claim. Ar-Raghib al-Isfahani explains za'm in al-Mufradat as reporting a statement that is open to the suspicion of being false, and here it is used of a faith that lives mainly in words. Yatahakamu, from the root of hukm, judgement, is to take a case to someone for a ruling. At-taghut is whatever is followed in place of Allah; Ibn Kathir applies it here to any falsehood people choose as their judge, and as-Sa'di to everyone who judges in opposition to what Allah has laid down.",
            "bn": "ইয়াযউমূনা, তারা দাবি করে। ইমাম রাগিব ইসফাহানি আল-মুফরাদাত গ্রন্থে যাআম শব্দের ব্যাখ্যা দেন এমন কথা বর্ণনা করা হিসেবে, যা মিথ্যা হওয়ার সন্দেহ রাখে। এখানে শব্দটি এসেছে এমন ঈমানের জন্য, যা বেশির ভাগই মুখের কথায়। ইয়াতাহাকামূ এসেছে হুকম, অর্থাৎ বিচার, মূল থেকে। এর মানে কারও কাছে মামলা নিয়ে যাওয়া ফয়সালার জন্য। তাগূত হলো আল্লাহকে ছেড়ে যার অনুসরণ করা হয়। ইবনে কাসীর এখানে একে প্রয়োগ করেন এমন যেকোনো বাতিলের ওপর, যাকে মানুষ বিচারক বানায়। আর আল্লামা সাদি প্রয়োগ করেন আল্লাহর বিধানের বিরুদ্ধে ফয়সালা দেয় এমন প্রত্যেকের ওপর।"
          },
          {
            "en": "4:61 closes with yasudduna 'anka sududa, turning away from you in aversion. The verb is followed by its own verbal noun, a common Arabic way of stressing an action, so the turning is complete rather than hesitant. The oath of 4:62 also has a precise shape: in aradna illa ihsanan wa tawfiqa, we intended nothing but good conduct and accommodation. A negation followed by illa, except, is the form of an emphatic restriction. They do not merely say they meant well; they insist they meant nothing else.",
            "bn": "৪:৬১ আয়াত শেষ হয় ইয়াসুদ্দূনা আনকা সুদূদা দিয়ে, তারা বিরক্ত হয়ে তোমার কাছ থেকে মুখ ফিরিয়ে নেয়। ক্রিয়ার পরেই এসেছে তার নিজের ক্রিয়াবিশেষ্য। আরবিতে কোনো কাজের ওপর জোর দেওয়ার এটা পরিচিত রীতি। ফলে মুখ ফেরানোটা দ্বিধার নয়, পুরোপুরি। ৪:৬২ আয়াতের কসমেরও একটা নির্দিষ্ট গড়ন আছে: ইন আরাদনা ইল্লা ইহসানাও ওয়া তাওফীকা, আমরা সদ্ভাব আর সম্প্রীতি ছাড়া কিছুই চাইনি। না-বাচক কথার পরে ইল্লা, ছাড়া, এলে তা জোরালোভাবে সীমাবদ্ধ করার ভঙ্গি। তারা শুধু বলছে না যে তাদের নিয়ত ভালো ছিল। তারা জোর দিয়ে বলছে, অন্য কোনো নিয়তই ছিল না।"
          },
          {
            "en": "4:63 answers with three imperatives: fa-a'rid 'anhum, turn away from them; wa 'izhum, admonish them; wa qul lahum fi anfusihim qawlan baligha, and speak to them a far-reaching word. Baligh comes from the root of reaching, a word that arrives where it is aimed. Fi anfusihim can be read with speak, meaning privately, or with far-reaching, meaning a word that reaches into their souls. Ibn Kathir takes the first: advise them between you and them, with effective words that might benefit them.",
            "bn": "৪:৬৩ আয়াত জবাব দেয় তিনটি আদেশে: ফা-আরিদ আনহুম, তাদের উপেক্ষা করো; ওয়া ইযহুম, তাদের উপদেশ দাও; ওয়া কুল লাহুম ফী আনফুসিহিম কাওলাম বালীগা, আর তাদের এমন কথা বলো যা গভীরে পৌঁছায়। বালীগ এসেছে পৌঁছানোর মূল থেকে, এমন কথা যা লক্ষ্যে গিয়ে পৌঁছায়। ফী আনফুসিহিম অংশটি বলো ক্রিয়ার সঙ্গে পড়লে অর্থ হয় একান্তে বলো। আর বালীগ শব্দের সঙ্গে পড়লে অর্থ হয় এমন কথা, যা তাদের অন্তরে পৌঁছায়। ইবনে কাসীর প্রথম অর্থটি নেন: তোমার আর তাদের মাঝে একান্তে উপদেশ দাও, এমন কার্যকর কথায় যা তাদের উপকারে আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearts Are Left to Allah",
          "bn": "অন্তরের বিষয় আল্লাহর হাতে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads 4:62 as an apology after the fact. When disasters brought on by their own sins make them need the Prophet ﷺ, they come swearing that in going to another judge they sought only goodwill and conciliation, not that they believed in that other judgement. As-Sa'di is blunter: they are lying, because true good lies in referring judgement to Allah and His Messenger ﷺ. Ahsanul Bayaan gives their excuse in their own voice: our aim in going elsewhere was not to take a verdict from there, or to find more justice than with you, but goodwill and good relations.",
            "bn": "ইবনে কাসীর ৪:৬২ আয়াতকে পড়েন ঘটনা ঘটে যাওয়ার পরের কৈফিয়ত হিসেবে। নিজেদের গুনাহের কারণে বিপদে পড়ে যখন তাদের নবী ﷺ-এর দরকার হয়, তখন তারা এসে কসম খায়: অন্য বিচারকের কাছে গিয়েছিলাম শুধু সদ্ভাব আর মীমাংসার জন্য, সেই বিচারে বিশ্বাস করি বলে নয়। আল্লামা সাদি আরও সোজা বলেন: তারা মিথ্যা বলছে, কারণ প্রকৃত কল্যাণ তো আল্লাহ ও তাঁর রসূল ﷺ-এর কাছে বিচার নিয়ে যাওয়াতেই। আহসানুল বায়ান তাদের অজুহাত তাদের মুখেই তুলে ধরে: অন্যত্র যাওয়ার উদ্দেশ্য সেখান থেকে ফয়সালা নেওয়া ছিল না, তোমার চেয়ে বেশি সুবিচার পাওয়াও ছিল না, উদ্দেশ্য ছিল কল্যাণ আর সুসম্পর্ক।"
          },
          {
            "en": "On 4:63 the commentators draw out a principle of great weight. Ibn Kathir explains turn away from them as do not punish them for what is in their hearts; Allah knows what they hide and suffices for it. What the Prophet ﷺ is told to do instead is to advise them, between himself and them, with words that might benefit them. As-Sa'di adds that counsel given privately is more likely to reach its aim, and that even when a caller turns away from someone doing wrong, he should still admonish him in private and speak persuasively.",
            "bn": "৪:৬৩ আয়াত থেকে মুফাসসিরগণ অত্যন্ত গুরুত্বপূর্ণ একটি নীতি বের করেন। ইবনে কাসীর তাদের উপেক্ষা করো কথাটির ব্যাখ্যা দেন এভাবে: তাদের অন্তরে যা আছে, তার জন্য তাদের শাস্তি দিয়ো না। তারা যা লুকায়, আল্লাহ তা জানেন, আর সে জন্য তিনিই যথেষ্ট। এর বদলে নবী ﷺ-কে বলা হয়েছে একান্তে তাদের উপদেশ দিতে, এমন কথায় যা তাদের উপকারে আসতে পারে। আল্লামা সাদি যোগ করেন, একান্তে দেওয়া উপদেশ লক্ষ্যে পৌঁছানোর সম্ভাবনা বেশি রাখে। আর দাঈ কোনো অন্যায়কারী থেকে মুখ ফিরিয়ে নিলেও তাকে একান্তে উপদেশ দেবেন, আর কথা বলবেন হৃদয়গ্রাহী করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stream, a Ruling and a Warning",
          "bn": "একটি নালা, একটি ফয়সালা, একটি সতর্কবাণী"
        },
        "p": [
          {
            "en": "The reports on the occasion of 4:60-62 do not agree, and they are given above with that caution. The close of the passage, 4:65, has a narration in al-Bukhari. Urwah relates that az-Zubayr (RA) quarrelled with a man of the Ansar over a stream that both used to water their palms. The Prophet ﷺ told az-Zubayr to water his land and then let the water flow on to his neighbour. The Ansari became angry and said: is it because he is your cousin? The face of the Prophet ﷺ changed.",
            "bn": "৪:৬০-৬২ আয়াতের প্রেক্ষাপট নিয়ে বর্ণনাগুলো একমত নয়, তাই ওপরে সেগুলো সতর্কতার সঙ্গেই আনা হয়েছে। এই অংশের সমাপ্তি ৪:৬৫ আয়াত নিয়ে সহিহ বুখারিতে একটি বর্ণনা আছে। উরওয়া বর্ণনা করেন, যুবাইর (রাঃ) আনসারের এক ব্যক্তির সঙ্গে একটি নালার পানি নিয়ে বিবাদ করেন, যা দিয়ে দুজনেই খেজুরবাগানে সেচ দিতেন। নবী ﷺ যুবাইরকে বললেন, নিজের জমিতে পানি দাও, তারপর প্রতিবেশীর দিকে ছেড়ে দাও। আনসারি লোকটি রেগে বলল, সে আপনার ফুফাতো ভাই বলেই কি? তখন নবী ﷺ-এর চেহারার রং বদলে গেল।"
          },
          {
            "en": "He then told az-Zubayr to water and hold back the water until it reached the walls around the palms, and only then release it, giving az-Zubayr his full right, where his first ruling had been a generous course for both men. Az-Zubayr said that he thought this verse was revealed about that case: but no, by your Lord, they will not truly believe until they make you judge. The report does not call the Ansari a hypocrite, and az-Zubayr gives the link to the verse as his opinion, not as a certainty.",
            "bn": "এরপর তিনি যুবাইরকে বললেন, পানি দাও, আর পানি আটকে রাখো যতক্ষণ না তা খেজুরগাছের চারপাশের আল পর্যন্ত পৌঁছায়, তারপর ছাড়ো। এভাবে তিনি যুবাইরকে তাঁর পূর্ণ হক দিলেন, অথচ প্রথম ফয়সালাটি ছিল দুজনের জন্যই উদার একটি পথ। যুবাইর (রাঃ) বলেন, আমার ধারণা, এই আয়াত সেই ঘটনা নিয়েই নাযিল হয়েছে: কিন্তু না, তোমার প্রতিপালকের শপথ, তারা প্রকৃত মুমিন হবে না যতক্ষণ না তোমাকে বিচারক মানে। বর্ণনাটি আনসারি লোকটিকে মুনাফিক বলে না। আর যুবাইর (রাঃ) আয়াতের সঙ্গে ঘটনাটির সম্পর্ক জানান নিজের ধারণা হিসেবে, নিশ্চিত কথা হিসেবে নয়।"
          },
          {
            "en": "Al-Bukhari also records from Abu Hurayrah (RA) that the Prophet ﷺ said the signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays (al-Bukhari 33). The oath of 4:62 sits close to the first of these, and the command about trusts in 4:58 close to the third. A believer does well to look for these signs in himself before he looks for them in anyone else.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে আরও বর্ণনা করেন, নবী ﷺ বলেছেন, মুনাফিকের আলামত তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভঙ্গ করে, আর আমানত রাখা হলে খেয়ানত করে (বুখারী ৩৩)। ৪:৬২ আয়াতের কসম প্রথম আলামতটির কাছাকাছি, আর ৪:৫৮ আয়াতের আমানতের নির্দেশ তৃতীয়টির কাছাকাছি। একজন মুমিনের উচিত অন্য কারও মধ্যে এসব আলামত খোঁজার আগে নিজের মধ্যে খোঁজা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Portrait in Other Surahs",
          "bn": "অন্য সূরায় একই ছবি"
        },
        "p": [
          {
            "en": "24:48-50 is the closest parallel. When called to Allah and His Messenger to judge between them, a party turns aside; if the right is theirs, they come in prompt obedience; and the verses ask whether there is disease in their hearts, or doubt, or fear of injustice. 24:51 gives the opposite: the only statement of the believers when so called is, we hear and we obey, and those are the successful. The test, then, is not whether one ever goes to the Messenger ﷺ, but whether one goes when the ruling may go against oneself.",
            "bn": "সবচেয়ে কাছের মিল ২৪:৪৮-৫০ আয়াতে। আল্লাহ ও তাঁর রসূলের দিকে বিচারের জন্য ডাকা হলে একদল মুখ ফিরিয়ে নেয়। হক তাদের পক্ষে থাকলে তারা বিনয়ের সঙ্গে ছুটে আসে। আয়াতগুলো প্রশ্ন করে, তাদের অন্তরে কি রোগ আছে, নাকি সন্দেহ, নাকি অবিচারের ভয়? ২৪:৫১ আয়াত দেখায় উল্টো ছবি: এমন ডাকে মুমিনদের একমাত্র জবাব, আমরা শুনলাম ও মেনে নিলাম, আর তারাই সফলকাম। তাহলে পরীক্ষাটা এই নয় যে কেউ কখনো রসূল ﷺ-এর কাছে যায় কি না। পরীক্ষা হলো, ফয়সালা নিজের বিরুদ্ধে যেতে পারে জেনেও সে যায় কি না।"
          },
          {
            "en": "63:1-2 and 58:16 describe hypocrites who take their oaths as a cover and so avert people from the way of Allah, which is the shape of the oath in 4:62. 9:62 says they swear by Allah to satisfy the believers, when Allah and His Messenger are more worthy of being satisfied. And 5:50 asks the question underneath the whole passage: is it the judgement of the time of ignorance they desire, and who is better than Allah in judgement for a people who are certain?",
            "bn": "৬৩:১-২ ও ৫৮:১৬ আয়াতে আছে এমন মুনাফিকদের কথা, যারা কসমকে ঢাল বানায় আর এভাবে মানুষকে আল্লাহর পথ থেকে ফিরিয়ে রাখে। ৪:৬২ আয়াতের কসমের গড়নও এমনই। ৯:৬২ আয়াত বলে, মুমিনদের খুশি করার জন্য তারা আল্লাহর নামে কসম খায়, অথচ খুশি করার সবচেয়ে বেশি হকদার আল্লাহ ও তাঁর রসূল। আর ৫:৫০ আয়াত পুরো অংশের তলার প্রশ্নটি করে: তারা কি জাহিলি যুগের বিচার চায়? দৃঢ় বিশ্বাসী সম্প্রদায়ের জন্য বিচারে আল্লাহর চেয়ে উত্তম কে?"
          }
        ]
      },
      {
        "h": {
          "en": "When the Ruling Goes Against Me",
          "bn": "ফয়সালা যখন আমার বিপক্ষে"
        },
        "p": [
          {
            "en": "The passage exposes a habit that is not limited to courts. A person asks a scholar a question, dislikes the answer, and keeps asking until someone says what he wanted. A family dispute over inheritance is taken to the relatives who will side with him, rather than to the shares Allah fixed in 4:11-12 of this same surah. The test of 24:49 is easy to apply to oneself: do I accept the Quran and Sunnah when the right is mine, and look for another door when it is not?",
            "bn": "এই অংশ এমন এক অভ্যাস ধরিয়ে দেয়, যা শুধু আদালতে সীমাবদ্ধ নয়। কেউ একজন আলেমকে প্রশ্ন করে, উত্তর পছন্দ হয় না, তারপর প্রশ্ন করতেই থাকে, যতক্ষণ না কেউ তার মনমতো কথা বলে। মিরাস নিয়ে পারিবারিক বিবাদ নিয়ে যাওয়া হয় সেই আত্মীয়দের কাছে, যারা নিজের পক্ষ নেবে। অথচ এই সূরারই ৪:১১-১২ আয়াতে আল্লাহ অংশগুলো ঠিক করে দিয়েছেন। ২৪:৪৯ আয়াতের পরীক্ষাটা নিজের ওপর চালানো সহজ: হক আমার পক্ষে থাকলে আমি কুরআন ও সুন্নাহ মেনে নিই, আর না থাকলে অন্য দরজা খুঁজি?"
          },
          {
            "en": "The oath of 4:62 also has a familiar sound: I only meant to keep the peace. Good intentions are real, but the verse shows how they can be used as cover after a wrong choice has already been made. The honest response to such a mistake is the one described in 4:64: to come back and seek Allah's forgiveness, not to swear that the mistake was a kindness.",
            "bn": "৪:৬২ আয়াতের কসমটাও আমাদের চেনা: আমি তো শুধু শান্তি রাখতে চেয়েছিলাম। ভালো নিয়ত বাস্তব জিনিস। কিন্তু আয়াতটি দেখায়, ভুল সিদ্ধান্ত নেওয়া হয়ে যাওয়ার পরে কীভাবে ভালো নিয়তকে ঢাল বানানো যায়। এমন ভুলের সৎ জবাব ৪:৬৪ আয়াতে বলা হয়েছে: ফিরে আসা আর আল্লাহর কাছে মাফ চাওয়া। ভুলটাকে উপকার বলে কসম খাওয়া নয়।"
          },
          {
            "en": "And 4:63 teaches how to deal with someone who has done this. The instruction to the Prophet ﷺ was not public exposure and not a verdict on the person's heart, but private counsel in words chosen to reach him. A believer who sees a relative or colleague evading what is right can keep the same order: leave what is hidden to Allah, speak in private, and choose words that can actually be heard.",
            "bn": "আর যে এমনটা করেছে, তার সঙ্গে কেমন আচরণ করতে হবে, ৪:৬৩ আয়াত তা শেখায়। নবী ﷺ-কে দেওয়া নির্দেশ প্রকাশ্যে অপদস্থ করা ছিল না, মানুষটির অন্তরের ওপর রায় দেওয়াও ছিল না। নির্দেশ ছিল একান্তে উপদেশ দেওয়া, এমন বাছাই করা কথায় যা তার মনে পৌঁছায়। কোনো আত্মীয় বা সহকর্মীকে সঠিক পথ এড়াতে দেখলে একজন মুমিন একই ক্রম মেনে চলতে পারেন: গোপন বিষয় আল্লাহর কাছে ছেড়ে দেওয়া, একান্তে কথা বলা, আর এমন শব্দ বেছে নেওয়া যা সত্যিই শোনা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "We Hear and We Obey",
          "bn": "আমরা শুনলাম ও মেনে নিলাম"
        },
        "p": [
          {
            "en": "The words that answer this passage already stand in the Quran as a supplication. 2:285 records the believers saying: we hear and we obey; Your forgiveness, our Lord, and to You is the final destination. The same first words appear in 24:51 as the only statement of the believers when they are called to Allah and His Messenger to judge between them. A believer can make that sentence his own at the moment a ruling of Allah is hard to accept.",
            "bn": "এই অংশের জবাব যে কথায়, তা কুরআনে দোয়া হিসেবেই আছে। ২:২৮৫ আয়াতে মুমিনদের কথা: আমরা শুনলাম ও মেনে নিলাম; হে আমাদের প্রতিপালক, আমাদের ক্ষমা করো, আর তোমার দিকেই প্রত্যাবর্তন। একই শুরুর কথাগুলো ২৪:৫১ আয়াতে এসেছে মুমিনদের একমাত্র জবাব হিসেবে, যখন তাদের আল্লাহ ও তাঁর রসূলের দিকে বিচারের জন্য ডাকা হয়। আল্লাহর কোনো বিধান মেনে নেওয়া কঠিন লাগার মুহূর্তে একজন মুমিন এই বাক্যটিকে নিজের করে নিতে পারেন।"
          },
          {
            "en": "What follows is a supplication composed from the passage, not a transmitted du'a: O Allah, when I am called to what You revealed and to Your Messenger, make me come willingly and not turn away; when a ruling goes against me, remove the discomfort from my heart; when I have erred, bring me to seek Your forgiveness instead of swearing that I meant well; and give me words that reach the hearts of those I counsel.",
            "bn": "নিচের দোয়াটি এই অংশ থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, তোমার নাযিল করা বিধান আর তোমার রসূলের দিকে যখন আমাকে ডাকা হয়, আমাকে খুশিমনে আসার তাওফীক দাও, মুখ ফিরিয়ে নিতে দিয়ো না; কোনো ফয়সালা আমার বিপক্ষে গেলে আমার অন্তর থেকে কুণ্ঠা দূর করে দাও; আমি ভুল করলে আমাকে ভালো নিয়তের কসম খাওয়ার বদলে তোমার কাছে মাফ চাওয়ার দিকে নিয়ে যাও; আর যাদের উপদেশ দিই, তাদের অন্তরে পৌঁছায় এমন কথা আমাকে দান করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Before I Look for Another Door",
          "bn": "অন্য দরজা খোঁজার আগে"
        },
        "p": [
          {
            "en": "When a clear ruling of the Quran or Sunnah goes against what I want, do I accept it, or start searching for someone who will tell me otherwise? Have I ever come readily to the way of the Messenger ﷺ only when it favoured me, as 24:49 describes? When a choice of mine has gone wrong, do I reach first for an excuse about good intentions, or for tawbah and the work of putting it right?",
            "bn": "কুরআন বা সুন্নাহর কোনো স্পষ্ট বিধান আমার চাওয়ার বিরুদ্ধে গেলে আমি কি তা মেনে নিই, নাকি এমন কাউকে খুঁজতে শুরু করি যে ভিন্ন কথা বলবে? ২৪:৪৯ আয়াতে যেমন বলা হয়েছে, আমি কি কখনো রসূল ﷺ-এর পথে আগ্রহ নিয়ে এসেছি কেবল তখনই, যখন তা আমার পক্ষে ছিল? আমার কোনো সিদ্ধান্ত ভুল হলে আমি কি আগে ভালো নিয়তের অজুহাত খুঁজি, নাকি তওবা আর ভুল শোধরানোর কাজে হাত দিই?"
          },
          {
            "en": "When I see someone else evading what is right, do I pass a verdict on what is in his heart, or leave that to Allah and look for a private, well-chosen word? And if my own words of faith were weighed against the way I settle my disputes, would they count as belief, or only as a claim?",
            "bn": "অন্য কাউকে সঠিক পথ এড়াতে দেখলে আমি কি তার অন্তরে কী আছে তা নিয়ে রায় দিয়ে ফেলি, নাকি তা আল্লাহর কাছে ছেড়ে দিয়ে একান্তে বলার মতো ভেবেচিন্তে বাছাই করা কথা খুঁজি? আর আমার মুখের ঈমানের কথাগুলোকে যদি আমি নিজের বিবাদ কীভাবে মেটাই তার সঙ্গে ওজন করা হয়, সেগুলো কি ঈমান বলে গণ্য হবে, নাকি শুধু একটা দাবি?"
          }
        ]
      }
    ]
  },
  "4:69-70": {
    "sections": [
      {
        "h": {
          "en": "A Promise Between Two Commands",
          "bn": "দুই আদেশের মাঝে এক ওয়াদা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and the verses before this one are about obedience under pressure. 4:60-63 describe people who claimed to believe yet wanted to take their disputes to another judge. 4:64 says every messenger was sent to be obeyed by Allah's permission, and 4:65 swears that they will not truly believe until they make the Prophet ﷺ judge in their disputes and find no discomfort in his ruling. 4:66-68 add that had they done what they were instructed, it would have been better for them, with a great reward and guidance to a straight path.",
            "bn": "সূরা নিসা মাদানি, আর এর আগের আয়াতগুলো চাপের মুখে আনুগত্য নিয়ে। ৪:৬০ থেকে ৪:৬৩ আয়াতে আছে এমন লোকদের কথা, যারা ঈমানের দাবি করত, অথচ বিবাদ নিয়ে যেতে চাইত অন্য বিচারকের কাছে। ৪:৬৪ আয়াত বলে, প্রত্যেক রাসূলকে পাঠানো হয়েছে এজন্য, যেন আল্লাহর অনুমতিতে তাঁর আনুগত্য করা হয়। আর ৪:৬৫ আয়াতে শপথ করে বলা হয়, তারা সত্যিকারের মুমিন হবে না, যতক্ষণ না বিবাদে নবী ﷺ-কে বিচারক মানে আর তাঁর ফয়সালায় মনে কোনো কুণ্ঠা না রাখে। ৪:৬৬ থেকে ৪:৬৮ আয়াত যোগ করে, যা করতে বলা হয়েছিল তা করলে তাদেরই কল্যাণ হতো, সঙ্গে মহা পুরস্কার আর সরল পথের হিদায়াত।"
          },
          {
            "en": "Then comes our verse: whoever obeys Allah and the Messenger. It gathers the argument of the preceding verses into a single promise. Right after it, 4:70 names that promise a bounty, and 4:71 turns to a new command, to take precautions and go forth, while 4:72 describes the one who lingers behind. So the promise of noble company sits between a call to accept the Prophet's ﷺ judgment and a call to go out with him. Ibn Kathir also records a report about why the verse came down, given in the hadith section below.",
            "bn": "তারপর আসে আমাদের আয়াত: যে আল্লাহ ও রাসূলের আনুগত্য করে। আগের আয়াতগুলোর পুরো যুক্তিকে এটি একটি ওয়াদায় জড়ো করে। ঠিক পরে ৪:৭০ আয়াত সেই ওয়াদাকে বলে অনুগ্রহ, আর ৪:৭১ আয়াত ফেরে নতুন এক আদেশে, সতর্কতা নাও আর বেরিয়ে পড়ো। ৪:৭২ আয়াতে আসে পেছনে পড়ে থাকা লোকের কথা। ফলে উত্তম সঙ্গের ওয়াদাটা বসে আছে দুই আহ্বানের মাঝখানে: নবী ﷺ-এর ফয়সালা মেনে নেওয়ার আহ্বান, আর তাঁর সঙ্গে বেরিয়ে পড়ার আহ্বান। আয়াতটি কেন নাজিল হয়েছিল, সে বিষয়ে ইবনে কাসীর একটি বর্ণনাও এনেছেন, যা নিচে হাদীসের অংশে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "With, Favoured, Companion",
          "bn": "সঙ্গে, নিয়ামতপ্রাপ্ত, সাথি"
        },
        "p": [
          {
            "en": "The verse does not say that the obedient will be prophets, or equal to them. It says fa-ula'ika ma'a alladhina an'ama Allahu 'alayhim: those will be with the ones upon whom Allah has bestowed favour. Ma'a, with, is a word of company. And the same verb of favour, an'amta 'alayhim, closes al-Fatihah, where a believer asks in 1:7 for the path of those upon whom You have bestowed favour. The prayer said many times a day asks for a road, and this verse names the travellers who walk it.",
            "bn": "আয়াত বলে না যে আনুগত্যকারীরা নবী হয়ে যাবে, বা তাঁদের সমান হবে। বলে ফাউলাইকা মাআল্লাযীনা আনআমাল্লাহু আলাইহিম: তারা থাকবে তাঁদের সঙ্গে, যাঁদের আল্লাহ নিয়ামত দিয়েছেন। মাআ মানে সঙ্গে, এ হলো সাহচর্যের শব্দ। আর নিয়ামত দেওয়ার এই একই ক্রিয়া, আনআমতা আলাইহিম, সূরা ফাতিহার শেষেও আছে, যেখানে ১:৭ আয়াতে মুমিন চায় তাঁদের পথ, যাঁদের তুমি নিয়ামত দিয়েছ। দিনে বহুবার পড়া দোয়াটা একটা পথ চায়, আর এই আয়াত সেই পথের পথিকদের নাম বলে দেয়।"
          },
          {
            "en": "Four names follow. An-nabiyyin, the prophets. As-siddiqin, from the root of sidq, truthfulness, in an intensive form: the one wholly true in word and wholly affirming of the truth. Al-Muyassar describes them as those whose affirmation of what the messengers brought was complete, in belief, word and deed. Ash-shuhada', the martyrs, whom as-Sa'di describes as those who fought in Allah's path to raise His word and were killed. And as-salihin, the righteous, whom Ibn Kathir describes as righteous inwardly and outwardly.",
            "bn": "এরপর চারটি নাম। আন-নাবিয়্যীন, নবীগণ। আস-সিদ্দীকীন, সিদক বা সত্যবাদিতার ধাতু থেকে তীব্রতাবাচক রূপ: যে কথায় পুরোপুরি সত্যবাদী, আর সত্যকে পুরোপুরি মেনে নেয়। আল-মুয়াসসার তাঁদের বর্ণনা দেয় এভাবে: রাসূলরা যা এনেছেন, বিশ্বাসে, কথায় ও কাজে তার প্রতি যাঁদের সত্যায়ন পূর্ণ হয়েছে। আশ-শুহাদা, শহীদগণ, আস-সাদীর বর্ণনায় যাঁরা আল্লাহর কালিমা বুলন্দ করতে তাঁর পথে লড়েছেন আর নিহত হয়েছেন। আর আস-সালিহীন, নেককারগণ, ইবনে কাসীরের বর্ণনায় যাঁরা ভেতরে-বাইরে দুই দিকেই নেককার।"
          },
          {
            "en": "The verse closes wa hasuna ula'ika rafiqa, and excellent are those as companions. Rafiq is from the root r-f-q, which carries gentleness and the company of those who travel together, and it comes here in the singular form, which Arabic can use for a whole company. Then 4:70 adds dhalika al-fadlu min Allah, that is the bounty from Allah, with the definite article: not a bounty among others, but the bounty. And it ends, sufficient is Allah as Knower, a reminder that only He knows who is truly walking toward that company.",
            "bn": "আয়াত শেষ হয় ওয়া হাসুনা উলাইকা রাফীকা দিয়ে, আর সাথি হিসেবে তাঁরা কতই না উত্তম। রাফীক শব্দের ধাতু রা-ফা-কাফ, যার মধ্যে আছে কোমলতা আর একসঙ্গে সফর করা মানুষের সাহচর্যের অর্থ। এখানে শব্দটা এসেছে একবচনের রূপে, আরবিতে যা পুরো একটা দলের জন্যও ব্যবহার হতে পারে। তারপর ৪:৭০ আয়াত যোগ করে যালিকাল ফাদলু মিনাল্লাহ, এটা আল্লাহর পক্ষ থেকে অনুগ্রহ, নির্দিষ্ট করে বলা: অনেক অনুগ্রহের একটা নয়, সেই অনুগ্রহ। আর শেষ হয়, সর্বজ্ঞ হিসেবে আল্লাহই যথেষ্ট। অর্থাৎ কে সত্যিই সেই সঙ্গের দিকে এগোচ্ছে, তা কেবল তিনিই জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Ranks, One Company",
          "bn": "চার স্তর, এক সাহচর্য"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a promise of honour: whoever does what Allah and His Messenger commanded and avoids what they forbade, Allah will give him a dwelling in the abode of honour, in the company of the prophets, and then of those lower in rank, the siddiqin, then the martyrs, then the righteous. On his reading the order of the four names is an order of rank. And the verse's word is with: the obedient believer is promised the company of all four, not their rank.",
            "bn": "ইবনে কাসীর আয়াতটিকে পড়েন সম্মানের ওয়াদা হিসেবে: আল্লাহ ও তাঁর রাসূল যা আদেশ করেছেন তা যে করে, আর যা নিষেধ করেছেন তা থেকে দূরে থাকে, আল্লাহ তাকে সম্মানের ঘরে ঠাঁই দেবেন। সেখানে সে থাকবে নবীদের সঙ্গে, তারপর তাঁদের নিচের স্তরের সিদ্দীকদের সঙ্গে, তারপর শহীদদের, তারপর নেককারদের সঙ্গে। তাঁর পাঠে চার নামের এই ক্রম মর্যাদারও ক্রম। আর আয়াতের শব্দটা হলো সঙ্গে: আনুগত্যকারী মুমিনকে ওয়াদা দেওয়া হয়েছে চার দলেরই সাহচর্যের, তাঁদের মর্যাদার নয়।"
          },
          {
            "en": "As-Sa'di stresses how wide the door is. Whoever obeys Allah and His Messenger, fulfilling what is required of him as far as he is able, whether man or woman, child or adult, will be among those Allah has favoured, a favour whose fruit is perfection, success and happiness. He describes each group in turn, and adds to the siddiqin that they call others to the truth they affirm. He then dwells on the delight of that company in the gardens of bliss, near the Lord of the worlds.",
            "bn": "দরজাটা কত প্রশস্ত, আস-সাদী তার ওপর জোর দেন। যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে, সাধ্যমতো নিজের দায়িত্ব পালন করে, সে পুরুষ হোক বা নারী, শিশু হোক বা বড়, সে থাকবে তাঁদের মধ্যে যাঁদের আল্লাহ নিয়ামত দিয়েছেন। আর সেই নিয়ামতের ফল পূর্ণতা, সাফল্য ও সৌভাগ্য। তিনি প্রতিটি দলের বর্ণনা দেন, আর সিদ্দীকদের ব্যাপারে যোগ করেন, যে সত্য তাঁরা মেনে নিয়েছেন অন্যদেরও সেদিকে ডাকেন। তারপর তিনি থামেন নিয়ামতের বাগানে, জগতসমূহের রবের কাছাকাছি সেই সাহচর্যের আনন্দের কথায়।"
          },
          {
            "en": "On 4:70 the commentators agree that the company is a gift and describe it from slightly different sides. Ibn Kathir says it is from Allah by His mercy, for it is He who made them fit for it, not their good deeds, and that He knows who deserves guidance and success. As-Sa'di calls it a reward they had not earned by their deeds. Al-Muyassar puts the knowledge first: Allah knows the states of His servants and who among them deserves the great reward for the righteous deeds they did.",
            "bn": "৪:৭০ আয়াতের ব্যাপারে মুফাসসিররা একমত যে এই সাহচর্য দান, তবে একটু ভিন্ন ভিন্ন দিক থেকে তার বর্ণনা দেন। ইবনে কাসীর বলেন, এটা আল্লাহর রহমত থেকে আসে, কারণ তিনিই তাদের এর উপযুক্ত বানিয়েছেন, তাদের নেক আমল নয়। আর কে হিদায়াত ও সাফল্যের যোগ্য, তিনিই জানেন। আস-সাদী একে বলেন এমন প্রতিদান, যা তারা নিজেদের আমল দিয়ে অর্জন করেনি। আল-মুয়াসসার জ্ঞানের দিকটা আগে আনে: আল্লাহ বান্দাদের অবস্থা জানেন, আর জানেন তাদের মধ্যে কে নিজের নেক আমলের কারণে মহা প্রতিদানের যোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Who Feared Separation",
          "bn": "বিচ্ছেদের ভয় যাঁকে বিষণ্ণ করেছিল"
        },
        "p": [
          {
            "en": "Ibn Kathir records, through Ibn Jarir at-Tabari, a report from Sa'id ibn Jubayr. A man of the Ansar came to the Prophet ﷺ looking sad. The Prophet ﷺ asked why, and the man said: we come to you day and night, looking at your face and sitting with you, but tomorrow you will be raised with the prophets and we will not be able to see you. The Prophet ﷺ gave no answer until Jibril came down with this verse, and then the Prophet ﷺ sent the man the good news.",
            "bn": "ইবনে কাসীর ইবনে জারীর তাবারীর সূত্রে সাঈদ ইবনে জুবাইর থেকে একটি বর্ণনা আনেন। আনসারের এক ব্যক্তি বিষণ্ণ মুখে নবী ﷺ-এর কাছে এলেন। নবী ﷺ কারণ জিজ্ঞেস করলে তিনি বললেন: আমরা দিনরাত আপনার কাছে আসি, আপনার চেহারার দিকে তাকিয়ে থাকি, আপনার কাছে বসি। কিন্তু কাল আপনাকে নবীদের সঙ্গে ওঠানো হবে, তখন আমরা আর আপনাকে দেখতে পাব না। নবী ﷺ কোনো উত্তর দিলেন না, যতক্ষণ না জিবরীল (আঃ) এই আয়াত নিয়ে এলেন। তখন নবী ﷺ লোকটির কাছে সুসংবাদ পাঠালেন।"
          },
          {
            "en": "Ibn Kathir adds that the same account is reported from Masruq, Ikrimah, ash-Sha'bi, Qatadah and ar-Rabi' ibn Anas, all of the generation after the Companions, and he gives a version through Aishah (RA), recorded by Ibn Marduyah, in which a man tells the Prophet ﷺ that he loves him more than himself and his family, and fears that in Paradise he will not see him. It is a report the commentators attach to the verse, and it is offered here as Ibn Kathir gives it.",
            "bn": "ইবনে কাসীর যোগ করেন, একই ঘটনা মাসরূক, ইকরিমা, শা'বী, কাতাদা ও রাবী ইবনে আনাস থেকেও বর্ণিত, যাঁরা সবাই সাহাবিদের পরের প্রজন্মের। তিনি ইবনে মারদুওয়াইহর সংকলিত আয়েশা (রাঃ)-এর সূত্রের একটি বর্ণনাও দেন। তাতে এক ব্যক্তি নবী ﷺ-কে বলেন, তিনি তাঁকে নিজের জীবন আর পরিবারের চেয়েও বেশি ভালোবাসেন, আর ভয় পান জান্নাতে তাঁকে দেখতে পাবেন না। মুফাসসিররা বর্ণনাটিকে এই আয়াতের সঙ্গে যুক্ত করেছেন, আর এখানে তা দেওয়া হলো ইবনে কাসীর যেভাবে দিয়েছেন সেভাবেই।"
          },
          {
            "en": "Ibn Kathir also cites a report that al-Bukhari and Muslim record from Aishah (RA). She had heard the Prophet ﷺ say that every prophet who falls ill is given the choice between this world and the Hereafter. In his final illness his voice grew weak, and she heard him recite: with those upon whom Allah has bestowed favour, of the prophets, the truthful, the martyrs and the righteous. Then she knew he was being given the choice. Ibn Kathir says this explains the other report, that before he died the Prophet ﷺ said three times: O Allah, the Most High Company.",
            "bn": "ইবনে কাসীর আরেকটি বর্ণনা আনেন, যা ইমাম বুখারী ও মুসলিম আয়েশা (রাঃ) থেকে সংকলন করেছেন। তিনি নবী ﷺ-কে বলতে শুনেছিলেন, কোনো নবী অসুস্থ হলে তাঁকে দুনিয়া আর আখিরাতের মধ্যে বেছে নেওয়ার সুযোগ দেওয়া হয়। শেষ অসুখে তাঁর কণ্ঠ দুর্বল হয়ে এল, আর আয়েশা (রাঃ) তাঁকে পড়তে শুনলেন: তাঁদের সঙ্গে, যাঁদের আল্লাহ নিয়ামত দিয়েছেন, নবী, সিদ্দীক, শহীদ ও নেককারদের মধ্য থেকে। তখন তিনি বুঝলেন, নবী ﷺ-কে বেছে নেওয়ার সুযোগ দেওয়া হচ্ছে। ইবনে কাসীর বলেন, এটাই অন্য বর্ণনাটির ব্যাখ্যা, যেখানে আছে মৃত্যুর আগে নবী ﷺ তিনবার বলেছিলেন: হে আল্লাহ, সর্বোচ্চ সাহচর্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses of the Same Company",
          "bn": "একই সাহচর্যের আয়াত"
        },
        "p": [
          {
            "en": "1:7 is the first sister, already heard in the words above: the path of those upon whom You have bestowed favour. 57:19 widens the ranks: those who have believed in Allah and His messengers are, with their Lord, among the supporters of truth and the martyrs, and theirs is their reward and their light. 3:31 gives the road in one line: if you love Allah, follow the Prophet ﷺ, and Allah will love you and forgive you. Together they say that love is proven by following, and following leads to the company.",
            "bn": "প্রথম আয়াতটির কথা আগেই এসেছে, ১:৭: তাঁদের পথ, যাঁদের তুমি নিয়ামত দিয়েছ। ৫৭:১৯ আয়াত স্তরগুলোকে আরও প্রশস্ত করে: যারা আল্লাহ ও তাঁর রাসূলদের প্রতি ঈমান এনেছে, তারাই তাদের রবের কাছে সিদ্দীক ও শহীদ, তাদের জন্য আছে তাদের প্রতিদান ও তাদের নূর। ৩:৩১ আয়াত পথটা এক লাইনে বলে দেয়: যদি আল্লাহকে ভালোবাসো, নবী ﷺ-এর অনুসরণ করো, আল্লাহ তোমাদের ভালোবাসবেন আর গুনাহ মাফ করবেন। সব মিলিয়ে কথা এই: ভালোবাসার প্রমাণ অনুসরণ, আর অনুসরণ পৌঁছে দেয় সেই সাহচর্যে।"
          },
          {
            "en": "Two prophets asked for this company in their own prayers. Ibrahim (AS) asks in 26:83 to be joined with the righteous, and Yusuf (AS) ends his account in 12:101 asking, cause me to die a Muslim and join me with the righteous. If prophets asked to be joined with the righteous, no believer is above asking it. And 43:67 shows the other side of company: close friends, on that Day, will be enemies to one another, except for the righteous.",
            "bn": "দুজন নবী নিজেদের দোয়ায় এই সাহচর্য চেয়েছেন। ২৬:৮৩ আয়াতে ইবরাহীম (আঃ) চান নেককারদের অন্তর্ভুক্ত হতে। আর ১২:১০১ আয়াতে ইউসুফ (আঃ) নিজের কাহিনির শেষে চান, আমাকে মুসলিম অবস্থায় মৃত্যু দাও আর নেককারদের সঙ্গে মিলিয়ে দাও। নবীরাই যখন নেককারদের সঙ্গে মিলিত হতে চেয়েছেন, কোনো মুমিন এ চাওয়ার ঊর্ধ্বে নয়। আর ৪৩:৬৭ আয়াত দেখায় সঙ্গের অন্য দিক: সেদিন অন্তরঙ্গ বন্ধুরা একে অন্যের শত্রু হয়ে যাবে, মুত্তাকীরা ছাড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Toward the Company",
          "bn": "সেই সাহচর্যের দিকে হাঁটা"
        },
        "p": [
          {
            "en": "The verse begins with obedience, and its place after 4:65 shows what obedience means in practice: accepting the Prophet's ﷺ guidance when it is inconvenient, without the inner discomfort that verse warns against. In a normal week that might be the prayer kept at work when it is awkward, the business deal refused because its terms are not clean, the harsh word held back because he ﷺ held it back. None of these looks like the road to the prophets. The verse says that it is.",
            "bn": "আয়াত শুরু হয় আনুগত্য দিয়ে, আর ৪:৬৫ আয়াতের পরে এর অবস্থান দেখায় বাস্তবে আনুগত্য মানে কী: নবী ﷺ-এর নির্দেশ অসুবিধাজনক হলেও মেনে নেওয়া, সেই আয়াতে বলা মনের কুণ্ঠা ছাড়াই। সাধারণ একটা সপ্তাহে এর মানে হতে পারে অফিসে অস্বস্তি সত্ত্বেও নামাজটা আদায় করা, শর্ত পরিষ্কার নয় বলে একটা ব্যবসার চুক্তি ফিরিয়ে দেওয়া, কটু কথাটা চেপে যাওয়া, কারণ তিনি ﷺ চেপে যেতেন। এর কোনোটাই দেখতে নবীদের দিকে যাওয়ার পথের মতো লাগে না। আয়াত বলছে, এটাই সেই পথ।"
          },
          {
            "en": "Ibn Kathir gives a Companion's practical answer. Muslim records that Rabi'ah ibn Ka'b al-Aslami (RA), who used to spend the night at the Prophet's ﷺ house and bring him water for wudu, was told: ask. He said: I ask for your companionship in Paradise. The Prophet ﷺ asked whether there was anything else, and he said: only that. The Prophet ﷺ said: then help me on your behalf through many prostrations. So add voluntary prayer to your day, a few rak'ahs you keep, as a way of asking for that company.",
            "bn": "ইবনে কাসীর একজন সাহাবির বাস্তব উত্তর তুলে ধরেন। ইমাম মুসলিম বর্ণনা করেন, রাবীআ ইবনে কা'ব আল-আসলামী (রাঃ) রাতে নবী ﷺ-এর ঘরে থাকতেন, তাঁর অজুর পানি এনে দিতেন। একদিন নবী ﷺ তাঁকে বললেন: কিছু চাও। তিনি বললেন: আমি জান্নাতে আপনার সাহচর্য চাই। নবী ﷺ জিজ্ঞেস করলেন, এ ছাড়া আর কিছু? তিনি বললেন: শুধু এটাই। নবী ﷺ বললেন: তাহলে বেশি বেশি সিজদা দিয়ে তোমার ব্যাপারে আমাকে সাহায্য করো। তাই দিনে কিছু নফল নামাজ যোগ করুন, অল্প কয়েক রাকাত যা নিয়মিত রাখতে পারবেন, সেই সাহচর্য চাওয়ার একটা উপায় হিসেবে।"
          },
          {
            "en": "And do not despair because your deeds are small. Ibn Kathir cites the hadith in the Sahih collections that a person will be with those he loves, and Anas (RA) said that Muslims were never happier with anything, and that he loved the Prophet ﷺ, Abu Bakr and Umar (RA) and hoped to be raised with them though his deeds were not like theirs. So love them deliberately. Read the lives of the prophets and the Companions, keep company now with people who remind you of Allah, and let as-Sa'di's words stay with you: man or woman, young or old.",
            "bn": "আর নিজের আমল কম বলে নিরাশ হবেন না। ইবনে কাসীর সহীহ সংকলনগুলোর হাদীস আনেন: মানুষ তাদের সঙ্গেই থাকবে, যাদের সে ভালোবাসে। আনাস (রাঃ) বলেছেন, মুসলমানরা আর কোনো কিছুতে এত খুশি হয়নি। তিনি আরও বলেছেন, তিনি নবী ﷺ, আবু বকর ও উমর (রাঃ)-কে ভালোবাসেন, আর আশা করেন তাঁদের সঙ্গেই তাঁকে ওঠানো হবে, যদিও তাঁর আমল তাঁদের মতো নয়। তাই জেনে-বুঝে তাঁদের ভালোবাসুন। নবীদের আর সাহাবিদের জীবনী পড়ুন, এখনই এমন মানুষের সঙ্গে থাকুন যারা আল্লাহর কথা মনে করিয়ে দেয়। আর আস-সাদীর কথাটা মনে রাখুন: পুরুষ হোক বা নারী, ছোট হোক বা বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Joined",
          "bn": "মিলিত হওয়ার দোয়া"
        },
        "p": [
          {
            "en": "The Quran gives the words. From the prayer of Yusuf (AS) in 12:101: cause me to die a Muslim and join me with the righteous. And from the prayer of the people of understanding in 3:193: our Lord, we have heard a caller calling to faith and we have believed, so forgive us our sins, remove from us our misdeeds, and cause us to die among the righteous. Both ask for the end of the road and the company at the end of it, and both put forgiveness or faith first.",
            "bn": "কুরআন নিজেই শব্দগুলো দিয়েছে। ১২:১০১ আয়াতে ইউসুফ (আঃ)-এর দোয়া থেকে: আমাকে মুসলিম অবস্থায় মৃত্যু দাও আর নেককারদের সঙ্গে মিলিয়ে দাও। আর ৩:১৯৩ আয়াতে বোধসম্পন্ন মানুষদের দোয়া থেকে: হে আমাদের রব, আমরা একজন আহ্বানকারীকে ঈমানের দিকে ডাকতে শুনেছি, আর আমরা ঈমান এনেছি। তাই আমাদের গুনাহ মাফ করো, আমাদের মন্দ কাজগুলো মুছে দাও, আর নেককারদের সঙ্গে আমাদের মৃত্যু দাও। দুটো দোয়াই পথের শেষটা চায়, আর সেই শেষে থাকা সাহচর্য। দুটোতেই আগে আসে ঈমান বা মাগফিরাতের কথা।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, make me obedient to You and to Your Messenger ﷺ. Place me with those upon whom You have bestowed favour, the prophets, the truthful, the martyrs and the righteous, and let them be my companions. It is Your bounty and not my deeds, and You are sufficient as the One who knows me, so make me fit for what I cannot earn.",
            "bn": "আয়াতের নিজের শব্দ থেকে একটি দোয়া, যা এখানে এভাবেই দেওয়া হলো, বর্ণিত কোনো দোয়া হিসেবে নয়: হে আল্লাহ, আমাকে তোমার আর তোমার রাসূল ﷺ-এর অনুগত বানাও। যাঁদের তুমি নিয়ামত দিয়েছ, নবী, সিদ্দীক, শহীদ আর নেককার, তাঁদের সঙ্গে আমাকে রাখো, আর তাঁদেরকে আমার সাথি বানাও। এটা তোমার অনুগ্রহ, আমার আমল নয়, আর আমাকে জানার জন্য তুমিই যথেষ্ট। তাই যা আমি অর্জন করতে পারি না, তার উপযুক্ত আমাকে বানিয়ে দাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About My Company",
          "bn": "আমার সঙ্গ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry from these verses. If I were raised tomorrow with the people I spend most of my evenings with, would I be glad? Is my love for the Prophet ﷺ something that shows in how I follow him when following is inconvenient, or mainly in how I speak about him? Which of the four, the prophets, the truthful, the martyrs, the righteous, do I know least about, and what would I learn if I read one of their lives this month?",
            "bn": "এই আয়াতগুলো থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। যাদের সঙ্গে আমার বেশিরভাগ সন্ধ্যা কাটে, কাল যদি তাদের সঙ্গেই আমাকে ওঠানো হয়, আমি কি খুশি হব? নবী ﷺ-এর প্রতি আমার ভালোবাসা কি দেখা যায় অসুবিধার সময়ও তাঁকে অনুসরণের মধ্যে, নাকি মূলত তাঁকে নিয়ে কথা বলার মধ্যে? নবী, সিদ্দীক, শহীদ আর নেককার, এই চার দলের কাদের সম্পর্কে আমি সবচেয়ে কম জানি, আর এ মাসে তাঁদের কারও জীবনী পড়লে কী শিখতাম?"
          },
          {
            "en": "Like the man of the Ansar, what would I truly grieve to be separated from, and does my grief point toward Allah and His Messenger ﷺ or somewhere else? When I do something good, do I quietly count it as a payment toward Paradise, or do I remember that 4:70 calls the whole of it a bounty? And what one act of obedience have I been postponing that I could begin this week?",
            "bn": "সেই আনসারি সাহাবির মতো, কী থেকে বিচ্ছিন্ন হওয়ার ভয়ে আমি সত্যিই কষ্ট পাব, আর সেই কষ্ট কি আল্লাহ ও তাঁর রাসূল ﷺ-এর দিকে ইশারা করে, নাকি অন্য কোথাও? কোনো ভালো কাজ করলে কি মনে মনে তা জান্নাতের কিস্তি হিসেবে গুনি, নাকি মনে রাখি ৪:৭০ আয়াত পুরোটাকেই বলেছে অনুগ্রহ? আর আনুগত্যের কোন একটা কাজ আমি ফেলে রেখেছি, যা এই সপ্তাহেই শুরু করতে পারি?"
          }
        ]
      }
    ]
  },
  "4:78": {
    "sections": [
      {
        "h": {
          "en": "The Passage It Belongs To",
          "bn": "যে আলোচনার অংশ"
        },
        "p": [
          {
            "en": "This verse answers a complaint recorded just before it. In 4:77 a group is described who had been told to restrain their hands, establish prayer and give zakah; when fighting was finally prescribed for them, a party of them feared people as they should have feared Allah, or with even greater fear, and asked why the command had not been postponed a little longer. The commentators differ over the precise occasion and over who that party was, and the argument of the verse does not depend on settling it.",
            "bn": "এই আয়াত ঠিক আগে লিপিবদ্ধ একটি অভিযোগের জবাব দেয়। 4:77 আয়াতে এমন এক দলের বর্ণনা আছে, যাদের বলা হয়েছিল হাত সংযত রাখতে, নামায কায়েম করতে ও যাকাত দিতে; অবশেষে যখন তাদের ওপর যুদ্ধ ফরয করা হলো, তাদের একটি দল মানুষকে এমনভাবে ভয় করল যেভাবে আল্লাহকে ভয় করা উচিত ছিল, কিংবা তার চেয়েও বেশি, আর জিজ্ঞেস করল কেন আদেশটি আরও কিছুকাল পিছিয়ে দেওয়া হলো না। নির্দিষ্ট প্রেক্ষাপট এবং সেই দলটি কারা ছিল, তা নিয়ে মুফাসসিরগণের মতভেদ আছে, আর আয়াতের যুক্তি তা নিষ্পত্তির ওপর নির্ভর করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Death Overtakes You",
          "bn": "মৃত্যু তোমাদের নাগাল পায়"
        },
        "p": [
          {
            "en": "Aynama takunu yudrikkumu al-mawt — wherever you may be, death will overtake you. The verb adraka is the verb of catching up with something that is trying to get away. It is the same verb used of Pharaoh in 10:90, where drowning overtook him at the last moment of his flight. Death, in this wording, is not standing still at the end of the road waiting. It is closing a distance, and the distance is closing whether the person moves or not.",
            "bn": "'আইনামা তাকূনূ ইউদরিক্‌কুমুল মাউত' — তোমরা যেখানেই থাকো, মৃত্যু তোমাদের নাগাল পাবে। 'আদরাকা' ক্রিয়াটি এমন কিছুর নাগাল পাওয়ার ক্রিয়া, যা পালাতে চাইছে। ঠিক এই ক্রিয়াটিই 10:90 আয়াতে ফিরআউনের ক্ষেত্রে ব্যবহৃত হয়েছে, যেখানে পালানোর শেষ মুহূর্তে ডুবে যাওয়া তার নাগাল পেয়ে যায়। এই শব্দবিন্যাসে মৃত্যু পথের শেষে স্থির হয়ে অপেক্ষা করছে না। সে দূরত্ব কমিয়ে আনছে, আর মানুষ নড়ুক বা না নড়ুক, দূরত্বটি কমছেই।"
          },
          {
            "en": "62:8 makes the pursuit explicit: say, the death from which you flee will meet you, and then you will be returned to the Knower of the unseen and the witnessed. Both verses answer the same instinct, which is to treat death as an outcome that better planning might avoid. The Quran does not argue that flight is wrong. It observes that flight is a category error, because there is no direction in which the distance grows.",
            "bn": "62:8 আয়াতে ধাওয়ার বিষয়টি স্পষ্ট করা হয়েছে: বলো, তোমরা যে মৃত্যু থেকে পালাচ্ছ তা তোমাদের সঙ্গে সাক্ষাৎ করবেই, তারপর তোমাদের ফিরিয়ে নেওয়া হবে দৃশ্য ও অদৃশ্যের জ্ঞানীর কাছে। দুটি আয়াতই একই প্রবৃত্তির জবাব দেয় — মৃত্যুকে এমন এক পরিণতি ভাবা, উন্নততর পরিকল্পনা দিয়ে যা এড়ানো যেত। কুরআন বলে না যে পালানো অন্যায়। কুরআন লক্ষ করিয়ে দেয় যে পালানোটাই একটি ভুল শ্রেণিবিন্যাস, কারণ এমন কোনো দিক নেই যেদিকে গেলে দূরত্ব বাড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Towers of Lofty Construction",
          "bn": "সুউচ্চ সুদৃঢ় দুর্গ"
        },
        "p": [
          {
            "en": "Then comes the concession clause: even if you should be within burujin mushayyadah, towers of lofty construction. Buruj are the high towers of a stronghold. Mushayyadah is connected by the commentators, Qurtubi among them, with shid, the plaster or gypsum with which a wall is finished, so the phrase does not merely mean tall but properly built and sealed — the best that the money and craft of the age could raise. The verse names the exact object a frightened person pictures as the answer.",
            "bn": "এরপর আসে ছাড়ের বাক্যটি: এমনকি তোমরা যদি 'বুরূজিম মুশাইয়াদাহ'-র ভেতরেও থাকো, অর্থাৎ সুউচ্চ সুদৃঢ় দুর্গের ভেতরে। 'বুরূজ' হলো কোনো দুর্গের উঁচু বুরুজ। 'মুশাইয়াদাহ' শব্দটিকে মুফাসসিরগণ, যাঁদের মধ্যে কুরতুবীও আছেন, যুক্ত করেন 'শীদ'-এর সঙ্গে, অর্থাৎ যে চুন বা প্লাস্টার দিয়ে দেয়ালের কাজ শেষ করা হয়; ফলে বাক্যাংশটির অর্থ কেবল উঁচু নয়, বরং যথাযথভাবে গড়া ও সিলমোহর করা — সেই যুগের অর্থ ও কারিগরি যতটা সম্ভব উঁচু করতে পারত ততটাই। আয়াতটি ঠিক সেই বস্তুটিরই নাম নেয়, ভীত মানুষ যাকে সমাধান হিসেবে কল্পনা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Credit Upward, Blame Sideways",
          "bn": "কৃতিত্ব উপরে, দোষ পাশে"
        },
        "p": [
          {
            "en": "The second half of the verse turns from death itself to the way people speak about outcomes. If good comes to them they say this is from Allah; if evil befalls them they say this is from you, addressing the Prophet ﷺ himself. Named that plainly, the habit is recognisable far outside its original setting: blessings are credited upward and losses are charged sideways, to whoever is nearest and most available to blame.",
            "bn": "আয়াতের দ্বিতীয় অংশ মৃত্যু থেকে সরে গিয়ে মানুষ পরিণতি নিয়ে কীভাবে কথা বলে, সেদিকে যায়। তাদের কোনো কল্যাণ হলে তারা বলে এটি আল্লাহর পক্ষ থেকে; আর কোনো অকল্যাণ ঘটলে তারা বলে এটি তোমার কারণে — কথাটি স্বয়ং নবী ﷺ-কে উদ্দেশ করে বলা। এত স্পষ্টভাবে নাম দিলে অভ্যাসটি তার মূল প্রেক্ষাপটের বাইরেও সহজে চেনা যায়: নিয়ামতের কৃতিত্ব উপরে দেওয়া হয়, আর ক্ষতির দায় পাশে চাপানো হয় — যে সবচেয়ে কাছে ও সবচেয়ে সহজলভ্য, তার ঘাড়ে।"
          },
          {
            "en": "The reply is one clause long: say, all is from Allah. It refuses the split. A person who genuinely holds that everything proceeds from one Source cannot keep two ledgers, one for the gifts he accepts and one for the injuries he assigns elsewhere. The Quran treats this not as bad manners but as a failure of belief in tawhid at the point where belief is actually tested, which is the moment something goes wrong.",
            "bn": "জবাবটি এক বাক্যের: বলো, সবকিছুই আল্লাহর পক্ষ থেকে। এটি বিভাজনটি নাকচ করে দেয়। যে সত্যিই মানে যে সবকিছু এক উৎস থেকেই আসে, সে দুটি খাতা রাখতে পারে না — একটি সেই উপহারের জন্য যা সে গ্রহণ করে, আরেকটি সেই আঘাতের জন্য যার দায় সে অন্য কারও ওপর চাপায়। কুরআন একে অভদ্রতা নয়, বরং তাওহীদে বিশ্বাসের ব্যর্থতা হিসেবে দেখে — ঠিক সেই জায়গায়, যেখানে বিশ্বাস আসলেই পরীক্ষিত হয়, অর্থাৎ যখন কিছু একটা বিগড়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "How 4:79 Completes It",
          "bn": "4:79 কীভাবে একে পূর্ণ করে"
        },
        "p": [
          {
            "en": "The very next verse seems at first to say the opposite: what comes to you of good is from Allah, and what comes to you of evil is from yourself. The mufassirun, Ibn Kathir among them, resolve the pair the same way. Everything without exception is created and decreed by Allah, which is what 4:78 establishes against people who exempted their misfortunes from His decree. But the earning of an evil, the choice that drew it, belongs to the person, which is what 4:79 establishes against people who blamed everyone else.",
            "bn": "ঠিক পরের আয়াতটি প্রথম দেখায় উল্টো কথা বলছে বলে মনে হয়: তোমার যে কল্যাণ হয় তা আল্লাহর পক্ষ থেকে, আর যে অকল্যাণ হয় তা তোমার নিজের কারণে। মুফাসসিরগণ, যাঁদের মধ্যে ইবনে কাসীরও আছেন, জোড়াটির সমাধান একইভাবে করেন। ব্যতিক্রমহীনভাবে সবকিছুই আল্লাহর সৃষ্টি ও ফয়সালা — 4:78 আয়াত এটিই প্রতিষ্ঠা করে তাদের বিরুদ্ধে, যারা নিজেদের দুর্ভাগ্যকে তাঁর ফয়সালার বাইরে রাখত। কিন্তু কোনো মন্দের উপার্জন, অর্থাৎ যে পছন্দ তা টেনে এনেছে, তা মানুষেরই — 4:79 আয়াত এটিই প্রতিষ্ঠা করে তাদের বিরুদ্ধে, যারা অন্য সবাইকে দোষারোপ করত।"
          },
          {
            "en": "3:165 makes the same move inside the Uhud passage: asked where their disaster had come from, they are told to say it is from yourselves. Held together, the two truths cancel the two escapes. Decree removes despair, because nothing struck outside His leave; earning removes self-pity, because the choices that led here were mine. The verse ends by asking what is wrong with people who can hardly understand any statement — the word is yafqahuna, from fiqh, understanding that goes past the surface of a sentence.",
            "bn": "3:165 আয়াতে উহুদের আলোচনার ভেতরে একই কাজটি করা হয়: তাদের বিপদ কোথা থেকে এলো জিজ্ঞেস করা হলে তাদের বলতে বলা হয়, এটি তোমাদের নিজেদের কাছ থেকেই। দুটি সত্য একসঙ্গে ধরলে দুটি পালানোর পথই বন্ধ হয়। ফয়সালা হতাশা সরায়, কারণ তাঁর অনুমতির বাইরে কিছুই আঘাত করেনি; উপার্জন আত্মকরুণা সরায়, কারণ যে পছন্দগুলো এখানে এনেছে সেগুলো আমারই। আয়াতটি শেষ হয় এই প্রশ্ন দিয়ে যে এই লোকদের হলো কী, তারা প্রায় কোনো কথাই বোঝে না — শব্দটি 'ইয়াফক্বাহূন', যা 'ফিক্‌হ' থেকে, অর্থাৎ বাক্যের উপরিতল ছাড়িয়ে যাওয়া বোঝাপড়া।"
          }
        ]
      }
    ]
  },
  "4:82": {
    "sections": [
      {
        "h": {
          "en": "The Command to Ponder",
          "bn": "গভীর চিন্তার নির্দেশ"
        },
        "p": [
          {
            "en": "Afala yatadabbaruna al-Quran — do they not reflect deeply upon the Quran? The question is a rebuke shaped as an invitation. Tadabbur, from a root meaning the back or far end of a thing, is the kind of thinking that follows a matter through to its ends and consequences — not skimming a surface but pursuing where the words lead. The verse assumes the Quran rewards exactly this pursuit, and faults hearts that never attempt it.",
            "bn": "আফালা ইয়াতাদাব্বারূনাল কুরআন — তারা কি কুরআন নিয়ে গভীরভাবে চিন্তা করে না? প্রশ্নটি আমন্ত্রণের আকারে গড়া এক তিরস্কার। তাদাব্বুর — কোনো জিনিসের পেছন বা শেষ প্রান্ত অর্থের ধাতু থেকে — সেই ধরনের চিন্তা যা কোনো বিষয়কে তার পরিণতি ও ফলাফল পর্যন্ত অনুসরণ করে; উপরিতল ছুঁয়ে যাওয়া নয়, শব্দগুলো যেদিকে নিয়ে যায় সেদিকে ধাওয়া করা। আয়াতটি ধরেই নেয়, কুরআন ঠিক এই অনুসরণেরই প্রতিদান দেয় — আর দোষারোপ করে সেই হৃদয়গুলোকে, যারা কখনো চেষ্টাই করে না।"
          },
          {
            "en": "The rebuke lands on a specific failure: contact with the Quran without penetration — hearing it, even reciting it, while its meanings pass by untouched. 47:24 sharpens the diagnosis with its own question: do they not reflect on the Quran, or are there locks upon hearts? Between the two verses, the obstacle is located honestly: not in the Book's difficulty, but in the reader's lock.",
            "bn": "তিরস্কারটি পড়ে একটি নির্দিষ্ট ব্যর্থতার ওপর: কুরআনের সংস্পর্শ, অথচ ভেতরে প্রবেশ নেই — শোনা, এমনকি তিলাওয়াতও, অথচ অর্থগুলো অস্পৃশ্য পাশ কাটিয়ে যায়। 47:24 নিজের প্রশ্ন দিয়ে রোগনির্ণয়টি ধারালো করে: তারা কি কুরআন নিয়ে চিন্তা করে না, নাকি হৃদয়গুলোর ওপর তালা? দুই আয়াতের মাঝখানে বাধাটির অবস্থান সততার সঙ্গে চিহ্নিত: কিতাবের দুর্বোধ্যতায় নয়, পাঠকের তালায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Test It Proposes",
          "bn": "যে পরীক্ষা এটি প্রস্তাব করে"
        },
        "p": [
          {
            "en": "The verse then stakes everything on an examinable claim: had it been from other than Allah, they would have found within it much contradiction. This is an argument offered to sceptics on their own terms. The Quran came down across some twenty-three years — in Makkah and Madinah, in ease and siege, answering events no one scheduled. Human output under those conditions revises itself, contradicts itself, shows its seams. Here, the claim runs, you will find none.",
            "bn": "আয়াতটি এরপর সবকিছু বাজি রাখে এক যাচাইযোগ্য দাবির ওপর: এটি আল্লাহ ছাড়া অন্য কারও কাছ থেকে হলে তারা এতে বহু অসংগতি পেত। এ যুক্তি সংশয়বাদীদের সামনে রাখা হয়েছে তাদের নিজেদের শর্তেই। কুরআন নাযিল হয়েছে প্রায় তেইশ বছর ধরে — মক্কায় ও মদীনায়, স্বাচ্ছন্দ্যে ও অবরোধে, এমন সব ঘটনার জবাব দিতে দিতে যেগুলোর সময়সূচি কেউ ঠিক করেনি। এই অবস্থায় মানুষের রচনা নিজেকে সংশোধন করে, নিজের সঙ্গে সংঘর্ষে যায়, নিজের জোড়ার দাগ দেখায়। এখানে — দাবিটি বলে — তুমি একটিও পাবে না।"
          },
          {
            "en": "The commentators draw out the logic: consistency across that span, on subjects from law to the unseen, delivered through an unlettered Prophet ﷺ, is the signature of a single, all-knowing Author. And the challenge stays open. It does not ask for reverence first; it asks for reading — sustained, critical reading — and predicts what the reading will find. Refusing to read is, in effect, refusing to test the claim.",
            "bn": "মুফাসসিরগণ যুক্তিটি টেনে বের করেন: এত দীর্ঘ পরিসরে, বিধান থেকে অদৃশ্য জগৎ পর্যন্ত বিষয়ে, নিরক্ষর নবী ﷺ-এর মাধ্যমে পৌঁছানো এই সামঞ্জস্য — একক, সর্বজ্ঞ এক রচয়িতার স্বাক্ষর। আর চ্যালেঞ্জটি খোলা থেকেই যায়। এটি আগে ভক্তি চায় না; চায় পাঠ — ধারাবাহিক, অনুসন্ধানী পাঠ — এবং আগাম বলে দেয় সেই পাঠ কী পাবে। পড়তে অস্বীকার করা আসলে দাবিটি যাচাই করতেই অস্বীকার করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Was Sent",
          "bn": "আয়াতটি যেখানে নাযিল"
        },
        "p": [
          {
            "en": "The setting in Surah an-Nisa is practical, not academic. The surrounding passage deals with hypocrisy and rumor: 4:83 rebukes those who, hearing any matter of security or fear, broadcast it instead of referring it to the Messenger ﷺ and to those with sound judgment, who could draw out its truth. Shallow hearing produces both bad religion and bad citizenship; the passage prescribes depth for both.",
            "bn": "সূরা আন-নিসায় এর প্রেক্ষাপট ব্যবহারিক, পুঁথিগত নয়। আশপাশের অংশটি মুনাফিকি ও গুজব নিয়ে: 4:83 তিরস্কার করে তাদের, যারা নিরাপত্তা বা ভয়ের কোনো খবর শুনলেই তা ছড়িয়ে দেয় — রাসূল ﷺ ও বিচক্ষণ সিদ্ধান্তের অধিকারীদের কাছে ফিরিয়ে না দিয়ে, যাঁরা এর সত্যতা বের করে আনতে পারতেন। ভাসাভাসা শোনা জন্ম দেয় মন্দ দ্বীনদারি ও মন্দ নাগরিকতা দুটিই; অংশটি দুটির জন্যই গভীরতার ব্যবস্থাপত্র দেয়।"
          },
          {
            "en": "Placed there, tadabbur appears as a communal safeguard, not a private luxury. A community that ponders its Book learns to weigh words, trace claims to sources and follow consequences before speaking — the exact skills 4:83 finds missing in the rumor-spreaders. The Quran, engaged deeply, trains the mind it engages; skimmed, it leaves the mind as excitable as it found it.",
            "bn": "সেখানে স্থাপিত হয়ে তাদাব্বুর দেখা দেয় সমাজের রক্ষাকবচ হিসেবে, ব্যক্তিগত বিলাস হিসেবে নয়। যে সমাজ তার কিতাব নিয়ে গভীর চিন্তা করে, সে শেখে কথা ওজন করতে, দাবিকে উৎস পর্যন্ত খুঁজে যেতে, আর মুখ খোলার আগে পরিণতি অনুসরণ করতে — ঠিক সেই দক্ষতাগুলো, যেগুলোর অভাব 4:83 পায় গুজব-ছড়ানোদের মধ্যে। কুরআন, গভীরভাবে চর্চিত হলে, যে মনকে সে পায় তাকে প্রশিক্ষণ দেয়; ভাসাভাসা পড়া হলে মনকে রেখে যায় ঠিক ততটাই চঞ্চল, যতটা পেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Why It Was Sent Down",
          "bn": "কেন নাযিল হয়েছে"
        },
        "p": [
          {
            "en": "38:29 states the Quran's purpose in one line: a blessed Book We have sent down to you, that they may ponder its verses, and that those of understanding may take heed. Tadabbur is not an optional enrichment for scholars; it is the stated reason for the revelation. Recitation without it, 23:68 implies, repeats the failure of those who did not ponder the word when it came to them.",
            "bn": "38:29 এক লাইনে কুরআনের উদ্দেশ্য বলে দেয়: এক বরকতময় কিতাব, আমি তোমার প্রতি নাযিল করেছি, যেন তারা এর আয়াতগুলো নিয়ে গভীর চিন্তা করে এবং বোধসম্পন্নরা উপদেশ নেয়। তাদাব্বুর আলিমদের জন্য ঐচ্ছিক কোনো বাড়তি চর্চা নয়; এটিই ওহী নাযিলের ঘোষিত কারণ। এটি ছাড়া তিলাওয়াত — 23:68 ইঙ্গিত করে — তাদেরই ব্যর্থতার পুনরাবৃত্তি, বাণী আসার পরও যারা তা নিয়ে চিন্তা করেনি।"
          },
          {
            "en": "The classical scholars lived this instruction and left its fruits. Where verses appeared to pull against each other, they treated the appearance as an invitation, wrote works reconciling them, and found the resolution deepening the meaning of both passages — the opposite of what 4:82 predicts for a human book, where scrutiny widens the cracks. The Book's coherence grows under pressure; that experience, repeated across centuries, is the verse's evidence lived out.",
            "bn": "প্রাচীন আলিমগণ এই নির্দেশ যাপন করেছেন এবং এর ফল রেখে গেছেন। যেখানে আয়াতগুলোকে পরস্পরের বিপরীতে টানছে মনে হয়েছে, তাঁরা সেই আপাত-চিত্রকে গণ্য করেছেন আমন্ত্রণ হিসেবে, সেগুলোর সমন্বয়ে গ্রন্থ রচনা করেছেন, আর দেখেছেন মীমাংসাটি দুটি অংশেরই অর্থ গভীর করে দিচ্ছে — মানুষের লেখা বই সম্পর্কে 4:82 যা আগাম বলে তার ঠিক উল্টো, যেখানে খুঁটিয়ে দেখা ফাটলগুলোই চওড়া করে। চাপের নিচে কিতাবের সামঞ্জস্য বাড়ে; শতাব্দীর পর শতাব্দী ধরে পুনরাবৃত্ত সেই অভিজ্ঞতাই আয়াতের প্রমাণ — জীবনে ফলিত।"
          }
        ]
      },
      {
        "h": {
          "en": "How Tadabbur Is Done",
          "bn": "তাদাব্বুর যেভাবে করা হয়"
        },
        "p": [
          {
            "en": "Tadabbur has a workable method. Read small portions slowly, in a language you understand alongside the Arabic. Ask the text questions: why this word and not its synonym, why this name of Allah at this verse's end, what came before and after, who is being addressed. Compare verse with verse, since the Quran explains itself; and keep a reliable tafsir nearby to guard the boundaries of valid understanding.",
            "bn": "তাদাব্বুরের একটি কার্যকর পদ্ধতি আছে। ছোট ছোট অংশ ধীরে পড়ুন — আরবির পাশাপাশি আপনার বোঝার ভাষায়। পাঠ্যকে প্রশ্ন করুন: এই শব্দটি কেন, এর প্রতিশব্দ নয় কেন; এই আয়াতের শেষে আল্লাহর এই নামটি কেন; আগে-পরে কী এসেছে; কাকে সম্বোধন করা হচ্ছে। আয়াতের সঙ্গে আয়াত মেলান, কারণ কুরআন নিজেই নিজের ব্যাখ্যা করে; আর বৈধ বোঝাপড়ার সীমানা রক্ষায় একটি নির্ভরযোগ্য তাফসীর হাতের কাছে রাখুন।"
          },
          {
            "en": "Then complete the circuit the Quran itself models: from understanding to response. The thinkers of 3:191 end their reflection in du'a; the believers described in 8:2, when His verses are recited to them, increase in faith. Tadabbur that never reaches the heart and the limbs has stopped halfway — the far end of the Book's words, the very thing the word tadabbur means to pursue, is a changed life.",
            "bn": "তারপর কুরআন নিজে যে বৃত্তটি দেখায় তা সম্পূর্ণ করুন: বোঝা থেকে সাড়ায়। 3:191 আয়াতের চিন্তাশীলরা তাদের ভাবনা শেষ করে দোয়ায়; 8:2 আয়াতে বর্ণিত মুমিনদের সামনে তাঁর আয়াত তিলাওয়াত করা হলে তাদের ঈমান বেড়ে যায়। যে তাদাব্বুর কখনো হৃদয় ও অঙ্গ-প্রত্যঙ্গে পৌঁছায় না, তা মাঝপথে থেমে গেছে — কিতাবের শব্দগুলোর শেষ প্রান্ত, তাদাব্বুর শব্দটি যাকে ধাওয়া করতে বলে, তা হলো এক বদলে যাওয়া জীবন।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading for Certainty",
          "bn": "দৃঢ় বিশ্বাসের জন্য পাঠ"
        },
        "p": [
          {
            "en": "The verse also names what deep reading produces: certainty about the Book's origin. Many believers inherit faith and hold it sincerely but thinly, never having watched the Quran withstand their own hardest questions. 4:82 invites exactly that trial, and readers who accept it report the same result across centuries: the coherence they were promised, discovered rather than presumed, becomes a certainty no borrowed argument could have given them.",
            "bn": "আয়াতটি এও বলে দেয় গভীর পাঠ কী উৎপন্ন করে: কিতাবের উৎস সম্পর্কে দৃঢ় বিশ্বাস। বহু মুমিন ঈমান পায় উত্তরাধিকারে এবং তা ধরে রাখে আন্তরিকভাবে অথচ পাতলা করে — নিজের কঠিনতম প্রশ্নগুলোর সামনে কুরআনকে টিকে থাকতে কখনো দেখেনি বলে। 4:82 ঠিক সেই পরীক্ষারই আমন্ত্রণ জানায়, আর যারা তা গ্রহণ করে তারা শতাব্দীর পর শতাব্দী একই ফল জানিয়ে আসছে: প্রতিশ্রুত সেই সামঞ্জস্য — অনুমান করা নয়, আবিষ্কার করা — হয়ে ওঠে এমন এক নিশ্চয়তা, ধার করা কোনো যুক্তি যা কখনো দিতে পারত না।"
          },
          {
            "en": "So take the verse as a personal instruction with a schedule. A portion daily, read as if for the first time, questioned closely, checked against sound tafsir, and allowed to reach the heart. The Quran does not ask to be defended from scrutiny; it asks — twice, here and in 47:24 — to receive it. The lock the verses warn of is opened from the inside, by the reader who finally sits down to ponder.",
            "bn": "তাই আয়াতটিকে নিন সময়সূচিসহ এক ব্যক্তিগত নির্দেশ হিসেবে। প্রতিদিন একটি অংশ — যেন প্রথমবার পড়ছেন এমনভাবে পড়া, খুঁটিয়ে প্রশ্ন করা, নির্ভরযোগ্য তাফসীরের সঙ্গে মিলিয়ে নেওয়া, আর হৃদয়ে পৌঁছাতে দেওয়া। কুরআন চায় না তাকে যাচাই-বাছাই থেকে আগলে রাখা হোক; সে চায় — দুবার, এখানে ও 47:24 আয়াতে — যাচাইটা গ্রহণ করতে। আয়াতগুলো যে তালার কথা সতর্ক করে, তা খোলে ভেতর থেকে — সেই পাঠকের হাতে, যে অবশেষে গভীর চিন্তায় বসে।"
          }
        ]
      }
    ]
  },
  "4:88-91": {
    "sections": [
      {
        "h": {
          "en": "Two Camps, One Rebuke",
          "bn": "দুই দল, এক তিরস্কার"
        },
        "p": [
          {
            "en": "Surah an-Nisa is a Madinan surah, and from 4:71 it turns to the believers going out to fight and to those who hang back. 4:75 asks, wa ma lakum, what is the matter with you that you do not fight for the oppressed men, women and children. Then 4:88 puts a question of the same shape to the believers, fa-ma lakum: what is the matter with you, that you are two parties concerning the hypocrites?",
            "bn": "সূরা আন-নিসা মাদানি সূরা। ৪:৭১ আয়াত থেকে এর আলোচনা ঘুরে যায় মুমিনদের যুদ্ধে বের হওয়ার দিকে, আর যারা পিছিয়ে থাকে তাদের দিকে। ৪:৭৫ আয়াত প্রশ্ন করে, ওয়া মা লাকুম, তোমাদের কী হলো যে অসহায় নারী, পুরুষ ও শিশুদের জন্য তোমরা লড়াই করছ না? এরপর ৪:৮৮ আয়াত মুমিনদের সামনে একই গড়নের প্রশ্ন রাখে, ফা-মা লাকুম: তোমাদের কী হলো যে মুনাফিকদের নিয়ে তোমরা দুই দল হয়ে গেলে?"
          },
          {
            "en": "The passage runs four verses. 4:88 rebukes the split and says Allah cast that group back for what they earned. 4:89 describes them and gives the ruling. 4:90 opens with illa, except, lifts the ruling from two kinds of people, and closes by saying Allah has made no way for the believers against those who withdraw and offer peace. 4:91 describes a third group who want safety from both sides. Right after it, 4:92 and 4:93 give the rulings on killing a believer, by mistake and deliberately, and 4:94 tells the believers to investigate when they go out in Allah's cause.",
            "bn": "অংশটি চার আয়াতের। ৪:৮৮ আয়াত এই বিভক্তির জন্য তিরস্কার করে, আর জানায়, নিজেদের কামাইয়ের কারণে আল্লাহ দলটিকে উল্টো দিকে ফিরিয়ে দিয়েছেন। ৪:৮৯ আয়াত তাদের পরিচয় দেয় এবং হুকুম জানায়। ৪:৯০ আয়াত শুরু হয় ইল্লা, অর্থাৎ কিন্তু বা ব্যতীত, শব্দ দিয়ে। সেখানে দুই ধরনের মানুষকে হুকুমের বাইরে রাখা হয়, আর শেষে বলা হয়, যারা সরে দাঁড়ায় ও শান্তির প্রস্তাব দেয়, তাদের বিরুদ্ধে আল্লাহ মুমিনদের জন্য কোনো পথ রাখেননি। ৪:৯১ আয়াত তৃতীয় এক দলের কথা বলে, যারা দুই পক্ষের কাছেই নিরাপদ থাকতে চায়। ঠিক এর পরেই ৪:৯২ ও ৪:৯৩ আয়াতে আসে ভুলবশত ও ইচ্ছাকৃতভাবে মুমিন হত্যার বিধান, আর ৪:৯৪ আয়াত আল্লাহর পথে বের হলে যাচাই করে নেওয়ার নির্দেশ দেয়।"
          },
          {
            "en": "Who the hypocrites of 4:88 were is not settled. Ibn Kathir opens his comment by saying there are conflicting opinions over the reason the verse came down. Both of the main reports concern particular people at a time of war: men who had professed Islam and then, when it mattered, deserted the believers or took the enemy's side. Neither gives a licence against any people living at peace, and 4:90 says so in its own words.",
            "bn": "৪:৮৮ আয়াতের মুনাফিকরা ঠিক কারা ছিল, তা নিয়ে একমত হওয়া যায়নি। ইবনে কাসীর তাঁর ব্যাখ্যা শুরুই করেন এই কথা বলে যে আয়াত নাযিলের কারণ নিয়ে ভিন্ন ভিন্ন মত আছে। প্রধান দুটি বর্ণনাই যুদ্ধের সময়ের নির্দিষ্ট কিছু মানুষকে নিয়ে। তারা মুখে ইসলাম গ্রহণের কথা বলেছিল, তারপর প্রয়োজনের মুহূর্তে মুমিনদের ছেড়ে গিয়েছিল, কিংবা শত্রুর পক্ষ নিয়েছিল। কোনো বর্ণনাই শান্তিতে বসবাসকারী কোনো জনগোষ্ঠীর বিরুদ্ধে অনুমতি দেয় না, আর ৪:৯০ আয়াত নিজের ভাষাতেই সে কথা বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Cast Back, and No Way",
          "bn": "উল্টো ফেরানো, আর পথ বন্ধ"
        },
        "p": [
          {
            "en": "The key verb of 4:88 is arkasahum, from the root r-k-s. Ibn Kathir reports Ibn Abbas (RA) explaining it as cast them, and glosses it as making them revert to error and fall into it. The lexicons give the root the sense of turning a thing over and sending it back to where it started. The cause sits in the same clause, bima kasabu, for what they earned, which Ibn Kathir explains as their defiance of the Messenger ﷺ and their following of falsehood. The root appears only twice in the Quran, both times here: arkasahum in 4:88 and urkisu fiha in 4:91.",
            "bn": "৪:৮৮ আয়াতের মূল ক্রিয়া আরকাসাহুম, র-ক-স মূল থেকে। ইবনে কাসীর বর্ণনা করেন, ইবনে আব্বাস (রাঃ) এর অর্থ করেছেন, তাদের ছুড়ে ফেলেছেন। ইবনে কাসীর নিজে ব্যাখ্যা করেন, আল্লাহ তাদের গোমরাহির দিকে ফিরিয়ে দিয়েছেন, আর তারা তাতে পড়ে গেছে। অভিধানে এই মূলের অর্থ কোনো জিনিস উল্টে দেওয়া, যেখান থেকে এসেছিল সেখানেই ফেরত পাঠানো। কারণটাও একই বাক্যে আছে: বিমা কাসাবূ, তাদের কামাইয়ের কারণে। ইবনে কাসীরের ব্যাখ্যায় সেই কামাই হলো রাসূল ﷺ-এর অবাধ্যতা আর বাতিলের অনুসরণ। পুরো কুরআনে এই মূল এসেছে মাত্র দুবার, দুবারই এই অংশে: ৪:৮৮ আয়াতে আরকাসাহুম, আর ৪:৯১ আয়াতে উরকিসূ ফীহা।"
          },
          {
            "en": "In 4:91 the verb returns in the passive: every time those people are returned to al-fitnah, they are plunged back into it, and as-Suddi, in Ibn Kathir's report, takes that fitnah to mean shirk. A second word runs through the passage: sabil, a way. 4:88 ends by saying that for the one Allah sends astray you will never find a way. 4:89 asks for emigration fi sabil Allah, in the way of Allah. 4:90 ends on the same word: Allah has made no way for you against those who offer peace.",
            "bn": "৪:৯১ আয়াতে ক্রিয়াটি ফিরে আসে কর্মবাচ্যে: যখনই তাদের ফিতনার দিকে ফিরিয়ে নেওয়া হয়, তখনই তারা আবার তাতে ডুবে যায়। ইবনে কাসীরের বর্ণনায় সুদ্দী এখানে ফিতনা বলতে শিরক বুঝেছেন। অংশটি জুড়ে আরেকটি শব্দও বারবার আসে: সাবীল, অর্থাৎ পথ। ৪:৮৮ আয়াতের শেষ কথা, আল্লাহ যাকে পথভ্রষ্ট করেন, তার জন্য তুমি কখনো কোনো পথ পাবে না। ৪:৮৯ আয়াত চায় ফী সাবীলিল্লাহ, আল্লাহর পথে হিজরত। আর ৪:৯০ আয়াত শেষ হয় সেই একই শব্দে: যারা শান্তির প্রস্তাব দেয়, তাদের বিরুদ্ধে আল্লাহ তোমাদের জন্য কোনো পথ রাখেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Which People, and Which War",
          "bn": "কোন লোক, কোন যুদ্ধ"
        },
        "p": [
          {
            "en": "Ibn Kathir gives two main reports. The first, from Zayd ibn Thabit (RA), ties 4:88 to Uhud and the men who turned back from the march. The second, which al-Awfi reports from Ibn Abbas (RA) and Ibn Abi Hatim records, concerns people in Makkah who said they had embraced Islam yet gave their support to the idolaters. When they left Makkah on some errand, some believers wanted to march on them and kill them, because they backed the enemy. Others objected: would you kill people who say what you say, only because they did not emigrate?",
            "bn": "ইবনে কাসীর প্রধান দুটি বর্ণনা আনেন। প্রথমটি যায়েদ ইবনে সাবিত (রাঃ) থেকে। তাতে ৪:৮৮ আয়াতকে যুক্ত করা হয়েছে উহুদের সঙ্গে, আর সেই লোকদের সঙ্গে যারা যাত্রাপথ থেকে ফিরে গিয়েছিল। দ্বিতীয়টি আওফী বর্ণনা করেছেন ইবনে আব্বাস (রাঃ) থেকে, আর ইবনে আবি হাতিম তা লিপিবদ্ধ করেছেন। এটি মক্কার এমন কিছু লোকের কথা, যারা ইসলাম গ্রহণের দাবি করত, অথচ মুশরিকদের সাহায্য করত। তারা কোনো কাজে মক্কা থেকে বের হলে কিছু মুমিন বললেন, চলো ওদের ওপর চড়াও হয়ে হত্যা করি, ওরা তো শত্রুর সহায়। অন্যরা আপত্তি করলেন: যারা তোমাদের মতোই কালেমা বলে, শুধু হিজরত করেনি বলে তাদের হত্যা করবে?"
          },
          {
            "en": "In that report the Prophet ﷺ was with them and forbade neither side from making its case, until the verse came. At-Tabari, weighing the reports, preferred the view that the verse concerns people from Makkah, reasoning from the words until they emigrate, which point to people living outside Madinah. Mujahid, in a report Ibn Kathir cites for 4:91, said that verse came down about a group from Makkah who came to the Prophet ﷺ in Madinah appearing to be Muslims, then went back to Quraysh and returned to their idols, wanting to be at peace with both sides.",
            "bn": "সেই বর্ণনায় নবী ﷺ তাঁদের মাঝেই ছিলেন, আর আয়াত নাযিল হওয়া পর্যন্ত কোনো পক্ষকেই নিজের কথা বলতে নিষেধ করেননি। আত-তাবারী বর্ণনাগুলো যাচাই করে এই মতটিকে অগ্রাধিকার দিয়েছেন যে আয়াতটি মক্কার লোকদের নিয়ে। তাঁর যুক্তি আয়াতের শব্দ, যতক্ষণ না তারা হিজরত করে। এই কথা ইঙ্গিত দেয়, তারা মদিনার বাইরের মানুষ। ইবনে কাসীর ৪:৯১ আয়াতের ব্যাখ্যায় মুজাহিদের বর্ণনা আনেন: সেই আয়াত নাযিল হয়েছিল মক্কার এমন এক দলকে নিয়ে, যারা মদিনায় নবী ﷺ-এর কাছে এসে মুসলমান সাজত, তারপর কুরাইশের কাছে ফিরে গিয়ে আবার মূর্তিপূজায় লিপ্ত হতো। তারা দুই পক্ষের সঙ্গেই শান্তিতে থাকতে চাইত।"
          },
          {
            "en": "On the words if they turn away, Ibn Kathir gives two readings: from Ibn Abbas (RA), if they abandon emigration; from as-Suddi, if they make their disbelief open. As-Sa'di describes these hypocrites as people who claimed Islam but refused to emigrate, and notes that once they emigrated they had the rights of every Muslim. The Prophet ﷺ, he says, gave those rights to everyone with him who had emigrated, true believer or hypocrite alike. As these commentators read it, the ruling fell on people who refused hijrah or declared their disbelief, not on the hidden doubts of those living among the believers.",
            "bn": "যদি তারা মুখ ফিরিয়ে নেয়, এই কথার দুটি ব্যাখ্যা ইবনে কাসীর উল্লেখ করেন। ইবনে আব্বাস (রাঃ) থেকে: যদি তারা হিজরত ছেড়ে দেয়। সুদ্দী থেকে: যদি তারা নিজেদের কুফর প্রকাশ্যে ঘোষণা করে। আস-সা'দী এই মুনাফিকদের পরিচয় দেন এভাবে: তারা ইসলামের দাবি করত, কিন্তু হিজরত করতে অস্বীকার করত। তিনি আরও বলেন, হিজরত করলে তারা আর সব মুসলমানের মতোই অধিকার পেত। নবী ﷺ তাঁর সঙ্গে থাকা প্রত্যেক হিজরতকারীকে সেই অধিকার দিতেন, সে খাঁটি মুমিন হোক বা মুনাফিক। এই মুফাসসিরদের পাঠে হুকুমটি ছিল তাদের ওপর, যারা হিজরত প্রত্যাখ্যান করেছিল বা কুফর ঘোষণা করেছিল। মুমিনদের মাঝে বসবাসকারীদের গোপন সন্দেহ এর আওতায় ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Exceptions, Read Closely",
          "bn": "ব্যতিক্রমগুলো খুঁটিয়ে পড়া"
        },
        "p": [
          {
            "en": "4:90 names two kinds of people outside the ruling. The first are those who reach and join a people with whom the believers have a treaty. Ibn Kathir says they are to be treated as the treaty people are treated, and that this is the view of as-Suddi, Ibn Zayd and Ibn Jarir at-Tabari. The second are those who come with their hearts constricted, hasirat suduruhum, at the thought of fighting the believers or fighting their own people. Ibn Kathir describes them as neither with the Muslims nor against them, and says the believers have no right to kill them while they hold that position.",
            "bn": "৪:৯০ আয়াত দুই ধরনের মানুষকে হুকুমের বাইরে রাখে। প্রথম দল তারা, যারা এমন কোনো সম্প্রদায়ের কাছে গিয়ে মেলে, যাদের সঙ্গে মুমিনদের চুক্তি আছে। ইবনে কাসীর বলেন, চুক্তিবদ্ধ সম্প্রদায়ের সঙ্গে যে আচরণ, এদের সঙ্গেও সেই আচরণ হবে। তিনি জানান, এটি সুদ্দী, ইবনে যায়েদ ও ইবনে জারীর আত-তাবারীর মত। দ্বিতীয় দল তারা, যারা আসে সংকুচিত মন নিয়ে, হাসিরাত সুদূরুহুম। মুমিনদের বিরুদ্ধে লড়তেও তাদের মন সায় দেয় না, নিজের সম্প্রদায়ের বিরুদ্ধে লড়তেও না। ইবনে কাসীর তাদের বর্ণনা দেন, তারা মুসলমানদের পক্ষেও নয়, বিপক্ষেও নয়। আর যতক্ষণ তারা এই অবস্থানে থাকে, ততক্ষণ তাদের হত্যা করার কোনো অধিকার মুমিনদের নেই।"
          },
          {
            "en": "As-Sa'di draws the lines most sharply. Fighting the first two groups, he says, is forbidden in every circumstance, and for the believers their standing aside is the best outcome, to be accepted with praise to Allah. Only the third group, the people of 4:91 who seek safety from both sides and keep falling back into fitnah, may be fought, and even then only if they do not withdraw, do not offer peace and do not restrain their hands. Al-Muyassar puts the end of 4:90 simply: if they leave you, do not fight you and yield to you, you have no way to fight them.",
            "bn": "আস-সা'দী সীমারেখাগুলো সবচেয়ে স্পষ্ট করে টানেন। তিনি বলেন, প্রথম দুই দলের সঙ্গে লড়াই কোনো অবস্থাতেই জায়েয নয়। তাদের সরে থাকাই মুমিনদের জন্য সবচেয়ে ভালো ফল, তাই এতে সন্তুষ্ট থেকে আল্লাহর প্রশংসা করা উচিত। লড়াইয়ের অনুমতি শুধু তৃতীয় দলের বিরুদ্ধে, অর্থাৎ ৪:৯১ আয়াতের সেই লোকেরা, যারা দুই পক্ষের কাছেই নিরাপত্তা চায় আর বারবার ফিতনায় ফিরে যায়। তাও কেবল তখন, যখন তারা সরে দাঁড়ায় না, শান্তির প্রস্তাব দেয় না, আর নিজেদের হাত গুটিয়ে নেয় না। আল-মুয়াসসার ৪:৯০ আয়াতের শেষ অংশ সহজ করে বলে: তারা যদি তোমাদের ছেড়ে যায়, তোমাদের সঙ্গে না লড়ে, আর তোমাদের কাছে আত্মসমর্পণ করে, তবে তাদের সঙ্গে লড়াইয়ের কোনো পথ তোমাদের নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Madinah Sifts Its Own",
          "bn": "মদিনা নিজেই ছেঁকে নেয়"
        },
        "p": [
          {
            "en": "Imam Ahmad records from Zayd ibn Thabit (RA) that the Messenger of Allah ﷺ marched out towards Uhud, and some who had set out with him went back to Madinah. The Companions divided over them: one group said they should be killed, the other objected. Then Allah sent down fa-ma lakum fil-munafiqina fi'atayn. In the wording Ibn Kathir gives, the Prophet ﷺ said of Madinah that she is Taybah and expels impurity as the bellows expel the dross of iron. Ibn Kathir adds that the two Sahihs also record the report.",
            "bn": "ইমাম আহমাদ যায়েদ ইবনে সাবিত (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ উহুদের দিকে রওনা হলেন, আর তাঁর সঙ্গে যারা বের হয়েছিল তাদের কিছু লোক মদিনায় ফিরে গেল। তাদের নিয়ে সাহাবীরা দুই ভাগ হয়ে গেলেন। একদল বললেন, ওদের হত্যা করা উচিত, অন্যদল আপত্তি করলেন। তখন আল্লাহ নাযিল করলেন, ফা-মা লাকুম ফিল-মুনাফিকীনা ফিআতাইন। ইবনে কাসীর যে ভাষ্য উল্লেখ করেছেন, তাতে নবী ﷺ মদিনা সম্পর্কে বলেন, এ হলো তাইবা, হাপর যেমন লোহার ময়লা দূর করে, মদিনাও তেমনি মলিনতা দূর করে দেয়। ইবনে কাসীর আরও জানান, সহীহ বুখারী ও সহীহ মুসলিমেও বর্ণনাটি আছে।"
          },
          {
            "en": "The Prophet's ﷺ words in that report give no order to pursue the men who left. They speak of the city itself separating the true from the false. His practice with the hypocrites living inside Madinah kept that restraint. Al-Bukhari records from Jabir (RA) that when Abdullah ibn Ubayy said the more honoured would expel the more humble on returning to Madinah, words 63:8 preserves, Umar (RA) asked leave to kill him. The Prophet ﷺ refused, so that people would not say Muhammad kills his companions.",
            "bn": "সেই বর্ণনায় নবী ﷺ-এর কথায় যারা চলে গেল তাদের পিছু ধাওয়া করার কোনো নির্দেশ নেই। তাঁর কথা শহরটিকে নিয়ে, যা নিজেই খাঁটি আর মেকিকে আলাদা করে ফেলে। মদিনার ভেতরে বাস করা মুনাফিকদের সঙ্গেও তাঁর আচরণে এই সংযম ছিল। সহীহ বুখারীতে জাবির (রাঃ) থেকে আছে, আবদুল্লাহ ইবনে উবাই বলেছিল, মদিনায় ফিরলে সম্মানিতরা হীনদের বের করে দেবে। তার এই কথা ৬৩:৮ আয়াতে সংরক্ষিত আছে। উমর (রাঃ) তাকে হত্যার অনুমতি চাইলেন। নবী ﷺ রাজি হলেন না, যেন লোকে না বলে যে মুহাম্মদ নিজের সঙ্গীদেরই হত্যা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Stand Beside It",
          "bn": "পাশে দাঁড়ানো আয়াতগুলো"
        },
        "p": [
          {
            "en": "4:94, three verses on, completes the passage's care for blood. It tells the believers, when they go out in Allah's cause, to investigate, and not to say to one who offers them peace, you are not a believer, out of desire for the goods of this life. 4:97 shows why emigration weighed so much here: the angels ask those who died wronging themselves whether Allah's earth was not spacious enough to emigrate. Yet 4:98 excepts the oppressed who could neither devise a plan nor find a way.",
            "bn": "তিন আয়াত পরে ৪:৯৪ আয়াত রক্তের প্রতি এই অংশের সতর্কতাকে পূর্ণ করে। সেখানে মুমিনদের বলা হয়েছে, আল্লাহর পথে বের হলে যাচাই করে নাও, আর কেউ তোমাদের শান্তির সালাম দিলে দুনিয়ার সম্পদের লোভে তাকে বলো না, তুমি মুমিন নও। হিজরত এখানে কেন এত গুরুত্বপূর্ণ, তা বোঝা যায় ৪:৯৭ আয়াতে। নিজেদের ওপর যুলুম করা অবস্থায় যাদের মৃত্যু হয়, ফেরেশতারা তাদের জিজ্ঞেস করেন, আল্লাহর যমীন কি হিজরতের জন্য প্রশস্ত ছিল না? তবু ৪:৯৮ আয়াত সেই অসহায়দের বাদ রাখে, যারা কোনো উপায় বের করতে পারে না, পথও পায় না।"
          },
          {
            "en": "60:8 draws the wider line the passage assumes: Allah does not forbid being righteous and just toward those who do not fight you because of religion and do not expel you from your homes. 8:61 tells the Prophet ﷺ that if they incline to peace, he should incline to it too and rely upon Allah. 2:190 commands fighting those who fight you and forbids transgression, for Allah does not like transgressors. Ibn Kathir notes a report that Ibn Abbas (RA) said the treaty exception was abrogated by 9:5, yet the restraint closing 4:90 is no lone footnote: these verses carry it across the Quran.",
            "bn": "৬০:৮ আয়াত সেই বড় সীমারেখা টানে, যা এই অংশের পেছনে আছে: দীনের কারণে যারা তোমাদের সঙ্গে লড়েনি এবং তোমাদের ঘরবাড়ি থেকে বের করে দেয়নি, তাদের প্রতি সদয় ও ন্যায়নিষ্ঠ হতে আল্লাহ নিষেধ করেন না। ৮:৬১ আয়াত নবী ﷺ-কে বলে, তারা সন্ধির দিকে ঝুঁকলে তিনিও যেন ঝুঁকে পড়েন এবং আল্লাহর ওপর ভরসা করেন। ২:১৯০ আয়াত নির্দেশ দেয়, যারা তোমাদের বিরুদ্ধে লড়ে তাদের বিরুদ্ধে লড়ো, কিন্তু সীমা ছাড়িয়ো না, কারণ আল্লাহ সীমালঙ্ঘনকারীদের ভালোবাসেন না। ইবনে কাসীর অবশ্য একটি বর্ণনা উল্লেখ করেন যে, ইবনে আব্বাস (রাঃ) বলেছেন, চুক্তির ব্যতিক্রমটি ৯:৫ আয়াত দিয়ে রহিত হয়ে যায়। তবু ৪:৯০ আয়াতের শেষ বাক্যের সংযম কোনো বিচ্ছিন্ন টীকা নয়, এই আয়াতগুলো কুরআন জুড়ে সেই সংযমই বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying a Hard Verse Today",
          "bn": "আজ কঠিন আয়াতটি বহন করা"
        },
        "p": [
          {
            "en": "The first duty here is to read the passage whole. The command in 4:89 is not the end of the thought: 4:90 begins with illa, except, and the exception attaches to that very command. Anyone who lifts the words kill them wherever you find them out of 4:89 and aims them at a neighbour, a community or a people at peace has cut the verse from its own exceptions and from the commentators who said whom it concerned. When you share a verse about fighting, share the verses beside it too.",
            "bn": "প্রথম দায়িত্ব হলো অংশটি পুরোটা একসঙ্গে পড়া। ৪:৮৯ আয়াতের হুকুমেই কথা শেষ নয়। ৪:৯০ আয়াত শুরু হয় ইল্লা দিয়ে, আর ব্যতিক্রমটি জুড়ে আছে ঠিক ওই হুকুমের সঙ্গেই। কেউ যদি ৪:৮৯ আয়াত থেকে, যেখানে পাও হত্যা করো, কথাটুকু তুলে এনে কোনো প্রতিবেশী, কোনো জনগোষ্ঠী বা শান্তিতে থাকা কোনো জাতির দিকে তাক করে, তবে সে আয়াতটিকে তার নিজের ব্যতিক্রম থেকে কেটে ফেলেছে। মুফাসসিরগণ যাদের কথা বলেছেন, তাদের থেকেও বিচ্ছিন্ন করেছে। যুদ্ধের কোনো আয়াত শেয়ার করলে তার পাশের আয়াতগুলোও সঙ্গে দিন।"
          },
          {
            "en": "The same honesty is owed when someone quotes these verses to accuse Islam. The answer is the passage itself: particular people who professed faith and then deserted or sided against the believers in wartime, a ruling fenced by two exemptions and a condition, and a closing word that Allah made no way against anyone who offers peace. A family or study circle can practise this. Read 4:88 to 4:94 aloud together, then let each person say in one sentence whom the command concerned and whom it did not.",
            "bn": "কেউ যখন এই আয়াতগুলো উদ্ধৃত করে ইসলামকে দোষারোপ করে, তখনও একই সততা দরকার। জবাব এই অংশটিই: নির্দিষ্ট কিছু মানুষ, যারা ঈমানের দাবি করে যুদ্ধের সময় মুমিনদের ছেড়ে গিয়েছিল বা বিপক্ষে দাঁড়িয়েছিল। হুকুমটির চারপাশে আছে দুটি ব্যতিক্রম ও একটি শর্ত। আর শেষ কথা, যে শান্তির প্রস্তাব দেয়, তার বিরুদ্ধে আল্লাহ কোনো পথ রাখেননি। পরিবার বা পাঠচক্রে এর অনুশীলন করা যায়। ৪:৮৮ থেকে ৪:৯৪ পর্যন্ত একসঙ্গে জোরে পড়ুন, তারপর প্রত্যেকে এক বাক্যে বলুক, হুকুমটি কাদের নিয়ে ছিল আর কাদের নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Vocabulary",
          "bn": "আয়াতের শব্দে দু'আ"
        },
        "p": [
          {
            "en": "The passage holds no supplication, so what follows is not a Sunnah du'a but a short prayer composed from the passage's own words, to be read as such. O Allah, do not cast us back for what we have earned. Do not make us among those who are returned to fitnah and fall into it. Guide us to Your way and keep us firm upon it. And make us people who accept peace when it is offered and who do not transgress.",
            "bn": "এই অংশে কোনো দু'আ নেই। তাই নিচের কথাগুলো সুন্নাহর দু'আ নয়, আয়াতের নিজের শব্দ দিয়ে গড়া ছোট প্রার্থনা, একে সেভাবেই পড়ুন। হে আল্লাহ, আমাদের কামাইয়ের কারণে আমাদের উল্টো দিকে ফিরিয়ে দেবেন না। যাদের ফিতনার দিকে ফেরানো হলে তাতেই ডুবে যায়, আমাদের তাদের দলে রাখবেন না। আমাদের আপনার পথ দেখান, আর সেই পথে অবিচল রাখুন। আর আমাদের এমন মানুষ বানান, যারা শান্তির প্রস্তাব পেলে তা গ্রহণ করে এবং সীমা ছাড়ায় না।"
          },
          {
            "en": "Each line answers the text. The first answers arkasahum in 4:88, the fear of being turned back by one's own deeds; the second, urkisu fiha in 4:91, the fall that repeats itself. The prayer for guidance answers the warning of 4:88 about the one for whom no way is found. The last answers the close of 4:90 and the ban on transgression in 2:190. Say it after reading the passage, so that its hardest words end in a request for your own heart.",
            "bn": "প্রতিটি লাইন আয়াতের কোনো কথার জবাব। প্রথমটি ৪:৮৮ আয়াতের আরকাসাহুম শব্দের জবাব, নিজের আমলের কারণে উল্টো দিকে ফিরে যাওয়ার ভয়। দ্বিতীয়টি ৪:৯১ আয়াতের উরকিসূ ফীহা, বারবার ফিরে ফিরে পড়ে যাওয়ার জবাব। হিদায়াতের প্রার্থনাটি ৪:৮৮ আয়াতের সেই সতর্কবাণীর জবাব, যার জন্য কোনো পথ পাওয়া যায় না। শেষটি জবাব দেয় ৪:৯০ আয়াতের শেষ কথা আর ২:১৯০ আয়াতের সীমালঙ্ঘনের নিষেধকে। অংশটি পড়ার পর দু'আটি করুন, যেন এর কঠিনতম কথাগুলো শেষ হয় নিজের অন্তরের জন্য চাওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Road",
          "bn": "পথে সঙ্গে রাখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When I meet a hard verse, do I go first to its context and its commentators, or to my own feelings about it? When I have quoted the Quran in an argument, have I ever left out the verse that would have softened my point? When believers around me split into camps over who is sincere, what have I actually seen of anyone's conduct, and what am I only guessing about their hearts?",
            "bn": "কঠিন কোনো আয়াতের সামনে এলে আমি কি আগে তার প্রেক্ষাপট ও মুফাসসিরদের কাছে যাই, নাকি নিজের অনুভূতির কাছে? তর্কে কুরআন উদ্ধৃত করার সময় আমি কি কখনো সেই আয়াতটি বাদ দিয়েছি, যা আমার কথাকে নরম করে দিত? আমার চারপাশের মুমিনরা কে খাঁটি তা নিয়ে দুই দলে ভাগ হলে, কারও আচরণের কতটুকু আমি সত্যিই দেখেছি, আর তাদের অন্তর নিয়ে কতটুকু শুধু অনুমান করছি?"
          },
          {
            "en": "Is there a company where I keep my faith quiet so that I can stay safe with everyone, as the people of 4:91 wanted? When someone who wronged me offers peace, what stops me from taking it as readily as 4:90 does? And what have I earned this month that I would not want to be turned back by?",
            "bn": "এমন কোনো মহল কি আছে, যেখানে সবার কাছে নিরাপদ থাকার জন্য আমি নিজের ঈমানকে চুপ করিয়ে রাখি, যেমনটা ৪:৯১ আয়াতের লোকেরা চাইত? যে আমার ওপর অন্যায় করেছে, সে শান্তির প্রস্তাব দিলে ৪:৯০ আয়াতের মতো সহজে তা গ্রহণ করতে আমাকে কী আটকায়? আর এই মাসে আমি এমন কী কামাই করেছি, যার কারণে উল্টো দিকে ফিরে যেতে চাই না?"
          }
        ]
      }
    ]
  },
  "4:110": {
    "sections": [
      {
        "h": {
          "en": "A Door Inside a Court Case",
          "bn": "মামলার ভেতরে এক দরজা"
        },
        "p": [
          {
            "en": "This verse stands inside one of the most concrete passages of Surah an-Nisa. From 4:105 the revelation addresses a real dispute in Madinah: the Prophet ﷺ is told to judge between people by what Allah has shown him and not to be an advocate for the treacherous. At-Tirmidhi relates the occasion: a theft had been committed, and the blame was being steered toward an innocent man while the guilty party's people argued his case.",
            "bn": "এই আয়াতটি সূরা আন-নিসার সবচেয়ে বাস্তব অনুচ্ছেদগুলোর একটির ভেতরে দাঁড়িয়ে আছে। 4:105 থেকে ওহী মদীনার একটি বাস্তব বিরোধের প্রসঙ্গ ধরে: নবী ﷺ-কে বলা হয় আল্লাহ তাঁকে যা দেখিয়েছেন সে অনুযায়ী মানুষের মধ্যে বিচার করতে এবং বিশ্বাসঘাতকদের পক্ষে ওকালতি না করতে। তিরমিযী এর প্রেক্ষাপট বর্ণনা করেন: একটি চুরি হয়েছিল, আর দোষ ঠেলে দেওয়া হচ্ছিল এক নিরপরাধ মানুষের দিকে, যখন অপরাধী পক্ষের লোকেরা তার হয়ে সাফাই গাইছিল।"
          },
          {
            "en": "The passage exposes the maneuver step by step. 4:108 says the schemers may hide from people but cannot hide from Allah, who is with them as they plot speech He does not approve, and 4:112 rules that whoever earns a fault and then throws it upon an innocent person has burdened himself with slander and clear sin. In the middle of this exposure, before the verdicts finish, 4:110 opens a door wide enough for even these people.",
            "bn": "অনুচ্ছেদটি ধাপে ধাপে চক্রান্তটি উন্মোচন করে। 4:108 বলে, ষড়যন্ত্রকারীরা মানুষের কাছ থেকে লুকাতে পারে কিন্তু আল্লাহর কাছ থেকে নয় — তারা যখন তাঁর অপছন্দের কথা সাজায় তখনও তিনি তাদের সাথেই থাকেন; আর 4:112 রায় দেয়, যে ব্যক্তি অপরাধ কামাই করে তা কোনো নিরপরাধের ঘাড়ে চাপায়, সে অপবাদ ও স্পষ্ট গুনাহের বোঝা নিজের উপর তুলে নিল। এই উন্মোচনের মাঝখানে, রায়গুলো শেষ হওয়ার আগেই, 4:110 এমন এক দরজা খুলে দেয় যা এমনকি এই লোকদের জন্যও যথেষ্ট প্রশস্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names for Wrong",
          "bn": "অন্যায়ের দুই নাম"
        },
        "p": [
          {
            "en": "The verse names two categories: whoever does su', evil, or wrongs his own soul, zulm an-nafs. The commentators read the pairing as a net with no gaps — wrong that lands on others and wrong whose damage stays inside the doer, sins of the hand and sins of the heart. Whichever kind it was, the next clause is the same: thumma yastaghfir Allah, then he seeks Allah's forgiveness. The wrong is not denied, renamed or defended; it is carried to the right address.",
            "bn": "আয়াতটি দুটি শ্রেণীর নাম নেয়: যে কেউ সূ' — মন্দ কাজ — করে, অথবা নিজের প্রাণের উপর জুলুম করে — যুলমুন-নাফস। মুফাসসিরগণ এই জোড়াকে ফাঁকবিহীন এক জালের মতো পড়েন — যে অন্যায় অন্যের উপর পড়ে আর যে অন্যায়ের ক্ষতি কর্তার ভেতরেই থেকে যায়, হাতের গুনাহ আর অন্তরের গুনাহ। যে ধরনেরই হোক, পরের বাক্যাংশ একটাই: সুম্মা ইয়াস্তাগফিরিল্লাহ — তারপর সে আল্লাহর কাছে ক্ষমা চায়। অন্যায়কে অস্বীকার করা হয় না, নতুন নাম দেওয়া হয় না, পক্ষ নেওয়াও হয় না; তাকে সঠিক ঠিকানায় বয়ে নেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "He Will Find",
          "bn": "সে আল্লাহকে পাবে"
        },
        "p": [
          {
            "en": "The verse does not say Allah will forgive him, though that is true. It says yajidi Allaha Ghafuran Rahima — he will find Allah Forgiving, Merciful. Finding is immediate; it describes what is already there when you arrive. The door is not opened in response to the knock; the turning sinner discovers it standing open. And the two names come in intensive forms: not merely one who forgives, but One whose settled attribute is forgiveness joined to mercy.",
            "bn": "আয়াতটি বলে না যে আল্লাহ তাকে ক্ষমা করবেন — যদিও সেটাও সত্য। এটি বলে: ইয়াজিদিল্লাহা গাফূরার রাহীমা — সে আল্লাহকে পাবে ক্ষমাশীল, পরম দয়ালুরূপে। পাওয়া তাৎক্ষণিক; পৌঁছেই যা আগে থেকে আছে, শব্দটি তারই বর্ণনা। দরজাটি কড়া নাড়ার জবাবে খোলা হয় না; ফিরে আসা গুনাহগার দেখে দরজা খোলাই আছে। আর নাম দুটি এসেছে জোরালো রূপে: কেবল এমন কেউ নন যিনি ক্ষমা করেন, বরং এমন সত্তা যাঁর স্থায়ী গুণই হলো দয়ার সাথে জোড়া ক্ষমা।"
          },
          {
            "en": "Muslim records from Abu Musa (RA) that the Prophet ﷺ said Allah stretches out His hand by night to accept the repentance of the one who sinned by day, and stretches out His hand by day to accept the repentance of the one who sinned by night, until the sun rises from its west. The verse and the hadith describe one standing reality from two sides: the finding and the waiting.",
            "bn": "মুসলিম আবু মূসা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহ রাতে তাঁর হাত প্রসারিত করেন যেন দিনের গুনাহগার তাওবা করে, আর দিনে হাত প্রসারিত করেন যেন রাতের গুনাহগার তাওবা করে — যতদিন না সূর্য পশ্চিম দিক থেকে উদিত হয়। আয়াত ও হাদীস একই স্থায়ী বাস্তবতাকে দুই দিক থেকে বর্ণনা করে: একদিকে পাওয়া, অন্যদিকে অপেক্ষা।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Mufassirun Note",
          "bn": "মুফাসসিরদের পর্যবেক্ষণ"
        },
        "p": [
          {
            "en": "At-Tabari reads the verse as general: every wrongdoer who turns sincerely is included, whatever the sin. Its neighbours sharpen it rather than narrow it. The verse just after, 4:111, states that whoever earns a sin earns it only against himself — responsibility cannot be outsourced — and 4:112 condemns transferring blame to the innocent. Between honest ownership of sin and the crime of reassigning it, 4:110 shows the only exit that works: owning the wrong before the One who can erase it.",
            "bn": "আত-তাবারী আয়াতটিকে ব্যাপক অর্থে পড়েন: যে অন্যায়কারীই আন্তরিকভাবে ফিরে আসে, সে-ই এর অন্তর্ভুক্ত — গুনাহ যা-ই হোক। প্রতিবেশী আয়াতগুলো একে সংকীর্ণ করে না, বরং ধারালো করে। ঠিক পরের আয়াত 4:111 বলে, যে গুনাহ কামাই করে সে তা কেবল নিজের বিরুদ্ধেই কামাই করে — দায় অন্যের ঘাড়ে চাপানো যায় না; আর 4:112 নিরপরাধের উপর দোষ চাপানোকে নিন্দা করে। গুনাহের সৎ স্বীকৃতি আর তা অন্যের নামে লেখানোর অপরাধ — এই দুইয়ের মাঝে 4:110 একমাত্র কার্যকর নির্গমনপথ দেখায়: অন্যায়ের মালিকানা স্বীকার করা তাঁরই সামনে, যিনি তা মুছে দিতে পারেন।"
          },
          {
            "en": "Earlier in the same surah, 4:64 says that if those who wronged themselves had come to the Prophet ﷺ and sought Allah's forgiveness, and the Messenger had sought forgiveness for them, they would have found Allah accepting of repentance, Merciful. The same verb again: found. The Quran keeps insisting that forgiveness is not a distant possibility to be negotiated but a present reality to be entered.",
            "bn": "একই সূরার আগের দিকে, 4:64 বলে, যারা নিজেদের উপর জুলুম করেছিল তারা যদি নবী ﷺ-এর কাছে এসে আল্লাহর ক্ষমা চাইত, আর রাসূলও তাদের জন্য ক্ষমা চাইতেন, তবে তারা আল্লাহকে পেত তাওবা কবুলকারী, পরম দয়ালুরূপে। আবারও সেই একই ক্রিয়াপদ: পাওয়া। কুরআন বারবার জোর দিয়ে বলে, ক্ষমা দূরের কোনো সম্ভাবনা নয় যা নিয়ে দর-কষাকষি করতে হবে, বরং এক বর্তমান বাস্তবতা, যেখানে প্রবেশ করতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wider Invitation",
          "bn": "বৃহত্তর আমন্ত্রণ"
        },
        "p": [
          {
            "en": "The verse belongs to a family. 39:53 forbids despair of Allah's mercy to those who have gone to excess against themselves, for Allah forgives all sins. 3:135 praises those who, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness for their sins — and who forgives sins except Allah? And 25:70 promises that for those who repent, believe and work righteousness, Allah will replace their evil deeds with good ones. The doorway of 4:110 opens onto all of this.",
            "bn": "আয়াতটি একটি পরিবারের সদস্য। 39:53 তাদের জন্য আল্লাহর রহমত থেকে নিরাশ হওয়া নিষেধ করে, যারা নিজেদের উপর বাড়াবাড়ি করেছে — কারণ আল্লাহ সব গুনাহ ক্ষমা করেন। 3:135 তাদের প্রশংসা করে যারা কোনো অশ্লীল কাজ করে ফেললে বা নিজেদের উপর জুলুম করলে আল্লাহকে স্মরণ করে নিজেদের গুনাহের জন্য ক্ষমা চায় — আর আল্লাহ ছাড়া কে-ই বা গুনাহ ক্ষমা করে? আর 25:70 প্রতিশ্রুতি দেয়, যারা তাওবা করে, ঈমান আনে ও সৎকাজ করে, আল্লাহ তাদের মন্দ কাজগুলো ভালো দিয়ে বদলে দেবেন। 4:110 আয়াতের দরজাটি এসবের দিকেই খোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Using the Door",
          "bn": "দরজাটি ব্যবহার"
        },
        "p": [
          {
            "en": "The practice is speed. Wrong happens; the trained believer shortens the distance between the fall and the istighfar until it is nearly nothing — no waiting to feel worthy, no fixing oneself first, because the verse's order is wrong, then turning, then finding. Delay serves nothing except the voice that says the door has surely shut this time. The verse exists precisely to silence that voice.",
            "bn": "এর অনুশীলন হলো দ্রুততা। অন্যায় ঘটে যায়; প্রশিক্ষিত মুমিন পতন আর ইস্তিগফারের মাঝের দূরত্ব কমাতে কমাতে প্রায় শূন্যে নামিয়ে আনে — যোগ্য বোধ করার অপেক্ষা নেই, আগে নিজেকে শুধরে নেওয়ার শর্ত নেই, কারণ আয়াতের ক্রম হলো: অন্যায়, তারপর ফেরা, তারপর পাওয়া। দেরি কেবল সেই কণ্ঠস্বরের কাজে লাগে যে বলে, এবার নিশ্চয়ই দরজা বন্ধ হয়ে গেছে। আয়াতটির অস্তিত্বই সেই কণ্ঠস্বরকে চুপ করানোর জন্য।"
          },
          {
            "en": "One caution keeps the door honest. Seeking forgiveness in the verse is a turning of the heart, not a formula recited over a sin one intends to keep. The passage around it is about people who covered wrong with words. So say the words, and turn — return what was taken, repair what can be repaired, leave what must be left. Then the promise applies exactly as written: you will find Him Forgiving, Merciful.",
            "bn": "একটি সতর্কতা দরজাটিকে সৎ রাখে। আয়াতে ক্ষমা চাওয়া মানে অন্তরের ফেরা — এমন কোনো মুখস্থ বাক্য নয় যা পড়া হয় সেই গুনাহের উপর, যা ধরে রাখারই ইচ্ছা। আশপাশের অনুচ্ছেদটিই তো তাদের নিয়ে, যারা কথা দিয়ে অন্যায় ঢেকেছিল। তাই শব্দগুলো বলুন, এবং ফিরুন — যা নেওয়া হয়েছে তা ফেরত দিন, যা মেরামতযোগ্য তা মেরামত করুন, যা ছাড়তে হবে তা ছাড়ুন। তখন প্রতিশ্রুতিটি হুবহু লেখা অনুযায়ীই প্রযোজ্য হবে: আপনি তাঁকে পাবেন ক্ষমাশীল, পরম দয়ালুরূপে।"
          }
        ]
      }
    ]
  },
  "4:135": {
    "sections": [
      {
        "h": {
          "en": "Standing Firm, for Allah",
          "bn": "আল্লাহর জন্য অটল দাঁড়ানো"
        },
        "p": [
          {
            "en": "The verse does not ask believers to be occasionally fair. Kunu qawwamina bil-qist uses an intensive form: be ones who stand up for justice constantly, as a posture, not an episode. And it fixes the direction of the testimony: shuhada'a lillah, witnesses for Allah. Testimony in this verse is an act of worship before it is a legal procedure. The witness answers to Allah for what he says, not to the party who benefits from it.",
            "bn": "আয়াতটি মুমিনদের মাঝে মাঝে ন্যায়পরায়ণ হতে বলে না। কুনু কাওয়ামীনা বিল-কিসত একটি জোরালো রূপ ব্যবহার করে: ইনসাফের জন্য সর্বদা দাঁড়িয়ে থাকা মানুষ হও — এ এক ভঙ্গি, কোনো বিচ্ছিন্ন ঘটনা নয়। আর সে সাক্ষ্যের অভিমুখও ঠিক করে দেয়: শুহাদাআ লিল্লাহ — আল্লাহর জন্য সাক্ষী। এই আয়াতে সাক্ষ্য আইনি প্রক্রিয়া হওয়ার আগে একটি ইবাদত। সাক্ষী তার কথার জবাব দেবে আল্লাহর কাছে — যে পক্ষ তাতে লাভবান হয় তার কাছে নয়।"
          },
          {
            "en": "Then the verse names its price immediately: even against yourselves, or parents and near relatives. The order runs through the three strongest loyalties a person has, hardest first. Testifying against oneself means confessing, admitting liability, correcting one's own record when no one could have forced it. A religion that begins its justice at the speaker's own expense has located the problem accurately: the first court that corrupts testimony sits inside the witness.",
            "bn": "এরপর আয়াত সঙ্গে সঙ্গে এর মূল্যটি বলে দেয়: এমনকি নিজেদের বিরুদ্ধে হলেও, কিংবা মাতা-পিতা ও নিকটাত্মীয়ের বিরুদ্ধে। ক্রমটি মানুষের তিনটি সবচেয়ে শক্ত আনুগত্যের ভেতর দিয়ে যায় — সবচেয়ে কঠিনটি আগে। নিজের বিরুদ্ধে সাক্ষ্য মানে স্বীকারোক্তি, দায় মেনে নেওয়া, কেউ বাধ্য করতে পারত না এমন মুহূর্তে নিজের হিসাব শুধরে নেওয়া। যে দ্বীন তার ইনসাফ শুরু করে বক্তার নিজের লোকসান দিয়ে, সে সমস্যাটিকে নির্ভুল জায়গায় শনাক্ত করেছে: সাক্ষ্যকে যে আদালত প্রথম দূষিত করে, তা বসে সাক্ষীর নিজের ভেতরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Rich and the Poor",
          "bn": "ধনী ও দরিদ্র"
        },
        "p": [
          {
            "en": "Whether the person concerned is rich or poor, the verse says, Allah is closer to both. Two opposite temptations are being closed at once. Before the rich party stands the fear of power and the hope of favour; before the poor party stands sentiment, the urge to bend the finding out of pity. Both are forms of the same corruption — deciding the testimony by looking at the parties instead of at the truth.",
            "bn": "সংশ্লিষ্ট ব্যক্তি ধনী হোক বা দরিদ্র — আয়াত বলে, আল্লাহ উভয়েরই অধিকতর নিকটবর্তী। এক ধাক্কায় দুটি বিপরীত প্রলোভন বন্ধ করা হচ্ছে। ধনী পক্ষের সামনে থাকে ক্ষমতার ভয় আর অনুগ্রহের আশা; দরিদ্র পক্ষের সামনে থাকে আবেগ — করুণার বশে সিদ্ধান্ত বাঁকিয়ে দেওয়ার তাড়না। দুটিই একই দুর্নীতির দুই রূপ — সত্যের দিকে না তাকিয়ে পক্ষদের দিকে তাকিয়ে সাক্ষ্য ঠিক করা।"
          },
          {
            "en": "Allah is awla bihima: nearer to them both, more entitled concerning them, better aware of their true interests than the witness could be. The commentators draw the plain conclusion: care for the poor is commanded everywhere in the Book, but its instrument is charity and justice, never falsified testimony. 5:8 completes the frame from the other side — do not let hatred of a people push you away from justice. Love and hate are both told to stand down.",
            "bn": "আল্লাহ আওলা বিহিমা: তিনি উভয়েরই অধিক নিকটে, উভয়ের ব্যাপারে অধিক হকদার, তাদের প্রকৃত কল্যাণ সম্পর্কে সাক্ষীর চেয়ে ভালো জানেন। মুফাসসিরগণ সরল সিদ্ধান্তটি টানেন: দরিদ্রের প্রতি যত্নের আদেশ কিতাবের সর্বত্র আছে, কিন্তু তার মাধ্যম দান ও ইনসাফ — মিথ্যা সাক্ষ্য কখনোই নয়। 5:8 অন্য দিক থেকে কাঠামোটি সম্পূর্ণ করে — কোনো জাতির প্রতি বিদ্বেষ যেন তোমাদের ইনসাফ থেকে সরিয়ে না দেয়। ভালোবাসা ও ঘৃণা — দুটিকেই সরে দাঁড়াতে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Do Not Follow the Hawa",
          "bn": "প্রবৃত্তির অনুসরণ নয়"
        },
        "p": [
          {
            "en": "The verse then names the engine of injustice: fala tattabi'ul-hawa an ta'dilu, do not follow inclination, lest you swerve from being just. Hawa is whatever the self wants before asking what is true. The verse does not treat unfairness as an information problem, solvable with better procedures alone. It treats it as a desire problem: the witness wanted something, and the testimony bent itself around the want.",
            "bn": "এরপর আয়াত অবিচারের ইঞ্জিনটির নাম নেয়: ফালা তাত্তাবিউল হাওয়া আন তা'দিলু — প্রবৃত্তির অনুসরণ কোরো না, পাছে ইনসাফ থেকে সরে যাও। হাওয়া হলো তা-ই, যা সত্য কী তা জিজ্ঞেস করার আগেই নফস চেয়ে বসে। আয়াত অন্যায়কে তথ্যের সমস্যা হিসেবে দেখে না, যা কেবল ভালো পদ্ধতিতে সমাধানযোগ্য। দেখে বাসনার সমস্যা হিসেবে: সাক্ষী কিছু একটা চেয়েছিল, আর সাক্ষ্য সেই চাওয়ার চারপাশে নিজেকে বাঁকিয়ে নিয়েছে।"
          },
          {
            "en": "Two escape routes are then sealed by name: wa in talwu aw tu'ridu — and if you twist or turn away. Ibn Abbas (RA) is related to have explained the pair: layy is distorting testimony with the tongue while appearing to testify, and i'rad is withholding it, declining to appear at all. Silence, the verse insists, is not neutrality; the concealed testimony is counted. And the sentence closes over both: Allah is fully aware of what you do.",
            "bn": "এরপর দুটি পালানোর পথ নাম ধরে সিল করে দেওয়া হয়: ওয়া ইন তালউ আও তু'রিদু — আর যদি তোমরা বাঁকাও বা মুখ ফেরাও। ইবনে আব্বাস (রাঃ) থেকে এই জোড়ার ব্যাখ্যা বর্ণিত: লাইয় হলো সাক্ষ্য দেওয়ার ভান করে জিভ দিয়ে তা বিকৃত করা, আর ই'রায হলো তা চেপে রাখা — একেবারে হাজির না হওয়া। আয়াত জোর দিয়ে বলে, নীরবতা নিরপেক্ষতা নয়; গোপন করা সাক্ষ্যও হিসাবে ধরা হয়। আর বাক্যটি দুটির ওপরই বন্ধ হয়: তোমরা যা করো, আল্লাহ সে সম্পর্কে পূর্ণ অবগত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Twin Verses",
          "bn": "যমজ আয়াত"
        },
        "p": [
          {
            "en": "This verse has a twin in 5:8, and the two divide the terrain of bias between them. Here, in 4:135, the pressure comes from love — self, parents, kin, the wealthy patron, the pitiable poor. There, the pressure comes from hate: do not let enmity toward a people make you swerve; be just, that is nearer to taqwa. Between the two commands, no relationship is left through which injustice can enter lawfully.",
            "bn": "এই আয়াতের এক যমজ আছে 5:8-এ, আর দুটি মিলে পক্ষপাতের ভূখণ্ড ভাগ করে নিয়েছে। এখানে, 4:135-এ, চাপ আসে ভালোবাসা থেকে — নিজ, মাতা-পিতা, আত্মীয়, ধনী পৃষ্ঠপোষক, করুণা-জাগানো দরিদ্র। সেখানে চাপ আসে ঘৃণা থেকে: কোনো জাতির প্রতি শত্রুতা যেন তোমাদের বিচ্যুত না করে; ইনসাফ করো, তা তাকওয়ার নিকটতর। এই দুই আদেশের মাঝে এমন কোনো সম্পর্ক অবশিষ্ট থাকে না, যার ভেতর দিয়ে অবিচার বৈধভাবে ঢুকতে পারে।"
          },
          {
            "en": "The wider Quran keeps the same line. 4:58 commands rendering trusts to their people and judging with justice; 6:152 commands just speech even if it concerns a relative, inside a verse listing the core commandments; 16:90 opens its summary of the religion with justice itself. Justice in this Book is not one value among others; it is the ground on which the rest of them stand, owed before He who is closer to both parties than we are.",
            "bn": "বৃহত্তর কুরআন একই রেখা ধরে রাখে। 4:58 আদেশ করে আমানত তার হকদারদের ফিরিয়ে দিতে ও ইনসাফের সঙ্গে বিচার করতে; 6:152 আদেশ করে ন্যায্য কথা বলতে, তা আত্মীয়ের ব্যাপারে হলেও — মৌলিক বিধানগুলোর তালিকাওয়ালা এক আয়াতের ভেতরে; আর 16:90 দ্বীনের সারসংক্ষেপ শুরুই করে ইনসাফ দিয়ে। এই কিতাবে ইনসাফ অন্য অনেক মূল্যবোধের একটি নয়; এ সেই জমি, যার ওপর বাকিগুলো দাঁড়ায় — আর তা প্রাপ্য তাঁর সামনে, যিনি উভয় পক্ষেরই আমাদের চেয়ে নিকটবর্তী।"
          }
        ]
      },
      {
        "h": {
          "en": "The Daily Witness Stand",
          "bn": "প্রতিদিনের সাক্ষ্যের কাঠগড়া"
        },
        "p": [
          {
            "en": "Most people never testify in a courtroom, but everyone testifies daily. References given for a colleague, testimony in a family dispute, the account of a quarrel told to friends, a review written, an incident reported to a superior — each is a shahadah, and each meets this verse. The household cases are the hardest, exactly as the verse predicted by naming parents and kin: the truth that costs our own people something.",
            "bn": "অধিকাংশ মানুষ কখনো আদালতের কাঠগড়ায় দাঁড়ায় না, কিন্তু প্রত্যেকেই প্রতিদিন সাক্ষ্য দেয়। সহকর্মীর জন্য দেওয়া সুপারিশ, পারিবারিক বিরোধে বক্তব্য, বন্ধুদের কাছে বলা ঝগড়ার বিবরণ, লেখা একটি রিভিউ, ঊর্ধ্বতনের কাছে জানানো কোনো ঘটনা — প্রতিটিই এক-একটি শাহাদাহ, আর প্রতিটিই এই আয়াতের মুখোমুখি হয়। ঘরের মামলাগুলোই সবচেয়ে কঠিন — ঠিক যেমনটা আয়াত মাতা-পিতা ও আত্মীয়ের নাম নিয়ে আগেই বলে রেখেছে: সেই সত্য, যার দাম দিতে হয় আমাদের নিজেদের লোকদের।"
          },
          {
            "en": "The discipline it trains is admitting the truth against one's own side at the moment it costs. Saying: my son was at fault; I was wrong in that deal; our family owes this. The verse gives the reason such honesty is safe: Allah is closer to the one you fear for than you are, and His awareness covers the twist and the silence alike. Standing firm in justice is, finally, a statement about who is actually watching.",
            "bn": "এটি যে অনুশীলন শেখায় তা হলো, যে মুহূর্তে মূল্য দিতে হয় ঠিক সেই মুহূর্তে নিজের পক্ষের বিরুদ্ধে সত্য স্বীকার করা। বলা: আমার ছেলেরই দোষ ছিল; ওই চুক্তিতে আমি ভুল করেছি; আমাদের পরিবারের এই দেনা আছে। এমন সততা কেন নিরাপদ, আয়াত তার কারণ দেয়: যার জন্য আপনি ভয় পাচ্ছেন, আল্লাহ তার আপনার চেয়েও নিকটবর্তী, আর তাঁর অবগতি বাঁকানো ও নীরবতা দুটিকেই ঢেকে রাখে। ইনসাফে অটল দাঁড়ানো শেষ পর্যন্ত এই ঘোষণারই নাম — আসলে কে দেখছেন।"
          }
        ]
      }
    ]
  },
  "4:142-143": {
    "sections": [
      {
        "h": {
          "en": "The Frame Around the Portrait",
          "bn": "প্রতিকৃতির ফ্রেম"
        },
        "p": [
          {
            "en": "Surah an-Nisa devotes a sustained passage, from 4:138 onward, to the hypocrites of Madinah: their glad tidings of painful punishment, their taking disbelievers as allies, their waiting to see which side wins. The portrait in 4:142-143 is its centre, and the passage reaches in 4:145 the sentence that the hypocrites will be in the lowest depth of the Fire — before 4:146 opens a door of exception for those who repent.",
            "bn": "সূরা আন-নিসা 4:138 আয়াত থেকে শুরু করে মদীনার মুনাফিকদের জন্য একটি দীর্ঘ অংশ বরাদ্দ করেছে: তাদের জন্য যন্ত্রণাদায়ক শাস্তির 'সুসংবাদ', কাফিরদের বন্ধু বানানো, কোন পক্ষ জেতে তা দেখার অপেক্ষা। 4:142-143 আয়াতের প্রতিকৃতিটি এর কেন্দ্র, আর অংশটি 4:145 আয়াতে পৌঁছে এই রায়ে — মুনাফিকরা থাকবে জাহান্নামের সর্বনিম্ন স্তরে; তারপর 4:146 আয়াত তওবাকারীদের জন্য ব্যতিক্রমের একটি দরজা খুলে দেয়।"
          },
          {
            "en": "The severity has a logic the commentators spell out: an open enemy can be met in the open, but the hypocrite wears the community's own face. Prayer, the most visible act of Islam, is where the portrait in these verses is painted — because it is exactly the place where appearance and reality can drift furthest apart while looking identical from the outside.",
            "bn": "এই কঠোরতার একটি যুক্তি আছে, যা মুফাসসিরগণ খুলে বলেন: প্রকাশ্য শত্রুর মোকাবিলা প্রকাশ্যে করা যায়, কিন্তু মুনাফিক পরে থাকে খোদ সমাজেরই মুখোশ। ইসলামের সবচেয়ে দৃশ্যমান আমল নামাজ — আর এই আয়াতগুলোর প্রতিকৃতি আঁকা হয়েছে সেখানেই। কারণ ঠিক এই জায়গাতেই বাহ্যিক রূপ আর ভেতরের বাস্তবতা সবচেয়ে দূরে সরে যেতে পারে, অথচ বাইরে থেকে দেখতে হুবহু একই রকম থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Deceives Whom",
          "bn": "কে কাকে প্রতারণা করে"
        },
        "p": [
          {
            "en": "The verses open: the hypocrites seek to deceive Allah, wa huwa khadi'uhum — and He is the one who outwits them. The first verb is a form that suggests attempted, contested deception; the reply uses an active participle, and the mufassirun are careful with it: Allah is not called deceptive as an attribute; rather He requites their deception in kind, leaving them their outward gains while the reality they traded away drains off unnoticed.",
            "bn": "আয়াতগুলোর শুরু: মুনাফিকরা আল্লাহকে প্রতারিত করতে চায়, ওয়া হুয়া খাদিউহুম — আর তিনিই তাদের প্রতারণাকে হার মানান। প্রথম ক্রিয়াপদটি এমন এক গঠনে, যা চেষ্টা করা, প্রতিযোগিতামূলক প্রতারণা বোঝায়; জবাবে এসেছে কর্তৃবাচক পদ, আর মুফাসসিরগণ এখানে সতর্ক: প্রতারণা আল্লাহর গুণ হিসেবে বলা হয়নি; বরং তিনি তাদের প্রতারণার প্রতিদান দেন একই ধাঁচে — তাদের বাহ্যিক প্রাপ্তিগুলো তাদের হাতে রেখে, যখন যে বাস্তব সম্পদ তারা বেচে দিয়েছে তা টেরও না পাওয়া অবস্থায় নিঃশেষ হতে থাকে।"
          },
          {
            "en": "It is the same diagnosis the Quran gives in 2:9, where those who would deceive Allah and the believers deceive none but themselves without perceiving it. Deception aimed upward has nowhere to land — He knows the secret and what is yet more hidden — so it falls back on the only party who can actually be fooled: the deceiver himself, who gradually comes to believe his own performance.",
            "bn": "এ একই রোগনির্ণয় কুরআন দিয়েছে 2:9 আয়াতে — যারা আল্লাহ ও মুমিনদের প্রতারিত করতে চায়, তারা নিজেদের ছাড়া কাউকে প্রতারিত করে না, অথচ টেরও পায় না। উপরের দিকে ছোড়া প্রতারণার নামার কোনো জায়গা নেই — তিনি জানেন গোপন কথা এবং যা তারও চেয়ে লুকানো — তাই তা ফিরে পড়ে একমাত্র সেই পক্ষের ওপর, যাকে সত্যিই বোকা বানানো যায়: প্রতারক নিজে, যে ধীরে ধীরে নিজের অভিনয়কেই বিশ্বাস করতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Body Praying, a Heart Absent",
          "bn": "দেহ নামাজে, মন অনুপস্থিত"
        },
        "p": [
          {
            "en": "Three marks follow. They rise for prayer kusala — sluggish, dragging, the plural of kaslan; they perform to be seen by people, yura'una; and they do not remember Allah except a little. Each mark measures the same gap. The limbs comply because people are watching, and nothing inside corresponds. Prayer, which was given as remembrance, is emptied of the one thing it exists to carry and kept only as a visible shell.",
            "bn": "এরপর তিনটি চিহ্ন। তারা নামাজে দাঁড়ায় কুসালা হয়ে — শিথিল, টেনে-হিঁচড়ে; কাসলানের বহুবচন এটি। তারা করে লোক দেখানোর জন্য — ইউরাঊন; আর আল্লাহকে স্মরণ করে সামান্যই। প্রতিটি চিহ্ন একই ফাঁকটুকু মাপে। অঙ্গ-প্রত্যঙ্গ মেনে চলে কারণ মানুষ দেখছে, অথচ ভেতরে কিছুই সাড়া দেয় না। যে নামাজ দেওয়াই হয়েছিল স্মরণ হিসেবে, তা তার একমাত্র বহনযোগ্য জিনিসটি থেকেই খালি হয়ে যায় — টিকে থাকে কেবল এক দৃশ্যমান খোলস।"
          },
          {
            "en": "Muslim narrates from Anas (RA) a description that matches the verse point by point: such a man sits watching the sun until it hangs low, then stands and pecks out four rak'ahs in which he remembers Allah only a little — the Prophet ﷺ called that the prayer of the hypocrite. And al-Bukhari relates that no prayers weigh heavier on the hypocrites than Isha and Fajr, the two prayed in darkness.",
            "bn": "ইমাম মুসলিম আনাস (রাঃ) থেকে এমন একটি বর্ণনা এনেছেন, যা আয়াতের সঙ্গে বিন্দুতে বিন্দুতে মেলে: লোকটি বসে সূর্যের দিকে তাকিয়ে থাকে, সূর্য নিচে নেমে এলে উঠে ঠোকর মারার মতো চারটি রাকাত সেরে নেয়, যাতে আল্লাহকে স্মরণ করে সামান্যই — নবী ﷺ একেই বলেছেন মুনাফিকের নামাজ। আর ইমাম বুখারী বর্ণনা করেন, মুনাফিকদের কাছে ইশা ও ফজরের চেয়ে ভারী কোনো নামাজ নেই — অন্ধকারে পড়া দুটি নামাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Swung Between Two Camps",
          "bn": "দুই শিবিরের মাঝে দোদুল্যমান"
        },
        "p": [
          {
            "en": "Mudhabdhabina bayna dhalik is a passive participle: not people who waver as a decision, but people who are swung, tossed back and forth like a thing suspended — neither to these nor to those. The grammar is unsparing. Having refused to anchor themselves, they no longer steer at all; circumstance, advantage and fear now move them. The verse ends: whomever Allah leaves astray, you will never find for him a way.",
            "bn": "মুযাবযাবীনা বাইনা যালিক একটি কর্মবাচক পদ: যারা নিজের সিদ্ধান্তে দোল খায় তারা নয়, বরং যাদের দোলানো হয় — ঝুলন্ত কোনো জিনিসের মতো এদিক-ওদিক ছোড়া হয় — না এদের দিকে, না ওদের দিকে। ব্যাকরণটি নির্মম। নোঙর ফেলতে অস্বীকার করে তারা আর নিজেরা চালায়ই না; এখন তাদের চালায় পরিস্থিতি, সুবিধা আর ভয়। আয়াত শেষ হয়: আল্লাহ যাকে পথভ্রষ্ট ছেড়ে দেন, তুমি তার জন্য কখনো কোনো পথ পাবে না।"
          },
          {
            "en": "Muslim relates from Ibn Umar (RA) that the Prophet ﷺ compared the hypocrite to a sheep hesitating between two flocks, running now to one and now to the other, not knowing which to follow. The image holds the warning in miniature: indecision is not a safe middle ground. Belonging fully to neither side means being protected by neither, and the passage has already said in 4:145 where that road, unrepented, comes to rest.",
            "bn": "ইমাম মুসলিম ইবনে উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ মুনাফিককে তুলনা করেছেন দুই পালের মাঝে দ্বিধায় পড়া ভেড়ার সঙ্গে — একবার এই পালের দিকে ছোটে, একবার ওই পালের দিকে, কোনটির অনুসরণ করবে জানে না। ছবিটি সতর্কবার্তাটিকে ক্ষুদ্রাকারে ধরে রাখে: সিদ্ধান্তহীনতা কোনো নিরাপদ মধ্যভূমি নয়। কোনো পক্ষেরই পুরোপুরি না হওয়া মানে কোনো পক্ষের সুরক্ষাতেও না থাকা; আর তওবা ছাড়া সেই রাস্তা কোথায় গিয়ে থামে, অংশটি তা আগেই বলে দিয়েছে 4:145 আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Door Out",
          "bn": "বেরোনোর দরজা"
        },
        "p": [
          {
            "en": "The exception in 4:146 lists four steps: those who repent, who set right what they ruined, who hold fast to Allah, and who make their religion sincerely His — then it declares that these are with the believers, and that Allah will give the believers a great reward. The last step is the precise antidote: ikhlas, sincerity, is riya reversed. What was once done to be seen by people is done again, this time for the One who was watching all along.",
            "bn": "4:146 আয়াতের ব্যতিক্রমটি চারটি ধাপ গুনে দেয়: যারা তওবা করে, যারা নিজেদের নষ্ট করা জিনিস শুধরে নেয়, যারা আল্লাহকে দৃঢ়ভাবে আঁকড়ে ধরে, আর যারা নিজেদের দ্বীনকে খাঁটিভাবে তাঁরই জন্য করে — তারপর ঘোষণা করে, এরা মুমিনদের সঙ্গেই, আর আল্লাহ মুমিনদের দেবেন মহাপুরস্কার। শেষ ধাপটিই যথাযথ প্রতিষেধক: ইখলাস হলো রিয়ার উল্টো পিঠ। যা একদিন করা হতো লোক দেখানোর জন্য, তা-ই আবার করা হয় — এবার তাঁর জন্য, যিনি গোড়া থেকেই দেখছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It as a Mirror",
          "bn": "আয়না হিসেবে পড়া"
        },
        "p": [
          {
            "en": "The salaf did not read this portrait as someone else's biography. Al-Bukhari cites in his Sahih the remark of Ibn Abi Mulaykah that he met thirty Companions of the Prophet ﷺ, every one of them fearing hypocrisy for himself. The confident diagnosis of others is itself a symptom; the fearful self-audit is the health. The verses hand us the checklist: how I rise for prayer when tired, whom I imagine watching, how much remembrance my day actually contains.",
            "bn": "সালাফগণ এই প্রতিকৃতিকে অন্য কারও জীবনী হিসেবে পড়েননি। ইমাম বুখারী তাঁর সহীহ গ্রন্থে ইবনে আবী মুলাইকার উক্তি এনেছেন — তিনি নবী ﷺ-এর ত্রিশজন সাহাবির সাক্ষাৎ পেয়েছেন, আর তাঁদের প্রত্যেকে নিজের ব্যাপারে নিফাকের ভয় করতেন। অন্যদের ব্যাপারে আত্মবিশ্বাসী রোগনির্ণয় নিজেই একটি উপসর্গ; ভয়মিশ্রিত আত্মপরীক্ষাই সুস্থতা। আয়াতগুলো আমাদের হাতে তালিকাটি তুলে দেয়: ক্লান্ত অবস্থায় আমি নামাজে কীভাবে উঠি, কার দেখার কথা কল্পনা করি, আমার দিনে আসলে কতটুকু স্মরণ আছে।"
          },
          {
            "en": "The measurable mark is the last one. Remembering Allah only a little is the hinge on which the others turn, and it can be counted honestly in any evening review. The repair is equally concrete: the two dark-hour prayers guarded on time, dhikr that no one sees, one act of worship kept deliberately secret. Sincerity grows in the dark like the hypocrisy it displaces — the difference is only who the act is for.",
            "bn": "মাপা যায় এমন চিহ্নটি হলো শেষেরটি। আল্লাহকে সামান্যই স্মরণ করা — এই কব্জাতেই বাকিগুলো ঘোরে, আর যেকোনো সন্ধ্যার আত্মসমীক্ষায় তা সততার সঙ্গে গুনে দেখা যায়। মেরামতও সমান বাস্তব: অন্ধকার প্রহরের দুটি নামাজ সময়মতো রক্ষা করা, এমন যিকর যা কেউ দেখে না, ইচ্ছা করে গোপন রাখা একটি ইবাদত। আন্তরিকতা অন্ধকারেই বাড়ে — ঠিক যে মুনাফিকিকে সে সরিয়ে দেয় তারই মতো; পার্থক্য কেবল এটুকু — কাজটি কার জন্য।"
          }
        ]
      }
    ]
  }
});
