/**
 * Tadabbur long-form articles — surah 82.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "82:6": {
    "sections": [
      {
        "h": {
          "en": "A Question Cuts In",
          "bn": "প্রশ্নটি মাঝপথে ঢোকে"
        },
        "p": [
          {
            "en": "Surah al-Infitar opens with four clauses of collapse: the sky breaks apart in 82:1, the stars fall scattering in 82:2, the seas are erupted in 82:3, and in 82:4 the contents of the graves are scattered. 82:5 delivers the result the four were building towards — a soul will know what it sent ahead and what it kept back. The scene is complete, and it has been addressed to nobody in particular.",
            "bn": "সূরা আল-ইনফিতার শুরু হয় ধসের চারটি বাক্য দিয়ে: 82:1 আয়াতে আসমান ফেটে যায়, 82:2 আয়াতে তারকারা বিক্ষিপ্ত হয়ে ঝরে পড়ে, 82:3 আয়াতে সমুদ্রকে উত্তাল করে তোলা হয়, আর 82:4 আয়াতে কবরগুলোর ভেতরের সব বের করে ছড়িয়ে দেওয়া হয়। 82:5 আয়াত সেই পরিণতিটি দেয় যার দিকে চারটি বাক্য এগোচ্ছিল — প্রত্যেকে জেনে নেবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে এসেছে। দৃশ্যটি সম্পূর্ণ, আর তা এতক্ষণ কাউকে বিশেষভাবে সম্বোধন করেনি।"
          },
          {
            "en": "Then the grammar turns and looks straight at the reader: O man. The Day is dropped mid-description and a question is put to a single person, in the singular. No other verse in the surah calls the reader by name like this. A reader who has been watching the sky tear open is suddenly the one being asked something, and the something is not what he did but what he was thinking.",
            "bn": "তারপর ব্যাকরণ ঘুরে দাঁড়িয়ে সরাসরি পাঠকের দিকে তাকায়: হে মানুষ। কিয়ামতের বর্ণনা মাঝপথে থামিয়ে একজন ব্যক্তিকে, একবচনে, একটি প্রশ্ন করা হয়। সূরার আর কোনো আয়াত পাঠককে এভাবে ডেকে সম্বোধন করে না। যে পাঠক এতক্ষণ আসমান ফেটে যেতে দেখছিলেন, তিনি হঠাৎ নিজেই জিজ্ঞাসিত হন — আর জিজ্ঞাসাটি তিনি কী করেছেন তা নিয়ে নয়, তিনি কী ভাবছিলেন তা নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Deceived You",
          "bn": "কীসে তোমাকে ধোঁকা দিল"
        },
        "p": [
          {
            "en": "The verb gharra means to deceive by making something dangerous look safe. Its noun al-gharur, the arch-deceiver, appears in 31:33, 35:5 and 57:14, and in each of those places the deception is specifically about Allah. Here no deceiver is named at all. The question ma gharraka, what deceived you, occurs nowhere else in the Quran, and it is left open so the reader has to fill in his own answer.",
            "bn": "গাররা ক্রিয়ার অর্থ বিপজ্জনক কিছুকে নিরাপদ দেখিয়ে ধোঁকা দেওয়া। এর বিশেষ্য আল-গারূর — প্রধান প্রতারক — এসেছে 31:33, 35:5 ও 57:14 আয়াতে, আর এই প্রতিটি জায়গাতেই ধোঁকাটি বিশেষভাবে আল্লাহকে নিয়ে। এখানে কোনো প্রতারকের নামই নেওয়া হয়নি। 'মা গাররাকা' — কীসে তোমাকে ধোঁকা দিল — এই প্রশ্নটি কুরআনের আর কোথাও নেই, আর তা খোলা রাখা হয়েছে যেন পাঠককে নিজের উত্তরটি নিজেই বসাতে হয়।"
          },
          {
            "en": "The mufassirun record answers anyway. Ibn Kathir relates from Qatadah that what deceived him was his own devil, and others answered simply: his ignorance. Ibn Kathir also records the view that the name at the end of the verse is placed there to prompt the answer — that the man's reply would be, your generosity deceived me. As-Sa'di reads the question as a rebuke that already contains its refutation: nothing about this Lord ever gave grounds for the presumption.",
            "bn": "তবু মুফাসসিরগণ উত্তর নথিবদ্ধ করেছেন। ইবনে কাসীর কাতাদাহ থেকে বর্ণনা করেন যে তাকে ধোঁকা দিয়েছে তার নিজের শয়তান; আবার কেউ কেউ সোজাসুজি উত্তর দিয়েছেন: তার নিজের অজ্ঞতা। ইবনে কাসীর এই মতটিও উল্লেখ করেন যে আয়াতের শেষে নামটি রাখা হয়েছে উত্তরটি মুখে তুলে দেওয়ার জন্য — অর্থাৎ লোকটির জবাব হবে, তোমার উদারতাই আমাকে ধোঁকা দিয়েছে। আস-সা'দী প্রশ্নটিকে এমন এক তিরস্কার হিসেবে পড়েন যার ভেতরেই তার খণ্ডন রয়েছে: এই প্রতিপালকের কোনো কিছুই কখনো এই ধৃষ্টতার ভিত্তি জোগায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Why al-Karim",
          "bn": "কেন আল-কারীম"
        },
        "p": [
          {
            "en": "The name chosen is the point. The verse could have leaned on fear and named a Lord of severity; instead it names the Lord being disregarded by the very attribute that made the disregard comfortable. Al-Karim, the Generous, describes a giving that costs the Giver nothing and asks nothing back. That is exactly the quality that is easiest to mistake for indifference, and the verse puts it where the excuse would go.",
            "bn": "যে নামটি বেছে নেওয়া হয়েছে, সেটাই মূল কথা। আয়াতটি ভয়ের উপর ভর করে কঠোরতার কোনো নাম উল্লেখ করতে পারত; বরং তা যাঁকে অগ্রাহ্য করা হচ্ছে তাঁকে চিহ্নিত করে ঠিক সেই গুণটি দিয়ে, যে গুণ অগ্রাহ্য করাটাকে আরামদায়ক করে তুলেছিল। আল-কারীম — মহানুভব — এমন এক দান বোঝায় যা দাতার কিছুই খরচ করায় না এবং বিনিময়ে কিছু চায় না। ঠিক এই গুণটিকেই উদাসীনতা বলে ভুল করা সবচেয়ে সহজ, আর আয়াতটি তাকে বসায় সেখানেই যেখানে অজুহাতটি বসত।"
          },
          {
            "en": "The root is worth following. The superlative form al-Akram, the Most Generous, is used of Allah in 96:3 and nowhere else, in the first passage ever revealed. In 27:40 Sulayman (AS), looking at a throne carried to him in an instant, says that whoever is ungrateful should know that his Lord is Ghaniyy Karim, free of all need and generous. In each case the generosity is stated next to a warning about what people do with it.",
            "bn": "ধাতুটির পিছু নেওয়া দরকার। অতিশয়ার্থক রূপ আল-আকরাম — সর্বাধিক অনুগ্রহশীল — আল্লাহর জন্য ব্যবহৃত হয়েছে 96:3 আয়াতে এবং আর কোথাও নয়; সেটি সর্বপ্রথম নাযিল হওয়া অংশ। 27:40 আয়াতে সুলাইমান (আঃ) মুহূর্তের মধ্যে তাঁর সামনে এনে রাখা সিংহাসনটির দিকে তাকিয়ে বলেন, যে অকৃতজ্ঞ হয় সে জেনে রাখুক তাঁর প্রতিপালক গানিয়্য ও কারীম — অভাবমুক্ত ও মহানুভব। প্রতিটি ক্ষেত্রেই উদারতার কথা বলা হয়েছে মানুষ তা নিয়ে কী করে সে বিষয়ে এক সতর্কবাণীর পাশে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer in the Body",
          "bn": "উত্তরটি দেহের ভেতরেই"
        },
        "p": [
          {
            "en": "The next two verses answer the question with the reader's own body. 82:7 says He created you, then proportioned you, then balanced you; 82:8 adds that He assembled you in whatever form He willed. The generosity being presumed upon is not an abstraction somewhere. It is the frame the person doing the presuming is standing in. Then 82:9 names the real problem: no, but you deny the Recompense.",
            "bn": "পরের দুই আয়াত প্রশ্নটির উত্তর দেয় পাঠকের নিজের দেহ দিয়েই। 82:7 আয়াত বলে, তিনি তোমাকে সৃষ্টি করেছেন, তারপর সুঠাম করেছেন, তারপর ভারসাম্যপূর্ণ করেছেন; 82:8 আয়াত যোগ করে, তিনি তোমাকে তাঁর ইচ্ছেমতো আকৃতিতে গঠন করেছেন। যে উদারতার উপর ভরসা করে ধৃষ্টতা দেখানো হচ্ছে, তা দূরের কোনো বিমূর্ত ব্যাপার নয়। তা সেই কাঠামো, যার ভেতরে দাঁড়িয়েই ধৃষ্টতাটি দেখানো হচ্ছে। তারপর 82:9 আয়াত আসল সমস্যাটির নাম বলে: না, বরং তোমরা কর্মফলকে অস্বীকার করে থাক।"
          },
          {
            "en": "And so that generosity is not confused with absence of oversight, 82:10 to 82:12 place keepers over every person — noble, recording, and knowing whatever you do. The surah answers its own question in a straight line: you were made carefully, you are watched constantly, and what you actually did was decide the Reckoning would never arrive.",
            "bn": "আর উদারতাকে যেন নজরদারির অনুপস্থিতি বলে গুলিয়ে ফেলা না হয়, সে জন্য 82:10 থেকে 82:12 আয়াত প্রত্যেক মানুষের উপর তত্ত্বাবধায়ক নিযুক্ত করে — সম্মানিত, লিপিবদ্ধকারী, আর তোমরা যা করো তা জ্ঞাত। সূরাটি নিজের প্রশ্নের উত্তর দেয় সোজা এক রেখায়: তোমাকে যত্ন করে বানানো হয়েছে, তোমাকে অবিরাম দেখা হচ্ছে, আর তুমি আসলে যা করেছ তা হলো সিদ্ধান্ত নিয়ে বসা যে হিসাবের দিনটি কখনো আসবেই না।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering It Yourself",
          "bn": "নিজেই এর উত্তর দেওয়া"
        },
        "p": [
          {
            "en": "Because the question is left open, its use is diagnostic. Answer it in the first person and name the thing exactly: youth, health, an unbroken run of ease, a delay in consequences long enough to look like permission. Every item on that list is a gift. The deception is not in receiving it; it is in reading a gift as a guarantee, and then reading the Giver's patience as agreement.",
            "bn": "প্রশ্নটি খোলা রাখা হয়েছে বলেই এর ব্যবহার নিরূপণমূলক। উত্তম পুরুষে এর উত্তর দিন আর জিনিসটির নাম নির্দিষ্ট করে বলুন: যৌবন, সুস্থতা, অবিচ্ছিন্ন স্বাচ্ছন্দ্যের ধারা, কিংবা পরিণতির এমন দীর্ঘ বিলম্ব যা অনুমতির মতো দেখায়। এই তালিকার প্রতিটি জিনিসই এক উপহার। ধোঁকা তা গ্রহণ করায় নয়; ধোঁকা হলো উপহারকে নিশ্চয়তা বলে পড়া, আর তারপর দাতার ধৈর্যকে সম্মতি বলে পড়া।"
          }
        ]
      }
    ]
  },
  "82:15": {
    "sections": [
      {
        "h": {
          "en": "Three Words That Add Time",
          "bn": "তিন শব্দে যোগ হলো সময়"
        },
        "p": [
          {
            "en": "Yaslawnaha yawma ad-din. The verse is three Arabic words: a verb that carries both its subject and its object, then yawma, the day, then ad-din. It stands between 82:14, which says the fujjar will be in al-Jahim, and 82:16, which says they will not be absent from it. Read alone it is hard to follow, because its pronouns point backwards. At-Tabari fills them in: these fujjar will yasla al-Jahim on the Day of Resurrection. The they is the fujjar, the it is al-Jahim.",
            "bn": "ইয়াসলাওনাহা ইয়াওমাদ্দীন। আয়াতটি মাত্র তিনটি আরবি শব্দ। প্রথমটি এমন এক ক্রিয়া, যার ভেতরেই কর্তা আর কর্ম দুটোই আছে। তারপর ইয়াওমা, অর্থাৎ দিন। তারপর আদ-দীন। আয়াতটির আগে ৮২:১৪, যেখানে বলা হয়েছে ফুজ্জার থাকবে জাহীমে। পরে ৮২:১৬, যেখানে বলা হয়েছে তারা সেখান থেকে অনুপস্থিত থাকবে না। আলাদা করে পড়লে বোঝা কঠিন, কারণ এর সর্বনামগুলো পেছনের দিকে ইঙ্গিত করে। তাবারী শূন্যস্থান পূরণ করে দেন: এই ফুজ্জার কিয়ামতের দিন জাহীমে ইয়াসলা করবে। 'তারা' মানে ফুজ্জার, আর 'তাতে' মানে জাহীম।"
          },
          {
            "en": "What the verse adds to 82:14 is time. The verse before gave the people and the place; this one gives the day, and the day has a name. The app's English renders the verb as they will enter to burn therein, with the first words in brackets as the translator's supply, while its Bengali renders it simply as they will enter it. Two translations of one verb already lean different ways, and the commentators show why. This article keeps to 82:15; 82:16 and the questions of 82:17 to 82:19 are named only as context.",
            "bn": "৮২:১৪-এর সঙ্গে এ আয়াত যা যোগ করে, তা হলো সময়। আগের আয়াতে ছিল মানুষ আর জায়গা। এখানে আসে দিন, আর সেই দিনের একটা নামও আছে। এই অ্যাপের ইংরেজি অনুবাদ ক্রিয়াটিকে বলে 'প্রবেশ করে দগ্ধ হবে', প্রথম অংশটুকু বন্ধনীতে, অনুবাদকের যোগ করা বলে। বাংলা অনুবাদে আছে শুধু 'তারা তাতে প্রবেশ করবে'। একই ক্রিয়ার দুই অনুবাদ দুই দিকে ঝুঁকেছে। কেন, তা তাফসীরকারদের কথায় বোঝা যায়। এ লেখা থাকবে ৮২:১৫-এর ভেতরেই। ৮২:১৬ আর ৮২:১৭ থেকে ৮২:১৯ পর্যন্ত প্রশ্নগুলো শুধু প্রসঙ্গ হিসেবে উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Are Called al-Fujjar",
          "bn": "ফুজ্জার কাদের বলা হয়েছে"
        },
        "p": [
          {
            "en": "The verse's subject comes from 82:14, so the first question is who the fujjar are. The Muyassar, explaining 82:14 to 82:16 together, defines them as those who fell short in the rights of Allah and the rights of His servants. Ibn Kathir's abridged English first describes the righteous of 82:13 as those who obeyed Allah and did not meet Him with disobedience, then says the evildoers will be in Hell and eternal torment. Ma'arif al-Qur'an calls them the sinners, set against the righteous in bliss.",
            "bn": "আয়াতের কর্তা এসেছে ৮২:১৪ থেকে, তাই প্রথম প্রশ্ন হলো ফুজ্জার কারা। মুয়াসসার ৮২:১৪ থেকে ৮২:১৬ একসঙ্গে ব্যাখ্যা করে। সেখানে তাদের সংজ্ঞা: যারা আল্লাহর হক আর তাঁর বান্দাদের হক আদায়ে ঘাটতি করেছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ আগে ৮২:১৩-এর নেককারদের পরিচয় দেয়। তারা আল্লাহর আনুগত্য করেছে, নাফরমানি নিয়ে তাঁর সামনে হাজির হয়নি। তারপর বলে, অন্যায়কারীরা থাকবে জাহান্নামে আর চিরস্থায়ী আযাবে। মাআরিফুল কুরআন তাদের বলে পাপী, নেয়ামতে থাকা নেককারদের বিপরীতে।"
          },
          {
            "en": "At-Tabari, on this verse, refers to them only as these fujjar, carrying the word over from 82:14 without a fresh definition here. None of the texts fetched for this verse names a nation, a sect or any particular people. Their language describes conduct: falling short in what is owed, disobedience, sin. The Muyassar's definition is built from two duties side by side, what is owed to Allah and what is owed to His servants, and neither half is left out.",
            "bn": "তাবারী এ আয়াতে তাদের শুধু 'এই ফুজ্জার' বলেন। শব্দটা ৮২:১৪ থেকে টেনে আনেন, এখানে নতুন করে সংজ্ঞা দেন না। এ আয়াতের জন্য যে তাফসীরগুলো সংগ্রহ করা হয়েছে, তার কোনোটিই কোনো জাতি, ফেরকা বা নির্দিষ্ট কোনো গোষ্ঠীর নাম নেয়নি। তাদের ভাষা আচরণের বর্ণনা: পাওনা আদায়ে ঘাটতি, নাফরমানি, গুনাহ। মুয়াসসারের সংজ্ঞায় দুটি দায় পাশাপাশি রাখা। একটি আল্লাহর পাওনা, অন্যটি তাঁর বান্দাদের পাওনা। কোনোটাই বাদ পড়েনি।"
          },
          {
            "en": "This needs saying plainly. The verse describes what the text describes: a group defined by their deeds, and their end on a coming day. It licenses nothing against any living person or community. It gives no reader the standing to decide which of the living belong to that group, and this article passes no verdict on anyone's fate. The definitions the commentators give are about conduct, and the only conduct a reader can examine fully is his own.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: আমলের দ্বারা চিহ্নিত একদল মানুষ, আর আসন্ন এক দিনে তাদের পরিণতি। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। জীবিতদের মধ্যে কে সেই দলে পড়ে, তা ঠিক করার অধিকার এটি কোনো পাঠককে দেয় না। এ লেখাও কারও পরিণতি নিয়ে কোনো রায় দেয় না। তাফসীরকারদের সংজ্ঞাগুলো আচরণ নিয়ে। আর পুরোপুরি যাচাই করা যায় কেবল নিজের আচরণই।"
          }
        ]
      },
      {
        "h": {
          "en": "Entering, Flame and Punishment",
          "bn": "প্রবেশ, শিখা আর আযাব"
        },
        "p": [
          {
            "en": "Now the verb, yaslawnaha. Al-Baghawi glosses it with a single word, yadkhulunaha: they enter it, on the Day of Resurrection. Al-Qurtubi explains it as yusibuhum lahabuha wa harruha, its flame and its heat reach them. The Muyassar gives nearly the same clause without the heat: its flame reaches them, on the Day of Recompense. So al-Baghawi speaks of entering, while al-Qurtubi and the Muyassar speak of the fire's flame reaching them, and al-Qurtubi names its heat as well.",
            "bn": "এবার ক্রিয়াটি, ইয়াসলাওনাহা। বাগাভী এর ব্যাখ্যা দেন একটি শব্দে, ইয়াদখুলূনাহা: কিয়ামতের দিন তারা তাতে প্রবেশ করবে। কুরতুবী বলেন, ইউসীবুহুম লাহাবুহা ওয়া হাররুহা: তার শিখা আর তার উত্তাপ তাদের স্পর্শ করবে। মুয়াসসার প্রায় একই কথা বলে, তবে উত্তাপের উল্লেখ ছাড়া: কর্মফলের দিন তার শিখা তাদের স্পর্শ করবে। অর্থাৎ বাগাভী বলছেন প্রবেশের কথা। কুরতুবী আর মুয়াসসার বলছে আগুনের শিখা পৌঁছানোর কথা। কুরতুবী সঙ্গে উত্তাপের কথাও বলেন।"
          },
          {
            "en": "As-Sa'di explains yaslawnaha as they are punished by it with the severest punishment. At-Tabari, as noted, does not gloss the verb at all; he restates it with its subject and object named and spends his words on the day. Ibn Kathir's abridged English translates the clause as therein they will enter, and taste its burning flame, holding both the entering and the flame inside one rendering, as the app's English does with its bracketed enter to.",
            "bn": "সা'দী ইয়াসলাওনাহার ব্যাখ্যা দেন এভাবে: তাতে তাদের সবচেয়ে কঠিন আযাব দেওয়া হবে। আগেই বলা হয়েছে, তাবারী ক্রিয়াটির আলাদা কোনো ব্যাখ্যা দেন না। তিনি কর্তা ও কর্মের নাম বসিয়ে বাক্যটা আবার বলেন, আর তাঁর কথা খরচ করেন দিনটি নিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ অংশটির অনুবাদ করে এভাবে: তারা তাতে প্রবেশ করবে আর তার জ্বলন্ত শিখার স্বাদ নেবে। প্রবেশ আর শিখা দুটোই সেখানে এক অনুবাদে ধরা। এই অ্যাপের ইংরেজি অনুবাদও বন্ধনীর ভেতরের শব্দ দিয়ে একই কাজ করে।"
          },
          {
            "en": "That gives three emphases from the fetched texts: entering, being reached by flame and heat, and being punished. None of the commentators argues against another here, and none says the others are wrong. They sit side by side, and this article does not choose among them. What they share is that the verb is about the fujjar and al-Jahim, as at-Tabari's restatement makes explicit, and about a day that has not yet come.",
            "bn": "সংগৃহীত তাফসীরগুলো থেকে তাহলে তিনটি দিক পাওয়া গেল: প্রবেশ, শিখা ও উত্তাপের স্পর্শ, আর আযাব। এখানে কোনো তাফসীরকার অন্যের বিরোধিতা করেননি, কেউ বলেননি অন্যরা ভুল। ব্যাখ্যাগুলো পাশাপাশি আছে, আর এ লেখা তাদের মধ্যে কোনোটিকে বেছে নেয় না। সবগুলোতে যা এক, তা হলো ক্রিয়াটি ফুজ্জার আর জাহীম নিয়ে। তাবারীর পুনর্কথনে তা স্পষ্ট। আর ক্রিয়াটি এমন এক দিনের কথা বলে, যা এখনো আসেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Recompense, Reckoning, Resurrection",
          "bn": "প্রতিদান, হিসাব, পুনরুত্থান"
        },
        "p": [
          {
            "en": "Then yawm ad-din. Ibn Kathir's Arabic, on this verse, gives three words at once: yawm al-hisab wa al-jaza' wa al-qiyamah, the day of reckoning, of recompense and of the Resurrection. His abridged English renders the gloss as the Day of Reckoning, Recompense, and Judgement. Al-Qurtubi has two of the same words, the day of recompense and reckoning. As-Sa'di has the day of recompense for deeds. The Muyassar says the Day of Recompense, and al-Baghawi says the Day of Resurrection.",
            "bn": "এবার ইয়াওমুদ্দীন। এ আয়াতে ইবন কাসীরের আরবি তাফসীর একসঙ্গে তিনটি শব্দ দেয়: ইয়াওমুল হিসাবি ওয়াল জাযায়ি ওয়াল কিয়ামাহ, হিসাবের দিন, প্রতিদানের দিন, কিয়ামতের দিন। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে ব্যাখ্যাটি হয়েছে হিসাব, প্রতিদান আর বিচারের দিন। কুরতুবী নেন এর দুটি শব্দ: প্রতিদান ও হিসাবের দিন। সা'দী বলেন, আমলের প্রতিদানের দিন। মুয়াসসার বলে প্রতিদানের দিন, আর বাগাভী বলেন কিয়ামতের দিন।"
          },
          {
            "en": "At-Tabari puts two descriptions together. Yawm ad-din is the Day of Resurrection, yawma yudanu al-'ibadu bi al-a'mal, the day on which the servants are requited for their deeds and recompensed for them. He adds that the people of interpretation said the like. Then, through his chain, he reports Ibn Abbas (RA): yawm ad-din is one of the names of the Day of Resurrection; Allah made it great and warned His servants of it.",
            "bn": "তাবারী দুটি বর্ণনা একসঙ্গে রাখেন। ইয়াওমুদ্দীন হলো কিয়ামতের দিন, ইয়াওমা ইউদানুল ইবাদু বিল আমাল, যেদিন বান্দাদের তাদের আমলের বদলা দেওয়া হবে, আমল অনুযায়ী প্রতিদান দেওয়া হবে। তিনি যোগ করেন, তাফসীরের আলেমরাও এমনই বলেছেন। তারপর নিজের সনদে ইবন আব্বাস (রাঃ)-এর কথা উদ্ধৃত করেন: ইয়াওমুদ্দীন কিয়ামতের দিনের নামগুলোর একটি। আল্লাহ একে মহান করেছেন, আর এ দিন সম্পর্কে তাঁর বান্দাদের সতর্ক করেছেন।"
          },
          {
            "en": "Across the texts, three words recur: recompense, reckoning and the Resurrection, with judgement added in the English. No commentator here sets one against another. Some name the day by what happens on it, the reckoning and the repaying; al-Baghawi simply calls it the Day of Resurrection. Ibn Kathir's Arabic and at-Tabari hold more than one of these together. The article leaves them side by side and does not choose one as the meaning.",
            "bn": "সবগুলো পাঠে ঘুরেফিরে আসে তিনটি শব্দ: প্রতিদান, হিসাব আর কিয়ামত। ইংরেজি সংস্করণে সঙ্গে যোগ হয়েছে বিচার। এখানে কোনো তাফসীরকার একটিকে আরেকটির বিপরীতে দাঁড় করাননি। কেউ দিনটির নাম দেন সেদিন যা ঘটবে তা দিয়ে, অর্থাৎ হিসাব আর বদলা। বাগাভী একে সরাসরি কিয়ামতের দিন বলেন। ইবন কাসীরের আরবি তাফসীর আর তাবারী একাধিক অর্থ একসঙ্গে ধরে রাখেন। এ লেখা অর্থগুলো পাশাপাশি রাখে, কোনো একটিকে একমাত্র অর্থ বলে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Denied in 82:9",
          "bn": "৮২:৯-এ অস্বীকৃত শব্দটি"
        },
        "p": [
          {
            "en": "Ad-din is not new to the surah when it arrives here. In 82:9 the address was blunt: no, rather you deny ad-din, which the app's English renders as the Recompense. A few verses later the same word returns, now fixed to a day: yawm ad-din. What was denied in 82:9 is named here as the day on which the fujjar meet al-Jahim. The surah then asks twice, in 82:17 and 82:18, what will make you know what the Day of Recompense is, and answers in 82:19. Those verses are left for their own entries.",
            "bn": "আদ-দীন শব্দটি এখানে সূরায় প্রথম আসেনি। ৮২:৯-এ সম্বোধন ছিল সোজাসাপটা: না, বরং তোমরা আদ-দীনকে অস্বীকার করো। এই অ্যাপের ইংরেজি অনুবাদে শব্দটি হয়েছে প্রতিদান। কয়েক আয়াত পরে একই শব্দ ফিরে আসে, এবার একটা দিনের সঙ্গে বাঁধা: ইয়াওমুদ্দীন। ৮২:৯-এ যা অস্বীকার করা হচ্ছিল, এখানে তার নাম সেই দিন, যেদিন ফুজ্জার জাহীমের মুখোমুখি হবে। এরপর সূরা ৮২:১৭ ও ৮২:১৮-তে দুবার জিজ্ঞেস করে, কর্মফলের দিন কী, তা তোমাকে কে জানাবে। জবাব আসে ৮২:১৯-এ। সেই আয়াতগুলো তাদের নিজস্ব আলোচনার জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "Ma'arif al-Qur'an ties the pair of verses that open this group, 82:13 and 82:14, to 82:5 earlier in the surah: then one will know what he sent ahead and what he left behind. On the Day of Reckoning, it explains, each person will know what he has done and what the consequences of his deeds will be. Read with that link, 82:15 is where those consequences are given a time, the Day of Recompense.",
            "bn": "মাআরিফুল কুরআন এই অংশের শুরুর দুটি আয়াত, ৮২:১৩ ও ৮২:১৪, জুড়ে দেয় সূরার আগের দিকের ৮২:৫-এর সঙ্গে: তখন প্রত্যেকে জানবে সে কী আগে পাঠিয়েছে আর কী পেছনে রেখে গেছে। ব্যাখ্যাটি হলো, হিসাবের দিনে প্রত্যেকে জানবে সে কী করেছে, আর তার আমলের পরিণাম কী হবে। এই সংযোগ মাথায় রেখে পড়লে ৮২:১৫ সেই জায়গা, যেখানে পরিণামগুলোর জন্য একটা সময় বেঁধে দেওয়া হয়েছে, কর্মফলের দিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping to the Commentators' Clauses",
          "bn": "তাফসীরের বাক্যের সীমার ভেতরে"
        },
        "p": [
          {
            "en": "On the Fire itself, this article reports only what the fetched texts say about this passage. The Muyassar says its flame reaches them. Al-Qurtubi says its flame and its heat reach them. As-Sa'di says they are punished by it with the severest punishment. Ibn Kathir's abridged English, on 82:14, says the evildoers will be in Hell and eternal torment. Ma'arif al-Qur'an speaks of a Blazing Fire of Hell. Nothing is added here beyond those clauses, and no description is brought in from elsewhere.",
            "bn": "আগুন সম্পর্কে এ লেখা শুধু সেটুকুই বলে, যা এ অংশের জন্য সংগৃহীত তাফসীরগুলোতে আছে। মুয়াসসার বলে, তার শিখা তাদের স্পর্শ করবে। কুরতুবী বলেন, তার শিখা আর উত্তাপ তাদের স্পর্শ করবে। সা'দী বলেন, তাতে তাদের সবচেয়ে কঠিন আযাব দেওয়া হবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ৮২:১৪ প্রসঙ্গে বলে, অন্যায়কারীরা থাকবে জাহান্নামে আর চিরস্থায়ী আযাবে। মাআরিফুল কুরআন বলে জাহান্নামের জ্বলন্ত আগুনের কথা। এর বাইরে কিছু যোগ করা হয়নি, অন্য কোথাও থেকে কোনো বর্ণনাও আনা হয়নি।"
          },
          {
            "en": "Whether they ever leave it is the subject of the next verse, 82:16, and belongs to that verse's entry. On hadith: none of the tafsirs fetched for 82:15 attaches a hadith to this verse. The one narration Ibn Kathir's abridged text quotes in this passage, addressed to the children of Hashim, comes under 82:19 and refers back to 26:214, so it is left for that verse. No occasion of revelation is given for 82:15 in the fetched texts either.",
            "bn": "তারা কখনো সেখান থেকে বের হবে কি না, সেটা পরের আয়াত ৮২:১৬-এর বিষয়, তার আলোচনা সেখানেই। হাদীসের ব্যাপারে: ৮২:১৫-এর জন্য সংগৃহীত কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। এ অংশে ইবন কাসীরের সংক্ষিপ্ত সংস্করণ যে একটিমাত্র বর্ণনা উদ্ধৃত করেছে, বনু হাশিমকে উদ্দেশ করে বলা, সেটি এসেছে ৮২:১৯-এর আলোচনায় এবং ২৬:২১৪-এর দিকে ইঙ্গিত করে। তাই সেটি সেই আয়াতের জন্য রেখে দেওয়া হলো। সংগৃহীত পাঠে ৮২:১৫-এর কোনো শানে নুযূলও উল্লেখ নেই।"
          },
          {
            "en": "The restraint is deliberate. The commentators' notes on this verse are short, most of them a single line, and the verse itself is only three words. It would be easy to fill the space with vivid detail drawn from memory or from other passages, but none of that was in what was read for this verse, so none of it is written here. What the texts give is already enough to carry the warning: a place, a flame, a severe punishment, and a named day on which deeds are repaid.",
            "bn": "এই সংযম ইচ্ছাকৃত। এ আয়াতে তাফসীরকারদের কথা সংক্ষিপ্ত, বেশিরভাগই এক লাইনের। আয়াতটিও মাত্র তিনটি শব্দের। স্মৃতি থেকে বা অন্য আয়াত থেকে চোখ ধাঁধানো বিবরণ এনে জায়গাটা ভরে ফেলা সহজ ছিল। কিন্তু এ আয়াতের জন্য যা পড়া হয়েছে, তাতে সেসব নেই, তাই এখানেও লেখা হয়নি। সতর্কবাণী বহন করতে পাঠে যা আছে তা-ই যথেষ্ট: একটা জায়গা, একটা শিখা, কঠিন আযাব, আর নাম দেওয়া একটা দিন, যেদিন আমলের প্রতিদান দেওয়া হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Warning Meant for Servants",
          "bn": "বান্দাদের জন্য সতর্কবার্তা"
        },
        "p": [
          {
            "en": "The report at-Tabari gives from Ibn Abbas (RA) ends on two verbs: Allah made the day great, and He warned His servants of it. The warning is addressed to servants, which is every reader. That shapes how a verse like this is meant to be held. It is easy to read the fujjar as a third party, people out there whose end is being described for the comfort of those listening. The report points the other way: the day was named and made great so that those who hear of it would take care.",
            "bn": "ইবন আব্বাস (রাঃ)-এর যে কথা তাবারী উদ্ধৃত করেন, তা শেষ হয় দুটি ক্রিয়ায়: আল্লাহ দিনটিকে মহান করেছেন, আর এ দিন সম্পর্কে তাঁর বান্দাদের সতর্ক করেছেন। সতর্কবার্তা বান্দাদের প্রতি, অর্থাৎ প্রত্যেক পাঠকের প্রতি। এ ধরনের আয়াত কীভাবে ধরতে হয়, তা এখান থেকেই বোঝা যায়। ফুজ্জারকে তৃতীয় পক্ষ ভেবে পড়া সহজ, যেন দূরের কিছু লোক, যাদের পরিণতি শুনে শ্রোতারা স্বস্তি পাবে। বর্ণনাটি উল্টো দিকে ইঙ্গিত করে। দিনটির নাম দেওয়া হয়েছে আর তাকে মহান করা হয়েছে, যাতে যারা শোনে তারা সাবধান হয়।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the same turn in its own words: each person will know what he has done. Each person, not each of them. So the honest use of this verse is not to sort the living into groups. It is to ask, of oneself, which of the two descriptions in 82:13 and 82:14 one's own deeds are moving towards, while there is still time to move them. That is a question a reader can answer only for himself, and only he can act on the answer.",
            "bn": "মাআরিফুল কুরআন নিজের ভাষায় একই দিকে ফেরে: প্রত্যেকে জানবে সে কী করেছে। প্রত্যেকে, শুধু ওরা নয়। তাই এ আয়াতের সৎ ব্যবহার জীবিত মানুষদের দলে দলে ভাগ করা নয়। নিজেকে জিজ্ঞেস করা: ৮২:১৩ ও ৮২:১৪-এর দুই বর্ণনার কোনটার দিকে আমার আমল এগোচ্ছে? আর সময় থাকতেই তার দিক বদলানো। এ প্রশ্নের জবাব পাঠক শুধু নিজের জন্যই দিতে পারে। আর সেই জবাব অনুযায়ী কাজও করতে পারে কেবল সে নিজেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds Carried to Their Day",
          "bn": "আমল পৌঁছায় তার দিনে"
        },
        "p": [
          {
            "en": "Two of the glosses put deeds at the centre of the day's name. As-Sa'di calls it the day of recompense for deeds. At-Tabari calls it the day on which the servants are requited for their deeds and recompensed for them. Neither speaks of a recompense for what a person was born into or how others saw him. The day is defined by what was done. That is what makes the verse a warning and not only a report: deeds are still being done today.",
            "bn": "দুটি ব্যাখ্যা দিনটির নামের কেন্দ্রে রাখে আমলকে। সা'দী বলেন, আমলের প্রতিদানের দিন। তাবারী বলেন, যেদিন বান্দাদের তাদের আমলের বদলা দেওয়া হবে, আমল অনুযায়ী প্রতিদান দেওয়া হবে। কে কোন পরিবারে জন্মেছে বা লোকে তাকে কীভাবে দেখত, তার প্রতিদানের কথা দুজনের কেউই বলেন না। দিনটির পরিচয় দেওয়া হয়েছে কৃতকর্ম দিয়ে। এ কারণেই আয়াতটি শুধু খবর নয়, সতর্কবাণীও। কারণ আমল আজও চলছে।"
          },
          {
            "en": "The Muyassar's definition of the fujjar gives the reader something concrete to check. It names two kinds of falling short: in the rights of Allah, and in the rights of His servants. A reader can ask where his prayer, his honesty and his debts stand, and whom he has wronged and not yet made amends to. The verse names a day that has not come. Until it comes, both lists can still be worked on, and that is the mercy inside a warning that is given in advance.",
            "bn": "মুয়াসসারের দেওয়া ফুজ্জারের সংজ্ঞা পাঠকের হাতে যাচাইয়ের মতো একটা স্পষ্ট মাপকাঠি তুলে দেয়। সেখানে ঘাটতির দুটি ধরন: আল্লাহর হকে, আর তাঁর বান্দাদের হকে। পাঠক নিজেকে জিজ্ঞেস করতে পারেন, তার নামাজ, সততা আর দেনার কী অবস্থা। কার উপর অন্যায় করেছেন, অথচ এখনো তার কাছে মাফ চাননি বা ক্ষতিপূরণ দেননি। আয়াতটি এমন এক দিনের নাম নেয়, যা এখনো আসেনি। যতদিন আসেনি, দুটি তালিকা নিয়েই কাজ করা যায়। আগাম সতর্কবাণীর ভেতরে লুকানো রহমত এটাই।"
          }
        ]
      }
    ]
  }
});
