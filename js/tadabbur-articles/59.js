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
  "59:9": {
    "sections": [
      {
        "h": {
          "en": "Praise for the Ones Left Out",
          "bn": "যারা বাদ পড়ল, তাদের প্রশংসা"
        },
        "p": [
          {
            "en": "The verse has to be read against the distribution it follows. 59:7 sets out how the fay' taken from Banu Nadir is to be divided, with the stated purpose that wealth not circulate only among the rich among you. 59:8 assigns a share to the poor emigrants who were driven from their homes and their properties. The Ansar, who owned the homes the emigrants were living in, are then addressed in the verse that comes next, and it praises them for what they did not receive.",
            "bn": "আয়াতটি পড়তে হবে তার আগের বণ্টনের প্রেক্ষাপটে। 59:7 বলে দেয় বনু নাযীর থেকে পাওয়া ফাই কীভাবে ভাগ হবে, আর উদ্দেশ্য হিসেবে বলে দেয় যেন সম্পদ কেবল তোমাদের ধনীদের মধ্যেই ঘোরাফেরা না করে। 59:8 অংশ নির্ধারণ করে সেই দরিদ্র মুহাজিরদের জন্য, যাদের নিজেদের ঘরবাড়ি ও সম্পত্তি থেকে উৎখাত করা হয়েছিল। আর যে আনসারদের ঘরে মুহাজিররা থাকতেন, তাঁদের সম্বোধন করা হয় পরের আয়াতে — আর তাঁরা যা পাননি, সে জন্যই তাঁদের প্রশংসা করা হয়।"
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
            "bn": "শুরুর বাক্যাংশটি বিখ্যাতভাবে সংহত: 'ওয়াল্লাযীনা তাবাউয়াউদ্‌-দারা ওয়াল-ঈমানা মিন কাবলিহিম' — যারা তাদের আগেই ঘরে ও ঈমানে বসতি করেছে। আরবিতে আপনি কোনো বাড়িতে বসতি করতে পারেন; কিন্তু আক্ষরিক অর্থে কোনো বিশ্বাসে বসতি করতে পারেন না। মুফাসসিরগণ ব্যাখ্যা করেন যে ক্রিয়াপদটি বাড়ির উপর সরাসরি খাটে আর ঈমানের উপর খাটে ইঙ্গিতে; ফলে সঙ্গে একটি দ্বিতীয় ক্রিয়াপদ উহ্য থাকে, যেমন 'এবং ঈমান গ্রহণ করেছে'। এই সংহতিই আসল কথা: মদীনা আর ঈমান ছিল একই ঠিকানা।"
          },
          {
            "en": "Then the claim that is hardest to make about any human being: la yajiduna fi sudurihim hajatan mimma utu, they find in their breasts no want for what the others were given. Not that they suppressed the want, or apologised for it afterwards. They did not find it there. Hajah is a need, a craving, the pull towards a thing you do not have; the sadr is named because that is exactly where it would have sat, and the verse reports the place as empty.",
            "bn": "এরপর আসে কোনো মানুষ সম্পর্কে করা সবচেয়ে কঠিন দাবিটি: 'লা ইয়াজিদূনা ফী সুদূরিহিম হাজাতাম্‌ মিম্মা ঊতূ' — অন্যদের যা দেওয়া হয়েছে তার জন্য তারা নিজেদের বুকে কোনো চাহিদা খুঁজে পায় না। এমন নয় যে তারা চাহিদাটা চেপে রেখেছিল, বা পরে তার জন্য দুঃখ প্রকাশ করেছিল। তারা সেটি সেখানে খুঁজেই পায়নি। 'হাজাহ' মানে প্রয়োজন, আকাঙ্ক্ষা, যা আপনার নেই তার দিকে টান; আর 'সাদর' বা বুকের কথা বলা হয়েছে ঠিক এই কারণে যে সেটি বসত ওখানেই — আর আয়াত জানায়, জায়গাটি খালি।"
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
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে ঘটনাটি বর্ণনা করেন, আর ইমাম মুসলিমও তা বর্ণনা করেন। এক ব্যক্তি ক্ষুধার্ত অবস্থায় নবী ﷺ-এর কাছে এলেন। তিনি তাঁর স্ত্রীদের কাছে খবর পাঠালেন, কিন্তু তাঁদের কাছে পানি ছাড়া কিছু ছিল না; তাই তিনি জিজ্ঞেস করলেন, কে আজ রাতে এই লোকটিকে মেহমান হিসেবে নেবে। আনসারদের এক ব্যক্তি রাজি হলেন, তাঁকে ঘরে নিয়ে গেলেন এবং স্ত্রীকে বললেন আল্লাহর রাসূল ﷺ-এর মেহমানের সম্মান করতে। স্ত্রী জানালেন, ঘরে বাচ্চাদের রাতের খাবার ছাড়া আর কিছু নেই।"
          },
          {
            "en": "He told her to prepare it, to light the lamp and to put the children to sleep if they asked for dinner. When the food was set down she rose as though to adjust the lamp and put it out, and in the dark the two of them made a show of eating so the guest would eat his fill. They passed the night hungry. In the morning the Prophet ﷺ told him that Allah had marvelled at what the two of them did with their guest that night, and this verse came down.",
            "bn": "তিনি স্ত্রীকে বললেন খাবারটা তৈরি করতে, বাতি জ্বালাতে, আর বাচ্চারা রাতের খাবার চাইলে তাদের ঘুম পাড়িয়ে দিতে। খাবার সামনে রাখা হলে স্ত্রী উঠলেন যেন বাতি ঠিক করবেন, আর বাতিটি নিভিয়ে দিলেন; অন্ধকারে তাঁরা দুজন খাওয়ার ভান করতে থাকলেন, যাতে মেহমান পেট ভরে খেতে পারেন। সে রাতটি তাঁরা কাটালেন ক্ষুধার্ত অবস্থায়। সকালে নবী ﷺ তাঁকে বললেন, সে রাতে তাঁরা দুজন তাঁদের মেহমানের সঙ্গে যা করেছেন তাতে আল্লাহ বিস্ময় প্রকাশ করেছেন — আর এই আয়াতটি নাযিল হলো।"
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
            "bn": "'ওয়া ইউ'সিরূনা আলা আনফুসিহিম ওয়া লাও কানা বিহিম খাসাসাহ।' 'ঈসার' মানে নিজের উপর অন্যকে অগ্রাধিকার দেওয়া; আর আয়াতটি এমন একটি বাক্যাংশ যোগ করে, যা এর সব সহজ সংস্করণ বাতিল করে দেয়: যদিও তারা নিজেরাই 'খাসাসাহ'-এর মধ্যে আছে। অভিধানবিদগণ শব্দটিকে যুক্ত করেন ফাঁক বা ফাটলের সঙ্গে — দেয়ালের সেই ছিদ্রগুলো, যা দিয়ে আলো ঢোকে। দারিদ্র্যকে এখানে নাম দেওয়া হচ্ছে নিজের রিযিকের গায়ে একটি ফুটো হিসেবে; আর এখানে বর্ণিত দানটি ঘটছে সেই ফুটো খোলা থাকা অবস্থাতেই।"
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
            "bn": "শেষ বাক্যটি আনসারদের ছাড়িয়ে সবার দিকে প্রসারিত হয়: 'ওয়া মাই ইউকা শুহ্‌হা নাফসিহী ফাউলাইকা হুমুল-মুফলিহূন।' মুফাসসিরগণ 'শুহ্‌হ'-কে 'বুখল' থেকে আলাদা করেন। বুখল হলো নিজের হাতে যা আছে তা আটকে রাখা; আর শুহ্‌হ হলো তার নিচের ক্ষুধাটা — সেই লোভ, যা অন্যদের যা আছে তা চায় এবং নিজের যা আছে তা ছাড়তে অস্বীকার করে। এ কারণেই আয়াতটি একে মানিব্যাগের নয়, নফসের বৈশিষ্ট্য বলে; আর এ কারণেই হুবহু একই বাক্যাংশ 64:16 আয়াতে ফিরে আসে ভিন্ন এক নির্দেশের সঙ্গে যুক্ত হয়ে।"
          },
          {
            "en": "The verb is passive: yuqa, is protected. The successful are not described as men who defeated their own greed but as men from whom it was warded off. That reading is confirmed by Muslim, who relates from Jabir (RA) that the Prophet ﷺ warned against shuhh, saying that it destroyed those who came before, drove them to shed their blood and to make lawful what had been forbidden them. Nobody in that hadith outgrew it. They were either guarded from it or ruined by it.",
            "bn": "ক্রিয়াপদটি কর্মবাচ্য: 'ইউকা' — রক্ষা করা হয়েছে। সফলদের বর্ণনা এমন নয় যে তারা নিজেদের লোভকে হারিয়ে দিয়েছে; বরং এমন যে তাদের থেকে লোভকে ঠেকিয়ে রাখা হয়েছে। এই পাঠ সমর্থিত হয় মুসলিমের বর্ণনায়, যেখানে জাবির (রাঃ) থেকে এসেছে যে নবী ﷺ শুহ্‌হ সম্পর্কে সতর্ক করে বলেছেন, এটিই তোমাদের পূর্ববর্তীদের ধ্বংস করেছে — এটি তাদের রক্তপাতে টেনে নিয়েছে এবং তাদের জন্য হারাম করা জিনিস হালাল করিয়ে ছেড়েছে। সেই হাদীসে কেউই একে ছাড়িয়ে বড় হয়ে ওঠেনি। হয় তাদের একে থেকে বাঁচানো হয়েছে, নয়তো এটি তাদের ধ্বংস করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "কীভাবে এটি যাপন করা যায়"
        },
        "p": [
          {
            "en": "Because shuhh is passive in the verse, the first practice is du'a rather than resolve. Ask to be protected from the greed of your own soul, in those words, and keep asking. 59:10 supplies the second half for everyone who came later: our Lord, forgive us and our brothers who preceded us in faith, and put no rancour in our hearts towards those who have believed. Then give the way the surah describes it: something you had a use for, to someone who cannot return it, without the room being told. The lamp was put out for a reason, and it was not modesty about the food.",
            "bn": "যেহেতু আয়াতে শুহ্‌হ থেকে রক্ষা পাওয়াটা কর্মবাচ্যে এসেছে, তাই প্রথম অনুশীলনটি সংকল্প নয়, দু'আ। নিজের নফসের কৃপণতা থেকে রক্ষা চান, ঠিক এই ভাষাতেই, আর চাইতে থাকুন। পরবর্তীকালে আসা সবার জন্য দ্বিতীয় অর্ধেকটি জোগায় 59:10: হে আমাদের প্রতিপালক, আমাদের ও ঈমানে আমাদের অগ্রবর্তী ভাইদের ক্ষমা করুন, আর যারা ঈমান এনেছে তাদের ব্যাপারে আমাদের অন্তরে কোনো বিদ্বেষ রাখবেন না। তারপর দিন সূরাটি যেভাবে বর্ণনা করেছে সেভাবে: এমন কিছু যা আপনার নিজেরই কাজে লাগত, এমন কাউকে যে তা ফেরত দিতে পারবে না, আর ঘরের কাউকে না জানিয়ে। সেই বাতিটি একটি কারণেই নেভানো হয়েছিল, আর কারণটি খাবার নিয়ে লজ্জা ছিল না।"
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
          "bn": "তাকওয়ায় বাঁধানো"
        },
        "p": [
          {
            "en": "59:18 issues its command twice, wrapping the middle clause like a frame: O you who believe, fear Allah — and let every soul look to what it has sent ahead for tomorrow — and fear Allah; indeed Allah is Aware of what you do. The commentators note the repetition: taqwa opens the audit and taqwa closes it, because self-examination begun without fear of Allah becomes self-congratulation, and examination that ends without it becomes despair. The verse closes by naming Khabir, the All-Aware, whose records never miss.",
            "bn": "59:18 তার নির্দেশ দুবার জারি করে, মাঝের বাক্যাংশটিকে ফ্রেমের মতো ঘিরে: হে ঈমানদারগণ, আল্লাহকে ভয় করো — আর প্রতিটি প্রাণ দেখুক আগামীকালের জন্য সে কী পাঠিয়েছে — এবং আল্লাহকে ভয় করো; নিশ্চয়ই তোমরা যা করো আল্লাহ সে সম্পর্কে সম্যক অবগত। মুফাসসিরগণ এই পুনরাবৃত্তি লক্ষ করেন: তাকওয়া হিসাবটি খোলে আর তাকওয়াই তা বন্ধ করে, কারণ আল্লাহভীতি ছাড়া শুরু করা আত্মপরীক্ষা আত্মপ্রশংসায় গড়ায়, আর যে পরীক্ষা তাকওয়া ছাড়া শেষ হয় তা গড়ায় হতাশায়। আয়াতটি শেষ হয় খাবীর নাম নিয়ে — সম্যক অবগত, যাঁর নথি কখনো কিছু হারায় না।"
          },
          {
            "en": "Tomorrow, ghad, is the Day of Resurrection. The mufassirun pause on the choice of word: a day that could be called distant is called tomorrow, both for its certainty and for its nearness — everything that is coming is near. The soul is told to look at what it has sent ahead, ma qaddamat, the way a merchant checks what he has already shipped to a market he is traveling toward. The deeds are not behind us in the past; they are ahead of us, waiting.",
            "bn": "আগামীকাল — গাদ — হলো কিয়ামতের দিন। মুফাসসিরগণ শব্দচয়নে থামেন: যে দিনকে দূরের বলা যেত, তাকে বলা হয়েছে আগামীকাল — তার সুনিশ্চয়তার জন্য, নৈকট্যের জন্যও — যা আসছেই তা তো নিকটেই। প্রাণকে বলা হয়েছে সে যা আগে পাঠিয়েছে — মা কাদ্দামাত — তা দেখতে, যেভাবে এক বণিক যাচাই করে সে কোন মালামাল আগেই সেই বাজারে পাঠিয়ে দিয়েছে, যেদিকে সে নিজে রওনা হয়েছে। আমলগুলো আমাদের পেছনে অতীতে পড়ে নেই; সেগুলো আমাদের সামনে, অপেক্ষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Audit Is Singular",
          "bn": "হিসাবটি একার"
        },
        "p": [
          {
            "en": "Wal-tanzur nafsun — let a soul look. The subject is an indefinite singular — nafsun, a soul: each soul examines its own ledger, not its neighbour's. The scholars built the discipline of muhasabah, self-reckoning, on this verse: reviewing the record while it can still be amended, repenting from what shames, and sending better ahead. The examination the verse commands is the one we most avoid — we audit everyone else fluently and grant ourselves extensions.",
            "bn": "ওয়াল-তানযুর নাফসুন — একটি প্রাণ দেখুক। কর্তা এখানে অনির্দিষ্ট এক বচন — নাফসুন, একটি প্রাণ: প্রতিটি প্রাণ পরীক্ষা করবে নিজের খাতা, প্রতিবেশীরটা নয়। আলিমগণ এই আয়াতের উপরেই মুহাসাবার — আত্মসমীক্ষার — অনুশাসন গড়ে তুলেছেন: নথি সংশোধনযোগ্য থাকতে থাকতেই তা পর্যালোচনা করা, যা লজ্জিত করে তা থেকে তাওবা করা, আর সামনে আরও ভালো কিছু পাঠানো। আয়াত যে পরীক্ষার নির্দেশ দেয়, সেটিই আমরা সবচেয়ে বেশি এড়িয়ে চলি — অন্য সবার হিসাব আমরা সাবলীলভাবে নিই, আর নিজেদের বেলায় সময় বাড়িয়ে যাই।"
          },
          {
            "en": "Qaddamat is past tense: the soul looks at what it has already sent, not at what it intends. The commentators contrast the two ledgers we keep — the record of intentions, always flattering, and the record of dispatched deeds, often thin. The verse directs the eye to the second. Tomorrow will be furnished only by what actually left the warehouse: the prayer prayed, the wealth given, the wrong repaired, the word of truth said.",
            "bn": "কাদ্দামাত অতীত কালের ক্রিয়া: প্রাণ দেখে সে ইতিমধ্যে যা পাঠিয়েছে, যা পাঠানোর ইচ্ছা রাখে তা নয়। মুফাসসিরগণ আমাদের রাখা দুটি খাতার তুলনা টানেন — নিয়তের খাতা, যা সবসময় তোষামুদে; আর প্রেরিত আমলের খাতা, যা প্রায়ই পাতলা। আয়াতটি চোখ ফেরায় দ্বিতীয়টির দিকে। আগামীকাল সাজবে কেবল তা দিয়েই, যা সত্যি সত্যি গুদাম ছেড়ে বেরিয়েছে: পড়া নামায, দেওয়া সম্পদ, শোধরানো অন্যায়, বলা সত্য কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Forgetting and Being Forgotten",
          "bn": "ভুলে যাওয়া ও বিস্মৃত হওয়া"
        },
        "p": [
          {
            "en": "59:19 gives the warning its depth: and do not be like those who forgot Allah, so He made them forget their own selves — those are the defiantly disobedient. The punishment fits the crime with terrible precision. The commentators unfold it: whoever forgets Allah's rights is left to forget his soul's actual interests — he feeds the body and starves what will outlive it, grooms his image and neglects his record, remembers everything except why he exists.",
            "bn": "59:19 সতর্কবার্তাটিকে তার গভীরতা দেয়: আর তাদের মতো হয়ো না যারা আল্লাহকে ভুলে গিয়েছিল, ফলে তিনি তাদের নিজেদের সত্তাকেই ভুলিয়ে দিয়েছেন — ওরাই তো ফাসিক। শাস্তিটি অপরাধের সাথে মেলে ভয়ংকর নির্ভুলতায়। মুফাসসিরগণ তা খুলে দেখান: যে আল্লাহর হক ভুলে যায়, তাকে ছেড়ে দেওয়া হয় নিজের প্রাণের প্রকৃত স্বার্থ ভুলে থাকতে — সে শরীরকে খাওয়ায় আর যা শরীরকে ছাড়িয়ে বাঁচবে তাকে উপোস রাখে, নিজের ভাবমূর্তি সাজায় আর নিজের আমলনামা অবহেলা করে, সবকিছু মনে রাখে — শুধু সে কেন আছে সেটা ছাড়া।"
          },
          {
            "en": "The same divine response appears in 9:67, where the hypocrites forgot Allah, so He forgot them — left them out of His grace. Self-forgetting is therefore not a private eccentricity but a sentence; the person estranged from Allah becomes a stranger to himself. The verse implies the converse, and the commentators state it: whoever remembers Allah is granted remembrance of his own self — clarity about what he is, what he needs and where he is going.",
            "bn": "একই ঐশী প্রতিক্রিয়া দেখা যায় 9:67 আয়াতে, যেখানে মুনাফিকরা আল্লাহকে ভুলে গিয়েছিল, তাই তিনিও তাদের ভুলে গেছেন — তাঁর অনুগ্রহের বাইরে রেখে দিয়েছেন। আত্মবিস্মৃতি তাই কোনো ব্যক্তিগত খেয়াল নয়, বরং একটি দণ্ডাদেশ; আল্লাহ থেকে বিচ্ছিন্ন মানুষ নিজের কাছেই অপরিচিত হয়ে যায়। আয়াতটি এর বিপরীতটাও ইঙ্গিত করে, আর মুফাসসিরগণ তা স্পষ্ট করে বলেন: যে আল্লাহকে স্মরণ করে তাকে নিজের সত্তার স্মরণ দান করা হয় — সে কী, তার কী প্রয়োজন, আর সে কোথায় চলেছে — এই স্বচ্ছতা।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Surah Ends",
          "bn": "সূরাটি যেভাবে শেষ হয়"
        },
        "p": [
          {
            "en": "The verses that follow raise the stakes and then the gaze. 59:20 declares that the companions of the Fire and the companions of the Garden are not equal — the companions of the Garden are the winners. 59:21 says that if this Quran had been sent down upon a mountain, you would have seen it humbled and split apart from the fear of Allah. And 59:22-24 close the surah with a cascade of His names. The audit of 59:18 ends by contemplating the One before whom it will be read.",
            "bn": "পরের আয়াতগুলো প্রথমে বাজি বাড়ায়, তারপর দৃষ্টি উপরে তোলে। 59:20 ঘোষণা করে, জাহান্নামের অধিবাসীরা আর জান্নাতের অধিবাসীরা সমান নয় — জান্নাতের অধিবাসীরাই সফলকাম। 59:21 বলে, এই কুরআন কোনো পাহাড়ের উপর নাযিল করা হলে তুমি দেখতে তা আল্লাহর ভয়ে বিনীত হয়ে বিদীর্ণ হয়ে গেছে। আর 59:22-24 সূরাটি শেষ করে তাঁর নামের এক ঝরনাধারায়। 59:18 আয়াতের হিসাবটি শেষ হয় তাঁকে ধ্যান করে, যাঁর সামনে সেই হিসাব পড়া হবে।"
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
            "bn": "এর যাপিত রূপ একটি নির্দিষ্ট, সৎ পর্যালোচনা — বহু আলিম রাতে করার পরামর্শ দিয়েছেন: আজকের দিনটি সামনে কী পাঠাল? মেজাজ যাচাই নয়, মালের হিসাব: নামাযগুলো ও তাদের মান, টাকা ও তার চলার পথ, জিহ্বা ও তার উৎপাদন। তারপর সংশোধন এখনো সম্ভব থাকতে থাকতেই বাছাই — এক ঘরের জন্য তাওবা, অন্যটির জন্য শোকর, আর ঘুমের আগে সামনে পাঠিয়ে দেওয়া অন্তত একটি বাস্তব আমল। লিখে হোক বা মনে মনে, ছোট হোক বা দীর্ঘ — আসল কথা হলো তা ঘটবে, এবং তা হবে আপনার নিজের।"
          },
          {
            "en": "The verse also supplies the test for drift. The person who cannot remember the last time they examined themselves has their answer already; the audit lapses exactly when it is most needed. And the frame holds the method: begin in taqwa, so the review happens before Allah and not before an imagined audience, and end in taqwa, so its failures drive you to His mercy rather than to despair. He is Khabir; the review only ever catches up to what He already knows.",
            "bn": "আয়াতটি ভেসে যাওয়ার পরীক্ষাও জুগিয়ে দেয়। যে মানুষ মনে করতে পারে না শেষ কবে সে নিজেকে পরীক্ষা করেছিল, তার উত্তর তো পাওয়াই হয়ে গেছে; হিসাবটি ঠিক তখনই বন্ধ হয়ে থাকে, যখন তা সবচেয়ে জরুরি। আর ফ্রেমটিই পদ্ধতি ধরে রাখে: শুরু করুন তাকওয়া দিয়ে, যেন পর্যালোচনাটা হয় আল্লাহর সামনে, কোনো কল্পিত দর্শকের সামনে নয়; শেষও করুন তাকওয়া দিয়ে, যেন এর ব্যর্থতাগুলো আপনাকে হতাশায় নয়, তাঁর রহমতের দিকে ঠেলে দেয়। তিনি খাবীর; পর্যালোচনা বড়জোর তাঁর আগে থেকে জানা পর্যন্তই পৌঁছায়।"
          }
        ]
      }
    ]
  },
  "59:21": {
    "sections": [
      {
        "h": {
          "en": "A Sentence That Never Happened",
          "bn": "যে বাক্য কখনো ঘটেনি"
        },
        "p": [
          {
            "en": "The verse opens with law, the Arabic particle for a condition contrary to fact — if We had sent down this Quran upon a mountain. Law tells the listener before the sentence finishes that this did not occur and will not. What follows is therefore not a warning about mountains. It is a thought experiment, and the Quran conducts it in order to measure something else entirely.",
            "bn": "আয়াত শুরু হয় লাও দিয়ে, আরবির সেই অব্যয় যা এমন শর্ত বোঝায় যা বাস্তবে ঘটেনি — যদি আমরা এই কুরআন কোনো পাহাড়ের ওপর নাযিল করতাম। লাও শ্রোতাকে বাক্য শেষ হওয়ার আগেই জানিয়ে দেয় যে এটি ঘটেনি এবং ঘটবেও না। তাই এরপর যা আসে তা পাহাড় নিয়ে কোনো সতর্কবাণী নয়। এটি একটি চিন্তার পরীক্ষা, আর কুরআন তা চালায় সম্পূর্ণ ভিন্ন কিছু মাপার জন্য।"
          },
          {
            "en": "The choice of a mountain is not decoration. In the Quran mountains are the standing image of immovability; 78:7 calls them awtad, pegs driven into the earth. The heaviest, least impressionable thing in creation is put forward as the test subject, so that what happens to it can be read as a lower bound rather than an exceptional case.",
            "bn": "পাহাড় বেছে নেওয়া কেবল অলংকার নয়। কুরআনে পাহাড় অটলতার স্থায়ী প্রতীক; 78:7 আয়াতে এগুলোকে বলা হয়েছে আওতাদ, অর্থাৎ জমিনে গেঁথে দেওয়া গোঁজ। সৃষ্টির সবচেয়ে ভারী, সবচেয়ে কম প্রভাবিত হওয়া বস্তুটিকেই পরীক্ষার বিষয় করা হয়েছে, যাতে তার সাথে যা ঘটে তা ব্যতিক্রম নয়, বরং সর্বনিম্ন সীমা হিসেবে পড়া যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Humbled and Split Apart",
          "bn": "বিনীত ও বিদীর্ণ"
        },
        "p": [
          {
            "en": "You would have seen it khashi'an mutasaddi'an. The first word is the one that matters most to a worshipper. Khashi' is from khushu', the inward stillness and lowering that 23:2 makes the mark of successful believers in their prayer. The mountain is described doing exactly what the believer is commanded to do when he stands in salah. The comparison is not between a mountain and a rock; it is between a mountain and you.",
            "bn": "তুমি তাকে দেখতে খাশি‘আন মুতাসাদ্দি‘আন। প্রথম শব্দটিই একজন মুসল্লির জন্য সবচেয়ে গুরুত্বপূর্ণ। খাশি‘ এসেছে খুশূ‘ থেকে, সেই অন্তরের স্থিরতা ও নত হওয়া, যা 23:2 আয়াতে সফল মুমিনদের নামাজের চিহ্ন হিসেবে বলা হয়েছে। পাহাড়কে বর্ণনা করা হচ্ছে ঠিক সেই কাজ করতে দেখা যাচ্ছে যা মুমিনকে নামাজে দাঁড়িয়ে করতে বলা হয়েছে। তুলনাটি পাহাড় আর পাথরের মধ্যে নয়; তুলনাটি পাহাড় আর তোমার মধ্যে।"
          },
          {
            "en": "Mutasaddi' comes from sad', a fissure — the word for a crack running through something solid. The form used carries the sense of splitting apart progressively, not shattering in an instant. And this is not without precedent in the Quran: in 7:143, when Allah manifested to the mountain for Musa (AS), it was made level and Musa fell down senseless. A mountain has come apart before, and the Quran is reminding a reader who knows that story.",
            "bn": "মুতাসাদ্দি‘ এসেছে সাদ‘ থেকে, অর্থাৎ ফাটল — শক্ত কিছুর ভেতর দিয়ে চলে যাওয়া চিড়। ব্যবহৃত রূপটি ক্রমশ বিদীর্ণ হওয়ার অর্থ বহন করে, এক নিমেষে চূর্ণ হওয়ার নয়। আর কুরআনে এর নজিরও আছে: 7:143 আয়াতে, যখন আল্লাহ মূসা (আঃ)-এর জন্য পাহাড়ের প্রতি তাজাল্লি প্রকাশ করেন, তখন তা চূর্ণ-বিচূর্ণ হয়ে যায় এবং মূসা সংজ্ঞা হারিয়ে পড়ে যান। পাহাড় আগেও বিদীর্ণ হয়েছে, আর কুরআন সেই ঘটনা-জানা পাঠককেই মনে করিয়ে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Min Khashyat Allah",
          "bn": "মিন খাশইয়াতিল্লাহ"
        },
        "p": [
          {
            "en": "The cause is given as min khashyat Allah, out of awe of Allah. Arabic distinguishes khashyah from khawf. Khawf is fear of a thing that may harm you; khashyah is the awe that comes from knowing what you stand before, and it grows with knowledge rather than with ignorance. That is why 35:28 says that it is only those of His servants who have knowledge who have khashyah of Allah.",
            "bn": "কারণ হিসেবে বলা হয়েছে মিন খাশইয়াতিল্লাহ, আল্লাহর ভয়ে। আরবি খাশইয়াহ ও খাওফকে আলাদা করে। খাওফ হলো ক্ষতি করতে পারে এমন কিছুর ভয়; খাশইয়াহ হলো সেই বিস্ময়মিশ্রিত ভয় যা জন্মায় কার সামনে দাঁড়িয়ে আছ তা জানা থেকে, আর তা অজ্ঞতায় নয়, জ্ঞানে বাড়ে। এ কারণেই 35:28 বলে, আল্লাহর বান্দাদের মধ্যে কেবল জ্ঞানীরাই তাঁকে খাশইয়াহ করে।"
          },
          {
            "en": "Read with that distinction, the verse stops being an accusation and becomes a diagnosis. The mountain would tremble because it would apprehend what had been placed on it. A heart that hears the same words and stays flat is not being called wicked; it is being shown that it has not yet grasped what it is holding. The remedy the verse implies is understanding, which is exactly what its second half goes on to ask for.",
            "bn": "এই পার্থক্য মাথায় রেখে পড়লে আয়াতটি আর অভিযোগ থাকে না, রোগনির্ণয় হয়ে ওঠে। পাহাড় কাঁপত, কারণ তার ওপর কী রাখা হয়েছে তা সে উপলব্ধি করত। যে হৃদয় একই বাণী শুনেও নিস্তরঙ্গ থাকে, তাকে দুষ্ট বলা হচ্ছে না; তাকে দেখানো হচ্ছে যে সে যা ধারণ করছে তা এখনো ধরতে পারেনি। আয়াত যে প্রতিকারের ইঙ্গিত দেয় তা হলো উপলব্ধি — আর দ্বিতীয়ার্ধ ঠিক সেটিই চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Placed Between Two Mirrors",
          "bn": "দুই আয়নার মাঝখানে"
        },
        "p": [
          {
            "en": "Surah al-Hashr takes its name from the gathering and expulsion of Banu Nadir, which the opening verses describe. But by 59:18 the surah has turned inward: fear Allah, and let every soul look at what it has sent ahead for tomorrow. Then 59:19 warns against being like those who forgot Allah, so He made them forget themselves — a line the commentators read as the exact description of a numb heart.",
            "bn": "সূরা আল-হাশরের নাম এসেছে বনু নাযীরের সমবেত করা ও বহিষ্কারের ঘটনা থেকে, যা শুরুর আয়াতগুলোতে বর্ণিত। কিন্তু 59:18 আয়াতে পৌঁছে সূরাটি ভেতরের দিকে ঘুরে যায়: আল্লাহকে ভয় করো, আর প্রত্যেক ব্যক্তি যেন দেখে সে আগামীকালের জন্য কী পাঠিয়েছে। এরপর 59:19 সতর্ক করে তাদের মতো হওয়া থেকে যারা আল্লাহকে ভুলে গেছে, ফলে তিনি তাদের নিজেদেরই ভুলিয়ে দিয়েছেন — মুফাসসিরগণ এই বাক্যটিকে অসাড় হৃদয়ের নিখুঁত বর্ণনা হিসেবে পড়েন।"
          },
          {
            "en": "Immediately after our verse come 59:22-24, the great passage of the divine names: He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed, the Sovereign, the Pure, the Source of peace. So 59:21 is the hinge. Behind it, look at your own heart; ahead of it, look at your Lord. No sound report attaches an occasion of revelation to this verse in particular; it is general, addressed to whoever is holding the Book.",
            "bn": "আমাদের আয়াতের ঠিক পরেই আসে 59:22-24, আল্লাহর নামসমূহের সেই মহান অংশ: তিনিই আল্লাহ, যিনি ছাড়া কোনো উপাস্য নেই, গায়েব ও প্রকাশ্যের জ্ঞানী, বাদশাহ, পবিত্র, শান্তির উৎস। তাই 59:21 হলো কব্জা। এর পেছনে — নিজের হৃদয়ের দিকে তাকাও; সামনে — নিজের রবের দিকে তাকাও। এই আয়াতটির সাথে বিশেষভাবে কোনো সহীহ শানে নুযূল যুক্ত নেই; এটি সাধারণ, আর যে-ই কিতাবটি হাতে ধরেছে তার উদ্দেশ্যেই বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Purpose Clause",
          "bn": "উদ্দেশ্য-বাক্যাংশ"
        },
        "p": [
          {
            "en": "The verse does not end with the mountain. It adds: and these are the parables We set forth for people, la'allahum yatafakkarun, so that they may reflect. Amthal, parables, are stated here to have a function, and the function is thought. The mountain is not offered as a feeling to be produced on demand but as a comparison to be worked through until it changes an estimate.",
            "bn": "আয়াত পাহাড় দিয়ে শেষ হয় না। এরপর যোগ হয়: আর এসব উপমা আমরা মানুষের জন্য পেশ করি, লা‘আল্লাহুম ইয়াতাফাক্কারূন, যাতে তারা চিন্তা করে। আমসাল বা উপমার এখানে একটি কাজ নির্ধারণ করা হয়েছে, আর সেই কাজ হলো চিন্তা। পাহাড়কে হাজির করা হয়নি চাহিদামতো তৈরি করা কোনো অনুভূতি হিসেবে, বরং এমন এক তুলনা হিসেবে যা ভেবে ভেবে এগোতে হয়, যতক্ষণ না তা কোনো হিসাব বদলে দেয়।"
          },
          {
            "en": "This matters for how the verse should be used on oneself. It is not asking a reader to manufacture tears. Tafakkur is deliberate, slow and repeatable: pause on a line, ask who is speaking and to whom, and consider what would change if it were taken as literally true. The commentators treat this closing clause as the instruction manual for everything the surah has just said.",
            "bn": "নিজের ওপর আয়াতটি কীভাবে প্রয়োগ করা হবে, এর জন্য কথাটি জরুরি। এটি পাঠককে কান্না বানাতে বলছে না। তাফাক্কুর ধীর, ইচ্ছাকৃত ও পুনরাবৃত্তিযোগ্য: একটি পঙ্‌ক্তিতে থামো, জিজ্ঞেস করো কে বলছেন এবং কাকে, আর ভাবো এটিকে আক্ষরিকভাবে সত্য ধরলে কী বদলাত। মুফাসসিরগণ এই শেষ বাক্যাংশটিকে সূরার এতক্ষণের সব কথার ব্যবহারবিধি হিসেবেই দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "আজ যেভাবে এটি জীবনে আসে"
        },
        "p": [
          {
            "en": "Most people meet this verse with a private embarrassment: they have read the Quran for years and felt very little. The verse itself is gentler than that reaction. It does not say a hard heart is beyond help; it says a mountain would respond, and then immediately hands the reader a method — reflect. The gap between the mountain and us is a gap in attention, and attention can be trained.",
            "bn": "বেশিরভাগ মানুষ এই আয়াতের সামনে এক ধরনের ব্যক্তিগত লজ্জা নিয়ে দাঁড়ায়: বছরের পর বছর কুরআন পড়েও তারা খুব সামান্যই অনুভব করেছে। আয়াত নিজে অবশ্য সেই প্রতিক্রিয়ার চেয়ে অনেক নরম। এটি বলে না যে কঠিন হৃদয় নিরাময়ের বাইরে; এটি বলে পাহাড় সাড়া দিত, আর সঙ্গে সঙ্গেই পাঠকের হাতে একটি পদ্ধতি তুলে দেয় — চিন্তা করো। পাহাড় ও আমাদের মধ্যকার ফাঁকটি মনোযোগের ফাঁক, আর মনোযোগ অভ্যাসে গড়া যায়।"
          },
          {
            "en": "Concretely: slow the pace. Read five verses with the translation instead of a page without it. Recite one passage in prayer for a week until the words stop passing unnoticed. Learn the meanings of the words you say most often, since a language-learner has an advantage here that a fluent reciter can lose. None of that guarantees a feeling, and the verse never promises one. What it asks for is that the Book be handled as what it is.",
            "bn": "বাস্তবে: গতি কমান। এক পৃষ্ঠা অনুবাদ ছাড়া পড়ার বদলে পাঁচটি আয়াত অনুবাদসহ পড়ুন। এক সপ্তাহ ধরে নামাজে একই অংশ তিলাওয়াত করুন, যতক্ষণ না শব্দগুলো আর অলক্ষ্যে পেরিয়ে যায়। যে শব্দগুলো আপনি সবচেয়ে বেশি বলেন তার অর্থ শিখুন — এখানে ভাষা-শিক্ষার্থীর এমন এক সুবিধা আছে যা সাবলীল কারীও হারিয়ে ফেলতে পারেন। এর কোনোটিই কোনো অনুভূতির নিশ্চয়তা দেয় না, আর আয়াতও কখনো তা প্রতিশ্রুতি দেয়নি। এটি কেবল চায়, কিতাবটিকে যা তা হিসেবেই যেন ধরা হয়।"
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
          "bn": "ভাঙা অঙ্গীকারের পরে বসানো"
        },
        "p": [
          {
            "en": "Surah al-Hashr spends most of its length on people who failed: a tribe expelled after treachery, hypocrites who promised support and gave none. Then it turns on the reader. 59:18 tells the believers to fear Allah and let every soul look to what it has sent ahead for tomorrow, and 59:19 warns them not to be like those who forgot Allah, so He made them forget themselves. Forgetting Allah, the surah says, costs you your own self.",
            "bn": "সূরা আল-হাশরের বেশির ভাগ অংশ কাটে ব্যর্থ মানুষদের নিয়ে: বিশ্বাসঘাতকতার পর বিতাড়িত এক গোত্র, আর সাহায্যের প্রতিশ্রুতি দিয়ে কিছুই না দেওয়া মুনাফিকরা। এরপর সূরাটি পাঠকের দিকে ফেরে। 59:18 আয়াত মুমিনদের বলে আল্লাহকে ভয় করতে এবং প্রত্যেক ব্যক্তি যেন দেখে সে আগামীকালের জন্য কী পাঠিয়েছে, আর 59:19 আয়াত সতর্ক করে যেন তারা তাদের মতো না হয় যারা আল্লাহকে ভুলে গিয়েছিল, ফলে তিনি তাদের নিজেদেরকেই ভুলিয়ে দিয়েছেন। সূরা বলছে, আল্লাহকে ভুলে যাওয়ার মূল্য হলো নিজেকেই হারিয়ে ফেলা।"
          },
          {
            "en": "So the closing passage is a remedy prescribed for that exact disease. If forgetting Him unmakes a person, the cure is to be shown who He is in concentrated form. 59:21 prepares the ground by saying that had this Quran been sent down upon a mountain, you would have seen it humbled and split apart from fear of Allah. Immediately after that image of a mountain giving way, the names begin.",
            "bn": "তাই শেষ অংশটি ঠিক সেই রোগের জন্যই লেখা ব্যবস্থাপত্র। তাঁকে ভুলে যাওয়া যদি মানুষকে ভেঙে দেয়, তবে নিরাময় হলো ঘনীভূত রূপে তাঁকে চিনিয়ে দেওয়া। 59:21 আয়াত জমি প্রস্তুত করে এই কথা বলে যে, এই কুরআন যদি কোনো পাহাড়ের ওপর নাযিল করা হতো, তুমি তাকে দেখতে আল্লাহর ভয়ে বিনীত ও বিদীর্ণ। পাহাড় ভেঙে পড়ার সেই দৃশ্যের ঠিক পরেই নামগুলো শুরু হয়।"
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
            "bn": "তিনটি আয়াতের প্রতিটিই শুরু হয় একই দুটি শব্দ দিয়ে — 'হুয়াল্লাহু', তিনিই আল্লাহ। এর মধ্যে দুটি আয়াত এরপর যোগ করে 'লা ইলাহা ইল্লা হুয়া', তিনি ছাড়া কোনো ইলাহ নেই; আর তৃতীয়টি সরাসরি সৃষ্টির কথায় চলে যায়। এই পুনরাবৃত্তি অলংকার নয়। এরপর আসা প্রতিটি বাক্যাংশ একই কর্তার সঙ্গে বাঁধা, যাতে সুতো হারিয়ে ফেলা পাঠককে পরের বর্ণনা শুরু হওয়ার আগেই ফিরিয়ে আনা হয় সেই একটি নামের কাছে, যা বাকি সবকিছুকে নিয়ন্ত্রণ করে।"
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
            "bn": "59:22 আয়াত এমন দুটি বিষয়কে জোড়া লাগায় যা আমরা সাধারণত আলাদা রাখি। তিনি 'গায়ব' ও 'শাহাদাহ'-র জ্ঞানী — যা আমাদের থেকে গোপন এবং যা আমাদের সামনে দাঁড়িয়ে আছে, উভয়েরই; আর একই আয়াতে তিনি আর-রাহমান, আর-রাহীম। যে পাঠককে এইমাত্র জানানো হয়েছে মুনাফিকদের মুখোশ খুলে গেছে, তার জন্য এই ক্রমটি গুরুত্বপূর্ণ। যাঁর কাছ থেকে কিছুই লুকানো যায় না — 6:59 আয়াতে যাঁর সম্পর্কে বিস্তারিত বলা হয়েছে যে ঝরে পড়া প্রতিটি পাতাও তিনি জানেন — সেই একই বাক্যে তাঁর জ্ঞান প্রতিষ্ঠার সঙ্গে সঙ্গেই তাঁকে ডাকা হয় তাঁর রহমতের নামে।"
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
            "bn": "59:23 আয়াত পরপর কতগুলো নাম ছেড়ে দেয় যাদের মাঝে কোনো সংযোজক অব্যয় নেই, ফলে সেগুলো আসে এক অবিচ্ছিন্ন নিঃশ্বাসে: আল-মালিক — সার্বভৌম, আল-কুদ্দূস — পরম পবিত্র, আস-সালাম, আল-মুমিন — নিরাপত্তাদাতা, আল-মুহাইমিন — পর্যবেক্ষক, আল-আযীয, আল-জাব্বার, আল-মুতাকাব্বির। এদের কয়েকটির অনুবাদে ভিন্নতা আছে, কারণ আরবি শব্দগুলো ইংরেজি বা বাংলার কোনো একক শব্দের চেয়ে ঘন। এই ক্রমটি যা করে তা হলো কর্তৃত্ব থেকে পবিত্রতায়, সেখান থেকে নিরাপত্তায়, আর তারপর অপ্রতিরোধ্য ক্ষমতায় এগিয়ে যাওয়া।"
          },
          {
            "en": "Two of them are worth slowing over. Al-Bukhari and Muslim both narrate from Ibn Mas'ud (RA) that the companions used to say peace be upon Allah in the prayer until the Prophet ﷺ stopped them, telling them that Allah Himself is as-Salam, and teaching them the tashahhud instead. And al-Mutakabbir is praise when said of Him and an accusation when said of us: Muslim narrates from Abu Hurayrah (RA) that Allah says greatness is His cloak and might His garment, and whoever contends with Him will be punished.",
            "bn": "এদের দুটির কাছে একটু থামা দরকার। ইমাম বুখারী ও মুসলিম উভয়েই ইবনে মাসঊদ (রাঃ) থেকে বর্ণনা করেন যে সাহাবীগণ নামাযে বলতেন 'আল্লাহর ওপর শান্তি বর্ষিত হোক', যতক্ষণ না নবী ﷺ তাঁদের নিষেধ করেন এই বলে যে আল্লাহ নিজেই তো আস-সালাম, আর তার বদলে তাঁদের তাশাহহুদ শিখিয়ে দেন। আর 'আল-মুতাকাব্বির' তাঁর ক্ষেত্রে প্রশংসা, অথচ আমাদের ক্ষেত্রে অভিযোগ: মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহ বলেন, গৌরব তাঁর চাদর আর ক্ষমতা তাঁর পরিধেয়, আর যে তাঁর সঙ্গে এ নিয়ে বিবাদ করে তাকে তিনি শাস্তি দেবেন।"
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
            "bn": "59:24 আয়াত ক্রম অনুসারে তিনটি নাম দেয়, আর মুফাসসিরগণ এই ক্রমটিকে সমার্থক শব্দের তালিকা নয়, বরং একটি ধারাবাহিকতা হিসেবে পড়েন। 'আল-খালিক' কোনো কিছুর ফায়সালা করেন ও তার পরিমাপ ঠিক করেন, 'আল-বারি' তাকে শূন্য থেকে অস্তিত্বে আনেন, আর 'আল-মুসাউয়ির' তাকে দেন সেই নির্দিষ্ট আকৃতি যা সে ধারণ করে। শেষ ধাপটির কারণেই দুটি মুখ কখনো এক হয় না, আর 3:6 আয়াত তা সরাসরি বলে — তিনিই মাতৃগর্ভে তোমাদের আকৃতি দেন যেভাবে ইচ্ছে করেন। আপনার নির্দিষ্ট আকৃতিটি ছিল একটি সিদ্ধান্ত, উদ্বৃত্ত কিছু নয়।"
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
            "bn": "এরপর অংশটি সেই নীতিটি বলে দেয় যা গোটা অংশজুড়ে দেখানো হচ্ছিল: 'আল-আসমাউল হুসনা' — সুন্দরতম নামসমূহ তাঁরই। কুরআন এ কথা আবার বলে 7:180 আয়াতে, যা যোগ করে এই নির্দেশ যে এসব নামে তাঁকে ডাকো এবং যারা এগুলো বিকৃত করে তাদের ছেড়ে দাও; আবার বলে 17:110 আয়াতে, যেখানে বলা হয়েছে তোমরা এদের যেটি দিয়েই ডাকো, সুন্দরতম নামগুলো তাঁরই; আর আবার বলে 20:8 আয়াতে, যেখানে একই কথা আসে 'তিনি ছাড়া কোনো ইলাহ নেই' — এই ঘোষণার পরেই। নামগুলো এখানে শব্দভাণ্ডার হিসেবে দেওয়া হয়নি। দেওয়া হয়েছে ডাকার ঠিকানা হিসেবে।"
          },
          {
            "en": "Al-Bukhari and Muslim both narrate from Abu Hurayrah (RA) that Allah has ninety-nine names and whoever retains them enters Paradise. Hadith scholars have long noted that the familiar enumerated list is preserved in at-Tirmidhi and Ibn Majah rather than in the two Sahihs, and that the counting itself is not part of the sound wording. Nor does the number close the matter: Ahmad records from Ibn Mas'ud (RA) a supplication asking by every name Allah has named Himself with, revealed in His Book, taught to any of His creation, or kept hidden with Him.",
            "bn": "ইমাম বুখারী ও মুসলিম উভয়েই আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর নিরানব্বইটি নাম আছে, আর যে সেগুলো আয়ত্ত করবে সে জান্নাতে প্রবেশ করবে। হাদীসবিশারদগণ বহুকাল ধরেই লক্ষ করেছেন যে পরিচিত তালিকাটি দুই সহীহ গ্রন্থে নয়, বরং তিরমিযী ও ইবনে মাজাহতে সংরক্ষিত, এবং নাম গুনে দেওয়ার অংশটি সহীহ ভাষ্যের অন্তর্ভুক্ত নয়। সংখ্যাটি বিষয়টিকে বন্ধও করে দেয় না: আহমদ ইবনে মাসঊদ (রাঃ) থেকে এমন এক দুআ বর্ণনা করেন যেখানে চাওয়া হয় আল্লাহর প্রতিটি নামের উসিলায় — যে নামে তিনি নিজেকে নাম দিয়েছেন, যা তিনি তাঁর কিতাবে নাযিল করেছেন, যা তিনি তাঁর সৃষ্টির কাউকে শিখিয়েছেন, অথবা যা তিনি নিজের কাছে গোপন রেখেছেন।"
          }
        ]
      }
    ]
  }
});
