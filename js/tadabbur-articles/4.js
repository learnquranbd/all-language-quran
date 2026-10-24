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
            "bn": "সূরা নিসা মাদানী। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেছেন যে সূরাটি মদিনায় নাজিল হয়েছে। নিসা মানে নারীরা। সূরার বড় অংশ জুড়ে আছে ঘরের সবচেয়ে কম ক্ষমতার মানুষদের জন্য বিধান: এতিম আর তাদের সম্পদ, স্ত্রী আর তাদের মোহর, কন্যা ও বিধবা আর মিরাসে তাদের অংশ। অথচ সূরার প্রথম ডাক অভিভাবক, স্বামী বা ওয়ারিশদের প্রতি নয়। ডাক সবার প্রতি: হে মানুষ। ঘর তোলার আগে সূরা ভিতটা দেখিয়ে দেয়।"
          },
          {
            "en": "The verse after it, 4:2, turns straight to practice: give the orphans their property, and do not swap your defective goods for their good ones. 4:3 speaks of justice to orphan girls and to wives, 4:4 of the dower given graciously, and 4:7 of a share for men and a share for women in what parents and relatives leave. Each of these is a claim one person has on another. 4:1 tells the reader why such claims exist at all: they share an origin, they share a Lord, and He sees.",
            "bn": "ঠিক পরের আয়াত, ৪:২, সোজা চলে যায় কাজের কথায়: এতিমদের সম্পদ তাদের দিয়ে দাও, নিজের খারাপ জিনিস দিয়ে তাদের ভালো জিনিস বদলে নিয়ো না। ৪:৩ আয়াত বলে এতিম মেয়েদের প্রতি আর স্ত্রীদের প্রতি ইনসাফের কথা, ৪:৪ আয়াত খুশিমনে মোহর দেওয়ার কথা, আর ৪:৭ আয়াত বলে বাবা-মা ও আত্মীয়দের রেখে যাওয়া সম্পদে পুরুষের অংশ আর নারীর অংশের কথা। এর প্রতিটিই একজনের ওপর আরেকজনের হক। এমন হক আদৌ কেন আছে, ৪:১ আয়াত তার উত্তর দেয়। মানুষের উৎস এক, রব এক, আর তিনি সব দেখেন।"
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
            "bn": "নাফসুন ওয়াহিদা মানে এক প্রাণ, এক সত্তা। তা থেকে এসেছে তার যাওজ। শব্দটা জোড়ার একজনকে বোঝায়, স্বামী আর স্ত্রী দুজনের জন্যই চলে। তারপর বাছ্ছা: তিনি দুজন থেকে ছড়িয়ে দিয়েছেন বহু পুরুষ আর নারী। ক্রিয়াটায় চারদিকে ছড়িয়ে-ছিটিয়ে দেওয়ার ছবি আছে। নানা জাতি আর নানা রঙের গোটা মানবপরিবারকে আয়াত ফিরিয়ে নিয়ে যায় একটিমাত্র জোড়ার কাছে। ফলে কেউ আলাদা উৎসের দাবি করতে পারে না। হকের কোনো কথা বলার আগেই আয়াত এটা বলে নেয়।"
          },
          {
            "en": "The command to fear appears twice. First: fear your Lord, Rabb, the one who created and nurtures, which suits a sentence about creation. Then: fear Allah, alladhi tasa'aluna bihi, by whom you ask one another. Tasa'alun, from the root s-'-l, is mutual asking; people press their claims on each other in His name. Al-arham is the plural of rahim, the womb, and by extension the ties of kinship. It shares its root, r-h-m, with rahmah, mercy. The second call to taqwa is placed where people meet one another.",
            "bn": "ভয় করার আদেশ এসেছে দুবার। প্রথমবার: তোমাদের রবকে ভয় করো। রব মানে যিনি সৃষ্টি করেন আর লালন করেন, সৃষ্টির কথা বলা বাক্যে এই নামটাই মানায়। দ্বিতীয়বার: আল্লাহকে ভয় করো, আল্লাযী তাসাআলূনা বিহী, যাঁর নামে তোমরা একে অন্যের কাছে চাও। তাসাআলূন এসেছে সীন-হামযা-লাম মূল থেকে, অর্থ পরস্পরের কাছে চাওয়া। মানুষ তাঁর দোহাই দিয়ে একে অন্যের কাছে পাওনা দাবি করে। আল-আরহাম হলো রাহিমের বহুবচন। রাহিম মানে গর্ভ, আর তা থেকে আত্মীয়তার বন্ধন। এর মূল রা-হা-মীম, রহমতের মূলও তা-ই। তাকওয়ার দ্বিতীয় ডাকটা রাখা হয়েছে ঠিক সেখানে, যেখানে মানুষ মানুষের মুখোমুখি হয়।"
          },
          {
            "en": "The Quran reciters differ on one vowel here. The widespread reading, followed by the translations in this app, is wal-arhama: fear Allah, and fear to cut the wombs. The reading of Hamzah is wal-arhami: Allah, through whom and through the wombs you ask one another, echoing the Arabs' habit of pleading by kinship. Al-Qurtubi records both. Either way the verse sets the bond of kinship beside the name of Allah, and closes by reminding its hearers that Allah is watching over them.",
            "bn": "এখানে একটা হরকত নিয়ে কারিদের পাঠে ভিন্নতা আছে। বহুল প্রচলিত পাঠ ওয়াল-আরহামা, এই অ্যাপের অনুবাদও এটাই অনুসরণ করে: আল্লাহকে ভয় করো, আর আত্মীয়তার বন্ধন ছিন্ন করাকে ভয় করো। ইমাম হামযার পাঠ ওয়াল-আরহামি: সেই আল্লাহ, যাঁর নামে আর আত্মীয়তার দোহাই দিয়ে তোমরা একে অন্যের কাছে চাও। আরবরা আত্মীয়তার দোহাই দিয়ে অনুরোধ করত, এ পাঠে তারই প্রতিধ্বনি। কুরতুবী দুটো পাঠই উল্লেখ করেছেন। যে পাঠই ধরা হোক, আয়াত আত্মীয়তার বন্ধনকে আল্লাহর নামের পাশে রাখে, আর শেষে মনে করিয়ে দেয় যে আল্লাহ তাদের ওপর নজর রাখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Read It",
          "bn": "মুফাসসিররা যেভাবে বুঝেছেন"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both take the one soul to be Adam (AS). Ibn Kathir understands its mate to be Hawwa, created from him, and cites the hadith that woman was created from a rib. In al-Bukhari's wording from Abu Hurayrah (RA), that hadith opens with a command to treat women well. Ibn Kathir then draws the lesson the verse is heading toward: Allah mentions that He created people from one father and one mother so that they would feel compassion for one another and be kind to the weaker among them.",
            "bn": "তাবারী ও ইবনে কাসীর দুজনেই এক প্রাণ বলতে আদম (আঃ)-কে বুঝেছেন। ইবনে কাসীরের মতে তাঁর জোড়া হলেন হাওয়া, যাঁকে তাঁর থেকে সৃষ্টি করা হয়েছে। এর পক্ষে তিনি সেই হাদিস আনেন, যাতে বলা হয়েছে নারীকে পাঁজরের হাড় থেকে সৃষ্টি করা হয়েছে। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে হাদিসটি যে শব্দে এনেছেন, তার শুরুতেই আছে নারীদের সঙ্গে ভালো ব্যবহারের আদেশ। এরপর ইবনে কাসীর সেই শিক্ষাটি টানেন, যেদিকে আয়াত এগোচ্ছে। আল্লাহ জানিয়ে দিলেন, তিনি মানুষকে এক বাবা আর এক মা থেকে সৃষ্টি করেছেন, যাতে তারা একে অন্যের প্রতি মমতা বোধ করে আর দুর্বলদের সঙ্গে সদয় হয়।"
          },
          {
            "en": "On by whom you ask one another, Ibn Kathir reports from Ibrahim an-Nakha'i, Mujahid and al-Hasan that it refers to people saying, I ask you by Allah, and by the tie of kinship. Ad-Dahhak read it more broadly as fearing Allah in whose name you make transactions and contracts. On the wombs, he reports from Ibn Abbas (RA), Ikrimah, Mujahid, al-Hasan and others that it means do not cut the ties of kinship, but keep and honour them. The two explanations do not compete; one names the habit, the other the duty.",
            "bn": "যাঁর নামে তোমরা একে অন্যের কাছে চাও, এ অংশ সম্পর্কে ইবনে কাসীর ইবরাহীম নাখায়ী, মুজাহিদ ও হাসান বসরী থেকে বর্ণনা করেন: মানুষ বলত, আল্লাহর দোহাই আর আত্মীয়তার দোহাই দিয়ে তোমার কাছে চাইছি। দাহহাক একে আরও বড় করে পড়েছেন: যে আল্লাহর নামে তোমরা লেনদেন আর চুক্তি করো, তাঁকে ভয় করো। গর্ভ প্রসঙ্গে ইবনে কাসীর ইবনে আব্বাস (রাঃ), ইকরিমা, মুজাহিদ, হাসান প্রমুখ থেকে বর্ণনা করেন, এর মানে আত্মীয়তার বন্ধন ছিন্ন কোরো না, বরং তা বজায় রাখো, তার মর্যাদা দাও। দুই ব্যাখ্যায় বিরোধ নেই। একটি অভ্যাসটার নাম বলে, অন্যটি দায়িত্বের।"
          },
          {
            "en": "Al-Qurtubi states the legal weight plainly: the community of faith agrees that keeping the ties of kinship is obligatory and that cutting them is forbidden. He does not leave the verse as a pleasant sentiment about family. On the closing words, Ibn Kathir says Allah sees every deed and every circumstance, and he connects this to the hadith of Jibril: worship Allah as though you see Him, for though you do not see Him, He sees you. The watching at the end governs everything before it.",
            "bn": "কুরতুবী এর বিধানগত ওজন সোজাসুজি বলেছেন: উম্মাহ একমত যে আত্মীয়তার বন্ধন রক্ষা করা ওয়াজিব আর তা ছিন্ন করা হারাম। আয়াতটিকে তিনি পরিবার নিয়ে নিছক মধুর এক অনুভূতি বলে ছেড়ে দেননি। শেষ কথাগুলো প্রসঙ্গে ইবনে কাসীর বলেন, আল্লাহ প্রতিটি আমল আর প্রতিটি অবস্থা দেখেন। এর সঙ্গে তিনি জিবরীলের হাদিসটি জুড়ে দেন: আল্লাহর ইবাদত করো যেন তুমি তাঁকে দেখছ, আর তুমি তাঁকে না দেখলেও তিনি তোমাকে দেখছেন। শেষের এই কথা, তিনি দেখছেন, আগের সব কথার ওপর ছায়া হয়ে থাকে।"
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
            "bn": "ইমাম মুসলিম জারীর ইবনে আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেছেন, মুদার গোত্রের একদল লোক ডোরাকাটা পশমি কাপড় পরে নবী ﷺ-এর কাছে এল। তাদের দারিদ্র্য চোখে পড়ার মতো। তাদের অভাব দেখে নবী ﷺ-এর চেহারা বদলে গেল। তিনি নামাজ পড়ালেন, তারপর দাঁড়িয়ে লোকদের উদ্দেশে কথা বললেন। তিলাওয়াত করলেন এই আয়াত, হে মানুষ, তোমাদের রবকে ভয় করো যিনি তোমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, শেষ পর্যন্ত। তারপর ৫৯:১৮ আয়াত: প্রত্যেকে দেখুক আগামীকালের জন্য সে কী পাঠিয়েছে। এরপর তিনি দান করতে উৎসাহ দিলেন, দিনার থেকে, দিরহাম থেকে, এক মাপ গম থেকে, এক মাপ খেজুর থেকে।"
          },
          {
            "en": "The choice of verse is the lesson. Strangers from another tribe stood in need, and the Prophet ﷺ did not open with their tribe or their merit. He opened with the one soul. The poor of Mudar were family, and the verse made that visible before a single coin changed hands. Al-Bukhari also records from Abu Hurayrah (RA) that when Allah finished creation, the rahim stood and sought refuge with Him from being cut, and He promised to keep connection with whoever keeps it and to cut off whoever cuts it. Abu Hurayrah then recited 47:22.",
            "bn": "আয়াত বেছে নেওয়াটাই শিক্ষা। অন্য গোত্রের অচেনা মানুষ অভাবে দাঁড়িয়ে, আর নবী ﷺ তাদের গোত্র বা যোগ্যতার কথা দিয়ে শুরু করেননি। শুরু করেছেন এক প্রাণের কথা দিয়ে। মুদারের গরিবরা পরিবারেরই লোক, একটি মুদ্রা হাতবদলের আগেই আয়াত তা চোখের সামনে এনে দিল। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে আরও বর্ণনা করেছেন, আল্লাহ সৃষ্টি শেষ করলে রাহিম, অর্থাৎ আত্মীয়তার বন্ধন, দাঁড়িয়ে ছিন্ন হওয়া থেকে তাঁর কাছে আশ্রয় চাইল। আল্লাহ কথা দিলেন, যে তাকে জুড়ে রাখবে তিনি তার সঙ্গে সম্পর্ক রাখবেন, আর যে তাকে ছিন্ন করবে তিনি তাকে ছিন্ন করবেন। এরপর আবু হুরায়রা (রাঃ) ৪৭:২২ আয়াত তিলাওয়াত করলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Quran Says It Again",
          "bn": "কুরআনে আর যেখানে এই কথা"
        },
        "p": [
          {
            "en": "7:189 and 39:6 repeat the opening almost word for word: He created you from one soul and made from it its mate. 7:189 adds the purpose of the pairing, that he might dwell in security with her, and 30:21 widens it into affection and mercy placed between spouses. 49:13 addresses mankind again: We created you from male and female and made you peoples and tribes that you may know one another, and the most noble of you is the most righteous. Shared origin rules out boasting, and it does not erase difference.",
            "bn": "৭:১৮৯ আর ৩৯:৬ আয়াত শুরুর কথাটা প্রায় হুবহু আবার বলে: তিনি তোমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, আর তা থেকে তার জোড়া। ৭:১৮৯ আয়াত জোড়ার উদ্দেশ্যও জানায়, যাতে সে তার কাছে শান্তি পায়। ৩০:২১ আয়াত তা আরও বড় করে: স্বামী-স্ত্রীর মাঝে ভালোবাসা আর দয়া রেখে দেওয়া হয়েছে। ৪৯:১৩ আয়াত আবার সব মানুষকে ডাকে: তোমাদের সৃষ্টি করেছি এক পুরুষ ও এক নারী থেকে, বানিয়েছি নানা জাতি ও গোত্র, যাতে তোমরা একে অন্যকে চেনো। আল্লাহর কাছে সবচেয়ে সম্মানিত সে-ই, যে সবচেয়ে বেশি মুত্তাকি। এক উৎস অহংকারের পথ বন্ধ করে, কিন্তু পার্থক্য মুছে দেয় না।"
          },
          {
            "en": "On the wombs, 13:21 praises those who join what Allah has ordered to be joined, and fear their Lord and the evil of the account. 47:22 asks, with a question that cuts, whether people who turned away would spread corruption on earth and sever their ties of relationship. And 17:26 turns the tie into something that can be paid: give the relative his right, and the poor and the traveller. Kinship in the Quran is a right owed, not a mood.",
            "bn": "আত্মীয়তার প্রসঙ্গে ১৩:২১ আয়াত প্রশংসা করে তাদের, যারা আল্লাহ যা জুড়ে রাখতে বলেছেন তা জুড়ে রাখে, রবকে ভয় করে আর কঠিন হিসাবের ভয় রাখে। ৪৭:২২ আয়াত বিঁধে যাওয়ার মতো প্রশ্ন করে: মুখ ফিরিয়ে নিলে তোমরা কি পৃথিবীতে বিপর্যয় ছড়াবে আর আত্মীয়তার বন্ধন ছিন্ন করবে? আর ১৭:২৬ আয়াত সম্পর্কটাকে এমন কিছু বানায়, যা আদায় করা যায়: আত্মীয়কে তার হক দাও, মিসকিন আর মুসাফিরকেও। কুরআনে আত্মীয়তা মনের কোনো অবস্থা নয়, আদায় করার মতো হক।"
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
            "bn": "খুতবাতুল হাজাহর সুবাদে আয়াতটি সবার চেনা। আবু দাউদ ও তিরমিযী ইবনে মাসউদ (রাঃ) থেকে এই খুতবা বর্ণনা করেছেন, আর অনেক বিয়ের আকদে এটি পড়া হয়। মুহূর্তটার সঙ্গে আয়াত খুব মানায়। বিয়ে দুটি পরিবারকে জোড়ে, শুরু করে নতুন আত্মীয়তা, যা একদিন নিজের হক নিয়ে দাঁড়াবে। বিয়েতে আয়াতটি শুনে একজন মুমিন তা দায়িত্ব হিসেবে ঘরে নিয়ে যেতে পারেন। এই সংসার এখন হকের এক জালের অংশ। আর যে আল্লাহর নামে আকদ হলো, তিনি দেখছেন সেই হক কীভাবে রক্ষা হয়।"
          },
          {
            "en": "In an ordinary week the verse asks for small, specific acts. Call the aunt no one calls. Visit the cousin who has fallen on hard times before he has to ask. When a family dispute over land or money starts, remember that the name of Allah was invoked on both sides and that both sides are one soul's children. And when you meet a worker from another country, another colour or another class, let the first thought be the one the Prophet ﷺ gave the poor of Mudar.",
            "bn": "সাধারণ একটা সপ্তাহে আয়াত ছোট আর নির্দিষ্ট কিছু কাজ চায়। সেই খালা বা ফুফুকে ফোন করুন, যাঁকে কেউ ফোন করে না। যে চাচাতো ভাই কঠিন সময়ে পড়েছে, সে মুখ ফুটে চাওয়ার আগেই তার কাছে যান। জমি বা টাকা নিয়ে পারিবারিক বিবাদ শুরু হলে মনে রাখুন, দুই পক্ষই আল্লাহর নাম নিয়েছে, আর দুই পক্ষই এক প্রাণের সন্তান। আর অন্য দেশের, অন্য রঙের বা অন্য শ্রেণির কোনো শ্রমিকের সঙ্গে দেখা হলে প্রথম ভাবনাটা যেন হয় সেটাই, যা নবী ﷺ মুদারের গরিবদের সামনে তুলে ধরেছিলেন।"
          },
          {
            "en": "Keeping ties does not require pretending that every relative is easy. The duty holds even when warmth does not come naturally, and it can be done in measured ways: a greeting on the occasions that matter, help in real need, prayer for them in absence, and a refusal to speak ill of them. Cutting off is the thing the verse warns against. A strained but maintained tie is still a tie kept, and the verse ends by reminding that Allah sees the effort.",
            "bn": "আত্মীয়তা রক্ষা করতে গিয়ে ভান করতে হয় না যে প্রত্যেক আত্মীয়ই সহজ মানুষ। উষ্ণতা আপনা থেকে না এলেও দায়িত্ব থেকে যায়। আর তা পালন করা যায় মেপে মেপে: গুরুত্বপূর্ণ উপলক্ষে সালাম আর খোঁজ, সত্যিকার প্রয়োজনে সাহায্য, অনুপস্থিতিতে তাদের জন্য দোয়া, আর তাদের নিয়ে মন্দ কথা না বলা। আয়াত সতর্ক করে ছিন্ন করা নিয়ে। টানাপোড়েন থাকলেও যে বন্ধন টিকিয়ে রাখা হয়েছে, তা রক্ষিত বন্ধনই। আর আয়াতের শেষ কথা মনে করিয়ে দেয়, এই চেষ্টাটুকু আল্লাহ দেখছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for the Family",
          "bn": "পরিবারের জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is a command rather than a supplication, so what follows is a short du'a built from its own vocabulary, offered as such and not as a transmitted text. O Allah, our Lord who created us from one soul, make us fear You in how we treat one another. Let us never use Your name to take what is not ours. Help us keep the ties You commanded us to keep, soften the hearts of the relatives we have drifted from, and keep us mindful that You are watching over us.",
            "bn": "আয়াতটি আদেশ, দোয়া নয়। তাই এখানে আয়াতের নিজের শব্দ দিয়ে সাজানো ছোট একটি দোয়া দেওয়া হলো। এটা কোনো বর্ণিত দোয়া নয়। হে আল্লাহ, আমাদের রব, যিনি আমাদের এক প্রাণ থেকে সৃষ্টি করেছেন, একে অন্যের সঙ্গে আচরণে আমাদের অন্তরে আপনার ভয় দিন। আপনার নাম নিয়ে যা আমাদের নয় তা যেন কখনো না নিই। যে বন্ধন রক্ষার আদেশ দিয়েছেন, তা রক্ষায় আমাদের সাহায্য করুন। যে আত্মীয়দের থেকে দূরে সরে গেছি, তাদের অন্তর নরম করে দিন। আর আমাদের যেন সবসময় মনে থাকে, আপনি আমাদের ওপর নজর রাখছেন।"
          },
          {
            "en": "The Prophet ﷺ paired this verse with 59:18 in the Mudar sermon, and a reader can pair them in prayer too: O Allah, let me look to what I have sent ahead for tomorrow, and let some of it be the relatives I kept and the strangers I treated as family. Said after a visit, a phone call or a gift to a relative, a supplication like this turns an ordinary errand into worship.",
            "bn": "মুদারের খুতবায় নবী ﷺ এই আয়াতের সঙ্গে ৫৯:১৮ আয়াত জুড়ে দিয়েছিলেন। পাঠকও দোয়ায় দুটোকে একসঙ্গে রাখতে পারেন: হে আল্লাহ, আগামীকালের জন্য আমি কী পাঠিয়েছি তা যেন দেখি। আর তার মধ্যে যেন থাকে সেই আত্মীয়রা, যাদের সঙ্গে সম্পর্ক রেখেছি, আর সেই অচেনা মানুষেরা, যাদের পরিবারের লোক মনে করে আচরণ করেছি। কোনো আত্মীয়ের বাড়ি ঘুরে এসে, একটা ফোনের পর বা একটা উপহার দিয়ে এমন দোয়া করলে সাধারণ একটা কাজও ইবাদত হয়ে ওঠে।"
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
            "en": "When I look at someone of another people or class, do I see a stranger or a relative from one soul? Which tie of kinship have I let go slack, and am I waiting for the other side to move first? Have I ever used the name of Allah to press my own claim while ignoring what I owe? If I kept in mind that Allah was watching my dealings with my family, would they see any difference in me?",
            "bn": "অন্য জাতি বা অন্য শ্রেণির কাউকে দেখলে আমি কি একজন অচেনা মানুষ দেখি, নাকি এক প্রাণ থেকে আসা একজন আত্মীয়? আত্মীয়তার কোন বন্ধনটা আমি ঢিলে হতে দিয়েছি, আর আমি কি অপেক্ষা করছি অন্য পক্ষ আগে এগিয়ে আসুক? নিজের দাবি আদায়ে আমি কি কখনো আল্লাহর নাম ব্যবহার করেছি, অথচ নিজের দেনার কথা ভুলে থেকেছি? আল্লাহ আমার লেনদেন দেখছেন, এ কথা আমার মনে থাকলে পরিবারের লোকেরা কি আমার মধ্যে কোনো পরিবর্তন দেখত?"
          },
          {
            "en": "Whom in my wider family would the Prophet ﷺ, standing where he stood before the poor of Mudar, point to and say: this one is yours? And is there a quarrel over property in my family that I could soften by remembering that both sides once asked each other by Allah and by the womb?",
            "bn": "মুদারের গরিবদের সামনে নবী ﷺ যেখানে দাঁড়িয়েছিলেন, সেখানে দাঁড়িয়ে আমার বড় পরিবারের কার দিকে তিনি আঙুল তুলে বলতেন, এ তোমার দায়িত্ব? আর সম্পদ নিয়ে আমার পরিবারে কি এমন কোনো ঝগড়া আছে, যা নরম হতে পারে শুধু এটুকু মনে রাখলে: দুই পক্ষই একদিন আল্লাহর দোহাই আর আত্মীয়তার দোহাই দিয়ে একে অন্যের কাছে চেয়েছিল?"
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
            "bn": "শিশুদের সঙ্গে মিলে একটা বংশতালিকা আঁকুন, যতদূর পর্যন্ত কারও মনে আছে। তারপর আয়াতটি পড়ে সবচেয়ে পুরোনো নামের ওপরে একটা লাইন যোগ করুন: এক প্রাণ। ওদের দেখতে দিন, প্রতিটি শাখা সেই লাইনে গিয়ে মেলে, দেখতে আলাদা সহপাঠীদের পরিবারও। এরপর তালিকা থেকে এমন একজন আত্মীয় বেছে নিন, যাঁর সঙ্গে পরিবারের যোগাযোগ কম, আর সবাই মিলে তাঁকে ফোন করা বা দেখতে যাওয়ার পরিকল্পনা করুন। আয়াতের শিক্ষা সবচেয়ে ভালো শেখা যায় তার আদেশ মেনে কাজ করে।"
          },
          {
            "en": "In a study circle, read 4:1 and then skim the first twelve verses of the surah, asking at each command whose right is being protected and how the opening verse prepares the ground for it. The group will find that orphans, wives, daughters and parents all stand under the single umbrella of one soul, a shared Lord and a watching God.",
            "bn": "পাঠচক্রে ৪:১ আয়াত পড়ে সূরার প্রথম বারোটি আয়াতে চোখ বুলিয়ে নিন। প্রতিটি আদেশে জিজ্ঞেস করুন, এখানে কার হক রক্ষা করা হচ্ছে, আর শুরুর আয়াত কীভাবে তার ভিত তৈরি করে রেখেছে। সবাই দেখবেন, এতিম, স্ত্রী, কন্যা আর বাবা-মা দাঁড়িয়ে আছে একই ছাতার নিচে: এক প্রাণ, এক রব, আর সেই আল্লাহ, যিনি সব দেখছেন।"
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
          "bn": "মানুষের হাত থেকে সরিয়ে নেওয়া ভাগ"
        },
        "p": [
          {
            "en": "4:7 laid down the principle: for men is a share of what parents and close relatives leave, and for women is a share, be it little or much, an obligatory share. 4:8 asks that relatives, orphans and the needy present at the division be given something and spoken to kindly, 4:9 tells guardians to fear for orphans as they would for weak offspring of their own, and 4:10 warns those who devour orphans' property that they eat fire. This verse then sets out the shares of children and parents, 4:12 those of spouses and of siblings in a certain case, and 4:13-14 call the whole scheme the limits of Allah.",
            "bn": "৪:৭ আয়াত মূলনীতিটা বলে দিয়েছিল: বাবা-মা ও নিকটাত্মীয়দের রেখে যাওয়া সম্পদে পুরুষদের অংশ আছে, নারীদেরও অংশ আছে, তা কম হোক বা বেশি, এক নির্ধারিত অংশ। ৪:৮ আয়াত বলে, ভাগের সময় উপস্থিত আত্মীয়, এতিম আর মিসকিনদেরও কিছু দাও, তাদের সঙ্গে ভালো কথা বলো। ৪:৯ আয়াত অভিভাবকদের বলে, নিজের অসহায় সন্তান রেখে গেলে তাদের নিয়ে যেমন ভয় হতো, এতিমদের ব্যাপারেও তেমন ভয় রাখুক। ৪:১০ আয়াত সতর্ক করে তাদের, যারা এতিমের সম্পদ গ্রাস করে। তারা পেটে আগুনই ভরে। এরপর এই আয়াত সন্তান আর বাবা-মায়ের অংশ ঠিক করে দেয়। ৪:১২ আয়াত ঠিক করে স্বামী-স্ত্রীর অংশ, আর বিশেষ এক অবস্থায় ভাই-বোনের অংশ। ৪:১৩ ও ৪:১৪ আয়াত গোটা ব্যবস্থাকে বলে আল্লাহর সীমা।"
          },
          {
            "en": "Ibn Kathir notes that the knowledge of inheritance, al-fara'id, rests on this verse, the one after it and the last verse of the surah, 4:176, together with the hadith that explain them. He brings two reports as the occasion. In the first, from al-Bukhari, Jabir ibn Abdullah (RA) lay ill and asked the Prophet ﷺ what to do with his wealth. Ibn Kathir himself remarks that this seems to concern 4:176, since Jabir then had sisters and no children or parents. The second, about the daughters of Sa'd ibn ar-Rabi' (RA), is given in the hadith section.",
            "bn": "ইবনে কাসীর বলেন, মিরাসের ইলম, যার নাম আল-ফারায়েয, দাঁড়িয়ে আছে এই আয়াত, এর পরের আয়াত আর সূরার শেষ আয়াত ৪:১৭৬-এর ওপর, সঙ্গে এগুলোর ব্যাখ্যায় আসা হাদিস। নাজিলের প্রেক্ষাপট হিসেবে তিনি দুটি বর্ণনা আনেন। প্রথমটি বুখারী থেকে: জাবির ইবনে আবদুল্লাহ (রাঃ) অসুস্থ অবস্থায় নবী ﷺ-কে জিজ্ঞেস করেছিলেন তাঁর সম্পদ নিয়ে কী করবেন। ইবনে কাসীর নিজেই মন্তব্য করেছেন, এটা সম্ভবত ৪:১৭৬ আয়াতের সঙ্গে সম্পর্কিত, কারণ জাবিরের তখন বোন ছিল, সন্তান বা বাবা-মা ছিল না। দ্বিতীয়টি সা'দ ইবনে রাবী' (রাঃ)-এর মেয়েদের ঘটনা, যা হাদিসের অংশে আসছে।"
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
            "bn": "আয়াত শুরু হয় ইউসীকুমুল্লাহ দিয়ে, আল্লাহ তোমাদের নির্দেশ দিচ্ছেন। ওয়াও-সোয়াদ-ইয়া মূলের মধ্যে আছে কাউকে কোনো দায়িত্ব বুঝিয়ে দেওয়া, তার হাতে সঁপে দেওয়ার ভাব। ওয়াসিয়ত শব্দও এই মূল থেকে। আয়াতের পরের দিকে মূলটি আবার আসে: সে যে ওয়াসিয়ত করে গেছে তার পর। অর্থাৎ আয়াত শুরু হয় সন্তানদের ব্যাপারে আল্লাহর নিজের নির্দেশ দিয়ে, আর মৃত ব্যক্তির ওয়াসিয়তকে রাখে তার ভেতরে। হাযয মানে ভাগ, বরাদ্দ অংশ। আয়াত শেষ হয় ফারীদাতাম মিনাল্লাহ দিয়ে, আল্লাহর পক্ষ থেকে ফরজ। ফা-রা-দোয়াদ মূলের ফারীদা মানে নির্ধারিত আর বাধ্যতামূলক অংশ, আর এ থেকেই এই শাস্ত্রের নাম।"
          },
          {
            "en": "Two phrases deserve a slower reading. For daughters the Arabic says fawqa ithnatayn, literally above two, which the app renders two or more; Ibn Kathir holds that two daughters also take two thirds, pointing to 4:176, where two sisters take two thirds, and to the Prophet's ﷺ ruling for Sa'd's two daughters. And near the end: your parents or your children, you do not know which of them is nearest to you in benefit. The verse explains its own firmness in the middle of its details.",
            "bn": "দুটি কথা একটু ধীরে পড়ার মতো। মেয়েদের প্রসঙ্গে আরবিতে আছে ফাওকাছনাতাইন, আক্ষরিক অর্থে দুজনের বেশি। অ্যাপের ইংরেজি অনুবাদে তা দুই বা ততোধিক, বাংলা অনুবাদে দুজনের অধিক। ইবনে কাসীরের মত, দুই মেয়েও তিন ভাগের দুই ভাগ পাবে। দলিল হিসেবে তিনি দেখান ৪:১৭৬ আয়াত, যেখানে দুই বোন পায় তিন ভাগের দুই ভাগ, আর সা'দের দুই মেয়ের ব্যাপারে নবী ﷺ-এর ফয়সালা। আর আয়াতের শেষের দিকে: তোমাদের বাবা-মা আর তোমাদের সন্তান, তোমরা জানো না উপকারে কে তোমাদের বেশি কাছের। খুঁটিনাটির মাঝখানেই আয়াত নিজের দৃঢ়তার কারণ বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wisdom the Commentators Give",
          "bn": "মুফাসসিরদের চোখে হিকমত"
        },
        "p": [
          {
            "en": "Ibn Kathir begins with the custom the verse brought to an end. The people of the Jahiliyyah, he says, gave inheritance to males and not to females, so Allah commanded that both take a share. He adds that the verse shows Allah is more merciful to children than their own parents, since He commands parents to be just among them. He also cites al-Bukhari's report from Ibn Abbas (RA): wealth used to pass to the children, and parents received only what was bequeathed to them, until Allah abrogated from that arrangement what He willed and set the shares.",
            "bn": "ইবনে কাসীর শুরু করেন সেই প্রথা দিয়ে, যার অবসান ঘটিয়েছে এই আয়াত। তিনি বলেন, জাহিলিয়াতের লোকেরা মিরাস দিত পুরুষদের, নারীদের নয়। তাই আল্লাহ আদেশ দিলেন, দুজনেই অংশ পাবে। তিনি আরও বলেন, আয়াতটি দেখায় আল্লাহ সন্তানদের প্রতি তাদের বাবা-মায়ের চেয়েও বেশি দয়ালু, কারণ তিনি বাবা-মাকে সন্তানদের মধ্যে ইনসাফ করতে আদেশ দিচ্ছেন। ইবনে আব্বাস (রাঃ) থেকে বুখারীর বর্ণনাও তিনি আনেন: আগে সম্পদ যেত সন্তানদের কাছে, আর বাবা-মা পেতেন কেবল তাঁদের জন্য করা ওয়াসিয়তটুকু। পরে আল্লাহ সে ব্যবস্থার যতটুকু চাইলেন রহিত করলেন, আর অংশগুলো নির্ধারণ করে দিলেন।"
          },
          {
            "en": "On why the son takes the share of two daughters, Ibn Kathir ties it to obligations: men need wealth to spend on their dependants, on their work and dealings, and to meet what is required of them. The Quran itself places the dower on the husband in 4:4 and names men's spending from their wealth in 4:34. The rule concerns sons and daughters inheriting together, and 4:176 gives it for brothers and sisters together. It is not stated for every man and woman: in 4:12 maternal siblings share equally, as Ibn Kathir notes, and here each parent takes a sixth when there are children.",
            "bn": "ছেলে কেন দুই মেয়ের সমান পায়, ইবনে কাসীর এর কারণ খুঁজেছেন দায়িত্বে। পুরুষের সম্পদ দরকার পোষ্যদের পেছনে খরচ করতে, কাজকর্ম আর লেনদেন চালাতে, আর তার ওপর যা দায় আছে তা মেটাতে। কুরআন নিজেই ৪:৪ আয়াতে মোহরের দায় স্বামীর ওপর রেখেছে, আর ৪:৩৪ আয়াতে পুরুষদের নিজেদের সম্পদ থেকে খরচের কথা বলেছে। বিধানটা খাটে ছেলে আর মেয়ে একসঙ্গে ওয়ারিশ হলে। ৪:১৭৬ আয়াত একই বিধান দেয় ভাই আর বোন একসঙ্গে ওয়ারিশ হলে। প্রত্যেক নারী-পুরুষের ক্ষেত্রে এ কথা বলা হয়নি। ইবনে কাসীর যেমন উল্লেখ করেছেন, ৪:১২ আয়াতে মায়ের দিকের ভাই-বোনেরা সমান ভাগ পায়। আর এই আয়াতেই সন্তান থাকলে বাবা ও মা প্রত্যেকে ছয় ভাগের এক ভাগ পান।"
          },
          {
            "en": "Ibn Ashur draws attention to the wording. The verse could have said the daughter takes half the son's share; instead it makes the share of two females the measure by which the male's share is stated. He sees in this a pointer that the female's share, which the Jahiliyyah had denied, is now the fixed reference point, announced in the first words the listener hears. On the order of bequest and debt, Ibn Kathir reports that the scholars of every generation agree that debt is paid before a bequest is carried out.",
            "bn": "ইবনে আশুর শব্দচয়নের দিকে দৃষ্টি দেন। আয়াত বলতে পারত, মেয়ে পাবে ছেলের অর্ধেক। তা না বলে আয়াত দুই নারীর অংশকে মাপকাঠি বানিয়ে তার হিসাবে পুরুষের অংশ বলেছে। তাঁর মতে এতে ইঙ্গিত আছে যে জাহিলিয়াত নারীর যে অংশ অস্বীকার করত, সেটাই এখন নির্ধারিত মাপকাঠি। আর শ্রোতার কানে প্রথম যে কথাগুলো পৌঁছায়, তাতেই সেটা ঘোষণা করা হয়েছে। ওয়াসিয়ত আর ঋণের ক্রম প্রসঙ্গে ইবনে কাসীর জানান, আগের ও পরের সব যুগের আলেমরা একমত যে ওয়াসিয়ত কার্যকর করার আগে ঋণ শোধ করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Daughters and a Third",
          "bn": "দুই মেয়ে আর এক-তৃতীয়াংশ"
        },
        "p": [
          {
            "en": "Ibn Kathir cites a report from Jabir (RA), recorded by Ahmad, Abu Dawud, at-Tirmidhi and Ibn Majah. The widow of Sa'd ibn ar-Rabi' (RA), who had been killed at Uhud, came to the Prophet ﷺ with her two daughters. Their uncle had taken all of Sa'd's wealth and left them nothing, and they could not marry without means. The Prophet ﷺ said that Allah would decide the matter. When the verse of inheritance came, he sent word to the uncle to give the two daughters two thirds and their mother an eighth, and to keep the remainder.",
            "bn": "ইবনে কাসীর জাবির (রাঃ) থেকে একটি বর্ণনা আনেন, যা ইমাম আহমাদ, আবু দাউদ, তিরমিযী ও ইবনে মাজাহ বর্ণনা করেছেন। উহুদে শহীদ সা'দ ইবনে রাবী' (রাঃ)-এর স্ত্রী দুই মেয়েকে নিয়ে নবী ﷺ-এর কাছে এলেন। মেয়েদের চাচা সা'দের সব সম্পদ নিয়ে নিয়েছিল, তাদের জন্য কিছুই রাখেনি। আর সম্পদ না থাকলে তাদের বিয়েও হবে না। নবী ﷺ বললেন, আল্লাহ এ বিষয়ে ফয়সালা করবেন। মিরাসের আয়াত নাজিল হলে তিনি চাচার কাছে খবর পাঠালেন: দুই মেয়েকে তিন ভাগের দুই ভাগ দাও, তাদের মাকে আট ভাগের এক ভাগ, আর বাকিটা তোমার।"
          },
          {
            "en": "The report shows the verse arriving as protection. Two girls and a widow, with no man left to speak for them, were being pushed out by a stronger relative, and revelation named their shares so that no uncle could argue. Al-Bukhari also records from Sa'd ibn Abi Waqqas (RA) that when he was ill and asked to bequeath a large part of his wealth, the Prophet ﷺ allowed a third and said a third is much, and that leaving one's heirs well off is better than leaving them dependent, asking from people.",
            "bn": "বর্ণনাটি দেখায়, আয়াত এসেছিল রক্ষাকবচ হয়ে। দুটি মেয়ে আর একজন বিধবা, তাদের হয়ে কথা বলার মতো কোনো পুরুষ আর বেঁচে নেই। জোরালো এক আত্মীয় তাদের ঠেলে সরিয়ে দিচ্ছিল। ওহি তাদের অংশ নাম ধরে বলে দিল, যাতে কোনো চাচা আর তর্ক করতে না পারে। ইমাম বুখারী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকেও বর্ণনা করেছেন: অসুস্থ অবস্থায় তিনি নিজের সম্পদের বড় একটা অংশ ওয়াসিয়ত করে যেতে চাইলে নবী ﷺ এক-তৃতীয়াংশের অনুমতি দিলেন। বললেন, এক-তৃতীয়াংশও অনেক। আর ওয়ারিশদের সচ্ছল রেখে যাওয়া তাদের এমন অভাবী রেখে যাওয়ার চেয়ে ভালো, যাতে তারা মানুষের কাছে হাত পাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses Around the Shares",
          "bn": "মিরাসের আয়াতের আশপাশে"
        },
        "p": [
          {
            "en": "4:7 is the verse to hear first, because it states in one sentence that women inherit, whether the estate is little or much. 4:12 completes the family: spouses inherit from each other, and a person with neither ascendants nor descendants is inherited by siblings. 4:176, the surah's last verse, returns to that case and gives two sisters two thirds. 2:180 had earlier prescribed a bequest for parents and near relatives, which matches the arrangement Ibn Abbas (RA) describes from before the shares were set.",
            "bn": "প্রথমে শোনার মতো আয়াত ৪:৭, কারণ এক বাক্যেই তা জানিয়ে দেয় নারীরা ওয়ারিশ হয়, সম্পদ কম হোক বা বেশি। ৪:১২ আয়াত পরিবারের বাকি অংশ পূর্ণ করে: স্বামী-স্ত্রী একে অন্যের ওয়ারিশ, আর যার বাবা-মা বা সন্তান কেউ নেই, তার ওয়ারিশ হয় ভাই-বোন। সূরার শেষ আয়াত ৪:১৭৬ সেই অবস্থায় ফিরে এসে দুই বোনকে তিন ভাগের দুই ভাগ দেয়। আর আগে ২:১৮০ আয়াত বাবা-মা ও নিকটাত্মীয়দের জন্য ওয়াসিয়ত করার বিধান দিয়েছিল। অংশগুলো নির্ধারিত হওয়ার আগের যে ব্যবস্থার কথা ইবনে আব্বাস (রাঃ) বর্ণনা করেছেন, তার সঙ্গে এটা মিলে যায়।"
          },
          {
            "en": "4:13-14 put the shares under the heading of the limits of Allah: whoever obeys Allah and His Messenger in them enters gardens, and whoever transgresses them faces a humiliating punishment. And 4:32, a little later, speaks to the heart that watches another's share: do not wish for that by which Allah has made some of you exceed others; for men is a share of what they earned and for women a share of what they earned, and ask Allah of His bounty.",
            "bn": "৪:১৩ ও ৪:১৪ আয়াত অংশগুলোকে রাখে আল্লাহর সীমার শিরোনামে: এ ব্যাপারে যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে সে জান্নাতে যাবে, আর যে সীমা লঙ্ঘন করে তার জন্য অপমানজনক শাস্তি। আর একটু পরে ৪:৩২ আয়াত কথা বলে সেই মনের সঙ্গে, যে অন্যের ভাগের দিকে তাকিয়ে থাকে: আল্লাহ যা দিয়ে তোমাদের কাউকে কারও ওপর বাড়তি দিয়েছেন, তা কামনা কোরো না। পুরুষের জন্য তার উপার্জনের অংশ, নারীর জন্য তার উপার্জনের অংশ। আর আল্লাহর কাছে তাঁর অনুগ্রহ চাও।"
          }
        ]
      },
      {
        "h": {
          "en": "When an Estate Is Divided",
          "bn": "যখন সম্পদ ভাগ হয়"
        },
        "p": [
          {
            "en": "The verse asks for preparation before death. Write down what you owe and what is owed to you, because debts come first and heirs cannot pay what they do not know about. If you make a bequest, keep it within what the Prophet ﷺ allowed Sa'd. And do not try to rearrange the shares through quiet arrangements before death; Ibn Kathir, at 4:13, describes obedience in this matter as giving each heir the share Allah appointed without adding or taking away by tricks and plots.",
            "bn": "আয়াত মৃত্যুর আগেই প্রস্তুতি চায়। আপনার কাছে কার কী পাওনা আর আপনার কার কাছে কী পাওনা, লিখে রাখুন। কারণ ঋণ আগে, আর যে ঋণের কথা ওয়ারিশরা জানে না, তা তারা শোধ করতে পারে না। ওয়াসিয়ত করলে তা রাখুন সেই সীমার ভেতরে, যা নবী ﷺ সা'দকে দিয়েছিলেন। আর মৃত্যুর আগে চুপচাপ কোনো ব্যবস্থা করে অংশগুলো ঘুরিয়ে দেওয়ার চেষ্টা করবেন না। ৪:১৩ আয়াতের ব্যাখ্যায় ইবনে কাসীর এ ব্যাপারে আনুগত্যের বর্ণনা দিয়েছেন এভাবে: কৌশল আর ফন্দি করে কিছু না বাড়িয়ে, না কমিয়ে প্রত্যেক ওয়ারিশকে আল্লাহর ঠিক করা অংশ দেওয়া।"
          },
          {
            "en": "After a death, the hardest test often falls on the family's women. A sister may be told that asking for her share will break the family, or a widow may be made to feel that her portion is a favour. The verse settles that argument before it starts: the share is a farida from Allah, not a gift from the brothers. Families should work out the actual calculation with a qualified scholar, since real estates involve many heirs and details this page does not address, but no one should need a scholar to know that a daughter inherits.",
            "bn": "মৃত্যুর পর সবচেয়ে কঠিন পরীক্ষাটা প্রায়ই আসে পরিবারের নারীদের ওপর। বোনকে হয়তো বলা হয়, নিজের অংশ চাইলে পরিবার ভেঙে যাবে। বিধবাকে হয়তো বোঝানো হয়, তাঁর ভাগটা আসলে দয়া। আয়াত এ তর্ক শুরু হওয়ার আগেই মিটিয়ে দেয়। অংশটা আল্লাহর দেওয়া ফরজ, ভাইদের দেওয়া উপহার নয়। আসল হিসাব পরিবারগুলো যোগ্য আলেমের কাছ থেকে করে নেবে, কারণ বাস্তবে ওয়ারিশ অনেক থাকে, খুঁটিনাটিও অনেক, যা এই লেখা আলোচনা করছে না। তবে মেয়ে যে ওয়ারিশ, এটুকু জানতে কারও আলেমের দরকার হওয়ার কথা নয়।"
          },
          {
            "en": "The phrase you do not know which of them is nearest to you in benefit also helps the one who inherits less than he hoped. Perhaps a parent favoured a child who stayed home, or a son resents that a sister who moved away receives her share. The verse answers that no one can weigh benefit in this world and the next accurately enough to redistribute what Allah has fixed. Accepting the division is itself an act of trust in the One who is Knowing and Wise.",
            "bn": "তোমরা জানো না উপকারে কে বেশি কাছের, এ কথা তাকেও সাহায্য করে, যে আশার চেয়ে কম পেয়েছে। হয়তো বাবা-মা ঘরে থেকে যাওয়া কোনো সন্তানের প্রতি বেশি টান রাখতেন। কিংবা কোনো ছেলে মনে মনে অসন্তুষ্ট, দূরে চলে যাওয়া বোনও কেন পুরো অংশ পাবে। আয়াতের জবাব, দুনিয়া আর আখিরাতের উপকার এত নিখুঁতভাবে কেউ মাপতে পারে না যে আল্লাহর ঠিক করা ভাগ নতুন করে সাজাবে। ভাগটা মেনে নেওয়াই সেই সর্বজ্ঞ, প্রজ্ঞাময় সত্তার ওপর ভরসার আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Before and After",
          "bn": "আগে ও পরের দোয়া"
        },
        "p": [
          {
            "en": "The verse is law, not supplication, so this is a short du'a in its own vocabulary, offered as such and not as a transmitted text. For the one preparing: O Allah, let me leave my affairs clear and my debts known, let my bequest harm no heir, and let my heirs receive what You have fixed for them without dispute. For the one inheriting: O Allah, You are Knowing and Wise; make me content with the share You appointed and just in handing others theirs, and do not let wealth cut the ties You commanded me to keep.",
            "bn": "আয়াতটি বিধান, দোয়া নয়। তাই এখানে আয়াতের নিজের শব্দ দিয়ে সাজানো ছোট একটি দোয়া। এটা কোনো বর্ণিত দোয়া নয়। যিনি প্রস্তুতি নিচ্ছেন তাঁর জন্য: হে আল্লাহ, আমি যেন আমার সব বিষয় গুছিয়ে আর ঋণের কথা জানিয়ে যেতে পারি। আমার ওয়াসিয়ত যেন কোনো ওয়ারিশের ক্ষতি না করে, আর আমার ওয়ারিশরা যেন বিবাদ ছাড়া আপনার ঠিক করা অংশ পায়। যিনি ওয়ারিশ হচ্ছেন তাঁর জন্য: হে আল্লাহ, আপনি সর্বজ্ঞ, প্রজ্ঞাময়। আপনার ঠিক করা অংশে আমাকে সন্তুষ্ট রাখুন, অন্যদের অংশ বুঝিয়ে দিতে আমাকে ইনসাফ করার তাওফিক দিন। আর যে বন্ধন রক্ষার আদেশ দিয়েছেন, সম্পদ যেন তা ছিন্ন করতে না পারে।"
          },
          {
            "en": "A family can say such a du'a together on the day the estate is discussed, before the numbers are opened. It reminds everyone in the room that the division they are about to carry out was not written by any of them, and that the One who wrote it is watching how it is carried out.",
            "bn": "যেদিন সম্পদ নিয়ে আলোচনা হবে, হিসাবের কাগজ খোলার আগে পরিবারের সবাই মিলে এমন দোয়া করতে পারেন। এতে ঘরে উপস্থিত সবার মনে পড়ে যায়, যে ভাগ তারা করতে যাচ্ছে তা তাদের কারও লেখা নয়। আর যিনি তা লিখেছেন, তিনি দেখছেন ভাগটা কীভাবে কার্যকর হচ্ছে।"
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
            "bn": "আমার পরিবারে কি এমন কোনো নারী আছেন, যাঁর ব্যাপারে ধরে নিয়েছি তিনি নিজের অংশ ছেড়ে দেবেন? আমি কি কখনো তাঁকে জিজ্ঞেস করেছি তিনি কী চান? আজ রাতে মারা গেলে আমার ওয়ারিশরা কি আমার ঋণের কথা জানবে, নাকি আন্দাজ করে বেড়াবে? মনে মনে কি বিশ্বাস করি, আল্লাহ আমার কোনো আত্মীয়কে যা দিয়েছেন সে তার চেয়ে বেশি পাওয়ার যোগ্য? আর সেই বিশ্বাস তাঁর জ্ঞানের ওপর আমার ভরসা নিয়ে কী বলে?"
          },
          {
            "en": "When I receive something by inheritance, do I thank Allah for it as provision, or do I measure it against what my siblings received? And when relatives, orphans or the needy are present at a division, as 4:8 describes, do I give them something and speak to them kindly, or do I treat them as intruders?",
            "bn": "মিরাসে কিছু পেলে আমি কি একে রিজিক ভেবে আল্লাহর শোকর করি, নাকি ভাই-বোনেরা কী পেল তার সঙ্গে মাপতে বসি? আর ৪:৮ আয়াত যেমন বলে, ভাগের সময় আত্মীয়, এতিম বা মিসকিন উপস্থিত থাকলে আমি কি তাদের কিছু দিই, ভালো কথা বলি, নাকি তাদের অনাহূত মনে করি?"
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
          "bn": "যে বিধান পথের অপেক্ষায় ছিল"
        },
        "p": [
          {
            "en": "Surah an-Nisa has just finished the shares of inheritance and called them the limits of Allah in 4:13-14. It now turns from wealth to conduct within the community. These two verses concern fahishah, which Ibn Kathir explains here as unlawful sexual intercourse. They are among the verses the commentators describe as belonging to an early stage of the law, and the first of them points to this in its own words: the measure it sets lasts until death or until Allah ordains another way for them.",
            "bn": "সূরা নিসা এইমাত্র মিরাসের অংশগুলো শেষ করেছে, আর ৪:১৩ ও ৪:১৪ আয়াতে সেগুলোকে বলেছে আল্লাহর সীমা। এবার সূরা সম্পদ থেকে সমাজের ভেতরের আচরণের দিকে যায়। এই দুই আয়াতের বিষয় ফাহিশা। ইবনে কাসীর এখানে এর ব্যাখ্যা করেছেন ব্যভিচার হিসেবে। মুফাসসিররা এ আয়াতগুলোকে বিধানের প্রথম পর্যায়ের বলে উল্লেখ করেন। প্রথম আয়াতটি নিজের ভাষাতেই সেদিকে ইঙ্গিত দেয়: এর ব্যবস্থা থাকবে মৃত্যু পর্যন্ত, কিংবা যতক্ষণ না আল্লাহ তাদের জন্য অন্য কোনো পথ ঠিক করে দেন।"
          },
          {
            "en": "What follows matters for reading them. 4:16 ends with Allah as Accepting of Repentance and Merciful, and 4:17-18 then explain repentance at length: it is accepted from those who do wrong in ignorance and repent soon after, and not from those who persist until death arrives. 4:19 then forbids inheriting women against their will. The legal measure is framed on one side by the limits of Allah and on the other by the door of repentance, and the reader should hold both.",
            "bn": "এগুলো পড়ার জন্য পরের আয়াতগুলো জরুরি। ৪:১৬ আয়াত শেষ হয় এ কথায় যে আল্লাহ তওবা কবুলকারী, পরম দয়ালু। এরপর ৪:১৭ ও ৪:১৮ আয়াত তওবা নিয়ে বিস্তারিত বলে: তওবা কবুল হয় তাদের, যারা অজ্ঞতাবশত মন্দ কাজ করে ফেলে তারপর দ্রুত তওবা করে। তাদের নয়, যারা মৃত্যু হাজির হওয়া পর্যন্ত গুনাহ করেই চলে। তারপর ৪:১৯ আয়াত জোর করে নারীদের ওয়ারিশ হওয়া নিষেধ করে। বিধানগত ব্যবস্থাটার এক পাশে আল্লাহর সীমা, অন্য পাশে তওবার দরজা। পাঠককে দুটোই মনে রাখতে হবে।"
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
            "bn": "ফাহিশা শব্দ এসেছে ফা-হা-শীন মূল থেকে। এর মানে এমন নোংরা কাজ যা সীমা ছাড়িয়ে যায়। কুরআন একাধিক গুরুতর কাজের জন্য শব্দটি ব্যবহার করেছে, তাই মুফাসসিররা প্রতিটি জায়গায় জিজ্ঞেস করেন এখানে এর মানে কী। তারপর: ফাসতাশহিদূ আলাইহিন্না আরবাআতাম মিনকুম, তাদের বিরুদ্ধে তোমাদের মধ্য থেকে চারজনের সাক্ষ্য নাও। ক্রিয়াটা সাক্ষ্য চেয়ে নেওয়ার কথা বলে, আর সংখ্যাটা বড়। কেবল ফাইন শাহিদূ, যদি তারা সাক্ষ্য দেয়, তখনই কোনো ব্যবস্থা। সন্দেহ, গুজব বা একজনের কথা সেই সীমায় পৌঁছায় না।"
          },
          {
            "en": "Aw yaj'alallahu lahunna sabila: or Allah ordains for them a way. Sabil is a road or path, and the phrase leaves the ruling visibly unfinished. In 4:16, fa-adhuhuma comes from the root a-dh-y, to hurt or trouble, a word that names a punishment without specifying its form. Then comes the turn: fa-in taba wa aslaha, if they repent and set right, fa-a'ridu anhuma, turn away from them. The verb for leaving them alone is the same one used for turning aside from something, and the verse ends on tawwaban rahima.",
            "bn": "আও ইয়াজআলাল্লাহু লাহুন্না সাবীলা: কিংবা আল্লাহ তাদের জন্য কোনো পথ করে দেন। সাবীল মানে রাস্তা, পথ। কথাটা বিধানটিকে স্পষ্টতই অসমাপ্ত রেখে দেয়। ৪:১৬ আয়াতে ফাআযূহুমা এসেছে হামযা-যাল-ইয়া মূল থেকে, অর্থ কষ্ট দেওয়া। শব্দটা শাস্তির কথা বলে, কিন্তু তার ধরন নির্দিষ্ট করে না। তারপর মোড়: ফাইন তাবা ওয়া আসলাহা, যদি তারা তওবা করে আর শুধরে নেয়, ফাআরিদূ আনহুমা, তাদের থেকে মুখ ফিরিয়ে নাও। ছেড়ে দেওয়া বোঝাতে যে ক্রিয়া, সেটাই কোনো কিছু থেকে সরে যাওয়ার অর্থে আসে। আর আয়াত শেষ হয় তাওওয়াবার রাহীমা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Abrogation and a Difference",
          "bn": "রহিত হওয়া আর মতভেদ"
        },
        "p": [
          {
            "en": "Ibn Kathir explains that at the beginning of Islam, when such an act was established by sufficient proof, the woman was confined to her home. He reports from Ibn Abbas (RA) that this was the early ruling until Allah sent down Surah an-Nur, which abrogated it, and he names Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah, ad-Dahhak and others as saying the same. He calls this a matter that is agreed upon. The way promised in the verse, on this reading, is the later ruling.",
            "bn": "ইবনে কাসীর ব্যাখ্যা করেন, ইসলামের শুরুতে পর্যাপ্ত প্রমাণে এমন কাজ প্রমাণিত হলে নারীকে তার ঘরে আটকে রাখা হতো। ইবনে আব্বাস (রাঃ) থেকে তিনি বর্ণনা করেন, এটা ছিল প্রথম দিকের বিধান, যতক্ষণ না আল্লাহ সূরা নূর নাজিল করেন, যা এটিকে রহিত করে দেয়। ইকরিমা, সাঈদ ইবনে জুবায়র, হাসান বসরী, কাতাদা, দাহহাক প্রমুখও একই কথা বলেছেন বলে তিনি উল্লেখ করেন। তাঁর ভাষায় বিষয়টি সর্বসম্মত। এই পাঠ অনুযায়ী আয়াতে প্রতিশ্রুত পথ হলো পরের বিধান।"
          },
          {
            "en": "The commentators differ over whom 4:16 describes. Ibn Kathir reports Mujahid's view that it concerns two men, adding that Allah knows best. Another view, recorded by at-Tabari and preferred by him, is that 4:15 concerns women and 4:16 an unmarried man and woman. Others read the two as a man and a woman without further distinction. Al-Qurtubi gathers these positions. On the hurt in fa-adhuhuma, Ibn Kathir reports from Ibn Abbas (RA) and Sa'id ibn Jubayr that it included verbal reproach and shaming, and he adds that this too was later abrogated.",
            "bn": "৪:১৬ আয়াত কাদের কথা বলছে, এ নিয়ে মুফাসসিরদের মতভেদ আছে। ইবনে কাসীর মুজাহিদের মত উল্লেখ করেন যে এখানে দুজন পুরুষের কথা, সঙ্গে বলেন আল্লাহই ভালো জানেন। আরেকটি মত তাবারী উল্লেখ করেছেন আর প্রাধান্যও দিয়েছেন: ৪:১৫ আয়াত নারীদের নিয়ে, আর ৪:১৬ আয়াত অবিবাহিত পুরুষ ও নারীকে নিয়ে। অন্যরা দুজন বলতে আলাদা কোনো ভাগ ছাড়াই একজন পুরুষ ও একজন নারী বুঝেছেন। কুরতুবী এই মতগুলো একত্র করেছেন। ফাআযূহুমার কষ্ট প্রসঙ্গে ইবনে কাসীর ইবনে আব্বাস (রাঃ) ও সাঈদ ইবনে জুবায়র থেকে বর্ণনা করেন, এর মধ্যে ছিল মুখে তিরস্কার আর লজ্জা দেওয়া। সঙ্গে তিনি যোগ করেন, এটাও পরে রহিত হয়েছে।"
          },
          {
            "en": "On leave them alone, Ibn Kathir says: do not revile them after that, because one who truly repents is like one who has no sin. This page does not set out the later penalties or how and by whom they are applied; that belongs to qualified jurists and to lawful authority, not to individuals or to an article. What the verses give every reader is their shape: a demanding standard of proof, a ruling given in stages, and an insistence that repentance changes how a person is to be treated.",
            "bn": "তাদের ছেড়ে দাও, এ কথার ব্যাখ্যায় ইবনে কাসীর বলেন: এরপর আর তাদের গালমন্দ কোরো না, কারণ যে সত্যিকার তওবা করে, সে এমন মানুষের মতো যার কোনো গুনাহ নেই। পরের শাস্তিগুলো কী, কীভাবে আর কার হাতে তা কার্যকর হয়, এই লেখা তা আলোচনা করছে না। সেটা যোগ্য ফকিহ আর বৈধ কর্তৃপক্ষের বিষয়, কোনো ব্যক্তি বা কোনো লেখার নয়। তবে আয়াতগুলোর গড়নটা প্রত্যেক পাঠকের জন্য: প্রমাণের কঠিন মানদণ্ড, ধাপে ধাপে আসা বিধান, আর জোর দিয়ে বলা যে তওবার পর মানুষটির সঙ্গে আচরণও বদলাতে হবে।"
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
            "bn": "ইমাম মুসলিম উবাদা ইবনে সামিত (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বললেন: আমার কাছ থেকে নাও, আমার কাছ থেকে নাও, আল্লাহ তাদের জন্য পথ করে দিয়েছেন। এরপর তিনি অবিবাহিত আর বিবাহিতদের শাস্তির কথা বললেন। ইবনে কাসীর বর্ণনাটি সরাসরি ৪:১৫ আয়াতের নিচে এনেছেন, কারণ এর শব্দগুলো আয়াতের পথ দেওয়ার প্রতিশ্রুতিকেই তুলে নেয়। আয়াতের খোলা সমাপ্তি আর তার পরে আসা বিধানের মাঝে এই বর্ণনাই যোগসূত্র।"
          },
          {
            "en": "Two things in it are worth noticing without going into the penalties themselves. The Prophet ﷺ presents the new ruling as the fulfilment of what the Quran had promised, not as his own invention, so the Sunnah and the verse speak with one voice. And the repeated take it from me shows the care with which he wanted the community to receive it. Ibn Kathir brings other narrations under these verses; this page confines itself to the one that answers the verse's own words.",
            "bn": "শাস্তির খুঁটিনাটিতে না গিয়েও এতে দুটি জিনিস লক্ষ করার মতো। নবী ﷺ নতুন বিধানকে তুলে ধরেছেন কুরআনের দেওয়া প্রতিশ্রুতির পূর্ণতা হিসেবে, নিজের বানানো কিছু হিসেবে নয়। ফলে সুন্নাহ আর আয়াত এক সুরে কথা বলে। আর আমার কাছ থেকে নাও কথাটা দুবার বলায় বোঝা যায়, তিনি চেয়েছিলেন উম্মাহ বিষয়টি পরম যত্নে গ্রহণ করুক। ইবনে কাসীর এই আয়াতগুলোর নিচে আরও বর্ণনা এনেছেন। এই লেখা কেবল সেই বর্ণনাতেই সীমাবদ্ধ থাকছে, যা আয়াতের নিজের শব্দের জবাব দেয়।"
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
            "bn": "ইবনে আব্বাস (রাঃ)-এর বর্ণনা অনুযায়ী কুরআনে প্রতিশ্রুত পথটা এসেছে ২৪:২ আয়াতে। একই সূরা চার সাক্ষীর শর্তকে সুরক্ষায় পরিণত করে। ২৪:৪ আয়াত শাস্তি দেয় তাদের, যারা সতী নারীদের ওপর অপবাদ দেয় অথচ চারজন সাক্ষী আনে না, আর তাদের সাক্ষ্য কখনো গ্রহণ না করতে বলে। ২৪:১৩ আয়াত প্রশ্ন করে, অপবাদকারীরা চারজন সাক্ষী আনল না কেন? সাক্ষী না আনলে আল্লাহর কাছে তারাই মিথ্যাবাদী। আর ২৪:১৯ আয়াত সতর্ক করে তাদের, যারা চায় মুমিনদের মধ্যে অশ্লীলতা ছড়িয়ে পড়ুক।"
          },
          {
            "en": "On the side of repentance, 4:17, the very next verse, says that repentance is accepted from those who do wrong in ignorance and repent soon after. 3:135 describes the God-fearing as people who, when they commit an indecency or wrong themselves, remember Allah and seek forgiveness and do not persist. And 25:70, after naming the gravest sins, makes an exception for those who repent, believe and do righteous work: Allah will replace their evil deeds with good.",
            "bn": "এবার তওবার দিকটা দেখুন। ঠিক পরের আয়াত ৪:১৭ বলে, তওবা কবুল হয় তাদের, যারা অজ্ঞতাবশত মন্দ কাজ করে তারপর দ্রুত তওবা করে। ৩:১৩৫ আয়াত মুত্তাকিদের বর্ণনা দেয় এমন মানুষ হিসেবে, যারা কোনো অশ্লীল কাজ করে ফেললে বা নিজেদের ওপর জুলুম করলে আল্লাহকে স্মরণ করে, গুনাহের মাফ চায়, আর জেনেশুনে তা বারবার করে না। আর ২৫:৭০ আয়াত সবচেয়ে বড় গুনাহগুলোর উল্লেখের পর ব্যতিক্রম রাখে তাদের জন্য, যারা তওবা করে, ঈমান আনে আর নেক আমল করে: আল্লাহ তাদের মন্দ কাজগুলো নেকিতে বদলে দেবেন।"
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
            "bn": "বেশির ভাগ পাঠক কখনো কারও বিচারে বসবেন না, কিন্তু প্রত্যেক পাঠকেরই জিহ্বা আছে। চার সাক্ষীর শর্ত শেখায়, গুজবের দাম কত সামান্য। কারও ব্যক্তিগত জীবন নিয়ে কোনো গল্প আরেকজনকে বলার আগে নিজেকে জিজ্ঞেস করুন, আমি আসলে কী জানি, আর তা প্রমাণ করতে কী লাগবে। কোনো ব্যবস্থার আগে কুরআন যদি চারজন সাক্ষী চায়, আর সাক্ষী ছাড়া অভিযোগকারীকে মিথ্যাবাদী বলে, তাহলে কানাকানি ছড়ানোর কোনো অধিকার মুমিনের নেই। ইমাম বুখারী ইবনে উমর (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, যে কোনো মুসলিমের দোষ ঢেকে রাখে, আল্লাহ কিয়ামতের দিন তার দোষ ঢেকে রাখবেন।"
          },
          {
            "en": "For someone who has fallen, the verses point toward return rather than exposure. Repent soon, as 4:17 says, and do not wait. Do not advertise the sin: al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said all of his community will be pardoned except those who expose themselves, doing a wrong at night that Allah has covered and then telling people about it in the morning. Seek help from someone trustworthy if you need to, and set things right in your life, as aslaha asks.",
            "bn": "যার পদস্খলন হয়েছে, আয়াতগুলো তাকে প্রকাশের দিকে নয়, ফিরে আসার দিকে ডাকে। ৪:১৭ আয়াত যেমন বলে, দ্রুত তওবা করুন, দেরি করবেন না। গুনাহের কথা প্রচার করবেন না। ইমাম বুখারী আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, তাঁর উম্মতের সবাই মাফ পাবে, তারা ছাড়া যারা নিজের গুনাহ নিজেই ফাঁস করে দেয়। রাতে কেউ একটা অন্যায় করল, আল্লাহ তা ঢেকে রাখলেন, আর সকালে সে নিজেই লোকদের তা বলে বেড়াল। দরকার হলে কোনো বিশ্বস্ত মানুষের সাহায্য নিন, আর আসলাহা শব্দটি যা চায়, সেভাবে নিজের জীবনটা ঠিক করে নিন।"
          },
          {
            "en": "For a family or community that knows of someone's past and has seen their repentance, fa-a'ridu anhuma is a command, not a suggestion. Stop bringing it up. Do not let it follow them into a marriage proposal, a job or a mosque committee as gossip. Ibn Kathir's gloss is plain: one who repents is like one with no sin. Treating a repentant person as permanently marked claims a severity that the verse, ending on the Accepting of Repentance and the Merciful, does not claim.",
            "bn": "কোনো পরিবার বা সমাজ যদি কারও অতীত জানে, আর তার তওবাও দেখে থাকে, তাহলে ফাআরিদূ আনহুমা তাদের জন্য আদেশ, পরামর্শ নয়। প্রসঙ্গটা তোলা বন্ধ করুন। বিয়ের প্রস্তাবে, চাকরিতে বা মসজিদ কমিটিতে সেই কথা যেন কানাকানি হয়ে তার পিছু না নেয়। ইবনে কাসীরের ব্যাখ্যা সোজা: তওবাকারী এমন, যেন তার কোনো গুনাহ নেই। তওবাকারী মানুষকে চিরদিনের দাগি বানিয়ে রাখা মানে এমন কঠোরতা দেখানো, যা আয়াত নিজেও দেখায়নি। আয়াত তো শেষ হয়েছে তওবা কবুলকারী আর পরম দয়ালুর নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a of Return",
          "bn": "ফিরে আসার দোয়া"
        },
        "p": [
          {
            "en": "The Quran gives a du'a of return in 7:23, the words of Adam (AS) and his wife after their slip: our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers. It asks for exactly what 4:16 ends on, forgiveness and mercy. Alongside it, a short supplication in the vocabulary of these verses, offered as such and not as a transmitted text: O Allah, You are Tawwab and Rahim; accept my repentance, help me set right what I have spoiled, and cover my faults as I cover the faults of others.",
            "bn": "কুরআন ৭:২৩ আয়াতে ফিরে আসার একটি দোয়া দিয়েছে। ভুলের পর আদম (আঃ) ও তাঁর স্ত্রীর কথা: হে আমাদের রব, আমরা নিজেদের ওপর জুলুম করেছি, আপনি যদি আমাদের মাফ না করেন আর দয়া না করেন, তাহলে আমরা অবশ্যই ক্ষতিগ্রস্তদের মধ্যে পড়ে যাব। ৪:১৬ আয়াত যে দুটি জিনিসে শেষ হয়, এ দোয়ায় ঠিক সেটাই চাওয়া হয়েছে: মাফ আর রহমত। সঙ্গে এই আয়াতগুলোর শব্দে সাজানো ছোট একটি দোয়া, যা কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আপনি তাওওয়াব, আপনি রাহীম। আমার তওবা কবুল করুন, যা নষ্ট করেছি তা শুধরে নিতে সাহায্য করুন, আর আমি যেমন অন্যের দোষ ঢেকে রাখি, আপনিও আমার দোষ ঢেকে রাখুন।"
          },
          {
            "en": "A second short supplication in the same vocabulary, also composed rather than transmitted, for the one who fears speaking wrongly about others: O Allah, keep my tongue from accusing anyone without proof, and keep my heart from loving that indecency should spread. These are prayers that can be said daily, not only after a fall.",
            "bn": "একই শব্দে সাজানো আরেকটি ছোট দোয়া, এটাও বর্ণিত নয়। যে অন্যের ব্যাপারে ভুল কথা বলার ভয় করে, তার জন্য: হে আল্লাহ, প্রমাণ ছাড়া কাউকে অভিযুক্ত করা থেকে আমার জিহ্বা বাঁচিয়ে রাখুন, আর অশ্লীলতা ছড়িয়ে পড়ুক এমন চাওয়া থেকে আমার অন্তর বাঁচিয়ে রাখুন। এ দোয়াগুলো কেবল গুনাহে পড়ার পর নয়, প্রতিদিনই পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Sit With",
          "bn": "ভেবে দেখার প্রশ্ন"
        },
        "p": [
          {
            "en": "When did I last pass on something about another person's private life that I could not have proved to anyone? Is there someone whose past I still bring up, though they have long since turned back to Allah? If Allah exposed what He has covered of mine, how would I want people to treat me afterwards, and do I treat others that way now?",
            "bn": "শেষ কবে আমি কারও ব্যক্তিগত জীবন নিয়ে এমন কিছু বলেছি, যা কারও কাছেই প্রমাণ করতে পারতাম না? এমন কেউ কি আছে, যে বহু আগেই আল্লাহর দিকে ফিরে এসেছে, অথচ আমি এখনো তার অতীত টেনে আনি? আল্লাহ আমার যা ঢেকে রেখেছেন, তা যদি প্রকাশ করে দিতেন, তারপর মানুষ আমার সঙ্গে কেমন আচরণ করুক বলে চাইতাম? আর আমি কি এখন অন্যদের সঙ্গে সেভাবেই আচরণ করি?"
          },
          {
            "en": "Is there a wrong in my own life that I keep postponing repentance for, telling myself there will be time? When someone I know has repented and set things right, can I obey fa-a'ridu anhuma and truly leave the matter alone, as Ibn Kathir explains it, without reviling them afterwards? And what does it teach me about Allah that He brought His law in stages, and closed even these stern verses with His names the Accepting of Repentance and the Merciful?",
            "bn": "আমার নিজের জীবনে কি এমন কোনো অন্যায় আছে, যার তওবা আমি সময় আছে ভেবে বারবার পিছিয়ে দিচ্ছি? পরিচিত কেউ তওবা করে নিজেকে শুধরে নিলে আমি কি ফাআরিদূ আনহুমা মেনে সত্যিই বিষয়টা ছেড়ে দিতে পারি, ইবনে কাসীরের ব্যাখ্যা অনুযায়ী পরে আর তাকে গালমন্দ না করে? আল্লাহ বিধান দিয়েছেন ধাপে ধাপে, আর এমন কঠোর আয়াতও শেষ করেছেন তাঁর দুই নামে: তওবা কবুলকারী, পরম দয়ালু। এ থেকে আল্লাহ সম্পর্কে আমি কী শিখি?"
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
          "bn": "বিধবা কোনো পরিত্যক্ত সম্পত্তি নয়"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan. Its opening verses set out the rights of orphans and, in 4:11-12, the shares of inheritance, closing with the limits of Allah in 4:13-14. Then 4:15-16 address grave indecency and 4:17-18 the terms of repentance. At 4:19 comes the surah's first call of ya ayyuha alladhina amanu, O you who have believed. The talk turns from what a dead man leaves to how the living treat the women of the house, and right after this passage 4:22-24 name the women who may not be married.",
            "bn": "সূরা নিসা মাদানী। শুরুর আয়াতগুলো এতিমদের হকের কথা বলে, ৪:১১ ও ৪:১২ আয়াত মিরাসের অংশ ঠিক করে, আর ৪:১৩ ও ৪:১৪ আয়াত সেগুলোকে বলে আল্লাহর সীমারেখা। তারপর ৪:১৫ ও ৪:১৬ আয়াতে আসে গুরুতর অশ্লীলতার বিধান, ৪:১৭ ও ৪:১৮ আয়াতে তওবার শর্ত। ৪:১৯ আয়াতে এসে সূরায় প্রথমবার ডাক আসে, ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ। মৃত মানুষ কী রেখে গেল, সেই আলোচনা থেকে কথা ঘুরে যায় জীবিতরা ঘরের নারীদের সঙ্গে কেমন আচরণ করবে তার দিকে। এই অংশের ঠিক পরে ৪:২২ থেকে ৪:২৪ আয়াতে বলা আছে কোন নারীদের বিয়ে করা যাবে না।"
          },
          {
            "en": "The verse also has a known occasion. Ibn Kathir cites al-Bukhari's report from Ibn Abbas (RA): before it, when a man died, his male relatives held the right to do as they wished with his wife. If one of them wished, he married her, or gave her in marriage, or kept her from marrying at all, for they held more right over her than her own family did. Then this verse was revealed. As-Sa'di describes the same custom and adds that she might be kept from marrying until she handed over part of her late husband's wealth or of her dowry.",
            "bn": "আয়াতটির নাজিলের প্রেক্ষাপটও জানা। ইবনে কাসীর ইমাম বুখারীর বর্ণনা আনেন ইবনে আব্বাস (রাঃ) থেকে: এর আগে কোনো পুরুষ মারা গেলে তার স্ত্রীর ব্যাপারে যা খুশি করার অধিকার পেত মৃতের পুরুষ আত্মীয়রা। তাদের কেউ চাইলে নিজে তাকে বিয়ে করত, চাইলে অন্যের সঙ্গে বিয়ে দিত, আবার চাইলে বিয়েই করতে দিত না। কারণ তার ওপর তার নিজের পরিবারের চেয়ে তাদের দাবিই বেশি ধরা হতো। তখন এই আয়াত নাজিল হয়। আস-সাদী একই প্রথার বর্ণনা দেন, আর যোগ করেন: মৃত স্বামীর সম্পদ বা মোহরের কিছু অংশ তুলে না দেওয়া পর্যন্ত তাকে বিয়ে করতে না দেওয়াও হতো।"
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
            "bn": "নিষেধটা এসেছে লা ইয়াহিল্লু লাকুম দিয়ে, তোমাদের জন্য বৈধ নয়। এ হালাল-হারামের ভাষা। কী বৈধ নয়? আন তারিসুন নিসাআ কারহা, জোর করে নারীদের ওয়ারিশ হওয়া। কারহা মানে অমতে, ইচ্ছার বিরুদ্ধে। এরপর আসে ওয়া লা তা'দুলূহুন্না, তাদের আটকে রেখে কষ্ট দিয়ো না। একই ক্রিয়া আছে ২:২৩২ আয়াতে, যেখানে অনুবাদ হয়েছে: তাদের বাধা দিও না। এখানে ইবনে কাসীরের ব্যাখ্যা হলো, নারীর সঙ্গে এমন কঠোর আচরণ করা, যাতে সে মোহরের পুরোটা বা কিছু অংশ ফিরিয়ে দেয়, কিংবা চাপে পড়ে নিজের কোনো হক ছেড়ে দেয়।"
          },
          {
            "en": "In place of pressure the verse sets wa 'ashiruhunna bil-ma'ruf, live with them in kindness. The verb is from the root '-sh-r, the root of mu'asharah, living in one another's company, and bil-ma'ruf ties that company to what is known and recognised as good. Ibn Kathir fills it in: kind words, kind treatment, and making one's appearance pleasing for her as far as one can, just as a husband would like the same from her, and he cites 2:228. As-Sa'di adds clothing and provision, according to the husband's means, her situation, and the custom of the time and place.",
            "bn": "চাপের জায়গায় আয়াত রাখে ওয়া আশিরূহুন্না বিল মা'রূফ, তাদের সঙ্গে সদ্ভাবে জীবন যাপন করো। ক্রিয়াটির ধাতু আইন-শীন-রা, যা থেকে আসে মুআশারা, মানে একসঙ্গে মিলেমিশে থাকা। আর বিল মা'রূফ এই সঙ্গকে বেঁধে দেয় সেই আচরণের সঙ্গে, যাকে সবাই ভালো বলে চেনে। ইবনে কাসীর এর ব্যাখ্যা দেন: নরম কথা, ভালো ব্যবহার, আর সাধ্যমতো স্ত্রীর জন্য নিজেকে পরিপাটি রাখা, ঠিক যেমন স্বামী নিজেও স্ত্রীর কাছে তা চায়। এর পাশে তিনি আনেন ২:২২৮ আয়াত। আস-সাদী যোগ করেন পোশাক আর ভরণপোষণের কথা, স্বামীর সামর্থ্য, স্ত্রীর অবস্থা আর সেই সময় ও দেশের প্রচলন অনুযায়ী।"
          },
          {
            "en": "Listen to the verse and one root returns three times: k-r-h, unwillingness and dislike. Karhan, the woman's unwillingness, opens it. Karihtumuhunna, if you dislike them, and takrahu shay'an, you dislike a thing, close it. The first is her will, which men had once overridden; the last two are the husband's dislike, which he is asked to hold in check. And the closing clause widens from them to a thing, so that it reads as a principle as much as a counsel about one marriage: perhaps you dislike a thing and Allah places in it much good.",
            "bn": "আয়াতটা মন দিয়ে শুনলে একটা ধাতু তিনবার ফিরে আসে: কাফ-রা-হা, অনিচ্ছা আর অপছন্দ। শুরুতে কারহা, নারীর অনিচ্ছা। শেষে কারিহতুমূহুন্না, যদি তাদের অপছন্দ করো, আর তাকরাহূ শাইআ, কোনো কিছু অপছন্দ করো। প্রথমটা নারীর নিজের ইচ্ছা, যা একসময় পুরুষেরা অগ্রাহ্য করত। পরের দুটো স্বামীর অপছন্দ, আর সেই অপছন্দকে সংযত রাখতে বলা হচ্ছে স্বামীকেই। শেষ বাক্যে কথাটা তাদের থেকে ছড়িয়ে যায় যেকোনো জিনিসে। তাই এটা এক বিয়ের উপদেশ যতটা, ততটাই এক সাধারণ নীতি: হতে পারে তোমরা কিছু অপছন্দ করছ, অথচ আল্লাহ তাতে অনেক কল্যাণ রেখেছেন।"
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
            "bn": "যদি না তারা স্পষ্ট ফাহিশা করে, এই ব্যতিক্রমের একাধিক ব্যাখ্যা আছে। ইবনে কাসীর ইবনে মাসউদ (রাঃ), ইবনে আব্বাস (রাঃ) আর প্রথম যুগের আরও বহু আলেম থেকে বর্ণনা করেন যে এর মানে অবৈধ যৌন সম্পর্ক। আবার ইবনে আব্বাস (রাঃ), ইকরিমা ও দাহহাক থেকে তিনি বর্ণনা করেন যে এর মানে নাফরমানি ও অবাধ্য আচরণ। তাঁর ভাষ্যে, ইবনে জারীর তাবারী শব্দটাকে ব্যাপক ধরেছেন, যার মধ্যে এসবই পড়ে, আর ইবনে কাসীর এই মতকে ভালো বলেছেন। আল-মুয়াসসার উদাহরণ হিসেবে জিনার কথা বলে। এই ব্যতিক্রম বাস্তবে কী অনুমতি দেয়, সে প্রশ্ন ফিকহের, আর এই লেখা তা আলেমদের হাতেই ছেড়ে দিচ্ছে।"
          },
          {
            "en": "As-Sa'di draws out what karhan leaves open. The verse forbids taking a widow against her will, so if she herself agrees to marry a relative of her late husband, that is not what the verse forbids. The line concerning a father's wives is drawn separately, three verses later, in 4:22. He then reads the command to live in kindness as reaching every good word and deed, so that a husband does not harm his wife, does good to her, and is gracious in how he deals with her.",
            "bn": "কারহা শব্দটা কী খোলা রাখে, আস-সাদী তা দেখান। আয়াত নিষেধ করেছে বিধবাকে তার অমতে নেওয়া। তাই সে নিজে যদি মৃত স্বামীর কোনো আত্মীয়কে বিয়ে করতে রাজি হয়, আয়াতটি সেটা নিষেধ করছে না। বাবার স্ত্রীদের ব্যাপারে সীমা টানা হয়েছে আলাদাভাবে, তিন আয়াত পরে, ৪:২২ আয়াতে। এরপর তিনি সদ্ভাবে বসবাসের আদেশকে প্রতিটি ভালো কথা আর ভালো কাজ পর্যন্ত বিস্তৃত করেন: স্বামী স্ত্রীকে কষ্ট দেবে না, তার উপকার করবে, আর তার সঙ্গে ব্যবহারে হবে কোমল।"
          },
          {
            "en": "On the closing clause the commentators point the same way and name different goods. Ibn Kathir says a husband's patience in keeping a wife he dislikes brings good for him in this life and the Hereafter, and he cites Ibn Abbas (RA): that he may come to feel tenderness for her, and Allah may give him a child by her in whom there is much good. As-Sa'di adds that the man who holds his home together against his feelings gains fine character in the struggle, and that dislike very often turns to love. Al-Muyassar says: if you dislike them for some worldly reason, be patient.",
            "bn": "শেষ বাক্যের ব্যাখ্যায় মুফাসসিররা একই দিকে ইশারা করেন, তবে একেকজন একেক কল্যাণের কথা বলেন। ইবনে কাসীর বলেন, অপছন্দের স্ত্রীকে ধরে রাখার এই সবর স্বামীর জন্য দুনিয়া ও আখিরাতে কল্যাণ বয়ে আনে। তিনি ইবনে আব্বাস (রাঃ)-এর কথা আনেন: হয়তো স্ত্রীর প্রতি তার মমতা জাগবে, আর আল্লাহ তার গর্ভে তাকে এমন সন্তান দেবেন, যার মধ্যে অনেক কল্যাণ। আস-সাদী যোগ করেন, নিজের মনের বিরুদ্ধে যে সংসার ধরে রাখে, এই লড়াইয়ে সে উত্তম চরিত্র অর্জন করে, আর অপছন্দ অনেক সময়ই ভালোবাসায় বদলে যায়। আল-মুয়াসসার বলে: দুনিয়াবি কোনো কারণে তাদের অপছন্দ করলে সবর করো।"
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
            "bn": "এই আয়াতের আলোচনায় ইবনে কাসীর নবী ﷺ-এর বাণী আনেন: তোমাদের মধ্যে সেই উত্তম, যে তার পরিবারের কাছে উত্তম, আর আমি আমার পরিবারের কাছে তোমাদের সবার চেয়ে উত্তম। ইমাম তিরমিযী আয়েশা (রাঃ) থেকে এটি বর্ণনা করেছেন। এরপর ইবনে কাসীর নবী ﷺ-এর নিজের ঘরের ছবি দেন: স্ত্রীদের সঙ্গে তিনি ছিলেন কোমল, হাসিখুশি, আমুদে আর দয়ালু। তাঁদের জন্য খরচ করতেন, তাঁদের সঙ্গে হাসতেন। আয়েশা (রাঃ) থেকে ইবনে কাসীর আরও বর্ণনা করেন, নবী ﷺ তাঁর সঙ্গে দৌড় প্রতিযোগিতা করেছিলেন, আর জিতেছিলেন আয়েশা (রাঃ) নিজে। তখনো তাঁর শরীর ভারী হয়নি। পরে আবার দৌড়ে নবী ﷺ জিতলেন, আর বললেন: এটা ওটার বদলে।"
          },
          {
            "en": "For the heart that has cooled, Ibn Kathir cites a second hadith, which Muslim records from Abu Hurayrah (RA): a believing man should not hate a believing woman; if he dislikes one trait in her, he will be pleased with another. The Arabic verb, la yafrak, names the particular aversion that can grow between spouses. The hadith does not tell the husband to pretend. It tells him to look again, and it is the practical form of the verse's own counsel, that Allah may have placed much good in what he dislikes.",
            "bn": "যে মনের টান কমে গেছে, তার জন্য ইবনে কাসীর আরেকটি হাদিস আনেন, যা ইমাম মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন: কোনো মুমিন পুরুষ যেন কোনো মুমিন নারীকে ঘৃণা না করে। তার একটা স্বভাব অপছন্দ হলে আরেকটা স্বভাবে সে খুশি হবে। আরবি ক্রিয়াটি লা ইয়াফরাক, যা বিশেষভাবে স্বামী-স্ত্রীর মাঝে জন্মানো বিতৃষ্ণা বোঝায়। হাদিসটি স্বামীকে ভান করতে বলে না। বলে আবার তাকিয়ে দেখতে। অপছন্দের জিনিসে আল্লাহ অনেক কল্যাণ রাখতে পারেন, আয়াতের এই উপদেশের হাতে-কলমে রূপ এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Stand Beside It",
          "bn": "সঙ্গে মিলিয়ে পড়ার আয়াত"
        },
        "p": [
          {
            "en": "2:228 is the verse Ibn Kathir sets beside the command of kindness: due to wives is similar to what is expected of them, according to what is reasonable. The same word, ma'ruf, carries both verses. 2:231 closes the door this verse closes, telling husbands not to keep their wives intending harm, to transgress against them, and saying that whoever does so has wronged himself. And 2:229, which Ibn Kathir also cites here, says it is not lawful to take back anything given to a wife unless both fear that they cannot keep within the limits of Allah.",
            "bn": "সদ্ভাবের আদেশের পাশে ইবনে কাসীর যে আয়াত রাখেন তা ২:২২৮: নিয়ম অনুযায়ী পুরুষদের যেমন নারীদের ওপর হক আছে, নারীদেরও তেমনি পুরুষদের ওপর হক আছে। দুই আয়াতেই আছে একই শব্দ, মা'রূফ। এই আয়াত যে দরজা বন্ধ করে, ২:২৩১ আয়াতও তা বন্ধ করে: ক্ষতি করার উদ্দেশ্যে বাড়াবাড়ি করে স্ত্রীদের আটকে রেখো না, যে এমন করে সে নিজের ওপরই জুলুম করে। আর ২:২২৯, যা ইবনে কাসীর এখানেই উল্লেখ করেন, বলে: স্ত্রীকে যা দেওয়া হয়েছে তার কিছুই ফেরত নেওয়া বৈধ নয়, তবে যদি দুজনেরই আশঙ্কা হয় যে তারা আল্লাহর সীমা রক্ষা করতে পারবে না।"
          },
          {
            "en": "2:216 carries the closing clause into another field. There it follows the command to fight, which was hateful to the believers: perhaps you hate a thing and it is good for you, and perhaps you love a thing and it is bad for you, and Allah knows while you know not. The same root k-r-h is there, which shows the principle is not about marriage alone. 30:21 then names what a marriage is meant to hold: mates from among yourselves in whom to find tranquillity, with affection and mercy placed between you. Kindness in 4:19 is the daily work of keeping that mercy alive.",
            "bn": "শেষ বাক্যটিকে ২:২১৬ আয়াত নিয়ে যায় আরেক ক্ষেত্রে। সেখানে কথাটা আসে যুদ্ধের আদেশের পরে, যা মুমিনদের কাছে অপ্রিয় ছিল: হতে পারে তোমরা কিছু অপছন্দ করো অথচ তা তোমাদের জন্য কল্যাণকর, আর কিছু পছন্দ করো অথচ তা অকল্যাণকর, আর আল্লাহ জানেন, তোমরা জানো না। সেখানেও একই কাফ-রা-হা ধাতু, তাই নীতিটা শুধু বিয়ের নয়। ৩০:২১ আয়াত বলে দেয় বিয়ে কী ধরে রাখার জন্য: তোমাদের মধ্য থেকেই সঙ্গী, যাতে তার কাছে শান্তি পাও, আর তোমাদের মাঝে রাখা হয়েছে ভালোবাসা ও দয়া। ৪:১৯ আয়াতের সদ্ভাব সেই দয়াকে রোজ বাঁচিয়ে রাখার কাজ।"
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
            "bn": "প্রথম প্রয়োগটাই সবচেয়ে সরল। ইবনে কাসীরের বর্ণনা থেকে একজন স্বামী সাধারণ একটা সপ্তাহের জন্য তালিকা বানিয়ে নিতে পারেন: ঘরে ঢুকে নরম একটা কথা, সন্ধ্যায় একটু গল্প করার সময়, স্ত্রীর জন্য নিজেকে পরিপাটি রাখা, ঠিক যেমন নিজে তার কাছে তা চান, আর সামর্থ্য অনুযায়ী সংসারের খরচ, যেন তাকে বারবার চাইতে না হয়। এর কোনোটার জন্যই বড় কোনো সংকট লাগে না। আয়াতে বিল মা'রূফ বসবাস বলতে এগুলোই বোঝায়। আর এগুলোই সহজে বাদ পড়ে যায়, কারণ ঘরের বাইরের কেউ কখনো টেরও পায় না।"
          },
          {
            "en": "The prohibition has its application too. A widow can still find herself pressed by her late husband's family over whom she may marry or over the share she inherited, and a wife can be worn down until she gives up a dowry that is hers. Pressure of that kind, by silence, withholding or hardship, is what this verse describes and forbids, whatever name is given to it. Where there is a real dispute, the way forward lies with the law the Quran sets out and the scholars who explain it, not with quiet pressure at home.",
            "bn": "নিষেধেরও প্রয়োগ আছে। স্বামী মারা যাওয়ার পর কোনো বিধবা আজও শ্বশুরবাড়ির চাপে পড়তে পারেন: কাকে বিয়ে করবেন তা নিয়ে, কিংবা মিরাসে পাওয়া অংশ নিয়ে। কোনো স্ত্রীকেও এমনভাবে ক্লান্ত করে ফেলা যায় যে তিনি নিজের পাওনা মোহর ছেড়ে দেন। চুপ করে থেকে, কিছু আটকে রেখে বা কষ্ট দিয়ে এমন চাপ দেওয়া হলে, তাকে যে নামেই ডাকা হোক, এই আয়াত ঠিক সেটার কথাই বলছে, আর তা নিষেধ করছে। সত্যিকারের বিরোধ থাকলে সমাধান কুরআনের দেওয়া বিধান আর তার ব্যাখ্যাকারী আলেমদের কাছে, ঘরের ভেতরের নীরব চাপে নয়।"
          },
          {
            "en": "For the season when affection has thinned, the hadith gives a practice. Write down the traits in her that you are pleased with, as the Prophet ﷺ said you will find them. Keep being kind while the feeling returns, not only after it has. Ask Allah to show you the good He may have placed in what you dislike. The verse does not promise that every hard marriage will turn sweet. It holds out the hope of much good, and the fuller law of what follows, from 4:20-21 onward, is there for the cases where the marriage cannot hold.",
            "bn": "ভালোবাসা যখন ফিকে হয়ে আসে, সেই সময়ের জন্য হাদিসটি একটা আমল শিখিয়ে দেয়। স্ত্রীর যে স্বভাবগুলোতে আপনি খুশি, সেগুলো লিখে ফেলুন। নবী ﷺ তো বলেছেন, এমন স্বভাব আপনি পাবেন। শুধু অনুভূতি ফিরে আসার পরে নয়, ফিরে আসার পথেও ভালো ব্যবহার চালিয়ে যান। আল্লাহর কাছে চান, যা আপনার অপছন্দ, তাতে হয়তো তিনি কল্যাণ রেখেছেন; সেটা যেন তিনি আপনাকে দেখিয়ে দেন। আয়াত কথা দেয় না যে প্রতিটি কঠিন বিয়ে মধুর হয়ে উঠবে। আয়াত দেয় অনেক কল্যাণের আশা। আর যেখানে সংসার টেকে না, তার জন্য ৪:২০ ও ৪:২১ আয়াত থেকে শুরু করে পরের বিস্তারিত বিধান রয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Home",
          "bn": "ঘরের জন্য একটি দোয়া"
        },
        "p": [
          {
            "en": "The Quran itself gives a prayer for this. In 25:74 the servants of the Most Merciful say: our Lord, grant us from among our wives and offspring comfort to our eyes, and make us a leader for the righteous. It asks for a home that is a comfort to the eyes, and in the same breath it asks that the one praying become an example. A husband who wants the first has to work at the second, and the command to live in kindness is where that work begins.",
            "bn": "কুরআন নিজেই এর জন্য একটা দোয়া শিখিয়েছে। ২৫:৭৪ আয়াতে রহমানের বান্দারা বলে: হে আমাদের রব, আমাদের স্ত্রী ও সন্তানদের দিয়ে আমাদের চোখ জুড়িয়ে দিন, আর আমাদের মুত্তাকীদের নেতা বানান। দোয়াটা এমন একটা ঘর চায়, যা চোখ জুড়ায়। আর সঙ্গে সঙ্গেই চায়, দোয়াকারী নিজে আদর্শ হোক। যে স্বামী প্রথমটা চান, দ্বিতীয়টার জন্য তাকে খাটতে হয়। সেই খাটুনি শুরু হয় সদ্ভাবে বসবাসের আদেশ মানা থেকে।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, make me one who lives with his family in kindness. Do not let me take from anyone by pressure what You have made theirs. When my heart dislikes a thing, show me the good You have placed in it, and give me patience until I see it. And make me good to my family, as Your Messenger ﷺ was the best of people to his.",
            "bn": "আয়াতের নিজের শব্দ দিয়ে গড়া একটি দোয়া। এটা এখানে সেভাবেই দেওয়া হলো, বর্ণিত কোনো দোয়া হিসেবে নয়: হে আল্লাহ, আমাকে এমন বানান, যে পরিবারের সঙ্গে সদ্ভাবে বসবাস করে। আপনি যা কারও প্রাপ্য করেছেন, চাপ দিয়ে তা কেড়ে নিতে আমাকে দেবেন না। আমার মন কোনো কিছু অপছন্দ করলে, তাতে আপনি যে কল্যাণ রেখেছেন তা আমাকে দেখিয়ে দিন, আর তা দেখা পর্যন্ত আমাকে সবর দিন। আর আপনার রাসূল ﷺ যেমন নিজের পরিবারের কাছে সবচেয়ে উত্তম মানুষ ছিলেন, আমাকেও আমার পরিবারের কাছে ভালো বানান।"
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
            "bn": "এই অংশ থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। ঘরের কারও প্রতি আমার অনুভূতি বদলে গেলে আমার ভালো ব্যবহারও কি বদলে যায়, নাকি টিকে থাকে? স্ত্রী, মা বা বিধবা কোনো আত্মীয়, এমন কেউ কি আছেন, যার কাছ থেকে আমি বা আমার পরিবার হক দিয়ে নয়, চাপ দিয়ে কিছু নিয়েছি? এই সপ্তাহে আমি তার জন্য সবচেয়ে ভালো কী করেছি, আমার স্ত্রীকে জিজ্ঞেস করলে উত্তর দিতে কি তাকে অনেক ভাবতে হবে?"
          },
          {
            "en": "Which trait in the person I find hardest to live with have I stopped noticing, because I only count what I dislike? And when I call my marriage a covenant, as 4:21 does, do I mean a promise made before Allah that I keep in lean seasons too, or only terms I am willing to keep for as long as they suit me?",
            "bn": "যার সঙ্গে থাকা আমার কাছে সবচেয়ে কঠিন, তার কোন ভালো স্বভাব আমার চোখে পড়া বন্ধ হয়ে গেছে, কারণ আমি শুধু অপছন্দের জিনিসগুলো গুনি? আর ৪:২১ আয়াতের মতো আমি যখন বিয়েকে অঙ্গীকার বলি, তখন কি বোঝাই আল্লাহর সামনে দেওয়া এমন ওয়াদা, যা কঠিন সময়েও রাখি, নাকি এমন শর্ত, যা সুবিধা থাকা পর্যন্তই মানি?"
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
            "bn": "সূরা নিসা মাদানি, আর সূরার এই অংশে বিয়ের বিধান ধাপে ধাপে গড়ে উঠছে। ৪:২২ ও ৪:২৩ আয়াত সেই নারীদের নাম বলে, যাদের কোনো পুরুষ কখনো বিয়ে করতে পারে না। ৪:২৪ আয়াত তাদের সঙ্গে যোগ করে অন্যের স্ত্রীদের, তারপর বাকিদের হালাল ঘোষণা করে তাদের জন্য, যারা নিজেদের সম্পদ দিয়ে তাদের বিয়ে করতে চায়, সতীত্ব রক্ষার জন্য, অবৈধ সম্পর্কের জন্য নয়। সে আয়াত ধরেই নেয় যে পুরুষটির দেওয়ার মতো সম্পদ আছে। আমাদের আয়াত সঙ্গে সঙ্গে তাকায় তার দিকে, যার তা নেই। তার জন্য আইনে কী রাখা আছে?"
          },
          {
            "en": "The verses that follow give the spirit of the passage. 4:26 says Allah wants to make things clear to you, to guide you to the ways of those before you and to accept your repentance, and 4:28 says Allah wants to lighten your burden, for mankind was created weak. This verse is one of those lightenings. It speaks into a society in which slavery was an existing institution, and it legislates for that society as it was. Ibn Kathir's commentary gives it no occasion of revelation, so it is read from its words and its place.",
            "bn": "পরের আয়াতগুলো গোটা অংশের মর্ম বলে দেয়। ৪:২৬ আয়াত বলে, আল্লাহ তোমাদের কাছে বিধান স্পষ্ট করতে চান, তোমাদের আগের লোকদের পথ দেখাতে চান, তোমাদের তওবা কবুল করতে চান। ৪:২৮ আয়াত বলে, আল্লাহ তোমাদের ভার হালকা করতে চান, কারণ মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে। এই আয়াত সেই ভার হালকা করারই একটি। যে সমাজে দাসপ্রথা তখন চালু ব্যবস্থা ছিল, আয়াত সেই সমাজকে সম্বোধন করে, আর সমাজটা যেমন ছিল তার জন্যই বিধান দেয়। ইবনে কাসীরের তাফসীরে এর কোনো শানে নুযূল নেই। তাই আয়াতকে পড়তে হয় তার শব্দ আর তার অবস্থান থেকে।"
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
            "bn": "আয়াত শুরু হয় মান লাম ইয়াসতাতি' মিনকুম তাওলান দিয়ে, তোমাদের মধ্যে যার তাওল নেই। তাওল শব্দটা দৈর্ঘ্য বোঝানো শব্দের একই মূল থেকে এসেছে, এর মানে সামর্থ্যের প্রাচুর্য। ইবনে কাসীর এখানে এর ব্যাখ্যা করেছেন আর্থিক সামর্থ্য দিয়ে, অর্থাৎ স্বাধীন মুমিন নারীকে বিয়ে করার সংগতি। তাঁর বিস্তারিত তাফসীরে আছে, ইমাম তাবারী তাওলের একটি পুরোনো ব্যাখ্যা এনেছিলেন, যাতে এর মানে বলা হয়েছিল বাসনা। তারপর তিনি সে ব্যাখ্যা খণ্ডন করেন। আয়াতের কথা পুরুষটির সামর্থ্য নিয়ে, তার মন কোন দিকে টানে তা নিয়ে নয়।"
          },
          {
            "en": "Then one root runs through the verse. The letters h-s-n, whose noun hisn is a fortress, appear four times in its Arabic. Al-muhsanat al-mu'minat at the start are free believing women. Muhsanat in the middle describes the bondwomen themselves as chaste, and the verse spells out what that excludes: women who commit open fornication and women who take secret lovers. Fa-idha uhsinna, once they are married, uses the root again, and Ibn Kathir reports from Ibn Abbas (RA) that it means their marriage. The fourth occurrence returns to free women in the ruling on punishment.",
            "bn": "এরপর একটি মূল গোটা আয়াত জুড়ে চলে। হা-সোয়াদ-নূন, যার বিশেষ্য হিসন মানে দুর্গ, আরবি আয়াতে এসেছে চারবার। শুরুতে আল-মুহসানাতুল মু'মিনাত মানে স্বাধীন মুমিন নারী। মাঝখানে মুহসানাত বলা হয়েছে দাসীদেরই, অর্থাৎ তারা সচ্চরিত্রা হবে। আয়াত খুলে বলে দেয় এর বাইরে কারা: প্রকাশ্যে ব্যভিচারে লিপ্ত নারী আর গোপন প্রেমিক রাখা নারী। ফাইযা উহসিন্না, বিয়ে হয়ে যাওয়ার পর, সেখানে মূলটা আবার ফিরে আসে। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, এর মানে তাদের বিয়ে হয়ে যাওয়া। চতুর্থবার শব্দটা শাস্তির বিধানে আবার স্বাধীন নারীদের কথা বলে।"
          },
          {
            "en": "The bondwomen are called fatayatikum al-mu'minat, your believing young women. Fatat is the ordinary word for a young woman, and the Sunnah reaches for the same word. Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said that none of you should say my slave or my slave-girl, but should say my young man and my young woman. Whatever else the verse regulates, it speaks of the women concerned first as believers, in a word that carries no contempt.",
            "bn": "দাসীদের এখানে বলা হয়েছে ফাতায়াতিকুমুল মু'মিনাত, তোমাদের মুমিন তরুণীরা। ফাতাত সাধারণভাবে তরুণী বোঝানোর শব্দ, আর সুন্নাহও এই শব্দটাই বেছে নেয়। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন, তোমাদের কেউ যেন আমার দাস, আমার দাসী না বলে, বরং বলে আমার যুবক, আমার তরুণী। আয়াত আর যে বিধানই দিক, এই নারীদের কথা বলে সবার আগে মুমিন হিসেবে, এমন এক শব্দে, যাতে তুচ্ছতার কোনো ছোঁয়া নেই।"
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
            "bn": "অনুমতির মাঝখানে এমন একটা বাক্য আসে, যা আসলে কোনো শর্তই নয়: ওয়াল্লাহু আ'লামু বিঈমানিকুম, বা'দুকুম মিম বা'দ, আল্লাহ তোমাদের ঈমান সবচেয়ে ভালো জানেন, তোমরা একে অন্যের থেকেই। ইবনে কাসীর ব্যাখ্যা করেন, সব কিছুর আসল অবস্থা আর গোপন কথা আল্লাহ জানেন, মানুষ জানে কেবল বাইরেরটুকু। এর বাস্তব দিকটা তিনি বের করেন পরের অংশ থেকে। তিনি বলেন, তাদের মোহর খুশিমনে দিয়ে দাও। তারা অন্যের মালিকানায় আছে বলে ব্যাপারটাকে ছোট করে দেখে তার কিছুই আটকে রেখো না।"
          },
          {
            "en": "Ibn Kathir then sets out the conditions as the verse gives them. With the permission of their people means, he says, that the owner is responsible for her, so she may not marry without his permission. She is to be chaste. If, once married, she commits indecency, her punishment is half that of free women, and he explains that this can only be a punishment that divides in half, which is flogging. The allowance, he adds, is for the man who fears for his chastity and finds restraint too hard.",
            "bn": "এরপর ইবনে কাসীর শর্তগুলো সাজিয়ে দেন, ঠিক যেভাবে আয়াতে আছে। 'তাদের অভিভাবকদের অনুমতি নিয়ে', তিনি বলেন, এর মানে দাসীর দায়িত্ব তার মালিকের, তাই মালিকের অনুমতি ছাড়া তার বিয়ে হতে পারে না। সে হবে সচ্চরিত্রা। বিয়ের পর যদি সে অশ্লীল কাজ করে, তাহলে তার শাস্তি স্বাধীন নারীদের অর্ধেক। ইবনে কাসীর ব্যাখ্যা করেন, এটা কেবল এমন শাস্তিই হতে পারে যা অর্ধেক করা যায়, অর্থাৎ বেত্রাঘাত। তিনি আরও বলেন, এই অনুমতি সেই পুরুষের জন্য, যে নিজের সতীত্ব নিয়ে ভয় পায় আর সংযম রাখা যার জন্য খুব কঠিন।"
          },
          {
            "en": "The commentators did not all read the conditions alike. Ibn Kathir records that the majority took two of them as binding: inability to marry a free woman, and fear of falling into sin. He records that Abu Hanifa and his companions held a wider view, and he says the outward sense of the verse supports the majority. On the closing counsel he gives a reason of that time: children born of such a marriage would belong to the woman's owner. This page records the difference and does not settle a ruling.",
            "bn": "শর্তগুলো সব মুফাসসির একইভাবে পড়েননি। ইবনে কাসীর উল্লেখ করেন, অধিকাংশ আলেম দুটো শর্তকে বাধ্যতামূলক ধরেছেন: স্বাধীন নারীকে বিয়ে করার অক্ষমতা, আর গুনাহে পড়ার ভয়। তিনি এটাও উল্লেখ করেন যে ইমাম আবু হানিফা ও তাঁর সঙ্গীরা আরও প্রশস্ত মত রাখতেন, আর তিনি নিজে বলেন, আয়াতের বাহ্যিক অর্থ অধিকাংশের মতকেই সমর্থন করে। শেষের পরামর্শের পেছনে তিনি সে যুগের একটা কারণ দেখান: এমন বিয়েতে জন্মানো সন্তান ওই নারীর মালিকের অধীন হতো। এই লেখা মতভেদটা শুধু তুলে ধরছে, কোনো ফতোয়ার মীমাংসা করছে না।"
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
            "bn": "আয়াত শেষ হয় এভাবে: ওয়া আন তাসবিরূ খাইরুল্লাকুম, ওয়াল্লাহু গাফূরুর রাহীম, আর ধৈর্য ধরা তোমাদের জন্য উত্তম, আল্লাহ ক্ষমাশীল, পরম দয়ালু। আত-তাফসীরুল মুয়াসসার বলে, এখানে ধৈর্য মানে সতীত্ব রক্ষা করে দাসী বিয়ে থেকে বিরত থাকা, আর একেই বলে উত্তম ও অধিক মর্যাদার পথ। শেষের নাম দুটোতে তাফসীরটি অনুমতির ভেতরেই রহমত দেখে: স্বাধীন নারীকে বিয়ে করা যখন সাধ্যের বাইরে, তখন এমন বিয়ের অনুমতি দিয়েই আল্লাহ তোমাদের প্রতি ক্ষমাশীল ও দয়ালু।"
          },
          {
            "en": "The Sunnah speaks to the man in this verse in the same order. Al-Bukhari records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: O young men, whoever among you is able to marry, let him marry, for it lowers the gaze more and guards chastity more; and whoever is not able, let him fast, for it is a shield for him. Marriage comes first where it is possible. Where it is not, restraint is not left as bare waiting. It is given a practice that carries it.",
            "bn": "এই আয়াতের পুরুষটির সঙ্গে সুন্নাহও কথা বলে একই ক্রমে। ইমাম বুখারী আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন: হে যুবকেরা, তোমাদের মধ্যে যার বিয়ের সামর্থ্য আছে, সে যেন বিয়ে করে, কারণ তা দৃষ্টিকে বেশি নত রাখে আর লজ্জাস্থানকে বেশি হেফাজত করে। আর যার সামর্থ্য নেই, সে যেন রোজা রাখে, কারণ রোজা তার জন্য ঢাল। যেখানে সম্ভব, সেখানে আগে বিয়ে। যেখানে সম্ভব নয়, সেখানে সংযম মানে শুধু হাত গুটিয়ে অপেক্ষা নয়। তাকে টিকিয়ে রাখার জন্য একটা আমলও দেওয়া আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Quran Takes This Further",
          "bn": "কুরআন যেখানে কথাটা আরও এগিয়ে নেয়"
        },
        "p": [
          {
            "en": "24:32 commands the community to marry off the unmarried among them and the righteous among their male and female slaves, and promises that if they are poor Allah will enrich them from His bounty. 24:33 then gives the counsel of our verse's close to everyone: let those who find no means to marry keep chaste until Allah enriches them. The same verse orders a written contract of freedom for slaves who seek one, if there is good in them, and a gift toward it from Allah's wealth.",
            "bn": "২৪:৩২ আয়াত সমাজকে আদেশ দেয়, তোমাদের মধ্যে যারা অবিবাহিত তাদের বিয়ে দাও, আর তোমাদের সৎ দাস-দাসীদেরও। সঙ্গে প্রতিশ্রুতি দেয়, তারা গরিব হলে আল্লাহ নিজের অনুগ্রহে তাদের অভাবমুক্ত করবেন। এরপর ২৪:৩৩ আয়াত আমাদের আয়াতের শেষের পরামর্শটাই সবার জন্য বলে: যাদের বিয়ের সম্বল নেই, তারা যেন সংযম রাখে, যতক্ষণ না আল্লাহ তাদের অভাবমুক্ত করেন। একই আয়াত আদেশ দেয়, যে দাস-দাসী মুক্তির লিখিত চুক্তি চায়, তাদের মধ্যে কল্যাণ দেখলে তাদের সঙ্গে চুক্তি করো, আর আল্লাহর দেওয়া সম্পদ থেকে তাদের কিছু দাও।"
          },
          {
            "en": "2:221 had already said that a believing slave woman is better than a polytheist woman, even though the latter might please you, so faith outranks both freedom and attraction. 4:28, three verses on from ours, names the reason for allowances like this one: Allah wants to lighten your burden, and mankind was created weak. And 90:13 names the freeing of a slave as the first of the deeds that make up the steep path a person is urged to climb.",
            "bn": "২:২২১ আয়াত আগেই বলেছিল, মুমিন দাসী মুশরিক নারীর চেয়ে উত্তম, ওই নারীকে যতই ভালো লাগুক। অর্থাৎ ঈমান স্বাধীনতার চেয়েও ওপরে, আকর্ষণের চেয়েও ওপরে। আমাদের আয়াতের তিন আয়াত পরে ৪:২৮ আয়াত এ ধরনের ছাড়ের কারণটা বলে দেয়: আল্লাহ তোমাদের ভার হালকা করতে চান, আর মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে। আর ৯০:১৩ আয়াতে যে দুর্গম গিরিপথে উঠতে মানুষকে ডাকা হয়েছে, তার প্রথম কাজই দাসমুক্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Wait Before Marriage",
          "bn": "বিয়ের আগের অপেক্ষা"
        },
        "p": [
          {
            "en": "The institution this verse regulates has passed out of most of the world, but the man it addresses has not. He wants to marry, he cannot yet afford it, and he fears for himself. The verse neither shames him nor leaves him to fall into what is unlawful. It looks for a lawful path within his means, and then it tells him, gently, that patience is better. A young person in that position today can take both halves: seek the lawful way that is truly within reach, and fill the wait with fasting, a lowered gaze and work toward the means.",
            "bn": "এই আয়াত যে ব্যবস্থার বিধান দেয়, পৃথিবীর বেশির ভাগ জায়গা থেকে তা উঠে গেছে। কিন্তু আয়াত যে পুরুষকে সম্বোধন করে, সে রয়ে গেছে। সে বিয়ে করতে চায়, এখনো সামর্থ্য নেই, আর নিজেকে নিয়ে ভয় পায়। আয়াত তাকে লজ্জা দেয় না, আবার হারামে পড়তেও ছেড়ে দেয় না। তার সাধ্যের মধ্যে একটা হালাল পথ খোঁজে, তারপর নরম সুরে বলে, সবরই ভালো। আজ এমন অবস্থায় থাকা তরুণ দুটো অংশই নিতে পারেন। যে হালাল পথ সত্যিই নাগালে, সেটা খুঁজুন। আর অপেক্ষাটা ভরিয়ে তুলুন রোজা, নত দৃষ্টি আর সামর্থ্য গড়ার পরিশ্রম দিয়ে।"
          },
          {
            "en": "The verse also has a word for the people around him. Its first question is about means, and 24:32 makes helping the unmarried to marry a duty of the community, not a private problem. A family that measures a proposal by lineage and display before faith has reversed the order of this verse, which named faith in the middle of a law about status. Whoever is asked to judge a match can ask the verse's own question first: what does this person carry of faith? Allah knows it best, but its signs can be seen.",
            "bn": "আশপাশের মানুষদের জন্যও আয়াতের কথা আছে। এর প্রথম প্রশ্ন সামর্থ্য নিয়ে, আর ২৪:৩২ আয়াত অবিবাহিতদের বিয়েতে সাহায্য করাকে কারও ব্যক্তিগত সমস্যা নয়, গোটা সমাজের দায়িত্ব বানিয়েছে। যে পরিবার বিয়ের প্রস্তাব মাপে আগে বংশ আর জাঁকজমক দিয়ে, ঈমান দিয়ে পরে, সে এই আয়াতের ক্রমটা উল্টে দিয়েছে। অথচ আয়াত মর্যাদা নিয়ে এক বিধানের ঠিক মাঝখানে ঈমানের নাম নিয়েছে। কোনো সম্বন্ধ বিচার করতে বলা হলে আগে আয়াতের নিজের প্রশ্নটাই করা যায়: এই মানুষটার ঈমান কেমন? তা সবচেয়ে ভালো জানেন আল্লাহ, তবে তার আলামত চোখে পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for Chastity and Sufficiency",
          "bn": "সতীত্ব আর সচ্ছলতার দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah holds a du'a that gathers the two needs of this verse, chastity and means. Muslim records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ used to say: Allahumma inni as'aluka al-huda wat-tuqa wal-'afafa wal-ghina, O Allah, I ask You for guidance, piety, chastity and sufficiency. The man of this verse lacked sufficiency and feared for his chastity. The Prophet ﷺ asked for both, and placed them after guidance and piety, which make both of them good.",
            "bn": "সুন্নাহয় এমন একটা দোয়া আছে, যাতে এই আয়াতের দুই প্রয়োজন একসঙ্গে আছে, সতীত্ব আর সামর্থ্য। ইমাম মুসলিম আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলতেন: আল্লাহুম্মা ইন্নী আসআলুকাল হুদা ওয়াত-তুকা ওয়াল-আফাফা ওয়াল-গিনা, হে আল্লাহ, আমি আপনার কাছে হিদায়াত, তাকওয়া, চারিত্রিক পবিত্রতা আর সচ্ছলতা চাই। এই আয়াতের পুরুষটির সচ্ছলতা ছিল না, আর সে নিজের সতীত্ব নিয়ে ভয় পাচ্ছিল। নবী ﷺ দুটোই চেয়েছেন, আর দুটোকে রেখেছেন হিদায়াত ও তাকওয়ার পরে, যা এ দুটোকে কল্যাণময় করে তোলে।"
          },
          {
            "en": "Alongside it, a short supplication composed in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, if You have delayed for me the means, give me the patience You called better; keep me chaste until You enrich me from Your bounty; let me weigh people by their faith, as You weigh them; and You are the Forgiving, the Merciful, so forgive what I fell short in while I waited.",
            "bn": "এর পাশাপাশি আয়াতের নিজের শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমার সামর্থ্য যদি আপনি দেরিতে দিতে চান, তাহলে আমাকে সেই সবর দিন, যাকে আপনি উত্তম বলেছেন। নিজের অনুগ্রহে অভাবমুক্ত না করা পর্যন্ত আমাকে পবিত্র রাখুন। আমাকে মানুষ মাপতে শেখান ঈমান দিয়ে, যেভাবে আপনি মাপেন। আর আপনি ক্ষমাশীল, পরম দয়ালু, তাই অপেক্ষার দিনগুলোতে আমার যা ত্রুটি হয়েছে তা মাফ করে দিন।"
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
            "bn": "হালাল অথচ এখনো সাধ্যের বাইরে, এমন কী আমি চাই? আমি কি সবর নিয়ে তার জন্য অপেক্ষা করছি, নাকি ক্ষোভ নিয়ে? কোনো সহজ পথ জায়েজ থাকলে আমি কি কখনো নিজেকে জিজ্ঞেস করি, এই আয়াত যেমন করে, সবর করাই আমার জন্য ভালো কি না? নবী ﷺ যেমন রোজার কথা বলে দিয়েছেন, তেমন কোন আমলের ওপর ভর দিয়ে আমার সংযম দাঁড়িয়ে আছে? নাকি সংযমকে একাই সব ভার বইতে ছেড়ে দিয়েছি?"
          },
          {
            "en": "When I look at a person whose place in the world is lower than mine, do I remember that Allah knows best their faith and that we are of one another? Have I ever given someone less than their due, or given it grudgingly, because of who they are? And if I have a say in someone else's marriage, am I making the way easier for them, or harder than Allah has made it?",
            "bn": "দুনিয়ায় যার অবস্থান আমার চেয়ে নিচে, তার দিকে তাকালে কি মনে থাকে যে তার ঈমান আল্লাহই সবচেয়ে ভালো জানেন, আর আমরা একে অন্যের থেকেই? মানুষটা কে, তা দেখে কি কখনো কাউকে তার প্রাপ্যের চেয়ে কম দিয়েছি, কিংবা অখুশি মনে দিয়েছি? আর অন্য কারও বিয়েতে আমার যদি কোনো মত দেওয়ার থাকে, আমি কি তার পথ সহজ করছি, নাকি আল্লাহ যতটা রেখেছেন তার চেয়ে কঠিন করে তুলছি?"
          }
        ]
      }
    ]
  },
  "4:36": {
    "sections": [
      {
        "h": {
          "en": "Worship Before Every Other Right",
          "bn": "সব হকের আগে ইবাদত"
        },
        "p": [
          {
            "en": "The verse follows the rulings on discord in a marriage and the two arbiters of 4:35. Ma'arif al-Qur'an observes that the surah has dealt with rights from its start, those of orphans, women and heirs, and now turns to parents, relatives, neighbours and people at large. It opens that roster with tawhid, and gives the reason: a person careless of Allah's rights will find excuses with everyone else's, while the fear of Allah makes him honour a right whether anyone is watching or not.",
            "bn": "আয়াতটি এসেছে দাম্পত্য কলহের বিধান আর ৪:৩৫ আয়াতের দুই সালিসের কথার ঠিক পরে। মাআরিফুল কুরআন লক্ষ করে, সূরাটি শুরু থেকেই হক নিয়ে কথা বলছে: এতিমের হক, নারীর হক, ওয়ারিসের হক। এবার পালা বাবা-মা, আত্মীয়, প্রতিবেশী আর সাধারণ মানুষের। এই তালিকা খোলে তাওহিদ দিয়ে, আর মাআরিফ এর কারণও বলে দেয়। আল্লাহর হকের ব্যাপারে যে উদাসীন, অন্যের হকের বেলায় সে কোনো না কোনো অজুহাত খুঁজে নেবে। আল্লাহর ভয়ই মানুষকে হক আদায়ে বেঁধে রাখে, কেউ দেখুক বা না দেখুক।"
          },
          {
            "en": "As-Sa'di defines the worship commanded as entering under servanthood to Allah, yielding to His commands and prohibitions out of love, humility and sincerity. The shirk forbidden, he says, is all of it, lesser or greater, with no angel, prophet or saint as partner. Al-Qurtubi records that the scholars agree the verse is muhkam, with nothing in it abrogated, and calls it a foundation for keeping deeds purely for Allah, free of showing off.",
            "bn": "সা'দী আদিষ্ট ইবাদতের সংজ্ঞা দেন এভাবে: আল্লাহর দাসত্বের অধীনে ঢুকে পড়া, ভালোবাসা, বিনয় আর ইখলাসের সঙ্গে তাঁর আদেশ-নিষেধ মেনে নেওয়া। তাঁর মতে নিষিদ্ধ শিরক ছোট-বড় সবটাই। ফেরেশতা, নবী, ওলি, কাউকেই শরিক করা চলবে না। কুরতুবী জানান, আলেমরা একমত যে আয়াতটি মুহকাম, এর কোনো অংশ মানসুখ নয়। তিনি একে বলেছেন আমলকে খাঁটিভাবে আল্লাহর জন্য রাখার মূল ভিত্তি, যেখানে লোক দেখানোর কোনো মিশ্রণ থাকবে না।"
          },
          {
            "en": "Al-Baghawi and Ibn Kathir both bring a hadith here, which al-Bukhari records (2856). Mu'adh (RA) said: I was riding behind the Prophet ﷺ on a donkey called 'Ufayr, and he said, 'Mu'adh, do you know Allah's right over His servants, and the servants' right over Allah?' I said, Allah and His Messenger know best. He said, 'Allah's right over the servants is that they worship Him and associate nothing with Him, and the servants' right over Allah is that He not punish whoever associates nothing with Him.' I said, Messenger of Allah, shall I not give people the good news? He said, 'Do not, lest they rely on it.'",
            "bn": "এই জায়গায় বাগাভী ও ইবন কাসীর দুজনেই একটি হাদিস আনেন, যা ইমাম বুখারী বর্ণনা করেছেন (২৮৫৬)। মুআয (রাঃ) বলেন: আমি উফাইর নামের এক গাধার পিঠে নবী ﷺ-এর পেছনে বসা ছিলাম। তিনি বললেন, 'হে মুআয, তুমি কি জানো বান্দাদের ওপর আল্লাহর হক কী, আর আল্লাহর ওপর বান্দাদের হক কী?' আমি বললাম, আল্লাহ ও তাঁর রাসূলই ভালো জানেন। তিনি বললেন, 'বান্দাদের ওপর আল্লাহর হক হলো, তারা তাঁর ইবাদত করবে আর কোনো কিছুকে তাঁর শরিক করবে না। আর আল্লাহর ওপর বান্দাদের হক হলো, যে তাঁর সঙ্গে কিছু শরিক করে না, তাকে তিনি শাস্তি দেবেন না।' আমি বললাম, হে আল্লাহর রাসূল, আমি কি লোকদের এই সুসংবাদ দেব না? তিনি বললেন, 'দিয়ো না, তাহলে তারা এর ওপরই ভরসা করে বসে থাকবে।'"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan, Not Merely Dues",
          "bn": "পাওনার চেয়ে বেশি: ইহসান"
        },
        "p": [
          {
            "en": "As-Sa'di marks the turn: having commanded His worship and His right, Allah commands the rights of His servants, the nearest and then the next nearest. First come the parents, wa bil-walidayni ihsana. At-Tabari reads it as and He commanded you regarding parents ihsan, meaning dutiful kindness, and says ihsan ends in the accusative because it is a command to hold fast to doing good, by way of urging.",
            "bn": "সা'দী এখানে মোড়টা ধরিয়ে দেন। নিজের ইবাদত আর নিজের হকের আদেশ দেওয়ার পর আল্লাহ আদেশ দিচ্ছেন বান্দাদের হক আদায়ের, যে যত কাছের সে তত আগে। প্রথমে বাবা-মা: ওয়া বিল-ওয়ালিদাইনি ইহসানা। তাবারী এর অর্থ করেন, আর তিনি তোমাদের বাবা-মার ব্যাপারে ইহসানের আদেশ দিয়েছেন, মানে তাঁদের সঙ্গে সদাচরণ। তিনি বলেন, ইহসান শব্দের শেষে যবর এসেছে, কারণ কথাটা ইহসান আঁকড়ে থাকার আদেশ, উদ্বুদ্ধ করার ভঙ্গিতে বলা।"
          },
          {
            "en": "The Arabic sets bi- before the parents and again before the kin, wa bi-dhi l-qurba; from the orphans on, the names follow with wa alone. The commentators carry the ihsan down the list. At-Tabari reads the kin clause as and He also commanded regarding the kin, ihsan, by keeping the tie, and after the needy he sums up: take My counsel to do these good. Al-Qurtubi records that Ibn Abi 'Abla read ihsanun, meaning doing them good is a duty; the rest read ihsanan, do them good.",
            "bn": "আরবিতে 'বি' অব্যয়টি বাবা-মার আগে এসেছে, আবার এসেছে আত্মীয়দের আগে: ওয়া বি-যিল কুরবা। এতিম থেকে বাকি নামগুলো জুড়েছে শুধু 'ওয়া' দিয়ে। মুফাসসিররা ইহসানকে তালিকার শেষ পর্যন্ত টেনে নেন। তাবারী আত্মীয়ের অংশের অর্থ করেন: আর তিনি আত্মীয়দের ব্যাপারেও ইহসানের আদেশ দিয়েছেন, আত্মীয়তার বন্ধন রক্ষা করে। অভাবীদের উল্লেখের পর তিনি সারকথা বলেন: এদের সঙ্গে ইহসান করার ব্যাপারে আমার অসিয়ত মেনে চলো। কুরতুবী জানান, ইবন আবী আবলা পড়েছেন 'ইহসানুন', অর্থাৎ তাঁদের প্রতি ইহসান ওয়াজিব। বাকি সবাই পড়েছেন 'ইহসানান', অর্থাৎ তাঁদের সঙ্গে ইহসান করো।"
          },
          {
            "en": "As-Sa'di spells the ihsan out: noble words, gentle address, fine conduct, obeying them and avoiding what they forbid, spending on them, honouring those connected to them, keeping the ties that reach you only through them. Ihsan, he adds, has two opposites, ill-treatment and the mere absence of good, and both are forbidden. Ma'arif al-Qur'an notes that the verse does not say fulfil their rights or serve them but ihsan, which is far wider, and that a parent's own failings give a child no excuse for ill-treatment.",
            "bn": "সা'দী ইহসানের খুঁটিনাটি বলে দেন: সম্মানের কথা, নরম সম্বোধন, সুন্দর আচরণ, তাঁদের আদেশ মানা আর নিষেধ এড়িয়ে চলা, তাঁদের জন্য খরচ করা, তাঁদের সঙ্গে যাদের সম্পর্ক তাদের সম্মান করা, আর সেই আত্মীয়তা রক্ষা করা যা শুধু তাঁদের মাধ্যমেই আপনার সঙ্গে জোড়া। তিনি আরও বলেন, ইহসানের বিপরীত দুটি: খারাপ আচরণ, আর ভালো আচরণ না করা। দুটোই নিষিদ্ধ। মাআরিফুল কুরআন লক্ষ করে, আয়াত বলেনি তাঁদের হক আদায় করো বা খেদমত করো। বলেছে ইহসান, যা অনেক বেশি ব্যাপক। বাবা-মা নিজেরা ত্রুটি করে থাকলেও সন্তানের জন্য তা দুর্ব্যবহারের অজুহাত হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Kin, Orphans and the Needy",
          "bn": "আত্মীয়, এতিম আর অভাবী"
        },
        "p": [
          {
            "en": "As-Sa'di extends dhu l-qurba to every relative, near or distant, done good in word and deed and never cut off by either. At-Tabari defines the orphan as the child whose father has died; Ibn Kathir says orphans are named because they have lost whoever saw to their affairs and spent on them. As-Sa'di gives them a right over the Muslims, kin or not: to be provided for, treated kindly, consoled, and raised well for their religion and their world.",
            "bn": "সা'দী যুল-কুরবার মধ্যে সব আত্মীয়কে ধরেন, কাছের হোক বা দূরের। কথায় ও কাজে তাদের সঙ্গে ভালো করতে হবে, কথা বা কাজ দিয়ে সম্পর্ক ছিন্ন করা চলবে না। তাবারী এতিমের সংজ্ঞা দেন: যে শিশুর বাবা মারা গেছেন। ইবন কাসীর বলেন কেন তাদের নাম এল: যে তাদের দেখাশোনা করত আর তাদের জন্য খরচ করত, তাকে তারা হারিয়েছে। সা'দীর মতে মুসলমানদের ওপর তাদের হক আছে, আত্মীয় হোক বা না হোক। তাদের দায়িত্ব নিতে হবে, সদয় হতে হবে, মন ভালো রাখতে হবে, আর দ্বীন ও দুনিয়ার কল্যাণে সুন্দরভাবে বড় করতে হবে।"
          },
          {
            "en": "For al-masakin at-Tabari goes into the word: the miskin is one whom the humiliation of want has mounted, so that he is brought low by it. As-Sa'di uses the same root: those whom need and poverty have made still, unable to reach what suffices them or those they support. The command, he says, is to fill their gap, ease their want, urge others to do so, and do whatever one can.",
            "bn": "মাসাকীনের ব্যাখ্যায় তাবারী শব্দটার ভেতরে ঢোকেন। মিসকিন সেই মানুষ, অভাবের লাঞ্ছনা যার ঘাড়ে চেপে বসেছে, ফলে সে নুয়ে পড়েছে। সা'দীও একই ধাতু ধরে বলেন, এরা তারা, অভাব আর দারিদ্র্য যাদের স্থবির করে দিয়েছে। নিজের প্রয়োজনটুকু বা পোষ্যদের প্রয়োজনও তারা মেটাতে পারে না। তাঁর ভাষায় আদেশ হলো, তাদের ঘাটতি পূরণ করা, অভাব দূর করা, অন্যদের এতে উৎসাহ দেওয়া, আর যতটুকু পারা যায় করা।"
          }
        ]
      },
      {
        "h": {
          "en": "One Neighbour, Two Phrases",
          "bn": "এক প্রতিবেশী, দুই পরিচয়"
        },
        "p": [
          {
            "en": "Al-jari dhi l-qurba wal-jari l-junub: the neighbour alone gets two phrases, and the commentators divide them in three ways. The first, which at-Tabari gives from Ibn 'Abbas, Mujahid, 'Ikrimah, ad-Dahhak, Qatadah and Ibn Zayd: the neighbour who is also your relative, and the neighbour with no kinship to you. Ibn Kathir gives the same. Qatadah adds that a neighbour who is kin holds two rights, of kinship and of neighbourliness, and as-Sa'di says the same.",
            "bn": "ওয়াল জারি যিল কুরবা ওয়াল জারিল জুনুব: শুধু প্রতিবেশীর জন্যই দুটি আলাদা কথা এসেছে, আর এ দুইয়ের ব্যাখ্যায় মুফাসসিরদের তিনটি মত আছে। প্রথম মতটি তাবারী এনেছেন ইবন আব্বাস, মুজাহিদ, ইকরিমা, দাহহাক, কাতাদা ও ইবন যায়েদ থেকে: প্রথমজন সেই প্রতিবেশী যে আপনার আত্মীয়ও, দ্বিতীয়জন যার সঙ্গে আপনার কোনো আত্মীয়তা নেই। ইবন কাসীরও একই কথা আনেন। কাতাদা যোগ করেন, আত্মীয় প্রতিবেশীর হক দুটি: আত্মীয়তার হক আর প্রতিবেশীর হক। সা'দীও তা-ই বলেন।"
          },
          {
            "en": "The second is Nawf ash-Shami's, recorded by at-Tabari, Ibn Kathir and al-Qurtubi: the near neighbour is the Muslim, the junub the Jew and the Christian. At-Tabari rejects it, since in Arab usage dhu qarabah means kinship of blood, not of religion; junub, he concludes, is the stranger, Muslim or not, Jew or Christian, so the counsel covers every kind of neighbour. Al-Qurtubi, after Nawf's reading, writes that care for the neighbour is commanded whether he is Muslim or not, and that this is correct.",
            "bn": "দ্বিতীয় মতটি নাওফ আশ-শামীর। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই এটি এনেছেন: কাছের প্রতিবেশী মানে মুসলিম, আর জুনুব মানে ইহুদি ও খ্রিস্টান। তাবারী মতটি নাকচ করেন, কারণ আরবদের ভাষায় 'যু কারাবা' বলতে রক্তের আত্মীয়তা বোঝায়, ধর্মের নৈকট্য নয়। তাঁর সিদ্ধান্ত, জুনুব মানে অপরিচিত মানুষ, মুসলিম হোক বা না হোক, ইহুদি হোক বা খ্রিস্টান। তাহলে অসিয়ত সব ধরনের প্রতিবেশীকে ঘিরে নেয়। কুরতুবী নাওফের মত উল্লেখ করে লেখেন, প্রতিবেশীর প্রতি সদাচরণের আদেশ আছে, সে মুসলিম হোক বা না হোক, আর এটাই সঠিক।"
          },
          {
            "en": "The third divides by distance. Ma'arif al-Qur'an says commentators generally take the near neighbour as the one next door and the distant one as further off. Al-Qurtubi traces this to scholars who read it through 'Aishah's (RA) question, which al-Bukhari records (6020): 'Messenger of Allah, I have two neighbours; to which shall I send a gift?' He said, 'To the one whose door is nearer to you.' They also argued from it for a neighbour's right of pre-emption; al-Qurtubi replies that there is no proof in it, since she asked only whom to start with.",
            "bn": "তৃতীয় মত ভাগ করে দূরত্ব দিয়ে। মাআরিফুল কুরআন বলে, সাধারণভাবে মুফাসসিররা কাছের প্রতিবেশী বলতে পাশের বাড়ির লোক আর দূরের প্রতিবেশী বলতে একটু দূরে যে থাকে তাকে বোঝেন। কুরতুবী জানান, একদল আলেম এ অর্থ নিয়েছেন আয়েশা (রাঃ)-এর একটি প্রশ্ন থেকে, যা ইমাম বুখারী বর্ণনা করেছেন (৬০২০): 'হে আল্লাহর রাসূল, আমার দুজন প্রতিবেশী আছে, কাকে হাদিয়া পাঠাব?' তিনি বললেন, 'যার দরজা তোমার বেশি কাছে।' তাঁরা এ হাদিস দিয়ে প্রতিবেশীর শুফআর (অগ্রক্রয়ের) অধিকারও প্রমাণ করতে চেয়েছেন। কুরতুবীর জবাব, এতে কোনো প্রমাণ নেই। আয়েশা (রাঃ) শুধু জানতে চেয়েছিলেন কাকে দিয়ে শুরু করবেন।"
          },
          {
            "en": "Ma'arif al-Qur'an holds that the words bear all these meanings: neighbours may differ in degree, but every neighbour, related or not, Muslim or not, has the right to be helped and cared for. Al-Baghawi, Ibn Kathir, al-Qurtubi and Ma'arif all bring one hadith here. In al-Bukhari's wording (6015), from Ibn 'Umar (RA), the Messenger of Allah ﷺ said: 'Jibril (AS) kept counselling me about the neighbour until I thought he would make him an heir.'",
            "bn": "মাআরিফুল কুরআনের মতে আয়াতের শব্দ এই সব অর্থই ধারণ করে। প্রতিবেশীদের মধ্যে মর্যাদার তারতম্য থাকতে পারে, কিন্তু আত্মীয় হোক বা না হোক, মুসলিম হোক বা না হোক, প্রত্যেক প্রতিবেশীর হক হলো সাহায্য আর যত্ন পাওয়া। বাগাভী, ইবন কাসীর, কুরতুবী ও মাআরিফ সবাই এখানে একটি হাদিস আনেন। ইমাম বুখারীর বর্ণনায় (৬০১৫), ইবন উমার (রাঃ) থেকে, রাসূলুল্লাহ ﷺ বলেছেন: 'জিবরীল (আঃ) প্রতিবেশীর ব্যাপারে আমাকে এত বেশি অসিয়ত করতে থাকলেন যে আমার মনে হলো, তিনি তাকে ওয়ারিস বানিয়ে দেবেন।'"
          }
        ]
      },
      {
        "h": {
          "en": "At Your Side, On the Road",
          "bn": "পাশের সঙ্গী, পথের মুসাফির"
        },
        "p": [
          {
            "en": "As-sahibi bil-janb, the companion at the side, has the widest spread. At-Tabari records three readings. The travelling companion, from Ibn 'Abbas, Sa'id ibn Jubayr, Mujahid, Qatadah, as-Suddi and ad-Dahhak; Mujahid pictures him as the man whose stopping place, food and road are yours. The wife, who is at a man's side, from 'Ali and Ibn Mas'ud (RA), Ibn Abi Layla and Ibrahim an-Nakha'i. And whoever stays close hoping for your benefit, from Ibn Jurayj and Ibn Zayd.",
            "bn": "আস-সাহিবি বিল-জাম্ব, পাশের সঙ্গী, এর অর্থের পরিধিই সবচেয়ে বড়। তাবারী তিনটি মত এনেছেন। এক, সফরসঙ্গী: ইবন আব্বাস, সাঈদ ইবন জুবাইর, মুজাহিদ, কাতাদা, সুদ্দী ও দাহহাকের মত। মুজাহিদ তার ছবি আঁকেন এভাবে: তার মঞ্জিল আপনার মঞ্জিল, তার খাবার আপনার খাবার, তার পথ আপনার পথ। দুই, স্ত্রী, যে স্বামীর পাশে থাকে: আলী ও ইবন মাসউদ (রাঃ), ইবন আবী লায়লা আর ইবরাহীম নাখঈর মত। তিন, যে উপকারের আশায় আপনার সঙ্গে লেগে থাকে: ইবন জুরাইজ ও ইবন যায়েদের মত।"
          },
          {
            "en": "At-Tabari takes the phrase from being at someone's flank, and since Allah singled none of them out, he concludes that all are meant and all are owed ihsan. Al-Qurtubi calls the travelling companion the sounder reading, while allowing that the verse may take in all of them by its generality. As-Sa'di prefers the companion in general, at home or travelling, the wife included. Ibn Kathir records from Zayd ibn Aslam: whoever sits beside you at home, and your companion on the road.",
            "bn": "তাবারী শব্দটিকে নেন কারও পাশ ঘেঁষে থাকার অর্থ থেকে। আল্লাহ যেহেতু এদের কাউকে আলাদা করে বেছে নেননি, তাই তাঁর সিদ্ধান্ত: সবাই এর মধ্যে আছে, আর সবার সঙ্গেই ইহসান করতে হবে। কুরতুবী সফরসঙ্গীর মতকে বেশি সঠিক বলেন, তবে মানেন যে ব্যাপক অর্থের কারণে আয়াত সবাইকে ধরতে পারে। সা'দী পছন্দ করেন সাধারণ সঙ্গীর অর্থ, ঘরে হোক বা সফরে, স্ত্রীও যার মধ্যে পড়ে। ইবন কাসীর যায়েদ ইবন আসলাম থেকে আনেন: ঘরে যে আপনার পাশে বসে, আর সফরে যে আপনার সঙ্গী।"
          },
          {
            "en": "Ibn as-sabil is literally the son of the road. Ibn Kathir records two readings, the guest, from Ibn 'Abbas and a group, and the traveller passing by, from Mujahid, al-Hasan, ad-Dahhak and others; he finds the second plainer, and the two one if guest meant the passer-by. Al-Baghawi says most took him as the guest. At-Tabari: he is the man of the road, owed help, hospitality and a mount if stranded in need, unless his journey is in disobedience to Allah.",
            "bn": "ইবনুস সাবীল, আক্ষরিক অর্থে পথের সন্তান। ইবন কাসীর দুটি মত আনেন। ইবন আব্বাস ও একদলের মতে সে মেহমান। মুজাহিদ, হাসান, দাহহাক ও আরও কয়েকজনের মতে সে সফরে আপনার পাশ দিয়ে চলে যাওয়া মুসাফির। ইবন কাসীরের কাছে দ্বিতীয় মতটি বেশি স্পষ্ট, আর মেহমান বলতে যদি পথচারীই বোঝানো হয়, তবে দুটো একই কথা। বাগাভী বলেন, বেশির ভাগ আলেম তাকে মেহমান ধরেছেন। তাবারীর মতে সে পথের মানুষ। পথে আটকে অভাবে পড়লে সাহায্য, মেহমানদারি আর দরকার হলে বাহন পাওয়া তার হক, যদি না তার সফর আল্লাহর নাফরমানির জন্য হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Under Your Hand",
          "bn": "যারা আপনার হাতের নিচে"
        },
        "p": [
          {
            "en": "Wa ma malakat aymanukum: and those your right hands possess. The commentators wrote in societies where slavery was an institution and explain the phrase in those terms, at-Tabari as the slaves you own. This article reports that as history and argues nothing for the institution. What the commentators stress is the reason for the counsel. Ibn Kathir: such a person is weak in means, a captive in others' hands. Al-Qurtubi: the Prophet ﷺ led owners toward humility, to see no superiority in themselves, since all are servants of Allah and the wealth is His.",
            "bn": "ওয়া মা মালাকাত আইমানুকুম: আর তোমাদের ডান হাত যাদের মালিক। মুফাসসিররা লিখেছেন এমন সমাজে, যেখানে দাসপ্রথা একটি প্রতিষ্ঠান ছিল, তাই কথাটির ব্যাখ্যাও দিয়েছেন সেই প্রেক্ষাপটে। তাবারীর ব্যাখ্যায় এরা তোমাদের মালিকানাধীন দাস-দাসী। এই লেখা সেই ব্যাখ্যাকে ইতিহাস হিসেবেই তুলে ধরছে, প্রথাটির পক্ষে কোনো যুক্তি দিচ্ছে না। মুফাসসিররা জোর দেন অসিয়তের কারণের ওপর। ইবন কাসীর বলেন, এমন মানুষ উপায়হীন, অন্যের হাতে বন্দী। কুরতুবী বলেন, নবী ﷺ মালিকদের বিনয়ের পথ দেখিয়েছেন, যাতে তারা নিজেদের কোনো শ্রেষ্ঠত্ব না দেখে। কারণ সবাই আল্লাহর বান্দা, আর সম্পদও আল্লাহরই।"
          },
          {
            "en": "At-Tabari explains why ownership is credited to the right hand: those under a person eat what his hand passes them and wear what it clothes them in. As-Sa'di extends the phrase to people and animals alike: give them what suffices, do not load them with hardship, help them with what they bear. Ma'arif al-Qur'an applies the same rules, by analogy and from the Prophet's ﷺ sayings, to servants and employees: wages and meals without delay, and work within their strength.",
            "bn": "মালিকানাকে কেন ডান হাতের সঙ্গে জোড়া হলো, তাবারী তা বুঝিয়ে দেন: যারা কারও অধীনে থাকে, তারা খায় তার হাত যা তুলে দেয়, পরে তার হাত যা পরিয়ে দেয়। সা'দী এর মধ্যে মানুষ আর পশু দুটোকেই ধরেন: তাদের প্রয়োজন মেটানো, কষ্টের বোঝা না চাপানো, যা বইছে তাতে হাত লাগানো। মাআরিফুল কুরআন কিয়াস আর নবী ﷺ-এর বাণীর ভিত্তিতে একই নিয়ম খাটায় কাজের লোক ও কর্মচারীর বেলায়: বেতন আর খাবার দিতে দেরি নয়, সাধ্যের বাইরে কাজ নয়।"
          },
          {
            "en": "Al-Baghawi, Ibn Kathir and al-Qurtubi all bring the hadith of Abu Dharr (RA). In al-Bukhari's narration (6050), Abu Dharr had insulted a man through his mother, who was not an Arab, and the Prophet ﷺ told him, 'You are a man with jahiliyyah in you,' then said: 'They are your brothers; Allah has placed them under your hands. So whoever has his brother placed by Allah under his hand, let him feed him from what he eats, clothe him from what he wears, and not burden him with work that overwhelms him; and if he does burden him, let him help him with it.'",
            "bn": "বাগাভী, ইবন কাসীর ও কুরতুবী তিনজনই আবু যার (রাঃ)-এর হাদিসটি আনেন। ইমাম বুখারীর বর্ণনায় (৬০৫০), আবু যার এক ব্যক্তিকে তার মায়ের কথা তুলে গালি দিয়েছিলেন, যিনি আরব ছিলেন না। নবী ﷺ তাঁকে বললেন, 'তুমি এমন মানুষ, যার মধ্যে জাহিলিয়াত রয়ে গেছে।' তারপর বললেন: 'তারা তোমাদের ভাই। আল্লাহ তাদের তোমাদের হাতের অধীনে রেখেছেন। তাই আল্লাহ যার ভাইকে তার হাতের অধীনে রেখেছেন, সে যেন নিজে যা খায় তা থেকে তাকে খাওয়ায়, নিজে যা পরে তা থেকে পরায়, আর তার ওপর এমন কাজ না চাপায় যা তাকে কাবু করে ফেলে। আর যদি চাপায়ই, তবে যেন সে কাজে তাকে সাহায্য করে।'"
          }
        ]
      },
      {
        "h": {
          "en": "Pride at the Close",
          "bn": "শেষ কথায় অহংকার"
        },
        "p": [
          {
            "en": "Inna Allaha la yuhibbu man kana mukhtalan fakhura: Allah does not love whoever is mukhtal and fakhur. At-Tabari explains mukhtal as a man given to khuyala', vanity, and fakhur as a man who boasts over Allah's servants of what Allah gave him, without praising Allah for it. Mujahid, in at-Tabari and Ibn Kathir: mukhtal is the arrogant, and fakhur is he who counts what he was given and does not thank Allah. Ibn Kathir adds: great in his own eyes, small before Allah, and disliked by people.",
            "bn": "ইন্নাল্লাহা লা ইউহিব্বু মান কানা মুখতালান ফাখূরা: যে মুখতাল ও ফাখূর, আল্লাহ তাকে ভালোবাসেন না। তাবারীর ব্যাখ্যায় মুখতাল সে, যার মধ্যে খুয়ালা বা দম্ভ আছে। আর ফাখূর সে, আল্লাহর দেওয়া নিয়ামত নিয়ে যে আল্লাহর বান্দাদের ওপর বড়াই করে, অথচ সেজন্য আল্লাহর প্রশংসা করে না। তাবারী ও ইবন কাসীর মুজাহিদ থেকে আনেন: মুখতাল মানে অহংকারী, আর ফাখূর সে, যে নিজের পাওয়া জিনিস গুনে গুনে বলে কিন্তু আল্লাহর শোকর করে না। ইবন কাসীর যোগ করেন, সে নিজের চোখে বড়, আল্লাহর কাছে তুচ্ছ, আর মানুষের কাছে অপছন্দের।"
          },
          {
            "en": "Why close a list of rights on this? Al-Baghawi answers directly: it follows the rights because the arrogant withholds what is due out of arrogance. Al-Qurtubi says the two traits carry their owners to disdain the poor relative, the poor neighbour and the rest, so Allah's command to do them good is lost. As-Sa'di sets the verse's halves side by side: whoever keeps these commands is humble before his Lord and toward His servants; whoever does not is held back by conceit and boasting.",
            "bn": "হকের তালিকা এ কথা দিয়ে শেষ হলো কেন? বাগাভী সরাসরি উত্তর দেন: হকগুলোর পরে এটি এসেছে, কারণ অহংকারী অহংকারের কারণেই হক আটকে রাখে। কুরতুবী বলেন, এই দুই স্বভাব মানুষকে গরিব আত্মীয়, গরিব প্রতিবেশী আর আয়াতে উল্লিখিত অন্যদের তুচ্ছ ভাবতে শেখায়। ফলে তাদের সঙ্গে ইহসানের যে আদেশ আল্লাহ দিয়েছেন, তা হারিয়ে যায়। সা'দী আয়াতের দুই অংশকে পাশাপাশি রাখেন। যে এই আদেশগুলো পালন করে, সে রবের সামনে বিনীত, তাঁর বান্দাদের প্রতিও নম্র। আর যে করে না, তাকে আটকে রাখে তার আত্মমুগ্ধতা আর বড়াই।"
          },
          {
            "en": "Abu Raja' al-Harawi, in at-Tabari and Ibn Kathir, noticed which words sit together. You never find one who treats those in his charge badly, he said, without finding him mukhtal fakhur, and he recited this verse; nor one undutiful to his parents without finding him overbearing and wretched, and he recited 19:32. The next verse, 4:37, turns to those who are stingy and hide what Allah gave them, and 4:38 to those who spend to be seen; those portraits belong to their own verses.",
            "bn": "তাবারী ও ইবন কাসীর আবু রাজা আল-হারাভীর একটি পর্যবেক্ষণ এনেছেন: কোন শব্দের পাশে কোন শব্দ বসেছে। তিনি বলতেন, অধীনস্থদের সঙ্গে খারাপ আচরণ করে অথচ মুখতাল ফাখূর নয়, এমন কাউকে পাওয়া যাবে না, আর তিনি এ আয়াত তিলাওয়াত করতেন। বাবা-মার অবাধ্য অথচ উদ্ধত ও হতভাগা নয়, এমন কাউকেও পাওয়া যাবে না, এ কথা বলে তিনি ১৯:৩২ আয়াত পড়তেন। পরের আয়াত ৪:৩৭ তাদের কথা বলে, যারা কৃপণতা করে আর আল্লাহর দেওয়া অনুগ্রহ লুকিয়ে রাখে। ৪:৩৮ বলে তাদের কথা, যারা লোক দেখানোর জন্য খরচ করে। সেসব ছবি নিজ নিজ আয়াতের আলোচনার বিষয়।"
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
            "bn": "সূরা নিসা মাদানি। ৪:৩৬ আয়াত আদেশ দেয় একমাত্র আল্লাহর ইবাদতের, আর বাবা-মা, আত্মীয়, ইয়াতিম, অভাবী, কাছের ও দূরের প্রতিবেশী, পাশের সঙ্গী, মুসাফির আর অধীনস্থদের সঙ্গে সদ্ব্যবহারের। আয়াত শেষ হয় এই কথায় যে, আল্লাহ অহংকারী, দাম্ভিককে পছন্দ করেন না। ৪:৩৭ আয়াত বলে তাদের কথা, যারা কৃপণতা করে, মানুষকেও কৃপণ হতে বলে, আর আল্লাহ নিজের অনুগ্রহে যা দিয়েছেন তা লুকিয়ে রাখে। আমাদের অংশ ৪:৩৮ আয়াতে শুরু হয় দ্বিতীয় এক ব্যর্থতা দিয়ে, যা প্রথম দেখায় আগেরটার ঠিক উল্টো মনে হয়।"
          },
          {
            "en": "Ibn Kathir notices the order. Allah first mentions the misers who do not spend, he says, and then those who spend to show off, to gain a name for generosity and not for the face of Allah. 4:39 then asks what those spenders would have lost by believing, and 4:40 answers the fear that sits behind the question. After it, 4:41 turns to the Day when a witness is brought from every nation. Ibn Kathir gives these verses no occasion of revelation, and they are read in this sequence.",
            "bn": "ইবনে কাসীর এই ক্রমটা লক্ষ করেন। তিনি বলেন, আল্লাহ প্রথমে সেই কৃপণদের কথা বলেছেন, যারা খরচই করে না। তারপর বলেছেন তাদের কথা, যারা খরচ করে লোক দেখাতে, দানশীল নাম কামাতে, আল্লাহর সন্তুষ্টির জন্য নয়। এরপর ৪:৩৯ আয়াত জিজ্ঞেস করে, ঈমান আনলে এই খরচকারীদের কী হারাতে হতো। আর ৪:৪০ আয়াত জবাব দেয় সেই ভয়ের, যা প্রশ্নটার পেছনে লুকিয়ে আছে। তার পরে ৪:৪১ আয়াত ফিরে যায় সেই দিনের দিকে, যেদিন প্রত্যেক উম্মত থেকে একজন সাক্ষী আনা হবে। ইবনে কাসীর এই আয়াতগুলোর কোনো শানে নুযূল উল্লেখ করেননি, তাই এগুলো পড়তে হয় এই ধারাবাহিকতার ভেতরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Yoked, Weighed",
          "bn": "দেখানো, জুড়ে থাকা, ওজন"
        },
        "p": [
          {
            "en": "The spending of 4:38 is ri'a'a an-nas, for the seeing of people. Ri'a' comes from the root r-'-y, to see, and it names a deed shown so that others will see it. The fault is not that a gift is visible, since 2:271 calls disclosed charity good and concealed charity better. The fault is whom the gift is addressed to. The verse ties it at once to a missing belief: they do not believe in Allah or in the Last Day. Whoever expects no Last Day has only people left to pay him.",
            "bn": "৪:৩৮ আয়াতের খরচটা রিআআন নাস, মানুষকে দেখানোর জন্য। রিয়া শব্দটা এসেছে রা-হামযা-ইয়া মূল থেকে, যার মানে দেখা। রিয়া মানে এমন আমল, যা করা হয় অন্যরা দেখবে বলে। দান চোখে পড়াটা দোষ নয়, কারণ ২:২৭১ আয়াত প্রকাশ্য দানকে বলেছে ভালো, গোপন দানকে আরও ভালো। দোষ হলো দানটা কাকে উদ্দেশ করে দেওয়া হচ্ছে। আয়াত সঙ্গে সঙ্গে এর মূলে দেখিয়ে দেয় ঈমানের ঘাটতি: তারা আল্লাহ ও শেষ দিবসে ঈমান রাখে না। যে শেষ দিবসের আশাই রাখে না, তার পাওনা মেটানোর জন্য মানুষ ছাড়া আর কেউ থাকে না।"
          },
          {
            "en": "Then: wa man yakun ash-shaytanu lahu qarinan fa-sa'a qarina, and whoever has Satan as a qarin, then evil is he as a qarin. Qarin comes from the root q-r-n, joining one thing to another, and the lexicons use it for the companion bound at a person's side, the way a single rope can tie two camels together. The word comes twice within a few words. The first time it names the bond, and the second time it passes the verdict on it.",
            "bn": "তারপর: ওয়া মাই ইয়াকুনিশ শাইতানু লাহু কারীনান ফাসাআ কারীনা, আর শয়তান যার কারীন, সে কারীন হিসেবে কতই না নিকৃষ্ট! কারীন শব্দের মূল কাফ-রা-নূন, অর্থ এক জিনিসকে আরেক জিনিসের সঙ্গে জুড়ে দেওয়া। অভিধানে শব্দটা ব্যবহার হয় মানুষের পাশে বাঁধা হয়ে থাকা সঙ্গীর জন্য, যেমন এক দড়িতে দুটো উট একসঙ্গে বাঁধা থাকে। অল্প কয়েকটা শব্দের মধ্যে কারীন এসেছে দুবার। প্রথমবার শব্দটা বন্ধনের নাম বলে, দ্বিতীয়বার সেই বন্ধনের ওপর রায় দেয়।"
          },
          {
            "en": "4:39 opens with a rhetorical question, wa madha 'alayhim, and what would have been upon them? What burden would belief and spending from Allah's provision have laid on them? The question answers itself. 4:40 then speaks of mithqal dharrah, the weight of a dharrah, which Ibn Kathir glosses as a speck of dust, and goes on: if it is a good deed He multiplies it, and gives min ladunhu, from His own presence, a great reward. At-Tafsir al-Muyassar reads that last phrase as a further favour added on top of the multiplying.",
            "bn": "৪:৩৯ আয়াত শুরু হয় একটা অলংকারপূর্ণ প্রশ্ন দিয়ে, ওয়া মাযা আলাইহিম, তাদের ওপর কী চাপত? ঈমান আনা আর আল্লাহর দেওয়া রিজিক থেকে খরচ করা তাদের ওপর কোন বোঝা চাপাত? প্রশ্নটার জবাব প্রশ্নের ভেতরেই আছে। এরপর ৪:৪০ আয়াত বলে মিসকালা যাররাহর কথা, এক যাররাহর ওজন। ইবনে কাসীর যাররাহর ব্যাখ্যা দিয়েছেন ধূলিকণা দিয়ে। আয়াত আরও বলে, নেক কাজ হলে তিনি তা বহুগুণ করেন, আর মিল্লাদুনহু, নিজের কাছ থেকে দেন বিরাট প্রতিদান। আত-তাফসীরুল মুয়াসসার শেষ কথাটা পড়ে বহুগুণ করার ওপরে বাড়তি অনুগ্রহ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Read It",
          "bn": "মুফাসসিররা যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "On 4:38 Ibn Kathir says that it is Satan who lured such people into this evil in place of doing the good deed as it should be done. Satan encouraged them, stirred them and drew them on by making the evil look good, and that is the companionship the verse condemns. At-Tafsir al-Muyassar adds precision to the phrase about belief: they do not believe in Allah and the Day of Resurrection in conviction and in practice, and these bad deeds are among the things Satan calls to.",
            "bn": "৪:৩৮ আয়াত প্রসঙ্গে ইবনে কাসীর বলেন, শয়তানই এই লোকদের এই মন্দ কাজে টেনে এনেছে, নেক কাজটা যেভাবে করা উচিত সেভাবে করার বদলে। শয়তান তাদের উৎসাহ দিয়েছে, উসকে দিয়েছে, মন্দকে সুন্দর করে দেখিয়ে টেনে নিয়ে গেছে। আয়াত যে সঙ্গের নিন্দা করে, সেটা এই সঙ্গই। আত-তাফসীরুল মুয়াসসার ঈমানের কথাটা আরও স্পষ্ট করে। তারা আল্লাহ আর কিয়ামতের দিনে ঈমান রাখে না, বিশ্বাসেও না, আমলেও না। আর এই মন্দ কাজগুলো সেসব জিনিসের মধ্যে পড়ে, যেদিকে শয়তান ডাকে।"
          },
          {
            "en": "On 4:39 Ibn Kathir asks the verse's question in plain words: what harm would it do them to believe in Allah, walk the righteous path, replace showing off with sincerity, and wait for His promise in the Hereafter? The closing words, and Allah is ever Knowing of them, he explains as His complete knowledge of their intentions, good or evil. Al-Muyassar describes the spending the verse wanted from them as spending in hope of Allah's reward and with sincerity, and adds that Allah will call them to account.",
            "bn": "৪:৩৯ আয়াত প্রসঙ্গে ইবনে কাসীর আয়াতের প্রশ্নটাই সহজ ভাষায় করেন: আল্লাহর ওপর ঈমান আনলে, সৎ পথে চললে, লোক দেখানোর জায়গায় ইখলাস আনলে, আর আখিরাতে তাঁর প্রতিশ্রুতির অপেক্ষা করলে তাদের কী ক্ষতি হতো? শেষের কথা, আল্লাহ তাদের সম্পর্কে ভালোভাবে জানেন, এর ব্যাখ্যায় তিনি বলেন, তাদের নিয়ত ভালো হোক বা মন্দ, আল্লাহ তা পুরোপুরি জানেন। মুয়াসসার বলে, আয়াত তাদের কাছে চেয়েছিল এমন খরচ, যা হবে আল্লাহর কাছে সওয়াবের আশায় আর ইখলাসের সঙ্গে। সঙ্গে এও বলে, আল্লাহ তাদের হিসাব নেবেন।"
          },
          {
            "en": "On 4:40 Ibn Kathir says that Allah does not wrong any of His servants on the Day of Resurrection by the weight of a mustard seed or a speck of dust, and that He rewards a good deed and multiplies it. For the great reward from His own presence he reports, from Abu Hurayrah (RA), Ikrimah, Sa'id ibn Jubayr, al-Hasan, Qatadah and ad-Dahhak, that it means Paradise, and al-Muyassar names Paradise too.",
            "bn": "৪:৪০ আয়াত প্রসঙ্গে ইবনে কাসীর বলেন, কিয়ামতের দিন আল্লাহ তাঁর কোনো বান্দার ওপর সরিষার দানা বা ধূলিকণা পরিমাণও জুলুম করবেন না, বরং নেক কাজের প্রতিদান দেবেন আর তা বহুগুণ করবেন। নিজের কাছ থেকে দেওয়া বিরাট প্রতিদান সম্পর্কে তিনি আবু হুরাইরা (রাঃ), ইকরিমা, সাঈদ ইবনে জুবাইর, হাসান বসরী, কাতাদা ও দাহহাক থেকে বর্ণনা করেন যে এর মানে জান্নাত। মুয়াসসারও জান্নাতের নাম নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "It Was Said, and a Speck Remained",
          "bn": "বলা হয়েছে, আর এক কণা রয়ে গেছে"
        },
        "p": [
          {
            "en": "Ibn Kathir brings under these verses the hadith of the first people to be judged, which Muslim records from Abu Hurayrah (RA). Among them is a man to whom Allah gave wealth of every kind. He is asked what he did with it and says he left no path in which Allah loves spending without spending in it. He is told that he lied: he did it so that it would be said he is generous, and it was said. The man wanted to be spoken of, he was spoken of, and nothing was left owing to him.",
            "bn": "ইবনে কাসীর এই আয়াতগুলোর অধীনে সেই হাদিস আনেন, যাতে সবার আগে বিচার হওয়া লোকদের কথা আছে। ইমাম মুসলিম হাদিসটি আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন। তাদের একজন এমন মানুষ, যাকে আল্লাহ সব রকম সম্পদ দিয়েছিলেন। তাকে জিজ্ঞেস করা হয়, সম্পদ দিয়ে কী করেছে। সে বলে, আল্লাহ যে পথে খরচ ভালোবাসেন, এমন কোনো পথ সে বাদ রাখেনি। তাকে বলা হয়, তুমি মিথ্যা বলেছ। তুমি এসব করেছ যাতে বলা হয় তুমি দানশীল, আর তা বলা হয়েছে। লোকটা চেয়েছিল মানুষ তার কথা বলুক, মানুষ বলেছে, তার আর কোনো পাওনা বাকি থাকেনি।"
          },
          {
            "en": "On the other side of the scale, Ibn Kathir cites from the two Sahihs the long hadith of intercession narrated by Abu Sa'id al-Khudri (RA). In it the believers are sent back again and again to bring out of the Fire whoever has in his heart even the smallest weight of faith, and they bring out many. Abu Sa'id then told his listeners that they could recite, if they wished, 4:40: Allah does not do injustice even as much as an atom's weight. What is given for Allah is never too small to be found.",
            "bn": "পাল্লার অন্য দিকে, ইবনে কাসীর দুই সহীহ গ্রন্থ থেকে আবু সাঈদ খুদরী (রাঃ)-এর বর্ণিত শাফাআতের দীর্ঘ হাদিস উল্লেখ করেন। তাতে মুমিনদের বারবার ফেরত পাঠানো হয়, যার অন্তরে সামান্যতম ওজনের ঈমানও আছে, তাকে জাহান্নাম থেকে বের করে আনতে। তারা বহু মানুষকে বের করে আনেন। এরপর আবু সাঈদ (রাঃ) শ্রোতাদের বললেন, চাইলে তোমরা ৪:৪০ আয়াত পড়ো: আল্লাহ অণু পরিমাণও জুলুম করেন না। আল্লাহর জন্য যা দেওয়া হয়, তা এত ছোট হয় না যে খুঁজে পাওয়া যাবে না।"
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
            "bn": "যে লোক মানুষকে দেখানোর জন্য সম্পদ খরচ করে, আর আল্লাহ ও আখিরাতে ঈমান রাখে না, ২:২৬৪ আয়াত তাকে তুলনা করে এমন মসৃণ পাথরের সঙ্গে, যার ওপর পাতলা মাটির আস্তর। প্রবল বৃষ্টি এসে তা ধুয়ে খালি করে দেয়। শব্দগুলো ৪:৩৮ আয়াতের খুব কাছাকাছি, আর ছবিটা দেখিয়ে দেয় এই প্রদর্শনের শেষ পরিণতি কী। ১০৭:৪ থেকে ১০৭:৬ আয়াত একই রোগ নিয়ে যায় ইবাদতে: দুর্ভোগ সেই নামাজিদের, যারা নামাজের ব্যাপারে উদাসীন, যারা লোক দেখানোর জন্য করে। দানকে যেমন লোক দেখানো নষ্ট করে, নামাজকেও তেমনই।"
          },
          {
            "en": "43:36 shows how such a companion is acquired: whoever is blinded from the remembrance of the Most Merciful, We appoint for him a devil, and he is to him a companion. 43:38 shows the end of it, when the man says he wishes there were between them the distance of the east and the west, and what a wretched companion. 50:27 has the companion disown him: our Lord, I did not make him transgress. And 99:7-8 apply the scale of 4:40 to everyone: an atom's weight of good will be seen, and an atom's weight of evil.",
            "bn": "এমন সঙ্গী কীভাবে জোটে, ৪৩:৩৬ আয়াত তা দেখায়: যে দয়াময়ের জিকির থেকে মুখ ফিরিয়ে নেয়, আমি তার জন্য এক শয়তান নিয়োজিত করি, সে হয় তার সঙ্গী। ৪৩:৩৮ আয়াত দেখায় এর শেষ, যখন লোকটা বলবে, হায়, আমার আর তোমার মাঝে যদি পূর্ব আর পশ্চিমের দূরত্ব থাকত! কতই না নিকৃষ্ট সঙ্গী! ৫০:২৭ আয়াতে সেই সঙ্গীই তাকে অস্বীকার করে: হে আমাদের রব, আমি তাকে বিদ্রোহী বানাইনি। আর ৯৯:৭ ও ৯৯:৮ আয়াত ৪:৪০ আয়াতের পাল্লা সবার ওপর খাটায়: অণু পরিমাণ ভালো কাজও দেখা যাবে, অণু পরিমাণ মন্দ কাজও।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving to the Right Address",
          "bn": "ঠিক ঠিকানায় দান"
        },
        "p": [
          {
            "en": "The verse does not forbid being seen giving. 35:29 praises those who spend secretly and publicly, and a public campaign for a well or a hospital may need names and numbers. What the verse forbids is giving addressed to people. A simple test: before any gift, ask whether the amount, or the recipient, would change if no one were ever to know. Where the answer is yes, move part of that giving into secret, where only Allah can be its audience, and keep it there.",
            "bn": "দান করতে গিয়ে চোখে পড়াকে আয়াত নিষেধ করে না। ৩৫:২৯ আয়াত প্রশংসা করে তাদের, যারা গোপনে ও প্রকাশ্যে খরচ করে। কুয়া বা হাসপাতালের জন্য প্রকাশ্য উদ্যোগে নাম আর অঙ্কের দরকারও হতে পারে। আয়াত নিষেধ করে সেই দান, যা মানুষকে উদ্দেশ করে দেওয়া। সহজ একটা পরীক্ষা আছে। কোনো দানের আগে নিজেকে জিজ্ঞেস করুন, কেউ কোনো দিন না জানলে পরিমাণ বা যাকে দিচ্ছেন সে কি বদলে যেত? উত্তর হ্যাঁ হলে সেই দানের একটা অংশ গোপনে সরিয়ে নিন, যেখানে একমাত্র আল্লাহই দেখছেন, আর সেটা গোপনই রাখুন।"
          },
          {
            "en": "Fear of display must not become a reason to stop giving. An-Nawawi records the saying of al-Fudayl ibn Iyad: leaving a deed because of people is showing off, doing a deed for people is shirk, and sincerity is that Allah frees you from both. So the cure is not to give less but to give for the right One. And watch the company you keep. Voices, circles and feeds that reward every good deed with applause work like the qarin of this verse, turning deeds toward the crowd.",
            "bn": "লোক দেখানোর ভয় যেন দান বন্ধ করার অজুহাত না হয়ে যায়। ইমাম নববী ফুদাইল ইবনে ইয়াদের একটি কথা উল্লেখ করেছেন: মানুষের কারণে আমল ছেড়ে দেওয়া রিয়া, মানুষের জন্য আমল করা শিরক, আর ইখলাস হলো আল্লাহ আপনাকে এ দুটো থেকেই মুক্ত রাখেন। তাই প্রতিকার কম দেওয়া নয়, বরং যাঁর জন্য দেওয়া উচিত, তাঁর জন্যই দেওয়া। আর কাদের সঙ্গে ওঠাবসা করছেন, সেদিকে খেয়াল রাখুন। যেসব কণ্ঠ, আসর আর ফিড প্রতিটি ভালো কাজের জবাব দেয় হাততালি দিয়ে, সেগুলো এই আয়াতের কারীনের মতোই কাজ করে, আমলের মুখ ঘুরিয়ে দেয় ভিড়ের দিকে।"
          },
          {
            "en": "4:40 also speaks to the opposite discouragement, the feeling that one's gift is too small to matter. An atom's weight of good is not lost, and a small deed given for Allah can be multiplied beyond what it was. The coin given quietly to a neighbour, the unseen hour of help, the transfer no one else will ever read about: each is a deed the verse promises will be found and increased by the One who wrongs no one.",
            "bn": "উল্টো দিকের হতাশাকেও ৪:৪০ আয়াত জবাব দেয়, এই ধারণাকে যে আমার দান এত ছোট যে কোনো দাম নেই। অণু পরিমাণ ভালো কাজও হারায় না, আর আল্লাহর জন্য দেওয়া ছোট আমলও তার আসল পরিমাণ ছাড়িয়ে বহুগুণ হতে পারে। প্রতিবেশীকে চুপচাপ দেওয়া কয়েকটা টাকা, কারও চোখে না পড়া এক ঘণ্টার সাহায্য, এমন একটা টাকা পাঠানো, যার খবর আর কেউ কোনো দিন পড়বে না: এর প্রতিটিই এমন আমল, যার ব্যাপারে আয়াত কথা দেয়, তা খুঁজে পাওয়া যাবে, বাড়িয়ে দেওয়া হবে। আর কথা দিচ্ছেন তিনি, যিনি কারও ওপর জুলুম করেন না।"
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
            "bn": "এই অংশে আছে সতর্কবাণী আর প্রতিশ্রুতি, দোয়া নয়। তাই এখানে দোয়া নেওয়া হলো কুরআনের অন্য জায়গা থেকে। ২:১২৭ আয়াতে ইবরাহীম (আঃ) আর ইসমাঈল (আঃ) কাবার ভিত তুলতে তুলতে বলছেন: হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন, নিশ্চয়ই আপনি সব শোনেন, সব জানেন। তাঁরা করছিলেন ইতিহাসের সবচেয়ে বড় কাজগুলোর একটি, আর তাঁদের একমাত্র চিন্তা ছিল, যাঁর জন্য করছেন, তিনি কবুল করবেন কি না। রিয়ার ঠিক উল্টো এটাই।"
          },
          {
            "en": "Alongside it, a short supplication composed in the vocabulary of these verses, offered as such and not as a transmitted text: O Allah, do not let us spend for the eyes of people; keep Satan from being our companion, and give us companions who remind us of You; let us believe in You and the Last Day in conviction and in deed; and do not let even an atom's weight of what we give for You be lost, but multiply it, and give us from Your own presence a great reward.",
            "bn": "এর পাশাপাশি এই আয়াতগুলোর শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমাদের মানুষকে দেখানোর জন্য খরচ করতে দেবেন না। শয়তানকে আমাদের সঙ্গী হতে দেবেন না, আর আমাদের এমন সঙ্গী দিন, যারা আপনার কথা মনে করিয়ে দেয়। আমাদের আপনার ওপর আর আখিরাতের ওপর ঈমান রাখতে দিন, বিশ্বাসেও, আমলেও। আর আপনার জন্য যা দিই, তার অণু পরিমাণও হারাতে দেবেন না, বরং বহুগুণ করুন, আর নিজের কাছ থেকে আমাদের বিরাট প্রতিদান দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About the Audience",
          "bn": "দর্শক নিয়ে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "When I remember the good I have done, whose reaction do I picture? If a gift of mine were praised by no one, thanked by no one and known to no one, would I regret giving it? What would it actually cost me, as 4:39 asks, to give one thing this month that only Allah will ever know about?",
            "bn": "নিজের করা ভালো কাজের কথা মনে পড়লে আমি কার প্রতিক্রিয়া কল্পনা করি? আমার কোনো দানের প্রশংসা যদি কেউ না করত, কেউ ধন্যবাদ না দিত, কেউ না জানত, তাহলে কি দানটা করে আফসোস হতো? ৪:৩৯ আয়াতের প্রশ্নটাই নিজেকে করি: এই মাসে এমন একটা কিছু দিতে, যার কথা আল্লাহ ছাড়া কেউ কোনো দিন জানবে না, আমার আসলে কী খরচ হবে?"
          },
          {
            "en": "Who are my companions, in person and on the screen, and do they make my deeds larger in Allah's sight or only louder in people's ears? Have I ever held back a good deed because I feared it would look like showing off, instead of correcting my intention and doing it? And which small deed have I dismissed as too little, when 4:40 says an atom's weight is not lost?",
            "bn": "সামনাসামনি আর পর্দার ওপারে আমার সঙ্গী কারা? তারা কি আমার আমলকে আল্লাহর কাছে বড় করে, নাকি শুধু মানুষের কানে জোরালো করে? লোক দেখানো মনে হবে এই ভয়ে কি কখনো কোনো ভালো কাজ আটকে রেখেছি, নিয়ত ঠিক করে কাজটা করার বদলে? আর কোন ছোট আমলকে আমি খুব সামান্য বলে বাদ দিয়েছি, যখন ৪:৪০ আয়াত বলে অণু পরিমাণও হারায় না?"
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
            "bn": "সূরা নিসা মাদানি। এর আগের আয়াতগুলো ৪:৩৬ আয়াতে মানুষের হক থেকে সরে আসে ৪:৩৭ থেকে ৪:৪০ আয়াতের কৃপণ আর লোক দেখানো খরচকারীদের কথায়। তারপর ৪:৪১ ও ৪:৪২ আয়াতে সেই দিনের কথা, যেদিন প্রত্যেক উম্মত থেকে সাক্ষী আনা হবে, আর কাফিররা চাইবে মাটি যদি তাদের ঢেকে সমান করে দিত। আমাদের আয়াত আবার ফেরে ঈমানদারদের দিকে, ইয়া আইয়ুহাল্লাযীনা আমানূ, হে ঈমানদারগণ, এই ডাক দিয়ে। ৪:২৯ আয়াতের পর এমন ডাক এই প্রথম। ঠিক পরে ৪:৪৪ আয়াত ফিরে তাকায় তাদের দিকে, যাদের কিতাবের একটা অংশ দেওয়া হয়েছিল।"
          },
          {
            "en": "The verse also has a place in time. Ibn Kathir states that it was revealed before intoxicants were completely prohibited, and he places it in a sequence. 2:219 had said that in wine and gambling is great sin and some benefit, and that the sin is greater. This verse then forbade approaching the prayer while intoxicated. The final word came in 5:90-91, which call intoxicants defilement from the work of Satan and command the believers to avoid them. The hadith section below gives the report behind that sequence.",
            "bn": "সময়ের হিসেবেও আয়াতটির একটা জায়গা আছে। ইবনে কাসীর বলেন, নেশাজাতীয় জিনিস পুরোপুরি হারাম হওয়ার আগে এটি নাজিল হয়েছিল, আর তিনি একে একটা ধারাবাহিকতায় বসান। ২:২১৯ আয়াত বলেছিল, মদ আর জুয়ায় বড় গুনাহ আছে, মানুষের কিছু উপকারও আছে, তবে গুনাহটাই বেশি। এরপর এই আয়াত নেশাগ্রস্ত অবস্থায় নামাজের কাছে যাওয়া নিষেধ করে। চূড়ান্ত কথা আসে ৫:৯০ ও ৫:৯১ আয়াতে, যা মদকে বলে শয়তানের কাজের নাপাকি, আর ঈমানদারদের তা বর্জন করতে বলে। এই ধারাবাহিকতার পেছনের বর্ণনাটি নিচে হাদিসের অংশে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Approach, Until, Intend",
          "bn": "কাছে যাওয়া, যতক্ষণ না, সংকল্প"
        },
        "p": [
          {
            "en": "The verse does not say do not pray. It says la taqrabu as-salata, do not approach the prayer, a prohibition that stops a person before he reaches the act. Then two limits follow, each introduced by hatta, until. The first is hatta ta'lamu ma taqulun, until you know what you are saying. The second is hatta taghtasilu, until you have washed. One limit concerns the mind, the other the body, and the prayer waits behind both.",
            "bn": "আয়াত বলে না নামাজ পড়ো না। বলে লা তাকরাবুস সালাহ, নামাজের কাছে যেয়ো না। এমন নিষেধ মানুষকে কাজটার কাছে পৌঁছানোর আগেই থামিয়ে দেয়। তারপর আসে দুটো সীমা, দুটোই হাত্তা দিয়ে শুরু, মানে যতক্ষণ না। প্রথমটি হাত্তা তা'লামূ মা তাকূলূন, যতক্ষণ না তোমরা বুঝতে পারো কী বলছ। দ্বিতীয়টি হাত্তা তাগতাসিলূ, যতক্ষণ না গোসল করো। একটা সীমা মনের, আরেকটা শরীরের, আর নামাজ অপেক্ষা করে দুটোরই ওপারে।"
          },
          {
            "en": "Ibn Kathir calls until you know what you are saying the best description of intoxication: the state in which a person does not know the meaning of his own words. The criterion is not a quantity of drink but the loss of understanding. The verse then gives the concession its name. Fa-tayammamu sa'idan tayyiban: Ibn Kathir explains that tayammum in the language means to intend or to aim for something, so the command is to seek out clean earth, which he explains as dust.",
            "bn": "যতক্ষণ না বুঝতে পারো কী বলছ, এই কথাকে ইবনে কাসীর বলেন নেশার সবচেয়ে ভালো বর্ণনা: এমন অবস্থা, যখন মানুষ নিজের কথার মানেই বোঝে না। মাপকাঠি এখানে কতটুকু পান করা হলো তা নয়, বোধ হারিয়ে যাওয়া। এরপর আয়াত ছাড়টির নাম দেয়। ফাতায়াম্মামূ সাঈদান তাইয়িবা: ইবনে কাসীর ব্যাখ্যা করেন, ভাষায় তায়াম্মুম মানে কোনো কিছুর সংকল্প করা, সেদিকে লক্ষ্য করা। তাই আদেশটা হলো পবিত্র মাটির খোঁজ করা, আর তিনি এই মাটির ব্যাখ্যা দেন ধুলা দিয়ে।"
          },
          {
            "en": "The closing pair is 'afuwwan ghafura, Pardoning, Forgiving. Ibn Kathir reads it directly into what came before: part of Allah's pardon and forgiveness is that He allows tayammum, and prayer after it, when there is no water, to make things easy for His servants. The names at the end are not a separate topic. They explain the concession the verse has just given.",
            "bn": "শেষের জোড়া নাম আফুওয়ান গাফূরা, মার্জনাকারী, ক্ষমাশীল। ইবনে কাসীর নাম দুটোকে আগের কথার সঙ্গেই পড়েন। তাঁর ব্যাখ্যায়, পানি না থাকলে তায়াম্মুম করে নামাজ পড়ার অনুমতি দেওয়া আল্লাহর মার্জনা আর ক্ষমারই অংশ, যাতে বান্দাদের জন্য কাজটা সহজ হয়। শেষের নাম দুটো আলাদা কোনো বিষয় নয়। আয়াত এইমাত্র যে ছাড় দিল, নাম দুটো তারই ব্যাখ্যা।"
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
            "bn": "প্রথম শব্দটারও একাধিক ব্যাখ্যা আছে। ইবনে কাসীরের বিস্তারিত তাফসীরে আছে, দাহহাক এখানে সুকরের মানে নিয়েছিলেন ঘুমের ঘোর, মদ নয়। আর ইমাম তাবারী বলেছেন, সঠিক অর্থ পানীয় থেকে আসা নেশা। অবস্থাটা কেন নামাজের অযোগ্য করে, ইবনে কাসীর তাও ব্যাখ্যা করেন: নেশাগ্রস্ত মানুষ তিলাওয়াতে স্পষ্ট ভুল করে, আর নামাজে বিনয়ী হতে পারে না।"
          },
          {
            "en": "The phrase illa 'abiri sabil, except those passing along a way, divided the early authorities. Ali (RA) read it as the traveller: a person in major impurity may not pray until he washes, unless he is on a journey and finds no water. Ibn Kathir reports from Ibn Abbas (RA) and a long list of early authorities that it means passing through a mosque without sitting in it. At-Tabari preferred the second, because the traveller who finds no water is named explicitly later in the same verse. Both app translations follow that reading in their brackets.",
            "bn": "ইল্লা আবিরী সাবীল, পথ অতিক্রমকারী ছাড়া, এই কথা নিয়ে প্রথম যুগের আলেমরা দুই ভাগ হয়েছেন। আলী (রাঃ) একে পড়েছেন মুসাফির হিসেবে: বড় নাপাকির অবস্থায় গোসল না করে নামাজ পড়া যাবে না, তবে সফরে থাকলে আর পানি না পেলে ভিন্ন কথা। ইবনে কাসীর ইবনে আব্বাস (রাঃ) আর প্রথম যুগের আরও অনেক আলেম থেকে বর্ণনা করেন যে এর মানে মসজিদে না বসে তার ভেতর দিয়ে চলে যাওয়া। ইমাম তাবারী দ্বিতীয় মতটাকে অগ্রাধিকার দিয়েছেন, কারণ পানি না পাওয়া মুসাফিরের কথা একই আয়াতে পরে আলাদা করে বলা আছে। এই অ্যাপের দুই অনুবাদই বন্ধনীতে সেই পাঠ অনুসরণ করেছে।"
          },
          {
            "en": "Aw lamastum an-nisa', or you have contacted women, is the third place of difference. Ibn Kathir reports from Ibn Abbas (RA), and similarly from Ali (RA) and Ubayy ibn Ka'b (RA), that it means intercourse, stated with a courteous indirectness. He also records that Ibn Mas'ud (RA) and Ibn Umar (RA) took it to include touching with the hand and kissing, and that this is the position of ash-Shafi'i and his companions. The difference shapes rulings on wudu, and this page leaves those to the scholars.",
            "bn": "আও লামাসতুমুন নিসা, অথবা তোমরা স্ত্রীদের স্পর্শ করেছ, এটা তৃতীয় মতভেদের জায়গা। ইবনে কাসীর ইবনে আব্বাস (রাঃ) থেকে, আর একইভাবে আলী (রাঃ) ও উবাই ইবনে কা'ব (রাঃ) থেকে বর্ণনা করেন যে এর মানে সহবাস, যা শালীনভাবে ইঙ্গিতে বলা হয়েছে। তিনি এটাও উল্লেখ করেন যে ইবনে মাসউদ (রাঃ) আর ইবনে উমর (রাঃ) এর মধ্যে হাত দিয়ে স্পর্শ আর চুম্বনও ধরেছেন, আর ইমাম শাফিঈ ও তাঁর অনুসারীদের মতও এটাই। এই মতভেদ থেকে অজুর বিধানে পার্থক্য তৈরি হয়। সে বিধান এই লেখা আলেমদের হাতেই ছেড়ে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer of Umar, a Lost Necklace",
          "bn": "উমরের দোয়া, হারানো হার"
        },
        "p": [
          {
            "en": "Ibn Kathir gives, in the wording of Abu Dawud, the report behind the sequence. When 2:219 was recited to Umar (RA), he said: O Allah, make the ruling on wine clear to us. When this verse came down and was recited to him, he said the same. After it, the people would not drink close to the times of prayer, and a caller would announce at prayer time that no one intoxicated should approach the prayer. When 5:90-91 were revealed, ending with so will you not desist, Umar (RA) said: we desist, we desist.",
            "bn": "ধারাবাহিকতার পেছনের বর্ণনাটি ইবনে কাসীর দিয়েছেন আবু দাউদের শব্দে। ২:২১৯ আয়াত যখন উমর (রাঃ)-কে পড়ে শোনানো হলো, তিনি বললেন: হে আল্লাহ, মদের বিধান আমাদের জন্য স্পষ্ট করে দিন। এই আয়াত নাজিল হয়ে তাঁকে শোনানো হলে তিনি আবারও একই কথা বললেন। এরপর লোকেরা নামাজের সময়ের কাছাকাছি আর পান করত না, আর নামাজের সময় একজন ঘোষণা দিত, নেশাগ্রস্ত কেউ যেন নামাজের কাছে না আসে। যখন ৫:৯০ ও ৫:৯১ আয়াত নাজিল হলো, যার শেষে আছে, তবু কি তোমরা বিরত হবে না, তখন উমর (রাঃ) বললেন: আমরা বিরত হলাম, আমরা বিরত হলাম।"
          },
          {
            "en": "For the tayammum clause Ibn Kathir brings a report from Aishah (RA) that al-Bukhari and Muslim record. On a journey, at al-Bayda' or Dhat al-Jaysh, her necklace broke and was lost. The Prophet ﷺ stayed to search for it, and so did the people, where there was no water. Abu Bakr (RA) came and reproached her while the Prophet ﷺ slept with his head on her lap. At dawn there was still no water, and Allah revealed the verses of tayammum. Usayd ibn Hudayr (RA) said: this is not the first blessing of yours, O family of Abu Bakr. When her camel was moved, the necklace was found beneath it.",
            "bn": "তায়াম্মুমের অংশের জন্য ইবনে কাসীর আয়েশা (রাঃ)-এর একটি বর্ণনা আনেন, যা ইমাম বুখারী ও মুসলিম উল্লেখ করেছেন। এক সফরে, বাইদা বা যাতুল জাইশ নামের জায়গায়, তাঁর হার ছিঁড়ে হারিয়ে যায়। নবী ﷺ সেটা খুঁজতে থেমে যান, সঙ্গের লোকেরাও থামে, অথচ সেখানে পানি ছিল না। আবু বকর (রাঃ) এসে মেয়েকে ভর্ৎসনা করেন, নবী ﷺ তখন তাঁর কোলে মাথা রেখে ঘুমিয়ে ছিলেন। ভোর হলো, তখনো পানি নেই, আর আল্লাহ তায়াম্মুমের আয়াত নাজিল করলেন। উসাইদ ইবনে হুদাইর (রাঃ) বললেন, হে আবু বকরের পরিবার, এটা তোমাদের প্রথম বরকত নয়। পরে আয়েশা (রাঃ)-এর উট সরাতেই তার নিচে হারটা পাওয়া গেল।"
          },
          {
            "en": "Which verse that report refers to is a real question. Ibn Kathir brings it here, under 4:43, as the reason tayammum was allowed. In his commentary on 5:6, he cites al-Bukhari's narration of the same event, in which the verse revealed is quoted with the opening words of 5:6. Both verses carry the same tayammum clause, and the report is attached to one or the other. This page records both placements and does not decide between them.",
            "bn": "বর্ণনাটি কোন আয়াতের কথা বলছে, প্রশ্নটা সত্যিই আছে। ইবনে কাসীর বর্ণনাটি এখানে, ৪:৪৩ আয়াতের অধীনে, তায়াম্মুমের অনুমতির কারণ হিসেবে এনেছেন। আবার ৫:৬ আয়াতের তাফসীরে তিনি একই ঘটনার বুখারীর বর্ণনা উল্লেখ করেন, যেখানে নাজিল হওয়া আয়াত হিসেবে ৫:৬ আয়াতের শুরুর শব্দগুলো উদ্ধৃত আছে। দুই আয়াতেই তায়াম্মুমের একই অংশ আছে, আর বর্ণনাটিকে কেউ এটার সঙ্গে, কেউ ওটার সঙ্গে যুক্ত করেন। এই লেখা দুটো অবস্থানই উল্লেখ করছে, কোনোটার পক্ষে রায় দিচ্ছে না।"
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
            "bn": "৫:৬ আয়াত অজুর পুরো বিবরণের পর তায়াম্মুমের অংশটা আবার বলে, আর সোজা ভাষায় কারণটাও জানিয়ে দেয়: আল্লাহ তোমাদের ওপর সংকীর্ণতা চাপাতে চান না, বরং তোমাদের পবিত্র করতে চান আর তোমাদের ওপর তাঁর নিয়ামত পূর্ণ করতে চান, যাতে তোমরা শুকরিয়া আদায় করো। রোজার বিধানে ২:১৮৫ আয়াত একই মূলনীতি বলে, একই দুই ব্যতিক্রমসহ, অসুস্থ আর মুসাফির: আল্লাহ তোমাদের জন্য সহজ চান, কঠিন চান না।"
          },
          {
            "en": "5:91 names what intoxicants take from a believer: Satan wants through them to cause enmity and hatred and to turn you away from the remembrance of Allah and from prayer. What our verse guarded for the length of a prayer, that verse guards for a whole life. And 23:2 describes the believers who succeed as those who are humbly intent in their prayer, which is exactly the state the drunk person, in Ibn Kathir's explanation, cannot reach.",
            "bn": "মদ মুমিনের কাছ থেকে কী কেড়ে নেয়, ৫:৯১ আয়াত তার নাম বলে দেয়: শয়তান মদ আর জুয়ার মাধ্যমে তোমাদের মধ্যে শত্রুতা আর বিদ্বেষ তৈরি করতে চায়, আর আল্লাহর জিকির ও নামাজ থেকে ফিরিয়ে রাখতে চায়। আমাদের আয়াত যা রক্ষা করেছিল এক নামাজের সময়টুকুর জন্য, সেই আয়াত তা রক্ষা করে সারা জীবনের জন্য। আর ২৩:২ আয়াত সফল মুমিনদের পরিচয় দেয় তাদের নামাজে বিনয়ী বলে। ইবনে কাসীরের ব্যাখ্যা অনুযায়ী, নেশাগ্রস্ত মানুষ ঠিক এই অবস্থাতেই পৌঁছাতে পারে না।"
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
            "bn": "মুমিনের জীবন থেকে নেশা বিদায় নিয়েছে, কিন্তু আয়াতের মাপকাঠি রয়ে গেছে। ইবনে কাসীর এর অধীনে একটি হাদিস আনেন, যা ইমাম বুখারী আনাস (রাঃ) থেকে বর্ণনা করেছেন: নামাজ পড়তে পড়তে তোমাদের কারও তন্দ্রা এলে সে যেন ফিরে গিয়ে ঘুমিয়ে নেয়, যতক্ষণ না বুঝতে পারে কী বলছে। ক্লান্তি, হাতে ধরা ফোন, কাজের চিন্তায় ছুটতে থাকা মন, এর যেকোনোটাই মানুষকে আয়াতের বর্ণিত অবস্থায় ফেলে দিতে পারে। তাকবীরের আগে এক মিনিট স্থির হওয়া, আর সূরা ফাতিহা ও নামাজের জিকিরগুলোর অর্থ শেখা, মেরামতের শুরু সেখান থেকেই।"
          },
          {
            "en": "The verse's other half closes a door that many people open for themselves. Ibn Kathir sums up the verse this way: prayer is too sacred to be performed in a deficient state, yet Allah makes exceptions for illness and the absence of water out of mercy. In a hospital bed, on a long journey, or where water cannot be used, the prayer is not dropped. Its purity is reduced to what the person can do. Learn how tayammum is done before the day it is needed, from a qualified teacher.",
            "bn": "আয়াতের দ্বিতীয় অর্ধেক এমন একটা দরজা বন্ধ করে, যা অনেকে নিজেরাই খুলে নেয়। ইবনে কাসীর গোটা আয়াতের সারকথা বলেন এভাবে: নামাজ এত পবিত্র যে তা ত্রুটিপূর্ণ অবস্থায় পড়া চলে না, তবু আল্লাহ দয়া করে অসুখ আর পানি না থাকার ব্যতিক্রম রেখেছেন। হাসপাতালের বিছানায়, দীর্ঘ সফরে, কিংবা যেখানে পানি ব্যবহার করা যায় না, সেখানে নামাজ বাদ পড়ে না। পবিত্রতার শর্ত নেমে আসে মানুষটার সাধ্যের মধ্যে। প্রয়োজনের দিন আসার আগেই যোগ্য শিক্ষকের কাছ থেকে তায়াম্মুমের নিয়ম শিখে নিন।"
          },
          {
            "en": "The sequence itself teaches something about change. The Companions were brought from 2:219 to 5:90-91 by stages, and Umar (RA) kept asking for clarity until it came. Those stages belong to the time of revelation, and the ruling that reached us is the final one. What a believer can take from them is the attitude: to want Allah's command to be clear, and to answer it, when it comes, with we desist.",
            "bn": "এই ধারাবাহিকতা পরিবর্তন সম্পর্কেও কিছু শেখায়। সাহাবিদের ধাপে ধাপে ২:২১৯ থেকে ৫:৯০ ও ৫:৯১ আয়াত পর্যন্ত আনা হয়েছিল, আর উমর (রাঃ) স্পষ্ট বিধান না আসা পর্যন্ত বারবার তা চেয়ে গেছেন। ধাপগুলো ছিল ওহি নাজিলের যুগের, আর আমাদের কাছে যে বিধান পৌঁছেছে সেটাই চূড়ান্ত। মুমিন এখান থেকে যা নিতে পারেন তা হলো মনোভাব: আল্লাহর হুকুম স্পষ্ট হোক, এই চাওয়া, আর হুকুম এলে জবাব দেওয়া, আমরা বিরত হলাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Help Me to Worship You Well",
          "bn": "সুন্দরভাবে ইবাদত করতে সাহায্য করুন"
        },
        "p": [
          {
            "en": "The Sunnah has a du'a that asks for exactly what this verse protects. Abu Dawud records from Mu'adh ibn Jabal (RA) that the Prophet ﷺ took his hand, told him that he loved him, and advised him never to leave off saying after every prayer: Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik, O Allah, help me to remember You, to thank You, and to worship You well. Worship done well is worship done knowing what one says.",
            "bn": "এই আয়াত যে জিনিসটা রক্ষা করে, সুন্নাহর একটি দোয়া ঠিক সেটাই চায়। ইমাম আবু দাউদ মুআয ইবনে জাবাল (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ তাঁর হাত ধরে বললেন, আমি তোমাকে ভালোবাসি। তারপর উপদেশ দিলেন, প্রতি নামাজের পর এই দোয়া কখনো ছাড়বে না: আল্লাহুম্মা আইন্নী আলা যিকরিকা ওয়া শুকরিকা ওয়া হুসনি ইবাদাতিক, হে আল্লাহ, আপনার জিকির, আপনার শুকরিয়া আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন। সুন্দর ইবাদত মানে বুঝে বুঝে ইবাদত।"
          },
          {
            "en": "Alongside it, a short supplication composed in the verse's own vocabulary, offered as such and not as a transmitted text: O Allah, let me never approach the prayer without knowing what I say; purify me for it as fully as I am able; when water fails me or my body fails me, do not let the prayer fail me; You are the Pardoning, the Forgiving, so pardon what was absent from my prayers and forgive what I did not understand.",
            "bn": "এর পাশাপাশি আয়াতের নিজের শব্দে গড়া ছোট একটা দোয়া। এটা বানানো দোয়া, কোনো বর্ণিত পাঠ নয়: হে আল্লাহ, আমি যেন কখনো না বুঝে নামাজের কাছে না যাই। আমার সাধ্যমতো আমাকে নামাজের জন্য পুরোপুরি পবিত্র করুন। পানি না পেলে বা শরীর সাথ না দিলে নামাজ যেন আমার হাতছাড়া না হয়। আপনি মার্জনাকারী, ক্ষমাশীল। তাই আমার নামাজে যা অনুপস্থিত ছিল তা মার্জনা করুন, আর যা বুঝিনি তা ক্ষমা করুন।"
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
            "bn": "শেষ নামাজে যা বলেছি, তার কতটুকু সত্যিই বুঝেছি, আর কতটুকু শুধু উচ্চারণ করেছি? নামাজের আগে কোন জিনিস অভ্যাসবশত আমার মাথা ঘোলা করে দেয়, আর নামাজের আগের পাঁচ মিনিটে কী বদলালে তা পরিষ্কার হতো? এমন কোনো সূরা কি আছে, যা রোজ পড়ি অথচ তার অর্থ কখনো শিখিনি?"
          },
          {
            "en": "Have I ever missed a prayer because I was ill, travelling or away from water, when Allah had already made a way for me? When a command of Allah is unclear to me, do I ask and seek, as Umar (RA) did, or do I leave it vague so that it asks nothing of me? And when it becomes clear, is my answer we desist?",
            "bn": "অসুস্থ ছিলাম, সফরে ছিলাম বা পানি ছিল না বলে কি কখনো নামাজ ছুটে গেছে, অথচ আল্লাহ আগেই আমার জন্য পথ করে রেখেছিলেন? আল্লাহর কোনো হুকুম অস্পষ্ট মনে হলে আমি কি উমর (রাঃ)-এর মতো জিজ্ঞেস করি, খুঁজি, নাকি অস্পষ্টই রেখে দিই, যাতে আমার ঘাড়ে কোনো দায় না চাপে? আর হুকুম স্পষ্ট হয়ে গেলে আমার জবাব কি হয়: আমরা বিরত হলাম?"
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
            "bn": "সূরা নিসা মাদানী। এই অংশে সূরাটি সেই সময়ের এক দলের জবাব দিচ্ছে। ৪:৪৯ আয়াত প্রশ্ন তোলে তাদের নিয়ে, যারা নিজেদের পবিত্র বলে দাবি করে, আর ৪:৫০ আয়াত দেখায় তারা আল্লাহর নামে কেমন মিথ্যা রচনা করে। ৪:৫১ আয়াত বলে তাদের কথা, যাদের কিতাবের একাংশ দেওয়া হয়েছিল, আর যারা কাফিরদের সম্পর্কে বলত, তারাই মুমিনদের চেয়ে বেশি সঠিক পথে। ৪:৫২ আয়াত জানায়, আল্লাহ তাদের লানত করেছেন। তারপর ৪:৫৩ আয়াত জিজ্ঞেস করে: রাজত্বে কি তাদের কোনো অংশ আছে? থাকলে তো তারা মানুষকে তিল পরিমাণও দিত না। আমাদের আয়াতও শুরু হয় সেই একই শব্দ আম (অথবা) দিয়ে, আর তোলে দ্বিতীয় প্রশ্ন।"
          },
          {
            "en": "The verses describe a particular group who said a particular thing at a particular time, and 4:55 is careful to say that some among them believed while some turned away. The commentators identify whom the envy was aimed at. Ibn Kathir says it was envy of the Prophet ﷺ for the prophethood Allah had entrusted to him, and that their envy led them to reject him because he was an Arab and not of the Children of Israel. Al-Muyassar adds envy of his Companions, for the faith they had been guided to and their following of the Messenger.",
            "bn": "আয়াতগুলো নির্দিষ্ট একটি দলের কথা বলে, যারা নির্দিষ্ট সময়ে নির্দিষ্ট একটা কথা বলেছিল। আর ৪:৫৫ আয়াত সতর্কভাবে জানায়, তাদের কেউ ঈমান এনেছিল, কেউ মুখ ফিরিয়েছিল। হিংসা কার প্রতি ছিল, মুফাসসিররা তা চিহ্নিত করেছেন। ইবনে কাসীর বলেন, এ ছিল নবী ﷺ-এর প্রতি হিংসা, আল্লাহ তাঁকে যে নবুওয়াত দিয়েছিলেন তার জন্য। আর এই হিংসাই তাদের তাঁকে প্রত্যাখ্যানের দিকে ঠেলে দিয়েছিল, কারণ তিনি ছিলেন আরব, বনী ইসরাঈলের কেউ নন। আল-মুয়াসসার এর সঙ্গে যোগ করে সাহাবিদের প্রতি হিংসার কথা: তাঁরা ঈমানের পথ পেয়েছিলেন, রাসূলের অনুসরণ করতেন, সে জন্য।"
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
            "bn": "আম ইয়াহসুদূনান নাস: অথবা তারা কি মানুষকে হিংসা করে? আম শব্দটা এই প্রশ্নকে ৪:৫৩ আয়াতের প্রশ্নের সঙ্গে জুড়ে দেয়। ফলে দুটো প্রশ্ন জোড়া হয়ে পাশাপাশি দাঁড়ায়। ইবনে কাসীর ৪:৫৩ আয়াতের প্রশ্নটাকে বলেন তিরস্কার, কারণ রাজত্বে তাদের কোনো অংশ নেই। দ্বিতীয় প্রশ্নটাও আসে একই ধাঁচে। কোনোটাই তথ্য জানতে চাওয়া নয়। দুটোই উত্তরটা শ্রোতার হাতে ছেড়ে দেয়, যাতে সে নিজেই দেখে। প্রথম প্রশ্নটা ফাঁস করে দেয় এমন কৃপণতা, যা কাউকে কিছুই দিতে চায় না। দ্বিতীয়টা নাম ধরে বলে দেয়, তার নিচে কী লুকিয়ে আছে।"
          },
          {
            "en": "Hasad is more than wanting what another has. Al-Muyassar's gloss on this verse spells out its sharpest edge: they wish that this bounty would be taken away from those who were given it. That wish is what separates envy from ordinary longing. And the object of the envy is named with care: ma atahumu Allahu min fadlihi, what Allah has given them of His bounty. The gift is traced to its Giver twice, by the verb and by the word fadl, a grace no one was owed. The wording itself suggests that resentment of the gift reaches, in the end, toward the One who gave it.",
            "bn": "হাসাদ মানে কেবল অন্যের জিনিস নিজের জন্য চাওয়া নয়। এই আয়াতের ব্যাখ্যায় আল-মুয়াসসার এর সবচেয়ে ধারালো দিকটা খুলে বলে: তারা চায়, যাদের এই অনুগ্রহ দেওয়া হয়েছে তাদের কাছ থেকে তা চলে যাক। সাধারণ আকাঙ্ক্ষা থেকে হিংসাকে আলাদা করে এই চাওয়াটাই। আর কীসের প্রতি হিংসা, আয়াত সেটাও বলেছে যত্ন করে: মা আতাহুমুল্লাহু মিন ফাদলিহী, আল্লাহ নিজ অনুগ্রহ থেকে তাদের যা দিয়েছেন। দানটা যে দাতার কাছ থেকে এসেছে, আয়াত তা দুবার মনে করিয়ে দেয়: একবার ক্রিয়াপদে, আরেকবার ফাদল শব্দে। ফাদল মানে এমন অনুগ্রহ, যা কারও পাওনা ছিল না। আয়াতের এই ভাষাই ইঙ্গিত দেয়, দানের প্রতি ক্ষোভ শেষ পর্যন্ত গিয়ে ঠেকে দাতার দিকে।"
          },
          {
            "en": "The second half of the verse brings the Giver forward to speak for Himself. The verse began, Allah has given them; then comes fa-qad atayna, We had already given, and wa ataynahum, and We gave them. The verb of giving comes three times in one verse, and in the last two Allah speaks of His own giving directly: the family of Ibrahim received the Book, wisdom and a great kingdom. The answer to envy here is not an argument about merit. It is a reminder of who has been giving all along.",
            "bn": "আয়াতের দ্বিতীয় অর্ধে দাতা নিজেই সামনে এসে কথা বলেন। শুরুতে বলা হয়েছিল, আল্লাহ তাদের দিয়েছেন। তারপর আসে ফাকাদ আতাইনা, আমি তো আগেই দিয়েছিলাম, আর ওয়া আতাইনাহুম, আর তাদের দিয়েছিলাম। দেওয়ার ক্রিয়াটি এক আয়াতে তিনবার আসে, আর শেষ দুবার আল্লাহ নিজের দানের কথা নিজেই বলেন: ইবরাহীমের বংশধরেরা পেয়েছিল কিতাব, হিকমাত আর বিশাল রাজত্ব। এখানে হিংসার জবাব যোগ্যতা নিয়ে তর্ক নয়। জবাব হলো মনে করিয়ে দেওয়া, শুরু থেকে দিয়ে আসছেন কে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Family of Ibrahim Received",
          "bn": "ইবরাহীমের বংশ কী পেয়েছিল"
        },
        "p": [
          {
            "en": "Ibn Kathir explains the family of Ibrahim as the tribes of the Children of Israel, who are among Ibrahim's offspring: Allah gave them prophethood, sent down Books to them, and made kings among them, and their prophets ruled them by prophetic guidance. As-Sa'di names Dawud and Sulayman (AS) among the prophets honoured with that kingship, and then draws out the argument: why then refuse to accept that Allah gave prophethood, victory and rule to Muhammad ﷺ? Al-Muyassar explains the wisdom as what was revealed to them that was not a recited Book.",
            "bn": "ইবনে কাসীর ইবরাহীমের বংশধর বলতে বোঝান বনী ইসরাঈলের গোত্রগুলোকে, যারা ইবরাহীম (আঃ)-এর সন্তানদের অন্তর্ভুক্ত। আল্লাহ তাদের নবুওয়াত দিয়েছিলেন, তাদের কাছে কিতাব নাজিল করেছিলেন, তাদের মধ্যে রাজা বানিয়েছিলেন, আর তাদের নবীরা নবুওয়াতের আদর্শে তাদের শাসন করতেন। আস-সাদী সেই রাজত্বে সম্মানিত নবীদের মধ্যে দাউদ ও সুলাইমান (আঃ)-এর নাম নেন, তারপর যুক্তিটা সামনে আনেন: তাহলে আল্লাহ মুহাম্মাদ ﷺ-কে নবুওয়াত, বিজয় আর শাসন দিয়েছেন, এটা মেনে নিতে আপত্তি কেন? আল-মুয়াসসারের ব্যাখ্যায় হিকমাত হলো তাদের কাছে আসা সেই ওহি, যা তিলাওয়াতের কিতাব ছিল না।"
          },
          {
            "en": "4:55 then says fa-minhum man amana bihi, some among them believed in it, and some were averse to it. The commentators differ over the pronoun. Ibn Kathir first takes it as Allah's favour just described, the prophets, Books and kingship: some of the Children of Israel believed in it and some rejected it, though it came from among them and for them. He then gives Mujahid's reading, that it means believing in him, the Prophet ﷺ, and as-Sa'di reads it the same way. Both readings keep the verse's own fairness. It does not say that all of them turned away.",
            "bn": "এরপর ৪:৫৫ আয়াত বলে ফামিনহুম মান আমানা বিহী, তাদের কেউ তাতে ঈমান এনেছিল, আর কেউ তা থেকে মুখ ফিরিয়ে রেখেছিল। সর্বনামটা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। ইবনে কাসীর প্রথমে একে ধরেন আল্লাহর সেই অনুগ্রহ হিসেবে, যার কথা এইমাত্র বলা হলো: নবীগণ, কিতাব আর রাজত্ব। বনী ইসরাঈলের কেউ তাতে ঈমান এনেছিল, কেউ অস্বীকার করেছিল, যদিও তা এসেছিল তাদের মধ্য থেকেই, তাদেরই জন্য। তারপর তিনি মুজাহিদের ব্যাখ্যা আনেন: এর মানে তাঁর প্রতি, অর্থাৎ নবী ﷺ-এর প্রতি ঈমান আনা। আস-সাদীর ব্যাখ্যাও তাই। দুই ব্যাখ্যাতেই আয়াতের নিজের ইনসাফ অটুট থাকে। আয়াত বলে না যে তাদের সবাই মুখ ফিরিয়েছিল।"
          },
          {
            "en": "The verse closes: and sufficient is Hell as a blaze. Ibn Kathir calls it a just recompense for disbelief, rebellion and defiance of Allah's Books and messengers. The verses that follow, 4:56-57, set the Fire and the Gardens side by side. For a reader today the weight of this passage falls less on identifying a people than on recognising a sickness. In these verses envy was strong enough to turn people away from a prophet, and as-Sa'di links it to the statement of 4:51, that the disbelievers were better guided than the believers.",
            "bn": "আয়াত শেষ হয় এভাবে: আর দগ্ধ করার জন্য জাহান্নামই যথেষ্ট। ইবনে কাসীর একে বলেন কুফরি, বিদ্রোহ আর আল্লাহর কিতাব ও রাসূলদের বিরোধিতার ন্যায্য প্রতিফল। পরের দুই আয়াত, ৪:৫৬ ও ৪:৫৭, আগুন আর জান্নাতকে পাশাপাশি রাখে। আজকের পাঠকের জন্য এই অংশের ভার কোনো জাতিকে চিহ্নিত করায় যতটা, তার চেয়ে বেশি একটা রোগ চিনে নেওয়ায়। এই আয়াতগুলোতে হিংসা এতটাই প্রবল ছিল যে তা মানুষকে একজন নবী থেকে ফিরিয়ে দিয়েছিল। আর আস-সাদী একে জুড়ে দেন ৪:৫১ আয়াতের সেই কথার সঙ্গে, কাফিররাই মুমিনদের চেয়ে বেশি সঠিক পথে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Envy Except in Two",
          "bn": "দুই ক্ষেত্র ছাড়া হিংসা নেই"
        },
        "p": [
          {
            "en": "Ibn Kathir does not attach a particular hadith to this verse, and this page will not fill the place with a weak one. But a hadith on envy speaks of two of the same kinds of gift. Al-Bukhari records from Abdullah ibn Mas'ud (RA) that the Prophet ﷺ said: there is no envy except in two cases, a man to whom Allah has given wealth and who spends it in what is right, and a man to whom Allah has given wisdom, who judges by it and teaches it. Wealth and hikmah stand in the hadith as a kingdom and wisdom stand in 4:54.",
            "bn": "ইবনে কাসীর এই আয়াতের সঙ্গে নির্দিষ্ট কোনো হাদিস জুড়ে দেননি, আর এই লেখাও দুর্বল কোনো বর্ণনা দিয়ে সেই জায়গা ভরাবে না। তবে হিংসা নিয়ে একটি হাদিসে একই ধরনের দুটি দানের কথা আছে। ইমাম বুখারী আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দুই ক্ষেত্র ছাড়া হিংসা নেই। এক, এমন মানুষ যাকে আল্লাহ সম্পদ দিয়েছেন, আর সে তা ন্যায়ের পথে খরচ করে। দুই, এমন মানুষ যাকে আল্লাহ হিকমাত দিয়েছেন, আর সে তা দিয়ে ফয়সালা করে ও অন্যকে শেখায়। ৪:৫৪ আয়াতে যেমন রাজত্ব আর হিকমাত, হাদিসে তেমনি সম্পদ আর হিকমাত।"
          },
          {
            "en": "The commentators on this hadith explain envy in it as ghibtah: wishing to have the like of someone's blessing without wishing it taken from him. That is the very line al-Muyassar draws at 4:54, where the envy condemned is the wish that the bounty be removed. So the Prophet ﷺ did not ask believers to feel nothing when they see another given more. He turned that feeling toward two things worth competing for, and away from the wish that anyone lose what Allah gave them.",
            "bn": "এই হাদিসের ব্যাখ্যাকারীরা বলেন, এখানে হিংসা মানে গিবতা: কারও নিয়ামতের মতো নিয়ামত নিজেও পেতে চাওয়া, কিন্তু তার কাছ থেকে তা চলে যাক এমন না চাওয়া। ৪:৫৪ আয়াতে আল-মুয়াসসারও ঠিক এই পার্থক্যটাই করে: নিন্দিত হিংসা হলো অনুগ্রহ সরে যাওয়ার কামনা। তাই অন্য কাউকে বেশি পেতে দেখলে মুমিন কিছুই অনুভব করবে না, নবী ﷺ এমন কথা বলেননি। তিনি সেই অনুভূতিকে ঘুরিয়ে দিয়েছেন প্রতিযোগিতার যোগ্য দুটি জিনিসের দিকে, আর সরিয়ে এনেছেন এই কামনা থেকে যে আল্লাহর দেওয়া জিনিস কেউ হারাক।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard Alongside",
          "bn": "পাশাপাশি পড়ার আয়াত"
        },
        "p": [
          {
            "en": "4:32, earlier in this same surah, gives the believer's side of the lesson: do not wish for that by which Allah has made some of you exceed others, and ask Allah of His bounty. The word fadl returns, and it turns the eye from another person's share toward the Giver. 43:32 answers a related objection, from people who questioned the choice of the one to whom the revelation came: do they distribute the mercy of your Lord? It is Allah who has apportioned their livelihood among them and raised some above others in degrees.",
            "bn": "এই সূরারই আগের দিকে ৪:৩২ আয়াত শিক্ষাটার মুমিনের দিকটা বলে দেয়: আল্লাহ যা দিয়ে তোমাদের কাউকে কারও ওপর মর্যাদা দিয়েছেন, তা কামনা করো না, আর আল্লাহর কাছে তাঁর অনুগ্রহ চাও। সেখানেও ফাদল শব্দ ফিরে আসে, আর চোখটাকে অন্যের ভাগ থেকে সরিয়ে দাতার দিকে ফেরায়। ৪৩:৩২ আয়াত জবাব দেয় কাছাকাছি একটা আপত্তির, যারা প্রশ্ন তুলেছিল ওহি কার ওপর এল তা নিয়ে: তারা কি তোমার রবের রহমত বণ্টন করে? দুনিয়ার জীবনে তাদের জীবিকা আল্লাহই বণ্টন করেছেন, আর মর্যাদায় একজনকে আরেকজনের ওপর তুলেছেন।"
          },
          {
            "en": "62:4 states the rule in a single line: that is the bounty of Allah, which He gives to whom He wills, and Allah is the possessor of great bounty. 20:131 gives a practice: do not extend your eyes toward the enjoyment given to others, the splendour of worldly life by which they are tested, for the provision of your Lord is better and more enduring. And 113:5 teaches the believer to seek refuge from the evil of an envier when he envies, a reminder that envy harms others as well as the heart that carries it.",
            "bn": "৬২:৪ আয়াত নীতিটা এক লাইনে বলে দেয়: এটা আল্লাহর অনুগ্রহ, যাকে ইচ্ছা তিনি দেন, আর আল্লাহ মহা অনুগ্রহের মালিক। ২০:১৩১ আয়াত দেয় একটা আমল: অন্যদের যে ভোগের সামগ্রী দেওয়া হয়েছে, দুনিয়ার সেই চাকচিক্য, যা দিয়ে তাদের পরীক্ষা করা হয়, সেদিকে চোখ তুলে তাকিয়ো না। তোমার রবের দেওয়া রিজিকই উত্তম ও বেশি স্থায়ী। আর ১১৩:৫ আয়াত মুমিনকে শেখায় হিংসুকের অনিষ্ট থেকে আশ্রয় চাইতে, যখন সে হিংসা করে। এটা মনে করিয়ে দেয়, হিংসা যে মনে থাকে শুধু তারই ক্ষতি করে না, অন্যেরও করে।"
          }
        ]
      },
      {
        "h": {
          "en": "When Someone Else Is Given",
          "bn": "যখন অন্য কেউ পায়"
        },
        "p": [
          {
            "en": "Envy rarely announces itself. It shows up as a flicker of discomfort at a cousin's wedding, a colleague's promotion, a friend's child who did better in exams. The verse gives a test for that moment. The question is not whether I wanted the same thing; wanting is human. The question is whether some part of me wishes it had not been given to them. If it does, admit it to yourself honestly, and remember whose giving it was: what Allah has given them of His bounty.",
            "bn": "হিংসা খুব কমই ঢাকঢোল পিটিয়ে আসে। আসে চাচাতো ভাইয়ের বিয়েতে, সহকর্মীর পদোন্নতিতে, বন্ধুর সন্তানের ভালো রেজাল্টে মনের ভেতর হালকা একটা খচখচানি হয়ে। সেই মুহূর্তের জন্য আয়াত একটা পরীক্ষা দেয়। প্রশ্নটা এই নয় যে আমিও একই জিনিস চেয়েছিলাম কি না। চাওয়া মানুষেরই স্বভাব। প্রশ্ন হলো, আমার ভেতরের কোনো অংশ কি চাইছে, জিনিসটা তাকে না দেওয়া হলেই ভালো হতো? যদি চায়, নিজের কাছে সততার সঙ্গে তা স্বীকার করুন, আর মনে রাখুন দানটা কার: আল্লাহ নিজ অনুগ্রহে তাকে যা দিয়েছেন।"
          },
          {
            "en": "Then turn the feeling where the hadith turns it. If what you envy is wealth, the gift worth longing for is wealth spent in what is right, and you can begin with what you already have. If it is knowledge, the gift worth longing for is knowledge acted on and taught, and you can begin learning today. And make du'a for the person by name, asking Allah to bless them in what He gave. It is hard to go on wishing a blessing away from someone you are praying for.",
            "bn": "তারপর অনুভূতিটাকে সেদিকে ঘোরান, যেদিকে হাদিস ঘুরিয়েছে। যদি সম্পদ দেখে হিংসা হয়, তবে কামনার যোগ্য দান হলো ন্যায়ের পথে খরচ করা সম্পদ, আর তা শুরু করা যায় আপনার হাতে যা আছে তা দিয়েই। যদি জ্ঞান দেখে হয়, তবে কামনার যোগ্য দান হলো এমন জ্ঞান, যার ওপর আমল হয় আর যা শেখানো হয়, আর তা শেখা আজই শুরু করা যায়। আর মানুষটির নাম ধরে তার জন্য দোয়া করুন, আল্লাহ তাকে যা দিয়েছেন তাতে যেন বরকত দেন। যার জন্য দোয়া করছেন, তার নিয়ামত চলে যাক, এমন কামনা বেশিদিন টিকিয়ে রাখা কঠিন।"
          },
          {
            "en": "Envy also leaks into speech and judgment. On a small scale it is the habit of finding a fault in every person who is praised, or refusing to admit that a rival is right. When you notice yourself doing that, stop and ask what the person has been given, and by whom. And do not let this passage become a reason for contempt toward any community today. The Quran itself took care to say that some among them believed, and its lesson is aimed first at the heart of the one reading it.",
            "bn": "হিংসা কথাবার্তা আর বিচারেও চুঁইয়ে পড়ে। ছোট পরিসরে এটা এমন অভ্যাস, যে কারও প্রশংসা হলেই তার একটা দোষ খুঁজে বের করা, কিংবা প্রতিদ্বন্দ্বী ঠিক বললেও তা মানতে না চাওয়া। নিজেকে এমন করতে দেখলে থামুন, আর জিজ্ঞেস করুন মানুষটিকে কী দেওয়া হয়েছে, আর কে দিয়েছেন। আর এই অংশকে আজকের কোনো সম্প্রদায়ের প্রতি অবজ্ঞার কারণ বানাবেন না। কুরআন নিজেই যত্ন করে বলেছে, তাদের কেউ কেউ ঈমান এনেছিল। আর এর শিক্ষা সবার আগে পাঠকের নিজের অন্তরের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Refuge From Envy, Both Ways",
          "bn": "দুই দিকের হিংসা থেকে আশ্রয়"
        },
        "p": [
          {
            "en": "Two Quranic prayers meet this verse from two sides. Surah al-Falaq, recited morning and evening by many believers, ends in 113:5 with refuge from the evil of an envier when he envies. That protects you from the envy of others. And 59:10 protects you from your own: our Lord, forgive us and our brothers who preceded us in faith, and put not in our hearts any resentment toward those who have believed. Our Lord, indeed You are Kind and Merciful. Between them they cover both the one who is envied and the one who envies.",
            "bn": "কুরআনের দুটি দোয়া এই আয়াতের দুই দিক থেকে এসে মেলে। অনেক মুমিন সকাল-সন্ধ্যা সূরা ফালাক পড়েন। এর শেষ আয়াত ১১৩:৫-এ আশ্রয় চাওয়া হয় হিংসুকের অনিষ্ট থেকে, যখন সে হিংসা করে। এটা আপনাকে রক্ষা করে অন্যের হিংসা থেকে। আর ৫৯:১০ আয়াত রক্ষা করে আপনার নিজের হিংসা থেকে: হে আমাদের রব, আমাদের ক্ষমা করুন, আর আমাদের সেই ভাইদেরও, যারা ঈমানে আমাদের আগে গেছেন। আর যারা ঈমান এনেছে, তাদের ব্যাপারে আমাদের অন্তরে কোনো বিদ্বেষ রাখবেন না। হে আমাদের রব, আপনি তো দয়ার্দ্র, পরম দয়ালু। দুটি মিলে যাকে হিংসা করা হয় আর যে হিংসা করে, দুজনকেই ঢেকে দেয়।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, what You have given others of Your bounty, make me glad for them. Give me of Your bounty, for all bounty is Yours. Do not let my heart wish any gift of Yours removed from anyone. Protect me from the envy of others, and protect others from mine.",
            "bn": "আয়াতের নিজের শব্দে গড়া একটি দোয়া। এটা বানানো দোয়া, বর্ণিত কোনো দোয়া নয়: হে আল্লাহ, আপনি নিজ অনুগ্রহে অন্যদের যা দিয়েছেন, তাতে তাদের জন্য আমাকে খুশি হতে দিন। আপনার অনুগ্রহ থেকে আমাকেও দিন, কারণ সব অনুগ্রহ আপনারই। আপনার কোনো দান কারও কাছ থেকে চলে যাক, আমার মন যেন এমন কামনা না করে। অন্যের হিংসা থেকে আমাকে রক্ষা করুন, আর আমার হিংসা থেকে অন্যদের রক্ষা করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for an Honest Heart",
          "bn": "খোলা মনে কয়েকটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry from these verses. Whose blessing do I find hardest to be glad about, and what is it about that person that makes it hard? When I heard good news about someone recently, was my first feeling gladness, or a quiet wish that it had gone to me instead? Do I think of the good things in other people's lives as taken from my share, or as given to them by Allah from a bounty that has no limit?",
            "bn": "এই আয়াতগুলো থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। কার নিয়ামতে খুশি হওয়া আমার কাছে সবচেয়ে কঠিন, আর সেই মানুষটির কোন ব্যাপারটা একে কঠিন করে তোলে? সম্প্রতি কারও সুখবর শুনে আমার প্রথম অনুভূতি কী ছিল, খুশি, নাকি মনে মনে চাওয়া যে এটা আমার হলে ভালো হতো? অন্যদের জীবনের ভালো জিনিসগুলোকে কি আমি আমার ভাগ থেকে কেড়ে নেওয়া মনে করি, নাকি আল্লাহর সীমাহীন অনুগ্রহ থেকে তাদের দেওয়া দান?"
          },
          {
            "en": "What has Allah given me that I have stopped noticing because I keep looking at others? Is there someone I have spoken against, or refused to credit, only because they were given what I wanted? And if the two gifts of the hadith, wealth spent rightly and wisdom taught, were the only things I let myself compete for, how would my week look different?",
            "bn": "অন্যদের দিকে তাকিয়ে থাকতে থাকতে আল্লাহর দেওয়া কোন জিনিস আমার চোখেই পড়ে না? এমন কেউ কি আছে, যার বিরুদ্ধে আমি কথা বলেছি বা যার কৃতিত্ব মানিনি, শুধু এই কারণে যে আমি যা চেয়েছিলাম সে তা পেয়েছে? আর হাদিসের সেই দুটি দান, ন্যায়ের পথে খরচ করা সম্পদ আর শেখানো হিকমাত, যদি এগুলোই হতো আমার একমাত্র প্রতিযোগিতার বিষয়, তাহলে আমার সপ্তাহটা কতটা অন্যরকম হতো?"
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
          "bn": "জোড়ার দ্বিতীয় অর্ধেক"
        },
        "p": [
          {
            "en": "Surah an-Nisa is a Madinan surah, and this stretch of it answers a group who were given a portion of the Scripture and who, in 4:51, said of the disbelievers that they were better guided than the believers. 4:54 asks whether they envy people for what Allah has given them of His bounty, and 4:55 says that some of them believed in it and some were averse to it, and Hell is sufficient as a blaze. 4:56 then describes the Fire for those who disbelieve in Allah's verses, where skins are replaced so the punishment is tasted again. 4:57 opens with wa, and, and turns to the other side.",
            "bn": "সূরা আন-নিসা মাদানী সূরা। এর এই অংশে সূরাটি জবাব দিচ্ছে এমন এক দলকে, যাদের কিতাবের একাংশ দেওয়া হয়েছিল, আর যারা ৪:৫১ আয়াত অনুযায়ী কাফিরদের সম্পর্কে বলত, তারাই মুমিনদের চেয়ে বেশি সঠিক পথে আছে। ৪:৫৪ আয়াত প্রশ্ন করে, আল্লাহ নিজ অনুগ্রহে মানুষকে যা দিয়েছেন, তার জন্য কি তারা হিংসা করে? ৪:৫৫ আয়াত বলে, তাদের কেউ ঈমান এনেছে, কেউ মুখ ফিরিয়েছে, আর প্রজ্বলিত জাহান্নামই যথেষ্ট। এরপর ৪:৫৬ আয়াতে আছে আল্লাহর আয়াত অস্বীকারকারীদের আগুন, যেখানে চামড়া বদলে দেওয়া হবে যেন শাস্তির স্বাদ বারবার পায়। ৪:৫৭ আয়াতের শুরু ওয়া (আর) দিয়ে, আর এখান থেকেই আয়াত অন্য পক্ষের দিকে ফেরে।"
          },
          {
            "en": "Ibn Kathir explains, at 2:25, that this kind of pairing is part of why the Quran is called mathani: it mentions faith and then disbelief, the miserable and then the happy, one after the other. Here the pairing is tight. Both verses speak in Allah's own voice with a verb of the future, We will make them enter a fire, and We will admit them to gardens, so the reader hears one against the other. And the verse that follows, 4:58, moves straight to rendering trusts and judging with justice, so the promise lands between a warning and a command to act.",
            "bn": "ইবনে কাসীর ২:২৫ আয়াতের ব্যাখ্যায় বলেন, কুরআনকে মাসানি বলার একটি কারণ এই জোড়া বাঁধা: ঈমানের কথা, তারপর কুফরের কথা; হতভাগাদের কথা, তারপর সৌভাগ্যবানদের কথা, একটির পর আরেকটি। এখানে জোড়াটা খুব ঘনিষ্ঠ। দুটি আয়াতেই আল্লাহ নিজে কথা বলছেন ভবিষ্যৎ কালের ক্রিয়ায়: আমি তাদের আগুনে প্রবেশ করাব, আর আমি তাদের জান্নাতে দাখিল করব। ফলে পাঠক একটিকে অন্যটির পাশে রেখেই শোনে। আর পরের আয়াত ৪:৫৮ সোজা চলে যায় আমানত ফিরিয়ে দেওয়া আর ন্যায়বিচারের নির্দেশে। প্রতিশ্রুতিটি তাই এসে বসে এক সতর্কবাণী আর এক কাজের নির্দেশের মাঝখানে।"
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
            "bn": "আল্লাযীনা আমানূ ওয়া আমিলুস সালিহাত, যারা ঈমান আনে ও নেক আমল করে। দুটিকে জুড়েছে একটিমাত্র ওয়া, আর কুরআন আয়াতের পর আয়াতে এ দুটিকে জুড়েই রাখে, যেমন ২:২৫, ২:৮২ ও ১০৩:৩ আয়াতে। আস-সালিহাত বহুবচন, নির্দিষ্টও। মানে একবার করা কোনো একক ভালো কাজ নয়, বরং নেক আমল যখন জীবনের ধরন হয়ে যায়। তাফসীরে মুয়াসসার এখানে তাদের কথা বলে, যাদের অন্তর আল্লাহর প্রতি ঈমান আর তাঁর রাসূল ﷺ-এর রিসালাতের স্বীকৃতিতে প্রশান্ত হয়েছে, আর যারা আনুগত্যে অটল থেকেছে। সেই ব্যাখ্যায় ঈমান আর অবিচলতা দুটিই আছে।"
          },
          {
            "en": "As-Sa'di draws the link between the two halves plainly: these are people whose faith moved them to do righteous deeds, both the obligatory and the recommended. Faith is the root, and the deeds are what grows from it. Ahsanul Bayaan, the Bengali tafsir in the app, makes the same point with an image, that faith without righteous deeds is like a flower without fragrance or a tree without fruit. The promise is addressed to a person, and the verse names that person by two things that are not meant to be separated.",
            "bn": "আল্লামা সাদি দুই অংশের সম্পর্কটা সোজাসুজি বলেন: এরা এমন মানুষ, যাদের ঈমান তাদের নেক আমলে চালিত করেছে, ফরজ আমলেও, মুস্তাহাব আমলেও। ঈমান হলো শিকড়, আর আমল তা থেকে গজিয়ে ওঠা ডালপালা। অ্যাপে থাকা বাংলা তাফসীর আহসানুল বায়ান একই কথা বলে একটি উপমায়: নেক আমল ছাড়া ঈমান যেন সুবাসহীন ফুল, ফলহীন গাছ। প্রতিশ্রুতিটি একজন মানুষের উদ্দেশে, আর আয়াতটি সেই মানুষকে চেনায় এমন দুটি জিনিস দিয়ে, যা আলাদা করার জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Forever, Purity and Shade",
          "bn": "চিরকাল, পবিত্রতা ও ছায়া"
        },
        "p": [
          {
            "en": "Khalidina fiha abada, abiding therein forever. Khalidin already carries lasting residence, and abada, forever, is added to it. Ibn Kathir says they will reside in it for eternity, will not be moved from it, and will not want to move, which is what 18:108 says of the people of Firdaws. Then azwajun mutahharah, purified spouses. The form is a passive participle, made pure, with the purifying left to Allah. Ibn Kathir describes them as free of filth, bad manners and shortcomings, and gathers from Ibn Abbas (RA) that they are purified of filth and foul things.",
            "bn": "খালিদীনা ফীহা আবাদা, সেখানে তারা চিরকাল থাকবে। খালিদীন শব্দেই স্থায়ী বসবাসের অর্থ আছে, তার সঙ্গে যোগ হয়েছে আবাদা, চিরকাল। ইবনে কাসীর বলেন, তারা সেখানে অনন্তকাল থাকবে, তাদের সেখান থেকে সরানো হবে না, আর তারা নিজেরাও সরে যেতে চাইবে না। ১৮:১০৮ আয়াত ফিরদাউসবাসীদের সম্পর্কে ঠিক এ কথাই বলে। তারপর আযওয়াজুম মুতাহহারাহ, পবিত্র সঙ্গী। শব্দটি কর্মবাচ্য, অর্থাৎ পবিত্র করা হয়েছে, আর পবিত্র করার কাজটি আল্লাহর। ইবনে কাসীর নিজে বলেন, তারা ময়লা, মন্দ স্বভাব ও ত্রুটি থেকে মুক্ত। আর ইবনে আব্বাস (রাঃ) থেকে আনেন, তারা ময়লা ও অশুচি থেকে পবিত্র।"
          },
          {
            "en": "Then the last clause: wa nudkhiluhum zillan zalila, and We will admit them to deepening shade. The verb of admitting is used a second time, now for the shade alone, as if the shade were a place of its own. The noun and its adjective come from one root, zill and zalil, a pairing Arabic uses to intensify. Ibn Kathir explains it as wide, extensive, pure and fine; al-Muyassar calls it thick and extended, and as-Sa'di a shade that always stays dense. Mujahid, as Ibn Kathir reports on 56:28-29, said the Quraysh loved the shade of their thorny desert trees.",
            "bn": "তারপর শেষ অংশ: ওয়া নুদখিলুহুম যিল্লান যালীলা, আর আমি তাদের দাখিল করব ঘন ছায়ায়। দাখিল করার ক্রিয়াটি এখানে দ্বিতীয়বার এসেছে, এবার শুধু ছায়ার জন্য, যেন ছায়া নিজেই আলাদা এক ঠিকানা। বিশেষ্য আর তার বিশেষণ একই মূল থেকে, যিল্ল আর যালীল। আরবিতে এমন জোড়া অর্থকে জোরালো করতে ব্যবহার হয়। ইবনে কাসীর এর অর্থ করেন প্রশস্ত, বিস্তৃত, নির্মল ও মনোরম ছায়া। তাফসীরে মুয়াসসার বলে ঘন ও বিস্তৃত, আর আল্লামা সাদি বলেন এমন ছায়া যা সবসময় ঘন থাকে। ইবনে কাসীর ৫৬:২৮-২৯ আয়াতের ব্যাখ্যায় মুজাহিদের কথা আনেন: কুরাইশরা তাদের মরুভূমির কাঁটাগাছের ছায়া খুব ভালোবাসত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Tree Whose Shade Has No End",
          "bn": "যে গাছের ছায়া ফুরায় না"
        },
        "p": [
          {
            "en": "Ibn Kathir brings one narration to this clause. Through at-Tabari he cites Abu Hurayrah (RA) that the Prophet ﷺ said that in Paradise there is a tree in whose shade a rider could travel for a hundred years without crossing it. Al-Bukhari also records the narration of this tree and its shade from Abu Hurayrah (RA), and in that narration it is joined to the words of 56:30, and shade extended. The picture speaks to a traveller. A rider in open country counts his shade in minutes, under a rock or a single tree, and here is shade that outlasts a lifetime of riding.",
            "bn": "এই অংশে ইবনে কাসীর একটি বর্ণনা আনেন। তিনি ইমাম তাবারির সূত্রে আবু হুরাইরা (রাঃ) থেকে উল্লেখ করেন, নবী ﷺ বলেছেন, জান্নাতে এমন এক গাছ আছে, যার ছায়ায় একজন আরোহী একশো বছর চলেও তা পার হতে পারবে না। ইমাম বুখারীও আবু হুরাইরা (রাঃ) থেকে এই গাছ ও তার ছায়ার বর্ণনা এনেছেন, আর সেই বর্ণনায় তা জুড়ে আছে ৫৬:৩০ আয়াতের শব্দের সঙ্গে, বিস্তৃত ছায়া। ছবিটা মুসাফিরের মনে সরাসরি লাগে। খোলা প্রান্তরে একজন আরোহী ছায়া পায় কয়েক মিনিটের জন্য, কোনো পাথর বা একলা গাছের নিচে। আর এখানে এমন ছায়া, যা সারা জীবনের সফরকেও ছাড়িয়ে যায়।"
          },
          {
            "en": "A second narration keeps the reader honest about what such words can do. Al-Bukhari records from Abu Hurayrah (RA) that Allah says He has prepared for His righteous servants what no eye has seen, no ear has heard, and what has never crossed the heart of a human being. The rivers, the purity and the shade of 4:57 are described in words people already know, because those are the only words people have. The hadith warns against supposing that the words are the whole of the thing.",
            "bn": "দ্বিতীয় একটি বর্ণনা পাঠককে মনে করিয়ে দেয়, এমন শব্দ কতদূর যেতে পারে। ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, আল্লাহ বলেন, তিনি তাঁর নেক বান্দাদের জন্য এমন কিছু প্রস্তুত রেখেছেন, যা কোনো চোখ দেখেনি, কোনো কান শোনেনি, আর কোনো মানুষের অন্তরে যার কল্পনাও জাগেনি। ৪:৫৭ আয়াতের নদী, পবিত্রতা আর ছায়ার বর্ণনা এসেছে মানুষের চেনা শব্দে, কারণ মানুষের কাছে চেনা শব্দই আছে। হাদিসটি সাবধান করে দেয়, শব্দগুলোকেই পুরো জিনিসটা ভেবে নেওয়া ঠিক নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise Heard Elsewhere",
          "bn": "অন্য আয়াতে একই প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "4:122, later in the same surah, repeats almost the whole promise, gardens beneath which rivers flow, abiding therein forever, and then seals it: the promise of Allah is truth, and who is more truthful than Allah in statement? 2:25 gives the same gardens and purified spouses as good tidings, and adds the fruit that seems like what they were given before. 3:15 names gardens, purified spouses, and then what is beyond both, approval from Allah.",
            "bn": "একই সূরার পরের দিকে ৪:১২২ আয়াত প্রায় পুরো প্রতিশ্রুতিটাই আবার বলে: এমন জান্নাত, যার পাদদেশে ঝর্ণাধারা প্রবাহিত, সেখানে তারা চিরকাল থাকবে। তারপর কথাটা পাকা করে দেয়: আল্লাহর ওয়াদা সত্য, আর কথায় আল্লাহর চেয়ে বেশি সত্যবাদী কে? ২:২৫ আয়াত একই জান্নাত আর পবিত্র সঙ্গীর সুসংবাদ দেয়, সঙ্গে যোগ করে এমন ফলের কথা, যা দেখে তারা বলবে, আগেও তো আমরা এমনটা পেয়েছি। ৩:১৫ আয়াত জান্নাত ও পবিত্র সঙ্গীর কথা বলে, তারপর উল্লেখ করে এ দুয়েরও ঊর্ধ্বে যা, আল্লাহর সন্তুষ্টি।"
          },
          {
            "en": "On the shade itself, 13:35 says the fruit of Paradise is lasting, and its shade; 56:30 speaks of shade extended; and 76:13-14 adds that they will see no burning sun or freezing cold there, and its shades are near above them. 18:107-108 gives the Gardens of Firdaws as a lodging to those who believe and do righteous deeds, and says they will not desire any transfer from it. Each of these verses takes one thread of 4:57 and draws it further.",
            "bn": "শুধু ছায়ার কথায় এলে, ১৩:৩৫ আয়াত বলে জান্নাতের ফল চিরস্থায়ী, তার ছায়াও। ৫৬:৩০ আয়াত বলে বিস্তৃত ছায়ার কথা। ৭৬:১৩-১৪ আয়াত যোগ করে, সেখানে তারা প্রখর রোদও দেখবে না, কনকনে শীতও না, আর জান্নাতের ছায়া থাকবে তাদের মাথার ওপর, খুব কাছে। ১৮:১০৭-১০৮ আয়াত বলে, যারা ঈমান আনে ও নেক আমল করে, তাদের আপ্যায়নের জন্য আছে ফিরদাউসের বাগান, আর সেখান থেকে তারা অন্য কোথাও যেতে চাইবে না। প্রতিটি আয়াত ৪:৫৭ আয়াতের একেকটি সুতো ধরে আরও দূর পর্যন্ত টেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Walking Toward the Shade",
          "bn": "ছায়ার দিকে হাঁটা"
        },
        "p": [
          {
            "en": "The verse ties the promise to two things a person can do today: believe, and do righteous deeds. In practice that means treating deeds as the evidence of faith, not an optional extra. Someone who keeps his prayers but cheats a customer, or gives charity but lies about a colleague, has separated what the verse joins. The very next verse names the test: 4:58 commands rendering trusts to whom they are due and judging with justice. Paradise is promised in one verse, and honest dealing is commanded in the next.",
            "bn": "আয়াতটি প্রতিশ্রুতিকে বেঁধে দেয় এমন দুটি কাজের সঙ্গে, যা মানুষ আজই করতে পারে: ঈমান আনা আর নেক আমল করা। বাস্তবে এর মানে, আমলকে ঈমানের প্রমাণ হিসেবে দেখা, ইচ্ছামতো বাড়তি কিছু হিসেবে নয়। যে নামাজ ঠিক রাখে কিন্তু ক্রেতাকে ঠকায়, কিংবা দান করে কিন্তু সহকর্মীর নামে মিথ্যা বলে, সে আয়াতের জোড়া লাগানো দুটি জিনিসকে আলাদা করে ফেলেছে। পরীক্ষাটা পরের আয়াতেই আছে। ৪:৫৮ আয়াত নির্দেশ দেয় হকদারের আমানত তাকে ফিরিয়ে দিতে আর ন্যায়ের সঙ্গে বিচার করতে। এক আয়াতে জান্নাতের প্রতিশ্রুতি, ঠিক পরের আয়াতে সৎ লেনদেনের হুকুম।"
          },
          {
            "en": "The verse also changes how present hardship feels. A labourer in a hot field, a nurse on a night shift, a parent awake beside a sick child can recall zillan zalila, a shade that does not thin, and know that the tiredness has a destination. That is not escape from the day. It is the Quran's own way of giving present effort a future, the way a traveller keeps walking because he has been told where the water is.",
            "bn": "আয়াতটি এখনকার কষ্টের অনুভূতিও বদলে দেয়। রোদে পোড়া মাঠের শ্রমিক, রাতের শিফটের নার্স, অসুস্থ সন্তানের পাশে জেগে থাকা মা-বাবা মনে করতে পারেন যিল্লান যালীলা, এমন ছায়া যা পাতলা হয় না। তখন বোঝা যায়, এই ক্লান্তির একটি গন্তব্য আছে। এতে দিনের কাজ থেকে পালানো হয় না। বরং কুরআন এভাবেই আজকের পরিশ্রমকে একটা ভবিষ্যৎ দেয়। মুসাফির যেমন হাঁটতেই থাকে, কারণ কেউ তাকে বলে দিয়েছে পানি কোথায়।"
          },
          {
            "en": "Finally, the pairing with 4:56 teaches balance, in one's own heart and in how one speaks of Allah to others. Read the warning and the promise together. A person who hears only the Fire can slide into despair, and one who hears only the Garden can grow careless. The Quran sets them side by side, and a believer's own reading, and the way he talks to his children about the Hereafter, can keep them side by side as well.",
            "bn": "শেষ কথা, ৪:৫৬ আয়াতের সঙ্গে এই জোড়া ভারসাম্য শেখায়, নিজের অন্তরেও, অন্যের কাছে আল্লাহর কথা বলার সময়ও। সতর্কবাণী আর প্রতিশ্রুতি একসঙ্গে পড়ুন। যে শুধু আগুনের কথা শোনে, সে হতাশায় ডুবে যেতে পারে। আর যে শুধু জান্নাতের কথা শোনে, সে উদাসীন হয়ে যেতে পারে। কুরআন দুটিকে পাশাপাশি রেখেছে। একজন মুমিনের নিজের তিলাওয়াতেও, সন্তানদের সঙ্গে আখিরাত নিয়ে কথা বলার সময়ও দুটি পাশাপাশি থাকতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for the Garden",
          "bn": "জান্নাত চেয়ে দোয়া"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ told the believers that when they ask Allah, they should ask Him for al-Firdaws, which he described as the middle of Paradise and its highest part. The verse supplies the vocabulary for such asking. What follows is a supplication composed from the words of 4:57, not a transmitted du'a: O Allah, make us among those who believe and do righteous deeds, admit us to gardens beneath which rivers flow, and bring us into a shade that never thins.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ মুমিনদের বলেছেন, আল্লাহর কাছে চাইলে তাঁর কাছে ফিরদাউস চাইবে। তিনি ফিরদাউসকে বলেছেন জান্নাতের মধ্যভাগ আর তার সবচেয়ে উঁচু স্থান। এমন চাওয়ার ভাষা আয়াতটিই জুগিয়ে দেয়। নিচের দোয়াটি ৪:৫৭ আয়াতের শব্দ থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আমাদের তাদের অন্তর্ভুক্ত করুন, যারা ঈমান আনে ও নেক আমল করে; আমাদের এমন জান্নাতে দাখিল করুন, যার নিচে নদী বয়ে চলে; আর আমাদের এমন ছায়ায় নিয়ে যান, যা কখনো পাতলা হয় না।"
          },
          {
            "en": "O Allah, purify us and those we love, never move us away from Your mercy, and do not make us among those described in the verse before it. The supplication follows the verse's own order, faith and deeds first, then the garden, the purity and the shade. It also asks protection from the warning that stands beside the promise, because the two verses are meant to be read as a pair.",
            "bn": "হে আল্লাহ, আমাদের ও আমাদের প্রিয়জনদের পবিত্র করুন, আপনার রহমত থেকে আমাদের কখনো সরিয়ে দেবেন না, আর আগের আয়াতে যাদের কথা আছে, আমাদের তাদের অন্তর্ভুক্ত করবেন না। দোয়াটি আয়াতের নিজের ক্রম মেনে চলে: আগে ঈমান ও আমল, তারপর জান্নাত, পবিত্রতা আর ছায়া। প্রতিশ্রুতির পাশে যে সতর্কবাণী দাঁড়িয়ে আছে, দোয়াটি তা থেকেও আশ্রয় চায়, কারণ আয়াত দুটি জোড়া হিসেবেই পড়তে হয়।"
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
            "bn": "৪:৫৬ আয়াতে আগুনের কথা আর ৪:৫৭ আয়াতে জান্নাতের কথা পড়ার সময় আমি কোনটা তাড়াহুড়ো করে পার হই, আর তাতে আমার অন্তরের কোন অবস্থা ধরা পড়ে? আমার ঈমান কি এমন নেক আমলে দেখা যায়, যা এই সপ্তাহে কেউ সত্যিই দেখিয়ে দিতে পারবে? নাকি তা বেশির ভাগ আছে নিজের সম্পর্কে আমার ধারণায়? জীবনের কোথায় আমি ঈমান আর আমলকে আলাদা রেখেছি: নামাজ ঠিক, কিন্তু মানুষের সঙ্গে আচরণ খারাপ; কিংবা আচরণ ভালো, কিন্তু নামাজে অবহেলা?"
          },
          {
            "en": "What present heat, a job, an illness, a long wait, could I carry more patiently if I remembered the shade this verse promises? When I speak about Paradise to my children or friends, do I use the Quran's own words and its restraint, or a picture I have invented? And if I were told that the promise begins with what I do before sunset today, what would I do differently?",
            "bn": "চাকরি, অসুখ, লম্বা অপেক্ষা: এখনকার কোন রোদটা আমি আরও ধৈর্যের সঙ্গে সইতে পারতাম, যদি এই আয়াতের প্রতিশ্রুত ছায়ার কথা মনে রাখতাম? সন্তান বা বন্ধুদের কাছে জান্নাতের কথা বলার সময় আমি কি কুরআনের নিজের শব্দ আর তার সংযম ধরে রাখি, নাকি নিজের বানানো কোনো ছবি আঁকি? আর যদি আমাকে বলা হতো, প্রতিশ্রুতির শুরু আজ সূর্য ডোবার আগে আমি যা করি তা থেকেই, তাহলে আজ আমি কী অন্যভাবে করতাম?"
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
          "bn": "বিবাদ ফেরানোর নির্দেশের ঠিক পরে"
        },
        "p": [
          {
            "en": "The passage follows two commands. 4:58 tells the believers to render trusts to whom they are due and to judge between people with justice, and 4:59 tells them to obey Allah, the Messenger and those in authority, and to refer any disagreement to Allah and the Messenger. 4:60 then asks the Prophet ﷺ, have you not seen, about people who claim to believe in what was revealed to him and before him, yet wish to take their disputes to taghut, though they were commanded to reject it. The portrait stands directly against the instruction it breaks.",
            "bn": "এই অংশ আসে দুটি নির্দেশের পরে। ৪:৫৮ আয়াত মুমিনদের বলে হকদারের আমানত তাকে ফিরিয়ে দিতে আর মানুষের মধ্যে ন্যায়ের সঙ্গে বিচার করতে। ৪:৫৯ আয়াত বলে আল্লাহ, রাসূল ও দায়িত্বশীলদের আনুগত্য করতে, আর কোনো বিষয়ে মতভেদ হলে তা আল্লাহ ও রাসূলের দিকে ফিরিয়ে দিতে। এরপর ৪:৬০ আয়াত নবী ﷺ-কে জিজ্ঞেস করে, তুমি কি তাদের দেখোনি? তারা দাবি করে, তাঁর প্রতি ও তাঁর আগে যা নাজিল হয়েছে তাতে ঈমান এনেছে, অথচ বিবাদ নিয়ে যেতে চায় তাগূতের কাছে, যদিও তাগূতকে অস্বীকার করার হুকুম তাদের আগেই দেওয়া হয়েছিল। এদের ছবিটা দাঁড়িয়ে আছে ঠিক সেই নির্দেশের মুখোমুখি, যা এরা ভাঙছে।"
          },
          {
            "en": "4:61 adds that when they are told to come to what Allah has revealed and to the Messenger, the hypocrites turn away in aversion. 4:62 describes them after their own deeds bring a disaster upon them: they come to him swearing by Allah that they intended nothing but good conduct and accommodation. 4:63 tells him how to respond. The passage then runs on into 4:64-65, that every messenger was sent to be obeyed, and that they will not truly believe until they make him judge in their disputes and accept his judgement without discomfort.",
            "bn": "৪:৬১ আয়াত যোগ করে, তাদের যখন বলা হয় আল্লাহর নাজিল করা বিধান আর রাসূলের দিকে এসো, তখন মুনাফিকরা বিরক্ত হয়ে মুখ ফিরিয়ে নেয়। ৪:৬২ আয়াত দেখায়, নিজেদের কাজের ফলে বিপদ নেমে এলে তাদের অবস্থা কী হয়: তারা নবী ﷺ-এর কাছে এসে আল্লাহর নামে কসম খায়, আমরা সদ্ভাব আর সম্প্রীতি ছাড়া কিছুই চাইনি। ৪:৬৩ আয়াত তাঁকে জানিয়ে দেয় কীভাবে জবাব দেবেন। এরপর আলোচনা গড়িয়ে যায় ৪:৬৪-৬৫ আয়াতে: প্রত্যেক রাসূলকে পাঠানো হয়েছে আনুগত্যের জন্য, আর তারা প্রকৃত মুমিন হবে না যতক্ষণ না বিবাদে তাঁকে বিচারক মানে এবং তাঁর ফয়সালা মনে কোনো কুণ্ঠা ছাড়াই মেনে নেয়।"
          },
          {
            "en": "The reports on the occasion differ. Al-Wahidi reports a dispute between a Jewish man and a hypocrite who professed Islam, in which the Jewish man asked that the Prophet ﷺ judge between them and the hypocrite insisted on Ka'b ibn al-Ashraf. Ibn Kathir gives a report of this kind alongside others, one saying the verse concerned hypocrites who wanted the judgement of the Jahiliyyah, and notes that still other reasons were reported. He then says the verse is general, rebuking everyone who turns from the Book and the Sunnah to a falsehood of his own choosing.",
            "bn": "আয়াত নাজিলের প্রেক্ষাপট নিয়ে বর্ণনাগুলো এক নয়। ইমাম ওয়াহিদি একটি বিবাদের কথা বর্ণনা করেন, এক ইহুদি আর ইসলামের দাবিদার এক মুনাফিকের মধ্যে। ইহুদি লোকটি চেয়েছিল নবী ﷺ বিচার করুন, আর মুনাফিকটি জেদ ধরেছিল কাব ইবনুল আশরাফের কাছে যাওয়ার। ইবনে কাসীর এ ধরনের একটি বর্ণনা আনেন আরও কয়েকটির পাশে। একটিতে বলা হয়েছে, আয়াতটি সেই মুনাফিকদের নিয়ে, যারা জাহিলি যুগের বিচার চাইত। তিনি এও বলেন যে আরও কারণ বর্ণিত আছে। তারপর বলেন, আয়াতের অর্থ ব্যাপক: কিতাব ও সুন্নাহ ছেড়ে নিজের পছন্দের কোনো বাতিলের কাছে বিচার চাওয়া প্রত্যেককেই তা তিরস্কার করে।"
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
            "bn": "ইয়াযউমূনা, তারা দাবি করে। ইমাম রাগিব ইসফাহানি আল-মুফরাদাত গ্রন্থে বলেন, যাআম মানে এমন কথা জানানো, যা মিথ্যা হতে পারে বলে সন্দেহ থাকে। এখানে শব্দটি এসেছে এমন ঈমানের জন্য, যা বেশির ভাগই মুখের কথায়। ইয়াতাহাকামূ এসেছে হুকম, অর্থাৎ বিচার, মূল থেকে। এর মানে ফয়সালার জন্য কারও কাছে মামলা নিয়ে যাওয়া। তাগূত হলো আল্লাহকে ছেড়ে যার অনুসরণ করা হয়। ইবনে কাসীরের মতে এখানে তাগূত হলো এমন যেকোনো বাতিল, যাকে মানুষ বিচারক বানায়। আর আল্লামা সাদির মতে, আল্লাহর বিধানের বিরুদ্ধে যে-ই ফয়সালা দেয়, সে-ই তাগূত।"
          },
          {
            "en": "4:61 closes with yasudduna 'anka sududa, turning away from you in aversion. The verb is followed by its own verbal noun, a common Arabic way of stressing an action, so the turning is complete rather than hesitant. The oath of 4:62 also has a precise shape: in aradna illa ihsanan wa tawfiqa, we intended nothing but good conduct and accommodation. A negation followed by illa, except, is the form of an emphatic restriction. They do not merely say they meant well; they insist they meant nothing else.",
            "bn": "৪:৬১ আয়াত শেষ হয় ইয়াসুদ্দূনা আনকা সুদূদা দিয়ে, তারা বিরক্ত হয়ে তোমার কাছ থেকে মুখ ফিরিয়ে নেয়। ক্রিয়ার পরেই এসেছে তার নিজের ক্রিয়াবিশেষ্য। আরবিতে কোনো কাজের ওপর জোর দেওয়ার এটা পরিচিত রীতি। ফলে মুখ ফেরানোটা দ্বিধার নয়, পুরোপুরি। ৪:৬২ আয়াতের কসমেরও একটা নির্দিষ্ট গড়ন আছে: ইন আরাদনা ইল্লা ইহসানাও ওয়া তাওফীকা, আমরা সদ্ভাব আর সম্প্রীতি ছাড়া কিছুই চাইনি। না-বাচক কথার পরে ইল্লা, ছাড়া, এলে তা জোরালোভাবে সীমাবদ্ধ করার ভঙ্গি। তারা শুধু বলছে না যে তাদের নিয়ত ভালো ছিল। তারা জোর দিয়ে বলছে, অন্য কোনো নিয়তই ছিল না।"
          },
          {
            "en": "4:63 answers with three imperatives: fa-a'rid 'anhum, turn away from them; wa 'izhum, admonish them; wa qul lahum fi anfusihim qawlan baligha, and speak to them a far-reaching word. Baligh comes from the root of reaching, a word that arrives where it is aimed. Fi anfusihim can be read with speak, meaning privately, or with far-reaching, meaning a word that reaches into their souls. Ibn Kathir takes the first: advise them between you and them, with effective words that might benefit them.",
            "bn": "৪:৬৩ আয়াত জবাব দেয় তিনটি আদেশে: ফা-আরিদ আনহুম, তাদের উপেক্ষা করো; ওয়া ইযহুম, তাদের উপদেশ দাও; ওয়া কুল লাহুম ফী আনফুসিহিম কাওলাম বালীগা, আর তাদের এমন কথা বলো যা গভীরে পৌঁছায়। বালীগ এসেছে পৌঁছানোর মূল থেকে, এমন কথা যা লক্ষ্যে গিয়ে পৌঁছায়। ফী আনফুসিহিম অংশটি বলো ক্রিয়ার সঙ্গে পড়লে অর্থ হয় একান্তে বলো। আর বালীগ শব্দের সঙ্গে পড়লে অর্থ হয় এমন কথা, যা তাদের অন্তরে পৌঁছায়। ইবনে কাসীর প্রথম অর্থটি নেন: তোমার আর তাদের মাঝে একান্তে উপদেশ দাও, এমন কার্যকর কথায় যা তাদের উপকারে আসতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Hearts Are Left to Allah",
          "bn": "অন্তরের বিষয় আল্লাহর হাতে"
        },
        "p": [
          {
            "en": "Ibn Kathir reads 4:62 as an apology after the fact. When disasters brought on by their own sins make them need the Prophet ﷺ, they come swearing that in going to another judge they sought only goodwill and conciliation, not that they believed in that other judgement. As-Sa'di is blunter: they are lying, because true good lies in referring judgement to Allah and His Messenger ﷺ. Ahsanul Bayaan gives their excuse in their own voice: our aim in going elsewhere was not to take a verdict from there, or to find more justice than with you, but goodwill and good relations.",
            "bn": "ইবনে কাসীর ৪:৬২ আয়াতকে পড়েন ঘটনা ঘটে যাওয়ার পরের কৈফিয়ত হিসেবে। নিজেদের গুনাহের কারণে বিপদে পড়ে যখন তাদের নবী ﷺ-এর দরকার হয়, তখন তারা এসে কসম খায়: অন্য বিচারকের কাছে গিয়েছিলাম শুধু সদ্ভাব আর মীমাংসার জন্য, সেই বিচারে বিশ্বাস করি বলে নয়। আল্লামা সাদি আরও সোজা বলেন: তারা মিথ্যা বলছে, কারণ প্রকৃত কল্যাণ তো আল্লাহ ও তাঁর রাসূল ﷺ-এর কাছে বিচার নিয়ে যাওয়াতেই। আহসানুল বায়ান তাদের অজুহাত তাদের মুখেই তুলে ধরে: অন্যত্র যাওয়ার উদ্দেশ্য সেখান থেকে ফয়সালা নেওয়া ছিল না, তোমার চেয়ে বেশি সুবিচার পাওয়াও ছিল না, উদ্দেশ্য ছিল কল্যাণ আর সুসম্পর্ক।"
          },
          {
            "en": "On 4:63 the commentators draw out a principle of great weight. Ibn Kathir explains turn away from them as do not punish them for what is in their hearts; Allah knows what they hide and suffices for it. What the Prophet ﷺ is told to do instead is to advise them, between himself and them, with words that might benefit them. As-Sa'di adds that counsel given privately is more likely to reach its aim, and that even when a caller turns away from someone doing wrong, he should still admonish him in private and speak persuasively.",
            "bn": "৪:৬৩ আয়াত থেকে মুফাসসিরগণ অত্যন্ত গুরুত্বপূর্ণ একটি নীতি বের করেন। ইবনে কাসীর তাদের উপেক্ষা করো কথাটির ব্যাখ্যা দেন এভাবে: তাদের অন্তরে যা আছে, তার জন্য তাদের শাস্তি দিয়ো না। তারা যা লুকায়, আল্লাহ তা জানেন, আর সে জন্য তিনিই যথেষ্ট। এর বদলে নবী ﷺ-কে বলা হয়েছে একান্তে তাদের উপদেশ দিতে, এমন কথায় যা তাদের উপকারে আসতে পারে। আল্লামা সাদি যোগ করেন, একান্তে দেওয়া উপদেশই বেশি কাজে লাগে। আর দাঈ কোনো অন্যায়কারী থেকে মুখ ফিরিয়ে নিলেও তাকে একান্তে উপদেশ দেবেন, আর কথা বলবেন হৃদয়গ্রাহী করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stream, a Ruling and a Warning",
          "bn": "এক নালা, এক ফয়সালা, এক সতর্কবাণী"
        },
        "p": [
          {
            "en": "The reports on the occasion of 4:60-62 do not agree, and they are given above with that caution. The close of the passage, 4:65, has a narration in al-Bukhari. Urwah relates that az-Zubayr (RA) quarrelled with a man of the Ansar over a stream that both used to water their palms. The Prophet ﷺ told az-Zubayr to water his land and then let the water flow on to his neighbour. The Ansari became angry and said: is it because he is your cousin? The face of the Prophet ﷺ changed.",
            "bn": "৪:৬০-৬২ আয়াতের প্রেক্ষাপট নিয়ে বর্ণনাগুলো একমত নয়, তাই ওপরে সেগুলো সতর্কতার সঙ্গেই আনা হয়েছে। এই অংশের সমাপ্তি ৪:৬৫ আয়াত নিয়ে সহিহ বুখারিতে একটি বর্ণনা আছে। উরওয়া বর্ণনা করেন, যুবাইর (রাঃ) আনসারের এক ব্যক্তির সঙ্গে একটি নালার পানি নিয়ে বিবাদ করেন, যা দিয়ে দুজনেই খেজুরবাগানে সেচ দিতেন। নবী ﷺ যুবাইরকে বললেন, নিজের জমিতে পানি দাও, তারপর প্রতিবেশীর দিকে ছেড়ে দাও। আনসারি লোকটি রেগে বলল, সে আপনার ফুফাতো ভাই বলেই কি? তখন নবী ﷺ-এর চেহারার রং বদলে গেল।"
          },
          {
            "en": "He then told az-Zubayr to water and hold back the water until it reached the walls around the palms, and only then release it, giving az-Zubayr his full right, where his first ruling had been a generous course for both men. Az-Zubayr said that he thought this verse was revealed about that case: but no, by your Lord, they will not truly believe until they make you judge. The report does not call the Ansari a hypocrite, and az-Zubayr gives the link to the verse as his opinion, not as a certainty.",
            "bn": "এরপর তিনি যুবাইরকে বললেন, পানি দাও, আর পানি আটকে রাখো যতক্ষণ না তা খেজুরগাছের চারপাশের আল পর্যন্ত পৌঁছায়, তারপর ছাড়ো। এভাবে তিনি যুবাইরকে তাঁর পূর্ণ হক দিলেন, অথচ প্রথম ফয়সালাটি ছিল দুজনের জন্যই উদার একটি পথ। যুবাইর (রাঃ) বলেন, আমার ধারণা, এই আয়াত সেই ঘটনা নিয়েই নাজিল হয়েছে: কিন্তু না, তোমার প্রতিপালকের শপথ, তারা প্রকৃত মুমিন হবে না যতক্ষণ না তোমাকে বিচারক মানে। বর্ণনাটি আনসারি লোকটিকে মুনাফিক বলে না। আর যুবাইর (রাঃ) আয়াতের সঙ্গে ঘটনাটির সম্পর্ক জানান নিজের ধারণা হিসেবে, নিশ্চিত কথা হিসেবে নয়।"
          },
          {
            "en": "Al-Bukhari also records from Abu Hurayrah (RA) that the Prophet ﷺ said the signs of a hypocrite are three: when he speaks he lies, when he promises he breaks it, and when he is entrusted he betrays (al-Bukhari 33). The oath of 4:62 sits close to the first of these, and the command about trusts in 4:58 close to the third. A believer does well to look for these signs in himself before he looks for them in anyone else.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে আরও বর্ণনা করেন, নবী ﷺ বলেছেন, মুনাফিকের আলামত তিনটি: কথা বললে মিথ্যা বলে, ওয়াদা করলে ভঙ্গ করে, আর আমানত রাখা হলে খেয়ানত করে (বুখারী ৩৩)। ৪:৬২ আয়াতের কসম প্রথম আলামতটির কাছাকাছি, আর ৪:৫৮ আয়াতের আমানতের নির্দেশ তৃতীয়টির কাছাকাছি। একজন মুমিনের উচিত অন্য কারও মধ্যে এসব আলামত খোঁজার আগে নিজের মধ্যে খোঁজা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Portrait in Other Surahs",
          "bn": "অন্য সূরায় একই ছবি"
        },
        "p": [
          {
            "en": "24:48-50 is the closest parallel. When called to Allah and His Messenger to judge between them, a party turns aside; if the right is theirs, they come in prompt obedience; and the verses ask whether there is disease in their hearts, or doubt, or fear of injustice. 24:51 gives the opposite: the only statement of the believers when so called is, we hear and we obey, and those are the successful. The test, then, is not whether one ever goes to the Messenger ﷺ, but whether one goes when the ruling may go against oneself.",
            "bn": "সবচেয়ে কাছের মিল ২৪:৪৮-৫০ আয়াতে। আল্লাহ ও তাঁর রাসূলের দিকে বিচারের জন্য ডাকা হলে একদল মুখ ফিরিয়ে নেয়। হক তাদের পক্ষে থাকলে তারা বিনয়ের সঙ্গে ছুটে আসে। আয়াতগুলো প্রশ্ন করে, তাদের অন্তরে কি রোগ আছে, নাকি সন্দেহ, নাকি অবিচারের ভয়? ২৪:৫১ আয়াত দেখায় উল্টো ছবি: এমন ডাকে মুমিনদের একমাত্র জবাব, আমরা শুনলাম ও মেনে নিলাম, আর তারাই সফলকাম। তাহলে পরীক্ষাটা এই নয় যে কেউ কখনো রাসূল ﷺ-এর কাছে যায় কি না। পরীক্ষা হলো, ফয়সালা নিজের বিরুদ্ধে যেতে পারে জেনেও সে যায় কি না।"
          },
          {
            "en": "63:1-2 and 58:16 describe hypocrites who take their oaths as a cover and so avert people from the way of Allah, which is the shape of the oath in 4:62. 9:62 says they swear by Allah to satisfy the believers, when Allah and His Messenger are more worthy of being satisfied. And 5:50 asks the question underneath the whole passage: is it the judgement of the time of ignorance they desire, and who is better than Allah in judgement for a people who are certain?",
            "bn": "৬৩:১-২ ও ৫৮:১৬ আয়াতে আছে এমন মুনাফিকদের কথা, যারা কসমকে ঢাল বানায় আর এভাবে মানুষকে আল্লাহর পথ থেকে ফিরিয়ে রাখে। ৪:৬২ আয়াতের কসমের গড়নও এমনই। ৯:৬২ আয়াত বলে, মুমিনদের খুশি করার জন্য তারা আল্লাহর নামে কসম খায়, অথচ খুশি করার সবচেয়ে বেশি হকদার আল্লাহ ও তাঁর রাসূল। আর ৫:৫০ আয়াত পুরো অংশের তলার প্রশ্নটি করে: তারা কি জাহিলি যুগের বিচার চায়? দৃঢ় বিশ্বাসী সম্প্রদায়ের জন্য বিচারে আল্লাহর চেয়ে উত্তম কে?"
          }
        ]
      },
      {
        "h": {
          "en": "When the Ruling Goes Against Me",
          "bn": "ফয়সালা যখন আমার বিপক্ষে"
        },
        "p": [
          {
            "en": "The passage exposes a habit that is not limited to courts. A person asks a scholar a question, dislikes the answer, and keeps asking until someone says what he wanted. A family dispute over inheritance is taken to the relatives who will side with him, rather than to the shares Allah fixed in 4:11-12 of this same surah. The test of 24:49 is easy to apply to oneself: do I accept the Quran and Sunnah when the right is mine, and look for another door when it is not?",
            "bn": "এই অংশ এমন এক অভ্যাস ধরিয়ে দেয়, যা শুধু আদালতে সীমাবদ্ধ নয়। কেউ একজন আলেমকে প্রশ্ন করে, উত্তর পছন্দ হয় না, তারপর প্রশ্ন করতেই থাকে, যতক্ষণ না কেউ তার মনমতো কথা বলে। মিরাস নিয়ে পরিবারে বিবাদ হলে কেউ যায় সেই আত্মীয়দের কাছে, যারা তার পক্ষ নেবে। অথচ এই সূরারই ৪:১১-১২ আয়াতে আল্লাহ অংশগুলো ঠিক করে দিয়েছেন। ২৪:৪৯ আয়াতের পরীক্ষাটা নিজের ওপর চালানো সহজ: হক আমার পক্ষে থাকলে আমি কুরআন ও সুন্নাহ মেনে নিই, আর না থাকলে অন্য দরজা খুঁজি?"
          },
          {
            "en": "The oath of 4:62 also has a familiar sound: I only meant to keep the peace. Good intentions are real, but the verse shows how they can be used as cover after a wrong choice has already been made. The honest response to such a mistake is the one described in 4:64: to come back and seek Allah's forgiveness, not to swear that the mistake was a kindness.",
            "bn": "৪:৬২ আয়াতের কসমটাও আমাদের চেনা: আমি তো শুধু শান্তি রাখতে চেয়েছিলাম। ভালো নিয়ত বাস্তব জিনিস। কিন্তু আয়াতটি দেখায়, ভুল সিদ্ধান্ত নেওয়া হয়ে যাওয়ার পরে কীভাবে ভালো নিয়তকে ঢাল বানানো যায়। এমন ভুলের সৎ জবাব ৪:৬৪ আয়াতে বলা হয়েছে: ফিরে আসা আর আল্লাহর কাছে মাফ চাওয়া। ভুলটাকে উপকার বলে কসম খাওয়া নয়।"
          },
          {
            "en": "And 4:63 teaches how to deal with someone who has done this. The instruction to the Prophet ﷺ was not public exposure and not a verdict on the person's heart, but private counsel in words chosen to reach him. A believer who sees a relative or colleague evading what is right can keep the same order: leave what is hidden to Allah, speak in private, and choose words that can actually be heard.",
            "bn": "আর যে এমনটা করেছে, তার সঙ্গে কেমন আচরণ করতে হবে, ৪:৬৩ আয়াত তা শেখায়। নবী ﷺ-কে দেওয়া নির্দেশ প্রকাশ্যে অপদস্থ করা ছিল না, মানুষটির অন্তরের ওপর রায় দেওয়াও ছিল না। নির্দেশ ছিল একান্তে উপদেশ দেওয়া, এমন বাছাই করা কথায় যা তার মনে পৌঁছায়। কোনো আত্মীয় বা সহকর্মীকে সঠিক পথ এড়াতে দেখলে একজন মুমিন একই ক্রম মেনে চলতে পারেন: গোপন বিষয় আল্লাহর কাছে ছেড়ে দেওয়া, একান্তে কথা বলা, আর এমন কথা বেছে নেওয়া, যা সে সত্যিই কানে নেবে।"
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
            "bn": "এই অংশের জবাব যে কথায়, তা কুরআনে দোয়া হিসেবেই আছে। ২:২৮৫ আয়াতে মুমিনদের কথা: আমরা শুনলাম ও মেনে নিলাম; হে আমাদের রব, আমরা আপনার ক্ষমা চাই, আর আপনার দিকেই ফিরে যেতে হবে। একই শুরুর কথাগুলো ২৪:৫১ আয়াতে এসেছে মুমিনদের একমাত্র জবাব হিসেবে, যখন তাদের আল্লাহ ও তাঁর রাসূলের দিকে বিচারের জন্য ডাকা হয়। আল্লাহর কোনো বিধান মেনে নেওয়া কঠিন লাগার মুহূর্তে একজন মুমিন এই বাক্যটিকে নিজের করে নিতে পারেন।"
          },
          {
            "en": "What follows is a supplication composed from the passage, not a transmitted du'a: O Allah, when I am called to what You revealed and to Your Messenger, make me come willingly and not turn away; when a ruling goes against me, remove the discomfort from my heart; when I have erred, bring me to seek Your forgiveness instead of swearing that I meant well; and give me words that reach the hearts of those I counsel.",
            "bn": "নিচের দোয়াটি এই অংশ থেকে বানানো, কোনো বর্ণিত দোয়া নয়: হে আল্লাহ, আপনার নাজিল করা বিধান আর আপনার রাসূলের দিকে যখন আমাকে ডাকা হয়, আমাকে খুশিমনে আসার তাওফীক দিন, মুখ ফিরিয়ে নিতে দেবেন না; কোনো ফয়সালা আমার বিপক্ষে গেলে আমার অন্তর থেকে কুণ্ঠা দূর করে দিন; আমি ভুল করলে ভালো নিয়তের কসম খাওয়ার বদলে আমাকে আপনার কাছে মাফ চাওয়ার দিকে নিয়ে যান; আর যাদের উপদেশ দিই, তাদের অন্তরে পৌঁছায় এমন কথা আমাকে দান করুন।"
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
            "bn": "কুরআন বা সুন্নাহর কোনো স্পষ্ট বিধান আমার চাওয়ার বিরুদ্ধে গেলে আমি কি তা মেনে নিই, নাকি এমন কাউকে খুঁজতে শুরু করি যে ভিন্ন কথা বলবে? ২৪:৪৯ আয়াতে যেমন বলা হয়েছে, আমি কি কখনো রাসূল ﷺ-এর পথে আগ্রহ নিয়ে এসেছি কেবল তখনই, যখন তা আমার পক্ষে ছিল? আমার কোনো সিদ্ধান্ত ভুল হলে আমি কি আগে ভালো নিয়তের অজুহাত খুঁজি, নাকি তওবা আর ভুল শোধরানোর কাজে হাত দিই?"
          },
          {
            "en": "When I see someone else evading what is right, do I pass a verdict on what is in his heart, or leave that to Allah and look for a private, well-chosen word? And if my own words of faith were weighed against the way I settle my disputes, would they count as belief, or only as a claim?",
            "bn": "অন্য কাউকে সঠিক পথ এড়াতে দেখলে আমি কি তার অন্তরে কী আছে তা নিয়ে রায় দিয়ে ফেলি, নাকি তা আল্লাহর কাছে ছেড়ে দিয়ে একান্তে বলার মতো ভেবেচিন্তে বাছাই করা কথা খুঁজি? আর আমি নিজের বিবাদ কীভাবে মেটাই, তার পাশে রেখে যদি আমার মুখের ঈমানের কথাগুলো ওজন করা হয়, সেগুলো কি ঈমান বলে গণ্য হবে, নাকি শুধু একটা দাবি?"
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
          "bn": "দুই আদেশের মাঝে এক ওয়াদা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and the verses before this one are about obedience under pressure. 4:60-63 describe people who claimed to believe yet wanted to take their disputes to another judge. 4:64 says every messenger was sent to be obeyed by Allah's permission, and 4:65 swears that they will not truly believe until they make the Prophet ﷺ judge in their disputes and find no discomfort in his ruling. 4:66-68 add that had they done what they were instructed, it would have been better for them, with a great reward and guidance to a straight path.",
            "bn": "সূরা নিসা মাদানি, আর এর আগের আয়াতগুলো চাপের মুখে আনুগত্য নিয়ে। ৪:৬০ থেকে ৪:৬৩ আয়াতে আছে এমন লোকদের কথা, যারা ঈমানের দাবি করত, অথচ বিবাদ নিয়ে যেতে চাইত অন্য বিচারকের কাছে। ৪:৬৪ আয়াত বলে, প্রত্যেক রাসূলকে পাঠানো হয়েছে এজন্য, যেন আল্লাহর অনুমতিতে তাঁর আনুগত্য করা হয়। আর ৪:৬৫ আয়াতে শপথ করে বলা হয়, তারা সত্যিকারের মুমিন হবে না, যতক্ষণ না বিবাদে নবী ﷺ-কে বিচারক মানে আর তাঁর ফয়সালায় মনে কোনো কুণ্ঠা না রাখে। ৪:৬৬ থেকে ৪:৬৮ আয়াত যোগ করে, যা করতে বলা হয়েছিল তা করলে তাদেরই কল্যাণ হতো, সঙ্গে মহা পুরস্কার আর সরল পথের হিদায়াত।"
          },
          {
            "en": "Then comes our verse: whoever obeys Allah and the Messenger. It gathers the argument of the preceding verses into a single promise. Right after it, 4:70 names that promise a bounty, and 4:71 turns to a new command, to take precautions and go forth, while 4:72 describes the one who lingers behind. So the promise of noble company sits between a call to accept the Prophet's ﷺ judgment and a call to go out with him. Ibn Kathir also records a report about why the verse came down, given in the hadith section below.",
            "bn": "তারপর আসে আমাদের আয়াত: যে আল্লাহ ও রাসূলের আনুগত্য করে। আগের আয়াতগুলোর পুরো যুক্তিকে এটি একটি ওয়াদায় জড়ো করে। ঠিক পরে ৪:৭০ আয়াত সেই ওয়াদাকে বলে অনুগ্রহ, আর ৪:৭১ আয়াত ফেরে নতুন এক আদেশে, সতর্কতা নাও আর বেরিয়ে পড়ো। ৪:৭২ আয়াতে আসে পেছনে পড়ে থাকা লোকের কথা। ফলে উত্তম সঙ্গের ওয়াদাটা বসে আছে দুই আহ্বানের মাঝখানে: নবী ﷺ-এর ফয়সালা মেনে নেওয়ার আহ্বান, আর তাঁর সঙ্গে বেরিয়ে পড়ার আহ্বান। আয়াতটি কেন নাজিল হয়েছিল, সে বিষয়ে ইবনে কাসীর একটি বর্ণনাও এনেছেন, যা নিচে হাদিসের অংশে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "With, Favoured, Companion",
          "bn": "সঙ্গে, নিয়ামতপ্রাপ্ত, সাথি"
        },
        "p": [
          {
            "en": "The verse does not say that the obedient will be prophets, or equal to them. It says fa-ula'ika ma'a alladhina an'ama Allahu 'alayhim: those will be with the ones upon whom Allah has bestowed favour. Ma'a, with, is a word of company. And the same verb of favour, an'amta 'alayhim, closes al-Fatihah, where a believer asks in 1:7 for the path of those upon whom You have bestowed favour. The prayer said many times a day asks for a road, and this verse names the travellers who walk it.",
            "bn": "আয়াত বলে না যে আনুগত্যকারীরা নবী হয়ে যাবে, বা তাঁদের সমান হবে। বলে ফাউলাইকা মাআল্লাযীনা আনআমাল্লাহু আলাইহিম: তারা থাকবে তাঁদের সঙ্গে, যাঁদের আল্লাহ নিয়ামত দিয়েছেন। মাআ মানে সঙ্গে, এ হলো সাহচর্যের শব্দ। আর নিয়ামত দেওয়ার এই একই ক্রিয়া, আনআমতা আলাইহিম, সূরা ফাতিহার শেষেও আছে, যেখানে ১:৭ আয়াতে মুমিন চায় তাঁদের পথ, যাঁদের আপনি নিয়ামত দিয়েছেন। দিনে বহুবার পড়া দোয়াটা একটা পথ চায়, আর এই আয়াত সেই পথের পথিকদের নাম বলে দেয়।"
          },
          {
            "en": "Four names follow. An-nabiyyin, the prophets. As-siddiqin, from the root of sidq, truthfulness, in an intensive form: the one wholly true in word and wholly affirming of the truth. Al-Muyassar describes them as those whose affirmation of what the messengers brought was complete, in belief, word and deed. Ash-shuhada', the martyrs, whom as-Sa'di describes as those who fought in Allah's path to raise His word and were killed. And as-salihin, the righteous, whom Ibn Kathir describes as righteous inwardly and outwardly.",
            "bn": "এরপর চারটি নাম। আন-নাবিয়্যীন, নবীগণ। আস-সিদ্দীকীন, সিদক বা সত্যবাদিতার ধাতু থেকে তীব্রতাবাচক রূপ: যে কথায় পুরোপুরি সত্যবাদী, আর সত্যকে পুরোপুরি মেনে নেয়। আল-মুয়াসসার তাঁদের বর্ণনা দেয় এভাবে: রাসূলরা যা এনেছেন, বিশ্বাসে, কথায় ও কাজে তার প্রতি যাঁদের সত্যায়ন পূর্ণ হয়েছে। আশ-শুহাদা, শহীদগণ, আস-সাদীর বর্ণনায় যাঁরা আল্লাহর কালিমা বুলন্দ করতে তাঁর পথে লড়েছেন আর নিহত হয়েছেন। আর আস-সালিহীন, নেককারগণ, ইবনে কাসীরের বর্ণনায় যাঁরা ভেতরে-বাইরে দুই দিকেই নেককার।"
          },
          {
            "en": "The verse closes wa hasuna ula'ika rafiqa, and excellent are those as companions. Rafiq is from the root r-f-q, which carries gentleness and the company of those who travel together, and it comes here in the singular form, which Arabic can use for a whole company. Then 4:70 adds dhalika al-fadlu min Allah, that is the bounty from Allah, with the definite article: not a bounty among others, but the bounty. And it ends, sufficient is Allah as Knower, a reminder that only He knows who is truly walking toward that company.",
            "bn": "আয়াত শেষ হয় ওয়া হাসুনা উলাইকা রাফীকা দিয়ে, আর সাথি হিসেবে তাঁরা কতই না উত্তম। রাফীক শব্দের ধাতু রা-ফা-কাফ, যার মধ্যে আছে কোমলতা আর একসঙ্গে সফর করা মানুষের সাহচর্যের অর্থ। এখানে শব্দটা এসেছে একবচনের রূপে, আরবিতে যা পুরো একটা দলের জন্যও ব্যবহার হতে পারে। তারপর ৪:৭০ আয়াত যোগ করে যালিকাল ফাদলু মিনাল্লাহ, এটা আল্লাহর পক্ষ থেকে অনুগ্রহ, নির্দিষ্ট করে বলা: অনেক অনুগ্রহের একটা নয়, সেই অনুগ্রহ। আর শেষ হয়, সর্বজ্ঞ হিসেবে আল্লাহই যথেষ্ট। অর্থাৎ কে সত্যিই সেই সঙ্গের দিকে এগোচ্ছে, তা কেবল তিনিই জানেন।"
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
            "bn": "ইবনে কাসীর আয়াতটিকে পড়েন সম্মানের ওয়াদা হিসেবে: আল্লাহ ও তাঁর রাসূল যা আদেশ করেছেন তা যে করে, আর যা নিষেধ করেছেন তা থেকে দূরে থাকে, আল্লাহ তাকে সম্মানের ঘরে ঠাঁই দেবেন। সেখানে সে থাকবে নবীদের সঙ্গে, তারপর তাঁদের নিচের স্তরের সিদ্দীকদের সঙ্গে, তারপর শহীদদের, তারপর নেককারদের সঙ্গে। তাঁর পাঠে চার নামের এই ক্রম মর্যাদারও ক্রম। আর আয়াতের শব্দটা হলো সঙ্গে: আনুগত্যকারী মুমিনকে ওয়াদা দেওয়া হয়েছে চার দলেরই সাহচর্যের, তাঁদের মর্যাদার নয়।"
          },
          {
            "en": "As-Sa'di stresses how wide the door is. Whoever obeys Allah and His Messenger, fulfilling what is required of him as far as he is able, whether man or woman, child or adult, will be among those Allah has favoured, a favour whose fruit is perfection, success and happiness. He describes each group in turn, and adds to the siddiqin that they call others to the truth they affirm. He then dwells on the delight of that company in the gardens of bliss, near the Lord of the worlds.",
            "bn": "দরজাটা কত প্রশস্ত, আস-সাদী তার ওপর জোর দেন। যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে, সাধ্যমতো নিজের দায়িত্ব পালন করে, সে পুরুষ হোক বা নারী, শিশু হোক বা বড়, সে থাকবে তাঁদের মধ্যে যাঁদের আল্লাহ নিয়ামত দিয়েছেন। আর সেই নিয়ামতের ফল পূর্ণতা, সাফল্য ও সৌভাগ্য। তিনি প্রতিটি দলের বর্ণনা দেন, আর সিদ্দীকদের ব্যাপারে যোগ করেন, যে সত্য তাঁরা মেনে নিয়েছেন অন্যদেরও সেদিকে ডাকেন। তারপর তিনি সময় নিয়ে বলেন নিয়ামতে ভরা জান্নাতে, জগতসমূহের রবের সান্নিধ্যে সেই সাহচর্যের আনন্দের কথা।"
          },
          {
            "en": "On 4:70 the commentators agree that the company is a gift and describe it from slightly different sides. Ibn Kathir says it is from Allah by His mercy, for it is He who made them fit for it, not their good deeds, and that He knows who deserves guidance and success. As-Sa'di calls it a reward they had not earned by their deeds. Al-Muyassar puts the knowledge first: Allah knows the states of His servants and who among them deserves the great reward for the righteous deeds they did.",
            "bn": "৪:৭০ আয়াতের ব্যাপারে মুফাসসিররা একমত যে এই সাহচর্য দান, তবে একটু ভিন্ন ভিন্ন দিক থেকে তার বর্ণনা দেন। ইবনে কাসীর বলেন, এটা আল্লাহর রহমত থেকে আসে, কারণ তিনিই তাদের এর উপযুক্ত বানিয়েছেন, তাদের নেক আমল নয়। আর কে হিদায়াত ও সাফল্যের যোগ্য, তিনিই জানেন। আস-সাদী একে বলেন এমন প্রতিদান, যা তারা নিজেদের আমল দিয়ে অর্জন করেনি। আল-মুয়াসসার জ্ঞানের দিকটা আগে আনে: আল্লাহ বান্দাদের অবস্থা জানেন, আর জানেন তাদের মধ্যে কে নিজের নেক আমলের কারণে মহা প্রতিদানের যোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man Who Feared Separation",
          "bn": "বিচ্ছেদের ভয় যাঁকে বিষণ্ণ করেছিল"
        },
        "p": [
          {
            "en": "Ibn Kathir records, through Ibn Jarir at-Tabari, a report from Sa'id ibn Jubayr. A man of the Ansar came to the Prophet ﷺ looking sad. The Prophet ﷺ asked why, and the man said: we come to you day and night, looking at your face and sitting with you, but tomorrow you will be raised with the prophets and we will not be able to see you. The Prophet ﷺ gave no answer until Jibril came down with this verse, and then the Prophet ﷺ sent the man the good news.",
            "bn": "ইবনে কাসীর ইবনে জারীর তাবারীর সূত্রে সাঈদ ইবনে জুবাইর থেকে একটি বর্ণনা আনেন। আনসারের এক ব্যক্তি বিষণ্ণ মুখে নবী ﷺ-এর কাছে এলেন। নবী ﷺ কারণ জিজ্ঞেস করলে তিনি বললেন: আমরা দিনরাত আপনার কাছে আসি, আপনার চেহারার দিকে তাকিয়ে থাকি, আপনার কাছে বসি। কিন্তু কাল আপনাকে নবীদের সঙ্গে ওঠানো হবে, তখন আমরা আর আপনাকে দেখতে পাব না। নবী ﷺ কোনো উত্তর দিলেন না, যতক্ষণ না জিবরীল (আঃ) এই আয়াত নিয়ে এলেন। তখন নবী ﷺ লোকটির কাছে সুসংবাদ পাঠালেন।"
          },
          {
            "en": "Ibn Kathir adds that the same account is reported from Masruq, Ikrimah, ash-Sha'bi, Qatadah and ar-Rabi' ibn Anas, all of the generation after the Companions, and he gives a version through Aishah (RA), recorded by Ibn Marduyah, in which a man tells the Prophet ﷺ that he loves him more than himself and his family, and fears that in Paradise he will not see him. It is a report the commentators attach to the verse, and it is offered here as Ibn Kathir gives it.",
            "bn": "ইবনে কাসীর যোগ করেন, একই ঘটনা মাসরূক, ইকরিমা, শা'বী, কাতাদা ও রাবী ইবনে আনাস থেকেও বর্ণিত, যাঁরা সবাই সাহাবিদের পরের প্রজন্মের। আয়েশা (রাঃ)-এর সূত্রে ইবনে মারদুওয়াইহর সংকলিত একটি বর্ণনাও তিনি আনেন। তাতে এক ব্যক্তি নবী ﷺ-কে বলেন, তিনি তাঁকে নিজের জীবন আর পরিবারের চেয়েও বেশি ভালোবাসেন, আর ভয় পান জান্নাতে তাঁকে দেখতে পাবেন না। মুফাসসিররা বর্ণনাটিকে এই আয়াতের সঙ্গে যুক্ত করেছেন, আর এখানে তা দেওয়া হলো ইবনে কাসীর যেভাবে দিয়েছেন সেভাবেই।"
          },
          {
            "en": "Ibn Kathir also cites a report that al-Bukhari and Muslim record from Aishah (RA). She had heard the Prophet ﷺ say that every prophet who falls ill is given the choice between this world and the Hereafter. In his final illness his voice grew weak, and she heard him recite: with those upon whom Allah has bestowed favour, of the prophets, the truthful, the martyrs and the righteous. Then she knew he was being given the choice. Ibn Kathir says this explains the other report, that before he died the Prophet ﷺ said three times: O Allah, the Most High Company.",
            "bn": "ইবনে কাসীর আরেকটি বর্ণনা আনেন, যা ইমাম বুখারী ও মুসলিম আয়েশা (রাঃ) থেকে সংকলন করেছেন। তিনি নবী ﷺ-কে বলতে শুনেছিলেন, কোনো নবী অসুস্থ হলে তাঁকে দুনিয়া আর আখিরাতের মধ্যে বেছে নেওয়ার সুযোগ দেওয়া হয়। শেষ অসুখে তাঁর কণ্ঠ দুর্বল হয়ে এল, আর আয়েশা (রাঃ) তাঁকে পড়তে শুনলেন: তাঁদের সঙ্গে, যাঁদের আল্লাহ নিয়ামত দিয়েছেন, নবী, সিদ্দীক, শহীদ ও নেককারদের মধ্য থেকে। তখন তিনি বুঝলেন, নবী ﷺ-কে বেছে নেওয়ার সুযোগ দেওয়া হচ্ছে। ইবনে কাসীর বলেন, এটাই অন্য বর্ণনাটির ব্যাখ্যা, যেখানে আছে মৃত্যুর আগে নবী ﷺ তিনবার বলেছিলেন: হে আল্লাহ, সর্বোচ্চ সাহচর্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses of the Same Company",
          "bn": "একই সাহচর্যের আয়াত"
        },
        "p": [
          {
            "en": "1:7 is the first sister, already heard in the words above: the path of those upon whom You have bestowed favour. 57:19 widens the ranks: those who have believed in Allah and His messengers are, with their Lord, among the supporters of truth and the martyrs, and theirs is their reward and their light. 3:31 gives the road in one line: if you love Allah, follow the Prophet ﷺ, and Allah will love you and forgive you. Together they say that love is proven by following, and following leads to the company.",
            "bn": "প্রথম আয়াতটির কথা আগেই এসেছে, ১:৭: তাঁদের পথ, যাঁদের আপনি নিয়ামত দিয়েছেন। ৫৭:১৯ আয়াত স্তরগুলোকে আরও প্রশস্ত করে: যারা আল্লাহ ও তাঁর রাসূলদের প্রতি ঈমান এনেছে, তারাই তাদের রবের কাছে সিদ্দীক ও শহীদ, তাদের জন্য আছে তাদের প্রতিদান ও তাদের নূর। ৩:৩১ আয়াত পথটা এক লাইনে বলে দেয়: যদি আল্লাহকে ভালোবাসো, নবী ﷺ-এর অনুসরণ করো, আল্লাহ তোমাদের ভালোবাসবেন আর গুনাহ মাফ করবেন। সব মিলিয়ে কথা এই: ভালোবাসার প্রমাণ অনুসরণ, আর অনুসরণ পৌঁছে দেয় সেই সাহচর্যে।"
          },
          {
            "en": "Two prophets asked for this company in their own prayers. Ibrahim (AS) asks in 26:83 to be joined with the righteous, and Yusuf (AS) ends his account in 12:101 asking, cause me to die a Muslim and join me with the righteous. If prophets asked to be joined with the righteous, no believer is above asking it. And 43:67 shows the other side of company: close friends, on that Day, will be enemies to one another, except for the righteous.",
            "bn": "দুজন নবী নিজেদের দোয়ায় এই সাহচর্য চেয়েছেন। ২৬:৮৩ আয়াতে ইবরাহীম (আঃ) চান নেককারদের অন্তর্ভুক্ত হতে। আর ১২:১০১ আয়াতে ইউসুফ (আঃ) নিজের কাহিনির শেষে চান, আমাকে মুসলিম অবস্থায় মৃত্যু দিন আর নেককারদের সঙ্গে মিলিয়ে দিন। নবীরাই যখন নেককারদের সঙ্গে মিলিত হতে চেয়েছেন, কোনো মুমিন এ চাওয়ার ঊর্ধ্বে নয়। আর ৪৩:৬৭ আয়াত দেখায় সঙ্গের অন্য দিক: সেদিন অন্তরঙ্গ বন্ধুরা একে অন্যের শত্রু হয়ে যাবে, মুত্তাকীরা ছাড়া।"
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
            "bn": "আয়াত শুরু হয় আনুগত্য দিয়ে, আর ৪:৬৫ আয়াতের পরে এর অবস্থান দেখায় বাস্তবে আনুগত্য মানে কী: নবী ﷺ-এর নির্দেশ অসুবিধাজনক হলেও মেনে নেওয়া, সেই আয়াতে বলা মনের কুণ্ঠা ছাড়াই। সাধারণ একটা সপ্তাহে এর মানে হতে পারে অফিসে অস্বস্তি সত্ত্বেও নামাজটা আদায় করা, শর্ত পরিষ্কার নয় বলে একটা ব্যবসার চুক্তি ফিরিয়ে দেওয়া, কটু কথাটা চেপে যাওয়া, কারণ তিনি ﷺ চেপে যেতেন। এর কোনোটাই দেখতে নবীদের দিকে যাওয়ার পথের মতো লাগে না। আয়াত বলছে, এটাই সেই পথ।"
          },
          {
            "en": "Ibn Kathir gives a Companion's practical answer. Muslim records that Rabi'ah ibn Ka'b al-Aslami (RA), who used to spend the night at the Prophet's ﷺ house and bring him water for wudu, was told: ask. He said: I ask for your companionship in Paradise. The Prophet ﷺ asked whether there was anything else, and he said: only that. The Prophet ﷺ said: then help me on your behalf through many prostrations. So add voluntary prayer to your day, a few rak'ahs you keep, as a way of asking for that company.",
            "bn": "ইবনে কাসীর একজন সাহাবির বাস্তব উত্তর তুলে ধরেন। ইমাম মুসলিম বর্ণনা করেন, রাবীআ ইবনে কা'ব আল-আসলামী (রাঃ) রাতে নবী ﷺ-এর ঘরে থাকতেন, তাঁর অজুর পানি এনে দিতেন। একদিন নবী ﷺ তাঁকে বললেন: কিছু চাও। তিনি বললেন: আমি জান্নাতে আপনার সাহচর্য চাই। নবী ﷺ জিজ্ঞেস করলেন, এ ছাড়া আর কিছু? তিনি বললেন: শুধু এটাই। নবী ﷺ বললেন: তাহলে বেশি বেশি সিজদা দিয়ে তোমার ব্যাপারে আমাকে সাহায্য করো। তাই দিনে কিছু নফল নামাজ যোগ করুন, অল্প কয়েক রাকাত যা নিয়মিত রাখতে পারবেন, সেই সাহচর্য চাওয়ার একটা উপায় হিসেবে।"
          },
          {
            "en": "And do not despair because your deeds are small. Ibn Kathir cites the hadith in the Sahih collections that a person will be with those he loves, and Anas (RA) said that Muslims were never happier with anything, and that he loved the Prophet ﷺ, Abu Bakr and Umar (RA) and hoped to be raised with them though his deeds were not like theirs. So love them deliberately. Read the lives of the prophets and the Companions, keep company now with people who remind you of Allah, and let as-Sa'di's words stay with you: man or woman, young or old.",
            "bn": "আর নিজের আমল কম বলে নিরাশ হবেন না। ইবনে কাসীর সহীহ সংকলনগুলোর হাদিস আনেন: মানুষ তাদের সঙ্গেই থাকবে, যাদের সে ভালোবাসে। আনাস (রাঃ) বলেছেন, মুসলমানরা আর কোনো কিছুতে এত খুশি হয়নি। তিনি আরও বলেছেন, তিনি নবী ﷺ, আবু বকর ও উমর (রাঃ)-কে ভালোবাসেন, আর আশা করেন তাঁদের সঙ্গেই তাঁকে ওঠানো হবে, যদিও তাঁর আমল তাঁদের মতো নয়। তাই জেনে-বুঝে তাঁদের ভালোবাসুন। নবীদের আর সাহাবিদের জীবনী পড়ুন, এখনই এমন মানুষের সঙ্গে থাকুন যারা আল্লাহর কথা মনে করিয়ে দেয়। আর আস-সাদীর কথাটা মনে রাখুন: পুরুষ হোক বা নারী, ছোট হোক বা বড়।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Joined",
          "bn": "মিলিত হওয়ার দোয়া"
        },
        "p": [
          {
            "en": "The Quran gives the words. From the prayer of Yusuf (AS) in 12:101: cause me to die a Muslim and join me with the righteous. And from the prayer of the people of understanding in 3:193: our Lord, we have heard a caller calling to faith and we have believed, so forgive us our sins, remove from us our misdeeds, and cause us to die among the righteous. Both ask for the end of the road and the company at the end of it, and both put forgiveness or faith first.",
            "bn": "কুরআন নিজেই শব্দগুলো দিয়েছে। ১২:১০১ আয়াতে ইউসুফ (আঃ)-এর দোয়া থেকে: আমাকে মুসলিম অবস্থায় মৃত্যু দিন আর নেককারদের সঙ্গে মিলিয়ে দিন। আর ৩:১৯৩ আয়াতে বোধসম্পন্ন মানুষদের দোয়া থেকে: হে আমাদের রব, আমরা একজন আহ্বানকারীকে ঈমানের দিকে ডাকতে শুনেছি, আর আমরা ঈমান এনেছি। তাই আমাদের গুনাহ মাফ করে দিন, আমাদের মন্দ কাজগুলো মুছে দিন, আর নেককারদের সঙ্গে আমাদের মৃত্যু দিন। দুটো দোয়াই পথের শেষটা চায়, আর সেই শেষে থাকা সাহচর্য। দুটোতেই আগে আসে ঈমান বা মাগফিরাতের কথা।"
          },
          {
            "en": "A supplication in the verse's own vocabulary, offered here as such and not as a transmitted du'a: O Allah, make me obedient to You and to Your Messenger ﷺ. Place me with those upon whom You have bestowed favour, the prophets, the truthful, the martyrs and the righteous, and let them be my companions. It is Your bounty and not my deeds, and You are sufficient as the One who knows me, so make me fit for what I cannot earn.",
            "bn": "আয়াতের নিজের শব্দ দিয়ে গড়া একটি দোয়া। এটি বর্ণিত কোনো দোয়া নয়, সেটা জেনেই পড়ুন: হে আল্লাহ, আমাকে আপনার আর আপনার রাসূল ﷺ-এর অনুগত বানিয়ে দিন। যাঁদের আপনি নিয়ামত দিয়েছেন, সেই নবী, সিদ্দীক, শহীদ আর নেককারদের সঙ্গে আমাকে রাখুন, আর তাঁদের আমার সাথি বানিয়ে দিন। এ আপনার অনুগ্রহ, আমার আমলের ফল নয়। আমাকে জানার জন্য আপনিই যথেষ্ট। তাই যা আমি নিজে অর্জন করতে পারি না, তার যোগ্য আমাকে বানিয়ে দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About My Company",
          "bn": "আমার সঙ্গ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry from these verses. If I were raised tomorrow with the people I spend most of my evenings with, would I be glad? Is my love for the Prophet ﷺ something that shows in how I follow him when following is inconvenient, or mainly in how I speak about him? Which of the four, the prophets, the truthful, the martyrs, the righteous, do I know least about, and what would I learn if I read one of their lives this month?",
            "bn": "এই আয়াতগুলো থেকে কয়েকটি প্রশ্ন সঙ্গে রাখুন। যাদের সঙ্গে আমার বেশিরভাগ সন্ধ্যা কাটে, কাল যদি তাদের সঙ্গেই আমাকে ওঠানো হয়, আমি কি খুশি হব? নবী ﷺ-এর প্রতি আমার ভালোবাসা কি দেখা যায় অসুবিধার সময়ও তাঁকে অনুসরণের মধ্যে, নাকি মূলত তাঁকে নিয়ে কথা বলার মধ্যে? নবী, সিদ্দীক, শহীদ আর নেককার, এই চার দলের কাদের সম্পর্কে আমি সবচেয়ে কম জানি, আর এ মাসে তাঁদের কারও জীবনী পড়লে কী শিখতাম?"
          },
          {
            "en": "Like the man of the Ansar, what would I truly grieve to be separated from, and does my grief point toward Allah and His Messenger ﷺ or somewhere else? When I do something good, do I quietly count it as a payment toward Paradise, or do I remember that 4:70 calls the whole of it a bounty? And what one act of obedience have I been postponing that I could begin this week?",
            "bn": "সেই আনসারি সাহাবির মতো, কী থেকে বিচ্ছিন্ন হওয়ার ভয়ে আমি সত্যিই কষ্ট পাব, আর সেই কষ্ট কি আল্লাহ ও তাঁর রাসূল ﷺ-এর দিকে ইশারা করে, নাকি অন্য কোথাও? কোনো ভালো কাজ করলে কি মনে মনে তা জান্নাতের কিস্তি হিসেবে গুনি, নাকি মনে রাখি ৪:৭০ আয়াত পুরোটাকেই বলেছে অনুগ্রহ? আর আনুগত্যের কোন একটা কাজ আমি ফেলে রেখেছি, যা এই সপ্তাহেই শুরু করতে পারি?"
          }
        ]
      }
    ]
  },
  "4:78": {
    "sections": [
      {
        "h": {
          "en": "After the Plea for Delay",
          "bn": "অবকাশ চাওয়ার পরের জবাব"
        },
        "p": [
          {
            "en": "This verse follows straight on from 4:77, where a group once told to restrain their hands, establish prayer and give zakah were later prescribed fighting, and a party of them feared people as Allah is feared, or more, and asked why it had not been postponed a little. Ibn Kathir's abridged commentary sets the scene: in Makkah the Muslims were commanded to pardon and be patient, and when fighting was legislated in Madinah some of them grew fearful of meeting the idolaters.",
            "bn": "আয়াতটি এসেছে ঠিক ৪:৭৭ আয়াতের পরে। সেখানে এক দলের কথা আছে, যাদের একসময় বলা হয়েছিল হাত গুটিয়ে রাখতে, নামাজ কায়েম করতে আর যাকাত দিতে। পরে তাদের ওপর যুদ্ধ ফরজ হলে তাদের একাংশ মানুষকে ভয় পেতে লাগল আল্লাহকে ভয় করার মতো, কিংবা তার চেয়েও বেশি। তারা জানতে চাইল, হুকুমটা আর কিছুদিন পিছিয়ে দেওয়া হলো না কেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর পটভূমিটা জানায়। মক্কায় মুসলমানদের প্রতি হুকুম ছিল ক্ষমা আর ধৈর্যের। মদীনায় যুদ্ধের বিধান এলে তাদের কেউ কেউ মুশরিকদের মুখোমুখি হতে ভয় পেয়ে গেল।"
          },
          {
            "en": "At-Tabari binds the two verses together. The people who say \"this is from you\" in 4:78, he writes, are the very ones Allah told His Prophet ﷺ about in 4:77, those told to hold back their hands. As-Sa'di reads the opening of 4:78 as one of several ways the passage spurred the believers to the campaign of its day. That command belongs to its history, and no ruling on fighting today is drawn from it here. The interest is in what the verse says about death, and about blame.",
            "bn": "তাবারী দুই আয়াতকে শক্ত করে জুড়ে দেন। তাঁর কথায়, ৪:৭৮ আয়াতে যারা বলে 'এটা তোমার কারণে', তারা সেই লোকেরাই, যাদের কথা আল্লাহ ৪:৭৭ আয়াতে নবী ﷺ-কে জানিয়েছেন: যাদের বলা হয়েছিল হাত গুটিয়ে রাখতে। সা'দী আয়াতের প্রথম অংশকে দেখেন সেই অনুচ্ছেদের নানা উপায়ের একটি হিসেবে, যা দিয়ে তখনকার অভিযানে মুমিনদের উৎসাহ দেওয়া হচ্ছিল। সেই হুকুম তার নিজের ইতিহাসের অংশ। আজকের দিনে যুদ্ধের কোনো বিধান এখান থেকে টানা হচ্ছে না। আমাদের দেখার বিষয় হলো, মৃত্যু নিয়ে আর দোষ চাপানো নিয়ে আয়াতটি কী বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Hiding Place From Death",
          "bn": "মৃত্যু থেকে লুকানোর জায়গা নেই"
        },
        "p": [
          {
            "en": "Aynama takunu yudrikkumu al-mawt: wherever you may be, death will overtake you. At-Tabari draws out what the clause asks of its hearers: do not panic at death, do not flee from fighting or weaken before your enemy out of fear for yourselves, for death faces you wherever you are and will reach you even if you shelter from it in impregnable strongholds. Al-Muyassar adds the timing: in any place, when your appointed terms arrive.",
            "bn": "আইনামা তাকূনূ ইউদরিককুমুল মাওত: তোমরা যেখানেই থাকো, মৃত্যু তোমাদের নাগাল পাবে। শ্রোতাদের কাছে এই অংশ কী চায়, তাবারী তা খুলে বলেন। মৃত্যুকে ভয় পেয়ে অস্থির হয়ো না। নিজের প্রাণের ভয়ে যুদ্ধ থেকে পালিয়ো না, শত্রুর সামনে দুর্বলও হয়ো না। কারণ যেখানেই থাকো, মৃত্যু তোমাদের মুখোমুখি দাঁড়িয়ে। দুর্ভেদ্য দুর্গে আশ্রয় নিলেও সে পৌঁছে যাবে। মুয়াসসার সময়ের কথাটা জুড়ে দেয়: যে জায়গাতেই থাকো, নির্ধারিত মেয়াদ এলে মৃত্যু ধরে ফেলবে।"
          },
          {
            "en": "As-Sa'di opens with a principle: caution does not avail against decree, and the one who stays behind gains nothing by staying. Ibn Kathir supports the clause with 3:185, every soul will taste death, and 21:34, no human before you was granted immortality: each person has a fixed term, whether he went out to strive or not. He then quotes Khalid ibn al-Walid, who had fought so many battles that every limb bore a wound, and was dying in his bed all the same.",
            "bn": "সা'দী শুরু করেন একটি মূলনীতি দিয়ে: সাবধানতা তাকদীর ঠেকাতে পারে না, আর যে পেছনে বসে থাকে, বসে থেকে সে কিছুই রক্ষা করতে পারে না। ইবন কাসীর এর সমর্থনে দুটি আয়াত আনেন। ৩:১৮৫ আয়াত বলে, প্রত্যেক প্রাণ মৃত্যুর স্বাদ নেবে। ২১:৩৪ আয়াত বলে, তোমার আগে কোনো মানুষকে আমি অমরত্ব দিইনি। তাঁর সিদ্ধান্ত, প্রত্যেকের মেয়াদ নির্ধারিত, সে জিহাদে বের হোক বা না হোক। তারপর তিনি খালিদ ইবনুল ওয়ালীদের কথা উদ্ধৃত করেন। এত যুদ্ধে তিনি লড়েছিলেন যে শরীরের প্রতিটি অঙ্গে আঘাতের দাগ ছিল। তবু মৃত্যু এল তাঁর বিছানাতেই।"
          },
          {
            "en": "Al-Qurtubi notes that the address is general, though those meant may be the hypocrites or the weaker believers who said \"if only You had postponed us\". He judges it closer to the hypocrites, citing their remark about the dead of Uhud, which he reports from Ibn Abbas through Abu Salih: had they stayed with us, they would not have died or been killed. Al-Baghawi gives the same occasion. A saying in almost those words is answered in 3:156, where the believers are told not to be like those who spoke it.",
            "bn": "কুরতুবী বলেন, সম্বোধনটা সবার প্রতি, যদিও উদ্দেশ্য হতে পারে মুনাফিকরা, কিংবা সেই দুর্বল মুমিনরা, যারা বলেছিল 'আমাদের যদি আরও কিছুদিন অবকাশ দিতেন'। তাঁর বিচারে মুনাফিকদের দিকেই ইঙ্গিতটা বেশি। প্রমাণ হিসেবে তিনি উহুদে নিহতদের নিয়ে তাদের একটি মন্তব্য আনেন, যা আবু সালিহের সূত্রে ইবন আব্বাস থেকে বর্ণিত: তারা আমাদের কাছে থাকলে মরত না, নিহতও হতো না। বাগাভীও একই প্রেক্ষাপটের কথা বলেন। প্রায় এই শব্দেই একটি কথার জবাব এসেছে ৩:১৫৬ আয়াতে। সেখানে মুমিনদের বলা হয়েছে, যারা এমন কথা বলে, তোমরা তাদের মতো হয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Towers, Palaces or Stars",
          "bn": "দুর্গ, প্রাসাদ নাকি তারকা"
        },
        "p": [
          {
            "en": "Wa law kuntum fi burujin mushayyadah: even if you should be within lofty towers. Most glosses keep the buruj on earth. At-Tabari reports Qatadah, fortified palaces, and Ibn Jurayj, built-up palaces. Al-Baghawi defines buruj as forts and citadels. Al-Qurtubi adds Mujahid, palaces, and Ibn Abbas, forts, towered houses and citadels, and says the majority, whose view he calls the soundest, mean earthly strongholds, because these are the furthest people go in protecting themselves, and Allah gave them that as the example.",
            "bn": "ওয়া লাও কুনতুম ফী বুরূজিম মুশাইয়াদাহ: যদিও তোমরা থাকো সুউচ্চ সুদৃঢ় বুরুজের ভেতরে। বেশির ভাগ ব্যাখ্যা বুরূজকে রাখে মাটির ওপরেই। তাবারী কাতাদা থেকে আনেন, সুরক্ষিত প্রাসাদ। ইবন জুরাইজ থেকে আনেন, গেঁথে তোলা প্রাসাদ। বাগাভীর সংজ্ঞায় বুরূজ মানে কেল্লা আর দুর্গ। কুরতুবী যোগ করেন মুজাহিদের কথা, প্রাসাদ, আর ইবন আব্বাসের কথা, কেল্লা, বুরুজওয়ালা বাড়ি আর দুর্গ। তিনি বলেন, অধিকাংশের মত, যাকে তিনি সবচেয়ে সঠিক বলেন, এ হলো দুনিয়ার দুর্গ। কারণ আত্মরক্ষায় মানুষ এর চেয়ে বেশি দূর যেতে পারে না, তাই আল্লাহ তাদের সামনে এটাকেই উদাহরণ করেছেন।"
          },
          {
            "en": "A second reading puts the towers in the sky. At-Tabari reports as-Suddi, white palaces built in the lowest heaven, and ar-Rabi', palaces in the sky. Al-Qurtubi says Makki related a similar view from Malik, who pointed to 85:1, by the sky with its buruj, and explains that on this view they are the twelve mansions of the heavens, the great stars, called buruj because they stand out. Ibn Kathir names as-Suddi's reading and calls it weak: the sound view, he says, is that they are impregnable towers.",
            "bn": "দ্বিতীয় এক ব্যাখ্যা বুরুজগুলোকে নিয়ে যায় আকাশে। তাবারী সুদ্দী থেকে আনেন: নিকটতম আসমানে নির্মিত সাদা প্রাসাদ। রবী' থেকে আনেন: আকাশের প্রাসাদ। কুরতুবী জানান, মাক্কী এমন একটি মত ইমাম মালিক থেকে বর্ণনা করেছেন। মালিক দলিল দেন ৮৫:১ আয়াত দিয়ে: শপথ বুরূজওয়ালা আকাশের। কুরতুবীর ব্যাখ্যায়, এই মত ধরলে বুরূজ হলো আকাশের বারোটি মঞ্জিল, অর্থাৎ বড় বড় তারকা। স্পষ্ট দেখা যায় বলে এদের বুরূজ বলা হয়। ইবন কাসীর সুদ্দীর মতটির উল্লেখ করে একে দুর্বল বলেন। তাঁর মতে সঠিক কথা হলো, এগুলো দুর্ভেদ্য দুর্গ।"
          },
          {
            "en": "Then mushayyadah. At-Tabari reports the grammarians divided: some Basrans took it as tall, with the lighter form mashid meaning adorned; another took mashid as built with shid, gypsum plaster; a Kufan traced both forms to a single root, the doubling marking work repeated across many buildings. Al-Qurtubi gives lengthened from az-Zajjaj and al-Qutabi, plastered from Ikrimah, and fortified from Qatadah; al-Baghawi gives raised and lengthened. Ibn Kathir notes that some equate it with mashid in 22:45, while others tell them apart.",
            "bn": "এবার মুশাইয়াদাহ। তাবারী জানান, এ নিয়ে ব্যাকরণবিদদের মতভেদ আছে। বসরার কারও কারও মতে এর অর্থ উঁচু, আর হালকা উচ্চারণের 'মাশীদ' মানে সাজানো। আরেকজনের মতে 'মাশীদ' মানে শীদ দিয়ে গাঁথা, আর শীদ হলো চুনের পলেস্তারা। কুফার এক ব্যাকরণবিদের মতে দুটি রূপের মূল একই। দ্বিত্ব উচ্চারণটা বোঝায় অনেক ভবনে বারবার হওয়া কাজ। কুরতুবী যাজ্জাজ ও কুতাবী থেকে আনেন 'লম্বা করে তোলা', ইকরিমা থেকে 'পলেস্তারা করা', কাতাদা থেকে 'সুরক্ষিত'। বাগাভী বলেন, উঁচু করে লম্বা করে তোলা। ইবন কাসীর জানান, কেউ একে ২২:৪৫ আয়াতের 'মাশীদ'-এর সমার্থক ধরেন, কেউ দুটোকে আলাদা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Walls, a Spider and Trust",
          "bn": "দেয়াল, মাকড়সা আর ভরসা"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws from the same clause a point that might seem to cut the other way. Building towns and walls to guard lives and property, he writes, is Allah's way with His servants, and the clearest proof against anyone who says that reliance on Allah means abandoning means. Prophets built such places and dug trenches around them. He quotes al-Ahnaf, asked the wisdom of a city wall: it holds back the fool until the wise man comes to protect him. The verse mocks no wall. It denies that a wall settles the hour.",
            "bn": "একই অংশ থেকে কুরতুবী এমন একটি কথা বের করেন, যা প্রথমে উল্টো দিকের মনে হতে পারে। তিনি লেখেন, জান-মাল রক্ষার জন্য শহর আর প্রাচীর গড়ে তোলা বান্দাদের ব্যাপারে আল্লাহরই নিয়ম। যারা বলে তাওয়াক্কুল মানে উপায়-উপকরণ ছেড়ে দেওয়া, তাদের বিরুদ্ধে এটাই সবচেয়ে স্পষ্ট প্রমাণ। নবীরাও এমন জনপদ গড়েছেন, চারপাশে পরিখা খুঁড়েছেন। আহনাফকে একবার জিজ্ঞেস করা হয়েছিল, নগরপ্রাচীরের হিকমত কী। তিনি বলেছিলেন, প্রাচীর নির্বোধকে আটকে রাখে, যতক্ষণ না জ্ঞানী এসে রক্ষা করে। আয়াতটি তাই কোনো দেয়ালকে বিদ্রূপ করে না। শুধু অস্বীকার করে যে দেয়ালই মৃত্যুর সময় ঠিক করে।"
          },
          {
            "en": "At-Tabari and Ibn Kathir both carry a long story from Mujahid about a woman among earlier peoples. A stranger foretold at her birth that she would die by a spider. Years later her husband raised a strong tower for her, at-Tabari says, or a high palace, in Ibn Kathir's telling, to keep her safe. A spider appeared in its ceiling; she crushed it with her toe, and its venom under her nail killed her. Ma'arif al-Qur'an retells it. It is Mujahid's tale of an earlier community, not a hadith from the Prophet ﷺ.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই মুজাহিদ থেকে আগের যুগের এক নারীর দীর্ঘ কাহিনি এনেছেন। তার জন্মের সময় এক অচেনা লোক বলেছিল, তার মৃত্যু হবে মাকড়সার কারণে। বহু বছর পর তার স্বামী তাকে নিরাপদ রাখতে একটি মজবুত বুরুজ গড়ে দেয়। তাবারীর বর্ণনায় বুরুজ, ইবন কাসীরের বর্ণনায় সুউচ্চ প্রাসাদ। একদিন ছাদে একটা মাকড়সা দেখা গেল। মহিলা পায়ের বুড়ো আঙুল দিয়ে সেটাকে পিষে মারল। নখের নিচে ঢুকে যাওয়া বিষেই তার মৃত্যু হলো। মাআরিফুল কুরআনও কাহিনিটি বলেছে। তবে এটা আগের এক জাতির ব্যাপারে মুজাহিদের বর্ণনা, নবী ﷺ-এর হাদীস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Good From Allah, Ill From You",
          "bn": "ভালোটা আল্লাহর, মন্দটা তোমার"
        },
        "p": [
          {
            "en": "Wa in tusibhum hasanatun yaqulu hadhihi min 'indi Allah: if good befalls them, they say this is from Allah; if ill befalls them, they say this is from you. Ibn Kathir reports Ibn Abbas, Abu al-Aliyah and as-Suddi on the good: fertile years, fruit, crops and children; on the ill, the latter two give drought, failing harvests and the death of children or livestock. At-Tabari reads the pair through war: ease, victory, conquest and spoils, set against a hard life, defeat, wounds and pain.",
            "bn": "ওয়া ইন তুসিবহুম হাসানাতুই ইয়াকূলূ হাযিহী মিন 'ইনদিল্লাহ: তাদের কোনো কল্যাণ হলে বলে, এটা আল্লাহর পক্ষ থেকে। আর অকল্যাণ হলে বলে, এটা তোমার কারণে। কল্যাণের ব্যাখ্যায় ইবন কাসীর ইবন আব্বাস, আবুল আলিয়া ও সুদ্দীর কথা আনেন: ফসলের বছর, ফলমূল, শস্য আর সন্তান। অকল্যাণের ব্যাখ্যায় শেষের দুজন বলেন: খরা, ফসলহানি, সন্তান বা গবাদিপশুর মৃত্যু। তাবারী জোড়াটা পড়েন যুদ্ধের প্রেক্ষাপটে। একদিকে স্বস্তি, বিজয়, জয় আর গনীমত। অন্যদিকে কষ্টের জীবন, পরাজয়, জখম আর যন্ত্রণা।"
          },
          {
            "en": "And what did \"from you\" mean? At-Tabari says: by your mistaken management. He reports Ibn Zayd, who placed these verses in the matter of war and gave the complaint as: he managed badly and judged badly. Al-Qurtubi reports from Ibn Abbas, by your poor management, and from others, by your ill omen, said as a drawing of omens. Al-Baghawi gives another view: the good was the victory and spoils of Badr, the ill the killing and defeat of Uhud, and \"from you\" meant: you led us into it.",
            "bn": "'তোমার কারণে' বলতে তারা কী বোঝাত? তাবারী বলেন, তোমার ভুল পরিচালনার কারণে। তিনি ইবন যায়দের কথা আনেন, যিনি এই আয়াতগুলোকে যুদ্ধের প্রসঙ্গে রেখেছেন। তাঁর বর্ণনায় অভিযোগটা ছিল এমন: সে ভালো পরিচালনা করেনি, ভালো বিবেচনাও করেনি। কুরতুবী ইবন আব্বাস থেকে আনেন, তোমার মন্দ পরিচালনার কারণে। অন্যদের থেকে আনেন, তোমার অশুভ প্রভাবে, অর্থাৎ কুলক্ষণ ধরে বলা কথা। বাগাভী আরেকটি মত দেন। কল্যাণ মানে বদরের বিজয় আর গনীমত, অকল্যাণ মানে উহুদের হত্যা আর পরাজয়। আর 'তোমার কারণে' মানে, তুমিই আমাদের এতে টেনে এনেছ।"
          },
          {
            "en": "Who said it is reported differently. At-Tabari ties it to the group of 4:77. Al-Baghawi and al-Qurtubi say it came down about the Jews and the hypocrites of Madinah, who said after the Prophet ﷺ arrived that they had seen shortfalls in their fruit and crops ever since this man and his companions came. Ibn Kathir names the hypocrites, who entered Islam outwardly while disliking it inwardly. The verse describes what those people said in that setting. It licenses nothing against any Jew, or any living person or community, today.",
            "bn": "কথাটা কারা বলেছিল, সে বিষয়ে বর্ণনা ভিন্ন ভিন্ন। তাবারী একে যুক্ত করেন ৪:৭৭ আয়াতের সেই দলের সঙ্গে। বাগাভী ও কুরতুবী বলেন, আয়াতটি নাযিল হয়েছে মদীনার ইহুদি আর মুনাফিকদের ব্যাপারে। নবী ﷺ মদীনায় আসার পর তারা বলত, এই লোক আর তার সঙ্গীরা আসার পর থেকেই আমাদের ফল আর ফসলে টান পড়ছে। ইবন কাসীর নাম নেন মুনাফিকদের, যারা বাইরে ইসলাম গ্রহণ করেছিল, অথচ ভেতরে তা অপছন্দ করত। আয়াতটি বর্ণনা করে সেই প্রেক্ষাপটে ওই লোকেরা কী বলেছিল। আজকের কোনো ইহুদি, বা জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "An Omen Older Than Madinah",
          "bn": "মদীনার চেয়েও পুরনো কুলক্ষণ"
        },
        "p": [
          {
            "en": "As-Sa'di names the habit: they drew an evil omen from the Messenger ﷺ, as others had from their messengers. Pharaoh's people, in 7:131, called the good their own and took Musa (AS) as an ill omen when hardship came; the people of Salih (AS) said in 27:47, we take you as an omen; a town told its messengers the same in 36:18. When their hearts grew alike in disbelief, he writes, their words grew alike. Anyone who blames harm on what the messengers brought falls under this grave censure.",
            "bn": "সা'দী অভ্যাসটার নাম বলে দেন: আগের লোকেরা যেমন নিজেদের রাসূলদের অশুভ লক্ষণ ধরত, এরাও তেমনি রাসূল ﷺ-কে অশুভ ভেবেছিল। ৭:১৩১ আয়াতে ফেরাউনের লোকেরা কল্যাণকে বলত নিজেদের পাওনা, আর কষ্ট এলে মূসা (আঃ)-কে কুলক্ষণ ধরত। ২৭:৪৭ আয়াতে সালিহ (আঃ)-এর কওম বলেছিল, আমরা তোমাকে অশুভ মনে করি। ৩৬:১৮ আয়াতে এক জনপদ তাদের রাসূলদের একই কথা বলেছিল। সা'দী লেখেন, কুফরিতে তাদের অন্তর যখন একরকম হলো, কথাও হলো একরকম। রাসূলরা যা এনেছেন, তার ঘাড়ে যে-ই অনিষ্টের দায় চাপায়, সে এই কঠিন নিন্দার আওতায় পড়ে।"
          },
          {
            "en": "No commentary fetched for this verse attaches a sound hadith to it. A general narration, not tied to the verse, speaks to the habit of tiyarah, drawing evil omens. Al-Bukhari (5754) reports that Abu Hurayrah said he heard the Messenger of Allah ﷺ say: \"There is no tiyarah, and the best of it is al-fa'l.\" They asked, \"And what is al-fa'l?\" He said, \"A good word that one of you hears.\" It stands in al-Bukhari's Sahih.",
            "bn": "এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। তবে আয়াতের সঙ্গে সরাসরি যুক্ত নয়, এমন একটি সাধারণ বর্ণনা তিয়ারা, অর্থাৎ অশুভ লক্ষণ ধরার অভ্যাস নিয়ে কথা বলে। বুখারী (৫৭৫৪) বর্ণনা করেন, আবু হুরায়রা (রাঃ) বলেছেন, তিনি রাসূলুল্লাহ ﷺ-কে বলতে শুনেছেন: 'তিয়ারা বলে কিছু নেই, আর এর মধ্যে উত্তম হলো ফা'ল।' সাহাবীরা জিজ্ঞেস করলেন, 'ফা'ল কী?' তিনি বললেন, 'ভালো কোনো কথা, যা তোমাদের কেউ শুনতে পায়।' হাদীসটি বুখারীর সহীহ গ্রন্থে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Answer for Both",
          "bn": "দুই অবস্থার এক জবাব"
        },
        "p": [
          {
            "en": "Qul kullun min 'indi Allah: say, all is from Allah. At-Tabari spells it out: say, O Muhammad, that all of it is from Allah, not from me and not from anyone else; from Him come ease and hardship, victory and defeat. He reports Qatadah, the blessings and the calamities, and from Ibn Abbas: the good He bestowed on you as a favour, and the evil He tested you with. As-Sa'di glosses it as by His decree and His creation; Ibn Kathir says that decree runs upon the righteous and the wicked alike.",
            "bn": "কুল কুল্লুম মিন 'ইনদিল্লাহ: বলো, সবই আল্লাহর পক্ষ থেকে। তাবারী কথাটা খুলে বলেন: হে মুহাম্মাদ, বলে দাও, এর সবই আল্লাহর পক্ষ থেকে, আমার পক্ষ থেকে নয়, অন্য কারও পক্ষ থেকেও নয়। স্বস্তি আর কষ্ট, বিজয় আর পরাজয়, সবই তাঁর কাছ থেকে আসে। তিনি কাতাদা থেকে আনেন: নিয়ামত আর বিপদ, দুটোই। ইবন আব্বাস থেকে আনেন: কল্যাণ দিয়ে তিনি তোমাকে অনুগ্রহ করেছেন, আর অকল্যাণ দিয়ে তোমাকে পরীক্ষা করেছেন। সা'দীর ব্যাখ্যায়, এ হলো তাঁর তাকদীর আর তাঁর সৃষ্টি অনুযায়ী। ইবন কাসীর বলেন, সেই ফয়সালা নেককার আর পাপী সবার ওপরই কার্যকর।"
          },
          {
            "en": "As-Sa'di adds a sentence that answers the charge itself: the messengers, and what they brought, are never a cause of any evil that occurs, for they were sent to set right this world, the next and the religion. Ibn Kathir reports, as a strange narration, a report through al-Bazzar in which this clause is argued before the Prophet ﷺ, and then quotes Ibn Taymiyyah's verdict on it: fabricated, by agreement of the experts. It is noted here only so that no reader takes it as sound.",
            "bn": "সা'দী এমন একটি কথা যোগ করেন, যা অভিযোগটার সরাসরি জবাব। রাসূলরা, আর তাঁরা যা এনেছেন, কখনোই কোনো অনিষ্টের কারণ নন। কারণ তাঁদের পাঠানো হয়েছে দুনিয়া, আখিরাত আর দীনকে ঠিক করার জন্য। ইবন কাসীর 'গরীব' হিসেবে বাযযারের সূত্রে একটি বর্ণনা আনেন, যেখানে নবী ﷺ-এর সামনে এই অংশ নিয়ে বিতর্কের কথা আছে। তারপর তিনি সেটার ব্যাপারে ইবন তাইমিয়ার রায় উদ্ধৃত করেন: বিশেষজ্ঞদের সর্বসম্মতিতে এটি জাল। এখানে কথাটা আনা হলো শুধু এজন্য, যাতে কোনো পাঠক বর্ণনাটিকে সহীহ ভেবে না বসেন।"
          },
          {
            "en": "Fa-mali ha'ula'i al-qawmi la yakaduna yafqahuna hadithan: what is wrong with these people, that they can hardly understand any statement? At-Tabari: they hardly grasp what they are told, that whatever reaches them of good or harm is from Allah alone. As-Sa'di offers two readings, no understanding at all or only a weak one, and finds inside the rebuke a praise of those who understand from Allah and His Messenger ﷺ by turning to their words and pondering them. Al-Baghawi reports a view that hadith here is the Qur'an.",
            "bn": "ফামালি হা-উলা-য়িল কাওমি লা ইয়াকাদূনা ইয়াফকাহূনা হাদীসা: এই লোকদের হলো কী, তারা প্রায় কোনো কথাই বোঝে না? তাবারীর ব্যাখ্যায়, তাদের যা জানানো হয় তার মর্ম তারা প্রায় ধরতেই পারে না: ভালো-মন্দ যা-ই আসে, তা কেবল আল্লাহর কাছ থেকে। সা'দী দুটি অর্থ দেন। হয় তারা একেবারেই বোঝে না, নয়তো বোঝে খুব দুর্বলভাবে। এই তিরস্কারের ভেতরেই তিনি দেখেন তাদের প্রশংসা, যারা আল্লাহ ও তাঁর রাসূল ﷺ-এর কথার দিকে মনোযোগ দিয়ে, তা নিয়ে চিন্তা করে বুঝতে চায়। বাগাভী একটি মত জানান, এখানে 'হাদীস' মানে কুরআন।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Beside the Next Verse",
          "bn": "পরের আয়াতের পাশে রেখে"
        },
        "p": [
          {
            "en": "The next verse says: what reaches you of good is from Allah, and what reaches you of ill is from yourself. Al-Qurtubi takes the address as to the Prophet ﷺ meaning his community, or to the human being as a kind. At-Tabari, on 4:79, explains it as by a sin your own self earned, and reports Abu Salih's gloss, holding both sides together: by your sin, and I decreed it upon you. As-Sa'di: by your sins and your earning, and what Allah pardons is more. Ibn Zayd joins it to 3:165, where the Prophet ﷺ is told to say: it is from yourselves.",
            "bn": "পরের আয়াত বলে: তোমার যে কল্যাণ হয়, তা আল্লাহর পক্ষ থেকে, আর যে অকল্যাণ হয়, তা তোমার নিজের কারণে। কুরতুবীর মতে সম্বোধনটা নবী ﷺ-এর প্রতি, কিন্তু উদ্দেশ্য তাঁর উম্মত। অথবা সম্বোধন মানুষের প্রতি, গোটা মানবজাতি অর্থে। ৪:৭৯ আয়াতের ব্যাখ্যায় তাবারী বলেন, এর মানে তোমার নিজের কামাই করা কোনো গুনাহর কারণে। তিনি আবু সালিহের একটি ব্যাখ্যা আনেন, যা দুই দিকই একসঙ্গে ধরে রাখে: তোমার গুনাহর কারণে, আর আমিই তা তোমার জন্য নির্ধারণ করেছি। সা'দী বলেন, তোমার গুনাহ আর তোমার কামাইয়ের কারণে, আর আল্লাহ যা মাফ করে দেন তা আরও বেশি। ইবন যায়দ একে যুক্ত করেন ৩:১৬৫ আয়াতের সঙ্গে, যেখানে নবী ﷺ-কে বলতে বলা হয়েছে: এটা তোমাদের নিজেদের কাছ থেকেই।"
          },
          {
            "en": "Al-Qurtubi adds a caution: hasanah and sayyi'ah here mean plenty and drought, ease and hardship, not obedience and sin, and those who seized the pair to assign sins to man apart from Allah, or to Allah apart from His creatures, built on a misreading. He also records readings that make 4:79 their words, with \"they say\" understood, or a question. On the main readings, the decree is Allah's, and the earning is the person's. Then 4:79 names the Prophet ﷺ a messenger to people, and 4:80 makes obeying him obeying Allah. A loss then leaves two questions: whose decree, and what did my hands earn?",
            "bn": "কুরতুবী একটি সতর্কতাও যোগ করেন। এখানে হাসানাহ আর সাইয়িআহ মানে প্রাচুর্য আর খরা, স্বস্তি আর কষ্ট। আনুগত্য আর গুনাহ এর অর্থ নয়। কেউ এই জোড়া ধরে গুনাহকে আল্লাহ থেকে আলাদা করে শুধু মানুষের ঘাড়ে চাপিয়েছে, কেউ সৃষ্টিকে বাদ দিয়ে শুধু আল্লাহর দিকে। দুই দলই দাঁড়িয়েছে ভুল পাঠের ওপর। তিনি আরও কিছু পাঠ উল্লেখ করেন: কারও মতে ৪:৭৯ আয়াতে 'তারা বলে' কথাটি উহ্য, অর্থাৎ এটা ওই লোকদেরই কথা; কারও মতে এটা একটি প্রশ্ন। প্রধান ব্যাখ্যাগুলো অনুযায়ী তাকদীর আল্লাহর, আর কামাই মানুষের নিজের। ৪:৭৯ আয়াত এরপর নবী ﷺ-কে মানুষের জন্য রাসূল ঘোষণা করে, আর ৪:৮০ আয়াত তাঁর আনুগত্যকে আল্লাহরই আনুগত্য বলে। তাই কোনো ক্ষতি এলে দুটি প্রশ্ন সামনে থাকে: কার ফয়সালা, আর আমার নিজের হাত কী কামাই করেছে?"
          }
        ]
      }
    ]
  },
  "4:82": {
    "sections": [
      {
        "h": {
          "en": "Asked After a Night's Plotting",
          "bn": "রাতের মন্ত্রণার পরেই প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse before draws a portrait. They say obedience, and when they go out from the Prophet ﷺ a party of them spends the night arranging something other than what he says, and Allah records what they arrange by night. Then comes the question: afala yatadabbaruna al-Qur'an, do they not ponder the Qur'an? At-Tabari reads it as aimed at those very night plotters: do they not ponder the Book of Allah, so that they would know His proof against them in obeying the Prophet ﷺ and following his command?",
            "bn": "আগের আয়াতটি একটা ছবি আঁকে। তারা মুখে বলে, আনুগত্য করলাম। অথচ নবী ﷺ-এর কাছ থেকে বেরিয়ে গেলেই তাদের একদল রাত জেগে তাঁর কথার উল্টো কিছু ফাঁদে, আর আল্লাহ তাদের রাতের সেই মন্ত্রণা লিখে রাখেন। ঠিক এরপর প্রশ্ন আসে: আফালা ইয়াতাদাব্বারূনাল কুরআন, তারা কি কুরআন নিয়ে গভীরভাবে ভাবে না? তাবারীর মতে প্রশ্নটা ওই রাতের মন্ত্রণাকারীদের দিকেই তাক করা। তারা কি আল্লাহর কিতাব নিয়ে ভাবে না? ভাবলে তো বুঝত, নবী ﷺ-এর আনুগত্য আর তাঁর নির্দেশ মানার প্রশ্নে আল্লাহর প্রমাণ তাদের বিরুদ্ধেই দাঁড়িয়ে আছে।"
          },
          {
            "en": "Al-Qurtubi reads it the same way: here Allah faulted the hypocrites for turning away from pondering the Qur'an and its meanings. The Muyassar keeps the pointing word, these people. Ibn Kathir and as-Sa'di open with a wider command. Ibn Kathir says Allah commands His servants to ponder the Qur'an and forbids them to turn away from it; as-Sa'di says Allah commands the pondering of His Book. Ma'arif al-Qur'an says the verse invites people, and that the Qur'an asks every human being to ponder its meanings. Both readings stand here as the commentators give them.",
            "bn": "কুরতুবীও একই দিকে পড়েন। তাঁর কথায়, এখানে আল্লাহ মুনাফিকদের দোষ ধরেছেন, কারণ তারা কুরআন আর তার অর্থ নিয়ে ভাবনা থেকে মুখ ফিরিয়ে রেখেছিল। মুয়াসসার শুধু ইশারার শব্দটা রাখে: এরা। ইবন কাসীর আর সা'দী অবশ্য শুরু করেন আরও ব্যাপক এক আদেশ দিয়ে। ইবন কাসীর বলেন, আল্লাহ তাঁর বান্দাদের কুরআন নিয়ে ভাবতে আদেশ করছেন আর তা থেকে মুখ ফেরাতে নিষেধ করছেন। সা'দী বলেন, আল্লাহ তাঁর কিতাব নিয়ে তাদাব্বুরের আদেশ দিচ্ছেন। মাআরিফুল কুরআনের মতে আয়াতটি মানুষকে ডাকছে, আর কুরআন নিজেই চায় প্রত্যেক মানুষ তার অর্থ নিয়ে ভাবুক। তাফসীরকারেরা যেভাবে দুটি পাঠ দিয়েছেন, এখানে দুটোই সেভাবে রইল।"
          },
          {
            "en": "Whichever reading is taken, those in the foreground are a group who professed obedience in the Prophet's ﷺ presence and arranged otherwise by night. The verse describes what the passage describes. It licenses nothing against any living person or community, and it gives no reader the right to brand anyone a hypocrite. What it hands a reader is a question, and the commentators who read it as a command to all show that the first person to put it to is oneself.",
            "bn": "যে পাঠই নেওয়া হোক, সামনে যারা আছে তারা একটি দল। নবী ﷺ-এর সামনে তারা আনুগত্যের কথা বলত, আর রাতে করত অন্য পরিকল্পনা। আয়াতটি সেটুকুই বর্ণনা করে, যা এই অংশ বর্ণনা করছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। কাউকে মুনাফিক বলে দাগিয়ে দেওয়ার অধিকারও কোনো পাঠককে দেয় না। পাঠকের হাতে আয়াতটি তুলে দেয় একটা প্রশ্ন। আর যাঁরা একে সবার প্রতি আদেশ হিসেবে পড়েছেন, তাঁরা দেখিয়ে দেন: প্রশ্নটা প্রথমে করতে হয় নিজেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where a Thing Comes From",
          "bn": "কোন জিনিস কোথা থেকে আসে"
        },
        "p": [
          {
            "en": "Read across the passage and a small phrase keeps returning: min 'indi, from the presence of. In 4:78, when good reaches them they say this is from Allah, and when harm reaches them they say this is from you, and the Prophet ﷺ is told to answer that all of it is from Allah. In 4:81 they go out from you and plot. In 4:82 the phrase comes a fifth time: had it been from other than Allah. Across 4:78 to 4:82 the passage keeps asking where a thing comes from.",
            "bn": "পুরো অংশটা একটানা পড়লে একটা ছোট শব্দবন্ধ বারবার ফিরে আসে: মিন ইনদি, অর্থাৎ কারও কাছ থেকে। ৪:৭৮ আয়াতে ভালো কিছু পেলে তারা বলে, এটা আল্লাহর কাছ থেকে। খারাপ কিছু ঘটলে বলে, এটা তোমার কাছ থেকে। আর নবী ﷺ-কে জবাব দিতে বলা হয়, সবই আল্লাহর কাছ থেকে। ৪:৮১ আয়াতে তারা তোমার কাছ থেকে বেরিয়ে গিয়ে মন্ত্রণা করে। ৪:৮২ আয়াতে শব্দবন্ধটা আসে পঞ্চমবার: যদি তা আল্লাহ ছাড়া অন্য কারও কাছ থেকে আসত। ৪:৭৮ থেকে ৪:৮২ পর্যন্ত অংশটা ঘুরেফিরে একটাই প্রশ্ন করে: কোন জিনিস আসলে কোথা থেকে আসে।"
          },
          {
            "en": "So the question of 4:82 is not a change of subject. People who sorted good and harm by their own preference, crediting good to Allah and harm to the Prophet ﷺ, are now asked to examine the Book's own source. Ibn Zayd, quoted by at-Tabari, gives the believer's answer in the very words of 4:78: it is incumbent on the believer to say kullun min 'indillah, all of it is from Allah, to believe in what is ambiguous in it, and not to strike part of it against part.",
            "bn": "তাই ৪:৮২ আয়াতের প্রশ্নে প্রসঙ্গ বদলায়নি। যারা নিজেদের মর্জিমতো ভালো-মন্দ ভাগ করত, ভালোটা আল্লাহর নামে আর মন্দটা নবী ﷺ-এর ঘাড়ে চাপাত, এবার তাদের বলা হচ্ছে খোদ কিতাবের উৎসটা যাচাই করে দেখতে। তাবারী ইবন যায়দের যে কথা এনেছেন, তাতে মুমিনের জবাব আসে হুবহু ৪:৭৮ আয়াতের শব্দে। মুমিনের কর্তব্য বলা: কুল্লুম মিন ইনদিল্লাহ, সবই আল্লাহর কাছ থেকে। কুরআনের অস্পষ্ট অংশেও ঈমান রাখা। আর তার এক অংশকে আরেক অংশের বিরুদ্ধে দাঁড় না করানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Thinking Toward the Last of It",
          "bn": "শেষ পরিণামের দিকে ভাবনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi begins with the word. Tadabbartu al-shay', he explains, means I thought about where the thing ends up. The root is the back of a thing: adbara al-qawm is said when a people's affair has run on to its last part, and tadbir is a person managing his affair as if he were looking at what it will finally become. Al-Baghawi says it more briefly: tadabbur is looking at the last of a matter, and the dubur of everything is its end.",
            "bn": "কুরতুবী শুরু করেন শব্দটা দিয়ে। তাদাব্বারতুশ শাই মানে, তিনি বলেন, জিনিসটা শেষে কোথায় গিয়ে দাঁড়ায় তা নিয়ে ভাবলাম। ধাতুটার মূলে আছে কোনো কিছুর পেছন দিক। কোনো জাতির ব্যাপার শেষ মাথায় গিয়ে পৌঁছালে বলা হয় আদবারাল কাওম। আর তাদবীর হলো এমনভাবে নিজের কাজ সামলানো, যেন মানুষটা দেখছে শেষমেশ কাজটা কী রূপ নেবে। বাগাভী কথাটা আরও ছোট করে বলেন: তাদাব্বুর হলো কোনো বিষয়ের শেষ প্রান্তের দিকে তাকানো, আর প্রতিটি জিনিসের দুবুর মানে তার শেষ।"
          },
          {
            "en": "Ad-Dahhak, quoted by at-Tabari, gives the plainest gloss: yatadabbarun means looking into it. As-Sa'di widens it: tadabbur is contemplating the meanings of the Book and fixing the gaze of thought on it, on its premises, its outcomes and what they entail. The Muyassar asks whether these people do not look into the Qur'an and the truth it brought with a look of contemplation and pondering, since it came in a firm arrangement that settles that it is from Allah alone.",
            "bn": "তাবারী যাহহাকের যে ব্যাখ্যা আনেন, সেটাই সবচেয়ে সাদামাটা: ইয়াতাদাব্বারূন মানে এর ভেতরে চোখ রাখা। সা'দী অর্থটা আরও বিস্তৃত করেন। তাঁর কাছে তাদাব্বুর হলো কিতাবের অর্থ নিয়ে গভীর মনোযোগে ভাবা, চিন্তার দৃষ্টি তার ওপর স্থির রাখা, তার সূচনা, পরিণাম আর সেগুলো থেকে যা যা আসে তার ওপরও। মুয়াসসার প্রশ্নটা এভাবে সাজায়: এরা কি কুরআন আর তার আনা সত্যের দিকে ভাবনা ও তাদাব্বুরের দৃষ্টিতে তাকায় না? কুরআন তো এসেছে এমন মজবুত বিন্যাসে, যা নিশ্চিত করে দেয় যে তা একমাত্র আল্লাহর কাছ থেকেই।"
          },
          {
            "en": "Ma'arif al-Qur'an notices what the verse did not say. It asks do they not ponder, not do they not recite. A plain recitation empty of deliberation, it warns, may lead a reader to start seeing contradictions that are not there; only pondering shows that its words and meanings have none. The claim of consistency is made to whoever follows a verse to its end, not to whoever passes over it.",
            "bn": "আয়াতটি কী বলেনি, মাআরিফুল কুরআন সেদিকে নজর দেয়। প্রশ্নটা হলো, তারা কি গভীরভাবে ভাবে না। প্রশ্নটা এ নয় যে, তারা কি তিলাওয়াত করে না। ভাবনাহীন নিছক তিলাওয়াত, মাআরিফুল কুরআনের সতর্কবাণী অনুযায়ী, পাঠককে এমন বিরোধ দেখাতে শুরু করতে পারে যা আসলে নেই। কুরআনের শব্দে আর অর্থে যে কোনো বিরোধ নেই, তা ধরা পড়ে কেবল তাদাব্বুরে। সামঞ্জস্যের দাবিটা করা হয়েছে সেই পাঠকের কাছে, যে আয়াতের শেষ পর্যন্ত যায়। যে পাশ কাটিয়ে চলে যায়, তার কাছে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Kinds of Discord",
          "bn": "অসঙ্গতির নানা চেহারা"
        },
        "p": [
          {
            "en": "Then the condition: wa law kana min 'indi ghayri Allah la-wajadu fihi ikhtilafan kathira, had it been from other than Allah, they would have found much ikhtilaf in it. Ibn Kathir reads it as a forgery that never took place: had it been fabricated and invented, as the ignorant among the idolaters and the hypocrites said in their hidden selves, they would have found in it much disturbance and contradiction. This Book is free of that, he concludes, so it is from Allah.",
            "bn": "তারপর শর্তবাক্য: ওয়া লাও কানা মিন ইনদি গাইরিল্লাহি লাওয়াজাদূ ফীহিখতিলাফান কাসীরা, যদি তা আল্লাহ ছাড়া অন্য কারও কাছ থেকে আসত, তবে তারা এতে অনেক ইখতিলাফ পেত। ইবন কাসীর একে পড়েন এমন এক জালিয়াতি হিসেবে, যা কখনো ঘটেনি। মুশরিক আর মুনাফিকদের মধ্যে যারা অজ্ঞ, তারা মনে মনে যেমন বলত, কুরআন যদি তেমনই বানানো আর মনগড়া হতো, তবে তারা এতে প্রচুর গোলমাল আর পরস্পরবিরোধ খুঁজে পেত। তাঁর উপসংহার: এই কিতাব এসব থেকে মুক্ত, সুতরাং তা আল্লাহর কাছ থেকেই।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both gloss the word as tafawut and tanaqud, unevenness and contradiction. Al-Baghawi credits this to Ibn Abbas (RA); al-Qurtubi to Ibn Abbas, Qatada and Ibn Zayd. Al-Qurtubi then fences the word in. It does not cover the different wordings of the readings, of parables and indications, or the different lengths of surahs and verses; it means only the difference of contradiction and unevenness. At-Tabari describes what the verse rules out: rulings that differ, meanings that collide, and part of it exposing the corruption of the rest.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই শব্দটার অর্থ করেন তাফাউত ও তানাকুদ, অর্থাৎ অসমতা আর পরস্পরবিরোধ। বাগাভী এ ব্যাখ্যা ইবন আব্বাস (রাঃ)-এর বলে উল্লেখ করেন। কুরতুবী উল্লেখ করেন ইবন আব্বাস, কাতাদা ও ইবন যায়দের নাম। এরপর কুরতুবী শব্দটার সীমা টেনে দেন। কিরাআতের শব্দভেদ, উপমা আর ইঙ্গিতের ভিন্ন ভিন্ন শব্দ, সূরা ও আয়াতের দৈর্ঘ্যের তারতম্য, এসব এর মধ্যে পড়ে না। এখানে বোঝানো হয়েছে কেবল পরস্পরবিরোধ আর অসমতার ইখতিলাফ। তাবারী বলেন আয়াত কী নাকচ করছে: বিধানে বিধানে অমিল, অর্থে অর্থে সংঘাত, আর এক অংশ দিয়ে আরেক অংশের গলদ ফাঁস হয়ে যাওয়া।"
          },
          {
            "en": "Two further glosses come under the words it is said. Al-Baghawi reports that the difference would show in the reports of the unseen, of what has been and what will be. Al-Qurtubi reports a fuller version: nobody speaks at length without much difference in his speech, whether in description and wording, in the quality of meaning, in contradiction or in falsehood. The Qur'an carries none of these, and no lie in what it reports of the unseen or of what people conceal. Ma'arif al-Qur'an adds that its eloquence never tapers.",
            "bn": "'বলা হয়' কথাটির অধীনে আরও দুটি ব্যাখ্যা আসে। বাগাভীর বর্ণনায়, অমিলটা ধরা পড়ত গায়েবের খবরে, যা ঘটে গেছে আর যা ঘটবে তার বিবরণে। কুরতুবী এর আরও পূর্ণ রূপ আনেন। যে-ই অনেক কথা বলে, তার কথায় অনেক অমিল পাওয়া যায়। কখনো বর্ণনা আর শব্দে, কখনো অর্থের মানে, কখনো পরস্পরবিরোধে, কখনো মিথ্যায়। কুরআনে এর কোনোটাই নেই। গায়েবের যে খবর সে দেয়, কিংবা মানুষ যা গোপন রাখে তার যে খবর দেয়, তাতে কোনো মিথ্যাও নেই। মাআরিফুল কুরআন যোগ করে, এর বাগ্মিতা কোথাও ঝিমিয়ে পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Does Much Allow a Little?",
          "bn": "'অনেক' বললে কি সামান্য থাকে?"
        },
        "p": [
          {
            "en": "Kathira raises a question a careful reader will ask: if a human book would show much contradiction, might the Qur'an show a little? Ma'arif al-Qur'an, citing Bayan al-Qur'an, answers that the word reflects the range of subjects: had there been contradiction in one subject, contradiction across many subjects would have become a great deal. The truth of the matter, it says, is that there is no contradiction anywhere in the Qur'an. As-Sa'di ends his comment the same way: since it is from Allah, there is no difference in it at all.",
            "bn": "কাসীরা বিশেষণটা এমন এক প্রশ্ন তোলে, যা মনোযোগী পাঠক করবেনই। মানুষের লেখা বইয়ে যদি অনেক বিরোধ থাকত, তবে কি কুরআনে সামান্য বিরোধ থাকতে পারে? মাআরিফুল কুরআন বায়ানুল কুরআনের বরাতে জবাব দেয়, শব্দটা বিষয়ের ব্যাপ্তির কথা বলছে। এক বিষয়ে বিরোধ থাকলে বহু বিষয় জুড়ে সেই বিরোধ মিলে অনেক হয়ে দাঁড়াত। আসল কথা, মাআরিফুল কুরআন বলে, কুরআনের কোথাও কোনো বিরোধ নেই। সা'দীও তাঁর ব্যাখ্যা শেষ করেন একই কথায়: যেহেতু তা আল্লাহর কাছ থেকে, তাই এতে কোনো ইখতিলাফই নেই।"
          },
          {
            "en": "Qatada, quoted by at-Tabari, frames it as a contrast between two kinds of speech: the word of Allah does not differ, it is truth with no falsehood in it, while the speech of people differs. Ma'arif al-Qur'an says why human speech does: it is affected by circumstances, and it varies with calm and distraction, with happiness and sorrow. On the reading of Ma'arif al-Qur'an and as-Sa'di, then, kathira describes what a human author would produce over so many subjects. It does not allow the Qur'an a small amount.",
            "bn": "তাবারী কাতাদার যে কথা আনেন, তাতে দুই রকম কথার তুলনা আছে। আল্লাহর কথায় অমিল হয় না। তা সত্য, তাতে কোনো বাতিল নেই। আর মানুষের কথায় অমিল হয়। মানুষের কথায় কেন অমিল হয়, মাআরিফুল কুরআন তার কারণও বলে। পরিস্থিতি তার ওপর ছাপ ফেলে। শান্তি আর অস্থিরতায়, আনন্দ আর দুঃখে তার কথা বদলে যায়। মাআরিফুল কুরআন ও সা'দীর পাঠ অনুযায়ী তাই কাসীরা বোঝায়, এত বিষয় নিয়ে কোনো মানুষ লিখলে কী দাঁড়াত। কুরআনের জন্য অল্প কিছু বিরোধের ছাড় এ শব্দ দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Verses Seem to Clash",
          "bn": "আয়াতে আয়াতে বিরোধের ভ্রম"
        },
        "p": [
          {
            "en": "What of verses that seem, at a first reading, to pull against each other? Ibn Kathir answers from 3:7, where those firmly grounded in knowledge say: we believe in it, all of it is from our Lord. Its clear verses and its ambiguous verses are alike true, he explains. So the firmly grounded refer the ambiguous back to the clear and are guided, while those with deviation in their hearts refer the clear to the ambiguous. For this, he says, Allah praised the firm and blamed the deviant.",
            "bn": "প্রথম পাঠে যেসব আয়াত পরস্পরের উল্টো দিকে টানছে বলে মনে হয়, সেগুলোর কী হবে? ইবন কাসীর জবাব দেন ৩:৭ আয়াত দিয়ে। সেখানে জ্ঞানে যারা পাকা, তারা বলে: আমরা এতে ঈমান এনেছি, সবই আমাদের রবের কাছ থেকে। তাঁর ব্যাখ্যায়, কুরআনের মুহকাম আয়াত আর মুতাশাবিহ আয়াত দুটোই সত্য। তাই পাকা জ্ঞানীরা অস্পষ্টকে ফিরিয়ে নেন স্পষ্টের দিকে, আর হিদায়াত পান। যাদের অন্তরে বক্রতা, তারা স্পষ্টকে টেনে নেয় অস্পষ্টের দিকে। এ কারণেই, তিনি বলেন, আল্লাহ এক দলের প্রশংসা করেছেন আর অন্য দলের নিন্দা।"
          },
          {
            "en": "Ibn Zayd, quoted by at-Tabari, puts the difficulty where he thinks it lies. The Qur'an does not belie part of itself or undo part of itself; whatever people fail to grasp in it comes from the shortcoming of their minds and their ignorance. When a believer does not understand a matter and cannot work it out, he says, let him say: what Allah said is true. Let him know that Allah did not say something and then undo it, and believe in the reality of what came from Allah.",
            "bn": "তাবারী ইবন যায়দের যে কথা আনেন, তাতে সমস্যাটা কোথায় তা স্পষ্ট করে বলা আছে। কুরআনের এক অংশ আরেক অংশকে মিথ্যা বলে না, এক অংশ আরেক অংশকে বাতিলও করে না। কুরআনের কোনো কথা মানুষ না বুঝলে, সেটা তাদের বুদ্ধির ঘাটতি আর অজ্ঞতা থেকে। কোনো মুমিন যদি কোনো বিষয় না বোঝে, কিছুতেই মীমাংসা করতে না পারে, তিনি বলেন, সে যেন বলে: আল্লাহ যা বলেছেন তা সত্য। সে যেন জেনে রাখে, আল্লাহ এমন কোনো কথা বলেননি যা পরে নিজেই ভেঙে দিয়েছেন। আর আল্লাহর কাছ থেকে যা এসেছে, তার সত্যতায় যেন ঈমান রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised Voices Over a Verse",
          "bn": "এক আয়াত নিয়ে চড়া গলা"
        },
        "p": [
          {
            "en": "Under this verse Ibn Kathir brings the Prophet's ﷺ anger at quarrelling over the Book, and notes that Muslim records it. Muslim narrates (2666) from Abdullah ibn Amr (RA): \"I set out early to the Messenger of Allah ﷺ one day, and he heard the voices of two men who differed over a verse. The Messenger of Allah ﷺ came out to us, the anger recognisable in his face, and said: Those before you perished only because of their differing over the Book.\" Muslim placed it in his Sahih.",
            "bn": "এই আয়াতের আলোচনায় ইবন কাসীর আল্লাহর কিতাব নিয়ে ঝগড়ায় নবী ﷺ-এর রাগের কথা আনেন, আর জানান যে মুসলিম এটি বর্ণনা করেছেন। মুসলিম (২৬৬৬) আবদুল্লাহ ইবন আমর (রাঃ) থেকে বর্ণনা করেন: \"একদিন আমি সকাল সকাল রাসূলুল্লাহ ﷺ-এর কাছে গেলাম। তিনি দুজন লোকের গলা শুনলেন, যারা একটি আয়াত নিয়ে মতভেদ করছিল। রাসূলুল্লাহ ﷺ আমাদের কাছে বেরিয়ে এলেন, তাঁর চেহারায় রাগ স্পষ্ট বোঝা যাচ্ছিল। তিনি বললেন: তোমাদের আগের লোকেরা ধ্বংস হয়েছে শুধু কিতাব নিয়ে তাদের মতভেদের কারণে।\" মুসলিম এটি তাঁর সহীহ গ্রন্থে রেখেছেন।"
          },
          {
            "en": "Ibn Kathir also records from Imam Ahmad a longer account through Amr ibn Shu'ayb, of the Prophet ﷺ coming out angry while people argued over the divine decree. Ibn Majah has it as well (85), with the Prophet ﷺ rebuking them for striking one part of the Qur'an against another; Ibn Majah gives it no grading of his own. It is the very phrase Ibn Zayd used. The verse says the Book holds no contradiction; these reports warn against readers who manufacture one by setting verse against verse.",
            "bn": "ইবন কাসীর ইমাম আহমাদ থেকে আমর ইবন শুআইবের সূত্রে আরও লম্বা একটি বর্ণনাও আনেন। লোকেরা তাকদীর নিয়ে তর্ক করছিল, এমন সময় নবী ﷺ রাগান্বিত অবস্থায় বেরিয়ে আসেন। ইবন মাজাহও (৮৫) এটি বর্ণনা করেছেন। সেখানে নবী ﷺ তাদের তিরস্কার করেন, কারণ তারা কুরআনের এক অংশকে আরেক অংশের বিরুদ্ধে দাঁড় করাচ্ছিল। ইবন মাজাহ নিজে এর কোনো মান নির্ধারণ করেননি। ইবন যায়দ ঠিক এই কথাটাই ব্যবহার করেছিলেন। আয়াত বলছে, কিতাবে কোনো বিরোধ নেই। আর এই বর্ণনাগুলো সাবধান করে সেই পাঠকদের, যারা আয়াতের বিরুদ্ধে আয়াত দাঁড় করিয়ে নিজেরাই বিরোধ বানিয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pondering Open to Every Reader",
          "bn": "সব পাঠকের জন্য খোলা দরজা"
        },
        "p": [
          {
            "en": "Al-Qurtubi draws rulings from this verse read together with 47:24. Both show, he says, that pondering the Qur'an to know its meaning is obligatory. That refutes those who hold that nothing of its interpretation may be taken except what is established from the Prophet ﷺ, and who forbid interpreting it by what the Arabic language allows. He finds in it evidence for reasoning and inference, against blind imitation, and for analogy. Ma'arif al-Qur'an, citing him, draws the same point for qiyas.",
            "bn": "কুরতুবী এ আয়াতকে ৪৭:২৪ আয়াতের সঙ্গে মিলিয়ে কিছু বিধান বের করেন। তাঁর মতে দুটি আয়াতই দেখায়, কুরআনের অর্থ জানার জন্য তাদাব্বুর ওয়াজিব। এতে খণ্ডন হয় তাদের কথা, যারা বলে নবী ﷺ থেকে যা প্রমাণিত শুধু তা ছাড়া কুরআনের তাফসীরের কিছুই নেওয়া যাবে না, আর আরবি ভাষা যে ব্যাখ্যার সুযোগ দেয় তাও নিষেধ করে। তিনি এতে পান চিন্তা আর যুক্তি দিয়ে সিদ্ধান্তে পৌঁছানোর দলিল, অন্ধ তাকলীদের বিরুদ্ধে দলিল, আর কিয়াসের পক্ষে দলিল। মাআরিফুল কুরআনও তাঁর বরাতে কিয়াসের একই কথা বলে।"
          },
          {
            "en": "Ma'arif al-Qur'an keeps the door open and sets a rail beside it. Everyone has the right to ponder the Qur'an, but the levels differ: a master jurist draws the solutions of a great many problems from a single verse, while an ordinary reader reaches an understanding of them. When ordinary people read with a translation and explanation in their own language, it says, the greatness of Allah settles in their hearts, with love for Him and concern for the Hereafter. It advises studying under a scholar or a reliable tafsir, and asking experts when a doubt arises.",
            "bn": "মাআরিফুল কুরআন দরজাটা খোলা রাখে, আবার পাশে একটা রেলিংও দেয়। কুরআন নিয়ে ভাবার অধিকার সবার। তবে স্তর আলাদা। একজন বড় মুজতাহিদ একটিমাত্র আয়াত থেকে অসংখ্য মাসআলার সমাধান বের করেন, আর সাধারণ পাঠক সেগুলো বোঝা পর্যন্ত পৌঁছান। সাধারণ মানুষ যখন নিজের ভাষায় অনুবাদ আর ব্যাখ্যাসহ কুরআন পড়েন, মাআরিফুল কুরআন বলে, তখন অন্তরে বসে যায় আল্লাহর মহত্ত্ব, তাঁর প্রতি ভালোবাসা আর আখিরাতের চিন্তা। পরামর্শ হলো, কোনো আলিমের কাছে পড়া, নয়তো নির্ভরযোগ্য কোনো তাফসীর পড়া। আর সন্দেহ জাগলে নিজের মতে মীমাংসা না করে বিশেষজ্ঞদের জিজ্ঞেস করা।"
          },
          {
            "en": "As-Sa'di names the yield. Pondering the Book is the key to knowledge: it makes known the Lord and His attributes, the road that reaches Him, and the enemy who is truly the enemy, and the more a servant contemplates, the more he grows in knowledge, action and insight. Its fruit is certainty that this is the speech of Allah, because the reader sees rulings, stories and reports repeated in several places, all in agreement. As-Sa'di cites 38:29, which has its own article here, and 47:24, which also has its own. Then 4:83 turns to those who spread news before referring it to people able to judge it.",
            "bn": "সা'দী ফলটার নাম বলে দেন। কিতাব নিয়ে তাদাব্বুর জ্ঞানের চাবি। এতে চেনা যায় রবকে আর তাঁর গুণাবলিকে, তাঁর কাছে পৌঁছানোর পথকে, আর সেই শত্রুকে যে সত্যিকারের শত্রু। বান্দা যত বেশি ভাবে, তার জ্ঞান, আমল আর অন্তর্দৃষ্টি তত বাড়ে। এর ফল হলো ইয়াকীন, এটা যে আল্লাহরই কালাম। কারণ পাঠক দেখেন, বিধান, কাহিনি আর খবর কুরআনের নানা জায়গায় বারবার এসেছে, আর সবগুলো একে অন্যের সঙ্গে মিলে যায়। সা'দী ৩৮:২৯ আয়াত উদ্ধৃত করেন, এখানে যার আলাদা প্রবন্ধ আছে। ৪৭:২৪ আয়াতও আনেন, তারও আলাদা প্রবন্ধ আছে। আর ৪:৮৩ আয়াত এরপর তাদের দিকে ফেরে, যারা খবর যাচাই করতে সক্ষম লোকদের কাছে না পাঠিয়েই তা রটিয়ে দেয়।"
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
            "bn": "সূরা আন-নিসা মাদানি সূরা। ৪:৭১ আয়াত থেকে এর আলোচনা ঘুরে যায় মুমিনদের যুদ্ধে বের হওয়ার দিকে, আর যারা পিছিয়ে থাকে তাদের দিকে। ৪:৭৫ আয়াত প্রশ্ন করে, ওয়া মা লাকুম, তোমাদের কী হলো যে অসহায় নারী, পুরুষ ও শিশুদের জন্য তোমরা লড়াই করছ না? এরপর ৪:৮৮ আয়াত মুমিনদের সামনে একই গড়নের প্রশ্ন রাখে, ফা-মা লাকুম: তোমাদের কী হলো যে মুনাফিকদের নিয়ে তোমরা দুই দল হয়ে গেলে?"
          },
          {
            "en": "The passage runs four verses. 4:88 rebukes the split and says Allah cast that group back for what they earned. 4:89 describes them and gives the ruling. 4:90 opens with illa, except, lifts the ruling from two kinds of people, and closes by saying Allah has made no way for the believers against those who withdraw and offer peace. 4:91 describes a third group who want safety from both sides. Right after it, 4:92 and 4:93 give the rulings on killing a believer, by mistake and deliberately, and 4:94 tells the believers to investigate when they go out in Allah's cause.",
            "bn": "অংশটি চার আয়াতের। ৪:৮৮ আয়াত এই বিভক্তির জন্য তিরস্কার করে, আর জানায়, নিজেদের কামাইয়ের কারণে আল্লাহ দলটিকে উল্টো দিকে ফিরিয়ে দিয়েছেন। ৪:৮৯ আয়াত তাদের পরিচয় দেয় এবং হুকুম জানায়। ৪:৯০ আয়াত শুরু হয় ইল্লা, অর্থাৎ কিন্তু বা ব্যতীত, শব্দ দিয়ে। সেখানে দুই ধরনের মানুষকে হুকুমের বাইরে রাখা হয়, আর শেষে বলা হয়, যারা সরে দাঁড়ায় ও শান্তির প্রস্তাব দেয়, তাদের বিরুদ্ধে আল্লাহ মুমিনদের জন্য কোনো পথ রাখেননি। ৪:৯১ আয়াত তৃতীয় এক দলের কথা বলে, যারা দুই পক্ষের কাছেই নিরাপদ থাকতে চায়। ঠিক এর পরেই ৪:৯২ ও ৪:৯৩ আয়াতে আসে ভুলবশত ও ইচ্ছাকৃতভাবে মুমিন হত্যার বিধান, আর ৪:৯৪ আয়াত আল্লাহর পথে বের হলে যাচাই করে নেওয়ার নির্দেশ দেয়।"
          },
          {
            "en": "Who the hypocrites of 4:88 were is not settled. Ibn Kathir opens his comment by saying there are conflicting opinions over the reason the verse came down. Both of the main reports concern particular people at a time of war: men who had professed Islam and then, when it mattered, deserted the believers or took the enemy's side. Neither gives a licence against any people living at peace, and 4:90 says so in its own words.",
            "bn": "৪:৮৮ আয়াতের মুনাফিকরা ঠিক কারা ছিল, তা নিয়ে একমত হওয়া যায়নি। ইবনে কাসীর তাঁর ব্যাখ্যা শুরুই করেন এই কথা বলে যে আয়াত নাজিলের কারণ নিয়ে ভিন্ন ভিন্ন মত আছে। প্রধান দুটি বর্ণনাই যুদ্ধের সময়ের নির্দিষ্ট কিছু মানুষকে নিয়ে। তারা মুখে ইসলাম গ্রহণের কথা বলেছিল, তারপর প্রয়োজনের মুহূর্তে মুমিনদের ছেড়ে গিয়েছিল, কিংবা শত্রুর পক্ষ নিয়েছিল। কোনো বর্ণনাই শান্তিতে বসবাসকারী কোনো জনগোষ্ঠীর বিরুদ্ধে অনুমতি দেয় না, আর ৪:৯০ আয়াত নিজের ভাষাতেই সে কথা বলে দেয়।"
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
            "bn": "৪:৮৮ আয়াতের মূল ক্রিয়া আরকাসাহুম, র-ক-স মূল থেকে। ইবনে কাসীর বর্ণনা করেন, ইবনে আব্বাস (রাঃ) এর অর্থ করেছেন, তাদের ছুড়ে ফেলেছেন। ইবনে কাসীর নিজে ব্যাখ্যা করেন, আল্লাহ তাদের গোমরাহির দিকে ফিরিয়ে দিয়েছেন, আর তারা তাতে পড়ে গেছে। অভিধানে এই মূলের অর্থ কোনো জিনিস উল্টে দেওয়া, যেখান থেকে এসেছিল সেখানেই ফেরত পাঠানো। কারণটাও একই বাক্যে আছে: বিমা কাসাবূ, তাদের কামাইয়ের কারণে। ইবনে কাসীরের ব্যাখ্যায় সেই কামাই হলো রাসূল ﷺ-এর অবাধ্যতা আর বাতিলের অনুসরণ। পুরো কুরআনে এই মূল এসেছে মাত্র দুবার, দুবারই এই অংশে: ৪:৮৮ আয়াতে আরকাসাহুম, আর ৪:৯১ আয়াতে উরকিসূ ফীহা।"
          },
          {
            "en": "In 4:91 the verb returns in the passive: every time those people are returned to al-fitnah, they are plunged back into it, and as-Suddi, in Ibn Kathir's report, takes that fitnah to mean shirk. A second word runs through the passage: sabil, a way. 4:88 ends by saying that for the one Allah sends astray you will never find a way. 4:89 asks for emigration fi sabil Allah, in the way of Allah. 4:90 ends on the same word: Allah has made no way for you against those who offer peace.",
            "bn": "৪:৯১ আয়াতে ক্রিয়াটি ফিরে আসে কর্মবাচ্যে: যখনই তাদের ফিতনার দিকে ফিরিয়ে নেওয়া হয়, তখনই তারা আবার তাতে ডুবে যায়। ইবনে কাসীরের বর্ণনায় সুদ্দী এখানে ফিতনা বলতে শিরক বুঝেছেন। অংশটি জুড়ে আরেকটি শব্দও বারবার আসে: সাবীল, অর্থাৎ পথ। ৪:৮৮ আয়াতের শেষ কথা, আল্লাহ যাকে পথভ্রষ্ট করেন, তার জন্য তুমি কখনো কোনো পথ পাবে না। ৪:৮৯ আয়াত চায় ফী সাবীলিল্লাহ, আল্লাহর পথে হিজরত। আর ৪:৯০ আয়াত শেষ হয় সেই একই শব্দে: যারা শান্তির প্রস্তাব দেয়, তাদের বিরুদ্ধে আল্লাহ তোমাদের জন্য কোনো পথ রাখেননি।"
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
            "bn": "ইবনে কাসীর প্রধান দুটি বর্ণনা আনেন। প্রথমটি যায়েদ ইবনে সাবিত (রাঃ) থেকে। তাতে ৪:৮৮ আয়াতকে যুক্ত করা হয়েছে উহুদের সঙ্গে, আর সেই লোকদের সঙ্গে যারা যাত্রাপথ থেকে ফিরে গিয়েছিল। দ্বিতীয়টি আওফী বর্ণনা করেছেন ইবনে আব্বাস (রাঃ) থেকে, আর ইবনে আবি হাতিম তা লিপিবদ্ধ করেছেন। এটি মক্কার এমন কিছু লোকের কথা, যারা ইসলাম গ্রহণের দাবি করত, অথচ মুশরিকদের সাহায্য করত। তারা কোনো কাজে মক্কা থেকে বের হলে কিছু মুমিন বললেন, চলো ওদের ওপর চড়াও হয়ে হত্যা করি, ওরা তো শত্রুর সহায়। অন্যরা আপত্তি করলেন: যারা তোমাদের মতোই কালেমা বলে, শুধু হিজরত করেনি বলে তাদের হত্যা করবে?"
          },
          {
            "en": "In that report the Prophet ﷺ was with them and forbade neither side from making its case, until the verse came. At-Tabari, weighing the reports, preferred the view that the verse concerns people from Makkah, reasoning from the words until they emigrate, which point to people living outside Madinah. Mujahid, in a report Ibn Kathir cites for 4:91, said that verse came down about a group from Makkah who came to the Prophet ﷺ in Madinah appearing to be Muslims, then went back to Quraysh and returned to their idols, wanting to be at peace with both sides.",
            "bn": "সেই বর্ণনায় নবী ﷺ তাঁদের মাঝেই ছিলেন, আর আয়াত নাজিল হওয়া পর্যন্ত কোনো পক্ষকেই নিজের কথা বলতে নিষেধ করেননি। আত-তাবারী বর্ণনাগুলো যাচাই করে এই মতটিকে অগ্রাধিকার দিয়েছেন যে আয়াতটি মক্কার লোকদের নিয়ে। তাঁর যুক্তি আয়াতের শব্দ, যতক্ষণ না তারা হিজরত করে। এই কথা ইঙ্গিত দেয়, তারা মদিনার বাইরের মানুষ। ইবনে কাসীর ৪:৯১ আয়াতের ব্যাখ্যায় মুজাহিদের বর্ণনা আনেন: সেই আয়াত নাজিল হয়েছিল মক্কার এমন এক দলকে নিয়ে, যারা মদিনায় নবী ﷺ-এর কাছে এসে মুসলমান সাজত, তারপর কুরাইশের কাছে ফিরে গিয়ে আবার মূর্তিপূজায় লিপ্ত হতো। তারা দুই পক্ষের সঙ্গেই শান্তিতে থাকতে চাইত।"
          },
          {
            "en": "On the words if they turn away, Ibn Kathir gives two readings: from Ibn Abbas (RA), if they abandon emigration; from as-Suddi, if they make their disbelief open. As-Sa'di describes these hypocrites as people who claimed Islam but refused to emigrate, and notes that once they emigrated they had the rights of every Muslim. The Prophet ﷺ, he says, gave those rights to everyone with him who had emigrated, true believer or hypocrite alike. As these commentators read it, the ruling fell on people who refused hijrah or declared their disbelief, not on the hidden doubts of those living among the believers.",
            "bn": "যদি তারা মুখ ফিরিয়ে নেয়, এই কথার দুটি ব্যাখ্যা ইবনে কাসীর উল্লেখ করেন। ইবনে আব্বাস (রাঃ) থেকে: যদি তারা হিজরত ছেড়ে দেয়। সুদ্দী থেকে: যদি তারা নিজেদের কুফর প্রকাশ্যে ঘোষণা করে। আস-সা'দী এই মুনাফিকদের পরিচয় দেন এভাবে: তারা ইসলামের দাবি করত, কিন্তু হিজরত করতে অস্বীকার করত। তিনি আরও বলেন, হিজরত করলে তারা আর সব মুসলমানের মতোই অধিকার পেত। নবী ﷺ তাঁর সঙ্গে থাকা প্রত্যেক হিজরতকারীকে সেই অধিকার দিতেন, সে খাঁটি মুমিন হোক বা মুনাফিক। এই মুফাসসিরদের পাঠে হুকুমটি ছিল তাদের ওপর, যারা হিজরত প্রত্যাখ্যান করেছিল বা কুফর ঘোষণা করেছিল। মুমিনদের মাঝে বসবাসকারীদের গোপন সন্দেহ এর আওতায় ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Exceptions, Read Closely",
          "bn": "ব্যতিক্রমগুলো খুঁটিয়ে পড়া"
        },
        "p": [
          {
            "en": "4:90 names two kinds of people outside the ruling. The first are those who reach and join a people with whom the believers have a treaty. Ibn Kathir says they are to be treated as the treaty people are treated, and that this is the view of as-Suddi, Ibn Zayd and Ibn Jarir at-Tabari. The second are those who come with their hearts constricted, hasirat suduruhum, at the thought of fighting the believers or fighting their own people. Ibn Kathir describes them as neither with the Muslims nor against them, and says the believers have no right to kill them while they hold that position.",
            "bn": "৪:৯০ আয়াত দুই ধরনের মানুষকে হুকুমের বাইরে রাখে। প্রথম দল তারা, যারা এমন কোনো সম্প্রদায়ের কাছে গিয়ে মেলে, যাদের সঙ্গে মুমিনদের চুক্তি আছে। ইবনে কাসীর বলেন, চুক্তিবদ্ধ সম্প্রদায়ের সঙ্গে যে আচরণ, এদের সঙ্গেও সেই আচরণ হবে। তিনি জানান, এটি সুদ্দী, ইবনে যায়েদ ও ইবনে জারীর আত-তাবারীর মত। দ্বিতীয় দল তারা, যারা আসে সংকুচিত মন নিয়ে, হাসিরাত সুদূরুহুম। মুমিনদের বিরুদ্ধে লড়তেও তাদের মন সায় দেয় না, নিজের সম্প্রদায়ের বিরুদ্ধে লড়তেও না। ইবনে কাসীর তাদের বর্ণনা দেন, তারা মুসলমানদের পক্ষেও নয়, বিপক্ষেও নয়। আর যতক্ষণ তারা এই অবস্থানে থাকে, ততক্ষণ তাদের হত্যা করার কোনো অধিকার মুমিনদের নেই।"
          },
          {
            "en": "As-Sa'di draws the lines most sharply. Fighting the first two groups, he says, is forbidden in every circumstance, and for the believers their standing aside is the best outcome, to be accepted with praise to Allah. Only the third group, the people of 4:91 who seek safety from both sides and keep falling back into fitnah, may be fought, and even then only if they do not withdraw, do not offer peace and do not restrain their hands. Al-Muyassar puts the end of 4:90 simply: if they leave you, do not fight you and yield to you, you have no way to fight them.",
            "bn": "আস-সা'দী সীমারেখাগুলো সবচেয়ে স্পষ্ট করে টানেন। তিনি বলেন, প্রথম দুই দলের সঙ্গে লড়াই কোনো অবস্থাতেই জায়েয নয়। তাদের সরে থাকাই মুমিনদের জন্য সবচেয়ে ভালো ফল, তাই এতে সন্তুষ্ট থেকে আল্লাহর প্রশংসা করা উচিত। লড়াইয়ের অনুমতি শুধু তৃতীয় দলের বিরুদ্ধে, অর্থাৎ ৪:৯১ আয়াতের সেই লোকেরা, যারা দুই পক্ষের কাছেই নিরাপত্তা চায় আর বারবার ফিতনায় ফিরে যায়। তাও কেবল তখন, যখন তারা সরে দাঁড়ায় না, শান্তির প্রস্তাব দেয় না, আর নিজেদের হাত গুটিয়ে নেয় না। আল-মুয়াসসার ৪:৯০ আয়াতের শেষ অংশ সহজ করে বলে: তারা যদি তোমাদের ছেড়ে যায়, তোমাদের সঙ্গে না লড়ে, আর তোমাদের কাছে আত্মসমর্পণ করে, তবে তাদের সঙ্গে লড়াইয়ের কোনো পথ তোমাদের নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Madinah Sifts Its Own",
          "bn": "মদিনা নিজেই ছেঁকে নেয়"
        },
        "p": [
          {
            "en": "Imam Ahmad records from Zayd ibn Thabit (RA) that the Messenger of Allah ﷺ marched out towards Uhud, and some who had set out with him went back to Madinah. The Companions divided over them: one group said they should be killed, the other objected. Then Allah sent down fa-ma lakum fil-munafiqina fi'atayn. In the wording Ibn Kathir gives, the Prophet ﷺ said of Madinah that she is Taybah and expels impurity as the bellows expel the dross of iron. Ibn Kathir adds that the two Sahihs also record the report.",
            "bn": "ইমাম আহমাদ যায়েদ ইবনে সাবিত (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ উহুদের দিকে রওনা হলেন, আর তাঁর সঙ্গে যারা বের হয়েছিল তাদের কিছু লোক মদিনায় ফিরে গেল। তাদের নিয়ে সাহাবীরা দুই ভাগ হয়ে গেলেন। একদল বললেন, ওদের হত্যা করা উচিত, অন্যদল আপত্তি করলেন। তখন আল্লাহ নাজিল করলেন, ফা-মা লাকুম ফিল-মুনাফিকীনা ফিআতাইন। ইবনে কাসীর যে ভাষ্য উল্লেখ করেছেন, তাতে নবী ﷺ মদিনা সম্পর্কে বলেন, এ হলো তাইবা, হাপর যেমন লোহার ময়লা দূর করে, মদিনাও তেমনি মলিনতা দূর করে দেয়। ইবনে কাসীর আরও জানান, সহীহ বুখারী ও সহীহ মুসলিমেও বর্ণনাটি আছে।"
          },
          {
            "en": "The Prophet's ﷺ words in that report give no order to pursue the men who left. They speak of the city itself separating the true from the false. His practice with the hypocrites living inside Madinah kept that restraint. Al-Bukhari records from Jabir (RA) that when Abdullah ibn Ubayy said the more honoured would expel the more humble on returning to Madinah, words 63:8 preserves, Umar (RA) asked leave to kill him. The Prophet ﷺ refused, so that people would not say Muhammad kills his companions.",
            "bn": "সেই বর্ণনায় নবী ﷺ-এর কথায় যারা চলে গেল তাদের পিছু ধাওয়া করার কোনো নির্দেশ নেই। তাঁর কথা শহরটিকে নিয়ে, যা নিজেই খাঁটি আর মেকিকে আলাদা করে ফেলে। মদিনার ভেতরে বাস করা মুনাফিকদের সঙ্গেও তাঁর আচরণে এই সংযম ছিল। সহীহ বুখারীতে জাবির (রাঃ) থেকে আছে, আবদুল্লাহ ইবনে উবাই বলেছিল, মদিনায় ফিরলে সম্মানিতরা হীনদের বের করে দেবে। তার এই কথা ৬৩:৮ আয়াতে সংরক্ষিত আছে। উমর (রাঃ) তাকে হত্যার অনুমতি চাইলেন। নবী ﷺ রাজি হলেন না, যেন লোকে না বলে যে মুহাম্মদ নিজের সঙ্গীদেরই হত্যা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Stand Beside It",
          "bn": "পাশে দাঁড়ানো আয়াতগুলো"
        },
        "p": [
          {
            "en": "4:94, three verses on, completes the passage's care for blood. It tells the believers, when they go out in Allah's cause, to investigate, and not to say to one who offers them peace, you are not a believer, out of desire for the goods of this life. 4:97 shows why emigration weighed so much here: the angels ask those who died wronging themselves whether Allah's earth was not spacious enough to emigrate. Yet 4:98 excepts the oppressed who could neither devise a plan nor find a way.",
            "bn": "তিন আয়াত পরে ৪:৯৪ আয়াত রক্তের প্রতি এই অংশের সতর্কতাকে পূর্ণ করে। সেখানে মুমিনদের বলা হয়েছে, আল্লাহর পথে বের হলে যাচাই করে নাও, আর কেউ তোমাদের শান্তির সালাম দিলে দুনিয়ার সম্পদের লোভে তাকে বলো না, তুমি মুমিন নও। হিজরত এখানে কেন এত গুরুত্বপূর্ণ, তা বোঝা যায় ৪:৯৭ আয়াতে। নিজেদের ওপর যুলুম করা অবস্থায় যাদের মৃত্যু হয়, ফেরেশতারা তাদের জিজ্ঞেস করেন, আল্লাহর যমীন কি হিজরতের জন্য প্রশস্ত ছিল না? তবু ৪:৯৮ আয়াত সেই অসহায়দের বাদ রাখে, যারা কোনো উপায় বের করতে পারে না, পথও পায় না।"
          },
          {
            "en": "60:8 draws the wider line the passage assumes: Allah does not forbid being righteous and just toward those who do not fight you because of religion and do not expel you from your homes. 8:61 tells the Prophet ﷺ that if they incline to peace, he should incline to it too and rely upon Allah. 2:190 commands fighting those who fight you and forbids transgression, for Allah does not like transgressors. Ibn Kathir notes a report that Ibn Abbas (RA) said the treaty exception was abrogated by 9:5, yet the restraint closing 4:90 is no lone footnote: these verses carry it across the Quran.",
            "bn": "৬০:৮ আয়াত সেই বড় সীমারেখা টানে, যা এই অংশের পেছনে আছে: দীনের কারণে যারা তোমাদের সঙ্গে লড়েনি এবং তোমাদের ঘরবাড়ি থেকে বের করে দেয়নি, তাদের প্রতি সদয় ও ন্যায়নিষ্ঠ হতে আল্লাহ নিষেধ করেন না। ৮:৬১ আয়াত নবী ﷺ-কে বলে, তারা সন্ধির দিকে ঝুঁকলে তিনিও যেন ঝুঁকে পড়েন এবং আল্লাহর ওপর ভরসা করেন। ২:১৯০ আয়াত নির্দেশ দেয়, যারা তোমাদের বিরুদ্ধে লড়ে তাদের বিরুদ্ধে লড়ো, কিন্তু সীমা ছাড়িয়ো না, কারণ আল্লাহ সীমালঙ্ঘনকারীদের ভালোবাসেন না। ইবনে কাসীর অবশ্য একটি বর্ণনা উল্লেখ করেন যে, ইবনে আব্বাস (রাঃ) বলেছেন, চুক্তির ব্যতিক্রমটি ৯:৫ আয়াত দিয়ে রহিত হয়ে যায়। তবু ৪:৯০ আয়াতের শেষ বাক্যের সংযম কোনো বিচ্ছিন্ন টীকা নয়, এই আয়াতগুলো কুরআন জুড়ে সেই সংযমই বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying a Hard Verse Today",
          "bn": "আজ কঠিন আয়াতটি বহন করা"
        },
        "p": [
          {
            "en": "The first duty here is to read the passage whole. The command in 4:89 is not the end of the thought: 4:90 begins with illa, except, and the exception attaches to that very command. Anyone who lifts the words kill them wherever you find them out of 4:89 and aims them at a neighbour, a community or a people at peace has cut the verse from its own exceptions and from the commentators who said whom it concerned. When you share a verse about fighting, share the verses beside it too.",
            "bn": "প্রথম দায়িত্ব হলো অংশটি পুরোটা একসঙ্গে পড়া। ৪:৮৯ আয়াতের হুকুমেই কথা শেষ নয়। ৪:৯০ আয়াত শুরু হয় ইল্লা দিয়ে, আর ব্যতিক্রমটি জুড়ে আছে ঠিক ওই হুকুমের সঙ্গেই। কেউ যদি ৪:৮৯ আয়াত থেকে, যেখানে পাও হত্যা করো, কথাটুকু তুলে এনে কোনো প্রতিবেশী, কোনো জনগোষ্ঠী বা শান্তিতে থাকা কোনো জাতির দিকে তাক করে, তবে সে আয়াতটিকে তার নিজের ব্যতিক্রম থেকে কেটে ফেলেছে। মুফাসসিরগণ যাদের কথা বলেছেন, তাদের থেকেও বিচ্ছিন্ন করেছে। যুদ্ধের কোনো আয়াত শেয়ার করলে তার পাশের আয়াতগুলোও সঙ্গে দিন।"
          },
          {
            "en": "The same honesty is owed when someone quotes these verses to accuse Islam. The answer is the passage itself: particular people who professed faith and then deserted or sided against the believers in wartime, a ruling fenced by two exemptions and a condition, and a closing word that Allah made no way against anyone who offers peace. A family or study circle can practise this. Read 4:88 to 4:94 aloud together, then let each person say in one sentence whom the command concerned and whom it did not.",
            "bn": "কেউ যখন এই আয়াতগুলো উদ্ধৃত করে ইসলামকে দোষারোপ করে, তখনও একই সততা দরকার। জবাব এই অংশটিই: নির্দিষ্ট কিছু মানুষ, যারা ঈমানের দাবি করে যুদ্ধের সময় মুমিনদের ছেড়ে গিয়েছিল বা বিপক্ষে দাঁড়িয়েছিল। হুকুমটির চারপাশে আছে দুটি ব্যতিক্রম ও একটি শর্ত। আর শেষ কথা, যে শান্তির প্রস্তাব দেয়, তার বিরুদ্ধে আল্লাহ কোনো পথ রাখেননি। পরিবার বা পাঠচক্রে এর অনুশীলন করা যায়। ৪:৮৮ থেকে ৪:৯৪ পর্যন্ত একসঙ্গে জোরে পড়ুন, তারপর প্রত্যেকে এক বাক্যে বলুক, হুকুমটি কাদের নিয়ে ছিল আর কাদের নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Vocabulary",
          "bn": "আয়াতের শব্দে দু'আ"
        },
        "p": [
          {
            "en": "The passage holds no supplication, so what follows is not a Sunnah du'a but a short prayer composed from the passage's own words, to be read as such. O Allah, do not cast us back for what we have earned. Do not make us among those who are returned to fitnah and fall into it. Guide us to Your way and keep us firm upon it. And make us people who accept peace when it is offered and who do not transgress.",
            "bn": "এই অংশে কোনো দু'আ নেই। তাই নিচের কথাগুলো সুন্নাহর দু'আ নয়, আয়াতের নিজের শব্দ দিয়ে গড়া ছোট প্রার্থনা, একে সেভাবেই পড়ুন। হে আল্লাহ, আমাদের কামাইয়ের কারণে আমাদের উল্টো দিকে ফিরিয়ে দেবেন না। যাদের ফিতনার দিকে ফেরানো হলে তাতেই ডুবে যায়, আমাদের তাদের দলে রাখবেন না। আমাদের আপনার পথ দেখান, আর সেই পথে অবিচল রাখুন। আর আমাদের এমন মানুষ বানান, যারা শান্তির প্রস্তাব পেলে তা গ্রহণ করে এবং সীমা ছাড়ায় না।"
          },
          {
            "en": "Each line answers the text. The first answers arkasahum in 4:88, the fear of being turned back by one's own deeds; the second, urkisu fiha in 4:91, the fall that repeats itself. The prayer for guidance answers the warning of 4:88 about the one for whom no way is found. The last answers the close of 4:90 and the ban on transgression in 2:190. Say it after reading the passage, so that its hardest words end in a request for your own heart.",
            "bn": "প্রতিটি লাইন আয়াতের কোনো কথার জবাব। প্রথমটি ৪:৮৮ আয়াতের আরকাসাহুম শব্দের জবাব, নিজের আমলের কারণে উল্টো দিকে ফিরে যাওয়ার ভয়। দ্বিতীয়টি ৪:৯১ আয়াতের উরকিসূ ফীহা, বারবার ফিরে ফিরে পড়ে যাওয়ার জবাব। হিদায়াতের প্রার্থনাটি ৪:৮৮ আয়াতের সেই সতর্কবাণীর জবাব, যার জন্য কোনো পথ পাওয়া যায় না। শেষটি জবাব দেয় ৪:৯০ আয়াতের শেষ কথা আর ২:১৯০ আয়াতের সীমালঙ্ঘনের নিষেধকে। অংশটি পড়ার পর দু'আটি করুন, যেন এর কঠিনতম কথাগুলো শেষ হয় নিজের অন্তরের জন্য চাওয়ায়।"
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
            "bn": "কঠিন কোনো আয়াতের সামনে এলে আমি কি আগে তার প্রেক্ষাপট ও মুফাসসিরদের কাছে যাই, নাকি নিজের অনুভূতির কাছে? তর্কে কুরআন উদ্ধৃত করার সময় আমি কি কখনো সেই আয়াতটি বাদ দিয়েছি, যা আমার কথাকে নরম করে দিত? আমার চারপাশের মুমিনরা কে খাঁটি তা নিয়ে দুই দলে ভাগ হলে, কারও আচরণের কতটুকু আমি সত্যিই দেখেছি, আর তাদের অন্তর নিয়ে কতটুকু শুধু অনুমান করছি?"
          },
          {
            "en": "Is there a company where I keep my faith quiet so that I can stay safe with everyone, as the people of 4:91 wanted? When someone who wronged me offers peace, what stops me from taking it as readily as 4:90 does? And what have I earned this month that I would not want to be turned back by?",
            "bn": "এমন কোনো মহল কি আছে, যেখানে সবার কাছে নিরাপদ থাকার জন্য আমি নিজের ঈমানকে চুপ করিয়ে রাখি, যেমনটা ৪:৯১ আয়াতের লোকেরা চাইত? যে আমার ওপর অন্যায় করেছে, সে শান্তির প্রস্তাব দিলে ৪:৯০ আয়াতের মতো সহজে তা গ্রহণ করতে আমাকে কী আটকায়? আর এই মাসে আমি এমন কী কামাই করেছি, যার দায়ে আমাকে উল্টো দিকে ফিরিয়ে দেওয়া হোক, তা আমি কখনো চাইব না?"
          }
        ]
      }
    ]
  },
  "4:92-93": {
    "sections": [
      {
        "h": {
          "en": "Blood in the Middle of War",
          "bn": "যুদ্ধের মাঝখানে রক্তের কথা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and the verses just before this pair are about fighting. 4:88 to 4:91 deal with a group of hypocrites, the ruling that fell on them, and the exceptions that lift it, closing on the one who withdraws and offers peace. 4:92 comes straight after and turns to a believer's blood. 4:93 follows with the one who kills deliberately, and 4:94 tells the believers going out in Allah's cause to investigate. The placement is itself the argument.",
            "bn": "সূরা আন-নিসা মাদানী সূরা, আর এই দুই আয়াতের ঠিক আগের আয়াতগুলো যুদ্ধ নিয়ে। ৪:৮৮ থেকে ৪:৯১ আয়াতে আছে এক মুনাফিক দলের কথা, তাদের ওপর আসা হুকুম আর সেই হুকুম থেকে যাদের বাদ রাখা হয়েছে তাদের কথা। শেষ হয় তাকে দিয়ে, যে সরে দাঁড়ায় ও শান্তির প্রস্তাব দেয়। এরপরই ৪:৯২ আয়াত এসে মুমিনের রক্তের দিকে ফেরে। ৪:৯৩ আয়াতে আসে ইচ্ছাকৃত হত্যাকারীর কথা, আর ৪:৯৪ আয়াত আল্লাহর পথে বের হওয়া মুমিনদের বলে যাচাই করে নিতে। আয়াত দুটি কোথায় বসানো, সেটাই একটা যুক্তি।"
          },
          {
            "en": "Ibn Kathir opens his comment by stating that the believer is not allowed to kill his believing brother under any circumstances. He cites the report of Ibn Mas'ud (RA) in the Two Sahihs that the blood of a Muslim who testifies that there is no deity worthy of worship except Allah and that Muhammad is His Messenger is sacred, except in three cases: a life for a life, the married adulterer, and the one who leaves his religion and departs from the community. He adds that carrying such a matter out belongs to the Muslim leader or his deputy, not to ordinary people.",
            "bn": "ইবনে কাসীর তাঁর ব্যাখ্যা শুরু করেন এই কথা দিয়ে যে কোনো অবস্থাতেই মুমিনের জন্য তার মুমিন ভাইকে হত্যা করা বৈধ নয়। তিনি সহীহ বুখারী ও সহীহ মুসলিমে ইবনে মাসউদ (রাঃ) থেকে বর্ণিত হাদিস আনেন: যে সাক্ষ্য দেয় আল্লাহ ছাড়া সত্য কোনো ইলাহ নেই এবং মুহাম্মদ ﷺ আল্লাহর রাসূল, সেই মুসলিমের রক্ত হারাম, তিনটি অবস্থা ছাড়া। প্রাণের বদলে প্রাণ, বিবাহিত ব্যভিচারী, আর যে দীন ছেড়ে জামাত থেকে বেরিয়ে যায়। ইবনে কাসীর যোগ করেন, এসব কার্যকর করার দায়িত্ব মুসলিম শাসক বা তাঁর প্রতিনিধির, সাধারণ মানুষের নয়।"
          },
          {
            "en": "On the words except by mistake, Ibn Kathir says there is a difference of opinion about why this part came down. Mujahid and others, he reports, said it concerned Ayyash ibn Abi Rabi'ah (RA), who killed a man in return for having been tortured by him, not knowing that the man had since accepted Islam and emigrated. Abdur-Rahman ibn Zayd ibn Aslam named Abu ad-Darda (RA) instead, but Ibn Kathir remarks that although the basis of that story is in the Sahih, it is not about Abu ad-Darda. The occasion is reported and unsettled.",
            "bn": "ভুলবশত ছাড়া, এই কথাটির ব্যাপারে ইবনে কাসীর জানান, কেন এ অংশ নাজিল হলো তা নিয়ে মতভেদ আছে। তিনি বলেন, মুজাহিদ ও অন্যরা এটিকে যুক্ত করেছেন আইয়াশ ইবনে আবী রাবীআ (রাঃ)-এর সঙ্গে। তিনি এমন একজনকে হত্যা করেছিলেন যে তাঁকে নির্যাতন করেছিল, অথচ তিনি জানতেন না যে লোকটি এর মধ্যে ইসলাম গ্রহণ করে হিজরত করে ফেলেছে। আবদুর রহমান ইবনে যায়েদ ইবনে আসলাম এর বদলে আবুদ দারদা (রাঃ)-এর নাম বলেছেন। তবে ইবনে কাসীর জানান, ঘটনার মূল সহীহ গ্রন্থে থাকলেও তা আবুদ দারদা (রাঃ)-কে নিয়ে নয়। অর্থাৎ শানে নুযূল বর্ণিত হয়েছে, কিন্তু নিষ্পত্তি হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Mistake Against Intention",
          "bn": "ভুলের বিপরীতে ইচ্ছা"
        },
        "p": [
          {
            "en": "The pivot word of the first verse is khata', mistake, and it stands in the verse twice: it is not for a believer to kill a believer illa khata', and whoever kills a believer khata'an. Facing it across the line is the word of 4:93, muta'ammidan, doing it on purpose. The two verses are built as a pair with one ruling each. The first is a law with steps a person can actually carry out; the second is a warning about where a person ends up. The Quran keeps them apart, and so should a reader.",
            "bn": "প্রথম আয়াতের মূল শব্দ খাতা, অর্থাৎ ভুল, আর তা আয়াতে দুবার এসেছে: মুমিনকে হত্যা করা মুমিনের কাজ নয় ইল্লা খাতাআ, আর যে কোনো মুমিনকে খাতাআন হত্যা করে। এর উল্টো দিকে দাঁড়িয়ে আছে ৪:৯৩ আয়াতের শব্দ মুতাআম্মিদান, অর্থাৎ ইচ্ছা করে করা। দুই আয়াত জোড়া বেঁধে গড়া, প্রত্যেকটিতে একটি করে হুকুম। প্রথমটি এমন বিধান যার ধাপগুলো মানুষ হাতে-কলমে পালন করতে পারে। দ্বিতীয়টি হুঁশিয়ারি, মানুষ শেষ পর্যন্ত কোথায় গিয়ে দাঁড়ায় তা নিয়ে। কুরআন দুটিকে আলাদা রাখে, পাঠকেরও তাই রাখা উচিত।"
          },
          {
            "en": "What the mistake costs is named in three parts: tahrir raqabah mu'minah, the freeing of a believing slave; diyah musallamah ila ahlihi, a compensation payment handed over to the dead man's family; and, for whoever does not find the means, siyam shahrayn mutatabi'ayn, a fast of two consecutive months. The clause that closes the ruling is tawbatan min Allah. Ibn Kathir explains that phrase as the way in which the one who killed by mistake repents, fasting two consecutive months when he finds no slave to free.",
            "bn": "ভুলের দাম কী, তা তিন ভাগে বলা হয়েছে: তাহরীরু রাকাবাতিন মু'মিনাহ, অর্থাৎ একজন মুমিন দাসকে মুক্ত করা; দিয়াতুন মুসাল্লামাতুন ইলা আহলিহি, অর্থাৎ নিহতের পরিবারের হাতে রক্তপণ তুলে দেওয়া; আর যার সামর্থ্য নেই তার জন্য সিয়ামু শাহরাইনি মুতাতাবিআইন, একটানা দুই মাসের রোজা। হুকুমটি শেষ হয় তাওবাতাম মিনাল্লাহ কথাটি দিয়ে। ইবনে কাসীর এর ব্যাখ্যায় বলেন, যে ভুলক্রমে হত্যা করেছে তার তওবার পথই এটি, দাস না পেলে সে একটানা দুই মাস রোজা রাখবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Debts, Not One",
          "bn": "এক নয়, দুই দেনা"
        },
        "p": [
          {
            "en": "Ibn Kathir divides the ruling into two requirements. The first is the kaffarah for the grave thing that happened even though it was a mistake, and he specifies that the slave freed must be a Muslim and not a non-Muslim. The second involves the killer and the family of the deceased, who receive the blood money as compensation for their loss. The order is worth sitting with. Something is owed upward, to Allah, and something is owed across, to the people left holding the loss.",
            "bn": "ইবনে কাসীর হুকুমটিকে দুই দায়ে ভাগ করেন। প্রথমটি কাফফারা, ভুল হলেও যে গুরুতর ঘটনা ঘটে গেছে তার জন্য। তিনি স্পষ্ট করেন, যে দাসকে মুক্ত করা হবে সে মুসলিম হতে হবে, অমুসলিম নয়। দ্বিতীয় দায়টি হত্যাকারী ও নিহতের পরিবারকে জড়ায়, পরিবার তাদের ক্ষতির বদলে রক্তপণ পায়। এই ক্রমটি নিয়ে একটু থামা দরকার। একটি দেনা ওপরের দিকে, আল্লাহর কাছে। আরেকটি দেনা পাশের দিকে, যারা ক্ষতিটা বয়ে বেড়াচ্ছে তাদের কাছে।"
          },
          {
            "en": "On unless they remit it, Ibn Kathir says the diyah must be delivered to the family unless they forfeit their right, in which case it is no longer due. On the deceased who belonged to a people at war with you, he explains that a believer may have a family who are combatant disbelievers; they receive no diyah, and the killer owes the freeing alone. On the people bound to you by a treaty, he says the family do deserve the payment, a full diyah where the deceased was a believer, together with the freeing of a believing slave.",
            "bn": "যদি না তারা মাফ করে দেয়, এই কথার ব্যাখ্যায় ইবনে কাসীর বলেন, রক্তপণ পরিবারের হাতে পৌঁছে দিতে হবে, তবে তারা নিজেদের হক ছেড়ে দিলে আর তা ওয়াজিব থাকে না। নিহত ব্যক্তি তোমাদের শত্রু কোনো সম্প্রদায়ের লোক হলে, এই অংশে তিনি বলেন, একজন মুমিনের পরিবার যুদ্ধরত কাফির হতে পারে। তখন তারা কোনো রক্তপণ পাবে না, হত্যাকারীর ওপর শুধু দাসমুক্তি থাকে। আর চুক্তিবদ্ধ সম্প্রদায়ের বেলায় তিনি বলেন, পরিবার রক্তপণ পাওয়ার হকদার। নিহত মুমিন হলে পূর্ণ রক্তপণ, সঙ্গে একজন মুমিন দাসকে মুক্ত করা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Freed Woman, a Broken Expedition",
          "bn": "মুক্ত হওয়া এক দাসী, ভেস্তে যাওয়া এক অভিযান"
        },
        "p": [
          {
            "en": "Ibn Kathir reports from Imam Ahmad that a man of the Ansar brought a slave woman and said that he owed the freeing of a believing slave, so if the Messenger of Allah ﷺ judged her to be a believer he would free her. The Prophet ﷺ asked her whether she testified that there is no deity worthy of worship except Allah, and she said yes. He asked whether she testified that he was the Messenger of Allah, and she said yes. He asked whether she believed in the resurrection after death, and she said yes. He told the man to free her.",
            "bn": "ইমাম আহমাদের সূত্রে ইবনে কাসীর বর্ণনা করেন, আনসারদের একজন এক দাসীকে নিয়ে এসে বললেন, তাঁর ওপর একজন মুমিন দাস মুক্ত করার দায় আছে; রাসূলুল্লাহ ﷺ যদি একে মুমিন মনে করেন তবে তিনি তাকে মুক্ত করে দেবেন। নবী ﷺ তাকে জিজ্ঞেস করলেন, সে কি সাক্ষ্য দেয় যে আল্লাহ ছাড়া সত্য কোনো ইলাহ নেই? সে বলল, হ্যাঁ। তিনি জিজ্ঞেস করলেন, সে কি সাক্ষ্য দেয় যে তিনি আল্লাহর রাসূল? সে বলল, হ্যাঁ। তিনি জিজ্ঞেস করলেন, সে কি মৃত্যুর পর পুনরুত্থানে বিশ্বাস করে? সে বলল, হ্যাঁ। তখন তিনি তাকে মুক্ত করে দিতে বললেন।"
          },
          {
            "en": "The same comment carries a heavier scene. Al-Bukhari records from Abdullah ibn Umar (RA) that the Messenger of Allah ﷺ sent Khalid ibn al-Walid (RA) to Banu Jadhimah. He called them to Islam, and not knowing how to say that they had become Muslims they said instead that they had turned Sabian. Killing followed. When the news reached the Prophet ﷺ he raised his hands and declared before Allah his innocence of what had been done, and he sent Ali (RA) to pay the blood money for the dead and to make good what had been destroyed.",
            "bn": "একই ব্যাখ্যায় আরও ভারী একটি ঘটনা আছে। সহীহ বুখারীতে আবদুল্লাহ ইবনে উমর (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ খালিদ ইবনুল ওয়ালিদ (রাঃ)-কে বনু জাযীমার কাছে পাঠালেন। তিনি তাদের ইসলামের দাওয়াত দিলেন। তারা মুসলিম হয়েছি কথাটা বলতে জানত না, তাই বলল, আমরা সাবী হয়ে গেছি। এরপর হত্যাকাণ্ড ঘটে যায়। খবর নবী ﷺ-এর কাছে পৌঁছালে তিনি দুই হাত তুলে আল্লাহর সামনে ঘোষণা করলেন, যা ঘটেছে তা থেকে তিনি মুক্ত। তারপর তিনি আলী (রাঃ)-কে পাঠালেন নিহতদের রক্তপণ দিতে এবং যা নষ্ট হয়েছে তার ক্ষতিপূরণ দিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "When It Was Meant",
          "bn": "যখন ইচ্ছা করেই করা হয়"
        },
        "p": [
          {
            "en": "4:93 changes register completely. There is no payment here, no fast, no arithmetic: the recompense of one who kills a believer intentionally is Hell, abiding in it, with Allah's anger upon him, His curse, and a great punishment prepared. Ibn Kathir calls it a stern warning and notes that this sin is set beside shirk in several places in the Book, pointing to 25:68, where the servants of the Most Merciful neither call upon another god nor kill the soul Allah forbade except by right, and to 6:151.",
            "bn": "৪:৯৩ আয়াতে সুরটাই বদলে যায়। এখানে কোনো রক্তপণ নেই, রোজা নেই, হিসাব নেই। যে ইচ্ছাকৃতভাবে কোনো মুমিনকে হত্যা করে তার প্রতিদান জাহান্নাম, সেখানে সে স্থায়ী হবে; তার ওপর আল্লাহর ক্রোধ, তাঁর লানত, আর তার জন্য প্রস্তুত মহাশাস্তি। ইবনে কাসীর একে কঠোর হুঁশিয়ারি বলেন এবং জানান, কুরআনের কয়েক জায়গায় এই গুনাহকে শিরকের পাশে রাখা হয়েছে। তিনি ইঙ্গিত করেন ২৫:৬৮ আয়াতের দিকে, যেখানে রহমানের বান্দারা অন্য কোনো ইলাহকে ডাকে না আর যথার্থ কারণ ছাড়া আল্লাহর হারাম করা প্রাণ হত্যা করে না, আর ৬:১৫১ আয়াতের দিকে।"
          },
          {
            "en": "He then brings two narrations. Ibn Mas'ud (RA), in the Two Sahihs, reports that blood offences are the first disputes judged between people on the Day of Resurrection. Ubadah ibn as-Samit (RA), in the collection of Abu Dawud, reports that the believer remains unburdened in righteousness so long as he has not shed forbidden blood, and that when he sheds it he becomes weighed down. The chain of the passage is then visible: the blood these verses protect is the first item on the docket of the next world.",
            "bn": "এরপর তিনি দুটি বর্ণনা আনেন। সহীহ বুখারী ও সহীহ মুসলিমে ইবনে মাসউদ (রাঃ) থেকে বর্ণিত, কিয়ামতের দিন মানুষের মধ্যে সবার আগে রক্তের বিষয়েই ফয়সালা হবে। আবু দাউদের সংকলনে উবাদা ইবনুস সামিত (রাঃ) থেকে বর্ণিত, মুমিন যতক্ষণ হারাম রক্ত না ঝরায় ততক্ষণ সে হালকা পায়ে নেকির পথে চলতে থাকে; আর যখন সে হারাম রক্ত ঝরায়, তখন সে ভারী হয়ে পড়ে। তখন অংশটির সুতোটা চোখে পড়ে: এই আয়াতগুলো যে রক্তের পাহারা দিচ্ছে, পরকালের আদালতে সেটিই প্রথম মামলা।"
          },
          {
            "en": "On whether such a killer's repentance is accepted, Ibn Kathir records a real difference. Through al-Bukhari he reports that Sa'id ibn Jubayr travelled to Ibn Abbas (RA) because the people of knowledge in Kufah had disagreed, and that Ibn Abbas held 4:93 to be the last revelation on the subject with nothing abrogating it. Against that, Ibn Kathir says the majority of scholars, earlier and later, held that the repentance can be accepted, citing 25:70 on Allah replacing evil deeds with good and 39:53 forbidding despair of His mercy.",
            "bn": "এমন হত্যাকারীর তওবা কবুল হয় কিনা, এ নিয়ে ইবনে কাসীর একটি সত্যিকারের মতভেদ তুলে ধরেন। সহীহ বুখারীর সূত্রে তিনি জানান, কূফার আলেমদের মধ্যে মতভেদ হওয়ায় সাঈদ ইবনে জুবাইর ইবনে আব্বাস (রাঃ)-এর কাছে যান। ইবনে আব্বাস (রাঃ)-এর মত ছিল, এ বিষয়ে ৪:৯৩ আয়াতই সবশেষে নাজিল হয়েছে এবং কোনো কিছু একে রহিত করেনি। এর বিপরীতে ইবনে কাসীর বলেন, আগের ও পরের যুগের অধিকাংশ আলেমের মত হলো তওবা কবুল হতে পারে। তাঁরা দলিল আনেন ২৫:৭০ আয়াত, যেখানে আল্লাহ মন্দকে ভালোয় বদলে দেন, আর ৩৯:৫৩ আয়াত, যা তাঁর রহমত থেকে নিরাশ হতে নিষেধ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses It Leans On",
          "bn": "যেসব আয়াতের ওপর এটি দাঁড়ায়"
        },
        "p": [
          {
            "en": "5:32 records the decree given to the Children of Israel: whoever kills a soul, other than for a soul or for corruption in the land, it is as though he had killed all people, and whoever saves one, it is as though he had saved all. 17:33 forbids killing the soul Allah made sacred except by right and gives the heir of one killed unjustly an authority he is told not to exceed. 6:151 places the same prohibition in the list of what a person's Lord has forbidden.",
            "bn": "৫:৩২ আয়াতে বনী ইসরাঈলকে দেওয়া বিধানটি আছে: কেউ যদি প্রাণের বদলা বা যমীনে ফাসাদ ছাড়া অন্য কারণে কোনো প্রাণ হত্যা করে, সে যেন সব মানুষকেই হত্যা করল; আর কেউ একটি প্রাণ বাঁচালে সে যেন সবাইকে বাঁচাল। ১৭:৩৩ আয়াত যথার্থ কারণ ছাড়া আল্লাহর হারাম করা প্রাণ হত্যা নিষেধ করে এবং অন্যায়ভাবে নিহত ব্যক্তির উত্তরাধিকারীকে অধিকার দেয়, সঙ্গে বলে দেয় সে যেন সীমা না ছাড়ায়। ৬:১৫১ আয়াত এই নিষেধকে রাখে সেই তালিকায়, যা মানুষের প্রতিপালক তার জন্য হারাম করেছেন।"
          },
          {
            "en": "4:94, the verse immediately after this pair, guards the same blood from the other side: when you go out in Allah's cause, investigate, and do not say to one who offers you a greeting of peace that he is not a believer, desiring the goods of this life. 25:70 is the verse the commentators reach for on repentance, promising that Allah will replace the evil deeds of those who repent, believe and act well with good ones. Read together these verses fence a believer's life on every side.",
            "bn": "এই জোড়ার ঠিক পরের আয়াত ৪:৯৪ অন্য দিক থেকে একই রক্তের পাহারা দেয়: আল্লাহর পথে বের হলে যাচাই করে নাও, আর দুনিয়ার সম্পদের লোভে কেউ তোমাদের শান্তির সালাম দিলে তাকে বলো না, তুমি মুমিন নও। তওবার প্রসঙ্গে মুফাসসিরগণ যে আয়াতটির দিকে হাত বাড়ান তা ২৫:৭০, যেখানে ওয়াদা আছে, যারা তওবা করে, ঈমান আনে ও ভালো কাজ করে, আল্লাহ তাদের মন্দ আমলগুলোকে ভালোয় বদলে দেবেন। একসঙ্গে পড়লে এই আয়াতগুলো একজন মুমিনের জীবনের চারপাশে বেড়া তুলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Careful With Lives",
          "bn": "জীবনের ব্যাপারে সাবধানতা"
        },
        "p": [
          {
            "en": "Most readers will never face the case this verse legislates, but the habit it builds is a daily one. Allah attached a cost to harm that nobody intended, and that is a standing argument against carelessness: how a person drives, how a nurse checks a dose, how tools and vehicles and weapons are stored at home, how a rumour is passed on. None of it is neutral ground. A harm you did not mean is still a harm, and this verse puts a price on it.",
            "bn": "এই আয়াত যে ঘটনার বিধান দিয়েছে, বেশিরভাগ পাঠক কখনো তার মুখোমুখি হবেন না। কিন্তু আয়াতটি যে অভ্যাস গড়ে, তা রোজকার। ইচ্ছে না করেও যে ক্ষতি হয়ে যায়, আল্লাহ তারও দাম ধরেছেন। অসতর্কতার বিরুদ্ধে এটিই স্থায়ী যুক্তি: মানুষ কীভাবে গাড়ি চালায়, নার্স কীভাবে ওষুধের মাত্রা মিলিয়ে নেন, ঘরে যন্ত্রপাতি, গাড়ি আর অস্ত্র কীভাবে রাখা হয়, একটা গুজব কীভাবে হাতবদল হয়। কোনোটাই নিরপেক্ষ জায়গা নয়। যে ক্ষতি আপনি চাননি, সেটিও ক্ষতি, আর এই আয়াত তার দাম বসিয়ে দেয়।"
          },
          {
            "en": "The second habit is the one 4:94 names: find out before you act. The expedition to Banu Jadhimah went wrong because words were misheard and nobody stopped to check. In ordinary life the same failure wears other clothes, such as forwarding an accusation, cutting off a relative over a report you never verified, or deciding that a Muslim you disagree with has left the faith. The verse right after this pair had to warn the Companions against exactly that judgement, and the warning has not aged.",
            "bn": "দ্বিতীয় অভ্যাসটি ৪:৯৪ আয়াতের কথা: কাজ করার আগে যাচাই করে নাও। বনু জাযীমার অভিযান ভেস্তে গিয়েছিল কারণ কথাটা ভুল শোনা হয়েছিল আর কেউ থেমে যাচাই করেনি। সাধারণ জীবনে সেই একই ভুল অন্য পোশাক পরে আসে। কোনো অভিযোগ যাচাই না করে অন্যকে পাঠিয়ে দেওয়া, না মিলিয়ে দেখা কোনো খবরের ওপর ভর করে আত্মীয়ের সঙ্গে সম্পর্ক ছিন্ন করা, কিংবা মতে না মেলা কোনো মুসলিমকে দীনের বাইরে ঠাওরানো। এই জোড়ার ঠিক পরের আয়াতটিকে সাহাবীদের এই বিচার থেকেই সাবধান করতে হয়েছিল, আর সেই সতর্কবাণী আজও পুরনো হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer After a Mistake",
          "bn": "ভুলের পর একটি দু'আ"
        },
        "p": [
          {
            "en": "The Quran itself supplies the supplication this subject needs. The close of 2:286 asks: our Lord, do not take us to task if we forget or fall into error. The word for error there comes from the same root as the khata' of 4:92. A believer who has just read this pair can pray those words exactly as they stand, knowing that the Book which set a price on a mistake also taught the servant how to ask about it.",
            "bn": "এই প্রসঙ্গে যে দু'আটি দরকার, কুরআন নিজেই তা দিয়ে দেয়। ২:২৮৬ আয়াতের শেষে আছে: হে আমাদের প্রতিপালক, আমরা ভুলে গেলে বা ভুল করে ফেললে আমাদের পাকড়াও করবেন না। সেখানে ভুল বোঝাতে যে শব্দ, তার মূল ৪:৯২ আয়াতের খাতা শব্দের মূলের সঙ্গে এক। এই দুই আয়াত পড়ে ওঠা মুমিন সেই কথাগুলো যেমন আছে তেমনই দু'আ হিসেবে পড়তে পারেন। যে কিতাব ভুলের দাম ঠিক করে দিয়েছে, সেই কিতাবই বান্দাকে শিখিয়েছে ভুলের ব্যাপারে কীভাবে চাইতে হয়।"
          },
          {
            "en": "Alongside it, a short prayer built from the passage's own vocabulary, offered as that and not as a Sunnah supplication. O Allah, hold our hands back from the blood You made sacred. Keep us from the harm we intend and from the harm we never meant. Accept from us the repair we owe to people and the turning we owe to You, as You joined the two in this ruling. And do not let any blood stand between us and You on the day of accounting.",
            "bn": "এর পাশে রইল অংশটির নিজের শব্দে গড়া ছোট একটি প্রার্থনা। এটি সুন্নাহর দু'আ নয়, সেটা মনে রেখেই পড়ুন। হে আল্লাহ, আপনি যে রক্ত হারাম করেছেন তা থেকে আমাদের হাত গুটিয়ে রাখুন। যে ক্ষতি আমরা করতে চাই আর যে ক্ষতি আমরা চাইনি, দুটো থেকেই আমাদের বাঁচান। মানুষের কাছে আমাদের যে মেরামতের দায়, আর আপনার কাছে আমাদের যে ফিরে আসার দায়, দুটোই কবুল করুন, যেমন আপনি এই হুকুমে দুটোকে এক করে দিয়েছেন। আর হিসাবের দিনে কোনো রক্ত যেন আমাদের ও আপনার মাঝে দাঁড়িয়ে না থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for a Careful Heart",
          "bn": "সতর্ক অন্তরের প্রশ্ন"
        },
        "p": [
          {
            "en": "Where in my week am I casual in a way that could cost someone else? When I have hurt a person without intending to, do I settle both sides of it, the repair owed to them and the turning owed to Allah, or only whichever is easier for me? If I were the family in this verse, how near is my heart to letting a debt go as charity, the way the verse allows?",
            "bn": "আমার সপ্তাহের কোন জায়গায় আমি এমন ঢিলেঢালা, যার দাম অন্য কাউকে দিতে হতে পারে? ইচ্ছে না করেও কারও ক্ষতি করে ফেললে আমি কি দুই দিকই মেটাই, মানুষটির কাছে ক্ষতিপূরণের দায় আর আল্লাহর কাছে তওবার দায়, নাকি যেটা আমার জন্য সহজ শুধু সেটুকুই? এই আয়াতের পরিবারটির জায়গায় আমি থাকলে, আয়াত যে সুযোগ দিয়েছে সেভাবে পাওনাটা সদকা হিসেবে ছেড়ে দিতে আমার মন কতটা রাজি হতো?"
          },
          {
            "en": "How quick am I to repeat a claim about someone before I have checked it, when the verse after this pair told the Companions to investigate first? Have I ever declared someone outside the faith in my own mind on the strength of a disagreement? And when I read a verse about hellfire, do I let it frighten me into carefulness, or do I only read it as a description of other people?",
            "bn": "কারও সম্পর্কে কোনো কথা যাচাই না করেই আমি কত তাড়াতাড়ি অন্যকে বলে ফেলি, অথচ এই দুই আয়াতের পরের আয়াতটিই সাহাবীদের আগে যাচাই করে নিতে বলেছিল? শুধু মতের অমিলের কারণে আমি কি কখনো মনে মনে কাউকে দীনের বাইরে ঠাওরেছি? আর জাহান্নামের কথা আছে এমন আয়াত পড়লে সেই ভয় কি আমাকে সাবধান করে, নাকি আমি ভাবি, এ তো অন্যদের কথা?"
          }
        ]
      }
    ]
  },
  "4:102-103": {
    "sections": [
      {
        "h": {
          "en": "Prayer With the Enemy in Sight",
          "bn": "শত্রু সামনে রেখে নামাজ"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and this part of it is written for people on the move. 4:100 speaks of the one who leaves his home as an emigrant. 4:101 says there is no blame in shortening the prayer while travelling if you fear that those who disbelieve may attack you. 4:102 takes the next step and describes how to pray when the enemy is not a fear but a fact. 4:103 closes the subject, and 4:104 sends the believers back to the pursuit.",
            "bn": "সূরা আন-নিসা মাদানী সূরা। এর এই অংশটি পথে থাকা মানুষদের জন্য। ৪:১০০ আয়াতে আছে তার কথা, যে হিজরত করে নিজের ঘর ছেড়ে বেরিয়ে পড়ে। ৪:১০১ আয়াত বলে, সফরে কাফিররা হামলা করবে এমন ভয় থাকলে নামাজ কসর করায় দোষ নেই। ৪:১০২ আয়াত আরেক ধাপ এগিয়ে বলে দেয়, শত্রু যখন শুধু ভয়ের ব্যাপার নয়, চোখের সামনের বাস্তবতা, তখন কীভাবে নামাজ পড়তে হবে। ৪:১০৩ আয়াত প্রসঙ্গটি শেষ করে, আর ৪:১০৪ আয়াত মুমিনদের আবার শত্রুর পিছু নিতে পাঠায়।"
          },
          {
            "en": "Ibn Kathir gives the occasion from Imam Ahmad, on the authority of Abu Ayyash az-Zuraqi (RA). The Muslims were with the Messenger of Allah ﷺ at Usfan when the idolaters met them under the command of Khalid ibn al-Walid (RA), and they stood between the Muslims and the qiblah. The Prophet ﷺ led the Zuhr prayer, and the idolaters said among themselves that there would soon come a prayer dearer to the Muslims than their own children, meaning Asr.",
            "bn": "ইবনে কাসীর ইমাম আহমাদের সূত্রে আবু আইয়াশ যুরাকী (রাঃ) থেকে এর শানে নুযূল বর্ণনা করেন। মুসলিমরা রাসূলুল্লাহ ﷺ-এর সঙ্গে উসফানে ছিলেন। তখন খালিদ ইবনুল ওয়ালিদ (রাঃ)-এর নেতৃত্বে মুশরিকরা তাঁদের মুখোমুখি হলো এবং মুসলিমদের আর কিবলার মাঝখানে অবস্থান নিল। নবী ﷺ যোহরের নামাজ পড়ালেন। মুশরিকরা নিজেদের মধ্যে বলাবলি করল, এরপর এমন এক নামাজ আসছে, যা মুসলিমদের কাছে নিজেদের সন্তানের চেয়েও প্রিয়। তারা আসরের নামাজের কথা বলছিল।"
          },
          {
            "en": "In the report, Jibril (AS) came down with these verses between the two prayers. When the time came, the Prophet ﷺ ordered the Muslims to hold their weapons and drew them up in two lines behind him. They bowed together, and then the line nearest him prostrated while the others stood on guard; when the first had risen, the second prostrated. The two lines changed places, and the same was done in the second cycle. Ibn Kathir adds that Abu Dawud and an-Nasa'i also record this narration.",
            "bn": "সেই বর্ণনায় আছে, দুই নামাজের মাঝখানে জিবরীল (আঃ) এই আয়াতগুলো নিয়ে নামলেন। সময় হলে নবী ﷺ মুসলিমদের অস্ত্র হাতে নিতে বললেন এবং তাঁদের নিজের পেছনে দুই কাতারে দাঁড় করালেন। সবাই একসঙ্গে রুকু করলেন। এরপর তাঁর কাছের কাতার সাজদাহ করল, আর অন্য কাতার পাহারায় দাঁড়িয়ে থাকল। প্রথম কাতার উঠে দাঁড়ালে দ্বিতীয় কাতার সাজদাহ করল। এরপর দুই কাতার জায়গা বদল করল, আর দ্বিতীয় রাকাতেও একই নিয়মে হলো। ইবনে কাসীর জানান, আবু দাউদ ও নাসাঈও এই বর্ণনাটি এনেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Groups and a Wariness",
          "bn": "দুই দল আর এক সতর্কতা"
        },
        "p": [
          {
            "en": "The verse builds its instruction on one repeated word, ta'ifah, a group or a party: let a ta'ifah of them stand with you, and let another ta'ifah which has not prayed come forward. The congregation is deliberately halved, so that at every moment part of it is in prayer and part of it is facing the danger. Nothing in the verse asks the second group to miss the prayer; it asks them to wait their turn while their brothers stand.",
            "bn": "আয়াতের নির্দেশ দাঁড়িয়ে আছে একটি শব্দের ওপর, যা বারবার আসে: তায়িফা, অর্থাৎ দল বা অংশ। তাদের এক তায়িফা যেন তোমার সঙ্গে দাঁড়ায়, আর যে তায়িফা নামাজ পড়েনি তারা যেন এগিয়ে আসে। জামাতকে ইচ্ছা করেই দুই ভাগ করা হয়েছে, যাতে সবসময় এক ভাগ নামাজে থাকে আর অন্য ভাগ বিপদের মুখোমুখি। আয়াত দ্বিতীয় দলকে নামাজ বাদ দিতে বলছে না। বলছে, ভাইয়েরা যখন নামাজে দাঁড়িয়ে, তারা যেন নিজেদের পালার অপেক্ষা করে।"
          },
          {
            "en": "Two more words carry the sense of the verse. Aslihah are their weapons, and the command is that they take them, hold them, keep them on the body. Hidhr is wariness, the alertness a person keeps who knows he may be struck, and the verse names it twice, once as an order to the group standing in prayer and once at the end to all of them. The pairing is the point. The believers are not told to choose between being at prayer and being awake to danger; they are told to be both at once.",
            "bn": "আয়াতের মর্ম ধরে রেখেছে আরও দুটি শব্দ। আসলিহা মানে তাদের অস্ত্র; হুকুম হলো, অস্ত্র হাতে নাও, ধরে রাখো, গায়ের সঙ্গে রাখো। হিযর মানে সতর্কতা: আঘাত আসতে পারে জেনে মানুষ যেমন সজাগ থাকে। আয়াতে শব্দটি দুবার এসেছে, একবার নামাজে দাঁড়ানো দলের প্রতি হুকুম হিসেবে, আরেকবার শেষে সবার উদ্দেশে। এই জোড়াটাই আসল কথা। মুমিনদের বলা হয়নি, হয় নামাজে থাকো, নয়তো বিপদের দিকে চোখ রাখো। বলা হয়েছে, একই সঙ্গে দুটোই করো।"
          },
          {
            "en": "The verse then names the enemy's hope in plain words: those who disbelieve would love for you to grow heedless of your weapons and your baggage so that they could swoop on you in a single rush. And it makes room for human limits. If rain is a hardship, or if you are ill, there is no blame in putting the weapons down. But even in the concession the wariness is repeated. The permission is about the weight in the hand, never about the alertness in the chest.",
            "bn": "এরপর আয়াত শত্রুর আশাটা সোজা ভাষায় বলে দেয়: যারা কুফরী করেছে তারা চায়, তোমরা যেন নিজেদের অস্ত্র আর সরঞ্জাম নিয়ে গাফেল হয়ে পড়ো, যাতে তারা একবারেই ঝাঁপিয়ে পড়তে পারে। আর আয়াত মানুষের সীমাবদ্ধতার জন্য জায়গাও রাখে। বৃষ্টিতে কষ্ট হলে কিংবা অসুস্থ হলে অস্ত্র নামিয়ে রাখায় দোষ নেই। তবু এই ছাড়ের ভেতরেও সতর্কতার কথাটি আবার বলা হয়। অনুমতিটা হাতের বোঝা নিয়ে, বুকের ভেতরের সজাগতা নিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not One Form but Several",
          "bn": "একটি নয়, কয়েকটি রূপ"
        },
        "p": [
          {
            "en": "Ibn Kathir opens his comment on this verse by saying outright that the fear prayer has different forms. The enemy is sometimes in the direction of the qiblah and sometimes not. The prayer itself is sometimes four cycles, sometimes three as in Maghrib, sometimes two as in Fajr and in travel. Sometimes it is prayed in congregation, and sometimes, when the fighting is actually raging, congregation is impossible and each person prays alone, facing the qiblah or not, riding or on foot.",
            "bn": "ইবনে কাসীর এই আয়াতের ব্যাখ্যা শুরুই করেন সোজাসুজি এই কথা দিয়ে যে সালাতুল খাওফের কয়েকটি রূপ আছে। শত্রু কখনো কিবলার দিকে থাকে, কখনো থাকে না। নামাজটিও কখনো চার রাকাত, কখনো মাগরিবের মতো তিন, কখনো ফজর ও সফরের মতো দুই। কখনো তা জামাতে পড়া হয়। আর কখনো, যখন লড়াই সত্যিই চলছে, জামাত সম্ভবই হয় না; তখন প্রত্যেকে একা পড়ে, কিবলার দিকে ফিরে বা না ফিরে, সওয়ারির ওপরে বা পায়ে হেঁটে।"
          },
          {
            "en": "Ibn Kathir adds that in that last case some scholars said the prayer becomes a single cycle, and he cites the report of Ibn Abbas (RA) that Allah ordained the prayer by the tongue of the Prophet ﷺ as four cycles while resident, two while travelling, and one during fear, recorded by Muslim, Abu Dawud, an-Nasa'i and Ibn Majah. He says this was also the position of Ahmad ibn Hanbal, and quotes al-Mundhiri listing Ata, Jabir, al-Hasan, Mujahid, al-Hakam, Qatadah and Hammad among those who held it.",
            "bn": "ইবনে কাসীর যোগ করেন, শেষ অবস্থাটিতে কিছু আলেম বলেছেন নামাজ এক রাকাতে দাঁড়ায়। এর সমর্থনে তিনি ইবনে আব্বাস (রাঃ)-এর বর্ণনা আনেন: আল্লাহ নবী ﷺ-এর মুখে নামাজ নির্ধারণ করেছেন মুকীম অবস্থায় চার রাকাত, সফরে দুই রাকাত, আর ভয়ের সময় এক রাকাত। এটি এনেছেন মুসলিম, আবু দাউদ, নাসাঈ ও ইবনে মাজাহ। তিনি জানান, এটি আহমাদ ইবনে হাম্বলেরও মত। সঙ্গে মুনযিরীর বরাত দিয়ে যাঁরা এই মত নিয়েছেন তাঁদের নাম আনেন: আতা, জাবির, হাসান, মুজাহিদ, হাকাম, কাতাদা ও হাম্মাদ।"
          },
          {
            "en": "He reports Ishaq ibn Rahwayh saying that when a battle is raging a single cycle in which you nod your head suffices, and that if even this is beyond you, one prostration suffices, because prostration is remembrance of Allah. All of this Ibn Kathir sets out as reported positions, not as one settled rule, and that is how it is repeated here. Which form applies to a given situation is a question for those qualified to answer it; nothing is decided in this article.",
            "bn": "তিনি ইসহাক ইবনে রাহওয়াইহ-এর কথা আনেন: লড়াই যখন তুঙ্গে, তখন মাথা দিয়ে ইশারা করে এক রাকাত পড়াই যথেষ্ট; তাও না পারলে একটি সাজদাহই যথেষ্ট, কারণ সাজদাহও আল্লাহর জিকির। ইবনে কাসীর এসবই তুলে ধরেছেন বর্ণিত মত হিসেবে, একটিমাত্র চূড়ান্ত বিধান হিসেবে নয়; এখানেও সেভাবেই বলা হলো। কোন অবস্থায় কোন রূপ খাটবে, সে প্রশ্নের জবাব দেবেন যোগ্য আলেমরা। এই লেখা কোনো ফয়সালা দিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "As It Was Prayed Behind Him",
          "bn": "তাঁর পেছনে যেভাবে পড়া হয়েছিল"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Ibn Abbas (RA) that the Prophet ﷺ once led the fear prayer with the people standing behind him. He said the takbir and they said it with him; he bowed and some of them bowed; he prostrated and they prostrated. Then he stood for the second cycle, and those who had prayed the first went off to guard their brothers while the other party joined him and bowed and prostrated with him. All of them were in prayer, and they were guarding one another inside it.",
            "bn": "সহীহ বুখারীতে ইবনে আব্বাস (রাঃ) থেকে বর্ণিত, নবী ﷺ একবার ভয়ের নামাজ পড়ালেন, লোকেরা তাঁর পেছনে দাঁড়াল। তিনি তাকবীর বললেন, তাঁরাও বললেন। তিনি রুকু করলেন, তাঁদের একাংশ রুকু করল। তিনি সাজদাহ করলেন, তাঁরাও করলেন। এরপর তিনি দ্বিতীয় রাকাতের জন্য দাঁড়ালে যাঁরা প্রথম রাকাত পড়েছিলেন তাঁরা সরে গিয়ে ভাইদের পাহারায় দাঁড়ালেন, আর অন্য দলটি এসে তাঁর সঙ্গে রুকু ও সাজদাহ করল। সবাই নামাজেই ছিলেন, আর নামাজের ভেতরেই একে অন্যের পাহারা দিচ্ছিলেন।"
          },
          {
            "en": "Ibn Kathir gives a further form from Jabir ibn Abdullah (RA) through Imam Ahmad, in which the Prophet ﷺ prayed two cycles while each group prayed one, and another from Ibn Umar (RA) through Ibn Abi Hatim, in which each group prayed one cycle behind him and then completed a second cycle on its own. He notes that many Companions transmitted the fear prayer and that Ibn Marduwyah and Ibn Jarir at-Tabari gathered these narrations together.",
            "bn": "ইবনে কাসীর আরও রূপ আনেন। ইমাম আহমাদের সূত্রে জাবির ইবনে আবদুল্লাহ (রাঃ) থেকে: নবী ﷺ দুই রাকাত পড়লেন, আর প্রতিটি দল পড়ল এক রাকাত করে। ইবনে আবি হাতিমের সূত্রে ইবনে উমর (রাঃ) থেকে: প্রতিটি দল তাঁর পেছনে এক রাকাত পড়ে নিজেরাই দ্বিতীয় রাকাত পূর্ণ করে নিল। তিনি জানান, ভয়ের নামাজ বহু সাহাবী বর্ণনা করেছেন, আর ইবনে মারদুওয়াইহ ও ইবনে জারীর আত-তাবারী এই বর্ণনাগুলো একসঙ্গে জড়ো করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Prayer Is Over",
          "bn": "নামাজ শেষ হওয়ার পর"
        },
        "p": [
          {
            "en": "4:103 does not let the worshipper walk away. When you have finished the prayer, it says, remember Allah standing, sitting and on your sides. Ibn Kathir explains that remembrance is encouraged after every prayer, but that it is encouraged here all the more, because the pillars of this particular prayer were reduced while the people moved about in it. What was cut from the form is made up in the remembrance that follows it.",
            "bn": "৪:১০৩ আয়াত নামাজীকে এমনিই চলে যেতে দেয় না। আয়াত বলে, নামাজ শেষ করলে দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করো। ইবনে কাসীর ব্যাখ্যা করেন, প্রতিটি নামাজের পরেই জিকিরের উৎসাহ আছে, তবে এখানে উৎসাহটা আরও বেশি। কারণ এই বিশেষ নামাজের রুকনগুলো কমিয়ে আনা হয়েছিল, মানুষ নড়াচড়া করতে করতেই তা পড়েছে। গড়ন থেকে যা কেটে নেওয়া হলো, পরের জিকির তা পুষিয়ে দেয়।"
          },
          {
            "en": "Then comes the sentence that puts the concession back in its box: when you are secure, establish the prayer. Ibn Kathir reads this as performing it as you were commanded, fulfilling its obligations with humility and completing the bowing and prostration. And the verse ends by calling the prayer kitaban mawqutan upon the believers. Ibn Abbas (RA) glossed the word as enjoined, and also said that the prayer has a fixed time as the Hajj has; Ibn Kathir reports the like from Mujahid, al-Hasan and as-Suddi among others.",
            "bn": "এরপর আসে সেই বাক্য, যা ছাড়টিকে আবার তার জায়গায় ফিরিয়ে দেয়: নিরাপদ হলে নামাজ কায়েম করো। ইবনে কাসীরের পাঠে এর মানে, যেভাবে হুকুম দেওয়া হয়েছে সেভাবেই পড়া, বিনয়ের সঙ্গে ফরজগুলো আদায় করা, রুকু-সাজদাহ পূর্ণ করা। আর আয়াত শেষ হয় নামাজকে মুমিনদের ওপর কিতাবাম মাওকূতা বলে। ইবনে আব্বাস (রাঃ) শব্দটির অর্থ করেছেন ফরজ করা, আর এ-ও বলেছেন যে হজের মতো নামাজেরও নির্দিষ্ট সময় আছে। ইবনে কাসীর জানান, মুজাহিদ, হাসান ও সুদ্দীসহ আরও কয়েকজন থেকে একই রকম কথা বর্ণিত।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Sit Beside It",
          "bn": "পাশাপাশি পড়ার আয়াত"
        },
        "p": [
          {
            "en": "2:239 is the same instruction compressed: if you fear, then pray on foot or riding, and when you are secure, remember Allah as He taught you what you did not know. 2:238 stands just before it and tells the believers to guard the prayers, and the middle prayer, and to stand before Allah devoutly obedient. The two verses together say what 4:102 and 4:103 say, and Surah al-Baqarah says it in two lines.",
            "bn": "২:২৩৯ আয়াত একই নির্দেশের সংক্ষিপ্ত রূপ: ভয় পেলে পায়ে হেঁটে বা সওয়ারিতে থেকেই নামাজ পড়ো, আর নিরাপদ হলে আল্লাহকে স্মরণ করো, যেভাবে তিনি তোমাদের শিখিয়েছেন যা তোমরা জানতে না। এর ঠিক আগের আয়াত ২:২৩৮ মুমিনদের বলে নামাজের প্রতি যত্নবান হতে, বিশেষ করে মধ্যবর্তী নামাজের প্রতি, আর আল্লাহর সামনে বিনীত হয়ে দাঁড়াতে। দুই আয়াত মিলে সেই কথাই বলে যা ৪:১০২ ও ৪:১০৩ আয়াত বলছে, আর সূরা বাকারা তা বলে মাত্র দুই লাইনে।"
          },
          {
            "en": "20:14 gives the reason underneath all of it: there is no deity except Me, so worship Me and establish the prayer for My remembrance. 29:45 says that the prayer restrains immorality and wrongdoing and that the remembrance of Allah is greater. Set against a battlefield, these verses explain why the form could be bent so far without being abandoned: what the prayer is for does not change when the circumstances do.",
            "bn": "২০:১৪ আয়াত এই সবকিছুর মূল কারণটি বলে দেয়: আমি ছাড়া সত্য কোনো ইলাহ নেই, কাজেই আমার ইবাদত করো আর আমার স্মরণের জন্য নামাজ কায়েম করো। ২৯:৪৫ আয়াত বলে, নামাজ অশ্লীল ও মন্দ কাজ থেকে বিরত রাখে, আর আল্লাহর জিকিরই সবচেয়ে বড়। যুদ্ধের ময়দানের সঙ্গে মিলিয়ে পড়লে এই আয়াতগুলো বুঝিয়ে দেয়, নামাজের গড়ন এতটা বদলানো গেল অথচ নামাজ ছাড়া গেল না কেন। অবস্থা বদলায়, কিন্তু নামাজ যে জন্য, তা বদলায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer That Does Not Wait",
          "bn": "যে নামাজ অপেক্ষা করে না"
        },
        "p": [
          {
            "en": "The first thing to take from these verses is an order of priority. If the prayer was kept with an army drawn up and arrows in the air, then a meeting, a shift, a journey, a queue and a sick child are not reasons to drop it. They are reasons to look for the form that fits: shortened, combined where that applies, seated, on a train, with a coat for a mat. Ask what can still be done, not whether to do it.",
            "bn": "এই আয়াতগুলোর প্রথম শিক্ষা: কোনটা আগে, কোনটা পরে। সৈন্যরা কাতারবন্দী, মাথার ওপর তীর উড়ছে, এমন অবস্থাতেও যদি নামাজ ছাড়া না হয়, তবে মিটিং, ডিউটি, সফর, লাইনে দাঁড়ানো বা অসুস্থ সন্তান নামাজ বাদ দেওয়ার কারণ হতে পারে না। এগুলো বরং খুঁজে দেখার কারণ, এই অবস্থায় নামাজের কোন রূপটা খাটে: কসর করে, যেখানে নিয়ম আছে সেখানে একসঙ্গে মিলিয়ে, বসে, ট্রেনে, গায়ের চাদর বিছিয়ে। প্রশ্ন হোক, এখনও কতটুকু করা যায়; পড়ব কি পড়ব না, সেটা নয়।"
          },
          {
            "en": "The second is the duty of the group that is not praying. Someone watched the road so that others could bow. That is a job in every community: minding the children so parents can pray, covering a colleague's desk at Maghrib, driving so a passenger can pray at a stop, taking the late shift in Ramadan. And the third is the return. When the danger lifts, 4:103 says, establish the prayer whole. A concession that outlives its hardship has quietly become a habit.",
            "bn": "দ্বিতীয় কথা, যে দলটি নামাজে নেই তার দায়িত্ব। কেউ একজন রাস্তার দিকে চোখ রেখেছিল বলেই অন্যরা রুকুতে যেতে পেরেছিল। প্রতিটি সমাজেই এই কাজ আছে: বাবা-মা নামাজ পড়তে পারুক বলে বাচ্চাদের দেখা, মাগরিবের সময় সহকর্মীর টেবিল সামলে দেওয়া, যাত্রী যেন থেমে নামাজ পড়তে পারে সেজন্য গাড়ি চালানো, রমজানে রাতের শিফট নিয়ে নেওয়া। আর তৃতীয় কথা, ফিরে আসা। বিপদ কেটে গেলে ৪:১০৩ আয়াত বলে, নামাজ পুরো করে কায়েম করো। যে ছাড় কষ্টের চেয়ে বেশি দিন টিকে যায়, তা চুপিচুপি অভ্যাসে বদলে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Words",
          "bn": "আয়াতের শব্দে দু'আ"
        },
        "p": [
          {
            "en": "The passage carries no supplication of its own, so what follows is not a Sunnah du'a but a short prayer composed from the words of these two verses, to be read as that. O Allah, do not let fear take our prayer from us. Keep us alert to what threatens us and standing before You at the same time. Let our remembrance of You fill what our weakness leaves out. And when safety returns, return us to the prayer whole.",
            "bn": "এই অংশে নিজের কোনো দু'আ নেই। তাই নিচের কথাগুলো সুন্নাহর দু'আ নয়, এই দুই আয়াতের শব্দ দিয়ে গড়া ছোট প্রার্থনা, সেভাবেই পড়ুন। হে আল্লাহ, ভয় যেন আমাদের নামাজ কেড়ে না নেয়। যা আমাদের জন্য হুমকি তার ব্যাপারে আমাদের সজাগ রাখুন, আর একই সঙ্গে আপনার সামনে দাঁড় করিয়ে রাখুন। আমাদের দুর্বলতায় যা বাদ পড়ে যায়, আপনার জিকির দিয়ে তা ভরে দিন। আর নিরাপত্তা ফিরে এলে আমাদের পুরো নামাজের কাছে ফিরিয়ে আনুন।"
          },
          {
            "en": "Each line answers something in the text. The first answers the fear that occasioned the verse; the second answers the doubled command to take your wariness while standing in prayer; the third answers 4:103 and its call to remember Allah standing, sitting and lying down; and the last answers the sentence that sends the believers back to the full prayer once they are secure. Say it after reading the two verses, and the battlefield becomes a request for your own day.",
            "bn": "প্রতিটি লাইন আয়াতের কোনো না কোনো কথার জবাব। প্রথম লাইনটি সেই ভয়ের জবাব, যার প্রেক্ষাপটে আয়াত নাজিল হয়েছিল। দ্বিতীয়টি সেই হুকুমের জবাব, যা দুবার এসেছে: নামাজে দাঁড়িয়েও সতর্ক থাকো। তৃতীয়টি ৪:১০৩ আয়াতের জবাব, যেখানে দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করতে বলা হয়েছে। আর শেষটি সেই বাক্যের জবাব, যা নিরাপদ হলে মুমিনদের পুরো নামাজে ফিরিয়ে আনে। দুই আয়াত পড়ার পর দু'আটি পড়ুন। তখন সেই যুদ্ধের ময়দানের কথা হয়ে উঠবে আপনার নিজের দিনের জন্য চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Take Away",
          "bn": "সঙ্গে নিয়ে যাওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "When a day goes badly, what is the first thing I let go of, and why is it so often the prayer? If believers once prayed in ranks with weapons in their hands, what is my real reason for the prayer I missed this week? Is there a concession I first took for a genuine hardship that I am still taking now that the hardship is gone?",
            "bn": "দিন খারাপ গেলে আমার হাত থেকে সবার আগে কোন জিনিসটা ছুটে যায়, আর সেটা এত ঘন ঘন নামাজই হয় কেন? মুমিনরা যদি একসময় অস্ত্র হাতে কাতারে দাঁড়িয়ে নামাজ পড়ে থাকেন, তবে এই সপ্তাহে আমার যে নামাজটি ছুটে গেল তার আসল কারণ কী? এমন কোনো ছাড় কি আমি নিচ্ছি, যা প্রথমে সত্যিকারের কষ্টের জন্য নিয়েছিলাম, অথচ কষ্ট চলে যাওয়ার পরও ছাড়ছি না?"
          },
          {
            "en": "Whose prayer is made possible by work that I could do, and am I doing it? What am I heedless about because life feels safe right now, in the way the verse warns against heedlessness over weapons and baggage? And when my prayer ends, do I get up immediately, or do I stay long enough to remember the One I was just standing before?",
            "bn": "আমি একটু কাজ করে দিলে কার নামাজ পড়া সম্ভব হয়, আর সে কাজটা কি আমি করছি? জীবন এখন নিরাপদ মনে হচ্ছে বলে আমি কোন ব্যাপারে গাফেল হয়ে আছি, যেমন গাফেলতি থেকে আয়াত অস্ত্র আর সরঞ্জামের ব্যাপারে সাবধান করেছে? আর নামাজ শেষ হলে আমি কি সঙ্গে সঙ্গে উঠে পড়ি, নাকি যাঁর সামনে এইমাত্র দাঁড়িয়ে ছিলাম, তাঁকে স্মরণ করার জন্য একটু বসে থাকি?"
          }
        ]
      }
    ]
  },
  "4:109": {
    "sections": [
      {
        "h": {
          "en": "A Dispute in Madinah",
          "bn": "মদিনার একটি ঝগড়া"
        },
        "p": [
          {
            "en": "This verse sits inside the most concrete stretch of Surah an-Nisa. From 4:105 the revelation addresses a live dispute: the Prophet ﷺ is told that the Book was sent down in truth so that he may judge between people by what Allah has shown him, and that he must not be an advocate for the treacherous. 4:106 tells him to seek Allah's forgiveness. 4:107 repeats the prohibition, 4:108 exposes the schemers, and 4:109 turns the whole scene toward the Day of Resurrection.",
            "bn": "সূরা আন-নিসার যে অংশ সবচেয়ে বাস্তব ঘটনার সঙ্গে জড়ানো, এই আয়াত তারই ভেতরে। ৪:১০৫ আয়াত থেকে ওহি একটি চলমান বিবাদের কথা বলছে। নবী ﷺ-কে জানানো হচ্ছে, কিতাব সত্যসহ নাজিল হয়েছে, যাতে আল্লাহ তাঁকে যা দেখিয়েছেন সে অনুযায়ী তিনি মানুষের মধ্যে ফয়সালা করেন; আর তিনি যেন খিয়ানতকারীদের উকীল না হন। ৪:১০৬ আয়াত তাঁকে আল্লাহর কাছে মাফ চাইতে বলে। ৪:১০৭ আয়াত নিষেধটি আবার বলে, ৪:১০৮ আয়াত ষড়যন্ত্রকারীদের মুখোশ খুলে দেয়, আর ৪:১০৯ আয়াত গোটা দৃশ্যটাকে কিয়ামতের দিকে ঘুরিয়ে দেয়।"
          },
          {
            "en": "The occasion, as at-Tirmidhi relates it, was a theft: the blame was being steered toward an innocent man while the guilty party's people argued his case. Ibn Kathir's own comment on this passage does not retell that story. He keeps to the principle, saying that these verses chastise the hypocrites, who hide their evil works from people so that nobody will criticise them, while disclosing that same evil before Allah, who watches over their secrets and knows what is in their hearts.",
            "bn": "তিরমিযীর বর্ণনায় এর শানে নুযূল একটি চুরির ঘটনা। দোষ চাপানো হচ্ছিল এক নির্দোষ মানুষের ঘাড়ে, আর আসল অপরাধীর লোকজন তার পক্ষে সাফাই গাইছিল। ইবনে কাসীর এই অংশের ব্যাখ্যায় সে কাহিনি আর বলেননি; তিনি মূল নীতির কথাই বলেছেন। তাঁর কথায়, এই আয়াতগুলো মুনাফিকদের তিরস্কার করছে। তারা নিজেদের মন্দ কাজ মানুষের কাছ থেকে লুকায়, যাতে কেউ দোষ না ধরে; অথচ সেই একই মন্দ খোলা পড়ে থাকে আল্লাহর সামনে, যিনি তাদের গোপন সব কিছুর ওপর নজর রাখেন আর অন্তরে কী আছে তা জানেন।"
          },
          {
            "en": "So the passage has a shape. First a command to the judge, then a warning about the people bringing the case, then this verse, which lifts the reader out of the courtroom and sets the same defendants in front of Allah. Then 4:110 opens the door of forgiveness to anyone in the scene who will turn, and 4:112 names the crime plainly: whoever earns a fault or a sin and then throws it on an innocent person has taken on a slander and a manifest sin.",
            "bn": "তাহলে অংশটির একটা পরিষ্কার ধারা আছে। প্রথমে বিচারকের প্রতি হুকুম, তারপর যারা মামলা নিয়ে এসেছে তাদের নিয়ে সতর্কবাণী, তারপর এই আয়াত। এই আয়াত পাঠককে আদালত থেকে তুলে এনে সেই একই আসামিদের আল্লাহর সামনে দাঁড় করিয়ে দেয়। এরপর ৪:১১০ আয়াত এই ঘটনার যে কেউ ফিরে আসতে চাইলে তার জন্য মাফের দরজা খুলে দেয়। আর ৪:১১২ আয়াত অপরাধটির নাম সোজাসুজি বলে দেয়: যে কোনো ভুল বা গুনাহ করে তা কোনো নির্দোষের ঘাড়ে চাপায়, সে অপবাদ আর স্পষ্ট গুনাহ নিজের ঘাড়েই তুলে নিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Here You Are, These People",
          "bn": "এই তো তোমরা, এরাই তারা"
        },
        "p": [
          {
            "en": "The verse opens with a pointing gesture: ha antum ha'ula'i, here you are, these very people. It is not a description; it is the Quran turning and looking straight at an audience that thought it was watching. Whoever had been speaking up for the accused is suddenly the one being addressed, and the tone of the opening carries the reproach before any argument is made. Nothing else in the verse would land without that first turn of the head.",
            "bn": "আয়াত শুরু হয় আঙুল তুলে দেখানোর ভঙ্গিতে: হা আনতুম হাউলাই, এই তো তোমরা, এরাই সেই লোক। এটা কোনো বর্ণনা নয়। কুরআন এখানে ঘুরে সোজা তাকিয়েছে সেই শ্রোতাদের দিকে, যারা ভেবেছিল তারা শুধু দর্শক। যারা অভিযুক্তের পক্ষে কথা বলছিল, হঠাৎ কথাটা এসে পড়ে তাদেরই ওপর। কোনো যুক্তি আসার আগেই শুরুর সুরে তিরস্কারটা বোঝা যায়। মুখ ঘুরিয়ে সোজা তাকানোর এই প্রথম ভঙ্গিটা না থাকলে আয়াতের বাকি কথা এভাবে গায়ে লাগত না।"
          },
          {
            "en": "Then the verb. Jadaltum anhum, you have argued on their behalf, from the root j-d-l, which is dispute, the back and forth of a case. The same verb had just been forbidden in 4:107, do not argue on behalf of those who betray themselves, and it now returns in the question: fa-man yujadilu Allaha anhum, who will argue with Allah on their behalf? The word is held steady while the setting changes, and that is where the whole force of the verse lies.",
            "bn": "এরপর ক্রিয়াটি। জাদালতুম আনহুম, তোমরা তাদের পক্ষে তর্ক করেছ; মূল জীম-দাল-লাম, যার অর্থ ঝগড়া, মামলার এই কথা-সেই কথা। এই একই ক্রিয়া একটু আগেই ৪:১০৭ আয়াতে নিষেধ করা হয়েছিল, যারা নিজেদের সঙ্গে খিয়ানত করে তাদের পক্ষে তর্ক করো না। এখন তা ফিরে আসে প্রশ্নের ভেতরে: ফামাই ইউজাদিলুল্লাহা আনহুম, আল্লাহর সঙ্গে তাদের পক্ষে কে তর্ক করবে? শব্দটি একই রাখা হয়েছে, বদলে গেছে কেবল জায়গাটা। আয়াতের পুরো জোরটা সেখানেই।"
          },
          {
            "en": "The second half asks who will be their wakil, the one appointed to stand in another's place and handle his affair. The app renders it their representative. Two questions, and no answer is given to either. The Quran often supplies its own answers, and here it deliberately does not. The silence where the answer should be is the verse's argument, and any reader who tries to fill it discovers that there is nothing to put there.",
            "bn": "দ্বিতীয় অংশ জানতে চায়, কে হবে তাদের ওয়াকীল; যাকে অন্যের জায়গায় দাঁড়িয়ে তার কাজ সামলানোর ভার দেওয়া হয়। অ্যাপের অনুবাদে শব্দটি এসেছে তাদের উকীল হিসেবে। দুটি প্রশ্ন, আর একটিরও জবাব দেওয়া হয় না। কুরআন প্রায়ই নিজের প্রশ্নের জবাব নিজেই দেয়, এখানে ইচ্ছা করেই দেয় না। জবাবের জায়গাটুকুর নীরবতাই আয়াতের যুক্তি। যে পাঠক সেই ফাঁক ভরাতে যাবেন, তিনি টের পাবেন সেখানে রাখার মতো কিছুই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seen and the Hidden",
          "bn": "যা দেখা যায়, যা লুকানো"
        },
        "p": [
          {
            "en": "Ibn Kathir's reading of this verse is short and exact. Suppose, he says, these people do obtain a verdict in their favour from the rulers in this life, since rulers judge according to what is apparent to them. What then will their condition be on the Day of Resurrection, before Allah, who knows the secret and what is even more hidden? None will support them on that Day. That is his answer to the verse's unanswered question, and it is no answer at all.",
            "bn": "এই আয়াত নিয়ে ইবনে কাসীরের ব্যাখ্যা ছোট, কিন্তু নিখুঁত। তিনি বলেন, ধরা যাক এই লোকেরা দুনিয়ার শাসকদের কাছ থেকে নিজেদের পক্ষে রায় পেয়েই গেল, কারণ শাসকেরা তো বাইরে যা দেখেন সে অনুযায়ীই ফয়সালা করেন। তাহলে কিয়ামতের দিন আল্লাহর সামনে তাদের কী অবস্থা হবে, যিনি গোপন কথা জানেন, আর তার চেয়েও লুকানো যা, তাও জানেন? সেদিন কেউ তাদের পাশে দাঁড়াবে না। আয়াতের জবাবহীন প্রশ্নের এটাই তাঁর জবাব, আর এ আসলে কোনো জবাবই নয়।"
          },
          {
            "en": "Al-Muyassar reads the address as falling on the believers themselves: here you are, O believers, you have argued on behalf of these people who betray themselves, in this worldly life; so who will argue with Allah for them on the Day of resurrection and reckoning, and who will be their representative on that Day? On this reading the rebuke is not aimed at the guilty party but at the sincere people who took up their case, and that is what makes the verse uncomfortable to read.",
            "bn": "আল-মুয়াসসারের পাঠে সম্বোধনটি পড়ে মুমিনদের ওপরেই: এই তো তোমরা, হে ঈমানদারগণ, দুনিয়ার এই জীবনে তোমরা এই লোকদের পক্ষে তর্ক করেছ, যারা নিজেদের সঙ্গেই খিয়ানত করে। তাহলে পুনরুত্থান ও হিসাবের দিনে আল্লাহর সঙ্গে তাদের পক্ষে কে তর্ক করবে, আর সেদিন কে হবে তাদের উকীল? এই পাঠে তিরস্কারটি অপরাধীদের দিকে নয়, বরং সেই আন্তরিক মানুষদের দিকে যারা তাদের মামলা হাতে তুলে নিয়েছিল। এ কারণেই আয়াতটি পড়তে অস্বস্তি লাগে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Piece of the Fire",
          "bn": "আগুনের একটি টুকরা"
        },
        "p": [
          {
            "en": "The narration the commentators attach to this passage is recorded in the Two Sahihs from Umm Salamah (RA). The Messenger of Allah ﷺ heard the noise of people disputing at the door of his room and came out to them, saying that he was only a human being, that he judged by what he heard, and that one of them might be more eloquent in his argument than another, so that he would rule in his favour. Then the warning: whoever is awarded by him a right belonging to a Muslim has been handed a piece of the Fire.",
            "bn": "মুফাসসিরগণ এই অংশের সঙ্গে যে হাদিসটি যুক্ত করেন, তা সহীহ বুখারী ও সহীহ মুসলিমে উম্মে সালামা (রাঃ) থেকে বর্ণিত। রাসূলুল্লাহ ﷺ তাঁর কামরার দরজার কাছে ঝগড়ার শব্দ শুনে বেরিয়ে এলেন। তিনি বললেন, তিনি একজন মানুষ মাত্র, তিনি যা শোনেন তার ভিত্তিতেই ফয়সালা করেন, আর তাঁদের কেউ হয়তো অন্যের চেয়ে নিজের কথা গুছিয়ে বলতে পারে, ফলে তিনি তার পক্ষেই রায় দিয়ে বসেন। এরপর সেই হুঁশিয়ারি: তাঁর রায়ে কেউ যদি অন্য কোনো মুসলিমের হক পেয়ে যায়, তবে তাকে আগুনের একটি টুকরাই ধরিয়ে দেওয়া হলো।"
          },
          {
            "en": "Imam Ahmad records a fuller scene from her: two men of the Ansar came with a dispute over an old inheritance and had no evidence, and the Prophet ﷺ said the same words, adding that whoever is given something of his brother's right should not take it. The two men wept, and each said he gave up his right to the other. He then told them to go, divide it, aim at what was just, draw lots, and each forgive the other. A verdict is not a title deed.",
            "bn": "ইমাম আহমাদ তাঁর থেকেই আরও পূর্ণ একটি দৃশ্য আনেন। আনসারদের দুই ব্যক্তি পুরনো এক মিরাস নিয়ে বিবাদ মেটাতে এলেন, কারও হাতে প্রমাণ ছিল না। নবী ﷺ একই কথা বললেন, সঙ্গে যোগ করলেন, কাউকে যদি তার ভাইয়ের হক থেকে কিছু দিয়ে দেওয়া হয় তবে সে যেন তা না নেয়। দুজনেই কেঁদে ফেললেন, আর প্রত্যেকে বললেন, আমি আমার হক অন্যজনকে ছেড়ে দিলাম। তখন তিনি বললেন, যাও, ভাগ করে নাও, ন্যায়ের দিকে লক্ষ রাখো, লটারি করে নাও, আর একে অন্যকে মাফ করে দাও। রায় মানেই মালিকানার দলিল নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Nobody Stands In",
          "bn": "যেদিন কেউ কারও জায়গায় দাঁড়ায় না"
        },
        "p": [
          {
            "en": "16:111 describes the Day when every soul comes disputing for itself and every soul is paid in full for what it did, and none is wronged. The same verb from 4:109 appears there, but now each person can only argue for himself. 82:19 says it in the barest terms: a Day when no soul will possess anything at all for another soul, and the command that Day belongs to Allah. 2:48 adds that no intercession will be accepted from such a soul and no compensation taken from it.",
            "bn": "১৬:১১১ আয়াত সেই দিনের ছবি আঁকে, যেদিন প্রত্যেকে নিজের পক্ষে তর্ক করতে করতে আসবে, আর প্রত্যেককে তার কাজের পুরো প্রতিফল দেওয়া হবে, কারও ওপর জুলুম হবে না। ৪:১০৯ আয়াতের সেই ক্রিয়াটিই সেখানে ফিরে আসে, তবে এবার প্রত্যেকে কেবল নিজের পক্ষেই তর্ক করতে পারবে। ৮২:১৯ আয়াত কথাটা একেবারে সোজা ভাষায় বলে: সেদিন কেউ অন্য কারও জন্য কিছুই করার ক্ষমতা রাখবে না, আর সেদিন হুকুম চলবে কেবল আল্লাহর। ২:৪৮ আয়াত যোগ করে, সেদিন কারও সুপারিশ কবুল হবে না, কারও কাছ থেকে বিনিময়ও নেওয়া হবে না।"
          },
          {
            "en": "40:18 warns of the approaching Day when hearts are at the throats and says that for the wrongdoers there is no devoted friend and no intercessor who is obeyed. Read after 4:109, these verses are not four separate warnings but one answer repeated: the post of advocate, on that Day, is vacant. And 4:111, two verses on, closes the loop from the other side by saying that whoever earns a sin earns it only against himself.",
            "bn": "৪০:১৮ আয়াত সেই ঘনিয়ে আসা দিনের ব্যাপারে সাবধান করে, যেদিন প্রাণ ওষ্ঠাগত হবে; আর বলে, জালিমদের জন্য সেদিন কোনো অন্তরঙ্গ বন্ধু থাকবে না, এমন কোনো সুপারিশকারীও থাকবে না যার কথা মানা হবে। ৪:১০৯ আয়াতের পর পড়লে এগুলো আলাদা চারটি সতর্কবাণী নয়, একই জবাব বারবার: সেদিন উকীলের আসন খালি। আর দুই আয়াত পরে ৪:১১১ আয়াত উল্টো দিক থেকে কথাটা পূর্ণ করে: যে গুনাহ কামায়, সে তা কামায় কেবল নিজের বিরুদ্ধেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Side Am I On",
          "bn": "আমি কার পক্ষে"
        },
        "p": [
          {
            "en": "The first thing this verse asks of a reader is a check before speaking. Defending someone is not neutral; it lends them your name and your credibility. So before taking up a case for a relative, a colleague, a party, a community or a friend, ask what you actually know and what you are only assuming because they are yours. 4:135 sets the standard: stand firm in justice as witnesses for Allah, even against yourselves, your parents and your relatives.",
            "bn": "এই আয়াত পাঠকের কাছে প্রথমে যা চায়, তা হলো মুখ খোলার আগে একবার যাচাই। কারও পক্ষ নেওয়া নিরপেক্ষ কাজ নয়। এতে আপনি তাকে নিজের নাম আর নিজের বিশ্বাসযোগ্যতা ধার দেন। তাই আত্মীয়, সহকর্মী, দল, সম্প্রদায় বা বন্ধুর হয়ে দাঁড়ানোর আগে নিজেকে জিজ্ঞেস করুন, আপনি সত্যিই কী জানেন আর কতটুকু শুধু আপনার লোক বলেই ধরে নিচ্ছেন। ৪:১৩৫ আয়াত মানটা ঠিক করে দেয়: ন্যায়ের ওপর দৃঢ় থাকো, আল্লাহর জন্য সাক্ষী হও, তা নিজেদের, বাবা-মায়ের বা আত্মীয়ের বিরুদ্ধে গেলেও।"
          },
          {
            "en": "The second is a check after winning. If a settlement, a promotion, an inheritance or a judgement came your way because the other side argued badly or because a fact never surfaced, the hadith attached to this passage says exactly what you are holding. The remedy in that report is not complicated: give it back. Speak to the person, return the share, correct the record. It is easier now than on the Day when there is no one to speak for you.",
            "bn": "দ্বিতীয় যাচাই জিতে যাওয়ার পর। কোনো মীমাংসা, পদোন্নতি, উত্তরাধিকার বা রায় যদি আপনার হাতে এসে থাকে এ কারণে যে অন্য পক্ষ গুছিয়ে বলতে পারেনি বা একটা তথ্য কখনো সামনেই আসেনি, তবে এই অংশের সঙ্গে যুক্ত হাদিস বলে দিচ্ছে আপনি হাতে কী ধরে আছেন। সেই বর্ণনার সমাধানটি জটিল নয়: ফিরিয়ে দিন। মানুষটির সঙ্গে কথা বলুন, অংশটি ফেরত দিন, হিসাবটা শুধরে নিন। যেদিন আপনার হয়ে কেউ কথা বলার থাকবে না, সেদিনের চেয়ে আজই কাজটা সহজ।"
          },
          {
            "en": "And the third is what this verse does not say. It does not say that the man in the dock is beyond help; 4:110, the very next verse, promises that whoever does a wrong or wrongs himself and then seeks Allah's forgiveness will find Allah Forgiving and Merciful. What no one will find is an advocate before Allah. What is always available is a return. The verse closes one road so that a reader will notice the other one standing open beside it.",
            "bn": "আর তৃতীয় কথা, এই আয়াত যা বলে না। আয়াত বলে না যে কাঠগড়ায় দাঁড়ানো মানুষটির আর কোনো উপায় নেই। ঠিক পরের আয়াত ৪:১১০ ওয়াদা দেয়, যে মন্দ কাজ করে বা নিজের প্রতি জুলুম করে, তারপর আল্লাহর কাছে মাফ চায়, সে আল্লাহকে ক্ষমাশীল ও দয়াময় পাবে। যা কোনোভাবেই মিলবে না, তা হলো আল্লাহর সামনে পক্ষ নেওয়ার মতো উকীল। আর যা সবসময় মেলে, তা হলো ফিরে আসার পথ। আয়াত একটি রাস্তা বন্ধ করে, যাতে পাঠক তার পাশেই খোলা থাকা অন্য রাস্তাটি দেখতে পান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From Its Questions",
          "bn": "আয়াতের প্রশ্ন থেকে দু'আ"
        },
        "p": [
          {
            "en": "The verse holds no supplication, so what follows is not a Sunnah du'a but a short prayer built from its own words, to be read as that. O Allah, You know the secret and what is more hidden than the secret. Do not let me win anything I would have to answer for. Do not let me stand for a wrong because the wrongdoer is mine. And on the Day when no one can plead for me, do not leave me to my own plea.",
            "bn": "আয়াতে কোনো দু'আ নেই। তাই নিচের কথাগুলো সুন্নাহর দু'আ নয়, আয়াতের নিজের শব্দ দিয়ে গড়া ছোট প্রার্থনা, সেভাবেই পড়ুন। হে আল্লাহ, আপনি গোপন জানেন, আর গোপনের চেয়েও গভীরে যা আছে তাও জানেন। এমন কিছু আমাকে জিতিয়ে দেবেন না, যার জবাব আমাকে দিতে হবে। নিজের লোক বলেই কোনো অন্যায়ের পক্ষে যেন আমি দাঁড়িয়ে না যাই। আর যেদিন আমার হয়ে কেউ কথা বলতে পারবে না, সেদিন আমাকে আমার নিজের কথার হাতে ছেড়ে দেবেন না।"
          },
          {
            "en": "Each line answers a phrase in the passage. The first answers Ibn Kathir's gloss on the Knower of the secret and of what is more hidden still. The second answers the verdict that arrives as a piece of the Fire. The third answers the reproach of ha antum ha'ula'i, addressed to people whose only fault was choosing a side too quickly. And the last answers the two questions the verse leaves open, by asking for the only help that will exist there.",
            "bn": "প্রতিটি লাইন অংশটির কোনো না কোনো কথার জবাব। প্রথমটি ইবনে কাসীরের সেই ব্যাখ্যার জবাব: আল্লাহ গোপন জানেন, আর তার চেয়েও লুকানো যা, তাও জানেন। দ্বিতীয়টি সেই রায়ের জবাব, যা আগুনের টুকরা হয়ে হাতে আসে। তৃতীয়টি হা আনতুম হাউলাই তিরস্কারের জবাব, যা বলা হয়েছিল এমন মানুষদের, যাদের দোষ শুধু এটুকু যে তারা তাড়াহুড়ো করে একটা পক্ষ নিয়ে ফেলেছিল। আর শেষটি আয়াতের খোলা রেখে দেওয়া দুই প্রশ্নের জবাব; সেখানে যে একমাত্র সাহায্য থাকবে, সেটাই চেয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Sit With",
          "bn": "ভেবে দেখার মতো প্রশ্ন"
        },
        "p": [
          {
            "en": "Whose side did I take this month without checking the facts, and would I have taken it if the person were a stranger? Is there anything in my hands right now that came to me because someone else could not argue as well as I could? If a judge ruled for me on what he was shown, would the ruling still stand before the One who was never shown anything, because nothing was ever hidden from Him?",
            "bn": "এই মাসে আমি যাচাই না করে কার পক্ষ নিয়েছি, আর মানুষটি অচেনা কেউ হলে কি আমি সেই পক্ষ নিতাম? এই মুহূর্তে আমার হাতে এমন কিছু কি আছে, যা আমার কাছে এসেছে কারণ অন্যজন আমার মতো গুছিয়ে বলতে পারেনি? বিচারক তাঁকে যা দেখানো হয়েছে তার ভিত্তিতে আমার পক্ষে রায় দিলে, সেই রায় কি তাঁর সামনেও টিকত, যাঁকে কোনোদিন কিছু দেখাতেই হয়নি, কারণ তাঁর কাছ থেকে কিছু কখনো লুকানোই ছিল না?"
          },
          {
            "en": "Where does my loyalty to my own people stop being loyalty and start being cover? What am I quietly counting on to speak for me later: my reputation, my explanations, my usefulness to others? And since 4:110 stands right after this warning, what wrong of mine am I still arguing about instead of simply bringing it to Allah and asking Him to forgive it?",
            "bn": "নিজের লোকের প্রতি আমার টান কোথায় গিয়ে আর টান থাকে না, অন্যায়ের আড়াল হয়ে যায়? পরে আমার হয়ে কথা বলবে ভেবে আমি চুপচাপ কীসের ওপর ভরসা করে আছি: আমার সুনাম, আমার ব্যাখ্যা, নাকি অন্যদের কাছে আমি কতটা কাজের মানুষ, সেটা? আর এই হুঁশিয়ারির ঠিক পরেই যেহেতু ৪:১১০ আয়াত, আমার কোন ভুল নিয়ে আমি এখনও তর্ক করে যাচ্ছি, অথচ সোজা আল্লাহর কাছে নিয়ে গিয়ে মাফ চেয়ে নিলেই হতো?"
          }
        ]
      }
    ]
  },
  "4:110": {
    "sections": [
      {
        "h": {
          "en": "An Upper Room Broken Into",
          "bn": "সিঁধ কাটা এক মাচাঘর"
        },
        "p": [
          {
            "en": "Wa man ya'mal su'an aw yazlim nafsahu thumma yastaghfiri Allaha yajidi Allaha ghafuran rahima: whoever does evil or wrongs himself, then seeks Allah's forgiveness, will find Allah Forgiving, Merciful. The verse stands in the middle of 4:105 to 4:113, a passage about a theft in Madinah. Ibn Kathir, on 4:105, gives the long account through Muhammad ibn Ishaq, as at-Tirmidhi and Ibn Jarir recorded it, from Qatadah ibn an-Nu'man (RA), whose uncle had been robbed.",
            "bn": "ওয়া মাই ইয়া'মাল সূআন আও ইয়াযলিম নাফসাহু সুম্মা ইয়াসতাগফিরিল্লাহা ইয়াজিদিল্লাহা গাফূরার রাহীমা: যে মন্দ কাজ করে বা নিজের উপর যুলম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু। আয়াতটির জায়গা ৪:১০৫ থেকে ৪:১১৩ আয়াতের মাঝখানে, আর গোটা অংশটা মদীনার এক চুরির ঘটনা ঘিরে। ইবন কাসীর ৪:১০৫ আয়াতের আলোচনায় দীর্ঘ বর্ণনাটি আনেন মুহাম্মাদ ইবন ইসহাকের সূত্রে, যেমন তিরমিযী ও ইবন জারীর তা লিপিবদ্ধ করেছেন। বর্ণনাকারী কাতাদা ইবন নুমান (রাঃ), চুরি হয়েছিল তাঁর চাচার ঘরে।"
          },
          {
            "en": "In that account Qatadah's uncle, Rifa'ah ibn Zayd, had bought fine flour from a Syrian caravan and stored it in an upper room that also held a coat of mail and a sword. By night someone tunnelled in from beneath and took food and weapons. Inquiries pointed to a household, the Banu Ubayriq, who meanwhile named Labid ibn Sahl, a man of the same quarter known for righteousness and Islam. Labid drew his sword and demanded the theft be cleared up.",
            "bn": "সেই বর্ণনায় কাতাদার চাচা রিফাআ ইবন যায়দ শাম থেকে আসা কাফেলার কাছ থেকে মিহি আটা কিনে মাচাঘরে তুলে রেখেছিলেন। সেখানে একটা বর্ম আর একটা তলোয়ারও ছিল। রাতে কেউ নিচ থেকে সিঁধ কেটে খাবার আর অস্ত্র দুটোই নিয়ে যায়। খোঁজ নিতে গিয়ে সন্দেহ গিয়ে পড়ল বনু উবাইরিক নামের এক পরিবারের উপর। তারা ততক্ষণে একই মহল্লার লাবীদ ইবন সাহলের নাম তুলল, যিনি নেককার ও খাঁটি মুসলিম বলে পরিচিত। লাবীদ তলোয়ার খুলে দাবি করলেন, চুরির রহস্য খোলাসা হতেই হবে।"
          },
          {
            "en": "Qatadah took the matter to the Prophet ﷺ, and then kinsmen of the household went to him saying Qatadah and his uncle were accusing a family of Islam and righteousness without proof. Then the verses came down. At-Tirmidhi, as Ibn Kathir quotes him, called the report gharib: only Muhammad ibn Salamah al-Harrani narrated it with a connected chain, while Yunus ibn Bukayr and others narrated it mursal from Asim ibn Umar ibn Qatadah. Ibn Kathir adds that al-Hakim judged a fuller version sahih on Muslim's condition.",
            "bn": "কাতাদা বিষয়টা নবী ﷺ-এর কাছে নিয়ে গেলেন। এরপর ওই পরিবারের আত্মীয়রা গিয়ে বলল, কাতাদা আর তাঁর চাচা কোনো প্রমাণ ছাড়াই একটি দ্বীনদার, নেককার পরিবারকে চুরির দায় দিচ্ছেন। তারপর আয়াতগুলো নাযিল হলো। ইবন কাসীরের উদ্ধৃতিতে তিরমিযী বর্ণনাটিকে গরীব বলেছেন। তাঁর কথা, মুহাম্মাদ ইবন সালামা হাররানী ছাড়া আর কেউ একে মুত্তাসিল সনদে বর্ণনা করেননি। ইউনুস ইবন বুকাইরসহ অন্যরা আসিম ইবন উমার ইবন কাতাদা থেকে মুরসাল হিসেবে বর্ণনা করেছেন। ইবন কাসীর যোগ করেন, হাকিম এর একটি পূর্ণতর রূপকে মুসলিমের শর্তে সহীহ বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Innocent Was Blamed",
          "bn": "দোষ চাপল কোন নির্দোষের ঘাড়ে"
        },
        "p": [
          {
            "en": "Al-Baghawi, on 4:105, tells it another way, through al-Kalbi from Abu Salih from Ibn Abbas. Tu'mah ibn Ubayriq of the Banu Zafar stole a coat of mail from his neighbour Qatadah ibn an-Nu'man. A leaking sack of flour left a trail to his house. He hid it with a Jewish man, Zayd ibn as-Samin, swore he had not taken it, and his people asked the Prophet ﷺ to argue for him. Muqatil's version, also in al-Baghawi, has Zayd deposit the mail with Tu'mah, who denied it.",
            "bn": "বাগাভী ৪:১০৫ আয়াতে ঘটনাটা বলেন অন্যভাবে, কালবীর সূত্রে, তিনি আবূ সালিহ থেকে, তিনি ইবন আব্বাস থেকে। বনু যফরের তু'মা ইবন উবাইরিক প্রতিবেশী কাতাদা ইবন নুমানের একটি বর্ম চুরি করে। ফুটো আটার বস্তা থেকে ঝরা আটা তার বাড়ি পর্যন্ত দাগ রেখে যায়। সে বর্মটা লুকিয়ে রাখে যায়দ ইবনুস সামীন নামের এক ইহুদির কাছে, কসম খেয়ে বলে সে নেয়নি। তার গোত্রের লোকেরা নবী ﷺ-কে অনুরোধ করে তার পক্ষ নিতে। বাগাভীতেই মুকাতিলের ভাষ্য অন্যরকম: যায়দ বর্মটা তু'মার কাছে আমানত রেখেছিলেন, আর তু'মা তা অস্বীকার করে।"
          },
          {
            "en": "Ibn Kathir keeps both names open. On 4:112 he says the man the Banu Ubayriq accused was the righteous Labid ibn Sahl, as in the hadith, or Zayd ibn as-Samin the Jew, as others said, and that he was innocent while they were the wrongdoers. On 4:105 he lists Mujahid, Ikrimah, Qatadah, as-Suddi and Ibn Zayd as saying these verses came down about the thief of the Banu Ubayriq, their accounts differing but close.",
            "bn": "ইবন কাসীর দুটো নামই খোলা রাখেন। ৪:১১২ আয়াতে তিনি বলেন, বনু উবাইরিক যাঁকে দোষী সাব্যস্ত করেছিল তিনি হয় নেককার লাবীদ ইবন সাহল, যেমন হাদীসে এসেছে, নয়তো ইহুদি যায়দ ইবনুস সামীন, যেমন অন্যরা বলেছেন। যিনিই হোন, তিনি ছিলেন নির্দোষ, আর যালিম ছিল তারাই। ৪:১০৫ আয়াতে তিনি মুজাহিদ, ইকরিমা, কাতাদা, সুদ্দী ও ইবন যায়দের নাম নেন। তাঁদের সবার কথা, এ আয়াতগুলো নাযিল হয়েছে বনু উবাইরিকের চোরকে নিয়ে। বর্ণনার খুঁটিনাটি আলাদা, তবে কাছাকাছি।"
          },
          {
            "en": "This needs saying plainly. The passage describes what the reports describe: one theft, one household, one false charge, in one city, long ago. It licenses nothing against any living person or community: not against the Ansar or the Banu Zafar, not against Jews, whose man in one version was the innocent party, and not against anyone who shares a name with anyone here. Ibn Kathir himself, on 4:112, turns the rebuke outward: it falls on whoever takes on their description and commits their sin. The measure is the deed, never the lineage.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। এ অংশ শুধু সেটুকুই বলে, যা বর্ণনাগুলো বলে: অনেক কাল আগে এক শহরে এক পরিবারের একটি চুরি আর একটি মিথ্যা অভিযোগ। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আনসার বা বনু যফরের বিরুদ্ধে নয়। ইহুদিদের বিরুদ্ধেও নয়, এক বর্ণনায় যাদের একজনই ছিলেন নির্দোষ পক্ষ। এখানে যাদের নাম এল, তাদের নামের সঙ্গে কারও নাম মিলে গেলেও নয়। ইবন কাসীর নিজেই ৪:১১২ আয়াতে ভর্ৎসনাটা সবার দিকে ঘুরিয়ে দেন: তা পড়বে যে-ই তাদের স্বভাব ধরবে আর তাদের গুনাহ করবে, তার উপর। মাপকাঠি কাজ, বংশ কখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Offered to the Guilty Household",
          "bn": "দোষী পরিবারের সামনেই খোলা দরজা"
        },
        "p": [
          {
            "en": "Around this verse a cover-up is being exposed, and in the middle stands an offer. Al-Qurtubi reports Ibn Abbas: with this verse Allah offered repentance to the Banu Ubayriq. Al-Baghawi closes his gloss the same way: in this verse He offers repentance to Tu'mah. And in at-Tirmidhi's narration as Ibn Kathir quotes it, the comment on these words is a single line: had they sought Allah's forgiveness, He would have forgiven them.",
            "bn": "আয়াতের চারপাশে একটা চুরি চাপা দেওয়ার চেষ্টা ফাঁস হচ্ছে, আর ঠিক মাঝখানে রাখা আছে একটা প্রস্তাব। কুরতুবী ইবন আব্বাসের কথা আনেন: এ আয়াত দিয়ে আল্লাহ বনু উবাইরিকের সামনে তওবা পেশ করলেন। বাগাভীও তাঁর ব্যাখ্যা শেষ করেন একই কথায়: এ আয়াতে তিনি তু'মার সামনে তওবা পেশ করছেন। ইবন কাসীর তিরমিযীর যে বর্ণনা উদ্ধৃত করেন, সেখানে এই কথাগুলোর ব্যাখ্যা মাত্র এক লাইনের: তারা আল্লাহর কাছে ক্ষমা চাইলে তিনি তাদের ক্ষমা করে দিতেন।"
          },
          {
            "en": "At-Tabari records a disagreement over whom the verse meant. Some said those Allah described in 4:107 as betraying themselves; others said those who argued for the traitors, the people addressed in 4:109. His own view is that it means everyone who does evil or wrongs himself, even though it came down about the traitors and their advocates. Ibn Kathir gives a report from Ibn Mardawayh, through al-Awfi from Ibn Abbas, applying it to those who came to the Prophet ﷺ in secret with the lie, and calls that telling gharib.",
            "bn": "আয়াতটি কাদের উদ্দেশে, তা নিয়ে তাবারী একটি মতভেদ উল্লেখ করেন। কেউ বলেছেন, ৪:১০৭ আয়াতে আল্লাহ যাদের নিজেদের সঙ্গে খিয়ানতকারী বলেছেন, তারাই। আবার কেউ বলেছেন, যারা খিয়ানতকারীদের পক্ষে তর্ক করেছিল, ৪:১০৯ আয়াতে যাদের সম্বোধন করা হয়েছে। তাবারীর নিজের মত, যে-ই মন্দ কাজ করে বা নিজের উপর যুলম করে, আয়াত তাদের সবার জন্য, যদিও নাযিল হয়েছে খিয়ানতকারী আর তাদের উকিলদের ব্যাপারে। ইবন কাসীর ইবন মারদাওয়াইহ থেকে আওফীর সূত্রে ইবন আব্বাসের একটি বর্ণনা আনেন। সেখানে আয়াতটি তাদের ব্যাপারে, যারা গোপনে মিথ্যা নিয়ে নবী ﷺ-এর কাছে এসেছিল। ইবন কাসীর এই বিবরণকে গরীব বলেন।"
          },
          {
            "en": "Al-Qurtubi adds two more lines. Ad-Dahhak said it came down about Wahshi, the killer of Hamzah (RA), who had associated partners with Allah and then came to the Prophet ﷺ saying he regretted it and asking whether there was repentance for him. And it is said, al-Qurtubi notes, that the verse is general for all creation. Wahshi's case, like the theft, describes one man's past and licenses nothing against anyone. The 4:109 article covers the arguing; this one, what stays open after it.",
            "bn": "কুরতুবী আরও দুটি কথা যোগ করেন। দাহহাক বলেছেন, আয়াতটি নাযিল হয়েছে হামযা (রাঃ)-এর হত্যাকারী ওয়াহশীকে নিয়ে। তিনি আল্লাহর সঙ্গে শিরক করেছিলেন, পরে নবী ﷺ-এর কাছে এসে বলেন, আমি অনুতপ্ত, আমার কি তওবার সুযোগ আছে? আর বলা হয়, কুরতুবী জানান, আয়াতটি সমস্ত সৃষ্টির জন্য ব্যাপক। চুরির ঘটনার মতো ওয়াহশীর ঘটনাও একজন মানুষের অতীতের কথা, কারও বিরুদ্ধে কোনো অনুমতি দেয় না। ৪:১০৯ আয়াতের লেখায় এসেছে তর্কাতর্কির কথা। এ লেখা তার পরে যা খোলা থাকে, তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Names for Wrong",
          "bn": "অন্যায়ের দুই নাম"
        },
        "p": [
          {
            "en": "The verse names two things joined by aw, or: su', evil, and zulm an-nafs, wronging oneself. The commentators divide them differently. Al-Qurtubi's report from Ibn Abbas reads the story into both: su' is to steal, and wronging oneself is to associate partners with Allah. Al-Baghawi's first gloss also starts from the theft but places the second word elsewhere: su' is the theft, and wronging oneself is the thief's casting of it on the innocent man.",
            "bn": "আয়াতে দুটি জিনিসের নাম, মাঝে আও, অর্থাৎ অথবা: সূ, মানে মন্দ কাজ, আর যুলমুন নাফস, মানে নিজের উপর যুলম। দুটোকে তাফসীরকারেরা ভাগ করেছেন ভিন্ন ভিন্নভাবে। কুরতুবীর আনা ইবন আব্বাসের ব্যাখ্যায় দুটোতেই ঘটনাটা আছে: সূ মানে চুরি করা, আর নিজের উপর যুলম মানে আল্লাহর সঙ্গে শিরক করা। বাগাভীর প্রথম ব্যাখ্যাও শুরু হয় চুরি দিয়ে, তবে দ্বিতীয় শব্দটা বসে অন্য জায়গায়। সূ হলো চুরি, আর নিজের উপর যুলম হলো চোরের সেই দোষ নির্দোষের ঘাড়ে চাপানো।"
          },
          {
            "en": "Al-Baghawi then gives a second view, introduced with it is said, that runs the other way from Ibn Abbas's: su' is shirk, and wronging oneself is a sin below shirk. So the same pair carries the greater and the lesser in either order, depending on the reader. At-Tabari keeps to the plain sense: su' is a sin, and wronging oneself is making the soul earn what deserves Allah's punishment. Al-Muyassar: an ugly, evil deed, or wronging the soul by doing what opposes Allah's ruling and law.",
            "bn": "এরপর বাগাভী 'বলা হয়' বলে আরেকটি মত আনেন, যা ইবন আব্বাসের ব্যাখ্যার উল্টো দিকে যায়। সেখানে সূ মানে শিরক, আর নিজের উপর যুলম মানে শিরকের চেয়ে ছোট গুনাহ। ফলে একই শব্দজোড়ায় বড় আর ছোট গুনাহ দুটোই আছে, কোনটা আগে তা পাঠকের ব্যাখ্যার উপর নির্ভর করে। তাবারী থাকেন সরল অর্থে: সূ হলো গুনাহ, আর নিজের উপর যুলম হলো নিজেকে দিয়ে এমন কিছু কামাই করানো, যাতে আল্লাহর শাস্তি প্রাপ্য হয়। মুয়াসসারের ভাষায়: কুৎসিত মন্দ কাজ, কিংবা আল্লাহর বিধান ও শরীয়তের বিরুদ্ধে গিয়ে নিজের উপর যুলম।"
          },
          {
            "en": "As-Sa'di explains why the pair bends so many ways. Used alone, each word covers every sin, minor and major, and wronging oneself covers shirk and what is below it. Paired, each takes the sense that suits it: su' here is the wrong that harms people, in their blood, wealth and honour, and wronging oneself is the sins between Allah and His servant. It is called wrong, he says, because the soul is not the servant's property but a trust from Allah, to be kept on the path of justice.",
            "bn": "শব্দজোড়াটা কেন এত দিকে ব্যাখ্যা নেয়, সা'দী তা বুঝিয়ে দেন। আলাদাভাবে এলে প্রতিটি শব্দই ছোট-বড় সব গুনাহকে ধরে, আর নিজের উপর যুলমের মধ্যে শিরক থেকে শুরু করে তার নিচের সবই পড়ে। একসঙ্গে এলে প্রত্যেকটি তার মানানসই অর্থ নেয়। তখন সূ হলো মানুষের ক্ষতি করে এমন যুলম, তাদের জান, মাল আর ইজ্জতের উপর। আর নিজের উপর যুলম হলো আল্লাহ ও বান্দার মাঝের গুনাহ। তাঁর মতে একে যুলম বলা হয়, কারণ নফস বান্দার নিজের সম্পত্তি নয়। তা আল্লাহর দেওয়া আমানত, যাকে ন্যায়ের পথে ধরে রাখতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Asking Contains",
          "bn": "ক্ষমা চাওয়ার ভেতরে যা থাকে"
        },
        "p": [
          {
            "en": "Thumma yastaghfiri Allah: then he seeks Allah's forgiveness. None of the commentators read here takes the verb as words alone. At-Tabari glosses it as turning to Allah in repentance, coming back from the evil and the self-wrong, and returning to the righteous deeds Allah loves, which erase the sin. Al-Baghawi: he repents to Him and asks His forgiveness. Al-Qurtubi is blunt: istighfar here means tawbah, for seeking forgiveness with the tongue without repentance does not benefit.",
            "bn": "সুম্মা ইয়াসতাগফিরিল্লাহ: তারপর সে আল্লাহর কাছে ক্ষমা চায়। এখানে যাঁদের তাফসীর পড়া হলো, তাঁদের কেউই ক্রিয়াটিকে শুধু মুখের কথা ধরেননি। তাবারীর ব্যাখ্যায় এর মানে তওবা করে আল্লাহর দিকে ফেরা। মন্দ কাজ আর নিজের উপর করা যুলম থেকে ফিরে আসা, আর আল্লাহ যেসব নেক আমল ভালোবাসেন সেদিকে ফিরে যাওয়া, যা গুনাহ মুছে দেয়। বাগাভী বলেন: তাঁর কাছে তওবা করে, তাঁর ক্ষমা চায়। কুরতুবী সোজাসাপ্টা: এখানে ইস্তিগফার মানে তওবা, কারণ তওবা ছাড়া শুধু জিহ্বার ইস্তিগফার কোনো কাজে আসে না।"
          },
          {
            "en": "As-Sa'di lists what a complete istighfar requires: admitting the sin, regretting it, leaving it, and resolving not to return to it. Al-Muyassar describes one who comes back to Allah regretting what he did, hoping for His forgiveness and for his sin to be covered. Beside the story, this is pointed. The Banu Ubayriq had used words to cover a theft, and 4:108 says they hid from people but not from Allah. The verse asks for words that uncover a wrong, spoken to the One from whom nothing was hidden.",
            "bn": "পূর্ণ ইস্তিগফারে কী কী লাগে, সা'দী তার তালিকা দেন: গুনাহ স্বীকার করা, তার জন্য অনুতপ্ত হওয়া, তা ছেড়ে দেওয়া, আর আবার না করার দৃঢ় সংকল্প। মুয়াসসার এমন একজনের ছবি আঁকে, যে নিজের কাজের জন্য অনুতপ্ত হয়ে আল্লাহর দিকে ফিরে আসে, তাঁর ক্ষমা আর নিজের গুনাহ ঢাকা পড়ার আশায়। ঘটনাটার পাশে রাখলে কথাটা আরও ধারালো হয়। বনু উবাইরিক কথা দিয়ে একটা চুরি ঢাকতে চেয়েছিল। ৪:১০৮ বলে, তারা মানুষের কাছে লুকায়, আল্লাহর কাছে নয়। আয়াতটি চায় এমন কথা, যা অন্যায়টা খুলে বলে, আর বলা হয় তাঁকে, যাঁর কাছে কিছুই লুকানো ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Will Find Allah",
          "bn": "সে আল্লাহকে পাবে"
        },
        "p": [
          {
            "en": "The promise sits in one verb: yajidi Allah, he will find Allah Forgiving, Merciful. At-Tabari spells out what is found: his Lord covering his sin by pardoning him the penalty of his crime, and merciful to him. As-Sa'di calls it a promise from the One who does not break His promise, and lists what follows. Allah forgives the sin, removes the deficiency and blemish it left, restores his earlier good deeds, and grants him success for the rest of his life, since what He forgives He forgives with all that follows from it.",
            "bn": "প্রতিশ্রুতিটা একটি ক্রিয়ায়: ইয়াজিদিল্লাহ, সে আল্লাহকে পাবে ক্ষমাশীল, দয়ালু। কী পাওয়া যাবে, তাবারী তা খুলে বলেন: তার রব অপরাধের শাস্তি মাফ করে দিয়ে তার গুনাহ ঢেকে দেবেন, আর তার প্রতি দয়া করবেন। সা'দী একে বলেন সেই সত্তার প্রতিশ্রুতি, যিনি কখনো ওয়াদা ভাঙেন না। এরপর যা যা হয়, তিনি তা গুনে দেন। আল্লাহ গুনাহটা মাফ করেন। তার ফলে যে ঘাটতি আর দাগ পড়েছিল তা সরিয়ে দেন। আগের নেক আমলগুলো ফিরিয়ে দেন। বাকি জীবনে তাওফীক দেন। কারণ যা তিনি মাফ করেন, তার সঙ্গে জড়ানো সবকিছুই মাফ করেন।"
          },
          {
            "en": "Ibn Kathir opens plainly: Allah tells of His generosity, that whoever repents to Him, He turns to him, whatever the sin. Then Ibn Abbas, through Ali ibn Abi Talhah: Allah informs His servants of His forbearance, pardon, generosity and the breadth of His mercy, so whoever commits a sin, small or great, and then seeks forgiveness will find Him so, even if his sins were greater than the heavens, the earth and the mountains. Ma'arif al-Qur'an reads it as a guard against sinners' total despair.",
            "bn": "ইবন কাসীর শুরু করেন সোজা কথায়: আল্লাহ নিজের দয়া আর বদান্যতার খবর দিচ্ছেন। যে তাঁর কাছে তওবা করে, গুনাহ যা-ই হোক, তিনি তার তওবা কবুল করেন। এরপর তিনি আলী ইবন আবী তালহার সূত্রে ইবন আব্বাসের কথা আনেন। আল্লাহ বান্দাদের জানাচ্ছেন তাঁর সহনশীলতা, ক্ষমা, বদান্যতা আর রহমতের প্রশস্ততার কথা। তাই ছোট হোক বা বড়, কেউ গুনাহ করে তারপর ক্ষমা চাইলে আল্লাহকে এমনই পাবে, তার গুনাহ আসমান, জমিন আর পাহাড়ের চেয়ে বড় হলেও। মাআরিফুল কুরআনের চোখে আয়াতটি গুনাহগারকে পুরোপুরি নিরাশ হওয়া থেকে আগলে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Read Beside Its Companions",
          "bn": "সঙ্গী আয়াতের পাশে পড়া"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir record Abdullah ibn Mas'ud (RA) answering a man who envied the Children of Israel. When one of them sinned, he would wake to find the expiation for that sin written on his door. Ibn Mas'ud answered that Muslims had been given better: water made a purification, and 3:135, on those who remember Allah after an indecency and seek forgiveness, and this verse. In al-Qurtubi, Ibn Mas'ud pairs it with 4:64: whoever reads these two verses of an-Nisa and then seeks forgiveness is forgiven.",
            "bn": "তাবারী ও ইবন কাসীর আবদুল্লাহ ইবন মাসঊদ (রাঃ)-এর একটি জবাব লিপিবদ্ধ করেন। এক লোক বনী ইসরাঈলকে ঈর্ষা করছিল। তাদের কেউ গুনাহ করলে সকালে উঠে দেখত, দরজায় সেই গুনাহর কাফফারা লেখা আছে। ইবন মাসঊদ জবাব দিলেন, আল্লাহ তোমাদের এর চেয়ে ভালো জিনিস দিয়েছেন। পানিকে করেছেন পবিত্রতার উপায়। আর দিয়েছেন ৩:১৩৫ আয়াত, যেখানে আছে অশ্লীল কাজের পর আল্লাহকে স্মরণ করে ক্ষমা চাওয়ার কথা, আর এই আয়াতটি। কুরতুবীতে ইবন মাসঊদ একে জুড়ে দেন ৪:৬৪ আয়াতের সঙ্গে: সূরা নিসার এ দুটি আয়াত পড়ে যে ক্ষমা চায়, তাকে ক্ষমা করা হয়।"
          },
          {
            "en": "At-Tabari and Ibn Kathir also record, through Habib ibn Abi Thabit, a woman who came to Abdullah ibn Mughaffal (RA) asking about a woman who had committed fornication, become pregnant, and killed her child at birth. He answered: what of her? The Fire is hers. She turned away weeping. He called her back and said he saw her case as only one of two matters, and recited this verse. She wiped her eyes and went on her way. At-Tabari's editor counts it among the finest reports of a jurist's insight.",
            "bn": "তাবারী ও ইবন কাসীর হাবীব ইবন আবী সাবিতের সূত্রে আরেকটি ঘটনা আনেন। এক মহিলা আবদুল্লাহ ইবন মুগাফফাল (রাঃ)-এর কাছে এসে জানতে চাইল এমন এক নারীর কথা, যে ব্যভিচার করে গর্ভবতী হয়েছিল, আর সন্তান জন্মানোর পর তাকে মেরে ফেলেছিল। তিনি বললেন, তার আর কী, তার জন্য তো জাহান্নাম। মহিলা কাঁদতে কাঁদতে ফিরে গেল। তিনি তাকে ডেকে আনলেন। বললেন, তোমার ব্যাপারটা আমি দুটি বিষয়ের একটি ছাড়া আর কিছু দেখছি না। তারপর এই আয়াতটি পড়লেন। মহিলা চোখ মুছে চলে গেল। তাবারীর সম্পাদক একে ফকীহর প্রজ্ঞা দেখানো সুন্দরতম বর্ণনাগুলোর একটি বলেছেন।"
          },
          {
            "en": "The narration Ibn Kathir and al-Qurtubi attach to this verse comes from Abu Bakr (RA), through Ali (RA). At-Tirmidhi (406) records Ali saying that Abu Bakr told him, and Abu Bakr told the truth, that he heard the Messenger of Allah ﷺ say: \"There is no man who commits a sin, then stands and purifies himself, then prays, then seeks forgiveness from Allah, except that Allah forgives him.\" In at-Tirmidhi's wording he then recited 3:135. At-Tirmidhi graded it hasan. Ibn Kathir quotes Imam Ahmad's version, in which both verses are recited, and notes that its chain has been criticised.",
            "bn": "ইবন কাসীর ও কুরতুবী এ আয়াতের সঙ্গে যে হাদীস আনেন, তা আবূ বকর (রাঃ)-এর, আলী (রাঃ)-এর সূত্রে। তিরমিযী (৪০৬) আলীর কথা লিপিবদ্ধ করেন: আবূ বকর আমাকে বলেছেন, আর আবূ বকর সত্য বলেছেন, তিনি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছেন: \"যে লোকই কোনো গুনাহ করে, তারপর উঠে পবিত্রতা অর্জন করে, তারপর সালাত আদায় করে, তারপর আল্লাহর কাছে ক্ষমা চায়, আল্লাহ তাকে ক্ষমা করে দেন।\" তিরমিযীর বর্ণনায় এরপর তিনি পড়েন ৩:১৩৫ আয়াত। তিরমিযী একে হাসান বলেছেন। ইবন কাসীর ইমাম আহমাদের বর্ণনা উদ্ধৃত করেন, যেখানে দুটি আয়াতই পড়া হয়েছে, আর জানান যে এর সনদ নিয়ে আপত্তি উঠেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Door Still to Be Walked",
          "bn": "খোলা দরজা, পা বাড়ানো বাকি"
        },
        "p": [
          {
            "en": "At-Tirmidhi's narration ends two ways. When the verses came down, the weapons were returned to Rifa'ah, who said they were for the cause of Allah, and Qatadah knew his uncle's Islam was sound. And Bashir, of the Banu Ubayriq, left to join the polytheists, and 4:115 came down. The door had been offered to that household; the report shows that an open door must still be walked through. It is one man in one report, and it licenses no verdict on anyone living.",
            "bn": "তিরমিযীর বর্ণনা শেষ হয় দুই রকমে। আয়াতগুলো নাযিল হওয়ার পর অস্ত্রগুলো রিফাআর কাছে ফেরত দেওয়া হয়। তিনি বললেন, এগুলো আল্লাহর পথে দিলাম। কাতাদা তখন বুঝলেন, চাচার ইসলাম খাঁটি। আর বনু উবাইরিকের বাশীর চলে গেল মুশরিকদের কাছে, তখন নাযিল হয় ৪:১১৫ আয়াত। দরজাটা ওই পরিবারের সামনেই খোলা হয়েছিল। বর্ণনাটা দেখায়, দরজা খোলা থাকলেও ভেতরে পা রাখতে হয় নিজেকেই। এটি এক বর্ণনায় একজন মানুষের কথা। জীবিত কারও ব্যাপারে কোনো রায় দেওয়ার অনুমতি এ থেকে মেলে না।"
          },
          {
            "en": "For a reader, the verse does not ask, before it promises, whether the wrong landed on others or on oneself, lesser or greater. It asks for the turn. As-Sa'di's conditions and al-Qurtubi's warning keep that turn honest: words spoken over a sin still held onto are not what the verse describes. And the next two verses close the other road, 4:111 on the sin earned only against oneself, and 4:112 on whoever casts it on an innocent.",
            "bn": "পাঠকের কাছে আয়াতটি আগে জানতে চায় না, অন্যায়টা অন্যের উপর পড়েছে না নিজের উপর, ছোট ছিল না বড়। সে শুধু ফিরে আসাটা চায়। সা'দীর শর্তগুলো আর কুরতুবীর সতর্কবাণী সেই ফেরাকে খাঁটি রাখে। যে গুনাহ আঁকড়ে রাখার ইচ্ছা আছে, তার উপর কিছু কথা আওড়ানো এ আয়াতের বর্ণনা নয়। আর পরের দুটি আয়াত অন্য পথটা বন্ধ করে দেয়। ৪:১১১ বলে, গুনাহর কামাই শুধু নিজের বিরুদ্ধেই যায়। ৪:১১২ বলে তার কথা, যে সেই দোষ নির্দোষের ঘাড়ে চাপায়।"
          }
        ]
      }
    ]
  },
  "4:116": {
    "sections": [
      {
        "h": {
          "en": "A Sentence That Comes Twice",
          "bn": "দুবার আসা একটি বাক্য"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and this verse belongs to its closing stretch of warnings. 4:115 speaks of whoever opposes the Messenger after guidance has become clear to him and follows a way other than the way of the believers. Then 4:116 names the one thing that is not forgiven. From 4:117 onward the surah turns to what the idolaters actually call upon, and to Shaytan's boast that he will take an appointed portion of Allah's servants.",
            "bn": "সূরা আন-নিসা মাদানি সূরা, আর এই আয়াতটি তার শেষ দিকের হুঁশিয়ারির অংশে পড়ে। ৪:১১৫ আয়াত বলে তার কথা, যে হিদায়াত স্পষ্ট হয়ে যাওয়ার পরও রাসূলের বিরোধিতা করে আর মুমিনদের পথ ছেড়ে অন্য পথ ধরে। এরপর ৪:১১৬ আয়াত সেই একটি জিনিসের নাম বলে, যা মাফ করা হয় না। ৪:১১৭ আয়াত থেকে সূরা ফেরে সেদিকে, মুশরিকরা আসলে কাকে ডাকে; আর শয়তানের সেই দম্ভোক্তির দিকে, সে আল্লাহর বান্দাদের থেকে নির্দিষ্ট একটি অংশ নিয়ে নেবে।"
          },
          {
            "en": "The sentence is not new here. The same words stood earlier in the same surah at 4:48, and the two verses differ only at the end: 4:48 closes by saying that whoever associates partners with Allah has fabricated a tremendous sin, while 4:116 closes by saying that he has gone far astray. Ibn Kathir opens his comment on 4:116 by noting that he has already discussed the sentence, and the relevant narrations, at the beginning of this surah.",
            "bn": "বাক্যটি এখানে নতুন নয়। একই কথা এই সূরাতেই আগে এসেছে ৪:৪৮ আয়াতে, আর দুই আয়াতের পার্থক্য কেবল শেষে। ৪:৪৮ আয়াত শেষ হয় এই বলে যে, যে আল্লাহর সঙ্গে শরীক করে সে এক মহা গুনাহ রচনা করল। আর ৪:১১৬ আয়াত শেষ হয় এই বলে যে, সে বহু দূরের গোমরাহিতে পড়ে গেল। ইবনে কাসীর ৪:১১৬ আয়াতের ব্যাখ্যা শুরু করেন এ কথা মনে করিয়ে দিয়ে যে বাক্যটি নিয়ে এবং এর সঙ্গে জড়িত বর্ণনাগুলো নিয়ে তিনি এই সূরার শুরুতেই আলোচনা করেছেন।"
          },
          {
            "en": "He also explains, in his comment on the killing of a believer, why it comes twice. The sentence is general and covers every sin except shirk, he says, and it has been placed in this surah both before that passage and after it in order to encourage hope in Allah. So the repetition is deliberate. A surah full of rulings, warnings and threats has this one sentence set down twice inside it, like a lamp left burning at both ends of a dark corridor.",
            "bn": "মুমিন হত্যার আলোচনায় তিনি এ-ও বুঝিয়ে দেন, বাক্যটি দুবার আসে কেন। তিনি বলেন, কথাটি সাধারণ, শিরক ছাড়া সব গুনাহকেই এর আওতায় আনে; আর এই সূরায় ওই অংশের আগেও এবং পরেও তা রাখা হয়েছে আল্লাহর ব্যাপারে আশা জাগানোর জন্য। অর্থাৎ পুনরাবৃত্তিটি ইচ্ছাকৃত। বিধান, সতর্কবাণী আর হুঁশিয়ারিতে ভরা একটি সূরার ভেতরে এই একটি বাক্য দুবার বসানো হয়েছে, যেন অন্ধকার এক করিডোরের দুই মাথায় দুটি বাতি জ্বালিয়ে রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Less Than That",
          "bn": "এর নিচে যা কিছু"
        },
        "p": [
          {
            "en": "The verse is built as a denial followed by an affirmation, and the order matters. First: Allah does not forgive that partners be set up with Him. The Arabic puts the associating in the passive, an yushraka bihi, so the sentence is about the act rather than about any named person. Then the affirmation: and He forgives ma duna dhalik, what is less than that. Everything the reader might be afraid of falls on the second side of the sentence, not the first.",
            "bn": "আয়াতটি গড়া হয়েছে আগে অস্বীকার, পরে স্বীকৃতি; আর ক্রমটাই গুরুত্বপূর্ণ। প্রথমে: আল্লাহ তাঁর সঙ্গে শরীক করা ক্ষমা করেন না। আরবিতে শরীক করার কথাটি এসেছে কর্মবাচ্যে, আন ইউশরাকা বিহি। তাই বাক্যটি কোনো নির্দিষ্ট মানুষকে নিয়ে নয়, কাজটিকে নিয়ে। এরপর স্বীকৃতি: আর তিনি মাফ করেন মা দূনা যালিক, অর্থাৎ এর নিচে যা কিছু। পাঠক যা কিছু নিয়ে ভয় পেতে পারেন, তার সবই পড়ে বাক্যের দ্বিতীয় দিকে, প্রথম দিকে নয়।"
          },
          {
            "en": "The second clause is not open-ended either. It ends li man yasha', for whom He wills, and that phrase is doing real work. It keeps forgiveness as a gift and not as an entitlement that a person can calculate and then bank on. A servant who reads only the first clause becomes hopeless; a servant who reads the second clause without its ending becomes careless. The verse gives no room for either, and the commentators keep both halves side by side.",
            "bn": "দ্বিতীয় কথাটিও শর্তহীন নয়। তার শেষে আছে লিমাই ইয়াশাউ, অর্থাৎ যাকে তিনি চান; আর এই কথাটুকুর ওজন অনেক। এটি মাগফিরাতকে দান হিসেবেই রাখে, এমন পাওনা হিসেবে নয়, যা হিসাব কষে আগে থেকেই নিশ্চিত ধরে নেওয়া যায়। যে বান্দা কেবল প্রথম কথাটি পড়ে, সে নিরাশ হয়ে পড়ে। যে দ্বিতীয় কথাটি পড়ে কিন্তু তার শেষটুকু বাদ দেয়, সে বেপরোয়া হয়ে যায়। আয়াত এর কোনোটিরই সুযোগ রাখে না, আর মুফাসসিরগণও দুই অংশকে পাশাপাশিই রাখেন।"
          },
          {
            "en": "The close names the loss rather than the penalty: whoever associates others with Allah has strayed a far straying, dalla dalalan ba'ida. It is a picture of distance. The idea is not only that a rule has been broken but that a person has walked a long way from the road, and the further he goes the harder the way back becomes. The verse at 4:48, with its different ending, adds the other angle: the act is not only a distance travelled but a tremendous sin fabricated.",
            "bn": "শেষে আয়াত শাস্তির নাম নেয় না, ক্ষতির নাম নেয়: যে আল্লাহর সঙ্গে শরীক করে সে দূরের গোমরাহিতে পড়ে গেল, দাল্লা দালালাম বাঈদা। এ হলো দূরত্বের ছবি। কথাটা শুধু এই নয় যে কোনো বিধান ভাঙা হয়েছে, বরং মানুষটি রাস্তা থেকে বহু দূরে হেঁটে চলে গেছে; আর যত দূরে যায়, ফেরার পথ তত কঠিন হয়। ভিন্ন সমাপ্তি নিয়ে ৪:৪৮ আয়াত যোগ করে আরেক দিক: কাজটি কেবল পেরিয়ে আসা দূরত্ব নয়, মনগড়া এক মহা গুনাহও বটে।"
          }
        ]
      },
      {
        "h": {
          "en": "As the Commentators Read It",
          "bn": "মুফাসসিরগণ যেভাবে পড়েন"
        },
        "p": [
          {
            "en": "Ibn Kathir's gloss on the first clause is precise, and it is the key to the whole verse. Allah does not forgive a servant, he writes, if he meets Him while he is associating partners with Him. The heading he gives the section says the same thing from the other side: that shirk is not forgiven except after repenting from it. So the closed door in this verse is the door of a man who arrives at his meeting with Allah still carrying it, not the door of a man who put it down and turned back.",
            "bn": "প্রথম কথাটির ওপর ইবনে কাসীরের ব্যাখ্যা নিখুঁত, আর এখানেই গোটা আয়াতের চাবি। তিনি লেখেন, আল্লাহ সেই বান্দাকে ক্ষমা করেন না, যে শিরক নিয়েই তাঁর সঙ্গে সাক্ষাৎ করে। তিনি এই অংশের যে শিরোনাম দেন তাতেও একই কথা উল্টো দিক থেকে বলা: শিরক মাফ হয় না, তবে তা থেকে তওবা করলে ভিন্ন কথা। অর্থাৎ এই আয়াতের বন্ধ দরজাটি তার, যে শিরক নিয়েই আল্লাহর সাক্ষাতে গিয়ে হাজির হয়; যে তা নামিয়ে রেখে ফিরে এসেছে তার নয়।"
          },
          {
            "en": "On the closing words he writes that such a person has taken a path other than the true one, deviated from guidance and right conduct, ruined himself in this life and the next, and lost contentment in both. Al-Muyassar renders the verse as plainly as possible: Allah does not forgive that partners be set up with Him, and He forgives sins other than shirk for whom He wills of His servants; and whoever makes for Allah, the One, a partner from among His creation has gone far away from the truth.",
            "bn": "শেষ কথাগুলোর ব্যাখ্যায় তিনি লেখেন, এমন মানুষ সত্য পথ ছেড়ে অন্য পথ ধরেছে, হিদায়াত ও সঠিক আচরণ থেকে সরে গেছে, দুনিয়া ও আখিরাত দুই জায়গাতেই নিজেকে ধ্বংস করেছে, আর দুই জায়গার প্রশান্তিই হারিয়েছে। আল-মুয়াসসার আয়াতটিকে যতটা সম্ভব সহজ করে বলে: আল্লাহ তাঁর সঙ্গে শরীক করা ক্ষমা করেন না, আর শিরক ছাড়া বাকি গুনাহ তিনি তাঁর বান্দাদের মধ্যে যাকে ইচ্ছা মাফ করেন; আর যে এক ও অদ্বিতীয় আল্লাহর জন্য তাঁরই সৃষ্টির কাউকে শরীক বানায়, সে সত্য থেকে বহু দূরে সরে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Narrations, Two Directions",
          "bn": "দুই বর্ণনা, দুই দিক"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches to this sentence a report of Abu Dharr (RA) recorded by Imam Ahmad, in which Allah says to His servant that if he comes to Him with the earth's fill of sins, so long as he did not associate anything with Him, He will meet him with its fill of forgiveness. That is the second clause of the verse turned into a scene. The measure is absurd on purpose: whatever quantity of sin a person can imagine, the forgiveness offered is of the same size.",
            "bn": "এই বাক্যটির সঙ্গে ইবনে কাসীর ইমাম আহমাদের সূত্রে আবু যর (রাঃ)-এর একটি বর্ণনা যুক্ত করেন। তাতে আল্লাহ তাঁর বান্দাকে বলেন, সে যদি পৃথিবীভর্তি গুনাহ নিয়েও তাঁর কাছে আসে, অথচ তাঁর সঙ্গে কিছুকে শরীক না করে থাকে, তবে তিনিও তার সামনে আসবেন পৃথিবীভর্তি মাগফিরাত নিয়ে। এ যেন আয়াতের দ্বিতীয় কথাটিকে দৃশ্য বানিয়ে দেখানো। মাপটা ইচ্ছা করেই এত বড় করা: মানুষ যত পরিমাণ গুনাহের কথা ভাবতে পারে, মাগফিরাতের প্রস্তাবটিও ঠিক তত বড়।"
          },
          {
            "en": "The first clause has its own narration. Ibn Kathir reports from Ibn Mas'ud (RA), in the Two Sahihs, that he asked the Messenger of Allah ﷺ which sin is greatest, and was answered: that you set up a rival to Allah, while He alone created you. The reason is inside the answer. What makes it the greatest is not its size as an act but the relationship it denies, since the one addressed owes his very existence to the One he is now placing somebody beside.",
            "bn": "প্রথম কথাটিরও নিজের একটি বর্ণনা আছে। ইবনে কাসীর সহীহ বুখারী ও সহীহ মুসলিমে ইবনে মাসউদ (রাঃ) থেকে আনেন, তিনি রাসূলুল্লাহ ﷺ-কে জিজ্ঞেস করেছিলেন, সবচেয়ে বড় গুনাহ কোনটি। জবাব এলো: তুমি আল্লাহর সমকক্ষ দাঁড় করাবে, অথচ তিনিই তোমাকে সৃষ্টি করেছেন। কারণটা জবাবের ভেতরেই আছে। কাজটি সবচেয়ে বড় তার আকারের কারণে নয়, বরং এটি যে সম্পর্কটিকে অস্বীকার করে তার কারণে; কারণ যাকে বলা হচ্ছে, তার অস্তিত্বই তো তাঁর দান, যাঁর পাশে সে এখন আরেকজনকে বসাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Despair Nor Presumption",
          "bn": "না নিরাশা, না নিশ্চিন্ততা"
        },
        "p": [
          {
            "en": "Read carelessly, this verse can be made to say two false things. The first is that a person who has fallen into shirk has no way back, which is not what the commentators say: Ibn Kathir's own heading ties the non-forgiveness to meeting Allah in that state, and the Quran's whole call is to people who were upon it and left it. The second is that everything else is automatically covered, which the phrase for whom He wills quietly refuses.",
            "bn": "অসাবধানে পড়লে এই আয়াত দিয়ে দুটি ভুল কথা বলানো যায়। প্রথমটি, যে শিরকে পড়ে গেছে তার আর ফেরার পথ নেই। মুফাসসিরগণ তা বলেন না। ইবনে কাসীরের নিজের শিরোনামই মাফ না হওয়ার কথাটিকে বেঁধে দেয় ওই অবস্থায় আল্লাহর সাক্ষাতে যাওয়ার সঙ্গে; আর কুরআনের গোটা ডাকই তো সেই মানুষদের প্রতি, যারা এতে ছিল এবং তা ছেড়ে এসেছে। দ্বিতীয় ভুল কথাটি, বাকি সবকিছু আপনাআপনি মাফ হয়ে যায়। যাকে তিনি চান, এই কথাটি চুপচাপ সেটিকে নাকচ করে দেয়।"
          },
          {
            "en": "Held together, the two clauses produce a particular posture: asking hard, and not assuming. This does not contradict 4:110, six verses earlier, which promises that whoever does a wrong or wrongs himself and then seeks Allah's forgiveness will find Allah Forgiving and Merciful. That verse describes the servant who turns; this one describes the state a servant must not be carrying when he arrives. One says come back and you will find Him; the other says there is one thing you may not bring with you.",
            "bn": "দুই কথাকে একসঙ্গে ধরলে একটা নির্দিষ্ট ভঙ্গি তৈরি হয়: প্রাণপণে চাওয়া, আর ধরে না নেওয়া। এটি ছয় আয়াত আগের ৪:১১০ আয়াতের বিরুদ্ধে যায় না। সেখানে ওয়াদা আছে, যে মন্দ কাজ করে বা নিজের প্রতি জুলুম করে, তারপর আল্লাহর কাছে ক্ষমা চায়, সে আল্লাহকে ক্ষমাশীল ও দয়াময় পাবে। ওই আয়াত সেই বান্দার কথা বলে যে ফিরে আসে; এই আয়াত বলে সেই অবস্থার কথা, যা নিয়ে বান্দার পৌঁছানো চলবে না। একটি বলে, ফিরে এসো, তাঁকে পাবে। অন্যটি বলে, একটি জিনিস সঙ্গে নিয়ে আসা যাবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses on the Same Line",
          "bn": "একই সুতোয় গাঁথা আয়াত"
        },
        "p": [
          {
            "en": "4:48 is the same sentence with a different close, and reading the two together shows what the surah wanted repeated. 31:13 puts the matter in a father's mouth: Luqman tells his son not to associate anything with Allah, because association is a great wrong. 39:53 calls out to the servants who went to excess against themselves, telling them not to despair of Allah's mercy, for Allah forgives all sins, and He is the Forgiving, the Merciful.",
            "bn": "৪:৪৮ আয়াত একই বাক্য, কেবল শেষটা আলাদা; দুটি একসঙ্গে পড়লে বোঝা যায় সূরা কোন কথাটি বারবার শোনাতে চেয়েছে। ৩১:১৩ আয়াত বিষয়টি রাখে এক বাবার মুখে। লুকমান তাঁর ছেলেকে বলেন, আল্লাহর সঙ্গে কোনো কিছুকে শরীক করো না, কারণ শিরক বিরাট জুলুম। ৩৯:৫৩ আয়াত ডাক দেয় সেই বান্দাদের, যারা নিজেদের ওপর বাড়াবাড়ি করেছে; বলে, আল্লাহর রহমত থেকে নিরাশ হয়ো না, আল্লাহ সব গুনাহ মাফ করে দেন, তিনি ক্ষমাশীল, দয়াময়।"
          },
          {
            "en": "25:70 shows what a return can produce: for those who repent, believe and do righteous work, Allah will replace their evil deeds with good. 4:31 offers the other kind of hope, a working one: if you avoid the major sins you are forbidden, We will remove from you your lesser sins and admit you to a noble entrance. And 53:32 keeps the balance from tipping into self-satisfaction, saying that your Lord is vast in forgiveness, and then telling people not to claim purity for themselves.",
            "bn": "২৫:৭০ আয়াত দেখায়, ফিরে আসা কী তৈরি করতে পারে: যারা তওবা করে, ঈমান আনে আর ভালো কাজ করে, আল্লাহ তাদের মন্দ আমলগুলোকে নেকিতে বদলে দেবেন। ৪:৩১ আয়াত অন্য ধরনের আশা দেয়, হাতে-কলমে করার মতো আশা: নিষিদ্ধ বড় গুনাহগুলো থেকে বেঁচে থাকলে আল্লাহ ছোট গুনাহগুলো মুছে দেবেন আর সম্মানের জায়গায় প্রবেশ করাবেন। আর ৫৩:৩২ আয়াত ভারসাম্যটিকে আত্মতৃপ্তির দিকে হেলে পড়তে দেয় না; বলে, তোমার প্রতিপালক ক্ষমার ব্যাপারে অতি প্রশস্ত, তারপরই বলে, নিজেদের পবিত্র বলে দাবি করো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarding the One Thing",
          "bn": "একটি জিনিস আগলে রাখা"
        },
        "p": [
          {
            "en": "Since one thing is not forgiven, the sensible life is organised around guarding that one thing. That is less abstract than it sounds. Tawhid is tested in ordinary places: what a person turns to first when he is frightened, whose approval decides his choices, what he believes is really moving his income and his health, and whether he calls on anyone besides Allah when he is desperate. Those are the places to check, calmly and by yourself.",
            "bn": "যেহেতু একটি জিনিস মাফ হয় না, বুদ্ধিমান মানুষ নিজের জীবন সাজায় সেই একটি জিনিস আগলে রাখার চারপাশে। কথাটা শুনতে যতটা তত্ত্বকথা মনে হয়, আসলে ততটা নয়। তাওহিদের পরীক্ষা হয় খুব সাধারণ জায়গায়: ভয় পেলে মানুষ সবার আগে কার দিকে ফেরে, কার সন্তুষ্টি তার সিদ্ধান্ত ঠিক করে দেয়, তার রিযিক আর স্বাস্থ্য আসলে কে চালাচ্ছে বলে সে মনে করে, আর নিরুপায় অবস্থায় সে আল্লাহ ছাড়া আর কাউকে ডাকে কিনা। এই জায়গাগুলোই ঠান্ডা মাথায় নিজে নিজে মিলিয়ে দেখার।"
          },
          {
            "en": "The second duty is how the verse is used on other people. It is a statement about Allah's judgement, not a licence for a reader to sort his neighbours into the forgiven and the doomed. Ibn Kathir's careful wording is about a servant meeting his Lord, and none of us watches that meeting. The verse is given to a person for his own heart, and the moment it becomes a weapon it has been turned exactly the wrong way round.",
            "bn": "দ্বিতীয় দায়িত্ব হলো, অন্য মানুষের বেলায় এই আয়াত কীভাবে ব্যবহার করবেন। আয়াতটি আল্লাহর ফয়সালার কথা বলে; প্রতিবেশীদের কে মাফ পাবে আর কে ধ্বংস হবে, তা ভাগ করার অনুমতি পাঠককে দেয় না। ইবনে কাসীর মেপে মেপে যা বলেছেন, তা এক বান্দার তার রবের সঙ্গে সাক্ষাতের কথা, আর সেই সাক্ষাৎ আমরা কেউ দেখি না। আয়াতটি মানুষকে দেওয়া হয়েছে তার নিজের অন্তরের জন্য। যে মুহূর্তে একে অস্ত্র বানানো হয়, সেই মুহূর্তেই একে ঠিক উল্টো দিকে ঘুরিয়ে ফেলা হলো।"
          },
          {
            "en": "And the third is what to do with the wide half. A believer who has understood this verse should ask for forgiveness more, not less, and ask for specific things rather than in general: the debt not repaid, the tongue that cut somebody, the prayer given up for a year, the habit nobody knows about. Name it and ask. The verse guarantees nothing to the calculating, but it removes every excuse from the one who wants to come back.",
            "bn": "আর তৃতীয় কথা, প্রশস্ত অর্ধেকটা নিয়ে কী করতে হবে। যে মুমিন এই আয়াত বুঝেছেন, তাঁর ক্ষমা চাওয়া কমার কথা নয়, বাড়ার কথা; আর ঢালাওভাবে নয়, নির্দিষ্ট করে চাওয়ার কথা। যে ধার শোধ করা হয়নি, যে কথা কাউকে কেটে গেছে, যে নামাজ এক বছর ছেড়ে দেওয়া হয়েছিল, যে অভ্যাসের কথা কেউ জানে না। নাম ধরে বলুন, আর চান। হিসাব কষে বসে থাকা মানুষকে আয়াত কোনো নিশ্চয়তা দেয় না, কিন্তু যে ফিরে আসতে চায় তার সব অজুহাত কেড়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Vocabulary",
          "bn": "আয়াতের শব্দে প্রার্থনা"
        },
        "p": [
          {
            "en": "The verse holds no supplication, so what follows is not a Sunnah du'a but a short prayer composed from its own words, to be read as that. O Allah, You are the One beside whom nothing may be placed. Keep our hearts from setting anything up with You, openly or secretly. Forgive us what is less than that, for You forgive whom You will. And do not let us walk so far from Your way that we lose the road back.",
            "bn": "আয়াতে কোনো দু'আ নেই। তাই নিচের কথাগুলো সুন্নাহর দু'আ নয়, আয়াতের নিজের শব্দ দিয়ে গড়া ছোট প্রার্থনা, সেভাবেই পড়ুন। হে আল্লাহ, আপনিই সেই সত্তা, যাঁর পাশে কাউকে বসানো যায় না। আমাদের অন্তরকে রক্ষা করুন, যেন প্রকাশ্যে বা গোপনে কোনো কিছুকে আপনার সঙ্গে শরীক না করে। এর নিচে যা কিছু আছে তা আমাদের মাফ করে দিন, কারণ আপনি যাকে চান তাকেই মাফ করেন। আর আমাদের আপনার পথ থেকে এত দূরে হেঁটে যেতে দেবেন না যে ফেরার রাস্তাটাই হারিয়ে ফেলি।"
          },
          {
            "en": "Each line answers a phrase. The first and second answer the clause about setting up partners. The third takes its exact wording from what is less than that, for whom He wills, so that the asking stays a request and does not slide into a claim. The last answers the closing image of a far straying. Said after reading the verse, it keeps hope and fear in the same breath, which is how the commentators keep them.",
            "bn": "প্রতিটি লাইন আয়াতের একেকটি কথার জবাব। প্রথম দুটি লাইন শরীক করার কথাটির জবাব। তৃতীয়টির শব্দ হুবহু নেওয়া আয়াতের এই অংশ থেকে: এর নিচে যা কিছু, যাকে তিনি চান। এতে চাওয়াটা চাওয়াই থাকে, দাবি হয়ে যায় না। শেষ লাইনটি আয়াতের শেষের ছবিটির জবাব, পথ থেকে বহু দূরে হারিয়ে যাওয়া। আয়াত পড়ার পর এটি পড়লে আশা আর ভয় একই নিঃশ্বাসে থাকে, মুফাসসিরগণও দুটিকে এভাবেই একসঙ্গে ধরে রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry Home",
          "bn": "ঘরে নিয়ে যাওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "When I quote this verse to myself, which half do I usually reach for, and what does that tell me about the state I am actually in? Is there anything in my life that receives the fear, the hope or the obedience that belongs to Allah alone? When something frightens me at two in the morning, who do I turn to first, and how honest is that answer?",
            "bn": "নিজেকে এই আয়াত মনে করিয়ে দেওয়ার সময় আমি সাধারণত কোন অর্ধেকটা বেছে নিই? তাতে আমার আসল অবস্থাটা কী বোঝা যায়? আমার জীবনে কি এমন কিছু আছে, যাকে আমি সেই ভয়, সেই আশা বা সেই আনুগত্য দিচ্ছি, যা কেবল আল্লাহর প্রাপ্য? রাত দুটোয় কিছু একটা আমাকে ভয় পাইয়ে দিলে আমি সবার আগে কার কাছে ছুটি, আর এই উত্তরটা আমি কতটা সৎভাবে দিচ্ছি?"
          },
          {
            "en": "Since forgiveness is tied to His will and not to my arithmetic, how should that change the way I ask for it tonight? Which particular sin have I never once named in a du'a, and why? And have I ever used this verse to place another person outside mercy, when it was given to me for my own heart?",
            "bn": "মাগফিরাত যেহেতু আমার হিসাবের সঙ্গে নয়, তাঁর ইচ্ছার সঙ্গে বাঁধা, আজ রাতে আমার চাওয়ার ধরনটা তাতে কেমন বদলানো উচিত? কোন নির্দিষ্ট গুনাহের নাম আমি কোনোদিন দু'আয় একবারও উচ্চারণ করিনি, আর কেন? আর এই আয়াত দিয়ে আমি কি কখনো অন্য কাউকে রহমতের বাইরে ঠেলে দিয়েছি, অথচ তা আমাকে দেওয়া হয়েছিল আমার নিজের অন্তরের জন্য?"
          }
        ]
      }
    ]
  },
  "4:125": {
    "sections": [
      {
        "h": {
          "en": "The Answer to a Boast",
          "bn": "দাবির জবাবে"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and this verse sits at the end of a short argument about who will be saved. 4:123 refuses the shortcut: it will not go by your wishful thinking nor that of the People of the Scripture, and whoever does a wrong is repaid for it. 4:124 gives the promise to whoever does righteous deeds, male or female, while believing. Then 4:125 asks its question, and 4:126 answers it with the reach of the One being submitted to, to whom belongs whatever is in the heavens and the earth.",
            "bn": "সূরা আন-নিসা মাদানী সূরা। কে নাজাত পাবে, তা নিয়ে ছোট একটি তর্ক চলছে, আর এই আয়াত এসেছে তার শেষে। ৪:১২৩ আয়াত সহজ রাস্তা বন্ধ করে দেয়: ব্যাপারটা তোমাদের মনের আশা অনুযায়ীও হবে না, আহলে কিতাবের মনের আশা অনুযায়ীও নয়; যে মন্দ কাজ করবে, সে তার প্রতিফল পাবে। ৪:১২৪ আয়াত প্রতিশ্রুতি দেয় তাকে, যে ঈমান রেখে সৎকাজ করে, পুরুষ হোক বা নারী। এরপর ৪:১২৫ আয়াত তার প্রশ্নটি তোলে। আর ৪:১২৬ আয়াত জবাব দেয় তাঁর বিশালতা দেখিয়ে, যাঁর কাছে আত্মসমর্পণ করা হচ্ছে: আসমান ও যমীনে যা কিছু আছে, সবই তাঁর।"
          },
          {
            "en": "Ibn Kathir gives an occasion for this stretch. Qatadah related that Muslims and People of the Scripture were setting out their merits to each other: the latter said their prophet and their book came first, so they had the better claim on Allah, and the Muslims answered that their Prophet ﷺ was the last and their Book came over every book before it. Ibn Kathir reports that 4:123 and 4:125 came down on that, and that as-Suddi, Masruq, ad-Dahhak and Abu Salih said much the same. Religion, he adds, is not accepted on account of wishful thinking, nor is a man on the truth just for saying so.",
            "bn": "ইবনে কাসীর এই অংশটির নাজিল হওয়ার একটি প্রেক্ষাপট দেন। কাতাদাহ বর্ণনা করেন, মুসলমান আর আহলে কিতাব একে অন্যের সামনে নিজেদের শ্রেষ্ঠত্বের কথা তুলছিল। আহলে কিতাব বলল, আমাদের নবী আগে এসেছেন, আমাদের কিতাবও আগের, তাই আল্লাহর ওপর আমাদের হক বেশি। মুসলমানরা জবাব দিলেন, আমাদের নবী ﷺ সবার শেষে এসেছেন, আর আমাদের কিতাব আগের সব কিতাবের ওপরে। ইবনে কাসীর জানান, এর প্রেক্ষিতেই ৪:১২৩ ও ৪:১২৫ আয়াত নাজিল হয়, আর সুদ্দী, মাসরূক, দাহহাক ও আবূ সালিহ থেকেও কাছাকাছি কথা এসেছে। এরপর তিনি আসল কথাটি বের করে আনেন: শুধু আশা-আকাঙ্ক্ষার জোরে দ্বীন কবুল হয় না, আর মুখে বললেই কেউ সত্যের ওপর হয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Face, Good, and Leaning",
          "bn": "মুখ, সৎকাজ আর ঝোঁক"
        },
        "p": [
          {
            "en": "The first clause is aslama wajhahu lillah. Wajh is the face, and Arabic uses the face for the whole person turned toward something, which is why this app renders it submits himself. Aslama, from s-l-m, is the verb behind the word Islam: to hand a thing over and give up the claim to own it. Al-Muyassar reads the clause as yielding to Allah alone with the heart and with every limb. What is described is not an opinion a man holds but a man facing one way.",
            "bn": "প্রথম বাক্যাংশ আসলামা ওয়াজহাহু লিল্লাহ। ওয়াজহ মানে মুখ, আর আরবিতে মুখ দিয়ে বোঝানো হয় গোটা মানুষটিকে, যে কোনো এক দিকে ফিরে আছে। এ কারণেই এই অ্যাপের অনুবাদে এসেছে, আল্লাহর কাছে আত্মসমর্পণ করে। আসলামা ক্রিয়াটি সীন-লাম-মীম মূল থেকে, ইসলাম শব্দটিও সেখান থেকেই: কোনো জিনিস সঁপে দেওয়া, তার ওপর নিজের মালিকানার দাবি ছেড়ে দেওয়া। আল-মুয়াসসার এই অংশের অর্থ করে, অন্তর দিয়ে আর প্রতিটি অঙ্গ দিয়ে কেবল আল্লাহর কাছে নত হওয়া। এখানে কোনো মতামতের কথা নেই, আছে এক দিকে মুখ করে দাঁড়ানো মানুষের কথা।"
          },
          {
            "en": "The second clause is wa huwa muhsin, from h-s-n. It is not a second deed added to the first; it is the quality of the doing. The third is ittiba' millat Ibrahim hanifa. Hanif carries a lean: ar-Raghib, in al-Mufradat, sets hanaf, a leaning away from error toward what is straight, against janaf, a leaning away from what is straight toward error. Al-Muyassar glosses hanifa here as inclining away from corrupt creeds and false laws. The word names a direction of travel, not a badge.",
            "bn": "দ্বিতীয় বাক্যাংশ ওয়া হুয়া মুহসিন, হা-সীন-নূন মূল থেকে। এটি প্রথমটির সঙ্গে জুড়ে দেওয়া বাড়তি কোনো আমল নয়, বরং আমল করার ধরনটাই। তৃতীয়টি হলো ইত্তিবাউ মিল্লাতি ইবরাহীমা হানীফা। হানীফ শব্দে একটা ঝোঁক আছে: আর-রাগিব আল-মুফরাদাতে হানাফ আর জানাফকে মুখোমুখি রাখেন। হানাফ হলো ভুল থেকে সরে সোজার দিকে ঝোঁকা, আর জানাফ হলো সোজা থেকে সরে ভুলের দিকে ঝোঁকা। আল-মুয়াসসার এখানে হানীফা-র ব্যাখ্যা করে, নষ্ট আকীদা আর বাতিল বিধান থেকে সরে থাকা। শব্দটি কোনো তকমার নাম নয়, চলার দিকের নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Conditions for a Deed",
          "bn": "আমলের দুই শর্ত"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the first two clauses as two conditions, and says that in the absence of either, no deed is accepted from anyone. Submitting the face to Allah he explains as performing the act sincerely for one's Lord, with faith, awaiting the reward from Him. Being a muhsin he explains as following the guidance Allah legislated in the religion of truth that He sent His Messenger ﷺ with. The first makes a deed sincere; the second makes it correct. A deed is outwardly correct by following the Sunnah, he writes, and inwardly correct by sincerity.",
            "bn": "ইবনে কাসীর প্রথম দুই বাক্যাংশকে দুটি শর্ত হিসেবে পড়েন। তিনি বলেন, এর যেকোনো একটি না থাকলে কারও কোনো আমলই কবুল হয় না। তাঁর ব্যাখ্যায় আল্লাহর কাছে মুখ সঁপে দেওয়ার মানে, ঈমান নিয়ে খাঁটি নিয়তে কেবল নিজের রবের জন্য কাজটি করা, আর প্রতিদান তাঁর কাছেই আশা করা। আর মুহসিন হওয়ার মানে, আল্লাহ তাঁর রাসূল ﷺ-কে যে সত্য দ্বীন দিয়ে পাঠিয়েছেন, তাতে তিনি যে পথ দিয়েছেন তা মেনে চলা। প্রথমটি আমলকে খাঁটি করে, দ্বিতীয়টি করে শুদ্ধ। তিনি লেখেন, সুন্নাহ মেনে চললে আমল বাইরে থেকে শুদ্ধ হয়, আর ইখলাস থাকলে ভেতর থেকে।"
          },
          {
            "en": "He then names what happens when one of the two is missing. A man who does the outward act but lacks sincerity is showing off for people; a man who is sincere but does not follow what was legislated acts in ignorance. Only when both hold does the deed become the deed of a believer. That is the answer to the boasting in Qatadah's report. Neither community's claim is weighed in the verse. What is weighed is whether a person handed himself over, and whether what he then did matches what Allah actually asked for.",
            "bn": "এরপর তিনি বলেন, দুটির একটি না থাকলে কী হয়। যে বাইরের কাজটা করে কিন্তু নিয়ত খাঁটি নয়, সে মানুষকে দেখানোর কাজ করছে; আর যে নিয়তে খাঁটি কিন্তু বিধিবদ্ধ পথ অনুসরণ করে না, সে না জেনে কাজ করছে। দুটি একসঙ্গে থাকলেই কেবল আমলটি মুমিনের আমল হয়। কাতাদাহর বর্ণনার সেই দাবি-পাল্টা দাবির জবাব এটাই। আয়াতে কোনো সম্প্রদায়ের দাবি ওজন করা হয় না। ওজন করা হয় এটুকুই, মানুষটি নিজেকে সঁপে দিয়েছে কি না, আর তারপর যা করেছে তা আল্লাহ যা চেয়েছেন তার সঙ্গে মেলে কি না।"
          },
          {
            "en": "On the third clause Ibn Kathir says that the one who follows the religion of Ibrahim is Muhammad ﷺ and those who follow him until the Day of Resurrection, and he cites 3:68 and 16:123 for it. He defines the hanif in the same place: one who deliberately and knowingly keeps clear of shirk and goes attentively toward the truth, allowing nobody to hinder him or turn him from it. Read that way, the lean in the word is not a mood that visits a person. It is a choice made again and again.",
            "bn": "তৃতীয় বাক্যাংশ নিয়ে ইবনে কাসীর বলেন, ইবরাহীমের দ্বীনের অনুসারী বলতে বোঝায় মুহাম্মাদ ﷺ এবং কিয়ামত পর্যন্ত যারা তাঁর অনুসরণ করে। এর সমর্থনে তিনি ৩:৬৮ ও ১৬:১২৩ আয়াত উল্লেখ করেন। একই জায়গায় তিনি হানীফের পরিচয় দেন: যে জেনেবুঝে ইচ্ছা করে শিরক থেকে দূরে থাকে, আর মনোযোগ দিয়ে সত্যের দিকে এগোয়, কাউকে তাকে আটকাতে বা ফিরিয়ে দিতে দেয় না। এভাবে পড়লে শব্দটির ভেতরকার ঝোঁক কোনো মনের অবস্থা নয়, যা মাঝেমধ্যে এসে হাজির হয়। এ এমন সিদ্ধান্ত, যা বারবার নিতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Was Called Khalil",
          "bn": "কেন তাঁকে খলীল বলা হলো"
        },
        "p": [
          {
            "en": "The verse ends on a sentence the argument did not require: wattakhadha Allahu Ibrahima khalila. Khalil, from the root kh-l-l, names a friend whose love has gone all the way through. Ibn Kathir says that Ibrahim (AS) reached the closest station a servant seeks, and that khullah is the highest grade of love. Al-Muyassar says this verse establishes the attribute of khullah for Allah, and calls it the highest station of love and of being chosen. Nothing in the clause is claimed by Ibrahim (AS); the taking is Allah's.",
            "bn": "আয়াত শেষ হয় এমন একটি বাক্যে, তর্কটির জন্য যার দরকার ছিল না: ওয়াত্তাখাযাল্লাহু ইবরাহীমা খলীলা। খলীল শব্দটি খা-লাম-লাম মূল থেকে, অর্থ এমন বন্ধু যার ভালোবাসা ভেতর পর্যন্ত পৌঁছে গেছে। ইবনে কাসীর বলেন, বান্দা যে নৈকট্যের খোঁজ করে, ইবরাহীম (আঃ) তার সর্বোচ্চ স্তরে পৌঁছেছিলেন, আর খুল্লাহ হলো ভালোবাসার সবচেয়ে উঁচু ধাপ। আল-মুয়াসসার বলে, এই আয়াত আল্লাহর জন্য খুল্লাহর গুণ প্রমাণ করে, আর একে বলে ভালোবাসা ও মনোনীত হওয়ার সর্বোচ্চ মাকাম। বাক্যটিতে ইবরাহীম (আঃ) নিজে কিছুই দাবি করেননি; গ্রহণ করাটা আল্লাহরই।"
          },
          {
            "en": "Ibn Kathir is careful about how he arrived there. He acquired all of it, Ibn Kathir writes, through obedience to his Lord, and he gathers the verses that describe that obedience: 53:37, of Ibrahim who fulfilled what was given him; 2:124, where his Lord tried him with commands and he completed them; and 16:120, which calls him a leader devoutly obedient to Allah, inclining toward truth, not of those who associate partners. The friendship named at the close of 4:125 stands at the end of a long life, not at the beginning of one.",
            "bn": "এই মর্যাদায় তিনি কীভাবে পৌঁছালেন, ইবনে কাসীর তা খুব খেয়াল করে বলেন। তাঁর ভাষায়, এর সবটুকুই তিনি পেয়েছিলেন রবের আনুগত্যের পথ ধরে। এরপর তিনি সেই আনুগত্যের কথা আছে এমন আয়াতগুলো এক জায়গায় আনেন: ৫৩:৩৭ আয়াত, যেখানে ইবরাহীম তাঁকে দেওয়া দায়িত্ব পুরোপুরি পালন করেছিলেন; ২:১২৪ আয়াত, যেখানে তাঁর রব কয়েকটি আদেশ দিয়ে তাঁকে পরীক্ষা করেন আর তিনি সব পূর্ণ করেন; আর ১৬:১২০ আয়াত, যেখানে তাঁকে বলা হয়েছে আল্লাহর একান্ত অনুগত, একনিষ্ঠ এক নেতা, যিনি মুশরিকদের দলে ছিলেন না। ৪:১২৫ আয়াতের শেষে যে বন্ধুত্বের কথা, তা এসেছে দীর্ঘ এক জীবনের শেষে, শুরুতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Read at Fajr One Morning",
          "bn": "এক ভোরের ফজরে পড়া আয়াত"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Amr ibn Maymun that when Mu'adh (RA) came back from Yemen he led them in the Fajr prayer and recited wattakhadha Allahu Ibrahima khalila. One of the men present said that the eye of Ibrahim's mother had been comforted. Ibn Kathir cites the report at this verse. It preserves an ordinary morning in which a congregation heard the verse's last clause and one man answered it aloud, as though the honour were news that had just arrived.",
            "bn": "সহীহ বুখারীতে আমর ইবনে মায়মূন থেকে বর্ণিত, মুআয (রাঃ) ইয়ামান থেকে ফিরে এসে তাঁদের নিয়ে ফজরের নামাজ পড়ান এবং তিলাওয়াত করেন, ওয়াত্তাখাযাল্লাহু ইবরাহীমা খলীলা। উপস্থিত একজন বলে উঠলেন, ইবরাহীমের মায়ের চোখ জুড়িয়ে গেল। ইবনে কাসীর এই আয়াতের ব্যাখ্যায় বর্ণনাটি উল্লেখ করেন। এতে ধরা আছে সাধারণ এক ভোর, যেখানে একদল মানুষ আয়াতের শেষ কথাটি শুনলেন আর একজন মুখ ফুটে তার জবাব দিলেন, যেন সম্মানের এই খবরটা সবে এসে পৌঁছেছে।"
          },
          {
            "en": "Ibn Kathir places a second narration beside it. In the Two Sahihs, from Abu Sa'id al-Khudri (RA), the Prophet ﷺ said in his last address that if he were to take a khalil from the people of the earth he would have taken Abu Bakr ibn Abi Quhafah (RA), but that their companion is the khalil of Allah. Ibn Kathir also reports, from Jundub ibn Abdullah, Abdullah ibn Amr and Abdullah ibn Mas'ud (RA), that the Prophet ﷺ said Allah had taken him as a khalil, just as He took Ibrahim (AS) as a khalil.",
            "bn": "ইবনে কাসীর এর পাশে আরেকটি বর্ণনা রাখেন। সহীহ বুখারী ও সহীহ মুসলিমে আবূ সাঈদ খুদরী (রাঃ) থেকে আছে, নবী ﷺ তাঁর শেষ ভাষণে বলেছিলেন, দুনিয়ার মানুষের মধ্য থেকে কাউকে খলীল বানালে তিনি আবূ বকর ইবনে আবী কুহাফা (রাঃ)-কেই বানাতেন, তবে তাঁদের এই সঙ্গী আল্লাহরই খলীল। জুনদুব ইবনে আবদুল্লাহ, আবদুল্লাহ ইবনে আমর ও আবদুল্লাহ ইবনে মাসউদ (রাঃ) থেকেও ইবনে কাসীর বর্ণনা করেন, নবী ﷺ বলেছেন, আল্লাহ তাঁকে খলীল হিসেবে গ্রহণ করেছেন, যেমন ইবরাহীম (আঃ)-কে খলীল হিসেবে গ্রহণ করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Verse Is Echoed",
          "bn": "যেসব আয়াতে এর প্রতিধ্বনি"
        },
        "p": [
          {
            "en": "2:112 states the same two conditions as a promise rather than a question: whoever submits his face to Allah while being a doer of good has his reward with his Lord, with no fear upon them and no grief. 31:22 repeats the pair and adds a picture, that such a person has grasped the most trustworthy handhold. Between them they show that the two clauses of 4:125 are not local to one argument in Madinah. They are how the Quran describes a believer wherever it stops to describe one.",
            "bn": "২:১১২ আয়াত একই দুই শর্ত রাখে প্রশ্ন হিসেবে নয়, প্রতিশ্রুতি হিসেবে: যে আল্লাহর কাছে মুখ সঁপে দেয় আর সৎকর্মশীল হয়, তার প্রতিদান তার রবের কাছে, তার কোনো ভয় নেই, দুঃখও নেই। ৩১:২২ আয়াত এই জোড়াটি আবার বলে, সঙ্গে একটা ছবিও দেয়: এমন মানুষ মজবুত হাতল ধরে ফেলেছে। দুটি আয়াত মিলিয়ে বোঝা যায়, ৪:১২৫ আয়াতের দুই বাক্যাংশ মদিনার কোনো একটি তর্কে সীমাবদ্ধ নয়। কুরআন যেখানেই থেমে মুমিনের পরিচয় দিয়েছে, এভাবেই দিয়েছে।"
          },
          {
            "en": "2:131 puts the verb of the first clause on Ibrahim's own tongue: his Lord told him to submit, and he answered that he had submitted to the Lord of the worlds. 16:123 tells the Prophet ﷺ to follow the religion of Ibrahim, inclining toward truth, which is the command 4:125 turns into a description. 6:161 has him say that his Lord guided him to a straight path, the way of Ibrahim. And 3:68 names the nearest to Ibrahim as those who followed him, and this Prophet ﷺ, and those who believe.",
            "bn": "২:১৩১ আয়াত প্রথম বাক্যাংশের ক্রিয়াটি বসিয়ে দেয় ইবরাহীমের নিজের মুখে: তাঁর রব তাঁকে বললেন আত্মসমর্পণ করো, তিনি বললেন, আমি সারা জগতের রবের কাছে আত্মসমর্পণ করলাম। ১৬:১২৩ আয়াত নবী ﷺ-কে নির্দেশ দেয় একনিষ্ঠভাবে ইবরাহীমের দ্বীন অনুসরণ করতে, আর ৪:১২৫ আয়াত সেই নির্দেশটিকেই পরিচয়ে বদলে দেয়। ৬:১৬১ আয়াতে তিনি বলেন, তাঁর রব তাঁকে সরল পথ দেখিয়েছেন, যা ইবরাহীমের পথ। আর ৩:৬৮ আয়াত বলে, ইবরাহীমের সবচেয়ে কাছের তারাই, যারা তাঁর অনুসরণ করেছে, এই নবী ﷺ, আর যারা ঈমান এনেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning the Whole Face",
          "bn": "গোটা মুখটা ফেরানো"
        },
        "p": [
          {
            "en": "The two conditions give a believer a way to test a deed without asking anyone. Put the question to the charity, the fast, the late-night reading: who was it for, and does it match what was asked for? A deed can fail either test on its own. Giving so that the giving will be noticed fails the first. Adding an act of worship nobody was taught fails the second. The check takes a moment, and it is the whole of what Ibn Kathir says this verse requires.",
            "bn": "এই দুই শর্ত মুমিনকে এমন একটা মাপকাঠি দেয়, যা দিয়ে কাউকে না জিজ্ঞেস করেই নিজের আমল যাচাই করা যায়। দানটা, রোজাটা, রাতের পড়াটা সামনে রেখে প্রশ্ন করুন: কার জন্য করেছি, আর যা করেছি তা কি চাওয়া জিনিসটার সঙ্গে মেলে? যেকোনো একটিতে আটকে গেলেই আমলটি আটকে যায়। লোকে দেখবে বলে দান করলে প্রথমটিতে আটকায়। কেউ শেখায়নি এমন ইবাদত বানিয়ে নিলে দ্বিতীয়টিতে আটকায়। যাচাইটুকু করতে এক মুহূর্ত লাগে, আর ইবনে কাসীরের মতে এই আয়াত এটুকুই চায়।"
          },
          {
            "en": "The word wajh suggests a second habit. A face is one thing and cannot point two ways. Over a week, notice where your attention actually turns first in the morning, in a free half hour, in a moment of fear. That is where the face is. Nobody turns it all at once, which is why the verse uses hanif, a leaning, and why Ibn Kathir describes the hanif as someone who keeps choosing the same direction and lets nobody turn him from it.",
            "bn": "ওয়াজহ শব্দটি দ্বিতীয় একটি অভ্যাসের দিকে ইশারা করে। মুখ একটাই, দুই দিকে ফেরানো যায় না। এক সপ্তাহ ধরে লক্ষ করুন, সকালে ঘুম ভেঙে, ফাঁকা আধ ঘণ্টায়, ভয়ের মুহূর্তে আপনার মন আসলে কোন দিকে ছোটে। মুখটা ওখানেই ফেরানো। একবারে কেউ তা ঘুরিয়ে ফেলতে পারে না, তাই আয়াত ব্যবহার করে হানীফ শব্দটি, যাতে ঝোঁকের কথা আছে। আর তাই ইবনে কাসীরও হানীফের পরিচয়ে বলেন, সে বারবার একই দিক বেছে নেয় আর কাউকে তাকে ফেরাতে দেয় না।"
          },
          {
            "en": "The third practice belongs to the argument the verse walked into. When your religion is set beside someone else's, at work or across a table, this verse gives no ground for a boast, because it awards nothing to a name. Say what you believe, and turn its measure on yourself first. The two groups in Qatadah's report were doing the same thing as each other. The verse did not decide whose claim was louder; it changed what counts as a claim at all.",
            "bn": "তৃতীয় অভ্যাসটির জায়গা সেই তর্কে, যার ভেতরে আয়াতটি এসে দাঁড়িয়েছিল। কর্মক্ষেত্রে বা খাবার টেবিলে আপনার দ্বীনকে যখন অন্য কারও দ্বীনের পাশে রাখা হয়, এই আয়াত গর্ব করার কোনো জায়গা দেয় না, কারণ নামের জন্য এখানে কিছুই বরাদ্দ নেই। আপনি যা বিশ্বাস করেন বলুন, আর তার মাপকাঠিটা আগে নিজের ওপর চালান। কাতাদাহর বর্ণনার দুই দলই একই কাজ করছিল। আয়াত ফয়সালা করেনি কার দাবি বেশি জোরালো; বদলে দিয়েছে দাবি বলতে আসলে কী বোঝায় তা-ই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Words",
          "bn": "আয়াতের শব্দে দু'আ"
        },
        "p": [
          {
            "en": "The verse itself holds no supplication, but the Quran puts its first clause in Ibrahim's mouth as one. At 2:131 he says aslamtu li-rabbi al-alamin, I have submitted to the Lord of the worlds. That sentence can be said as it stands, at the start of a day or before a decision that is hard to make, and saying it commits the speaker to the very thing 4:125 measures him by.",
            "bn": "আয়াতটিতে নিজে কোনো দু'আ নেই, তবে কুরআন এর প্রথম কথাটিই ইবরাহীমের মুখে বসিয়ে দিয়েছে। ২:১৩১ আয়াতে তিনি বলেন, আসলামতু লিরাব্বিল আলামীন, আমি সারা জগতের রবের কাছে আত্মসমর্পণ করলাম। কথাটি যেমন আছে তেমনই বলা যায়, দিনের শুরুতে কিংবা কঠিন কোনো সিদ্ধান্তের আগে। বলার সঙ্গে সঙ্গে বক্তা সেই জিনিসটিরই দায় নিয়ে নেন, ৪:১২৫ আয়াত যা দিয়ে তাকে মাপে।"
          },
          {
            "en": "Alongside it, a short prayer built from the verse's own vocabulary, offered as that and not as a transmitted wording. O Allah, I hand my face over to You, so accept it from me. Make what I do good, and make it match what You asked for. Keep me leaning away from error and toward what is straight, as You kept Your friend Ibrahim. And do not let me rest on a name while You are asking me for a road.",
            "bn": "এর পাশে রইল আয়াতের নিজের শব্দ দিয়ে গড়া ছোট একটি প্রার্থনা। এটি বর্ণিত কোনো দু'আর শব্দ নয়, সেভাবেই পড়ুন। হে আল্লাহ, আমার মুখ আমি আপনার কাছে সঁপে দিলাম, আপনি তা কবুল করুন। আমার আমলকে সুন্দর করে দিন, আর তা যেন আপনার চাওয়ার সঙ্গে মেলে। আমাকে ভুল থেকে সরিয়ে সোজা পথের দিকে ঝুঁকিয়ে রাখুন, যেভাবে আপনার বন্ধু ইবরাহীমকে রেখেছিলেন। আর আপনি যখন আমার কাছে পথ চাইছেন, তখন আমাকে শুধু একটা নামের ভরসায় বসে থাকতে দেবেন না।"
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
            "en": "If someone weighed my religion the way this verse weighs it, by submission, by good done, and by whose road I am walking, what would they find? Which of the two conditions do I fail more often, sincerity or correctness, and what would it take to fix the one I fail? Is there a deed I have been repeating for years without once asking who it was really for?",
            "bn": "এই আয়াত যেভাবে মাপে, অর্থাৎ আত্মসমর্পণ দিয়ে, সৎকাজ দিয়ে, আর কার পথে হাঁটছি তা দিয়ে, কেউ যদি সেভাবে আমার দ্বীনকে মাপে, সে কী পাবে? দুই শর্তের কোনটিতে আমি বেশি আটকাই, ইখলাসে নাকি শুদ্ধতায়, আর যেটিতে আটকাই সেটি ঠিক করতে কী লাগবে? এমন কোনো আমল কি আছে, যা বছরের পর বছর করে যাচ্ছি, অথচ একবারও জিজ্ঞেস করিনি সেটা আসলে কার জন্য?"
          },
          {
            "en": "Ibrahim (AS) was taken as a friend after a life of doing what he was told. What am I waiting to be given that I have not begun working towards? When my community is compared with another, does my first instinct go to what we are called or to what we are doing? And if my face is where my attention goes when nothing is required of me, where has my face been pointing this month?",
            "bn": "সারা জীবন আদেশ মেনে চলার পর আল্লাহ ইবরাহীম (আঃ)-কে বন্ধু হিসেবে গ্রহণ করেছিলেন। আমি কী পাওয়ার আশায় বসে আছি, অথচ তার জন্য কাজই শুরু করিনি? আমার সম্প্রদায়কে অন্য কোনো সম্প্রদায়ের সঙ্গে তুলনা করা হলে আমার মন আগে কোথায় যায়, আমাদের নামের দিকে, নাকি আমাদের কাজের দিকে? আর কোনো দায় না থাকলে মন যেদিকে যায়, মুখটা যদি সেদিকেই ফেরানো থাকে, তবে এই মাসে আমার মুখ কোন দিকে ফেরানো ছিল?"
          }
        ]
      }
    ]
  },
  "4:128": {
    "sections": [
      {
        "h": {
          "en": "A Third Door in the House",
          "bn": "ঘরের ভেতর তৃতীয় দরজা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and this part of it answers questions people were actually bringing. 4:127 says they ask you for a ruling concerning women, and the answer names orphan girls whose due is withheld, oppressed children, and justice for orphans. Then 4:128 turns to a marriage that has gone cold, 4:129 says a man will never manage perfect equality between wives however hard he tries, and 4:130 says that if the two do separate, Allah will enrich each of them from His abundance.",
            "bn": "সূরা আন-নিসা মাদানি সূরা, আর এর এই অংশটি জবাব দিচ্ছে মানুষের সত্যিকারের প্রশ্নের। ৪:১২৭ আয়াত বলে, লোকেরা নারীদের সম্পর্কে তোমার কাছে বিধান জানতে চায়। জবাবে আসে সেই ইয়াতীম মেয়েদের কথা যাদের প্রাপ্য দেওয়া হয় না, অসহায় শিশুদের কথা, আর ইয়াতীমদের সঙ্গে ইনসাফের কথা। এরপর ৪:১২৮ আয়াত ফেরে ঠান্ডা হয়ে যাওয়া এক সংসারের দিকে। ৪:১২৯ আয়াত বলে, যত চেষ্টাই করুক, স্ত্রীদের মধ্যে পুরোপুরি সমতা কোনো পুরুষ রাখতে পারবে না। আর ৪:১৩০ আয়াত বলে, দুজন আলাদা হয়ে গেলে আল্লাহ নিজ প্রাচুর্য থেকে দুজনকেই অভাবমুক্ত করে দেবেন।"
          },
          {
            "en": "Ibn Kathir opens his comment by laying the three cases side by side. Sometimes a man inclines away from his wife, sometimes he inclines toward her, and sometimes he parts from her. On that reading the three verses run in order: 4:128 is the turning away, 4:129 the uneven inclination between wives, 4:130 the parting. So the verse before us is not a general rule about marriage. It is about one situation, the moment a wife senses that her husband has begun to withdraw.",
            "bn": "ইবনে কাসীর তাঁর ব্যাখ্যা শুরু করেন তিনটি অবস্থা পাশাপাশি রেখে। কখনো স্বামী স্ত্রীর দিক থেকে সরে যায়, কখনো তার দিকে ঝোঁকে, আর কখনো তাকে ছেড়ে দেয়। এই পাঠে আয়াত তিনটি সাজানো আছে সেই ক্রমেই: ৪:১২৮ আয়াত সরে যাওয়ার কথা, ৪:১২৯ আয়াত স্ত্রীদের মধ্যে অসম ঝোঁকের কথা, আর ৪:১৩০ আয়াত ছেড়ে যাওয়ার কথা। তাই সামনের আয়াতটি বিয়ে নিয়ে সাধারণ কোনো নিয়ম নয়। এটি একটি নির্দিষ্ট মুহূর্তের কথা, যে মুহূর্তে স্ত্রী টের পান স্বামী গুটিয়ে নিতে শুরু করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Rising, Turning, Repairing",
          "bn": "উঁচু হওয়া, মুখ ফেরানো, মেরামত"
        },
        "p": [
          {
            "en": "The first word is nushuz, from n-sh-z, a root used of ground that rises above the ground around it. Al-Muyassar glosses it here as the husband holding himself above her and looking down on her. The second is i'rad, from a root that carries the side of a thing: to present your side to someone instead of your face, to be in the room and not there. This app renders the pair contempt or evasion, which catches both the hardness and the absence.",
            "bn": "প্রথম শব্দ নুশূয, নূন-শীন-যা মূল থেকে। আশপাশের জমি থেকে উঁচু হয়ে থাকা জমিকে বোঝাতে এই মূল ব্যবহার হয়। আল-মুয়াসসার এখানে এর অর্থ করে: স্বামী নিজেকে স্ত্রীর চেয়ে বড় মনে করছেন, তাকে নিচু চোখে দেখছেন। দ্বিতীয় শব্দ ই'রায। এর মূলে আছে কোনো কিছুর পাশের অর্থ: কারও দিকে মুখ না ফিরিয়ে পাশ ফিরিয়ে রাখা, ঘরে থেকেও না থাকা। এই অ্যাপের অনুবাদে জোড়াটি এসেছে রূঢ়তা কিংবা উপেক্ষা হিসেবে, এতে কঠোরতা আর অনুপস্থিতি দুটোই ধরা পড়ে।"
          },
          {
            "en": "The same root nushuz appears earlier in this surah, at 4:34, of a wife rather than a husband, where the English of this app renders it arrogance. The Quran uses one word for the fault on either side. Then comes sulh, from s-l-h, the root of islah, repair. The verse says there is no sin upon the two of them, in the dual, so the settlement is a joint act and not a concession squeezed out of one party. And the word for the soul's grasping, shuhh, arrives in a passive verb: souls have been brought up close to it, so it is always within reach.",
            "bn": "নুশূয মূলটি এই সূরাতেই আগে এসেছে, ৪:৩৪ আয়াতে। সেখানে কথাটি স্বামীর নয়, স্ত্রীর ব্যাপারে, আর এই অ্যাপের বাংলা অনুবাদে তা এসেছে অবাধ্যতা অর্থে। দোষ যে পক্ষেরই হোক, কুরআন একই শব্দ ব্যবহার করে। এরপর আসে সুলহ, সাদ-লাম-হা মূল থেকে। ইসলাহ, অর্থাৎ মেরামত, শব্দটিও এই মূলের। আয়াত দ্বিবচনে বলে, তাদের দুজনের কোনো গুনাহ নেই। তাই আপোষটা দুজনে মিলে করা কাজ, এক পক্ষের কাছ থেকে চাপ দিয়ে আদায় করা ছাড় নয়। আর নফসের কৃপণতার শব্দ শুহ্‌হ এসেছে কর্মবাচ্য ক্রিয়ায়: নফসকে এর একেবারে কাছেই রাখা হয়েছে, তাই তা সব সময় হাতের নাগালে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Made of It",
          "bn": "মুফাসসিরগণ যা বুঝেছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the settlement concretely. In this first case, he says, the wife is allowed to forfeit all or part of what is due to her, such as provision, clothing and dwelling, and the husband is allowed to accept that, so there is no harm in her offering it or in his accepting it. Al-Muyassar says the two may come to terms on whatever their souls are content with, of the division of nights or of the maintenance, and that reconciliation is the preferable and better course.",
            "bn": "ইবনে কাসীর আপোষটিকে বোঝেন খুব বাস্তব অর্থে। তিনি বলেন, এই প্রথম অবস্থায় স্ত্রীর জন্য জায়েয যে সে তার প্রাপ্য কিছু বা পুরোটাই ছেড়ে দেবে, যেমন খোরপোশ, পোশাক বা বাসস্থান, আর স্বামীর জন্যও জায়েয তা গ্রহণ করা। তাই স্ত্রীর দেওয়াতেও দোষ নেই, স্বামীর নেওয়াতেও নেই। আল-মুয়াসসার বলে, দুজনের মন যাতে সায় দেয় তার ওপরই তারা মীমাংসায় আসতে পারে, সেটা রাতের পালা ভাগ করা হোক বা খরচের বন্দোবস্ত, আর আপোষ করাই অগ্রগণ্য ও উত্তম।"
          },
          {
            "en": "There is a difference here, and it is worth stating as one. Ali ibn Abi Talhah reported Ibn Abbas (RA) reading the verse of a husband giving his wife the choice between staying with him and leaving, which would be better than his preferring other wives to her. Ibn Kathir says that the apparent wording of the verse points instead to the wife forfeiting some of her rights with the husband agreeing to it, and he adds that peace is better than divorce, because divorce is not what Allah prefers.",
            "bn": "এখানে মতপার্থক্য আছে, আর সেটা মতপার্থক্য হিসেবেই বলা ভালো। আলী ইবনে আবী তালহা ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, তিনি আয়াতটি বুঝেছেন এভাবে: স্বামী স্ত্রীকে বেছে নেওয়ার সুযোগ দেবে, তার কাছে থাকবে নাকি চলে যাবে। অন্য স্ত্রীদের তার ওপর প্রাধান্য দেওয়ার চেয়ে এটাই ভালো। ইবনে কাসীর বলেন, আয়াতের বাহ্যিক শব্দ বরং অন্য দিকে ইঙ্গিত করে: স্ত্রী তার কিছু হক ছেড়ে দেবে, আর স্বামী তাতে রাজি হবে। তিনি আরও বলেন, তালাকের চেয়ে আপোষ ভালো, কারণ তালাক আল্লাহর পছন্দের জিনিস নয়।"
          },
          {
            "en": "On the closing clause, if you do good and fear Allah, Ibn Kathir says that if a man is patient with a wife he does not desire and treats her as the others are treated, Allah knows what he does and will reward him fully for it. Al-Muyassar reads it the same way: treat your wives well and fear Allah concerning them, for nothing of it is hidden from Him. Exactly what may be given up, and how, belongs to those trained in the law. What the verse itself ends on is not entitlement but taqwa.",
            "bn": "শেষ কথাটি নিয়ে, অর্থাৎ যদি তোমরা সৎকাজ করো আর তাকওয়া অবলম্বন করো, ইবনে কাসীর বলেন, যে স্ত্রীর প্রতি টান নেই তার সঙ্গেও যদি স্বামী ধৈর্য ধরে এবং বাকিদের মতোই আচরণ করে, তবে আল্লাহ তার কাজ জানেন এবং পুরোপুরি প্রতিদান দেবেন। আল-মুয়াসসারও একইভাবে পড়ে: স্ত্রীদের সঙ্গে ভালো আচরণ করো আর তাদের ব্যাপারে আল্লাহকে ভয় করো, এর কিছুই তাঁর কাছে গোপন নয়। ঠিক কী ছাড়া যায় আর কীভাবে, সে আলোচনা ফিকহে যাঁরা দক্ষ তাঁদের। আয়াত নিজে শেষ হয় হকের দাবিতে নয়, তাকওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day Sawdah Gave Away",
          "bn": "সাওদা (রাঃ) যেদিন পালা ছেড়ে দিলেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reports, through Abu Dawud at-Tayalisi, that Ibn Abbas (RA) said Sawdah (RA) feared the Messenger of Allah ﷺ might divorce her, and asked him not to, and to give her day to A'ishah (RA), and he did, and afterwards this verse came down. At-Tirmidhi also recorded it. In the Two Sahihs, A'ishah (RA) relates that when Sawdah bint Zam'ah (RA) grew old she gave her day to A'ishah, and the Prophet ﷺ would give Sawdah's turn to her.",
            "bn": "ইবনে কাসীর আবূ দাউদ আত-তায়ালিসীর সূত্রে বর্ণনা করেন, ইবনে আব্বাস (রাঃ) বলেছেন, সাওদা (রাঃ) আশঙ্কা করলেন রাসূলুল্লাহ ﷺ হয়তো তাঁকে তালাক দেবেন। তিনি অনুরোধ করলেন যেন তা না করা হয়, আর তাঁর পালার দিনটি আয়িশা (রাঃ)-কে দিয়ে দেওয়া হয়। নবী ﷺ তাই করলেন, আর পরে এই আয়াত নাজিল হলো। তিরমিযীও বর্ণনাটি এনেছেন। সহীহ বুখারী ও সহীহ মুসলিমে আয়িশা (রাঃ) থেকে আছে, সাওদা বিনতে যামআ (রাঃ) বৃদ্ধ হলে নিজের দিনটি আয়িশা (রাঃ)-কে দিয়ে দেন, আর নবী ﷺ সাওদার পালা তাঁকেই দিতেন।"
          },
          {
            "en": "Al-Bukhari also records A'ishah's (RA) own comment on the verse: that it is about a man married to a woman grown old whom he no longer desires and wishes to divorce, and she offers to give up her right on him. Ibn Kathir notes that by keeping Sawdah (RA) among his wives after she offered her day, the Prophet ﷺ left his ummah a pattern for this kind of settlement. The arrangement the verse describes is one the Prophet's ﷺ own household actually lived.",
            "bn": "সহীহ বুখারীতে আয়াতটি নিয়ে আয়িশা (রাঃ)-র নিজের ব্যাখ্যাও আছে। তিনি বলেন, আয়াতটি এমন পুরুষকে নিয়ে, যার স্ত্রীর বয়স হয়ে গেছে, তার প্রতি আর টান নেই, তাই তাকে তালাক দিতে চায়। তখন স্ত্রী নিজের হক ছেড়ে দেওয়ার প্রস্তাব দেন। ইবনে কাসীর জানান, সাওদা (রাঃ) নিজের দিন ছেড়ে দেওয়ার পরও নবী ﷺ তাঁকে স্ত্রীদের মধ্যেই রেখে দেন, আর এভাবে এমন আপোষের একটি নমুনা উম্মতের জন্য রেখে যান। আয়াত যে বন্দোবস্তের কথা বলে, নবী ﷺ-এর নিজের ঘরেই তা সত্যি সত্যি ঘটেছিল।"
          },
          {
            "en": "One verse on, at 4:129, Imam Ahmad and the compilers of the Sunan record from A'ishah (RA) that the Messenger of Allah ﷺ used to divide his time justly between his wives and would say: O Allah, this is my division in what I own, so do not blame me for what You own and I do not own. Ibn Kathir explains the last words as referring to his heart, and notes that this is Abu Dawud's wording. The verse that says perfect equality is impossible sits beside a prayer that admits it.",
            "bn": "এক আয়াত পরেই, ৪:১২৯ আয়াতের ব্যাখ্যায়, ইমাম আহমাদ ও সুনান সংকলকগণ আয়িশা (রাঃ) থেকে বর্ণনা করেন, রাসূলুল্লাহ ﷺ স্ত্রীদের মধ্যে ইনসাফের সঙ্গে পালা ভাগ করতেন এবং বলতেন: হে আল্লাহ, আমার মালিকানায় যা আছে তাতে এই হলো আমার ভাগ, আর যা আপনার মালিকানায় আছে অথচ আমার নয়, সে বিষয়ে আমাকে দোষারোপ করবেন না। ইবনে কাসীর শেষ কথাটির ব্যাখ্যায় বলেন, এতে তাঁর অন্তরের কথা বোঝানো হয়েছে, আর জানান, এই শব্দগুলো আবূ দাউদের বর্ণনার। পুরোপুরি সমতা যে অসম্ভব, আয়াত তা বলে দেয়; আর তার পাশেই আছে এমন এক দু'আ, যা সে কথা অকপটে মেনে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Verses on Repair",
          "bn": "মেরামত নিয়ে অন্য আয়াত"
        },
        "p": [
          {
            "en": "4:19, earlier in the surah, speaks to the same cooling heart: live with them in kindness, and if you dislike them, perhaps you dislike a thing in which Allah has placed much good. 4:35 provides for the case where the two cannot settle it alone, by sending an arbiter from his people and an arbiter from hers, and it promises that if the two arbiters desire reconciliation, Allah will bring it about between the couple. 2:228 says that what is due to wives is like what is due from them.",
            "bn": "সূরার আগের দিকে ৪:১৯ আয়াত ঠান্ডা হয়ে আসা সেই মনের কথাই বলে: তাদের সঙ্গে সদ্ভাবে জীবন কাটাও; যদি তাদের অপছন্দ করো, তবে হতে পারে তোমরা এমন কিছু অপছন্দ করছ, যাতে আল্লাহ অনেক কল্যাণ রেখেছেন। দুজন নিজেরা মীমাংসা করতে না পারলে কী করতে হবে, ৪:৩৫ আয়াত তা বলে দেয়: স্বামীর পরিবার থেকে একজন আর স্ত্রীর পরিবার থেকে একজন সালিস পাঠাতে হবে। আর আয়াতটি কথা দেয়, সালিস দুজন মীমাংসা চাইলে আল্লাহ স্বামী-স্ত্রীর মধ্যে মিল করে দেবেন। ২:২২৮ আয়াত বলে, স্ত্রীদের ওপর যেমন দায়িত্ব আছে, তেমনি তাদের হকও আছে।"
          },
          {
            "en": "2:237 tells a couple who divorce before the marriage is consummated not to forget graciousness between them, which is the same instinct applied where nothing is left to save. 59:9 and 64:16 both close on one promise: whoever is protected from the stinginess of his own soul, those are the successful. The very thing 4:128 names as the obstacle is what those two verses call the doorway. And 4:130 keeps the last option open without shame: if the two do separate, Allah will enrich each of them from His abundance.",
            "bn": "২:২৩৭ আয়াত এমন দুজনকে বলে, যাদের বিয়ের পর ঘর করার আগেই তালাক হয়ে যাচ্ছে: পরস্পরের প্রতি উদারতার কথা ভুলে যেয়ো না। বাঁচানোর মতো আর কিছু যেখানে বাকি নেই, সেখানেও একই মনোভাব। ৫৯:৯ আর ৬৪:১৬ দুটি আয়াতই শেষ হয় একই প্রতিশ্রুতিতে: যাদের নিজের নফসের সংকীর্ণতা থেকে রক্ষা করা হয়েছে, তারাই সফলকাম। ৪:১২৮ আয়াত যাকে বাধা বলে চিহ্নিত করে, ওই দুই আয়াত তাকেই বলে দরজা। আর ৪:১৩০ আয়াত শেষ পথটিও খোলা রাখে, কোনো লজ্জা ছাড়াই: দুজন আলাদা হয়ে গেলে আল্লাহ নিজ প্রাচুর্য থেকে দুজনকেই অভাবমুক্ত করবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Settling Without Pretending",
          "bn": "ভান না করে আপোষ"
        },
        "p": [
          {
            "en": "A settlement needs something specific on the table. The verse does not ask a couple to feel differently; it lets them agree on an arrangement. So name the thing: a night, an expense, a visit to relatives, an hour of the evening, a habit that has become unbearable. Write down what you would let go of and what you would not. The verse permits a real trade between two people, and a trade cannot happen while both sides speak only in generalities about how they feel.",
            "bn": "আপোষের জন্য সামনে কিছু একটা নির্দিষ্ট জিনিস থাকা চাই। আয়াত দুজনকে অনুভূতি বদলাতে বলে না, বলে একটা বন্দোবস্তে রাজি হতে। তাই জিনিসটার নাম নিন: একটা রাত, একটা খরচ, আত্মীয়ের বাড়ি যাওয়া, সন্ধ্যার একটা ঘণ্টা, কিংবা অসহ্য হয়ে ওঠা কোনো অভ্যাস। লিখে ফেলুন কোনটা ছাড়তে পারবেন আর কোনটা পারবেন না। আয়াত দুজন মানুষের মধ্যে সত্যিকারের দেওয়া-নেওয়ার অনুমতি দেয়, আর দুই পক্ষ যদি কেবল নিজেদের অনুভূতি নিয়ে গোল গোল কথা বলে যায়, সেই দেওয়া-নেওয়া কখনো হয় না।"
          },
          {
            "en": "Then apply the verse's own diagnosis. Souls are kept close to their grasping, and both sides usually believe they are the one giving up more. Before the conversation, ask yourself what you are holding that costs you little and costs the other person a great deal. That is almost always the thing to put down first. Ask it of yourself only; the verse says the grasping is in souls, plural, and you have charge of exactly one of them.",
            "bn": "এরপর আয়াত নিজে যে দোষটা ধরিয়ে দেয়, সেটা কাজে লাগান। নফসকে তার কৃপণতার একেবারে গায়ে লাগিয়ে রাখা হয়েছে, আর দুই পক্ষই সাধারণত ভাবে ছাড় বেশি দিচ্ছে সে-ই। কথা বলতে বসার আগে নিজেকে জিজ্ঞেস করুন, এমন কী ধরে আছি যা ছাড়তে আমার খরচ সামান্য অথচ অন্যজনের জন্য তা অনেক বড়? প্রায় সব সময় ওটাই আগে নামিয়ে রাখার জিনিস। প্রশ্নটা কেবল নিজেকেই করুন। আয়াত বলে কৃপণতা আছে নফসগুলোর ভেতরে, বহুবচনে, আর তার একটির দায়িত্বই আপনার হাতে।"
          },
          {
            "en": "Two cautions follow from the verses around it. A settlement is not permission to stop trying, because 4:129 forbids leaving the other person hanging, neither held nor let go; so set a time to look at the arrangement again. And if the two of you cannot reach it alone, 4:35 names the next step before anything breaks: one arbiter from each side who wants the marriage to work. The verse ends on doing good and fearing Allah, which makes the whole arrangement an act of worship done where nobody is watching.",
            "bn": "আশপাশের আয়াত থেকে দুটি সতর্কতা আসে। আপোষ মানে চেষ্টা থামিয়ে দেওয়ার ছাড়পত্র নয়, কারণ ৪:১২৯ আয়াত নিষেধ করে অন্যজনকে ঝুলিয়ে রাখতে, যাকে ধরেও রাখা হয় না ছেড়েও দেওয়া হয় না। তাই বন্দোবস্তটা আবার দেখার জন্য একটা সময় ঠিক করে রাখুন। আর দুজনে মিলে যদি সেখানে পৌঁছাতে না পারেন, কিছু ভেঙে পড়ার আগেই ৪:৩৫ আয়াত পরের ধাপটি বলে দেয়: দুই পক্ষ থেকে একজন করে সালিস, যাঁরা সংসারটা টিকুক তাই চান। আয়াত শেষ হয় সৎকাজ আর তাকওয়ায়, ফলে গোটা বন্দোবস্তটাই হয়ে ওঠে এমন ইবাদত, যা কেউ দেখছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for a Cold House",
          "bn": "ঠান্ডা ঘরের জন্য দু'আ"
        },
        "p": [
          {
            "en": "The verse carries no supplication, so what follows is a short prayer made from its own vocabulary and from 59:9, offered as that and not as a transmitted wording. O Allah, protect me from the grasping of my own soul, and make me of those who succeed. Put repair between us where there is coldness, and let it be the repair You call better. Make me good to the people of my house when my feelings give me no help, and keep me mindful of You in what only You can see.",
            "bn": "আয়াতটিতে কোনো দু'আ নেই। তাই নিচের কথাগুলো আয়াতের নিজের শব্দ আর ৫৯:৯ আয়াত থেকে গড়া ছোট এক প্রার্থনা, বর্ণিত কোনো দু'আ নয়, সেভাবেই পড়ুন। হে আল্লাহ, আমার নিজের নফসের কৃপণতা থেকে আমাকে রক্ষা করুন, আর সফলদের দলে রাখুন। যেখানে ঠান্ডা জমে গেছে সেখানে আমাদের মধ্যে মেরামত ঘটিয়ে দিন, আর তা যেন সেই মেরামতই হয় যাকে আপনি উত্তম বলেছেন। মনের টান যখন কোনো সাহায্য করে না, তখনও আমাকে ঘরের মানুষদের প্রতি ভালো রাখুন, আর যা কেবল আপনি দেখেন সেখানেও আপনার ভয় জাগিয়ে রাখুন।"
          },
          {
            "en": "It is worth saying beside it, for anyone praying it in a hard season, that the passage does not make every marriage last. 4:130 is there too, and it promises provision to both if they part. The prayer above asks for repair because the verse calls repair better, not because parting is a disgrace. What the passage asks of a believer in either case is the same: do good, and fear Allah in what you decide.",
            "bn": "কঠিন সময়ে যিনি এই প্রার্থনা করছেন, তাঁর জন্য পাশে আরেকটি কথা বলে রাখা ভালো: আয়াতগুলোর এই অংশ প্রতিটি সংসার টিকে যাওয়ার কথা দেয় না। ৪:১৩০ আয়াতও আছে, আর তা কথা দেয়, দুজন আলাদা হয়ে গেলে আল্লাহ দুজনকেই রিযিক দেবেন। ওপরের প্রার্থনায় মেরামত চাওয়া হয়েছে, কারণ আয়াত মেরামতকেই উত্তম বলেছে; আলাদা হওয়া লজ্জার বলে নয়। দুই অবস্থাতেই এই অংশ মুমিনের কাছে একই জিনিস চায়: সৎকাজ করো, আর যে সিদ্ধান্তই নাও, তাতে আল্লাহকে ভয় করো।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry Home",
          "bn": "ঘরে নিয়ে যাওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "Is there someone in my house who has been quietly absorbing my withdrawal rather than naming it? If they named it tomorrow, what would I be willing to change by the end of the week? What am I holding on to that costs me almost nothing and costs them a great deal? And when I think about a settlement, am I picturing what I would gain from it or what they would?",
            "bn": "আমার ঘরে এমন কেউ কি আছেন, যিনি আমার গুটিয়ে নেওয়াটা চুপচাপ সয়ে যাচ্ছেন, মুখে আনছেন না? কাল যদি তিনি কথাটা তোলেন, সপ্তাহ শেষ হওয়ার আগে আমি কী বদলাতে রাজি থাকব? এমন কী আঁকড়ে আছি, যা ছাড়তে আমার প্রায় কিছুই যায়-আসে না অথচ তাঁর জন্য তা অনেক বড়? আর আপোষের কথা ভাবলে আমার চোখে কী ভাসে, আমি কী পাব সেটা, নাকি তিনি কী পাবেন সেটা?"
          },
          {
            "en": "The verse ends on doing good and fearing Allah, in a matter nobody outside the house can see. Which part of my conduct at home would change if I believed that clause? Have I ever treated patience from someone as evidence that nothing needs fixing? And if this arrangement were still running five years from now, would I want to be on the other side of it?",
            "bn": "আয়াত শেষ হয় সৎকাজ আর তাকওয়ার কথায়, এমন এক ব্যাপারে যা ঘরের বাইরের কেউ দেখতে পায় না। এই কথাটি সত্যি বলে মানলে ঘরের ভেতরে আমার আচরণের কোন অংশটা বদলে যেত? কারও ধৈর্যকে আমি কি কখনো এই প্রমাণ হিসেবে নিয়েছি যে ঠিক করার মতো কিছু নেই? আর এই বন্দোবস্তটাই যদি পাঁচ বছর পরেও চলতে থাকে, আমি কি তখন এর উল্টো দিকে থাকতে চাইতাম?"
          }
        ]
      }
    ]
  },
  "4:135": {
    "sections": [
      {
        "h": {
          "en": "A Lesson After a Theft Case",
          "bn": "চুরির মামলার পরের শিক্ষা"
        },
        "p": [
          {
            "en": "Ya ayyuha alladhina amanu: at-Tabari reads this call to the believers against what precedes it. From 4:105 the surah has told the Prophet ﷺ not to plead for the treacherous, and in 4:107 not to argue on behalf of those who betray themselves. At-Tabari calls 4:135 a disciplining from Allah of His believing servants, so that they would not do what was done by those who went to the Prophet ﷺ about Banu Ubayriq, asking him to clear them before his Companions, defending them and pleading that they were people of need and poverty.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ: আয়াতটি শুরু হয় মুমিনদের ডাক দিয়ে, আর তাবারী একে পড়েন ঠিক আগের আলোচনার আলোয়। ৪:১০৫ থেকে সূরাটি নবী ﷺ-কে বলে আসছে খেয়ানতকারীদের পক্ষে উকিল না হতে। ৪:১০৭ আয়াতে বলছে, যারা নিজেদের সঙ্গেই খেয়ানত করে তাদের হয়ে তর্ক না করতে। তাবারীর ভাষায় ৪:১৩৫ হলো মুমিন বান্দাদের প্রতি আল্লাহর আদব শিক্ষা। কিছু লোক বনু উবাইরিকের ব্যাপারে নবী ﷺ-এর কাছে গিয়েছিল। তারা চেয়েছিল তিনি সাহাবীদের সামনে ওদের নির্দোষ বলুন। তারা ওদের পক্ষ নিয়েছিল, আর বলেছিল এরা অভাবী গরিব মানুষ। মুমিনরা যেন তাদের মতো না করে, এটাই শিক্ষা।"
          },
          {
            "en": "He spells out what the lesson says. Whoever rises to testify for a person or against him must speak justly, even when the testimony falls on himself, his father, his mother or his relatives. The wealth of the person testified for, his poverty, or his kinship to the witness must not carry the witness into false testimony for him, or into dropping and hiding the true testimony against him. That episode concerns those particular people as at-Tabari reports it, and licenses nothing against any living person or community.",
            "bn": "শিক্ষাটা কী, তাবারী তা খুলে বলেন। কেউ কারও পক্ষে বা বিপক্ষে সাক্ষ্য দিতে দাঁড়ালে তাকে ন্যায্য কথাই বলতে হবে, সাক্ষ্য তার নিজের, বাবার, মায়ের কিংবা আত্মীয়দের বিরুদ্ধে গেলেও। যার পক্ষে সাক্ষ্য, তার ধনসম্পদ, তার দারিদ্র্য বা সাক্ষীর সঙ্গে তার আত্মীয়তা যেন সাক্ষীকে মিথ্যা সাক্ষ্যের দিকে না ঠেলে। তার বিরুদ্ধে সত্য সাক্ষ্য ছেড়ে দিয়ে চেপে যাওয়ার দিকেও যেন না ঠেলে। ঘটনাটি তাবারীর বর্ণনামতো ওই নির্দিষ্ট লোকদের নিয়ে। এটি আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Accounts of the Occasion",
          "bn": "নাযিলের প্রেক্ষাপট নিয়ে দুই বর্ণনা"
        },
        "p": [
          {
            "en": "At-Tabari also records a different account. As-Suddi said the verse came down concerning the Prophet ﷺ: two men brought a dispute to him, one rich and one poor, and his sympathy lay with the poor man, since he held that a poor man does not wrong a rich one; and Allah would accept nothing but that justice be upheld for the rich and the poor alike. Al-Qurtubi gives the same report from as-Suddi.",
            "bn": "তাবারী আরেকটি ভিন্ন বর্ণনাও এনেছেন। সুদ্দী বলেছেন, আয়াতটি নাযিল হয় নবী ﷺ-কে কেন্দ্র করে। দুজন লোক তাঁর কাছে একটি বিবাদ নিয়ে আসে, একজন ধনী, একজন গরিব। তাঁর সহানুভূতি ছিল গরিব লোকটির দিকে, কারণ তিনি মনে করতেন গরিব মানুষ ধনীর উপর জুলুম করে না। আর আল্লাহ চাইলেন ধনী ও গরিব দুজনের বেলাতেই ন্যায় প্রতিষ্ঠিত হোক, এর বাইরে কিছু নয়। কুরতুবীও সুদ্দী থেকে একই বর্ণনা এনেছেন।"
          },
          {
            "en": "At-Tabari does not adopt it. Others, he says, held what we hold: that the verse came down about testimony, a command to the believers to treat rich and poor equally when they bear witness. He cites Ibn Abbas (RA): Allah commanded the believers to say the truth even against themselves, their fathers or their sons, not to favour a rich man for his wealth and not to pity a poor man for his poverty. The two accounts stand here side by side, each under its own name.",
            "bn": "তাবারী নিজে এ মত গ্রহণ করেননি। তিনি বলেন, অন্যরা আমাদের মতোই বলেছেন: আয়াতটি সাক্ষ্য প্রসঙ্গে নাযিল হয়েছে। সাক্ষ্য দেওয়ার সময় ধনী আর গরিবকে সমান চোখে দেখতে আল্লাহ মুমিনদের আদেশ দিয়েছেন। এ প্রসঙ্গে তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন। আল্লাহ মুমিনদের আদেশ দিয়েছেন সত্য বলতে, নিজেদের, বাপদাদার বা সন্তানদের বিরুদ্ধে গেলেও। ধনীকে তার ধনের খাতিরে খাতির নয়, গরিবকে তার দারিদ্র্যের কারণে দয়া নয়। দুটি বর্ণনাই এখানে পাশাপাশি থাকল, যার যার নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "Standing, Again and Again",
          "bn": "বারবার, বারবার দাঁড়ানো"
        },
        "p": [
          {
            "en": "Kunu qawwamina bil-qist. Al-Qurtubi notes that qawwamin is a form built for intensity: let standing for justice recur from you, again and again. As-Sa'di reads it the same way: be, in all your states, ones who uphold qist, which is justice in the rights of Allah and in the rights of His servants. Qist toward Allah, he says, is not to use His blessings to disobey Him but to spend them in obeying Him. Qist toward people is to pay every right you owe, as you demand your own.",
            "bn": "কূনূ কাওয়ামীনা বিল কিসত। কুরতুবী লক্ষ করেন, কাওয়ামীন শব্দের গড়নটাই আধিক্য বোঝাতে। অর্থাৎ ন্যায়ের জন্য দাঁড়ানো যেন আপনার কাছ থেকে বারবার ঘটে। সা'দীও এভাবেই পড়েন: সব অবস্থায় কিসত কায়েমকারী হও। কিসত মানে আল্লাহর হক আর বান্দার হক, দুই ক্ষেত্রেই ইনসাফ। তাঁর ব্যাখ্যায় আল্লাহর ক্ষেত্রে কিসত হলো তাঁর নিয়ামতকে নাফরমানির কাজে না লাগিয়ে আনুগত্যে খরচ করা। মানুষের ক্ষেত্রে কিসত হলো নিজের হক যেভাবে চান, নিজের উপর যত হক আছে তাও সেভাবেই আদায় করা।"
          },
          {
            "en": "Among its greatest kinds, as-Sa'di adds, is fairness toward statements and those who make them: no one decides for a view or a disputant because of whom he belongs to or leans toward. Ma'arif al-Qur'an asks why the verse uses this long phrase when a single word, aqsitu, do justice, serves in 49:9. Its answer: anyone, even a tyrannical ruler, may happen to be just in one case. Qawwamin makes justice a constant duty, at all times and in all conditions, for friend and foe.",
            "bn": "সা'দী আরও বলেন, কিসতের বড় একটি রূপ হলো কথা আর কথকের বেলায় ইনসাফ। কারও দলের পরিচয় বা কারও দিকে মনের টানের কারণে দুই মতের একটির পক্ষে, কিংবা দুই পক্ষের একজনের পক্ষে রায় দেওয়া চলে না। মাআরিফুল কুরআন প্রশ্ন তোলে, ৪৯:৯ আয়াতে তো এক শব্দেই কাজ সেরেছে: আকসিতূ, ইনসাফ কর। তবে এখানে এত লম্বা বাক্য কেন? উত্তর: কোনো এক মামলায় ঘটনাচক্রে ইনসাফ করে ফেলা যে কারও পক্ষে সম্ভব, জালিম শাসকের পক্ষেও। কাওয়ামীন শব্দ ইনসাফকে বানায় স্থায়ী দায়িত্ব, সব সময়, সব অবস্থায়, বন্ধু-শত্রু সবার জন্য।"
          },
          {
            "en": "Ibn Kathir describes the same posture as movement: do not turn from justice to the right or the left, and let no blamer's blame take hold of you in Allah's cause. He adds a social clause: be people who help, support and stand by one another in it, so that justice is something believers hold up together. Al-Muyassar keeps to the plain line: be ones who stand by justice.",
            "bn": "ইবন কাসীর একই অবস্থানকে বোঝান চলার ভাষায়: ইনসাফ থেকে ডানে বা বাঁয়ে সরে যাওয়া নয়, আর আল্লাহর পথে কোনো নিন্দুকের নিন্দা যেন আপনাকে পেয়ে না বসে। সঙ্গে তিনি একটি সামাজিক কথাও জুড়ে দেন: এ কাজে একে অপরের সাহায্যকারী, সহযোগী ও পাশে দাঁড়ানো মানুষ হও। ইনসাফ তাহলে এমন জিনিস, যা মুমিনরা মিলেমিশে ধরে রাখে। মুয়াসসার সোজা কথায় থামে: ন্যায়ের উপর প্রতিষ্ঠিত থাকো।"
          }
        ]
      },
      {
        "h": {
          "en": "Witnesses for His Sake Alone",
          "bn": "সাক্ষ্য শুধু তাঁরই জন্য"
        },
        "p": [
          {
            "en": "Shuhada'a lillah: witnesses for Allah. Ibn Kathir sets the phrase beside 65:2, and establish the testimony for Allah, and explains: let its delivery be in pursuit of Allah's face; only then is it sound and truly just, free of distortion, alteration and concealment. Qatadah, as at-Tabari relates him, puts it more sharply: testimony is for Allah and not for people, and justice is Allah's balance on the earth.",
            "bn": "শুহাদাআ লিল্লাহ: আল্লাহর জন্য সাক্ষী। ইবন কাসীর কথাটিকে ৬৫:২ আয়াতের পাশে রাখেন, যেখানে বলা হয়েছে: আল্লাহর জন্য সাক্ষ্য কায়েম কর। তাঁর ব্যাখ্যা: সাক্ষ্য দেওয়া হোক আল্লাহর সন্তুষ্টির খোঁজে। তখনই তা হয় সঠিক ও খাঁটি ন্যায্য, বিকৃতি, রদবদল আর গোপন করা থেকে মুক্ত। তাবারীর বর্ণনায় কাতাদা কথাটা আরও ধারালো করে বলেন: সাক্ষ্য আল্লাহর জন্য, মানুষের জন্য নয়। আর ইনসাফ হলো পৃথিবীতে আল্লাহর মীযান।"
          },
          {
            "en": "Al-Qurtubi sets out how the phrase attaches to what precedes it. An-Nahhas thought it best taken as a state: stand by justice when you testify, which is also how at-Tabari reads it. Ibn Atiyyah objected that this narrows standing for justice to testimony alone. Al-Qurtubi also mentions a reading of shuhada'a lillah as bearing witness to Allah's oneness, and judges the first interpretation clearer.",
            "bn": "শব্দবন্ধটি আগের অংশের সঙ্গে কীভাবে জুড়েছে, কুরতুবী সে প্রশ্নটি গুছিয়ে তুলে ধরেন। নাহহাসের মতে সবচেয়ে ভালো হলো একে অবস্থা হিসেবে ধরা: সাক্ষ্য দেওয়ার সময় ন্যায়ের উপর দাঁড়াও। তাবারীও এভাবেই পড়েন। ইবন আতিয়্যা আপত্তি তোলেন, এতে ন্যায়ের উপর দাঁড়ানো শুধু সাক্ষ্যের গণ্ডিতে আটকে যায়। কুরতুবী আরেকটি পাঠও উল্লেখ করেন: শুহাদাআ লিল্লাহ মানে আল্লাহর একত্বের সাক্ষী। তবে তাঁর বিচারে প্রথম ব্যাখ্যাটিই বেশি স্পষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "A Witness Against Himself",
          "bn": "নিজের বিরুদ্ধে নিজেই সাক্ষী"
        },
        "p": [
          {
            "en": "Wa law 'ala anfusikum: even against yourselves. At-Tabari raises the obvious objection himself: how does a witness testify against himself? He answers that a person owes a right to someone else and acknowledges it to him; that is his testimony against himself. Al-Qurtubi gives the same definition, and al-Baghawi glosses the phrase as by confession. Ibn Kathir widens it: when you are asked about a matter, say the truth even if the harm comes back on you, for Allah gives those who obey Him relief and a way out.",
            "bn": "ওয়া লাও আলা আনফুসিকুম: নিজেদের বিরুদ্ধে হলেও। স্বাভাবিক আপত্তিটা তাবারী নিজেই তোলেন: সাক্ষী নিজের বিরুদ্ধে সাক্ষ্য দেয় কীভাবে? তাঁর উত্তর: কারও উপর অন্যের কোনো হক আছে, আর সে তা স্বীকার করে নেয়। এটাই নিজের বিরুদ্ধে সাক্ষ্য। কুরতুবীও একই সংজ্ঞা দেন। বাগাভী অংশটির অর্থ করেন স্বীকারোক্তির মাধ্যমে। ইবন কাসীর পরিধি আরও বাড়ান। কোনো বিষয়ে জিজ্ঞাসা করা হলে সত্য বলুন, ক্ষতিটা নিজের ঘাড়ে এসে পড়লেও। কারণ যে আল্লাহর আনুগত্য করে, তার জন্য আল্লাহ স্বস্তি আর বেরোনোর পথ করে দেন।"
          },
          {
            "en": "Then come parents and near kin. Al-Qurtubi explains the order: parents are named for the duty of kindness owed them and their great standing, then relatives, since they are where affection and partisanship are expected; a stranger is all the more to be given justice. He reports no disagreement among scholars that a child's testimony against a parent stands, and calls it part of kindness to them, saving them from falsehood, citing 66:6. Ibn Kathir: show them no favour in it, for the truth rules over everyone.",
            "bn": "এরপর আসে মা-বাবা আর নিকটাত্মীয়। কুরতুবী ক্রমটা ব্যাখ্যা করেন। মা-বাবার কথা এসেছে তাঁদের সঙ্গে সদ্ব্যবহারের দায় আর তাঁদের মর্যাদার কারণে। তারপর আত্মীয়রা, কারণ ভালোবাসা আর পক্ষপাত সাধারণত তাদের ঘিরেই। তাহলে অচেনা মানুষ তো ইনসাফ পাওয়ার আরও বেশি হকদার। তিনি জানান, সন্তান মা-বাবার বিরুদ্ধে সাক্ষ্য দিলে তা গ্রহণযোগ্য, এ নিয়ে আলেমদের মধ্যে কোনো মতভেদ নেই। বরং ৬৬:৬ উদ্ধৃত করে বলেন, তাঁদের বাতিল থেকে বাঁচানোও সদ্ব্যবহার। ইবন কাসীরের কথা: সাক্ষ্যে তাঁদের খাতির করবেন না, কারণ সত্য সবার উপর ফয়সালাকারী।"
          },
          {
            "en": "Testimony for kin, rather than against them, is where the scholars split. Az-Zuhri, quoted by both at-Tabari and al-Qurtubi, said the righteous early Muslims accepted the testimony of a father for his son, a brother for his brother and a man for his wife, reading this very verse; then things appeared among people that led those in authority to suspect them, and such testimony was set aside. The article records the disagreement and leaves it unsettled.",
            "bn": "আত্মীয়ের বিরুদ্ধে নয়, আত্মীয়ের পক্ষে সাক্ষ্য দেওয়া নিয়েই আলেমরা দ্বিমত করেছেন। তাবারী ও কুরতুবী দুজনেই যুহরীর কথা এনেছেন। পূর্বসূরি নেককার মুসলিমরা ছেলের পক্ষে বাবার, ভাইয়ের পক্ষে ভাইয়ের আর স্ত্রীর পক্ষে স্বামীর সাক্ষ্য গ্রহণ করতেন, আর দলিল হিসেবে এ আয়াতটিই পড়তেন। পরে মানুষের মধ্যে এমন কিছু দেখা দিল, যার ফলে শাসকেরা তাদের সন্দেহ করতে লাগলেন, আর এমন সাক্ষ্য বাদ পড়ে গেল। এ লেখা মতভেদটুকু তুলে ধরল, মীমাংসা করল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Rich or Poor, He Is Nearer",
          "bn": "ধনী হোক বা গরিব, তিনিই নিকটতর"
        },
        "p": [
          {
            "en": "In yakun ghaniyyan aw faqiran fa-Allahu awla bihima. Ibn Kathir: do not favour him for his wealth or pity him for his poverty; Allah takes charge of both, is nearer to both than you, and knows better what is good for them. At-Tabari grounds it in ownership: He is their Owner, more entitled to them than you, and so knows better what serves each, which is why He commanded equal treatment. Al-Qurtubi adds that Allah is nearer to them in what He chose for them, poverty or wealth.",
            "bn": "ইন ইয়াকুন গানিয়্যান আও ফাকীরান ফাল্লাহু আওলা বিহিমা। ইবন কাসীরের ব্যাখ্যা: ধনী বলে তাকে খাতির করবেন না, গরিব বলে তার প্রতি দয়াপরবশ হবেন না। দুজনের দেখভাল আল্লাহই করেন, আপনার চেয়ে তিনিই তাদের বেশি নিকটে, আর তাদের কল্যাণ কিসে, তা তিনিই ভালো জানেন। তাবারী এর ভিত্তি খোঁজেন মালিকানায়। তিনিই তাদের মালিক, আপনার চেয়ে তাদের উপর তাঁর হক বেশি। তাই কার কিসে মঙ্গল, তা তিনিই ভালো জানেন, আর সে কারণেই সমান আচরণের আদেশ। কুরতুবী যোগ করেন, দারিদ্র্য হোক বা প্রাচুর্য, তাদের জন্য তিনি যা বেছে নিয়েছেন, সে ব্যাপারেও তিনিই নিকটতর।"
          },
          {
            "en": "Ibn Zayd, in at-Tabari, puts the two temptations into the witness's own mouth. One says: I will keep quiet about him; he is a poor man and I pity him. Another says: this man is rich, I will spare him and hope for what he has. As for the dual bihima, them both, after aw, or, al-Qurtubi reads it as each of the two; al-Akhfash took aw to mean and, which al-Qurtubi calls weak; and others compare 4:12, where a dual follows the same pattern.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ দুই প্রলোভনকে তুলে দেন সাক্ষীর নিজের মুখে। কেউ বলে: ওর ব্যাপারে চুপ থাকব, বেচারা গরিব, ওর জন্য মায়া হয়। আরেকজন বলে: লোকটা ধনী, ওকে রেহাই দিই, ওর কাছ থেকে কিছু পাওয়ার আশা আছে। এবার ব্যাকরণ। আও, অর্থাৎ অথবা, শব্দের পরে এসেছে দ্বিবচন বিহিমা, দুজনেরই। কুরতুবী এর অর্থ করেন: দুজনের প্রত্যেকের। আখফাশ আও-কে ধরেছেন ওয়া অর্থাৎ এবং অর্থে, যাকে কুরতুবী দুর্বল বলেছেন। আর কেউ কেউ ৪:১২ আয়াতের সঙ্গে তুলনা করেছেন, যেখানে একই ধাঁচে দ্বিবচন এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Desire, Read Two Ways",
          "bn": "প্রবৃত্তি, দুই রকম পাঠ"
        },
        "p": [
          {
            "en": "Fa-la tattabi'u al-hawa an ta'dilu. Al-Baghawi gives two readings of the grammar. In the first, an ta'dilu means lest you swerve: do not follow desire, so that you deviate and lean from the truth to falsehood. In the second, introduced with it was said, it means do not follow desire in order that you may be just, as people say: do not follow your desire, so that you please your Lord. At-Tabari, too, gives the first and records the second as a view others held.",
            "bn": "ফালা তাত্তাবিউল হাওয়া আন তা'দিলূ। বাগাভী এখানে ব্যাকরণের দুটি পাঠ দেন। প্রথম পাঠে আন তা'দিলূ মানে যাতে তোমরা সরে না যাও। অর্থাৎ প্রবৃত্তির অনুসরণ কোরো না, নইলে সত্য ছেড়ে বাতিলের দিকে ঝুঁকে পড়বে। দ্বিতীয় পাঠটি তিনি আনেন 'বলা হয়েছে' বলে: প্রবৃত্তির অনুসরণ কোরো না, যাতে ন্যায়বান হতে পার। যেমন লোকে বলে, প্রবৃত্তির পেছনে ছুটো না, যাতে রবকে রাজি করতে পার। তাবারীও প্রথম পাঠটি দেন, আর দ্বিতীয়টিকে উল্লেখ করেন অন্যদের মত হিসেবে।"
          },
          {
            "en": "As-Sa'di calls desire the greatest obstacle to justice, working in either of two ways: it blinds its owner until he sees truth as falsehood and falsehood as truth, or he recognises the truth and abandons it for the sake of his desire. Al-Qurtubi sets the clause beside 38:26, where Dawud (AS) is told to judge with truth and not follow desire, and cites ash-Sha'bi: Allah took three pledges from judges, not to follow desire, to fear Him rather than people, and not to sell His verses for a small price.",
            "bn": "সা'দী প্রবৃত্তির অনুসরণকে বলেন ইনসাফের পথে সবচেয়ে বড় বাধা। এটি কাজ করে দুই পথে। হয় মানুষকে এমন অন্ধ করে দেয় যে সে হককে বাতিল আর বাতিলকে হক দেখে। নয়তো সে হক চিনেও প্রবৃত্তির খাতিরে তা ছেড়ে দেয়। কুরতুবী অংশটিকে রাখেন ৩৮:২৬ আয়াতের পাশে, যেখানে দাউদ (আঃ)-কে বলা হয়েছে হক দিয়ে ফয়সালা করতে আর প্রবৃত্তির অনুসরণ না করতে। তিনি শা'বীর কথাও আনেন: আল্লাহ বিচারকদের কাছ থেকে তিনটি অঙ্গীকার নিয়েছেন। প্রবৃত্তির অনুসরণ না করা, মানুষকে নয়, তাঁকে ভয় করা, আর তাঁর আয়াত সামান্য দামে বিক্রি না করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Twisting, or Turning Away",
          "bn": "পেঁচানো, নয়তো মুখ ফেরানো"
        },
        "p": [
          {
            "en": "Wa in talwu aw tu'ridu. At-Tabari reports that the readers of the cities other than Kufah read talwu, with two waws, from layy, putting off a debt owed; a group of Kufan readers read talu, with a single waw. He rejects the second on both of its explanations, accepting only talwu. Al-Qurtubi names Ibn Amir and the Kufans for talu, al-Baghawi names Ibn Amir and Hamzah, and al-Qurtubi relates that an-Nahhas, Makki and az-Zajjaj explained it as a lightened talwu, so that the two readings agree.",
            "bn": "ওয়া ইন তালউ আও তু'রিদূ। তাবারী জানান, কূফা ছাড়া অন্যান্য নগরের কারীরা পড়েছেন তালউ, দুই ওয়াও দিয়ে। শব্দটি এসেছে লাইয়্য থেকে, যার অর্থ পাওনা দেনা আদায়ে টালবাহানা। কূফার একদল কারী পড়েছেন তালূ, এক ওয়াও দিয়ে। তাবারী এই দ্বিতীয় পাঠের দুই ব্যাখ্যার কোনোটিকেই সঠিক মনে করেন না। তাঁর কাছে গ্রহণযোগ্য পাঠ শুধু তালউ। কুরতুবী তালূ পাঠের জন্য ইবন আমির ও কূফাবাসীদের নাম নেন, আর বাগাভী নাম নেন ইবন আমির ও হামযার। কুরতুবী আরও জানান, নাহহাস, মাক্কী ও যাজ্জাজ একে তালউ-এরই হালকা রূপ বলে ব্যাখ্যা করেছেন। তাতে দুই পাঠের অর্থ মিলে যায়।"
          },
          {
            "en": "Whose twisting is meant? At-Tabari records a disagreement. Ibn Abbas, in one report, said it concerns two men sitting before a judge, and the twisting and turning away are the judge's, toward one of them against the other; al-Qurtubi explains layy here as drawing out the hearing until the verdict slips away. In other reports Ibn Abbas, with Mujahid, Qatadah, as-Suddi, ad-Dahhak and Ibn Zayd, applies it to witnesses: twisting the testimony with the tongue, or turning from it and concealing it. As-Suddi gives the excuse in words: I have no testimony.",
            "bn": "পেঁচানোটা কার? তাবারী এখানে মতভেদ উল্লেখ করেন। এক বর্ণনায় ইবন আব্বাস (রাঃ) বলেছেন, এটি সেই দুই লোকের কথা যারা বিচারকের সামনে বসে। পেঁচানো আর মুখ ফেরানো তখন বিচারকের, একজনের দিকে ঝুঁকে অন্যজনের বিরুদ্ধে। কুরতুবী এখানে লাইয়্যের অর্থ করেন শুনানি টেনে লম্বা করা, যতক্ষণ না রায় হাতছাড়া হয়। অন্য বর্ণনাগুলোতে ইবন আব্বাস (রাঃ), সঙ্গে মুজাহিদ, কাতাদা, সুদ্দী, দাহহাক ও ইবন যায়দ, একে সাক্ষীর ব্যাপারে ধরেছেন। জিহ্বা দিয়ে সাক্ষ্য পেঁচানো, কিংবা তা থেকে মুখ ফিরিয়ে চেপে যাওয়া। সুদ্দী অজুহাতটা মুখের ভাষাতেই দেন: আমার কাছে কোনো সাক্ষ্য নেই।"
          },
          {
            "en": "At-Tabari prefers the witnesses' reading, because the verse opened by commanding them to stand for justice as witnesses, and that is the plainest sense of shuhada'. Al-Qurtubi says the wording covers both judging and testimony. As-Sa'di extends turning away to a witness abandoning his testimony and a judge abandoning the judgment he owes, and says that whoever rules by falsehood or testifies falsely is worse still, since he left the truth and also stood up for falsehood.",
            "bn": "তাবারী সাক্ষীর পক্ষের ব্যাখ্যাটিকেই অগ্রাধিকার দেন। কারণ আয়াতের শুরুতেই আদেশ এসেছে সাক্ষী হিসেবে ন্যায়ের উপর দাঁড়াতে, আর শুহাদা শব্দের সবচেয়ে স্পষ্ট অর্থও এটাই। কুরতুবী বলেন, আয়াতের শব্দ বিচার আর সাক্ষ্য দুটোকেই শামিল করে। সা'দী মুখ ফেরানোর অর্থ আরও ছড়িয়ে দেন: সাক্ষীর নিজের সাক্ষ্য ছেড়ে দেওয়া, আর বিচারকের তাঁর দায়িত্বের ফয়সালা ছেড়ে দেওয়া। তিনি বলেন, যে বাতিল দিয়ে ফয়সালা করে বা মিথ্যা সাক্ষ্য দেয়, সে আরও বড় অপরাধী। কারণ সে হক ছেড়েছে, আবার বাতিলের পক্ষেও দাঁড়িয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Witness Who Comes Forward",
          "bn": "যে সাক্ষী নিজেই এগিয়ে আসে"
        },
        "p": [
          {
            "en": "Ibn Kathir closes the clause with 2:283, whoever conceals it, his heart is sinful, and a hadith that Muslim records (1719) from Zayd ibn Khalid al-Juhani: the Prophet ﷺ said, 'Shall I not tell you of the best witnesses? He is the one who produces his evidence before he is asked for it.' The hadith does not name this verse; Ibn Kathir brings it here. Then fa-inna Allaha kana bima ta'maluna khabira: at-Tabari says He keeps account of your testifying, twisting and concealing, to repay each of you in the Hereafter.",
            "bn": "ইবন কাসীর অংশটির আলোচনা শেষ করেন ২:২৮৩ আয়াত দিয়ে: যে তা গোপন করে, তার অন্তর গুনাহগার। সঙ্গে আনেন একটি হাদীস, যা মুসলিম (১৭১৯) যায়দ ইবন খালিদ আল-জুহানী (রাঃ) থেকে বর্ণনা করেছেন। নবী ﷺ বলেছেন: আমি কি তোমাদের সবচেয়ে উত্তম সাক্ষীর কথা বলব না? সে-ই, যে জিজ্ঞাসা করার আগেই নিজের সাক্ষ্য নিয়ে হাজির হয়। হাদীসটিতে এ আয়াতের উল্লেখ নেই, ইবন কাসীর এটি এখানে এনেছেন। এরপর আয়াতের শেষ: ফাইন্নাল্লাহা কানা বিমা তা'মালূনা খাবীরা। তাবারী বলেন, সাক্ষ্য দেওয়া, পেঁচানো, চেপে যাওয়া, সবকিছুর হিসাব তিনি রাখেন, আখিরাতে প্রত্যেককে তার প্রতিদান দেবেন বলে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the address, O you who believe, as placing this duty on every believer, not on courts and governments alone. The verse's pressures mostly arrive in smaller forms: a word asked about a relative, an account of a family quarrel, a debt we would rather not admit. The verse rules on no present court, state or party; it tells a believer what to do with the truth he holds. 5:8 turns the same command toward a people one dislikes, and 4:136 follows with a call to believe in Allah, His Messenger and the Book.",
            "bn": "মাআরিফুল কুরআন ইয়া আইয়ুহাল্লাযীনা আমানূ সম্বোধন থেকে বোঝে, এ দায়িত্ব প্রত্যেক মুমিনের, শুধু আদালত বা সরকারের নয়। আয়াতের চাপগুলো সাধারণত আসে ছোট ছোট রূপে। কোনো আত্মীয় সম্পর্কে কেউ মত জানতে চাইল, পরিবারের ঝগড়ার বিবরণ দিতে হলো, কিংবা এমন কোনো দেনা, যা স্বীকার করতে মন চায় না। আয়াতটি আজকের কোনো আদালত, রাষ্ট্র বা দল সম্পর্কে রায় দেয় না। মুমিনের হাতে যে সত্য আছে, তা নিয়ে তার করণীয় কী, সেটুকুই বলে। ৫:৮ আয়াত একই আদেশকে ফেরায় অপছন্দের সম্প্রদায়ের দিকে, আর ৪:১৩৬ আয়াতে এরপর আসে আল্লাহ, তাঁর রাসূল ও কিতাবের উপর ঈমান আনার ডাক।"
          }
        ]
      }
    ]
  },
  "4:142-143": {
    "sections": [
      {
        "h": {
          "en": "Where the Portrait Hangs",
          "bn": "যে দেয়ালে ছবিটি ঝোলে"
        },
        "p": [
          {
            "en": "Inna al-munafiqina yukhadi'una Allaha wa huwa khadi'uhum: the hypocrites seek to deceive Allah, and He is deceiving them. These two verses, 4:142 and 4:143, stand in the middle of a long passage of Surah an-Nisa about the hypocrites. It opens in 4:138 with tidings of a painful punishment, describes in 4:139 those who seek honour with the disbelievers, and in 4:141 those who wait to see who wins and then claim a share of either side's success. Here the passage turns from their politics to their prayer.",
            "bn": "ইন্নাল মুনাফিকীনা ইউখাদিঊনাল্লাহা ওয়া হুয়া খাদিউহুম: মুনাফিকরা আল্লাহকে ধোঁকা দিতে চায়, অথচ তিনিই তাদের ধোঁকায় ফেলেন। ৪:১৪২ ও ৪:১৪৩, এই দুই আয়াতের অবস্থান সূরা আন-নিসার মুনাফিকদের নিয়ে লম্বা একটি অংশের মাঝখানে। অংশটি শুরু হয় ৪:১৩৮ আয়াতে, যন্ত্রণাদায়ক শাস্তির খবর দিয়ে। ৪:১৩৯ আয়াতে আছে তাদের কথা, যারা কাফিরদের কাছে সম্মান খোঁজে। ৪:১৪১ আয়াতে তাদের কথা, যারা ওত পেতে থাকে কে জেতে দেখার জন্য, আর যে পক্ষই জিতুক, ভাগ দাবি করে বসে। এখানে এসে আলোচনা তাদের রাজনীতি ছেড়ে তাদের নামাজের দিকে ঘোরে।"
          },
          {
            "en": "Two neighbours frame the reading. Surah al-Baqarah has already said, in 2:9, that such people seek to deceive Allah and the believers and deceive only themselves; Ibn Kathir and at-Tabari both point back to it, and that ground is not walked again here. Ahead, 4:144 forbids the believers to take disbelievers as allies, and 4:145 names where the hypocrites end, in the lowest depth of the Fire. Between those two lines, these verses show what the condition looks like from inside a mosque.",
            "bn": "দুই পাশের দুটি আয়াত পাঠের কাঠামো ঠিক করে দেয়। সূরা আল-বাকারার ২:৯ আয়াত আগেই বলেছে, এরা আল্লাহ ও মুমিনদের ধোঁকা দিতে চায়, অথচ ধোঁকা দেয় কেবল নিজেদেরই। ইবন কাসীর ও তাবারী দুজনেই সেদিকে ইঙ্গিত করেন; সে প্রসঙ্গ এখানে আর তুলছি না। সামনে ৪:১৪৪ আয়াত মুমিনদের নিষেধ করে কাফিরদের বন্ধু বানাতে, আর ৪:১৪৫ আয়াত জানায় মুনাফিকদের শেষ ঠিকানা, জাহান্নামের সবচেয়ে নিচের স্তর। এই দুইয়ের মাঝখানে আয়াত দুটি দেখায়, মসজিদের ভেতর থেকে রোগটা দেখতে কেমন।"
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
            "en": "Ibn Kathir begins with a denial: there is no doubt that Allah is not deceived, for He knows the secrets and what the hearts conceal. The hypocrites, he says, out of ignorance and little understanding, believe that because their affair passed with people, and the rulings of the Shari'ah were applied to them on the outside, it will pass the same way with Allah on the Day of Resurrection. He cites 58:18, where on that Day they will swear to Allah as they used to swear to the believers.",
            "bn": "ইবন কাসীর শুরু করেন একটি অস্বীকৃতি দিয়ে: আল্লাহকে ধোঁকা দেওয়া যায় না, এতে কোনো সন্দেহ নেই, কারণ তিনি গোপন কথা আর অন্তরের লুকানো ভাবনা সবই জানেন। তাঁর ব্যাখ্যায়, মুনাফিকরা অজ্ঞতা আর বোধের কমতির কারণে ভাবে, মানুষের কাছে যেমন তাদের ব্যাপারটা চলে গেছে, বাইরের দিক দেখে শরীয়তের বিধান যেমন তাদের ওপর জারি হয়েছে, কিয়ামতের দিন আল্লাহর কাছেও তেমনি চলে যাবে। তিনি ৫৮:১৮ আয়াত উদ্ধৃত করেন: সেদিন তারা আল্লাহর সামনে কসম খাবে, যেমন মুমিনদের সামনে খেত।"
          },
          {
            "en": "At-Tabari defines both halves in this world's terms. The hypocrites deceive Allah by securing their lives and property through hypocrisy; Allah deceives them by His ruling that their blood is protected for the faith their tongues professed, while He knows the disbelief inside. He calls it istidraj, a leading-on in this world, until they meet Him and He brings them into the Fire for what they hid. Ibn Kathir uses the same word: He leads them on in their misguidance and forsakes them from the truth.",
            "bn": "তাবারী দুই দিকই ব্যাখ্যা করেন দুনিয়ার ভাষায়। মুনাফিকরা আল্লাহকে ধোঁকা দেয় নিফাকের আড়ালে নিজেদের জান আর মাল বাঁচিয়ে। আর আল্লাহ তাদের ধোঁকায় ফেলেন তাঁর বিধান দিয়ে: মুখে ঈমানের কথা বলেছে বলে তাদের রক্ত নিরাপদ, অথচ ভেতরের কুফর তিনি জানেন। তাবারী একে বলেন ইস্তিদরাজ, দুনিয়ায় ধাপে ধাপে ঢিল দেওয়া, যতক্ষণ না তারা তাঁর সামনে হাজির হয় আর লুকানো কুফরের কারণে তিনি তাদের জাহান্নামে পৌঁছে দেন। ইবন কাসীরও একই শব্দ ব্যবহার করেন: তিনি তাদের গোমরাহিতে ধাপে ধাপে এগিয়ে নেন, আর সত্য থেকে বঞ্চিত রাখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Light That Goes Out",
          "bn": "যে আলো নিভে যায়"
        },
        "p": [
          {
            "en": "Several of the early generation read the clause through a scene from the Day of Resurrection, and at-Tabari records three. As-Suddi: He gives them a light to walk with beside the Muslims, as they walked with them in this world, then strips it away and puts it out, and they stand in their darkness. Ibn Jurayj: when they reach the wall, the light is taken. Al-Hasan, whenever he recited the verse, said the hypocrites' light goes out at the Bridge, and that is Allah's deception of them.",
            "bn": "পূর্বসূরিদের কয়েকজন এই বাক্যটি পড়েছেন কিয়ামতের একটি দৃশ্যের আলোয়, আর তাবারী তাঁদের তিনজনের কথা এনেছেন। সুদ্দী বলেন: সেদিন আল্লাহ তাদের একটি আলো দেবেন, যা নিয়ে তারা মুসলমানদের পাশাপাশি হাঁটবে, যেমন দুনিয়ায় তাদের সঙ্গে চলত। তারপর আলোটা কেড়ে নিয়ে নিভিয়ে দেবেন, আর তারা অন্ধকারে দাঁড়িয়ে থাকবে। ইবন জুরাইজ বলেন: প্রাচীরের কাছে পৌঁছালে আলো কেড়ে নেওয়া হবে। আল-হাসান এই আয়াত পড়লেই বলতেন, পুলসিরাতে গিয়ে মুনাফিকদের আলো নিভে যাবে; এটাই তাদের প্রতি আল্লাহর ধোঁকা।"
          },
          {
            "en": "Their reading rests on 57:13, where the hypocrites beg the believers, wait for us, let us take some of your light, and are told to go back and seek a light. Al-Qurtubi and al-Baghawi carry the same scene and name the principle: Allah's deceiving them is His requital of their deception, with the like of their deed, al-Muyassar adds. As-Sa'di adds that persisting in this state is itself self-deception: what deception is greater than labour that returns on its doer as humiliation, while he counts it cleverness?",
            "bn": "তাঁদের এই পাঠের ভিত্তি ৫৭:১৩ আয়াত। সেখানে মুনাফিকরা মুমিনদের কাছে মিনতি করবে, একটু থামো, তোমাদের আলো থেকে একটু নিই। তাদের বলা হবে, পেছনে ফিরে গিয়ে আলো খোঁজো। কুরতুবী ও বাগাভীও একই দৃশ্য এনেছেন, আর মূল নীতিটাও বলে দেন: আল্লাহর ধোঁকা মানে তাদের ধোঁকার প্রতিফল দেওয়া। মুয়াসসার যোগ করেন, তাদের আমলের সমান প্রতিফল। সা'দী বলেন, এই অবস্থায় টিকে থাকাটাই নিজেকে ধোঁকা দেওয়া। যে মেহনত ঘুরে এসে মেহনতকারীর ঘাড়েই অপমান হয়ে পড়ে, অথচ সে ভাবে এটাই বুদ্ধি, তার চেয়ে বড় ধোঁকা আর কী?"
          }
        ]
      },
      {
        "h": {
          "en": "Rising Heavy to Prayer",
          "bn": "ভারী পায়ে নামাজে ওঠা"
        },
        "p": [
          {
            "en": "Wa idha qamu ila as-salati qamu kusala: and when they stand for prayer, they stand lazily. Ibn Kathir notes that this is how they meet the noblest of deeds. Al-Baghawi glosses kusala as weighed down, not wanting Allah by it: if someone saw them they prayed, and otherwise they left. At-Tabari gives the reason under the heaviness. Not certain of a return, a reward or a punishment, they did the outward acts only to preserve themselves, fearing that the believers would kill them or take their wealth.",
            "bn": "ওয়া ইযা কামূ ইলাস সালাতি কামূ কুসালা: আর যখন তারা নামাজে দাঁড়ায়, অলসভাবে দাঁড়ায়। ইবন কাসীর খেয়াল করিয়ে দেন, সবচেয়ে মর্যাদাপূর্ণ আমলের সামনে এটাই তাদের চেহারা। বাগাভী কুসালার অর্থ করেন ভারাক্রান্ত, যারা এতে আল্লাহকে চায় না: কেউ দেখলে নামাজ পড়ত, নইলে চলে যেত। ভারী লাগার পেছনের কারণটা বলেন তাবারী। পুনরুত্থান, সওয়াব বা শাস্তি, কোনোটাতেই তাদের ইয়াকিন ছিল না। তাই বাইরের আমলগুলো তারা করত শুধু নিজেদের বাঁচাতে, এই ভয়ে যে মুমিনরা তাদের হত্যা করবে বা মাল কেড়ে নেবে।"
          },
          {
            "en": "As-Sa'di makes laziness a symptom rather than a habit: it arises only from the loss of desire in the heart, and were their hearts not empty of longing for Allah, it would not appear. Ibn Kathir divides the verse in two: kusala describes their outward state, and yura'una an-nas, showing off to people, their corrupt inward state. He also cites Ibn Abbas (RA): it is disliked for a man to stand to prayer lazily; he should stand bright-faced, with great desire and intense joy, for he is speaking privately with Allah.",
            "bn": "সা'দীর চোখে অলসতা অভ্যাস নয়, লক্ষণ। অলসতা আসে কেবল তখনই, যখন অন্তর থেকে আগ্রহ হারিয়ে যায়; আল্লাহর প্রতি টান থেকে তাদের অন্তর খালি না হলে তা দেখা দিত না। ইবন কাসীর আয়াতটিকে দুই ভাগ করেন: কুসালা তাদের বাইরের অবস্থার বর্ণনা, আর ইউরাঊনান নাস, মানুষকে দেখানো, তাদের নষ্ট ভেতরের বর্ণনা। তিনি ইবন আব্বাস (রাঃ)-এর কথাও আনেন: অলসভাবে নামাজে দাঁড়ানো অপছন্দনীয়। দাঁড়াতে হবে হাসিমুখে, গভীর আগ্রহ আর প্রবল আনন্দ নিয়ে, কারণ সে আল্লাহর সঙ্গে একান্তে কথা বলছে।"
          },
          {
            "en": "Ma'arif al-Qur'an brings in a distinction from Ashraf Ali Thanavi that keeps the verse from being misapplied. The laziness censured here is laziness of belief, born of a lack of true conviction. Laziness found alongside correct belief falls outside this censure. If it comes from an excuse such as sickness, fatigue or sleepiness, it is not even blameworthy; without an excuse, it is. Read this way, a tired believer who drags himself to Fajr is not the person this verse describes, though he still has reason to examine himself.",
            "bn": "মাআরিফুল কুরআন আশরাফ আলী থানভীর একটি পার্থক্য তুলে আনে, যা আয়াতটির ভুল প্রয়োগ ঠেকায়। এখানে যে অলসতার নিন্দা, তা আকীদার অলসতা, খাঁটি বিশ্বাসের অভাব থেকে জন্মানো। সঠিক আকীদা থাকা সত্ত্বেও যে অলসতা, তা এই নিন্দার আওতার বাইরে। অসুস্থতা, ক্লান্তি বা ঘুমের মতো কোনো ওজর থেকে এলে তা দোষেরও নয়; ওজর ছাড়া হলে দোষের। এভাবে পড়লে, ক্লান্ত যে মুমিন নিজেকে টেনে ফজরে নিয়ে যান, এই আয়াত তাঁর বর্ণনা নয়। তবু নিজেকে যাচাই করার কারণ তাঁর থেকেই যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Prayers in the Dark",
          "bn": "অন্ধকারের দুই নামাজ"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the next link himself. Having no sincerity, and attending prayer only as a guard against people, they often stay away from the prayers in which they are usually not seen: Isha at nightfall and Fajr in the darkness before dawn. Al-Qurtubi gives the reason from the body's side. Isha comes when the day's work has tired them; Fajr comes when sleep is dearer to them than anything they might be glad of. The two prayers test exactly what the verse names.",
            "bn": "পরের যোগসূত্রটি ইবন কাসীর নিজেই টানেন। তাদের ইখলাস নেই; তারা নামাজে হাজির হয় শুধু মানুষের হাত থেকে বাঁচতে। তাই যেসব নামাজে সাধারণত কেউ তাদের দেখে না, সেগুলো থেকে তারা প্রায়ই পিছিয়ে থাকে: রাতের আঁধারে ইশা, আর ভোরের আগের অন্ধকারে ফজর। কুরতুবী কারণটা বলেন শরীরের দিক থেকে। ইশা আসে যখন দিনের কাজে তারা ক্লান্ত; ফজর আসে যখন ঘুম তাদের কাছে যেকোনো খুশির জিনিসের চেয়ে প্রিয়। আয়াত যে জিনিসটার নাম নিয়েছে, এই দুই নামাজ ঠিক সেটাই পরীক্ষা করে।"
          },
          {
            "en": "Al-Bukhari records in his Sahih (657) from Abu Hurayrah (RA) that the Prophet ﷺ said: \"No prayer is heavier on the hypocrites than Fajr and Isha. If they knew what is in them, they would come to them even crawling. I was about to order the mu'adhdhin to call the iqamah, then order a man to lead the people, then take brands of fire and set fire upon whoever does not yet come out to the prayer.\" Ibn Kathir cites the saying from the two Sahihs, and al-Qurtubi as a sound hadith.",
            "bn": "ইমাম বুখারী তাঁর সহীহ গ্রন্থে (৬৫৭) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: \"মুনাফিকদের কাছে ফজর আর ইশার চেয়ে ভারী কোনো নামাজ নেই। এ দুটিতে কী আছে তা যদি তারা জানত, হামাগুড়ি দিয়ে হলেও আসত। আমার ইচ্ছা হয়েছিল, মুয়াজ্জিনকে ইকামত দিতে বলি, তারপর একজনকে বলি লোকদের ইমামতি করতে, তারপর আগুনের মশাল নিয়ে তাদের ওপর আগুন লাগিয়ে দিই, যারা এখনো নামাজের জন্য বের হয়নি।\" ইবন কাসীর কথাটি বুখারী ও মুসলিম দুই সহীহ গ্রন্থের বরাতে আনেন, আর কুরতুবী আনেন সহীহ হাদীস হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Little Is Little",
          "bn": "অল্পকে কেন অল্প বলা"
        },
        "p": [
          {
            "en": "Wa la yadhkuruna Allaha illa qalila: and they do not remember Allah except a little. At-Tabari raises the obvious objection himself: is any remembrance of Allah little? His answer is that they remember Him only with a remembrance of show, to keep death, captivity and the loss of their wealth away from themselves, not the remembrance of a believer certain of Allah's tawhid. That is why Allah called it little. Even if it is much, its labour is like a mirage, which has an appearance and no water in it.",
            "bn": "ওয়া লা ইয়াযকুরূনাল্লাহা ইল্লা কালীলা: আর তারা আল্লাহকে স্মরণ করে খুব অল্পই। সম্ভাব্য আপত্তিটা তাবারী নিজেই তোলেন: আল্লাহর জিকিরের কোনো অংশ কি অল্প হতে পারে? তাঁর জবাব, তারা আল্লাহকে স্মরণ করে কেবল লোক দেখানো জিকিরে, যাতে হত্যা, বন্দিত্ব আর মাল হারানো থেকে বাঁচতে পারে। আল্লাহর তাওহীদে ইয়াকিন রাখে এমন মুমিনের জিকির এটা নয়। তাই আল্লাহ একে অল্প বলেছেন। সংখ্যায় বেশি হলেও এর মেহনত মরীচিকার মতো: বাইরে চেহারা আছে, ভেতরে পানি নেই।"
          },
          {
            "en": "The early authorities agree it is little in worth and differ on why. Al-Hasan said it was little because it was for other than Allah; al-Baghawi joins Ibn Abbas (RA) to him and adds that had they meant that little for Allah's face, it would have been much. Qatada said Allah did not accept it: whatever Allah rejects is little, and whatever He accepts is much. Al-Qurtubi lists three readings: they remembered Him only with the takbir, not with recitation or tasbih; He does not accept it; it lacks sincerity.",
            "bn": "এ জিকির যে মূল্যে অল্প, এ ব্যাপারে পূর্বসূরিরা একমত; কেন অল্প, তা নিয়ে তাঁদের কথা ভিন্ন। আল-হাসান বলেন, অল্প কারণ তা ছিল আল্লাহ ছাড়া অন্যের জন্য। বাগাভী তাঁর সঙ্গে ইবন আব্বাস (রাঃ)-এর নাম যুক্ত করেন এবং বলেন: সেই অল্পটুকুও যদি তারা আল্লাহর সন্তুষ্টির জন্য করত, তা অনেক হয়ে যেত। কাতাদা বলেন, আল্লাহ তা কবুল করেননি; আল্লাহ যা ফিরিয়ে দেন তা অল্প, আর যা কবুল করেন তা-ই অনেক। কুরতুবী তিনটি মত উল্লেখ করেন: তারা কিরাআত বা তাসবীহ নয়, শুধু তাকবীর দিয়ে আল্লাহকে স্মরণ করত; আল্লাহ তা কবুল করেন না; তাতে ইখলাস নেই।"
          },
          {
            "en": "Ibn Kathir places the littleness inside the prayer: they have no humility in it and do not know what they are saying. He then cites the hadith Muslim records in his Sahih (622) from Anas ibn Malik (RA), who, when visitors came to him just after Zuhr, told them to pray Asr and then said he had heard the Messenger of Allah ﷺ say: \"That is the prayer of the hypocrite: he sits watching the sun until, when it is between the two horns of Shaytan, he stands and pecks it out four times, remembering Allah in it only a little.\"",
            "bn": "ইবন কাসীর অল্পতাকে রাখেন নামাজের ভেতরেই: তাতে তাদের খুশু নেই, কী বলছে তাও তারা জানে না। তারপর তিনি সেই হাদীস আনেন, যা ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (৬২২) আনাস ইবন মালিক (রাঃ) থেকে বর্ণনা করেছেন। কয়েকজন লোক যোহর পড়েই তাঁর কাছে এলে আনাস (রাঃ) তাদের আসর পড়তে বললেন। তারপর জানালেন, তিনি আল্লাহর রাসূল ﷺ-কে বলতে শুনেছেন: \"ওটা মুনাফিকের নামাজ: বসে বসে সূর্যের দিকে চেয়ে থাকে, যখন তা শয়তানের দুই শিংয়ের মাঝখানে পৌঁছায়, উঠে দাঁড়িয়ে চারটি ঠোকর দেয়, তাতে আল্লাহকে স্মরণ করে খুব অল্পই।\""
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
            "en": "Mudhabdhabina bayna dhalik: swinging between that. At-Tabari glosses it as muraddadin, sent back and forth, and gives the root's first sense as movement and agitation, citing a line of an-Nabighah. Al-Qurtubi defines the mudhabdhab as one who wavers between two matters, quotes Ibn Jinni's gloss, the shaken, restless one who neither settles nor waits, and records the usage: dhabdhabtuhu fa-tadhabdhaba, I swung him and he swung. He notes that the majority read the word with the second dhal vowelled a, and Ibn Abbas (RA) with i.",
            "bn": "মুযাবযাবীনা বাইনা যালিক: এর মাঝখানে দোদুল্যমান। তাবারী অর্থ করেন মুরাদ্দাদীন, অর্থাৎ বারবার এদিক-ওদিক ফেরানো। তাঁর মতে মূল ধাতুর প্রথম অর্থ নড়াচড়া আর অস্থিরতা, আর এর সাক্ষী হিসেবে তিনি নাবিগার একটি কবিতার চরণ আনেন। কুরতুবীর সংজ্ঞায় মুযাবযাব সে, যে দুই বিষয়ের মাঝে দোল খায়। তিনি ইবন জিন্নীর ব্যাখ্যা উদ্ধৃত করেন: কাঁপতে থাকা অস্থির মানুষ, যে থিতু হয় না, ধীরও হয় না। শব্দের প্রয়োগও তিনি দেখান: যাবযাবতুহু ফাতাযাবযাবা, আমি তাকে দোলালাম, সে দুলল। তিনি জানান, অধিকাংশ কারী দ্বিতীয় যালে যবর দিয়ে পড়েছেন, আর ইবন আব্বাস (রাঃ) যের দিয়ে।"
          },
          {
            "en": "Who are these and those? Mujahid said: not to the Companions of Muhammad ﷺ, and not to those Jews. Qatada said: neither sincere believers nor open polytheists, and as-Suddi said much the same; Ibn Zayd said between Islam and disbelief. Ibn Kathir and as-Sa'di place the split inside the person: outwardly with the believers, inwardly with the disbelievers, and Ibn Kathir adds that some lean now this way, now that, in doubt. Al-Baghawi reads it legally: not believers, to have the believers' due, nor disbelievers, to be treated as disbelievers.",
            "bn": "এরা কারা, ওরা কারা? মুজাহিদ বলেন: না মুহাম্মাদ ﷺ-এর সাহাবিদের দিকে, না ওই ইহুদিদের দিকে। কাতাদা বলেন: তারা না খাঁটি মুমিন, না প্রকাশ্য মুশরিক; সুদ্দীর কথাও প্রায় একই। ইবন যায়দ বলেন, ইসলাম আর কুফরের মাঝখানে। ইবন কাসীর ও সা'দী ভাগটা দেখান মানুষটির ভেতরেই: বাইরে মুমিনদের সঙ্গে, ভেতরে কাফিরদের সঙ্গে। ইবন কাসীর আরও বলেন, কেউ কেউ সন্দেহে পড়ে কখনো এদিকে ঝোঁকে, কখনো ওদিকে। বাগাভী দেখেন বিধানের দিক থেকে: তারা মুমিন নয় যে মুমিনদের প্রাপ্য পাবে, আবার কাফিরও নয় যে কাফিরদের মতো আচরণ পাবে।"
          },
          {
            "en": "Muslim records in his Sahih (2784) from Ibn Umar (RA) that the Prophet ﷺ said: \"The likeness of the hypocrite is that of a ewe wandering between two flocks; she goes to this one once and to that one once.\" Ibn Kathir cites from Ahmad's Musnad that Ibn Umar heard a man tell it as a ewe between two resting flocks, butted by both, and corrected him. When the man said it came to the same thing, Ibn Umar answered: that is how I heard it.",
            "bn": "ইমাম মুসলিম তাঁর সহীহ গ্রন্থে (২৭৮৪) ইবন উমর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: \"মুনাফিকের দৃষ্টান্ত সেই ভেড়ির মতো, যে দুই পালের মাঝখানে উদ্দেশ্যহীন ঘুরে বেড়ায়; একবার এ পালের দিকে যায়, একবার ও পালের দিকে।\" ইবন কাসীর মুসনাদে আহমাদ থেকে আনেন, এক ব্যক্তি হাদীসটি বলছিলেন এভাবে: বসে থাকা দুই পালের মাঝে এক ভেড়ি, যেদিকে যায় সেদিকেই গুঁতো খায়। ইবন উমর (রাঃ) তাঁকে শুধরে দিলেন। লোকটি বলল, একই তো কথা। ইবন উমর (রাঃ) বললেন, আমি এভাবেই শুনেছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where No Road Is Found",
          "bn": "যেখানে কোনো পথ মেলে না"
        },
        "p": [
          {
            "en": "Wa man yudlili Allahu fa-lan tajida lahu sabila: and whomever Allah sends astray, you will never find a way for him. At-Tabari explains: whomever Allah forsakes from the path of right guidance, which is Islam, you will find no other road to the truth for him, for what road to the truth is there besides Islam? As-Sa'di says the door of mercy has closed against such a person. Yet the passage moves on: 4:145 names the lowest depth of the Fire, and 4:146 then excepts those who repent, set right and make their religion sincerely Allah's.",
            "bn": "ওয়া মান ইউদলিলিল্লাহু ফালান তাজিদা লাহু সাবীলা: আর আল্লাহ যাকে পথভ্রষ্ট করেন, তুমি তার জন্য কখনো কোনো পথ পাবে না। তাবারীর ব্যাখ্যা: হিদায়াতের পথ, অর্থাৎ ইসলাম, থেকে আল্লাহ যাকে বঞ্চিত করেন, সত্যে পৌঁছানোর আর কোনো রাস্তা তুমি তার জন্য পাবে না। ইসলাম ছাড়া সত্যের দিকে আর কোন পথ আছে? সা'দী বলেন, এমন মানুষের সামনে রহমতের দরজা বন্ধ হয়ে গেছে। তবু আলোচনা এগিয়ে যায়। ৪:১৪৫ আয়াত জাহান্নামের সবচেয়ে নিচের স্তরের কথা বলে, তারপর ৪:১৪৬ আয়াত আলাদা করে নেয় তাদের, যারা তওবা করে, শুধরে নেয় এবং দ্বীনকে খাঁটিভাবে আল্লাহর জন্য করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading It as a Mirror",
          "bn": "আয়না হিসেবে পড়া"
        },
        "p": [
          {
            "en": "These verses describe the hypocrites the text describes, in the Prophet's ﷺ time, and license nothing against any living person or community. No reader may call a fellow worshipper a hypocrite because he comes late, prays quickly or looks tired at Fajr. As-Sa'di turns the description around: these blameworthy traits point by contrast to the believers' traits, truthfulness outward and inward, sincerity, energy in worship, and much remembrance of Allah. Then he says: let the intelligent person present himself to these two and choose which is more fitting for him.",
            "bn": "আয়াত দুটি যাদের ছবি আঁকে, তারা নবী ﷺ-এর যুগের সেই মুনাফিক, পাঠে যাদের কথা আছে। আজকের কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এই আয়াত কোনো কিছুরই অনুমতি দেয় না। কেউ দেরিতে আসে, তাড়াতাড়ি নামাজ শেষ করে, বা ফজরে ক্লান্ত দেখায়, এই কারণে পাশের মুসল্লিকে মুনাফিক বলার অধিকার কোনো পাঠকের নেই। সা'দী বর্ণনাটিকে উল্টো দিকে ঘোরান: এই নিন্দনীয় গুণগুলো বিপরীত দিক থেকে মুমিনদের গুণ দেখিয়ে দেয়। ভেতরে-বাইরে সত্যবাদিতা, ইখলাস, ইবাদতে উদ্যম, আর আল্লাহর বেশি বেশি জিকির। তারপর তিনি বলেন: বুদ্ধিমান মানুষ নিজেকে এই দুইয়ের সামনে দাঁড় করাক, আর বেছে নিক কোনটি তার জন্য বেশি মানানসই।"
          },
          {
            "en": "Al-Qurtubi makes the same turn in the language of fiqh. Allah and His Messenger ﷺ both described the hypocrites' prayer, he says; whoever prays and remembers as they did joins them in its not being accepted, and falls outside 23:1 and 23:2, the believers humble in their prayer, unless he has an excuse and keeps to the obligatory, as the Prophet ﷺ taught the bedouin who prayed badly. He adds that showing off can enter both obligatory and voluntary prayer, since the verse says simply: when they stand for prayer.",
            "bn": "কুরতুবী একই মোড় নেন ফিকহের ভাষায়। তিনি বলেন, মুনাফিকদের নামাজের বর্ণনা আল্লাহ দিয়েছেন, তাঁর রাসূল ﷺ-ও দিয়েছেন। যে তাদের মতো নামাজ পড়ে আর তাদের মতো জিকির করে, কবুল না হওয়ার ব্যাপারে সে তাদের সঙ্গে মিলে যায়। ২৩:১ ও ২৩:২ আয়াতে নামাজে বিনয়ী যে মুমিনদের সফলতার কথা, সে তাদের দল থেকে বেরিয়ে যায়। ব্যতিক্রম কেবল ওজরওয়ালা, যিনি ফরজটুকুতে সীমিত থাকেন, যেমন নবী ﷺ শিখিয়েছিলেন সেই বেদুইনকে, যে ঠিকমতো নামাজ পড়েনি। কুরতুবী আরও বলেন, রিয়া ফরজ ও নফল দুটোতেই ঢুকতে পারে, কারণ আয়াত সাধারণভাবে বলেছে: যখন তারা নামাজে দাঁড়ায়।"
          }
        ]
      }
    ]
  },
  "4:148": {
    "sections": [
      {
        "h": {
          "en": "Where the Permission Sits",
          "bn": "অনুমতিটির জায়গা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and the verses just before this one are about the hypocrites: 4:145 places them in the lowest depths of the Fire, 4:146 excepts those who repent, put themselves right, hold fast to Allah and make their religion sincerely for Him, and 4:147 asks what Allah would gain from punishing you if you are grateful and believe. Then 4:148 turns to speech, 4:149 offers the better road, and 4:150 goes back to those who wish to divide between Allah and His messengers.",
            "bn": "সূরা আন-নিসা মাদানি সূরা, আর এই আয়াতের ঠিক আগের আয়াতগুলো মুনাফিকদের নিয়ে। ৪:১৪৫ আয়াত তাদের রাখে জাহান্নামের সবচেয়ে নিচু স্তরে। ৪:১৪৬ আয়াত তাদের বাদ দেয়, যারা তওবা করে, নিজেদের শুধরে নেয়, আল্লাহকে মজবুত করে ধরে আর নিজেদের দ্বীন খাঁটিভাবে তাঁরই জন্য করে। ৪:১৪৭ আয়াত জিজ্ঞেস করে, তোমরা শোকর করলে আর ঈমান আনলে তোমাদের শাস্তি দিয়ে আল্লাহর কী লাভ? এরপর ৪:১৪৮ আয়াত ফেরে কথার দিকে, ৪:১৪৯ আয়াত দেখায় ভালো পথটি, আর ৪:১৫০ আয়াত ফিরে যায় তাদের কথায়, যারা আল্লাহ ও তাঁর রাসূলদের মধ্যে পার্থক্য করতে চায়।"
          },
          {
            "en": "The commentators do not attach a settled occasion of revelation to this verse, so its placement has to carry the sense, and it does. After several verses about people whose speech ran one way while their hearts ran another, the Quran turns to the believers' own speech and puts a limit on it. The two verses also work as a pair, in the same shape as 4:145 and 4:146: first a hard statement, then immediately a door out of it.",
            "bn": "মুফাসসিরগণ এই আয়াতের সঙ্গে নাজিলের কোনো নির্দিষ্ট প্রেক্ষাপট জুড়ে দেন না, তাই অর্থের ভারটা বহন করতে হয় এর অবস্থানকেই, আর তা করেও। যাদের মুখের কথা এক দিকে আর অন্তর আরেক দিকে, তাদের নিয়ে কয়েকটি আয়াতের পর কুরআন ফেরে মুমিনদের নিজেদের কথাবার্তার দিকে, আর তার ওপর সীমা টেনে দেয়। আয়াত দুটি কাজও করে জোড়ায়, ঠিক ৪:১৪৫ আর ৪:১৪৬ আয়াতের ছাঁচে: আগে কঠিন কথা, তারপরই বেরিয়ে আসার দরজা।"
          }
        ]
      },
      {
        "h": {
          "en": "Aloud, and One Exception",
          "bn": "জোরে বলা, আর একটি ব্যতিক্রম"
        },
        "p": [
          {
            "en": "The key word is al-jahr, from j-h-r, which is to make a thing open and audible; its opposite is sirr, what is kept close. The verse does not name the evil deed here. It names al-jahr bi-s-su'i min al-qawl, going loud with evil speech, so what is under the ban is the broadcasting. Then comes the exception, illa man zulima, except one who has been wronged. The exception is not an act or a mood. It is a person in a particular standing.",
            "bn": "মূল শব্দটি আল-জাহর, জীম-হা-রা মূল থেকে, যার অর্থ কোনো কিছুকে খোলা ও শ্রুতিগোচর করা; এর উল্টো হলো সির, যা চেপে রাখা হয়। আয়াত এখানে মন্দ কাজের নাম নেয় না। নাম নেয় আল-জাহর বিস-সূয়ি মিনাল কওল, অর্থাৎ খারাপ কথা জোরে ছড়ানোর, তাই নিষেধটা পড়ছে ছড়ানোর ওপর। এরপর আসে ব্যতিক্রম, ইল্লা মান যুলিম, তবে যার ওপর অন্যায় করা হয়েছে। ব্যতিক্রমটি কোনো কাজ নয়, কোনো মেজাজও নয়। ব্যতিক্রমটি একজন মানুষ, নির্দিষ্ট এক অবস্থানে দাঁড়ানো।"
          },
          {
            "en": "The verse ends on two names, Sami'an Alima, Hearing and Knowing, and al-Muyassar makes the pairing plain: Allah is Hearing of what you say aloud and Knowing of what you conceal of it. Each name answers one half of the matter. The loud speech He hears. The case behind it, including the part the speaker chose to leave out, He already knows. A permission given by the One described that way is not a permission to tell the story any way you like.",
            "bn": "আয়াত শেষ হয় দুটি নামে, সামীআন আলীমা, সর্বশ্রোতা ও সর্বজ্ঞ, আর আল-মুয়াসসার জোড়াটি পরিষ্কার করে দেয়: তোমরা যা জোরে বলো আল্লাহ তা শোনেন, আর তার যেটুকু লুকিয়ে রাখো তাও জানেন। প্রতিটি নাম ব্যাপারটির এক দিকের জবাব দেয়। জোরে বলা কথা তিনি শোনেন। আর তার পেছনের ঘটনাটা, এমনকি বক্তা যেটুকু বাদ দিয়ে গেল তাও, তিনি আগেই জানেন। যিনি এমন, তাঁর দেওয়া অনুমতি মানে ঘটনা যেমন খুশি বলে বেড়ানোর ছাড়পত্র নয়।"
          },
          {
            "en": "4:149 then lays out three things a person may do and names them in one breath: show a good deed, or conceal it, or pardon an evil. Two of the three are about good and only the last is about a wrong received, and all three are set beside the noisy option the verse before has just fenced in. The pairing is deliberate. A permission has been granted, and before the reader can settle into it, a better use of the same tongue is put in front of him.",
            "bn": "এরপর ৪:১৪৯ আয়াত মানুষ করতে পারে এমন তিনটি কাজের নাম এক নিঃশ্বাসে নিয়ে নেয়: ভালো কাজ প্রকাশ্যে করা, কিংবা গোপনে করা, কিংবা মন্দকে ক্ষমা করে দেওয়া। তিনটির দুটিই ভালো কাজ নিয়ে, কেবল শেষেরটি নিজের ওপর হওয়া অন্যায় নিয়ে। আর তিনটিকেই আয়াত বসিয়েছে সেই উঁচু গলার পথের পাশে, যার চারপাশে আগের আয়াত এইমাত্র বেড়া দিয়েছে। এই পাশাপাশি রাখা ইচ্ছা করেই। অনুমতি তো মিলেছে, কিন্তু পাঠক তাতে আরাম করে বসার আগেই তার সামনে রাখা হয় একই জিহ্বার আরও ভালো ব্যবহার।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Fenced It",
          "bn": "মুফাসসিরগণ যেভাবে বেড়া দিলেন"
        },
        "p": [
          {
            "en": "Ali ibn Abi Talhah reported Ibn Abbas (RA) explaining the verse this way: Allah does not like that anyone should invoke Him against anyone else, unless one has been wronged, and in that case Allah permits him to invoke Him against the one who wronged him. Then Ibn Abbas (RA) adds a sentence that is easy to miss. It is better for him, even so, if he is patient. The permission and the preference arrive together.",
            "bn": "আলী ইবনে আবী তালহা বর্ণনা করেন, ইবনে আব্বাস (রাঃ) আয়াতটির ব্যাখ্যা দিয়েছেন এভাবে: কেউ কারও বিরুদ্ধে বদদোয়া করুক, আল্লাহ তা পছন্দ করেন না। তবে যার ওপর অন্যায় হয়েছে, সে আলাদা। তাকে আল্লাহ অনুমতি দিয়েছেন জালিমের বিরুদ্ধে বদদোয়া করার। এরপর ইবনে আব্বাস (রাঃ) একটি কথা যোগ করেন, যা সহজেই চোখ এড়িয়ে যায়: তবুও সে ধৈর্য ধরলে সেটাই তার জন্য ভালো। অনুমতি আর পছন্দ, দুটো একসঙ্গেই আসে।"
          },
          {
            "en": "Al-Hasan al-Basri narrows the shape of the words. A man should not invoke Allah against the one who wronged him, he says, but should ask Allah to help him against him and to take his right from him. Another narration from him allows invoking against the wrongdoer without transgressing the limits. Abdul-Karim ibn Malik al-Jazari draws the line by kind rather than by degree: if a man curses you, you may answer him in kind, but if he lies about you, you may not lie about him, and he recited 42:41 with it.",
            "bn": "হাসান বসরী কথার ধরনটা আরও বেঁধে দেন। তিনি বলেন, যে অন্যায় করেছে তার বিরুদ্ধে বদদোয়া করা উচিত নয়। বরং আল্লাহর কাছে চাইতে হবে, তিনি যেন তার বিরুদ্ধে সাহায্য করেন আর তার কাছ থেকে হক আদায় করে দেন। তাঁর থেকেই আরেক বর্ণনায় আছে, সীমা না ছাড়িয়ে জালিমের বিরুদ্ধে বদদোয়া করা যায়। আবদুল কারীম ইবনে মালিক আল-জাযারী সীমারেখা টানেন মাত্রা দিয়ে নয়, ধরন দিয়ে: কেউ আপনাকে গালি দিলে আপনিও তাকে সেভাবে জবাব দিতে পারেন, কিন্তু সে আপনার নামে মিথ্যা বললে আপনি তার নামে মিথ্যা বলতে পারবেন না। সঙ্গে তিনি ৪২:৪১ আয়াত পড়েন।"
          },
          {
            "en": "Al-Muyassar supplies the purpose, and the purpose is itself the fence: it is permitted for the wronged person to mention the one who wronged him with the evil that is in him, so that his grievance may be made clear. Read that way, the permission covers whatever makes the injury known and stops there. Whatever only relieves the speaker, or enlarges the account past what actually happened, is outside it, and the closing names of the verse are there to remind him of that.",
            "bn": "আল-মুয়াসসার উদ্দেশ্যটা জানিয়ে দেয়, আর সেই উদ্দেশ্যই এখানে বেড়া: মজলুম তার ওপর অন্যায়কারীর ভেতরের মন্দটা মুখে আনতে পারে, যাতে তার অভিযোগটা স্পষ্ট হয়। এভাবে পড়লে অনুমতি ততটুকুই, যতটুকুতে অন্যায়টা জানা যায়; তার বেশি নয়। যে কথায় কেবল বক্তার মন হালকা হয়, কিংবা ঘটনাটা যা ঘটেছিল তার চেয়ে বড় হয়ে যায়, সে কথা এর বাইরে। আয়াতের শেষের নাম দুটি তাকে সে কথাই মনে করিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Started It Carries It",
          "bn": "যে শুরু করেছে, ভার তারই"
        },
        "p": [
          {
            "en": "Ibn Kathir cites, from Abu Dawud, that Abu Hurayrah (RA) reported the Messenger of Allah ﷺ saying that when two men trade abuse, whatever the two of them say falls on the one who began it, unless the one who was wronged transgresses the limit. Two things are settled in one sentence. The blame for the exchange is not divided evenly between the two, and the cover the wronged man has lasts exactly as long as he stays inside the injury he received.",
            "bn": "ইবনে কাসীর আবূ দাউদ থেকে উদ্ধৃত করেন: আবূ হুরায়রা (রাঃ) বর্ণনা করেছেন, রাসূলুল্লাহ ﷺ বলেছেন, দুজন মানুষ গালাগালি করলে দুজনে যা কিছু বলে তার দায় পড়ে যে শুরু করেছে তার ওপর, যদি না মজলুম সীমা ছাড়িয়ে যায়। এক বাক্যেই দুটি বিষয়ের ফয়সালা হয়ে যায়। ঝগড়ার দোষ দুজনের মধ্যে সমান ভাগ হয় না। আর মজলুমের ঢাল ঠিক ততক্ষণই থাকে, যতক্ষণ সে নিজের ওপর হওয়া অন্যায়ের সীমার ভেতরে থাকে।"
          },
          {
            "en": "On the verse that follows, Ibn Kathir writes that when you acknowledge a good done to you, or conceal it, and forgive those who wrong you, this brings you nearer to Allah and increases your reward with Him. He explains the closing names of 4:149 by saying that among Allah's attributes is that He forgives and pardons His servants although He is fully able to punish them. That is the model 4:149 holds up: pardon offered from a position of strength, not from having no other option.",
            "bn": "পরের আয়াত নিয়ে ইবনে কাসীর লেখেন, আপনার প্রতি করা কোনো উপকার আপনি যখন স্বীকার করেন বা গোপন রাখেন, আর যারা আপনার ওপর অন্যায় করেছে তাদের মাফ করে দেন, তখন তা আপনাকে আল্লাহর কাছাকাছি নিয়ে যায় আর তাঁর কাছে আপনার প্রতিদান বাড়িয়ে দেয়। ৪:১৪৯ আয়াতের শেষ নাম দুটির ব্যাখ্যায় তিনি বলেন, আল্লাহর একটি গুণ হলো, বান্দাদের শাস্তি দেওয়ার পূর্ণ ক্ষমতা থাকা সত্ত্বেও তিনি তাদের মাফ করেন, ক্ষমা করে দেন। ৪:১৪৯ আয়াত এই আদর্শই সামনে রাখে: ক্ষমা আসবে শক্তির জায়গা থেকে, নিরুপায় হয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses Beside It",
          "bn": "পাশের আয়াতগুলো"
        },
        "p": [
          {
            "en": "42:41 says that whoever defends himself after being wronged has no blame upon him, and 42:42 places the blame on those who wrong people and act outrageously in the earth without right. 42:43 then closes that passage on the other road: whoever is patient and forgives, that is of the matters requiring resolve. Those three verses set out in another surah exactly what 4:148 and 4:149 set out here, a permission followed at once by something better.",
            "bn": "৪২:৪১ আয়াত বলে, অত্যাচারিত হওয়ার পর কেউ নিজের প্রতিরক্ষার ব্যবস্থা নিলে তার বিরুদ্ধে কোনো অভিযোগ নেই। ৪২:৪২ আয়াত দোষটা রাখে তাদের ওপর, যারা মানুষের প্রতি অত্যাচার করে আর অন্যায়ভাবে যমীনে বিদ্রোহ ছড়ায়। এরপর ৪২:৪৩ আয়াত সেই অংশ শেষ করে অন্য পথটি দিয়ে: যে ধৈর্য ধরে আর ক্ষমা করে দেয়, তা দৃঢ়চিত্ততার কাজ। এই তিন আয়াত অন্য এক সূরায় ঠিক সেটিই সাজিয়ে দেয়, যা ৪:১৪৮ আর ৪:১৪৯ আয়াত এখানে সাজায়: অনুমতি, আর সঙ্গে সঙ্গে তার চেয়ে ভালো কিছু।"
          },
          {
            "en": "16:126 sets the size of any answer: if you punish, punish with the like of what you were harmed with, and if you are patient, that is better for the patient. 24:19 gives the warning from the other side, promising a painful punishment to those who love that immorality should spread among the believers. And 3:134 describes the people Allah loves as those who restrain anger and pardon people, which is 4:149 turned into a portrait.",
            "bn": "১৬:১২৬ আয়াত যেকোনো জবাবের মাপ বেঁধে দেয়: প্রতিশোধ নিলে ততটুকুই নাও যতটুকু অন্যায় তোমার ওপর হয়েছে, আর ধৈর্য ধরলে ধৈর্যশীলদের জন্য সেটিই ভালো। ২৪:১৯ আয়াত উল্টো দিক থেকে সতর্ক করে: যারা চায় মুমিনদের মধ্যে অশ্লীলতা ছড়িয়ে পড়ুক, তাদের জন্য আছে যন্ত্রণাদায়ক শাস্তি। আর ৩:১৩৪ আয়াত আল্লাহর প্রিয় মানুষদের পরিচয় দেয় এভাবে: তারা রাগ সংবরণ করে আর মানুষকে ক্ষমা করে। এ যেন ৪:১৪৯ আয়াতেরই জীবন্ত ছবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Using the Permission Well",
          "bn": "অনুমতিটি ঠিকভাবে কাজে লাগানো"
        },
        "p": [
          {
            "en": "The first test is who you are speaking to. Naming a wrong to someone who can restore a right sits inside the purpose al-Muyassar gives; telling it to a room full of people who can do nothing about it does not. Before you speak, say the outcome you want, if only to yourself. If there is no outcome, then what you are reaching for is not this permission, and 4:149 is quietly offering you the other option.",
            "bn": "প্রথম পরীক্ষা হলো আপনি কাকে বলছেন। যে মানুষটি হক ফিরিয়ে দিতে পারে, তাকে অন্যায়ের কথা বলা আল-মুয়াসসারের দেওয়া উদ্দেশ্যের ভেতরেই পড়ে; আর যাদের কিছুই করার নেই এমন একঘর লোককে বলা পড়ে না। মুখ খোলার আগে ঠিক করুন আপনি কী ফল চান, অন্তত নিজের কাছে বলুন। যদি কোনো ফলই না থাকে, তবে আপনি যা খুঁজছেন তা এই অনুমতি নয়, আর ৪:১৪৯ আয়াত চুপচাপ আপনাকে অন্য পথটি দেখাচ্ছে।"
          },
          {
            "en": "The second test is size, and 16:126 gives it: say what happened, not the improved version. Grievances grow in the retelling. An adjective is added here, a motive is assumed there, a single incident becomes a pattern, and within a month the account no longer matches the injury. Keep the telling the same each time you give it, and stop where the injury stops. That discipline is what keeps a wronged person inside the exception instead of past it.",
            "bn": "দ্বিতীয় পরীক্ষা মাপের, আর সেটা দেয় ১৬:১২৬ আয়াত: যা ঘটেছে তাই বলুন, রং চড়ানো গল্প নয়। বারবার বলতে বলতে অভিযোগ বড় হয়ে ওঠে। এখানে একটা বিশেষণ জুড়ে যায়, ওখানে একটা মতলব ধরে নেওয়া হয়, একবারের ঘটনা হয়ে যায় অভ্যাস, আর মাসখানেকের মধ্যে গল্পটা আর আসল অন্যায়ের সঙ্গে মেলে না। যতবার বলবেন, একইভাবে বলুন, আর অন্যায়টা যেখানে শেষ, সেখানেই থামুন। এই সংযমই মজলুমকে ব্যতিক্রমের সীমার ভেতরে রাখে, বাইরে যেতে দেয় না।"
          },
          {
            "en": "The third test is whether you were in fact the one wronged. The narration puts the burden on whoever began it, so the question is not a formality. And 4:149 keeps open an option nobody ever loses by taking: close a grievance without telling anyone at all. The verse ends by naming Allah Hearing and Knowing, which means the case has already been heard by the only Judge who matters. It does not need an audience to be on record.",
            "bn": "তৃতীয় পরীক্ষা হলো, সত্যিই কি অন্যায়টা আপনার ওপরই হয়েছিল। বর্ণনাটি ভার চাপায় সেই জনের ওপর যে শুরু করেছে, তাই প্রশ্নটা নিছক নিয়মরক্ষা নয়। আর ৪:১৪৯ আয়াত এমন একটি পথ খোলা রাখে, যা বেছে নিয়ে কেউ কখনো ঠকে না: কাউকে কিছু না বলেই অভিযোগটা মিটিয়ে ফেলা। আয়াত শেষ হয় আল্লাহকে সর্বশ্রোতা ও সর্বজ্ঞ বলে। অর্থাৎ যিনি একমাত্র আসল বিচারক, তিনি মামলাটা আগেই শুনে ফেলেছেন। তা নথিতে উঠতে কোনো শ্রোতার দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Wronged",
          "bn": "মজলুমের দু'আ"
        },
        "p": [
          {
            "en": "Ibn Kathir preserves al-Hasan al-Basri's advice on what to say in place of a curse: to ask Allah to help him against the one who wronged him and to take his right from him. No narration is cited for it; it is al-Hasan's counsel on this verse, and it fits the two names the verse ends with. It can be said in any language, and it hands the matter to the One who has both the hearing and the power.",
            "bn": "গালির বদলে কী বলা উচিত, সে বিষয়ে হাসান বসরীর পরামর্শটি ইবনে কাসীর ধরে রেখেছেন: আল্লাহর কাছে চাওয়া, তিনি যেন জালিমের বিরুদ্ধে সাহায্য করেন আর তার কাছ থেকে হক আদায় করে দেন। এর পক্ষে কোনো বর্ণনা উল্লেখ নেই; এটি এই আয়াত নিয়ে হাসান বসরীর উপদেশ, আর আয়াতের শেষ নাম দুটির সঙ্গে তা মিলে যায়। যেকোনো ভাষায় এটি বলা যায়, আর এতে বিষয়টি তাঁর হাতে সঁপে দেওয়া হয়, শোনার ক্ষমতা আর করার ক্ষমতা দুটোই যাঁর।"
          },
          {
            "en": "Beside it, a short prayer in the verse's own vocabulary, offered as that and not as a transmitted wording. O Allah, You hear what is said aloud and You know what is hidden. Take my right from where it is owed, and do not let me transgress while taking it. Make me one of those who pardon an evil, for You pardon while fully able to punish. And guard my tongue from making my case larger than my injury.",
            "bn": "এর পাশে আয়াতের নিজের শব্দে গড়া ছোট একটি প্রার্থনা, বর্ণিত কোনো দু'আ নয়, সেভাবেই পড়ুন। হে আল্লাহ, যা জোরে বলা হয় আপনি তা শোনেন, আর যা লুকানো থাকে তাও জানেন। যার কাছে আমার হক পাওনা, সেখান থেকে তা আদায় করে দিন, আর আদায় করতে গিয়ে আমাকে সীমা ছাড়াতে দেবেন না। আমাকে তাদের দলে রাখুন যারা মন্দকে ক্ষমা করে, কারণ শাস্তি দেওয়ার পূর্ণ ক্ষমতা রেখেও আপনি ক্ষমা করেন। আর আমার জিহ্বাকে আটকে রাখুন, যেন অন্যায়ের চেয়ে আমার অভিযোগটা বড় হয়ে না ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সঙ্গে নেওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "The last time I told someone what had been done to me, was I trying to recover a right, or to collect agreement? Would I tell the story the same way if the other person were sitting in the room? Is there a version of an old grievance that has quietly grown since the day it happened, and could I shrink it back to what actually took place?",
            "bn": "শেষবার যখন কাউকে বলেছিলাম আমার সঙ্গে কী করা হয়েছে, তখন কি হক ফিরে পেতে চাইছিলাম, নাকি লোকের সায় জোগাড় করতে? মানুষটা নিজে ঘরে বসে থাকলেও কি গল্পটা ঠিক একইভাবে বলতাম? পুরনো কোনো অভিযোগ কি সেদিনের পর থেকে চুপচাপ বড় হয়ে উঠেছে? সেটাকে কি আবার যা ঘটেছিল ঠিক ততটুকুতে নামিয়ে আনতে পারি?"
          },
          {
            "en": "Ibn Abbas (RA) said that patience is better even where the permission is real. Which grievance of mine is real, and still better left? The verse ends with Hearing and Knowing. If I truly believed my case had already been heard, how much of what I say about it would I still need to say?",
            "bn": "ইবনে আব্বাস (রাঃ) বলেছেন, অনুমতি থাকা সত্ত্বেও ধৈর্যই ভালো। আমার কোন অভিযোগটি সত্যি, অথচ ছেড়ে দেওয়াই ভালো? আয়াত শেষ হয় সর্বশ্রোতা আর সর্বজ্ঞ নামে। আমার মামলা যে ইতিমধ্যে শোনা হয়ে গেছে, এ কথা যদি সত্যিই বিশ্বাস করতাম, তবে এ নিয়ে যা যা বলি তার কতটুকু আর বলার দরকার থাকত?"
          }
        ]
      }
    ]
  },
  "4:157-159": {
    "sections": [
      {
        "h": {
          "en": "Where the Denial Stands",
          "bn": "অস্বীকারটি কোথায় দাঁড়িয়ে"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and from 4:153 it answers a demand: the People of the Scripture ask the Prophet ﷺ to bring down a book to them from the sky. The answer recalls a greater demand once made to Musa (AS), and then lists what was charged against a people in their own history. 4:155 names the breaking of the covenant, the rejection of Allah's signs, the killing of prophets without right, and the claim that their hearts were wrapped. 4:156 names a grave slander uttered against Maryam.",
            "bn": "সূরা আন-নিসা মাদানি সূরা, আর ৪:১৫৩ আয়াত থেকে এটি একটি দাবির জবাব দেয়: আহলে কিতাব নবী ﷺ-এর কাছে চায়, আসমান থেকে তাদের সামনে একটি কিতাব নামিয়ে আনা হোক। জবাবে মনে করিয়ে দেওয়া হয়, মূসা (আঃ)-র কাছে একসময় এর চেয়েও বড় দাবি তোলা হয়েছিল। এরপর তালিকা আসে, ইতিহাসে এক সম্প্রদায়ের বিরুদ্ধে যেসব অভিযোগ উঠেছিল। ৪:১৫৫ আয়াত বলে অঙ্গীকার ভাঙার কথা, আল্লাহর নিদর্শন অস্বীকারের কথা, অন্যায়ভাবে নবীদের হত্যার কথা, আর তাদের হৃদয় আচ্ছাদিত বলে দাবি করার কথা। ৪:১৫৬ আয়াত বলে মারইয়ামের প্রতি গুরুতর অপবাদের কথা।"
          },
          {
            "en": "Where the list ends matters for reading it fairly. 4:160 and 4:161 name further wrongs, and then 4:162 turns: those firm in knowledge among them, and the believers, believe in what was sent down to the Prophet ﷺ and what was sent down before him, and they will be given a great reward. The charges belong to particular acts of particular people in a particular history, and the passage itself refuses to turn them into a description of everyone who carries that name.",
            "bn": "তালিকাটি কোথায় গিয়ে শেষ হয়, ন্যায্যভাবে পড়তে হলে সেটা খেয়াল রাখা জরুরি। ৪:১৬০ ও ৪:১৬১ আয়াত আরও কিছু অন্যায়ের কথা বলে, তারপর ৪:১৬২ আয়াত মোড় নেয়: তাদের মধ্যে যারা জ্ঞানে পরিপক্ব, আর মুমিনগণ, তারা নবী ﷺ-এর প্রতি যা নাজিল হয়েছে আর তাঁর আগে যা নাজিল হয়েছিল তাতে ঈমান রাখে, আর তাদের দেওয়া হবে মহাপুরস্কার। অভিযোগগুলো নির্দিষ্ট সময়ের নির্দিষ্ট কিছু মানুষের নির্দিষ্ট কাজের সঙ্গে জড়িত, আর অংশটি নিজেই সেগুলোকে ওই নাম বহনকারী সবার পরিচয় বানাতে রাজি নয়।"
          },
          {
            "en": "Notice what the verse does with the boast it reports. Ibn Kathir says the words were uttered in mockery, and al-Muyassar says the same, that the claim was made by way of derision. Yet the Quran reports it with every title intact: the Messiah, Isa son of Maryam, the messenger of Allah. The denial that follows takes nothing from him. It removes only the thing the speakers thought they had done.",
            "bn": "লক্ষ করুন, যে দম্ভের কথা আয়াতটি জানাচ্ছে, সেটাকে আয়াত কীভাবে তুলে ধরে। ইবনে কাসীর বলেন, কথাগুলো বলা হয়েছিল ঠাট্টা করে; আল-মুয়াসসারও একই কথা বলে, দাবিটা ছিল বিদ্রূপের সুরে। তবু কুরআন কথাটি তুলে ধরে প্রতিটি উপাধি অক্ষত রেখে: মাসীহ, মারইয়ামের পুত্র ঈসা, আল্লাহর রাসূল। এরপর যে অস্বীকার আসে, তা তাঁর কিছুই কেড়ে নেয় না। কেড়ে নেয় কেবল সেই কাজটা, যা বক্তারা ভেবেছিল তারা করে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Statements in Order",
          "bn": "পরপর চারটি কথা"
        },
        "p": [
          {
            "en": "The verse answers in sequence. Wa ma qataluhu wa ma salabuhu, two flat denials: they did not kill him and they did not crucify him. Then wa lakin shubbiha lahum. The verb is from sh-b-h, which carries likeness and resemblance, and it stands in the passive with no agent named and no second person named either. The Quran says that the matter was made to appear so to them, and stops. That restraint is exactly where the commentators' accounts begin.",
            "bn": "আয়াত জবাব দেয় পরপর সাজিয়ে। ওয়া মা কাতালূহু ওয়া মা সালাবূহু, সোজাসুজি দুটি অস্বীকার: তারা তাঁকে হত্যা করেনি, ক্রুশবিদ্ধও করেনি। এরপর ওয়া লাকিন শুব্বিহা লাহুম। ক্রিয়াটি শীন-বা-হা মূল থেকে, যার ভেতরে আছে সাদৃশ্য আর মিল। এটি বসেছে কর্মবাচ্যে, কর্তার নাম নেই, দ্বিতীয় কোনো ব্যক্তির নামও নেই। কুরআন বলে, বিষয়টি তাদের কাছে সেরকম দেখানো হয়েছিল, আর সেখানেই থেমে যায়। ঠিক এই সংযমের জায়গা থেকেই মুফাসসিরদের বর্ণনাগুলো শুরু হয়।"
          },
          {
            "en": "Next the verse describes the state of those who dispute the matter: they are in doubt about it, and they have no knowledge of it except the following of assumption. Two words stand against each other here, ilm and zann, knowledge and conjecture, and the verse says plainly which of the two the claim was resting on. It is a charge about method before it is a charge about the claim itself.",
            "bn": "এরপর আয়াত বলে, যারা এ বিষয়ে মতভেদ করে তাদের অবস্থা কী: তারা এ নিয়ে সন্দেহে আছে, আর অনুমানের পিছু নেওয়া ছাড়া এ ব্যাপারে তাদের কোনো জ্ঞানই নেই। এখানে দুটি শব্দ মুখোমুখি দাঁড়ায়, ইলম আর যান্ন, অর্থাৎ জ্ঞান আর অনুমান। দাবিটি এই দুইয়ের কোনটির ওপর দাঁড়িয়ে ছিল, আয়াত তা পরিষ্কার বলে দেয়। অভিযোগটা দাবির বিরুদ্ধে ওঠার আগে ওঠে পদ্ধতির বিরুদ্ধে।"
          },
          {
            "en": "The last clause is wa ma qataluhu yaqina. This app renders it and they did not kill him, for certain. Ibn Kathir attaches the certainty to the killers: they are not sure that the one they killed was Isa (AS), but are in doubt and confusion over it. Al-Muyassar reads it the same way, that they did not kill him as men who were certain but as men doubting and supposing. Then 4:158 opens with bal, the particle that cancels what came before and puts something else in its place: rather, Allah raised him to Himself.",
            "bn": "শেষ কথাটি ওয়া মা কাতালূহু ইয়াকীনা। এই অ্যাপের অনুবাদে এসেছে, এটা নিশ্চিত সত্য যে তারা তাকে হত্যা করেনি। ইবনে কাসীর নিশ্চয়তার কথাটি জুড়ে দেন হত্যাকারীদের সঙ্গে: তারা যাকে হত্যা করেছে সে যে ঈসা (আঃ) ছিলেন, এ ব্যাপারে তারা নিশ্চিত নয়, বরং সন্দেহ আর ধন্দের মধ্যে আছে। আল-মুয়াসসারও একইভাবে পড়ে, তারা নিশ্চিত হয়ে তাঁকে হত্যা করেনি, করেছে সন্দেহ আর ধারণা নিয়ে। এরপর ৪:১৫৮ আয়াত শুরু হয় বাল দিয়ে, যে শব্দটি আগের কথা বাতিল করে তার জায়গায় অন্য কিছু বসায়: বরং আল্লাহ তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন।"
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
            "en": "Ibn Kathir explains shubbiha lahum as referring to the person whom they took to be Isa (AS), and says the doubt named in the verse covers both those who made the claim and those who received it from them. He then relates a long account of how the matter came about. He gives it as a report he has gathered, not as something the verse itself states, and a reader should hold the two apart.",
            "bn": "ইবনে কাসীর শুব্বিহা লাহুম-এর ব্যাখ্যায় বলেন, কথাটি সেই ব্যক্তিকে নিয়ে, যাকে তারা ঈসা (আঃ) বলে ধরে নিয়েছিল। তিনি আরও বলেন, আয়াতে যে সন্দেহের কথা এসেছে, তাতে দুই দলই পড়ে: যারা দাবিটি করেছিল, আর যারা তাদের কাছ থেকে তা শুনে নিয়েছিল। এরপর ঘটনাটি কীভাবে ঘটেছিল, সে বিষয়ে তিনি লম্বা একটি বিবরণ দেন। বিবরণটি তিনি দেন নিজের সংগ্রহ করা বর্ণনা হিসেবে, আয়াতের নিজের কথা হিসেবে নয়। পাঠককে এ দুটো আলাদা রাখতে হবে।"
          },
          {
            "en": "The fullest of those reports, which Ibn Kathir takes from Ibn Abi Hatim on the authority of Ibn Abbas (RA) and says an-Nasa'i also narrated, runs this way. Isa (AS) was with his companions in a house. He asked who would volunteer to have his likeness put upon him and be killed in his place, with his companionship in Paradise. One of the youngest volunteered, and after being told more than once to sit down he was given it. Isa (AS) was raised through an opening in the house, and those who came looking found the young man. Ibn Kathir says many of the salaf said this.",
            "bn": "এসব বর্ণনার মধ্যে সবচেয়ে বিস্তারিতটি ইবনে কাসীর নিয়েছেন ইবনে আবী হাতিম থেকে, ইবনে আব্বাস (রাঃ)-র সূত্রে, আর জানিয়েছেন নাসাঈও এটি বর্ণনা করেছেন। বিবরণটি এমন। ঈসা (আঃ) একটি ঘরে সঙ্গীদের সঙ্গে ছিলেন। তিনি জিজ্ঞেস করলেন, কে রাজি আছে তাঁর চেহারা নিজের ওপর নিতে, তাঁর বদলে নিহত হতে, বিনিময়ে জান্নাতে তাঁর সঙ্গী হতে? সবচেয়ে কমবয়সীদের একজন রাজি হলেন। তাঁকে একাধিকবার বসে যেতে বলা হলো, শেষে চেহারাটা তাঁর ওপরই দেওয়া হলো। ঈসা (আঃ)-কে ঘরের একটি ফোকর দিয়ে উঠিয়ে নেওয়া হলো, আর যারা খুঁজতে এলো তারা সেই তরুণকেই পেল। ইবনে কাসীর বলেন, সালাফের অনেকেই এ কথা বলেছেন।"
          },
          {
            "en": "The details, though, are not fixed. In Ibn Kathir's own telling the number of companions in the house is given as twelve, or thirteen, or seventeen, and the reports do not agree with each other on how the matter was arranged. Al-Muyassar keeps to the least that can be said: they crucified a man who resembled him, supposing him to be Isa (AS). What the verses settle is the fact, that he was not killed, not crucified, and was raised. How it was brought about is where the reports vary, and it is honest to say so.",
            "bn": "তবে খুঁটিনাটি স্থির নয়। ইবনে কাসীরের নিজের বিবরণেই ঘরে সঙ্গীদের সংখ্যা এসেছে বারো, কিংবা তেরো, কিংবা সতেরো। ব্যাপারটি ঠিক কীভাবে ঘটানো হয়েছিল, তা নিয়েও বর্ণনাগুলো একে অন্যের সঙ্গে মেলে না। আল-মুয়াসসার ন্যূনতম কথাটুকুতেই থাকে: তারা তাঁর মতো দেখতে এক ব্যক্তিকে ক্রুশবিদ্ধ করেছিল, তাকেই ঈসা (আঃ) ভেবে। আয়াতগুলো চূড়ান্ত করে কেবল মূল ঘটনা: তাঁকে হত্যা করা হয়নি, ক্রুশবিদ্ধ করা হয়নি, আর তাঁকে উঠিয়ে নেওয়া হয়েছে। কীভাবে তা ঘটল, সেখানেই বর্ণনায় ভিন্নতা, আর সে কথা খোলাখুলি স্বীকার করাই সততা।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised, Not Rescued by Force",
          "bn": "উঠিয়ে নেওয়া, লড়াই করে উদ্ধার নয়"
        },
        "p": [
          {
            "en": "4:158 says bal rafa'ahu Allahu ilayh, rather, Allah raised him to Himself. Al-Muyassar says he was raised in body and soul, alive, and purified from those who disbelieved. The verse ends on two names, and Ibn Kathir explains them: Aziz, the Almighty who is never weak and by whom nobody who takes refuge is ever disgraced, and Hakim, wise in everything He decrees for His creation. No army came and no escape was made. The matter was simply taken out of their hands.",
            "bn": "৪:১৫৮ আয়াত বলে, বাল রাফাআহুল্লাহু ইলাইহি, বরং আল্লাহ তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন। আল-মুয়াসসার বলে, তাঁকে দেহ ও রূহসহ জীবিত অবস্থায় উঠিয়ে নেওয়া হয়েছে, আর যারা কুফরী করেছিল তাদের থেকে পবিত্র করা হয়েছে। আয়াত শেষ হয় দুটি নামে, আর ইবনে কাসীর তার ব্যাখ্যা দেন: আযীয, মহাপরাক্রমশালী, যিনি কখনো দুর্বল নন আর যাঁর আশ্রয়ে গিয়ে কেউ কখনো লাঞ্ছিত হয় না; আর হাকীম, সৃষ্টির জন্য তিনি যা কিছু নির্ধারণ করেন তার সবটিতেই প্রজ্ঞাময়। কোনো বাহিনী আসেনি, পালানোর কোনো ব্যবস্থাও হয়নি। বিষয়টি কেবল তাদের হাত থেকে সরিয়ে নেওয়া হয়েছিল।"
          },
          {
            "en": "Read it with 3:55, where Allah tells Isa (AS) that He will take him, raise him to Himself and purify him from those who disbelieved. At-Tabari weighed the readings of the verb there and preferred that Allah took him from the earth and raised him, on account of the many reports that he will descend. Ibn Kathir reports that most scholars read the taking in that verse as the taking of sleep. The two readings differ over the word and meet on the outcome, and neither holds that the plotters killed him.",
            "bn": "এটি ৩:৫৫ আয়াতের সঙ্গে মিলিয়ে পড়ুন। সেখানে আল্লাহ ঈসা (আঃ)-কে বলেন, তিনি তাঁকে নিয়ে নেবেন, নিজের কাছে উঠিয়ে নেবেন, আর যারা কুফরী করেছে তাদের থেকে পবিত্র করবেন। আত-তাবারী সেখানে ক্রিয়াটির নানা পাঠ যাচাই করেছেন। তাঁর কাছে অগ্রগণ্য মত হলো, আল্লাহ তাঁকে যমীন থেকে তুলে নিজের কাছে উঠিয়ে নিয়েছেন, কারণ তাঁর আবার নেমে আসা নিয়ে বহু বর্ণনা আছে। ইবনে কাসীর জানান, অধিকাংশ আলেমের মতে সেই আয়াতে ‘নিয়ে নেওয়া’ মানে ঘুমের মধ্যে নিয়ে নেওয়া। দুটি মত শব্দের অর্থে আলাদা, পরিণতিতে এক। আর কোনোটিই বলে না যে ষড়যন্ত্রকারীরা তাঁকে হত্যা করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Believing Before His Death",
          "bn": "তার মৃত্যুর আগে ঈমান আনা"
        },
        "p": [
          {
            "en": "4:159 says that there is none of the People of the Scripture but will surely believe in him before his death, and that on the Day of Resurrection he will be a witness against them. Whose death is meant? Ibn Jarir at-Tabari records from Ibn Abbas (RA) that it is the death of Isa (AS), and al-Awfi reports much the same from him. Abu Malik says it happens after Isa (AS) returns and before he dies, when all the People of the Scripture will believe in him. Al-Muyassar reads it the same way.",
            "bn": "৪:১৫৯ আয়াত বলে, আহলে কিতাবের এমন কেউ নেই যে তার মৃত্যুর আগে তাঁর প্রতি ঈমান আনবে না, আর কিয়ামতের দিন তিনি তাদের বিরুদ্ধে সাক্ষী হবেন। কার মৃত্যুর কথা বলা হচ্ছে? ইবনে জারীর আত-তাবারী ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন, এটি ঈসা (আঃ)-র মৃত্যু। আওফীও তাঁর থেকে কাছাকাছি কথাই বর্ণনা করেন। আবূ মালিক বলেন, এটি ঘটবে ঈসা (আঃ) ফিরে আসার পর এবং তাঁর মৃত্যুর আগে, তখন আহলে কিতাবের সবাই তাঁর প্রতি ঈমান আনবে। আল-মুয়াসসারও একইভাবে পড়ে।"
          },
          {
            "en": "Al-Bukhari records, in the chapter on the prophets under the descent of the son of Maryam, that Abu Hurayrah (RA) reported the Messenger of Allah ﷺ saying that the son of Maryam will soon descend among them as a just ruler, that he will break the cross, kill the swine and abolish the jizyah, and that wealth will become so abundant that nobody will accept it. Abu Hurayrah (RA) then said: recite, if you wish, 4:159. Muslim also recorded it. Ibn Kathir cites it here for that reading.",
            "bn": "সহীহ বুখারীতে নবীদের অধ্যায়ে, মারইয়ামের পুত্রের অবতরণ শিরোনামে, আবূ হুরায়রা (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন, শীঘ্রই মারইয়ামের পুত্র ন্যায়পরায়ণ শাসক হয়ে তাঁদের মধ্যে নেমে আসবেন, তিনি ক্রুশ ভেঙে দেবেন, শূকর হত্যা করবেন, জিযিয়া রহিত করবেন, আর সম্পদ এত বেড়ে যাবে যে কেউ তা গ্রহণ করবে না। এরপর আবূ হুরায়রা (রাঃ) বলেন, ইচ্ছে হলে ৪:১৫৯ আয়াতটি পড়ে নাও। মুসলিমও বর্ণনাটি এনেছেন। ইবনে কাসীর এই আয়াতের ব্যাখ্যায় সেই পাঠের সমর্থনেই বর্ণনাটি আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses to Hear Alongside",
          "bn": "সঙ্গে শোনার আয়াতগুলো"
        },
        "p": [
          {
            "en": "3:55 gives Allah's own words to Isa (AS): that He will take him, raise him to Himself, purify him from those who disbelieved, and judge between people on the Day of Resurrection in what they used to differ over. 5:117 has Isa (AS) speak of it himself before Allah, saying that he was a witness over them as long as he was among them, and that when Allah took him up, Allah was the Observer over them.",
            "bn": "৩:৫৫ আয়াত ঈসা (আঃ)-র প্রতি আল্লাহর নিজের কথা তুলে ধরে: তিনি তাঁকে নিয়ে নেবেন, নিজের কাছে উঠিয়ে নেবেন, কাফিরদের থেকে পবিত্র করবেন, আর কিয়ামতের দিন মানুষ যে বিষয়ে মতভেদ করত তার ফয়সালা করবেন। ৫:১১৭ আয়াতে ঈসা (আঃ) নিজেই আল্লাহর সামনে সে কথা বলেন, যতদিন তিনি তাদের মধ্যে ছিলেন ততদিন তিনি তাদের ব্যাপারে সাক্ষী ছিলেন, আর আল্লাহ যখন তাঁকে উঠিয়ে নিলেন, তখন আল্লাহই ছিলেন তাদের তত্ত্বাবধায়ক।"
          },
          {
            "en": "19:33 gathers the stages of his life under one peace: the day he was born, the day he will die, and the day he is raised alive. 5:75 states his standing plainly and with honour, that the Messiah son of Maryam was no more than a messenger, that messengers had passed away before him, that his mother was a woman of truth, and that the two of them used to eat food. 43:61 says he is knowledge of the Hour, so do not doubt it. And 4:156, just before our verse, is the Quran defending Maryam from a slander.",
            "bn": "১৯:৩৩ আয়াত তাঁর জীবনের সব কটি পর্বকে এক সালামের ভেতরে গেঁথে দেয়: যেদিন তিনি জন্মেছেন, যেদিন তাঁর মৃত্যু হবে, আর যেদিন তিনি জীবিত হয়ে উত্থিত হবেন। ৫:৭৫ আয়াত তাঁর মর্যাদা বলে দেয় সোজাসুজি আর সম্মানের সঙ্গে: মারইয়ামের পুত্র মাসীহ রাসূল ছাড়া কিছু ছিলেন না, তাঁর আগেও রাসূলগণ গত হয়েছেন, তাঁর মা ছিলেন সত্যপন্থী নারী, আর তাঁরা দুজনেই খাবার খেতেন। ৪৩:৬১ আয়াত বলে, তিনি কিয়ামতের জ্ঞানস্বরূপ, তাই এ নিয়ে সন্দেহ কোরো না। আর আমাদের আয়াতের ঠিক আগেই ৪:১৫৬ আয়াতে কুরআন মারইয়ামকে অপবাদ থেকে রক্ষা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Speaking About It Fairly",
          "bn": "ন্যায্যভাবে কথা বলা"
        },
        "p": [
          {
            "en": "Ibn Kathir reports, from Abu Hurayrah (RA), that the Prophet ﷺ said the prophets are brothers of one father with different mothers, that their religion is one, and that he himself has more right to Isa son of Maryam than anyone else has, because there was no prophet between the two of them. A Muslim who takes that seriously cannot speak about Isa (AS) lightly, and cannot treat love for him as though it were itself the offence.",
            "bn": "ইবনে কাসীর আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, নবীগণ এক বাবার সন্তান, মা আলাদা, আর তাঁদের দ্বীন এক। তিনি আরও বলেছেন, মারইয়ামের পুত্র ঈসার ওপর সবচেয়ে বেশি হক তাঁরই, কারণ তাঁদের দুজনের মাঝখানে আর কোনো নবী আসেননি। যে মুসলমান এ কথাটি গুরুত্ব দিয়ে নেন, তিনি ঈসা (আঃ)-কে নিয়ে হালকা কথা বলতে পারেন না, আর তাঁর প্রতি ভালোবাসাকে নিজেই কোনো অপরাধ বলে ধরতে পারেন না।"
          },
          {
            "en": "State the difference exactly. Christians hold that Jesus, as they name Isa (AS), died on the cross and rose again, and that belief stands at the centre of their faith. Muslims hold, from 4:157 and 4:158, that he was neither killed nor crucified, and that Allah raised him to Himself. That is a real disagreement and it does not need softening. What it needs is to be put in terms the other person would recognise before it is disagreed with.",
            "bn": "পার্থক্যটা ঠিকভাবে বলুন। খ্রিষ্টানরা বিশ্বাস করেন, যাঁকে তাঁরা যিশু বলেন, সেই ঈসা (আঃ) ক্রুশে মারা গিয়েছিলেন এবং আবার জীবিত হয়েছিলেন, আর এই বিশ্বাসটি তাঁদের ধর্মের একেবারে কেন্দ্রে। মুসলমানরা ৪:১৫৭ ও ৪:১৫৮ আয়াত থেকে বিশ্বাস করেন, তাঁকে হত্যাও করা হয়নি, ক্রুশবিদ্ধও করা হয়নি, বরং আল্লাহ তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন। এটি সত্যিকারের মতভেদ, একে নরম করে বলার দরকার নেই। দরকার এটুকুই যে দ্বিমত করার আগে অন্যজনের বিশ্বাসটা এমনভাবে বলা হোক, যা শুনে তিনি নিজে বলবেন হ্যাঁ, আমি এটাই মানি।"
          },
          {
            "en": "Two things the passage does not license. The boast in 4:157 was made by particular people at a particular time, and the passage itself ends at 4:162 by excepting those firm in knowledge among them, so the verse is not a charge to lay at the door of anyone living. And the fault the verse names is following assumption where knowledge is required, which means that quoting it to win an argument you have not studied is to fall into the very thing it describes. 3:55 leaves the final judgement between people with Allah.",
            "bn": "অংশটি দুটি কাজের অনুমতি দেয় না। ৪:১৫৭ আয়াতের দম্ভোক্তি নির্দিষ্ট সময়ের নির্দিষ্ট কিছু মানুষের। আর অংশটি নিজেই ৪:১৬২ আয়াতে এসে তাদের মধ্যে জ্ঞানে পরিপক্বদের আলাদা করে রাখে। তাই এ আয়াত আজ বেঁচে থাকা কারও ঘাড়ে চাপানোর মতো অভিযোগ নয়। দ্বিতীয়ত, আয়াত যে দোষের কথা বলে তা হলো, যেখানে জ্ঞান দরকার সেখানে অনুমানের পিছু নেওয়া। কাজেই যে বিষয় আপনি পড়ে দেখেননি, সে বিষয়ে তর্ক জিততে আয়াতটি উদ্ধৃত করা মানে ঠিক সেই দোষেই পড়া। মানুষের মধ্যে চূড়ান্ত ফয়সালা ৩:৫৫ আয়াত আল্লাহর হাতেই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer in Its Vocabulary",
          "bn": "আয়াতের শব্দে দু'আ"
        },
        "p": [
          {
            "en": "These verses carry no supplication. What follows is a short prayer built from their own words, offered as that and not as a transmitted wording. O Allah, You raised Your servant Isa to Yourself when men thought they had finished with him. Do not let me judge Your affairs by how they look. Give me knowledge where I have followed assumption. Keep my tongue honourable when I speak of Your prophets and of those who love them. And on the Day he stands as a witness, let him have seen nothing from me that shames me.",
            "bn": "এই আয়াতগুলোতে কোনো দু'আ নেই। নিচের ছোট দু'আটি আয়াতের নিজের শব্দ দিয়ে গড়া; এটি বর্ণিত কোনো দু'আ নয়, সেভাবেই পড়ুন। হে আল্লাহ, মানুষ যখন ভেবেছিল আপনার বান্দা ঈসার ব্যাপারটা তারা চুকিয়ে ফেলেছে, তখন আপনি তাঁকে নিজের কাছে উঠিয়ে নিয়েছেন। আপনার কোনো ফয়সালাকে বাইরের চেহারা দেখে বিচার করা থেকে আমাকে বাঁচান। যেখানে আমি অনুমানের পিছু নিয়েছি, সেখানে আমাকে জ্ঞান দিন। আপনার নবীদের নিয়ে আর তাঁদের যাঁরা ভালোবাসেন তাঁদের নিয়ে কথা বলার সময় আমার জবান যেন সম্মানজনক থাকে। আর যেদিন তিনি সাক্ষী হয়ে দাঁড়াবেন, সেদিন যেন আমার এমন কিছু তাঁর দেখা না থাকে, যা আমাকে লজ্জায় ফেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সঙ্গে নেওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse separates knowledge from assumption. What do I hold firmly about another faith that I have never actually checked against what its people say about themselves? If a Christian neighbour asked me what Muslims believe about Isa (AS), could I say it without heat, and could I then state their belief in a way they would accept as accurate?",
            "bn": "আয়াত জ্ঞানকে অনুমান থেকে আলাদা করে দেয়। অন্য কোনো ধর্ম নিয়ে এমন কী আমি শক্ত করে ধরে আছি, যা তাদের নিজেদের কথার সঙ্গে মিলিয়ে কখনো যাচাই করিনি? কোনো খ্রিষ্টান প্রতিবেশী যদি জিজ্ঞেস করেন, ঈসা (আঃ)-কে নিয়ে মুসলমানরা কী বিশ্বাস করে, আমি কি উত্তেজনা ছাড়া তা বলতে পারব? আর তারপর তাঁর বিশ্বাসটা কি এমনভাবে বলতে পারব, যা তিনি নিজে শুনে বলবেন ঠিক বলেছেন?"
          },
          {
            "en": "Allah denied the claim and left every title of honour in place. When I argue, does my speech leave the other person their dignity, or do I take that too? Isa (AS) was rescued in a way nobody watching could see. Where in my own life am I reading a situation only by how it appears from the outside? And what would I want him to have seen of me, on the Day he stands as a witness?",
            "bn": "আল্লাহ দাবিটি প্রত্যাখ্যান করেছেন, অথচ সম্মানের প্রতিটি উপাধি জায়গামতো রেখে দিয়েছেন। তর্ক করার সময় আমার কথা কি অন্যজনের সম্মানটুকু রেখে দেয়, নাকি সেটাও কেড়ে নেয়? ঈসা (আঃ)-কে এমনভাবে রক্ষা করা হয়েছিল, যা চেয়ে থাকা কেউ দেখতে পায়নি। নিজের জীবনের কোন ঘটনাকে আমি কেবল বাইরের চেহারা দেখে বিচার করছি? আর যেদিন তিনি সাক্ষী হয়ে দাঁড়াবেন, সেদিন আমার কোন রূপটা তাঁর দেখা থাকুক বলে আমি চাইব?"
          }
        ]
      }
    ]
  },
  "4:163": {
    "sections": [
      {
        "h": {
          "en": "A Demand Answered with a Line",
          "bn": "দাবির জবাবে নবীদের ধারা"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and its long closing movement turns to the People of the Scripture. In 4:153 they ask the Prophet ﷺ to bring a book down to them from the sky, and the Quran reminds them that their ancestors asked Musa (AS) for something greater, to see Allah openly. From 4:155 a list of charges follows: the covenant broken, prophets killed, the claim about the Messiah, usury taken. Then 4:162 makes an exception for those firm in knowledge among them, who believe in what was sent to the Prophet ﷺ and what was sent before him. It is at this point that 4:163 begins.",
            "bn": "সূরা নিসা মাদানী সূরা, আর তার দীর্ঘ শেষ অংশ আহলে কিতাবের দিকে মুখ ফেরায়। ৪:১৫৩ আয়াতে তারা নবী ﷺ-এর কাছে দাবি করে, আসমান থেকে তাদের সামনে একটা কিতাব নামিয়ে আনো। কুরআন মনে করিয়ে দেয়, তাদের পূর্বপুরুষেরা মূসা (আঃ)-এর কাছে এর চেয়েও বড় দাবি করেছিল, আল্লাহকে প্রকাশ্যে দেখতে চেয়েছিল। ৪:১৫৫ থেকে অভিযোগের তালিকা: অঙ্গীকার ভঙ্গ, নবী হত্যা, মাসীহ নিয়ে দাবি, সুদ খাওয়া। তারপর ৪:১৬২ আয়াত ব্যতিক্রম রাখে তাদের জন্য যারা জ্ঞানে পরিপক্ব, যারা নবী ﷺ-এর ওপর নাজিল হওয়া কিতাবে ও আগের কিতাবে ঈমান রাখে। ঠিক এখান থেকেই ৪:১৬৩ শুরু হয়।"
          },
          {
            "en": "The verse does not answer the demand for a spectacle with a spectacle. It answers with a line of names. We have revealed to you as We revealed to Nuh and the prophets after him, and then Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants, Isa, Ayyub, Yunus, Harun and Sulayman, and to Dawud We gave the Zabur. The next verse, 4:164, adds messengers whose stories were told to the Prophet ﷺ and messengers whose stories were not, and states that Allah spoke to Musa (AS) directly. The reply to those asking for a new kind of proof is that nothing new is happening.",
            "bn": "চমক দেখানোর দাবির জবাবে আয়াত কোনো চমক দেখায় না। জবাব দেয় নামের একটা ধারা দিয়ে। আমি তোমার কাছে ওহি পাঠিয়েছি, যেমন পাঠিয়েছিলাম নূহ ও তাঁর পরের নবীদের কাছে, তারপর ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁর বংশধর, ঈসা, আইয়ূব, ইউনুস, হারূন ও সুলায়মানের কাছে, আর দাঊদকে দিয়েছি যাবূর। পরের আয়াত ৪:১৬৪ আরও রাসূলদের কথা যোগ করে: কারও কাহিনি নবী ﷺ-কে শোনানো হয়েছে, কারও হয়নি। আর জানায়, আল্লাহ মূসা (আঃ)-এর সাথে সরাসরি কথা বলেছেন। যারা নতুন ধরনের প্রমাণ চাইছিল, তাদের জবাব: নতুন কিছুই ঘটছে না।"
          },
          {
            "en": "Ibn Kathir carries, through Ibn Ishaq, a report from Ibn Abbas (RA) that two men of the Jews of Madinah, Sukayn and Adi ibn Zayd, said to the Prophet ﷺ that they did not know of Allah sending anything down to any human being after Musa, and that this verse came down in reply. That is a sirah report, not a hadith of the Sahih, and the verse does not depend on it. Whatever prompted it, its placement is clear: it stands between the charges against those who broke faith and the declaration in 4:166 that Allah Himself bears witness to what He sent down.",
            "bn": "ইবনে কাসীর ইবনে ইসহাকের সূত্রে ইবনে আব্বাস (রাঃ) থেকে একটি বর্ণনা এনেছেন: মদীনার দুই ইহুদি, সুকাইন ও আদী ইবনে যায়েদ, নবী ﷺ-কে বলেছিল, মূসার পরে আল্লাহ কোনো মানুষের ওপর কিছু নাজিল করেছেন বলে তারা জানে না; তার জবাবে এই আয়াত নাজিল হয়। এটি সীরাতের বর্ণনা, সহীহ হাদিস নয়, আর আয়াতটি এর ওপর নির্ভর করে না। নাজিলের উপলক্ষ যা-ই হোক, আয়াতের অবস্থান পরিষ্কার। এক দিকে যারা ওয়াদা ভেঙেছে তাদের বিরুদ্ধে অভিযোগ, অন্য দিকে ৪:১৬৬ আয়াতের ঘোষণা: আল্লাহ যা নাজিল করেছেন, তিনি নিজেই তার সাক্ষী। মাঝখানে এই আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "Wahy, and a Book Given",
          "bn": "ওয়াহী, আর একটি কিতাব দান"
        },
        "p": [
          {
            "en": "The verb is awhayna, from the root w-h-y. Ar-Raghib in al-Mufradat explains wahy as a swift and hidden pointing: communication that reaches its target quickly and privately. The Quran uses the root for Allah's inspiring of the bee in 16:68, for the private signal Zakariya (AS) made to his people, and for the revelation sent to prophets. In every case the knowledge arrives from outside the recipient, without noise, by a channel others cannot see. The People of the Scripture wanted something loud from the sky. The verse names the quiet way Allah has always spoken to those He chose.",
            "bn": "ক্রিয়াপদটি আওহাইনা, মূল ওয়া-হা-ইয়া। রাগিব আল-মুফরাদাতে ওহির ব্যাখ্যা দিয়েছেন দ্রুত ও গোপন ইশারা বলে: এমন বার্তা, যা দ্রুত আর নিভৃতে লক্ষ্যে পৌঁছে যায়। কুরআন এই মূল ব্যবহার করেছে ১৬:৬৮ আয়াতে মৌমাছিকে আল্লাহর ইলহাম দেওয়ার কথায়, যাকারিয়া (আঃ)-এর নিজের লোকদের প্রতি নীরব ইশারায়, আর নবীদের কাছে পাঠানো ওহিতে। প্রতিটি ক্ষেত্রেই জ্ঞান আসে প্রাপকের বাইরে থেকে, নিঃশব্দে, এমন পথে যা অন্যরা দেখতে পায় না। আহলে কিতাব আসমান থেকে সরব কিছু চেয়েছিল। আয়াত জানিয়ে দেয় সেই নীরব পথের কথা, যে পথে আল্লাহ তাঁর বাছাই করা বান্দাদের সাথে বরাবর কথা বলেছেন।"
          },
          {
            "en": "Then the verb changes. Every name in the list falls under awhayna ila, We revealed to; for Dawud (AS) it says wa atayna, and We gave, and names the gift: az-Zabur. The root z-b-r has to do with writing, and a zabur is a written thing, a book. The lexicons connect it to firm, engraved writing. The shift from revealing to giving marks the Zabur out as a complete book handed over, and 17:55 repeats the phrase in the same words. Dawud (AS) received not only speech from Allah but a volume to carry.",
            "bn": "তারপর ক্রিয়াপদ বদলে যায়। তালিকার প্রতিটি নামের বেলায় এসেছে আওহাইনা ইলা, আমি ওহি পাঠিয়েছি; কিন্তু দাঊদ (আঃ)-এর বেলায় এসেছে ওয়া আতাইনা, আর আমি দিয়েছি, সঙ্গে দানটির নামও: আয-যাবূর। মূল যা-বা-রা লেখার সাথে জড়িত, আর যাবূর মানে লিখিত জিনিস, একটি কিতাব। অভিধানগুলো একে যুক্ত করে মজবুত, খোদাই করা লেখার সাথে। ‘ওহি পাঠানো’ থেকে ‘দেওয়া’-তে এই বদল যাবূরকে আলাদা করে চিনিয়ে দেয়: এটি হাতে তুলে দেওয়া একটি পূর্ণ কিতাব। ১৭:৫৫ আয়াতও একই শব্দে কথাটা আবার বলে। দাঊদ (আঃ) আল্লাহর কাছ থেকে শুধু বাণী পাননি, বহন করার মতো একটি গ্রন্থও পেয়েছিলেন।"
          },
          {
            "en": "The order of the names is worth noticing because it is not chronological. Isa (AS) is named before Ayyub, Yunus, Harun and Sulayman (AS), though he came long after them. The grammarians' rule that the Arabic waw joins without imposing sequence applies here, and the commentators do not try to read a timeline into the list. What the list does instead is gather: patriarchs and their descendants, a man tested by illness, a man swallowed by the fish, a brother sent as helper, a king. Revelation, the verse says, went to all of these, and it went to you.",
            "bn": "নামগুলোর ক্রম লক্ষ করার মতো, কারণ তা কালানুক্রমিক নয়। ঈসা (আঃ)-এর নাম এসেছে আইয়ূব, ইউনুস, হারূন ও সুলায়মান (আঃ)-এর আগে, অথচ তিনি এসেছেন তাঁদের অনেক পরে। ব্যাকরণবিদদের নিয়ম, আরবি ‘ওয়াও’ জোড়া দেয় কিন্তু ক্রম চাপিয়ে দেয় না, এখানে খাটে; মুফাসসিররাও তালিকায় কোনো সময়রেখা খোঁজেন না। তালিকা বরং একত্র করে: পিতৃপুরুষ ও তাঁদের বংশধর, রোগে পরীক্ষিত একজন, মাছে গিলে ফেলা একজন, সাহায্যকারী হিসেবে পাঠানো এক ভাই, এক বাদশাহ। আয়াত বলে, ওয়াহী গেছে এঁদের সবার কাছে, আর গেছে তোমার কাছেও।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Saw",
          "bn": "মুফাসসিররা যা দেখেছেন"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a direct statement that Allah sent revelation to His servant Muhammad ﷺ exactly as He sent it to the prophets before him. At 4:164 he stops to list the prophets the Quran names by name, from Adam to Isa (AS) and their leader Muhammad ﷺ, and notes that several scholars of tafsir count Dhul-Kifl among them as well. The messengers not related to the Prophet ﷺ are, in his reading, the many others whose accounts the Quran does not give. The list is true history, and complete only in what Allah chose to tell.",
            "bn": "ইবনে কাসীর আয়াতটিকে সরাসরি ঘোষণা হিসেবে পড়েন: আল্লাহ তাঁর বান্দা মুহাম্মাদ ﷺ-এর কাছে ওহি পাঠিয়েছেন, ঠিক যেমন পাঠিয়েছিলেন তাঁর আগের নবীদের কাছে। ৪:১৬৪ আয়াতে এসে তিনি থেমে কুরআনে নাম ধরে উল্লেখ করা নবীদের তালিকা দেন, আদম থেকে ঈসা (আঃ) পর্যন্ত, আর তাঁদের নেতা মুহাম্মাদ ﷺ। সাথে জানান, তাফসিরের কয়েকজন আলেম যুলকিফলকেও এঁদের মধ্যে গণ্য করেন। তাঁর ব্যাখ্যায়, যে রাসূলদের কাহিনি নবী ﷺ-কে শোনানো হয়নি, তাঁরা সেই অনেকে, যাঁদের বিবরণ কুরআন দেয়নি। তালিকাটি সত্য ইতিহাস, তবে পূর্ণ কেবল ততটুকু, যতটুকু আল্লাহ জানাতে চেয়েছেন।"
          },
          {
            "en": "As-Sa'di draws the argument out. If revelation to Nuh, Ibrahim, Musa and Isa (AS) is admitted, and this revelation is of the same kind and by the same Sender, then rejecting it is not a reasoned position but a preference. To accept some messengers and refuse the one in front of you is the very thing 4:150 condemned earlier in this same surah: believing in some and disbelieving in others, wanting a path in between. The commentators are agreed that the verse binds the Prophet ﷺ to the earlier prophets so tightly that faith in them cannot be separated from faith in him.",
            "bn": "আস-সা'দী যুক্তিটা টেনে বের করেন। নূহ, ইবরাহীম, মূসা ও ঈসা (আঃ)-এর কাছে ওয়াহী আসা যদি মেনে নেওয়া হয়, আর এই ওয়াহী যদি একই ধরনের ও একই প্রেরকের হয়, তাহলে একে অস্বীকার করা কোনো যুক্তির অবস্থান নয়, নিছক পছন্দ। কিছু রাসূলকে মানা আর সামনের জনকে না মানা ঠিক সেই কাজ, যা একই সূরায় ৪:১৫০ নিন্দা করেছে: কতককে মানি, কতককে মানি না, মাঝামাঝি একটা রাস্তা চাই। মুফাসসিররা একমত, আয়াতটি নবী ﷺ-কে আগের নবীদের সাথে এত শক্ত করে বাঁধে যে তাঁদের ওপর ঈমানকে তাঁর ওপর ঈমান থেকে আলাদা করা যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Brothers with One Religion",
          "bn": "এক দ্বীনের ভাইয়েরা"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Abu Hurayrah (RA) that the Prophet ﷺ said: I am the closest of people to Isa son of Maryam in this world and the Hereafter; the prophets are brothers from one father, their mothers are different and their religion is one (al-Bukhari 3442). The image is exact. Brothers from one father with different mothers share a name and a lineage but not a household; the prophets share one religion, the worship of Allah alone, while their laws and their times differ. The hadith says in a sentence what the verse says in a list.",
            "bn": "সহীহ বুখারীতে আবু হুরায়রা (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: দুনিয়া ও আখিরাতে আমি ঈসা ইবনু মারইয়ামের সবচেয়ে কাছের মানুষ; নবীরা এক পিতার সন্তান, তাঁদের মা আলাদা, আর তাঁদের দ্বীন এক (বুখারী ৩৪৪২)। উপমাটি নিখুঁত। এক পিতার সন্তান, মা আলাদা, এমন ভাইদের নাম ও বংশ এক, কিন্তু ঘর এক নয়; নবীদের দ্বীন এক, কেবল আল্লাহর ইবাদত, আর তাঁদের শরিয়ত ও সময় আলাদা। আয়াত যা বলে তালিকা দিয়ে, হাদিস তা বলে এক বাক্যে।"
          },
          {
            "en": "The choice of Isa (AS) in that hadith is not accidental, because the verse names him too, and because between him and the Prophet ﷺ there was no other prophet. The closeness is stated as a fact of the chain, not a sentiment. When the Prophet ﷺ described his relationship to the earlier prophets he used family words, brothers and a father, never the words of rivalry. That is the tone the verse asks its readers to take toward every name on its list.",
            "bn": "ওই হাদিসে ঈসা (আঃ)-কে বেছে নেওয়া কাকতালীয় নয়। আয়াতেও তাঁর নাম আছে, আর তাঁর ও নবী ﷺ-এর মাঝে আর কোনো নবী আসেননি। এই নৈকট্য নবুয়তের ধারার একটা বাস্তব সত্য, নিছক আবেগ নয়। আগের নবীদের সাথে নিজের সম্পর্ক বোঝাতে নবী ﷺ পরিবারের শব্দ ব্যবহার করেছেন, ভাই আর পিতা; প্রতিদ্বন্দ্বিতার শব্দ কখনো নয়। তালিকার প্রতিটি নামের প্রতি আয়াত পাঠকের কাছে ঠিক এই মনোভাবই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Line, Many Verses",
          "bn": "এক ধারা, বহু আয়াত"
        },
        "p": [
          {
            "en": "42:13 says that Allah ordained for the believers of religion what He enjoined on Nuh, what He revealed to the Prophet ﷺ, and what He enjoined on Ibrahim, Musa and Isa (AS): to establish the religion and not be divided in it. That verse gives the content of the shared revelation; 4:163 gives its recipients. 42:51 explains the mechanism: Allah speaks to no human being except by wahy, from behind a partition, or by sending a messenger who reveals by His permission. Read together, these two verses say who received it and how.",
            "bn": "৪২:১৩ আয়াত বলে, আল্লাহ মুমিনদের জন্য দ্বীনের সেই বিধানই দিয়েছেন, যার হুকুম দিয়েছিলেন নূহকে, যা ওহির মাধ্যমে জানিয়েছেন নবী ﷺ-কে, আর যার হুকুম দিয়েছিলেন ইবরাহীম, মূসা ও ঈসা (আঃ)-কে: দ্বীন প্রতিষ্ঠা করো, তাতে বিভক্তি এনো না। ওই আয়াত জানায় সবার কাছে আসা ওহির বিষয়বস্তু কী; ৪:১৬৩ জানায় তা কারা পেয়েছেন। ৪২:৫১ জানায় পদ্ধতি: আল্লাহ কোনো মানুষের সাথে কথা বলেন কেবল ওহির মাধ্যমে, পর্দার আড়াল থেকে, কিংবা কোনো দূত পাঠিয়ে, যে তাঁর অনুমতিতে ওহি পৌঁছে দেয়। এই দুটো আয়াত মিলিয়ে পড়লে জানা যায়, কে পেয়েছেন আর কীভাবে।"
          },
          {
            "en": "3:84 puts the list into the mouth of the believers as a creed: we believe in what was revealed to us and to Ibrahim, Isma'il, Ishaq, Ya'qub and the Descendants, and what was given to Musa and Isa and the prophets from their Lord; we make no distinction between any of them. The same names, the same refusal to pick and choose. 6:91 answers the claim that Allah revealed nothing to a human being with a question: who then sent down the book Musa brought as light and guidance? And 4:152 promises reward to those who believe in Allah and His messengers and do not discriminate between any of them.",
            "bn": "৩:৮৪ আয়াত তালিকাটিকে মুমিনদের মুখে আকিদা হিসেবে তুলে দেয়: আমরা ঈমান এনেছি যা আমাদের প্রতি ও ইবরাহীম, ইসমাঈল, ইসহাক, ইয়াকুব ও তাঁর বংশধরের প্রতি নাজিল হয়েছে তার ওপর, আর যা মূসা, ঈসা ও অন্য নবীদের তাঁদের রবের পক্ষ থেকে দেওয়া হয়েছে তার ওপর; আমরা তাঁদের কারো মধ্যে পার্থক্য করি না। একই নাম, আর বেছে বেছে মানতে সেই একই আপত্তি। ৬:৯১ আয়াত ‘আল্লাহ কোনো মানুষের কাছে কিছু নাজিল করেননি’ এই দাবির জবাব দেয় প্রশ্ন দিয়ে: তাহলে মূসা যে কিতাব এনেছিলেন, মানুষের জন্য আলো ও পথনির্দেশ, তা কে নাজিল করেছিল? আর ৪:১৫২ আয়াত পুরস্কারের ওয়াদা দেয় তাদের, যারা আল্লাহ ও তাঁর রাসূলদের ওপর ঈমান আনে আর তাঁদের কারো মধ্যে পার্থক্য করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Prophets as Family",
          "bn": "নবীদের পরিবার হিসেবে পড়া"
        },
        "p": [
          {
            "en": "The first change is in how a believer reads the stories of the prophets. They are not other people's scriptures, borrowed for illustration. Nuh building in the open, Ibrahim leaving his father's house, Ayyub keeping faith through illness, Yunus praying in the dark of the sea: the verse says the same Sender spoke to each of them who spoke to the Prophet ﷺ, so their stories are the family history of every Muslim. A person who reads Surah Yusuf or Surah Maryam as his own lineage reads it differently from one who reads it as a curiosity.",
            "bn": "প্রথম বদল আসে নবীদের কাহিনি পড়ার ধরনে। সেগুলো অন্যের কিতাব নয়, উদাহরণের জন্য ধার করা নয়। নূহ খোলা মাঠে নৌকা বানাচ্ছেন, ইবরাহীম পিতার ঘর ছাড়ছেন, আইয়ূব রোগের ভেতর ঈমান আঁকড়ে আছেন, ইউনুস সমুদ্রের অন্ধকারে দোয়া করছেন: আয়াত বলে, যিনি নবী ﷺ-এর সাথে কথা বলেছেন সেই একই প্রেরক এঁদের প্রত্যেকের সাথে কথা বলেছেন, তাই এঁদের কাহিনি প্রতিটি মুসলমানের পারিবারিক ইতিহাস। সূরা ইউসুফ বা সূরা মারইয়ামকে যে নিজের বংশধারা হিসেবে পড়ে, সে কৌতূহল নিয়ে পড়া মানুষের চেয়ে অন্যভাবে পড়ে।"
          },
          {
            "en": "The second change is in conversation with Jews and Christians. The verse begins from what is shared, and so can a believer: Ibrahim, Musa, Dawud, Isa (AS) are common ground the Quran itself lays out before it says anything else. A Muslim who opens with that list is doing what 4:163 does. The third change concerns the demand for signs. The people in 4:153 wanted a book from the sky; the verse offered them the pattern already in front of them. When a believer finds himself waiting for a special sign before he will obey, this verse asks whether the sign has not already been given many times over.",
            "bn": "দ্বিতীয় বদল আসে ইহুদি ও খ্রিস্টানদের সাথে কথাবার্তায়। আয়াত শুরু করে মিলের জায়গা থেকে, মুমিনও তা-ই করতে পারে: ইবরাহীম, মূসা, দাঊদ, ঈসা (আঃ) দুই পক্ষের মিলের জমি, আর কুরআন নিজেই অন্য কিছু বলার আগে সেটা সামনে বিছিয়ে দেয়। যে মুসলমান ওই তালিকা দিয়ে কথা শুরু করে, সে ৪:১৬৩ আয়াতের পথেই চলছে। তৃতীয় বদল নিদর্শনের দাবি নিয়ে। ৪:১৫৩ আয়াতের লোকেরা আসমান থেকে কিতাব চেয়েছিল; আয়াত তাদের দেখিয়ে দিল সেই ধারা, যা আগে থেকেই তাদের চোখের সামনে ছিল। কোনো মুমিন যখন টের পায়, হুকুম মানার আগে সে একটা বিশেষ নিদর্শনের অপেক্ষায় বসে আছে, তখন এই আয়াত তাকে জিজ্ঞেস করে: নিদর্শন কি আগেই বহুবার দেওয়া হয়নি?"
          }
        ]
      },
      {
        "h": {
          "en": "No Distinction Between Any",
          "bn": "কারো মধ্যে পার্থক্য নেই"
        },
        "p": [
          {
            "en": "The Quran itself supplies the supplication that fits this verse, at the end of Surah al-Baqarah. In 2:285 the Messenger ﷺ and the believers declare faith in Allah, His angels, His books and His messengers, saying: we make no distinction between any of His messengers. And they say: we hear and we obey; Your forgiveness, our Lord, and to You is the final destination. A believer who has just read the list of names in 4:163 can close it with these words, which affirm the whole line at once and then ask forgiveness, because to hear so many messengers and still fall short is a thing that needs forgiving.",
            "bn": "এই আয়াতের সাথে মানানসই দোয়া কুরআন নিজেই দিয়েছে, সূরা বাকারার শেষে। ২:২৮৫ আয়াতে রাসূল ﷺ ও মুমিনরা আল্লাহ, তাঁর ফেরেশতা, তাঁর কিতাব ও তাঁর রাসূলদের ওপর ঈমানের ঘোষণা দেন, বলেন: আমরা তাঁর রাসূলদের কারো মধ্যে পার্থক্য করি না। আর বলেন: আমরা শুনলাম ও মানলাম; হে আমাদের রব, আমরা আপনার মাগফিরাত চাই, আর ফিরে যেতে হবে আপনারই কাছে। ৪:১৬৩ আয়াতের নামের তালিকা পড়ার পর একজন মুমিন এই কথাগুলো দিয়ে তা শেষ করতে পারে। এ কথায় আগে পুরো ধারাকে একসাথে মেনে নেওয়া আছে, তারপর মাফ চাওয়া। কারণ এত রাসূলের কথা শুনেও পিছিয়ে থাকা এমন ত্রুটি, যার জন্য মাফ চাইতেই হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Ours or Theirs",
          "bn": "আমাদের, নাকি তাদের"
        },
        "p": [
          {
            "en": "When I hear a prophet's name that is not Muhammad ﷺ, does something in me say ours, or does it say theirs? The verse leaves no room for the second answer. Which of the names in the list do I know least about, and what would it take to read that prophet's story in the Quran this week? The verse names Ayyub and Yunus (AS) between kings and patriarchs: when my own trial feels like it disqualifies me, do I remember that revelation went to a man on a sickbed and to a man inside a fish?",
            "bn": "মুহাম্মাদ ﷺ ছাড়া অন্য কোনো নবীর নাম শুনলে আমার ভেতরে কি ‘আমাদের’ বলে ওঠে, নাকি ‘তাদের’? আয়াত দ্বিতীয় জবাবের কোনো জায়গা রাখেনি। তালিকার কোন নামটি সম্পর্কে আমি সবচেয়ে কম জানি, আর এই সপ্তাহে কুরআনে সেই নবীর কাহিনি পড়তে আমার কী লাগবে? আয়াত বাদশাহ ও পিতৃপুরুষদের মাঝে আইয়ূব ও ইউনুস (আঃ)-এর নাম রাখে: নিজের পরীক্ষা যখন মনে হয় আমাকে অযোগ্য করে দিয়েছে, তখন কি মনে রাখি যে ওয়াহী গিয়েছিল রোগশয্যার এক মানুষের কাছে আর মাছের পেটের এক মানুষের কাছে?"
          },
          {
            "en": "Dawud (AS) was given a book, and the Zabur is remembered as a book of praise. If someone wrote down everything I said to Allah in a day, how much of it would be praise and how much of it would be asking? And the demand of 4:153, a book from the sky, has a quieter form in every believer's life: what am I waiting for from Allah before I will act on what He has already sent?",
            "bn": "দাঊদ (আঃ)-কে একটি কিতাব দেওয়া হয়েছিল, আর যাবূরকে মনে রাখা হয় প্রশংসার কিতাব হিসেবে। দিনে আমি আল্লাহকে যা বলি, কেউ যদি তা লিখে রাখত, তার কতটা হতো প্রশংসা আর কতটা চাওয়া? আর ৪:১৫৩ আয়াতের দাবি, আসমান থেকে কিতাব, প্রতিটি মুমিনের জীবনে একটা চাপা রূপ নিয়ে থাকে: আল্লাহ যা আগেই পাঠিয়েছেন তার ওপর আমল করার আগে আমি তাঁর কাছ থেকে আর কীসের অপেক্ষায় আছি?"
          }
        ]
      },
      {
        "h": {
          "en": "A Word to Teachers",
          "bn": "শিক্ষকদের জন্য এক কথা"
        },
        "p": [
          {
            "en": "This verse teaches well because it is a list, and children love lists. Write the names on a board in the verse's own order, then ask the class to put them in the order of time; the difference is itself the lesson, that the verse is gathering a family and not drawing a timeline. Ask which prophet was a king, which was ill, which was swallowed by the fish, and let the answers show that revelation did not choose only the comfortable. Then read 2:285 together, and let the last line, we make no distinction between any of His messengers, be the sentence the class takes home.",
            "bn": "এই আয়াত পড়াতে সুবিধা, কারণ এটি একটি তালিকা, আর ছোটরা তালিকা ভালোবাসে। বোর্ডে নামগুলো আয়াতের নিজের ক্রমে লিখুন, তারপর ক্লাসকে বলুন সময়ের ক্রমে সাজাতে; দুই ক্রমের ফারাকটাই শিক্ষা, যে আয়াত একটি পরিবারকে জড়ো করছে, সময়রেখা আঁকছে না। জিজ্ঞেস করুন কোন নবী বাদশাহ ছিলেন, কে অসুস্থ ছিলেন, কাকে মাছ গিলে ফেলেছিল, আর উত্তরগুলো দেখিয়ে দিক যে ওয়াহী কেবল আরামে থাকা মানুষকে বেছে নেয়নি। তারপর একসাথে ২:২৮৫ পড়ুন, আর শেষ লাইনটি, আমরা তাঁর রাসূলদের কারো মধ্যে পার্থক্য করি না, ক্লাস বাড়ি নিয়ে যাক।"
          }
        ]
      }
    ]
  },
  "4:165": {
    "sections": [
      {
        "h": {
          "en": "Why Messengers at All",
          "bn": "রাসূল কেন পাঠানো হলো"
        },
        "p": [
          {
            "en": "This verse is the last of three that answer the People of the Scripture's demand in 4:153 for a book from the sky. 4:163 gave the line of prophets to whom Allah revealed, 4:164 added messengers whose stories were told and messengers whose stories were not, and said that Allah spoke to Musa (AS) directly. Now 4:165 says what all of these messengers were for. The verse opens on the word rusulan, messengers, in the accusative, continuing the sentence of 4:164; the translation supplies We sent in brackets to show the connection. Then 4:166 turns to the witness: Allah Himself testifies to what He sent down.",
            "bn": "৪:১৫৩ আয়াতে আহলে কিতাব আসমান থেকে কিতাব চেয়েছিল; তার জবাবে যে তিনটি আয়াত এসেছে, এটি তার শেষটি। ৪:১৬৩ দিয়েছে সেই নবীদের ধারা যাঁদের কাছে আল্লাহ ওয়াহী পাঠিয়েছেন, ৪:১৬৪ যোগ করেছে সেই রাসূলদের যাঁদের কাহিনি বলা হয়েছে আর যাঁদের বলা হয়নি, আর জানিয়েছে যে আল্লাহ মূসা (আঃ)-এর সাথে সরাসরি কথা বলেছেন। এবার ৪:১৬৫ বলে, এই সব রাসূল কীসের জন্য। আয়াত শুরু হয় ‘রুসুলান’ শব্দে, রাসূলগণ, কর্মকারকে, ৪:১৬৪ আয়াতের বাক্যটাই চলছে; বাংলা অনুবাদ ‘রাসূলগণ ছিলেন’ বলে বাক্যটা আলাদা করে দিলেও আরবিতে এটি আগের আয়াতের ধারাবাহিকতা। তারপর ৪:১৬৬ ফেরে সাক্ষীর দিকে: আল্লাহ নিজেই সাক্ষ্য দিচ্ছেন যা তিনি নাজিল করেছেন তার ওপর।"
          },
          {
            "en": "Surah an-Nisa is Madinan, and this passage is spoken into a city where Jews, Christians, hypocrites and believers lived within earshot of one another. No occasion of revelation is attached to this verse on its own; the report that Ibn Kathir carries about two men denying revelation after Musa (AS) belongs to 4:163 and is a sirah report rather than a hadith of the Sahih. What is certain is the verse's place. It stands where an argument about proof was being had, and it names the proof that Allah has chosen to rest His case on: the messengers.",
            "bn": "সূরা নিসা মাদানী। এই অংশটি নাজিল হয়েছে এমন এক শহরে, যেখানে ইহুদি, খ্রিস্টান, মুনাফিক আর মুমিন পাশাপাশি থাকত, একে অন্যের কথা কানে আসত। শুধু এই আয়াতের জন্য আলাদা কোনো শানে নুযূল নেই; মূসা (আঃ)-এর পরে ওহি অস্বীকার করা দুই ব্যক্তির যে বর্ণনা ইবনে কাসীর এনেছেন, তা ৪:১৬৩ আয়াতের, আর সেটা সীরাতের বর্ণনা, সহীহ হাদিস নয়। নিশ্চিত হলো আয়াতের অবস্থান। প্রমাণ নিয়ে যেখানে তর্ক চলছিল, এটি সেখানেই। আর আল্লাহ যে প্রমাণের ওপর নিজের মামলা দাঁড় করিয়েছেন, আয়াত তার নাম বলে দেয়: রাসূলগণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Good News, Warning, Proof",
          "bn": "সুসংবাদ, সতর্কবাণী, প্রমাণ"
        },
        "p": [
          {
            "en": "Mubashshirin comes from the root b-sh-r, which gives bashara, the skin. Ar-Raghib explains that good news is called bushra because its effect shows on the face, in the skin, before a word is said. Mundhirin comes from n-dh-r; ar-Raghib defines indhar as conveying information that carries fear with it. So a messenger is one whose news changes the listener's face in both directions: brightening it with what is promised, sobering it with what is threatened. The verse puts the glad tidings first, as the Quran almost always does where it pairs these two words, in 6:48 and 35:24 among others.",
            "bn": "মুবাশশিরীন এসেছে বা-শা-রা মূল থেকে, যা থেকে বাশারা, চামড়া। রাগিব ব্যাখ্যা করেন, সুসংবাদকে বুশরা বলা হয় কারণ তার প্রভাব মুখে, চামড়ায়, ফুটে ওঠে কোনো কথা বলার আগেই। মুনযিরীন এসেছে নূন-যাল-রা থেকে; রাগিবের সংজ্ঞায় ইনযার হলো এমন খবর পৌঁছানো যার সাথে ভয় জড়িয়ে থাকে। তাই রাসূল এমন একজন যাঁর খবর শ্রোতার মুখ দুই দিকেই বদলে দেয়: ওয়াদার কথায় উজ্জ্বল করে, হুমকির কথায় গম্ভীর করে। আয়াত সুসংবাদকে আগে রাখে, কুরআন এই দুই শব্দ জোড়া লাগালে প্রায় সব ক্ষেত্রেই যেমন রাখে, ৬:৪৮ ও ৩৫:২৪ আয়াতে তার নমুনা।"
          },
          {
            "en": "The key word is hujjah. Its root h-j-j is the root of hajj, and ar-Raghib connects both to the idea of aiming at something and reaching it: a hujjah is the argument that clearly points out the road, the mahajjah. The verse says the messengers were sent li-alla yakuna lin-nasi 'ala Allahi hujjatun ba'da ar-rusul, so that people would have no argument against Allah after the messengers. Three small phrases carry the weight: lin-nas, for people; 'ala Allah, against Allah; ba'da ar-rusul, after the messengers. Before the messengers, an excuse could have existed. After them, it cannot.",
            "bn": "মূল শব্দ হুজ্জাহ। এর মূল হা-জীম-জীম, হজ্জেরও মূল, আর রাগিব দুটোকেই জোড়েন একটা ধারণার সাথে: কোনো কিছুর দিকে লক্ষ্য রাখা ও সেখানে পৌঁছানো। হুজ্জাহ সেই যুক্তি যা পরিষ্কার করে রাস্তা দেখিয়ে দেয়, মাহাজ্জাহ। আয়াত বলে, রাসূল পাঠানো হয়েছে ‘লিআল্লা ইয়াকূনা লিন্নাসি আলাল্লাহি হুজ্জাতুন বা'দার রুসুল’, যাতে রাসূলদের পরে আল্লাহর বিরুদ্ধে মানুষের কোনো যুক্তি না থাকে। ছোট তিনটি অংশই পুরো ভার বহন করে: লিন্নাস, মানুষের জন্য; আলাল্লাহ, আল্লাহর বিরুদ্ধে; বা'দার রুসুল, রাসূলদের পরে। রাসূলদের আগে অজুহাত থাকতে পারত। পরে আর পারে না।"
          },
          {
            "en": "The verse closes with two names, al-Aziz and al-Hakim, and the pairing does work. Al-Aziz, the Exalted in Might, is the One who needs no justification from anyone; He could have judged without explaining. Al-Hakim, the Wise, is the One who acts with purpose and puts things in their right place. Between them the names say that the sending of messengers was not owed and was not random. Allah, who could have demanded obedience on His authority alone, chose in His wisdom to explain Himself first. That is the character behind the verse's purpose clause.",
            "bn": "আয়াত শেষ হয় দুটি নামে, আল-আযীয ও আল-হাকীম, আর এই জোড়ার একটা কাজ আছে। আল-আযীয, মহাপরাক্রমশালী: কারও কাছে তাঁর কোনো কৈফিয়ত দেওয়ার দায় নেই; কিছু না বুঝিয়েই তিনি বিচার করতে পারতেন। আল-হাকীম, প্রজ্ঞাময়: তিনি উদ্দেশ্য নিয়ে কাজ করেন, প্রতিটি জিনিসকে তার ঠিক জায়গায় রাখেন। দুই নাম মিলে বলে, রাসূল পাঠানো তাঁর ওপর কোনো দায় ছিল না, আবার খেয়ালখুশিও ছিল না। যিনি কেবল নিজের ক্ষমতার জোরে আনুগত্য দাবি করতে পারতেন, তিনি হিকমতের কারণে আগে নিজের কথা বুঝিয়ে বলাকেই বেছে নিলেন। আয়াতের উদ্দেশ্যের কথাটির পেছনে আছে আল্লাহর এই গুণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Proof Before Punishment",
          "bn": "শাস্তির আগে প্রমাণ"
        },
        "p": [
          {
            "en": "Ibn Kathir explains that the prophets bring good news to those who obey Allah and do what pleases Him, and warn of His punishment those who defy His commands. Allah sent down His books and sent His messengers, made clear what He loves and what He hates, and in this way no one is left with an excuse before Him. He reads the verse alongside 20:134, where people destroyed before a messenger came would have said, our Lord, why did You not send us a messenger so we could have followed Your verses, and alongside 28:47, which gives the same protest in almost the same words.",
            "bn": "ইবনে কাসীর ব্যাখ্যা করেন, নবীরা সুসংবাদ দেন তাদের যারা আল্লাহর আনুগত্য করে ও তাঁর পছন্দের কাজ করে, আর তাঁর শাস্তির ভয় দেখান তাদের যারা তাঁর হুকুম অমান্য করে। আল্লাহ কিতাব নাজিল করেছেন, রাসূল পাঠিয়েছেন, পরিষ্কার করে দিয়েছেন কী তিনি ভালোবাসেন আর কী অপছন্দ করেন, আর এভাবে তাঁর সামনে কারো কোনো অজুহাত থাকে না। তিনি আয়াতটি পড়েন ২০:১৩৪ আয়াতের পাশে, যেখানে রাসূল আসার আগে ধ্বংস হওয়া মানুষ বলত, হে আমাদের রব, তুমি আমাদের কাছে রাসূল পাঠালে না কেন, তাহলে তোমার আয়াত মেনে চলতাম; আর ২৮:৪৭ আয়াতের পাশে, যেখানে প্রায় একই শব্দে একই অভিযোগ।"
          },
          {
            "en": "As-Sa'di draws out the justice in it. Allah, he says, does not punish anyone until the proof has been established against him, and the messengers are how that proof is established; they explained to people the way to His pleasure and the way to His anger, so that whoever perished afterwards perished after clear evidence. The commentators generally read this verse with 17:15, where Allah says He would never punish until He had sent a messenger. Ar-Razi takes the verse into the wider question of what a person is accountable for before revelation reaches him, and reads it as placing the completed proof with the messengers.",
            "bn": "আস-সা'দী এর ভেতরের ইনসাফটা বের করে আনেন। তিনি বলেন, আল্লাহ কাউকে শাস্তি দেন না যতক্ষণ না তার বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হয়, আর রাসূলরাই সেই প্রমাণ প্রতিষ্ঠার উপায়; তাঁরা মানুষকে বুঝিয়ে দিয়েছেন তাঁর সন্তুষ্টির পথ কোনটা আর তাঁর গজবের পথ কোনটা, যাতে এরপর যে ধ্বংস হয় সে স্পষ্ট প্রমাণের পরেই ধ্বংস হয়। মুফাসসিররা সাধারণত এই আয়াত পড়েন ১৭:১৫ আয়াতের সাথে, যেখানে আল্লাহ বলেন, রাসূল না পাঠিয়ে তিনি কখনো শাস্তি দেন না। আর-রাযী আয়াতটিকে নিয়ে যান বৃহত্তর প্রশ্নে, ওয়াহী পৌঁছানোর আগে মানুষ কীসের জন্য দায়ী, আর পড়েন এভাবে যে পূর্ণ প্রমাণ রাসূলদের হাতেই রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "None Loves Excuse More",
          "bn": "ওজর যাঁর সবচেয়ে প্রিয়"
        },
        "p": [
          {
            "en": "The classical tafsir attaches a hadith to this verse that Ibn Kathir cites from the Two Sahihs, from Abdullah ibn Mas'ud (RA). In the wording he gives, the Prophet ﷺ said that no one is more protective of His honour than Allah, and for that He forbade indecencies, open and hidden; that no one loves praise more than Allah, and for that He praised Himself; and that no one loves excuse more than Allah, and for that He sent the Prophets as bearers of glad tidings and warners. The last clause describes them with the verse's own two words, mubashshirin and mundhirin, and gives the reason behind them.",
            "bn": "ধ্রুপদী তাফসির এই আয়াতের সাথে একটি হাদিস জুড়ে দেয়। ইবনে কাসীর সেটি এনেছেন দুই সহীহ থেকে, আবদুল্লাহ ইবনে মাসউদ (রাঃ)-এর বর্ণনায়। তাঁর উদ্ধৃত শব্দে নবী ﷺ বলেছেন: আল্লাহর চেয়ে বেশি আত্মমর্যাদাবোধ কারও নেই, তাই তিনি প্রকাশ্য ও গোপন সব অশ্লীলতা হারাম করেছেন; আল্লাহর চেয়ে বেশি প্রশংসা কেউ ভালোবাসে না, তাই তিনি নিজেই নিজের প্রশংসা করেছেন; আর আল্লাহর চেয়ে বেশি ওজর কেউ ভালোবাসে না, তাই তিনি নবীদের পাঠিয়েছেন সুসংবাদদাতা ও সতর্ককারী করে। শেষ অংশে নবীদের পরিচয়ে আয়াতের নিজের দুটি শব্দই এসেছে, মুবাশশিরীন ও মুনযিরীন, আর সঙ্গে এসেছে তার পেছনের কারণ।"
          },
          {
            "en": "Loving excuse here means loving to leave people no excuse by warning them first, so that no one should stand before Him able to say, I was never told. The hadith turns the verse from a legal statement into a description of Allah's generosity. The messengers were not sent so that Allah could win an argument. They were sent because He wanted people to have heard, clearly and from one of their own, before anything was held against them.",
            "bn": "এখানে ওজর ভালোবাসার মানে, তিনি চান আগেই সতর্ক করে মানুষের হাতে কোনো ওজর বাকি না রাখতে, যাতে কেউ তাঁর সামনে দাঁড়িয়ে বলতে না পারে, আমাকে তো কেউ কখনো বলেনি। হাদিসটি আয়াতকে আইনের ধারা থেকে আল্লাহর উদারতার বর্ণনায় বদলে দেয়। আল্লাহ তর্কে জিতবেন, এজন্য রাসূল পাঠানো হয়নি। পাঠানো হয়েছে কারণ তিনি চেয়েছেন, কারও বিরুদ্ধে কিছু ধরার আগে মানুষ যেন কথাটা শুনে নেয়, পরিষ্কারভাবে, নিজেদেরই একজনের মুখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question at the Gates",
          "bn": "দরজায় সেই প্রশ্ন"
        },
        "p": [
          {
            "en": "17:15 is the plainest sister: whoever is guided is guided for his own soul, no bearer of burdens bears another's, and never would We punish until We sent a messenger. 35:24 widens the scope in the other direction: the Prophet ﷺ was sent as bringer of good tidings and warner, and there was no nation but that a warner had passed within it. So the messengers were not a few, and no people was left out. 6:48 repeats the verse's two words and gives their outcome: whoever believes and reforms will have no fear and will not grieve.",
            "bn": "এ বিষয়ে সবচেয়ে সোজা কথা বলে ১৭:১৫ আয়াত: যে সঠিক পথে চলে সে নিজের কল্যাণেই চলে, কোনো বোঝা বহনকারী অন্যের বোঝা বহন করে না, আর রাসূল না পাঠিয়ে আমি শাস্তি দিই না। ৩৫:২৪ আয়াত পরিধিটা অন্য দিকে বাড়ায়: নবী ﷺ-কে পাঠানো হয়েছে সুসংবাদদাতা ও সতর্ককারী করে, আর এমন কোনো জাতি নেই যার মধ্যে কোনো সতর্ককারী আসেনি। তাই রাসূল হাতে গোনা কয়েকজন ছিলেন না, আর কোনো জাতিও বাদ পড়েনি। ৬:৪৮ আয়াত এ আয়াতের দুই শব্দ আবার বলে, আর জানায় তার ফল: যে ঈমান আনে ও নিজেকে শুধরে নেয়, তার কোনো ভয় নেই, সে দুঃখও পাবে না।"
          },
          {
            "en": "Two verses show the purpose clause fulfilled on the Day itself. In 67:8 the keepers of Hell ask each company thrown into it: did no warner come to you? And in 67:9 the answer is, yes, a warner came to us, but we denied him. In 39:71 the same question is put at the gates, did messengers not come to you from among yourselves, and the same answer is given: yes. Nobody in those scenes pleads ignorance. The messengers of 4:165 did their work, and the argument the verse said would not exist does not exist.",
            "bn": "দুটি আয়াত দেখায়, কিয়ামতের দিনে আয়াতের উদ্দেশ্য কীভাবে পূর্ণ হয়। ৬৭:৮ আয়াতে জাহান্নামের রক্ষীরা প্রতিটি দলকে জিজ্ঞেস করে: তোমাদের কাছে কি কোনো সতর্ককারী আসেনি? আর ৬৭:৯ আয়াতে জবাব, হ্যাঁ, এসেছিল, কিন্তু আমরা অস্বীকার করেছিলাম। ৩৯:৭১ আয়াতে দরজায় একই প্রশ্ন, তোমাদেরই ভেতর থেকে কি রাসূল আসেননি, আর একই জবাব: হ্যাঁ। ওই দৃশ্যে কেউ না জানার অজুহাত দেয় না। ৪:১৬৫ আয়াতের রাসূলরা তাঁদের কাজ করে গেছেন, আর যে যুক্তি থাকবে না বলে আয়াত বলেছিল, তা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Where I Did Not Know Ends",
          "bn": "‘জানতাম না’ যেখানে ফুরোয়"
        },
        "p": [
          {
            "en": "The first thing the verse does to a believer is take away a certain kind of comfort. I did not know is no longer available about anything the Messenger ﷺ made clear. That changes how a person treats the basics: the rulings on prayer, on what is lawful to eat and earn, on how to speak to parents and treat a neighbour. These are not specialist knowledge; they are the content of the warning and the good news, and 4:165 says the proof has been delivered. A believer who has never learned them is not excused by not having looked.",
            "bn": "আয়াত প্রথমে একজন মুমিনের কাছ থেকে এক ধরনের স্বস্তি কেড়ে নেয়। রাসূল ﷺ যা পরিষ্কার করে দিয়েছেন, তার কোনোটা নিয়েই ‘আমি জানতাম না’ বলার আর উপায় নেই। এতে মৌলিক বিষয়গুলোর প্রতি মানুষের আচরণ বদলে যায়: নামাজের হুকুম, কী খাওয়া আর কী উপার্জন হালাল, মা-বাবার সাথে কীভাবে কথা বলতে হয়, প্রতিবেশীর সাথে কীভাবে চলতে হয়। এগুলো বিশেষজ্ঞের জ্ঞান নয়; এগুলোই সতর্কবাণী আর সুসংবাদের মূল কথা, আর ৪:১৬৫ বলে, প্রমাণ পৌঁছে দেওয়া হয়েছে। যে মুমিন এগুলো কখনো শেখেনি, ‘খুঁজে দেখিনি’ বলে সে রেহাই পাবে না।"
          },
          {
            "en": "The second thing it does is set a standard for how a believer speaks to others about faith. The messengers came with good news first and warning second, and their purpose was to remove an excuse, not to defeat an opponent. So the question after any conversation about Islam is not whether I won but whether the person now knows something clearly that he did not know before. A parent explaining a ruling to a child, a friend answering a question honestly, a person who simply lives the religion visibly, is doing a small part of what 4:165 describes.",
            "bn": "দ্বিতীয়ত, আয়াত একটা মাপকাঠি বেঁধে দেয়: মুমিন অন্যের সাথে দ্বীনের কথা কীভাবে বলবে। রাসূলরা এসেছিলেন আগে সুসংবাদ, পরে সতর্কবাণী নিয়ে, আর তাঁদের উদ্দেশ্য ছিল অজুহাতের সুযোগ সরিয়ে দেওয়া, প্রতিপক্ষকে হারানো নয়। তাই ইসলাম নিয়ে যেকোনো আলাপের পর প্রশ্নটা এই নয় যে আমি জিতলাম কি না। প্রশ্ন হলো, মানুষটা এখন এমন কিছু পরিষ্কার জানে কি না, যা আগে জানত না। যে বাবা-মা সন্তানকে একটা হুকুম বুঝিয়ে দেন, যে বন্ধু একটা প্রশ্নের সৎ জবাব দেয়, যে মানুষ নিজের জীবনে দ্বীনটা এমনভাবে মেনে চলে যে অন্যরা তা দেখতে পায়, তারা প্রত্যেকে ৪:১৬৫ আয়াতের কাজের একটা ছোট অংশ করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "If We Forget or Err",
          "bn": "ভুলে গেলে কিংবা ভুল করলে"
        },
        "p": [
          {
            "en": "The Quran gives a supplication that belongs beside this verse in 2:286: our Lord, do not impose blame upon us if we have forgotten or erred. It asks for the one kind of excuse the verse leaves open, the excuse of honest forgetting and honest mistake, from the One whom the hadith says loves to excuse. Beyond it, a believer may say in the verse's own vocabulary, as his own words and not as a transmitted du'a: O Allah, You sent Your messengers with good news and warning so that no one would have an argument against You; do not let me be one who heard and then argued.",
            "bn": "এই আয়াতের পাশে রাখার মতো একটি দোয়া কুরআন দিয়েছে ২:২৮৬ আয়াতে: হে আমাদের রব, আমরা যদি ভুলে যাই কিংবা ভুল করি, আপনি আমাদের পাকড়াও করবেন না। আয়াত যে একটিমাত্র ওজরের পথ খোলা রাখে, সৎভাবে ভুলে যাওয়া আর অনিচ্ছায় ভুল করা, এই দোয়া ঠিক সেটাই চায়, তাঁর কাছে, যিনি হাদিসের ভাষায় ওজর ভালোবাসেন। এর বাইরে একজন মুমিন আয়াতের নিজের শব্দে, নিজের কথা হিসেবে, বর্ণিত দোয়া হিসেবে নয়, বলতে পারে: হে আল্লাহ, আপনি আপনার রাসূলদের পাঠিয়েছেন সুসংবাদ ও সতর্কবাণী দিয়ে, যাতে আপনার বিরুদ্ধে কারও কোনো যুক্তি না থাকে; আমাকে এমন কেউ বানাবেন না, যে শুনেছে, তারপর তর্ক করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Excuse I Keep Ready",
          "bn": "যে অজুহাত আমি তৈরি রাখি"
        },
        "p": [
          {
            "en": "What is the excuse I am still keeping ready, the one I would offer if asked why I have not changed a particular habit? The verse says that after the messengers, excuses of that kind do not stand. Which do I lead with when I speak about Islam to someone outside it, the good news or the warning, and which did the messengers lead with? When someone under my authority disobeys me, have I made sure they were told clearly, the way Allah made sure of it before He judged anyone?",
            "bn": "কেউ যদি জিজ্ঞেস করে, অমুক অভ্যাসটা কেন এখনো বদলাইনি, তখন বলার জন্য কোন অজুহাতটা আমি এখনো হাতে রেখে দিয়েছি? আয়াত বলছে, রাসূলরা আসার পর এমন অজুহাত আর টেকে না। ইসলামের বাইরের কাউকে ইসলামের কথা বলতে গেলে আমি কোনটা দিয়ে শুরু করি, সুসংবাদ না সতর্কবাণী? আর রাসূলরা কোনটা দিয়ে শুরু করতেন? আমার অধীনে কেউ আমার কথা না মানলে আমি কি আগে নিশ্চিত হয়েছি যে তাকে পরিষ্কার করে বলা হয়েছিল, যেমন আল্লাহ কারো বিচার করার আগে তা নিশ্চিত করেছেন?"
          },
          {
            "en": "Is there anyone in my life who has never actually heard the message clearly from anyone, and could the removal of that person's excuse be, in some small part, my responsibility? And when I read the scene of 67:9, where the people of the Fire say a warner came to us but we denied him, do I hear it as a story about others, or as a warning about what a clear message, once heard, requires of me?",
            "bn": "আমার জীবনে কি এমন কেউ আছে, যে আসলে কারো মুখেই বার্তাটা পরিষ্কার করে শোনেনি? তার অজুহাতটুকু দূর করার দায় কি কিছুটা হলেও আমার ঘাড়ে পড়ে? আর ৬৭:৯ আয়াতের দৃশ্যটা যখন পড়ি, যেখানে জাহান্নামিরা বলে, আমাদের কাছে সতর্ককারী এসেছিল, কিন্তু আমরা তাকে অস্বীকার করেছিলাম, তখন কি একে অন্যদের গল্প বলে শুনি? নাকি সতর্কবাণী হিসেবে শুনি: পরিষ্কার বার্তা একবার কানে এলে তা আমার কাছে কী দাবি করে?"
          }
        ]
      }
    ]
  },
  "4:171": {
    "sections": [
      {
        "h": {
          "en": "Between Two Calls to Mankind",
          "bn": "মানুষের প্রতি দুই ডাকের মাঝে"
        },
        "p": [
          {
            "en": "Surah an-Nisa, Madinan, ends with a cluster of addresses. 4:170 calls to all mankind: the Messenger has come to you with the truth from your Lord, so believe. 4:174 calls to mankind again: a conclusive proof has come to you, and a clear light. Between those two universal calls sits 4:171, addressed to a narrower audience, the People of the Scripture, and dealing with one specific error. The verse after it, 4:172, continues the same subject: the Messiah would never disdain to be a servant of Allah, nor would the angels nearest to Him.",
            "bn": "মাদানী সূরা নিসার শেষ দিকে পরপর কয়েকটি সম্বোধন এসেছে। ৪:১৭০ সব মানুষকে ডাকে: রাসূল তোমাদের রবের পক্ষ থেকে সত্য নিয়ে তোমাদের কাছে এসেছেন, তাই ঈমান আনো। ৪:১৭৪ আবার মানুষকে ডাকে: তোমাদের কাছে অকাট্য প্রমাণ এসেছে, এসেছে স্পষ্ট আলো। সবার প্রতি এই দুই ডাকের মাঝখানে আছে ৪:১৭১। এর শ্রোতা আরও ছোট পরিসরের, আহলে কিতাব, আর এর বিষয় একটি নির্দিষ্ট ভুল। পরের আয়াত ৪:১৭২ একই কথা টেনে নিয়ে যায়: মাসীহ আল্লাহর বান্দা হওয়াকে কখনো হীনতা মনে করেন না, আল্লাহর নৈকট্যপ্রাপ্ত ফেরেশতারাও না।"
          },
          {
            "en": "Earlier in the surah the same Messiah was the subject of the opposite error. 4:157 recorded the claim of some that they had killed him, and refuted it: they did not kill him, nor did they crucify him. Now the surah turns to those who raised him too high. The Quran corrects both parties by the same standard, saying about Isa (AS) exactly what is true and no more. No occasion of revelation is established for this particular verse; its placement is enough. It stands at the end of a surah about rights, and it defends the right of Allah to be spoken of truthfully.",
            "bn": "সূরার আগের অংশে এই মাসীহকে নিয়েই ছিল উল্টো দিকের ভুল। ৪:১৫৭ আয়াত কিছু লোকের দাবি উল্লেখ করেছে যে তারা তাঁকে হত্যা করেছে, আর সেই দাবি খণ্ডন করেছে: তারা তাঁকে হত্যা করেনি, ক্রুশেও চড়ায়নি। এবার সূরা ফিরছে তাদের দিকে, যারা তাঁকে প্রাপ্যের চেয়ে অনেক উঁচুতে তুলেছে। কুরআন দুই পক্ষকেই একই মাপকাঠিতে শোধরায়: ঈসা (আঃ) সম্পর্কে ঠিক যা সত্য, তা-ই বলে, এর বেশি নয়। এই আয়াতের কোনো প্রমাণিত শানে নুযূল নেই; আয়াতটি কোথায় বসেছে, সেটাই যথেষ্ট। হক নিয়ে যে সূরা, তার শেষ দিকে এর জায়গা। আর এ আয়াত আল্লাহর একটি হক রক্ষা করে: তাঁর সম্পর্কে কেবল সত্য কথাই বলতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ghuluw, Word and Spirit",
          "bn": "গুলু, কালিমা ও রূহ"
        },
        "p": [
          {
            "en": "The first prohibition is la taghlu, do not commit ghuluw. Ar-Raghib defines ghuluw as exceeding the limit, and the root is used in ordinary Arabic for a price that has soared and a pot that boils over. Excess in religion is that: something good, love or reverence, heated past its proper level until it spills. The second prohibition follows at once, do not say about Allah except the truth. The two are joined because the one leads to the other. Excess in what is said about a servant ends as falsehood about the Master.",
            "bn": "প্রথম নিষেধ ‘লা তাগলু’: গুলু করো না। রাগিব গুলুর সংজ্ঞা দিয়েছেন সীমা ছাড়িয়ে যাওয়া। সাধারণ আরবিতেও এই শব্দমূল দিয়ে বোঝানো হয় হু হু করে চড়ে যাওয়া দাম, কিংবা উথলে ওঠা হাঁড়ি। দ্বীনে বাড়াবাড়িও তা-ই: ভালো একটা জিনিস, ভালোবাসা বা শ্রদ্ধা, যতটুকু দরকার তার চেয়ে বেশি তাতে তাতে শেষে উপচে পড়ে। সঙ্গে সঙ্গেই আসে দ্বিতীয় নিষেধ: আল্লাহ সম্পর্কে সত্য ছাড়া কিছু বলো না। আয়াত দুটোকে পাশাপাশি রেখেছে, কারণ একটা আরেকটার দিকে টেনে নেয়। বান্দাকে নিয়ে বাড়িয়ে বলা শেষ পর্যন্ত গিয়ে দাঁড়ায় মালিক সম্পর্কে মিথ্যায়।"
          },
          {
            "en": "Then the verse says who the Messiah is, and it uses the restrictive particle innama: the Messiah, Isa son of Maryam, was only a messenger of Allah, and His word which He cast to Maryam, and a spirit from Him. The same particle returns later in the verse: innama Allahu ilahun wahid, Allah is only one God. The two restrictions mirror each other. Isa (AS) is confined to what he is, a messenger honoured with titles no one else carries; Allah is confined to what He is, one, without partner or son. Kalimah and ruh are gifts of creation, not shares in divinity.",
            "bn": "তারপর আয়াত বলে দেয় মাসীহ আসলে কে। এখানে আছে সীমা টেনে দেওয়ার শব্দ ‘ইন্নামা’ (কেবল): মাসীহ ঈসা ইবনু মারইয়াম কেবল আল্লাহর রাসূল, আর তাঁর কালিমা, যা তিনি মারইয়ামের কাছে পৌঁছে দিয়েছিলেন, আর তাঁর পক্ষ থেকে এক রূহ। আয়াতের পরের দিকে শব্দটি আবার আসে: ইন্নামাল্লাহু ইলাহুন ওয়াহিদ, আল্লাহ কেবল এক ইলাহ। দুই সীমা যেন একে অন্যের আয়না। প্রথমটি ঈসা (আঃ)-কে তাঁর নিজের জায়গায় রাখে: তিনি রাসূল, এমন সব উপাধিতে সম্মানিত যা আর কারও নেই। দ্বিতীয়টি আল্লাহকে তাঁর আপন পরিচয়ে রাখে: তিনি এক, তাঁর কোনো শরিক নেই, সন্তানও নেই। কালিমা আর রূহ সৃষ্টির দান, খোদায়িত্বে ভাগ নয়।"
          },
          {
            "en": "Then a bare number: wa la taqulu thalathah, and do not say three. No noun follows, and translators have to decide what to supply. After it comes a single-word command, intahu, desist, and a reason, khayran lakum, better for you. The verse does not argue at length. It states the truth, names the error in one word, and tells its hearers that stopping is in their own interest. It ends on al-wakil: sufficient is Allah as Disposer of affairs. The One who runs everything in the heavens and the earth alone has no need of a son to share the task.",
            "bn": "তারপর শুধু একটা সংখ্যা: ওয়া লা তাকূলূ সালাসাহ, ‘তিন’ বলো না। এর পরে কোনো বিশেষ্য নেই; কী বসাবেন, তা অনুবাদককেই ঠিক করতে হয়, এই অনুবাদ সেটা বন্ধনীতে বসিয়েছে। তারপর এক শব্দের হুকুম, ইনতাহূ, থামো, আর এর কারণ, খাইরান লাকুম, এটাই তোমাদের জন্য ভালো। আয়াত লম্বা তর্কে যায় না। সত্যটা বলে দেয়, ভুলটাকে এক শব্দে চিহ্নিত করে, আর শ্রোতাদের জানায়, থেমে যাওয়াতেই তাদের নিজেদের লাভ। আয়াত শেষ হয় আল-ওয়াকীল নামে: কর্মবিধায়ক হিসেবে আল্লাহই যথেষ্ট। আসমান ও জমিনের সবকিছু যিনি একাই চালান, কাজে ভাগ বসানোর জন্য তাঁর কোনো সন্তানের দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Created by the Word Be",
          "bn": "‘হও’ শব্দে সৃষ্টি"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the verse as a prohibition of the excess the Christians fell into over Isa (AS), raising him from prophethood to a god worshipped alongside Allah, and then to those they took as his followers, whose every word was accepted, true or false. On the word and the spirit he explains that Allah created Isa (AS) with the word Be, which He sent with Jibril to Maryam, that Jibril blew the life of Isa (AS) into her by Allah's leave, and that this took the place of the ordinary conception between a man and a woman. He cites Qatadah's gloss of kalimatuhu: He said Be, and he was.",
            "bn": "ইবনে কাসীরের মতে, আয়াতটি সেই বাড়াবাড়ি নিষেধ করছে, যাতে খ্রিস্টানরা ঈসা (আঃ)-কে নিয়ে জড়িয়ে পড়েছিল। তারা তাঁকে নবুওয়াতের মর্যাদা থেকে তুলে আল্লাহর পাশাপাশি উপাস্য ইলাহ বানিয়েছিল। তারপর একই বাড়াবাড়ি গড়াল তাদের পর্যন্ত, যাদের তারা তাঁর অনুসারী বলে মানত: তাদের প্রতিটি কথা মেনে নেওয়া হতো, সত্য হোক বা মিথ্যা। কালিমা ও রূহের ব্যাখ্যায় তিনি বলেন, আল্লাহ ঈসা (আঃ)-কে সৃষ্টি করেছেন ‘কুন’ (হও) শব্দ দিয়ে। এই শব্দ নিয়ে জিবরীল মারইয়ামের কাছে গিয়েছিলেন, আর আল্লাহর হুকুমে তাঁর ভেতরে ঈসা (আঃ)-এর প্রাণ ফুঁকে দিয়েছিলেন। নারী-পুরুষের মিলনে স্বাভাবিক গর্ভধারণের জায়গায় ঘটেছিল এই ঘটনা। ‘কালিমাতুহু’-র ব্যাখ্যায় তিনি কাতাদার কথা উদ্ধৃত করেন: তিনি বললেন ‘হও’, আর সে হয়ে গেল।"
          },
          {
            "en": "On ruhun minhu, a spirit from Him, Ibn Kathir compares 45:13, where everything in the heavens and the earth is subjected to mankind, all from Him. From Him there means from His creation, and attributing a thing to Allah, as in the she-camel of Allah or the House of Allah, is a way of honouring it. At-Tabari records more than one reading of kalimatuhu, the word Be and the tiding sent to Maryam, and reads the spirit as the breath Jibril blew into her by Allah's command. As-Sa'di reads the whole description as the highest titles a servant can hold, given precisely to show that servanthood is the ceiling.",
            "bn": "‘রূহুন মিনহু’ (তাঁর পক্ষ থেকে এক রূহ) প্রসঙ্গে ইবনে কাসীর ৪৫:১৩ আয়াতের কথা টানেন। সেখানে আল্লাহ বলেন, আসমান ও জমিনে যা কিছু আছে, সবই তিনি মানুষের কাজে লাগিয়ে দিয়েছেন, সবই তাঁর পক্ষ থেকে। সেখানে ‘তাঁর পক্ষ থেকে’ মানে তাঁর সৃষ্টি থেকে। আর কোনো জিনিসকে আল্লাহর সঙ্গে যুক্ত করে বলা, যেমন আল্লাহর উটনী বা আল্লাহর ঘর, সেই জিনিসকে সম্মান দেওয়ারই একটা ধরন। আত-তাবারী ‘কালিমাতুহু’-র একাধিক ব্যাখ্যা উল্লেখ করেছেন, তার মধ্যে আছে ‘হও’ শব্দটি এবং মারইয়ামের কাছে পাঠানো সুসংবাদ। আর রূহ বলতে তিনি বুঝেছেন সেই ফুঁ, যা জিবরীল আল্লাহর হুকুমে মারইয়ামের ভেতরে দিয়েছিলেন। আস-সা'দীর মতে, পুরো বিবরণটি এমন সব উপাধি, যার চেয়ে উঁচু উপাধি কোনো বান্দা পেতে পারে না। আর এগুলো দেওয়াই হয়েছে এটা দেখাতে যে বান্দা হওয়াই সর্বোচ্চ মর্যাদা, এর ওপরে আর কিছু নেই।"
          },
          {
            "en": "Al-Qurtubi pauses at the word three. The noun it qualifies is left unsaid, and the commentators supply it in two ways: do not say the gods are three, or do not say Allah is one of three. He also notes what 5:116 shows, that a claim had been made concerning Maryam as well as her son, which is why some read the three as Allah, Isa and Maryam. Ibn Kathir joins the verse to 5:73, which names the saying that Allah is the third of three and answers it: there is no god but one God.",
            "bn": "আল-কুরতুবী ‘তিন’ শব্দটিতে এসে থামেন। এই সংখ্যা কীসের, তা আয়াতে বলা নেই, আর মুফাসসিররা ফাঁকটা দুইভাবে পূরণ করেন: বলো না ইলাহ তিনজন, অথবা বলো না আল্লাহ তিনজনের একজন। তিনি এটাও লক্ষ করেন, ৫:১১৬ আয়াত দেখায় যে দাবিটা শুধু পুত্রকে নিয়ে নয়, মারইয়ামকে নিয়েও তোলা হয়েছিল। এ কারণেই কেউ কেউ ‘তিন’ বলতে বুঝেছেন আল্লাহ, ঈসা ও মারইয়াম। ইবনে কাসীর আয়াতটিকে মিলিয়ে পড়েন ৫:৭৩ আয়াতের সঙ্গে। সেই আয়াত ‘আল্লাহ তিনজনের তৃতীয়জন’ কথাটি উল্লেখ করে তার জবাব দেয়: এক ইলাহ ছাড়া আর কোনো ইলাহ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Servant, Messenger, Word, Spirit",
          "bn": "বান্দা, রাসূল, কালিমা, রূহ"
        },
        "p": [
          {
            "en": "Sahih al-Bukhari records from Ubadah ibn as-Samit (RA) that the Prophet ﷺ said: whoever bears witness that there is no god but Allah alone, without partner, and that Muhammad is His servant and His Messenger, and that Isa is the servant of Allah and His Messenger, and His word which He conveyed to Maryam, and a spirit from Him, and that Paradise is true and the Fire is true, Allah will admit him to Paradise, whatever deeds he had. The hadith lifts the verse's description of Isa (AS) straight into the testimony of faith, and adds the one word the verse implies throughout: servant.",
            "bn": "সহীহ বুখারীতে উবাদা ইবনুস সামিত (রাঃ) থেকে বর্ণিত, নবী ﷺ বলেছেন: যে ব্যক্তি সাক্ষ্য দেয় যে আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই; মুহাম্মাদ তাঁর বান্দা ও রাসূল; ঈসা আল্লাহর বান্দা ও রাসূল, আর তাঁর কালিমা, যা তিনি মারইয়ামের প্রতি পৌঁছে দিয়েছেন, আর তাঁর পক্ষ থেকে এক রূহ; জান্নাত সত্য, জাহান্নাম সত্য; আল্লাহ তাকে জান্নাতে প্রবেশ করাবেন, তার আমল যেমনই হোক। ঈসা (আঃ) সম্পর্কে আয়াতের বিবরণ হাদিসটি হুবহু তুলে এনেছে ঈমানের সাক্ষ্যের ভেতরে। আর যোগ করেছে সেই একটি শব্দ, যা পুরো আয়াত জুড়ে না বলেও বোঝানো আছে: বান্দা।"
          },
          {
            "en": "Al-Bukhari also relates from Umar (RA) that the Prophet ﷺ said: do not exaggerate in praising me as the Christians exaggerated over the son of Maryam; I am only a servant, so say, the servant of Allah and His Messenger. Ibn Kathir places this hadith under 4:171. It shows the Prophet ﷺ applying the verse to himself, closing in advance the door through which the excess it condemns had entered. The correction of 4:171 is not aimed at one community's history and left there; it is a rule for everyone who loves a prophet.",
            "bn": "বুখারী উমর (রাঃ) থেকেও বর্ণনা করেছেন, নবী ﷺ বলেছেন: খ্রিস্টানরা যেভাবে মারইয়ামের পুত্রকে নিয়ে বাড়াবাড়ি করেছে, তোমরা আমার প্রশংসায় সেভাবে বাড়াবাড়ি করো না; আমি তো কেবল একজন বান্দা, তাই বলো, আল্লাহর বান্দা ও তাঁর রাসূল। ইবনে কাসীর এই হাদিসটি ৪:১৭১ আয়াতের ব্যাখ্যায় এনেছেন। এখানে দেখা যায়, নবী ﷺ আয়াতটি নিজের ওপরই প্রয়োগ করছেন। আয়াত যে বাড়াবাড়ির নিন্দা করে, সেটা যে দরজা দিয়ে ঢুকেছিল, তিনি আগেভাগেই তা বন্ধ করে দিচ্ছেন। ৪:১৭১ আয়াতের এই সংশোধন কোনো এক সম্প্রদায়ের অতীত ইতিহাসে আটকে থাকা কথা নয়। যে-ই কোনো নবীকে ভালোবাসে, তার জন্যই এটি নিয়ম।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Adam, a Servant",
          "bn": "আদমের মতো, এক বান্দা"
        },
        "p": [
          {
            "en": "3:59 gives the comparison the commentators lean on: the example of Isa before Allah is like that of Adam, whom He created from dust and then said to him, Be, and he was. A man without a father is no more divine than a man without a father or mother. 19:30 records the first words Isa (AS) himself spoke, in the cradle: I am the servant of Allah; He has given me the Scripture and made me a prophet. 5:75 says he was not but a messenger, that messengers had passed before him, that his mother was a supporter of truth, and that they both used to eat food.",
            "bn": "মুফাসসিররা যে তুলনার ওপর ভর করেন, তা আছে ৩:৫৯ আয়াতে: আল্লাহর কাছে ঈসার দৃষ্টান্ত আদমের মতো; তাঁকে তিনি মাটি থেকে সৃষ্টি করলেন, তারপর বললেন, হও, আর তিনি হয়ে গেলেন। যাঁর বাবা নেই, তিনি সেই মানুষের চেয়ে বেশি ইলাহ হওয়ার দাবিদার নন, যাঁর বাবা-মা কেউই ছিলেন না। ১৯:৩০ আয়াতে আছে ঈসা (আঃ)-এর নিজের মুখের প্রথম কথা, দোলনায় থাকা অবস্থায়: আমি আল্লাহর বান্দা; তিনি আমাকে কিতাব দিয়েছেন, আমাকে নবী বানিয়েছেন। ৫:৭৫ আয়াত বলে, তিনি একজন রাসূল ছাড়া আর কিছু ছিলেন না, তাঁর আগেও রাসূলরা গত হয়েছেন, তাঁর মা ছিলেন সত্যনিষ্ঠ নারী, আর দুজনেই খাবার খেতেন।"
          },
          {
            "en": "5:116 shows the Day when Allah will ask Isa (AS) whether he told people to take him and his mother as gods besides Allah, and his answer: exalted are You, it was not for me to say what I had no right to say. 9:31 widens the charge: the same excess falls on those who took their scholars and monks as lords besides Allah, and the Messiah, the son of Maryam, alongside them. And 4:172, the next verse, says the Messiah would never disdain to be a servant of Allah, nor would the angels near to Him; whoever disdains His worship out of pride will be gathered to Him.",
            "bn": "৫:১১৬ দেখায় সেই দিন, যেদিন আল্লাহ ঈসা (আঃ)-কে জিজ্ঞেস করবেন, তিনি কি মানুষকে বলেছিলেন আল্লাহকে ছেড়ে তাঁকে ও তাঁর মাকে ইলাহ বানাতে, আর তাঁর জবাব: পবিত্র মহান তুমি, যা বলার হক আমার নেই তা বলা আমার শোভা পায় না। ৯:৩১ সেই একই বাড়াবাড়ির আরও চেহারা ধরিয়ে দেয়: আল্লাহকে বাদ দিয়ে তারা নিজেদের আলেম ও দরবেশদের রব বানিয়ে নিয়েছিল, আর তাদের সঙ্গে মারইয়াম-পুত্র মাসীহকেও। আর ঠিক পরের আয়াত ৪:১৭২ বলে, মাসীহ আল্লাহর বান্দা হতে কখনো তুচ্ছ বোধ করেন না, নৈকট্যের ফেরেশতারাও না; যে অহংকারে তাঁর ইবাদতকে তুচ্ছ করে, তাকে তাঁর কাছেই জড়ো করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour First, Then the Limit",
          "bn": "আগে সম্মান, তারপর সীমা"
        },
        "p": [
          {
            "en": "The first lesson is in the verse's method. Before it names the error it states everything true and honourable about Isa (AS): messenger, word, spirit from Him. A believer who has to correct a wrong belief in a friend, a child or a study circle can copy that order. Say first what is right in what the person holds, fully and without grudging, and only then the limit. Correction that begins with the limit is heard as an attack; correction that begins with honour is heard as counsel, which is what the verse calls itself when it says, better for you.",
            "bn": "প্রথম শিক্ষাটা আয়াতের পদ্ধতিতে। ভুলের কথা তোলার আগে আয়াত ঈসা (আঃ) সম্পর্কে সব সত্য ও সম্মানের কথা বলে নেয়: রাসূল, কালিমা, তাঁর পক্ষ থেকে রূহ। বন্ধু, সন্তান বা দ্বীনি হালকার কারও ভুল বিশ্বাস শোধরাতে হলে একজন মুমিন এই ধারাটাই অনুসরণ করতে পারেন। মানুষটা যা বিশ্বাস করে, তার মধ্যে যা ঠিক, আগে সেটা বলুন, পুরোপুরি, মন খুলে। তারপর সীমার কথা। সীমা দিয়ে শুরু করলে সংশোধনকে আক্রমণ মনে হয়; সম্মান দিয়ে শুরু করলে তা শোনায় নসিহতের মতো। আয়াত নিজেও নিজেকে তা-ই বলেছে: তোমাদের জন্যই ভালো।"
          },
          {
            "en": "The second lesson turns inward. The hadith of Umar (RA) shows that ghuluw is not a Christian problem but a human one, and the Prophet ﷺ guarded his own community against it by name. So a believer watches his own reverence: for the Prophet ﷺ, that it stays within what he said of himself; for scholars and the pious, that it never reaches the point of 9:31, where their word replaces Allah's. And the second prohibition, say about Allah only the truth, becomes a habit of checking. Before attributing a ruling, a promise or a threat to Allah, ask whether it is His or only mine.",
            "bn": "দ্বিতীয় শিক্ষাটা নিজের দিকে তাকানোর। উমর (রাঃ)-এর হাদিস দেখায়, গুলু খ্রিস্টানদের একার সমস্যা নয়, মানুষ মাত্রেরই সমস্যা, আর নবী ﷺ নিজের উম্মতকে নাম ধরে এ থেকে সাবধান করেছেন। কাজেই মুমিন নিজের শ্রদ্ধার দিকে নজর রাখেন। নবী ﷺ-এর প্রতি শ্রদ্ধা যেন তিনি নিজের সম্পর্কে যা বলেছেন তার ভেতরে থাকে। আলেম ও নেককারদের প্রতি শ্রদ্ধা যেন কখনো ৯:৩১ আয়াতের সেই পর্যায়ে না পৌঁছায়, যেখানে তাঁদের কথা আল্লাহর কথার জায়গা নিয়ে নেয়। আর দ্বিতীয় নিষেধটি, আল্লাহ সম্পর্কে সত্য ছাড়া কিছু বলো না, পরিণত হয় যাচাই করার অভ্যাসে। কোনো হুকুম, ওয়াদা বা হুমকি আল্লাহর নামে চালানোর আগে নিজেকে জিজ্ঞেস করুন: এটা কি তাঁর কথা, নাকি শুধুই আমার?"
          }
        ]
      },
      {
        "h": {
          "en": "Write Us Among the Witnesses",
          "bn": "সাক্ষীদের মধ্যে আমাদের লিখে নিন"
        },
        "p": [
          {
            "en": "The Quran preserves the prayer of the disciples of Isa (AS) in 3:53: our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses. It is the du'a of people who took Isa (AS) exactly as 4:171 describes him, a messenger to be followed, and asked to be written down as witnesses to that truth. A believer can also say, as a statement of faith rather than a request, the words the Prophet ﷺ gave in the hadith of Ubadah (RA): that Isa is the servant of Allah and His Messenger, His word conveyed to Maryam, and a spirit from Him.",
            "bn": "৩:৫৩ আয়াতে কুরআন ঈসা (আঃ)-এর হাওয়ারীদের দোয়া ধরে রেখেছে: হে আমাদের রব, আপনি যা নাজিল করেছেন, আমরা তাতে ঈমান এনেছি এবং রাসূলের অনুসরণ করেছি; সুতরাং আমাদের সাক্ষীদের মধ্যে লিখে নিন। এ দোয়া তাদের, যারা ঈসা (আঃ)-কে ঠিক সেভাবেই গ্রহণ করেছিল যেভাবে ৪:১৭১ তাঁর পরিচয় দেয়, অনুসরণ করার মতো একজন রাসূল হিসেবে। আর তারা চেয়েছিল, সেই সত্যের সাক্ষী হিসেবে তাদের নাম লেখা থাকুক। একজন মুমিন আরেকটি কথাও বলতে পারেন, তবে প্রার্থনা হিসেবে নয়, ঈমানের ঘোষণা হিসেবে। সেটা উবাদা (রাঃ)-এর হাদিসে নবী ﷺ-এর শেখানো কথা: ঈসা আল্লাহর বান্দা ও রাসূল, মারইয়ামের প্রতি পৌঁছে দেওয়া তাঁর কালিমা, আর তাঁর পক্ষ থেকে এক রূহ।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Excess Begins",
          "bn": "বাড়াবাড়ি যেখানে শুরু"
        },
        "p": [
          {
            "en": "Is there anyone, a teacher, a saint, a leader, whose word I accept without asking whether it agrees with what Allah said? Ghuluw begins there. When I correct someone, do I start with what is true in their position, as this verse does, or with what is wrong? Have I ever said something about Allah, that He will surely forgive this or surely punish that, which I could not source? And when I hear the word servant applied to Isa (AS) or to Muhammad ﷺ, do I hear it as a limit or as the highest honour, the way 4:172 says the angels hear it?",
            "bn": "এমন কেউ কি আছেন, কোনো শিক্ষক, বুজুর্গ বা নেতা, যাঁর কথা আমি মেনে নিই আল্লাহর কথার সাথে মেলে কি না জিজ্ঞেস না করেই? গুলু ওখানেই শুরু হয়। কাউকে শোধরাতে গিয়ে আমি কি এই আয়াতের মতো তার অবস্থানের সত্য অংশ দিয়ে শুরু করি, নাকি ভুল দিয়ে? আল্লাহ সম্পর্কে আমি কি কখনো এমন কিছু বলেছি, তিনি এটা নিশ্চয় মাফ করবেন বা ওটা নিশ্চয় শাস্তি দেবেন, যার কোনো সূত্র আমি দিতে পারতাম না? আর ঈসা (আঃ) বা মুহাম্মাদ ﷺ সম্পর্কে ‘বান্দা’ শব্দটা শুনলে আমি কি একে সীমা হিসেবে শুনি, নাকি সর্বোচ্চ সম্মান হিসেবে, যেভাবে ৪:১৭২ বলে ফেরেশতারা শোনেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Teaching the Four Titles",
          "bn": "চার উপাধি শেখানো"
        },
        "p": [
          {
            "en": "Children often meet Isa (AS) first through other people's descriptions of him, so let this verse be the one they learn first. Write its four titles on the board, messenger, word, spirit from Him, and servant from 4:172, and ask what each one means and what none of them means. Ibn Kathir's examples help: the she-camel of Allah and the House of Allah are called His to honour them, not because they are part of Him. Then read 19:30 aloud, the child's own words from the cradle, and let the class notice that the first thing he said about himself is the thing this verse asks everyone to say.",
            "bn": "ছোটরা প্রায়ই ঈসা (আঃ)-এর সাথে প্রথম পরিচিত হয় অন্যদের বর্ণনার মধ্য দিয়ে, তাই এই আয়াতই হোক তাদের প্রথম শেখা। বোর্ডে এর চারটি উপাধি লিখুন, রাসূল, কালিমা, তাঁর পক্ষ থেকে রূহ (এই অনুবাদে ‘নির্দেশ’), আর ৪:১৭২ থেকে বান্দা, তারপর জিজ্ঞেস করুন প্রতিটির মানে কী, আর কোনোটার মানে কী নয়। ইবনে কাসীরের উদাহরণ কাজে লাগে: আল্লাহর উটনী আর আল্লাহর ঘরকে তাঁর বলা হয় সম্মান দিতে, তাঁর অংশ বলে নয়। তারপর জোরে পড়ুন ১৯:৩০, দোলনা থেকে শিশুটির নিজের কথা, আর ক্লাস লক্ষ করুক, নিজের সম্পর্কে তিনি প্রথম যা বলেছেন, এই আয়াত সবাইকে ঠিক সেটাই বলতে বলছে।"
          }
        ]
      }
    ]
  }
});
