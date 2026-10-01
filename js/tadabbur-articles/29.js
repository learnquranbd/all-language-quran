/**
 * Tadabbur long-form articles — surah 29.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "29:2-3": {
    "sections": [
      {
        "h": {
          "en": "A Question at the Gate",
          "bn": "প্রবেশপথে একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Ankabut opens with detached letters and then a question: do people reckon that they will be left alone upon saying we believe, and not be tried? The Arabic question here is not a request for information; it is the interrogative of rebuke, dismantling an assumption by voicing it aloud. The assumption named is one every generation remakes in its own way — that declaring faith is the finish line, when the Quran presents it as the starting point.",
            "bn": "সূরা আল-আনকাবুত শুরু হয় বিচ্ছিন্ন হরফ দিয়ে, তারপর একটি প্রশ্ন: মানুষ কি মনে করে, 'আমরা ঈমান এনেছি' বললেই তাদের ছেড়ে দেওয়া হবে, আর পরীক্ষা করা হবে না? এখানকার আরবি প্রশ্নটি তথ্য চাওয়ার প্রশ্ন নয়; এটি ভর্ৎসনাসূচক জিজ্ঞাসা, যা একটি ধারণাকে সরবে উচ্চারণ করেই ভেঙে দেয়। যে ধারণার নাম নেওয়া হলো তা প্রতিটি প্রজন্ম নিজের মতো করে নতুন করে বানায় — ঈমানের ঘোষণাই বুঝি শেষ সীমা; অথচ কুরআন একে উপস্থাপন করে যাত্রাবিন্দু হিসেবে।"
          },
          {
            "en": "Most commentators place these opening verses amid the persecution of Makkah, when saying we believe could cost a person safety, livelihood, and family peace. The early believers heard this question while some of them were being tortured for the very claim the question quotes. The verses did not promise them relief first; they reframed the pain: what you are undergoing is not evidence of abandonment, but the examination that the claim itself invites.",
            "bn": "অধিকাংশ মুফাসসির এই সূচনা-আয়াতগুলোকে মক্কার নিপীড়নের প্রেক্ষাপটে রাখেন — যখন 'আমরা ঈমান এনেছি' বলার মূল্য হতে পারত নিরাপত্তা, জীবিকা ও পরিবারের শান্তি। প্রথম যুগের মুমিনরা এই প্রশ্ন শুনেছিলেন এমন সময়ে, যখন তাদের কেউ কেউ প্রশ্নে উদ্ধৃত সেই দাবিটির জন্যই নির্যাতিত হচ্ছিলেন। আয়াতগুলো তাদের আগে স্বস্তির প্রতিশ্রুতি দেয়নি; দিয়েছে ব্যথাটিকে নতুন কাঠামো: তোমরা যার ভেতর দিয়ে যাচ্ছ তা পরিত্যক্ত হওয়ার প্রমাণ নয়, বরং সেই পরীক্ষা, যে পরীক্ষাকে দাবিটি নিজেই ডেকে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fitnah, the Smelter's Word",
          "bn": "ফিতনা — স্বর্ণকারের শব্দ"
        },
        "p": [
          {
            "en": "The verb is la yuftanun, they will not be tried, from the root of fitnah. The scholars of language record its origin in the smelting of gold: fatana adh-dhahab is to put the ore into fire so that the pure metal separates from the dross. The Quranic word for trial is therefore not primarily about pain; it is about disclosure. Fire does not make the gold or the dross — it makes visible which is which.",
            "bn": "ক্রিয়াপদটি লা ইউফতানূন — তাদের পরীক্ষা করা হবে না — ফিতনা মূল থেকে। ভাষার আলিমগণ এর উৎস লিপিবদ্ধ করেছেন সোনা গলানোর কাজে: ফাতানায-যাহাব মানে আকরিককে আগুনে ফেলা, যাতে খাঁটি ধাতু খাদ থেকে আলাদা হয়ে যায়। কাজেই পরীক্ষার কুরআনী শব্দটি মূলত ব্যথার কথা নয়; প্রকাশের কথা। আগুন সোনাও বানায় না, খাদও বানায় না — কেবল দৃশ্যমান করে দেয় কোনটি কী।"
          },
          {
            "en": "That origin controls how the question should be read. The trial does not manufacture believers and liars; it reveals the ones already there — to themselves before anyone else. A claim of faith costs one sentence. Its truth is a property that only resistance can display: the pull of fear, loss, ridicule, or ease. The verse is less a threat than a definition. Untested belief is simply belief whose quality no one, including its owner, yet knows.",
            "bn": "এই উৎসই নির্ধারণ করে প্রশ্নটি কীভাবে পড়তে হবে। পরীক্ষা মুমিন ও মিথ্যাবাদী তৈরি করে না; যারা আগে থেকেই আছে তাদের প্রকাশ করে দেয় — সবার আগে তাদের নিজেদের কাছেই। ঈমানের দাবির খরচ একটি মাত্র বাক্য। কিন্তু তার সত্যতা এমন এক গুণ, যা কেবল প্রতিরোধের মুখেই ধরা পড়ে: ভয়ের টান, ক্ষতির টান, উপহাসের টান, কিংবা আরামের টান। আয়াতটি হুমকির চেয়ে বেশি একটি সংজ্ঞা। অপরীক্ষিত ঈমান মানে কেবল এমন ঈমান, যার মান এখনো কেউ জানে না — এমনকি তার মালিকও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Before Were Tried",
          "bn": "পূর্ববর্তীদেরও পরীক্ষা হয়েছিল"
        },
        "p": [
          {
            "en": "29:3 grounds the rule in history — and We certainly tried those who were before them. 2:214 makes the same point in fuller color: do you reckon you will enter the Garden while there has not yet come to you the like of what came to those who passed before you, touched by hardship and adversity and shaken until the messenger and those who believed with him said, when is the help of Allah? The road has always run through the fire.",
            "bn": "29:3 আয়াত নিয়মটিকে ইতিহাসে প্রোথিত করে — আর আমি অবশ্যই তাদের পূর্ববর্তীদের পরীক্ষা করেছি। 2:214 আয়াত একই কথা আরও পূর্ণ রঙে বলে: তোমরা কি মনে করো জান্নাতে ঢুকে পড়বে, অথচ তোমাদের আগে যারা গত হয়েছে তাদের মতো অবস্থা এখনো তোমাদের ওপর আসেনি — দুঃখ-দারিদ্র্য ও কষ্ট তাদের স্পর্শ করেছিল, আর তারা এমনভাবে প্রকম্পিত হয়েছিল যে রাসূল ও তাঁর সঙ্গী মুমিনরা বলে উঠেছিলেন, আল্লাহর সাহায্য কবে? পথটি বরাবরই আগুনের ভেতর দিয়ে গেছে।"
          },
          {
            "en": "Al-Bukhari relates from Khabbab ibn al-Aratt (RA) that he complained to the Prophet ﷺ, who was reclining in the shade of the Ka'bah, and asked him to pray for help. The answer recounted the believers before: a man would be placed in a pit and sawn in two, or raked with iron combs down to bone and sinew, and none of it turned him from his religion — then came the promise that this affair would be completed, but you are hasty.",
            "bn": "আল-বুখারী খাব্বাব ইবনুল আরাত্ত (রাঃ) থেকে বর্ণনা করেন, তিনি কা'বার ছায়ায় হেলান দিয়ে থাকা নবী ﷺ-এর কাছে অভিযোগ জানিয়ে সাহায্যের দু'আ চাইলেন। উত্তরে এল আগের মুমিনদের বিবরণ: কাউকে গর্তে রেখে করাত দিয়ে দুই টুকরো করা হতো, কাউকে লোহার চিরুনি দিয়ে আঁচড়ে হাড় ও পেশি পর্যন্ত ছাড়িয়ে ফেলা হতো — তবু এর কোনো কিছুই তাকে তার দ্বীন থেকে ফেরাতে পারত না। তারপর এল প্রতিশ্রুতি: এই দ্বীন পূর্ণতায় পৌঁছাবেই — কিন্তু তোমরা তাড়াহুড়ো করছ।"
          }
        ]
      },
      {
        "h": {
          "en": "So That Allah Knows",
          "bn": "যেন আল্লাহ জেনে নেন"
        },
        "p": [
          {
            "en": "The stated purpose reads strangely at first: that Allah may surely know those who were truthful, and surely know the liars. Allah's knowledge is eternal and complete — what can a test add? The mufassirun answer that this is knowledge of occurrence. Ibn Kathir explains it as knowledge of the thing actually done, upon which reward and punishment are justly based. The trial moves sincerity from the realm of what would have been into the realm of what was — witnessed, and recordable.",
            "bn": "ঘোষিত উদ্দেশ্যটি প্রথমে অদ্ভুত শোনায়: যেন আল্লাহ অবশ্যই জেনে নেন কারা সত্যবাদী, আর অবশ্যই জেনে নেন মিথ্যাবাদীদের। আল্লাহর জ্ঞান তো চিরন্তন ও পূর্ণাঙ্গ — পরীক্ষা তাতে কী যোগ করবে? মুফাসসিরগণ উত্তর দেন: এটি সংঘটনের জ্ঞান। ইবনে কাসীর ব্যাখ্যা করেন, এ হলো প্রকৃতপক্ষে সম্পাদিত কাজের জ্ঞান, যার ভিত্তিতেই পুরস্কার ও শাস্তি ন্যায্যভাবে প্রতিষ্ঠিত হয়। পরীক্ষা আন্তরিকতাকে 'যা হতে পারত'-এর জগৎ থেকে সরিয়ে আনে 'যা হয়েছে'-এর জগতে — প্রত্যক্ষিত ও নথিযোগ্য।"
          },
          {
            "en": "The verse's two objects deserve notice: the truthful and the liars, those who were sincere and those whose claim their conduct denied. Truthfulness here is not accuracy of speech but fidelity of person — the match between the words we believe and the behavior under pressure. Its opposite in this verse is not doubt but lying: a profession contradicted by a life. The test, then, is not an obstacle on the path of faith; in this surah it is the instrument that tells the two apart.",
            "bn": "আয়াতের দুটি কর্মপদ লক্ষ করার মতো: সত্যবাদীরা ও মিথ্যাবাদীরা — যারা আন্তরিক ছিল, আর যাদের দাবিকে তাদের আচরণই অস্বীকার করেছে। এখানে সত্যবাদিতা মানে কথার নির্ভুলতা নয়, ব্যক্তির বিশ্বস্ততা — 'আমরা ঈমান এনেছি' কথাটির সঙ্গে চাপের মুখের আচরণের মিল। এ আয়াতে এর বিপরীত শব্দ সংশয় নয়, মিথ্যা: এমন ঘোষণা, যাকে জীবনটাই খণ্ডন করে। তাহলে পরীক্ষা ঈমানের পথের কোনো প্রতিবন্ধক নয়; এই সূরায় এটিই সেই যন্ত্র, যা দুই দলকে আলাদা করে চেনায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Graded by Trial",
          "bn": "পরীক্ষা দিয়ে স্তর নির্ণয়"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Sa'd ibn Abi Waqqas (RA) — in a report he graded hasan sahih — that the Prophet ﷺ was asked which people are tried most severely, and answered: the prophets, then the next best and the next best; a man is tried according to his religion, and if there is firmness in his religion, his trial is made heavier. Trial in this teaching tracks rank, not wrath. The heaviest examinations were reserved for the best of creation.",
            "bn": "আত-তিরমিযী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে বর্ণনা করেন — যে বর্ণনাকে তিনি নিজে হাসান সহীহ বলেছেন — নবী ﷺ-কে জিজ্ঞেস করা হয়েছিল, কোন মানুষদের পরীক্ষা সবচেয়ে কঠিন হয়; তিনি উত্তর দেন: নবীগণ, তারপর যারা তাদের সবচেয়ে কাছাকাছি, তারপর তাদের কাছাকাছি; মানুষকে পরীক্ষা করা হয় তার দ্বীন অনুযায়ী — দ্বীনে দৃঢ়তা থাকলে তার পরীক্ষা ভারী করা হয়। এই শিক্ষায় পরীক্ষা মর্যাদার অনুগামী, ক্রোধের নয়। সবচেয়ে ভারী পরীক্ষাগুলো তোলা ছিল সৃষ্টির সেরা মানুষদের জন্যই।"
          },
          {
            "en": "Within the same surah, 29:10 describes the person who gets this wrong: when harmed in the cause of Allah, he treats the persecution of people as if it were the punishment of Allah, and gives way. Misreading a test as a rejection is itself a way of failing it. The believer's protection is the frame these verses build in advance: the test was expected, its purpose known, and the company of the tested — prophets and the truthful — remembered.",
            "bn": "একই সূরার ভেতরে 29:10 আয়াত সেই ব্যক্তির বিবরণ দেয়, যে এই হিসাবে ভুল করে: আল্লাহর পথে কষ্ট পেলে সে মানুষের নিপীড়নকে আল্লাহর শাস্তির মতো গণ্য করে এবং হাল ছেড়ে দেয়। পরীক্ষাকে প্রত্যাখ্যান বলে ভুল পড়াটাই পরীক্ষায় হারার একটি রূপ। মুমিনের সুরক্ষা হলো সেই কাঠামো, যা এই আয়াতগুলো আগেই গড়ে দেয়: পরীক্ষা প্রত্যাশিত ছিল, তার উদ্দেশ্য জানা ছিল, আর পরীক্ষিতদের সঙ্গ — নবীগণ ও সত্যবাদীরা — স্মরণে ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "From the Question to the Promise",
          "bn": "প্রশ্ন থেকে প্রতিশ্রুতিতে"
        },
        "p": [
          {
            "en": "The surah that opens by promising trials closes in 29:69 by promising guidance: those who strive in Us — We will surely guide them to Our paths, and indeed Allah is with the doers of good. The two ends belong together. The test at the gate is not the surah's last word about hardship; effort inside the trial becomes the very thing that draws further guidance. What begins as an examination is completed as a companionship.",
            "bn": "যে সূরা পরীক্ষার প্রতিশ্রুতি দিয়ে শুরু হয়, তা শেষ হয় 29:69 আয়াতে হিদায়াতের প্রতিশ্রুতি দিয়ে: যারা আমার পথে সংগ্রাম করে — আমি অবশ্যই তাদের আমার পথগুলোতে পরিচালিত করব, আর নিশ্চয়ই আল্লাহ সৎকর্মশীলদের সঙ্গে আছেন। দুই প্রান্ত একসঙ্গেই বসে। প্রবেশপথের পরীক্ষা কষ্ট বিষয়ে সূরার শেষ কথা নয়; পরীক্ষার ভেতরের প্রচেষ্টাই হয়ে ওঠে আরও হিদায়াত টেনে আনার উপায়। যা শুরু হয় পরীক্ষা হিসেবে, তা সম্পূর্ণ হয় সাহচর্য হিসেবে।"
          },
          {
            "en": "Lived plainly, this passage changes what a believer expects and how he interprets. Expect tests, so that their arrival confirms the Book rather than shaking it. Interpret pressure as the assaying named in 29:2 rather than as abandonment. And answer the only question actually being asked — not whether you can avoid the fire of testing, but what the fire finds when it reaches you. Sincerity is not claimed there; it is shown.",
            "bn": "সাদামাটাভাবে যাপন করলে এই অংশটি বদলে দেয় মুমিন কী প্রত্যাশা করে এবং কীভাবে ব্যাখ্যা করে। পরীক্ষা প্রত্যাশা করো — তাহলে তার আগমন কিতাবকে নাড়িয়ে না দিয়ে বরং সত্যায়িত করবে। চাপকে ব্যাখ্যা করো 29:2 আয়াতে নাম করা সেই যাচাই হিসেবে, পরিত্যাগ হিসেবে নয়। আর উত্তর দাও আসলে যে একটিমাত্র প্রশ্ন করা হচ্ছে তার — পরীক্ষার আগুন এড়াতে পারবে কি না তা নয়, বরং আগুন তোমার কাছে পৌঁছে কী খুঁজে পায়। আন্তরিকতা সেখানে দাবি করা হয় না; দেখানো হয়।"
          }
        ]
      }
    ]
  },
  "29:8": {
    "sections": [
      {
        "h": {
          "en": "Enjoined, Then Qualified",
          "bn": "আদেশ, তারপর শর্ত"
        },
        "p": [
          {
            "en": "Wa-wassayna al-insana bi-walidayhi husnan: and We have enjoined upon man goodness to his parents. Ibn Kathir reads the placement closely. The charge comes right after the call to hold to God's oneness, because a person's parents are the cause of his being in the world, the father through his spending and the mother through her tenderness. He sets the verse beside 17:23 and 17:24, where worshipping God alone and treating parents well are spoken together. The order is deliberate. God's right stands first, and the parents' right stands next to it.",
            "bn": "ওয়া ওয়াসসাইনাল ইনসানা বিওয়ালিদাইহি হুসনা: আর আমি মানুষকে তার পিতা-মাতার প্রতি সদ্ব্যবহারের নির্দেশ দিয়েছি। ইবন কাসীর আয়াতের অবস্থানটা মন দিয়ে দেখেন। আল্লাহর একত্ব ধরে রাখার আহ্বানের ঠিক পরেই এ নির্দেশ এসেছে, কারণ পিতা-মাতাই মানুষের দুনিয়ায় আসার উপলক্ষ। পিতা তার খরচ বহন করেন, মা তাকে ঘিরে রাখেন মমতায়। তিনি আয়াতটিকে ১৭:২৩ ও ১৭:২৪ আয়াতের পাশে রাখেন, যেখানে শুধু আল্লাহর ইবাদত আর পিতা-মাতার সঙ্গে সদ্ব্যবহার একসঙ্গে বলা হয়েছে। ক্রমটা ইচ্ছাকৃত। আল্লাহর হক আগে, তার পরেই পিতা-মাতার হক।"
          },
          {
            "en": "Then the verse turns on a single word: wa-in, but if. But if they strive to make you associate with Me something you have no knowledge of, do not obey them. Ibn Kathir marks the contrast himself, placing the one refusal alongside the standing charge of mercy and kindness toward them, offered in return for their earlier kindness. Nothing in the first half is revoked. The verse does not replace goodness with distance. It fences off a single act and leaves everything else where it stood.",
            "bn": "তারপর আয়াত ঘুরে যায় একটিমাত্র শব্দে: ওয়া ইন, কিন্তু যদি। কিন্তু যদি তারা তোমাকে এমন কিছু আমার সঙ্গে শরিক করাতে চাপ দেয় যার কোনো জ্ঞান তোমার নেই, তবে তাদের কথা মেনো না। ইবন কাসীর নিজেই বৈপরীত্যটা দেখিয়ে দেন। তাঁদের আগের দয়ার বদলে তাঁদের প্রতি দয়া ও সদ্ব্যবহারের স্থায়ী নির্দেশের পাশেই রাখা হয়েছে এই একটিমাত্র অস্বীকার। প্রথমার্ধের কিছুই বাতিল হয়নি। আয়াত সদ্ব্যবহারের জায়গায় দূরত্ব বসায় না। শুধু একটি কাজকে ঘিরে বেড়া দেয়, বাকি সব যেখানে ছিল সেখানেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Husn Names",
          "bn": "হুসন যা চায়"
        },
        "p": [
          {
            "en": "The word carried is husn, plain goodness. Ma'arif al-Qur'an, citing Mazhari, explains wasiyyah as calling someone to an action out of counsel and genuine well-wishing, not mere instruction. Husn, it adds, is an infinitive, to be good, so the sense is to adopt good conduct toward them. At-Tabari and al-Qurtubi spend lines on the grammar, noting that the Basran scholars read the accusative as though the sentence ran we enjoined him goodness. The point beneath the grammar is scope: not a single gesture, but a settled way of treating them.",
            "bn": "যে শব্দটা বহন করা হয়েছে তা হলো হুসন, সোজা কথায় ভালো আচরণ। মাআরিফুল কুরআন, মাযহারীর বরাতে, ওয়াসিয়্যাহর অর্থ করে এভাবে: পরামর্শ আর আন্তরিক কল্যাণকামনা থেকে কাউকে কোনো কাজের দিকে ডাকা, নিছক হুকুম নয়। হুসন একটি ক্রিয়ামূল, মানে ভালো হওয়া, তাই কথাটার অর্থ দাঁড়ায় তাঁদের সঙ্গে ভালো চালচলন গ্রহণ করা। তাবারী আর কুরতুবী ব্যাকরণ নিয়ে কয়েক লাইন খরচ করেন, বলেন বসরার আলেমরা এ কর্মপদটিকে এমনভাবে পড়েন যেন বাক্যটা ছিল আমি তাকে ভালো আচরণের নির্দেশ দিলাম। ব্যাকরণের নিচের আসল কথাটা হলো পরিধি। একটি অঙ্গভঙ্গি নয়, বরং তাঁদের সঙ্গে আচরণের একটা স্থায়ী ধরন।"
          },
          {
            "en": "As-Sa'di fills in what that way looks like. Husn, he says, is birr and ihsan, dutiful care and active good, in both word and deed, and the charge is to keep it up and never slip into 'uquq, the undutifulness that wounds a parent by speech or act. Al-Muyassar reads it the same way: be good to them in word and in deed. So the goodness commanded is not a feeling held privately. It is spoken and done, and it is meant to last rather than to appear once and lapse.",
            "bn": "সেই ধরনটা দেখতে কেমন, তা সা'দী খুলে বলেন। হুসন মানে বির ও ইহসান, দায়িত্বশীল যত্ন আর সক্রিয় কল্যাণ, কথায় ও কাজে উভয়ভাবে। নির্দেশ হলো তা ধরে রাখা, আর কখনো উকুকে পা না বাড়ানো, অর্থাৎ কথায় বা কাজে পিতা-মাতাকে কষ্ট দেওয়া সেই নাফরমানিতে। মুয়াসসারও একইভাবে পড়েন: কথায় ও কাজে তাঁদের সঙ্গে ভালো ব্যবহার করো। তাই যে সদ্ব্যবহারের হুকুম দেওয়া হলো তা মনের ভেতরে লুকানো কোনো অনুভূতি নয়। তা মুখে বলা হয় আর হাতে করা হয়, আর তা টিকে থাকার জন্য, একবার দেখা দিয়ে মিলিয়ে যাওয়ার জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mother Who Refused Food",
          "bn": "খেতে অস্বীকার করা এক মা"
        },
        "p": [
          {
            "en": "The commentators agree on the occasion. Al-Baghawi reports that the verse came down about Sa'd ibn Abi Waqqas (RA), one of the earliest to accept Islam and a man devoted to his mother, Hamnah bint Abi Sufyan. When she learned he had become Muslim she confronted him: what is this religion you have taken up? By God, she swore, I will neither eat nor drink until you return to what you were, or I die, and then you will be called, for all time, the one who killed his mother.",
            "bn": "উপলক্ষের ব্যাপারে তাফসীরকারেরা একমত। বাগভী বলেন, আয়াতটি নাজিল হয়েছিল সা'দ ইবন আবি ওয়াক্কাস (রাঃ)-এর ব্যাপারে, যিনি ছিলেন ইসলাম গ্রহণে অগ্রগামীদের একজন আর মায়ের প্রতি গভীর যত্নশীল এক ছেলে। তাঁর মা হামনাহ বিনতে আবু সুফিয়ান যখন জানলেন ছেলে মুসলিম হয়েছে, তিনি চড়াও হলেন: এ আবার কোন ধর্ম তুমি ধরলে? আল্লাহর কসম, তুমি আগের অবস্থায় না ফেরা পর্যন্ত আমি খাব না, পান করব না, নয়তো মরে যাব, আর তখন চিরকাল তোমাকে ডাকা হবে মায়ের হত্যাকারী বলে।"
          },
          {
            "en": "Al-Baghawi has her hold out a day and a night, then a second day; other reports, Ma'arif notes, stretch the fast longer still. Al-Qurtubi and Ibn Kathir preserve a grim detail from the narration: when the family wanted to feed her, they would pry her mouth open and pour the food in. The scene is not softened in the sources. A mother was starving herself, in earnest, to break her son's faith, and he could not simply wait for her to relent.",
            "bn": "বাগভীর বর্ণনায় তিনি এক দিন এক রাত কিছু না খেয়ে কাটালেন, তারপর আরেকটি দিন; আরো কিছু বর্ণনায়, মাআরিফুল কুরআন বলে, এ উপবাস আরো দীর্ঘ হয়। কুরতুবী ও ইবন কাসীর বর্ণনার একটি কঠিন খুঁটিনাটি ধরে রাখেন: পরিবার তাঁকে খাওয়াতে চাইলে তারা তাঁর মুখ ফাঁক করে খাবার ঢেলে দিত। সূত্রগুলোতে দৃশ্যটা নরম করা হয়নি। এক মা সত্যিকারেই নিজেকে না খাইয়ে রাখছিলেন ছেলের ঈমান ভাঙতে, আর ছেলে চুপচাপ মায়ের নরম হওয়ার অপেক্ষায় বসে থাকতে পারছিলেন না।"
          },
          {
            "en": "When persuasion failed, Sa'd answered her plainly. Al-Qurtubi and al-Baghawi record his words: mother, if you had a hundred souls and they left your body one by one, I would still not abandon my religion, so eat if you wish, or do not. Seeing that he would not bend, she ate and drank again. The reports are careful to show that he never raised his hand or his voice against her. He refused the demand, and he did not refuse her.",
            "bn": "বোঝানোয় কাজ না হলে সা'দ তাঁকে সাফ জবাব দিলেন। কুরতুবী ও বাগভী তাঁর কথা লিপিবদ্ধ করেন: মা, আপনার দেহে যদি একশ প্রাণও থাকত আর একটি একটি করে তা বেরিয়ে যেত, তবু আমি আমার দ্বীন ছাড়তাম না, তাই ইচ্ছে হলে খান, না হলে খাবেন না। তিনি নমনীয় হবেন না দেখে মা আবার খাওয়া-দাওয়া শুরু করলেন। বর্ণনাগুলো যত্ন করে দেখায় যে তিনি মায়ের ওপর কখনো হাত তোলেননি, গলাও চড়াননি। তিনি দাবিটা ফিরিয়েছেন, মাকে ফেরাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report Set Down Whole",
          "bn": "পুরোটা লিপিবদ্ধ এক বর্ণনা"
        },
        "p": [
          {
            "en": "The occasion is not only a commentator's note; it rests on a sound narration. Ibn Kathir traces it to a hadith of Sa'd recorded by Muslim, and also by Ahmad, Abu Dawud and an-Nasa'i, adding that at-Tirmidhi graded his wording hasan sahih. The fullest form sits in Sahih Muslim, where its presence is itself the grading, since Muslim admitted only what met his conditions for a sound report. Here is that wording, quoted as its own narration rather than blended with the other versions.",
            "bn": "এ উপলক্ষ কেবল এক তাফসীরকারের টীকা নয়; এটি দাঁড়িয়ে আছে এক সহীহ বর্ণনার ওপর। ইবন কাসীর একে সা'দের একটি হাদিস পর্যন্ত নিয়ে যান, যা মুসলিম বর্ণনা করেছেন, আর আহমাদ, আবু দাউদ ও নাসায়ীও বর্ণনা করেছেন; তিনি যোগ করেন যে তিরমিযী তাঁর শব্দকে হাসান সহীহ বলেছেন। সবচেয়ে পূর্ণ রূপটি আছে সহীহ মুসলিমে, যেখানে তার উপস্থিতিই হলো তার মান, কারণ মুসলিম কেবল তা-ই নিয়েছেন যা সহীহ বর্ণনার জন্য তাঁর শর্ত পূরণ করেছে। এই হলো সেই শব্দ, অন্য রূপগুলোর সঙ্গে মিশিয়ে নয়, নিজের বর্ণনা হিসেবেই উদ্ধৃত।"
          },
          {
            "en": "In Muslim's wording, Sa'd relates that four verses were revealed about him, and of this one he says: his mother, Umm Sa'd, swore that she would never speak to him until he renounced his faith, and that she would neither eat nor drink. She passed three days in this state until she fainted from hunger. Then, he says, Allah revealed this verse, 'And We have enjoined upon man goodness to his parents; but if they strive to make you associate with Me that of which you have no knowledge, obey them not' (29:8), and with it, 'accompany them in this world with kindness' (31:15).",
            "bn": "মুসলিমের শব্দে সা'দ বলেন যে তাঁর ব্যাপারে চারটি আয়াত নাজিল হয়েছিল, আর এর একটি নিয়ে তিনি বলেন: তাঁর মা উম্মু সা'দ কসম করলেন যে সা'দ দ্বীন না ছাড়া পর্যন্ত তিনি তাঁর সঙ্গে কথা বলবেন না, খাবেনও না, পানও করবেন না। ৩ দিন তিনি এ অবস্থায় রইলেন, শেষে ক্ষুধায় অজ্ঞান হয়ে গেলেন। তারপর, সা'দ বলেন, আল্লাহ এ আয়াত নাজিল করলেন, ‘আর আমি মানুষকে তার পিতা-মাতার প্রতি সদ্ব্যবহারের নির্দেশ দিয়েছি; কিন্তু তারা যদি তোমাকে এমন কিছু আমার সঙ্গে শরিক করাতে চাপ দেয় যার জ্ঞান তোমার নেই, তবে তাদের কথা মেনো না’ (২৯:৮), আর সঙ্গে, ‘দুনিয়ায় তাদের সঙ্গে ভালোভাবে চলো’ (৩১:১৫)।"
          }
        ]
      },
      {
        "h": {
          "en": "When Parents Press for Shirk",
          "bn": "যখন পিতা-মাতা শিরকে ঠেলে দেন"
        },
        "p": [
          {
            "en": "The verb is jahadaka, they strive against you, they press. It is not a passing wish but exertion, the kind the occasion makes vivid: a parent bringing real pressure to bear. Ibn Kathir fixes what is being pressed for, that if they are idolaters and strive to draw you after them into their religion, you must beware and not obey them in that. The object of the refusal is narrow and exact. It is being pulled into shirk, associating something with God, not the ordinary run of a parent's wishes.",
            "bn": "ক্রিয়াটি হলো জাহাদাকা, তারা তোমার বিরুদ্ধে উঠেপড়ে লাগে, চাপ দেয়। এটা উড়ো কোনো ইচ্ছা নয়, বরং কঠিন চেষ্টা, যেমনটা এই ঘটনা জ্বলজ্বল করে দেখায়: পিতা-মাতা সত্যিকারের চাপ প্রয়োগ করছেন। ইবন কাসীর ঠিক করে দেন কিসের জন্য চাপ, অর্থাৎ তাঁরা যদি মুশরিক হন আর তোমাকে নিজেদের ধর্মে টেনে নিতে উঠেপড়ে লাগেন, তবে সাবধান হও আর সে ব্যাপারে তাঁদের কথা মেনো না। অস্বীকারের লক্ষ্যবস্তু সরু আর নিখুঁত। তা হলো শিরকে টেনে নেওয়া, অর্থাৎ আল্লাহর সঙ্গে কিছু শরিক করা, পিতা-মাতার সাধারণ চাওয়া-পাওয়া নয়।"
          },
          {
            "en": "Then: that of which you have no knowledge. At-Tabari reads it as you have no knowledge that I have any partner, because there is none to know. As-Sa'di presses the phrase further, that no one possesses any knowledge that shirk is valid at all, and the wording itself magnifies how grave the sin is. Both readings land in the same place. The parents are demanding that their child affirm something that cannot be known because it is not true, and no bond, however deep, can oblige a person to affirm a falsehood about God.",
            "bn": "তারপর: যার কোনো জ্ঞান তোমার নেই। তাবারী এর অর্থ করেন, আমার যে কোনো শরিক আছে এমন জ্ঞান তোমার নেই, কারণ জানার মতো কোনো শরিকই নেই। সা'দী কথাটাকে আরো চেপে ধরেন, যে শিরক আদৌ সঠিক এমন জ্ঞান কারোরই নেই, আর এই শব্দই দেখিয়ে দেয় গুনাহটা কত ভারী। দুটি পাঠই একই জায়গায় এসে দাঁড়ায়। পিতা-মাতা সন্তানের কাছে এমন কিছু মেনে নিতে বলছেন যা জানা অসম্ভব, কারণ তা সত্যই নয়, আর যত গভীরই হোক, কোনো বন্ধন কাউকে আল্লাহ সম্পর্কে মিথ্যা মেনে নিতে বাধ্য করতে পারে না।"
          },
          {
            "en": "Al-Muyassar widens the frame carefully. The verse names shirk, he says, but the same ruling attaches to every other act of disobedience to God: there is no obedience owed to any created being, whoever he may be, in disobedience of the Creator, a principle established from the Messenger (ﷺ). The verse chooses the gravest case in order to state the rule, and the rule then reaches the lesser cases too. What a parent may not command is, in the end, sin itself.",
            "bn": "মুয়াসসার পরিধিটা যত্ন করে বাড়িয়ে দেন। আয়াত শিরকের নাম নেয়, তিনি বলেন, তবে একই বিধান আল্লাহর অবাধ্যতার প্রতিটি কাজের সঙ্গেই জড়িয়ে আছে: স্রষ্টার অবাধ্যতায় কোনো সৃষ্টিরই আনুগত্য নেই, সে যেই হোক, আর এ নীতি রাসূল ﷺ থেকে প্রমাণিত। আয়াত সবচেয়ে ভারী উদাহরণটা বেছে নেয় বিধানটা বলার জন্য, আর সেই বিধান তখন ছোট ক্ষেত্রগুলোকেও ছুঁয়ে ফেলে। পিতা-মাতা যা হুকুম করতে পারেন না, তা শেষ পর্যন্ত গুনাহ নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Obedience, Here Alone",
          "bn": "আনুগত্য নয়, শুধু এখানেই"
        },
        "p": [
          {
            "en": "Fala tut'ihuma: do not obey them. Here the commentators reach for the principle that governs the whole matter. Ma'arif al-Qur'an and al-Baghawi both cite the Prophet's words, that there is no obedience to a created being in disobedience of the Creator. Ma'arif notes the report was recorded by Ahmad and al-Hakim, who graded it sound. The rule does not single out parents as suspect. It places them where every human authority stands, owed obedience fully, right up to the edge of God's command, and not past it.",
            "bn": "ফালা তুতিউহুমা: তাদের কথা মেনো না। এখানে তাফসীরকারেরা সেই নীতিটা ধরেন যা গোটা বিষয়টা পরিচালনা করে। মাআরিফুল কুরআন আর বাগভী দুজনেই নবী ﷺ-এর কথা উদ্ধৃত করেন, যে স্রষ্টার অবাধ্যতায় কোনো সৃষ্টির আনুগত্য নেই। মাআরিফুল কুরআন জানায়, বর্ণনাটি আহমাদ ও হাকিম লিপিবদ্ধ করেছেন, আর হাকিম একে সহীহ বলেছেন। নীতিটা পিতা-মাতাকে সন্দেহের চোখে আলাদা করে দেখায় না। বরং তাঁদের সেখানেই বসায় যেখানে প্রতিটি মানবিক কর্তৃত্ব দাঁড়ায়, পুরো আনুগত্যের দাবিদার, ঠিক আল্লাহর হুকুমের কিনারা পর্যন্ত, তার বেশি নয়।"
          },
          {
            "en": "As-Sa'di states the balance exactly. Be dutiful to your parents, he says, and put their obedience first, except where it meets obedience to God and His Messenger, which takes precedence over everything. Read his words closely and the shape appears: obedience to parents is the standing rule, and the refusal is a single exception cut into it. To withhold obedience on this one point is not to withhold honour, care or company. The son in the narration proved it, denying his mother the one thing and nothing else.",
            "bn": "সা'দী ভারসাম্যটা একদম মেপে বলেন। পিতা-মাতার হক আদায় করো, তিনি বলেন, আর তাঁদের আনুগত্যকে আগে রাখো, শুধু সেখানে ছাড়া যেখানে তা আল্লাহ ও তাঁর রাসূলের আনুগত্যের মুখোমুখি হয়, যা সবকিছুর আগে আসে। তাঁর কথা মন দিয়ে পড়লে ছবিটা ভেসে ওঠে: পিতা-মাতার আনুগত্যই স্থায়ী নিয়ম, আর অস্বীকারটা তার ভেতরে কাটা একটিমাত্র ব্যতিক্রম। এই একটি বিষয়ে আনুগত্য না দেওয়া মানে সম্মান, যত্ন বা সঙ্গ না দেওয়া নয়। বর্ণনার সেই ছেলে তা প্রমাণ করেছেন, মাকে সেই একটি জিনিস ফিরিয়ে, আর কিছুই নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Kindness After the Refusal",
          "bn": "অস্বীকারের পরেও সদ্ব্যবহার"
        },
        "p": [
          {
            "en": "The verse's own context answers the fear that a refusal licenses coldness. In the narration, the same revelation that told Sa'd not to obey his mother in shirk also gave him 31:15: accompany them in this world with kindness, ma'ruf. The two sit together deliberately. First the one thing withheld, then the instruction to keep walking beside them, through this life, with recognised good. A disbelieving parent is still owed company and care; the refusal touches the single demand and leaves the relationship intact.",
            "bn": "অস্বীকার কি নিষ্ঠুরতার ছাড়পত্র, এই ভয়ের জবাব আয়াতের নিজের প্রসঙ্গেই আছে। বর্ণনায়, যে একই ওহি সা'দকে শিরকে মায়ের কথা মানতে নিষেধ করল, সেই ওহিই তাঁকে দিল ৩১:১৫: দুনিয়ায় তাদের সঙ্গে ভালোভাবে চলো, মারুফ দিয়ে। দুটি কথা ইচ্ছে করেই পাশাপাশি বসে আছে। আগে সেই একটি জিনিস ফিরিয়ে দেওয়া, তারপর নির্দেশ এই জীবনজুড়ে স্বীকৃত কল্যাণ নিয়ে তাঁদের পাশে পাশে চলার। অবিশ্বাসী পিতা-মাতাও সঙ্গ আর যত্নের হকদার; অস্বীকার কেবল সেই একটি দাবিকে ছোঁয়, সম্পর্ককে অটুট রেখে দেয়।"
          },
          {
            "en": "Al-Baghawi notes that this verse and its near-twins in Luqman and al-Ahqaf came down about the same man. In 31:14 the charge to thank one's parents sits beside the charge to thank God; in 46:15 the Qur'an recalls what a mother bore in carrying and nursing a child. Read together, they refuse any reading that turns 29:8 into a permission slip for neglect. The Qur'an keeps naming the parents' due even as it draws the one firm line.",
            "bn": "বাগভী জানান, এই আয়াত আর লুকমান ও আহকাফ সূরায় এর প্রায়-যমজ আয়াতগুলো একই মানুষের ব্যাপারে নাজিল হয়েছিল। ৩১:১৪ আয়াতে পিতা-মাতার শুকরিয়ার নির্দেশ আল্লাহর শুকরিয়ার নির্দেশের পাশেই বসে; ৪৬:১৫ আয়াতে কুরআন মনে করিয়ে দেয় সন্তান গর্ভে ধরা আর দুধ খাওয়ানোয় এক মা কী বয়ে নেন। একসঙ্গে পড়লে এগুলো এমন কোনো পাঠ মানে না যা ২৯:৮ আয়াতকে অবহেলার ছাড়পত্র বানিয়ে ফেলে। আল্লাহ সেই একটি দৃঢ় রেখা টানার সময়েও পিতা-মাতার হকের নাম নিতেই থাকেন।"
          },
          {
            "en": "This needs saying plainly, in case the verse is misused. It gives no warrant to treat a non-Muslim parent harshly, to withhold support, or to cut the tie. It withdraws obedience in one matter, being pushed toward shirk or sin, and nothing beyond that. A believer whose parents follow another religion still owes them kindness, service and company, by the plain sense of the verse and the one quoted beside it. The line here is drawn around an act, and never around a person.",
            "bn": "কথাটা সাফ বলা দরকার, যেন আয়াতটা অপব্যবহার না হয়। এটি অমুসলিম পিতা-মাতার সঙ্গে রূঢ় আচরণ করার, খরচ বন্ধ করার, বা সম্পর্ক ছিঁড়ে ফেলার কোনো অনুমতি দেয় না। এটি আনুগত্য তুলে নেয় শুধু একটি বিষয়ে, অর্থাৎ শিরক বা গুনাহের দিকে ঠেলে দেওয়ার বেলায়, তার বাইরে কিছু নয়। যে মুমিনের পিতা-মাতা অন্য ধর্মের, তিনিও তাঁদের সদ্ব্যবহার, সেবা আর সঙ্গ দিতে বাধ্য, আয়াতের সোজা অর্থে আর পাশে উদ্ধৃত আয়াতটিতেও তা-ই আছে। এখানে রেখাটা টানা হয়েছে একটি কাজকে ঘিরে, কখনো কোনো মানুষকে ঘিরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Return Settles All",
          "bn": "প্রত্যাবর্তনেই সব মীমাংসা"
        },
        "p": [
          {
            "en": "The verse closes by lifting its gaze: ilayya marji'ukum, to Me is your return. At-Tabari reads it straightforwardly, that your coming back and your destination on the Day of Resurrection is to Me, and I will inform you of what you did and repay it. Al-Qurtubi hears a warning in it, aimed at anyone who would obey a parent in what amounts to disbelief. Either way, the clause steadies the one caught in the hard choice: the final account is settled with God, not with the parent who is pressing.",
            "bn": "আয়াত শেষ হয় দৃষ্টি উঁচু করে: ইলাইয়্যা মারজিউকুম, আমার কাছেই তোমাদের প্রত্যাবর্তন। তাবারী একে সোজাভাবে পড়েন, যে কিয়ামতের দিন তোমাদের ফিরে আসা আর গন্তব্য আমার কাছেই, আর আমি তোমাদের কাজের খবর দেব আর তার প্রতিদান দেব। কুরতুবী এতে একটা হুঁশিয়ারি শোনেন, যা তাকবানো তার দিকে যে কুফরির সমান কোনো কিছুতে পিতা-মাতার কথা মানবে। যেভাবেই হোক, এই বাক্য কঠিন পছন্দের মুখে পড়া একজনকে স্থির করে দেয়: শেষ হিসাব আল্লাহর সঙ্গে চোকে, চাপ দেওয়া পিতা-মাতার সঙ্গে নয়।"
          },
          {
            "en": "Ibn Kathir carries the thought to its end. On that Day, he says, you will be gathered with the righteous, not with the company of your parents, even though in this world no one was closer to them than you, for a person is raised with those he loves, in the love that is for God's sake. He reads the next verse, 29:9, as the promise behind it: those who believe and do good God will admit among the righteous. The kindness you kept and the line you held both answer, in the end, to the same return.",
            "bn": "ইবন কাসীর ভাবনাটাকে শেষ পর্যন্ত নিয়ে যান। সেই দিন, তিনি বলেন, তোমাকে ওঠানো হবে সৎকর্মশীলদের সঙ্গে, পিতা-মাতার দলের সঙ্গে নয়, যদিও দুনিয়ায় তাঁদের এত কাছের আর কেউ ছিল না, কারণ একজন মানুষকে ওঠানো হয় তাদের সঙ্গেই যাদের সে ভালোবাসে, সেই ভালোবাসায় যা আল্লাহর জন্য। তিনি পরের আয়াত, ২৯:৯, পড়েন এর পেছনের প্রতিশ্রুতি হিসেবে: যারা ঈমান আনে আর সৎকাজ করে আল্লাহ তাদের সৎকর্মশীলদের অন্তর্ভুক্ত করবেন। যে সদ্ব্যবহার আপনি ধরে রাখলেন আর যে রেখা আপনি টানলেন, দুটিই শেষমেশ সেই একই প্রত্যাবর্তনের কাছে জবাব দেয়।"
          }
        ]
      }
    ]
  },
  "29:14": {
    "sections": [
      {
        "h": {
          "en": "Why Noah Comes First",
          "bn": "নূহ কেন সবার আগে"
        },
        "p": [
          {
            "en": "The sentence just before this one has the deniers of Quraysh telling the believers, follow our way and we will carry your sins (29:12 and 29:13). at-Tabari reads what comes next as both a warning to them and a comfort to the Prophet: do not let their rejection grieve you, for I once gave Noah's people a long rope and still their end was ruin. Ma'arif al-Qur'an sees the same purpose, that the stories of earlier messengers were set down to steady the Prophet and the believers under a harassment that was nothing new.",
            "bn": "ঠিক আগের আয়াতেই কুরাইশের অস্বীকারকারীরা মু'মিনদের বলছে, আমাদের পথে চল, তোমাদের গুনাহ আমরা বয়ে নেব (২৯:১২ ও ২৯:১৩)। তাবারী এর পরের কথাকে পড়েন দুইভাবে, তাদের জন্য হুঁশিয়ারি আর নবী ﷺ-এর জন্য সান্ত্বনা। যেন বলা হচ্ছে, এদের অস্বীকার আপনাকে যেন কষ্ট না দেয়, কারণ নূহ (আঃ)-এর সম্প্রদায়কে আমি দীর্ঘ ঢিল দিয়েছিলাম, তবু তাদের পরিণতি হয়েছিল ধ্বংস। মাআরিফুল কুরআন একই উদ্দেশ্য দেখে, আগের নবীদের কাহিনি এখানে এসেছে নবী ﷺ আর মু'মিনদের অন্তর শক্ত রাখতে, কারণ এই উৎপীড়ন নতুন কিছু নয়।"
          },
          {
            "en": "al-Qurtubi asks why Noah of all the prophets, and answers that he was the first messenger sent to the people of the earth, and that no prophet ever suffered from his people what Noah suffered. He cites a report from Anas that the Prophet named Noah the first messenger sent. So the surah reaches back past every later struggle to the longest and loneliest mission of them all, and lays it beside the Prophet's own trial.",
            "bn": "কুরতুবী প্রশ্ন তোলেন, সব নবী থাকতে নূহ (আঃ) কেন। জবাবে বলেন, তিনিই ছিলেন পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল, আর কোনো নবীকেই তাঁর সম্প্রদায়ের হাতে এতটা ভুগতে হয়নি যতটা নূহ (আঃ) ভুগেছেন। তিনি আনাস থেকে বর্ণনা আনেন যে, নবী ﷺ নূহ (আঃ)-কে প্রথম প্রেরিত রাসূল বলেছেন। তাই সূরাটি পরের সব সংগ্রাম পেরিয়ে পিছিয়ে যায় সবচেয়ে দীর্ঘ আর সবচেয়ে নিঃসঙ্গ সেই মিশনে, আর তা রাখে নবী ﷺ-এর নিজের পরীক্ষার পাশে।"
          },
          {
            "en": "at-Tabari sets the comfort in a balance. God may grant the deniers a long respite, he says, drawing it out as He did for Noah's people, yet their affair ends in ruin, while the Prophet and those with him end in triumph and in rescue from what befalls the deniers. Ibn Kathir reads the same promise into the verse: know that God will aid you and make you prevail, and will humble and bring low your enemies. The Noah story is told to a man under pressure as a map of how such pressure ends.",
            "bn": "তাবারী সান্ত্বনাটিকে রাখেন এক ভারসাম্যে। আল্লাহ অস্বীকারকারীদের দীর্ঘ অবকাশ দিতে পারেন, তিনি বলেন, যেমন দিয়েছিলেন নূহ (আঃ)-এর সম্প্রদায়কে, তবু তাদের পরিণাম ধ্বংস, আর নবী ﷺ ও তাঁর সঙ্গীদের পরিণাম জয় আর অস্বীকারকারীদের উপর নেমে আসা শাস্তি থেকে মুক্তি। ইবন কাসীর আয়াতে একই প্রতিশ্রুতি পড়েন, জেনে রাখুন আল্লাহ আপনাকে সাহায্য করবেন, বিজয়ী করবেন, আর আপনার শত্রুদের লাঞ্ছিত ও নত করবেন। চাপে থাকা এক মানুষের কাছে নূহ (আঃ)-এর কাহিনি বলা হয়েছে এই চাপ কোথায় গিয়ে শেষ হয় তার মানচিত্র হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Thousand Less Fifty",
          "bn": "হাজার থেকে পঞ্চাশ কম"
        },
        "p": [
          {
            "en": "The verse measures his stay in a strange arithmetic: he remained among them a thousand years less fifty, which comes to 950. The Qur'an does not give the round smaller figure; it says a thousand, then subtracts. al-Qurtubi pauses on the wording and asks why it was not simply put as the smaller total, when that would have been shorter to say.",
            "bn": "আয়াতটি তাঁর অবস্থানকে মাপে এক অদ্ভুত হিসাবে, তিনি তাদের মাঝে ছিলেন হাজার বছর থেকে পঞ্চাশ কম, যা দাঁড়ায় ৯৫০ বছরে। কুরআন ছোট পূর্ণ সংখ্যাটা সরাসরি বলেনি, বলেছে হাজার, তারপর বিয়োগ করেছে। কুরতুবী এই শব্দচয়নে থামেন আর জিজ্ঞেস করেন, ছোট যোগফলটা বলা তো সংক্ষিপ্ত হতো, তবু তা না বলে এভাবে কেন।"
          },
          {
            "en": "He gives a pair of answers. The first is that naming the thousand magnifies the count, since the larger word strikes the ear as a greater stretch of time than the plain total would. The second rests on a report that Noah was granted a thousand years and gave fifty of them to a descendant of his, then at death returned to complete the thousand, so that the shortfall is noted as coming from his own hand. Either way, the phrasing is deliberate, not a loose rounding.",
            "bn": "তিনি একজোড়া জবাব দেন। প্রথমটি, হাজার শব্দটি ব্যবহার সংখ্যাটাকে বড় করে দেখায়, কারণ বড় শব্দটা কানে বাজে দীর্ঘতর সময় হিসেবে, নিছক যোগফলের চেয়ে বেশি। দ্বিতীয়টি দাঁড়িয়ে আছে এক বর্ণনার উপর, নূহ (আঃ)-কে হাজার বছর আয়ু দেওয়া হয়েছিল, তিনি তা থেকে পঞ্চাশ বছর দিয়ে দেন তাঁর এক বংশধরকে, পরে মৃত্যুকালে হাজার পূর্ণ করতে তা ফিরিয়ে নেন। তাই ঘাটতিটা তাঁর নিজের দিক থেকেই এসেছে বলে উল্লেখ করা হয়। যেভাবেই হোক, শব্দচয়ন ইচ্ছাকৃত, এলোমেলো গোল করা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Lifetime, Whose Calling",
          "bn": "জীবনকাল নাকি দাওয়াতের কাল"
        },
        "p": [
          {
            "en": "The commentators divide over what the 950 counts. Ibn Abbas, as at-Tabari and Ibn Kathir both relay, held that Noah was sent at the age of 40, remained among his people 950 years calling them, and lived on 60 years after the flood. On this reading the figure is the length of his mission among this people, with a life before prophethood and a life after the deluge lying outside it. Ibn Kathir judges the plain sense of the verse to match this, and calls Ibn Abbas's view the nearest.",
            "bn": "৯৫০ বছর আসলে কী গোনে, এ নিয়ে তাফসীরকারেরা ভাগ হয়ে যান। তাবারী আর ইবন কাসীর দুজনেই ইবন আব্বাস থেকে আনেন যে, নূহ (আঃ)-কে ৪০ বছর বয়সে পাঠানো হয়, তিনি তাঁর সম্প্রদায়ের মাঝে ৯৫০ বছর তাদের ডেকে কাটান, আর মহাপ্লাবনের পর বাঁচেন আরও ৬০ বছর। এ পাঠ অনুযায়ী সংখ্যাটা এই সম্প্রদায়ের কাছে তাঁর দাওয়াতের দৈর্ঘ্য, নবুয়তের আগের জীবন আর প্লাবনের পরের জীবন এর বাইরে থাকে। ইবন কাসীর আয়াতের সরল অর্থকে এর সঙ্গেই মেলান, আর ইবন আব্বাসের মতকেই সবচেয়ে কাছের বলেন।"
          },
          {
            "en": "Qatadah, by contrast, took the 950 for Noah's entire lifespan, split as 300 years before he was sent, 300 spent calling them, and 350 after the flood. Ibn Kathir records this but marks it as odd, against the surface of the verse. The disagreement is real and old, and this reading sets out both without choosing: most read the span as the years of his calling, while some read it as the whole of his life.",
            "bn": "কাতাদা আবার ৯৫০ বছরকে ধরেন নূহ (আঃ)-এর গোটা আয়ু হিসেবে, ভাগ করেন এভাবে, পাঠানোর আগে ৩০০ বছর, তাদের ডাকায় ৩০০ বছর, আর প্লাবনের পর ৩৫০ বছর। ইবন কাসীর এটি লিখে রাখেন, তবে একে চিহ্নিত করেন অদ্ভুত বলে, আয়াতের বাহ্যিক অর্থের বিপরীত। মতভেদটা সত্যিকারের ও পুরোনো, আর এখানে দুটো পাঠই তুলে ধরা হলো কোনোটা বেছে না নিয়ে, বেশির ভাগ পড়েন সংখ্যাটাকে তাঁর দাওয়াতের বছর হিসেবে, আর কেউ কেউ গোটা জীবনকাল হিসেবে।"
          },
          {
            "en": "The longer biographies only widen the gap. Ka'b al-Ahbar put his whole life at 1020 years, Wahb at 1400, each adding the periods before and after the mission to the Qur'anic 950. Ma'arif al-Qur'an settles the one fixed point: the 950 is stated by the Qur'an and is true beyond doubt, while the figures around it come from narrations that place it within a longer life. Where they add up differently, the verse itself names only the 950.",
            "bn": "দীর্ঘতর জীবনীগুলো ফারাকটা আরও বাড়ায়। কা'ব আল-আহবার তাঁর গোটা জীবন ধরেন ১০২০ বছর, ওহব ধরেন ১৪০০ বছর, প্রত্যেকে মিশনের আগের ও পরের সময়কে কুরআনের ৯৫০-এর সঙ্গে যোগ করেন। মাআরিফুল কুরআন একটা স্থির বিন্দু ঠিক করে দেয়, ৯৫০ সংখ্যাটা কুরআন নিজে বলেছে আর তা সন্দেহাতীতভাবে সত্য, আর এর চারপাশের সংখ্যাগুলো আসে এমন বর্ণনা থেকে যারা একে রাখে দীর্ঘতর এক জীবনের ভেতরে। যেখানে তারা ভিন্ন ভিন্ন যোগফলে পৌঁছায়, আয়াত নিজে শুধু ৯৫০-এর নামই নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Night and Day, Unceasing",
          "bn": "রাত-দিন, থামাথামি নেই"
        },
        "p": [
          {
            "en": "as-Sa'di draws the texture of those years. Noah never slackened in the call and never tired of sincere counsel, pressing it night and day, in secret and in the open, with a patience and forbearance the words can barely hold. Ibn Kathir says the same, that he called them night and day, openly and in private, and that for all of it only a handful believed with him. The verse hands us the length; these readings hand us the daily weight inside it.",
            "bn": "সাদী সেই বছরগুলোর বুনোট এঁকে দেন। নূহ (আঃ) দাওয়াতে কখনো ঢিল দেননি, আন্তরিক নসিহতে কখনো ক্লান্ত হননি, চালিয়ে গেছেন রাতে ও দিনে, গোপনে ও প্রকাশ্যে, এমন ধৈর্য আর সহনশীলতা নিয়ে যা ভাষায় ধরা কঠিন। ইবন কাসীরও একই কথা বলেন, তিনি তাদের ডেকেছেন রাত-দিন, প্রকাশ্যে ও গোপনে, আর এত কিছুর পরও হাতে গোনা কয়েকজন তাঁর সঙ্গে ঈমান এনেছিল। আয়াত আমাদের দেয় দৈর্ঘ্যটা, আর এই বর্ণনাগুলো দেয় তার ভেতরের প্রতিদিনের ভার।"
          },
          {
            "en": "at-Tabari adds the bitter result: the more he called them to God and to leaving their idols, the more it increased them only in flight from him. as-Sa'di notes that it was after all this, worn down but not broken, that Noah at last prayed against them, my Lord, leave not a single disbeliever on the earth (71:26). The plea came at the end of centuries, not in the heat of a bad day.",
            "bn": "তাবারী যোগ করেন তিক্ত ফলটা, তিনি যত আল্লাহর দিকে আর মূর্তি ছাড়ার দিকে ডেকেছেন, তা তাদের ততই কেবল পালানোতেই বাড়িয়েছে। সাদী উল্লেখ করেন, এতকিছুর পরেই, নুয়ে পড়েও না ভেঙে, নূহ (আঃ) শেষমেশ তাদের বিরুদ্ধে দোয়া করেন, হে আমার রব, জমিনে কোনো কাফিরকে অবশিষ্ট রাখবেন না (৭১:২৬)। এই আকুতি এসেছিল শতাব্দীর শেষে, কোনো খারাপ দিনের উত্তাপে নয়।"
          },
          {
            "en": "al-Qurtubi notes that even the name carries the labour. Noah, Nuh in Arabic, is tied to nawh, to wail or lament; he was called Nuh, the commentator reports, because he lamented over his people across those long years, weeping for them whenever they turned away, and in another account because he wept long over his own fault until the name settled on him. Either way the name fastens the man to grief that was sustained, not grief spent in a single outburst and done.",
            "bn": "কুরতুবী লক্ষ করেন, এমনকি নামটাও এই শ্রমের ভার বয়ে বেড়ায়। নূহ শব্দটি জড়িয়ে আছে আরবি নাওহ, অর্থাৎ বিলাপ বা কান্নার সঙ্গে। তাঁকে নূহ বলা হয়েছিল, তাফসীরকার জানান, কারণ তিনি এই দীর্ঘ বছরগুলোজুড়ে তাঁর সম্প্রদায়ের জন্য বিলাপ করেছেন, তারা মুখ ফিরিয়ে নিলেই তাদের জন্য কেঁদেছেন, আর আরেক বর্ণনায়, কারণ তিনি নিজের ত্রুটির জন্য দীর্ঘ কান্না কেঁদেছেন যতক্ষণ না নামটা তাঁর উপর থিতু হলো। যেভাবেই হোক, নামটি মানুষটিকে বেঁধে রাখে টিকে থাকা শোকের সঙ্গে, এক ঝলকে ফুরিয়ে যাওয়া শোকের সঙ্গে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What Seized Them",
          "bn": "যা তাদের গ্রাস করল"
        },
        "p": [
          {
            "en": "Then the flood seized them. al-Qurtubi gathers the readings of al-tufan: Ibn Abbas, Sa'id bin Jubayr and Qatadah take it as the rain that was loosed on them, ad-Dahhak as the drowning itself, and others as death in the broad sense. The word in Arabic, he notes through the grammarians, names anything that comes in overwhelming abundance and sweeps over a whole people, whether water, killing, or death.",
            "bn": "তারপর মহাপ্লাবন তাদের গ্রাস করল। কুরতুবী আত-তূফান শব্দের পাঠগুলো জড়ো করেন, ইবন আব্বাস, সাঈদ বিন জুবায়ের আর কাতাদা একে ধরেন সেই বৃষ্টি হিসেবে যা তাদের উপর ছাড়া হয়েছিল, দাহহাক ধরেন ডুবে মরা হিসেবে, আর কেউ কেউ ব্যাপক অর্থে মৃত্যু হিসেবে। আরবিতে শব্দটি, ব্যাকরণবিদদের সূত্রে তিনি বলেন, এমন যেকোনো কিছুকে বোঝায় যা অপ্রতিরোধ্য প্রাচুর্যে এসে গোটা জনগোষ্ঠীকে ঢেকে ফেলে, তা পানি হোক, হত্যা হোক বা মৃত্যু।"
          },
          {
            "en": "as-Sa'di fills in the picture: water that came down from the sky in torrents and burst up from the earth with force, until it closed over them. The two senses meet in a single word. What began as rain they might have read as mere weather became, by its measure and its reach, a judgement that left no high ground. The verse does not linger on the horror; it states the seizing and moves on.",
            "bn": "সাদী ছবিটা পূর্ণ করেন, আকাশ থেকে মুষলধারে নেমে আসা আর জমিন থেকে প্রবল বেগে উথলে ওঠা পানি, যতক্ষণ না তা তাদের উপর বন্ধ হয়ে যায়। দুই অর্থ এক শব্দেই মিলে যায়। যা শুরু হয়েছিল বৃষ্টি হিসেবে, তারা হয়তো একে নিছক আবহাওয়া ভেবেছিল, কিন্তু তার মাত্রা আর বিস্তারে তা হয়ে ওঠে এমন এক বিচার যা কোনো উঁচু জমিন বাকি রাখেনি। আয়াত ভয়াবহতায় থামে না, গ্রাস করার কথা বলে এগিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "While They Were Wrongdoers",
          "bn": "তারা তখন সীমালঙ্ঘনকারী"
        },
        "p": [
          {
            "en": "The verse ends on a condition, not a verdict on a people as such: the flood took them while they were wrongdoers. al-Baghawi relays from Ibn Abbas that the wrongdoing here is shirk; at-Tabari glosses it as wronging themselves by their disbelief; al-Muyassar joins their disbelief to open tyranny. The sequence matters. The seizing followed a full age of warning and fell only on those who had, by then, settled into wrong. It was a sentence passed, not a disaster at random.",
            "bn": "আয়াত শেষ হয় এক শর্তে, গোটা এক জাতির উপর ঢালাও রায়ে নয়, মহাপ্লাবন তাদের নিয়েছিল যখন তারা ছিল সীমালঙ্ঘনকারী। বাগভী ইবন আব্বাস থেকে আনেন যে, এখানে সীমালঙ্ঘন মানে শিরক, তাবারী একে ব্যাখ্যা করেন কুফরের মাধ্যমে নিজেদের উপর জুলুম হিসেবে, মুয়াসসার তাদের কুফরের সঙ্গে জোড়েন খোলা সীমালঙ্ঘন। ধারাটা জরুরি। গ্রাস করা এসেছিল পুরো এক যুগের সতর্কবার্তার পর, আর পড়েছিল কেবল তাদের উপর যারা ততদিনে অন্যায়ে থিতু হয়ে গিয়েছিল। এটা ছিল ঘোষিত এক দণ্ড, এলোমেলো কোনো বিপর্যয় নয়।"
          },
          {
            "en": "This must be said plainly. The verse records a past nation that God destroyed by His own decree, after His messenger had called them for a lifetime. It licenses nothing against any living person or community. It is not for anyone to read a flood, a storm, or any calamity today as a verdict on its victims, nor to appoint himself the agent of such a sentence. The judgement here is God's alone, over a people whose case is long closed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি লিপিবদ্ধ করে অতীতের এমন এক জাতিকে, যাদের আল্লাহ নিজের ফয়সালায় ধ্বংস করেছেন, তাঁর রাসূল গোটা এক জীবন ধরে তাদের ডাকার পর। এটি জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। আজকের কোনো বন্যা, ঝড় বা দুর্যোগকে তার শিকারদের উপর রায় হিসেবে পড়ার অধিকার কারও নেই, আর এমন কোনো দণ্ডের নির্বাহক সেজে বসার অধিকারও কারও নেই। এখানে বিচার একমাত্র আল্লাহর, এমন এক জাতির উপর যাদের ফাইল বহু আগেই বন্ধ হয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Noah on the Day",
          "bn": "কিয়ামতের দিন নূহ"
        },
        "p": [
          {
            "en": "The verse opens, We certainly sent Noah to his people, and a sound hadith lets us see him at the far end of time. al-Bukhari records that on the Day of Resurrection the crowds will go to Noah pleading for intercession and say, you are the first of the messengers to the people of the earth, and God named you a thankful slave. That last title echoes the Qur'an's own word for him, a thankful slave (17:3).",
            "bn": "আয়াত শুরু হয়, আমি নূহকে তার সম্প্রদায়ের কাছে পাঠিয়েছিলাম, আর একটি সহিহ হাদিস আমাদের তাঁকে দেখায় সময়ের শেষ প্রান্তে। বুখারী বর্ণনা করেন, কিয়ামতের দিন মানুষের ভিড় শাফাআতের আকুতি নিয়ে নূহ (আঃ)-এর কাছে যাবে আর বলবে, আপনি পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল, আর আল্লাহ আপনাকে কৃতজ্ঞ বান্দা নাম দিয়েছেন। শেষ উপাধিটি কুরআনের নিজের শব্দেরই প্রতিধ্বনি, কৃতজ্ঞ বান্দা (১৭:৩)।"
          },
          {
            "en": "The pairing is telling. The first of the messengers to the earth, after a lifetime of rejection, is remembered not as a bitter man but as a grateful servant. A long calling that bore almost no visible fruit did not sour him. The commentaries also relate a well-known image of Noah calling the world a house with two doors, come in by the first and gone out by the second, but it reaches us without a sound chain, so it is set aside here.",
            "bn": "জোড়াটা তাৎপর্যপূর্ণ। পৃথিবীর কাছে পাঠানো প্রথম রাসূল, গোটা এক জীবন প্রত্যাখ্যানের পরও, স্মরণে থাকেন তিক্ত মানুষ হিসেবে নয়, বরং কৃতজ্ঞ বান্দা হিসেবে। যে দীর্ঘ দাওয়াত প্রায় কোনো দৃশ্যমান ফলই দেয়নি, তা তাঁকে বিষিয়ে তোলেনি। তাফসীরগুলো নূহ (আঃ)-এর একটি সুপরিচিত ছবিও আনে, তিনি দুনিয়াকে বলেছেন দুটি দরজার এক ঘর, প্রথমটি দিয়ে ঢুকে আর দ্বিতীয়টি দিয়ে বেরিয়ে যাওয়া, তবে তা আমাদের কাছে পৌঁছায় সহিহ সনদ ছাড়া, তাই একে এখানে সরিয়ে রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "The Long Obedience",
          "bn": "দীর্ঘ এক আনুগত্য"
        },
        "p": [
          {
            "en": "Step back and the marvel is the compression. 950 years of a single man's patience, every dawn of it a fresh refusal met with a fresh call, are set down in sixteen Arabic words. The verse is almost curt. That brevity is itself the point: a life so long that we cannot imagine its tedium is handed to us in a breath, so that what stands out is not the hardship but the steadiness, held without result for longer than nations last.",
            "bn": "একটু পিছিয়ে দাঁড়ালে বিস্ময়টা হলো সংক্ষিপ্ততা। এক মানুষের ৯৫০ বছরের ধৈর্য, যার প্রতিটি ভোর ছিল নতুন প্রত্যাখ্যানের মুখে নতুন করে ডাক, ধরা হয়েছে ষোলোটি আরবি শব্দে। আয়াতটি প্রায় রুক্ষ। এই সংক্ষিপ্ততাই আসল কথা, এত দীর্ঘ এক জীবন যার একঘেয়েমি আমরা কল্পনাও করতে পারি না, তা আমাদের হাতে দেওয়া হয় এক নিঃশ্বাসে, যাতে চোখে পড়ে কষ্ট নয়, বরং সেই অবিচলতা, জাতির আয়ুর চেয়েও দীর্ঘ সময় ফল ছাড়াই ধরে রাখা।"
          },
          {
            "en": "The surah had opened by asking whether people thought they would be left to say we believe and not be tested (29:2 and 29:3). Noah is the long answer. His task was the calling, faithfully kept; the harvest was never his to reckon, and he was not judged by it. For anyone worn down because the good they do seems to change nothing, the measure here is not the yield but the staying, and the timing of any fruit belongs to God.",
            "bn": "সূরাটি শুরু হয়েছিল এই প্রশ্ন দিয়ে, মানুষ কি ভেবেছিল তারা শুধু আমরা ঈমান এনেছি বলেই ছাড় পেয়ে যাবে, পরীক্ষা ছাড়াই (২৯:২ ও ২৯:৩)। নূহ (আঃ) সেই প্রশ্নের দীর্ঘ জবাব। তাঁর কাজ ছিল বিশ্বস্তভাবে ডেকে যাওয়া, ফসল গোনা কখনো তাঁর দায় ছিল না, আর তা দিয়ে তাঁকে বিচারও করা হয়নি। যে কেউ ক্লান্ত, কারণ তার ভালো কাজ যেন কিছুই বদলাচ্ছে না, তার জন্য এখানে মাপকাঠি ফলন নয়, লেগে থাকা, আর যেকোনো ফলের সময় আল্লাহর হাতে।"
          },
          {
            "en": "Ibn Umar drew a sober lesson from the number. Asked how long Noah stayed among his people, he gave the Qur'an's figure and then said that people have not ceased to decline, in their lifespans, in their understanding, and in their character, down to this very day. The long life was not only a measure of Noah's endurance; it marked an older and sturdier world than ours. Set beside it, our short spans ask to be spent with more care, not less, since so little is now given.",
            "bn": "ইবন উমর সংখ্যাটা থেকে এক গম্ভীর শিক্ষা টেনেছেন। নূহ (আঃ) তাঁর সম্প্রদায়ের মাঝে কতকাল ছিলেন জিজ্ঞেস করা হলে তিনি কুরআনের সংখ্যাটা বলেন, তারপর বলেন, মানুষ কমতে কমতে চলেছে, তাদের আয়ুতে, তাদের বোধে আর তাদের চরিত্রে, এই আজকের দিন পর্যন্ত। দীর্ঘ জীবন শুধু নূহ (আঃ)-এর সহনশীলতার মাপ ছিল না, তা চিহ্নিত করত আমাদের চেয়ে পুরোনো আর মজবুত এক জগৎকে। তার পাশে রাখলে আমাদের ছোট আয়ু দাবি করে আরও যত্ন নিয়ে কাটানো, কম নয়, কারণ এখন এত অল্পই দেওয়া হয়।"
          }
        ]
      }
    ]
  },
  "29:20": {
    "sections": [
      {
        "h": {
          "en": "Told to Go and See",
          "bn": "যাও, গিয়ে দেখ"
        },
        "p": [
          {
            "en": "The verse just before this one asks a question: have they not considered how Allah begins creation, then repeats it (29:19)? That is put to the mind, as something they should already have noticed. Verse 20 does not repeat the question. It gives an order, and the order is to the body: say, travel through the land, then look at how He began creation. At-Tabari reads it as Allah telling the Prophet (ﷺ) to say this to those who deny the resurrection after death, the people who reject reward and punishment.",
            "bn": "এর ঠিক আগের আয়াতটি একটি প্রশ্ন তোলে: তারা কি দেখে না আল্লাহ কীভাবে সৃষ্টির সূচনা করেন, অতঃপর তার পুনরাবৃত্তি ঘটান (২৯:১৯)? এ প্রশ্ন মনের উদ্দেশে, যেন এ জিনিস তাদের আগেই লক্ষ করা উচিত ছিল। ২০ নম্বর আয়াত কিন্তু প্রশ্নটা আবার করে না। এটি একটা হুকুম দেয়, আর হুকুমটা শরীরের উদ্দেশে: বল, পৃথিবীতে ভ্রমণ কর, অতঃপর লক্ষ কর তিনি কীভাবে সৃষ্টির সূচনা করেছেন। তাবারী বলেন, আল্লাহ নবী ﷺ-কে বলছেন মৃত্যুর পর পুনরুত্থান অস্বীকারকারীদের, যারা পুরস্কার ও শাস্তি মানে না, তাদের এ কথা বলতে।"
          },
          {
            "en": "The difference is the whole point. A rhetorical question can be brushed aside, and a man can decide he has thought about it enough. A command to walk out and see cannot be answered from an armchair. The proof Allah offers for the life to come is not a clever argument kept indoors. It is spread across the earth, and the only way to take it in is to move through the earth with the eyes open. Faith here begins at the feet.",
            "bn": "এ পার্থক্যটাই আসল কথা। মুখের প্রশ্ন উড়িয়ে দেওয়া যায়, মানুষ ভাবতে পারে সে যথেষ্ট ভেবে নিয়েছে। কিন্তু উঠে গিয়ে দেখে আসার হুকুম ঘরে বসে মেটানো যায় না। পরকালের পক্ষে আল্লাহ যে প্রমাণ দেন তা কোনো চালাক যুক্তি নয় যা ঘরের ভেতরেই থেকে যায়। তা ছড়িয়ে আছে গোটা পৃথিবী জুড়ে, আর তা বুঝে নেওয়ার একমাত্র পথ পৃথিবীতে ঘুরে বেড়ানো আর চোখ খোলা রাখা। এখানে ঈমানের শুরু পায়ে হেঁটে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the First Proves",
          "bn": "প্রথমটাই শেষের প্রমাণ"
        },
        "p": [
          {
            "en": "Travel and look at how He began creation; then Allah brings forth the final creation. The argument packed into that one sentence is simple and old. At-Tabari puts it plainly: as Allah brought things into being at the start, and originating them was not beyond Him, so bringing them back is not beyond Him either. Al-Muyassar gives the same reasoning in almost the same words. The first act is placed in front of the eyes precisely because it settles the question of the second.",
            "bn": "ভ্রমণ কর আর দেখ তিনি কীভাবে সৃষ্টির সূচনা করেছেন, অতঃপর আল্লাহ পরবর্তী সৃষ্টি গড়ে তুলবেন। এই এক বাক্যে ভরে দেওয়া যুক্তিটা সহজ আর পুরনো। তাবারী সোজা কথায় বলেন, আল্লাহ যেমন শুরুতে সব কিছু অস্তিত্বে এনেছিলেন আর তা সূচনা করা তাঁর পক্ষে কঠিন ছিল না, তেমনি তা ফিরিয়ে আনাও তাঁর পক্ষে কঠিন নয়। মুয়াসসার প্রায় একই শব্দে একই যুক্তি দেয়। প্রথম কাজটা চোখের সামনে রাখা হয়েছে ঠিক এ কারণেই, কারণ তা দ্বিতীয়টার প্রশ্ন মীমাংসা করে দেয়।"
          },
          {
            "en": "Ma'arif al-Qur'an sharpens the edge of it. The Makkans being addressed already granted that Allah had made the universe; what they denied was that He could do it again. Yet repeating a thing, Ma'arif notes, is easier than making it the first time, not harder. It is strange, it says, to concede the greater act and balk at the lesser. The verse does not ask them to believe something new. It asks them to be consistent with what they already believe.",
            "bn": "মাআরিফুল কুরআন কথাটার ধারটা আরও তীক্ষ্ণ করে। যাদের সম্বোধন করা হচ্ছিল সেই মক্কাবাসীরা এটা মানত যে আল্লাহই বিশ্বজগত বানিয়েছেন, তারা অস্বীকার করত শুধু এটাই যে তিনি আবার তা করতে পারেন। অথচ কোনো জিনিস আবার বানানো, মাআরিফ বলে, প্রথমবার বানানোর চেয়ে সহজ, কঠিন নয়। বড় কাজটা মেনে নিয়ে ছোট কাজটায় আটকে যাওয়া অদ্ভুত। আয়াত তাদের নতুন কিছু বিশ্বাস করতে বলছে না। যা তারা আগেই বিশ্বাস করে, তার সঙ্গে সঙ্গতি রাখতে বলছে।"
          },
          {
            "en": "The sentence even marks the two creations with two tenses. How He began creation is in the past: it is done, finished, there to be seen. Then Allah produces the final creation is left open to what is still coming. The verb badaʾa looks back at a settled fact; yunshiʾu looks forward to a promise. The order of the words carries the argument. The eye is sent first to what has already happened, so that the mind will trust what has not yet happened.",
            "bn": "বাক্যটি এমনকি দুই সৃষ্টিকে দুই কালে চিহ্নিত করে। 'তিনি কীভাবে সৃষ্টির সূচনা করেছেন' কথাটা অতীত কালে, কাজ হয়ে গেছে, শেষ, দেখার জন্য সামনেই আছে। আর 'আল্লাহ পরবর্তী সৃষ্টি গড়ে তুলবেন' কথাটা যা এখনো আসছে তার জন্য খোলা রাখা। বাদাআ ক্রিয়া পেছনে এক মীমাংসিত সত্যের দিকে তাকায়, ইউনশিউ সামনে এক প্রতিশ্রুতির দিকে। শব্দের ক্রমই যুক্তিটা বহন করে। চোখকে আগে পাঠানো হয় যা ঘটে গেছে তার দিকে, যেন মন যা এখনো ঘটেনি তাকে বিশ্বাস করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Naming the Last Creation",
          "bn": "শেষ সৃষ্টির নাম"
        },
        "p": [
          {
            "en": "The phrase an-nashʾa al-ākhira, the final or latter origination, is read by the commentators with one voice as the resurrection. At-Tabari records Qatada glossing it as the raising after death, and Ibn Abbas (RA) calling it the life after death, which is an-nushūr, the rising. Ibn Kathir, in Arabic, says simply: the Day of Resurrection. There is no real dispute here to keep open. The weight of the tradition sits in one place, and it is worth saying so plainly.",
            "bn": "আন-নাশআতুল আখিরা, অর্থাৎ শেষ বা পরবর্তী সৃষ্টি, এ শব্দটিকে তাফসীরকারেরা একসুরে পুনরুত্থান হিসেবেই পড়েন। তাবারী কাতাদার বরাতে এনেছেন, এর অর্থ মৃত্যুর পর উত্থান; আর ইবন আব্বাস (রাঃ) একে বলেন মৃত্যুর পরের জীবন, যা হলো আন-নুশূর, পুনরায় জেগে ওঠা। ইবন কাসীর আরবি তাফসীরে সোজা বলেন: কিয়ামতের দিন। এখানে খোলা রাখার মতো সত্যিকারের কোনো মতভেদ নেই। বর্ণনার ভার একটি জায়গাতেই, আর এটা সোজাসুজি বলে দেওয়ারই দরকার।"
          },
          {
            "en": "As-Sa'di defines it from the other side. This last origination, he says, is the one that admits no death and no sleep. The first creation is a world of beginnings and endings, of waking and dying; the final one is only permanence, abiding forever in one of the two abodes. Naming it that way keeps the two creations distinct. The present world argues for the next, but it is not a sample of it. What comes is of a different and lasting kind.",
            "bn": "সাদী অন্য দিক থেকে একে সংজ্ঞায়িত করেন। এই শেষ সৃষ্টি, তিনি বলেন, এমন এক সৃষ্টি যেখানে মৃত্যু নেই, ঘুমও নেই। প্রথম সৃষ্টি শুরু আর শেষের জগত, জেগে ওঠা আর মরে যাওয়ার জগত। শেষ সৃষ্টি কেবল স্থায়িত্ব, দুই ঠিকানার কোনো একটিতে চিরকাল থাকা। এভাবে নাম দিলে দুই সৃষ্টি আলাদা থাকে। এই দুনিয়া পরের জীবনের পক্ষে সাক্ষ্য দেয়, তবে তা পরের জীবনের নমুনা নয়। যা আসছে তা ভিন্ন আর স্থায়ী এক ধরনের।"
          },
          {
            "en": "Both al-Qurtubi and al-Baghawi pause on a small point of recitation here. The Meccan reciter Ibn Kathir and Abu ʿAmr read the word as an-nashāʾa, the second syllable lengthened; the other reciters read an-nashʾa, shorter. Al-Baghawi likens the pair to al-raʾfa and al-raʾāfa, two forms of the one word. The meaning does not change between them. It is the kind of detail the commentators preserve because the text was received with care, down to the length of a single vowel.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই এখানে পড়ার একটা ছোট বিষয়ে থামেন। মক্কার ক্বারী ইবন কাসীর আর আবু আমর শব্দটি পড়েন আন-নাশাআ, দ্বিতীয় অক্ষরটি টেনে। অন্য ক্বারীরা পড়েন আন-নাশআ, ছোট করে। বাগাভী এ জোড়াটিকে তুলনা করেন আর-রাফা আর আর-রাআফার সঙ্গে, এক শব্দেরই দুই রূপ। এতে অর্থের কোনো বদল হয় না। এ ধরনের খুঁটিনাটি তাফসীরকারেরা রক্ষা করেন কারণ কুরআন গ্রহণ করা হয়েছে যত্নের সঙ্গে, এমনকি একটা স্বরের দৈর্ঘ্য পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Forms and Old Ruins",
          "bn": "জীবন্ত সৃষ্টি আর পুরনো ধ্বংসস্তূপ"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens the command to look in two directions at once. Look, he says, at how He began creation in all its multitude, the differences of forms, of tongues, of colours, of natures. The sheer variety of living things is half of the evidence. The maker of so many kinds, each coming to be in its own way, is plainly able to make them again.",
            "bn": "কুরতুবী দেখার হুকুমটাকে একসঙ্গে দুই দিকে খুলে দেন। দেখ, তিনি বলেন, তিনি কীভাবে সৃষ্টির সূচনা করেছেন তার সমস্ত প্রাচুর্যে, আকৃতির ভিন্নতায়, ভাষার, রঙের আর স্বভাবের ভিন্নতায়। জীবন্ত জিনিসের এই বিপুল বৈচিত্র্য প্রমাণের এক অর্ধেক। এত রকমের সৃষ্টি যিনি বানান, প্রতিটি নিজের মতো করে অস্তিত্বে আসে, তিনি যে আবার বানাতে পারেন তা স্পষ্ট।"
          },
          {
            "en": "Then al-Qurtubi turns the gaze elsewhere: look at the dwellings of the generations that have passed, their homes and their traces, how He destroyed them, so that by this you may know the perfection of Allah's power. Al-Baghawi reads the verse the same way, telling the reader to look at their dwellings and their ruins. The command to see how creation began takes in the broken walls of the dead as readily as the newborn and the sprouting field.",
            "bn": "এরপর কুরতুবী দৃষ্টি ঘুরিয়ে দেন অন্যদিকে: দেখ অতীত প্রজন্মের বাসস্থান, তাদের ঘরবাড়ি আর চিহ্ন, তিনি কীভাবে তাদের ধ্বংস করেছেন, যেন এর মধ্য দিয়ে তোমরা আল্লাহর ক্ষমতার পূর্ণতা জানতে পার। বাগাভী আয়াতটি একইভাবে পড়েন, পাঠককে বলেন তাদের বাসস্থান আর ধ্বংসস্তূপের দিকে তাকাতে। সৃষ্টি কীভাবে শুরু হলো তা দেখার হুকুম নবজাতক আর গজিয়ে ওঠা ফসলের মতো সহজেই মৃতদের ভাঙা দেয়ালকেও ধরে নেয়।"
          },
          {
            "en": "So the looking the verse asks for has both a living face and a ruined one. The living world shows a power still at work; the ruins show that power bringing things to an end and able to begin them over. Some commentators heard in \"how creation began\" an invitation to read the earth itself, its layered remains and old settlements. The verse does not spell out a method. It tells the eye where to turn and trusts it to draw the conclusion.",
            "bn": "তাই আয়াত যে দেখা চায় তার একটা জীবন্ত চেহারা আছে, একটা ধ্বংসের চেহারাও আছে। জীবন্ত জগত দেখায় এক ক্ষমতা যা এখনো সচল, ধ্বংসস্তূপ দেখায় সেই ক্ষমতা জিনিসকে শেষ করে দিতে পারে, আবার নতুন করে শুরুও করতে পারে। কোনো কোনো তাফসীরকার 'সৃষ্টি কীভাবে শুরু হলো' কথাটায় শুনেছেন পৃথিবীটাকেই পড়ার ডাক, তার স্তরে স্তরে জমা থাকা চিহ্ন আর পুরনো জনপদ। আয়াত কোনো পদ্ধতি বলে দেয় না। চোখকে কোন দিকে ফেরাতে হবে তা বলে দেয়, আর সিদ্ধান্ত টেনে নেওয়ার ভার চোখের উপরেই ছাড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dying and Rising Each Night",
          "bn": "প্রতি রাতে মরা আর বাঁচা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the command to travel as belonging to the body and the heart together. Go through the land, he says, and you will find peoples and animals coming into being bit by bit, plants and trees appearing season after season, clouds and winds forever renewing themselves. Creation, on his reading, is never finished and set aside. It is always at once beginning and being repeated, in front of anyone who cares to watch.",
            "bn": "সাদী ভ্রমণের হুকুমটাকে শরীর আর অন্তর দুইয়েরই কাজ হিসেবে পড়েন। পৃথিবীতে ঘুরে বেড়াও, তিনি বলেন, আর দেখবে মানুষ আর পশুপাখি একটু একটু করে অস্তিত্বে আসছে, গাছপালা ঋতুর পর ঋতু জন্ম নিচ্ছে, মেঘ আর বাতাস অবিরাম নিজেকে নতুন করছে। তাঁর পড়ায় সৃষ্টি কখনো শেষ হয়ে একপাশে সরে যায় না। যে দেখতে চায় তার চোখের সামনেই তা একসঙ্গে শুরু হচ্ছে আর বারবার ফিরছে।"
          },
          {
            "en": "Then he brings the argument indoors, to the bed. Look at people in their lesser death, he says, which is sleep. Night falls, their movements still, their voices cut off, and they lie in their beds like the dead. They stay so the whole night, until dawn splits open and they wake from their sleep as if raised from dying, saying: praise be to Allah who gave us life after He made us die, and to Him is the rising. A resurrection is rehearsed every morning.",
            "bn": "তারপর তিনি যুক্তিটাকে ঘরে এনে বিছানায় নামান। মানুষকে তার ছোট মৃত্যুতে দেখ, তিনি বলেন, যা হলো ঘুম। রাত নামে, তাদের নড়াচড়া থেমে যায়, গলার আওয়াজ বন্ধ হয়, আর তারা বিছানায় পড়ে থাকে মৃতের মতো। সারা রাত এভাবেই থাকে, যতক্ষণ না ভোর ফেটে ওঠে আর তারা ঘুম থেকে জেগে ওঠে যেন মৃত্যু থেকে উঠে, বলতে বলতে: সমস্ত প্রশংসা আল্লাহর, যিনি মৃত্যুর পর আমাদের জীবন দিলেন, আর তাঁরই কাছে উত্থান। প্রতিটি সকালে একটা পুনরুত্থানের মহড়া হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Bone That Remains",
          "bn": "যে হাড়টি থেকে যায়"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith directly to it, so what follows is a sound narration on the resurrection in general, not a report the mufassirūn tie to these words. Sahih al-Bukhari records that the Prophet (ﷺ) said that between the two blowings of the trumpet there is forty; when Abu Hurayra (RA) was pressed on whether this meant days, months, or years, he declined to say.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীরই সরাসরি এর সঙ্গে কোনো হাদীস জুড়ে দেয় না, তাই নিচে যা আসছে তা পুনরুত্থান নিয়ে সাধারণভাবে একটি সহীহ বর্ণনা, এ শব্দগুলোর সঙ্গে তাফসীরকারদের বেঁধে দেওয়া কোনো বর্ণনা নয়। সহীহ বুখারীতে এসেছে, নবী ﷺ বলেছেন দুই ফুঁৎকারের মাঝে চল্লিশ। আবু হুরায়রা (রাঃ)-কে যখন চাপ দেওয়া হলো এর অর্থ দিন, মাস নাকি বছর, তিনি বলতে চাইলেন না।"
          },
          {
            "en": "The narration continues: then Allah sends down water from the sky, and the dead grow as plants grow. Nothing of a person decays away except one bone, the little bone at the base of the spine, and from it the whole creation is put together again on the Day of Resurrection. Being in Bukhari's collection, it carries his grading of soundness. It fills out the bare claim of the verse with an image: the self is not scattered past recall, for the seed of it is kept.",
            "bn": "বর্ণনাটি চলতে থাকে: এরপর আল্লাহ আকাশ থেকে পানি নামান, আর মৃতেরা গাছপালার মতো গজিয়ে ওঠে। মানুষের কিছুই পচে নিঃশেষ হয় না একটি হাড় ছাড়া, মেরুদণ্ডের গোড়ার সেই ছোট হাড়টি, আর তা থেকেই কিয়ামতের দিন গোটা সৃষ্টি আবার জোড়া লাগানো হয়। বুখারীর সংকলনে থাকায় এটি তাঁর সহীহ হওয়ার মান বহন করে। আয়াতের শুকনো দাবিটাকে এটি একটা ছবি দিয়ে ভরে দেয়: মানুষের সত্তা এমনভাবে ছড়িয়ে যায় না যে আর ফেরানো যাবে না, কারণ তার বীজটুকু রেখে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Honest Kind of Looking",
          "bn": "সৎভাবে দেখা"
        },
        "p": [
          {
            "en": "It is tempting to press this verse into service as a proof for whatever a given age finds impressive, and to read \"see how He began creation\" as a licence to make the Qur'an predict the findings of a laboratory. The commentators do not go there. They point to what any traveller could see in their own day: the spread of living kinds, the ruins of vanished peoples, the turn of sleep into waking. The looking is real, but it is looking, not a theory to be defended.",
            "bn": "এ আয়াতকে টেনে এনে যে যুগ যা দেখে চমকপ্রদ তারই প্রমাণ বানিয়ে ফেলা, আর 'দেখ তিনি কীভাবে সৃষ্টি শুরু করেছেন' কথাটাকে ল্যাবরেটরির আবিষ্কার কুরআন আগেই বলে দিয়েছে বলে পড়ার লোভ হয়। তাফসীরকারেরা সেদিকে যান না। তারা দেখান যা যেকোনো পথিক তাদের নিজের যুগেই দেখতে পেত: জীবন্ত প্রজাতির ছড়িয়ে পড়া, বিলীন জাতিদের ধ্বংসস্তূপ, ঘুম থেকে জেগে ওঠার পালা। দেখাটা সত্যি, তবে তা দেখাই, কোনো তত্ত্ব নয় যা আঁকড়ে রাখতে হবে।"
          },
          {
            "en": "What the verse asks is humbler and harder than proof-texting. It asks a person to go and attend to the world as a made thing, and to let the plain fact of its beginning speak to the question of its end. Ibn Kathir, in his English commentary, lists what there is to contemplate: the heavens with their stars, the earth with its mountains and valleys, its trees and rivers and seas, all of it pointing back to a Maker who says to a thing be, and it is. The discipline is attention, not cleverness.",
            "bn": "আয়াত যা চায় তা প্রমাণ খুঁজে বেড়ানোর চেয়ে নম্র, আবার কঠিনও। তা মানুষকে বলে গিয়ে পৃথিবীকে একটা বানানো জিনিস হিসেবে মন দিয়ে দেখতে, আর তার শুরু হওয়ার সাদামাটা সত্যটাকে তার শেষের প্রশ্নে কথা বলতে দিতে। ইবন কাসীর তাঁর ইংরেজি তাফসীরে সাজিয়ে দেন কী কী ভেবে দেখার আছে: তারকাভরা আকাশ, পাহাড় আর উপত্যকার পৃথিবী, তার গাছ, নদী আর সাগর, সবই ইঙ্গিত করে এমন এক স্রষ্টার দিকে যিনি কোনো জিনিসকে বলেন হও, আর তা হয়ে যায়। শৃঙ্খলাটা মনোযোগের, চালাকির নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Competent, So Certain",
          "bn": "ক্ষমতাবান, তাই নিশ্চিত"
        },
        "p": [
          {
            "en": "The verse closes: indeed Allah is competent over all things. At-Tabari reads the power here as the power to bring back the whole of creation after its passing, just as it was before, and to do whatever else He wills; nothing He intends defeats Him. As-Sa'di draws the lesser-from-greater once more: since that power was equal to the first creation, it is all the more equal to the second. The ending is not decoration. It is the premise the whole argument rested on.",
            "bn": "আয়াত শেষ হয়: নিশ্চয় আল্লাহ সব কিছুর উপর ক্ষমতাবান। তাবারী এখানে এই ক্ষমতাকে পড়েন গোটা সৃষ্টিকে তার বিলয়ের পর আবার ফিরিয়ে আনার ক্ষমতা হিসেবে, ঠিক যেমন তা আগে ছিল, আর তিনি যা চান তা-ও করার ক্ষমতা; তিনি যা ইচ্ছা করেন কোনো কিছুই তাঁকে হারাতে পারে না। সাদী আবারও সেই বড় থেকে ছোটর যুক্তি টানেন: সেই ক্ষমতা যখন প্রথম সৃষ্টির সমান ছিল, দ্বিতীয়টার জন্য তা আরও বেশি করে যথেষ্ট। এই শেষ অংশটা সাজসজ্জা নয়। গোটা যুক্তি যার উপর দাঁড়িয়ে ছিল এটাই সেই ভিত্তি।"
          },
          {
            "en": "For anyone who takes the command seriously, the order of the verse is also an order for the heart. First the feet move and the eyes open; then the mind concedes what it has seen; then certainty about the last day settles in, carried not by argument alone but by a world full of beginnings. The resurrection stops being a doctrine to assent to and becomes something the earth has been showing all along. Travel, look, and let the first creation teach you the last.",
            "bn": "যে মানুষ হুকুমটাকে গুরুত্বে নেয়, তার জন্য আয়াতের ক্রমটাও অন্তরের জন্য এক ক্রম। প্রথমে পা চলে আর চোখ খোলে, তারপর মন যা দেখেছে তা মেনে নেয়, তারপর শেষ দিন নিয়ে নিশ্চয়তা থিতু হয়, শুধু যুক্তির জোরে নয়, শুরুতে ভরা এক পৃথিবীর হাত ধরে। পুনরুত্থান তখন আর মেনে নেওয়ার মতবাদ থাকে না, হয়ে ওঠে এমন কিছু যা পৃথিবী এতকাল ধরে দেখিয়ে আসছিল। ভ্রমণ কর, দেখ, আর প্রথম সৃষ্টিকে শেষ সৃষ্টির পাঠ দিতে দাও।"
          }
        ]
      }
    ]
  },
  "29:25": {
    "sections": [
      {
        "h": {
          "en": "His Word After the Rescue",
          "bn": "আগুনের পর তাঁর কথা"
        },
        "p": [
          {
            "en": "These words come straight after the fire. Ibrahim's (AS) people had answered his preaching by trying to kill or burn him, and Allah saved him from the flames, as 29:24 records. He does not answer their violence with violence. He turns back to them and reopens the argument they thought they had closed, naming plainly what their idols are and are not. The man they had tried to burn stands and reasons with them again, and the first thing he does is strip the worship they shared of the dignity of the word god.",
            "bn": "এই কথাগুলো আসে আগুনের ঠিক পরে। ইবরাহীম (আঃ)-এর দাওয়াতের জবাবে তাঁর সম্প্রদায় তাঁকে হত্যা বা অগ্নিদগ্ধ করতে চেয়েছিল, আর আল্লাহ তাঁকে সেই আগুন থেকে রক্ষা করলেন, যেমন ২৯:২৪ আয়াত জানায়। তিনি তাদের সহিংসতার জবাব সহিংসতায় দেন না। তিনি আবার তাদের দিকে ফেরেন, আর যে তর্ক তারা বন্ধ হয়ে গেছে ভেবেছিল তা আবার খুলে বসেন। তিনি সোজাসুজি বলে দেন, তাদের প্রতিমাগুলো আসলে কী আর কী নয়। যাকে তারা পোড়াতে চেয়েছিল, সে দাঁড়িয়ে আবার তাদের সঙ্গে যুক্তি করে, আর প্রথমেই তাদের সেই যৌথ পূজা থেকে উপাস্য শব্দটার মর্যাদা কেড়ে নেয়।"
          },
          {
            "en": "The verse opens with innama, a word of restriction: only, and nothing more. You have taken, apart from Allah, mere idols. Ibn Kathir reads the line as a rebuke and a reproach for the evil of their deed, their worship of carved things. The point is not yet the punishment; it is the diagnosis. Whatever these objects meant to them, they were never gods, and the single word innama has already said so before the sentence goes on to name what they really were instead.",
            "bn": "আয়াত শুরু হয় ইন্নামা দিয়ে, যা সীমাবদ্ধতার শব্দ, অর্থ কেবল, এর বেশি কিছু নয়। তোমরা আল্লাহকে বাদ দিয়ে নিছক কিছু প্রতিমাকে গ্রহণ করেছ। ইবন কাসীর আয়াতটিকে পড়েন তাদের মন্দ কাজের, অর্থাৎ খোদাই-করা জিনিসের পূজার জন্য এক ভর্ৎসনা ও তিরস্কার হিসেবে। এখানে এখনো শাস্তির কথা নয়, কথা হলো আসল রূপটা ধরিয়ে দেওয়া। এই বস্তুগুলো তাদের কাছে যা-ই অর্থ বহন করুক, ওগুলো কখনো উপাস্য ছিল না। বাক্যটি ওগুলো আসলে কী ছিল তা বলার আগেই ইন্নামা শব্দটি সে কথা বলে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reading That Divides",
          "bn": "কিরাআতে মতভেদ"
        },
        "p": [
          {
            "en": "At-Tabari records that the reciters differed over mawaddata baynikum, and sets out three ways of reading it. In the first the word carries a double accusative, mawaddatan baynakum, affection standing as a second object of the verb. In the second it stays accusative but is joined to what follows, mawaddata baynikum. In the third it is read in the nominative, mawaddatu baynikum. The consonants are the same; only the vowels, and with them the grammar, change, and each shift turns the sentence slightly on its axis.",
            "bn": "তাবারী জানান, মাওয়াদ্দাতা বাইনিকুম পড়া নিয়ে ক্বারীদের মধ্যে মতভেদ ছিল, আর তিনি এর তিনটি পাঠ তুলে ধরেন। প্রথম পাঠে শব্দটি দুই জায়গাতেই নাসব হয়, মাওয়াদ্দাতান বাইনাকুম, যেখানে ভালবাসা ক্রিয়ার দ্বিতীয় কর্ম হিসেবে বসে। দ্বিতীয় পাঠে তা নাসবেই থাকে, কিন্তু পরের শব্দের সঙ্গে ইজাফতে যুক্ত হয়, মাওয়াদ্দাতা বাইনিকুম। তৃতীয় পাঠে তা রফ হয়, মাওয়াদ্দাতু বাইনিকুম। ব্যঞ্জনগুলো এক, বদলায় কেবল স্বর, আর তার সঙ্গে বদলায় ব্যাকরণ, আর প্রতিটি বদল বাক্যটিকে সামান্য করে ঘুরিয়ে দেয়।"
          },
          {
            "en": "Al-Qurtubi dwells on the accusative reading and gives it a clear sense. Taken as a causal object, the kind grammarians call maf'ul li-ajlih, the line says: you took these idols for the sake of the affection between you, as a man says I came to you seeking good. On this reading the idols are the means and the affection is the motive. You did not really want the stones; you wanted the belonging that gathering around them bought you in the life of this world, and the idols were simply where the belonging was kept.",
            "bn": "কুরতুবী নাসব পাঠটির উপর থামেন আর তাকে একটি স্পষ্ট অর্থ দেন। একে কারণবাচক কর্ম ধরলে, ব্যাকরণবিদেরা যাকে মাফউল লি-আজলিহ বলেন, আয়াতের অর্থ দাঁড়ায়, তোমরা এই প্রতিমাগুলোকে গ্রহণ করেছ তোমাদের পারস্পরিক ভালবাসার খাতিরে, যেমন কেউ বলে আমি কল্যাণের আশায় তোমার কাছে এলাম। এই পাঠে প্রতিমা হলো উপায়, আর ভালবাসাই আসল উদ্দেশ্য। তোমরা আসলে পাথর চাওনি, চেয়েছিলে সেই দলবদ্ধতা, যা ওগুলোর চারপাশে জড়ো হয়ে দুনিয়ার জীবনে তোমরা কিনে নিয়েছিলে, আর প্রতিমা ছিল নিছক সেই দলবদ্ধতা জমা রাখার জায়গা।"
          },
          {
            "en": "Al-Baghawi preserves the nominative reading and the different sense it yields. Here innama splits into inna plus ma meaning that which, so the line says: that which you took, apart from Allah, as idols is only an affection between you in the life of this world, then it is cut off and brings no benefit in the Hereafter. Now the idols are not a means to the bond; they simply are the bond, a passing fondness dressed up as religion. At-Tabari, having laid out the readings, judges them close in meaning and all sound, and takes no side. This article keeps both.",
            "bn": "বাগভী রফ পাঠটি আর তা থেকে বেরিয়ে আসা ভিন্ন অর্থটি ধরে রাখেন। এখানে ইন্নামা ভেঙে হয় ইন্না আর মা, অর্থ 'যা', ফলে আয়াতের অর্থ দাঁড়ায়, আল্লাহকে বাদ দিয়ে প্রতিমা হিসেবে তোমরা যা গ্রহণ করেছ তা দুনিয়ার জীবনে তোমাদের মধ্যকার নিছক এক ভালবাসা, তারপর তা ছিন্ন হয়ে যায় আর আখিরাতে কোনো কাজে আসে না। এখানে প্রতিমা বাঁধনের উপায় নয়, ওগুলোই বাঁধন, ধর্মের মোড়কে পরানো এক ক্ষণস্থায়ী মায়া। তাবারী পাঠগুলো সাজিয়ে রেখে রায় দেন, এগুলো অর্থে কাছাকাছি আর সবই শুদ্ধ, আর কোনো পক্ষ নেন না। এ লেখা দুটোই রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bond That Looks Like Love",
          "bn": "ভালবাসার মোড়কে বাঁধন"
        },
        "p": [
          {
            "en": "Beneath the grammar the commentators agree on the lived picture. At-Tabari describes a people who love each other over worshipping their idols and grow fond of each other in serving them, so that the shared cult becomes the thread that ties them together. Al-Muyassar puts it the same way: they took the false gods as an affection between them, loving each other in their worship and in their service. The idol is less an object of belief than a membership card. To bow where the tribe bows is simply to stay inside the tribe.",
            "bn": "ব্যাকরণের নিচে তাফসীরকারেরা বাস্তব ছবিটায় একমত। তাবারী এমন এক সম্প্রদায়ের বর্ণনা দেন, যারা প্রতিমাপূজাকে ঘিরে একে অপরকে ভালবাসে আর ওগুলোর সেবায় পরস্পরের প্রতি টান অনুভব করে, ফলে যৌথ পূজাই হয়ে ওঠে তাদের বেঁধে রাখা সুতো। মুয়াসসার একই কথা বলেন, তারা মিথ্যা উপাস্যগুলোকে নিজেদের মধ্যে ভালবাসার মাধ্যম বানিয়েছিল, পূজায় আর সেবায় একে অপরকে ভালবেসে। প্রতিমা এখানে বিশ্বাসের বস্তুর চেয়ে বেশি যেন সদস্যপদের ছাড়পত্র। গোত্র যেখানে মাথা নোয়ায় সেখানে নোয়ানোই আসলে গোত্রের ভেতরে থেকে যাওয়া।"
          },
          {
            "en": "Ibn Kathir draws out why this felt like love and not like fear. You took these as gods, he has Ibrahim (AS) say, and you come together to worship them so that there is friendship and affection among you in this world. The worship did real social work. It fed the feasts, sealed the marriages, settled the quarrels, and marked off the stranger from the kin. A man who left the idols did not merely change his mind; he walked out of the warmth. That is the quiet power the verse is about to expose and overturn.",
            "bn": "ইবন কাসীর খুলে বলেন, কেন এটিকে ভয় নয়, ভালবাসা বলেই মনে হতো। ইবরাহীম (আঃ)-এর জবানে তিনি আনেন, তোমরা এগুলোকে উপাস্য বানিয়েছ আর এদের পূজায় একত্র হও, যাতে দুনিয়ায় তোমাদের মধ্যে বন্ধুত্ব আর ভালবাসা থাকে। এই পূজা সত্যিকারের সামাজিক কাজ সারত। এটি ভোজ জমাত, বিয়ে পাকা করত, ঝগড়া মেটাত, আর আপন থেকে পরকে আলাদা করত। যে প্রতিমা ছেড়ে যেত, সে কেবল মত বদলাত না, সে বেরিয়ে যেত সেই উষ্ণতা থেকে। এই নিঃশব্দ শক্তিটাই আয়াত এবার ফাঁস করে উল্টে দিতে যাচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Bond Snaps",
          "bn": "বাঁধন যেদিন ছিঁড়ে যায়"
        },
        "p": [
          {
            "en": "Then comes the hinge word, thumma, and after it the Day of Resurrection. The warmth inverts. You will deny each other, the verse says, and Ibn Kathir glosses the denial as this: you will disown whatever passed between you, each refusing to own the bond he once prized. And you will curse each other: the followers cursing the leaders they obeyed, the leaders cursing the followers who flattered them. The same mouths that praised the shared gods together now turn against each other, and the fellowship of worship becomes a courtroom of blame.",
            "bn": "তারপর আসে মোড় ঘোরানো শব্দ ছুম্মা, আর তার পরেই ক্বিয়ামতের দিন। উষ্ণতা উল্টে যায়। আয়াত বলে, তোমরা একে অপরকে অস্বীকার করবে, আর ইবন কাসীর এই অস্বীকারের ব্যাখ্যা দেন এভাবে, তোমাদের মধ্যে যা কিছু ছিল তা তোমরা অস্বীকার করবে, যে বাঁধনকে এক সময় মূল্য দিয়েছিলে তা কেউ আর নিজের বলে মানতে চাইবে না। আর তোমরা একে অপরকে অভিশাপ দেবে, অনুসারীরা অভিশাপ দেবে সেই নেতাদের যাদের তারা মানত, নেতারা অভিশাপ দেবে সেই অনুসারীদের যারা তোষামোদ করত। যে মুখগুলো একসঙ্গে যৌথ উপাস্যের প্রশংসা করত, সে মুখগুলোই এবার একে অপরের দিকে ফেরে, আর পূজার সঙ্গ হয়ে ওঠে দোষারোপের আদালত।"
          },
          {
            "en": "The commentators tie the scene to two other verses. Ibn Kathir and al-Qurtubi both recall 7:38, where every nation entering the Fire curses the sister nation that went in before it, and 43:67, where close friends on that Day are enemies to each other, except the God-fearing. The pattern is fixed across the Quran: intimacy built on anything but Allah is scheduled to collapse. What looked like the surest thing in the worldly life turns out to be the first thing to betray them the moment the accounts are opened.",
            "bn": "তাফসীরকারেরা দৃশ্যটিকে আরও দুটি আয়াতের সঙ্গে বাঁধেন। ইবন কাসীর ও কুরতুবী দুজনেই স্মরণ করেন ৭:৩৮ আয়াত, যেখানে জাহান্নামে ঢোকা প্রতিটি জাতি তার আগে ঢোকা ভগ্নি-জাতিকে অভিশাপ দেয়, আর ৪৩:৬৭ আয়াত, যেখানে সেদিন অন্তরঙ্গ বন্ধুরা একে অপরের শত্রু, কেবল মুত্তাকীরা ছাড়া। গোটা কুরআনজুড়ে ধরনটা একই, আল্লাহ ছাড়া অন্য কিছুর উপর গড়া অন্তরঙ্গতা ভেঙে পড়ারই নির্ধারিত। দুনিয়ার জীবনে যা সবচেয়ে পাকা মনে হয়েছিল, হিসাব খোলার মুহূর্তে সেটিই সবার আগে বিশ্বাসঘাতকতা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Even the Idols Disown",
          "bn": "প্রতিমারাও মুখ ফিরাবে"
        },
        "p": [
          {
            "en": "As-Sa'di presses the point further: it is not only the worshippers who turn against each other, but the worshipped who turn on them. Each party, he writes, the worshippers and the objects worshipped alike, will disown the other. He points to 46:6, where, when mankind is gathered, the false gods become enemies to their devotees and deny ever having been worshipped at all. Then he asks the question that undoes the whole bargain: how can you cling to something you already know will disown you and curse you on that Day?",
            "bn": "সা'দী কথাটা আরও জোর দিয়ে বলেন, কেবল পূজারিরাই একে অপরের দিকে ফেরে না, যাদের পূজা করা হতো তারাও পূজারিদের দিকে ফেরে। তিনি লেখেন, পূজারি আর পূজিত উভয় পক্ষই একে অপরকে অস্বীকার করবে। তিনি ৪৬:৬ আয়াতের দিকে ইশারা করেন, যেখানে মানুষকে যখন একত্র করা হবে, মিথ্যা উপাস্যরা তাদের ভক্তদের শত্রু হয়ে যাবে আর অস্বীকার করবে যে কখনো তাদের পূজা করা হয়েছিল। তারপর তিনি সেই প্রশ্নটা তোলেন, যা গোটা সওদাটাই ভেঙে দেয়, যাকে তুমি এখনই জানো সে ক্বিয়ামতের দিন তোমাকে অস্বীকার করবে আর অভিশাপ দেবে, তাকে আঁকড়ে ধরো কী করে?"
          },
          {
            "en": "Al-Qurtubi notes who the warning of the Fire addresses: the idol-worshippers together, leaders and followers alike. And he adds that the idols themselves are swept in, citing 21:98, you and what you worship apart from Allah are fuel for Hell. The stones that could not feed a single friendship in this life cannot shield a single soul in the next. Your refuge, the verse closes, is the Fire, and there are no helpers, nobody at all to step in between the worshipper and the punishment he chose for himself.",
            "bn": "কুরতুবী লক্ষ করেন, আগুনের এই হুঁশিয়ারি কাদের উদ্দেশে, প্রতিমাপূজারিদের সবাইকে, নেতা আর অনুসারী উভয়কে। তিনি আরও যোগ করেন, প্রতিমাগুলো নিজেরাও এর মধ্যে এসে পড়ে, আর উদ্ধৃত করেন ২১:৯৮ আয়াত, তোমরা আর আল্লাহকে বাদ দিয়ে তোমরা যাদের পূজা করো, সবাই জাহান্নামের ইন্ধন। যে পাথর দুনিয়ায় একটি বন্ধুত্বও বাঁচাতে পারেনি, তা আখিরাতে একটি প্রাণকেও আড়াল করতে পারবে না। আয়াত শেষ হয়, তোমাদের ঠিকানা জাহান্নাম, আর কোনো সাহায্যকারী নেই, পূজারি আর তার নিজের বেছে নেওয়া শাস্তির মাঝে দাঁড়ানোর মতো কেউ নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Love That Survives",
          "bn": "যে ভালবাসা টিকে থাকে"
        },
        "p": [
          {
            "en": "At-Tabari preserves a line from Qatada that states the rule exactly: every friendship in the world becomes enmity upon its people on the Day of Resurrection, except the friendship of the God-fearing. The exception is the whole hope of the verse. Affection itself is not condemned; false affection is. A bond can cross into the Hereafter intact, but only if what holds it together is Allah and not a shared idol, a shared appetite, or a shared pride. The question the verse forces is simply which kind of bond a man has been building.",
            "bn": "তাবারী কাতাদা থেকে একটি কথা ধরে রাখেন, যা নিয়মটা হুবহু বলে দেয়, দুনিয়ার প্রতিটি বন্ধুত্ব ক্বিয়ামতের দিন তার মানুষদের উপর শত্রুতায় বদলে যায়, কেবল মুত্তাকীদের বন্ধুত্ব ছাড়া। এই ব্যতিক্রমই আয়াতের গোটা আশা। ভালবাসাকে দোষ দেওয়া হচ্ছে না, দোষ দেওয়া হচ্ছে মিথ্যা ভালবাসাকে। কোনো বাঁধন অক্ষত অবস্থায় আখিরাতে পৌঁছাতে পারে, তবে কেবল তখনই, যখন তাকে বেঁধে রাখে আল্লাহ, কোনো যৌথ প্রতিমা বা যৌথ লালসা বা যৌথ অহংকার নয়। আয়াত যে প্রশ্নটা জোর করে সামনে আনে তা সোজা, মানুষ এতদিন কোন ধরনের বাঁধন গড়ে তুলছিল।"
          },
          {
            "en": "The sound tradition sharpens the contrast. In Sahih al-Bukhari, the Prophet (ﷺ) names, among those Allah will shade on the Day when there is no shade but His, two people who loved each other for Allah's sake, who met upon that and parted upon that. Set that beside Ibrahim's (AS) crowd who loved each other over an idol. The same act, love between people, leads to the shade of the Throne or to mutual cursing, and the whole difference lies in what the love was built upon.",
            "bn": "সহীহ বুখারীর একটি হাদীস এই বৈপরীত্যকে আরও ধারালো করে। নবী ﷺ সেই লোকদের মধ্যে গণনা করেন, যাদের আল্লাহ সেদিন ছায়া দেবেন যেদিন তাঁর ছায়া ছাড়া কোনো ছায়া থাকবে না, এমন দুজন মানুষ যারা আল্লাহর জন্য একে অপরকে ভালবেসেছে, এরই উপর মিলেছে আর এরই উপর বিদায় নিয়েছে। এটিকে পাশে রাখুন ইবরাহীম (আঃ)-এর সেই সম্প্রদায়ের, যারা একটি প্রতিমাকে ঘিরে একে অপরকে ভালবাসত। একই কাজ, মানুষে মানুষে ভালবাসা, কাউকে নিয়ে যায় আরশের ছায়ায়, কাউকে পারস্পরিক অভিশাপে, আর গোটা পার্থক্য লুকিয়ে থাকে ভালবাসাটা কিসের উপর গড়া ছিল তাতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Against No One Alive",
          "bn": "জীবিত কাউকে দাগানো নয়"
        },
        "p": [
          {
            "en": "This has to be said plainly, in both languages. The verse condemns idolatry and the habit of clinging to it, and it describes where a false bond ends. It licenses nothing against any living idol-worshipper, and nothing against any community that worships wrongly today. Notice what Ibrahim (AS) actually does with the truth he holds: he argues. He reasons with the very people who tried to burn him, and in the next verse, 29:26, he emigrates for his Lord rather than raise a hand. The prophet of this passage preaches and departs; he does not harm.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই ভাষাতেই। আয়াত নিন্দা করে প্রতিমাপূজার, আর তাকে আঁকড়ে ধরার অভ্যাসের, আর দেখায় মিথ্যা বাঁধন কোথায় গিয়ে শেষ হয়। এটি জীবিত কোনো প্রতিমাপূজারির বিরুদ্ধে কিছুর অনুমতি দেয় না, আজ ভুলভাবে যারা পূজা করে এমন কোনো জনগোষ্ঠীর বিরুদ্ধেও নয়। খেয়াল করুন, হাতে থাকা সত্য নিয়ে ইবরাহীম (আঃ) আসলে কী করেন, তিনি যুক্তি দেন। যারা তাঁকে পোড়াতে চেয়েছিল তাদের সঙ্গেই তিনি যুক্তি করেন, আর পরের আয়াতে, ২৯:২৬, হাত না তুলে তিনি তাঁর রবের উদ্দেশে দেশত্যাগ করেন। এই অংশের নবী দাওয়াত দেন আর চলে যান, তিনি কারও ক্ষতি করেন না।"
          },
          {
            "en": "So the verse is first a mirror for the reader, not a weapon for the room. It gives nobody the right to brand a present-day neighbour, sect, or nation as the idolaters it describes, or to treat them as Ibrahim's (AS) would-be burners deserved to be treated. The warning is addressed inward: it asks what I have been bowing to for the sake of belonging, and whom I would disown, or be disowned by, if the Day arrived tonight. A truth that gets turned outward as an accusation has been misread at its root.",
            "bn": "তাই আয়াত আগে পাঠকের জন্য আয়না, ঘরের ভেতর ছোড়ার অস্ত্র নয়। এটি কাউকে এ অধিকার দেয় না যে আজকের কোনো প্রতিবেশী, কোনো দল বা কোনো জাতিকে সে এর বর্ণিত মূর্তিপূজারি বলে দাগিয়ে দেবে, কিংবা ইবরাহীম (আঃ)-কে পোড়াতে চাওয়া লোকদের যেমন পাওনা ছিল তেমন আচরণ তাদের সঙ্গে করবে। হুঁশিয়ারিটা ভেতরের দিকে, এটি জিজ্ঞেস করে, দলে থাকার খাতিরে আমি কিসের সামনে মাথা নুইয়ে এসেছি, আর আজ রাতেই সেই দিন এলে আমি কাকে অস্বীকার করতাম, বা কার অস্বীকারের শিকার হতাম। যে সত্য বাইরের দিকে অভিযোগ হয়ে ঘুরে দাঁড়ায়, তা মূলেই ভুল পড়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Bonds Will Last",
          "bn": "কোন বাঁধন টিকবে"
        },
        "p": [
          {
            "en": "Ibrahim's (AS) diagnosis outlives his idols. The stone gods are gone, but the thing they did survives in every bond that rests on something other than Allah. A party that holds together by a common enemy, a friendship sealed by a shared sin, a workplace loyalty that asks you to lie, a crowd whose price of entry is to look away: each of these can feel exactly like love, and each is scheduled for the same reversal. The members warm each other now and will accuse each other then, when the warmth is spent.",
            "bn": "ইবরাহীম (আঃ)-এর ধরিয়ে দেওয়া সত্যটি তাঁর প্রতিমাগুলোর চেয়ে বেশি দিন বাঁচে। পাথরের উপাস্যরা হারিয়ে গেছে, কিন্তু ওগুলো যা করত তা টিকে আছে এমন প্রতিটি বাঁধনে, যা আল্লাহ ছাড়া অন্য কিছুর উপর দাঁড়ানো। অভিন্ন শত্রুকে ঘিরে জোট বাঁধা দল, যৌথ গুনাহে পাকা করা বন্ধুত্ব, মিথ্যা বলতে বলা কর্মস্থলের আনুগত্য, যে ভিড়ে ঢোকার মূল্য হলো চোখ সরিয়ে নেওয়া, এর প্রতিটিকে ঠিক ভালবাসার মতোই লাগতে পারে, আর প্রতিটির জন্যই বরাদ্দ সেই একই উল্টে যাওয়া। সদস্যরা এখন একে অপরকে উষ্ণতা দেয়, আর উষ্ণতা ফুরালে সেদিন একে অপরের বিরুদ্ধে অভিযোগ তুলবে।"
          },
          {
            "en": "The verse hands the reader a single test to run on every loyalty: take Allah out of it, and see whether it still has a floor to stand on. What survives that removal is the friendship of the God-fearing, which the Day turns into shade rather than fire. What collapses was only ever a membership, warm while the dues were paid and worthless when the accounts come due. Ibrahim (AS) offered his people that test while the flames were still cooling. It is a kindness, not a threat, to run it on myself before the Day runs it for me.",
            "bn": "আয়াত পাঠকের হাতে একটি পরীক্ষা তুলে দেয়, প্রতিটি টানের উপর চালানোর মতো, এর ভেতর থেকে আল্লাহকে সরিয়ে নিন, আর দেখুন তা দাঁড়ানোর মতো কোনো ভিত্তি এখনো রাখে কিনা। এই সরিয়ে নেওয়ার পরেও যা টিকে থাকে, তা মুত্তাকীদের বন্ধুত্ব, যাকে সেই দিন আগুন নয়, ছায়ায় বদলে দেয়। যা ভেঙে পড়ে তা কেবলই ছিল এক সদস্যপদ, চাঁদা দেওয়ার দিনগুলোয় উষ্ণ, আর হিসাব চাওয়ার দিনে মূল্যহীন। আগুন তখনো ঠান্ডা হচ্ছে, এরই মধ্যে ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে এই পরীক্ষাটি দিয়েছিলেন। সেই দিন নিজে থেকে চালানোর আগে এটি নিজের উপর চালানো হুমকি নয়, দয়া।"
          }
        ]
      }
    ]
  },
  "29:31": {
    "sections": [
      {
        "h": {
          "en": "After the Prayer, the Answer",
          "bn": "দু'আর পরেই জবাব"
        },
        "p": [
          {
            "en": "Wa-lammā jā'at rusulunā Ibrāhīma bi-l-bushrā: and when Our messengers came to Abraham (AS) with the good tidings. The word rusul here does not mean prophets; at-Tabari reads it as the angels of Allah, and says plainly that it was Allah's angels who spoke to Ibrāhīm these words. Ibn Kathir opens the scene the same way: when Lūṭ (AS) asked his Lord for help against his people, Allah sent angels to answer him. So the verse is an answer. The question was asked one verse earlier, and the reply is already on the road.",
            "bn": "ওয়া লাম্মা জাআত রুসুলুনা ইবরাহীমা বিল-বুশরা: আর যখন আমার দূতগণ সুসংবাদ নিয়ে ইবরাহীম (আঃ)-এর কাছে এলেন। এখানে রুসুল মানে নবীগণ নয়। তাবারী এর অর্থ করেন আল্লাহর ফেরেশতা, আর সাফ জানিয়ে দেন, আল্লাহর ফেরেশতারাই ইবরাহীমকে এ কথাগুলো বলেছিলেন। ইবন কাসীরও দৃশ্যটি একইভাবে শুরু করেন: লূত (আঃ) যখন তাঁর সম্প্রদায়ের বিরুদ্ধে রবের কাছে সাহায্য চাইলেন, আল্লাহ তাঁর জবাবে ফেরেশতা পাঠালেন। তাই এ আয়াত একটি জবাব। প্রশ্নটা করা হয়েছিল এক আয়াত আগে, আর উত্তর তখনই পথে।"
          },
          {
            "en": "But the reply takes a detour. Lūṭ (AS) had prayed in his own town, among his own people, yet the angels do not go to him first. Al-Qurtubi notes that they came to Ibrāhīm (AS) at the outset, bearers of good news, before they ever reached Lūṭ. As-Sa'di says the same: Allah sent them to destroy the wrongdoers, and on the way they passed by Ibrāhīm and gave him glad tidings. The deliverance of one prophet begins as a visit to another, and the town that prayed for rescue is not even the first address on the journey.",
            "bn": "তবে জবাবটা একটু ঘুরপথে আসে। লূত (আঃ) দু'আ করেছিলেন নিজের শহরে, নিজের লোকদের মাঝে, অথচ ফেরেশতারা আগে তাঁর কাছে যান না। কুরতুবী লক্ষ করেন, তাঁরা প্রথমে এলেন ইবরাহীম (আঃ)-এর কাছে, সুসংবাদ নিয়ে, লূতের কাছে পৌঁছানোর আগেই। সা'দীও একই কথা বলেন: আল্লাহ তাঁদের পাঠিয়েছিলেন যালিমদের ধ্বংস করতে, আর পথে তাঁরা ইবরাহীমের কাছে থামলেন, তাঁকে সুসংবাদ দিলেন। এক নবীর মুক্তি শুরু হয় আরেক নবীর ঘরে পা রেখে। যে জনপদ উদ্ধারের জন্য দু'আ করেছিল, সফরের প্রথম ঠিকানাও সে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "News of a Son",
          "bn": "একটি পুত্রের খবর"
        },
        "p": [
          {
            "en": "The bushrā, the good tidings, has a definite content, and the commentators are strikingly agreed on it. At-Tabari glosses it as glad tidings from Allah of Isaac, and beyond Isaac, Jacob. The brief Muyassar carries the identical phrase: of Isaac, and after Isaac his son Jacob. Al-Baghawi reads it as Isaac and Jacob together, and as-Sa'di writes that they gave him glad tidings of Isaac, and beyond Isaac, Jacob. Four separate commentaries, one reading: the news is a son, and in the same breath a grandson after him.",
            "bn": "বুশরা অর্থাৎ সুসংবাদ, তার একটা নির্দিষ্ট বিষয়বস্তু আছে, আর তাফসীরকারেরা এ ব্যাপারে আশ্চর্যরকম একমত। তাবারী এর ব্যাখ্যা করেন আল্লাহর পক্ষ থেকে ইসহাক্বের সুসংবাদ, আর ইসহাক্বের পরে ইয়া‘কুবের। সংক্ষিপ্ত মুয়াসসারেও হুবহু একই কথা: ইসহাক্বের, আর ইসহাক্বের পরে তাঁর ছেলে ইয়া‘কুবের। বাগাভী পড়েন ইসহাক্ব ও ইয়া‘কুব একসঙ্গে, আর সা'দী লেখেন তাঁরা তাঁকে সুসংবাদ দিলেন ইসহাক্বের, আর ইসহাক্বের পরে ইয়া‘কুবের। চারটি আলাদা তাফসীর, একটিই পাঠ: খবরটা একটি পুত্রের, আর একই নিঃশ্বাসে তার পরে এক নাতির।"
          },
          {
            "en": "Ibn Kathir keeps the same substance while telling it as a scene. The angels, he says, began to calm Ibrāhīm (AS) and gave him the news of a righteous son to be born by his wife Sarah, who was present and was astonished at the word. Notice how far the promise runs. It does not stop at the child. The phrase beyond Isaac, Jacob names a second generation not yet conceived, so the tidings overrun the son and reach the grandson, and a line of prophets is laid down in a single sentence at the door of a tent.",
            "bn": "ইবন কাসীর একই বিষয়বস্তু রাখেন, তবে তা বলেন দৃশ্য হিসেবে। তিনি বলেন, ফেরেশতারা ইবরাহীম (আঃ)-কে শান্ত করতে লাগলেন আর তাঁকে সুসংবাদ দিলেন তাঁর স্ত্রী সারার গর্ভে এক নেক সন্তানের, সারা সেখানে উপস্থিত ছিলেন এবং এ কথায় বিস্মিত হয়েছিলেন। খেয়াল করুন, ওয়াদাটা কত দূর পর্যন্ত যায়। তা সন্তানেই থামে না। 'ইসহাক্বের পরে ইয়া‘কুব' কথাটা এমন এক প্রজন্মের নাম বলে, যে তখনো গর্ভে আসেনি। তাই সুসংবাদ পুত্রকে ছাড়িয়ে নাতি পর্যন্ত পৌঁছায়, আর এক তাঁবুর দরজায় একটি বাক্যেই গেঁথে দেওয়া হয় নবীদের এক ধারা।"
          },
          {
            "en": "What this meant to the man who heard it is not spelled out here, but the Qur'an fills the silence elsewhere. Ibn Kathir himself points the reader to Sūrah Hūd and Sūrah al-Ḥijr, where the same visit is told at length: the guests who would not eat, Sarah's laugh, her wonder that a barren old woman and an aged husband could be promised a child. Our verse compresses all of that into a single word. It gives the fact of the tidings and leaves the fuller account, in 11:69 to 11:76 and 51:24 to 51:30, to carry the feeling.",
            "bn": "যে মানুষটি এ কথা শুনলেন, তাঁর কাছে এর মানে কী ছিল, তা এখানে খুলে বলা হয়নি। কিন্তু কুরআন সে নীরবতা পূরণ করে অন্যত্র। ইবন কাসীর নিজেই পাঠককে পাঠান সূরা হূদ ও সূরা হিজরের দিকে, যেখানে একই সফর বিস্তারিত বলা হয়েছে: যে মেহমানরা খেলেন না, সারার হেসে ওঠা, বন্ধ্যা বৃদ্ধা আর বয়সী স্বামীর ঘরে সন্তানের ওয়াদায় তাঁর বিস্ময়। আমাদের আয়াত এ সবকিছু একটি শব্দেই গুটিয়ে আনে। এটি শুধু সুসংবাদের খবরটুকু দেয়, আর পূর্ণ বিবরণটা ১১:৬৯ থেকে ১১:৭৬ এবং ৫১:২৪ থেকে ৫১:৩০ আয়াতের হাতে ছেড়ে দেয়, অনুভূতিটা তারাই বয়ে আনুক।"
          }
        ]
      },
      {
        "h": {
          "en": "Guests Who Would Not Eat",
          "bn": "যে মেহমান খেলেন না"
        },
        "p": [
          {
            "en": "Ibn Kathir fills in how the messengers arrived. They came to Ibrāhīm (AS) in the form of guests, and he brought them what a host should bring, as the English abridgement puts it, offering them hospitality in the appropriate manner. Then the detail that turns the scene: when he saw that they had no interest in the food, he grew uneasy with them and felt a fear of them. A guest who will not eat is a guest who has not come for a meal, and the old man's instinct reads the strangeness before the words explain it.",
            "bn": "ফেরেশতারা কীভাবে এসেছিলেন, ইবন কাসীর তা পূরণ করে দেন। তাঁরা ইবরাহীম (আঃ)-এর কাছে এলেন মেহমানের বেশে, আর তিনি তাঁদের সামনে আনলেন একজন মেজবানের যা আনা উচিত। ইংরেজি সংক্ষিপ্ত তাফসীরের ভাষায়, যথাযথভাবে তাঁদের মেহমানদারি করলেন। এরপর সেই খুঁটিনাটি, যা দৃশ্যটা ঘুরিয়ে দেয়: তিনি যখন দেখলেন খাবারের দিকে তাঁদের কোনো আগ্রহ নেই, তাঁদের নিয়ে তিনি অস্বস্তিতে পড়লেন আর মনে ভয় অনুভব করলেন। যে মেহমান খাবেন না, তিনি তো খাওয়ার জন্য আসেননি। বৃদ্ধের সহজাত বোধ কথায় বোঝানোর আগেই অস্বাভাবিকতাটা ধরে ফেলে।"
          },
          {
            "en": "The fear does not last. They started to calm him down, says Ibn Kathir, and gave him the glad tidings. So the hospitality and the unease are not stray detail; they frame the good news. The man who offered a meal to strangers who could not eat is the man rewarded with a son he could not have. His welcome asked nothing back, and the answer that came was larger than any guest could carry. The scene quietly ties a habit of generosity to the gift that follows, without ever saying so in a sentence.",
            "bn": "ভয়টা বেশিক্ষণ থাকে না। ইবন কাসীর বলেন, তাঁরা তাঁকে শান্ত করতে লাগলেন আর সুসংবাদ দিলেন। তাই মেহমানদারি আর অস্বস্তি এলোমেলো কোনো খুঁটিনাটি নয়, এগুলো সুসংবাদকে ঘিরে রাখে। যে মানুষ খেতে-না-পারা অচেনা মেহমানদের খাবার এগিয়ে দিলেন, তাঁকেই পুরস্কার দেওয়া হলো এমন এক পুত্র, যা তাঁর হওয়ার কথা ছিল না। তাঁর আপ্যায়ন বিনিময়ে কিছু চায়নি, অথচ যে জবাব এলো তা যেকোনো মেহমানের বহন করার চেয়ে বড়। দৃশ্যটি নীরবেই দানের অভ্যাসকে পরের উপহারের সঙ্গে বেঁধে দেয়, মুখ ফুটে এক বাক্যেও তা না বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Errand, Two Messages",
          "bn": "এক সফর, দুই বার্তা"
        },
        "p": [
          {
            "en": "Then the same messengers turn from tidings to warning. They said, Indeed we are going to destroy the people of this town. At-Tabari names the place: the town of Sodom, which is the town of the people of Lot (AS). Al-Baghawi and the Muyassar give the same name. The demonstrative is worth hearing, this town, as though a hand were pointing across the plain from Ibrāhīm's tent toward the valley where Lūṭ lived. The glad tidings and the sentence of destruction are spoken by the same visitors in the same breath, without a pause between them.",
            "bn": "এরপর একই দূতগণ সুসংবাদ থেকে সতর্কবাণীর দিকে ফিরলেন। তাঁরা বললেন, আমরা এ জনপদের বাসিন্দাদের ধ্বংস করব। তাবারী জায়গাটার নাম বলেন: সাদূম নগরী, যা লূত (আঃ)-এর সম্প্রদায়ের জনপদ। বাগাভী ও মুয়াসসারও একই নাম দেন। 'এ জনপদ' কথাটা শোনার মতো। যেন ইবরাহীমের তাঁবু থেকে প্রান্তর পেরিয়ে সেই উপত্যকার দিকে হাত বাড়িয়ে দেখানো হচ্ছে, যেখানে লূত থাকতেন। সুসংবাদ আর ধ্বংসের ফয়সালা একই মেহমানদের মুখে, একই নিঃশ্বাসে উচ্চারিত, মাঝখানে কোনো থামা নেই।"
          },
          {
            "en": "This pairing is the heart of the verse. A single errand carries a birth and a burial. The hands that announce Isaac announce the end of a city, and the Qur'an sets the two side by side on purpose, so that neither is read alone. The believer learns here not to meet good news with heedless joy, as though mercy had no edge, nor to meet hard news with despair, as though justice had no warmth. Both came from one Lord, through one set of messengers, on one morning. To receive one and refuse the other is to misread the visit.",
            "bn": "এই জোড় বাঁধাই আয়াতের প্রাণ। একটিমাত্র সফর বয়ে আনে এক জন্ম আর এক মৃত্যু। যে হাত ইসহাক্বের ঘোষণা দেয়, সেই হাতই এক নগরীর সমাপ্তির ঘোষণা দেয়। কুরআন ইচ্ছে করেই দুটিকে পাশাপাশি রাখে, যেন কোনোটিকে একা পড়া না হয়। মুমিন এখানে শেখে, সুসংবাদকে যেন বেহুঁশ আনন্দে না নেয়, যেন রহমতের কোনো ধার নেই। আবার কঠিন সংবাদকে যেন হতাশায় না নেয়, যেন ইনসাফের কোনো উষ্ণতা নেই। দুটোই এক রবের কাছ থেকে এসেছে, এক দল দূতের মাধ্যমে, এক সকালে। একটি নিয়ে অন্যটি ফিরিয়ে দেওয়া মানে সফরটাকেই ভুল পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Named Wrongdoers",
          "bn": "যাদের নাম রাখা হলো যালিম"
        },
        "p": [
          {
            "en": "The verse does not end on the sentence; it gives the ground for it. Indeed its people have been wrongdoers. At-Tabari explains the word: they were wrongdoers of their own selves, by their disobedience to Allah and their denial of His messenger. The Muyassar says the same in short, that they wronged themselves by disobeying Allah. The destruction is not a storm without a cause. It rests on a named charge, and the charge is first of all a wrong the people did to themselves before it was ever a wrong done to Lūṭ (AS) or to any traveler.",
            "bn": "আয়াত শুধু ফয়সালায় থামে না, তার কারণও জানিয়ে দেয়। নিশ্চয়ই এর অধিবাসীরা ছিল যালিম। তাবারী শব্দটার ব্যাখ্যা করেন: তারা নিজেদের উপরই যুলুম করেছিল, আল্লাহর নাফরমানি করে আর তাঁর রাসূলকে মিথ্যা বলে অস্বীকার করে। মুয়াসসার সংক্ষেপে একই কথা বলে, তারা আল্লাহর নাফরমানি করে নিজেদের উপর যুলুম করেছিল। এ ধ্বংস কারণহীন কোনো ঝড় নয়। এর ভিত্তি একটি নির্দিষ্ট অভিযোগ, আর সে অভিযোগ সবার আগে তাদের নিজেদের প্রতি করা যুলুম, লূত (আঃ) কিংবা কোনো পথিকের উপর যুলুমের অনেক আগে।"
          },
          {
            "en": "What the wrong was, the sūrah has already said with restraint, and we keep to its words. A few verses earlier Lūṭ (AS) charges his people with a shameless act no nation before them had committed, with waylaying travelers on the road, and with open evil in their gatherings. He then calls them, in his prayer, a corrupting people. The verb here is kānū, they had been wrongdoers: not a single slip but a settled way of life, defended and repeated. A people are not undone by a fault they are fighting, but by one they have made their custom and will not leave.",
            "bn": "যুলুমটা কী ছিল, সূরা তা আগেই সংযমের সঙ্গে বলে দিয়েছে, আর আমরা তার কথাতেই থাকি। কয়েক আয়াত আগে লূত (আঃ) তাঁর সম্প্রদায়ের বিরুদ্ধে অভিযোগ আনেন এমন এক নির্লজ্জ কাজের, যা তাদের আগে কোনো জাতি করেনি, পথে পথিকদের উপর রাহাজানির, আর নিজেদের মজলিসে প্রকাশ্যে মন্দ কাজের। এরপর দু'আয় তিনি তাদের বলেন ফাসাদ সৃষ্টিকারী সম্প্রদায়। এখানে ক্রিয়াটি কানূ, তারা যালিম হয়েই ছিল: কোনো একটিমাত্র পদস্খলন নয়, বরং এক জমে যাওয়া জীবনধারা, যা তারা আগলে রেখেছে আর বারবার করেছে। কোনো জাতি সেই দোষে ধ্বংস হয় না যার বিরুদ্ধে সে লড়ছে, বরং সেই দোষে যা তারা নিজেদের রীতি বানিয়েছে আর ছাড়তে চায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Decree, Not a License",
          "bn": "ফয়সালা, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This must be said plainly, in both languages. The verse reports a decree that Allah passed and carried out on one named people, the people of Sodom, in the distant past. It is an account of what happened, not a command placed in any human hand. It gives no one today a licence to harm, to exclude, to curse, or to punish any living person or community, whatever that person is accused of. The angels act on the direct order of Allah, who alone knows hearts and alone may take life in judgment. No reader inherits their errand.",
            "bn": "কথাটা সোজাসুজি বলা দরকার, দুই ভাষাতেই। আয়াত এমন এক ফয়সালার খবর দেয়, যা আল্লাহ জারি করেছিলেন আর কার্যকর করেছিলেন একটিমাত্র নির্দিষ্ট জাতির উপর, সাদূমের অধিবাসীদের উপর, বহু আগের অতীতে। এটি যা ঘটেছিল তার বিবরণ, কোনো মানুষের হাতে তুলে দেওয়া কোনো হুকুম নয়। আজ এটি কাউকে কোনো অনুমতি দেয় না, কোনো জীবিত মানুষ বা জনগোষ্ঠীর ক্ষতি করার, তাকে একঘরে করার, অভিশাপ দেওয়ার কিংবা শাস্তি দেওয়ার, সে যে অভিযোগেই অভিযুক্ত হোক। ফেরেশতারা কাজ করেন আল্লাহরই সরাসরি হুকুমে, যিনি একাই অন্তর জানেন আর একাই বিচারে প্রাণ নিতে পারেন। কোনো পাঠক তাঁদের সেই দায়িত্ব উত্তরাধিকার সূত্রে পায় না।"
          },
          {
            "en": "The restraint runs to the sin itself. The commentaries name it only as far as the Qur'an names it, and they do not linger over detail; we follow them in that. What the verse holds up for reflection is not a particular group to be despised, but the gravity of a wrong that a whole people made public, defended, and refused to leave. Who is a wrongdoer in the sight of Allah is His knowledge, settled on the Day of Judgment, not ours to assign. The verse turns the reader inward, to the custom he will not name in himself, not outward against a neighbor.",
            "bn": "সংযমটা গুনাহটার বেলায়ও খাটে। তাফসীরকারেরা তার নাম ততটুকুই নেন যতটুকু কুরআন নিয়েছে, আর খুঁটিনাটিতে তাঁরা ডুবে থাকেন না, আমরাও তাঁদের অনুসরণ করি। আয়াত চিন্তার জন্য যা তুলে ধরে, তা কোনো বিশেষ দলকে ঘৃণা করার জন্য নয়, বরং এমন এক অন্যায়ের ভয়াবহতা, যা গোটা একটা জাতি প্রকাশ্যে করেছে, আগলে রেখেছে, আর ছাড়তে চায়নি। আল্লাহর দৃষ্টিতে কে যালিম, তা তাঁরই জ্ঞান, কিয়ামতের দিনে যা চূড়ান্ত হবে, আমাদের ঠিক করে দেওয়ার বিষয় নয়। আয়াত পাঠককে ভেতরের দিকে ফেরায়, নিজের ভেতরের যে অভ্যাসের নাম সে নিতে চায় না তার দিকে, প্রতিবেশীর বিরুদ্ধে বাইরের দিকে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Record Is Silent",
          "bn": "যেখানে বর্ণনা নীরব"
        },
        "p": [
          {
            "en": "A word on the narrations, because the honest report matters. No sound prophetic hadith is narrated on this announcement at Ibrāhīm's door; the scene reaches us through the commentators and through the Qur'an's own retelling elsewhere. That is not a gap to be filled with a weak story. Where a verse carries no sound hadith, the sound course is to say so and lean on what is confirmed: here, the parallel accounts in Sūrah Hūd and Sūrah adh-Dhāriyāt, and the readings of at-Tabari, Ibn Kathir, al-Baghawi and the rest already set out above.",
            "bn": "বর্ণনাগুলো নিয়ে দু'টি কথা বলা দরকার, কারণ সৎ রিপোর্টের মূল্য আছে। ইবরাহীমের দরজায় এই ঘোষণার ব্যাপারে কোনো সহীহ হাদীস বর্ণিত নেই। দৃশ্যটা আমাদের কাছে আসে তাফসীরকারদের মাধ্যমে আর কুরআন নিজে অন্যত্র যেভাবে তা আবার বলেছে তার মাধ্যমে। এটা দুর্বল কোনো কিসসা দিয়ে ভরাট করার মতো ফাঁক নয়। কোনো আয়াতে যদি সহীহ হাদীস না থাকে, সঠিক পথ হলো সেটা বলে দেওয়া আর যা নিশ্চিত তার উপর ভর করা: এখানে সূরা হূদ ও সূরা যারিয়াতের সমান্তরাল বিবরণ, আর উপরে তুলে ধরা তাবারী, ইবন কাসীর, বাগাভী ও অন্যদের ব্যাখ্যা।"
          },
          {
            "en": "One report should be named only to be placed correctly. Ma'arif al-Qur'an, commenting on the verses just before this one, mentions a narration attributed to Umm Hāni (RA) about the townspeople pelting and mocking travelers in their gatherings. That belongs to the people's conduct in 29:29, not to the announcement in our verse, and it is offered there without a grading I could confirm, so I do not build on it. The verse itself needs no supplement. Its tidings and its warning stand on the plain words of the Book.",
            "bn": "একটি বর্ণনার নাম শুধু এজন্যই নেওয়া, যাতে তাকে ঠিক জায়গায় বসানো যায়। মাআরিফুল কুরআন এই আয়াতের ঠিক আগের আয়াতগুলোর আলোচনায় উম্মে হানী (রাঃ)-এর সূত্রে একটি বর্ণনার কথা তোলে, জনপদের লোকেরা নিজেদের মজলিসে পথিকদের উপর পাথর ছুড়ত আর ঠাট্টা করত। এটা ২৯:২৯ আয়াতে বর্ণিত তাদের আচরণের অংশ, আমাদের আয়াতের ঘোষণার সঙ্গে নয়। আর সেখানে এটি এমন কোনো গ্রেডিং ছাড়াই আনা হয়েছে যা আমি নিশ্চিত করতে পারিনি, তাই আমি এর উপর কিছু গড়ি না। আয়াতটির নিজের কোনো সংযোজন দরকার নেই। এর সুসংবাদ আর সতর্কবাণী কুরআনের সোজা কথাতেই দাঁড়িয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Mercy and Justice Together",
          "bn": "রহমত ও ইনসাফ একসঙ্গে"
        },
        "p": [
          {
            "en": "There is one more thing the verse begins to show, and the next verses finish. When the messengers named the destruction, Ibrāhīm (AS) did not greet it with relief. Ibn Kathir says he began to speak up for the people, hoping they might be granted time, that Allah might guide them. The Qur'an elsewhere calls him forbearing, tender-hearted, and ever-turning to his Lord, and at-Tabari cites that very description here. His first motion on hearing of a doomed city was not satisfaction but intercession. What he did next belongs to the verses that follow; what matters here is the instinct.",
            "bn": "আয়াত আরও একটি জিনিস দেখাতে শুরু করে, যা পরের আয়াতগুলো সম্পূর্ণ করে। দূতগণ যখন ধ্বংসের কথা বললেন, ইবরাহীম (আঃ) তা স্বস্তির সঙ্গে গ্রহণ করলেন না। ইবন কাসীর বলেন, তিনি সম্প্রদায়ের পক্ষে কথা বলতে লাগলেন, এই আশায় যে তাদের হয়তো সময় দেওয়া হবে, আল্লাহ হয়তো তাদের হিদায়াত দেবেন। কুরআন অন্যত্র তাঁকে বলে সহনশীল, কোমলপ্রাণ, রবের দিকে বারবার প্রত্যাবর্তনকারী, আর তাবারী এখানেই সেই বর্ণনাটি উদ্ধৃত করেন। ধ্বংসপ্রাপ্ত এক নগরীর কথা শুনে তাঁর প্রথম নড়াচড়া তৃপ্তি নয়, বরং সুপারিশ। এরপর তিনি কী করলেন, তা পরের আয়াতগুলোর বিষয়। এখানে যা জরুরি, তা হলো এই সহজাত টান।"
          },
          {
            "en": "So the believer stands where Ibrāhīm (AS) stood. One morning brought him a son he had despaired of and the sentence of a city he could see from his tent, and he met the gift with thanks and the sentence with a plea for mercy on the condemned. He did not read the two as two Gods, nor as two moods of one God, but as one wisdom reaching him through one errand. When my own day carries both a blessing and a hard decree, the verse asks me to hold them as he held them: grateful, sobered, and still turned toward the One who sent both.",
            "bn": "তাই মুমিন সেখানেই দাঁড়ায়, যেখানে ইবরাহীম (আঃ) দাঁড়িয়েছিলেন। এক সকাল তাঁকে এনে দিল এমন এক পুত্র যার আশা তিনি ছেড়ে দিয়েছিলেন, আর তাঁবু থেকে চোখে পড়া এক নগরীর ফয়সালা। তিনি দানকে নিলেন শুকরিয়ায়, আর ফয়সালাকে নিলেন দণ্ডিতদের জন্য রহমতের আকুতিতে। তিনি দুটোকে দুই প্রভু ভাবেননি, এক প্রভুর দুই মেজাজও ভাবেননি, বরং এক সফরের ভেতর দিয়ে তাঁর কাছে পৌঁছানো এক হিকমত ভেবেছেন। আমার নিজের দিন যখন একসঙ্গে বয়ে আনে একটি নিয়ামত আর একটি কঠিন ফয়সালা, আয়াত আমাকে বলে সে দুটোকে তাঁর মতো করে ধরতে: কৃতজ্ঞ, সংযত, আর তবুও সেই সত্তার দিকে ফেরা, যিনি দুটোই পাঠিয়েছেন।"
          }
        ]
      }
    ]
  },
  "29:39": {
    "sections": [
      {
        "h": {
          "en": "Three Names in One Breath",
          "bn": "এক নিঃশ্বাসে তিন নাম"
        },
        "p": [
          {
            "en": "The verse reels off three names without pausing: Qārūn, Pharaoh, and Hāmān. The verse just before had named ʿĀd and Thamūd. Ibn Kathir identifies the three men. Qārūn was the owner of abundant wealth and the keys of heavy treasures. Pharaoh was the king of Egypt in the time of Moses, and Hāmān was his minister. Of the last two Ibn Kathir says they were Copts who disbelieved in Allah and His Messenger. Men whose stories the earlier surahs told at length, here the Qur'an only lists.",
            "bn": "আয়াতটি না থেমে পরপর তিনটি নাম উচ্চারণ করে: কারূন, ফেরাউন, হামান। ঠিক আগের আয়াতেই এসেছে ‘আদ ও সামূদের কথা। ইবন কাসীর নামগুলো চিনিয়ে দেন। কারূন ছিল বিপুল ধন আর ভারী ভারী ধনভাণ্ডারের চাবির মালিক। ফেরাউন ছিল মূসা (আঃ)-এর যুগে মিসরের বাদশাহ, আর হামান ছিল তার মন্ত্রী। শেষ দুজন সম্পর্কে ইবন কাসীর বলেন, তারা ছিল কিবতী, আল্লাহ আর তাঁর রাসূলকে অস্বীকারকারী। আগের সূরাগুলোতে যাদের কথা বিস্তারিত এসেছে, এখানে কুরআন কেবল তাদের নামটুকু তুলে ধরে।"
          },
          {
            "en": "What makes the line arresting is the company it keeps. The verse has just pointed to ʿAd and Thamud, whose ruined dwellings the first listeners could still see for themselves. Now it moves from two destroyed nations to three destroyed men and holds them in one frame. Ma'arif al-Qur'an notes that the stories of Qārūn, Hāmān, and Pharaoh have just passed, in detail, in Surah al-Qasas. Here they return stripped to names, so the eye falls not on each man's separate tale but on what the three of them share.",
            "bn": "লাইনটা চমকে দেয় তার সঙ্গীদের কারণে। আয়াত এইমাত্র ‘আদ আর সামূদের দিকে ইশারা করেছে, যাদের ধ্বংস হওয়া বাড়িঘর প্রথম শ্রোতারা নিজ চোখেই দেখতে পেত। এবার দুই ধ্বংসপ্রাপ্ত জাতি থেকে তিন ধ্বংসপ্রাপ্ত মানুষের দিকে এসে তাদের একই ফ্রেমে ধরে রাখে। মাআরিফুল কুরআন মনে করিয়ে দেয়, কারূন, হামান আর ফেরাউনের কাহিনি একটু আগেই সূরা কাসাসে বিস্তারিত এসে গেছে। এখানে তারা ফিরে আসে কেবল নাম হয়ে, যাতে চোখ পড়ে প্রত্যেকের আলাদা কাহিনিতে নয়, বরং তিনজনের যা অভিন্ন তার উপরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sentence Hangs",
          "bn": "বাক্যটি কোথায় ঝুলে আছে"
        },
        "p": [
          {
            "en": "Grammatically the three names float, for no verb is attached to them within the verse itself. The commentators resolve this in more than one way, and al-Qurtubi lays the options out. Al-Baghawi and the Muyassar supply an elided verb: and We destroyed Qārūn and Pharaoh and Hāmān, reading the names as the objects of a destruction the passage keeps repeating. On this reading the verse is simply one more entry in a lengthening roll-call of ruin, the three men added to the nations already gone.",
            "bn": "ব্যাকরণের দিক থেকে তিনটি নাম যেন ভেসে থাকে, আয়াতের ভেতরে এদের সঙ্গে কোনো ক্রিয়া জোড়া নেই। তাফসীরকারেরা একাধিকভাবে এর মীমাংসা করেন, আর কুরতুবী বিকল্পগুলো সাজিয়ে দেন। বাগাভী ও মুয়াসসার একটি উহ্য ক্রিয়া ধরে নেন: ‘আর আমি ধ্বংস করলাম কারূন, ফেরাউন ও হামানকে।’ এ পাঠে নামগুলো সেই ধ্বংসের কর্ম, যা পুরো অনুচ্ছেদ বারবার বলে চলেছে। তখন আয়াতটি হয়ে ওঠে ধ্বংসের লম্বা তালিকায় আরও একটি নাম, আগের ধ্বংসপ্রাপ্ত জাতিগুলোর সঙ্গে জুড়ে যাওয়া তিনজন মানুষ।"
          },
          {
            "en": "Al-Qurtubi reports al-Kisa'i giving two further possibilities. The names may be carried on ʿAd and Thamud in the previous verse, joining the same list of the destroyed, or carried on the clause that Satan turned them from the path, so that he turned Qārūn and Pharaoh and Hāmān aside as well. The difference is one of syntax, not of outcome; every reading ends with the three men gone. I keep the disagreement open, as the commentators themselves left it, and take from it only that the sentence was built to attach them to ruin.",
            "bn": "কুরতুবী কিসাঈ থেকে আরও দুটি সম্ভাবনার কথা আনেন। নামগুলো আগের আয়াতের ‘আদ ও সামূদের সঙ্গে যুক্ত হতে পারে, একই ধ্বংসের তালিকায় মিশে। অথবা শয়তান যে তাদের পথ থেকে ফিরিয়ে দিয়েছিল সেই বাক্যের সঙ্গে যুক্ত হতে পারে, অর্থাৎ কারূন, ফেরাউন ও হামানকেও সে পথ থেকে সরিয়ে দিয়েছিল। পার্থক্যটা বাক্যগঠনের, পরিণতির নয়। প্রতিটি পাঠই শেষ হয় তিনজনের ধ্বংসে। তাফসীরকারেরা যেভাবে মতভেদটা খোলা রেখেছেন আমিও সেভাবেই রাখছি, আর এটুকুই নিই যে বাক্যটা তাদের ধ্বংসের সঙ্গে বেঁধে রাখার জন্যই গড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Powers, One Idol",
          "bn": "তিন শক্তি, এক মূর্তি"
        },
        "p": [
          {
            "en": "Set the three side by side and three kinds of power appear. Ibn Kathir identifies Qārūn as the man of wealth, Pharaoh as the king who held the throne, and Hāmān as his minister, the officer who ran the state for him. Money, sovereignty, and administration: the capital, the crown, and the clerk who makes the crown's orders move. The Qur'an does not pick one of these out as the dangerous one. It names all three in a single breath and leaves none of them standing clear of the charge.",
            "bn": "তিনজনকে পাশাপাশি রাখলে তিন ধরনের শক্তি ভেসে ওঠে। ইবন কাসীরের বর্ণনায় কারূন ধনের মানুষ, ফেরাউন বাদশাহ অর্থাৎ সিংহাসনের মালিক, আর হামান তার মন্ত্রী, যে রাষ্ট্র চালিয়ে দিত। টাকা, রাজত্ব আর প্রশাসন—পুঁজি, মুকুট, আর মুকুটের হুকুম যে চালু করে সেই কর্মকর্তা। কুরআন এদের কোনো একটিকে বেছে নিয়ে বিপজ্জনক বলে দেগে দেয় না। তিনটিকেই এক নিঃশ্বাসে নাম ধরে ডাকে, আর কাউকেই অভিযোগের বাইরে রাখে না।"
          },
          {
            "en": "And it gives them one verb between them: fa-stakbaru, they grew arrogant. Three different holds on the world, and one swelling. The wealthy man, the ruler, and the enabling official are not three sins but three doors into the same sin. Each had something the others lacked, and each let that thing make him large. The verse's economy is the whole point: it refuses to let the reader believe arrogance belongs only to kings, or only to the rich, or only to those who sign the orders. It belongs to whoever is made big by what he holds.",
            "bn": "আর তিনজনের মাঝে বসিয়ে দেয় একটিমাত্র ক্রিয়া: ফাসতাকবারূ, তারা অহংকার করল। দুনিয়ার উপর তিন রকম দখল, অথচ ফুলে ওঠা একটাই। ধনী মানুষ, শাসক আর তাদের সহযোগী কর্মকর্তা তিনটি আলাদা গুনাহ নয়, একই গুনাহে ঢোকার তিনটি দরজা। একজনের কাছে যা ছিল অন্যের তা ছিল না, আর প্রত্যেকেই সেটাকে নিজের বড়ত্বের কারণ বানিয়ে ফেলল। আয়াতের এই সংক্ষেপই আসল কথা। পাঠক যেন ভাবতে না পারে অহংকার কেবল বাদশাহর, কিংবা কেবল ধনীর, কিংবা কেবল যে হুকুমে সই করে তার। যা হাতে আছে তা দিয়ে যে বড় হয়ে ওঠে, অহংকার তারই।"
          },
          {
            "en": "There is a further note worth keeping. At-Tabari reads Moses came to all of them with the clear signs, jamiʿahum, to all three. One messenger, one set of proofs, reached the financier, the king, and the minister alike. The clear evidence was not withheld from any of them, so none could later plead that the truth had never arrived. What divided them from Moses was not information; each of them had been given it. It was what they then did with the evidence that set them against the man who brought it.",
            "bn": "আরও একটি কথা মনে রাখার মতো। তাবারী পড়েন, মূসা তাদের সবার কাছে সুস্পষ্ট নিদর্শন নিয়ে এসেছিলেন, জামীআহুম, তিনজনের কাছেই। একজন রাসূল, একই প্রমাণ, পৌঁছেছিল ধনী, বাদশাহ আর মন্ত্রী সবার কাছে সমানভাবে। স্পষ্ট দলিল কারও কাছ থেকে আটকে রাখা হয়নি, তাই কেউ পরে এ অজুহাত দিতে পারত না যে সত্য তার কাছে পৌঁছায়নি। মূসা (আঃ)-এর সঙ্গে তাদের দূরত্ব জ্ঞানের অভাবে তৈরি হয়নি, প্রত্যেকেই তা পেয়েছিল। সেই প্রমাণ নিয়ে তারা যা করল, তা-ই তাদের দাঁড় করিয়ে দিল সেই মানুষটার বিপক্ষে যিনি তা এনেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Arrogance Refused",
          "bn": "অহংকার যা প্রত্যাখ্যান করল"
        },
        "p": [
          {
            "en": "At-Tabari defines the arrogance precisely: they grew too proud to affirm the signs and to follow Moses. Istikbar here is not a mood but a refusal, aimed at a specific truth that had been made plain. The word shares a root with kibr, bigness; to be arrogant is to think oneself too large for what is being asked. And what they were being asked to accept was evidence they could not actually answer. The proofs stood; the only move left was to be too grand to look at them.",
            "bn": "তাবারী অহংকারটাকে সূক্ষ্মভাবে চিহ্নিত করেন: তারা এতই অহংকারী হয়ে উঠল যে নিদর্শনগুলো মানতে আর মূসাকে অনুসরণ করতে রাজি হলো না। এখানে ইসতিকবার কোনো মেজাজ নয়, বরং এক প্রত্যাখ্যান। এমন এক সত্যকে প্রত্যাখ্যান, যা স্পষ্ট করে দেখানো হয়েছিল। শব্দটির মূল কিবর শব্দের সঙ্গে এক, যার মানে বড়ত্ব। অহংকারী হওয়া মানে নিজেকে এত বড় ভাবা যে, যা মানতে বলা হচ্ছে তার জন্য নিজেকে অনেক উঁচু মনে হয়। অথচ যা মানতে বলা হয়েছিল, সেই প্রমাণের জবাব আসলে তাদের কাছে ছিল না। দলিল দাঁড়িয়ে ছিল, বাকি রইল কেবল এত বড় সেজে থাকা যে সেদিকে তাকানোই যায় না।"
          },
          {
            "en": "As-Sa'di adds a second face to it. Their istikbar ran in two directions: against the truth, which they rejected, and over the servants of Allah, whom they humiliated. Arrogance before God and contempt for people travel together in his reading. The man who is too big to bow is also too big to see those beneath him as his equals; the two refusals are one posture turned in two directions. As-Sa'di closes grimly: when the punishment came down, those who had thought themselves beyond reach found no way out of it at all.",
            "bn": "সাদী এর সঙ্গে দ্বিতীয় একটা দিক যোগ করেন। তাদের ইসতিকবার চলেছিল দুই দিকে: হকের বিরুদ্ধে, যা তারা অস্বীকার করল, আর আল্লাহর বান্দাদের উপরে, যাদের তারা অপমান করল। সাদীর পাঠে আল্লাহর সামনে অহংকার আর মানুষের প্রতি অবজ্ঞা একসঙ্গে চলে। যে নিজেকে এত বড় ভাবে যে মাথা নোয়ায় না, সে এত বড় যে নিচের মানুষদের নিজের সমান বলেও দেখে না। একই ভঙ্গি দুই দিকে ঘোরানো। সাদী শেষ করেন কঠিন কথায়: শাস্তি যখন নেমে এলো, যারা নিজেদের নাগালের বাইরে ভেবেছিল তারা বেরোনোর কোনো পথই পেল না।"
          }
        ]
      },
      {
        "h": {
          "en": "Perceptive, and Still Blind",
          "bn": "চোখ ছিল, তবু অন্ধ"
        },
        "p": [
          {
            "en": "The verse just before calls such people mustabsirin, endowed with perception, and Ma'arif al-Qur'an draws out the sting in the word. These were not fools or madmen, it says; they were clever, sharp-eyed people with real insight. But their intelligence was confined to the things of this world. They could read a market, a court, a campaign, and could not read that a day of reckoning was coming, when every deed good and bad would be weighed and complete justice would at last be done.",
            "bn": "এর ঠিক আগের আয়াত এমন মানুষদের বলে মুসতাবসিরীন, অর্থাৎ দৃষ্টিসম্পন্ন। মাআরিফুল কুরআন শব্দটির ভেতরের খোঁচাটা বের করে আনে। এরা বোকা বা পাগল ছিল না, বলে সে। এরা ছিল চতুর, তীক্ষ্ণ দৃষ্টির মানুষ, সত্যিকারের বুদ্ধি ছিল এদের। কিন্তু সেই বুদ্ধি আটকে ছিল কেবল দুনিয়ার জিনিসে। এরা বাজার বুঝত, দরবার বুঝত, যুদ্ধ বুঝত, অথচ বুঝত না যে এমন এক হিসাবের দিন আসছে, যেদিন ভালো-মন্দ প্রতিটি কাজ ওজন করা হবে আর অবশেষে পূর্ণ ন্যায়বিচার হবে।"
          },
          {
            "en": "Ma'arif ties this to a later verse, 30:7: they know what is apparent of the worldly life, but of the Hereafter they are heedless. The triad fits the description exactly. Qārūn understood wealth, Pharaoh understood power, Hāmān understood administration, and not one of them understood the single fact that would decide everything. Perception pointed only at the near made them, Ma'arif implies, more culpable rather than less. They had the eyes to see and spent that sight entirely on the wrong horizon, reading the small truths flawlessly and missing the one that mattered.",
            "bn": "মাআরিফ এটাকে পরের এক আয়াতের সঙ্গে মেলায়, ৩০:৭: তারা দুনিয়ার জীবনের বাইরের দিকটাই জানে, আর আখিরাতের ব্যাপারে তারা উদাসীন। তিনজন এই বর্ণনার সঙ্গে হুবহু মিলে যায়। কারূন ধন বুঝত, ফেরাউন ক্ষমতা বুঝত, হামান প্রশাসন বুঝত, অথচ যে একটি সত্য সবকিছুর ফয়সালা করবে তা একজনও বুঝল না। মাআরিফের ইঙ্গিত, কাছের জিনিসে আটকে থাকা এই দৃষ্টি তাদের দায় কমায়নি, বরং বাড়িয়েছে। দেখার চোখ ছিল, অথচ গোটা দৃষ্টিটাই তারা ঢেলে দিল ভুল দিগন্তে। ছোট সত্যগুলো নিখুঁত পড়ে ফেলল, আর যেটা আসল সেটাই ফসকে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "None Outran the Reckoning",
          "bn": "কেউ হিসাব পেরিয়ে যেতে পারেনি"
        },
        "p": [
          {
            "en": "The verse ends on a strange image: wa-ma kanu sabiqin, they were not outrunners. At-Tabari explains it as outrunning God. They could not get ahead of Him and so slip away; rather, he has Allah say, We were fully able over them. Al-Baghawi reads sabiqin as fa'itin, those who escape, and the Muyassar agrees that they could not elude Us. The racing metaphor fits men who had imagined that their wealth or their power put them permanently out in front of everyone, the reckoning included.",
            "bn": "আয়াত শেষ হয় এক অদ্ভুত ছবিতে: ওয়া মা কানূ সাবিকীন, তারা আগে বেড়ে যেতে পারেনি। তাবারী এর ব্যাখ্যা করেন আল্লাহকে পেছনে ফেলা হিসেবে। তারা তাঁর আগে বেরিয়ে গিয়ে পালাতে পারেনি, বরং তাবারীর ভাষায় আল্লাহ বলছেন, আমি তাদের উপর পুরোপুরি সক্ষম ছিলাম। বাগাভী সাবিকীন পড়েন ফাইতীন অর্থে, অর্থাৎ যারা ফসকে যায়, আর মুয়াসসারও একমত যে তারা আমাকে এড়াতে পারেনি। দৌড়ের উপমাটা মানানসই সেই মানুষদের বেলায়, যারা ভেবেছিল তাদের ধন বা ক্ষমতা তাদের চিরকাল সবার সামনে রেখে দেবে, হিসাব সুদ্ধ।"
          },
          {
            "en": "Al-Qurtubi records a second reading of the word: not outrunning the punishment, but preceding others in disbelief. And he answers it himself, that many disbelieving generations had come before them, so this could not be their distinction either. Whichever way the word is taken, the boast collapses. As-Sa'di puts the end bluntly: far from outrunning Allah or escaping Him, they surrendered and submitted. The men who had grown so large were, at the very last, handed over completely, their size no part of the transaction.",
            "bn": "কুরতুবী শব্দটির দ্বিতীয় একটি পাঠও লিখে রাখেন: শাস্তিকে পেছনে ফেলা নয়, বরং অবিশ্বাসে অন্যদের আগে থাকা। আর তিনি নিজেই এর জবাব দেন, তাদের আগে বহু অবিশ্বাসী প্রজন্ম এসে গেছে, তাই এটাও তাদের বিশেষত্ব হতে পারে না। শব্দটা যেভাবেই নিন, অহংকারের দাবিটা ভেঙে পড়ে। সাদী শেষটা সোজা কথায় বলেন: আল্লাহকে পেছনে ফেলা বা তাঁকে এড়ানো দূরে থাক, তারা আত্মসমর্পণ করল, মাথা নুইয়ে দিল। যারা এত বড় হয়ে উঠেছিল, শেষবেলায় তাদের পুরোপুরি সঁপে দেওয়া হলো, আর তাদের সেই বড়ত্ব এর কোনো অংশই ছিল না।"
          },
          {
            "en": "The next verse spells out how. Ibn Kathir, reading 29:40, distributes the ends: each was seized for his sin, the punishment fitted to the man. Qārūn, who transgressed and paraded, was swallowed by the earth; Pharaoh and Hāmān and their troops were drowned in a single morning, not one of them escaping. Three forms of power, leveled by three different means, on one principle the verse itself states: Allah did not wrong them, but they were wronging themselves. The outrunners were overtaken, each by the measure he had earned.",
            "bn": "পরের আয়াত বলে দেয় কীভাবে। ইবন কাসীর ২৯:৪০ আয়াত পড়ে প্রত্যেকের পরিণতি ভাগ করে দেন: প্রত্যেককে ধরা হলো তার পাপের কারণে, শাস্তি মাপা হলো মানুষটার মাপে। কারূন, যে সীমা ছাড়িয়ে অহংকারে বুক ফুলিয়ে চলত, তাকে মাটি গিলে নিল। ফেরাউন, হামান আর তাদের সৈন্যদল এক সকালেই ডুবে গেল, একজনও বাঁচল না। তিনটি শক্তি, তিন ভিন্ন উপায়ে সমান করে দেওয়া হলো, আর ভিত্তি একটাই, যা আয়াত নিজেই বলে: আল্লাহ তাদের উপর যুলম করেননি, তারা নিজেরাই নিজেদের উপর যুলম করছিল। আগে-বেড়ে-যাওয়া মানুষগুলোকে ধরে ফেলা হলো, প্রত্যেককে তার অর্জিত মাপেই।"
          }
        ]
      },
      {
        "h": {
          "en": "An Atom's Weight of Pride",
          "bn": "অণু-পরিমাণ অহংকার"
        },
        "p": [
          {
            "en": "On arrogance itself the Sunnah is exact. Muslim records, from ʿAbdullah ibn Masʿud, that the Prophet ﷺ said, He who has in his heart the weight of a mustard seed of pride shall not enter Paradise. A man asked whether loving fine clothes and fine shoes was counted against a person; he answered that Allah is beautiful and loves beauty, and then defined the sin: pride is disdaining the truth and contempt for the people. The report is in Sahih Muslim, and its grading is the soundness of Muslim's collection.",
            "bn": "অহংকার নিয়ে সুন্নাহ একেবারে স্পষ্ট। মুসলিম আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, যার অন্তরে অণু-পরিমাণ অহংকার আছে সে জান্নাতে ঢুকবে না। এক লোক জিজ্ঞেস করল, সুন্দর জামা আর সুন্দর জুতা ভালোবাসাও কি মানুষের বিপক্ষে ধরা হবে। তিনি জবাব দিলেন, আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। তারপর গুনাহটার সংজ্ঞা দিলেন: অহংকার হলো হককে তুচ্ছ করা আর মানুষকে হেয় করা। বর্ণনাটি সহীহ মুসলিমে আছে, আর এর মান মুসলিমের সংকলনের সহীহ মানেরই।"
          },
          {
            "en": "The definition lands on the triad with uncanny precision. Disdaining the truth is exactly at-Tabari's reading, the pride too great to affirm the signs; and contempt for the people is as-Sa'di's second face, the humiliation of Allah's servants. This hadith is not reported as a comment on this verse; it is a general teaching on kibr. But it names the two halves of the sin the verse condemns, and it fixes the weight at which that sin turns fatal: a single mustard seed, held quietly in the heart.",
            "bn": "সংজ্ঞাটা তিনজনের উপর অবিকল বসে যায়। হককে তুচ্ছ করা ঠিক তাবারীর পাঠ, অর্থাৎ নিদর্শন মানতে না চাওয়ার মতো বড়ত্ব। আর মানুষকে হেয় করা সাদীর সেই দ্বিতীয় দিক, আল্লাহর বান্দাদের অপমান করা। এই হাদীস এ আয়াতের ব্যাখ্যা হিসেবে বর্ণিত নয়, এটি কিবর নিয়ে একটি সাধারণ শিক্ষা। তবু এটি আয়াত যে গুনাহের নিন্দা করে তার দুই অংশকেই নাম ধরে ধরিয়ে দেয়, আর গুনাহটা কোন ওজনে পৌঁছালে প্রাণঘাতী হয় তা-ও বেঁধে দেয়: অন্তরে চুপচাপ ধরে রাখা একটিমাত্র সরিষাদানা।"
          }
        ]
      },
      {
        "h": {
          "en": "Condemned, Not a Weapon",
          "bn": "নিন্দিত, কিন্তু অস্ত্র নয়"
        },
        "p": [
          {
            "en": "This must be said plainly, in case the verse is misused. It describes three named tyrants of the distant past and the end God brought upon them for their arrogance and their rejection of clear proof. It licenses nothing against any living person or community; no group today may be labeled a Qārūn, a Pharaoh, or a Hāmān and treated as already condemned. The verse hands no one a verdict to pass on his neighbour. The judgement in it belongs to God, and it fell on men whose guilt the Qur'an itself establishes.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, যেন আয়াতটা অপব্যবহার না হয়। এটি সুদূর অতীতের তিনজন নির্দিষ্ট অত্যাচারীর বর্ণনা, আর স্পষ্ট প্রমাণ অস্বীকার ও অহংকারের কারণে আল্লাহ তাদের যে পরিণতি দিয়েছিলেন তার কথা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুই অনুমোদন করে না। কাউকে কারূন, ফেরাউন বা হামান বলে দেগে দিয়ে আগেভাগেই নিন্দিত সাব্যস্ত করার অধিকার এ আয়াত কাউকে দেয় না। প্রতিবেশীর উপর রায় দেওয়ার কোনো ভার এটি কারও হাতে তুলে দেয় না। এর ভেতরের বিচার আল্লাহর, আর তা নেমেছিল এমন মানুষদের উপর যাদের অপরাধ কুরআন নিজেই প্রমাণ করে।"
          },
          {
            "en": "What the verse hands the reader is a mirror. Few of us hold a treasury or a throne, but almost everyone holds something: a title, a budget, a room, the ear of someone powerful. The swelling the verse names does not need an empire to begin. The test is small and daily. When a truth arrives that would cost me, do I weigh it or wave it off; and the people below me, do I see them or look past them? The three who would not bow did not outrun the end, and neither will anyone who learns their refusal.",
            "bn": "আয়াত পাঠকের হাতে যা তুলে দেয় তা একটা আয়না। আমাদের খুব কম জনেরই ধনভাণ্ডার বা সিংহাসন আছে, তবু প্রায় সবার হাতেই কিছু-না-কিছু আছে। কোনো পদ, কোনো বাজেট, কোনো ঘর, কিংবা কোনো ক্ষমতাধরের কাছে পৌঁছানোর সুযোগ। আয়াত যে ফুলে ওঠার কথা বলে, তা শুরু হতে কোনো সাম্রাজ্য লাগে না। পরীক্ষাটা ছোট আর রোজকার। যে সত্য মানলে আমার কিছু হারাতে হয়, তা এলে আমি কি ভেবে দেখি, নাকি হাত নেড়ে উড়িয়ে দিই; আর আমার নিচের মানুষদের আমি কি দেখি, নাকি পাশ কাটিয়ে যাই। যে তিনজন মাথা নোয়াতে চায়নি, তারা পরিণতি পেরিয়ে যেতে পারেনি। তাদের সেই অস্বীকার যে শিখবে, সেও পারবে না।"
          }
        ]
      }
    ]
  },
  "29:41": {
    "sections": [
      {
        "h": {
          "en": "The Parable Follows a List",
          "bn": "উপমাটি একটি তালিকার পরে আসে"
        },
        "p": [
          {
            "en": "29:38 recalls Ad and Thamud, whose ruined dwellings were still visible to the listeners. 29:39 names Qarun, Fir'awn and Haman. 29:40 sums it up — each one We seized for his sin — and then names four ways it was done: a storm of stones, the blast, the earth swallowing them, and drowning. The parable in 29:41 comes down on people who have just been shown a record.",
            "bn": "29:38 আয়াত স্মরণ করায় আদ ও সামূদকে, যাদের ধ্বংস হয়ে যাওয়া বসতি শ্রোতাদের চোখের সামনেই তখনো দৃশ্যমান ছিল। 29:39 আয়াত নাম নেয় কারূন, ফিরআউন ও হামানের। 29:40 আয়াত সব গুটিয়ে বলে — প্রত্যেককেই আমি তার গুনাহের কারণে পাকড়াও করেছি — আর তারপর চারটি উপায়ের নাম বলে: পাথরবর্ষী ঝড়, বিকট আওয়াজ, যমীনের গ্রাস, আর ডুবিয়ে দেওয়া। 29:41 আয়াতের উপমাটি এসে পড়ে এমন মানুষদের ওপর, যাদের সবেমাত্র একটি নথি দেখানো হয়েছে।"
          },
          {
            "en": "That placement decides how the image is meant to work. It is not a general remark about the fragility of worldly things. It is the explanation of why those particular nations went undefended: every one of them had protectors, and the protectors were not weak in the way a thin rope is weak. They were weak in the way a house is weak once the weather arrives.",
            "bn": "এই অবস্থানই ঠিক করে দেয় চিত্রটি কীভাবে কাজ করার কথা। এটি পার্থিব জিনিসের ভঙ্গুরতা নিয়ে সাধারণ কোনো মন্তব্য নয়। এটি ব্যাখ্যা করে ওই নির্দিষ্ট জাতিগুলো কেন বিনা রক্ষায় পড়ে গেল: তাদের প্রত্যেকেরই অভিভাবক ছিল, আর সেই অভিভাবকেরা সরু দড়ি যেভাবে দুর্বল সেভাবে দুর্বল ছিল না। তারা দুর্বল ছিল সেভাবে, যেভাবে ঝড় এসে পড়লে একটি ঘর দুর্বল প্রমাণিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb They Share",
          "bn": "যে ক্রিয়াপদ তারা ভাগ করে নেয়"
        },
        "p": [
          {
            "en": "Mathal alladhina ittakhadhu min duni'llahi awliya'a ka-mathal al-ankabuti ittakhadhat bayta. One verb governs both halves: ittakhadha, to take for oneself, in the same form both times. They took protectors; she took a house. Nobody assigned either of them. In both halves a creature chose its own arrangement, and then had to go on living underneath the arrangement it had chosen.",
            "bn": "মাসালুল্লাযীনাত্তাখাযূ মিন দূনিল্লাহি আউলিয়াআ কামাসালিল আনকাবূতিত্তাখাযাত বাইতা। একটিই ক্রিয়াপদ দুই অর্ধেকেই কাজ করছে: 'ইত্তাখাযা' অর্থাৎ নিজের জন্য গ্রহণ করা, দুবারই একই গঠনে। তারা অভিভাবক গ্রহণ করেছে; সে একটি ঘর গ্রহণ করেছে। কারও জন্যই তা কেউ ঠিক করে দেয়নি। দুই অর্ধেকেই একটি সৃষ্টি নিজের ব্যবস্থা নিজেই বেছে নিয়েছে, আর তারপর নিজের বেছে নেওয়া সেই ব্যবস্থার নিচেই তাকে বাস করে যেতে হয়েছে।"
          },
          {
            "en": "There is another taker of houses in the Quran, and the contrast is instructive. 16:68 has Allah reveal to the bee: ittakhidhi min al-jibali buyutan — take houses in the mountains. The same verb, but by instruction this time; and 16:69 says what comes out of her, a drink in which there is healing for people. Two builders, two houses, and the difference is who told them to build.",
            "bn": "কুরআনে ঘর-গ্রহণকারী আরও একজন আছে, আর তুলনাটি শিক্ষণীয়। 16:68 আয়াতে আল্লাহ মৌমাছির কাছে ওহি পাঠান: 'ইত্তাখিযী মিনাল জিবালি বুয়ূতা' — পাহাড়ে ঘর বানাও। একই ক্রিয়াপদ, তবে এবার নির্দেশক্রমে; আর 16:69 আয়াত বলে তার ভেতর থেকে কী বের হয় — এমন পানীয়, যাতে মানুষের জন্য আরোগ্য আছে। দুই নির্মাতা, দুটি ঘর, আর পার্থক্যটি হলো নির্মাণের নির্দেশ কে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Frailest of Houses",
          "bn": "সবচেয়ে দুর্বল ঘর"
        },
        "p": [
          {
            "en": "Wa inna awhana al-buyuti la-baytu al-ankabut. Awhan is a superlative: not one weak house among others, but the frailest of them all. The comparison is drawn among houses, which is exactly the point. The web is not badly made for what a spider actually does with it; it is being judged against the single job that a bayt exists to do.",
            "bn": "ওয়া ইন্না আওহানাল বুয়ূতি লাবাইতুল আনকাবূত। 'আওহান' একটি অতিশয়ার্থক রূপ: অন্যদের মধ্যে একটি দুর্বল ঘর নয়, বরং সবগুলোর মধ্যে সবচেয়ে দুর্বল। তুলনাটি টানা হচ্ছে ঘরগুলোর মধ্যে, আর এটিই মূল কথা। মাকড়সা তার জালটিকে আসলে যে কাজে লাগায়, সে কাজের জন্য জালটি খারাপভাবে বানানো নয়; একে বিচার করা হচ্ছে একটি 'বাইত' যে একটিমাত্র কাজের জন্য থাকে, সেই কাজের নিরিখে।"
          },
          {
            "en": "The Arabic commentaries state that job plainly: the spider made a house for herself to protect her, and it availed her nothing when she had need of it. 16:80 says what Allah made a house for — He made your houses a sakan for you, a place of rest and stillness. Ibn Kathir's picture of the idolaters is a man gripping a spider's web and gaining nothing at all from it.",
            "bn": "আরবি তাফসীরগুলো সেই কাজটির কথা স্পষ্টভাবেই বলে: মাকড়সা নিজের সুরক্ষার জন্য নিজের একটি ঘর বানিয়েছিল, অথচ প্রয়োজনের সময় তা তার কোনো কাজেই এল না। 16:80 আয়াত বলে আল্লাহ ঘর কীসের জন্য বানিয়েছেন — তিনি তোমাদের ঘরগুলোকে তোমাদের জন্য 'সাকান' বানিয়েছেন, বিশ্রাম ও স্থিরতার জায়গা। ইবনে কাসীরের আঁকা মুশরিকদের ছবিটি হলো এমন এক মানুষ, যে মাকড়সার জাল আঁকড়ে ধরে আছে অথচ তা থেকে কিছুই পাচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Twice in the Whole Quran",
          "bn": "গোটা কুরআনে দুবার"
        },
        "p": [
          {
            "en": "The word ankabut occurs twice in the entire Quran, and both times inside this one verse. The twenty-ninth surah is nevertheless named after it. So a surah that opens by asking whether people supposed they would be left to say we believe without being tried, at 29:2, carries the name of the frailest house in it — a title about what people lean on when the trial comes.",
            "bn": "'আনকাবূত' শব্দটি গোটা কুরআনে দুবার এসেছে, আর দুবারই এই একটিমাত্র আয়াতের ভেতরে। তবু ঊনত্রিশতম সূরার নাম রাখা হয়েছে এই শব্দেই। অর্থাৎ যে সূরাটি 29:2 আয়াতে শুরুই হয় এই প্রশ্ন দিয়ে যে, মানুষ কি ভেবেছে তাদের কেবল 'আমরা ঈমান এনেছি' বলতে দিয়েই ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না — সেই সূরাটিই বহন করছে তার ভেতরকার সবচেয়ে দুর্বল ঘরের নাম; এমন এক শিরোনাম, যা বলছে পরীক্ষা এলে মানুষ কীসের ওপর ভর দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Handhold That Does Not Break",
          "bn": "যে হাতল ভাঙে না"
        },
        "p": [
          {
            "en": "Ibn Kathir sets the believer opposite the picture: his heart is attached to Allah while his limbs keep to Allah's law, and he has taken hold of the most trustworthy handhold. That is the language of 2:256 — al-urwa al-wuthqa, with no breaking in it — and of 31:22, for whoever submits his face to Allah while doing good. A web tears; a handhold with no break in it does not.",
            "bn": "ইবনে কাসীর এই ছবিটির উল্টো দিকে দাঁড় করান মুমিনকে: তার অন্তর আল্লাহর সঙ্গে যুক্ত, আর তার অঙ্গপ্রত্যঙ্গ আল্লাহর বিধানের ওপর স্থির; সে ধরে নিয়েছে সবচেয়ে মজবুত হাতলটি। এটিই 2:256 আয়াতের ভাষা — 'আল-উরওয়াতুল উসকা', সবচেয়ে মজবুত অবলম্বন, যা ছিন্ন হওয়ার নয় — আর 31:22 আয়াতেরও, যা সেই ব্যক্তির কথা বলে যে সৎকর্মশীল অবস্থায় নিজের মুখ আল্লাহর কাছে সঁপে দেয়। জাল ছিঁড়ে যায়; যে অবলম্বন ছিন্ন হওয়ার নয়, তা ছেঁড়ে না।"
          },
          {
            "en": "29:42 then adds the sentence that closes the door: indeed Allah knows whatever thing they call upon besides Him, and He is the Exalted in Might, the Wise. What was being sought elsewhere is not hidden from Him, and the two names at the end of that verse say plainly where the might and the wisdom actually sit.",
            "bn": "এরপর 29:42 আয়াত যোগ করে সেই বাক্যটি যা দরজা বন্ধ করে দেয়: নিশ্চয়ই আল্লাহ জানেন তারা তাঁকে ছাড়া যা কিছুকেই ডাকে, আর তিনি মহাপরাক্রমশালী, মহাপ্রজ্ঞাময়। অন্যত্র যা খোঁজা হচ্ছিল তা তাঁর কাছে গোপন নয়, আর ওই আয়াতের শেষের দুটি নাম স্পষ্ট করেই বলে দেয় শক্তি ও প্রজ্ঞা আসলে কোথায় আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "If They Only Knew",
          "bn": "যদি তারা জানত"
        },
        "p": [
          {
            "en": "Law kanu ya'lamun — if only they knew. The verse does not say they were told and refused; it says they did not know. Two verses later, 29:43 answers it: and these parables We strike for the people, but none understands them except those of knowledge. The parable is itself a sorting device, and understanding it is the very knowledge whose absence it has just lamented.",
            "bn": "লাউ কানূ ইয়া'লামূন — যদি তারা জানত। আয়াতটি বলে না যে তাদের বলা হয়েছিল আর তারা অস্বীকার করেছে; বলে যে তারা জানত না। দুই আয়াত পরে 29:43 আয়াত তার জবাব দেয়: আর এই উপমাগুলো আমি মানুষের জন্য পেশ করি, কিন্তু জ্ঞানীরা ছাড়া কেউ তা বোঝে না। উপমাটি নিজেই একটি বাছাইযন্ত্র, আর তা বোঝাই সেই জ্ঞান, যার অভাব নিয়ে সে এইমাত্র আক্ষেপ করল।"
          },
          {
            "en": "Ibn Abi Hatim records that Amr ibn Murrah said he never met a verse of the Book of Allah that he did not understand without being grieved by it, because of that closing line. The test this parable leaves behind is not whether a reader can admire the image. It is whether he can name what he has been leaning on this week in a way that only Allah can actually be leaned on.",
            "bn": "ইবনে আবী হাতিম বর্ণনা করেন, আমর ইবনে মুররা বলতেন — আল্লাহর কিতাবের এমন কোনো আয়াতের সামনে তিনি পড়েননি যা তিনি বোঝেননি অথচ তাতে ব্যথিত হননি, আর এর কারণ ওই শেষ বাক্যটিই। এই উপমা যে পরীক্ষাটি রেখে যায় তা এই নয় যে পাঠক চিত্রটির প্রশংসা করতে পারে কি না। পরীক্ষা এই যে, সে বলতে পারে কি না — এই সপ্তাহে সে কীসের ওপর এমনভাবে ভর দিয়েছে, যেভাবে কেবল আল্লাহর ওপরই ভর দেওয়া যায়।"
          }
        ]
      }
    ]
  },
  "29:45": {
    "sections": [
      {
        "h": {
          "en": "Two Commands and a Promise",
          "bn": "দুটি নির্দেশ ও একটি প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "The verse gives the Prophet ﷺ, and every reader after him, two standing commands: utlu — recite what has been revealed to you of the Book — and aqimi as-salah, establish the prayer. Then it attaches a promise to the second: inna as-salata tanha 'ani al-fahsha'i wa-l-munkar, the prayer restrains from shameful deeds and from wrong. Recitation feeds the prayer, and the prayer guards the conduct; the verse wires the Book, the worship and the behaviour into one circuit.",
            "bn": "আয়াতটি নবী ﷺ-কে, এবং তাঁর পরের প্রতিটি পাঠককে, দুটি স্থায়ী নির্দেশ দেয়: 'উতলু' — কিতাব থেকে তোমার প্রতি যা ওহী করা হয়েছে তা তিলাওয়াত করো — এবং 'আকিমিস-সালাহ' — নামায কায়েম করো। তারপর দ্বিতীয়টির সঙ্গে একটি প্রতিশ্রুতি জুড়ে দেয়: 'ইন্নাস-সালাতা তানহা আনিল-ফাহশায়ি ওয়াল-মুনকার' — নামায অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে। তিলাওয়াত নামাযকে খাবার জোগায়, আর নামায আচরণ পাহারা দেয়; আয়াতটি কিতাব, ইবাদত ও আচরণকে একটি বর্তনীতে জুড়ে দেয়।"
          },
          {
            "en": "The setting sharpens it. Surah al-'Ankabut is Meccan and opens at 29:2 with the announcement that people will be tested in their claim of faith; around this verse the surah is arguing with deniers. In that pressure, the resources prescribed for the Prophet ﷺ are not new arguments but tilawah and salah — and salah is the same refuge 2:153 and 20:132 reach for in hardship, each pairing it there with sabr. What steadies the arguer is not more argument; it is contact with the One argued for.",
            "bn": "প্রেক্ষাপট একে ধারালো করে। সূরা আল-আনকাবূত মক্কী, এবং 29:2 আয়াতে এই ঘোষণা দিয়ে শুরু হয় যে মানুষকে তাদের ঈমানের দাবিতে পরীক্ষা করা হবে; এই আয়াতের চারপাশে সূরাটি অস্বীকারকারীদের সঙ্গে বিতর্ক করছে। সেই চাপের মধ্যে নবী ﷺ-এর জন্য নির্ধারিত সম্বল নতুন কোনো যুক্তি নয়, বরং তিলাওয়াত ও সালাত — আর কষ্টের সময় 2:153 ও 20:132 সেই সালাতের দিকেই হাত বাড়ায়, দুই জায়গাতেই তার সঙ্গে জোড়া বাঁধে সবর। বিতর্ককারীকে যা স্থির রাখে তা আরও বিতর্ক নয়; বরং যাঁর পক্ষে বিতর্ক, তাঁর সঙ্গে সংযোগ।"
          }
        ]
      },
      {
        "h": {
          "en": "Establish, Not Perform",
          "bn": "কায়েম করা, সারা নয়"
        },
        "p": [
          {
            "en": "The command is aqim — set upright — not merely 'pray'. The mufassirun read in it the difference between discharging a duty and establishing a practice: on time, with its conditions, its stillness and its presence of heart. The promise of restraint in the next clause belongs to prayer established, not prayer performed anyhow. That distinction spares the verse from the obvious objection — that some people pray and still transgress — by asking what kind of prayer theirs is.",
            "bn": "নির্দেশটি 'আকিম' — খাড়া করে দাঁড় করানো — নিছক 'নামায পড়ো' নয়। মুফাসসিরগণ এর মধ্যে পড়েন দায় সারা আর চর্চা কায়েম করার পার্থক্য: সময়মতো, তার শর্তাবলি, তার স্থিরতা ও অন্তরের উপস্থিতিসহ। পরের বাক্যের বিরত রাখার প্রতিশ্রুতিটি কায়েম করা নামাযের প্রাপ্য — যেনতেনভাবে সারা নামাযের নয়। এই পার্থক্যই আয়াতটিকে চেনা আপত্তি থেকে বাঁচায় — কেউ কেউ তো নামায পড়েও সীমা লঙ্ঘন করে — পাল্টা প্রশ্ন তুলে: তাদের নামাযটি কেমন নামায?"
          },
          {
            "en": "Fahsha' covers the shameless acts; munkar is broader — whatever sound nature and the law together reject. Tanha, restrains, is the verb of a prohibitor: the prayer itself is pictured as forbidding its person, standing between him and what disgraces him. Five appointments a day with the One who sees him retrain what a person can comfortably do with the hours in between; whoever genuinely keeps meeting Allah at dawn finds certain deeds at midnight harder to sit in.",
            "bn": "'ফাহশা' ঢাকে নির্লজ্জ কাজগুলোকে; 'মুনকার' আরও প্রশস্ত — সুস্থ স্বভাব ও শরীয়ত মিলে যা কিছু প্রত্যাখ্যান করে। 'তানহা' — বিরত রাখে — একজন নিষেধকারীর ক্রিয়া: নামাযকেই চিত্রিত করা হয়েছে তার মানুষটিকে নিষেধকারী রূপে — তার এবং তাকে অপমানিত করে এমন সবকিছুর মাঝখানে দাঁড়ানো। যিনি তাকে দেখছেন তাঁর সঙ্গে দিনে পাঁচটি সাক্ষাৎ বদলে দেয় মাঝের ঘণ্টাগুলোতে মানুষ স্বচ্ছন্দে কী করতে পারে; যে সত্যিই ভোরে আল্লাহর সঙ্গে সাক্ষাৎ চালিয়ে যায়, মধ্যরাতের কিছু কাজে বসে থাকা তার জন্য কঠিন হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Prayer Restrains",
          "bn": "নামায কীভাবে বিরত রাখে"
        },
        "p": [
          {
            "en": "The restraint works by repetition and by memory. Repetition: wrongdoing needs privacy and forgetfulness, and an established prayer dismantles both on a fixed schedule — 20:14 ties the two openly: establish the prayer for My remembrance. Memory: the one standing in prayer rehearses, five times daily, who is watching, and that rehearsal follows him out. 70:19-23 draw the same portrait from the other side: man is anxious and grasping — except the praying ones, those who are constant at their prayer.",
            "bn": "এই বিরত রাখা কাজ করে পুনরাবৃত্তি ও স্মরণের মাধ্যমে। পুনরাবৃত্তি: অন্যায়ের দরকার গোপনীয়তা ও বিস্মৃতি, আর কায়েম করা নামায নির্দিষ্ট সময়সূচিতে দুটোই ভেঙে দেয় — 20:14 দুটিকে খোলাখুলি বাঁধে: আমার স্মরণের জন্য নামায কায়েম করো। স্মরণ: নামাযে দাঁড়ানো মানুষ দিনে পাঁচবার মহড়া দেয় কে দেখছেন, আর সেই মহড়া তার পিছু পিছু বাইরে আসে। 70:19-23 উল্টো দিক থেকে একই ছবি আঁকে: মানুষ অস্থির ও আঁকড়ে ধরা স্বভাবের — নামাযিরা ছাড়া, যারা নিজেদের নামাযে অবিচল।"
          },
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that the Prophet ﷺ asked: if a river ran at the door of one of you and he bathed in it five times every day, would any dirt remain on him? They said none. He said: that is the likeness of the five prayers, by which Allah erases sins. Erasure and restraint are two services of the same appointment — what prayer does not prevent, prayer washes, so long as the appointment is kept.",
            "bn": "বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ জিজ্ঞেস করলেন: তোমাদের কারও দরজায় যদি একটি নদী বইত আর সে তাতে প্রতিদিন পাঁচবার গোসল করত, তার গায়ে কি কোনো ময়লা থাকত? তাঁরা বললেন: কিছুই না। তিনি বললেন: এ-ই পাঁচ ওয়াক্ত নামাযের উপমা, যা দিয়ে আল্লাহ গুনাহ মুছে দেন। মুছে দেওয়া ও বিরত রাখা একই সাক্ষাতের দুটি সেবা — নামায যা ঠেকায় না, নামায তা ধুয়ে দেয়, যতক্ষণ সাক্ষাৎটি বজায় থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Remembrance of Allah, Greater",
          "bn": "আল্লাহর স্মরণই মহত্তর"
        },
        "p": [
          {
            "en": "Wa-la-dhikru Allahi akbar. The early commentators, as Tabari records, gave the clause more than one sense, and each stands. From Ibn Abbas (RA): Allah's remembrance of you is greater than your remembrance of Him. Others: the remembrance of Allah inside the prayer is greater than its other parts; or, remembrance of Allah is itself the greatest restrainer, beyond even the prayer's restraint. The phrase is wide enough that the mufassirun could hold these together rather than choose.",
            "bn": "'ওয়া-লাযিকরুল্লাহি আকবার'। প্রাথমিক যুগের মুফাসসিরগণ, তাবারী যেমন লিপিবদ্ধ করেন, বাক্যাংশটির একাধিক অর্থ দিয়েছেন, এবং প্রতিটিই টেকে। ইবনে আব্বাস (রাঃ) থেকে: তোমাদের প্রতি আল্লাহর স্মরণ, তাঁর প্রতি তোমাদের স্মরণের চেয়ে মহত্তর। অন্যরা: নামাযের ভেতরে আল্লাহর যিকিরই তার অন্য অংশগুলোর চেয়ে মহত্তর; অথবা, আল্লাহর যিকির নিজেই সবচেয়ে বড় নিবারক — এমনকি নামাযের নিবারণকেও ছাড়িয়ে। বাক্যাংশটি এতটাই প্রশস্ত যে মুফাসসিরগণ বেছে নেওয়ার বদলে এগুলোকে একসঙ্গে ধরে রাখতে পেরেছেন।"
          },
          {
            "en": "Whichever is read, the clause reorders ambitions. If His remembrance of you outweighs yours of Him, then dhikr is answered attention, not a call into a void. If dhikr is the prayer's core, then the goal inside every rak'ah is the remembering, not the completing. And if dhikr restrains more than anything, then the tongue and heart carry a portable guard between prayers. The verse closes on watchfulness either way: and Allah knows what you do.",
            "bn": "যেটিই পড়া হোক, বাক্যাংশটি উচ্চাকাঙ্ক্ষার ক্রম বদলে দেয়। তোমার প্রতি তাঁর স্মরণ যদি তাঁর প্রতি তোমার স্মরণের চেয়ে ভারী হয়, তবে যিকির হলো সাড়া পাওয়া মনোযোগ — শূন্যে ছোড়া ডাক নয়। যিকির যদি নামাযের মর্মবস্তু হয়, তবে প্রতিটি রাকাতের ভেতরের লক্ষ্য স্মরণ করা — শেষ করা নয়। আর যিকির যদি সবকিছুর চেয়ে বেশি বিরত রাখে, তবে জিহ্বা ও অন্তর নামাযগুলোর মাঝের সময়ে একটি বহনযোগ্য প্রহরী সঙ্গে রাখে। যেভাবেই হোক, আয়াতটি শেষ হয় সতর্ক দৃষ্টিতে: আর তোমরা যা করো আল্লাহ তা জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When Prayer Seems Not to Work",
          "bn": "নামায যখন কাজ করছে বলে মনে হয় না"
        },
        "p": [
          {
            "en": "The honest question — I pray and still sin — is answered from inside the verse. The claim is about prayer established: presence, correctness, constancy. To the degree those rise, the restraint rises; a prayer that is all shell restrains like a shell. The direction of repair is therefore not to doubt the promise or drop the prayer, but to establish it further — earlier, stiller, better understood — and to let 107:4-5, woe to those heedless of their prayer, describe the failure honestly.",
            "bn": "সৎ প্রশ্নটির — আমি নামায পড়ি তবু গুনাহ করি — উত্তর আয়াতের ভেতর থেকেই আসে। দাবিটি কায়েম করা নামায সম্পর্কে: উপস্থিতি, শুদ্ধতা, নিয়মানুবর্তিতা। এগুলো যত বাড়ে, বিরত রাখাও তত বাড়ে; যে নামায পুরোটাই খোলস, সে খোলসের মতোই বিরত রাখে। তাই মেরামতের দিকটি প্রতিশ্রুতিতে সন্দেহ করা বা নামায ছেড়ে দেওয়া নয়, বরং তাকে আরও কায়েম করা — আরও আগে, আরও স্থির, আরও বুঝে — আর 107:4-5 আয়াতকে — দুর্ভোগ সেই নামাযিদের, যারা নিজেদের নামাযে উদাসীন — ব্যর্থতাটির সৎ বর্ণনা হতে দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "The Daily Circuit",
          "bn": "দৈনিক বর্তনী"
        },
        "p": [
          {
            "en": "Lived, the verse is a maintenance schedule. Recite daily — the Book is the prayer's fuel, and the verse put tilawah first. Guard the five on time — establishment begins with punctuality, whatever else follows. Then audit conduct against prayer: when a sin repeats, examine the salah before the circumstance, because the verse has tied them. And thread dhikr through the gaps, since the greater thing needs no wudu, no direction and no fixed hour.",
            "bn": "যাপনের স্তরে আয়াতটি একটি রক্ষণাবেক্ষণ-সূচি। প্রতিদিন তিলাওয়াত করুন — কিতাবই নামাযের জ্বালানি, আর আয়াতটি তিলাওয়াতকে আগে রেখেছে। পাঁচ ওয়াক্ত সময়মতো রক্ষা করুন — কায়েম করা শুরু হয় সময়ানুবর্তিতা দিয়ে, বাকি যা-ই আসুক। তারপর আচরণকে নামাযের বিপরীতে নিরীক্ষা করুন: কোনো গুনাহ বারবার ফিরলে পরিস্থিতির আগে সালাতটি পরীক্ষা করুন, কারণ আয়াত এ দুটিকে বেঁধে দিয়েছে। আর ফাঁকগুলোতে যিকির বুনে দিন, কারণ মহত্তর জিনিসটির জন্য অযু লাগে না, কিবলা লাগে না, নির্দিষ্ট সময়ও লাগে না।"
          },
          {
            "en": "The end of the verse quietly closes the loop: wa-Allahu ya'lamu ma tasna'un, Allah knows what you do. The same knowledge that makes sin shameful makes hidden fidelity worthwhile. No one else may ever see the recitation before dawn or the wrong turned down at midday; the last clause says the only audience that mattered saw both, and that the prayer, the restraint and the remembrance were all witnessed by Him.",
            "bn": "আয়াতের শেষাংশ নীরবে বৃত্তটি বন্ধ করে: 'ওয়াল্লাহু ইয়ালামু মা তাসনাউন' — তোমরা যা করো আল্লাহ তা জানেন। যে জ্ঞান গুনাহকে লজ্জাজনক করে, সেই একই জ্ঞান গোপন বিশ্বস্ততাকে মূল্যবান করে। ভোরের আগের তিলাওয়াত কিংবা দুপুরে ফিরিয়ে দেওয়া অন্যায়ের প্রস্তাব — অন্য কেউ হয়তো কোনোদিনই দেখবে না; শেষ বাক্যটি বলে, যে দর্শকের দেখা জরুরি ছিল তিনি দুটোই দেখেছেন — আর নামায, বিরত থাকা ও স্মরণ, সবকিছুরই সাক্ষী তিনি।"
          }
        ]
      }
    ]
  },
  "29:60": {
    "sections": [
      {
        "h": {
          "en": "Where the Passage Is Going",
          "bn": "অংশটি কোথায় যাচ্ছে"
        },
        "p": [
          {
            "en": "29:56 addresses believing servants directly: My earth is spacious, so worship Me. 29:57 follows with every soul tasting death and then being returned to Him, and 29:58 promises chambers in Paradise to those who believe and work righteousness. 29:59 then names them: those who were patient and who rely upon their Lord. Our verse comes immediately after that naming, and it reads best as the argument attached to the word tawakkul in the line before it.",
            "bn": "29:56 সরাসরি ঈমানদার বান্দাদের সম্বোধন করে: আমার যমীন প্রশস্ত, কাজেই আমারই ইবাদত করো। এরপর 29:57 বলে, প্রত্যেক প্রাণ মৃত্যুর স্বাদ নেবে, তারপর তাদের তাঁর দিকেই ফিরিয়ে নেওয়া হবে; আর 29:58 প্রতিশ্রুতি দেয় জান্নাতের কক্ষের, তাদের জন্য যারা ঈমান আনে ও সৎকাজ করে। এরপর 29:59 তাদের পরিচয় দেয়: যারা ধৈর্য ধরেছে এবং তাদের প্রতিপালকের ওপর ভরসা করে। আমাদের আয়াতটি ঠিক এই পরিচয়ের পরপরই আসে, আর একে আগের লাইনের 'তাওয়াক্কুল' শব্দটির সঙ্গে জুড়ে দেওয়া যুক্তি হিসেবে পড়াই সবচেয়ে ভালো।"
          },
          {
            "en": "That placement decides the tone. The verse is not consoling someone who has lost his income; it is answering a believer who has been told to act and is quietly calculating the cost. Commentators connect the passage with the situation of Muslims weighing whether to leave their homes, and the reports about that connection vary. The surah itself supplies enough: a command requiring movement, a mention of patience and reliance, and then a sentence about who feeds whom.",
            "bn": "এই অবস্থানই সুরটি ঠিক করে দেয়। আয়াতটি এমন কাউকে সান্ত্বনা দিচ্ছে না যে তার আয় হারিয়েছে; বরং এটি এমন এক মুমিনকে জবাব দিচ্ছে যাকে পদক্ষেপ নিতে বলা হয়েছে আর যে চুপচাপ খরচের হিসাব কষছে। মুফাসসিরগণ এই অংশটিকে সেই মুসলিমদের অবস্থার সঙ্গে যুক্ত করেন যারা ঘরবাড়ি ছাড়ার কথা ভাবছিলেন, তবে সেই সংযোগ নিয়ে বর্ণনাগুলো ভিন্ন ভিন্ন। সূরা নিজেই যথেষ্ট সূত্র দেয়: এমন এক নির্দেশ যা নড়াচড়া দাবি করে, ধৈর্য ও ভরসার উল্লেখ, তারপর একটি বাক্য — কে কাকে খাওয়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "How Many a Creature",
          "bn": "কত যে প্রাণী"
        },
        "p": [
          {
            "en": "Ka-ayyin min dabbah — how many a creature. The expression is one of quantity, and it invites a count the listener knows he cannot complete. Notice also what this verse does not say. 11:6 states the guarantee as something 'ala Allah, incumbent upon Him by His own undertaking, and marks its field as what moves on the earth. Here there is no preposition of obligation and no restriction of ground: simply Allahu yarzuquha, Allah provides for it.",
            "bn": "কাআইয়্যিন মিন দাব্বাহ — কত যে প্রাণী। এটি পরিমাণ বোঝানোর প্রকাশভঙ্গি, আর এটি এমন এক গণনার আহ্বান জানায় যা শ্রোতা জানে সে শেষ করতে পারবে না। আরও লক্ষ করুন, এই আয়াত কী বলে না। 11:6 নিশ্চয়তাটিকে বলে 'আলাল্লাহ' — নিজ অঙ্গীকারে তাঁর ওপর অর্পিত, আর তার ক্ষেত্র চিহ্নিত করে যমীনে বিচরণশীল প্রাণী দিয়ে। এখানে দায়িত্ববোধক কোনো অব্যয় নেই, ভূমির কোনো সীমাবদ্ধতাও নেই: কেবল আল্লাহু ইয়ারযুকুহা — আল্লাহ তাকে রিযক দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying No Store",
          "bn": "যারা সঞ্চয় বহন করে না"
        },
        "p": [
          {
            "en": "La tahmilu rizqaha — it does not carry its provision. The commentators read this chiefly of storing: creatures that keep no granary and set nothing aside, and are fed all the same. Some also take the verb in the sense of being too weak to bear it. Either way the creature is described by what it lacks, and the lack is presented as no obstacle whatever to its being fed on the day it needs feeding.",
            "bn": "লা তাহমিলু রিযকাহা — সে নিজের রিযক বহন করে না। মুফাসসিরগণ একে প্রধানত সঞ্চয়ের অর্থে পড়েন: এমন প্রাণী যারা কোনো গোলা রাখে না, কিছুই জমিয়ে রাখে না, তবু তারা খাওয়া পায়। কেউ কেউ ক্রিয়াপদটিকে এই অর্থেও নেন যে সে বহন করার মতো যথেষ্ট শক্তিই রাখে না। যেভাবেই পড়া হোক, প্রাণীটিকে চেনানো হচ্ছে তার অভাব দিয়ে — আর সেই অভাবকে দেখানো হচ্ছে এমন কিছু হিসেবে যা যেদিন তার খাওয়া দরকার সেদিন খাওয়া পাওয়ার পথে কোনো বাধাই নয়।"
          },
          {
            "en": "At-Tirmidhi relates from Umar (RA) that the Prophet ﷺ said: if you relied upon Allah with true reliance, He would provide for you as He provides for the birds — they go out hungry in the morning and return full. The detail worth keeping is the hunger at dawn. The guarantee in this verse is not a stock deposited in advance; it is a delivery made daily, and the birds begin every single morning with nothing at all in hand.",
            "bn": "ইমাম তিরমিযী উমার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: তোমরা যদি আল্লাহর ওপর যথাযথভাবে ভরসা করতে, তবে তিনি তোমাদের রিযক দিতেন যেভাবে পাখিদের দেন — তারা সকালে ক্ষুধার্ত অবস্থায় বের হয় আর পেট ভরে ফিরে আসে। ধরে রাখার মতো বিষয়টি হলো ভোরের সেই ক্ষুধা। এই আয়াতের নিশ্চয়তা আগে থেকে জমিয়ে রাখা কোনো ভাণ্ডার নয়; এটি প্রতিদিনের সরবরাহ, আর পাখিরা প্রতিটি সকাল শুরু করে হাতে কিছুই না নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "And For You",
          "bn": "আর তোমাদেরকেও"
        },
        "p": [
          {
            "en": "Then the clause the verse turns on: Allahu yarzuquha wa iyyakum — Allah provides for it and for you. The reader is placed inside the same sentence as the creature, and one verb covers both. Human anxiety survives by keeping those two apart: the bird needs little and lives briefly, whereas my costs are complex and my dependants are real. The Arabic refuses the separation by making a single act reach both parties.",
            "bn": "এরপর আসে সেই বাক্যাংশ যার ওপর আয়াতটি ঘোরে: আল্লাহু ইয়ারযুকুহা ওয়া ইয়্যাকুম — আল্লাহ তাকে রিযক দেন এবং তোমাদেরকেও। পাঠককে সেই প্রাণীটির সঙ্গে একই বাক্যের ভেতর বসিয়ে দেওয়া হয়েছে, আর একটিই ক্রিয়াপদ দুইকেই ধরে। মানুষের উদ্বেগ টিকে থাকে এ দুটিকে আলাদা রেখে: পাখির প্রয়োজন সামান্য ও আয়ু সংক্ষিপ্ত, আর আমার খরচ জটিল ও আমার নির্ভরশীলরা বাস্তব। আরবি একটিমাত্র কাজকে দুই পক্ষ পর্যন্ত পৌঁছে দিয়ে এই বিভাজন মানতে অস্বীকার করে।"
          },
          {
            "en": "17:31 uses the same move against a sharper fear. There people are told not to kill their children out of fear of poverty, and the reason given is that We provide for them and for you. The order in that verse puts the children first, because they were the ones whose maintenance was being doubted. In both places the argument is identical: the one you are afraid you cannot feed is already on somebody else's list.",
            "bn": "17:31 একই কৌশল ব্যবহার করে আরও তীব্র এক ভয়ের বিরুদ্ধে। সেখানে মানুষকে বলা হয়েছে, দারিদ্র্যের ভয়ে নিজেদের সন্তানদের হত্যা কোরো না, আর কারণ হিসেবে বলা হয়েছে — আমিই তাদেরকে ও তোমাদেরকে রিযক দিই। ঐ আয়াতের ক্রমে সন্তানরা আগে, কারণ তাদের ভরণপোষণ নিয়েই সন্দেহ করা হচ্ছিল। দুই জায়গাতেই যুক্তি একই: যাকে খাওয়াতে পারবেন না বলে আপনি ভয় পাচ্ছেন, সে ইতিমধ্যেই অন্য কারও তালিকায় আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hearing, the Knowing",
          "bn": "সর্বশ্রোতা, সর্বজ্ঞ"
        },
        "p": [
          {
            "en": "The verse closes with two names rather than one: as-Sami' al-'Alim. Both are chosen. Hearing meets the need that has been spoken — the request made in words, at night, by someone who has told no other person about it. Knowing meets the need that has not been spoken, including needs a person has not yet identified in himself. Between them the two names cover the asked and the unasked, which is the whole of what anyone worries about.",
            "bn": "আয়াতটি একটির বদলে দুটি নাম দিয়ে শেষ হয়: আস-সামী' ও আল-আলীম। দুটিই বেছে নেওয়া। শ্রবণ সাড়া দেয় সেই প্রয়োজনে যা মুখে বলা হয়েছে — রাতে ভাষায় করা সেই প্রার্থনা, যার কথা মানুষটি আর কাউকে বলেনি। আর জ্ঞান সাড়া দেয় সেই প্রয়োজনে যা বলা হয়নি, এমনকি যে প্রয়োজনগুলো মানুষ নিজেই নিজের ভেতরে এখনো চিনতে পারেনি সেগুলোতেও। দুটি নাম মিলে বলা ও না-বলা দুই-ই ঢেকে দেয় — আর মানুষের দুশ্চিন্তা এ দুইয়ের বাইরে কিছু নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Trust That Still Goes Out",
          "bn": "যে ভরসা তবু বেরিয়ে পড়ে"
        },
        "p": [
          {
            "en": "Nothing here cancels effort, and the same surah says so. In 29:17 Ibrahim (AS) tells his people that the things they worship besides Allah possess no provision for them, and then commands: so seek provision from Allah, worship Him, and be grateful to Him. Seeking is an imperative in that sentence. The verse under discussion changes the address to which the request is sent, not the fact that a person gets up and works for it.",
            "bn": "এখানে পরিশ্রম বাতিল হচ্ছে না, আর এই সূরাই তা বলে দেয়। 29:17-এ ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে বলেন, আল্লাহ ছাড়া তারা যাদের ইবাদত করে তাদের হাতে তাদের জন্য কোনো রিযক নেই; তারপর নির্দেশ দেন — কাজেই আল্লাহর কাছে রিযক তালাশ করো, তাঁর ইবাদত করো, আর তাঁর কৃতজ্ঞতা আদায় করো। ঐ বাক্যে 'তালাশ করা' একটি আদেশ। আলোচ্য আয়াতটি বদলে দেয় আবেদনটি কোন ঠিকানায় পাঠানো হবে, কিন্তু মানুষ যে উঠে গিয়ে তার জন্য পরিশ্রম করে সেই বাস্তবতা বদলায় না।"
          },
          {
            "en": "The guarantee also has a shape, and 29:62 supplies it two verses later: Allah extends provision for whom He wills of His servants and restricts it. Sustenance is promised; abundance is not. Reading 29:60 without 29:62 turns a promise of being fed into a promise of being comfortable, which this surah never made. The anxiety the verse removes is about survival and about being remembered, not about the size of the portion.",
            "bn": "এই নিশ্চয়তারও একটি আকার আছে, আর দুই আয়াত পরে 29:62 সেটি দিয়ে দেয়: আল্লাহ তাঁর বান্দাদের মধ্যে যার জন্য চান রিযক প্রশস্ত করেন, আর যার জন্য চান সীমিত করেন। জীবিকার প্রতিশ্রুতি আছে; প্রাচুর্যের নেই। 29:62 বাদ দিয়ে 29:60 পড়লে খাওয়ানোর প্রতিশ্রুতি স্বচ্ছলতার প্রতিশ্রুতিতে বদলে যায়, যা এই সূরা কখনোই দেয়নি। আয়াতটি যে উদ্বেগ সরায় তা বেঁচে থাকা ও স্মরণে থাকা নিয়ে, অংশের আকার নিয়ে নয়।"
          }
        ]
      }
    ]
  },
  "29:64": {
    "sections": [
      {
        "h": {
          "en": "This Life, Pointed At",
          "bn": "এই জীবনটির দিকে আঙুল"
        },
        "p": [
          {
            "en": "The appraisal in this verse appears elsewhere in the Quran, but not in these exact words. 6:32 begins wa ma al-hayat ad-dunya, and the worldly life is not but. This verse begins wa ma hadhihi al-hayat ad-dunya, and this worldly life is not but. The demonstrative hadhihi, this, is the whole difference. A pointing word takes the general estimate and sets it down on the life the listener is currently living.",
            "bn": "এই আয়াতের মূল্যায়নটি কুরআনে অন্যত্রও এসেছে, তবে ঠিক এই শব্দগুলোতে নয়। 6:32 আয়াত শুরু হয় 'ওয়া মা-ল হায়াতুদ দুনইয়া' — আর দুনিয়ার জীবন তো কিছুই নয়। আর এই আয়াত শুরু হয় 'ওয়া মা হাযিহিল হায়াতুদ দুনইয়া' — আর এই দুনিয়ার জীবন তো কিছুই নয়। পার্থক্যটা পুরোটাই নির্দেশক শব্দ 'হাযিহি', অর্থাৎ 'এই'। একটি নির্দেশক শব্দ সাধারণ মূল্যায়নটিকে তুলে এনে ঠিক সেই জীবনের উপর বসিয়ে দেয় যা শ্রোতা এই মুহূর্তে যাপন করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Order Is Reversed",
          "bn": "ক্রমটি উল্টে গেছে"
        },
        "p": [
          {
            "en": "6:32 names two things and stops: la'ib, play, then lahw, diversion. This verse names the same two and reverses them — lahw first, then la'ib; the order is visible in the Arabic and in most English renderings, though some translations fuse the pair into a single phrase. 47:36 keeps the order of 6:32 but uses innama in place of the wa ma … illa construction, and 57:20 stretches the same appraisal to five items ending in a crop that dries and yellows. The Quran repeats the judgement and varies the arrangement, which is how it marks a matter as settled.",
            "bn": "6:32 আয়াত দুটি জিনিসের নাম নিয়ে থেমে যায়: লা'ইব — খেলা, তারপর লাহও — অন্যমনস্ক করা কৌতুক। এই আয়াত সেই একই দুটির নাম নেয়, তবে উল্টো ক্রমে — আগে লাহও, পরে লা'ইব। 47:36 আয়াত 6:32-এর ক্রমই রাখে, কিন্তু 'ওয়া মা … ইল্লা' গঠনের বদলে ব্যবহার করে 'ইন্নামা'; আর 57:20 আয়াত একই মূল্যায়নকে পাঁচটি বিষয়ে বিস্তৃত করে শেষ করে এমন ফসলে যা শুকিয়ে হলুদ হয়ে যায়। কুরআন রায়টি বারবার বলে এবং বিন্যাস বদলায় — এভাবেই সে বোঝায় যে বিষয়টি স্থিরীকৃত। (বাংলা অনুবাদে দুই আয়াতেই শব্দ দুটি একত্রে এসেছে — 6:32-এ 'খেল-তামাশা', এখানে 'ক্রীড়া-কৌতুক' — তাই ক্রমটি কেবল আরবিতেই ধরা পড়ে।)"
          },
          {
            "en": "The two words are not synonyms. La'ib is play: exertion that produces nothing and was never intended to. Lahw comes from a root carrying the sense of being turned away from something, so it is the diversion that occupies a person while what matters goes unattended. Putting lahw first here begins with the more serious of the two — not the harmlessness of the activity but the thing it is keeping you from.",
            "bn": "শব্দ দুটি সমার্থক নয়। লা'ইব হলো খেলা: এমন পরিশ্রম যা কিছুই উৎপাদন করে না এবং যার কখনো তেমন উদ্দেশ্যও ছিল না। লাহও এসেছে এমন এক ধাতু থেকে যা কোনো কিছু থেকে ফিরিয়ে নেওয়ার অর্থ বহন করে; তাই এটি সেই কৌতুক যা মানুষকে ব্যস্ত রাখে আর এদিকে জরুরি কাজটি অযত্নে পড়ে থাকে। এখানে লাহওকে আগে বসানোর মানে শুরু করা হয়েছে দুটির মধ্যে গুরুতরটি দিয়ে — কাজটি কতটা নিরীহ তা দিয়ে নয়, বরং তা আপনাকে কী থেকে দূরে রাখছে তা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hayawan",
          "bn": "আল-হায়াওয়ান"
        },
        "p": [
          {
            "en": "The second half of the verse is where the language becomes unusual. Wa inna ad-dar al-akhirata la-hiya al-hayawan. The construction is heavy with emphasis: inna at the front, then the separating pronoun hiya, then the lam of emphasis attached to it. Arabic has three separate ways here of saying that the claim is not being softened, and the verse uses all three before it reaches the noun.",
            "bn": "আয়াতের দ্বিতীয় অংশেই ভাষাটি অস্বাভাবিক হয়ে ওঠে। ওয়া ইন্নাদ দারাল আখিরাতা লাহিয়াল হায়াওয়ান। গঠনটি জোরে ভারী: শুরুতে 'ইন্না', তারপর বিচ্ছেদক সর্বনাম 'হিয়া', আর তার সাথে যুক্ত জোরের 'লাম'। আরবির কাছে এখানে তিনটি আলাদা উপায় আছে এ কথা বলার যে দাবিটিকে নরম করা হচ্ছে না — আর আয়াতটি বিশেষ্যে পৌঁছানোর আগেই তিনটিই ব্যবহার করে ফেলে।"
          },
          {
            "en": "Then the noun itself: al-hayawan, which occurs nowhere else in the Quran. It is built from the root of hayat, life, in an intensified form, so it does not simply mean a life. Ibn Kathir glosses it as the true and everlasting life that will never end but continues on and on. Beside it, the word the verse used for the dunya is al-hayat, the ordinary noun. Of the two lives named in one sentence, only one has been given the heightened form.",
            "bn": "তারপর বিশেষ্যটি নিজে: আল-হায়াওয়ান, যা কুরআনে আর কোথাও আসেনি। এটি গড়া হয়েছে 'হায়াত' অর্থাৎ জীবনের ধাতু থেকে, একটি তীব্রতাবাচক রূপে; তাই এর অর্থ নিছক 'একটি জীবন' নয়। ইবনে কাসীর এর ব্যাখ্যা করেন সেই প্রকৃত ও চিরস্থায়ী জীবন হিসেবে, যা কখনো শেষ হবে না বরং চলতেই থাকবে। এর পাশেই দুনিয়ার জন্য আয়াতটি ব্যবহার করেছে 'আল-হায়াত' — সাধারণ শব্দটি। এক বাক্যে নাম নেওয়া দুটি জীবনের মধ্যে কেবল একটিকেই বাড়ানো রূপটি দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses on Either Side",
          "bn": "দুই পাশের আয়াত"
        },
        "p": [
          {
            "en": "29:63, just before, puts a question to the deniers: who sends down water from the sky and gives life by it to the earth after its death? They would surely answer, Allah. The verse then instructs, say praise be to Allah, and adds that most of them do not reason. So the people addressed already hold the correct answer. What they do not do with it is the subject of the sentence that follows.",
            "bn": "ঠিক আগের আয়াত 29:63 অস্বীকারকারীদের সামনে একটি প্রশ্ন রাখে: কে আকাশ থেকে পানি নামান এবং তা দিয়ে মৃত যমীনকে জীবিত করেন? তারা অবশ্যই বলবে, আল্লাহ। এরপর আয়াতটি নির্দেশ দেয়, বলো — সমস্ত প্রশংসা আল্লাহর; আর যোগ করে যে তাদের অধিকাংশই বোঝে না। অর্থাৎ যাদের সম্বোধন করা হচ্ছে, সঠিক উত্তরটি তাদের হাতেই আছে। সেই উত্তর দিয়ে তারা কী করে না — পরের বাক্যটির বিষয় সেটাই।"
          },
          {
            "en": "29:65, just after, gives the picture: when they board a ship they call upon Allah, sincere to Him in religion; but when He delivers them to the land, at once they associate others with Him. The sincerity was real and it was temporary. Between these two neighbours the verse about la'ib and lahw stops being an opinion about entertainment and becomes a diagnosis of a knowledge that does not survive contact with dry ground.",
            "bn": "ঠিক পরের আয়াত 29:65 ছবিটি এঁকে দেয়: তারা যখন নৌযানে ওঠে তখন দ্বীনকে তাঁরই জন্য নিষ্ঠাপূর্ণ রেখে আল্লাহকে ডাকে; কিন্তু তিনি যখন তাদের স্থলে পৌঁছে দেন, তখনই তারা তাঁর সাথে অংশীদার বানায়। নিষ্ঠাটি সত্যিকারের ছিল, আর সেটি ছিল সাময়িক। এই দুই প্রতিবেশীর মাঝখানে দাঁড়িয়ে লা'ইব ও লাহও নিয়ে আয়াতটি আর বিনোদন সম্পর্কে কোনো মতামত থাকে না; তা হয়ে ওঠে এমন এক জ্ঞানের রোগনির্ণয়, যা শুকনো মাটির স্পর্শ পেলেই টেকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "If Only They Knew",
          "bn": "তারা যদি জানত"
        },
        "p": [
          {
            "en": "Law kanu ya'lamun, if only they knew, closes the verse. Read against 29:63 it cannot mean that they lack the information, because that verse has just had them state the right answer out loud. Ibn Kathir draws the practical sense of the clause: had they known, they would prefer what lasts to what passes away. Knowing, in this idiom, is what has changed a preference. Anything short of that is a fact a person is carrying, not a thing he knows.",
            "bn": "লাও কানু ইয়া'লামুন — তারা যদি জানত — এই কথায় আয়াতটি শেষ হয়। 29:63 আয়াতের পাশে রেখে পড়লে এর অর্থ এই হতে পারে না যে তাদের কাছে তথ্য নেই, কারণ ওই আয়াতেই তারা সঠিক উত্তরটি মুখে উচ্চারণ করেছে। ইবনে কাসীর এই বাক্যাংশের ব্যবহারিক অর্থ বের করেন: তারা যদি জানত, তবে যা বিলীন হয় তার চেয়ে যা টিকে থাকে তাকেই তারা বেছে নিত। এই বাগ্‌ধারায় 'জানা' মানে যা একটি পছন্দকে বদলে দিয়েছে। এর কম যা কিছু, তা মানুষের বয়ে বেড়ানো তথ্য — জানা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Knowledge Crosses Over",
          "bn": "যখন জ্ঞান পার হয়ে আসে"
        },
        "p": [
          {
            "en": "Ibn Ishaq preserves a report about Ikrimah ibn Abi Jahl (RA), who fled by sea after the conquest of Makkah. The ship began to founder, and the crew told the passengers to call sincerely upon their Lord alone, since nobody else could save them. He reasoned that if only Allah saves at sea then only Allah saves on land as well, and he vowed to go back and put his hand in the hand of the Prophet ﷺ. He went back, and he did.",
            "bn": "ইবনে ইসহাক ইকরিমা ইবনে আবু জাহল (রাঃ) সম্পর্কে একটি বর্ণনা সংরক্ষণ করেছেন, যিনি মক্কা বিজয়ের পর সমুদ্রপথে পালিয়ে যাচ্ছিলেন। নৌযানটি টালমাটাল হয়ে পড়লে নাবিকরা যাত্রীদের বলল, একনিষ্ঠভাবে কেবল নিজেদের প্রতিপালককেই ডাকো, কারণ আর কেউ তাদের বাঁচাতে পারবে না। তিনি ভাবলেন, সমুদ্রে যদি কেবল আল্লাহই রক্ষা করেন, তবে স্থলেও কেবল তিনিই রক্ষা করেন; আর তিনি অঙ্গীকার করলেন যে ফিরে গিয়ে নবী ﷺ-এর হাতে হাত রাখবেন। তিনি ফিরে গেলেন, এবং তা-ই করলেন।"
          }
        ]
      }
    ]
  },
  "29:69": {
    "sections": [
      {
        "h": {
          "en": "The Last Verse of the Surah",
          "bn": "সূরার শেষ আয়াত"
        },
        "p": [
          {
            "en": "This is where Surah al-Ankabut ends, and the ending answers its beginning. The surah opens by asking whether people suppose they will be left to say we believe and not be tested, in 29:2 — the verb is yuftanun, from fitnah, the assaying of metal in fire. Sixty-seven verses later, after the histories of Nuh, Ibrahim, Lut and Shu'ayb (AS), the surah closes not with relief from testing but with a promise attached to effort.",
            "bn": "এখানেই সূরা আল-আনকাবূত শেষ হয়, আর এই শেষটি তার শুরুর জবাব দেয়। সূরার সূচনা প্রশ্ন করে, মানুষ কি মনে করে তাদের ছেড়ে দেওয়া হবে এই বলার পর যে আমরা ঈমান এনেছি, অথচ তাদের পরীক্ষা করা হবে না — 29:2 আয়াতে; ক্রিয়াটি ইউফতানূন, ফিতনা থেকে, যার মূল ছবি আগুনে ধাতু যাচাই। সাতষট্টি আয়াত পরে, নূহ, ইবরাহীম, লূত ও শুআইব (আঃ)-এর ইতিহাসের পর, সূরাটি শেষ হয় পরীক্ষা থেকে অব্যাহতির প্রতিশ্রুতি দিয়ে নয়, বরং প্রচেষ্টার সাথে যুক্ত এক প্রতিশ্রুতি দিয়ে।"
          },
          {
            "en": "The surah was addressed largely to believers under pressure in Mecca, which is why 29:56 tells them My earth is spacious, so worship Me — a verse the commentators connect to migration. Nothing in the closing verse names a single occasion, and no sound report fixes one; it reads as a general law. Placed at the end of a surah about trial, it functions as the conclusion of an argument rather than as an isolated encouragement.",
            "bn": "সূরাটি মূলত মক্কায় চাপে থাকা মুমিনদের উদ্দেশ্যে, আর এ কারণেই 29:56 তাদের বলে, আমার পৃথিবী প্রশস্ত, অতএব আমারই ইবাদত করো — মুফাসসিরগণ এই আয়াতকে হিজরতের সাথে যুক্ত করেন। শেষ আয়াতটি কোনো নির্দিষ্ট ঘটনার নাম করে না, আর কোনো সহীহ বর্ণনাও কোনো উপলক্ষ নির্দিষ্ট করে না; এটি একটি সাধারণ বিধান হিসেবেই পড়া হয়। পরীক্ষা নিয়ে লেখা একটি সূরার শেষে বসে এটি বিচ্ছিন্ন উৎসাহবাক্য নয়, বরং একটি যুক্তির উপসংহার হিসেবে কাজ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Strive in Us",
          "bn": "যারা আমাদের পথে সংগ্রাম করে"
        },
        "p": [
          {
            "en": "The subject is alladhina jahadu fina. Jahada comes from juhd, the exertion of one's capacity — the same root that gives ijtihad, the scholar's straining after a ruling, and jihad in all its senses. Nothing in the verb restricts it to fighting. It covers the effort of getting up for fajr, of learning a language you find difficult, of holding a marriage together, of keeping money clean when the shortcut is available.",
            "bn": "বাক্যের কর্তা হলো আল্লাযীনা জাহাদূ ফীনা। জাহাদা এসেছে জুহদ থেকে, অর্থাৎ নিজের সামর্থ্য নিংড়ে দেওয়া — একই ধাতু থেকে ইজতিহাদ, অর্থাৎ ফয়সালা বের করতে আলিমের পরিশ্রম, আর জিহাদ তার সব অর্থে। ক্রিয়াটির কিছুই একে যুদ্ধে সীমাবদ্ধ করে না। এটি ফজরে ওঠার প্রচেষ্টা, কঠিন লাগা একটি ভাষা শেখার প্রচেষ্টা, বিয়েটিকে টিকিয়ে রাখার প্রচেষ্টা, আর সহজ পথ হাতের নাগালে থাকা সত্ত্বেও উপার্জন হালাল রাখার প্রচেষ্টা — সবই ধারণ করে।"
          },
          {
            "en": "Then fina, in Us. The Arabic does not say ilayna, towards Us, nor lana, for Us, though both would have been available. Fi carries the sense of being inside a thing — striving within Allah's cause, on His terms, inside what He has made lawful. The commentators take this preposition as the filter on the whole promise: the same physical effort, spent for a name or a reputation, is not what the verse is describing.",
            "bn": "এরপর ফীনা, অর্থাৎ আমাদের মধ্যে। আরবি বলেনি ইলাইনা, আমাদের দিকে; বলেনি লানা, আমাদের জন্য — যদিও দুটিই ব্যবহার করা যেত। ফী শব্দটি কোনো কিছুর ভেতরে থাকার অর্থ বহন করে — আল্লাহর পথের ভেতরে থেকে, তাঁর শর্তে, তিনি যা বৈধ করেছেন তার সীমার ভেতরে সংগ্রাম করা। মুফাসসিরগণ এই অব্যয়টিকেই পুরো প্রতিশ্রুতির ছাঁকনি হিসেবে ধরেন: একই দৈহিক পরিশ্রম যদি নাম বা সুনামের জন্য ব্যয় হয়, আয়াত তার কথা বলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise Under Oath",
          "bn": "শপথের মতো দৃঢ় প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Lanahdiyannahum is one of the most heavily emphasised constructions Arabic has: an opening lam of emphasis and a doubled nun of confirmation attached to the verb, the pattern used for a sworn undertaking. Rendered flatly it means We will guide them; rendered with its force it means We shall most certainly guide them. When a promise is built this way, the sentence is not offering a likelihood.",
            "bn": "লানাহদিয়ান্নাহুম আরবির সবচেয়ে জোরালো গঠনগুলোর একটি: শুরুতে জোর দেওয়ার লাম, আর ক্রিয়ার শেষে দ্বিত্ব নূন — যে ছাঁচ ব্যবহৃত হয় শপথসদৃশ অঙ্গীকারে। সাদামাটাভাবে অনুবাদ করলে অর্থ দাঁড়ায়, আমরা তাদের পথ দেখাব; কিন্তু তার পূর্ণ ভার নিয়ে অনুবাদ করলে অর্থ হয়, আমরা অবশ্যই অবশ্যই তাদের পথ দেখাব। প্রতিশ্রুতি যখন এভাবে গাঁথা হয়, তখন বাক্যটি নিছক সম্ভাবনার কথা বলছে না।"
          },
          {
            "en": "The order of the two halves is the point most often drawn from the verse. Striving is mentioned in the past tense, guidance in the future. Guidance is what follows action, not what has to arrive before it. This is the direct answer to the common posture of waiting: waiting to feel certain before praying, waiting for a settled heart before starting to learn, waiting for clarity before making the first honest change. The verse reverses the sequence.",
            "bn": "আয়াত থেকে সবচেয়ে বেশি যা টানা হয় তা হলো দুই অংশের ক্রম। সংগ্রামের কথা অতীত কালে, হিদায়াতের কথা ভবিষ্যতে। হিদায়াত হলো তা-ই যা কাজের পরে আসে, কাজের আগে যা পৌঁছাতেই হবে তা নয়। এটি সেই পরিচিত অপেক্ষার সরাসরি জবাব: নামাজ শুরুর আগে নিশ্চিত অনুভূতির অপেক্ষা, শেখা শুরুর আগে স্থির অন্তরের অপেক্ষা, প্রথম সৎ পরিবর্তনটির আগে স্পষ্টতার অপেক্ষা। আয়াত এই ক্রমটিকেই উল্টে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Paths, in the Plural",
          "bn": "পথসমূহ, বহুবচনে"
        },
        "p": [
          {
            "en": "What is promised is subulana, Our paths — plural, and possessive. This is worth setting beside 6:153, where the sirat mustaqim, the straight path, is singular and the other ways are warned against, and beside the daily request of 1:6, guide us to the straight path. The destination is one; the routes into it are many. Sabil in Arabic is a travelled way, a road worn by use, not an abstraction.",
            "bn": "যা প্রতিশ্রুত তা হলো সুবুলানা, আমাদের পথসমূহ — বহুবচন, আর সম্বন্ধযুক্ত। একে পাশে রাখা দরকার 6:153 আয়াতের, যেখানে সিরাতে মুস্তাকীম বা সরল পথ একবচন এবং অন্য পথগুলো থেকে সতর্ক করা হয়েছে, আর 1:6 আয়াতের প্রতিদিনের প্রার্থনার পাশে — আমাদের সরল পথ দেখান। গন্তব্য এক; সেখানে পৌঁছার রাস্তা বহু। আরবিতে সাবীল মানে চলাচলের রাস্তা, ব্যবহারে ক্ষয়ে যাওয়া পথ — কোনো বিমূর্ত ধারণা নয়।"
          },
          {
            "en": "The commentators read the plural generously: paths of knowledge, of worship, of earning, of service, opened to different people according to what they gave. It also implies that the guidance promised is not a single flash but a succession of openings. Act on the light you have and the next stretch of road becomes visible; act on that, and so on. Guidance in this verse is cumulative, and each instalment is earned by using the last one.",
            "bn": "মুফাসসিরগণ বহুবচনটিকে উদারভাবে পড়েন: জ্ঞানের পথ, ইবাদতের পথ, উপার্জনের পথ, সেবার পথ — যে যা দিয়েছে সে অনুযায়ী ভিন্ন মানুষের জন্য খুলে যায়। এতে এ-ও বোঝায় যে প্রতিশ্রুত হিদায়াত একটিমাত্র ঝলক নয়, বরং পর পর খুলে যাওয়া দরজার ধারা। হাতে থাকা আলোয় আমল করো, রাস্তার পরের অংশটুকু দৃশ্যমান হবে; তাতে আমল করো, আবার তেমনই। এই আয়াতে হিদায়াত ক্রমসঞ্চিত, আর প্রতিটি কিস্তি অর্জিত হয় আগেরটি কাজে লাগানোর মধ্য দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "And Allah Is With the Muhsinin",
          "bn": "আর আল্লাহ মুহসিনদের সাথে"
        },
        "p": [
          {
            "en": "The closing clause changes register: wa inna Allaha lama'a al-muhsinin. The commentators distinguish two kinds of withness in the Quran. There is the general one, by which Allah is with everyone through His knowledge — He is with you wherever you are. And there is the special one, promised to particular people, which carries help, protection and steadying. This second sense is what the verse ends on, and it is not offered to everyone who exerts himself.",
            "bn": "শেষ বাক্যাংশে সুর বদলায়: ওয়া ইন্না আল্লাহা লামা‘আল-মুহসিনীন। মুফাসসিরগণ কুরআনে দুই ধরনের ‘সঙ্গে থাকা’ আলাদা করেন। একটি সাধারণ, যার মাধ্যমে আল্লাহ তাঁর জ্ঞানে সবার সাথেই আছেন — তোমরা যেখানেই থাকো তিনি তোমাদের সাথে। আর একটি বিশেষ, যা নির্দিষ্ট মানুষদের প্রতিশ্রুত, আর যা সাহায্য, সুরক্ষা ও স্থিরতা বহন করে। আয়াত শেষ হয় এই দ্বিতীয় অর্থেই, আর তা পরিশ্রমকারী প্রত্যেককে দেওয়া হয় না।"
          },
          {
            "en": "It is offered to the muhsinin, those who practise ihsan — doing the right thing and doing it beautifully, with the awareness that Allah sees. So the verse binds two things that are often separated: strive, and strive well. Effort that is loud, resentful or careless is not what is being described. The last word of the surah is not a demand at all but a companionship, which is what a persecuted community reading this in Mecca most needed to hear.",
            "bn": "তা দেওয়া হয় মুহসিনদের, যাঁরা ইহসান চর্চা করেন — সঠিক কাজটি করা এবং সুন্দরভাবে করা, এই সচেতনতা নিয়ে যে আল্লাহ দেখছেন। ফলে আয়াতটি প্রায়ই আলাদা করে ফেলা দুটি জিনিসকে একসাথে বাঁধে: সংগ্রাম করো, আর ভালোভাবে সংগ্রাম করো। উচ্চকিত, ক্ষুব্ধ কিংবা অযত্নের পরিশ্রমের কথা এখানে বলা হচ্ছে না। সূরার শেষ কথাটি আদৌ কোনো দাবি নয়, বরং সাহচর্য — মক্কায় নিপীড়িত এক সমাজের এটাই সবচেয়ে বেশি শোনার দরকার ছিল।"
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
            "en": "The practical reading is unusually direct. Take the smallest obligation you already know and are avoiding, and do that one. The verse does not promise guidance to those who research it, discuss it, or intend it strongly; it promises guidance to those who strove. For most people the first striving is not dramatic — it is the prayer prayed on time instead of late, the debt repaid, the apology made, the page of Arabic learnt this week rather than next year.",
            "bn": "বাস্তব প্রয়োগ অস্বাভাবিক রকম সোজা। আপনি ইতিমধ্যেই জানেন অথচ এড়িয়ে চলছেন এমন ক্ষুদ্রতম দায়িত্বটি নিন, আর সেটিই করুন। আয়াত তাদের হিদায়াতের প্রতিশ্রুতি দেয় না যারা এ নিয়ে গবেষণা করে, আলোচনা করে বা প্রবল ইচ্ছা পোষণ করে; প্রতিশ্রুতি তাদের জন্য যারা সংগ্রাম করেছে। বেশিরভাগ মানুষের প্রথম সংগ্রামটি নাটকীয় কিছু নয় — দেরিতে নয়, সময়মতো পড়া নামাজ; শোধ করা ঋণ; করা ক্ষমাপ্রার্থনা; আগামী বছর নয়, এই সপ্তাহে শেখা আরবির একটি পৃষ্ঠা।"
          },
          {
            "en": "It also reframes a plateau. Long stretches where nothing seems to open are usually read as abandonment; the verse suggests reading them as a question about input. And the last clause guards against the opposite error, of measuring yourself by visible results. Being with the doers of good is stated in the present tense, with no condition about outcome. The company is granted while the striving is going on, not only when it has succeeded.",
            "bn": "এটি স্থবিরতার সময়টিকেও নতুন করে দেখায়। দীর্ঘ সময় যখন কিছুই খুলছে বলে মনে হয় না, তখন সাধারণত তা পরিত্যক্ত হওয়ার লক্ষণ বলে পড়া হয়; আয়াত ইঙ্গিত দেয় একে বরং প্রশ্ন হিসেবে পড়তে — কী দিচ্ছি আমি? আর শেষ বাক্যাংশটি উল্টো ভুল থেকেও রক্ষা করে, অর্থাৎ দৃশ্যমান ফল দিয়ে নিজেকে মাপার ভুল থেকে। সৎকর্মশীলদের সাথে থাকার কথাটি বর্তমান কালে বলা, ফলাফল নিয়ে কোনো শর্ত ছাড়াই। সাহচর্য দেওয়া হয় সংগ্রাম চলাকালেই, কেবল সফল হওয়ার পরে নয়।"
          }
        ]
      }
    ]
  }
});
