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
