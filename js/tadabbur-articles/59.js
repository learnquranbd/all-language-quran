/**
 * Tadabbur long-form articles — surah 59.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "59:2": {
    "sections": [
      {
        "h": {
          "en": "He Is the One Who Expelled",
          "bn": "বের করেছেন তিনিই"
        },
        "p": [
          {
            "en": "The surah opens in 59:1 with everything in the heavens and the earth glorifying Allah, the Mighty, the Wise. The second verse keeps the same subject: huwa alladhi akhraja, it is He who expelled. The act is given to Allah before any human hand appears in it. Those expelled are alladhina kafaru min ahl al-kitab, those who disbelieved among the People of the Scripture. Al-Muyassar and at-Tabari both gloss kafaru as those who denied the prophethood of Muhammad ﷺ, and both say they were the Jews of Banu an-Nadir.",
            "bn": "৫৯:১ আয়াতে সূরা শুরু হয় এই কথায় যে আসমান ও যমীনের সবকিছু পরাক্রমশালী, প্রজ্ঞাময় আল্লাহর মহিমা ঘোষণা করে। দ্বিতীয় আয়াতেও কর্তা তিনিই: হুওয়াল্লাযী আখরাজা, তিনিই সেই সত্তা যিনি বের করে দিলেন। কোনো মানুষের হাত দেখা দেওয়ার আগেই কাজটা আল্লাহর নামে লেখা হয়ে গেছে। যাদের বের করা হলো, তারা আল্লাযীনা কাফারূ মিন আহলিল কিতাব, কিতাবধারীদের মধ্যে যারা কুফরি করেছিল। মুয়াসসার আর তাবারী দুজনেই কাফারূ শব্দের ব্যাখ্যা দেন এভাবে: যারা মুহাম্মাদ ﷺ-এর নবুয়ত অস্বীকার করেছিল। দুজনেই বলেন, এরা ছিল বনু নাদিরের ইহুদিরা।"
          },
          {
            "en": "Ibn Kathir gives the same identification from Ibn Abbas, Mujahid, az-Zuhri and several others. Al-Qurtubi opens with Sa'id ibn Jubayr asking Ibn Abbas about Surat al-Hashr and being told: call it Surat an-Nadir. At-Tabari reports from Yazid ibn Ruman that the whole surah came down about them. Al-Qurtubi also records one dissent: al-Hasan said the verse means Banu Qurayzah. The rest of the commentators, he says, citing ath-Tha'labi, disagreed, because Banu Qurayzah were not driven out in this way but killed.",
            "bn": "ইবন কাসীর একই পরিচয় দেন ইবন আব্বাস, মুজাহিদ, যুহরী এবং আরও অনেকের সূত্রে। কুরতুবী শুরু করেন সাঈদ ইবন জুবাইরের একটি প্রশ্ন দিয়ে। তিনি ইবন আব্বাসকে সূরাতুল হাশর সম্পর্কে জিজ্ঞেস করলে উত্তর আসে: একে সূরাতুন নাদির বলো। তাবারী ইয়াযীদ ইবন রূমানের সূত্রে বর্ণনা করেন, গোটা সূরাটাই নাজিল হয়েছে তাদের ব্যাপারে। কুরতুবী একটি ভিন্নমতও উল্লেখ করেন। হাসানের মতে আয়াতে বনু কুরাইজার কথা বলা হয়েছে। সা'লাবীর বরাতে কুরতুবী জানান, বাকি তাফসীরকারেরা এ মতের বিরোধিতা করেছেন। তাঁদের যুক্তি, বনু কুরাইজাকে এভাবে বের করে দেওয়া হয়নি, তাদের হত্যা করা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Pact, Then a Siege",
          "bn": "চুক্তি, তারপর অবরোধ"
        },
        "p": [
          {
            "en": "The events come to us only through the commentators' reports. Ibn Kathir says that when the Messenger ﷺ came to Madinah he made a truce with them, on the terms that he would not fight them nor they him, and that they broke it. He then summarises what the authors of the maghazi and sira relate, through Ibn Ishaq from Yazid ibn Ruman: that some of them plotted to drop a rock on the Prophet ﷺ from a rooftop beside him, and that he was informed from heaven and went back to Madinah.",
            "bn": "আয়াতের পেছনের ঘটনাগুলো আমরা জানি কেবল তাফসীরকারদের বর্ণনা থেকে। ইবন কাসীর বলেন, রাসূল ﷺ মদীনায় এসে তাদের সঙ্গে সন্ধি করেছিলেন। শর্ত ছিল, তিনি তাদের সঙ্গে লড়বেন না, তারাও তাঁর সঙ্গে লড়বে না। তারা সে চুক্তি ভঙ্গ করে। এরপর তিনি মাগাযী ও সীরাত লেখকদের বর্ণনার সারসংক্ষেপ দেন, ইবন ইসহাকের মাধ্যমে ইয়াযীদ ইবন রূমানের সূত্রে। সেখানে আছে, তাদের কয়েকজন ছাদ থেকে নবী ﷺ-এর উপর পাথর ফেলার ফন্দি আঁটে। আসমান থেকে তাঁকে খবর জানিয়ে দেওয়া হয়, আর তিনি মদীনায় ফিরে যান।"
          },
          {
            "en": "At-Tabari states the terms of the departure: the Prophet ﷺ guaranteed their lives, their women and their children, they could take what their camels could carry, and their houses and remaining property were left to him. Qatada places it on the Prophet's return from Uhud, and al-Baghawi cites Ibn Ishaq for the same. At-Tabari says some went to Sham and some to Khaybar. Ibn Kathir names Adhri'at in upper Sham, which he calls the land of the gathering and the raising.",
            "bn": "বেরিয়ে যাওয়ার শর্তগুলো তাবারী জানিয়ে দেন। নবী ﷺ তাদের জান, তাদের নারী ও সন্তানদের নিরাপত্তা দিলেন। উট যা বইতে পারে, তা তারা নিয়ে যেতে পারবে। ঘরবাড়ি আর বাকি সম্পদ থেকে যাবে তাঁর জন্য। কাতাদা ঘটনাটিকে উহুদ থেকে নবী ﷺ-এর ফেরার সময়ের সঙ্গে যুক্ত করেন, আর বাগাভী একই কথা আনেন ইবন ইসহাক থেকে। তাবারী বলেন, তাদের কেউ গেল শামে, কেউ খাইবারে। ইবন কাসীর শামের উঁচু অঞ্চলের আযরিআতের নাম নেন। তাঁর ভাষায় সেটাই হাশর ও পুনরুত্থানের ভূমি।"
          },
          {
            "en": "Al-Qurtubi carries a different telling, introduced with it is reported. In it they had agreed to be neither against the Prophet ﷺ nor for him, then doubted and broke faith after Uhud, and Ka'b ibn al-Ashraf rode to Makkah to ally with Quraysh against him. Told to leave Madinah, they replied that death was dearer to them; another version has them ask ten days to prepare. Abdullah ibn Ubayy sent word not to leave, and they fortified their streets for 21 nights. Ibn Kathir instead says the siege lasted six days. Both figures stand as given.",
            "bn": "কুরতুবী আনেন আরেকটি বর্ণনা, 'বর্ণিত আছে' কথাটি দিয়ে শুরু করে। সেখানে আছে, তারা কথা দিয়েছিল নবী ﷺ-এর বিপক্ষেও থাকবে না, পক্ষেও না। উহুদের পর তাদের মনে সন্দেহ জাগে, তারা কথা ভাঙে। কা'ব ইবনুল আশরাফ মক্কায় গিয়ে তাঁর বিরুদ্ধে কুরাইশের সঙ্গে জোট বাঁধে। মদীনা ছাড়তে বলা হলে তারা জবাব দেয়, এর চেয়ে মৃত্যুই আমাদের কাছে প্রিয়। আরেক বর্ণনায় আছে, তারা প্রস্তুতির জন্য ১০ দিন সময় চেয়েছিল। আবদুল্লাহ ইবন উবাই খবর পাঠায়, বের হয়ো না। তারা ২১ রাত গলিপথগুলো সুরক্ষিত করে আগলে রাখে। ইবন কাসীর অবশ্য বলেন, অবরোধ চলেছিল ৬ দিন। দুটি সংখ্যাই যেমন আছে তেমন রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "A First of What?",
          "bn": "কিসের প্রথম?"
        },
        "p": [
          {
            "en": "Li-awwal al-hashr: at the first gathering. Al-Qurtubi defines hashr as gathering together. At-Tabari takes it as the first gathering in this world, their being driven to the land of Sham, and cites az-Zuhri: their exile was the first gathering in this world, to Sham. Az-Zuhri adds, in at-Tabari, al-Baghawi and al-Qurtubi, that they were of a clan never exiled before. Ibn Kathir reports from Ibn Abi Hatim that Ibn Abbas said: whoever doubts that the land of the gathering is here, meaning Sham, let him recite this verse.",
            "bn": "লি-আওয়ালিল হাশর: প্রথম সমাবেশে। কুরতুবী হাশরের অর্থ বলেন একত্র করা। তাবারীর মতে এ হলো দুনিয়ার প্রথম সমাবেশ, অর্থাৎ শামের ভূমির দিকে তাদের তাড়িয়ে নেওয়া। এর সমর্থনে তিনি যুহরীর কথা আনেন: তাদের নির্বাসনই ছিল দুনিয়াতে শামের দিকে প্রথম হাশর। তাবারী, বাগাভী ও কুরতুবীর উদ্ধৃত বর্ণনায় যুহরী আরও বলেন, তারা এমন এক গোত্রের লোক, যাদের আগে কখনো দেশছাড়া হতে হয়নি। ইবন কাসীর ইবন আবী হাতিমের সূত্রে বর্ণনা করেন, ইবন আব্বাস বলেছেন: হাশরের ভূমি যে এখানেই, মানে শামে, এ নিয়ে যার সন্দেহ আছে, সে এই আয়াতটি পড়ুক।"
          },
          {
            "en": "Others read the first as the first of several. Al-Kalbi, in al-Baghawi, says they were the first of the People of the Scripture expelled from the Arabian Peninsula, and Umar ibn al-Khattab later expelled the last of them. Murra al-Hamdani, also in al-Baghawi, puts the first from Madinah and the second from Khaybar and the whole peninsula to Adhri'at and Ariha in Sham, in Umar's days. As-Sa'di says the verse itself points to a further exile, which came when the Prophet ﷺ expelled them from Khaybar and Umar then removed the rest.",
            "bn": "কেউ কেউ প্রথম কথাটিকে পড়েছেন একাধিকের মধ্যে প্রথম হিসেবে। বাগাভীর উদ্ধৃত বর্ণনায় কালবী বলেন, আরব উপদ্বীপ থেকে কিতাবধারীদের মধ্যে প্রথম বহিষ্কৃত হয়েছিল এরাই, আর তাদের শেষ দলটিকে পরে বের করেন উমর ইবনুল খাত্তাব (রাঃ)। বাগাভীতেই মুররা হামদানীর কথা আছে: প্রথম হাশর মদীনা থেকে, আর দ্বিতীয়টি উমর (রাঃ)-এর আমলে খাইবার ও গোটা উপদ্বীপ থেকে শামের আযরিআত ও আরীহায়। সা'দী বলেন, আয়াত নিজেই আরেকটি নির্বাসনের ইঙ্গিত দেয়। সেটা ঘটেছিল যখন নবী ﷺ তাদের খাইবার থেকে বের করেন, তারপর উমর (রাঃ) বাকিদের সরিয়ে দেন।"
          },
          {
            "en": "Qatada, in at-Tabari, puts the second gathering at the end of time: a fire driving people from east to west. Ibn al-Arabi, in al-Qurtubi, counts a first, a middle and a last: Banu an-Nadir, then Khaybar, then the Day of Resurrection. Ma'arif al-Qur'an adds a sense: the Muslims' first mustering against them. At-Tabari carries a report from al-Hasan, opened with it reached me and with no chain to the Prophet ﷺ, that on expelling them he said: go, this is the first gathering, and we are on the trail. None of these glosses is chosen here.",
            "bn": "তাবারীর উদ্ধৃত বর্ণনায় কাতাদা দ্বিতীয় হাশরকে রাখেন শেষ জমানায়। এক আগুন মানুষকে পূর্ব থেকে পশ্চিমে তাড়িয়ে নেবে। কুরতুবীর উদ্ধৃতিতে ইবনুল আরাবী গোনেন তিনটি ধাপ: প্রথমটি বনু নাদির, মাঝেরটি খাইবার, শেষটি কিয়ামতের দিন। মাআরিফুল কুরআন আরেকটি অর্থও দেয়: তাদের বিরুদ্ধে মুসলিমদের প্রথম সমাবেশ। তাবারী হাসানের একটি বর্ণনাও আনেন। তা শুরু হয় 'আমার কাছে পৌঁছেছে' কথায়, নবী ﷺ পর্যন্ত কোনো সনদ ছাড়াই। তাতে আছে, তাদের বের করে দেওয়ার সময় তিনি বলেছিলেন: চলে যাও, এই হলো প্রথম হাশর, আর আমরা আছি পেছনে পেছনে। এর কোনো ব্যাখ্যাকে এখানে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Surmises About Walls",
          "bn": "দেয়াল নিয়ে দুই ধারণা"
        },
        "p": [
          {
            "en": "Ma zanantum an yakhruju: you did not think they would leave. At-Tabari reads it as addressed to the believers among the Prophet's Companions, and each source gives a reason. Ibn Kathir: within the short span of your siege, with their fortresses so strong. Al-Qurtubi: because the standing, strength and unity of the Jews loomed so large in the Muslims' breasts. Al-Baghawi: their might and defences, for they were people of fortresses, estates and many palm groves. As-Sa'di: their homes were fortified, and they held them with pride.",
            "bn": "মা যানানতুম আঁই ইয়াখরুজূ: তোমরা ভাবোনি যে তারা বেরিয়ে যাবে। তাবারীর মতে কথাটা বলা হচ্ছে নবী ﷺ-এর সাহাবিদের মধ্যকার মু'মিনদের। কেন তারা এমন ভাবেনি, প্রতিটি সূত্র তার একটা কারণ দেয়। ইবন কাসীর বলেন, তোমাদের অবরোধ ছিল অল্প দিনের, আর তাদের দুর্গ ছিল খুব মজবুত। কুরতুবী বলেন, ইহুদিদের প্রতিপত্তি, শক্তি আর ঐক্য মুসলিমদের মনে অনেক বড় হয়ে বসে ছিল। বাগাভীর কথায়, তাদের ছিল দাপট আর প্রতিরক্ষা। তারা ছিল দুর্গ, জমিজমা আর বিস্তর খেজুর বাগানের মালিক। সা'দী বলেন, তাদের বসতি ছিল সুরক্ষিত, আর তা নিয়ে তাদের গর্বও ছিল।"
          },
          {
            "en": "Wa zannu annahum mani'atuhum husunuhum min Allah: and they thought their fortresses would protect them from Allah. Al-Baghawi glosses min Allah as from the authority of Allah, and al-Qurtubi as from His command. At-Tabari gives a reason for their confidence: Abdullah ibn Ubayy and a group of hypocrites sent word during the siege, promising help that never came. As-Sa'di looks inward: they were dazzled by their fortresses and deceived by them, while the decree of Allah stood behind it all, against which forts and citadels avail nothing.",
            "bn": "ওয়া যান্নূ আন্নাহুম মানিআতুহুম হুসূনুহুম মিনাল্লাহ: আর তারা ভেবেছিল তাদের দুর্গগুলো তাদের আল্লাহর হাত থেকে রক্ষা করবে। বাগাভী মিনাল্লাহর অর্থ করেন আল্লাহর ক্ষমতা থেকে, কুরতুবী করেন তাঁর হুকুম থেকে। এত ভরসার একটা কারণ তাবারী জানান। অবরোধের সময় আবদুল্লাহ ইবন উবাই আর একদল মুনাফিক তাদের সাহায্যের কথা দিয়েছিল। সে সাহায্য আর আসেনি। সা'দী তাকান ভেতরের দিকে। তারা নিজেদের দুর্গ দেখে মুগ্ধ ছিল, আর সেই দুর্গই তাদের ধোঁকায় ফেলেছিল। অথচ সবকিছুর পেছনে ছিল আল্লাহর ফয়সালা, যার সামনে দুর্গ আর কেল্লা কোনো কাজে আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unguarded Door",
          "bn": "যেদিকে পাহারা ছিল না"
        },
        "p": [
          {
            "en": "Fa-atahumu Allahu min haythu lam yahtasibu: then Allah came upon them from where they had not reckoned. At-Tabari, al-Baghawi and al-Qurtubi read it as the command of Allah coming. What was the unreckoned direction? At-Tabari: the terror cast into their hearts when the Prophet ﷺ and his Companions came down upon them. Al-Baghawi: that Allah commanded His Prophet ﷺ to fight and expel them, which they had not expected. Ibn Kathir sets 16:26 beside it, where Allah came at the building of earlier plotters from its foundations.",
            "bn": "ফাআতাহুমুল্লাহু মিন হাইসু লাম ইয়াহতাসিবূ: তারপর আল্লাহ তাদের কাছে এলেন এমন দিক থেকে, যার হিসাব তারা করেনি। তাবারী, বাগাভী ও কুরতুবীর মতে এর মানে আল্লাহর হুকুম এসে পৌঁছাল। সেই অভাবিত দিকটা কী ছিল? তাবারীর উত্তর: নবী ﷺ সাহাবিদের নিয়ে তাদের কাছে নামলেন, আর তাদের অন্তরে ঢেলে দেওয়া হলো ভয়। বাগাভীর উত্তর: আল্লাহ তাঁর নবী ﷺ-কে তাদের সঙ্গে লড়তে ও তাদের বের করে দিতে হুকুম দিলেন, যা তারা আশা করেনি। ইবন কাসীর পাশে রাখেন ১৬:২৬ আয়াত। সেখানে আগের চক্রান্তকারীদের ইমারতে আল্লাহ আঘাত হানেন একেবারে ভিত থেকে।"
          },
          {
            "en": "Wa qadhafa fi qulubihimu al-ru'b: and He cast terror into their hearts. Al-Baghawi and al-Qurtubi tie the terror to the killing of their chief, Ka'b ibn al-Ashraf, and al-Qurtubi gives that same reading of the unreckoned direction from Ibn Jurayj, as-Suddi and Abu Salih. As-Sa'di makes the terror itself the door, the one they never thought to guard while they watched their walls. He calls intense fear Allah's greatest army, against which neither numbers nor equipment avail, and adds that whoever trusts in other than Allah is forsaken.",
            "bn": "ওয়া কাযাফা ফী কুলূবিহিমুর রু'ব: আর তিনি তাদের অন্তরে ভীতি ঢেলে দিলেন। বাগাভী ও কুরতুবী এই ভয়কে যুক্ত করেন তাদের নেতা কা'ব ইবনুল আশরাফের নিহত হওয়ার সঙ্গে। কুরতুবী ইবন জুরাইজ, সুদ্দী ও আবূ সালিহ থেকে অভাবিত দিকটারও একই ব্যাখ্যা আনেন। সা'দীর কাছে ভয়টাই সেই দরজা। তারা দেয়ালের দিকে চোখ রেখেছিল, আর এই দরজায় পাহারা বসানোর কথা মাথায়ই আসেনি। তাঁর ভাষায় প্রবল ভয় হলো আল্লাহর সবচেয়ে বড় বাহিনী। এর সামনে লোকবল বা অস্ত্রশস্ত্র কিছুই কাজে আসে না। তিনি আরও বলেন, আল্লাহ ছাড়া অন্য কিছুর উপর যে ভরসা করে, সে শেষে অসহায় হয়ে পড়ে।"
          },
          {
            "en": "Al-Qurtubi and Ibn Kathir both recall that the Prophet ﷺ was given victory through terror at a month's distance. The saying is general and not attached to this verse. Al-Bukhari records it in his Sahih (335) from Jabir ibn Abdullah, in a hadith where the Prophet ﷺ lists five things given to him that were not given to anyone before him; victory through terror at a month's distance is the first. The hadith is described here, not quoted.",
            "bn": "কুরতুবী ও ইবন কাসীর দুজনেই মনে করিয়ে দেন, এক মাসের পথের দূরত্ব থেকেই শত্রুর মনে ভীতি ঢেলে দিয়ে নবী ﷺ-কে বিজয় দেওয়া হয়েছিল। কথাটা সাধারণ, বিশেষ করে এ আয়াতের সঙ্গে যুক্ত নয়। বুখারী তাঁর সহীহ গ্রন্থে (৩৩৫) জাবির ইবন আবদুল্লাহ (রাঃ) থেকে এটি বর্ণনা করেছেন। সে হাদিসে নবী ﷺ এমন পাঁচটি জিনিসের কথা বলেন, যা তাঁর আগে আর কাউকে দেওয়া হয়নি। এক মাসের দূরত্ব থেকে ভীতি দিয়ে বিজয়, এটাই তার প্রথমটি। এখানে হাদিসটির মর্ম বলা হলো, হুবহু উদ্ধৃতি দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Houses Taken Apart",
          "bn": "নিজের হাতে খোলা ঘর"
        },
        "p": [
          {
            "en": "Yukhribuna buyutahum: they ruin their houses. At-Tabari reports that most reciters of the Hijaz, Madinah and Iraq read yukhribuna, meaning they leave them empty and ruined, while Abu Amr read yukharribuna, with a doubled ra', meaning they demolish, arguing that Banu an-Nadir did not simply leave their homes but tore them down. At-Tabari prefers the first reading because the authoritative reciters agree on it, and notes that some experts in Arabic held the two forms to mean the same. Al-Baghawi says plainly that their meaning is one.",
            "bn": "ইউখরিবূনা বুয়ূতাহুম: তারা নিজেদের ঘরবাড়ি বিরান করছিল। তাবারী জানান, হিজায, মদীনা ও ইরাকের অধিকাংশ কারী পড়েছেন ইউখরিবূনা। এর অর্থ, ঘর ফেলে চলে যাওয়া, যাতে তা খালি আর বিরান পড়ে থাকে। আবূ আমর পড়েছেন রা-তে তাশদীদ দিয়ে, ইউখাররিবূনা, যার অর্থ ভেঙে ফেলা। তাঁর যুক্তি, বনু নাদির শুধু ঘর ছেড়ে যায়নি, ঘর ভেঙে গেছে। তাবারী প্রথম কিরাআতটিকেই অগ্রাধিকার দেন, কারণ প্রামাণ্য কারীরা এতে একমত। তিনি এটাও উল্লেখ করেন যে আরবি ভাষার কিছু বিশেষজ্ঞের মতে দুই রূপের অর্থ একই। বাগাভী সোজাসুজি বলেন, দুটির অর্থ এক।"
          },
          {
            "en": "What did their own hands do? Az-Zuhri, in at-Tabari, says that once they had made terms, any timber they liked they took, and that was the ruin of the houses. Yazid ibn Ruman, in at-Tabari and Ibn Kathir, says a man would pull down his house around the lintel of his door, put it on his camel's back and go. Ibn Zayd, in at-Tabari, says they tore out even the pegs; al-Baghawi and al-Qurtubi add from him that they did it so the believers would not live in them.",
            "bn": "তাদের নিজেদের হাত কী করেছিল? তাবারীর উদ্ধৃত বর্ণনায় যুহরী বলেন, সন্ধি হয়ে যাওয়ার পর যে কাঠ তাদের পছন্দ হতো, তা-ই তারা খুলে নিত। এভাবেই ঘরগুলো বিরান হলো। তাবারী ও ইবন কাসীরের উদ্ধৃতিতে ইয়াযীদ ইবন রূমান বলেন, তাদের কেউ দরজার চৌকাঠের উপরের কাঠটুকু বের করতে ঘর ভেঙে ফেলত, তারপর তা উটের পিঠে চাপিয়ে রওনা দিত। তাবারীতে ইবন যায়দ বলেন, তারা খুঁটি পর্যন্ত উপড়ে নিয়েছিল। বাগাভী ও কুরতুবী তাঁর থেকে আরও আনেন: কাজটা তারা করেছিল যাতে মু'মিনরা সেসব ঘরে বাস করতে না পারে।"
          },
          {
            "en": "And the hands of the believers? Qatada, in at-Tabari, says the Muslims ruined what faced them from outside while they ruined the houses from within. Ibn Abbas, in at-Tabari, says that whenever the Muslims demolished part of their fortifications, they pulled down their own houses to rebuild what had been breached, and that was their ruin. Al-Qurtubi records az-Zuhri's other reading, that their own hands meant breaking the covenant, and Ibn al-Arabi's remark that this sense is figurative. As-Sa'di: by their transgression they gave the believers power over their homes, and so wronged themselves.",
            "bn": "আর মু'মিনদের হাত? তাবারীর উদ্ধৃত বর্ণনায় কাতাদা বলেন, মুসলিমরা বাইরের দিক থেকে সামনে যা পেত ভাঙত, আর তারা ভাঙত ভেতর থেকে। তাবারীতে ইবন আব্বাসের বর্ণনা: মুসলিমরা যখনই তাদের দুর্গের কোনো অংশ ভাঙত, তারা নিজেদের ঘর খুলে সেই ভাঙা জায়গা আবার গাঁথত। এভাবেই তাদের সর্বনাশ হলো। কুরতুবী যুহরীর আরেকটি ব্যাখ্যাও আনেন। তাতে নিজেদের হাতে ভাঙার মানে চুক্তি ভঙ্গ করা। সেই সঙ্গে ইবনুল আরাবীর মন্তব্য, এ অর্থটা রূপক। সা'দী মূল কথাটা ধরিয়ে দেন: নিজেদের সীমালঙ্ঘনের কারণে তারাই মু'মিনদের হাতে নিজেদের ঘর ভাঙার সুযোগ তুলে দিয়েছিল। ক্ষতিটা তারা করেছিল নিজেদেরই।"
          }
        ]
      },
      {
        "h": {
          "en": "Sight of the Heart",
          "bn": "অন্তরের চোখ"
        },
        "p": [
          {
            "en": "Fa'tabiru ya uli al-absar: so take heed, O people of sight. At-Tabari reads it as: take admonition, you who have understanding, from what Allah brought down on them. Al-absar here, he says, means the sight of hearts, since taking heed happens through them and not through the eyes. Al-Qurtubi gives that sense and another: O you who saw it with your own eyes. Ibn Kathir reads it as: reflect on the end of whoever defies Allah's command, opposes His Messenger and denies His Book.",
            "bn": "ফা'তাবিরূ ইয়া উলিল আবসার: অতএব শিক্ষা নাও, হে দৃষ্টিসম্পন্ন মানুষেরা। তাবারীর ব্যাখ্যায়: হে বোধসম্পন্ন লোকেরা, আল্লাহ তাদের উপর যা নামিয়েছেন তা থেকে উপদেশ নাও। তিনি বলেন, এখানে আবসার মানে অন্তরের দৃষ্টি, কারণ শিক্ষা নেওয়া হয় অন্তর দিয়ে, চোখ দিয়ে নয়। কুরতুবী এ অর্থ দেন, সঙ্গে আরেকটিও: হে তোমরা যারা নিজের চোখে ঘটনাটা দেখেছ। ইবন কাসীরের ব্যাখ্যা: যে আল্লাহর হুকুম অমান্য করে, তাঁর রাসূলের বিরোধিতা করে, তাঁর কিতাবকে মিথ্যা বলে, তার পরিণতি নিয়ে ভাবো।"
          },
          {
            "en": "Al-Qurtubi names forms the lesson takes here: they sought refuge from Allah in fortresses, and He brought them down out of them; and they destroyed their own wealth with their own hands. He closes with a sound proverb: the fortunate one is he who is admonished by another. As-Sa'di reads the command wider. The lesson goes by the generality of the words, not the particular occasion, and the verse commands i'tibar, which he describes as comparing a thing with its like and reflecting on the meanings behind rulings.",
            "bn": "কুরতুবী এখানে শিক্ষার কয়েকটি দিক দেখান। তারা আল্লাহর হাত থেকে বাঁচতে দুর্গে আশ্রয় নিয়েছিল, আর আল্লাহ সেখান থেকেই তাদের নামিয়ে আনলেন। নিজেদের সম্পদ তারা নিজেদের হাতেই ধ্বংস করল। শেষে তিনি একটি প্রসিদ্ধ প্রবাদ আনেন: সৌভাগ্যবান সে, যে অন্যকে দেখে উপদেশ নেয়। সা'দী আদেশটাকে আরও বড় পরিসরে পড়েন। তাঁর মতে শিক্ষা চলে শব্দের ব্যাপকতা ধরে, নির্দিষ্ট উপলক্ষ ধরে নয়। আয়াতটি ই'তিবারের আদেশ দেয়। তিনি এর ব্যাখ্যা দেন এভাবে: এক জিনিসকে তার মতো আরেক জিনিসের সঙ্গে মিলিয়ে দেখা, আর বিধানগুলোর পেছনের অর্থ ও হিকমত নিয়ে চিন্তা করা।"
          }
        ]
      },
      {
        "h": {
          "en": "A Record, Not a Verdict",
          "bn": "ইতিহাস, কারও বিরুদ্ধে রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: one community, in one city, at one moment, and what befell them as the sources report it. It licenses nothing against any living person or community, including the People of the Scripture today. Its own command points inward: take heed. As-Sa'di frames the lesson as Allah's way with those who stubbornly resist the truth and follow their desires, and those words name conduct, not descent. Reading hostility toward a people into it trades its call for an accusation.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, কেবল তা-ই বর্ণনা করে: একটি শহরের একটি জনগোষ্ঠী, একটি নির্দিষ্ট সময়, আর সূত্রগুলোর বর্ণনামতে তাদের উপর যা ঘটেছিল। আজকের কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে, আজকের কিতাবধারীদের বিরুদ্ধেও, এ আয়াত কোনো কিছুর অনুমতি দেয় না। আয়াতের নিজের আদেশটা ভেতরের দিকে ফেরানো: শিক্ষা নাও। সা'দী শিক্ষাটিকে দেখেন সত্যের সঙ্গে জেদ ধরে থাকা আর প্রবৃত্তির পেছনে চলা লোকদের ব্যাপারে আল্লাহর নিয়ম হিসেবে। তাঁর কথায় নাম আছে আচরণের, বংশের নয়। এ আয়াত থেকে কোনো জাতির প্রতি বিদ্বেষ টেনে বের করলে আয়াতের ডাকটা হারিয়ে যায়, হাতে থাকে শুধু একটা অভিযোগ।"
          },
          {
            "en": "What a reader can carry is closer to home. As-Sa'di notes that the fortresses were the very place from which they expected any breach to come, while the real breach came through their hearts. Most of us build walls of our own: savings, reputation, people we can call on. It asks where the heart rests. A short check at the end of each day fits it: what did I lean on today, and did I lean on it more than on Allah?",
            "bn": "পাঠকের জন্য আসল শিক্ষাটা নিজের ঘরের কাছেই। সা'দী লক্ষ করেন, তারা ভেবেছিল ফাটল এলে আসবে দুর্গের দিক থেকে। অথচ আসল ফাটলটা এল তাদের অন্তর দিয়ে। আমরা অনেকেই নিজের নিজের দেয়াল গড়ি: সঞ্চয়, সুনাম, বিপদে ডাকার মতো চেনা মানুষ। আয়াত জানতে চায়, অন্তরটা ভর দিয়ে আছে কোথায়। প্রতিদিনের শেষে ছোট একটা হিসাব এর সঙ্গে মানায়। আজ আমি কিসের উপর ভর দিয়েছিলাম? আল্লাহর চেয়ে বেশি কি তার উপর?"
          }
        ]
      }
    ]
  },
  "59:9": {
    "sections": [
      {
        "h": {
          "en": "Praise for the Ones Left Out",
          "bn": "যারা বাদ পড়ল, তাদের প্রশংসা"
        },
        "p": [
          {
            "en": "The verse has to be read against the distribution it follows. 59:7 sets out how the fay' taken from Banu Nadir is to be divided, with the stated purpose that wealth not circulate only among the rich among you. 59:8 assigns a share to the poor emigrants who were driven from their homes and their properties. The Ansar, who owned the homes the emigrants were living in, are then addressed in the verse that comes next, and it praises them for what they did not receive.",
            "bn": "আয়াতটি বুঝতে হলে আগের আয়াতগুলোর বণ্টনের কথা মাথায় রাখতে হবে। ৫৯:৭ বলে দেয়, বনু নাযীর থেকে পাওয়া ফাই কীভাবে ভাগ হবে, আর কেন: যাতে সম্পদ কেবল তোমাদের ধনীদের মধ্যেই ঘুরপাক না খায়। ৫৯:৮ অংশ দেয় সেই গরিব মুহাজিরদের, যাঁদের ঘরবাড়ি আর সম্পত্তি থেকে উৎখাত করা হয়েছিল। মুহাজিররা থাকতেন আনসারদের ঘরে। সেই আনসারদের কথাই আসে পরের আয়াতে, আর আয়াতটি তাঁদের প্রশংসা করে এমন কিছুর জন্য, যা তাঁরা পাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled in the Home and the Faith",
          "bn": "ঘরে ও ঈমানে বসতি"
        },
        "p": [
          {
            "en": "The opening clause is famously compressed: walladhina tabawwa'u ad-dara wal-imana min qablihim, those who settled in the home and the faith before them. Arabic will let you take up residence in a house; it will not literally let you take up residence in a belief. The commentators explain that the verb governs the house directly and the faith by implication, so that a second verb, something like and embraced the faith, is understood alongside it. The compression is the point: Madinah and iman were one address.",
            "bn": "শুরুর অংশটি অল্প কথায় অনেক কিছু বলে, আর এ জন্য এটি বিখ্যাত: 'ওয়াল্লাযীনা তাবাউয়াউদ্‌-দারা ওয়াল-ঈমানা মিন কাবলিহিম', যাঁরা তাঁদের আগেই ঘরে ও ঈমানে বসত গড়েছিলেন। আরবিতে কোনো বাড়িতে বসত করা যায়, কিন্তু আক্ষরিক অর্থে কোনো বিশ্বাসে বসত করা যায় না। মুফাসসিরগণ বুঝিয়ে দেন, ক্রিয়াটি সরাসরি খাটে ঘরের উপর, আর ঈমানের উপর খাটে পরোক্ষে। তাই সঙ্গে আরেকটি ক্রিয়া উহ্য ধরা হয়, যেমন 'আর ঈমানকে আপন করে নিয়েছিলেন'। এই সংক্ষেপটাই আসল কথা: মদীনা আর ঈমান ছিল একই ঠিকানা।"
          },
          {
            "en": "Then the claim that is hardest to make about any human being: la yajiduna fi sudurihim hajatan mimma utu, they find in their breasts no want for what the others were given. Not that they suppressed the want, or apologised for it afterwards. They did not find it there. Hajah is a need, a craving, the pull towards a thing you do not have; the sadr is named because that is exactly where it would have sat, and the verse reports the place as empty.",
            "bn": "এরপর আসে এমন এক দাবি, যা কোনো মানুষ সম্পর্কে করা সবচেয়ে কঠিন: 'লা ইয়াজিদূনা ফী সুদূরিহিম হাজাতাম্‌ মিম্মা ঊতূ', অন্যদের যা দেওয়া হলো, তার জন্য তাঁরা নিজেদের বুকে কোনো চাহিদা খুঁজে পান না। এমন নয় যে চাহিদাটা তাঁরা চেপে রেখেছিলেন, বা পরে এর জন্য মাফ চেয়েছিলেন। বুকের ভেতর সেটা তাঁরা পানইনি। হাজাহ মানে প্রয়োজন, আকাঙ্ক্ষা, যা নেই তার দিকে মনের টান। সাদর বা বুকের কথা আলাদা করে বলা হয়েছে, কারণ চাহিদা থাকলে ঠিক সেখানেই থাকত। আর আয়াত জানাচ্ছে, জায়গাটা খালি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Night of the Guest",
          "bn": "সেই অতিথির রাত"
        },
        "p": [
          {
            "en": "Al-Bukhari relates the occasion from Abu Hurayrah (RA), and Muslim relates it too. A man came to the Prophet ﷺ hungry. He sent to his wives and they had nothing but water, so he asked who would take this man in for the night. A man of the Ansar said he would, brought him home and told his wife to honour the guest of the Messenger of Allah ﷺ. She answered that they had nothing but the children's supper.",
            "bn": "ঘটনাটি ইমাম বুখারী বর্ণনা করেছেন আবু হুরাইরা (রাঃ) থেকে, ইমাম মুসলিমও বর্ণনা করেছেন। এক লোক ক্ষুধার্ত অবস্থায় নবী ﷺ-এর কাছে এলেন। তিনি তাঁর স্ত্রীদের কাছে খবর পাঠালেন, কিন্তু তাঁদের ঘরে পানি ছাড়া কিছুই ছিল না। তখন তিনি জিজ্ঞেস করলেন, আজ রাতে কে এই লোকটিকে মেহমান করে নেবে? আনসারদের একজন রাজি হলেন। তাঁকে বাড়ি নিয়ে গিয়ে স্ত্রীকে বললেন, আল্লাহর রাসূল ﷺ-এর মেহমানের খাতির-যত্ন করো। স্ত্রী জানালেন, ঘরে বাচ্চাদের রাতের খাবারটুকু ছাড়া আর কিছু নেই।"
          },
          {
            "en": "He told her to prepare it, to light the lamp and to put the children to sleep if they asked for dinner. When the food was set down she rose as though to adjust the lamp and put it out, and in the dark the two of them made a show of eating so the guest would eat his fill. They passed the night hungry. In the morning the Prophet ﷺ told him that Allah had marvelled at what the two of them did with their guest that night, and this verse came down.",
            "bn": "তিনি স্ত্রীকে বললেন, খাবারটা তৈরি করো, বাতি জ্বালাও, আর বাচ্চারা রাতের খাবার চাইলে ওদের ঘুম পাড়িয়ে দাও। খাবার সামনে দেওয়া হলে স্ত্রী এমনভাবে উঠলেন যেন বাতিটা ঠিক করবেন, তারপর সেটা নিভিয়ে দিলেন। অন্ধকারে দুজনে এমন ভাব করলেন যেন তাঁরাও খাচ্ছেন, যাতে মেহমান পেট ভরে খেতে পারেন। সে রাত তাঁরা কাটালেন না খেয়ে। সকালে নবী ﷺ তাঁকে বললেন, গত রাতে মেহমানের সঙ্গে তোমরা দুজন যা করেছ, তাতে আল্লাহ বিস্ময় প্রকাশ করেছেন। আর এ উপলক্ষেই এই আয়াত নাজিল হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Ithar and Khasasah",
          "bn": "ঈসার ও খাসাসাহ"
        },
        "p": [
          {
            "en": "Wa yu'thiruna 'ala anfusihim wa law kana bihim khasasah. Ithar is preference given to another over yourself, and the verse adds the clause that removes every easy version of it: even though they themselves are in khasasah. The lexicographers connect that word to a gap or a chink, the openings in a wall through which light gets in. Poverty is named as a hole in your own provision, and the giving described here happens with the hole still open.",
            "bn": "'ওয়া ইউ'সিরূনা আলা আনফুসিহিম ওয়া লাও কানা বিহিম খাসাসাহ।' ঈসার মানে নিজের চেয়ে অন্যকে আগে রাখা। আর আয়াত এর সঙ্গে এমন একটি কথা জুড়ে দেয়, যাতে এর কোনো সহজ রূপ আর টেকে না: যদিও তাঁরা নিজেরাই খাসাসায় আছেন। অভিধানবিদেরা শব্দটিকে মেলান ফাঁক বা ফাটলের সঙ্গে, দেয়ালের সেই ছিদ্র, যা দিয়ে আলো ঢোকে। মানে, অভাব এখানে নিজের রিযিকের গায়ে একটা ফুটো। আর এখানে যে দানের কথা, তা হয় সেই ফুটো খোলা রেখেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Protected From His Own Soul",
          "bn": "নিজের নফস থেকে রক্ষা"
        },
        "p": [
          {
            "en": "The closing sentence widens past the Ansar to anyone: wa man yuqa shuhha nafsihi fa-ula'ika humu al-muflihun. The commentators separate shuhh from bukhl. Bukhl is withholding what you already hold; shuhh is the appetite underneath it, the grasping that wants what other people have and refuses to release what it has. That is why the verse names it as a property of the nafs rather than of the wallet, and why the identical clause reappears in 64:16 attached to a different command.",
            "bn": "শেষ বাক্যটি আনসারদের ছাড়িয়ে সবার জন্য: 'ওয়া মাই ইউকা শুহ্‌হা নাফসিহী ফাউলাইকা হুমুল-মুফলিহূন।' মুফাসসিরগণ শুহ্‌হ আর বুখলকে আলাদা করেন। বুখল হলো হাতে যা আছে তা আটকে রাখা। শুহ্‌হ তার নিচের ক্ষুধা: অন্যের যা আছে তা পেতে চাওয়া, আর নিজের যা আছে তা ছাড়তে না চাওয়ার লোভ। এ জন্যই আয়াত একে বলে নফসের স্বভাব, টাকার থলির নয়। আর এ জন্যই হুবহু একই বাক্য ৬৪:১৬ আয়াতে আবার আসে, অন্য এক নির্দেশের সঙ্গে।"
          },
          {
            "en": "The verb is passive: yuqa, is protected. The successful are not described as men who defeated their own greed but as men from whom it was warded off. That reading is confirmed by Muslim, who relates from Jabir (RA) that the Prophet ﷺ warned against shuhh, saying that it destroyed those who came before, drove them to shed their blood and to make lawful what had been forbidden them. Nobody in that hadith outgrew it. They were either guarded from it or ruined by it.",
            "bn": "ক্রিয়াটি কর্মবাচ্যে: ইউকা, রক্ষা করা হয়। সফল মানুষদের বর্ণনা এমন নয় যে তারা নিজেদের লোভকে হারিয়ে দিয়েছে। বরং তাদের থেকে লোভকে দূরে রাখা হয়েছে। এই পাঠের সমর্থন মেলে মুসলিমের একটি বর্ণনায়। জাবির (রাঃ) থেকে বর্ণিত, নবী ﷺ শুহ্‌হ থেকে সাবধান করে বলেছেন, এই শুহ্‌হই তোমাদের আগের লোকদের ধ্বংস করেছে। এটিই তাদের রক্ত ঝরাতে আর তাদের জন্য হারাম করা জিনিসকে হালাল বানিয়ে নিতে টেনে নিয়েছে। সেই হাদিসে কেউ শুহ্‌হকে ছাড়িয়ে উঠতে পারেনি। হয় তাদের এর হাত থেকে বাঁচানো হয়েছে, নয়তো এটাই তাদের ধ্বংস করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে এর চর্চা"
        },
        "p": [
          {
            "en": "Because shuhh is passive in the verse, the first practice is du'a rather than resolve. Ask to be protected from the greed of your own soul, in those words, and keep asking. 59:10 supplies the second half for everyone who came later: our Lord, forgive us and our brothers who preceded us in faith, and put no rancour in our hearts towards those who have believed. Then give the way the surah describes it: something you had a use for, to someone who cannot return it, without the room being told. The lamp was put out for a reason, and it was not modesty about the food.",
            "bn": "আয়াতে শুহ্‌হ থেকে রক্ষা পাওয়ার কথা এসেছে কর্মবাচ্যে, তাই প্রথম কাজ সংকল্প নয়, দু'আ। নিজের নফসের লোভ থেকে রক্ষা চান, ঠিক এই কথাগুলো দিয়েই, আর চাইতেই থাকুন। পরে যারা এসেছে, তাদের সবার জন্য বাকি অর্ধেকটা দেয় ৫৯:১০: হে আমাদের রব, আমাদের ক্ষমা করুন, আর ঈমানে আমাদের আগে যাওয়া ভাইদেরও। যারা ঈমান এনেছে, তাদের প্রতি আমাদের অন্তরে কোনো বিদ্বেষ রাখবেন না। তারপর দান করুন সূরাটি যেভাবে বলেছে সেভাবে: এমন জিনিস, যা আপনার নিজেরই কাজে লাগত; এমন কাউকে, যে তা ফেরত দিতে পারবে না; আর উপস্থিত কাউকে না জানিয়ে। বাতিটা অকারণে নেভানো হয়নি। আর কারণটা খাবার নিয়ে লজ্জাও ছিল না।"
          }
        ]
      }
    ]
  },
  "59:18-19": {
    "sections": [
      {
        "h": {
          "en": "Framed by Taqwa",
          "bn": "তাকওয়ায় বাঁধানো"
        },
        "p": [
          {
            "en": "59:18 issues its command twice, wrapping the middle clause like a frame: O you who believe, fear Allah — and let every soul look to what it has sent ahead for tomorrow — and fear Allah; indeed Allah is Aware of what you do. The commentators note the repetition: taqwa opens the audit and taqwa closes it, because self-examination begun without fear of Allah becomes self-congratulation, and examination that ends without it becomes despair. The verse closes by naming Khabir, the All-Aware, whose records never miss.",
            "bn": "৫৯:১৮ একই নির্দেশ দুবার দেয়, আর মাঝের কথাটিকে ফ্রেমের মতো দুদিক থেকে ঘিরে রাখে: হে ঈমানদারগণ, আল্লাহকে ভয় করো, আর প্রত্যেকে যেন দেখে আগামীকালের জন্য সে কী পাঠিয়েছে, এবং আল্লাহকে ভয় করো; তোমরা যা করো, আল্লাহ সে বিষয়ে পুরোপুরি খবর রাখেন। মুফাসসিরগণ এই পুনরাবৃত্তির দিকে নজর দেন। হিসাব শুরু হয় তাকওয়া দিয়ে, শেষও হয় তাকওয়া দিয়ে। কারণ আল্লাহর ভয় ছাড়া নিজের হিসাব নিতে বসলে তা গিয়ে ঠেকে নিজের প্রশংসায়, আর ভয় ছাড়া শেষ করলে ঠেকে হতাশায়। আয়াত শেষ হয় খাবীর নামে: যিনি সব খবর রাখেন, যাঁর খাতায় কিছুই বাদ পড়ে না।"
          },
          {
            "en": "Tomorrow, ghad, is the Day of Resurrection. The mufassirun pause on the choice of word: a day that could be called distant is called tomorrow, both for its certainty and for its nearness — everything that is coming is near. The soul is told to look at what it has sent ahead, ma qaddamat, the way a merchant checks what he has already sent on to a market he is traveling toward. The deeds are not behind us in the past; they are ahead of us, waiting.",
            "bn": "আগামীকাল, অর্থাৎ গাদ, মানে কিয়ামতের দিন। শব্দটি কেন বেছে নেওয়া হলো, মুফাসসিরগণ তা নিয়ে থামেন। যে দিনকে দূরের দিন বলা যেত, তাকে বলা হলো আগামীকাল। কারণ সে দিন নিশ্চিত, আর কাছেও। যা আসবেই, তা তো কাছেই। নফসকে বলা হয়েছে দেখতে, সে আগে কী পাঠিয়েছে (মা কাদ্দামাত)। যেমন কোনো ব্যবসায়ী দেখে নেন, যে বাজারের দিকে তিনি রওনা দিয়েছেন, সেখানে আগেভাগে কী মাল পাঠিয়ে রেখেছেন। আমল আমাদের পেছনে অতীতে পড়ে নেই। সেগুলো সামনে, আমাদের অপেক্ষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Audit Is Singular",
          "bn": "হিসাব যার যার নিজের"
        },
        "p": [
          {
            "en": "Wal-tanzur nafsun — let a soul look. The subject is an indefinite singular — nafsun, a soul: each soul examines its own ledger, not its neighbour's. The scholars built the discipline of muhasabah, self-reckoning, on this verse: reviewing the record while it can still be amended, repenting from what shames, and sending better ahead. The examination the verse commands is the one we most avoid — we audit everyone else fluently and grant ourselves extensions.",
            "bn": "ওয়াল-তানযুর নাফসুন: একটি নফস যেন দেখে। কর্তা এখানে অনির্দিষ্ট, একবচন: নাফসুন, একটি নফস। অর্থাৎ প্রত্যেকে দেখবে নিজের খাতা, প্রতিবেশীরটা নয়। আলিমগণ এ আয়াতের উপরেই মুহাসাবা বা নিজের হিসাব নেওয়ার চর্চা দাঁড় করিয়েছেন: শোধরানোর সময় থাকতে থাকতেই খাতাটা খুলে দেখা, যা নিয়ে লজ্জা হয় তা থেকে তওবা করা, আর সামনে আরও ভালো আমল পাঠানো। আয়াত যে হিসাব নিতে বলে, সেটাই আমরা সবচেয়ে বেশি এড়িয়ে চলি। অন্যের হিসাব আমরা অনায়াসে কষি, আর নিজের বেলায় কেবল সময় বাড়িয়ে নিই।"
          },
          {
            "en": "Qaddamat is past tense: the soul looks at what it has already sent, not at what it intends. The commentators contrast the two ledgers we keep — the record of intentions, always flattering, and the record of dispatched deeds, often thin. The verse directs the eye to the second. Tomorrow will be furnished only by what actually left the warehouse: the prayer prayed, the wealth given, the wrong repaired, the word of truth said.",
            "bn": "কাদ্দামাত অতীত কালের ক্রিয়া। অর্থাৎ নফস দেখবে সে আসলে কী পাঠিয়ে ফেলেছে, কী পাঠানোর ইচ্ছা রাখে তা নয়। মুফাসসিরগণ আমাদের দুটি খাতার তুলনা করেন। একটি নিয়তের খাতা, যা সবসময় আমাদের ভালো দেখায়। অন্যটি সত্যিই পাঠানো আমলের খাতা, যা প্রায়ই পাতলা। আয়াত চোখ ফেরায় দ্বিতীয়টির দিকে। আগামীকাল সাজবে কেবল সেটুকু দিয়ে, যা সত্যিই গুদাম ছেড়ে বেরিয়েছে: যে নামাজ পড়া হয়েছে, যে সম্পদ দান করা হয়েছে, যে অন্যায়ের প্রতিকার হয়েছে, যে সত্য কথা বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgetting and Being Forgotten",
          "bn": "ভুলে যাওয়া ও বিস্মৃত হওয়া"
        },
        "p": [
          {
            "en": "59:19 gives the warning its depth: and do not be like those who forgot Allah, so He made them forget their own selves — those are the defiantly disobedient. The punishment fits the crime with terrible precision. The commentators unfold it: whoever forgets Allah's rights is left to forget his soul's actual interests — he feeds the body and starves what will outlive it, grooms his image and neglects his record, remembers everything except why he exists.",
            "bn": "৫৯:১৯ সতর্কবার্তাটিকে আরও গভীর করে: আর তাদের মতো হয়ো না, যারা আল্লাহকে ভুলে গিয়েছিল, ফলে তিনি তাদের নিজেদের কথাই ভুলিয়ে দিয়েছেন; ওরাই তো ফাসিক। শাস্তিটা অপরাধের সঙ্গে ভয়ংকর রকম নিখুঁতভাবে মেলে। মুফাসসিরগণ এর ব্যাখ্যা দেন এভাবে: যে আল্লাহর হক ভুলে যায়, তাকে ছেড়ে দেওয়া হয় নিজের আসল কল্যাণ ভুলে থাকার জন্য। সে শরীরকে খাওয়ায়, অথচ শরীরের পরেও যা টিকে থাকবে তাকে উপোস রাখে। নিজের ভাবমূর্তি সাজায়, অথচ আমলনামার খেয়াল রাখে না। সবকিছু মনে রাখে, শুধু ভুলে যায় সে কেন দুনিয়ায় আছে।"
          },
          {
            "en": "The same divine response appears in 9:67, where the hypocrites forgot Allah, so He forgot them — left them out of His grace. Self-forgetting is therefore not a private eccentricity but a sentence; the person estranged from Allah becomes a stranger to himself. The verse implies the converse, and the commentators state it: whoever remembers Allah is granted remembrance of his own self — clarity about what he is, what he needs and where he is going.",
            "bn": "একই রকম জবাব আছে ৯:৬৭ আয়াতে। সেখানে মুনাফিকরা আল্লাহকে ভুলে গিয়েছিল, তাই তিনিও তাদের ভুলে গেছেন, মানে নিজের রহমত থেকে তাদের বাদ রেখেছেন। কাজেই নিজেকে ভুলে যাওয়া কোনো ব্যক্তিগত খামখেয়াল নয়, এটা একটা শাস্তি। আল্লাহ থেকে দূরে সরে যাওয়া মানুষ নিজের কাছেই অচেনা হয়ে যায়। আয়াতে উল্টো কথাটাও লুকিয়ে আছে, আর মুফাসসিরগণ তা খুলে বলেন: যে আল্লাহকে মনে রাখে, সে নিজেকেও মনে রাখার তাওফিক পায়। সে বোঝে সে কে, তার কী দরকার, আর সে কোথায় চলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Surah Ends",
          "bn": "সূরাটি যেভাবে শেষ হয়"
        },
        "p": [
          {
            "en": "The verses that follow raise the stakes and then the gaze. 59:20 declares that the companions of the Fire and the companions of the Garden are not equal — the companions of the Garden are the winners. 59:21 says that if this Quran had been sent down upon a mountain, you would have seen it humbled and split apart from the fear of Allah. And 59:22-24 close the surah with a cascade of His names. The audit of 59:18 ends by contemplating the One before whom it will be read.",
            "bn": "এরপরের আয়াতগুলো প্রথমে বিষয়ের গুরুত্ব বাড়ায়, তারপর দৃষ্টি উপরে তোলে। ৫৯:২০ ঘোষণা করে, জাহান্নামের অধিবাসী আর জান্নাতের অধিবাসী সমান নয়; জান্নাতবাসীরাই সফল। ৫৯:২১ বলে, এই কুরআন কোনো পাহাড়ের উপর নাজিল করা হলে তুমি দেখতে, আল্লাহর ভয়ে তা নত হয়ে ফেটে চৌচির হয়ে গেছে। আর ৫৯:২২-২৪ সূরাটি শেষ করে তাঁর নামের এক অবিরাম ধারায়। ৫৯:১৮-এর হিসাব শেষ হয় তাঁর কথা ভেবে, যাঁর সামনে একদিন সেই হিসাব পড়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Practicing the Look",
          "bn": "দেখার অনুশীলন"
        },
        "p": [
          {
            "en": "The lived form is a fixed, honest review — many scholars recommended it nightly: what did today send ahead? Not a mood check but an inventory: the prayers and their quality, the money and its routes, the tongue and its output. Then triage while amendment is still possible — repentance for one column, gratitude for the other, and one concrete deed dispatched forward before sleep. Written or mental, brief or long, the point is that it happens and that it is yours.",
            "bn": "জীবনে এর রূপ হলো নিয়মিত, সৎ একটা হিসাব। অনেক আলিম প্রতি রাতে এটা করার পরামর্শ দিয়েছেন: আজকের দিনটা সামনে কী পাঠাল? মন কেমন আছে তা দেখা নয়, বরং মালের হিসাব মেলানো: নামাজগুলো আর সেগুলোর মান, টাকা আর তা কোন পথে গেল, জিহ্বা আর তা থেকে কী বেরোল। তারপর শোধরানোর সময় থাকতে থাকতে বাছাই করুন। এক ঘরের জন্য তওবা, অন্য ঘরের জন্য শুকরিয়া। আর ঘুমানোর আগে অন্তত একটা বাস্তব আমল সামনে পাঠিয়ে দিন। লিখে হোক বা মনে মনে, অল্প হোক বা বেশি, আসল কথা হলো হিসাবটা হওয়া চাই, আর সেটা হতে হবে আপনার নিজের।"
          },
          {
            "en": "The verse also supplies the test for drift. The person who cannot remember the last time they examined themselves has their answer already; the audit lapses exactly when it is most needed. And the frame holds the method: begin in taqwa, so the review happens before Allah and not before an imagined audience, and end in taqwa, so its failures drive you to His mercy rather than to despair. He is Khabir; the review only ever catches up to what He already knows.",
            "bn": "ঢিলেমি ধরা পড়ার পরীক্ষাও আয়াতটি দিয়ে রাখে। শেষ কবে নিজের হিসাব নিয়েছেন, তা যদি মনে করতে না পারেন, উত্তর তো পেয়েই গেলেন। হিসাব ঠিক তখনই বন্ধ হয়ে যায়, যখন তা সবচেয়ে বেশি দরকার। আর পদ্ধতিটাও ধরা আছে সেই ফ্রেমের ভেতরেই। শুরু করুন তাকওয়া দিয়ে, যাতে হিসাবটা হয় আল্লাহর সামনে, কল্পনার কোনো দর্শকের সামনে নয়। শেষও করুন তাকওয়া দিয়ে, যাতে ঘাটতিগুলো আপনাকে হতাশায় নয়, তাঁর রহমতের দিকে ঠেলে দেয়। তিনি খাবীর। আপনার হিসাব বড়জোর সেটুকুতে পৌঁছায়, যা তিনি আগে থেকেই জানেন।"
          }
        ]
      }
    ]
  },
  "59:21": {
    "sections": [
      {
        "h": {
          "en": "Sent Down on a Mountain",
          "bn": "পাহাড়ের উপর নাযিল হলে"
        },
        "p": [
          {
            "en": "Law anzalna hadha-l-qur'ana 'ala jabalin: had We sent this Qur'an down upon a mountain. Ibn Kathir opens by naming what the verse is for. Allah, he says, is magnifying the matter of the Qur'an and making plain how high its rank is, and that hearts ought to humble themselves before it and split apart on hearing it, because of the promise and the firm threat it carries. The condition never came true. Its weight falls on whoever did receive the Book.",
            "bn": "লাও আনযালনা হাযাল কুরআনা আলা জাবালিন: আমি যদি এই কুরআন কোনো পাহাড়ের উপর নাযিল করতাম। ইবন কাসীর শুরুতেই বলে দেন আয়াতটি কেন এসেছে। তাঁর ভাষায়, আল্লাহ এখানে কুরআনের মর্যাদা বড় করে দেখাচ্ছেন, বুঝিয়ে দিচ্ছেন এর স্থান কত উঁচু। অন্তরের উচিত এর সামনে বিনীত হওয়া, শুনে ফেটে পড়া, কারণ এতে আছে প্রতিশ্রুতি আর অটল সতর্কবাণী। শর্তটা কখনো ঘটেনি। এর ভার এসে পড়ে তার উপর, যে সত্যিই কিতাবটা হাতে পেয়েছে।"
          },
          {
            "en": "The verse sits in the surah's closing run. Just before it, 59:18 tells believers to look at what each soul has sent ahead for tomorrow, 59:19 warns against being like those who forgot Allah and so were made to forget themselves, and 59:20 says the people of the Fire and the people of the Garden are not equal. Just after it, 59:22 to 59:24 set out Allah's names. None of the commentaries fetched for this verse reports an occasion of revelation for it.",
            "bn": "আয়াতটি সূরার শেষ অংশে। ঠিক আগে ৫৯:১৮ মু'মিনদের বলে, প্রত্যেকে দেখুক আগামীকালের জন্য কী পাঠিয়েছে। ৫৯:১৯ সাবধান করে, তাদের মতো হয়ো না যারা আল্লাহকে ভুলে গেছে, ফলে তিনি তাদের নিজেদেরকেই ভুলিয়ে দিয়েছেন। ৫৯:২০ বলে, জাহান্নামী আর জান্নাতী সমান নয়। ঠিক পরে ৫৯:২২ থেকে ৫৯:২৪ আয়াতে আসে আল্লাহর নামসমূহ। এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিতে নাযিলের প্রেক্ষাপট নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Lowered, Then Cracked Open",
          "bn": "নত হওয়া, তারপর ফেটে যাওয়া"
        },
        "p": [
          {
            "en": "La-ra'aytahu khashi'an mutasaddi'an: you would have seen it humbled, splitting apart. Al-Qurtubi defines each word: al-khashi' is the lowly, the abased, and al-mutasaddi' is what has cracked open. At-Tabari glosses khashi' as mutadhallil, making itself low. The Muyassar has submissive, abased and splitting, and al-Baghawi strings three verbs together: it would be humbled, cleft and split. Across these glosses the first word names an inward lowering and the second an outward breaking, and the mountain does both.",
            "bn": "লারাআইতাহু খাশিআন মুতাসাদ্দিআন: তুমি তাকে দেখতে বিনীত, ফেটে চৌচির। কুরতুবী শব্দ দুটির অর্থ আলাদা করে বলেন। খাশি' মানে হীন, নত। মুতাসাদ্দি' মানে যা ফেটে গেছে। তাবারী খাশি'-র অর্থ করেন মুতাযাল্লিল, অর্থাৎ যে নিজেকে নিচু করে। মুয়াসসার বলে অনুগত, নত ও বিদীর্ণ। বাগাভী পরপর তিনটি ক্রিয়া বসান: বিনীত হতো, চিরে যেত, ফেটে যেত। এসব ব্যাখ্যায় প্রথম শব্দটি ভেতরের নত হওয়া, দ্বিতীয়টি বাইরের ভেঙে পড়া। পাহাড় দুটোই করে।"
          },
          {
            "en": "Al-Qurtubi also records, with the word qila, it is said, a second reading of each word. Khashi' would mean humbled before Allah by the obedience He charged it with, and mutasaddi' would mean splitting from fear of Allah lest it disobey Him and He punish it. At-Tabari gives a related motive in his own voice: the mountain splits out of wariness that it might fail to render the right of Allah owed upon it in honouring the Qur'an. In both, the mountain fears falling short of a trust.",
            "bn": "কুরতুবী 'কীলা', অর্থাৎ 'বলা হয়' শব্দ দিয়ে প্রতিটি শব্দের আরেকটি ব্যাখ্যাও আনেন। সে ব্যাখ্যায় খাশি' মানে আল্লাহ তাকে যে আনুগত্যের দায়িত্ব দিয়েছেন, তার কারণে তাঁর সামনে বিনীত। আর মুতাসাদ্দি' মানে আল্লাহর ভয়ে ফেটে যাওয়া, পাছে সে তাঁর নাফরমানি করে আর তিনি তাকে শাস্তি দেন। তাবারী নিজের ভাষায় কাছাকাছি একটি কারণ বলেন: কুরআনকে সম্মান করার যে হক আল্লাহ তার উপর ফরয করেছেন, তা আদায় করতে না পারার আশঙ্কায় পাহাড় ফেটে যায়। দুই ব্যাখ্যাতেই পাহাড়ের ভয় আমানতে ত্রুটি হওয়ার ভয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Hardness Made the Yardstick",
          "bn": "কাঠিন্যই যেখানে মাপকাঠি"
        },
        "p": [
          {
            "en": "Ibn Kathir draws the argument out step by step. If the mountain, in its coarseness and hardness, had understood this Qur'an and pondered what is in it, it would have humbled itself and split from fear of Allah. How then, he asks, can it befit you, O mankind, that your hearts do not soften, humble themselves and split from awe of Allah, when you have understood His command and pondered His Book? That, he says, is why the verse closes on the parables set forth for people.",
            "bn": "ইবন কাসীর যুক্তিটা ধাপে ধাপে খুলে দেখান। পাহাড় তার সব রুক্ষতা আর কাঠিন্য নিয়েও যদি এই কুরআন বুঝত, এর ভেতরের কথা নিয়ে ভাবত, তবে আল্লাহর ভয়ে বিনীত হতো, ফেটে যেত। তাহলে হে মানুষ, তিনি প্রশ্ন করেন, তোমাদের অন্তর নরম হবে না, বিনীত হবে না, আল্লাহর ভয়ে ফেটে পড়বে না, এ কী করে তোমাদের মানায়? অথচ তোমরা তো আল্লাহর আদেশ বুঝেছ, তাঁর কিতাব নিয়ে ভেবেছ। তাঁর মতে এ কারণেই আয়াতটি শেষ হয়েছে মানুষের জন্য দেওয়া দৃষ্টান্তের কথা বলে।"
          },
          {
            "en": "The other commentators keep that hardness in view. At-Tabari calls the mountain simply stone and adds to its splitting the words 'for all its hardness'. The Muyassar lists its strength, toughness and bulk. Al-Qurtubi and al-Baghawi both speak of its salabah and razanah, hardness and heavy steadiness. The less a thing gives way, the more its giving way would say.",
            "bn": "অন্য তাফসীরকারেরাও এই কাঠিন্যের কথা মনে রাখেন। তাবারী পাহাড়কে বলেন নিছক পাথর, আর ফেটে যাওয়ার সঙ্গে জুড়ে দেন 'তার কাঠিন্য সত্ত্বেও' কথাটি। মুয়াসসার গুনিয়ে বলে এর শক্তি, দৃঢ়তা আর বিশাল আকারের কথা। কুরতুবী ও বাগাভী দুজনেই বলেন এর সালাবা ও রাযানার কথা, অর্থাৎ কাঠিন্য আর ভারী স্থিরতা। যে জিনিস যত কম নড়ে, তার নুয়ে পড়া তত বেশি কিছু বলে দেয়।"
          },
          {
            "en": "As-Sa'di turns the comparison onto the listeners. Once Allah has made plain His commands and prohibitions, people are bound to hasten to what He calls them to, even if their hearts were as hard as the firmly anchored mountains. The mountain would yield, he says, because of the perfection of the Qur'an's effect on hearts: its admonitions are the greatest of all, and its commands carry wisdom and benefit, are easy on souls, free of strain and contradiction, and fit for every time, place and person.",
            "bn": "সা'দী তুলনাটা ঘুরিয়ে দেন শ্রোতাদের দিকে। আল্লাহ তাঁর আদেশ-নিষেধ স্পষ্ট করে দেওয়ার পর মানুষের কর্তব্য, তিনি যেদিকে ডাকেন সেদিকে ছুটে যাওয়া, অন্তর যদি মজবুত গেড়ে বসা পাহাড়ের মতো কঠিনও হয়। তাঁর মতে পাহাড় নুয়ে পড়ত, কারণ অন্তরে কুরআনের প্রভাব পরিপূর্ণ। এর উপদেশ সব উপদেশের সেরা। এর আদেশ-নিষেধে আছে হিকমত আর কল্যাণ, মনের জন্য তা সহজ, কৃত্রিম কষ্ট নেই, পরস্পরবিরোধিতা নেই, সব যুগে সব জায়গায় সবার জন্য মানানসই।"
          }
        ]
      },
      {
        "h": {
          "en": "Bearing What It Was Given",
          "bn": "যে ভার তাকে দেওয়া হলো"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir both carry a report from Ibn 'Abbas, through the chain Ibn Kathir names as al-'Awfi's. Had I sent this Qur'an down upon a mountain, he explains, making it bear it, it would have split and humbled itself from its weight and from fear of Allah. So Allah commanded people, when the Qur'an came down to them, to take it with intense fear and with takhashshu', making oneself humble. Ibn Kathir adds that Qatada and Ibn Jarir, that is at-Tabari, said the same.",
            "bn": "তাবারী ও ইবন কাসীর দুজনেই ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা আনেন। ইবন কাসীর এর সূত্র বলেন আউফীর মাধ্যমে। ইবন আব্বাস (রাঃ) ব্যাখ্যা করেন: আমি যদি এই কুরআন কোনো পাহাড়ের উপর নাযিল করতাম, তাকে এর ভার বইতে দিতাম, তবে তা এর ভারে আর আল্লাহর ভয়ে বিনীত হতো, ফেটে যেত। তাই আল্লাহ মানুষকে আদেশ দিয়েছেন, তাদের কাছে কুরআন এলে তারা যেন তা গ্রহণ করে গভীর ভয় আর তাখাশশু' নিয়ে, অর্থাৎ নিজেকে সচেষ্টভাবে বিনীত করে। ইবন কাসীর যোগ করেন, কাতাদা ও ইবন জারীর, মানে তাবারী, একই কথা বলেছেন।"
          },
          {
            "en": "At-Tabari also reports Qatada in sharper words. Allah, Qatada said, excused the deaf mountain and did not excuse the wretched son of Adam; and he asked whether anyone had ever seen a man whose ribs split apart from fear of Allah. Al-Qurtubi writes that the verse urges contemplation of the Qur'an's admonitions and shows there is no excuse for abandoning reflection. The mountain has an excuse; the human has none.",
            "bn": "তাবারী কাতাদার আরও তীক্ষ্ণ একটি কথাও আনেন। কাতাদা বলেন, আল্লাহ বধির পাহাড়কে অপারগ ধরে নিয়েছেন, কিন্তু হতভাগা আদমসন্তানকে ছাড় দেননি। তারপর তিনি জিজ্ঞেস করেন, আল্লাহর ভয়ে কারও পাঁজর ফেটে গেছে, এমন কাউকে কি তোমরা কখনো দেখেছ? কুরতুবী লেখেন, আয়াতটি কুরআনের উপদেশ নিয়ে গভীরভাবে ভাবতে উৎসাহ দেয়, আর দেখিয়ে দেয় যে চিন্তা-ভাবনা ছেড়ে দেওয়ার কোনো অজুহাত নেই। পাহাড়ের অজুহাত আছে, মানুষের নেই।"
          },
          {
            "en": "At-Tabari then sets the human beside the stone. The Qur'an, he says, has been sent down upon the son of Adam, who holds its right lightly and turns away from the lessons and reminders in it as if he had not heard them, as if there were deafness in his ears. Al-Baghawi has nearly the same sentence but names the man who turns away as the disbeliever, and says the verse describes him with hardness of heart. At-Tabari's wording keeps to the son of Adam in general.",
            "bn": "এরপর তাবারী মানুষকে পাথরের পাশে দাঁড় করান। তিনি বলেন, কুরআন তো নাযিল হয়েছে আদমসন্তানের উপর। অথচ সে এর হককে হালকা করে দেখে, এর শিক্ষা আর উপদেশ থেকে মুখ ফিরিয়ে নেয়, যেন সে কিছুই শোনেনি, যেন তার কানে বধিরতা। বাগাভীর বাক্য প্রায় হুবহু এক। তবে মুখ ফিরিয়ে নেওয়া লোকটিকে তিনি বলেন কাফির, আর বলেন আয়াতটি তাকে অন্তরের কঠোরতা দিয়ে চিহ্নিত করছে। তাবারীর ভাষা সাধারণভাবে আদমসন্তানের কথাই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "If Stone Could Understand",
          "bn": "পাথর যদি বুঝত"
        },
        "p": [
          {
            "en": "Each commentator supplies what the verse leaves unsaid: a mountain does not grasp speech. Al-Qurtubi's own reading is that if the mountains were addressed with this Qur'an, with intellect built into them, they would yield to its admonitions. Al-Baghawi, with qila, says that if discernment were placed in the mountain and the Qur'an sent down upon it, it would humble itself and split. Ibn Kathir and the Muyassar both use the verb fahima: if it understood what the Qur'an holds of promise and threat.",
            "bn": "এখানে প্রত্যেক তাফসীরকারকে এমন একটা কথা জুড়তে হয়, যা আয়াত মুখে বলেনি: পাহাড় তো কথা বোঝে না। কুরতুবীর নিজের ব্যাখ্যা হলো, পাহাড়ের ভেতর বুদ্ধি দিয়ে যদি তাকে এই কুরআন দিয়ে সম্বোধন করা হতো, তবে সে এর উপদেশের কাছে মাথা নোয়াত। বাগাভী 'কীলা' বলে আনেন: পাহাড়ে যদি বিচারবোধ দেওয়া হতো আর তার উপর কুরআন নাযিল হতো, তবে সে বিনীত হতো, ফেটে যেত। ইবন কাসীর ও মুয়াসসার দুজনেই ব্যবহার করেন 'ফাহিমা' ক্রিয়া: কুরআনে যে প্রতিশ্রুতি আর সতর্কবাণী আছে, পাহাড় যদি তা বুঝত।"
          },
          {
            "en": "Ma'arif al-Qur'an names the question outright. It calls the verse a parable and, it would appear, a hypothetical example: if mountains had sense. It then reports, citing Mazhari, that some scholars hold that reason and revelation both testify that everything in nature, mountain or tree, has sense and perception, so the example is a stark reality. Ma'arif closes on 'Allah knows best'. Al-Qurtubi also records, with qila, that the verse is a parable aimed at the disbelievers. The question stays where they leave it.",
            "bn": "মাআরিফুল কুরআন প্রশ্নটা সরাসরি তোলে। প্রথমে বলে, এটি একটি দৃষ্টান্ত, আর দেখে মনে হয় কাল্পনিক উদাহরণ, অর্থাৎ পাহাড়ের যদি বোধ থাকত। তারপর মাযহারীর বরাতে জানায়, কিছু আলেমের মতে বিবেক ও ওহি দুটোই সাক্ষ্য দেয় যে প্রকৃতির সবকিছুর, পাহাড় হোক বা গাছ, বোধ ও অনুভূতি আছে। সে হিসেবে উদাহরণটি একেবারে বাস্তব। মাআরিফ শেষ করে 'আল্লাহই ভালো জানেন' বলে। কুরতুবীও 'কীলা' দিয়ে আনেন যে আয়াতটি কাফিরদের উদ্দেশে দেওয়া একটি দৃষ্টান্ত। প্রশ্নটা সেখানেই থাকল, যেখানে তাঁরা রেখে গেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Hearings of the Address",
          "bn": "সম্বোধনের তিন রকম পাঠ"
        },
        "p": [
          {
            "en": "La-ra'aytahu: you would have seen it. At-Tabari hears the 'you' as the Prophet ﷺ: you would have seen it, O Muhammad. Al-Qurtubi gives three hearings, the first in his own voice and the others as reports. In the first, the address is to people at large: the mountain would have humbled itself at the Qur'an's promise and split at its threat, while you, overpowered by its inimitability, neither long for its promise nor dread its threat.",
            "bn": "লারাআইতাহু: তুমি তাকে দেখতে। তাবারী এই 'তুমি'-কে ধরেন নবী ﷺ হিসেবে: হে মুহাম্মাদ, তুমি তাকে দেখতে। কুরতুবী তিনটি পাঠ দেন। প্রথমটি তাঁর নিজের কথা, বাকি দুটি 'বলা হয়' বলে আনা। প্রথম পাঠে সম্বোধন সব মানুষের প্রতি। পাহাড় কুরআনের প্রতিশ্রুতিতে বিনীত হতো, এর সতর্কবাণীতে ফেটে যেত। অথচ তোমরা, যারা এর অলৌকিকতার সামনে হার মেনেছ, তারা না এর প্রতিশ্রুতির প্রতি আগ্রহী, না এর সতর্কবাণীতে ভীত।"
          },
          {
            "en": "In the second, the address is to the Prophet ﷺ alone. Had We sent this Qur'an down on a mountain, O Muhammad, it would not have held firm and would have split; yet We sent it down on you and made you firm for it. Read this way, al-Qurtubi says, the verse is a favour: Allah made him firm for what mountains cannot bear. The hard image becomes, for its first recipient, a mark of honour.",
            "bn": "দ্বিতীয় পাঠে সম্বোধন শুধু নবী ﷺ-এর প্রতি। হে মুহাম্মাদ, আমি যদি এই কুরআন পাহাড়ের উপর নাযিল করতাম, সে স্থির থাকতে পারত না, ফেটে যেত। অথচ আমি তা তোমার উপর নাযিল করেছি এবং এর জন্য তোমাকে অবিচল রেখেছি। কুরতুবী বলেন, এভাবে পড়লে আয়াতটি তাঁর প্রতি এক অনুগ্রহ: যে ভারে পাহাড় স্থির থাকে না, সেই ভারে আল্লাহ তাঁকে অবিচল রেখেছেন। যিনি প্রথম এ কিতাব গ্রহণ করেছেন, তাঁর জন্য কঠিন ছবিটাই হয়ে যায় সম্মানের চিহ্ন।"
          },
          {
            "en": "In the third, the address is to the community. Had Allah warned the mountains with this Qur'an, they would have split from fear of Him, and the human being is less in strength but greater in steadiness. So he fulfils its right if he obeys and is able to reject it if he disobeys, because he is promised reward and held back by punishment. Here the human is not weaker than the mountain; he is answerable. Al-Qurtubi does not rule among the three.",
            "bn": "তৃতীয় পাঠে সম্বোধন উম্মতের প্রতি। আল্লাহ যদি এই কুরআন দিয়ে পাহাড়কে সতর্ক করতেন, তবে তারা তাঁর ভয়ে ফেটে যেত। মানুষের শক্তি কম, কিন্তু তার স্থিরতা বেশি। তাই আনুগত্য করলে সে এর হক আদায় করে, আর নাফরমানি করলে তা প্রত্যাখ্যান করার সামর্থ্যও তার আছে। কারণ তাকে সওয়াবের প্রতিশ্রুতি দেওয়া হয়েছে, শাস্তির ভয় দিয়ে ফেরানো হয়েছে। এই পাঠে মানুষ পাহাড়ের চেয়ে দুর্বল নয়, বরং জবাবদিহির আওতায়। তিনটির মধ্যে কুরতুবী কোনোটিকে বেছে নেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Palm Trunk That Moaned",
          "bn": "খেজুর কাণ্ডের কান্না"
        },
        "p": [
          {
            "en": "Ibn Kathir brings in a report he calls mutawatir, mass-transmitted, as a comparison and not as the verse's occasion. The Messenger of Allah ﷺ used to preach beside a palm trunk in the mosque; when a pulpit was made and he passed the trunk, it moaned like a child being hushed, because of the remembrance and revelation it used to hear beside it. Ibn Kathir names no collection; the wording below is al-Bukhari's.",
            "bn": "ইবন কাসীর এখানে একটি বর্ণনা আনেন, যাকে তিনি বলেন মুতাওয়াতির, অর্থাৎ বহু সূত্রে বর্ণিত। তিনি এটি আনেন তুলনা হিসেবে, আয়াতের নাযিলের প্রেক্ষাপট হিসেবে নয়। রাসূলুল্লাহ ﷺ মসজিদে খেজুরগাছের একটি কাণ্ডের পাশে দাঁড়িয়ে খুতবা দিতেন। মিম্বার বানানো হলে তিনি কাণ্ডটি পেরিয়ে গেলেন, আর কাণ্ডটি গোঙাতে লাগল, যেমন করে শিশু থামানোর সময় ফোঁপায়। কারণ এর পাশে সে যিকর আর ওহি শুনত। ইবন কাসীর কোনো হাদীসগ্রন্থের নাম বলেন না, নিচের ভাষ্যটি বুখারীর।"
          },
          {
            "en": "Jabir ibn 'Abdullah narrates, in Sahih al-Bukhari 3584: 'The Prophet ﷺ used to stand by a tree or a date-palm on Friday. Then an Ansari woman or man said, \"O Allah's Messenger! Shall we make a pulpit for you?\" He replied, \"If you wish.\" So they made a pulpit for him and when it was Friday, he proceeded towards the pulpit. The date-palm cried like a child! The Prophet ﷺ descended and embraced it while it continued moaning like a child being quietened. The Prophet ﷺ said, \"It was crying for what it used to hear of religious knowledge given near to it.\"'",
            "bn": "সহীহ বুখারী ৩৫৮৪-তে জাবির ইবন আবদুল্লাহ (রাঃ) বর্ণনা করেন: 'নবী ﷺ জুমুআর দিন একটি গাছ বা খেজুরগাছের পাশে দাঁড়াতেন। তখন আনসারের এক নারী, কিংবা এক পুরুষ, বললেন: হে আল্লাহর রাসূল, আমরা কি আপনার জন্য একটি মিম্বার বানিয়ে দেব? তিনি বললেন: তোমরা চাইলে। তারা তাঁর জন্য মিম্বার বানাল। জুমুআর দিন এলে তাঁকে মিম্বারের দিকে এগিয়ে নেওয়া হলো। তখন খেজুরগাছটি শিশুর মতো চিৎকার করে উঠল। নবী ﷺ নেমে এসে সেটিকে বুকে জড়িয়ে ধরলেন, আর সেটি তখনো ফোঁপাচ্ছিল, যেমন করে শিশুকে শান্ত করার সময় শিশু ফোঁপায়। নবী ﷺ বললেন: এর কাছে যে যিকর শোনা যেত, তার জন্য এটি কাঁদছিল।'"
          },
          {
            "en": "The report is in al-Bukhari's Sahih, and Ibn Kathir calls it mutawatir. He adds that in some narrations al-Hasan al-Basri said after it: you are more entitled to long for the Messenger of Allah ﷺ than the trunk. Then he returns to the verse: if solid mountains, had they heard Allah's speech and understood it, would humble themselves and split, what of you, who have heard and understood?",
            "bn": "বর্ণনাটি বুখারীর সহীহ গ্রন্থে আছে, আর ইবন কাসীর একে মুতাওয়াতির বলেন। তিনি যোগ করেন, কিছু বর্ণনায় হাসান বসরী এ ঘটনা বলার পর বলতেন: কাণ্ডটির চেয়ে তোমরাই রাসূলুল্লাহ ﷺ-এর জন্য ব্যাকুল হওয়ার বেশি হকদার। তারপর তিনি আয়াতে ফেরেন: নিরেট পাহাড় যদি আল্লাহর কালাম শুনে বুঝত, তবে বিনীত হতো, ফেটে যেত। তাহলে তোমাদের কী হলো, যারা শুনেছ এবং বুঝেছ?"
          },
          {
            "en": "Ibn Kathir then sets two verses beside 59:21. 13:31 opens with the same law: if there were a Qur'an by which mountains were set moving, or the earth cut through, or the dead spoken to; which he explained earlier as: it would be this Qur'an. 2:74 tells a people their hearts hardened like stones or harder, then says some stones split so water comes out, and some fall down min khashyati-llah, the very phrase of our verse.",
            "bn": "এরপর ইবন কাসীর ৫৯:২১-এর পাশে দুটি আয়াত রাখেন। ১৩:৩১ শুরু হয় একই 'লাও' দিয়ে: যদি এমন কোনো কুরআন থাকত যা দিয়ে পাহাড় চালানো যেত, কিংবা মাটি ফাটানো যেত, কিংবা মৃতের সঙ্গে কথা বলানো যেত। এর অর্থ তিনি আগেই বলেছেন: তবে তা হতো এই কুরআনই। ২:৭৪ এক জাতিকে বলে, তোমাদের অন্তর পাথরের মতো, বরং তার চেয়েও কঠিন হয়ে গেছে। তারপর বলে, কিছু পাথর ফেটে পানি বের হয়, আর কিছু নিচে গড়িয়ে পড়ে 'মিন খাশইয়াতিল্লাহ', আল্লাহর ভয়ে। আমাদের আয়াতেও হুবহু এই কথাটিই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Likenesses Struck for Thought",
          "bn": "চিন্তার জন্য দেওয়া উপমা"
        },
        "p": [
          {
            "en": "Wa tilka-l-amthalu nadribuha lin-nas: and these are the parables We set forth for people. At-Tabari glosses it as these things We liken for people: Allah is making known to them that the mountains, for all their hardness, are greater in honouring His right than they are. On la'allahum yatafakkarun he writes that Allah strikes these parables so that they reflect on them, then turn back to Him and yield to the truth. Reflection, on his reading, ends in return.",
            "bn": "ওয়া তিলকাল আমসালু নাদরিবুহা লিন্নাস: এসব দৃষ্টান্ত আমি মানুষের জন্য পেশ করি। তাবারী এর অর্থ করেন, এসব জিনিস দিয়ে আমি মানুষের জন্য তুলনা টানি। আল্লাহ তাদের জানিয়ে দিচ্ছেন, পাহাড় তার সব কাঠিন্য সত্ত্বেও আল্লাহর হককে তাদের চেয়ে বেশি সম্মান করে। লাআল্লাহুম ইয়াতাফাক্কারূন প্রসঙ্গে তিনি লেখেন, আল্লাহ এসব দৃষ্টান্ত দেন যাতে তারা এ নিয়ে ভাবে, তারপর তাঁর দিকে ফিরে আসে, সত্যের কাছে মাথা নত করে। তাঁর পাঠে চিন্তার শেষ গন্তব্য ফিরে আসা।"
          },
          {
            "en": "The Muyassar names the object of that thought as the power and greatness of Allah, and says the verse urges pondering the Qur'an, understanding its meanings and acting by it. As-Sa'di widens the parables to all that Allah makes plain in His Book, the lawful and the unlawful. Reflection, he says, opens the treasuries of knowledge, shows the paths of good and evil, urges noble character and restrains from base character; nothing benefits a servant more than reflecting on the Qur'an.",
            "bn": "মুয়াসসার বলে, ভাবনার বিষয় আল্লাহর কুদরত আর মহত্ত্ব, আর আয়াতটি কুরআন নিয়ে গভীরভাবে ভাবতে, এর অর্থ বুঝতে ও সে অনুযায়ী আমল করতে উৎসাহ দেয়। সা'দী দৃষ্টান্তের পরিধি আরও বাড়ান: আল্লাহ তাঁর কিতাবে যা কিছু স্পষ্ট করেছেন, হালাল-হারামসহ, সবই এর আওতায়। তাঁর মতে এই ভাবনা বান্দার সামনে জ্ঞানের ভান্ডার খুলে দেয়, ভালো-মন্দের পথ দেখায়, উত্তম চরিত্রে উৎসাহ দেয়, মন্দ চরিত্র থেকে ফেরায়। কুরআন নিয়ে চিন্তার চেয়ে বান্দার জন্য বেশি উপকারী কিছু নেই।"
          },
          {
            "en": "Taken together, the commentators leave a reader with a sequence rather than a demand for tears. Ibn 'Abbas's report says how the Book is to be received: with intense fear and with humility one works at. At-Tabari says what reflection is for: turning back and yielding. The Muyassar and as-Sa'di say where it leads: to understanding and to action. A reader who feels little can still begin where the verse ends, with thought: one passage, its meaning, and the plain question of what it asks of him today.",
            "bn": "সব মিলিয়ে তাফসীরকারেরা পাঠকের হাতে কান্নার দাবি নয়, বরং একটা ধারাবাহিক পথ তুলে দেন। ইবন আব্বাস (রাঃ)-এর বর্ণনা বলে দেয় কিতাবটা কীভাবে গ্রহণ করতে হবে: গভীর ভয় নিয়ে, আর চেষ্টা করে অর্জন করা বিনয় নিয়ে। তাবারী বলেন চিন্তা কীসের জন্য: ফিরে আসা আর মেনে নেওয়ার জন্য। মুয়াসসার ও সা'দী বলেন এর গন্তব্য: বোঝা আর আমল। যার অন্তরে তেমন সাড়া জাগে না, সেও শুরু করতে পারেন সেখান থেকে, যেখানে আয়াতটি শেষ হয়েছে, অর্থাৎ চিন্তা দিয়ে। একটি অংশ, তার অর্থ, আর সোজা একটি প্রশ্ন: আজ এটি আমার কাছে কী চায়?"
          }
        ]
      }
    ]
  },
  "59:22-24": {
    "sections": [
      {
        "h": {
          "en": "Placed After a Broken Covenant",
          "bn": "ভাঙা অঙ্গীকারের ঠিক পরে"
        },
        "p": [
          {
            "en": "Surah al-Hashr spends most of its length on people who failed: a tribe expelled after treachery, hypocrites who promised support and gave none. Then it turns on the reader. 59:18 tells the believers to fear Allah and let every soul look to what it has sent ahead for tomorrow, and 59:19 warns them not to be like those who forgot Allah, so He made them forget themselves. Forgetting Allah, the surah says, costs you your own self.",
            "bn": "সূরা আল-হাশরের বেশির ভাগ জুড়ে আছে ব্যর্থ মানুষদের কথা: বিশ্বাসঘাতকতার পর বিতাড়িত এক গোত্র, আর সাহায্যের কথা দিয়েও কিছুই না দেওয়া মুনাফিকরা। এরপর সূরাটি পাঠকের দিকে ফেরে। ৫৯:১৮ মুমিনদের বলে আল্লাহকে ভয় করতে, আর প্রত্যেকে যেন দেখে আগামীকালের জন্য সে কী পাঠিয়েছে। ৫৯:১৯ সতর্ক করে, তারা যেন তাদের মতো না হয় যারা আল্লাহকে ভুলে গিয়েছিল, ফলে তিনি তাদের নিজেদেরকেই ভুলিয়ে দিয়েছেন। সূরার কথা হলো, আল্লাহকে ভুলে গেলে তার দাম দিতে হয় নিজেকে হারিয়ে।"
          },
          {
            "en": "So the closing passage is a remedy prescribed for that exact disease. If forgetting Him unmakes a person, the cure is to be shown who He is in concentrated form. 59:21 prepares the ground by saying that had this Quran been sent down upon a mountain, you would have seen it humbled and split apart from fear of Allah. Immediately after that image of a mountain giving way, the names begin.",
            "bn": "তাই শেষ অংশটি ঠিক এই রোগেরই ওষুধ। তাঁকে ভুলে যাওয়া যদি মানুষকে ভেঙেচুরে দেয়, তবে নিরাময় হলো অল্প কথায়, ঘন করে তাঁর পরিচয় তুলে ধরা। ৫৯:২১ এর জমি তৈরি করে রাখে। সেখানে বলা হয়েছে, এই কুরআন কোনো পাহাড়ের উপর নাজিল করা হলে তুমি দেখতে, আল্লাহর ভয়ে তা নত হয়ে ফেটে চৌচির হয়ে গেছে। পাহাড় ভেঙে পড়ার সেই দৃশ্যের ঠিক পরেই নামগুলো শুরু হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "He Is Allah",
          "bn": "তিনিই আল্লাহ"
        },
        "p": [
          {
            "en": "Each of the three verses opens with the same two words, Huwa Allah, He is Allah. Two of them go on to add la ilaha illa Huwa, there is no deity except Him, and the third moves straight to creation. The repetition is not decoration. Every clause that follows is fastened to the same subject, so that a reader who loses the thread is brought back to the one name that governs the rest before the next description begins.",
            "bn": "তিনটি আয়াতই শুরু হয় একই দুটি শব্দ দিয়ে: 'হুয়াল্লাহু', তিনিই আল্লাহ। এর মধ্যে দুটি আয়াত এরপর বলে 'লা ইলাহা ইল্লা হুয়া', তিনি ছাড়া কোনো ইলাহ নেই। আর তৃতীয়টি সরাসরি চলে যায় সৃষ্টির কথায়। এই পুনরাবৃত্তি অলংকার নয়। পরের প্রতিটি কথা বাঁধা থাকে একই কর্তার সঙ্গে। ফলে পাঠক খেই হারালেও পরের গুণের কথা শুরু হওয়ার আগেই আবার ফিরে আসেন সেই এক নামের কাছে, বাকি সবকিছু যার অধীনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Knowledge and Mercy in One Breath",
          "bn": "এক নিঃশ্বাসে জ্ঞান ও রহমত"
        },
        "p": [
          {
            "en": "59:22 pairs two things we usually keep apart. He is Knower of the ghayb and the shahadah, of what is hidden from us and what stands in front of us, and in the same verse He is ar-Rahman ar-Rahim. The order matters for a reader who has just been told that hypocrites were exposed. The One from whom nothing is concealed, described at length in 6:59 as knowing every falling leaf, is named by His mercy in the very sentence that establishes His knowledge.",
            "bn": "৫৯:২২ এমন দুটি জিনিসকে পাশাপাশি রাখে, যা আমরা সাধারণত আলাদা করে ভাবি। তিনি গায়ব ও শাহাদাহর জ্ঞানী, অর্থাৎ যা আমাদের কাছে গোপন আর যা চোখের সামনে, দুটোরই। আবার একই আয়াতে তিনি আর-রাহমান, আর-রাহীম। এইমাত্র যে পাঠক জেনেছেন মুনাফিকদের মুখোশ খুলে গেছে, তাঁর জন্য এই ক্রমটা গুরুত্বপূর্ণ। যাঁর কাছ থেকে কিছুই লুকানো যায় না, ৬:৫৯ যাঁর সম্পর্কে বিস্তারিত বলেছে যে ঝরে পড়া প্রতিটি পাতাও তিনি জানেন, তাঁর জ্ঞানের কথা যে বাক্যে বলা হলো, সেই বাক্যেই তাঁকে ডাকা হলো রহমতের নামে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Names of Sovereignty",
          "bn": "সার্বভৌমত্বের নামসমূহ"
        },
        "p": [
          {
            "en": "59:23 releases a run of names with no conjunction between them, so they arrive in a single unbroken breath: al-Malik the Sovereign, al-Quddus the utterly Pure, as-Salam, al-Mu'min who grants security, al-Muhaymin the Overseer, al-Aziz, al-Jabbar, al-Mutakabbir. Translations differ over several of them because the Arabic is denser than any single English or Bengali word. What the sequence does is move from rule, through purity, to protection, and then to unassailable power.",
            "bn": "৫৯:২৩ আয়াতে একের পর এক নাম আসে, মাঝে কোনো 'এবং' নেই, যেন সব এক নিঃশ্বাসে: আল-মালিক, সার্বভৌম; আল-কুদ্দূস, পরম পবিত্র; আস-সালাম; আল-মুমিন, নিরাপত্তাদাতা; আল-মুহাইমিন, তত্ত্বাবধায়ক; আল-আযীয, আল-জাব্বার, আল-মুতাকাব্বির। এর কয়েকটির অনুবাদ নিয়ে মতভেদ আছে, কারণ আরবি শব্দগুলোর অর্থ ইংরেজি বা বাংলার কোনো একটি শব্দে ধরে না। ক্রমটা খেয়াল করুন: কর্তৃত্ব থেকে পবিত্রতা, সেখান থেকে নিরাপত্তা, তারপর এমন ক্ষমতা যার সামনে কেউ দাঁড়াতে পারে না।"
          },
          {
            "en": "Two of them are worth slowing over. Al-Bukhari and Muslim both narrate from Ibn Mas'ud (RA) that the companions used to say peace be upon Allah in the prayer until the Prophet ﷺ stopped them, telling them that Allah Himself is as-Salam, and teaching them the tashahhud instead. And al-Mutakabbir is praise when said of Him and an accusation when said of us: Muslim narrates from Abu Hurayrah (RA) that Allah says greatness is His cloak and might His garment, and whoever contends with Him will be punished.",
            "bn": "এর দুটি নামে একটু থামা দরকার। ইমাম বুখারী ও মুসলিম দুজনেই ইবনে মাসঊদ (রাঃ) থেকে বর্ণনা করেছেন: সাহাবিরা নামাজে বলতেন, 'আল্লাহর উপর শান্তি বর্ষিত হোক'। নবী ﷺ তাঁদের থামিয়ে দিলেন। বললেন, আল্লাহ নিজেই তো আস-সালাম। তারপর এর বদলে তাঁদের তাশাহহুদ শিখিয়ে দিলেন। আর আল-মুতাকাব্বির নামটি তাঁর বেলায় প্রশংসা, আমাদের বেলায় অভিযোগ। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন, আল্লাহ বলেন: গৌরব তাঁর চাদর, ক্ষমতা তাঁর পোশাক। যে এ নিয়ে তাঁর সঙ্গে টানাটানি করবে, তাকে তিনি শাস্তি দেবেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Creating in Three Movements",
          "bn": "তিন ধাপে সৃষ্টি"
        },
        "p": [
          {
            "en": "59:24 gives three names in order, and the mufassirun read the order as a sequence rather than a list of synonyms. Al-Khaliq decrees and measures a thing out, al-Bari brings it into being from nothing, and al-Musawwir gives it the particular form it wears. That last stage is why no two faces are the same, and 3:6 states it directly, that it is He who forms you in the wombs however He wills. Your specific shape was a decision, not a leftover.",
            "bn": "৫৯:২৪ ক্রম অনুযায়ী তিনটি নাম আনে, আর মুফাসসিরগণ এগুলোকে সমার্থক শব্দের তালিকা হিসেবে নয়, ধাপে ধাপে চলা একটি ধারা হিসেবে পড়েন। আল-খালিক কোনো কিছুর ফায়সালা করেন, তার মাপ ঠিক করেন। আল-বারি তাকে শূন্য থেকে অস্তিত্বে আনেন। আর আল-মুসাউয়ির তাকে দেন তার নিজস্ব আকৃতি। এই শেষ ধাপের কারণেই দুটি মুখ কখনো হুবহু এক হয় না। ৩:৬ আয়াত সরাসরি বলে, তিনিই মাতৃগর্ভে তোমাদের আকৃতি দেন, যেভাবে ইচ্ছা করেন। আপনার নিজের চেহারাটা ছিল তাঁর সিদ্ধান্ত, এমনি এমনি থেকে যাওয়া কিছু নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "To Him Belong the Best Names",
          "bn": "সুন্দরতম নামসমূহ তাঁরই"
        },
        "p": [
          {
            "en": "The passage then states the principle the whole of it has been illustrating: to Him belong al-asma al-husna, the most beautiful names. The Quran repeats this in 7:180, which adds the instruction to call on Him by them and to leave those who distort them, in 17:110, which says that whichever of them you call by, the best names are His, and again in 20:8, where the same statement follows the declaration that there is no deity except Him. Names are not given here as vocabulary. They are given as the address to use.",
            "bn": "এরপর অংশটি সেই নীতিটা বলে দেয়, যা এতক্ষণ ধরে উদাহরণ দিয়ে দেখানো হচ্ছিল: 'আল-আসমাউল হুসনা', সুন্দরতম নামগুলো তাঁরই। কুরআন কথাটা আরও কয়েক জায়গায় বলেছে। ৭:১৮০ আয়াতে এর সঙ্গে নির্দেশ আছে: এসব নামে তাঁকে ডাকো, আর যারা এগুলো বিকৃত করে তাদের ছেড়ে দাও। ১৭:১১০ আয়াতে আছে: যে নামেই ডাকো, সুন্দরতম নামগুলো তো তাঁরই। আর ২০:৮ আয়াতে একই কথা এসেছে 'তিনি ছাড়া কোনো ইলাহ নেই' ঘোষণার ঠিক পরে। নামগুলো এখানে শব্দভাণ্ডার হিসেবে দেওয়া হয়নি। দেওয়া হয়েছে ডাকার ঠিকানা হিসেবে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Abu Hurayrah (RA) that Allah has ninety-nine names and whoever retains them enters Paradise. Hadith scholars have long noted that the familiar enumerated list is preserved in at-Tirmidhi and Ibn Majah rather than in the two Sahihs, and that the counting itself is not part of the sound wording. Nor does the number close the matter: Ahmad records from Ibn Mas'ud (RA) a supplication asking by every name Allah has named Himself with, revealed in His Book, taught to any of His creation, or kept hidden with Him.",
            "bn": "ইমাম বুখারী ও মুসলিম দুজনেই আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেছেন: আল্লাহর নিরানব্বইটি নাম আছে, যে সেগুলো আয়ত্ত করবে সে জান্নাতে প্রবেশ করবে। হাদিস বিশেষজ্ঞরা অনেক আগেই লক্ষ করেছেন, নামগুলোর যে পরিচিত তালিকা, তা দুই সহীহ গ্রন্থে নেই, আছে তিরমিযী ও ইবনে মাজাহতে। আর নাম গুনে গুনে তালিকা দেওয়ার অংশটি সহীহ বর্ণনার মূল ভাষ্যের অংশ নয়। সংখ্যাটাই শেষ কথাও নয়। আহমদ ইবনে মাসঊদ (রাঃ) থেকে এমন একটি দুআ বর্ণনা করেছেন, যেখানে আল্লাহর কাছে চাওয়া হয় তাঁর প্রতিটি নামের উসিলায়: যে নামে তিনি নিজেকে ডেকেছেন, যা তাঁর কিতাবে নাজিল করেছেন, যা তাঁর সৃষ্টির কাউকে শিখিয়েছেন, কিংবা যা নিজের কাছে গোপন রেখেছেন।"
          }
        ]
      }
    ]
  }
});
