/**
 * Tadabbur long-form articles — surah 102.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "102:1-2": {
    "sections": [
      {
        "h": {
          "en": "Busied Away From the Purpose",
          "bn": "যে কাজে আসা, তা থেকে ব্যস্ত"
        },
        "p": [
          {
            "en": "Alhakumu at-takathur, hatta zurtumu al-maqabir: the vying for more has diverted you, until you visited the graves. Al-Qurtubi glosses alhakum as shaghalakum, it busied you, and supports the sense with a line from Imru' al-Qays in which a nursing mother is distracted from her infant. He gives a second gloss, ansakum, it made you forget, and explains the root: to be lahi from something is to turn away from it and drop it from mind. Ibn Kathir opens his own paraphrase with the same verb, busied.",
            "bn": "আলহাকুমুত তাকাসুর, হাত্তা যুরতুমুল মাকাবির: বেশি পাওয়ার পাল্লা তোমাদের ভুলিয়ে রেখেছে, শেষে তোমরা কবরে গিয়ে পৌঁছেছ। কুরতুবী আলহাকুম-এর অর্থ করেন শাগালাকুম, মানে তোমাদের ব্যস্ত করে রেখেছে। সমর্থনে তিনি ইমরুল কায়সের একটি পঙক্তি আনেন, যেখানে দুধ খাওয়ানো এক মা নিজের শিশুর কথা ভুলে যায়। দ্বিতীয় অর্থও তিনি দেন: আনসাকুম, তোমাদের ভুলিয়ে দিয়েছে। ধাতুটির ব্যাখ্যায় বলেন, কোনো কিছু থেকে লাহি হওয়া মানে তা থেকে মুখ ফিরিয়ে নেওয়া, মন থেকে সরিয়ে দেওয়া। ইবন কাসীরও নিজের ব্যাখ্যা শুরু করেন সেই একই ক্রিয়া দিয়ে: ব্যস্ত রেখেছে।"
          },
          {
            "en": "Diverted from what? The commentators supply the object the verse leaves unspoken. At-Tabari says from obedience to your Lord, and from whatever would save you from His displeasure, and al-Baghawi repeats him almost word for word. Ibn Kathir says that love of this world, its delights and its glitter, busied you from seeking the Hereafter. As-Sa'di reaches back to what the servants were created for: worshipping Him alone, knowing Him, turning back to Him, and putting His love before everything else. He reads the whole verse as a rebuke.",
            "bn": "কিসের থেকে ভুলিয়ে রেখেছে? আয়াত কথাটা উহ্য রেখেছে, তাফসীরকারেরা তা পূরণ করেন। তাবারী বলেন, রবের আনুগত্য থেকে, আর যা তোমাদের তাঁর অসন্তোষ থেকে বাঁচাত তা থেকে। বাগাভী প্রায় হুবহু তাঁরই কথা বলেন। ইবন কাসীরের ভাষায়, দুনিয়ার ভালোবাসা, তার ভোগ আর চাকচিক্য তোমাদের আখিরাত খোঁজা থেকে ব্যস্ত রেখেছে। সাদী ফিরে যান মানুষকে যে কাজের জন্য সৃষ্টি করা হয়েছে সেখানে: শরিকহীনভাবে তাঁর ইবাদত, তাঁকে চেনা, তাঁর দিকে ফিরে আসা, আর সবকিছুর আগে তাঁর ভালোবাসাকে রাখা। পুরো আয়াতটিকে তিনি পড়েন ভর্ৎসনা হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Contest That Needs Rivals",
          "bn": "প্রতিদ্বন্দ্বী ছাড়া যে পাল্লা চলে না"
        },
        "p": [
          {
            "en": "Al-Qurtubi defines at-takathur with a single word: al-mukathara, trying to outdo another in number. It is a contest, and a contest needs a rival. As-Sa'di puts it in his own way: whatever the vying is in, what is aimed at is that each outnumbers the other, and not sincerity towards Allah. Al-Baghawi stacks three nouns to catch it, al-mubahat, al-mufakhara and al-mukathara: vaunting, boasting and outnumbering. At-Tabari's phrase is the vaunting of much wealth and many people, and the Muyassar's is boasting of much wealth and many children.",
            "bn": "কুরতুবী তাকাসুরের সংজ্ঞা দেন একটি শব্দে: মুকাসারা, সংখ্যায় অন্যকে ছাড়িয়ে যাওয়ার চেষ্টা। এ এক প্রতিযোগিতা, আর প্রতিযোগিতায় প্রতিপক্ষ লাগে। সাদী কথাটা বলেন নিজের মতো করে: পাল্লা যে বিষয়েই হোক, আসল লক্ষ্য একে অপরকে সংখ্যায় হারানো, আল্লাহর জন্য ইখলাস নয়। বাগাভী তিনটি শব্দ পরপর বসান, মুবাহাত, মুফাখারা ও মুকাসারা: বড়াই, গর্ব আর সংখ্যায় টেক্কা দেওয়া। তাবারীর ভাষায় এটি অঢেল সম্পদ আর বহু লোকজন নিয়ে বড়াই। মুয়াসসার বলে, অঢেল সম্পদ আর অনেক সন্তান নিয়ে গর্ব।"
          },
          {
            "en": "But vying in what? The verse never names the thing being multiplied, and the early authorities filled the gap differently. Al-Qurtubi relays wealth and children from Ibn 'Abbas and al-Hasan, and Ibn Kathir reports al-Hasan al-Basri saying the same. Qatada, in al-Qurtubi's report, makes it boasting of tribes and clans. Ad-Dahhak makes it absorption in earning a living and in trade, and al-Qurtubi adds that 'Amr ibn Dinar swore the surah came down about merchants. Each answer names a real field of rivalry, and each has its holder.",
            "bn": "কিন্তু পাল্লাটা কিসে? কোন জিনিস বাড়ানোর প্রতিযোগিতা, আয়াত তা কোথাও বলেনি। পূর্বসূরিরা এই ফাঁক ভরেছেন ভিন্ন ভিন্নভাবে। কুরতুবী ইবন আব্বাস (রাঃ) ও হাসান থেকে বর্ণনা করেন: সম্পদ আর সন্তান। ইবন কাসীরও হাসান বসরীর একই কথা উদ্ধৃত করেন। কুরতুবীর বর্ণনায় কাতাদার মত, গোত্র আর বংশ নিয়ে গর্ব। দাহহাকের মত, রুজি-রোজগার আর ব্যবসায় ডুবে থাকা। কুরতুবী আরও জানান, আমর ইবন দীনার কসম খেয়ে বলেছিলেন, সূরাটি নাযিল হয়েছে ব্যবসায়ীদের ব্যাপারে। প্রতিটি উত্তরই প্রতিযোগিতার একটা বাস্তব ময়দান দেখায়, আর প্রতিটির পেছনে আছেন একজন বক্তা।"
          },
          {
            "en": "At-Tabari leans towards wealth. Because the Prophet ﷺ followed his recitation of the surah with words about the son of Adam and his wealth, he concludes that, to the Prophet ﷺ, the vying meant wealth. As-Sa'di leans the other way: the thing vied in was left unmentioned so that it would cover everything people vie in and boast of, wealth, children, supporters, troops, servants, standing and more. Al-Qurtubi, after listing the reports, closes with his own judgement that the verse covers all of them and others besides. Both positions stand.",
            "bn": "তাবারী ঝুঁকেছেন এক দিকে। নবী ﷺ সূরাটি তিলাওয়াতের পরপরই আদমসন্তান আর তার সম্পদ নিয়ে কথা বলেছিলেন। তাই তাবারীর সিদ্ধান্ত, নবী ﷺ-এর কাছে এই পাল্লার মানে ছিল সম্পদ। সাদী ঝুঁকেছেন অন্য দিকে। তাঁর মতে কিসে পাল্লা, তা উল্লেখ করা হয়নি ইচ্ছা করেই, যাতে মানুষ যা নিয়েই পাল্লা দেয় আর গর্ব করে সবই এর ভেতরে পড়ে: সম্পদ, সন্তান, সমর্থক, সৈন্য, চাকর-বাকর, পদমর্যাদা, আরও কত কী। কুরতুবী বর্ণনাগুলো সাজিয়ে শেষে নিজের রায় দেন: আয়াতটি এ সবকিছুকেই ধরে, তার বাইরেরও। দুটি মতই নিজের জায়গায় থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Clans Counting Their Dead",
          "bn": "কবর গুনে গুনে বংশের বড়াই"
        },
        "p": [
          {
            "en": "Several reports name a first audience. Al-Baghawi relays from Muqatil and al-Kalbi that the verse came down about two clans of Quraysh, Banu 'Abd Manaf and Banu Sahm. They vied over which had more chiefs and nobles, and Banu 'Abd Manaf came out ahead. Then they said: let us count our dead. They went to the graves and counted, this is the grave of so-and-so, and this of so-and-so, and Banu Sahm overtook them by three households, because they had been more numerous before Islam.",
            "bn": "কয়েকটি বর্ণনা প্রথম শ্রোতাদের পরিচয় দেয়। বাগাভী মুকাতিল ও কালবী থেকে বর্ণনা করেন, আয়াতটি নাযিল হয়েছিল কুরাইশের দুটি গোত্রকে নিয়ে: বনু আবদে মানাফ আর বনু সাহম। কাদের নেতা আর অভিজাত লোক বেশি, তা নিয়ে তারা পাল্লা দেয়। তাতে বনু আবদে মানাফ এগিয়ে যায়। তখন তারা বলল, চলো, আমাদের মৃতদেরও গুনি। কবরস্থানে গিয়ে তারা গুনতে লাগল: এটা অমুকের কবর, ওটা অমুকের। এবার বনু সাহম তিনটি পরিবারের ব্যবধানে এগিয়ে গেল, কারণ ইসলামের আগে তাদের লোকসংখ্যা বেশি ছিল।"
          },
          {
            "en": "Al-Qurtubi gives the same account from Ibn 'Abbas, Muqatil and al-Kalbi, places the first contest in Islam, and reads the verse through it: the rivalry in your living diverted you, and you were not content until you visited the graves, boasting of the dead. Other reports point elsewhere. Ibn Kathir carries, through Ibn Abi Hatim from Ibn Buraydah, two clans of the Ansar, Banu Haritha and Banu al-Harith, who boasted of their living and then went to the graves to do the same. Qatada, in al-Baghawi and al-Qurtubi, says the Jews.",
            "bn": "কুরতুবী একই ঘটনা বর্ণনা করেন ইবন আব্বাস (রাঃ), মুকাতিল ও কালবী থেকে। তবে প্রথম প্রতিযোগিতাটিকে তিনি রাখেন ইসলামের যুগে। আয়াতটিও পড়েন এই ঘটনার আলোয়: জীবিতদের নিয়ে পাল্লা তোমাদের ভুলিয়ে রেখেছিল, তাতেও মন ভরেনি, শেষে মৃতদের নিয়ে গর্ব করতে কবর পর্যন্ত গিয়েছ। অন্য বর্ণনাগুলো ভিন্ন দিকে যায়। ইবন কাসীর ইবন আবী হাতিমের সূত্রে ইবন বুরাইদা থেকে আনসারের দুটি গোত্রের কথা আনেন, বনু হারিসা আর বনু হারিস। তারা আগে জীবিতদের নিয়ে বড়াই করে, তারপর কবরস্থানে গিয়ে একই কাজ করে। বাগাভী ও কুরতুবীর বর্ণনায় কাতাদা বলেন, ইহুদিদের কথা।"
          },
          {
            "en": "Al-Qurtubi also records that the surah is Makkan in the view of all the commentators, and that al-Bukhari relates it as Madinan. These are reports of an occasion, carried as reports, and they do not agree with each other on the place or on the people. The verse describes a boast that the text condemns. It licenses nothing against any clan, tribe or family living today, nor against anyone descended from those named. Its address reaches everyone who keeps the same kind of tally, in whatever currency.",
            "bn": "কুরতুবী আরও উল্লেখ করেন, সব তাফসীরকারের মতে সূরাটি মাক্কী, তবে বুখারী একে মাদানী বলে বর্ণনা করেছেন। এগুলো নাযিলের প্রেক্ষাপট সম্পর্কে বর্ণনা, বর্ণনা হিসেবেই এসেছে, আর স্থান বা মানুষ নিয়ে এগুলো একমত নয়। আয়াতটি এমন এক বড়াইয়ের বর্ণনা দেয়, যার নিন্দা কুরআন নিজেই করেছে। আজকের কোনো গোত্র, বংশ বা পরিবারের বিরুদ্ধে, কিংবা ওই নামগুলোর কোনো উত্তরসূরির বিরুদ্ধে, এ আয়াত কোনো কিছুরই অনুমতি দেয় না। যে-ই একই রকম হিসাব রাখে, যে মুদ্রাতেই হোক, আয়াতের ডাক তার কাছেই পৌঁছায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Until the Graves: Three Readings",
          "bn": "কবর পর্যন্ত: তিনটি পাঠ"
        },
        "p": [
          {
            "en": "Hatta zurtumu al-maqabir carries more than one reading in the files. Most take it as death. At-Tabari: until you came to the graves and were buried in them; the Muyassar and al-Baghawi say the same. Ibn Kathir calls this the correct meaning, you went to them and were buried in them, and supports it with a report he places in the Sahih: a Bedouin whom the Prophet ﷺ visited in his illness called it a fever boiling in an old man that would make him visit the graves.",
            "bn": "হাত্তা যুরতুমুল মাকাবির, এর পাঠ তাফসীরগুলোতে একটি নয়। বেশিরভাগ একে মৃত্যু অর্থে নেন। তাবারীর ব্যাখ্যা: যতক্ষণ না তোমরা কবরে পৌঁছে সেখানে দাফন হলে। মুয়াসসার ও বাগাভীও একই কথা বলেন। ইবন কাসীর এটিকেই সঠিক অর্থ বলেন: তোমরা সেখানে চলে গেলে, সেখানেই দাফন হলে। সমর্থনে তিনি সহীহের একটি বর্ণনা আনেন। অসুস্থ এক বেদুইনকে নবী ﷺ দেখতে গিয়েছিলেন। লোকটি তার জ্বরকে বলল, বুড়ো মানুষের গায়ে টগবগ করা এমন জ্বর, যা তাকে কবরের সাক্ষাতে নিয়ে যাবে।"
          },
          {
            "en": "Al-Qurtubi gives the death reading first. Then, introduced with qila, it is said, comes a second: the vying diverted you until you counted the dead, which ties the verse to the clans at the graves. He adds a third, again with qila: the verse is a threat, meaning you busied yourselves with worldly boasting until you visit the graves and see the punishment of Allah that comes down upon you. The files set these side by side, and this article chooses none of them over the others.",
            "bn": "কুরতুবী আগে মৃত্যুর পাঠটিই দেন। তারপর 'কীলা', অর্থাৎ 'বলা হয়' বলে দ্বিতীয় পাঠ আনেন: পাল্লা তোমাদের এমন ভুলিয়ে রেখেছিল যে শেষে তোমরা মৃতদের গুনতে বসলে। এ পাঠ আয়াতটিকে কবরস্থানে যাওয়া সেই গোত্রগুলোর সঙ্গে জুড়ে দেয়। আবার 'কীলা' বলে তিনি তৃতীয় পাঠও আনেন: আয়াতটি এক হুঁশিয়ারি। দুনিয়ার বড়াইয়ে তোমরা মেতে আছ, যতক্ষণ না কবরে গিয়ে দেখবে আল্লাহর কোন আযাব তোমাদের উপর নেমে আসে। তাফসীরগুলো এই পাঠগুলো পাশাপাশি রাখে। এই প্রবন্ধও কোনোটিকে অন্যটির উপরে তোলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Visitor Must Move On",
          "bn": "যিয়ারতকারী থেকে যায় না"
        },
        "p": [
          {
            "en": "The verb chosen is the verb of visiting, and several files pause on it. Ibn Kathir relays through Ibn Abi Hatim that Maymun ibn Mihran was sitting with 'Umar ibn 'Abd al-'Aziz when he recited these two verses, fell silent a moment, and said: Maymun, I see the graves as nothing but a visit, and the visitor has to return to his home. Ibn Abi Hatim explains: to his home in Paradise or the Fire. Ibn Kathir adds, with it is mentioned, that a Bedouin heard the verse and said: resurrection, by the Lord of the Ka'ba.",
            "bn": "আয়াতে বেছে নেওয়া ক্রিয়াটি সাক্ষাতে যাওয়ার, যিয়ারতের। কয়েকটি তাফসীর এখানে থামে। ইবন কাসীর ইবন আবী হাতিমের সূত্রে বর্ণনা করেন: মায়মূন ইবন মিহরান বসে ছিলেন উমর ইবন আব্দুল আযীযের কাছে। উমর এই দুটি আয়াত তিলাওয়াত করে খানিক চুপ থাকলেন, তারপর বললেন, মায়মূন, কবরকে আমি যিয়ারত ছাড়া আর কিছু দেখি না, আর যিয়ারতকারীকে নিজের ঘরে ফিরতেই হয়। ইবন আবী হাতিম ব্যাখ্যা করেন: সেই ঘর জান্নাত কিংবা জাহান্নাম। ইবন কাসীর 'উল্লেখ আছে' বলে আরও আনেন, এক বেদুইন আয়াতটি শুনে বলেছিল: কাবার রবের কসম, তাহলে পুনরুত্থান আছে।"
          },
          {
            "en": "Al-Qurtubi folds the same image into his first reading: death came to you and you became visitors in the graves, returning from them as a visitor returns home, to Paradise or the Fire. As-Sa'di draws the doctrinal point: by calling them visitors and not residents, Allah showed that the barzakh is an abode meant to be passed through on the way to the abode that lasts. The image sits beside the plain meaning rather than replacing it, since Ibn Kathir, who carries the visit report, still calls burial the correct sense.",
            "bn": "কুরতুবী একই ছবি নিজের প্রথম পাঠের ভেতরেই রাখেন: মৃত্যু এল, তোমরা কবরে গেলে যিয়ারতকারী হয়ে, আর সেখান থেকে ফিরবে যেমন অতিথি নিজের ঘরে ফেরে, জান্নাতে কিংবা জাহান্নামে। সাদী এখান থেকে আকীদার কথাটি বের করেন। আল্লাহ তাদের বলেছেন যিয়ারতকারী, বাসিন্দা বলেননি। এতে বোঝা যায়, বারযাখ এমন এক ঘর, যা পার হয়ে স্থায়ী ঘরে যেতে হয়। তবে এই ছবি সরল অর্থের জায়গা নেয় না, পাশে বসে। যে ইবন কাসীর যিয়ারতের বর্ণনাটি আনেন, তিনিই দাফনকে সঠিক অর্থ বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Eaten, Worn, or Sent Ahead",
          "bn": "খাওয়া, পরা, নয়তো আগে পাঠানো"
        },
        "p": [
          {
            "en": "The hadith most of the files attach to this verse is in Sahih Muslim (2958). Mutarrif reports from his father: I came to the Prophet ﷺ as he was reciting alhakumu at-takathur. He said: the son of Adam says, my wealth, my wealth. And he said: and is there anything of your wealth for you, son of Adam, except what you ate and used up, or wore and wore out, or gave in charity and sent ahead? At-Tabari, Ibn Kathir, al-Baghawi and al-Qurtubi all carry it under this verse.",
            "bn": "বেশিরভাগ তাফসীর এ আয়াতের সঙ্গে যে হাদীসটি জুড়েছে, তা সহীহ মুসলিমে (২৯৫৮) আছে। মুতাররিফ তাঁর পিতা থেকে বর্ণনা করেন: আমি নবী ﷺ-এর কাছে এলাম, তিনি তখন তিলাওয়াত করছিলেন আলহাকুমুত তাকাসুর। তিনি বললেন: আদমসন্তান বলে, আমার সম্পদ, আমার সম্পদ। তিনি আরও বললেন: হে আদমসন্তান, তোমার সম্পদের মধ্যে তোমার বলতে কি কিছু আছে, শুধু যা খেয়ে শেষ করেছ, বা পরে জীর্ণ করেছ, বা সদকা করে আগে পাঠিয়ে দিয়েছ, সেটুকু ছাড়া? তাবারী, ইবন কাসীর, বাগাভী ও কুরতুবী সবাই হাদীসটি এ আয়াতের আলোচনায় এনেছেন।"
          },
          {
            "en": "Al-Bukhari (6439) narrates from Anas ibn Malik (RA) that the Prophet ﷺ said: if the son of Adam had a valley of gold, he would love to have two valleys, and nothing will fill his mouth but dust, and Allah turns to whoever repents. Directly after it (6440), Ubayy (RA) says: we used to consider this part of the Qur'an until alhakumu at-takathur came down. Ma'arif al-Qur'an offers an explanation: the Prophet ﷺ seems to have explained the verse in his own words, and some took those words for Qur'an until the surah was recited without them.",
            "bn": "বুখারী (৬৪৩৯) আনাস ইবন মালিক (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আদমসন্তানের যদি এক উপত্যকা ভরা সোনা থাকত, সে চাইত তার দুটি উপত্যকা হোক। মাটি ছাড়া কিছুই তার মুখ ভরাতে পারবে না। আর যে তওবা করে, আল্লাহ তার তওবা কবুল করেন। ঠিক তার পরেই (৬৪৪০) উবাই (রাঃ) বলেন: আমরা এ কথাকে কুরআনের অংশ মনে করতাম, যতক্ষণ না আলহাকুমুত তাকাসুর নাযিল হলো। মাআরিফুল কুরআন একটি ব্যাখ্যা দেয়: সম্ভবত নবী ﷺ নিজের ভাষায় আয়াতটির ব্যাখ্যা করেছিলেন। কেউ কেউ সেই কথাকে কুরআন ভেবেছিলেন, পরে পুরো সূরা তিলাওয়াত হলে দেখা গেল তাতে কথাগুলো নেই।"
          },
          {
            "en": "Ibn Kathir and al-Baghawi also attach a narration from al-Bukhari (6514). Anas ibn Malik (RA) reports that the Messenger of Allah ﷺ said: three follow the dead person; two return and one remains with him. His family, his wealth and his deeds follow him; his family and his wealth return, and his deeds remain. Read beside the surah, the hadiths agree on what a person really keeps. The tally of wealth walks back from the graveside with the mourners. Only what was given away, and what was done, goes on ahead.",
            "bn": "ইবন কাসীর ও বাগাভী বুখারীর (৬৫১৪) আরেকটি বর্ণনাও এখানে আনেন। আনাস ইবন মালিক (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: মৃতের পেছনে তিনটি জিনিস যায়, দুটি ফিরে আসে, একটি তার সঙ্গে থেকে যায়। তার পেছনে যায় পরিবার, সম্পদ আর আমল। পরিবার ও সম্পদ ফিরে আসে, থেকে যায় আমল। সূরার পাশে রেখে পড়লে হাদীসগুলো একই কথা বলে: মানুষের আসলে কী থাকে। সম্পদের হিসাব শোকযাত্রীদের সঙ্গে কবরের পাশ থেকে ফিরে আসে। সামনে যায় শুধু যা দান করা হয়েছে, আর যে আমল করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowing Comes After the Graves",
          "bn": "জানা হবে কবরের পরে"
        },
        "p": [
          {
            "en": "The surah does not stop at the graves. 102:3 to 102:8 follow: no indeed, you will come to know; then no indeed, you will come to know. No, if only you knew with the knowledge of certainty. You will surely see the Blaze, then you will surely see it with the eye of certainty, then you will surely be asked that Day about the delight. At-Tabari ties the first warning to the grave: Allah told these people, diverted by their rivalry, that they would know what they meet once they visit the graves.",
            "bn": "সূরা কবরে এসে থামে না। এরপর আসে ১০২:৩ থেকে ১০২:৮ আয়াত: কক্ষনো না, শীঘ্রই তোমরা জানবে। আবার বলি, কক্ষনো না, শীঘ্রই জানবে। কক্ষনো না, তোমরা যদি নিশ্চিত জ্ঞানে জানতে! তোমরা অবশ্যই জাহান্নাম দেখবে, তারপর তা দেখবে চাক্ষুষ নিশ্চয়তায়, তারপর সেদিন অবশ্যই নিয়ামত সম্পর্কে তোমাদের জিজ্ঞেস করা হবে। তাবারী প্রথম হুঁশিয়ারিটিকে কবরের সঙ্গে জোড়েন। তাঁর ব্যাখ্যায়, পাল্লায় মজে থাকা এই লোকদের আল্লাহ জানিয়ে দিয়েছেন, কবরে যাওয়ার পর তারা টের পাবে কিসের মুখোমুখি হচ্ছে।"
          },
          {
            "en": "From this at-Tabari draws evidence for the punishment of the grave, and cites 'Ali (RA) through Zirr: we kept doubting the punishment of the grave until alhakumu at-takathur was revealed. At-Tirmidhi (3355) records it in those words and grades it gharib, as Ibn Kathir also notes. As-Sa'di says the cover is lifted at the graves, but only once a fresh start can no longer be made. On the delight of 102:8, none of the tafsir fetched for these two verses attaches a hadith, so none is quoted here.",
            "bn": "এখান থেকে তাবারী কবরের আযাবের পক্ষে দলিল নেন। যির-এর সূত্রে তিনি আলী (রাঃ)-এর কথা আনেন: আলহাকুমুত তাকাসুর নাযিল হওয়া পর্যন্ত কবরের আযাব নিয়ে আমাদের সন্দেহ থেকেই গিয়েছিল। তিরমিযী (৩৩৫৫) কথাটি এই ভাষাতেই বর্ণনা করেছেন এবং একে গারীব বলেছেন, ইবন কাসীরও তা উল্লেখ করেন। সাদী বলেন, কবরে পৌঁছে পর্দা সরে যায়, কিন্তু তখন আর নতুন করে শুরু করার উপায় থাকে না। ১০২:৮ আয়াতের নিয়ামত প্রসঙ্গে এই দুটি আয়াতের জন্য সংগৃহীত কোনো তাফসীরে হাদীস যুক্ত নেই, তাই এখানে কোনো হাদীস উদ্ধৃত হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quran's Only Graveyards",
          "bn": "কুরআনে মাকাবিরের একমাত্র উল্লেখ"
        },
        "p": [
          {
            "en": "Al-Qurtubi points out that al-maqabir, the graveyards, is mentioned in the revelation only in this surah, and a search of the text bears him out. He then turns to visiting them, which he calls among the greatest medicines for a hard heart, since it brings death and the Hereafter to mind. At-Tirmidhi (1054) records from Buraydah (RA) that the Prophet ﷺ said: I had forbidden you from visiting the graves; Muhammad has been permitted to visit the grave of his mother, so visit them, for they remind of the Hereafter. At-Tirmidhi grades it hasan sahih.",
            "bn": "কুরতুবী দেখান, আল-মাকাবির, অর্থাৎ কবরস্থান শব্দটি গোটা ওহিতে শুধু এই সূরাতেই এসেছে। কুরআনের পাঠ মিলিয়ে দেখলেও কথাটা সত্য প্রমাণিত হয়। এরপর তিনি কবর যিয়ারতের কথায় যান। তাঁর ভাষায়, কঠিন হৃদয়ের জন্য এটি সবচেয়ে বড় ওষুধগুলোর একটি, কারণ তা মৃত্যু আর আখিরাতের কথা মনে করিয়ে দেয়। তিরমিযী (১০৫৪) বুরাইদা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: আমি তোমাদের কবর যিয়ারত করতে নিষেধ করেছিলাম। মুহাম্মাদকে তাঁর মায়ের কবর যিয়ারতের অনুমতি দেওয়া হয়েছে। অতএব তোমরা যিয়ারত করো, কারণ তা আখিরাতের কথা মনে করিয়ে দেয়। তিরমিযী একে হাসান সহীহ বলেছেন।"
          },
          {
            "en": "Al-Qurtubi then tells the visitor what to look at: people now under the dust who once led armies, competed with companions and clans, and gathered wealth and provisions, and whom death reached at an hour they had not reckoned on. Let the visitor know, he says, that his own leaning towards play is like theirs, and that he is bound for where they went. That turns the surah's opening into a practice. The counting of clans ended among the graves, and the graves are also where the counting can be unlearned.",
            "bn": "এরপর কুরতুবী যিয়ারতকারীকে বলে দেন কী দেখতে হবে। মাটির নিচে আজ যারা শুয়ে আছে, তারা একদিন সেনাবাহিনী চালিয়েছে, সঙ্গী আর গোত্রের সঙ্গে পাল্লা দিয়েছে, ধনসম্পদ আর সঞ্চয় জমিয়েছে। তারপর মৃত্যু এসেছে এমন সময়ে, যা তারা হিসাবেও ধরেনি। তিনি বলেন, যিয়ারতকারী জেনে রাখুক, খেলাধুলার দিকে তার ঝোঁক তাদেরই মতো, আর সে-ও চলেছে সেখানেই, যেখানে তারা গেছে। সূরার শুরুটা এভাবে হয়ে ওঠে এক অভ্যাস। গোত্রের গোনাগুনি শেষ হয়েছিল কবরস্থানে, আর গোনাগুনির নেশা ছাড়ানোর জায়গাও সেই কবরস্থান।"
          }
        ]
      }
    ]
  }
});
