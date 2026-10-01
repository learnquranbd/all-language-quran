/**
 * Tadabbur long-form articles — surah 33.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "33:21": {
    "sections": [
      {
        "h": {
          "en": "Declared During a Siege",
          "bn": "অবরোধের মধ্যে ঘোষিত"
        },
        "p": [
          {
            "en": "The verse does not float free; it sits in the middle of Surah al-Ahzab's account of the siege of Madinah. The passage around it describes eyes swerving and hearts reaching throats in 33:10, hypocrites saying Allah and His Messenger promised us only delusion in 33:12, and believers whose faith only grew at the sight of the armies in 33:22. Exactly there, the text says: in the Messenger of Allah you have an excellent example.",
            "bn": "আয়াতটি শূন্যে ভাসে না; এটি বসে আছে সূরা আল-আহযাবে মদীনা অবরোধের বিবরণের ঠিক মাঝখানে। এর চারপাশের অংশ বর্ণনা করে: 33:10-এ চোখ বেঁকে যাওয়া আর কলিজা কণ্ঠাগত হওয়া, 33:12-এ মুনাফিকদের বলা — আল্লাহ ও তাঁর রাসূল আমাদের কেবল ধোঁকার প্রতিশ্রুতিই দিয়েছেন, আর 33:22-এ সেই মুমিনরা, সৈন্যবাহিনী দেখে যাদের ঈমান কেবল বেড়েই গিয়েছিল। ঠিক সেখানেই কুরআন বলে: আল্লাহর রাসূলের মধ্যে তোমাদের জন্য রয়েছে উত্তম আদর্শ।"
          },
          {
            "en": "The placement fixes the meaning. The uswa hasanah was declared not over a serene teaching scene but over a Prophet ﷺ enduring siege with his companions — sound reports describe him digging the trench and carrying its earth with them, hungry as they were hungry. The example offered is a whole man under full pressure: his steadfastness, his labour alongside his people, his refusal of despair while the confederates surrounded the city.",
            "bn": "এই অবস্থানই অর্থ ঠিক করে দেয়। উসওয়া হাসানা ঘোষিত হয়েছিল কোনো প্রশান্ত পাঠদানের দৃশ্যের ওপরে নয় — সাহাবীদের সঙ্গে অবরোধ সহ্য করতে থাকা এক নবী ﷺ-এর ওপরে; সহীহ বর্ণনাগুলো তাঁকে দেখায় তাদের সঙ্গে পরিখা খুঁড়ছেন, তার মাটি বইছেন — তারা যেমন ক্ষুধার্ত ছিলেন তিনিও তেমনি ক্ষুধার্ত। যে আদর্শ পেশ করা হয়েছে তা পূর্ণ চাপের মধ্যে এক সম্পূর্ণ মানুষ: তাঁর অবিচলতা, নিজের মানুষদের পাশে তাঁর শ্রম, আর সম্মিলিত বাহিনী শহর ঘিরে থাকা অবস্থাতেও হতাশাকে তাঁর প্রত্যাখ্যান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Uswa",
          "bn": "উসওয়া শব্দটি"
        },
        "p": [
          {
            "en": "An uswa is a pattern one traces — the model a person moulds their conduct upon. The Quran uses the phrase uswatun hasanah for only one other figure: Ibrahim (AS) and those with him, in 60:4 and 60:6, for their clean break from the worship of other than Allah. In this verse the pattern is the Messenger of Allah ﷺ himself — not a list of rules extracted from him but the lived shape of the man, laqad kana lakum, established for you as fact.",
            "bn": "উসওয়া হলো সেই নকশা, যা ধরে ধরে আঁকা হয় — যে ছাঁচে মানুষ নিজের আচরণ গড়ে। কুরআন উসওয়াতুন হাসানা বাক্যবন্ধটি আর মাত্র একজনের জন্য ব্যবহার করেছে: ইবরাহীম (আঃ) ও তাঁর সঙ্গীদের জন্য — 60:4 ও 60:6-এ — আল্লাহ ছাড়া অন্যের ইবাদত থেকে তাঁদের স্পষ্ট বিচ্ছেদের কারণে। এই আয়াতে নকশাটি স্বয়ং আল্লাহর রাসূল ﷺ — তাঁর থেকে নিংড়ে নেওয়া নিয়মের তালিকা নয়, বরং মানুষটির যাপিত অবয়ব: লাকাদ কানা লাকুম — তোমাদের জন্য প্রতিষ্ঠিত সত্য হিসেবে।"
          },
          {
            "en": "A pattern differs from a biography. A biography is read; a pattern is traced, act by act, onto one's own conduct. The verse's claim is that the Prophet's ﷺ way of dealing — with fear, hunger, family, money, enemies, defeat and victory — is transferable, designed for imitation by ordinary people. That is why the community preserved the Sunnah with such care: it understood the record as a template it was commanded to use, not a treasure it was merely commanded to admire.",
            "bn": "নকশা আর জীবনী এক নয়। জীবনী পড়া হয়; নকশা আঁকা হয় — কাজে কাজে, নিজের আচরণের ওপর। আয়াতের দাবি হলো: ভয়, ক্ষুধা, পরিবার, অর্থ, শত্রু, পরাজয় ও বিজয়ের সঙ্গে নবী ﷺ-এর আচরণের ধরনটি হস্তান্তরযোগ্য — সাধারণ মানুষের অনুকরণের জন্যই পরিকল্পিত। এ কারণেই উম্মত সুন্নাহকে এত যত্নে সংরক্ষণ করেছে: সে এই নথিকে বুঝেছে ব্যবহারের আদেশপ্রাপ্ত এক ছাঁচ হিসেবে — কেবল মুগ্ধ হওয়ার আদেশপ্রাপ্ত কোনো রত্নভান্ডার হিসেবে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Keys to Benefit",
          "bn": "উপকৃত হওয়ার তিন চাবি"
        },
        "p": [
          {
            "en": "The verse then restricts who actually profits: li-man kana yarjullaha wal-yawmal-akhira wa dhakarallaha kathiran — for whoever hopes in Allah and the Last Day and remembers Allah much. The example stands open to all, but it transfers only to a person already oriented: hoping in Allah, accountable to a Last Day, kept awake by abundant remembrance. Without those, the sirah shrinks into history — admired, quoted, and not followed.",
            "bn": "এরপর আয়াত সীমিত করে দেয়, প্রকৃত লাভ কার: লিমান কানা ইয়ারজুল্লাহা ওয়াল ইয়াওমাল আখিরা ওয়া যাকারাল্লাহা কাসীরা — তার জন্য, যে আল্লাহ ও শেষ দিনের আশা রাখে এবং আল্লাহকে বেশি বেশি স্মরণ করে। আদর্শটি সবার জন্য খোলা, কিন্তু তা স্থানান্তরিত হয় কেবল আগে থেকে অভিমুখী মানুষের মধ্যে: যে আল্লাহর প্রতি আশাবাদী, শেষ দিনের কাছে জবাবদিহ, প্রচুর স্মরণে জাগ্রত। এসব ছাড়া সীরাত সংকুচিত হয়ে ইতিহাস হয়ে যায় — প্রশংসিত, উদ্ধৃত, কিন্তু অনুসৃত নয়।"
          },
          {
            "en": "The three conditions also explain how imitation survives cost. Following the Prophet ﷺ at the trench meant hunger and fear; hope in Allah and the Last Day is what makes such a pattern rational to copy. The one who expects nothing beyond this world will imitate only what pays within it. The verse is candid about this: the example is excellent absolutely, but it is usable in proportion to the imitator's hope and remembrance.",
            "bn": "এই তিন শর্ত এও ব্যাখ্যা করে, মূল্য দিতে হলেও অনুকরণ কীভাবে টেকে। পরিখার দিনে নবী ﷺ-কে অনুসরণের অর্থ ছিল ক্ষুধা ও ভয়; আল্লাহ ও শেষ দিনের আশাই এমন নকশা অনুলিপি করাকে যুক্তিসঙ্গত করে। যে এই দুনিয়ার বাইরে কিছুই প্রত্যাশা করে না, সে কেবল সেটুকুই অনুকরণ করবে যা এই দুনিয়াতেই লাভ দেয়। আয়াত এ বিষয়ে অকপট: আদর্শটি নিরঙ্কুশভাবেই উত্তম, কিন্তু তা ব্যবহারযোগ্য অনুকরণকারীর আশা ও স্মরণের অনুপাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "His Character Was the Quran",
          "bn": "তাঁর চরিত্রই ছিল কুরআন"
        },
        "p": [
          {
            "en": "Asked to describe the Prophet's ﷺ character, Aisha (RA) gave the answer Muslim preserves: his character was the Quran. The Book commanding justice, mercy, honesty and restraint had in him a walking demonstration. 68:4 had already sworn to it — indeed, you are upon a magnificent character. So the uswa is not an addition to the Quran but the Quran made visible; imitating him ﷺ and obeying the Book are one motion.",
            "bn": "নবী ﷺ-এর চরিত্রের বর্ণনা চাওয়া হলে আয়েশা (রাঃ) সেই উত্তরটি দেন যা ইমাম মুসলিম সংরক্ষণ করেছেন: তাঁর চরিত্রই ছিল কুরআন। ইনসাফ, রহমত, সততা ও সংযমের আদেশ দেওয়া কিতাবটির তাঁর মধ্যে ছিল এক চলমান প্রদর্শনী। 68:4 আগেই তার সাক্ষ্য দিয়ে রেখেছে — নিশ্চয় আপনি মহান চরিত্রের ওপর প্রতিষ্ঠিত। সুতরাং উসওয়া কুরআনের ওপর কোনো সংযোজন নয়, বরং দৃশ্যমান করা কুরআন; তাঁকে ﷺ অনুকরণ করা আর কিতাব মান্য করা — একই গতি।"
          },
          {
            "en": "3:31 makes the imitation a test of love: say, if you love Allah, then follow me; Allah will love you and forgive your sins. Claimed love of Allah is verified by following the pattern, and answered — the verse promises — by Allah's love in return. This turns the study of his ﷺ life from an optional devotion into the appointed route by which affection for Allah becomes something demonstrable.",
            "bn": "3:31 অনুকরণকে ভালোবাসার পরীক্ষা বানিয়ে দেয়: বলুন, তোমরা যদি আল্লাহকে ভালোবাসো তবে আমার অনুসরণ করো; আল্লাহ তোমাদের ভালোবাসবেন এবং তোমাদের গুনাহ ক্ষমা করবেন। আল্লাহকে ভালোবাসার দাবি যাচাই হয় নকশাটি অনুসরণে, আর তার জবাব আসে — আয়াতের প্রতিশ্রুতি — বিনিময়ে আল্লাহর ভালোবাসায়। এতে তাঁর ﷺ জীবনের অধ্যয়ন ঐচ্ছিক ভক্তি থেকে পরিণত হয় সেই নির্ধারিত পথে, যে পথে আল্লাহর প্রতি অনুরাগ প্রমাণযোগ্য কিছু হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "Tracing the Pattern",
          "bn": "নকশা ধরে চলা"
        },
        "p": [
          {
            "en": "Imitation begins in the ordinary, because most of his ﷺ recorded life is ordinary: how he spoke to servants and children, kept promises, greeted, ate, thanked, repaid debts, controlled anger, visited the sick. Choosing one verified habit and practising it until it holds is following this verse; admiring the whole and adopting nothing is not. The Companions (RA) learned him piecemeal and lifelong — the pattern was traced in small, repeated strokes.",
            "bn": "অনুকরণ শুরু হয় সাধারণের মধ্যে, কারণ তাঁর ﷺ লিপিবদ্ধ জীবনের অধিকাংশই সাধারণ: খাদেম ও শিশুদের সঙ্গে তিনি কেমন করে কথা বলতেন, প্রতিশ্রুতি রাখতেন, সালাম দিতেন, খেতেন, শুকরিয়া করতেন, ঋণ শোধ করতেন, রাগ দমন করতেন, অসুস্থকে দেখতে যেতেন। একটি যাচাই করা অভ্যাস বেছে নিয়ে তা স্থায়ী হওয়া পর্যন্ত চর্চা করাই এই আয়াতের অনুসরণ; পুরোটার প্রশংসা করে কিছুই গ্রহণ না করা তা নয়। সাহাবীগণ (রাঃ) তাঁকে শিখেছেন টুকরো টুকরো করে, আজীবন ধরে — নকশাটি আঁকা হয়েছে ছোট ছোট, বারবার টানা রেখায়।"
          },
          {
            "en": "And the verse's context adds the harder half: the example includes conduct under siege. Fear, shortage and public panic have a Prophetic pattern too — steadiness, labour alongside others, hope spoken aloud when arguments for despair were plentiful. Whoever hopes in Allah and the Last Day is told where to look when the armies gather, whatever form they take in a given life: in the Messenger of Allah ﷺ there is an excellent example.",
            "bn": "আর আয়াতের প্রেক্ষাপট যোগ করে কঠিনতর অর্ধেকটি: আদর্শের মধ্যে অবরোধকালের আচরণও আছে। ভয়, অভাব আর গণআতঙ্কেরও একটি নববী নকশা আছে — স্থিরতা, অন্যদের পাশে শ্রম, আর হতাশার যুক্তি প্রচুর থাকা অবস্থাতেও উচ্চস্বরে বলা আশা। যে আল্লাহ ও শেষ দিনের আশা রাখে, তাকে বলে দেওয়া হয়েছে সৈন্যদল জড়ো হলে কোথায় তাকাতে হবে — নিজ জীবনে সেই বাহিনীর রূপ যা-ই হোক: আল্লাহর রাসূল ﷺ-এর মধ্যেই রয়েছে উত্তম আদর্শ।"
          }
        ]
      }
    ]
  },
  "33:28": {
    "sections": [
      {
        "h": {
          "en": "Where the Choice Falls",
          "bn": "পছন্দের আয়াত কোথায় বসে"
        },
        "p": [
          {
            "en": "These words open a long passage addressed to the Prophet's household, set just after the account of the confederate siege. Ma'arif al-Qur'an notes that a central concern of Surah al-Ahzab is that nothing from those closest to the Prophet should cause him pain, and that they obey Allah and His Messenger wholeheartedly. The siege verses had shown the hurt the disbelievers and hypocrites inflicted on him; now the lens turns inward, to his own home, with the same tenderness and the same high standard.",
            "bn": "এই বাক্যগুলো দিয়ে শুরু হয় নবী-পরিবারকে লক্ষ্য করে একটি দীর্ঘ আলোচনা, যা বসেছে সম্মিলিত বাহিনীর অবরোধের বর্ণনার ঠিক পরে। মাআরিফুল কুরআন ধরিয়ে দেয়, সূরা আহযাবের একটি বড় উদ্দেশ্য হলো নবী ﷺ-এর ঘনিষ্ঠজনদের কাছ থেকে যেন তাঁর কষ্টের কোনো কারণ না আসে, আর তাঁরা যেন পূর্ণ মনে আল্লাহ ও তাঁর রসূলের অনুগত হন। অবরোধের আয়াতগুলো দেখিয়েছিল কাফির ও মুনাফিকদের হাতে তিনি কতটা কষ্ট পেয়েছেন। এবার দৃষ্টি ফিরল ভেতরে, তাঁর নিজের ঘরে, একই কোমলতা আর একই উঁচু মান নিয়ে।"
          },
          {
            "en": "The passage does not scold. It lays out two roads and lets each wife walk the road she chooses. If she wants the worldly life and its adornment, she will be provided for and released with honour; if she wants Allah, His Messenger, and the home of the Hereafter, a great reward is prepared for the doers of good among them, as the following verse says. Reading 33:28 without 33:29 breaks the sentence in half; the choice is only a choice because both sides are named.",
            "bn": "আয়াত কাউকে তিরস্কার করে না। এটি দুটি পথ সামনে রাখে, আর প্রত্যেক স্ত্রীকে নিজের পথ নিজে বেছে নিতে দেয়। কেউ যদি দুনিয়ার জীবন আর তার শোভা চান, তাঁকে ভোগসামগ্রী দিয়ে সম্মানের সঙ্গে বিদায় দেওয়া হবে; আর কেউ যদি আল্লাহ, তাঁর রসূল আর পরকালের গৃহ চান, তবে তাঁদের মধ্যে সৎকর্মশীলদের জন্য মহা পুরস্কার প্রস্তুত, যেমন পরের আয়াত বলে। ৩৩:২৮ আয়াতকে ৩৩:২৯ ছাড়া পড়লে বাক্যটা মাঝখানে ভেঙে যায়। দুই দিক নাম ধরে বলা আছে বলেই পছন্দটা সত্যিকারের পছন্দ।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Wives Had Asked",
          "bn": "স্ত্রীরা যা চেয়েছিলেন"
        },
        "p": [
          {
            "en": "The commentators tie the verse to a request. As-Sa'di relates that the Prophet's wives had asked for greater spending and clothing, pressing for what he could not always give, until the matter weighed on him. Ibn Kathir and al-Qurtubi record the same background: some had asked for a wider share of the world, others for an increase in maintenance. The reports differ in detail, and they agree on the heart of it. This was about provision, not about any fault in faith or affection.",
            "bn": "তাফসীরকারেরা আয়াতটিকে একটি আবদারের সঙ্গে জুড়ে দেন। সা'দী বর্ণনা করেন, নবী ﷺ-এর স্ত্রীরা আরও খরচ আর পোশাক চেয়েছিলেন, এমন কিছু চেয়ে বসেছিলেন যা তিনি সব সময় দিতে পারতেন না, আর তা তাঁর মনে ভার হয়ে বসেছিল। ইবন কাসীর ও কুরতুবী একই পটভূমি তুলে ধরেন: কেউ দুনিয়ার আরও বড় ভাগ চেয়েছিলেন, কেউ চেয়েছিলেন খরচের বাড়তি। বর্ণনাগুলোর খুঁটিনাটিতে ভিন্নতা আছে, মূল কথায় তারা একমত। ব্যাপারটা ছিল সংসারের খরচ নিয়ে, ঈমান বা ভালোবাসার কোনো ঘাটতি নিয়ে নয়।"
          },
          {
            "en": "Ma'arif al-Qur'an, drawing on Abu Hayyan, sets the scene. After the campaigns that followed the siege, a measure of ease had spread among the Muslims, and the wives supposed a share had come to the Prophet too. They appealed together, mentioning how the wives of kings lived adorned and served. They never imagined their words would grieve him; they had only wished for what those around them now had. It is a human moment, reported without a hint of blame toward the Mothers of the Believers.",
            "bn": "মাআরিফুল কুরআন আবু হাইয়ানের সূত্রে দৃশ্যটা আঁকে। অবরোধের পরের অভিযানগুলোর পর মুসলিমদের মধ্যে কিছুটা সচ্ছলতা ছড়িয়েছিল, আর স্ত্রীরা ভেবেছিলেন তার একটা ভাগ হয়তো নবী ﷺ-এর কাছেও এসেছে। তাঁরা একসঙ্গে আবদার জানালেন, মনে করিয়ে দিলেন রাজা-বাদশাহর স্ত্রীরা কেমন সাজসজ্জা আর সেবায় থাকেন। তাঁরা কল্পনাও করেননি এ কথা তাঁকে কষ্ট দেবে; তাঁরা কেবল চেয়েছিলেন আশপাশের মানুষের হাতে এখন যা আছে তাই। এ এক মানবিক মুহূর্ত, উম্মুল মু'মিনীনদের প্রতি সামান্যতম দোষারোপ ছাড়াই বর্ণিত।"
          },
          {
            "en": "As-Sa'di adds that the strain reached the point where the Prophet withdrew from his wives for a time. Yet the Qur'an does not freeze the moment as a quarrel. Allah willed, as-Sa'di puts it, to make the matter easy for His Messenger, to raise the rank of his wives, and to remove from them anything that would lessen their reward. What began as a request about the world was lifted, by revelation, into an invitation to the highest station a woman could hold.",
            "bn": "সা'দী আরও বলেন, চাপ এমন জায়গায় পৌঁছেছিল যে নবী ﷺ কিছু সময়ের জন্য স্ত্রীদের থেকে আলাদা থাকেন। তবু কুরআন মুহূর্তটাকে ঝগড়া হিসেবে থামিয়ে রাখে না। সা'দীর ভাষায়, আল্লাহ চাইলেন তাঁর রসূলের জন্য বিষয়টা সহজ করে দিতে, তাঁর স্ত্রীদের মর্যাদা উঁচু করতে, আর তাঁদের থেকে এমন সবকিছু সরিয়ে দিতে যা তাঁদের প্রতিদান কমিয়ে দেয়। দুনিয়া নিয়ে যে আবদার দিয়ে শুরু, ওহি তাকে তুলে নিল এক নারীর পাওয়া সর্বোচ্চ মর্যাদার আহ্বানে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Invitation, Not a Threat",
          "bn": "ধমক নয়, মর্যাদার ডাক"
        },
        "p": [
          {
            "en": "Ibn Kathir frames the command plainly: Allah ordered His Messenger to let his wives choose between parting from him, to seek elsewhere the world they wanted, and patience with the narrowness of his home, for which a great reward awaited them with Allah. The verse does not demand that they stay. It honours them with a decision. To be given a true choice, with both outcomes laid out honestly, is itself a mark of respect, and here the one offering it is the Messenger of Allah.",
            "bn": "ইবন কাসীর আদেশটা সোজাসুজি বুঝিয়ে দেন: আল্লাহ তাঁর রসূলকে বললেন স্ত্রীদের বেছে নিতে দিতে—তাঁর কাছ থেকে সরে গিয়ে অন্যত্র কাঙ্ক্ষিত দুনিয়া খোঁজা, নাকি তাঁর ঘরের টানাটানিতে ধৈর্য ধরা, যার বিনিময়ে আল্লাহর কাছে অপেক্ষা করছে মহা প্রতিদান। আয়াত তাঁদের থেকে থেকে যাওয়ার দাবি করে না। এটি তাঁদের সম্মান দেয় একটি সিদ্ধান্ত দিয়ে। দুই পরিণাম সৎভাবে সামনে রেখে সত্যিকারের একটি পছন্দ দেওয়া নিজেই এক সম্মান, আর এখানে যিনি তা দিচ্ছেন তিনি আল্লাহর রসূল।"
          },
          {
            "en": "The worldly side is named here: the life of this world and its adornment, az-zina, the finery and ease a home can hold. The other side is named in 33:29: Allah, His Messenger, and the home of the Hereafter, with a great reward prepared for the doers of good. The pairing is deliberate. The world is set not against poverty but against Allah Himself, so the wives are not asked to choose hardship for its own sake, but to choose what hardship is worth.",
            "bn": "একটি দিক এখানেই নাম ধরে বলা: দুনিয়ার জীবন আর তার শোভা, আয-যীনাহ, ঘর যে সাজসজ্জা আর আরাম ধরে রাখতে পারে। অন্য দিকটি বলা হয়েছে ৩৩:২৯ আয়াতে: আল্লাহ, তাঁর রসূল আর পরকালের গৃহ, সঙ্গে সৎকর্মশীলদের জন্য প্রস্তুত মহা পুরস্কার। জোড়াটা ইচ্ছাকৃত। দুনিয়াকে দারিদ্র্যের বিপরীতে নয়, বসানো হয়েছে স্বয়ং আল্লাহর বিপরীতে। তাই স্ত্রীদের কষ্টকে কষ্টের জন্য বেছে নিতে বলা হচ্ছে না, বরং বেছে নিতে বলা হচ্ছে কষ্টটা কীসের জন্য মূল্যবান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Provision Named",
          "bn": "ভোগসামগ্রীর প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Umattiʿkunna, 'I will provide for you,' names a specific thing. At-Tabari explains it as the muta'ah, the parting gift Allah made a due upon men for women they divorce, and he reads it through 2:236, where provision is set 'upon the wealthy according to his means and upon the straitened according to his means.' Al-Baghawi says the same in a word: this is the muta'ah of divorce. The release, if chosen, would not leave a woman empty-handed; it carried a settlement that Allah Himself had legislated.",
            "bn": "উমাত্তি'কুন্না, 'তোমাদের ভোগসামগ্রী দিয়ে দেব,' একটি নির্দিষ্ট জিনিসের নাম। তাবারী একে বলেন মুতআহ, অর্থাৎ তালাকের সময় নারীদের জন্য আল্লাহ পুরুষদের ওপর যে বিদায়-উপহার ওয়াজিব করেছেন। তিনি এটিকে পড়েন ২:২৩৬ আয়াতের আলোকে, যেখানে ভোগসামগ্রী নির্ধারিত 'সচ্ছলের ওপর তার সাধ্যমতো আর অসচ্ছলের ওপর তার সাধ্যমতো।' বাগভী এক কথায় একই কথাই বলেন: এ হলো তালাকের মুতআহ। বিদায় যদি বেছে নেওয়াও হতো, তা কোনো নারীকে খালি হাতে ছাড়ত না; সঙ্গে থাকত আল্লাহর আইনে বাঁধা এক ব্যবস্থা।"
          },
          {
            "en": "At-Tabari then reads wa-usarrihkunna, 'and I will release you,' through the law of parting Allah taught in 65:1: 'When you divorce women, divorce them for their waiting period.' The verb is not a man losing his temper and sending a woman away. It is a release ordered and shaped by revelation, with its timing, its waiting period, and its rights all observed. Even the ending of a marriage, in this telling, is an act of worship bounded by Allah's instruction, not a private storm.",
            "bn": "এরপর তাবারী 'ওয়া উসাররিহকুন্না,' অর্থাৎ 'আর তোমাদের বিদায় দেব,' পড়েন ৬৫:১ আয়াতে আল্লাহর শেখানো বিদায়ের বিধানের আলোকে: 'তোমরা যখন নারীদের তালাক দাও, তাদের ইদ্দতের হিসাব রেখে তালাক দাও।' এ ক্রিয়া কোনো পুরুষের মেজাজ হারিয়ে নারীকে তাড়িয়ে দেওয়া নয়। এ এমন বিদায় যা ওহি দিয়ে নির্ধারিত আর গড়া, যার সময়, ইদ্দত আর সব হক মেনে চলা হয়। এ বর্ণনায় বিয়ের অবসানও আল্লাহর নির্দেশে বাঁধা এক ইবাদত, কোনো একান্ত ঝড় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gracious Release",
          "bn": "সুন্দর বিদায়ের আদব"
        },
        "p": [
          {
            "en": "Sarahan jamilan, 'a gracious release,' is the phrase the verse lingers on. Al-Qurtubi defines it as a release along the sunnah, with no harm and no withholding of what is owed to her. Al-Muyassar renders it 'I will part from you without harm or injury.' As-Sa'di adds the inner tone: without anger or abuse, but with an open heart and a settled mind, before matters ever reach what is unbecoming. The parting is not merely permitted; it is required to be kind.",
            "bn": "সারাহান জামীলান, 'সুন্দর বিদায়,' এ কথাটির ওপরই আয়াত থমকে দাঁড়ায়। কুরতুবী একে বলেন সুন্নাহ-মাফিক বিদায়, যাতে কোনো ক্ষতি নেই আর তার প্রাপ্য কিছু আটকে রাখা নেই। মুয়াসসার অনুবাদ করে: 'কোনো ক্ষতি বা কষ্ট ছাড়াই তোমাদের থেকে আলাদা হব।' সা'দী ভেতরের সুরটা যোগ করেন: রাগ বা গালমন্দ ছাড়া, বরং খোলা মন আর শান্ত চিত্তে, অবস্থা অশোভন কিছুতে পৌঁছানোর আগেই। বিদায় কেবল অনুমোদিত নয়; তা দয়ালু হওয়া চাই।"
          },
          {
            "en": "There is a quiet teaching here that reaches far beyond this household. Ma'arif al-Qur'an draws from the verse that when a husband and wife cannot find ease together, the fitting path is to give her the choice to stay content or to leave with honour, sent off graciously and with a gift, as the sunnah directs. Islam does not pretend every marriage will hold. What it insists on is that if a bond is loosed, it be loosed with dignity, and never turned into a weapon.",
            "bn": "এখানে একটি নীরব শিক্ষা আছে, যা এ পরিবারের সীমা ছাড়িয়ে অনেক দূর যায়। মাআরিফুল কুরআন আয়াত থেকে টেনে আনে যে স্বামী-স্ত্রী যখন একসঙ্গে স্বস্তি খুঁজে পান না, তখন উপযুক্ত পথ হলো তাঁকে বেছে নিতে দেওয়া—বর্তমান অবস্থায় সন্তুষ্ট থেকে যাওয়া, নাকি সম্মানের সঙ্গে বিদায় নেওয়া, সুন্নাহ মোতাবেক উপহারসহ সৌজন্যে। ইসলাম ভান করে না যে প্রতিটি বিয়ে টিকে যাবে। সে যা জোর দিয়ে বলে তা হলো, বাঁধন খুললে তা যেন মর্যাদার সঙ্গে খোলা হয়, কখনো যেন অস্ত্রে পরিণত না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of the Choice",
          "bn": "পছন্দের দুই ব্যাখ্যা"
        },
        "p": [
          {
            "en": "Al-Qurtubi records that the scholars read the nature of this choice in two ways. On the first, held by Aisha, Mujahid, Ikrimah and others, the wives were given a choice between remaining in the marriage and being released, and they chose to remain. On the second, reported from al-Hasan and Qatada, they were offered only the choice between the world and the Hereafter, to be kept or let go, with no power of divorce placed in their hands. Al-Qurtubi himself judges the first the stronger.",
            "bn": "কুরতুবী জানান, এ পছন্দের স্বরূপ আলিমরা দুইভাবে পড়েছেন। প্রথম মত, যা আয়িশা, মুজাহিদ, ইকরিমা ও অন্যরা ধরেন: স্ত্রীদের বেছে নিতে দেওয়া হয়েছিল বিয়েতে থেকে যাওয়া আর বিদায় নেওয়ার মধ্যে, আর তাঁরা থেকে যাওয়াই বেছে নেন। দ্বিতীয় মত, হাসান ও কাতাদা থেকে বর্ণিত: তাঁদের সামনে কেবল দুনিয়া আর আখিরাতের পছন্দ রাখা হয়েছিল, রেখে দেওয়া বা ছেড়ে দেওয়া, তালাকের কোনো ক্ষমতা তাঁদের হাতে দেওয়া হয়নি। কুরতুবী নিজে প্রথম মতটিকেই অধিক সহীহ বলেন।"
          },
          {
            "en": "The difference is not idle. Aisha said that the Messenger of Allah gave them the choice and they chose him, and he did not count it as a divorce; al-Bukhari and Muslim both record this. Al-Qurtubi reasons that the instruction to consult her parents cannot have been about preferring the Hereafter over the world, for no believer needs counsel to choose Allah. It must have concerned the parting itself. The wives, choosing him, lost nothing of their marriage; the choice only proved where their hearts lay.",
            "bn": "পার্থক্যটা অকারণ নয়। আয়িশা বলেছেন, আল্লাহর রসূল তাঁদের বেছে নেওয়ার সুযোগ দিলেন আর তাঁরা তাঁকেই বেছে নিলেন, এতে তিনি কোনো তালাক গণ্য করলেন না; বুখারী ও মুসলিম দুইই তা বর্ণনা করেন। কুরতুবী যুক্তি দেন, বাবা-মায়ের পরামর্শ নিতে বলাটা দুনিয়ার ওপর আখিরাতকে বেছে নেওয়া নিয়ে হতে পারে না, কারণ আল্লাহকে বেছে নিতে কোনো মু'মিনের পরামর্শ লাগে না। তা নিশ্চয় বিদায়ের বিষয়েই ছিল। স্ত্রীরা তাঁকে বেছে নিয়ে বিয়ের কিছুই হারাননি; পছন্দটা শুধু দেখিয়ে দিল তাঁদের অন্তর কোথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "She Chose First",
          "bn": "তিনি আগে বেছে নিলেন"
        },
        "p": [
          {
            "en": "The soundest report of what happened comes from Aisha herself, and al-Bukhari preserves it with a short chain. When the command came, the Prophet did not gather his wives for a verdict. He went to each in turn, and he began with Aisha, telling her first not to rush, as a kindness, since he knew which way her parents would guide her. Here is how she remembered that morning, in the wording recorded by al-Bukhari.",
            "bn": "যা ঘটেছিল তার সবচেয়ে সহীহ বর্ণনা আসে স্বয়ং আয়িশার কাছ থেকে, আর বুখারী তা সংরক্ষণ করেন সংক্ষিপ্ত সনদে। আদেশ আসার পর নবী ﷺ রায় নেওয়ার জন্য স্ত্রীদের একসঙ্গে ডাকেননি। তিনি একে একে প্রত্যেকের কাছে গেলেন, আর শুরু করলেন আয়িশাকে দিয়ে, দয়া করে তাঁকে আগেই বললেন তাড়াহুড়ো না করতে, কারণ তিনি জানতেন তাঁর বাবা-মা কোন পথে পরামর্শ দেবেন। সেই সকালটা তিনি কীভাবে মনে রেখেছেন, তা বুখারীর বর্ণিত ভাষায় এই।"
          },
          {
            "en": "She said: 'Allah's Messenger came to me when Allah ordered him to give option to his wives. So Allah's Messenger started with me, saying: I am going to mention to you something, but you should not hasten to give your reply unless you consult your parents. He knew that my parents would not order me to leave him. Then he said: Allah says, O Prophet, say to your wives. On that I said to him: Then why should I consult my parents? Verily, I seek Allah, His Apostle and the Home of the Hereafter.'",
            "bn": "তিনি বলেন: 'আল্লাহর রসূল আমার কাছে এলেন যখন আল্লাহ তাঁকে স্ত্রীদের সুযোগ দিতে আদেশ করলেন। আল্লাহর রসূল আমাকে দিয়েই শুরু করলেন, বললেন: আমি তোমাকে একটি কথা জানাব, তবে বাবা-মায়ের সঙ্গে পরামর্শ না করা পর্যন্ত জবাব দিতে তাড়াহুড়ো কোরো না। তিনি জানতেন আমার বাবা-মা আমাকে তাঁকে ছেড়ে যেতে বলবেন না। তারপর তিনি বললেন: আল্লাহ বলেন, হে নবী, তোমার স্ত্রীদের বলে দাও। তখন আমি তাঁকে বললাম: এ বিষয়ে আমি কেন বাবা-মায়ের পরামর্শ নেব? আমি তো চাই আল্লাহ, তাঁর রসূল আর পরকালের গৃহ।'"
          },
          {
            "en": "Her answer was immediate, and it set the pattern. The same report adds that all of the Prophet's wives then did as Aisha had done, each choosing Allah and His Messenger. This hadith stands in Sahih al-Bukhari and is recorded by Muslim as well. In another sound narration the Prophet told Aisha that Allah had not sent him to be harsh, but as a gentle teacher who makes things easy. The choice honoured them, and the manner of asking honoured them too.",
            "bn": "তাঁর জবাব এল সঙ্গে সঙ্গে, আর তা-ই গড়ে দিল ধারা। একই বর্ণনায় যোগ আছে, নবী ﷺ-এর স্ত্রীরা সবাই এরপর আয়িশার মতোই করলেন, প্রত্যেকে বেছে নিলেন আল্লাহ ও তাঁর রসূলকে। এ হাদীস সহীহ বুখারীতে আছে, আর মুসলিমও তা বর্ণনা করেন। আরেক সহীহ বর্ণনায় নবী ﷺ আয়িশাকে বলেন, আল্লাহ তাঁকে কঠোর করে পাঠাননি, পাঠিয়েছেন একজন কোমল শিক্ষক করে, যিনি সহজ করে দেন। পছন্দ তাঁদের সম্মান দিল, আর জিজ্ঞেস করার ধরনও তাঁদের সম্মান দিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour, Not a Template",
          "bn": "সম্মান, কোনো নিয়ম নয়"
        },
        "p": [
          {
            "en": "This passage must be read with care, and said plainly: it describes the household of the Prophet at a unique moment, under direct revelation, and it licenses nothing against anyone living. It is not a script a man may wave at his wife, nor a verse to belittle women who ask for their needs, nor a club against the Prophet's family, whom Allah Himself purified and whom every believer is bound to honour. The wives who asked were the Mothers of the Believers, and the asking was no sin.",
            "bn": "এ আলোচনা পড়তে হবে যত্নের সঙ্গে, আর একটি কথা সোজাসুজি বলা দরকার। এটি নবী ﷺ-এর পরিবারের এক অনন্য মুহূর্তের বর্ণনা, সরাসরি ওহির অধীনে, আর এটি কোনো জীবিত মানুষের বিরুদ্ধে কিছুই বৈধ করে না। এটি এমন কোনো ছক নয় যা কোনো পুরুষ স্ত্রীর দিকে ছুড়ে দিতে পারে, নিজের প্রয়োজন চাওয়া নারীদের ছোট করার আয়াত নয়, আর নবী-পরিবারের বিরুদ্ধে কোনো হাতিয়ার নয়—যাঁদের আল্লাহ নিজেই পবিত্র করেছেন আর যাঁদের সম্মান করা প্রতিটি মু'মিনের কর্তব্য। যাঁরা চেয়েছিলেন তাঁরা উম্মুল মু'মিনীন, আর চাওয়াটা কোনো গুনাহ ছিল না।"
          },
          {
            "en": "What it does leave us is a mirror and a measure. The quiet question put to that household is put, in softer form, to every heart: when the world offers its adornment on easy terms, what is it worth beside Allah, His Messenger, and the home of the Hereafter? And when something must be let go, a job, a friendship, a marriage, the verse sets the manner: release it graciously, with no harm and no bitterness. To choose the higher thing, and to part from the lesser with dignity, is the whole of what these words teach.",
            "bn": "যা এটি আমাদের দিয়ে যায় তা হলো একটি আয়না আর একটি মাপকাঠি। সেই পরিবারকে করা নীরব প্রশ্নটা, আরও কোমল রূপে, প্রতিটি অন্তরকেই করা হয়: দুনিয়া যখন সহজ শর্তে তার শোভা সাধে, আল্লাহ, তাঁর রসূল আর পরকালের গৃহের পাশে তার দাম কত? আর যখন কিছু ছাড়তেই হয়, কোনো চাকরি, কোনো বন্ধুত্ব, কোনো বিয়ে, আয়াত ধরনটা ঠিক করে দেয়: ছাড়ো সৌজন্যে, কোনো ক্ষতি আর তিক্ততা ছাড়া। উঁচু জিনিসটা বেছে নেওয়া আর নিচেরটা থেকে মর্যাদার সঙ্গে সরে আসা—এই দুই মিলেই এই আয়াতের পুরো শিক্ষা।"
          }
        ]
      }
    ]
  },
  "33:35": {
    "sections": [
      {
        "h": {
          "en": "A Question That Was Answered",
          "bn": "যে প্রশ্নের জবাব এসেছিল"
        },
        "p": [
          {
            "en": "This is one of the verses whose occasion of revelation is well attested. Umm Salamah (RA), a wife of the Prophet ﷺ, asked why women were not mentioned in the Quran as men were. The report is preserved in the collections of Ahmad and an-Nasa'i, and at-Tirmidhi records the same question from Umm 'Imarah al-Ansariyyah (RA), and this verse came down in reply — naming men and women explicitly, ten times over, in a single sentence.",
            "bn": "এটি সেই আয়াতগুলোর একটি যার শানে নুযূল সুপ্রমাণিত। নবী ﷺ-এর স্ত্রী উম্মে সালামা (রাঃ) জিজ্ঞেস করেছিলেন, পুরুষদের মতো নারীদের কথা কুরআনে কেন উল্লেখ করা হয় না। বর্ণনাটি আহমাদ ও নাসাঈর সংকলনে সংরক্ষিত, আর তিরমিযীতে একই প্রশ্ন এসেছে উম্মে 'ইমারা আনসারিয়া (রাঃ)-এর সূত্রে; জবাবে এই আয়াতটি নাযিল হয় — একটি বাক্যেই দশবার করে পুরুষ ও নারীর নাম স্পষ্টভাবে উল্লেখ করে।"
          },
          {
            "en": "That detail changes how the verse should be heard. Its repetitive structure is not accidental style; the doubling is the answer. Arabic can address a mixed group with the masculine plural alone, and the Quran often does. Here it deliberately does not, and the reason recorded is a question a woman asked out loud and had answered from above.",
            "bn": "এই তথ্যটি আয়াতটি কীভাবে শোনা উচিত তা বদলে দেয়। এর পুনরাবৃত্ত গঠন কোনো আকস্মিক রচনাশৈলী নয়; জোড়া করে বলাটাই জবাব। আরবি মিশ্র শ্রোতাদের কেবল পুংলিঙ্গ বহুবচন দিয়েই সম্বোধন করতে পারে, আর কুরআন প্রায়ই তা করে। এখানে ইচ্ছাকৃতভাবে তা করা হয়নি, আর এর যে কারণ লিপিবদ্ধ আছে তা হলো এক নারীর উচ্চারিত প্রশ্ন, যার জবাব এসেছিল ওপর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Sits in al-Ahzab",
          "bn": "আল-আহযাবে এর অবস্থান"
        },
        "p": [
          {
            "en": "The verses just before it, 33:28-34, address the wives of the Prophet ﷺ directly and no one else: the choice offered between the world and Allah and His Messenger, the reminder that they are not like any other women, and the instruction to remember what is recited in their houses of the verses of Allah and wisdom. Then, without transition, the address opens out to every believing man and woman on earth.",
            "bn": "ঠিক আগের আয়াতগুলো, 33:28-34, সরাসরি নবী ﷺ-এর স্ত্রীদেরই সম্বোধন করে, অন্য কাউকে নয়: দুনিয়া আর আল্লাহ ও তাঁর রাসূলের মধ্যে দেওয়া বেছে নেওয়ার সুযোগ, এই স্মরণ যে তাঁরা অন্য কোনো নারীর মতো নন, আর নির্দেশ যে তাঁদের ঘরে আল্লাহর যেসব আয়াত ও হিকমত পাঠ করা হয় তা যেন স্মরণে রাখেন। এরপর, কোনো সেতু ছাড়াই, সম্বোধন খুলে যায় পৃথিবীর প্রতিটি মুমিন পুরুষ ও নারীর দিকে।"
          },
          {
            "en": "The verse that follows keeps the same breadth: 33:36 states that no believing man or woman has a choice in a matter once Allah and His Messenger have decided it. Al-Ahzab is a surah about the Battle of the Trench, about the Prophet's household, and about a community reordering its family law; in the middle of all that, the standard of worth is stated in terms that have nothing to do with rank, lineage or sex.",
            "bn": "পরের আয়াতটিও একই প্রশস্ততা ধরে রাখে: 33:36 বলে, আল্লাহ ও তাঁর রাসূল কোনো বিষয়ে ফয়সালা করে দিলে কোনো মুমিন পুরুষ বা মুমিন নারীর সে বিষয়ে বেছে নেওয়ার অধিকার থাকে না। আল-আহযাব খন্দকের যুদ্ধ, নবী ﷺ-এর পরিবার, আর পারিবারিক বিধান নতুন করে সাজানো এক সমাজ নিয়ে লেখা সূরা; এই সবকিছুর মাঝখানে মূল্যের মাপকাঠি এমন ভাষায় বলা হলো যার সাথে পদমর্যাদা, বংশ বা লিঙ্গের কোনো সম্পর্ক নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The First Five Pairs",
          "bn": "প্রথম পাঁচ জোড়া"
        },
        "p": [
          {
            "en": "The list begins al-muslimin wal-muslimat, then al-mu'minin wal-mu'minat. The order is not arbitrary. Islam is the outward act of submission; iman is the inward assent, and the commentators consistently read the pair in that order, matching the way the two are distinguished in the well-known hadith of Jibril recorded in the two Sahihs. You enter by the door of islam; iman is what fills the house.",
            "bn": "তালিকা শুরু হয় আল-মুসলিমীন ওয়াল-মুসলিমাত দিয়ে, তারপর আল-মু’মিনীন ওয়াল-মু’মিনাত। ক্রমটি এলোমেলো নয়। ইসলাম হলো আত্মসমর্পণের বাহ্যিক কাজ; ঈমান হলো ভেতরের স্বীকৃতি, আর মুফাসসিরগণ ধারাবাহিকভাবে এই ক্রমেই জোড়াটি পড়েন — যেভাবে দুই সহীহ গ্রন্থে সংরক্ষিত জিবরীলের বিখ্যাত হাদীসে দুটিকে আলাদা করা হয়েছে। ইসলামের দরজা দিয়ে প্রবেশ; আর ঈমানই ঘরটি ভরে তোলে।"
          },
          {
            "en": "Then al-qanitin, from qunut, sustained and willing obedience rather than a single act. Then as-sadiqin, the truthful — sidq covers truth in speech, in promise and in intention. Then as-sabirin, those who hold on: sabr in Arabic is restraint, staying at a post rather than merely enduring quietly. Each of the five is a practice that can be measured over time, not a status a person is born into.",
            "bn": "এরপর আল-ক্বানিতীন, ক্বুনূত থেকে — অর্থাৎ একবারের কোনো কাজ নয়, বরং স্থায়ী ও স্বেচ্ছাপ্রণোদিত আনুগত্য। এরপর আস-সাদিকীন, সত্যবাদীরা — সিদক কথায়, প্রতিশ্রুতিতে ও নিয়তে সত্যকে ধারণ করে। এরপর আস-সাবিরীন, যারা ধরে থাকে: আরবিতে সবর মানে সংযম, নিজের জায়গায় অটল থাকা — কেবল নীরবে সহ্য করা নয়। এই পাঁচটির প্রতিটিই এমন চর্চা যা সময়ের সাথে মাপা যায়, জন্মসূত্রে পাওয়া কোনো পরিচয় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Second Five",
          "bn": "পরের পাঁচ"
        },
        "p": [
          {
            "en": "The list continues al-khashi'in, the humble — khushu' again, the lowering of the self before Allah. Then al-mutasaddiqin, those who give sadaqah, and as-sa'imin, those who fast: two practices with bodies attached, one costing money and the other appetite. Then al-hafizina furujahum, those who guard their chastity, where the masculine carries the explicit object and the feminine follows it without repetition, as Arabic allows.",
            "bn": "তালিকা চলতে থাকে আল-খাশি‘ঈন দিয়ে, অর্থাৎ বিনীতরা — আবারও খুশূ‘, আল্লাহর সামনে নিজেকে নত করা। এরপর আল-মুতাসাদ্দিকীন, যারা সদকা দেয়, আর আস-সাইমীন, যারা রোজা রাখে: দুটি চর্চা যার সাথে দেহ জড়িত — একটির খরচ অর্থ, অন্যটির খরচ ক্ষুধা। এরপর আল-হাফিযীনা ফুরূজাহুম, যারা নিজেদের সতীত্ব রক্ষা করে; এখানে পুংলিঙ্গ রূপটিই কর্মটি স্পষ্ট করে বহন করে, আর স্ত্রীলিঙ্গ রূপ পুনরাবৃত্তি ছাড়াই তা অনুসরণ করে — আরবি যেমন অনুমতি দেয়।"
          },
          {
            "en": "The tenth pair is the only one given a qualifier: adh-dhakirina Allaha kathiran wadh-dhakirat, those who remember Allah much, and the women who do so. Kathiran, abundantly, is attached to no other item in the list. Sahih Muslim preserves a narration in which the Prophet ﷺ says the mufarridun have gone ahead, and identifies them using this very phrase — those who remember Allah much, men and women.",
            "bn": "দশম জোড়াটিই একমাত্র, যার সাথে একটি বিশেষণ যুক্ত: আয্‌যাকিরীনাল্লাহা কাসীরাও ওয়ায্‌যাকিরাত, যারা আল্লাহকে বেশি বেশি স্মরণ করে, আর সেই নারীরাও। কাসীরান অর্থাৎ প্রচুর পরিমাণে — তালিকার আর কোনো বিষয়ের সাথে এটি যুক্ত নয়। সহীহ মুসলিমে সংরক্ষিত এক বর্ণনায় নবী ﷺ বলেন, মুফাররিদূনরা এগিয়ে গেছে, আর তাঁদের পরিচয় দেন ঠিক এই বাক্যাংশ দিয়েই — যারা আল্লাহকে বেশি বেশি স্মরণ করে, পুরুষ ও নারী।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Draw",
          "bn": "মুফাসসিরগণ যা বের করেন"
        },
        "p": [
          {
            "en": "The commentators note that every item on the list is an action or a settled disposition, and that not one of them depends on wealth, health, freedom, learning or public role. That is the point about equality the verse actually makes: not that men and women have identical duties in law, but that the road to forgiveness and reward is open on identical terms, and that terms are set by what a person does.",
            "bn": "মুফাসসিরগণ লক্ষ্য করেন যে তালিকার প্রতিটি বিষয়ই হয় একটি কাজ, নয় একটি স্থিতিশীল স্বভাব; আর এর একটিও সম্পদ, স্বাস্থ্য, স্বাধীনতা, শিক্ষা বা প্রকাশ্য ভূমিকার ওপর নির্ভর করে না। সমতা নিয়ে আয়াতটি আসলে এই কথাই বলে: পুরুষ ও নারীর আইনগত দায়িত্ব অভিন্ন — তা নয়; বরং ক্ষমা ও পুরস্কারের পথ অভিন্ন শর্তে খোলা, আর শর্ত নির্ধারিত হয় মানুষ কী করে তা দিয়ে।"
          },
          {
            "en": "The same principle is stated across the Quran in other words. 3:195 declares that Allah does not let the work of any worker among you be lost, male or female. 16:97 promises a good life and a better reward to whoever does righteousness, male or female, while a believer. And 4:124 says the same again. The commentators treat 33:35 as the fullest of these statements because it does not summarise; it enumerates.",
            "bn": "একই নীতি কুরআনের নানা জায়গায় ভিন্ন ভাষায় বলা হয়েছে। 3:195 ঘোষণা করে, আল্লাহ তোমাদের কোনো কর্মীর কর্ম বিনষ্ট করেন না, পুরুষ হোক বা নারী। 16:97 প্রতিশ্রুতি দেয় উত্তম জীবন ও উত্তম প্রতিদানের, যে-ই সৎকর্ম করে — পুরুষ হোক বা নারী — মুমিন অবস্থায়। আর 4:124 আবার একই কথা বলে। মুফাসসিরগণ 33:35 আয়াতকে এসবের মধ্যে পূর্ণতম মনে করেন, কারণ এটি সংক্ষেপে বলে না; এটি গুনে গুনে বলে।"
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
            "en": "Read as a checklist, the verse is unusually usable. Nine of the ten can be attempted this week by almost anyone: submitting in something you have been resisting, obeying in one specific matter, telling an inconvenient truth, holding your position under provocation, praying one prayer with attention, giving a small amount that you will notice, fasting one day, guarding the eyes as well as the body, and remembering Allah while doing something else entirely.",
            "bn": "তালিকা হিসেবে পড়লে আয়াতটি অস্বাভাবিক রকম ব্যবহারযোগ্য। দশটির নয়টিই এই সপ্তাহেই প্রায় যে কেউ চেষ্টা করতে পারে: যে বিষয়ে আপনি বাধা দিয়ে আসছেন তাতে আত্মসমর্পণ, নির্দিষ্ট একটি বিষয়ে আনুগত্য, অস্বস্তিকর একটি সত্য বলা, উসকানির মুখেও নিজের জায়গায় অটল থাকা, একটি নামাজ মনোযোগসহ পড়া, এমন সামান্য কিছু দান করা যা টের পাওয়া যায়, একদিন রোজা রাখা, দেহের সাথে চোখেরও হেফাজত করা, আর সম্পূর্ণ অন্য কাজ করতে করতেও আল্লাহকে স্মরণ করা।"
          },
          {
            "en": "The last of these is the one most available to people whose lives leave little room. Dhikr requires no schedule, no clothing, no company and no quiet room. That is worth saying in a verse revealed because a woman noticed she was not being named, since much of the work that fills a life — a household, care of the sick, a long shift — has no witnesses. The verse names both the worker and the wage.",
            "bn": "এর শেষটিই সবচেয়ে সহজলভ্য তাদের জন্য, যাদের জীবনে ফাঁক খুব কম। যিকিরের জন্য সময়সূচি লাগে না, পোশাক লাগে না, সঙ্গী লাগে না, নিরিবিলি ঘরও লাগে না। এমন একটি আয়াতের প্রসঙ্গে কথাটি বলার মতো, যা নাযিল হয়েছিল কারণ এক নারী লক্ষ্য করেছিলেন তাঁর নাম নেওয়া হচ্ছে না — কেননা জীবন ভরে রাখা কাজের অনেকটাই, যেমন সংসার, রোগীর সেবা, দীর্ঘ এক শিফট, কোনো সাক্ষী রেখে যায় না। আয়াতটি কর্মীরও নাম বলে, মজুরিরও।"
          }
        ]
      }
    ]
  },
  "33:41-42": {
    "sections": [
      {
        "h": {
          "en": "Two Commands to the Believers",
          "bn": "মুমিনদের প্রতি দুটি নির্দেশ"
        },
        "p": [
          {
            "en": "These two verses carry two commands. O you who believe, remember Allah with much remembrance, and glorify Him morning and evening. They arrive in Surah al-Ahzab, a surah of siege, treaties and household legislation — the most crowded of circumstances — a few verses after 33:35, whose list of praiseworthy qualities in men and women ends with the men who remember Allah much and the women who remember, for whom forgiveness and an immense reward are prepared.",
            "bn": "এই দুটি আয়াত দুটি নির্দেশ বহন করে। হে মুমিনগণ, তোমরা আল্লাহকে অধিক পরিমাণে স্মরণ করো, এবং সকাল-সন্ধ্যায় তাঁর পবিত্রতা ঘোষণা করো। এগুলো এসেছে সূরা আল-আহযাবে — অবরোধ, চুক্তি ও পারিবারিক বিধানের এক সূরায়, সবচেয়ে ব্যস্ত পরিস্থিতির মধ্যে — 33:35 আয়াতের কয়েক আয়াত পরে, যেখানে নারী-পুরুষের প্রশংসনীয় গুণের তালিকা শেষ হয়েছে আল্লাহকে অধিক স্মরণকারী পুরুষ ও স্মরণকারী নারীদের দিয়ে, যাদের জন্য প্রস্তুত রাখা হয়েছে ক্ষমা ও মহাপুরস্কার।"
          },
          {
            "en": "The placement teaches before the words do. Remembrance is not commanded from a hermitage; it is commanded to people mid-battle and mid-marriage, in the same breath as laws about debts of loyalty and family life. The Quran evidently does not consider a crowded life an excuse for a silent heart. It considers a crowded life the exact place where remembrance earns its adjective: much.",
            "bn": "শব্দের আগে অবস্থানটিই শিক্ষা দেয়। যিকিরের আদেশ কোনো নির্জন সাধনগুহা থেকে আসেনি; এসেছে যুদ্ধের মাঝখানে ও সংসারের মাঝখানে থাকা মানুষদের প্রতি — আনুগত্যের দায় ও পারিবারিক জীবনের বিধানের সঙ্গে একই নিঃশ্বাসে। কুরআন স্পষ্টতই ব্যস্ত জীবনকে নীরব হৃদয়ের অজুহাত মনে করে না। বরং ব্যস্ত জীবনকেই মনে করে সেই জায়গা, যেখানে যিকির তার বিশেষণটি অর্জন করে: অধিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Much, With No Ceiling",
          "bn": "অধিক — কোনো ঊর্ধ্বসীমা নেই"
        },
        "p": [
          {
            "en": "The grammar of the first command doubles its own emphasis. Udhkuru is an imperative verb; dhikran kathiran adds the cognate noun with an adjective — remember with much remembering. Arabic uses this construction to intensify, and the Quran here attaches the intensity to quantity: the target is abundance itself. No number is given, no threshold after which a believer has remembered enough. The command is open-ended by design, and the design is the point.",
            "bn": "প্রথম নির্দেশের ব্যাকরণ তার নিজের জোরকে দ্বিগুণ করে। উযকুরূ একটি আদেশসূচক ক্রিয়া; যিকরান কাসীরান তার সঙ্গে যোগ করে সমধাতুজ বিশেষ্য ও একটি বিশেষণ — স্মরণ করো অধিক স্মরণে। আরবি এই গঠন ব্যবহার করে জোর বাড়াতে, আর কুরআন এখানে সেই জোর জুড়ে দিয়েছে পরিমাণের সঙ্গে: লক্ষ্যটাই হলো প্রাচুর্য। কোনো সংখ্যা দেওয়া হয়নি, এমন কোনো সীমা নেই যার পরে একজন মুমিনের স্মরণ যথেষ্ট হয়ে যায়। নির্দেশটি ইচ্ছাকৃতভাবেই খোলা প্রান্তের, আর সেই নকশাটাই আসল কথা।"
          },
          {
            "en": "A remark related from Ibn Abbas (RA), which Ibn Kathir quotes under this verse, states the uniqueness plainly: every duty Allah imposed has a known limit, and its people are excused in valid circumstances — except remembrance, for which He set no limit, and no one has an excuse for abandoning it short of losing his mind. The traveller shortens prayer and the sick pray sitting, but no situation exists in which dhikr becomes impossible, because a heart travels light.",
            "bn": "ইবনে আব্বাস (রাঃ) থেকে বর্ণিত একটি উক্তি, যা ইবনে কাসীর এই আয়াতের আলোচনায় উদ্ধৃত করেছেন, এই অনন্যতাকে সরাসরি বলে দেয়: আল্লাহ যত দায়িত্ব ফরয করেছেন তার প্রতিটির একটি জানা সীমা আছে, এবং বৈধ অবস্থায় তার পালনকারীরা অব্যাহতি পায় — কেবল যিকির ছাড়া; এর কোনো সীমা তিনি রাখেননি, আর বুদ্ধি হারানো ছাড়া এটি ছেড়ে দেওয়ার কোনো ওজরও কারও নেই। মুসাফির নামায কসর করে, অসুস্থ ব্যক্তি বসে পড়ে; কিন্তু এমন কোনো অবস্থা নেই যেখানে যিকির অসম্ভব হয়ে যায়, কারণ হৃদয় চলে হালকা বোঝা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Morning and Evening",
          "bn": "সকাল ও সন্ধ্যা"
        },
        "p": [
          {
            "en": "The second command narrows from quantity to schedule: sabbihu, glorify Him, bukratan wa asilan — in the early morning and as the day declines. Tasbih is the specific remembrance that declares Allah free of every imperfection, and the two times named are the day's hinges, when night turns into day and day leans back towards night. The same frame appears in 20:130, where glorification before the rising of the sun and before its setting is commanded to the Prophet ﷺ.",
            "bn": "দ্বিতীয় নির্দেশটি পরিমাণ থেকে সময়সূচিতে নেমে আসে: সাব্বিহূ — তাঁর পবিত্রতা ঘোষণা করো — বুকরাতান ওয়া আসীলা: ভোরবেলায় এবং দিন যখন হেলে পড়ে। তাসবীহ সেই সুনির্দিষ্ট যিকির, যা আল্লাহকে প্রতিটি অসম্পূর্ণতা থেকে মুক্ত ঘোষণা করে; আর নাম নেওয়া দুটি সময় হলো দিনের দুই কবজা — যখন রাত দিনে পরিণত হয় আর দিন হেলে পড়ে রাতের দিকে। একই কাঠামো 20:130 আয়াতেও আছে, যেখানে নবী ﷺ-কে সূর্যোদয়ের আগে ও সূর্যাস্তের আগে তাসবীহর আদেশ দেওয়া হয়েছে।"
          },
          {
            "en": "The pairing of the two commands is practical wisdom. An open-ended obligation with no anchor tends to evaporate; an anchored routine with no aspiration tends to shrink. So the verses give both: remember much, without ceiling, and glorify at these two fixed posts, without fail. The morning and evening remembrances fence the day at both ends, and whatever falls between them has been claimed in advance for Allah.",
            "bn": "দুটি নির্দেশের এই জোড় এক ব্যবহারিক প্রজ্ঞা। নোঙরবিহীন খোলা দায়িত্ব সাধারণত উবে যায়; আকাঙ্ক্ষাবিহীন বাঁধা রুটিন সাধারণত সংকুচিত হয়। তাই আয়াত দুটি দুটোই দেয়: স্মরণ করো অধিক, কোনো ঊর্ধ্বসীমা ছাড়া, আর পবিত্রতা ঘোষণা করো এই দুটি নির্দিষ্ট চৌকিতে, ব্যতিক্রম ছাড়া। সকাল-সন্ধ্যার যিকির দিনটিকে দুই প্রান্ত থেকে ঘিরে দেয়, আর মাঝখানে যা কিছু পড়ে তা আগেভাগেই আল্লাহর জন্য দাবি করা হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Counts as Remembrance",
          "bn": "কোনটা স্মরণ বলে গণ্য"
        },
        "p": [
          {
            "en": "The commentators keep the definition of dhikr wide. It includes the tongue's formulas — tasbih, tahmid, takbir, tahlil, recitation of the Quran and du'a — but also the heart's silent awareness of Allah while the hands work, and the deliberate remembering of His commands at the moment of temptation. A trader who recalls Allah at the instant an easy deception offers itself is performing remembrance of a high order, which is why 62:10 commands those dispersing for trade to seek Allah's bounty and remember Him much.",
            "bn": "মুফাসসিরগণ যিকিরের সংজ্ঞা প্রশস্ত রাখেন। এর মধ্যে আছে জিহ্বার বাক্যগুলো — তাসবীহ, তাহমীদ, তাকবীর, তাহলীল, কুরআন তিলাওয়াত ও দুআ — কিন্তু আরও আছে হাত কাজে ব্যস্ত থাকা অবস্থায় অন্তরের নীরব আল্লাহ-সচেতনতা, আর প্রলোভনের মুহূর্তে তাঁর আদেশ ইচ্ছাকৃতভাবে মনে করা। যে ব্যবসায়ী সহজ একটি প্রতারণার সুযোগ সামনে আসামাত্র আল্লাহকে স্মরণ করে, সে উঁচু স্তরের যিকির করছে — এজন্যই 62:10 আয়াতে বাণিজ্যে ছড়িয়ে পড়া মানুষদের আদেশ দেওয়া হয়েছে আল্লাহর অনুগ্রহ খুঁজতে এবং তাঁকে অধিক স্মরণ করতে।"
          },
          {
            "en": "The Quran also names the postures: in 3:191 the people of understanding remember Allah standing, sitting and lying on their sides. Those three positions cover essentially every state a body passes through in a day. The command to remember much is therefore not a demand for more free time; it is a demand that the time already passing — commuting, cooking, waiting, resting — be threaded with remembrance instead of running empty.",
            "bn": "কুরআন দেহভঙ্গিগুলোরও নাম নেয়: 3:191 আয়াতে বুদ্ধিমানেরা আল্লাহকে স্মরণ করে দাঁড়িয়ে, বসে ও কাত হয়ে শুয়ে। এই তিনটি অবস্থান কার্যত সেই প্রতিটি অবস্থাকে ধারণ করে, যার ভেতর দিয়ে একটি শরীর দিনে যায়। অতএব অধিক স্মরণের নির্দেশ বাড়তি অবসরের দাবি নয়; এটি এই দাবি যে এমনিতেই বয়ে যাওয়া সময়গুলো — যাতায়াত, রান্না, অপেক্ষা, বিশ্রাম — খালি না কেটে যিকিরের সুতোয় গাঁথা হোক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Ones Who Pulled Ahead",
          "bn": "যারা এগিয়ে গেছে"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: the mufarridun have gone ahead. When asked who they were, he answered: the men who remember Allah much and the women who remember. The image is of a race in which a quiet category of people has already pulled clear of the field — not by extra wealth or extraordinary deeds, but by keeping their hearts and tongues occupied while everyone else's ran idle.",
            "bn": "মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: মুফাররিদূনরা এগিয়ে গেছে। জিজ্ঞেস করা হলো, তারা কারা; তিনি উত্তর দিলেন: আল্লাহকে অধিক স্মরণকারী পুরুষ ও স্মরণকারী নারীরা। ছবিটি এক দৌড়ের — যেখানে একদল নীরব মানুষ ইতিমধ্যেই বাকি সবাইকে পেছনে ফেলে গেছে; বাড়তি সম্পদে নয়, অসাধারণ কীর্তিতেও নয়, বরং এভাবে যে অন্য সবার অন্তর-জিহ্বা যখন অলস ঘুরছিল, তাদেরগুলো তখন ব্যস্ত ছিল।"
          },
          {
            "en": "Al-Bukhari narrates from Abu Musa al-Ash'ari (RA) that the Prophet ﷺ said: the likeness of the one who remembers his Lord and the one who does not remember his Lord is the likeness of the living and the dead. The comparison is physiological, not poetic decoration. A heart cut off from remembrance still beats, but the verse's own audience knew the difference between a body that breathes and a person who is alive to the One who made them.",
            "bn": "বুখারী আবু মূসা আল-আশআরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: যে তার রবকে স্মরণ করে আর যে তার রবকে স্মরণ করে না — তাদের উপমা জীবিত ও মৃতের উপমা। তুলনাটি শারীরবৃত্তীয়, কাব্যিক অলংকার নয়। যিকির থেকে বিচ্ছিন্ন হৃদয়ও স্পন্দিত হয়, কিন্তু আয়াতের নিজস্ব শ্রোতারা জানতেন — নিঃশ্বাস নেওয়া একটি শরীর, আর যিনি তাকে বানিয়েছেন তাঁর প্রতি জাগ্রত একজন মানুষ — এ দুয়ের পার্থক্য কোথায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Anchoring the Day",
          "bn": "দিনটাকে নোঙর করা"
        },
        "p": [
          {
            "en": "Practice begins where the verses point: fix the two posts first. The morning remembrances after Fajr and the evening ones as the day declines take minutes, and their regularity matters more than their length. Then let dhikr colonise the day's dead time — the phrases of tasbih need no ablution, no direction, no mat. What the verses forbid, in effect, is the assumption that remembrance must wait for the right setting. It was commanded to people under siege.",
            "bn": "অনুশীলন শুরু হয় আয়াত দুটি যেখানে ইশারা করে সেখান থেকে: আগে দুটি চৌকি পাকা করুন। ফজরের পরের সকালকার যিকির আর দিন হেলে পড়ার সন্ধ্যাকালীন যিকির লাগে কয়েক মিনিট, আর সেগুলোর দৈর্ঘ্যের চেয়ে নিয়মিততাই বেশি গুরুত্বপূর্ণ। তারপর যিকিরকে দখল করতে দিন দিনের মৃত সময়গুলো — তাসবীহর বাক্যগুলোর জন্য অযু লাগে না, কিবলা লাগে না, জায়নামাযও লাগে না। আয়াত দুটি কার্যত যা নিষেধ করে তা হলো এই ধারণা যে যিকিরের জন্য উপযুক্ত পরিবেশের অপেক্ষা করতে হবে। এর আদেশ তো দেওয়া হয়েছিল অবরুদ্ধ মানুষদের।"
          },
          {
            "en": "The return on this practice is stated in 13:28 — those who believe and whose hearts find rest in the remembrance of Allah — unquestionably, in the remembrance of Allah do hearts find rest. A heart that remembers Allah often stays anchored no matter what the day brings, because its point of reference sits outside the day's weather. The news changes, the diagnosis arrives, the market falls; the One being remembered morning and evening does not.",
            "bn": "এই অনুশীলনের প্রতিদান বলা আছে 13:28 আয়াতে: যারা ঈমান আনে এবং আল্লাহর স্মরণে যাদের অন্তর প্রশান্ত হয় — জেনে রাখো, আল্লাহর স্মরণেই অন্তরসমূহ প্রশান্তি পায়। যে হৃদয় আল্লাহকে প্রায়ই স্মরণ করে, দিন যা-ই আনুক তা নোঙর করা থাকে, কারণ তার নির্ভরবিন্দু দিনের আবহাওয়ার বাইরে অবস্থিত। খবর বদলায়, রোগনির্ণয়ের রিপোর্ট আসে, বাজার পড়ে যায়; কিন্তু সকাল-সন্ধ্যায় যাঁকে স্মরণ করা হচ্ছে, তিনি বদলান না।"
          }
        ]
      }
    ]
  },
  "33:45": {
    "sections": [
      {
        "h": {
          "en": "A Verse of Honour Amid Trial",
          "bn": "সংকটের ভেতরে এক সম্মানের আয়াত"
        },
        "p": [
          {
            "en": "Sūrat al-Aḥzāb takes its name from the Confederates who besieged Madīnah, and much of it moves through trial — the siege, the slander against the household, the testing of the believers. In the middle of that pressure the address suddenly lifts: Yā ayyuhā an-Nabī, O Prophet. As-Saʿdi notes that what follows is no incidental praise but the very heart of the Messenger's ﷺ mission, its essence and its foundations. When a community is shaken, Allah steadies it by reminding it who stands at its head and what he was sent to be.",
            "bn": "সূরা আল-আহযাব নাম পেয়েছে সেই জোটবদ্ধ শত্রুদের থেকে যারা মদীনা ঘেরাও করেছিল, আর সূরার অনেকটাই চলে পরীক্ষার ভেতর দিয়ে—ঘেরাও, নবীপরিবারের বিরুদ্ধে অপবাদ, ঈমানদারদের কঠিন পরীক্ষা। সেই চাপের মাঝখানেই সম্বোধনটা হঠাৎ উঁচু হয়ে ওঠে: ইয়া আইয়ুহান নাবী, হে নবী। সাদী বলেন, এরপর যা আসে তা নিছক প্রশংসা নয়, বরং রাসূল ﷺ-এর দায়িত্বের একেবারে কেন্দ্র, তার সারমর্ম আর ভিত্তি। কোনো সমাজ যখন কেঁপে ওঠে, আল্লাহ তাকে স্থির করেন এই মনে করিয়ে দিয়ে যে তার শীর্ষে কে দাঁড়িয়ে আছেন আর তাঁকে কী হওয়ার জন্য পাঠানো হয়েছে।"
          },
          {
            "en": "Two verses earlier Allah had said He brings the believers out of darkness into light (33:43); two verses on, He tells the Prophet ﷺ to give the believers glad tidings of great bounty (33:47). Between them sits this naming. At-Tabari reads the whole as Allah speaking directly to Muḥammad ﷺ: We have sent you as a witness, a bearer of good news, a warner. The roles are not titles of rank but a description of work — what this man is in the world.",
            "bn": "দুই আয়াত আগে আল্লাহ বলেছেন, তিনি ঈমানদারদের অন্ধকার থেকে বের করে আলোতে আনেন (৩৩:৪৩); দুই আয়াত পরে তিনি নবী ﷺ-কে বলেন ঈমানদারদের বড় অনুগ্রহের সুসংবাদ দিতে (৩৩:৪৭)। এই দুইয়ের মাঝখানে বসে আছে এই নামকরণ। তাবারী গোটা কথাটিকে পড়েন আল্লাহ সরাসরি মুহাম্মাদ ﷺ-কে বলছেন বলে: আমি তোমাকে পাঠিয়েছি সাক্ষীরূপে, সুসংবাদদাতা আর সতর্ককারীরূপে। এগুলো পদমর্যাদার উপাধি নয়, বরং কাজের বর্ণনা। এই মানুষটি দুনিয়ায় আসলে কী, তারই পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Offices in One Breath",
          "bn": "এক নিঃশ্বাসে তিন দায়িত্ব"
        },
        "p": [
          {
            "en": "Three words carry three offices: shāhid, a witness; mubashshir, a bringer of glad tidings; nadhīr, a warner. Each is an active participle, naming not a single act but a standing role. The Muyassar links them to what follows in 33:46 — dāʿī ilā Allāh, a caller to Allah by His leave, and sirāj munīr, an illuminating lamp — so the fuller portrait holds five attributes in all. Yet the weight of this verse rests on the first three, which gather the Messenger's ﷺ work toward his people into a single line.",
            "bn": "তিনটি শব্দ বহন করছে তিনটি দায়িত্ব: শাহিদ, একজন সাক্ষী; মুবাশশির, সুসংবাদদাতা; নাযীর, সতর্ককারী। প্রতিটি কর্তৃবাচক বিশেষণ, যা কোনো একটা কাজ নয়, বরং একটা স্থায়ী ভূমিকার নাম দেয়। মুয়াসসার এগুলোকে জুড়ে দেয় ৩৩:৪৬-এ যা আসে তার সঙ্গে: দাঈ ইলাল্লাহ, আল্লাহর অনুমতিক্রমে তাঁর পথে আহবানকারী, আর সিরাজ মুনীর, আলোকপ্রদ প্রদীপ। তাই পূর্ণ ছবিতে মোট পাঁচটি গুণ ধরা পড়ে। তবু এই আয়াতের ভার থাকে প্রথম তিনটিতে, যা রাসূল ﷺ-এর উম্মতমুখী কাজকে এক লাইনে জড়ো করে দেয়।"
          },
          {
            "en": "The order itself teaches. He is first a witness, one who sees and will testify; then a bearer of good news, before he is a warner. As-Saʿdi observes that naming the glad tidings and the warning entails naming who receives each, what they are promised or warned of, and the deeds that earn either. The one verse opens onto the whole of the revealed law, since the detail of its promise and its caution is what the Book and the Sunnah spell out.",
            "bn": "ক্রমটাই শেখায়। তিনি প্রথমে সাক্ষী, যিনি দেখেন আর সাক্ষ্য দেবেন; এরপর সুসংবাদদাতা, তারপর সতর্ককারী। সাদী লক্ষ করেন, সুসংবাদ আর সতর্কবাণীর নাম নিলে আপনাআপনি এসে পড়ে কারা তা পায়, কী নিয়ে তাদের সুসংবাদ বা সতর্ক করা হয়, আর কোন আমল তা অর্জন করায়। এই একটি আয়াত খুলে দেয় গোটা শরীয়তের দিকে, কারণ এর প্রতিশ্রুতি আর সতর্কতার খুঁটিনাটিই কুরআন ও সুন্নাহ বিস্তারিত বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness For and Witness Over",
          "bn": "পক্ষেও সাক্ষী, উপরেও সাক্ষী"
        },
        "p": [
          {
            "en": "The first office, shāhid, carries a double sense the commentators draw out. At-Tabari explains it as a witness over the Prophet's ﷺ community by having delivered to them the message he was sent with. As-Saʿdi widens it: a witness over his ummah for what they did, of good and evil alike, and he calls the Messenger ﷺ a just and accepted witness. The believer is therefore both represented and observed — the one who conveyed the truth will also speak to how it was received.",
            "bn": "প্রথম দায়িত্ব শাহিদ বহন করে এক দ্বৈত অর্থ, যা তাফসীরকারেরা খুলে বলেন। তাবারী একে বোঝান এভাবে: তিনি তাঁর উম্মতের উপর সাক্ষী, কারণ যে বার্তা নিয়ে তাঁকে পাঠানো হয়েছিল তা তিনি তাদের কাছে পৌঁছে দিয়েছেন। সাদী একে আরও প্রশস্ত করেন: তিনি তাঁর উম্মতের আমলের উপর সাক্ষী, ভালো-মন্দ সবকিছুর, আর রাসূল ﷺ-কে তিনি বলেন একজন ন্যায়পরায়ণ, গ্রহণযোগ্য সাক্ষী। তাই ঈমানদারের পক্ষেও বলা হয়, আবার তার দিকে চোখও থাকে। যিনি সত্য পৌঁছে দিয়েছেন, তিনিই বলবেন তা কীভাবে গ্রহণ করা হলো।"
          },
          {
            "en": "Ibn Kathir joins a third strand: shāhid means a witness to Allah's Oneness, that there is no god but He, and a witness against mankind for their deeds on the Day of Resurrection. He anchors this in two verses. One has Allah say, And We bring you as a witness against these (4:41). The other makes the pattern mutual: that you be witnesses over mankind and the Messenger be a witness over you (2:143). The witnessing runs in both directions.",
            "bn": "ইবন কাসীর এর সঙ্গে তৃতীয় একটি সুর যোগ করেন: শাহিদ মানে আল্লাহর একত্বের সাক্ষী, যে তিনি ছাড়া কোনো ইলাহ নেই, আর কিয়ামতের দিন মানুষের আমলের ব্যাপারে তাদের বিরুদ্ধে সাক্ষী। তিনি একে দুটি আয়াতের উপর দাঁড় করান। একটিতে আল্লাহ বলেন, আর আমি তোমাকে এদের উপর সাক্ষীরূপে আনব (৪:৪১)। অন্যটি সম্পর্কটাকে পারস্পরিক করে দেয়: যাতে তোমরা মানুষের উপর সাক্ষী হও আর রাসূল তোমাদের উপর সাক্ষী হন (২:১৪৩)। সাক্ষ্য তাই দুই দিকেই বয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Witness Is He?",
          "bn": "তিনি কার সাক্ষী"
        },
        "p": [
          {
            "en": "Here the mufassirūn differ, and the difference is worth keeping. Qatāda, reported by both at-Tabari and al-Qurtubi, gives two objects for the witnessing: the Prophet ﷺ is a witness over his own community by his conveyance to them, and a witness over all the earlier nations by the conveyance their prophets made to them. On this reading he testifies that every messenger before him discharged the trust. The witness of the last prophet reaches back across every prophet who came before.",
            "bn": "এখানে তাফসীরকারেরা মতভেদ করেন, আর এই মতভেদটা রেখে দেওয়ার মতো। কাতাদা, যাঁর কথা তাবারী আর কুরতুবী দুজনেই আনেন, সাক্ষ্যের দুটি বিষয় দেন: নবী ﷺ তাঁর নিজের উম্মতের উপর সাক্ষী, কারণ তিনি তাদের কাছে পৌঁছে দিয়েছেন; আবার আগের সব জাতির উপরও সাক্ষী, কারণ তাদের নবীরা তাদের কাছে পৌঁছে দিয়েছিলেন। এই পাঠে তিনি সাক্ষ্য দেন যে তাঁর আগের প্রত্যেক রাসূল আমানত আদায় করেছেন। শেষ নবীর সাক্ষ্য তাই পেছনে ফিরে ছুঁয়ে যায় আগের প্রতিটি নবীকে।"
          },
          {
            "en": "Al-Baghawi leans to that second sense plainly, glossing shāhid as a witness for the messengers that they delivered their message. Others, as we have seen, keep the eye on his own ummah and its deeds. The verse does not force a choice, and the commentators do not resolve it into one; both readings stand on the single word. What is common to them is that his seeing is never idle — it is testimony that will one day be spoken.",
            "bn": "বাগাভী স্পষ্টভাবে এই দ্বিতীয় অর্থের দিকেই ঝোঁকেন, শাহিদের ব্যাখ্যা দেন রাসূলদের পক্ষে সাক্ষী হিসেবে যে তাঁরা নিজ নিজ বার্তা পৌঁছে দিয়েছেন। অন্যরা, যেমন আমরা দেখেছি, চোখ রাখেন তাঁর নিজের উম্মত আর তার আমলের উপর। আয়াতটি কোনো একটা বেছে নিতে বাধ্য করে না, আর তাফসীরকারেরাও একে এক পাঠে মিলিয়ে ফেলেন না; দুটি পাঠই দাঁড়িয়ে থাকে এই একটি শব্দের উপর। দুয়ের মধ্যে মিল এটুকু যে তাঁর দেখা কখনো অকেজো নয়। একদিন তা সাক্ষ্য হয়ে উচ্চারিত হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise and the Caution",
          "bn": "প্রতিশ্রুতি আর সতর্কতা"
        },
        "p": [
          {
            "en": "The second and third offices move together: mubashshir and nadhīr, glad tidings and warning. At-Tabari pairs them with their audiences — good news of Paradise for those who believe the Messenger ﷺ and act on what he brought from their Lord, and warning of the Fire for those who deny him and oppose it. Al-Qurtubi frames the glad tidings as mercy and Paradise for the believers, and the warning as the Fire and lasting punishment for the defiant and the deniers.",
            "bn": "দ্বিতীয় আর তৃতীয় দায়িত্ব চলে একসঙ্গে: মুবাশশির আর নাযীর, সুসংবাদ আর সতর্কবাণী। তাবারী এ দুটিকে তাদের শ্রোতাদের সঙ্গে জুড়ে দেন—যারা রাসূল ﷺ-কে বিশ্বাস করে আর রবের কাছ থেকে তিনি যা এনেছেন তার উপর আমল করে, তাদের জন্য জান্নাতের সুসংবাদ; আর যারা তাঁকে অস্বীকার করে ও বিরোধিতা করে, তাদের জন্য জাহান্নামের সতর্কবাণী। কুরতুবী সুসংবাদকে বোঝান ঈমানদারদের জন্য আল্লাহর রহমত ও জান্নাত হিসেবে, আর সতর্কবাণীকে অবাধ্য ও অস্বীকারকারীদের জন্য আগুন ও চিরস্থায়ী শাস্তি হিসেবে।"
          },
          {
            "en": "As-Saʿdi draws the two portraits fully. Those who receive the good news are the believers who fear Allah, joining faith to righteous deeds and the leaving of sins; theirs is glad tidings in this life and lasting bliss in the next. Those who are warned are the wrongdoers given to injustice and ignorance; theirs is caution against punishment here and a long, severe punishment hereafter. The one Messenger ﷺ holds out both at once, and the balance is deliberate.",
            "bn": "সাদী দুটি ছবিই পুরোপুরি এঁকে দেন। যারা সুসংবাদ পায় তারা সেই মুত্তাকী ঈমানদার, যারা ঈমানের সঙ্গে নেক আমল আর গুনাহ ছেড়ে দেওয়াকে মিলিয়ে নিয়েছে; তাদের জন্য সুসংবাদ এই জীবনে, আর পরকালে চিরস্থায়ী নিয়ামত। আর যাদের সতর্ক করা হয় তারা সেই যালিম, যারা জুলুম আর অজ্ঞতায় ডুবে আছে; তাদের জন্য সতর্কতা এখানে শাস্তির, আর আখিরাতে দীর্ঘ কঠিন আযাবের। একই রাসূল ﷺ দুটিকেই একসঙ্গে বাড়িয়ে ধরেন, আর এই ভারসাম্য উদ্দেশ্যমূলক।"
          },
          {
            "en": "Neither office cancels the other. Hope without warning turns careless; warning without hope turns to despair. The believer is meant to live between them — carried forward by the promise, kept honest by the caution. That the glad tidings is named first, here and in the Torah description, tilts the balance gently toward mercy, without letting go of the warning that makes the mercy worth seeking.",
            "bn": "কোনো দায়িত্ব অন্যটিকে বাতিল করে না। সতর্কতা ছাড়া আশা মানুষকে বেপরোয়া করে; আশা ছাড়া সতর্কতা নিয়ে যায় নিরাশার দিকে। ঈমানদারের থাকার কথা এ দুইয়ের মাঝখানে। প্রতিশ্রুতি তাকে সামনে টানে, আর সতর্কতা তাকে সৎ রাখে। সুসংবাদকে যে প্রথমে নাম দেওয়া হলো, এখানে আর তাওরাতের বর্ণনায়ও, তা ভারসাম্যকে আলতো করে রহমতের দিকে হেলিয়ে দেয়, অথচ সেই সতর্কতাকে ছাড়ে না যা রহমতকে খোঁজার মতো করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Caller and the Lamp",
          "bn": "আহবানকারী ও প্রদীপ"
        },
        "p": [
          {
            "en": "The next verse completes the picture, and it helps to read it alongside: wa dāʿiyan ilā Allāh bi-idhnihi wa sirājan munīran — a caller to Allah by His leave and an illuminating lamp (33:46). Ibn Kathir explains the calling: you summon mankind to worship their Lord because He has commanded you to do so. The Muyassar adds that the call is to Allah's Oneness and to worshipping Him alone, carried out by His command — the mission is His, entrusted to the Messenger ﷺ.",
            "bn": "পরের আয়াত ছবিটা পূর্ণ করে, আর একে পাশাপাশি পড়লে সুবিধা হয়: ওয়া দাঈয়ান ইলাল্লাহি বিইযনিহি ওয়া সিরাজান মুনীরা, আল্লাহর অনুমতিক্রমে তাঁর পথে আহবানকারী আর আলোকপ্রদ প্রদীপ (৩৩:৪৬)। ইবন কাসীর এই আহবানের ব্যাখ্যা দেন: তুমি মানুষকে তাদের রবের ইবাদতের দিকে ডাকো, কারণ তিনি তোমাকে সে আদেশ দিয়েছেন। মুয়াসসার যোগ করে, এই ডাক আল্লাহর একত্বের দিকে আর কেবল তাঁরই ইবাদতের দিকে, আর তা হয় তাঁরই আদেশে। দায়িত্বটা তাঁর, রাসূল ﷺ-এর হাতে সঁপে দেওয়া।"
          },
          {
            "en": "The last image is light. Ibn Kathir reads sirāj munīr to mean that the message the Prophet ﷺ brings is as clear as the sun in its brightness, and none denies it but the stubborn. The Muyassar speaks of a lamp for whoever seeks light by him. It answers the earlier verse: He who brings the believers from darkness into light (33:43) sends among them a lamp. The guidance has a source they can see by.",
            "bn": "শেষ ছবিটা আলোর। ইবন কাসীর সিরাজ মুনীর পড়েন এই অর্থে যে নবী ﷺ যে বার্তা আনেন তা সূর্যের উজ্জ্বলতার মতোই স্পষ্ট, একগুঁয়ে ছাড়া কেউ তা অস্বীকার করে না। মুয়াসসার বলে, যে তাঁর আলোয় আলোকিত হতে চায় তার জন্য এক প্রদীপ। এ যেন আগের আয়াতেরই জবাব: যিনি ঈমানদারদের অন্ধকার থেকে আলোতে আনেন (৩৩:৪৩), তিনিই তাদের মাঝে পাঠান এক প্রদীপ। হেদায়েতের এমন এক উৎস আছে যার আলোয় তারা দেখতে পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Foretold in the Torah",
          "bn": "তাওরাতে আগাম বর্ণনা"
        },
        "p": [
          {
            "en": "A sound report ties the verse to a striking fact. Al-Bukhārī records, on the authority of ʿAbdullāh ibn ʿAmr ibn al-ʿĀṣ, that ʿAṭāʾ ibn Yasār asked him about the description of the Messenger ﷺ in the Torah. He answered, By Allah, he is described in the Torah with some of the qualities attributed to him in the Qurʾān: 'O Prophet, We have sent you as a witness and a bearer of glad tidings and a warner, and a guardian for the unlettered.' Being in al-Bukhārī's collection, the report is ṣaḥīḥ.",
            "bn": "একটি সহীহ বর্ণনা আয়াতটিকে এক চমকপ্রদ সত্যের সঙ্গে বেঁধে দেয়। বুখারী আবদুল্লাহ ইবন আমর ইবনুল আস (রাঃ) থেকে বর্ণনা করেন যে আতা ইবন ইয়াসার তাঁকে জিজ্ঞেস করেছিলেন তাওরাতে রাসূল ﷺ-এর বর্ণনা নিয়ে। তিনি উত্তর দিলেন, আল্লাহর কসম, কুরআনে তাঁর যেসব গুণ বলা হয়েছে তার কিছু তাওরাতেও তাঁর ব্যাপারে বলা আছে: 'হে নবী, আমি তোমাকে পাঠিয়েছি সাক্ষী, সুসংবাদদাতা আর সতর্ককারীরূপে, এবং নিরক্ষরদের রক্ষাকারীরূপে।' বুখারীর সংকলনে থাকায় বর্ণনাটি সহীহ।"
          },
          {
            "en": "The same narration continues in the Torah's words: You are My servant and My Messenger; I have named you al-Mutawakkil, the one who relies on Me. You are not harsh, nor coarse, nor loud in the markets; you do not repay an evil deed with its like, but pardon and forgive. The very titles of this verse, it says, were written before the Qurʾān was sent down — the witness, the bearer of good news, the warner — a mission foretold, not improvised.",
            "bn": "একই বর্ণনা তাওরাতের ভাষায় চলতে থাকে: তুমি আমার বান্দা ও আমার রাসূল; আমি তোমার নাম রেখেছি আল-মুতাওয়াক্কিল, যে আমার উপর ভরসা করে। তুমি রূঢ় নও, কর্কশ নও, বাজারে হট্টগোলকারীও নও; তুমি মন্দের বদলা মন্দ দিয়ে দাও না, বরং ক্ষমা করো আর মাফ করে দাও। এই আয়াতের নামগুলোই, বর্ণনাটি বলছে, কুরআন নাযিল হওয়ার আগেই লেখা ছিল। সাক্ষী, সুসংবাদদাতা, সতর্ককারী—এ এমন এক দায়িত্ব যা আগেই জানানো, হঠাৎ গড়ে ওঠা নয়।"
          },
          {
            "en": "Ibn Kathir and al-Qurtubi also report, from Ibn ʿAbbās, that when this verse came down the Prophet ﷺ sent ʿAlī and Muʿādh toward Yemen with the charge, Give glad tidings and do not repel; make things easy and do not make them hard. The office of mubashshir was not left as a word on a page; it was handed on, as a manner, to those he sent out in his name.",
            "bn": "ইবন কাসীর আর কুরতুবী ইবন আব্বাস (রাঃ) থেকে আরও বর্ণনা করেন যে এই আয়াত যখন নাযিল হয়, নবী ﷺ আলী আর মুআয (রাঃ)-কে ইয়ামানের দিকে পাঠান এই নির্দেশ দিয়ে: সুসংবাদ দাও, বিমুখ করো না; সহজ করো, কঠিন করো না। মুবাশশিরের দায়িত্ব পাতায় লেখা একটা শব্দ হয়ে পড়ে থাকেনি। এক আচরণ হিসেবে তা তাঁর নামে পাঠানো মানুষদের হাতে তুলে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Names, One Steadying",
          "bn": "বহু নাম, এক ভরসা"
        },
        "p": [
          {
            "en": "Al-Qurtubi pauses on how many of the Messenger's ﷺ names this single verse holds, and how many he bears in all. He recalls the Prophet's ﷺ own words that he has several names — Muḥammad, Aḥmad, and others — and notes that scholars gathered them at length: Qāḍī ʿIyāḍ in ash-Shifāʾ, Ibn al-ʿArabī who counted dozens from this passage, and a report from Ibn ʿAbbās of many more. A man described from so many sides was sent for a work that touched every side of life.",
            "bn": "কুরতুবী থামেন এই ভেবে যে এই একটি আয়াতই রাসূল ﷺ-এর কত নাম ধরে রেখেছে, আর মোট কত নাম তিনি বহন করেন। তিনি নবী ﷺ-এর নিজের কথা মনে করান যে তাঁর কয়েকটি নাম আছে—মুহাম্মাদ, আহমাদ, আরও কিছু। আর তিনি বলেন, আলেমরা এগুলো বিস্তারিত জড়ো করেছেন: কাযী ইয়ায তাঁর 'আশ-শিফা' গ্রন্থে, ইবনুল আরাবী যিনি এই আয়াত থেকেই অনেকগুলো নাম গুনেছেন, আর ইবন আব্বাস (রাঃ) থেকে আসা আরও বহু নামের বর্ণনা। এত দিক থেকে যাঁর বর্ণনা, তাঁকে পাঠানো হয়েছিল এমন এক কাজের জন্য যা জীবনের প্রতিটি দিক ছুঁয়ে যায়।"
          },
          {
            "en": "For the one who follows him, the three offices are a steadying. In a surah of siege and strain, the believer is told that he walks behind a witness who sees his days, a bearer of glad tidings who points to mercy worth reaching for, and a warner whose caution is itself a kindness. To take all three to heart is to live watched, hopeful, and awake — which is exactly what a season of trial asks of a believer.",
            "bn": "যে তাঁকে অনুসরণ করে, তার জন্য এই তিন দায়িত্ব এক ভরসা। ঘেরাও আর টানাপোড়েনের সূরায় ঈমানদারকে বলা হচ্ছে, সে এমন একজনের পেছনে হাঁটে যিনি তার দিনগুলো দেখেন এমন এক সাক্ষী, যিনি এমন এক সুসংবাদদাতা যে খুঁজে পাওয়ার মতো রহমতের দিকে ইশারা করেন, আর যিনি এমন এক সতর্ককারী যাঁর সতর্কতাই দয়া। তিনটিকেই অন্তরে নেওয়া মানে বাঁচা দেখা-অবস্থায়, আশায় আর জেগে থেকে। সংকটের মৌসুম ঈমানদারের কাছে ঠিক এটাই চায়।"
          }
        ]
      }
    ]
  },
  "33:70": {
    "sections": [
      {
        "h": {
          "en": "Late Commands in al-Ahzab",
          "bn": "আল-আহযাবের শেষের আদেশ"
        },
        "p": [
          {
            "en": "Surah al-Ahzab is a surah of pressures: the siege of the confederates, the rumours and annoyances spread by hypocrites, verses answering tongues that wounded. Near its end, in 33:69, the believers are warned not to be like those who harmed Musa (AS) with what they said, and whom Allah cleared of what they alleged. Immediately after comes 33:70, addressed to those who believe: have taqwa of Allah, and speak qawlan sadida — straight speech.",
            "bn": "সূরা আল-আহযাব নানা চাপের সূরা: সম্মিলিত বাহিনীর অবরোধ, মুনাফিকদের ছড়ানো গুজব ও উত্ত্যক্ততা, আঘাত করা জিভগুলোর জবাবে নাযিল হওয়া আয়াত। এর শেষের দিকে, 33:69 আয়াতে, মুমিনদের সতর্ক করা হয়েছে — তাদের মতো হয়ো না, যারা নিজেদের কথায় মূসা (আঃ)-কে কষ্ট দিয়েছিল, আর তাদের অপবাদ থেকে আল্লাহ তাঁকে নির্দোষ প্রমাণ করেছিলেন। ঠিক তার পরেই আসে 33:70 আয়াত, মুমিনদের উদ্দেশে: আল্লাহর তাকওয়া অবলম্বন করো, আর বলো কাওলান সাদীদা — সোজা, লক্ষ্যভেদী কথা।"
          },
          {
            "en": "The placement is the first commentary. After chapters of damage done by talk — the taunts during the siege, the abuse aimed at a prophet one verse earlier — the surah's closing counsel to believers concerns the tongue. Taqwa and speech are issued in one breath, as one command with two faces, because most of what conscience must govern in an ordinary day passes through words.",
            "bn": "এই অবস্থানই প্রথম তাফসীর। কথার ক্ষতির অধ্যায়গুলোর পরে — অবরোধের দিনের বিদ্রূপ, এক আয়াত আগেই এক নবীকে লক্ষ্য করা কটূক্তি — সূরার শেষ উপদেশটি মুমিনদের জন্য জিভ নিয়েই। তাকওয়া আর কথা জারি হয়েছে এক নিঃশ্বাসে, দুই মুখওয়ালা একটিই আদেশ হয়ে — কারণ একটি সাধারণ দিনে বিবেককে যা যা শাসন করতে হয়, তার বেশির ভাগই যাতায়াত করে শব্দের ভেতর দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "An Arrow Aimed True",
          "bn": "লক্ষ্যভেদী তীর"
        },
        "p": [
          {
            "en": "Sadid comes from a root whose verb is used for aiming an arrow so that it strikes the mark. Qawl sadid is speech with that quality: true, first of all — the most common gloss of the mufassirun — but also straight in its aim: accurate, fitting the occasion, free of crookedness, exaggeration and spin. A sentence can be technically true and still bent, implying what is false or wounding what needed healing. Sadid excludes the bend, not only the lie.",
            "bn": "সাদীদ এসেছে এমন এক মূলধাতু থেকে, যার ক্রিয়াপদ ব্যবহৃত হয় তীর এমনভাবে তাক করায় যেন তা লক্ষ্যে বেঁধে। কাওলে সাদীদ সেই গুণের কথা: সবার আগে সত্য — মুফাসসিরগণের সবচেয়ে প্রচলিত ব্যাখ্যা এটিই — কিন্তু সেই সঙ্গে নিশানাতেও সোজা: নির্ভুল, উপলক্ষের মাপে মাপা, বক্রতা-অতিরঞ্জন-মোড়ক থেকে মুক্ত। একটি বাক্য আক্ষরিকভাবে সত্য হয়েও বাঁকা হতে পারে — মিথ্যার ইঙ্গিত দিয়ে, বা যেখানে সারানোর দরকার ছিল সেখানে আঘাত করে। সাদীদ শুধু মিথ্যাকে নয়, বাঁকটিকেও বাদ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Commands, Two Gifts",
          "bn": "দুই আদেশ, দুই উপহার"
        },
        "p": [
          {
            "en": "The next verse states the return on obedience. For the two commands of 33:70 — taqwa and straight speech — 33:71 announces two gifts: He will set your deeds right for you, and He will forgive you your sins; and whoever obeys Allah and His Messenger has won a great triumph. The commentators dwell on the order of cause and effect: speech is placed upstream of deeds, so that straightening the tongue becomes a means by which Allah straightens the rest of a life.",
            "bn": "পরের আয়াতটি আনুগত্যের প্রতিদান ঘোষণা করে। 33:70 আয়াতের দুই আদেশের — তাকওয়া ও সোজা কথা — বিনিময়ে 33:71 আয়াত ঘোষণা করে দুই উপহার: তিনি তোমাদের জন্য তোমাদের আমলগুলো সংশোধন করে দেবেন, আর তোমাদের গুনাহগুলো ক্ষমা করে দেবেন; আর যে আল্লাহ ও তাঁর রাসূলের আনুগত্য করে, সে পেয়ে গেছে মহাসাফল্য। মুফাসসিরগণ কারণ-ফলাফলের এই ক্রমে থামেন: কথাকে রাখা হয়েছে আমলের উজানে — যেন জিভ সোজা করাই সেই উপায় হয়ে ওঠে, যা দিয়ে আল্লাহ জীবনের বাকিটা সোজা করে দেন।"
          },
          {
            "en": "The logic is observable. Words are commitments that deeds must then chase: an exaggerated promise manufactures a future failure, while an honest one sizes the deed to fit. Words are also the deeds' accountants — a person who will not lie about what he did acquires a reason not to do what he would have to lie about. Guard the report, and the behaviour reported on begins to reform. The verse compresses that mechanism into a divine promise.",
            "bn": "যুক্তিটি চোখেই দেখা যায়। কথা হলো সেই অঙ্গীকার, যার পেছনে আমলকে ছুটতে হয়: অতিরঞ্জিত প্রতিশ্রুতি ভবিষ্যতের একটি ব্যর্থতা বানিয়ে রাখে, আর সৎ প্রতিশ্রুতি কাজটিকে মাপমতো কাটে। কথা আমলের হিসাবরক্ষকও — যে মানুষ নিজের কাজ নিয়ে মিথ্যা বলবে না, সে এমন কাজ না করার একটি কারণ পেয়ে যায়, যা করলে তাকে মিথ্যা বলতে হতো। প্রতিবেদনটিকে পাহারা দিন — যে আচরণের প্রতিবেদন, তা নিজেই শুধরাতে শুরু করবে। আয়াতটি এই কলকব্জাকেই সংকুচিত করেছে এক ঐশী প্রতিশ্রুতিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Speech Under Watch",
          "bn": "নজরদারিতে থাকা কথা"
        },
        "p": [
          {
            "en": "The Quran's wider teaching on the tongue frames the command. In 50:18 no word is uttered without a ready watcher recording it. In 14:24-25 a good word is likened to a good tree, its root firm and its branches in the sky, giving its fruit all the time by its Lord's permission. In 17:53 the servants are told to say that which is best, because Shaytan sows discord between them — degraded speech is named as his working surface among people.",
            "bn": "জিভ নিয়ে কুরআনের ব্যাপকতর শিক্ষাই আদেশটির ফ্রেম। 50:18 আয়াতে — এমন কোনো কথা উচ্চারিত হয় না, যা লেখার জন্য প্রস্তুত প্রহরী নেই। 14:24-25 আয়াতে উত্তম কথাকে তুলনা করা হয়েছে উত্তম গাছের সঙ্গে — মূল সুদৃঢ়, শাখা আকাশে, প্রতিপালকের অনুমতিতে সব সময় ফল দেয়। 17:53 আয়াতে বান্দাদের বলা হয়েছে সেই কথাটি বলতে যা সর্বোত্তম, কারণ শয়তান তাদের মধ্যে বিভেদ বোনে — বিকৃত কথাকেই বলা হয়েছে মানুষের মাঝে তার কাজের জমি।"
          },
          {
            "en": "And in 2:83, among the covenant obligations taken from the Children of Israel, alongside worship of Allah and kindness to parents, stands the command to speak to people what is good. The instruction sits in a list of foundational duties, addressed to speech toward people in general, not believers only. Straight, good speech in the Quran is not etiquette; it is covenant material, listed with prayer and zakah.",
            "bn": "আর 2:83 আয়াতে, বনী ইসরাঈলের কাছ থেকে নেওয়া অঙ্গীকারের দায়গুলোর মধ্যে, আল্লাহর ইবাদত ও পিতামাতার সঙ্গে সদাচরণের পাশে দাঁড়িয়ে আছে এই আদেশ — মানুষের সঙ্গে ভালো কথা বলো। নির্দেশটি বসে আছে ভিত্তিমূলক কর্তব্যের এক তালিকায়, আর তা সাধারণভাবে মানুষের প্রতি কথার বিষয়ে — কেবল মুমিনদের প্রতি নয়। কুরআনে সোজা, ভালো কথা কোনো শিষ্টাচার নয়; তা অঙ্গীকারের উপাদান — নামাজ ও যাকাতের সঙ্গে এক তালিকায় লেখা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet's ﷺ Guarantees",
          "bn": "নবী ﷺ-এর জামিন"
        },
        "p": [
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA): whoever believes in Allah and the Last Day, let him speak good or keep silent. The hadith gives speech a default setting — silence — that a word must justify leaving. Al-Bukhari also relates from Sahl ibn Sa'd (RA) that the Prophet ﷺ said: whoever guarantees me what is between his jaws and what is between his legs, I guarantee him Paradise. Of the body's members, the tongue is one of the two whose discipline carries that promise.",
            "bn": "ইমাম বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন: যে আল্লাহ ও শেষ দিবসে বিশ্বাস রাখে, সে যেন ভালো কথা বলে, নয়তো চুপ থাকে। হাদীসটি কথাকে একটি পূর্বনির্ধারিত অবস্থান দেয় — নীরবতা — যেখান থেকে বেরোনোর যৌক্তিকতা প্রতিটি শব্দকে দিতে হয়। ইমাম বুখারী সাহল ইবনে সা'দ (রাঃ) থেকেও বর্ণনা করেন, নবী ﷺ বলেছেন: যে আমাকে তার দুই চোয়ালের মাঝেরটির আর দুই পায়ের মাঝেরটির জামিন দেবে, আমি তাকে জান্নাতের জামিন দেব। দেহের অঙ্গগুলোর মধ্যে জিভ সেই দুটির একটি, যার সংযম এই প্রতিশ্রুতি বহন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Straightening the Day's Words",
          "bn": "দিনের কথা সোজা করা"
        },
        "p": [
          {
            "en": "The verse converts into concrete checks. Before repeating a report: is it verified, or merely interesting? Before a promise: is it sized to what I will actually do? In anger: is this sentence aimed at the problem or at the person? Online, where words travel farthest and cost least, qawl sadid means writing about opponents only what could be defended in their presence. Each check is small; the verse's promise attaches to their accumulation.",
            "bn": "আয়াতটি রূপ নেয় কয়েকটি বাস্তব যাচাইয়ে। কোনো খবর আওড়ানোর আগে: এটি কি যাচাই করা, নাকি কেবল চমকপ্রদ? প্রতিশ্রুতির আগে: এটি কি আমি সত্যিই যা করব তার মাপে কাটা? রাগের মুহূর্তে: এই বাক্যটির নিশানা কি সমস্যাটি, নাকি মানুষটি? অনলাইনে — যেখানে কথা সবচেয়ে দূরে যায় আর খরচ সবচেয়ে কম — কাওলে সাদীদ মানে প্রতিপক্ষ সম্পর্কে কেবল তা-ই লেখা, যা তাদের সামনে দাঁড়িয়েও সমর্থন করা যেত। প্রতিটি যাচাই ছোট; আয়াতের প্রতিশ্রুতি জুড়ে আছে সেগুলোর সমষ্টির সঙ্গে।"
          },
          {
            "en": "The verse after the promise sets the stakes: 33:72 describes the amanah, the trust offered to the heavens, the earth and the mountains, which they declined and man carried. Speech is part of that carried trust, every word an act inside it. Taqwa of Allah and straightness of speech, kept together as the verse keeps them, are how an ordinary talkative human being carries the trust safely — with deeds set right and sins forgiven along the way.",
            "bn": "প্রতিশ্রুতির পরের আয়াতটি বাজির অঙ্কটা দেখিয়ে দেয়: 33:72 আয়াতে আছে আমানতের কথা — যে আমানত পেশ করা হয়েছিল আসমান, জমিন ও পর্বতের কাছে, তারা তা নিতে অস্বীকার করল, আর মানুষ তা বহন করল। কথা সেই বহন করা আমানতেরই অংশ — প্রতিটি শব্দ তার ভেতরের একেকটি কাজ। আল্লাহর তাকওয়া আর কথার সোজা থাকা — আয়াত যেমন দুটিকে একসঙ্গে রেখেছে তেমনি একসঙ্গে রাখলে — এভাবেই একজন সাধারণ কথাপ্রিয় মানুষ আমানতটি নিরাপদে বহন করে; পথে পথে আমল শুধরে আর গুনাহ মাফ হতে হতে।"
          }
        ]
      }
    ]
  }
});
