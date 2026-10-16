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
          "bn": "ছুটে চলার দ্বিতীয় শপথ"
        },
        "p": [
          {
            "en": "Fa-l-muriyati qadha: then by those that strike out fire, striking. In Arabic it is two words, and it stands between 100:1, the oath by al-'adiyat dabha, the runners that pant, and 100:3, the oath by those that raid at dawn. The particle fa ties it to what came before, so the striking follows the running. Ibn Kathir, in the English abridgement, places the answer to the whole chain of oaths at 100:6, man is ungrateful to his Lord, which he calls the subject of what is sworn about.",
            "bn": "ফাল মূরিয়াতি কাদহা: অতঃপর শপথ তাদের, যারা আঘাত করে আগুন ঠিকরে বের করে। আরবিতে আয়াতটি মাত্র দুই শব্দের। এর আগে ১০০:১, আল-আদিয়াতি দাবহা: হাঁপাতে হাঁপাতে যারা ছোটে, তাদের শপথ। পরে ১০০:৩, ভোরবেলা যারা হামলা চালায়, তাদের শপথ। শুরুর ফা অব্যয়টি আয়াতটিকে আগের কথার সঙ্গে জুড়ে দেয়, তাই দৌড়ের পরেই আসে আঘাত। ইংরেজি সংক্ষেপে ইবন কাসীর শপথের পুরো ধারার জবাব ধরেন ১০০:৬ আয়াতকে: মানুষ তার রবের প্রতি বড়ই অকৃতজ্ঞ। তাঁর ভাষায়, এটিই সেই কথা, যার ওপর শপথ করা হয়েছে।"
          },
          {
            "en": "The shortest commentaries give the plain picture. The Muyassar: horses from the hardness of whose hooves fire is struck, because of how hard they run. As-Sa'di: al-muriyat are those that strike with their hooves the stones they tread on, and qadha means that fire is struck out from the hardness of their hooves and their strength when they run. Kanud in 100:6 has its own article in this module; this article stays with the spark.",
            "bn": "সবচেয়ে সংক্ষিপ্ত তাফসীরগুলো সাদামাটা ছবিটাই দেয়। মুয়াসসার বলে: সেই ঘোড়াগুলো, প্রচণ্ড বেগে ছোটার কারণে যাদের শক্ত খুর থেকে আগুন ঠিকরে বের হয়। সা'দী বলেন: আল-মূরিয়াত হলো তারা, যারা চলার পথে পাথরে খুর দিয়ে আঘাত করে। আর কাদহা মানে, ছোটার সময় খুরের কাঠিন্য আর শক্তির জোরে আগুন ঠিকরে ওঠে। ১০০:৬ আয়াতের কানূদ শব্দ নিয়ে এই মডিউলে আলাদা প্রবন্ধ আছে। এ প্রবন্ধ থাকবে স্ফুলিঙ্গটুকু নিয়েই।"
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
            "bn": "কুরতুবী শুরু করেন ধাতু থেকে। তাঁর মতে কাদহ শব্দের মূল অর্থ ইসতিখরাজ, অর্থাৎ ভেতর থেকে কিছু টেনে বের করা। তাই চোখ থেকে নষ্ট পানি বের করাকে বলা হয় কাদাহতুল আইন। চকমকি ঠুকে আগুন জ্বালানোকে বলা হয় ইকতাদাহতু বিয যান্দ। হাঁড়ি থেকে ঝোল তুলে নেওয়াকেও বলা হয় ইকতাদাহতুল মারাক। মিকদাহা সেই যন্ত্র, যা দিয়ে আগুন ঠোকা হয়। আর কাদ্দাহা সেই পাথর, যা থেকে আগুন বের হয়। মূরিয়াত শব্দের পেছনের ক্রিয়া ওয়ারা। চকমকি থেকে আগুন বেরিয়ে এলে বলা হয় ওয়ারায যান্দ।"
          },
          {
            "en": "He adds that qadhan takes its accusative from whatever gives dabhan its accusative in the verse before, so the two oaths are cut to one pattern, and that he has dealt with the word already in Surat al-Waqi'ah. At-Tabari's own summary pairs the same two words: Allah swore by al-muriyat that strike out fires, qadhan, by striking. The verse names an action and leaves its doer unnamed; who does the striking is the point on which the commentators part ways.",
            "bn": "কুরতুবী আরও বলেন, আগের আয়াতের দাবহান শব্দ যে কারণে নসব পেয়েছে, কাদহান শব্দও সে কারণেই নসব পেয়েছে। ফলে দুই শপথ একই ছাঁচে গড়া। শব্দটি নিয়ে তিনি আগেই সূরা আল-ওয়াকিআয় আলোচনা করেছেন বলেও জানান। তাবারীর নিজের সারকথাতেও এই দুই শব্দ জোড়া বেঁধে আসে: আল্লাহ শপথ করেছেন সেই মূরিয়াতের, যারা ঠুকে ঠুকে আগুন বের করে। আয়াত কাজটির নাম বলে, কিন্তু কে কাজটি করে তা বলে না। আঘাতটা কে করছে, ঠিক এখানেই তাফসীরকারদের পথ আলাদা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hooves Against the Rock",
          "bn": "পাথরের গায়ে খুরের আঘাত"
        },
        "p": [
          {
            "en": "The first reading at-Tabari records is that these are horses striking fire with their hooves. 'Ikrimah, asked about the verse, answered: they kindled and they struck. Qatadah said: they are the horses, and al-Kalbi added that they strike with their hooves until fire comes out of them. 'Ata' said they kindled fire with their hooves, and ad-Dahhak that they make the stones give fire with their hooves. Al-Baghawi lists 'Ikrimah, 'Ata', ad-Dahhak, Muqatil and al-Kalbi for it, adding: when they travel over stones.",
            "bn": "তাবারী প্রথম যে ব্যাখ্যা উল্লেখ করেন, তা হলো এরা ঘোড়া, যারা খুর দিয়ে আগুন ঠোকে। ইকরিমাকে আয়াতটি সম্পর্কে জিজ্ঞেস করা হলে তিনি বলেন: তারা আগুন জ্বালাল, তারা ঠুকল। কাতাদা বলেন: এরা ঘোড়া। কালবী যোগ করেন: খুর দিয়ে এমনভাবে ঠোকে যে তা থেকে আগুন বের হয়। আতা বলেন, তারা খুর দিয়ে আগুন জ্বালায়। দাহহাক বলেন, তারা খুর দিয়ে পাথর থেকে আগুন বের করে। বাগাভী এ মতের পক্ষে ইকরিমা, আতা, দাহহাক, মুকাতিল ও কালবীর নাম নেন, সঙ্গে জুড়ে দেন: যখন তারা পাথুরে পথে চলে।"
          },
          {
            "en": "Ibn Kathir's Arabic text describes the clash of their hooves, literally their shoes, against rock, so that fire is struck from it, and notes that most of those he had named said: with their hooves. His English abridgement says the striking of their hooves on the rocks causes sparks of fire to fly from them. Al-Qurtubi gives the horse reading from 'Ikrimah, 'Ata' and ad-Dahhak as well, naming the front of the hoof, and says it is also narrated from Ibn 'Abbas.",
            "bn": "ইবন কাসীরের আরবি পাঠে আছে, পাথরের গায়ে তাদের খুর ঠোকার কথা। খুর বোঝাতে সেখানে যে শব্দ, তার আক্ষরিক অর্থ জুতা। সেই ঠোকাঠুকিতে পাথর থেকে আগুন বের হয়। তিনি এ-ও জানান, আগে যাঁদের নাম তিনি নিয়েছেন, তাঁদের বেশির ভাগ বলেছেন: খুর দিয়ে। তাঁর ইংরেজি সংক্ষেপে আছে, পাথরে খুরের আঘাতে আগুনের স্ফুলিঙ্গ ছিটকে ওঠে। কুরতুবীও ইকরিমা, আতা ও দাহহাকের সূত্রে ঘোড়ার ব্যাখ্যাটি দেন, আর খুরের সামনের অংশের কথা বলেন। তিনি জানান, ইবন আব্বাস (রাঃ) থেকেও এটি বর্ণিত।"
          },
          {
            "en": "Al-Qurtubi keeps a further detail from Muqatil: the Arabs called that fire nar Abi Hubahib. Abu Hubahib, he reports, was an old man of Mudar in the Jahiliyyah, among the stingiest of people. He lit no fire for bread or anything else until eyes were asleep, then lit a small flame that flared and died down, and if anyone woke he put it out, unwilling that anyone should benefit from it. The Arabs likened the hoof-spark to his fire, al-Qurtubi says, because no benefit is had from it.",
            "bn": "কুরতুবী মুকাতিলের কাছ থেকে আরেকটি খুঁটিনাটি তুলে রাখেন। আরবরা ওই আগুনকে বলত নারু আবী হুবাহিব। তাঁর বর্ণনায় আবু হুবাহিব ছিল জাহিলি যুগে মুদার গোত্রের এক বুড়ো, মানুষের মধ্যে সবচেয়ে কৃপণদের একজন। রুটি সেঁকা বা অন্য কোনো কাজে সে আগুন জ্বালাত না, যতক্ষণ না সবার চোখে ঘুম নামত। তারপর ছোট্ট একটা শিখা জ্বালাত, যা একবার জ্বলে উঠে আবার নিভে আসত। কেউ জেগে উঠলে সে তা নিভিয়ে দিত, পাছে অন্য কেউ এর উপকার পায়। কুরতুবী বলেন, খুরের স্ফুলিঙ্গকে আরবরা তার আগুনের সঙ্গে তুলনা করত, কারণ তা থেকে কোনো উপকার মেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Horses or Camels of Hajj",
          "bn": "ঘোড়া, নাকি হজের উট"
        },
        "p": [
          {
            "en": "Whether 100:2 belongs to the same runners as 100:1 depends on who those runners are, and on that the early authorities divided. At-Tabari, on 100:1, reports the horse reading from Ibn 'Abbas, Mujahid, 'Ikrimah, 'Ata', Qatadah and ad-Dahhak, and the camel reading from 'Abdullah, that is Ibn Mas'ud, through Ibrahim, from Ibrahim himself, and from 'Ubayd ibn 'Umayr. Al-Qurtubi gives horses from Ibn 'Abbas, Anas, al-Hasan and Mujahid, and camels from 'Ali, with whom, he says, Ibn Mas'ud, 'Ubayd ibn 'Umayr, Muhammad ibn Ka'b and as-Suddi agreed.",
            "bn": "১০০:২ আয়াত কি ১০০:১ আয়াতের সেই একই ছুটন্তদের কথা বলছে? উত্তর নির্ভর করে ছুটন্তরা কারা তার ওপর, আর এ প্রশ্নে পূর্বসূরিরা দুই ভাগ হয়েছিলেন। তাবারী ১০০:১ আয়াতের আলোচনায় ঘোড়ার মত বর্ণনা করেন ইবন আব্বাস (রাঃ), মুজাহিদ, ইকরিমা, আতা, কাতাদা ও দাহহাক থেকে। উটের মত বর্ণনা করেন ইবরাহীমের সূত্রে আবদুল্লাহ, অর্থাৎ ইবন মাসউদ (রাঃ) থেকে, ইবরাহীমের নিজের কথা থেকে এবং উবায়দ ইবন উমায়র থেকে। কুরতুবী ঘোড়ার মত দেন ইবন আব্বাস (রাঃ), আনাস (রাঃ), হাসান ও মুজাহিদ থেকে। উটের মত দেন আলী (রাঃ) থেকে, আর বলেন, ইবন মাসউদ (রাঃ), উবায়দ ইবন উমায়র, মুহাম্মাদ ইবন কা'ব ও সুদ্দী তাঁর সঙ্গে একমত।"
          },
          {
            "en": "On this verse the camel reading has its own picture. At-Tabari reports from 'Abdullah: when the camels scatter the pebbles with the pads of their feet, the pebbles strike one another and fire comes out of them. Al-Qurtubi gives Ibn Mas'ud's words as: the camels tread on the pebbles and fire comes out of them. Al-Qurtubi also reports, through Ibn Abi Najih from Mujahid, that Ibn 'Abbas said of the opening oaths: it is in fighting, and it is in Hajj. At-Tabari, on 100:1, gives that route with the first clause from Ibn 'Abbas and the second from Ibn Mas'ud.",
            "bn": "এই আয়াতে উটের ব্যাখ্যার নিজস্ব একটা ছবি আছে। তাবারী আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন: উট যখন পায়ের তলা দিয়ে নুড়িপাথর ছিটিয়ে দেয়, তখন নুড়িগুলো একটা আরেকটার গায়ে লাগে আর তা থেকে আগুন বের হয়। কুরতুবীর বর্ণনায় ইবন মাসউদ (রাঃ)-এর কথা এমন: উট নুড়ি মাড়িয়ে যায়, আর তা থেকে আগুন বের হয়। কুরতুবী ইবন আবী নাজীহের সূত্রে মুজাহিদ থেকে আরও বর্ণনা করেন, প্রথম শপথগুলো সম্পর্কে ইবন আব্বাস (রাঃ) বলেছেন: এটা যুদ্ধের ব্যাপারে, আবার হজের ব্যাপারেও। তাবারী ১০০:১ আয়াতে একই সূত্রে কথাটি দুই ভাগে দেন: প্রথম অংশ ইবন আব্বাস (রাঃ)-এর, দ্বিতীয় অংশ ইবন মাসউদ (রাঃ)-এর।"
          },
          {
            "en": "At-Tabari judges the horse reading the sounder of the two on 100:1, because camels do not pant, dabh, and only horses do, and Allah described these runners as running with dabh. He also records from 'Ali, through Abu Salih, a distinction: dabh in horses is their snorting, and in camels it is breath. Ibn Kathir, on 100:1, likewise puts Ibrahim and 'Ubayd ibn 'Umayr with 'Ali, Mujahid and the others named above with Ibn 'Abbas, and notes that Ibn Jarir chose the latter.",
            "bn": "১০০:১ আয়াতে তাবারী ঘোড়ার ব্যাখ্যাকেই দুইয়ের মধ্যে বেশি সঠিক ধরেন। তাঁর যুক্তি, উট দাবহ করে না, অর্থাৎ ছুটতে গিয়ে ওভাবে হাঁপায় না। দাবহ করে ঘোড়া, আর আল্লাহ এই ছুটন্তদের বর্ণনা দিয়েছেন দাবহ সহকারে ছোটা বলে। আবু সালিহের সূত্রে তিনি আলী (রাঃ)-এর একটি পার্থক্যও উল্লেখ করেন: ঘোড়ার দাবহ হলো তার নাক ঝাড়ার মতো শব্দ, আর উটের দাবহ হলো শ্বাস। ইবন কাসীরও ১০০:১ আয়াতে ইবরাহীম ও উবায়দ ইবন উমায়রকে রাখেন আলী (রাঃ)-এর পক্ষে, আর মুজাহিদসহ ওপরে উল্লিখিত অন্যদের রাখেন ইবন আব্বাস (রাঃ)-এর পক্ষে। তিনি জানান, ইবন জারীর বেছে নিয়েছেন শেষোক্ত মত।"
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
            "bn": "বিবাদটির সবচেয়ে পূর্ণাঙ্গ রূপ পাওয়া যায় তাবারীর একটি বর্ণনায়। সূত্রটি এমন: ইউনুস, ইবন ওয়াহব থেকে, তিনি আবু সাখর থেকে, তিনি আবু মুআবিয়া আল-বাজালী থেকে, তিনি সাঈদ ইবন জুবায়র থেকে, তিনি ইবন আব্বাস (রাঃ) থেকে। ইবন আব্বাস (রাঃ) বলেন, তিনি হিজরে বসে ছিলেন, এমন সময় এক লোক এসে আল-আদিয়াতি দাবহা সম্পর্কে জানতে চাইল। তিনি বললেন: সেই ঘোড়াগুলো, যারা আল্লাহর পথে অভিযানে বের হয়, তারপর রাতে আশ্রয় নেয়, লোকেরা খাবার রান্না করে আর আগুন জ্বালায়। লোকটি তাঁর কাছ থেকে উঠে আলী (রাঃ)-এর কাছে গেল। তিনি তখন যমযমের পানি পান করানোর জায়গার নিচে ছিলেন। লোকটি তাঁকেও একই প্রশ্ন করল।"
          },
          {
            "en": "'Ali asked whether he had put the question to anyone before him, and on hearing Ibn 'Abbas's answer sent for him. Standing over him, 'Ali said, in at-Tabari's wording: you give people rulings on what you have no knowledge of. By Allah, the first expedition in Islam was Badr, and we had only two horses with us, a horse for az-Zubayr and a horse for al-Miqdad, so how could it be al-'adiyat dabha? Al-'adiyat dabha are only from 'Arafah to Muzdalifah to Mina. Ibn 'Abbas said: so I withdrew my view and returned to what 'Ali had said.",
            "bn": "আলী (রাঃ) জিজ্ঞেস করলেন, তাঁর আগে আর কাউকে সে প্রশ্নটা করেছে কি না। ইবন আব্বাস (রাঃ)-এর উত্তর শুনে তিনি তাঁকে ডেকে পাঠালেন। তিনি এলে আলী (রাঃ) তাঁর সামনে দাঁড়িয়ে বললেন, তাবারীর ভাষায়: যে বিষয়ে তোমার জ্ঞান নেই, সে বিষয়ে তুমি মানুষকে ফতোয়া দিচ্ছ? আল্লাহর কসম, ইসলামের প্রথম যুদ্ধ ছিল বদর, আর তখন আমাদের সঙ্গে মাত্র দুটি ঘোড়া ছিল, একটি যুবায়র (রাঃ)-এর, একটি মিকদাদ (রাঃ)-এর। তাহলে আল-আদিয়াতি দাবহা ঘোড়া হয় কী করে? আল-আদিয়াতি দাবহা তো আরাফা থেকে মুযদালিফা, মুযদালিফা থেকে মিনা। ইবন আব্বাস (রাঃ) বলেন: তখন আমি আমার মত থেকে সরে এলাম এবং আলী (রাঃ)-এর কথায় ফিরে গেলাম।"
          },
          {
            "en": "Ibn Kathir gives the same report from Ibn Abi Hatim and Ibn Jarir, and adds, by the same chain, words of 'Ali that bear directly on this verse: when they come to rest at Muzdalifah, they kindle the fires. Neither he nor at-Tabari attaches a grading to the report in the texts fetched here, and at-Tabari still preferred horses on 100:1. None of the tafsirs fetched for 100:2 attaches a Prophetic hadith to the verse.",
            "bn": "ইবন কাসীর একই বর্ণনা আনেন ইবন আবী হাতিম ও ইবন জারীরের সূত্রে। একই সনদে তিনি আলী (রাঃ)-এর এমন একটি কথাও যোগ করেন, যা সরাসরি এই আয়াতের সঙ্গে জড়িত: তারা যখন মুযদালিফায় এসে থামে, তখন আগুন জ্বালায়। এখানে যে পাঠগুলো আনা হয়েছে, তাতে ইবন কাসীর বা তাবারী কেউই বর্ণনাটির মান উল্লেখ করেননি। আর তাবারী ১০০:১ আয়াতে তবু ঘোড়ার মতকেই অগ্রাধিকার দিয়েছেন। ১০০:২ আয়াতের জন্য আনা তাফসীরগুলোর কোনোটিই এ আয়াতের সঙ্গে নবী ﷺ-এর কোনো হাদিস যুক্ত করেনি।"
          },
          {
            "en": "The texts also keep the dispute in other shapes. Ibn Kathir has a short version in which, after 'Ali's objection that they had no horses at Badr, Ibn 'Abbas replies that it concerned a raiding party that was sent out. Al-Qurtubi gives it through ash-Sha'bi, with Ibn 'Abbas arguing from 100:4, and they raise dust thereby: do they raise it with anything but their hooves, and do camels pant? 'Ali answers with Badr, and al-Qurtubi's text ends with Ibn 'Abbas returning to 'Ali's view.",
            "bn": "পাঠগুলোতে বিবাদটি অন্য রূপেও সংরক্ষিত আছে। ইবন কাসীরের এক সংক্ষিপ্ত বর্ণনায় আলী (রাঃ) আপত্তি তোলেন, বদরের দিন তাঁদের ঘোড়া ছিল না। জবাবে ইবন আব্বাস (রাঃ) বলেন, কথাটা ছিল পাঠানো এক ছোট অভিযানের ব্যাপারে। কুরতুবী বর্ণনাটি আনেন শা'বীর সূত্রে। সেখানে ইবন আব্বাস (রাঃ) যুক্তি দেন ১০০:৪ আয়াত থেকে, তারা তা দিয়ে ধুলো ওড়ায়: খুর ছাড়া আর কী দিয়ে তারা ধুলো ওড়াবে? আর উট কি দাবহ করে? আলী (রাঃ) জবাব দেন বদরের কথা তুলে। কুরতুবীর পাঠ শেষ হয় এভাবে যে ইবন আব্বাস (রাঃ) আলী (রাঃ)-এর মতে ফিরে যান।"
          }
        ]
      },
      {
        "h": {
          "en": "Sparks Without Any Hooves",
          "bn": "খুর ছাড়াই যে স্ফুলিঙ্গ"
        },
        "p": [
          {
            "en": "Not every early reading took the sparks literally. At-Tabari reports through two chains that Qatadah said: they stirred up war between them and their enemy. Al-Baghawi gives Qatadah's words as the horses stirring up war and the fire of enmity between their riders. Al-Qurtubi explains this reading with the Arab phrase for a battle at its height, hamiya al-watis, the oven has grown hot, and with 5:64: every time they kindled a fire for war, Allah put it out.",
            "bn": "পূর্বসূরিদের সব ব্যাখ্যা স্ফুলিঙ্গকে আক্ষরিক অর্থে নেয়নি। তাবারী দুটি সূত্রে কাতাদার কথা বর্ণনা করেন: তারা নিজেদের আর শত্রুদের মধ্যে যুদ্ধ উসকে দিয়েছিল। বাগাভীর বর্ণনায় কাতাদার কথা এমন: ঘোড়াগুলো তাদের সওয়ারিদের মধ্যে যুদ্ধ আর শত্রুতার আগুন উসকে দেয়। কুরতুবী এ ব্যাখ্যা বোঝান আরবদের একটি কথা দিয়ে। যুদ্ধ যখন তুঙ্গে ওঠে, তারা বলে হামিয়াল ওয়াতীস, অর্থাৎ চুলা গরম হয়ে গেছে। সঙ্গে আনেন ৫:৬৪ আয়াত: যখনই তারা যুদ্ধের আগুন জ্বালায়, আল্লাহ তা নিভিয়ে দেন।"
          },
          {
            "en": "Another group read the verse as the scheming of men. At-Tabari reports it from Ibn 'Abbas, who said: scheming, and from Mujahid, who said: the scheming of men. Al-Baghawi names Mujahid and Zayd ibn Aslam, glosses the men as men of war, and cites an idiom the Arabs used when a man meant to outwit his companion: by Allah, I will strike for you, then I will kindle for you. Al-Qurtubi records a related saying, that the verse means men's thoughts, which kindle the fire of scheming and deceit.",
            "bn": "আরেক দল আয়াতটিকে মানুষের চক্রান্ত অর্থে নিয়েছেন। তাবারী এটি বর্ণনা করেন ইবন আব্বাস (রাঃ) থেকে, তিনি বলেন: চক্রান্ত। আর মুজাহিদ থেকে, তিনি বলেন: মানুষের চক্রান্ত। বাগাভী মুজাহিদ ও যায়দ ইবন আসলামের নাম নেন এবং ব্যাখ্যা করেন, এখানে মানুষ মানে যুদ্ধের লোক। তিনি আরবদের একটি বাগধারাও আনেন। কেউ সঙ্গীকে কৌশলে হারাতে চাইলে বলত: আল্লাহর কসম, তোমার জন্য আমি ঠুকব, তারপর আগুন জ্বালাব। কুরতুবী এর কাছাকাছি আরেকটি মত উল্লেখ করেন: এখানে উদ্দেশ্য মানুষের চিন্তা, যা চক্রান্ত আর প্রতারণার আগুন জ্বালায়।"
          },
          {
            "en": "'Ikrimah gave yet another: they are the tongues. At-Tabari reports it with the words it is said of this verse. Al-Qurtubi expands 'Ikrimah's saying: the tongues of men strike fire by the weight of what they speak, by setting out proofs and evidence, making the truth clear and showing falsehood to be false. Muhammad ibn Ka'b, in al-Baghawi and al-Qurtubi, said it is the fire that is gathered.",
            "bn": "ইকরিমা দিয়েছেন আরেকটি ব্যাখ্যা: এরা জিহ্বা। তাবারী এটি আনেন 'এ আয়াত সম্পর্কে বলা হয়' কথাটি দিয়ে। কুরতুবী ইকরিমার কথাটি আরও খুলে বলেন: মানুষের জিহ্বা আগুন ঠোকে তাদের কথার গুরুত্ব দিয়ে, দলিল-প্রমাণ দাঁড় করিয়ে, সত্যকে স্পষ্ট করে আর মিথ্যাকে বাতিল প্রমাণ করে। বাগাভী ও কুরতুবীর বর্ণনায় মুহাম্মাদ ইবন কা'ব বলেছেন, এ হলো একত্র করা আগুন।"
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
            "bn": "যাঁরা এসব ব্যাখ্যা যাচাই করেছেন, তাঁরা সবাই একভাবে যাচাই করেননি। তাবারী এই আয়াতের আলোচনায় বলেন, সবচেয়ে সঠিক কথা হলো: আল্লাহ শপথ করেছেন সেই মূরিয়াতের, যারা ঠুকে আগুন বের করে। ঘোড়া তা করে খুর দিয়ে, মানুষ চকমকি দিয়ে। দৃষ্টান্ত হিসেবে বললে জিহ্বা তা করে কথা দিয়ে, মানুষ করে চক্রান্ত দিয়ে। আর যুদ্ধের ময়দানে মুখোমুখি হলে ঘোড়া নিজের লোকদের মধ্যে যুদ্ধ উসকে দেয়। আল্লাহ এমন কোনো ইঙ্গিত রাখেননি যে এর কিছু উদ্দেশ্য আর কিছু নয়। তাই শব্দের বাহ্যিক ব্যাপকতার কারণে, ঠুকে আগুন বের করে এমন সবকিছুই শপথের ভেতরে পড়ে।"
          },
          {
            "en": "Al-Qurtubi takes a different line. After listing the figurative readings he says: these sayings are majaz, figurative, as when it is said that someone strikes the fire-steel of misguidance; the first is the haqiqah, the literal sense, that horses, from the force of their running, strike fire with their hooves. Ibn Kathir's Arabic text reports Ibn Jarir as saying that the correct view is the first, the horses striking with their hooves. That differs from the at-Tabari text fetched for this verse; both stand here as given.",
            "bn": "কুরতুবী অন্য পথ ধরেন। রূপক ব্যাখ্যাগুলো উল্লেখ করার পর তিনি বলেন: এসব কথা মাজায, অর্থাৎ রূপক। যেমন বলা হয়, অমুক গোমরাহির চকমকি ঠুকছে। আর প্রথম কথাটিই হাকীকত, অর্থাৎ আক্ষরিক অর্থ: প্রচণ্ড বেগে ছোটার কারণে ঘোড়া খুর দিয়ে আগুন ঠোকে। ইবন কাসীরের আরবি পাঠে আছে, ইবন জারীর বলেছেন সঠিক হলো প্রথম মত, অর্থাৎ খুর দিয়ে ঠুকে চলা ঘোড়া। এ আয়াতের জন্য আনা তাবারীর পাঠ থেকে এটি ভিন্ন। দুটিই এখানে যেমন পাওয়া গেছে তেমন রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Our Effort Sets Alight",
          "bn": "আমাদের চেষ্টা কী জ্বালায়"
        },
        "p": [
          {
            "en": "If the sparks are hooves on stone, the oath turns on a strength Allah placed in an animal. If they are tongues, al-Qurtubi's account of 'Ikrimah has tongues that set out proofs and make the truth clear; if they are scheming, the same image serves for a fire that harms. A reader need not settle the dispute to ask what his own effort sets alight.",
            "bn": "স্ফুলিঙ্গ যদি পাথরে খুরের আঘাত হয়, তবে শপথের কেন্দ্রে আছে সেই শক্তি, যা আল্লাহ একটি প্রাণীর মধ্যে রেখেছেন। যদি তা জিহ্বা হয়, তবে ইকরিমার কথা কুরতুবী যেভাবে এনেছেন, সেখানে জিহ্বা দলিল দাঁড় করায়, সত্যকে স্পষ্ট করে। আর যদি তা চক্রান্ত হয়, তবে একই ছবি ক্ষতিকর আগুনের কথাও বলে। বিবাদের মীমাংসা না করেও পাঠক নিজেকে জিজ্ঞেস করতে পারেন: আমার চেষ্টা কী জ্বালায়?"
          },
          {
            "en": "Ibn Kathir places the point of the oaths at 100:6, man is ungrateful to his Lord. That verse describes a human failing as the text describes it, and licenses nothing against any living person or community. The readings of war above report how early authorities understood a word; they describe no present conflict and endorse none. What stays with the reader is Muqatil's stingy old man: a fire struck in the dark, and no one warmed by it.",
            "bn": "ইবন কাসীর শপথগুলোর মূল কথা রাখেন ১০০:৬ আয়াতে: মানুষ তার রবের প্রতি বড়ই অকৃতজ্ঞ। আয়াতটি মানুষের একটি দুর্বলতার কথা বলে, ঠিক যতটুকু পাঠ বলে ততটুকুই। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। ওপরে যুদ্ধের যে ব্যাখ্যাগুলো এসেছে, সেগুলো কেবল জানায় পূর্বসূরিরা একটি শব্দ কীভাবে বুঝেছিলেন। বর্তমানের কোনো সংঘাতের কথা সেগুলো বলে না, কোনো সংঘাতকে সমর্থনও করে না। পাঠকের মনে যা থেকে যায়, তা মুকাতিলের সেই কৃপণ বুড়োর ছবি: অন্ধকারে ঠোকা এক আগুন, যাতে কেউ উষ্ণতা পেল না।"
          }
        ]
      }
    ]
  },
  "100:6": {
    "sections": [
      {
        "h": {
          "en": "Horses Before Dawn",
          "bn": "ভোরের আগে অশ্বদল"
        },
        "p": [
          {
            "en": "Surah al-Adiyat opens with five verses of motion. 100:1-5 swear by the racers that pant, by those striking sparks, by the raiders at dawn, by the dust they stir up, and by their driving into the midst of a gathering. Ibn Kathir reads them as the horses of battle in the path of Allah: the panting is the sound of a running horse, the sparks fly from hooves on rock, and the dawn raid was the Prophet's own practice.",
            "bn": "সূরা আল-আদিয়াত শুরু হয় গতিতে ভরা পাঁচটি আয়াত দিয়ে। ১০০:১-৫ আয়াতে আল্লাহ শপথ করেছেন হাঁপাতে হাঁপাতে ছুটে চলা দৌড়বাজদের, খুরের ঘায়ে আগুনের ফুলকি ছোটানোদের, ভোরবেলা হামলাকারীদের, তাদের ওড়ানো ধুলার, আর দলের মাঝখানে তাদের ঢুকে পড়ার। ইবনে কাসীর এগুলোকে আল্লাহর পথে যুদ্ধের ঘোড়া বলে বুঝেছেন: হাঁপানোর আওয়াজ ছুটন্ত ঘোড়ার শব্দ, ফুলকি ছোটে পাথরে খুরের আঘাতে, আর ভোরে অভিযান চালানো ছিল নবী ﷺ-এর নিজেরই রীতি।"
          }
        ]
      },
      {
        "h": {
          "en": "Kanud",
          "bn": "কানূদ"
        },
        "p": [
          {
            "en": "100:6 is what the oaths were sworn for: inna al-insana li-rabbihi la-kanud, four words. The classical readings of kanud cluster around ingratitude but are not identical. Ibn Abbas, Mujahid, Qatadah, al-Hasan, ad-Dahhak and Ibn Zayd all gloss it as ungrateful — denying the favours of his Lord rather than merely forgetting them. Ibn Kathir reports al-Hasan's sharper version: al-kanud is the one who counts the calamities that befall him and forgets the favours of Allah.",
            "bn": "১০০:৬ আয়াতের জন্যই এতগুলো শপথ: 'ইন্নাল ইনসানা লিরাব্বিহী লাকানূদ', মাত্র চারটি শব্দ। কানূদ শব্দের যেসব ব্যাখ্যা পূর্বসূরিরা দিয়েছেন, সেগুলো অকৃতজ্ঞতার আশপাশেই ঘোরে, তবে সবগুলো হুবহু এক নয়। ইবনে আব্বাস, মুজাহিদ, কাতাদাহ, হাসান বসরী, দাহহাক ও ইবনে যায়দ সবাই এর অর্থ করেছেন অকৃতজ্ঞ। মানে, রবের নিয়ামত শুধু ভুলে যাওয়া নয়, অস্বীকার করা। ইবনে কাসীর হাসান বসরীর আরও ধারালো একটি কথা এনেছেন: কানূদ সেই লোক, যে নিজের ওপর আসা বিপদগুলো গুনে রাখে আর আল্লাহর নিয়ামতগুলো ভুলে যায়।"
          },
          {
            "en": "The lexicographers add a picture from the root itself, which is used of ground called kanud: land that takes the rain and returns no vegetation. That image explains the word better than any definition. The complaint is not that a man received nothing; it is that everything went in and nothing came back out. Rain on such ground is not refused, and it is not repaid either, which is precisely the shape of a life full of blessings and empty of thanks.",
            "bn": "অভিধানবিদেরা শব্দের মূল থেকেই একটা ছবি দেন। কানূদ বলা হয় এমন জমিকে, যা বৃষ্টির পানি শুষে নেয়, কিন্তু বিনিময়ে কোনো সবুজ ফলায় না। কোনো সংজ্ঞা দিয়ে শব্দটা এত ভালো বোঝানো যায় না। অভিযোগটা এই নয় যে মানুষটা কিছুই পায়নি। অভিযোগ হলো, সবই ভেতরে গেছে, কিছুই বেরিয়ে আসেনি। এমন জমি বৃষ্টি ফিরিয়ে দেয় না, আবার বৃষ্টির প্রতিদানও দেয় না। নিয়ামতে ভরা অথচ শুকরিয়াশূন্য জীবনের চেহারা ঠিক এমনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Is Meant by Man",
          "bn": "'মানুষ' বলতে কাকে বোঝানো হয়েছে"
        },
        "p": [
          {
            "en": "The commentators divide over al-insan here, and it is better to report the division than to settle it. Some restrict the verse to the ungrateful denier, on the ground that a believer is not described this way. Others read it as a statement about the human being as such, a tendency the Quran names elsewhere — 14:34 says that mankind is most unjust and ungrateful. On the second reading the verse is a mirror, and mirrors are only useful to people willing to look.",
            "bn": "এখানে আল-ইনসান মানে কে, তা নিয়ে মুফাসসিরদের মধ্যে মতভেদ আছে। মীমাংসা টানার চেয়ে মতভেদটা জানিয়ে দেওয়াই ভালো। কেউ কেউ আয়াতটিকে অকৃতজ্ঞ কাফিরের মধ্যে সীমাবদ্ধ রাখেন। তাঁদের যুক্তি, মুমিনের এমন বর্ণনা হয় না। অন্যরা একে মানুষমাত্রেরই স্বভাবের কথা বলে বুঝেছেন। এই স্বভাবের কথা কুরআন অন্য জায়গাতেও বলেছে: ১৪:৩৪ আয়াতে আছে, মানুষ বড়ই জালিম, বড়ই অকৃতজ্ঞ। দ্বিতীয় ব্যাখ্যায় আয়াতটি একটা আয়না। আর আয়না কাজে লাগে শুধু তাদের, যারা তাকাতে রাজি।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness, and the Love of Good",
          "bn": "সাক্ষী, আর 'কল্যাণ'-প্রীতি"
        },
        "p": [
          {
            "en": "100:7 says: and indeed, to that he is a witness. Qatadah and Sufyan ath-Thawri read the pronoun as Allah — He is witness to man's ingratitude. Muhammad ibn Ka'b al-Qurazi read it as man himself, whose own words and conduct testify against him. Then 100:8: and indeed, in love of al-khayr he is intense. Al-khayr here means wealth, and the choice of word is the quiet indictment — the thing is called good, and the good is what is loved fiercely.",
            "bn": "১০০:৭ আয়াতে আছে: আর নিশ্চয়ই সে এ বিষয়ে সাক্ষী। কাতাদাহ ও সুফিয়ান সাওরীর মতে এখানে 'সে' মানে আল্লাহ: মানুষের অকৃতজ্ঞতার সাক্ষী তিনি নিজেই। মুহাম্মাদ ইবনে কা'ব আল-কুরাযীর মতে 'সে' মানে মানুষ নিজেই। তার নিজের কথা আর আচরণই তার বিরুদ্ধে সাক্ষ্য দেয়। এরপর ১০০:৮: আর নিশ্চয়ই আল-খাইরের ভালোবাসায় সে খুবই প্রবল। এখানে আল-খাইর মানে ধনসম্পদ। শব্দ বাছাইয়ের মধ্যেই আছে নীরব অভিযোগ: সম্পদকে বলা হলো 'খাইর', অর্থাৎ ভালো জিনিস, আর এই ভালোকেই মানুষ ভালোবাসে প্রচণ্ডভাবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Graves Give Up",
          "bn": "কবর যা ফিরিয়ে দেবে"
        },
        "p": [
          {
            "en": "The surah then turns the whole scene over. 100:9-11 ask whether he does not know that when what is in the graves is scattered forth, and what is in the breasts is collected, their Lord that Day will be fully Aware of them. Notice which container is opened second. The graves give up bodies; the breasts give up what was inside them, and 100:6 has already said what that is. The dawn raid was loud; the real disclosure is silent.",
            "bn": "এরপর সূরাটি পুরো দৃশ্যটাই উল্টে দেয়। ১০০:৯-১১ আয়াতে প্রশ্ন: সে কি জানে না, যখন কবরে যা আছে তা বের করে ছড়িয়ে দেওয়া হবে, আর বুকের ভেতরে যা আছে তা জড়ো করা হবে, সেদিন তাদের রব তাদের সম্পর্কে পুরোপুরি অবগত থাকবেন? খেয়াল করুন, দ্বিতীয় যে পাত্রটি খোলা হচ্ছে, সেটি কী। কবর ফিরিয়ে দেয় দেহ। আর বুক ফিরিয়ে দেয় তার ভেতরে যা ছিল। সেটা কী, ১০০:৬ আয়াত আগেই বলে দিয়েছে। ভোরের হামলা ছিল কোলাহলে ভরা; আসল উন্মোচন হবে নিঃশব্দে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reversing the Count",
          "bn": "হিসাবটা উল্টে দেওয়া"
        },
        "p": [
          {
            "en": "Al-Hasan's definition hands over the remedy with the diagnosis. If kanud is counting the calamities and forgetting the favours, then the cure is to reverse which list is kept. Most people can produce their grievances from memory and cannot produce five blessings without pausing. The imbalance is not a character flaw so much as a filing habit, and filing habits can be changed deliberately by anyone willing to spend two minutes a day on the neglected column.",
            "bn": "হাসান বসরীর সংজ্ঞাটি দোষ ধরিয়ে দেওয়ার সঙ্গে সঙ্গে ওষুধও বলে দেয়। কানূদ যদি হয় বিপদ গুনে রাখা আর নিয়ামত ভুলে যাওয়া, তবে চিকিৎসা হলো উল্টো খাতাটা রাখা। বেশির ভাগ মানুষ নিজের অভিযোগগুলো মুখস্থ বলে দিতে পারে, অথচ না থেমে পাঁচটি নিয়ামতের কথা বলতে পারে না। এই ভারসাম্যহীনতা যতটা না চরিত্রের দোষ, তার চেয়ে বেশি কোন কথা কোথায় তুলে রাখি, তারই একটা অভ্যাস। আর এমন অভ্যাস চাইলেই বদলানো যায়, যদি কেউ হিসাবের অবহেলিত ঘরটার পেছনে দিনে দুই মিনিট দিতে রাজি থাকে।"
          },
          {
            "en": "The barren-ground image gives the second half of the cure. Ground that returns nothing is the problem, so thanks that stays inside the chest is only half of shukr. Wealth is thanked by spending some of it, strength by carrying something for someone, knowledge by teaching it, and a working body by using it on what is worth doing. The surah is not asking for a feeling. It is asking the ground to produce.",
            "bn": "অনুর্বর জমির ছবিটা ওষুধের বাকি অর্ধেকটা দেয়। সমস্যা তো সেই জমি, যা কিছুই ফিরিয়ে দেয় না। তাই যে শুকরিয়া বুকের ভেতরেই আটকে থাকে, তা শুকরিয়ার অর্ধেক মাত্র। সম্পদের শুকরিয়া তার কিছু খরচ করা, শক্তির শুকরিয়া কারও বোঝা বয়ে দেওয়া, জ্ঞানের শুকরিয়া তা শেখানো, আর সচল দেহের শুকরিয়া তাকে করার মতো কাজে খাটানো। সূরাটি কোনো অনুভূতি চাইছে না। চাইছে, জমিটা ফসল দিক।"
          }
        ]
      }
    ]
  }
});
