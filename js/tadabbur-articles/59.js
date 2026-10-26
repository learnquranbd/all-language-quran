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
          "en": "Between the Emigrants and Their Successors",
          "bn": "মুহাজির ও পরবর্তীদের মাঝখানে"
        },
        "p": [
          {
            "en": "Walladhina tabawwa'u ad-dara wal-imana min qablihim: the verse is the middle panel of three. 59:8 names the poor emigrants driven from their homes and properties, whom Ibn Kathir calls truthful in word and deed. 59:9 turns to the people of Madinah who received them, and 59:10 to those who came after, known by their prayer for the brothers who preceded them in faith. All three follow 59:7, which divides the fay' so that wealth does not circulate only among the rich.",
            "bn": "'ওয়াল্লাযীনা তাবাওয়াউদ দারা ওয়াল ঈমানা মিন কাবলিহিম।' পাশাপাশি তিনটি আয়াতের মাঝেরটি এটি। ৫৯:৮ বলে গরিব মুহাজিরদের কথা, যাঁদের ঘরবাড়ি ও সম্পদ থেকে বের করে দেওয়া হয়েছিল। ইবন কাসীর বলেন, কথায় ও কাজে তাঁরা সত্যবাদী। ৫৯:৯ ফেরে মদীনার সেই মানুষদের দিকে, যাঁরা তাঁদের আশ্রয় দিয়েছিলেন। আর ৫৯:১০ আসে পরবর্তীদের কথায়, যাঁদের চেনা যায় ঈমানে অগ্রগামী ভাইদের জন্য তাঁদের দু'আ দিয়ে। তিনটিই আসে ৫৯:৭-এর পরে, যেখানে ফাই এমনভাবে ভাগ হয় যাতে সম্পদ শুধু ধনীদের মধ্যে ঘুরপাক না খায়।"
          },
          {
            "en": "Whether 59:9 continues that list is disputed; al-Qurtubi records both views. Some, Isma'il ibn Ishaq among them, read it as joined to what precedes, so that the Ansar share in the fay' with the emigrants; Qatada, in at-Tabari, likewise speaks of Allah fixing the share of these first two groups. Al-Qurtubi himself reads a fresh sentence of praise: the Ansar handed that fay' over to the emigrants, loved them, and did not envy them what had come to them alone.",
            "bn": "৫৯:৯ কি প্রাপকদের সেই তালিকারই অংশ? এ নিয়ে মতভেদ আছে, আর কুরতুবী দুই মতই উল্লেখ করেন। ইসমাঈল ইবন ইসহাকসহ কেউ কেউ আয়াতটিকে আগের কথার সঙ্গে যুক্ত ধরেন। তাহলে ফাইয়ে মুহাজিরদের সঙ্গে আনসাররাও অংশীদার। তাবারীর বর্ণনায় কাতাদাও বলেন, প্রথম এই দুই দলের অংশ আল্লাহ স্থির করে দিয়েছেন। কুরতুবীর নিজের মত ভিন্ন: এখান থেকে প্রশংসার নতুন বাক্য শুরু। আনসাররা সেই ফাই মুহাজিরদের হাতে ছেড়ে দিয়েছিলেন, তাঁদের ভালোবেসেছিলেন, আর যা কেবল তাঁদের ভাগে এসেছিল তার জন্য হিংসা করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Home and a Faith",
          "bn": "এক ঘর, এক ঈমান"
        },
        "p": [
          {
            "en": "At-Tabari glosses the opening plainly: they took Madinah, the city of the Messenger ﷺ, and built it into dwellings, and took the faith in Allah and His Messenger, before the emigrants came. Al-Baghawi reorders it: they settled the home before the emigrants arrived, having already believed, since faith is not a place of settling. He adds that they accepted Islam in their own homes and built mosques two years before the Prophet ﷺ arrived.",
            "bn": "শুরুর অংশটি তাবারী সাদামাটাভাবে ব্যাখ্যা করেন। মুহাজিররা আসার আগেই তাঁরা রাসূল ﷺ-এর শহর মদীনাকে আবাস বানিয়ে সেখানে ঘর তুলেছিলেন, আর আল্লাহ ও তাঁর রাসূলের প্রতি ঈমান এনেছিলেন। বাগাভী বাক্যটিকে নতুন করে সাজান: মুহাজিরদের আগমনের আগেই তাঁরা ঘরে বসতি গড়েছিলেন, ঈমান এনে। কারণ ঈমান বসত গড়ার জায়গা নয়। তিনি আরও বলেন, নবী ﷺ আসার দুই বছর আগেই তাঁরা নিজেদের এলাকায় ইসলাম গ্রহণ করে মসজিদ বানিয়েছিলেন।"
          },
          {
            "en": "For al-Qurtubi, wal-imana is accusative through a verb other than tabawwa'a, since settling happens only in places, meaning they held the faith sincerely. He compares fa-ajmi'u amrakum wa shuraka'akum in 10:71, where a second verb is understood, and the Arab line, I fed her straw and cold water. Or a word is elided, the places of faith; or one sense covers both, they clung to the home and the faith; or the faith is settled in as a metaphor.",
            "bn": "কুরতুবীর ব্যাখ্যায় 'ওয়াল ঈমানা' শব্দে যবর এসেছে তাবাওয়াআ ছাড়া অন্য এক উহ্য ক্রিয়ার কারণে, কেননা বসতি গড়া যায় কেবল কোনো স্থানে। অর্থাৎ তাঁরা ঈমানকে খাঁটিভাবে ধারণ করেছিলেন। তিনি তুলনা টানেন ১০:৭১-এর 'ফাআজমিঊ আমরাকুম ওয়া শুরাকাআকুম'-এর সঙ্গে, যেখানে দ্বিতীয় একটি ক্রিয়া উহ্য। আরবের সেই পঙক্তির সঙ্গেও: আমি তাকে খাওয়ালাম খড় আর ঠান্ডা পানি। অথবা মাঝখানে একটি শব্দ উহ্য, অর্থাৎ ঈমানের ঠিকানা। অথবা একটি অর্থই দুটিকে ধরে: তাঁরা ঘর আর ঈমান দুটিকেই আঁকড়ে ছিলেন। অথবা ঈমানে বসত করার কথাটা রূপক।"
          },
          {
            "en": "On min qablihim, before them, the two differ slightly. Ibn Kathir: they lived in the abode of hijrah before the emigrants and believed before many of them. Al-Qurtubi: the verse does not mean the Ansar believed before the emigrants, only before the Prophet's ﷺ hijrah to them. 'Umar's charge to his successor, in al-Bukhari's Sahih (4888) and cited by Ibn Kathir, uses the verse's words with that very time-marker: before the Prophet ﷺ emigrated.",
            "bn": "'মিন কাবলিহিম', অর্থাৎ তাঁদের আগে, এর ব্যাখ্যায় দুই মতের মধ্যে সামান্য ফারাক আছে। ইবন কাসীর বলেন, মুহাজিরদের আগেই তাঁরা হিজরতের শহরে বাস করছিলেন, আর তাঁদের অনেকের আগে ঈমান এনেছিলেন। কুরতুবী বলেন, আয়াতের উদ্দেশ্য এ নয় যে আনসাররা মুহাজিরদের আগে ঈমান এনেছেন, বরং নবী ﷺ তাঁদের কাছে হিজরত করে আসার আগে। উমর (রাঃ) পরবর্তী খলীফাকে যে অসিয়ত করেছিলেন, বুখারী তা তাঁর সহীহ গ্রন্থে এনেছেন (৪৮৮৮), আর ইবন কাসীর এখানে উদ্ধৃত করেন। সেখানে আয়াতেরই শব্দ, আর সময়ের চিহ্নটাও এটাই: নবী ﷺ হিজরত করার আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Property Handed On Gladly",
          "bn": "খুশিমনে ছেড়ে দেওয়া সম্পদ"
        },
        "p": [
          {
            "en": "La yajiduna fi sudurihim hajatan mimma utu. At-Tabari ties it to an event, relating through Ibn Ishaq that the Banu an-Nadir left their properties to the Messenger ﷺ, his alone to place where he willed. He divided them among the first emigrants and not the Ansar, except Sahl ibn Hunayf and Abu Dujanah, who mentioned their poverty and were given a share. These verses record what befell a particular tribe in its own time; they license nothing against any living person or community.",
            "bn": "'লা ইয়াজিদূনা ফী সুদূরিহিম হাজাতাম মিম্মা ঊতূ।' তাবারী বাক্যটিকে একটি ঘটনার সঙ্গে জোড়েন। ইবন ইসহাকের সূত্রে তিনি বর্ণনা করেন: বনু নাযীর তাদের সম্পত্তি রাসূল ﷺ-এর জন্য ছেড়ে গিয়েছিল, ফলে তা ছিল একান্ত তাঁর, যেখানে ইচ্ছা সেখানে দেওয়ার। তিনি তা ভাগ করে দেন প্রথম দিকের মুহাজিরদের মধ্যে, আনসারদের দেননি। ব্যতিক্রম ছিলেন সাহল ইবন হুনাইফ ও আবু দুজানা, নিজেদের অভাবের কথা জানালে তাঁদেরও দেওয়া হয়। এ আয়াতগুলো একটি নির্দিষ্ট গোত্রের সঙ্গে তার নিজের সময়ে যা ঘটেছিল, তার বিবরণ। আজকের কোনো মানুষ বা জাতির বিরুদ্ধে এগুলো কোনো কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "Al-Qurtubi tells the scene without a chain. The emigrants were living in the Ansar's houses. When the Banu an-Nadir's property came, the Prophet ﷺ called the Ansar, thanked them, and offered a choice: divide it between you and them, with the emigrants staying on in your homes, or give it to them and they leave your houses. Sa'd ibn 'Ubadah and Sa'd ibn Mu'adh answered: divide it among the emigrants, and let them stay in our homes. The Ansar called out: we are content and we submit.",
            "bn": "কুরতুবী দৃশ্যটি বর্ণনা করেন কোনো সনদ ছাড়া। মুহাজিররা তখন আনসারদের ঘরেই থাকতেন। বনু নাযীরের সম্পদ হাতে এলে নবী ﷺ আনসারদের ডেকে কৃতজ্ঞতা জানালেন, তারপর দুটি পথ সামনে রাখলেন। চাইলে এ সম্পদ তোমাদের আর তাদের মধ্যে ভাগ হবে, আর মুহাজিররা আগের মতোই তোমাদের ঘরে থাকবে। নয়তো সবটা তাদের দেওয়া হবে, আর তারা তোমাদের ঘর ছেড়ে চলে যাবে। সা'দ ইবন উবাদা ও সা'দ ইবন মুআয জবাব দিলেন: সবটা মুহাজিরদের মধ্যে ভাগ করে দিন, আর তাঁরা আমাদের ঘরেই থাকুন। আনসাররা সমস্বরে বললেন: আমরা রাজি, আমরা মেনে নিলাম।"
          },
          {
            "en": "The Prophet ﷺ prayed, O Allah, have mercy on the Ansar and the sons of the Ansar, and gave to the emigrants; al-Qurtubi counts three Ansar who still received a share, at-Tabari names two. Another report differs in tone. Ibn Zayd, in at-Tabari and Ibn Kathir, says some Ansar spoke about the property and 59:6 reproached them. The Prophet ﷺ said their brothers had left wealth and children to come to them: they do not know farm work, so do it for them and share the fruit. They agreed.",
            "bn": "নবী ﷺ দু'আ করলেন: হে আল্লাহ, আনসারদের ও আনসারদের সন্তানদের প্রতি রহম করুন। তারপর সম্পদ দিলেন মুহাজিরদের। ব্যতিক্রম হিসেবে যে আনসাররা অংশ পেয়েছিলেন, কুরতুবী তাঁদের সংখ্যা বলেন তিনজন, আর তাবারী নাম বলেন দুজনের। আরেকটি বর্ণনার সুর আলাদা। তাবারী ও ইবন কাসীরে ইবন যায়দ বলেন, কিছু আনসার এ সম্পদ নিয়ে কথা তুলেছিলেন, আর ৫৯:৬ তাঁদের মৃদু তিরস্কার করে। নবী ﷺ তাঁদের মনে করিয়ে দিলেন, তোমাদের ভাইয়েরা সম্পদ আর সন্তান ছেড়ে তোমাদের কাছে এসেছে। তারা খেতখামারের কাজ জানে না। কাজটা তোমরা করে দাও, আর ফল ভাগ করে নাও। তাঁরা রাজি হলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Chest Did Not Hold",
          "bn": "বুকে যা জায়গা পায়নি"
        },
        "p": [
          {
            "en": "Al-Hasan al-Basri, in at-Tabari and Ibn Kathir, says the hajah is envy. Al-Baghawi gives three words: resentment, anger and envy. Al-Qurtubi reads two elided words, the touch of need from the loss of what they were given, and offers a definition: whatever a person finds in his chest that needs removing is a hajah. He also allows another sense, that they felt no want when what reached them was little, but were content with it.",
            "bn": "তাবারী ও ইবন কাসীরে হাসান বসরী বলেন, এই হাজাহ মানে হিংসা। বাগাভী তিনটি শব্দ দেন: ক্ষোভ, রাগ আর হিংসা। কুরতুবী এখানে দুটি শব্দ উহ্য ধরেন, অর্থাৎ যা তাঁদের দেওয়া হয়েছে তা না পাওয়ার কারণে অভাবের ছোঁয়া। সঙ্গে একটি সংজ্ঞাও দেন: মানুষ বুকে এমন যা কিছু টের পায়, যা দূর করা দরকার, তা-ই হাজাহ। তিনি আরেকটি অর্থের সুযোগও রাখেন: নিজেদের ভাগে অল্প এলেও তাঁরা কোনো অভাব বোধ করতেন না, বরং তাতেই সন্তুষ্ট থাকতেন।"
          },
          {
            "en": "The commentators differ on what was given. At-Tabari and al-Baghawi say the fay' that went to the emigrants; the Muyassar says the fay' and other things; Ibn Kathir widens it to the rank, honour and precedence in mention by which Allah favoured them. As-Sa'di sees here hearts free of rancour and envy, and draws a further conclusion: since Allah names the emigrants first and says they were given what the Ansar were not, the emigrants rank higher, having joined hijrah to support.",
            "bn": "কী দেওয়া হয়েছিল, তা নিয়ে মুফাসসিরদের মধ্যে ভিন্নতা আছে। তাবারী ও বাগাভী বলেন, মুহাজিরদের দেওয়া ফাই। মুয়াসসার বলে, ফাই ও অন্যান্য জিনিস। ইবন কাসীর পরিধিটা বাড়িয়ে দেন: মর্যাদা, সম্মান, আর উল্লেখে আগে আসা, যা দিয়ে আল্লাহ তাঁদের বিশিষ্ট করেছেন। সা'দীর কাছে বাক্যটি এমন অন্তরের প্রমাণ, যেখানে বিদ্বেষ বা হিংসা নেই। তিনি আরও একটি সিদ্ধান্ত টানেন। আল্লাহ মুহাজিরদের কথা আগে বলেছেন, আর জানিয়েছেন তাঁদের এমন কিছু দেওয়া হয়েছে যা আনসারদের দেওয়া হয়নি। তাই মর্যাদায় মুহাজিররা এগিয়ে, কারণ তাঁরা হিজরত ও নুসরাত দুটিই একসঙ্গে করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Lamp Put Out",
          "bn": "নিভিয়ে দেওয়া বাতি"
        },
        "p": [
          {
            "en": "Ibn Kathir, at-Tabari, al-Baghawi, al-Qurtubi and as-Sa'di all attach an occasion to the clause on preference. In al-Bukhari's wording (4889), quoted by Ibn Kathir, Abu Hurayrah (RA) said: A man came to the Messenger of Allah ﷺ and said: Messenger of Allah, hardship has struck me. He sent to his wives and found nothing with them. The Messenger of Allah ﷺ said: Is there no man who will host this one tonight, may Allah have mercy on him? A man of the Ansar stood and said: I will, Messenger of Allah.",
            "bn": "ঈসারের বাক্যটির সঙ্গে ইবন কাসীর, তাবারী, বাগাভী, কুরতুবী ও সা'দী সবাই একটি শানে নুযূল জুড়ে দেন। ইবন কাসীর যে বর্ণনা উদ্ধৃত করেন, তা বুখারীর ভাষ্য (৪৮৮৯)। আবু হুরায়রা (রাঃ) বলেন: এক ব্যক্তি আল্লাহর রাসূল ﷺ-এর কাছে এসে বলল, হে আল্লাহর রাসূল, আমি কষ্টে পড়েছি। তিনি তাঁর স্ত্রীদের কাছে লোক পাঠালেন, কিন্তু তাঁদের কাছে কিছুই পেলেন না। তখন আল্লাহর রাসূল ﷺ বললেন: এমন কেউ কি নেই, যে আজ রাতে একে মেহমান করবে? আল্লাহ তার প্রতি রহম করুন। আনসারদের এক ব্যক্তি দাঁড়িয়ে বললেন: আমি, হে আল্লাহর রাসূল।"
          },
          {
            "en": "He went to his family and said to his wife: The guest of the Messenger of Allah ﷺ; keep nothing back from him. She said: By Allah, I have nothing but the children's food. He said: When the children want their supper, put them to sleep, then come and put out the lamp, and we will fold our stomachs tonight. She did so. In the morning the man went to the Messenger of Allah ﷺ, who said: Allah, Mighty and Majestic, marvelled, or laughed, at so-and-so and so-and-so. And Allah, Mighty and Majestic, sent down: and they prefer others over themselves, even though they are in privation.",
            "bn": "তিনি পরিবারের কাছে গিয়ে স্ত্রীকে বললেন: আল্লাহর রাসূল ﷺ-এর মেহমান, তাঁর জন্য কিছুই বাঁচিয়ে রেখো না। স্ত্রী বললেন: আল্লাহর কসম, বাচ্চাদের খাবার ছাড়া আমার কাছে কিছু নেই। তিনি বললেন: বাচ্চারা রাতের খাবার চাইলে ওদের ঘুম পাড়িয়ে দিয়ো। তারপর এসে বাতিটা নিভিয়ে দিয়ো, আজ রাতে আমরা পেটে খিদে চেপে থাকব। স্ত্রী তা-ই করলেন। সকালে লোকটি আল্লাহর রাসূল ﷺ-এর কাছে গেলেন। তিনি বললেন: অমুক পুরুষ আর অমুক নারীর কাজে মহান পরাক্রমশালী আল্লাহ বিস্মিত হয়েছেন, কিংবা হেসেছেন। আর মহান পরাক্রমশালী আল্লাহ নাজিল করলেন: 'আর তারা নিজেদের উপর অন্যদের অগ্রাধিকার দেয়, যদিও তারা নিজেরাই অভাবে থাকে।'"
          },
          {
            "en": "Al-Bukhari placed it in his Sahih. Muslim relates it too (2054); one of his chains names the Ansari Abu Talha, as at-Tabari's report does, and another states the reason for the dark: let him think that we are eating. At-Tirmidhi relates a short form (3304) and grades it hasan sahih. Al-Qurtubi lists other occasions, among them a sheep's head passed through seven houses back to the first, and Ibn 'Abbas's report of the Banu an-Nadir offer; he judges the guest's story the soundest.",
            "bn": "বুখারী এটিকে তাঁর সহীহ গ্রন্থে রেখেছেন। মুসলিমও বর্ণনা করেছেন (২০৫৪)। তাঁর একটি সনদে আনসারী সাহাবীর নাম আবু তালহা, তাবারীর বর্ণনাতেও তাই। আরেকটি বর্ণনায় অন্ধকারের কারণটাও বলা আছে: তাকে বুঝতে দাও যে আমরাও খাচ্ছি। তিরমিযী একটি সংক্ষিপ্ত রূপ এনেছেন (৩৩০৪) এবং একে হাসান সহীহ বলেছেন। এই বাক্যের অন্য শানে নুযূলও কুরতুবী উল্লেখ করেন। যেমন একটি ছাগলের মাথা, যা সাতটি ঘর ঘুরে আবার প্রথম ঘরে ফিরে এসেছিল। আর বনু নাযীরের দিনের সেই প্রস্তাব নিয়ে ইবন আব্বাস (রাঃ)-এর বর্ণনা। তবে তাঁর বিচারে মেহমানের ঘটনাটিই সবচেয়ে বিশুদ্ধ।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving With the Gap Open",
          "bn": "অভাবের ফাঁক খোলা রেখেই"
        },
        "p": [
          {
            "en": "Wa yu'thiruna 'ala anfusihim wa law kana bihim khasasah. Al-Qurtubi defines ithar as putting another before yourself and your worldly shares, wanting the shares of religion, and says it grows from strong certainty, firm love and patience under hardship. They prefer the emigrants with wealth and homes, not out of plenty but in need. As-Sa'di calls it the most complete kind of generosity, possible only from a pure character and a love of Allah above the self's appetites.",
            "bn": "'ওয়া ইউসিরূনা আলা আনফুসিহিম ওয়া লাও কানা বিহিম খাসাসাহ।' কুরতুবীর সংজ্ঞায় ঈসার মানে দুনিয়ার ভাগে নিজের চেয়ে অন্যকে আগে রাখা, দ্বীনের ভাগ পাওয়ার আশায়। তাঁর মতে এর জন্ম দৃঢ় ইয়াকীন, গভীর ভালোবাসা আর কষ্টে সবর থেকে। তাঁরা নিজেদের সম্পদ ও ঘরবাড়িতে মুহাজিরদের অগ্রাধিকার দেন, প্রাচুর্য থেকে নয়, বরং নিজেরাই অভাবী অবস্থায়। সা'দী একে বলেন দানশীলতার সবচেয়ে পূর্ণ রূপ। এমনটা আসে কেবল পবিত্র চরিত্র থেকে, আর এমন ভালোবাসা থেকে, যেখানে আল্লাহ নফসের চাহিদার আগে।"
          },
          {
            "en": "At-Tabari glosses khasasah as need and want; the word also names anything the eye passes through, like a window or a gap in a wall. Al-Qurtubi derives it from ikhtisas, being alone in a matter: khasasah is being singled out by need, need that unsettles a person's state. Ibn Kathir ranks this above 76:8 and 2:177, which praise giving food and wealth despite love of it: those give what they love and may not need, while these gave what they themselves needed.",
            "bn": "তাবারী খাসাসাহর অর্থ করেন প্রয়োজন ও অভাব। সঙ্গে জানান, শব্দটি এমন যে কোনো কিছুকেও বোঝায়, যার ভেতর দিয়ে চোখ চলে যায়, যেমন জানালা বা দেয়ালের ফাঁক। কুরতুবী শব্দটিকে আনেন ইখতিসাস থেকে, অর্থাৎ কোনো বিষয়ে একা হয়ে পড়া। তাঁর ব্যাখ্যায় খাসাসাহ মানে অভাবে একা পড়ে যাওয়া, এমন অভাব যাতে অবস্থাই নড়বড়ে হয়ে যায়। ইবন কাসীর এই স্তরকে রাখেন ৭৬:৮ ও ২:১৭৭-এর উপরে, যেখানে ভালোবাসা সত্ত্বেও খাবার ও সম্পদ দানের প্রশংসা আছে। তারা দেয় প্রিয় জিনিস, যার হয়তো তাদের দরকার নেই। আর এঁরা দিয়েছেন সেই জিনিস, যার দরকার তাঁদের নিজেদেরই ছিল।"
          },
          {
            "en": "Al-Qurtubi meets an objection: sound reports discourage giving away everything. That, he answers, concerns someone who cannot bear poverty patiently and may end up begging; the Ansar were not like that, and for them preference was better than holding back. In al-Bukhari's Sahih (3794), cited by Ibn Kathir, the Prophet ﷺ offered the Ansar land in Bahrain and they said: not unless you give our brothers among the emigrants the like of it. He told them to be patient until they met him, for after him others would be preferred over them.",
            "bn": "কুরতুবী একটি আপত্তির জবাব দেন: বিশুদ্ধ বর্ণনায় তো সব সম্পদ দান করে দিতে নিরুৎসাহিত করা হয়েছে। তাঁর উত্তর, সে কথা তার জন্য, যে অভাবে সবর করতে পারে না, শেষে হয়তো মানুষের কাছে হাত পাতবে। আনসাররা তেমন ছিলেন না। তাঁদের বেলায় ধরে রাখার চেয়ে অগ্রাধিকার দেওয়াই উত্তম ছিল। বুখারী তাঁর সহীহ গ্রন্থে বর্ণনা করেছেন (৩৭৯৪), আর ইবন কাসীর উদ্ধৃত করেন: নবী ﷺ আনসারদের বাহরাইনের ভূমি দিতে চাইলেন। তাঁরা বললেন, আমাদের মুহাজির ভাইদেরও সমান না দিলে নেব না। তিনি বললেন, আমার পরে তোমাদের উপর অন্যদের প্রাধান্য দেওয়া হবে, তাই আমার সঙ্গে দেখা হওয়া পর্যন্ত সবর করো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Shuhh of the Soul Means",
          "bn": "নফসের শুহহ বলতে কী"
        },
        "p": [
          {
            "en": "Wa man yuqa shuhha nafsihi fa-ula'ika humu al-muflihun. At-Tabari names the unspoken agent: whoever Allah protects from the shuhh of his soul. In Arab speech, he says, shuhh is miserliness and withholding surplus wealth, yet the scholars hold that here it means consuming people's wealth without right. A man, he relates, told Ibn Mas'ud (RA) he feared ruin, being so tight-fisted that hardly anything left his hand. Ibn Mas'ud replied: that is bukhl, and an evil thing it is; the shuhh Allah mentions is eating your brother's wealth unjustly.",
            "bn": "'ওয়া মাই ইউকা শুহহা নাফসিহী ফাউলাইকা হুমুল মুফলিহূন।' কর্মবাচ্য যে কর্তাকে উহ্য রাখে, তাবারী তাঁকে স্পষ্ট করে দেন: আল্লাহ যাকে তার নফসের শুহহ থেকে রক্ষা করেন। তিনি বলেন, আরবদের ভাষায় শুহহ মানে কৃপণতা আর বাড়তি সম্পদ আটকে রাখা। তবে আলিমদের মতে এখানে এর অর্থ অন্যায়ভাবে মানুষের সম্পদ খাওয়া। তিনি বর্ণনা করেন, এক লোক ইবন মাসউদ (রাঃ)-কে বলল, আমার ভয় হয় আমি ধ্বংস হয়ে গেছি। আমি এমন কৃপণ যে হাত থেকে প্রায় কিছুই বের হয় না। ইবন মাসউদ (রাঃ) বললেন: এটা বুখল, আর বুখল খুবই মন্দ জিনিস। কিন্তু আল্লাহ যে শুহহের কথা বলেছেন, তা হলো জুলুম করে ভাইয়ের সম্পদ খাওয়া।"
          },
          {
            "en": "Here the commentators genuinely differ. Al-Qurtubi says shuhh and bukhl are the same, though some lexicographers make shuhh stronger; the Sihah has miserliness with greed. Tawus, in al-Qurtubi, separates them: bukhl is stinting with what is in your hand, shuhh is craving what is in other people's hands, lawful or not. For Ibn 'Umar, in al-Baghawi, it is the eye straining towards what is not one's own. As-Sa'di widens protection from it to every command: a self so guarded gives readily what Allah asks and leaves what He forbids.",
            "bn": "এখানে মুফাসসিরদের মধ্যে সত্যিকারের মতভেদ আছে। কুরতুবী বলেন, শুহহ আর বুখল একই জিনিস। তবে তিনি জানান, কোনো কোনো ভাষাবিদ শুহহকে বেশি তীব্র ধরেন, আর সিহাহ অভিধান বলে: লোভ মেশানো কৃপণতা। কুরতুবীর উদ্ধৃতিতে তাউস দুটিকে আলাদা করেন। বুখল হলো নিজের হাতে যা আছে তাতে কার্পণ্য, আর শুহহ হলো মানুষের হাতে যা আছে তার জন্য লালায়িত হওয়া, হালাল হোক বা হারাম। বাগাভীর উদ্ধৃতিতে ইবন উমর (রাঃ) বলেন, যা নিজের নয় তার দিকে চোখ লোলুপ হয়ে ওঠা। সা'দী এ থেকে রক্ষা পাওয়াকে সব নির্দেশ পর্যন্ত ছড়িয়ে দেন। এমন নফস আল্লাহর আদেশ খুশিমনে পালন করে, আর তাঁর নিষেধ ছেড়ে দেয়।"
          },
          {
            "en": "At-Tabari relates with his chain, without grading it, a narration from Anas (RA): free of shuhh is whoever pays zakah, hosts the guest and gives in calamity. Ibn Kathir, al-Baghawi and al-Qurtubi cite the Prophet's ﷺ warning, in Muslim's Sahih (2578) from Jabir (RA): Beware of oppression, for oppression will be darkness on the Day of Resurrection; and beware of shuhh, for shuhh destroyed those who were before you: it drove them to shed their blood and to treat as lawful what was forbidden to them. The successful, at-Tabari says, are those made to abide in Paradise.",
            "bn": "তাবারী নিজের সনদে আনাস (রাঃ) থেকে একটি বর্ণনা আনেন, তবে এর মান উল্লেখ করেন না: যে যাকাত আদায় করে, মেহমানের আপ্যায়ন করে, আর বিপদের সময় দান করে, সে শুহহ থেকে মুক্ত। এরপর ইবন কাসীর, বাগাভী ও কুরতুবী নবী ﷺ-এর একটি সতর্কবাণী উদ্ধৃত করেন, যা মুসলিম তাঁর সহীহ গ্রন্থে জাবির (রাঃ) থেকে বর্ণনা করেছেন (২৫৭৮): 'তোমরা জুলুম থেকে বাঁচো, কেননা কিয়ামতের দিন জুলুম হবে অন্ধকার। আর শুহহ থেকে বাঁচো, কেননা শুহহ তোমাদের আগের লোকদের ধ্বংস করেছে। এটিই তাদের রক্ত ঝরাতে আর তাদের জন্য হারাম জিনিসকে হালাল করে নিতে প্ররোচিত করেছিল।' তাবারী বলেন, সফলকাম তারাই, যাদের জান্নাতে চিরস্থায়ী করা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer While Circling",
          "bn": "তাওয়াফের মাঝে এক দু'আ"
        },
        "p": [
          {
            "en": "At-Tabari, Ibn Kathir and al-Qurtubi relate from Abu al-Hayyaj al-Asadi that he saw a man circling the House who said only: O Allah, protect me from the shuhh of my soul. Asked about it, the man said: if I am protected from the shuhh of my soul, I will not steal, nor commit zina, nor do any of it. The man was 'Abd ar-Rahman ibn 'Awf (RA). His prayer keeps the verse's passive: protection is asked for, because it is given.",
            "bn": "তাবারী, ইবন কাসীর ও কুরতুবী আবুল হাইয়াজ আল-আসাদী থেকে বর্ণনা করেন: কাবা তাওয়াফের সময় তিনি এক ব্যক্তিকে দেখলেন, যিনি শুধু এটুকুই বলছিলেন: হে আল্লাহ, আমাকে আমার নফসের শুহহ থেকে রক্ষা করুন। এর বেশি কিছু নয়। জিজ্ঞেস করলে তিনি বললেন: আমাকে যদি আমার নফসের শুহহ থেকে রক্ষা করা হয়, তবে আমি চুরি করব না, যিনা করব না, এর কোনোটাই করব না। লোকটি ছিলেন আবদুর রহমান ইবন আওফ (রাঃ)। তাঁর দু'আয় আয়াতের কর্মবাচ্যটাই রয়ে গেছে। রক্ষা চেয়ে নিতে হয়, কারণ তা আসে দান হিসেবে।"
          },
          {
            "en": "Ibn Kathir reads 59:10 as the third class, those who followed the emigrants and the Ansar in their good works and pray for them, and sets 9:100 beside it. Ask, in 'Abd ar-Rahman's words, to be guarded from the shuhh of your own soul. Give once from what you need, not from what is left over, and quietly, as the lamp was put out so the guest would not see. And when someone else is favoured, look into your chest: the verse praises hearts that found nothing there.",
            "bn": "ইবন কাসীর ৫৯:১০-কে দেখেন তৃতীয় শ্রেণি হিসেবে: যারা ভালো কাজে মুহাজির ও আনসারদের অনুসরণ করে এবং তাঁদের জন্য দু'আ করে। পাশে তিনি রাখেন ৯:১০০। আবদুর রহমান (রাঃ)-এর ভাষায় নিজের নফসের শুহহ থেকে রক্ষা চান। অন্তত একবার দান করুন প্রয়োজনের জিনিস থেকে, উদ্বৃত্ত থেকে নয়। আর চুপচাপ, যেভাবে বাতি নিভিয়ে দেওয়া হয়েছিল যাতে মেহমান টের না পান। অন্য কেউ এগিয়ে গেলে নিজের বুকের ভেতরটা দেখুন। আয়াত প্রশংসা করছে সেই অন্তরের, যেখানে এমন কিছুই পাওয়া যায়নি।"
          }
        ]
      }
    ]
  },
  "59:18-19": {
    "sections": [
      {
        "h": {
          "en": "The Surah Turns Inward",
          "bn": "সূরার চোখ এবার নিজের দিকে"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an marks the turn. The earlier parts of al-Hashr, it says, described events concerning the Jews, the pagans and the hypocrites, with their punishments in this world and the next; the closing part now makes the believers conscious of their duty towards Allah and advises them to keep up righteous deeds. So the address changes to ya ayyuha-lladhina amanu, O you who believe. Having spent its middle on other people's walls and alliances, the surah now asks the reader to look at himself.",
            "bn": "মাআরিফুল কুরআন এই মোড়টা চিনিয়ে দেয়। তার ভাষায়, সূরা হাশরের আগের অংশে এসেছে ইহুদি, মুশরিক আর মুনাফিকদের ঘটনা, সঙ্গে দুনিয়া ও আখিরাতে তাদের শাস্তির কথা। শেষ অংশে এসে সূরা মুমিনদের আল্লাহর প্রতি তাদের দায়িত্ব মনে করিয়ে দেয় এবং নিয়মিত নেক আমল করে যাওয়ার উপদেশ দেয়। তাই সম্বোধনও বদলে যায়: ইয়া আইয়্যুহাল্লাযীনা আমানূ, হে মুমিনগণ। যে সূরা মাঝের অংশ জুড়ে অন্যদের দুর্গ আর মৈত্রীর কথা বলেছে, সে এবার পাঠককে বলছে নিজের দিকে তাকাতে।"
          },
          {
            "en": "The verse is built as a ring. Ittaqu-llah, fear Allah, opens it; wal-tanzur nafsun ma qaddamat li-ghad, and let a soul look to what it has put forth for tomorrow, stands in the middle; wa-ttaqu-llah comes again; and inna-llaha khabirun bima ta'malun, Allah is aware of what you do, seals it. Ibn Kathir defines the taqwa commanded as doing what He ordered and leaving what He forbade. At-Tabari puts it as performing His obligations and avoiding His acts of disobedience. As-Sa'di adds where it must hold: in secret and in the open, in every state.",
            "bn": "আয়াতটির গড়ন একটা বৃত্তের মতো। শুরুতে ইত্তাকুল্লাহ, আল্লাহকে ভয় করো। মাঝখানে ওয়ালতানযুর নাফসুম মা কাদ্দামাত লিগাদ, প্রত্যেকে যেন দেখে আগামীকালের জন্য সে কী আগে পাঠিয়েছে। তারপর আবার ওয়াত্তাকুল্লাহ। আর শেষে মোহর হয়ে আসে ইন্নাল্লাহা খাবীরুম বিমা তা'মালূন, তোমরা যা করো আল্লাহ সে বিষয়ে পুরো খবর রাখেন। ইবন কাসীরের সংজ্ঞায় এখানে আদিষ্ট তাকওয়া মানে তিনি যা হুকুম করেছেন তা করা, আর যা নিষেধ করেছেন তা ছাড়া। তাবারী বলেন একই কথা অন্যভাবে: তাঁর ফরজগুলো আদায় করা আর তাঁর নাফরমানি থেকে দূরে থাকা। সা'দী যোগ করেন, এ তাকওয়া থাকতে হবে গোপনে ও প্রকাশ্যে, সব অবস্থায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Day Is Tomorrow",
          "bn": "কিয়ামতের নাম কেন আগামীকাল"
        },
        "p": [
          {
            "en": "Ghad, tomorrow, is the Day of Resurrection: al-Qurtubi says so, and at-Tabari reports the same from Qatada, ad-Dahhak and Ibn Zayd; al-Baghawi and al-Muyassar agree. Why call it tomorrow? Al-Qurtubi gives two answers. The Arabs, he says, speak of the future as tomorrow. Others hold that naming tomorrow is a warning that the Hour is near, and he cites the poet Qurar ibn Ajda': if the start of this day has turned away, tomorrow is near to the one who watches for it.",
            "bn": "গাদ, অর্থাৎ আগামীকাল, মানে কিয়ামতের দিন। কুরতুবী তা-ই বলেন, আর তাবারী একই কথা বর্ণনা করেন কাতাদা, দাহহাক ও ইবন যায়দ থেকে। বাগাভী ও মুয়াসসারও একমত। কিন্তু সে দিনকে আগামীকাল বলা কেন? কুরতুবী দুটি জবাব দেন। প্রথমত, আরবরা ভবিষ্যৎকে আগামীকাল বলে ইঙ্গিত করে। দ্বিতীয়ত, কারও কারও মতে আগামীকালের উল্লেখ এক সতর্কবার্তা যে কিয়ামত কাছে এসে গেছে। এর সমর্থনে তিনি কবি কুরার ইবন আজদা'র পঙক্তি আনেন: আজকের দিনের শুরুটা যদি চলেও যায়, যে অপেক্ষায় চেয়ে আছে তার কাছে আগামীকাল তো কাছেই।"
          },
          {
            "en": "At-Tabari's report from Qatada says it plainly: your Lord kept bringing the Hour nearer until He made it like tomorrow, and tomorrow is the Day of Resurrection. Al-Qurtubi gives the same from al-Hasan and Qatada, then adds a remark of his own: there is no doubt that everything coming is near, and death is coming without fail. Ibn Zayd, in at-Tabari, pairs the word with its opposite: yesterday is in this world and tomorrow in the Hereafter, and he reads 10:24, as if it had not flourished yesterday, meaning as if it had not been in the world.",
            "bn": "তাবারীর বর্ণনায় কাতাদা কথাটা সোজাসুজি বলে দেন: তোমাদের রব কিয়ামতকে কাছে আনতে আনতে আগামীকালের মতো করে দিয়েছেন, আর আগামীকাল হলো কিয়ামতের দিন। কুরতুবীও হাসান ও কাতাদা থেকে একই কথা আনেন, তারপর নিজের একটি মন্তব্য জুড়ে দেন: যা আসবেই তা যে কাছে, এতে কোনো সন্দেহ নেই, আর মৃত্যু তো আসবেই। তাবারীর সূত্রে ইবন যায়দ শব্দটিকে তার বিপরীতের পাশে রাখেন। গতকাল হলো দুনিয়ায়, আগামীকাল আখিরাতে। তিনি পড়েন ১০:২৪ আয়াতের অংশ, যেন গতকাল তার কোনো অস্তিত্বই ছিল না। এর মানে, যেন দুনিয়ায় তা কখনো ছিলই না।"
          },
          {
            "en": "Ma'arif al-Qur'an finds three points in the word. Compared to the endless Hereafter, the whole of this world is like a single day; the Resurrection is as certain as tomorrow following today; and it is near, as tomorrow is near. It then divides the Hour in two. For each person the first phase begins at death, so that every individual's day of judgement starts with his death. The second is when the whole world perishes, which, however far off, is close beside eternity.",
            "bn": "মাআরিফুল কুরআন এই শব্দে তিনটি দিক দেখে। অনন্ত আখিরাতের তুলনায় গোটা দুনিয়া একটা দিনের মতো। আজকের পর আগামীকাল আসা যেমন নিশ্চিত, কিয়ামতও তেমনি নিশ্চিত। আর আগামীকাল যেমন কাছে, কিয়ামতও তেমনি কাছে। এরপর গ্রন্থটি কিয়ামতকে দুই ভাগে দেখে। প্রত্যেক মানুষের জন্য প্রথম ধাপ শুরু হয় মৃত্যুতে, ফলে প্রত্যেকের বিচারের দিন শুরু হয় তার মৃত্যু থেকেই। দ্বিতীয় ধাপ যখন গোটা জগৎ ধ্বংস হবে। তা যত দূরেই হোক, অনন্তকালের পাশে তা খুব কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Soul, One Ledger",
          "bn": "প্রত্যেকের হাতে নিজের খাতা"
        },
        "p": [
          {
            "en": "Nafsun is singular and carries no article: a soul, any soul. The commentators read it as each person facing his own record. At-Tabari paraphrases: let one of you look at what he has put forth of deeds for the Day of Resurrection; al-Baghawi uses the same words, one of you. Al-Muyassar sharpens the verb: let every soul ponder, li-tatadabbar, what deeds it has put forth. The verse does not ask a community to inspect its members. It hands each reader one ledger, his own, and tells him to open it.",
            "bn": "নাফসুন শব্দটি একবচন, আর তার আগে কোনো নির্দিষ্টবাচক আল নেই: একটি নফস, যে-কোনো নফস। মুফাসসিরগণ এর মানে নেন প্রত্যেক মানুষ, নিজের আমলনামার সামনে। তাবারী অর্থ করেন: তোমাদের প্রত্যেকে যেন দেখে, কিয়ামতের দিনের জন্য সে কী আমল আগে পাঠিয়েছে। বাগাভীও একই শব্দ ব্যবহার করেন, তোমাদের প্রত্যেকে। মুয়াসসার ক্রিয়াটিকে আরও ধারালো করে: প্রত্যেক নফস যেন গভীরভাবে ভেবে দেখে (লিতাতাদাব্বার), সে কী কী আমল আগে পাঠিয়েছে। আয়াত কোনো সমাজকে তার সদস্যদের খাতা ঘাঁটতে বলছে না। প্রত্যেক পাঠকের হাতে সে একটি খাতা তুলে দেয়, তার নিজেরটা, আর বলে খুলে দেখতে।"
          },
          {
            "en": "What it has put forth, ma qaddamat, covers good and evil alike, al-Qurtubi says, and Ma'arif al-Qur'an agrees; at-Tabari has the soul ask whether its deeds are righteous ones that will save it or evil ones that will ruin it. Ma'arif adds a banker's image. Man lives here as a traveller and can carry no wealth out of this world; but as money is deposited in one country and drawn in another currency, wealth spent in the way of Allah is deposited, recorded as reward and handed over on arrival. Evil sent ahead arrives as an indictment.",
            "bn": "মা কাদ্দামাত, অর্থাৎ যা সে আগে পাঠিয়েছে, তাতে ভালো-মন্দ দুই-ই পড়ে। কুরতুবী তা বলেন, মাআরিফুল কুরআনও একমত। তাবারীর ভাষায় নফস নিজেকে প্রশ্ন করবে: আমার আমলগুলো কি এমন নেক আমল যা আমাকে বাঁচাবে, নাকি এমন গুনাহ যা আমাকে ধ্বংস করবে? মাআরিফ এখানে ব্যাংকের একটা উপমা দেয়। মানুষ দুনিয়ায় থাকে মুসাফিরের মতো, এখান থেকে কোনো সম্পদ সঙ্গে নিয়ে যেতে পারে না। কিন্তু এক দেশে টাকা জমা দিয়ে যেমন আরেক দেশে সেখানকার মুদ্রায় তোলা যায়, তেমনি আল্লাহর পথে খরচ করা সম্পদ জমা হয়, সওয়াব হিসেবে লেখা থাকে, আর পৌঁছামাত্র হাতে তুলে দেওয়া হয়। আর গুনাহ আগে পাঠালে তা পৌঁছায় অভিযোগনামা হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Reckoned Before the Reckoning",
          "bn": "হিসাবের আগেই নিজের হিসাব"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses the middle clause with a command: hasibu anfusakum qabla an tuhasabu, reckon yourselves before you are reckoned, and look at what you have stored up of righteous deeds for the Day of your return and your presentation before your Lord. In this text he gives the sentence as his own explanation and names no one as its source. As-Sa'di goes further and calls the verse an asl, a foundation, for the servant's reckoning of himself: he ought to keep checking on his own soul.",
            "bn": "মাঝের কথাটির ব্যাখ্যা ইবন কাসীর দেন একটি আদেশ দিয়ে: হাসিবূ আনফুসাকুম কাবলা আন তুহাসাবূ, তোমাদের হিসাব নেওয়ার আগে নিজেরাই নিজেদের হিসাব নাও। আর দেখো, ফিরে যাওয়ার দিন এবং রবের সামনে হাজির হওয়ার দিনের জন্য কী নেক আমল জমিয়েছ। এখানকার পাঠে তিনি বাক্যটি দেন নিজের ব্যাখ্যা হিসেবে, এর উৎস হিসেবে কারও নাম নেন না। সা'দী আরও এগিয়ে যান। তাঁর মতে আয়াতটি বান্দার নিজের হিসাব নেওয়ার এক আসল, অর্থাৎ মূল ভিত্তি। বান্দার উচিত নিজের নফসের খোঁজখবর নিয়মিত নিতে থাকা।"
          },
          {
            "en": "His method has three movements. If the servant sees a slip, he makes it good by quitting it, by sincere repentance, and by turning away from the causes that lead to it. If he finds himself falling short in any command of Allah, he exerts himself and asks his Lord's help to complete and perfect it. Then he sets Allah's favours and kindness to him beside his own shortcoming, and that comparison, as-Sa'di says, necessarily produces haya', shame before Him. Those who keep the Hereafter before their eyes, he adds, strive in more deeds and clear them of what holds them back.",
            "bn": "তাঁর পদ্ধতির তিনটি ধাপ। বান্দা কোনো পদস্খলন দেখলে তা শুধরে নেবে: কাজটা ছেড়ে দিয়ে, খাঁটি তওবা করে, আর যে পথ ধরে ওখানে পৌঁছেছিল সে পথ থেকে মুখ ফিরিয়ে। আল্লাহর কোনো হুকুমে নিজের ঘাটতি দেখলে সে সর্বশক্তি দিয়ে চেষ্টা করবে, আর তা পূর্ণ ও নিখুঁত করতে রবের সাহায্য চাইবে। তারপর নিজের প্রতি আল্লাহর নিয়ামত ও অনুগ্রহ রাখবে নিজের ঘাটতির পাশাপাশি। সা'দী বলেন, এই তুলনা অনিবার্যভাবে জন্ম দেয় হায়া, আল্লাহর সামনে লজ্জা। তিনি আরও বলেন, যারা আখিরাতকে চোখের সামনে রাখে, তারা আমল বাড়ায় এবং যা কিছু পথ আটকায় তা থেকে আমলকে পরিষ্কার রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Allah, Said Twice",
          "bn": "একই আয়াতে দুবার তাকওয়া"
        },
        "p": [
          {
            "en": "Why is fear Allah said twice? Here the commentators part ways. Ibn Kathir calls the second a further emphasis, and al-Qurtubi's first answer agrees: the command is repeated as one says hurry, hurry, or shoot, shoot. A second view, which al-Qurtubi reports without naming its holder, gives each command its own object: the first taqwa is repentance for past sins, the second is guarding against sin in the future. Ma'arif al-Qur'an allows emphasis too, then gives Maulana Ashraf Thanawi's version: the first is for fulfilling obligatory duties, the second for abstaining from sins.",
            "bn": "আল্লাহকে ভয় করো কথাটা দুবার কেন? এখানে মুফাসসিরদের পথ আলাদা হয়ে যায়। ইবন কাসীরের মতে দ্বিতীয়টি বাড়তি জোর দেওয়ার জন্য। কুরতুবীর প্রথম জবাবও তা-ই: যেমন কেউ বলে, তাড়াতাড়ি করো, তাড়াতাড়ি করো; ছোড়ো, ছোড়ো। দ্বিতীয় একটি মত কুরতুবী উল্লেখ করেন, কার মত তা না বলে। সে মতে দুই আদেশের লক্ষ্য দুটি। প্রথম তাকওয়া হলো অতীতের গুনাহ থেকে তওবা, দ্বিতীয়টি ভবিষ্যতে গুনাহ থেকে বেঁচে থাকা। মাআরিফুল কুরআন জোর দেওয়ার ব্যাখ্যাও মেনে নেয়, তারপর আনে মাওলানা আশরাফ আলী থানভীর ব্যাখ্যা: প্রথমটি ফরজ দায়িত্ব পালনের জন্য, দ্বিতীয়টি গুনাহ থেকে বিরত থাকার জন্য।"
          },
          {
            "en": "Ma'arif adds a reading of its own: the first taqwa sends good deeds ahead, and the second makes sure what is sent is not counterfeit, deeds that look righteous but lack sincerity, done for show, or with no basis in the religion. On the closing name, at-Tabari says Allah has full knowledge of your deeds, good and bad, nothing of them is hidden from Him, and He will recompense you for all of them. As-Sa'di: knowing that nothing is lost or neglected with Him is what produces earnest effort.",
            "bn": "মাআরিফ নিজের একটি ব্যাখ্যাও যোগ করে। প্রথম তাকওয়া নেক আমল সামনে পাঠায়, আর দ্বিতীয়টি নিশ্চিত করে যে পাঠানো মাল জাল নয়। জাল আমল মানে যা দেখতে নেক, কিন্তু তাতে ইখলাস নেই, যা লোক দেখানোর জন্য করা, কিংবা দ্বীনে যার কোনো ভিত্তি নেই। শেষের নামটি নিয়ে তাবারী বলেন, তোমাদের ভালো-মন্দ সব আমল আল্লাহ পুরোপুরি জানেন, তার কিছুই তাঁর কাছে গোপন নেই, আর প্রতিটির প্রতিদান তিনি দেবেন। সা'দীর কথায়, তাঁর কাছে কিছুই হারায় না, কিছুই অবহেলায় পড়ে থাকে না, এই জ্ঞানই মানুষকে প্রাণপণ চেষ্টায় নামায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Even Half a Date",
          "bn": "আধখানা খেজুর হলেও"
        },
        "p": [
          {
            "en": "Ibn Kathir opens with this report, which Muslim records it in his Sahih from al-Mundhir ibn Jarir, from his father, Jarir (RA): 'We were with the Messenger of Allah ﷺ early in the day when a people came to him barefoot and unclothed, wrapped in striped woollen cloaks or mantles, with swords hung from their shoulders. Most of them, rather all of them, were from Mudar. The face of the Messenger of Allah ﷺ changed at the poverty he saw in them. He went in, then came out, and ordered Bilal, who gave the adhan and the iqama.",
            "bn": "ইবন কাসীর শুরু করেন এই বর্ণনা দিয়ে। মুসলিম তাঁর সহীহ গ্রন্থে এটি এনেছেন মুনযির ইবন জারীর থেকে, তিনি তাঁর পিতা জারীর (রাঃ) থেকে: ‘আমরা দিনের শুরুতে রাসূলুল্লাহ ﷺ-এর কাছে ছিলাম। এমন সময় তাঁর কাছে একদল লোক এল, খালি পা, গায়ে প্রায় কাপড় নেই। পরনে ডোরাকাটা পশমি চাদর বা আলখাল্লা, কাঁধে তলোয়ার ঝোলানো। তাদের বেশির ভাগ, বরং সবাই ছিল মুদার গোত্রের। তাদের অভাব দেখে রাসূলুল্লাহ ﷺ-এর চেহারা বদলে গেল। তিনি ভেতরে গেলেন, তারপর বেরিয়ে এসে বিলালকে হুকুম দিলেন। বিলাল আযান দিলেন, ইকামত দিলেন।"
          },
          {
            "en": "He prayed, then addressed them: O people, fear your Lord who created you from a single soul, to the end of the verse, Indeed Allah is ever watchful over you; and the verse in al-Hashr, Fear Allah, and let a soul look to what it has put forth for tomorrow, and fear Allah. Let a man give charity from his dinar, from his dirham, from his garment, from his sa' of wheat, from his sa' of dates, until he said: even if it be half a date. Then a man of the Ansar came with a purse his hand could barely hold; indeed it could not.",
            "bn": "তিনি নামাজ পড়লেন, তারপর খুতবা দিলেন: হে মানুষ, তোমাদের রবকে ভয় করো, যিনি তোমাদের সৃষ্টি করেছেন এক নফস থেকে, এভাবে আয়াতের শেষ পর্যন্ত, নিশ্চয়ই আল্লাহ তোমাদের উপর সদা দৃষ্টি রাখেন। আর পড়লেন সূরা হাশরের আয়াত: আল্লাহকে ভয় করো, প্রত্যেকে যেন দেখে আগামীকালের জন্য সে কী আগে পাঠিয়েছে, আর আল্লাহকে ভয় করো। মানুষ সদকা করুক তার দীনার থেকে, দিরহাম থেকে, কাপড় থেকে, এক সা' গম থেকে, এক সা' খেজুর থেকে। শেষে তিনি বললেন: আধখানা খেজুর হলেও। তখন আনসারদের একজন এক থলে নিয়ে এলেন, যা তাঁর হাত প্রায় ধরে রাখতে পারছিল না, বরং পারছিলই না।"
          },
          {
            "en": "Then the people kept coming, until I saw two heaps of food and clothing, and I saw the face of the Messenger of Allah ﷺ shining as if gilded. The Messenger of Allah ﷺ said: Whoever sets a good precedent in Islam has its reward and the reward of those who act on it after him, without anything lessened from their rewards; and whoever sets a bad precedent in Islam bears its burden and the burden of those who act on it after him, without anything lessened from their burdens.'",
            "bn": "তারপর লোকেরা আসতেই থাকল। শেষে দেখলাম খাবার আর কাপড়ের দুটি স্তূপ জমে গেছে। আর দেখলাম রাসূলুল্লাহ ﷺ-এর চেহারা ঝলমল করছে, যেন সোনায় মোড়ানো। রাসূলুল্লাহ ﷺ বললেন: যে ইসলামে কোনো ভালো রীতি চালু করে, সে তার সওয়াব পাবে, আর তার পরে যারা সে অনুযায়ী আমল করবে তাদের সওয়াবও পাবে, অথচ তাদের সওয়াব থেকে কিছুই কমবে না। আর যে ইসলামে কোনো মন্দ রীতি চালু করে, তার উপর থাকবে তার গুনাহের বোঝা, আর তার পরে যারা সে অনুযায়ী আমল করবে তাদের বোঝাও, অথচ তাদের বোঝা থেকে কিছুই কমবে না।’"
          },
          {
            "en": "That is the whole of Muslim's first narration. It stands in his Sahih, and he adds no grading of his own beyond placing it there. Ibn Kathir cites it from Imam Ahmad and remarks that, of the collections, Muslim alone recorded it, through Shu'ba. In that hour, what a soul put forth for tomorrow was a dinar, a measure of dates, a garment. The first to answer was a man of the Ansar, the people whom 59:9 praises for preferring others over themselves.",
            "bn": "এটাই মুসলিমের প্রথম বর্ণনার পুরোটা। হাদীসটি তাঁর সহীহ গ্রন্থে আছে, আর সেখানে স্থান দেওয়ার বাইরে তিনি আলাদা কোনো মান উল্লেখ করেননি। ইবন কাসীর এটি ইমাম আহমাদ থেকে উদ্ধৃত করেন এবং মন্তব্য করেন যে হাদীসগ্রন্থগুলোর মধ্যে শুধু মুসলিমই শু'বার সূত্রে এটি এনেছেন। সেই মুহূর্তে আগামীকালের জন্য আগে পাঠানো মানে ছিল একটা দীনার, এক মাপ খেজুর, একটা কাপড়। আর প্রথম সাড়া দিলেন আনসারদের একজন। এরাই সেই লোক, অন্যকে নিজের উপর প্রাধান্য দেওয়ার জন্য ৫৯:৯ আয়াত যাদের প্রশংসা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Forgot Allah",
          "bn": "যারা আল্লাহকে ভুলে গেল"
        },
        "p": [
          {
            "en": "59:19 shows the opposite of looking ahead. At-Tabari explains those who forgot Allah as those who abandoned the right of Allah that He made binding on them, and fa-ansahum anfusahum as: so Allah made them forget their own souls' shares of good. He reports the same from Sufyan: they forgot Allah's right, so He made them forget their own share. Al-Muyassar adds that these were the shares that would have saved them from punishment; al-Baghawi, that they then sent nothing good ahead for themselves.",
            "bn": "৫৯:১৯ দেখায় সামনে তাকানোর উল্টো চেহারা। তাবারীর ব্যাখ্যায় যারা আল্লাহকে ভুলে গেছে তারা হলো সেই লোক, যারা আল্লাহর সেই হক আদায় করা ছেড়ে দিয়েছে, যা তিনি তাদের উপর ফরজ করেছিলেন। আর ফাআনসাহুম আনফুসাহুম মানে, আল্লাহ তাদের ভুলিয়ে দিলেন নিজেদের কল্যাণের ভাগটুকু। সুফইয়ান থেকেও তিনি একই কথা আনেন: তারা আল্লাহর হক ভুলে গেল, তাই তিনি তাদের ভুলিয়ে দিলেন তাদের নিজেদের ভাগ। মুয়াসসার যোগ করে, এই ভাগই তাদের আযাব থেকে বাঁচাতে পারত। বাগাভী বলেন, ফলে তারা নিজেদের জন্য কোনো কল্যাণ আগে পাঠায়নি।"
          },
          {
            "en": "Ibn Kathir reads it as a warning about dhikr: do not forget the remembrance of Allah, lest He make you forget to work for your own good, for the recompense is of the same kind as the deed. Al-Qurtubi gathers other readings. Ibn 'Isa held that He made them forget themselves through punishment, so that none reminded another; Sahl ibn 'Abd Allah, that they forgot Allah at the moment of sin, so He made them forget themselves at the moment of repentance. As-Sa'di says they chased their own desires and came back with the loss of both abodes.",
            "bn": "ইবন কাসীর একে পড়েন জিকিরের ব্যাপারে সতর্কবার্তা হিসেবে: আল্লাহর জিকির ভুলে যেয়ো না, নইলে তিনি তোমাকে ভুলিয়ে দেবেন নিজের কল্যাণের জন্য কাজ করার কথা। কারণ প্রতিদান আমলেরই জাতের হয়। কুরতুবী আরও কয়েকটি ব্যাখ্যা একসঙ্গে আনেন। ইবন ঈসার মতে আযাবের মাধ্যমে তিনি তাদের আত্মভোলা করেছেন, ফলে কেউ কাউকে মনে করিয়ে দেয় না। সাহল ইবন আবদুল্লাহর মতে, গুনাহের মুহূর্তে তারা আল্লাহকে ভুলেছিল, তাই তওবার মুহূর্তে তিনি তাদের নিজেদের কথা ভুলিয়ে দিলেন। সা'দী বলেন, তারা নিজেদের খেয়ালখুশির পেছনে ছুটেছিল, আর ফিরে এসেছে দুই জাহানের ক্ষতি নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Going Out of Obedience",
          "bn": "আনুগত্যের সীমা পেরিয়ে"
        },
        "p": [
          {
            "en": "Ula'ika humu-l-fasiqun, those are the defiantly disobedient. Al-Qurtubi gives the root: fisq is going out. At-Tabari: those who go out from obedience to Allah into disobedience to Him. Al-Qurtubi also records Ibn Jubayr's gloss, the disobedient, and Ibn Zayd's, the liars. Ibn Kathir adds where it ends: they perish on the Day of Resurrection and lose on their return, and he links 63:9, where whoever lets wealth and children divert him from the remembrance of Allah is among the losers.",
            "bn": "উলাইকা হুমুল ফাসিকূন, এরাই ফাসিক। কুরতুবী শব্দের মূলটা জানিয়ে দেন: ফিসক মানে বেরিয়ে যাওয়া। তাবারীর ব্যাখ্যায় ফাসিক তারা, যারা আল্লাহর আনুগত্য থেকে বেরিয়ে তাঁর নাফরমানিতে চলে যায়। কুরতুবী ইবন জুবায়রের ব্যাখ্যাও আনেন, নাফরমান, আর ইবন যায়দের ব্যাখ্যা, মিথ্যাবাদী। এর পরিণতি কী, ইবন কাসীর তা বলে দেন: কিয়ামতের দিন তারা ধ্বংস হবে, ফিরে যাওয়ার দিন হবে ক্ষতিগ্রস্ত। সঙ্গে তিনি জুড়ে দেন ৬৩:৯ আয়াত, যেখানে সম্পদ আর সন্তান যাকে আল্লাহর জিকির থেকে ভুলিয়ে রাখে, সে-ই ক্ষতিগ্রস্তদের একজন।"
          },
          {
            "en": "The verse describes a kind of person, and neither it nor the commentators fetched here attach the description to any group alive today. It describes what it describes and licenses nothing against any living person or community. Its form is a prohibition addressed to the believers themselves, do not be like them, so the only person it asks the reader to examine is the reader.",
            "bn": "আয়াতটি এক ধরনের মানুষের বর্ণনা দেয়। আয়াত নিজে কিংবা এখানে পড়া তাফসীরগুলো এই বর্ণনা আজকের কোনো দলের গায়ে লাগায় না। আয়াত যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে। আজ বেঁচে থাকা কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি সে দেয় না। আয়াতের ভঙ্গিটাও লক্ষ করার মতো: এটি মুমিনদেরই উদ্দেশে এক নিষেধ, তাদের মতো হয়ো না। তাই পাঠককে সে কেবল একজন মানুষকেই যাচাই করতে বলে, আর সে মানুষটি পাঠক নিজে।"
          }
        ]
      },
      {
        "h": {
          "en": "From the Ledger to the Names",
          "bn": "নিজের খাতা থেকে তাঁর নামে"
        },
        "p": [
          {
            "en": "59:20 declares the people of the Fire and the people of Paradise not equal, and Ibn Kathir explains that the people of Paradise are the winners because they earn safety from the punishment. 59:21 pictures this Qur'an sent down on a mountain, humbled and splitting from fear of Allah. 59:22 to 59:24 close with the names of Allah. And 59:2, near the start, told the people of insight to take heed; here the heed turns to the reader's own ledger.",
            "bn": "৫৯:২০ ঘোষণা করে, জাহান্নামবাসী আর জান্নাতবাসী সমান নয়। ইবন কাসীর ব্যাখ্যা করেন, জান্নাতবাসীরাই সফল, কারণ তারাই আযাব থেকে নিরাপত্তা লাভ করে। ৫৯:২১ ছবি আঁকে, এ কুরআন পাহাড়ের উপর নাজিল হলে আল্লাহর ভয়ে তা বিনীত হয়ে ফেটে যেত। ৫৯:২২ থেকে ৫৯:২৪ সূরাটি শেষ করে আল্লাহর নামগুলো দিয়ে। আর সূরার শুরুর দিকে ৫৯:২ দৃষ্টিসম্পন্ন মানুষদের শিক্ষা নিতে বলেছিল। এখানে এসে সেই শিক্ষা গিয়ে দাঁড়ায় প্রত্যেকের নিজের খাতায়।"
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
          "en": "After the Splitting Mountain",
          "bn": "ফেটে যাওয়া পাহাড়ের পরে"
        },
        "p": [
          {
            "en": "Huwa-llahu-lladhi la ilaha illa hu: He is Allah, other than whom there is no deity. Three verses close Surah al-Hashr, and each of them opens with Huwa-llah, He is Allah. They come straight after 59:21, where the Qur'an, had it been sent down upon a mountain, would have left it humbled and split apart from fear of Allah. At-Tabari ties the two passages together in his first sentence: He from whose fear the mountain would split, O people, is al-ma'bud, the Worshipped, to whom alone worship and godhood are due.",
            "bn": "হুওয়াল্লাহুল্লাযী লা ইলাহা ইল্লা হু: তিনিই আল্লাহ, যিনি ছাড়া কোনো ইলাহ নেই। সূরা হাশর শেষ হয় তিনটি আয়াতে, আর তিনটিরই শুরু হুওয়াল্লাহ, তিনিই আল্লাহ, এই দুই শব্দে। এগুলো আসে ৫৯:২১-এর ঠিক পরে, যেখানে বলা হয়েছে, এ কুরআন পাহাড়ের উপর নাযিল হলে পাহাড়টি আল্লাহর ভয়ে বিনীত হয়ে ফেটে চৌচির হয়ে যেত। তাবারী প্রথম বাক্যেই দুটোকে জুড়ে দেন। হে মানুষ, যাঁর ভয়ে পাহাড় ফেটে যায়, তিনিই আল-মা'বূদ, সেই উপাস্য। ইবাদত আর উলূহিয়্যাত কেবল তাঁরই প্রাপ্য।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the placement the same way: having urged concern for the Hereafter, as 59:18 does, and having asserted the greatness of the Qur'an, the surah, it says, closes with a few of Allah's attributes of perfection. As-Sa'di opens by saying that these noble verses contain many of Allah's beautiful names and lofty attributes, great in standing and wondrous in proof.",
            "bn": "মাআরিফুল কুরআনও জায়গাটিকে একইভাবে পড়ে। সূরাটি আখিরাতের চিন্তায় তাগিদ দিয়েছে, যেমন ৫৯:১৮-এ, তারপর কুরআনের মাহাত্ম্য ঘোষণা করেছে। তার ভাষায়, এবার সূরাটি শেষ হয় আল্লাহর কয়েকটি পূর্ণতার গুণ দিয়ে। সা'দী শুরুতেই বলেন, এ মহান আয়াতগুলোতে আল্লাহর অনেক সুন্দর নাম আর সমুচ্চ গুণ একত্র হয়েছে, যেগুলোর মর্যাদা বিরাট আর প্রমাণ অপূর্ব।"
          }
        ]
      },
      {
        "h": {
          "en": "None Worshipped But He",
          "bn": "তিনি ছাড়া কোনো মাবুদ নেই"
        },
        "p": [
          {
            "en": "La ilaha illa hu, there is no deity but He, comes twice, in 59:22 and again in 59:23. Ibn Kathir reads it as Allah's report about Himself: there is no lord but Him and no god for existence besides Him, and everything worshipped instead of Him is false. The Muyassar glosses the name Allah as al-ma'bud bi-haqq, worshipped by right. At-Tabari, on 59:23, says: the Worshipped, for whom alone worship is fitting.",
            "bn": "লা ইলাহা ইল্লা হু, তিনি ছাড়া কোনো ইলাহ নেই: কথাটি দুবার এসেছে, ৫৯:২২-এ এবং আবার ৫৯:২৩-এ। ইবন কাসীর একে পড়েন নিজের সম্পর্কে আল্লাহর দেওয়া খবর হিসেবে। তিনি ছাড়া কোনো রব নেই, অস্তিত্বের আর কোনো ইলাহ নেই, আর তাঁকে বাদ দিয়ে যার ইবাদত হয়, সবই বাতিল। মুয়াসসার আল্লাহ নামের ব্যাখ্যা দেয় আল-মা'বূদ বিল-হক্ক দিয়ে, অর্থাৎ ন্যায্যভাবে যাঁর ইবাদত হয়। ৫৯:২৩-এ তাবারীর ভাষা: তিনিই মাবুদ, ইবাদত কেবল তাঁরই জন্য শোভা পায়।"
          },
          {
            "en": "As-Sa'di gives the reason inside the claim. He is al-ma'luh al-ma'bud, taken as god and worshipped, because of His immense perfection, His all-embracing goodness and His general governance of things. Every other god, he says, is false and deserves not an atom's weight of worship, being poor, powerless and deficient, owning nothing for itself or for anyone else. At-Tabari records from Jabir ibn Zayd that Allah's greatest name is Allah, with these two verses as his proof, and al-Qurtubi repeats the saying.",
            "bn": "সা'দী দাবির ভেতরেই কারণটা দেখিয়ে দেন। তিনিই আল-মা'লূহ আল-মা'বূদ, যাঁকে ইলাহ মানা হয় আর যাঁর ইবাদত করা হয়। কারণ তাঁর পূর্ণতা বিশাল, তাঁর অনুগ্রহ সবকিছু ঘিরে রেখেছে, আর সবকিছুর পরিচালনা তাঁরই হাতে। সা'দীর মতে, আর যত ইলাহ, সবই বাতিল, অণু পরিমাণ ইবাদতেরও যোগ্য নয়। কেননা সেগুলো অভাবী, অক্ষম, অপূর্ণ, নিজের বা অন্যের কোনো কিছুর মালিক নয়। তাবারী জাবির ইবন যায়দ থেকে বর্ণনা করেন, আল্লাহর ইসমে আজম হলো আল্লাহ, আর প্রমাণ হিসেবে তিনি এই দুই আয়াত পড়েছিলেন। কুরতুবীও কথাটি এনেছেন।"
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
            "en": "'Alimu-l-ghaybi wash-shahada: Knower of the unseen and the witnessed. Al-Qurtubi lists readings of the pair: the secret and the open, from Ibn Abbas; what has been and what will be; the Hereafter and this world, from Sahl; and what servants neither know nor have seen, against what they know and have seen, which is al-Baghawi's gloss too. Ibn Kathir widens it to every created thing, seen by us or hidden from us, great or small, down to the tiniest ants in the darkness.",
            "bn": "আলিমুল গাইবি ওয়াশ-শাহাদাহ: অদৃশ্য ও দৃশ্যের জ্ঞাতা। কুরতুবী এই জোড়ার কয়েকটি ব্যাখ্যা পাশাপাশি রাখেন। ইবন আব্বাস (রাঃ) বলেন: গোপন ও প্রকাশ্য। কারও মতে: যা ঘটে গেছে আর যা ঘটবে। সাহল বলেন: আখিরাত ও দুনিয়া। আরেক মতে গাইব হলো যা বান্দারা জানে না, চোখেও দেখেনি, আর শাহাদাহ হলো যা তারা জানে ও দেখেছে। বাগাভীর ব্যাখ্যাও এটাই। ইবন কাসীর একে ছড়িয়ে দেন সব সৃষ্টির উপর, যা আমরা দেখি আর যা চোখের আড়ালে। বড়-ছোট কিছুই তাঁর অজানা নয়, অন্ধকারে থাকা ক্ষুদ্র পিঁপড়াও না।"
          },
          {
            "en": "Then, in the same verse, huwa-r-Rahmanu-r-Rahim. At-Tabari: Rahman of this world and the next, Rahim to the people of faith in Him; the Muyassar agrees, giving the Rahman a mercy that embraces everything. Ibn Kathir gives the sense as mercy wide enough to include all creatures, Rahman and Rahim of both worlds, citing 7:156, My mercy embraces all things; as-Sa'di says it has reached every living thing. So at-Tabari and the Muyassar tie ar-Rahim to the believers, while Ibn Kathir lets both names span both worlds.",
            "bn": "তারপর একই আয়াতে: হুওয়ার রাহমানুর রাহীম। তাবারী বলেন, তিনি দুনিয়া ও আখিরাতের রহমান, আর তাঁর প্রতি ঈমান আনা লোকদের প্রতি রহীম। মুয়াসসারও একমত, আর রহমানের রহমতকে বলে সবকিছু ঘিরে থাকা রহমত। ইবন কাসীরের ব্যাখ্যায় তাঁর রহমত এত প্রশস্ত যে সব সৃষ্টিকে ঘিরে নেয়, তিনি দুই জগতেরই রহমান ও রহীম। সাথে আনেন ৭:১৫৬: আমার রহমত সবকিছু ঘিরে আছে। সা'দী বলেন, সে রহমত প্রতিটি প্রাণীর কাছে পৌঁছেছে। ফলে তাবারী ও মুয়াসসার রহীমকে মু'মিনদের সাথে বাঁধেন, আর ইবন কাসীর দুটি নামকেই দুই জগতে বিস্তৃত করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Sovereign and Utterly Pure",
          "bn": "বাদশাহ ও মহাপবিত্র"
        },
        "p": [
          {
            "en": "Al-Malik opens the run of names in 59:23. At-Tabari: the King with no king above Him, and nothing that is not beneath Him. Ibn Kathir and the Muyassar: Owner of all things, disposing of them without resistance or hindrance. As-Sa'di draws the consequence: the upper world and the lower, with all who live in them, are His possessions, poor and governed. The eight names follow with no 'and' between them, and the tafsirs take each in turn.",
            "bn": "৫৯:২৩-এ নামের সারি শুরু হয় আল-মালিক দিয়ে। তাবারী বলেন: তিনি এমন বাদশাহ, যাঁর উপরে কোনো বাদশাহ নেই, আর সবকিছুই তাঁর নিচে। ইবন কাসীর ও মুয়াসসার বলেন: তিনি সবকিছুর মালিক, কোনো বাধা বা প্রতিরোধ ছাড়াই সেগুলো পরিচালনা করেন। সা'দী এর ফল টেনে বের করেন: উপরের জগৎ আর নিচের জগৎ, সেখানকার সবাই তাঁর মালিকানাধীন, তাঁর মুখাপেক্ষী, তাঁরই পরিচালনায় চলে। আরবি আয়াতে আটটি নাম পরপর আসে, মাঝে কোনো 'ওয়া' বা 'এবং' নেই। তাফসীরকারেরাও একেকটি নাম আলাদা করে ধরেন।"
          },
          {
            "en": "Al-Quddus has three readings in Ibn Kathir: the Pure, from Wahb ibn Munabbih; the Blessed, from Mujahid and Qatada, which at-Tabari also gives through Qatada; and He whom the noble angels hallow, from Ibn Jurayj. Al-Qurtubi: free of every deficiency and pure of every defect, and al-Baghawi's wording is close. As-Sa'di says the name joins two things: declaring Allah free of every lack, and magnifying Him in His attributes and majesty.",
            "bn": "আল-কুদ্দুসের তিনটি ব্যাখ্যা ইবন কাসীরে পাওয়া যায়। ওয়াহব ইবন মুনাব্বিহ বলেন: পবিত্র। মুজাহিদ ও কাতাদা বলেন: বরকতময়, আর তাবারীও কাতাদার সূত্রে এটি এনেছেন। ইবন জুরাইজ বলেন: সম্মানিত ফেরেশতারা যাঁর পবিত্রতা ঘোষণা করে। কুরতুবীর সংজ্ঞা: সব অপূর্ণতা থেকে মুক্ত, সব দোষ থেকে পবিত্র। বাগাভীর ভাষাও কাছাকাছি। সা'দীর মতে নামটি দুটি কথা একসাথে বহন করে: আল্লাহকে সব ঘাটতি থেকে মুক্ত ঘোষণা করা, আর তাঁর গুণাবলি ও মহিমায় তাঁর বড়ত্ব বর্ণনা করা।"
          }
        ]
      },
      {
        "h": {
          "en": "Safety Given, Truth Affirmed",
          "bn": "নিরাপত্তা দান, সত্যের সমর্থন"
        },
        "p": [
          {
            "en": "As-Salam runs two ways in the tafsirs. Ibn Kathir and al-Baghawi: free of every defect and shortcoming, Ibn Kathir adding, by His perfection in essence, attributes and acts. At-Tabari: He who keeps His creation safe from His wronging them. Al-Qurtubi, quoting Ibn al-'Arabi, gives three views: untouched by any fault; He who greets His servants with peace in Paradise, citing 36:58; and He from whose wrong creation is safe, al-Khattabi's view. The first, al-Qurtubi notes, makes it an attribute of His essence, the other two attributes of His acts.",
            "bn": "তাফসীরে আস-সালাম দুই দিকে যায়। ইবন কাসীর ও বাগাভী বলেন: সব দোষ আর ত্রুটি থেকে মুক্ত। ইবন কাসীর যোগ করেন, সত্তা, গুণাবলি ও কাজে তাঁর পূর্ণতার কারণে। তাবারীর ব্যাখ্যা: যিনি নিজের সৃষ্টিকে নিজের জুলুম থেকে নিরাপদ রাখেন। কুরতুবী ইবনুল আরাবীর উদ্ধৃতি দিয়ে তিনটি মত দেন। যাঁকে কোনো দোষ ছোঁয় না; যিনি জান্নাতে বান্দাদের সালাম দেন, যেমন ৩৬:৫৮-এ; আর যাঁর জুলুম থেকে সৃষ্টি নিরাপদ, যা খাত্তাবীর মত। কুরতুবীর মন্তব্য, প্রথম মতে এটি তাঁর সত্তার গুণ, বাকি দুই মতে তাঁর কাজের গুণ।"
          },
          {
            "en": "Al-Mu'min divides likewise. Ibn Abbas, through ad-Dahhak in Ibn Kathir: He secured His creation against His wronging them; in al-Baghawi he adds that He secured believers from His punishment, from aman, the opposite of fear, as in 106:4. Ma'arif al-Qur'an follows Ibn Abbas. Others read it as confirming: Qatada, He affirmed His word as true; Ibn Zayd, He confirmed His believing servants in their faith; ad-Dahhak, in at-Tabari, the Confirmer. As-Sa'di and the Muyassar: He confirms His messengers by clear signs. Mujahid, in al-Qurtubi: He declared His own oneness, as in 3:18.",
            "bn": "আল-মু'মিনও একইভাবে দুই ভাগে যায়। ইবন কাসীরে দাহহাকের সূত্রে ইবন আব্বাস (রাঃ) বলেন: তিনি সৃষ্টিকে নিরাপত্তা দিয়েছেন যে তাদের উপর জুলুম করবেন না। বাগাভীতে তাঁর কথায় এটুকুও আছে: যারা ঈমান এনেছে, তাদের তিনি আযাব থেকেও নিরাপদ করেছেন। শব্দটি 'আমান' থেকে, যা ভয়ের বিপরীত, যেমন ১০৬:৪-এ। মাআরিফুল কুরআনও ইবন আব্বাসকে অনুসরণ করে। অন্যরা পড়েন সত্যায়নের অর্থে। কাতাদা: তিনি নিজের কথাকে সত্য বলে ঘোষণা করেছেন। ইবন যায়দ: তিনি মু'মিন বান্দাদের ঈমানকে সত্য বলে স্বীকার করেছেন। তাবারীতে দাহহাক: সত্যায়নকারী। সা'দী ও মুয়াসসার: তিনি স্পষ্ট নিদর্শন দিয়ে রাসূলদের সত্যায়ন করেন। কুরতুবীতে মুজাহিদ: তিনি নিজেই নিজের একত্ব ঘোষণা করেছেন, যেমন ৩:১৮-এ।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness Over Every Deed",
          "bn": "প্রতিটি আমলের সাক্ষী"
        },
        "p": [
          {
            "en": "Al-Muhaymin is where at-Tabari says outright that the interpreters differed. Some said the Witness: Ibn Abbas, Mujahid and Qatada, who adds that Allah sent down a Book and bore witness over it. Others said the Trustworthy: ad-Dahhak, and Ibn Abbas on another occasion. Others said the Confirmer: Ibn Zayd, reciting 5:48, where the Qur'an is muhayminan over the scriptures before it. At-Tabari says he gave the soundest of these views in Surah al-Ma'ida, and does not repeat it here.",
            "bn": "আল-মুহাইমিনে এসে তাবারী সরাসরি বলেন, ব্যাখ্যাকারেরা এখানে মতভেদ করেছেন। কেউ বলেছেন: শাহীদ, সাক্ষী। এ মত ইবন আব্বাস (রাঃ), মুজাহিদ ও কাতাদার। কাতাদা যোগ করেন, আল্লাহ কিতাব নাযিল করেছেন এবং তার উপর সাক্ষী থেকেছেন। কেউ বলেছেন: আমীন, বিশ্বস্ত। এ মত দাহহাকের, আর আরেকবার ইবন আব্বাসেরও। কেউ বলেছেন: মুসাদ্দিক, সত্যায়নকারী। এ মত ইবন যায়দের, যিনি ৫:৪৮ পড়ে শোনান, যেখানে কুরআন আগের কিতাবগুলোর উপর মুহাইমিন। তাবারী জানান, কোন মতটি সবচেয়ে সঠিক তা তিনি সূরা মায়িদায় বুঝিয়েছেন, এখানে আর পুনরাবৃত্তি করেননি।"
          },
          {
            "en": "Al-Baghawi widens the field. The Witness over His servants' deeds is the view of Ibn Abbas, Mujahid, Qatada, as-Suddi and Muqatil, from haymana, to watch over a thing. It is also said the word was originally mu'aymin, its hamza turned into ha', so that it means al-Mu'min. Al-Hasan: the Trustworthy. Al-Khalil: the guarding Watcher. Sa'id ibn al-Musayyab and ad-Dahhak: the Judge. Ibn Kaysan: a name of Allah in the scriptures, whose meaning Allah knows best. Ma'arif al-Qur'an renders it Guardian.",
            "bn": "বাগাভী আলোচনার পরিসর আরও বাড়ান। বান্দাদের আমলের সাক্ষী, এ মত ইবন আব্বাস, মুজাহিদ, কাতাদা, সুদ্দী ও মুকাতিলের। শব্দটি এসেছে 'হাইমানা' থেকে, অর্থাৎ কোনো কিছুর উপর নজর রাখা। আরেক মতে মূল শব্দ ছিল 'মুআইমিন', হামযা বদলে 'হা' হয়েছে, তাই অর্থ আল-মু'মিন। হাসান বলেন: বিশ্বস্ত। খলীল বলেন: নজরদার রক্ষক। সাঈদ ইবনুল মুসাইয়িব ও দাহহাক বলেন: বিচারক। ইবন কাইসানের মতে এটি আগের কিতাবগুলোতে আল্লাহর একটি নাম, এর অর্থ আল্লাহই ভালো জানেন। মাআরিফুল কুরআন অর্থ করে: অভিভাবক।"
          },
          {
            "en": "Al-'Aziz, at-Tabari reads after Qatada as severe in His retribution when He takes retribution from His enemies. Ibn Kathir: His might has overpowered everything, so that His majesty cannot be reached. As-Sa'di: He is neither overcome nor withstood, and everything has submitted to Him. Ibn Kathir then hangs the next two names on this: because of His might, greatness, power and grandeur, the verse continues, al-Jabbar al-Mutakabbir.",
            "bn": "পরের নাম আল-আযীয। তাবারী কাতাদার অনুসরণে একে পড়েন: শত্রুদের থেকে প্রতিশোধ নিলে তিনি প্রতিশোধে কঠোর। ইবন কাসীরের মতে: তাঁর পরাক্রম সবকিছুকে পরাভূত করেছে, ফলে তাঁর মহিমার নাগাল কেউ পায় না। সা'দীর মতে: কেউ তাঁকে পরাজিত বা প্রতিহত করতে পারে না, আর সবকিছু তাঁর কাছে নত। ইবন কাসীর পরের দুই নামকে এর সাথেই গাঁথেন। তাঁর পরাক্রম, মহত্ত্ব, প্রতাপ আর গৌরবের কারণেই আয়াত বলে চলে: আল-জাব্বার আল-মুতাকাব্বির।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Jabbar, Al-Mutakabbir",
          "bn": "আল-জাব্বার, আল-মুতাকাব্বির"
        },
        "p": [
          {
            "en": "Al-Jabbar draws the widest spread. Ibn Abbas, in al-Qurtubi and al-Baghawi: al-'Azim, the Mighty, Allah's jabarut being His greatness; al-Qurtubi compares a jabbara palm, grown beyond the reach of the hand. Others derive it from jabr, mending, as a broken bone is set: He enriches the poor and mends the broken, a sense as-Sa'di and Ma'arif al-Qur'an also give. At-Tabari: He sets right His creation's affairs. Qatada: He compelled His creation to whatever He wills, and al-Farra', as-Suddi and Muqatil read compulsion too.",
            "bn": "আল-জাব্বারে মতের বিস্তার সবচেয়ে বেশি। কুরতুবী ও বাগাভীতে ইবন আব্বাস (রাঃ) বলেন: আল-আযীম, মহান, আর আল্লাহর জাবারূত মানে তাঁর মহত্ত্ব। কুরতুবী তুলনা টানেন 'জাব্বারা' খেজুর গাছের সাথে, যা এত উঁচু যে হাত নাগাল পায় না। অন্যরা শব্দটি নেন 'জাবর' থেকে, অর্থাৎ জোড়া লাগানো। ভাঙা হাড় বসিয়ে দিলে যেমন জুড়ে যায়, তেমনি তিনি অভাবীকে অভাবমুক্ত করেন, ভাঙাকে জোড়া দেন। সা'দী ও মাআরিফুল কুরআনও এ অর্থ দেন। তাবারী বলেন: তিনি সৃষ্টির সব বিষয় ঠিক করে দেন। কাতাদা বলেন: তিনি সৃষ্টিকে নিজের ইচ্ছার উপর বাধ্য করেছেন। ফাররা, সুদ্দী ও মুকাতিলও বাধ্য করার অর্থই নেন।"
          },
          {
            "en": "Al-Mutakabbir, at-Tabari reports from Qatada, means exalted above every evil, and Ibn Kathir and al-Baghawi agree. Al-Qurtubi adds: great by His lordship, with nothing like Him; above whatever does not befit Him; the Most High; or simply al-Kabir, the Great. Kibriya', he says, is praise in Allah's attributes and blame in a creature's, and Ma'arif al-Qur'an agrees: perfection in Allah, a false claim in anyone else. As-Sa'di: grandeur and greatness are His, and He is far above every fault, injustice and oppression.",
            "bn": "আল-মুতাকাব্বির সম্পর্কে তাবারী কাতাদা থেকে বর্ণনা করেন: তিনি সব মন্দের ঊর্ধ্বে। ইবন কাসীর ও বাগাভীও তা-ই বলেন। কুরতুবী আরও কয়েকটি মত দেন: রুবূবিয়্যাতে মহান, তাঁর মতো কিছু নেই; তাঁর অযোগ্য সবকিছুর ঊর্ধ্বে; সর্বোচ্চ; কিংবা কেবল আল-কাবীর, মহান। তাঁর কথায়, কিবরিয়া আল্লাহর গুণে প্রশংসা, আর সৃষ্টির গুণে নিন্দা। মাআরিফুল কুরআনও তাই বলে: আল্লাহর বেলায় এটি পূর্ণতা, অন্য কারও বেলায় মিথ্যা দাবি। সা'দীর মতে: গৌরব ও মহত্ত্ব তাঁরই, আর তিনি সব দোষ, জুলুম ও অবিচার থেকে বহু ঊর্ধ্বে।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi both attach here, from the Sahih, a hadith in which Allah speaks, in differing wordings. Muslim's (2620), from Abu Sa'id al-Khudri and Abu Hurayrah (RA), that the Messenger of Allah ﷺ said, reads in full: Might is His lower garment and grandeur is His cloak; whoever contends with Me, I will punish him. The verse then closes: subhana-llahi 'amma yushrikun. At-Tabari: declaring Allah pure and clear of the associating of those who associate partners with Him. As-Sa'di: a general declaration that He is above all that they ascribe to Him.",
            "bn": "ইবন কাসীর ও কুরতুবী দুজনেই এখানে সহীহ থেকে একটি হাদীস যুক্ত করেন, যাতে আল্লাহর বাণী আছে, যদিও দুজনের শব্দ ভিন্ন। মুসলিমের (২৬২০) শব্দে, আবু সাঈদ খুদরী ও আবু হুরায়রা (রাঃ) থেকে, রাসূলুল্লাহ ﷺ বলেছেন, পুরো বর্ণনা: ইযযত তাঁর লুঙ্গি আর কিবরিয়া তাঁর চাদর; যে আমার সাথে বিরোধে নামবে, আমি তাকে শাস্তি দেব। তারপর আয়াত শেষ হয়: সুবহানাল্লাহি আম্মা ইউশরিকূন। তাবারী বলেন: মুশরিকদের শিরক থেকে আল্লাহকে পবিত্র ও মুক্ত ঘোষণা। সা'দী বলেন: শরীককারীরা তাঁর প্রতি যা কিছু আরোপ করে, তার সবকিছু থেকে এটি তাঁর সাধারণ পবিত্রতা ঘোষণা।"
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
            "en": "59:24 turns to creation: al-Khaliq al-Bari' al-Musawwir. Ibn Kathir separates the three. Khalq is taqdir, measuring out; bar' is fary, carrying out what was measured and bringing it into existence, and not everyone who plans and arranges a thing is able to carry it out and bring it into being, except Allah. He cites a poet praising a man: you carry out what you have measured, while some people measure and then do not carry it out. Al-Qurtubi quotes the same line from Zuhayr. For al-Musawwir, Ibn Kathir cites 82:8, in whatever form He willed He assembled you.",
            "bn": "৫৯:২৪ ফেরে সৃষ্টির দিকে: আল-খালিক, আল-বারি, আল-মুসাওয়ির। ইবন কাসীর তিনটিকে আলাদা করেন। খালক মানে তাকদীর, পরিমাপ ঠিক করা। বার মানে ফারী, অর্থাৎ যা মাপা হয়েছে তা কার্যকর করে অস্তিত্বে আনা। তাঁর কথায়, যে-ই কোনো কিছুর পরিকল্পনা ও বিন্যাস করে, সে-ই তা কার্যকর করে অস্তিত্বে আনতে পারে না, আল্লাহ ছাড়া। এর সমর্থনে তিনি এক কবির চরণ আনেন, যেখানে কবি একজনের প্রশংসা করছেন: তুমি যা মাপো তা কার্যকরও করো, আর কিছু লোক মাপে কিন্তু কার্যকর করতে পারে না। কুরতুবীও যুহাইরের নামে একই চরণ আনেন। আল-মুসাওয়িরের জন্য ইবন কাসীর আনেন ৮২:৮: যে আকৃতিতে চেয়েছেন, সে আকৃতিতে তিনি তোমাকে গঠন করেছেন।"
          },
          {
            "en": "Al-Qurtubi insists on the order. Al-Khaliq here is He who measures out; al-Bari', He who originates and invents; al-Musawwir, He who forms the shapes and composes them in varied figures, so forming follows the other two. Some, he says, made khalq mean forming, and it is not so: measuring comes first, forming last, bringing forth between them. He illustrates with the womb, where a person is made a clinging clot, then a lump of flesh, then a form by which he is known. Al-Baghawi puts the sequence in a line: first khalq, then bar', then taswir.",
            "bn": "কুরতুবী ক্রমটির উপর জোর দেন। এখানে আল-খালিক মানে যিনি পরিমাপ ঠিক করেন, আল-বারি মানে যিনি সূচনা ও উদ্ভাবন করেন, আর আল-মুসাওয়ির মানে যিনি আকৃতি গড়েন, ভিন্ন ভিন্ন গড়নে সাজান। তাই আকৃতি দেওয়া আসে বাকি দুটির পরে। তিনি বলেন, কেউ কেউ খালককে আকৃতি দেওয়ার অর্থে নিয়েছেন, কিন্তু তা ঠিক নয়। পরিমাপ আগে, আকৃতি শেষে, আর অস্তিত্বে আনা মাঝখানে। উদাহরণ দেন মাতৃগর্ভ থেকে: মানুষ সেখানে প্রথমে আলাকা, তারপর মুদগা, তারপর এমন আকৃতি পায় যা দিয়ে তাকে চেনা যায়। বাগাভী এক লাইনে ক্রমটা বলেন: প্রথমে খালক, তারপর বার, তারপর তাসবীর।"
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
            "en": "Lahu-l-asma'u-l-husna: to Him belong the best names. At-Tabari says they are the very names Allah gave Himself in these two verses. As-Sa'di reads more widely: names beyond counting, which none but Allah can count or know, and each of them husna, an attribute of perfection with no lack in any respect. Part of their beauty, he says, is that Allah loves them, loves whoever loves them, and loves His servants to call on Him and ask by them. Ibn Kathir refers to his comment on 7:180 and attaches the hadith of the two Sahihs from Abu Hurayrah (RA).",
            "bn": "লাহুল আসমাউল হুসনা: সুন্দরতম নামসমূহ তাঁরই। তাবারী বলেন, এগুলো সেই নাম, যা দিয়ে আল্লাহ এই দুই আয়াতে নিজেকে অভিহিত করেছেন। সা'দী অর্থটা আরও প্রশস্ত করেন: নামগুলো অগণিত, আল্লাহ ছাড়া কেউ সেগুলো গুনে শেষ করতে বা জানতে পারে না। তবু প্রতিটিই হুসনা, অর্থাৎ পূর্ণতার গুণ, কোনো দিক থেকে কোনো ঘাটতি নেই। তাঁর কথায়, এগুলোর সৌন্দর্যের একটি দিক হলো, আল্লাহ এগুলো ভালোবাসেন, যে এগুলো ভালোবাসে তাকেও ভালোবাসেন, আর পছন্দ করেন বান্দারা এগুলো দিয়ে তাঁকে ডাকুক ও তাঁর কাছে চাক। ইবন কাসীর ৭:১৮০-এর আলোচনার দিকে ইশারা করেন এবং আবু হুরায়রা (রাঃ) থেকে দুই সহীহ গ্রন্থের হাদীসটি আনেন।"
          },
          {
            "en": "In al-Bukhari's wording (2736), the Messenger of Allah ﷺ said, in full: Allah has ninety-nine names, one hundred less one; whoever enumerates them will enter Paradise. Ibn Kathir notes that at-Tirmidhi's version adds a list of names, opening with those of these verses in their order; he gives no grading for the list here. Then yusabbihu lahu ma fis-samawati wal-ard: whatever is in the heavens and earth glorifies Him. Ibn Kathir pairs it with 17:44, and at-Tabari adds that all of it prostrates to Him, willingly and unwillingly. Ma'arif al-Qur'an allows the glorifying to be unspoken or real, though unheard.",
            "bn": "বুখারীর (২৭৩৬) শব্দে রাসূলুল্লাহ ﷺ বলেছেন, পুরো বর্ণনা: আল্লাহর নিরানব্বইটি নাম আছে, একটি কম একশো; যে এগুলো আয়ত্ত করবে সে জান্নাতে প্রবেশ করবে। ইবন কাসীর জানান, তিরমিযীর বর্ণনায় এর সাথে নামের একটি তালিকা আছে, যার শুরু এই আয়াতগুলোর নাম দিয়েই, একই ক্রমে। সে তালিকার মান তিনি এখানে উল্লেখ করেননি। তারপর ইউসাব্বিহু লাহু মা ফিস-সামাওয়াতি ওয়াল-আরদ: আসমান ও যমীনে যা আছে সবই তাঁর তাসবীহ করে। ইবন কাসীর একে মেলান ১৭:৪৪-এর সাথে। তাবারী যোগ করেন, সবকিছু তাঁকে সিজদাও করে, ইচ্ছায় বা অনিচ্ছায়। মাআরিফুল কুরআনের মতে এ তাসবীহ নীরব ভাষাতেও হতে পারে, আবার সত্যিকারের তাসবীহও হতে পারে, যা মানুষের কান শোনে না।"
          },
          {
            "en": "On reciting these verses, Ibn Kathir and al-Baghawi attach a report from Ma'qil ibn Yasar (RA). At-Tirmidhi's wording (2922), in full: Whoever says three times when he rises in the morning, I seek refuge with Allah, the All-Hearing, the All-Knowing, from Satan the accursed, and recites three verses from the end of Surah al-Hashr, Allah appoints seventy thousand angels to send blessings on him until evening; if he dies that day, he dies a martyr; and whoever says it in the evening holds the same rank. At-Tirmidhi graded it gharib: we know it only from this route.",
            "bn": "এই আয়াতগুলো পাঠ সম্পর্কে ইবন কাসীর ও বাগাভী মা'কিল ইবন ইয়াসার (রাঃ) থেকে একটি বর্ণনা যুক্ত করেন। তিরমিযীর (২৯২২) শব্দে, পুরো বর্ণনা: যে ব্যক্তি সকালে উঠে তিনবার বলে, আউযু বিল্লাহিস সামীইল আলীমি মিনাশ শাইতানির রাজীম, এবং সূরা হাশরের শেষ তিন আয়াত পড়ে, আল্লাহ তার জন্য সত্তর হাজার ফেরেশতা নিযুক্ত করেন, যারা সন্ধ্যা পর্যন্ত তার জন্য দোয়া করতে থাকে। সেদিন মারা গেলে সে শহীদ হয়ে মারা যায়। আর যে সন্ধ্যায় তা বলে, তার মর্যাদাও একই। তিরমিযী একে গরীব বলেছেন: এই সূত্র ছাড়া অন্য কোনোভাবে আমরা এটি জানি না।"
          }
        ]
      }
    ]
  }
});
