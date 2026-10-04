/**
 * Tadabbur long-form articles — surah 43.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "43:11-12": {
    "sections": [
      {
        "h": {
          "en": "Water Sent Down to Size",
          "bn": "মাপমতো নামানো পানি"
        },
        "p": [
          {
            "en": "Wa-lladhi nazzala mina-s-sama'i ma'an bi-qadar: and He who sends down water from the sky in measure. The verse continues a chain that began at 43:9, where the idolaters, asked who created the heavens and the earth, answer that the Mighty, the Knowing created them. Ibn Kathir, in the abridged English, notes that they admit Allah alone is the Creator and still worship others beside Him. Verse 43:10 named the earth as a bed and its roads; this verse names the water, and what the water does.",
            "bn": "ওয়াল্লাযী নাযযালা মিনাস সামায়ি মাআম বিকাদার: আর যিনি আকাশ থেকে পরিমিত পানি নামান। আয়াতটি একটি ধারার অংশ, যার শুরু ৪৩:৯ আয়াতে। সেখানে মুশরিকদের জিজ্ঞেস করা হয়, আকাশ ও যমীন কে সৃষ্টি করেছে। তারা জবাব দেয়, মহাপরাক্রমশালী মহাজ্ঞানী সৃষ্টি করেছেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে, তারা মানে যে একমাত্র আল্লাহই স্রষ্টা, তবু তাঁর পাশাপাশি অন্যদের ইবাদত করে। ৪৩:১০ আয়াতে এসেছে বিছানার মতো যমীন আর তার পথঘাটের কথা। এবার আসছে পানি, আর সেই পানি কী করে, তার কথা।"
          },
          {
            "en": "At-Tabari reads bi-qadar as according to the measure of your need, and he gives the measure two edges. Allah did not make the rain like the flood, which would be a punishment like that sent down on the people of Nuh (AS); nor did He make it so slight that plants and crops could not grow from it. He made it ghayth, relieving rain, a life for dead ground. Ibn Kathir's gloss is practical: as much as suffices your crops, your fruits and your drinking, for yourselves and your livestock.",
            "bn": "তাবারী বিকাদারের অর্থ করেন: তোমাদের প্রয়োজনের মাপে। এই মাপের দুটি সীমা তিনি দেখান। আল্লাহ বৃষ্টিকে প্লাবনের মতো করেননি, তাহলে তা হতো নূহ (আঃ)-এর জাতির উপর নামানো শাস্তির মতো এক আযাব। আবার এত অল্পও করেননি যে তাতে গাছপালা আর ফসল গজাতে পারে না। তিনি তাকে বানিয়েছেন গাইস, স্বস্তির বৃষ্টি, মরা মাটির প্রাণ। ইবন কাসীরের ব্যাখ্যা একেবারে কাজের কথা: যতটুকু তোমাদের ফসল, ফলমূল আর পানের জন্য যথেষ্ট, তোমাদের নিজেদের জন্য আর তোমাদের গবাদি পশুর জন্য।"
          },
          {
            "en": "As-Sa'di puts it as a balance. The rain neither increases nor decreases, and it comes in the measure of need: it does not fall short so that it brings no benefit, and it does not exceed so that it harms people and lands. Rather, he says, Allah relieved His servants with it and rescued the lands from hardship, and for that reason the verse goes straight on to the land revived.",
            "bn": "সা'দী বিষয়টা দেখেন ভারসাম্য হিসেবে। এ বৃষ্টি বাড়েও না, কমেও না, আসে প্রয়োজনের মাপে। এত কম নয় যে কোনো উপকারই হয় না, আবার এত বেশি নয় যে বান্দা আর জনপদের ক্ষতি করে। বরং তাঁর ভাষায়, আল্লাহ এ দিয়ে বান্দাদের স্বস্তি দিয়েছেন আর জনপদকে কষ্ট থেকে উদ্ধার করেছেন। এ কারণেই আয়াত সঙ্গে সঙ্গে জীবিত হয়ে ওঠা ভূমির কথায় চলে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Water That Drowned",
          "bn": "যে পানি ডুবিয়ে মেরেছিল, তা নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives the same contrast in the name of Ibn 'Abbas: not as it was sent down on the people of Nuh (AS) without measure until it drowned them, but in measure, neither a drowning flood nor short of the need, so that it is a livelihood for you and your livestock. Al-Muyassar repeats nearly the same words, without naming the people. Al-Baghawi has it more briefly: according to your need, not as it was sent on the people of Nuh without measure until He destroyed them.",
            "bn": "কুরতুবী একই তুলনা আনেন ইবন আব্বাস (রাঃ)-এর নামে: নূহ (আঃ)-এর জাতির উপর যেভাবে মাপ ছাড়া নামানো হয়েছিল, ফলে তারা ডুবে মরেছিল, সেভাবে নয়। বরং মেপে, ডুবিয়ে দেওয়ার মতো প্লাবনও নয়, প্রয়োজনের চেয়ে কমও নয়, যাতে তা তোমাদের আর তোমাদের পশুর জীবিকা হয়। মুয়াসসার প্রায় হুবহু একই কথা বলে, তবে জাতির নাম নেয় না। বাগাভী আরও সংক্ষেপে বলেন: তোমাদের প্রয়োজনের মাপে, নূহের জাতির উপর যেমন মাপ ছাড়া নামানো হয়েছিল আর তিনি তাদের ধ্বংস করেছিলেন, তেমন নয়।"
          },
          {
            "en": "So four of the commentators read here reach for the flood, and three of them name Nuh's people. The water that revives a field and the water that ended a people are a single substance; what differs is the measure. That turns a remark about weather into a reminder that a blessing is held at its level by the One who sends it.",
            "bn": "অর্থাৎ এখানে পড়া তাফসীরকারদের চারজন প্লাবনের কথা টানেন, আর তাঁদের তিনজন নূহের জাতির নাম নেন। যে পানি মাঠকে বাঁচায় আর যে পানি একটি জাতিকে শেষ করে দিয়েছিল, দুটো একই জিনিস। তফাত কেবল মাপে। এতে আবহাওয়ার একটা সাধারণ কথা হয়ে ওঠে এক স্মরণ: নিয়ামত তার ঠিক জায়গায় টিকে থাকে, কারণ যিনি পাঠান তিনিই তাকে ধরে রাখেন।"
          },
          {
            "en": "One thing must be said plainly. The commentators recall what the Qur'an narrates of Nuh's people, and the verse describes only what its text describes. It licenses nothing against any living person or community: no verdict on those struck by a flood or a drought today, and no reading of someone else's disaster as their punishment. The lesson the glosses draw is turned towards the reader, who receives the measured rain, and it asks only that the reader recognise who does the measuring.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। তাফসীরকারেরা নূহের জাতি সম্পর্কে কুরআন যা বর্ণনা করেছে, সেটাই স্মরণ করেন। আয়াত কেবল তার নিজের বক্তব্যটুকুই বলে। জীবিত কোনো মানুষ বা কোনো জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। আজ যারা বন্যা বা খরার শিকার, তাদের নিয়ে কোনো রায় দেওয়ার অনুমতি নেই। অন্যের বিপদকে তার শাস্তি বলে ব্যাখ্যা করারও অনুমতি নেই। এসব ব্যাখ্যার শিক্ষা পাঠকের নিজের দিকে ফেরানো। যে পাঠক মাপা বৃষ্টি পান, তাঁর কাছে চাওয়া শুধু এটুকু: তিনি যেন চেনেন, মাপটা কে করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Ansharna, the Raising Word",
          "bn": "আনশারনা: জাগিয়ে তোলার শব্দ"
        },
        "p": [
          {
            "en": "Fa-ansharna bihi baldatan maytan: then We revived with it a dead land. At-Tabari, al-Qurtubi and as-Sa'di all gloss ansharna as ahyayna, We gave life. At-Tabari notes the verb's other side: when the land itself is said to have come alive, one says nasharat al-ard. He cites a line of the poet al-A'sha in which people, at what they have seen, cry out: what a wonder, the dead man come back to life. The word used of the field is a word used of the dead who rise.",
            "bn": "ফাআনশারনা বিহী বালদাতাম মাইতা: তারপর তা দিয়ে আমি মৃত ভূমিকে জীবিত করি। তাবারী, কুরতুবী ও সা'দী তিনজনই আনশারনার অর্থ করেন আহইয়াইনা, অর্থাৎ আমি প্রাণ দিলাম। তাবারী ক্রিয়াটির আরেক দিকও দেখান। ভূমি নিজে জীবিত হয়ে উঠলে আরবরা বলে, নাশারাতিল আরদ। এর সাক্ষ্য হিসেবে তিনি কবি আল-আ'শার একটি পঙ্ক্তি আনেন। সেখানে মানুষ যা দেখেছে তাতে বিস্মিত হয়ে বলে ওঠে: কী আশ্চর্য, মরা মানুষ বেঁচে উঠেছে! মাঠের বেলায় যে শব্দ, কবর থেকে ওঠা মৃতের বেলায়ও সেই শব্দ।"
          },
          {
            "en": "What is dead about the land? At-Tabari describes it as barren, with no plant and no crop, worn away by droughts and spoiled by dry years. Al-Qurtubi calls it bare of vegetation. Ibn Kathir describes what happens when the water reaches it: it stirs and swells and puts forth every lovely kind, in words that are also those of 22:5. The verse itself begins with He who sends down and moves to We revived, so He who measures the rain speaks in His own voice as the land comes alive.",
            "bn": "ভূমির মৃত্যুটা কী? তাবারী একে বলেন অনুর্বর মাটি, যেখানে না আছে গাছ, না ফসল, খরায় খরায় যা ক্ষয়ে গেছে, অনাবৃষ্টির বছরগুলোতে নষ্ট হয়ে গেছে। কুরতুবী বলেন, উদ্ভিদশূন্য। পানি পৌঁছালে কী ঘটে, ইবন কাসীর তা বলেন সেই ভাষায়, যা ২২:৫ আয়াতেরও ভাষা: মাটি নড়ে ওঠে, ফুলে ওঠে, আর জন্ম দেয় সব রকমের মনোরম উদ্ভিদ। আয়াতটি শুরু হয়েছে 'যিনি নামান' দিয়ে, তারপর চলে এসেছে 'আমি জীবিত করি'-তে। যিনি বৃষ্টি মাপেন, ভূমি জেগে ওঠার মুহূর্তে তিনি নিজেই কথা বলছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Brought Out the Same Way",
          "bn": "একইভাবে বের করা হবে"
        },
        "p": [
          {
            "en": "Kadhalika tukhrajun: thus will you be brought forth. Ibn Kathir names the move directly: by the reviving of the earth, Allah draws attention to the reviving of bodies on the Day of Return, after their death. At-Tabari spells out the comparison. As We brought out plants and crops with this water from this dead land after its drought and dry years, so you, O people, will be brought out after you have perished and become dust in the earth.",
            "bn": "কাযালিকা তুখরাজূন: এভাবেই তোমাদের বের করা হবে। ইবন কাসীর সরাসরি বলে দেন আয়াত কোন দিকে নিয়ে যাচ্ছে। ভূমিকে জীবিত করার কথা বলে আল্লাহ মনোযোগ টানছেন ফিরে যাওয়ার দিনে মৃত্যুর পর দেহগুলোকে জীবিত করার দিকে। তাবারী তুলনাটা খুলে বলেন। খরা আর অনাবৃষ্টির পর এই মৃত ভূমি থেকে আমি যেমন এই পানি দিয়ে গাছপালা আর ফসল বের করেছি, হে মানুষ, তোমাদেরও তেমনি বের করা হবে, তোমরা নিঃশেষ হয়ে মাটিতে ধুলো হয়ে যাওয়ার পর।"
          },
          {
            "en": "At-Tabari's wording carries a further detail: you will be brought out by water that He sends down onto the earth to give you life after your death, alive in the form you had before you died. He then cites Qatada through his chain: as Allah gave life to this dead land with this water, so will you be raised on the Day of Resurrection. Al-Muyassar and al-Baghawi both add from your graves, and al-Muyassar adds after your perishing.",
            "bn": "তাবারীর ভাষায় আরেকটি খুঁটিনাটি আছে। তোমাদের বের করা হবে সেই পানি দিয়ে, যা তিনি মাটিতে নামাবেন মৃত্যুর পর তোমাদের জীবিত করতে, আর তোমরা উঠবে মৃত্যুর আগের সেই চেহারাতেই। এরপর তিনি নিজের সনদে কাতাদার কথা আনেন: আল্লাহ যেমন এই পানি দিয়ে এই মৃত ভূমিকে জীবিত করেছেন, তেমনি কিয়ামতের দিন তোমাদের ওঠানো হবে। মুয়াসসার ও বাগাভী দুজনেই যোগ করেন, তোমাদের কবর থেকে। মুয়াসসার আরও বলে, তোমরা নিঃশেষ হয়ে যাওয়ার পর।"
          },
          {
            "en": "Al-Qurtubi states the logic in a single clause: whoever has power over this has power over that. As-Sa'di adds the purpose: as He revived the dead, still earth with water, so He will revive you after you have completed your stay in the barzakh, to recompense you for your deeds. Al-Qurtubi also reports that Yahya ibn Waththab, al-A'mash, Hamza, al-Kisa'i and Ibn Dhakwan from Ibn 'Amir read the verb in the active voice, and the rest in the passive.",
            "bn": "কুরতুবী যুক্তিটা বলেন এক বাক্যে: যিনি এটা করতে পারেন, তিনি ওটাও পারেন। সা'দী জুড়ে দেন উদ্দেশ্যটা: তিনি যেমন নিস্তেজ মরা মাটিকে পানি দিয়ে জীবিত করেছেন, তেমনি বারযাখের সময় পূর্ণ হলে তোমাদেরও জীবিত করবেন, তোমাদের আমলের প্রতিদান দিতে। কুরতুবী কিরাআতের একটি ভিন্নতাও জানান। ইয়াহইয়া ইবন ওয়াসসাব, আ'মাশ, হামযা, কিসাঈ এবং ইবন আমির থেকে ইবন যাকওয়ান ক্রিয়াটি পড়েছেন কর্তৃবাচ্যে, বাকিরা কর্মবাচ্যে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pairs, Kinds and Opposites",
          "bn": "জোড়া, রকম আর বিপরীত"
        },
        "p": [
          {
            "en": "Wa-lladhi khalaqa-l-azwaja kullaha: and He who created the azwaj, all of them. The word is the plural of zawj, and the commentators differ on how far it reaches. At-Tabari reads it as pairing: He created everything and paired it, the males from the females as pairs and the females from the males. Ibn 'Isa, as al-Qurtubi reports him, keeps it to the pairs of animals, male and female.",
            "bn": "ওয়াল্লাযী খালাকাল আযওয়াজা কুল্লাহা: আর যিনি সব আযওয়াজ সৃষ্টি করেছেন। শব্দটি যাওজের বহুবচন। এর পরিধি কতদূর, তা নিয়ে তাফসীরকারদের মত ভিন্ন। তাবারী একে পড়েন জোড়া বাঁধা অর্থে: তিনি সব কিছু সৃষ্টি করেছেন আর জোড়ায় জোড়ায় মিলিয়েছেন, নারী থেকে পুরুষকে জোড়া করেছেন, পুরুষ থেকে নারীকে। কুরতুবীর বর্ণনায় ইবন ঈসা একে প্রাণীর জোড়ায় সীমিত রাখেন, পুরুষ আর স্ত্রী।"
          },
          {
            "en": "Others read azwaj as kinds. Sa'id ibn Jubayr, in al-Qurtubi's report, says all the categories; al-Baghawi glosses it in one word as al-asnaf, the kinds, and al-Muyassar as all the kinds of animal and plant. Ibn Kathir lists what the earth grows, plants, crops, fruits and flowers, and the animals in their different genera and kinds. Another view al-Qurtubi records takes it as the pairs of plants, citing the Qur'an's own phrases every delightful pair, from 50:7, and every noble pair, as in 26:7.",
            "bn": "অন্যরা আযওয়াজকে পড়েন রকম বা শ্রেণি অর্থে। কুরতুবীর বর্ণনায় সাঈদ ইবন জুবায়র বলেন, সব শ্রেণি। বাগাভী একটিমাত্র শব্দে ব্যাখ্যা দেন, আল-আসনাফ, অর্থাৎ নানা রকম। মুয়াসসার বলে, প্রাণী ও উদ্ভিদের সব রকম। ইবন কাসীর গুনে দেন মাটি যা জন্মায়: গাছপালা, ফসল, ফল, ফুল, আর নানা জাত ও প্রজাতির প্রাণী। কুরতুবী আরেকটি মত উল্লেখ করেন, যাতে এর অর্থ উদ্ভিদের জোড়া। প্রমাণ হিসেবে আসে কুরআনেরই ভাষা: ৫০:৭ আয়াতের 'সব রকমের মনোরম জোড়া', আর ২৬:৭ আয়াতের মতো 'সব রকমের উৎকৃষ্ট জোড়া'।"
          },
          {
            "en": "A third line reads azwaj as paired opposites. Al-Hasan, in al-Qurtubi, names winter and summer, night and day, the heavens and the earth, the sun and the moon, Paradise and the Fire. Another view he records takes it as the states a person turns through: good and evil, faith and disbelief, benefit and harm, poverty and wealth, health and sickness. Al-Qurtubi then gives his own preference: this last view is general enough to gather all the others within it.",
            "bn": "তৃতীয় ধারায় আযওয়াজ মানে পরস্পর বিপরীত জোড়া। কুরতুবীর বর্ণনায় হাসান গুনে দেন: শীত আর গ্রীষ্ম, রাত আর দিন, আকাশ আর যমীন, সূর্য আর চাঁদ, জান্নাত আর জাহান্নাম। আরেকটি মত তিনি উল্লেখ করেন, যাতে এর অর্থ মানুষ যেসব অবস্থার ভেতর দিয়ে ঘুরে ফেরে: ভালো আর মন্দ, ঈমান আর কুফর, উপকার আর ক্ষতি, অভাব আর প্রাচুর্য, সুস্থতা আর অসুখ। এরপর কুরতুবী নিজের পছন্দ জানান: এই শেষ মতটি এত ব্যাপক যে বাকি সব মত এর ভেতরে এসে যায়।"
          },
          {
            "en": "As-Sa'di gathers widely too, in words that are also those of 36:36: all the kinds, of what the earth grows, of the people themselves and of what they do not know, with night and day, heat and cold, male and female. The readings are kept here side by side, as the commentators left them, and al-Qurtubi's preference is his own. What they share is the verse's own point: whatever the azwaj are, all of them came from the One who sends the rain.",
            "bn": "সা'দীও অনেক কিছু এক জায়গায় আনেন, আর তা ৩৬:৩৬ আয়াতেরই ভাষায়: সব রকম, মাটি যা জন্মায় তার, মানুষের নিজেদের, আর তারা যা জানে না তার। সঙ্গে রাত আর দিন, গরম আর ঠান্ডা, পুরুষ আর স্ত্রী। মতগুলো এখানে পাশাপাশি রাখা হলো, তাফসীরকারেরা যেভাবে রেখে গেছেন। কুরতুবীর পছন্দ তাঁর নিজের। সব মতের মিল আয়াতের মূল কথায়: আযওয়াজ যা-ই হোক, সবই এসেছে একই সত্তার কাছ থেকে, যিনি বৃষ্টি পাঠান।"
          }
        ]
      },
      {
        "h": {
          "en": "Ships at Sea, Beasts Ashore",
          "bn": "সাগরে নৌকা, ডাঙায় পশু"
        },
        "p": [
          {
            "en": "Wa-ja'ala lakum mina-l-fulki wa-l-an'ami ma tarkabun: and He made for you, of ships and livestock, what you ride. At-Tabari divides the two by terrain. Of ships, what you ride on the seas to wherever you aim, for your livelihoods and your needs; of livestock, what you ride on land to whichever towns you wish, such as camels, horses, mules and donkeys. Al-Muyassar gives the same division and the same four animals. Al-Baghawi and al-Qurtubi say simply by land and sea, and al-Qurtubi names the livestock here as camels.",
            "bn": "ওয়াজাআলা লাকুম মিনাল ফুলকি ওয়াল আনআমি মা তারকাবূন: আর তিনি তোমাদের জন্য বানিয়েছেন নৌযান ও গবাদি পশু, যাতে তোমরা চড়ো। তাবারী দুটিকে ভাগ করেন পথের ধরন দিয়ে। নৌযান, যাতে চড়ে তোমরা সাগর পাড়ি দিয়ে যেখানে চাও যাও, জীবিকা আর প্রয়োজনের তাগিদে। আর পশু, যাতে চড়ে ডাঙায় যে শহরে চাও যাও, যেমন উট, ঘোড়া, খচ্চর আর গাধা। মুয়াসসারও একই ভাগ করে, একই চারটি প্রাণীর নাম নেয়। বাগাভী ও কুরতুবী শুধু বলেন, স্থলে আর জলে। কুরতুবী এখানে পশু বলতে উটের কথা বলেন।"
          },
          {
            "en": "Ibn Kathir widens the gift beyond riding. He subdued them for you, made them yield and made them easy, so that you eat their meat, drink their milk and ride on their backs. As-Sa'di, glossing al-fulk, speaks of seagoing ships, both those driven by sail and those driven by fire, and then carries his gloss straight across the verse break, reading the cattle you ride together with the opening words of 43:13.",
            "bn": "ইবন কাসীর দানটাকে চড়ার বাইরেও ছড়িয়ে দেন। তিনি এগুলোকে তোমাদের বশে এনেছেন, অনুগত করেছেন, সহজ করে দিয়েছেন, যাতে তোমরা এদের গোশত খাও, দুধ পান করো, পিঠে চড়ো। সা'দী আল-ফুলকের ব্যাখ্যায় সমুদ্রগামী জাহাজের কথা বলেন, পালে চলা আর আগুনে চলা দুই রকমই। তারপর তিনি তাঁর ব্যাখ্যা আয়াতের সীমা পেরিয়ে টেনে নেন, যে পশুতে তোমরা চড়ো তাকে ৪৩:১৩ আয়াতের শুরুর কথার সঙ্গে মিলিয়ে পড়েন।"
          },
          {
            "en": "Ma'arif al-Qur'an gives the widest reading. It sees two kinds of transport: vehicles people make themselves, and animals in whose creation human effort has no part. Boats, it says, include every kind of man-made vehicle, from the bicycle to the aeroplane and the spacecraft, and these too are Allah's blessings, since He gave people the ability and technique to build them and created the raw materials and their properties. Of cattle, it notes that animals many times stronger than a person are made so submissive that a child leads them by a nose-string.",
            "bn": "মাআরিফুল কুরআন সবচেয়ে বিস্তৃত অর্থ করে। সেখানে বাহন দুই রকম: মানুষের নিজের হাতে তৈরি যানবাহন, আর সেসব প্রাণী, যাদের সৃষ্টিতে মানুষের কোনো হাত নেই। তার মতে নৌকার মধ্যে পড়ে মানুষের তৈরি সব যান, সাইকেল থেকে উড়োজাহাজ আর মহাকাশযান পর্যন্ত। এগুলোও আল্লাহর নিয়ামত, কারণ বানানোর যোগ্যতা আর কৌশল তিনিই মানুষকে দিয়েছেন, আর কাঁচামাল ও তার গুণাগুণ তাঁরই সৃষ্টি। পশু সম্পর্কে বলে, মানুষের চেয়ে বহু গুণ শক্তিশালী প্রাণীকে এমন বাধ্য করা হয়েছে যে একটি শিশুও নাকের দড়ি ধরে তাকে নিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Riding Leads Next",
          "bn": "চড়ার কথা এরপর কোথায় যায়"
        },
        "p": [
          {
            "en": "The riding does not end with 43:12. Ma tarkabun leads straight into 43:13, which gives the purpose of the mount: that you settle on its back, remember your Lord's favour when you have settled, and glorify Him who made it subject to you. That verse and the words it teaches belong to their own place and are not treated here.",
            "bn": "চড়ার কথা ৪৩:১২ আয়াতে শেষ হয় না। মা তারকাবূন সরাসরি নিয়ে যায় ৪৩:১৩ আয়াতে, যেখানে বাহনের উদ্দেশ্য বলা হয়েছে: তোমরা তার পিঠে স্থির হয়ে বসবে, বসে প্রতিপালকের অনুগ্রহ স্মরণ করবে, আর যিনি একে তোমাদের বশ করে দিয়েছেন তাঁর পবিত্রতা ঘোষণা করবে। সেই আয়াত আর তাতে শেখানো কথাগুলো তাদের নিজের জায়গার বিষয়, এখানে সে আলোচনা নেই।"
          },
          {
            "en": "None of the commentaries read for these two verses attaches a hadith or a report of the occasion of revelation to them, so none is given here. What the passage itself offers instead is a sequence. The admission of 43:9, that the Mighty, the Knowing created the heavens and the earth, is followed by the earth as a bed, the measured rain, the revived land, the pairs and the mounts. Each item is something the listeners used every day, and in the middle of the list stands the clause about being brought out again.",
            "bn": "এই দুই আয়াতের জন্য পড়া কোনো তাফসীরই এর সঙ্গে কোনো হাদীস বা শানে নুযূলের বর্ণনা যুক্ত করেনি, তাই এখানে তা দেওয়া হলো না। তার বদলে আয়াতগুলো নিজেরাই দেখায় একটি ধারাবাহিকতা। ৪৩:৯ আয়াতে স্বীকারোক্তি আসে যে মহাপরাক্রমশালী মহাজ্ঞানী আকাশ ও যমীন সৃষ্টি করেছেন। তারপর আসে বিছানার মতো যমীন, মাপা বৃষ্টি, জীবিত ভূমি, জোড়াগুলো, আর বাহন। প্রতিটিই শ্রোতারা রোজ ব্যবহার করত। আর এই তালিকার মাঝখানে দাঁড়িয়ে আছে আবার বের করে আনার সেই ছোট্ট বাক্যটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading Rain as Speech",
          "bn": "বৃষ্টিকে কথা হিসেবে পড়া"
        },
        "p": [
          {
            "en": "The two verses ask for a particular kind of seeing. A measured rain is easy to take as climate and nothing more, and a revived field as farming. The commentators read both as speech: the measure tells of a Giver who knows the need, and the green field tells of a rising that has not yet happened. Al-Qurtubi's single clause carries the argument home: whoever has power over this has power over that.",
            "bn": "এই দুই আয়াত এক বিশেষ ধরনের দেখা চায়। মাপা বৃষ্টিকে নিছক আবহাওয়া ভাবা সহজ, আর জেগে ওঠা মাঠকে নিছক চাষবাস। তাফসীরকারেরা দুটোকেই পড়েন কথা হিসেবে। মাপটা জানায় এমন দাতার কথা, যিনি প্রয়োজন জানেন। আর সবুজ মাঠ জানায় এমন এক পুনরুত্থানের কথা, যা এখনো ঘটেনি। কুরতুবীর এক বাক্যেই যুক্তিটা পূর্ণ হয়: যিনি এটা পারেন, তিনি ওটাও পারেন।"
          },
          {
            "en": "The same holds for the road. A ship, a car, an animal under a rider: each is a convenience until one asks where it came from. At-Tabari's pairing of all things and the Ma'arif's account of man-made vehicles both lead back to the same Maker, the One who measured the rain. They ask the reader, at the next shower or the next journey, to remember who sends the one and who made the other possible.",
            "bn": "পথের বেলাতেও একই কথা। জাহাজ, গাড়ি, আরোহী পিঠে নিয়ে চলা পশু, প্রতিটিই কেবল সুবিধা, যতক্ষণ না কেউ জিজ্ঞেস করে এগুলো এল কোথা থেকে। সব কিছুকে জোড়া করার কথা, যা তাবারী বলেন, আর মানুষের তৈরি যানবাহনের কথা, যা মাআরিফুল কুরআন বলে, দুটোই ফিরে যায় একই স্রষ্টার কাছে, যিনি বৃষ্টি মেপেছেন। পরের বৃষ্টিতে, পরের সফরে, পাঠককে শুধু মনে করতে বলে: বৃষ্টি কে পাঠান, আর পথে চলা কে সম্ভব করেছেন।"
          }
        ]
      }
    ]
  },
  "43:32": {
    "sections": [
      {
        "h": {
          "en": "The Objection It Answers",
          "bn": "যে আপত্তির জবাব"
        },
        "p": [
          {
            "en": "This verse is a reply, and the objection it replies to is quoted a line earlier. In 43:31 they said: why was this Quran not sent down upon a great man from one of the two cities? Greatness, in that sentence, means wealth and standing. Their complaint was not about the message but about the messenger's bank balance and clan.",
            "bn": "এই আয়াতটি একটি জবাব, আর যে আপত্তির জবাব তা এক লাইন আগেই উদ্ধৃত। 43:31 আয়াতে তারা বলেছিল: এই কুরআন দুই জনপদের কোনো গণ্যমান্য ব্যক্তির উপর কেন নাযিল হলো না? সেই বাক্যে 'গণ্যমান্য' মানে সম্পদ ও প্রতিপত্তি। তাদের অভিযোগ বার্তা নিয়ে ছিল না, ছিল বার্তাবাহকের সম্পদ ও বংশমর্যাদা নিয়ে।"
          },
          {
            "en": "So the answer opens: a-hum yaqsimuna rahmata rabbik — do they distribute the mercy of your Lord? The mufassirun read that mercy as prophethood itself, which is what the objection was about. The verse is therefore not a general lecture on wealth. It is an answer to people who thought the appointment of a prophet should follow the same rankings they used among themselves.",
            "bn": "তাই জবাব শুরু হয় এভাবে: আহুম ইয়াক্‌সিমূনা রাহমাতা রাব্বিক — তোমার প্রতিপালকের রহমত কি তারা বণ্টন করে? মুফাসসিরগণ এখানে 'রহমত' বলতে নবুয়তকেই বোঝেন, কারণ আপত্তিটি ছিল সেটি নিয়েই। অর্থাৎ আয়াতটি সম্পদ নিয়ে সাধারণ কোনো বক্তৃতা নয়। এটি সেই মানুষদের জবাব যারা ভেবেছিল, নবী নিয়োগও তাদের নিজেদের ব্যবহৃত মর্যাদাক্রম মেনেই হওয়া উচিত।"
          }
        ]
      },
      {
        "h": {
          "en": "An Argument From the Smaller Case",
          "bn": "ছোট দৃষ্টান্ত থেকে যুক্তি"
        },
        "p": [
          {
            "en": "Nahnu qasamna baynahum ma'ishatahum. The pronoun nahnu is placed in front of the verb, which in Arabic restricts the doing to the one named: We, and no one else, apportioned it. And the thing apportioned is deliberately modest. Not thrones or empires — ma'ishah, from 'aysh, living: the daily means a person lives on, the trade and the wage and the harvest.",
            "bn": "নাহনু কাসামনা বাইনাহুম মা'ঈশাতাহুম। সর্বনাম 'নাহনু' বসানো হয়েছে ক্রিয়ার আগে, যা আরবিতে কাজটিকে কেবল উল্লিখিত সত্তার মধ্যেই সীমাবদ্ধ করে: আমিই, অন্য কেউ নয়, তা বণ্টন করেছি। আর যা বণ্টিত হয়েছে তা ইচ্ছাকৃতভাবেই সাধারণ। সিংহাসন বা সাম্রাজ্য নয় — 'মা'ঈশাহ', যা এসেছে ''আইশ' অর্থাৎ জীবনযাপন থেকে: মানুষ যা দিয়ে দিন চালায়, তার ব্যবসা, মজুরি ও ফসল।"
          },
          {
            "en": "The argument runs from the smaller case to the larger. You did not set your own livelihood; the work available to you, the household you were born into, the health you woke up with, none of that was assigned by you. If the lesser distribution was never in your hands, the appointment of a prophet certainly is not. The objectors were auditing a ledger they had no signature on.",
            "bn": "যুক্তিটি চলে ছোট দৃষ্টান্ত থেকে বড়টির দিকে। নিজের জীবিকা আপনি নিজে ঠিক করেননি; যে কাজ আপনার নাগালে আছে, যে পরিবারে আপনার জন্ম, যে স্বাস্থ্য নিয়ে আপনি ঘুম থেকে উঠেছেন — কোনোটিই আপনার নির্ধারণ করা নয়। ছোট বণ্টনটিই যদি কখনো আপনার হাতে না থাকে, তবে নবী নিয়োগ তো নিশ্চয়ই নয়। আপত্তিকারীরা এমন এক খতিয়ান যাচাই করছিল যেখানে তাদের সইয়ের কোনো জায়গা নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Degrees, and Mutual Service",
          "bn": "মর্যাদা ও পারস্পরিক সেবা"
        },
        "p": [
          {
            "en": "Wa rafa'na ba'dahum fawqa ba'din darajat — and We raised some of them above others in degrees. The two terms are ba'd and ba'd, some and some: indefinite, unnamed, and stated in both directions. Nobody is identified as the permanently upper party. The elevation is described as darajat within ma'ishah in the life of this world, which the verse has already bounded as belonging to this world only.",
            "bn": "ওয়া রাফা'না বা'দাহুম ফাওকা বা'দিন দারাজাত — আর মর্যাদায় আমি এককে অন্যের উপরে উন্নীত করেছি। এখানে দুই পক্ষই 'বা'দ' ও 'বা'দ', অর্থাৎ কেউ ও কেউ: অনির্দিষ্ট, নামহীন, এবং উভয় দিক থেকেই বলা। কাউকেই চিরস্থায়ী উঁচু পক্ষ হিসেবে চিহ্নিত করা হয়নি। এই উন্নীতকরণকে বলা হয়েছে পার্থিব জীবনের 'মা'ঈশাহ'-এর ভেতরকার 'দারাজাত', আর আয়াতটি আগেই তার সীমা টেনে দিয়েছে এই দুনিয়ার মধ্যে।"
          },
          {
            "en": "Then the purpose: li-yattakhidha ba'duhum ba'dan sukhriyya. The commentators derive sukhriyy from taskhir, being put to work for another, and read the clause as mutual employment rather than one class owning another. The grammar makes it reciprocal — some of them, of some of them — so the builder needs the farmer and the farmer needs the builder. Difference is presented as the reason people cannot live alone.",
            "bn": "তারপর উদ্দেশ্য: লিইয়াত্তাখিযা বা'দুহুম বা'দান সুখরিয়্যা। মুফাসসিরগণ 'সুখরিয়্য' শব্দটিকে 'তাসখীর' থেকে নেন, অর্থাৎ একজনকে অন্যের কাজে নিয়োজিত করা; আর বাক্যটিকে পড়েন পারস্পরিক নিয়োগ হিসেবে, এক শ্রেণির অন্য শ্রেণির উপর মালিকানা হিসেবে নয়। ব্যাকরণটিই একে পারস্পরিক করে তোলে — তাদের কেউ, তাদেরই কারও — তাই রাজমিস্ত্রির দরকার কৃষককে, আর কৃষকের দরকার রাজমিস্ত্রিকে। পার্থক্যকে উপস্থাপন করা হয়েছে এই কারণ হিসেবে যে, মানুষ একা বাঁচতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver Roofs and Staircases",
          "bn": "রুপার ছাদ ও সিঁড়ি"
        },
        "p": [
          {
            "en": "If any doubt remained that rank in provision measures worth, the next verses remove it. 43:33 says that were it not that people would become one community, He would have given those who disbelieve in the Most Merciful houses with ceilings and staircases of silver, and 43:34 adds doors and couches. 43:35 calls the whole inventory the enjoyment of worldly life, and gives the Hereafter to the righteous.",
            "bn": "রিযিকের তারতম্য মানুষের মূল্য মাপে কি না, সে বিষয়ে কোনো সন্দেহ থাকলে পরের আয়াতগুলো তা দূর করে দেয়। 43:33 বলে, মানুষ যদি এক দলে পরিণত হওয়ার আশঙ্কা না থাকত, তবে যারা রহমানকে অস্বীকার করে তাদের ঘরের ছাদ ও সিঁড়ি তিনি রুপার করে দিতেন; আর 43:34 যোগ করে দরজা ও আসনের কথা। 43:35 গোটা তালিকাটিকে বলে পার্থিব জীবনের ভোগসামগ্রী, আর আখিরাতকে দেয় মুত্তাকীদের।"
          },
          {
            "en": "That is a striking thing to say. Silver ceilings were withheld from the deniers only because too many people would have been drawn to disbelief by the sight of them. Wealth is thereby described as something Allah is content to hand to those furthest from Him, and holds back for a reason that has nothing to do with their merit. It cannot then be a signal of standing with Him.",
            "bn": "কথাটি বেশ চমকপ্রদ। অস্বীকারকারীদের কাছ থেকে রুপার ছাদ কেবল এ কারণেই আটকে রাখা হয়েছে যে, তা দেখে বহু মানুষ কুফরির দিকে ঝুঁকে পড়ত। এভাবে সম্পদকে বর্ণনা করা হচ্ছে এমন বস্তু হিসেবে, যা আল্লাহ তাঁর থেকে সবচেয়ে দূরের মানুষদের হাতেও তুলে দিতে দ্বিধা করেন না, আর আটকে রাখেন এমন কারণে যার সঙ্গে তাদের যোগ্যতার কোনো সম্পর্ক নেই। কাজেই সম্পদ তাঁর কাছে মর্যাদার চিহ্ন হতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better Than What They Gather",
          "bn": "তারা যা জমায় তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "The verse ends where it began. It opened by asking whether they distribute the mercy of your Lord; it closes with wa rahmatu rabbika khayrun mimma yajma'un — and the mercy of your Lord is better than what they gather. The same phrase frames both ends, so the argument returns to its own first word after passing through livelihoods, ranks and service.",
            "bn": "আয়াতটি শেষ হয় সেখানেই যেখানে শুরু হয়েছিল। শুরুতে প্রশ্ন ছিল, তোমার প্রতিপালকের রহমত কি তারা বণ্টন করে; আর শেষ হয় — ওয়া রাহমাতু রাব্বিকা খাইরুম মিম্মা ইয়াজমা'ঊন, তোমার প্রতিপালকের রহমত তারা যা জমা করে তার চেয়ে উত্তম। একই শব্দবন্ধ দুই প্রান্তেই কাঠামো গড়ে, ফলে জীবিকা, মর্যাদা ও সেবার আলোচনা পেরিয়ে যুক্তিটি নিজের প্রথম শব্দে ফিরে আসে।"
          },
          {
            "en": "Yajma'un is a verb of heaping up, and it is what the objectors had been doing while they judged the Prophet ﷺ by his lack of it. The verse lets their standard stand for a moment and then simply outbids it. What they were gathering is real; it is also, on the verse's accounting, the lesser of the two things on the table, and the only one they cannot distribute.",
            "bn": "'ইয়াজমা'ঊন' হলো স্তূপ করে জমানোর ক্রিয়া, আর আপত্তিকারীরা ঠিক এ কাজটিই করছিল — যখন তারা নবী ﷺ-কে বিচার করছিল তাঁর এই জিনিসের অভাব দিয়ে। আয়াতটি তাদের মানদণ্ডকে এক মুহূর্তের জন্য টিকে থাকতে দেয়, তারপর সহজেই তার চেয়ে বেশি দর হাঁকে। তারা যা জমাচ্ছিল তা বাস্তব; কিন্তু আয়াতের হিসাবে তা টেবিলে থাকা দুটি জিনিসের মধ্যে ছোটটি — আর সেটিই একমাত্র জিনিস যা তারা বণ্টন করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside the Division",
          "bn": "বণ্টনের ভেতরে বাঁচা"
        },
        "p": [
          {
            "en": "Read this way, the verse dismantles two habits at once. Envy loses its object, because the person above you in provision did not appoint himself there and has not been told he is preferred. And contempt loses its object too, since the person below you occupies a rank in the same temporary column, and the column was drawn by Someone else.",
            "bn": "এভাবে পড়লে আয়াতটি একসঙ্গে দুটি অভ্যাস ভেঙে দেয়। হিংসা তার লক্ষ্য হারায়, কারণ রিযিকে আপনার উপরে থাকা মানুষটি নিজে নিজেকে সেখানে বসায়নি, আর তাকে বলাও হয়নি যে সে অগ্রাধিকারপ্রাপ্ত। আর অবজ্ঞাও তার লক্ষ্য হারায়, কারণ আপনার নিচে থাকা মানুষটির অবস্থান একই সাময়িক কলামের ভেতরে — আর কলামটি এঁকেছেন অন্য কেউ।"
          },
          {
            "en": "What is left is the reason the verse gives for the differences: that people take one another into service. Needing help is written into the design, so asking for it is not a humiliation, and giving it is not a favour conferred from above. And the closing clause keeps the ranking honest by naming something that outranks every position in it.",
            "bn": "যা অবশিষ্ট থাকে তা হলো পার্থক্যের জন্য আয়াতের দেওয়া কারণটি: মানুষ যেন পরস্পরকে কাজে লাগাতে পারে। সাহায্যের প্রয়োজন এই পরিকল্পনারই অংশ, তাই তা চাওয়া অপমান নয়, আর তা দেওয়া উপর থেকে বর্ষিত অনুগ্রহও নয়। আর শেষ বাক্যটি গোটা ক্রমটিকে সৎ রাখে, কারণ তা এমন এক জিনিসের নাম বলে যা ওই ক্রমের প্রতিটি অবস্থানের চেয়ে উঁচু।"
          }
        ]
      }
    ]
  }
});
