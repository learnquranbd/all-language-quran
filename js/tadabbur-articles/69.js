/**
 * Tadabbur long-form articles — surah 69.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "69:5-6": {
    "sections": [
      {
        "h": {
          "en": "Matched Sentences, Two Peoples",
          "bn": "দুই জাতি, জোড়া বাক্য"
        },
        "p": [
          {
            "en": "The pair grows out of the surah's opening. Al-Haqqa, the Inevitable Reality, is named and questioned, and then 69:4 says: Thamud and 'Ad denied al-qari'a, the Striking Calamity. Ma'arif al-Qur'an counts al-qari'a among this surah's names for the Day of Judgment and explains it as a rumbling that will put terror into people's hearts. Ibn Kathir heads the passage as the mention of the destruction of the nations that denied the Resurrection. So 69:5 and 69:6 do not open a new story. They answer 69:4, telling what became of each of the two deniers.",
            "bn": "সূরার শুরুতে আল-হাক্কাহর নাম আসে, সেই অবধারিত সত্য, আর তা নিয়ে প্রশ্ন তোলা হয়। তারপর ৬৯:৪ আয়াত বলে: সামূদ ও ‘আদ আল-কারিআকে মিথ্যা বলেছিল, সেই আঘাত হানা মহাবিপদকে। মাআরিফুল কুরআন আল-কারিআকে এ সূরায় আসা কিয়ামতের নামগুলোর মধ্যে গোনে। সেখানে এর ব্যাখ্যা গুড়গুড় আওয়াজ, যা মানুষের অন্তরে আতঙ্ক ঢেলে দেবে। ইবন কাসীর এ অংশের শিরোনাম দেন পুনরুত্থান অস্বীকারকারী জাতিগুলোর ধ্বংসের বিবরণ। কাজেই ৬৯:৫ ও ৬৯:৬ নতুন কোনো কাহিনি শুরু করে না। এ আয়াত দুটি ৬৯:৪-এর জবাব। দুই অস্বীকারকারী জাতির প্রত্যেকের কী হলো, তা-ই এখানে বলা।"
          },
          {
            "en": "The verses are built as a matched pair. Fa-amma Thamudu fa-uhliku bi-t-taghiya: as for Thamud, they were destroyed by the taghiya. Wa-amma 'Adun fa-uhliku bi-rihin sarsarin 'atiya: and as for 'Ad, they were destroyed by a wind, sarsar and 'atiya. Each opens with amma, names the people, and uses the same passive verb, uhliku, they were destroyed. At-Tabari names each by its prophet: Thamud, the people of Salih (AS), and 'Ad, the people of Hud (AS). The next verse, 69:7, says how long the wind was set upon them; it has its own place, and this article stays with these two sentences.",
            "bn": "আয়াত দুটি জোড়া মিলিয়ে গড়া। ফাআম্মা সামূদু ফাউহলিকূ বিত-তাগিয়াহ: আর সামূদ, তাদের ধ্বংস করা হলো তাগিয়া দিয়ে। ওয়াআম্মা ‘আদুন ফাউহলিকূ বিরীহিন সারসারিন ‘আতিয়াহ: আর ‘আদ, তাদের ধ্বংস করা হলো এমন বাতাসে, যা সারসার ও ‘আতিয়া। দুটি বাক্যই শুরু হয় আম্মা দিয়ে, তারপর জাতির নাম, তারপর একই কর্মবাচ্য ক্রিয়া উহলিকূ, তাদের ধ্বংস করা হলো। তাবারী প্রত্যেক জাতিকে চেনান তাদের নবীর নামে: সামূদ সালিহ (আঃ)-এর কওম, ‘আদ হূদ (আঃ)-এর কওম। পরের আয়াত ৬৯:৭ বলে বাতাসটা কতদিন তাদের উপর চাপিয়ে রাখা হয়েছিল। সেটার আলোচনা তার নিজের জায়গায়। এ লেখা এই দুটি বাক্যেই থাকবে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was the Taghiya?",
          "bn": "তাগিয়া আসলে কী ছিল"
        },
        "p": [
          {
            "en": "At-Tabari reports that the people of interpretation differed over the taghiya by which Allah destroyed Thamud. Some said it was their own tughyan, their transgression and disbelief in Allah. Mujahid, through Ibn Abi Najih, said: by the sins. Ibn Zayd recited kadhdhabat Thamudu bi-taghwaha, Thamud denied through their transgression, which is 91:11, and said this taghiya is their transgression and their disbelief in Allah's signs, the tughyan by which they overstepped into disobeying Allah and opposing His Book. Ibn Kathir adds ar-Rabi' ibn Anas to those who read the word as transgression.",
            "bn": "তাবারী জানান, যে তাগিয়া দিয়ে আল্লাহ সামূদকে ধ্বংস করেছিলেন, তার অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। কেউ বলেছেন, তা ছিল তাদের নিজেদেরই তুগইয়ান, আল্লাহর সঙ্গে তাদের সীমালঙ্ঘন আর কুফরি। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেছেন: গুনাহের কারণে। ইবন যায়দ তিলাওয়াত করেছেন কাযযাবাত সামূদু বিতাগওয়াহা, সামূদ তাদের সীমালঙ্ঘনের কারণে অস্বীকার করেছিল, যা ৯১:১১ আয়াত। তাঁর ব্যাখ্যায় এ তাগিয়া তাদের সীমালঙ্ঘন আর আল্লাহর আয়াতের প্রতি কুফরি। এই সীমা ডিঙিয়েই তারা আল্লাহর নাফরমানিতে আর তাঁর কিতাবের বিরোধিতায় নেমেছিল। ইবন কাসীর এ মতের পক্ষে রাবী ইবন আনাসের নামও যোগ করেন।"
          },
          {
            "en": "Others said it was a cry. Qatada, through two chains in at-Tabari, said that Allah sent a cry upon them, and in the second chain a single cry, that left them lifeless. Al-Qurtubi gives two further voices: al-Kalbi said by the thunderbolt, as-sa'iqa, and al-Hasan said by their transgression. Ibn Kathir reports from as-Suddi that the taghiya means the slayer of the she-camel. Al-Qurtubi reports the same reading but gives it to Ibn Zayd, while at-Tabari and Ibn Kathir both have Ibn Zayd reading it as transgression. The attribution is left exactly as the sources leave it.",
            "bn": "অন্যরা বলেছেন, তা ছিল এক গর্জন। তাবারীতে দুটি সূত্রে কাতাদা বলেছেন, আল্লাহ তাদের উপর একটি গর্জন পাঠালেন, যা তাদের নিথর করে দিল। দ্বিতীয় সূত্রে আছে: একটিমাত্র গর্জন। কুরতুবী আরও দুজনের কথা আনেন। কালবী বলেছেন বজ্রপাত, আস-সাইকা। হাসান বলেছেন তাদের সীমালঙ্ঘন। ইবন কাসীর সুদ্দী থেকে বর্ণনা করেন, তাগিয়া মানে উটনীর হত্যাকারী। কুরতুবী একই মত বর্ণনা করেন, কিন্তু তা দেন ইবন যায়দের নামে। অথচ তাবারী আর ইবন কাসীর দুজনের বর্ণনাতেই ইবন যায়দের মত সীমালঙ্ঘন। কার মত কোনটি, তা সূত্রগুলো যেভাবে রেখেছে, এখানেও সেভাবেই থাকল।"
          },
          {
            "en": "Al-Qurtubi sets beside Qatada's reading the words found at 54:31 (the number is this article's own pointer): Indeed, We sent upon them one shriek, and they became like the dry twig fragments of an animal pen. Ibn Kathir's own gloss, before he lists the voices, is the cry, joined with a quake. Al-Muyassar, as-Sa'di and Ma'arif al-Qur'an likewise take the taghiya as the cry, while al-Baghawi puts the transgression reading first and the cry second. The difference is therefore real and old, and the commentators who choose a side give reasons for it, which the next section sets out.",
            "bn": "কাতাদার মতের পাশে কুরতুবী যে বাক্যটি রাখেন, তা ৫৪:৩১ আয়াতে পাওয়া যায় (আয়াত নম্বরটি এই লেখার নিজের ইঙ্গিত): আমি তাদের উপর পাঠিয়েছিলাম একটিমাত্র প্রচণ্ড ধ্বনি, ফলে তারা খোঁয়াড়ের ভেঙে যাওয়া শুকনো ডালপালার মতো হয়ে গেল। মতগুলো সাজানোর আগে ইবন কাসীর নিজে যে ব্যাখ্যা দেন, তা গর্জন, সঙ্গে ভূমিকম্প। মুয়াসসার, সা'দী আর মাআরিফুল কুরআনও তাগিয়া বলতে গর্জনই বোঝেন। বাগাভী অবশ্য আগে আনেন সীমালঙ্ঘনের মত, গর্জনের মত আনেন পরে। মতভেদটা তাই সত্যিকারের, আর পুরোনোও। যাঁরা কোনো এক দিকে যান, তাঁরা কারণ দেখিয়েই যান। পরের অংশে সেই কারণগুলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Why at-Tabari Chose the Cry",
          "bn": "তাবারী কেন গর্জন বেছে নিলেন"
        },
        "p": [
          {
            "en": "At-Tabari says which of the two sayings he holds nearer the mark: they were destroyed by the overstepping cry, as-sayha at-taghiya. Allah, he says, tells of Thamud the thing by which He destroyed them, just as He tells of 'Ad the thing by which He destroyed them. Under 69:6 he presses the point. Had the report about Thamud named the cause for which they were destroyed, the report about 'Ad would have done the same, since both stand in one context. Following it with the news that 'Ad perished by the wind is, he says, clear proof of his reading.",
            "bn": "দুটি মতের মধ্যে কোনটি তাঁর কাছে সঠিকের বেশি কাছে, তাবারী তা স্পষ্ট বলেন: তাদের ধ্বংস করা হয়েছিল সীমা ছাড়ানো গর্জনে, আস-সাইহা আত-তাগিয়ায়। তিনি বলেন, ‘আদকে আল্লাহ যা দিয়ে ধ্বংস করেছেন, তার খবর যেমন দিয়েছেন, সামূদকে যা দিয়ে ধ্বংস করেছেন, তার খবরও তেমনি দিয়েছেন। ৬৯:৬ আয়াতের আলোচনায় তিনি কথাটা আরও জোর দিয়ে বলেন। সামূদের খবরে যদি ধ্বংসের কারণ বলা হতো, তবে ‘আদের খবরেও কারণই বলা হতো, কেননা দুটি কথা একই প্রসঙ্গে। তার ঠিক পরেই ‘আদের ধ্বংস বাতাসে হয়েছিল বলে জানানো, তাঁর ভাষায়, এ ব্যাখ্যারই স্পষ্ট প্রমাণ।"
          },
          {
            "en": "Ibn Kathir calls it the cry that silenced them and the quake that stilled them, askatat-hum and askanat-hum, two Arabic verbs a single letter apart. As-Sa'di calls it the great and dreadful cry from which their hearts split and their souls went out, so that they became dead and nothing could be seen but their dwellings and their bodies. Ma'arif al-Qur'an describes the sound of a thunderbolt joined with a flash of lightning that rent their hearts. Al-Muyassar keeps to a few words: the mighty cry that passed the bound in its force.",
            "bn": "গর্জনের পক্ষের ব্যাখ্যাকারেরা তার বর্ণনাও দেন। ইবন কাসীর বলেন, সেই গর্জন যা তাদের চুপ করিয়ে দিল, আর সেই কম্পন যা তাদের থামিয়ে দিল: আসকাতাতহুম আর আসকানাতহুম। আরবিতে ক্রিয়া দুটির তফাত মাত্র একটি অক্ষরে। সা'দীর ভাষায়, সে ছিল বিরাট, ভয়ংকর গর্জন। তাতে তাদের অন্তর ফেটে গেল, প্রাণ বেরিয়ে গেল, তারা মরে পড়ে রইল। তাদের ঘরবাড়ি আর লাশ ছাড়া আর কিছুই দেখা যাচ্ছিল না। মাআরিফুল কুরআনে আছে বজ্রের আওয়াজ আর বিদ্যুতের ঝলক একসঙ্গে, যা তাদের হৃদয় চিরে দিল। মুয়াসসার অল্প কথায় থামেন: প্রচণ্ড সেই গর্জন, যা তীব্রতায় সীমা ছাড়িয়ে গিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Deed, Verbal Noun, or Description",
          "bn": "কাজ, মাসদার, নাকি বিশেষণ"
        },
        "p": [
          {
            "en": "The commentators also ask what kind of word taghiya is. Al-Qurtubi says the verse leaves a word unstated: by the taghiya deed, al-fa'la at-taghiya. Al-Baghawi offers two analyses. It is said to be a verbal noun, and it is said to be an adjective, by their overstepping deed, and he notes that this is the sense of Mujahid's saying. On al-Hasan's reading, al-Qurtubi explains, the word is a verbal noun like al-kadhiba, al-'aqiba and al-'afiya, so the meaning becomes: they were destroyed by their own transgression and disbelief.",
            "bn": "তাফসীরকারেরা এ প্রশ্নও তোলেন: তাগিয়া কী ধরনের শব্দ? কুরতুবী বলেন, আয়াতে একটি শব্দ উহ্য আছে: আল-ফা'লা আত-তাগিয়া, সীমা ছাড়ানো কাজ। বাগাভী দুটি বিশ্লেষণ দেন। বলা হয়েছে এটি মাসদার, অর্থাৎ ক্রিয়ামূল। আবার বলা হয়েছে বিশেষণ, মানে তাদের সীমা ছাড়ানো কাজের কারণে। তাঁর মতে মুজাহিদের কথার অর্থ এটাই। কুরতুবী ব্যাখ্যা করেন, হাসানের মত অনুযায়ী শব্দটি আল-কাযিবা, আল-‘আকিবা, আল-‘আফিয়ার মতো মাসদার। তখন অর্থ দাঁড়ায়: তারা ধ্বংস হলো নিজেদের সীমালঙ্ঘন আর কুফরির কারণে।"
          },
          {
            "en": "For the reading that names the slayer, al-Qurtubi explains the form another way. The man is called taghiya as people say of someone that he is a rawiya of poetry, or a dahiya, an 'allama or a nassaba. On the root itself, al-Qurtubi and Ma'arif al-Qur'an agree: tughyan is passing the limit. Al-Qurtubi brings 69:11 as witness, inna lamma tagha al-ma', when the water overflowed, meaning it passed its bound. Ma'arif al-Qur'an applies the root to the punishment: a sound beyond any sound of this world, which the human heart could not bear.",
            "bn": "যে মত উটনীর হত্যাকারীর দিকে ইশারা করে, তার বেলায় কুরতুবী শব্দের গড়ন অন্যভাবে ব্যাখ্যা করেন। লোকটিকে তাগিয়া বলা হয়েছে ঠিক যেভাবে কাউকে বলা হয় রাবিয়াতুশ শি'র, কিংবা দাহিয়া, ‘আল্লামা বা নাস্সাবা। আর ধাতুর অর্থে কুরতুবী ও মাআরিফুল কুরআন একমত: তুগইয়ান মানে সীমা পেরিয়ে যাওয়া। কুরতুবী সাক্ষী হিসেবে আনেন ৬৯:১১ আয়াত, ইন্না লাম্মা তাগাল মা', যখন পানি কূল ছাপিয়ে গেল, অর্থাৎ নিজের সীমা ছাড়াল। মাআরিফুল কুরআন এ ধাতুকে শাস্তির উপর প্রয়োগ করে: এমন আওয়াজ, যা দুনিয়ার যেকোনো আওয়াজকে ছাড়িয়ে যায়, মানুষের অন্তর যা সইতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "One Hand, a Whole People",
          "bn": "একজনের হাত, গোটা কওমের দায়"
        },
        "p": [
          {
            "en": "The slayer's reading carries a hard sentence. On it, al-Qurtubi says, they were destroyed by what their taghiya dared to do in hamstringing the she-camel. He was one man, and yet all of them perished, because they were pleased with his deed and backed him. That is a single reading among several, and at-Tabari, whose choice is the cry, does not take it. But it raises a question the reader can hold without settling the dispute: how far does approving a wrong, or standing behind the person who commits it, draw someone into that wrong?",
            "bn": "উটনীর হত্যাকারীর মতের ভেতরে একটা কঠিন কথা আছে। কুরতুবী বলেন, এ মত অনুযায়ী তারা ধ্বংস হয়েছিল তাদের সেই সীমালঙ্ঘনকারীর দুঃসাহসের কারণে, যে উটনীর পা কেটেছিল। সে ছিল একজনমাত্র মানুষ, তবু ধ্বংস হলো সবাই। কারণ তারা তার কাজে খুশি ছিল আর তার পাশে দাঁড়িয়েছিল। এটা অনেক মতের মধ্যে একটি মাত্র মত। তাবারী গর্জনের মত বেছে নিয়েছেন, এটা নেননি। তবু মতভেদের মীমাংসা না করেও পাঠক একটা প্রশ্ন নিজের কাছে রাখতে পারেন। কোনো অন্যায়ে সায় দেওয়া, কিংবা অন্যায়কারীর পেছনে দাঁড়ানো, মানুষকে সেই অন্যায়ের কতটা ভেতরে টেনে নেয়?"
          },
          {
            "en": "The other readings carry their own weight. If the taghiya is their transgression, as Mujahid, Ibn Zayd and al-Hasan held, then the verse names the sin itself as the thing that destroyed them. If it is the cry, as Qatada held and at-Tabari chose, then Ma'arif al-Qur'an draws the link out: when Thamud exceeded the limit in denying the Day of Judgment, they were destroyed by the dreadful cry which exceeded all limits. On every reading the root is the same, t-gh-y, and the reader does not have to settle the dispute to see the measure in the verse.",
            "bn": "অন্য মতগুলোরও নিজস্ব ওজন আছে। মুজাহিদ, ইবন যায়দ আর হাসানের মতো যদি তাগিয়া হয় তাদের সীমালঙ্ঘন, তবে আয়াত সেই গুনাহকেই তাদের ধ্বংসের কারণ বলে চিহ্নিত করছে। আর কাতাদার মতো, যা তাবারী বেছে নিয়েছেন, যদি তা হয় গর্জন, তাহলে মাআরিফুল কুরআন যোগসূত্রটা খুলে দেখায়। কিয়ামত অস্বীকারে সামূদ যখন সীমা ছাড়াল, তখন তাদের ধ্বংস করল এমন ভয়াল গর্জন, যা সব সীমা ছাড়িয়ে গিয়েছিল। যে মতই নিন, ধাতু একটাই: তা-গাইন-ইয়া। মাপটা দেখতে পাঠককে মতভেদের ফয়সালা করতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Icy, Howling, Past Its Keepers",
          "bn": "হিমশীতল, গর্জনভরা, রক্ষীদের নাগালের বাইরে"
        },
        "p": [
          {
            "en": "The fuller list of voices on sarsar was gathered under 41:16 and 54:19, where the same word describes the same wind, so only what is said here is given. Ibn Kathir: cold. Al-Qurtubi, from ad-Dahhak: cold that burns with its chill as fire burns, taken from sirr, cold; it is also said to mean loud, and Mujahid said severe in its samum, its searing blast. As-Sa'di: strong and hard-blowing, with a sound more piercing than crashing thunder. At-Tabari: hard-gusting, with intense cold. Ma'arif al-Qur'an: a violent windstorm that is also severely cold.",
            "bn": "সারসার শব্দ নিয়ে মতামতের পুরো তালিকা ৪১:১৬ ও ৫৪:১৯ আয়াতের আলোচনায় আনা হয়েছে, কারণ সেখানেও একই শব্দ একই বাতাসের বর্ণনা দেয়। তাই এখানে শুধু এ আয়াতে যা বলা হয়েছে, সেটুকুই। ইবন কাসীর: ঠান্ডা। কুরতুবী দাহহাক থেকে আনেন: এমন ঠান্ডা, যা আগুনের মতো পুড়িয়ে দেয়, শব্দটি এসেছে সির্র থেকে, যার মানে ঠান্ডা। এ-ও বলা হয়েছে যে এর মানে প্রচণ্ড আওয়াজ। আর মুজাহিদ বলেছেন, তীব্র সামূমের বাতাস, অর্থাৎ ঝলসানো হাওয়া। সা'দী: শক্তিশালী, প্রবল বেগে বয়ে চলা, যার আওয়াজ কড়কড়ে বজ্রের চেয়েও তীক্ষ্ণ। তাবারী: প্রচণ্ড ঝাপটা, সঙ্গে কনকনে ঠান্ডা। মাআরিফুল কুরআন: প্রচণ্ড ঝড়, আবার ভীষণ ঠান্ডাও।"
          },
          {
            "en": "'Atiya is where the commentators divide. At-Tabari's own gloss is that it defied its keepers in its blowing and passed, in force and gusting, its known measure of blowing and cold. Al-Baghawi: it defied its keepers and did not obey them, they had no way over it, and it passed the measure, so they did not know how much of it went out. Al-Qurtubi gives the same first, adding that they could not bear its force and that it was angry with Allah's anger. Ibn Kathir reports from 'Ali (RA) and others: it defied the keepers and went out without reckoning.",
            "bn": "‘আতিয়া শব্দে এসে তাফসীরকারদের পথ আলাদা হয়ে যায়। তাবারীর নিজের ব্যাখ্যা: বয়ে চলার সময় বাতাসটা তার রক্ষীদের অবাধ্য হলো, আর জোরে ও ঝাপটায় তার পরিচিত মাপ ছাড়িয়ে গেল। বাগাভী বলেন, সে রক্ষীদের অমান্য করল, তাদের কথা শুনল না, তাদের কোনো নিয়ন্ত্রণ রইল না। মাপ ছাড়িয়ে গেল, ফলে কতটা বেরিয়ে গেল তা তারা জানতেও পারল না। কুরতুবী প্রথমে একই কথা বলেন। সঙ্গে যোগ করেন, এর তীব্রতা তারা সামলাতে পারেনি, আর বাতাসটা আল্লাহর ক্রোধের সঙ্গে ক্রুদ্ধ হয়েছিল। ইবন কাসীর আলী (রাঃ) ও অন্যদের থেকে বর্ণনা করেন: সে রক্ষীদের অবাধ্য হয়ে কোনো হিসাব ছাড়াই বেরিয়ে এল।"
          },
          {
            "en": "The other reading turns the word against 'Ad themselves. Ibn Zayd, in at-Tabari, says the sarsar is the severe wind and the 'atiya is the overpowering wind that defied them and overpowered them. Al-Qurtubi gives the same under it is said. As-Sa'di names both and takes a side: defying its keepers on the saying of many commentators, or defying 'Ad and exceeding the bound, which he calls the correct view. Ibn 'Abbas, through at-Tabari, says a destroying cold wind that defied them without mercy or blessing, lasting and unceasing, and Qatada says it defied them until it bored through their hearts.",
            "bn": "অন্য মতটি শব্দটাকে ‘আদ জাতির দিকেই ঘুরিয়ে দেয়। তাবারীর বর্ণনায় ইবন যায়দ বলেন, সারসার মানে প্রচণ্ড, আর ‘আতিয়া মানে সেই পরাক্রান্ত বাতাস, যা তাদের উপর চড়াও হয়ে তাদের পরাস্ত করল। কুরতুবী 'বলা হয়' বলে একই কথা আনেন। সা'দী দুটি মতই উল্লেখ করে একটির পক্ষ নেন। অনেক মুফাসসিরের মতে বাতাস তার রক্ষীদের অবাধ্য হয়েছিল। আর অন্য মতে সে ‘আদের উপর চড়াও হয়ে সীমা ছাড়িয়েছিল, এবং সা'দী এটাকেই সঠিক বলেন। তাবারীর সূত্রে ইবন আব্বাস (রাঃ) বলেন, ধ্বংসকারী ঠান্ডা বাতাস, যা রহমত ও বরকত ছাড়াই তাদের উপর চড়াও হলো, একটানা, বিরামহীন। কাতাদা বলেন, সে এমনভাবে চড়াও হলো যে তাদের কলিজা ফুঁড়ে বেরিয়ে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Measure Lifted Twice",
          "bn": "দুবার তুলে নেওয়া মাপ"
        },
        "p": [
          {
            "en": "Behind the keepers reading stands a report that at-Tabari gives with two chains. From Ibn 'Abbas: Allah never sent any wind except by measure, nor sent down a drop except by weight, except on the day of Nuh (AS) and the day of 'Ad. On the day of Nuh the water overflowed its keepers, and he recited 69:11; and the wind defied its keepers, and he recited 69:6. The report from 'Ali (RA) says every drop and every gust came down by measure on the hands of an angel, until on those two days the water and the wind were given leave apart from the keepers.",
            "bn": "রক্ষীদের মতের পেছনে আছে একটি বর্ণনা, যা তাবারী দুটি সূত্রে এনেছেন। ইবন আব্বাস (রাঃ) থেকে: আল্লাহ কখনো মাপ ছাড়া কোনো বাতাস পাঠাননি, ওজন ছাড়া এক ফোঁটা পানিও নামাননি, শুধু নূহ (আঃ)-এর দিন আর ‘আদের দিন ছাড়া। নূহের দিন পানি তার রক্ষীদের ছাড়িয়ে গেল, এ বলে তিনি ৬৯:১১ তিলাওয়াত করেন। আর বাতাস তার রক্ষীদের অবাধ্য হলো, এ বলে তিলাওয়াত করেন ৬৯:৬। আলী (রাঃ)-এর বর্ণনায় আছে, প্রতিটি ফোঁটা আর প্রতিটি ঝাপটা নামত মেপে, এক ফেরেশতার হাত দিয়ে। শেষে ওই দুই দিনে পানি আর বাতাসকে রক্ষীদের বাদ দিয়েই ছাড়া হলো।"
          },
          {
            "en": "Whose words these are is disputed. At-Tabari gives the report as Ibn 'Abbas's own saying; al-Qurtubi gives it, by the same chain from Sufyan ath-Thawri through Shahr ibn Hawshab, as the words of the Messenger of Allah ﷺ. Neither grades it, so it is not presented here as a confirmed hadith. Ibn Kathir does attach a narration from the Two Sahihs, which al-Bukhari records as number 1035: the Prophet ﷺ said, \"I was granted victory with As-Saba and the nation of 'Ad was destroyed by Ad-Dabur (westerly wind).\" It is weighed under 41:16. No fetched commentary gives an occasion of revelation.",
            "bn": "কথাগুলো কার, তা নিয়ে মতভেদ আছে। তাবারী বর্ণনাটি এনেছেন ইবন আব্বাস (রাঃ)-এর নিজের উক্তি হিসেবে। কুরতুবী সুফিয়ান সাওরী থেকে শাহর ইবন হাওশাব হয়ে একই সূত্রে এটাকে আনেন রাসূলুল্লাহ ﷺ-এর বাণী হিসেবে। কেউই এর মান বলেননি, তাই এখানে একে নিশ্চিত হাদীস হিসেবে পেশ করা হচ্ছে না। তবে ইবন কাসীর দুই সহীহ থেকে একটি বর্ণনা যুক্ত করেন, যা বুখারী ১০৩৫ নম্বরে এনেছেন: নবী ﷺ বলেছেন, \"আমাকে সাহায্য করা হয়েছে সাবা, অর্থাৎ পূবালি বাতাস দিয়ে, আর ‘আদ জাতিকে ধ্বংস করা হয়েছে দাবূর, অর্থাৎ পশ্চিমা বাতাস দিয়ে।\" এর আলোচনা ৪১:১৬ আয়াতে। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ আয়াত দুটির শানে নুযূল দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Living People Named Here",
          "bn": "আজকের কোনো জাতির নাম এখানে নেই"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verses describe what the text describes: a cry, or a transgression, that destroyed Thamud, and a wind that destroyed 'Ad, peoples of the past who, in 69:4, denied the Striking Calamity. They license nothing against any living person or community. They give nobody standing to name a tribe, nation or family of today as the descendants of Thamud or 'Ad and treat them as condemned, to call a storm or an earthquake that strikes people now a punishment upon them, or to mark any place as cursed. The judgment the verses report is Allah's, about peoples He named.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াত দুটি শুধু সেটুকুই বলে, যা কুরআনে আছে: এক গর্জন, কিংবা এক সীমালঙ্ঘন, যা সামূদকে ধ্বংস করেছিল, আর এক বাতাস, যা ‘আদকে ধ্বংস করেছিল। এরা অতীতের জাতি, যারা ৬৯:৪ আয়াত অনুযায়ী আঘাত হানা মহাবিপদকে মিথ্যা বলেছিল। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো গোত্র, জাতি বা পরিবারকে সামূদ বা ‘আদের বংশধর বলে চিহ্নিত করে অভিশপ্ত ভাবার অধিকার কাউকে দেয় না। আজ কোথাও ঝড় বা ভূমিকম্প হলে তাকে সেখানকার মানুষের শাস্তি বলারও না, কোনো জায়গাকে অভিশপ্ত দাগানোরও না। এখানে যে ফয়সালার খবর, তা আল্লাহর, তাঁর নিজের নাম নেওয়া জাতিগুলো নিয়ে।"
          },
          {
            "en": "What the verses leave the reader is a mirror. Both peoples denied the Day that is coming, and both met something that kept no measure. Ma'arif al-Qur'an reads the cry as the answer to a people who exceeded the limit, and the slayer reading in al-Qurtubi has a whole people perish for approving one man's deed. Ibn Kathir carries the passage on to 69:12, the conscious ear that retains what it hears. A reader who asks where he has stopped respecting a limit, and what wrong he has quietly approved, has heard these verses as that ear would.",
            "bn": "আয়াত দুটি পাঠকের হাতে যা রেখে যায়, তা এক আয়না। দুই জাতিই আসন্ন দিনটিকে অস্বীকার করেছিল। দুই জাতির সামনেই এল এমন কিছু, যা কোনো মাপ মানেনি। মাআরিফুল কুরআন গর্জনটিকে দেখে সীমা ছাড়ানো এক জাতির জবাব হিসেবে। কুরতুবীর বর্ণিত হত্যাকারীর মতে একজনের কাজে সায় দেওয়ার কারণেই গোটা জাতি ধ্বংস হয়। ইবন কাসীর আলোচনাকে টেনে নেন ৬৯:১২ পর্যন্ত, যেখানে সেই সজাগ কানের কথা, যা শুনে তা ধরে রাখে। কোথায় আমি কোনো সীমার তোয়াক্কা ছেড়ে দিয়েছি, কোন অন্যায়ে চুপচাপ সায় দিয়েছি, যে পাঠক এ প্রশ্ন করেন, তিনি আয়াত দুটি শুনলেন সেই কানের মতো করেই।"
          }
        ]
      }
    ]
  },
  "69:13": {
    "sections": [
      {
        "h": {
          "en": "From Memory to the Horn",
          "bn": "স্মৃতি থেকে সিঙ্গার দিকে"
        },
        "p": [
          {
            "en": "Fa-idha nufikha fi al-suri nafkhatun wahida: then when the Horn is blown with one blast. Six Arabic words open a new movement in Surah al-Haqqah. The verses before them looked back at what had already happened on earth, and they ended at 69:12 with a reminder that a conscious ear would hold on to. With the small particle fa, then, the surah turns from what has been to what will be. There is no oath here and no description of the hour, only a sound.",
            "bn": "ফা-ইযা নুফিখা ফিস সূরি নাফখাতুন ওয়াহিদা: অতঃপর যখন সিঙ্গায় ফুঁ দেওয়া হবে, একটিমাত্র ফুঁ। আরবিতে ছয়টি শব্দ, আর এখান থেকেই সূরা আল-হাক্কায় নতুন এক পর্ব শুরু। আগের আয়াতগুলো ফিরে তাকিয়েছিল দুনিয়ায় যা ঘটে গেছে তার দিকে। সেগুলো থেমেছে ৬৯:১২ আয়াতে, এমন এক স্মারকের কথা বলে, যা সজাগ কান ধরে রাখবে। ছোট্ট অব্যয় ফা দিয়ে সূরাটি এবার যা ঘটে গেছে তা ছেড়ে যা ঘটবে তার দিকে মুখ ফেরায়। এখানে কোনো শপথ নেই, সেই মুহূর্তের কোনো বর্ণনাও নেই। আছে শুধু একটা আওয়াজ।"
          },
          {
            "en": "As-Sa'di reads the turn as deliberate. Once the surah has told what Allah did in this world, how He repaid and hastened the penalty there, and how He saved the messengers and those who followed them, this verse becomes, in his words, a prelude to the recompense of the Hereafter, when deeds are paid back in full on the Day of Resurrection. He then sets out the terrifying events that come before that Day, and the first of them is the blowing of the Horn. The stories just told were not the whole account; this is where the rest of it begins.",
            "bn": "সা'দীর চোখে এই মোড় পরিকল্পিত। দুনিয়াতে আল্লাহ কী করেছেন, সেখানে কীভাবে প্রতিফল দিয়েছেন আর শাস্তি তাড়াতাড়ি এনেছেন, আর কীভাবে রসূলদের ও তাঁদের অনুসারীদের রক্ষা করেছেন, সূরাটি তা বলে শেষ করেছে। তাঁর ভাষায়, এবার এই আয়াত আখিরাতের প্রতিফলের ভূমিকা, যেদিন কিয়ামতের দিনে আমলের পুরো বদলা চুকিয়ে দেওয়া হবে। এরপর তিনি সেই দিনের আগের ভয়াবহ ঘটনাগুলো গুনিয়ে যান, আর তার প্রথমটিই সিঙ্গায় ফুঁ। এইমাত্র যে কাহিনিগুলো শোনা হলো, সেগুলোই পুরো হিসাব নয়। বাকিটা শুরু হচ্ছে এখান থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Horn Made to Sound",
          "bn": "শিং, যাতে ফুঁ দেওয়া হয়"
        },
        "p": [
          {
            "en": "What is al-sur? The Muyassar answers with a plainer word: the angel blows into al-qarn, the horn. Ma'arif al-Qur'an gives the same gloss, a horn-like object to be blown on the Last Day, and points to a narration in at-Tirmidhi. On the collection's page it comes from Abdullah ibn 'Amr ibn al-'As: a Bedouin came to the Prophet ﷺ and said, What is the Sur? He said: A horn that is blown into. At-Tirmidhi's own verdict, in the Arabic, is hasan. Ma'arif names the companion as Ibn Umar; the chain in the collection names Abdullah ibn 'Amr.",
            "bn": "আস-সূর কী? মুয়াসসার জবাব দেয় আরও সহজ একটি শব্দে: ফেরেশতা ফুঁ দেবেন আল-কারনে, অর্থাৎ শিংয়ে। মাআরিফুল কুরআনও একই ব্যাখ্যা দেয়: শিংয়ের মতো এক বস্তু, যাতে কিয়ামতের দিন ফুঁ দেওয়া হবে। সঙ্গে উল্লেখ করে তিরমিযীর একটি বর্ণনা। সংকলনের পাতায় বর্ণনাটি এসেছে আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) থেকে: এক বেদুইন নবী ﷺ-এর কাছে এসে জিজ্ঞেস করল, সূর কী? তিনি বললেন, একটি শিং, যাতে ফুঁ দেওয়া হয়। আরবি পাঠে তিরমিযী নিজে একে হাসান বলেছেন। মাআরিফ সাহাবির নাম লিখেছে ইবন উমর, কিন্তু সংকলনের সনদে নাম আছে আবদুল্লাহ ইবন আমরের।"
          },
          {
            "en": "The verse does not say who blows. Nufikha is passive, and al-Qurtubi records al-Zajjaj's note that the phrase fi al-sur, in the Horn, stands in the place of the doer the verb leaves unnamed. The commentators fill that place differently. At-Tabari writes the name into his paraphrase: when Israfil blows into the Horn. As-Sa'di also names Israfil. The Muyassar says only the angel. None of the commentaries fetched for this verse attaches any further narration about the Horn or the one who holds it, so the article stops at the single report above.",
            "bn": "কে ফুঁ দেবেন, আয়াত তা বলে না। নুফিখা কর্মবাচ্য ক্রিয়া। কুরতুবী যাজ্জাজের মন্তব্য উদ্ধৃত করেছেন: ফিস সূর, অর্থাৎ সিঙ্গায়, কথাটিই সেই কর্তার জায়গা নিয়েছে, যার নাম ক্রিয়াটি উল্লেখ করেনি। সেই খালি জায়গা তাফসীরকারেরা ভরেছেন ভিন্ন ভিন্নভাবে। তাবারী ব্যাখ্যার ভেতরেই নামটি বসিয়ে দেন: যখন ইসরাফীল সিঙ্গায় ফুঁ দেবেন। সা'দীও ইসরাফীলের নাম নেন। মুয়াসসার বলে শুধু ফেরেশতা। এই আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই সিঙ্গা বা তার ধারকের ব্যাপারে আর কোনো বর্ণনা জুড়ে দেয়নি। তাই এ লেখা ওপরের একটি বর্ণনাতেই থামছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Blast That Ends Life",
          "bn": "যে ফুঁতে প্রাণ থেমে যায়"
        },
        "p": [
          {
            "en": "Which blast is this? Here the commentators divide, and the division is worth seeing whole. At-Tabari is brief and firm: nafkhatun wahida, and it is the first blast. Al-Baghawi's entire comment on the verse is the same clause, three words in Arabic: and it is the first blast. The Muyassar spells out what that first blast does. It is, in its words, the first blast, at which the world perishes. On this reading the verse describes the moment when the world as a whole is brought to its end by a single sound, with nothing said yet about anyone rising.",
            "bn": "এটা কোন ফুঁ? এখানে এসে তাফসীরকারেরা দুই ভাগ হয়ে যান, আর পুরো ভাগটা দেখে নেওয়াই ভালো। তাবারী সংক্ষেপে ও দৃঢ়ভাবে বলেন: নাফখাতুন ওয়াহিদা, আর এটা প্রথম ফুঁ। এই আয়াতে বাগাভীর পুরো মন্তব্য ঠিক এই কথাটুকুই, আরবিতে তিনটি শব্দ: আর এটা প্রথম ফুঁ। প্রথম ফুঁ কী ঘটায়, মুয়াসসার তা খুলে বলে। তার ভাষায়, এটা সেই প্রথম ফুঁ, যার সঙ্গে সঙ্গে জগৎ ধ্বংস হয়ে যাবে। এই পাঠ অনুযায়ী আয়াতটি সেই মুহূর্তের ছবি, যখন একটিমাত্র আওয়াজে গোটা জগতের অবসান ঘটবে। কারও উঠে দাঁড়ানোর কথা তখনো আসেনি।"
          },
          {
            "en": "Al-Qurtubi opens his comment with the same view and gives it a name. Ibn Abbas said: it is the first blast, for the coming of the Hour, and no one remained but died. Ma'arif al-Qur'an stands with this reading too. Its English renders the verse as the Trumpet blown for the first time, and it explains nafkhatun wahida as a sudden, single sound that continues until all have died. So at-Tabari, al-Baghawi, the Muyassar, Ibn Abbas as al-Qurtubi reports him, and Ma'arif all take this to be the blast of death.",
            "bn": "কুরতুবী তাঁর আলোচনা শুরু করেন এই মত দিয়েই, আর মতটির সঙ্গে একটি নামও জুড়ে দেন। ইবন আব্বাস (রাঃ) বলেছেন: এটা প্রথম ফুঁ, কিয়ামত কায়েম হওয়ার জন্য। তখন এমন কেউ বাকি থাকবে না, যে মারা যায়নি। মাআরিফুল কুরআনও এই পাঠের পক্ষে। তার ইংরেজি অনুবাদে আয়াতের অর্থ, সিঙ্গায় প্রথমবার ফুঁ দেওয়া হবে। নাফখাতুন ওয়াহিদার ব্যাখ্যায় সে বলে: আচমকা একটিমাত্র আওয়াজ, যা চলতে থাকবে সবাই মারা যাওয়া পর্যন্ত। তাহলে তাবারী, বাগাভী, মুয়াসসার, কুরতুবীর উদ্ধৃতিতে ইবন আব্বাস (রাঃ) আর মাআরিফ, সবার কাছে এটা মৃত্যুর ফুঁ।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Dead Stand Up",
          "bn": "যখন মৃতেরা উঠে দাঁড়ায়"
        },
        "p": [
          {
            "en": "The other reading appears in al-Qurtubi straight after Ibn Abbas, introduced without a name: it has been said that this blast is the last. As-Sa'di gives that reading its full picture. Israfil blows into the Horn, he writes, when the bodies have grown and are complete. Then comes nafkhatun wahida, the one blast, and the souls go out, each soul entering its own body, and all at once the people are standing before the Lord of the worlds. In his account the single sound is the blast of rising, not of death.",
            "bn": "অন্য পাঠটি কুরতুবীতে আসে ইবন আব্বাসের (রাঃ) মতের ঠিক পরেই, কোনো নাম ছাড়া: বলা হয়েছে, এই ফুঁ শেষ ফুঁ। সা'দী এই পাঠের পুরো ছবি আঁকেন। তিনি লেখেন, দেহগুলো যখন গজিয়ে উঠে পূর্ণ হবে, তখন ইসরাফীল সিঙ্গায় ফুঁ দেবেন। তারপর আসবে নাফখাতুন ওয়াহিদা, একটিমাত্র ফুঁ। রূহগুলো বেরিয়ে আসবে, প্রতিটি রূহ ঢুকবে নিজ নিজ দেহে, আর হঠাৎই মানুষ দাঁড়িয়ে যাবে রব্বুল আলামীনের সামনে। তাঁর বর্ণনায় এই একক আওয়াজ মৃত্যুর নয়, জেগে ওঠার ফুঁ।"
          },
          {
            "en": "Ibn Kathir sets the verse inside a sequence of three blasts. First comes the blast of terror; it is followed by the blast of stunning, when all in the heavens and the earth are struck down except whom Allah wills; after it comes the blast of standing before the Lord of the worlds, the raising and the gathering. Then he writes: and it is this blast. In the Arabic as fetched those words follow the third, and the abridged English reads them the same way. He then records al-Rabi': it is the last blast, and adds that the apparent meaning is what he has said.",
            "bn": "ইবন কাসীর আয়াতটিকে বসান তিনটি ফুঁয়ের এক ধারায়। প্রথমে আতঙ্কের ফুঁ। তারপর বেহুঁশ করে দেওয়ার ফুঁ, যখন আল্লাহ যাকে চান সে ছাড়া আসমান ও জমিনের সবাই লুটিয়ে পড়বে। এরপর রব্বুল আলামীনের সামনে দাঁড়ানোর ফুঁ, পুনরুত্থান আর সমবেত হওয়ার ফুঁ। তারপর তিনি লেখেন: আর এটাই সেই ফুঁ। যে আরবি পাঠ দেখা হয়েছে, তাতে কথাটি এসেছে তৃতীয়টির পরে, আর সংক্ষিপ্ত ইংরেজি সংস্করণও একইভাবে পড়ে। এরপর তিনি রাবী'-র মত উদ্ধৃত করেন: এটা শেষ ফুঁ। সঙ্গে যোগ করেন, বাহ্যিক অর্থ সেটাই, যা তিনি বলেছেন।"
          },
          {
            "en": "So the sides are clear. At-Tabari, al-Baghawi, the Muyassar, Ibn Abbas in al-Qurtubi, and Ma'arif al-Qur'an read the blast as the first, the one of death. As-Sa'di, the unnamed view in al-Qurtubi, and al-Rabi' read it as the last, the one of raising, and Ibn Kathir's sentence, in the order it is written, places it there as well. This article does not choose between them. Both readings keep what the verse itself says outright: one blast, and the state of all creation changes with it.",
            "bn": "তাহলে দুই পক্ষ পরিষ্কার। তাবারী, বাগাভী, মুয়াসসার, কুরতুবীর উদ্ধৃতিতে ইবন আব্বাস (রাঃ) আর মাআরিফুল কুরআন একে প্রথম ফুঁ বলে পড়েন, মৃত্যুর ফুঁ। সা'দী, কুরতুবীতে আসা নামহীন মতটি আর রাবী' একে পড়েন শেষ ফুঁ হিসেবে, জেগে ওঠার ফুঁ। ইবন কাসীরের বাক্যও যে ক্রমে লেখা, সেই ক্রমে একে ওখানেই বসায়। এ লেখা দুই মতের কোনোটিকে বেছে নিচ্ছে না। আয়াত নিজে যা স্পষ্ট বলে, দুই পাঠেই তা অটুট থাকে: ফুঁ একটিই, আর তাতেই গোটা সৃষ্টির অবস্থা বদলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Sounds or Three",
          "bn": "দুই আওয়াজ, নাকি তিন"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an steps back to count. The texts of the Qur'an and the Sunnah, it says, show that the Horn will be blown twice. The first is nafkhat al-sa'aq, the blast of swooning, and it quotes 39:68: and the Horn will be blown, and whoever is in the heavens and whoever is on the earth will fall dead, except whom Allah wills. The second is nafkhat al-ba'th, the blast of raising, from the same verse: then it will be blown again, and at once they will be standing, looking on.",
            "bn": "মাআরিফুল কুরআন এখানে একটু পিছিয়ে এসে গোনে। তার কথা, কুরআন ও সুন্নাহর ভাষ্য দেখায় যে সিঙ্গায় ফুঁ দেওয়া হবে দুইবার। প্রথমটি নাফখাতুস সা'আক, বেহুঁশ হওয়ার ফুঁ। এর প্রমাণে সে ৩৯:৬৮ আয়াত উদ্ধৃত করে: আর সিঙ্গায় ফুঁ দেওয়া হবে, তখন আসমানে যারা আছে আর জমিনে যারা আছে সবাই মূর্ছিত হয়ে পড়বে, আল্লাহ যাকে চান সে ছাড়া। দ্বিতীয়টি নাফখাতুল বা'স, পুনরুত্থানের ফুঁ, একই আয়াত থেকে: তারপর আবার ফুঁ দেওয়া হবে, আর তখনই তারা উঠে দাঁড়িয়ে তাকাতে থাকবে।"
          },
          {
            "en": "With the first, Ma'arif explains, the angels in the heavens and the jinn, humans and animals on earth will fall unconscious, and in that state they will die. It then notes that some narrations mention a third blast before these two, nafkhat al-faza', the blast of terror. Its answer, credited to Mazhari, is that the first blast in its opening stage is the blast of terror and in its final stage becomes the blast of swooning and death. Ibn Kathir, as we saw, names the three in sequence.",
            "bn": "মাআরিফ ব্যাখ্যা করে, প্রথম ফুঁতে আসমানের ফেরেশতারা আর জমিনের জিন, মানুষ ও প্রাণী অচেতন হয়ে পড়বে, আর সেই অচেতন অবস্থাতেই মারা যাবে। এরপর সে উল্লেখ করে, কিছু বর্ণনায় এই দুটির আগে তৃতীয় আরেকটি ফুঁর কথাও আছে, নাফখাতুল ফাযা', আতঙ্কের ফুঁ। মাযহারীর বরাতে তার সমাধান: প্রথম ফুঁ শুরুর পর্যায়ে আতঙ্কের ফুঁ, আর শেষ পর্যায়ে তা-ই হয়ে যায় বেহুঁশ হওয়া ও মৃত্যুর ফুঁ। আর ইবন কাসীর, যেমন আগে দেখা গেল, তিনটির নাম পরপর আলাদা করে বলেন।"
          },
          {
            "en": "The sources therefore agree on the two sounds named in 39:68, one that strikes down and one that raises, and differ on how to describe terror: a stage within the first blast, in Ma'arif's account, or a blast of its own, in Ibn Kathir's list. That is a difference in counting, not in the event. It also explains why the question of which blast 69:13 means could arise at all: the Qur'an speaks of more than one, and this verse names only one.",
            "bn": "অর্থাৎ ৩৯:৬৮ আয়াতে যে দুটি আওয়াজের কথা, একটি লুটিয়ে দেয় আর একটি জাগিয়ে তোলে, সে ব্যাপারে উৎসগুলো একমত। মতভেদ শুধু আতঙ্কের ফুঁকে কীভাবে দেখা হবে তা নিয়ে। মাআরিফের বর্ণনায় তা প্রথম ফুঁয়েরই একটি পর্যায়, ইবন কাসীরের তালিকায় আলাদা একটি ফুঁ। এ পার্থক্য গোনার ধরনে, ঘটনায় নয়। আর এ থেকেই বোঝা যায়, ৬৯:১৩ আয়াতে কোন ফুঁর কথা, এ প্রশ্ন উঠল কেন। কুরআন একাধিক ফুঁর কথা বলে, অথচ এই আয়াত নাম নেয় মাত্র একটির।"
          }
        ]
      },
      {
        "h": {
          "en": "A Command Not Repeated",
          "bn": "যে হুকুম দ্বিতীয়বার লাগে না"
        },
        "p": [
          {
            "en": "Why add wahida, one, when nafkha already means a single blowing? Ibn Kathir answers directly. The verse stresses here that it is one blast, he says, because the command of Allah is not opposed and cannot be held back, and it needs no repeating and no reinforcing. Al-Qurtubi's gloss is shorter: nafkhatun wahida, that is, it is not doubled. The word is not there to count for the reader's benefit. It tells the reader what kind of command this is: one that is obeyed the first time.",
            "bn": "নাফখা শব্দেই তো একবার ফুঁ দেওয়ার অর্থ আছে, তাহলে ওয়াহিদা, অর্থাৎ একটি, আলাদা করে বলা কেন? ইবন কাসীর সরাসরি জবাব দেন। তাঁর কথা, এখানে জোর দিয়ে বলা হয়েছে যে ফুঁ একটিই, কারণ আল্লাহর হুকুমের বিরোধিতা চলে না, তা ঠেকিয়ে রাখাও যায় না। তা আবার বলার দরকার পড়ে না, বাড়তি জোর দেওয়ারও দরকার পড়ে না। কুরতুবীর ব্যাখ্যা আরও ছোট: নাফখাতুন ওয়াহিদা, মানে তা দ্বিতীয়বার দেওয়া হবে না। শব্দটি পাঠকের জন্য গুনে দেওয়ার উদ্দেশ্যে আসেনি। এটা জানিয়ে দেয় হুকুমটি কোন জাতের: প্রথমবারেই যা পালিত হয়।"
          },
          {
            "en": "Al-Qurtubi also pauses on the grammar. The verb nufikha is masculine although nafkha is feminine, and he explains that this is allowed because the word's gender is grammatical, not real. Al-Akhfash, he notes, says the verb falls on nafkha because no nominative noun stands before it. Nafkhatan in the accusative, as a verbal noun, is also permitted, and Abu al-Sammal recited it so. Or, al-Qurtubi adds, the verse simply reports the act, as Arabic says he struck a striking. Whichever way the grammar runs, wahida stays attached to the blast.",
            "bn": "কুরতুবী ব্যাকরণেও একটু থামেন। নাফখা শব্দটি স্ত্রীলিঙ্গ, অথচ ক্রিয়া নুফিখা পুংলিঙ্গ। তিনি বলেন, এটা চলে, কারণ শব্দটির স্ত্রীলিঙ্গ শুধু ব্যাকরণের, আসল নয়। তিনি জানান, আখফাশের মতে ক্রিয়াটি নাফখার ওপরই পড়েছে, কারণ তার আগে কর্তা হিসেবে আর কোনো বিশেষ্য নেই। ক্রিয়াবাচক বিশেষ্য হিসেবে যবরসহ নাফখাতান পড়াও বৈধ, আর আবুস সাম্মাল এভাবেই পড়েছেন। কুরতুবী আরেকটি সম্ভাবনাও রাখেন: আয়াতটি হয়তো শুধু কাজটির খবর দিচ্ছে, যেমন বলা হয়, সে মারল এক মার। ব্যাকরণ যেদিকেই যাক, ওয়াহিদা শব্দটি ফুঁয়ের সঙ্গেই লেগে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Sentence Running On",
          "bn": "যে বাক্য থামে না"
        },
        "p": [
          {
            "en": "The verse opens with when and does not finish its sentence: then when the Horn is blown. The commentators do not stop at it either. At-Tabari carries his paraphrase straight into 69:14, where the earth and the mountains are lifted and crushed, and glosses that crushing as a single quake. Ibn Kathir ends his remark on this verse with the words: and for this reason He says here, and goes on to 69:14. The Muyassar reads the blast, the lifting of the earth and the mountains, and then, at that time, the coming of the Resurrection in 69:15, as one scene.",
            "bn": "আয়াতটি শুরু হয় যখন দিয়ে, কিন্তু বাক্যটি এখানে শেষ হয় না: অতঃপর যখন সিঙ্গায় ফুঁ দেওয়া হবে। তাফসীরকারেরাও এখানে থামেন না। তাবারী তাঁর ব্যাখ্যা সোজা টেনে নেন ৬৯:১৪ আয়াতে, যেখানে পৃথিবী আর পাহাড়গুলোকে তুলে চূর্ণ করা হবে। সেই চূর্ণ করাকে তিনি ব্যাখ্যা করেন একটিমাত্র কম্পন বলে। ইবন কাসীর এই আয়াতের আলোচনা শেষ করেন এ কথায়: আর এ কারণেই তিনি এখানে বলেছেন। তারপর চলে যান ৬৯:১৪ আয়াতে। মুয়াসসার ফুঁ, পৃথিবী ও পাহাড়ের উত্থান, আর তারপর সেই মুহূর্তে ৬৯:১৫ আয়াতের কিয়ামত সংঘটিত হওয়া, সবটাকে পড়ে একটিই দৃশ্য হিসেবে।"
          },
          {
            "en": "Those verses have their own place, and their detail belongs there. For this verse it is enough to see what the sources see: the blast is not an event standing alone but the first link of a chain, and the word wahida returns at the close of 69:14, a single crushing after a single blast. The surah lets the sentence run on because what the sound begins does not pause either. The reader is not given a breath between the call and what follows it.",
            "bn": "সেই আয়াতগুলোর নিজস্ব জায়গা আছে, তাদের খুঁটিনাটি সেখানেই আলোচনার বিষয়। এই আয়াতের জন্য এটুকু দেখাই যথেষ্ট, যা উৎসগুলো দেখে: ফুঁ আলাদা কোনো ঘটনা নয়, বরং এক শিকলের প্রথম কড়া। ৬৯:১৪ আয়াতের শেষে ওয়াহিদা শব্দটি আবার ফিরে আসে। একটিমাত্র ফুঁয়ের পর একটিমাত্র চূর্ণ করা। আওয়াজ যা শুরু করে, তা-ও থামে না, তাই সূরাটিও বাক্যটিকে থামতে দেয় না। ডাক আর তার পরের ঘটনার মাঝখানে পাঠককে দম নেওয়ার সুযোগ দেওয়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Reminders, One Call",
          "bn": "স্মরণ বহুবার, ডাক একবার"
        },
        "p": [
          {
            "en": "Set this verse beside the one before it. In 69:12 the surah hopes for an ear that holds on to what it hears. Such an ear is needed because, in this life, the reminder comes again and again. The Qur'an returns to the same Day in surah after surah, and the deaths of people we knew repeat the lesson in our own streets. Ibn Kathir said the command behind the Horn needs no repeating. The repeating, then, belongs to now, and it is given for our sake.",
            "bn": "এই আয়াতটিকে তার আগেরটির পাশে রেখে দেখুন। ৬৯:১২ আয়াতে সূরাটি এমন কানের আশা করে, যা শোনা কথা ধরে রাখে। এমন কানের দরকার এ জন্য যে, এই জীবনে স্মরণ আসে বারবার। কুরআন সূরার পর সূরায় সেই একই দিনের কথায় ফিরে আসে। চেনা মানুষদের মৃত্যু আমাদের নিজেদের পাড়াতেই সেই শিক্ষা আবার শোনায়। ইবন কাসীর বলেছেন, সিঙ্গার পেছনের হুকুম দ্বিতীয়বার বলার দরকার পড়ে না। তাহলে বারবার বলাটা এই সময়েরই জিনিস, আর তা দেওয়া হচ্ছে আমাদেরই খাতিরে।"
          },
          {
            "en": "The danger is to mistake that mercy for a guarantee. Because the reminder has come many times, it begins to feel as though it always will, and each hearing is filed away to be acted on at the next. The verse ends that habit with one word. The Horn is blown once, whichever blast it is, and the verse promises no second call to anyone who was not ready for the first. What it asks of today is modest: take the reminder already heard this week and act on it this week, before the sound that does not repeat.",
            "bn": "বিপদ হলো সেই রহমতকে নিশ্চয়তা ভেবে বসা। স্মরণ বহুবার এসেছে বলে মনে হতে থাকে, তা সবসময়ই আসবে। আর প্রতিবার শোনার পর কাজটা তুলে রাখা হয় পরের বারের জন্য। আয়াত একটি শব্দে এই অভ্যাসের ইতি টানে। সিঙ্গায় ফুঁ হবে একবার, সেটা যে ফুঁ-ই হোক। প্রথমটির জন্য যে তৈরি ছিল না, তার জন্য আয়াত দ্বিতীয় কোনো ডাকের কথা দেয় না। আজকের জন্য আয়াতের দাবি সামান্য: এ সপ্তাহে যে স্মরণটা কানে এসেছে, এ সপ্তাহেই তার ওপর আমল করুন, সেই আওয়াজের আগে, যা আর ফিরে আসে না।"
          }
        ]
      }
    ]
  },
  "69:19": {
    "sections": [
      {
        "h": {
          "en": "The Day of Exhibition",
          "bn": "প্রদর্শনের দিন"
        },
        "p": [
          {
            "en": "Surah al-Haqqah has been building a scene. One blast on the Horn in 69:13, the earth and the mountains lifted and crushed in a single blow in 69:14, the sky split apart in 69:16, and eight bearing the Throne of your Lord in 69:17. Then 69:18 turns from the sky to the crowd standing under it: that Day you will be exhibited, and nothing of yours that was concealed stays hidden. Our verse is the first individual voice heard after that sentence.",
            "bn": "সূরা আল-হাক্কাহ ধাপে ধাপে একটি দৃশ্য গড়ে তুলছিল। 69:13-এ শিঙায় একটিমাত্র ফুঁক, 69:14-এ যমীন ও পাহাড়গুলোকে তুলে নিয়ে এক আঘাতে চূর্ণ করা, 69:16-এ আকাশ ফেটে যাওয়া, আর 69:17-এ আটজন বহন করছে আপনার প্রতিপালকের আরশ। এরপর 69:18 আকাশ থেকে মুখ ফিরিয়ে নিচে দাঁড়ানো ভিড়ের দিকে তাকায়: সেদিন তোমাদের হাজির করা হবে, আর তোমাদের গোপন কিছুই গোপন থাকবে না। এই বাক্যের পর প্রথম যে একক কণ্ঠস্বর শোনা যায়, সেটিই আমাদের আয়াত।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Said Once",
          "bn": "একবারই বলা একটি শব্দ"
        },
        "p": [
          {
            "en": "The first thing he says is a word that occurs nowhere else in the Quran: ha'umu. It is not a statement at all but a word of offering, what a person says while holding something out, and the grammarians gloss it as khudhu, take. And it is plural. One man has been handed one document, and the first sound out of him is addressed to a crowd. The verse does not say who the crowd is.",
            "bn": "সে প্রথম যে কথাটি বলে, তাতে এমন একটি শব্দ আছে যা কুরআনে আর কোথাও নেই: 'হা-উমু'। এটি আদৌ কোনো বিবৃতি নয়, বরং এগিয়ে দেওয়ার শব্দ — কিছু হাতে বাড়িয়ে ধরে মানুষ যা বলে; ব্যাকরণবিদরা এর অর্থ করেন 'খুযূ', অর্থাৎ নাও। আর শব্দটি বহুবচন। একজন মানুষের হাতে একটি দলিল দেওয়া হয়েছে, আর তার মুখ থেকে প্রথম যে শব্দটি বের হয় তা একদল লোককে সম্বোধন করে বলা। সেই দল কারা, আয়াত তা বলে না।"
          },
          {
            "en": "That plural carries the emotional content of the verse. The record in his hand holds exactly what 69:18 has just said cannot be concealed, and his response to its contents becoming public is to hurry the reading along. People hide what would shame them; this man is not waiting to be exposed, he is distributing. Whatever is written there, he already knows what it says, and he is content for strangers to know it too.",
            "bn": "এই বহুবচনটিই আয়াতের আবেগ বহন করে। তার হাতের আমলনামায় ঠিক সেই জিনিসগুলোই আছে, 69:18 যেগুলো সম্পর্কে সবেমাত্র বলেছে যে সেগুলো লুকানো যাবে না; আর সেগুলো প্রকাশ্য হয়ে পড়ছে দেখে তার প্রতিক্রিয়া হলো পড়াটা তাড়াতাড়ি করার তাগাদা দেওয়া। মানুষ তা-ই লুকায় যা তাকে লজ্জা দেবে; এই লোকটি ধরা পড়ার অপেক্ষা করছে না, সে নিজেই বিলি করছে। সেখানে যা-ই লেখা থাকুক, সে আগে থেকেই জানে কী লেখা আছে, আর অচেনা মানুষও তা জানুক — এতে তার আপত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Silent Ha",
          "bn": "নীরব 'হা'"
        },
        "p": [
          {
            "en": "The last word is kitabiyah, my record, and it ends on a ha that is not part of the word. Arabic calls it the ha' as-sakt, a letter added at a pause so the voice can rest. It is written into the mushaf here and it recurs through the passage: kitabiyah and hisabiyah in 69:19 and 69:20, both again in 69:25 and 69:26, then maliyah in 69:28 and sultaniyah in 69:29 — six times inside eleven verses.",
            "bn": "শেষ শব্দটি 'কিতাবিয়াহ' — আমার আমলনামা — আর তা শেষ হয় এমন একটি 'হা' দিয়ে যা শব্দটির অংশ নয়। আরবিতে এর নাম 'হা-উস সাক্‌ত' — থামার সময় কণ্ঠকে বিশ্রাম দেওয়ার জন্য যোগ করা একটি অক্ষর। এখানে তা মুসহাফে লিখিত আছে এবং এই অংশ জুড়ে বারবার ফিরে আসে: 69:19 ও 69:20-তে 'কিতাবিয়াহ' ও 'হিসাবিয়াহ', আবার 69:25 ও 69:26-তে সে দুটিই, তারপর 69:28-এ 'মালিয়াহ' এবং 69:29-এ 'সুলতানিয়াহ' — এগারো আয়াতের ভেতরে ছয়বার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Counterpart at 69:25",
          "bn": "69:25-এর বিপরীত ছবি"
        },
        "p": [
          {
            "en": "Six verses later the same sentence is built again with everything reversed. 69:19 begins fa-amma man utiya kitabahu bi-yaminihi; 69:25 begins wa-amma man utiya kitabahu bi-shimalihi. The right hand becomes the left. And the two speeches end on the identical word: this man says ha'umu iqra'u kitabiyah, while the other says ya laytani lam uta kitabiyah, I wish I had not been given my record.",
            "bn": "ছয় আয়াত পরে একই বাক্য আবার গড়া হয়, তবে সবকিছু উল্টে দিয়ে। 69:19 শুরু হয় 'ফাআম্মা মান ঊতিয়া কিতাবাহু বিয়ামীনিহ' দিয়ে; 69:25 শুরু হয় 'ওয়া আম্মা মান ঊতিয়া কিতাবাহু বিশিমালিহ' দিয়ে। ডান হাত হয়ে যায় বাম হাত। আর দুটি কথাই শেষ হয় একই শব্দে: এই লোকটি বলে 'হা-উমু ইক্‌রাঊ কিতাবিয়াহ', আর অন্যজন বলে 'ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ' — হায়, আমাকে যদি আমার আমলনামা না দেওয়া হতো।"
          },
          {
            "en": "So it is one Day, and the document is the same kind of document. Nothing differs except what is written in it, and what is written in it was supplied earlier. The Quran describes the same handing over elsewhere with another detail: 84:7 has the record given in the right hand, and 84:10 has it given from behind the back. In every version the record arrives. The only variable is which sentence the person then says.",
            "bn": "কাজেই দিনটি একটিই, আর দলিলটিও একই ধরনের দলিল। এর ভেতরে কী লেখা আছে তা ছাড়া আর কিছুই আলাদা নয় — আর যা লেখা আছে, তা সরবরাহ করা হয়েছিল আরও আগে। কুরআন এই একই হস্তান্তরের বর্ণনা অন্যত্র আরেকটি বিবরণসহ দেয়: 84:7-এ আমলনামা দেওয়া হয় ডান হাতে, আর 84:10-এ দেওয়া হয় পিঠের পেছন দিক থেকে। প্রতিটি বর্ণনাতেই আমলনামা এসে পৌঁছায়। কেবল বদলায় এটুকু — মানুষটি এরপর কোন বাক্যটি উচ্চারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Is Confident",
          "bn": "তার এই নিশ্চিন্ততা কেন"
        },
        "p": [
          {
            "en": "69:20 gives his reason in a single sentence: inni zanantu anni mulaqin hisabiyah, indeed I was certain that I would meet my account. The verb zanna usually covers supposition, and the commentators point out that here it carries its other sense, firm conviction, which is how this app renders it. He is not saying that he suspected a reckoning might come. He is saying that he lived as a man who knew it would.",
            "bn": "69:20 তার কারণটি জানায় একটিমাত্র বাক্যে: 'ইন্নী যানানতু আন্নী মুলাকিন হিসাবিয়াহ' — নিশ্চয়ই আমি নিশ্চিত ছিলাম যে আমাকে আমার হিসাবের সম্মুখীন হতে হবে। 'যান্না' ক্রিয়াটি সাধারণত অনুমান বোঝায়, আর মুফাসসিরগণ উল্লেখ করেন যে এখানে তা তার অন্য অর্থটি বহন করছে — দৃঢ় প্রত্যয়; এই অ্যাপের অনুবাদও সেভাবেই করেছে। সে বলছে না যে হিসাব হতে পারে বলে তার সন্দেহ ছিল। সে বলছে, সে এমন মানুষের মতো বেঁচেছে যে জানত হিসাব হবেই।"
          },
          {
            "en": "69:24 then completes the logic. The people of the garden are told: eat and drink in satisfaction for what you put forth in the days past. Bima aslaftum uses the language of sending goods on ahead of yourself. Nothing in the passage suggests that the joy of our verse was manufactured on the spot. It is the ordinary relief of a man collecting something he dispatched long ago and had not forgotten sending.",
            "bn": "এরপর 69:24 যুক্তিটি সম্পূর্ণ করে। জান্নাতবাসীদের বলা হয়: বিগত দিনগুলোতে তোমরা যা আগে পাঠিয়েছ তার বিনিময়ে তৃপ্তির সঙ্গে খাও ও পান করো। 'বিমা আসলাফতুম' শব্দবন্ধটি নিজের আগে পণ্য পাঠিয়ে দেওয়ার ভাষা ব্যবহার করে। এই অংশের কোথাও ইঙ্গিত নেই যে আমাদের আয়াতের আনন্দটি সেখানেই হঠাৎ তৈরি হয়েছে। এটি সেই সাধারণ স্বস্তি, যা অনুভব করে এমন একজন মানুষ যে বহু আগে পাঠানো কিছু সংগ্রহ করছে এবং পাঠানোর কথা ভোলেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Writing It Now",
          "bn": "এখনই তা লেখা"
        },
        "p": [
          {
            "en": "The verse offers a test that does not require imagining the Hereafter at all. Take one ordinary day and ask which parts of it you would hand to a stranger to read. The distance between that answer and the whole day is the work. What makes this man shout is not that his record is spotless, since 69:20 never claims that; it is that he expected to meet it, lived accordingly, and 69:24 says his ease was earned in days now past.",
            "bn": "আয়াতটি এমন একটি পরীক্ষা দেয় যার জন্য আখিরাত কল্পনা করারও দরকার নেই। যেকোনো একটি সাধারণ দিন নিন এবং জিজ্ঞেস করুন, তার কোন অংশগুলো আপনি একজন অচেনা মানুষের হাতে পড়তে দিতে পারতেন। সেই উত্তর আর গোটা দিনটির মধ্যেকার ব্যবধানটুকুই আসল কাজ। এই লোকটি যে চেঁচিয়ে ওঠে তার কারণ এই নয় যে তার আমলনামা নিষ্কলঙ্ক — 69:20 তেমন দাবি কখনোই করে না; কারণ হলো সে হিসাবের মুখোমুখি হওয়ার প্রত্যাশা রাখত, সেভাবেই বেঁচেছে, আর 69:24 বলছে তার এই স্বস্তি অর্জিত হয়েছে বিগত দিনগুলোতেই।"
          }
        ]
      }
    ]
  },
  "69:25": {
    "sections": [
      {
        "h": {
          "en": "A Turn After the Garden",
          "bn": "বাগানের পরে মোড়"
        },
        "p": [
          {
            "en": "Wa-amma man utiya kitabahu bi-shimalihi fa-yaqulu ya laytani lam uta kitabiyah: but as for he who is given his record in his left hand, he will say, I wish I had not been given my record. The verse is ten words long in Arabic. The verse before it, 69:24, closed a scene of reward with an invitation to eat and drink for what was put forth in the days past. Ours opens with wa-amma, but as for, and turns from the garden to a second man.",
            "bn": "ওয়া আম্মা মান ঊতিয়া কিতাবাহু বিশিমালিহি ফাইয়াকূলু ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ: আর যাকে তার আমলনামা দেওয়া হবে তার বাম হাতে, সে বলবে, হায়, আমাকে যদি আমার আমলনামা না দেওয়া হত! আরবিতে আয়াতটি ১০টি শব্দের। এর ঠিক আগে ৬৯:২৪ পুরস্কারের এক দৃশ্য শেষ করেছে এই আমন্ত্রণে: বিগত দিনগুলোতে যা আগে পাঠিয়েছ, তার বিনিময়ে তৃপ্তির সঙ্গে খাও, পান কর। আমাদের আয়াত খোলে 'ওয়া আম্মা' দিয়ে, মানে 'আর যার কথা বলতে হয়'। বাগান থেকে চোখ সরে যায় দ্বিতীয় এক মানুষের দিকে।"
          },
          {
            "en": "Both verbs that matter are passive. Utiya, he is given, and lam uta, I had not been given: in neither does the man act. He does not reach for the record or choose the hand it comes to. Something is handed to him, and the only thing in the verse that is his own is the sentence he says when it arrives. The commentators fetched for this verse keep to that shape. They spend their words on what the record is, how it is handed, and what the wish means.",
            "bn": "আয়াতের দুটি মূল ক্রিয়াই কর্মবাচ্যে। 'ঊতিয়া' মানে তাকে দেওয়া হল, আর 'লাম ঊতা' মানে আমাকে দেওয়া না হত। কোনোটাতেই লোকটি নিজে কিছু করছে না। আমলনামার দিকে সে হাত বাড়ায় না, কোন হাতে আসবে তাও সে বেছে নেয় না। জিনিসটা তার হাতে তুলে দেওয়া হয়। আয়াতে তার নিজের বলতে শুধু সেই বাক্যটুকু, যা আমলনামা হাতে আসার পর সে উচ্চারণ করে। এ আয়াতের যেসব তাফসীর সামনে আছে, সেগুলোও এই কাঠামো ধরে চলে। তাদের আলোচনা তিনটি প্রশ্ন ঘিরে: আমলনামাটা কী, কীভাবে তা দেওয়া হয়, আর ইচ্ছাটার অর্থ কী।"
          }
        ]
      },
      {
        "h": {
          "en": "What Reaches His Hand",
          "bn": "হাতে যা এসে পৌঁছায়"
        },
        "p": [
          {
            "en": "At-Tabari restates the verse in plainer words: as for whoever is given, on that Day, the record of his deeds, kitab a'malihi, in his left hand. His gloss makes two things explicit that the verse leaves implied. The time is yawma'idhin, that Day, which ties the verse back to the Day the surah has been describing. And the book is a book of deeds. The Muyassar uses the same phrase, kitab a'malihi, and as-Sa'di makes it plural and specific: kutub a'malihim as-sayyi'a, the records of their evil deeds.",
            "bn": "তাবারী আয়াতটিকে আরও সহজ ভাষায় বলেন: আর যাকে সেদিন তার আমলের খাতা, 'কিতাবু আ'মালিহি', দেওয়া হবে তার বাম হাতে। আয়াতে যা ইঙ্গিতে আছে, তাঁর ব্যাখ্যায় এমন দুটি কথা খোলাখুলি এসে যায়। প্রথমটি সময়: 'ইয়াওমাইযিন', সেদিন। এ শব্দ আয়াতটিকে বেঁধে দেয় সেই দিনের সঙ্গে, যার ছবি সূরাটি এতক্ষণ আঁকছিল। দ্বিতীয়টি খাতার পরিচয়: এ হল আমলের খাতা। মুয়াসসারও একই কথা বলে, 'কিতাবু আ'মালিহি'। সা'দী শব্দটিকে বহুবচন করেন এবং আরও নির্দিষ্ট করে দেন: 'কুতুবু আ'মালিহিমুস সাইয়্যিআহ', তাদের মন্দ আমলের খাতাগুলো।"
          },
          {
            "en": "Ibn Kathir places the scene. His Arabic says the record is given fi al-'arasat, on the open grounds of the gathering, which the English abridgement renders as when the people are brought before Allah. He calls the passage an account of the condition of al-ashqiya', the wretched, and the abridgement heads it the bad condition of whoever is given his record in his left hand. Apart from al-Qurtubi's narration, taken up below, these sources say no more about the record's contents than that they are his deeds.",
            "bn": "ইবন কাসীর দৃশ্যটির জায়গা চিনিয়ে দেন। তাঁর আরবি ভাষ্যে আমলনামা দেওয়া হয় 'ফিল আরাসাত', মানে হাশরের খোলা প্রান্তরে। ইংরেজি সংক্ষিপ্ত সংস্করণ কথাটির অনুবাদ করেছে এভাবে: যখন মানুষকে আল্লাহর সামনে হাজির করা হবে। তিনি এ অংশকে বলেন 'আল-আশকিয়া', অর্থাৎ হতভাগাদের অবস্থার বিবরণ। সংক্ষিপ্ত সংস্করণের শিরোনামও তাই: যাকে বাম হাতে আমলনামা দেওয়া হবে, তার করুণ অবস্থা। নিচে কুরতুবীর বর্ণনার কথা আসবে। সেটুকু বাদ দিলে এসব সূত্র আমলনামার ভেতরের কথা নিয়ে এর বেশি কিছু বলে না যে, তাতে আছে তার আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "Behind the Back",
          "bn": "পিঠের পেছন দিয়ে"
        },
        "p": [
          {
            "en": "Bi-shimalihi: in his left hand. At-Tabari, the Muyassar and Ibn Kathir repeat the phrase without describing how the handing happens. Al-Baghawi is the one who does. He quotes Ibn as-Sa'ib: his left hand is twisted round behind his back, and then he is given his record. He then adds a second account under qila, it is said: his left hand is pulled out from his chest to behind his back, and then he is given his record. Neither account appears in the other sources fetched for this verse.",
            "bn": "বিশিমালিহি: তার বাম হাতে। তাবারী, মুয়াসসার আর ইবন কাসীর শব্দটি উল্লেখ করেন, কিন্তু হাতে দেওয়াটা কীভাবে ঘটে তা বলেন না। সে বর্ণনা দেন বাগাভী। তিনি ইবনুস সাইবের কথা আনেন: তার বাম হাত মুচড়ে পিঠের পেছনে নেওয়া হবে, তারপর তাকে আমলনামা দেওয়া হবে। এরপর 'কীলা', অর্থাৎ 'বলা হয়' কথাটি দিয়ে তিনি আরেকটি বর্ণনা যোগ করেন: তার বাম হাত বুক থেকে টেনে বের করে পিঠের পেছনে নেওয়া হবে, তারপর আমলনামা দেওয়া হবে। এ আয়াতের অন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিতে এ দুই বর্ণনার একটিও নেই।"
          },
          {
            "en": "The two accounts differ in the verb, twisting against pulling out, and al-Baghawi does not choose between them. He ties neither to another verse, so they are reported here as his, with the attributions he gives, and no further. What they share is the end point: before the record arrives, the hand that takes it has been moved behind him. The other commentators leave the picture at the left hand alone, and that is where the verse itself leaves it.",
            "bn": "দুই বর্ণনার পার্থক্য ক্রিয়াপদে। একটিতে হাত মোচড়ানো, অন্যটিতে টেনে বের করা। বাগাভী এর কোনোটিকে অন্যটির উপর প্রাধান্য দেন না। অন্য কোনো আয়াতের সঙ্গেও তিনি এগুলোকে যুক্ত করেন না। তাই এখানে বর্ণনা দুটি তাঁরই নামে, তাঁর দেওয়া সূত্রসহ রাখা হল, এর বেশি নয়। দুটির মিল শেষ জায়গায়। আমলনামা আসার আগেই যে হাত তা গ্রহণ করবে, সেটিকে তার পিঠের পেছনে সরিয়ে নেওয়া হয়। বাকি তাফসীরকারেরা ছবিটা থামান শুধু বাম হাতে এসে। আয়াত নিজেও সেখানেই থামে।"
          },
          {
            "en": "As-Sa'di gives a reason for the left hand, in four nouns. The people of wretchedness are given their records in their left hands tamyizan lahum wa-khizyan wa-'aran wa-fadihatan: as a mark that sets them apart, and as disgrace, shame and public exposure. On his reading the hand is itself the first part of what happens to the man. Before he has read a line, the way the record reaches him has already set him apart in front of everyone.",
            "bn": "বাম হাত কেন, সা'দী তার কারণ বলেন ৪টি শব্দে। হতভাগাদের আমলনামা তাদের বাম হাতে দেওয়া হয় 'তাময়ীযান লাহুম ওয়া খিযয়ান ওয়া আরান ওয়া ফাদীহাতান'। অর্থাৎ তাদের আলাদা করে চিনিয়ে দিতে, আর লাঞ্ছনা, লজ্জা ও প্রকাশ্য অপমান হিসেবে। তাঁর ব্যাখ্যায় হাতটাই লোকটির উপর যা ঘটছে তার প্রথম অংশ। একটা লাইনও পড়ার আগে আমলনামা যেভাবে তার কাছে পৌঁছায়, সেটাই সবার সামনে তাকে আলাদা করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Wishing Not to Know",
          "bn": "না জানার আকুতি"
        },
        "p": [
          {
            "en": "Then the speech: ya laytani lam uta kitabiyah, oh, I wish I had not been given my record. Ya layta is a particle of wishing. What he wishes for is narrow and exact. He does not wish the record said something else, or that its pages were fewer. He wishes it had never been handed to him at all. At-Tabari restates the clause with the more common verb, ya laytani lam u'ta kitabiyah, and the Muyassar does the same, dropping the final ha: ya laytani lam u'ta kitabi.",
            "bn": "এরপর তার কথা: ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ, হায়, আমাকে যদি আমার আমলনামা না দেওয়া হত! 'ইয়া লাইতা' আকাঙ্ক্ষা প্রকাশের শব্দ। লোকটি যা চায়, তা খুব সীমিত, খুব নির্দিষ্ট। সে চায় না যে খাতায় অন্য কিছু লেখা থাকুক, কিংবা পাতা কম হোক। সে চায়, খাতাটা যেন তার হাতে দেওয়াই না হত। তাবারী বাক্যটি বলেন বেশি প্রচলিত ক্রিয়া দিয়ে: 'ইয়া লাইতানী লাম উ'তা কিতাবিয়াহ'। মুয়াসসারও তাই করে, তবে শেষের 'হা' বাদ দিয়ে: 'ইয়া লাইতানী লাম উ'তা কিতাবী'।"
          },
          {
            "en": "The commentators name the feeling behind the sentence, and each uses a different word. Ibn Kathir says that at that moment yandamu ghayat an-nadam, he regrets with the utmost regret, which the abridgement gives as he will be very remorseful. The Muyassar has him speak nadiman mutahassiran, regretful and consumed with sorrow. As-Sa'di says he speaks min al-hamm wa-l-ghamm wa-l-khizy, out of worry, grief and disgrace. None of them softens the moment, and none of them adds a reply to it.",
            "bn": "বাক্যটির পেছনের অনুভূতির নাম দেন তাফসীরকারেরা, প্রত্যেকে ভিন্ন শব্দে। ইবন কাসীর বলেন, তখন সে 'ইয়ানদামু গায়াতান নাদাম', চরম অনুশোচনায় ভোগে। সংক্ষিপ্ত ইংরেজি সংস্করণে আছে, সে ভীষণ অনুতপ্ত হবে। মুয়াসসারের ভাষায় সে কথাটা বলে 'নাদিমান মুতাহাসসিরান', অনুতাপে আর আফসোসে পুড়তে পুড়তে। সা'দী বলেন, সে বলে 'মিনাল হাম্মি ওয়াল গাম্মি ওয়াল খিযই', দুশ্চিন্তা, দুঃখ আর লাঞ্ছনা থেকে। তাঁদের কেউ মুহূর্তটাকে নরম করেন না। কেউ এর কোনো জবাবও জুড়ে দেন না।"
          },
          {
            "en": "As-Sa'di is also the one who says why. He wishes it, in his words, because he is given tidings of entering the Fire and of al-khasara al-abadiyya, everlasting loss. On that reading the record does more than list what was done. Being handed it in that hand is itself the news, and the wish not to have received it is a wish not to have heard what it announces. The verse does not spell this out; it is as-Sa'di's gloss, and among these sources he alone states a reason in so many words.",
            "bn": "কেন এ ইচ্ছা, সেটাও বলেন সা'দী। তাঁর ভাষায়, কারণ তাকে জাহান্নামে প্রবেশের আর 'আল-খাসারাতুল আবাদিয়্যাহ', চিরস্থায়ী ক্ষতির খবর দেওয়া হচ্ছে। এ ব্যাখ্যায় আমলনামা শুধু কৃতকর্মের ফর্দ নয়। ওই হাতে সেটা পাওয়াই এক খবর। তাই তা না পাওয়ার ইচ্ছা আসলে সেই খবর না শোনার ইচ্ছা। আয়াত নিজে কথাটা খুলে বলে না। এটা সা'দীর ব্যাখ্যা, আর এসব সূত্রের মধ্যে কেবল তিনিই স্পষ্ট ভাষায় একটা কারণ উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Black Book Turned Over",
          "bn": "উল্টে দেখা কালো খাতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi's comment on this verse is a long narrated description, and it needs a caution first. The passage fetched for this verse begins partway through, with the words and if the man was a head in evil, so the narrator and the chain do not appear in it. It is reported here as something al-Qurtubi carries, not as a hadith, and nothing else in this article rests on it. It describes one kind of man: a leader in evil who called people to it, commanded it and gathered many followers.",
            "bn": "এ আয়াতে কুরতুবীর আলোচনা একটি দীর্ঘ বর্ণনা। তবে আগে একটা সতর্কতা দরকার। এ আয়াতে তাঁর তাফসীরের যে অংশটুকু সামনে আছে, তা শুরু হয়েছে মাঝপথ থেকে, এই কথায়: 'আর লোকটি যদি মন্দের নেতা হয়'। ফলে বর্ণনাকারী কে, সনদ কী, তা এতে নেই। তাই এখানে এটিকে হাদীস হিসেবে নয়, কুরতুবী যা উদ্ধৃত করেছেন সেভাবেই রাখা হল। এ প্রবন্ধের আর কোনো কথা এর উপর দাঁড়িয়ে নেই। বর্ণনাটি এক বিশেষ ধরনের মানুষের। সে ছিল মন্দের নেতা, মানুষকে সেদিকে ডাকত, তার হুকুম দিত, আর তার পেছনে জুটেছিল অনেক অনুসারী।"
          },
          {
            "en": "He is called by his own name and his father's name, and comes forward to his reckoning. A black book with black writing is brought out for him, his good deeds on the inside and his evil deeds on the outside. He reads the good deeds first and thinks he will be saved, until at the end he finds: these are your good deeds, and they have been turned back on you. His face darkens and he despairs of any good. He turns the book over to the evil deeds, and at their end he finds: these are your evil deeds, doubled against you.",
            "bn": "তাকে তার নিজের নাম আর বাবার নাম ধরে ডাকা হয়। সে এগিয়ে আসে হিসাব দিতে। তার জন্য বের করা হয় কালো এক খাতা, লেখাও কালো। ভেতরের দিকে তার নেকি, বাইরের দিকে তার গুনাহ। প্রথমে সে নেকিগুলো পড়ে, আর ভাবে সে বেঁচে যাবে। শেষে গিয়ে দেখে লেখা আছে: এই তোমার নেকি, আর এগুলো তোমাকে ফিরিয়ে দেওয়া হয়েছে। তার চেহারা কালো হয়ে যায়, কল্যাণের সব আশা সে হারিয়ে ফেলে। তারপর খাতা উল্টে সে গুনাহগুলো পড়ে। সেগুলোর শেষে দেখে লেখা: এই তোমার গুনাহ, আর এগুলো তোমার উপর দ্বিগুণ করা হয়েছে।"
          },
          {
            "en": "The text pauses at once on that last word. Doubled, it explains, means that the punishment is multiplied for him; it does not mean that anything he did not do is added to him. Then he is enlarged for the Fire, his face blackened, clothed in garments of tar, and told: go to your companions and tell them that each of them has the like of this. He goes, the narration ends, saying: ya laytani lam uta kitabiyah. In this telling the verse is spoken after the reading, on his way to his companions.",
            "bn": "শেষ শব্দটিতে এসে বর্ণনা সঙ্গে সঙ্গে থেমে ব্যাখ্যা দেয়। দ্বিগুণ মানে তার শাস্তি বাড়িয়ে দেওয়া হবে। এর মানে এই নয় যে, যা সে করেনি তা তার ঘাড়ে চাপানো হবে। এরপর জাহান্নামের জন্য তার দেহ বিশাল করা হয়, চেহারা কালো হয়ে যায়, তাকে আলকাতরার পোশাক পরানো হয়। তাকে বলা হয়: তোমার সঙ্গীদের কাছে যাও, তাদের জানিয়ে দাও যে তাদের প্রত্যেকের জন্য এমনটাই আছে। বর্ণনার শেষে দেখা যায়, সে চলে যাচ্ছে আর বলছে: ইয়া লাইতানী লাম ঊতা কিতাবিয়াহ। এ বর্ণনা অনুযায়ী আয়াতের কথাটা সে বলে পড়া শেষ করার পর, সঙ্গীদের কাছে যাওয়ার পথে।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Left Hand Is Meant",
          "bn": "বাম হাত কার, সে প্রশ্ন"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what it describes: a man on the Day of Reckoning receiving his record in his left hand and wishing he had not. It licenses nothing against any living person or any community. It gives no one a test for deciding who among the people they know belongs to the left hand, and no one's standing with Allah can be read from it. Ibn Kathir's al-ashqiya' and as-Sa'di's ahl ash-shaqa', the people of wretchedness, name an outcome of that Day, not a label for anyone now.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, তা-ই বর্ণনা করে: হিসাবের দিনে একজন মানুষ বাম হাতে আমলনামা পাচ্ছে, আর চাইছে যেন তা না পেত। এ আয়াত কোনো জীবিত মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। পরিচিতদের মধ্যে কে বাম হাতের দলে, তা বিচার করার কোনো মাপকাঠিও এটি কাউকে দেয় না। আল্লাহর কাছে কার কী অবস্থান, তাও এ থেকে পড়া যায় না। ইবন কাসীরের 'আল-আশকিয়া' আর সা'দীর 'আহলুশ শাকা', মানে হতভাগার দল, সেদিনের পরিণতির নাম। আজ কারও গায়ে লাগানোর তকমা নয়।"
          },
          {
            "en": "Even al-Qurtubi's narration, which does describe a particular kind of man, shows him only at the moment his record is read; it does not tell its listener whom to point at. For anyone reading this verse, the record it is really about is the reader's own. In 69:24 the reward is for what was put forth in the days past. For the person reading, those days are still today, and the pages are still being filled. That is the use the verse leaves open: to read one's own record while it can still change.",
            "bn": "কুরতুবীর বর্ণনা নির্দিষ্ট এক ধরনের মানুষের কথা বলে ঠিকই। তবু তাকে দেখায় শুধু আমলনামা পড়ার মুহূর্তে। কার দিকে আঙুল তুলতে হবে, তা শ্রোতাকে বলে দেয় না। যে-ই এ আয়াত পড়ুক, আসলে আয়াতটি তার নিজের আমলনামার কথাই বলছে। ৬৯:২৪ আয়াতে পুরস্কার দেওয়া হয় বিগত দিনগুলোতে আগে পাঠানো আমলের জন্য। পাঠকের জন্য সেই দিনগুলো এখনো চলছে, আজও তারই একটা, আর পাতাগুলো এখনো ভরছে। আয়াতটি কাজে লাগানোর পথ তাই একটাই খোলা: বদলানোর সুযোগ থাকতে থাকতে নিজের আমলনামা নিজে পড়ে দেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Speech Runs On",
          "bn": "কথা যেখানে গড়িয়ে চলে"
        },
        "p": [
          {
            "en": "The man does not stop at this sentence. Ibn Kathir quotes the following verses with it in a single quotation, and the Muyassar reads 69:25 to 69:29 as a continuous speech of regret: his wish not to have known his recompense, his wish that the death he died in the world had ended his affair, the wealth that did not help him, and his hujja, his argument, that is gone. Each of those clauses has its own verse, and they are left to their own entries.",
            "bn": "লোকটি এই বাক্যে থেমে থাকে না। ইবন কাসীর পরের আয়াতগুলো এর সঙ্গে এক উদ্ধৃতিতেই আনেন। মুয়াসসার ৬৯:২৫ থেকে ৬৯:২৯ পর্যন্ত পুরোটাকে আফসোসের একটানা কথা হিসেবে পড়ে। সে চায়, নিজের প্রতিফল কী তা যদি না জানত। চায়, দুনিয়ায় যে মৃত্যু সে বরণ করেছিল, তাতেই যদি সব চুকে যেত। যে সম্পদ তার কোনো কাজে আসেনি, আর তার 'হুজ্জাহ', মানে যে যুক্তি দিয়ে সে নিজের পক্ষে কথা বলত, তা হারিয়ে গেছে। এ কথাগুলোর প্রতিটির নিজস্ব আয়াত আছে, তাই সেগুলোর আলোচনা সেসব আয়াতের জন্যই রইল।"
          },
          {
            "en": "No hadith is attached to this verse in the tafsirs fetched for it. Ibn Kathir's abridgement, which treats 69:25 to 69:34 as a block, cites narrations only under the later verses of that block, not under this verse, so none is reported here. Nor does any of these sources give an occasion of revelation for the verse. What they give is enough: the record named as a record of deeds, the left hand described and explained, and the wish glossed as regret, sorrow and the dread of what the record announces.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তাতে আয়াতটির সঙ্গে যুক্ত কোনো হাদীস নেই। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ৬৯:২৫ থেকে ৬৯:৩৪ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে বর্ণনাগুলো এসেছে ওই অংশের পরের আয়াতগুলোর অধীনে, এ আয়াতের অধীনে নয়। তাই এখানে কোনোটিই উল্লেখ করা হল না। এ সূত্রগুলোর কোনোটি আয়াতটির শানে নুযূলও উল্লেখ করে না। তারা যা দেয়, তাই যথেষ্ট। আমলনামা মানে আমলের খাতা। বাম হাতে দেওয়ার বর্ণনা আর কারণ। আর ইচ্ছাটার ব্যাখ্যা: অনুতাপ, আফসোস, আর খাতাটা যে খবর দেয় তার ভয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Pages Still Open Today",
          "bn": "আজও খোলা পাতা"
        },
        "p": [
          {
            "en": "Set the two moments side by side, as the passage sets them. In 69:24 a reward is given for what was sent ahead in days now gone. In our verse a man stands holding the same kind of document and wishes it had never reached him. He is not asking for a second chance in that sentence; he is asking not to have been given what he was given. The verse records the wish and grants nothing. The record stays in his hand, and the passage moves on.",
            "bn": "অংশটি যেভাবে মুহূর্ত দুটিকে পাশাপাশি রাখে, সেভাবে দেখুন। ৬৯:২৪ আয়াতে পুরস্কার মেলে চলে যাওয়া দিনগুলোতে আগে পাঠানো আমলের জন্য। আমাদের আয়াতে একজন মানুষ সেই একই ধরনের খাতা হাতে দাঁড়িয়ে আছে, আর চাইছে, এটা যদি তার কাছে না পৌঁছাত! এ বাক্যে সে দ্বিতীয় সুযোগ চাইছে না। সে চাইছে, যা তাকে দেওয়া হয়েছে তা যেন দেওয়াই না হত। আয়াত ইচ্ছাটুকু লিখে রাখে, মঞ্জুর করে না কিছুই। আমলনামা তার হাতেই থেকে যায়, আর বর্ণনা সামনে এগিয়ে যায়।"
          },
          {
            "en": "That is a wish a reader can make unnecessary in advance. The pages being written today are the ones that will be handed over on that Day. A wrong put right, a debt repaid, a prayer kept, a repentance made while it can still be made: these are changes that are possible now and will not be possible then. The verse's question to its reader is not about anyone else's left hand. It is whether, on that Day, I will be glad to have been given mine.",
            "bn": "পাঠক চাইলে এই ইচ্ছাকে আগেভাগেই অপ্রয়োজনীয় করে তুলতে পারেন। আজ যে পাতাগুলো লেখা হচ্ছে, সেদিন সেগুলোই হাতে তুলে দেওয়া হবে। একটা অন্যায় শুধরে নেওয়া, একটা ঋণ শোধ করা, একটা নামাজ ঠিকমতো আদায় করা, তওবার সময় থাকতে তওবা করা: এসব বদল এখন সম্ভব, তখন আর সম্ভব হবে না। এ আয়াতের প্রশ্ন অন্য কারও বাম হাত নিয়ে নয়। প্রশ্নটা হল, সেদিন আমার আমলনামা হাতে পেয়ে আমি খুশি হব কি না।"
          }
        ]
      }
    ]
  },
  "69:31": {
    "sections": [
      {
        "h": {
          "en": "Three Words After a Lament",
          "bn": "বিলাপের জবাবে তিন শব্দ"
        },
        "p": [
          {
            "en": "Thumma al-jahima sallûhu: then into the Blaze, make him burn. The verse is three words in the Arabic, and it is the second step in a short run of commands. The man given his record in his left hand has spoken from 69:25 to 69:29, ending on his wealth that did not avail him and his authority that has perished. Ibn Kathir's abridgement passes straight from that lament to the reply: at this Allah says, seize him and fetter him, then throw him in the blazing Fire.",
            "bn": "ছুম্মাল জাহীমা সাল্লূহু: তারপর ওকে জাহীমে ফেলে পোড়াও। আরবিতে আয়াতটিতে শব্দ মাত্র তিনটি, আর এটি পরপর কয়েকটি নির্দেশের দ্বিতীয় ধাপ। যার আমলনামা বাম হাতে দেওয়া হয়েছে, সেই লোক ৬৯:২৫ থেকে ৬৯:২৯ পর্যন্ত কথা বলেছে। তার শেষ কথা ছিল, ধন-সম্পদ কোনো কাজে আসেনি আর ক্ষমতাও ধ্বংস হয়ে গেছে। ইবন কাসীরের সংক্ষিপ্ত তাফসীর সেই বিলাপ থেকে সরাসরি জবাবে চলে যায়: তখন আল্লাহ বলবেন, ওকে ধর, বেড়ি পরাও, তারপর জ্বলন্ত আগুনে নিক্ষেপ কর।"
          },
          {
            "en": "The left-hand record itself, and what the man wishes when he receives it, belong to 69:25 and its neighbours and are not repeated here. This entry stays with the second step of the command: the name al-Jahim, the verb sallûhu, and the small word thumma that ties them to what came before. The commentaries fetched for this verse are brief, most of them a single clause. They do not paint the scene. They gloss the verb, name the ones addressed, and move on, and this article follows them in that.",
            "bn": "বাম হাতের আমলনামা আর তা হাতে পেয়ে লোকটির আফসোস, এ দুটো ৬৯:২৫ ও তার পাশের আয়াতগুলোর বিষয়, এখানে তার পুনরাবৃত্তি হবে না। এ লেখা থাকবে নির্দেশের দ্বিতীয় ধাপ নিয়েই। তাতে আছে আল-জাহীম নামটি, সাল্লূহু ক্রিয়াটি, আর ছোট্ট শব্দ ছুম্মা, যা এ আয়াতকে আগের কথার সঙ্গে জোড়ে। এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, সেগুলো খুবই সংক্ষিপ্ত, বেশির ভাগ একটিমাত্র বাক্যাংশ। তাঁরা দৃশ্যের বিস্তারিত ছবি আঁকেন না। ক্রিয়াটির অর্থ বলেন, কাদের বলা হচ্ছে তা জানান, তারপর এগিয়ে যান। এ লেখাও সেই পথেই চলবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken to the Keepers",
          "bn": "নির্দেশ জাহান্নামের প্রহরীদের প্রতি"
        },
        "p": [
          {
            "en": "Sallûhu is a plural command, addressed to a group, and the verse does not name them. The Muyassar, which explains 69:30 to 69:34 as one passage, opens with the words yuqalu li-khazanati jahannam: it will be said to the keepers of Jahannam. Ibn Kathir's abridgement says the same in its own terms. He will command the guardians of Hell to remove him forcibly from the gathering place, to fetter him, and then to carry him off to Hell and cast him into it.",
            "bn": "সাল্লূহু বহুবচনের নির্দেশ, একদল লোককে বলা হচ্ছে, কিন্তু আয়াত তাদের নাম বলে না। মুয়াসসার ৬৯:৩০ থেকে ৬৯:৩৪ পর্যন্ত এক টানা ব্যাখ্যা করে, আর শুরু করে এই কথায়: ইউকালু লি-খাযানাতি জাহান্নাম, জাহান্নামের প্রহরীদের বলা হবে। ইবন কাসীরের সংক্ষিপ্ত তাফসীরও নিজের ভাষায় একই কথা বলে। আল্লাহ জাহান্নামের প্রহরীদের হুকুম দেবেন, তাকে হাশরের ময়দান থেকে জোর করে সরিয়ে নিতে, বেড়ি পরাতে, তারপর জাহান্নামে নিয়ে গিয়ে তাতে ফেলে দিতে।"
          },
          {
            "en": "Ma'arif al-Qur'an, in its note on 69:30, which it groups with our verse, speaks of the instruction being given to the angels, and then adds a caution of its own: the wording of the verse does not mention who will seize him and who will truss him up. It goes on to say that narratives indicate that, when the order is issued, everything will rush to apprehend him like submissive servants. It names no narration for this, so it is reported here as Ma'arif's statement only, and nothing is built on it.",
            "bn": "মাআরিফুল কুরআন ৬৯:৩০ আয়াতের আলোচনায়, যার সঙ্গে আমাদের আয়াতটিকে সে একসাথে রেখেছে, বলে যে নির্দেশটি দেওয়া হবে ফেরেশতাদের। তারপর নিজেই একটি সতর্কতা যোগ করে: কে তাকে ধরবে আর কে বাঁধবে, আয়াতের শব্দে তার উল্লেখ নেই। এরপর বলে, বিভিন্ন বর্ণনা থেকে জানা যায়, হুকুম জারি হলে সবকিছু অনুগত খাদেমের মতো তাকে ধরতে ছুটে আসবে। কোন বর্ণনা, তা সে উল্লেখ করেনি। তাই কথাটি এখানে শুধু মাআরিফের বক্তব্য হিসেবে রইল, এর উপর আর কিছু দাঁড় করানো হলো না।"
          },
          {
            "en": "Notice what the grammar does to the man. In 69:25 to 69:29 he is the speaker, and his sentences are full of me and mine: my record, my account, my wealth, my authority. From 69:30 he is no longer the subject of any verb. He is the pronoun hu fastened to the end of each command: seize him, shackle him, make him burn. Others act, on an order that is not his, and the one who spoke so much a moment ago is not given another word.",
            "bn": "ব্যাকরণ লোকটিকে কোথায় নামিয়ে দেয়, খেয়াল করুন। ৬৯:২৫ থেকে ৬৯:২৯ পর্যন্ত সে-ই বক্তা, আর তার প্রতিটি বাক্য ভরা 'আমার' দিয়ে: আমার আমলনামা, আমার হিসাব, আমার সম্পদ, আমার ক্ষমতা। ৬৯:৩০ থেকে কোনো ক্রিয়ার কর্তা আর সে নয়। প্রতিটি হুকুমের শেষে লেগে থাকা 'হু' সর্বনামটুকুই সে: ওকে ধর, ওকে বাঁধ, ওকে পোড়াও। কাজ করছে অন্যরা, এমন এক হুকুমে যা তার নয়। আর একটু আগেও যে এত কথা বলছিল, তাকে আর একটি কথা বলারও সুযোগ দেওয়া হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Explained by Its Own Root",
          "bn": "নিজের ধাতু দিয়েই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Sallûhu is the doubled form of a verb from the root s-l-y, and two of the commentators explain it with the simple verb of that same root. At-Tabari writes: thumma fi nari jahannama awriduhu li-yasla fiha, then into the fire of Jahannam bring him, so that he burns in it. His clause does two things. Awriduhu, bring him in, makes the command one of conveying the man to the Fire. Li-yasla fiha, so that he burns in it, then states what the Fire is for.",
            "bn": "সাল্লূহু স-ল-য় ধাতুর দ্বিত্ব রূপের একটি ক্রিয়া। দুজন মুফাসসির একই ধাতুর সাধারণ ক্রিয়া দিয়ে এর ব্যাখ্যা করেন। তাবারী লেখেন: ছুম্মা ফী নারি জাহান্নামা আওরিদূহু লি-ইয়াসলা ফীহা, তারপর জাহান্নামের আগুনে তাকে পৌঁছে দাও, যাতে সে তাতে পোড়ে। তাঁর বাক্যাংশে দুটো কাজ হয়। আওরিদূহু, তাকে নিয়ে যাও, এতে হুকুমটা হয়ে দাঁড়ায় লোকটিকে আগুন পর্যন্ত পৌঁছে দেওয়ার। আর লি-ইয়াসলা ফীহা, যাতে সে তাতে পোড়ে, এতে বলা হয় আগুন তার সঙ্গে কী করবে।"
          },
          {
            "en": "Al-Qurtubi's entire comment on the verse is four words: ay ij'aluhu yasla al-jahim, that is, make him burn in al-Jahim. He too explains sallûhu by yasla, so that the command is to cause the man to suffer the burning, not only to place him somewhere. Between them, at-Tabari and al-Qurtubi give the core sense on which the other glosses build. The keepers are told where the man is to go, and in the same word they are told what that place is to do to him.",
            "bn": "এ আয়াতে কুরতুবীর পুরো মন্তব্যে শব্দ মাত্র চারটি: আই ইজ'আলূহু ইয়াসলাল জাহীম, অর্থাৎ তাকে এমন অবস্থায় ফেলো যেন সে জাহীমে পোড়ে। তিনিও সাল্লূহুর ব্যাখ্যা করেন ইয়াসলা দিয়ে। ফলে হুকুমটা শুধু কোথাও রেখে আসার নয়, তাকে পোড়ার কষ্ট ভোগ করানোর। অন্য ব্যাখ্যাগুলো যে মূল অর্থের উপর দাঁড়ায়, তাবারী আর কুরতুবী মিলে সেটাই দেন। প্রহরীদের জানানো হয় লোকটি কোথায় যাবে, আর একই শব্দে জানানো হয় সে জায়গা তার সঙ্গে কী করবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Enter, Endure, Plunge, Turn",
          "bn": "প্রবেশ, সহ্য, ডুবানো, উল্টানো"
        },
        "p": [
          {
            "en": "The other commentators reach for different verbs. Al-Baghawi writes: ay adkhiluhu al-jahim, that is, make him enter al-Jahim. The Muyassar uses the same verb and adds a purpose: thumma adkhiluhu al-jahima li-yuqasiya harraha, then make him enter al-Jahim, to suffer its heat. Ibn Kathir in his Arabic text writes: ay ighmuruhu fiha, that is, submerge him in it. The English abridgement keeps both movements, carry him off to Hell and cast him into it, and then adds, meaning they will submerge him in it.",
            "bn": "অন্য মুফাসসিররা ভিন্ন ভিন্ন ক্রিয়া বেছে নেন। বাগাভী লেখেন: আই আদখিলূহুল জাহীম, অর্থাৎ তাকে জাহীমে প্রবেশ করাও। মুয়াসসার একই ক্রিয়া নেয়, সঙ্গে উদ্দেশ্যও জুড়ে দেয়: ছুম্মা আদখিলূহুল জাহীমা লি-ইউকাসিয়া হাররাহা, তারপর তাকে জাহীমে ঢোকাও, যাতে সে এর তাপ সহ্য করে। ইবন কাসীর তাঁর আরবি তাফসীরে লেখেন: আই ইগমুরূহু ফীহা, অর্থাৎ তাকে তাতে ডুবিয়ে দাও। ইংরেজি সংক্ষিপ্ত সংস্করণে দুটো ধাপই আছে, তাকে জাহান্নামে নিয়ে গিয়ে তাতে ফেলে দাও। তারপর যোগ করে, অর্থাৎ তাকে তাতে ডুবিয়ে দেবে।"
          },
          {
            "en": "As-Sa'di's gloss is the most concrete: ay qallibuhu 'ala jamriha wa-lahabiha, that is, turn him over upon its embers and its flame. Where al-Baghawi speaks of entering, and Ibn Kathir of being plunged under, as-Sa'di speaks of being turned. These are not rival views. No commentator here rejects another's wording, and none of them goes beyond the verse: no fetched gloss on 69:31 describes the layout of the Fire or adds a narration to the verb. Each picks out one side of the same command.",
            "bn": "সা'দীর ব্যাখ্যা সবচেয়ে বাস্তব ছবি দেয়: আই কাল্লিবূহু 'আলা জামরিহা ওয়া লাহাবিহা, অর্থাৎ এর জ্বলন্ত অঙ্গার আর শিখার উপর তাকে উল্টে-পাল্টে দাও। বাগাভী বলেন প্রবেশের কথা, ইবন কাসীর ডুবিয়ে দেওয়ার, আর সা'দী উল্টে দেওয়ার। এগুলো পরস্পরবিরোধী মত নয়। এখানে কোনো মুফাসসির অন্যের ভাষা নাকচ করেননি, আর কেউ আয়াতের সীমাও পেরোননি। ৬৯:৩১-এর কোনো ব্যাখ্যায় জাহান্নামের গঠনের বর্ণনা নেই, ক্রিয়াটির সঙ্গে কোনো বর্ণনাও জোড়া হয়নি। প্রত্যেকে একই হুকুমের একেকটি দিক তুলে ধরেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Name Carries",
          "bn": "আল-জাহীম নামের ভেতরে"
        },
        "p": [
          {
            "en": "The verse names the place al-Jahim. At-Tabari's paraphrase replaces the word with nar jahannam, the fire of Jahannam, so that for him the two names point to one place. The Muyassar keeps al-Jahim and describes it only through harr, its heat. As-Sa'di describes it through jamr and lahab, its embers and its flame. Ibn Kathir's English abridgement renders it the blazing Fire, and the English translation shown with the verse, Hellfire. None of these sources adds anything about the name beyond these words.",
            "bn": "আয়াতে জায়গাটির নাম আল-জাহীম। তাবারী তাঁর ব্যাখ্যায় শব্দটির জায়গায় বসান নারু জাহান্নাম, জাহান্নামের আগুন। অর্থাৎ তাঁর কাছে দুটি নাম একই জায়গার। মুয়াসসার আল-জাহীম শব্দটিই রাখে, আর এর পরিচয় দেয় শুধু হার্র দিয়ে, মানে এর তাপ। সা'দী পরিচয় দেন জামর ও লাহাব দিয়ে, এর অঙ্গার ও শিখা। ইবন কাসীরের ইংরেজি সংক্ষিপ্ত সংস্করণ একে বলে জ্বলন্ত আগুন, আর আয়াতের সঙ্গে দেখানো ইংরেজি অনুবাদে এর নাম Hellfire, জাহান্নামের আগুন। এ নাম নিয়ে এর বেশি কিছু এ উৎসগুলোর কোনোটিতে নেই।"
          },
          {
            "en": "One more feature sits in plain view in the Arabic. The name comes before the verb: al-jahima sallûhu, the Blaze, make him burn, rather than make him burn in the Blaze. The commentaries fetched for this verse do not discuss that order or give it a meaning, so this article gives it none. What can be said without going past them is how they paraphrase it. At-Tabari keeps the place first, fi nari jahannama awriduhu. Al-Baghawi, the Muyassar, al-Qurtubi, as-Sa'di and Ibn Kathir all put the verb first.",
            "bn": "আরবিতে আরও একটি বিষয় চোখের সামনেই আছে। নামটি ক্রিয়ার আগে এসেছে: আল-জাহীমা সাল্লূহু। শব্দে শব্দে বললে, জাহীম, তাতে ওকে পোড়াও। ক্রিয়া আগে রেখে বলা হয়নি। এ আয়াতের জন্য আনা তাফসীরগুলো এ ক্রম নিয়ে আলোচনা করেনি, এর কোনো অর্থও বলেনি, তাই এ লেখাও কোনো অর্থ জুড়ছে না। তাঁদের সীমা না পেরিয়ে শুধু এটুকু বলা যায় যে তাঁরা বাক্যটি কীভাবে নিজের ভাষায় বলেছেন। তাবারী জায়গার নামটি আগেই রাখেন: ফী নারি জাহান্নামা আওরিদূহু। বাগাভী, মুয়াসসার, কুরতুবী, সা'দী ও ইবন কাসীর সবাই ক্রিয়া আগে আনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word That Joins",
          "bn": "‘তারপর’ শব্দের বাঁধন"
        },
        "p": [
          {
            "en": "The verse opens with thumma, then, and so does 69:32. Our verse is the middle step of three: seize and shackle in 69:30, the Blaze here, and the chain after it. The Muyassar runs the steps on with the same word: fa-ajma'u yadayhi ila 'unuqihi bil-aghlal, thumma adkhiluhu al-jahim, gather his hands to his neck with shackles, then make him enter al-Jahim, and then, thumma, into a chain. Ibn Kathir's abridgement keeps the same order: fetter him, then carry him off to Hell.",
            "bn": "আয়াতটি শুরু হয় ছুম্মা দিয়ে, যার অর্থ তারপর, আর ৬৯:৩২ আয়াতও তা-ই। আমাদের আয়াতটি তিনটি ধাপের মাঝেরটি। ৬৯:৩০ আয়াতে ধরা ও বেড়ি পরানো, এখানে জাহীম, আর এর পরে শিকল। মুয়াসসার একই শব্দ দিয়ে ধাপগুলো পরপর সাজায়: ফাজমা'ঊ ইয়াদাইহি ইলা 'উনুকিহী বিল-আগলাল, ছুম্মা আদখিলূহুল জাহীম। অর্থাৎ বেড়ি দিয়ে তার দুই হাত গলার সঙ্গে বেঁধে দাও, তারপর তাকে জাহীমে ঢোকাও, তারপর আবার ছুম্মা, একটি শিকলে। ইবন কাসীরের সংক্ষিপ্ত তাফসীরও একই ক্রম রাখে: বেড়ি পরাও, তারপর জাহান্নামে নিয়ে যাও।"
          },
          {
            "en": "A reader may ask whether then marks a later moment here, or a heavier stage than the shackle. The sources fetched for this verse do not take up that question. None of them says whether the Fire follows the binding after an interval, and none says the word marks a rise in severity. They simply carry thumma into their own sentences. So the article reports the sequence as they give it and leaves the force of the word without a ruling. The chain, and Ibn Kathir's material on it, belong to 69:32.",
            "bn": "পাঠকের মনে প্রশ্ন জাগতে পারে, এখানে 'তারপর' কি পরের কোনো মুহূর্ত বোঝায়, নাকি বেড়ির চেয়ে কঠিন কোনো ধাপ? এ আয়াতের জন্য আনা উৎসগুলো এ প্রশ্ন তোলেনি। বেড়ি পরানোর কিছুক্ষণ পর আগুন আসে কি না, তা কেউ বলেননি। শব্দটি শাস্তির মাত্রা বাড়ার ইঙ্গিত, এমন কথাও কেউ বলেননি। তাঁরা শুধু ছুম্মা শব্দটি নিজেদের বাক্যে তুলে এনেছেন। তাই এ লেখা ধাপগুলোর ক্রম তাঁদের মতোই জানাচ্ছে, শব্দটির জোর নিয়ে কোনো ফয়সালা দিচ্ছে না। শিকল আর তা নিয়ে ইবন কাসীরের আলোচনা ৬৯:৩২ আয়াতের বিষয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Grounds Stated Two Verses On",
          "bn": "দুই আয়াত পরে কারণের কথা"
        },
        "p": [
          {
            "en": "The commands are not left without grounds. 69:33 and 69:34 open with innahu, indeed he: he did not believe in Allah, the Most Great, nor did he urge the feeding of the poor. The Muyassar reads these verses as the reason for the whole sequence. He did not affirm that Allah is the true God, alone, without partner; he did not act on His guidance; and he did not urge people in the world to feed the needy. Ibn Kathir's abridgement explains the pair as the right of Allah and the right of His creation, both left unpaid.",
            "bn": "হুকুমগুলো কারণ ছাড়া আসেনি। ৬৯:৩৩ ও ৬৯:৩৪ আয়াত শুরু হয় ইন্নাহু দিয়ে, নিশ্চয়ই সে: সে মহান আল্লাহর উপর ঈমান আনত না, আর মিসকীনকে খাওয়াতে উৎসাহ দিত না। মুয়াসসারের পাঠে এ দুই আয়াত পুরো ধারাবাহিকতার কারণ। সে বিশ্বাস করত না যে আল্লাহই একমাত্র সত্য ইলাহ, তাঁর কোনো শরিক নেই। তাঁর দেখানো পথে সে আমল করত না। আর দুনিয়াতে মানুষকে অভাবীদের খাওয়াতে উৎসাহ দিত না। ইবন কাসীরের সংক্ষিপ্ত তাফসীর এ দুটিকে ব্যাখ্যা করে আল্লাহর হক আর তাঁর সৃষ্টির হক হিসেবে, যার কোনোটিই সে আদায় করেনি।"
          },
          {
            "en": "Those two verses have their own entries, and this one does not develop them. Their place still matters for reading ours. The text does not tie the Fire in 69:31 to the man's family, his tribe or his standing among people. As the Muyassar and Ibn Kathir read the passage, it ties it to what he believed and to what he did, or failed to do, for the hungry. A command of three words is followed, two verses later, by its stated reasons, and both commentators read the command and the reasons together.",
            "bn": "ওই দুই আয়াতের আলাদা আলোচনা আছে, এখানে সেগুলোর বিস্তার হবে না। তবে আমাদের আয়াত বুঝতে ওদের অবস্থান গুরুত্বপূর্ণ। ৬৯:৩১ আয়াতের আগুনকে কুরআন লোকটির বংশ, গোত্র বা সমাজে তার মর্যাদার সঙ্গে জোড়েনি। মুয়াসসার আর ইবন কাসীরের পাঠে আয়াতগুলো তা জোড়ে তার বিশ্বাসের সঙ্গে, আর ক্ষুধার্তের জন্য সে কী করেছে বা করেনি, তার সঙ্গে। তিনটি শব্দের একটি হুকুম, তারপর দুই আয়াত পরে তার ঘোষিত কারণ। এ দুই মুফাসসির হুকুম আর কারণকে একসঙ্গেই পড়েন।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody's Verdict to Pass",
          "bn": "এ রায় দেওয়ার অধিকার কারও নয়"
        },
        "p": [
          {
            "en": "This must be said plainly. The verse describes what it describes: a command given on the Day of Judgement, by Allah, to the keepers of the Fire, about one who has already been judged. It licenses nothing against any living person or community. It gives no one the right to say of a neighbour, a rival or a people that they are the man of this verse, and it is no tool for sorting people into the saved and the lost. The judging in this passage belongs to that Day and to the One who gives the command.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: বিচার দিবসে আল্লাহ জাহান্নামের প্রহরীদের একটি হুকুম দেবেন, এমন একজনের ব্যাপারে যার বিচার হয়ে গেছে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কোনো প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো জাতিকে 'এ আয়াতের সেই লোক' বলার অধিকার এ কাউকে দেয় না। মানুষকে মুক্তিপ্রাপ্ত আর ধ্বংসপ্রাপ্ত দলে ভাগ করার হাতিয়ারও এ নয়। এ অংশের বিচার সেই দিনের, আর তাঁর, যিনি হুকুম দেন।"
          },
          {
            "en": "No hadith is attached to 69:31 in the tafsirs fetched for it. Ibn Kathir's abridgement, which covers 69:25 to 69:34 together, cites a hadith from Imam Ahmad and at-Tirmidhi under the chain of 69:32, and a last instruction of the Prophet ﷺ under 69:33 and 69:34. Neither is about this verse, so neither is quoted here. None of these sources gives an occasion of revelation, and none cites a parallel verse for this one. What remains is the gloss itself, and for three words it is enough.",
            "bn": "এ আয়াতের জন্য আনা তাফসীরগুলোতে ৬৯:৩১-এর সঙ্গে কোনো হাদীস জোড়া নেই। ইবন কাসীরের সংক্ষিপ্ত তাফসীর ৬৯:২৫ থেকে ৬৯:৩৪ একসাথে আলোচনা করে। সেখানে ইমাম আহমাদ ও তিরমিযীর একটি হাদীস এসেছে ৬৯:৩২ আয়াতের শিকলের প্রসঙ্গে, আর নবী ﷺ-এর শেষ সময়ের একটি নির্দেশ এসেছে ৬৯:৩৩ ও ৬৯:৩৪ আয়াতের প্রসঙ্গে। কোনোটিই এ আয়াত নিয়ে নয়, তাই এখানে উদ্ধৃত হলো না। এ উৎসগুলোর কোনোটি শানে নুযূল দেয়নি, এ আয়াতের সঙ্গে মেলানোর মতো অন্য কোনো আয়াতও উল্লেখ করেনি। বাকি থাকে শব্দের ব্যাখ্যাটুকু, আর তিনটি শব্দের জন্য তা-ই যথেষ্ট।"
          }
        ]
      },
      {
        "h": {
          "en": "While Our Words Still Count",
          "bn": "কথার দাম যতক্ষণ আছে"
        },
        "p": [
          {
            "en": "The man's last words in 69:28 and 69:29 were about what he owned and what he commanded: my wealth, my authority. The reply turns both around. He who gave orders is now the man about whom orders are given, and the things he counted on are not mentioned again. Ibn Kathir's abridgement puts his own thought into words just before the command comes: now the matter has ended with me alone, and I have no helper nor anyone to save me.",
            "bn": "৬৯:২৮ ও ৬৯:২৯ আয়াতে লোকটির শেষ কথাগুলো ছিল তার মালিকানা আর তার হুকুম চালানো নিয়ে: আমার সম্পদ, আমার ক্ষমতা। জবাব দুটোকেই উল্টে দেয়। যে হুকুম দিত, এখন তাকে নিয়েই হুকুম জারি হচ্ছে। আর যেসবের উপর সে ভরসা করত, সেগুলোর নাম আর একবারও আসে না। হুকুম আসার ঠিক আগে লোকটির মনের কথা ইবন কাসীরের সংক্ষিপ্ত তাফসীর এভাবে বলে: এখন সব শেষ, আমি একা, আমার কোনো সাহায্যকারী নেই, বাঁচানোর কেউ নেই।"
          },
          {
            "en": "A reader does not finish such a verse by thinking of someone else. The two reasons named in 69:33 and 69:34 are ones every reader can still examine in himself or herself: belief in Allah, the Most Great, and care that the poor are fed, by giving and by urging others to give. The keepers' command is not ours to give and not ours to carry out. What is ours is the time before that Day, in which those two reasons can still be answered, and our own words still count.",
            "bn": "এমন আয়াত পড়া শেষ করে পাঠক অন্য কারও কথা ভাবতে বসেন না। ৬৯:৩৩ ও ৬৯:৩৪ আয়াতে যে দুটি কারণের কথা, প্রত্যেক পাঠক আজও নিজের ভেতরে তা যাচাই করতে পারেন। একটি মহান আল্লাহর উপর ঈমান। অন্যটি মিসকীন যেন খেতে পায় সে চিন্তা, নিজে দিয়ে এবং অন্যকে দিতে উৎসাহ দিয়ে। প্রহরীদের ওই হুকুম দেওয়া আমাদের কাজ নয়, তা পালন করাও নয়। আমাদের হাতে আছে সেই দিনের আগের সময়টুকু। এ সময়েই ওই দুই কারণের জবাব দেওয়া যায়, আর এখনো আমাদের নিজের কথার দাম আছে।"
          }
        ]
      }
    ]
  },
  "69:35": {
    "sections": [
      {
        "h": {
          "en": "Five Words After the Chain",
          "bn": "শিকলের পরে পাঁচ শব্দ"
        },
        "p": [
          {
            "en": "Fa-laysa lahu al-yawma hahuna hamim: so there is not for him here this Day any devoted friend. The verse is five words long in Arabic. It comes straight after 69:33 and 69:34, which say of the man being seized and chained: indeed, he did not believe in Allah, the Most Great, nor did he urge the feeding of the poor. Our verse opens with fa, so, and then names what he lacks. The commentators fetched for it spend their words on three things: which day is meant, which place, and who a hamim is.",
            "bn": "ফালাইসা লাহুল ইয়াওমা হাহুনা হামীম: কাজেই আজ এখানে তার কোনো অন্তরঙ্গ বন্ধু নেই। আরবীতে আয়াতটি মাত্র পাঁচ শব্দের। ঠিক আগে ৬৯:৩৩ ও ৬৯:৩৪ আয়াতে বলা হয়েছে, যে লোকটিকে ধরে শিকলে বাঁধা হচ্ছে সে মহান আল্লাহর উপর ঈমান আনত না, আর মিসকীনকে খাবার দিতে উৎসাহও দিত না। আমাদের আয়াত শুরু হয় ফা দিয়ে, যার অর্থ কাজেই। তারপর জানিয়ে দেয় তার কী নেই। এ আয়াতের যেসব তাফসীর আনা হয়েছে, সেগুলো তিনটি প্রশ্নেই কথা খরচ করে: কোন দিন, কোন জায়গা, আর হামীম কে।"
          },
          {
            "en": "How the verse connects to the two before it, the sources mostly leave unstated. Only the Muyassar points back in its own wording. It opens its gloss with fa-laysa li-hadha al-kafir, so there is not for this disbeliever, which reaches back to the man described in 69:33. Ma'arif al-Qur'an renders the opening as so, he has no friend here today, and reads 69:35 and 69:36 together. None of them argues a cause from 69:34 to this verse, and this article does not supply a cause on their behalf.",
            "bn": "আগের দুই আয়াতের সঙ্গে এ আয়াতের যোগসূত্র কী, তাফসীরগুলো সে কথা বেশির ভাগই খুলে বলে না। কেবল মুয়াসসার নিজের ভাষায় পেছনের দিকে ইঙ্গিত করে। তার ব্যাখ্যা শুরু হয় ফালাইসা লিহাযাল কাফির দিয়ে, অর্থাৎ এই কাফিরের জন্য নেই। এতে ৬৯:৩৩ আয়াতে বর্ণিত মানুষটির দিকেই ফিরে যাওয়া হয়। মাআরিফুল কুরআন শুরুটা অনুবাদ করে এভাবে: কাজেই আজ এখানে তার কোনো বন্ধু নেই। সেখানে ৬৯:৩৫ ও ৬৯:৩৬ একসঙ্গে পড়া হয়েছে। ৬৯:৩৪ থেকে এ আয়াতে কার্যকারণের কোনো যুক্তি তাঁদের কেউ দেননি। তাঁদের হয়ে এ লেখাও তেমন কিছু জুড়ে দেবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Day, Which Place",
          "bn": "কোন দিন, কোন ঠিকানা"
        },
        "p": [
          {
            "en": "Al-yawma, this Day. At-Tabari identifies it at once: wa-dhalika yawm al-qiyama, and that is the Day of Resurrection. As-Sa'di gives the same gloss, and the Muyassar writes yawm al-qiyama into its paraphrase. Ma'arif al-Qur'an says the same in English: on the Day of Resurrection he will have no friend. The passage has been describing that Day since the Horn is blown in 69:13, and in 69:25 a man on it has just received his record in his left hand. Here the verse names it with a single word, al-yawm, today.",
            "bn": "আল-ইয়াওম, আজ। তাবারী সঙ্গে সঙ্গেই বলে দেন কোন দিন: ওয়া যালিকা ইয়াওমুল কিয়ামাহ, আর তা কিয়ামতের দিন। সা'দীর ব্যাখ্যাও একই, আর মুয়াসসার নিজের বর্ণনায় ইয়াওমুল কিয়ামাহ কথাটা বসিয়ে দেয়। মাআরিফুল কুরআনও ইংরেজিতে একই কথা বলে: কিয়ামতের দিন তার কোনো বন্ধু থাকবে না। ৬৯:১৩ আয়াতে শিঙায় ফুঁ দেওয়ার পর থেকেই এ অংশটি সেই দিনের বর্ণনা দিয়ে আসছে। ৬৯:২৫ আয়াতে সে দিনেরই এক মানুষ বাঁ হাতে আমলনামা পেয়েছে। এখানে আয়াতটি সেই দিনকে ডাকে এক শব্দে: আল-ইয়াওম, আজ।"
          },
          {
            "en": "Hahuna, here. At-Tabari glosses it apart from the day: ya'ni fi al-dar al-akhira, meaning in the abode of the Hereafter. In his reading the verse fixes both a time and a place, and the friend is missing in both. Ibn Kathir, who quotes 69:35 to 69:37 together, uses hahuna again in his own paraphrase but attaches it to the food of the next verse: wa-la ta'ama lahu hahuna illa min ghislin, and he has no food here except ghislin. Apart from al-Qurtubi's grammar, the other sources do not gloss hahuna on its own.",
            "bn": "হাহুনা, এখানে। তাবারী শব্দটির ব্যাখ্যা দেন দিনের ব্যাখ্যা থেকে আলাদা করে: ইয়া'নী ফিদ দারিল আখিরাহ, অর্থাৎ আখিরাতের ঘরে। তাঁর পাঠে আয়াতটি সময় ও স্থান দুটোই বেঁধে দেয়, আর দুই জায়গাতেই বন্ধু অনুপস্থিত। ইবন কাসীর ৬৯:৩৫ থেকে ৬৯:৩৭ পর্যন্ত একসঙ্গে উদ্ধৃত করেন। নিজের ব্যাখ্যায় তিনি হাহুনা শব্দটি আবার আনেন, তবে জুড়ে দেন পরের আয়াতের খাবারের সঙ্গে: ওয়ালা তাআমা লাহু হাহুনা ইল্লা মিন গিসলীন, এখানে গিসলীন ছাড়া তার কোনো খাবার নেই। কুরতুবীর ব্যাকরণগত আলোচনা বাদ দিলে বাকি তাফসীরগুলো হাহুনার আলাদা ব্যাখ্যা দেয় না।"
          },
          {
            "en": "Al-Qurtubi asks a grammarian's question: which word is the predicate of laysa? His answer is lahu, for him, and not hahuna. If hahuna were the predicate, he explains, the meaning would become there is no food here except ghislin, and that is not sound, li-anna thamma ta'aman ghayrahu, because there is other food there. Hahuna, he says, attaches to the verbal sense carried by lahu. His reasoning turns on the food of 69:36, left to that verse's entry. For this verse the conclusion is grammatical: the sentence rests on lahu, for him.",
            "bn": "কুরতুবী একজন ব্যাকরণবিদের প্রশ্ন তোলেন: লাইসার খবর, অর্থাৎ বিধেয় কোন শব্দ? তাঁর উত্তর লাহু, তার জন্য। হাহুনা নয়। তিনি বুঝিয়ে বলেন, হাহুনাকে বিধেয় ধরলে অর্থ দাঁড়ায়: এখানে গিসলীন ছাড়া কোনো খাবার নেই। আর তা ঠিক নয়, লিআন্না সাম্মা তাআমান গাইরাহু, কারণ সেখানে অন্য খাবারও আছে। তাঁর মতে হাহুনা যুক্ত লাহু শব্দের ভেতরের ক্রিয়ার অর্থের সঙ্গে। তাঁর যুক্তির ভিত্তি ৬৯:৩৬ আয়াতে বলা খাবার, তাই সে বিস্তারিত ওই আয়াতের আলোচনার জন্য তোলা রইল। এ আয়াতের বেলায় তাঁর সিদ্ধান্ত ব্যাকরণেরই: বাক্যের ভর লাহুর উপর, তার জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Kin Who Would Step In",
          "bn": "যে আত্মীয় এগিয়ে আসত"
        },
        "p": [
          {
            "en": "Hamim, at-Tabari says, ya'ni qaribun yadfa'u 'anhu wa-yughithuhu mimma huwa fihi min al-bala': a relative who would defend him and come to his rescue from the affliction he is in. He then quotes Ibn Zayd, through Yunus and Ibn Wahb, with the plainest gloss of all: al-qarib fi kalam al-'arab, the relative, in the speech of the Arabs. On this account the word is first a word of kinship: what the verse withholds is a relative who steps in when his kin is in trouble.",
            "bn": "তাবারী বলেন, হামীম মানে কারীবুন ইয়াদফাউ আনহু ওয়া ইউগীসুহু মিম্মা হুয়া ফীহি মিনাল বালা: এমন আত্মীয়, যে তার পক্ষ থেকে প্রতিরোধ করত, আর যে বিপদে সে পড়েছে তা থেকে উদ্ধার করত। তারপর তিনি ইউনুস ও ইবন ওয়াহবের সূত্রে ইবন যায়দের সবচেয়ে সাদামাটা ব্যাখ্যাটি আনেন: আল-কারীব ফী কালামিল আরব, আরবদের ভাষায় হামীম মানে আত্মীয়। এ হিসাবে শব্দটি আগে আত্মীয়তার শব্দ। তাবারীর পাঠে আয়াতটি যা কেড়ে নেয় তা এমনই এক আত্মীয়, আপনজন বিপদে পড়লে যে এগিয়ে আসে।"
          },
          {
            "en": "Most of the others agree on qarib and differ only in what the relative would do. The Muyassar: qaribun yadfa'u 'anhu al-'adhab, a relative to push the punishment away from him. Al-Baghawi: qaribun yanfa'uhu wa-yashfa'u lahu, a relative who would benefit him and intercede for him. Al-Qurtubi: qaribun yariqqu lahu wa-yadfa'u 'anhu, a relative who would feel tender towards him and defend him. Each gloss pairs the bond with an act. None of them treats the relative as mere company; in every case he is someone who would do something for the man.",
            "bn": "বাকিদের বেশির ভাগও কারীব অর্থাৎ আত্মীয়ের কথাই বলেন। পার্থক্য শুধু এ নিয়ে যে সেই আত্মীয় কী করত। মুয়াসসার বলে: কারীবুন ইয়াদফাউ আনহুল আযাব, এমন আত্মীয় যে তার উপর থেকে আযাব সরিয়ে দিত। বাগাভী বলেন: কারীবুন ইয়ানফাউহু ওয়া ইয়াশফাউ লাহু, এমন আত্মীয় যে তার উপকার করত, তার জন্য সুপারিশ করত। কুরতুবী বলেন: কারীবুন ইয়ারিক্কু লাহু ওয়া ইয়াদফাউ আনহু, এমন আত্মীয় যার মন তার জন্য নরম হতো, যে তাকে রক্ষা করত। প্রতিটি ব্যাখ্যায় সম্পর্কের সঙ্গে একটা কাজ জোড়া। কেউই আত্মীয়কে নিছক সঙ্গী ভাবেন না। সব ক্ষেত্রেই সে এমন কেউ, যে লোকটির জন্য কিছু করত।"
          },
          {
            "en": "Ibn Kathir frames the whole verse as a rescue that does not come: laysa lahu al-yawma man yunqidhuhu min 'adhab Allah, there is nobody for him today to save him from the punishment of Allah. He then names two kinds of person who might have done it: la hamim, wa-huwa al-qarib, wa-la shafi'un yuta', no hamim, and that is the relative, and no intercessor who is obeyed. The second phrase is not in 69:35. It is the wording of 40:18, which as-Sa'di quotes in full, as the section after next shows.",
            "bn": "ইবন কাসীর পুরো আয়াতটিকে দেখেন এমন এক উদ্ধার হিসেবে, যা আর আসে না: লাইসা লাহুল ইয়াওমা মান ইউনকিযুহু মিন আযাবিল্লাহ, আজ তার এমন কেউ নেই যে তাকে আল্লাহর আযাব থেকে বাঁচাবে। তারপর তিনি দুই ধরনের মানুষের নাম করেন, যারা হয়তো তা পারত: লা হামীম, ওয়া হুয়াল কারীব, ওয়ালা শাফীউন ইউতা'। কোনো হামীম নেই, আর হামীম মানে আত্মীয়। এমন কোনো সুপারিশকারীও নেই যার কথা মানা হয়। দ্বিতীয় অংশটি ৬৯:৩৫ আয়াতে নেই। এটি ৪০:১৮ আয়াতের ভাষা। সা'দী আয়াতটি পুরোটা উদ্ধৃত করেছেন, যা দুই অংশ পরে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Heart That Burns for Him",
          "bn": "যার মন তার জন্য পোড়ে"
        },
        "p": [
          {
            "en": "Al-Qurtubi adds where the word comes from. Wa-huwa ma'khudhun min al-hamim wa-huwa al-ma' al-harr: it is taken from hamim, meaning hot water. Then he draws the picture: ka-annahu as-sadiq alladhi yariqqu wa-yahtariqu qalbuhu lahu, as though he were the friend whose heart grows tender and burns for him. On this account the word carries heat inside it. A hamim, in al-Qurtubi's explanation, is not only someone near in lineage but someone whose heart burns on the other person's behalf.",
            "bn": "শব্দটি কোথা থেকে এসেছে, কুরতুবী সে কথাও জানান। ওয়া হুয়া মা'খূযুন মিনাল হামীম, ওয়া হুয়াল মাউল হার: শব্দটি নেওয়া হয়েছে হামীম থেকে, যার অর্থ গরম পানি। তারপর তিনি ছবিটা আঁকেন: কাআন্নাহুস সাদীকুল্লাযী ইয়ারিক্কু ওয়া ইয়াহতারিকু কালবুহু লাহু। যেন সে এমন বন্ধু, যার মন তার জন্য নরম হয়ে আসে, পুড়তে থাকে। এ ব্যাখ্যায় শব্দটির ভেতরেই উত্তাপ লুকিয়ে আছে। কুরতুবীর কথায় হামীম শুধু বংশের দিক থেকে কাছের মানুষ নয়। হামীম সে, যার মন অন্যের জন্য জ্বলে।"
          },
          {
            "en": "Here the sources begin to divide, and the difference is worth keeping as it stands. Ma'arif al-Qur'an defines hamim as 'a sincere or bosom friend', with no mention of kinship, and says he will have no friend that will support him or save him from punishment. As-Sa'di keeps both: qaribun aw sadiqun, a relative or a friend. At-Tabari with Ibn Zayd, the Muyassar, al-Baghawi and Ibn Kathir give relative alone. Al-Qurtubi gives relative as the meaning in this verse, and friend only in his account of where the word comes from.",
            "bn": "এখান থেকে তাফসীরগুলোর পথ আলাদা হতে শুরু করে। পার্থক্যটা যেমন আছে তেমনই রাখা দরকার। মাআরিফুল কুরআন হামীমের সংজ্ঞা দেয় 'আন্তরিক বা প্রাণের বন্ধু', আত্মীয়তার কোনো উল্লেখ নেই। সেখানে বলা হয়েছে, তার এমন কোনো বন্ধু থাকবে না যে তাকে সাহায্য করবে বা আযাব থেকে বাঁচাবে। সা'দী দুটোই রাখেন: কারীবুন আও সাদীকুন, আত্মীয় অথবা বন্ধু। তাবারী ইবন যায়দের সঙ্গে, আর মুয়াসসার, বাগাভী ও ইবন কাসীর শুধু আত্মীয়ের কথা বলেন। কুরতুবী এ আয়াতে অর্থ ধরেন আত্মীয়। বন্ধুর কথা আনেন কেবল শব্দের উৎস বোঝাতে গিয়ে।"
          },
          {
            "en": "None of these sources argues against another. Whether the hamim is a cousin or a companion, the verse says there is none for this man, and every gloss agrees on what such a person would have been for: to defend, to rescue, to feel for him or to intercede. This app's English and Bengali translations lean to the friendship side; the commentators' relative is a reminder that family is meant just as much.",
            "bn": "এসব তাফসীরের কোনোটিই অন্যটির বিরুদ্ধে যুক্তি দেয় না। হামীম চাচাতো ভাই হোক বা সঙ্গী, আয়াত বলছে এ লোকটির জন্য তেমন কেউ নেই। আর এমন মানুষ কী কাজে আসত, তা নিয়ে সব ব্যাখ্যা একমত: রক্ষা করা, উদ্ধার করা, তার জন্য ব্যথিত হওয়া, কিংবা সুপারিশ করা। এই অ্যাপের ইংরেজি ও বাংলা দুই অনুবাদই বন্ধুত্বের দিকে ঝুঁকেছে। তাফসীরকারদের আত্মীয় শব্দটি মনে করিয়ে দেয়, পরিবারের কথাও এখানে সমানভাবে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Intercessor No One Heeds",
          "bn": "যার সুপারিশ কেউ শোনে না"
        },
        "p": [
          {
            "en": "As-Sa'di reads the word through intercession. His hamim is the person who yashfa'u lahu li-yanjuwa min 'adhab Allah aw yafuza bi-thawab Allah: who would intercede for him so that he might be saved from Allah's punishment or win Allah's reward. Then he quotes two verses with no comment and no numbers; the numbers here are this article's. The first is 34:23: and intercession does not benefit with Him except for one whom He permits. The second is 40:18: for the wrongdoers there will be no devoted friend and no intercessor who is obeyed. The second uses the very word, min hamimin.",
            "bn": "সা'দী শব্দটিকে পড়েন সুপারিশের দিক থেকে। তাঁর মতে হামীম সে, যে ইয়াশফাউ লাহু লিইয়ানজুওয়া মিন আযাবিল্লাহি আও ইয়াফূযা বিসাওয়াবিল্লাহ। অর্থাৎ যে তার জন্য সুপারিশ করত, যাতে সে আল্লাহর আযাব থেকে বাঁচে, কিংবা আল্লাহর প্রতিদান লাভ করে। তারপর তিনি কোনো মন্তব্য ও নম্বর ছাড়া দুটি আয়াত উদ্ধৃত করেন; নম্বর দুটি এই লেখার নিজের। প্রথমটি ৩৪:২৩: তাঁর কাছে সুপারিশ কোনো কাজে আসে না, তবে তিনি যাকে অনুমতি দেন, এমন একজনের কথা আলাদা। দ্বিতীয়টি ৪০:১৮: যালিমদের জন্য কোনো অন্তরঙ্গ বন্ধু থাকবে না, এমন কোনো সুপারিশকারীও না যার কথা মানা হয়। দ্বিতীয় আয়াতে ঠিক এই শব্দটিই আছে: মিন হামীম।"
          },
          {
            "en": "Set beside our verse, the two quotations do different work. 40:18 repeats the denial in the same vocabulary and adds the intercessor beside it, which is also the pairing Ibn Kathir makes in his paraphrase. 34:23 states the rule behind the denial: intercession with Allah depends on His permission. As-Sa'di leaves the connection there, and so does this article. Neither verse is taken further than he takes it, and no claim is made here about who is or is not permitted.",
            "bn": "আমাদের আয়াতের পাশে রাখলে দুটি উদ্ধৃতি দুই রকম কাজ করে। ৪০:১৮ একই শব্দে অস্বীকারটা আবার বলে, সঙ্গে সুপারিশকারীর কথাও জুড়ে দেয়। ইবন কাসীরও নিজের ব্যাখ্যায় এই জোড়াটাই এনেছেন। ৩৪:২৩ বলে দেয় এর পেছনের নিয়ম: আল্লাহর কাছে সুপারিশ চলে কেবল তাঁর অনুমতিতে। সা'দী যোগসূত্রটা এখানেই থামিয়ে রাখেন, এ লেখাও তাই করবে। তিনি যতটুকু নিয়ে গেছেন, কোনো আয়াতকেই তার বেশি টানা হবে না। কে অনুমতি পাবে আর কে পাবে না, সে বিষয়ে এখানে কোনো দাবি করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Hot Water, a Lone Reading",
          "bn": "গরম পানির এক বিরল পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi records one more reading, under qila, it is said, and it changes the word itself. In the speech, on this view, there is taqdim wa-ta'khir, words placed out of their natural order, and the meaning is: fa-laysa lahu al-yawma hahuna hamimun illa min ghislin, there is not for him here this Day any hamim except from ghislin. Then, he adds, the hamim would be al-ma' al-harr, the hot water. On that reading the verse speaks not of a friend at all, but of hot water, with the exception falling on ghislin.",
            "bn": "কুরতুবী আরও একটি পাঠ উল্লেখ করেন কীলা, অর্থাৎ বলা হয়েছে, এই শব্দে। এতে শব্দটির অর্থই বদলে যায়। এ মত অনুযায়ী বাক্যে তাকদীম ওয়া তা'খীর আছে, মানে শব্দগুলো স্বাভাবিক ক্রমের আগে-পিছে বসেছে। তখন অর্থ দাঁড়ায়: ফালাইসা লাহুল ইয়াওমা হাহুনা হামীমুন ইল্লা মিন গিসলীন, আজ এখানে গিসলীন থেকে ছাড়া তার কোনো হামীম নেই। তিনি যোগ করেন, তখন হামীম হবে আল-মাউল হার, গরম পানি। এ পাঠে আয়াতটি বন্ধুর কথাই বলে না। বলে গরম পানির কথা, আর ব্যতিক্রমটা পড়ে গিসলীনের উপর।"
          },
          {
            "en": "Al-Qurtubi gives this reading without a name and without endorsing it, after he has already said wa-l-hamimu hahuna al-qarib, the hamim here is the relative. None of the other sources fetched mentions it. It is reported here as a reading he records, not as the meaning the commentators settle on. It does show how closely this verse is bound to the next: friendlessness first, then food. What ghislin is, which the sources explain at length, belongs to 69:36 and is left to its entry.",
            "bn": "কুরতুবী এ পাঠটি আনেন কারও নাম ছাড়া, সমর্থনও করেন না। তার আগেই তিনি বলে রেখেছেন: ওয়াল হামীমু হাহুনাল কারীব, এখানে হামীম মানে আত্মীয়। আনা অন্য কোনো তাফসীরে এ পাঠের উল্লেখ নেই। তাই এখানে এটি কুরতুবীর উল্লেখ করা একটি পাঠ মাত্র, তাফসীরকারদের স্থির করা অর্থ নয়। তবে এ থেকে বোঝা যায়, এ আয়াত পরের আয়াতের সঙ্গে কত ঘনিষ্ঠভাবে বাঁধা: আগে বন্ধুহীনতা, তারপর খাবার। গিসলীন আসলে কী, তাফসীরগুলো তা বিস্তারিত বলেছে। সে আলোচনা ৬৯:৩৬ আয়াতের, তাই সেখানেই তোলা রইল।"
          },
          {
            "en": "No hadith is attached to this verse in the tafsirs fetched for it. The reports Ibn Kathir carries in this passage, from Ibn Abbas through several chains and from Qatada, ar-Rabi' and ad-Dahhak, all concern ghislin, so they belong to the next verse and are not reported here. Nor does any of these sources give an occasion of revelation for 69:35. For five words, what they give is enough: the Day, the place, and the hamim explained.",
            "bn": "এ আয়াতের যেসব তাফসীর আনা হয়েছে, তার কোনোটিতে আয়াতের সঙ্গে কোনো হাদীস যুক্ত নেই। এ অংশে ইবন কাসীর ইবন আব্বাস (রাঃ) থেকে কয়েকটি সূত্রে, আর কাতাদা, রাবী ও দাহহাক থেকে যেসব বর্ণনা এনেছেন, সবই গিসলীন নিয়ে। সেগুলো তাই পরের আয়াতের বিষয়, এখানে আনা হয়নি। ৬৯:৩৫ আয়াতের কোনো শানে নুযূলও এসব তাফসীরে নেই। পাঁচ শব্দের জন্য তারা যা দিয়েছে তা-ই যথেষ্ট: দিনের নাম, জায়গার নাম, আর হামীমের ব্যাখ্যা।"
          }
        ]
      },
      {
        "h": {
          "en": "Description, Not a Verdict",
          "bn": "বর্ণনা, রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what it describes: a man on the Day of Resurrection, already seized and chained in 69:30 to 69:32, who has no hamim there. It licenses nothing against any living person or any community. It does not let anyone say of a neighbour, a relative or a people that they will be friendless in the Hereafter, and this article says it of nobody. The Muyassar's hadha al-kafir and the wrongdoers of 40:18 name a condition of that Day, not a label to fasten on anyone now.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু তা-ই বর্ণনা করে: কিয়ামতের দিনের এক মানুষ, ৬৯:৩০ থেকে ৬৯:৩২ আয়াতে যাকে ধরে শিকলে বাঁধা হয়েছে, সেখানে তার কোনো হামীম নেই। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। প্রতিবেশী, আত্মীয় বা কোনো জাতি সম্পর্কে আখিরাতে তারা বন্ধুহীন থাকবে, এমন কথা বলার সুযোগ এ আয়াত কাউকে দেয় না। এ লেখাও কারও সম্পর্কে তা বলে না। মুয়াসসারের হাযাল কাফির আর ৪০:১৮ আয়াতের যালিমরা সেই দিনের এক অবস্থার নাম। আজ কারও গায়ে লাগিয়ে দেওয়ার মতো তকমা নয়।"
          },
          {
            "en": "Nor does the verse teach that kinship and friendship are worthless. The commentators define the hamim by what a relative or friend does: defending, rescuing, feeling tender, interceding. Those are the ordinary works of family and friendship, and the glosses take them seriously. Their point, as they read the verse, is that on that Day and in that place none of it reaches this man. What a reader takes from that is a question about their own reliance and their own record, not a judgement on anyone else's.",
            "bn": "আত্মীয়তা বা বন্ধুত্ব মূল্যহীন, এমন শিক্ষাও আয়াতটি দেয় না। তাফসীরকারেরা হামীমকে চিনিয়েছেন আত্মীয় বা বন্ধুর কাজ দিয়ে: রক্ষা করা, উদ্ধার করা, মন নরম হওয়া, সুপারিশ করা। পরিবার আর বন্ধুত্বের এগুলোই স্বাভাবিক কাজ, আর ব্যাখ্যাগুলো এগুলোকে গুরুত্ব দিয়েই দেখে। তাঁদের পাঠে আয়াতের কথা হলো, সেই দিনে, সেই জায়গায়, এর কিছুই এ মানুষটির কাছে পৌঁছায় না। পাঠক এ থেকে যা নেবেন, তা নিজের ভরসা আর নিজের আমলনামা নিয়ে এক প্রশ্ন। অন্য কারও সম্পর্কে রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Warmth Offered While It Counts",
          "bn": "দরদ দেখানোর সময় এখনই"
        },
        "p": [
          {
            "en": "Al-Qurtubi's picture of a hamim, the friend whose heart grows tender and burns for another, describes something every reader recognises. Most people have someone like that, and are someone like that to somebody. The verse does not belittle those ties. It shows a Day on which, for this man, they bring nothing, and as-Sa'di's quotation of 34:23 gives the rule that holds for everyone: intercession with Allah benefits only those He permits. The ties of this world are real, but the reliance belongs to Allah.",
            "bn": "কুরতুবী হামীমের যে ছবি আঁকেন, যার মন অন্যের জন্য নরম হয়ে পুড়তে থাকে, তা প্রত্যেক পাঠকের চেনা। বেশির ভাগ মানুষের জীবনে এমন কেউ আছে, আর বেশির ভাগ মানুষ নিজেও কারও কাছে এমন। আয়াতটি এসব সম্পর্ককে তুচ্ছ করে না। শুধু দেখায় এমন এক দিন, যেদিন এ মানুষটির কাছে এসব কিছুই নিয়ে আসে না। আর সা'দীর উদ্ধৃত ৩৪:২৩ আয়াত সবার জন্য প্রযোজ্য নিয়মটি জানিয়ে দেয়: আল্লাহর কাছে সুপারিশ কাজে আসে কেবল তাঁর জন্য, যাকে তিনি অনুমতি দেন। দুনিয়ার সম্পর্ক সত্য, কিন্তু ভরসার জায়গা আল্লাহ।"
          },
          {
            "en": "That leaves two things a reader can do while the days are still open. The first is to place hope where 34:23 places the permission, with Allah, and not in the people expected to stand up later. The second is to be, now, the kind of person the glosses describe: someone whose heart is warm towards another's hardship and who acts on it. The surah has just named feeding the poor in 69:34. Doing it, and urging others to it, is something nobody has to wait for that Day to begin.",
            "bn": "দিনগুলো যতদিন খোলা আছে, পাঠকের হাতে তাই দুটি কাজ থাকে। প্রথমত, আশা রাখুন সেখানেই, যেখানে ৩৪:২৩ অনুমতির ভার রেখেছে, অর্থাৎ আল্লাহর কাছে। যাদের ভাবছেন পরে আপনার পক্ষে দাঁড়াবে, তাদের উপর নয়। দ্বিতীয়ত, এখনই হয়ে উঠুন সেই মানুষ, ব্যাখ্যাগুলো যার বর্ণনা দেয়। অন্যের কষ্টে যার মন গলে, আর যে সে অনুযায়ী কাজও করে। ঠিক আগের আয়াত ৬৯:৩৪ মিসকীনকে খাওয়ানোর কথা বলেছে। নিজে খাওয়ানো আর অন্যকে উৎসাহ দেওয়া, এ কাজ শুরু করতে সেই দিনের অপেক্ষা করতে হয় না।"
          }
        ]
      }
    ]
  }
});
