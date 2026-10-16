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
          "bn": "দরজাতেই এক প্রশ্ন"
        },
        "p": [
          {
            "en": "Surah al-Ankabut opens with detached letters and then a question: do people reckon that they will be left alone upon saying we believe, and not be tried? The Arabic question here is not a request for information; it is the interrogative of rebuke, dismantling an assumption by voicing it aloud. The assumption named is one every generation remakes in its own way — that declaring faith is the finish line, when the Quran presents it as the starting point.",
            "bn": "সূরা আল-আনকাবুত শুরু হয় বিচ্ছিন্ন হরফ দিয়ে, তারপরই একটি প্রশ্ন: মানুষ কি ভেবেছে, 'আমরা ঈমান এনেছি' বললেই তাদের ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না? আরবিতে এ প্রশ্ন কিছু জানতে চাওয়ার জন্য নয়। এ হলো ধমকের প্রশ্ন: একটা ভুল ধারণাকে মুখে উচ্চারণ করেই তা ভেঙে দেওয়া। প্রতিটি প্রজন্ম এই ধারণা নিজের মতো করে আবার গড়ে নেয়: ঈমানের ঘোষণা দিলেই বুঝি দৌড় শেষ। অথচ কুরআনের চোখে ঘোষণাটা কেবল শুরু।"
          },
          {
            "en": "Most commentators place these opening verses amid the persecution of Makkah, when saying we believe could cost a person safety, livelihood, and family peace. The early believers heard this question while some of them were being tortured for the very claim the question quotes. The verses did not promise them relief first; they reframed the pain: what you are undergoing is not evidence of abandonment, but the examination that the claim itself invites.",
            "bn": "অধিকাংশ মুফাসসির বলেন, শুরুর এই আয়াতগুলো মক্কার নির্যাতনের সময়কার, যখন 'আমরা ঈমান এনেছি' বলার দাম দিতে হতে পারত নিরাপত্তা, রুজি আর পরিবারের শান্তি দিয়ে। প্রথম যুগের মুমিনরা যখন এ প্রশ্ন শুনছিলেন, তাঁদের কেউ কেউ তখন ঠিক এই দাবির জন্যই নির্যাতন সইছিলেন, যে দাবির কথা প্রশ্নে এসেছে। আয়াতগুলো তাঁদের আগে স্বস্তির কথা দেয়নি; দিয়েছে কষ্টটাকে দেখার নতুন চোখ: তোমরা যা সইছ, তা তোমাদের ছেড়ে দেওয়ার প্রমাণ নয়; এ সেই পরীক্ষা, যা ঈমানের দাবি নিজেই ডেকে আনে।"
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
            "bn": "ক্রিয়াটি হলো লা ইউফতানূন, অর্থাৎ তাদের পরীক্ষা করা হবে না। শব্দটি এসেছে ফিতনার মূল থেকে। ভাষার আলিমরা লিখে গেছেন, শব্দটির জন্ম সোনা গলানো থেকে: ফাতানায-যাহাব মানে আকরিক আগুনে দেওয়া, যাতে খাঁটি সোনা খাদ থেকে আলাদা হয়ে যায়। তাই কুরআনে পরীক্ষার শব্দটির মূল কথা কষ্ট নয়, প্রকাশ। আগুন সোনাও বানায় না, খাদও বানায় না; শুধু দেখিয়ে দেয় কোনটা কী।"
          },
          {
            "en": "That origin controls how the question should be read. The trial does not manufacture believers and liars; it reveals the ones already there — to themselves before anyone else. A claim of faith costs one sentence. Its truth is a property that only resistance can display: the pull of fear, loss, ridicule, or ease. The verse is less a threat than a definition. Untested belief is simply belief whose quality no one, including its owner, yet knows.",
            "bn": "শব্দের এই মূল থেকেই বোঝা যায় প্রশ্নটা কীভাবে পড়তে হবে। পরীক্ষা মুমিন বা মিথ্যাবাদী বানায় না; যে আগে থেকেই যা, তাকে খুলে দেখায়, আর সবার আগে দেখায় তার নিজের কাছেই। ঈমানের দাবি করতে লাগে একটা বাক্য। কিন্তু দাবিটা সত্য কি না, তা ধরা পড়ে কেবল বাধার মুখে, যখন ভয়, ক্ষতি, ঠাট্টা কিংবা আরাম পেছন থেকে টানে। আয়াতটি যতটা হুমকি, তার চেয়ে বেশি সংজ্ঞা। যে ঈমানের পরীক্ষা হয়নি, তা এমন ঈমান, যার মান এখনো কেউ জানে না, যার ঈমান সে নিজেও না।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Before Were Tried",
          "bn": "পূর্ববর্তীদেরও পরীক্ষা হয়েছিল"
        },
        "p": [
          {
            "en": "29:3 grounds the rule in history — and We certainly tried those who were before them. 2:214 makes the same point in fuller color: do you reckon you will enter the Garden while there has not yet come to you the like of what came to those who passed before you, touched by hardship and adversity and shaken until the messenger and those who believed with him said, when is the help of Allah? The road has always run through the fire.",
            "bn": "২৯:৩ আয়াত নিয়মটিকে ইতিহাসের ওপর দাঁড় করায়: আর আমি তো তাদের আগের লোকদেরও পরীক্ষা করেছি। ২:২১৪ আয়াত একই কথা আরও পূর্ণ ছবিতে বলে: তোমরা কি ভেবেছ জান্নাতে ঢুকে যাবে, অথচ তোমাদের আগে যারা গত হয়েছে তাদের মতো অবস্থা এখনো তোমাদের ওপর আসেনি? অভাব আর দুঃখ-কষ্ট তাদের ছুঁয়েছিল, তারা এমনভাবে কেঁপে উঠেছিল যে রাসূল ও তাঁর সঙ্গী মুমিনরা বলে উঠেছিলেন, আল্লাহর সাহায্য কবে? এ পথ বরাবরই আগুনের ভেতর দিয়ে গেছে।"
          },
          {
            "en": "Al-Bukhari relates from Khabbab ibn al-Aratt (RA) that he complained to the Prophet ﷺ, who was reclining in the shade of the Ka'bah, and asked him to pray for help. The answer recounted the believers before: a man would be placed in a pit and sawn in two, or raked with iron combs down to bone and sinew, and none of it turned him from his religion — then came the promise that this affair would be completed, but you are hasty.",
            "bn": "আল-বুখারী বর্ণনা করেছেন, খাব্বাব ইবনুল আরাত্ত (রাঃ) একবার নবী ﷺ-এর কাছে কষ্টের কথা জানিয়ে সাহায্যের জন্য দু'আ চাইলেন। তিনি তখন কা'বার ছায়ায় হেলান দিয়ে বসে ছিলেন। জবাবে তিনি আগের মুমিনদের কথা শোনালেন: কাউকে গর্তে রেখে করাত দিয়ে চিরে দুই টুকরো করা হতো, কারও গায়ে লোহার চিরুনি চালিয়ে হাড় আর রগ পর্যন্ত মাংস ছাড়িয়ে নেওয়া হতো, তবু এর কোনো কিছুই তাকে তার দ্বীন থেকে ফেরাতে পারত না। তারপর এল প্রতিশ্রুতি: এই দ্বীন অবশ্যই পূর্ণতা পাবে, কিন্তু তোমরা তাড়াহুড়ো করছ।"
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
            "bn": "আয়াতে বলা উদ্দেশ্যটি প্রথমে একটু অদ্ভুত শোনায়: যাতে আল্লাহ অবশ্যই জেনে নেন কারা সত্যবাদী, আর অবশ্যই জেনে নেন কারা মিথ্যাবাদী। আল্লাহর জ্ঞান তো চিরন্তন ও পূর্ণ; পরীক্ষা তাতে নতুন কী যোগ করবে? মুফাসসিররা জবাব দেন: এ হলো ঘটে যাওয়ার জ্ঞান। ইবনে কাসীর বুঝিয়েছেন, এ হলো বাস্তবে করা কাজের জ্ঞান, যার ভিত্তিতে ন্যায়ের সঙ্গে প্রতিদান ও শাস্তি দেওয়া হয়। পরীক্ষা আন্তরিকতাকে 'হলে হতে পারত' থেকে নিয়ে আসে 'সত্যিই হয়েছে'-তে, যা চোখে দেখা যায়, লিখে রাখা যায়।"
          },
          {
            "en": "The verse's two objects deserve notice: the truthful and the liars, those who were sincere and those whose claim their conduct denied. Truthfulness here is not accuracy of speech but fidelity of person — the match between the words we believe and the behavior under pressure. Its opposite in this verse is not doubt but lying: a profession contradicted by a life. The test, then, is not an obstacle on the path of faith; in this surah it is the instrument that tells the two apart.",
            "bn": "আয়াতে আল্লাহ যাদের জানার কথা বলেছেন, সেই দুই দল লক্ষ করার মতো: সত্যবাদী আর মিথ্যাবাদী। প্রথম দল আন্তরিক ছিল; দ্বিতীয় দলের দাবিকে তাদের আচরণই মিথ্যা প্রমাণ করেছে। এখানে সত্যবাদিতা মানে শুধু ঠিক কথা বলা নয়, মানুষটা নিজেই খাঁটি থাকা, অর্থাৎ 'আমরা ঈমান এনেছি' কথার সঙ্গে চাপের মুখের আচরণ মিলে যাওয়া। এ আয়াতে এর উল্টো সংশয় নয়, মিথ্যা: মুখে এক ঘোষণা, অথচ জীবন বলে আরেক কথা। তাই পরীক্ষা ঈমানের পথে কোনো বাধা নয়; এই সূরায় পরীক্ষাই সেই উপায়, যা দুই দলকে আলাদা করে চিনিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Graded by Trial",
          "bn": "মর্যাদা যত, পরীক্ষা তত"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Sa'd ibn Abi Waqqas (RA) — in a report he graded hasan sahih — that the Prophet ﷺ was asked which people are tried most severely, and answered: the prophets, then the next best and the next best; a man is tried according to his religion, and if there is firmness in his religion, his trial is made heavier. Trial in this teaching tracks rank, not wrath. The heaviest examinations were reserved for the best of creation.",
            "bn": "আত-তিরমিযী সা'দ ইবনে আবী ওয়াক্কাস (রাঃ) থেকে একটি হাদিস বর্ণনা করেছেন এবং নিজেই একে হাসান সহীহ বলেছেন। নবী ﷺ-কে জিজ্ঞেস করা হলো, কোন মানুষের পরীক্ষা সবচেয়ে কঠিন হয়? তিনি বললেন: নবীদের, তারপর যারা তাঁদের পরে উত্তম, তারপর যারা তাদের পরে উত্তম। মানুষকে পরীক্ষা করা হয় তার দ্বীন অনুযায়ী; দ্বীনে মজবুতি থাকলে তার পরীক্ষাও ভারী হয়। এই শিক্ষায় পরীক্ষা চলে মর্যাদার সঙ্গে তাল মিলিয়ে, আল্লাহর রাগের সঙ্গে নয়। সবচেয়ে কঠিন পরীক্ষাগুলো রাখা ছিল সৃষ্টির সেরা মানুষদের জন্যই।"
          },
          {
            "en": "Within the same surah, 29:10 describes the person who gets this wrong: when harmed in the cause of Allah, he treats the persecution of people as if it were the punishment of Allah, and gives way. Misreading a test as a rejection is itself a way of failing it. The believer's protection is the frame these verses build in advance: the test was expected, its purpose known, and the company of the tested — prophets and the truthful — remembered.",
            "bn": "এই সূরারই ২৯:১০ আয়াতে আছে সেই মানুষের কথা, যে এখানেই ভুল করে: আল্লাহর পথে কষ্ট পেলে সে মানুষের দেওয়া নির্যাতনকে আল্লাহর শাস্তি মনে করে, আর হাল ছেড়ে দেয়। পরীক্ষাকে প্রত্যাখ্যান ভেবে বসাটাই পরীক্ষায় ফেল করার একটা ধরন। মুমিনকে রক্ষা করে সেই বোঝাপড়া, যা এই আয়াতগুলো আগেভাগেই গড়ে দেয়। পরীক্ষা আসবে বলে জানা ছিল, কেন আসবে তাও জানা ছিল, আর মনে ছিল, নবীরা ও সত্যবাদীরাও এই পরীক্ষার পথেই হেঁটেছেন।"
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
            "bn": "যে সূরা শুরু হয় পরীক্ষার কথা দিয়ে, তা শেষ হয় ২৯:৬৯ আয়াতে হিদায়াতের প্রতিশ্রুতি দিয়ে: যারা আমার পথে প্রাণপণ চেষ্টা করে, আমি অবশ্যই তাদের আমার পথগুলো দেখিয়ে দেব; আর নিশ্চয়ই আল্লাহ সৎকর্মশীলদের সঙ্গে আছেন। শুরু আর শেষ একসঙ্গেই পড়তে হয়। দরজার এই পরীক্ষা কষ্ট নিয়ে সূরার শেষ কথা নয়; পরীক্ষার ভেতরে করা চেষ্টাই আরও হিদায়াত টেনে আনে। যা শুরু হয় পরীক্ষা হিসেবে, তা পূর্ণ হয় আল্লাহর সঙ্গ পাওয়ায়।"
          },
          {
            "en": "Lived plainly, this passage changes what a believer expects and how he interprets. Expect tests, so that their arrival confirms the Book rather than shaking it. Interpret pressure as the assaying named in 29:2 rather than as abandonment. And answer the only question actually being asked — not whether you can avoid the fire of testing, but what the fire finds when it reaches you. Sincerity is not claimed there; it is shown.",
            "bn": "জীবনে সোজাভাবে মেনে চললে এই আয়াতগুলো বদলে দেয় মুমিন কী আশা করে আর যা ঘটে তা কীভাবে বোঝে। পরীক্ষার জন্য তৈরি থাকুন, তাহলে পরীক্ষা এলে কিতাবের ওপর আস্থা নড়বে না, বরং কিতাবের কথাই সত্য প্রমাণিত হবে। চাপ এলে তাকে ২৯:২ আয়াতে বলা সেই যাচাই হিসেবে দেখুন, আল্লাহ ছেড়ে দিয়েছেন বলে নয়। আর জবাব দিন সেই একটিমাত্র প্রশ্নের, যা আসলে করা হচ্ছে। প্রশ্নটা এ নয় যে পরীক্ষার আগুন এড়াতে পারবেন কি না; প্রশ্ন হলো, আগুন আপনার কাছে পৌঁছে কী খুঁজে পায়। আন্তরিকতা সেখানে দাবি করার জিনিস নয়, দেখানোর জিনিস।"
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
            "bn": "ওয়া ওয়াসসাইনাল ইনসানা বিওয়ালিদাইহি হুসনা: আর আমি মানুষকে তার পিতা-মাতার প্রতি সদ্ব্যবহারের নির্দেশ দিয়েছি। ইবন কাসীর আয়াতের অবস্থানটা মন দিয়ে দেখেন। আল্লাহর একত্ব ধরে রাখার আহ্বানের ঠিক পরেই এ নির্দেশ এসেছে, কারণ পিতা-মাতাই মানুষের দুনিয়ায় আসার উপলক্ষ। পিতা তার খরচ বহন করেন, মা তাকে ঘিরে রাখেন মমতায়। তিনি আয়াতটিকে ১৭:২৩ ও ১৭:২৪ আয়াতের পাশে রাখেন, যেখানে শুধু আল্লাহর ইবাদত আর পিতা-মাতার সঙ্গে সদ্ব্যবহার একসঙ্গে বলা হয়েছে। ক্রমটা ইচ্ছাকৃত। আল্লাহর হক আগে, তার পরেই পিতা-মাতার হক।"
          },
          {
            "en": "Then the verse turns on a single word: wa-in, but if. But if they strive to make you associate with Me something you have no knowledge of, do not obey them. Ibn Kathir marks the contrast himself, placing the one refusal alongside the standing charge of mercy and kindness toward them, offered in return for their earlier kindness. Nothing in the first half is revoked. The verse does not replace goodness with distance. It fences off a single act and leaves everything else where it stood.",
            "bn": "তারপর আয়াত মোড় নেয় একটিমাত্র শব্দে: ওয়া ইন, কিন্তু যদি। কিন্তু যদি তারা তোমাকে এমন কিছু আমার সঙ্গে শরিক করাতে চাপ দেয় যার কোনো জ্ঞান তোমার নেই, তবে তাদের কথা মেনো না। ইবন কাসীর নিজেই বৈপরীত্যটা দেখিয়ে দেন। এই একটিমাত্র 'না'-কে তিনি রাখেন তাঁদের প্রতি দয়া ও সদ্ব্যবহারের স্থায়ী নির্দেশের পাশেই, যে দয়া তাঁদের আগের দয়ার প্রতিদান। প্রথম অংশের কিছুই বাতিল হয়নি। আয়াত সদ্ব্যবহারের জায়গায় দূরত্ব বসায় না। শুধু একটি কাজের চারপাশে বেড়া দেয়, বাকি সব যেখানে ছিল সেখানেই থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Husn Names",
          "bn": "হুসন মানে কী"
        },
        "p": [
          {
            "en": "The word carried is husn, plain goodness. Ma'arif al-Qur'an, citing Mazhari, explains wasiyyah as calling someone to an action out of counsel and genuine well-wishing, not mere instruction. Husn, it adds, is an infinitive, to be good, so the sense is to adopt good conduct toward them. At-Tabari and al-Qurtubi spend lines on the grammar, noting that the Basran scholars read the accusative as though the sentence ran we enjoined him goodness. The point beneath the grammar is scope: not a single gesture, but a settled way of treating them.",
            "bn": "এখানে যে শব্দটি এসেছে তা হুসন, সোজা কথায় ভালো আচরণ। মাআরিফুল কুরআন মাযহারীর বরাতে বলে, ওয়াসিয়্যাহ নিছক হুকুম নয়; এর মানে উপদেশ আর আন্তরিক কল্যাণকামনা থেকে কাউকে কোনো কাজের দিকে ডাকা। সেখানে আরও আছে, হুসন একটি ক্রিয়ামূল, মানে ভালো হওয়া; তাই অর্থ দাঁড়ায়, তাঁদের সঙ্গে ভালো আচরণকে নিজের পথ বানিয়ে নেওয়া। তাবারী আর কুরতুবী ব্যাকরণ নিয়ে কয়েক লাইন লিখেছেন। তাঁরা জানান, বসরার আলেমরা শব্দটির এই রূপকে এমনভাবে পড়েন, যেন বাক্যটা ছিল: আমি তাকে ভালো আচরণের নির্দেশ দিলাম। ব্যাকরণের আড়ালে আসল কথা হলো পরিধি। একবারের কোনো ভালো কাজ নয়, বরং তাঁদের সঙ্গে আচরণের একটা স্থায়ী ধরন।"
          },
          {
            "en": "As-Sa'di fills in what that way looks like. Husn, he says, is birr and ihsan, dutiful care and active good, in both word and deed, and the charge is to keep it up and never slip into 'uquq, the undutifulness that wounds a parent by speech or act. Al-Muyassar reads it the same way: be good to them in word and in deed. So the goodness commanded is not a feeling held privately. It is spoken and done, and it is meant to last rather than to appear once and lapse.",
            "bn": "সেই ধরনটা দেখতে কেমন, সা'দী তা খুলে বলেন। হুসন মানে বির ও ইহসান: দায়িত্ব নিয়ে যত্ন করা আর নিজে এগিয়ে ভালো করা, কথায় ও কাজে দুইভাবেই। নির্দেশ হলো এটা সবসময় ধরে রাখা, আর কখনো উকুকে না জড়ানো। উকুক মানে সেই নাফরমানি, যা কথায় বা কাজে পিতা-মাতার মনে আঘাত দেয়। মুয়াসসারও একইভাবে পড়েন: কথায় ও কাজে তাঁদের সঙ্গে ভালো ব্যবহার করো। তাই যে সদ্ব্যবহারের হুকুম এসেছে, তা মনের ভেতরে লুকিয়ে রাখা কোনো অনুভূতি নয়। তা মুখে বলা হয়, হাতে করা হয়, আর তা টিকে থাকার জন্য; একবার দেখা দিয়ে মিলিয়ে যাওয়ার জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mother Who Refused Food",
          "bn": "যে মা খাওয়া ছেড়ে দিলেন"
        },
        "p": [
          {
            "en": "The commentators agree on the occasion. Al-Baghawi reports that the verse came down about Sa'd ibn Abi Waqqas (RA), one of the earliest to accept Islam and a man devoted to his mother, Hamnah bint Abi Sufyan. When she learned he had become Muslim she confronted him: what is this religion you have taken up? By God, she swore, I will neither eat nor drink until you return to what you were, or I die, and then you will be called, for all time, the one who killed his mother.",
            "bn": "উপলক্ষ নিয়ে তাফসীরকারেরা একমত। বাগভী বলেন, আয়াতটি নাজিল হয়েছিল সা'দ ইবন আবি ওয়াক্কাস (রাঃ)-কে নিয়ে। তিনি ছিলেন সবার আগে ইসলাম গ্রহণকারীদের একজন, আর মায়ের প্রতি খুব যত্নশীল ছেলে। মা হামনাহ বিনতে আবু সুফিয়ান যখন জানলেন ছেলে মুসলিম হয়েছে, তিনি তাকে চেপে ধরলেন: এ আবার কোন ধর্ম ধরেছ তুমি? আল্লাহর কসম, তুমি আগের অবস্থায় ফিরে না আসা পর্যন্ত, কিংবা আমি মরে না যাওয়া পর্যন্ত, আমি কিছু খাব না, পানও করব না। তখন চিরকাল লোকে তোমাকে বলবে মায়ের হত্যাকারী।"
          },
          {
            "en": "Al-Baghawi has her hold out a day and a night, then a second day; other reports, Ma'arif notes, stretch the fast longer still. Al-Qurtubi and Ibn Kathir preserve a grim detail from the narration: when the family wanted to feed her, they would pry her mouth open and pour the food in. The scene is not softened in the sources. A mother was starving herself, in earnest, to break her son's faith, and he could not simply wait for her to relent.",
            "bn": "বাগভীর বর্ণনায় তিনি এক দিন এক রাত কিছু না খেয়ে কাটালেন, তারপর আরেকটি দিন; আরো কিছু বর্ণনায়, মাআরিফুল কুরআন বলে, এ উপবাস আরো দীর্ঘ হয়। কুরতুবী ও ইবন কাসীর বর্ণনার একটি কঠিন খুঁটিনাটি ধরে রাখেন: পরিবার তাঁকে খাওয়াতে চাইলে তারা তাঁর মুখ ফাঁক করে খাবার ঢেলে দিত। সূত্রগুলোতে দৃশ্যটা নরম করা হয়নি। এক মা সত্যিকারেই নিজেকে না খাইয়ে রাখছিলেন ছেলের ঈমান ভাঙতে, আর ছেলে চুপচাপ মায়ের নরম হওয়ার অপেক্ষায় বসে থাকতে পারছিলেন না।"
          },
          {
            "en": "When persuasion failed, Sa'd answered her plainly. Al-Qurtubi and al-Baghawi record his words: mother, if you had a hundred souls and they left your body one by one, I would still not abandon my religion, so eat if you wish, or do not. Seeing that he would not bend, she ate and drank again. The reports are careful to show that he never raised his hand or his voice against her. He refused the demand, and he did not refuse her.",
            "bn": "বোঝানোয় কাজ না হলে সা'দ তাঁকে সাফ জবাব দিলেন। কুরতুবী ও বাগভী তাঁর কথা লিপিবদ্ধ করেন: মা, আপনার দেহে যদি একশ প্রাণও থাকত আর একটি একটি করে তা বেরিয়ে যেত, তবু আমি আমার দ্বীন ছাড়তাম না, তাই ইচ্ছে হলে খান, না হলে খাবেন না। তিনি নমনীয় হবেন না দেখে মা আবার খাওয়া-দাওয়া শুরু করলেন। বর্ণনাগুলো যত্ন করে দেখায় যে তিনি মায়ের ওপর কখনো হাত তোলেননি, গলাও চড়াননি। তিনি দাবিটা ফিরিয়েছেন, মাকে ফেরাননি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report Set Down Whole",
          "bn": "বর্ণনাটি পুরোপুরি"
        },
        "p": [
          {
            "en": "The occasion is not only a commentator's note; it rests on a sound narration. Ibn Kathir traces it to a hadith of Sa'd recorded by Muslim, and also by Ahmad, Abu Dawud and an-Nasa'i, adding that at-Tirmidhi graded his wording hasan sahih. The fullest form sits in Sahih Muslim, where its presence is itself the grading, since Muslim admitted only what met his conditions for a sound report. Here is that wording, quoted as its own narration rather than blended with the other versions.",
            "bn": "এ উপলক্ষ কেবল কোনো তাফসীরকারের টীকা নয়; এর পেছনে আছে এক সহীহ বর্ণনা। ইবন কাসীর জানান, এটি সা'দের একটি হাদিস, যা মুসলিম বর্ণনা করেছেন, আর আহমাদ, আবু দাউদ ও নাসায়ীও এনেছেন; তিনি আরও বলেন, তিরমিযী এর শব্দগুলোকে হাসান সহীহ বলেছেন। সবচেয়ে পূর্ণ রূপটি আছে সহীহ মুসলিমে। সেখানে থাকাটাই এর মানের সাক্ষ্য, কারণ সহীহ বর্ণনার জন্য মুসলিমের যে শর্ত, তা পূরণ না হলে তিনি কোনো বর্ণনা নিতেন না। নিচে সেই বর্ণনাটিই দেওয়া হলো তার নিজের শব্দে, অন্য রূপগুলোর সঙ্গে না মিশিয়ে।"
          },
          {
            "en": "In Muslim's wording, Sa'd relates that four verses were revealed about him, and of this one he says: his mother, Umm Sa'd, swore that she would never speak to him until he renounced his faith, and that she would neither eat nor drink. She passed three days in this state until she fainted from hunger. Then, he says, Allah revealed this verse, 'And We have enjoined upon man goodness to his parents; but if they strive to make you associate with Me that of which you have no knowledge, obey them not' (29:8), and with it, 'accompany them in this world with kindness' (31:15).",
            "bn": "মুসলিমের শব্দে সা'দ বলেন যে তাঁর ব্যাপারে চারটি আয়াত নাজিল হয়েছিল, আর এর একটি নিয়ে তিনি বলেন: তাঁর মা উম্মু সা'দ কসম করলেন যে সা'দ দ্বীন না ছাড়া পর্যন্ত তিনি তাঁর সঙ্গে কথা বলবেন না, খাবেনও না, পানও করবেন না। ৩ দিন তিনি এ অবস্থায় রইলেন, শেষে ক্ষুধায় অজ্ঞান হয়ে গেলেন। তারপর, সা'দ বলেন, আল্লাহ এ আয়াত নাজিল করলেন, ‘আর আমি মানুষকে তার পিতা-মাতার প্রতি সদ্ব্যবহারের নির্দেশ দিয়েছি; কিন্তু তারা যদি তোমাকে এমন কিছু আমার সঙ্গে শরিক করাতে চাপ দেয় যার জ্ঞান তোমার নেই, তবে তাদের কথা মেনো না’ (২৯:৮), আর সঙ্গে, ‘দুনিয়ায় তাদের সঙ্গে ভালোভাবে চলো’ (৩১:১৫)।"
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
            "bn": "ক্রিয়াটি হলো জাহাদাকা: তারা তোমার বিরুদ্ধে উঠেপড়ে লাগে, চাপ দেয়। এটা হালকা কোনো ইচ্ছা নয়, রীতিমতো জোর খাটানো, আর এই ঘটনাই তা স্পষ্ট করে দেখায়: পিতা-মাতা সত্যিকারের চাপ দিচ্ছেন। চাপটা কিসের জন্য, ইবন কাসীর তা স্পষ্ট করে দেন: তাঁরা যদি মুশরিক হন আর তোমাকে নিজেদের ধর্মে টেনে নিতে উঠেপড়ে লাগেন, তবে সাবধান থেকো, এ ব্যাপারে তাঁদের কথা মেনো না। কোন কথা মানা যাবে না, তার সীমা খুব সরু আর নির্দিষ্ট: শিরকের দিকে টেনে নেওয়া, অর্থাৎ আল্লাহর সঙ্গে কিছু শরিক করানো। পিতা-মাতার সাধারণ চাওয়া-পাওয়া এর মধ্যে পড়ে না।"
          },
          {
            "en": "Then: that of which you have no knowledge. At-Tabari reads it as you have no knowledge that I have any partner, because there is none to know. As-Sa'di presses the phrase further, that no one possesses any knowledge that shirk is valid at all, and the wording itself magnifies how grave the sin is. Both readings land in the same place. The parents are demanding that their child affirm something that cannot be known because it is not true, and no bond, however deep, can oblige a person to affirm a falsehood about God.",
            "bn": "তারপর: যার কোনো জ্ঞান তোমার নেই। তাবারী এর অর্থ করেন, আমার যে কোনো শরিক আছে এমন জ্ঞান তোমার নেই, কারণ জানার মতো কোনো শরিকই নেই। সা'দী কথাটাকে আরো চেপে ধরেন, যে শিরক আদৌ সঠিক এমন জ্ঞান কারোরই নেই, আর এই শব্দই দেখিয়ে দেয় গুনাহটা কত ভারী। দুটি পাঠই একই জায়গায় এসে দাঁড়ায়। পিতা-মাতা সন্তানের কাছে এমন কিছু মেনে নিতে বলছেন যা জানা অসম্ভব, কারণ তা সত্যই নয়, আর যত গভীরই হোক, কোনো বন্ধন কাউকে আল্লাহ সম্পর্কে মিথ্যা মেনে নিতে বাধ্য করতে পারে না।"
          },
          {
            "en": "Al-Muyassar widens the frame carefully. The verse names shirk, he says, but the same ruling attaches to every other act of disobedience to God: there is no obedience owed to any created being, whoever he may be, in disobedience of the Creator, a principle established from the Messenger (ﷺ). The verse chooses the gravest case in order to state the rule, and the rule then reaches the lesser cases too. What a parent may not command is, in the end, sin itself.",
            "bn": "মুয়াসসার পরিধিটা সাবধানে বাড়িয়ে দেন। তিনি বলেন, আয়াতে শিরকের নাম এসেছে, কিন্তু আল্লাহর অবাধ্যতার অন্য প্রতিটি কাজেও একই বিধান: স্রষ্টার অবাধ্যতায় কোনো সৃষ্টির আনুগত্য নেই, সে যে-ই হোক; এ নীতি রাসূল ﷺ থেকে প্রমাণিত। বিধানটা বলার জন্য আয়াত সবচেয়ে ভারী উদাহরণটা বেছে নিয়েছে, আর সেই বিধান তারপর ছোট ক্ষেত্রগুলোতেও পৌঁছে যায়। শেষ পর্যন্ত পিতা-মাতা যা হুকুম করতে পারেন না, তা হলো গুনাহ।"
          }
        ]
      },
      {
        "h": {
          "en": "No Obedience, Here Alone",
          "bn": "আনুগত্য নয়, শুধু এখানেই"
        },
        "p": [
          {
            "en": "Fala tut'ihuma: do not obey them. Here the commentators reach for the principle that governs the whole matter. Ma'arif al-Qur'an and al-Baghawi both cite the Prophet's words, that there is no obedience to a created being in disobedience of the Creator. Ma'arif notes the report was recorded by Ahmad and al-Hakim, who graded it sound. The rule does not single out parents as suspect. It places them where every human authority stands, owed obedience fully, right up to the edge of God's command, and not past it.",
            "bn": "ফালা তুতিউহুমা: তাদের কথা মেনো না। এখানে এসে তাফসীরকারেরা পুরো বিষয়ের মূলনীতিটা সামনে আনেন। মাআরিফুল কুরআন আর বাগভী দুজনেই নবী ﷺ-এর বাণী উদ্ধৃত করেন: স্রষ্টার অবাধ্যতায় কোনো সৃষ্টির আনুগত্য নেই। মাআরিফুল কুরআন জানায়, বর্ণনাটি আহমাদ ও হাকিম লিপিবদ্ধ করেছেন, আর হাকিম একে সহীহ বলেছেন। এ নীতি পিতা-মাতাকে আলাদা করে সন্দেহের চোখে দেখে না। বরং তাঁদের রাখে সেখানেই, যেখানে মানুষের যেকোনো কর্তৃত্বের জায়গা: আল্লাহর হুকুমের সীমা পর্যন্ত তাঁদের কথা পুরোপুরি মানতে হবে, সীমা পেরিয়ে নয়।"
          },
          {
            "en": "As-Sa'di states the balance exactly. Be dutiful to your parents, he says, and put their obedience first, except where it meets obedience to God and His Messenger, which takes precedence over everything. Read his words closely and the shape appears: obedience to parents is the standing rule, and the refusal is a single exception cut into it. To withhold obedience on this one point is not to withhold honour, care or company. The son in the narration proved it, denying his mother the one thing and nothing else.",
            "bn": "সা'দী ভারসাম্যটা একদম মেপে বলেন। পিতা-মাতার হক আদায় করো, তিনি বলেন, আর তাঁদের আনুগত্যকে আগে রাখো, শুধু সেখানে ছাড়া যেখানে তা আল্লাহ ও তাঁর রাসূলের আনুগত্যের মুখোমুখি হয়, যা সবকিছুর আগে আসে। তাঁর কথা মন দিয়ে পড়লে ছবিটা ভেসে ওঠে: পিতা-মাতার আনুগত্যই স্থায়ী নিয়ম, আর অস্বীকারটা তার ভেতরে কাটা একটিমাত্র ব্যতিক্রম। এই একটি বিষয়ে আনুগত্য না দেওয়া মানে সম্মান, যত্ন বা সঙ্গ না দেওয়া নয়। বর্ণনার সেই ছেলে তা প্রমাণ করেছেন, মাকে সেই একটি জিনিস ফিরিয়ে, আর কিছুই নয়।"
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
            "bn": "অস্বীকার করলেই কি রূঢ় হওয়ার অনুমতি মিলে যায়? এই ভয়ের জবাব আয়াতের নিজের প্রসঙ্গেই আছে। বর্ণনায় দেখা যায়, যে ওহি সা'দকে শিরকের ব্যাপারে মায়ের কথা মানতে নিষেধ করল, সেই ওহিই তাঁকে দিল ৩১:১৫: দুনিয়ায় তাদের সঙ্গে ভালোভাবে চলো, মারুফ অনুযায়ী। দুটি কথা ইচ্ছে করেই পাশাপাশি বসানো। আগে সেই একটি জিনিস ফিরিয়ে দেওয়া, তারপর নির্দেশ: এই জীবনজুড়ে সবার জানা ভালো আচরণ নিয়ে তাঁদের পাশে পাশে চলো। ঈমান না আনা পিতা-মাতাও সঙ্গ আর যত্নের হকদার; অস্বীকার কেবল সেই একটি দাবিকে ছোঁয়, সম্পর্কটা অটুট থাকে।"
          },
          {
            "en": "Al-Baghawi notes that this verse and its near-twins in Luqman and al-Ahqaf came down about the same man. In 31:14 the charge to thank one's parents sits beside the charge to thank God; in 46:15 the Qur'an recalls what a mother bore in carrying and nursing a child. Read together, they refuse any reading that turns 29:8 into a permission slip for neglect. The Qur'an keeps naming the parents' due even as it draws the one firm line.",
            "bn": "বাগভী জানান, এই আয়াত আর লুকমান ও আহকাফ সূরায় এর প্রায়-যমজ আয়াতগুলো একই মানুষের ব্যাপারে নাজিল হয়েছিল। ৩১:১৪ আয়াতে পিতা-মাতার শুকরিয়ার নির্দেশ আল্লাহর শুকরিয়ার নির্দেশের পাশেই বসে; ৪৬:১৫ আয়াতে কুরআন মনে করিয়ে দেয় সন্তান গর্ভে ধরা আর দুধ খাওয়ানোয় এক মা কী বয়ে নেন। একসঙ্গে পড়লে এগুলো এমন কোনো পাঠ মানে না যা ২৯:৮ আয়াতকে অবহেলার ছাড়পত্র বানিয়ে ফেলে। আল্লাহ সেই একটি দৃঢ় রেখা টানার সময়েও পিতা-মাতার হকের নাম নিতেই থাকেন।"
          },
          {
            "en": "This needs saying plainly, in case the verse is misused. It gives no warrant to treat a non-Muslim parent harshly, to withhold support, or to cut the tie. It withdraws obedience in one matter, being pushed toward shirk or sin, and nothing beyond that. A believer whose parents follow another religion still owes them kindness, service and company, by the plain sense of the verse and the one quoted beside it. The line here is drawn around an act, and never around a person.",
            "bn": "কথাটা সাফ বলা দরকার, যেন আয়াতটা অপব্যবহার না হয়। এটি অমুসলিম পিতা-মাতার সঙ্গে রূঢ় আচরণ করার, খরচ বন্ধ করার, বা সম্পর্ক ছিঁড়ে ফেলার কোনো অনুমতি দেয় না। এটি আনুগত্য তুলে নেয় শুধু একটি বিষয়ে, অর্থাৎ শিরক বা গুনাহের দিকে ঠেলে দেওয়ার বেলায়, তার বাইরে কিছু নয়। যে মুমিনের পিতা-মাতা অন্য ধর্মের, তিনিও তাঁদের সদ্ব্যবহার, সেবা আর সঙ্গ দিতে বাধ্য, আয়াতের সোজা অর্থে আর পাশে উদ্ধৃত আয়াতটিতেও তা-ই আছে। এখানে রেখাটা টানা হয়েছে একটি কাজকে ঘিরে, কখনো কোনো মানুষকে ঘিরে নয়।"
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
            "bn": "আয়াত শেষ হয় দৃষ্টি ওপরে তুলে: ইলাইয়্যা মারজিউকুম, আমার কাছেই তোমাদের প্রত্যাবর্তন। তাবারী একে সোজাভাবেই পড়েন: কিয়ামতের দিন তোমাদের ফিরে আসা আর শেষ ঠিকানা আমার কাছেই, আর তোমরা যা করেছ তা আমি জানিয়ে দেব এবং তার প্রতিদান দেব। কুরতুবী এতে একটা হুঁশিয়ারি শোনেন, তাদের জন্য যারা কুফরির শামিল কোনো ব্যাপারে পিতা-মাতার কথা মেনে নেবে। যেভাবেই পড়া হোক, এই বাক্য কঠিন সিদ্ধান্তের মুখে দাঁড়ানো মানুষকে স্থির রাখে: শেষ হিসাব মিটবে আল্লাহর কাছে, চাপ দেওয়া পিতা-মাতার কাছে নয়।"
          },
          {
            "en": "Ibn Kathir carries the thought to its end. On that Day, he says, you will be gathered with the righteous, not with the company of your parents, even though in this world no one was closer to them than you, for a person is raised with those he loves, in the love that is for God's sake. He reads the next verse, 29:9, as the promise behind it: those who believe and do good God will admit among the righteous. The kindness you kept and the line you held both answer, in the end, to the same return.",
            "bn": "ইবন কাসীর ভাবনাটাকে শেষ পর্যন্ত নিয়ে যান। তিনি বলেন, সেদিন তোমাকে ওঠানো হবে নেককারদের সঙ্গে, পিতা-মাতার দলের সঙ্গে নয়, যদিও দুনিয়ায় তাঁদের সবচেয়ে কাছের মানুষ ছিলে তুমিই; কারণ মানুষকে ওঠানো হয় তাদের সঙ্গে, যাদের সে আল্লাহর জন্য ভালোবাসে। পরের আয়াত ২৯:৯-কে তিনি এরই পেছনের প্রতিশ্রুতি হিসেবে পড়েন: যারা ঈমান আনে আর নেক আমল করে, আল্লাহ তাদের নেককারদের দলে শামিল করবেন। যে সদ্ব্যবহার আপনি ধরে রেখেছেন আর যে সীমা আপনি রক্ষা করেছেন, শেষ পর্যন্ত দুটোরই হিসাব হবে সেই একই প্রত্যাবর্তনে।"
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
            "bn": "ঠিক আগের আয়াতেই কুরাইশের অস্বীকারকারীরা মু'মিনদের বলছে, আমাদের পথে চল, তোমাদের গুনাহ আমরা বয়ে নেব (২৯:১২ ও ২৯:১৩)। তাবারী এর পরের কথাকে পড়েন দুইভাবে, তাদের জন্য হুঁশিয়ারি আর নবী ﷺ-এর জন্য সান্ত্বনা। যেন বলা হচ্ছে, এদের অস্বীকার আপনাকে যেন কষ্ট না দেয়, কারণ নূহ (আঃ)-এর সম্প্রদায়কে আমি দীর্ঘ ঢিল দিয়েছিলাম, তবু তাদের পরিণতি হয়েছিল ধ্বংস। মাআরিফুল কুরআন একই উদ্দেশ্য দেখে, আগের নবীদের কাহিনি এখানে এসেছে নবী ﷺ আর মু'মিনদের অন্তর শক্ত রাখতে, কারণ এই উৎপীড়ন নতুন কিছু নয়।"
          },
          {
            "en": "al-Qurtubi asks why Noah of all the prophets, and answers that he was the first messenger sent to the people of the earth, and that no prophet ever suffered from his people what Noah suffered. He cites a report from Anas that the Prophet named Noah the first messenger sent. So the surah reaches back past every later struggle to the longest and loneliest mission of them all, and lays it beside the Prophet's own trial.",
            "bn": "কুরতুবী প্রশ্ন তোলেন, এত নবী থাকতে নূহ (আঃ) কেন? জবাবে বলেন, তিনিই ছিলেন পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল, আর নিজের সম্প্রদায়ের হাতে নূহ (আঃ) যত কষ্ট পেয়েছেন, অন্য কোনো নবী তত কষ্ট পাননি। তিনি আনাস থেকে একটি বর্ণনা আনেন যে, নবী ﷺ নূহ (আঃ)-কে প্রথম প্রেরিত রাসূল বলেছেন। তাই সূরাটি পরের সব সংগ্রাম পেরিয়ে ফিরে যায় সবচেয়ে দীর্ঘ আর সবচেয়ে নিঃসঙ্গ দাওয়াতের কাছে, আর সেটিকে রাখে নবী ﷺ-এর নিজের পরীক্ষার পাশে।"
          },
          {
            "en": "at-Tabari sets the comfort in a balance. God may grant the deniers a long respite, he says, drawing it out as He did for Noah's people, yet their affair ends in ruin, while the Prophet and those with him end in triumph and in rescue from what befalls the deniers. Ibn Kathir reads the same promise into the verse: know that God will aid you and make you prevail, and will humble and bring low your enemies. The Noah story is told to a man under pressure as a map of how such pressure ends.",
            "bn": "তাবারী সান্ত্বনাটিকে দুই পাল্লায় রেখে দেখান। তিনি বলেন, আল্লাহ অস্বীকারকারীদের লম্বা অবকাশ দিতে পারেন, যেমন দিয়েছিলেন নূহ (আঃ)-এর সম্প্রদায়কে; তবু তাদের শেষ পরিণাম ধ্বংস। আর নবী ﷺ ও তাঁর সঙ্গীদের পরিণাম বিজয়, আর অস্বীকারকারীদের ওপর নেমে আসা আজাব থেকে মুক্তি। ইবন কাসীরও আয়াতে একই প্রতিশ্রুতি দেখেন: জেনে রাখুন, আল্লাহ আপনাকে সাহায্য করবেন, বিজয়ী করবেন, আর আপনার শত্রুদের লাঞ্ছিত ও নত করবেন। চাপের মধ্যে থাকা এক মানুষকে নূহ (আঃ)-এর কাহিনি শোনানো হচ্ছে, যেন তিনি দেখতে পান এমন চাপ শেষে কোথায় গিয়ে থামে।"
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
            "bn": "আয়াতটি তাঁর অবস্থানের সময় মাপে এক অদ্ভুত হিসাবে: তিনি তাদের মাঝে ছিলেন হাজার বছর থেকে পঞ্চাশ কম, অর্থাৎ ৯৫০ বছর। কুরআন ছোট সংখ্যাটা সরাসরি বলেনি; বলেছে হাজার, তারপর বিয়োগ করেছে। কুরতুবী এই শব্দচয়নে এসে থামেন। তাঁর প্রশ্ন: সরাসরি ছোট সংখ্যাটা বলাই তো সংক্ষিপ্ত হতো, তবু এভাবে কেন?"
          },
          {
            "en": "He gives a pair of answers. The first is that naming the thousand magnifies the count, since the larger word strikes the ear as a greater stretch of time than the plain total would. The second rests on a report that Noah was granted a thousand years and gave fifty of them to a descendant of his, then at death returned to complete the thousand, so that the shortfall is noted as coming from his own hand. Either way, the phrasing is deliberate, not a loose rounding.",
            "bn": "তিনি দুটি জবাব দেন। প্রথমত, হাজারের উল্লেখ সংখ্যাটাকে বড় করে তোলে; সরাসরি সংখ্যা বললে যতটা মনে হতো, হাজার শব্দটা কানে তার চেয়ে লম্বা সময় হয়ে বাজে। দ্বিতীয় জবাব এক বর্ণনার ওপর দাঁড়িয়ে: নূহ (আঃ)-কে হাজার বছর আয়ু দেওয়া হয়েছিল, তিনি তা থেকে পঞ্চাশ বছর তাঁর এক বংশধরকে দিয়ে দেন, পরে মৃত্যুকালে হাজার পূর্ণ করতে তা ফিরিয়ে নেন। তাই কমতিটা যে তাঁর নিজের দিক থেকেই, আয়াতে সেটাই উল্লেখ আছে। যেভাবেই দেখা হোক, এই শব্দচয়ন ইচ্ছাকৃত, আন্দাজে গোল করে বলা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Lifetime, Whose Calling",
          "bn": "জীবনকাল নাকি দাওয়াতের কাল"
        },
        "p": [
          {
            "en": "The commentators divide over what the 950 counts. Ibn Abbas, as at-Tabari and Ibn Kathir both relay, held that Noah was sent at the age of 40, remained among his people 950 years calling them, and lived on 60 years after the flood. On this reading the figure is the length of his mission among this people, with a life before prophethood and a life after the deluge lying outside it. Ibn Kathir judges the plain sense of the verse to match this, and calls Ibn Abbas's view the nearest.",
            "bn": "৯৫০ বছর আসলে কী গোনে, এ নিয়ে তাফসীরকারেরা ভাগ হয়ে যান। তাবারী আর ইবন কাসীর দুজনেই ইবন আব্বাস থেকে আনেন যে, নূহ (আঃ)-কে ৪০ বছর বয়সে পাঠানো হয়, তিনি তাঁর সম্প্রদায়ের মাঝে ৯৫০ বছর তাদের ডেকে কাটান, আর মহাপ্লাবনের পর বাঁচেন আরও ৬০ বছর। এ পাঠ অনুযায়ী সংখ্যাটা এই সম্প্রদায়ের কাছে তাঁর দাওয়াতের দৈর্ঘ্য, নবুয়তের আগের জীবন আর প্লাবনের পরের জীবন এর বাইরে থাকে। ইবন কাসীর আয়াতের সরল অর্থকে এর সঙ্গেই মেলান, আর ইবন আব্বাসের মতকেই সবচেয়ে কাছের বলেন।"
          },
          {
            "en": "Qatadah, by contrast, took the 950 for Noah's entire lifespan, split as 300 years before he was sent, 300 spent calling them, and 350 after the flood. Ibn Kathir records this but marks it as odd, against the surface of the verse. The disagreement is real and old, and this reading sets out both without choosing: most read the span as the years of his calling, while some read it as the whole of his life.",
            "bn": "কাতাদা অবশ্য ৯৫০ বছরকে নূহ (আঃ)-এর গোটা আয়ু ধরেন, আর ভাগ করেন এভাবে: পাঠানোর আগে ৩০০ বছর, দাওয়াতে ৩০০ বছর, আর প্লাবনের পর ৩৫০ বছর। ইবন কাসীর মতটি উল্লেখ করেন, তবে বলেন এটি অদ্ভুত, আয়াতের বাহ্যিক অর্থের সঙ্গে মেলে না। মতভেদটা সত্যিকারের, আর পুরোনো। এখানে কোনোটা বেছে না নিয়ে দুটোই রাখা হলো: বেশির ভাগ আলেম সংখ্যাটাকে তাঁর দাওয়াতের বছর ধরেন, আর কেউ কেউ গোটা জীবনকাল।"
          },
          {
            "en": "The longer biographies only widen the gap. Ka'b al-Ahbar put his whole life at 1020 years, Wahb at 1400, each adding the periods before and after the mission to the Qur'anic 950. Ma'arif al-Qur'an settles the one fixed point: the 950 is stated by the Qur'an and is true beyond doubt, while the figures around it come from narrations that place it within a longer life. Where they add up differently, the verse itself names only the 950.",
            "bn": "বিস্তারিত জীবনীগুলো ফারাকটা আরও বাড়িয়েছে। কা'ব আল-আহবার তাঁর গোটা জীবন ধরেন ১০২০ বছর, ওহব ধরেন ১৪০০ বছর; দুজনেই দাওয়াতের আগের ও পরের সময়কে কুরআনের ৯৫০-এর সঙ্গে যোগ করেছেন। মাআরিফুল কুরআন একটি জায়গায় অটল: ৯৫০ সংখ্যাটা কুরআন নিজে বলেছে, আর তা সন্দেহাতীতভাবে সত্য। এর আশপাশের সংখ্যাগুলো এসেছে বিভিন্ন বর্ণনা থেকে, যেগুলো এই সময়টাকে আরও লম্বা এক জীবনের অংশ ধরে। সেসব হিসাব যেখানে মেলে না, সেখানেও আয়াত নিজে শুধু ৯৫০-এর কথাই বলে।"
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
            "bn": "সাদী সেই বছরগুলোর বুনোট এঁকে দেন। নূহ (আঃ) দাওয়াতে কখনো ঢিল দেননি, আন্তরিক নসিহতে কখনো ক্লান্ত হননি, চালিয়ে গেছেন রাতে ও দিনে, গোপনে ও প্রকাশ্যে, এমন ধৈর্য আর সহনশীলতা নিয়ে যা ভাষায় ধরা কঠিন। ইবন কাসীরও একই কথা বলেন, তিনি তাদের ডেকেছেন রাত-দিন, প্রকাশ্যে ও গোপনে, আর এত কিছুর পরও হাতে গোনা কয়েকজন তাঁর সঙ্গে ঈমান এনেছিল। আয়াত আমাদের দেয় দৈর্ঘ্যটা, আর এই বর্ণনাগুলো দেয় তার ভেতরের প্রতিদিনের ভার।"
          },
          {
            "en": "at-Tabari adds the bitter result: the more he called them to God and to leaving their idols, the more it increased them only in flight from him. as-Sa'di notes that it was after all this, worn down but not broken, that Noah at last prayed against them, my Lord, leave not a single disbeliever on the earth (71:26). The plea came at the end of centuries, not in the heat of a bad day.",
            "bn": "তাবারী তিক্ত ফলাফলটাও জানান: তিনি যত তাদের আল্লাহর দিকে আর মূর্তি ছাড়ার দিকে ডেকেছেন, তারা ততই তাঁর কাছ থেকে দূরে পালিয়েছে। সাদী উল্লেখ করেন, এতকিছুর পরেই, ক্লান্ত হয়েও ভেঙে না পড়ে, নূহ (আঃ) শেষমেশ তাদের বিরুদ্ধে দোয়া করেন: হে আমার রব, জমিনে কোনো কাফিরকে অবশিষ্ট রাখবেন না (৭১:২৬)। এই দোয়া এসেছিল শত শত বছরের শেষে, কোনো খারাপ দিনের রাগের মাথায় নয়।"
          },
          {
            "en": "al-Qurtubi notes that even the name carries the labour. Noah, Nuh in Arabic, is tied to nawh, to wail or lament; he was called Nuh, the commentator reports, because he lamented over his people across those long years, weeping for them whenever they turned away, and in another account because he wept long over his own fault until the name settled on him. Either way the name fastens the man to grief that was sustained, not grief spent in a single outburst and done.",
            "bn": "কুরতুবী লক্ষ করেন, এমনকি নামটাও এই শ্রমের ভার বয়ে বেড়ায়। নূহ শব্দটি জড়িয়ে আছে আরবি নাওহ, অর্থাৎ বিলাপ বা কান্নার সঙ্গে। তাঁকে নূহ বলা হয়েছিল, তাফসীরকার জানান, কারণ তিনি এই দীর্ঘ বছরগুলোজুড়ে তাঁর সম্প্রদায়ের জন্য বিলাপ করেছেন, তারা মুখ ফিরিয়ে নিলেই তাদের জন্য কেঁদেছেন, আর আরেক বর্ণনায়, কারণ তিনি নিজের ত্রুটির জন্য দীর্ঘ কান্না কেঁদেছেন যতক্ষণ না নামটা তাঁর উপর থিতু হলো। যেভাবেই হোক, নামটি মানুষটিকে বেঁধে রাখে টিকে থাকা শোকের সঙ্গে, এক ঝলকে ফুরিয়ে যাওয়া শোকের সঙ্গে নয়।"
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
            "bn": "তারপর মহাপ্লাবন তাদের গ্রাস করল। কুরতুবী আত-তূফান শব্দের পাঠগুলো জড়ো করেন, ইবন আব্বাস, সাঈদ বিন জুবায়ের আর কাতাদা একে ধরেন সেই বৃষ্টি হিসেবে যা তাদের উপর ছাড়া হয়েছিল, দাহহাক ধরেন ডুবে মরা হিসেবে, আর কেউ কেউ ব্যাপক অর্থে মৃত্যু হিসেবে। আরবিতে শব্দটি, ব্যাকরণবিদদের সূত্রে তিনি বলেন, এমন যেকোনো কিছুকে বোঝায় যা অপ্রতিরোধ্য প্রাচুর্যে এসে গোটা জনগোষ্ঠীকে ঢেকে ফেলে, তা পানি হোক, হত্যা হোক বা মৃত্যু।"
          },
          {
            "en": "as-Sa'di fills in the picture: water that came down from the sky in torrents and burst up from the earth with force, until it closed over them. The two senses meet in a single word. What began as rain they might have read as mere weather became, by its measure and its reach, a judgement that left no high ground. The verse does not linger on the horror; it states the seizing and moves on.",
            "bn": "সাদী ছবিটা পূর্ণ করেন: আকাশ থেকে মুষলধারে নেমে আসা আর জমিন ফুঁড়ে প্রবল বেগে উথলে ওঠা পানি, যতক্ষণ না তা তাদের পুরোপুরি ঢেকে ফেলে। দুই অর্থ এক শব্দেই মিলে যায়। শুরুতে যা ছিল বৃষ্টি, যাকে তারা হয়তো নিছক আবহাওয়া ভেবেছিল, তার মাত্রা আর বিস্তার তাকে বানিয়ে দিল এমন এক বিচার, যা কোনো উঁচু জায়গাও বাকি রাখেনি। আয়াত ভয়াবহতার বর্ণনায় থামে না; গ্রাস করার কথা বলেই এগিয়ে যায়।"
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
            "bn": "আয়াত শেষ হয় তাদের তখনকার অবস্থা জানিয়ে, গোটা জাতির ওপর ঢালাও রায় দিয়ে নয়: মহাপ্লাবন তাদের ধরল এমন অবস্থায় যে তারা ছিল সীমালঙ্ঘনকারী। বাগভী ইবন আব্বাস থেকে আনেন, এখানে সীমালঙ্ঘন মানে শিরক; তাবারী ব্যাখ্যা করেন, কুফরির মাধ্যমে নিজেদের ওপর জুলুম; মুয়াসসার তাদের কুফরের সঙ্গে যোগ করেন প্রকাশ্য জুলুম-অত্যাচার। ক্রমটা খেয়াল করার মতো। আজাব এসেছিল পুরো এক যুগ সতর্ক করার পর, আর তা পড়েছিল কেবল তাদের ওপর, যারা ততদিনে অন্যায়ে থিতু হয়ে গিয়েছিল। এ ছিল ঘোষিত দণ্ড, এলোমেলো কোনো দুর্যোগ নয়।"
          },
          {
            "en": "This must be said plainly. The verse records a past nation that God destroyed by His own decree, after His messenger had called them for a lifetime. It licenses nothing against any living person or community. It is not for anyone to read a flood, a storm, or any calamity today as a verdict on its victims, nor to appoint himself the agent of such a sentence. The judgement here is God's alone, over a people whose case is long closed.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি অতীতের এক জাতির কথা বলছে, যাদের আল্লাহ নিজের ফয়সালায় ধ্বংস করেছেন, তাও তাঁর রাসূল সারা জীবন তাদের ডেকে যাওয়ার পর। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো বন্যা, ঝড় বা দুর্যোগকে তার শিকারদের ওপর রায় বলে ধরে নেওয়ার অধিকার কারও নেই, আর এমন দণ্ড কার্যকর করার ভার নিজের হাতে তুলে নেওয়ার অধিকারও কারও নেই। এখানে বিচার কেবল আল্লাহর, এমন এক জাতির ওপর, যাদের মামলা বহু আগেই চুকে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Noah on the Day",
          "bn": "কিয়ামতের দিন নূহ"
        },
        "p": [
          {
            "en": "The verse opens, We certainly sent Noah to his people, and a sound hadith lets us see him at the far end of time. al-Bukhari records that on the Day of Resurrection the crowds will go to Noah pleading for intercession and say, you are the first of the messengers to the people of the earth, and God named you a thankful slave. That last title echoes the Qur'an's own word for him, a thankful slave (17:3).",
            "bn": "আয়াত শুরু হয়, আমি নূহকে তার সম্প্রদায়ের কাছে পাঠিয়েছিলাম, আর একটি সহিহ হাদিস আমাদের তাঁকে দেখায় সময়ের শেষ প্রান্তে। বুখারী বর্ণনা করেন, কিয়ামতের দিন মানুষের ভিড় শাফাআতের আকুতি নিয়ে নূহ (আঃ)-এর কাছে যাবে আর বলবে, আপনি পৃথিবীবাসীর কাছে পাঠানো প্রথম রাসূল, আর আল্লাহ আপনাকে কৃতজ্ঞ বান্দা নাম দিয়েছেন। শেষ উপাধিটি কুরআনের নিজের শব্দেরই প্রতিধ্বনি, কৃতজ্ঞ বান্দা (১৭:৩)।"
          },
          {
            "en": "The pairing is telling. The first of the messengers to the earth, after a lifetime of rejection, is remembered not as a bitter man but as a grateful servant. A long calling that bore almost no visible fruit did not sour him. The commentaries also relate a well-known image of Noah calling the world a house with two doors, come in by the first and gone out by the second, but it reaches us without a sound chain, so it is set aside here.",
            "bn": "জোড়াটা তাৎপর্যপূর্ণ। পৃথিবীর কাছে পাঠানো প্রথম রাসূল, গোটা এক জীবন প্রত্যাখ্যানের পরও, স্মরণে থাকেন তিক্ত মানুষ হিসেবে নয়, বরং কৃতজ্ঞ বান্দা হিসেবে। যে দীর্ঘ দাওয়াত প্রায় কোনো দৃশ্যমান ফলই দেয়নি, তা তাঁকে বিষিয়ে তোলেনি। তাফসীরগুলো নূহ (আঃ)-এর একটি সুপরিচিত ছবিও আনে, তিনি দুনিয়াকে বলেছেন দুটি দরজার এক ঘর, প্রথমটি দিয়ে ঢুকে আর দ্বিতীয়টি দিয়ে বেরিয়ে যাওয়া, তবে তা আমাদের কাছে পৌঁছায় সহিহ সনদ ছাড়া, তাই একে এখানে সরিয়ে রাখা হলো।"
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
            "bn": "একটু দূর থেকে দেখলে বিস্ময়ের জায়গা হলো সংক্ষেপটা। এক মানুষের ৯৫০ বছরের ধৈর্য, যার প্রতিটি ভোরে নতুন প্রত্যাখ্যানের জবাবে নতুন করে ডাক, ধরা হয়েছে মাত্র ষোলোটি আরবি শব্দে। আয়াতটি প্রায় কাটা কাটা। এই সংক্ষেপই আসল কথা। এত লম্বা জীবন, যার একঘেয়েমি আমরা কল্পনাও করতে পারি না, আমাদের সামনে আসে এক নিঃশ্বাসে। ফলে চোখে পড়ে কষ্ট নয়, বরং সেই অটলতা, যা কোনো ফল ছাড়াই টিকে ছিল অনেক জাতির আয়ুর চেয়েও বেশি সময়।"
          },
          {
            "en": "The surah had opened by asking whether people thought they would be left to say we believe and not be tested (29:2 and 29:3). Noah is the long answer. His task was the calling, faithfully kept; the harvest was never his to reckon, and he was not judged by it. For anyone worn down because the good they do seems to change nothing, the measure here is not the yield but the staying, and the timing of any fruit belongs to God.",
            "bn": "সূরাটি শুরু হয়েছিল এই প্রশ্ন দিয়ে: মানুষ কি ভেবেছে, শুধু 'আমরা ঈমান এনেছি' বললেই তাদের ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না (২৯:২ ও ২৯:৩)? নূহ (আঃ) সেই প্রশ্নের দীর্ঘ জবাব। তাঁর কাজ ছিল বিশ্বস্তভাবে দাওয়াত দিয়ে যাওয়া; ফসল গোনা কখনো তাঁর দায় ছিল না, আর ফসল দিয়ে তাঁর বিচারও হয়নি। ভালো কাজ করেও কিছুই বদলাচ্ছে না দেখে যিনি ক্লান্ত হয়ে পড়েছেন, তাঁর জন্য এখানে মাপকাঠি ফলন নয়, লেগে থাকা; আর কবে কী ফল আসবে, তা আল্লাহর হাতে।"
          },
          {
            "en": "Ibn Umar drew a sober lesson from the number. Asked how long Noah stayed among his people, he gave the Qur'an's figure and then said that people have not ceased to decline, in their lifespans, in their understanding, and in their character, down to this very day. The long life was not only a measure of Noah's endurance; it marked an older and sturdier world than ours. Set beside it, our short spans ask to be spent with more care, not less, since so little is now given.",
            "bn": "ইবন উমর সংখ্যাটা থেকে এক গম্ভীর শিক্ষা নিয়েছেন। নূহ (আঃ) তাঁর সম্প্রদায়ের মাঝে কতকাল ছিলেন, জিজ্ঞেস করা হলে তিনি কুরআনের সংখ্যাটা বলেন, তারপর বলেন: মানুষ ক্রমেই কমে আসছে, আয়ুতে, বুদ্ধিতে আর চরিত্রে, আজকের দিন পর্যন্ত। সেই দীর্ঘ জীবন শুধু নূহ (আঃ)-এর সহ্যশক্তির মাপ ছিল না; তা আমাদের চেয়ে পুরোনো আর মজবুত এক জগতের চিহ্নও। তার পাশে রাখলে বোঝা যায়, আমাদের ছোট আয়ু আরও যত্ন করে কাটানো দরকার, অবহেলায় নয়; কারণ এখন হাতে সময় খুব অল্প।"
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
          "bn": "যাও, গিয়ে দেখ"
        },
        "p": [
          {
            "en": "The verse just before this one asks a question: have they not considered how Allah begins creation, then repeats it (29:19)? That is put to the mind, as something they should already have noticed. Verse 20 does not repeat the question. It gives an order, and the order is to the body: say, travel through the land, then look at how He began creation. At-Tabari reads it as Allah telling the Prophet (ﷺ) to say this to those who deny the resurrection after death, the people who reject reward and punishment.",
            "bn": "এর ঠিক আগের আয়াতটি একটি প্রশ্ন তোলে: তারা কি দেখে না আল্লাহ কীভাবে সৃষ্টির সূচনা করেন, অতঃপর তার পুনরাবৃত্তি ঘটান (২৯:১৯)? এ প্রশ্ন মনের উদ্দেশে, যেন এ জিনিস তাদের আগেই লক্ষ করা উচিত ছিল। ২০ নম্বর আয়াত কিন্তু প্রশ্নটা আবার করে না। এটি একটা হুকুম দেয়, আর হুকুমটা শরীরের উদ্দেশে: বল, পৃথিবীতে ভ্রমণ কর, অতঃপর লক্ষ কর তিনি কীভাবে সৃষ্টির সূচনা করেছেন। তাবারী বলেন, আল্লাহ নবী ﷺ-কে বলছেন মৃত্যুর পর পুনরুত্থান অস্বীকারকারীদের, যারা পুরস্কার ও শাস্তি মানে না, তাদের এ কথা বলতে।"
          },
          {
            "en": "The difference is the whole point. A rhetorical question can be brushed aside, and a man can decide he has thought about it enough. A command to walk out and see cannot be answered from an armchair. The proof Allah offers for the life to come is not a clever argument kept indoors. It is spread across the earth, and the only way to take it in is to move through the earth with the eyes open. Faith here begins at the feet.",
            "bn": "এ পার্থক্যটাই আসল কথা। মুখের প্রশ্ন উড়িয়ে দেওয়া যায়, মানুষ ভাবতে পারে সে যথেষ্ট ভেবে নিয়েছে। কিন্তু উঠে গিয়ে দেখে আসার হুকুম ঘরে বসে মেটানো যায় না। পরকালের পক্ষে আল্লাহ যে প্রমাণ দেন তা কোনো চালাক যুক্তি নয় যা ঘরের ভেতরেই থেকে যায়। তা ছড়িয়ে আছে গোটা পৃথিবী জুড়ে, আর তা বুঝে নেওয়ার একমাত্র পথ পৃথিবীতে ঘুরে বেড়ানো আর চোখ খোলা রাখা। এখানে ঈমানের শুরু পায়ে হেঁটে।"
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
            "bn": "ভ্রমণ কর আর দেখ তিনি কীভাবে সৃষ্টির সূচনা করেছেন, অতঃপর আল্লাহ পরবর্তী সৃষ্টি গড়ে তুলবেন। এই এক বাক্যে যে যুক্তি ভরা আছে, তা সহজ আর পুরনো। তাবারী সোজা কথায় বলেন, আল্লাহ যেমন শুরুতে সব কিছু অস্তিত্বে এনেছিলেন আর তা সূচনা করা তাঁর পক্ষে কঠিন ছিল না, তেমনি তা ফিরিয়ে আনাও তাঁর পক্ষে কঠিন নয়। মুয়াসসারও প্রায় একই শব্দে একই যুক্তি দেন। প্রথম কাজটা চোখের সামনে রাখা হয়েছে এ জন্যই যে, সেটাই দ্বিতীয়টার প্রশ্ন মিটিয়ে দেয়।"
          },
          {
            "en": "Ma'arif al-Qur'an sharpens the edge of it. The Makkans being addressed already granted that Allah had made the universe; what they denied was that He could do it again. Yet repeating a thing, Ma'arif notes, is easier than making it the first time, not harder. It is strange, it says, to concede the greater act and balk at the lesser. The verse does not ask them to believe something new. It asks them to be consistent with what they already believe.",
            "bn": "মাআরিফুল কুরআন কথাটার ধারটা আরও তীক্ষ্ণ করে। যাদের সম্বোধন করা হচ্ছিল সেই মক্কাবাসীরা এটা মানত যে আল্লাহই বিশ্বজগত বানিয়েছেন, তারা অস্বীকার করত শুধু এটাই যে তিনি আবার তা করতে পারেন। অথচ কোনো জিনিস আবার বানানো, মাআরিফ বলে, প্রথমবার বানানোর চেয়ে সহজ, কঠিন নয়। বড় কাজটা মেনে নিয়ে ছোট কাজটায় আটকে যাওয়া অদ্ভুত। আয়াত তাদের নতুন কিছু বিশ্বাস করতে বলছে না। যা তারা আগেই বিশ্বাস করে, তার সঙ্গে সঙ্গতি রাখতে বলছে।"
          },
          {
            "en": "The sentence even marks the two creations with two tenses. How He began creation is in the past: it is done, finished, there to be seen. Then Allah produces the final creation is left open to what is still coming. The verb badaʾa looks back at a settled fact; yunshiʾu looks forward to a promise. The order of the words carries the argument. The eye is sent first to what has already happened, so that the mind will trust what has not yet happened.",
            "bn": "বাক্যটি এমনকি দুই সৃষ্টিকে দুই কালে চিহ্নিত করে। 'তিনি কীভাবে সৃষ্টির সূচনা করেছেন' কথাটা অতীত কালে, কাজ হয়ে গেছে, শেষ, দেখার জন্য সামনেই আছে। আর 'আল্লাহ পরবর্তী সৃষ্টি গড়ে তুলবেন' কথাটা যা এখনো আসছে তার জন্য খোলা রাখা। বাদাআ ক্রিয়া পেছনে এক মীমাংসিত সত্যের দিকে তাকায়, ইউনশিউ সামনে এক প্রতিশ্রুতির দিকে। শব্দের ক্রমই যুক্তিটা বহন করে। চোখকে আগে পাঠানো হয় যা ঘটে গেছে তার দিকে, যেন মন যা এখনো ঘটেনি তাকে বিশ্বাস করতে পারে।"
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
            "bn": "আন-নাশআতুল আখিরা, অর্থাৎ শেষ বা পরবর্তী সৃষ্টি, এ শব্দটিকে তাফসীরকারেরা একসুরে পুনরুত্থান হিসেবেই পড়েন। তাবারী কাতাদার বরাতে এনেছেন, এর অর্থ মৃত্যুর পর উত্থান; আর ইবন আব্বাস (রাঃ) একে বলেন মৃত্যুর পরের জীবন, যা হলো আন-নুশূর, পুনরায় জেগে ওঠা। ইবন কাসীর আরবি তাফসীরে সোজা বলেন: কিয়ামতের দিন। এখানে খোলা রাখার মতো সত্যিকারের কোনো মতভেদ নেই। বর্ণনার ভার একটি জায়গাতেই, আর এটা সোজাসুজি বলে দেওয়ারই দরকার।"
          },
          {
            "en": "As-Sa'di defines it from the other side. This last origination, he says, is the one that admits no death and no sleep. The first creation is a world of beginnings and endings, of waking and dying; the final one is only permanence, abiding forever in one of the two abodes. Naming it that way keeps the two creations distinct. The present world argues for the next, but it is not a sample of it. What comes is of a different and lasting kind.",
            "bn": "সাদী অন্য দিক থেকে একে সংজ্ঞায়িত করেন। এই শেষ সৃষ্টি, তিনি বলেন, এমন এক সৃষ্টি যেখানে মৃত্যু নেই, ঘুমও নেই। প্রথম সৃষ্টি শুরু আর শেষের জগত, জেগে ওঠা আর মরে যাওয়ার জগত। শেষ সৃষ্টি কেবল স্থায়িত্ব, দুই ঠিকানার কোনো একটিতে চিরকাল থাকা। এভাবে নাম দিলে দুই সৃষ্টি আলাদা থাকে। এই দুনিয়া পরের জীবনের পক্ষে সাক্ষ্য দেয়, তবে তা পরের জীবনের নমুনা নয়। যা আসছে তা ভিন্ন আর স্থায়ী এক ধরনের।"
          },
          {
            "en": "Both al-Qurtubi and al-Baghawi pause on a small point of recitation here. The Meccan reciter Ibn Kathir and Abu ʿAmr read the word as an-nashāʾa, the second syllable lengthened; the other reciters read an-nashʾa, shorter. Al-Baghawi likens the pair to al-raʾfa and al-raʾāfa, two forms of the one word. The meaning does not change between them. It is the kind of detail the commentators preserve because the text was received with care, down to the length of a single vowel.",
            "bn": "কুরতুবী আর বাগাভী দুজনেই এখানে কিরাতের একটা ছোট বিষয়ে থামেন। মক্কার ক্বারী ইবন কাসীর আর আবু আমর শব্দটি পড়েন আন-নাশাআ, দ্বিতীয় অক্ষর টেনে; অন্য ক্বারীরা পড়েন আন-নাশআ, ছোট করে। বাগাভী এ জোড়াটিকে তুলনা করেন আর-রাফা আর আর-রাআফার সঙ্গে, যা একই শব্দের দুই রূপ। এতে অর্থের কোনো বদল হয় না। তাফসীরকারেরা এমন খুঁটিনাটিও সংরক্ষণ করেন, কারণ উম্মাহ কুরআনকে গ্রহণ করেছে পরম যত্নে, একটি স্বর কতখানি টানা হবে, সেটুকু পর্যন্ত।"
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
            "bn": "কুরতুবী দেখার হুকুমটাকে একসঙ্গে দুই দিকে খুলে দেন। তিনি বলেন, দেখ, তিনি কীভাবে সৃষ্টির সূচনা করেছেন তার সব বৈচিত্র্য নিয়ে: আকৃতির ভিন্নতা, ভাষার, রঙের আর স্বভাবের ভিন্নতা। জীবজগতের এই বিপুল বৈচিত্র্য প্রমাণের অর্ধেক। যিনি এত রকমের সৃষ্টি বানিয়েছেন, যার প্রতিটি অস্তিত্বে আসে নিজের ধরনে, তিনি যে আবারও বানাতে পারেন, তা তো স্পষ্ট।"
          },
          {
            "en": "Then al-Qurtubi turns the gaze elsewhere: look at the dwellings of the generations that have passed, their homes and their traces, how He destroyed them, so that by this you may know the perfection of Allah's power. Al-Baghawi reads the verse the same way, telling the reader to look at their dwellings and their ruins. The command to see how creation began takes in the broken walls of the dead as readily as the newborn and the sprouting field.",
            "bn": "এরপর কুরতুবী দৃষ্টি ঘুরিয়ে দেন অন্যদিকে: দেখ অতীত প্রজন্মগুলোর বাসস্থান, তাদের ঘরবাড়ি আর চিহ্ন, তিনি কীভাবে তাদের ধ্বংস করেছেন, যেন এর মধ্য দিয়ে তোমরা আল্লাহর ক্ষমতার পূর্ণতা জানতে পার। বাগাভীও আয়াতটি একইভাবে পড়েন, পাঠককে বলেন তাদের বাসস্থান আর ধ্বংসাবশেষের দিকে তাকাতে। সৃষ্টির শুরু দেখার এই হুকুমে যেমন আছে নবজাতক শিশু আর গজিয়ে ওঠা ফসল, তেমনি আছে মৃতদের ভাঙা দেয়ালও।"
          },
          {
            "en": "So the looking the verse asks for has both a living face and a ruined one. The living world shows a power still at work; the ruins show that power bringing things to an end and able to begin them over. Some commentators heard in \"how creation began\" an invitation to read the earth itself, its layered remains and old settlements. The verse does not spell out a method. It tells the eye where to turn and trusts it to draw the conclusion.",
            "bn": "তাই আয়াত যে দেখা চায় তার একটা জীবন্ত চেহারা আছে, একটা ধ্বংসের চেহারাও আছে। জীবন্ত জগত দেখায় এক ক্ষমতা যা এখনো সচল, ধ্বংসস্তূপ দেখায় সেই ক্ষমতা জিনিসকে শেষ করে দিতে পারে, আবার নতুন করে শুরুও করতে পারে। কোনো কোনো তাফসীরকার 'সৃষ্টি কীভাবে শুরু হলো' কথাটায় শুনেছেন পৃথিবীটাকেই পড়ার ডাক, তার স্তরে স্তরে জমা থাকা চিহ্ন আর পুরনো জনপদ। আয়াত কোনো পদ্ধতি বলে দেয় না। চোখকে কোন দিকে ফেরাতে হবে তা বলে দেয়, আর সিদ্ধান্ত টেনে নেওয়ার ভার চোখের উপরেই ছাড়ে।"
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
            "bn": "সাদী ভ্রমণের হুকুমটাকে শরীর আর অন্তর দুইয়েরই কাজ হিসেবে পড়েন। পৃথিবীতে ঘুরে বেড়াও, তিনি বলেন, আর দেখবে মানুষ আর পশুপাখি একটু একটু করে অস্তিত্বে আসছে, গাছপালা ঋতুর পর ঋতু জন্ম নিচ্ছে, মেঘ আর বাতাস অবিরাম নিজেকে নতুন করছে। তাঁর পড়ায় সৃষ্টি কখনো শেষ হয়ে একপাশে সরে যায় না। যে দেখতে চায় তার চোখের সামনেই তা একসঙ্গে শুরু হচ্ছে আর বারবার ফিরছে।"
          },
          {
            "en": "Then he brings the argument indoors, to the bed. Look at people in their lesser death, he says, which is sleep. Night falls, their movements still, their voices cut off, and they lie in their beds like the dead. They stay so the whole night, until dawn splits open and they wake from their sleep as if raised from dying, saying: praise be to Allah who gave us life after He made us die, and to Him is the rising. A resurrection is rehearsed every morning.",
            "bn": "তারপর তিনি যুক্তিটাকে ঘরে এনে বিছানায় নামান। মানুষকে তার ছোট মৃত্যুতে দেখ, তিনি বলেন, যা হলো ঘুম। রাত নামে, তাদের নড়াচড়া থেমে যায়, গলার আওয়াজ বন্ধ হয়, আর তারা বিছানায় পড়ে থাকে মৃতের মতো। সারা রাত এভাবেই থাকে, যতক্ষণ না ভোর ফেটে ওঠে আর তারা ঘুম থেকে জেগে ওঠে যেন মৃত্যু থেকে উঠে, বলতে বলতে: সমস্ত প্রশংসা আল্লাহর, যিনি মৃত্যুর পর আমাদের জীবন দিলেন, আর তাঁরই কাছে উত্থান। প্রতিটি সকালে একটা পুনরুত্থানের মহড়া হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Bone That Remains",
          "bn": "যে হাড়টি থেকে যায়"
        },
        "p": [
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith directly to it, so what follows is a sound narration on the resurrection in general, not a report the mufassirūn tie to these words. Sahih al-Bukhari records that the Prophet (ﷺ) said that between the two blowings of the trumpet there is forty; when Abu Hurayra (RA) was pressed on whether this meant days, months, or years, he declined to say.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীরই সরাসরি এর সঙ্গে কোনো হাদিস জুড়ে দেয় না, তাই নিচে যা আসছে তা পুনরুত্থান নিয়ে সাধারণভাবে একটি সহীহ বর্ণনা, এ শব্দগুলোর সঙ্গে তাফসীরকারদের বেঁধে দেওয়া কোনো বর্ণনা নয়। সহীহ বুখারীতে এসেছে, নবী ﷺ বলেছেন দুই ফুঁৎকারের মাঝে চল্লিশ। আবু হুরায়রা (রাঃ)-কে যখন চাপ দেওয়া হলো এর অর্থ দিন, মাস নাকি বছর, তিনি বলতে চাইলেন না।"
          },
          {
            "en": "The narration continues: then Allah sends down water from the sky, and the dead grow as plants grow. Nothing of a person decays away except one bone, the little bone at the base of the spine, and from it the whole creation is put together again on the Day of Resurrection. Being in Bukhari's collection, it carries his grading of soundness. It fills out the bare claim of the verse with an image: the self is not scattered past recall, for the seed of it is kept.",
            "bn": "বর্ণনাটি চলতে থাকে: এরপর আল্লাহ আকাশ থেকে পানি নামান, আর মৃতেরা গাছপালার মতো গজিয়ে ওঠে। মানুষের কিছুই পচে নিঃশেষ হয় না একটি হাড় ছাড়া, মেরুদণ্ডের গোড়ার সেই ছোট হাড়টি, আর তা থেকেই কিয়ামতের দিন গোটা সৃষ্টি আবার জোড়া লাগানো হয়। বুখারীর সংকলনে থাকায় এটি তাঁর সহীহ হওয়ার মান বহন করে। আয়াতের শুকনো দাবিটাকে এটি একটা ছবি দিয়ে ভরে দেয়: মানুষের সত্তা এমনভাবে ছড়িয়ে যায় না যে আর ফেরানো যাবে না, কারণ তার বীজটুকু রেখে দেওয়া হয়।"
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
            "bn": "লোভ হয় আয়াতটাকে টেনে এনে প্রতিটি যুগে যা চমক জাগায় তারই প্রমাণ বানিয়ে ফেলতে, আর 'দেখ তিনি কীভাবে সৃষ্টি শুরু করেছেন' কথাটা পড়ে বলে দিতে যে ল্যাবরেটরির আবিষ্কার কুরআন আগেই বলে দিয়েছে। তাফসীরকারেরা সে পথে যান না। তাঁরা দেখান সেসব জিনিস, যা যেকোনো পথিক নিজের যুগেই দেখতে পেত: নানা রকম প্রাণীর ছড়িয়ে থাকা, হারিয়ে যাওয়া জাতিদের ধ্বংসস্তূপ, ঘুম থেকে জেগে ওঠার পালা। দেখাটা সত্যিকারের, তবে তা দেখাই; আঁকড়ে ধরে রক্ষা করার মতো কোনো তত্ত্ব নয়।"
          },
          {
            "en": "What the verse asks is humbler and harder than proof-texting. It asks a person to go and attend to the world as a made thing, and to let the plain fact of its beginning speak to the question of its end. Ibn Kathir, in his English commentary, lists what there is to contemplate: the heavens with their stars, the earth with its mountains and valleys, its trees and rivers and seas, all of it pointing back to a Maker who says to a thing be, and it is. The discipline is attention, not cleverness.",
            "bn": "আয়াত যা চায়, তা প্রমাণের জন্য আয়াত খুঁজে বেড়ানোর চেয়ে বিনয়ী কাজ, আবার কঠিনও। আয়াত চায়, মানুষ বেরিয়ে পড়ুক, দুনিয়াকে একটা বানানো জিনিস হিসেবে মন দিয়ে দেখুক, আর দুনিয়ার যে একটা শুরু ছিল, এই সাদামাটা সত্য থেকেই বুঝে নিক তার শেষের কথা। ইবন কাসীর (তাঁর তাফসীরের ইংরেজি সংস্করণে) সাজিয়ে দেন কী কী ভেবে দেখার আছে: তারকাভরা আকাশ, পাহাড় আর উপত্যকার পৃথিবী, তার গাছপালা, নদী আর সাগর। এ সবই ইঙ্গিত করে এমন এক স্রষ্টার দিকে, যিনি কোনো কিছুকে বলেন হও, আর তা হয়ে যায়। এখানে সাধনা হলো মনোযোগ, চালাকি নয়।"
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
            "bn": "আয়াত শেষ হয়: নিশ্চয় আল্লাহ সব কিছুর উপর ক্ষমতাবান। তাবারী এখানে এই ক্ষমতাকে পড়েন গোটা সৃষ্টিকে তার বিলয়ের পর আবার ঠিক আগের মতো ফিরিয়ে আনার ক্ষমতা হিসেবে, আর তিনি যা চান তা-ই করার ক্ষমতা হিসেবে; তিনি কিছু চাইলে কোনো কিছুই তাঁকে ঠেকাতে পারে না। সাদী আবারও বড় থেকে ছোটর যুক্তি টানেন: যে ক্ষমতা প্রথম সৃষ্টির জন্য যথেষ্ট ছিল, দ্বিতীয়টির জন্য তা তো আরও বেশি যথেষ্ট। এই শেষ বাক্যটি সাজসজ্জা নয়। গোটা যুক্তি এরই ওপর দাঁড়িয়ে ছিল।"
          },
          {
            "en": "For anyone who takes the command seriously, the order of the verse is also an order for the heart. First the feet move and the eyes open; then the mind concedes what it has seen; then certainty about the last day settles in, carried not by argument alone but by a world full of beginnings. The resurrection stops being a doctrine to assent to and becomes something the earth has been showing all along. Travel, look, and let the first creation teach you the last.",
            "bn": "যে হুকুমটাকে সত্যিই গুরুত্ব দেয়, তার জন্য আয়াতের এই ধাপগুলো অন্তরেরও ধাপ। আগে পা চলে, চোখ খোলে; তারপর মন যা দেখেছে তা মেনে নেয়; তারপর শেষ দিনের ব্যাপারে ইয়াকিন জমে বসে। সে ইয়াকিন শুধু যুক্তির জোরে আসে না, আসে চারপাশে অসংখ্য শুরু দেখে দেখে। পুনরুত্থান তখন আর শুধু মেনে নেওয়ার মতো একটা আকিদা থাকে না; হয়ে ওঠে এমন কিছু, যা পৃথিবী এতদিন ধরে চোখের সামনে দেখিয়ে আসছে। তাই বেরিয়ে পড়ুন, দেখুন, আর প্রথম সৃষ্টির কাছ থেকেই শেষ সৃষ্টির পাঠ নিন।"
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
            "bn": "এই কথাগুলো আসে আগুনের ঠিক পরে। ইবরাহীম (আঃ)-এর দাওয়াতের জবাবে তাঁর কওম তাঁকে মেরে ফেলতে বা আগুনে পুড়িয়ে দিতে চেয়েছিল, আর আল্লাহ তাঁকে সেই আগুন থেকে বাঁচিয়েছিলেন, ২৯:২৪ আয়াতে যেমন আছে। তিনি সহিংসতার জবাব সহিংসতায় দেন না। তিনি আবার তাদের দিকে ফিরে আসেন। যে তর্ক তারা চুকিয়ে ফেলেছে বলে ভেবেছিল, সেটা আবার শুরু করেন, আর সোজাসুজি বলে দেন তাদের প্রতিমাগুলো আসলে কী, আর কী নয়। যাঁকে তারা পুড়িয়ে মারতে চেয়েছিল, তিনিই আবার দাঁড়িয়ে তাদের বোঝাচ্ছেন। আর প্রথমেই তিনি তাদের সবার মিলে করা ওই পূজা থেকে 'উপাস্য' নামের মর্যাদাটুকু কেড়ে নেন।"
          },
          {
            "en": "The verse opens with innama, a word of restriction: only, and nothing more. You have taken, apart from Allah, mere idols. Ibn Kathir reads the line as a rebuke and a reproach for the evil of their deed, their worship of carved things. The point is not yet the punishment; it is the diagnosis. Whatever these objects meant to them, they were never gods, and the single word innama has already said so before the sentence goes on to name what they really were instead.",
            "bn": "আয়াত শুরু হয় ইন্নামা দিয়ে। শব্দটা সীমা টেনে দেয়: কেবল, এর বেশি কিছু নয়। তোমরা আল্লাহকে বাদ দিয়ে নিছক কিছু প্রতিমা গ্রহণ করেছ। ইবন কাসীরের মতে এ কথা তাদের মন্দ কাজের জন্য ভর্ৎসনা আর তিরস্কার, অর্থাৎ খোদাই করা জিনিসের পূজার জন্য। এখানে এখনো শাস্তির কথা আসেনি, আগে আসল রোগটা ধরিয়ে দেওয়া হচ্ছে। এই জিনিসগুলো তাদের কাছে যত বড়ই হোক, ওগুলো কখনো উপাস্য ছিল না। ওগুলো আসলে কী ছিল, বাক্যটি সে কথা বলার আগেই ইন্নামা শব্দটি তা বলে দিয়েছে।"
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
            "bn": "তাবারী জানান, মাওয়াদ্দাতা বাইনিকুম কীভাবে পড়া হবে, তা নিয়ে ক্বারীদের মধ্যে মতভেদ ছিল, আর তিনি তিনটি পাঠ তুলে ধরেন। প্রথম পাঠে ক্রিয়াটির দুটি কর্ম, আর শব্দটি নাসব হয়ে দ্বিতীয় কর্মের জায়গায় বসে: মাওয়াদ্দাতান বাইনাকুম। দ্বিতীয় পাঠেও শব্দটি নাসব, তবে পরের শব্দের সঙ্গে ইজাফতে জুড়ে যায়: মাওয়াদ্দাতা বাইনিকুম। তৃতীয় পাঠে শব্দটি রফ: মাওয়াদ্দাতু বাইনিকুম। হরফগুলো একই থাকে, বদলায় কেবল হরকত, আর তার সঙ্গে ব্যাকরণ। প্রতিটি বদলে বাক্যের অর্থ খানিকটা ঘুরে যায়।"
          },
          {
            "en": "Al-Qurtubi dwells on the accusative reading and gives it a clear sense. Taken as a causal object, the kind grammarians call maf'ul li-ajlih, the line says: you took these idols for the sake of the affection between you, as a man says I came to you seeking good. On this reading the idols are the means and the affection is the motive. You did not really want the stones; you wanted the belonging that gathering around them bought you in the life of this world, and the idols were simply where the belonging was kept.",
            "bn": "কুরতুবী নাসব পাঠটি নিয়ে বিস্তারিত বলেন, আর এর একটি স্পষ্ট অর্থ দেখান। একে কারণবাচক কর্ম ধরলে (ব্যাকরণবিদেরা যাকে বলেন মাফউল লি-আজলিহ), আয়াতের অর্থ দাঁড়ায়: তোমরা এই প্রতিমাগুলো গ্রহণ করেছ তোমাদের পারস্পরিক ভালবাসার খাতিরে, ঠিক যেমন কেউ বলে, কল্যাণের আশায় তোমার কাছে এলাম। এই পাঠে প্রতিমা হলো উপায়, আর ভালবাসা আসল উদ্দেশ্য। তোমরা আসলে পাথর চাওনি। তোমরা চেয়েছিলে দলের একজন হয়ে থাকতে, আর দুনিয়ার জীবনে ওগুলোর চারপাশে জড়ো হলেই সেটা মিলত। প্রতিমা ছিল কেবল সেই দলবদ্ধতার ঠিকানা।"
          },
          {
            "en": "Al-Baghawi preserves the nominative reading and the different sense it yields. Here innama splits into inna plus ma meaning that which, so the line says: that which you took, apart from Allah, as idols is only an affection between you in the life of this world, then it is cut off and brings no benefit in the Hereafter. Now the idols are not a means to the bond; they simply are the bond, a passing fondness dressed up as religion. At-Tabari, having laid out the readings, judges them close in meaning and all sound, and takes no side. This article keeps both.",
            "bn": "বাগভী রফ পাঠটি আর তা থেকে আসা ভিন্ন অর্থটি সংরক্ষণ করেছেন। এই পাঠে ইন্নামা ভেঙে হয় ইন্না আর মা, যেখানে মা মানে 'যা'। তখন আয়াতের অর্থ: আল্লাহকে বাদ দিয়ে প্রতিমা হিসেবে তোমরা যা গ্রহণ করেছ, তা দুনিয়ার জীবনে তোমাদের মধ্যকার নিছক এক ভালবাসা মাত্র। তারপর তা ছিন্ন হয়ে যায়, আখিরাতে কোনো কাজে আসে না। এখানে প্রতিমা বাঁধনের উপায় নয়, ওগুলোই বাঁধন: ধর্মের পোশাক পরা ক্ষণিকের এক মায়া। তাবারী পাঠগুলো সাজিয়ে বলেন, এগুলোর অর্থ কাছাকাছি আর সবগুলোই শুদ্ধ; তিনি কোনো একটির পক্ষ নেন না। এই লেখাও দুটো অর্থই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Bond That Looks Like Love",
          "bn": "ভালবাসার মোড়কে বাঁধন"
        },
        "p": [
          {
            "en": "Beneath the grammar the commentators agree on the lived picture. At-Tabari describes a people who love each other over worshipping their idols and grow fond of each other in serving them, so that the shared cult becomes the thread that ties them together. Al-Muyassar puts it the same way: they took the false gods as an affection between them, loving each other in their worship and in their service. The idol is less an object of belief than a membership card. To bow where the tribe bows is simply to stay inside the tribe.",
            "bn": "ব্যাকরণের তর্ক যা-ই হোক, বাস্তব ছবিটা নিয়ে তাফসীরকারেরা একমত। তাবারীর বর্ণনায় এমন এক কওম, যারা প্রতিমাপূজাকে ঘিরে একে অপরকে ভালবাসে, ওগুলোর সেবা করতে গিয়ে পরস্পরের আপন হয়ে ওঠে। ফলে সবার মিলে করা পূজাটাই হয়ে যায় তাদের বেঁধে রাখার সুতো। মুয়াসসারেও একই কথা: তারা মিথ্যা উপাস্যগুলোকে নিজেদের ভালবাসার মাধ্যম বানিয়েছিল, পূজায় আর সেবায় একে অপরকে ভালবেসে। প্রতিমা এখানে যতটা না বিশ্বাসের বিষয়, তার চেয়ে বেশি দলের সদস্য হওয়ার কার্ড। গোত্র যেখানে মাথা নোয়ায়, সেখানে মাথা নোয়ানো মানেই গোত্রের ভেতরে থেকে যাওয়া।"
          },
          {
            "en": "Ibn Kathir draws out why this felt like love and not like fear. You took these as gods, he has Ibrahim (AS) say, and you come together to worship them so that there is friendship and affection among you in this world. The worship did real social work. It fed the feasts, sealed the marriages, settled the quarrels, and marked off the stranger from the kin. A man who left the idols did not merely change his mind; he walked out of the warmth. That is the quiet power the verse is about to expose and overturn.",
            "bn": "ইবন কাসীর খুলে বলেন, কেন এটা ভয় নয়, ভালবাসা বলেই মনে হতো। তিনি ইবরাহীম (আঃ)-এর মুখে কথাটা এভাবে আনেন: তোমরা এগুলোকে উপাস্য বানিয়েছ, আর এদের পূজায় একত্র হও, যাতে দুনিয়ায় তোমাদের মধ্যে বন্ধুত্ব আর ভালবাসা থাকে। এই পূজা সমাজে সত্যিই কাজ করত। এ দিয়েই ভোজ জমত, বিয়ে পাকা হতো, ঝগড়া মিটত, আপন-পর চেনা যেত। যে প্রতিমা ছেড়ে দিত, সে শুধু মত বদলাত না; সে সেই উষ্ণ আশ্রয় থেকেই বেরিয়ে যেত। এই নীরব শক্তিটাকেই আয়াত এবার ফাঁস করে উল্টে দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Bond Snaps",
          "bn": "বাঁধন যেদিন ছিঁড়ে যায়"
        },
        "p": [
          {
            "en": "Then comes the hinge word, thumma, and after it the Day of Resurrection. The warmth inverts. You will deny each other, the verse says, and Ibn Kathir glosses the denial as this: you will disown whatever passed between you, each refusing to own the bond he once prized. And you will curse each other: the followers cursing the leaders they obeyed, the leaders cursing the followers who flattered them. The same mouths that praised the shared gods together now turn against each other, and the fellowship of worship becomes a courtroom of blame.",
            "bn": "তারপর আসে মোড় ঘোরানো শব্দ ছুম্মা, আর তার পরেই ক্বিয়ামতের দিন। সব উষ্ণতা উল্টে যায়। আয়াত বলছে, তোমরা একে অপরকে অস্বীকার করবে। ইবন কাসীর এর ব্যাখ্যা দেন: তোমাদের মধ্যে যা কিছু ছিল, সব তোমরা অস্বীকার করবে; যে বাঁধনকে একসময় এত দামি ভাবতে, কেউ আর তাকে নিজের বলে মানবে না। আর তোমরা একে অপরকে অভিশাপ দেবে: অনুসারীরা অভিশাপ দেবে সেই নেতাদের, যাদের তারা মেনে চলত; নেতারা অভিশাপ দেবে সেই অনুসারীদের, যারা তাদের তোষামোদ করত। যে মুখগুলো একসঙ্গে ওই উপাস্যদের গুণগান গাইত, সেই মুখগুলোই এবার একে অপরের বিরুদ্ধে খোলে। পূজার মজলিস হয়ে ওঠে দোষারোপের আদালত।"
          },
          {
            "en": "The commentators tie the scene to two other verses. Ibn Kathir and al-Qurtubi both recall 7:38, where every nation entering the Fire curses the sister nation that went in before it, and 43:67, where close friends on that Day are enemies to each other, except the God-fearing. The pattern is fixed across the Quran: intimacy built on anything but Allah is scheduled to collapse. What looked like the surest thing in the worldly life turns out to be the first thing to betray them the moment the accounts are opened.",
            "bn": "তাফসীরকারেরা দৃশ্যটিকে আরও দুটি আয়াতের সঙ্গে মিলিয়ে দেখেন। ইবন কাসীর ও কুরতুবী দুজনেই ৭:৩৮ আয়াতের কথা মনে করিয়ে দেন, যেখানে জাহান্নামে ঢোকা প্রতিটি জাতি তার আগে ঢোকা সহোদর জাতিকে অভিশাপ দেয়। আর ৪৩:৬৭ আয়াতের কথা, যেখানে সেদিন ঘনিষ্ঠ বন্ধুরা একে অপরের শত্রু হয়ে যাবে, কেবল মুত্তাকীরা ছাড়া। গোটা কুরআনে নিয়মটা একই: আল্লাহ ছাড়া অন্য কিছুর উপর গড়া ঘনিষ্ঠতা একদিন ভেঙে পড়বেই। দুনিয়ার জীবনে যাকে সবচেয়ে পাকা মনে হয়েছিল, হিসাবের খাতা খোলার মুহূর্তে সেটাই সবার আগে বিশ্বাসঘাতকতা করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Even the Idols Disown",
          "bn": "প্রতিমারাও মুখ ফিরিয়ে নেবে"
        },
        "p": [
          {
            "en": "As-Sa'di presses the point further: it is not only the worshippers who turn against each other, but the worshipped who turn on them. Each party, he writes, the worshippers and the objects worshipped alike, will disown the other. He points to 46:6, where, when mankind is gathered, the false gods become enemies to their devotees and deny ever having been worshipped at all. Then he asks the question that undoes the whole bargain: how can you cling to something you already know will disown you and curse you on that Day?",
            "bn": "সা'দী কথাটা আরও এগিয়ে নেন: শুধু পূজারিরাই একে অপরের বিরুদ্ধে যায় না, যাদের পূজা করা হতো তারাও পূজারিদের বিরুদ্ধে দাঁড়ায়। তিনি লেখেন, পূজারি আর যাদের পূজা হতো, দুই পক্ষই একে অপরকে অস্বীকার করবে। তিনি ৪৬:৬ আয়াত দেখান: মানুষকে যখন একত্র করা হবে, মিথ্যা উপাস্যরা তাদের ভক্তদের শত্রু হয়ে যাবে, আর অস্বীকার করবে যে কেউ কখনো তাদের পূজা করেছিল। তারপর তিনি সেই প্রশ্ন তোলেন, যাতে পুরো সওদাটাই ভেস্তে যায়: যে সেদিন অস্বীকার করবে আর অভিশাপ দেবে, এ কথা আগে থেকেই জেনেও মানুষ তাকে আঁকড়ে থাকে কী করে?"
          },
          {
            "en": "Al-Qurtubi notes who the warning of the Fire addresses: the idol-worshippers together, leaders and followers alike. And he adds that the idols themselves are swept in, citing 21:98, you and what you worship apart from Allah are fuel for Hell. The stones that could not feed a single friendship in this life cannot shield a single soul in the next. Your refuge, the verse closes, is the Fire, and there are no helpers, nobody at all to step in between the worshipper and the punishment he chose for himself.",
            "bn": "কুরতুবী দেখান, জাহান্নামের এই হুঁশিয়ারি কাদের উদ্দেশে: প্রতিমাপূজারিদের সবাইকে, নেতা আর অনুসারী নির্বিশেষে। তিনি আরও বলেন, প্রতিমাগুলোও এর বাইরে নয়, আর দলিল দেন ২১:৯৮ আয়াত থেকে: তোমরা এবং আল্লাহকে বাদ দিয়ে তোমরা যাদের পূজা করো, সবাই জাহান্নামের জ্বালানি। যে পাথর দুনিয়ায় একটা বন্ধুত্বকেও টিকিয়ে রাখতে পারেনি, আখিরাতে তা একটা প্রাণকেও রক্ষা করতে পারবে না। আয়াতের শেষ কথা: তোমাদের ঠিকানা জাহান্নাম, আর তোমাদের কোনো সাহায্যকারী নেই। পূজারি আর তার নিজের বেছে নেওয়া শাস্তির মাঝখানে এসে দাঁড়াবে, এমন কেউ নেই।"
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
            "bn": "তাবারী কাতাদা থেকে একটি কথা বর্ণনা করেছেন, যাতে নিয়মটা হুবহু ধরা আছে: দুনিয়ার প্রতিটি বন্ধুত্ব ক্বিয়ামতের দিন বন্ধুদের জন্য শত্রুতা হয়ে দাঁড়াবে, কেবল মুত্তাকীদের বন্ধুত্ব ছাড়া। এই ব্যতিক্রমটুকুই আয়াতের সব আশা। ভালবাসা নিজে দোষের নয়; দোষ মিথ্যা ভালবাসার। একটা বাঁধন অটুট অবস্থায় আখিরাতে পৌঁছাতে পারে, তবে কেবল তখনই, যখন সেই বাঁধনের মূলে থাকেন আল্লাহ; সবাই মিলে মানা কোনো প্রতিমা, সবার এক লোভ বা এক অহংকার নয়। আয়াত যে প্রশ্নের মুখে দাঁড় করায়, তা সহজ: মানুষ এতদিন কোন ধরনের বাঁধন গড়ে এসেছে?"
          },
          {
            "en": "The sound tradition sharpens the contrast. In Sahih al-Bukhari, the Prophet (ﷺ) names, among those Allah will shade on the Day when there is no shade but His, two people who loved each other for Allah's sake, who met upon that and parted upon that. Set that beside Ibrahim's (AS) crowd who loved each other over an idol. The same act, love between people, leads to the shade of the Throne or to mutual cursing, and the whole difference lies in what the love was built upon.",
            "bn": "সহীহ হাদিস এই পার্থক্যকে আরও স্পষ্ট করে। সহীহ বুখারীতে আছে, নবী ﷺ বলেছেন, যেদিন আল্লাহর ছায়া ছাড়া আর কোনো ছায়া থাকবে না, সেদিন যাদের তিনি ছায়া দেবেন, তাদের মধ্যে আছে এমন দুজন, যারা আল্লাহর জন্য একে অপরকে ভালবেসেছে, এরই উপর মিলেছে আর এরই উপর আলাদা হয়েছে। এর পাশে রাখুন ইবরাহীম (আঃ)-এর কওমকে, যারা একটা প্রতিমাকে ঘিরে একে অপরকে ভালবাসত। একই কাজ, মানুষে মানুষে ভালবাসা, কাউকে নিয়ে যায় আরশের ছায়ায়, কাউকে পারস্পরিক অভিশাপে। পুরো পার্থক্যটা শুধু এক জায়গায়: ভালবাসাটা কিসের উপর গড়া ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Against No One Alive",
          "bn": "জীবিত কারও বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "This has to be said plainly. The verse condemns idolatry and the habit of clinging to it, and it describes where a false bond ends. It licenses nothing against any living idol-worshipper, and nothing against any community that worships wrongly today. Notice what Ibrahim (AS) actually does with the truth he holds: he argues. He reasons with the very people who tried to burn him, and in the next verse, 29:26, he emigrates for his Lord rather than raise a hand. The prophet of this passage preaches and departs; he does not harm.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি প্রতিমাপূজার নিন্দা করে, তা আঁকড়ে থাকার অভ্যাসের নিন্দা করে, আর দেখায় মিথ্যা বাঁধন কোথায় গিয়ে শেষ হয়। কিন্তু জীবিত কোনো প্রতিমাপূজারির বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না; আজ যারা ভুল পথে উপাসনা করে, এমন কোনো জনগোষ্ঠীর বিরুদ্ধেও নয়। খেয়াল করুন, নিজের হাতে থাকা সত্য নিয়ে ইবরাহীম (আঃ) আসলে কী করেন: তিনি যুক্তি দিয়ে বোঝান। যারা তাঁকে পুড়িয়ে মারতে চেয়েছিল, তাদেরকেই তিনি বোঝান। আর পরের আয়াতে (২৯:২৬) হাত না তুলে তিনি তাঁর রবের উদ্দেশে হিজরত করেন। এই অংশের নবী দাওয়াত দেন, তারপর চলে যান; তিনি কারও ক্ষতি করেন না।"
          },
          {
            "en": "So the verse is first a mirror for the reader, not a weapon for the room. It gives nobody the right to brand a present-day neighbour, sect, or nation as the idolaters it describes, or to treat them as Ibrahim's (AS) would-be burners deserved to be treated. The warning is addressed inward: it asks what I have been bowing to for the sake of belonging, and whom I would disown, or be disowned by, if the Day arrived tonight. A truth that gets turned outward as an accusation has been misread at its root.",
            "bn": "তাই আয়াতটি আগে পাঠকের নিজের জন্য আয়না, অন্যের দিকে তাক করার অস্ত্র নয়। আজকের কোনো প্রতিবেশী, কোনো দল বা কোনো জাতিকে আয়াতে বর্ণিত প্রতিমাপূজারি বলে দাগিয়ে দেওয়ার অধিকার এটি কাউকে দেয় না। ইবরাহীম (আঃ)-কে যারা পোড়াতে চেয়েছিল, তাদের সঙ্গে যে আচরণ প্রাপ্য ছিল, সে আচরণ এদের সঙ্গে করার অধিকারও দেয় না। হুঁশিয়ারিটা নিজের দিকে: দলে থাকার খাতিরে আমি এতদিন কিসের সামনে মাথা নুইয়েছি? আজ রাতেই সেই দিন এলে আমি কাকে অস্বীকার করতাম, কিংবা কে আমাকে অস্বীকার করত? যে সত্যকে বাইরের দিকে অভিযোগ বানিয়ে ছোড়া হয়, তার গোড়াতেই ভুল বোঝা হয়েছে।"
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
            "bn": "ইবরাহীম (আঃ) যে রোগ ধরিয়ে দিয়েছিলেন, তা তাঁর প্রতিমাগুলোর চেয়ে দীর্ঘজীবী। পাথরের উপাস্যরা আর নেই, কিন্তু ওগুলো যে কাজ করত, তা আজও বেঁচে আছে এমন প্রতিটি বাঁধনে, যার ভিত আল্লাহ ছাড়া অন্য কিছু। যে দল টিকে আছে শুধু একই শত্রুর বিরুদ্ধে জোট বেঁধে, যে বন্ধুত্ব পাকা হয়েছে একসঙ্গে করা গুনাহে, কর্মস্থলের যে আনুগত্য আপনাকে মিথ্যা বলতে বলে, যে ভিড়ে ঢোকার শর্ত হলো চোখ ফিরিয়ে থাকা: এর প্রতিটিকেই হুবহু ভালবাসার মতো মনে হতে পারে, আর প্রতিটির জন্যই অপেক্ষা করছে সেই একই উল্টো পরিণতি। সদস্যরা আজ একে অপরকে উষ্ণতা দেয়; উষ্ণতা ফুরোলে সেদিন একে অপরকে দোষারোপ করবে।"
          },
          {
            "en": "The verse hands the reader a single test to run on every loyalty: take Allah out of it, and see whether it still has a floor to stand on. What survives that removal is the friendship of the God-fearing, which the Day turns into shade rather than fire. What collapses was only ever a membership, warm while the dues were paid and worthless when the accounts come due. Ibrahim (AS) offered his people that test while the flames were still cooling. It is a kindness, not a threat, to run it on myself before the Day runs it for me.",
            "bn": "আয়াতটি পাঠকের হাতে একটাই পরীক্ষা তুলে দেয়, যা প্রতিটি আনুগত্যের উপর চালানো যায়: এর ভেতর থেকে আল্লাহকে সরিয়ে নিন, তারপর দেখুন, এর দাঁড়ানোর মতো মাটি আর থাকে কি না। আল্লাহকে সরানোর পরও যা টিকে থাকে, তা মুত্তাকীদের বন্ধুত্ব; সেই দিন একে আগুন নয়, ছায়া বানিয়ে দেয়। যা ভেঙে পড়ে, তা কখনো সদস্যপদের বেশি কিছু ছিল না: চাঁদা দেওয়া পর্যন্ত উষ্ণ, আর হিসাব চুকানোর দিনে মূল্যহীন। আগুন তখনো পুরো ঠান্ডা হয়নি, তখনই ইবরাহীম (আঃ) তাঁর কওমের সামনে এই পরীক্ষা রেখেছিলেন। সেই দিন আমাকে এ পরীক্ষায় ফেলার আগেই নিজের উপর পরীক্ষাটা চালিয়ে নেওয়া হুমকি নয়, দয়া।"
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
            "bn": "ওয়া লাম্মা জাআত রুসুলুনা ইবরাহীমা বিল-বুশরা: আর যখন আমার দূতগণ সুসংবাদ নিয়ে ইবরাহীম (আঃ)-এর কাছে এলেন। এখানে রুসুল মানে নবীগণ নয়। তাবারী এর অর্থ করেন আল্লাহর ফেরেশতা, আর সাফ জানিয়ে দেন, আল্লাহর ফেরেশতারাই ইবরাহীমকে এ কথাগুলো বলেছিলেন। ইবন কাসীরও দৃশ্যটি একইভাবে শুরু করেন: লূত (আঃ) যখন তাঁর কওমের বিরুদ্ধে রবের কাছে সাহায্য চাইলেন, আল্লাহ তাঁর জবাবে ফেরেশতা পাঠালেন। অর্থাৎ এ আয়াত আসলে একটি জবাব। আবেদনটা এসেছিল এক আয়াত আগে, আর জবাব ততক্ষণে রওনা হয়ে গেছে।"
          },
          {
            "en": "But the reply takes a detour. Lūṭ (AS) had prayed in his own town, among his own people, yet the angels do not go to him first. Al-Qurtubi notes that they came to Ibrāhīm (AS) at the outset, bearers of good news, before they ever reached Lūṭ. As-Sa'di says the same: Allah sent them to destroy the wrongdoers, and on the way they passed by Ibrāhīm and gave him glad tidings. The deliverance of one prophet begins as a visit to another, and the town that prayed for rescue is not even the first address on the journey.",
            "bn": "তবে জবাবটা একটু ঘুরপথে আসে। লূত (আঃ) দু'আ করেছিলেন নিজের শহরে, নিজের লোকদের মাঝে, অথচ ফেরেশতারা আগে তাঁর কাছে যান না। কুরতুবী লক্ষ করেন, তাঁরা প্রথমে এলেন ইবরাহীম (আঃ)-এর কাছে, সুসংবাদ নিয়ে, লূতের কাছে পৌঁছানোর আগেই। সা'দীও একই কথা বলেন: আল্লাহ তাঁদের পাঠিয়েছিলেন জালিমদের ধ্বংস করতে, আর পথে তাঁরা ইবরাহীমের কাছে থামলেন, তাঁকে সুসংবাদ দিলেন। এক নবীর মুক্তি শুরু হয় আরেক নবীর ঘরে পা রেখে। যে জনপদ উদ্ধারের জন্য দু'আ করেছিল, সফরের প্রথম ঠিকানাও সে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "News of a Son",
          "bn": "পুত্রের খবর"
        },
        "p": [
          {
            "en": "The bushrā, the good tidings, has a definite content, and the commentators are strikingly agreed on it. At-Tabari glosses it as glad tidings from Allah of Isaac, and beyond Isaac, Jacob. The brief Muyassar carries the identical phrase: of Isaac, and after Isaac his son Jacob. Al-Baghawi reads it as Isaac and Jacob together, and as-Sa'di writes that they gave him glad tidings of Isaac, and beyond Isaac, Jacob. Four separate commentaries, one reading: the news is a son, and in the same breath a grandson after him.",
            "bn": "বুশরা, অর্থাৎ সুসংবাদটি ছিল নির্দিষ্ট একটি খবর, আর সেটা কী, তা নিয়ে তাফসীরকারেরা আশ্চর্যরকম একমত। তাবারীর ব্যাখ্যায় এটি আল্লাহর পক্ষ থেকে ইসহাক্বের সুসংবাদ, আর ইসহাক্বের পরে ইয়া‘কুবের। সংক্ষিপ্ত তাফসীর মুয়াসসারেও হুবহু একই কথা: ইসহাক্বের, আর ইসহাক্বের পরে তাঁর ছেলে ইয়া‘কুবের। বাগাভী দুজনকে একসঙ্গে ধরেন, ইসহাক্ব ও ইয়া‘কুব। আর সা'দী লেখেন, তাঁরা তাঁকে ইসহাক্বের সুসংবাদ দিলেন, আর ইসহাক্বের পরে ইয়া‘কুবের। চারটি আলাদা তাফসীর, ব্যাখ্যা একটাই: খবরটা এক পুত্রের, আর একই নিঃশ্বাসে তার পরের এক নাতির।"
          },
          {
            "en": "Ibn Kathir keeps the same substance while telling it as a scene. The angels, he says, began to calm Ibrāhīm (AS) and gave him the news of a righteous son to be born by his wife Sarah, who was present and was astonished at the word. Notice how far the promise runs. It does not stop at the child. The phrase beyond Isaac, Jacob names a second generation not yet conceived, so the tidings overrun the son and reach the grandson, and a line of prophets is laid down in a single sentence at the door of a tent.",
            "bn": "ইবন কাসীর একই কথা রাখেন, তবে বলেন একটা দৃশ্যের মতো করে। তাঁর বর্ণনায় ফেরেশতারা ইবরাহীম (আঃ)-কে আশ্বস্ত করতে লাগলেন, আর সুসংবাদ দিলেন যে তাঁর স্ত্রী সারার গর্ভে এক নেক সন্তান জন্ম নেবে। সারা সেখানে উপস্থিত ছিলেন, আর এ কথা শুনে অবাক হয়েছিলেন। খেয়াল করুন, ওয়াদাটা কত দূর গড়ায়। সন্তানেই থেমে থাকে না। 'ইসহাক্বের পরে ইয়া‘কুব' কথাটা এমন এক প্রজন্মের নাম নেয়, যে তখনো গর্ভেই আসেনি। সুসংবাদ পুত্রকে পেরিয়ে নাতি পর্যন্ত পৌঁছে যায়। এক তাঁবুর দরজায়, একটি বাক্যেই, নবীদের একটি ধারার ভিত গাঁথা হয়ে যায়।"
          },
          {
            "en": "What this meant to the man who heard it is not spelled out here, but the Qur'an fills the silence elsewhere. Ibn Kathir himself points the reader to Sūrah Hūd and Sūrah al-Ḥijr, where the same visit is told at length: the guests who would not eat, Sarah's laugh, her wonder that a barren old woman and an aged husband could be promised a child. Our verse compresses all of that into a single word. It gives the fact of the tidings and leaves the fuller account, in 11:69 to 11:76 and 51:24 to 51:30, to carry the feeling.",
            "bn": "যে মানুষটি এ খবর শুনলেন, তাঁর কাছে এর অর্থ কী ছিল, এখানে তা খুলে বলা নেই। কিন্তু সেই নীরবতা কুরআন অন্য জায়গায় পূরণ করে দেয়। ইবন কাসীর নিজেই পাঠককে সূরা হূদ ও সূরা হিজরে যেতে বলেন, যেখানে একই সাক্ষাতের বিস্তারিত বিবরণ আছে: মেহমানদের না খাওয়া, সারার হেসে ওঠা, আর বন্ধ্যা বৃদ্ধা ও বুড়ো স্বামীর ঘরে সন্তানের ওয়াদা শুনে তাঁর বিস্ময়। আমাদের আয়াত এই সবকিছু একটি শব্দে গুটিয়ে এনেছে। এটি কেবল সুসংবাদ আসার খবরটুকু দেয়। অনুভূতির ভার ছেড়ে দেয় পূর্ণ বিবরণের উপর, ১১:৬৯ থেকে ১১:৭৬ এবং ৫১:২৪ থেকে ৫১:৩০ আয়াতে।"
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
            "bn": "ফেরেশতারা কীভাবে এসেছিলেন, ইবন কাসীর তার বিবরণ দেন। তাঁরা ইবরাহীম (আঃ)-এর কাছে এলেন মেহমানের বেশে, আর মেজবান হিসেবে যা আনা উচিত, তিনি তা-ই তাঁদের সামনে আনলেন; ইংরেজি সংক্ষিপ্ত তাফসীরের ভাষায়, যথাযথভাবে তাঁদের মেহমানদারি করলেন। তারপর আসে সেই খুঁটিনাটি, যা দৃশ্যটা ঘুরিয়ে দেয়: তিনি যখন দেখলেন খাবারে তাঁদের কোনো আগ্রহ নেই, তখন তিনি অস্বস্তিতে পড়লেন, মনে মনে ভয় পেলেন। যে মেহমান খান না, তিনি খেতে আসেননি। মুখে কিছু বলার আগেই বৃদ্ধ মানুষটির মন অস্বাভাবিকতাটা টের পেয়ে যায়।"
          },
          {
            "en": "The fear does not last. They started to calm him down, says Ibn Kathir, and gave him the glad tidings. So the hospitality and the unease are not stray detail; they frame the good news. The man who offered a meal to strangers who could not eat is the man rewarded with a son he could not have. His welcome asked nothing back, and the answer that came was larger than any guest could carry. The scene quietly ties a habit of generosity to the gift that follows, without ever saying so in a sentence.",
            "bn": "ভয়টা বেশিক্ষণ থাকে না। ইবন কাসীর বলেন, তাঁরা তাঁকে আশ্বস্ত করতে লাগলেন আর সুসংবাদ দিলেন। তাই মেহমানদারি আর অস্বস্তি এলোমেলো খুঁটিনাটি নয়; এগুলো সুসংবাদটাকে ঘিরে আছে। যিনি অচেনা মেহমানদের সামনে খাবার রেখেছিলেন, অথচ তাঁরা খেতেই পারতেন না, তাঁকেই পুরস্কার দেওয়া হলো এমন এক পুত্র, যাকে পাওয়ার কথা তাঁর ছিল না। তাঁর আপ্যায়ন বিনিময়ে কিছু চায়নি, অথচ জবাবে যা এলো, কোনো মেহমান যত বড় উপহারই আনুক, তার চেয়ে বড়। দৃশ্যটি এক বাক্যেও মুখ ফুটে না বলে নীরবে দানশীলতার অভ্যাসকে পরের উপহারের সঙ্গে জুড়ে দেয়।"
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
            "bn": "এরপর সেই একই দূতেরা সুসংবাদ ছেড়ে সতর্কবাণীতে যান। তাঁরা বললেন, আমরা এই জনপদের বাসিন্দাদের ধ্বংস করব। তাবারী জায়গার নাম বলেছেন: সাদূম নগরী, অর্থাৎ লূত (আঃ)-এর কওমের জনপদ। বাগাভী ও মুয়াসসারও একই নাম বলেন। 'এই জনপদ' শব্দটা খেয়াল করার মতো। যেন ইবরাহীমের তাঁবু থেকে প্রান্তরের ওপারে সেই উপত্যকার দিকে আঙুল তুলে দেখানো হচ্ছে, যেখানে লূত থাকতেন। সুসংবাদ আর ধ্বংসের ফয়সালা একই মেহমানেরা একই নিঃশ্বাসে বলেন, মাঝখানে একটুও না থেমে।"
          },
          {
            "en": "This pairing is the heart of the verse. A single errand carries a birth and a burial. The hands that announce Isaac announce the end of a city, and the Qur'an sets the two side by side on purpose, so that neither is read alone. The believer learns here not to meet good news with heedless joy, as though mercy had no edge, nor to meet hard news with despair, as though justice had no warmth. Both came from one Lord, through one set of messengers, on one morning. To receive one and refuse the other is to misread the visit.",
            "bn": "এই জোড়াই আয়াতের প্রাণ। একটিমাত্র সফরে আসে এক জন্মের খবর আর এক কবরের। যে হাত ইসহাক্বের খবর দেয়, সেই হাতই এক নগরীর শেষের খবর দেয়। কুরআন ইচ্ছে করেই দুটোকে পাশাপাশি রেখেছে, যাতে কোনোটাকে আলাদা করে পড়া না হয়। মুমিন এখান থেকে শেখে: সুসংবাদ পেয়ে বেখেয়াল আনন্দে মেতে উঠবে না, যেন রহমতের পাশে কোনো কঠোরতা নেই; আবার কঠিন খবরে হতাশ হয়ে পড়বে না, যেন ইনসাফে কোনো উষ্ণতা নেই। দুটোই এসেছে এক রবের কাছ থেকে, একই দূতদের হাতে, একই সকালে। একটা গ্রহণ করে অন্যটা ফিরিয়ে দেওয়া মানে এই আগমনটাকেই ভুল বোঝা।"
          }
        ]
      },
      {
        "h": {
          "en": "A People Named Wrongdoers",
          "bn": "যাদের নাম রাখা হলো জালিম"
        },
        "p": [
          {
            "en": "The verse does not end on the sentence; it gives the ground for it. Indeed its people have been wrongdoers. At-Tabari explains the word: they were wrongdoers of their own selves, by their disobedience to Allah and their denial of His messenger. The Muyassar says the same in short, that they wronged themselves by disobeying Allah. The destruction is not a storm without a cause. It rests on a named charge, and the charge is first of all a wrong the people did to themselves before it was ever a wrong done to Lūṭ (AS) or to any traveler.",
            "bn": "আয়াত শুধু ফয়সালায় থামে না, তার কারণও জানিয়ে দেয়। নিশ্চয়ই এর অধিবাসীরা ছিল জালিম। তাবারী শব্দটার ব্যাখ্যা করেন: তারা নিজেদের উপরই যুলুম করেছিল, আল্লাহর নাফরমানি করে আর তাঁর রাসূলকে মিথ্যা বলে অস্বীকার করে। মুয়াসসার সংক্ষেপে একই কথা বলে, তারা আল্লাহর নাফরমানি করে নিজেদের উপর যুলুম করেছিল। এ ধ্বংস কারণহীন কোনো ঝড় নয়। এর ভিত্তি একটি নির্দিষ্ট অভিযোগ, আর সে অভিযোগ সবার আগে তাদের নিজেদের প্রতি করা যুলুম, লূত (আঃ) কিংবা কোনো পথিকের উপর যুলুমের অনেক আগে।"
          },
          {
            "en": "What the wrong was, the sūrah has already said with restraint, and we keep to its words. A few verses earlier Lūṭ (AS) charges his people with a shameless act no nation before them had committed, with waylaying travelers on the road, and with open evil in their gatherings. He then calls them, in his prayer, a corrupting people. The verb here is kānū, they had been wrongdoers: not a single slip but a settled way of life, defended and repeated. A people are not undone by a fault they are fighting, but by one they have made their custom and will not leave.",
            "bn": "যুলুমটা কী ছিল, সূরা তা আগেই সংযত ভাষায় বলে দিয়েছে; আমরাও সেই ভাষার বাইরে যাব না। কয়েক আয়াত আগে লূত (আঃ) তাঁর কওমের বিরুদ্ধে অভিযোগ আনেন: তারা এমন এক নির্লজ্জ কাজ করে, যা তাদের আগে কোনো জাতি করেনি; তারা পথে পথিকদের উপর রাহাজানি করে; আর নিজেদের মজলিসে প্রকাশ্যে মন্দ কাজ করে। পরে দু'আয় তিনি তাদের বলেন ফাসাদ সৃষ্টিকারী কওম। এখানে ক্রিয়াটি কানূ, অর্থাৎ তারা জালিম হয়েই ছিল। এটা একবারের পদস্খলন নয়, বরং স্থায়ী এক জীবনধারা, যা তারা আগলে রেখেছে আর বারবার করেছে। যে দোষের বিরুদ্ধে মানুষ লড়ছে, তাতে কোনো জাতি ধ্বংস হয় না; ধ্বংস হয় সেই দোষে, যাকে তারা রীতি বানিয়ে নিয়েছে আর ছাড়বে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Decree, Not a License",
          "bn": "ফয়সালা, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This must be said plainly. The verse reports a decree that Allah passed and carried out on one named people, the people of Sodom, in the distant past. It is an account of what happened, not a command placed in any human hand. It gives no one today a licence to harm, to exclude, to curse, or to punish any living person or community, whatever that person is accused of. The angels act on the direct order of Allah, who alone knows hearts and alone may take life in judgment. No reader inherits their errand.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি এমন এক ফয়সালার খবর দেয়, যা আল্লাহ বহু আগে একটি নির্দিষ্ট জাতির উপর জারি করেছিলেন এবং কার্যকরও করেছিলেন: সাদূমের অধিবাসীদের উপর। এটা যা ঘটেছিল তার বিবরণ, কোনো মানুষের হাতে তুলে দেওয়া হুকুম নয়। আজ কোনো জীবিত মানুষ বা জনগোষ্ঠীর ক্ষতি করা, তাদের একঘরে করা, অভিশাপ দেওয়া বা শাস্তি দেওয়ার অনুমতি এটি কাউকে দেয় না, তার বিরুদ্ধে অভিযোগ যা-ই হোক। ফেরেশতারা কাজ করেছিলেন সরাসরি আল্লাহর হুকুমে। অন্তরের খবর কেবল তিনিই জানেন, আর বিচার করে প্রাণ নেওয়ার অধিকারও কেবল তাঁর। ফেরেশতাদের সেই দায়িত্ব কোনো পাঠকের উপর বর্তায় না।"
          },
          {
            "en": "The restraint runs to the sin itself. The commentaries name it only as far as the Qur'an names it, and they do not linger over detail; we follow them in that. What the verse holds up for reflection is not a particular group to be despised, but the gravity of a wrong that a whole people made public, defended, and refused to leave. Who is a wrongdoer in the sight of Allah is His knowledge, settled on the Day of Judgment, not ours to assign. The verse turns the reader inward, to the custom he will not name in himself, not outward against a neighbor.",
            "bn": "সংযমটা গুনাহের বেলাতেও। কুরআন যতটুকু নাম নিয়েছে, তাফসীরকারেরাও ততটুকুই নেন, খুঁটিনাটিতে যান না; আমরাও তাঁদের পথে চলি। আয়াত ভাবার জন্য যা সামনে রাখে, তা ঘৃণা করার মতো কোনো বিশেষ দল নয়। বরং এমন এক অন্যায়ের ভয়াবহতা, যা গোটা একটা জাতি প্রকাশ্যে করেছে, আগলে রেখেছে, আর ছাড়তে রাজি হয়নি। আল্লাহর চোখে কে জালিম, সেটা তাঁর জ্ঞানের বিষয়, যা কিয়ামতের দিন চূড়ান্ত হবে; সে রায় দেওয়া আমাদের কাজ নয়। আয়াত পাঠককে নিজের দিকে ফেরায়, নিজের ভেতরের সেই অভ্যাসের দিকে, যার নাম সে মুখে আনতে চায় না; প্রতিবেশীর দিকে আঙুল তুলতে নয়।"
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
            "bn": "বর্ণনা নিয়ে একটা কথা বলে রাখি, কারণ সৎভাবে জানানোটা জরুরি। ইবরাহীমের দরজায় এই সুসংবাদ নিয়ে কোনো সহীহ হাদিস বর্ণিত নেই। দৃশ্যটা আমাদের কাছে পৌঁছেছে তাফসীরকারদের মাধ্যমে, আর কুরআনের অন্য জায়গায় একই ঘটনার পুনর্বর্ণনা থেকে। এই ফাঁক দুর্বল কোনো কিসসা দিয়ে ভরানোর জিনিস নয়। যে আয়াতে সহীহ হাদিস নেই, সেখানে সঠিক পথ হলো সেটা খোলাখুলি বলা, আর যা প্রমাণিত তার উপর ভর করা। এখানে তা হলো সূরা হূদ ও সূরা যারিয়াতের সমান্তরাল বিবরণ, আর উপরে তুলে ধরা তাবারী, ইবন কাসীর, বাগাভী ও অন্যদের ব্যাখ্যা।"
          },
          {
            "en": "One report should be named only to be placed correctly. Ma'arif al-Qur'an, commenting on the verses just before this one, mentions a narration attributed to Umm Hāni (RA) about the townspeople pelting and mocking travelers in their gatherings. That belongs to the people's conduct in 29:29, not to the announcement in our verse, and it is offered there without a grading I could confirm, so I do not build on it. The verse itself needs no supplement. Its tidings and its warning stand on the plain words of the Book.",
            "bn": "একটি বর্ণনার কথা তুলছি শুধু তাকে ঠিক জায়গায় রাখার জন্য। মাআরিফুল কুরআন এর ঠিক আগের আয়াতগুলোর আলোচনায় উম্মে হানী (রাঃ)-এর সূত্রে একটি বর্ণনা উল্লেখ করেছে: জনপদের লোকেরা নিজেদের মজলিসে পথিকদের দিকে পাথর ছুড়ত আর তাদের নিয়ে ঠাট্টা করত। এটা ২৯:২৯ আয়াতে বলা তাদের আচরণের সঙ্গে সম্পর্কিত, আমাদের আয়াতের ঘোষণার সঙ্গে নয়। তা ছাড়া সেখানে বর্ণনাটির এমন কোনো মান উল্লেখ নেই, যা আমি যাচাই করতে পেরেছি; তাই এর উপর আমি কিছু দাঁড় করাই না। আয়াতটির বাড়তি কিছুর দরকার নেই। এর সুসংবাদ আর সতর্কবাণী কিতাবের সাফ কথার উপরই দাঁড়িয়ে আছে।"
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
            "bn": "আয়াতটি আরও একটা জিনিস দেখাতে শুরু করে, পরের আয়াতগুলো তা শেষ করে। দূতেরা যখন ধ্বংসের কথা বললেন, ইবরাহীম (আঃ) স্বস্তির নিঃশ্বাস ফেললেন না। ইবন কাসীর বলেন, তিনি সেই কওমের পক্ষে কথা বলতে লাগলেন, এই আশায় যে হয়তো তাদের সময় দেওয়া হবে, হয়তো আল্লাহ তাদের হিদায়াত দেবেন। কুরআন অন্যত্র তাঁকে বলেছে সহনশীল, কোমলহৃদয়, বারবার রবের দিকে ফিরে আসা মানুষ; তাবারী এখানে ঠিক সেই বর্ণনাটাই উদ্ধৃত করেন। ধ্বংস হতে যাওয়া এক নগরীর খবর শুনে তাঁর প্রথম সাড়া তৃপ্তি ছিল না, ছিল সুপারিশ। এরপর তিনি কী করলেন, তা পরের আয়াতগুলোর বিষয়। এখানে দেখার বিষয় তাঁর স্বভাবের এই প্রথম টান।"
          },
          {
            "en": "So the believer stands where Ibrāhīm (AS) stood. One morning brought him a son he had despaired of and the sentence of a city he could see from his tent, and he met the gift with thanks and the sentence with a plea for mercy on the condemned. He did not read the two as two Gods, nor as two moods of one God, but as one wisdom reaching him through one errand. When my own day carries both a blessing and a hard decree, the verse asks me to hold them as he held them: grateful, sobered, and still turned toward the One who sent both.",
            "bn": "তাই মুমিনের দাঁড়ানোর জায়গা সেখানেই, যেখানে ইবরাহীম (আঃ) দাঁড়িয়েছিলেন। এক সকালে তাঁর কাছে এলো এমন এক পুত্রের খবর, যার আশা তিনি ছেড়েই দিয়েছিলেন, আর তাঁবু থেকে দেখা যায় এমন এক নগরীর ধ্বংসের ফয়সালা। দানটা তিনি নিলেন শুকরিয়ার সঙ্গে, আর ফয়সালা শুনে দণ্ডিতদের জন্য রহমতের আবেদন করলেন। তিনি দুটোকে দুই ইলাহের কাজ ভাবেননি, এক ইলাহের দুই মেজাজও ভাবেননি। ভেবেছেন এক হিকমত, যা একই সফরে তাঁর কাছে পৌঁছেছে। আমার নিজের কোনো দিন যখন একসঙ্গে নিয়ামত আর কঠিন ফয়সালা নিয়ে আসে, আয়াত চায়, আমিও দুটোকে তাঁর মতো করে গ্রহণ করি: কৃতজ্ঞ থেকে, সংযত থেকে, আর যিনি দুটোই পাঠিয়েছেন, তাঁর দিকেই মুখ ফিরিয়ে রেখে।"
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
            "bn": "আয়াতটি না থেমে পরপর তিনটি নাম উচ্চারণ করে: কারূন, ফেরাউন, হামান। ঠিক আগের আয়াতেই এসেছে ‘আদ ও সামূদের কথা। ইবন কাসীর নামগুলো চিনিয়ে দেন। কারূন ছিল বিপুল ধন আর ভারী ভারী ধনভাণ্ডারের চাবির মালিক। ফেরাউন ছিল মূসা (আঃ)-এর যুগে মিসরের বাদশাহ, আর হামান ছিল তার মন্ত্রী। শেষ দুজন সম্পর্কে ইবন কাসীর বলেন, তারা ছিল কিবতী, আল্লাহ আর তাঁর রাসূলকে অস্বীকারকারী। আগের সূরাগুলোতে যাদের কথা বিস্তারিত এসেছে, এখানে কুরআন কেবল তাদের নামটুকু তুলে ধরে।"
          },
          {
            "en": "What makes the line arresting is the company it keeps. The verse has just pointed to ʿAd and Thamud, whose ruined dwellings the first listeners could still see for themselves. Now it moves from two destroyed nations to three destroyed men and holds them in one frame. Ma'arif al-Qur'an notes that the stories of Qārūn, Hāmān, and Pharaoh have just passed, in detail, in Surah al-Qasas. Here they return stripped to names, so the eye falls not on each man's separate tale but on what the three of them share.",
            "bn": "চমকটা লাগে নামগুলো কাদের পাশে বসেছে তা দেখে। আয়াত এইমাত্র ‘আদ আর সামূদের দিকে ইশারা করেছে, যাদের ধ্বংস হওয়া ঘরবাড়ি প্রথম শ্রোতারা তখনো নিজ চোখে দেখতে পেত। এবার ধ্বংস হওয়া দুই জাতি থেকে আয়াত চলে আসে ধ্বংস হওয়া তিন ব্যক্তিতে, আর সবাইকে একই ছবিতে রাখে। মাআরিফুল কুরআন মনে করিয়ে দেয়, কারূন, হামান আর ফেরাউনের কাহিনি একটু আগেই সূরা কাসাসে বিস্তারিত বলা হয়ে গেছে। এখানে তারা ফিরে আসে শুধু নাম হয়ে। ফলে চোখ পড়ে না প্রত্যেকের আলাদা কাহিনিতে; চোখ পড়ে তিনজনের মধ্যে যা এক, তার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sentence Hangs",
          "bn": "বাক্যটি কোথায় ঝুলে আছে"
        },
        "p": [
          {
            "en": "Grammatically the three names float, for no verb is attached to them within the verse itself. The commentators resolve this in more than one way, and al-Qurtubi lays the options out. Al-Baghawi and the Muyassar supply an elided verb: and We destroyed Qārūn and Pharaoh and Hāmān, reading the names as the objects of a destruction the passage keeps repeating. On this reading the verse is simply one more entry in a lengthening roll-call of ruin, the three men added to the nations already gone.",
            "bn": "ব্যাকরণের দিক থেকে তিনটি নাম যেন ভেসে আছে, কারণ আয়াতের ভেতরে এদের সঙ্গে কোনো ক্রিয়া জোড়া নেই। তাফসীরকারেরা এর মীমাংসা করেছেন একাধিকভাবে, আর কুরতুবী বিকল্পগুলো সাজিয়ে দেন। বাগাভী ও মুয়াসসার একটি উহ্য ক্রিয়া ধরে নেন: ‘আর আমি ধ্বংস করলাম কারূন, ফেরাউন ও হামানকে।’ এভাবে পড়লে নামগুলো সেই ধ্বংসের কর্ম, যার কথা পুরো অংশটি বারবার বলে চলেছে। তখন আয়াতটি ধ্বংসের ক্রমশ লম্বা হতে থাকা তালিকায় আরেকটি সংযোজন: আগে শেষ হয়ে যাওয়া জাতিগুলোর সঙ্গে যোগ হলো তিনজন মানুষ।"
          },
          {
            "en": "Al-Qurtubi reports al-Kisa'i giving two further possibilities. The names may be carried on ʿAd and Thamud in the previous verse, joining the same list of the destroyed, or carried on the clause that Satan turned them from the path, so that he turned Qārūn and Pharaoh and Hāmān aside as well. The difference is one of syntax, not of outcome; every reading ends with the three men gone. I keep the disagreement open, as the commentators themselves left it, and take from it only that the sentence was built to attach them to ruin.",
            "bn": "কুরতুবী কিসাঈ থেকে আরও দুটি সম্ভাবনার কথা আনেন। নামগুলো আগের আয়াতের ‘আদ ও সামূদের সঙ্গে যুক্ত হতে পারে, একই ধ্বংসের তালিকায় মিশে। অথবা শয়তান যে তাদের পথ থেকে ফিরিয়ে দিয়েছিল সেই বাক্যের সঙ্গে যুক্ত হতে পারে, অর্থাৎ কারূন, ফেরাউন ও হামানকেও সে পথ থেকে সরিয়ে দিয়েছিল। পার্থক্যটা বাক্যগঠনের, পরিণতির নয়। প্রতিটি পাঠই শেষ হয় তিনজনের ধ্বংসে। তাফসীরকারেরা যেভাবে মতভেদটা খোলা রেখেছেন আমিও সেভাবেই রাখছি, আর এটুকুই নিই যে বাক্যটা তাদের ধ্বংসের সঙ্গে বেঁধে রাখার জন্যই গড়া।"
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
            "bn": "তিনজনকে পাশাপাশি রাখলে তিন রকম ক্ষমতা চোখে পড়ে। ইবন কাসীরের পরিচয় অনুযায়ী কারূন ধনকুবের, ফেরাউন সিংহাসনে বসা বাদশাহ, আর হামান তার মন্ত্রী, যে তার হয়ে রাষ্ট্র চালাত। টাকা, রাজত্ব আর প্রশাসন: পুঁজি, মুকুট, আর সেই আমলা, যে মুকুটের হুকুম চালু করে। কুরআন এর কোনো একটাকে আলাদা করে বিপজ্জনক বলে না। তিনটারই নাম নেয় এক নিঃশ্বাসে, আর কাউকেই অভিযোগ থেকে রেহাই দেয় না।"
          },
          {
            "en": "And it gives them one verb between them: fa-stakbaru, they grew arrogant. Three different holds on the world, and one swelling. The wealthy man, the ruler, and the enabling official are not three sins but three doors into the same sin. Each had something the others lacked, and each let that thing make him large. The verse's economy is the whole point: it refuses to let the reader believe arrogance belongs only to kings, or only to the rich, or only to those who sign the orders. It belongs to whoever is made big by what he holds.",
            "bn": "আর তিনজনের মাঝে বসিয়ে দেয় একটিমাত্র ক্রিয়া: ফাসতাকবারূ, তারা অহংকার করল। দুনিয়ার উপর তিন রকম দখল, অথচ ফুলে ওঠা একটাই। ধনী মানুষ, শাসক আর তাদের সহযোগী কর্মকর্তা তিনটি আলাদা গুনাহ নয়, একই গুনাহে ঢোকার তিনটি দরজা। একজনের কাছে যা ছিল অন্যের তা ছিল না, আর প্রত্যেকেই সেটাকে নিজের বড়ত্বের কারণ বানিয়ে ফেলল। আয়াতের এই সংক্ষেপই আসল কথা। পাঠক যেন ভাবতে না পারে অহংকার কেবল বাদশাহর, কিংবা কেবল ধনীর, কিংবা কেবল যে হুকুমে সই করে তার। যা হাতে আছে তা দিয়ে যে বড় হয়ে ওঠে, অহংকার তারই।"
          },
          {
            "en": "There is a further note worth keeping. At-Tabari reads Moses came to all of them with the clear signs, jamiʿahum, to all three. One messenger, one set of proofs, reached the financier, the king, and the minister alike. The clear evidence was not withheld from any of them, so none could later plead that the truth had never arrived. What divided them from Moses was not information; each of them had been given it. It was what they then did with the evidence that set them against the man who brought it.",
            "bn": "আরও একটি কথা মনে রাখার মতো। তাবারী পড়েন, মূসা তাদের সবার কাছে সুস্পষ্ট নিদর্শন নিয়ে এসেছিলেন, জামীআহুম, তিনজনের কাছেই। একজন রাসূল, একই প্রমাণ, পৌঁছেছিল ধনী, বাদশাহ আর মন্ত্রী সবার কাছে সমানভাবে। স্পষ্ট দলিল কারও কাছ থেকে আটকে রাখা হয়নি, তাই কেউ পরে এ অজুহাত দিতে পারত না যে সত্য তার কাছে পৌঁছায়নি। মূসা (আঃ)-এর সঙ্গে তাদের দূরত্ব জ্ঞানের অভাবে তৈরি হয়নি, প্রত্যেকেই তা পেয়েছিল। সেই প্রমাণ নিয়ে তারা যা করল, তা-ই তাদের দাঁড় করিয়ে দিল সেই মানুষটার বিপক্ষে যিনি তা এনেছিলেন।"
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
            "bn": "তাবারী অহংকারটাকে ঠিকঠাক চিনিয়ে দেন: নিদর্শনগুলো মেনে নিতে আর মূসাকে অনুসরণ করতে তাদের অহংকারে বাধল। এখানে ইসতিকবার কোনো মেজাজ নয়, এ এক প্রত্যাখ্যান: এমন এক সত্যকে, যা স্পষ্ট করে দেখিয়ে দেওয়া হয়েছিল। শব্দটির মূল আর কিবর শব্দের মূল এক; কিবর মানে বড়ত্ব। অহংকারী হওয়া মানে, যা করতে বলা হচ্ছে, নিজেকে তার চেয়ে বড় ভাবা। অথচ তাদের যা মানতে বলা হচ্ছিল, তা ছিল এমন প্রমাণ, যার জবাব তাদের কাছে আসলে ছিল না। দলিল অটল ছিল। বাকি ছিল শুধু একটা পথ: এত বড় সেজে থাকা, যেন সেদিকে তাকানোই যায় না।"
          },
          {
            "en": "As-Sa'di adds a second face to it. Their istikbar ran in two directions: against the truth, which they rejected, and over the servants of Allah, whom they humiliated. Arrogance before God and contempt for people travel together in his reading. The man who is too big to bow is also too big to see those beneath him as his equals; the two refusals are one posture turned in two directions. As-Sa'di closes grimly: when the punishment came down, those who had thought themselves beyond reach found no way out of it at all.",
            "bn": "সাদী এর আরেকটা দিক দেখান। তাদের ইসতিকবার চলেছিল দুই দিকে: হকের বিরুদ্ধে, যা তারা প্রত্যাখ্যান করেছিল; আর আল্লাহর বান্দাদের উপর, যাদের তারা অপমান করত। সাদীর ব্যাখ্যায় আল্লাহর সামনে অহংকার আর মানুষের প্রতি তাচ্ছিল্য একসঙ্গে চলে। যে নিজেকে মাথা নোয়ানোর চেয়ে বড় ভাবে, সে নিজের নিচের মানুষদেরও নিজের সমান বলে দেখতে পারে না। দুই অস্বীকার আসলে একই ভঙ্গি, শুধু দুই দিকে ফেরানো। সাদী শেষ করেন কঠিন কথায়: শাস্তি যখন নেমে এলো, যারা নিজেদের ধরাছোঁয়ার বাইরে ভেবেছিল, তারা বের হওয়ার কোনো পথই পেল না।"
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
            "bn": "এর ঠিক আগের আয়াত এমন মানুষদের বলে মুসতাবসিরীন, অর্থাৎ দৃষ্টিসম্পন্ন। মাআরিফুল কুরআন শব্দটির ভেতরের খোঁচাটা ধরিয়ে দেয়। সেখানে বলা হয়েছে, এরা বোকা বা পাগল ছিল না; এরা ছিল চালাক, তীক্ষ্ণদৃষ্টির মানুষ, সত্যিকারের বিচারবুদ্ধি ছিল এদের। কিন্তু সেই বুদ্ধি আটকে ছিল কেবল দুনিয়ার বিষয়ে। এরা বাজার বুঝত, দরবার বুঝত, যুদ্ধ বুঝত; অথচ বুঝত না যে এমন এক হিসাবের দিন আসছে, যেদিন ভালো-মন্দ প্রতিটি কাজ ওজন করা হবে, আর অবশেষে পূর্ণ ইনসাফ হবে।"
          },
          {
            "en": "Ma'arif ties this to a later verse, 30:7: they know what is apparent of the worldly life, but of the Hereafter they are heedless. The triad fits the description exactly. Qārūn understood wealth, Pharaoh understood power, Hāmān understood administration, and not one of them understood the single fact that would decide everything. Perception pointed only at the near made them, Ma'arif implies, more culpable rather than less. They had the eyes to see and spent that sight entirely on the wrong horizon, reading the small truths flawlessly and missing the one that mattered.",
            "bn": "মাআরিফ এটাকে পরের এক আয়াতের সঙ্গে মেলায়, ৩০:৭: তারা দুনিয়ার জীবনের বাইরের দিকটাই জানে, আর আখিরাতের ব্যাপারে তারা উদাসীন। তিনজন এই বর্ণনার সঙ্গে হুবহু মিলে যায়। কারূন ধন বুঝত, ফেরাউন ক্ষমতা বুঝত, হামান প্রশাসন বুঝত, অথচ যে একটি সত্য সবকিছুর ফয়সালা করবে তা একজনও বুঝল না। মাআরিফের ইঙ্গিত, কাছের জিনিসে আটকে থাকা এই দৃষ্টি তাদের দায় কমায়নি, বরং বাড়িয়েছে। দেখার চোখ ছিল, অথচ গোটা দৃষ্টিটাই তারা ঢেলে দিল ভুল দিগন্তে। ছোট সত্যগুলো নিখুঁত পড়ে ফেলল, আর যেটা আসল সেটাই ফসকে গেল।"
          }
        ]
      },
      {
        "h": {
          "en": "None Outran the Reckoning",
          "bn": "কেউ হিসাব পেরিয়ে যেতে পারেনি"
        },
        "p": [
          {
            "en": "The verse ends on a strange image: wa-ma kanu sabiqin, they were not outrunners. At-Tabari explains it as outrunning God. They could not get ahead of Him and so slip away; rather, he has Allah say, We were fully able over them. Al-Baghawi reads sabiqin as fa'itin, those who escape, and the Muyassar agrees that they could not elude Us. The racing metaphor fits men who had imagined that their wealth or their power put them permanently out in front of everyone, the reckoning included.",
            "bn": "আয়াত শেষ হয় এক অদ্ভুত ছবিতে: ওয়া মা কানূ সাবিকীন, তারা আগে বেড়ে যেতে পারেনি। তাবারী এর ব্যাখ্যা করেন আল্লাহকে পেছনে ফেলা হিসেবে। তারা তাঁর আগে বেরিয়ে গিয়ে পালাতে পারেনি, বরং তাবারীর ভাষায় আল্লাহ বলছেন, আমি তাদের উপর পুরোপুরি সক্ষম ছিলাম। বাগাভী সাবিকীন পড়েন ফাইতীন অর্থে, অর্থাৎ যারা ফসকে যায়, আর মুয়াসসারও একমত যে তারা আমাকে এড়াতে পারেনি। দৌড়ের উপমাটা মানানসই সেই মানুষদের বেলায়, যারা ভেবেছিল তাদের ধন বা ক্ষমতা তাদের চিরকাল সবার সামনে রেখে দেবে, হিসাব সুদ্ধ।"
          },
          {
            "en": "Al-Qurtubi records a second reading of the word: not outrunning the punishment, but preceding others in disbelief. And he answers it himself, that many disbelieving generations had come before them, so this could not be their distinction either. Whichever way the word is taken, the boast collapses. As-Sa'di puts the end bluntly: far from outrunning Allah or escaping Him, they surrendered and submitted. The men who had grown so large were, at the very last, handed over completely, their size no part of the transaction.",
            "bn": "কুরতুবী শব্দটির আরেকটি ব্যাখ্যাও লিখে রাখেন: শাস্তিকে পেছনে ফেলা নয়, বরং কুফরিতে অন্যদের আগে থাকা। আর তিনি নিজেই এর জবাব দেন: তাদের আগে বহু কাফের প্রজন্ম এসে গেছে, তাই এটাও তাদের বিশেষত্ব হতে পারে না। শব্দটা যেভাবেই নিন, অহংকারের দাবিটা ভেঙে পড়ে। সাদী শেষটা সোজা কথায় বলেন: আল্লাহকে পেছনে ফেলা বা তাঁকে এড়ানো তো দূরের কথা, তারা হার মেনে মাথা নুইয়ে দিল। যারা এত বড় হয়ে উঠেছিল, শেষ মুহূর্তে তাদের পুরোপুরি সঁপে দেওয়া হলো; সেই লেনদেনে তাদের বড়ত্বের কোনো দামই ছিল না।"
          },
          {
            "en": "The next verse spells out how. Ibn Kathir, reading 29:40, distributes the ends: each was seized for his sin, the punishment fitted to the man. Qārūn, who transgressed and paraded, was swallowed by the earth; Pharaoh and Hāmān and their troops were drowned in a single morning, not one of them escaping. Three forms of power, leveled by three different means, on one principle the verse itself states: Allah did not wrong them, but they were wronging themselves. The outrunners were overtaken, each by the measure he had earned.",
            "bn": "পরের আয়াত বলে দেয় কীভাবে। ইবন কাসীর ২৯:৪০ আয়াত পড়ে প্রত্যেকের পরিণতি আলাদা করে দেখান: প্রত্যেককে ধরা হলো তার গুনাহের জন্য, আর শাস্তি হলো মানুষটার মাপে। কারূন সীমা ছাড়িয়ে বুক ফুলিয়ে চলত, তাকে মাটি গিলে নিল। ফেরাউন, হামান আর তাদের সৈন্যদল এক সকালেই ডুবে মরল, একজনও বাঁচল না। তিন রকম ক্ষমতা, তিন ভিন্ন উপায়ে মাটিতে মিশিয়ে দেওয়া হলো, আর নীতি একটাই, যা আয়াত নিজেই বলে: আল্লাহ তাদের উপর যুলম করেননি, তারা নিজেরাই নিজেদের উপর যুলম করছিল। যারা সবার আগে বেরিয়ে যেতে চেয়েছিল, তাদের ধরে ফেলা হলো, প্রত্যেককে তার নিজের কামাই অনুযায়ী।"
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
            "bn": "অহংকার নিয়ে সুন্নাহ একেবারে স্পষ্ট। মুসলিম আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, যার অন্তরে অণু-পরিমাণ অহংকার আছে সে জান্নাতে ঢুকবে না। এক লোক জিজ্ঞেস করল, সুন্দর জামা আর সুন্দর জুতা ভালোবাসাও কি মানুষের বিপক্ষে ধরা হবে। তিনি জবাব দিলেন, আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। তারপর গুনাহটার সংজ্ঞা দিলেন: অহংকার হলো হককে তুচ্ছ করা আর মানুষকে হেয় করা। বর্ণনাটি সহীহ মুসলিমে আছে, আর এর মান মুসলিমের সংকলনের সহীহ মানেরই।"
          },
          {
            "en": "The definition lands on the triad with uncanny precision. Disdaining the truth is exactly at-Tabari's reading, the pride too great to affirm the signs; and contempt for the people is as-Sa'di's second face, the humiliation of Allah's servants. This hadith is not reported as a comment on this verse; it is a general teaching on kibr. But it names the two halves of the sin the verse condemns, and it fixes the weight at which that sin turns fatal: a single mustard seed, held quietly in the heart.",
            "bn": "সংজ্ঞাটা তিনজনের উপর আশ্চর্যরকম নিখুঁতভাবে খাটে। হককে তুচ্ছ করা হুবহু তাবারীর ব্যাখ্যা: নিদর্শন মেনে নিতে না দেওয়া অহংকার। আর মানুষকে হেয় করা সাদীর সেই দ্বিতীয় দিক: আল্লাহর বান্দাদের অপমান করা। এই হাদিসটি এ আয়াতের ব্যাখ্যা হিসেবে বর্ণিত হয়নি; এটা কিবর নিয়ে সাধারণ শিক্ষা। তবু আয়াত যে গুনাহের নিন্দা করে, এ হাদিস তার দুটো অংশেরই নাম নেয়, আর বলে দেয় কতটুকু ওজনে সে গুনাহ সর্বনাশা হয়ে ওঠে: অন্তরে চুপচাপ পুষে রাখা একটিমাত্র সরিষাদানা।"
          }
        ]
      },
      {
        "h": {
          "en": "Condemned, Not a Weapon",
          "bn": "নিন্দিত, কিন্তু অস্ত্র নয়"
        },
        "p": [
          {
            "en": "This must be said plainly, in case the verse is misused. It describes three named tyrants of the distant past and the end God brought upon them for their arrogance and their rejection of clear proof. It licenses nothing against any living person or community; no group today may be labeled a Qārūn, a Pharaoh, or a Hāmān and treated as already condemned. The verse hands no one a verdict to pass on his neighbour. The judgement in it belongs to God, and it fell on men whose guilt the Qur'an itself establishes.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার, যেন আয়াতটা অপব্যবহার না হয়। এটি সুদূর অতীতের তিনজন নির্দিষ্ট অত্যাচারীর বর্ণনা, আর স্পষ্ট প্রমাণ অস্বীকার ও অহংকারের কারণে আল্লাহ তাদের যে পরিণতি দিয়েছিলেন তার কথা। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুই অনুমোদন করে না। কাউকে কারূন, ফেরাউন বা হামান বলে দেগে দিয়ে আগেভাগেই নিন্দিত সাব্যস্ত করার অধিকার এ আয়াত কাউকে দেয় না। প্রতিবেশীর উপর রায় দেওয়ার কোনো ভার এটি কারও হাতে তুলে দেয় না। এর ভেতরের বিচার আল্লাহর, আর তা নেমেছিল এমন মানুষদের উপর যাদের অপরাধ কুরআন নিজেই প্রমাণ করে।"
          },
          {
            "en": "What the verse hands the reader is a mirror. Few of us hold a treasury or a throne, but almost everyone holds something: a title, a budget, a room, the ear of someone powerful. The swelling the verse names does not need an empire to begin. The test is small and daily. When a truth arrives that would cost me, do I weigh it or wave it off; and the people below me, do I see them or look past them? The three who would not bow did not outrun the end, and neither will anyone who learns their refusal.",
            "bn": "আয়াত পাঠকের হাতে যা তুলে দেয় তা একটা আয়না। আমাদের খুব কম জনেরই ধনভাণ্ডার বা সিংহাসন আছে, তবু প্রায় সবার হাতেই কিছু-না-কিছু আছে। কোনো পদ, কোনো বাজেট, কোনো ঘর, কিংবা কোনো ক্ষমতাধরের কাছে পৌঁছানোর সুযোগ। আয়াত যে ফুলে ওঠার কথা বলে, তা শুরু হতে কোনো সাম্রাজ্য লাগে না। পরীক্ষাটা ছোট আর রোজকার। যে সত্য মানলে আমার কিছু হারাতে হয়, তা এলে আমি কি ভেবে দেখি, নাকি হাত নেড়ে উড়িয়ে দিই; আর আমার নিচের মানুষদের আমি কি দেখি, নাকি পাশ কাটিয়ে যাই। যে তিনজন মাথা নোয়াতে চায়নি, তারা পরিণতি পেরিয়ে যেতে পারেনি। তাদের সেই অস্বীকার যে শিখবে, সেও পারবে না।"
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
          "bn": "তালিকার পরেই উপমা"
        },
        "p": [
          {
            "en": "29:38 recalls Ad and Thamud, whose ruined dwellings were still visible to the listeners. 29:39 names Qarun, Fir'awn and Haman. 29:40 sums it up — each one We seized for his sin — and then names four ways it was done: a storm of stones, the blast, the earth swallowing them, and drowning. The parable in 29:41 comes down on people who have just been shown a record.",
            "bn": "২৯:৩৮ আয়াত মনে করিয়ে দেয় আদ ও সামূদের কথা, যাদের ধ্বংস হওয়া বসতি শ্রোতারা তখনো নিজের চোখে দেখতে পেত। ২৯:৩৯ আয়াতে আসে কারূন, ফেরাউন ও হামানের নাম। ২৯:৪০ আয়াত সবটা এক কথায় গুটিয়ে আনে: প্রত্যেককেই আমি তার গুনাহের জন্য পাকড়াও করেছি। তারপর বলে দেয় চারটি উপায়: পাথরবর্ষী ঝড়, বিকট আওয়াজ, মাটিতে ধসিয়ে দেওয়া আর ডুবিয়ে মারা। ২৯:৪১ আয়াতের উপমাটি তাই এমন মানুষদের সামনে আসে, যাদের এইমাত্র পুরো খতিয়ানটা দেখানো হয়েছে।"
          },
          {
            "en": "That placement decides how the image is meant to work. It is not a general remark about the fragility of worldly things. It is the explanation of why those particular nations went undefended: every one of them had protectors, and the protectors were not weak in the way a thin rope is weak. They were weak in the way a house is weak once the weather arrives.",
            "bn": "এই অবস্থান থেকেই বোঝা যায়, ছবিটা কীভাবে কাজ করার কথা। এটা দুনিয়ার জিনিসের ঠুনকো হওয়া নিয়ে সাধারণ কোনো মন্তব্য নয়। এটা ব্যাখ্যা করছে, ঠিক ওই জাতিগুলো কেন রক্ষা পেল না। তাদের প্রত্যেকেরই অভিভাবক ছিল। কিন্তু সেই অভিভাবকদের দুর্বলতা সরু দড়ির দুর্বলতার মতো নয়; তা ঘরের দুর্বলতার মতো, যা ধরা পড়ে ঝড় এলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verb They Share",
          "bn": "দুজনের একই ক্রিয়া"
        },
        "p": [
          {
            "en": "Mathal alladhina ittakhadhu min duni'llahi awliya'a ka-mathal al-ankabuti ittakhadhat bayta. One verb governs both halves: ittakhadha, to take for oneself, in the same form both times. They took protectors; she took a house. Nobody assigned either of them. In both halves a creature chose its own arrangement, and then had to go on living underneath the arrangement it had chosen.",
            "bn": "মাসালুল্লাযীনাত্তাখাযূ মিন দূনিল্লাহি আউলিয়াআ কামাসালিল আনকাবূতিত্তাখাযাত বাইতা। একটিই ক্রিয়া দুই অংশকে চালায়: 'ইত্তাখাযা', অর্থাৎ নিজের জন্য গ্রহণ করা, দুবারই একই রূপে। তারা অভিভাবক বানিয়ে নিয়েছে; সে বানিয়ে নিয়েছে একটা ঘর। কাউকেই কেউ তা ঠিক করে দেয়নি। দুই ক্ষেত্রেই একটি সৃষ্টি নিজের ব্যবস্থা নিজে বেছে নিয়েছে, তারপর সেই বেছে নেওয়া ব্যবস্থার নিচেই তাকে থেকে যেতে হয়েছে।"
          },
          {
            "en": "There is another taker of houses in the Quran, and the contrast is instructive. 16:68 has Allah reveal to the bee: ittakhidhi min al-jibali buyutan — take houses in the mountains. The same verb, but by instruction this time; and 16:69 says what comes out of her, a drink in which there is healing for people. Two builders, two houses, and the difference is who told them to build.",
            "bn": "কুরআনে ঘর বানিয়ে নেওয়া আরেকজনের কথা আছে, আর দুটোর তুলনা থেকে শেখার আছে। ১৬:৬৮ আয়াতে আল্লাহ মৌমাছিকে ওহি পাঠান: 'ইত্তাখিযী মিনাল জিবালি বুয়ূতা', পাহাড়ে ঘর বানাও। ক্রিয়া সেই একই, তবে এবার হুকুম পেয়ে। আর ১৬:৬৯ আয়াত বলে, তার ভেতর থেকে কী বের হয়: এমন পানীয়, যাতে মানুষের জন্য শিফা আছে। দুই নির্মাতা, দুই ঘর; পার্থক্য শুধু এক জায়গায়, বানাতে কে বলেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "The Frailest of Houses",
          "bn": "সবচেয়ে দুর্বল ঘর"
        },
        "p": [
          {
            "en": "Wa inna awhana al-buyuti la-baytu al-ankabut. Awhan is a superlative: not one weak house among others, but the frailest of them all. The comparison is drawn among houses, which is exactly the point. The web is not badly made for what a spider actually does with it; it is being judged against the single job that a bayt exists to do.",
            "bn": "ওয়া ইন্না আওহানাল বুয়ূতি লাবাইতুল আনকাবূত। 'আওহান' শব্দটি তুলনার চূড়ান্ত রূপ: অনেক দুর্বল ঘরের একটি নয়, সব ঘরের মধ্যে সবচেয়ে দুর্বল। তুলনাটা করা হচ্ছে ঘরের সঙ্গে ঘরের, আর আসল কথা সেটাই। মাকড়সা জালটা যে কাজে লাগায়, সে কাজের জন্য জালটা খারাপ বানানো নয়। তাকে মাপা হচ্ছে সেই একটিমাত্র কাজ দিয়ে, যার জন্য 'বাইত', অর্থাৎ ঘর থাকে।"
          },
          {
            "en": "The Arabic commentaries state that job plainly: the spider made a house for herself to protect her, and it availed her nothing when she had need of it. 16:80 says what Allah made a house for — He made your houses a sakan for you, a place of rest and stillness. Ibn Kathir's picture of the idolaters is a man gripping a spider's web and gaining nothing at all from it.",
            "bn": "আরবি তাফসীরগুলো সেই কাজটা সাফ বলে দেয়: মাকড়সা নিজেকে বাঁচাতে নিজের জন্য একটা ঘর বানিয়েছিল, অথচ দরকারের সময় সেটা তার কোনো কাজে আসেনি। আল্লাহ ঘর কিসের জন্য বানিয়েছেন, তা ১৬:৮০ আয়াত বলে দেয়: তিনি তোমাদের ঘরগুলোকে তোমাদের জন্য 'সাকান' বানিয়েছেন, অর্থাৎ বিশ্রাম ও প্রশান্তির জায়গা। ইবনে কাসীর মুশরিকদের ছবি আঁকেন এভাবে: এক মানুষ মাকড়সার জাল আঁকড়ে ধরে আছে, অথচ তা থেকে কিছুই পাচ্ছে না।"
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
            "bn": "'আনকাবূত' শব্দটি গোটা কুরআনে এসেছে মাত্র দুবার, আর দুবারই এই একটি আয়াতে। তবু ঊনত্রিশতম সূরার নাম এই শব্দেই। এই সূরা ২৯:২ আয়াতে শুরুই হয় একটি প্রশ্ন দিয়ে: মানুষ কি ভেবেছে, 'আমরা ঈমান এনেছি' বললেই তাদের ছেড়ে দেওয়া হবে, পরীক্ষা করা হবে না? সেই সূরাই বহন করছে তার ভেতরের সবচেয়ে দুর্বল ঘরের নাম। নামটাই যেন বলে দেয়, পরীক্ষা এলে মানুষ কিসের উপর ভর দেয়।"
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
            "bn": "ইবনে কাসীর এই ছবির উল্টো দিকে দাঁড় করান মুমিনকে: তার অন্তর আল্লাহর সঙ্গে বাঁধা, আর তার অঙ্গপ্রত্যঙ্গ চলে আল্লাহর শরীয়ত মেনে; সে আঁকড়ে ধরেছে সবচেয়ে মজবুত হাতল। এটা ২:২৫৬ আয়াতের ভাষা: 'আল-উরওয়াতুল উসকা', সবচেয়ে মজবুত অবলম্বন, যা কখনো ছেঁড়ার নয়। আর ৩১:২২ আয়াতেরও ভাষা, যা সেই মানুষের কথা বলে, যে সৎকর্মশীল অবস্থায় নিজেকে আল্লাহর কাছে সঁপে দেয়। জাল ছিঁড়ে যায়; যে হাতল ছেঁড়ার নয়, তা ছেঁড়ে না।"
          },
          {
            "en": "29:42 then adds the sentence that closes the door: indeed Allah knows whatever thing they call upon besides Him, and He is the Exalted in Might, the Wise. What was being sought elsewhere is not hidden from Him, and the two names at the end of that verse say plainly where the might and the wisdom actually sit.",
            "bn": "এরপর ২৯:৪২ আয়াত যোগ করে সেই বাক্য, যা দরজাটা বন্ধ করে দেয়: তারা তাঁকে ছাড়া যা কিছুকেই ডাকে, আল্লাহ তা জানেন, আর তিনি মহাপরাক্রমশালী, প্রজ্ঞাময়। অন্য জায়গায় যা খোঁজা হচ্ছিল, তা তাঁর কাছে গোপন নয়। আর আয়াতের শেষের দুটি নাম সাফ বলে দেয়, শক্তি আর প্রজ্ঞা আসলে কোথায়।"
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
            "bn": "লাউ কানূ ইয়া'লামূন: যদি তারা জানত! আয়াতটি বলে না যে তাদের জানানো হয়েছিল আর তারা মানেনি; বলে, তারা জানত না। দুই আয়াত পরে ২৯:৪৩ এর জবাব দেয়: এই উপমাগুলো আমি মানুষের জন্য দিই, কিন্তু জ্ঞানীরা ছাড়া কেউ তা বোঝে না। উপমাটা নিজেই মানুষকে বাছাই করে। আর একে বোঝাটাই সেই জ্ঞান, যার অভাব নিয়ে আয়াতটি এইমাত্র আক্ষেপ করল।"
          },
          {
            "en": "Ibn Abi Hatim records that Amr ibn Murrah said he never met a verse of the Book of Allah that he did not understand without being grieved by it, because of that closing line. The test this parable leaves behind is not whether a reader can admire the image. It is whether he can name what he has been leaning on this week in a way that only Allah can actually be leaned on.",
            "bn": "ইবনে আবী হাতিম বর্ণনা করেন, আমর ইবনে মুররা বলতেন: আল্লাহর কিতাবের যে আয়াতই তিনি বুঝতে পারেননি, তাতেই তিনি ব্যথিত হয়েছেন, আর এর কারণ ওই শেষ বাক্যটি। এই উপমা যে পরীক্ষা রেখে যায়, তা ছবিটার তারিফ করতে পারা নয়। পরীক্ষা হলো, পাঠক কি নাম ধরে বলতে পারে, এই সপ্তাহে সে কিসের উপর এমনভাবে ভর দিয়েছে, যেভাবে ভর দেওয়া যায় কেবল আল্লাহর উপর?"
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
            "bn": "আয়াতটি নবী ﷺ-কে, আর তাঁর পরে প্রত্যেক পাঠককে, দুটি স্থায়ী হুকুম দেয়। প্রথমটি 'উতলু': কিতাব থেকে তোমার প্রতি যা ওহি করা হয়েছে, তা তিলাওয়াত করো। দ্বিতীয়টি 'আকিমিস-সালাহ': নামাজ কায়েম করো। তারপর দ্বিতীয় হুকুমের সঙ্গে একটি প্রতিশ্রুতি জুড়ে দেয়: 'ইন্নাস-সালাতা তানহা আনিল-ফাহশায়ি ওয়াল-মুনকার', নামাজ অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে। তিলাওয়াত নামাজকে খোরাক জোগায়, আর নামাজ চরিত্রকে পাহারা দেয়। এভাবে আয়াতটি কিতাব, ইবাদত আর আচরণকে এক সুতোয় গেঁথে দেয়।"
          },
          {
            "en": "The setting sharpens it. Surah al-'Ankabut is Meccan and opens at 29:2 with the announcement that people will be tested in their claim of faith; around this verse the surah is arguing with deniers. In that pressure, the resources prescribed for the Prophet ﷺ are not new arguments but tilawah and salah — and salah is the same refuge 2:153 and 20:132 reach for in hardship, each pairing it there with sabr. What steadies the arguer is not more argument; it is contact with the One argued for.",
            "bn": "প্রেক্ষাপট বিষয়টাকে আরও তীক্ষ্ণ করে। সূরা আল-আনকাবূত মক্কী। ২৯:২ আয়াতেই এর শুরু এই ঘোষণা দিয়ে যে, ঈমানের দাবিতে মানুষকে পরীক্ষা করা হবে। আর এই আয়াতের আশপাশে সূরাটি অস্বীকারকারীদের সঙ্গে তর্ক করছে। সেই চাপের মধ্যে নবী ﷺ-কে যে সম্বল দেওয়া হলো, তা নতুন কোনো যুক্তি নয়; তা তিলাওয়াত আর সালাত। কষ্টের সময় ২:১৫৩ আর ২০:১৩২ আয়াতও এই সালাতের আশ্রয়েই যায়, আর দুই জায়গাতেই এর সঙ্গে জুড়ে দেয় সবর। যে তর্ক করছে, তাকে স্থির রাখে আরও তর্ক নয়; তাকে স্থির রাখে তাঁর সঙ্গে যোগাযোগ, যাঁর পক্ষে সে তর্ক করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Establish, Not Perform",
          "bn": "কায়েম করা, সারা নয়"
        },
        "p": [
          {
            "en": "The command is aqim — set upright — not merely 'pray'. The mufassirun read in it the difference between discharging a duty and establishing a practice: on time, with its conditions, its stillness and its presence of heart. The promise of restraint in the next clause belongs to prayer established, not prayer performed anyhow. That distinction spares the verse from the obvious objection — that some people pray and still transgress — by asking what kind of prayer theirs is.",
            "bn": "হুকুমটা হলো 'আকিম', অর্থাৎ খাড়া করে দাঁড় করানো; শুধু 'নামাজ পড়ো' নয়। মুফাসসিরগণ এখানে দেখেন দায় সারা আর একটি আমল কায়েম করার পার্থক্য: সময়মতো, শর্তগুলো মেনে, ধীরস্থিরভাবে, মন হাজির রেখে। পরের বাক্যে যে বিরত রাখার প্রতিশ্রুতি, তা কায়েম করা নামাজের জন্য, যেনতেনভাবে সেরে ফেলা নামাজের জন্য নয়। একটা চেনা আপত্তি আছে: কেউ কেউ তো নামাজ পড়েও সীমা লঙ্ঘন করে। এই পার্থক্য আয়াতটিকে সেই আপত্তি থেকে বাঁচায়, পাল্টা প্রশ্ন তুলে: তাদের নামাজটা কেমন নামাজ?"
          },
          {
            "en": "Fahsha' covers the shameless acts; munkar is broader — whatever sound nature and the law together reject. Tanha, restrains, is the verb of a prohibitor: the prayer itself is pictured as forbidding its person, standing between him and what disgraces him. Five appointments a day with the One who sees him retrain what a person can comfortably do with the hours in between; whoever genuinely keeps meeting Allah at dawn finds certain deeds at midnight harder to sit in.",
            "bn": "'ফাহশা' বলতে বোঝায় নির্লজ্জ কাজগুলো; 'মুনকার' আরও ব্যাপক: সুস্থ স্বভাব আর শরীয়ত মিলে যা কিছু প্রত্যাখ্যান করে। 'তানহা', অর্থাৎ বিরত রাখে, ক্রিয়াটা নিষেধকারীর। যেন নামাজ নিজেই তার নামাজিকে নিষেধ করছে, তার আর তাকে লাঞ্ছিত করে এমন সবকিছুর মাঝখানে দাঁড়িয়ে। যিনি তাকে দেখেন, তাঁর সঙ্গে দিনে পাঁচবার সাক্ষাৎ মানুষকে নতুন করে গড়ে; মাঝের ঘণ্টাগুলোতে কোন কাজে সে স্বস্তি পায়, তা বদলে যায়। যে সত্যিই প্রতিদিন ভোরে আল্লাহর সামনে দাঁড়ায়, মাঝরাতে কিছু কিছু কাজে মজে থাকা তার জন্য কঠিন হয়ে ওঠে।"
          }
        ]
      },
      {
        "h": {
          "en": "How Prayer Restrains",
          "bn": "নামাজ কীভাবে বিরত রাখে"
        },
        "p": [
          {
            "en": "The restraint works by repetition and by memory. Repetition: wrongdoing needs privacy and forgetfulness, and an established prayer dismantles both on a fixed schedule — 20:14 ties the two openly: establish the prayer for My remembrance. Memory: the one standing in prayer rehearses, five times daily, who is watching, and that rehearsal follows him out. 70:19-23 draw the same portrait from the other side: man is anxious and grasping — except the praying ones, those who are constant at their prayer.",
            "bn": "এই বিরত রাখা কাজ করে দুই পথে: বারবার ফিরে আসা আর মনে করিয়ে দেওয়া। প্রথমটি এভাবে: অন্যায়ের দরকার আড়াল আর ভুলে থাকা, আর কায়েম করা নামাজ বাঁধা সময়ে বারবার এসে দুটোই ভেঙে দেয়। ২০:১৪ দুটিকে খোলাখুলি জুড়ে দিয়েছে: আমার স্মরণের জন্য নামাজ কায়েম করো। দ্বিতীয়টি এভাবে: নামাজে দাঁড়ানো মানুষ দিনে পাঁচবার নিজেকে মনে করিয়ে দেয়, কে তাকে দেখছেন। নামাজ শেষে সেই মনে পড়াটা তার সঙ্গে বাইরেও যায়। ৭০:১৯-২৩ উল্টো দিক থেকে একই ছবি আঁকে: মানুষ অস্থির আর লোভী, তবে নামাজিরা ছাড়া, যারা নিজেদের নামাজে অবিচল।"
          },
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that the Prophet ﷺ asked: if a river ran at the door of one of you and he bathed in it five times every day, would any dirt remain on him? They said none. He said: that is the likeness of the five prayers, by which Allah erases sins. Erasure and restraint are two services of the same appointment — what prayer does not prevent, prayer washes, so long as the appointment is kept.",
            "bn": "বুখারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ জিজ্ঞেস করলেন: তোমাদের কারও দরজার সামনে দিয়ে যদি একটা নদী বয়ে যায়, আর সে তাতে রোজ পাঁচবার গোসল করে, তার গায়ে কি কোনো ময়লা থাকবে? তাঁরা বললেন: কিছুই থাকবে না। তিনি বললেন: পাঁচ ওয়াক্ত নামাজের উদাহরণ এটাই; এর মাধ্যমে আল্লাহ গুনাহ মুছে দেন। গুনাহ মুছে দেওয়া আর গুনাহ থেকে বিরত রাখা, দুটোই একই নির্ধারিত সাক্ষাতের দান। নামাজ যা ঠেকাতে পারে না, নামাজ তা ধুয়ে দেয়, যতক্ষণ সেই সাক্ষাৎ নিয়মিত রাখা হয়।"
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
            "bn": "'ওয়া লাযিকরুল্লাহি আকবার'। প্রথম যুগের মুফাসসিরগণ এই বাক্যাংশের একাধিক অর্থ করেছেন, তাবারী সেগুলো লিখে রেখেছেন, আর প্রতিটি অর্থই টেকে। ইবনে আব্বাস (রাঃ) থেকে বর্ণিত: তোমরা আল্লাহকে যতটা স্মরণ করো, তোমাদের প্রতি আল্লাহর স্মরণ তার চেয়ে বড়। অন্যরা বলেন: নামাজের ভেতরের জিকিরই নামাজের অন্য সব অংশের চেয়ে বড়। আবার কেউ বলেন: আল্লাহর জিকির নিজেই গুনাহ থেকে সবচেয়ে বড় বাধা, নামাজ যতটা বিরত রাখে তার চেয়েও বেশি। বাক্যাংশটি এত প্রশস্ত যে মুফাসসিরগণ একটিকে বেছে না নিয়ে সবগুলোকে একসঙ্গে ধরে রাখতে পেরেছেন।"
          },
          {
            "en": "Whichever is read, the clause reorders ambitions. If His remembrance of you outweighs yours of Him, then dhikr is answered attention, not a call into a void. If dhikr is the prayer's core, then the goal inside every rak'ah is the remembering, not the completing. And if dhikr restrains more than anything, then the tongue and heart carry a portable guard between prayers. The verse closes on watchfulness either way: and Allah knows what you do.",
            "bn": "যে অর্থই নেওয়া হোক, বাক্যাংশটি আমাদের লক্ষ্যগুলোকে নতুন করে সাজিয়ে দেয়। আপনার প্রতি তাঁর স্মরণ যদি তাঁর প্রতি আপনার স্মরণের চেয়ে ভারী হয়, তবে জিকির শূন্যে ছোড়া ডাক নয়, এমন ডাক যার সাড়া মেলে। জিকির যদি নামাজের প্রাণ হয়, তবে প্রতিটি রাকাতে আসল লক্ষ্য স্মরণ করা, কোনোমতে শেষ করা নয়। আর জিকির যদি সবকিছুর চেয়ে বেশি বিরত রাখে, তবে দুই নামাজের মাঝের সময়েও জিহ্বা আর অন্তরে একজন পাহারাদার সঙ্গে থাকে, যাকে যেখানে খুশি নিয়ে যাওয়া যায়। যেভাবেই পড়া হোক, আয়াতটি শেষ হয় নজরদারির কথায়: আর তোমরা যা করো আল্লাহ তা জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "When Prayer Seems Not to Work",
          "bn": "যখন মনে হয় নামাজে কাজ হচ্ছে না"
        },
        "p": [
          {
            "en": "The honest question — I pray and still sin — is answered from inside the verse. The claim is about prayer established: presence, correctness, constancy. To the degree those rise, the restraint rises; a prayer that is all shell restrains like a shell. The direction of repair is therefore not to doubt the promise or drop the prayer, but to establish it further — earlier, stiller, better understood — and to let 107:4-5, woe to those heedless of their prayer, describe the failure honestly.",
            "bn": "আমি নামাজ পড়ি, তবু গুনাহ করি: এই সৎ প্রশ্নের জবাব আয়াতের ভেতরেই আছে। আয়াতের দাবি কায়েম করা নামাজ নিয়ে, অর্থাৎ যে নামাজে মন হাজির, আদায় শুদ্ধ, আর পড়া নিয়মিত। এগুলো যত বাড়ে, গুনাহ থেকে বিরত রাখার শক্তিও তত বাড়ে। যে নামাজ শুধু খোলস, তা খোলসের মতোই বিরত রাখে। তাই সমাধান প্রতিশ্রুতিতে সন্দেহ করা বা নামাজ ছেড়ে দেওয়া নয়। সমাধান হলো নামাজকে আরও ভালোভাবে কায়েম করা: আরও আগে, আরও স্থির হয়ে, আরও বুঝে পড়া। আর ১০৭:৪-৫ ব্যর্থতাটা সৎভাবে বলে দিক: দুর্ভোগ সেই নামাজিদের, যারা নিজেদের নামাজে উদাসীন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Daily Circuit",
          "bn": "প্রতিদিনের চক্র"
        },
        "p": [
          {
            "en": "Lived, the verse is a maintenance schedule. Recite daily — the Book is the prayer's fuel, and the verse put tilawah first. Guard the five on time — establishment begins with punctuality, whatever else follows. Then audit conduct against prayer: when a sin repeats, examine the salah before the circumstance, because the verse has tied them. And thread dhikr through the gaps, since the greater thing needs no wudu, no direction and no fixed hour.",
            "bn": "জীবনে আমল করতে গেলে আয়াতটি যেন রোজকার রক্ষণাবেক্ষণের তালিকা। প্রতিদিন তিলাওয়াত করুন: কিতাবই নামাজের জ্বালানি, আর আয়াতটিও তিলাওয়াতকে আগে রেখেছে। পাঁচ ওয়াক্ত নামাজ সময়মতো আদায় করুন: কায়েম করা শুরু হয় সময় মেনে চলা দিয়ে, বাকি যা কিছু তা এরপর। তারপর নিজের আচরণকে নামাজের সঙ্গে মিলিয়ে দেখুন: কোনো গুনাহ বারবার ফিরে এলে পরিস্থিতিকে দোষ দেওয়ার আগে নিজের নামাজটা পরখ করুন, কারণ আয়াত এ দুটিকে বেঁধে দিয়েছে। আর ফাঁকে ফাঁকে জিকির চালু রাখুন, কারণ মহত্তর এই জিনিসটির জন্য অজু লাগে না, কিবলা লাগে না, নির্দিষ্ট সময়ও লাগে না।"
          },
          {
            "en": "The end of the verse quietly closes the loop: wa-Allahu ya'lamu ma tasna'un, Allah knows what you do. The same knowledge that makes sin shameful makes hidden fidelity worthwhile. No one else may ever see the recitation before dawn or the wrong turned down at midday; the last clause says the only audience that mattered saw both, and that the prayer, the restraint and the remembrance were all witnessed by Him.",
            "bn": "আয়াতের শেষ অংশ নিঃশব্দে বৃত্তটা পূর্ণ করে: 'ওয়াল্লাহু ইয়া'লামু মা তাসনাউন', তোমরা যা করো আল্লাহ তা জানেন। যে জানার কারণে গুনাহ লজ্জার হয়, সেই একই জানার কারণে গোপনে রাখা বিশ্বস্ততাও মূল্যবান হয়ে ওঠে। ফজরের আগের তিলাওয়াত কিংবা দুপুরবেলা ফিরিয়ে দেওয়া কোনো অন্যায়, এসব হয়তো আর কেউ কোনোদিন দেখবে না। শেষ বাক্যটি জানিয়ে দেয়, যাঁর দেখাটাই আসল, তিনি দুটোই দেখেছেন। নামাজ, গুনাহ থেকে বিরত থাকা আর জিকির, সবকিছুরই সাক্ষী তিনি।"
          }
        ]
      }
    ]
  },
  "29:47": {
    "sections": [
      {
        "h": {
          "en": "Thus, As Before",
          "bn": "আগের ধারাতেই নাজিল"
        },
        "p": [
          {
            "en": "The verse opens with wa-kadhalika, 'and thus,' and the commentators read the word as a hinge between this revelation and every revelation before it. Ibn Jarir, quoted by Ibn Kathir, glosses it: just as We sent down the Scriptures upon the messengers who came before you, Muhammad, so We have sent down to you this Book. Ibn Kathir calls the reading sound and well fitted to the context. At-Tabari gives the same sense, and al-Muyassar adds that this Book comes confirming the Scriptures that preceded it.",
            "bn": "আয়াত শুরু হয় 'ওয়া কাযালিকা' দিয়ে, অর্থাৎ 'আর এভাবেই'। তাফসীরকারেরা এই শব্দটিকে দেখেন এই ওহি আর আগের সব ওহির মধ্যে এক সেতু হিসেবে। ইবন কাসীর ইবন জারীরের ব্যাখ্যা উদ্ধৃত করেন: হে মুহাম্মদ, তোমার আগের রাসূলদের উপর যেভাবে কিতাব নাজিল করেছি, ঠিক সেভাবেই তোমার উপর এই কিতাব নাজিল করেছি। ইবন কাসীর এই ব্যাখ্যাকে সঠিক এবং প্রসঙ্গের সঙ্গে মানানসই বলেন। তাবারীও একই অর্থ করেন, আর মুয়াসসার যোগ করেন, এই কিতাব এসেছে আগের কিতাবগুলোকে সত্য বলে সমর্থন করে।"
          },
          {
            "en": "That one word sets the Qur'an inside a single line of sending, not apart from it. The placement matters too. The verse before it told the believers how to speak with the People of the Book: argue in the better way, and say we believe in what was sent down to us and to you (29:46). This verse supplies the ground under that courtesy. The God who gave them their Scripture is the God who gave this one, so the shared root is real, and the new Book is the old sending carried on.",
            "bn": "এই একটি শব্দ কুরআনকে ওহির ধারা থেকে আলাদা করে না, বরং সেই এক ধারার ভেতরেই বসিয়ে দেয়। আয়াতের অবস্থানটাও তাৎপর্যপূর্ণ। আগের আয়াত মুমিনদের শিখিয়েছিল কিতাবধারীদের সঙ্গে কেমন করে কথা বলতে হবে, উত্তম পন্থায় আলোচনা কর, আর বল আমাদের প্রতি ও তোমাদের প্রতি যা নাজিল হয়েছে তাতে আমরা ঈমান এনেছি (২৯:৪৬)। এই আয়াত সেই শিষ্টাচারের নিচে ভিত গেঁথে দেয়। যিনি তাদের কিতাব দিয়েছেন, তিনিই এই কিতাব দিয়েছেন। তাই মিলের শিকড়টা সত্যি, আর নতুন কিতাব সেই পুরনো ধারারই ধারাবাহিকতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Those Who Already Knew It",
          "bn": "যারা আগেই চিনেছিল"
        },
        "p": [
          {
            "en": "Then comes the first response: those to whom We gave the Scripture believe in it. Ibn Kathir, following Ibn Jarir, reads this of the knowledgeable rabbis and scholars among the People of the Book who had learned their own Scripture and recited it as it should be recited, naming ʿAbdullah ibn Salam (RA), Salman al-Farisi (RA) and others like them. These were not outsiders stumbling onto something strange; they were readers of Scripture who met a new Book and recognised its hand.",
            "bn": "এরপর আসে প্রথম সাড়া, যাদের আমি কিতাব দিয়েছি তারা এতে ঈমান আনে। ইবন জারীরকে অনুসরণ করে ইবন কাসীর এটিকে পড়েন কিতাবধারীদের সেই জ্ঞানী আলেম আর পণ্ডিতদের কথা হিসেবে, যারা নিজেদের কিতাব শিখেছিল আর যথাযথভাবে পাঠ করত। তিনি নাম নেন আব্দুল্লাহ ইবন সালাম (রাঃ), সালমান ফারসী (রাঃ) আর তাঁদের মতো আরও কয়েকজনের। এরা বাইরের কেউ ছিল না যারা হঠাৎ অচেনা কিছুতে এসে পড়েছিল। এরা ছিল কিতাবের পাঠক, যারা নতুন এক কিতাবের মুখোমুখি হয়ে তার উৎসকে চিনে ফেলেছিল।"
          },
          {
            "en": "At-Tabari reads the same clause of those to whom the Scripture was given before, from the Children of Israel. Al-Baghawi is explicit that the phrase means the believers among the People of the Book, ʿAbdullah ibn Salam (RA) and his companions. Al-Muyassar frames it by the quality of their reading: those of the Children of Israel who recognised the Book with true recognition believe in the Qur'an. Across these commentators the sense holds steady, that scripture-bearing people were among the first to accept it.",
            "bn": "তাবারী একই অংশের অর্থ করেন বনী ইসরাঈলের সেই লোকেরা, যাদের আগে কিতাব দেওয়া হয়েছিল। বাগাভী স্পষ্ট বলেন, এখানে উদ্দেশ্য কিতাবধারীদের মধ্যকার মুমিনরা: আব্দুল্লাহ ইবন সালাম (রাঃ) ও তাঁর সঙ্গীরা। মুয়াসসার জোর দেন তাদের চেনার ধরনের উপর: বনী ইসরাঈলের যারা কিতাবকে সত্যিকার অর্থে চিনেছিল, তারা কুরআনে ঈমান আনে। এই সব তাফসীরে অর্থটা একই থাকে: কিতাবের অধিকারী মানুষেরাই ছিলেন কুরআনকে প্রথম গ্রহণকারীদের মধ্যে।"
          },
          {
            "en": "The order of the verse is worth noticing. Before it says a word about rejection, it records belief, and it records it first among people who already held a Book. Their acceptance carries a weight of testimony: those best placed to compare the new revelation with the old found that the two answered to each other. The verse lets that recognition stand at the front, as the natural response of a heart that knew Scripture and met its continuation.",
            "bn": "আয়াতের ক্রমটা লক্ষ করার মতো। অস্বীকার নিয়ে একটি কথা বলার আগেই এটি ঈমানের কথা লিখে রাখে, আর সেই ঈমান প্রথমে লিখে রাখে এমন লোকদের মধ্যে যাদের হাতে আগে থেকেই কিতাব ছিল। তাদের গ্রহণের সঙ্গে জড়িয়ে থাকে এক সাক্ষ্যের ভার। নতুন ওহিকে পুরনোটার সঙ্গে মিলিয়ে দেখার সবচেয়ে উপযুক্ত যারা, তারাই দেখল দুটি একে অপরের সঙ্গে মেলে। আয়াত সেই চেনাকে সামনে দাঁড়াতে দেয়, কিতাব-জানা হৃদয়ের স্বাভাবিক সাড়া হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wider Door",
          "bn": "আরও প্রশস্ত দরজা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the clause less as a fixed roster of names than as a description of a disposition. Those to whom We gave the Scripture, he says, are those who recognised it with its due recognition, in whom no envy and no whim had lodged; they believe because they grew certain of its truth. He lists the grounds of that certainty: the agreements between this Book and what they held, the glad tidings they already carried, and a trained eye for telling the sound from the corrupt and the truthful from the false.",
            "bn": "সা'দী এই অংশকে নির্দিষ্ট কিছু নামের তালিকা হিসেবে পড়েন না, পড়েন এক ধরনের মনের অবস্থার বর্ণনা হিসেবে। তাঁর মতে, 'যাদের আমি কিতাব দিয়েছি' তারা সেই লোক, যারা কিতাবকে যেভাবে চেনা উচিত সেভাবেই চিনেছে, যাদের মনে হিংসা বা খেয়ালখুশি জায়গা পায়নি। তারা ঈমান আনে, কারণ এর সত্যতা নিয়ে তারা নিশ্চিত হয়ে গেছে। এই নিশ্চয়তার কারণগুলোও তিনি গুনে দেন: তাদের কাছে যা ছিল তার সঙ্গে এই কিতাবের মিল, আগে থেকে তাদের কাছে থাকা সুসংবাদ, আর খাঁটি থেকে বিকৃত এবং সত্য থেকে মিথ্যা আলাদা করার অভ্যস্ত চোখ।"
          },
          {
            "en": "So two readings stand side by side, and both are held by men who read the Arabic closely. Most of the commentators here name particular believers, ʿAbdullah ibn Salam (RA) and his like, a reading rooted in events. As-Sa'di widens the clause into a description that could fit anyone given Scripture who met this Book without envy. The ground they share weighs more than the point they divide on, for the verse is affirming believers among the People of the Book, not condemning them.",
            "bn": "তাই দুটি ব্যাখ্যা পাশাপাশি থাকে, আর দুটোই এমন আলেমদের, যাঁরা আরবি খুঁটিয়ে পড়েছেন। এখানে বেশির ভাগ তাফসীরকার নির্দিষ্ট মুমিনদের নাম নেন, যেমন আব্দুল্লাহ ইবন সালাম (রাঃ) ও তাঁর মতো লোকেরা; এ ব্যাখ্যার শিকড় বাস্তব ঘটনায়। সা'দী অংশটিকে আরও বিস্তৃত করেন: কিতাব পাওয়া যে-কেউ হিংসা ছাড়া এই কিতাবের মুখোমুখি হলে বর্ণনাটি তার বেলায়ও খাটে। দুই ব্যাখ্যার মিলের জায়গাটা মতভেদের চেয়ে ভারী, কারণ আয়াত কিতাবধারীদের মধ্যকার মুমিনদের স্বীকৃতি দিচ্ছে, তাদের নিন্দা করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "And Among These People",
          "bn": "আর এদেরও কেউ কেউ"
        },
        "p": [
          {
            "en": "The verse turns to a second group: and among these are some who believe in it. Ibn Kathir reads these as the Arabs, the Quraysh and others; al-Muyassar says the same, the Arabs of Quraysh and beyond. Al-Baghawi names them the people of Makka, specifically the believers among them, and at-Tabari glosses these as the ones living among you today. The pronoun points at the Prophet's own city, where some who held no earlier Scripture still came to faith.",
            "bn": "আয়াত এবার ফেরে দ্বিতীয় একটি দলের দিকে, আর এদের মধ্যেও কেউ কেউ এতে ঈমান আনে। ইবন কাসীর এদের পড়েন আরবদের কথা হিসেবে, কুরাইশ আর অন্যরা। মুয়াসসারও একই কথা বলেন, কুরাইশ আর তার বাইরের আরবরা। বাগাভী এদের নাম দেন মক্কার লোক, আরও নির্দিষ্ট করে তাদের মধ্যকার মুমিনরা। আর তাবারী 'এদের' ব্যাখ্যা করেন সেই লোক হিসেবে যারা আজ তোমার আশেপাশেই আছে। সর্বনামটি আঙুল তোলে নবী ﷺ-এর নিজের শহরের দিকে, যেখানে আগের কিতাব নেই এমন কেউ কেউও ঈমানে এসেছে।"
          },
          {
            "en": "So the verse names two streams of belief before it names any denial: one flowing from the People of the Book, one from the Prophet's own townsmen. As-Sa'di marks the quality of this second faith as belief out of insight, not out of desire or dread. That is worth holding onto. The accent of the verse falls on who accepts the Book and why, and only after that does it come to the ones who refuse.",
            "bn": "তাই অস্বীকারের কথা তোলার আগেই আয়াত ঈমানের দুটি স্রোতের কথা বলে: একটি আসছে কিতাবধারীদের মধ্য থেকে, আরেকটি নবীর নিজের শহরের লোকদের মধ্য থেকে। সা'দী এই দ্বিতীয় ঈমানের বৈশিষ্ট্য বলেন: এ ঈমান এসেছে অন্তর্দৃষ্টি থেকে, লোভ বা ভয় থেকে নয়। কথাটা মনে রাখার মতো। আয়াতের জোর পড়েছে কে কিতাব গ্রহণ করছে আর কেন, তার উপর। যারা মুখ ফিরিয়ে নেয়, তাদের কথা আসে এর পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word for Denial",
          "bn": "অস্বীকারের আসল মানে"
        },
        "p": [
          {
            "en": "The verse ends on a sharp restriction: and none reject Our signs except the disbelievers. The verb is yajhad, and jahd is not the same thing as ignorance. At-Tabari spells it out: none rejects Our proofs and arguments except whoever denies the favours We have placed upon him and denies Our oneness and lordship, doing so upon knowledge, out of sheer obstinacy against Us. The rejection he describes is a turning away from what the self has already taken in.",
            "bn": "আয়াত শেষ হয় এক কড়া সীমারেখায়, অবিশ্বাসীরা ছাড়া আমার নিদর্শন কেউ অস্বীকার করে না। ক্রিয়াটি 'ইয়াজহাদু', আর 'জাহদ' অজ্ঞতার সমান নয়। তাবারী তা খুলে বলেন, আমার প্রমাণ আর যুক্তি সে-ই অস্বীকার করে যে তার উপর রাখা আমার নিয়ামত অস্বীকার করে, আমার একত্ব আর রবুবিয়্যাত অস্বীকার করে, আর তা করে জেনেশুনে, নিছক আমার বিরুদ্ধে একগুঁয়েমি থেকে। তিনি যে অস্বীকারের কথা বলছেন তা হলো মন যা একবার গ্রহণ করেছে তা থেকেই মুখ ফিরিয়ে নেওয়া।"
          },
          {
            "en": "Ibn Kathir paints the same refusal in an image: no one disbelieves and rejects these signs except the one who buries truth under falsehood, like a man who tries to cover the light of the sun with a thin veil, and how far he is from it. Al-Muyassar and as-Sa'di both describe the deniers by their settled habit, as people whose practice is jahd and obstinate opposition. Denial, on this reading, is a posture a person takes up, not an accident that befalls him.",
            "bn": "ইবন কাসীর একই প্রত্যাখ্যানকে আঁকেন এক ছবিতে, এই নিদর্শনগুলো সে-ই অস্বীকার করে যে সত্যকে মিথ্যার নিচে চাপা দেয়, যেন কেউ পাতলা কাপড়ে সূর্যের আলো ঢেকে দিতে চাইছে, আর তা কতই না অসম্ভব। মুয়াসসার আর সা'দী দুজনেই অস্বীকারকারীদের চেনান তাদের বাঁধা স্বভাব দিয়ে, যাদের অভ্যাসই হলো জাহদ আর একগুঁয়ে বিরোধিতা। এই পাঠে অস্বীকার হলো মানুষের নিজে থেকে নেওয়া এক ভঙ্গি, তার উপর ঘটে যাওয়া কোনো দুর্ঘটনা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Only After Knowing",
          "bn": "চেনার পরেই অস্বীকার"
        },
        "p": [
          {
            "en": "Two of the commentators close the point with a single sentence from Qatada, that rejection only comes after recognition. You cannot deny, in this exact sense, what you never knew; jahd presumes an earlier knowing. At-Tabari carries the line, and al-Baghawi draws out its hardest edge: some among the People of the Book who rejected the Qur'an in the Prophet's day knew that he was a prophet and that the Book was true, and denied it even so. He is describing a particular refusal by particular people, not pronouncing on a whole community.",
            "bn": "দুজন তাফসীরকার বিষয়টি শেষ করেন কাতাদার একটি বাক্য দিয়ে: অস্বীকার আসে কেবল চেনার পরেই। এই বিশেষ অর্থে, যা আপনি কখনো জানেননি তা অস্বীকার করা যায় না; জাহদ মানেই আগে জানা ছিল। তাবারীও কথাটি উল্লেখ করেন, আর বাগাভী এর সবচেয়ে কঠিন দিকটি সামনে আনেন: নবীর যুগে কিতাবধারীদের কেউ কেউ কুরআন অস্বীকার করেছিল, অথচ তারা জানত তিনি নবী আর কিতাবটি সত্য। তিনি নির্দিষ্ট কিছু লোকের নির্দিষ্ট অস্বীকারের কথা বলছেন, গোটা একটি সম্প্রদায়ের উপর রায় দিচ্ছেন না।"
          },
          {
            "en": "As-Sa'di reads the closing clause as a true restriction on who can disbelieve. Rejection cannot come, he argues, from anyone whose aim is to follow the truth; every person of sound intention is bound to believe, because of the clear proofs the Book carries, for anyone who has reason or who lends an attentive ear while present in heart. The severity of the verse, then, is aimed precisely at knowing refusal, and leaves the honest seeker entirely outside its reach.",
            "bn": "সা'দীর মতে শেষ অংশটি সত্যিই সীমা টেনে দেয়, কে অবিশ্বাস করতে পারে আর কে পারে না। তিনি বলেন, যার লক্ষ্য সত্যের অনুসরণ, তার কাছ থেকে অস্বীকার আসতেই পারে না। যার নিয়ত সৎ, সে ঈমান আনবেই, কারণ কিতাবে আছে স্পষ্ট প্রমাণ, যা বুঝতে পারে যার বুদ্ধি আছে সে, কিংবা যে মন হাজির রেখে কান পেতে শোনে। তাই আয়াতের কঠোরতা ঠিক জেনেশুনে অস্বীকারের দিকে তাক করা; সৎ সত্যসন্ধানী এর নাগালের পুরোপুরি বাইরে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Sign That Does Not Fade",
          "bn": "যে নিদর্শন কখনো ম্লান হয় না"
        },
        "p": [
          {
            "en": "Thus We sent down to you the Book draws the eye to the Book itself as the Prophet's defining sign. Earlier messengers were given wonders that their own generation witnessed and that passed away with them. Ibn Kathir notes that this Prophet was foretold in the earlier Scriptures as the unlettered prophet, and that the standing miracle given to him was not a wonder for the eye but a revelation for the heart, a recited Book that would outlast every age.",
            "bn": "'এভাবেই আমি তোমার প্রতি কিতাব নাজিল করেছি': এই কথা চোখ ফেরায় কিতাবের দিকেই, যা এই নবীর আসল পরিচয়ের নিদর্শন। আগের রাসূলদের দেওয়া হয়েছিল এমন অলৌকিক ঘটনা, যা তাঁদের নিজেদের যুগের লোকেরা দেখেছিল, আর যা তাঁদের সঙ্গেই চলে গেছে। ইবন কাসীর মনে করিয়ে দেন, আগের কিতাবগুলোতে এই নবীর কথা এসেছে উম্মি, অর্থাৎ নিরক্ষর নবী হিসেবে। আর তাঁকে দেওয়া স্থায়ী মুজিযা চোখে দেখার কোনো বিস্ময় নয়, বরং হৃদয়ের জন্য ওহি: এমন এক কিতাব, যা তিলাওয়াত করা হয় এবং যা যুগের পর যুগ পেরিয়ে টিকে থাকবে।"
          },
          {
            "en": "The point is sharpened by a hadith recorded in Sahih al-Bukhari, number 7274, on the authority of Abu Hurayra (RA). The Prophet ﷺ said: There was no prophet among the prophets but was given miracles because of which people had security or had belief, but what I was given was the Divine Inspiration which Allah revealed to me. So I hope that my followers will be more than those of any other prophet on the Day of Resurrection. The wording is Bukhari's own, and its place in his Sahih is its grading.",
            "bn": "সহীহ বুখারীর একটি হাদিস (নম্বর ৭২৭৪) কথাটাকে আরও স্পষ্ট করে। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: প্রত্যেক নবীকেই এমন নিদর্শন দেওয়া হয়েছিল, যা দেখে মানুষ নিরাপত্তা পেয়েছে বা ঈমান এনেছে। আর আমাকে যা দেওয়া হয়েছে তা হলো ওহি, যা আল্লাহ আমার প্রতি পাঠিয়েছেন। তাই আমি আশা করি, কিয়ামতের দিন অন্য যেকোনো নবীর চেয়ে আমার অনুসারী বেশি হবে। হাদিসের শব্দগুলো বুখারীর নিজের, আর তাঁর সহীহ গ্রন্থে স্থান পাওয়াটাই এর মানের প্রমাণ।"
          },
          {
            "en": "A wonder seen once belongs to the people who saw it; a Book recited belongs to everyone who hears it afterwards. That is why the believing the verse describes keeps happening, in both of the groups it named, long after the generation of its first hearers. The sign did not close with an event. It stays open on the page, holding out the same recognition to each new reader who comes to it without the will to refuse.",
            "bn": "একবার দেখা বিস্ময় শুধু তাদেরই, যারা তা দেখেছিল। কিন্তু তিলাওয়াত করা কিতাব তাদের সবার, যারা পরে তা শোনে। এ কারণেই আয়াতে যে ঈমানের কথা আছে, তা আজও ঘটে চলেছে, আয়াতে বলা দুই দলের মধ্যেই, প্রথম শ্রোতাদের যুগ পেরিয়ে বহু পরেও। নিদর্শনটি কোনো এক ঘটনার সঙ্গে ফুরিয়ে যায়নি। তা পাতায় খোলা পড়ে আছে, আর অস্বীকারের জেদ ছাড়া যে নতুন পাঠকই এর কাছে আসে, তার সামনে একই চেনার সুযোগ মেলে ধরে।"
          }
        ]
      },
      {
        "h": {
          "en": "It Names Believers, Not Enemies",
          "bn": "শত্রু নয়, বিশ্বাসীদের নাম"
        },
        "p": [
          {
            "en": "This verse must be read for what it plainly says. Its own point is that some of the People of the Book believe in the Qur'an, and it records their faith with honour before it mentions any denial. So it affirms believers among them; it does not condemn Jews or Christians as such. The rejection it names is jahd, the knowing denial of clear signs, wherever that occurs, and the verse licenses nothing whatever against any living Jewish or Christian person or community.",
            "bn": "এই আয়াতকে পড়তে হবে ঠিক যা সে স্পষ্ট বলছে, সেভাবেই। তার নিজের বক্তব্য হলো, কিতাবধারীদের কেউ কেউ কুরআনে ঈমান আনে; আর কোনো অস্বীকারের কথা তোলার আগেই আয়াত তাদের ঈমানের কথা সম্মানের সঙ্গে উল্লেখ করে। তাই আয়াত তাদের মধ্যকার মুমিনদের স্বীকৃতি দেয়; ইহুদি বা খ্রিষ্টানদের ঢালাওভাবে নিন্দা করে না। এখানে যে অস্বীকারের কথা আছে তা হলো জাহদ, স্পষ্ট নিদর্শনকে জেনেশুনে অস্বীকার করা, তা যেখানেই ঘটুক। আর জীবিত কোনো ইহুদি বা খ্রিষ্টান ব্যক্তি বা জনগোষ্ঠীর বিরুদ্ধে এই আয়াত কোনো কিছুরই অনুমতি দেয় না।"
          },
          {
            "en": "The word kafirun that closes the verse is defined by this act, not by lineage or origin. The commentators tie it to those whose habit is denial against knowledge, and the verse has just finished naming believers among both the People of the Book and the Makkans. The line it draws, then, runs through each person's response to the truth, not between whole communities. Al-Baghawi's remark about knowing deniers in the Prophet's day is a report of a particular refusal, never a verdict on a people.",
            "bn": "আয়াতের শেষে আসা 'কাফিরূন' শব্দটির পরিচয় এই কাজ দিয়ে, বংশ বা জন্মপরিচয় দিয়ে নয়। তাফসীরকারেরা শব্দটিকে জুড়েছেন তাদের সঙ্গে, যাদের অভ্যাসই জেনেশুনে অস্বীকার করা। আর আয়াত এইমাত্র কিতাবধারী ও মক্কাবাসী, দুই দিকেই মুমিনদের কথা বলেছে। তাই আয়াত যে রেখা টানে, তা গোটা সম্প্রদায়গুলোর মাঝে নয়; তা চলে প্রত্যেক মানুষ সত্যের ডাকে কীভাবে সাড়া দেয়, তার ভেতর দিয়ে। নবীর যুগের জেনেশুনে অস্বীকারকারীদের নিয়ে বাগাভীর মন্তব্য একটি নির্দিষ্ট প্রত্যাখ্যানের বিবরণ, কোনো জাতির উপর রায় নয়।"
          },
          {
            "en": "Turned toward the reader, the verse hands over a mirror and not a weapon. Its question is never which group a person belongs to, but what I did when the truth became clear to me. The honest course it points to is twofold: to follow what I have genuinely come to recognise rather than shelve it, and to receive another person's sincere witness to the truth on its merits, whoever they are. The verse shuts the door only on knowing refusal, and it leaves that door wide open for everyone else.",
            "bn": "পাঠকের দিকে ফিরলে আয়াত হাতে তুলে দেয় একটি আয়না, কোনো অস্ত্র নয়। আয়াতের প্রশ্ন কখনো এটা নয় যে কে কোন দলের। প্রশ্ন হলো: সত্য যখন আমার কাছে স্পষ্ট হলো, তখন আমি কী করলাম? আয়াত যে সৎ পথ দেখায় তার দুটি দিক। এক, যা সত্যিই চিনতে পেরেছি তা তুলে না রেখে মেনে চলা। দুই, অন্য কেউ আন্তরিকভাবে সত্যের সাক্ষ্য দিলে, সে যে-ই হোক, কথাটা তার নিজের গুণেই বিচার করে গ্রহণ করা। আয়াত দরজা বন্ধ করে শুধু জেনেশুনে অস্বীকারের মুখে; বাকি সবার জন্য দরজা হাট করে খোলা।"
          }
        ]
      }
    ]
  },
  "29:52": {
    "sections": [
      {
        "h": {
          "en": "Where the Demand Is Answered",
          "bn": "দাবির জবাব যেখানে"
        },
        "p": [
          {
            "en": "The passage just before this has the idolaters pressing a demand: why has no sign come down to him from his Lord (29:50)? The answer there is that the signs rest with Allah, and that the Messenger is only a clear warner. Then the Qur'an turns the question back on them: is it not enough for them that We sent down to you the Book, recited to them (29:51)? Ibn Kathir reads this as the Book being itself the great sign, greater than any other, that falsehood cannot reach. This verse is where that argument lands.",
            "bn": "এ আয়াতের ঠিক আগে মুশরিকরা এক দাবি তুলছে: তার রবের কাছ থেকে কোনো নিদর্শন নাজিল হয় না কেন (২৯:৫০)? সেখানে জবাব আসে, নিদর্শন তো আল্লাহরই কাছে, আর রাসূল কেবল একজন স্পষ্ট সতর্ককারী। এরপর কুরআন প্রশ্নটা তাদের দিকেই ঘুরিয়ে দেয়: এটা কি তাদের জন্য যথেষ্ট নয় যে আমি তোমার প্রতি কিতাব নাজিল করেছি, যা তাদের সামনে পড়া হয় (২৯:৫১)? ইবন কাসীর বলছেন, কিতাবই এখানে সেই মহা নিদর্শন, সব নিদর্শনের চেয়ে বড়, যার কাছে মিথ্যা ঘেঁষতে পারে না। এই আয়াতেই এই যুক্তিটা এসে থামে।"
          },
          {
            "en": "So when this verse opens with Say, the command answers people who would not accept the Book as proof and kept asking for something else. At-Tabari frames the address exactly this way: say to those of your people who deny Our signs and ask why a sign has not come down. The verse does not produce a new miracle for them. It calls a Witness instead. The matter moves from what they are willing to accept to what Allah already knows, and that shift is the whole point.",
            "bn": "তাই ৫২ আয়াত যখন \"বল\" দিয়ে শুরু হয়, তখন সেই কথা তাদের উদ্দেশে, যারা কিতাবকে প্রমাণ মানতে রাজি নয় আর বারবার আলাদা কিছু চাইছে। তাবারী ঠিক এভাবেই সম্বোধনটা বোঝেন: বলো তোমার সেই সম্প্রদায়কে, যারা আমার নিদর্শন অস্বীকার করে আর জিজ্ঞেস করে কেন কোনো নিদর্শন নামল না। আয়াত তাদের জন্য নতুন কোনো মুজিজা হাজির করে না। বরং ডেকে আনে একজন সাক্ষীকে। ব্যাপারটা তারা কী মানবে সেখান থেকে সরে গিয়ে পৌঁছায় আল্লাহ কী জানেন সেখানে, আর এই সরে যাওয়াটাই আসল কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Allah Enough as Witness",
          "bn": "সাক্ষী হিসেবে আল্লাহই যথেষ্ট"
        },
        "p": [
          {
            "en": "The words are Kafa bi'Llahi bayni wa baynakum shahida: sufficient is Allah, between me and you, as Witness. At-Tabari catches a balance in it that is easy to miss. Allah is called a witness for me and against me, li wa alayya. The Prophet does not ask only for a witness in his favour; he submits to a witness who will testify either way, because He alone tells the truthful from the false among them. A man who knew he was lying would never call such a court.",
            "bn": "শব্দগুলো হলো কাফা বিল্লাহি বাইনী ওয়া বাইনাকুম শহীদা: আমার আর তোমাদের মাঝে সাক্ষী হিসেবে আল্লাহই যথেষ্ট। তাবারী এর ভেতরে এমন একটা ভারসাম্য ধরেন যা সহজে চোখ এড়িয়ে যায়। আল্লাহকে বলা হচ্ছে আমার পক্ষে এবং আমার বিপক্ষে সাক্ষী, লী ওয়া আলাইয়া। নবী ﷺ শুধু নিজের পক্ষের সাক্ষী চান না। তিনি এমন সাক্ষীর কাছে নিজেকে সঁপে দেন যিনি যেদিকেই হোক সাক্ষ্য দেবেন, কারণ সত্যবাদীকে মিথ্যাবাদী থেকে একমাত্র তিনিই আলাদা করতে পারেন। নিজেকে মিথ্যুক জেনে কেউ এমন আদালত ডাকে না।"
          },
          {
            "en": "What is Allah witnessing to? The Muyassar answers in two directions at once: to the Messenger's truthfulness, that he is indeed Allah's messenger, and to the hearers' denial, their rejection of the truth he brought from Allah. Al-Qurtubi and al-Baghawi name the content the same way: that he is His messenger and that this Qur'an is His Book. So the testimony is not a vague show of support. It is specific, and it cuts both ways across the dispute.",
            "bn": "আল্লাহ কীসের সাক্ষ্য দিচ্ছেন? মুয়াসসার একসঙ্গে দুই দিকের জবাব দেয়: রাসূলের সত্যবাদিতার, অর্থাৎ তিনি সত্যিই আল্লাহর রাসূল; আর শ্রোতাদের অস্বীকারের, অর্থাৎ আল্লাহর কাছ থেকে তিনি যে সত্য এনেছেন তা তারা প্রত্যাখ্যান করেছে। কুরতুবী আর বাগাভীও সাক্ষ্যের বিষয় একইভাবে বলেন: তিনি তাঁর রাসূল, আর এই কুরআন তাঁর কিতাব। কাজেই এই সাক্ষ্য কোনো ভাসা-ভাসা সমর্থন নয়। তা সুনির্দিষ্ট, আর বিবাদের দুই পক্ষের বেলাতেই খাটে।"
          }
        ]
      },
      {
        "h": {
          "en": "He Who Misses Nothing",
          "bn": "যাঁর কাছে কিছু গোপন নয়"
        },
        "p": [
          {
            "en": "Why should a witness who cannot be seen or heard be enough? The verse answers at once: He knows what is in the heavens and the earth. Ibn Kathir reduces it to a line, nothing hidden is hidden from Him. As-Sa'di builds the argument out. If it troubles you that a testimony should count when you have neither seen nor heard the Witness, then remember that among the things He knows are my state, your state, and the very words I am saying to you now. Knowledge that complete does not need to be seen to be trusted.",
            "bn": "যাকে কেউ দেখে না, শোনে না, তেমন সাক্ষী যথেষ্ট হবে কেন? আয়াত সঙ্গে সঙ্গে জবাব দেয়: আসমান ও যমীনে যা আছে তিনি তা জানেন। ইবন কাসীর কথাটা এক লাইনে নামিয়ে আনেন, তাঁর কাছে গোপন কিছুই গোপন নয়। সাদী যুক্তিটা আরও খুলে দেন। যদি এটা আপনাকে খচখচ করে যে সাক্ষীকে দেখেননি, শোনেননি, তবু তাঁর সাক্ষ্য গ্রাহ্য, তাহলে মনে রাখুন তিনি যা জানেন তার মধ্যে আমার অবস্থা, তোমাদের অবস্থা, আর এই মুহূর্তে আমি যা বলছি সবই আছে। এত পূর্ণ জ্ঞানকে বিশ্বাস করতে তা চোখে দেখার দরকার হয় না।"
          },
          {
            "en": "Al-Qurtubi points out why this binds the deniers in particular. They already concede that Allah knows all things; it is part of what they say they believe. Once that is granted, they are bound to concede His witness too, because a knower of everything is exactly the witness no fact can escape. The verse does not argue from something they reject. It argues from something they have already admitted, and closes the gap between the two.",
            "bn": "কুরতুবী দেখান, এই যুক্তি অস্বীকারকারীদের ঠিক কোথায় বাঁধে। তারা তো আগেই মেনে নেয় যে আল্লাহ সব জানেন; এটা তাদের স্বীকৃত বিশ্বাসেরই অংশ। একবার এটা মানলে তাঁর সাক্ষ্যও মানতে তারা বাধ্য, কারণ যিনি সব জানেন তিনিই তো সেই সাক্ষী যাঁর কাছ থেকে কোনো ঘটনা পালায় না। আয়াত এমন কিছু থেকে যুক্তি টানে না যা তারা অস্বীকার করে। টানে এমন কিছু থেকে যা তারা আগেই স্বীকার করেছে, আর দুইয়ের মাঝের ফাঁকটা বন্ধ করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Testimony That Clears Him",
          "bn": "যে সাক্ষ্য নির্দোষ প্রমাণ করে"
        },
        "p": [
          {
            "en": "Both Ibn Kathir and as-Sa'di read a second thing into the witness: it clears the Messenger by what it has not done. If I were inventing lies against Allah, Ibn Kathir has the sense run, He would have taken His vengeance on me. He cites the warning given elsewhere, that had the Prophet forged any saying against Allah, He would have seized him by the right hand and cut his aorta (69:44 to 69:47). The punishment did not fall. Its absence, over years, is itself a kind of testimony.",
            "bn": "ইবন কাসীর আর সাদী দুজনেই এই সাক্ষ্যে আরেকটি দিক দেখেন: আল্লাহ যা করেননি, তা দিয়েই এই সাক্ষ্য রাসূলকে নির্দোষ প্রমাণ করে। ইবন কাসীরের ব্যাখ্যায় কথাটা এমন: আমি যদি আল্লাহর নামে মিথ্যা বানাতাম, তিনি আমার উপর প্রতিশোধ নিতেন। তিনি অন্য জায়গার সতর্কবাণীটিও আনেন: নবী ﷺ যদি আল্লাহর নামে কোনো কথা বানিয়ে বলতেন, তবে তিনি তাঁকে ডান হাতে পাকড়াও করতেন, তারপর তাঁর জীবন-ধমনী কেটে দিতেন (৬৯:৪৪ থেকে ৬৯:৪৭)। সেই শাস্তি আসেনি। বছরের পর বছর তা না আসাটাই এক রকম সাক্ষ্য।"
          },
          {
            "en": "As-Sa'di sharpens the logic. I have called Him to witness, he has the Prophet say; if I am lying, let Him bring down on me what would warn you, and if instead He keeps aiding me and easing my affairs, let that grand testimony be enough for you. For a fabricator to go on supported, while the Knower of all things sees the lie and holds the power to punish it, would impugn His knowledge, His power, and His wisdom at once. The continued support is the verdict.",
            "bn": "সাদী যুক্তিটা আরও ধারালো করেন। আমি তাঁকে সাক্ষী ডেকেছি, নবীর জবানিতে তিনি বলেন; আমি মিথ্যুক হলে তিনি আমার উপর নামিয়ে আনুন সেই শাস্তি যা তোমাদের সতর্ক করে, আর তিনি যদি উল্টো আমাকে সাহায্য করতেই থাকেন আর আমার কাজ সহজ করে দেন, তবে এই মহান সাক্ষ্যই তোমাদের জন্য যথেষ্ট হোক। এক মিথ্যা রচয়িতা যদি সাহায্য পেতেই থাকে, অথচ সর্বজ্ঞ সত্তা মিথ্যাটা দেখছেন আর শাস্তি দেওয়ার ক্ষমতাও রাখেন, তবে তা একসঙ্গে তাঁর জ্ঞান, ক্ষমতা আর প্রজ্ঞার উপর দাগ ফেলে। অব্যাহত এই সাহায্যই তো রায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Book Was the Sign",
          "bn": "নিদর্শন ছিল কিতাবই"
        },
        "p": [
          {
            "en": "The demand that opened the passage was for a sign like the ones earlier prophets had been given. A sound hadith, which Ibn Kathir places in his comment on these very verses, answers that demand directly. Abu Hurayrah reports that the Prophet said: Every Prophet was given miracles because of which people believed, but what I have been given is Divine Inspiration which Allah has revealed to me. So I hope that my followers will outnumber the followers of the other Prophets on the Day of Resurrection. It is recorded by al-Bukhari, who grades his collection sound, and by Muslim.",
            "bn": "অংশটির শুরুতে দাবি ছিল, আগের নবীদের যেমন নিদর্শন দেওয়া হয়েছিল, তেমন একটা নিদর্শন চাই। একটি সহিহ হাদিস সরাসরি এই দাবির জবাব দেয়; ইবন কাসীর হাদিসটি এনেছেন ঠিক এই আয়াতগুলোর তাফসীরে। আবু হুরায়রা (রাঃ) বর্ণনা করেন, নবী ﷺ বলেছেন: প্রত্যেক নবীকে এমন মুজিজা দেওয়া হয়েছিল, যা দেখে মানুষ ঈমান এনেছে। আর আমাকে যা দেওয়া হয়েছে তা হলো ওহি, যা আল্লাহ আমার প্রতি নাজিল করেছেন। তাই আমি আশা করি, কিয়ামতের দিন অন্য সব নবীর চেয়ে আমার অনুসারী বেশি হবে। হাদিসটি বর্ণনা করেছেন বুখারি, যিনি তাঁর সংকলনের সব হাদিসকে সহিহ বলে গণ্য করেন, এবং মুসলিমও।"
          },
          {
            "en": "The hadith names the Qur'an itself as this Prophet's standing miracle. Earlier signs were seen once and passed; a revelation can be recited, memorised, examined, and tested in every generation, which is why he ties to it the hope of the largest following. It fits the verse's logic exactly. They asked for a sign and were handed a Book, then handed a Witness who knows all. The proof they kept asking for was the proof already in their hands.",
            "bn": "হাদিসটি কুরআনকেই এই নবীর স্থায়ী মুজিজা বলে চিনিয়ে দেয়। আগের নিদর্শনগুলো একবার দেখা যেত, তারপর ফুরিয়ে যেত; কিন্তু ওহি তো প্রতি যুগে পড়া যায়, মুখস্থ করা যায়, যাচাই করা যায়, পরীক্ষা করা যায়, তাই তার সঙ্গেই তিনি জুড়ে দেন সবচেয়ে বড় অনুসারী-দলের আশা। আয়াতের যুক্তির সঙ্গে এটি হুবহু মেলে। তারা নিদর্শন চেয়েছিল, হাতে পেল কিতাব, তারপর পেল এমন এক সাক্ষী যিনি সব জানেন। যে প্রমাণ তারা বারবার চাইছিল, সে প্রমাণ তো তাদের হাতেই ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "To Trust in the Void",
          "bn": "শূন্যের উপর ভরসা"
        },
        "p": [
          {
            "en": "The verse turns to the other party with a phrase that carries a quiet irony: those who have believed in falsehood, al-ladhina amanu bi'l-batil. Batil is the Qur'an's word for what is empty, void, and bound to perish, the opposite of al-haqq, the real and the lasting. To believe in batil is to place faith and trust in exactly that. The word amanu, they believed, is the same verb used for faith in Allah. The sentence does not accuse them of refusing to believe. It says they did believe, and gave that belief to nothing.",
            "bn": "আয়াত এবার অন্য পক্ষের দিকে ফেরে, এমন এক কথায় যার ভেতরে চাপা শ্লেষ আছে: যারা মিথ্যায় বিশ্বাস করেছে, আল্লাযীনা আমানূ বিল-বাতিল। যা ফাঁপা, অন্তঃসারশূন্য আর ধ্বংস হতে বাধ্য, কুরআন তাকেই বলে বাতিল; এর উল্টো হলো হক, যা বাস্তব আর স্থায়ী। বাতিলে বিশ্বাস করা মানে ঠিক এমন জিনিসের উপরেই আস্থা আর ভরসা রাখা। 'আমানূ', অর্থাৎ তারা বিশ্বাস করেছে: আল্লাহর প্রতি ঈমানের বেলায় এই একই ক্রিয়া ব্যবহার হয়। বাক্যটি তাদের বিশ্বাস না করার দোষ দেয় না। বরং বলে, তারা বিশ্বাস ঠিকই করেছিল, কিন্তু সেই বিশ্বাস উজাড় করে দিয়েছিল শূন্যের পায়ে।"
          },
          {
            "en": "The commentators fill in what the nothing was. At-Tabari, and Qatada before him, reads al-batil here as shirk, the ascribing of partners. Al-Qurtubi collects two namings: Yahya ibn Sallam took it to mean Iblis, and Ibn Shajara took it to mean the worship of idols and images. Al-Baghawi adds Ibn Abbas, who glossed it as belief in other than Allah, and Muqatil, who read it as the worship of Shaytan. The namings differ; the shape does not. Each is a something that cannot bear the weight of a life.",
            "bn": "এই শূন্য জিনিসটা আসলে কী, তাফসীরকারেরা তা খুলে বলেন। তাবারী, আর তাঁর আগে কাতাদা, এখানে বাতিল বলতে বোঝেন শিরক, অর্থাৎ আল্লাহর সঙ্গে শরিক করা। কুরতুবী দুটি মত একসঙ্গে উল্লেখ করেন: ইয়াহইয়া ইবন সাল্লামের মতে এর অর্থ ইবলিস, আর ইবন শাজারার মতে মূর্তি ও প্রতিমার পূজা। বাগাভী যোগ করেন ইবন আব্বাস (রাঃ)-এর ব্যাখ্যা, আল্লাহ ছাড়া অন্য কিছুতে বিশ্বাস, আর মুকাতিলের ব্যাখ্যা, শয়তানের পূজা। নামগুলো আলাদা, কিন্তু মূল কথা একই। প্রত্যেকটিই এমন কিছু, যার উপর একটা জীবনের ভার রাখা যায় না।"
          },
          {
            "en": "Then the clause completes: and disbelieved in Allah, wa kafaru bi'Llah. At-Tabari glosses this disbelief as jahadu'Llah, they denied Him outright. Al-Qurtubi sets it against their denial of His messengers and their rejection of His Book. So the two halves mirror each other: belief poured into the void, and denial aimed at the Real Himself. It is a full inversion, trust and rejection both pointed the wrong way.",
            "bn": "এরপর বাক্যটি পূর্ণ হয়: আর আল্লাহকে অস্বীকার করেছে, ওয়া কাফারূ বিল্লাহ। তাবারী এই কুফরের ব্যাখ্যা করেন 'জাহাদুল্লাহ' বলে, অর্থাৎ তারা সরাসরি তাঁকেই অস্বীকার করেছে। কুরতুবী এর পাশে রাখেন তাঁর রাসূলদের প্রতি তাদের অস্বীকার আর তাঁর কিতাবের প্রত্যাখ্যান। এভাবে দুই অংশ একে অপরের প্রতিচ্ছবি: বিশ্বাস ঢেলে দেওয়া হলো শূন্যে, আর অস্বীকার তাক করা হলো যিনি পরম সত্য, স্বয়ং তাঁর দিকে। পুরোপুরি উল্টে যাওয়া: আস্থা আর প্রত্যাখ্যান, দুটোই ভুল দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Losers in the Bargain",
          "bn": "লেনদেনে যারা ঠকল"
        },
        "p": [
          {
            "en": "The sentence ends with a single word of judgement: ulaika humu'l-khasirun, it is those who are the losers. At-Tabari reaches for a commercial image to explain khusran. They are al-maghbunun fi safqatihim, the ones cheated in their bargain, who closed a deal and came away worse than they went in. Khasir in Arabic is first of all the trader who loses his capital. The verse is saying that a whole life was staked, and the return on it was nothing.",
            "bn": "বাক্যটা শেষ হয় একটিমাত্র রায়ের শব্দে: উলাইকা হুমুল-খাসিরূন, তারাই হলো ক্ষতিগ্রস্ত। খুসরান বোঝাতে তাবারী একটা ব্যবসায়িক ছবি টানেন। তারা আল-মাগবূনূন ফী সাফকাতিহিম, লেনদেনে যারা ঠকেছে, যারা দরদাম সেরে ঘরে ফিরল আগের চেয়ে খারাপ অবস্থায়। আরবিতে খাসির মানে সবার আগে সেই ব্যবসায়ী যে মূলধন খোয়ায়। আয়াত বলছে, গোটা একটা জীবন বাজি ধরা হলো, আর তার মুনাফা দাঁড়াল শূন্য।"
          },
          {
            "en": "As-Sa'di itemises the loss. They lost faith in Allah, His angels, His books, His messengers, and the Last Day; they lost the lasting bliss; and in exchange for sound truth they took every ugly falsehood, and in exchange for the bliss, every painful punishment. On the Day of Resurrection, he says, they lose their very selves and their families. Al-Qurtubi names the same bottom line more briefly: they lost themselves and their works in the Hereafter. Underneath the whole verse lies one quiet warning: everyone stakes a life on something, and the only question is whether the thing can pay.",
            "bn": "সাদী ক্ষতির হিসাবটা একে একে খোলেন। তারা হারাল আল্লাহ, তাঁর ফেরেশতা, তাঁর কিতাব, তাঁর রাসূল আর শেষ দিনের উপর ঈমান; হারাল স্থায়ী নিয়ামত; আর খাঁটি সত্যের বদলে নিল প্রতিটি কুৎসিত মিথ্যা, নিয়ামতের বদলে প্রতিটি যন্ত্রণাদায়ক শাস্তি। কিয়ামতের দিন, তিনি বলেন, তারা হারায় নিজেদের সত্তাকে আর নিজেদের পরিবারকে। কুরতুবী একই শেষ কথাটা আরও সংক্ষেপে বলেন: আখিরাতে তারা হারাল নিজেদের আর নিজেদের আমল। গোটা আয়াতের নিচে চাপা আছে একটি শান্ত সতর্কবাণী: প্রত্যেকেই কোনো না কোনো কিছুর উপর জীবন বাজি রাখে, প্রশ্ন শুধু সেই জিনিস সেই দাম শোধ করতে পারে কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Describing Loss, Licensing Nothing",
          "bn": "ক্ষতির বর্ণনা, কারও বিরুদ্ধে নয়"
        },
        "p": [
          {
            "en": "A word on what this verdict is and is not. The losers it names are those who, with the proof before them, invested belief in falsehood and turned from Allah. The verse describes a spiritual outcome, a loss measured on the Day of Resurrection, and it licenses nothing against any living person or community. No one is given the standing here to call another a loser, since no one but Allah reads the heart the verse hands the matter to. It is a mirror held up to one's own belief, not a label to pin on a neighbour.",
            "bn": "এই রায়টা কী আর কী নয়, তা নিয়ে এক কথা বলা দরকার। যাদের ক্ষতিগ্রস্ত বলা হচ্ছে, তারা হলো সেই লোক, যারা সামনে প্রমাণ থাকা সত্ত্বেও মিথ্যায় বিশ্বাস ঢেলেছে আর আল্লাহ থেকে মুখ ফিরিয়েছে। আয়াত একটা আত্মিক পরিণতির বর্ণনা দেয়, কিয়ামতের দিন মাপা একটা ক্ষতির, আর কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে কিছুরই অনুমতি দেয় না। এখানে কাউকে এই অধিকার দেওয়া হয়নি যে সে অন্যকে ক্ষতিগ্রস্ত বলে ডাকবে, কারণ অন্তর তো আল্লাহ ছাড়া কেউ পড়ে না, আর আয়াত ব্যাপারটা তাঁরই হাতে সঁপেছে। এ এক আয়না, নিজের বিশ্বাসের দিকে ধরা, প্রতিবেশীর গায়ে সাঁটা কোনো লেবেল নয়।"
          },
          {
            "en": "So the verse leaves a believer with two questions rather than a target. The first is the Prophet's own posture under rejection: when those you most want to convince turn away, can you rest the case with the One who knows what is in the heavens and the earth, and keep going? The second is the question the losers failed to ask of themselves: what have I actually given my belief to, and can it carry the weight I have put on it? Answer those two honestly and the verse has done its work.",
            "bn": "তাই আয়াত একজন মুমিনের হাতে কোনো নিশানা নয়, বরং দুটি প্রশ্ন তুলে দেয়। প্রথমটা নবীর নিজের ভঙ্গি, প্রত্যাখ্যানের মুখে: যাদের বোঝাতে সবচেয়ে বেশি চান তারা যখন মুখ ফিরিয়ে নেয়, তখন কি ব্যাপারটা সেই সত্তার হাতে ছেড়ে দিয়ে এগিয়ে যেতে পারেন, যিনি আসমান ও যমীনের সব জানেন? দ্বিতীয়টা সেই প্রশ্ন, যা ক্ষতিগ্রস্তরা নিজেদের করতে ভুলেছিল: আমি আসলে কীসে আমার বিশ্বাস দিয়েছি, আর যে ভার তার উপর চাপিয়েছি সে কি তা বইতে পারবে? এই দুটি প্রশ্নের সৎ জবাব দিন, আয়াত তার কাজ সেরে ফেলল।"
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
          "bn": "অংশটি কোথায় যাচ্ছে"
        },
        "p": [
          {
            "en": "29:56 addresses believing servants directly: My earth is spacious, so worship Me. 29:57 follows with every soul tasting death and then being returned to Him, and 29:58 promises chambers in Paradise to those who believe and work righteousness. 29:59 then names them: those who were patient and who rely upon their Lord. Our verse comes immediately after that naming, and it reads best as the argument attached to the word tawakkul in the line before it.",
            "bn": "29:56 সরাসরি ঈমানদার বান্দাদের সম্বোধন করে: আমার যমীন প্রশস্ত, কাজেই আমারই ইবাদত করো। এরপর 29:57 বলে, প্রত্যেক প্রাণ মৃত্যুর স্বাদ নেবে, তারপর তাদের তাঁর দিকেই ফিরিয়ে নেওয়া হবে; আর 29:58 প্রতিশ্রুতি দেয় জান্নাতের কক্ষের, তাদের জন্য যারা ঈমান আনে ও সৎকাজ করে। এরপর 29:59 তাদের পরিচয় দেয়: যারা ধৈর্য ধরেছে এবং তাদের প্রতিপালকের ওপর ভরসা করে। আলোচ্য আয়াতটি ঠিক এই পরিচয়ের পরপরই আসে, আর একে আগের আয়াতের 'তাওয়াক্কুল' শব্দটির সঙ্গে জুড়ে দেওয়া যুক্তি হিসেবে পড়াই সবচেয়ে ভালো।"
          },
          {
            "en": "That placement decides the tone. The verse is not consoling someone who has lost his income; it is answering a believer who has been told to act and is quietly calculating the cost. Commentators connect the passage with the situation of Muslims weighing whether to leave their homes, and the reports about that connection vary. The surah itself supplies enough: a command requiring movement, a mention of patience and reliance, and then a sentence about who feeds whom.",
            "bn": "এই অবস্থানই সুরটি ঠিক করে দেয়। আয়াতটি এমন কাউকে সান্ত্বনা দিচ্ছে না যে তার আয় হারিয়েছে; বরং জবাব দিচ্ছে এমন এক মুমিনকে, যাকে কাজে নামতে বলা হয়েছে আর যে মনে মনে খরচের হিসাব কষছে। মুফাসসিরগণ এই অংশটিকে সেই মুসলিমদের অবস্থার সঙ্গে যুক্ত করেন, যারা ঘরবাড়ি ছেড়ে যাওয়ার কথা ভাবছিলেন, তবে এ নিয়ে বর্ণনাগুলো ভিন্ন ভিন্ন। সূরা নিজেই যথেষ্ট ইঙ্গিত দেয়: এমন এক নির্দেশ, যা মানতে হলে জায়গা ছাড়তে হয়; ধৈর্য ও ভরসার উল্লেখ; তারপর একটি বাক্য, কে কাকে খাওয়ায়।"
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
            "bn": "কাআইয়্যিন মিন দাব্বাহ: কত যে প্রাণী! কথাটা পরিমাণ বোঝায়, আর শ্রোতাকে এমন এক হিসাব গুনতে ডাকে, যা সে জানে কোনোদিন শেষ করতে পারবে না। এ আয়াত কী বলে না, সেটাও লক্ষ করুন। ১১:৬ এই নিশ্চয়তাকে বলে 'আলাল্লাহ', অর্থাৎ আল্লাহ নিজেই এর দায়িত্ব নিয়েছেন, আর এর ক্ষেত্র বেঁধে দেয় যমীনে বিচরণশীল প্রাণী দিয়ে। এখানে দায়িত্ব বোঝানো কোনো অব্যয় নেই, জায়গারও কোনো সীমা নেই। আছে শুধু 'আল্লাহু ইয়ারযুকুহা': আল্লাহই তাকে রিযক দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying No Store",
          "bn": "যার কোনো সঞ্চয় নেই"
        },
        "p": [
          {
            "en": "La tahmilu rizqaha — it does not carry its provision. The commentators read this chiefly of storing: creatures that keep no granary and set nothing aside, and are fed all the same. Some also take the verb in the sense of being too weak to bear it. Either way the creature is described by what it lacks, and the lack is presented as no obstacle whatever to its being fed on the day it needs feeding.",
            "bn": "লা তাহমিলু রিযকাহা: সে নিজের রিযক বয়ে বেড়ায় না। মুফাসসিরগণ এর প্রধান অর্থ নেন সঞ্চয় না করা: এমন প্রাণী, যাদের কোনো গোলা নেই, যারা কিছুই জমিয়ে রাখে না, তবু তারা খাবার পায়। কেউ কেউ ক্রিয়াটির অর্থ এমনও নেন যে, রিযক বয়ে বেড়ানোর শক্তিই তার নেই। যেভাবেই পড়া হোক, প্রাণীটির পরিচয় দেওয়া হয়েছে তার অভাব দিয়ে। অথচ যেদিন তার খাবার দরকার, সেদিন খাবার পেতে এই অভাব কোনো বাধাই নয়।"
          },
          {
            "en": "At-Tirmidhi relates from Umar (RA) that the Prophet ﷺ said: if you relied upon Allah with true reliance, He would provide for you as He provides for the birds — they go out hungry in the morning and return full. The detail worth keeping is the hunger at dawn. The guarantee in this verse is not a stock deposited in advance; it is a delivery made daily, and the birds begin every single morning with nothing at all in hand.",
            "bn": "ইমাম তিরমিযী উমার (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: তোমরা যদি আল্লাহর ওপর যথাযথভাবে ভরসা করতে, তবে তিনি তোমাদের রিযক দিতেন যেভাবে পাখিদের দেন — তারা সকালে ক্ষুধার্ত অবস্থায় বের হয় আর পেট ভরে ফিরে আসে। ধরে রাখার মতো বিষয়টি হলো ভোরের সেই ক্ষুধা। এই আয়াতের নিশ্চয়তা আগে থেকে জমিয়ে রাখা কোনো ভাণ্ডার নয়; এটি প্রতিদিনের সরবরাহ, আর পাখিরা প্রতিটি সকাল শুরু করে হাতে কিছুই না নিয়ে।"
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
            "bn": "এরপর আসে সেই অংশ, যার উপর পুরো আয়াত ঘুরে দাঁড়ায়: আল্লাহু ইয়ারযুকুহা ওয়া ইয়্যাকুম, আল্লাহ তাকে রিযক দেন এবং তোমাদেরকেও। আয়াত পাঠককে প্রাণীটির সঙ্গে একই বাক্যে বসিয়ে দেয়, আর একটিমাত্র ক্রিয়া দুজনকেই ধরে। মানুষের দুশ্চিন্তা বেঁচে থাকে এ দুটিকে আলাদা রেখে: পাখির দরকার সামান্য, আয়ুও অল্প; কিন্তু আমার খরচ জটিল, আর আমার উপর যারা নির্ভর করে তারা তো সত্যিকারের মানুষ। আরবি এই আলাদা করা মানে না; একটিমাত্র কাজ দিয়ে সে দুই পক্ষকেই ছুঁয়ে দেয়।"
          },
          {
            "en": "17:31 uses the same move against a sharper fear. There people are told not to kill their children out of fear of poverty, and the reason given is that We provide for them and for you. The order in that verse puts the children first, because they were the ones whose maintenance was being doubted. In both places the argument is identical: the one you are afraid you cannot feed is already on somebody else's list.",
            "bn": "17:31 একই কৌশল ব্যবহার করে আরও তীব্র এক ভয়ের বিরুদ্ধে। সেখানে মানুষকে বলা হয়েছে, দারিদ্র্যের ভয়ে নিজেদের সন্তানদের হত্যা কোরো না, আর কারণ হিসেবে বলা হয়েছে — আমিই তাদেরকে ও তোমাদেরকে রিযক দিই। ঐ আয়াতের ক্রমে সন্তানরা আগে, কারণ তাদের ভরণপোষণ নিয়েই সন্দেহ করা হচ্ছিল। দুই জায়গাতেই যুক্তি একই: যাকে খাওয়াতে পারবেন না বলে আপনি ভয় পাচ্ছেন, সে ইতিমধ্যেই অন্য কারও তালিকায় আছে।"
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
            "bn": "আয়াতটি শেষ হয় একটি নয়, দুটি নাম দিয়ে: আস-সামী' ও আল-আলীম। দুটিই বেছে নেওয়া। তিনি শোনেন, তাই মুখে বলা প্রয়োজনে সাড়া দেন: রাতের বেলা মুখ ফুটে করা সেই দোয়া, যার কথা মানুষটি আর কাউকে বলেনি। তিনি জানেন, তাই না-বলা প্রয়োজনেও সাড়া দেন, এমনকি যে প্রয়োজন মানুষ নিজের ভেতরে এখনো চিনতেই পারেনি। এই দুই নাম মিলে চাওয়া আর না-চাওয়া, দুটোই ঢেকে দেয়; আর মানুষের সব দুশ্চিন্তা এর মধ্যেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Trust That Still Goes Out",
          "bn": "যে ভরসা তবু বেরিয়ে পড়ে"
        },
        "p": [
          {
            "en": "Nothing here cancels effort, and the same surah says so. In 29:17 Ibrahim (AS) tells his people that the things they worship besides Allah possess no provision for them, and then commands: so seek provision from Allah, worship Him, and be grateful to Him. Seeking is an imperative in that sentence. The verse under discussion changes the address to which the request is sent, not the fact that a person gets up and works for it.",
            "bn": "এখানে পরিশ্রম বাতিল হচ্ছে না, আর এই সূরাই তা বলে দেয়। 29:17-এ ইবরাহীম (আঃ) তাঁর সম্প্রদায়কে বলেন, আল্লাহ ছাড়া তারা যাদের ইবাদত করে তাদের হাতে তাদের জন্য কোনো রিযক নেই; তারপর নির্দেশ দেন — কাজেই আল্লাহর কাছে রিযক তালাশ করো, তাঁর ইবাদত করো, আর তাঁর কৃতজ্ঞতা আদায় করো। ঐ বাক্যে 'তালাশ করা' একটি আদেশ। আলোচ্য আয়াতটি বদলে দেয় আবেদনটি কোন ঠিকানায় পাঠানো হবে, কিন্তু মানুষ যে উঠে গিয়ে তার জন্য পরিশ্রম করে সেই বাস্তবতা বদলায় না।"
          },
          {
            "en": "The guarantee also has a shape, and 29:62 supplies it two verses later: Allah extends provision for whom He wills of His servants and restricts it. Sustenance is promised; abundance is not. Reading 29:60 without 29:62 turns a promise of being fed into a promise of being comfortable, which this surah never made. The anxiety the verse removes is about survival and about being remembered, not about the size of the portion.",
            "bn": "এই নিশ্চয়তারও একটি আকার আছে, আর দুই আয়াত পরে 29:62 সেটি দিয়ে দেয়: আল্লাহ তাঁর বান্দাদের মধ্যে যার জন্য চান রিযক প্রশস্ত করেন, আর যার জন্য চান সীমিত করেন। জীবিকার প্রতিশ্রুতি আছে; প্রাচুর্যের নেই। 29:62 বাদ দিয়ে 29:60 পড়লে খাওয়ানোর প্রতিশ্রুতি স্বচ্ছলতার প্রতিশ্রুতিতে বদলে যায়, যা এই সূরা কখনোই দেয়নি। আয়াতটি যে উদ্বেগ সরায় তা বেঁচে থাকা ও স্মরণে থাকা নিয়ে, অংশের আকার নিয়ে নয়।"
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
            "bn": "এই আয়াতের মূল্যায়নটি কুরআনে অন্যত্রও এসেছে, তবে ঠিক এই শব্দগুলোতে নয়। 6:32 আয়াত শুরু হয় 'ওয়া মা-ল হায়াতুদ দুনইয়া' — আর দুনিয়ার জীবন তো কিছুই নয়। আর এই আয়াত শুরু হয় 'ওয়া মা হাযিহিল হায়াতুদ দুনইয়া' — আর এই দুনিয়ার জীবন তো কিছুই নয়। পার্থক্যটা পুরোটাই নির্দেশক শব্দ 'হাযিহি', অর্থাৎ 'এই'। একটি নির্দেশক শব্দ সাধারণ মূল্যায়নটিকে তুলে এনে ঠিক সেই জীবনের উপর বসিয়ে দেয় যা শ্রোতা এই মুহূর্তে যাপন করছে।"
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
            "bn": "৬:৩২ দুটি জিনিসের নাম নিয়েই থেমে যায়: প্রথমে লা'ইব, অর্থাৎ খেলা; তারপর লাহও, অর্থাৎ যা মানুষকে আসল কাজ ভুলিয়ে রাখে। এই আয়াত সেই একই দুটির নাম নেয়, তবে উল্টো ক্রমে: আগে লাহও, পরে লা'ইব। ৪৭:৩৬ আয়াত ৬:৩২-এর ক্রমই রাখে, কিন্তু 'ওয়া মা … ইল্লা' গঠনের বদলে 'ইন্নামা' ব্যবহার করে। আর ৫৭:২০ একই মূল্যায়নকে পাঁচটি বিষয়ে ছড়িয়ে দেয়, যার শেষে আছে এমন ফসল, যা শুকিয়ে হলুদ হয়ে যায়। কুরআন রায়টি বারবার দেয়, কেবল সাজানোটা বদলায়; এভাবেই সে বুঝিয়ে দেয় যে বিষয়টি মীমাংসিত। (বাংলা অনুবাদে দুই আয়াতেই শব্দ দুটি একসঙ্গে এসেছে, ৬:৩২-এ 'খেল-তামাশা', এখানে 'ক্রীড়া-কৌতুক'; তাই ক্রমটি কেবল আরবিতেই ধরা পড়ে।)"
          },
          {
            "en": "The two words are not synonyms. La'ib is play: exertion that produces nothing and was never intended to. Lahw comes from a root carrying the sense of being turned away from something, so it is the diversion that occupies a person while what matters goes unattended. Putting lahw first here begins with the more serious of the two — not the harmlessness of the activity but the thing it is keeping you from.",
            "bn": "শব্দ দুটি সমার্থক নয়। লা'ইব হলো খেলা: এমন পরিশ্রম, যা কিছুই উৎপন্ন করে না, আর যার উদ্দেশ্যও কখনো তা ছিল না। লাহও এসেছে এমন এক ধাতু থেকে, যার মধ্যে আছে কোনো কিছু থেকে মুখ ফিরিয়ে নেওয়ার অর্থ; তাই লাহও সেই বিনোদন, যা মানুষকে ব্যস্ত রাখে, আর এদিকে জরুরি কাজ অবহেলায় পড়ে থাকে। এখানে লাহওকে আগে এনে আয়াত শুরু করেছে দুটির মধ্যে বেশি গুরুতরটি দিয়ে। জোরটা কাজটি কতটা নিরীহ তার উপর নয়, বরং তা আপনাকে কী থেকে দূরে রাখছে তার উপর।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Hayawan",
          "bn": "আল-হায়াওয়ান"
        },
        "p": [
          {
            "en": "The second half of the verse is where the language becomes unusual. Wa inna ad-dar al-akhirata la-hiya al-hayawan. The construction is heavy with emphasis: inna at the front, then the separating pronoun hiya, then the lam of emphasis attached to it. Arabic has three separate ways here of saying that the claim is not being softened, and the verse uses all three before it reaches the noun.",
            "bn": "আয়াতের দ্বিতীয় অংশে এসে ভাষা অন্যরকম হয়ে যায়: ওয়া ইন্নাদ দারাল আখিরাতা লাহিয়াল হায়াওয়ান। গঠনটি জোরে ঠাসা: শুরুতে 'ইন্না', তারপর পৃথককারী সর্বনাম 'হিয়া', আর তার সঙ্গে জোড়া জোর দেওয়ার 'লাম'। দাবিটি একটুও নরম করা হচ্ছে না, এ কথা বলতে আরবিতে এখানে তিনটি আলাদা উপায় আছে, আর বিশেষ্যে পৌঁছানোর আগেই আয়াত তিনটিই ব্যবহার করে ফেলে।"
          },
          {
            "en": "Then the noun itself: al-hayawan, which occurs nowhere else in the Quran. It is built from the root of hayat, life, in an intensified form, so it does not simply mean a life. Ibn Kathir glosses it as the true and everlasting life that will never end but continues on and on. Beside it, the word the verse used for the dunya is al-hayat, the ordinary noun. Of the two lives named in one sentence, only one has been given the heightened form.",
            "bn": "তারপর বিশেষ্যটি নিজে: আল-হায়াওয়ান, যা কুরআনে আর কোথাও আসেনি। এটি গড়া হয়েছে 'হায়াত' অর্থাৎ জীবনের ধাতু থেকে, একটি তীব্রতাবাচক রূপে; তাই এর অর্থ নিছক 'একটি জীবন' নয়। ইবনে কাসীর এর ব্যাখ্যা করেন সেই প্রকৃত ও চিরস্থায়ী জীবন হিসেবে, যা কখনো শেষ হবে না বরং চলতেই থাকবে। এর পাশেই দুনিয়ার জন্য আয়াতটি ব্যবহার করেছে 'আল-হায়াত' — সাধারণ শব্দটি। এক বাক্যে নাম নেওয়া দুটি জীবনের মধ্যে কেবল একটিকেই বাড়ানো রূপটি দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verses on Either Side",
          "bn": "দুই পাশের আয়াত"
        },
        "p": [
          {
            "en": "29:63, just before, puts a question to the deniers: who sends down water from the sky and gives life by it to the earth after its death? They would surely answer, Allah. The verse then instructs, say praise be to Allah, and adds that most of them do not reason. So the people addressed already hold the correct answer. What they do not do with it is the subject of the sentence that follows.",
            "bn": "ঠিক আগের আয়াত 29:63 অস্বীকারকারীদের সামনে একটি প্রশ্ন রাখে: কে আকাশ থেকে পানি নামান এবং তা দিয়ে মৃত যমীনকে জীবিত করেন? তারা অবশ্যই বলবে, আল্লাহ। এরপর আয়াতটি নির্দেশ দেয়, বলো — সমস্ত প্রশংসা আল্লাহর; আর যোগ করে যে তাদের অধিকাংশই বোঝে না। অর্থাৎ যাদের সম্বোধন করা হচ্ছে, সঠিক উত্তরটি তাদের হাতেই আছে। সেই উত্তর দিয়ে তারা কী করে না — পরের বাক্যটির বিষয় সেটাই।"
          },
          {
            "en": "29:65, just after, gives the picture: when they board a ship they call upon Allah, sincere to Him in religion; but when He delivers them to the land, at once they associate others with Him. The sincerity was real and it was temporary. Between these two neighbours the verse about la'ib and lahw stops being an opinion about entertainment and becomes a diagnosis of a knowledge that does not survive contact with dry ground.",
            "bn": "ঠিক পরের আয়াত ২৯:৬৫ ছবিটি এঁকে দেয়: তারা যখন নৌযানে চড়ে, তখন দ্বীনকে একমাত্র তাঁর জন্য খাঁটি করে আল্লাহকে ডাকে; কিন্তু তিনি যখন তাদের উদ্ধার করে স্থলে পৌঁছে দেন, তখনই তারা তাঁর সঙ্গে শরিক করে। তাদের সেই নিষ্ঠা সত্যি ছিল, কিন্তু টিকেছিল অল্প সময়। এই দুই প্রতিবেশী আয়াতের মাঝখানে লা'ইব ও লাহওয়ের আয়াতটি আর বিনোদন নিয়ে কোনো মতামত থাকে না। তা হয়ে ওঠে এমন এক জ্ঞানের দোষ ধরিয়ে দেওয়া, যে জ্ঞান শুকনো মাটিতে পা পড়তেই হারিয়ে যায়।"
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
            "bn": "আয়াতটি শেষ হয় এই কথায়: লাও কানু ইয়া'লামুন, তারা যদি জানত! ২৯:৬৩-এর পাশে রেখে পড়লে এর মানে হতে পারে না যে তাদের কাছে তথ্য নেই, কারণ ঠিক ওই আয়াতেই তারা সঠিক উত্তরটা মুখে বলেছে। ইবনে কাসীর বাক্যাংশটির ব্যবহারিক অর্থ বের করেন: তারা যদি জানত, তবে যা ফুরিয়ে যায় তার বদলে যা টিকে থাকে তাকেই বেছে নিত। এই বাকরীতিতে 'জানা' মানে এমন জানা, যা পছন্দ বদলে দেয়। এর চেয়ে কম যা কিছু, তা কেবল মাথায় বয়ে বেড়ানো তথ্য, আসল জানা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Knowledge Crosses Over",
          "bn": "জ্ঞান যখন সাগর থেকে ডাঙায় আসে"
        },
        "p": [
          {
            "en": "Ibn Ishaq preserves a report about Ikrimah ibn Abi Jahl (RA), who fled by sea after the conquest of Makkah. The ship began to founder, and the crew told the passengers to call sincerely upon their Lord alone, since nobody else could save them. He reasoned that if only Allah saves at sea then only Allah saves on land as well, and he vowed to go back and put his hand in the hand of the Prophet ﷺ. He went back, and he did.",
            "bn": "ইবনে ইসহাক ইকরিমা ইবনে আবু জাহল (রাঃ) সম্পর্কে একটি বর্ণনা রেখে গেছেন। মক্কা বিজয়ের পর তিনি সমুদ্রপথে পালিয়ে যাচ্ছিলেন। জাহাজ ডুবতে শুরু করলে নাবিকরা যাত্রীদের বলল, এখন শুধু নিজেদের রবকেই খাঁটি মনে ডাকো, কারণ আর কেউ তোমাদের বাঁচাতে পারবে না। তিনি ভাবলেন, সমুদ্রে যদি কেবল আল্লাহই বাঁচান, তবে ডাঙাতেও কেবল তিনিই বাঁচান। তিনি প্রতিজ্ঞা করলেন, ফিরে গিয়ে নবী ﷺ-এর হাতে হাত রাখবেন। তিনি ফিরে গেলেন, আর তা-ই করলেন।"
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
          "bn": "সূরার শেষ আয়াত"
        },
        "p": [
          {
            "en": "This is where Surah al-Ankabut ends, and the ending answers its beginning. The surah opens by asking whether people suppose they will be left to say we believe and not be tested, in 29:2 — the verb is yuftanun, from fitnah, the assaying of metal in fire. Sixty-seven verses later, after the histories of Nuh, Ibrahim, Lut and Shu'ayb (AS), the surah closes not with relief from testing but with a promise attached to effort.",
            "bn": "সূরা আল-আনকাবূত এখানেই শেষ, আর এই শেষ তার শুরুর জবাব দেয়। ২৯:২ আয়াতে সূরাটি শুরু হয় এক প্রশ্ন দিয়ে: মানুষ কি ভেবেছে, 'আমরা ঈমান এনেছি' বললেই তাদের ছেড়ে দেওয়া হবে, আর তাদের পরীক্ষা করা হবে না? ক্রিয়াটি 'ইউফতানূন', এসেছে ফিতনা থেকে, যার মূল ছবি আগুনে পুড়িয়ে ধাতু যাচাই করা। সাতষট্টি আয়াত পরে, নূহ, ইবরাহীম, লূত ও শুআইব (আঃ)-এর ঘটনাগুলোর পর, সূরাটি শেষ হয় পরীক্ষা থেকে মুক্তির আশ্বাস দিয়ে নয়, বরং চেষ্টার সঙ্গে বাঁধা এক প্রতিশ্রুতি দিয়ে।"
          },
          {
            "en": "The surah was addressed largely to believers under pressure in Mecca, which is why 29:56 tells them My earth is spacious, so worship Me — a verse the commentators connect to migration. Nothing in the closing verse names a single occasion, and no sound report fixes one; it reads as a general law. Placed at the end of a surah about trial, it functions as the conclusion of an argument rather than as an isolated encouragement.",
            "bn": "সূরাটি মূলত মক্কায় চাপে থাকা মুমিনদের উদ্দেশ্যে, আর এ কারণেই 29:56 তাদের বলে, আমার পৃথিবী প্রশস্ত, অতএব আমারই ইবাদত করো — মুফাসসিরগণ এই আয়াতকে হিজরতের সাথে যুক্ত করেন। শেষ আয়াতটি কোনো নির্দিষ্ট ঘটনার নাম করে না, আর কোনো সহীহ বর্ণনাও কোনো উপলক্ষ নির্দিষ্ট করে না; এটি একটি সাধারণ বিধান হিসেবেই পড়া হয়। পরীক্ষা নিয়ে লেখা একটি সূরার শেষে বসে এটি বিচ্ছিন্ন উৎসাহবাক্য নয়, বরং একটি যুক্তির উপসংহার হিসেবে কাজ করে।"
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
            "bn": "বাক্যের কর্তা: আল্লাযীনা জাহাদূ ফীনা। জাহাদা এসেছে জুহদ থেকে, যার অর্থ নিজের সামর্থ্য নিংড়ে দেওয়া। একই ধাতু থেকে এসেছে ইজতিহাদ, অর্থাৎ শরিয়তের ফয়সালা বের করতে আলেমের প্রাণপণ চেষ্টা, আর জিহাদ, তার সব অর্থে। ক্রিয়াটির কোথাও একে যুদ্ধে সীমাবদ্ধ করা নেই। ফজরে ওঠার চেষ্টা, কঠিন লাগে এমন একটি ভাষা শেখার চেষ্টা, বিয়ে টিকিয়ে রাখার চেষ্টা, আর সহজ ফাঁকির পথ হাতের কাছে থাকলেও উপার্জন হালাল রাখার চেষ্টা, সবই এর মধ্যে পড়ে।"
          },
          {
            "en": "Then fina, in Us. The Arabic does not say ilayna, towards Us, nor lana, for Us, though both would have been available. Fi carries the sense of being inside a thing — striving within Allah's cause, on His terms, inside what He has made lawful. The commentators take this preposition as the filter on the whole promise: the same physical effort, spent for a name or a reputation, is not what the verse is describing.",
            "bn": "এরপর ফীনা, অর্থাৎ 'আমাদের মধ্যে'। আরবিতে বলা হয়নি ইলাইনা, 'আমাদের দিকে', কিংবা লানা, 'আমাদের জন্য', যদিও দুটিই বলা যেত। ফী শব্দে আছে কোনো কিছুর ভেতরে থাকার অর্থ: আল্লাহর পথের ভেতরে থেকে, তাঁর শর্ত মেনে, তিনি যা হালাল করেছেন তার সীমার মধ্যে চেষ্টা করা। মুফাসসিরগণ এই অব্যয়টিকেই পুরো প্রতিশ্রুতির ছাঁকনি ধরেন: একই শারীরিক পরিশ্রম যদি নাম বা সুনামের জন্য হয়, আয়াত তার কথা বলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Promise Under Oath",
          "bn": "শপথে বাঁধা প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Lanahdiyannahum is one of the most heavily emphasised constructions Arabic has: an opening lam of emphasis and a doubled nun of confirmation attached to the verb, the pattern used for a sworn undertaking. Rendered flatly it means We will guide them; rendered with its force it means We shall most certainly guide them. When a promise is built this way, the sentence is not offering a likelihood.",
            "bn": "লানাহদিয়ান্নাহুম আরবির সবচেয়ে জোরালো গঠনগুলোর একটি। শুরুতে আছে জোর দেওয়ার লাম, আর ক্রিয়ার শেষে তাশদীদযুক্ত জোরের নূন; শপথ করে কথা দেওয়ার সময় আরবিতে এই ছাঁচই ব্যবহার হয়। সাদামাটা অনুবাদে অর্থ দাঁড়ায়: আমরা তাদের পথ দেখাব। পুরো জোরটা ধরলে অর্থ হয়: আমরা অবশ্যই অবশ্যই তাদের পথ দেখাব। প্রতিশ্রুতি যখন এভাবে বাঁধা হয়, তখন বাক্যটি কোনো সম্ভাবনার কথা বলছে না।"
          },
          {
            "en": "The order of the two halves is the point most often drawn from the verse. Striving is mentioned in the past tense, guidance in the future. Guidance is what follows action, not what has to arrive before it. This is the direct answer to the common posture of waiting: waiting to feel certain before praying, waiting for a settled heart before starting to learn, waiting for clarity before making the first honest change. The verse reverses the sequence.",
            "bn": "এই আয়াত থেকে সবচেয়ে বেশি যে শিক্ষাটা নেওয়া হয়, তা হলো দুই অংশের ক্রম। সংগ্রামের কথা এসেছে অতীত কালে, হিদায়াতের কথা ভবিষ্যৎ কালে। হিদায়াত আসে কাজের পরে; কাজ শুরুর আগেই তাকে এসে পৌঁছাতে হবে, এমন নয়। অনেকে অপেক্ষায় বসে থাকেন: মনে পুরো নিশ্চয়তা না এলে নামাজ শুরু করেন না, অন্তর স্থির না হলে শেখা শুরু করেন না, সব পরিষ্কার না হলে প্রথম আন্তরিক পরিবর্তনটাও করেন না। এই অপেক্ষার সরাসরি জবাব এই আয়াত। আয়াতটি ক্রমটাই উল্টে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Paths, in the Plural",
          "bn": "এক পথ নয়, বহু পথ"
        },
        "p": [
          {
            "en": "What is promised is subulana, Our paths — plural, and possessive. This is worth setting beside 6:153, where the sirat mustaqim, the straight path, is singular and the other ways are warned against, and beside the daily request of 1:6, guide us to the straight path. The destination is one; the routes into it are many. Sabil in Arabic is a travelled way, a road worn by use, not an abstraction.",
            "bn": "প্রতিশ্রুতিটা হলো সুবুলানা, আমাদের পথসমূহ। শব্দটি বহুবচন, আর পথগুলোকে আল্লাহ নিজের বলে উল্লেখ করেছেন। পাশাপাশি রেখে দেখুন ৬:১৫৩: সেখানে সিরাতে মুস্তাকীম, অর্থাৎ সরল পথ, একবচন, আর আল্লাহ অন্য পথগুলোর ব্যাপারে সতর্ক করেছেন। আরও মনে করুন ১:৬-এর সেই দোয়া, যা আমরা রোজ করি: আমাদের সরল পথ দেখান। গন্তব্য একটাই; সেখানে পৌঁছানোর রাস্তা অনেক। আরবিতে সাবীল মানে মানুষের চলাচলের রাস্তা, চলতে চলতে তৈরি হওয়া পথ; কোনো বিমূর্ত ধারণা নয়।"
          },
          {
            "en": "The commentators read the plural generously: paths of knowledge, of worship, of earning, of service, opened to different people according to what they gave. It also implies that the guidance promised is not a single flash but a succession of openings. Act on the light you have and the next stretch of road becomes visible; act on that, and so on. Guidance in this verse is cumulative, and each instalment is earned by using the last one.",
            "bn": "মুফাসসিরগণ এই বহুবচনকে উদারভাবে বুঝেছেন: জ্ঞানের পথ, ইবাদতের পথ, উপার্জনের পথ, খেদমতের পথ। যে যতটুকু দিয়েছে, সে অনুযায়ী একেকজনের জন্য একেক পথ খুলে যায়। এ থেকে আরও বোঝা যায়, প্রতিশ্রুত হিদায়াত এক ঝলকে আসে না; একটার পর একটা দরজা খুলতে থাকে। হাতে যে আলো আছে, সে অনুযায়ী আমল করুন, রাস্তার পরের অংশটুকু চোখে পড়বে; সেটুকু অনুযায়ী আমল করুন, তারপর আবার। এই আয়াতে হিদায়াত জমতে জমতে বাড়ে, আর প্রতিটি কিস্তি মেলে আগেরটা কাজে লাগানোর মধ্য দিয়ে।"
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
            "bn": "শেষ বাক্যাংশে সুর বদলে যায়: ওয়া ইন্না আল্লাহা লামা‘আল-মুহসিনীন। মুফাসসিরগণ বলেন, কুরআনে আল্লাহর ‘সাথে থাকা’ দুই রকম। একটি সাধারণ: আল্লাহ তাঁর জ্ঞান দিয়ে সবার সাথেই আছেন; তোমরা যেখানেই থাকো, তিনি তোমাদের সাথে। আরেকটি বিশেষ: তা কিছু নির্দিষ্ট মানুষের জন্য প্রতিশ্রুত, আর তার সাথে আসে সাহায্য, হেফাজত ও অবিচলতা। আয়াতটি শেষ হয়েছে এই দ্বিতীয় অর্থে, আর পরিশ্রম করলেই সবাই তা পায় না।"
          },
          {
            "en": "It is offered to the muhsinin, those who practise ihsan — doing the right thing and doing it beautifully, with the awareness that Allah sees. So the verse binds two things that are often separated: strive, and strive well. Effort that is loud, resentful or careless is not what is being described. The last word of the surah is not a demand at all but a companionship, which is what a persecuted community reading this in Mecca most needed to hear.",
            "bn": "তা দেওয়া হয় মুহসিনদের, যাঁরা ইহসানের সাথে চলেন: সঠিক কাজটি করেন, আর সুন্দর করে করেন, এই খেয়াল রেখে যে আল্লাহ দেখছেন। তাই আয়াতটি এমন দুটি জিনিসকে এক করে বাঁধে, যা আমরা প্রায়ই আলাদা করে ফেলি: সংগ্রাম, আর সুন্দরভাবে সংগ্রাম। হইচই-ভরা, ক্ষোভ-মেশানো বা অযত্নের পরিশ্রমের কথা এখানে বলা হচ্ছে না। সূরার শেষ কথাটি কোনো দাবিই নয়, বরং সঙ্গ দেওয়ার আশ্বাস। মক্কায় যে নির্যাতিত মুমিনরা এ আয়াত পড়ছিলেন, তাঁদের ঠিক এ কথাটিই সবচেয়ে বেশি শোনা দরকার ছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Lived",
          "bn": "জীবনে কীভাবে মানা যায়"
        },
        "p": [
          {
            "en": "The practical reading is unusually direct. Take the smallest obligation you already know and are avoiding, and do that one. The verse does not promise guidance to those who research it, discuss it, or intend it strongly; it promises guidance to those who strove. For most people the first striving is not dramatic — it is the prayer prayed on time instead of late, the debt repaid, the apology made, the page of Arabic learnt this week rather than next year.",
            "bn": "বাস্তবে এর শিক্ষা বেশ সোজাসাপ্টা। এমন সবচেয়ে ছোট দায়িত্বটি বেছে নিন, যা আপনি জানেন অথচ এড়িয়ে যাচ্ছেন, আর সেটাই করে ফেলুন। যারা এ নিয়ে গবেষণা করে, আলোচনা করে, কিংবা খুব জোরালো নিয়ত করে, আয়াত তাদের হিদায়াতের প্রতিশ্রুতি দেয়নি; প্রতিশ্রুতি দিয়েছে তাদের, যারা সংগ্রাম করেছে। বেশিরভাগ মানুষের প্রথম সংগ্রাম নাটকীয় কিছু নয়: দেরিতে নয়, সময়মতো নামাজ পড়া; ঋণ শোধ করা; ক্ষমা চেয়ে নেওয়া; আগামী বছর নয়, এই সপ্তাহেই আরবির একটি পৃষ্ঠা শেখা।"
          },
          {
            "en": "It also reframes a plateau. Long stretches where nothing seems to open are usually read as abandonment; the verse suggests reading them as a question about input. And the last clause guards against the opposite error, of measuring yourself by visible results. Being with the doers of good is stated in the present tense, with no condition about outcome. The company is granted while the striving is going on, not only when it has succeeded.",
            "bn": "স্থবিরতার সময়টাকেও আয়াতটি নতুন চোখে দেখায়। অনেক দিন ধরে কোনো দরজা খুলছে না মনে হলে মানুষ সাধারণত ভাবে, তাকে ছেড়ে দেওয়া হয়েছে। আয়াতটি বরং একে একটা প্রশ্ন হিসেবে দেখতে বলে: আমি কী দিচ্ছি? আবার শেষ বাক্যাংশটি উল্টো ভুল থেকেও বাঁচায়, অর্থাৎ চোখে দেখা ফল দিয়ে নিজেকে মাপার ভুল। সৎকর্মশীলদের সাথে থাকার কথাটি এসেছে বর্তমান কালে, ফল নিয়ে কোনো শর্ত ছাড়াই। এই সঙ্গ মেলে সংগ্রাম চলার সময়েই, শুধু সফল হওয়ার পরে নয়।"
          }
        ]
      }
    ]
  }
});
