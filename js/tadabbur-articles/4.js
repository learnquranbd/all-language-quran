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
  "4:5-6": {
    "sections": [
      {
        "h": {
          "en": "Wealth That Holds Life Up",
          "bn": "যে সম্পদে জীবন দাঁড়িয়ে থাকে"
        },
        "p": [
          {
            "en": "Two commands come just before these verses: give orphans their property, in 4:2, and give women their dower, in 4:4. Then 4:5 sets a limit. Al-Qurtubi explains the order: having commanded that orphans' wealth be handed to them and the dower reach the wives, Allah makes clear that one who cannot manage wealth, and one not yet of age, is not to be given it. Of 4:6 he says it addresses everyone, explaining how the handover is done. Together the two verses lay out one procedure for a guardian.",
            "bn": "এ দুই আয়াতের ঠিক আগে দুটি নির্দেশ এসেছে। ৪:২ আয়াতে বলা হয়েছে ইয়াতীমদের সম্পদ তাদের দিয়ে দিতে, আর ৪:৪ আয়াতে নারীদের মোহর দিয়ে দিতে। এরপর ৪:৫ আয়াত একটা সীমা টেনে দেয়। কুরতুবী এই ক্রমটা বুঝিয়ে বলেন। ইয়াতীমের সম্পদ তার হাতে দেওয়া আর স্ত্রীর কাছে মোহর পৌঁছানোর আদেশ দেওয়ার পর আল্লাহ পরিষ্কার করে দিলেন, যে সম্পদ সামলাতে পারে না আর যে এখনো সাবালক হয়নি, তার হাতে সম্পদ তুলে দেওয়া যাবে না। ৪:৬ আয়াত সম্পর্কে তিনি বলেন, এখানে সবাইকে ডেকে বুঝিয়ে দেওয়া হয়েছে সম্পদ কীভাবে ফেরত দিতে হয়। দুই আয়াত মিলে অভিভাবকের জন্য একটাই কর্মপদ্ধতি দাঁড়ায়।"
          },
          {
            "en": "Allah calls this wealth qiyaman, what you stand by. Al-Baghawi traces the word to qiwam, that by which a matter is held up, and reads it here as the mainstay of your living. As-Sa'di says Allah made wealth a support for His servants in their religion and their world. The verse also says your wealth. At-Tabari reads that as covering the guardians' own property and their wards' alike; Sa'id ibn Jubayr, in at-Tabari and al-Baghawi, says it is the orphan's property, called yours because the guardians manage it.",
            "bn": "আল্লাহ এ সম্পদকে বলেছেন কিয়াম, অর্থাৎ যার ওপর ভর দিয়ে মানুষ দাঁড়িয়ে থাকে। বাগাভী শব্দটার মূল খুঁজে পান কিওয়াম শব্দে, যা দিয়ে কোনো কিছু টিকে থাকে। এখানে তিনি এর অর্থ নেন জীবিকার খুঁটি। সা'দী বলেন, আল্লাহ সম্পদকে বান্দাদের দ্বীন ও দুনিয়া দুটোরই অবলম্বন বানিয়েছেন। আয়াতে আরও আছে, তোমাদের সম্পদ। তাবারী এর মধ্যে অভিভাবকের নিজের সম্পদ আর তার তত্ত্বাবধানে থাকা মানুষের সম্পদ, দুটোই ধরেন। তাবারী ও বাগাভী সাঈদ ইবন জুবাইরের মত আনেন: এ হলো ইয়াতীমের সম্পদ, অভিভাবকেরা দেখাশোনা করেন বলে একে তাঁদের সম্পদ বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Counts as Safih",
          "bn": "সাফীহ বলতে কাকে বোঝায়"
        },
        "p": [
          {
            "en": "The sufaha' are those who cannot be trusted with wealth, but which people the verse means, the early authorities at-Tabari collects did not agree. Some said women and children: al-Hasan, as-Suddi and ad-Dahhak among them, and Ibn Abbas in one report spoke of a man's wife and sons. Sa'id ibn Jubayr said orphans, and al-Qurtubi relays an-Nahhas calling that among the best things said on the verse. Mujahid, in one report, said women. Abu Musa al-Ash'ari, as al-Qurtubi gives him, said everyone who deserves to have his dealings restricted, and al-Qurtubi calls that comprehensive.",
            "bn": "সুফাহা মানে যাদের হাতে সম্পদ নিরাপদ নয়। কিন্তু আয়াতে ঠিক কারা উদ্দেশ্য, এ নিয়ে তাবারীর সংকলিত পূর্বসূরিরা একমত হননি। কেউ বলেছেন নারী ও শিশু। হাসান, সুদ্দী ও দাহহাক এই দলে। ইবন আব্বাস (রাঃ)-এর একটি বর্ণনায় আছে পুরুষের স্ত্রী ও ছেলেদের কথা। সাঈদ ইবন জুবাইর বলেছেন ইয়াতীমরা। কুরতুবী জানান, নাহহাস এ মতকে আয়াতের ব্যাখ্যায় বলা সবচেয়ে সুন্দর কথাগুলোর একটি বলেছেন। মুজাহিদের একটি বর্ণনায় আছে নারীরা। কুরতুবী আবু মূসা আশআরী (রাঃ)-এর মত আনেন: লেনদেনে বিধিনিষেধ আরোপের যোগ্য প্রত্যেকেই এর অন্তর্ভুক্ত। কুরতুবীর চোখে এ কথাটাই সব দিক ধরে রাখে।"
          },
          {
            "en": "At-Tabari's own conclusion is that Allah made the word general and singled out no kind of safih. No one may hand a safih his wealth, he writes, young child or grown man, male or female; the safih is whoever deserves restriction because he wastes, spoils and mismanages his property. His proof is the next verse, which orders orphans' wealth handed to them once sound judgement is seen, and orphans are girls and boys alike. He also rejects the women-only reading on grounds of Arabic: the plural sufaha' is used for men or mixed groups, while women alone would be safa'ih or safihat.",
            "bn": "তাবারীর নিজের সিদ্ধান্ত হলো, আল্লাহ শব্দটা ব্যাপক রেখেছেন, কোনো বিশেষ ধরনের সাফীহকে আলাদা করেননি। তিনি লেখেন, কোনো সাফীহর হাতেই তার সম্পদ তুলে দেওয়া চলবে না, সে ছোট শিশু হোক বা বড় মানুষ, পুরুষ হোক বা নারী। সাফীহ সে-ই, যে সম্পদ নষ্ট করে, বিগড়ে দেয়, ঠিকমতো সামলাতে পারে না বলে বিধিনিষেধের যোগ্য। তাঁর প্রমাণ পরের আয়াত। সেখানে বুঝ-বিবেচনা দেখা গেলে ইয়াতীমদের সম্পদ তাদের হাতে দিতে বলা হয়েছে, আর ইয়াতীম ছেলেও হয়, মেয়েও হয়। শুধু নারী অর্থ করার ব্যাখ্যাটা তিনি আরবি ভাষার যুক্তিতেও নাকচ করেন। সুফাহা বহুবচন ব্যবহৃত হয় পুরুষদের বা নারী-পুরুষ মেশানো দলের জন্য। কেবল নারীদের বোঝালে বলা হতো সাফাইহ বা সাফীহাত।"
          },
          {
            "en": "The other commentators define the word by conduct. As-Sa'di: whoever does not handle wealth well, for lack of reason, as with the insane, or lack of maturity, as with the young. Ibn Kathir's grounds of restriction are youth, insanity, bad management and crushing debt. The Muyassar: whoever squanders, among men, women and children. The readings that name women, as at-Tabari groups them, concern a man handing over his own wealth, and the verses on either side, 4:4 and 4:7, give women property of their own. The verse licenses no contempt for women as a class.",
            "bn": "বাকি তাফসীরকারেরা শব্দটার সংজ্ঞা দেন আচরণ দিয়ে। সা'দী বলেন, যে সম্পদ ঠিকমতো সামলাতে পারে না, হয় বুদ্ধির অভাবে, যেমন পাগল, নয়তো পরিপক্বতার অভাবে, যেমন শিশু। ইবন কাসীরের হিসাবে বিধিনিষেধের কারণ অল্প বয়স, পাগলামি, অব্যবস্থাপনা আর মাথা ছাড়ানো দেনা। মুয়াসসার বলে, পুরুষ, নারী বা শিশুদের মধ্যে যে-ই অপচয় করে। তাবারীর বিন্যাসে যেসব ব্যাখ্যায় নারীদের নাম এসেছে, সেগুলো পুরুষের নিজের সম্পদ হাতছাড়া করার কথা বলে। আর দুই পাশের আয়াত, ৪:৪ ও ৪:৭, নারীদের নিজস্ব সম্পদের মালিক বানিয়েছে। নারী জাতিকে তুচ্ছ করার কোনো অনুমতি এ আয়াত দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Food, Clothing, a Fitting Word",
          "bn": "অন্ন, বস্ত্র আর সুন্দর কথা"
        },
        "p": [
          {
            "en": "The ward still has to live: feed them from it and clothe them. Al-Baghawi notes the verse says fiha, in it, rather than minha, from it, meaning: set a provision for them within it. As-Sa'di draws two rulings. The upkeep of the young, the insane and the safih comes from their own wealth when they have any. And the guardian's word is accepted on reasonable spending, because Allah made him a trustee over their wealth, and a trustee's word is taken.",
            "bn": "যার সম্পদ আটকে রাখা হলো, তাকেও তো বাঁচতে হবে। তাই আদেশ এসেছে, তা থেকে তাদের খাওয়াও, পরাও। বাগাভী লক্ষ করেন, আয়াতে মিনহা (তা থেকে) না বলে বলা হয়েছে ফীহা (তার মধ্যে)। অর্থাৎ সম্পদের ভেতরেই তাদের জন্য জীবিকার ব্যবস্থা রাখো। সা'দী এখান থেকে দুটি বিধান বের করেন। শিশু, পাগল ও সাফীহর ভরণপোষণ চলবে তাদের নিজেদের সম্পদ থেকে, যদি তাদের সম্পদ থাকে। আর যুক্তিসংগত খরচের ব্যাপারে অভিভাবকের কথাই গ্রহণযোগ্য, কারণ আল্লাহ তাকে তাদের সম্পদের আমানতদার বানিয়েছেন, আর আমানতদারের কথা মেনে নিতে হয়।"
          },
          {
            "en": "As-Sa'di also reads the word your as an instruction: guardians must do with their wards' wealth what they do with their own, guarding it, managing it and keeping it from risk. Then comes a fitting word. At-Tabari prefers Ibn Jurayj's reading: tell them that if they become sound and mature their wealth will be handed over, and urge them to fear Allah. As-Sa'di adds gentle speech to mend their hearts. Mujahid, in Ibn Kathir, takes it as kindness and keeping ties; Ibn Zayd, in at-Tabari, as a prayer for them.",
            "bn": "তোমাদের সম্পদ কথাটার মধ্যে সা'দী একটা নির্দেশও দেখেন। নিজের সম্পদের বেলায় অভিভাবক যা করে, তত্ত্বাবধানে থাকা মানুষের সম্পদের বেলায়ও তাকে তা-ই করতে হবে: আগলে রাখা, ঠিকমতো খাটানো, ঝুঁকির মুখে না ফেলা। এরপর আসে সুন্দর কথার আদেশ। তাবারী ইবন জুরাইজের ব্যাখ্যা বেছে নেন। তাদের বলো, তোমরা ঠিকঠাক হয়ে বুঝদার হলে তোমাদের সম্পদ তোমাদের হাতে দেওয়া হবে, আর আল্লাহকে ভয় করতে উৎসাহ দাও। সা'দী যোগ করেন, নরম কথায় তাদের মন জুড়িয়ে দাও। ইবন কাসীর মুজাহিদের মত আনেন: এ হলো সদাচার আর সম্পর্ক রক্ষা। তাবারী আনেন ইবন যায়দের মত: তাদের জন্য দুআ করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Small Sums Before the Whole",
          "bn": "পুরোটার আগে অল্প কিছু"
        },
        "p": [
          {
            "en": "Wa-btalu al-yatama: and test the orphans. At-Tabari says what is tested: their minds and understanding, their soundness in religion, and how they manage wealth. Al-Qurtubi describes one method: the guardian studies the orphan's character and listens to his aims, and when he sees good in him, gives him part of his wealth to handle. If he grows it and judges well, the test is done; if he handles it badly, the guardian keeps the rest.",
            "bn": "ওয়াবতালুল ইয়াতামা: আর ইয়াতীমদের পরীক্ষা করো। কী যাচাই হবে, তাবারী তা বলে দেন: তাদের বুদ্ধি ও বোঝার ক্ষমতা, দ্বীনের ব্যাপারে তারা কতটা ঠিক, আর সম্পদ কীভাবে সামলায়। কুরতুবী একটি পদ্ধতির বর্ণনা দেন। অভিভাবক ইয়াতীমের স্বভাব খুঁটিয়ে দেখবে, সে কী চায় মন দিয়ে শুনবে। ভালো কিছু চোখে পড়লে তার সম্পদের একটা অংশ তার হাতে খাটাতে দেবে। সে যদি তা বাড়াতে পারে, বুঝেশুনে চলে, তবে পরীক্ষা হয়ে গেল। আর যদি এলোমেলো করে, বাকিটা অভিভাবক নিজের কাছেই রাখবে।"
          },
          {
            "en": "Al-Baghawi says the test differs with the person: someone who trades in the market is given a small sum and watched; someone who does not is tried on the household's spending; a young woman on running her home and keeping its goods. As-Sa'di: if the orphan goes on managing badly, the property is not handed over, however old he grows. Ma'arif al-Qur'an treats the test as training too, through small buying and selling before adulthood, and records Abu Hanifa's ruling from it that a minor's trades made with the guardian's leave are valid.",
            "bn": "বাগাভী বলেন, মানুষভেদে পরীক্ষা আলাদা। যে বাজারে কেনাবেচা করে, তাকে অল্প কিছু টাকা দিয়ে তার লেনদেন দেখা হবে। যে বাজারে যায় না, তাকে পরখ করা হবে সংসারের খরচ চালাতে দিয়ে। আর মেয়েকে পরখ করা হবে ঘর সামলানো আর ঘরের জিনিসপত্র আগলে রাখার কাজে। সা'দী বলেন, ইয়াতীম যদি বরাবরই এলোমেলো চলে, বয়স যত বাড়ুক, সম্পদ তার হাতে দেওয়া হবে না। মাআরিফুল কুরআন এ পরীক্ষাকে প্রশিক্ষণ হিসেবেও দেখে: সাবালক হওয়ার আগেই ছোটখাটো কেনাবেচার সুযোগ দেওয়া। সেখানে আছে, আবু হানীফা এখান থেকে বিধান বের করেছেন যে অভিভাবকের অনুমতি নিয়ে নাবালকের করা কেনাবেচা বৈধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Grown, and Also Sound",
          "bn": "বড় হওয়া, বুঝদার হওয়া"
        },
        "p": [
          {
            "en": "Until they reach marriage: Mujahid, Ibn Abbas and Ibn Zayd, in at-Tabari, all say this means puberty. Where no bodily sign has come, the age is disputed. Al-Qurtubi gives 15 as the view of al-Awza'i, ash-Shafi'i and Ahmad ibn Hanbal; Malik and Abu Hanifa wait for an age no one reaches without puberty, which he gives as 17, though other figures are reported from Abu Hanifa. Al-Baghawi calls 15 the view of most scholars, and Dawud held that age alone never settles it.",
            "bn": "বিবাহের বয়সে পৌঁছানো পর্যন্ত। তাবারীর বর্ণনায় মুজাহিদ, ইবন আব্বাস (রাঃ) ও ইবন যায়দ, সবাই বলেন এর মানে সাবালকত্ব। শরীরে কোনো লক্ষণ দেখা না দিলে বয়স কত ধরা হবে, তা নিয়ে মতভেদ আছে। কুরতুবী জানান, আওযাঈ, শাফেয়ী ও আহমাদ ইবন হাম্বলের মতে ১৫ বছর। মালিক ও আবু হানীফা অপেক্ষা করেন এমন বয়স পর্যন্ত, যে বয়সে পৌঁছে কেউ সাবালক না হয়ে থাকে না। কুরতুবী সেটা ১৭ বছর বলেন, যদিও আবু হানীফা থেকে অন্য হিসাবও বর্ণিত আছে। বাগাভী ১৫ বছরকে অধিকাংশ আলেমের মত বলেন। আর দাউদের মতে শুধু বয়স দিয়ে কখনো এর মীমাংসা হয় না।"
          },
          {
            "en": "Then if you perceive rushd in them. At-Tabari lists what rushd was taken to mean: reason and soundness in religion (as-Suddi, Qatada); religion and care of wealth (al-Hasan, Ibn Abbas); reason alone (Mujahid). He prefers reason and good management of wealth, since all agree that a sane adult who manages well is not restricted, even if he sins. Al-Baghawi requires soundness in both religion and wealth. Al-Qurtubi says most jurists require age and rushd together, while Abu Hanifa, Zufar and an-Nakha'i dropped rushd at 25.",
            "bn": "তারপর যদি তাদের মধ্যে রুশদ দেখতে পাও। রুশদের কী কী অর্থ করা হয়েছে, তাবারী তার তালিকা দেন। সুদ্দী ও কাতাদার মতে বুদ্ধি আর দ্বীনদারি। হাসান ও ইবন আব্বাস (রাঃ)-এর মতে দ্বীনদারি আর সম্পদের যত্ন। মুজাহিদের মতে শুধু বুদ্ধি। তাবারী নিজে বেছে নেন বুদ্ধি আর সম্পদের সুব্যবস্থাপনা। কারণ সবাই একমত, সুস্থবুদ্ধির প্রাপ্তবয়স্ক মানুষ সম্পদ ঠিকমতো সামলালে গুনাহগার হলেও তার ওপর বিধিনিষেধ চলে না। বাগাভী দ্বীন ও সম্পদ দুটোতেই ঠিক থাকা শর্ত করেন। কুরতুবী জানান, অধিকাংশ ফকীহ বয়স আর রুশদ দুটোই চান। তবে আবু হানীফা, যুফার ও নাখঈ ২৫ বছর হলে রুশদের শর্ত তুলে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Racing the Child's Growing Up",
          "bn": "শিশুর বড় হওয়ার সঙ্গে পাল্লা"
        },
        "p": [
          {
            "en": "Do not consume it extravagantly, or hastily before they grow up. At-Tabari defines israf as passing the permitted limit into what is not permitted; as-Sa'di makes it concrete: crossing from your own wealth, which Allah made lawful to you, into theirs, which He made unlawful. Bidar is racing. At-Tabari reads it as eating the property before the orphans come of age, for fear of having to hand it over. Ibn Abbas, in his report, calls it eating it in a race with the orphan's coming of age, to come between him and his wealth.",
            "bn": "অপচয় করে আর তারা বড় হয়ে যাবে এই ভয়ে তাড়াহুড়া করে তা খেয়ো না। তাবারী ইসরাফের সংজ্ঞা দেন: বৈধ সীমা পেরিয়ে অবৈধে ঢুকে পড়া। সা'দী কথাটা আরও স্পষ্ট করেন। আল্লাহ যে সম্পদ তোমার জন্য হালাল করেছেন, তোমার নিজের সম্পদ, সেখান থেকে বেরিয়ে তাদের সম্পদে ঢোকা, যা তিনি তোমার জন্য হারাম করেছেন। বিদার মানে পাল্লা দেওয়া। তাবারীর ব্যাখ্যায়, ইয়াতীমরা সাবালক হওয়ার আগেই সম্পদ খেয়ে ফেলা, পাছে তখন তা ফেরত দিতে হয়। ইবন আব্বাস (রাঃ)-এর বর্ণনায়, ইয়াতীম সাবালক হওয়ার সঙ্গে পাল্লা দিয়ে তার সম্পদ খাওয়া, যাতে তার আর তার সম্পদের মাঝে আড়াল তৈরি হয়।"
          },
          {
            "en": "As-Sa'di says this happens with many guardians who have no fear of Allah and no mercy for those in their care: they see the child's helpless years as an opening and seize it, and Allah forbade this very state. Ibn Zayd, in at-Tabari, gives the inner logic: while the property stays with you, you have a share in it, and once you hand it over you have none, so you keep putting the day off. The sister verse, 4:10, says those who devour orphans' property wrongfully eat only fire into their bellies.",
            "bn": "সা'দী বলেন, এমনটা ঘটে অনেক অভিভাবকের হাতে, যাদের মনে আল্লাহর ভয় নেই, তত্ত্বাবধানে থাকা মানুষটার প্রতি মায়াও নেই। শিশুর অসহায় বছরগুলোকে তারা সুযোগ ভাবে, আর সেই সুযোগ লুফে নেয়। আল্লাহ ঠিক এই অবস্থাটাকেই নিষেধ করেছেন। তাবারী ইবন যায়দের কথায় ভেতরের হিসাবটা খুলে দেন। সম্পদ যতদিন তোমার কাছে, ততদিন তাতে তোমারও একটা ভাগ থাকে। ফেরত দিলেই আর কিছু থাকে না। তাই দিনটা তুমি পিছিয়েই যাও। এর সহোদর আয়াত ৪:১০ বলে, যারা অন্যায়ভাবে ইয়াতীমের সম্পদ খায়, তারা নিজেদের পেটে কেবল আগুনই ভরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Loan, or the Guardian's Due",
          "bn": "ধার, নাকি অভিভাবকের প্রাপ্য"
        },
        "p": [
          {
            "en": "Whoever is well-off, let him refrain: al-Baghawi says he should not touch it, little or much, and ash-Sha'bi, in Ibn Kathir, that for him it is like carrion and blood. Whoever is poor, let him eat in a fitting way. Al-Bukhari records (4575) from Aisha (RA), on this verse: 'It was revealed about the orphan's property: if he is poor, he eats from it in return for his looking after it, in a fitting way.' These are her words on the verse, not a saying of the Prophet ﷺ.",
            "bn": "যে সচ্ছল, সে যেন বিরত থাকে। বাগাভী বলেন, কম হোক বা বেশি, সে তা ছুঁয়েও দেখবে না। ইবন কাসীর শা'বীর কথা আনেন: তার জন্য এ সম্পদ মরা জন্তু আর রক্তের মতো। আর যে অভাবী, সে যেন ন্যায়সংগতভাবে খায়। ইমাম বুখারী (৪৫৭৫) আয়েশা (রাঃ) থেকে এ আয়াত সম্পর্কে বর্ণনা করেছেন: 'এটি নাযিল হয়েছে ইয়াতীমের সম্পদ নিয়ে। অভিভাবক অভাবী হলে দেখাশোনার বিনিময়ে তা থেকে ন্যায়সংগতভাবে খাবে।' এ কথা আয়াত সম্পর্কে আয়েশা (রাঃ)-এর নিজের, নবী ﷺ-এর বাণী নয়।"
          },
          {
            "en": "What the fitting way is, the commentators dispute. One view makes it a loan. At-Tabari records Umar (RA): 'I have placed Allah's wealth, as regards me, where the orphan's wealth stands: if I have enough, I refrain; if I am poor, I eat in a fitting way; and when I am well-off, I repay.' At-Tabari prefers this, since a guardian owns nothing of his ward's property, and rejects the wage reading, because a guardian may hire himself out to the orphan at a set wage, rich or poor.",
            "bn": "ন্যায়সংগতভাবে খাওয়া বলতে কী বোঝায়, তা নিয়ে তাফসীরকারদের মতভেদ আছে। একটি মত হলো, এটা ধার। তাবারী উমর (রাঃ)-এর কথা বর্ণনা করেন: 'আল্লাহর সম্পদকে আমি নিজের বেলায় ইয়াতীমের সম্পদের জায়গায় রেখেছি। অভাব না থাকলে বিরত থাকি, অভাবে পড়লে ন্যায়সংগতভাবে খাই, আর সচ্ছল হলে শোধ করে দিই।' তাবারী এ মতই বেছে নেন, কারণ ইয়াতীমের সম্পদের কিছুই অভিভাবকের মালিকানায় নেই। পারিশ্রমিক অর্থ করাটা তিনি নাকচ করেন, কারণ অভিভাবক সচ্ছল হোক বা অভাবী, নির্দিষ্ট মজুরিতে ইয়াতীমের কাজে নিজেকে নিয়োগ দিতে পারে।"
          },
          {
            "en": "The other view makes it his due, with nothing to repay. Al-Qurtubi gives it from Ata, al-Hasan, an-Nakha'i and Qatada, and argues for it from the agreement that a ruler need not repay what he took fittingly. Ibn Kathir reports it as the sound view among ash-Shafi'i's followers, and gives the jurists' measure: the guardian takes the lesser of a fair wage or his need.",
            "bn": "অন্য মত হলো, এটা অভিভাবকের প্রাপ্য, শোধ করার কিছু নেই। কুরতুবী এ মত আনেন আতা, হাসান, নাখঈ ও কাতাদা থেকে। এর পক্ষে তিনি যুক্তি দেন এই সর্বসম্মত কথা দিয়ে যে, শাসক ন্যায়সংগতভাবে যা নিয়েছেন, তা তাঁকে ফেরত দিতে হয় না। ইবন কাসীর জানান, শাফেয়ীর অনুসারীদের কাছে এটাই সঠিক মত। ফকীহদের মাপকাঠিও তিনি দেন: ন্যায্য পারিশ্রমিক আর নিজের প্রয়োজন, এ দুইয়ের মধ্যে যেটা কম, অভিভাবক সেটুকু নেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Witnesses at the Handover",
          "bn": "বুঝিয়ে দেওয়ার দিনে সাক্ষী"
        },
        "p": [
          {
            "en": "When you hand over their property, call witnesses. Ibn Kathir: so that no orphan later denies what he received; the Muyassar: so that their right reaches them in full. Whether this is required is disputed. Al-Qurtubi reports a group holding it recommended, since the guardian is a trustee whose word is accepted, and another holding it obligatory, the verse's apparent sense, since the father trusted him, not the orphan. Al-Baghawi calls it a command of guidance, not a duty, meant to remove suspicion and end dispute.",
            "bn": "তাদের সম্পদ তাদের হাতে দেওয়ার সময় সাক্ষী রাখো। ইবন কাসীর বলেন, যাতে পরে কোনো ইয়াতীম অস্বীকার করতে না পারে যে সে বুঝে পেয়েছে। মুয়াসসার বলে, যাতে তাদের হক পুরোপুরি তাদের কাছে পৌঁছায়। সাক্ষী রাখা বাধ্যতামূলক কি না, এ নিয়ে মতভেদ আছে। কুরতুবী জানান, একদলের মতে এটা মুস্তাহাব, কারণ অভিভাবক আমানতদার, তার কথাই গ্রহণযোগ্য। আরেক দলের মতে ফরজ, আয়াতের বাহ্যিক অর্থ এটাই, কারণ তাকে বিশ্বাস করে দায়িত্ব দিয়েছিলেন বাবা, ইয়াতীম নয়। বাগাভী একে বলেন পথনির্দেশমূলক আদেশ, বাধ্যতামূলক নয়, যার উদ্দেশ্য সন্দেহ দূর করা আর বিবাদের পথ বন্ধ করা।"
          },
          {
            "en": "And Allah suffices as Reckoner. At-Tabari: Allah suffices beyond the witnesses the guardian calls. Ibn Kathir: He watches the guardians while they manage and when they hand over, whether the wealth comes back whole or short, its accounts muddled and its affairs disguised. He then cites Muslim (1826), from Abu Dharr (RA): the Messenger of Allah ﷺ said, 'Abu Dharr, I see that you are weak, and I love for you what I love for myself. Do not take command over two, and do not take charge of an orphan's property.'",
            "bn": "আর হিসাব নেওয়ার জন্য আল্লাহই যথেষ্ট। তাবারী বলেন, অভিভাবক যেসব সাক্ষী রাখে, তাদের ছাড়িয়েও আল্লাহই যথেষ্ট। ইবন কাসীর বলেন, অভিভাবক যখন সম্পদ দেখাশোনা করে আর যখন ফেরত দেয়, দুই সময়েই আল্লাহ তাকে দেখছেন। সম্পদ পুরোটা ফিরল নাকি কম হয়ে ফিরল, হিসাব গুলিয়ে ফেলা হলো কি না, আসল ব্যাপার ঢেকে রাখা হলো কি না, সবই তিনি জানেন। এরপর তিনি ইমাম মুসলিমের বর্ণনা (১৮২৬) আনেন। আবু যার (রাঃ) থেকে বর্ণিত, রাসূলুল্লাহ ﷺ বলেছেন: 'হে আবু যার, আমি তোমাকে দুর্বল দেখছি। আর আমি নিজের জন্য যা পছন্দ করি, তোমার জন্যও তা-ই পছন্দ করি। দুজন মানুষেরও নেতা হয়ো না, আর কোনো ইয়াতীমের সম্পদের দায়িত্ব নিয়ো না।'"
          }
        ]
      },
      {
        "h": {
          "en": "Holding Another's Money Today",
          "bn": "আজ অন্যের টাকা হাতে থাকলে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an carries the verse to people who run endowments, mosques, religious schools and public offices. The better course for someone with means is to take nothing; someone who gives his working time and has no other income may take in proportion to need. It warns against a small stipend shown on paper while spending runs far past it, and says only the fear of Allah's final account cures that.",
            "bn": "মাআরিফুল কুরআন আয়াতটিকে টেনে নেয় ওয়াকফ, মসজিদ, মাদরাসা আর সরকারি দায়িত্ব যারা চালান, তাদের পর্যন্ত। যার নিজের সামর্থ্য আছে, তার জন্য উত্তম কিছুই না নেওয়া। যে নিজের রোজগারের সময় এ কাজে দেয় আর তার অন্য আয় নেই, সে প্রয়োজন অনুপাতে নিতে পারে। সেখানে সতর্ক করা হয়েছে এমন লোকদের ব্যাপারে, যারা কাগজে সামান্য ভাতা দেখায়, কিন্তু খরচ করে তার বহু গুণ। এর একমাত্র চিকিৎসা, তার ভাষায়, আল্লাহর শেষ হিসাবের ভয়।"
          },
          {
            "en": "The same order fits an orphan's inheritance held by an uncle, a ward's savings, a family business run by one sibling for the rest, or a committee's funds. Do not let the trust be swallowed into your own, which 4:2 forbids, and keep records. Give the heir real tasks before the day comes. Hand over on time, with the accounts and before witnesses. And when nobody is checking, remember the verse's last word: hasiba, the One who already knows what the account should show.",
            "bn": "চাচার হাতে থাকা ইয়াতীমের মিরাস, কারও তত্ত্বাবধানে থাকা জমানো টাকা, বাকি ভাইবোনদের হয়ে একজনের চালানো পারিবারিক ব্যবসা, কিংবা কোনো কমিটির তহবিল, সবখানেই এই একই নিয়ম খাটে। আমানতকে নিজের সম্পদের সঙ্গে মিশিয়ে গিলে ফেলবেন না, ৪:২ আয়াত তা নিষেধ করেছে। লিখিত হিসাব রাখুন। দিনটা আসার আগেই উত্তরাধিকারীকে সত্যিকারের কাজ দিয়ে শেখান। সময়মতো, হিসাবসহ, সাক্ষীর সামনে বুঝিয়ে দিন। আর যখন কেউ দেখছে না, তখন আয়াতের শেষ শব্দটা মনে রাখুন: হাসীবা। সেই একজন, হিসাবে কী থাকার কথা, তা তিনি আগেই জানেন।"
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
  "4:29-30": {
    "sections": [
      {
        "h": {
          "en": "Rights Held Against Each Other",
          "bn": "একে অপরের উপর যে হক"
        },
        "p": [
          {
            "en": "Three times in the verses just before, the Qur'an says what Allah wants: to make things clear to you and guide you, to turn to you in mercy, and to lighten your load, for the human being was created weak (4:26 to 4:28). Then the address turns to the believers, and a single verse gives two prohibitions, the first guarding wealth and the second guarding life. It closes on the reason behind both: Allah is ever merciful to you.",
            "bn": "ঠিক আগের আয়াতগুলোতে কুরআন তিনবার জানায় আল্লাহ কী চান। তিনি চান আপনাদের সামনে সব স্পষ্ট করতে ও পথ দেখাতে, আপনাদের তওবা কবুল করতে, আর বোঝা হালকা করতে, কেননা মানুষকে সৃষ্টি করা হয়েছে দুর্বল করে (৪:২৬ থেকে ৪:২৮)। এরপর ডাক আসে ঈমানদারদের প্রতি। একটিমাত্র আয়াতে দুটি নিষেধ: প্রথমটি সম্পদকে আগলে রাখে, দ্বিতীয়টি জীবনকে। আয়াত শেষ হয় দুটোর পেছনের কারণ বলে: আল্লাহ তোমাদের প্রতি সর্বদা দয়ালু।"
          },
          {
            "en": "Ma'arif al-Qur'an traces the path that led here. The surah opened with all people created from a single pair, then gave the rights of orphans and women, then the shares of inheritance, then whom one may marry; these verses now protect life and property, whoever the person is. At-Tabari reads the 'that' of 4:30 as reaching back over everything forbidden since 4:19. The two verses close a long passage on what people owe each other.",
            "bn": "এখানে পৌঁছানোর পথটা দেখিয়ে দেয় মাআরিফুল কুরআন। সূরার শুরুতে বলা হয়েছে, সব মানুষ একই মা-বাবা থেকে। তারপর এসেছে এতিম ও নারীদের হক, তারপর মীরাসের অংশ, তারপর কাকে বিয়ে করা যায় আর কাকে যায় না। এবার এই আয়াতগুলো জীবন ও সম্পদকে সুরক্ষা দিচ্ছে, মানুষটি যে-ই হোক। ৪:৩০ আয়াতে 'যে এমন করবে' কথাটিকে তাবারী ৪:১৯ থেকে আসা সব নিষেধের দিকে ফিরিয়ে নেন। ফলে এ দুটি আয়াত মানুষের পারস্পরিক হক নিয়ে দীর্ঘ এক আলোচনার উপসংহার।"
          }
        ]
      },
      {
        "h": {
          "en": "Your Wealth, Between You",
          "bn": "আপনাদের সম্পদ, আপনাদের মাঝে"
        },
        "p": [
          {
            "en": "La ta'kulu amwalakum baynakum bil-batil: literally, do not eat your wealth between you by falsehood. Ma'arif al-Qur'an notes that 'eating' is an idiom for taking and using, whether or not the thing is food, and al-Qurtubi glosses bil-batil as 'without right'. At-Tabari explains it through what Allah has forbidden, such as usury and gambling. As-Suddi, in at-Tabari, adds short-changing and wrongdoing; al-Baghawi's list adds usurpation, theft and breach of trust.",
            "bn": "লা তা'কুলূ আমওয়ালাকুম বাইনাকুম বিল-বাতিল: শব্দে শব্দে, নিজেদের মধ্যে তোমাদের সম্পদ বাতিল পথে খেয়ো না। মাআরিফুল কুরআন মনে করিয়ে দেয়, 'খাওয়া' এখানে একটা বাগধারা: কিছু নিয়ে নেওয়া ও ভোগ করা, জিনিসটা খাবার হোক বা না হোক। কুরতুবী বিল-বাতিলের অর্থ করেন 'হক ছাড়া'। তাবারী এর ব্যাখ্যা দেন আল্লাহর নিষিদ্ধ করা পথ দিয়ে, যেমন সুদ ও জুয়া। তাবারীর বর্ণনায় সুদ্দী এর সঙ্গে যোগ করেন ঠকিয়ে কম দেওয়া ও জুলুম, আর বাগাভীর তালিকায় আরও আছে জবরদখল, চুরি ও খিয়ানত।"
          },
          {
            "en": "Ibn Kathir widens the net to every stratagem that looks lawful in form while Allah knows its user only wants a side door to usury. Ibn 'Abbas, in at-Tabari and Ibn Kathir, gave a case: a man buys a garment and says, 'If I like it I keep it; if not, I return it and a dirham with it.' That, he said, is what Allah meant. A report in Ibn Kathir, through 'Alqama from 'Abd Allah, calls the verse firm, never abrogated and never to be.",
            "bn": "ইবন কাসীর জালটা আরও ছড়িয়ে দেন। বাইরে থেকে বৈধ দেখায় এমন প্রতিটি কৌশলও এর মধ্যে পড়ে, যদি আল্লাহ জানেন যে কৌশলকারী আসলে পেছনের দরজা দিয়ে সুদে পৌঁছাতে চায়। তাবারী ও ইবন কাসীর ইবন আব্বাস (রাঃ)-এর দেওয়া একটি উদাহরণ আনেন: কেউ কাপড় কিনে বলে, 'পছন্দ হলে রাখব, না হলে ফেরত দেব, সঙ্গে এক দিরহামও দেব।' তিনি বলেন, আল্লাহ এ আয়াতে ঠিক এটাকেই বুঝিয়েছেন। ইবন কাসীর আলকামার সূত্রে আবদুল্লাহর একটি বক্তব্য আনেন: আয়াতটি মুহকাম, কখনো রহিত হয়নি, কোনোদিন হবেও না।"
          },
          {
            "en": "Not every early reading took it this way. 'Ikrima and al-Hasan al-Basri, in at-Tabari, said people grew wary of eating at anyone's table after this verse, until 24:61 lifted the restriction; Ibn Kathir has the same from Ibn 'Abbas. At-Tabari rejects it: feeding guests was praised in every age and Allah never forbade it, so there was nothing to abrogate. As-Sa'di adds that squandering your own wealth in vanity and extravagance may also fall under the verse.",
            "bn": "প্রথম যুগের সব ব্যাখ্যা অবশ্য একে এভাবে নেয়নি। তাবারীর বর্ণনায় ইকরিমা ও হাসান বসরী বলেন, এ আয়াত নাযিলের পর লোকে কারও ঘরে খেতে সংকোচ করত, শেষে ২৪:৬১ আয়াত সেই বাধা তুলে দেয়। ইবন কাসীরও ইবন আব্বাস (রাঃ) থেকে একই কথা আনেন। তাবারী এ মত মানেন না। তাঁর যুক্তি: মেহমানকে খাওয়ানো সব যুগেই প্রশংসিত, আল্লাহ কখনো তা নিষেধ করেননি, তাই রহিত হওয়ার মতো কিছু এখানে ছিলই না। সা'দী আরও বলেন, অহংকার আর অপচয়ে নিজের সম্পদ উড়িয়ে দেওয়াও হয়তো এ আয়াতের আওতায় পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Trade That Both Sides Want",
          "bn": "দুপক্ষের খুশিমনের লেনদেন"
        },
        "p": [
          {
            "en": "Illa an takuna tijaratan 'an taradin minkum: except trade by mutual consent among you. Ibn Kathir and al-Qurtubi call the exception 'cut off': no slice of falsehood is made lawful, a new door is opened instead, as if to say, leave forbidden earnings and pursue trade that both sides agree to. Readers recited both tijaratun and tijaratan; at-Tabari accepts both as sound and close in meaning, though he favours the second.",
            "bn": "ইল্লা আন তাকূনা তিজারাতান আন তারাদিম মিনকুম: তবে তোমাদের পারস্পরিক সম্মতিতে ব্যবসা হলে ভিন্ন কথা। ইবন কাসীর ও কুরতুবী এ ব্যতিক্রমকে বলেন 'বিচ্ছিন্ন'। অর্থাৎ বাতিলের কোনো অংশকে হালাল করা হচ্ছে না, বরং খুলে দেওয়া হচ্ছে নতুন এক দরজা। যেন বলা হচ্ছে: হারাম উপার্জন ছাড়ো, আর এমন ব্যবসা করো যাতে দুপক্ষ রাজি। কারীরা শব্দটি তিজারাতুন ও তিজারাতান, দুভাবেই পড়েছেন। তাবারী দুটি পাঠকেই সঠিক ও কাছাকাছি অর্থের বলে মানেন, যদিও দ্বিতীয়টি তাঁর বেশি পছন্দ।"
          },
          {
            "en": "As-Sa'di draws out what the two words require. Because it must be trade, it cannot be usury, which runs against trade's very purpose. Because it must be consent, each party must enter by choice, and what is sold must be known and within the seller's power to hand over; a sale built on uncertainty has no consent in it. Because Allah named consent rather than a formula, a contract stands by whatever word or act shows it. Mujahid, in at-Tabari, extends the phrase to a gift as well as a sale.",
            "bn": "এ দুটি শব্দ কী দাবি করে, সা'দী তা খুলে বলেন। লেনদেনটা ব্যবসা হতে হবে, তাই সুদ এর মধ্যে পড়ে না, কারণ সুদ ব্যবসার আসল উদ্দেশ্যেরই উল্টো। সম্মতি থাকতে হবে, তাই প্রত্যেক পক্ষকে নিজের ইচ্ছায় আসতে হবে। যা বিক্রি হচ্ছে তা জানা থাকতে হবে, আর তা হস্তান্তরের সামর্থ্য বিক্রেতার থাকতে হবে। অনিশ্চয়তার উপর দাঁড়ানো বেচাকেনায় সম্মতি বলে কিছু থাকে না। আর আল্লাহ যেহেতু কোনো বাঁধা বুলির নয়, সম্মতির শর্ত দিয়েছেন, তাই কথায় হোক বা কাজে, যেভাবে সম্মতি প্রকাশ পায় সেভাবেই চুক্তি হয়ে যায়। তাবারীর বর্ণনায় মুজাহিদ কথাটিকে বিক্রির পাশাপাশি উপহারেও প্রসারিত করেন।"
          },
          {
            "en": "Ma'arif al-Qur'an presses on what consent really is, since it can look given and still be forced. A trader who buys up a market's stock and raises the price leaves the buyer no choice. A husband who makes life so hard that his wife gives up her dower has received no free gift. A person who must pay a bribe to get a lawful task done has not truly agreed. Consent drawn out by pressure, Ma'arif says, is no consent at all.",
            "bn": "সম্মতি আসলে কী, মাআরিফুল কুরআন এ প্রশ্নে আরও গভীরে যায়। কারণ বাইরে থেকে সম্মতি দেওয়া মনে হলেও ভেতরে জোর থাকতে পারে। যে ব্যবসায়ী বাজারের সব মাল কিনে মজুত করে দাম চড়িয়ে দেয়, সে ক্রেতার হাতে আর কোনো বিকল্প রাখে না। যে স্বামী সংসার এমন কঠিন করে তোলে যে স্ত্রী মোহর ছেড়ে দিতে বাধ্য হয়, সে খুশিমনের কোনো দান পায়নি। বৈধ কাজ করিয়ে নিতে যাকে ঘুষ দিতে হয়, সে আসলে রাজি হয়নি। মাআরিফ বলে, চাপ দিয়ে আদায় করা সম্মতি কোনো সম্মতিই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Until the Two Part",
          "bn": "দুজন আলাদা না হওয়া পর্যন্ত"
        },
        "p": [
          {
            "en": "When is consent complete? At-Tabari sets out two views. In the first, each party keeps a choice after the contract until they leave the place where they agreed, or until one offers the other the choice and it is made. The judge Shurayh ruled this way, ash-Sha'bi held it, Ibn Sirin practised it, and at-Tabari grounds it in the Prophet's ﷺ saying on the two parties to a sale, reported by Ibn 'Umar. Al-Qurtubi names al-Shafi'i, ath-Thawri and al-Awza'i for it, and Ahmad, who held the choice open until they part bodily.",
            "bn": "সম্মতি পূর্ণ হয় কখন? তাবারী দুটি মত তুলে ধরেন। প্রথম মতে, চুক্তির পরও দুপক্ষেরই বেছে নেওয়ার সুযোগ থাকে, যতক্ষণ না তারা যেখানে সম্মত হয়েছে সেই জায়গা ছেড়ে যায়, কিংবা একজন অন্যজনকে বেছে নিতে বলে আর সে বেছে নেয়। বিচারক শুরাইহ এভাবে রায় দিয়েছেন, শা'বী এ মত পোষণ করতেন, ইবন সীরীন নিজে এভাবে কেনাবেচা করতেন। তাবারী এর ভিত্তি করেন বেচাকেনার দুই পক্ষ নিয়ে নবী ﷺ-এর সেই বাণীর উপর, যা ইবন উমর (রাঃ) বর্ণনা করেছেন। কুরতুবী এ মতে শাফিঈ, সাওরী ও আওযাঈর নাম নেন, আর আহমাদের কথাও বলেন, যাঁর মতে শরীরে আলাদা না হওয়া পর্যন্ত সুযোগ খোলা থাকে।"
          },
          {
            "en": "In the second view, the sale binds once both have agreed in words, whether they part or not, just as a marriage is concluded by words; the 'parting' in the hadith means parting in speech. At-Tabari names Malik, Abu Hanifa, Abu Yusuf and Muhammad for it, and al-Qurtubi records the Malikis citing 5:1, fulfil your contracts. At-Tabari and al-Qurtubi themselves prefer the first view. Ibn Kathir adds a related difference: al-Shafi'i required spoken acceptance, while Malik, Abu Hanifa and Ahmad accepted a sale completed by action alone.",
            "bn": "দ্বিতীয় মতে, মুখের কথায় দুজন সম্মত হলেই বেচাকেনা বাধ্যতামূলক হয়ে যায়, তারা আলাদা হোক বা না হোক, ঠিক যেমন বিয়েও সম্পন্ন হয় কথায়। এ মতে হাদীসের 'আলাদা হওয়া' মানে কথার মাধ্যমে আলাদা হওয়া। তাবারী এ মতে মালিক, আবু হানীফা, আবু ইউসুফ ও মুহাম্মাদের নাম নেন। কুরতুবী জানান, মালিকিরা দলিল দেন ৫:১ আয়াত দিয়ে: তোমরা চুক্তি পূরণ করো। তাবারী ও কুরতুবী নিজেরা প্রথম মতটিকে অগ্রাধিকার দেন। ইবন কাসীর এর সঙ্গে আরেকটি মতভেদ জোড়েন: শাফিঈর মতে মুখে কবুল বলা জরুরি, আর মালিক, আবু হানীফা ও আহমাদ শুধু কাজের মাধ্যমে সম্পন্ন বেচাকেনাও মেনে নিয়েছেন।"
          },
          {
            "en": "Al-Qurtubi counts Hakim ibn Hizam among the Companions who narrated the hadith. Sahih al-Bukhari (2079) gives his report in full: 'The two parties to a sale have the option as long as they have not parted,' or he said, 'until they part. If they are truthful and make things clear, their sale is blessed for them; and if they conceal and lie, the blessing of their sale is wiped out.' This article takes neither side on the option; the hadith's second half speaks to every sale.",
            "bn": "যে সাহাবীরা এ হাদীস বর্ণনা করেছেন, কুরতুবী তাঁদের মধ্যে হাকীম ইবন হিযাম (রাঃ)-এর নাম গুনেছেন। সহীহ বুখারীতে (২০৭৯) তাঁর বর্ণনাটি পুরোটা এরকম: 'বেচাকেনার দুই পক্ষের এখতিয়ার থাকে যতক্ষণ না তারা আলাদা হয়', অথবা তিনি বলেছেন, 'আলাদা হওয়া পর্যন্ত। তারা যদি সত্য বলে আর সব খুলে বলে, তবে তাদের বেচাকেনায় বরকত দেওয়া হয়। আর যদি গোপন করে ও মিথ্যা বলে, তবে তাদের বেচাকেনার বরকত মুছে ফেলা হয়।' এখতিয়ারের প্রশ্নে এ লেখা কোনো পক্ষ নেয় না। তবে হাদীসের দ্বিতীয় অংশ প্রতিটি বেচাকেনার জন্যই।"
          }
        ]
      },
      {
        "h": {
          "en": "Yourselves, or Each Other?",
          "bn": "নিজেকে, নাকি একে অপরকে?"
        },
        "p": [
          {
            "en": "Wa la taqtulu anfusakum: and do not kill yourselves. At-Tabari reads it as 'do not kill one another': the believers are a single community with one call and one religion, so whoever kills a fellow believer is as one who kills himself. As-Suddi glosses it 'the people of your religion', 'Ata' 'killing one another', and al-Hasan, in al-Baghawi, 'your brothers'. Al-Qurtubi reports that the interpreters agree the verse forbids people killing each other.",
            "bn": "ওয়া লা তাকতুলূ আনফুসাকুম: আর নিজেদের হত্যা করো না। তাবারী একে পড়েন 'একে অপরকে হত্যা করো না' অর্থে। তাঁর ব্যাখ্যায় মুমিনরা একই উম্মত, তাদের আহ্বান এক, দ্বীনও এক। তাই যে কোনো মুমিন ভাইকে হত্যা করে, সে যেন নিজেকেই হত্যা করল। সুদ্দী এর অর্থ করেন 'তোমাদের দ্বীনের লোক', আতা বলেন 'একে অপরকে হত্যা', আর বাগাভীর বর্ণনায় হাসান বলেন 'তোমাদের ভাইদের'। কুরতুবী জানান, তাফসীরকারেরা একমত যে আয়াতটি মানুষে মানুষে হত্যা নিষেধ করছে।"
          },
          {
            "en": "Others hear the plain words as well. Al-Baghawi records the view that a Muslim killing himself is meant; as-Sa'di joins the two, and Ma'arif al-Qur'an says the commentators agree it includes suicide. Al-Qurtubi extends it to a man who drives himself into deadly risk out of greed for the world and, he allows, to self-killing in a moment of distress or anger. A third reading takes killing as ruin: Abu 'Ubayda, in al-Baghawi, sets it beside 2:195, and as-Sa'di includes taking on dangers that end in death.",
            "bn": "আয়াতের সরল অর্থটাও শোনা হয়েছে। বাগাভী একটি মত উল্লেখ করেন যে এখানে মুসলিমের নিজেকে হত্যা করা উদ্দেশ্য। সা'দী দুটি অর্থকে একসঙ্গে রাখেন, আর মাআরিফুল কুরআন বলে, তাফসীরকারদের ঐকমত্যে এতে আত্মহত্যাও আছে। কুরতুবী একে টেনে নেন সেই লোক পর্যন্ত, যে দুনিয়ার লোভে নিজেকে প্রাণঘাতী ঝুঁকিতে ঠেলে দেয়। তিনি এ সম্ভাবনাও রাখেন যে অস্থিরতা বা রাগের মুহূর্তে নিজেকে শেষ করে দেওয়াও এর আওতায় পড়ে। তৃতীয় এক পাঠে হত্যা মানে ধ্বংস। বাগাভীর বর্ণনায় আবু উবাইদা একে ২:১৯৫ আয়াতের পাশে রাখেন, আর সা'দী এর মধ্যে ধরেন এমন বিপদে জড়ানো, যার শেষ মৃত্যু।"
          }
        ]
      },
      {
        "h": {
          "en": "A Freezing Night on Campaign",
          "bn": "অভিযানের এক হিমশীতল রাত"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Qurtubi cite a case. Abu Dawud (334) records from 'Amr ibn al-'As: 'I had a wet dream on a cold night in the campaign of Dhat as-Salasil, and I feared that if I bathed I would perish. So I performed tayammum, then led my companions in the dawn prayer. They mentioned it to the Prophet ﷺ, and he said: 'Amr, you led your companions in prayer while in a state of major impurity? I told him what had kept me from bathing, and said: I heard Allah say, do not kill yourselves; Allah is merciful to you. The Messenger of Allah ﷺ laughed and said nothing.'",
            "bn": "ইবন কাসীর ও কুরতুবী এর একটি দৃষ্টান্ত আনেন। আবু দাউদ (৩৩৪) আমর ইবনুল আস (রাঃ) থেকে বর্ণনা করেন: 'যাতুস সালাসিলের অভিযানে এক শীতের রাতে আমার স্বপ্নদোষ হলো। ভয় পেলাম, গোসল করলে মারা যাব। তাই তায়াম্মুম করে সঙ্গীদের নিয়ে ফজরের নামায পড়লাম। তারা নবী ﷺ-কে বিষয়টি জানাল। তিনি বললেন: আমর, তুমি জুনুব অবস্থায় সঙ্গীদের ইমামতি করেছ? গোসল থেকে কী আমাকে বিরত রেখেছিল, আমি তাঁকে জানালাম, আর বললাম: আমি আল্লাহকে বলতে শুনেছি, তোমরা নিজেদের হত্যা করো না, আল্লাহ তোমাদের প্রতি দয়ালু। রাসূলুল্লাহ ﷺ হাসলেন, কিছুই বললেন না।'"
          },
          {
            "en": "Abu Dawud gives it no grading of his own. In a second chain, through 'Amr's freed slave Abu Qays, 'Amr washes the folds of his body and makes ablution, with no mention of tayammum; Abu Dawud notes that al-Awza'i's version has it. Ibn Kathir, citing both chains, judges the chain through Abu Qays the more likely to be correct. Al-Qurtubi says the Prophet ﷺ affirmed 'Amr's reasoning: he laughed and said nothing.",
            "bn": "আবু দাউদ এ বর্ণনার উপর নিজে কোনো মান নির্ধারণ করেননি। আরেকটি সনদে, আমরের মুক্ত দাস আবু কাইসের মাধ্যমে, বর্ণনায় আছে যে আমর (রাঃ) শরীরের ভাঁজগুলো ধুয়ে নামাযের অযু করেন, সেখানে তায়াম্মুমের উল্লেখ নেই। আবু দাউদ এও জানান, আওযাঈর বর্ণনায় তায়াম্মুমের কথা আছে। ইবন কাসীর দুটি সনদই উল্লেখ করে আবু কাইসের সনদটিকে বেশি সঠিক হওয়ার সম্ভাবনাময় মনে করেন। কুরতুবী বলেন, নবী ﷺ আমরের যুক্তিকে স্বীকৃতি দিয়েছিলেন। তিনি হেসেছিলেন, কিছুই বলেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Limit Is Crossed",
          "bn": "যেখানে সীমা পেরিয়ে যায়"
        },
        "p": [
          {
            "en": "Then 4:30: whoever does that in aggression and injustice, We will make him enter a Fire. What 'that' points to is disputed. 'Ata', in at-Tabari, said the killing, and al-Qurtubi gives the reason: it is the nearest thing mentioned. As-Sa'di takes it as both the wealth and the killing; al-Muyassar names unlawful wealth such as theft, usurpation and cheating. At-Tabari's own choice is everything forbidden since 4:19, because each earlier section already carried its own threat.",
            "bn": "তারপর ৪:৩০: যে সীমালঙ্ঘন ও জুলুম করে এমন করবে, তাকে আমি আগুনে প্রবেশ করাব। 'এমন' বলতে কী বোঝানো হয়েছে, তা নিয়ে মতভেদ আছে। তাবারীর বর্ণনায় আতা বলেন, হত্যা। কুরতুবী কারণও দেন: উল্লিখিত বিষয়গুলোর মধ্যে এটিই সবচেয়ে কাছে। সা'দীর মতে এতে সম্পদ ও হত্যা দুটোই আছে, আর মুয়াসসার উল্লেখ করে হারাম সম্পদের কথা, যেমন চুরি, জবরদখল ও প্রতারণা। তাবারীর নিজের পছন্দ ৪:১৯ থেকে নিষিদ্ধ সবকিছু, কারণ এর আগের প্রতিটি অংশের সঙ্গে নিজস্ব হুঁশিয়ারি আগেই এসে গেছে।"
          },
          {
            "en": "The two qualifiers carry weight. Al-Baghawi and al-Qurtubi define 'udwan as overstepping the limit and zulm as putting a thing where it does not belong, and al-Qurtubi says the threat is tied to them so that oversight and error fall outside it. Ibn Kathir describes someone who knows the act is forbidden and dares to break it. At-Tabari explains 'easy for Allah': no one in His grasp can hold out against Him. The threat is Allah's to carry out; it gives no one the right to pronounce it over a particular person.",
            "bn": "দুটি বিশেষণ এখানে ভারী। বাগাভী ও কুরতুবী 'উদওয়ান'-এর অর্থ করেন সীমা ছাড়িয়ে যাওয়া, আর 'জুলম'-এর অর্থ কোনো কিছুকে তার জায়গা থেকে সরিয়ে ভুল জায়গায় রাখা। কুরতুবী বলেন, হুঁশিয়ারিকে এ দুটির সঙ্গে বাঁধা হয়েছে, যাতে ভুল ও অনবধানতায় ঘটে যাওয়া কাজ এর বাইরে থাকে। ইবন কাসীরের বর্ণনায় এ সেই লোক, যে হারাম জেনেও তা ভাঙার দুঃসাহস দেখায়। 'এটা আল্লাহর জন্য সহজ' কথার ব্যাখ্যায় তাবারী বলেন: যে তাঁর মুঠোয়, সে তাঁকে ঠেকাতে পারে না। এ হুঁশিয়ারি কার্যকর করা আল্লাহর কাজ। নির্দিষ্ট কোনো মানুষের উপর তা ঘোষণা করার অধিকার এ আয়াত কাউকে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "If Your Own Life Feels Heavy",
          "bn": "নিজের জীবন যদি ভারী লাগে"
        },
        "p": [
          {
            "en": "Because one reading of the verse speaks of taking one's own life, a word is owed to anyone reading this in pain, or grieving someone lost this way. Ibn Kathir and al-Baghawi bring prophetic narrations here that warn gravely against the act, some of them, Ibn Kathir notes, in the two Sahihs. We do not quote them. A warning is there to hold a person back before the step. This article passes no verdict on the end of anyone who has died this way; that knowledge is Allah's alone, and the grieving deserve gentleness, never blame.",
            "bn": "আয়াতের একটি পাঠে যেহেতু নিজের প্রাণ নেওয়ার কথা আছে, তাই যিনি কষ্ট বুকে নিয়ে এ লেখা পড়ছেন, কিংবা এভাবে কাউকে হারিয়ে শোক বইছেন, তাঁর জন্য কিছু কথা বলা দরকার। ইবন কাসীর ও বাগাভী এখানে নবী ﷺ-এর কিছু হাদীস আনেন, যেগুলো এ কাজ থেকে কঠোরভাবে সতর্ক করে। ইবন কাসীর জানান, এর কয়েকটি দুই সহীহ গ্রন্থে আছে। আমরা সেগুলো এখানে উদ্ধৃত করছি না। সতর্কবাণীর কাজ মানুষকে সেই পদক্ষেপের আগেই থামিয়ে রাখা। যিনি এভাবে মারা গেছেন, তাঁর পরিণতি নিয়ে এ লেখা কোনো রায় দেয় না। সে জ্ঞান কেবল আল্লাহর। আর শোকার্তদের প্রাপ্য কোমলতা, দোষারোপ কখনো নয়।"
          },
          {
            "en": "The verse ends on the very reason it forbids: Allah is ever merciful to you. As-Sa'di reads that mercy as His guarding your lives and wealth, and in the verse just before, Allah says He wants to lighten your load, for the human being was created weak (4:28). If thoughts of ending your life are with you, please do not carry them alone. Tell someone you trust today, and reach a qualified professional: a doctor, a counsellor, or the crisis service where you live. The One who calls Himself merciful to you has asked you to stay.",
            "bn": "আয়াতটি শেষ হয় ঠিক সেই কারণ দিয়ে, যে কারণে এ নিষেধ: আল্লাহ তোমাদের প্রতি সর্বদা দয়ালু। সা'দীর পাঠে সেই রহমত এই যে তিনি আপনাদের জীবন ও সম্পদ আগলে রেখেছেন। আর ঠিক আগের আয়াতে আল্লাহ বলেছেন, তিনি আপনাদের বোঝা হালকা করতে চান, কারণ মানুষকে দুর্বল করে সৃষ্টি করা হয়েছে (৪:২৮)। নিজের জীবন শেষ করে দেওয়ার চিন্তা যদি আপনার মনে আসে, দয়া করে একা তা বয়ে বেড়াবেন না। আজই আপনার বিশ্বস্ত কাউকে বলুন, আর একজন যোগ্য পেশাদারের কাছে যান: ডাক্তার, কাউন্সেলর, কিংবা আপনার এলাকার সংকটকালীন সহায়তা সেবা। যিনি নিজেকে আপনার প্রতি দয়ালু বলেছেন, তিনিই আপনাকে থেকে যেতে বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Honest Sale, Guarded Life",
          "bn": "সৎ বেচাকেনা, সুরক্ষিত জীবন"
        },
        "p": [
          {
            "en": "In daily life, the first half of the verse reaches every counter and every screen where something is sold. Price honestly, name the defect before the buyer finds it, and let no sale rest on a consent you know was pressured or uninformed. Al-Qurtubi calls it disliked for a trader to swear oaths to push his goods. Qatada, in at-Tabari, called trade provision from Allah for whoever seeks it with truthfulness and uprightness.",
            "bn": "প্রতিদিনের জীবনে আয়াতের প্রথম অংশ পৌঁছে যায় প্রতিটি দোকানে, প্রতিটি পর্দায়, যেখানেই কিছু বিক্রি হয়। সৎভাবে দাম ধরুন। ক্রেতা খুঁত খুঁজে পাওয়ার আগেই নিজে বলে দিন। আর এমন সম্মতির উপর কোনো বিক্রি দাঁড় করাবেন না, যা চাপে পড়ে বা না জেনে দেওয়া বলে আপনি জানেন। কুরতুবী বলেন, মাল চালানোর জন্য কসম খাওয়া ব্যবসায়ীর জন্য অপছন্দনীয়। তাবারীর বর্ণনায় কাতাদা বলেন, যে সততা ও সদাচার নিয়ে ব্যবসা খোঁজে, তার জন্য ব্যবসা আল্লাহর দেওয়া রিযিক।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing Tafsir al-Mazhari, extends this protection to men and women, kin and strangers, Muslims and non-Muslims living under a pact of peace: honest dealing has no exceptions. Where a modern contract or product leaves you unsure, take the question to a qualified scholar rather than guessing. And hold your own life the way as-Sa'di reads the verse: guarded by Allah, and not yours to waste or throw into ruin.",
            "bn": "মাআরিফুল কুরআন তাফসীরে মাযহারীর বরাতে বলে, এ সুরক্ষা নারী-পুরুষ, আত্মীয়-অনাত্মীয়, মুসলিম আর শান্তিচুক্তির অধীনে থাকা অমুসলিম, সবার জন্য। সৎ লেনদেনে তাই কোনো ব্যতিক্রম নেই। আধুনিক কোনো চুক্তি বা পণ্য নিয়ে মনে খটকা লাগলে আন্দাজে সিদ্ধান্ত না নিয়ে প্রশ্নটা একজন যোগ্য আলেমের কাছে নিয়ে যান। আর নিজের জীবনকে দেখুন সা'দীর পাঠের আলোয়: আল্লাহ একে আগলে রেখেছেন, একে নষ্ট করা বা ধ্বংসে ঠেলে দেওয়ার অধিকার আপনার নেই।"
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
  "4:46": {
    "sections": [
      {
        "h": {
          "en": "After Allah Suffices as Helper",
          "bn": "সাহায্যকারী হিসেবে আল্লাহই যথেষ্ট, তারপর"
        },
        "p": [
          {
            "en": "The verses before it speak of those given a portion of the Book, nasiban min al-kitab, who buy error and wish that the believers would lose the way (4:44). Then comes reassurance: Allah knows your enemies best, and Allah suffices as a protector and suffices as a helper (4:45). As-Sa'di reads 4:46 as the explanation of that error: then He made clear how they went astray, how they resisted, and how they preferred falsehood to truth. The verse names three things: words shifted from their places, an insolent answer, and a mocking address.",
            "bn": "এর ঠিক আগের আয়াতে আছে তাদের কথা, যাদের কিতাবের একটা অংশ দেওয়া হয়েছিল, নাসীবান মিনাল কিতাব। তারা গোমরাহি কিনে নেয় আর চায়, মুমিনরাও পথ হারাক (৪:৪৪)। তারপর আসে আশ্বাস: আল্লাহ তোমাদের শত্রুদের ভালো করেই জানেন, অভিভাবক হিসেবে আল্লাহই যথেষ্ট, সাহায্যকারী হিসেবেও আল্লাহই যথেষ্ট (৪:৪৫)। সা'দী ৪:৪৬-কে পড়েন সেই গোমরাহির ব্যাখ্যা হিসেবে: এবার আল্লাহ খুলে দেখালেন, তারা কীভাবে পথ হারাল, কীভাবে জেদ ধরল, আর কীভাবে সত্যের চেয়ে বাতিলকে বেশি পছন্দ করল। আয়াতে তিনটি জিনিসের উল্লেখ আছে: জায়গা থেকে সরানো কথা, ঔদ্ধত্যভরা এক জবাব, আর বিদ্রূপমাখা এক সম্বোধন।"
          },
          {
            "en": "This needs saying first. The verse opens with min alladhina hadu, which al-Baghawi and the Muyassar read as a party of the Jews; the grammar is set out below. It describes particular people around Madinah in the lifetime of the Prophet ﷺ, and it names them by what they did: shifting words, and insulting him to his face. It licenses nothing against any Jew today, or against anyone living, and this article speaks of no people as a whole. What the verse asks of its reader comes at the end.",
            "bn": "সবকিছুর আগে কথাটা পরিষ্কার করে বলা দরকার। আয়াতের শুরু মিনাল্লাযীনা হাদূ দিয়ে; বাগাভী ও মুয়াসসার এর অর্থ করেন ইহুদিদের একটি দল। ব্যাকরণের আলোচনা নিচে আসছে। এর বর্ণনা নবী ﷺ-এর জীবদ্দশায় মদীনা ও তার আশপাশের নির্দিষ্ট কিছু মানুষের, আর তাদের চেনানো হয়েছে তাদের কাজ দিয়ে: কথা বিকৃত করা, আর মুখের ওপর তাঁকে অপমান করা। আজকের কোনো ইহুদির বিরুদ্ধে, কিংবা জীবিত কোনো মানুষের বিরুদ্ধে, এ আয়াত কোনো কিছুর অনুমতি দেয় না। এই লেখাও কোনো জাতি বা গোষ্ঠীকে ঢালাওভাবে কিছু বলে না। আয়াতটি তার পাঠকের কাছে কী চায়, তা আসবে শেষে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Word Among Points To",
          "bn": "'মিন' শব্দটি কাদের দিকে ইঙ্গিত করে"
        },
        "p": [
          {
            "en": "At-Tabari opens his comment with a small word: min, among. One reading joins it to 4:44: have you not seen those given a portion of the Book, from among those who are Jews; the grammarians of Kufa mostly took it so. The other supplies an omitted word, some who shift words; the grammarians of Basra, he says, named it qawm, a people. At-Tabari prefers the first, because both descriptions belong to the same group. Later he places them: the Jews around the city the Prophet ﷺ emigrated to, in his time.",
            "bn": "মিন, অর্থাৎ 'মধ্য থেকে', ছোট্ট একটা শব্দ। তাবারী তাঁর আলোচনা শুরু করেন এটি দিয়েই। এক পাঠে শব্দটি ৪:৪৪-এর সঙ্গে যুক্ত: তুমি কি তাদের দেখোনি, যাদের কিতাবের একাংশ দেওয়া হয়েছিল, ইহুদিদের মধ্য থেকে? কুফার ব্যাকরণবিদদের বেশির ভাগ এভাবেই পড়তেন। অন্য পাঠে একটি শব্দ উহ্য ধরা হয়: ইহুদিদের মধ্যে এমন কিছু লোক আছে, যারা কথা বিকৃত করে। তাবারী জানান, বসরার ব্যাকরণবিদরা সেই উহ্য শব্দটিকে বলতেন কাওম, অর্থাৎ একদল লোক। তাবারী প্রথম পাঠটি পছন্দ করেন, কারণ দুটি বর্ণনাই একই দলের। পরে তিনি তাদের ঠিকানাও বলে দেন: নবী ﷺ যে শহরে হিজরত করেছিলেন, তাঁর যুগে তার আশপাশের ইহুদিরা।"
          },
          {
            "en": "Al-Qurtubi records the grammarians' split too. Az-Zajjaj says a reader may pause at the end of 4:45 only if min begins a new sentence; Sibawayh supplies qawm, al-Farra supplies man, someone who, and al-Mubarrad and az-Zajjaj reject dropping a relative word such as man. Al-Baghawi gives both readings, glossing the omitted word as fariq, a party, and the Muyassar reads a party of the Jews. Ibn Kathir calls this min explanatory, li-bayan al-jins, like the min of shun the filth of idols (22:30). As-Sa'di narrows it further: the scholars of misguidance among them. However the grammar runs, what follows is a description of conduct.",
            "bn": "কুরতুবীও ব্যাকরণবিদদের এই মতভেদ তুলে ধরেন। যাজ্জাজ বলেন, মিন যদি নতুন বাক্যের শুরু হয়, তবেই ৪:৪৫-এর শেষে থামা যায়। সীবাওয়াইহ উহ্য শব্দ ধরেন কাওম, ফাররা ধরেন মান, অর্থাৎ 'যে'। আর মুবাররাদ ও যাজ্জাজ 'মান'-এর মতো সম্বন্ধবাচক শব্দ উহ্য রাখার কথা মানেন না। বাগাভী দুটি পাঠই আনেন, আর দ্বিতীয়টিতে উহ্য শব্দের অর্থ করেন ফারীক, অর্থাৎ একটি দল। মুয়াসসারও পড়ে: ইহুদিদের একটি দল। ইবন কাসীর বলেন, এখানে মিন এসেছে ধরন বোঝাতে, লিবায়ানিল জিনস, যেমন 'মূর্তির অপবিত্রতা থেকে বেঁচে থাকো' (২২:৩০) আয়াতের মিন। সা'দী পরিসর আরও ছোট করে আনেন: তাদের মধ্যকার পথভ্রষ্ট আলেমরা। ব্যাকরণ যেভাবেই চলুক, এর পরে যা আসে তা আচরণের বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Words Moved From Where They Stood",
          "bn": "যে কথা তার জায়গায় রইল না"
        },
        "p": [
          {
            "en": "Yuharrifuna al-kalima 'an mawadi'ih: they shift words from their places. At-Tabari explains: they change their meaning and turn them away from their interpretation, and he reads 'an mawadi'ih as from their positions and from the senses that are truly theirs. He then cites Mujahid, for whom the words are the Torah and the act is the Jews' tabdil, changing, of it. Ibn Kathir puts the weight on meaning: they interpret it otherwise than its interpretation and explain it otherwise than what Allah intended, deliberately and as a fabrication.",
            "bn": "ইউহাররিফূনাল কালিমা আন মাওয়াদিইহী: তারা কথাগুলোকে তাদের জায়গা থেকে সরিয়ে দেয়। তাবারীর ব্যাখ্যা: তারা এর অর্থ বদলে দেয়, আসল ব্যাখ্যা থেকে ঘুরিয়ে দেয়। আন মাওয়াদিইহী বলতে তিনি বোঝেন: কথার নিজের অবস্থান থেকে, আর যে অর্থ সত্যিই তার, সেখান থেকে। এরপর তিনি মুজাহিদের মত আনেন। মুজাহিদের কাছে কথাগুলো হলো তাওরাত, আর কাজটি হলো ইহুদিদের হাতে তার তাবদীল, অর্থাৎ পরিবর্তন। ইবন কাসীর জোর দেন অর্থের ওপর: তারা ইচ্ছা করে, মনগড়াভাবে, এর এমন ব্যাখ্যা দেয় যা এর ব্যাখ্যা নয়, আর আল্লাহ যা বুঝিয়েছেন তার বাইরে গিয়ে এর অর্থ করে।"
          },
          {
            "en": "Al-Qurtubi, through al-Nahhas, also takes yuharrifun as interpreting it otherwise than its interpretation, and adds that Allah blamed them because they did it on purpose. He reports that Abu 'Abd ar-Rahman as-Sulami and Ibrahim an-Nakha'i read al-kalam, speech, in place of al-kalim, words. Al-Nahhas prefers al-kalim here, since they did not distort all speech, only the words of the Prophet ﷺ or what they had in the Torah. For 'an mawadi'ih al-Qurtubi gives: the description of the Prophet ﷺ, and al-Baghawi gives the same.",
            "bn": "কুরতুবী নাহহাসের সূত্রে ইউহাররিফূনের অর্থ করেন একই রকম: আসল ব্যাখ্যা বাদ দিয়ে অন্য ব্যাখ্যা দেওয়া। তিনি যোগ করেন, আল্লাহ তাদের নিন্দা করেছেন, কারণ তারা কাজটা জেনেশুনে করত। তিনি আরও জানান, আবু আবদির রহমান সুলামী ও ইবরাহীম নাখাঈ আল-কালিমের জায়গায় পড়তেন আল-কালাম, অর্থাৎ বক্তব্য। নাহহাস এখানে আল-কালিমকেই বেশি উপযুক্ত মনে করেন। কেননা তারা সব কথা বিকৃত করত না, করত নবী ﷺ-এর কথা, কিংবা তাওরাতে তাদের কাছে যা ছিল তা। আন মাওয়াদিইহী-র অর্থ কুরতুবী দেন: নবী ﷺ-এর গুণাবলির বর্ণনা। বাগাভীও একই কথা বলেন।"
          },
          {
            "en": "As-Sa'di widens it: they shift words by changing the wording or the meaning, or both. His example concerns application: descriptions in their books that fit Muhammad ﷺ alone, which they said were meant for someone else, and then concealed. Al-Baghawi carries a report from Ibn 'Abbas (RA) of another kind: they would come to the Prophet ﷺ and ask him about a matter, he would answer, thinking they would hold to his word, and once they had left they distorted what he said. The commentators differ over which words were moved, and how. This article records their views and makes no claim of its own about any scripture today.",
            "bn": "সা'দী প্রশ্নটাকে আরও বড় পরিসরে দেখেন: তারা কথা বিকৃত করে শব্দ বদলে, কিংবা অর্থ বদলে, কিংবা দুটোই বদলে। তাঁর দেওয়া উদাহরণ প্রয়োগ নিয়ে। তাদের গ্রন্থে এমন কিছু বর্ণনা ছিল, যা কেবল মুহাম্মাদ ﷺ-এর সঙ্গেই মেলে। তারা বলত, এর দ্বারা অন্য কাউকে বোঝানো হয়েছে, তারপর বিষয়টা চেপে যেত। বাগাভী ইবন আব্বাস (রাঃ) থেকে আরেক ধরনের বর্ণনা আনেন: তারা নবী ﷺ-এর কাছে এসে কোনো বিষয়ে জিজ্ঞেস করত। তিনি উত্তর দিতেন, আর ভাবতেন তারা তাঁর কথা মেনে নেবে। কিন্তু চলে যাওয়ার পর তারা তাঁর কথা বিকৃত করত। কোন কথা সরানো হয়েছিল আর কীভাবে, এ নিয়ে তাফসীরকারদের মত তাই ভিন্ন। এ লেখা তাঁদের মতগুলো তুলে রাখে, আজকের কোনো গ্রন্থ সম্পর্কে নিজের পক্ষ থেকে কোনো দাবি করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Sayings, Each Bent",
          "bn": "বাঁকানো তিনটি কথা"
        },
        "p": [
          {
            "en": "Wa yaquluna sami'na wa 'asayna: and they say, we hear and we disobey. Ibn Kathir gives it from Mujahid and Ibn Zayd: we hear what you have said, Muhammad, and we do not obey you in it. He finds this the most telling sign of their obstinacy, that they turn from the Book of Allah after they have understood it, knowing the sin and the punishment it brings. As-Sa'di sets the two halves side by side: shifting words was their state in knowledge, and this was their state in action and submission.",
            "bn": "ওয়া ইয়াকূলূনা সামি’না ওয়া আসাইনা: আর তারা বলে, আমরা শুনলাম এবং অমান্য করলাম। ইবন কাসীর মুজাহিদ ও ইবন যায়দ থেকে আনেন: হে মুহাম্মাদ, তুমি যা বলেছ তা আমরা শুনেছি, কিন্তু এ ব্যাপারে তোমার কথা মানব না। তাঁর মতে এখানেই তাদের জেদ সবচেয়ে স্পষ্ট। আল্লাহর কিতাব বুঝে নেওয়ার পরও তারা তা থেকে মুখ ফেরায়, অথচ জানে এতে কী গুনাহ আর কী শাস্তি। সা'দী দুটি অংশ পাশাপাশি রাখেন: কথা বিকৃত করা ছিল জ্ঞানের ক্ষেত্রে তাদের অবস্থা, আর এটা ছিল আমল ও আনুগত্যের ক্ষেত্রে তাদের অবস্থা।"
          },
          {
            "en": "Wa-sma' ghayra musma': and hear, without being made to hear. Ibn 'Abbas (RA), through ad-Dahhak, and Ibn Zayd take it as an insult, the way a man says to someone he abuses: hear, may you not hear. Mujahid and al-Hasan take it as hear, without what you say being accepted. At-Tabari rejects the second on grammar, since that sense would need ghayra masmu'; al-Nahhas, in al-Qurtubi, raises the same objection, and Ibn Kathir sides with at-Tabari. As-Suddi glosses it as hear, without being humbled. Al-Baghawi adds a view that they said hear aloud and may you not hear to themselves.",
            "bn": "ওয়াসমা’ গাইরা মুসমা’ইন: আর শোনো, না-শোনানো অবস্থায়। দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) এবং ইবন যায়দ একে গালি হিসেবে দেখেন, যেমন কেউ কাউকে গাল দিতে গিয়ে বলে: শোনো, তুমি যেন আর কিছু না শোনো। মুজাহিদ ও আল-হাসানের মতে অর্থ: শোনো, তবে তোমার কথা গ্রহণ করা হবে না। তাবারী ব্যাকরণের যুক্তিতে দ্বিতীয় মতটি নাকচ করেন, কারণ সে অর্থ হলে বলা হতো গাইরা মাসমূ’। কুরতুবীর বর্ণনায় নাহহাসও একই আপত্তি তোলেন, আর ইবন কাসীর তাবারীর পক্ষ নেন। সুদ্দী অর্থ করেন: শোনো, তবে অপমানিত না হয়ে। বাগাভী আরেকটি মত আনেন: তারা মুখে বলত 'শোনো', আর মনে মনে বলত 'তুমি যেন না শোনো'।"
          },
          {
            "en": "The third saying, ra'ina, and its replacement unzurna are discussed at 2:104 and not repeated here. Here 4:46 adds the manner: layyan bi-alsinatihim wa ta'nan fi ad-din, twisting their tongues and attacking the religion. Al-Qurtubi gives the root of layy as al-fatl, twisting: they bend their tongues away from the truth toward what is in their hearts. At-Tabari says they turned the word to the offensive one of its two meanings, slighting the right of the Prophet ﷺ. Al-Qurtubi reports that they told their companions: were he a prophet, he would know we insult him. Allah disclosed it to him, which al-Qurtubi counts among the signs of his prophethood.",
            "bn": "তৃতীয় কথাটি রাইনা, আর তার বদলে উনযুরনা বলার নির্দেশ। এ নিয়ে বিস্তারিত আলোচনা আছে ২:১০৪-এ, এখানে তার পুনরাবৃত্তি নেই। ৪:৪৬ যা যোগ করে তা হলো বলার ধরন: লাইয়্যান বিআলসিনাতিহিম ওয়া তা’নান ফিদ্দীন, জিহ্বা বাঁকিয়ে আর দ্বীনের ওপর আঘাত হেনে। কুরতুবী জানান, লাইয়ের মূল অর্থ আল-ফাতল, পাকানো বা মোচড়ানো। তারা জিহ্বাকে সত্য থেকে ঘুরিয়ে নিয়ে যায় অন্তরে যা আছে সেদিকে। তাবারী বলেন, শব্দটির দুই অর্থের মধ্যে তারা মন্দ অর্থটির দিকে তাকে ঘুরিয়ে দিত, নবী ﷺ-এর মর্যাদাকে তুচ্ছ করে। কুরতুবী আরও জানান, তারা নিজেদের লোকদের বলত: সে নবী হলে তো বুঝত যে আমরা তাকে গাল দিচ্ছি। আল্লাহ বিষয়টা তাঁর কাছে প্রকাশ করে দিলেন, আর কুরতুবী একে তাঁর নবুওয়াতের নিদর্শনগুলোর একটি বলে গণ্য করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Straight Words Beside Them",
          "bn": "পাশেই রাখা সোজা কথাগুলো"
        },
        "p": [
          {
            "en": "The verse then turns to counsel: had they said sami'na wa ata'na, we hear and we obey, and isma', hear, and unzurna, it would have been better for them and aqwam. The Muyassar sets out the exchange word for word: we obey in place of we disobey, hear without the added ghayra musma', and unzurna in place of ra'ina. At-Tabari draws aqwam from istiqamah, uprightness, as in aqwamu qila (73:6), more correct in speech, and glosses it as more just and more correct in what is said.",
            "bn": "এরপর আয়াতটি উপদেশের দিকে মোড় নেয়: তারা যদি বলত সামি’না ওয়া আতা’না, আমরা শুনলাম এবং মানলাম, আর বলত ইসমা’, শোনো, আর উনযুরনা, তবে তা হতো তাদের জন্য উত্তম, আর আকওয়াম। মুয়াসসার অদলবদলটা শব্দে শব্দে দেখিয়ে দেয়: অমান্য করলামের জায়গায় মানলাম, গাইরা মুসমা’ইন জুড়ে না দিয়ে শুধু শোনো, আর রাইনার জায়গায় উনযুরনা। তাবারীর মতে আকওয়াম এসেছে ইস্তিকামা থেকে, যার অর্থ সোজা থাকা, যেমন ৭৩:৬ আয়াতে আছে আকওয়ামু কীলা, কথায় অধিক সঠিক। তাঁর ব্যাখ্যায় আকওয়াম মানে কথায় অধিক ন্যায্য ও অধিক সঠিক।"
          },
          {
            "en": "At-Tabari fills in the better words: we have heard your word, Muhammad, obeyed your command and accepted what you brought from Allah; hear from us, and wait for us so that we may understand what you tell us. Ibn Zayd adds: do not hurry us. As-Sa'di explains why it was better: it held a fitting address and the courtesy owed to the Messenger, entry under obedience to Allah, and gentleness in asking to learn. The verse does not only expose the crooked phrase; it sets the straight phrase beside it.",
            "bn": "উত্তম কথাগুলো পুরো করে বললে কেমন হতো, তাবারী তা দেখান: হে মুহাম্মাদ, আমরা তোমার কথা শুনেছি, তোমার হুকুম মেনেছি, আল্লাহর কাছ থেকে তুমি যা এনেছ তা গ্রহণ করেছি। এবার আমাদের কথাও শোনো, আর একটু অপেক্ষা করো, যাতে তুমি যা বলছ তা আমরা বুঝে নিতে পারি। ইবন যায়দ যোগ করেন: আমাদের ব্যাপারে তাড়াহুড়া কোরো না। কেন এটা উত্তম ছিল, সা'দী তা বুঝিয়ে দেন। এতে আছে সুন্দর সম্বোধন, রাসূলের সঙ্গে কথা বলার উপযুক্ত আদব, আল্লাহর আনুগত্যের অধীনে প্রবেশ, আর জ্ঞান চাওয়ায় কোমলতা। আয়াতটি তাই কেবল বাঁকা কথাটা ধরিয়ে দেয় না, তার পাশেই রেখে দেয় সোজা কথাটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Cursed, and Believing Little",
          "bn": "লানত, আর সামান্য ঈমান"
        },
        "p": [
          {
            "en": "Wa lakin la'anahumu Allahu bi-kufrihim: but Allah cursed them for their disbelief. At-Tabari explains the curse as Allah disgracing them and putting them far from right guidance and from following the truth, and the disbelief as their denial of the prophethood of Muhammad ﷺ and of the guidance he brought from their Lord. Ibn Kathir says their hearts are driven away from good. The verse names the cause, and names it about the people just described.",
            "bn": "ওয়ালাকিল লা’আনাহুমুল্লাহু বিকুফরিহিম: কিন্তু তাদের কুফরের কারণে আল্লাহ তাদের লানত করেছেন। তাবারীর ব্যাখ্যায় লানত মানে, আল্লাহ তাদের লাঞ্ছিত করলেন, সঠিক পথ আর সত্যের অনুসরণ থেকে তাদের দূরে সরিয়ে দিলেন। আর কুফর মানে, মুহাম্মাদ ﷺ-এর নবুওয়াত এবং তাদের রবের কাছ থেকে তিনি যে হিদায়াত এনেছিলেন, তা অস্বীকার করা। ইবন কাসীর বলেন, তাদের অন্তর কল্যাণ থেকে বিতাড়িত। আয়াতটি কারণটাও বলে দেয়, আর বলে ঠিক সেই মানুষদের ব্যাপারে, যাদের বর্ণনা এইমাত্র দিল।"
          },
          {
            "en": "Then fa-la yu'minuna illa qalilan, and the commentators divide over it. At-Tabari reads it as little faith: they believe in the truth only a little. Ibn Kathir says they have no beneficial faith, pointing back to 2:88, and the Muyassar speaks of a belief too slight to benefit them. Al-Qurtubi has a little faith that does not earn the name, and calls the other reading, that only a few of them believe, far-fetched, since Allah has said He cursed them for their disbelief. Al-Baghawi takes that reading: a few of them, 'Abdullah ibn Salam (RA) and those who accepted Islam with him. The difference stays open.",
            "bn": "তারপর ফালা ইউ’মিনূনা ইল্লা কালীলা, আর 'সামান্য' কী, তা নিয়ে তাফসীরকারেরা দুই ভাগ। তাবারী পড়েন সামান্য ঈমান হিসেবে: সত্যকে তারা মানে খুব অল্পই। ইবন কাসীর বলেন, তাদের এমন ঈমান নেই যা কাজে আসে, আর তিনি ফিরিয়ে নিয়ে যান ২:৮৮-এর আলোচনায়। মুয়াসসারও বলে এমন অল্প বিশ্বাসের কথা, যা তাদের কোনো উপকারে আসে না। কুরতুবীর মতে এ এত অল্প ঈমান যে তাকে ঈমান নামই দেওয়া চলে না। অন্য পাঠটি, অর্থাৎ তাদের অল্প কয়েকজনই ঈমান আনবে, তিনি দূরবর্তী বলেন, কেননা আল্লাহ জানিয়েছেন, তাদের কুফরের কারণে তিনি তাদের লানত করেছেন। বাগাভী ঠিক সেই পাঠটিই নেন: তাদের অল্প কয়েকজন, আবদুল্লাহ ইবন সালাম (রাঃ) ও তাঁর সঙ্গে যাঁরা ইসলাম গ্রহণ করেছিলেন। মতভেদটি এখানে খোলাই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "When a Verse Felt Too Heavy",
          "bn": "যখন আয়াত ভারী মনে হলো"
        },
        "p": [
          {
            "en": "None of the tafsir fetched here attaches a sound hadith to this verse; they carry explanations from the Companions and the generations after them. A narration not tied to this verse turns on its key phrase. Muslim (125) narrates from Abu Hurayrah (RA) that when 2:284 was revealed, it weighed heavily on the Companions. They came to the Messenger of Allah ﷺ, knelt, and said: Messenger of Allah, we were charged with deeds we could bear, prayer, fasting, jihad and charity; now this verse has been sent down to you, and we cannot bear it.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো সহীহ হাদীস যুক্ত করেনি। সেখানে আছে সাহাবি ও পরবর্তী প্রজন্মের ব্যাখ্যা। তবে এমন একটি বর্ণনা আছে, যা এ আয়াতের সঙ্গে যুক্ত নয়, অথচ এর মূল কথাটিকে ঘিরেই আবর্তিত। মুসলিম (১২৫) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন: ২:২৮৪ নাযিল হলে সাহাবিদের কাছে তা খুব ভারী মনে হলো। তাঁরা রাসূলুল্লাহ ﷺ-এর কাছে এসে হাঁটু গেড়ে বসলেন এবং বললেন: হে আল্লাহর রাসূল, আমাদের এমন আমলের দায়িত্ব দেওয়া হয়েছিল যা আমরা পারি: নামাজ, রোজা, জিহাদ, সদকা। এখন আপনার ওপর এই আয়াত নাযিল হয়েছে, আর এটা আমাদের সাধ্যের বাইরে।"
          },
          {
            "en": "The Messenger of Allah ﷺ said: Do you want to say as the people of the two Books before you said, we hear and we disobey? Rather say: we hear and we obey; Your forgiveness, our Lord, and to You is the return. They said it, and when their tongues had yielded to it, dhallat biha alsinatuhum, Allah revealed 2:285, and then, in the narration's word, abrogated 2:284 by revealing 2:286. In 4:46 a tongue is twisted; here tongues are made to yield. And the warning was held up before his own Companions, at the moment a command felt heavy.",
            "bn": "রাসূলুল্লাহ ﷺ বললেন: তোমাদের আগের দুই কিতাবের অনুসারীরা যেমন বলেছিল, আমরা শুনলাম এবং অমান্য করলাম, তোমরাও কি তেমন বলতে চাও? বরং বলো: আমরা শুনলাম এবং মানলাম; হে আমাদের রব, আমরা তোমার ক্ষমা চাই, আর তোমার দিকেই ফিরে যাওয়া। তাঁরা তা-ই বললেন। যখন কথাগুলো তাঁদের জিহ্বায় সহজ হয়ে এল, যাল্লাত বিহা আলসিনাতুহুম, আল্লাহ নাযিল করলেন ২:২৮৫। তারপর, বর্ণনার ভাষায়, ২:২৮৬ নাযিল করে ২:২৮৪ রহিত করলেন। ৪:৪৬-এ জিহ্বা বাঁকানো হয়, এখানে জিহ্বা নরম হয়ে আসে। আর সতর্কবাণীটি তিনি তুলে ধরেছিলেন নিজের সাহাবিদের সামনেই, ঠিক যখন একটি হুকুম তাঁদের কাছে ভারী মনে হচ্ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Texts Moved in Our Own Hands",
          "bn": "আমাদের হাতেও আয়াত সরে যায়"
        },
        "p": [
          {
            "en": "The quickest way to move this verse from its place is to read it only as a report about others. As-Sa'di's example of tahrif was a text fitted to the wrong subject, and we do the same when we hear the Qur'an's warnings as meant for other people and its promises as meant for us. Or we quote in part: Allah wants ease for you (2:185) is quoted to drop a duty, while the same verse's so that you complete the count stays behind. Not a letter was changed; it was only moved.",
            "bn": "এই আয়াতকে তার জায়গা থেকে সরিয়ে ফেলার সবচেয়ে সহজ উপায়, একে শুধু অন্যদের সম্পর্কে একটা বিবরণ হিসেবে পড়া। সা'দীর দেওয়া তাহরীফের উদাহরণ ছিল ভুল ব্যক্তির ওপর বসিয়ে দেওয়া একটি বর্ণনা। আমরাও একই কাজ করি, যখন কুরআনের সতর্কবাণী শুনি অন্যদের জন্য, আর সুসংবাদ শুনি নিজেদের জন্য। কিংবা আমরা আয়াতের অংশবিশেষ উদ্ধৃত করি। দায়িত্ব এড়াতে আমরা টেনে আনি 'আল্লাহ তোমাদের জন্য সহজ চান' (২:১৮৫), অথচ একই আয়াতের 'যাতে তোমরা সংখ্যা পূর্ণ করো' অংশটি পড়ে থাকে পেছনে। একটি অক্ষরও বদলায়নি, শুধু জায়গা বদলেছে।"
          },
          {
            "en": "Al-Baghawi's report from Ibn 'Abbas names a habit closer to home: hearing an answer and bending it on the way out. A scholar answers with conditions, and by the time the answer reaches the family at home, only the permission is left. Pass an answer on as it was given, with its unless and its but, or do not pass it on.",
            "bn": "বাগাভীর আনা ইবন আব্বাস (রাঃ)-এর বর্ণনা আরেকটি অভ্যাসের কথা মনে করিয়ে দেয়, যা আমাদের আরও কাছের: উত্তর শুনে বেরিয়ে যাওয়ার পথেই তা বাঁকিয়ে ফেলা। আলেম শর্তসহ উত্তর দিলেন, অথচ উত্তরটা বাড়ির লোকদের কাছে পৌঁছাতে পৌঁছাতে শর্তগুলো ঝরে গিয়ে কেবল অনুমতিটুকু রয়ে গেল। কোনো উত্তর অন্যকে জানালে যেভাবে দেওয়া হয়েছিল সেভাবেই জানান, তার 'যদি না' আর 'তবে' সহ। নইলে জানাবেন না।"
          },
          {
            "en": "Ibn Kathir's point was that the refusal came after understanding, and most of our disobedience is of that kind: we know the ruling, and the deed answers 'asayna. We recite sami'na wa ata'na with the close of al-Baqarah (2:285); the verse wants it in conduct. Take the one command you have been explaining away, a prayer kept late, a debt left unpaid, a word you should take back, and obey it in some measure today, so that your deeds say the second phrase and not the first.",
            "bn": "ইবন কাসীরের কথা ছিল, অস্বীকারটা এসেছিল বুঝে নেওয়ার পরে। আমাদের নাফরমানিরও বেশির ভাগ এই রকম: হুকুমটা জানি, তবু কাজ দিয়ে জবাব দিই: আসাইনা, অমান্য করলাম। সূরা বাকারার শেষে আমরা পড়ি সামি’না ওয়া আতা’না (২:২৮৫), আর আয়াতটি চায় সেই কথা আচরণে ফুটে উঠুক। যে একটি হুকুমকে আপনি এতদিন ব্যাখ্যা দিয়ে পাশ কাটিয়ে এসেছেন, সেটা ধরুন: দেরিতে পড়া নামাজ, ফেলে রাখা ঋণ, কিংবা এমন কোনো কথা যা ফিরিয়ে নেওয়া উচিত। আজই তার কিছুটা হলেও পালন করুন, যাতে আপনার কাজ দ্বিতীয় কথাটি বলে, প্রথমটি নয়।"
          }
        ]
      }
    ]
  },
  "4:49-52": {
    "sections": [
      {
        "h": {
          "en": "Two Verdicts Spoken for Allah",
          "bn": "আল্লাহর নামে দুটি রায়"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and here it turns to some who had received earlier scripture. Just before, 4:47 calls them to believe before faces are effaced or they are cursed like the Sabbath-breakers, and 4:48 says Allah does not forgive the setting up of partners with Him. Two questions follow: 4:49 on those who claim purity, and 4:51 on those given a portion of the Book. 4:50 and 4:52 answer them, and 4:53 to 4:55 move on to dominion and envy.",
            "bn": "সূরা নিসা মাদানী। এখানে কথা হচ্ছে আগের কিতাব পাওয়া লোকদের কয়েকজনকে নিয়ে। ঠিক আগে ৪:৪৭ আয়াত তাদের ঈমান আনার ডাক দেয়, চেহারা মুছে দেওয়ার আগে, কিংবা শনিবারওয়ালাদের মতো লানত নেমে আসার আগে। ৪:৪৮ জানায়, আল্লাহর সঙ্গে শরিক করা তিনি মাফ করেন না। তারপর দুটি প্রশ্ন। ৪:৪৯ আয়াতের প্রশ্ন তাদের নিয়ে, যারা নিজেদের পবিত্র বলে দাবি করে। ৪:৫১ আয়াতের প্রশ্ন তাদের নিয়ে, যাদের কিতাবের একটা অংশ দেওয়া হয়েছিল। ৪:৫০ ও ৪:৫২ পালা করে দুটোর জবাব দেয়। এরপর ৪:৫৩ থেকে ৪:৫৫ চলে যায় রাজত্ব আর হিংসার প্রসঙ্গে।"
          },
          {
            "en": "One thing must be said first, and plainly. These verses describe particular people of that time: a group among those given scripture, who said particular things at a particular moment. At-Tabari ties the curse of 4:52 to what they did: their belief in jibt and taghut, their disbelief, and their telling the idolaters that they were better guided. The curse is on that deed and its doers then. The verses license nothing against any Jew or anyone else living, and they give no reader leave to curse anyone today.",
            "bn": "অন্য সব কথার আগে একটা কথা সোজাসুজি বলে রাখা দরকার। এ আয়াতগুলো সে যুগের নির্দিষ্ট কিছু মানুষের বর্ণনা দেয়। কিতাব পাওয়া লোকদের মধ্যে একটি দল, যারা নির্দিষ্ট এক সময়ে নির্দিষ্ট কিছু কথা বলেছিল। তাবারী ৪:৫২ আয়াতের লানতকে তাদের কাজের সঙ্গেই বাঁধেন: জিবত ও তাগূতে তাদের বিশ্বাস, তাদের কুফর, আর মূর্তিপূজারীদের তাদের এ কথা বলা যে তোমরাই বেশি সঠিক পথে। লানত সেই কাজের ওপর, আর সে সময়ে যারা তা করেছিল তাদের ওপর। কোনো ইহুদি বা আজ বেঁচে থাকা অন্য কোনো মানুষের বিরুদ্ধে এ আয়াতগুলো কিছুরই অনুমতি দেয় না। আজ কাউকে অভিশাপ দেওয়ার অধিকারও কোনো পাঠককে দেয় না।"
          },
          {
            "en": "What binds the four verses is a verdict spoken in Allah's name. As-Sa'di, on 4:50, says the substance of their self-praise was a claim that Allah had made their way true and the believers' way false, and he calls it the greatest of lies, turning truth into falsehood and falsehood into truth. 4:51 turns the same inversion outward, declaring idol-worshippers better guided. Both verdicts are Allah's alone, as 4:49 says: bal Allahu yuzakki man yasha', rather, Allah purifies whom He wills.",
            "bn": "চারটি আয়াতকে এক সুতোয় গেঁথেছে আল্লাহর নামে দেওয়া একটি রায়। ৪:৫০ আয়াতের ব্যাখ্যায় সা'দী বলেন, তাদের আত্মপ্রশংসার আসল কথা ছিল এই দাবি যে, তারা যে পথে আছে আল্লাহ সেটাকেই সত্য করেছেন, আর মুমিনরা যে পথে আছে সেটা বাতিল। তিনি একে বলেন সবচেয়ে বড় মিথ্যা, সত্যকে বাতিল আর বাতিলকে সত্য বানিয়ে উল্টে দেওয়া। ৪:৫১ আয়াতে সেই একই উল্টো রায় বাইরের দিকে ফেরানো: মূর্তিপূজারীদের বলা হলো বেশি সঠিক পথের লোক। দুটো রায়ই কেবল আল্লাহর এখতিয়ার, আর ৪:৪৯ আয়াত সে কথাই বলে: বাল আল্লাহু ইউযাক্কী মাঁই ইয়াশা, বরং আল্লাহ যাকে চান তাকেই পবিত্র করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Purify, Portion, Driven Away",
          "bn": "পবিত্র করা, অংশ, দূরে ঠেলা"
        },
        "p": [
          {
            "en": "Yuzakkuna anfusahum: they declare themselves pure. Al-Qurtubi defines tazkiyah here as purifying and declaring free of sins, and al-Baghawi glosses Allah's own yuzakki as to purify, clear of sins and set right. Then bal, rather, overturns the claim. At-Tabari calls it Allah's giving the lie to them: the truly purified is not whoever purifies himself, but whoever Allah purifies. The verse closes on fatil, which Ibn Kathir glosses, both times from Ibn Abbas, as the thread in the slit of a date-stone or what you roll between your fingers, calling the two close.",
            "bn": "ইউযাক্কূনা আনফুসাহুম: তারা নিজেদের পবিত্র করে, মানে নিজেদের পবিত্র বলে ঘোষণা দেয়। কুরতুবী এখানে তাযকিয়ার অর্থ করেন পবিত্র করা আর গুনাহ থেকে মুক্ত ঘোষণা করা। আল্লাহর নিজের 'ইউযাক্কী' শব্দের ব্যাখ্যায় বাগাভী বলেন: পবিত্র করা, গুনাহ থেকে মুক্ত করা, শুধরে দেওয়া। তারপর 'বাল', মানে বরং, দাবিটাকে উল্টে দেয়। তাবারী বলেন, এর মাধ্যমে আল্লাহ নিজেদের পবিত্র দাবিকারীদের মিথ্যাবাদী সাব্যস্ত করেছেন। নিজেকে নিজে পবিত্র ঘোষণা করলেই কেউ পবিত্র হয় না; পবিত্র সে-ই, যাকে আল্লাহ পবিত্র করেন। আয়াত শেষ হয় 'ফাতীল' শব্দে। ইবন কাসীর দুটি ব্যাখ্যা আনেন, দুটোই ইবন আব্বাস (রাঃ) থেকে: খেজুরের বিচির খাঁজে থাকা সুতোর মতো আঁশ, আর আঙুলের মাঝে ঘষলে যে ময়লা পাকিয়ে ওঠে। তাঁর মতে দুটো কাছাকাছি।"
          },
          {
            "en": "Alam tara, have you not seen, opens both questions. At-Tabari reads it as have you not seen with your heart, O Muhammad; al-Muyassar as have you not known; as-Sa'di calls the first Allah's call to His servants to wonder, and a rebuke. Of nasiban min al-kitab, a portion of the Book, at-Tabari says they had a share of Allah's Book and knew it, yet believed in jibt and taghut knowing that to be disbelief. Ahda sabila he glosses as more upright and just in path, calling the phrase a figure of speech.",
            "bn": "'আলাম তারা', তুমি কি দেখোনি, দুটি প্রশ্নই এভাবে শুরু হয়। তাবারী এর অর্থ করেন: হে মুহাম্মাদ, তুমি কি অন্তর দিয়ে দেখোনি? মুয়াসসার লেখে: তুমি কি জানো না? সা'দী প্রথম প্রশ্নটিকে বলেন বান্দাদের প্রতি আল্লাহর আহ্বান, যেন তারা অবাক হয়ে দেখে, সঙ্গে ভর্ৎসনাও। 'নাসীবাম মিনাল কিতাব', কিতাবের একটা অংশ: তাবারী বলেন, তাদের আল্লাহর কিতাবের একটা ভাগ দেওয়া হয়েছিল এবং তারা তা জানত। তবু তারা জিবত ও তাগূতে বিশ্বাস করত, অথচ জানত যে এমন বিশ্বাস কুফর। 'আহদা সাবীলা', পথের দিক থেকে বেশি হেদায়েতপ্রাপ্ত। তাবারী এর মানে করেন বেশি সোজা, বেশি ন্যায্য পথ। সঙ্গে বলেন, কথাটা একটা উপমা।"
          },
          {
            "en": "La'anahumu llah: Allah has cursed them. Explaining the same verb at 2:88, al-Qurtubi says the root of la'n is driving away and putting at a distance, so the wolf is called la'in: Allah put them far from His mercy, or, in other views he reports, from His enabling grace and guidance, or from all good. At-Tabari on 4:52 says Allah disgraced them and removed them from His mercy. A nasir, as-Sa'di explains, takes charge of a person, sees to his interests and shields him from harm; to have none is the utmost of being forsaken.",
            "bn": "লা'আনাহুমুল্লাহ: আল্লাহ তাদের লানত করেছেন। একই ক্রিয়ার ব্যাখ্যায় ২:৮৮ আয়াতে কুরতুবী বলেন, আরবি ভাষায় লা'নের মূল অর্থ তাড়িয়ে দেওয়া, দূরে সরিয়ে দেওয়া। এজন্য নেকড়েকে বলা হয় লা'ঈন। তাঁর মতে অর্থ দাঁড়ায়: আল্লাহ তাদের নিজের রহমত থেকে দূরে সরিয়ে দিয়েছেন। তিনি আরও দুটি মত আনেন: তাওফীক ও হেদায়েত থেকে দূরে, কিংবা সব কল্যাণ থেকে দূরে। ৪:৫২ আয়াতে তাবারী বলেন, আল্লাহ তাদের লাঞ্ছিত করেছেন এবং রহমত থেকে দূর করে দিয়েছেন। 'নাসীর' মানে সাহায্যকারী। সা'দীর বর্ণনায় সে এমন কেউ, যে মানুষের দায়িত্ব নেয়, তার ভালোমন্দ দেখে, বিপদ থেকে আগলে রাখে। এমন সাহায্যকারী না থাকাকে তিনি বলেন চূড়ান্ত অসহায় হয়ে পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Purity, Which Idols",
          "bn": "কার পবিত্রতা, কোন উপাস্য"
        },
        "p": [
          {
            "en": "The commentators differ on what the claim was. In reports at-Tabari carries, Qatada and al-Hasan point to the words we are the children of Allah and His beloved, and al-Hasan adds that none will enter Paradise except a Jew or a Christian. Ad-Dahhak has them say their sins were only like their children's on the day they are born. Ibn Kathir cites Mujahid and Ikrimah: they put their children forward to lead the prayer, as having no sin. Al-Qurtubi brings Ibn Mas'ud's view, that it was their praise of each other.",
            "bn": "পবিত্রতার দাবিটা আসলে কী ছিল, তা নিয়ে মুফাসসিরদের মত আলাদা। তাবারীর আনা বর্ণনায় কাতাদা ও হাসান বলেন, দাবিটা ছিল তাদের এই কথা: আমরা আল্লাহর সন্তান, তাঁর প্রিয়জন। হাসান সঙ্গে আরেকটি কথা জোড়েন: ইহুদি বা খ্রিস্টান ছাড়া কেউ জান্নাতে যাবে না। দাহহাকের বর্ণনায় তারা বলত, জন্মের দিন আমাদের সন্তানদের যতটুকু গুনাহ থাকে, আমাদের গুনাহও ততটুকুই। ইবন কাসীর মুজাহিদ ও ইকরিমার মত আনেন: তারা শিশুদের নিষ্পাপ মনে করে নামাজে ইমাম বানিয়ে সামনে দাঁড় করাত। কুরতুবী আনেন ইবন মাসঊদ (রাঃ)-এর মত: এ ছিল তাদের একে অপরের প্রশংসা।"
          },
          {
            "en": "Two of them weigh the views and part ways. At-Tabari judges soundest their calling themselves sinless and Allah's children and beloved, since the verse says they purified themselves, no one else. Al-Qurtubi holds Ibn Mas'ud's reading, praise of each other, the best that was said and the plain sense. Both set aside the children at prayer: at-Tabari says it would need a binding report, al-Qurtubi that it is far from the verse's aim. As-Sa'di widens the rebuke to anyone praising himself for what is not in him.",
            "bn": "দুজন মুফাসসির মতগুলো যাচাই করে দুই দিকে যান। তাবারীর বিচারে সবচেয়ে সঠিক ব্যাখ্যা হলো: তারা নিজেদের নিষ্পাপ আর আল্লাহর সন্তান ও প্রিয়জন বলে দাবি করত। কারণ আয়াত বলছে, তারা পবিত্র বলত নিজেদেরকেই, অন্য কাউকে নয়। কুরতুবীর কাছে ইবন মাসঊদ (রাঃ)-এর ব্যাখ্যা, অর্থাৎ পরস্পরের প্রশংসা, সবচেয়ে ভালো এবং আয়াতের সরাসরি অর্থ। শিশুদের ইমাম বানানোর ব্যাখ্যা দুজনেই সরিয়ে রাখেন। তাবারী বলেন, অকাট্য কোনো বর্ণনা ছাড়া এর সত্যতা জানার উপায় নেই। কুরতুবী বলেন, এটা আয়াতের উদ্দেশ্য থেকে দূরে। সা'দী ভর্ৎসনাটা আরও ছড়িয়ে দেন: যে নিজের এমন গুণের প্রশংসা করে যা তার মধ্যে নেই, সে-ও এর আওতায়।"
          },
          {
            "en": "Jibt and taghut divide them further. At-Tabari carries Umar's saying that jibt is sorcery and taghut is Shaytan, Ikrimah's that they were two idols, and a report from Ibn Abbas that jibt is the idols and taghut those who stood before them speaking lies in their name. Other reports, from Ibn Abbas and ad-Dahhak, make jibt Huyayy ibn Akhtab and taghut Ka'b ibn al-Ashraf; a report from Mujahid makes jibt Ka'b and taghut a devil in human form. Malik, in Ibn Kathir and al-Qurtubi, says taghut is whatever is worshipped besides Allah.",
            "bn": "জিবত আর তাগূতের অর্থ নিয়ে মতভেদ আরও বেশি। তাবারী উমর (রাঃ)-এর কথা আনেন: জিবত মানে জাদু, তাগূত মানে শয়তান। ইকরিমার মতে এ দুটি ছিল দুটি মূর্তি। ইবন আব্বাস (রাঃ)-এর এক বর্ণনায় জিবত হলো মূর্তিগুলো, আর তাগূত তারা, যারা মূর্তির সামনে দাঁড়িয়ে তাদের নামে মিথ্যা কথা বলত। ইবন আব্বাস (রাঃ) ও দাহহাকের আরেক বর্ণনায় জিবত হুয়াই ইবন আখতাব, তাগূত কা'ব ইবনুল আশরাফ। মুজাহিদের এক বর্ণনায় আবার জিবত কা'ব, আর তাগূত মানুষের রূপ ধরা এক শয়তান। ইবন কাসীর ও কুরতুবী ইমাম মালিকের মত আনেন: আল্লাহ ছাড়া যার ইবাদত করা হয়, সেটাই তাগূত।"
          }
        ]
      },
      {
        "h": {
          "en": "As the Reports Tell It",
          "bn": "বর্ণনায় যেমন এসেছে"
        },
        "p": [
          {
            "en": "At-Tabari settles the words by taking all of these in. Jibt and taghut, he says, name anything venerated with worship, obedience or submission besides Allah, whether stone, human or devil: the idols, the devils obeyed in disobedience, the sorcerer and soothsayer whose words were accepted, and the two leaders named in the reports, whom their people obeyed against Allah. Al-Qurtubi calls good both Malik's view and the view that they are anything worshipped, or obeyed in disobedience, besides Allah. As-Sa'di counts in sorcery, soothsaying, worship of others and obedience to Shaytan.",
            "bn": "শব্দ দুটির অর্থ তাবারী মীমাংসা করেন সবগুলো মতকে একসঙ্গে ধারণ করে। তাঁর মতে জিবত ও তাগূত এমন সবকিছুর নাম, আল্লাহকে বাদ দিয়ে যাকে ইবাদত, আনুগত্য বা বশ্যতা দিয়ে সম্মান করা হয়, তা পাথর হোক, মানুষ হোক বা শয়তান। তাই মূর্তিগুলো ছিল জিবত ও তাগূত। গুনাহের কাজে যে শয়তানদের মানা হতো তারাও, যে জাদুকর ও গণকের কথা লোকে মেনে নিত তারাও। বর্ণনায় নাম আসা দুই নেতাও, কারণ তাদের লোকেরা আল্লাহর অবাধ্য হয়ে তাদের কথা মানত। কুরতুবী ইমাম মালিকের মতকে ভালো বলেন। আরেকটি মতকেও ভালো বলেন: আল্লাহ ছাড়া যারই ইবাদত হয়, বা গুনাহের কাজে যাকেই মানা হয়। সা'দী এর মধ্যে গোনেন জাদু, গণকগিরি, আল্লাহ ছাড়া অন্যের ইবাদত আর শয়তানের আনুগত্য।"
          },
          {
            "en": "On who told the idolaters they were better guided, at-Tabari gathers two sets of reports; none of the commentators fetched here grades them. In the first, from Ikrimah (partly through Ibn Abbas), as-Suddi and Mujahid, Ka'b ibn al-Ashraf came to Makkah, Quraysh weighed their feeding of pilgrims and keeping of kinship against the Prophet ﷺ, and he said they were better. In the second, from Ibn Abbas through Ibn Ishaq, it was a group who gathered the confederates, Huyayy ibn Akhtab among them. Al-Baghawi, citing the commentators, places the visit after Uhud and adds a demand to bow to two idols.",
            "bn": "মূর্তিপূজারীদের কে বলেছিল যে তোমরাই বেশি সঠিক পথে, সে বিষয়ে তাবারী দুই ধরনের বর্ণনা জড়ো করেন। এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এগুলোর মান যাচাই করে মন্তব্য দেয়নি। প্রথম ধরনের বর্ণনা ইকরিমা (কিছু তাঁর সূত্রে ইবন আব্বাস (রাঃ) থেকে), সুদ্দী ও মুজাহিদের। সেখানে কা'ব ইবনুল আশরাফ মক্কায় আসে। কুরাইশ হাজীদের খাওয়ানো আর আত্মীয়তার বন্ধন রক্ষার কথা তুলে নিজেদের নবী ﷺ-এর সঙ্গে তুলনা করে, আর সে বলে, তোমরাই ভালো। দ্বিতীয় বর্ণনাটি ইবন ইসহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে। তাতে বলা হয়, এরা ছিল আহযাব, অর্থাৎ সম্মিলিত বাহিনী জড়ো করা একটি দল, যাদের মধ্যে ছিল হুয়াই ইবন আখতাব। বাগাভী মুফাসসিরদের বরাতে সফরটিকে উহুদের পরে রাখেন। সঙ্গে যোগ করেন, তাদের কাছে দুটি মূর্তিকে সিজদা করার দাবি তোলা হয়েছিল।"
          },
          {
            "en": "At-Tabari's own conclusion leaves the names open: the soundest view, he says, is that this is Allah's report about a group of the People of the Book, perhaps the group Ibn Abbas named, or Huyayy and another with him, Ka'b or someone else. Ibn Kathir notes only that the story comes by more than one route. Against this background he reads no helper: they sought the idolaters' help and spoke to win them over, and the confederates did march, but 33:25 records that Allah turned them back in their rage.",
            "bn": "তাবারীর নিজের সিদ্ধান্তে নামগুলো খোলা থাকে। তিনি বলেন, সবচেয়ে সঠিক মত হলো: এ আল্লাহর পক্ষ থেকে আহলে কিতাবের একটি দলের খবর। দলটি হতে পারে ইবন আব্বাস (রাঃ)-এর নাম বলা সেই দল, কিংবা হুয়াই আর তার সঙ্গের কেউ, সে কা'ব হোক বা অন্য কেউ। ইবন কাসীর শুধু জানান, ঘটনাটি একাধিক সূত্রে এসেছে। এ পটভূমিতে ইবন কাসীর 'সাহায্যকারী পাবে না' কথাটার ব্যাখ্যা দেন। তারা মুশরিকদের কাছে সাহায্য চাইতে গিয়েছিল, তাদের মন জয় করতেই ও কথা বলেছিল। জোটের বাহিনী এসেছিলও। কিন্তু ৩৩:২৫ আয়াত জানায়, আল্লাহ তাদের আক্রোশসহ ফিরিয়ে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "I Reckon Him So",
          "bn": "আমার ধারণা, সে এমন"
        },
        "p": [
          {
            "en": "No tafsir fetched here attaches a sound hadith to 4:51 or 4:52. For 4:49, al-Qurtubi and Ma'arif al-Qur'an bring a narration that Muslim records, 2142. Muhammad ibn Amr ibn Ata named his daughter Barrah, and Zaynab bint Abi Salamah told him the Prophet ﷺ had forbidden that name. She had been called Barrah herself, and he ﷺ said: Do not claim purity for yourselves; Allah knows best the people of righteousness among you. Asked what to name her, he said: Name her Zaynab.",
            "bn": "এখানে দেখা কোনো তাফসীর ৪:৫১ বা ৪:৫২ আয়াতের সঙ্গে সহীহ কোনো হাদীস জোড়েনি। ৪:৪৯ আয়াতের সঙ্গে কুরতুবী ও মাআরিফুল কুরআন একটি বর্ণনা আনেন, যা মুসলিম লিপিবদ্ধ করেছেন (২১৪২)। মুহাম্মাদ ইবন আমর ইবন আতা মেয়ের নাম রেখেছিলেন বাররা। যায়নাব বিনতে আবী সালামা তাঁকে জানালেন, নবী ﷺ এ নাম নিষেধ করেছেন। তাঁর নিজের নামও ছিল বাররা, আর নবী ﷺ বলেছিলেন: তোমরা নিজেদের পবিত্র বলে দাবি কোরো না। তোমাদের মধ্যে কে নেককার, আল্লাহই ভালো জানেন। লোকেরা জিজ্ঞেস করল, তাহলে কী নাম রাখব? তিনি বললেন: ওর নাম রাখো যায়নাব।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi bring Abu Bakrah's report, which al-Bukhari records, 2662. A man praised another in the Prophet's ﷺ presence, and he said: Woe to you, you have cut your companion's neck, you have cut your companion's neck, repeatedly. Then he said: Whoever among you must praise his brother, let him say: I reckon so-and-so, and Allah is his reckoner, and I declare no one pure before Allah; I reckon him such and such, if he knows that of him. Al-Qurtubi adds that praising a good deed to encourage it is not forbidden flattery.",
            "bn": "ইবন কাসীর ও কুরতুবী আবু বাকরা (রাঃ)-এর বর্ণনাটি আনেন, যা বুখারী লিপিবদ্ধ করেছেন (২৬৬২)। নবী ﷺ-এর সামনে এক লোক আরেকজনের প্রশংসা করল। তিনি বললেন: আফসোস তোমার জন্য! তুমি তো তোমার সাথীর গলা কেটে দিলে, তোমার সাথীর গলা কেটে দিলে। কথাটা তিনি কয়েকবার বললেন। তারপর বললেন: তোমাদের কাউকে যদি ভাইয়ের প্রশংসা করতেই হয়, সে যেন বলে: অমুককে আমি এমন মনে করি, তার হিসাব আল্লাহর কাছে, আল্লাহর ওপর দিয়ে আমি কাউকে পবিত্র ঘোষণা করি না; আমি তাকে এমন এমন মনে করি। তাও যদি সে তার সম্পর্কে তা জানে। কুরতুবী যোগ করেন, ভালো কাজে উৎসাহ দিতে সে কাজের প্রশংসা করা নিষিদ্ধ তোষামোদ নয়।"
          },
          {
            "en": "On the curse, Ma'arif al-Qur'an sets out rules under this verse: invoking la'nah on a particular person, even a sinner, is not permissible unless it is known that he died in disbelief, and only Allah knows how a person will end. It also brings a general narration, not about this verse, which at-Tirmidhi records, 1977, grading it hasan gharib: The believer is not one who taunts, nor one who curses, nor one who is obscene, nor one who is foul. The verdict of 4:52 was Allah's to give, and it does not pass to our tongues.",
            "bn": "লানতের বিষয়ে মাআরিফুল কুরআন এ আয়াতের অধীনে কয়েকটি বিধান দেয়। নির্দিষ্ট কোনো মানুষের ওপর লানত করা জায়েয নয়, সে গুনাহগার হলেও, যতক্ষণ না জানা যায় যে সে কুফরের ওপর মারা গেছে। আর মানুষের শেষ পরিণতি কেবল আল্লাহই জানেন, সে কথাও গ্রন্থটি মনে করিয়ে দেয়। গ্রন্থটি একটি সাধারণ হাদীসও আনে, যা এ আয়াতকে ঘিরে বর্ণিত নয়। তিরমিযী তা লিপিবদ্ধ করেছেন (১৯৭৭) এবং হাসান গরীব বলেছেন: মুমিন খোঁচা দিয়ে কথা বলে না, লানত করে না, অশ্লীল হয় না, কটুভাষী হয় না। ৪:৫২ আয়াতের রায় দেওয়ার অধিকার ছিল আল্লাহর। সে রায় আমাদের মুখে তুলে নেওয়ার জিনিস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Sisters From Six Surahs",
          "bn": "ছয় সূরা থেকে সাথী আয়াত"
        },
        "p": [
          {
            "en": "Ibn Kathir and al-Qurtubi both set 53:32 beside 4:49: so do not claim purity for yourselves; He knows best who is mindful of Him. The claims themselves are quoted in 5:18 and 2:111. Al-Qurtubi and al-Baghawi cite 16:36, worship Allah and shun taghut, and 4:60, where some wish to take their disputes to taghut. Ma'arif al-Qur'an sets 7:175 beside 4:51: the man given Our signs who slipped away from them.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই ৪:৪৯ আয়াতের পাশে রাখেন ৫৩:৩২: অতএব তোমরা নিজেদের পবিত্র বলে দাবি কোরো না, কে তাকওয়া অবলম্বন করেছে তিনিই ভালো জানেন। দাবিগুলো নিজেই উদ্ধৃত হয়েছে ৫:১৮ ও ২:১১১ আয়াতে। কুরতুবী ও বাগাভী উল্লেখ করেন ১৬:৩৬, আল্লাহর ইবাদত করো আর তাগূত থেকে দূরে থাকো। আর ৪:৬০, যেখানে কিছু লোক বিবাদের মীমাংসা তাগূতের কাছে নিতে চায়। মাআরিফুল কুরআন ৪:৫১ আয়াতের পাশে রাখে ৭:১৭৫: যে লোককে আমার নিদর্শন দেওয়া হয়েছিল, আর সে তা থেকে বেরিয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "When My Side Needs Me",
          "bn": "নিজের পক্ষ যখন ডাকে"
        },
        "p": [
          {
            "en": "Begin with self-praise, turned inward. Ibn Kathir, from at-Tabari, and al-Baghawi carry Ibn Mas'ud's words: a man leaves home with his religion, meets someone who can neither help nor harm him, tells him by Allah, you are such and such, and comes home with nothing of his religion left; then he recited 4:49. In a week that might mean flattering someone for a favour, or retelling each quarrel so that I come out pure. Ma'arif al-Qur'an allows speaking of a trait of one's own as thanks for Allah's blessing, when the dangers it names, pride first, are absent.",
            "bn": "শুরু করা যাক আত্মপ্রশংসা দিয়ে, নিজের দিকে তাকিয়ে। ইবন কাসীর তাবারীর সূত্রে, আর বাগাভীও, ইবন মাসঊদ (রাঃ)-এর কথা আনেন: মানুষ দ্বীন নিয়ে ঘর থেকে বের হয়। এমন একজনের দেখা পায়, যে তার কোনো উপকার বা ক্ষতি করার ক্ষমতা রাখে না। তাকে বলে, আল্লাহর কসম, আপনি তো এমন, তেমন। তারপর ঘরে ফেরে, দ্বীনের কিছুই আর সঙ্গে থাকে না। এরপর তিনি ৪:৪৯ আয়াত পড়েন। আমাদের সপ্তাহে এর চেহারা হতে পারে কোনো সুবিধার জন্য কারও তোষামোদ, কিংবা প্রতিটি ঝগড়ার গল্প এমনভাবে বলা যাতে আমি নির্দোষ থাকি। মাআরিফুল কুরআন বলে, অহংকারসহ যেসব বিপদের কথা সে তুলে ধরে সেগুলো না থাকলে, আল্লাহর নিয়ামতের শুকরিয়া হিসেবে নিজের কোনো গুণের কথা বলা যায়।"
          },
          {
            "en": "Then siding with wrong because it serves our faction. As Ibn Kathir reads the reports, the verdict better guided was given to win allies, and Ma'arif al-Qur'an draws the lesson that knowledge from a book does not by itself bring benefit; greed and desire can make a person trade away his religion. In a family feud, a quarrel at work, a mosque committee dispute, do I call my side right because it is right, or because it is mine? Would my verdict survive the alliances reversing?",
            "bn": "এরপর নিজের দলের স্বার্থে অন্যায়ের পক্ষ নেওয়া। ইবন কাসীর বর্ণনাগুলো যেভাবে পড়েন, তাতে 'বেশি সঠিক পথে' রায়টা দেওয়া হয়েছিল মিত্র জোগাড় করতে। মাআরিফুল কুরআন এখান থেকে শিক্ষা টানে: কিতাব থেকে পাওয়া জ্ঞান নিজে নিজে উপকার এনে দেয় না। লোভ আর প্রবৃত্তি মানুষকে দিয়ে তার দ্বীনটাই বেচিয়ে ছাড়তে পারে। পারিবারিক বিবাদে, অফিসের ঝগড়ায়, মসজিদ কমিটির টানাপোড়েনে আমি কি নিজের পক্ষকে ঠিক বলি কারণ সেটা ঠিক, নাকি কারণ সেটা আমার? জোটগুলো উল্টে গেলেও কি আমার রায় একই থাকত?"
          }
        ]
      },
      {
        "h": {
          "en": "Asking the One Who Purifies",
          "bn": "যিনি পবিত্র করেন, তাঁর কাছে"
        },
        "p": [
          {
            "en": "None of the commentators fetched here attaches a supplication to these verses. Part of a longer du'a that Muslim records, 2722, from Zayd ibn Arqam uses the verse's own word; it is a general Sunnah du'a, not tied to this passage: O Allah, give my soul its taqwa and purify it, You are the best of those who purify it; You are its Guardian and its Master. O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that is not humbled, from a soul never satisfied, and from a supplication not answered.",
            "bn": "এখানে দেখা কোনো মুফাসসির এ আয়াতগুলোর সঙ্গে কোনো দোয়া জোড়েননি। মুসলিম যায়েদ ইবন আরকাম (রাঃ) থেকে একটি দীর্ঘ দোয়া লিপিবদ্ধ করেছেন (২৭২২), যার একটি অংশ আয়াতের নিজের শব্দেই চায়। এটা সুন্নাহর একটি সাধারণ দোয়া, এ আয়াতগুলোর সঙ্গে বাঁধা নয়: হে আল্লাহ, আমার নফসকে তার তাকওয়া দান করুন, তাকে পবিত্র করুন, পবিত্রকারীদের মধ্যে আপনিই শ্রেষ্ঠ। আপনিই তার অভিভাবক, তার মালিক। হে আল্লাহ, আমি আপনার আশ্রয় চাই এমন জ্ঞান থেকে যা উপকার দেয় না, এমন অন্তর থেকে যা বিনীত হয় না, এমন নফস থেকে যা কখনো তৃপ্ত হয় না, আর এমন দোয়া থেকে যা কবুল হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before I Judge",
          "bn": "রায় দেওয়ার আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Some questions to carry. When did I last tell a story about myself in which I was entirely pure? Whose praise have I offered for what I hoped to get, and what did it cost me? In which quarrel have I called my side better guided only because it is mine? And when I read of a curse in the Quran, do I look first at my own deeds, or at someone else's?",
            "bn": "কয়েকটি প্রশ্ন সঙ্গে রাখুন। শেষ কবে নিজের সম্পর্কে এমন গল্প বলেছি, যেখানে আমি পুরোপুরি নির্দোষ? কিছু পাওয়ার আশায় কার প্রশংসা করেছি, আর তার দাম কী দিতে হয়েছে? কোন বিবাদে নিজের পক্ষকে বেশি সঠিক পথে বলেছি শুধু এ কারণে যে পক্ষটা আমার? আর কুরআনে লানতের কথা পড়লে আমি আগে কার আমলের দিকে তাকাই, নিজের, নাকি অন্য কারও?"
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
  "4:65": {
    "sections": [
      {
        "h": {
          "en": "An Oath After the Excuses",
          "bn": "অজুহাতের পরে শপথ"
        },
        "p": [
          {
            "en": "4:59 told the believers to refer any disagreement to Allah and the Messenger. The verses from 4:60 to 4:63 then described people who claimed faith yet wished to take their disputes to taghut, turned away when called to the Messenger, and came swearing they had meant only good. 4:64 answers them: every messenger was sent to be obeyed by Allah's leave, and had they come to him after wronging themselves, sought Allah's forgiveness, and had the Messenger seek forgiveness for them, they would have found Allah accepting of repentance and merciful.",
            "bn": "৪:৫৯ আয়াত মুমিনদের নির্দেশ দেয়: কোনো বিষয়ে মতভেদ হলে তা ফিরিয়ে দাও আল্লাহ ও রসূলের দিকে। এরপর ৪:৬০ থেকে ৪:৬৩ আয়াতে আসে এমন লোকদের ছবি, যারা ঈমানের দাবি করত, অথচ বিবাদ নিয়ে যেতে চাইত তাগূতের কাছে। রসূলের দিকে ডাকলে তারা মুখ ফিরিয়ে নিত, পরে কসম খেয়ে বলত, ভালো ছাড়া আমাদের আর কোনো উদ্দেশ্য ছিল না। ৪:৬৪ আয়াত তাদের জবাব দেয়: প্রত্যেক রসূলকে পাঠানো হয়েছে এজন্যই, যেন আল্লাহর অনুমতিক্রমে তাঁর আনুগত্য করা হয়। নিজেদের উপর যুলম করার পর তারা যদি তাঁর কাছে আসত, আল্লাহর কাছে মাফ চাইত, আর রসূলও তাদের জন্য মাফ চাইতেন, তবে তারা আল্লাহকে পেত তওবা কবুলকারী, পরম দয়ালু হিসেবে।"
          },
          {
            "en": "Ibn Kathir, on 4:64, reports Mujahid's reading of by Allah's leave: none shall obey except by My leave; messengers, he adds, are obeyed only by those whom Allah directs to obedience. 4:65 then swears to the measure of that obedience. After it, 4:66 says that had Allah prescribed, kill yourselves or leave your homes, only a few would have done it, though doing what they were exhorted to do would have been better for them and firmer.",
            "bn": "৪:৬৪ আয়াতের আলোচনায় ইবন কাসীর 'আল্লাহর অনুমতিক্রমে' কথাটির ব্যাখ্যা আনেন মুজাহিদ থেকে: আমার অনুমতি ছাড়া কেউ আনুগত্য করবে না। তিনি যোগ করেন, রসূলদের আনুগত্য কেবল তারাই করে, যাদের আল্লাহ আনুগত্যের তাওফীক দেন। এরপর ৪:৬৫ আয়াত শপথ করে সেই আনুগত্যের মাপকাঠি বেঁধে দেয়। তার পরেই ৪:৬৬ আয়াত বলে, আল্লাহ যদি হুকুম দিতেন, নিজেদের হত্যা করো কিংবা ঘরবাড়ি ছেড়ে বেরিয়ে যাও, তবে অল্প কয়েকজন ছাড়া কেউ তা করত না। অথচ যে উপদেশ তাদের দেওয়া হয়, তা মানলে সেটাই হতো তাদের জন্য উত্তম আর অধিক দৃঢ়তার কারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Not So, and Tangled Branches",
          "bn": "না, আর জট পাকানো ডালপালা"
        },
        "p": [
          {
            "en": "Fa-la wa rabbika: but no, by your Lord. At-Tabari reads the first la as a reply to what came before: the matter is not as they claim, that they believe in what was revealed to you while seeking judgement from taghut and turning from you when called. Then the oath begins afresh: by your Lord, they do not believe. Al-Baghawi gives the same reading and allows another, that the la is merely connective, as in fa-la uqsimu. Al-Qurtubi records another view: la was placed before the oath to stress the negation, and repeated after it to confirm it.",
            "bn": "ফালা ওয়া রব্বিকা: কিন্তু না, তোমার রবের শপথ। তাবারী প্রথম 'লা'-কে পড়েন আগের কথার জবাব হিসেবে। তারা যা দাবি করে, ব্যাপারটা তেমন নয়। তোমার উপর যা নাযিল হয়েছে তাতে ঈমানের দাবি, আবার তাগূতের কাছে বিচার চাওয়া, আর তোমার দিকে ডাকলে মুখ ফিরিয়ে নেওয়া, এসব একসঙ্গে চলে না। তারপর নতুন করে শপথ শুরু হয়: তোমার রবের শপথ, তারা মুমিন হবে না। বাগাভীও একই ব্যাখ্যা দেন, সঙ্গে আরেকটি সম্ভাবনা রাখেন: এখানে 'লা' কেবল কথা জোড়ার শব্দ, যেমন ফালা উকসিমু-তে। কুরতুবী আরেকজনের মত আনেন: না-বোধক কথাকে জোরালো করতে 'লা' বসানো হয়েছে শপথের আগে, তারপর শপথের পরে আবার এসেছে কথাটা পাকা করতে।"
          },
          {
            "en": "As-Sa'di, Ibn Kathir and al-Muyassar each say that Allah swears here by His own noble self. Fima shajara baynahum: in what has become tangled between them. At-Tabari explains it as whatever has become mixed up among their affairs until its ruling is unclear to them. Al-Baghawi and al-Qurtubi derive it from shajar, trees, whose branches interlace; al-Qurtubi adds that the poles of a camel litter are called shijar because they enter into one another.",
            "bn": "সা'দী, ইবন কাসীর ও মুয়াসসার সবাই বলেন, আল্লাহ এখানে শপথ করছেন নিজের মহান সত্তার নামে। ফীমা শাজারা বাইনাহুম: তাদের মধ্যে যা জট পাকিয়ে গেছে। তাবারীর ব্যাখ্যায়, তাদের কাজকর্মে যা মিশে গিয়ে এমন গোলমেলে হয়ে গেছে যে তার বিধান আর পরিষ্কার নয়। বাগাভী ও কুরতুবী শব্দটির মূল খোঁজেন শাজার, অর্থাৎ গাছে, যার ডালপালা একটার সঙ্গে আরেকটা জড়িয়ে থাকে। কুরতুবী যোগ করেন, উটের হাওদার খুঁটিগুলোকেও বলা হয় শিজার, কারণ সেগুলো একটা আরেকটার ভেতরে ঢুকে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tightness, Doubt, Surrender",
          "bn": "সংকোচ, সংশয়, সমর্পণ"
        },
        "p": [
          {
            "en": "Thumma la yajidu fi anfusihim harajan mimma qadayta: then they find within themselves no haraj at what you have decided. At-Tabari glosses haraj as tightness, then spells out what it means: that their souls do not fall into sin by denying what you decided, by doubting in their obedience to you, or by doubting that your decision between them is a truth they may not oppose. He records Mujahid explaining haraj as doubt, and ad-Dahhak as sin. Al-Baghawi reports both and adds that others said tightness.",
            "bn": "সুম্মা লা ইয়াজিদূ ফী আনফুসিহিম হারাজাম মিম্মা কাদাইতা: তারপর তোমার ফয়সালা নিয়ে নিজেদের মনে তারা কোনো হারাজ পাবে না। তাবারী হারাজের অর্থ করেন সংকীর্ণতা, মন সংকুচিত হয়ে যাওয়া। তারপর খুলে বলেন ভেতরের কথা: তোমার ফয়সালা অস্বীকার করে তাদের মন যেন গুনাহে না জড়ায়, তোমার আনুগত্য নিয়ে যেন সন্দেহ না জাগে, আর তোমার ফয়সালা যে এমন হক যার বিরোধিতা চলে না, তা নিয়েও যেন সংশয় না থাকে। মুজাহিদ থেকে তিনি আনেন, হারাজ মানে সন্দেহ, আর দাহহাক থেকে, হারাজ মানে গুনাহ। বাগাভী দুটো মতই উল্লেখ করে যোগ করেন, অন্যরা বলেছেন সংকীর্ণতা।"
          },
          {
            "en": "Al-Qurtubi joins two glosses, tightness and doubt, and traces the word to dense growth: a thicket of tangled trees is called haraj or haraja. So the verse moves from a tangle between two people to the tangle that can remain inside one of them after the case is decided. The verb qadayta, you decided, shares its root with 33:36: it is not for a believing man or a believing woman, when Allah and His Messenger have decided a matter, to have any choice about their affair.",
            "bn": "কুরতুবী দুটি অর্থ একসঙ্গে ধরেন: সংকীর্ণতা আর সন্দেহ। শব্দটির শিকড় তিনি খুঁজে পান ঘন ঝোপে। পরস্পর জড়ানো গাছের ঝাড়কে বলা হয় হারাজ বা হারাজা। তাহলে আয়াত দুজন মানুষের মাঝের জট থেকে সরে আসে আরেক জটের দিকে, যা মামলা মিটে যাওয়ার পরও তাদের একজনের বুকের ভেতর থেকে যেতে পারে। কাদাইতা, তুমি ফয়সালা করেছ, এই ক্রিয়ার ধাতু ৩৩:৩৬ আয়াতেও আছে: আল্লাহ ও তাঁর রসূল কোনো বিষয়ে ফয়সালা দিলে কোনো মুমিন পুরুষ বা মুমিন নারীর আর নিজের মতো বেছে নেওয়ার অধিকার থাকে না।"
          },
          {
            "en": "Wa yusallimu taslima: and submit in full submission. At-Tabari: they submit to your decision, yielding in obedience and affirming your prophethood. Al-Qurtubi quotes az-Zajjaj that taslima is an emphatic verbal noun: to say I struck a striking is as if to say I have no doubt of it, so they submit to your ruling admitting no doubt into themselves. Ibn Kathir: complete submission, without resisting, pushing back or contending. At-Tabari also notes the grammar: find no and submit are joined to make you judge, so all three conditions hang on the one until.",
            "bn": "ওয়া ইউসাল্লিমূ তাসলীমা: আর পূর্ণ সমর্পণে মেনে নেবে। তাবারীর ব্যাখ্যা: তারা তোমার ফয়সালা মেনে নেবে, আনুগত্যে মাথা নুইয়ে, তোমার নবুওয়াতের স্বীকৃতি দিয়ে। কুরতুবী যাজ্জাজের কথা উদ্ধৃত করেন: তাসলীমা এখানে জোর দেওয়ার মাসদার, অর্থাৎ ক্রিয়ারই নামরূপ। আরবিতে 'মারলাম, সত্যিকারের মার' বললে যেন বলা হয়, এতে আমার কোনো সন্দেহ নেই। তেমনি তারা তোমার বিধান মেনে নেবে এমনভাবে, যাতে মনে সন্দেহ ঢোকার সুযোগ না থাকে। ইবন কাসীরের ভাষায়: পূর্ণ সমর্পণ, কোনো বাধা, ঠেলাঠেলি বা বিরোধ ছাড়া। তাবারী ব্যাকরণের দিকটাও দেখান: 'পাবে না' আর 'মেনে নেবে' দুটোই যুক্ত 'তোমাকে বিচারক মানবে'-র সঙ্গে। ফলে তিনটি শর্তই বাঁধা একই 'যতক্ষণ না'-এর সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Stations of the Religion",
          "bn": "দ্বীনের তিন স্তর"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as a ladder. Making the Messenger ﷺ judge covers everything in which disagreement arises, unlike matters of consensus, which rest on the Book and the Sunnah anyway. Referral is not enough until tightness leaves the heart, nor while people refer to him grudgingly; and even that is not enough until they submit with an open chest, a settled soul, and compliance inside and out. Referral, he says, belongs to the station of islam, freedom from tightness to iman, and full submission to ihsan. Whoever completes them has completed every level of the religion.",
            "bn": "সা'দী আয়াতটিকে পড়েন সিঁড়ির মতো। রসূল ﷺ-কে বিচারক মানতে হবে এমন সব বিষয়ে, যাতে মতভেদ দেখা দেয়। ইজমার বিষয়গুলো আলাদা, কারণ সেগুলো এমনিতেই কিতাব ও সুন্নাহর উপর দাঁড়িয়ে। শুধু বিচারের ভার দিলেই হবে না, যতক্ষণ না অন্তর থেকে সংকীর্ণতা দূর হয়। চোখ বুজে অনিচ্ছায় মেনে নিলেও হবে না। এরপরও যথেষ্ট নয়, যতক্ষণ না তারা খোলা মনে, প্রশান্ত চিত্তে, ভেতরে-বাইরে আনুগত্য করে পূর্ণ সমর্পণ করে। তাঁর ভাষায়, বিচারের ভার দেওয়া ইসলামের স্তরে, সংকীর্ণতা থেকে মুক্তি ঈমানের স্তরে, আর পূর্ণ সমর্পণ ইহসানের স্তরে। যে এগুলো পূর্ণ করল, সে দ্বীনের সব স্তরই পূর্ণ করল।"
          },
          {
            "en": "Ibn Kathir describes the same inward demand: whatever the Messenger ﷺ rules is the truth, to be yielded to inwardly and outwardly. As-Sa'di then separates two people. Whoever leaves this referral without accepting that it binds him, he counts a disbeliever; whoever accepts that it binds him yet fails to act on it has the ruling of other sinners. That line serves self-examination and scholars weighing principles. The verse describes the people it describes, and licenses no one to pronounce on the faith of any living person or community.",
            "bn": "ইবন কাসীরও ভেতরের একই দাবির কথা বলেন: রসূল ﷺ যে ফয়সালা দেন, সেটাই হক, আর ভেতরে-বাইরে তার সামনে মাথা নোয়াতে হয়। সা'দী এরপর দুজন মানুষকে আলাদা করেন। কেউ যদি এই বিচারের ভার দেওয়াকে নিজের উপর বাধ্যতামূলকই না মানে, তাকে তিনি কাফির গণ্য করেন। আর যে তা বাধ্যতামূলক মানে, কিন্তু কাজে পিছিয়ে পড়ে, তার বিধান অন্য গুনাহগারদের মতো। এই রেখা নিজের হিসাব নেওয়ার জন্য, আর নীতি নিয়ে আলেমদের বিবেচনার জন্য। আয়াত যাদের কথা বলে, কেবল তাদেরই বর্ণনা দেয়। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের ঈমান নিয়ে রায় দেওয়ার অনুমতি এ আয়াত কাউকে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Held to the Walls",
          "bn": "আল পর্যন্ত আটকে রাখা পানি"
        },
        "p": [
          {
            "en": "Al-Bukhari records in the Book of Tafsir of his Sahih (4585), from 'Urwah: Az-Zubayr disputed with a man of the Ansar over a watercourse of the Harrah. The Prophet ﷺ said: Irrigate, O Zubayr, then send the water on to your neighbour. The Ansari said: O Messenger of Allah, because he is your cousin? His face changed colour, then he said: Irrigate, O Zubayr, then hold back the water until it reaches back to the walls, then send the water on to your neighbour.",
            "bn": "সহীহ বুখারীর তাফসীর অধ্যায়ে (৪৫৮৫) উরওয়া থেকে বর্ণিত: হাররার একটি পানির নালা নিয়ে যুবাইর (রাঃ) আনসারের এক ব্যক্তির সঙ্গে বিবাদে জড়ান। নবী ﷺ বললেন: যুবাইর, তুমি সেচ দাও, তারপর পানি তোমার প্রতিবেশীর দিকে ছেড়ে দাও। আনসারি লোকটি বলল: হে আল্লাহর রসূল, সে আপনার ফুফাতো ভাই বলে? তাঁর চেহারার রং বদলে গেল। তারপর তিনি বললেন: যুবাইর, সেচ দাও, তারপর পানি আটকে রাখো, যতক্ষণ না তা ফিরে আল পর্যন্ত পৌঁছায়, তারপর পানি তোমার প্রতিবেশীর দিকে ছেড়ে দাও।"
          },
          {
            "en": "The narration ends: And the Prophet ﷺ secured for az-Zubayr his full right in the explicit ruling when the Ansari angered him; he had pointed them both to a course that gave both of them room. Az-Zubayr said: I do not reckon these verses were revealed except about that: But no, by your Lord, they do not believe until they make you judge in what is disputed between them. 'Urwah does not name his source here; Ibn Kathir says the form is unconnected but the meaning connected, and al-Qurtubi calls the hadith established and sound.",
            "bn": "বর্ণনার শেষ অংশ: আনসারি লোকটি যখন তাঁকে রাগিয়ে দিল, তখন নবী ﷺ স্পষ্ট ফয়সালায় যুবাইরকে তাঁর পূর্ণ হক আদায় করে দিলেন। এর আগে তিনি দুজনকে এমন এক পথের পরামর্শ দিয়েছিলেন, যাতে দুজনেরই সুবিধা ছিল। যুবাইর বললেন: আমার মনে হয় না, এই আয়াতগুলো এ ঘটনা ছাড়া অন্য কিছু নিয়ে নাযিল হয়েছে: কিন্তু না, তোমার রবের শপথ, তারা মুমিন হবে না, যতক্ষণ না তাদের মধ্যকার বিবাদে তোমাকে বিচারক মানে। ঘটনাটি কার কাছে শুনেছেন, উরওয়া এখানে তা জানান না। ইবন কাসীর বলেন, বাহ্যিক রূপে সনদটি বিচ্ছিন্ন, তবে অর্থের দিক থেকে সংযুক্ত। আর কুরতুবী হাদীসটিকে বলেন প্রমাণিত ও সহীহ।"
          },
          {
            "en": "Al-Qurtubi draws fiqh from the two rulings. The first took the path of reconciliation: in al-Qurtubi's gloss, be easy about your right, do not take it in full, hurry the water to your neighbour. Only when that was not accepted did the Prophet ﷺ rule for the full right. Al-Qurtubi sees guidance here for a judge to steer disputants towards settlement even where the right is clear. The narration calls the other man only a man of the Ansar, and al-Qurtubi holds that leaving him unnamed is sound, as al-Bukhari and Muslim do.",
            "bn": "কুরতুবী দুটি ফয়সালা থেকে ফিকহ বের করেন। প্রথমটি ছিল আপসের পথ। কুরতুবীর ব্যাখ্যায় তার মানে, নিজের হকের ব্যাপারে নরম হও, পুরোটা আদায় কোরো না, প্রতিবেশীর দিকে তাড়াতাড়ি পানি ছেড়ে দাও। সে পরামর্শ মেনে নেওয়া হয়নি বলেই নবী ﷺ পরে পূর্ণ হকের ফয়সালা দেন। কুরতুবী এখানে বিচারকের জন্য একটি নির্দেশনা দেখেন: হক স্পষ্ট হলেও বিবদমান পক্ষগুলোকে মীমাংসার দিকে এগিয়ে নেওয়ার চেষ্টা করা যায়। বর্ণনায় অপর লোকটিকে শুধু আনসারের এক ব্যক্তি বলা হয়েছে। কুরতুবীর মতে তাঁর নাম না নেওয়াই সঠিক, যেমন বুখারী ও মুসলিমেও নাম নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Quarrel Was It?",
          "bn": "বিবাদটা কাদের ছিল?"
        },
        "p": [
          {
            "en": "Az-Zubayr gives the link to the verse as his own reckoning, and at-Tabari records a disagreement. Some said the verse came down about az-Zubayr and his opponent from the Ansar. Others, Mujahid among them, said it concerns the pair already described in 4:60: the Jewish man and the Muslim man who took their case to Ka'b ibn al-Ashraf. At-Tabari judges the second view nearer the right, because the verse sits inside their story and nothing indicates that the story has broken off.",
            "bn": "আয়াতের সঙ্গে ঘটনার যোগসূত্রটা যুবাইর (রাঃ) জানান নিজের ধারণা হিসেবে, আর তাবারী এখানে একটি মতভেদ তুলে ধরেন। কেউ বলেছেন, আয়াত নাযিল হয়েছে যুবাইর আর তাঁর আনসারি প্রতিপক্ষকে নিয়ে। অন্যরা, মুজাহিদও তাঁদের একজন, বলেছেন এটি সেই জোড়ার ব্যাপারে, যাদের কথা আগেই ৪:৬০ আয়াতে এসেছে: সেই ইহুদি লোকটি আর সেই মুসলিম লোকটি, যারা মামলা নিয়ে গিয়েছিল কা'ব ইবনুল আশরাফের কাছে। তাবারী দ্বিতীয় মতটিকে বেশি সঠিক মনে করেন। কারণ আয়াতটি তাদের কাহিনির ভেতরেই আছে, আর কাহিনি থেমে গেছে এমন কোনো ইঙ্গিত নেই।"
          },
          {
            "en": "At-Tabari adds that it is not impossible for the verse to have come down in that story while also making clear the ruling on what az-Zubayr and his opponent disputed. Al-Qurtubi reports at-Tabari's choice and says the verse then covers az-Zubayr's case by its generality. Both views are kept here without preference. Ibn Kathir also gives a report of 'Umar (RA) killing a man who refused the Prophet's ruling, and himself calls it very strange, interrupted and weakened by Ibn Lahi'ah; it is left aside.",
            "bn": "তবে তাবারী যোগ করেন, এমন হওয়া অসম্ভব নয় যে আয়াতটি নাযিল হয়েছে সেই কাহিনির প্রসঙ্গে, আবার যুবাইর ও তাঁর প্রতিপক্ষের বিবাদের বিধানও তাতে স্পষ্ট হয়েছে। কুরতুবী তাবারীর এই পছন্দের কথা জানান, আর বলেন, আয়াতের ব্যাপক অর্থের মধ্যে যুবাইরের ঘটনাও পড়ে যায়। এখানে দুটি মতই রাখা হলো, কোনোটিকে প্রাধান্য না দিয়ে। ইবন কাসীর আরেকটি বর্ণনাও আনেন: নবী ﷺ-এর ফয়সালা মানেনি এমন এক ব্যক্তিকে উমর (রাঃ) হত্যা করেন। কিন্তু তিনি নিজেই বর্ণনাটিকে বলেন খুবই অদ্ভুত, সনদ বিচ্ছিন্ন, আর ইবন লাহীআর কারণে দুর্বল। তাই সেটি এখানে আনা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "His Sunnah After Him",
          "bn": "তাঁর পরে তাঁর সুন্নাহ"
        },
        "p": [
          {
            "en": "Al-Muyassar carries the verse past the lifetime of the Prophet ﷺ: they do not truly believe until they make him judge in their disputes during his life, and refer to his Sunnah after his death. Judging by what he brought, the Book and the Sunnah, in every matter of life is, it concludes, at the very core of faith, with contentment and submission. Ma'arif al-Qur'an agrees: after him, the verdict of the Law he left is his own verdict, and turning to it is a return to him.",
            "bn": "মুয়াসসার আয়াতটিকে নবী ﷺ-এর জীবদ্দশার পরেও টেনে নেয়: তারা প্রকৃত মুমিন হবে না, যতক্ষণ না তাঁর জীবদ্দশায় নিজেদের বিবাদে তাঁকে বিচারক মানে, আর তাঁর ইন্তেকালের পর ফিরে যায় তাঁর সুন্নাহর কাছে। মুয়াসসারের উপসংহার হলো, জীবনের প্রতিটি বিষয়ে তিনি যা নিয়ে এসেছেন, অর্থাৎ কিতাব ও সুন্নাহ, তা দিয়ে ফয়সালা করা ঈমানের একেবারে মর্মমূলে, সঙ্গে থাকবে সন্তুষ্টি ও সমর্পণ। মাআরিফুল কুরআনও একমত: তাঁর পরে তিনি যে শরীয়ত রেখে গেছেন, তার ফয়সালাই তাঁর ফয়সালা, আর সেদিকে ফেরা মানে তাঁর কাছেই ফেরা।"
          },
          {
            "en": "Nor is the dispute only a lawsuit. Ma'arif al-Qur'an, citing al-Bahr al-Muhit, says fima shajara is not confined to dealings and rights but covers beliefs and ideas too; as-Sa'di's everything in which disagreement arises and Ibn Kathir's in all matters point the same way. Ma'arif al-Qur'an also notes that his authority to judge never depended on litigants appointing him; the verse speaks of their making him judge because people rest easier with an arbiter they have chosen.",
            "bn": "বিবাদ মানে শুধু আদালতের মামলাও নয়। মাআরিফুল কুরআন আল-বাহরুল মুহীতের বরাতে বলে, ফীমা শাজারা কেবল লেনদেন আর হকের মধ্যে সীমিত নয়, আকীদা আর চিন্তার বিষয়ও এর ভেতরে পড়ে। সা'দীর 'মতভেদ দেখা দেয় এমন সব বিষয়ে' আর ইবন কাসীরের 'সব ব্যাপারে' কথাও একই দিকে ইঙ্গিত করে। মাআরিফুল কুরআন আরও বলে, বিচার করার ক্ষমতা তাঁর ছিলই, বিবদমান পক্ষ তাঁকে নিয়োগ দিল কি না তার উপর তা নির্ভর করত না। তবু আয়াত বলছে, তারা তাঁকে বিচারক মানবে, কারণ নিজেদের বেছে নেওয়া সালিসের ফয়সালায় মানুষ বেশি স্বস্তি পায়।"
          },
          {
            "en": "Then Ma'arif al-Qur'an turns the verse towards worship. Doing with a heavy heart what is proven from the Prophet ﷺ, it says, is a sign of weakness in faith. Someone permitted tayammum who stays uneasy at not using water should not mistake that unease for taqwa. Choosing the stricter course without acute need is correct, it adds, but feeling strain at using a concession is not piety. The tightness the verse names can hide inside devotion as well.",
            "bn": "এরপর মাআরিফুল কুরআন আয়াতটিকে ইবাদতের দিকে ঘুরিয়ে দেয়। তার মতে, নবী ﷺ থেকে যা প্রমাণিত, তা ভারী মন নিয়ে করা ঈমানের দুর্বলতার আলামত। যার জন্য তায়াম্মুম জায়েয, অথচ পানি ব্যবহার না করায় মন খচখচ করে, সে যেন এই অস্বস্তিকে তাকওয়া না ভাবে। তীব্র প্রয়োজন না থাকলে কঠিন পথ বেছে নেওয়া ঠিকই আছে। তবে ছাড় গ্রহণ করতে গিয়ে মনে চাপ বোধ করা তাকওয়া নয়। আয়াত যে সংকীর্ণতার কথা বলে, তা ইবাদতের ভেতরেও লুকিয়ে থাকতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Without Resisting",
          "bn": "প্রশ্ন আছে, প্রতিরোধ নেই"
        },
        "p": [
          {
            "en": "In at-Tabari's terms, the tightness the verse rules out is denial and doubt about the ruling; the plain ache of a loss is a different thing. An estate divided by the shares of 4:11, a profitable deal dropped because a clear ruling forbids its terms, a family quarrel settled by a hadith the losing side did not want: each may cost something real. The verse does not ask a person to feel nothing. It asks that the heart stop arguing that the ruling is wrong, and that the hand comply as well.",
            "bn": "তাবারীর ব্যাখ্যা অনুযায়ী, আয়াত যে সংকীর্ণতা নাকচ করে, তা হলো বিধান নিয়ে অস্বীকার আর সংশয়। কিছু হারানোর স্বাভাবিক কষ্ট আলাদা জিনিস। ৪:১১ আয়াতের অংশ অনুযায়ী ভাগ হওয়া মিরাস, স্পষ্ট বিধানে শর্তগুলো নিষিদ্ধ বলে ছেড়ে দেওয়া লাভের চুক্তি, কোনো হাদীসে মিটে যাওয়া পারিবারিক ঝগড়া, যে মীমাংসা হেরে যাওয়া পক্ষ চায়নি: প্রতিটিতেই সত্যিকারের কিছু হারাতে হতে পারে। আয়াত বলে না যে কিছুই অনুভব করা যাবে না। আয়াত চায়, বিধানটা ভুল, এই তর্ক যেন অন্তরে আর না চলে, আর হাতও যেন সেই অনুযায়ী চলে।"
          },
          {
            "en": "Questions are another matter. Asking what the ruling actually is, whether a report is established, or how it applies to my own case is the work of understanding, and it belongs to the time before a ruling is clear. Resistance begins once it is clear, when each new question aims at escape rather than learning. A simple test is what happens when the answer arrives: the honest questioner stops and acts, while the resisting heart opens another question.",
            "bn": "প্রশ্ন করা আলাদা ব্যাপার। বিধানটা আসলে কী, বর্ণনাটা প্রমাণিত কি না, কিংবা আমার নিজের ক্ষেত্রে তা কীভাবে খাটে, এসব জানতে চাওয়া বোঝারই চেষ্টা। এর সময় বিধান স্পষ্ট হওয়ার আগে। প্রতিরোধ শুরু হয় বিধান স্পষ্ট হওয়ার পরে, যখন প্রতিটি নতুন প্রশ্নের লক্ষ্য শেখা নয়, পালানো। পরখ করার সহজ উপায়: উত্তর আসার পর কী ঘটে, তা দেখা। সৎ প্রশ্নকারী থেমে যায়, আমল শুরু করে। আর যে মন বাধা দিতে চায়, সে খুলে বসে আরেকটা প্রশ্ন।"
          },
          {
            "en": "The stream in the Harrah also offers a pattern to whoever settles between relatives or partners. The first word was counsel towards generosity, with room for both; the full right came when that counsel was not accepted. An elder or arbiter can keep the same order: propose the generous course first, then hold to the clear right. And before I object to a ruling, I can ask myself: am I seeking to understand or to escape? If my chest is still tight, have I asked Allah to open it?",
            "bn": "আত্মীয় বা অংশীদারদের মধ্যে যিনি মীমাংসা করেন, হাররার নালার ঘটনা তাঁকেও একটা পথ দেখায়। প্রথম কথা ছিল উদারতার পরামর্শ, যাতে দুজনেরই জায়গা থাকে। সেই পরামর্শ মেনে নেওয়া হয়নি বলেই পরে পূর্ণ হক দেওয়া হয়। পরিবারের মুরুব্বি বা সালিসও একই ক্রম ধরে চলতে পারেন: আগে উদার পথের প্রস্তাব, তারপর স্পষ্ট হকে অটল থাকা। আর কোনো বিধানে আপত্তি তোলার আগে আমি নিজেকে জিজ্ঞেস করতে পারি: আমি কি বুঝতে চাইছি, নাকি পালাতে? আর বুক যদি এখনো সংকুচিত থাকে, তা খুলে দেওয়ার জন্য কি আল্লাহর কাছে চেয়েছি?"
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
  "4:74-76": {
    "sections": [
      {
        "h": {
          "en": "Answer to the One Who Lingers",
          "bn": "পিছিয়ে থাকা লোকের জবাবে"
        },
        "p": [
          {
            "en": "These verses come straight after a portrait. In 4:71 the believers were told to take their precautions and go out in companies or all together. In 4:72 and 4:73 one among them lingers behind: if disaster strikes, he says Allah favoured him in that he was not there, and if bounty comes, he wishes he had been there, as though no bond had ever joined him to them. Ibn Kathir's abridged commentary reports from Mujahid and others that this was revealed about the hypocrites. Then 4:74 opens with fa: so let them fight.",
            "bn": "এই আয়াতগুলো এসেছে একটি ছবির ঠিক পরে। ৪:৭১ আয়াতে মুমিনদের বলা হয়েছিল সতর্কতা অবলম্বন করতে, তারপর দলে দলে অথবা সবাই একসঙ্গে বেরিয়ে পড়তে। ৪:৭২ ও ৪:৭৩ আয়াতে তাদেরই একজন পিছিয়ে থাকে। বিপদ এলে সে বলে, আল্লাহ আমার উপর অনুগ্রহ করেছেন, আমি সেখানে ছিলাম না। আর অনুগ্রহ এলে আফসোস করে, ইস, আমিও যদি থাকতাম! যেন তাদের সঙ্গে তার কোনোদিন কোনো সম্পর্কই ছিল না। ইবন কাসীরের সংক্ষিপ্ত তাফসীর মুজাহিদ ও অন্যদের সূত্রে জানায়, আয়াতটি মুনাফিকদের নিয়ে নাযিল হয়েছিল। এরপর ৪:৭৪ আয়াত শুরু হয় 'ফা' দিয়ে: সুতরাং তারা লড়াই করুক।"
          },
          {
            "en": "At-Tabari reads the verse as Allah urging the believers of that day to fight His enemies in every circumstance, winning or beaten, and to make light of what the hypocrites said. As-Sa'di hears mercy in it: Allah does not cut His servants off from His mercy or shut its doors; whoever has fallen short, He commands and calls to mend the lack, so the call reaches even the one who hung back. One thing is fixed from the start: these verses concern the believers of that time, and license nothing against any living person or community.",
            "bn": "তাবারীর মতে আয়াতটিতে আল্লাহ সেদিনের মুমিনদের তাগিদ দিচ্ছেন, জয়ী হোক বা পরাজিত, সব অবস্থায় তারা যেন তাঁর শত্রুদের বিরুদ্ধে লড়াই চালিয়ে যায়, আর মুনাফিকদের কথাকে গুরুত্ব না দেয়। সা'দী একই মোড়ে রহমত দেখতে পান। তিনি লেখেন, আল্লাহ তাঁর বান্দাদের থেকে রহমত কেটে দেন না, তার দরজাও বন্ধ করেন না। কেউ অনুচিত কিছু করে ফেললে তিনি তাকে আদেশ দেন, ডাকেন, যেন সে নিজের ঘাটতি পূরণ করে নেয়। তাই ডাকটা পৌঁছায় পিছিয়ে থাকা লোকটির কাছেও। শুরুতেই একটি কথা স্থির থাকুক: আয়াতগুলো সেই যুগের মুমিনদের নিয়ে, আর আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Sold, or Bought?",
          "bn": "বিক্রি, নাকি কেনা?"
        },
        "p": [
          {
            "en": "The verb is yashruna. At-Tabari says that in the speech of the Arabs shara most often means sold, and he cites as-Suddi: they sell the life of this world for the Hereafter. The sale, at-Tabari explains, is their spending of wealth in seeking Allah's pleasure and their giving of their own lifeblood. Ibn Zayd, whom he also cites, notes that the word runs both ways, to sell and to take, and turns the verse around: the foolish sold the Hereafter for this world.",
            "bn": "ক্রিয়াটি হলো ইয়াশরূনা। তাবারী বলেন, আরবদের ভাষায় 'শারা' শব্দের প্রধান অর্থ বিক্রি করা। এর পক্ষে তিনি সুদ্দীর কথা আনেন: তারা আখিরাতের বিনিময়ে দুনিয়ার জীবন বিক্রি করে। তাবারীর ব্যাখ্যায় এই বিক্রি মানে আল্লাহর সন্তুষ্টির খোঁজে নিজের সম্পদ খরচ করা আর নিজের প্রাণ উৎসর্গ করা। তিনি ইবন যায়দের কথাও আনেন। ইবন যায়দ বলেন, শব্দটি দুই দিকেই চলে, বিক্রি করা আর নেওয়া। তারপর এক বাক্যে আয়াতটাকে উল্টো দিক থেকে দেখান: বোকারা দুনিয়ার বদলে আখিরাত বেচে দিয়েছে।"
          },
          {
            "en": "Al-Baghawi keeps two readings side by side. Some said, he reports, that the verse came down about the hypocrites, with yashruna meaning they buy: those who choose this world over the Hereafter are being told, believe, then fight. Others said it came down about the sincere believers, who sell this world and choose the Hereafter. As-Sa'di sets out other readings as well, and calls the reading that addresses the hesitant themselves, commanding them to sincerity and to go out, the soundest.",
            "bn": "বাগাভী দুটি মত পাশাপাশি রাখেন। কেউ কেউ বলেছেন, আয়াতটি মুনাফিকদের নিয়ে, আর এখানে ইয়াশরূনা মানে কেনে। অর্থাৎ যারা আখিরাতের চেয়ে দুনিয়াকে বেছে নেয়, তাদের বলা হচ্ছে: আগে ঈমান আনো, তারপর লড়াই করো। অন্যরা বলেছেন, আয়াতটি খাঁটি মুমিনদের নিয়ে, যারা দুনিয়া বেচে দিয়ে আখিরাতকে বেছে নেয়। সা'দীও আরও কয়েকটি মত উল্লেখ করেন। তাঁর বিচারে সবচেয়ে সঠিক মত হলো, এখানে পিছিয়ে থাকা লোকদেরই সম্বোধন করা হয়েছে, আর তাদের ইখলাস ও বেরিয়ে পড়ার আদেশ দেওয়া হয়েছে।"
          },
          {
            "en": "Then: who fights whom? For al-Qurtubi the address is to the believers: let them fight the disbelievers, and alladhina yashruna names the believers themselves, who give their lives and wealth to Allah for the reward of the Hereafter. Ibn Kathir reads the same words the other way: let the believer who goes out fight those who sell their religion for a little of this world, which they do only out of disbelief. As-Sa'di records this construction too, with alladhina as the object. Both readings stand in the commentaries.",
            "bn": "এরপর প্রশ্ন ওঠে, কে কার বিরুদ্ধে লড়বে। কুরতুবীর মতে সম্বোধন মুমিনদের প্রতি: তারা কাফিরদের বিরুদ্ধে লড়াই করুক। 'আল্লাযীনা ইয়াশরূনা' বলতে মুমিনদেরই বোঝানো হয়েছে, যারা আখিরাতের সওয়াবের জন্য আল্লাহর কাছে জান ও মাল সঁপে দেয়। ইবন কাসীর একই শব্দ পড়েন উল্টোভাবে। তাঁর মতে, বেরিয়ে পড়া মুমিন লড়াই করুক তাদের বিরুদ্ধে, যারা দুনিয়ার সামান্য স্বার্থের বদলে নিজেদের দ্বীন বেচে দেয়, আর তা করে কেবল কুফরির কারণে। সা'দীও এই গঠনটি একটি মত হিসেবে উল্লেখ করেন, যেখানে 'আল্লাযীনা' ক্রিয়ার কর্ম। দুটি পাঠই তাফসীরে টিকে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ends of One Road",
          "bn": "এক পথের দুই প্রান্ত"
        },
        "p": [
          {
            "en": "Wa man yuqatil fi sabili Allahi fa-yuqtal aw yaghlib: whoever fights in Allah's way and is killed or prevails. Al-Qurtubi glosses killed as martyred and prevails as wins through and takes spoils, and, citing Ibn 'Atiyya, notes that Allah named the two furthest ends of the fighter's state and let them stand for all that lies between. Either way the promise is one: fa-sawfa nu'tihi ajran 'aziman, We will give him a great reward. At-Tabari adds that what Allah calls great has no measure His servants can know.",
            "bn": "ওয়া মান ইউকাতিল ফী সাবীলিল্লাহি ফা-ইউকতাল আও ইয়াগলিব: যে আল্লাহর পথে লড়াই করে, তারপর নিহত হয় অথবা বিজয়ী হয়। কুরতুবী বলেন, নিহত হওয়া মানে শহীদ হওয়া, আর বিজয়ী হওয়া মানে সফল হয়ে গনীমত লাভ করা। ইবন আতিয়্যার সূত্রে তিনি আরও জানান, আল্লাহ যোদ্ধার অবস্থার দুই শেষ প্রান্তের কথা বলেছেন, আর মাঝখানের সবকিছু তাতেই এসে গেছে। দুই অবস্থাতেই প্রতিশ্রুতি একটাই: ফা-সাওফা নু'তীহি আজরান আযীমা, আমি তাকে মহা প্রতিদান দেব। তাবারী যোগ করেন, আল্লাহ যাকে মহা বলেছেন, তার পরিমাণ বান্দাদের জানার বাইরে।"
          },
          {
            "en": "The commentators fence the promise with a condition. As-Sa'di says the fighting meant is a jihad that Allah and His Messenger commanded, with the servant sincere in it and seeking Allah's face, and the Muyassar adds mukhlisan, sincerely. Al-Baghawi cites, through Malik from Abu az-Zinad from al-A'raj from Abu Hurayra (RA), a hadith al-Bukhari records by the same route from Malik (3123): 'Allah has guaranteed whoever strives in His way, with nothing bringing him out but striving in His way and belief in His words, that He will admit him to Paradise or return him to the dwelling he left, with whatever reward or spoils he gained.'",
            "bn": "তাফসীরকারেরা এই প্রতিশ্রুতির সঙ্গে একটি শর্ত জুড়ে দেন। সা'দী বলেন, এখানে সেই জিহাদের কথা, যার আদেশ আল্লাহ ও তাঁর রাসূল দিয়েছেন, আর বান্দা তাতে আল্লাহর জন্য একনিষ্ঠ থেকে কেবল তাঁর সন্তুষ্টি চায়। মুয়াসসারও তার ব্যাখ্যায় 'মুখলিসান', অর্থাৎ ইখলাসের সঙ্গে, শব্দটি জুড়ে দেয়। বাগাভী মালিক থেকে, তিনি আবুয যিনাদ থেকে, তিনি আ'রাজ থেকে, তিনি আবু হুরায়রা (রাঃ) থেকে একটি হাদীস আনেন। বুখারীও মালিক থেকে একই সূত্রে তা বর্ণনা করেছেন (৩১২৩): 'যে আল্লাহর পথে জিহাদ করে, আর তাঁর পথে জিহাদ ও তাঁর বাণীর প্রতি বিশ্বাস ছাড়া অন্য কিছু তাকে ঘর থেকে বের করেনি, আল্লাহ তার জিম্মাদার হয়েছেন: হয় তাকে জান্নাতে প্রবেশ করাবেন, নয়তো যে ঘর থেকে সে বেরিয়েছিল, অর্জিত সওয়াব বা গনীমতসহ সেখানে ফিরিয়ে আনবেন।'"
          }
        ]
      },
      {
        "h": {
          "en": "A Question, Not an Order",
          "bn": "হুকুম নয়, প্রশ্ন"
        },
        "p": [
          {
            "en": "4:75 does not open with a command but with a question: wa ma lakum la tuqatiluna, and what is the matter with you that you do not fight? Ma'arif al-Qur'an reads the choice as a hint that under such conditions this was a natural duty. As-Sa'di calls the verse an urging and a stirring, and says the duty had become binding on them. Fighting on this footing, he adds, was a defence of their own families and children, which he ranks greater in reward and benefit because it rescues the weak.",
            "bn": "৪:৭৫ আয়াত হুকুম দিয়ে শুরু হয় না, শুরু হয় প্রশ্ন দিয়ে: ওয়া মা লাকুম লা তুকাতিলূনা, তোমাদের কী হয়েছে যে তোমরা লড়াই করছ না? মাআরিফুল কুরআনের মতে এই বাছাইয়ে ইঙ্গিত আছে যে এমন পরিস্থিতিতে কাজটি ছিল স্বাভাবিক দায়িত্ব। সা'দী আয়াতটিকে বলেন তাগিদ ও উদ্দীপনা। তাঁর মতে কাজটি তখন তাদের উপর নির্দিষ্টভাবে ফরজ হয়ে গিয়েছিল। তিনি আরও বলেন, এই অবস্থায় লড়াই ছিল নিজেদের পরিবার আর সন্তানদের রক্ষা করা। দুর্বলদের উদ্ধার করে বলে তিনি একে সওয়াব ও উপকারে আরও বড় বলে গণ্য করেন।"
          },
          {
            "en": "The next word's grammar carries its own point. Al-Qurtubi joins wal-mustad'afin to the name of Allah, so the sense is: and in the way of the oppressed, since freeing the oppressed is itself part of Allah's way; he gives this as the choice of az-Zajjaj and the view of az-Zuhri. He also records Muhammad ibn Yazid joining it instead to the word way: and concerning the oppressed, to rescue them, so that the two ways are distinct. At-Tabari, with reports from as-Suddi and Ibn 'Abbas (RA), reads it: and for the oppressed.",
            "bn": "পরের শব্দটির ব্যাকরণেও একটি শিক্ষা আছে। কুরতুবী 'ওয়াল মুসতাদআফীন' শব্দটিকে আল্লাহর নামের সঙ্গে যুক্ত করেন। তখন অর্থ দাঁড়ায়: এবং দুর্বলদের পথে, কারণ দুর্বলদের মুক্ত করাও আল্লাহর পথেরই অংশ। তিনি জানান, এটি যাজ্জাজের পছন্দ, আর যুহরীরও মত। মুহাম্মাদ ইবন ইয়াযীদের মতও তিনি উল্লেখ করেন, যিনি শব্দটিকে 'পথ' শব্দের সঙ্গে যুক্ত করেন: এবং দুর্বলদের ব্যাপারে, তাদের উদ্ধারের জন্য। তখন দুটি পথ আলাদা হয়ে যায়। সুদ্দী ও ইবন আব্বাস (রাঃ)-এর বর্ণনা উল্লেখ করে তাবারী অর্থ করেন: এবং দুর্বলদের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "A Boy Among the Children",
          "bn": "শিশুদের মাঝে এক বালক"
        },
        "p": [
          {
            "en": "Who were they? At-Tabari says the men among them had accepted Islam in Makkah, and their own clans overpowered them, harmed them and tormented their bodies to turn them from their religion; al-wildan, he adds, is the plural of walad, the boys. Al-Qurtubi calls them the believers in Makkah under the humiliation and harm of the disbelievers of Quraysh, and as-Sa'di borrows the words of 4:98: people who could devise no plan and find no way. Ma'arif al-Qur'an names some, among them Ibn 'Abbas (RA) and his mother, Salama ibn Hisham and al-Walid ibn al-Walid.",
            "bn": "তারা কারা ছিল? তাবারী বলেন, তাদের পুরুষেরা মক্কায় ইসলাম গ্রহণ করেছিল। তারপর তাদের নিজেদের গোত্রই জোর খাটিয়ে তাদের কাবু করে, কষ্ট দেয়, শরীরে নির্যাতন চালায়, যাতে তারা দ্বীন ছেড়ে দেয়। তিনি আরও বলেন, 'আল-উইলদান' শব্দটি 'ওয়ালাদ'-এর বহুবচন, মানে ছোট ছেলেরা। কুরতুবীর ভাষায় তারা মক্কার সেই মুমিন, যারা কুরাইশের কাফিরদের হাতে লাঞ্ছনা আর কষ্ট সইছিল। সা'দী ৪:৯৮ আয়াতের ভাষা ধার করে বলেন, তাদের কোনো উপায় ছিল না, বেরোনোর পথও জানা ছিল না। মাআরিফুল কুরআন কয়েকজনের নাম দেয়, তাঁদের মধ্যে ইবন আব্বাস (রাঃ) ও তাঁর মা, সালামা ইবন হিশাম এবং ওয়ালীদ ইবন ওয়ালীদ।"
          },
          {
            "en": "Ibn Kathir, on this verse, cites Ibn 'Abbas's words about himself, which al-Bukhari records (4587): 'My mother and I were among the oppressed.' Elsewhere in his Sahih (1357) he records the same Companion saying: 'My mother and I were among the oppressed, I from among the children and my mother from among the women.' These are a Companion's words about his own life, not a saying of the Prophet ﷺ. The boy in that sentence is the same Ibn 'Abbas whose explanations at-Tabari cites on this very verse.",
            "bn": "ইবন কাসীর এই আয়াতের আলোচনায় বুখারী থেকে ইবন আব্বাস (রাঃ)-এর নিজের সম্পর্কে বলা কথাটি আনেন। বুখারী তা বর্ণনা করেছেন (৪৫৮৭): 'আমি ও আমার মা দুর্বলদের মধ্যে ছিলাম।' তাঁর সহীহের আরেক জায়গায় (১৩৫৭) একই সাহাবীর কথা এভাবে এসেছে: 'আমি ও আমার মা দুর্বলদের মধ্যে ছিলাম, আমি শিশুদের মধ্যে আর আমার মা নারীদের মধ্যে।' এটি একজন সাহাবীর নিজের জীবনের কথা, নবী ﷺ-এর বাণী নয়। ওই বাক্যের বালকটিই সেই ইবন আব্বাস (রাঃ), যাঁর ব্যাখ্যা তাবারী এই আয়াতেই উদ্ধৃত করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Protector and a Helper",
          "bn": "অভিভাবক আর সাহায্যকারীর প্রার্থনা"
        },
        "p": [
          {
            "en": "Their prayer is quoted whole: rabbana akhrijna min hadhihi al-qaryati al-zalimi ahluha, our Lord, take us out of this town whose people are wrongdoers. Al-Qurtubi reports that the town is Makkah by the agreement of the interpreters, and at-Tabari notes that the Arabs call any city a qarya. Both point to the grammar: wrongdoing is attached to the town, but the act belongs to its people. As-Sa'di says they wronged themselves by disbelief and the believers by harm, keeping them from calling to their religion and from emigrating.",
            "bn": "তাদের দোয়া পুরোটাই উদ্ধৃত হয়েছে: রাব্বানা আখরিজনা মিন হাযিহিল কারইয়াতিয যালিমি আহলুহা, হে আমাদের রব, এই জনপদ থেকে আমাদের বের করে নাও, যার অধিবাসীরা জালিম। কুরতুবী জানান, তাফসীরকারদের ঐকমত্যে এই জনপদ মক্কা। তাবারী বলেন, আরবরা যে কোনো শহরকেই 'কারইয়া' বলে। দুজনেই ব্যাকরণের দিকে দৃষ্টি দেন: জুলুমের বিশেষণটি জনপদের সঙ্গে লেগে আছে, কিন্তু কাজটা তার অধিবাসীদের। সা'দী বলেন, তারা কুফর দিয়ে নিজেদের উপর জুলুম করেছিল, আর কষ্ট দিয়ে মুমিনদের উপর। দ্বীনের দাওয়াত দিতে আর হিজরত করতে তারা মুমিনদের বাধা দিত।"
          },
          {
            "en": "Then two requests, waliyyan and nasiran, a protector and a helper, both min ladunka, from Your own presence. At-Tabari explains the protector as one who takes charge of their affair and spares them the trial they are in, and the helper as one who gives them victory over those who wronged them. Al-Baghawi says Allah answered: when the Prophet ﷺ opened Makkah he placed 'Attab ibn Asid over them, and Allah made him a helper who gave the wronged their due from the wrongdoers. Ma'arif al-Qur'an adds that some had already been given a way out.",
            "bn": "তারপর দুটি চাওয়া: 'ওয়ালিয়্যান' ও 'নাসীরান', একজন অভিভাবক আর একজন সাহায্যকারী, দুটোই 'মিল লাদুনকা', তোমার নিজের কাছ থেকে। তাবারী বলেন, অভিভাবক মানে এমন কেউ, যে তাদের দায়িত্ব নেবে আর যে পরীক্ষায় তারা পড়েছে তা থেকে রক্ষা করবে। সাহায্যকারী মানে এমন কেউ, যে জালিমদের বিরুদ্ধে তাদের জয়ী করবে। বাগাভী বলেন, আল্লাহ দোয়া কবুল করেছিলেন। নবী ﷺ মক্কা বিজয়ের পর আত্তাব ইবন আসীদকে তাদের দায়িত্বে বসান। আল্লাহ তাঁকে তাদের সাহায্যকারী বানান, তিনি জালিমদের কাছ থেকে মজলুমদের হক আদায় করে দিতেন। মাআরিফুল কুরআন যোগ করে, কেউ কেউ তার আগেই বেরোনোর সুযোগ পেয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Feeble From the Start",
          "bn": "শুরু থেকেই দুর্বল"
        },
        "p": [
          {
            "en": "4:76 draws a line between two kinds of fighting. At-Tabari: the believers fight in obedience to Allah, in the way of His religion and law; the disbelievers fight in the way of the taghut, which he explains as obedience to Shaytan and the path he laid down for his allies. As-Sa'di names the taghut as Shaytan directly, and al-Qurtubi reports Abu Ishaq's proof from the verse itself: the next words say, fight the allies of Shaytan. Then the close: inna kayda al-shaytani kana da'ifa, the plot of Shaytan has ever been weak.",
            "bn": "৪:৭৬ আয়াত দুই ধরনের লড়াইয়ের মাঝে রেখা টেনে দেয়। তাবারীর ব্যাখ্যায় মুমিনরা লড়ে আল্লাহর আনুগত্যে, তাঁর দ্বীন ও শরীয়তের পথে। কাফিররা লড়ে তাগুতের পথে, আর তাগুতের পথ মানে শয়তানের আনুগত্য, সে তার বন্ধুদের জন্য যে পথ বানিয়েছে সেই পথ। সা'দী সরাসরি বলেন, তাগুত হলো শয়তান। কুরতুবী আবু ইসহাকের দলীল উল্লেখ করেন, যা আয়াতের ভেতরেই আছে: পরের কথাই বলছে, শয়তানের বন্ধুদের বিরুদ্ধে লড়াই করো। তারপর সমাপ্তি: ইন্না কাইদাশ শাইতানি কানা দাঈফা, শয়তানের চক্রান্ত সব সময়ই দুর্বল।"
          },
          {
            "en": "As-Sa'di defines kayd as taking hidden routes to harm an enemy, and says that however far Shaytan's cunning reaches it is utterly weak, unable to stand against the least thing of truth. At-Tabari reads the weakness in his followers' motives: they fight hoping for no reward and hold back fearing no punishment, moved by tribal zeal or envy, while the believer fights knowing what awaits him with Allah. Al-Baghawi recalls Badr, where Shaytan saw the angels, fled and abandoned his allies, as 8:48 narrates. Ma'arif al-Qur'an ties the weakness to the verse's own two terms: faith, and an effort made for Allah alone.",
            "bn": "সা'দী 'কাইদ'-এর সংজ্ঞা দেন: শত্রুর ক্ষতি করতে গোপন পথ ধরা। তিনি বলেন, শয়তানের চালাকি যত দূরই যাক, তা চরম দুর্বল। হকের সামান্যতম জিনিসের সামনেও তা দাঁড়াতে পারে না। তাবারী এই দুর্বলতা খোঁজেন শয়তানের অনুসারীরা কেন লড়ে, সেখানে। তারা সওয়াবের আশায় লড়ে না, শাস্তির ভয়েও লড়াই থেকে বিরত থাকে না। তাদের চালায় গোত্রীয় জেদ বা হিংসা। আর মুমিন লড়ে জেনে-বুঝে, আল্লাহর কাছে তার জন্য কী আছে। বাগাভী বদরের কথা মনে করান। ফেরেশতাদের দেখে শয়তান বন্ধুদের ফেলে পালিয়ে যায়, যেমন ৮:৪৮ আয়াতে আছে। মাআরিফুল কুরআন এই দুর্বলতাকে আয়াতের নিজের দুটি শর্তে বাঁধে: ঈমান, আর শুধু আল্লাহর জন্য চেষ্টা।"
          }
        ]
      },
      {
        "h": {
          "en": "Whom the Verses Concerned",
          "bn": "আয়াতগুলো কাদের নিয়ে"
        },
        "p": [
          {
            "en": "This needs saying without hedging. These verses spoke to the believers of the Prophet's ﷺ time, in a war that Allah and His Messenger commanded, and the oppressed they name were believers held in Makkah, as the commentaries fetched here identify them. The allies of Shaytan in 4:76 are, in these commentaries, the disbelievers who fought them then. The verses license nothing against any living person or community, and no one may lift them out to justify violence today. In Islamic law, armed struggle belongs to legitimate authority and qualified scholars, never to individuals or groups acting on their own reading.",
            "bn": "কথাটা কোনো দ্বিধা ছাড়াই বলা দরকার। এই আয়াতগুলো নবী ﷺ-এর যুগের মুমিনদের উদ্দেশে, এমন এক যুদ্ধে, যার আদেশ আল্লাহ ও তাঁর রাসূল দিয়েছিলেন। এখানে যে দুর্বলদের কথা, তারা মক্কায় আটকে থাকা মুমিন, তাফসীরগুলো তাদের এভাবেই চিহ্নিত করেছে। ৪:৭৬ আয়াতের 'শয়তানের বন্ধু' বলতে এই তাফসীরগুলো বোঝায় সেই কাফিরদের, যারা তখন তাদের বিরুদ্ধে লড়ছিল। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে আয়াতগুলো কোনো কিছুরই অনুমতি দেয় না। সহিংসতার পক্ষে যুক্তি বানাতে এগুলো তুলে আনার অধিকার কারও নেই। ইসলামী আইনে সশস্ত্র লড়াইয়ের সিদ্ধান্ত বৈধ কর্তৃপক্ষ ও যোগ্য আলেমদের হাতে। কোনো ব্যক্তি বা দল নিজের বুঝ অনুযায়ী তা নিতে পারে না।"
          },
          {
            "en": "Al-Qurtubi also points to means beside fighting. Freeing captives, he says, is a duty on the whole community, by fighting or by wealth, and that wealth is the more binding because it is lighter than lives. He reports Malik saying people must ransom captives with all their wealth, and the scholars adding that they owe them a share of their means. He grounds it in the Prophet's ﷺ words, which al-Bukhari records (3046) as a general narration not tied to this verse: 'Free the captive, feed the hungry and visit the sick.'",
            "bn": "কুরতুবী লড়াই ছাড়া অন্য উপায়ের কথাও বলেন। তাঁর মতে বন্দিদের মুক্ত করা গোটা উম্মাহর দায়িত্ব, লড়াই দিয়ে হোক বা সম্পদ দিয়ে। আর সম্পদ দিয়ে করা আরও বেশি জরুরি, কারণ প্রাণের তুলনায় সম্পদ হালকা। তিনি ইমাম মালিকের কথা আনেন: মানুষের কর্তব্য নিজেদের সমস্ত সম্পদ দিয়ে বন্দিদের মুক্তিপণ দেওয়া। আলেমরা আরও বলেছেন, নিজেদের সম্পদে তাদের ভাগ দেওয়াও কর্তব্য। কুরতুবী এর ভিত্তি দেন নবী ﷺ-এর বাণীতে। বুখারী তা বর্ণনা করেছেন (৩০৪৬), তবে এটি সাধারণ হাদীস, এই আয়াতের সঙ্গে সরাসরি যুক্ত নয়: 'বন্দিকে মুক্ত করো, ক্ষুধার্তকে খাওয়াও, আর অসুস্থকে দেখতে যাও।'"
          }
        ]
      },
      {
        "h": {
          "en": "The Prayer of the Trapped",
          "bn": "আটকে পড়া মানুষের দোয়া"
        },
        "p": [
          {
            "en": "The prayer of 4:75 can be prayed by anyone trapped today, in a household, a debt, an illness or a place where faith is pressed down, and it can be prayed for others by name. Ask for both things those believers asked: a way out, and a protector and helper from Allah's own presence. Then be part of the answer by lawful means: speaking up for the wronged, aid for the displaced and the poor, honest testimony when a case is heard, and steady du'a.",
            "bn": "৪:৭৫ আয়াতের দোয়াটি আজ যে কেউ পড়তে পারেন, যিনি কোথাও আটকে আছেন: কোনো সংসারে, ঋণের জালে, অসুখে, কিংবা এমন জায়গায় যেখানে ঈমান নিয়ে বাঁচা কঠিন। অন্যদের জন্যও তাদের নাম ধরে এই দোয়া করা যায়। সেই মুমিনরা যে দুটি জিনিস চেয়েছিলেন, দুটোই চান: বেরোনোর পথ, আর আল্লাহর নিজের কাছ থেকে একজন অভিভাবক ও সাহায্যকারী। তারপর বৈধ উপায়ে নিজেও সেই জবাবের অংশ হোন: মজলুমের পক্ষে কথা বলা, বাস্তুহারা ও গরিবদের সাহায্য, বিচারের সময় সত্য সাক্ষ্য, আর অবিরাম দোয়া।"
          },
          {
            "en": "The opening phrase reaches ordinary days too. At-Tabari's sale was wealth spent for Allah's pleasure; Ibn Zayd warned that the foolish trade the other way. Most of us make that trade in small coin: an hour given to a neighbour in trouble rather than a screen, money sent to relief rather than an upgrade, a hard truth spoken for someone who cannot speak it. As-Sa'di's words about Shaytan's cunning, that it cannot stand against the least thing of truth, are worth recalling when the urge to do nothing feels strong.",
            "bn": "আয়াতের শুরুর কথাটিও প্রতিদিনের জীবনে পৌঁছে যায়। তাবারীর কাছে সেই বিক্রি মানে আল্লাহর সন্তুষ্টির জন্য সম্পদ খরচ করা। ইবন যায়দ সতর্ক করেছেন, বোকারা উল্টো দিকে লেনদেন করে। আমাদের বেশির ভাগের লেনদেন চলে খুচরো পয়সায়: স্ক্রিনের বদলে বিপদে পড়া প্রতিবেশীকে এক ঘণ্টা দেওয়া, নতুন জিনিস কেনার বদলে ত্রাণে টাকা পাঠানো, যে নিজের কথা বলতে পারে না তার হয়ে একটা কঠিন সত্য বলা। কিছু না করার টান যখন খুব জোরালো লাগে, তখন সা'দীর কথাটা মনে রাখার মতো: শয়তানের চালাকি হকের সামান্যতম জিনিসের সামনেও দাঁড়াতে পারে না।"
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
  "4:97-99": {
    "sections": [
      {
        "h": {
          "en": "Swelling the Other Side's Ranks",
          "bn": "অন্য পক্ষের দল ভারী করা"
        },
        "p": [
          {
            "en": "Al-Bukhari records the occasion (4596), from Abu al-Aswad Muhammad ibn 'Abd al-Rahman: a levy was imposed on the people of Madinah and I was enrolled in it. I met 'Ikrimah, the freed slave of Ibn 'Abbas, told him, and he forbade me from it in the strongest terms. Then he said: Ibn 'Abbas told me that some people from among the Muslims were with the idolaters, swelling the numbers of the idolaters against Allah's Messenger ﷺ. An arrow would come and be shot, and strike one of them and kill him, or he would be struck and killed. So Allah revealed: Indeed, those whom the angels take while wronging themselves.",
            "bn": "আয়াত নাযিলের প্রেক্ষাপট বুখারী বর্ণনা করেছেন (৪৫৯৬), আবুল আসওয়াদ মুহাম্মাদ ইবন আবদির রহমানের সূত্রে। তিনি বলেন, মদীনাবাসীর উপর একটি সেনাদল গঠনের দায় চাপানো হলো, আর তাতে আমার নামও লেখা হলো। আমি ইবন আব্বাসের মুক্ত দাস ইকরিমার সঙ্গে দেখা করে তাঁকে জানালাম। তিনি আমাকে কঠোরভাবে নিষেধ করলেন। তারপর বললেন, ইবন আব্বাস আমাকে জানিয়েছেন: কিছু মুসলিম মুশরিকদের সঙ্গে থাকত, রাসূলুল্লাহ ﷺ-এর বিরুদ্ধে মুশরিকদের দল ভারী করত। তীর ছোড়া হতো, এসে তাদের কারও গায়ে লেগে তাকে মেরে ফেলত, কিংবা তরবারির আঘাতে সে নিহত হতো। তখন আল্লাহ নাযিল করলেন: নিশ্চয়ই যাদের প্রাণ ফেরেশতারা এমন অবস্থায় হরণ করে যে তারা নিজেদের উপর জুলুম করছিল।"
          },
          {
            "en": "Al-Qurtubi describes them as a group in Makkah who had accepted Islam and declared their faith to the Prophet ﷺ. When he emigrated they stayed with their people; some were put under pressure and gave way, and when Badr came some went out with the disbelievers. The commentators name several young men of Quraysh, and their lists do not agree. In the narration, 'Ikrimah answers a man's enrolment in an army with this report. The question was not only what a person believes, but whose numbers he adds to.",
            "bn": "কুরতুবী তাদের পরিচয় দেন এভাবে: মক্কার একদল মানুষ ইসলাম গ্রহণ করেছিল এবং নবী ﷺ-এর কাছে ঈমানের কথা প্রকাশও করেছিল। তিনি হিজরত করলে তারা নিজেদের গোত্রের সঙ্গেই থেকে গেল। তাদের কারও কারও উপর চাপ এল, তারা টলে গেল। বদরের সময় এলে কেউ কেউ কাফিরদের সঙ্গে যুদ্ধে বেরিয়ে পড়ল। তাফসীরকারেরা কুরাইশের কয়েকজন যুবকের নাম বলেন, তবে তাঁদের তালিকা মেলে না। খেয়াল করুন, বর্ণনায় এক ব্যক্তির সেনাদলে নাম লেখানোর জবাব ইকরিমা দিলেন এই বর্ণনা দিয়ে। প্রশ্নটা তাই শুধু মানুষের বিশ্বাস নিয়ে নয়, সে কার দল ভারী করছে তা নিয়েও।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked at the Last Breath",
          "bn": "শেষ নিঃশ্বাসের প্রশ্ন"
        },
        "p": [
          {
            "en": "Inna alladhina tawaffahumu al-mala'ikatu zalimi anfusihim. At-Tabari explains tawaffahum as those whose souls the angels seize. He and al-Qurtubi note that the verb can be read as past, or as pointing to the future with one of its two ta's dropped: those whom the angels will take. Al-Baghawi says the angels may be the angel of death and his helpers, or the angel of death alone, as in 32:11, since the Arabs may address one person with a plural. As-Sa'di infers from the word that whoever is taken has received in full his provision, his term and his deeds.",
            "bn": "ইন্নাল্লাযীনা তাওয়াফফাহুমুল মালাইকাতু যালিমী আনফুসিহিম। তাবারী তাওয়াফফাহুমের ব্যাখ্যা দেন: যাদের রূহ ফেরেশতারা কবজ করে। তিনি ও কুরতুবী দুজনেই বলেন, ক্রিয়াটি অতীতের অর্থে পড়া যায়, আবার ভবিষ্যতের অর্থেও, তখন শুরুর দুটি ‘তা’-এর একটি বাদ পড়েছে ধরা হয়: যাদের প্রাণ ফেরেশতারা হরণ করবে। বাগাভী বলেন, ফেরেশতা বলতে মৃত্যুর ফেরেশতা ও তাঁর সহকারীরা হতে পারেন, অথবা শুধু মৃত্যুর ফেরেশতা, যেমন ৩২:১১ আয়াতে আছে। আরবরা কখনো একজনকেও বহুবচনে সম্বোধন করে। সা'দী শব্দটি থেকেই একটি কথা বের করেন: যার মৃত্যু হলো, সে তার রিযিক, আয়ু আর আমল পুরোপুরি বুঝে পেয়ে গেছে।"
          },
          {
            "en": "Zalimi anfusihim describes their state: al-Baghawi and al-Qurtubi read it as while wronging themselves. At-Tabari: earning for themselves Allah's anger and displeasure. Al-Muyassar: by sitting on in the land of disbelief and leaving hijrah. Then the angels ask, fima kuntum, in what were you? At-Tabari: in what were you of your religion? Al-Baghawi: in which of the two parties were you, the Muslims or the idolaters? Al-Qurtubi calls it a question of reproach. As-Sa'di: by what were you set apart from the idolaters? Rather, you swelled their numbers.",
            "bn": "যালিমী আনফুসিহিম সেই মুহূর্তে তাদের অবস্থার বর্ণনা। বাগাভী ও কুরতুবী এর অর্থ করেন: যখন তারা নিজেদের উপর জুলুম করছিল। তাবারীর ব্যাখ্যায়: নিজেদের জন্য আল্লাহর ক্রোধ ও অসন্তুষ্টি কামাই করছিল। মুয়াসসার বলে: কুফরের দেশে বসে থেকে আর হিজরত ছেড়ে দিয়ে। তারপর ফেরেশতারা প্রশ্ন করেন, ফীমা কুনতুম, তোমরা কীসে ছিলে? তাবারী বলেন: দ্বীনের কোন অবস্থায় ছিলে? বাগাভী বলেন: দুই দলের কোনটিতে ছিলে, মুসলিমদের সঙ্গে, নাকি মুশরিকদের সঙ্গে? কুরতুবীর মতে এটি ভর্ৎসনার প্রশ্ন। সা'দী বলেন: মুশরিকদের থেকে তোমাদের আলাদা করত কোন জিনিস? বরং তোমরা তো তাদের দলই ভারী করেছ।"
          }
        ]
      },
      {
        "h": {
          "en": "An Excuse Turned Back",
          "bn": "ফিরিয়ে দেওয়া অজুহাত"
        },
        "p": [
          {
            "en": "Qalu kunna mustad'afina fi al-ard: we were held weak in the land. At-Tabari voices what they meant: the idolaters overpowered us in our land by their numbers and strength and kept us from faith in Allah and from following His Messenger. He calls it a weak excuse and a flimsy argument. Al-Qurtubi calls it an invalid excuse, since they could have found the means and the way. As-Sa'di says they were not truthful in it, because Allah rebuked and threatened them, He burdens no soul beyond its capacity (2:286), and He excepted those who were weak in truth. Al-Baghawi: Allah exposed their lie.",
            "bn": "কালূ কুন্না মুসতাদআফীনা ফিল আরদ: দেশে আমাদের দুর্বল করে রাখা হয়েছিল। তাবারী তাদের কথার মর্ম খুলে বলেন: মুশরিকরা সংখ্যা আর শক্তির জোরে আমাদের নিজেদের দেশেই কাবু করে রেখেছিল, আল্লাহর উপর ঈমান আনতে আর তাঁর রাসূলের অনুসরণ করতে দেয়নি। তাবারী একে বলেন দুর্বল অজুহাত, ঠুনকো যুক্তি। কুরতুবী বলেন, এ অজুহাত গ্রহণযোগ্য নয়, কারণ উপায় বের করার আর পথ খুঁজে নেওয়ার সামর্থ্য তাদের ছিল। সা'দী বলেন, এ কথায় তারা সত্যবাদী ছিল না। কারণ আল্লাহ তাদের ভর্ৎসনা করেছেন, শাস্তির হুমকি দিয়েছেন, অথচ তিনি কাউকে সাধ্যের বাইরে দায় চাপান না (২:২৮৬)। আর যারা সত্যিই দুর্বল, তাদের তিনি আলাদা করে ছাড় দিয়েছেন। বাগাভী বলেন, আল্লাহ তাদের মিথ্যা ফাঁস করে দিয়েছেন।"
          },
          {
            "en": "Alam takun ardu Allahi wasi'atan fa-tuhajiru fiha? As-Sa'di calls this a question of affirmation: everyone knows Allah's earth is wide, and wherever a servant cannot practise his religion openly, there is room elsewhere in which to worship Allah. He cites 29:56: My servants who believe, My earth is wide, so worship Me alone. Al-Qurtubi takes the land meant here as Madinah. At-Tabari spells out the move: leave your land and your homes, part from those who keep you from faith, and go to a land whose people would shield you from the power of shirk.",
            "bn": "আলাম তাকুন আরদুল্লাহি ওয়াসিআতান ফাতুহাজিরূ ফীহা? সা'দী বলেন, এটি স্বীকার করিয়ে নেওয়ার প্রশ্ন। আল্লাহর জমিন যে প্রশস্ত, তা সবারই জানা। বান্দা যেখানে নিজের দ্বীন প্রকাশ্যে পালন করতে পারে না, সেখান থেকে সরে গিয়ে আল্লাহর ইবাদত করার মতো জায়গা জমিনে আছে। তিনি ২৯:৫৬ আয়াত উদ্ধৃত করেন: হে আমার মু’মিন বান্দারা, আমার জমিন প্রশস্ত, অতএব তোমরা আমারই ইবাদত করো। কুরতুবীর মতে এখানে জমিন বলতে মদীনা বোঝানো হয়েছে। কী করতে হতো, তাবারী তা খুলে বলেন: নিজের দেশ আর ঘরবাড়ি ছেড়ে বেরিয়ে পড়ো, যারা ঈমান আনতে বাধা দেয় তাদের সঙ্গ ছাড়ো, আর এমন দেশে যাও যার মানুষ তোমাদের শিরকের ক্ষমতা থেকে আড়াল করে রাখবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What They Died Upon",
          "bn": "কোন অবস্থায় তাদের মৃত্যু"
        },
        "p": [
          {
            "en": "Fa-ula'ika ma'wahum jahannam: their refuge is Hell. On what, then, did these men die? The commentators differ. Al-Qurtubi argues from the exchange itself that they died Muslims who wronged themselves by not emigrating: had they died disbelievers, none of this would have been said to them. He mentions another view, introduced with 'it was said', that they doubted and left the religion, and judges the first sounder. Ad-Dahhak, in Ibn Kathir and at-Tabari, calls them hypocrites. A report from Ibn Jurayj in at-Tabari says they were killed at Badr as disbelievers, having turned back from Islam.",
            "bn": "ফাউলাইকা মাওয়াহুম জাহান্নাম: তাদের আশ্রয় জাহান্নাম। তাহলে এই লোকেরা কোন অবস্থায় মারা গিয়েছিল? এ নিয়ে তাফসীরকারদের মত আলাদা। কুরতুবী প্রশ্নোত্তর থেকেই যুক্তি দেন: তারা মুসলিম অবস্থায় মারা গেছে, হিজরত না করে নিজেদের উপর জুলুম করেছে। কাফির হয়ে মারা গেলে তাদের এসব কথা বলাই হতো না। তিনি ‘বলা হয়’ বলে আরেকটি মতও আনেন: তারা সন্দেহে পড়ে দ্বীন ছেড়ে দিয়েছিল। তবে প্রথম মতটিকেই তিনি বেশি সঠিক বলেন। ইবন কাসীর ও তাবারী দাহহাকের মত আনেন: তারা ছিল মুনাফিক। তাবারীতে ইবন জুরাইজের এক বর্ণনা বলে, ইসলাম থেকে ফিরে গিয়ে তারা কাফির অবস্থায় বদরে নিহত হয়েছিল।"
          },
          {
            "en": "These are the commentators' judgements on particular men in Makkah in the Prophet's time ﷺ, reported here as theirs. The verse describes what the text describes and licenses nothing against any living person or community. It gives no reader the right to call any Muslim a disbeliever, or to say of anyone, living or dead, that he is in the Fire. As-Sa'di supplies the principle: a threat like this names the cause that brings its consequence, which follows when its conditions are met and nothing prevents it, and something may prevent it.",
            "bn": "এগুলো নবী ﷺ-এর যুগে মক্কার নির্দিষ্ট কিছু মানুষ সম্পর্কে তাফসীরকারদের রায়, আর এখানে তা তাঁদের কথা হিসেবেই উদ্ধৃত হলো। আয়াতটি যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। কোনো মুসলিমকে কাফির বলার অধিকার, কিংবা জীবিত বা মৃত কারও সম্পর্কে সে জাহান্নামী বলে রায় দেওয়ার অধিকার, এ আয়াত কোনো পাঠককে দেয় না। সা'দী মূলনীতিটি ধরিয়ে দেন: এমন হুমকি আসলে একটি কারণের উল্লেখ, যার পরিণাম ঘটে শর্তগুলো পূরণ হলে আর বাধা না থাকলে। আর কোনো বাধা সেই পরিণাম ঠেকিয়েও দিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Plan and No Road",
          "bn": "না উপায়, না পথ"
        },
        "p": [
          {
            "en": "Illa al-mustad'afina mina al-rijali wa-al-nisa'i wa-al-wildan: except the weak among men, women and children. At-Tabari and al-Qurtubi both read it as an exception from those whose refuge is Hell. At-Tabari describes those excepted as unable to emigrate through hardship, lack of means, and little sense or knowledge of the road. 'Ikrimah, in a report through Ibn Jurayj in at-Tabari, describes them: the old man, the old woman, and the young girls and boys. Al-Qurtubi speaks of the truly weak: men with lasting disability, weak women, and children.",
            "bn": "ইল্লাল মুসতাদআফীনা মিনার রিজালি ওয়ান নিসাই ওয়াল উইলদান: তবে পুরুষ, নারী ও শিশুদের মধ্যে যারা দুর্বল। তাবারী ও কুরতুবী দুজনেই একে দেখেন ব্যতিক্রম হিসেবে: জাহান্নাম যাদের আশ্রয়, তাদের থেকে এরা আলাদা। তাবারীর বর্ণনায় এরা হিজরত করতে অক্ষম ছিল অভাবের কারণে, উপায়ের স্বল্পতায়, আর পথের দিশা ও জ্ঞানের অভাবে। তাবারীতে ইবন জুরাইজের সূত্রে ইকরিমার একটি বর্ণনা তাদের পরিচয় দেয়: বৃদ্ধ পুরুষ, বৃদ্ধা নারী, আর ছোট ছোট মেয়ে ও ছেলে। কুরতুবী বলেন সত্যিকারের দুর্বলদের কথা: স্থায়ী রোগে পঙ্গু পুরুষ, দুর্বল নারী আর শিশু।"
          },
          {
            "en": "La yastati'una hilatan wa-la yahtaduna sabila: they can devise no plan and find no way. As-Suddi, in at-Tabari, takes hilah as money; al-Baghawi: no plan, no provision for the journey, no strength to leave. For sabil, Mujahid gives the road to Madinah. Al-Qurtubi says hilah is a general word for every kind of means of escape, and that sabil, though Mujahid and as-Suddi take it as the road to Madinah, is rightly general to every way. Ibn Kathir: they could not free themselves from the idolaters' hands, and even if they could, would not know the road.",
            "bn": "লা ইয়াসতাতীঊনা হীলাতান ওয়ালা ইয়াহতাদূনা সাবীলা: তারা কোনো উপায় বের করতে পারে না, কোনো পথও খুঁজে পায় না। তাবারীতে সুদ্দী হীলা মানে বলেন অর্থকড়ি। বাগাভীর ব্যাখ্যায়: কোনো কৌশল নেই, সফরের খরচ নেই, বেরিয়ে যাওয়ার শক্তিও নেই। সাবীল সম্পর্কে মুজাহিদ বলেন, মদীনার পথ। কুরতুবী বলেন, হীলা শব্দটি ব্যাপক, বাঁচার যত রকম উপায় আছে সবই এর মধ্যে পড়ে। মুজাহিদ ও সুদ্দী সাবীল বলতে মদীনার পথ বুঝলেও তাঁর মতে সঠিক কথা হলো, শব্দটি সব পথকেই বোঝায়। ইবন কাসীর বলেন, মুশরিকদের হাত থেকে নিজেদের ছাড়িয়ে নেওয়ার সামর্থ্য তাদের ছিল না। ছাড়াতে পারলেও কোন পথে যাবে, তা তারা জানত না।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Allah Excused",
          "bn": "যাদের ওজর আল্লাহ কবুল করলেন"
        },
        "p": [
          {
            "en": "Al-Bukhari records (4588) from Ibn Abi Mulaykah that Ibn 'Abbas (RA) recited, except the weak among men, women and children, and said: My mother and I were among those whom Allah excused. Al-Qurtubi says Ibn 'Abbas was then one of the children, and names his mother: Umm al-Fadl, Lubabah bint al-Harith. He also counts 'Ayyash ibn Abi Rabi'ah and Salamah ibn Hisham among the truly weak, those for whom the Prophet ﷺ prayed. The same three words, men, women and children, name the oppressed of Makkah in 4:75; here a Companion found himself among them, excused rather than accused.",
            "bn": "বুখারী (৪৫৮৮) ইবন আবী মুলাইকার সূত্রে বর্ণনা করেন: ইবন আব্বাস (রাঃ) তিলাওয়াত করলেন, তবে পুরুষ, নারী ও শিশুদের মধ্যে যারা দুর্বল, তারপর বললেন: আমি আর আমার মা ছিলাম তাদের মধ্যে, যাদের ওজর আল্লাহ কবুল করেছেন। কুরতুবী জানান, ইবন আব্বাস তখন শিশুদের দলে ছিলেন, আর তাঁর মায়ের নামও বলেন: উম্মুল ফাদল লুবাবা বিনতুল হারিস। সত্যিকারের দুর্বলদের মধ্যে তিনি আইয়াশ ইবন আবী রাবীআ ও সালামা ইবন হিশামকেও গণ্য করেন, নবী ﷺ যাঁদের জন্য দোয়া করতেন। পুরুষ, নারী ও শিশু, এই তিনটি শব্দ দিয়েই ৪:৭৫ আয়াতে মক্কার নির্যাতিতদের কথা বলা হয়েছে। আর এখানে একজন সাহাবী নিজেকে খুঁজে পেলেন তাদের মধ্যেই, অভিযুক্ত হিসেবে নয়, ছাড় পাওয়া একজন হিসেবে।"
          },
          {
            "en": "That prayer is in al-Bukhari (4598), and Ibn Kathir brings it under 4:99. Abu Hurayrah (RA) said: While the Prophet ﷺ was praying 'Isha', he said, Sami'a Allahu li-man hamidah, then said before he prostrated: O Allah, save 'Ayyash ibn Abi Rabi'ah. O Allah, save Salamah ibn Hisham. O Allah, save al-Walid ibn al-Walid. O Allah, save the weak among the believers. O Allah, make Your pressure severe on Mudar. O Allah, make it years like the years of Yusuf (AS). Its words on Mudar belong to that hour and license nothing against any living person or community.",
            "bn": "সেই দোয়া আছে বুখারীতে (৪৫৯৮), আর ইবন কাসীর তা এনেছেন ৪:৯৯ আয়াতের আলোচনায়। আবূ হুরায়রা (রাঃ) বলেন: নবী ﷺ ইশার নামায পড়ছিলেন। তিনি বললেন, সামিআল্লাহু লিমান হামিদাহ। তারপর সিজদায় যাওয়ার আগে বললেন: হে আল্লাহ, আইয়াশ ইবন আবী রাবীআকে মুক্তি দাও। হে আল্লাহ, সালামা ইবন হিশামকে মুক্তি দাও। হে আল্লাহ, ওয়ালীদ ইবনুল ওয়ালীদকে মুক্তি দাও। হে আল্লাহ, মু’মিনদের মধ্যে যারা দুর্বল, তাদের মুক্তি দাও। হে আল্লাহ, মুদারের উপর তোমার চাপ কঠোর করো। হে আল্লাহ, এটাকে ইউসুফ (আঃ)-এর বছরগুলোর মতো বছর বানিয়ে দাও। মুদার সম্পর্কে এ কথাগুলো সেই সময়ের। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "When Allah Says Perhaps",
          "bn": "আল্লাহ যখন বলেন ‘হয়তো’"
        },
        "p": [
          {
            "en": "Fa-ula'ika 'asa Allahu an ya'fuwa 'anhum: for those, it may be that Allah will pardon them. Ibn Kathir says 'asa from Allah is binding. Al-Baghawi agrees, giving the reason: the word raises hope, and when Allah raises a servant's hope He brings him to it. As-Sa'di says such words from Allah are certain to come true by His generosity. Wa-kana Allahu 'afuwwan ghafura: at-Tabari explains 'afuww as He who, by His favour, overlooks His servants' sins by not punishing them, and ghafur as He who covers their sins by pardoning them.",
            "bn": "ফাউলাইকা আসাল্লাহু আন ইয়াফুওয়া আনহুম: আশা করা যায়, আল্লাহ তাদের মাফ করবেন। ইবন কাসীর বলেন, আল্লাহর পক্ষ থেকে ‘আসা’ মানে নিশ্চিত। বাগাভীও তা-ই বলেন, আর কারণও দেখান: শব্দটি আশা জাগায়, আর আল্লাহ কোনো বান্দার মনে আশা জাগালে সেই আশা পূরণ করেই দেন। সা'দী বলেন, আল্লাহর কাছ থেকে এমন শব্দ তাঁর দয়া ও মহানুভবতার কারণে অবশ্যই বাস্তবায়িত হয়। ওয়া কানাল্লাহু আফুওয়ান গাফূরা: তাবারীর ব্যাখ্যায় আফুওয়্যু তিনি, যিনি নিজ অনুগ্রহে বান্দাদের গুনাহ ক্ষমা করে দেন, তার শাস্তি না দিয়ে। আর গাফূর তিনি, যিনি মাফ করে দিয়ে বান্দাদের গুনাহ ঢেকে রাখেন।"
          },
          {
            "en": "Why speak of pardon, if they had no choice? Al-Qurtubi raises it himself: whoever has no means to emigrate has no sin to be pardoned. His answer: someone might imagine that the utmost hardship had to be borne for hijrah, on pain of punishment. Allah removed that idea; leaving hijrah was allowed to anyone who lacked provision and a mount, and such people will not be pressed hard in the reckoning. At-Tabari: they did not stay by choice, or preferring the land of disbelief, but from incapacity. Al-Muyassar: pardon is hoped for them because Allah knows the truth of their state.",
            "bn": "তাদের তো কোনো উপায়ই ছিল না, তাহলে মাফের কথা কেন? প্রশ্নটা কুরতুবী নিজেই তোলেন: হিজরতের কোনো উপায় যার নেই, তার তো এমন গুনাহই নেই যা মাফ করতে হবে। তাঁর উত্তর: কেউ ভাবতে পারত, হিজরতের জন্য চরম কষ্টও সইতে হবে, আর যে তা সইবে না সে শাস্তি পাবে। আল্লাহ সেই ধারণা দূর করে দিলেন। পাথেয় আর বাহন না থাকলে হিজরত না করার অনুমতি ছিল, আর হিসাবের দিন এমন লোকদের সঙ্গে কড়াকড়ি করা হবে না। তাবারী বলেন, তারা নিজের ইচ্ছায় বা কুফরের দেশকে বেশি পছন্দ করে থেকে যায়নি, থেকেছে অক্ষমতার কারণে। মুয়াসসার বলে, তাদের জন্য মাফের আশা আছে, কারণ তাদের আসল অবস্থা আল্লাহ জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Is the Command Still Binding?",
          "bn": "বিধানটি কি আজও বহাল"
        },
        "p": [
          {
            "en": "Whether, and when, the verse binds Muslims today is a question of fiqh on which the commentators differ. Ibn Kathir reads it as general for anyone who lives among idolaters while able to emigrate and unable to establish his religion: such a person wrongs himself and does what is forbidden, by consensus and by this verse. As-Sa'di, writing of one who leaves hijrah while able to make it, calls hijrah one of the greatest obligations and leaving it a major sin. Al-Qurtubi says hijrah was obligatory on all who accepted Islam, and takes the verse as evidence for leaving a land where sins are done.",
            "bn": "আজকের মুসলিমদের উপর এ আয়াতের বিধান খাটে কি না, আর খাটলে কখন, তা ফিকহের প্রশ্ন। তাফসীরকারেরা এ বিষয়ে ভিন্ন ভিন্ন কথা বলেন। ইবন কাসীরের মতে আয়াতটি সবার জন্য প্রযোজ্য, যে মুশরিকদের মাঝে বাস করে, অথচ হিজরতের সামর্থ্য রাখে আর সেখানে দ্বীন কায়েম করতে পারে না। এমন ব্যক্তি নিজের উপর জুলুম করে, আর ইজমা ও এই আয়াত অনুযায়ী হারাম কাজে লিপ্ত হয়। সামর্থ্য থাকা সত্ত্বেও যে হিজরত ছেড়ে দেয়, তার প্রসঙ্গে সা'দী হিজরতকে সবচেয়ে বড় ফরযগুলোর একটি আর তা ছেড়ে দেওয়াকে কবীরা গুনাহ বলেন। কুরতুবী বলেন, ইসলাম গ্রহণকারী প্রত্যেকের উপর হিজরত ফরয ছিল। তিনি আয়াতটিকে এমন দেশ ছেড়ে যাওয়ার দলিল হিসেবেও দেখেন, যেখানে গুনাহর কাজ চলে।"
          },
          {
            "en": "Al-Baghawi records a view, introduced with 'it was said', that after the Prophet's emigration Allah accepted Islam only with hijrah, and that this was abrogated after the conquest of Makkah. He cites the Prophet's words, which al-Bukhari records in full (2783) from Ibn 'Abbas (RA): Allah's Messenger ﷺ said: There is no hijrah after the Conquest, but jihad and intention; and when you are called out, go out. This article tells no reader to leave any country and passes no judgement on Muslims living anywhere. Scholars weigh such conditions case by case, and whoever faces the question should ask a qualified scholar.",
            "bn": "বাগাভী ‘বলা হয়’ বলে একটি মত উল্লেখ করেন: নবী ﷺ-এর হিজরতের পর আল্লাহ হিজরত ছাড়া কারও ইসলাম কবুল করতেন না, আর মক্কা বিজয়ের পর সেই বিধান রহিত হয়ে যায়। এর পক্ষে তিনি নবী ﷺ-এর বাণী আনেন। পুরো বাণীটি বুখারী (২৭৮৩) ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন। রাসূলুল্লাহ ﷺ বলেছেন: বিজয়ের পর আর হিজরত নেই, তবে জিহাদ ও নিয়ত রয়ে গেছে। আর যখন তোমাদের বেরিয়ে পড়ার ডাক দেওয়া হবে, তখন বেরিয়ে পড়ো। এই লেখা কোনো পাঠককে কোনো দেশ ছেড়ে যেতে বলে না, আর কোথাও বাস করা মুসলিমদের সম্পর্কে কোনো রায়ও দেয় না। এসব শর্ত আলেমরা প্রতিটি ক্ষেত্রে আলাদা করে বিবেচনা করেন। যার সামনে প্রশ্নটি আসে, তিনি যেন একজন যোগ্য আলেমের কাছে জিজ্ঞেস করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Real Weakness, Borrowed Weakness",
          "bn": "আসল অক্ষমতা, ধার করা অক্ষমতা"
        },
        "p": [
          {
            "en": "As-Sa'di sets the measure in one sentence: a person is excused only when he has spent his effort and the doors of every means have closed on him, because the verse says they cannot devise a plan. That line separates the weakness of 4:98 from the 'we were weak' of 4:97. Most of us say the second more often than we admit: I cannot leave this job, this circle, this habit. Sometimes that is true. Sometimes it means I have not tried, or that leaving would cost me something I would rather keep.",
            "bn": "সা'দী একটি বাক্যেই মাপকাঠিটা দিয়ে দেন: মানুষ তখনই অপারগ গণ্য হয়, যখন সে নিজের সবটুকু চেষ্টা করেছে আর উপায়ের সব দরজা তার সামনে বন্ধ হয়ে গেছে। কারণ আয়াত বলছে, তারা কোনো উপায় বের করতে পারে না। এই কথাটিই ৪:৯৮ আয়াতের দুর্বলতাকে ৪:৯৭ আয়াতের ‘আমরা দুর্বল ছিলাম’ থেকে আলাদা করে। দ্বিতীয় কথাটা আমরা যতটা স্বীকার করি, তার চেয়ে অনেক বেশি বলি: এই চাকরি ছাড়তে পারি না, এই আড্ডা ছাড়তে পারি না, এই অভ্যাস ছাড়তে পারি না। কখনো কথাটা সত্যি। কখনো এর মানে, আমি চেষ্টাই করিনি, কিংবা ছাড়লে এমন কিছু হারাতে হবে যা আমি ধরে রাখতে চাই।"
          },
          {
            "en": "So the verse asks for honesty, not a ready excuse. Where a workplace, a group of friends or a habit keeps wearing down one's prayer and faith, and a way out is within reach, it is worth taking. Where it is truly out of reach, 4:99 is the comfort, for Allah knows each case as it is. And at-Tabari carries a report from Ibn 'Abbas (RA) that some in Makkah who set out, were overtaken and gave way, and despaired when 29:10 came down, were answered by 16:110: your Lord, to those who emigrated after being tried, then strove and were patient, is Forgiving, Merciful.",
            "bn": "আয়াতটি তাই চায় সততা, হাতের কাছে রাখা অজুহাত নয়। কোনো কর্মস্থল, বন্ধুদের কোনো দল বা কোনো অভ্যাস যদি ধীরে ধীরে নামায আর ঈমান ক্ষইয়ে দিতে থাকে, আর বেরিয়ে আসার পথ নাগালের মধ্যে থাকে, তবে সেই পথ ধরাই ভালো। আর পথ যদি সত্যিই নাগালের বাইরে হয়, তবে ৪:৯৯ আয়াতেই সান্ত্বনা আছে, কারণ প্রতিটি অবস্থা যেমন, আল্লাহ তা তেমনই জানেন। তাবারী ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন: মক্কার কিছু মানুষ বেরিয়ে পড়েছিল, পথে ধরা পড়ে টলে গিয়েছিল, আর ২৯:১০ আয়াত নাযিল হলে হতাশ হয়ে পড়েছিল। তাদের জবাবে নাযিল হলো ১৬:১১০: যারা পরীক্ষায় পড়ার পর হিজরত করেছে, তারপর সংগ্রাম করেছে ও সবর করেছে, তোমার রব তাদের প্রতি ক্ষমাশীল, পরম দয়ালু।"
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
  "4:105-107": {
    "sections": [
      {
        "h": {
          "en": "Three Orders to One Judge",
          "bn": "এক বিচারকের প্রতি তিন আদেশ"
        },
        "p": [
          {
            "en": "Inna anzalna ilayka al-kitaba bi-l-haqq: We have sent down to you the Book with the truth, so that you may judge between people by what Allah has shown you; and do not be a pleader for the treacherous. Then 4:106: seek Allah's forgiveness; Allah is Forgiving, Merciful. Then 4:107: do not argue on behalf of those who betray themselves; Allah does not love whoever is a habitual traitor and sinner. Three short verses, one addressee, the Prophet ﷺ, and one subject: what a judge may and may not lend his voice to.",
            "bn": "ইন্না আনযালনা ইলাইকাল কিতাবা বিলহাক্ক: আমি তোমার প্রতি সত্যসহ কিতাব নাযিল করেছি, যাতে আল্লাহ তোমাকে যা দেখিয়েছেন সে অনুযায়ী মানুষের মধ্যে ফায়সালা করো। আর খিয়ানতকারীদের পক্ষে উকিল হয়ো না। তারপর ৪:১০৬: আল্লাহর কাছে ক্ষমা চাও, আল্লাহ ক্ষমাশীল, পরম দয়ালু। তারপর ৪:১০৭: যারা নিজেদের সঙ্গে খিয়ানত করে, তাদের হয়ে তর্ক কোরো না। যে বারবার খিয়ানত করে আর গুনাহে ডুবে থাকে, আল্লাহ তাকে ভালোবাসেন না। তিনটি ছোট আয়াত, সম্বোধন একজনকেই, নবী ﷺ-কে। বিষয়ও একটাই: বিচারক কোন কাজে নিজের কণ্ঠ ধার দিতে পারেন, আর কোন কাজে পারেন না।"
          },
          {
            "en": "The passage runs from 4:105 to 4:113. Ma'arif al-Qur'an says these nine verses concern a particular episode, yet, in the Qur'an's usual way, they give principles for Muslims of every generation. As-Sa'di sets the first command beside 16:44, where the Reminder is sent down so that the Prophet ﷺ may make clear what was revealed: perhaps this verse concerns disputes and that one the whole religion, or both mean one thing, and judging here covers blood, honour, wealth, every right, and belief.",
            "bn": "অংশটি চলেছে ৪:১০৫ থেকে ৪:১১৩ পর্যন্ত। মাআরিফুল কুরআন বলে, এই নয়টি আয়াত একটি নির্দিষ্ট ঘটনাকে ঘিরে, তবে কুরআনের চিরাচরিত ধারায় নির্দেশগুলো সেই ঘটনায় আটকে থাকেনি। সেগুলো সব যুগের মুসলমানের জন্য মূলনীতি। সা'দী প্রথম আদেশটিকে রাখেন ১৬:৪৪ আয়াতের পাশে, যেখানে যিকর নাযিল হয়েছে যেন নবী ﷺ মানুষের কাছে নাযিলকৃত বিষয় স্পষ্ট করে দেন। তাঁর মতে হতে পারে এ আয়াত বিবাদ মীমাংসার কথা বলছে, আর ওই আয়াত গোটা দ্বীনের ব্যাখ্যার কথা। আবার হতে পারে দুটোর অর্থ একই, আর এখানে ফায়সালা মানে প্রাণ, সম্মান, সম্পদ, অন্য সব হক, এমনকি আকীদার ফায়সালাও।"
          }
        ]
      },
      {
        "h": {
          "en": "An Innocent of Another Faith",
          "bn": "ভিন্ন ধর্মের এক নির্দোষ"
        },
        "p": [
          {
            "en": "The occasion is told more fully with 4:110, so briefly here. At-Tirmidhi (3036) records from Qatadah ibn an-Nu'man (RA) that a household of his own people, the Banu Ubayriq, broke into his uncle's store, pointed at Labid ibn Sahl, a man of righteousness and Islam, and then sent men of their quarter to the Prophet ﷺ to complain that Qatadah was accusing a family of Islam and righteousness without proof. At-Tirmidhi graded it gharib, saying only Muhammad ibn Salamah al-Harrani narrated it with a connected chain.",
            "bn": "ঘটনাটির পূর্ণ বিবরণ এসেছে ৪:১১০ আয়াতের আলোচনায়, তাই এখানে সংক্ষেপে। তিরমিযী (৩০৩৬) কাতাদা ইবন নুমান (রাঃ) থেকে বর্ণনা করেন: তাঁর নিজের গোত্রেরই এক পরিবার, বনু উবাইরিক, তাঁর চাচার গুদামঘরে সিঁধ কাটে। তারপর তারা আঙুল তোলে লাবীদ ইবন সাহলের দিকে, যিনি নেককার ও দ্বীনদার বলে পরিচিত। এরপর মহল্লার লোকজন পাঠিয়ে নবী ﷺ-এর কাছে নালিশ করে যে কাতাদা প্রমাণ ছাড়াই একটি দ্বীনদার, নেককার পরিবারকে চোর বলছেন। তিরমিযী বর্ণনাটিকে গরীব বলেছেন। তাঁর কথা, মুহাম্মাদ ইবন সালামা হাররানী ছাড়া আর কেউ একে মুত্তাসিল সনদে বর্ণনা করেননি।"
          },
          {
            "en": "Many other reports name a different innocent. At-Tabari gives Mujahid: the thief's companions among the believers asked the Prophet ﷺ to excuse him before the people with his tongue, and they threw the armour on an innocent Jewish man. In Ikrimah's report, also in at-Tabari, he is Zayd ibn as-Samin, a Jew; al-Baghawi gives the same name through al-Kalbi from Abu Salih from Ibn Abbas. Al-Qurtubi records that some said Labid too was a Jew, others that he was Muslim; Ma'arif al-Qur'an suggests Labid was blamed first, then the Jew.",
            "bn": "অন্য অনেক বর্ণনায় নির্দোষ মানুষটি আরেকজন। তাবারী মুজাহিদের বর্ণনা আনেন: চোরের মুমিন সঙ্গীরা নবী ﷺ-কে অনুরোধ করে, আপনি নিজের মুখে লোকজনের সামনে তার সাফাই দিন। আর বর্মটা তারা চাপিয়ে দেয় ইহুদিদের এক নির্দোষ লোকের ঘাড়ে। তাবারীতেই ইকরিমার বর্ণনায় দোষ চাপানো হয় যায়দ ইবনুস সামীন নামের এক ইহুদির উপর। বাগাভীও কালবীর সূত্রে, আবূ সালিহ হয়ে ইবন আব্বাস থেকে একই নাম আনেন। কুরতুবী লেখেন, কেউ বলেছেন লাবীদও ইহুদি ছিলেন, কেউ বলেছেন তিনি মুসলিম। মাআরিফুল কুরআনের অনুমান, পরিবারটি প্রথমে লাবীদকে দোষ দেয়, পরে ইহুদিকে।"
          },
          {
            "en": "On these reports the point must be made plainly. A man of another faith was accused by men who counted themselves Muslims, the thief swore he had not taken it, his clan argued his case, and Allah sent down verses that cleared the outsider and exposed the insiders. The passage describes one theft in one city long ago. It licenses nothing against any living person or community: not against Jews, not against the Ansar, and not against the Banu Zafar or the Banu Ubayriq, the guilty man's own people, or anyone who shares their names.",
            "bn": "এই বর্ণনাগুলোর ব্যাপারে কথাটা সোজাসুজি বলা দরকার। ভিন্ন ধর্মের একজন মানুষকে অভিযুক্ত করেছিল এমন কিছু লোক, যারা নিজেদের মুসলমান বলে গণ্য করত। চোর কসম খেয়ে বলেছিল সে নেয়নি, তার গোত্র তার হয়ে মামলা লড়েছিল। আর আল্লাহ আয়াত নাযিল করে বাইরের মানুষটিকে নির্দোষ ঘোষণা করলেন, ভেতরের লোকদের মুখোশ খুলে দিলেন। এ অংশ বহুকাল আগে এক শহরের একটিমাত্র চুরির বর্ণনা দেয়। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। ইহুদিদের বিরুদ্ধে নয়, আনসারদের বিরুদ্ধে নয়। দোষী লোকটির নিজের গোত্র বনু যফর বা বনু উবাইরিকের বিরুদ্ধেও নয়, তাদের নামের সঙ্গে নাম মেলে এমন কারও বিরুদ্ধেও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Khasim, the One Who Pleads",
          "bn": "খাসীম: যে অন্যের মামলা লড়ে"
        },
        "p": [
          {
            "en": "Wa la takun li-l-kha'inina khasima: do not be, for the treacherous, a khasim. Al-Qurtubi explains the form: an active noun, the person who disputes, like jalis for the person who sits with you, not the person disputed against; wa la tujadil two verses later proves it, since the khasim is whoever argues. At-Tabari spells out the scene: do not plead for anyone who betrayed a Muslim or a mu'ahad, a non-Muslim under covenant, in his person or property, pushing back whoever comes to claim the right he was cheated of.",
            "bn": "ওয়ালা তাকুন লিলখা'ইনীনা খাসীমা: খিয়ানতকারীদের জন্য খাসীম হয়ো না। শব্দটির গঠন বুঝিয়ে দেন কুরতুবী। খাসীম কর্তাবাচক শব্দ, অর্থাৎ যে বিবাদ করে। যেমন জালীস মানে যে আপনার সঙ্গে বসে। যার বিরুদ্ধে বিবাদ করা হয়, সে অর্থে নয়। দুটি আয়াত পরের ওয়ালা তুজাদিল কথাটিই এর প্রমাণ, কারণ খাসীম মানে যে তর্ক করে। তাবারী পুরো দৃশ্যটা খুলে বলেন: যে লোক কোনো মুসলিম বা মুআহাদের, মানে চুক্তিবদ্ধ অমুসলিমের, প্রাণ বা সম্পদে খিয়ানত করেছে, তার হয়ে লড়ো না। ঠকানো হক ফেরত চাইতে যে আসে, তাকে ঠেলে সরিয়ে দিয়ো না।"
          },
          {
            "en": "Then the second verb. Wa la tujadil 'an alladhina yakhtanuna anfusahum: do not argue on behalf of those who betray themselves. Al-Qurtubi traces jidal to jadl, twisting: a man of tightly knit build is majdul, and the falcon al-ajdal. Another view, he says, takes it from al-jadalah, the face of the earth, since each disputant wants to throw the other down onto it. Al-Baghawi glosses the verb as do not dispute, and renders khasim in 4:105 as a defending helper. Al-Muyassar: do not defend them.",
            "bn": "তারপর দ্বিতীয় ক্রিয়া। ওয়ালা তুজাদিল আনিল্লাযীনা ইয়াখতানূনা আনফুসাহুম: যারা নিজেদের সঙ্গে খিয়ানত করে, তাদের হয়ে তর্ক কোরো না। কুরতুবী জিদালের মূল খোঁজেন জাদল শব্দে, যার অর্থ পাকানো। মজবুত, পাকানো গড়নের মানুষকে বলে মাজদূল, আর বাজপাখিকে বলে আজদাল। তিনি আরেকটি মতও আনেন: শব্দটি এসেছে জাদালা থেকে, মানে মাটির উপরিভাগ। কারণ বিবাদের দুই পক্ষই চায় অন্যজনকে মাটিতে আছড়ে ফেলতে। বাগাভী ক্রিয়াটির অর্থ করেন সাদামাটাভাবে: ঝগড়া কোরো না। আর ৪:১০৫ আয়াতের খাসীমের অর্থ করেন সাহায্যকারী, যে পক্ষ নিয়ে রক্ষা করে। মুয়াসসার বলে: তাদের পক্ষ নিয়ে রক্ষা কোরো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Traitors to Their Own Souls",
          "bn": "নিজের প্রাণের সঙ্গেই খিয়ানত"
        },
        "p": [
          {
            "en": "Yakhtanuna anfusahum: they betray themselves. Why themselves, when the goods belonged to someone else? At-Tabari: they make their own souls treacherous through the betrayal they committed against others' property. Al-Baghawi: they wrong themselves by betrayal and theft. Al-Muyassar: they betray themselves by disobeying Allah. As-Sa'di widens the word: ikhtiyan and khiyanah mean crime, wrongdoing and sin, so the prohibition covers arguing for anyone who has sinned and incurred a prescribed or discretionary penalty, whether to deny the betrayal or to fend off its lawful consequence.",
            "bn": "ইয়াখতানূনা আনফুসাহুম: তারা নিজেদের সঙ্গে খিয়ানত করে। জিনিস তো তারা নিয়েছিল অন্যের, তাহলে খিয়ানতটা নিজেদের সঙ্গে কেন? তাবারীর উত্তর: অন্যের সম্পদে খিয়ানত করে তারা নিজেদের প্রাণকেই খিয়ানতকারী বানিয়ে ফেলে। বাগাভী বলেন, খিয়ানত আর চুরি করে তারা নিজেদের উপরই যুলম করে। মুয়াসসার বলে, আল্লাহর নাফরমানি করে তারা নিজেদের সঙ্গে খিয়ানত করে। সা'দী শব্দটির পরিধি বাড়িয়ে দেন। তাঁর মতে ইখতিয়ান আর খিয়ানা মানে অপরাধ, যুলম ও গুনাহ। তাই কেউ গুনাহ করে হদ বা তা'যীরের শাস্তির যোগ্য হলে তার পক্ষে তর্ক করাও এ নিষেধের আওতায় পড়ে, খিয়ানত অস্বীকার করার জন্য হোক বা শরীয়তের শাস্তি ঠেকানোর জন্য।"
          },
          {
            "en": "The verse closes with its reason: Allah does not love whoever is khawwan athim. Al-Qurtubi notes that khawwan is an intensive form, stronger than kha'in, used because that betrayal was so grave. As-Sa'di reads it as much betrayal and much sin, adds that where love is denied its opposite, hatred, is established, and calls the clause something like the reason for the prohibition. Al-Baghawi divides the pair: a traitor in the armour, a sinner in throwing it on the Jew. Two failures, then: the taking, and the blaming.",
            "bn": "আয়াতের শেষে কারণটা বলা হয়েছে: যে খাওয়ান আসীম, আল্লাহ তাকে ভালোবাসেন না। কুরতুবী জানান, খাওয়ান আতিশয্যবাচক রূপ, খা'ইনের চেয়ে জোরালো। আর এই রূপ এসেছে কারণ সেই খিয়ানত ছিল অত্যন্ত গুরুতর। সা'দী এর অর্থ করেন অনেক বেশি খিয়ানত আর অনেক বেশি গুনাহ। তিনি যোগ করেন, যেখানে ভালোবাসা নাকচ হয়, সেখানে তার বিপরীতটা, অর্থাৎ ঘৃণা, সাব্যস্ত হয়। আর এই বাক্যটিকে তিনি আগের নিষেধের কারণের মতো বলে দেখেন। বাগাভী জোড়াটিকে ভাগ করেন: বর্মের ব্যাপারে খিয়ানতকারী, আর তা ইহুদির ঘাড়ে চাপানোর ব্যাপারে গুনাহগার। দুটি অপরাধ তাহলে: নিয়ে নেওয়া, আর দোষ চাপানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Was Told to Ask",
          "bn": "ইস্তিগফারের আদেশ কেন এল"
        },
        "p": [
          {
            "en": "Between the two prohibitions stands a single command: wa-staghfiri Allah, seek Allah's forgiveness. It is addressed to the Prophet ﷺ, and the commentators explain it in several ways, set down here as theirs. At-Tabari reads it as: ask Allah to pardon you the penalty of your sin, dhanb in his own word, in pleading for the traitor. He records a second view, introduced with it has been said: the Prophet ﷺ had not pleaded for the man, but had been inclined to, and was told to seek forgiveness for that. At-Tirmidhi's narration glosses it: from what you said to Qatadah.",
            "bn": "দুই নিষেধের মাঝখানে একটিমাত্র আদেশ: ওয়াসতাগফিরিল্লাহ, আল্লাহর কাছে ক্ষমা চাও। সম্বোধন নবী ﷺ-কে। মুফাসসিরগণ এর ব্যাখ্যা করেছেন কয়েকভাবে, আর এখানে সেগুলো তাঁদের কথা হিসেবেই রাখা হলো। তাবারীর ব্যাখ্যা: আল্লাহর কাছে প্রার্থনা করো, খিয়ানতকারীর পক্ষে লড়ার যে গুনাহ, তার শাস্তি যেন তিনি মাফ করে দেন। এখানে তিনি সরাসরি গুনাহ অর্থের শব্দ যানবই ব্যবহার করেছেন। তিনি 'বলা হয়েছে' কথাটি দিয়ে আরেকটি মত আনেন: নবী ﷺ লোকটির পক্ষে লড়েননি, শুধু সেদিকে মন ঝুঁকেছিল, আর সেজন্যই তাঁকে ক্ষমা চাইতে বলা হয়। তিরমিযীর বর্ণনায় ব্যাখ্যাটা এরকম: নবী ﷺ কাতাদাকে যা বলেছিলেন, তার জন্য।"
          },
          {
            "en": "Al-Qurtubi reports at-Tabari's reading and calls it the position of those who allow that prophets may commit minor sins. He then gives Ibn 'Atiyyah's answer: this is no sin, for the Prophet ﷺ defended on what was apparent, believing them innocent; the meaning is to seek forgiveness for the sinners of his community and those who dispute falsely, since his place is to hear both parties, judge by what he hears, and ask forgiveness for the wrongdoer. Others, al-Qurtubi adds, read it as glorification with no sin in view, or as addressed to him but meant for the Banu Ubayriq.",
            "bn": "কুরতুবী তাবারীর ব্যাখ্যা উল্লেখ করে বলেন, এটা তাঁদের মত, যাঁরা মনে করেন নবীদের দ্বারা সগীরা, অর্থাৎ ছোট গুনাহ, ঘটা সম্ভব। তারপর তিনি আনেন ইবন আতিয়্যার জবাব: এটা কোনো গুনাহ নয়। কারণ নবী ﷺ বাহ্যিক অবস্থা দেখে পক্ষ নিয়েছিলেন, তাদের নির্দোষ বলেই বিশ্বাস করে। এই মতে অর্থ দাঁড়ায়, তিনি যেন নিজের উম্মতের গুনাহগারদের জন্য আর অন্যায়ভাবে বিবাদকারীদের জন্য ক্ষমা চান। কারণ মানুষের মাঝে তাঁর কাজ হলো দুই পক্ষের কথা শোনা, যা শোনেন সে অনুযায়ী রায় দেওয়া, আর অপরাধীর জন্য ক্ষমা চাওয়া। কুরতুবী আরও জানান, কেউ একে তাসবীহের মতো পড়েছেন, কোনো গুনাহের প্রশ্ন ছাড়াই। কেউ বলেছেন, সম্বোধন তাঁকে, কিন্তু উদ্দেশ্য বনু উবাইরিক।"
          },
          {
            "en": "Al-Baghawi, on 4:107, gives three senses istighfar can carry for prophets after prophethood: for a sin before it; for the sins of their community and kin; or for something once permitted that the law then forbade, the istighfar meaning hearing and obeying. As-Sa'di keeps a condition: from what came from you, if anything came. Ma'arif al-Qur'an says leaning toward what the outward evidence showed was not a sin, yet it ran against the fact, and the station of prophets is so high that he was asked to seek forgiveness even for that. These readings stand side by side; this article adopts none.",
            "bn": "বাগাভী ৪:১০৭ আয়াতে নবুওয়াতের পরে নবীদের ইস্তিগফারের তিনটি সম্ভাব্য অর্থ গুনিয়ে দেন। নবুওয়াতের আগের কোনো গুনাহের জন্য। উম্মত ও আত্মীয়দের গুনাহের জন্য। কিংবা আগে বৈধ ছিল এমন কিছুর জন্য, যা পরে শরীয়ত নিষেধ করেছে, তখন ইস্তিগফারের মানে দাঁড়ায় শোনা ও মেনে নেওয়া। সা'দী একটি শর্ত রেখে দেন: তোমার থেকে যা ঘটেছে, যদি কিছু ঘটে থাকে, তার জন্য। মাআরিফুল কুরআন বলে, বাহ্যিক প্রমাণ যেদিকে ইঙ্গিত করছিল সেদিকে ঝোঁকা গুনাহ ছিল না, তবে তা বাস্তবের বিপরীত ছিল। আর নবীদের মর্যাদা এত উঁচু যে এটুকুর জন্যও তাঁকে ক্ষমা চাইতে বলা হয়। এ লেখা মতগুলো পাশাপাশি রাখে, কোনোটিকে নিজের মত হিসেবে গ্রহণ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "More Eloquent, Not More Right",
          "bn": "কথায় পটু, সত্যে নয়"
        },
        "p": [
          {
            "en": "Bi-ma araka Allah: by what Allah has shown you. Al-Qurtubi reads it as by the laws of the Shari'ah, through revelation and text or reasoning that follows revelation's path; the showing is not of the eye. When the Prophet ﷺ judged by what Allah showed him he was right, he says, for Allah guaranteed His prophets protection; an opinion any of us forms carries no certainty. As-Sa'di: not by your own inclination; and since the verse says what Allah has shown you, not what you have seen, a judge needs knowledge and justice.",
            "bn": "বিমা আরাকাল্লাহ: আল্লাহ তোমাকে যা দেখিয়েছেন সে অনুযায়ী। কুরতুবী বলেন, এর মানে শরীয়তের বিধান অনুসারে, হয় ওহী ও স্পষ্ট বাণী দিয়ে, নয়তো ওহীর ধারা মেনে চলা চিন্তা ও বিবেচনা দিয়ে। এই দেখানো চোখের দেখা নয়। তিনি বলেন, আল্লাহ যা দেখিয়েছেন সে অনুযায়ী নবী ﷺ ফায়সালা করলে তা সঠিকই হতো, কারণ আল্লাহ তাঁর নবীদের সুরক্ষার জিম্মা নিয়েছেন। কিন্তু আমাদের কেউ কোনো ধারণা করলে তাতে নিশ্চয়তা থাকে না। সা'দী বলেন: নিজের মনের ঝোঁকে নয়। আর আয়াত বলেছে আল্লাহ যা দেখিয়েছেন, বলেনি তুমি যা দেখেছ, তাই বিচারকের জন্য জ্ঞান আর ইনসাফ দুটোই শর্ত।"
          },
          {
            "en": "Ibn Kathir attaches to this phrase a narration from Umm Salamah (RA) in Sahih al-Bukhari (2458). The Messenger of Allah ﷺ heard a dispute at the door of his room, went out to them and said: \"I am only a human being, and the disputant comes to me. Perhaps one of you is more eloquent than another, so I reckon that he has told the truth and judge for him accordingly. So whoever I judge for with the right of a Muslim, it is only a piece of the Fire: let him take it or leave it.\"",
            "bn": "এই কথাটির সঙ্গে ইবন কাসীর উম্মে সালামা (রাঃ)-এর একটি বর্ণনা যুক্ত করেন, যা সহীহ বুখারীতে (২৪৫৮) আছে। রাসূলুল্লাহ ﷺ তাঁর কামরার দরজায় ঝগড়ার আওয়াজ শুনে বেরিয়ে এসে বললেন: \"আমি তো একজন মানুষ মাত্র। আমার কাছে বিবাদকারী আসে। হয়তো তোমাদের কেউ অন্যজনের চেয়ে বেশি গুছিয়ে কথা বলে, আমি ভাবি সে সত্য বলছে, আর সে অনুযায়ী তার পক্ষে রায় দিই। তাই আমি যার পক্ষে কোনো মুসলিমের হক দিয়ে রায় দিই, তা আগুনের একটি টুকরা ছাড়া কিছু নয়। চাইলে সে তা নিক, চাইলে ছেড়ে দিক।\""
          }
        ]
      },
      {
        "h": {
          "en": "Pleading Only for the Right",
          "bn": "শুধু হকের পক্ষে ওকালতি"
        },
        "p": [
          {
            "en": "Two commentators draw a rule from this for anyone who speaks for another, setting the line differently. As-Sa'di: do not plead for someone whose betrayal you know or think likely, who claims what is not his or denies a right he owes. Disputing for falsehood and representing a wrongdoer are forbidden, he says, in religious and worldly disputes alike, while the verse's implication permits representing a party of whom no wrong is known. Al-Qurtubi is stricter: representing a wrongdoer or a suspect is not permitted, and no one may plead for another until he knows he is right.",
            "bn": "দুজন মুফাসসির এখান থেকে এমন সবার জন্য নীতি বের করেন, যারা অন্যের হয়ে কথা বলে। তবে সীমারেখা তাঁরা টানেন আলাদা জায়গায়। সা'দী বলেন: যার খিয়ানতের কথা জানা আছে, তার পক্ষে লড়া চলবে না। সে হয়তো এমন কিছু দাবি করছে যা তার নয়, কিংবা নিজের ঘাড়ে থাকা হক অস্বীকার করছে। খিয়ানতের কথা নিশ্চিত জানা থাকুক বা শুধু ধারণা হোক, একই কথা। তাঁর মতে আয়াতটি প্রমাণ করে, বাতিলের পক্ষে বিবাদ করা আর অন্যায়কারীর প্রতিনিধি হওয়া হারাম, দ্বীনি বিবাদে যেমন, দুনিয়াবি হকের বেলাতেও তেমন। আবার আয়াতের ইঙ্গিত থেকে বোঝা যায়, যার কোনো অন্যায় জানা নেই, তার প্রতিনিধি হওয়া জায়েজ। কুরতুবী আরও কড়া। তাঁর মতে অন্যায়কারী বা অভিযুক্তের হয়ে মামলায় প্রতিনিধিত্ব জায়েজ নয়। কেউ হকের উপর আছে, এটা না জেনে কারও পক্ষে লড়া কারও জন্য বৈধ নয়।"
          },
          {
            "en": "Al-Qurtubi also reports the scholars' rule on partisanship: when a group's hypocrisy has become clear, no party of Muslims may argue for them to shelter and defend them, for that happened in the Prophet's time and these verses came down about it. The address is to the Prophet ﷺ, he says, but those meant are the Muslims who did it, for two reasons: 4:109 turns on them with here you are, you who argued for them; and the Prophet ﷺ was the judge to whom others made excuses, never one who made excuses for anyone.",
            "bn": "দলাদলি নিয়েও কুরতুবী আলেমদের একটি নীতি উল্লেখ করেন। কোনো দলের মুনাফেকি মুসলমানদের কাছে স্পষ্ট হয়ে গেলে, তাদের আড়াল করতে আর বাঁচাতে মুসলমানদের এক অংশ অন্য অংশের সঙ্গে তাদের হয়ে তর্ক করবে না। কারণ নবী ﷺ-এর যুগে ঠিক এটাই ঘটেছিল, আর সে উপলক্ষেই এ আয়াতগুলো নাযিল হয়। তাঁর মতে সম্বোধন নবী ﷺ-কে, কিন্তু উদ্দেশ্য সেই মুসলমানরা, যারা কাজটা করছিল। এর দুটি কারণ। প্রথমত, ৪:১০৯ আয়াত তাদের দিকেই ফিরে বলে: দেখো, তোমরাই তো তাদের হয়ে তর্ক করেছ। দ্বিতীয়ত, নবী ﷺ ছিলেন বিচারক। লোকে তাঁর কাছে ওজর পেশ করত, তিনি কারও হয়ে কারও কাছে ওজর পেশ করতেন না।"
          },
          {
            "en": "And the protection crosses the line of faith. Al-Qurtubi observes that the surah, which has been guarding the property of orphans and of people, here shows that a disbeliever's property is protected just as a Muslim's is, except where Allah has made it lawful. In Ibn Zayd's report in at-Tabari, the thief's neighbours told the Prophet ﷺ: this wicked Jew disbelieves in Allah and in what you brought. The verses answered with the facts of the case, not the faith of the accused.",
            "bn": "আর এই সুরক্ষা ধর্মের সীমানায় থেমে থাকে না। কুরতুবী লক্ষ করেন, সূরাটি এতক্ষণ ইয়াতীম ও মানুষের সম্পদ রক্ষার কথা বলে আসছিল। এখানে তা দেখিয়ে দেয়, কাফিরের সম্পদও মুসলিমের সম্পদের মতোই সুরক্ষিত, শুধু আল্লাহ যেখানে বৈধ করেছেন সেটুকু ছাড়া। তাবারীতে ইবন যায়দের বর্ণনায় চোরের প্রতিবেশীরা নবী ﷺ-কে বলেছিল: এই খবিস ইহুদি আল্লাহকে মানে না, আপনি যা এনেছেন তাও মানে না। এরপর যে আয়াতগুলো নাযিল হলো, সেগুলো জবাব দিল মামলার আসল ঘটনা দিয়ে, অভিযুক্তের ধর্ম দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Wrongdoer Is Ours",
          "bn": "অন্যায়কারী যখন নিজেদের লোক"
        },
        "p": [
          {
            "en": "The next verse, 4:108, describes the same people: they hide from people but not from Allah, who is with them when they plot by night words He is not pleased with. At-Tabari explains that they hide out of shame and fear of an ugly reputation, though people can do nothing to them but talk, while Allah sees them and is more deserving of their shame. Some, he records, took the hiders to be the group who went to the Prophet ﷺ to defend Ibn Ubayriq.",
            "bn": "পরের আয়াত, ৪:১০৮, একই লোকদের ছবি আঁকে: তারা মানুষের কাছ থেকে লুকায়, কিন্তু আল্লাহর কাছ থেকে নয়। অথচ রাতে যখন তারা এমন কথার ফন্দি আঁটে যা তিনি পছন্দ করেন না, তিনি তখনও তাদের সঙ্গে আছেন। তাবারী ব্যাখ্যা করেন, তারা লুকায় লজ্জায় আর বদনামের ভয়ে। অথচ মানুষ তাদের নিয়ে কথা বলা ছাড়া আর কিছুই করতে পারে না। আর আল্লাহ তাদের দেখছেন, লজ্জা পাওয়ার বেশি হকদার তো তিনিই। তাবারী এ মতও উল্লেখ করেন যে এই লুকিয়ে চলা লোকেরা সেই দল, যারা ইবন উবাইরিকের পক্ষ নিতে নবী ﷺ-এর কাছে গিয়েছিল।"
          },
          {
            "en": "The verses reach every room where someone speaks for another: the lawyer who takes a case he knows is false; the manager who covers for a colleague who cheated a customer; parents who storm into a school for a child they have not yet asked; the community leader who closes ranks when someone of his is accused, or reaches for the other side's faith or tribe in place of evidence. None is told to stop caring for their own; only to find out first, and to stop where the truth stops. A defence found wrong has the command in the middle: seek Allah's forgiveness, then put it right.",
            "bn": "তাই আয়াতগুলো পৌঁছে যায় এমন প্রতিটি জায়গায়, যেখানে কেউ অন্যের হয়ে কথা বলে। সেই উকিল, যে জেনেশুনে মিথ্যা মামলা হাতে নেয়। সেই ম্যানেজার, যে গ্রাহক ঠকানো সহকর্মীকে আড়াল করে। সেই মা-বাবা, যাঁরা সন্তানকে কিছু জিজ্ঞেস না করেই তার পক্ষ নিয়ে স্কুলে গিয়ে হইচই বাধান। সেই সমাজনেতা, যিনি নিজের লোক অভিযুক্ত হলেই সবাইকে নিয়ে তার আড়ালে দাঁড়িয়ে যান, কিংবা প্রমাণের জায়গায় টেনে আনেন অপর পক্ষের ধর্ম বা গোত্র। আপনজনের প্রতি দরদ ছাড়তে কাউকে বলা হয়নি। বলা হয়েছে, আগে জেনে নিন, আর সত্য যেখানে থামে সেখানে থামুন। আর কেউ যদি বোঝেন তাঁর সাফাই ভুল ছিল, তাঁর জন্য আছে মাঝখানের সেই আদেশ: আল্লাহর কাছে ক্ষমা চাওয়া। তারপর ভুলটা শুধরে নেওয়া।"
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
  "4:118-120": {
    "sections": [
      {
        "h": {
          "en": "A Vow Sworn After the Curse",
          "bn": "লা'নতের পরে এক কসম"
        },
        "p": [
          {
            "en": "Surah an-Nisa is Madinan, and these three verses sit in a passage about setting up partners beside Allah. 4:116 says that association with Him is not forgiven; 4:117 says that whoever calls on others besides Him is really calling on a rebellious Shaytan. 4:118 opens on him: Allah has cursed him, which at-Tabari explains as disgrace, banishment, and being put far from every good. Then the verse quotes what Shaytan said to his Lord when cursed, and the quotation runs on through 4:119.",
            "bn": "সূরা আন-নিসা মাদানী। এই তিনটি আয়াত এমন এক অংশের ভেতরে, যেখানে কথা চলছে আল্লাহর সঙ্গে শরীক করা লোকদের নিয়ে। ৪:১১৬ জানায়, তাঁর সঙ্গে শরীক করার গুনাহ মাফ হয় না। ৪:১১৭ জানায়, যে তাঁকে ছেড়ে অন্যকে ডাকে, সে আসলে ডাকে এক বিদ্রোহী শয়তানকে। ৪:১১৮ শুরু হয় তাকে দিয়েই: আল্লাহ তাকে লা'নত করেছেন। তাবারী বলেন, লা'নত মানে লাঞ্ছিত করা, তাড়িয়ে দেওয়া, সব কল্যাণ থেকে দূরে সরিয়ে দেওয়া। এরপর আয়াত তুলে ধরে, লা'নত পাওয়ার মুহূর্তে শয়তান তার রবকে কী বলেছিল। সেই উক্তি গড়িয়ে চলে ৪:১১৯ জুড়ে।"
          },
          {
            "en": "Every clause of the vow is sworn. As-Sa'di says Shaytan was swearing to his Lord when he said I will surely take, and al-Qurtubi notes that the lams on the verbs of 4:119 are all lams of oath. Then 4:120 is no longer his voice but Allah's, telling what those promises are worth. At-Tabari says why the vow is reported at all: so that those who oppose the Messenger after guidance has become clear, in the words of 4:115, would know they are of the accursed Shaytan's share.",
            "bn": "শপথের প্রতিটি কথাই কসম খেয়ে বলা। সা'দী বলেন, 'আমি অবশ্যই নেব' বলার সময় শয়তান তার রবের সামনে কসম খাচ্ছিল। আর কুরতুবী লক্ষ করেন, ৪:১১৯ আয়াতের ক্রিয়াগুলোর শুরুর 'লাম' সবই কসমের লাম। ৪:১২০ আয়াতে এসে কণ্ঠটা আর তার থাকে না, হয়ে যায় আল্লাহর। তিনি জানিয়ে দেন, ওই প্রতিশ্রুতির দাম কতটুকু। শপথটা কেন বর্ণনা করা হলো, তাবারী তা-ও বলেন। ৪:১১৫ আয়াতের ভাষায় যারা হিদায়াত স্পষ্ট হওয়ার পরও রাসূলের বিরোধিতা করে, তারা যেন জেনে নেয় যে তারা ওই অভিশপ্ত শয়তানের ভাগেরই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "A Share Cut and Set Aside",
          "bn": "কেটে আলাদা করে রাখা ভাগ"
        },
        "p": [
          {
            "en": "Nasiban mafrudan: an appointed share. At-Tabari glosses mafrud as known, citing ad-Dahhak, and Ibn Kathir as fixed, measured and known. Al-Baghawi goes to the root. The first sense of f-r-d in the language, he says, is cutting: the furdah of a river is a breach in its bank, and the fard of a bow is the notch where the string sits. A share cut off and set aside, then. And al-Baghawi says what fills it: whatever Iblis is obeyed in is his appointed share.",
            "bn": "নাসীবাম মাফরূদা: নির্ধারিত ভাগ। দাহহাকের বরাতে তাবারী মাফরূদের অর্থ করেন 'জানা'। ইবন কাসীর বলেন, নির্দিষ্ট, মাপা, জানা। বাগাভী যান শব্দের মূলে। তাঁর কথায়, ভাষায় ফ-র-দ ধাতুর আদি অর্থ কাটা। নদীর ফুরদা হলো তীরের ভাঙা খাঁজ, আর ধনুকের ফারদ হলো সেই খাঁজ, যেখানে ছিলা বসে। মানে কেটে আলাদা করে রাখা এক ভাগ। সে ভাগ কী দিয়ে ভরে, বাগাভী সেটাও বলে দেন: যে কাজে ইবলীসের আনুগত্য করা হয়, সেটাই তার নির্ধারিত ভাগ।"
          },
          {
            "en": "Three more words carry the passage. La-umanniyannahum is from tamanni, wishing; al-Qurtubi glosses it as I will make it seem fine to them, and the same root returns in 4:120 as yumannihim, he stirs their hopes. Batk, in fa-la-yubattikunna, is cutting, and al-Qurtubi notes that a sharp sword is called batik. Ghurur, the last word of 4:120, he defines through Ibn 'Arafah: something whose outside you see and love, while its inside is hateful or unknown.",
            "bn": "আরও তিনটি শব্দ এই অংশের ভার বহন করে। লা-উমান্নিয়ান্নাহুম এসেছে তামান্নী থেকে, অর্থ কামনা করা। কুরতুবী এর মানে করেন: আমি তাদের চোখে ব্যাপারটা ভালো করে সাজিয়ে দেব। একই ধাতু ৪:১২০ আয়াতে ফিরে আসে ইউমান্নীহিম রূপে, সে তাদের মনে আশা জাগায়। ফালা-ইউবাত্তিকুন্না শব্দের বাতক মানে কাটা, আর কুরতুবী মনে করিয়ে দেন, ধারালো তরবারিকে আরবিতে বলে বাতিক। ৪:১২০ আয়াতের শেষ শব্দ গুরূর। কুরতুবী ইবন আরাফার কথায় এর সংজ্ঞা দেন: যার বাইরেটা চোখে পড়ে আর ভালো লাগে, অথচ ভেতরটা অপছন্দের কিংবা অজানা।"
          }
        ]
      },
      {
        "h": {
          "en": "Hopes Fitted to Each Heart",
          "bn": "প্রত্যেক মনের মাপে আশা"
        },
        "p": [
          {
            "en": "Wa la-udillannahum: I will lead them astray. From the truth, says Ibn Kathir; from the straight path, says as-Sa'di, astray in knowledge and astray in deeds. Al-Baghawi adds a careful note. Iblis says this, but what he means is adorning, for nothing of leading astray is truly in his hands, as he says in another place: I will surely make it attractive to them on the earth (15:39). He cannot drag anyone down the road; he can only decorate it.",
            "bn": "ওয়া লা-উদিল্লান্নাহুম: আমি অবশ্যই তাদের পথভ্রষ্ট করব। ইবন কাসীর বলেন, সত্য থেকে। সা'দী বলেন, সরল পথ থেকে, জ্ঞানেও বিভ্রান্তি, আমলেও বিভ্রান্তি। বাগাভী এখানে একটি সূক্ষ্ম কথা যোগ করেন। কথাটা ইবলীসের, কিন্তু তার আসল উদ্দেশ্য সাজিয়ে দেখানো। কারণ পথভ্রষ্ট করার ক্ষমতা আসলে তার হাতে কিছুই নেই, যেমন অন্য জায়গায় সে নিজেই বলেছে: আমি পৃথিবীতে তাদের চোখে সবকিছু আকর্ষণীয় করে তুলব (১৫:৩৯)। কাউকে টেনে নেওয়ার জোর তার নেই, সে কেবল পথটাকে সাজাতে পারে।"
          },
          {
            "en": "Wa la-umanniyannahum is where the commentators slow down. Al-Qurtubi says these hopes cannot be confined to a single kind, because Shaytan gives each person hopes to the measure of his own desire and the circumstances of his life. Some, he reports, named them: long life, good things, repentance and knowledge, all while the person persists. Al-Baghawi records three readings: hopes of riding their desires; hopes that there is no Garden, no Fire and no resurrection; and hopes of attaining the Hereafter while still committing sins.",
            "bn": "ওয়া লা-উমান্নিয়ান্নাহুম, এখানে এসে মুফাসসিরগণ থেমে থেমে এগোন। কুরতুবী বলেন, এই আশাকে এক রকমে বেঁধে রাখা যায় না। কারণ শয়তান প্রত্যেককে আশা দেয় তার নিজের কামনার মাপে, তার জীবনের অবস্থা বুঝে। কেউ কেউ, তিনি জানান, আশাগুলোর নামও দিয়েছেন: দীর্ঘ জীবন, ভালো ভালো জিনিস, তওবা আর জ্ঞান। অথচ মানুষটা গুনাহে অটল থেকেই যায়। বাগাভী তিনটি ব্যাখ্যা উল্লেখ করেন। এক, প্রবৃত্তির পেছনে ছুটে চলার আশা। দুই, জান্নাত নেই, জাহান্নাম নেই, পুনরুত্থান নেই, এই আশা। তিন, গুনাহ করতে করতেই আখিরাত পেয়ে যাওয়ার আশা।"
          },
          {
            "en": "Ibn Kathir names the method most plainly: I will make leaving repentance look fine to them, promise them hopes, command them to put things off and delay, and deceive them about themselves. At-Tabari says it is by the hopes placed in their souls that Shaytan turns them from obeying Allah. As-Sa'di names the cruellest hope: that they will gain what the rightly guided gain. That, he says, is delusion itself, people doing the deeds of the Fire while reckoning they earn the Garden, as 18:103 and 18:104 describe.",
            "bn": "ইবন কাসীর কৌশলটা সবচেয়ে খোলাখুলি বলেন: তওবা ছেড়ে দেওয়াকে আমি তাদের চোখে ঠিকঠাক দেখাব, তাদের আশার প্রতিশ্রুতি দেব, ফেলে রাখতে আর দেরি করতে হুকুম দেব, আর নিজেদের ব্যাপারে তাদের ধোঁকায় ফেলব। তাবারী বলেন, তাদের মনে বসিয়ে দেওয়া আশা দিয়েই শয়তান তাদের আল্লাহর আনুগত্য থেকে ফিরিয়ে নেয়। সা'দী সবচেয়ে নিষ্ঠুর আশাটির কথা বলেন: হিদায়াতপ্রাপ্তরা যা পায়, তারাও তা পাবে। তাঁর মতে এটাই খাঁটি ধোঁকা। মানুষ জাহান্নামের আমল করে, আর ভাবে এতেই জান্নাত মিলবে, যেমন ১৮:১০৩ ও ১৮:১০৪ বর্ণনা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Religion, Body, or Both",
          "bn": "দ্বীন, দেহ, নাকি দুটোই"
        },
        "p": [
          {
            "en": "Fa-la-yubattikunna adhana al-an'am: they will slit the ears of cattle. At-Tabari explains it as cutting the ear of the bahirah to mark it, and quotes Qatadah: they slit the ears for their idols. 'Ikrimah calls it a religion Iblis laid down for them. At-Tabari draws out what the slit meant: sacrificing to others, forbidding and permitting for them, legislating what Allah had not. As-Sa'di calls it a kind of misleading that forbids what Allah made lawful, and 5:103 denies that Allah ever appointed such animals.",
            "bn": "ফালা-ইউবাত্তিকুন্না আযানাল আন'আম: তারা গবাদিপশুর কান চিরে দেবে। তাবারী বলেন, বাহীরা চেনানোর জন্য তার কান কেটে দেওয়াই এর অর্থ। তিনি কাতাদার কথা উদ্ধৃত করেন: তারা নিজেদের দেবমূর্তির নামে পশুর কান চিরত। ইকরিমা একে বলেন এমন এক ধর্ম, যা ইবলীস তাদের জন্য বানিয়ে দিয়েছিল। ওই চেরা দাগের আসল অর্থ তাবারী খুলে বলেন: অন্যের নামে কুরবানি, তাদের নামে হালাল-হারাম ঠিক করা, আল্লাহ যা দেননি তেমন বিধান বানানো। সা'দী বলেন, এ এক রকম পথভ্রষ্টতা, যা আল্লাহর হালাল করা জিনিসকে হারাম বানায়। আর ৫:১০৩ জানিয়ে দেয়, এমন পশুর বিধান আল্লাহ কখনো দেননি।"
          },
          {
            "en": "Fa-la-yughayyirunna khalqa Allah: they will alter the creation of Allah. Here the commentators divide, and at-Tabari lays the division out. Ibn 'Abbas, Anas and 'Ikrimah are reported as saying castration of animals. Ibn 'Abbas in another report, Mujahid, Ibrahim an-Nakha'i, Qatadah, as-Suddi and ad-Dahhak said the religion of Allah, several reading it beside 30:30, no altering Allah's creation, that is the upright religion. Mujahid says: the fitrah, the religion. Al-Hasan al-Basri is reported as saying tattooing, and in another report religion.",
            "bn": "ফালা-ইউগাইয়িরুন্না খালকাল্লাহ: তারা আল্লাহর সৃষ্টি বদলে দেবে। এখানে এসে মুফাসসিরগণ ভাগ হয়ে যান, আর তাবারী ভাগগুলো সাজিয়ে দেখান। ইবন আব্বাস (রাঃ), আনাস (রাঃ) ও ইকরিমা থেকে বর্ণিত, এর মানে পশুকে খাসি করা। আবার ইবন আব্বাস থেকেই আরেক বর্ণনায়, এবং মুজাহিদ, ইবরাহীম নাখঈ, কাতাদা, সুদ্দী ও দাহহাক থেকে বর্ণিত, এর মানে আল্লাহর দ্বীন। তাঁদের কয়েকজন আয়াতটি পড়েন ৩০:৩০ আয়াতের পাশে রেখে: আল্লাহর সৃষ্টিতে কোনো বদল নেই, এটাই সরল-সঠিক দ্বীন। মুজাহিদ সোজা বলেন: ফিতরাত, অর্থাৎ দ্বীন। হাসান বসরী থেকে এক বর্ণনায় উল্কি আঁকা, আরেক বর্ণনায় দ্বীন।"
          },
          {
            "en": "At-Tabari judges the religion reading the soundest, because of 30:30, and says it then takes in every act Allah forbade, forbidden castration and tattooing among them, and the leaving of what He commanded. He adds a point of language: slitting ears is already a bodily change, named specifically, and eloquent Arabic does not then restate it vaguely. As-Sa'di holds both together, the outward form and the inner nature Allah gave His servants, inclined to accept the truth; the Muyassar also names both. This article does not choose between them.",
            "bn": "তাবারী ৩০:৩০ আয়াতের কারণে দ্বীনের ব্যাখ্যাকেই সবচেয়ে সঠিক মনে করেন। তাঁর মতে তখন আল্লাহর নিষেধ করা সব কাজই এর ভেতরে পড়ে: যে পশুকে খাসি করা জায়েয নয় তাকে খাসি করা, যে উল্কি তিনি নিষেধ করেছেন তা আঁকা, আর তাঁর হুকুম ছেড়ে দেওয়াও। ভাষার দিক থেকেও তিনি একটি কথা বলেন। কান চেরা তো দেহের বদল, আর তা আগেই আলাদা করে বলা হয়েছে। সুন্দর আরবি একবার নির্দিষ্ট করে বলা কথা পরে ঝাপসা করে আবার বলে না। সা'দী দুটোকেই একসঙ্গে ধরেন: বাইরের গড়ন, আর ভেতরের সেই স্বভাব, যা সত্য গ্রহণের দিকে ঝুঁকে থাকে। মুয়াসসারও দুটোরই উল্লেখ করে। এই লেখা তাদের কোনো একটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Created Upright, Then Led Away",
          "bn": "সরল করে সৃষ্টি, তারপর বিপথে টানা"
        },
        "p": [
          {
            "en": "Ibn Kathir sets a narration from Sahih Muslim (2865) beside the religion reading. 'Iyad ibn Himar reports that the Prophet ﷺ said in a sermon, conveying from his Lord: I created My servants all upright, and the devils came to them and led them away from their religion, and forbade them what I had made lawful for them, and commanded them to associate with Me that for which I sent down no authority. Both halves of the vow are in it: the forbidding that the slit ear marked, and the turning away.",
            "bn": "দ্বীনের ব্যাখ্যার পাশে ইবন কাসীর সহীহ মুসলিমের একটি বর্ণনা (২৮৬৫) রাখেন। ইয়াদ ইবন হিমার (রাঃ) জানান, নবী ﷺ এক খুতবায় তাঁর রবের পক্ষ থেকে বলেছেন: আমি আমার সব বান্দাকে একনিষ্ঠ করে সৃষ্টি করেছি। তারপর শয়তানেরা তাদের কাছে এসে তাদের দ্বীন থেকে সরিয়ে নিয়েছে। আমি তাদের জন্য যা হালাল করেছিলাম, তা তাদের উপর হারাম করেছে। আর তাদের হুকুম দিয়েছে আমার সঙ্গে এমন কিছুকে শরীক করতে, যার পক্ষে আমি কোনো প্রমাণ নাযিল করিনি। শপথের দুটো দিকই এতে আছে: হারাম বানানো, যার চিহ্ন ছিল কানের ওই চেরা দাগ, আর দ্বীন থেকে সরিয়ে নেওয়া।"
          },
          {
            "en": "Those who read the phrase as tattooing point to the narration of Ibn Mas'ud, cited here by at-Tabari and Ibn Kathir. In al-Bukhari's wording (4886) he said: Allah has cursed the women who tattoo and those who have themselves tattooed, those who pluck facial hair, and those who make gaps between their teeth for beauty, altering the creation of Allah. When a woman said she had read the whole Qur'an without finding it, he pointed her to 59:7: whatever the Messenger gives you, take it, and whatever he forbids you, refrain.",
            "bn": "যাঁরা বাক্যটিকে উল্কি আঁকার অর্থে পড়েন, তাঁরা ইবন মাসউদ (রাঃ)-এর বর্ণনার দিকে ইঙ্গিত করেন। তাবারী ও ইবন কাসীর দুজনেই এখানে বর্ণনাটি এনেছেন। বুখারীর ভাষায় (৪৮৮৬) তিনি বলেছেন: আল্লাহ লা'নত করেছেন সেই নারীদের, যারা উল্কি আঁকে ও আঁকিয়ে নেয়, যারা মুখের লোম উপড়ে ফেলে, আর যারা সৌন্দর্যের জন্য দাঁতের মাঝে ফাঁক তৈরি করে, আল্লাহর সৃষ্টি বদলে দেয়। এক নারী আপত্তি তুলল, সে পুরো কুরআন পড়েছে, অথচ এ কথা কোথাও পায়নি। তিনি তাকে দেখিয়ে দিলেন ৫৯:৭: রাসূল তোমাদের যা দেন তা গ্রহণ করো, আর যা থেকে নিষেধ করেন তা থেকে বিরত থাকো।"
          },
          {
            "en": "The commentators applied these texts carefully. Al-Qurtubi and al-Baghawi record that scholars differed over castrating livestock for a clear benefit, some permitting it and others forbidding or disliking it. Al-Qurtubi gives two explanations for the narration's prohibition, deception and altering creation, preferring the second, and records that adornment which does not last, such as kohl, was allowed by Malik and others. How any of this bears on a medical or cosmetic choice today is a question for a qualified scholar. This article gives no ruling, and neither these verses nor these narrations license contempt for any living person or community.",
            "bn": "মুফাসসিরগণ এসব বর্ণনা প্রয়োগ করেছেন সাবধানে। কুরতুবী ও বাগাভী জানান, স্পষ্ট উপকারের জন্য গবাদিপশু খাসি করা নিয়ে আলেমদের মতভেদ আছে। কেউ জায়েয বলেছেন, কেউ নিষেধ বা অপছন্দ করেছেন। বর্ণনাটির নিষেধের কারণ হিসেবে কুরতুবী দুটি ব্যাখ্যা দেন, প্রতারণা আর সৃষ্টি বদল, এবং দ্বিতীয়টিকে অগ্রাধিকার দেন। তিনি এ-ও জানান, সুরমার মতো যে সাজ স্থায়ী থাকে না, মালিক ও অন্যরা তা জায়েয বলেছেন। আজকের কোনো চিকিৎসা বা সৌন্দর্যচর্চার সিদ্ধান্তে এসবের প্রয়োগ কী হবে, সে প্রশ্ন একজন যোগ্য আলেমের কাছে নিয়ে যেতে হবে। এই লেখা কোনো ফতোয়া দেয় না। আর এই আয়াত বা বর্ণনাগুলো আজকের কোনো মানুষ বা সম্প্রদায়কে তুচ্ছ করার অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Promises That End in Mirage",
          "bn": "মরীচিকায় গিয়ে থামা প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Ya'iduhum wa yumannihim: he promises them and stirs their hopes. Ibn Kathir calls this a report of fact: Shaytan promises his allies that they are the winners in both worlds, and lies. At-Tabari gives the promise as protection against anyone who means them harm; al-Qurtubi adds wealth, rank and leadership, and the claim that there is no resurrection. As-Sa'di adds that it includes threat: Shaytan promises you poverty (2:268), so that giving feels like loss, and he frightens people whenever they prefer Allah's pleasure, until they grow lazy about good.",
            "bn": "ইয়াইদুহুম ওয়া ইউমান্নীহিম: সে তাদের প্রতিশ্রুতি দেয়, মনে আশা জাগায়। ইবন কাসীর বলেন, এ হলো বাস্তবে যা ঘটে তারই খবর। শয়তান তার বন্ধুদের কথা দেয় যে দুনিয়া ও আখিরাতে তারাই সফল, অথচ সে মিথ্যা বলে। তাবারীর বর্ণনায় প্রতিশ্রুতিটা আশ্রয়ের: যে-ই তাদের ক্ষতি করতে চাইবে, তার বিরুদ্ধে সে তাদের সাহায্য করবে। কুরতুবী যোগ করেন সম্পদ, মর্যাদা আর নেতৃত্বের লোভ, সেইসঙ্গে এই দাবি যে পুনরুত্থান বলে কিছু নেই। সা'দী মনে করিয়ে দেন, প্রতিশ্রুতির ভেতরে হুমকিও থাকে। শয়তান তোমাদের দারিদ্র্যের ভয় দেখায় (২:২৬৮), যাতে দান করাকে লোকসান মনে হয়। আর মানুষ যখনই আল্লাহর সন্তুষ্টিকে আগে রাখতে চায়, সে ভয় দেখাতে থাকে, যতক্ষণ না ভালো কাজে আলস্য এসে যায়।"
          },
          {
            "en": "At-Tabari explains ghurur here as falsehood. They thought his promises real; when the truth came out and they needed him, he says what 14:22 reports: Allah promised you the promise of truth, and I promised you and broke it; I had no authority over you except that I called you and you answered me. At Badr, at-Tabari adds, he told the Makkan army no one could overcome them that day, then turned on his heels when the two sides met (8:48). His promises end as a mirage the thirsty take for water (24:39).",
            "bn": "তাবারী এখানে গুরূরের অর্থ করেন বাতিল, অসার জিনিস। লোকেরা তার প্রতিশ্রুতিকে সত্যি ভেবেছিল। তারপর সত্য যখন প্রকাশ পেল আর তাদের তাকে দরকার হলো, তখন সে সেই কথাই বলে, যা ১৪:২২ জানায়: আল্লাহ তোমাদের সত্য প্রতিশ্রুতি দিয়েছিলেন, আমিও প্রতিশ্রুতি দিয়েছিলাম, কিন্তু রাখিনি। তোমাদের উপর আমার কোনো ক্ষমতা ছিল না, আমি শুধু ডেকেছিলাম আর তোমরা সাড়া দিয়েছিলে। তাবারী আরও বলেন, বদরে সে মক্কার বাহিনীকে বলেছিল, আজ কেউ তোমাদের হারাতে পারবে না। তারপর দুই পক্ষ মুখোমুখি হতেই সে পেছন ফিরে পালাল (৮:৪৮)। তার প্রতিশ্রুতির শেষ এমন মরীচিকায়, যাকে তৃষ্ণার্ত পানি ভাবে (২৪:৩৯)।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Share Back",
          "bn": "ভাগটা ফিরিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir's word for the method is delay: put off and postpone. It is a voice most people know, saying not never, only not now. Living with these verses starts with noticing. Which share of today went where I would not have sent it with open eyes: an hour lost to a screen, a prayer pushed to the edge of its time, a repentance booked for after the next thing? Al-Baghawi's line, whatever Iblis is obeyed in is his share, makes this a plain question about hours.",
            "bn": "ইবন কাসীরের ভাষায় কৌশলটার নাম দেরি: ফেলে রাখা আর পিছিয়ে দেওয়া। এ এমন এক কণ্ঠ, যাকে প্রায় সবাই চেনে। সে কখনো বলে না 'কখনো না', বলে শুধু 'এখন না'। এই আয়াতগুলো নিয়ে বাঁচা শুরু হয় খেয়াল করা দিয়ে। আজকের দিনের কোন অংশ এমন জায়গায় গেল, চোখ খোলা থাকলে যেখানে আমি পাঠাতাম না? স্ক্রিনে হারিয়ে যাওয়া একটা ঘণ্টা, ওয়াক্তের একেবারে শেষ কিনারায় ঠেলে দেওয়া নামাজ, পরের কাজটা সেরে নেওয়ার পরে করব বলে তুলে রাখা তওবা? বাগাভীর কথা, যে কাজে ইবলীসের আনুগত্য হয় সেটাই তার ভাগ, প্রশ্নটাকে ঘণ্টার হিসাবে নামিয়ে আনে।"
          },
          {
            "en": "The answer to a wish is a deed, not a stronger wish. A few verses on, 4:123 says it outright: it is not by your wishful thinking, and whoever does wrong is repaid for it. Just before it, 4:122 sets Allah's promise against Shaytan's: who is truer than Allah in speech? Returning to the fitrah, in as-Sa'di's terms, is returning to a nature inclined to accept the truth and prefer it. This week, that means doing one postponed good now, small and real, not just hoping.",
            "bn": "কামনার জবাব আরও জোরালো কামনা নয়, জবাব হলো আমল। কয়েক আয়াত পরে ৪:১২৩ কথাটা খোলাখুলি বলে দেয়: তোমাদের আশা-আকাঙ্ক্ষা দিয়ে কিছু হবে না, যে মন্দ কাজ করবে, সে তার প্রতিফল পাবে। তার ঠিক আগে ৪:১২২ শয়তানের প্রতিশ্রুতির পাশে আল্লাহর প্রতিশ্রুতি রাখে: কথায় আল্লাহর চেয়ে বেশি সত্যবাদী কে? সা'দীর ভাষায় ফিতরাতে ফেরা মানে সেই স্বভাবে ফেরা, যা সত্যকে গ্রহণ করতে আর আগে রাখতে ঝুঁকে থাকে। এই সপ্তাহে এর মানে, পিছিয়ে রাখা একটি ভালো কাজ এখনই করে ফেলা, ছোট হোক, কিন্তু সত্যিকারের। শুধু আশা করে বসে না থাকা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From the Witr",
          "bn": "বিতরের দু'আ থেকে"
        },
        "p": [
          {
            "en": "As-Sa'di ends his comment on 4:119 by praying: O Allah, take us into Your care among those You have taken into Your care, and grant us well-being among those You have granted it. The words come from the supplication the Prophet ﷺ taught al-Hasan ibn 'Ali to say in the witr, which at-Tirmidhi records (464) and grades hasan. Whoever takes Shaytan as a protector, the verse says, has suffered a clear loss; this asks Allah Himself to be the protector instead.",
            "bn": "৪:১১৯ আয়াতের আলোচনা সা'দী শেষ করেন এই দু'আ দিয়ে: হে আল্লাহ, আপনি যাদের অভিভাবক হয়েছেন, তাদের মধ্যে আমাদেরও অভিভাবক হোন। আর যাদের আপনি নিরাপদ রেখেছেন, তাদের মধ্যে আমাদেরও নিরাপদ রাখুন। কথাগুলো সেই দু'আ থেকে, যা নবী ﷺ হাসান ইবন আলী (রাঃ)-কে বিতরে পড়ার জন্য শিখিয়েছিলেন। তিরমিযী এটি বর্ণনা করেছেন (৪৬৪) এবং হাসান বলেছেন। আয়াত বলছে, যে শয়তানকে অভিভাবক বানায়, সে স্পষ্ট ক্ষতিতে পড়ে। এই দু'আ খোদ আল্লাহকেই অভিভাবক হতে বলে।"
          },
          {
            "en": "In at-Tirmidhi's wording: O Allah, guide me among those You have guided, grant me well-being among those You have granted well-being, take me into Your care among those You have taken into Your care, bless me in what You have given, and protect me from the evil of what You have decreed. For You decree and none decrees over You, and whoever You have befriended is not humbled. Blessed are You, our Lord, and exalted.",
            "bn": "তিরমিযীর ভাষায় দু'আটি এই: হে আল্লাহ, আপনি যাদের হিদায়াত দিয়েছেন, তাদের মধ্যে আমাকেও হিদায়াত দিন। যাদের নিরাপদ রেখেছেন, তাদের মধ্যে আমাকেও নিরাপদ রাখুন। যাদের অভিভাবক হয়েছেন, তাদের মধ্যে আমারও অভিভাবক হোন। আমাকে যা দিয়েছেন, তাতে বরকত দিন। আর আপনার ফয়সালার মন্দ থেকে আমাকে রক্ষা করুন। কারণ আপনিই ফয়সালা করেন, আপনার উপর কেউ ফয়সালা করে না। আপনি যার বন্ধু হন, সে কখনো লাঞ্ছিত হয় না। হে আমাদের রব, আপনি বরকতময় ও সুউচ্চ।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Before the Next Delay",
          "bn": "পরের দেরির আগে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "When I picture my end, do I picture it with the deeds I have, or the deeds I keep meaning to do? Which repentance have I scheduled for later, and what am I waiting for? When a hope says it will all work out, how do I tell whether it is trust in Allah's promise or a voice telling me to wait?",
            "bn": "নিজের শেষ সময়টা কল্পনা করলে আমি কি সেটা দেখি আমার আসল আমলগুলো নিয়ে, নাকি সেই আমলগুলো নিয়ে, যা করব করব বলে ভেবে চলেছি? কোন তওবাটা আমি 'পরে' করার জন্য তুলে রেখেছি, আর ঠিক কীসের অপেক্ষায় আছি? কোনো আশা যখন বলে সব ঠিক হয়ে যাবে, আমি কীভাবে বুঝব সেটা আল্লাহর ওয়াদার উপর ভরসা, নাকি অপেক্ষা করতে বলা এক কণ্ঠ?"
          },
          {
            "en": "Where have I treated something as forbidden or required, out of habit or custom, that Allah never made so? Which part of my day do I already know is his share, and what would taking it back this week cost me? And which child in my care am I helping to keep the upright nature they were born with?",
            "bn": "অভ্যাস বা প্রথার বশে কোথায় আমি এমন কিছুকে হারাম বা আবশ্যক ধরে নিয়েছি, যা আল্লাহ কখনো তেমন করেননি? আমার দিনের কোন অংশটাকে আমি আগে থেকেই তার ভাগ বলে জানি? এই সপ্তাহে সেটা ফিরিয়ে নিতে আমার কী খরচ হবে? আর আমার দায়িত্বে থাকা কোন শিশুকে আমি জন্মের সেই সরল স্বভাব ধরে রাখতে সাহায্য করছি?"
          }
        ]
      }
    ]
  },
  "4:123-124": {
    "sections": [
      {
        "h": {
          "en": "What a Wish Cannot Buy",
          "bn": "আশা যা কিনতে পারে না"
        },
        "p": [
          {
            "en": "Laysa bi-amaniyyikum wa la amaniyyi ahli al-kitab: it is not by your wishes, nor by the wishes of the People of the Book. The sentence arrives just after two promises set side by side. In 4:119 and 4:120 Shaytan vows to fill people with wishes, and the Qur'an says he promises them nothing but delusion. In 4:122 Allah gives His own promise of gardens to those who believe and do righteous deeds, and asks who is truer in speech than Allah. The Muyassar reads 4:123 as the next step: this great favour is not reached by wishes.",
            "bn": "লাইসা বিআমানিয়্যিকুম ওয়া লা আমানিয়্যি আহলিল কিতাব: ব্যাপারটা তোমাদের আশায় চলবে না, আহলে কিতাবের আশাতেও না। বাক্যটা আসে পাশাপাশি রাখা দুটি প্রতিশ্রুতির ঠিক পরে। ৪:১১৯ ও ৪:১২০ আয়াতে শয়তান পণ করে, মানুষের মন সে আশায় ভরে দেবে। কুরআন জানিয়ে দেয়, ধোঁকা ছাড়া সে তাদের আর কিছুই দেয় না। ৪:১২২ আয়াতে আল্লাহ নিজের ওয়াদা দেন: যারা ঈমান আনে আর নেক আমল করে, তাদের জন্য জান্নাত। তারপর প্রশ্ন রাখেন, কথায় আল্লাহর চেয়ে বেশি সত্যবাদী কে? মুয়াসসার ৪:১২৩ আয়াতকে পড়ে এর পরের ধাপ হিসেবে: এই বিরাট অনুগ্রহ আশা দিয়ে পাওয়া যায় না।"
          },
          {
            "en": "What, then, is a wish? As-Sa'di defines amani as the soul's talk stripped of any deed, joined to a bare claim that would weigh exactly as much as a counter-claim of the same kind. Ibn Kathir sets two words side by side: religion is not by adornment nor by wishing, laysa bi-l-tahalli wa la bi-l-tamanni. Not everyone who claims a thing gets it by claiming it, he writes. Salvation belongs neither to you nor to them by wishing alone; what counts is obeying Allah and following what He laid down on the tongues of His messengers.",
            "bn": "তাহলে আশা জিনিসটা কী? সা'দীর সংজ্ঞায় আমানী হলো মনের এমন কথা, যার সঙ্গে কোনো আমল নেই, আছে শুধু একটা খালি দাবি। উল্টো দিক থেকে কেউ একই রকম দাবি তুললে দুটোর ওজন হবে হুবহু সমান। ইবন কাসীর দুটি শব্দ পাশাপাশি রাখেন: দ্বীন সাজসজ্জায় নয়, আশাতেও নয়, লাইসা বিত-তাহাল্লী ওয়া লা বিত-তামান্নী। তিনি লেখেন, কোনো কিছু দাবি করলেই সবাই তা পেয়ে যায় না। শুধু আশা করে নাজাত তোমাদেরও মিলবে না, তাদেরও না। আসল হিসাব আল্লাহর আনুগত্যে, আর রাসূলদের মুখে তিনি যা বিধান দিয়েছেন তা মেনে চলায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Boast on Both Sides",
          "bn": "দুই দিকেই বড়াই"
        },
        "p": [
          {
            "en": "The commentators carry more than one report of what the verse answered. At-Tabari gives several from Masruq. In one, Christians and Muslims boasted to each other, each side saying: we are better than you. In another, Muslims and the People of the Book argued, each saying: we are better guided than you. As-Suddi, in at-Tabari, gives the fullest account. The Jews told the Muslims that their religion, book and prophet came first and that none but a Jew would enter the Garden, and the Christians said the like.",
            "bn": "আয়াতটি কোন কথার জবাবে এসেছিল, সে বিষয়ে তাফসীরকারেরা একাধিক বর্ণনা আনেন। তাবারী মাসরূক থেকে কয়েকটি বর্ণনা দেন। একটিতে খ্রিস্টান আর মুসলিমরা পরস্পরের কাছে বড়াই করছিল, দুই পক্ষই বলছিল: আমরা তোমাদের চেয়ে উত্তম। আরেকটিতে মুসলিম আর আহলে কিতাবের মধ্যে তর্ক, প্রত্যেকের দাবি: আমরাই তোমাদের চেয়ে বেশি হিদায়াতের উপর আছি। সবচেয়ে বিস্তারিত বিবরণটা তাবারীতে সুদ্দীর। ইহুদিরা মুসলিমদের বলল, তাদের দ্বীন, কিতাব আর নবী আগে এসেছে, আর ইহুদি ছাড়া কেউ জান্নাতে যাবে না। খ্রিস্টানরাও একই কথা বলল।"
          },
          {
            "en": "The Muslims, as-Suddi continues, answered in kind: their book and prophet came later, the others had been told to follow them, and none would enter the Garden but those on their religion. Then Allah turned the words of all of them back on them. As-Sa'di explains why those who belong to Islam are included in the rebuke: out of complete justice and fairness, since belonging to any religion helps no one who brings no proof for the claim, and deeds confirm a claim or give it the lie. The verse records one exchange. It licenses nothing against any living person or community, Jewish, Christian or Muslim.",
            "bn": "সুদ্দী বলে চলেন, মুসলিমরাও একই সুরে জবাব দিল। আমাদের কিতাব আর নবী এসেছেন পরে, তোমাদেরই বলা হয়েছে আমাদের অনুসরণ করতে, আর আমাদের দ্বীনের লোক ছাড়া কেউ জান্নাতে যাবে না। তখন আল্লাহ সবার কথা তাদের দিকেই ফিরিয়ে দিলেন। ইসলামের সঙ্গে যারা নিজেদের জুড়ে নেয়, এই তিরস্কারে তাদেরও কেন রাখা হলো, সা'দী তার কারণ বলেন: পূর্ণ ন্যায় আর ইনসাফের খাতিরে। দাবির পক্ষে প্রমাণ না আনলে কোনো দ্বীনের সঙ্গে নাম জোড়া থাকা কারও কাজে আসে না। আমলই দাবিকে সত্য বা মিথ্যা প্রমাণ করে। আয়াতটি একটি কথোপকথনের বিবরণ দেয়। ইহুদি, খ্রিস্টান বা মুসলিম, কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Not everyone read the address this way, and at-Tabari records the disagreement. Masruq, Qatadah and as-Suddi report the exchange between Muslims and the People of the Book. Mujahid says your wishes is spoken to the idolaters of Quraysh, who said they would not be raised or punished, alongside the Jews and Christians who said none but they would enter the Garden (2:111). At-Tabari prefers Mujahid's reading, because the wishes just mentioned are those Shaytan vowed to plant in 4:119 and 4:120, and no wishes of the Muslims had come up. Both readings are on record.",
            "bn": "সম্বোধনটা সবাই এভাবে পড়েননি, তাবারী সেই মতভেদও লিখে রাখেন। মাসরূক, কাতাদা আর সুদ্দী মুসলিম ও আহলে কিতাবের সেই কথা-কাটাকাটির বর্ণনা দেন। মুজাহিদ বলেন, 'তোমাদের আশা' কথাটা কুরাইশের মুশরিকদের উদ্দেশে, যারা বলত তাদের আবার ওঠানো হবে না, শাস্তিও হবে না। তাদের পাশে ইহুদি আর খ্রিস্টানরা, যারা বলত তারা ছাড়া কেউ জান্নাতে যাবে না (২:১১১)। তাবারী মুজাহিদের মতকেই বেশি সঠিক মনে করেন। কারণ, ঠিক আগে যে আশার কথা এসেছে তা শয়তানের বুনে দেওয়া আশা, ৪:১১৯ ও ৪:১২০ আয়াতে। মুসলিমদের কোনো আশার প্রসঙ্গ সেখানে ওঠেনি। দুটি ব্যাখ্যাই তাফসীরের ভাণ্ডারে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Every Wrong, or Only Shirk",
          "bn": "সব গুনাহ, নাকি শুধু শিরক"
        },
        "p": [
          {
            "en": "Man ya'mal su'an yujza bihi: whoever does a wrong will be repaid for it. The early authorities split over what su' covers. Al-Hasan, in at-Tabari, said it means the disbeliever, and recited 34:17: and do We repay any but the ungrateful? Ibn Abbas (RA), by way of Ali ibn Abi Talhah, and Sa'id ibn Jubayr said su' here is shirk, and Ibn Abbas adds: unless he repents before his death.",
            "bn": "মান ইয়া'মাল সূআন ইউজযা বিহী: যে মন্দ কাজ করবে, তাকে তার প্রতিফল দেওয়া হবে। এখানে সূ' বলতে কী বোঝায়, তা নিয়ে পূর্বসূরিরা দুই ভাগ। তাবারীর বর্ণনায় হাসান বলেন, এর মানে কাফির। তারপর তিনি পড়েন ৩৪:১৭: অকৃতজ্ঞ ছাড়া আর কাকে আমি এমন প্রতিফল দিই? আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) আর সাঈদ ইবন জুবাইর বলেন, এখানে সূ' মানে শিরক। ইবন আব্বাস আরও বলেন: যদি না সে মৃত্যুর আগে তওবা করে।"
          },
          {
            "en": "Others read it as every sin. Ar-Rabi' ibn Ziyad told Ubayy ibn Ka'b (RA) that if everything they did were repaid, they were ruined. Ubayy answered that he had thought him wiser than that: no scratch or stumble strikes a man except through a sin, and what Allah pardons is more. 'A'ishah (RA), asked about the verse, said it is what strikes you in this world. At-Tabari takes this reading, because the verse covers every doer of wrong, small or great, believer or disbeliever, with nothing in it to narrow it. Ibn Kathir calls it the correct view.",
            "bn": "অন্যরা একে পড়েছেন সব গুনাহ হিসেবে। রাবী' ইবন যিয়াদ উবাই ইবন কা'ব (রাঃ)-কে বললেন, যা কিছু করি তার সবকিছুর প্রতিফল পেতে হলে তো আমরা শেষ। উবাই জবাব দিলেন, তিনি তাঁকে এর চেয়ে বেশি বুঝদার ভেবেছিলেন। গুনাহের কারণ ছাড়া কোনো মানুষের গায়ে আঁচড় লাগে না, পা হোঁচটও খায় না। আর আল্লাহ যা মাফ করে দেন, তা এর চেয়ে বেশি। আয়াতটি নিয়ে জিজ্ঞেস করা হলে আয়িশা (রাঃ) বলেন, দুনিয়াতে যে কষ্ট এসে পড়ে, এ হলো তা-ই। তাবারী এই ব্যাখ্যাই নেন। কারণ আয়াতটি ছোট-বড়, মুমিন-কাফির নির্বিশেষে সব মন্দকারীকে ধরে, আর একে সীমিত করার মতো কিছু এতে নেই। ইবন কাসীর একে সঠিক মত বলেন।"
          },
          {
            "en": "At-Tabari then meets an objection. In 4:31 Allah promises to remove the misdeeds of those who avoid the major sins, so how can He also repay them? His answer is that 4:31 did not promise to leave misdeeds unrepaid. It promised not to disgrace their owners in the Hereafter, as the people of shirk and hypocrisy are disgraced. When He repays believers in this world with calamities, so that they meet Him with no sin left to answer for, He has kept the promise of 4:31 and the promise of 4:122.",
            "bn": "এরপর তাবারী একটি আপত্তির জবাব দেন। ৪:৩১ আয়াতে আল্লাহ ওয়াদা করেছেন, যারা কবীরা গুনাহ থেকে বেঁচে থাকে, তাদের মন্দগুলো তিনি মুছে দেবেন। তাহলে আবার সেগুলোর প্রতিফল দেবেন কীভাবে? তাবারীর উত্তর: ৪:৩১ প্রতিফল না দেওয়ার ওয়াদা করেনি। ওয়াদা করেছে আখিরাতে তাদের লাঞ্ছিত না করার, যেভাবে শিরক আর নিফাকের লোকদের লাঞ্ছিত করা হয়। দুনিয়াতে বিপদ-আপদ দিয়ে তিনি মুমিনদের প্রতিফল চুকিয়ে দেন, যাতে তারা তাঁর সামনে এমন অবস্থায় হাজির হয় যে জবাবদিহির মতো কোনো গুনাহ বাকি নেই। এভাবেই তিনি ৪:৩১ আর ৪:১২২ আয়াতের দুই ওয়াদাই পূরণ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Even a Thorn That Pricks",
          "bn": "কাঁটার খোঁচাও বাদ যায় না"
        },
        "p": [
          {
            "en": "Muslim records in his Sahih (2574) from Abu Hurayrah (RA): when man ya'mal su'an yujza bihi came down, it weighed very heavily on the Muslims, and the Messenger of Allah ﷺ said: Keep near the mark and aim straight, for in everything that befalls a Muslim there is expiation, even a mishap that strikes him or a thorn that pricks him. The narration names this verse. It does not soften the verse; it shows where, for a believer, much of the repaying is done.",
            "bn": "মুসলিম তাঁর সহীহ গ্রন্থে (২৫৭৪) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন: যখন 'মান ইয়া'মাল সূআন ইউজযা বিহী' নাযিল হলো, মুসলিমদের উপর তা খুব ভারী হয়ে পড়ল। তখন আল্লাহর রাসূল ﷺ বললেন: মাঝামাঝি থাকো আর ঠিক লক্ষ্যে চলো। কেননা মুসলিমের উপর যা কিছু আসে, তার প্রতিটিতেই কাফফারা আছে, এমনকি যে বিপদে সে পড়ে, কিংবা যে কাঁটা তার গায়ে বিঁধে। বর্ণনাটি এই আয়াতের নাম ধরেই এসেছে। এটি আয়াতের কঠোরতা কমায় না। বরং দেখায়, মুমিনের প্রতিফলের অনেকটাই কোথায় চুকিয়ে দেওয়া হয়।"
          },
          {
            "en": "The better-known story of Abu Bakr (RA) at this verse needs more care. At-Tirmidhi records it (3039): Abu Bakr felt as if his back had broken, asked which of them had never done wrong, and was told that he and the believers are repaid in this world until they meet Allah with no sins. At-Tirmidhi himself calls it gharib and says its chain is criticised, one narrator being weak and another unknown, and that the other routes from Abu Bakr have no sound chain either. It is reported here with his grading, and nothing is built on it.",
            "bn": "এই আয়াতের প্রসঙ্গে আবু বকর (রাঃ)-এর যে ঘটনা বেশি প্রচলিত, তার বেলায় আরও সাবধান হওয়া দরকার। তিরমিযী সেটি বর্ণনা করেছেন (৩০৩৯)। আবু বকরের মনে হলো যেন তাঁর পিঠ ভেঙে গেছে। তিনি জানতে চাইলেন, আমাদের মধ্যে কে আছে যে কখনো মন্দ করেনি? উত্তর এল, তিনি আর মুমিনরা প্রতিফল পাবেন দুনিয়াতেই, যতক্ষণ না গুনাহমুক্ত অবস্থায় আল্লাহর সঙ্গে মিলিত হন। তিরমিযী নিজেই একে গারীব বলেছেন। তিনি জানান, এর সনদে আপত্তি আছে: একজন বর্ণনাকারী দুর্বল, আরেকজন অজ্ঞাত। আবু বকর থেকে আসা অন্য সূত্রগুলোর সনদও সহীহ নয়। তাঁর দেওয়া এই মানসহ বর্ণনাটি এখানে উল্লেখ করা হলো, এর উপর কিছু দাঁড় করানো হয়নি।"
          },
          {
            "en": "As-Sa'di describes how the repaying differs between people. One whose deeds are all wrong, which he says can only be a disbeliever, is repaid with lasting punishment if he dies without repenting. One whose deeds are sound and who is upright most of the time, but slips now and then into small sins, is repaid through worry, grief and harm, and pains in body, heart, loved ones or wealth. These, he writes, are expiations Allah arranged out of kindness to His servants, with many ranks between the two. And one who repents is like one with no sin.",
            "bn": "প্রতিফল সবার বেলায় এক রকম নয়, সা'দী তা খুলে বলেন। একজন মানুষের সব আমলই মন্দ। তিনি বলেন, এমন লোক কাফির ছাড়া আর কেউ হতে পারে না, আর তওবা ছাড়া মারা গেলে সে স্থায়ী শাস্তি পাবে। অন্যজনের আমল ভালো, বেশিরভাগ সময় সে সোজা পথে থাকে, শুধু মাঝে মাঝে ছোট গুনাহ হয়ে যায়। তার প্রতিফল আসে দুশ্চিন্তা, দুঃখ আর কষ্টের ভেতর দিয়ে, শরীর, মন, প্রিয়জন বা সম্পদে পাওয়া ব্যথার ভেতর দিয়ে। তিনি লেখেন, এগুলো কাফফারা, বান্দাদের প্রতি দয়া করে আল্লাহ এগুলোর ব্যবস্থা করেছেন। এই দুই অবস্থার মাঝে আছে আরও বহু স্তর। আর যে তওবা করে, সে যেন এমন মানুষ যার কোনো গুনাহই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Some of the Righteous Deeds",
          "bn": "নেক আমলের যতটুকু পারা যায়"
        },
        "p": [
          {
            "en": "Then 4:124 turns to the other side. At-Tabari reads it as spoken to the same people: the one who enters the Garden is whoever does righteous deeds, from your men and women and from the men and women of My servants, while believing in Me and in My Messenger Muhammad ﷺ. Masruq, in at-Tabari and al-Baghawi, reports that when 4:123 came down the People of the Book said: we and you are equal. Then 4:124 came down with its condition, and in another of his reports it is with this verse that the Muslims won the argument. Nor does that report license anything against anyone living.",
            "bn": "এরপর ৪:১২৪ আয়াত অন্য দিকটা দেখায়। তাবারী একে পড়েন একই লোকদের উদ্দেশে বলা কথা হিসেবে। জান্নাতে যাবে সে, যে নেক আমল করে, তোমাদের পুরুষ-নারী থেকে হোক কিংবা আমার বান্দাদের পুরুষ-নারী থেকে, আর সঙ্গে আমার প্রতি ও আমার রাসূল মুহাম্মাদ ﷺ-এর প্রতি ঈমান রাখে। তাবারী ও বাগাভীতে মাসরূকের বর্ণনা আছে: ৪:১২৩ নাযিল হলে আহলে কিতাব বলল, আমরা আর তোমরা সমান। তখন শর্তসহ ৪:১২৪ নাযিল হলো। তাঁর আরেক বর্ণনায় আছে, এই আয়াত দিয়েই মুসলিমরা তর্কে জিতেছিল। এ বর্ণনাও কোনো জীবিত মানুষের বিরুদ্ধে কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "At-Tabari also stops on a small word. The verse says man ya'mal mina al-salihat, whoever does some of the righteous deeds, not all of them. He gives two reasons for the min. Allah knew His believing servants could never do every righteous deed, so He bound His promise to whoever did what he could, and did not deny him His favour for what his strength could not reach. Or the promise is for whoever avoids the major sins and does the obligations, even if he falls short in some duty.",
            "bn": "তাবারী একটি ছোট শব্দেও থামেন। আয়াতে আছে মান ইয়া'মাল মিনাস সালিহাত, অর্থাৎ যে নেক আমলের কিছু করে, সব নয়। এই 'মিন'-এর দুটি কারণ তিনি দেখান। আল্লাহ জানতেন, তাঁর মুমিন বান্দারা সব নেক আমল কখনো করে উঠতে পারবে না। তাই যে যতটুকু পারে, তার জন্যই তিনি ওয়াদাটা পাকা করেছেন, আর শক্তিতে যা কুলায়নি তার জন্য তাকে নিজের অনুগ্রহ থেকে বঞ্চিত করেননি। অথবা ওয়াদাটা তার জন্য, যে কবীরা গুনাহ থেকে বাঁচে আর ফরযগুলো আদায় করে, কোনো কোনো দায়িত্বে ঘাটতি থাকলেও।"
          }
        ]
      },
      {
        "h": {
          "en": "While a Believer, Man or Woman",
          "bn": "ঈমানসহ, পুরুষ হোক বা নারী"
        },
        "p": [
          {
            "en": "Wa huwa mu'min, while being a believer, is a condition, and al-Qurtubi says why it is stated. The idolaters pointed to their service of the Ka'bah, their feeding of pilgrims and their hosting of guests; the People of the Book pointed to having come first, and to calling themselves the sons of Allah and His beloved (5:18). So Allah made clear that good deeds are not accepted without faith. As-Sa'di calls faith the root: deeds without it are branches of a tree whose root has been cut, or a building raised on the waves.",
            "bn": "ওয়া হুয়া মু'মিন, অর্থাৎ সে ঈমানদার, এটি একটি শর্ত। কেন শর্তটা বলা হলো, কুরতুবী তা জানান। মুশরিকরা গর্ব করত কা'বার খেদমত, হাজীদের খাওয়ানো আর মেহমানদারি নিয়ে। আহলে কিতাব গর্ব করত আগে আসা নিয়ে, আর নিজেদের আল্লাহর পুত্র ও প্রিয়পাত্র বলে দাবি করা নিয়ে (৫:১৮)। তাই আল্লাহ স্পষ্ট করে দিলেন, ঈমান ছাড়া ভালো কাজ কবুল হয় না। সা'দী ঈমানকে বলেন শিকড়। ঈমান ছাড়া আমল যেন এমন গাছের ডালপালা, যার শিকড় কেটে ফেলা হয়েছে, কিংবা ঢেউয়ের উপর তোলা দালান।"
          },
          {
            "en": "As-Suddi, in at-Tabari, states the condition from both ends: Allah refused to accept faith except with righteous deeds, and refused to accept Islam except with excellence. Then min dhakarin aw untha, male or female. As-Sa'di says the verse takes in every doer, human or jinn, young or old, male or female, and Ibn Kathir speaks of Allah accepting righteous deeds from His servants, their men and their women, on condition of faith. The verse names both, and gives both one promise and one measure.",
            "bn": "তাবারীতে সুদ্দী শর্তটা বলেন দুই দিক থেকে: আল্লাহ নেক আমল ছাড়া ঈমান কবুল করতে রাজি হননি, আর ইহসান ছাড়া ইসলাম কবুল করতে রাজি হননি। তারপর মিন যাকারিন আও উনসা, পুরুষ হোক বা নারী। সা'দী বলেন, আয়াতটি প্রত্যেক আমলকারীকে শামিল করে, মানুষ বা জিন, ছোট বা বড়, পুরুষ বা নারী। ইবন কাসীর বলেন, আল্লাহ তাঁর বান্দাদের নেক আমল কবুল করেন, পুরুষদেরও, নারীদেরও, ঈমানের শর্তে। আয়াতটি দুজনেরই নাম নেয়, আর দুজনকে দেয় একই ওয়াদা, একই মাপকাঠি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dent on a Date-Stone",
          "bn": "খেজুরের আঁটির পিঠের খাঁজ"
        },
        "p": [
          {
            "en": "Wa la yuzlamuna naqira: and they will not be wronged by so much as a naqir. Ibn Kathir explains the naqir as the small dent on the back of a date-stone, and sets it beside two other date-stone words: the fatil, the thread in the stone's split, and the qitmir, the thin skin wrapped around it. All three, he notes, are in the Qur'an. Mujahid, in at-Tabari, also puts the naqir on the stone's back, while Atiyyah puts it in the middle.",
            "bn": "ওয়া লা ইউযলামূনা নাকীরা: আর তাদের প্রতি নাকীর পরিমাণও অবিচার করা হবে না। ইবন কাসীর বলেন, নাকীর হলো খেজুরের আঁটির পিঠে যে ছোট্ট খাঁজ থাকে। তার পাশে তিনি আঁটির সঙ্গে জড়িত আরও দুটি শব্দ রাখেন। ফাতীল হলো আঁটির চেরা খাঁজে থাকা সুতার মতো আঁশ, আর কিতমীর হলো আঁটির গায়ে জড়ানো পাতলা আবরণ। তিনি জানান, তিনটিই কুরআনে আছে। তাবারীর বর্ণনায় মুজাহিদও নাকীরকে আঁটির পিঠেই রাখেন, আর আতিয়্যা রাখেন এর মাঝখানে।"
          },
          {
            "en": "At-Tabari draws the argument out: if they are not wronged by that dent, small as it is, how could they be wronged in anything greater? Allah is telling His servants that He will not cut short the reward of their deeds, little or much, but will pay it in full as He promised. As-Sa'di adds that they will find it complete, multiplied many times over. Al-Qurtubi notes two readings of the verb: Abu Amr and the reader Ibn Kathir have yudkhaluna, they will be admitted, and the rest yadkhuluna, they will enter.",
            "bn": "তাবারী যুক্তিটা টেনে নিয়ে যান: অত ছোট খাঁজ পরিমাণও যদি তাদের প্রতি অবিচার না হয়, তবে এর চেয়ে বড় কিছুতে হবে কী করে? আল্লাহ বান্দাদের জানিয়ে দিচ্ছেন, তাদের আমলের প্রতিদান অল্প হোক বা বেশি, তিনি একটুও কাটবেন না, বরং ওয়াদা অনুযায়ী পুরোটাই দেবেন। সা'দী যোগ করেন, তারা তা পাবে পূর্ণ আকারে, বহু গুণ বাড়িয়ে। কুরতুবী ক্রিয়াটির দুটি কিরাআতের কথা বলেন। আবু আমর আর ক্বারী ইবন কাসীর পড়েন ইউদখালূনা, তাদের প্রবেশ করানো হবে। বাকিরা পড়েন ইয়াদখুলূনা, তারা প্রবেশ করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Is Not a Deed",
          "bn": "নাম আমলের বদলি নয়"
        },
        "p": [
          {
            "en": "Read together, the two verses take away the comfort of belonging and put something harder and fairer in its place. A Muslim name, a family that prays, a community with a long history: none of these is what gets weighed. What is weighed is what was done, and the faith it was done from. When talk turns to whose religion is better, the verse asks a person to look at their own record first, because the sentence that answered the boasters answered every side of them.",
            "bn": "আয়াত দুটি একসঙ্গে পড়লে বোঝা যায়, কোনো দলের লোক হওয়ার আরামটা এরা কেড়ে নেয়, আর তার জায়গায় রাখে আরও কঠিন, আরও ন্যায্য একটা মাপ। মুসলিম নাম, নামাযি পরিবার, দীর্ঘ ইতিহাসওয়ালা সম্প্রদায়, এর কোনোটাই পাল্লায় ওঠে না। পাল্লায় ওঠে যা করা হয়েছে, আর যে ঈমান থেকে তা করা হয়েছে। কার দ্বীন ভালো, এ নিয়ে কথা উঠলে আয়াতটি আগে নিজের আমলনামার দিকে তাকাতে বলে। কারণ যে বাক্য বড়াইকারীদের জবাব দিয়েছিল, তা সব পক্ষকেই জবাব দিয়েছিল।"
          },
          {
            "en": "A second habit concerns hardship. On the reading at-Tabari and Ibn Kathir prefer, and in Muslim's narration, the small troubles of a believer's day, the stumble, the scratch, the thorn, are part of how wrongs are settled before the meeting with Allah. That is a way for a believer to read his own pain, with patience and with repentance. It is not a measure to hold against someone else's illness or loss; the verse offers no such measure. And no good deed is too slight to count, since not even a naqir of it is lost.",
            "bn": "আরেকটি অভ্যাস বিপদ-আপদ নিয়ে। তাবারী আর ইবন কাসীর যে ব্যাখ্যা বেছে নিয়েছেন, আর মুসলিমের বর্ণনায় যা এসেছে, সে অনুযায়ী মুমিনের দিনের ছোটখাটো কষ্ট, হোঁচট, আঁচড়, কাঁটার খোঁচা, আল্লাহর সামনে হাজির হওয়ার আগেই গুনাহের হিসাব মেটানোর অংশ। নিজের কষ্টকে এভাবে দেখা যায়, সবর আর তওবা নিয়ে। কিন্তু অন্যের অসুখ বা ক্ষতি দেখে তার গুনাহ মাপার সুযোগ নেই, আয়াত এমন কোনো মাপকাঠি দেয় না। আর কোনো নেক আমলই গোনার অযোগ্য ছোট নয়, কারণ তার নাকীর পরিমাণও হারায় না।"
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
  "4:129-130": {
    "sections": [
      {
        "h": {
          "en": "After the Settlement Verse",
          "bn": "আপোষের আয়াতের পরে"
        },
        "p": [
          {
            "en": "These two verses sit inside a run of answers. 4:127 opens with people asking the Prophet ﷺ for a ruling concerning women, and 4:128 takes up a wife who fears her husband is turning away from her, and calls a settlement between them better. Then 4:129 speaks to a man who already has more than one wife, and 4:130 to a couple who part. Ibn Kathir and as-Sa'di both call the parting in 4:130 the third state between husband and wife, which makes 4:128 and 4:129 the first two.",
            "bn": "আয়াত দুটি একটানা কয়েকটি উত্তরের ভেতরে বসানো। ৪:১২৭ শুরু হয় নারীদের ব্যাপারে নবী ﷺ-এর কাছে লোকদের বিধান জানতে চাওয়া দিয়ে। ৪:১২৮ কথা বলে সেই স্ত্রীর, যে আশঙ্কা করে স্বামী তার থেকে মুখ ফিরিয়ে নিচ্ছে, আর জানিয়ে দেয়, দুজনের আপোষই উত্তম। এরপর ৪:১২৯ কথা বলে এমন পুরুষের সঙ্গে, যার আগে থেকেই একজনের বেশি স্ত্রী আছে, আর ৪:১৩০ সেই দম্পতির কথা, যারা আলাদা হয়ে যায়। ইবন কাসীর ও সা'দী দুজনেই ৪:১৩০-এর বিচ্ছেদকে স্বামী-স্ত্রীর মাঝে তৃতীয় অবস্থা বলেছেন। তাহলে প্রথম দুটি অবস্থা ৪:১২৮ ও ৪:১২৯।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the verse together with 4:3, where a man who fears he will not be just is told to keep to one wife. Taken on its surface, it says, 4:3 could suggest that equality of feeling was required too. 4:129 makes clear that equality in what lies beyond a person's power is not obligatory, while equality in what lies within it, such as nights spent with each wife, living standards and maintenance, stays binding.",
            "bn": "মাআরিফুল কুরআন আয়াতটিকে পড়ে ৪:৩-এর সঙ্গে মিলিয়ে। সেখানে বলা হয়েছে, ইনসাফ করতে না পারার আশঙ্কা থাকলে একজন স্ত্রীতেই থেমে যাও। মাআরিফুল কুরআনের মতে, ওপর ওপর পড়লে ৪:৩ থেকে মনে হতে পারত, মনের টানেও সমতা রাখা বাধ্যতামূলক। ৪:১২৯ বিষয়টা পরিষ্কার করে দেয়। মানুষের সাধ্যের বাইরে যা, তাতে সমতা বাধ্যতামূলক নয়। আর যা সাধ্যের ভেতরে, যেমন প্রত্যেক স্ত্রীর কাছে রাত কাটানো, জীবনযাত্রার মান ও ভরণপোষণ, তাতে সমতা রাখতেই হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Equal in What, Exactly?",
          "bn": "সমতা আসলে কীসে"
        },
        "p": [
          {
            "en": "Wa lan tastati'u an ta'dilu bayna an-nisa'i wa law harastum: you will never be able to be just between wives, however eager you are. At-Tabari explains it as not being able, O men, to make your wives equal in the love of your hearts, so that none holds more of it than the others, because that is not something you own. Al-Qurtubi says Allah is describing the human condition: by the way they are made, people do not own their hearts' leaning toward some over others.",
            "bn": "ওয়া লান তাসতাতীঊ আন তা'দিলূ বাইনান নিসাই ওয়া লাও হারাসতুম: স্ত্রীদের মাঝে তোমরা কখনোই সমতা রক্ষা করতে পারবে না, যত আগ্রহই থাকুক। তাবারী ব্যাখ্যা করেন: হে পুরুষেরা, মনের ভালোবাসায় তোমরা স্ত্রীদের সমান রাখতে পারবে না, যাতে কারও ভাগে অন্যদের চেয়ে বেশি না পড়ে। কারণ এ জিনিস তোমাদের মালিকানায় নেই। কুরতুবী বলেন, আল্লাহ এখানে মানুষের অবস্থার বিবরণ দিচ্ছেন। সৃষ্টির স্বভাবেই কারও দিকে মনের ঝোঁক বেশি থাকে, কারও দিকে কম, আর এই ঝোঁকের মালিক মানুষ নিজে নয়।"
          },
          {
            "en": "In at-Tabari's chains, Ubaydah as-Salmani names what lies outside a man's control as love and intimacy, as does Ibn Abbas in one report, while al-Hasan says love, and Ibn Zayd says whatever belongs to his body and his heart, which he cannot own. Ibn Kathir sums it up: even when the outward division is kept, a night for each, there will still be differences in love, desire and intimacy. As-Sa'di gives the reason. Perfect justice would need equal love, equal pull and equal leaning, then conduct to match; that is impossible, so Allah pardoned it.",
            "bn": "তাবারীর সনদে উবাইদা সালমানী বলেন, পুরুষের হাতের বাইরে যা, তা হলো ভালোবাসা ও দাম্পত্য ঘনিষ্ঠতা। ইবন আব্বাস (রাঃ)-এর একটি বর্ণনাতেও তা-ই আছে। হাসান বসরী বলেন, ভালোবাসা। আর ইবন যাইদ বলেন, তার দেহ ও মনের যা কিছু, যার মালিক সে নিজে হতে পারে না। ইবন কাসীর সারকথা টানেন: বাইরের ভাগাভাগি, এক রাত এর কাছে, এক রাত ওর কাছে, ঠিকঠাক রাখা গেলেও ভালোবাসা, আকাঙ্ক্ষা ও ঘনিষ্ঠতায় তারতম্য থাকবেই। সা'দী কারণটাও বলেন। পূর্ণ ইনসাফের জন্য দরকার সমান ভালোবাসা, সমান টান, মনের সমান ঝোঁক, তারপর সে অনুযায়ী আচরণ। এটা অসম্ভব, তাই আল্লাহ তা মাফ করে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Whole Leaning",
          "bn": "পুরোপুরি ঝুঁকে পড়া নয়"
        },
        "p": [
          {
            "en": "Then the command: fa-la tamilu kulla al-mayl, so do not lean with the whole of your leaning. The word kull carries the point. Ibn Kathir reads it: when you do incline toward one of them, do not take that inclination all the way. At-Tabari describes the forbidden leaning as one where a man's desires carry him so far toward the wife he cannot help loving that he wrongs the others, withholding what is due to them: their share of his time, their maintenance, and companionship on decent terms.",
            "bn": "তারপর আদেশ: ফালা তামীলূ কুল্লাল মাইল, তাই পুরোপুরি ঝুঁকে পড়ো না। কথার ভার 'কুল্ল' শব্দটির ওপর, যার মানে সবটুকু। ইবন কাসীর এভাবে পড়েন: তাদের একজনের দিকে যদি ঝুঁকেই পড়ো, সেই ঝোঁককে শেষ সীমা পর্যন্ত নিয়ে যেয়ো না। তাবারীর ব্যাখ্যায় নিষিদ্ধ ঝোঁক সেটাই, যেখানে প্রবৃত্তি পুরুষকে সেই স্ত্রীর দিকে এতদূর টেনে নেয়, যাকে ভালো না বেসে সে পারে না, যে অন্যদের ওপর সে জুলুম করে বসে। তাদের পাওনা আটকে যায়: তার সময়ে তাদের ভাগ, তাদের ভরণপোষণ, আর ভালোভাবে একসঙ্গে থাকা।"
          },
          {
            "en": "Mujahid says: do not deliberately do harm, and in al-Qurtubi's text the line goes on: rather, hold to equality in division and maintenance, because that is within ability. As-Suddi pictures a man who leans against a wife so that he neither spends on her nor gives her a day. Al-Baghawi puts it in a phrase: do not let your actions follow your desires. As-Sa'di draws the line: maintenance, clothing and the division of time must be equal, unlike love and intimacy. The excuse covers the heart. It does not cover the hand.",
            "bn": "মুজাহিদ বলেন: জেনেবুঝে খারাপ আচরণ কোরো না। কুরতুবীর পাঠে কথাটা আরও এগোয়: বরং সময় ভাগ আর ভরণপোষণে সমতা আঁকড়ে থাকো, কারণ এটা সাধ্যের ভেতরে। সুদ্দী এমন লোকের ছবি আঁকেন, যে কোনো স্ত্রীর বিরুদ্ধে এমনভাবে ঝুঁকে পড়ে যে তার খরচও দেয় না, তাকে একটা দিনও দেয় না। বাগাভী এক কথায় বলেন: তোমাদের কাজকে তোমাদের খেয়ালখুশির পেছনে চলতে দিয়ো না। সা'দী সীমারেখাটা টানেন: ভরণপোষণ, পোশাক আর সময় ভাগে সমতা রাখতেই হবে, ভালোবাসা ও ঘনিষ্ঠতার বেলায় নয়। ছাড়টা মনের জন্য, হাতের কাজের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Neither Married Nor Free",
          "bn": "না সংসারে, না মুক্ত"
        },
        "p": [
          {
            "en": "Fa-tadharuha ka-l-mu'allaqah: so that you leave her like one hung up. At-Tabari explains it as the woman who is neither a wife with a husband nor a woman without one, and gives the same gloss from Ibn Abbas, Sa'id ibn Jubayr, al-Hasan, ar-Rabi' ibn Anas and as-Suddi; Ibn Kathir's longer list includes Mujahid, ad-Dahhak and Muqatil ibn Hayyan. Al-Qurtubi explains the image itself. A thing hung from something has neither come to rest on the ground nor is it borne up by what it hangs from.",
            "bn": "ফাতাযারূহা কাল মুআল্লাকাহ: ফলে তাকে ঝুলন্ত অবস্থায় ফেলে রাখো। তাবারী ব্যাখ্যা করেন, সে এমন নারী, যে স্বামীর সংসারের স্ত্রীও নয়, আবার স্বামীহীন নারীও নয়। একই ব্যাখ্যা তিনি আনেন ইবন আব্বাস (রাঃ), সাঈদ ইবন জুবাইর, হাসান বসরী, রবী' ইবন আনাস ও সুদ্দী থেকে। ইবন কাসীরের তালিকা আরও লম্বা, তাতে মুজাহিদ, দাহহাক ও মুকাতিল ইবন হাইয়ানও আছেন। ছবিটার মানে কুরতুবী খুলে বলেন। কোনো কিছু থেকে ঝোলানো জিনিস মাটিতেও স্থির হয়নি, আবার যেখান থেকে ঝুলছে তার ওপর ভর দিয়েও থাকতে পারেনি।"
          },
          {
            "en": "Two glosses make plain what she is denied. Ibn Zayd, in at-Tabari, says the hanging wife is not set free to seek a life for herself, nor kept as a wife is kept by her husband: she is neither with him nor parted from him. As-Sa'di says a wife whose husband leaves what is due to her becomes like the hanging wife: not a woman without a husband, who could at least rest and prepare to marry again, and not a wife whose husband upholds her rights. Qatadah's word is harsher: like a woman imprisoned.",
            "bn": "সে কী থেকে বঞ্চিত, দুটি ব্যাখ্যা তা পরিষ্কার করে। তাবারীর বর্ণনায় ইবন যাইদ বলেন, ঝুলন্ত স্ত্রীকে নিজের পথ খুঁজে নিতে ছেড়েও দেওয়া হয়নি, আবার স্বামীর কাছে স্ত্রী যেভাবে থাকে সেভাবেও রাখা হয়নি। সে স্বামীর কাছেও নেই, আলাদাও হয়নি। সা'দী বলেন, স্বামী যে স্ত্রীর পাওনা আদায় ছেড়ে দেয়, সে হয়ে যায় ঝুলন্ত নারীর মতো। সে স্বামীহীনও নয় যে অন্তত একটু স্বস্তি পাবে আর নতুন বিয়ের প্রস্তুতি নেবে, আবার এমন স্বামীর স্ত্রীও নয়, যে তার হক আদায় করে। কাতাদার শব্দ আরও কঠিন: যেন বন্দি কোনো নারী।"
          },
          {
            "en": "Al-Qurtubi and al-Baghawi both report a reading from Ubayy ibn Ka'b with that same word, imprisoned. Al-Qurtubi also shows the word in use, citing the narration of Umm Zar', which al-Bukhari records (5189) from A'ishah (RA). Women describe their husbands, and the third says: My husband, the too-tall! If I describe him (and he hears of that) he will divorce me, and if I keep quiet, he will keep me hanging (neither divorcing me nor treating me as a wife). The verse forbids a husband to leave his wife in that place.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই উবাই ইবন কা'ব (রাঃ) থেকে এমন এক পাঠ উল্লেখ করেন, যাতে ঠিক এই শব্দটিই আছে: বন্দি। কুরতুবী শব্দটির ব্যবহারও দেখান উম্মু যার'-এর বর্ণনা থেকে, যা বুখারী (৫১৮৯) আয়িশা (রাঃ) থেকে এনেছেন। সেখানে কয়েকজন নারী নিজেদের স্বামীর কথা বলেন। তৃতীয়জন বলেন: আমার স্বামী সেই অতি লম্বা লোক! তার কথা বললে (আর সে শুনলে) সে আমাকে তালাক দেবে, আর চুপ থাকলে আমাকে ঝুলিয়ে রাখবে (না তালাক দেবে, না স্ত্রীর মতো রাখবে)। স্ত্রীকে এমন জায়গায় ফেলে রাখতে আয়াতটি স্বামীকে নিষেধ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Over the Heart",
          "bn": "মন নিয়ে এক দোয়া"
        },
        "p": [
          {
            "en": "Several commentators set a prayer of the Prophet ﷺ beside this verse. Abu Dawud records it (2134) from A'ishah (RA): The Messenger of Allah ﷺ used to divide his time equally and said: O Allah, this is my division concerning what I control, so do not blame me concerning what You control and I do not. Abu Dawud adds: by it is meant the heart. Ma'arif al-Qur'an asks who could be more in control of himself than the Prophet ﷺ, and yet he too counted the heart's leaning as outside his control.",
            "bn": "কয়েকজন তাফসীরকার এই আয়াতের পাশে নবী ﷺ-এর একটি দোয়া রেখেছেন। আবু দাউদ (২১৩৪) আয়িশা (রাঃ) থেকে বর্ণনা করেন: রাসূলুল্লাহ ﷺ সময় সমানভাবে ভাগ করতেন আর বলতেন: হে আল্লাহ, যা আমার এখতিয়ারে, তাতে এই আমার ভাগ। সুতরাং যা তোমার এখতিয়ারে, আমার নয়, তার জন্য আমাকে দোষ দিয়ো না। আবু দাউদ যোগ করেন: এর দ্বারা মন বোঝানো হয়েছে। মাআরিফুল কুরআন প্রশ্ন তোলে, নিজের ওপর নবী ﷺ-এর চেয়ে বেশি নিয়ন্ত্রণ আর কার থাকতে পারে? তবু মনের ঝোঁককে তিনিও নিজের এখতিয়ারের বাইরে গণ্য করেছেন।"
          },
          {
            "en": "The report carries a note. At-Tirmidhi records it too (1140), then remarks that Hammad ibn Zayd and others narrated it from Abu Qilabah as mursal, straight to the Prophet ﷺ without A'ishah, and that this is more correct than the connected version. He adds that some scholars explained the closing words as love and affection. Ibn Kathir quotes that remark right after calling the chain sound, and at-Tabari and al-Baghawi carry both forms. So the prayer stands here with the collector's own note, no firmer than he left it.",
            "bn": "বর্ণনাটির সঙ্গে একটা টীকা আছে। তিরমিযীও (১১৪০) এটি এনেছেন। তারপর তিনি জানান, হাম্মাদ ইবন যাইদ ও আরও কয়েকজন এটি আবু কিলাবা থেকে মুরসাল হিসেবে বর্ণনা করেছেন, অর্থাৎ আয়িশা (রাঃ)-এর নাম ছাড়া সরাসরি নবী ﷺ পর্যন্ত। তাঁর মতে এটাই সংযুক্ত রূপের চেয়ে বেশি সঠিক। তিনি আরও বলেন, কোনো কোনো আলেম শেষ কথাগুলোর ব্যাখ্যা করেছেন ভালোবাসা ও মমতা দিয়ে। ইবন কাসীর সনদকে সহীহ বলার পরপরই তিরমিযীর এই মন্তব্য উদ্ধৃত করেন। তাবারী ও বাগাভী দুটি রূপই এনেছেন। তাই দোয়াটি এখানে আছে সংকলকের নিজের টীকাসহ, তিনি যতটা মজবুত রেখে গেছেন, তার চেয়ে বেশি নয়।"
          },
          {
            "en": "At-Tirmidhi also records (1141), from Abu Hurayrah (RA), that the Messenger of Allah ﷺ said: When a man has two wives and he is not just between them, he will come on the Day of Judgment with one side drooping. He notes that only Hammam ibn Yahya narrated it from Qatadah as the Prophet's own words, while Hisham ad-Dastawa'i narrated it from Qatadah as something that used to be said, and he calls Hammam reliable and a careful memoriser.",
            "bn": "তিরমিযী (১১৪১) আবু হুরায়রা (রাঃ) থেকে আরও বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: কারও কাছে দুজন স্ত্রী থাকলে আর সে তাদের মাঝে ইনসাফ না করলে, কিয়ামতের দিন সে আসবে এমন অবস্থায় যে তার শরীরের একটি পাশ ঝুলে পড়েছে। তিরমিযী জানান, কাতাদা থেকে কেবল হাম্মাম ইবন ইয়াহইয়া এটিকে নবী ﷺ-এর নিজের কথা হিসেবে বর্ণনা করেছেন। আর হিশাম দাস্তাওয়াঈ কাতাদা থেকে এটি এনেছেন 'বলা হতো' হিসেবে। সঙ্গে তিনি বলেন, হাম্মাম নির্ভরযোগ্য, মজবুত স্মৃতির বর্ণনাকারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Repair, Then Forgiveness",
          "bn": "সংশোধন, তারপর ক্ষমা"
        },
        "p": [
          {
            "en": "The verse closes: wa in tuslihu wa tattaqu, and if you set things right and fear Allah, then Allah is ever Forgiving, Merciful. At-Tabari keeps this inside the household. If you set your conduct right, being just in the division of time, in maintenance and in decent companionship, and fear Allah in the leaning He forbade, He covers what came before of your favouring and wrongdoing by not punishing it. He is merciful in accepting your repentance, and in allowing the settlement in which a wife gives up her share of time so as not to be divorced.",
            "bn": "আয়াতের শেষ অংশ: ওয়া ইন তুসলিহূ ওয়া তাত্তাকূ, আর যদি তোমরা সংশোধন করো ও আল্লাহকে ভয় করো, তবে আল্লাহ অতি ক্ষমাশীল, পরম দয়ালু। তাবারী কথাটাকে সংসারের ভেতরেই রাখেন। সময় ভাগ, ভরণপোষণ আর সদাচরণে ইনসাফ করে তোমরা যদি নিজেদের আচরণ শুধরে নাও, আর যে ঝোঁক তিনি নিষেধ করেছেন তাতে আল্লাহকে ভয় করো, তবে আগে যে পক্ষপাত ও জুলুম হয়েছে, শাস্তি না দিয়ে তিনি তা ঢেকে দেন। তিনি দয়ালু, কারণ তোমাদের তওবা কবুল করেন, আর সেই আপোষের অনুমতি দিয়েছেন, যেখানে তালাক এড়াতে স্ত্রী নিজের সময়ের ভাগ ছেড়ে দেয়।"
          },
          {
            "en": "Ibn Kathir agrees: if you divide justly in what you control and fear Allah in every state, He forgives whatever leaning there was toward some wives over others. As-Sa'di reads the verb more widely. Setting right is first between a man and his wives, by making himself do what his soul does not want, for the sake of his wife's right; then between him and other people; then among people in their quarrels, an urging toward every road that leads to reconciliation. He reads the mercy as answering the husbands' own: Allah has mercy on you as you have been gentle with your wives.",
            "bn": "ইবন কাসীরও একমত: যা তোমাদের এখতিয়ারে, তাতে ইনসাফের সঙ্গে ভাগ করলে আর সব অবস্থায় আল্লাহকে ভয় করলে, কোনো কোনো স্ত্রীর দিকে অন্যদের চেয়ে যে ঝোঁক ছিল, আল্লাহ তা মাফ করে দেন। সা'দী ক্রিয়াটিকে আরও প্রশস্ত করে পড়েন। সংশোধন প্রথমে স্বামী ও স্ত্রীদের মাঝে: মন যা চায় না, স্ত্রীর হকের খাতিরে নিজেকে দিয়ে তা করানো। তারপর নিজের ও অন্য মানুষের মাঝে, তারপর বিবাদে জড়ানো মানুষদের মাঝে। এতে মীমাংসার দিকে যাওয়া প্রতিটি পথের প্রতি উৎসাহ আছে। রহমতকেও তিনি দেখেন তাদের আচরণের জবাব হিসেবে: স্ত্রীদের প্রতি তোমরা যেমন কোমল হয়েছ, আল্লাহও তোমাদের প্রতি তেমন রহম করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Each From His Plenty",
          "bn": "প্রত্যেকে তাঁর প্রাচুর্য থেকে"
        },
        "p": [
          {
            "en": "Wa in yatafarraqa yughni Allahu kullan min sa'atih: and if the two separate, Allah will enrich each of them from His plenty. At-Tabari sets the scene from the verses before: the wife declines a settlement and asks for her full share, the husband declines to treat her as he treats the wife he leans toward, and they part. Al-Qurtubi gives the inner instruction: if they do not reconcile but separate, let both think well of Allah, for He may bring the man a woman who delights his eye, and the woman someone who gives her ample.",
            "bn": "ওয়া ইন ইয়াতাফাররাকা ইউগনিল্লাহু কুল্লাম মিন সাআতিহ: আর যদি দুজন আলাদা হয়ে যায়, আল্লাহ নিজের প্রাচুর্য থেকে প্রত্যেককে অভাবমুক্ত করবেন। তাবারী আগের আয়াতগুলো থেকে প্রেক্ষাপটটা সাজান। স্ত্রী আপোষে রাজি হয় না, নিজের পুরো হক চায়। স্বামীও যে স্ত্রীর দিকে ঝুঁকে আছে, তার মতো করে এই স্ত্রীর সঙ্গে আচরণ করতে রাজি হয় না। তখন তারা আলাদা হয়ে যায়। কুরতুবী ভেতরের নির্দেশনাটা দেন: আপোষ না হয়ে বিচ্ছেদ হলে দুজনেই যেন আল্লাহর প্রতি সুধারণা রাখে। হতে পারে তিনি পুরুষকে এমন স্ত্রী মিলিয়ে দেবেন, যে তার চোখ জুড়াবে, আর নারীকে এমন কাউকে, যে তার জীবন প্রশস্ত করবে।"
          },
          {
            "en": "What the enrichment is, the commentators read with different breadth. Ibn Kathir names it as a spouse: a wife better for him than her, and a husband better for her than him. At-Tabari leaves another door open: for her, a husband better suited to her, or wider provision and protection; for him, ample provision and a better-suited wife, or chastity. As-Sa'di says Allah enriches her even though her share from her husband is cut off, since her provision rests with Him who guarantees the provision of all creation; and perhaps He will give her a better husband.",
            "bn": "এই অভাবমুক্তি কী, তা তাফসীরকারেরা পড়েন ভিন্ন ভিন্ন পরিসরে। ইবন কাসীর একে জীবনসঙ্গী হিসেবেই দেখেন: পুরুষের জন্য তার চেয়ে উত্তম স্ত্রী, আর নারীর জন্য তার চেয়ে উত্তম স্বামী। তাবারী আরেকটা দরজা খোলা রাখেন: নারীর জন্য তার বেশি উপযোগী স্বামী, অথবা আরও প্রশস্ত রিজিক ও নিরাপত্তা। পুরুষের জন্য প্রশস্ত রিজিক ও তার বেশি উপযোগী স্ত্রী, অথবা চারিত্রিক পবিত্রতা। সা'দী বলেন, স্বামীর কাছ থেকে প্রাপ্য বন্ধ হয়ে গেলেও আল্লাহ নারীকে নিজ অনুগ্রহে অভাবমুক্ত করেন। কারণ তার রিজিকের দায় তাঁর ওপর, যিনি গোটা সৃষ্টির রিজিকের জিম্মাদার। আর হয়তো তিনি তাকে আরও ভালো স্বামী দেবেন।"
          },
          {
            "en": "The word kullan, each, carries weight. The promise is made to both, not only to the one who was in the right, and as-Sa'di says plainly that when agreement proves impossible there is no harm in parting. The verse ends on two names, wasi'an hakima. Ibn Kathir explains: His favour is vast and His kindness great, and He is wise in all His acts, decrees and law. The same verb comes in 24:32, where the poor who are given in marriage are promised enrichment from His bounty. Here the promise goes to two who part.",
            "bn": "'কুল্লান', প্রত্যেককে, শব্দটির ভার আছে। প্রতিশ্রুতি দুজনের জন্যই, শুধু সেই একজনের জন্য নয়, যে ন্যায়ের পক্ষে ছিল। সা'দী সোজাসুজি বলেন, মিলমিশ যখন অসম্ভব হয়ে পড়ে, বিচ্ছেদে দোষ নেই। আয়াত শেষ হয় আল্লাহর দুই নামে: ওয়াসিআন হাকীমা। ইবন কাসীরের ব্যাখ্যায় তাঁর অনুগ্রহ বিশাল, দান বিপুল, আর তাঁর সব কাজ, ফয়সালা ও বিধানে তিনি প্রজ্ঞাময়। একই ক্রিয়া এসেছে ২৪:৩২-এ, যেখানে বলা হয়েছে, যাদের বিয়ে দেওয়া হয় তারা দরিদ্র হলে আল্লাহ নিজ অনুগ্রহে তাদের অভাবমুক্ত করবেন। এখানে সেই প্রতিশ্রুতি আলাদা হয়ে যাওয়া দুজনের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Fair Where Feelings Differ",
          "bn": "টান অসমান, ইনসাফ সমান"
        },
        "p": [
          {
            "en": "The ruling concerns one household, but its shape travels. As-Sa'di puts it in a sentence: Allah pardoned what is beyond ability, and His prohibition falls on what lies within it. A parent rarely feels the same toward every child, a teacher toward every student, a manager toward every colleague, and none is asked to. What is asked is that the leaning stay in the heart. Al-Bukhari records (2587), in a narration not attached to this verse, that when a father gave a gift to one of his sons and not the others, the Prophet ﷺ said: Be afraid of Allah, and be just to your children.",
            "bn": "বিধানটি এক সংসারের, কিন্তু এর গড়ন অন্যত্রও খাটে। সা'দী এক বাক্যে বলেন: যা সাধ্যের বাইরে, আল্লাহ তা মাফ করেছেন, আর তাঁর নিষেধ এসেছে সাধ্যের ভেতরের বিষয়ে। মা-বাবার টান প্রত্যেক সন্তানের প্রতি কমই সমান হয়। শিক্ষকের প্রত্যেক ছাত্রের প্রতি, দায়িত্বশীলের প্রত্যেক সহকর্মীর প্রতিও না। কারও কাছে সেটা চাওয়াও হয়নি। চাওয়া হয়েছে, টানটা যেন মনেই থাকে। বুখারী (২৫৮৭) এমন এক বর্ণনা এনেছেন, যা এই আয়াতের সঙ্গে যুক্ত নয়: এক পিতা তাঁর ছেলেদের একজনকে উপহার দিয়েছিলেন, বাকিদের দেননি। নবী ﷺ বললেন: আল্লাহকে ভয় করো, আর তোমাদের সন্তানদের মাঝে ইনসাফ করো।"
          },
          {
            "en": "The verse's other half travels too. To leave someone hanging is to keep them where they can neither settle nor move on: a proposal neither accepted nor declined, a relative neither reconciled with nor told what is wrong, a worker waiting on a decision that never comes. Where evenness of feeling is beyond us, the verse still asks for what is within reach: a clear answer, and the person's full due in the meantime. And where we have already leaned too far, its own ending is the way back: set right what can be set right, fear Allah, and find Him Forgiving and Merciful.",
            "bn": "আয়াতের অন্য অংশটাও অন্যত্র খাটে। কাউকে ঝুলিয়ে রাখা মানে তাকে এমন জায়গায় আটকে রাখা, যেখানে সে থিতুও হতে পারে না, সরেও যেতে পারে না। বিয়ের প্রস্তাব, যা গ্রহণও করা হয়নি, ফিরিয়েও দেওয়া হয়নি। আত্মীয়, যার সঙ্গে মিটমাটও হয়নি, আবার কী সমস্যা তা খোলাখুলি বলাও হয়নি। কর্মী, যে এমন সিদ্ধান্তের অপেক্ষায়, যা কখনো আসে না। মনের টান সমান রাখা যেখানে সাধ্যের বাইরে, সেখানেও আয়াত চায় হাতের নাগালের জিনিসটুকু: একটা স্পষ্ট উত্তর, আর এর মধ্যে মানুষটার পুরো হক। আর যেখানে আমরা ইতিমধ্যেই বেশি ঝুঁকে পড়েছি, ফেরার পথ আয়াতের শেষেই আছে: যা শোধরানো যায় তা শুধরে নিন, আল্লাহকে ভয় করুন, তাঁকে পাবেন ক্ষমাশীল ও দয়ালু।"
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
  "4:140": {
    "sections": [
      {
        "h": {
          "en": "A Reminder Inside a Warning",
          "bn": "সতর্কবাণীর ভেতরে এক স্মরণ"
        },
        "p": [
          {
            "en": "The verse sits inside a passage on hypocrisy. 4:137 speaks of those who believed, then disbelieved, then believed and disbelieved again and increased in disbelief. 4:138 tells the Prophet ﷺ to give the hypocrites tidings of a painful punishment, and 4:139 describes them as those who take the disbelievers as allies instead of the believers, then asks: do they seek honour with them? All honour belongs to Allah. After this verse, 4:141 shows them waiting to see which side wins, and 4:142 and 4:143 picture them at prayer.",
            "bn": "আয়াতটি বসানো আছে মুনাফিকি নিয়ে এক দীর্ঘ আলোচনার মাঝখানে। ৪:১৩৭ বলে তাদের কথা, যারা ঈমান আনল, তারপর কুফরী করল, আবার ঈমান আনল, আবার কুফরী করল, তারপর কুফরীতে আরও এগিয়ে গেল। ৪:১৩৮ আয়াতে নবী ﷺ-কে বলা হয়েছে মুনাফিকদের যন্ত্রণাদায়ক শাস্তির খবর শুনিয়ে দিতে। ৪:১৩৯ তাদের চেনায়: তারা মুমিনদের ছেড়ে কাফিরদের বন্ধু বানায়। তারপর প্রশ্ন: তারা কি ওদের কাছে সম্মান খোঁজে? সব সম্মান তো আল্লাহরই। এ আয়াতের পরে ৪:১৪১ দেখায়, কোন পক্ষ জেতে তারা সেই অপেক্ষায় থাকে, আর ৪:১৪২ ও ৪:১৪৩ আঁকে সালাতে দাঁড়ানো অবস্থায় তাদের ছবি।"
          },
          {
            "en": "At-Tabari reads this verse as part of that address: the hypocrites who took the disbelievers as allies did so after the Qur'an had come down to them, when they already knew Allah's prohibition on sitting with those who deny and mock His verses. Al-Qurtubi reads the address more widely, as spoken to everyone who professed faith, sincere or hypocrite, since professing faith binds a person to the Book's commands. Ma'arif al-Qur'an links the verses: the command not even to sit with such people had come long before, and these people had gone further, into friendship, imagining that honour and power lay with them.",
            "bn": "তাবারী এ আয়াতকে ওই সম্বোধনেরই অংশ হিসেবে পড়েন। তাঁর ব্যাখ্যায়, যে মুনাফিকরা কাফিরদের বন্ধু বানিয়েছিল, তারা তা করেছিল কুরআন নাযিল হওয়ার পরে, যখন তারা ভালো করেই জানত যে আয়াত অস্বীকার ও ঠাট্টা করে এমন লোকদের সঙ্গে বসতে আল্লাহ নিষেধ করেছেন। কুরতুবী সম্বোধনটাকে আরও প্রশস্ত করে পড়েন: খাঁটি মুমিন হোক বা মুনাফিক, ঈমানের দাবি যে-ই প্রকাশ করেছে, কথাটা সবার জন্য। কারণ ঈমানের দাবি করলেই কিতাবের হুকুম মানা তার উপর বর্তায়। মাআরিফুল কুরআন দুই আয়াতকে মিলিয়ে দেখায়। এমন লোকদের সঙ্গে বসতেও নিষেধ করা হয়েছিল অনেক আগে, অথচ এরা আরও এগিয়ে বন্ধুত্ব পাতিয়েছে, ভেবেছে সম্মান আর ক্ষমতা ওদের হাতেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Had Already Come Down",
          "bn": "যা আগেই নাযিল হয়েছিল"
        },
        "p": [
          {
            "en": "Wa qad nazzala 'alaykum fi-l-kitab: He has already sent down to you in the Book. Ibn Kathir, al-Baghawi and al-Qurtubi identify what was sent down as 6:68: when you see those who wade into Our verses, turn away from them until they enter some other talk. Ibn Kathir and al-Baghawi note that the al-An'am verse is Makkan, al-Baghawi that this one is Madinan, and Ma'arif al-Qur'an that the earlier command came before the Hijrah. The believers are pointed back to an instruction they already had, now with a consequence attached.",
            "bn": "ওয়া কাদ নাযযালা আলাইকুম ফিল কিতাব: তিনি তো কিতাবে তোমাদের প্রতি আগেই নাযিল করেছেন। কী নাযিল হয়েছিল? ইবন কাসীর, বাগাভী ও কুরতুবী একই আয়াত দেখান, ৬:৬৮: যখন দেখবে লোকেরা আমার আয়াত নিয়ে অনর্থক কথায় মেতেছে, তখন তাদের থেকে মুখ ফিরিয়ে নাও, যতক্ষণ না তারা অন্য কথায় যায়। ইবন কাসীর ও বাগাভী মনে করিয়ে দেন, সূরা আনআমের ওই আয়াত মক্কী। বাগাভী এও বলেন, এ আয়াত মাদানী। আর মাআরিফুল কুরআন জানায়, আগের নির্দেশটি এসেছিল হিজরতের আগে। মুমিনদের তাই ফিরিয়ে নেওয়া হচ্ছে এমন এক নির্দেশের দিকে, যা তাদের হাতে আগেই ছিল। শুধু এবার তার সঙ্গে জুড়ে দেওয়া হলো পরিণতির কথা।"
          },
          {
            "en": "At-Tabari records three readings of the verb: nuzzila, it has been sent down; nazzala, He has sent down; and nazala, it has come. None, he says, strays from what the words can bear, and he prefers the first. Then: you hear Allah's verses being denied and mocked. Al-Qurtubi notes that the hearing falls on the verses, while what is meant is hearing the denial and the mockery. As-Sa'di explains the pairing. What is owed to Allah's verses is faith and reverence; denial opposes faith, and mockery, making light of them, opposes reverence.",
            "bn": "তাবারী ক্রিয়াটির তিনটি পাঠ উল্লেখ করেন: নুযযিলা, নাযিল করা হয়েছে; নাযযালা, তিনি নাযিল করেছেন; আর নাযালা, এসেছে। তাঁর মতে কোনোটিই বাক্যের সম্ভাব্য অর্থ থেকে দূরে সরে না, তবে তিনি প্রথমটিকেই বেছে নেন। তারপর আসে: তোমরা শুনবে আল্লাহর আয়াত অস্বীকার করা হচ্ছে, তা নিয়ে ঠাট্টা চলছে। কুরতুবী লক্ষ করেন, বাক্যে শোনার কাজটা পড়েছে আয়াতের উপর, অথচ আসলে শোনা হচ্ছে অস্বীকার আর ঠাট্টা। শব্দ দুটি কেন জোড়ায় এল, সা'দী তা খুলে বলেন। আল্লাহর আয়াতের হক হলো ঈমান আর সম্মান। অস্বীকার ঈমানের উল্টো, আর ঠাট্টা, মানে আয়াতকে হালকা করে দেখা, সম্মানের উল্টো।"
          }
        ]
      },
      {
        "h": {
          "en": "Until the Talk Turns",
          "bn": "যতক্ষণ না কথা ঘোরে"
        },
        "p": [
          {
            "en": "The prohibition carries its own end: hatta yakhudu fi hadithin ghayrihi, until they enter into some other talk. At-Tabari glosses yakhudu simply as talking, and the Muyassar bars the sitting unless they take up talk other than disbelief and mockery. What follows once they do turn is a real disagreement. Al-Baghawi says that sitting with them is then no harm, though disliked, and that most hold this view. Al-Hasan, he reports, said it is not permitted even then, citing the close of 6:68: after the reminder, do not sit with the wrongdoing people.",
            "bn": "নিষেধটির সীমা আয়াতের ভেতরেই বাঁধা: হাত্তা ইয়াখূদূ ফী হাদীসিন গাইরিহী, যতক্ষণ না তারা অন্য কোনো কথায় মেতে ওঠে। তাবারী ইয়াখূদূ-র মানে করেন সোজা কথা বলা। মুয়াসসার বলে, কুফরী আর ঠাট্টা ছেড়ে অন্য আলাপ না ধরা পর্যন্ত তাদের সঙ্গে বসা চলবে না। কিন্তু আলাপ ঘুরে যাওয়ার পর কী হবে, সেখানে সত্যিকারের মতভেদ আছে। বাগাভী বলেন, তখন তাদের সঙ্গে বসায় দোষ নেই, যদিও তা অপছন্দনীয়, আর অধিকাংশের মত এটাই। তিনি হাসানের মতও আনেন: তখনও বসা জায়েয নয়। হাসানের দলিল ৬:৬৮-এর শেষাংশ: মনে পড়ার পর জালিম লোকদের সঙ্গে আর বসো না।"
          },
          {
            "en": "Al-Baghawi gives the majority's ground: the al-An'am verse is Makkan, this one Madinan, and the later takes precedence. Ma'arif al-Qur'an records the same difference, naming him al-Hasan al-Basri, and cites al-Mazhari's way of joining the views: sitting with them without need stays forbidden even after the talk turns, while a religious or a physical need makes it permissible. Ibn Kathir and al-Qurtubi also report early claims of abrogation, from Muqatil ibn Hayyan and al-Kalbi, running in opposite directions. Al-Qurtubi adds that the general body of commentators held the verse to be in force.",
            "bn": "অধিকাংশের দলিল বাগাভী নিজেই দেন: আনআমের আয়াত মক্কী, এ আয়াত মাদানী, আর পরে আসা হুকুমই অগ্রগণ্য। মাআরিফুল কুরআনও একই মতভেদ উল্লেখ করে, সেখানে তাঁর পুরো নাম আসে হাসান বসরী। দুই মত মেলাতে মাআরিফ তাফসীরে মাযহারীর কথা আনে: আলাপ ঘুরে গেলেও বিনা প্রয়োজনে তাদের সঙ্গে বসা নিষিদ্ধই থাকে, তবে দ্বীনি কোনো প্রয়োজন বা শারীরিক কোনো দরকারে জায়েয। ইবন কাসীর ও কুরতুবী রহিত হওয়া নিয়ে প্রথম যুগের দাবিও উল্লেখ করেন, মুকাতিল ইবন হাইয়ান ও কালবীর কাছ থেকে, আর দাবি দুটির দিক একেবারে উল্টো। কুরতুবী যোগ করেন, তাফসীরকারদের ব্যাপক অংশের মতে আয়াতটি বহাল আছে, রহিত হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Like Them, in What Way?",
          "bn": "তাদের মতো, কোন অর্থে"
        },
        "p": [
          {
            "en": "Innakum idhan mithluhum: then you would be like them. Like them in what? At-Tabari answers: if you do not rise and leave in that state, you are like them in their act. They disobeyed Allah by mocking His verses; you disobeyed Him by sitting and listening. Ibn Kathir says that whoever commits the prohibition after it has reached him, content to sit where the verses are denied and belittled and letting it pass, has shared in what they are doing: like them, he says, in the sin.",
            "bn": "ইন্নাকুম ইযাম মিসলুহুম: তখন তোমরাও তাদের মতো। কিন্তু কোন দিক থেকে মতো? তাবারীর উত্তর: সে অবস্থায় উঠে না গেলে কাজে তোমরা তাদের মতো। তারা আল্লাহর আয়াত নিয়ে ঠাট্টা করে তাঁর নাফরমানি করেছে, আর তোমরা বসে বসে শুনে তাঁর নাফরমানি করেছ। ইবন কাসীর বলেন, নিষেধ পৌঁছানোর পরও যে তা লঙ্ঘন করে, যেখানে আয়াত অস্বীকার ও তুচ্ছ করা হচ্ছে সেখানে বসে থাকতে রাজি থাকে আর ব্যাপারটা চলতে দেয়, সে তাদের কাজে শরিক হয়ে গেল। তাঁর ভাষায়, তাদের মতো গুনাহে।"
          },
          {
            "en": "The Muyassar and as-Sa'di give the reason in the same words: you were content with their disbelief and mockery, and whoever is content with a sin is like the one who commits it. Al-Qurtubi limits the likeness: it is not in every attribute, but a resemblance drawn from outward association, as the line of verse he quotes has it, every companion follows the one beside him. Ma'arif al-Qur'an gives two senses. If a person's heart likes their disbelief, liking disbelief is disbelief; otherwise he is an accomplice in their sin.",
            "bn": "মুয়াসসার আর সা'দী কারণটা বলেন হুবহু একই ভাষায়: তোমরা তাদের কুফরী আর ঠাট্টায় রাজি থেকেছ, আর গুনাহে যে রাজি, সে গুনাহকারীর মতোই। কুরতুবী এই মিলের একটা সীমা টানেন। মিলটা সব গুণে নয়, বাইরের সাহচর্য দেখে যে সাদৃশ্য ধরা হয়, এটা সেই সাদৃশ্য। সঙ্গে তিনি একটি কবিতার চরণ আনেন: প্রত্যেক সঙ্গী তার পাশের জনকেই অনুসরণ করে। মাআরিফুল কুরআন দুটি অর্থ আলাদা করে দেখায়। কারও মন যদি তাদের কুফরী পছন্দ করে, তবে কুফরী পছন্দ করাই কুফরী। তা না হলে সে তাদের গুনাহের সহযোগী।"
          },
          {
            "en": "Two of them state the strong end plainly. Al-Qurtubi: whoever does not keep away has accepted their act, and contentment with disbelief is disbelief. Al-Baghawi: if you sat while they waded and mocked, and were pleased with it, you are disbelievers like them. At-Tabari and al-Qurtubi report that Umar ibn Abd al-Aziz, as ruler, had men caught drinking punished, and when told one of them was fasting, recited this verse; al-Qurtubi's gloss is that contentment with sin is sin. That was a ruler's court, and it licenses no private person to punish anyone.",
            "bn": "দুজন তাফসীরকার কঠিন প্রান্তটা সোজাসুজি বলেন। কুরতুবী: যে তাদের এড়িয়ে চলে না, সে তাদের কাজে রাজি হয়ে গেছে, আর কুফরীতে রাজি থাকাও কুফরী। বাগাভী: তারা যখন মেতে উঠে ঠাট্টা করছিল, তখন যদি বসে থাকো আর তাতে খুশি হও, তবে তোমরাও তাদের মতো কাফির। তাবারী ও কুরতুবী বর্ণনা করেন, শাসক উমর ইবন আবদুল আযীয মদ পানের সময় ধরা পড়া একদল লোককে শাস্তি দেন। তাঁকে বলা হলো, এদের একজন তো রোজাদার। তিনি তখন এ আয়াত তিলাওয়াত করেন। কুরতুবীর ব্যাখ্যা: গুনাহে রাজি থাকাও গুনাহ। সেটা ছিল এক শাসকের বিচার। কোনো সাধারণ মানুষকে কাউকে শাস্তি দেওয়ার অনুমতি তা দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to the Listener",
          "bn": "শ্রোতাকেই বলা কথা"
        },
        "p": [
          {
            "en": "In each reading the hinge is rida, contentment, or staying on when one could object or leave. Contentment lives in the heart, and only Allah sees hearts. The verse says innakum, you: it speaks to the listener about the listener. It gives no reader the task of watching who sits where and pronouncing on anyone's faith. What a reader can examine is his own seat: whether he stayed, whether he smiled, whether he could have spoken or left. Aimed at someone else, the verse is read against its own direction.",
            "bn": "প্রতিটি ব্যাখ্যার কেন্দ্রে একটাই জিনিস: রিদা, মানে রাজি থাকা, কিংবা আপত্তি করার বা উঠে যাওয়ার সুযোগ থাকতেও বসে থাকা। রাজি থাকা মনের ব্যাপার, আর মন দেখেন কেবল আল্লাহ। আয়াত বলছে ইন্নাকুম, তোমরা। কথাটা শ্রোতাকে বলা, শ্রোতারই সম্পর্কে। কে কোথায় বসল তা পাহারা দিয়ে কারও ঈমান নিয়ে রায় দেওয়ার দায়িত্ব এ আয়াত কোনো পাঠককে দেয় না। পাঠক যাচাই করতে পারেন কেবল নিজের আসন: তিনি বসে ছিলেন কি না, হেসেছিলেন কি না, কিছু বলতে বা উঠে যেতে পারতেন কি না। অন্যের দিকে তাক করলে আয়াতটাকে তার নিজের দিকের উল্টো করে পড়া হয়।"
          },
          {
            "en": "The same care holds for the hypocrites around it. 4:138 and 4:139 describe them, and 4:141 shows them waiting on events, ready to claim credit with whichever side wins. These verses describe what the text describes and license nothing against any living person or community; this article judges no one's heart. The verse closes: Allah will gather the hypocrites and the disbelievers in Hell all together. At-Tabari reads that gathering as the match of one in this world, where they agreed together in enmity to the believers. The verse forbids one sitting and ends on another.",
            "bn": "এ আয়াতের আশপাশের মুনাফিকদের বেলায়ও একই সাবধানতা দরকার। ৪:১৩৮ ও ৪:১৩৯ তাদের বর্ণনা দেয়, আর ৪:১৪১ দেখায় তারা ঘটনার দিকে চেয়ে বসে থাকে, যে পক্ষ জেতে তার কাছেই কৃতিত্ব দাবি করবে বলে। এ আয়াতগুলো কেবল তা-ই বর্ণনা করে যা কুরআনের পাঠে আছে। আজকের কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো অনুমতি দেয় না, আর এ লেখা কারও মনের বিচার করে না। আয়াতের শেষ কথা: আল্লাহ মুনাফিক ও কাফিরদের সবাইকে জাহান্নামে একত্র করবেন। তাবারী এই সমাবেশকে দুনিয়ার এক সমাবেশের জবাব হিসেবে পড়েন, যেখানে তারা মুমিনদের শত্রুতায় একজোট হয়েছিল। আয়াত এক আসর থেকে উঠে যেতে বলে, আর শেষ হয় আরেক সমাবেশে।"
          }
        ]
      },
      {
        "h": {
          "en": "Object, or Rise and Go",
          "bn": "আপত্তি, নয়তো উঠে যাওয়া"
        },
        "p": [
          {
            "en": "What the listener must do is set out plainly. Al-Qurtubi says whoever sits in a gathering of sin without objecting shares its burden equally; he should object, and if he cannot, rise and leave so as not to be among the people of this verse. As-Sa'di condenses it: whoever is present where Allah is disobeyed must object if able, or rise if not. Ma'arif al-Qur'an cites al-Jassas: whoever has the strength stops the wrong, whoever lacks it shows displeasure, and the least of that is to get up and go.",
            "bn": "শ্রোতাকে আসলে কী করতে হবে, তাফসীরকারেরা তা খোলাখুলি বলেন। কুরতুবীর কথা: গুনাহের আসরে আপত্তি না করে যে বসে থাকে, সে গুনাহের বোঝায় তাদের সমান ভাগীদার। তার উচিত আপত্তি জানানো, আর তা না পারলে উঠে চলে যাওয়া, যাতে সে এ আয়াতের লোকদের দলে না পড়ে। সা'দী এক বাক্যে বলেন: যেখানে আল্লাহর নাফরমানি হচ্ছে সেখানে কেউ উপস্থিত থাকলে, সামর্থ্য থাকলে আপত্তি করা, না থাকলে উঠে যাওয়া তার জন্য অপরিহার্য। মাআরিফুল কুরআন জাসসাসের কথা আনে: শক্তি থাকলে অন্যায় থামাবে, না থাকলে অসন্তোষ দেখাবে, আর তার সর্বনিম্ন স্তর হলো উঠে চলে যাওয়া।"
          },
          {
            "en": "Ma'arif al-Qur'an adds a condition: leaving must not mean abandoning a duty. If something wrong begins in the mosque, one does not give up the congregational prayer; displeasure in the heart is enough. It quotes al-Hasan al-Basri: if we gave up what we must do because of other people's sins, we would open the way for sinners to destroy the Sunnah and the Shari'ah. Being among such people for a worldly need, it says, is allowed, and among them to convey Islam's teaching, worship.",
            "bn": "মাআরিফুল কুরআন এখানে একটি শর্ত জুড়ে দেয়: উঠে যেতে গিয়ে যেন কোনো জরুরি দায়িত্ব ছুটে না যায়। মসজিদে অন্যায় কিছু শুরু হলে সে কারণে জামাআতে সালাত ছাড়া যাবে না, তখন মনের অসন্তোষই যথেষ্ট। মাআরিফ হাসান বসরীর একটি কথাও আনে: অন্যের গুনাহের কারণে নিজের করণীয় যদি ছেড়ে দিতে থাকি, তবে সুন্নাহ আর শরীয়ত ধ্বংসের পথ গুনাহগারদের জন্য নিজেরাই খুলে দেব। মাআরিফের ভাষায়, দুনিয়াবি প্রয়োজনে এমন লোকদের মাঝে থাকা জায়েয, আর ইসলামের শিক্ষা পৌঁছে দিতে তাদের মাঝে থাকা ইবাদত।"
          },
          {
            "en": "No commentator read here gives a hadith as the verse's occasion. Ibn Kathir cites one as a parallel, recorded by at-Tirmidhi (2801) from Jabir (RA), that the Prophet ﷺ said: whoever believes in Allah and the Last Day, let him not enter the bath-house without a waist-wrapper; whoever believes in Allah and the Last Day, let him not bring his wife into the bath-house; and whoever believes in Allah and the Last Day, let him not sit at a table around which wine is passed. At-Tirmidhi calls it hasan gharib, noting that critics weakened a narrator in its chain, Layth ibn Abi Sulaym.",
            "bn": "এখানে পড়া কোনো তাফসীরকার এ আয়াত নাযিলের উপলক্ষ হিসেবে কোনো হাদীস আনেননি। ইবন কাসীর সমান্তরাল দৃষ্টান্ত হিসেবে একটি হাদীস আনেন। তিরমিযী (২৮০১) সেটি জাবির (রাঃ) থেকে বর্ণনা করেছেন, নবী ﷺ বলেছেন: যে আল্লাহ ও শেষ দিবসে ঈমান রাখে, সে যেন ইযার ছাড়া হাম্মামে না ঢোকে। যে আল্লাহ ও শেষ দিবসে ঈমান রাখে, সে যেন তার স্ত্রীকে হাম্মামে না পাঠায়। আর যে আল্লাহ ও শেষ দিবসে ঈমান রাখে, সে যেন এমন দস্তরখানে না বসে, যেখানে মদের পাত্র ঘোরে। তিরমিযী একে হাসান গরীব বলেছেন। সেখানেই তিনি জানান, সনদের এক বর্ণনাকারী লাইস ইবন আবী সুলাইমকে সমালোচকেরা দুর্বল বলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wider Than One Gathering",
          "bn": "এক আসরের চেয়ে বড় পরিসর"
        },
        "p": [
          {
            "en": "Several commentators carry the verse past mockery of the Qur'an itself. At-Tabari says it forbids sitting with people of falsehood of every kind, innovators and the openly sinful, while they plunge into their falsehood, and that earlier authorities read it so. Al-Qurtubi argues that if avoiding sinners is established, avoiding people of innovation and whims is more fitting. Al-Baghawi reports from al-Dahhak, from Ibn Abbas (RA), that every innovator in religion until the Day of Resurrection falls under it; al-Qurtubi gives the words as al-Dahhak's own, through Juwaybir.",
            "bn": "কয়েকজন তাফসীরকার আয়াতটিকে কুরআন নিয়ে ঠাট্টার গণ্ডি ছাড়িয়ে নিয়ে যান। তাবারী বলেন, সব ধরনের বাতিলপন্থী, বিদআতি হোক বা প্রকাশ্য গুনাহগার, যখন নিজেদের বাতিলে মেতে থাকে, তখন তাদের সঙ্গে বসা এ আয়াতে নিষিদ্ধ। তিনি জানান, আগের যুগের ইমামরাও এভাবেই বুঝেছেন। কুরতুবীর যুক্তি: গুনাহগারদের এড়িয়ে চলা যদি প্রমাণিত হয়, তবে বিদআত ও প্রবৃত্তির অনুসারীদের এড়ানো আরও বেশি সংগত। বাগাভী দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, কিয়ামত পর্যন্ত দ্বীনে নতুন কিছু উদ্ভাবনকারী প্রত্যেকেই এ আয়াতের আওতায়। কুরতুবী একই কথা আনেন জুওয়াইবিরের সূত্রে, দাহহাকের নিজের উক্তি হিসেবে।"
          },
          {
            "en": "As-Sa'di includes disputing to cancel Allah's verses and arguing for what is false, since the verses point only to truth, and gatherings where His commands are made light of. Ma'arif al-Qur'an applies it to teaching that bends the Qur'an against the explanation of the Prophet ﷺ and his Companions, and quotes Abu Hayyan: guard your hearing from foul speech as you guard your tongue from saying it. Each of these names a deed, not a group. The trigger is what is being said in the room, and this article points at no one.",
            "bn": "সা'দী এর ভেতরে ধরেন আল্লাহর আয়াত বাতিল করার উদ্দেশ্যে তর্ক আর বাতিলের পক্ষে যুক্তি দাঁড় করানো। কারণ আয়াত কেবল সত্যের দিকেই পথ দেখায়, তাই এমন যুক্তি আয়াতকে হালকা করে দেখে। গুনাহের সেই আসরগুলোও তিনি ধরেন, যেখানে আল্লাহর আদেশ-নিষেধ নিয়ে তাচ্ছিল্য চলে। মাআরিফুল কুরআন একে খাটায় এমন দারসে, যেখানে কুরআনের অর্থ নবী ﷺ ও সাহাবীদের ব্যাখ্যার বিপরীতে বাঁকানো হয়। আবু হাইয়ানের একটি চরণও সেখানে আছে: জিহ্বাকে যেমন মন্দ কথা বলা থেকে বাঁচাও, কানকেও তেমনি মন্দ কথা শোনা থেকে বাঁচাও। এগুলোর প্রতিটি একটা কাজের নাম, কোনো দলের নাম নয়। মাপকাঠি হলো আসরে কী বলা হচ্ছে, আর এ লেখা কারও দিকে আঙুল তোলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Joke Is on Faith",
          "bn": "ঠাট্টার নিশানা যখন দ্বীন"
        },
        "p": [
          {
            "en": "Among the earlier authorities at-Tabari cites is a saying of Abu Wa'il: a man speaks a false word in a gathering to make those sitting with him laugh, and Allah becomes angry with them. Told of it, Ibrahim an-Nakha'i said Abu Wa'il was right, asked whether that was not in the Book of Allah, and recited this verse. It is their saying, not a hadith of the Prophet ﷺ, but it moves the verse from formal debate to the ordinary joke, and to the laughter that keeps it going.",
            "bn": "আগের যুগের যে ইমামদের কথা তাবারী আনেন, তাঁদের মধ্যে আবু ওয়াইলের একটি উক্তি আছে: মানুষ মজলিসে বসে সঙ্গীদের হাসাতে একটা মিথ্যা কথা বলে, আর তাতে আল্লাহ তাদের উপর অসন্তুষ্ট হন। কথাটা শুনে ইবরাহীম নাখঈ বলেন, আবু ওয়াইল ঠিকই বলেছেন। তারপর জিজ্ঞেস করেন, এ কথা কি আল্লাহর কিতাবে নেই? এবং এ আয়াত পড়ে শোনান। এটা তাঁদের উক্তি, নবী ﷺ-এর হাদীস নয়। তবু এ উক্তি আয়াতটিকে তর্কের মঞ্চ থেকে নামিয়ে আনে রোজকার ঠাট্টায়, আর সেই হাসিতে, যা ঠাট্টাকে চালু রাখে।"
          },
          {
            "en": "Today the gathering is often a group chat: family, classmates, colleagues. Someone posts a clip that makes a verse the punchline, and the reactions begin. A laughing emoji is a small way of staying seated and content. The verse's own limit offers a gentle exit, since the sitting is barred only until the talk turns, and a believer can be the one who turns it: a new subject, a question, or a brief, polite word that this is not something to joke about. Muting or leaving a group without insulting anyone is also a way of standing up.",
            "bn": "আজ সেই মজলিস অনেক সময় একটা গ্রুপ চ্যাট: পরিবারের, সহপাঠীদের, সহকর্মীদের। কেউ একটা ক্লিপ দিল, যেখানে কোনো আয়াতকে বানানো হয়েছে হাসির খোরাক, আর শুরু হলো রিঅ্যাকশন। হাসির ইমোজি দেওয়াও ছোট্ট করে রাজি হয়ে বসে থাকা। আয়াতের সীমাটাই এখানে ভদ্রভাবে বেরোনোর পথ দেখায়, কারণ বসা নিষেধ কেবল ততক্ষণ, যতক্ষণ না কথা ঘোরে। আর কথাটা মুমিন নিজেই ঘোরাতে পারেন: নতুন প্রসঙ্গ তুলে, কোনো প্রশ্ন করে, কিংবা নরম ভাষায় ছোট করে বলে যে এটা ঠাট্টার বিষয় নয়। কাউকে অপমান না করে গ্রুপ মিউট করা বা ছেড়ে দেওয়াও উঠে যাওয়ারই একটা রূপ।"
          },
          {
            "en": "Staying is not always a failure. The commentators name objecting as the first duty, and Ma'arif al-Qur'an calls staying to convey Islam's teaching worship. The difference lies in what a person is doing there. A person who stays to answer with knowledge and calm is doing what the commentators ask of him. A person who stays because the show is entertaining, or because leaving would cost him standing, is the person the verse addresses. 4:139 has already asked the question underneath: do they seek honour with them? All honour belongs to Allah.",
            "bn": "থেকে যাওয়া সবসময় ব্যর্থতা নয়। তাফসীরকারেরা আপত্তি জানানোকেই প্রথম দায়িত্ব বলেছেন, আর মাআরিফুল কুরআন ইসলামের শিক্ষা পৌঁছাতে থেকে যাওয়াকে ইবাদত বলে। পার্থক্য হলো সেখানে আপনি কী করছেন। জ্ঞান আর ধীরতা নিয়ে জবাব দিতে যিনি থাকেন, তিনি তাফসীরকারদের চাওয়া কাজটাই করছেন। কিন্তু তামাশাটা উপভোগ্য বলে, কিংবা উঠে গেলে মানসম্মান কমবে বলে যিনি বসে থাকেন, আয়াতের সম্বোধন তাঁরই দিকে। ভেতরের প্রশ্নটা ৪:১৩৯ আগেই করে রেখেছে: তারা কি ওদের কাছে সম্মান খোঁজে? সব সম্মান তো আল্লাহরই।"
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
  "4:152-153": {
    "sections": [
      {
        "h": {
          "en": "Three Answers to the Messengers",
          "bn": "রসূলদের প্রতি তিন রকম সাড়া"
        },
        "p": [
          {
            "en": "These two verses sit inside a run of contrasts. In 4:150 and 4:151 the Quran describes those who disbelieve in Allah and His messengers, who wish to separate Allah from His messengers and say, we believe in some and disbelieve in others, seeking a road in between; it calls them the disbelievers, truly. Then 4:152 gives the opposite answer: those who believe in Allah and His messengers and make no distinction between any of them. And 4:153 reports a third response, a demand put to the Prophet ﷺ: bring a book down to us from the sky.",
            "bn": "এ দুটি আয়াত বসানো আছে পরপর কয়েকটি বিপরীত ছবির মাঝখানে। ৪:১৫০ ও ৪:১৫১ আয়াতে কুরআন বলছে তাদের কথা, যারা আল্লাহ ও তাঁর রসূলদের অস্বীকার করে, আল্লাহ আর তাঁর রসূলদের মধ্যে ভাগাভাগি করতে চায়, আর বলে, কতককে মানি, কতককে মানি না। তারা মাঝামাঝি একটা রাস্তা খোঁজে, আর কুরআন তাদের বলেছে প্রকৃত কাফির। তারপর ৪:১৫২ দেয় উল্টো জবাব: যারা আল্লাহ ও তাঁর রসূলদের উপর ঈমান আনে আর তাঁদের কারও মধ্যে পার্থক্য করে না। আর ৪:১৫৩ জানায় তৃতীয় এক সাড়ার কথা, নবী ﷺ-এর সামনে রাখা এক দাবি: আসমান থেকে আমাদের জন্য একটা কিতাব নামিয়ে আনো।"
          },
          {
            "en": "One thing needs saying before anything else. These verses describe what some people said and did in two particular times, the days of Musa (AS) and the days of the Prophet ﷺ, as the Quran and its commentators report it. They license nothing against any Jew, any Christian or anyone living today. The Quran itself, a few verses on in 4:162, sets apart those firm in knowledge among them who believed. This article reads the passage as a mirror held up to its own reader, not as a charge against anyone else.",
            "bn": "সবকিছুর আগে একটা কথা পরিষ্কার করে বলা দরকার। এ আয়াতগুলো দুটি নির্দিষ্ট সময়ের কিছু মানুষের কথা ও কাজের বর্ণনা দেয়: মূসা (আঃ)-এর যুগের, আর নবী ﷺ-এর সময়ের। কুরআন আর তার তাফসীরকারেরা যেভাবে জানিয়েছেন, সেভাবেই। কোনো ইহুদি, কোনো খ্রিস্টান বা আজ বেঁচে থাকা কোনো মানুষের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। কুরআন নিজেই কয়েক আয়াত পরে, ৪:১৬২ আয়াতে, তাদের মধ্যে জ্ঞানে পরিপক্ক যারা ঈমান এনেছিল, তাদের আলাদা করে উল্লেখ করেছে। এ লেখা আয়াতগুলোকে পড়ছে পাঠকের নিজের সামনে ধরা আয়না হিসেবে, অন্য কারও বিরুদ্ধে অভিযোগনামা হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "All of Them, None Left Out",
          "bn": "সবাইকে মানা, কাউকে বাদ না দিয়ে"
        },
        "p": [
          {
            "en": "At-Tabari explains the believers of 4:152 as those who affirmed the oneness of Allah, acknowledged the prophethood of all His messengers, and believed them in the laws of His religion that they brought. Lam yufarriqu, they made no distinction, he glosses as: they did not deny some and believe others, but acknowledged that all they brought from their Lord is true. As-Sa'di widens it. Belief in Allah and His messengers includes everything Allah told about Himself and everything the messengers brought, reports and rulings alike. This, he says, is real faith, certainty built on proof.",
            "bn": "৪:১৫২ আয়াতের মুমিনদের পরিচয় তাবারী দেন এভাবে: তারা আল্লাহর একত্বকে সত্য বলে মেনেছে, তাঁর সব রসূলের নবুওয়াত স্বীকার করেছে, আর দ্বীনের যে বিধান রসূলেরা এনেছেন তাতে তাঁদের সত্যবাদী বলে মেনেছে। লাম ইউফাররিকূ, তারা পার্থক্য করেনি, এর মানে তাঁর ভাষায়: তারা কিছু রসূলকে মিথ্যাবাদী আর কিছুকে সত্যবাদী বলেনি, বরং মেনে নিয়েছে যে রবের কাছ থেকে তাঁরা যা এনেছেন সবই সত্য। সা'দী পরিধিটা আরও বড় করেন। আল্লাহ ও রসূলদের উপর ঈমানের ভেতরে পড়ে আল্লাহ নিজের সম্পর্কে যা জানিয়েছেন তার সবটা, আর রসূলেরা যা এনেছেন তার সবটা, খবরও, বিধানও। তাঁর কথায়, এটাই আসল ঈমান, প্রমাণের উপর দাঁড়ানো ইয়াকীন।"
          },
          {
            "en": "Who are they? Ibn Kathir says the verse means the community of Muhammad ﷺ, who believe in every book Allah sent down and every prophet He sent, and he sets beside it 2:285, where the believers say: we make no distinction between any of His messengers. Al-Qurtubi names the Prophet ﷺ and his community; al-Baghawi says they are the believers who say those very words. The Muyassar adds a clause to its description of them: and they acted on Allah's law. In its gloss, believing in all the messengers is something lived as well as held.",
            "bn": "এরা কারা? ইবন কাসীর বলেন, আয়াতের উদ্দেশ্য মুহাম্মাদ ﷺ-এর উম্মত, যারা আল্লাহর নাজিল করা প্রতিটি কিতাব আর তাঁর পাঠানো প্রতিটি নবীর উপর ঈমান রাখে। পাশে তিনি রাখেন ২:২৮৫ আয়াত, যেখানে মুমিনেরা বলে: আমরা তাঁর রসূলদের কারও মধ্যে পার্থক্য করি না। কুরতুবী বলেন, এরা নবী ﷺ ও তাঁর উম্মত। বাগাভী বলেন, এরা সেই মুমিন, যারা ঠিক এ কথাটাই বলে। মুয়াসসার তাদের পরিচয়ে একটা বাক্যাংশ জুড়ে দেয়: আর তারা আল্লাহর শরিয়ত মেনে আমল করেছে। তার ব্যাখ্যায় সব রসূলের উপর ঈমান শুধু মনে ধরে রাখার জিনিস নয়, জীবনে পালন করারও জিনিস।"
          }
        ]
      },
      {
        "h": {
          "en": "Rewards Named as Their Own",
          "bn": "যার যার নিজের প্রতিদান"
        },
        "p": [
          {
            "en": "Ula'ika sawfa yu'tihim ujurahum: those, He will give them their rewards. At-Tabari reads ujur as their recompense for believing the messengers on the oneness of Allah and the laws of His religion. As-Sa'di finds more in the plural joined to them: the reward of their faith and of what grew from it, righteous deeds, good speech and fine character, each according to his state; and perhaps, he says, this is the secret of attaching the rewards to them. Al-Baghawi notes that Hafs, from Asim, reads He will give them, and the other readers We will give them.",
            "bn": "উলাইকা সাওফা ইউ'তীহিম উজূরাহুম: তাদেরকে তিনি তাদের প্রতিদান দেবেন। তাবারীর ব্যাখ্যায় উজূর হলো তাওহীদ আর দ্বীনের বিধানের ব্যাপারে রসূলদের সত্য বলে মানার বিনিময়। সা'দী বহুবচন শব্দটি আর তার সঙ্গে জোড়া 'তাদের' কথাটির মধ্যে আরও কিছু দেখেন। এ প্রতিদান তাদের ঈমানের, আর ঈমান থেকে যা জন্মেছে তারও: নেক আমল, সুন্দর কথা, সুন্দর চরিত্র, যার যার অবস্থা অনুযায়ী। তিনি বলেন, প্রতিদানকে তাদের নামে জুড়ে দেওয়ার রহস্য সম্ভবত এটাই। বাগাভী জানান, আসিমের সূত্রে হাফস পড়েন 'তিনি দেবেন', আর বাকি কারিরা পড়েন 'আমি দেব'।"
          },
          {
            "en": "Then the verse closes: wa kana Allahu ghafuran rahima, and Allah is ever Forgiving, Merciful. Why speak of forgiveness to people just praised? Ibn Kathir answers plainly: for their sins, that is, if any of them has sins. At-Tabari says He forgives whoever believes this way the wrongs that went before, covering them with His pardon and leaving the punishment, for He has never ceased to forgive those who turn back to Him. He is Merciful in guiding them to the path of truth and enabling them to what frees them from the Fire. As-Sa'di: He forgives bad deeds and accepts good ones.",
            "bn": "তারপর আয়াত শেষ হয়: ওয়া কানাল্লাহু গাফূরার রাহীমা, আল্লাহ বড়ই ক্ষমাশীল, পরম দয়ালু। যাদের এইমাত্র প্রশংসা করা হলো, তাদের সামনে ক্ষমার কথা কেন? ইবন কাসীর সোজা উত্তর দেন: তাদের গুনাহের জন্য, মানে তাদের কারও যদি গুনাহ থাকে। তাবারী বলেন, যে এভাবে ঈমান আনে, তার আগের গুনাহ তিনি মাফ করে দেন, নিজের ক্ষমা দিয়ে ঢেকে রাখেন, শাস্তি ছেড়ে দেন। কারণ তাঁর দিকে যারা ফেরে, তাদের গুনাহ মাফ করা তাঁর চিরদিনের রীতি। আর তিনি দয়ালু, কারণ নিজ অনুগ্রহে তাদের সত্যের পথ দেখান, আর যে কাজে জাহান্নাম থেকে মুক্তি, তার তাওফীক দেন। সা'দীর কথায়: তিনি মন্দ মাফ করেন, ভালো কবুল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Book They Wanted",
          "bn": "কেমন কিতাব তারা চেয়েছিল"
        },
        "p": [
          {
            "en": "Who asked, and for what? At-Tabari says the askers were the people of the Torah, and that interpreters differed over the book. In as-Suddi's report they said: if you truly are Allah's messenger, bring us a book written from the sky, as Musa (AS) brought. Muhammad ibn Ka'b al-Qurazi says some Jews came saying Musa brought the Tablets from Allah, so bring us tablets that we may believe you, and that Allah then revealed this passage as far as 4:156. Qatada says a book specially for them. Ibn Jurayj says Jews and Christians wanted letters from Allah to particular men among them, saying he is Allah's messenger.",
            "bn": "কারা চেয়েছিল, আর কী চেয়েছিল? তাবারী বলেন, চেয়েছিল তাওরাতের অনুসারীরা, আর কিতাবটা কেমন ছিল তা নিয়ে ব্যাখ্যাকারদের মতভেদ আছে। সুদ্দীর বর্ণনায় তারা বলেছিল: তুমি যদি সত্যিই আল্লাহর রসূল হও, তবে মূসা (আঃ) যেমন এনেছিলেন, তেমনি আসমান থেকে লেখা একটা কিতাব আমাদের এনে দাও। মুহাম্মাদ ইবন কা'ব কুরাযী বলেন, কিছু ইহুদি এসে বলল, মূসা আল্লাহর কাছ থেকে ফলকগুলো এনেছিলেন, তুমিও ফলক এনে দাও, তবে তোমাকে বিশ্বাস করব। তাঁর বর্ণনায় এরপর আল্লাহ এ আয়াত থেকে ৪:১৫৬ পর্যন্ত নাজিল করেন। কাতাদা বলেন, বিশেষ করে তাদের জন্য একটা কিতাব। ইবন জুরাইজ বলেন, ইহুদি ও খ্রিস্টানরা চেয়েছিল তাদের নির্দিষ্ট কয়েকজনের নামে আল্লাহর চিঠি, যাতে লেখা থাকবে তিনি আল্লাহর রসূল।"
          },
          {
            "en": "At-Tabari holds both forms possible, then prefers the one nearest the plain wording: one book to their whole group, since Allah said kitaban, a book, not kutuban, books. Either way, he says, it was to be a sign no creature could match, testifying for the Prophet ﷺ. Al-Baghawi names two men, Ka'b ibn al-Ashraf and Finhas ibn 'Azura, who said: if you are a prophet, bring us a book all at once from the sky, as Musa (AS) brought it. Al-Qurtubi has them ask him to ascend while they watched. As-Sa'di reads it as a demand that the Quran come down all at once.",
            "bn": "তাবারী দুটি রূপকেই সম্ভব বলে রাখেন, তারপর আয়াতের বাহ্যিক শব্দের সবচেয়ে কাছের অর্থটাকে প্রাধান্য দেন: তাদের গোটা দলের প্রতি একটিই কিতাব, কারণ আল্লাহ বলেছেন কিতাবান, একটি কিতাব, কুতুবান বা অনেক কিতাব নয়। যে রূপই হোক, তাঁর মতে চাওয়াটা ছিল এমন এক নিদর্শনের, যার মতো কিছু কোনো সৃষ্টি আনতে পারে না, আর যা নবী ﷺ-এর সত্যতার সাক্ষ্য দেবে। বাগাভী দুজনের নাম বলেন, কা'ব ইবনুল আশরাফ ও ফিনহাস ইবন আযূরা। তারা বলেছিল: তুমি নবী হলে আসমান থেকে একবারে পুরো একটা কিতাব এনে দাও, যেমন মূসা (আঃ) এনেছিলেন। কুরতুবীর বর্ণনায় তারা চেয়েছিল, তিনি তাদের চোখের সামনে আসমানে উঠবেন। সা'দী একে পড়েন কুরআন একসাথে নাজিল হওয়ার দাবি হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dictating Terms to Heaven",
          "bn": "আসমানকে শর্ত বেঁধে দেওয়া"
        },
        "p": [
          {
            "en": "Most of the commentators read the spirit of the request alike. Al-Baghawi draws the line in a phrase: it was a question of dictating and proposing, not a question of submitting, and Allah does not send down signs at the proposal of His servants. As-Sa'di says they made their belief or denial hang on this request, the height of wrongdoing and ignorance, for the Messenger is a human servant under command, with nothing of the matter in his hand. Al-Qurtubi says they asked it to put him in difficulty; Ibn Kathir, out of obstinacy and stubborn refusal.",
            "bn": "চাওয়াটার পেছনের মনোভাব বেশির ভাগ তাফসীরকার একইভাবে পড়েন। বাগাভী ছোট্ট একটা কথায় সীমারেখা টেনে দেন: এ ছিল হুকুম চালানো আর ফরমায়েশ দেওয়ার প্রশ্ন, মেনে নেওয়ার প্রশ্ন নয়, আর বান্দাদের ফরমায়েশ মতো আল্লাহ নিদর্শন নাজিল করেন না। সা'দী বলেন, এই দাবির উপর তারা নিজেদের মানা না মানা ঝুলিয়ে রেখেছিল। তাঁর মতে এ চরম জুলুম আর অজ্ঞতা, কারণ রসূল একজন মানুষ, আল্লাহর আজ্ঞাধীন বান্দা, বিষয়টির কিছুই তাঁর হাতে নেই। কুরতুবী বলেন, তাঁকে বিপাকে ফেলতেই তারা এটা চেয়েছিল। ইবন কাসীর বলেন, জেদ আর একগুঁয়েমি থেকে।"
          },
          {
            "en": "Ibn Kathir and as-Sa'di both point to Surah al-Isra, where, Ibn Kathir says, the disbelievers of Quraysh asked the like. In 17:90 to 17:93 a string of conditions ends: we will not believe in your ascent until you bring down to us a book we can read. The reply given to the Prophet ﷺ is short: say, exalted is my Lord, am I anything but a human messenger? As-Sa'di's principle stands behind both passages: the whole matter is Allah's, and He sends down what He wills upon His servants.",
            "bn": "ইবন কাসীর আর সা'দী দুজনেই দেখান সূরা ইসরার দিকে। ইবন কাসীরের কথায়, কুরাইশের কাফিররাও এমন দাবি তুলেছিল। ১৭:৯০ থেকে ১৭:৯৩ আয়াতে শর্তের পর শর্ত, আর শেষ শর্তটি এই: তোমার আসমানে ওঠাও আমরা বিশ্বাস করব না, যতক্ষণ না আমাদের পড়ার মতো একটা কিতাব নামিয়ে আনো। নবী ﷺ-কে যে জবাব শেখানো হয়, তা ছোট্ট: বলো, আমার রব পবিত্র, আমি কি একজন মানুষ রসূল ছাড়া আর কিছু? দুই জায়গার পেছনেই দাঁড়িয়ে আছে সা'দীর মূলনীতি: সব বিষয় আল্লাহর হাতে, তিনিই যা চান তাঁর বান্দাদের উপর নাজিল করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sign Already Sent",
          "bn": "যে নিদর্শন আগেই এসে গেছে"
        },
        "p": [
          {
            "en": "As-Sa'di then turns to the form of what they wanted. To make the line between truth and falsehood depend on whether a book comes down at once or in parts is, he says, a bare claim, with no proof, no fitness and not even a semblance of argument. Which prophet ever said: if a messenger brings you a book revealed in parts, do not believe him? The Quran's coming in parts, as events required, shows its greatness and Allah's care for the Prophet ﷺ who received it. He quotes 25:32: thus, that We may make your heart firm by it.",
            "bn": "এরপর সা'দী তাকান দাবির ধরনটার দিকে। কিতাব একবারে নামল নাকি ভাগে ভাগে, এটাকে সত্য-মিথ্যার মাপকাঠি বানানো তাঁর মতে নিছক দাবি। এর পক্ষে কোনো প্রমাণ নেই, কোনো যুক্তিসংগত সম্পর্ক নেই, এমনকি সংশয় জাগানোর মতো কিছুও নেই। কোন নবী কবে বলেছেন, কোনো রসূল ভাগে ভাগে নাজিল হওয়া কিতাব আনলে তাঁকে বিশ্বাস করো না? বরং অবস্থা বুঝে অল্প অল্প করে কুরআন নাজিল হওয়াটাই তার মহত্ত্বের প্রমাণ, আর যে নবী ﷺ তা পেয়েছেন, তাঁর প্রতি আল্লাহর যত্নের প্রমাণ। তিনি উদ্ধৃত করেন ২৫:৩২: এভাবেই, যাতে এর দ্বারা তোমার হৃদয় সুদৃঢ় করি।"
          },
          {
            "en": "No commentator fetched here attaches a sound hadith to these two verses. A general narration, not tied to this passage, sits well beside it. In Sahih al-Bukhari (4981), Abu Hurayra (RA) reports that the Prophet ﷺ said: there was no prophet among the prophets but was given something like which people believed, and what I was given was revelation that Allah revealed to me, so I hope to have the most followers of them on the Day of Resurrection. The book they wanted to see fall from the sky was already arriving, verse by verse.",
            "bn": "এখানে যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ দুই আয়াতের সঙ্গে কোনো সহীহ হাদীস জুড়ে দেয়নি। তবে একটি সাধারণ বর্ণনা, যা এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়, পাশে রাখার মতো। সহীহ বুখারীতে (৪৯৮১) আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: নবীদের মধ্যে এমন কোনো নবী নেই, যাঁকে এমন কিছু দেওয়া হয়নি যা দেখে মানুষ ঈমান এনেছে। আর আমাকে যা দেওয়া হয়েছে তা ওয়াহী, যা আল্লাহ আমার প্রতি পাঠিয়েছেন। তাই আমি আশা করি, কিয়ামতের দিন তাঁদের মধ্যে আমার অনুসারীই হবে সবচেয়ে বেশি। আসমান থেকে যে কিতাব নামতে দেখতে চাওয়া হয়েছিল, তা তখন আয়াতে আয়াতে আসছিলই।"
          }
        ]
      },
      {
        "h": {
          "en": "Something Greater Asked of Musa",
          "bn": "মূসার কাছে আরও বড় দাবি"
        },
        "p": [
          {
            "en": "Fa-qad sa'alu Musa akbara min dhalik: they had asked Musa (AS) for greater than that. At-Tabari reads it as rebuke to the askers and comfort to the Prophet ﷺ: let their request not weigh on you, for if you brought down the book they ask for, they would go against Allah's command as their forebears did after He revived them from the thunderbolt. Al-Muyassar puts the comfort simply: do not wonder at it. Al-Baghawi says those forebears were the seventy whom Musa took out to the mountain.",
            "bn": "ফাকাদ সাআলূ মূসা আকবারা মিন যালিক: তারা তো মূসা (আঃ)-এর কাছে এর চেয়েও বড় জিনিস চেয়েছিল। তাবারী এ বাক্যে দেখেন প্রশ্নকারীদের প্রতি তিরস্কার আর নবী ﷺ-এর জন্য সান্ত্বনা: তাদের চাওয়া যেন তোমার কাছে ভারী না ঠেকে। যে কিতাব তারা চাইছে তা নামিয়ে দিলেও তারা আল্লাহর হুকুমের বিরোধিতা করত, যেমন করেছিল তাদের পূর্বপুরুষেরা, বজ্রাঘাতের পর আল্লাহ তাদের আবার জীবিত করার পরও। মুয়াসসার সান্ত্বনাটা সহজ করে বলে: এতে অবাক হয়ো না। বাগাভী বলেন, সেই পূর্বপুরুষেরা ছিল সত্তরজন, যাদের মূসা পাহাড়ে নিয়ে গিয়েছিলেন।"
          },
          {
            "en": "Arina Allaha jahratan: show us Allah openly. At-Tabari and al-Qurtubi read jahratan as with the eyes, a seeing in plain view. At-Tabari also records a report from Ibn Abbas (RA) that reads the word order differently: had they seen Him, they would have seen Him; what they did openly was say, show us Allah. Al-Baghawi gives the same reading from Abu Ubayda. Both readings stand. The thunderbolt came bi-zulmihim, for their wrongdoing, and at-Tabari and al-Muyassar name the wrong: they wronged themselves by asking what was not theirs to ask.",
            "bn": "আরিনাল্লাহা জাহরাতান: আমাদের আল্লাহকে প্রকাশ্যে দেখাও। তাবারী ও কুরতুবী জাহরাতানের অর্থ করেন চোখে দেখা, খোলাখুলি দৃষ্টিতে দেখা। তাবারী আবার ইবন আব্বাস (রাঃ)-এর বরাতে একটি বর্ণনা আনেন, যা শব্দের ক্রম অন্যভাবে পড়ে: তারা দেখলে তো দেখেই ফেলত। আসলে তারা প্রকাশ্যে যা করেছিল তা হলো এ কথা বলা, আমাদের আল্লাহকে দেখাও। বাগাভী আবু উবাইদার কাছ থেকেও একই পাঠ বর্ণনা করেন। দুটি ব্যাখ্যাই এখানে রইল। বজ্রাঘাত এসেছিল বিযুলমিহিম, তাদের জুলুমের কারণে। তাবারী আর মুয়াসসার জুলুমটা চিনিয়ে দেন: যা চাওয়ার অধিকার তাদের ছিল না, তা চেয়ে তারা নিজেদের উপর জুলুম করেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A God They Could See",
          "bn": "চোখে দেখা যায় এমন উপাস্য"
        },
        "p": [
          {
            "en": "Thumma ittakhadhu al-'ijla min ba'di ma ja'athumu al-bayyinat: then they took the calf after the clear proofs had come to them. At-Tabari, al-Qurtubi and al-Muyassar read the then as after Allah revived them. Al-Qurtubi counts the proofs as the hand, the staff and the parting of the sea; Ibn Kathir adds Pharaoh's drowning and recalls 7:138, a god asked for soon after the crossing. At-Tabari reads them as signs that they would not see Allah openly in their life in this world. What lies beyond this world is not this verse's subject.",
            "bn": "সুম্মাত্তাখাযুল ইজলা মিম বা'দি মা জাআতহুমুল বাইয়্যিনাত: তারপর স্পষ্ট প্রমাণ আসার পরও তারা বাছুরকে উপাস্য বানাল। তাবারী, কুরতুবী আর মুয়াসসার এখানকার 'তারপর' পড়েন আল্লাহ তাদের আবার জীবিত করার পরের ঘটনা হিসেবে। কুরতুবীর হিসাবে প্রমাণগুলো হলো হাত, লাঠি আর সাগর চিরে যাওয়া। ইবন কাসীর যোগ করেন ফিরআউনের ডুবে মরা, আর মনে করিয়ে দেন ৭:১৩৮, যেখানে সাগর পার হওয়ার অল্প পরেই তারা একটা দেবতা চেয়ে বসেছিল। তাবারী প্রমাণগুলো পড়েন এমন নিদর্শন হিসেবে, যা দেখিয়ে দিয়েছিল দুনিয়ার জীবনে তারা আল্লাহকে প্রকাশ্যে দেখবে না। দুনিয়ার পরের প্রসঙ্গ এ আয়াতের আলোচ্য বিষয় নয়।"
          },
          {
            "en": "From there at-Tabari draws out what the order shows. They had asked to see their Lord and been shown they would not; then they declared the calf their god, a thing they could see with their eyes and look at openly, and devoted themselves to it. The demand for a God in plain view ended at an idol in plain view. Yet the verse goes on: fa-'afawna 'an dhalik, and We pardoned that. At-Tabari ties the pardon to the repentance they made at their Lord's command, the hard repentance of 2:54; al-Baghawi adds, and We did not uproot them.",
            "bn": "এখান থেকে তাবারী ঘটনার ক্রমটা কী দেখায় তা খুলে বলেন। তারা রবকে দেখতে চেয়েছিল, আর তাদের দেখিয়ে দেওয়া হয়েছিল যে দেখবে না। তারপর তারা বাছুরকেই নিজেদের উপাস্য বলে মেনে নিল, যাকে চোখে দেখা যায়, খোলাখুলি তাকিয়ে থাকা যায়, আর তার পূজায় লেগে রইল। প্রকাশ্যে দেখা যায় এমন রবের দাবি গিয়ে থামল প্রকাশ্যে দেখা যায় এমন এক মূর্তিতে। তবু আয়াত থামে না: ফাআফাওনা আন যালিক, আমি তাও ক্ষমা করেছিলাম। তাবারী এ ক্ষমাকে জুড়ে দেন রবের হুকুমে করা তাদের তওবার সঙ্গে, ২:৫৪ আয়াতের সেই কঠিন তওবা। বাগাভী যোগ করেন: আর আমি তাদের নির্মূল করিনি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Letter With My Name",
          "bn": "আমার নামে লেখা চিঠি"
        },
        "p": [
          {
            "en": "For the reader, the demand has a quiet inward form, and Ibn Jurayj's version is the one to sit with: letters from Allah to particular men, by name. Few of us ask for a book from the sky. Many wait for something addressed to them alone before they move: a dream, a sudden certainty, a sign that this prayer or this apology is meant for me. Al-Baghawi's distinction is the test. Am I asking in order to submit, or dictating the terms on which I will? At-Tabari's comfort holds the warning: a sign made to order would not have made them obey, nor me.",
            "bn": "পাঠকের জন্য এ দাবির একটা নিঃশব্দ, ভেতরের রূপ আছে। ইবন জুরাইজের বর্ণনাটা নিয়ে একটু বসা যায়: নির্দিষ্ট কয়েকজনের নামে আল্লাহর কাছ থেকে চিঠি। আসমান থেকে কিতাব আমরা কেউ চাই না বললেই চলে। কিন্তু নড়ার আগে শুধু নিজের নামে আসা কিছুর অপেক্ষায় অনেকেই থাকি: একটা স্বপ্ন, হঠাৎ পাওয়া নিশ্চয়তা, এমন কোনো ইশারা যে এই নামাজ বা এই ক্ষমা চাওয়াটা বিশেষ করে আমার জন্যই। বাগাভীর পার্থক্যটাই এখানে কষ্টিপাথর। আমি কি মেনে নেওয়ার জন্য জিজ্ঞেস করছি, নাকি কোন শর্তে মানব তা বেঁধে দিচ্ছি? তাবারীর সান্ত্বনার ভেতরেই সতর্কবাণী: ফরমায়েশি নিদর্শন তাদের অনুগত বানাত না, আমাকেও বানাবে না।"
          },
          {
            "en": "The passage is also generous, and that is easy to miss. Both verses end on mercy. 4:152 promises the believers their rewards and then names Allah Forgiving, Merciful, for their sins, Ibn Kathir says, if any of them has sins. 4:153 tells of a calf worshipped after clear proofs and says, We pardoned that. Al-Baghawi reports, as something said, that this pardon is a call to repent: they repented and were pardoned, so repent and you will be pardoned. A reader who finds some of that asking in himself is not shut out; he is shown the way back.",
            "bn": "এ অংশে উদারতাও আছে, আর সেটা সহজেই চোখ এড়িয়ে যায়। দুটি আয়াতই শেষ হয়েছে রহমতের কথায়। ৪:১৫২ মুমিনদের প্রতিদানের ওয়াদা দিয়ে আল্লাহকে বলেছে ক্ষমাশীল, দয়ালু। ইবন কাসীরের কথায়, তাদের গুনাহের জন্য, যদি কারও গুনাহ থাকে। ৪:১৫৩ স্পষ্ট প্রমাণের পরও বাছুর পূজার কথা বলে জানায়, আমি তাও ক্ষমা করেছিলাম। বাগাভী 'বলা হয়' কথাটি জুড়ে দিয়ে আনেন যে এ ক্ষমা আসলে তওবার ডাক: তারা তওবা করেছিল আর ক্ষমা পেয়েছিল, তোমরাও তওবা করো, ক্ষমা পাবে। নিজের ভেতরে ওই চাওয়ার কিছুটা যে পাঠক খুঁজে পান, এ আয়াত তাঁকে দূরে ঠেলে দেয় না, ফেরার পথ দেখায়।"
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
  },
  "4:176": {
    "sections": [
      {
        "h": {
          "en": "A Fatwa Given by Allah",
          "bn": "ফাতওয়া দিলেন আল্লাহ নিজে"
        },
        "p": [
          {
            "en": "This is the last verse of an-Nisa'. Just before it, 4:174 and 4:175 call all mankind to a proof and a clear light, and promise mercy to those who hold fast to Allah. Then the surah turns back to where its law began, the shares of an estate. Ma'arif al-Qur'an observes that inheritance comes near the start of the surah, again after a long gap, and once more at its close, and suggests, with a perhaps, that it was spread over three places to alert people step by step to justice where injustice had been entrenched before Islam.",
            "bn": "সূরা আন-নিসা এখানেই শেষ। ঠিক আগে ৪:১৭৪ ও ৪:১৭৫ আয়াতে গোটা মানবজাতিকে ডাকা হয়েছে প্রমাণ আর সুস্পষ্ট আলোর দিকে, আর যারা আল্লাহকে আঁকড়ে ধরে তাদের রহমতের ওয়াদা দেওয়া হয়েছে। তারপর সূরা ফিরে আসে সেখানে, যেখান থেকে এর বিধান শুরু হয়েছিল: মীরাসের অংশ। মাআরিফুল কুরআন লক্ষ করে, উত্তরাধিকারের প্রসঙ্গ এসেছে সূরার শুরুর দিকে, অনেকটা ব্যবধানে আবার, আর একেবারে শেষে আরেকবার। 'হয়তো' বলে সেখানে কারণও দেখানো হয়েছে। ইসলামের আগে মীরাসে অবিচার গভীরে গেঁথে ছিল, তাই প্রসঙ্গটি তিনটি জায়গায় ছড়িয়ে দেওয়া হয়েছে, যাতে মানুষ ধাপে ধাপে এখানে ইনসাফের গুরুত্ব বুঝতে পারে।"
          },
          {
            "en": "The verse opens with yastaftunaka, they ask you for a fatwa, a ruling. At-Tabari glosses it: they ask you, O Muhammad, to give them a ruling on the kalalah. The reply is not a ruling in the Prophet's ﷺ own name but qul Allahu yuftikum: say, Allah gives you the ruling. Ibn Kathir notes that the question itself is not quoted; its subject is known from the answer, what is said pointing to what was left unsaid. It is Allah who gives the fatwa; the Messenger is told to convey it.",
            "bn": "আয়াত শুরু হয় ইয়াসতাফতূনাকা দিয়ে: তারা আপনার কাছে ফাতওয়া চায়, অর্থাৎ বিধান জানতে চায়। তাবারী ব্যাখ্যা করেন, হে মুহাম্মাদ, তারা কালালার ব্যাপারে আপনার কাছে বিধান চাইছে। জবাব কিন্তু নবী ﷺ-এর নিজের নামে আসেনি। এসেছে কুল আল্লাহু ইউফতীকুম: বলুন, আল্লাহই তোমাদের বিধান দিচ্ছেন। ইবন কাসীর দেখান, প্রশ্নটা আয়াতে উদ্ধৃত হয়নি, তার বিষয় বোঝা যায় শুধু জবাব থেকে। যা বলা হয়েছে, তা-ই ইঙ্গিত দেয় যা বলা হয়নি তার দিকে। ফাতওয়া দিচ্ছেন আল্লাহ, আর রসূলকে বলা হয়েছে তা পৌঁছে দিতে।"
          },
          {
            "en": "Ma'arif al-Qur'an, drawing on the notes of Shabbir Ahmad Usmani, takes two lessons from the exchange. The Companions did not settle inheritance by custom or by their own reasoning; they asked, and waited for revelation even in everyday matters. And the Prophet ﷺ gave no verdict of his own where revelation had not yet come down: he held the matter until it came, then ruled. A question honestly asked was answered from above.",
            "bn": "মাআরিফুল কুরআন শাব্বীর আহমাদ উসমানীর টীকা অবলম্বনে এই প্রশ্নোত্তর থেকে দুটি শিক্ষা বের করে। সাহাবিরা মীরাসের মীমাংসা প্রথা দিয়ে বা নিজেদের বুদ্ধি দিয়ে করেননি। তাঁরা জিজ্ঞেস করেছেন, আর দৈনন্দিন বিষয়েও ওহীর অপেক্ষায় থেকেছেন। আর নবী ﷺ যেখানে ওহী নামেনি, সেখানে নিজে থেকে রায় দেননি। ওহী আসা পর্যন্ত বিষয়টি স্থগিত রেখেছেন, তারপর রায় দিয়েছেন। আন্তরিকভাবে করা প্রশ্নের জবাব এসেছে আসমান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Crown Around the Head",
          "bn": "মাথা ঘিরে থাকা মুকুট"
        },
        "p": [
          {
            "en": "The verse turns on a single word, kalalah. Ibn Kathir recalls that it is taken from al-iklil, the crown that surrounds the head on its sides, and says this is why most scholars explain it as a person who dies leaving neither child nor parent. At-Tabari states it as his own view: kalalah is whoever is other than child and parent. The Muyassar and Ma'arif al-Qur'an give the same definition, and as-Sa'di spells it out: no child of his own or son's child, and no father or grandfather.",
            "bn": "পুরো আয়াত দাঁড়িয়ে আছে একটি শব্দের উপর: কালালা। ইবন কাসীর মনে করিয়ে দেন, শব্দটি এসেছে ইকলীল থেকে, যে মুকুট মাথাকে চারপাশ থেকে ঘিরে রাখে। তিনি বলেন, এ কারণেই অধিকাংশ আলেম কালালার ব্যাখ্যা দিয়েছেন এভাবে: যে মারা গেল অথচ তার না আছে সন্তান, না বাবা-মা। তাবারী নিজের মত হিসেবে এটাই বলেন: সন্তান আর পিতা-মাতা ছাড়া অন্যরাই কালালা। মুয়াসসার আর মাআরিফুল কুরআনও একই সংজ্ঞা দেয়। সা'দী আরও খুলে বলেন: নিজের সন্তান বা ছেলের সন্তান নেই, বাবা বা দাদাও নেই।"
          },
          {
            "en": "Ibn Kathir records a second view: the kalalah is anyone who leaves no child, holding to the words laysa lahu walad. He reports it from 'Umar (RA) through at-Tabari with a chain he calls sound, and cites al-Hakim's report from Ibn 'Abbas (RA) that 'Umar's last word on it was: the one with no child. At-Tabari gives other reports from 'Umar: no child and no parent, said at his death; everyone except the father, a wording a narrator doubted; and that he was ashamed to differ from Abu Bakr (RA). Ibn Kathir holds that 'Umar returned to the majority's view.",
            "bn": "ইবন কাসীর দ্বিতীয় একটি মতও উল্লেখ করেন: যার কোনো সন্তান নেই, সে-ই কালালা। এ মতের ভিত্তি আয়াতের শব্দ লাইসা লাহু ওয়ালাদ। তিনি মতটি তাবারীর সূত্রে উমর (রাঃ) থেকে বর্ণনা করেন এবং উমর পর্যন্ত সনদকে সহীহ বলেন। হাকিমের একটি বর্ণনাও তিনি আনেন, যেখানে ইবন আব্বাস (রাঃ) জানান, এ বিষয়ে উমরের শেষ কথা ছিল: যার সন্তান নেই। তাবারী উমর থেকে আরও বর্ণনা আনেন। মৃত্যুর সময় তিনি বলেছিলেন, যার না সন্তান আছে, না পিতা-মাতা। আরেক বর্ণনায়, পিতা ছাড়া সবাই, যদিও এই শব্দে এক বর্ণনাকারী নিশ্চিত ছিলেন না। আবার তিনি বলেছেন, আবু বকর (রাঃ)-এর বিরোধিতা করতে তাঁর লজ্জা হয়। ইবন কাসীরের মতে, উমর শেষে অধিকাংশের মতেই ফিরে এসেছিলেন।"
          },
          {
            "en": "Both readings start from the same words. Al-Qurtubi takes laysa lahu walad to mean neither child nor parent, the verse naming the first and leaving the second understood, and cites al-Jurjani that walad can be said of both the begetter and the begotten. Ibn Kathir argues from the next clause: the sister is given half, yet with a father living she would by consensus receive nothing at all. So the absence of a child is in the text, he says, and the absence of a parent becomes plain on reflection. As-Sa'di reasons the same way.",
            "bn": "দুই মতের শুরু একই শব্দ থেকে। কুরতুবী লাইসা লাহু ওয়ালাদ-এর অর্থ নেন: না সন্তান, না পিতা-মাতা। আয়াত প্রথমটির নাম নিয়েছে, দ্বিতীয়টি বুঝে নেওয়ার জন্য রেখে দিয়েছে। জুরজানীর বরাতে তিনি বলেন, ওয়ালাদ শব্দটি জন্মদাতা আর জাত সন্তান, দুজনের বেলাতেই বলা যায়। ইবন কাসীরের যুক্তি পরের বাক্য থেকে। বোনকে অর্ধেক দেওয়া হয়েছে, অথচ পিতা জীবিত থাকলে সবার ঐকমত্যে বোন কিছুই পায় না। তাই তাঁর ভাষায়, সন্তান না থাকার কথা আয়াতের শব্দেই আছে, আর পিতা-মাতা না থাকার কথা একটু ভাবলেই স্পষ্ট হয়। সা'দীও একই যুক্তি দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Half, Two Thirds, and Double",
          "bn": "অর্ধেক, দুই-তৃতীয়াংশ, দ্বিগুণ"
        },
        "p": [
          {
            "en": "In imru'un halaka: if a man perishes. Ibn Kathir glosses halaka as died and sets beside it 28:88, everything will perish except His Face, and 55:26 and 55:27. Then come the shares, exactly as the verse states them. If he has no child and has a sister, she has half of what he left. He inherits from her if she has no child. If there are two sisters, they have two thirds of what he left. If there are brothers and sisters, men and women, the male has the share of two females.",
            "bn": "ইনিমরুউন হালাকা: যদি কোনো লোক মারা যায়। ইবন কাসীর হালাকা-র অর্থ করেন মারা গেল, আর পাশে রাখেন ২৮:৮৮: তাঁর চেহারা ছাড়া সবকিছুই ধ্বংস হবে। সঙ্গে রাখেন ৫৫:২৬ ও ৫৫:২৭। এরপর অংশগুলো, ঠিক যেভাবে আয়াত বলেছে। লোকটির সন্তান না থাকলে আর তার বোন থাকলে, বোন পাবে তার রেখে যাওয়া সম্পদের অর্ধেক। বোনের সন্তান না থাকলে ভাই তার ওয়ারিস হবে। বোন দুজন হলে তারা পাবে রেখে যাওয়া সম্পদের দুই-তৃতীয়াংশ। আর ভাইবোন নারী-পুরুষ মিলে থাকলে প্রত্যেক পুরুষ পাবে দুই নারীর অংশের সমান।"
          },
          {
            "en": "The commentators say which siblings are meant. At-Tabari, al-Baghawi, al-Qurtubi and the Muyassar take the sister here as a full sister or a sister through the father; as-Sa'di adds, not through the mother, since her ruling came earlier. For the brother the verse names no fraction at all. As-Sa'di explains why: he inherits as a residuary heir, taking the whole of her estate, or whatever the fixed shares leave. And the two sisters, al-Baghawi and as-Sa'di both say, stand for two or more, who share the two thirds between them.",
            "bn": "কোন ভাইবোনের কথা বলা হচ্ছে, তাফসীরকারেরা তা স্পষ্ট করেছেন। তাবারী, বাগাভী, কুরতুবী আর মুয়াসসারের মতে এখানে বোন মানে আপন বোন, অথবা বাবার দিক থেকে বোন। সা'দী যোগ করেন, মায়ের দিক থেকে বোন এখানে নয়, কারণ তার বিধান আগেই এসে গেছে। ভাইয়ের জন্য আয়াত কোনো ভগ্নাংশ বলেনি। সা'দী কারণ বুঝিয়ে দেন: ভাই ওয়ারিস হয় আসাবা হিসেবে, অর্থাৎ নির্ধারিত অংশের মালিক হিসেবে নয়। তাই সে হয় বোনের পুরো সম্পদ পায়, নয়তো নির্ধারিত অংশগুলো দেওয়ার পর যা থাকে তা পায়। আর বাগাভী ও সা'দী দুজনেই বলেন, দুই বোন বলতে দুই বা তার বেশি বোন বোঝানো হয়েছে, যারা দুই-তৃতীয়াংশ নিজেদের মধ্যে ভাগ করে নেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Other Kalalah Verse",
          "bn": "কালালার আরেকটি আয়াত"
        },
        "p": [
          {
            "en": "An-Nisa' has two kalalah verses, and the commentators read them as a pair. At-Tabari reports from Qatada, and Ibn Kathir repeats it, that Abu Bakr (RA) said in a sermon: the first inheritance verse of an-Nisa' Allah sent down about child and parent; the second about husband, wife and siblings through the mother; the verse that closes an-Nisa' about brothers and sisters through father and mother; and the verse that closes al-Anfal about blood relatives. Qatada opens it with 'it was mentioned to us', not with a chain reaching Abu Bakr.",
            "bn": "সূরা নিসায় কালালা নিয়ে আয়াত দুটি, আর তাফসীরকারেরা দুটিকে জোড়া হিসেবে পড়েন। তাবারী কাতাদা থেকে বর্ণনা করেন, ইবন কাসীরও তা উদ্ধৃত করেন, যে আবু বকর (রাঃ) এক খুতবায় বলেছিলেন: সূরা নিসার মীরাসের প্রথম আয়াত আল্লাহ নাযিল করেছেন সন্তান ও পিতা-মাতা সম্পর্কে। দ্বিতীয়টি স্বামী, স্ত্রী আর মায়ের দিক থেকে ভাইবোন সম্পর্কে। যে আয়াত দিয়ে সূরা নিসা শেষ, তা বাবা ও মা উভয়ের দিক থেকে ভাইবোন সম্পর্কে। আর যে আয়াত দিয়ে সূরা আনফাল শেষ, তা রক্তের আত্মীয়দের সম্পর্কে। কাতাদা কথাটি শুরু করেন 'আমাদের কাছে উল্লেখ করা হয়েছে' বলে, আবু বকর পর্যন্ত পৌঁছানো সনদ দিয়ে নয়।"
          },
          {
            "en": "So 4:12, where a man or woman is inherited as kalalah and leaves a brother or a sister, is read as the maternal side, and this verse as the full and paternal side; as-Sa'di says so plainly. Ma'arif al-Qur'an's note gives the maternal siblings' portion from 4:12: a sixth for a single brother or sister, and a third shared equally where there are two or more.",
            "bn": "অর্থাৎ ৪:১২ আয়াত, যেখানে কোনো পুরুষ বা নারীর মীরাস কালালা হিসেবে বণ্টন হয় এবং তার এক ভাই বা এক বোন থাকে, তা মায়ের দিকের ভাইবোনের বিধান হিসেবে পড়া হয়। আর এই আয়াত আপন ও বাবার দিকের ভাইবোনের বিধান। সা'দী কথাটি স্পষ্ট করে বলেন। মাআরিফুল কুরআনের টীকা ৪:১২ থেকে মায়ের দিকের ভাইবোনের অংশ জানায়: ভাই বা বোন একজন হলে ছয় ভাগের এক ভাগ, আর দুই বা তার বেশি হলে তারা এক-তৃতীয়াংশ সমানভাবে ভাগ করে নেবে।"
          },
          {
            "en": "The clause laysa lahu walad also divided the Companions. Ibn Kathir, at-Tabari and al-Qurtubi report that Ibn 'Abbas and Ibn az-Zubayr (RA) held that a daughter is a walad, so a sister takes nothing beside her. The majority held that the verse fixes the sister's named share only where there is no child at all, and that her inheriting beside a daughter rests on other evidence; at-Tabari says Allah made it clear by revelation through His Messenger ﷺ. Al-Qurtubi adds that Ibn az-Zubayr held Ibn 'Abbas's view until he was told how Mu'adh (RA) had judged such a case.",
            "bn": "লাইসা লাহু ওয়ালাদ বাক্যাংশ নিয়ে সাহাবিদের মধ্যেও মতভেদ হয়েছিল। ইবন কাসীর, তাবারী আর কুরতুবী জানান, ইবন আব্বাস ও ইবনুয যুবাইর (রাঃ)-এর মতে মেয়েও ওয়ালাদ, অর্থাৎ সন্তান। তাই মেয়ে থাকলে বোন কিছুই পাবে না। অধিকাংশের মত ভিন্ন। তাঁদের মতে আয়াত বোনের নির্ধারিত অংশ বেঁধে দিয়েছে কেবল তখনকার জন্য, যখন মৃতের কোনো সন্তানই নেই। মেয়ের সঙ্গে বোনের ওয়ারিস হওয়ার ভিত্তি অন্য দলিল। তাবারী বলেন, আল্লাহ তা স্পষ্ট করেছেন তাঁর রসূল ﷺ-এর মুখে ওহীর মাধ্যমে। কুরতুবী যোগ করেন, ইবনুয যুবাইর ইবন আব্বাসের মতেই ছিলেন, যতক্ষণ না তাঁকে জানানো হলো এমন এক মামলায় মুআয (রাঃ) কী রায় দিয়েছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Summer Verse",
          "bn": "গ্রীষ্মের আয়াত"
        },
        "p": [
          {
            "en": "Muslim records in his Sahih (1616) from Jabir ibn 'Abdullah (RA): I fell ill, and Allah's Messenger ﷺ and Abu Bakr came to visit me, both on foot. I had fainted. He performed ablution, then poured some of its water over me, and I came round. I said: Messenger of Allah, how shall I decide about my wealth? He gave me no reply until the verse of inheritance came down: yastaftunaka, qul Allahu yuftikum fil-kalalah. Another narration in the same chapter, through Ibn Jurayj, names 4:11 instead. Al-Qurtubi notes that Jabir had nine sisters.",
            "bn": "সহীহ মুসলিমে (১৬১৬) জাবির ইবন আবদুল্লাহ (রাঃ) থেকে বর্ণিত: আমি অসুস্থ হয়ে পড়লাম। আল্লাহর রসূল ﷺ আর আবু বকর পায়ে হেঁটে আমাকে দেখতে এলেন। আমি তখন বেহুঁশ। তিনি ওযু করলেন, তারপর ওযুর পানি থেকে কিছু আমার উপর ঢেলে দিলেন, আর আমার হুঁশ ফিরে এল। আমি বললাম, হে আল্লাহর রসূল, আমার সম্পদের ব্যাপারে আমি কী ফয়সালা করব? তিনি আমাকে কোনো জবাব দিলেন না, যতক্ষণ না মীরাসের আয়াত নাযিল হলো: ইয়াসতাফতূনাকা, কুলিল্লাহু ইউফতীকুম ফিল কালালাহ। একই অধ্যায়ে ইবন জুরাইজের সূত্রে আরেক বর্ণনায় এর বদলে ৪:১১ আয়াতের নাম এসেছে। কুরতুবী জানান, জাবিরের বোন ছিল ৯ জন।"
          },
          {
            "en": "Al-Bukhari records (4605) from al-Bara' (RA): the last surah to be revealed was Bara'ah, and the last verse to be revealed was yastaftunaka. Other reports name other verses. Al-Baghawi relates from Ibn 'Abbas (RA) that the last verse was the verse of riba, and in another report 2:281; al-Qurtubi also mentions 2:281. Al-Baghawi then gives a reported sequence placing this verse on the road to the Farewell Pilgrimage, before 5:3 and 2:281, which is why, in that report, it was called the summer verse.",
            "bn": "সহীহ বুখারীতে (৪৬০৫) বারা (রাঃ) থেকে বর্ণিত: সবশেষে নাযিল হওয়া সূরা বারাআহ, আর সবশেষে নাযিল হওয়া আয়াত ইয়াসতাফতূনাকা। অন্য বর্ণনায় অন্য আয়াতের নাম আছে। বাগাভী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, শেষ আয়াত ছিল সুদের আয়াত, আর তাঁর আরেক বর্ণনায় ২:২৮১। কুরতুবীও ২:২৮১-এর বর্ণনা উল্লেখ করেন। বাগাভী এরপর 'বর্ণিত আছে' বলে একটি ক্রম দেন, যেখানে এই আয়াত নাযিল হয় বিদায় হজের পথে, ৫:৩ ও ২:২৮১-এর আগে। সেই বর্ণনা অনুযায়ী, এ কারণেই একে গ্রীষ্মের আয়াত বলা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "'Umar's Unfinished Question",
          "bn": "উমর (রাঃ)-এর অমীমাংসিত প্রশ্ন"
        },
        "p": [
          {
            "en": "In Muslim (1617), 'Umar (RA), preaching on a Friday, mentions the Prophet ﷺ and Abu Bakr, then says: I leave nothing behind me that matters more to me than the kalalah. I went back to Allah's Messenger ﷺ about nothing as often as about it, and he was never as stern with me over anything as over it, until he jabbed his finger into my chest and said: 'Umar, is the summer verse at the end of Surat an-Nisa' not enough for you? If I live, I shall give a judgement on it by which those who read the Qur'an and those who do not can judge.",
            "bn": "সহীহ মুসলিমে (১৬১৭) আছে, উমর (রাঃ) এক জুমার খুতবায় নবী ﷺ ও আবু বকরের কথা উল্লেখ করে বললেন: কালালার চেয়ে গুরুত্বপূর্ণ কোনো বিষয় আমি আমার পরে রেখে যাচ্ছি না। কালালা নিয়ে আমি আল্লাহর রসূল ﷺ-এর কাছে যতবার ফিরে গেছি, আর কোনো বিষয়ে ততবার যাইনি। আর কোনো বিষয়ে তিনি আমার সঙ্গে এতটা কঠোর হননি, যতটা হয়েছেন এ বিষয়ে। শেষে তিনি আঙুল দিয়ে আমার বুকে খোঁচা দিয়ে বললেন: হে উমর, সূরা নিসার শেষে গ্রীষ্মের যে আয়াত, তা কি তোমার জন্য যথেষ্ট নয়? আমি যদি বেঁচে থাকি, এ বিষয়ে এমন ফয়সালা দেব, যা দিয়ে কুরআন পড়তে জানা লোক আর না-জানা লোক, দুজনেই মীমাংসা করতে পারবে।"
          },
          {
            "en": "Al-Bukhari records (5588) from Ibn 'Umar (RA) that 'Umar gave a sermon on the pulpit of Allah's Messenger ﷺ: The prohibition of khamr has come down, and it is made from five things, grapes, dates, wheat, barley and honey, and khamr is whatever clouds the mind. And there are three things I wished Allah's Messenger ﷺ had not left us before giving us a binding word on them: the grandfather, the kalalah, and some kinds of riba. Ibn Kathir says the ruling of kalalah was hard for 'Umar to grasp, and that the Prophet ﷺ pointed him back to the verse because there is sufficiency in it.",
            "bn": "সহীহ বুখারীতে (৫৫৮৮) ইবন উমর (রাঃ) থেকে বর্ণিত, উমর আল্লাহর রসূল ﷺ-এর মিম্বারে খুতবা দিয়ে বললেন: মদ হারাম হওয়ার বিধান নাযিল হয়েছে। তা তৈরি হয় পাঁচটি জিনিস থেকে: আঙুর, খেজুর, গম, যব আর মধু। আর খামর হলো যা বুদ্ধিকে আচ্ছন্ন করে। আর তিনটি বিষয় আছে, যেগুলোর ব্যাপারে আমি চেয়েছিলাম, আল্লাহর রসূল ﷺ আমাদের ছেড়ে যাওয়ার আগে একটা চূড়ান্ত কথা বলে যান: দাদা, কালালা আর সুদের কয়েকটি অধ্যায়। ইবন কাসীর বলেন, কালালার বিধান বোঝা উমরের কাছে কঠিন ঠেকেছিল। নবী ﷺ তাঁকে আয়াতের দিকেই ফিরিয়ে দিয়েছিলেন, কারণ তাতেই যথেষ্ট আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Made Clear Lest You Stray",
          "bn": "পথ না হারানোর জন্য বর্ণনা"
        },
        "p": [
          {
            "en": "Yubayyinullahu lakum an tadillu reads, word for word, Allah makes clear to you that you go astray, and the grammarians fill the gap. Al-Qurtubi gives al-Kisa'i's reading, so that you do not go astray, and the view of the Basran grammarians reported by an-Nahhas, out of aversion to your going astray, since they do not allow an unspoken la. Al-Baghawi names al-Farra' and Abu 'Ubayda for the first reading. At-Tabari cites a line of al-Qutami to show the Arabs leaving la unsaid where the context makes it plain.",
            "bn": "ইউবাইয়িনুল্লাহু লাকুম আন তাদিল্লূ, শব্দে শব্দে পড়লে দাঁড়ায়: আল্লাহ তোমাদের জন্য স্পষ্ট করছেন যে তোমরা পথ হারাবে। মাঝের ফাঁকটা ভাষাবিদেরা পূরণ করেন। কুরতুবী কিসাঈর পাঠ উল্লেখ করেন: যাতে তোমরা পথ না হারাও। নাহহাসের বরাতে বসরার ব্যাকরণবিদদের মতও আনেন: তোমাদের পথ হারানো অপছন্দ করেই স্পষ্ট করছেন। কারণ তাঁরা অনুচ্চারিত 'লা' মানেন না। বাগাভী প্রথম পাঠটি ফাররা ও আবু উবাইদার নামে উল্লেখ করেন। তাবারী কুতামীর কবিতার একটি চরণ এনে দেখান, প্রসঙ্গ থেকে বোঝা গেলে আরবরা 'লা' উহ্য রাখে।"
          },
          {
            "en": "At-Tabari says what is made clear is the division of your inheritances and the ruling on the kalalah, so that you do not swerve from the truth or get the ruling wrong; Ibn Jurayj says simply, in the matter of inheritance. As-Sa'di calls the explanation a bounty, so that you are guided by it, act on it, and do not stray through not knowing. Ibn Kathir cites this clause to show that the majority's definition is what the Qur'an indicates, since Allah says He has made it clear. And on the closing name, al-'Alim, he says Allah knows what each relative deserves by nearness to the deceased.",
            "bn": "তাবারী বলেন, যা স্পষ্ট করা হচ্ছে তা হলো তোমাদের মীরাসের বণ্টন আর কালালার বিধান, যাতে তোমরা সত্য থেকে সরে না যাও, বিধানে ভুল না করো। ইবন জুরাইজ সংক্ষেপে বলেন: মীরাসের ব্যাপারে। সা'দী এই বর্ণনাকে আল্লাহর অনুগ্রহ বলেন, যাতে তোমরা এর আলোয় পথ পাও, সে অনুযায়ী আমল করো, আর না জানার কারণে বিপথে না যাও। ইবন কাসীর এই বাক্যকেই প্রমাণ হিসেবে আনেন যে অধিকাংশের সংজ্ঞাই কুরআনের ইঙ্গিত, কারণ আল্লাহ বলেছেন তিনি তা স্পষ্ট করেছেন। আর শেষের নাম আলীম সম্পর্কে তিনি বলেন, মৃতের সঙ্গে নৈকট্য অনুযায়ী কোন আত্মীয়ের কী প্রাপ্য, আল্লাহ তা জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Siblings Around One Estate",
          "bn": "এক মীরাস ঘিরে ভাইবোন"
        },
        "p": [
          {
            "en": "The verse is about brothers and sisters, the relatives most likely to sit together around an estate and most likely to fall out over it. It names each share and names the alternative: going astray. A brother whose share is twice his sister's holds it by Allah's ruling, not by his own merit; a sister's half or two thirds is Allah's allotment, not a favour from her brothers. Settle the estate promptly rather than leaving land undivided for years while one sibling enjoys it, and press no one to give up what the verse has given.",
            "bn": "আয়াতটি ভাইবোনদের নিয়ে। মীরাস ঘিরে একসঙ্গে বসার সম্ভাবনা যেমন তাদেরই বেশি, ঝগড়া বাধার সম্ভাবনাও তাদেরই বেশি। আয়াত প্রত্যেকের অংশের নাম বলেছে, আর বিকল্পটারও নাম বলেছে: পথ হারানো। যে ভাই বোনের দ্বিগুণ পায়, সে তা পায় আল্লাহর বিধানে, নিজের কৃতিত্বে নয়। বোনের অর্ধেক বা দুই-তৃতীয়াংশ আল্লাহর বণ্টন, ভাইদের দয়া নয়। দেরি না করে মীরাস ভাগ করে ফেলুন। জমি বছরের পর বছর অবণ্টিত পড়ে থাকবে আর ভাইবোনের একজন একাই ভোগ করবে, তা যেন না হয়। আয়াত যাকে যা দিয়েছে, তা ছেড়ে দিতে কাউকে চাপ দেবেন না।"
          },
          {
            "en": "This page states only what the verse states. A real estate may involve a spouse, a parent, debts, a bequest and other heirs, and the fiqh of those cases lies beyond it: take the actual division to a qualified scholar of inheritance, and write an Islamic will while you are well, the subject of 2:180 to 2:182. Then guard the peace. The Companions, as Ma'arif al-Qur'an notes, asked before they acted; a family can do the same, sitting down with a scholar before resentment hardens. Allah has made it clear, so that we do not go astray.",
            "bn": "এই লেখা শুধু আয়াতে যা আছে তা-ই বলেছে। বাস্তবের মীরাসে স্বামী বা স্ত্রী, বাবা বা মা, দেনা, ওসিয়ত আর অন্য ওয়ারিসরাও থাকতে পারেন। সেসব ক্ষেত্রের ফিকহ এ লেখার আওতার বাইরে। প্রকৃত বণ্টনের জন্য মীরাস-বিষয়ে যোগ্য আলেমের কাছে যান, আর সুস্থ থাকতেই ইসলামী ওসিয়ত লিখে রাখুন, যার আলোচনা ২:১৮০ থেকে ২:১৮২ আয়াতে। তারপর শান্তি রক্ষা করুন। মাআরিফুল কুরআন যেমন বলে, সাহাবিরা কাজ করার আগে জিজ্ঞেস করে নিতেন। একটি পরিবারও তা-ই করতে পারে: ক্ষোভ জমে শক্ত হওয়ার আগেই একসঙ্গে কোনো আলেমের কাছে বসা। আল্লাহ স্পষ্ট করে দিয়েছেন, যাতে আমরা পথ না হারাই।"
          }
        ]
      }
    ]
  }
});
