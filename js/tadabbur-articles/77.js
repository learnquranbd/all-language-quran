/**
 * Tadabbur long-form articles — surah 77.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "77:13": {
    "sections": [
      {
        "h": {
          "en": "An Answer in Two Words",
          "bn": "দুই শব্দের জবাব"
        },
        "p": [
          {
            "en": "Li-yawmi al-fasl: for the Day of Decision. The whole verse is two Arabic words, and it is an answer. Surat al-Mursalat has just run through four conditions, each opened by wa-idha, and when: when the stars are blotted out, when the sky is split, when the mountains are blown away, and when the messengers are given their appointed time (77:8 to 77:11). Then comes a question in 77:12, for what day was it deferred? This verse replies without a verb, naming only the day.",
            "bn": "লিয়াওমিল ফাসল: চূড়ান্ত ফয়সালার দিনের জন্য। গোটা আয়াত আরবিতে মাত্র দুটি শব্দ, আর পুরোটাই একটা জবাব। সূরা আল-মুরসালাত এর ঠিক আগে চারটি অবস্থার কথা বলেছে, প্রতিটির শুরু ওয়া ইযা, অর্থাৎ যখন দিয়ে। যখন নক্ষত্রের আলো মুছে যাবে, যখন আকাশ ফেটে যাবে, যখন পাহাড় উড়িয়ে দেওয়া হবে, আর যখন রসূলদের জন্য সময় ঠিক করে দেওয়া হবে (৭৭:৮ থেকে ৭৭:১১)। তারপর ৭৭:১২ আয়াতে প্রশ্ন: কোন দিনের জন্য একে পিছিয়ে রাখা হয়েছে? এ আয়াত জবাব দেয় কোনো ক্রিয়া ছাড়াই, শুধু দিনটির নাম বলে।"
          },
          {
            "en": "The shape matters. A question raised and answered by the same speaker is not a request for information; it is a way of making the listener wait for the name. Al-Baghawi marks the turn with a single phrase: then He made it clear, and said, for the Day of Decision. As-Sa'di does the same: then He answered with His words. This article stays with the name and with the deferral it answers. The cosmic signs before it and the refrain after it belong to their own verses.",
            "bn": "গঠনটাই এখানে কথা বলে। একই বক্তা যখন প্রশ্ন তোলেন আর নিজেই জবাব দেন, তখন সেটা তথ্য জানতে চাওয়া নয়। শ্রোতাকে নামটার জন্য একটু অপেক্ষা করানোই উদ্দেশ্য। বাগাভী মোড়টা চিহ্নিত করেন এক কথায়: তারপর তিনি স্পষ্ট করে বললেন, ফয়সালার দিনের জন্য। সা'দীও একই কথা বলেন: তারপর তিনি নিজের বাণী দিয়ে জবাব দিলেন। এ লেখা থাকবে নামটি আর যে স্থগিতের প্রশ্নের জবাব এটি, তা নিয়েই। আগের মহাজাগতিক আলামত আর পরের ধুয়া, দুটোরই আলোচনা তাদের নিজ নিজ আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question Meant to Awe",
          "bn": "বিস্ময় জাগানো প্রশ্ন"
        },
        "p": [
          {
            "en": "Why ask at all? The commentators agree that 77:12 is not a real question. At-Tabari says Allah asks it to make His servants marvel at the terror and severity of that day: for what day were the messengers deferred and given their time, how immense it is and how dreadful. Al-Qurtubi glosses ujjilat as ukhkhirat, it was put back, and calls it a question of ta'zim, of magnifying the day. As-Sa'di uses three words for it: exalting, magnifying and making fearful.",
            "bn": "প্রশ্নটা করার দরকার কী? তাফসীরকারেরা একমত যে ৭৭:১২ আসলে কিছু জানতে চাওয়া নয়। তাবারী বলেন, আল্লাহ এ প্রশ্ন করেন সেই দিনের ভয়াবহতা আর কঠোরতা দেখিয়ে বান্দাদের বিস্মিত করতে। কোন দিনের জন্য রসূলদের পিছিয়ে রাখা হলো, সময় বেঁধে দেওয়া হলো? কত বিরাট সেই দিন, কত ভয়ংকর! কুরতুবী উজ্জিলাত শব্দের অর্থ করেন উখখিরাত, পিছিয়ে দেওয়া হয়েছে। তাঁর মতে প্রশ্নটা তা'যীমের, দিনটির মহিমা বোঝানোর। সা'দী এর জন্য তিনটি শব্দ ব্যবহার করেন: মর্যাদা বাড়ানো, বড় করে দেখানো আর ভয় জাগানো।"
          },
          {
            "en": "Al-Baghawi adds the listener's side. A term was struck for gathering the messengers, he says, and so the servants were made to wonder at that day. Then 77:13 gives the name, and 77:14 asks again, and what will make you know what the Day of Decision is? Al-Qurtubi's comment there is short: He followed magnifying with more magnifying. The pattern is question, name, then a further question, so that the name arrives framed on both sides by wonder. The verse is the still point between them.",
            "bn": "বাগাভী যোগ করেন শ্রোতার দিকটা। তিনি বলেন, রসূলদের একত্র করার জন্য একটা মেয়াদ বেঁধে দেওয়া হয়েছিল, তাই বান্দারা সেই দিনটি নিয়ে বিস্মিত হলো। তারপর ৭৭:১৩ আয়াত নামটা বলে দেয়, আর ৭৭:১৪ আবার জিজ্ঞেস করে: ফয়সালার দিন কী, তা তোমাকে কিসে জানাবে? সেখানে কুরতুবীর মন্তব্য ছোট্ট: মহিমার পরে আরও মহিমা জুড়ে দিলেন। ক্রমটা তাই এরকম: প্রশ্ন, তারপর নাম, তারপর আরেক প্রশ্ন। নামটা আসে দুই দিক থেকে বিস্ময়ে ঘেরা হয়ে। আয়াতটি সেই দুইয়ের মাঝখানের স্থির বিন্দু।"
          }
        ]
      },
      {
        "h": {
          "en": "Messengers Given Their Time",
          "bn": "রসূলদের বেঁধে দেওয়া সময়"
        },
        "p": [
          {
            "en": "What was deferred? The subject of ujjilat is the messengers of 77:11, wa-idha al-rusulu uqqitat. At-Tabari reads it as: when the messengers are deferred to assemble at their time on the Day of Resurrection. He then gives the early glosses. Ibn 'Abbas said uqqitat means they were gathered. Mujahid said it means they were deferred. Ibrahim said they were promised. Ibn Zayd recited 5:109, the Day Allah will gather the messengers, and said their term runs to that day until they reach it.",
            "bn": "পিছিয়ে রাখা হয়েছিল কাকে? উজ্জিলাত ক্রিয়ার কর্তা ৭৭:১১ আয়াতের রসূলগণ: ওয়া ইযার রুসুলু উক্কিতাত। তাবারী অর্থ করেন: যখন রসূলদের কিয়ামতের দিন তাঁদের নির্ধারিত সময়ে একত্র হওয়ার জন্য পিছিয়ে রাখা হবে। তারপর তিনি আগের যুগের ব্যাখ্যাগুলো আনেন। ইবন আব্বাস (রাঃ) বলেন, উক্কিতাত মানে তাঁদের একত্র করা হলো। মুজাহিদ বলেন, পিছিয়ে রাখা হলো। ইবরাহীম বলেন, তাঁদের ওয়াদা দেওয়া হলো। ইবন যায়দ পড়েন ৫:১০৯ আয়াত, যেদিন আল্লাহ রসূলদের একত্র করবেন। তিনি বলেন, সেই দিন পর্যন্তই তাঁদের মেয়াদ, যতক্ষণ না তাঁরা সেখানে পৌঁছান।"
          },
          {
            "en": "Al-Qurtubi sets out two views. The first: the messengers were given a time and a term for the decision and judgement between them and their nations, on the Day of Resurrection. The second, introduced with it is said: this happens in this world, the messengers being gathered to the time set for punishing those who denied them. He judges the first better, because the timing in 77:11 belongs with the blotting of stars and the scattering of mountains, which happen on that Day, and a timing before it does not fit.",
            "bn": "কুরতুবী দুটি মত তুলে ধরেন। প্রথম মত: কিয়ামতের দিন রসূল আর তাঁদের উম্মতদের মধ্যে ফয়সালা ও বিচারের জন্য তাঁদের একটা সময় ও মেয়াদ দেওয়া হয়েছে। দ্বিতীয় মতটি তিনি আনেন 'বলা হয়' দিয়ে: ব্যাপারটা দুনিয়াতেই, যারা রসূলদের অস্বীকার করেছিল তাদের শাস্তির জন্য ঠিক করা সময়ে রসূলদের জমা করা হয়েছে। কুরতুবী প্রথমটিকে উত্তম বলেন। কারণ ৭৭:১১ আয়াতের সময় বেঁধে দেওয়া নক্ষত্রের আলো মুছে যাওয়া আর পাহাড় উড়ে যাওয়ার সঙ্গেই গাঁথা। সেগুলো ঘটবে সেই দিনেই, আর তার আগের কোনো সময় নির্ধারণ এখানে খাপ খায় না।"
          },
          {
            "en": "The word itself was read in more than one way. At-Tabari reports uqqitat with alif and a doubled qaf, wuqqitat with waw and a doubled qaf, and Abu Ja'far's wuqitat with a single qaf. He rules that all are known readings of one meaning, from waqt, time, the waw becoming a hamza because some Arabs find a waw with damma heavy. Ma'arif al-Qur'an cites az-Zamakhshari, through Ruh al-Ma'ani, for the sense of arriving at an appointed time, and prefers it here.",
            "bn": "শব্দটি একাধিকভাবে পড়া হয়েছে। তাবারী জানান, কেউ পড়েছেন আলিফ ও তাশদীদযুক্ত কাফ দিয়ে উক্কিতাত, কেউ ওয়াও ও তাশদীদযুক্ত কাফ দিয়ে ওয়ুক্কিতাত, আর আবু জা'ফর পড়েছেন তাশদীদ ছাড়া ওয়ুকিতাত। তাবারীর রায়: সবগুলোই পরিচিত কিরাআত, অর্থ একটাই। মূল শব্দ ওয়াকত, অর্থাৎ সময়। আরবদের কেউ কেউ পেশযুক্ত ওয়াওকে ভারী মনে করে হামযা বানিয়ে ফেলে, পার্থক্য সেখান থেকেই। মাআরিফুল কুরআন রূহুল মাআনীর সূত্রে যামাখশারীর ব্যাখ্যা আনে: নির্ধারিত সময়ে এসে পৌঁছানো। এখানে এ অর্থটিকেই বেশি মানানসই বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Held Over Until the Hour",
          "bn": "কিয়ামত পর্যন্ত তোলা রাখা"
        },
        "p": [
          {
            "en": "Ibn Kathir names what the deferral holds back: for what day were the messengers deferred and their matter postponed, until the Hour stands. He then reads it beside 14:47 and 14:48: so never think that Allah will fail His promise to His messengers, on the Day the earth is replaced by another earth, and the heavens, and they come out before Allah, the One, the Prevailing. That, he says, is the Day of Decision, as Allah said, li-yawmi al-fasl.",
            "bn": "স্থগিত রাখা হয়েছে কী, ইবন কাসীর তা নাম ধরে বলেন: কোন দিনের জন্য রসূলদের পিছিয়ে রাখা হলো আর তাঁদের বিষয়টা মুলতবি রাখা হলো? কিয়ামত কায়েম হওয়া পর্যন্ত। এরপর তিনি পাশে রাখেন ১৪:৪৭ ও ১৪:৪৮ আয়াত: কখনো ভেবো না আল্লাহ তাঁর রসূলদের দেওয়া ওয়াদা ভঙ্গ করবেন। সেদিন এ পৃথিবী বদলে অন্য পৃথিবী হবে, আসমানও বদলে যাবে, আর সবাই হাজির হবে একমাত্র ও প্রবল আল্লাহর সামনে। ইবন কাসীর বলেন, এটাই ফয়সালার দিন, যেমন আল্লাহ বলেছেন: লিয়াওমিল ফাসল।"
          },
          {
            "en": "Put the two readings together and the deferral has a content. The messengers were sent, they called, and their peoples answered as they answered. In this world their case with those peoples is left open. The Muyassar puts it plainly: the messengers were given a time and a term for the decision between them and the nations. As-Sa'di says the same: deferred for the judgement between them and their nations. What the messengers carried is not closed when they die; it is held over to a day appointed for closing it.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে বোঝা যায়, স্থগিতের ভেতরে কী আছে। রসূলদের পাঠানো হয়েছিল, তাঁরা দাওয়াত দিয়েছেন, আর তাঁদের কওম যেভাবে সাড়া দেওয়ার দিয়েছে। দুনিয়াতে কওমের সঙ্গে তাঁদের এ মামলা খোলাই থেকে যায়। মুয়াসসার সোজা কথায় বলে: রসূলদের জন্য একটা সময় আর মেয়াদ ঠিক করা হয়েছে, যাতে তাঁদের আর উম্মতদের মধ্যে ফয়সালা হয়। সা'দীও তাই বলেন: তাঁদের আর তাঁদের উম্মতদের মধ্যে বিচারের জন্য পিছিয়ে রাখা হয়েছে। রসূলরা যা বয়ে এনেছিলেন, তাঁদের মৃত্যুতে তার নিষ্পত্তি হয় না। নিষ্পত্তির জন্য একটা দিন ঠিক করা আছে, সব তোলা থাকে সেই দিনের জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Sorting Creatures, Settling Claims",
          "bn": "সৃষ্টিকে বাছাই, দাবির নিষ্পত্তি"
        },
        "p": [
          {
            "en": "Why call it al-fasl? The root f-s-l means to part things from each other, and from that, to decide between parties. At-Tabari gives the fullest gloss: the day on which Allah separates between His creation in judgement, so He takes for the wronged from whoever wronged him, and repays whoever did good for his good and whoever did evil for his evil. He adds that the people of interpretation said the same. Al-Baghawi reports Ibn 'Abbas: the day the Most Merciful decides between the creatures.",
            "bn": "নাম কেন আল-ফাসল? ফ-স-ল ধাতুর মূল অর্থ এক জিনিসকে আরেকটা থেকে আলাদা করা। সেখান থেকেই দুই পক্ষের মধ্যে রায় দেওয়া। তাবারীর ব্যাখ্যা সবচেয়ে বিস্তারিত: সেদিন আল্লাহ বিচারের মাধ্যমে তাঁর সৃষ্টির মধ্যে ফয়সালা করবেন। মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করে দেবেন। সৎকর্মশীলকে তার সৎকাজের প্রতিদান দেবেন, আর মন্দকারীকে তার মন্দের। তাবারী যোগ করেন, তাফসীরবিদরাও এরকমই বলেছেন। বাগাভী ইবন আব্বাস (রাঃ)-এর কথা আনেন: সেদিন পরম দয়ালু সৃষ্টিজগতের মধ্যে ফয়সালা করবেন।"
          },
          {
            "en": "Qatada, in a report at-Tabari carries and al-Qurtubi repeats, puts it as a sorting: the day on which people are separated by their deeds, to the Garden and to the Fire. At-Tabari has and to the Fire; al-Qurtubi's wording has or to the Fire. So the name holds two pictures at once. One is a court, where claims between creatures are settled and every wrong is paid back. The other is a parting of ways, where each person goes, by what he did, to one of two homes.",
            "bn": "কাতাদা এটাকে দেখেন বাছাই হিসেবে। তাবারী তাঁর বর্ণনাটি এনেছেন, কুরতুবীও তা উদ্ধৃত করেছেন: সেদিন মানুষকে তাদের আমল অনুযায়ী আলাদা করা হবে, জান্নাতের দিকে আর জাহান্নামের দিকে। তাবারীর পাঠে আছে 'আর জাহান্নামের দিকে', কুরতুবীর পাঠে 'অথবা জাহান্নামের দিকে'। নামটির ভেতরে তাই একসঙ্গে দুটি ছবি। একটি আদালতের ছবি, যেখানে সৃষ্টির পরস্পরের দাবির নিষ্পত্তি হবে, প্রতিটি জুলুমের বদলা আদায় হবে। আরেকটি পথ ভাগ হয়ে যাওয়ার ছবি, যেখানে প্রত্যেকে নিজের আমল অনুযায়ী দুই ঠিকানার একটিতে যাবে।"
          },
          {
            "en": "These two are not set against each other in the sources. At-Tabari gives the judgement gloss and then cites Qatada's sorting as agreeing with it. As-Sa'di joins them in one line: between the creatures, some of them against others, and the reckoning of each of them on his own. The first half is the court of claims; the second is each person's own account. The Muyassar, glossing the group, calls it the Day of judgement and of decision between the creatures.",
            "bn": "সূত্রগুলো এ দুটিকে পরস্পরের বিপরীতে দাঁড় করায় না। তাবারী আগে বিচারের ব্যাখ্যা দেন, তারপর কাতাদার বাছাইয়ের কথাকে তারই সমর্থন হিসেবে আনেন। সা'দী দুটিকে একটি বাক্যে জোড়েন: সৃষ্টিজগতের মধ্যে, একের বিরুদ্ধে অন্যের দাবি, আর প্রত্যেকের আলাদা আলাদা হিসাব। প্রথম অংশ পরস্পরের দাবির আদালত, দ্বিতীয় অংশ প্রত্যেকের নিজের হিসাব। মুয়াসসার পুরো অংশের ব্যাখ্যায় দিনটিকে বলে সৃষ্টিজগতের মধ্যে বিচার ও ফয়সালার দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asked Again, Named Again",
          "bn": "আবার প্রশ্ন, আবার নাম"
        },
        "p": [
          {
            "en": "The name is no sooner given than it is questioned. In 77:14, wa-ma adraka ma yawmu al-fasl, at-Tabari hears Allah addressing His Prophet Muhammad ﷺ: and what has made you know, O Muhammad, what the Day of Decision is, magnifying its matter and the severity of its terror. He cites Qatada: a magnifying of that day. The Muyassar addresses the line instead to you, O human being: what will make you know what the Day of Decision is, its severity and its terror?",
            "bn": "নামটা বলার সঙ্গে সঙ্গেই আবার প্রশ্ন ওঠে। ৭৭:১৪ আয়াতে, ওয়ামা আদরাকা মা ইয়াওমুল ফাসল, তাবারী শোনেন নবী মুহাম্মাদ ﷺ-কে আল্লাহর সম্বোধন: হে মুহাম্মাদ, ফয়সালার দিন কী, তা তোমাকে কিসে জানাল? এতে দিনটির গুরুত্ব আর তার ভয়াবহতার তীব্রতা বড় করে দেখানো হয়েছে। তিনি কাতাদার কথা আনেন: সেই দিনের মহিমা বোঝানো। মুয়াসসার সম্বোধনটা ধরে ভিন্নভাবে: হে মানুষ, ফয়সালার দিন কী, তার কঠোরতা আর ভয়াবহতা কেমন, তা তোমাকে কিসে জানাবে?"
          },
          {
            "en": "So the sources differ on who is first addressed: at-Tabari names the Prophet ﷺ, and the Muyassar names the human being. Both readings leave the same weight on the listener, since what is beyond the Messenger's knowing until it is told is beyond everyone's. The surah does not leave the name there. In 77:38 it returns as a statement on the day itself: this is the Day of Decision; We have gathered you and the former peoples. The deferral of 77:12 ends in that gathering.",
            "bn": "অর্থাৎ প্রথম সম্বোধন কার প্রতি, তা নিয়ে সূত্রগুলো আলাদা কথা বলে। তাবারী বলেন নবী ﷺ-এর কথা, মুয়াসসার বলে মানুষের কথা। দুই ব্যাখ্যাতেই শ্রোতার উপর ভার একই থাকে। রসূলও যা না বলে দেওয়া পর্যন্ত জানেন না, তা অন্য কারও জানার বাইরে তো আরও বেশি। সূরাটি নামটাকে এখানেই ছেড়ে দেয় না। ৭৭:৩৮ আয়াতে সেটা ফিরে আসে সেদিনের ঘোষণা হয়ে: এটাই ফয়সালার দিন, আমি তোমাদেরকে আর আগের লোকেদের একত্র করেছি। ৭৭:১২ আয়াতের স্থগিত শেষ হয় এই সমাবেশে।"
          },
          {
            "en": "Between those two points the surah sets its refrain for the first time, in 77:15: woe that day to the deniers. The Muyassar, closing its gloss on this passage, reads the woe as great ruin on that day for those who deny this promised day. The deniers there are named by what they deny, which is the very day this verse names. What the woe consists of is left as the verse gives it here; the refrain recurs through the surah and is treated where it stands.",
            "bn": "এ দুইয়ের মাঝে সূরাটি প্রথমবারের মতো তার ধুয়া বসায়, ৭৭:১৫ আয়াতে: সেদিন দুর্ভোগ মিথ্যারোপকারীদের জন্য। মুয়াসসার এ অংশের ব্যাখ্যা শেষ করে এভাবে: এই প্রতিশ্রুত দিনকে যারা অস্বীকার করে, সেদিন তাদের জন্য মহা ধ্বংস। সেখানে মিথ্যারোপকারীদের পরিচয় তারা কী অস্বীকার করে তা দিয়ে, আর সেটা ঠিক সেই দিন, যার নাম এ আয়াত বলছে। দুর্ভোগটা কী, এখানে তা আয়াতের ভাষাতেই রেখে দেওয়া হলো। ধুয়াটি সূরাজুড়ে বারবার ফিরে আসে, আর প্রতিটি জায়গায় তার আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Reports Left Unclaimed Here",
          "bn": "যে বর্ণনা এখানে আনা হলো না"
        },
        "p": [
          {
            "en": "None of the tafsirs fetched for this verse attaches a sound hadith to it with a collection and a grading. Al-Qurtubi quotes one narration about people waiting for the decision, introduced only with in the hadith, and names no collection; it could not be confirmed, so it is not reproduced. A report that woe in the refrain is a valley in Jahannam is also left out, since no source fetched here carries it. No occasion of revelation is given for the verse in these texts.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটিই সংকলন ও মানসহ কোনো সহীহ হাদীস এর সঙ্গে যুক্ত করেনি। কুরতুবী ফয়সালার অপেক্ষায় থাকা মানুষদের নিয়ে একটি বর্ণনা আনেন শুধু 'হাদীসে আছে' বলে, কোনো সংকলনের নাম দেন না। সেটা যাচাই করা যায়নি, তাই এখানে আনা হলো না। ধুয়ার ওয়াইল শব্দটি জাহান্নামের একটি উপত্যকা, এমন বর্ণনাও বাদ রাখা হলো, কারণ এখানে দেখা কোনো সূত্রে তা নেই। এসব সূত্রে আয়াতটির কোনো শানে নুযূলও উল্লেখ নেই।"
          },
          {
            "en": "One thing must be said plainly. The deniers of 77:15 and the former peoples of 77:16 are described as the text describes them, as those who deny the promised day, and the decision on them belongs to Allah on that day. The verse licenses nothing against any living person or community. It names a day on which Allah decides, and that is the point: the judging is His, and it is deferred to Him. No reader is made a judge of anyone by reading it.",
            "bn": "একটা কথা সোজাসুজি বলা দরকার। ৭৭:১৫ আয়াতের মিথ্যারোপকারী আর ৭৭:১৬ আয়াতের আগেকার লোকেদের কথা আয়াত যেভাবে বলেছে, সেভাবেই এসেছে: তারা প্রতিশ্রুত দিনকে অস্বীকার করেছে। তাদের ব্যাপারে ফয়সালা সেদিন আল্লাহর হাতে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আয়াতটি এমন এক দিনের নাম বলে, যেদিন আল্লাহ ফয়সালা করবেন। মূল কথা এটাই: বিচার তাঁর, আর তা তাঁর কাছেই তোলা রাখা হয়েছে। এ আয়াত পড়ে কোনো পাঠক কারও বিচারক হয়ে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Before a Fixed Verdict",
          "bn": "নির্ধারিত রায়ের আগের জীবন"
        },
        "p": [
          {
            "en": "The verse teaches a way of reading delay. In 77:12 something is deferred, and the next verse says it is deferred to a named day, not cancelled. Ibn Kathir's pairing with 14:47 makes the same point from the other side: never think Allah will fail His promise. A wronged person who saw no justice in this life has not been overlooked; his claim is on the list of a day whose purpose, in at-Tabari's words, is to take for the wronged from the one who wronged him.",
            "bn": "আয়াতটি দেরিকে কীভাবে দেখতে হয়, তা শেখায়। ৭৭:১২ আয়াতে কিছু একটা পিছিয়ে রাখা হয়েছে, আর পরের আয়াত বলে, পিছিয়েছে একটা নির্দিষ্ট দিনের জন্য, বাতিল হয়নি। ইবন কাসীর ১৪:৪৭ আয়াতকে পাশে রেখে একই কথা অন্য দিক থেকে বলেন: কখনো ভেবো না আল্লাহ ওয়াদা ভঙ্গ করবেন। যে মাযলুম এ জীবনে ইনসাফ দেখেনি, তাকে কেউ ভুলে যায়নি। তার দাবি তোলা আছে এমন এক দিনের তালিকায়, যার কাজই তাবারীর ভাষায় মাযলুমের পাওনা জালিমের কাছ থেকে আদায় করা।"
          },
          {
            "en": "The same reading turns back on the reader. If claims are held over, so are the claims against me. Qatada's sorting is by deeds, and as-Sa'di's reckoning is of each person on his own, so the day that comforts the wronged also waits for whoever wronged them. There is still time on this side of it: to return what was taken, to ask pardon of the one I hurt, and to leave to the Day of Decision the verdicts I was never meant to give.",
            "bn": "একই কথা পাঠকের দিকেও ফিরে আসে। দাবিগুলো যদি তোলা থাকে, তবে আমার বিরুদ্ধে যে দাবি, সেগুলোও তোলা আছে। কাতাদার বাছাই আমল দিয়ে, আর সা'দীর হিসাব প্রত্যেকের আলাদা। তাই যে দিন মাযলুমকে সান্ত্বনা দেয়, সেই দিনই জালিমের জন্যও অপেক্ষা করে আছে। সেই দিনের এপারে এখনো সময় আছে। যা কেড়ে নিয়েছি তা ফিরিয়ে দেওয়ার, যাকে কষ্ট দিয়েছি তার কাছে মাফ চাওয়ার। আর যে রায় দেওয়ার দায়িত্ব কখনো আমার ছিল না, তা ফয়সালার দিনের হাতে ছেড়ে দেওয়ার।"
          }
        ]
      }
    ]
  }
});
