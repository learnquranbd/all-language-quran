/**
 * Tadabbur long-form articles — surah 55.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "55:13": {
    "sections": [
      {
        "h": {
          "en": "The Refrain of ar-Rahman",
          "bn": "আর-রাহমানের ধুয়া"
        },
        "p": [
          {
            "en": "Few sentences in the Quran repeat like this one: fa-bi-ayyi ala'i rabbikuma tukadhdhiban — then which of the favors of your Lord will you two deny? It sounds thirty-one times in Surah ar-Rahman, and its first sounding is here at 55:13 itself. A surah built on repetition is doing something deliberate: the question returns after nearly every gift and scene the surah displays, pinning each one down before the listener can let it slide past unexamined.",
            "bn": "কুরআনে এই বাক্যটির মতো পুনরাবৃত্তি খুব কম বাক্যেরই আছে: ফাবিআইয়ি আলাই রাব্বিকুমা তুকাযযিবান — সুতরাং তোমরা উভয়ে তোমাদের রবের কোন কোন অনুগ্রহ অস্বীকার করবে? এটি সূরা আর-রাহমানে একত্রিশ বার ধ্বনিত হয়, আর তার প্রথম ধ্বনি এখানে — 55:13 আয়াতে। পুনরাবৃত্তির উপর গড়া একটি সূরা সজ্ঞানেই কিছু করছে: সূরাটি যত দান ও দৃশ্য মেলে ধরে, প্রায় প্রতিটির পরেই প্রশ্নটি ফিরে আসে — প্রতিটি দানকে গেঁথে ধরে, শ্রোতা তাকে অযাচাই গলে যেতে দেওয়ার আগেই।"
          },
          {
            "en": "The surah's very name sets the question's tone. It opens with a single name of Allah standing alone as a complete verse: ar-Rahman, the All-Merciful — the surah of favors is signed by mercy before a single favor is listed. So the recurring question is not an interrogation by a prosecutor but a reminder from a Giver; the commentators note that mercy is the fountain from which everything the surah lists flows, from the Quran itself to the fruit of the earth.",
            "bn": "সূরাটির নামই প্রশ্নের সুর বেঁধে দেয়। এটি খোলে আল্লাহর একটিমাত্র নাম দিয়ে, যা একাই একটি পূর্ণ আয়াত: আর-রাহমান — পরম করুণাময় — অনুগ্রহের সূরাটিতে একটিও অনুগ্রহ তালিকাভুক্ত হওয়ার আগে করুণার সই পড়ে যায়। তাই ফিরে-আসা প্রশ্নটি কোনো অভিযোক্তার জেরা নয়, বরং এক দাতার স্মরণিকা; মুফাসসিরগণ লক্ষ করেন, করুণাই সেই ফোয়ারা, যা থেকে সূরাটির তালিকার সবকিছু প্রবাহিত — খোদ কুরআন থেকে শুরু করে যমীনের ফল পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the First Asking",
          "bn": "প্রথম জিজ্ঞাসার আগে"
        },
        "p": [
          {
            "en": "The first twelve verses stack the gifts the question will ask about. 55:1-4 tell it: ar-Rahman taught the Quran, created man, taught him bayan — clear expression. The commentators pause on the order of mention: the teaching of the Quran is named before the creation of man, as if to say the reason preceded the creature. Then 55:5-12 follow: the sun and the moon by precise reckoning, the star and the tree prostrating, the sky raised and the balance set, the earth laid out with fruit, palms, husked grain and fragrant herbs.",
            "bn": "প্রথম বারোটি আয়াত সেই দানগুলো স্তূপ করে, যেগুলোর কথা প্রশ্নটি জিজ্ঞেস করবে। 55:1-4 বলে: আর-রাহমান কুরআন শিখিয়েছেন, মানুষ সৃষ্টি করেছেন, তাকে শিখিয়েছেন বায়ান — স্পষ্ট প্রকাশ। মুফাসসিরগণ উল্লেখের ক্রমে থামেন: কুরআন শেখানোর কথা এসেছে মানুষ সৃষ্টির আগে — যেন বলা হচ্ছে, উদ্দেশ্যটি ছিল সৃষ্টিরও আগে। তারপর 55:5-12 আসে: সূর্য ও চাঁদ নিখুঁত হিসাবে, তারকা ও গাছ সিজদারত, আকাশ সমুন্নত ও দাঁড়িপাল্লা স্থাপিত, আর যমীন বিছানো — ফলে, খেজুরগাছে, খোসাযুক্ত শস্যদানায় ও সুগন্ধি লতাপাতায়।"
          },
          {
            "en": "Then the question falls for the first time. Everything just listed is either unpurchasable or unnoticed: no one bills us for the sun's punctuality, and no one thanks anyone for grain husks or fragrance. The refrain's placement teaches its method — favors are easiest to deny not by argument but by inattention, and the question is aimed less at the tongue that would deny than at the attention that already has.",
            "bn": "তারপর প্রথমবারের মতো প্রশ্নটি নামে। এইমাত্র তালিকাভুক্ত সবকিছুই হয় কেনা যায় না, নয় নজরেই পড়ে না: সূর্যের সময়ানুবর্তিতার জন্য কেউ আমাদের বিল পাঠায় না, আর শস্যের খোসা বা সুগন্ধের জন্য কেউ কাউকে ধন্যবাদও দেয় না। ধুয়াটির অবস্থানই তার পদ্ধতি শেখায় — অনুগ্রহ অস্বীকারের সবচেয়ে সহজ পথ যুক্তি নয়, অমনোযোগ; আর প্রশ্নটির নিশানা যে-জিহ্বা অস্বীকার করবে তার চেয়ে বেশি সেই মনোযোগ, যা ইতিমধ্যেই অস্বীকার করে বসে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Dual Address",
          "bn": "দ্বিবচনের সম্বোধন"
        },
        "p": [
          {
            "en": "The grammar is dual throughout: rabbikuma, the Lord of you two; tukadhdhiban, will you two deny. The two addressed are the jinn and mankind, whom the surah later calls out by name in 55:33 — O company of jinn and mankind — and in 55:31 names as the two weighty races, ath-thaqalan. Both orders of creation receive the same gifts, stand before the same reckoning, and are asked the same question, favor by favor, as equals in accountability.",
            "bn": "ব্যাকরণ পুরোটা জুড়েই দ্বিবচনে: রাব্বিকুমা — তোমাদের দুইয়ের রব; তুকাযযিবান — তোমরা দুইজন কি অস্বীকার করবে। সম্বোধিত দুইজন হলো জিন ও মানুষ — সূরাটি পরে 55:33 আয়াতে নাম ধরে তাদের ডাকে — হে জিন ও মানুষের দল — আর 55:31 আয়াতে তাদের নাম দেয় দুই ভারী জাতি — আস-সাকালান। সৃষ্টির উভয় স্তরই একই দান পায়, একই হিসাবের সামনে দাঁড়ায়, আর জবাবদিহিতে সমান হয়ে অনুগ্রহের পর অনুগ্রহ ধরে একই প্রশ্নের মুখোমুখি হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Denial by Ingratitude",
          "bn": "অকৃতজ্ঞতায় অস্বীকার"
        },
        "p": [
          {
            "en": "Tukadhdhiban is from takdhib, to declare false. How does one call a favor a lie? The commentators answer: by attributing it elsewhere — to luck, to one's own cleverness, to no one; by using it against the Giver; by letting familiarity file it under the ordinary. Denial of blessings rarely announces itself as unbelief; it lives quietly as ingratitude. The refrain makes every listed gift a question requiring an answer, and silence itself becomes an answer.",
            "bn": "তুকাযযিবান এসেছে তাকযীব থেকে — মিথ্যা ঘোষণা করা। একটি অনুগ্রহকে মিথ্যা বলে কীভাবে? মুফাসসিরগণ উত্তর দেন: তাকে অন্য খাতে লিখে — ভাগ্যের নামে, নিজের চাতুর্যের নামে, কারও নামেই না লিখে; তাকে দাতার বিরুদ্ধেই ব্যবহার করে; অভ্যস্ততাকে তাকে সাধারণের খোপে ফেলতে দিয়ে। নিয়ামত অস্বীকার খুব কমই নিজেকে কুফর বলে ঘোষণা করে; সে চুপচাপ বেঁচে থাকে অকৃতজ্ঞতা হয়ে। ধুয়াটি তালিকার প্রতিটি দানকে বানায় জবাব-দাবি-করা প্রশ্ন, আর তখন নীরবতাও একটা জবাব হয়ে দাঁড়ায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Jinn Answered Better",
          "bn": "জিনেরা উত্তম জবাব দিয়েছিল"
        },
        "p": [
          {
            "en": "At-Tirmidhi records from Jabir (RA) — in a report he himself calls gharib — that the Prophet ﷺ recited Surah ar-Rahman to his companions, and they were silent. He told them that the jinn had been better in response than they were: each time he recited fa-bi-ayyi ala'i rabbikuma tukadhdhiban, the jinn said — none of Your favors, our Lord, do we deny; Yours is the praise. The refrain, in other words, expects a reply. It is not rhetoric to be admired but a question to be answered, aloud.",
            "bn": "আত-তিরমিযী জাবির (রাঃ) থেকে বর্ণনা করেন — যে বর্ণনাকে তিনি নিজেই \"গরীব\" বলেছেন — নবী ﷺ সাহাবীদের সূরা আর-রাহমান পড়ে শোনালেন, আর তাঁরা নীরব রইলেন। তিনি তাঁদের বললেন, জিনেরা জবাবে তাঁদের চেয়ে উত্তম ছিল: যতবার তিনি পড়েছেন ফাবিআইয়ি আলাই রাব্বিকুমা তুকাযযিবান, জিনেরা বলেছে — হে আমাদের রব, আপনার কোনো নিয়ামতই আমরা অস্বীকার করি না; সমস্ত প্রশংসা আপনারই। অর্থাৎ ধুয়াটি একটি জবাব প্রত্যাশা করে। এটি মুগ্ধ হয়ে শোনার অলঙ্কার নয়, বরং সরবে উত্তর দেওয়ার প্রশ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Even After Warnings",
          "bn": "সতর্কবাণীর পরেও"
        },
        "p": [
          {
            "en": "The refrain does not only follow pleasant verses. It sounds after 55:35, which threatens a flame of fire and smoke against which there is no defense, and after the scenes of judgment that follow. The commentators draw the lesson: the warning itself is a favor — a hazard marked in advance is a mercy to travelers — and deliverance from what is described is a favor greater still. Even justice, for those who will stand safe on its right side, belongs on the list of ala'.",
            "bn": "ধুয়াটি কেবল প্রীতিকর আয়াতের পরে আসে না। এটি ধ্বনিত হয় 55:35 আয়াতের পরেও, যা হুমকি দেয় আগুনের শিখা ও ধোঁয়ার — যার বিরুদ্ধে কোনো প্রতিরক্ষা নেই — এবং তার পরের বিচার-দৃশ্যগুলোর পরেও। মুফাসসিরগণ শিক্ষাটি টেনে বের করেন: সতর্কবাণী নিজেই এক অনুগ্রহ — আগে থেকে চিহ্নিত বিপদ পথিকদের জন্য রহমত — আর যা বর্ণিত হলো তা থেকে মুক্তি আরও বড় অনুগ্রহ। এমনকি ন্যায়বিচারও — যারা তার নিরাপদ পাশে দাঁড়াবে তাদের জন্য — আলা'-এর তালিকাতেই পড়ে।"
          },
          {
            "en": "The lived form of the verse is the trained pause. In recitation, answer the refrain as the jinn did. Outside recitation, borrow its method: after the meal, the recovery, the safe arrival, the ordinary Tuesday, let the question sound once — which of the favors of your Lord would you deny? — and answer it. 16:18 concedes that we cannot count His favors; ar-Rahman never asks us to finish counting them, only to stop denying them, one at a time.",
            "bn": "আয়াতটির যাপিত রূপ হলো অনুশীলিত বিরতি। তিলাওয়াতের সময় ধুয়াটির জবাব দিন, যেমন জিনেরা দিয়েছিল। তিলাওয়াতের বাইরে এর পদ্ধতিটি ধার করুন: খাওয়ার পরে, রোগমুক্তির পরে, নিরাপদে পৌঁছানোর পরে, সাদামাটা এক মঙ্গলবারের পরে — প্রশ্নটিকে একবার বাজতে দিন — তোমার রবের কোন কোন অনুগ্রহ তুমি অস্বীকার করবে? — এবং জবাব দিন। 16:18 স্বীকার করে, আমরা তাঁর নিয়ামত গুনে শেষ করতে পারব না; আর-রাহমান কখনো গুনে শেষ করতে বলে না — বলে কেবল অস্বীকার করা থামাতে, একটির পর একটি করে।"
          }
        ]
      }
    ]
  },
  "55:26-27": {
    "sections": [
      {
        "h": {
          "en": "Everyone Upon It",
          "bn": "এর উপর যারা আছে"
        },
        "p": [
          {
            "en": "Kullu man alayha fan — everyone upon it is passing away. The pronoun in alayha, upon it, has no noun standing beside it; the commentators refer it back to the earth, which the surah had laid out for the creatures earlier, at 55:10 in its opening list. The word for those upon it is man, who, the Arabic for beings with reason rather than things. The wider case is stated elsewhere: 28:88 says everything will perish except His Face.",
            "bn": "কুল্লু মান আলাইহা ফান — এর উপর যারা আছে সবাই বিলীয়মান। 'আলাইহা' অর্থাৎ 'এর উপর' — এই সর্বনামটির পাশে কোনো বিশেষ্য নেই; মুফাসসিরগণ একে ফিরিয়ে দেন যমীনের দিকে, যাকে সূরাটি আগেই তার সূচনা-তালিকায়, 55:10 আয়াতে, প্রাণীকুলের জন্য বিছিয়ে দিয়েছে। যারা এর উপর আছে তাদের বোঝাতে শব্দটি 'মান' — 'যারা' — আরবিতে যা বস্তু নয়, বুদ্ধিমান সত্তাদের জন্য ব্যবহৃত হয়। আরও ব্যাপক কথাটি বলা হয়েছে অন্যত্র: 28:88 আয়াত বলে, তাঁর চেহারা ছাড়া সবকিছুই ধ্বংসশীল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Participle, Not a Forecast",
          "bn": "ভবিষ্যদ্বাণী নয়, একটি বিশেষণ"
        },
        "p": [
          {
            "en": "Fan is the active participle, not a future verb. Arabic could have said everyone upon it will perish as an event scheduled for later; instead it describes a state that is already the case. Everyone upon the earth is perishing — in the process, on the way out, currently in the condition of passing. That grammatical choice moves the whole verse out of eschatology and into this afternoon. Nothing has to happen for the sentence to be true.",
            "bn": "'ফান' হলো কর্তৃবাচক বিশেষণ, ভবিষ্যৎকালের ক্রিয়া নয়। আরবি চাইলে বলতে পারত — এর উপর যারা আছে সবাই পরে কোনো এক সময় ধ্বংস হবে, যেন একটি নির্ধারিত ঘটনা; তার বদলে এটি এমন একটি অবস্থার বর্ণনা দেয় যা এখনই সত্য। যমীনের উপর প্রত্যেকেই ধ্বংস হয়ে চলেছে — চলমান প্রক্রিয়ায়, বিদায়ের পথে, এখনই বিলীয়মান অবস্থায়। এই ব্যাকরণগত বাছাই গোটা আয়াতটিকে পরকালের আলোচনা থেকে সরিয়ে আজ বিকেলের ভেতর এনে ফেলে। বাক্যটি সত্য হওয়ার জন্য নতুন কিছু ঘটার দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "And the Face of Your Lord Remains",
          "bn": "আর থেকে যায় আপনার রবের চেহারা"
        },
        "p": [
          {
            "en": "Wa yabqa wajhu rabbika. Baqa', remaining, is the exact counterpart of fana', passing, and the two verses are built as one balanced sentence: everything on this side goes, that on the other side stays. Ahl as-Sunnah affirm the wajh as Allah affirmed it for Himself, without likening it to anything created and without emptying the word of meaning; among the mufassirun there are also those who gloss wajh here as His very Self.",
            "bn": "ওয়া ইয়াবকা ওয়াজহু রাব্বিক। 'বাকা' অর্থাৎ থেকে যাওয়া হলো 'ফানা' অর্থাৎ বিলীন হওয়ার ঠিক বিপরীত জোড়া, আর আয়াত দুটি গাঁথা হয়েছে একটিই ভারসাম্যপূর্ণ বাক্যের মতো: এ পাশের সবকিছু চলে যায়, ও পাশে যা আছে তা থেকে যায়। আহলুস সুন্নাহ 'ওয়াজহ'-কে সেভাবেই স্বীকার করেন যেভাবে আল্লাহ নিজের জন্য তা সাব্যস্ত করেছেন — সৃষ্টির কোনো কিছুর সঙ্গে তুলনা না করে এবং শব্দটিকে অর্থশূন্য না করে; মুফাসসিরগণের মধ্যে এমনও আছেন যাঁরা এখানে 'ওয়াজহ'-কে তাঁর সত্তা অর্থে ব্যাখ্যা করেন।"
          },
          {
            "en": "The word does other work in the Quran that is worth holding beside this. 2:115 says that wherever you turn, there is the Face of Allah. And 76:9 uses it for motive: we feed you only for the Face of Allah, wanting from you neither reward nor thanks. So the thing that remains is also the thing an act can be aimed at — which quietly tells you what to do with a world described as already perishing.",
            "bn": "কুরআনে শব্দটি আরও যে কাজ করে, তা এর পাশে রাখা দরকার। 2:115 আয়াত বলে, তোমরা যেদিকেই মুখ ফেরাও, সেদিকেই আল্লাহর চেহারা। আর 76:9 আয়াত একে ব্যবহার করে উদ্দেশ্যের অর্থে: আমরা তোমাদের খাওয়াই কেবল আল্লাহর চেহারার উদ্দেশে, তোমাদের কাছে না চাই প্রতিদান, না চাই কৃতজ্ঞতা। অর্থাৎ যা থেকে যায়, সেটিই আবার এমন কিছু যার দিকে একটি কাজকে তাক করা যায় — আর এভাবেই নীরবে বলে দেওয়া হয়, ইতিমধ্যেই বিলীয়মান বলে বর্ণিত এই জগৎটিকে নিয়ে কী করতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Owner of Majesty and Honour",
          "bn": "মহিমা ও সম্মানের অধিকারী"
        },
        "p": [
          {
            "en": "Dhu al-jalal wal-ikram. Jalal is greatness that overwhelms and puts a creature in its place; ikram is the generosity that honours and lifts one up. The title holds fear and hope together in a few words, which is why it is chosen here rather than a name of power alone. What remains is not merely the strongest thing; it is the thing that both humbles you and treats you generously.",
            "bn": "যুল-জালালি ওয়াল-ইকরাম। 'জালাল' হলো সেই মহত্ত্ব যা অভিভূত করে এবং সৃষ্টিকে তার জায়গা চিনিয়ে দেয়; 'ইকরাম' হলো সেই উদারতা যা সম্মান দেয় ও উঁচু করে। উপাধিটি অল্প কয়েকটি শব্দে ভয় ও আশাকে একসঙ্গে ধরে রাখে — এ কারণেই এখানে কেবল ক্ষমতাবাচক কোনো নাম না নিয়ে এটিই বেছে নেওয়া হয়েছে। যা থেকে যায় তা কেবল সবচেয়ে শক্তিশালী কিছু নয়; তা এমন কিছু যা তোমাকে একই সঙ্গে বিনয়ী করে আর উদারভাবে গ্রহণ করে।"
          },
          {
            "en": "There is a fine grammatical detail here. In the reading of Hafs, the phrase at 55:27 stands in the nominative, dhu, agreeing with the Face; at the surah's closing verse, 55:78, it stands in the genitive, dhi, agreeing with your Lord — blessed is the name of your Lord, Owner of Majesty and Honour. The surah opened on a single name at 55:1, ar-Rahman, and it closes on this one, with the same title turned to the Lord Himself.",
            "bn": "এখানে একটি সূক্ষ্ম ব্যাকরণগত বিষয় আছে। হাফসের পাঠে 55:27 আয়াতে শব্দবন্ধটি কর্তৃকারকে — 'যূ' — চেহারার সঙ্গে সংগতি রেখে; আর সূরার শেষ আয়াত 55:78 আয়াতে তা সম্বন্ধপদে — 'যী' — 'আপনার রব'-এর সঙ্গে সংগতি রেখে: মহিমা ও সম্মানের অধিকারী আপনার রবের নাম বড়ই বরকতময়। সূরাটি 55:1 আয়াতে একটিমাত্র নাম দিয়ে শুরু হয়েছিল — আর-রাহমান — আর শেষ হয় এই নামটি দিয়ে, একই উপাধি এবার স্বয়ং রবের দিকে ফেরানো।"
          }
        ]
      },
      {
        "h": {
          "en": "What Baqa Asks For",
          "bn": "'বাকা' যা দাবি করে"
        },
        "p": [
          {
            "en": "If everything on the earth is already in the state of passing, then the worth of a thing is measured by what survives it. That is not a mood the verse produces; it is an arithmetic it hands you. 18:46 does the same sum openly: wealth and children are the adornment of the worldly life, but the enduring good deeds — al-baqiyat as-salihat, from the very root of yabqa in our verse — are better with your Lord for reward and better for hope.",
            "bn": "যমীনের সবকিছু যদি ইতিমধ্যেই বিলীয়মান অবস্থায় থাকে, তবে কোনো জিনিসের মূল্য মাপা হবে তার পরে যা টিকে থাকে তা দিয়ে। এটি আয়াতের তৈরি করা কোনো মনোভাব নয়; এটি একটি হিসাব, যা আয়াতটি হাতে ধরিয়ে দেয়। 18:46 আয়াত সেই একই হিসাব খোলাখুলি কষে: ধন-সম্পদ ও সন্তানাদি পার্থিব জীবনের শোভা, কিন্তু স্থায়ী সৎকাজ — আল-বাকিয়াতুস সালিহাত, আমাদের আয়াতের 'ইয়াবকা' শব্দের ঠিক সেই ধাতু থেকেই — তোমার রবের কাছে পুরস্কারে উত্তম এবং আকাঙ্ক্ষার ভিত্তি হিসেবেও উত্তম।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways to Live It",
          "bn": "এটি যাপনের দুটি পথ"
        },
        "p": [
          {
            "en": "The first is already in your prayer. Muslim relates from Thawban (RA) that when the Prophet ﷺ finished his prayer he sought forgiveness three times and then said: O Allah, You are as-Salam, and from You is peace; blessed are You, O Owner of Majesty and Honour. The title of 55:27 was placed at the end of every obligatory prayer, so a Muslim says aloud, five times a day, the name of the One who remains.",
            "bn": "প্রথম পথটি ইতিমধ্যেই আপনার নামাযের ভেতরে আছে। মুসলিম সাওবান (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নামায শেষ করে তিনবার ইস্তিগফার করতেন, তারপর বলতেন: হে আল্লাহ, আপনিই আস-সালাম, আর আপনার কাছ থেকেই শান্তি; আপনি বরকতময়, হে মহিমা ও সম্মানের অধিকারী। 55:27 আয়াতের উপাধিটিকে বসিয়ে দেওয়া হয়েছে প্রতিটি ফরয নামাযের শেষে, যাতে একজন মুসলিম দিনে পাঁচবার সরবে উচ্চারণ করে সেই সত্তার নাম, যিনি থেকে যান।"
          },
          {
            "en": "The second is a question to put to a decision before you make it: what part of this survives the earth it is done on? A meal cooked for a neighbour, an hour of study, a debt forgiven, a prayer nobody saw — each of these is done on perishing ground and yet aimed past it. The verse does not ask you to leave the world. It asks you to stop expecting the world to keep anything for you.",
            "bn": "দ্বিতীয় পথটি হলো সিদ্ধান্ত নেওয়ার আগে সেটিকে একটি প্রশ্ন করা: এর কোন অংশটি সেই যমীনকে অতিক্রম করে টিকে থাকবে, যার উপর দাঁড়িয়ে কাজটি করা হচ্ছে? প্রতিবেশীর জন্য রান্না করা এক বেলার খাবার, এক ঘণ্টার পড়াশোনা, মাফ করে দেওয়া একটি ঋণ, কেউ দেখেনি এমন একটি নামায — প্রতিটিই করা হয় বিলীয়মান মাটির উপর, অথচ তাক করা থাকে তার ওপারে। আয়াতটি আপনাকে দুনিয়া ছাড়তে বলে না। বলে কেবল, দুনিয়া আপনার জন্য কিছু জমিয়ে রাখবে — এই প্রত্যাশাটি ছাড়তে।"
          }
        ]
      }
    ]
  },
  "55:46-47": {
    "sections": [
      {
        "h": {
          "en": "Where the Turn Happens",
          "bn": "মোড়টি যেখানে ঘটে"
        },
        "p": [
          {
            "en": "The verses just before this one are not gentle. 55:43 points and says: this is Jahannam, which the criminals used to deny. 55:44 has them circulating between it and scalding water heated to the utmost. 55:45 sounds the refrain. Then 55:46 turns to the other side: wa liman khafa maqama rabbihi jannatan — and for whoever feared the standing before his Lord, two gardens.",
            "bn": "এর ঠিক আগের আয়াতগুলো কোমল নয়। 55:43 আয়াত আঙুল তুলে বলে: এই সেই জাহান্নাম, যাকে অপরাধীরা অস্বীকার করত। 55:44 আয়াতে তারা ঘুরতে থাকে সেটির আর চরমভাবে উত্তপ্ত ফুটন্ত পানির মাঝখানে। 55:45 আয়াতে বাজে সেই ধুয়া। এরপর 55:46 আয়াত ফিরে যায় অন্য পাশে: 'ওয়া লিমান খাফা মাকামা রাব্বিহী জান্নাতান' — আর যে তার রবের সামনে দাঁড়ানোকে ভয় করেছে, তার জন্য দুটি বাগান।"
          },
          {
            "en": "The whole verse is five words of Arabic, and it contains both the condition and its reward. Everything that follows to the end of the surah is the description of what those five words bought. Ar-Rahman has been alternating gifts and warnings throughout; the reward passage opening here is the longest continuous stretch of description anywhere in it.",
            "bn": "গোটা আয়াতটি আরবিতে পাঁচটি শব্দ, আর তার ভেতরেই আছে শর্ত ও তার পুরস্কার দুটোই। এরপর সূরার শেষ পর্যন্ত যা কিছু আসে, সবই সেই পাঁচটি শব্দ যা কিনেছে তার বর্ণনা। আর-রাহমান পুরো সূরাজুড়েই নিয়ামত ও সতর্কবাণী পালা করে সাজিয়ে এসেছে; এখানে যে পুরস্কারের অংশটি শুরু হচ্ছে, তা এই সূরার সবচেয়ে দীর্ঘ একটানা বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Standing Before His Lord",
          "bn": "রবের সামনে দাঁড়ানো"
        },
        "p": [
          {
            "en": "Maqam is a noun of place and of standing, and here it is joined to rabbihi, his Lord. Ibn Kathir reads khafa maqama rabbihi as fearing the standing before his Lord on the Day of Resurrection, and he pairs it at once with 79:40, which uses the identical phrase and then adds what the fear does: and restrained the soul from desire.",
            "bn": "'মাকাম' স্থান ও দাঁড়ানো — দুই অর্থেরই বিশেষ্য, আর এখানে তা যুক্ত হয়েছে 'রাব্বিহী' অর্থাৎ তার রবের সঙ্গে। ইবনে কাসীর 'খাফা মাকামা রাব্বিহী'-কে পড়েন কিয়ামতের দিন তার রবের সামনে দাঁড়ানোর ভয় অর্থে, আর সঙ্গে সঙ্গেই মিলিয়ে দেন 79:40 আয়াতের সঙ্গে, যেখানে হুবহু একই শব্দবন্ধ আছে এবং তারপর যোগ করা হয়েছে এই ভয় কী করে: আর সে নিজের প্রবৃত্তিকে খেয়ালখুশি থেকে বিরত রেখেছে।"
          },
          {
            "en": "79:41 then completes the sentence: so indeed Paradise is the refuge. The Quran states the same condition twice, in two surahs, and attaches a garden to it both times. That repetition is the strongest gloss available on our verse. What is being rewarded is not anxiety and not a temperament; it is a fear that reached as far as the hand and stopped it.",
            "bn": "এরপর 79:41 আয়াত বাক্যটি পূর্ণ করে: তবে নিশ্চয়ই জান্নাতই তার ঠিকানা। কুরআন একই শর্ত দুবার বলে, দুটি সূরায়, আর দুবারই তার সঙ্গে একটি বাগান জুড়ে দেয়। এই পুনরাবৃত্তিই আমাদের আয়াতটির সবচেয়ে জোরালো ব্যাখ্যা। যার প্রতিদান দেওয়া হচ্ছে তা উদ্বেগ নয়, কোনো স্বভাবপ্রকৃতিও নয়; তা এমন এক ভয় যা হাত পর্যন্ত পৌঁছেছে এবং হাতটিকে থামিয়ে দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man, Two Gardens, Then Two More",
          "bn": "একজন মানুষ, দুটি বাগান, তারপর আরও দুটি"
        },
        "p": [
          {
            "en": "Liman is singular: for whoever, one person. Jannatan is dual: two gardens. One man, two of them, and the Arabic does not bury the number inside a plural. Then, after the descriptions have run their course, 55:62 adds wa min dunihima jannatan — and besides those two, two gardens. Four in all, and it is the Arabic duals that do the counting.",
            "bn": "'লিমান' একবচন: যে-ই হোক, একজন মানুষ। 'জান্নাতান' দ্বিবচন: দুটি বাগান। একজন মানুষ, তার জন্য দুটি — আর আরবি সংখ্যাটিকে বহুবচনের ভেতর লুকিয়ে ফেলে না। এরপর বর্ণনাগুলো শেষ হলে 55:62 আয়াত যোগ করে 'ওয়া মিন দূনিহিমা জান্নাতান' — আর এ দুটি ছাড়াও দুটি বাগান। সব মিলিয়ে চারটি, আর গণনাটি করে দেয় আরবির দ্বিবচনগুলোই।"
          },
          {
            "en": "The two pairs are described differently. The first has two springs flowing at 55:50 and of every fruit two kinds at 55:52; the second has two springs gushing at 55:66 and fruit, date-palms and pomegranates at 55:68. Min dunihima is read by the mufassirun as below those two in rank. The reward is graded, and the grading shows in the vocabulary rather than being announced.",
            "bn": "দুই জোড়ার বর্ণনা আলাদা। প্রথম জোড়ায় 55:50 আয়াতে দুটি প্রবহমান ঝর্ণা আর 55:52 আয়াতে প্রত্যেক ফলের দুই রকম; দ্বিতীয় জোড়ায় 55:66 আয়াতে দুটি উচ্ছল ঝর্ণা আর 55:68 আয়াতে ফল, খেজুরগাছ ও আনার। 'মিন দূনিহিমা'-কে মুফাসসিরগণ পড়েন মর্যাদায় ওই দুটির নিচে অর্থে। পুরস্কার স্তরে স্তরে ভাগ করা, আর সেই স্তরভেদ ঘোষণা করা হয় না — শব্দচয়নেই তা ধরা পড়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Silver and Gold",
          "bn": "রুপা ও সোনা"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Musa al-Ash'ari (RA) that the Prophet ﷺ said: two gardens of silver, their vessels and all that is in them, and two gardens of gold, their vessels and all that is in them; and there is nothing between the people and their looking upon their Lord except the cloak of pride upon His Face, in the Garden of Adn.",
            "bn": "ইমাম বুখারী আবু মূসা আল-আশ'আরী (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: দুটি বাগান রুপার — তার পাত্রসামগ্রী ও তাতে যা কিছু আছে সবই; আর দুটি বাগান সোনার — তার পাত্রসামগ্রী ও তাতে যা কিছু আছে সবই; আর জান্নাতুল আদনে মানুষ ও তাদের রবকে দেখার মাঝে কেবল তাঁর চেহারার ওপরের গর্বের চাদরটুকু ছাড়া আর কিছুই নেই।"
          },
          {
            "en": "That hadith is the classical key to the four gardens, and it also places the ceiling somewhere other than the gardens themselves: what is withheld is the sight of Him, and what withholds it is named. Ibn Kathir adds a point easy to miss — the verse says liman, whoever, without restriction, so the promise reaches the believers among the jinn too, which is what the dual refrain has assumed throughout.",
            "bn": "এই হাদীসটিই চারটি বাগান বোঝার ধ্রুপদী চাবি, আর এটি সর্বোচ্চ সীমাটিকেও বাগানের বাইরে অন্য কোথাও বসায়: যা আটকে রাখা হয়েছে তা হলো তাঁকে দেখা, আর যা তা আটকে রেখেছে তার নামও বলা আছে। ইবনে কাসীর এমন একটি কথা যোগ করেন যা সহজেই চোখ এড়ায় — আয়াতে বলা হয়েছে 'লিমান', অর্থাৎ 'যে-ই হোক', কোনো সীমা ছাড়াই; তাই প্রতিশ্রুতিটি জিনদের মধ্যকার মুমিনদের কাছেও পৌঁছায়, আর দ্বিবচনের ধুয়াটি শুরু থেকেই তা-ই ধরে নিয়ে এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Question in Between",
          "bn": "মাঝখানের প্রশ্নটি"
        },
        "p": [
          {
            "en": "55:47 is the refrain, and its position here is exact. It does not fall after the gardens have been described, because 55:48 has not yet said a word about their branches. It falls between the promise and its description, so the favour the hearer is asked about is the promise itself — that such a thing was pledged at all, to someone who has not yet seen any of it.",
            "bn": "55:47 আয়াতটিই সেই ধুয়া, আর এখানে তার অবস্থানটি নিখুঁত। এটি বাগানের বর্ণনার পরে আসে না, কারণ 55:48 আয়াত তখনো তাদের শাখাপল্লব নিয়ে একটি শব্দও বলেনি। এটি আসে প্রতিশ্রুতি আর তার বর্ণনার মাঝখানে; ফলে শ্রোতাকে যে নিয়ামত সম্পর্কে জিজ্ঞেস করা হচ্ছে তা স্বয়ং প্রতিশ্রুতিটিই — এমন একটি জিনিস আদৌ যে প্রতিশ্রুত হলো, তাও এমন কারও জন্য যে এখনো তার কিছুই দেখেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Fear That Builds It",
          "bn": "যে ভয় এটি গড়ে"
        },
        "p": [
          {
            "en": "The practical content of this verse is a single mechanism: a fear of one specific moment, applied at the moment of a decision. 79:40 supplies the test — did the fear restrain the soul from what it wanted? A fear that changes nothing is not what has been described here. A fear that stops a hand is, whether or not any particular feeling accompanied it.",
            "bn": "এই আয়াতের ব্যবহারিক সারবস্তু একটিমাত্র কার্যপ্রণালী: একটি নির্দিষ্ট মুহূর্তের ভয়, প্রয়োগ করা হচ্ছে সিদ্ধান্তের মুহূর্তে। 79:40 আয়াত পরীক্ষাটি সরবরাহ করে — ভয়টি কি প্রবৃত্তিকে তার চাওয়া জিনিস থেকে বিরত রেখেছিল? যে ভয় কিছুই বদলায় না, এখানে তার বর্ণনা দেওয়া হয়নি। যে ভয় একটি হাতকে থামিয়ে দেয়, তারই বর্ণনা দেওয়া হয়েছে — তার সঙ্গে কোনো বিশেষ অনুভূতি ছিল কি ছিল না, তা নির্বিশেষে।"
          },
          {
            "en": "It is worth noticing what the verse does not require. Not scholarship, not a public role, not one great deed; just a person who took the standing seriously enough to let it govern him. That is why the reward is stated before any description begins. The gardens are enormous and the entry condition is small, and the surah puts them in that order on purpose.",
            "bn": "আয়াতটি যা যা দাবি করে না, তা লক্ষ করার মতো। পাণ্ডিত্য নয়, জনসমাজে কোনো ভূমিকা নয়, একটিমাত্র মহৎ কীর্তিও নয়; কেবল এমন একজন মানুষ, যে সেই দাঁড়ানোর মুহূর্তটিকে এতটাই গুরুত্ব দিয়েছে যে তা তার জীবনকে পরিচালনা করেছে। এ কারণেই কোনো বর্ণনা শুরু হওয়ার আগেই পুরস্কারটি বলে দেওয়া হয়। বাগানগুলো বিশাল আর প্রবেশের শর্তটি ছোট, আর সূরাটি ইচ্ছা করেই এই ক্রমে সাজিয়েছে।"
          }
        ]
      }
    ]
  },
  "55:60": {
    "sections": [
      {
        "h": {
          "en": "A Question Built to Deny",
          "bn": "যে প্রশ্ন অস্বীকার করতেই গড়া"
        },
        "p": [
          {
            "en": "Hal jaza' al-ihsani illa al-ihsan. Five words in Arabic, and the shape of the sentence carries as much as the vocabulary. Hal is the interrogative particle, but paired with illa, except, it forms the construction Arabic uses for emphatic negation dressed as a question. The literal sense is: is the recompense of ihsan anything except ihsan? The intended sense is: there is nothing else it could be.",
            "bn": "হাল জাযাউল-ইহসানি ইল্লাল-ইহসান। আরবিতে পাঁচটি শব্দ, আর বাক্যের গড়ন শব্দভান্ডারের সমানই ভার বহন করে। হাল একটি প্রশ্নবাচক অব্যয়, কিন্তু ইল্লা অর্থাৎ ‘ছাড়া’-র সাথে জোড়া লেগে এটি সেই গঠন তৈরি করে যা আরবি ব্যবহার করে প্রশ্নের পোশাকে জোরালো অস্বীকার প্রকাশে। আক্ষরিক অর্থ: ইহসানের প্রতিদান কি ইহসান ছাড়া আর কিছু? অভিপ্রেত অর্থ: এটি আর কিছুই হতে পারে না।"
          },
          {
            "en": "A statement would have said the reward of good is good. The question does something a statement cannot: it hands the conclusion to the listener to draw. Nobody is being informed; everybody is being asked to admit what he already knows. That is why the line has travelled so far beyond its own surah, and why it works as an argument even with someone who does not accept the Book it comes from.",
            "bn": "সাধারণ বিবৃতি হলে বলা হতো, ইহসানের প্রতিদান ইহসান। কিন্তু প্রশ্নটি এমন কিছু করে যা বিবৃতি পারে না: সিদ্ধান্তটি টানার ভার শ্রোতার হাতে তুলে দেয়। কাউকে জানানো হচ্ছে না; প্রত্যেককে বলা হচ্ছে সে যা আগে থেকেই জানে তা স্বীকার করতে। এ কারণেই কথাটি নিজের সূরার সীমা ছাড়িয়ে এত দূর গেছে, আর এ কারণেই এটি এমন কারও সাথেও যুক্তি হিসেবে কাজ করে যে এই কিতাবকেই মানে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Jaza and Ihsan",
          "bn": "জাযা ও ইহসান"
        },
        "p": [
          {
            "en": "Jaza is not a gift. It is requital — what is due back, an exact settling of accounts, the same root that gives the phrase jazak Allahu khayran. Putting jaza and ihsan in one sentence is already a claim: that goodness is not left to chance or to the generosity of whoever received it, but falls under a law of return.",
            "bn": "জাযা কোনো উপহার নয়। এটি প্রতিদান — যা ফিরিয়ে দেওয়া প্রাপ্য, হিসাবের নিখুঁত নিষ্পত্তি; একই ধাতু থেকে এসেছে জাযাকাল্লাহু খাইরান বাক্যাংশটি। জাযা ও ইহসানকে এক বাক্যে বসানোই একটি দাবি: কল্যাণ সৌভাগ্যের হাতে বা গ্রহীতার উদারতার হাতে ছেড়ে দেওয়া হয়নি, বরং তা ফিরে আসার একটি বিধানের অধীন।"
          },
          {
            "en": "Ihsan is from husn, beauty. It is not merely doing good but doing it well and completely, without the corners cut that nobody would have noticed. Both occurrences carry the definite article, al-ihsan, so the recompense is not merely something pleasant; it is of the same named kind as the deed. Beauty is repaid with beauty, and the sentence is closed at both ends by the same word.",
            "bn": "ইহসান এসেছে হুসন থেকে, অর্থাৎ সৌন্দর্য। এটি কেবল ভালো কাজ করা নয়, বরং তা ভালোভাবে ও পূর্ণরূপে করা — কেউ টের পেত না এমন কোণগুলোও না কেটে। দুই জায়গাতেই নির্দিষ্টতাবাচক উপসর্গ আছে, আল-ইহসান; তাই প্রতিদান কেবল কোনো আনন্দদায়ক কিছু নয়, বরং কাজটির মতো একই নামের একই জাতের। সৌন্দর্যের প্রতিদান সৌন্দর্য, আর বাক্যটির দুই প্রান্তই বন্ধ হয়েছে একই শব্দ দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nobody Is Named",
          "bn": "কারও নাম নেই"
        },
        "p": [
          {
            "en": "The verse names neither the one who does the ihsan nor the one who repays it. That silence is not a gap; the commentators read the line in more than one direction and the wording carries all of them. It is the servant's ihsan towards his Lord, answered by his Lord's ihsan towards him. It is also ihsan shown to people, whose return is guaranteed even when the people themselves do not provide it.",
            "bn": "আয়াতে কারও নাম নেই — না যে ইহসান করে, না যে প্রতিদান দেয়। এই নীরবতা কোনো ফাঁক নয়; মুফাসসিরগণ পঙ্‌ক্তিটিকে একাধিক দিক থেকে পড়েন, আর শব্দগুলো সবগুলো অর্থই বহন করে। এটি রবের প্রতি বান্দার ইহসান, যার জবাবে আসে বান্দার প্রতি রবের ইহসান। এটি মানুষের প্রতি দেখানো ইহসানও, যার প্রতিদান নিশ্চিত — মানুষ নিজে তা না দিলেও।"
          },
          {
            "en": "Set beside it 10:26: for those who did good is al-husna and more. Husna, the best, plus ziyadah, an addition beyond it. So the law of exact return is not a ceiling. Ihsan is repaid in kind as a minimum, and then something is added that the equation did not require. The verse before us states the floor; the promise elsewhere removes the roof.",
            "bn": "এর পাশে রাখুন 10:26: যারা ইহসান করেছে তাদের জন্য আছে আল-হুসনা এবং আরও কিছু। হুসনা অর্থাৎ সর্বোত্তম, তার সাথে যিয়াদাহ অর্থাৎ তার ওপরে অতিরিক্ত। অর্থাৎ নিখুঁত প্রতিদানের বিধানটি কোনো সিলিং নয়। ইহসানের প্রতিদান অন্তত সমমানে ফিরে আসে, তারপর এমন কিছু যোগ হয় যা সমীকরণের দাবি ছিল না। আমাদের সামনের আয়াতটি মেঝে নির্ধারণ করে; অন্যত্রের প্রতিশ্রুতি ছাদটি সরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Seam Between Two Gardens",
          "bn": "দুই জান্নাতের সংযোগস্থল"
        },
        "p": [
          {
            "en": "Surah ar-Rahman is built on a refrain — so which of the favours of your Lord will you two deny — repeated thirty-one times, and 55:61 is one of those repetitions, coming immediately after our line. The placement matters. From 55:46 the surah has been describing two gardens for the one who feared the standing before his Lord, with their branches, springs and fruits.",
            "bn": "সূরা আর-রাহমান গাঁথা হয়েছে একটি ধুয়ার ওপর — অতএব তোমরা উভয়ে তোমাদের রবের কোন কোন নিয়ামত অস্বীকার করবে — যা একত্রিশবার পুনরাবৃত্ত হয়েছে, আর 55:61 সেই পুনরাবৃত্তিগুলোরই একটি, যা আমাদের পঙ্‌ক্তির ঠিক পরেই আসে। অবস্থানটি গুরুত্বপূর্ণ। 55:46 থেকে সূরাটি বর্ণনা করে আসছে দুটি জান্নাত, যা সেই ব্যক্তির জন্য যে তার রবের সামনে দাঁড়ানোকে ভয় করেছে — তার শাখা, ঝর্ণা ও ফলসহ।"
          },
          {
            "en": "Immediately after the refrain, 55:62 begins the second pair: and besides these two, two other gardens. So our verse sits exactly on the seam. It is not an isolated aphorism about kindness. It is the summary line that explains the entire passage of reward: everything described on either side of it is there because this rule holds. The gardens are the answer to the question the verse asks.",
            "bn": "ধুয়াটির ঠিক পরেই 55:62 দ্বিতীয় জোড়াটি শুরু করে: আর এ দুটি ছাড়াও আরও দুটি জান্নাত। অর্থাৎ আমাদের আয়াতটি ঠিক সংযোগস্থলেই বসে আছে। এটি দয়া নিয়ে বিচ্ছিন্ন কোনো প্রবাদবাক্য নয়। এটি সেই সারসংক্ষেপ যা গোটা পুরস্কার-অংশটিকেই ব্যাখ্যা করে: এর দুই পাশে যা কিছু বর্ণিত, তা আছে কারণ এই বিধানটি সত্য। জান্নাতগুলোই সেই প্রশ্নের উত্তর যা আয়াতটি করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Ihsan in the Sunnah",
          "bn": "সুন্নাহতে ইহসান"
        },
        "p": [
          {
            "en": "The word is given its definition in the hadith of Jibril, recorded in both Sahih al-Bukhari and Sahih Muslim: asked what ihsan is, the Prophet ﷺ answered that it is to worship Allah as though you see Him, and if you do not see Him, then He sees you. Ihsan is therefore not a level of effort but a level of awareness, and everything else follows from it.",
            "bn": "শব্দটির সংজ্ঞা দেওয়া হয়েছে জিবরীলের হাদীসে, যা সহীহ বুখারী ও সহীহ মুসলিম উভয়েই সংরক্ষিত: ইহসান কী জিজ্ঞেস করা হলে নবী ﷺ উত্তর দেন, তা হলো আল্লাহর ইবাদত এমনভাবে করা যেন তুমি তাঁকে দেখছ, আর যদি তুমি তাঁকে না দেখো, তবে তিনি তো তোমাকে দেখছেন। তাই ইহসান পরিশ্রমের কোনো স্তর নয়, বরং সচেতনতার স্তর, আর বাকি সবকিছু তা থেকেই আসে।"
          },
          {
            "en": "Sahih Muslim also preserves the instruction that Allah has prescribed ihsan in everything — and the example given there is the slaughter of an animal, that the blade be sharpened and the creature spared distress. The scope is worth noticing. Ihsan is not reserved for prayer and charity. It is asked for in the most ordinary work a person does with his hands, including work that nobody will inspect.",
            "bn": "সহীহ মুসলিম সেই নির্দেশও সংরক্ষণ করেছে যে আল্লাহ সবকিছুতেই ইহসান ফরজ করেছেন — আর সেখানে উদাহরণ দেওয়া হয়েছে পশু জবাইয়ের, যেন ছুরি ধারালো করা হয় এবং প্রাণীটি কষ্ট থেকে রেহাই পায়। পরিধিটি লক্ষ্য করার মতো। ইহসান কেবল নামাজ ও দানের জন্য বরাদ্দ নয়। এটি চাওয়া হয় মানুষের হাতে করা সবচেয়ে সাধারণ কাজেও, এমন কাজেও যা কেউ পরীক্ষা করে দেখবে না।"
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
            "en": "The practical value of this verse shows up in the moment good is not returned — the favour forgotten, the help repaid with coldness, years of care met with a shrug. The verse does not deny that this happens; it relocates the debt. Because no repayer is named, the account is not with the person who benefited. Expecting return from them is what turns generosity bitter, and this line quietly removes the expectation.",
            "bn": "এই আয়াতের বাস্তব মূল্য টের পাওয়া যায় ঠিক সেই মুহূর্তে যখন ভালোর প্রতিদান ফিরে আসে না — ভুলে যাওয়া উপকার, শীতলতা দিয়ে শোধ করা সাহায্য, বছরের পর বছর যত্নের জবাবে কাঁধ ঝাঁকানো। আয়াত অস্বীকার করে না যে এমন ঘটে; বরং ঋণের খাতাটি সরিয়ে দেয়। যেহেতু কোনো প্রতিদানদাতার নাম নেই, হিসাবটি সেই ব্যক্তির সাথে নয় যে উপকার পেয়েছে। তাদের কাছ থেকে ফেরত আশা করাই উদারতাকে তিক্ত করে তোলে, আর এই পঙ্‌ক্তি নীরবে সেই আশাটিই সরিয়ে নেয়।"
          },
          {
            "en": "It also raises the standard of the work itself. If the return matches the kind, then a job half done returns half done, and quality is not a matter of who is watching. Concretely: finish the thing properly when nobody will check, answer the message you could ignore, sharpen the knife. And read the verse in reverse for a sharper test — if the reward of ihsan is ihsan, what is the reward of the other thing?",
            "bn": "এটি কাজটির মানও উঁচু করে দেয়। প্রতিদান যদি জাতের সাথে মেলে, তবে আধা-করা কাজ আধা-করা হয়েই ফেরে, আর গুণমান কে দেখছে তার ওপর নির্ভর করে না। বাস্তবে: কেউ যাচাই করবে না জেনেও কাজটি ঠিকভাবে শেষ করুন; যে বার্তাটি উপেক্ষা করা যেত তার জবাব দিন; ছুরিটি ধার দিন। আর আয়াতটি উল্টো দিক থেকেও পড়ুন, তাতে পরীক্ষাটি আরও ধারালো হয় — ইহসানের প্রতিদান যদি ইহসান হয়, তবে তার উল্টোটির প্রতিদান কী?"
          }
        ]
      }
    ]
  }
});
