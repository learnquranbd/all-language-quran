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
  },
  "76:25": {
    "sections": [
      {
        "h": {
          "en": "After the Heavy Command",
          "bn": "ভারী নির্দেশের ঠিক পরে"
        },
        "p": [
          {
            "en": "The surah has just finished describing the garden, the silver bracelets and the purifying drink, and the word of thanks for an effort accepted. Then it turns to one man. In 76:23 Allah reminds His Messenger ﷺ that it is He who sent the Qur'an down to him in stages. In 76:24 come two commands: be patient for the decision of your Lord, and do not obey a sinner or an ungrateful one among them. This verse follows, joined by a simple and: wa-dhkur, and mention.",
            "bn": "সূরাটি এইমাত্র জান্নাতের বর্ণনা শেষ করেছে: রুপার কঙ্কণ, পবিত্র পানীয়, আর কবুল হওয়া চেষ্টার জন্য কৃতজ্ঞতার কথা। এবার কথা ফেরে একজন মানুষের দিকে। ৭৬:২৩ আয়াতে আল্লাহ তাঁর রাসূল ﷺ-কে মনে করিয়ে দেন, ধাপে ধাপে কুরআন তিনিই তাঁর উপর নাজিল করেছেন। ৭৬:২৪ আয়াতে আসে দুটি নির্দেশ: রবের ফয়সালার জন্য ধৈর্য ধরুন, আর তাদের মধ্যে কোনো পাপাচারী বা অকৃতজ্ঞের আনুগত্য করবেন না। এরপর আমাদের আয়াত, জোড়া লেগেছে ছোট্ট একটি 'ওয়া' দিয়ে: ওয়াযকুর, আর স্মরণ করুন।"
          },
          {
            "en": "The Muyassar reads the two verses as one instruction. Be patient with your Lord's decree of what happens and accept it, it says, and carry on with His religious ruling; do not obey anyone among the idolaters who is sunk in his desires or extreme in disbelief and misguidance; and keep up the remembrance of your Lord's name and calling on Him at the start of the day and at its end. In that reading, the verse is the third part of one answer to pressure, not a separate topic.",
            "bn": "মুয়াসসার দুটি আয়াতকে পড়ে একটিমাত্র নির্দেশ হিসেবে। তার ভাষ্যে: যা ঘটে, রবের সেই তাকদীরি ফয়সালায় ধৈর্য ধরুন আর তা মেনে নিন; তাঁর দ্বীনি বিধানের উপর চলতে থাকুন। মুশরিকদের মধ্যে যে প্রবৃত্তিতে ডুবে আছে, বা কুফর ও গোমরাহিতে সীমা ছাড়িয়েছে, তার কথা মানবেন না। আর দিনের শুরুতে ও শেষে নিয়মিত রবের নামের জিকির ও তাঁর কাছে দোয়া চালিয়ে যান। এ পাঠে আয়াতটি আলাদা কোনো প্রসঙ্গ নয়। চাপের মুখে দেওয়া একই জবাবের তৃতীয় অংশ।"
          },
          {
            "en": "Ibn Kathir glosses the patience as: just as you have been honoured by what was revealed to you, be patient with His decree and know that He will manage your affairs well. Ma'arif al-Qur'an says the remembrance and worship that follow will serve as a remedy for the persecution. The sinner and the ungrateful in 76:24 are the Prophet's opponents in that setting. The verses describe them as the text describes them, and license nothing against any living person or community.",
            "bn": "ধৈর্যের ব্যাখ্যায় ইবন কাসীর বলেন: আপনার উপর যা নাজিল হয়েছে তা দিয়ে যেমন আপনাকে সম্মানিত করা হয়েছে, তেমনি তাঁর ফয়সালায় ধৈর্য ধরুন, আর জেনে রাখুন তিনি আপনার কাজ সুন্দরভাবে সামলে দেবেন। মাআরিফুল কুরআন বলে, এরপর যে জিকির আর ইবাদতের কথা আসে, তা নির্যাতনের ওষুধ হয়ে কাজ করবে। ৭৬:২৪ আয়াতের পাপাচারী ও অকৃতজ্ঞ হলো সেই প্রেক্ষাপটে নবী ﷺ-এর বিরোধীরা। আয়াতগুলো তাদের সেভাবেই বর্ণনা করে যেভাবে পাঠে আছে। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এগুলো দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Edges of Daylight",
          "bn": "দিনের আলোর দুই কিনারা"
        },
        "p": [
          {
            "en": "The verse names its times with two words, bukratan and asilan, and the commentators gloss them by the edges of the day rather than by any hour. Ibn Kathir, in the Arabic, writes only: that is, the first part of the day and its last. The abridged English of his commentary says the same, at the beginning of the day and at its end. As-Sa'di uses the identical pair of phrases, and so does the Muyassar. Morning and evening here mean the day's two borders.",
            "bn": "আয়াতটি সময় বলে দেয় দুটি শব্দে: বুকরাতান ও আসীলান। তাফসীরকারেরা এগুলোর ব্যাখ্যা দেন দিনের প্রান্ত দিয়ে, ঘড়ির কোনো নির্দিষ্ট ঘণ্টা দিয়ে নয়। আরবি তাফসীরে ইবন কাসীর লেখেন শুধু এটুকু: অর্থাৎ দিনের প্রথম ভাগ আর শেষ ভাগ। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি রূপও একই কথা বলে, দিনের শুরুতে আর শেষে। সা'দী ঠিক এই জোড়া শব্দই ব্যবহার করেন, মুয়াসসারও তাই। এখানে সকাল আর সন্ধ্যা মানে দিনের দুই সীমানা।"
          },
          {
            "en": "Al-Qurtubi pauses on the second word. The plural of asil, he says, is asa'il and also usul, on the pattern of safa'in and sufun for ships, and asa'il is a plural of a plural. He quotes two lines of poetry to show both forms in use, one of them about a house whose people the poet honours and in whose shade he sits in the late afternoons. Then he says the subject was covered in full at the close of Surat al-A'raf, and does not repeat it here.",
            "bn": "কুরতুবী দ্বিতীয় শব্দটিতে একটু থামেন। তিনি বলেন, আসীলের বহুবচন আসাইল, আবার উসুলও হয়, যেমন জাহাজ অর্থে সাফাইন ও সুফুন। আর আসাইল হলো বহুবচনের বহুবচন। দুটি রূপই যে চালু ছিল, তা দেখাতে তিনি কবিতার দুটি পঙ্‌ক্তি তুলে ধরেন। তার একটিতে কবি এমন এক ঘরের কথা বলেন, যার লোকদের তিনি সম্মান করেন আর যার ছায়ায় বিকেলবেলা বসে থাকেন। তারপর তিনি জানান, সূরা আল-আ'রাফের শেষে বিষয়টি পুরোপুরি আলোচনা হয়ে গেছে, তাই এখানে আর পুনরাবৃত্তি করেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Prayers, by Whose Count",
          "bn": "কোন নামাজ, কার হিসাবে"
        },
        "p": [
          {
            "en": "Two of the commentators read the mention as prayer and attach it to particular prayers. At-Tabari reports from Ibn Zayd, through Yunus and Ibn Wahb: bukratan is the morning prayer, salat as-subh, which is Fajr; and asilan is the Zuhr prayer, which Ibn Zayd calls the asil prayer. In his reading each edge of the day holds one prayer. At-Tabari's own words on this verse are not in the passage fetched; what it carries for 76:25 is this report.",
            "bn": "তাফসীরকারদের মধ্যে দুজন এই স্মরণকে নামাজ হিসেবে পড়েন এবং নির্দিষ্ট নামাজের সঙ্গে মিলিয়ে দেন। তাবারী ইউনুস ও ইবন ওয়াহবের সূত্রে ইবন যায়দ থেকে বর্ণনা করেন: বুকরাতান মানে সকালের নামাজ, সালাতুস সুবহ, অর্থাৎ ফজর। আর আসীলান মানে যোহরের নামাজ, ইবন যায়দ যাকে বলেন আসীলের নামাজ। তাঁর পাঠে দিনের প্রতিটি প্রান্তে একটি করে নামাজ। এ আয়াত নিয়ে তাবারীর নিজের কোনো ব্যাখ্যা পাওয়া অংশে নেই; ৭৬:২৫ সম্পর্কে সেখানে আছে এই বর্ণনাটুকুই।"
          },
          {
            "en": "Al-Qurtubi opens with a paraphrase: that is, pray to your Lord at the start of the day and at its end. At its start, he says, is the morning prayer; at its end, the Zuhr and the 'Asr. So the two agree on bukratan, the dawn prayer, and differ on asilan. Ibn Zayd names one prayer for it, Zuhr; al-Qurtubi names two, Zuhr and 'Asr. Both readings are reported here as they stand, and the article does not choose between them.",
            "bn": "কুরতুবী শুরু করেন এক বাক্যের ব্যাখ্যা দিয়ে: অর্থাৎ দিনের শুরুতে আর শেষে আপনার রবের জন্য নামাজ পড়ুন। তিনি বলেন, শুরুতে আছে সকালের নামাজ, আর শেষে যোহর ও আসর। তাহলে বুকরাতান নিয়ে দুজন একমত, এটা ভোরের নামাজ। মতভেদ আসীলান নিয়ে। ইবন যায়দ এর জন্য একটি নামাজের নাম বলেন, যোহর। কুরতুবী বলেন দুটি নামাজের কথা, যোহর ও আসর। দুটি মতই এখানে যেমন আছে তেমন রাখা হলো, কোনোটিকে বেছে নেওয়া হচ্ছে না।"
          },
          {
            "en": "Al-Qurtubi carries the scheme into the next verse. And of the night prostrate to Him means Maghrib and the later 'Isha; and glorify Him a long night means voluntary prayer by night. He closes with the words: Ibn Habib said it, and later adds that Ibn Habib's view is good. Read across the two verses, his scheme places the five prayers and the night's voluntary prayer. Ibn Zayd, as at-Tabari reports him, reads the night verse another way, taken up below.",
            "bn": "কুরতুবী এই হিসাব পরের আয়াতেও টেনে নেন। 'আর রাতের কিছু অংশে তাঁর জন্য সিজদা করুন' মানে মাগরিব ও শেষের ইশা। 'আর রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন' মানে রাতের নফল নামাজ। শেষে তিনি লেখেন: এটি ইবন হাবীবের কথা। পরে যোগ করেন, ইবন হাবীবের মতটি উত্তম। দুই আয়াত মিলিয়ে পড়লে তাঁর হিসাবে পাঁচ ওয়াক্ত নামাজ আর রাতের নফল, সবই জায়গা পেয়ে যায়। তাবারীর বর্ণনায় ইবন যায়দ রাতের আয়াতটি পড়েন অন্যভাবে, সে কথা সামনে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Prayer, Remembrance, or Both",
          "bn": "নামাজ, জিকির, নাকি দুটোই"
        },
        "p": [
          {
            "en": "Not every commentator makes the mention a prayer. The Muyassar says: keep up the remembrance of your Lord's name and calling on Him, at the start of the day and its end, with no prayer named. As-Sa'di holds the two together. After glossing the times, he says that into the command enter the prescribed prayers and the voluntary prayers that follow them, and also remembrance, tasbih, tahlil and takbir at those times: glorifying Allah, declaring there is no god but He, and proclaiming Him greatest.",
            "bn": "সব তাফসীরকার এই স্মরণকে নামাজ বানান না। মুয়াসসার বলে: দিনের শুরুতে ও শেষে নিয়মিত রবের নামের জিকির আর তাঁর কাছে দোয়া চালিয়ে যান। কোনো নামাজের নাম সেখানে নেই। সা'দী দুটি দিককেই একসঙ্গে ধরেন। সময়ের ব্যাখ্যা দেওয়ার পর তিনি বলেন, এই নির্দেশের ভেতরে পড়ে ফরজ নামাজ আর তার সঙ্গের নফল, আর সেই সময়গুলোর জিকির, তাসবীহ, তাহলীল ও তাকবীর। অর্থাৎ সুবহানাল্লাহ বলা, আল্লাহ ছাড়া কোনো ইলাহ নেই বলা, আর আল্লাহু আকবার বলা।"
          },
          {
            "en": "Al-Qurtubi's notes on the next verse record the same division. Ibn Abbas and Sufyan, he reports, said that every tasbih in the Qur'an is prayer. Another view, given without a name, says it is remembrance in general, whether inside prayer or outside it. Ma'arif al-Qur'an has both in one line: the Prophet ﷺ is commanded to pronounce the name of Allah and to worship Him day and night. Ibn Kathir, for his part, names no act at all for this verse, only the two times.",
            "bn": "পরের আয়াতের আলোচনায় কুরতুবী একই ভাগাভাগি তুলে ধরেন। তাঁর বর্ণনায় ইবন আব্বাস (রাঃ) ও সুফিয়ান বলেছেন, কুরআনে যেখানেই তাসবীহ, সেখানেই তা নামাজ। আরেকটি মত, কারও নাম ছাড়া, বলে এটা সাধারণ জিকির, নামাজের ভেতরে হোক বা বাইরে। মাআরিফুল কুরআন এক বাক্যেই দুটো রাখে: নবী ﷺ-কে আদেশ দেওয়া হয়েছে আল্লাহর নাম উচ্চারণ করতে আর দিনরাত তাঁর ইবাদত করতে। ইবন কাসীর এ আয়াতে কোনো আমলের নামই বলেন না, শুধু দুটি সময়ের কথা বলেন।"
          },
          {
            "en": "So the readings run along a line. For Ibn Zayd and al-Qurtubi the mention is set prayer at set times. For the Muyassar it is remembrance and supplication. As-Sa'di and Ma'arif al-Qur'an include both. None of these fetched texts says the other readings are wrong, and nothing in them forces a choice. The wording itself is the mention of the name, ism, of your Lord, the same rabbika whose decision the Prophet ﷺ was told just a verse earlier to wait for with patience.",
            "bn": "তাহলে ব্যাখ্যাগুলো সাজানো যায় এক সারিতে। ইবন যায়দ ও কুরতুবীর কাছে এ স্মরণ মানে নির্দিষ্ট সময়ের নির্দিষ্ট নামাজ। মুয়াসসারের কাছে জিকির আর দোয়া। সা'দী ও মাআরিফুল কুরআন দুটোকেই ধরেন। যে পাঠগুলো হাতে আছে, তার কোনোটিই অন্য মতকে ভুল বলে না, বেছে নিতেও বাধ্য করে না। আয়াতের নিজের শব্দ হলো রবের নাম, ইসম, স্মরণ করা। এ সেই রাব্বিকা, যাঁর ফয়সালার জন্য ঠিক আগের আয়াতে নবী ﷺ-কে ধৈর্য ধরে অপেক্ষা করতে বলা হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Prostration Through the Night",
          "bn": "রাতভর সিজদার আহ্বান"
        },
        "p": [
          {
            "en": "The next verse, 76:26, completes the day: and during the night prostrate to Him, and glorify Him a long night. At-Tabari's gloss is direct. Prostrate to Him in your prayer, he says, and glorify Him a long night, meaning most of the night, as Allah says elsewhere, and he quotes 73:2 to 73:4: stand the night except a little, half of it, or reduce from it a little, or add to it. He notes that the people of interpretation said the same, and reports Ibn Abbas: it means the prayer and the tasbih.",
            "bn": "পরের আয়াত, ৭৬:২৬, দিনটাকে পূর্ণ করে: আর রাতের কিছু অংশে তাঁর জন্য সিজদা করুন, আর রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন। তাবারীর ব্যাখ্যা সরাসরি। তিনি বলেন, নামাজে তাঁর জন্য সিজদা করুন, আর দীর্ঘ রাত তাসবীহ করুন, মানে রাতের বেশির ভাগ সময়। এর সমর্থনে তিনি ৭৩:২ থেকে ৭৩:৪ আয়াত তুলে আনেন: অল্প কিছু অংশ বাদে রাতে দাঁড়ান, অর্ধেক রাত, বা তার চেয়ে একটু কম, বা একটু বেশি। তিনি জানান, ব্যাখ্যাকারেরা এমনটাই বলেছেন, আর ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: এর মানে নামাজ ও তাসবীহ।"
          },
          {
            "en": "Ibn Kathir, in the abridged English, sets the night verse beside 17:79: and in some parts of the night offer the prayer with it as an additional prayer for you; it may be that your Lord will raise you to a praised station. He also sets it beside 73:1 to 73:4, the address to the man wrapped in garments, told to stand the night and recite the Qur'an in measured tones. Both commentators, then, read the night verse alongside passages spoken to the Prophet ﷺ about his own night prayer.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি রূপ রাতের আয়াতটিকে রাখে ১৭:৭৯ আয়াতের পাশে: রাতের কিছু অংশে কুরআন নিয়ে নামাজে দাঁড়ান, এটা আপনার জন্য অতিরিক্ত। আশা করা যায় আপনার রব আপনাকে প্রশংসিত স্থানে পৌঁছে দেবেন। তিনি একে রাখেন ৭৩:১ থেকে ৭৩:৪ আয়াতের পাশেও, যেখানে চাদর জড়ানো মানুষটিকে রাতে দাঁড়াতে আর থেমে থেমে কুরআন পড়তে বলা হয়েছে। দুই তাফসীরকারই তাহলে রাতের আয়াতটি পড়েন এমন সব আয়াতের সঙ্গে মিলিয়ে, যেগুলো নবী ﷺ-কে তাঁর নিজের রাতের নামাজ নিয়ে বলা।"
          }
        ]
      },
      {
        "h": {
          "en": "From Duty to Voluntary",
          "bn": "ফরজ থেকে নফলের পথে"
        },
        "p": [
          {
            "en": "Ibn Zayd, in at-Tabari's report, says of the night verse: this was the first thing to be made obligatory. He recited 73:1 to 73:3, then 73:20: your Lord knows that you stand nearly two-thirds of the night, and half of it, and a third of it, as far as so recite what is easy of the Qur'an. Then he said: this was removed from the Messenger of Allah ﷺ and from the people, and He made it voluntary, saying in 17:79, as an additional prayer for you.",
            "bn": "তাবারীর বর্ণনায় ইবন যায়দ রাতের আয়াতটি সম্পর্কে বলেন: এটাই ছিল সবার আগে ফরজ হওয়া বিধান। তিনি তিলাওয়াত করেন ৭৩:১ থেকে ৭৩:৩ আয়াত, তারপর ৭৩:২০ আয়াত: আপনার রব জানেন, আপনি রাতের প্রায় দুই-তৃতীয়াংশ, কখনো অর্ধেক, কখনো এক-তৃতীয়াংশ দাঁড়িয়ে থাকেন। পড়েন 'কাজেই কুরআনের যতটুকু সহজ ততটুকু পড়ো' পর্যন্ত। তারপর বলেন: আল্লাহর রাসূল ﷺ ও মানুষের উপর থেকে এটা তুলে নেওয়া হলো, আর তিনি একে নফল করে দিলেন। এর দলিল ১৭:৭৯ আয়াত: আপনার জন্য অতিরিক্ত।"
          },
          {
            "en": "Al-Qurtubi lists the views on glorify Him a long night without settling all of them. Ibn Zayd and others say it was abrogated by the five daily prayers. Another view says it is a recommendation. Another says it is particular to the Prophet ﷺ. Al-Qurtubi refers the reader to his discussion in Surat al-Muzzammil, and judges Ibn Habib's reading, voluntary prayer by night, to be good. These are attributed positions; the article itself makes no ruling on the night prayer's status.",
            "bn": "'রাতের দীর্ঘ সময় তাঁর তাসবীহ করুন' নিয়ে কুরতুবী কয়েকটি মত তুলে ধরেন, সবগুলোর নিষ্পত্তি করেন না। ইবন যায়দ ও অন্যরা বলেন, পাঁচ ওয়াক্ত নামাজ এসে এ বিধান রহিত করেছে। আরেক মত বলে, এটা মুস্তাহাব পর্যায়ের নির্দেশ। আরেক মতে, এটা শুধু নবী ﷺ-এর জন্য নির্দিষ্ট। কুরতুবী পাঠককে সূরা আল-মুযযাম্মিলের আলোচনায় ফেরত পাঠান, আর ইবন হাবীবের ব্যাখ্যা, অর্থাৎ রাতের নফল নামাজ, উত্তম বলে মত দেন। এগুলো যার যার নামে বলা মত। রাতের নামাজের বিধান নিয়ে এ লেখা নিজে কোনো রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Spoken First to Him",
          "bn": "কথাটা প্রথমে তাঁকেই বলা"
        },
        "p": [
          {
            "en": "The commentators read the address as the Prophet's own. Ibn Kathir frames the passage as Allah reminding His Messenger ﷺ of the Qur'an and commanding him to be patient and to remember. Ma'arif al-Qur'an lists the revelation, and then this remembrance and night worship, among the special favours given to the Prophet ﷺ, and calls the remembrance a remedy for what his opponents were doing to him. None of the fetched commentaries attaches a hadith to this verse or gives an occasion of revelation for it, and this article cites none.",
            "bn": "তাফসীরকারেরা সম্বোধনটিকে নবী ﷺ-এর নিজের প্রতি বলেই পড়েন। ইবন কাসীর অংশটির পরিচয় দেন এভাবে: আল্লাহ তাঁর রাসূল ﷺ-কে কুরআনের নিয়ামতের কথা মনে করিয়ে দিচ্ছেন, ধৈর্য ধরতে আর স্মরণ করতে বলছেন। মাআরিফুল কুরআন ওহী নাজিলকে, তারপর এই জিকির ও রাতের ইবাদতকে, নবী ﷺ-কে দেওয়া বিশেষ নিয়ামতের তালিকায় রাখে। বিরোধীরা তাঁর সঙ্গে যা করছিল, এ জিকিরকে বলে তারই ওষুধ। হাতে থাকা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস জোড়ে না, নাজিলের কোনো উপলক্ষও বলে না। এ লেখাও তাই কোনো হাদীস উদ্ধৃত করছে না।"
          },
          {
            "en": "How far it reaches beyond him, they do not say with a single voice. In Ibn Zayd's report the night duty was lifted from the Messenger ﷺ and from the people, so in his account the people had carried it too. Al-Qurtubi and as-Sa'di gloss the day verse by the prescribed prayers, acts that are not his alone, though neither says here that the command itself passes to others. Al-Qurtubi also records the view that the long night glorification is particular to the Prophet ﷺ. The article goes no further than they do.",
            "bn": "তাঁর বাইরে অন্যদের পর্যন্ত কথাটা কতদূর যায়, এ নিয়ে তাঁরা এক সুরে কথা বলেন না। ইবন যায়দের বর্ণনায় রাতের দায়িত্ব রাসূল ﷺ ও মানুষ, দুই পক্ষের উপর থেকেই তুলে নেওয়া হয়েছিল। তাঁর বর্ণনা অনুযায়ী তাহলে মানুষও সে দায়িত্ব বহন করত। কুরতুবী ও সা'দী দিনের আয়াতটি ব্যাখ্যা করেন ফরজ নামাজ দিয়ে, যা শুধু তাঁর একার আমল নয়। তবে এখানে তাঁদের কেউই বলেন না যে নির্দেশটি নিজেই অন্যদের উপর বর্তায়। কুরতুবী এ মতও উল্লেখ করেন যে রাতের দীর্ঘ তাসবীহ শুধু নবী ﷺ-এর জন্য নির্দিষ্ট। তাঁরা যেখানে থামেন, এ লেখাও সেখানেই থামে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name at Both Borders",
          "bn": "দুই সীমানায় রবের নাম"
        },
        "p": [
          {
            "en": "Notice what the five words leave out. They promise no quick relief and give no instruction about the opponents; that was settled in 76:24. They give an order of life instead: the revelation first, then patience, then refusing to obey, then the Lord's name at the day's two borders and prostration in the night. The Muyassar's verb for it is keep up, dawim, which is not a single act but a habit. Ma'arif al-Qur'an calls the habit a remedy, given to a man under pressure.",
            "bn": "লক্ষ করুন, পাঁচটি শব্দ কী বাদ রাখে। দ্রুত মুক্তির কোনো প্রতিশ্রুতি নেই, বিরোধীদের নিয়েও কোনো নির্দেশ নেই, সে কথা ৭৬:২৪ আয়াতেই মীমাংসা হয়ে গেছে। তার বদলে আসে জীবনের একটা ক্রম: আগে ওহী, তারপর ধৈর্য, তারপর আনুগত্যে অস্বীকৃতি, তারপর দিনের দুই সীমানায় রবের নাম আর রাতে সিজদা। মুয়াসসার এর জন্য যে ক্রিয়া বেছে নেয় তা হলো দাওয়িম, নিয়মিত চালিয়ে যাও। এ কোনো এক দফার কাজ নয়, অভ্যাস। মাআরিফুল কুরআন এই অভ্যাসকে বলে ওষুধ, চাপের মধ্যে থাকা একজন মানুষকে দেওয়া।"
          },
          {
            "en": "Whether the mention is Fajr at dawn with Zuhr alone or Zuhr and 'Asr at the day's end, or remembrance and supplication, or all of these, every reading fetched here puts the name of the Lord at the edges of the day, where the day is opened and closed. Without going past the commentators, a reader can at least look at the edges of his or her own day, and ask what is placed there, and whose name is spoken first when the morning begins and last when the light goes.",
            "bn": "এ স্মরণ ভোরের ফজর আর দিনশেষে শুধু যোহর হোক, বা যোহর ও আসর দুটোই হোক, বা জিকির ও দোয়া হোক, কিংবা সবগুলো একসঙ্গে, হাতে থাকা প্রতিটি ব্যাখ্যাই রবের নামকে রাখে দিনের কিনারায়, যেখানে দিন খোলে আর বন্ধ হয়। তাফসীরকারদের ছাড়িয়ে না গিয়েও একজন পাঠক অন্তত নিজের দিনের কিনারাগুলোর দিকে তাকাতে পারেন। সেখানে কী রাখা আছে? সকাল শুরু হলে প্রথম কার নাম মুখে আসে, আর আলো নিভে এলে শেষ নামটি কার?"
          }
        ]
      }
    ]
  }
});
