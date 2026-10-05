/**
 * Tadabbur long-form articles — surah 83.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "83:4": {
    "sections": [
      {
        "h": {
          "en": "A Question After the Scale",
          "bn": "দাঁড়িপাল্লার পরে এক প্রশ্ন"
        },
        "p": [
          {
            "en": "A-la yazunnu ula'ika annahum mab'uthun: do they not think that they will be resurrected? The verse is five Arabic words: the opening particle a-la, the verb yazunnu, the pointer ula'ika, those, then annahum, that they, and mab'uthun, ones raised. It follows 83:1 to 83:3, which open the surah with woe for those who take in full when they receive by measure and give short when they measure or weigh for others. Those verses are their own entries; here they matter only as the people the question is put to.",
            "bn": "আলা ইয়াজুন্নু উলাইকা আন্নাহুম মাবউসূন: তারা কি মনে করে না যে তাদের আবার ওঠানো হবে? আয়াতটি আরবিতে পাঁচটি শব্দ। শুরুতে আলা, তারপর ক্রিয়া ইয়াজুন্নু, তারপর ইশারার শব্দ উলাইকা, মানে ওরা। এরপর আন্নাহুম, অর্থাৎ যে তারা, আর শেষে মাবউসূন, যাদের ওঠানো হবে। এর আগে আছে ৮৩:১ থেকে ৮৩:৩। সূরা শুরু হয়েছে সেখানে দুর্ভোগের ঘোষণা দিয়ে, তাদের জন্য যারা মেপে নেওয়ার সময় পুরোটা নেয়, আর মেপে বা ওজন করে দেওয়ার সময় কম দেয়। সেগুলোর আলোচনা তাদের নিজ নিজ জায়গায়। এখানে শুধু এটুকু জানা দরকার, প্রশ্নটা কাদের দিকে ছোড়া।"
          },
          {
            "en": "Al-Qurtubi hears in the opening an inkar and a great ta'ajjub: a rebuke, and wonder at their state, in their boldness at giving short measure. It is, he writes, as if they never let the cheating cross their minds, and do not so much as guess that they will be raised and then questioned about what they do. As-Sa'di likewise reads the verse as a threat to the mutaffifin and as wonder at their persisting in what they are doing. On both readings the question asks nothing it does not already know.",
            "bn": "কুরতুবী শুরুর শব্দে শোনেন ইনকার আর গভীর তাআজ্জুব: ভর্ৎসনা, আর তাদের অবস্থা দেখে বিস্ময়। কম মাপে দেওয়ার যে দুঃসাহস তারা দেখায়, বিস্ময় সেটা নিয়েই। তিনি লেখেন, যেন এ ঠকানোর কথা কখনো তাদের মনেই আসে না। যেন তারা আন্দাজও করে না যে তাদের ওঠানো হবে, তারপর যা করে সে বিষয়ে জিজ্ঞেস করা হবে। সা'দীও আয়াতটিকে পড়েন মুতাফফিফীনের প্রতি হুঁশিয়ারি হিসেবে। যে কাজে তারা লেগে আছে, তাতে তাদের অটল থাকা দেখে বিস্ময়ও প্রকাশ পায় এতে। দুই পাঠেই প্রশ্নটা উত্তর জানতে চায় না, উত্তর তো জানাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Certainty or Only Wavering",
          "bn": "নিশ্চিত বিশ্বাস, নাকি দোলাচল"
        },
        "p": [
          {
            "en": "Everything turns on yazunnu, and the fetched commentators do not agree on what it means here. Al-Baghawi glosses it in a single word, yastayqin: is certain. His whole comment on the verse is that gloss and two more, which makes the choice stand out. In his reading the verse does not ask whether these people have heard that a resurrection is possible. It asks whether they are not certain of it, and the short measure in their hands is the reply.",
            "bn": "সব কিছু ঘোরে ইয়াজুন্নু শব্দকে ঘিরে, আর এখানে এর অর্থ নিয়ে তাফসীরকারেরা একমত নন। বাগাভী এক শব্দে এর ব্যাখ্যা দেন: ইয়াসতাইকিন, অর্থাৎ নিশ্চিত জানে। আয়াতের উপর তাঁর পুরো মন্তব্য বলতে এই এক ব্যাখ্যা আর আরও দুটি শব্দের ব্যাখ্যা। তাই বাছাইটা চোখে পড়ে। তাঁর পাঠে আয়াত জানতে চায় না, পুনরুত্থান সম্ভব এ কথা তারা শুনেছে কি না। জানতে চায়, তারা কি এ ব্যাপারে নিশ্চিত নয়? আর তাদের হাতের কম মাপটাই সে প্রশ্নের জবাব।"
          },
          {
            "en": "Al-Qurtubi gives the same reading first. Zann here, he says, carries the meaning of yaqin, certainty: do those people not know for sure? He adds the consequence in one clause: had they been certain, they would not have given short in measure and weight. On this reading the defect lies in a missing conviction, and the cheating is where that absence becomes visible. The scale shows what the heart has not settled, even when the tongue would say it believes.",
            "bn": "কুরতুবীও প্রথমে এই পাঠটিই দেন। তিনি বলেন, এখানে জন্ন মানে ইয়াকীন, নিশ্চিত বিশ্বাস। অর্থাৎ, ওরা কি নিশ্চিত জানে না? পরিণামটা তিনি জুড়ে দেন একটিমাত্র বাক্যাংশে: নিশ্চিত হলে তারা মাপে আর ওজনে কম দিত না। এ পাঠে গলদটা বিশ্বাসের ঘাটতিতে। ঠকানো হলো সেই জায়গা, যেখানে ঘাটতিটা চোখে দেখা যায়। মুখে বিশ্বাসের কথা থাকলেও অন্তরে যা পাকা হয়নি, দাঁড়িপাল্লা তা ধরিয়ে দেয়।"
          },
          {
            "en": "Then al-Qurtubi records a second view, introduced with wa-qila, it has been said. Zann here means taraddud, wavering. The sense becomes: if they are not certain of the resurrection, why do they not at least suppose it, so that they would reflect on it, look into it, and take the more cautious course? This reading lowers the bar instead of raising it. It asks for no conviction, only that a possibility be taken seriously. Al-Qurtubi sets the two side by side, and so does this article.",
            "bn": "তারপর কুরতুবী আরেকটি মত উল্লেখ করেন, শুরু করেন ওয়া কীলা দিয়ে, অর্থাৎ বলা হয়েছে। এ মতে জন্ন মানে তারাদ্দুদ, দোলাচল। তখন অর্থ দাঁড়ায়: পুনরুত্থান নিয়ে তারা যদি নিশ্চিত না-ও হয়, অন্তত তার ধারণাটুকু কেন করে না? করলে তো তা নিয়ে ভাবত, খোঁজ নিত, আর সাবধানের পথটা ধরত। এ পাঠ মাপকাঠি উঁচু করে না, বরং নামিয়ে আনে। দৃঢ় বিশ্বাস চায় না, চায় শুধু সম্ভাবনাটাকে গুরুত্ব দেওয়া। কুরতুবী দুটি মত পাশাপাশি রাখেন, এই লেখাও তাই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear, Belief, and Restatement",
          "bn": "ভয়, আকীদা আর সরল পুনর্কথন"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses the verb with another state of the heart altogether. In his Arabic: do those people not fear the resurrection, and standing before the One who knows hidden things and what the heart conceals? His English abridgement keeps the same line: do these people not fear the resurrection. Al-Muyassar, the plain modern paraphrase, writes a-la ya'taqidu: do those mutaffifun not firmly believe that Allah will raise them and call them to account for their deeds? Fear in one, firm belief in the other.",
            "bn": "ইবন কাসীর ক্রিয়াটির ব্যাখ্যা দেন অন্তরের সম্পূর্ণ ভিন্ন এক অবস্থা দিয়ে। তাঁর আরবি তাফসীরে: ওরা কি ভয় করে না পুনরুত্থানকে, আর সেই সত্তার সামনে দাঁড়ানোকে, যিনি গোপন বিষয় আর মনের লুকানো কথা জানেন? তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও একই কথা: এরা কি পুনরুত্থানকে ভয় করে না? সহজ ভাষার আধুনিক তাফসীর মুয়াসসার লেখে, আলা ইয়াতাকিদু: ওই মুতাফফিফরা কি দৃঢ়ভাবে বিশ্বাস করে না যে আল্লাহ তাদের ওঠাবেন আর তাদের আমলের হিসাব নেবেন? একজনের কাছে ভয়, অন্যটির কাছে দৃঢ় আকীদা।"
          },
          {
            "en": "Two commentators give no gloss of the word at all. At-Tabari restates the verse and fills in only who and from where: do these mutaffifun not think that they will be raised from their graves after their deaths? As-Sa'di quotes it together with 83:5 and 83:6 and moves straight to its cause. So the fetched texts give four readings of one verb: certainty, from al-Baghawi and al-Qurtubi's first view; wavering supposition, from al-Qurtubi's reported second view; fear, from Ibn Kathir; and firm belief, from al-Muyassar. None is chosen here.",
            "bn": "দুজন তাফসীরকার শব্দটির আলাদা কোনো ব্যাখ্যাই দেন না। তাবারী আয়াতটি নতুন করে বলেন, শুধু যোগ করেন কারা আর কোথা থেকে: এই মুতাফফিফরা কি মনে করে না যে মৃত্যুর পর তাদের কবর থেকে ওঠানো হবে? সা'দী আয়াতটি উদ্ধৃত করেন ৮৩:৫ ও ৮৩:৬ সহ, তারপর সোজা চলে যান এর কারণে। ফলে হাতে আসে একই ক্রিয়ার চারটি পাঠ। নিশ্চিত বিশ্বাস, বাগাভী আর কুরতুবীর প্রথম মতে। দোলাচলের ধারণা, কুরতুবীর উল্লেখ করা দ্বিতীয় মতে। ভয়, ইবন কাসীরের কাছে। আর দৃঢ় আকীদা, মুয়াসসারে। এখানে কোনোটিকেই বেছে নেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Those, and Raised to What",
          "bn": "ওরা কারা, ওঠানো কীসের জন্য"
        },
        "p": [
          {
            "en": "Ula'ika, those, points back to the people of 83:1 to 83:3, and the commentators fill in the pointer in slightly different words. At-Tabari: these who short people in their measures and their weights. Al-Muyassar: those mutaffifun. Al-Baghawi: those who do that. As-Sa'di names the mutaffifin as the ones being threatened, and al-Qurtubi keeps them in view through their act, their boldness in giving short. None of the fetched texts widens the pointer here beyond the people the surah has just described.",
            "bn": "উলাইকা, মানে ওরা। শব্দটি ইশারা করে ৮৩:১ থেকে ৮৩:৩ আয়াতে বর্ণিত লোকদের দিকে, আর তাফসীরকারেরা সামান্য ভিন্ন ভাষায় ইশারাটা খুলে বলেন। তাবারীর কথায়, যারা মানুষকে মাপে আর ওজনে কম দেয়। মুয়াসসারের কথায়, ওই মুতাফফিফরা। বাগাভীর কথায়, যারা এ কাজ করে। সা'দী হুঁশিয়ারির লক্ষ্য হিসেবে মুতাফফিফীনের নাম নেন। কুরতুবী তাদের চেনান তাদের কাজ দিয়ে, কম দেওয়ার দুঃসাহস দিয়ে। সূরা এইমাত্র যাদের বর্ণনা দিল, কোনো তাফসীরই এখানে ইশারাটাকে তাদের বাইরে টেনে নেয় না।"
          },
          {
            "en": "Mab'uthun, ones raised, is filled in as well. At-Tabari: raised from their graves after their deaths. Al-Muyassar makes Allah the agent: that it is Allah who raises them and calls them to account for their deeds. Al-Qurtubi joins the raising to a questioning: that they will be raised and then asked about what they did. In all three the raising is not where the sentence stops. It leads to an account, and the account is what the short measure will have to meet.",
            "bn": "মাবউসূন, যাদের ওঠানো হবে, এ শব্দও তাঁরা খুলে বলেন। তাবারী বলেন, মৃত্যুর পর কবর থেকে ওঠানো। মুয়াসসার কাজটির কর্তা হিসেবে আল্লাহর নাম আনে: আল্লাহই তাদের ওঠাবেন, আর তাদের আমলের হিসাব নেবেন। কুরতুবী ওঠানোর সঙ্গে জুড়ে দেন জিজ্ঞাসাবাদ: তাদের ওঠানো হবে, তারপর যা করেছে সে বিষয়ে প্রশ্ন করা হবে। তিনজনের কাছেই ওঠানোতে কথা শেষ হয় না। ওঠানোর পরে আছে হিসাব। আর কম মাপকে শেষ পর্যন্ত দাঁড়াতে হবে সেই হিসাবেরই সামনে।"
          },
          {
            "en": "Notice too how the verse speaks. Ula'ika and annahum are third person: the surah talks about these people, not to them, and the listener overhears the question. The fetched commentators keep the pointer on the mutaffifin and do not hand it to anyone else. That leaves the reader with a narrow task. It is not to fill the word those with other people's names, but to check, quietly, whether its description has begun to fit the person doing the reading.",
            "bn": "আয়াতটি কীভাবে কথা বলছে, সেটাও খেয়াল করার মতো। উলাইকা আর আন্নাহুম, দুটো শব্দই অনুপস্থিত লোকদের কথা বলে। সূরা এ লোকদের সম্পর্কে বলছে, তাদের সঙ্গে নয়, আর শ্রোতা প্রশ্নটা শুনছে পাশ থেকে। তাফসীরকারেরা ইশারাটা মুতাফফিফীনের উপরেই রাখেন, অন্য কারও হাতে তুলে দেন না। ফলে পাঠকের কাজটা সরু। ওরা শব্দটার ভেতরে অন্য মানুষের নাম বসানো তার কাজ নয়। তার কাজ চুপচাপ যাচাই করা, বর্ণনাটা যে পড়ছে তার নিজের গায়েই খাপ খেতে শুরু করেছে কি না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where a Short Measure Begins",
          "bn": "কম মাপের শুরু কোথায়"
        },
        "p": [
          {
            "en": "As-Sa'di names the cause outright. What made them bold enough to give short, he writes, was their lack of iman in the Last Day. Had they believed in it, and known that they would stand before Allah, who reckons with them over little and much, they would have given it up and repented of it. The direction of the claim is worth noticing. It does not say that cheating erodes faith; it says that missing faith is what lets the cheating begin.",
            "bn": "সা'দী কারণটা সরাসরি বলে দেন। তাঁর মতে, কম দেওয়ার দুঃসাহস তারা পেয়েছে আখিরাতের উপর ঈমান না থাকায়। ঈমান থাকলে, আর জানলে যে তাদের দাঁড়াতে হবে আল্লাহর সামনে, যিনি অল্প-বেশি সবকিছুর হিসাব নেবেন, তারা এ কাজ ছেড়ে দিত, এর জন্য তওবা করত। দাবিটা কোন দিক থেকে আসছে, সেটা লক্ষ করার মতো। এখানে বলা হচ্ছে না যে ঠকানো ঈমান ক্ষয় করে। বলা হচ্ছে, ঈমানের ঘাটতিই ঠকানোর দরজা খুলে দেয়।"
          },
          {
            "en": "Al-Qurtubi points the same way when he says they act as if the matter never crosses their minds as something to answer for. Read with these commentators, the verse moves the problem of the scale from the hand to the heart. A short measure is usually small, a little grain or a sliver of weight, and it stays small because the one taking it expects no one to count. The verse does not argue with the arithmetic. It argues with the expectation.",
            "bn": "কুরতুবীও একই দিকে ইঙ্গিত করেন, যখন বলেন যে তারা এমনভাবে চলে, যেন জবাবদিহির বিষয় হিসেবে ব্যাপারটা কখনো তাদের মাথায় আসে না। এই তাফসীরকারদের সঙ্গে পড়লে আয়াতটি দাঁড়িপাল্লার সমস্যাকে হাত থেকে সরিয়ে নিয়ে যায় অন্তরে। কম মাপ সাধারণত সামান্যই হয়, অল্প একটু শস্য বা ওজনের ছোট্ট একটা ফাঁক। আর সামান্য থাকে এ কারণে যে, যে নিচ্ছে সে আশা করে কেউ গুনে দেখবে না। আয়াত হিসাবের অঙ্ক নিয়ে তর্ক করে না। তর্ক করে ওই আশাটা নিয়ে।"
          },
          {
            "en": "The two readings of yazunnu leave the reader with two tests. On the certainty reading, the question is whether what I say I believe about the resurrection has reached my hands. On al-Qurtubi's reported second reading, the question is humbler: even where my conviction wavers, does the bare possibility of being raised make me take the cautious course? Neither test needs anyone else to be named. Both are put to whoever happens to be holding the scale at that moment, and today that may be me.",
            "bn": "ইয়াজুন্নুর দুই পাঠ পাঠকের সামনে রাখে দুটি পরীক্ষা। নিশ্চিত বিশ্বাসের পাঠে প্রশ্ন হলো, পুনরুত্থান নিয়ে মুখে যা বিশ্বাস করি বলি, তা কি আমার হাত পর্যন্ত পৌঁছেছে? কুরতুবীর উল্লেখ করা দ্বিতীয় পাঠে প্রশ্নটা আরও বিনীত: বিশ্বাস যেখানে টলমল করে, সেখানেও কি ওঠানোর নিছক সম্ভাবনা আমাকে সাবধানের পথে রাখে? কোনো পরীক্ষাতেই অন্য কারও নাম নেওয়ার দরকার পড়ে না। যে মুহূর্তে যার হাতে দাঁড়িপাল্লা, প্রশ্ন দুটি তারই জন্য। আর আজ সে মানুষটা হয়তো আমিই।"
          }
        ]
      },
      {
        "h": {
          "en": "How Far a Measure Reaches",
          "bn": "মাপের সীমানা কতদূর"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the English abridgement on the surah's opening verses, sets this passage beside the command to give full measure elsewhere. He cites 17:35, give full measure when you measure and weigh with a straight balance; 6:152, give full measure and full weight with justice, We burden no soul beyond what it can bear; and 55:9, observe the weight with equity and do not make the balance deficient. He adds that Allah destroyed the people of Shu'ayb (AS) because of their cheating in weights and measures.",
            "bn": "ইবন কাসীর, তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে সূরার শুরুর আয়াতগুলোর আলোচনায়, এ অংশকে রাখেন কুরআনের অন্য জায়গার পুরো মাপ দেওয়ার নির্দেশের পাশে। তিনি উদ্ধৃত করেন ১৭:৩৫: মাপলে পুরো মাপ দাও, আর সঠিক দাঁড়িপাল্লায় ওজন করো। ৬:১৫২: ন্যায়ের সঙ্গে মাপ আর ওজন পুরো করো, আমি কাউকে তার সাধ্যের বাইরে ভার দিই না। আর ৫৫:৯: ইনসাফের সঙ্গে ওজন ঠিক রাখো, পাল্লায় কম দিয়ো না। তিনি আরও বলেন, মাপে আর ওজনে ঠকানোর কারণে আল্লাহ শুআইব (আঃ)-এর কওমকে ধ্বংস করেছিলেন।"
          },
          {
            "en": "Ma'arif al-Qur'an widens the word itself. Since the purpose of weighing and measuring is to give a person what is due, it argues, tatfif is not confined to scales. It covers every means by which someone's right is assessed, whether by weight, measure, number or anything else. Its example is a worker who has agreed to work specified hours and then cuts them short. On that reading the question of 83:4 reaches anyone who owes anything, and the first person it reaches is whoever is reading it.",
            "bn": "মাআরিফুল কুরআন শব্দটির পরিধিই বাড়িয়ে দেয়। তার যুক্তি: মাপা আর ওজন করার উদ্দেশ্য তো মানুষকে তার প্রাপ্য বুঝিয়ে দেওয়া। তাই তাতফীফ শুধু দাঁড়িপাল্লায় সীমাবদ্ধ নয়। কারও হক যেভাবেই নির্ধারিত হোক, ওজনে, মাপে, সংখ্যায় বা অন্য কোনো উপায়ে, সবই এর আওতায়। উদাহরণ হিসেবে মাআরিফ আনে এমন কর্মীর কথা, যে নির্দিষ্ট সময় কাজের চুক্তি করে তারপর সময় কম দেয়। এ পাঠে ৮৩:৪ আয়াতের প্রশ্ন পৌঁছে যায় এমন প্রত্যেকের কাছে, যার কাঁধে কারও কোনো পাওনা আছে। আর সবার আগে পৌঁছায় যে পড়ছে, তার কাছে।"
          },
          {
            "en": "Al-Muyassar, whose paraphrase runs 83:2 to 83:4 as a single passage, draws an argument from the lesser case to the greater. If this severe punishment is for those who give short in measure and weight, how then of whoever steals and embezzles from both, and cheats people of their things? He is, it says, more deserving of the threat than those who skimp on the measure. The question of 83:4 is put to the small fraud, and by that reasoning it falls harder still on the large fraud.",
            "bn": "মুয়াসসার ৮৩:২ থেকে ৮৩:৪ পর্যন্ত একটানা এক অনুচ্ছেদে ব্যাখ্যা করে, আর সেখানে ছোট থেকে বড়র দিকে যুক্তি টানে। মাপে আর ওজনে যারা কম দেয়, এ কঠিন শাস্তি যদি তাদের জন্য হয়, তবে যে পাল্লা আর মাপ থেকেই চুরি করে, আত্মসাৎ করে, আর মানুষকে তাদের জিনিসে ঠকায়, তার অবস্থা কী হবে? মুয়াসসারের ভাষায়, মাপে কমতি করা লোকদের চেয়ে সে-ই এ হুঁশিয়ারির বেশি উপযুক্ত। ৮৩:৪ আয়াতের প্রশ্ন ছোট প্রতারককে করা হয়েছে, আর এ যুক্তিতে বড় প্রতারকের উপর তা পড়ে আরও ভারী হয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Report From Madinah",
          "bn": "মদীনা থেকে আসা বর্ণনা"
        },
        "p": [
          {
            "en": "Two of the fetched tafsirs cite one narration on how the surah came. Ibn Kathir names an-Nasa'i and Ibn Majah; Ma'arif al-Qur'an names al-Hakim, an-Nasa'i and Ibn Majah. In Sunan Ibn Majah 2223, from Ibn 'Abbas (RA): \"When the Prophet (ﷺ) came to Al-Madinah, they were the worst people in weights and measures. Then Allah, Glorious is He revealed: 'Woe to the Mutaffifun (those who give less in measure and weight)', and they were fair in weights and measures after that.\"",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তার দুটি সূরাটি নাযিলের প্রেক্ষাপটে একই বর্ণনা আনে। ইবন কাসীর নাম নেন নাসাঈ ও ইবন মাজাহর। মাআরিফুল কুরআন নাম নেয় হাকিম, নাসাঈ ও ইবন মাজাহর। সুনানে ইবন মাজাহ ২২২৩ নম্বরে ইবন আব্বাস (রাঃ) থেকে বর্ণিত: \"নবী ﷺ যখন মদীনায় এলেন, তখন মাপের ব্যাপারে তারা ছিল সবচেয়ে মন্দ লোকদের অন্যতম। তখন মহিমান্বিত আল্লাহ নাযিল করলেন: 'দুর্ভোগ মুতাফফিফীনের জন্য (যারা মাপে ও ওজনে কম দেয়)'। এরপর থেকে তারা মাপ ভালোভাবে দিতে লাগল।\""
          },
          {
            "en": "The quranx page fetched for this report shows no grading from Ibn Majah himself, and none is supplied here. Ma'arif al-Qur'an describes the report as having a sound chain; that is Ma'arif's own assessment, reported as such. The narration concerns the surah's first verse and its revelation, not 83:4 in particular, and no fetched tafsir attaches a hadith to 83:4 itself. The surah's place is also disputed: Ma'arif reports Ibn Mas'ud (RA) calling it Makkan, and Ibn 'Abbas (RA), Qatadah, Muqatil and ad-Dahhak calling it Madinan apart from about eight verses.",
            "bn": "এ বর্ণনার জন্য quranx-এর যে পৃষ্ঠা দেখা হয়েছে, তাতে ইবন মাজাহর নিজের কোনো মান নির্ণয় নেই, এখানেও কোনো মান যোগ করা হচ্ছে না। মাআরিফুল কুরআন বর্ণনাটির সনদকে সহীহ বলে। এটা মাআরিফের নিজস্ব মূল্যায়ন, সেভাবেই উল্লেখ করা হলো। বর্ণনাটি সূরার প্রথম আয়াত আর সূরার নাযিল হওয়া নিয়ে, বিশেষ করে ৮৩:৪ নিয়ে নয়। দেখা কোনো তাফসীরই ৮৩:৪ আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেয় না। সূরাটি কোথায় নাযিল হয়েছে, তা নিয়েও মতভেদ আছে। মাআরিফ জানায়, ইবন মাসউদ (রাঃ)-এর মতে এটি মক্কী। আর ইবন আব্বাস (রাঃ), কাতাদা, মুকাতিল ও দাহহাকের মতে মাদানী, তবে প্রায় আটটি আয়াত মক্কী।"
          }
        ]
      },
      {
        "h": {
          "en": "A Mirror, Never a Verdict",
          "bn": "আয়না, রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse questions a group the surah has just described, the mutaffifin of 83:1 to 83:3, and it licenses nothing against any living person or community. It names no trade, no town and no people of today. The narration on its setting ends with the people it describes measuring fairly, which is a poor foundation for anyone's contempt. Whoever uses the verse to brand a seller, a profession or a nation has turned a question meant for the heart into an accusation the text never makes.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি প্রশ্ন করছে সেই দলকে, যাদের বর্ণনা সূরা এইমাত্র দিল: ৮৩:১ থেকে ৮৩:৩ আয়াতের মুতাফফিফীন। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো পেশা, কোনো শহর বা কোনো জাতির নাম এতে নেই। এর প্রেক্ষাপট নিয়ে যে বর্ণনা, তা শেষ হয়েছে এ কথায় যে বর্ণিত লোকেরা পরে ঠিকঠাক মাপ দিতে লাগল। কারও প্রতি অবজ্ঞার ভিত্তি এখানে খোঁজা অর্থহীন। কেউ যদি আয়াতটি দিয়ে কোনো বিক্রেতা, পেশা বা জাতির গায়ে দাগ লাগায়, তবে অন্তরের জন্য রাখা এক প্রশ্নকে সে বানিয়ে ফেলল এমন অভিযোগ, যা কুরআন কোথাও করেনি।"
          },
          {
            "en": "What the verse does invite is a question put to oneself. On every gloss the commentators give, certainty, wavering, fear or firm belief, the measure in the hand answers to what the heart expects. The next two verses, 83:5 and 83:6, say what the raising is for, and they are their own entries. Here it is enough to ask the verse's own question with nobody else in view: do I not think that I will be raised, and does my measure today look like it?",
            "bn": "আয়াতটি যা চায়, তা হলো নিজেকে নিজে প্রশ্ন করা। তাফসীরকারেরা যে ব্যাখ্যাই দিন, নিশ্চিত বিশ্বাস, দোলাচল, ভয় বা দৃঢ় আকীদা, হাতের মাপ সাড়া দেয় অন্তরের প্রত্যাশায়। পরের দুই আয়াত, ৮৩:৫ ও ৮৩:৬, বলে ওঠানো কীসের জন্য। সেগুলোর আলোচনা তাদের নিজ জায়গায়। এখানে অন্য কারও দিকে না তাকিয়ে আয়াতের নিজের প্রশ্নটা করাই যথেষ্ট: আমি কি মনে করি না যে আমাকে আবার ওঠানো হবে? আর আজ আমার মাপ দেখে কি তা বোঝা যায়?"
          }
        ]
      }
    ]
  },
  "83:14": {
    "sections": [
      {
        "h": {
          "en": "The Charge It Answers",
          "bn": "যে অভিযোগের জবাব"
        },
        "p": [
          {
            "en": "Surah al-Mutaffifin opens with woe to those who short the measure, described in 83:2-3 as taking in full when they receive and causing loss when they give. 83:4-6 asks whether such people do not think they will be raised for a tremendous Day. The surah then turns to the record of the wicked in sijjin, and in 83:13 it quotes what one of them says when the verses are recited to him: legends of the former peoples.",
            "bn": "সূরা আল-মুতাফফিফীন শুরু হয় মাপে কম দেওয়া লোকদের প্রতি দুর্ভোগ ঘোষণা দিয়ে; 83:2-3 তাদের বর্ণনা করে এভাবে — নেওয়ার সময় তারা পুরো মাত্রায় নেয়, আর দেওয়ার সময় কম দেয়। 83:4-6 জিজ্ঞেস করে, এরা কি ভাবে না যে এক মহা দিবসে তাদের আবার ওঠানো হবে? এরপর সূরাটি মোড় নেয় সিজ্জীনে রক্ষিত পাপীদের আমলনামার দিকে, আর 83:13-এ উদ্ধৃত করে, আয়াত শোনানো হলে তাদের একজন কী বলে: প্রাচীনকালের লোকদের কাহিনী।"
          }
        ]
      },
      {
        "h": {
          "en": "Kalla, Bal, and a Pause",
          "bn": "কাল্লা, বাল, আর এক মুহূর্ত থামা"
        },
        "p": [
          {
            "en": "Our verse answers the remark rather than the man who made it. Kalla is a word of flat rejection, no, not so; bal is the particle that cancels what preceded and puts something else in its place, rather. Between the two the mushaf carries a small mark above the line, indicating a saktah — a brief silence taken without drawing a new breath — which the recitation of Hafs observes here. The reciter is halted for an instant before the diagnosis is delivered.",
            "bn": "আমাদের আয়াতটি জবাব দেয় কথাটিকে, কথাটি যে বলেছে তাকে নয়। 'কাল্লা' হলো সরাসরি প্রত্যাখ্যানের শব্দ — না, মোটেই না; আর 'বাল' হলো সেই অব্যয় যা আগের কথাটি বাতিল করে তার জায়গায় অন্য কিছু বসায় — বরং। এই দুটির মাঝখানে মুসহাফে লাইনের উপরে একটি ছোট চিহ্ন আছে, যা 'সাক্‌তাহ' নির্দেশ করে — নতুন শ্বাস না নিয়ে এক মুহূর্তের নীরবতা — হাফসের কিরাআতে এখানে যা পালন করা হয়। রোগনির্ণয়টি জানানোর ঠিক আগে পাঠককে এক মুহূর্তের জন্য থামিয়ে দেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Used Once",
          "bn": "একবারই ব্যবহৃত একটি শব্দ"
        },
        "p": [
          {
            "en": "Rana comes from a root that occurs exactly once in the Quran, and this is the place. The lexicographers describe rayn as something that settles over a surface and clings there, the way rust takes hold of iron or a film forms on something polished. It is not a wall built in front of the heart, and not a lid clamped over it. It is a deposit, lying where it fell, and it obscures by accumulating rather than by force.",
            "bn": "'রানা' এসেছে এমন এক মূলধাতু থেকে যা কুরআনে ঠিক একবারই এসেছে, আর সেটি এখানেই। অভিধানবিদরা 'রাইন'-এর বর্ণনা দেন এমন কিছু হিসেবে যা কোনো তলের উপর জমে বসে যায় — যেভাবে লোহায় মরিচা ধরে বা চকচকে জিনিসের উপর আস্তরণ পড়ে। এটি হৃদয়ের সামনে গাঁথা কোনো দেয়াল নয়, তার উপর চেপে বসানো কোনো ঢাকনাও নয়। এটি একটি জমা পড়া স্তর — যেখানে পড়েছে সেখানেই পড়ে আছে; আর এটি ঢেকে দেয় জোর খাটিয়ে নয়, জমে জমে।"
          },
          {
            "en": "The grammatical subject of the verb arrives last: ma kanu yaksibun, what they were earning. Arabic builds that phrase from kana with an imperfect verb, and the combination reports a sustained habit rather than one act. Nothing here says that a sin covered their hearts. It says the covering came from what they kept on earning, which puts the agent inside the person and spreads the process across a lifetime.",
            "bn": "ক্রিয়াপদের ব্যাকরণগত কর্তা আসে সবার শেষে: 'মা কানূ ইয়াকসিবূন' — তারা যা অর্জন করে চলছিল। আরবি এই বাক্যাংশটি গড়ে 'কানা'-র সঙ্গে অসমাপিকা ক্রিয়া জুড়ে, আর এই সংযোগ বোঝায় একটি স্থায়ী অভ্যাস, একটিমাত্র কাজ নয়। এখানে বলা হয়নি যে কোনো একটি গুনাহ তাদের অন্তর ঢেকে দিয়েছে। বলা হয়েছে, আবরণটি এসেছে তারা যা অর্জন করে চলছিল তা থেকে — যা কর্তাকে বসিয়ে দেয় মানুষটির ভেতরে, আর প্রক্রিয়াটিকে ছড়িয়ে দেয় গোটা জীবন জুড়ে।"
          },
          {
            "en": "The Quran has other images for the same event and they are not interchangeable. 47:24 asks whether they do not reflect upon the Quran, or whether there are locks upon hearts, and the Arabic there makes the locks belong to those hearts. 2:7 speaks of a seal set upon hearts and hearing. 18:57 places coverings over hearts lest they understand it. This verse supplies the mechanism the others leave implicit.",
            "bn": "একই ঘটনার জন্য কুরআনে আরও চিত্র আছে, আর সেগুলো পরস্পরের বিকল্প নয়। 47:24 জিজ্ঞেস করে, তারা কি কুরআন নিয়ে গভীরভাবে ভাবে না, নাকি অন্তরগুলোর উপর তালা লাগানো — আর সেখানকার আরবি তালাগুলোকে সেই অন্তরগুলোরই করে দেয়। 2:7 বলে অন্তর ও শ্রবণের উপর মোহর এঁটে দেওয়ার কথা। 18:57 অন্তরের উপর আবরণ রাখে, যাতে তারা তা বুঝতে না পারে। আর এই আয়াতটি জোগায় সেই কার্যপ্রণালী, যা অন্যগুলো অনুক্ত রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Black Spot",
          "bn": "কালো দাগ"
        },
        "p": [
          {
            "en": "At-Tirmidhi relates from Abu Hurayrah (RA) that the Prophet ﷺ said: when the servant commits a sin, a black spot is put into his heart; if he desists, seeks forgiveness and repents, his heart is polished; and if he returns, it increases until it overcomes his heart — and that is the ran which Allah mentioned. He then recited this verse. At-Tirmidhi graded the report hasan sahih.",
            "bn": "ইমাম তিরমিযী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: বান্দা যখন কোনো গুনাহ করে, তার অন্তরে একটি কালো দাগ পড়ে; সে যদি বিরত হয়, ক্ষমা চায় ও তওবা করে, তবে তার অন্তর পরিচ্ছন্ন হয়ে যায়; আর যদি সে ফিরে যায়, তবে তা বাড়তে থাকে, শেষে তার অন্তরকে ঢেকে ফেলে — আর সেটিই সেই 'রান', আল্লাহ যার উল্লেখ করেছেন। এরপর তিনি এই আয়াতটি তিলাওয়াত করেন। ইমাম তিরমিযী বর্ণনাটিকে 'হাসান সহীহ' বলেছেন।"
          },
          {
            "en": "That report should not be blended with another one that is often quoted beside it. Muslim narrates from Hudhayfah ibn al-Yaman (RA) a different image altogether: trials presented to hearts as a reed mat is woven, stick by stick, with a black spot marking the heart that absorbs one and a white spot the heart that rejects it. The two agree in direction and differ in wording, narrator and collection. Each is worth quoting whole rather than merged.",
            "bn": "এই বর্ণনাটিকে আরেকটি বর্ণনার সঙ্গে মিলিয়ে ফেলা ঠিক নয়, যা প্রায়ই এর পাশে উদ্ধৃত হয়। ইমাম মুসলিম হুযায়ফা ইবনুল ইয়ামান (রাঃ) থেকে সম্পূর্ণ ভিন্ন একটি চিত্র বর্ণনা করেন: অন্তরের সামনে ফিতনা পেশ করা হয় যেভাবে চাটাই বোনা হয়, একটি একটি কাঠি ধরে; যে অন্তর তা শুষে নেয় তাতে একটি কালো দাগ পড়ে, আর যে অন্তর তা প্রত্যাখ্যান করে তাতে একটি সাদা দাগ। দুটি বর্ণনার দিক এক, কিন্তু শব্দ, বর্ণনাকারী ও সংকলন আলাদা। প্রতিটিকেই আলাদাভাবে পুরোটা উদ্ধৃত করা উচিত, মিশিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Veiled Now, Veiled Then",
          "bn": "এখন আড়াল, তখনও আড়াল"
        },
        "p": [
          {
            "en": "83:15 comes immediately after and moves the covering. No indeed, it says, from their Lord that Day they will be partitioned. A film settled over the heart in this life is answered by a screen between them and their Lord in the next, and the two sentences stand one after the other so that the correspondence cannot be missed. Ibn Kathir records that ash-Shafi'i argued from 83:15 that the believers will see their Lord, since being veiled is stated here as a punishment.",
            "bn": "83:15 আসে ঠিক এর পরেই, আর আবরণটিকে সরিয়ে নেয় অন্য জায়গায়। এটি বলে: কক্ষনো না, সেদিন তারা তাদের প্রতিপালক থেকে পর্দার আড়ালে থাকবে। এই জীবনে হৃদয়ের উপর জমে বসা আস্তরণের জবাব আসে পরের জীবনে তাদের ও তাদের প্রতিপালকের মাঝখানে একটি পর্দা হিসেবে; আর বাক্য দুটি একটির পর একটি বসানো, যাতে মিলটি চোখ এড়াতে না পারে। ইবনে কাসীর লিপিবদ্ধ করেন যে ইমাম শাফিঈ 83:15 থেকে যুক্তি দিয়েছেন — মুমিনরা তাদের প্রতিপালককে দেখবে, কারণ এখানে পর্দার আড়ালে থাকাকেই শাস্তি হিসেবে বলা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Surface Can Be Polished",
          "bn": "তল ঘষে পরিষ্কার করা যায়"
        },
        "p": [
          {
            "en": "The verse is a warning with its remedy built into it. If the covering came from earning, it can be halted by the same route it arrived, and the hadith names three moves: desisting, seeking forgiveness, and turning back. Notice that none of the three is a feeling. They are things a person does, and the report says the heart is polished when they are done, not when the guilt is felt strongly enough.",
            "bn": "আয়াতটি এমন এক সতর্কবাণী যার ভেতরেই তার প্রতিকার গাঁথা। আবরণটি যদি অর্জন থেকে এসে থাকে, তবে যে পথে এসেছে সেই পথেই তা থামানো যায়; আর হাদীসটি তিনটি পদক্ষেপের নাম নেয়: বিরত হওয়া, ক্ষমা চাওয়া, আর ফিরে আসা। লক্ষ করুন, এই তিনটির একটিও কোনো অনুভূতি নয়। এগুলো মানুষের কাজ — আর বর্ণনাটি বলে, কাজগুলো করা হলেই অন্তর পরিচ্ছন্ন হয়; অনুশোচনা যথেষ্ট তীব্র হলে নয়।"
          },
          {
            "en": "The symptom to watch for is therefore not guilt but its absence: the moment when something that used to trouble you passes through without registering at all. On the picture this verse gives, that is a report about a surface rather than a verdict about a person. Rust is removed by working on the metal, steadily, before the layer thickens — and the whole force of the word rana is that it thickens quietly, in instalments nobody notices being paid.",
            "bn": "কাজেই যে লক্ষণটির দিকে নজর রাখতে হবে তা অপরাধবোধ নয়, বরং তার অনুপস্থিতি: যে মুহূর্তে আগে যা আপনাকে অস্থির করত তা কোনো সাড়া না জাগিয়েই পার হয়ে যায়। এই আয়াতের চিত্র অনুযায়ী, সেটি একজন মানুষ সম্পর্কে চূড়ান্ত রায় নয়, বরং একটি তল সম্পর্কে খবর। মরিচা সরানো হয় ধাতুটির উপর ধারাবাহিকভাবে কাজ করে, স্তরটি পুরু হওয়ার আগেই — আর 'রান' শব্দটির পুরো জোরই এখানে যে, তা নীরবে পুরু হয়, এমন কিস্তিতে যেগুলো শোধ হতে কেউ খেয়াল করে না।"
          }
        ]
      }
    ]
  }
});
