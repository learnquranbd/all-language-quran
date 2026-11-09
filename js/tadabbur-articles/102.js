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
  },
  "102:6": {
    "sections": [
      {
        "h": {
          "en": "An Oath in Two Words",
          "bn": "দুই শব্দে এক শপথ"
        },
        "p": [
          {
            "en": "La-tarawunna al-jahim: you will surely see the Blaze. In Arabic the verse is two words, and its force sits in the grammar. The la- at the front and the doubled -nna at the end mark a sworn statement, and al-Qurtubi says so plainly: the verse rests on an implied oath. He calls it another threat, laid on top of the ones before it, and fixes its time: you will see the Jahim in the Hereafter.",
            "bn": "লাতারাউন্নাল জাহীম: তোমরা অবশ্যই জ্বলন্ত আগুন দেখবে। আরবিতে আয়াতটি মাত্র দুই শব্দের, আর এর জোর লুকিয়ে আছে ব্যাকরণে। শুরুর 'লা' আর শেষের দ্বিত্ব 'ন্না' শপথ করে বলা কথার চিহ্ন। কুরতুবী সোজাসুজি বলেন, আয়াতের ভেতরে একটি উহ্য শপথ আছে। তিনি একে বলেন আরেকটি হুমকি, আগেরগুলোর উপর নতুন করে চাপানো। সময়টাও তিনি বেঁধে দেন: আখিরাতে তোমরা জাহীম দেখবে।"
          },
          {
            "en": "Ibn Kathir reads the verse as a key to what came before. Twice the surah has said kalla sawfa ta'lamun, no indeed, you will come to know, without saying what would be known. This, he says, is the explanation of that threat: what they will come to know is the sight of the Fire. The Muyassar compresses 102:5 to 102:8 into a single line: you will surely behold the Jahim, then behold it beyond doubt.",
            "bn": "ইবন কাসীরের চোখে আয়াতটি আগের কথার চাবি। সূরাটি দুবার বলেছে কাল্লা সাওফা তা'লামূন, কক্ষনো না, শিগগিরই তোমরা জানবে। কিন্তু কী জানবে, তা বলেনি। ইবন কাসীর বলেন, এ আয়াত সেই হুমকির ব্যাখ্যা: তারা যা জানবে, তা হলো আগুনকে চোখে দেখা। মুয়াসসার ১০২:৫ থেকে ১০২:৮ পর্যন্ত এক বাক্যে গুটিয়ে আনে: তোমরা অবশ্যই জাহীম দেখবে, তারপর নিঃসন্দেহে দেখবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Warning Comes Twice",
          "bn": "সতর্কবাণী কেন দুবার"
        },
        "p": [
          {
            "en": "102:3 and 102:4 repeat a single sentence, the second time after thumma, then. At-Tabari glosses kalla as: this is not how you ought to act, letting rivalry divert you. He adds that when the Arabs wanted to make a warning harsher, they said the word twice. Al-Hasan al-Basri, in Ibn Kathir and in al-Baghawi (who pairs him with Muqatil), calls it a threat after a threat; al-Qurtubi gives the same words from Mujahid, and from al-Farra' the view that the repetition is for emphasis and severity.",
            "bn": "১০২:৩ ও ১০২:৪ আয়াতে একই বাক্য দুবার এসেছে, দ্বিতীয়বার সামনে 'সুম্মা', অর্থাৎ তারপর। তাবারী 'কাল্লা'-র অর্থ করেন এভাবে: প্রতিযোগিতা তোমাদের ভুলিয়ে রাখবে, এভাবে চলা তোমাদের সাজে না। তিনি যোগ করেন, আরবরা সতর্কবাণী আরও কঠোর করতে চাইলে শব্দটি দুবার বলত। ইবন কাসীর ও বাগাভী হাসান বসরীর কথা আনেন, বাগাভী তাঁর পাশে মুকাতিলকেও রাখেন: এ হলো হুমকির পর হুমকি। কুরতুবী একই কথা আনেন মুজাহিদ থেকে, আর ফাররা থেকে আনেন এ মত যে পুনরাবৃত্তি জোর আর কঠোরতার জন্য।"
          },
          {
            "en": "Others hear two different moments. Al-Qurtubi reports Ibn 'Abbas: you will know what comes down on you of punishment in the grave, then you will know in the Hereafter when the punishment falls; the first is the grave, the second the Hereafter, and the repetition covers both. He relays 'Ali (RA), through Zirr ibn Hubaysh, saying they doubted the punishment of the grave until this surah came down, a report already discussed under 102:1 and 102:2, and he reads the first warning as in the graves.",
            "bn": "কেউ কেউ এখানে দুটি আলাদা মুহূর্ত শোনেন। কুরতুবী ইবন আব্বাস (রাঃ)-এর কথা আনেন: কবরে তোমাদের উপর যে আযাব নামবে, তা তোমরা জানবে। তারপর আখিরাতে আযাব যখন নেমে আসবে, তখন জানবে। প্রথমটা কবরে, দ্বিতীয়টা আখিরাতে, তাই পুনরাবৃত্তি দুই অবস্থার জন্য। তিনি যির ইবন হুবাইশের সূত্রে আলী (রাঃ)-এর কথাও আনেন: এ সূরা নাযিল হওয়ার আগে তাঁরা কবরের আযাব নিয়ে সন্দেহে ছিলেন। রিওয়ায়াতটি ১০২:১ ও ১০২:২ আয়াতের আলোচনায় আগেই এসেছে। কুরতুবী এ থেকে প্রথম সতর্কবাণী বোঝেন কবরের প্রসঙ্গে।"
          },
          {
            "en": "Ad-Dahhak divides the people rather than the times. At-Tabari gives it with his chain: the first kalla sawfa ta'lamun, he said, is for the disbelievers; the second, for the believers. Al-Qurtubi, al-Baghawi and Ibn Kathir carry the same split. Al-Qurtubi and al-Baghawi report his recitation of the two verbs in opposite orders, so that detail is left aside. Emphasis, two stages, or two groups: the commentators keep these side by side, and so does this article.",
            "bn": "দাহহাক সময় নয়, মানুষ ভাগ করেন। তাবারী সনদসহ তাঁর কথা আনেন: প্রথম 'কাল্লা সাওফা তা'লামূন' কাফিরদের উদ্দেশে, দ্বিতীয়টি মুমিনদের উদ্দেশে। কুরতুবী, বাগাভী ও ইবন কাসীরও এই ভাগের কথা বলেন। দুটি ক্রিয়া দাহহাক কীভাবে পড়তেন, সে বিবরণ কুরতুবী আর বাগাভী দেন উল্টো ক্রমে, তাই সে প্রসঙ্গ এখানে বাদ রইল। জোর দেওয়া, দুই পর্যায়, নাকি দুই দল? তাফসীরকারেরা মতগুলো পাশাপাশি রেখেছেন, এ লেখাও তা-ই রাখল।"
          }
        ]
      },
      {
        "h": {
          "en": "If Only, and Then Silence",
          "bn": "যদি, তারপর নীরবতা"
        },
        "p": [
          {
            "en": "Then a third kalla, this time with law, if: no, if only you knew with the knowledge of certainty. Al-Qurtubi says the word returns as a rebuke because each time something new follows it, as if to say: do not, for you will regret it; do not, for you will earn the punishment. Both he and al-Baghawi note that the answer to law is left unsaid, and both set 'ilm al-yaqin beside haqq al-yaqin in 56:95. Al-Baghawi supplies the missing half: if you knew with certainty, what you knew would occupy you and leave no room for rivalry and boasting.",
            "bn": "তারপর তৃতীয় 'কাল্লা', এবার সঙ্গে 'লাও', অর্থাৎ যদি: কক্ষনো না, তোমরা যদি নিশ্চিত জ্ঞান দিয়ে জানতে! কুরতুবী বলেন, শব্দটি ধমক হয়ে বারবার ফিরে আসে, কারণ প্রতিবার তার পরে নতুন কিছু আসে। যেন বলা হচ্ছে: এমন কোরো না, পরে পস্তাবে; এমন কোরো না, শাস্তির যোগ্য হবে। তিনি আর বাগাভী দুজনেই বলেন, 'যদি'-র জবাবটা উহ্য রাখা হয়েছে। দুজনেই 'ইলমুল ইয়াকীন'-কে রাখেন ৫৬:৯৫ আয়াতের 'হাক্কুল ইয়াকীন'-এর পাশে। বাগাভী বাকি অর্ধেকটা পূরণ করে দেন: নিশ্চিতভাবে জানলে সেই জ্ঞানই তোমাদের ব্যস্ত রাখত, প্রতিযোগিতা আর অহংকারের কোনো জায়গা থাকত না।"
          },
          {
            "en": "What is the certainty? Qatada, in at-Tabari and al-Baghawi: we used to be told that the knowledge of certainty is to know that Allah will raise a person after death. Al-Qurtubi gives two more from Qatada: al-yaqin here is death, or else the resurrection, because when it comes, doubt is gone. As-Sa'di puts the matter in the heart: if you knew what lies ahead of you with a knowledge that reaches the heart, rivalry would not have diverted you, and you would have hurried to good deeds.",
            "bn": "এই নিশ্চয়তা কীসের? তাবারী ও বাগাভী কাতাদার কথা আনেন: আমাদের বলা হতো, ইলমুল ইয়াকীন মানে এ কথা জানা যে আল্লাহ মৃত্যুর পর মানুষকে আবার জীবিত করবেন। কুরতুবী কাতাদা থেকে আরও দুটি মত আনেন: এখানে ইয়াকীন মানে মৃত্যু, অথবা পুনরুত্থান, কারণ তা এসে গেলে আর কোনো সন্দেহ থাকে না। সা'দী কথাটা বলেন অন্তরের ভাষায়: সামনে যা আছে, তা যদি এমন জ্ঞানে জানতে যা হৃদয়ে পৌঁছায়, তবে প্রতিযোগিতা তোমাদের ভুলিয়ে রাখত না, তোমরা নেক আমলের দিকে ছুটে যেতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing It, or Being Shown It",
          "bn": "দেখবে, নাকি দেখানো হবে"
        },
        "p": [
          {
            "en": "The verb itself is read two ways. Most read la-tarawunna, with fatha on the ta: you will see. Al-Qurtubi and al-Baghawi report that Ibn 'Amir and al-Kisa'i read la-turawunna, with damma, from araytuhu ash-shay', I showed him the thing: you will be shown it. Al-Qurtubi spells out the picture behind that reading: you will be gathered to it, and so you will see it. For the majority reading both give the same gloss: you will see it with your own eyes, from a distance.",
            "bn": "ক্রিয়াটি নিজেই দুইভাবে পড়া হয়। অধিকাংশের পাঠ 'লাতারাউন্না', তা অক্ষরে যবর দিয়ে: তোমরা দেখবে। কুরতুবী ও বাগাভী জানান, ইবন আমির ও কিসাঈ পড়েছেন 'লাতুরাউন্না', পেশ দিয়ে, 'আরাইতুহুশ শাইআ' থেকে, অর্থাৎ আমি তাকে জিনিসটা দেখালাম। মানে দাঁড়ায়: তোমাদের তা দেখানো হবে। এ পাঠের পেছনের ছবিটা কুরতুবী খুলে বলেন: তোমাদের তার কাছে জড়ো করা হবে, ফলে তোমরা তা দেখবে। অধিকাংশের পাঠের ব্যাখ্যায় দুজনেই একই কথা বলেন: তোমরা নিজের চোখে দূর থেকে তা দেখবে।"
          },
          {
            "en": "At-Tabari's account is narrower. He names only al-Kisa'i, and has him read damma on the first verb and fatha on the second, in 102:7. He then gives his own preference, fatha in both, because the authorities he counts as proof agree on it. That is his weighting; al-Qurtubi and al-Baghawi report the other reading without rejecting it. Held side by side, the two readings add rather than compete: the Blaze will be seen, and those who see it will be brought to it and made to see it.",
            "bn": "তাবারীর বিবরণ আরও সংকীর্ণ। তিনি শুধু কিসাঈর নাম নেন, আর বলেন, কিসাঈ প্রথম ক্রিয়ায় পেশ আর ১০২:৭ আয়াতের দ্বিতীয়টিতে যবর পড়েছেন। এরপর তিনি নিজের পছন্দ জানান: দুটিতেই যবর, কারণ যাঁদের কথাকে তিনি দলীল মানেন, তাঁরা এতে একমত। এটা তাঁর বিচার। কুরতুবী ও বাগাভী অন্য পাঠটি উল্লেখ করেন, প্রত্যাখ্যান করেন না। দুটি পাঠ পাশাপাশি রাখলে একটি অন্যটির সঙ্গে লড়ে না, বরং যোগ করে: জাহীম দেখা যাবে, আর যারা দেখবে তাদের টেনে এনে দেখানো হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Eyes Will See It",
          "bn": "কার চোখ তা দেখবে"
        },
        "p": [
          {
            "en": "At-Tabari's gloss names the addressees: you will see, O polytheists, Jahannam on the Day of Resurrection, then see it openly, never absent from it. Ibn 'Abbas, in a report at-Tabari files under 102:7, says the same of the second seeing: it means the people of shirk. Al-Qurtubi's first view agrees: the address is to the disbelievers for whom the Fire has become due. As-Sa'di says you will arrive at the Resurrection and see the Jahim that Allah prepared for the disbelievers, and names the cause: it was the lack of real knowledge that brought you to what you will see.",
            "bn": "তাবারীর ব্যাখ্যায় সম্বোধিতদের পরিচয় আছে: হে মুশরিকরা, কিয়ামতের দিন তোমরা জাহান্নাম দেখবে, তারপর তা দেখবে প্রকাশ্যে, তার থেকে আড়ালে থাকতে পারবে না। ১০২:৭ আয়াতের অধীনে তাবারী ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা রাখেন। দ্বিতীয় দেখা সম্পর্কে সেখানেও একই কথা: এর অর্থ শিরককারীরা। কুরতুবীর প্রথম মতও তাই: সম্বোধন সেই কাফিরদের প্রতি, যাদের জন্য আগুন অবধারিত হয়ে গেছে। সা'দী বলেন, তোমরা কিয়ামতে উপস্থিত হবে আর দেখবে সেই জাহীম, যা আল্লাহ কাফিরদের জন্য প্রস্তুত রেখেছেন। কারণটাও তিনি বলে দেন: প্রকৃত জ্ঞান না থাকাই তোমাদের সেই পরিণতিতে পৌঁছে দিল, যা তোমরা দেখবে।"
          },
          {
            "en": "Al-Qurtubi then gives a second view, under qila: the address is general, as in 19:71, and there is none of you but will come to it. On that view the Fire is a home made ready for the disbelievers and a crossing for the believers, and he points to a hadith in the Sahih. Muslim (195) records it in a long narration: \"the first of you would pass with (the swiftness) of lightning\", and later, \"Then (they would pass) like the passing of the wind, then like the passing of a bird, and the hastening of persons would be according to their deeds.\"",
            "bn": "এরপর কুরতুবী 'বলা হয়' দিয়ে দ্বিতীয় মত আনেন: সম্বোধন সবার প্রতি, যেমন ১৯:৭১ আয়াতে আছে, তোমাদের এমন কেউ নেই যে সেখানে পৌঁছাবে না। এ মতে আগুন কাফিরদের জন্য প্রস্তুত আবাস, আর মুমিনদের জন্য পার হওয়ার পথ। এখানে তিনি সহীহের একটি হাদীসের দিকে ইঙ্গিত করেন। মুসলিম (১৯৫) এক দীর্ঘ বর্ণনার ভেতরে হাদীসটি এনেছেন: তোমাদের প্রথম দল পার হবে বিদ্যুতের গতিতে। কিছু পরে আছে: তারপর বাতাসের গতিতে, তারপর পাখির গতিতে, আর মানুষের দ্রুততা হবে তাদের আমল অনুযায়ী।"
          },
          {
            "en": "That hadith describes the crossing on that Day and was not narrated about this verse; the link is al-Qurtubi's, made under the general view. None of the tafsir fetched for 102:6 attaches a hadith narrated about these two words themselves. The two views of the address are left here as the commentators leave them. Both hold the sight itself to be certain; they differ only on whom the verse is speaking to.",
            "bn": "এ হাদীস সেদিনের পারাপারের বর্ণনা, এ আয়াত সম্পর্কে বর্ণিত নয়। যোগসূত্রটা কুরতুবীর, সাধারণ সম্বোধনের মতের অধীনে টানা। ১০২:৬ আয়াতের জন্য আনা কোনো তাফসীরে এই দুই শব্দ সম্পর্কে বর্ণিত কোনো হাদীস নেই। সম্বোধন কাদের প্রতি, এ নিয়ে দুই মত তাফসীরকারেরা যেভাবে রেখেছেন, এখানেও সেভাবেই রইল। দুই মতেই দেখাটা নিশ্চিত। পার্থক্য শুধু এতে যে আয়াত কার সঙ্গে কথা বলছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Heart's Eye, Then Head's Eye",
          "bn": "অন্তরের চোখ, তারপর মাথার চোখ"
        },
        "p": [
          {
            "en": "102:7 repeats the oath and adds two words: then you will surely see it with the eye of certainty, 'ayn al-yaqin. Al-Baghawi and al-Qurtubi gloss it as mushahada, witnessing; as-Sa'di as sight with the eyes, and he cites 18:53, where the guilty see the Fire, realise they will fall into it, and find no way to turn from it. Al-Qurtubi also relays, under qila, that the second seeing tells of their lasting stay in the Fire: a sight that continues without a break.",
            "bn": "১০২:৭ আয়াত শপথটা আবার করে, সঙ্গে যোগ করে আরও দুটি শব্দ: তারপর তোমরা অবশ্যই তা দেখবে আইনুল ইয়াকীন দিয়ে, নিশ্চয়তার চোখে। বাগাভী ও কুরতুবী এর অর্থ করেন মুশাহাদা, অর্থাৎ প্রত্যক্ষ দেখা। সা'দী বলেন, এ হলো চোখের দেখা, আর প্রমাণ আনেন ১৮:৫৩ আয়াত থেকে: অপরাধীরা আগুন দেখবে, বুঝবে তারা তাতে পড়তে যাচ্ছে, আর তা থেকে সরে যাওয়ার কোনো পথ পাবে না। কুরতুবী 'বলা হয়' দিয়ে আরও আনেন যে দ্বিতীয় দেখা আগুনে তাদের স্থায়ী অবস্থানের খবর: এমন দেখা যা চলতেই থাকবে, থামবে না।"
          },
          {
            "en": "The distinction between the two certainties is drawn in a view al-Qurtubi relays without naming who held it. If only you knew today, in this world, with the knowledge of certainty about what lies ahead, you would see the Jahim with the eyes of your hearts, since such knowledge pictures for the heart the stages of the Resurrection and the distances it crosses. Then you will see it with the eye of certainty: at the moment of seeing with the eye of the head, so that it never leaves your sight. On this reading, 102:6 is a sight of the heart, open in this life.",
            "bn": "দুই নিশ্চয়তার পার্থক্য এসেছে এমন এক মতে, যা কুরতুবী বর্ণনা করেন, তবে মতটি কার তা বলেন না। আজ এই দুনিয়াতেই যদি সামনের বিষয়ে তোমাদের ইলমুল ইয়াকীন থাকত, তবে তোমরা অন্তরের চোখে জাহীম দেখতে। কারণ এমন জ্ঞান হৃদয়ের সামনে কিয়ামতের পর্বগুলো আর তার দীর্ঘ পথ এঁকে দেয়। তারপর তোমরা তা দেখবে আইনুল ইয়াকীনে, অর্থাৎ যখন মাথার চোখে সরাসরি দেখবে, আর তা চোখের আড়াল হবে না। এ ব্যাখ্যায় ১০২:৬ আয়াতের দেখা হলো অন্তরের দেখা, যার দরজা এই জীবনেই খোলা।"
          },
          {
            "en": "Ma'arif al-Qur'an calls 'ayn al-yaqin the certainty gained by physical observation, and the highest degree of certainty. To show the gap between being told and seeing, it relays from Ahmad and at-Tabarani a report through Ibn 'Abbas concerning Musa (AS) and the calf. It is known here only through that relay and was not confirmed in a fetched collection, so this article names its topic and does not retell it.",
            "bn": "মাআরিফুল কুরআন বলে, আইনুল ইয়াকীন হলো চোখে দেখে পাওয়া নিশ্চয়তা, আর এটাই নিশ্চয়তার সর্বোচ্চ স্তর। শোনা আর দেখার ফারাক বোঝাতে কিতাবটি আহমাদ ও তাবারানী থেকে ইবন আব্বাস (রাঃ)-এর সূত্রে মূসা (আঃ) ও বাছুরের প্রসঙ্গে একটি বর্ণনা আনে। বর্ণনাটি এখানে শুধু এই উদ্ধৃতির মাধ্যমেই জানা, কোনো হাদীসগ্রন্থে মিলিয়ে দেখা যায়নি। তাই এখানে কেবল এর বিষয়টুকু বলা হলো, কাহিনিটি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Dates, Water and a Question",
          "bn": "খেজুর, পানি আর একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "The sequence closes in 102:8 with a question: then you will surely be asked that Day about an-na'im, the delight. At-Tabari: Allah will ask you about the delight you lived in during this world, what you did in it, how you came by it, where you obtained it and what you did with it. Ibn Kathir: about thanks for what Allah gave you of health, security, provision and the rest. As-Sa'di: whether you thanked Him for it and gave Him His due in it, or were deceived by it, or even used it to disobey Him.",
            "bn": "১০২:৮ আয়াতে এসে ধারাটা শেষ হয় একটি প্রশ্নে: তারপর সেদিন অবশ্যই তোমাদের জিজ্ঞেস করা হবে নাঈম, অর্থাৎ নিয়ামত সম্পর্কে। তাবারী বলেন, দুনিয়ায় যে নিয়ামতের মধ্যে তোমরা ছিলে, আল্লাহ সে সম্পর্কে জিজ্ঞেস করবেন: তাতে কী করেছ, কোন পথে তা পেয়েছ, কোথা থেকে জোগাড় করেছ, আর তা দিয়ে কী করেছ। ইবন কাসীরের মতে প্রশ্ন হবে শুকরিয়া নিয়ে, আল্লাহর দেওয়া সুস্থতা, নিরাপত্তা, রিযিক ইত্যাদির শুকরিয়া। সা'দী বলেন, জানতে চাওয়া হবে, তোমরা কি এর শুকরিয়া আদায় করেছিলে, এতে আল্লাহর হক দিয়েছিলে? নাকি এতে ধোঁকা খেয়েছিলে, এমনকি এ দিয়েই তাঁর নাফরমানি করেছিলে?"
          },
          {
            "en": "What the delight is, the commentators list in many forms. At-Tabari gives security and health, from Ibn Mas'ud and Mujahid; health of the body, the hearing and the sight, from Ibn 'Abbas, citing 17:36; and wellbeing, from others. Ibn Kathir relays Mujahid's every pleasure of this world and calls it the most comprehensive of the sayings. At-Tirmidhi (3356) records from az-Zubair (RA): \"O Messenger of Allah! Which are the delights that we will be asked about, when they (delights) are but the two black things: dates and water?\" The Prophet ﷺ said: \"But it is what shall come.\" At-Tirmidhi grades it hasan.",
            "bn": "নিয়ামত বলতে কী, তাফসীরকারেরা তার নানা রূপ গুনিয়েছেন। তাবারী ইবন মাসউদ (রাঃ) ও মুজাহিদ থেকে আনেন নিরাপত্তা আর সুস্থতা। ইবন আব্বাস (রাঃ) থেকে আনেন দেহ, শ্রবণ আর দৃষ্টির সুস্থতা, সঙ্গে ১৭:৩৬ আয়াতের প্রমাণ। অন্যদের থেকে আনেন আফিয়াত, অর্থাৎ নিরাপদ সুস্থ জীবন। ইবন কাসীর মুজাহিদের মত আনেন, দুনিয়ার প্রতিটি স্বাদ, আর বলেন এটাই সবচেয়ে ব্যাপক মত। তিরমিযী (৩৩৫৬) যুবাইর (রাঃ) থেকে বর্ণনা করেন: হে আল্লাহর রাসূল, কোন নিয়ামত সম্পর্কে আমাদের জিজ্ঞেস করা হবে? এ তো কেবল দুটি কালো জিনিস, খেজুর আর পানি! নবী ﷺ বললেন: তবে তা আসছে। তিরমিযী হাদীসটিকে হাসান বলেছেন।"
          },
          {
            "en": "Muslim (2038) records from Abu Hurayrah (RA) that the Prophet ﷺ went out one day or night and found Abu Bakr and 'Umar; hunger had brought them out, and he said the same had brought him out. An Ansari welcomed them with dates, slaughtered a sheep, and they ate and drank their fill. Then the Prophet ﷺ said to them: \"By Him in Whose Hand is my life, you will certainly be questioned about this bounty on the Day of judgment. Hunger brought you out of your house, then you did not return until this bounty came to you.\" Al-Qurtubi opens his comment on 102:8 with it.",
            "bn": "মুসলিম (২০৩৮) আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন: এক দিন বা এক রাতে নবী ﷺ বের হয়ে আবু বকর ও উমার (রাঃ)-কে পেলেন। ক্ষুধা তাঁদের ঘর থেকে বের করে এনেছিল, আর তিনি বললেন, তাঁকেও সেই একই জিনিস বের করেছে। এক আনসারী খেজুর দিয়ে তাঁদের আপ্যায়ন করলেন, একটি ভেড়া জবাই করলেন, আর তাঁরা পেট ভরে খেলেন ও পান করলেন। তখন নবী ﷺ তাঁদের বললেন: যাঁর হাতে আমার প্রাণ, তাঁর কসম, কিয়ামতের দিন এই নিয়ামত সম্পর্কে তোমাদের অবশ্যই জিজ্ঞেস করা হবে। ক্ষুধা তোমাদের ঘর থেকে বের করেছিল, আর এই নিয়ামত না পাওয়া পর্যন্ত তোমরা ফেরোনি। কুরতুবী ১০২:৮ আয়াতের আলোচনা এ হাদীস দিয়েই শুরু করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeing It While It Still Helps",
          "bn": "যখন দেখা এখনো কাজে আসে"
        },
        "p": [
          {
            "en": "Read in order, 102:5 to 102:8 move from a knowledge that would have helped, to a sight that will come regardless, to a question about the very things that once distracted. The verse at the centre is sworn, so the seeing is not in doubt; only its timing and its use are. On the view al-Qurtubi relays, there is a seeing of the Jahim open now, with the heart, while it can still change what a person spends a day chasing, and a seeing later that changes nothing.",
            "bn": "১০২:৫ থেকে ১০২:৮ পর্যন্ত পরপর পড়লে একটা ধারা চোখে পড়ে। প্রথমে এমন জ্ঞান, যা কাজে আসত। তারপর এমন দেখা, যা আসবেই। শেষে প্রশ্ন, ঠিক সেই জিনিসগুলো নিয়ে যা একদিন ভুলিয়ে রেখেছিল। মাঝের আয়াতটি শপথ করে বলা, তাই দেখা নিয়ে সংশয় নেই। প্রশ্ন শুধু কখন, আর কী কাজে। কুরতুবীর বর্ণিত মত অনুযায়ী জাহীমের এক দেখা এখনই খোলা, অন্তর দিয়ে, যখন তা মানুষের সারাদিনের ছুটে চলার দিক বদলে দিতে পারে। আরেক দেখা আসবে পরে, যা কিছুই বদলাবে না।"
          },
          {
            "en": "The verse describes what the text describes: a threat and a scene of the next life, addressed in at-Tabari's reading to polytheists diverted by rivalry. It licenses nothing against any living person or community. It gives no one the right to say who will see the Fire as a home and who as a crossing; al-Qurtubi himself leaves that question with two views. Its warning is turned first on the reader, who also counts, compares and puts off what matters.",
            "bn": "আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: আখিরাতের এক হুমকি আর এক দৃশ্য। তাবারীর ব্যাখ্যায় এর সম্বোধন প্রতিযোগিতায় মত্ত মুশরিকদের প্রতি। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কে আগুনকে আবাস হিসেবে দেখবে আর কে পারাপারের পথ হিসেবে, তা বলে দেওয়ার অধিকার এ আয়াত কাউকে দেয় না। কুরতুবী নিজেও প্রশ্নটি দুই মতের মধ্যে রেখে দিয়েছেন। এর সতর্কবাণী সবার আগে পাঠকের দিকেই ফেরানো, কারণ তিনিও গোনেন, তুলনা করেন, আর জরুরি কাজ পিছিয়ে রাখেন।"
          }
        ]
      }
    ]
  }
});
