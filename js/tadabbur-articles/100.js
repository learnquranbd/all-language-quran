/**
 * Tadabbur long-form articles — surah 100.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "100:2": {
    "sections": [
      {
        "h": {
          "en": "The Second Oath of the Run",
          "bn": "ছুটে চলার দ্বিতীয় শপথ"
        },
        "p": [
          {
            "en": "Fa-l-muriyati qadha: then by those that strike out fire, striking. In Arabic it is two words, and it stands between 100:1, the oath by al-'adiyat dabha, the runners that pant, and 100:3, the oath by those that raid at dawn. The particle fa ties it to what came before, so the striking follows the running. Ibn Kathir, in the English abridgement, places the answer to the whole chain of oaths at 100:6, man is ungrateful to his Lord, which he calls the subject of what is sworn about.",
            "bn": "ফাল মূরিয়াতি কাদহা: অতঃপর শপথ তাদের, যারা আঘাত করে আগুন ঠিকরে বের করে। আরবিতে আয়াতটি মাত্র দুই শব্দের। এর আগে ১০০:১, আল-আদিয়াতি দাবহা: হাঁপাতে হাঁপাতে যারা ছোটে, তাদের শপথ। পরে ১০০:৩, ভোরবেলা যারা হামলা চালায়, তাদের শপথ। শুরুর ফা অব্যয়টি আয়াতটিকে আগের কথার সঙ্গে জুড়ে দেয়, তাই দৌড়ের পরেই আসে আঘাত। ইংরেজি সংক্ষেপে ইবন কাসীর শপথের পুরো ধারার জবাব ধরেন ১০০:৬ আয়াতকে: মানুষ তার রবের প্রতি বড়ই অকৃতজ্ঞ। তাঁর ভাষায়, এটিই সেই কথা, যার ওপর শপথ করা হয়েছে।"
          },
          {
            "en": "The shortest commentaries give the plain picture. The Muyassar: horses from the hardness of whose hooves fire is struck, because of how hard they run. As-Sa'di: al-muriyat are those that strike with their hooves the stones they tread on, and qadha means that fire is struck out from the hardness of their hooves and their strength when they run. Kanud in 100:6 has its own article in this module; this article stays with the spark.",
            "bn": "সবচেয়ে সংক্ষিপ্ত তাফসীরগুলো সাদামাটা ছবিটাই দেয়। মুয়াসসার বলে: সেই ঘোড়াগুলো, প্রচণ্ড বেগে ছোটার কারণে যাদের শক্ত খুর থেকে আগুন ঠিকরে বের হয়। সা'দী বলেন: আল-মূরিয়াত হলো তারা, যারা চলার পথে পাথরে খুর দিয়ে আঘাত করে। আর কাদহা মানে, ছোটার সময় খুরের কাঠিন্য আর শক্তির জোরে আগুন ঠিকরে ওঠে। ১০০:৬ আয়াতের কানূদ শব্দ নিয়ে এই মডিউলে আলাদা প্রবন্ধ আছে। এ প্রবন্ধ থাকবে স্ফুলিঙ্গটুকু নিয়েই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Qadh Draws Out",
          "bn": "কাদহ যা টেনে বের করে"
        },
        "p": [
          {
            "en": "Al-Qurtubi starts with the root. The origin of qadh, he says, is istikhraj, drawing something out. Hence qadahtu al-'ayn, said when bad fluid is drawn from an eye, iqtadahtu bi-z-zand for striking fire with the fire-steel, and iqtadahtu al-maraq for ladling out broth. The miqdahah is the tool with which fire is struck, and al-qaddahah is the stone that gives off fire. The verb behind al-muriyat is wara: wara az-zand is said when the fire-steel's fire comes out.",
            "bn": "কুরতুবী শুরু করেন ধাতু থেকে। তাঁর মতে কাদহ শব্দের মূল অর্থ ইসতিখরাজ, অর্থাৎ ভেতর থেকে কিছু টেনে বের করা। তাই চোখ থেকে নষ্ট পানি বের করাকে বলা হয় কাদাহতুল আইন। চকমকি ঠুকে আগুন জ্বালানোকে বলা হয় ইকতাদাহতু বিয যান্দ। হাঁড়ি থেকে ঝোল তুলে নেওয়াকেও বলা হয় ইকতাদাহতুল মারাক। মিকদাহা সেই যন্ত্র, যা দিয়ে আগুন ঠোকা হয়। আর কাদ্দাহা সেই পাথর, যা থেকে আগুন বের হয়। মূরিয়াত শব্দের পেছনের ক্রিয়া ওয়ারা। চকমকি থেকে আগুন বেরিয়ে এলে বলা হয় ওয়ারায যান্দ।"
          },
          {
            "en": "He adds that qadhan takes its accusative from whatever gives dabhan its accusative in the verse before, so the two oaths are cut to one pattern, and that he has dealt with the word already in Surat al-Waqi'ah. At-Tabari's own summary pairs the same two words: Allah swore by al-muriyat that strike out fires, qadhan, by striking. The verse names an action and leaves its doer unnamed; who does the striking is the point on which the commentators part ways.",
            "bn": "কুরতুবী আরও বলেন, আগের আয়াতের দাবহান শব্দ যে কারণে নসব পেয়েছে, কাদহান শব্দও সে কারণেই নসব পেয়েছে। ফলে দুই শপথ একই ছাঁচে গড়া। শব্দটি নিয়ে তিনি আগেই সূরা আল-ওয়াকিআয় আলোচনা করেছেন বলেও জানান। তাবারীর নিজের সারকথাতেও এই দুই শব্দ জোড়া বেঁধে আসে: আল্লাহ শপথ করেছেন সেই মূরিয়াতের, যারা ঠুকে ঠুকে আগুন বের করে। আয়াত কাজটির নাম বলে, কিন্তু কে কাজটি করে তা বলে না। আঘাতটা কে করছে, ঠিক এখানেই তাফসীরকারদের পথ আলাদা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hooves Against the Rock",
          "bn": "পাথরের গায়ে খুরের আঘাত"
        },
        "p": [
          {
            "en": "The first reading at-Tabari records is that these are horses striking fire with their hooves. 'Ikrimah, asked about the verse, answered: they kindled and they struck. Qatadah said: they are the horses, and al-Kalbi added that they strike with their hooves until fire comes out of them. 'Ata' said they kindled fire with their hooves, and ad-Dahhak that they make the stones give fire with their hooves. Al-Baghawi lists 'Ikrimah, 'Ata', ad-Dahhak, Muqatil and al-Kalbi for it, adding: when they travel over stones.",
            "bn": "তাবারী প্রথম যে ব্যাখ্যা উল্লেখ করেন, তা হলো এরা ঘোড়া, যারা খুর দিয়ে আগুন ঠোকে। ইকরিমাকে আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন: তারা আগুন জ্বালাল, তারা ঠুকল। কাতাদা বলেন: এরা ঘোড়া। কালবী যোগ করেন: খুর দিয়ে এমনভাবে ঠোকে যে তা থেকে আগুন বের হয়। আতা বলেন, তারা খুর দিয়ে আগুন জ্বালায়। দাহহাক বলেন, তারা খুর দিয়ে পাথর থেকে আগুন বের করে। বাগাভী এ মতের পক্ষে ইকরিমা, আতা, দাহহাক, মুকাতিল ও কালবীর নাম নেন, সঙ্গে জুড়ে দেন: যখন তারা পাথুরে পথে চলে।"
          },
          {
            "en": "Ibn Kathir's Arabic text describes the clash of their hooves, literally their shoes, against rock, so that fire is struck from it, and notes that most of those he had named said: with their hooves. His English abridgement says the striking of their hooves on the rocks causes sparks of fire to fly from them. Al-Qurtubi gives the horse reading from 'Ikrimah, 'Ata' and ad-Dahhak as well, naming the front of the hoof, and says it is also narrated from Ibn 'Abbas.",
            "bn": "ইবন কাসীরের আরবি পাঠে আছে, পাথরের গায়ে তাদের খুর ঠোকার কথা। খুর বোঝাতে সেখানে যে শব্দ, তার আক্ষরিক অর্থ জুতা। সেই ঠোকাঠুকিতে পাথর থেকে আগুন বের হয়। তিনি এ-ও জানান, আগে যাঁদের নাম তিনি নিয়েছেন, তাঁদের বেশির ভাগ বলেছেন: খুর দিয়ে। তাঁর ইংরেজি সংক্ষেপে আছে, পাথরে খুরের আঘাতে আগুনের স্ফুলিঙ্গ ছিটকে ওঠে। কুরতুবীও ইকরিমা, আতা ও দাহহাকের সূত্রে ঘোড়ার ব্যাখ্যাটি দেন, আর খুরের সামনের অংশের কথা বলেন। তিনি জানান, ইবন আব্বাস (রাঃ) থেকেও এটি বর্ণিত।"
          },
          {
            "en": "Al-Qurtubi keeps a further detail from Muqatil: the Arabs called that fire nar Abi Hubahib. Abu Hubahib, he reports, was an old man of Mudar in the Jahiliyyah, among the stingiest of people. He lit no fire for bread or anything else until eyes were asleep, then lit a small flame that flared and died down, and if anyone woke he put it out, unwilling that anyone should benefit from it. The Arabs likened the hoof-spark to his fire, al-Qurtubi says, because no benefit is had from it.",
            "bn": "কুরতুবী মুকাতিলের কাছ থেকে আরেকটি খুঁটিনাটি তুলে রাখেন। আরবরা ওই আগুনকে বলত নারু আবী হুবাহিব। তাঁর বর্ণনায় আবু হুবাহিব ছিল জাহিলি যুগে মুদার গোত্রের এক বুড়ো, মানুষের মধ্যে সবচেয়ে কৃপণদের একজন। রুটি সেঁকা বা অন্য কোনো কাজে সে আগুন জ্বালাত না, যতক্ষণ না সবার চোখে ঘুম নামত। তারপর ছোট্ট একটা শিখা জ্বালাত, যা একবার জ্বলে উঠে আবার নিভে আসত। কেউ জেগে উঠলে সে তা নিভিয়ে দিত, পাছে অন্য কেউ এর উপকার পায়। কুরতুবী বলেন, খুরের স্ফুলিঙ্গকে আরবরা তার আগুনের সঙ্গে তুলনা করত, কারণ তা থেকে কোনো উপকার মেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Horses or Camels of Hajj",
          "bn": "ঘোড়া, নাকি হজের উট"
        },
        "p": [
          {
            "en": "Whether 100:2 belongs to the same runners as 100:1 depends on who those runners are, and on that the early authorities divided. At-Tabari, on 100:1, reports the horse reading from Ibn 'Abbas, Mujahid, 'Ikrimah, 'Ata', Qatadah and ad-Dahhak, and the camel reading from 'Abdullah, that is Ibn Mas'ud, through Ibrahim, from Ibrahim himself, and from 'Ubayd ibn 'Umayr. Al-Qurtubi gives horses from Ibn 'Abbas, Anas, al-Hasan and Mujahid, and camels from 'Ali, with whom, he says, Ibn Mas'ud, 'Ubayd ibn 'Umayr, Muhammad ibn Ka'b and as-Suddi agreed.",
            "bn": "১০০:২ আয়াত কি ১০০:১ আয়াতের সেই একই ছুটন্তদের কথা বলছে? উত্তর নির্ভর করে ছুটন্তরা কারা তার ওপর, আর এ প্রশ্নে পূর্বসূরিরা দুই ভাগ হয়েছিলেন। তাবারী ১০০:১ আয়াতের আলোচনায় ঘোড়ার মত বর্ণনা করেন ইবন আব্বাস (রাঃ), মুজাহিদ, ইকরিমা, আতা, কাতাদা ও দাহহাক থেকে। উটের মত বর্ণনা করেন ইবরাহীমের সূত্রে আবদুল্লাহ, অর্থাৎ ইবন মাসউদ (রাঃ) থেকে, ইবরাহীমের নিজের কথা থেকে এবং উবায়দ ইবন উমায়র থেকে। কুরতুবী ঘোড়ার মত দেন ইবন আব্বাস (রাঃ), আনাস (রাঃ), হাসান ও মুজাহিদ থেকে। উটের মত দেন আলী (রাঃ) থেকে, আর বলেন, ইবন মাসউদ (রাঃ), উবায়দ ইবন উমায়র, মুহাম্মাদ ইবন কা'ব ও সুদ্দী তাঁর সঙ্গে একমত।"
          },
          {
            "en": "On this verse the camel reading has its own picture. At-Tabari reports from 'Abdullah: when the camels scatter the pebbles with the pads of their feet, the pebbles strike one another and fire comes out of them. Al-Qurtubi gives Ibn Mas'ud's words as: the camels tread on the pebbles and fire comes out of them. Al-Qurtubi also reports, through Ibn Abi Najih from Mujahid, that Ibn 'Abbas said of the opening oaths: it is in fighting, and it is in Hajj. At-Tabari, on 100:1, gives that route with the first clause from Ibn 'Abbas and the second from Ibn Mas'ud.",
            "bn": "এই আয়াতে উটের ব্যাখ্যার নিজস্ব একটা ছবি আছে। তাবারী আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন: উট যখন পায়ের তলা দিয়ে নুড়িপাথর ছিটিয়ে দেয়, তখন নুড়িগুলো একটা আরেকটার গায়ে লাগে আর তা থেকে আগুন বের হয়। কুরতুবীর বর্ণনায় ইবন মাসউদ (রাঃ)-এর কথা এমন: উট নুড়ি মাড়িয়ে যায়, আর তা থেকে আগুন বের হয়। কুরতুবী ইবন আবী নাজীহের সূত্রে মুজাহিদ থেকে আরও বর্ণনা করেন, প্রথম শপথগুলো সম্পর্কে ইবন আব্বাস (রাঃ) বলেছেন: এটা যুদ্ধের ব্যাপারে, আবার হজের ব্যাপারেও। তাবারী ১০০:১ আয়াতে একই সূত্রে কথাটি দুই ভাগে দেন: প্রথম অংশ ইবন আব্বাস (রাঃ)-এর, দ্বিতীয় অংশ ইবন মাসউদ (রাঃ)-এর।"
          },
          {
            "en": "At-Tabari judges the horse reading the sounder of the two on 100:1, because camels do not pant, dabh, and only horses do, and Allah described these runners as running with dabh. He also records from 'Ali, through Abu Salih, a distinction: dabh in horses is their snorting, and in camels it is breath. Ibn Kathir, on 100:1, likewise puts Ibrahim and 'Ubayd ibn 'Umayr with 'Ali, Mujahid and the others named above with Ibn 'Abbas, and notes that Ibn Jarir chose the latter.",
            "bn": "১০০:১ আয়াতে তাবারী ঘোড়ার ব্যাখ্যাকেই দুইয়ের মধ্যে বেশি সঠিক ধরেন। তাঁর যুক্তি, উট দাবহ করে না, অর্থাৎ ছুটতে গিয়ে ওভাবে হাঁপায় না। দাবহ করে ঘোড়া, আর আল্লাহ এই ছুটন্তদের বর্ণনা দিয়েছেন দাবহ সহকারে ছোটা বলে। আবু সালিহের সূত্রে তিনি আলী (রাঃ)-এর একটি পার্থক্যও উল্লেখ করেন: ঘোড়ার দাবহ হলো তার নাক ঝাড়ার মতো শব্দ, আর উটের দাবহ হলো শ্বাস। ইবন কাসীরও ১০০:১ আয়াতে ইবরাহীম ও উবায়দ ইবন উমায়রকে রাখেন আলী (রাঃ)-এর পক্ষে, আর মুজাহিদসহ ওপরে উল্লিখিত অন্যদের রাখেন ইবন আব্বাস (রাঃ)-এর পক্ষে। তিনি জানান, ইবন জারীর বেছে নিয়েছেন শেষোক্ত মত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Beside Zamzam",
          "bn": "যমযমের পাশে এক প্রশ্ন"
        },
        "p": [
          {
            "en": "The fullest form of the dispute is a report at-Tabari gives through Yunus, from Ibn Wahb, from Abu Sakhr, from Abu Mu'awiyah al-Bajali, from Sa'id ibn Jubayr, from Ibn 'Abbas. Ibn 'Abbas said he was sitting in the Hijr when a man asked him about al-'adiyat dabha. He answered: the horses when they raid in the path of Allah, then shelter for the night, prepare their food and kindle their fires. The man left him and went to 'Ali, who was under the watering place of Zamzam, and asked him.",
            "bn": "বিবাদটির সবচেয়ে পূর্ণাঙ্গ রূপ পাওয়া যায় তাবারীর একটি বর্ণনায়। সূত্রটি এমন: ইউনুস, ইবন ওয়াহব থেকে, তিনি আবু সাখর থেকে, তিনি আবু মুআবিয়া আল-বাজালী থেকে, তিনি সাঈদ ইবন জুবায়র থেকে, তিনি ইবন আব্বাস (রাঃ) থেকে। ইবন আব্বাস (রাঃ) বলেন, তিনি হিজরে বসে ছিলেন, এমন সময় এক লোক এসে আল-আদিয়াতি দাবহা সম্পর্কে জানতে চাইল। তিনি বললেন: সেই ঘোড়াগুলো, যারা আল্লাহর পথে অভিযানে বের হয়, তারপর রাতে আশ্রয় নেয়, লোকেরা খাবার রান্না করে আর আগুন জ্বালায়। লোকটি তাঁর কাছ থেকে উঠে আলী (রাঃ)-এর কাছে গেল। তিনি তখন যমযমের পানি পান করানোর জায়গার নিচে ছিলেন। লোকটি তাঁকেও একই প্রশ্ন করল।"
          },
          {
            "en": "'Ali asked whether he had put the question to anyone before him, and on hearing Ibn 'Abbas's answer sent for him. Standing over him, 'Ali said, in at-Tabari's wording: you give people rulings on what you have no knowledge of. By Allah, the first expedition in Islam was Badr, and we had only two horses with us, a horse for az-Zubayr and a horse for al-Miqdad, so how could it be al-'adiyat dabha? Al-'adiyat dabha are only from 'Arafah to Muzdalifah to Mina. Ibn 'Abbas said: so I withdrew my view and returned to what 'Ali had said.",
            "bn": "আলী (রাঃ) জিজ্ঞেস করলেন, তাঁর আগে আর কাউকে সে প্রশ্নটা করেছে কি না। ইবন আব্বাস (রাঃ)-এর উত্তর শুনে তিনি তাঁকে ডেকে পাঠালেন। তিনি এলে আলী (রাঃ) তাঁর সামনে দাঁড়িয়ে বললেন, তাবারীর ভাষায়: যে বিষয়ে তোমার জ্ঞান নেই, সে বিষয়ে তুমি মানুষকে ফতোয়া দিচ্ছ? আল্লাহর কসম, ইসলামের প্রথম যুদ্ধ ছিল বদর, আর তখন আমাদের সঙ্গে মাত্র দুটি ঘোড়া ছিল, একটি যুবায়র (রাঃ)-এর, একটি মিকদাদ (রাঃ)-এর। তাহলে আল-আদিয়াতি দাবহা ঘোড়া হয় কী করে? আল-আদিয়াতি দাবহা তো আরাফা থেকে মুযদালিফা, মুযদালিফা থেকে মিনা। ইবন আব্বাস (রাঃ) বলেন: তখন আমি আমার মত থেকে সরে এলাম এবং আলী (রাঃ)-এর কথায় ফিরে গেলাম।"
          },
          {
            "en": "Ibn Kathir gives the same report from Ibn Abi Hatim and Ibn Jarir, and adds, by the same chain, words of 'Ali that bear directly on this verse: when they come to rest at Muzdalifah, they kindle the fires. Neither he nor at-Tabari attaches a grading to the report in the texts consulted here, and at-Tabari still preferred horses on 100:1. None of the tafsirs consulted for 100:2 attaches a Prophetic hadith to the verse.",
            "bn": "ইবন কাসীর একই বর্ণনা আনেন ইবন আবী হাতিম ও ইবন জারীরের সূত্রে। একই সনদে তিনি আলী (রাঃ)-এর এমন একটি কথাও যোগ করেন, যা সরাসরি এই আয়াতের সঙ্গে জড়িত: তারা যখন মুযদালিফায় এসে থামে, তখন আগুন জ্বালায়। এখানে যে পাঠগুলো আনা হয়েছে, তাতে ইবন কাসীর বা তাবারী কেউই বর্ণনাটির মান উল্লেখ করেননি। আর তাবারী ১০০:১ আয়াতে তবু ঘোড়ার মতকেই অগ্রাধিকার দিয়েছেন। ১০০:২ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদিস যুক্ত করেনি।"
          },
          {
            "en": "The texts also keep the dispute in other shapes. Ibn Kathir has a short version in which, after 'Ali's objection that they had no horses at Badr, Ibn 'Abbas replies that it concerned a raiding party that was sent out. Al-Qurtubi gives it through ash-Sha'bi, with Ibn 'Abbas arguing from 100:4, and they raise dust thereby: do they raise it with anything but their hooves, and do camels pant? 'Ali answers with Badr, and al-Qurtubi's text ends with Ibn 'Abbas returning to 'Ali's view.",
            "bn": "পাঠগুলোতে বিবাদটি অন্য রূপেও সংরক্ষিত আছে। ইবন কাসীরের এক সংক্ষিপ্ত বর্ণনায় আলী (রাঃ) আপত্তি তোলেন, বদরের দিন তাঁদের ঘোড়া ছিল না। জবাবে ইবন আব্বাস (রাঃ) বলেন, কথাটা ছিল পাঠানো এক ছোট অভিযানের ব্যাপারে। কুরতুবী বর্ণনাটি আনেন শা'বীর সূত্রে। সেখানে ইবন আব্বাস (রাঃ) যুক্তি দেন ১০০:৪ আয়াত থেকে, তারা তা দিয়ে ধুলো ওড়ায়: খুর ছাড়া আর কী দিয়ে তারা ধুলো ওড়াবে? আর উট কি দাবহ করে? আলী (রাঃ) জবাব দেন বদরের কথা তুলে। কুরতুবীর পাঠ শেষ হয় এভাবে যে ইবন আব্বাস (রাঃ) আলী (রাঃ)-এর মতে ফিরে যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Sparks Without Any Hooves",
          "bn": "খুর ছাড়াই যে স্ফুলিঙ্গ"
        },
        "p": [
          {
            "en": "Not every early reading took the sparks literally. At-Tabari reports through two chains that Qatadah said: they stirred up war between them and their enemy. Al-Baghawi gives Qatadah's words as the horses stirring up war and the fire of enmity between their riders. Al-Qurtubi explains this reading with the Arab phrase for a battle at its height, hamiya al-watis, the oven has grown hot, and with 5:64: every time they kindled a fire for war, Allah put it out.",
            "bn": "পূর্বসূরিদের সব ব্যাখ্যা স্ফুলিঙ্গকে আক্ষরিক অর্থে নেয়নি। তাবারী দুটি সূত্রে কাতাদার কথা বর্ণনা করেন: তারা নিজেদের আর শত্রুদের মধ্যে যুদ্ধ উসকে দিয়েছিল। বাগাভীর বর্ণনায় কাতাদার কথা এমন: ঘোড়াগুলো তাদের সওয়ারিদের মধ্যে যুদ্ধ আর শত্রুতার আগুন উসকে দেয়। কুরতুবী এ ব্যাখ্যা বোঝান আরবদের একটি কথা দিয়ে। যুদ্ধ যখন তুঙ্গে ওঠে, তারা বলে হামিয়াল ওয়াতীস, অর্থাৎ চুলা গরম হয়ে গেছে। সঙ্গে আনেন ৫:৬৪ আয়াত: যখনই তারা যুদ্ধের আগুন জ্বালায়, আল্লাহ তা নিভিয়ে দেন।"
          },
          {
            "en": "Another group read the verse as the scheming of men. At-Tabari reports it from Ibn 'Abbas, who said: scheming, and from Mujahid, who said: the scheming of men. Al-Baghawi names Mujahid and Zayd ibn Aslam, glosses the men as men of war, and cites an idiom the Arabs used when a man meant to outwit his companion: by Allah, I will strike for you, then I will kindle for you. Al-Qurtubi records a related saying, that the verse means men's thoughts, which kindle the fire of scheming and deceit.",
            "bn": "আরেক দল আয়াতটিকে মানুষের চক্রান্ত অর্থে নিয়েছেন। তাবারী এটি বর্ণনা করেন ইবন আব্বাস (রাঃ) থেকে, তিনি বলেন: চক্রান্ত। আর মুজাহিদ থেকে, তিনি বলেন: মানুষের চক্রান্ত। বাগাভী মুজাহিদ ও যায়দ ইবন আসলামের নাম নেন এবং ব্যাখ্যা করেন, এখানে মানুষ মানে যুদ্ধের লোক। তিনি আরবদের একটি বাগধারাও আনেন। কেউ সঙ্গীকে কৌশলে হারাতে চাইলে বলত: আল্লাহর কসম, তোমার জন্য আমি ঠুকব, তারপর আগুন জ্বালাব। কুরতুবী এর কাছাকাছি আরেকটি মত উল্লেখ করেন: এখানে উদ্দেশ্য মানুষের চিন্তা, যা চক্রান্ত আর প্রতারণার আগুন জ্বালায়।"
          },
          {
            "en": "'Ikrimah gave yet another: they are the tongues. At-Tabari reports it with the words it is said of this verse. Al-Qurtubi expands 'Ikrimah's saying: the tongues of men strike fire by the weight of what they speak, by setting out proofs and evidence, making the truth clear and showing falsehood to be false. Muhammad ibn Ka'b, in al-Baghawi and al-Qurtubi, said it is the fire that is gathered.",
            "bn": "ইকরিমা দিয়েছেন আরেকটি ব্যাখ্যা: এরা জিহ্বা। তাবারী এটি আনেন 'এ আয়াত সম্পর্কে বলা হয়' কথাটি দিয়ে। কুরতুবী ইকরিমার কথাটি আরও খুলে বলেন: মানুষের জিহ্বা আগুন ঠোকে তাদের কথার গুরুত্ব দিয়ে, দলিল-প্রমাণ দাঁড় করিয়ে, সত্যকে স্পষ্ট করে আর মিথ্যাকে বাতিল প্রমাণ করে। বাগাভী ও কুরতুবীর বর্ণনায় মুহাম্মাদ ইবন কা'ব বলেছেন, এ হলো একত্র করা আগুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Literal Sense or Every Spark",
          "bn": "আক্ষরিক অর্থ, নাকি সব স্ফুলিঙ্গ"
        },
        "p": [
          {
            "en": "The commentators who weigh these readings do not weigh them alike. At-Tabari, in his text on this verse, says the soundest view is that Allah swore by al-muriyat that strike out fires: horses do it with their hooves, people with the fire-steel, the tongue, as an illustration, with speech, men, as an illustration, with scheming, and horses stir up war between their people when they meet. Since Allah set no sign that some of these are meant and not others, everything that strikes out fire falls within the oath, by the general sense of the words.",
            "bn": "যাঁরা এসব ব্যাখ্যা যাচাই করেছেন, তাঁরা সবাই একভাবে যাচাই করেননি। তাবারী এই আয়াতের আলোচনায় বলেন, সবচেয়ে সঠিক কথা হলো: আল্লাহ শপথ করেছেন সেই মূরিয়াতের, যারা ঠুকে আগুন বের করে। ঘোড়া তা করে খুর দিয়ে, মানুষ চকমকি দিয়ে। দৃষ্টান্ত হিসেবে বললে জিহ্বা তা করে কথা দিয়ে, মানুষ করে চক্রান্ত দিয়ে। আর যুদ্ধের ময়দানে মুখোমুখি হলে ঘোড়া নিজের লোকদের মধ্যে যুদ্ধ উসকে দেয়। আল্লাহ এমন কোনো ইঙ্গিত রাখেননি যে এর কিছু উদ্দেশ্য আর কিছু নয়। তাই শব্দের বাহ্যিক ব্যাপকতার কারণে, ঠুকে আগুন বের করে এমন সবকিছুই শপথের ভেতরে পড়ে।"
          },
          {
            "en": "Al-Qurtubi takes a different line. After listing the figurative readings he says: these sayings are majaz, figurative, as when it is said that someone strikes the fire-steel of misguidance; the first is the haqiqah, the literal sense, that horses, from the force of their running, strike fire with their hooves. Ibn Kathir's Arabic text reports Ibn Jarir as saying that the correct view is the first, the horses striking with their hooves. That differs from the at-Tabari text consulted for this verse; both stand here as given.",
            "bn": "কুরতুবী অন্য পথ ধরেন। রূপক ব্যাখ্যাগুলো উল্লেখ করার পর তিনি বলেন: এসব কথা মাজায, অর্থাৎ রূপক। যেমন বলা হয়, অমুক গোমরাহির চকমকি ঠুকছে। আর প্রথম কথাটিই হাকীকত, অর্থাৎ আক্ষরিক অর্থ: প্রচণ্ড বেগে ছোটার কারণে ঘোড়া খুর দিয়ে আগুন ঠোকে। ইবন কাসীরের আরবি পাঠে আছে, ইবন জারীর বলেছেন সঠিক হলো প্রথম মত, অর্থাৎ খুর দিয়ে ঠুকে চলা ঘোড়া। এ আয়াতের জন্য আনা তাবারীর পাঠ থেকে এটি ভিন্ন। দুটিই এখানে যেমন পাওয়া গেছে তেমন রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Our Effort Sets Alight",
          "bn": "আমাদের চেষ্টা কী জ্বালায়"
        },
        "p": [
          {
            "en": "If the sparks are hooves on stone, the oath turns on a strength Allah placed in an animal. If they are tongues, al-Qurtubi's account of 'Ikrimah has tongues that set out proofs and make the truth clear; if they are scheming, the same image serves for a fire that harms. A reader need not settle the dispute to ask what his own effort sets alight.",
            "bn": "স্ফুলিঙ্গ যদি পাথরে খুরের আঘাত হয়, তবে শপথের কেন্দ্রে আছে সেই শক্তি, যা আল্লাহ একটি প্রাণীর মধ্যে রেখেছেন। যদি তা জিহ্বা হয়, তবে ইকরিমার কথা কুরতুবী যেভাবে এনেছেন, সেখানে জিহ্বা দলিল দাঁড় করায়, সত্যকে স্পষ্ট করে। আর যদি তা চক্রান্ত হয়, তবে একই ছবি ক্ষতিকর আগুনের কথাও বলে। বিবাদের মীমাংসা না করেও পাঠক নিজেকে জিজ্ঞেস করতে পারেন: আমার চেষ্টা কী জ্বালায়?"
          },
          {
            "en": "Ibn Kathir places the point of the oaths at 100:6, man is ungrateful to his Lord. That verse describes a human failing as the text describes it, and licenses nothing against any living person or community. The readings of war above report how early authorities understood a word; they describe no present conflict and endorse none. What stays with the reader is Muqatil's stingy old man: a fire struck in the dark, and no one warmed by it.",
            "bn": "ইবন কাসীর শপথগুলোর মূল কথা রাখেন ১০০:৬ আয়াতে: মানুষ তার রবের প্রতি বড়ই অকৃতজ্ঞ। আয়াতটি মানুষের একটি দুর্বলতার কথা বলে, ঠিক যতটুকু পাঠ বলে ততটুকুই। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। ওপরে যুদ্ধের যে ব্যাখ্যাগুলো এসেছে, সেগুলো কেবল জানায় পূর্বসূরিরা একটি শব্দ কীভাবে বুঝেছিলেন। বর্তমানের কোনো সংঘাতের কথা সেগুলো বলে না, কোনো সংঘাতকে সমর্থনও করে না। পাঠকের মনে যা থেকে যায়, তা মুকাতিলের সেই কৃপণ বুড়োর ছবি: অন্ধকারে ঠোকা এক আগুন, যাতে কেউ উষ্ণতা পেল না।"
          }
        ]
      }
    ]
  },
  "100:6": {
    "sections": [
      {
        "h": {
          "en": "Five Oaths Before the Verdict",
          "bn": "রায়ের আগে পাঁচ শপথ"
        },
        "p": [
          {
            "en": "Surah al-'Adiyat swears five times before it says anything: by the runners, panting; by those striking sparks; by the raiders at dawn, stirring up dust; and by those cutting into the midst of a gathering. Ibn Kathir opens his first verse with Allah swearing by the horses when they are made to run in His path, the dabh being the sound a horse makes as it runs. He lists Mujahid, 'Ikrimah, 'Ata', Qatadah and ad-Dahhak with Ibn 'Abbas on the horses.",
            "bn": "সূরা আল-আদিয়াত কোনো কথা বলার আগে পাঁচবার শপথ করে। শপথ সেই দৌড়বাজদের, যারা হাঁপাতে হাঁপাতে ছোটে। শপথ তাদের, যারা আঘাতে স্ফুলিঙ্গ ছোটায়। শপথ ভোরের আক্রমণকারীদের, যারা ধুলো ওড়ায়, আর যারা ঢুকে পড়ে এক দলের মাঝখানে। ইবন কাসীর প্রথম আয়াতের ব্যাখ্যা শুরু করেন এভাবে: আল্লাহ শপথ করছেন সেই ঘোড়াদের, যাদের তাঁর পথে দৌড়ানো হয়। দাবহ হলো দৌড়ানোর সময় ঘোড়ার মুখ থেকে বেরোনো শব্দ। ঘোড়ার মতে ইবন আব্বাস (রাঃ)-এর সঙ্গে তিনি মুজাহিদ, ইকরিমা, আতা, কাতাদা ও দাহহাকের নাম নেন।"
          },
          {
            "en": "'Ali read the same verse as the camels of the pilgrimage. Ibn Kathir carries a report, through Sa'id ibn Jubayr, that a man asked Ibn 'Abbas about al-'adiyat and was told: the horses raiding in the path of Allah. The man took the question to 'Ali at the Zamzam watering place. 'Ali summoned Ibn 'Abbas and said that at Badr, the first battle, there were only two horses, one for az-Zubayr and one for al-Miqdad; al-'adiyat run from 'Arafah to Muzdalifah and from Muzdalifah to Mina. The report ends with Ibn 'Abbas withdrawing his answer.",
            "bn": "আলী (রাঃ) একই আয়াত পড়েছেন হজের উটের অর্থে। সাঈদ ইবন জুবাইরের সূত্রে ইবন কাসীর একটি বর্ণনা আনেন। এক লোক ইবন আব্বাস (রাঃ)-কে আল-আদিয়াত সম্পর্কে জিজ্ঞেস করলে তিনি বলেন: আল্লাহর পথে আক্রমণে ছোটা ঘোড়া। লোকটি প্রশ্নটা নিয়ে গেল যমযমের পানি পান করানোর জায়গায় আলী (রাঃ)-এর কাছে। আলী (রাঃ) ইবন আব্বাস (রাঃ)-কে ডেকে পাঠালেন। বললেন, ইসলামের প্রথম যুদ্ধ বদরে ঘোড়া ছিল মাত্র দুটি, একটি যুবাইরের, একটি মিকদাদের। আল-আদিয়াত ছোটে আরাফা থেকে মুযদালিফা, আর মুযদালিফা থেকে মিনা। বর্ণনার শেষে ইবন আব্বাস (রাঃ) নিজের জবাব ফিরিয়ে নেন।"
          },
          {
            "en": "That is a report as Ibn Kathir carries it. In a shorter version on the same page, 'Ali objects that there were no horses at Badr and Ibn 'Abbas answers that the verse concerned a raiding party that was sent out. Ibn Kathir names Ibrahim and 'Ubayd ibn 'Umayr with 'Ali, and says Ibn Jarir, that is at-Tabari, chose the horses. At-Tabari's own reason: camels do not make the dabh, horses do. Al-Qurtubi calls horses the reading of most commentators. This study reports both readings and chooses neither. The sparks of 100:2 have their own article.",
            "bn": "এটি একটি বর্ণনা, ইবন কাসীর যেভাবে এনেছেন। একই পাতায় এর ছোট আরেক রূপ আছে। সেখানে আলী (রাঃ) আপত্তি তোলেন, বদরে তো আমাদের ঘোড়া ছিল না। ইবন আব্বাস (রাঃ) জবাব দেন, আয়াতটি পাঠানো এক অভিযাত্রী দলের কথা। আলী (রাঃ)-এর মতের সঙ্গে ইবন কাসীর ইবরাহীম ও উবাইদ ইবন উমাইরের নাম নেন, আর বলেন, ইবন জারীর, অর্থাৎ তাবারী, ঘোড়ার মত বেছে নিয়েছেন। তাবারীর নিজের যুক্তি: উট দাবহ করে না, ঘোড়া করে। কুরতুবীর মতে ঘোড়াই অধিকাংশ মুফাসসিরের ব্যাখ্যা। এই আলোচনা দুটি মতই তুলে ধরে, কোনোটি বেছে নেয় না। ১০০:২ আয়াতের স্ফুলিঙ্গ নিয়ে আলাদা প্রবন্ধ আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Words That Answer",
          "bn": "শপথের জবাবে চারটি শব্দ"
        },
        "p": [
          {
            "en": "Inna al-insana li-rabbihi la-kanud: indeed man, to his Lord, is kanud. Ibn Kathir calls it the thing sworn upon, and al-Qurtubi the answer to the oath. All that galloping, dust and dawn exists to set up a sentence about the listener. Ibn Kathir gives the sense as: to the blessings of his Lord he is denying and ungrateful. At-Tabari puts it as: man is ungrateful for the blessings of his Lord. The Muyassar says: man is denying of his Lord's blessings.",
            "bn": "ইন্নাল ইনসানা লিরাব্বিহী লাকানূদ: নিশ্চয় মানুষ তার রবের প্রতি কানূদ। ইবন কাসীর একে বলেন সেই বিষয়, যার উপর শপথ করা হয়েছে। কুরতুবী বলেন, এটাই শপথের জবাব। এত দৌড়, এত ধুলো, এত ভোর, সবই শ্রোতাকে নিয়ে একটি বাক্য বলার প্রস্তুতি। ইবন কাসীর অর্থ করেন: রবের নিয়ামতের প্রতি সে অস্বীকারকারী, অকৃতজ্ঞ। তাবারীর ভাষায়: মানুষ তার রবের নিয়ামতের প্রতি অকৃতজ্ঞ। মুয়াসসার বলে: মানুষ রবের নিয়ামত অস্বীকার করে।"
          },
          {
            "en": "The plain gloss has many holders. Ibn Kathir lists thirteen who said al-kanud means al-kafur, the ungrateful: Ibn 'Abbas, Mujahid, Ibrahim an-Nakha'i, Abu al-Jawza', Abu al-'Aliyah, Abu ad-Duha, Sa'id ibn Jubayr, Muhammad ibn Qays, ad-Dahhak, al-Hasan, Qatadah, ar-Rabi' ibn Anas and Ibn Zayd. At-Tabari reports that Ibn Zayd, after glossing the word, recited inna al-insana la-kafur, indeed man is ungrateful, words that close 22:66. Al-Baghawi has Ibn 'Abbas, Mujahid and Qatadah say: ungrateful, denying the blessings of Allah.",
            "bn": "সরল অর্থটির পক্ষে বহু নাম। ইবন কাসীর তেরো জনের নাম দেন, যাঁরা বলেছেন কানূদ মানে কাফূর, অর্থাৎ অকৃতজ্ঞ: ইবন আব্বাস (রাঃ), মুজাহিদ, ইবরাহীম নাখঈ, আবুল জাওযা, আবুল আলিয়া, আবুদ দুহা, সাঈদ ইবন জুবাইর, মুহাম্মাদ ইবন কাইস, দাহহাক, হাসান, কাতাদা, রাবী ইবন আনাস ও ইবন যায়দ। তাবারী জানান, ইবন যায়দ শব্দটির অর্থ বলার পর পড়েছিলেন: ইন্নাল ইনসানা লাকাফূর, নিশ্চয় মানুষ অকৃতজ্ঞ। এ কথাগুলো দিয়েই ২২:৬৬ আয়াত শেষ হয়। বাগাভীর বর্ণনায় ইবন আব্বাস (রাঃ), মুজাহিদ ও কাতাদা বলেন: অকৃতজ্ঞ, আল্লাহর নিয়ামত অস্বীকারকারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Land That Grows Nothing",
          "bn": "যে মাটিতে কিছুই জন্মায় না"
        },
        "p": [
          {
            "en": "The word has a picture behind it. At-Tabari writes that al-ard al-kanud is land that grows nothing. Al-Baghawi gives the same land from Abu 'Ubaydah, who glosses kanud as one of little good. At-Tabari also records, as something said, that the tribe of Kindah took its name from cutting off its father. Al-Qurtubi carries the same and links the word to kanada, to cut.",
            "bn": "শব্দটির পেছনে একটা ছবি আছে। তাবারী লেখেন, আল-আরদুল কানূদ মানে সেই জমি, যেখানে কিছুই জন্মায় না। বাগাভী একই জমির কথা আনেন আবু উবাইদার সূত্রে, যিনি কানূদের অর্থ করেন অল্প কল্যাণের মানুষ। তাবারী 'বলা হয়' বলে আরও জানান, কিন্দা গোত্রের এই নাম হয়েছে নিজের পিতাকে ছিন্ন করার কারণে। কুরতুবীও তা আনেন এবং শব্দটিকে জোড়েন কানাদা ক্রিয়ার সঙ্গে, যার অর্থ কেটে ফেলা।"
          },
          {
            "en": "Al-Qurtubi draws the meaning out of that root: one says kanada al-habl when someone cuts a rope, and the kanud is as though he cuts what he ought to keep joined, namely thanks. A blessing arrives and the line that should run back to the Giver is severed. He also gives the verb kanada, yaknudu, kunudan in the sense of denying a blessing, and applies it to a man and to a woman alike. The picture and the definition agree: something comes in, and nothing goes back.",
            "bn": "কুরতুবী এই ধাতু থেকেই অর্থটা বের করেন। রশি কেটে ফেললে আরবরা বলে কানাদাল হাবল। কানূদ যেন সেই মানুষ, যে কেটে দেয় এমন জিনিস যা তার জুড়ে রাখার কথা ছিল, আর সেটা হলো শোকর। নিয়ামত আসে, কিন্তু দাতার দিকে ফিরে যাওয়ার সুতোটা ছিঁড়ে যায়। তিনি আরও বলেন, কানাদা, ইয়াকনুদু, কুনূদান মানে নিয়ামত অস্বীকার করা, আর শব্দটি পুরুষ ও নারী দুজনের বেলাতেই চলে। ছবি আর সংজ্ঞা একই কথা বলে: কিছু ভেতরে আসে, কিছুই ফিরে যায় না।"
          },
          {
            "en": "The tribes used the word differently. Al-Qurtubi reports from Ibn 'Abbas that in the tongue of Kindah and Hadramawt al-kanud means the disobedient, in the tongue of Rabi'ah and Mudar the ungrateful, and in the tongue of Kinanah the miser who treats what he owns badly; he adds that Muqatil said the same. Al-Baghawi gives the first two from al-Kalbi. The tafsirs set these side by side without ranking them, and this study does the same.",
            "bn": "গোত্রভেদে শব্দটির ব্যবহার আলাদা ছিল। কুরতুবী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: কিন্দা ও হাদরামাওতের ভাষায় কানূদ মানে নাফরমান, রাবীআ ও মুদারের ভাষায় অকৃতজ্ঞ, আর কিনানার ভাষায় এমন কৃপণ, যে নিজের অধীনের জিনিস ও মানুষের সঙ্গে মন্দ আচরণ করে। তিনি যোগ করেন, মুকাতিলও একই কথা বলেছেন। বাগাভী প্রথম দুটি আনেন কালবীর সূত্রে। তাফসীরগুলো এই অর্থগুলো পাশাপাশি রাখে, কোনোটিকে উপরে তোলে না। এই আলোচনাও তা-ই করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting the Wounds, Forgetting Gifts",
          "bn": "আঘাত গোনে, দান ভোলে"
        },
        "p": [
          {
            "en": "Al-Hasan al-Basri gave the gloss that every tafsir here repeats. Through at-Tabari's chain he said: he is the ingrate who counts the calamities and forgets the blessings of his Lord. In two other chains at-Tabari has him say lawwam li-rabbihi, constantly blaming his Lord and counting the calamities. Ibn Kathir, al-Baghawi and Ma'arif al-Qur'an carry the counting version. Al-Qurtubi adds that a poet took the line and set it in verse: how long will you complain of calamities and forget the blessings?",
            "bn": "হাসান বসরীর ব্যাখ্যাটি এখানকার প্রায় সব তাফসীরে ঘুরে ঘুরে এসেছে। তাবারীর সনদে তিনি বলেন: সে সেই অকৃতজ্ঞ, যে বিপদগুলো গুনে রাখে আর রবের নিয়ামত ভুলে যায়। আরও দুটি সনদে তাবারী তাঁর কথা আনেন এভাবে: লাওওয়ামুন লিরাব্বিহী, যে রবকে বারবার দোষ দেয়, বিপদ গুনে গুনে। ইবন কাসীর, বাগাভী ও মাআরিফুল কুরআন গোনার কথাটিই আনেন। কুরতুবী জানান, এক কবি কথাটা নিয়ে কবিতা বেঁধেছিলেন: আর কত দিন বিপদের নালিশ করবে আর নিয়ামত ভুলে থাকবে?"
          },
          {
            "en": "Al-Baghawi keeps two sharper versions. 'Ata' said the kanud is the one who does not give alongside his people when a calamity strikes them. Al-Fudayl ibn 'Iyad set the word against its opposite: the kanud is the one whom a single bad turn makes forget many good ones, and the shakur, the grateful, is the one whom a single good turn makes forget many bad ones.",
            "bn": "বাগাভী আরও তীক্ষ্ণ দুটি ব্যাখ্যা রেখেছেন। আতা বলেন, কানূদ সেই মানুষ, যে নিজের লোকদের উপর বিপদ এলে তাদের সঙ্গে মিলে কিছু দেয় না। ফুদাইল ইবন ইয়াদ শব্দটিকে দাঁড় করান তার বিপরীতের পাশে। কানূদ সে, একটিমাত্র মন্দ আচরণ যাকে অনেকগুলো সদাচরণ ভুলিয়ে দেয়। আর শাকূর, অর্থাৎ কৃতজ্ঞ, সে, একটিমাত্র সদাচরণ যাকে অনেকগুলো মন্দ আচরণ ভুলিয়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi then lists the later voices. Al-Mubarrad: whoever withholds what he owes. Abu Bakr al-Wasiti: whoever spends the blessings of Allah in disobedience to Allah. Abu Bakr al-Warraq: whoever sees the blessing as coming from himself and his helpers. At-Tirmidhi: whoever sees the blessing and does not see its Giver. Ma'arif al-Qur'an gives al-Wasiti's and at-Tirmidhi's beside al-Hasan's. Al-Qurtubi's own verdict is that all these sayings return to one meaning: ingratitude and denial.",
            "bn": "এরপর কুরতুবী পরবর্তী কালের কয়েকটি মত সাজান। মুবাররাদ: যে নিজের দায় আটকে রাখে। আবু বকর ওয়াসিতী: যে আল্লাহর নিয়ামত খরচ করে আল্লাহর নাফরমানিতে। আবু বকর ওয়াররাক: যে নিয়ামতকে দেখে নিজের ও নিজের সহযোগীদের অর্জন হিসেবে। তিরমিযী: যে নিয়ামত দেখে, কিন্তু নিয়ামতদাতাকে দেখে না। মাআরিফুল কুরআন হাসানের কথার পাশে ওয়াসিতী ও তিরমিযীর কথা আনে। কুরতুবীর নিজের রায়: এই সব কথা শেষে একই অর্থে গিয়ে মেলে, অকৃতজ্ঞতা আর অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report About Eating Alone",
          "bn": "একা খাওয়া নিয়ে একটি বর্ণনা"
        },
        "p": [
          {
            "en": "One gloss reaches the verse in the shape of a hadith, and it has to be handled as the tafsirs handle it. At-Tabari and Ibn Abi Hatim narrate, through Ja'far ibn az-Zubayr from al-Qasim from Abu Umamah, that the Prophet ﷺ said of this verse: ungrateful; the one who eats alone, strikes his slave and withholds his gift. Ibn Kathir quotes it and then grades it himself: Ja'far ibn az-Zubayr is matruk, abandoned as a narrator, so this chain is weak.",
            "bn": "একটি ব্যাখ্যা আয়াতের কাছে এসেছে হাদীসের আকারে। তাফসীরগুলো যেভাবে একে সামলেছে, এখানেও সেভাবেই সামলাতে হবে। তাবারী ও ইবন আবী হাতিম জা'ফর ইবন যুবাইর থেকে, তিনি কাসিম থেকে, তিনি আবু উমামা (রাঃ) থেকে বর্ণনা করেন: নবী ﷺ এই আয়াত সম্পর্কে বললেন, অকৃতজ্ঞ, যে একা খায়, নিজের দাসকে মারে আর নিজের দান আটকে রাখে। ইবন কাসীর বর্ণনাটি উদ্ধৃত করে নিজেই তার মান বলে দেন: জা'ফর ইবন যুবাইর মাতরূক, অর্থাৎ বর্ণনাকারী হিসেবে পরিত্যক্ত, তাই এই সনদ দুর্বল।"
          },
          {
            "en": "At-Tabari also carries the same three traits as Abu Umamah's own saying, with he camps alone in place of he eats alone, and Ibn Kathir notes that version as stopping at Abu Umamah. Al-Qurtubi gives the Prophetic wording and a second report from Ibn 'Abbas, who shall I tell you of the worst of you, and says both were brought out by al-Hakim at-Tirmidhi in Nawadir al-Usul. His judgment is conditional: if it is sound, it is the highest thing that can be said.",
            "bn": "তাবারী একই তিনটি স্বভাবের কথা আবু উমামা (রাঃ)-এর নিজের উক্তি হিসেবেও আনেন। সেখানে 'একা খায়'-এর জায়গায় আছে 'একা তাঁবু ফেলে'। ইবন কাসীরও এই রূপটিকে আবু উমামা (রাঃ) পর্যন্ত থেমে যাওয়া বর্ণনা বলে উল্লেখ করেন। কুরতুবী নবী ﷺ-এর নামে বর্ণিত ভাষ্যটি আনেন, সঙ্গে ইবন আব্বাস (রাঃ) থেকে আরেকটি বর্ণনা: আমি কি তোমাদের সবচেয়ে মন্দ লোকদের কথা বলব না? তিনি জানান, দুটিই হাকীম তিরমিযী তাঁর নাওয়াদিরুল উসূল গ্রন্থে এনেছেন। তাঁর রায় শর্তসাপেক্ষ: যদি সহীহ হয়, তবে এর চেয়ে উঁচু কথা আর নেই।"
          },
          {
            "en": "So the three traits stand here as a gloss carried in the tafsirs, under Ibn Kathir's verdict that its chain to the Prophet ﷺ is weak. None of the fetched tafsirs attaches a hadith from the six collections to this verse, and this study cites none. The plain meaning rests on the gloss kafur, which Ibn Kathir's thirteen names give, and not on this report.",
            "bn": "তাই তিনটি স্বভাবের কথাটি এখানে থাকছে তাফসীরে বর্ণিত একটি ব্যাখ্যা হিসেবে, ইবন কাসীরের এই রায়সহ যে নবী ﷺ পর্যন্ত এর সনদ দুর্বল। যে তাফসীরগুলো এখানে পড়া হয়েছে, তার কোনোটিই এ আয়াতের সঙ্গে ছয়টি হাদীসগ্রন্থের কোনো হাদীস জোড়েনি। এই আলোচনাও কোনো হাদীস উদ্ধৃত করছে না। আয়াতের সরল অর্থ দাঁড়িয়ে আছে কাফূর অর্থের উপর, যা ইবন কাসীরের তালিকার তেরো জন দিয়েছেন, এই বর্ণনার উপর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Man the Verse Means",
          "bn": "আয়াতের মানুষ কে"
        },
        "p": [
          {
            "en": "The commentators read al-insan, man, in two ways. Al-Qurtubi reports from Ibn 'Abbas that man here is the disbeliever. Al-Qurtubi himself opens the verse more widely, as man's nature being formed to deny the blessing. As-Sa'di reads it the same broad way: it is the nature and make of man that his soul is not generous with the rights it owes, so it does not pay them in full; its nature is laziness and withholding, in rights of wealth and of the body.",
            "bn": "আল-ইনসান, অর্থাৎ মানুষ শব্দটি তাফসীরকারেরা দুটি ভিন্ন অর্থে পড়েছেন। কুরতুবী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এখানে মানুষ মানে কাফির। কুরতুবী নিজে আয়াতটি খোলেন আরও বড় পরিসরে: মানুষের স্বভাবই গড়া হয়েছে নিয়ামত অস্বীকারের উপর। সা'দীর পাঠও তেমনি ব্যাপক। মানুষের স্বভাব ও গড়ন এমন যে, তার উপর যে হক আছে, তা দিতে তার মন উদার হয় না। ফলে সে তা পুরোপুরি আদায় করে না। সম্পদের হক হোক বা শরীরের, তার স্বভাব হলো আলস্য আর আটকে রাখা।"
          },
          {
            "en": "As-Sa'di then closes with an exception: except the person Allah guides, who leaves this description for its opposite, generosity in paying what is owed. As-Sa'di also gives kanud its own turn: withholding of the good that he owes his Lord. The two readings are both in the fetched texts with their holders, and this study does not choose between them. On either reading, these four words describe a trait; they do not name a person.",
            "bn": "এরপর সা'দী একটি ব্যতিক্রম যোগ করেন: তবে আল্লাহ যাকে হেদায়াত দেন, সে এই বৈশিষ্ট্য ছেড়ে উল্টো বৈশিষ্ট্যে চলে যায়, হক আদায়ে উদার হয়। কানূদের অর্থও সা'দী নিজের মতো করে দেন: রবের প্রতি তার যে কল্যাণ দেওয়ার কথা, তা আটকে রাখে যে। দুটি পাঠই পড়া তাফসীরগুলোতে তাদের ধারকদের নামসহ আছে। এই আলোচনা কোনোটিকে বেছে নেয় না। যে পাঠই ধরা হোক, এই চারটি শব্দ একটি স্বভাবের বর্ণনা দেয়, কোনো মানুষের নাম নেয় না।"
          },
          {
            "en": "Two things must be said plainly. Where the verse is read as the disbeliever, it describes what the text describes and licenses nothing against any living person or community; it hands no reader a verdict on anyone's heart. And the readings of war in the oaths report how early authorities understood a word; they describe no present conflict and endorse none. The question the verse leaves is about the hearer's own ledger.",
            "bn": "দুটি কথা সোজাসুজি বলা দরকার। আয়াতকে যেখানে কাফিরের কথা বলে পড়া হয়েছে, সেখানে আয়াত কেবল তা-ই বর্ণনা করে, যা তার শব্দে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কারও অন্তরের উপর রায় দেওয়ার ক্ষমতাও কোনো পাঠককে দেয় না। আর শপথগুলোর যুদ্ধের ব্যাখ্যা কেবল জানায়, আগের যুগের আলিমরা একটি শব্দ কীভাবে বুঝেছিলেন। তা আজকের কোনো সংঘাতের বর্ণনা নয়, কোনোটিকে সমর্থনও নয়। আয়াত যে প্রশ্ন রেখে যায়, তা শ্রোতার নিজের হিসাবের খাতা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Witness, the Wealth, the Graves",
          "bn": "সাক্ষী, সম্পদ আর কবর"
        },
        "p": [
          {
            "en": "100:7 continues: and indeed he is, to that, a witness. Ibn Kathir reports two readings of the pronoun. Qatadah and Sufyan ath-Thawri said: Allah is witness to that. Muhammad ibn Ka'b al-Qurazi took it as man himself, a witness against himself that he is ungrateful, as his words and deeds show; Ibn Kathir compares 9:17, where the idolaters bear witness against themselves to disbelief. The Muyassar takes the second line: by that denial he is acknowledging it. This study keeps both readings.",
            "bn": "১০০:৭ আয়াত বলে: আর নিশ্চয় সে এ বিষয়ে সাক্ষী। এখানে 'সে' কে, তা নিয়ে ইবন কাসীর দুটি মত আনেন। কাতাদা ও সুফিয়ান সাওরী বলেন: আল্লাহ এর সাক্ষী। মুহাম্মাদ ইবন কা'ব কুরাযী একে ধরেছেন মানুষ নিজেই। সে নিজের অকৃতজ্ঞতার সাক্ষী, কারণ তার কথা আর কাজেই তা স্পষ্ট। ইবন কাসীর এর সঙ্গে মিলিয়ে দেখান ৯:১৭ আয়াত, যেখানে মুশরিকরা নিজেদের বিরুদ্ধে কুফরের সাক্ষ্য দেয়। মুয়াসসার দ্বিতীয় পথে চলে: এই অস্বীকারের মধ্য দিয়েই সে তা স্বীকার করছে। এই আলোচনা দুটি মতই রাখে।"
          },
          {
            "en": "100:8 adds: and indeed he is, in love of al-khayr, intense. Ibn Kathir and the Muyassar both take al-khayr, the good, as wealth. Ibn Kathir reports two opinions: that he is intense in his love of wealth, or that love of wealth makes him covetous and stingy; he calls both correct. So the ingrate of 100:6 holds tightly to the very thing he was given. The surah names wealth with the word for good, and the man loves the good while forgetting who gave it.",
            "bn": "১০০:৮ আয়াত যোগ করে: আর নিশ্চয় সে আল-খাইরের ভালোবাসায় প্রবল। ইবন কাসীর ও মুয়াসসার দুজনেই আল-খাইর, অর্থাৎ কল্যাণ শব্দের অর্থ করেন সম্পদ। ইবন কাসীর দুটি মত আনেন। এক, সে সম্পদের ভালোবাসায় প্রবল। দুই, সম্পদের ভালোবাসা তাকে লোভী ও কৃপণ বানিয়েছে। তাঁর মতে দুটিই ঠিক। তাহলে ১০০:৬ আয়াতের অকৃতজ্ঞ মানুষটি ঠিক সেই জিনিসই শক্ত করে আঁকড়ে ধরে, যা তাকে দেওয়া হয়েছিল। সূরা সম্পদকে ডাকে কল্যাণ নামে, আর মানুষটি কল্যাণ ভালোবাসে, অথচ দাতাকে ভোলে।"
          },
          {
            "en": "Then 100:9 to 100:11 turn to the end: does he not know, when what is in the graves is scattered and what is in the breasts is brought out, that their Lord on that Day is fully aware of them? Ibn Kathir explains that the dead in the graves will be brought out, and reports Ibn 'Abbas and others: what was in their souls will be exposed and made plain. Allah knows all they used to do, Ibn Kathir adds, and will repay it, without the slightest injustice.",
            "bn": "তারপর ১০০:৯ থেকে ১০০:১১ আয়াত শেষ দিনের দিকে ফেরে: সে কি জানে না, যখন কবরে যা আছে তা বের করে আনা হবে, আর বুকে যা আছে তা প্রকাশ করা হবে, সেদিন তাদের রব তাদের সম্পর্কে পুরোপুরি অবগত? ইবন কাসীর ব্যাখ্যা করেন, কবরের মৃতদের বের করে আনা হবে। আর ইবন আব্বাস (রাঃ) ও অন্যদের কথা আনেন: তাদের মনে যা ছিল, তা খুলে দেখানো হবে, স্পষ্ট করা হবে। ইবন কাসীর যোগ করেন, তারা যা করত আল্লাহ সবই জানেন। তিনি এর প্রতিদান দেবেন, বিন্দুমাত্র অবিচার না করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Other List",
          "bn": "অন্য তালিকাটাও রাখা"
        },
        "p": [
          {
            "en": "Al-Hasan's gloss is a description of bookkeeping. The kanud keeps one list, the calamities, and loses the other. Al-Fudayl's contrast shows that the grateful one is not a man without bad days; he has them, and a single kindness outweighs them in his memory. What differs is which list each one carries. A reader can test himself honestly: which list comes to mind first when someone asks how things are going?",
            "bn": "হাসানের ব্যাখ্যা আসলে হিসাব রাখার এক বর্ণনা। কানূদ একটা তালিকা রাখে, বিপদের তালিকা, আর অন্যটা হারিয়ে ফেলে। ফুদাইলের তুলনা দেখায়, কৃতজ্ঞ মানুষের জীবনে খারাপ দিন নেই, ব্যাপারটা তা নয়। খারাপ দিন তারও আসে, কিন্তু তার স্মৃতিতে একটা সদাচরণই সেগুলোর চেয়ে ভারী হয়ে থাকে। পার্থক্য শুধু, কে কোন তালিকা সঙ্গে বয়ে বেড়ায়। পাঠক নিজেকে সৎভাবে যাচাই করতে পারেন: কেউ যখন জিজ্ঞেস করে কেমন চলছে, মনে প্রথম কোন তালিকাটা আসে?"
          },
          {
            "en": "The land that grows nothing and the rope that is cut point to the second half. As-Sa'di speaks of rights of wealth and of the body, and 'Ata' of joining his people in giving when calamity strikes; thanks, on their glosses, is something paid out and not only felt. The verse spoke to its listener as man, and the graves and breasts of 100:9 and 100:10 say when the account is opened. The time to keep both lists, and to pay what is owed, is before that.",
            "bn": "যে জমিতে কিছু জন্মায় না আর যে রশি কেটে ফেলা হয়েছে, দুটি ছবিই দ্বিতীয় অর্ধেকের দিকে ইশারা করে। সা'দী বলেন সম্পদের হক আর শরীরের হকের কথা। আতা বলেন বিপদে নিজের লোকদের সঙ্গে মিলে দেওয়ার কথা। তাঁদের ব্যাখ্যায় শোকর কেবল মনের অনুভূতি নয়, হাত খুলে আদায় করার জিনিস। আয়াত তার শ্রোতাকে ডেকেছে মানুষ বলে। আর ১০০:৯ ও ১০০:১০ আয়াতের কবর আর বুক জানিয়ে দেয়, হিসাবের খাতা কবে খোলা হবে। দুটি তালিকা রাখার আর পাওনা আদায়ের সময় তার আগেই।"
          }
        ]
      }
    ]
  }
});
