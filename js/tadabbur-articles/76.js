/**
 * Tadabbur long-form articles — surah 76.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "76:1": {
    "sections": [
      {
        "h": {
          "en": "A Question That Affirms",
          "bn": "যে প্রশ্ন নিশ্চিত করে"
        },
        "p": [
          {
            "en": "Hal ata ala al-insani hinun min ad-dahri lam yakun shay'an madhkura. The verse opens with hal, the ordinary Arabic interrogative, and the mufassirun do not read it as a real question here. They take it as taqrir — an interrogative form used to make the listener concede something he already knows — and Ibn Kathir glosses hal in this place as qad, indeed. The sense is not has there come, but there certainly did come.",
            "bn": "হাল আতা 'আলাল ইনসানি হীনুম মিনাদ দাহরি লাম ইয়াকুন শাইআম মাযকূরা। আয়াতটি শুরু হয় 'হাল' দিয়ে — আরবির সাধারণ প্রশ্নবোধক শব্দ — আর মুফাসসিরগণ এখানে একে প্রকৃত প্রশ্ন হিসেবে পড়েন না। তাঁরা একে নেন 'তাকরীর' হিসেবে — এমন প্রশ্নবাচক গঠন, যা শ্রোতাকে সে যা আগে থেকেই জানে তা মেনে নিতে বাধ্য করে — আর ইবনে কাসীর এখানে 'হাল'-এর ব্যাখ্যা করেন 'কাদ' অর্থাৎ 'নিশ্চয়ই' দিয়ে। অর্থ 'কি এসেছিল' নয়, বরং 'অবশ্যই এসেছিল'।"
          },
          {
            "en": "The difference matters for how the verse lands. A question invites you to consider a possibility; this one closes an argument before it starts. And the surah takes its identity from these opening words: it is known as al-Insan, as ad-Dahr, and as Hal Ata, and all three names come out of this single line.",
            "bn": "পার্থক্যটি গুরুত্বপূর্ণ, কারণ আয়াতটি কীভাবে এসে পড়ে তা এর উপরই নির্ভর করে। প্রশ্ন একটি সম্ভাবনা বিবেচনা করতে আহ্বান জানায়; এটি বরং তর্ক শুরুর আগেই তা মিটিয়ে দেয়। আর সূরাটি তার পরিচয় পায় এই সূচনা-শব্দগুলো থেকেই: এটি পরিচিত আল-ইনসান নামে, আদ-দাহর নামে এবং হাল আতা নামে — তিনটি নামই উঠে এসেছে এই একটিমাত্র পঙ্‌ক্তি থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Stretch of Time",
          "bn": "সময়ের এক টুকরো"
        },
        "p": [
          {
            "en": "Hinun min ad-dahr — a hin out of the long extent of time. Hin is a period of unspecified length, and here it is left indefinite, so no figure is given and none is implied. The point of the vagueness is that the reader cannot date the boundary. There is a stretch before you in which you did not feature, and the verse deliberately refuses to tell you how long it was.",
            "bn": "হীনুম মিনাদ দাহর — দীর্ঘ কালপ্রবাহের ভেতর থেকে একটি 'হীন'। 'হীন' মানে অনির্দিষ্ট দৈর্ঘ্যের একটি সময়, আর এখানে তা অনির্দিষ্ট রূপেই রাখা হয়েছে; ফলে কোনো সংখ্যা দেওয়া হয়নি, ইঙ্গিতেও নয়। এই অস্পষ্টতার উদ্দেশ্য হলো, পাঠক সীমারেখাটির তারিখ বসাতে পারবে না। তোমার আগে এমন একটি বিস্তার আছে যেখানে তুমি ছিলেই না, আর আয়াতটি ইচ্ছা করেই বলে না তা কত দীর্ঘ ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Thing Mentioned",
          "bn": "উল্লেখযোগ্য কিছুই নয়"
        },
        "p": [
          {
            "en": "Lam yakun shay'an madhkura — he was not a thing mentioned. The commentators offer two readings and it is right to keep both. On one, he was not a thing at all, so there was nothing there to speak of. On the other, he existed at some stage in some form but was not spoken of by anyone — unnamed, unremarked, of no account. Al-Qurtubi records both without forcing a choice between them.",
            "bn": "লাম ইয়াকুন শাইআম মাযকূরা — সে উল্লেখযোগ্য কিছুই ছিল না। মুফাসসিরগণ দুটি পাঠ দেন, আর দুটিই ধরে রাখা উচিত। একটিতে: সে কোনো কিছুই ছিল না, তাই বলার মতো সেখানে কিছুই ছিল না। অন্যটিতে: সে কোনো এক পর্যায়ে কোনো এক রূপে ছিল, কিন্তু কেউ তার কথা বলত না — নামহীন, অনুল্লিখিত, গণনার বাইরে। আল-কুরতুবী দুটিই লিপিবদ্ধ করেন, কোনোটিকে বেছে নিতে জোর না করে।"
          },
          {
            "en": "Who al-insan is here is also disputed: some take it of Adam (AS) in particular, others of the human being as such, meaning every one of us. The phrase that he was nothing returns twice elsewhere in the Quran. 19:9 has Allah tell Zakariyya (AS) that He created him before while he was nothing, and 19:67 puts it to everybody as a reproach: does man not remember that We created him before, while he was nothing?",
            "bn": "এখানে 'আল-ইনসান' কে, তা নিয়েও মতভেদ আছে: কেউ একে নেন বিশেষভাবে আদম (আঃ) অর্থে, কেউ নেন সাধারণভাবে মানুষ অর্থে — অর্থাৎ আমাদের প্রত্যেকে। 'সে কিছুই ছিল না' — এই কথাটি কুরআনে আরও দুবার ফিরে আসে। 19:9 আয়াতে আল্লাহ যাকারিয়া (আঃ)-কে বলেন যে তিনি তাঁকে আগে সৃষ্টি করেছেন যখন তিনি কিছুই ছিলেন না; আর 19:67 আয়াতে কথাটি ভর্ৎসনার সুরে সবার সামনে রাখা হয়: মানুষ কি স্মরণ করে না যে আমি পূর্বে তাকে সৃষ্টি করেছি, আর সে তখন কিছুই ছিল না?"
          }
        ]
      },
      {
        "h": {
          "en": "What Comes Immediately After",
          "bn": "ঠিক এর পরেই যা আসে"
        },
        "p": [
          {
            "en": "The next two verses complete the movement. 76:2 says We created man from a mingled drop that We may try him, and We made him hearing and seeing. The word amshaj, mingled, is plural in form though it describes one drop, and the mufassirun explain it as a mixing. 76:3 follows: indeed We guided him to the way, be he grateful or ungrateful.",
            "bn": "পরের দুটি আয়াত গতিটিকে পূর্ণ করে। 76:2 আয়াত বলে, আমি মানুষকে সৃষ্টি করেছি মিশ্রিত এক শুক্রবিন্দু থেকে, যাতে আমি তাকে পরীক্ষা করি; আর আমি তাকে করেছি শ্রবণশীল ও দৃষ্টিশীল। 'আমশাজ' অর্থাৎ 'মিশ্রিত' শব্দটি গঠনে বহুবচন হলেও তা একটিমাত্র বিন্দুরই বর্ণনা দেয়, আর মুফাসসিরগণ একে মিশ্রণ অর্থে ব্যাখ্যা করেন। এরপর 76:3 আয়াত: নিশ্চয়ই আমি তাকে পথ দেখিয়েছি — সে কৃতজ্ঞ হোক বা অকৃতজ্ঞ।"
          },
          {
            "en": "Read as one passage, three verses take a creature from nothing to a drop, from a drop to hearing and sight, and from faculties to a road with directions already given. Every single step is done for him. The one thing not done for him is the last word of 76:3, which is left to him: grateful, or ungrateful. That is the whole design of the surah in miniature.",
            "bn": "একটি অনুচ্ছেদ হিসেবে পড়লে তিনটি আয়াত একটি সৃষ্টিকে নিয়ে যায় শূন্য থেকে এক বিন্দুতে, বিন্দু থেকে শ্রবণ ও দৃষ্টিতে, আর ইন্দ্রিয় থেকে এমন এক পথে যার দিকনির্দেশ আগেই দিয়ে দেওয়া। প্রতিটি ধাপই তার জন্য করে দেওয়া হয়েছে। যেটি করে দেওয়া হয়নি তা হলো 76:3 আয়াতের শেষ কথাটি, যা তার হাতেই ছেড়ে দেওয়া: কৃতজ্ঞ, নাকি অকৃতজ্ঞ। এটিই ছোট পরিসরে গোটা সূরার নকশা।"
          }
        ]
      },
      {
        "h": {
          "en": "From Unmentioned to Mentioned",
          "bn": "অনুল্লিখিত থেকে উল্লিখিত"
        },
        "p": [
          {
            "en": "Madhkur is built from dhikr, mention or remembrance, and that root is where the verse quietly opens a door. The creature who was not worth mentioning is then invited into mention from the other side: 2:152 says remember Me and I will remember you. Being spoken of is not something a person manufactures out of nothing, since he began as nothing; it is given, and the Quran says who gives it.",
            "bn": "'মাযকূর' গড়ে উঠেছে 'যিকর' অর্থাৎ উল্লেখ বা স্মরণ থেকে, আর এই ধাতুতেই আয়াতটি নীরবে একটি দরজা খুলে দেয়। যে সৃষ্টির উল্লেখ করার মতো কিছু ছিল না, তাকেই এরপর অপর দিক থেকে উল্লেখের ভেতর ডাকা হয়: 2:152 আয়াত বলে, তোমরা আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব। উল্লিখিত হওয়া এমন কিছু নয় যা মানুষ শূন্য থেকে বানিয়ে নেয় — কারণ তার শুরুটাই ছিল শূন্য; এটি দেওয়া হয়, আর কে দেন তা কুরআন বলে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Remedy and a Comfort",
          "bn": "একটি প্রতিকার ও একটি সান্ত্বনা"
        },
        "p": [
          {
            "en": "As a remedy for self-importance the verse is unusually gentle, because its argument is chronological rather than moral. It does not say you are bad; it says you are recent. Every claim a person makes on the world rests on a start he did not attend and could not have arranged, and 19:67 turns exactly that fact into a question the proud are asked to answer.",
            "bn": "আত্মম্ভরিতার প্রতিকার হিসেবে আয়াতটি অস্বাভাবিক রকম কোমল, কারণ এর যুক্তি নৈতিক নয়, কালানুক্রমিক। এটি বলে না যে তুমি খারাপ; বলে যে তুমি সদ্য এসেছ। জগতের উপর মানুষ যত দাবিই করুক, তার সবই দাঁড়িয়ে আছে এমন এক সূচনার উপর যেখানে সে উপস্থিতই ছিল না এবং যা সে ঠিকও করতে পারত না; আর 19:67 আয়াত ঠিক এই সত্যটিকেই এমন এক প্রশ্নে বদলে দেয়, যার জবাব অহংকারীদের দিতে বলা হয়।"
          },
          {
            "en": "The same sentence works as a comfort, and this is where it earns its place in tadabbur. The One who brought a whole human being out of a stretch of time in which there was nothing to mention is not going to be short of material for whatever you now lack. Your best case has always been the same case: He made something of you once, when there was even less to work with than there is today.",
            "bn": "এই একই বাক্য সান্ত্বনা হিসেবেও কাজ করে, আর এখানেই তাদাব্বুরে এর জায়গাটি সে অর্জন করে। যিনি এমন এক কালপ্রবাহ থেকে গোটা একটি মানুষ বের করে এনেছেন যেখানে উল্লেখ করার মতো কিছুই ছিল না, এখন তোমার যা কিছুর অভাব তার জন্য উপকরণে তাঁর টান পড়বে না। তোমার সবচেয়ে জোরালো যুক্তিটি বরাবরই একই ছিল: একবার তিনি তোমাকে দিয়ে কিছু একটা বানিয়েছিলেন, তখন হাতে আজকের চেয়েও কম উপকরণ ছিল।"
          }
        ]
      }
    ]
  },
  "76:3": {
    "sections": [
      {
        "h": {
          "en": "The Verb and Its Object",
          "bn": "ক্রিয়াপদ ও তার লক্ষ্য"
        },
        "p": [
          {
            "en": "Inna hadaynahu as-sabila — indeed We guided him to the way. Ibn Kathir glosses hadaynahu in this place as: We explained it to him, We made it clear to him, and We showed it to him. On that reading the guidance being claimed is the delivery of directions and not the walking of the road, which is why the verse can be stated of every human being without exception. The directions went out to all of them.",
            "bn": "ইন্না হাদাইনাহুস সাবীল — নিশ্চয়ই আমি তাকে পথ দেখিয়ে দিয়েছি। ইবনে কাসীর এখানে 'হাদাইনাহু' শব্দটির ব্যাখ্যা করেন এভাবে: আমি তাকে পথটি বুঝিয়ে দিয়েছি, স্পষ্ট করে দিয়েছি এবং দেখিয়ে দিয়েছি। এই পাঠে যে হিদায়াতের দাবি করা হচ্ছে তা পথনির্দেশ পৌঁছে দেওয়া, পথে হাঁটিয়ে দেওয়া নয় — আর এ কারণেই আয়াতটি ব্যতিক্রমহীনভাবে প্রত্যেক মানুষ সম্পর্কে বলা যায়। পথনির্দেশ সবার কাছেই পৌঁছে গেছে।"
          },
          {
            "en": "He brings two proofs. First 41:17, where Allah says of Thamud that We guided them but they preferred blindness over guidance — a guidance a people can be given and still refuse must be a guidance of showing. Then 90:10, We showed him the two ways, which he explains as the path of good and the path of evil, reporting that from Ikrimah, Atiyyah, Ibn Zayd and Mujahid and calling it the position of the majority.",
            "bn": "তিনি দুটি প্রমাণ আনেন। প্রথমে 41:17, যেখানে আল্লাহ সামূদ সম্পর্কে বলেন — আমি তাদের পথ দেখিয়েছিলাম, কিন্তু তারা হিদায়াতের ওপর অন্ধত্বকেই পছন্দ করেছিল; যে হিদায়াত কোনো জাতিকে দেওয়ার পরও তারা প্রত্যাখ্যান করতে পারে, সেটি অবশ্যই পথ দেখানোর হিদায়াত। এরপর 90:10 — আমি তাকে দুটি পথ দেখিয়েছি; এর ব্যাখ্যায় তিনি বলেন, তা কল্যাণের পথ ও অকল্যাণের পথ, আর এই ব্যাখ্যা তিনি ইকরিমাহ, আতিয়্যাহ, ইবনে যায়দ ও মুজাহিদ থেকে বর্ণনা করে একে অধিকাংশ মুফাসসিরের অভিমত বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Shown, and Set Walking",
          "bn": "পথ দেখানো ও পথে চালানো"
        },
        "p": [
          {
            "en": "The scholars therefore separate two things this one word can carry. There is the guidance of clarification, which reaches everyone the message reaches, and which is why the verse can be said of all mankind. And there is the guidance of granting, being actually set walking on the road, which belongs to Allah alone. 28:56 puts the second beyond even the Prophet ﷺ: you do not guide whom you love, but Allah guides whom He wills.",
            "bn": "এ কারণেই আলিমগণ একই শব্দের দুটি অর্থ আলাদা করেন। এক হলো ব্যাখ্যা ও স্পষ্ট করে দেওয়ার হিদায়াত, যা যতদূর দাওয়াত পৌঁছায় ততদূর সবার কাছেই পৌঁছে যায় — এজন্যই আয়াতটি গোটা মানবজাতি সম্পর্কে বলা যায়। আর দুই হলো তাওফীকের হিদায়াত, অর্থাৎ প্রকৃতপক্ষে পথে চালিয়ে দেওয়া, যা কেবল আল্লাহরই এখতিয়ার। 28:56 এই দ্বিতীয়টিকে নবী ﷺ-এর সাধ্যেরও বাইরে রাখে: তুমি যাকে ভালোবাস তাকে হিদায়াত দিতে পার না, বরং আল্লাহ যাকে চান তাকে হিদায়াত দেন।"
          },
          {
            "en": "2:272 says the same to him in a different setting: their guidance is not upon you, but Allah guides whom He wills. None of this reduces 76:3. The verse is speaking of the first kind, and it speaks of it as a finished act — hadayna is past tense, a delivery already made. Nobody will stand at the reckoning able to say that the directions never arrived, whatever else he may say.",
            "bn": "2:272 ভিন্ন প্রসঙ্গে তাঁকে একই কথা বলে: তাদের হিদায়াতের দায়িত্ব তোমার ওপর নয়, বরং আল্লাহ যাকে চান তাকে হিদায়াত দেন। এর কোনোটিই 76:3-এর দাবিকে ছোট করে না। আয়াতটি প্রথম প্রকারের কথা বলছে, আর বলছে সম্পন্ন কাজ হিসেবে — 'হাদাইনা' অতীত কালের ক্রিয়া, অর্থাৎ পৌঁছে দেওয়া হয়ে গেছে। হিসাবের দিনে কেউ যা-ই বলুক, এ কথা বলতে পারবে না যে পথনির্দেশ তার কাছে কখনো এসে পৌঁছায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Imma, and Imma",
          "bn": "হয় ..., না হয় ..."
        },
        "p": [
          {
            "en": "What follows is imma shakiran wa imma kafura — be he grateful or ungrateful. The paired particle imma divides the possibilities and offers exactly two. The sentence does not command gratitude and does not say the guidance was given so that he might be grateful. It reports how the guided creature will in fact turn out. The reader is not asked to choose in the abstract; he is told which of two descriptions he is answering to already.",
            "bn": "এরপর আসে ইম্মা শাকিরান ওয়া ইম্মা কাফূরা — হয় সে কৃতজ্ঞ হবে, না হয় অকৃতজ্ঞ। জোড়া-শব্দ 'ইম্মা' সম্ভাবনাগুলোকে ভাগ করে দেয় এবং ঠিক দুটি বিকল্প রাখে। বাক্যটি কৃতজ্ঞতার আদেশ দিচ্ছে না, এ কথাও বলছে না যে সে কৃতজ্ঞ হবে বলেই হিদায়াত দেওয়া হয়েছে। এটি জানাচ্ছে, পথপ্রাপ্ত মানুষটি বাস্তবে কী হয়ে দাঁড়াবে। পাঠককে কল্পনায় বেছে নিতে বলা হচ্ছে না; বলা হচ্ছে, দুই বর্ণনার কোনটির সঙ্গে সে এখনই মিলে যাচ্ছে।"
          },
          {
            "en": "The two words are also not built alike. Shakiran is the plain active participle, one who gives thanks. Kafura is on the intensive pattern fa'ul, the form that piles the meaning up — not one who was once ungrateful, but one settled in it. That same intensive returns at the end of the surah, where 76:24 tells the Prophet ﷺ to be patient for his Lord's decision and not to obey from among them a sinner or a kafur.",
            "bn": "শব্দ দুটির গড়নও এক নয়। 'শাকিরান' সাধারণ কর্তৃবাচক ইসমে ফা'ইল — যে শুকরিয়া আদায় করে। আর 'কাফূরা' এসেছে 'ফাঊল' ওজনে, যা মুবালাগা বা আধিক্যের রূপ — অর্থাৎ একবার অকৃতজ্ঞ হয়েছে এমন নয়, বরং অকৃতজ্ঞতায় থিতু হয়ে বসেছে এমন। এই একই মুবালাগার রূপ সূরার শেষেও ফিরে আসে: 76:24-এ নবী ﷺ-কে বলা হয়, তোমার প্রতিপালকের ফয়সালার জন্য ধৈর্য ধর এবং তাদের মধ্যকার কোনো পাপাচারী বা কাফূরের আনুগত্য কোরো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Gratitude, Not Belief",
          "bn": "কেন কৃতজ্ঞতা, ঈমান নয়"
        },
        "p": [
          {
            "en": "It is worth asking why the two outcomes are named shukr and kufr rather than belief and its denial. The answer lies in what precedes. A gift has just been described: a road marked out and directions handed over at no cost. The response proper to a gift is thanks, and the failure proper to a gift is not disagreement but ingratitude. That is why the verse reaches for these two words instead of the vocabulary of argument.",
            "bn": "প্রশ্ন করা যেতে পারে, দুটি পরিণতিকে ঈমান ও কুফর না বলে শুকর ও কুফর বলা হলো কেন। উত্তর আছে তার আগের অংশে। এইমাত্র একটি দানের কথা বলা হয়েছে: একটি পথ চিহ্নিত করে দেওয়া হয়েছে এবং পথনির্দেশ বিনামূল্যে হাতে তুলে দেওয়া হয়েছে। দানের উপযুক্ত সাড়া হলো কৃতজ্ঞতা, আর দানের ক্ষেত্রে উপযুক্ত ব্যর্থতা মতবিরোধ নয়, বরং অকৃতজ্ঞতা। এ কারণেই আয়াতটি তর্কের পরিভাষা বাদ দিয়ে এই দুটি শব্দ বেছে নেয়।"
          },
          {
            "en": "The root of kufr helps here. Its basic sense in Arabic is covering something over, and one who covers what is in fact there is a kafir. Set against a verse whose subject is a road made visible, the word is exact. The ungrateful man in 76:3 is not somebody who was never shown; he is somebody who has drawn something across what he was shown. On that reading the verse offers one gift and two ways of receiving it.",
            "bn": "'কুফর' শব্দের মূল ধাতুটি এখানে সাহায্য করে। আরবিতে এর মৌলিক অর্থ কোনো কিছু ঢেকে দেওয়া; যা প্রকৃতপক্ষে বিদ্যমান তা যে ঢেকে রাখে সে-ই কাফির। যে আয়াতের বিষয়বস্তুই হলো দৃশ্যমান করে দেওয়া একটি পথ, তার পাশে শব্দটি একেবারে যথাযথ। 76:3-এর অকৃতজ্ঞ মানুষটি এমন কেউ নয় যাকে কখনো পথ দেখানো হয়নি; বরং তাকে যা দেখানো হয়েছিল তার ওপর সে কিছু একটা টেনে দিয়েছে। এই পাঠে আয়াতটি একটি দান আর তা গ্রহণের দুটি ধরন সামনে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Surah Pays Back",
          "bn": "সূরাটি যে প্রতিদান ফিরিয়ে দেয়"
        },
        "p": [
          {
            "en": "The surah does not leave the grateful one unnamed. Its long description of the righteous closes at 76:22 with the words your effort has been thanked — mashkura, from the very root of shakiran here at the opening. The one who gave thanks is thanked back, in his own vocabulary. Between the third verse and the twenty-second, the surah writes out what that first word costs and what it eventually earns.",
            "bn": "সূরাটি কৃতজ্ঞ মানুষটিকে নামহীন রেখে দেয় না। নেককারদের দীর্ঘ বর্ণনা শেষ হয় 76:22-এ এই কথায় — তোমাদের প্রচেষ্টা স্বীকৃতি পেয়েছে; আরবিতে 'মাশকূরা', যা শুরুর 'শাকিরান' শব্দের ঠিক সেই ধাতু থেকেই এসেছে। যে শুকরিয়া আদায় করেছিল, তাকেই শুকরিয়া জানানো হয় — তারই শব্দে। তৃতীয় আয়াত থেকে বাইশতম আয়াত পর্যন্ত সূরাটি লিখে যায়, শুরুর সেই শব্দটির মূল্য কত এবং শেষে তা কী অর্জন করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Today's Answer",
          "bn": "আজকের জবাব"
        },
        "p": [
          {
            "en": "Muslim narrates from Abu Malik al-Ash'ari (RA) that the Prophet ﷺ said every person goes out in the morning and sells his own soul, either setting it free or destroying it. Ibn Kathir places that hadith under this verse, and the fit is exact. The road was marked before you woke. What a day decides is not where the road lies but which of the two words at the end of 76:3 that day is spent proving.",
            "bn": "মুসলিম আবু মালিক আল-আশ'আরী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন, প্রত্যেক মানুষ সকালে বের হয় এবং নিজের আত্মাকে বেচে দেয় — হয় সে তাকে মুক্ত করে, না হয় ধ্বংস করে। ইবনে কাসীর এই হাদীসটি ঠিক এই আয়াতের নিচেই উল্লেখ করেন, আর মিলটিও নিখুঁত। আপনি জেগে ওঠার আগেই পথ চিহ্নিত ছিল। একটি দিন এ কথা ঠিক করে না যে পথ কোথায়; বরং ঠিক করে, 76:3-এর শেষ দুটি শব্দের কোনটি সেই দিনটি প্রমাণ করে গেল।"
          }
        ]
      }
    ]
  },
  "76:12-22": {
    "sections": [
      {
        "h": {
          "en": "The Price Is Named First",
          "bn": "দামটি আগে বলা হয়"
        },
        "p": [
          {
            "en": "Wa jazahum bima sabaru jannatan wa harira — and He rewarded them, for their patience, with a garden and silk. The passage opens with the payment and the reason for it in a single line, and everything down to 76:22 is that line unpacked. Bima sabaru states the cause plainly: what is being paid for is endurance, and the verses before have already said what was endured.",
            "bn": "ওয়া জাযাহুম বিমা সাবারূ জান্নাতাও ওয়া হারীরা — আর তিনি তাদের ধৈর্যের বিনিময়ে তাদের প্রতিদান দিয়েছেন জান্নাত ও রেশম। অনুচ্ছেদটি শুরু হয় একটিমাত্র বাক্যে প্রতিদান ও তার কারণ দিয়ে, আর 76:22 আয়াত পর্যন্ত সবকিছুই সেই বাক্যটির খোলাসা। 'বিমা সাবারূ' কারণটি স্পষ্ট করে বলে দেয়: যার দাম দেওয়া হচ্ছে তা হলো সহ্য করা, আর কী সহ্য করা হয়েছিল তা আগের আয়াতগুলো ইতিমধ্যেই বলে দিয়েছে।"
          },
          {
            "en": "76:7 describes them fulfilling vows and fearing a Day whose evil spreads wide. 76:8 has them giving food, over their own love for it, to a needy person, an orphan and a captive. Ibn Kathir prefers the reading in which the love is love of the food itself, and 3:92 says the same thing outright: you will not attain righteousness until you spend from what you love.",
            "bn": "76:7 আয়াত তাদের বর্ণনা করে মানত পূর্ণকারী এবং এমন এক দিনকে ভয়কারী হিসেবে, যার অনিষ্ট বহুদূর ছড়িয়ে পড়ে। 76:8 আয়াতে তারা নিজেদের ভালোবাসা সত্ত্বেও খাবার দেয় মিসকীন, ইয়াতীম ও বন্দীকে। অ্যাপের বাংলা অনুবাদ 'আলা হুব্বিহি'-কে আল্লাহর প্রতি ভালোবাসা অর্থে পড়ে, আর ইবনে কাসীর প্রাধান্য দেন সেই পাঠটিকে যেখানে ভালোবাসাটি খাবারটির প্রতিই; 3:92 আয়াত কথাটি সরাসরিই বলে: তোমরা তোমাদের প্রিয় বস্তু ব্যয় না করা পর্যন্ত কখনোই পুণ্য লাভ করবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Words They Refused",
          "bn": "যে দুটি শব্দ তারা নিতে চায়নি"
        },
        "p": [
          {
            "en": "76:9 records what they said as they gave: we feed you only for the Face of Allah; we want from you neither jaza' nor shukur — neither repayment nor thanks. Hold those two words. 76:22, the last verse of the passage, is what they are told at the end: inna hadha kana lakum jaza'an wa kana sa'yukum mashkura — indeed this is a reward for you, and your effort has been thanked.",
            "bn": "76:9 আয়াত লিপিবদ্ধ করে তারা দেওয়ার সময় কী বলত: আমরা কেবল আল্লাহর চেহারার উদ্দেশেই তোমাদের খাওয়াই; আমরা তোমাদের কাছে চাই না 'জাযা', চাই না 'শুকূর' — না প্রতিদান, না কৃতজ্ঞতা। শব্দ দুটি ধরে রাখুন। অনুচ্ছেদের শেষ আয়াত 76:22-তে তাদের বলা হয়: 'ইন্না হাযা কানা লাকুম জাযাআও ওয়া কানা সা'ইউকুম মাশকূরা' — নিশ্চয়ই এটি তোমাদের জন্য প্রতিদান, আর তোমাদের প্রচেষ্টা কৃতজ্ঞতার সঙ্গে গৃহীত হয়েছে।"
          },
          {
            "en": "The two things they declined to take from human beings are returned to them by name, from the only source that can give them without putting anyone in debt. That is the architecture of the whole passage, and it is why the reward reads as an answer rather than as a list. Everything between 76:12 and 76:22 sits inside that exchange.",
            "bn": "মানুষের কাছ থেকে তারা যে দুটি জিনিস নিতে অস্বীকার করেছিল, সে দুটিই নাম ধরে তাদের ফিরিয়ে দেওয়া হয় — একমাত্র সেই উৎস থেকে, যিনি তা দিতে পারেন কাউকে ঋণী না করেই। এটিই গোটা অনুচ্ছেদের স্থাপত্য, আর এ কারণেই প্রতিদানটিকে তালিকা নয়, একটি জবাব বলে মনে হয়। 76:12 থেকে 76:22 পর্যন্ত সবকিছুই এই বিনিময়ের ভেতরে বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Climate, Not a Landscape",
          "bn": "দৃশ্যপট নয়, এক আবহাওয়া"
        },
        "p": [
          {
            "en": "76:13 has them reclining on ara'ik, which Ibn Kathir describes as couches beneath curtained canopies, and then denies two things at once: they will see in it neither sun nor zamharir, neither burning heat nor biting cold. 76:14 brings the shade near and lowers the fruit — dhullilat qutufuha tadhlila. Mujahid says that if he stands it rises with him, and if he sits it comes down to him.",
            "bn": "76:13 আয়াতে তারা হেলান দিয়ে বসে 'আরাইক'-এর ওপর, যাকে ইবনে কাসীর বর্ণনা করেন পর্দাঘেরা ছত্রছায়ার নিচের আসন হিসেবে; আর তারপর একসঙ্গে দুটি জিনিস অস্বীকার করা হয়: সেখানে তারা দেখবে না সূর্য, দেখবে না 'যামহারীর' — না দহনকারী গরম, না কামড়ে ধরা শীত। 76:14 আয়াত ছায়াকে কাছে নিয়ে আসে আর ফল নামিয়ে দেয় — 'যুল্লিলাত কুতূফুহা তাযলীলা'। মুজাহিদ বলেন, সে দাঁড়ালে ফল তার সঙ্গে উঁচু হয়, আর বসলে তার কাছে নেমে আসে।"
          },
          {
            "en": "Nothing here is described by its scenery. It is described by the absence of effort and of extremes: no reaching, no weather, no waiting. For people whose distinguishing act was carrying food to someone else while they wanted it themselves, that is a precise reversal. The strain they took on has been taken off them again, item by item.",
            "bn": "এখানে কোনো কিছুরই বর্ণনা দেওয়া হয়েছে দৃশ্যপট দিয়ে নয়। বর্ণনা দেওয়া হয়েছে পরিশ্রম আর চরমতার অনুপস্থিতি দিয়ে: হাত বাড়ানো নেই, আবহাওয়া নেই, অপেক্ষা নেই। যাদের বৈশিষ্ট্যসূচক কাজটিই ছিল নিজের চাওয়া সত্ত্বেও অন্যের কাছে খাবার পৌঁছে দেওয়া, তাদের জন্য এটি একেবারে নিখুঁত এক উল্টোদিক। যে ভার তারা নিজেদের ঘাড়ে তুলে নিয়েছিল, তা একটি একটি করে নামিয়ে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Served, and Measured",
          "bn": "পরিবেশিত, আর মাপা"
        },
        "p": [
          {
            "en": "76:15 sends vessels of silver and cups round among them; 76:16 calls the cups qawarir min fiddah, which Ibn Abbas, Mujahid and al-Hasan al-Basri explain as the whiteness of silver with the transparency of glass. Then qaddaruha taqdira: the measure is exact. Ibn Abbas, Mujahid, Sa'id ibn Jubayr and Qatadah read it as filled to the drinker's thirst, no more and no less.",
            "bn": "76:15 আয়াতে তাদের চারপাশে ঘুরে পরিবেশিত হয় রুপার পাত্র ও পানপাত্র; 76:16 আয়াত সেই পানপাত্রগুলোকে বলে 'কাওয়ারীরা মিন ফিদ্দাহ', যার ব্যাখ্যায় ইবনে আব্বাস, মুজাহিদ ও হাসান আল-বসরী বলেন — কাচের স্বচ্ছতার ভেতরে রুপার শুভ্রতা। এরপর 'কাদ্দারূহা তাকদীরা': পরিমাপটি নিখুঁত। ইবনে আব্বাস, মুজাহিদ, সাঈদ ইবনে জুবাইর ও কাতাদাহ একে পড়েন পানকারীর তৃষ্ণা অনুযায়ী ভরা অর্থে — তার বেশিও নয়, কমও নয়।"
          },
          {
            "en": "76:19 sends the servants: wildan mukhalladun, boys of unchanging youth, whom you would take for scattered pearls when you saw them dispersing. 76:20 turns to the onlooker — and when you look there, you see delight and a great dominion. The people who once served the poor are now the people served, and it is put as a scene that someone else walks in upon.",
            "bn": "76:19 আয়াত পাঠায় সেবকদের: 'ওয়িলদানুম মুখাল্লাদূন', চিরকিশোরেরা, যাদের ছড়িয়ে পড়তে দেখলে তুমি ভাববে ছড়ানো মুক্তা। 76:20 আয়াত ফেরে দর্শকের দিকে — আর তুমি যখন সেদিকে তাকাবে, দেখবে ভোগৈশ্বর্য ও এক বিশাল রাজ্য। যারা একদিন দরিদ্রদের সেবা করত, তারাই এখন সেবা পাচ্ছে; আর কথাটি এমনভাবে রাখা হয়েছে যেন দৃশ্যটিতে অন্য কেউ এসে ঢুকে পড়ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Cold, Then Warm, Then Clean",
          "bn": "শীতল, তারপর উষ্ণ, তারপর নির্মল"
        },
        "p": [
          {
            "en": "There are three drinks in this surah and they are not the same. 76:5 mixes the cup of the righteous with kafur, camphor, which cools; 76:17 mixes it with zanjabil, ginger, which warms; Ibn Kathir notes the balance between the two. 76:18 names the spring the second comes from: Salsabil, so called, Mujahid says, for how easily and how strongly it runs.",
            "bn": "এই সূরায় তিনটি পানীয় আছে, আর সেগুলো এক নয়। 76:5 আয়াতে নেককারদের পানপাত্রে মেশানো হয় 'কাফূর' অর্থাৎ কর্পূর, যা শীতল করে; 76:17 আয়াতে মেশানো হয় 'যানজাবীল' অর্থাৎ আদা, যা উষ্ণ করে; ইবনে কাসীর দুটির মধ্যকার ভারসাম্যটি লক্ষ করান। 76:18 আয়াত দ্বিতীয়টির ঝর্ণার নাম বলে: সালসাবীল — মুজাহিদ বলেন, এই নাম এর প্রবাহের সহজতা ও তীব্রতার কারণেই।"
          },
          {
            "en": "The third is different in kind. 76:21 ends: wa saqahum rabbuhum sharaban tahura — and their Lord gave them a purifying drink to drink. No servant carries this one, and the Giver is named. Nor does tahur describe a flavour: Ibn Kathir explains that it cleanses their insides of envy, rancour, hatred and whatever ugliness of character was left in them.",
            "bn": "তৃতীয়টি জাতেই আলাদা। 76:21 আয়াত শেষ হয়: 'ওয়া সাকাহুম রাব্বুহুম শারাবান তাহূরা' — আর তাদের রব তাদের পান করালেন পবিত্রকারী এক পানীয়। এটি কোনো সেবক বয়ে আনে না, আর দাতার নামও বলা আছে। 'তাহূর' কোনো স্বাদেরও বর্ণনা নয়: ইবনে কাসীর ব্যাখ্যা করেন, এটি তাদের ভেতরটিকে পরিষ্কার করে হিংসা, বিদ্বেষ, ঘৃণা আর চরিত্রের যা কিছু কদর্যতা বাকি ছিল সব থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver Bracelets and a Word of Thanks",
          "bn": "রুপার কঙ্কণ ও কৃতজ্ঞতার একটি শব্দ"
        },
        "p": [
          {
            "en": "76:21 dresses them in green sundus and istabraq — fine silk and heavy brocade — and adorns them with bracelets of silver. Ibn Kathir notes that this is the description given of al-abrar, the righteous, while 22:23 gives bracelets of gold and pearl. The passage holds its own register throughout: silver vessels, silver cups, silver bracelets, all of one piece.",
            "bn": "76:21 আয়াত তাদের পরায় সবুজ 'সুনদুস' ও 'ইস্তাবরাক' — সূক্ষ্ম রেশম ও ভারী রেশম — আর সাজায় রুপার কঙ্কণে। ইবনে কাসীর লক্ষ করান, এটি 'আল-আবরার' অর্থাৎ নেককারদের বর্ণনা, অন্যদিকে 22:23 আয়াতে দেওয়া হয়েছে সোনা ও মুক্তার কঙ্কণ। অনুচ্ছেদটি শুরু থেকে শেষ পর্যন্ত নিজের সুরটি ধরে রাখে: রুপার পাত্র, রুপার পানপাত্র, রুপার কঙ্কণ — সবই এক সুতোয় গাঁথা।"
          },
          {
            "en": "The last word is the one to carry away. Sa'y is effort, the work of walking and striving; mashkur is its passive participle, thanked. The people who told the poor they wanted no thanks are thanked by Allah for what they did. If you are looking for something to do with this passage, 76:8 and 76:9 are the instruction, and all the rest of it is the answer.",
            "bn": "সঙ্গে করে নিয়ে যাওয়ার মতো শব্দটি একেবারে শেষে। 'সা'ই' মানে প্রচেষ্টা, হেঁটে চলা ও পরিশ্রম করার কাজ; 'মাশকূর' তারই কর্মবাচ্য বিশেষণ — যার কৃতজ্ঞতা জানানো হয়েছে। যারা দরিদ্রদের বলেছিল তারা কোনো কৃতজ্ঞতা চায় না, আল্লাহ তাদের কাজের জন্য তাদেরই কৃতজ্ঞতা জানান। এই অনুচ্ছেদটি নিয়ে করার মতো কিছু যদি খোঁজেন, তবে 76:8 ও 76:9 আয়াতই নির্দেশ, আর বাকি সবটুকু তার জবাব।"
          }
        ]
      }
    ]
  }
});
