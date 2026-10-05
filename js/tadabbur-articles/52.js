/**
 * Tadabbur long-form articles — surah 52.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "52:31": {
    "sections": [
      {
        "h": {
          "en": "A Reply in Six Words",
          "bn": "ছয়টি শব্দে উত্তর"
        },
        "p": [
          {
            "en": "Qul tarabbasu fa-inni ma'akum mina l-mutarabbisin: say, wait, for I am, with you, among those who wait. The verse is a reply, and it only makes sense beside the claim it answers. In 52:30 the deniers are quoted: a poet, natarabbasu bihi rayba l-manun, for whom we await a blow of fate. The same word for waiting appears once in their claim and twice in the reply. They used it first; the answer hands it straight back to them, and adds nothing else.",
            "bn": "কুল তারাব্বাসূ ফাইন্নী মাআকুম মিনাল মুতারাব্বিসীন: বলো, অপেক্ষা করো, আমিও তোমাদের সঙ্গে অপেক্ষাকারীদের একজন। আয়াতটি একটি জবাব। যে দাবির জবাব, সেটা পাশে না রাখলে এর মানে পুরো খোলে না। ৫২:৩০ আয়াতে অস্বীকারকারীদের কথা উদ্ধৃত হয়েছে: সে একজন কবি, নাতারাব্বাসু বিহী রাইবাল মানূন, আমরা তার উপর কালের আঘাত নেমে আসার অপেক্ষায় আছি। অপেক্ষা বোঝানোর একই শব্দ ওদের দাবিতে আসে একবার, আর জবাবে দুবার। শব্দটা ওরাই প্রথম মুখে এনেছিল। জবাব সেটাই সোজা ওদের হাতে ফিরিয়ে দেয়, এর বেশি কিছু যোগ করে না।"
          },
          {
            "en": "The verse sits in a run of questions about what the deniers said of the Prophet ﷺ. The verse before their claim, 52:29, tells him to keep reminding, and it is treated in its own place. Here the command is a single word, qul, say. At-Tabari spells out who is to hear it: say, O Muhammad, to these polytheists who tell you that you are a poet for whom they await the blow of fate. As-Sa'di calls the reply an answer to this feeble talk, al-kalam as-sakhif.",
            "bn": "নবী ﷺ সম্পর্কে অস্বীকারকারীরা যা বলত, তা নিয়ে পরপর কয়েকটি প্রশ্নের মাঝখানে আয়াতটির জায়গা। ওদের দাবির আগের আয়াত ৫২:২৯ তাঁকে উপদেশ দিয়ে যেতে বলে, সে আলোচনা তার নিজের জায়গায়। এখানে হুকুমটা একটিমাত্র শব্দ: কুল, বলো। কাকে শোনাতে হবে, তাবারী তা খুলে বলেন। হে মুহাম্মাদ, এই মুশরিকদের বলো, যারা তোমাকে বলে তুমি একজন কবি আর তারা তোমার উপর কালের আঘাতের অপেক্ষায় আছে। সা'দী এ জবাবকে বলেন এই অসার কথার উত্তর, আল-কালামুস সাখীফ।"
          }
        ]
      },
      {
        "h": {
          "en": "Counting the Days to a Death",
          "bn": "মৃত্যুর দিন গোনা"
        },
        "p": [
          {
            "en": "What were they waiting for? The Muyassar, explaining 52:30 and 52:31 together, puts it in one word: death. They say he is a poet for whom we await the coming down of death, nuzul al-mawt, and the reply runs: wait for my death. Al-Baghawi and as-Sa'di gloss tarabbasu the same way, intaziru bi l-mawt, wait for my death. Ibn Kathir, in the abridged English covering 52:29 to 52:34, has them say they await a disaster, death for example, and will bear with him until it comes.",
            "bn": "ওরা অপেক্ষা করছিল কিসের? মুয়াসসার ৫২:৩০ ও ৫২:৩১ একসঙ্গে ব্যাখ্যা করে, আর উত্তরটা দেয় এক শব্দে: মৃত্যু। ওরা বলে, সে একজন কবি, আমরা তার উপর মৃত্যু নেমে আসার অপেক্ষায় আছি, নুযূলুল মাওত। জবাবটা তখন দাঁড়ায়: আমার মৃত্যুর অপেক্ষা করো। বাগাভী আর সা'দীও তারাব্বাসূ শব্দের একই ব্যাখ্যা দেন: ইনতাযিরূ বিল মাওত, আমার মৃত্যুর অপেক্ষায় থাকো। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ৫২:২৯ থেকে ৫২:৩৪ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে ওদের কথা এভাবে আসে: আমরা কোনো বিপদের অপেক্ষায় আছি, যেমন মৃত্যু। তা না আসা পর্যন্ত আমরা তাকে সহ্য করে যাব।"
          },
          {
            "en": "That same English text gives the motive: so that we may be rid of his bother and of his Message. The hope was not only that a man would die, but that what he brought would die with him. Ibn Kathir's Arabic on 52:31 then carries a report through Muhammad ibn Ishaq, from Abdullah ibn Abi Najih, from Mujahid, from Ibn Abbas. When Quraysh met in Dar an-Nadwa over the Prophet's affair, one of them said: hold him in bonds, then wait for the blow of fate until he perishes.",
            "bn": "ওই ইংরেজি পাঠেই উদ্দেশ্যটা বলা আছে: যাতে তার উৎপাত আর তার বাণী, দুটো থেকেই আমরা রেহাই পাই। অর্থাৎ ওদের আশা শুধু একজন মানুষের মৃত্যু ছিল না। ওরা চাইছিল, তিনি যা নিয়ে এসেছেন তা-ও তাঁর সঙ্গেই মরে যাক। এরপর ৫২:৩১ আয়াতে ইবন কাসীরের আরবি তাফসীর একটি বর্ণনা আনে। সূত্রটা এই: মুহাম্মাদ ইবন ইসহাক, আবদুল্লাহ ইবন আবী নাজীহ থেকে, তিনি মুজাহিদ থেকে, তিনি ইবন আব্বাস থেকে। নবী ﷺ-এর ব্যাপারে পরামর্শ করতে কুরাইশ দারুন নাদওয়ায় জমা হলে তাদের একজন বলল: ওকে শিকলে বেঁধে রাখো। তারপর কালের আঘাতের অপেক্ষা করো, যতক্ষণ না সে মারা যায়।"
          },
          {
            "en": "The speaker went on: just as the poets before him perished, Zuhayr and an-Nabigha, for he is only one of them. Ibn Kathir adds that Allah revealed about this saying of theirs the words of 52:30. He gives the chain and no verdict on it in the text fetched here, so this article reports it as his report and does not treat it as an established occasion of revelation. Its point is clear enough without that: the label poet was a way of filing him with men whose words had not stopped them from dying.",
            "bn": "লোকটা আরও বলল: আগের কবিরা যেমন মারা গেছে, যুহাইর আর নাবিগা, এ-ও তেমনি মরবে। এ তো ওদেরই একজন। ইবন কাসীর জানান, ওদের এই কথা সম্পর্কেই আল্লাহ ৫২:৩০ আয়াত নাযিল করেন। এখানে যে পাঠ আনা হয়েছে, তাতে তিনি সনদ উল্লেখ করেছেন, কিন্তু বর্ণনাটির মান নিয়ে কোনো রায় দেননি। তাই এই লেখা একে তাঁর আনা বর্ণনা হিসেবেই উল্লেখ করছে, নিশ্চিত শানে নুযূল হিসেবে ধরছে না। তবে মূল কথাটা এমনিতেই পরিষ্কার। কবি তকমাটা ছিল তাঁকে সেই মানুষদের কাতারে ফেলার কৌশল, যাদের কাব্য তাদের মৃত্যু ঠেকাতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Waiting With an Object",
          "bn": "যে অপেক্ষার লক্ষ্য আছে"
        },
        "p": [
          {
            "en": "Every commentator fetched here glosses tarabbasu with the ordinary verb intaziru, wait. Al-Qurtubi gives only that. Ibn Kathir completes the sentence: wait, for I am waiting with you, fa-inni muntazirun ma'akum. Al-Baghawi and as-Sa'di attach the object the deniers had in mind, my death. At-Tabari pairs two verbs, intaziru wa-tamahhalu: wait, and take your time over me with the blow of fate. The second verb concedes them time. Take as long as you like, it says; the length of the wait is not what decides the matter.",
            "bn": "এখানে যত তাফসীর আনা হয়েছে, সবগুলোই তারাব্বাসূ শব্দের ব্যাখ্যা দেয় সাধারণ ক্রিয়া ইনতাযিরূ দিয়ে, অর্থাৎ অপেক্ষা করো। কুরতুবী এটুকুই বলেন। ইবন কাসীর বাক্যটা পূর্ণ করেন: অপেক্ষা করো, আমিও তোমাদের সঙ্গে অপেক্ষায় আছি, ফাইন্নী মুনতাযিরুন মাআকুম। বাগাভী আর সা'দী জুড়ে দেন অস্বীকারকারীদের মনের সেই লক্ষ্য, আমার মৃত্যু। তাবারী দুটি ক্রিয়া পাশাপাশি রাখেন, ইনতাযিরূ ওয়া তামাহহালূ: অপেক্ষা করো, আর আমার ব্যাপারে কালের আঘাতের জন্য যত খুশি সময় নাও। দ্বিতীয় ক্রিয়াটা ওদের সময় ছেড়ে দেয়। যতদিন খুশি অপেক্ষা করো। অপেক্ষা কত লম্বা হলো, তা দিয়ে ফয়সালা হবে না।"
          },
          {
            "en": "The reply's second half gets an object too. At-Tabari reads it as al-mutarabbisina bikum, among those who wait regarding you, the same shape as the deniers' natarabbasu bihi, we wait regarding him. Al-Qurtubi and the Muyassar fill in what is awaited: al-muntazirina bikum al-'adhab, those who wait for the punishment to fall on you. So in these glosses neither side is idle. Each is watching for something to come upon the other, and the verse leaves both watches running side by side.",
            "bn": "জবাবের দ্বিতীয় অংশেরও একটা লক্ষ্য আছে। তাবারী একে পড়েন আল-মুতারাব্বিসীনা বিকুম, তোমাদের ব্যাপারে অপেক্ষাকারীদের একজন। গড়নটা হুবহু অস্বীকারকারীদের নাতারাব্বাসু বিহী-র মতো, যার মানে আমরা তার ব্যাপারে অপেক্ষা করছি। কিসের অপেক্ষা, কুরতুবী আর মুয়াসসার তা বলে দেন: আল-মুনতাযিরীনা বিকুমুল আযাব, যারা তোমাদের উপর আযাব নেমে আসার অপেক্ষায় আছে। এই ব্যাখ্যাগুলোতে তাই কোনো পক্ষই বসে নেই। প্রত্যেকে তাকিয়ে আছে অন্য পক্ষের উপর কিছু একটা নেমে আসার দিকে। আয়াতটি দুটো পাহারাকেই পাশাপাশি চলতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What He Was Told to Await",
          "bn": "তাঁর অপেক্ষা কিসের জন্য"
        },
        "p": [
          {
            "en": "On the Prophet's side, the commentators name the end he waited for in different degrees of detail. At-Tabari says he waits with them hatta ya'tiya amru llahi fikum, until the command of Allah comes upon you, and al-Baghawi uses the same words. Ibn Kathir frames it as a disclosure: you will come to know to whom the final outcome and the victory belong, al-'aqibatu wa-n-nusratu, in this world and the Hereafter. The Muyassar says more briefly: you will see to whom the outcome belongs.",
            "bn": "নবী ﷺ কিসের অপেক্ষায় ছিলেন, তাফসীরকারেরা তা বলেন ভিন্ন ভিন্ন মাত্রার বিস্তারে। তাবারী বলেন, তিনি ওদের সঙ্গে অপেক্ষা করবেন হাত্তা ইয়া'তিয়া আমরুল্লাহি ফীকুম, যতক্ষণ না তোমাদের ব্যাপারে আল্লাহর হুকুম এসে পড়ে। বাগাভীও হুবহু একই কথা বলেন। ইবন কাসীর এটাকে দেখেন একটা উন্মোচন হিসেবে। তোমরা জানতে পারবে, শেষ পরিণতি আর বিজয় কার, আল-আকিবাতু ওয়ান নুসরাহ, দুনিয়াতে এবং আখিরাতে। মুয়াসসার আরও সংক্ষেপে বলে: তোমরা দেখতে পাবে, পরিণতি কার পক্ষে যায়।"
          },
          {
            "en": "Two commentators tie the waiting to an event. Al-Qurtubi, after glossing the reply as waiting for the punishment to fall on you, adds: fa-'udhdhibu yawma Badrin bi s-sayf, and they were punished on the day of Badr by the sword. Al-Baghawi closes his short note with the same clause. As-Sa'di names no event but gives two routes: that Allah strike you with a punishment from Himself, or by our hands, aw bi-aydina. He leaves both open and does not say which came, or whether both did.",
            "bn": "দুজন তাফসীরকার এ অপেক্ষাকে একটা ঘটনার সঙ্গে বেঁধে দেন। কুরতুবী জবাবটির ব্যাখ্যা দেন, তোমাদের উপর আযাব নেমে আসার অপেক্ষা। তারপর যোগ করেন: ফা উযযিবূ ইয়াওমা বাদরিন বিস সাইফ, আর বদরের দিন তরবারির মাধ্যমে তাদের শাস্তি হলো। বাগাভীও তাঁর ছোট্ট টীকা একই বাক্যে শেষ করেন। সা'দী কোনো ঘটনার নাম নেন না, তবে দুটি পথের কথা বলেন। আল্লাহ হয়তো নিজের পক্ষ থেকে তোমাদের উপর আযাব পাঠাবেন, নয়তো আমাদের হাতে, আও বিআইদীনা। দুটো পথই তিনি খোলা রাখেন। কোনটা এসেছিল বা দুটোই এসেছিল কি না, তা তিনি বলেন না।"
          },
          {
            "en": "These readings differ in reach rather than flatly contradicting each other, and the difference is worth keeping as it stands. At-Tabari, Ibn Kathir and the Muyassar leave the end as Allah's command or an outcome still to be seen; al-Qurtubi and al-Baghawi point to Badr; as-Sa'di keeps both channels open without choosing. This article takes no side on which the verse intends. The words of the verse themselves are sparer than any of the glosses: the reply sets no date and names no form for the end. Those details come from the commentators.",
            "bn": "এই ব্যাখ্যাগুলো একে অপরকে সরাসরি খণ্ডন করে না, পার্থক্যটা বিস্তারের। তবু পার্থক্যটা যেমন আছে তেমনই রাখা ভালো। তাবারী, ইবন কাসীর আর মুয়াসসার শেষটাকে রেখে দেন আল্লাহর হুকুম বা ভবিষ্যতে দেখা যাবে এমন পরিণতি হিসেবে। কুরতুবী আর বাগাভী ইঙ্গিত করেন বদরের দিকে। সা'দী দুটো পথই খোলা রাখেন, কোনোটা বেছে নেন না। আয়াতটি ঠিক কোনটা বোঝাতে চায়, এই লেখা সে বিষয়ে কোনো পক্ষ নিচ্ছে না। তবে আয়াতের নিজের শব্দগুলো যেকোনো ব্যাখ্যার চেয়ে মিতব্যয়ী। জবাবে কোনো তারিখ নেই, পরিণতির কোনো রূপের কথাও নেই। এসব খুঁটিনাটি এসেছে তাফসীরকারদের কাছ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Waitings in One Room",
          "bn": "এক ঘরে দুই অপেক্ষা"
        },
        "p": [
          {
            "en": "The small word ma'akum, with you, does a great deal. It places the Prophet ﷺ in the same stretch of time as the people waiting for his death, and it does not dispute that time will pass. The reply does not argue about whether he will die. What it moves is the question that matters. Their bet, in the words Ibn Kathir's English gives them, was to be rid of the man and his Message together. The reply points instead to the outcome, which at-Tabari and al-Baghawi call the command of Allah.",
            "bn": "মাআকুম, তোমাদের সঙ্গে: ছোট্ট এই শব্দ অনেক কাজ করে। যারা তাঁর মৃত্যুর অপেক্ষায় আছে, নবী ﷺ-কে তা তাদের সঙ্গে একই সময়ের ভেতরে দাঁড় করায়। সময় যে বয়ে যাবে, তা নিয়ে কোনো আপত্তি তোলে না। তিনি মারা যাবেন কি না, জবাবটি সে তর্কে যায়ই না। আসল প্রশ্নটাকে সে অন্য জায়গায় সরিয়ে নেয়। ইবন কাসীরের ইংরেজি পাঠ অনুযায়ী ওদের বাজি ছিল মানুষটি আর তাঁর বাণী, দুটো থেকে একসঙ্গে রেহাই পাওয়া। জবাব চোখ ফেরায় পরিণতির দিকে, তাবারী ও বাগাভী যাকে বলেন আল্লাহর হুকুম।"
          },
          {
            "en": "The manner of the reply is part of its meaning. There is no curse in it, no list of their faults, no plea to be believed. It is a calm statement that he, too, is waiting. That calm has a ground the surah states openly at its close, in 52:48, where he is told to be patient for the judgement of his Lord, fa-innaka bi-a'yunina, for you are under Our eyes; that verse has its own article. Here the patience is already audible: a man who knows whose decree ends the wait has no need to shout.",
            "bn": "জবাবটা কীভাবে দেওয়া হলো, সেটাও এর অর্থের অংশ। এতে কোনো অভিশাপ নেই, ওদের দোষের ফিরিস্তি নেই, বিশ্বাস করার জন্য কোনো অনুনয়ও নেই। আছে শুধু শান্ত একটা ঘোষণা: আমিও অপেক্ষা করছি। এই শান্তির ভিত্তি কী, সূরাটি তার শেষে ৫২:৪৮ আয়াতে খোলাখুলি বলে দেয়। সেখানে তাঁকে বলা হয় রবের ফয়সালার জন্য ধৈর্য ধরতে, ফাইন্নাকা বিআ'ইউনিনা, কারণ তুমি আমার চোখের সামনেই আছ। সে আয়াত নিয়ে আলাদা লেখা আছে। তবে এখানেই ধৈর্যের সুরটা কানে আসে। কার ফয়সালায় অপেক্ষার শেষ হবে, যিনি তা জানেন, তাঁর গলা চড়ানোর দরকার পড়ে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Waiters Were",
          "bn": "আয়াতটি কাদের উদ্দেশে"
        },
        "p": [
          {
            "en": "The waiters in this verse are a particular group: the Makkan polytheists who called the Prophet ﷺ a poet and hoped to see him dead, ha'ula'i l-mushrikin, these polytheists, in at-Tabari's words. The verse describes what the text describes and licenses nothing against any living person or community. It is not a formula to aim at a neighbour, a rival, another faith or a fellow Muslim. The punishment at Badr that al-Qurtubi and al-Baghawi mention belongs to its own time, as they record it, and is no template for anyone now.",
            "bn": "এ আয়াতের অপেক্ষাকারীরা একটা নির্দিষ্ট দল: মক্কার সেই মুশরিকরা, যারা নবী ﷺ-কে কবি বলত আর তাঁর মৃত্যু দেখার আশায় ছিল। তাবারীর ভাষায়, হা-উলাইল মুশরিকীন, এই মুশরিকরা। আয়াতটি কেবল সেটুকুই বর্ণনা করে, যা এর পাঠে আছে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। প্রতিবেশী, প্রতিদ্বন্দ্বী, ভিন্ন ধর্মের মানুষ বা কোনো মুসলিম ভাইয়ের দিকে তাক করার মতো কোনো সূত্রও এটা নয়। কুরতুবী ও বাগাভী বদরের যে শাস্তির কথা বলেন, তাঁদের বর্ণনামতে তা সেই সময়েরই ঘটনা। আজ কারও জন্য তা কোনো ছাঁচ নয়।"
          },
          {
            "en": "Nor does the verse let a reader wish death on anyone. The Prophet ﷺ is told to say that he waits; the outcome is left with Allah, and the reader is handed no part of it. On the hadith side, none of the six commentaries fetched for this verse attaches a narration to it, so none is quoted here. The report Ibn Kathir carries from Dar an-Nadwa concerns 52:30 and is given above as his report. Nothing else has been added from outside these texts.",
            "bn": "কারও মৃত্যু কামনা করার অনুমতিও এ আয়াত পাঠককে দেয় না। নবী ﷺ-কে শুধু বলতে বলা হয়েছে যে তিনিও অপেক্ষা করছেন। পরিণতি রয়ে গেছে আল্লাহর কাছে, পাঠকের হাতে তার কোনো অংশ তুলে দেওয়া হয়নি। হাদীসের কথা বললে, এ আয়াতের জন্য যে ছয়টি তাফসীর আনা হয়েছে, তার কোনোটিই আয়াতের সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। দারুন নাদওয়ার যে বর্ণনা ইবন কাসীর আনেন, তা ৫২:৩০ সম্পর্কে, আর ওপরে সেটা তাঁর বর্ণনা হিসেবেই এসেছে। এই পাঠগুলোর বাইরে থেকে আর কিছু যোগ করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Questions That Follow",
          "bn": "এরপর যে প্রশ্নগুলো আসে"
        },
        "p": [
          {
            "en": "After the reply the surah keeps pressing. 52:32 asks whether their minds, ahlamuhum, command them to say this, or whether they are a people who transgress; 52:33 asks whether they say he made it up; 52:34 challenges them to bring a discourse like it if they are truthful. Those verses are their own ground and are not explained here. What 52:31 does before them is narrower: it takes the matter of time out of the deniers' hands, so that the argument which follows is not hostage to anyone's death.",
            "bn": "জবাবের পরেও সূরাটি চাপ দিতে থাকে। ৫২:৩২ আয়াত জিজ্ঞেস করে, ওদের বুদ্ধি, আহলামুহুম, কি ওদের এ কথা বলতে বলে, নাকি ওরা সীমালঙ্ঘনকারী এক জাতি? ৫২:৩৩ জিজ্ঞেস করে, ওরা কি বলে তিনি এটা নিজে বানিয়েছেন? ৫২:৩৪ চ্যালেঞ্জ দেয়, সত্যবাদী হলে এর মতো একটা বাণী নিয়ে আসুক। ওই আয়াতগুলোর আলোচনা তাদের নিজের জায়গায়, এখানে নয়। তার আগে ৫২:৩১ যা করে, তা আরও সীমিত। সময়ের ব্যাপারটা সে অস্বীকারকারীদের হাত থেকে নিয়ে নেয়। ফলে পরের যুক্তিগুলো আর কারও মৃত্যুর উপর ঝুলে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Among Watchers",
          "bn": "চোখ রাখা লোকদের মাঝে"
        },
        "p": [
          {
            "en": "Few people are mocked as a prophet was, but many live under watchers of a smaller kind. A colleague waits for the first mistake. Relatives predict that a marriage will not last. Old friends expect someone who has returned to prayer to drift away again. The temptation in each case is to spend the day answering the watchers in one's head, or to start living for their verdict. The verse offers another posture: name the waiting calmly, and then refuse to be governed by it.",
            "bn": "নবীর মতো ঠাট্টার শিকার খুব কম মানুষই হয়। কিন্তু ছোট পরিসরে অনেকেই এমন চোখের নিচে বাঁচে, যে চোখ পতনের অপেক্ষায় থাকে। সহকর্মী প্রথম ভুলটার জন্য ওত পেতে থাকে। আত্মীয়রা ভবিষ্যদ্বাণী করে, এ বিয়ে টিকবে না। পুরোনো বন্ধুরা ধরে নেয়, যে লোকটা নতুন করে নামায ধরেছে, সে আবার ছেড়ে দেবে। এমন সময় মন চায় সারা দিন মনে মনে ওদের সঙ্গে তর্ক চালিয়ে যেতে, কিংবা ওদের রায় মাথায় রেখেই চলতে। আয়াতটি অন্য একটা ভঙ্গি শেখায়। অপেক্ষাটাকে শান্তভাবে চিনে নিন, তারপর তার হাতে নিজের লাগাম তুলে দেবেন না।"
          },
          {
            "en": "Waiting, in the Prophet's reply, was not idleness. The command to keep reminding in 52:29 did not lapse while the waiting went on, and in at-Tabari's gloss what he waited for was Allah's command, not a rival's collapse. For a believer under watchers, the parallel is plain work: keep the prayer, keep the promise, keep the household steady, and let Allah, whose decree governs every ending, decide how this ends. The watchers can count days; they cannot decide what those days will bring.",
            "bn": "নবী ﷺ-এর জবাবে অপেক্ষা মানে হাত গুটিয়ে বসে থাকা ছিল না। ৫২:২৯ আয়াতে উপদেশ দিয়ে যাওয়ার যে হুকুম, অপেক্ষার পুরো সময়টাতেও তা বহাল ছিল। আর তাবারীর ব্যাখ্যায় তিনি অপেক্ষা করছিলেন আল্লাহর হুকুমের, প্রতিপক্ষের ধসে পড়ার নয়। যে মুমিনের দিকে লোকে চোখ রেখে বসে আছে, তার জন্য এর সোজা মানে হলো কাজ চালিয়ে যাওয়া। নামায ধরে রাখুন, কথা রাখুন, সংসার স্থির রাখুন। আর এই অপেক্ষার শেষটা ছেড়ে দিন তাঁর হাতে, যাঁর ফয়সালায় প্রতিটি পরিণতি ঠিক হয়। ওরা দিন গুনতে পারে, কিন্তু সেই দিনগুলো কী নিয়ে আসবে, তা ওরা ঠিক করে না।"
          },
          {
            "en": "One guard is needed. Waiting for Allah's decree is not the same as waiting for someone else's ruin, and the second can slip in under cover of the first. The verse gives the believer composure, not a grudge. The fuller hope for anyone who waits for our failure is that they come to see differently, and the surest answer to them is a life that keeps its course. Say little, wait well, and leave the outcome to the One who already holds it.",
            "bn": "একটা সতর্কতা দরকার। আল্লাহর ফয়সালার অপেক্ষা আর অন্য কারও সর্বনাশের অপেক্ষা এক জিনিস নয়। অথচ প্রথমটার আড়ালে দ্বিতীয়টা চুপিচুপি ঢুকে পড়তে পারে। এ আয়াত মুমিনকে স্থিরতা দেয়, মনে পুষে রাখার মতো কোনো আক্রোশ দেয় না। যে আমাদের ব্যর্থতার অপেক্ষায় আছে, তার জন্যও বড় আশা হলো সে একদিন অন্যভাবে দেখতে শিখুক। আর তাকে দেওয়ার সবচেয়ে মজবুত জবাব হলো এমন এক জীবন, যা নিজের পথ থেকে সরে না। কম বলুন, ভালোভাবে অপেক্ষা করুন, আর পরিণতি ছেড়ে দিন তাঁর হাতে, যাঁর হাতে তা আগে থেকেই আছে।"
          }
        ]
      }
    ]
  },
  "52:48": {
    "sections": [
      {
        "h": {
          "en": "The Last Word of at-Tur",
          "bn": "আত-তূরের শেষ কথা"
        },
        "p": [
          {
            "en": "Surah at-Tur is Makkan, and its later stretch is an interrogation. From 52:30 onward the questions come one after another, most of them opening with am, or: or do they say he is a poet whose death they await, or were they created out of nothing, or do they own the treasuries of your Lord, or have they a god besides Allah. Nothing is left standing in their position by the time 52:43 closes the run.",
            "bn": "সূরা আত-তূর মক্কী, আর এর শেষ দিকের অংশটি এক দীর্ঘ জেরা। 52:30 থেকে শুরু করে প্রশ্নগুলো একটার পর একটা আসে, অধিকাংশই শুরু হয় 'আম' দিয়ে, অর্থাৎ 'নাকি' — নাকি তারা বলে সে একজন কবি, যার মৃত্যুর জন্য তারা অপেক্ষা করছে; নাকি তাদের সৃষ্টি করা হয়েছে কিছু ছাড়াই; নাকি তাদের কাছে তোমার প্রতিপালকের ভাণ্ডার আছে; নাকি আল্লাহ ছাড়া তাদের অন্য কোনো ইলাহ আছে। 52:43 যখন এই ধারা শেষ করে, তাদের অবস্থানে আর কিছুই দাঁড়িয়ে থাকে না।"
          },
          {
            "en": "Coming after that, wasbir li-hukmi rabbika is not an afterthought. The commentators note the preposition. Arabic could have said isbir 'ala, be patient over a thing pressing down on you; the verse says li-hukmi, be patient for your Lord's judgement, which is the patience of someone waiting on a verdict already settled and not yet read out. The delay is itself part of the ruling. The same imperative closes similar arguments at 68:48 and at 76:24, and in both places it is followed by something the Prophet ﷺ is told not to do.",
            "bn": "এই জেরার পরে 'ওয়াসবির লি-হুকমি রাব্বিকা' কোনো বাড়তি কথা নয়। মুফাসসিরগণ অব্যয়টির দিকে নজর দেন। আরবি বলতে পারত 'ইসবির আলা' — তোমার উপর চেপে বসা কিছুর উপর ধৈর্য ধরো; কিন্তু আয়াত বলে 'লি-হুকমি' — তোমার প্রতিপালকের ফয়সালার জন্য ধৈর্য ধরো। এ হলো এমন একজনের ধৈর্য, যে এমন রায়ের অপেক্ষায় আছে যা ইতিমধ্যেই স্থির হয়ে গেছে, কেবল পড়ে শোনানো বাকি। বিলম্বটাও সেই রায়েরই অংশ। একই নির্দেশ 68:48 ও 76:24 আয়াতেও অনুরূপ যুক্তির শেষে আসে, আর দুই জায়গাতেই এর পরে নবী ﷺ-কে বলা হয় এমন কিছু, যা তিনি করবেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Bi-A'yunina",
          "bn": "বি-আ'ইউনিনা"
        },
        "p": [
          {
            "en": "Then the reason, and the pronoun shifts as it is given. The clause before speaks of your Lord in the third person; this one speaks in the first: fa-innaka bi-a'yunina, for indeed you are before Our eyes. The mufassirun explain the phrase as meaning that he is within His sight and under His safekeeping, since in Arabic to say a thing is before someone's eye is to say it is in his care. The settled Sunni posture is to affirm the wording exactly as it was revealed, without asking how and without emptying it of meaning.",
            "bn": "এরপর আসে কারণটি, আর তা দেওয়ার সময় সর্বনাম বদলে যায়। আগের বাক্যাংশ 'তোমার প্রতিপালক' বলে উত্তম পুরুষের বাইরে থেকে; এই বাক্যাংশ বলে প্রথম পুরুষে: 'ফা-ইন্নাকা বি-আ'ইউনিনা' — নিশ্চয় তুমি আমাদের চোখের সামনেই আছ। মুফাসসিরগণ বাক্যাংশটির ব্যাখ্যা করেন এই অর্থে যে, তিনি তাঁর দৃষ্টির ভেতরে ও তাঁর হেফাযতে আছেন; কারণ আরবিতে কোনো কিছুকে কারও চোখের সামনে বলার অর্থ হলো তা তার তত্ত্বাবধানে আছে। আহলুস সুন্নাহর স্থির অবস্থান হলো, শব্দগুলো যেভাবে নাযিল হয়েছে ঠিক সেভাবেই স্বীকার করা — 'কীভাবে' প্রশ্ন না তোলা, আবার অর্থ শূন্য করেও না দেওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else the Phrase Falls",
          "bn": "এই শব্দবন্ধ আর কোথায় আসে"
        },
        "p": [
          {
            "en": "The expression is rare, and the places it appears are worth setting side by side. In 11:37 — and again word for word at 23:27 — Nuh (AS) is told to build the ship bi-a'yunina wa wahyina, before Our eyes and by Our revelation, while his people walk past a boat rising on dry ground; in 54:14 the same ship is described sailing bi-a'yunina once the water has come. 20:39 uses the singular for the infant Musa (AS), whose basket goes into the river so that he may be raised 'ala 'ayni, before My eye. Each one looks from outside like abandonment, and the phrase is the correction.",
            "bn": "শব্দবন্ধটি বিরল, আর যেসব জায়গায় এটি আসে সেগুলো পাশাপাশি রাখার মতো। 11:37 আয়াতে — আর হুবহু একই শব্দে 23:27 আয়াতেও — নূহ (আঃ)-কে বলা হয় 'বি-আ'ইউনিনা ওয়া ওয়াহইনা' — আমাদের চোখের সামনে ও আমাদের ওহী অনুযায়ী — নৌকা বানাতে, আর তাঁর জাতি শুকনো মাটিতে গড়ে ওঠা এক নৌকার পাশ দিয়ে হেঁটে যায়; 54:14 আয়াতে সেই একই নৌকাকে বর্ণনা করা হয় পানি আসার পর 'বি-আ'ইউনিনা' চলতে থাকা অবস্থায়। 20:39 আয়াতে শিশু মূসা (আঃ)-এর জন্য একবচন ব্যবহৃত হয়: তাঁর সিন্দুক নদীতে যায় যাতে তাঁকে 'আলা আইনি' — আমার চোখের সামনে — গড়ে তোলা হয়। প্রতিটিই বাইরে থেকে পরিত্যক্ত হওয়ার মতো দেখায়, আর এই শব্দবন্ধই তার সংশোধন।"
          }
        ]
      },
      {
        "h": {
          "en": "Praise When You Rise",
          "bn": "যখন তুমি ওঠো, প্রশংসা করো"
        },
        "p": [
          {
            "en": "The verse does not stop at patience. Wa sabbih bi-hamdi rabbika hina taqum, and glorify your Lord with praise when you arise. The commentators give hina taqum more than one reading and do not treat them as rivals: when you rise from sleep, when you stand up from a gathering, and when you rise for prayer. All three are moments of transition, and a transition is exactly where a person's frame of mind for the next stretch gets set.",
            "bn": "আয়াতটি ধৈর্যেই থেমে থাকে না। 'ওয়া সাব্বিহ বিহামদি রাব্বিকা হীনা তাকূম' — আর যখন তুমি ওঠো তখন তোমার প্রতিপালকের প্রশংসাসহ তাঁর মহিমা ঘোষণা করো। মুফাসসিরগণ 'হীনা তাকূম' নিয়ে একাধিক ব্যাখ্যা দেন এবং সেগুলোকে পরস্পরের প্রতিদ্বন্দ্বী মনে করেন না: যখন তুমি ঘুম থেকে ওঠো, যখন তুমি কোনো মজলিস থেকে ওঠো, আর যখন তুমি নামাযের জন্য দাঁড়াও। তিনটিই পরিবর্তনের মুহূর্ত, আর পরবর্তী সময়টার জন্য মানুষের মনের ঢঙটা ঠিক এই পরিবর্তনের মুহূর্তেই বসে যায়।"
          },
          {
            "en": "52:49 then adds a part of the night and the receding of the stars, so the surah ends on a small timetable rather than on an argument. The pairing of the two words matters. Tasbih declares Him free of every defect; hamd praises Him for what He is and what He does. Together they are the precise answer to a long wait: the delay is not a flaw in His management, and He is to be thanked inside the waiting rather than only after it.",
            "bn": "এরপর 52:49 যোগ করে রাতের একটি অংশ আর তারকারাজির অস্তমিত হওয়ার সময়; ফলে সূরাটি শেষ হয় কোনো যুক্তিতে নয়, বরং একটি ছোট সময়সূচিতে। দুটি শব্দের জোড়টি গুরুত্বপূর্ণ। তাসবীহ ঘোষণা করে যে তিনি সব ত্রুটি থেকে মুক্ত; হামদ প্রশংসা করে তিনি যা এবং তিনি যা করেন তার জন্য। একসঙ্গে এ দুটিই দীর্ঘ অপেক্ষার সঠিক জবাব: বিলম্ব তাঁর পরিচালনার কোনো ত্রুটি নয়, আর তাঁকে শোকর জানাতে হবে অপেক্ষার ভেতরেই, কেবল অপেক্ষা শেষ হওয়ার পরে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Patience With a Witness",
          "bn": "সাক্ষীসহ ধৈর্য"
        },
        "p": [
          {
            "en": "What the verse changes is not the length of the trial but its loneliness. Most of the weight of a long difficulty is the suspicion that it is unobserved, that the effort is going into a room nobody enters. 20:46 gives Musa (AS) and Harun (AS) the same medicine before they face Pharaoh: fear not, indeed I am with you both, I hear and I see. Being seen by the One who decides the outcome is a different condition from simply holding out alone.",
            "bn": "আয়াতটি পরীক্ষার দৈর্ঘ্য বদলায় না, বদলায় তার নিঃসঙ্গতা। দীর্ঘ কষ্টের ওজনের বেশিরভাগই আসে এই সন্দেহ থেকে যে কেউ তা দেখছে না, যে পরিশ্রমটুকু এমন এক ঘরে ঢালা হচ্ছে যেখানে কেউ ঢোকে না। 20:46 আয়াতে মূসা (আঃ) ও হারূন (আঃ)-কে ফিরআউনের মুখোমুখি হওয়ার আগে একই ওষুধ দেওয়া হয়: ভয় করো না, নিশ্চয় আমি তোমাদের দুজনের সঙ্গে আছি, আমি শুনি ও দেখি। যিনি পরিণাম ঠিক করবেন তাঁর দৃষ্টিতে থাকা, আর একা একা টিকে থাকা — এ দুটি সম্পূর্ণ ভিন্ন অবস্থা।"
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
            "en": "The practical form is the one the verse supplies. Attach praise to the moments you rise: the first minute out of bed, the moment you stand up from a seat, the standing at the start of prayer. Subhana rabbi wa bihamdih costs nothing and fits in any of them. Done deliberately for a week, it turns a verse about a Prophet's ﷺ trial into a personal timetable, which is precisely what the closing lines of at-Tur are for.",
            "bn": "ব্যবহারিক রূপটি আয়াত নিজেই জুগিয়ে দেয়। ওঠার মুহূর্তগুলোর সঙ্গে প্রশংসা জুড়ে দিন: বিছানা ছাড়ার প্রথম মিনিট, আসন থেকে ওঠার মুহূর্ত, নামায শুরুর দাঁড়ানোটা। 'সুবহানা রাব্বিয়া ওয়া বিহামদিহ' বলতে কিছুই খরচ হয় না, আর তা এই সবগুলোতেই এঁটে যায়। এক সপ্তাহ ইচ্ছা করে করলে এটি এক নবীর ﷺ পরীক্ষা নিয়ে বলা একটি আয়াতকে বদলে দেয় ব্যক্তিগত সময়সূচিতে — আত-তূরের শেষ পঙক্তিগুলো ঠিক এ কাজেরই জন্য।"
          },
          {
            "en": "And when the trial is the kind with no visible end, an illness, a case, a child who will not come back, the middle clause is the one to carry. You are not waiting in an empty room. The wait has a witness, and the witness is the One who will settle it. The surah's instruction for the interval is not to be told how long it will run, but to fill it with the praise of the One who already knows.",
            "bn": "আর পরীক্ষাটি যদি এমন হয় যার শেষ চোখে দেখা যায় না — কোনো অসুখ, কোনো মামলা, ফিরে না আসা কোনো সন্তান — তবে মাঝের বাক্যাংশটিই সঙ্গে নেওয়ার জিনিস। আপনি খালি ঘরে অপেক্ষা করছেন না। এই অপেক্ষার একজন সাক্ষী আছেন, আর সেই সাক্ষীই তা মীমাংসা করবেন। মধ্যবর্তী সময়টির জন্য সূরার নির্দেশ এই নয় যে আপনাকে জানিয়ে দেওয়া হবে তা কতদিন চলবে; বরং নির্দেশ হলো, যিনি ইতিমধ্যেই জানেন তাঁর প্রশংসা দিয়ে সময়টা ভরে রাখা।"
          }
        ]
      }
    ]
  }
});
