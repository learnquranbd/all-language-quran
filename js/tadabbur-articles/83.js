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
  "83:7": {
    "sections": [
      {
        "h": {
          "en": "Six Words After a Question",
          "bn": "প্রশ্নের পরে ছয় শব্দ"
        },
        "p": [
          {
            "en": "Surah al-Mutaffifin opens with woe to those who give short measure, and in 83:4 to 83:6 it asks whether such people do not think they will be raised for a tremendous Day, the Day when mankind stands before the Lord of the worlds. Our verse is the reply. At-Tabari reads it as a reply to exactly that thought: kalla, the matter is not as these disbelievers suppose, that they will not be raised and will not be punished. The question is still in the air when the answer comes.",
            "bn": "সূরা আল-মুতাফফিফীন শুরু হয় মাপে কম দেওয়া লোকদের দুর্ভোগের ঘোষণা দিয়ে। তারপর ৮৩:৪ থেকে ৮৩:৬ আয়াতে প্রশ্ন ওঠে: এরা কি ভাবে না যে এক মহাদিবসে তাদের আবার ওঠানো হবে, যেদিন মানুষ জগতসমূহের রবের সামনে দাঁড়াবে? আমাদের আয়াত সেই প্রশ্নের জবাব। তাবারী একে ঠিক ওই ধারণারই জবাব হিসেবে পড়েন। কাল্লা মানে, এই কাফিররা যা ভাবছে ব্যাপারটা তেমন নয়। তারা ভাবছে, তাদের ওঠানো হবে না, শাস্তিও দেওয়া হবে না। প্রশ্নটা তখনো বাতাসে ভাসছে, আর জবাব এসে যায়।"
          },
          {
            "en": "In Arabic the reply is six words: kalla, inna, kitaba, al-fujjari, la-fi, sijjin. No; indeed, the book of the wicked is in sijjin. The first word refuses, the second confirms, and the last four place a record in a location. The verse that follows, 83:8, asks what will make you know what sijjin is, and 83:9 follows with kitabun marqum, a written book.",
            "bn": "আরবিতে জবাবটা ছয়টি শব্দের: কাল্লা, ইন্না, কিতাবা, আল-ফুজ্জারি, লাফী, সিজ্জীন। কক্ষনো না, নিশ্চয়ই পাপাচারীদের আমলনামা সিজ্জীনে। প্রথম শব্দটি অস্বীকার করে, দ্বিতীয়টি জোর দিয়ে নিশ্চিত করে, আর শেষ চারটি শব্দ একটি লিখিত হিসাবকে একটা জায়গায় বসিয়ে দেয়। পরের আয়াত ৮৩:৮ জিজ্ঞেস করে, সিজ্জীন কী তা তোমাকে কিসে জানাবে? তার পরেই ৮৩:৯ আয়াতে আসে কিতাবুম মারকূম, লিখিত এক কিতাব।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Refusal Points",
          "bn": "কাল্লা কোন দিকে ফেরে"
        },
        "p": [
          {
            "en": "What does kalla push back against? At-Tabari ties it to the thought in 83:4: it is not as they suppose, that there is no raising and no punishment. Al-Qurtubi reports scholars of Arabic who call it a word of deterrence and warning: the matter is not as they are in it, whether shorting the measure and the scale or denying the Hereafter, so let them desist; then a fresh sentence begins with inna. Al-Baghawi also calls it a deterrent, and adds that the speech is complete at this point.",
            "bn": "কাল্লা আসলে কিসের প্রতিবাদ? তাবারী একে জুড়ে দেন ৮৩:৪ আয়াতের ধারণার সঙ্গে: তারা যা ভাবছে, পুনরুত্থান নেই, শাস্তিও নেই, ব্যাপারটা তেমন নয়। কুরতুবী আরবি ভাষার কিছু আলিমের কথা আনেন, যাঁরা একে বলেন ধমক আর সতর্ক করার শব্দ। তারা যে অবস্থায় আছে, মাপে আর ওজনে কম দেওয়া হোক বা আখিরাত অস্বীকার করা, তা ঠিক নয়, তাই তারা যেন বিরত হয়। এরপর ইন্না দিয়ে নতুন বাক্য শুরু। বাগাভীও একে ধমক বলেন, আর যোগ করেন যে কথাটা এখানেই পূর্ণ হয়ে গেছে।"
          },
          {
            "en": "Al-Hasan, as both al-Qurtubi and al-Baghawi report, took kalla in the sense of haqqan, truly, as an opening joined to what comes after it. Ibn Kathir's short Arabic note reads the same way: Allah says, truly, the book of the wicked is in sijjin. Al-Qurtubi also passes on a report from Ibn Abbas (RA) glossing kalla as will you not believe, which on his account puts the pause at the end of 83:6. The difference is real and stays open here. The same word returns in 83:14, and the article on that verse treats it there.",
            "bn": "কুরতুবী ও বাগাভী দুজনেই জানান, হাসান কাল্লাকে নিয়েছেন হাক্কান অর্থে, মানে সত্যিই। তাঁর মতে এটা পরের কথার সঙ্গে যুক্ত এক সূচনা। ইবন কাসীরের ছোট্ট আরবি টীকাও একইভাবে পড়ে: আল্লাহ বলছেন, সত্যিই পাপাচারীদের আমলনামা সিজ্জীনে। কুরতুবী ইবন আব্বাস (রাঃ)-এর একটি বর্ণনাও আনেন, যেখানে কাল্লার অর্থ: তোমরা কি বিশ্বাস করবে না? কুরতুবীর হিসাবে এতে থামার জায়গা পড়ে ৮৩:৬ আয়াতের শেষে। মতভেদটা সত্যিকারের, এখানে তা খোলাই থাকছে। শব্দটি আবার আসে ৮৩:১৪ আয়াতে, সেখানকার লেখায় তা নিয়ে আলোচনা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Record of Deeds or Destination",
          "bn": "আমলনামা, নাকি গন্তব্য"
        },
        "p": [
          {
            "en": "Kitab can name a record of what was done, or what has been written for someone. At-Tabari takes the first: their book in which were written the deeds they used to do in the world. Al-Baghawi says the same, the book in which their deeds were written, and Ma'arif al-Qur'an renders the phrase as the Record of Deeds of the sinners. Al-Qurtubi notes that the tafsir of Muqatil reads it as the deeds of the wicked, and passes on a report from Ibn Abbas (RA): the souls of the wicked and their deeds are in sijjin.",
            "bn": "কিতাব শব্দে বোঝাতে পারে কৃতকর্মের লিখিত হিসাব, আবার কারও জন্য যা লিখে রাখা হয়েছে তাও। তাবারী প্রথমটি নেন: তাদের সেই খাতা, যাতে দুনিয়ায় তারা যা যা করত সেসব আমল লেখা হয়েছে। বাগাভীও একই কথা বলেন, যে খাতায় তাদের আমল লেখা হয়েছে। মাআরিফুল কুরআনও অর্থ করে পাপীদের আমলনামা। কুরতুবী জানান, মুকাতিলের তাফসীরে এর অর্থ পাপাচারীদের আমল। তিনি ইবন আব্বাস (রাঃ)-এর একটি বর্ণনাও আনেন: পাপাচারীদের রূহ আর তাদের আমল, দুটোই সিজ্জীনে।"
          },
          {
            "en": "Ibn Kathir's Arabic note reads differently: their destination and their abode are in sijjin. The Muyassar, explaining 83:7 to 83:9 together, writes of the destination of the wicked and their abode, and then of what was written for them to reach: written, settled, with nothing added to it and nothing taken from it. Ma'arif al-Qur'an allows a further possibility, a consolidated book in which the deeds of all the disbelievers of the world are recorded. The sources fetched here leave record and destination side by side.",
            "bn": "ইবন কাসীরের আরবি টীকা পড়ে অন্যভাবে: তাদের গন্তব্য আর আশ্রয়স্থল সিজ্জীনে। মুয়াসসার ৮৩:৭ থেকে ৮৩:৯ পর্যন্ত একসঙ্গে ব্যাখ্যা করে। সেখানে কথা পাপাচারীদের গন্তব্য আর আশ্রয় নিয়ে, তারপর তাদের জন্য যেখানে পৌঁছানো লিখে দেওয়া হয়েছে তা নিয়ে। সে লেখা চূড়ান্ত, তাতে কিছু বাড়ানো হবে না, কমানোও হবে না। মাআরিফুল কুরআন আরেকটি সম্ভাবনার কথা বলে: এমন এক সমন্বিত কিতাব, যাতে দুনিয়ার সব কাফিরের আমল লেখা আছে। এখানে সংগ্রহ করা তাফসীরগুলো আমলনামা আর গন্তব্য, দুটি অর্থই পাশাপাশি রেখে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How Wide the Word Reaches",
          "bn": "ফুজ্জার শব্দের পরিধি"
        },
        "p": [
          {
            "en": "Who are al-fujjar? As-Sa'di adds a bracketed note: this covers every fajir, of the kinds of disbelievers, hypocrites and those who sin openly. At-Tabari, reading the verse as an answer to 83:4, speaks of these disbelievers who think they will be neither raised nor punished. Ma'arif al-Qur'an says the sinners, and reports traditions in which the record of the evil deeds of every wicked person is kept separately. Ibn Kathir, reaching 83:11 in the same grouped passage, reads that later verse as explaining who the wicked deniers are.",
            "bn": "আল-ফুজ্জার কারা? সা'দী বন্ধনীর ভেতরে একটি টীকা যোগ করেন: এতে শামিল প্রত্যেক ফাজির, কাফির, মুনাফিক আর ফাসিক, সব ধরনের। তাবারী আয়াতটিকে ৮৩:৪ আয়াতের জবাব ধরে পড়েন, তাই তাঁর কথায় এরা সেই কাফির, যারা ভাবে তাদের ওঠানোও হবে না, শাস্তিও হবে না। মাআরিফুল কুরআন বলে পাপীরা, আর এমন বর্ণনার কথা জানায়, যাতে প্রত্যেক পাপাচারীর মন্দ আমলের হিসাব আলাদা করে রাখা হয়। ইবন কাসীর একসঙ্গে ব্যাখ্যা করা অংশে ৮৩:১১ আয়াতে পৌঁছে বলেন, সেই আয়াতটিই জানায় এই পাপাচারী অস্বীকারকারীরা কারা।"
          },
          {
            "en": "Notice the range in these readings. As-Sa'di's note takes in more than disbelief alone, and al-Qurtubi's account of kalla points back to the scale as well as to denial of the Hereafter. On those readings the verse is not first a statement about distant others. The surah began with a trader's habit of taking in full and giving short, and the record it now speaks of is the kind of thing such a habit fills.",
            "bn": "এই ব্যাখ্যাগুলোর পরিধি খেয়াল করুন। সা'দীর টীকা শুধু কুফরিতে থেমে থাকে না। আর কুরতুবীর কাল্লার ব্যাখ্যা আখিরাত অস্বীকারের পাশাপাশি দাঁড়িপাল্লার দিকেও ফিরে তাকায়। এভাবে পড়লে আয়াতটি প্রথমত দূরের অন্য লোকদের নিয়ে কোনো ঘোষণা নয়। সূরা শুরু হয়েছিল এক ব্যবসায়ীর অভ্যাস দিয়ে: নেওয়ার সময় পুরোটা নেয়, দেওয়ার সময় কম দেয়। এখন যে খাতার কথা আসছে, এমন অভ্যাসই তো তা ভরে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Built From Prison",
          "bn": "কারাগার থেকে গড়া শব্দ"
        },
        "p": [
          {
            "en": "Several commentators explain sijjin from its form. At-Tabari calls it fa'il from sijn, prison, on the pattern of sikkir from sukr, drunkenness, and fissiq from fisq, sinfulness. Ibn Kathir says the same and adds what sijn means here: ad-dayq, narrowness. Al-Qurtubi cites Abu 'Ubayda, al-Akhfash and az-Zajjaj: in sijjin means in confinement and severe narrowness, a fa'il form from sijn; al-Baghawi gives the same explanation from al-Akhfash. The Muyassar's plain paraphrase keeps only that sense: their destination is in narrowness.",
            "bn": "কয়েকজন তাফসীরকার সিজ্জীনের অর্থ খোঁজেন শব্দের গঠন থেকে। তাবারী বলেন, এটি সিজন, মানে কারাগার, থেকে ফিঈল ওজনের শব্দ, যেমন সুকর বা মাতলামি থেকে সিক্কীর, আর ফিসক বা পাপাচার থেকে ফিসসীক। ইবন কাসীরও তাই বলেন, আর যোগ করেন এখানে সিজনের অর্থ আদ-দায়ক, সংকীর্ণতা। কুরতুবী উদ্ধৃত করেন আবু উবায়দা, আখফাশ আর যাজ্জাজকে: ফী সিজ্জীন মানে বন্দিদশায়, ভীষণ সংকীর্ণতায়। বাগাভীও আখফাশ থেকে একই ব্যাখ্যা দেন। মুয়াসসারের সহজ ভাষ্যে শুধু এই অর্থটুকুই থাকে: তাদের গন্তব্য সংকীর্ণতায়।"
          },
          {
            "en": "Al-Qurtubi draws a meaning from this. Their book is held in confinement, which he takes as a sign of how low their standing is, or because it sits where what is turned away from and kept at a distance belongs. Ma'arif al-Qur'an derives the word from sajana, to imprison in a narrow place, and cites the Qamus for the sense of eternal imprisonment. Al-Qurtubi also records, under the words it is said, that the word was originally sijjil with the lam changed to nun, and gives Zayd ibn Aslam's distinction: sijjin in the lowest earth, sijjil in the nearest heaven.",
            "bn": "কুরতুবী এ থেকে একটা অর্থ টেনে আনেন। তাদের খাতা আটকে রাখা হয়েছে বন্দিদশায়। তাঁর মতে এটা তাদের মর্যাদা কত নিচু তার আলামত, কিংবা খাতাটা পড়ে আছে সেখানে, যেখানে থাকে মুখ ফিরিয়ে নেওয়া আর দূরে ঠেলে দেওয়া জিনিস। মাআরিফুল কুরআন শব্দটিকে নিয়ে যায় সাজানা ধাতুতে, মানে সংকীর্ণ জায়গায় বন্দি করা, আর কামূস থেকে আনে চিরস্থায়ী বন্দিত্বের অর্থ। কুরতুবী 'বলা হয়' বলে আরও জানান, মূল শব্দ ছিল সিজ্জীল, লাম বদলে নূন হয়েছে। তিনি যায়দ ইবন আসলামের পার্থক্যটিও আনেন: সিজ্জীন সবচেয়ে নিচের জমিনে, সিজ্জীল নিকটতম আসমানে।"
          },
          {
            "en": "Two further readings move away from place altogether. 'Ikrima, reported by both al-Qurtubi and al-Baghawi, said that in sijjin means in loss and misguidance; al-Qurtubi compares it to what is said of a man whose standing has fallen, that he has slipped to the very bottom. Al-Qurtubi also reports, again under it is said, that the phrase is a parable, an indication that Allah turns back the deeds they thought would benefit them. He lists these beside the readings of place without ranking them, and this article keeps them side by side as he does.",
            "bn": "আরও দুটি ব্যাখ্যা জায়গার ধারণা থেকে পুরোপুরি সরে যায়। কুরতুবী ও বাগাভী দুজনেই ইকরিমার কথা আনেন: ফী সিজ্জীন মানে ক্ষতি আর পথভ্রষ্টতায়। কুরতুবী একে তুলনা করেন সেই কথার সঙ্গে, যা বলা হয় কারও মর্যাদা পড়ে গেলে: সে একেবারে তলায় পিছলে পড়েছে। কুরতুবী আবার 'বলা হয়' বলে আরেকটি মত আনেন: কথাটা একটা উপমা। আল্লাহ তাদের সেই আমলগুলো ফিরিয়ে দেন, যেগুলো কাজে আসবে বলে তারা ভেবেছিল। জায়গা-সংক্রান্ত ব্যাখ্যাগুলোর পাশেই তিনি এগুলো রাখেন, কোনোটাকে আগে-পিছে না করে। এই লেখাও সেগুলো পাশাপাশিই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seventh Earth, Rock, or Pit",
          "bn": "সপ্তম জমিন, পাথর, নাকি গর্ত"
        },
        "p": [
          {
            "en": "At-Tabari's own gloss is direct: sijjin is the seventh, lowest earth. He lists those who said so with their chains, among them Mughith ibn Sumayy, Qatada, ad-Dahhak, Mujahid, and a report from Ibn Abbas (RA): their deeds are in a book in the lowest earth. In Mujahid's wording, their deeds are in the seventh earth and do not rise. Al-Baghawi names Qatada, Mujahid and ad-Dahhak for the seventh earth, adding that the souls of the disbelievers are there, and al-Qurtubi adds al-Hasan and 'Ata' al-Khurasani.",
            "bn": "তাবারীর নিজের ব্যাখ্যা সোজা: সিজ্জীন হলো সপ্তম, সবচেয়ে নিচের জমিন। যাঁরা এ কথা বলেছেন, সনদসহ তিনি তাঁদের তালিকা দেন। তাঁদের মধ্যে আছেন মুগীস ইবন সুমাই, কাতাদা, দাহহাক, মুজাহিদ, আর আছে ইবন আব্বাস (রাঃ)-এর একটি বর্ণনা: তাদের আমল সবচেয়ে নিচের জমিনে এক কিতাবে লেখা। মুজাহিদের ভাষায়, তাদের আমল সপ্তম জমিনে, তা উপরে ওঠে না। বাগাভী সপ্তম জমিনের মতের জন্য কাতাদা, মুজাহিদ ও দাহহাকের নাম নেন, আর যোগ করেন যে কাফিরদের রূহ সেখানেই থাকে। কুরতুবী এর সঙ্গে যোগ করেন হাসান ও আতা আল-খুরাসানীর নাম।"
          },
          {
            "en": "A second group speaks of a rock. Mujahid, through Ibn Abi Najih, said sijjin is a rock in the seventh earth and the book of the wicked is placed beneath it; at-Tabari, al-Qurtubi and al-Baghawi all carry this, with small differences of wording. Al-Baghawi adds al-Kalbi, who described the rock as green, and al-Qurtubi gives Yahya ibn Sallam's black stone beneath the earth. At-Tabari also reports some scholars of Arabic who mentioned the rock beneath the earth and thought sijjin might be a description of it rather than its proper name.",
            "bn": "আরেক দল বলেন পাথরের কথা। ইবন আবী নাজীহের সূত্রে মুজাহিদ বলেছেন, সিজ্জীন সপ্তম জমিনের এক পাথর, যার নিচে পাপাচারীদের আমলনামা রাখা হয়। তাবারী, কুরতুবী ও বাগাভী সবাই এ বর্ণনা এনেছেন, শব্দে সামান্য হেরফেরসহ। বাগাভী এর সঙ্গে কালবীর কথা যোগ করেন, যিনি পাথরটিকে সবুজ বলেছেন। কুরতুবী আনেন ইয়াহইয়া ইবন সাল্লামের বর্ণনা: জমিনের নিচে এক কালো পাথর। তাবারী আরবি ভাষার কিছু আলিমের কথাও জানান। তাঁরা জমিনের নিচের পাথরটির উল্লেখ করেছেন, আর ভেবেছেন সিজ্জীন হয়তো পাথরটির নাম নয়, তার একটা বিশেষণ।"
          },
          {
            "en": "Others tie the place to Iblis. At-Tabari and al-Baghawi carry Ka'b al-Ahbar's answer to a question from Ibn Abbas (RA), which places sijjin by Iblis. Sa'id ibn Jubayr placed it beneath something belonging to Iblis; the word that follows Iblis is not rendered here, because the texts as fetched do not agree on its spelling. At-Tabari also lists a view that sijjin is an open pit in Jahannam, with a report from Abu Hurayra (RA) that al-Qurtubi and al-Baghawi repeat. This article could not confirm that report in a graded collection and does not quote it.",
            "bn": "আরেক দল জায়গাটিকে ইবলিসের সঙ্গে যুক্ত করেন। ইবন আব্বাস (রাঃ)-এর এক প্রশ্নের জবাবে কা'ব আল-আহবার যা বলেছিলেন, তাবারী ও বাগাভী তা এনেছেন। তাতে সিজ্জীনের অবস্থান ইবলিসের কাছে। সাঈদ ইবন জুবায়র সিজ্জীনকে রেখেছেন ইবলিসের কোনো কিছুর নিচে; ইবলিসের পরের শব্দটি এখানে অনূদিত হয়নি, কারণ যে পাঠগুলো দেখা হয়েছে সেগুলোতে তার বানান মেলে না। তাবারী আরেকটি মতও আনেন: সিজ্জীন জাহান্নামের এক খোলা গর্ত। এর পক্ষে আবু হুরায়রা (রাঃ) থেকে একটি বর্ণনা আছে, যা কুরতুবী ও বাগাভীও এনেছেন। কোনো মানযুক্ত হাদীস সংকলনে এই লেখা বর্ণনাটি যাচাই করতে পারেনি, তাই তা উদ্ধৃত করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration Left Unquoted",
          "bn": "যে বর্ণনা উদ্ধৃত হলো না"
        },
        "p": [
          {
            "en": "At-Tabari explains why he chose the seventh earth. He cites al-Bara' ibn 'Azib (RA) saying that sijjin is the lowest earth, and then, by a second chain, a longer narration from al-Bara' traced to the Prophet ﷺ about the soul of the wicked after death, which ends by placing his book in sijjin. Ibn Kathir refers to the same lengthy hadith of al-Bara', and Ma'arif al-Qur'an cites it through al-Baghawi and Ahmad, as quoted by al-Mazhari.",
            "bn": "সপ্তম জমিনের মতটি কেন বেছে নিলেন, তাবারী তা ব্যাখ্যা করেন। তিনি বারা ইবন আযিব (রাঃ)-এর কথা আনেন যে সিজ্জীন সবচেয়ে নিচের জমিন। তারপর দ্বিতীয় আরেক সনদে আনেন বারা (রাঃ) থেকেই নবী ﷺ পর্যন্ত পৌঁছানো এক দীর্ঘ বর্ণনা। তাতে মৃত্যুর পর পাপাচারীর রূহের কথা আছে, আর শেষে তার আমলনামা রাখা হয় সিজ্জীনে। ইবন কাসীরও বারা (রাঃ)-এর সেই দীর্ঘ হাদীসের উল্লেখ করেন। মাআরিফুল কুরআন মাযহারীর উদ্ধৃতিতে তা আনে বাগাভী ও আহমাদের সূত্রে।"
          },
          {
            "en": "The version this article could check, Sunan Abi Dawud 4753, is long, and its wording on that page does not contain the sentence about sijjin. The fuller wording with that sentence was not on any page fetched for this verse. Rather than clip a long narration or splice two versions into a hybrid, the article does not quote it. Ma'arif al-Qur'an closes its own discussion of where sijjin lies with a phrase worth keeping: and Allah knows best. Most of the readings gathered here point the same way, downward and narrow.",
            "bn": "এই লেখা যে সংস্করণটি যাচাই করতে পেরেছে, সুনান আবি দাউদের ৪৭৫৩ নম্বর হাদীস, তা দীর্ঘ। আর সেই পাতায় এর ভাষায় সিজ্জীনের বাক্যটি নেই। ওই বাক্যসহ পূর্ণ ভাষ্য এ আয়াতের জন্য খোলা কোনো পাতায় পাওয়া যায়নি। দীর্ঘ বর্ণনা কেটে ছোট করা বা দুই সংস্করণ জোড়া লাগানোর বদলে লেখাটি তা উদ্ধৃতই করছে না। সিজ্জীন কোথায়, এ আলোচনা মাআরিফুল কুরআন শেষ করে এমন এক কথায়, যা মনে রাখার মতো: আল্লাহই ভালো জানেন। এখানে জড়ো করা বেশির ভাগ ব্যাখ্যা একই দিকে ইঙ্গিত করে: নিচের দিকে, সংকীর্ণতার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Book Buried Away",
          "bn": "মাটিচাপা দেওয়া খাতা"
        },
        "p": [
          {
            "en": "Al-Qurtubi quotes al-Qushayri: sijjin is a place among the lowest where the book of these people is buried, so that it does not appear but remains there as if imprisoned. He calls this a sign of the foulness of their deeds and of Allah's holding them in contempt, and points to the contrast the surah itself draws: of the book of the righteous it says that those brought near witness it, in 83:21. A book hidden away, and a book attended. The surah develops that second book in its own later verses.",
            "bn": "কুরতুবী কুশাইরীর কথা উদ্ধৃত করেন: সিজ্জীন সবচেয়ে নিচের দিকের এক জায়গা, যেখানে এদের খাতা পুঁতে রাখা হয়। তা আর প্রকাশ পায় না, বন্দির মতো সেখানেই পড়ে থাকে। তাঁর মতে এটা তাদের আমলের নোংরামির আলামত, আর আল্লাহ যে সেগুলোকে তুচ্ছ গণ্য করেন তারও। তিনি সূরার নিজের টানা তুলনাটাও দেখান: নেককারদের খাতা সম্পর্কে ৮৩:২১ আয়াতে বলা হয়েছে, নৈকট্যপ্রাপ্তরা তা প্রত্যক্ষ করে। একটি খাতা লুকিয়ে রাখা, অন্যটির পাশে উপস্থিত থাকে সাক্ষীরা। দ্বিতীয় খাতার কথা সূরা পরের আয়াতগুলোয় নিজেই খুলে বলে।"
          },
          {
            "en": "Ibn Kathir reasons from elsewhere in the Qur'an. The destination of the wicked, he says, is Hell, the lowest of the low, and he cites 95:5 to 95:6: then We returned him to the lowest of the low, except those who believe and do righteous deeds. He adds 25:13, on a narrow place into which they are thrown, chained together. Of kitabun marqum in 83:9 he says it does not explain what sijjin is but the destination recorded for them, inscribed and completed, reporting this from Muhammad ibn Ka'b al-Qurazi. The verses 83:8 to 83:9 take that question up.",
            "bn": "ইবন কাসীর যুক্তি টানেন কুরআনের অন্য জায়গা থেকে। তাঁর কথায় পাপাচারীদের গন্তব্য জাহান্নাম, নিচের চেয়েও নিচে। তিনি উদ্ধৃত করেন ৯৫:৫ ও ৯৫:৬: তারপর আমি তাকে ফিরিয়ে দিলাম হীনতমদের হীনতম স্তরে, তবে যারা ঈমান আনে আর নেক আমল করে তারা নয়। সঙ্গে আনেন ২৫:১৩, যেখানে আছে এক সংকীর্ণ জায়গার কথা, যেখানে তাদের শিকলে বাঁধা অবস্থায় নিক্ষেপ করা হবে। ৮৩:৯ আয়াতের কিতাবুম মারকূম সম্পর্কে তিনি বলেন, এটা সিজ্জীন কী তার ব্যাখ্যা নয়। এটা তাদের জন্য লিখে রাখা গন্তব্যের বর্ণনা, যা লিখিত ও চূড়ান্ত। কথাটি তিনি আনেন মুহাম্মাদ ইবন কা'ব আল-কুরাযী থেকে। ৮৩:৮ ও ৮৩:৯ আয়াত এ প্রশ্নটিই সামনে আনে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Verdict on Anyone",
          "bn": "কারও পরিণতির রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes what the text describes: the book of al-fujjar placed in sijjin, read by the commentators in the ways set out above. It licenses nothing against any living person or community. It names nobody in our time, and nothing in it allows a reader to point at a neighbour, a rival or a group and assign them to sijjin. The sources gathered here speak of what is unseen, and they speak with caution; a reader today has less warrant than they had, not more.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি তা-ই বর্ণনা করে, যা পাঠে আছে: পাপাচারীদের আমলনামা সিজ্জীনে রাখা, আর তাফসীরকারেরা তা যেভাবে পড়েছেন, উপরে তা বলা হলো। জীবিত কোনো ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আমাদের সময়ের কারও নাম এতে নেই। প্রতিবেশী, প্রতিপক্ষ বা কোনো দলের দিকে আঙুল তুলে তাদের সিজ্জীনে পাঠিয়ে দেওয়ার কোনো সুযোগও এতে নেই। এখানে জড়ো করা তাফসীরগুলো গায়েবের কথা বলে, আর সাবধানে বলে। আজকের পাঠকের অধিকার তাঁদের চেয়ে কম, বেশি নয়।"
          },
          {
            "en": "What the verse does hand each reader is a question about their own record. The surah began with the scale: taking in full, giving short, and acting as though nothing were being written down. At-Tabari reads kalla as the refusal of that assumption. Whatever sijjin is, and the sources give several answers, the verse places a record somewhere it is kept. The response the surah's opening invites is a practical one: to measure fairly today, to give what is due, and to live as someone whose book will be opened.",
            "bn": "প্রত্যেক পাঠকের হাতে আয়াতটি যা তুলে দেয়, তা তাঁর নিজের আমলনামা নিয়ে এক প্রশ্ন। সূরা শুরু হয়েছিল দাঁড়িপাল্লা দিয়ে: পুরোটা বুঝে নেওয়া, কম দেওয়া, আর এমন ভাব যেন কিছুই লেখা হচ্ছে না। তাবারী কাল্লাকে পড়েন ঠিক ওই ধারণার প্রত্যাখ্যান হিসেবে। সিজ্জীন যা-ই হোক, তাফসীরে এর কয়েক রকম জবাব আছে, আয়াতটি একটা লিখিত হিসাবকে এমন জায়গায় রাখে, যেখানে তা সংরক্ষিত থাকে। সূরার শুরু যে জবাব চায়, তা হাতে-কলমে: আজ ন্যায্য মাপে দেওয়া, যার যা পাওনা তা বুঝিয়ে দেওয়া, আর এমনভাবে বাঁচা যেন আমার খাতা একদিন খোলা হবে।"
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
  },
  "83:21": {
    "sections": [
      {
        "h": {
          "en": "The Last Words on the Register",
          "bn": "খাতার কথার শেষ টান"
        },
        "p": [
          {
            "en": "The passage turns at 83:18 with kalla, and its subject changes from the deniers to the righteous: their record is in 'Illiyyun. A question follows at 83:19, what will make you know what 'Illiyyun is, and a short answer at 83:20, kitabun marqum, a register inscribed. This verse completes that answer in two Arabic words, yashhaduhu al-muqarrabun: it is witnessed by those brought near. The next verse, 83:22, opens a new scene about the righteous themselves, so these two words are the last thing said about the record.",
            "bn": "৮৩:১৮ আয়াতে কাল্লা শব্দ দিয়ে কথার মোড় ঘোরে। অস্বীকারকারীদের কথা থেমে যায়, শুরু হয় সৎলোকদের কথা: তাদের আমলনামা ইল্লিয়্যীনে। ৮৩:১৯ আয়াতে প্রশ্ন আসে, ইল্লিয়্যীন কী তা তোমাকে কে জানাবে? ৮৩:২০ আয়াতে ছোট্ট উত্তর, কিতাবুম মারকূম, লিখিত এক খাতা। এই আয়াত সেই উত্তর শেষ করে দুটি আরবি শব্দে: ইয়াশহাদুহুল মুকাররাবূন, নৈকট্যপ্রাপ্তরা তা প্রত্যক্ষ করে। ৮৩:২২ আয়াত থেকে নতুন দৃশ্য, সেখানে কথা সৎলোকদের নিজেদের নিয়ে। ফলে আমলনামা সম্পর্কে শেষ কথা এই দুটি শব্দই।"
          },
          {
            "en": "The passage has a mirror earlier in the surah. At 83:7 the record of the wicked is placed in Sijjin, and Ibn Kathir's abridged English commentary calls 'Illiyyin the opposite of Sijjin, saying the righteous are in a situation that is the opposite of the wicked. What the righteous side gains here is a company of witnesses. This article stays with those two words: the verb and its attached pronoun, who the near ones are in the commentaries fetched for this verse, and what each of those commentators says they witness.",
            "bn": "সূরার আগের অংশে এর এক প্রতিচ্ছবি আছে। ৮৩:৭ আয়াতে পাপাচারীদের আমলনামা রাখা হয় সিজ্জীনে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ইল্লিয়্যীনকে বলে সিজ্জীনের বিপরীত, আর বলে সৎলোকদের অবস্থা পাপাচারীদের ঠিক উল্টো। সৎলোকদের দিকে এখানে বাড়তি যা যোগ হলো, তা একদল সাক্ষী। এই লেখা সেই দুটি শব্দেই থাকবে। ক্রিয়াটি আর তার সঙ্গে জোড়া ছোট্ট ‘হু’, এই আয়াতের জন্য সংগ্রহ করা তাফসীরগুলোতে নৈকট্যপ্রাপ্তরা কারা, আর প্রত্যেক তাফসীরকারের মতে তারা কী প্রত্যক্ষ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Witness, Attend, Look Upon",
          "bn": "সাক্ষ্য, হাজিরা, দৃষ্টি"
        },
        "p": [
          {
            "en": "Yashhaduhu is a single word in the Arabic: the present-tense verb yashhadu with the attached pronoun -hu, it, as its object. Ma'arif al-Qur'an derives the verb from shuhud and lists its senses as to attend, to witness, to be present and to observe. Al-Baghawi explains it with a pair of verbs: the angels yashhaduna wa-yahdurun, they witness and they attend. The Muyassar, commenting on 83:18 to 83:21 as a group, chooses another verb altogether: yattali'u 'alayhi, the near ones look upon it.",
            "bn": "আরবিতে ইয়াশহাদুহু একটি মাত্র শব্দ। বর্তমান কালের ক্রিয়া ইয়াশহাদু, আর তার সঙ্গে লাগানো ‘হু’, মানে ‘তা’, যা ক্রিয়ার কর্ম। মাআরিফুল কুরআন ক্রিয়াটিকে শুহূদ থেকে এনেছে এবং তার অর্থ গুনিয়েছে এভাবে: উপস্থিত থাকা, সাক্ষী হওয়া, হাজির থাকা, পর্যবেক্ষণ করা। বাগাভী দুটি ক্রিয়া পাশাপাশি রেখে ব্যাখ্যা করেন: ফেরেশতারা ইয়াশহাদূনা ওয়া ইয়াহদুরূন, তারা প্রত্যক্ষ করে এবং উপস্থিত থাকে। মুয়াসসার ৮৩:১৮ থেকে ৮৩:২১ আয়াত একসঙ্গে ব্যাখ্যা করে, আর বেছে নেয় আরেকটি ক্রিয়া: ইয়াত্তালিউ আলাইহি, নৈকট্যপ্রাপ্তরা তার উপর দৃষ্টি রাখে।"
          },
          {
            "en": "Ibn Kathir's abridged English renders the phrase as to which bear witness those nearest, and quotes Ibn 'Abbas, through al-'Awfi, as saying that those nearest to Allah in each heaven will witness it. Ma'arif's own rendering is attended by those blessed with nearness to Allah. The fetched texts therefore give three shades of the verb: bearing witness, being present, and looking upon. None of them pushes the others out, and since the commentators let them stand side by side, this article keeps all three and does not choose.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর বাক্যটির অনুবাদ করে এভাবে: যার সাক্ষ্য দেয় সবচেয়ে নিকটবর্তীরা। সেখানে আওফীর সূত্রে ইবন আব্বাস (রাঃ)-এর কথাও আছে: প্রতিটি আসমানে আল্লাহর সবচেয়ে কাছের যারা, তারা তা প্রত্যক্ষ করবে। মাআরিফ নিজে লিখেছে: আল্লাহর নৈকট্যধন্যরা যেখানে হাজির থাকে। সংগ্রহ করা লেখাগুলোতে তাই ক্রিয়াটির তিনটি রং পাওয়া যায়: সাক্ষ্য দেওয়া, উপস্থিত থাকা আর দৃষ্টি রাখা। কোনোটি অন্যটিকে বাদ দেয় না। তাফসীরকারেরা এগুলো পাশাপাশি থাকতে দিয়েছেন, তাই এ লেখাও তিনটিই রাখছে, কোনোটিকে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Little -hu Holds",
          "bn": "ছোট্ট ‘হু’ কাকে ধরে আছে"
        },
        "p": [
          {
            "en": "Most of the fetched commentaries make the pronoun point back to the record of 83:20. At-Tabari says the near ones witness that written book, written with Allah's guarantee to the righteous among His servants of safety from the Fire and of winning the Garden. As-Sa'di speaks of their inscribed book. Al-Baghawi says they witness and attend that written thing, or that book, when it is taken up to 'Illiyyin. The Muyassar calls the book of the righteous written and settled, with nothing added to it and nothing taken from it.",
            "bn": "সংগ্রহ করা তাফসীরগুলোর বেশির ভাগ ‘হু’-কে ফিরিয়ে নেয় ৮৩:২০ আয়াতের খাতার দিকে। তাবারী বলেন, নৈকট্যপ্রাপ্তরা প্রত্যক্ষ করে সেই লিখিত কিতাব, যাতে লেখা আছে আল্লাহর বান্দাদের মধ্যে সৎলোকের জন্য জাহান্নাম থেকে আল্লাহর দেওয়া নিরাপত্তা আর জান্নাত লাভের কথা। সা'দী বলেন তাদের লিখিত কিতাবের কথা। বাগাভী বলেন, সেই লেখা বা সেই কিতাব যখন ইল্লিয়্যীনে তুলে নেওয়া হয়, তারা তা প্রত্যক্ষ করে এবং তার কাছে হাজির থাকে। মুয়াসসারের ভাষায় সৎলোকদের কিতাব লেখা হয়ে চূড়ান্ত হয়ে গেছে, তাতে কিছু যোগও হয় না, কিছু কমেও না।"
          },
          {
            "en": "Al-Qurtubi frames the object a little differently. In his first sentence, the near ones of every heaven among the angels witness 'amal al-abrar, the deeds of the righteous. At the close of his comment, after a report taken up in a later section, he glosses the verse again as they witness their writing, kitabatahum. For him, then, what is witnessed is the deed and the writing of it together. The shift is small, but it is there in the text, and it keeps the record tied to what the righteous actually did.",
            "bn": "কুরতুবী ‘তা’-কে একটু ভিন্নভাবে ধরেন। তাঁর প্রথম বাক্যে প্রতিটি আসমানের নৈকট্যপ্রাপ্ত ফেরেশতারা প্রত্যক্ষ করে আমালুল আবরার, সৎলোকদের আমল। মন্তব্যের শেষে, এক বর্ণনার পর যা নিয়ে পরের এক অংশে কথা হবে, তিনি আবার বলেন: তারা তাদের লেখা প্রত্যক্ষ করে, কিতাবাতাহুম। তাঁর কাছে তাই প্রত্যক্ষ করার বিষয় আমল আর সেই আমলের লিখিত রূপ, দুটো একসঙ্গে। পার্থক্যটা ছোট, তবে লেখায় তা আছে। আর এতে খাতাটা বাঁধা থাকে সৎলোকেরা বাস্তবে যা করেছে তার সঙ্গে।"
          },
          {
            "en": "Ma'arif al-Qur'an sets out a second possibility. If shuhud is taken in the sense of being present, it says, the pronoun refers to 'illiyyin instead of the register, and those brought near would be righteous people, not angels. The verse would then mean that the souls of those near to Allah are present in 'illiyyin. Ma'arif's first explanation, which it credits to al-Qurtubi, is the other: the record of the righteous is in the custody of angels near to Allah. Both readings are kept here, with neither preferred.",
            "bn": "মাআরিফুল কুরআন আরেকটি সম্ভাবনার কথা তোলে। তার বক্তব্য, শুহূদকে যদি উপস্থিত থাকা অর্থে নেওয়া হয়, তবে ‘হু’ ফিরবে খাতার দিকে নয়, ইল্লিয়্যীনের দিকে। তখন নৈকট্যপ্রাপ্তরা ফেরেশতা নন, বরং সৎ মানুষেরা। আয়াতের অর্থ দাঁড়াবে: আল্লাহর নৈকট্যপ্রাপ্তদের রূহ ইল্লিয়্যীনে উপস্থিত থাকে। তবে মাআরিফের প্রথম ব্যাখ্যা অন্যটি, আর সেটি সে কুরতুবীর বরাতে দেয়: সৎলোকদের আমলনামা আল্লাহর নিকটবর্তী ফেরেশতাদের হেফাজতে থাকে। এখানে দুটি পাঠই রাখা হলো, কোনোটিকে প্রাধান্য না দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Are Those Brought Near",
          "bn": "নৈকট্যপ্রাপ্ত কারা"
        },
        "p": [
          {
            "en": "Al-muqarrabun means those brought near, and the fetched texts mostly fill the word in as angels. At-Tabari's own gloss is the near ones of His angels, from every heaven of the seven heavens, and he adds that the people of interpretation said something to the same effect. He then lists them. Qatada, in his chain, says: of the angels of Allah. Ibn Zayd says simply: the angels. Ibn Kathir's Arabic text also gives Qatada's gloss as the angels, stated without any qualifier.",
            "bn": "আল মুকাররাবূন মানে যাদের কাছে টেনে নেওয়া হয়েছে। সংগ্রহ করা লেখাগুলো বেশির ভাগ ক্ষেত্রে এ শব্দের অর্থ করে ফেরেশতা। তাবারীর নিজের ব্যাখ্যা: সাতটি আসমানের প্রতিটি থেকে আল্লাহর নৈকট্যপ্রাপ্ত ফেরেশতারা। সঙ্গে তিনি জানান, তাফসীরের আলেমরাও প্রায় এ কথাই বলেছেন, তারপর তাঁদের নাম আনেন। তাঁর সনদে কাতাদা বলেন: আল্লাহর ফেরেশতাদের মধ্য থেকে। ইবন যায়দ সংক্ষেপে বলেন: ফেরেশতারা। ইবন কাসীরের আরবি তাফসীরেও কাতাদার ব্যাখ্যা একই, ফেরেশতারা, কোনো শর্ত ছাড়া।"
          },
          {
            "en": "On Ibn 'Abbas the two books carry different wordings. At-Tabari's chain to Ibn 'Abbas has him say: all the people of heaven, kull ahl as-sama'. Ibn Kathir, citing al-'Awfi from Ibn 'Abbas, has: the near ones of every heaven witness it. Ad-Dahhak, in at-Tabari's list, joins the two ideas: the near ones of the people of every heaven witness it. The fetched texts give no way to decide which wording of Ibn 'Abbas is the earlier, so both are reported as each book gives them.",
            "bn": "ইবন আব্বাস (রাঃ)-এর কথা দুটি কিতাবে দুই রকম শব্দে এসেছে। তাবারীর সনদে তিনি বলেন: আসমানের সব অধিবাসী, কুল্লু আহলিস সামা। ইবন কাসীর আওফীর সূত্রে ইবন আব্বাস (রাঃ) থেকে আনেন: প্রতিটি আসমানের নৈকট্যপ্রাপ্তরা তা প্রত্যক্ষ করে। তাবারীর তালিকায় দাহহাক দুটি কথাকে মিলিয়ে দেন: প্রতিটি আসমানের অধিবাসীদের মধ্যে যারা নৈকট্যপ্রাপ্ত, তারা তা প্রত্যক্ষ করে। ইবন আব্বাস (রাঃ)-এর কোন শব্দ আগের, সংগ্রহ করা লেখা থেকে তা বলার উপায় নেই। তাই প্রতিটি কিতাব যেভাবে দিয়েছে, সেভাবেই দুটি রাখা হলো।"
          },
          {
            "en": "The remaining commentators narrow or widen the circle in their own ways. Al-Baghawi says they are the angels who are in 'Illiyyin. The Muyassar says the near ones from among the angels of every heaven. Al-Qurtubi's first gloss is the near ones of every heaven from among the angels. So most of the fetched texts agree that the witnesses are angels, and they differ over which angels: those of each heaven, all the people of heaven, or those who dwell in 'Illiyyin itself.",
            "bn": "বাকি তাফসীরকারেরা বৃত্তটা নিজের মতো করে ছোট বা বড় করেন। বাগাভী বলেন, তারা ইল্লিয়্যীনে থাকা ফেরেশতা। মুয়াসসার বলে, প্রতিটি আসমানের ফেরেশতাদের মধ্যে যারা নৈকট্যপ্রাপ্ত। কুরতুবীর প্রথম ব্যাখ্যাও প্রায় তাই: ফেরেশতাদের মধ্যে প্রতিটি আসমানের নৈকট্যপ্রাপ্তরা। ফলে সংগ্রহ করা লেখাগুলোর বেশির ভাগ একমত যে সাক্ষীরা ফেরেশতা। মতভেদ শুধু কোন ফেরেশতা, তা নিয়ে: প্রতিটি আসমানের নৈকট্যপ্রাপ্তরা, আসমানের সব অধিবাসী, নাকি যারা খোদ ইল্লিয়্যীনে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Wider Company of Witnesses",
          "bn": "সাক্ষীদের আরও বড় দল"
        },
        "p": [
          {
            "en": "As-Sa'di widens the company further than anyone else in the fetched texts. Their inscribed book, he writes, is witnessed by those brought near from among the noble angels, and by the souls of the prophets, the siddiqun and the martyrs. He then adds a line about the righteous themselves: Allah raises the mention of them in al-mala' al-a'la, the highest assembly. In his reading the record is not only kept and seen; the people it belongs to are spoken of with honour where the near ones gather.",
            "bn": "সংগ্রহ করা লেখাগুলোর মধ্যে সাক্ষীদের দল সবচেয়ে বড় করেন সা'দী। তিনি লেখেন, তাদের লিখিত কিতাব প্রত্যক্ষ করে সম্মানিত ফেরেশতাদের মধ্যে যারা নৈকট্যপ্রাপ্ত তারা, আর নবী, সিদ্দীক ও শহীদদের রূহ। তারপর সৎলোকদের নিয়ে তিনি আরেকটি কথা যোগ করেন: আল্লাহ আল মালাউল আ'লা, অর্থাৎ ঊর্ধ্বজগতের সভায় তাদের নাম উঁচু করে উল্লেখ করেন। তাঁর পাঠে আমলনামা শুধু সংরক্ষিত আর দৃষ্ট নয়। যাদের আমলনামা, নৈকট্যপ্রাপ্তদের মজলিসে তাদের কথা সম্মানের সঙ্গে আলোচিত হয়।"
          },
          {
            "en": "Ma'arif's second reading, in which the near ones are righteous souls present in 'illiyyin, is supported there with a narration in Sahih Muslim from 'Abdullah ibn Mas'ud about the souls of the martyrs. The narration was confirmed in Muslim, but it is long, and it was given to explain a different verse, so it is not quoted in part here. No fetched commentary attaches a hadith to this verse itself. Ma'arif then moves into a long discussion of where souls abide after death, which it closes with: and Allah knows best.",
            "bn": "মাআরিফের দ্বিতীয় পাঠে নৈকট্যপ্রাপ্তরা হলেন ইল্লিয়্যীনে উপস্থিত সৎলোকদের রূহ। এর সমর্থনে মাআরিফ আনে সহীহ মুসলিমের এক বর্ণনা, আবদুল্লাহ ইবন মাসঊদ (রাঃ) থেকে, শহীদদের রূহ সম্পর্কে। বর্ণনাটি মুসলিমে মিলিয়ে দেখা হয়েছে। তবে তা দীর্ঘ, আর তা এসেছে অন্য এক আয়াতের ব্যাখ্যায়, তাই এখানে আংশিক উদ্ধৃতি দেওয়া হলো না। এই আয়াতের সঙ্গেই সরাসরি কোনো হাদীস সংগ্রহ করা কোনো তাফসীর জুড়ে দেয়নি। এরপর মাআরিফ মৃত্যুর পর রূহ কোথায় থাকে, তা নিয়ে দীর্ঘ আলোচনায় যায়, আর শেষ করে এ কথায়: আল্লাহই ভালো জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Wahb and Ibn Ishaq on Israfil",
          "bn": "ইসরাফীল প্রসঙ্গে ওয়াহব ও ইবন ইসহাক"
        },
        "p": [
          {
            "en": "After his first gloss, al-Qurtubi records a narrower reading: Wahb and Ibn Ishaq said that al-muqarrabun here is Israfil (AS). Their account runs as follows. When the believer does a righteous deed, the angels ascend with the scroll, and it has a light that gleams in the heavens like the light of the sun on the earth, until they bring it to Israfil, who seals it and writes. That, they say, is the meaning of yashhaduhu al-muqarrabun: he witnesses their writing.",
            "bn": "প্রথম ব্যাখ্যার পর কুরতুবী আরও সংকীর্ণ এক পাঠ উল্লেখ করেন। ওয়াহব ও ইবন ইসহাক বলেছেন, এখানে আল মুকাররাবূন মানে ইসরাফীল (আঃ)। তাঁদের বর্ণনা এরকম: মুমিন কোনো নেক আমল করলে ফেরেশতারা তার সহীফা নিয়ে উপরে ওঠে। আসমানগুলোতে তার এক আলো ঝলমল করে, যেমন জমিনে সূর্যের আলো। এভাবে তারা তা ইসরাফীল (আঃ)-এর কাছে পৌঁছে দেয়, আর তিনি তাতে মোহর দেন ও লেখেন। তাঁদের মতে ইয়াশহাদুহুল মুকাররাবূন কথার মানে এটাই: তিনি তাদের লেখা প্রত্যক্ষ করেন।"
          },
          {
            "en": "This needs to be held as it comes. In the fetched text it is the statement of Wahb and Ibn Ishaq, attributed to them and not to the Prophet ﷺ, and al-Qurtubi places it after the reading he gives first. It describes the unseen, so this article reports it as al-Qurtubi reports it and adds nothing to it. It also stands apart in its shape: it is the only gloss in the fetched texts that takes the plural al-muqarrabun to mean a single named angel.",
            "bn": "বর্ণনাটি যেভাবে এসেছে, সেভাবেই ধরে রাখা দরকার। সংগ্রহ করা লেখায় এটি ওয়াহব ও ইবন ইসহাকের কথা, তাঁদের নামেই বলা, নবী ﷺ-এর নামে নয়। কুরতুবীও এটিকে রেখেছেন নিজের প্রথম ব্যাখ্যার পরে। বিষয়টি গায়েবের, তাই এ লেখা কুরতুবী যেভাবে বলেছেন সেভাবেই জানাচ্ছে, নিজের থেকে কিছু যোগ করছে না। গঠনের দিক থেকেও এটি আলাদা। আল মুকাররাবূন শব্দটি বহুবচন, অথচ সংগ্রহ করা লেখাগুলোর মধ্যে একমাত্র এই ব্যাখ্যাই একে একজন নির্দিষ্ট ফেরেশতা বলে বুঝেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds Nobody Here Noticed",
          "bn": "যে আমল এখানে কারও চোখে পড়েনি"
        },
        "p": [
          {
            "en": "Laid side by side, the fetched commentaries differ on the verb, on the pronoun and on who the near ones are, yet they share a single feature: none of them places the witnesses among the people on earth. The angels of every heaven, all the people of heaven, the angels in 'Illiyyin, the souls of prophets and martyrs, Israfil (AS) in the report of Wahb and Ibn Ishaq: every gloss looks upward and near. The verse speaks of the record of the righteous and of who witnesses it, and says nothing of who on earth saw their deeds.",
            "bn": "সংগ্রহ করা তাফসীরগুলো পাশাপাশি রাখলে দেখা যায়, ক্রিয়ার অর্থে, ‘হু’-এর লক্ষ্যে আর নৈকট্যপ্রাপ্তদের পরিচয়ে তাদের মতভেদ আছে। তবু একটি কথায় সবাই এক: তাঁদের কেউ সাক্ষীদের দুনিয়ার মানুষের মধ্যে রাখেননি। প্রতিটি আসমানের ফেরেশতা, আসমানের সব অধিবাসী, ইল্লিয়্যীনের ফেরেশতা, নবী ও শহীদদের রূহ, ওয়াহব ও ইবন ইসহাকের বর্ণনায় ইসরাফীল (আঃ)। প্রতিটি ব্যাখ্যার দৃষ্টি উপরের দিকে, নৈকট্যের দিকে। আয়াত বলে সৎলোকদের আমলনামার কথা আর কারা তা প্রত্যক্ষ করে তার কথা। দুনিয়ায় কে তাদের আমল দেখেছে, সে নিয়ে কিছুই বলে না।"
          },
          {
            "en": "That is where the verse meets an ordinary day. Much of what a believer does is seen by no person at all: a prayer in the night, charity given without a name attached, patience that nobody learned about. If, as at-Tabari puts it, the record of the righteous carries Allah's guarantee of safety from the Fire and of winning the Garden, then the worth of such a deed does not wait on an audience. In the verse, those brought near attend the register, and the crowd is simply not mentioned.",
            "bn": "এখানেই আয়াতটি আমাদের সাধারণ দিনের সঙ্গে এসে মেলে। মুমিনের অনেক আমল কোনো মানুষই দেখে না। রাতের নামাজ, নাম না জানিয়ে দেওয়া সদকা, এমন সবর যার খবর কেউ পায়নি। তাবারী যেমন বলেন, সৎলোকের আমলনামায় যদি লেখা থাকে জাহান্নাম থেকে আল্লাহর দেওয়া নিরাপত্তা আর জান্নাত লাভের কথা, তবে এমন আমলের মূল্য দর্শকের অপেক্ষায় বসে থাকে না। আয়াতে খাতার কাছে হাজির থাকে নৈকট্যপ্রাপ্তরা। ভিড়ের কথা সেখানে আসেইনি।"
          },
          {
            "en": "As-Sa'di's reading adds a quiet honour to the record: Allah raises the mention of the righteous in the highest assembly. On that reading, a servant whose good is unnoticed in this world is spoken of where the near ones gather. The word al-muqarrabun returns at 83:28, in the passage that follows this verse, and that verse has its own reflection. Here it is enough to hold what these two words give: the register of the righteous is not left unattended.",
            "bn": "সা'দীর পাঠ আমলনামার সঙ্গে এক নীরব সম্মানও যোগ করে: আল্লাহ ঊর্ধ্বজগতের সভায় সৎলোকদের নাম উঁচু করে উল্লেখ করেন। সেই পাঠ অনুযায়ী, যে বান্দার ভালো কাজ দুনিয়ায় কারও চোখে পড়ে না, নৈকট্যপ্রাপ্তদের মজলিসে তার কথা ওঠে। আল মুকাররাবূন শব্দটি আবার আসে ৮৩:২৮ আয়াতে, এই আয়াতের পরের অংশে। সে আয়াতের ভাবনা আলাদা। এখানে এই দুটি শব্দ যা দেয়, তা ধরে রাখাই যথেষ্ট: সৎলোকদের খাতা কখনো অপ্রত্যক্ষ পড়ে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope Without a Verdict",
          "bn": "রায় নয়, আশা"
        },
        "p": [
          {
            "en": "The verse describes what the text describes: a register of the righteous, kept high and witnessed by those brought near, set against the register of the wicked earlier in the surah. It hands nobody the knowledge of whose record lies where. It licenses nothing against any living person or community, as if a believer could point at a neighbour and assign him to Sijjin, and it gives nobody the right to claim 'Illiyyin for himself either. Those brought near see the register; the rest of us do not.",
            "bn": "আয়াতটি তা-ই বর্ণনা করে, যা তার ভাষায় আছে: সৎলোকদের আমলনামা, উঁচুতে রাখা, নৈকট্যপ্রাপ্তরা যার সাক্ষী। সূরার আগের অংশে পাপাচারীদের আমলনামার বিপরীতে তা দাঁড়িয়ে আছে। কার আমলনামা কোথায়, সে জ্ঞান আয়াত কাউকে দেয় না। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। প্রতিবেশীর দিকে আঙুল তুলে তাকে সিজ্জীনে পাঠিয়ে দেওয়ার অধিকার কারও নেই। নিজের জন্য ইল্লিয়্যীন দাবি করার অধিকারও নেই। খাতা দেখে নৈকট্যপ্রাপ্তরা, আমরা দেখি না।"
          },
          {
            "en": "What the verse leaves the reader with is work and hope held together. The Muyassar calls the book of the righteous written and settled, with nothing added and nothing taken away. While a life is still being lived, the deeds that go into it are still within reach. A deed done for Allah alone, with nobody watching, is the kind of entry this passage invites the reader to want, so that the record it belongs to may be among those the near ones witness.",
            "bn": "আয়াতটি পাঠকের হাতে তুলে দেয় আমল আর আশা, দুটো একসঙ্গে। মুয়াসসার বলে, সৎলোকদের কিতাব লেখা হয়ে চূড়ান্ত, তাতে কিছু যোগও হয় না, কিছু কমেও না। জীবন যতক্ষণ চলছে, তাতে কোন আমল যাবে তা এখনো মানুষের নাগালে। কেউ দেখছে না এমন সময়ে শুধু আল্লাহর জন্য করা কাজ, এই অংশটি পাঠককে এমন লেখাই কামনা করতে ডাকে। যাতে যে খাতায় তা ওঠে, সেটি হয় সেই খাতাগুলোর একটি, যা নৈকট্যপ্রাপ্তরা প্রত্যক্ষ করে।"
          }
        ]
      }
    ]
  },
  "83:25": {
    "sections": [
      {
        "h": {
          "en": "Four Words of Drink",
          "bn": "পানীয়ের চার শব্দ"
        },
        "p": [
          {
            "en": "The passage on the righteous has been building verse by verse. In 83:22 they are in na'im, delight; in 83:23 they sit on adorned couches, looking; in 83:24 the listener is told he would recognise the radiance of that delight in their faces. Then comes 83:25: yusqawna min rahiqin makhtum, they are given to drink of a sealed rahiq. In the Arabic it is four words. The al-Muyassar commentary, which explains 83:23 to 83:28 as one passage, sets the drink among the delights of the people of truthfulness and obedience in the Garden.",
            "bn": "নেককারদের বর্ণনা আয়াতে আয়াতে জমে উঠছিল। ৮৩:২২ আয়াতে তারা নাঈমে, অর্থাৎ নিয়ামতের আনন্দে। ৮৩:২৩ আয়াতে তারা সাজানো আসনে বসে দেখছে। ৮৩:২৪ আয়াতে শ্রোতাকে বলা হয়, তাদের মুখে সেই আনন্দের উজ্জ্বলতা তুমি চিনে নেবে। তারপর ৮৩:২৫: ইউসকাওনা মিন রাহীকিম মাখতূম, তাদের পান করানো হবে সীল-আঁটা রাহীক। আরবিতে মোট চারটি শব্দ। মুয়াসসার ৮৩:২৩ থেকে ৮৩:২৮ পর্যন্ত আয়াতগুলো একসঙ্গে ব্যাখ্যা করেছে। সেখানে এই পানীয় জান্নাতে সত্যনিষ্ঠ ও আনুগত্যশীল মানুষদের নিয়ামতগুলোর একটি।"
          },
          {
            "en": "The verb comes first, and it is passive: yusqawna, they are given to drink. The verse does not say that they drink; it says they are made to drink, and it leaves the one who serves them unnamed. The drink itself is described in two words only, a noun and the word that qualifies it: rahiq, and makhtum. Everything this article reports hangs on those two words, and the commentators fetched for this verse do not gloss them alike. The sections that follow set their glosses side by side and choose none of them.",
            "bn": "বাক্যের শুরুতেই ক্রিয়া: ইউসকাওনা, তাদের পান করানো হবে। আয়াত বলছে না যে তারা পান করবে। বলছে, তাদের পান করানো হবে, আর কে পান করাবেন তাঁর নাম উহ্য রাখা হয়েছে। পানীয়ের বর্ণনায় শব্দ মাত্র দুটি: একটি বিশেষ্য, আরেকটি তার বিশেষণ। রাহীক আর মাখতূম। এ লেখার সব কথা এই দুই শব্দকে ঘিরে। এ আয়াতের জন্য যেসব তাফসীর পড়া হয়েছে, সেগুলো শব্দ দুটির অর্থ একভাবে করেনি। সামনের অংশগুলোতে তাদের ব্যাখ্যা পাশাপাশি রাখা হলো, কোনোটিকে বেছে নেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Wine Carries",
          "bn": "মদের এক নাম"
        },
        "p": [
          {
            "en": "Ibn Kathir glosses the verse plainly: they will be given to drink of a wine of the Garden. Then he defines the word. Ar-rahiq, he says, is one of the names of wine, and he lists those who said so: Ibn Mas'ud, Ibn 'Abbas, Mujahid, al-Hasan, Qatada and Ibn Zayd. The abridged English Ibn Kathir carries the same gloss and the same six names. For him, then, rahiq is not a vague word for something pleasant; it is a known name, and the verse uses it of the drink of Paradise.",
            "bn": "ইবন কাসীর আয়াতের অর্থ সোজা কথায় বলেন: তাদের পান করানো হবে জান্নাতের মদ। তারপর শব্দটির সংজ্ঞা দেন। তাঁর মতে আর-রাহীক মদের নামগুলোর একটি। কারা এ কথা বলেছেন, তাও জানান: ইবন মাসঊদ (রাঃ), ইবন আব্বাস (রাঃ), মুজাহিদ, হাসান, কাতাদা ও ইবন যায়দ। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও একই ব্যাখ্যা, একই ছয়টি নাম। অর্থাৎ তাঁর কাছে রাহীক ভালো কোনো কিছুর অস্পষ্ট নাম নয়। এটি পরিচিত একটি নাম, আর আয়াত সেটি ব্যবহার করেছে জান্নাতের পানীয়ের জন্য।"
          },
          {
            "en": "Two more commentators keep the same sense and add a quality to it. Al-Muyassar renders the phrase as a wine that is pure, safiya. Al-Baghawi calls it a wine pure and good, safiya tayyiba, and then reports Muqatil's narrower gloss: the white wine. So three of the commentators fetched for this verse name the drink as wine and qualify it, each in his own words, by its purity. None of them, in what was fetched here, says more about its nature than that.",
            "bn": "আরও দুজন তাফসীরকার একই অর্থ রেখে তার সঙ্গে একটি গুণ জুড়ে দেন। মুয়াসসার বাক্যাংশটির অর্থ করেছে খাঁটি মদ, খমর সাফিয়া। বাগাভী বলেন খাঁটি ও উত্তম মদ, সাফিয়া তাইয়িবা। তারপর মুকাতিলের আরও নির্দিষ্ট ব্যাখ্যা উল্লেখ করেন: সাদা মদ। তাহলে এ আয়াতের জন্য পড়া তাফসীরগুলোর তিনটি পানীয়টিকে মদ বলেছে, আর প্রত্যেকে নিজের ভাষায় তার খাঁটিত্বের কথা বলেছে। এখানে যা পড়া হয়েছে, তাতে এর বেশি কিছু তারা বলেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Mixed Into It",
          "bn": "যাতে কোনো ভেজাল নেই"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens with a gloss that does not use the word wine at all. Rahiq, he says, is a drink in which there is no ghishsh, no adulteration, and he credits this to al-Akhfash and az-Zajjaj. Then, under the words it was said, comes the gloss the others gave: pure wine. He adds the dictionary al-Sihah, which defines rahiq as the safwa of wine, its clearest and choicest part. After these three he remarks that the meaning is one. The glosses differ in wording, but in his view they point the same way.",
            "bn": "কুরতুবী শুরু করেন এমন এক ব্যাখ্যা দিয়ে, যেখানে মদ শব্দটিই নেই। তাঁর ভাষায় রাহীক এমন পানীয়, যাতে কোনো গিশ, অর্থাৎ ভেজাল নেই। এ ব্যাখ্যা তিনি আখফাশ ও যাজ্জাজের নামে উল্লেখ করেন। তারপর 'বলা হয়েছে' কথাটি দিয়ে আনেন অন্যদের দেওয়া অর্থ: খাঁটি মদ। এরপর আস-সিহাহ অভিধানের সংজ্ঞা যোগ করেন। সেখানে রাহীক মানে মদের সাফওয়া, তার সবচেয়ে স্বচ্ছ ও বাছাই করা অংশ। এই তিনটি উল্লেখ করে তিনি বলেন, অর্থ একটাই। শব্দ আলাদা, কিন্তু তাঁর মতে সবগুলো একই দিকে ইঙ্গিত করে।"
          },
          {
            "en": "Two further glosses follow in al-Qurtubi. Al-Khalil defines rahiq as the utmost of wine and its finest. Muqatil and others describe it as wine that is aged, white, pure of adulteration and luminous. Al-Qurtubi then quotes a line by Hassan and a line by another poet in which the word rahiq appears, showing it in use in Arabic verse. As-Sa'di, briefer still, does not name wine: rahiq, he says, is among the most pleasant of drinks there can be, and the most delicious.",
            "bn": "কুরতুবীর আলোচনায় আরও দুটি ব্যাখ্যা আসে। খলীলের সংজ্ঞায় রাহীক মানে মদের সর্বোচ্চ স্তর, তার সবচেয়ে উৎকৃষ্ট অংশ। মুকাতিল ও আরও কয়েকজন একে বর্ণনা করেন পুরোনো, সাদা, ভেজালমুক্ত আর উজ্জ্বল মদ হিসেবে। এরপর কুরতুবী হাসসানের একটি পঙ্‌ক্তি আর আরেক কবির একটি পঙ্‌ক্তি উদ্ধৃত করেন, যেখানে রাহীক শব্দটি আছে। আরবি কবিতায় শব্দটি কীভাবে চলত, তা এতে দেখা যায়। সা'দী আরও সংক্ষেপে বলেন, আর তিনিও মদের নাম নেন না। তাঁর মতে রাহীক এমন পানীয়, যা সম্ভাব্য সব পানীয়ের মধ্যে সবচেয়ে উত্তম ও সুস্বাদুগুলোর একটি।"
          },
          {
            "en": "Set side by side, the glosses for rahiq gather around a few ideas without collapsing into one. Some name it as wine of Paradise (Ibn Kathir and those he cites). Some stress that nothing is mixed into it (al-Akhfash and az-Zajjaj). Some call it the choicest or finest part (al-Sihah, al-Khalil). Some describe its colour and age (Muqatil). As-Sa'di speaks only of its pleasure. This article holds all of them as given and does not pick one as the meaning.",
            "bn": "রাহীকের ব্যাখ্যাগুলো পাশাপাশি রাখলে দেখা যায়, সেগুলো কয়েকটি ধারণার চারপাশে জড়ো হয়, তবে একটিতে মিশে যায় না। কেউ একে বলেন জান্নাতের মদ: ইবন কাসীর ও তিনি যাঁদের নাম নিয়েছেন। কেউ জোর দেন এতে কিছু মেশানো নেই, এ কথায়: আখফাশ ও যাজ্জাজ। কেউ বলেন এটি সবচেয়ে বাছাই করা বা উৎকৃষ্ট অংশ: আস-সিহাহ ও খলীল। কেউ এর রং আর বয়সের বর্ণনা দেন: মুকাতিল। সা'দী শুধু এর স্বাদের কথা বলেন। এ লেখা সবগুলোকে যেমন পাওয়া গেছে তেমন রাখছে, কোনোটিকে একমাত্র অর্থ হিসেবে বেছে নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Kept From Every Hand",
          "bn": "কোনো হাত ছোঁয়নি"
        },
        "p": [
          {
            "en": "The second word, makhtum, is where the commentators part more sharply. Al-Baghawi reads it as a literal seal and gives it a purpose: the drink has been sealed and kept from being touched by any hand until the righteous themselves break its seal. He then reports Mujahid's gloss, mutayyan, closed over with clay. On this reading the seal is the sign that nothing has reached the drink before them, and the first hand to open it is theirs.",
            "bn": "দ্বিতীয় শব্দ মাখতূম নিয়ে তাফসীরকারদের মতভেদ আরও স্পষ্ট। বাগাভী শব্দটিকে আক্ষরিক সীল হিসেবে পড়েন, আর তার একটি উদ্দেশ্যও বলেন। পানীয়টি সীল করা হয়েছে, কোনো হাত যেন তা ছুঁতে না পারে, যতক্ষণ না নেককাররা নিজেরাই সীল খোলে। এরপর তিনি মুজাহিদের ব্যাখ্যা উল্লেখ করেন: মুতাইয়ান, মাটি দিয়ে মুখ বন্ধ করা। এই পাঠে সীল জানিয়ে দেয় যে তাদের আগে কিছুই পানীয়টির কাছে পৌঁছায়নি। প্রথম যে হাত তা খুলবে, সে হাত তাদেরই।"
          },
          {
            "en": "Al-Muyassar puts the seal on the container: the drink is a pure wine whose vessel is made fast, muhkam ina'uha. Here makhtum describes something closed securely rather than something stamped. The portions of al-Qurtubi and as-Sa'di fetched for this verse stop at the word makhtum itself, and the Arabic Ibn Kathir on this verse gives no separate gloss for it, so this article reports none from them. What the next verse says of its khitam belongs to 83:26.",
            "bn": "মুয়াসসার সীলটি রাখে পাত্রের উপর। তার ভাষায় পানীয়টি এমন খাঁটি মদ, যার পাত্র শক্ত করে আটকানো, মুহকাম ইনাউহা। এখানে মাখতূম মানে ছাপ মারা নয়, বরং নিরাপদে বন্ধ রাখা। কুরতুবী ও সা'দীর যে অংশ এ আয়াতের জন্য পড়া হয়েছে, তা মাখতূম শব্দে এসেই থেমে গেছে। আর ইবন কাসীরের আরবি তাফসীরে এ আয়াতে শব্দটির আলাদা ব্যাখ্যা নেই। তাই তাঁদের পক্ষ থেকে এখানে কিছু বলা হলো না। এর খিতাম সম্পর্কে পরের আয়াত যা বলে, সে আলোচনা ৮৩:২৬ আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "Seal, Mixture, or Final Note",
          "bn": "সীল, মিশ্রণ, নাকি শেষ স্বাদ"
        },
        "p": [
          {
            "en": "At-Tabari takes makhtum together with the opening of the next verse and says plainly that the people of interpretation differed over it. Through Masruq he reports Ibn Mas'ud glossing makhtum as mamzuj, mixed. Through Mujahid he reports mutayyan, closed over with clay, the same word al-Baghawi cites. And from Ibn Zayd he reports a contrast between two worlds: its seal with Allah is musk, while its seal today, in this world, is clay. Three readings of one word sit in his record together.",
            "bn": "তাবারী মাখতূম শব্দটিকে পরের আয়াতের শুরুর সঙ্গে মিলিয়ে পড়েন, আর স্পষ্ট বলেন যে তাফসীরকারেরা এ নিয়ে মতভেদ করেছেন। মাসরূকের সূত্রে তিনি ইবন মাসঊদ (রাঃ)-এর ব্যাখ্যা আনেন: মাখতূম মানে মামযূজ, মেশানো। মুজাহিদের সূত্রে আনেন মুতাইয়ান, মাটি দিয়ে মুখ বন্ধ করা, বাগাভীও এই শব্দই উল্লেখ করেছেন। আর ইবন যায়দ থেকে আনেন দুই জগতের তুলনা: আল্লাহর কাছে এর সীল মিশক, আর আজ দুনিয়ায় এর সীল মাটি। একটি শব্দের তিনটি পাঠ তাঁর বর্ণনায় পাশাপাশি জায়গা পেয়েছে।"
          },
          {
            "en": "At-Tabari then gives his own preference and his reason. In the speech of the Arabs, he says, khatm has no sense except stamping and finishing, as when it is said that a man sealed the Qur'an on reaching its end. He sees no sense in stamping a seal on the drink of the people of Paradise if their drink flows as water flows in rivers and is not aged in jars that are clayed over and sealed. So he takes the word towards the end, the last of the drink. Khatm in the sense of mixing, he adds, he does not know to be heard in Arab speech.",
            "bn": "এরপর তাবারী নিজের পছন্দ ও তার কারণ জানান। তিনি বলেন, আরবদের ভাষায় খাতম শব্দের দুটি অর্থই আছে: ছাপ মারা আর শেষ করা। যেমন কেউ কুরআনের শেষ পর্যন্ত পড়লে বলা হয়, সে কুরআন খতম করেছে। জান্নাতবাসীর পানীয় যদি নদীর পানির মতো বয়ে চলে, আর মাটি লেপে সীল আঁটা কলসিতে রেখে পুরোনো করা না হয়, তবে তাতে সীলের ছাপ মারার কোনো অর্থ তিনি দেখেন না। তাই তিনি শব্দটিকে নেন শেষ অর্থে, পানীয়ের শেষাংশ। তিনি আরও বলেন, খাতম মানে মেশানো, আরবদের কথায় এমন ব্যবহার তাঁর জানা নেই।"
          },
          {
            "en": "This is a genuine disagreement, and it is kept as such here. Al-Baghawi, with Mujahid, reads a seal left whole until the righteous break it. At-Tabari reads the word towards the drink's final draught, and argues against the literal seal. Ibn Mas'ud, in at-Tabari's chain, reads mixing, which at-Tabari does not accept. The article takes no side. What the next verse adds about the khitam, and the musk the commentators bring with it, is left for 83:26.",
            "bn": "এটি সত্যিকারের মতভেদ, আর এখানে তা মতভেদ হিসেবেই রাখা হলো। বাগাভী, মুজাহিদের সঙ্গে মিলে, পড়েন এমন সীল যা নেককাররা ভাঙা পর্যন্ত অটুট থাকে। তাবারী শব্দটিকে নেন পানীয়ের শেষ চুমুকের দিকে, আর আক্ষরিক সীলের বিপক্ষে যুক্তি দেন। তাবারীর সূত্রে ইবন মাসঊদ (রাঃ) পড়েন মিশ্রণ, যা তাবারী গ্রহণ করেননি। এ লেখা কোনো পক্ষ নিচ্ছে না। খিতাম নিয়ে পরের আয়াত যা যোগ করে, আর তাফসীরকারেরা তার সঙ্গে যে মিশকের কথা আনেন, তা ৮৩:২৬ আয়াতের জন্য রাখা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration on Thirst",
          "bn": "তৃষ্ণা নিয়ে এক বর্ণনা"
        },
        "p": [
          {
            "en": "No sound hadith is attached to this verse in the commentaries fetched for it. Ibn Kathir does cite one narration under it, from Imam Ahmad, through 'Atiyya al-'Awfi from Abu Sa'id al-Khudri (RA), and the narrator in Ahmad's chain hesitates over its source: I think he traced it back to the Prophet ﷺ. The same narration, through 'Atiyya from Abu Sa'id, is in al-Tirmidhi, and it is given below whole, in al-Tirmidhi's wording, with his own grading after it.",
            "bn": "এ আয়াতের জন্য পড়া তাফসীরগুলোতে আয়াতটির সঙ্গে যুক্ত কোনো সহীহ হাদীস নেই। ইবন কাসীর অবশ্য এ আয়াতের নিচে একটি বর্ণনা এনেছেন, ইমাম আহমাদ থেকে, আতিয়্যা আল-আওফীর মাধ্যমে আবূ সাঈদ খুদরী (রাঃ) থেকে। আহমাদের সনদের বর্ণনাকারী এর উৎস নিয়ে দ্বিধা প্রকাশ করেছেন: আমার ধারণা, তিনি একে নবী ﷺ পর্যন্ত পৌঁছে দিয়েছেন। একই বর্ণনা আতিয়্যার মাধ্যমে আবূ সাঈদ থেকে তিরমিযীতেও আছে। নিচে তা পুরোটা দেওয়া হলো, তিরমিযীর ভাষায়, তারপর তাঁর নিজের মূল্যায়ন।"
          },
          {
            "en": "Al-Tirmidhi (2449) records that the Messenger of Allah ﷺ said: \"Whichever believer feeds a hungry believer, Allah feeds him from the fruits of Paradise on the Day of Resurrection. Whichever believer gives drink to a thirsty believer, Allah gives him to drink from the 'sealed nectar' on the Day of Resurrection. Whichever believer clothes a naked believer, Allah clothes him from the green garments of Paradise.\" The phrase rendered sealed nectar is, in the Arabic, al-rahiq al-makhtum, the two words of this verse.",
            "bn": "তিরমিযী (২৪৪৯) বর্ণনা করেছেন, রাসূলুল্লাহ ﷺ বলেছেন: \"যে মুমিন কোনো ক্ষুধার্ত মুমিনকে খাওয়ায়, কিয়ামতের দিন আল্লাহ তাকে জান্নাতের ফল খাওয়াবেন। যে মুমিন কোনো তৃষ্ণার্ত মুমিনকে পান করায়, কিয়ামতের দিন আল্লাহ তাকে সীল-আঁটা রাহীক পান করাবেন। আর যে মুমিন কোনো বস্ত্রহীন মুমিনকে কাপড় পরায়, আল্লাহ তাকে জান্নাতের সবুজ পোশাক পরাবেন।\" আরবিতে এখানে যে শব্দবন্ধ আছে তা আর-রাহীকুল মাখতূম, এ আয়াতেরই দুটি শব্দ।"
          },
          {
            "en": "Al-Tirmidhi's grading must be reported as he gave it. He calls the hadith gharib, and he adds that it has also been narrated from 'Atiyya from Abu Sa'id as mawquf, stopping at Abu Sa'id rather than reaching the Prophet ﷺ, and that this is more correct in his view and more likely. So the collector himself prefers the version that is Abu Sa'id's own saying. The article reports the narration for that reason and builds nothing on it as a word of the Prophet ﷺ.",
            "bn": "তিরমিযীর মূল্যায়ন তিনি যেভাবে দিয়েছেন, ঠিক সেভাবেই জানাতে হবে। তিনি হাদীসটিকে গরীব বলেছেন। সঙ্গে যোগ করেছেন, এটি আতিয়্যার মাধ্যমে আবূ সাঈদ থেকে মাওকূফ হিসেবেও বর্ণিত হয়েছে, অর্থাৎ নবী ﷺ পর্যন্ত না পৌঁছে আবূ সাঈদেই থেমে গেছে। আর তাঁর মতে সেটিই বেশি সঠিক ও বেশি সম্ভাব্য। অর্থাৎ সংকলক নিজেই সেই রূপটিকে অগ্রাধিকার দেন, যেখানে কথাটি আবূ সাঈদের নিজের। তাই এ লেখা বর্ণনাটি উল্লেখ করছে ঠিক এই মূল্যায়নসহ, আর একে নবী ﷺ-এর বাণী ধরে এর উপর কিছু দাঁড় করাচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Silences Around the Drink",
          "bn": "পানীয় নিয়ে যা অনুক্ত"
        },
        "p": [
          {
            "en": "Some things are absent from the commentaries fetched for this verse, and the article does not supply them. None of them, on this verse, compares the drink of Paradise with any drink of this world, and none describes its effects on those who drink it. None cites another verse on the drinks of Paradise in explaining this verse, so no such verse is linked here. Ma'arif al-Qur'an, whose commentary covers 83:21 to 83:25 together, spends its length on the abode of souls and says nothing of the drink.",
            "bn": "এ আয়াতের জন্য পড়া তাফসীরগুলোতে কিছু বিষয় নেই, আর এ লেখাও সেগুলো নিজে থেকে যোগ করছে না। এ আয়াতের আলোচনায় তাদের কেউ জান্নাতের পানীয়কে দুনিয়ার কোনো পানীয়ের সঙ্গে তুলনা করেননি। যারা পান করবে তাদের উপর এর কী প্রভাব, তাও কেউ বর্ণনা করেননি। এ আয়াত ব্যাখ্যায় কেউ জান্নাতের পানীয় নিয়ে অন্য কোনো আয়াত উল্লেখ করেননি, তাই এখানেও তেমন আয়াত জোড়া হলো না। মাআরিফুল কুরআন ৮৩:২১ থেকে ৮৩:২৫ পর্যন্ত একসঙ্গে আলোচনা করেছে। তার পুরো জায়গা জুড়ে আছে রূহের অবস্থানের প্রশ্ন, পানীয় নিয়ে সেখানে কোনো কথা নেই।"
          },
          {
            "en": "The passage also runs on past this verse, and its later details are not taken up here. 83:26, the verse that follows, has its own words about the drink and its own call. What is mixed into the drink, and the spring it comes from, are the subject of 83:27 and 83:28. Al-Muyassar's single summary of 83:23 to 83:28 shows how closely these verses belong together, but each of them has its own words to weigh, and this article keeps to the four in front of it.",
            "bn": "অংশটি এ আয়াতের পরেও এগিয়ে চলে, তবে পরের বিবরণগুলো এখানে ধরা হলো না। পরের আয়াত ৮৩:২৬, পানীয় নিয়ে তার নিজের কথা আছে, নিজের আহ্বানও আছে। পানীয়ে কী মেশানো হবে, আর তা কোন ঝরনা থেকে আসে, সে বিষয় ৮৩:২৭ ও ৮৩:২৮ আয়াতের। মুয়াসসার ৮৩:২৩ থেকে ৮৩:২৮ পর্যন্ত এক টানা সারসংক্ষেপ দিয়েছে। তাতে বোঝা যায় আয়াতগুলো কতটা ঘনিষ্ঠভাবে জড়ানো। তবু প্রতিটি আয়াতের নিজের শব্দ আছে, যা আলাদা করে ভাবার মতো। এ লেখা তাই সামনের চারটি শব্দেই থাকছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Served, and Kept Waiting",
          "bn": "তোলা আছে যাদের জন্য"
        },
        "p": [
          {
            "en": "The verse can be read slowly, word by word, as the commentators read it. Yusqawna: the righteous do not fetch their drink; it is brought to them. Rahiq: whichever gloss is followed, the commentators fetched here describe it by purity, by choiceness, by pleasure. Makhtum: on al-Baghawi's reading, it waits sealed until the righteous open it, untouched by any other hand. The reflection drawn here is the reader's own, not a claim of the commentators: what is waiting is being kept for someone.",
            "bn": "আয়াতটি ধীরে ধীরে, শব্দ ধরে ধরে পড়া যায়, যেভাবে তাফসীরকারেরা পড়েছেন। ইউসকাওনা: নেককারদের নিজে গিয়ে পানীয় আনতে হবে না, তাদের কাছে এনে দেওয়া হবে। রাহীক: যে ব্যাখ্যাই মানা হোক, এখানে পড়া তাফসীরকারেরা একে বর্ণনা করেছেন খাঁটিত্ব, উৎকর্ষ আর তৃপ্তি দিয়ে। মাখতূম: বাগাভীর পাঠে এটি সীল-আঁটা অবস্থায় অপেক্ষা করে, যতক্ষণ না নেককাররা খোলে, আর অন্য কোনো হাত তা ছোঁয় না। এখান থেকে যে ভাবনা আসে তা পাঠকের নিজের, তাফসীরকারদের দাবি নয়: যা অপেক্ষা করছে, তা কারও জন্য তুলে রাখা।"
          },
          {
            "en": "The same surah warned at 83:14 that what people earned had covered their hearts like rust. Read beside that warning, this verse describes a drink with nothing mixed into it, given to those whose record the surah has just placed high. The surah does not make that comparison itself; the reader may. The practical question is simple. A gift kept sealed is kept for the people it was meant for. The verse that follows, 83:26, turns from describing the drink to asking who will strive for it.",
            "bn": "এই সূরাই ৮৩:১৪ আয়াতে সতর্ক করেছে, মানুষের অর্জিত কাজ মরিচার মতো তাদের অন্তর ঢেকে ফেলেছে। সেই সতর্কবাণীর পাশে রেখে পড়লে এ আয়াত এমন পানীয়ের কথা বলে, যাতে কিছুই মেশানো নেই। তা দেওয়া হবে তাদের, যাদের আমলনামা সূরাটি একটু আগেই উঁচু জায়গায় রেখেছে। এ তুলনা সূরা নিজে করেনি, পাঠক করতে পারেন। আমলের প্রশ্নটা সোজা। সীল-আঁটা উপহার তোলা থাকে তাদেরই জন্য, যাদের জন্য তা রাখা হয়েছে। পরের আয়াত ৮৩:২৬ পানীয়ের বর্ণনা থেকে সরে গিয়ে জিজ্ঞেস করে, এর জন্য কারা চেষ্টা করবে।"
          }
        ]
      }
    ]
  },
  "83:34": {
    "sections": [
      {
        "h": {
          "en": "The Same Verb, Reversed",
          "bn": "একই ক্রিয়া, উল্টো দিকে"
        },
        "p": [
          {
            "en": "Fa-l-yawma alladhina amanu mina al-kuffari yadhakun: so today those who believed are laughing at the disbelievers. In the Arabic the verse is six words, and its first word opens with fa, so, which ties it to what came before. It does not begin a new subject. It answers the five verses before it, 83:29 to 83:33, where those who committed crimes used to laugh at the believers, winked at each other when they passed them, went home to their people jesting, and said of them that they were surely astray.",
            "bn": "ফাল-ইয়াওমা আল্লাযীনা আমানূ মিনাল কুফফারি ইয়াদহাকূন: তাই আজ যারা ঈমান এনেছিল, তারা কাফিরদের দেখে হাসছে। আরবিতে আয়াতটি ছয়টি শব্দের। প্রথম শব্দটি শুরু হয় 'ফা' দিয়ে, যার অর্থ 'তাই'। এই ছোট্ট অক্ষরটি আয়াতকে আগের কথার সঙ্গে বেঁধে দেয়, নতুন কোনো প্রসঙ্গ খোলে না। আগের পাঁচ আয়াতে, ৮৩:২৯ থেকে ৮৩:৩৩ পর্যন্ত, অপরাধীরা মু’মিনদের নিয়ে হাসত। পাশ দিয়ে যাওয়ার সময় একে অন্যকে চোখ টিপত, আপনজনদের কাছে ফিরত রসিকতা করতে করতে, আর মু’মিনদের সম্পর্কে বলত, এরা নিশ্চয়ই পথভ্রষ্ট। এ আয়াত সেই সবকিছুর জবাব।"
          },
          {
            "en": "Set the two verses side by side. 83:29 is eight words and ends on the same word as this one, yadhakun, they laugh. There the verb is held by kanu, they used to: a habit of the world. Here it stands beside al-yawm, today. In 83:29 those who committed crimes laugh mina alladhina amanu, at those who believed; in 83:34 those who believed laugh mina al-kuffar, at the disbelievers. The verb and its little preposition min stay; the two parties change places. The commentators read that exchange in several ways, and the sections below keep them side by side.",
            "bn": "দুটি আয়াত পাশাপাশি রাখুন। ৮৩:২৯ আটটি শব্দের, আর তা শেষ হয় এ আয়াতের শেষ শব্দটিতেই: ইয়াদহাকূন, তারা হাসে। সেখানে ক্রিয়াটির আগে আছে 'কানূ', অর্থাৎ তারা হাসত। ওটা ছিল দুনিয়ার অভ্যাস। এখানে তার পাশে দাঁড়িয়ে আছে 'আল-ইয়াওম', আজ। ৮৩:২৯ আয়াতে অপরাধীরা হাসে 'মিনাল্লাযীনা আমানূ', মু’মিনদের নিয়ে। আর ৮৩:৩৪ আয়াতে মু’মিনরা হাসে 'মিনাল কুফফার', কাফিরদের নিয়ে। ক্রিয়াটি একই থাকে, 'মিন' অব্যয়টিও থাকে। শুধু দুই পক্ষ জায়গা বদল করে। এই বদলকে মুফাসসিরগণ কয়েকভাবে পড়েছেন। নিচের অংশগুলো সেসব পাঠ পাশাপাশি রাখবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Day Is Meant",
          "bn": "কোন দিনের কথা"
        },
        "p": [
          {
            "en": "Most of the fetched commentaries give al-yawm a single gloss: the Day of Resurrection. Ibn Kathir writes fa-l-yawm ya'ni yawm al-qiyama, today means the Day of Resurrection, and his abridged English rendering has the Day of Judgement. At-Tabari says wa dhalika yawm al-qiyama, and that is the Day of Resurrection. Al-Qurtubi makes the pointing explicit: ya'ni hadha al-yawm alladhi huwa yawm al-qiyama, meaning this day, the one that is the Day of Resurrection. As-Sa'di and the Muyassar give the same identification in their own words.",
            "bn": "যেসব তাফসীর পড়া হয়েছে, তার বেশিরভাগই 'আল-ইয়াওম' শব্দের একটিই ব্যাখ্যা দেয়: কিয়ামতের দিন। ইবন কাসীর লেখেন, 'ফাল-ইয়াওম' মানে ইয়াওমুল কিয়ামাহ। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণেও আছে বিচারের দিন। তাবারী বলেন, আর সেটি কিয়ামতের দিন। কুরতুবী আঙুল দিয়ে দেখানোর মতো করে বলেন: অর্থাৎ এই দিন, যা কিয়ামতের দিন। সা'দী আর মুয়াসসারও নিজ নিজ ভাষায় এই একই দিনকে চিহ্নিত করেন।"
          },
          {
            "en": "Al-Baghawi words it more broadly: ya'ni fi al-akhira, meaning in the Hereafter. That is the next life as a whole rather than the standing of the Day alone, and the reports he cites, given below, place the believers in Paradise and the disbelievers in the Fire. As-Sa'di, having named the Day, ties the laughter to a moment within it: hina yarawnahum fi ghamarat al-'adhab yataqallabun, when they see them turning over in the floods of the punishment. So the fetched texts give a day, the Hereafter at large, and a moment of seeing. None is chosen here.",
            "bn": "বাগাভী কথাটা বলেন আরও বিস্তৃতভাবে: অর্থাৎ আখিরাতে। এখানে শুধু হাশরের দিনটি নয়, গোটা পরকালের কথা। তিনি যে বর্ণনাগুলো আনেন, সেগুলো নিচে আসছে, আর সেখানে মু’মিনরা জান্নাতে, কাফিররা জাহান্নামে। সা'দী দিনটির নাম বলার পর হাসিকে বেঁধে দেন তার ভেতরের একটি মুহূর্তের সঙ্গে: যখন তারা তাদের দেখবে আযাবের প্রবল ঢেউয়ে উলট-পালট খেতে। তাহলে তাফসীরগুলোতে পাওয়া গেল একটি দিন, গোটা আখিরাত, আর দেখার একটি মুহূর্ত। এখানে এর কোনোটিকে বেছে নেওয়া হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Laugh Answering a Laugh",
          "bn": "হাসির জবাবে হাসি"
        },
        "p": [
          {
            "en": "On what kind of laughter this is, Ibn Kathir is brief: ay fi muqabalati ma dahika bihim ula'ika, that is, in return for the way those others laughed at them. His abridged English puts it as retribution for how those people laughed at them. Al-Qurtubi gives the matching in a comparison: kama dahika al-kuffar minhum fi ad-dunya, just as the disbelievers laughed at them in the world. Both read the verse as a return that corresponds to what came first. The laughter of the Day is defined by the laughter of the world that it answers.",
            "bn": "এ হাসি কেমন হাসি, সে বিষয়ে ইবন কাসীর সংক্ষেপে বলেন: অর্থাৎ ওরা যেভাবে তাদের নিয়ে হেসেছিল, তার বদলে। তাঁর সংক্ষিপ্ত ইংরেজি সংস্করণে কথাটা এসেছে প্রতিফল হিসেবে। কুরতুবী মিলটা দেখান তুলনা দিয়ে: যেমন কাফিররা দুনিয়ায় তাদের নিয়ে হেসেছিল। দুজনেই আয়াতটিকে পড়েন আগের কাজের সমান মাপের জবাব হিসেবে। কিয়ামতের দিনের হাসির পরিচয় তাই ঠিক হয় দুনিয়ার সেই হাসি দিয়ে, যার জবাব হিসেবে তা আসে।"
          },
          {
            "en": "As-Sa'di frames the verse with a principle before he quotes it: wa li-hadha kana jaza'uhum fi al-akhira min jinsi 'amalihim, and for this reason their recompense in the Hereafter was of the same kind as their deed. He then describes both sides of the scene. The disbelievers are turning over in the floods of the punishment, wa qad dhahaba 'anhum ma kanu yaftarun, and what they used to fabricate has left them. The believers are fi ghayat ar-raha wa at-tuma'nina, in the utmost ease and calm. In his telling, the laughter belongs to people at rest.",
            "bn": "সা'দী আয়াতটি উদ্ধৃত করার আগেই একটি নীতি সামনে আনেন: এ কারণেই আখিরাতে তাদের প্রতিদান হয়েছে তাদের কাজেরই জাতের। তারপর তিনি দৃশ্যের দুই দিকই বর্ণনা করেন। কাফিররা আযাবের প্রবল ঢেউয়ে উলট-পালট খাচ্ছে, আর যা কিছু তারা মিথ্যা রচনা করত, সব তাদের ছেড়ে চলে গেছে। মু’মিনরা আছে পরম স্বস্তি আর প্রশান্তিতে। তাঁর বর্ণনায় এ হাসি এমন মানুষের হাসি, যারা নিশ্চিন্তে বিশ্রামে আছে।"
          },
          {
            "en": "The Muyassar changes the verb in its paraphrase: yaskharu, they mock. On the Day of Resurrection, it says, those who affirmed Allah and His Messenger and acted by His law mock the disbelievers, as the disbelievers mocked them in the world. The commentators also define the believers each in his own way: those who believed in Allah in the world (at-Tabari), those who believed in Muhammad ﷺ (al-Qurtubi), and the Muyassar's fuller description. At-Tabari attaches fiha, in it, meaning in the world, to the disbelievers as well, so both parties are named by what they were before the Day.",
            "bn": "মুয়াসসার তার ব্যাখ্যায় ক্রিয়াটি বদলে দেয়: ইয়াসখারু, তারা বিদ্রুপ করে। তার ভাষ্যে, কিয়ামতের দিন যারা আল্লাহ ও তাঁর রাসূলকে সত্য বলে মেনেছিল এবং তাঁর শরীয়ত অনুযায়ী আমল করেছিল, তারা কাফিরদের বিদ্রুপ করবে, যেমন কাফিররা দুনিয়ায় তাদের বিদ্রুপ করেছিল। মু’মিনদের পরিচয়ও প্রত্যেকে দেন নিজের মতো করে। তাবারীর কাছে তারা দুনিয়ায় আল্লাহর উপর ঈমান এনেছিল। কুরতুবীর কাছে তারা মুহাম্মাদ ﷺ-এর উপর ঈমান এনেছিল। মুয়াসসারের বর্ণনা আরও বিস্তারিত। তাবারী কাফিরদের সঙ্গেও 'ফীহা' জুড়ে দেন, অর্থাৎ দুনিয়ায়। ফলে দুই পক্ষেরই পরিচয় হয় কিয়ামতের আগে তারা কী ছিল, তা দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gates Opened, Then Shut",
          "bn": "খুলে দেওয়া দরজা, আবার বন্ধ"
        },
        "p": [
          {
            "en": "Two commentators report how the laughing takes place. Al-Baghawi cites Abu Salih: the gates of the Fire are opened for the disbelievers inside it, and they are told, come out. When they see the gates open they make for them to get out, while the believers watch them. When they reach the gates, the gates are shut before them. Yuf'alu dhalika bihim miraran wa al-mu'minun yadhakun: this is done to them again and again, and the believers laugh. In this report the laughter answers a scene that repeats.",
            "bn": "হাসিটা কীভাবে ঘটে, দুজন মুফাসসির তার বর্ণনা দেন। বাগাভী আবূ সালিহের কথা আনেন: জাহান্নামের ভেতরে থাকা কাফিরদের জন্য তার দরজাগুলো খুলে দেওয়া হয়, আর তাদের বলা হয়, বেরিয়ে এসো। দরজা খোলা দেখে তারা বের হওয়ার জন্য সেদিকে ছুটে আসে, আর মু’মিনরা তাদের দেখতে থাকে। দরজার কাছে পৌঁছাতেই তাদের সামনে দরজা বন্ধ হয়ে যায়। তাদের সঙ্গে এমন বারবার করা হয়, আর মু’মিনরা হাসে। এ বর্ণনায় হাসিটা আসে একটি বারবার ঘটা দৃশ্যের জবাবে।"
          },
          {
            "en": "Al-Qurtubi gives the same account with its chain. Ibn al-Mubarak mentioned that al-Kalbi informed him from Abu Salih, commenting on 2:15, Allah yastahzi'u bihim, Allah mocks them. The people of the Fire are told to come out, its gates are opened, they come towards them, and the believers look at them 'ala al-ara'ik, on the couches, until the gates are shut before them. That, the report says, is Allah's mocking of them; and the believers laugh at them when the gates are shut, which is this verse. Here the mockery is ascribed to Allah, and the believers' laughter follows it.",
            "bn": "কুরতুবী একই বর্ণনা আনেন সনদসহ। ইবনুল মুবারক উল্লেখ করেন, কালবী তাঁকে আবূ সালিহ থেকে জানিয়েছেন। আবূ সালিহ কথাটি বলেছিলেন ২:১৫ আয়াতের ব্যাখ্যায়: আল্লাহ তাদের সঙ্গে উপহাস করেন। জাহান্নামবাসীদের বলা হয় বেরিয়ে আসতে। দরজা খুলে দেওয়া হয়, তারা সেদিকে এগিয়ে আসে, আর মু’মিনরা উঁচু আসনে বসে তাদের দেখে। শেষে দরজাগুলো তাদের সামনে বন্ধ হয়ে যায়। বর্ণনা বলছে, এটাই আল্লাহর উপহাস। আর দরজা বন্ধ হলে মু’মিনরা তাদের দেখে হাসে, এটাই এ আয়াত। এখানে উপহাসের কাজটি আল্লাহর, মু’মিনদের হাসি আসে তার পরে।"
          },
          {
            "en": "The second account is from Ka'b. Al-Qurtubi has it from Ibn al-Mubarak, from Muhammad ibn Bashshar, from Qatada: it was mentioned to us that Ka'b used to say, between Paradise and the Fire there are openings, kuwa; when a believer wants to look at an enemy he had in the world, he looks out through one of them. The report cites 37:55, then he looked and saw him in the midst of the Blaze, and adds that he saw the people's skulls boiling. Al-Baghawi gives Ka'b's words without a chain: when they look from Paradise at their enemies being punished, they laugh.",
            "bn": "দ্বিতীয় বর্ণনাটি কা'বের। কুরতুবী তা আনেন ইবনুল মুবারক থেকে, তিনি মুহাম্মাদ ইবন বাশশার থেকে, তিনি কাতাদা থেকে: আমাদের জানানো হয়েছে, কা'ব বলতেন, জান্নাত আর জাহান্নামের মাঝখানে কিছু জানালা আছে। দুনিয়ায় কোনো মু’মিনের যে শত্রু ছিল, তাকে দেখতে চাইলে সে ওই জানালার কোনো একটি দিয়ে উঁকি দেয়। বর্ণনাটি ৩৭:৫৫ আয়াত উদ্ধৃত করে: অতঃপর সে উঁকি দিয়ে তাকে জাহান্নামের মাঝখানে দেখল। সঙ্গে আছে, সে দেখল লোকগুলোর মাথার খুলি টগবগ করে ফুটছে। বাগাভী কা'বের কথাটি আনেন সনদ ছাড়া: জান্নাত থেকে তারা যখন শাস্তিরত শত্রুদের দিকে উঁকি দেয়, তখন হাসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Reports Honestly",
          "bn": "বর্ণনাগুলোর ওজন"
        },
        "p": [
          {
            "en": "These accounts need to be held at their proper weight. They come from Abu Salih and from Ka'b, the second reaching al-Qurtubi through Qatada's words, it was mentioned to us. Neither al-Qurtubi nor al-Baghawi attributes them to the Prophet ﷺ, and neither gives them a grading. They are reported here as the two commentators report them, with the chains they print, and nothing more is claimed for them. They describe a how and a where. The verse itself says only who laughs, at whom, and on which day.",
            "bn": "এই বর্ণনাগুলোকে তাদের প্রকৃত ওজনেই রাখতে হবে। এগুলো এসেছে আবূ সালিহ আর কা'ব থেকে। দ্বিতীয়টি কুরতুবীর কাছে পৌঁছেছে কাতাদার 'আমাদের জানানো হয়েছে' কথাটির মধ্য দিয়ে। কুরতুবী বা বাগাভী কেউই এগুলোকে নবী ﷺ-এর কথা বলে উল্লেখ করেননি, আর কেউই এগুলোর মান নির্ণয় করেননি। তাই দুই মুফাসসির যেভাবে, যে সনদে এনেছেন, এখানে ঠিক সেভাবেই রাখা হলো, এর বেশি কিছু দাবি করা হচ্ছে না। বর্ণনাগুলো বলে কীভাবে আর কোথায়। আয়াত নিজে শুধু বলে কে হাসবে, কাকে নিয়ে হাসবে, আর কোন দিন।"
          },
          {
            "en": "No fetched commentary on this verse attaches a hadith of the Prophet ﷺ to it, and none gives an occasion of revelation for it. Whatever is reported about the mockery described in 83:29 belongs to the commentary on that verse, not to the texts read for this verse, so none of it is brought in here. The verse does not need more support than it has. Its own six words, read with the passage before it and glossed by the commentators above, carry the meaning without a story attached to them.",
            "bn": "এ আয়াতের যেসব তাফসীর পড়া হয়েছে, তার কোনোটিই এর সঙ্গে নবী ﷺ-এর কোনো হাদীস জুড়ে দেয়নি, আর কোনোটিই এর নাযিলের কোনো প্রেক্ষাপট বলেনি। ৮৩:২৯ আয়াতে বর্ণিত বিদ্রুপ নিয়ে যা কিছু বর্ণিত আছে, তা ওই আয়াতের তাফসীরের বিষয়। এ আয়াতের জন্য পড়া লেখাগুলোতে তা নেই, তাই এখানে তার কিছুই আনা হলো না। আয়াতটির বাড়তি কোনো ভরসার দরকারও নেই। আগের আয়াতগুলোর সঙ্গে মিলিয়ে পড়লে আর মুফাসসিরদের উপরের ব্যাখ্যায় দেখলে এর নিজের ছয়টি শব্দই অর্থটা বহন করে, কোনো কাহিনি জুড়ে দেওয়া ছাড়াই।"
          }
        ]
      },
      {
        "h": {
          "en": "Heard Again in al-Mu'minun",
          "bn": "মু’মিনূনে একই সুর"
        },
        "p": [
          {
            "en": "Al-Qurtubi points to a parallel: nadhiruhu fi akhiri surat al-mu'minin, its counterpart is at the end of Surah al-Mu'minun. Ibn Kathir's abridged English quotes that passage, 23:108 to 23:111, before reaching this verse. Allah says to the people of the Fire: remain in it despised and do not speak to Me. A party of My servants used to say, our Lord, we believe, so forgive us and have mercy on us. You took them in mockery until they made you forget My remembrance, wa kuntum minhum tadhakun, and you used to laugh at them.",
            "bn": "কুরতুবী একটি সমান্তরাল আয়াতের দিকে ইঙ্গিত করেন: এর অনুরূপ আছে সূরা মু’মিনূনের শেষে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ এ আয়াতে পৌঁছানোর আগে সেই অংশটুকু উদ্ধৃত করে, ২৩:১০৮ থেকে ২৩:১১১। জাহান্নামবাসীদের আল্লাহ বলেন: লাঞ্ছিত হয়ে এর মধ্যেই পড়ে থাকো, আর আমার সঙ্গে কথা বলো না। আমার বান্দাদের একটি দল বলত, হে আমাদের রব, আমরা ঈমান এনেছি, আমাদের মাফ করুন, আমাদের উপর রহম করুন। আর তোমরা তাদের ঠাট্টার পাত্র বানিয়েছিলে, শেষে তা তোমাদের আমার জিকির ভুলিয়ে দিল। তোমরা তাদের নিয়ে হাসতে।"
          },
          {
            "en": "The wording of 23:110 meets this surah directly: the same verb of laughing, with the same min before the people laughed at. And 23:111 has its own al-yawm: inni jazaytuhumu al-yawma bima sabaru, I have rewarded them today for their patience. Ibn Kathir also reads 83:33 as a rebuke before the reversal: the criminals were not sent as guardians over the believers' deeds and words, nor made responsible for them, so why make them the focus of their attention? The shipped article on 23:111 follows this thread from the other surah; here it is enough that the commentators hear the two passages together.",
            "bn": "২৩:১১০ আয়াতের শব্দ এ সূরার সঙ্গে সরাসরি মিলে যায়। হাসির ক্রিয়াটি একই, আর যাকে নিয়ে হাসা হচ্ছে তার আগে একই 'মিন'। ২৩:১১১ আয়াতেও আছে নিজস্ব 'আল-ইয়াওম': আজ আমি তাদের ধৈর্যের প্রতিদান দিয়েছি। ইবন কাসীর ৮৩:৩৩ আয়াতকেও পড়েন এই উল্টে যাওয়ার আগের তিরস্কার হিসেবে। অপরাধীদের মু’মিনদের কাজকর্ম আর কথাবার্তার পাহারাদার করে পাঠানো হয়নি, তাদের দায়িত্বও দেওয়া হয়নি। তাহলে মু’মিনদের নিয়ে তাদের এত মাথাব্যথা কেন? ২৩:১১১ আয়াতের প্রকাশিত প্রবন্ধটি অন্য সূরার দিক থেকে এই সুতো ধরে এগোয়। এখানে এটুকু বলাই যথেষ্ট যে মুফাসসিরগণ দুটি অংশকে একসঙ্গে শোনেন।"
          }
        ]
      },
      {
        "h": {
          "en": "No Warrant for Ridicule Now",
          "bn": "আজ কাউকে ঠাট্টার অনুমতি নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a scene of the Day of Resurrection as the commentators report it: who laughs, at whom, and where. It licenses nothing against any living person or community. It hands no one today a right to mock anyone, and it appoints no one to decide now who will stand on which side on that Day. The verse names no living group, and this article names none. The fates of people are not the reader's to pronounce, and nothing written here pronounces one.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। মুফাসসিরগণ যেভাবে বর্ণনা করেছেন, আয়াতটি কিয়ামতের দিনের তেমনই একটি দৃশ্য তুলে ধরে: কে হাসবে, কাকে নিয়ে, আর কোথায়। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আজ কাউকে নিয়ে ঠাট্টা করার অধিকার এটি কারও হাতে তুলে দেয় না। সেদিন কে কোন পক্ষে দাঁড়াবে, এখনই তা ঠিক করার দায়িত্বও কাউকে দেয় না। আয়াতটি জীবিত কোনো গোষ্ঠীর নাম নেয় না, এ প্রবন্ধও নেয় না। মানুষের পরিণতি ঘোষণা করা পাঠকের কাজ নয়, আর এখানে লেখা কোনো কথাই তা ঘোষণা করে না।"
          },
          {
            "en": "The surrounding verses point the same way. In 83:29 to 83:32 the laughing, the winking and the verdict that others are astray belong to the side the surah condemns, and 83:33 answers that they were never sent as guardians over the believers. A reader who used this verse to sneer at others in this life would be taking up that very posture. In the Abu Salih report too, the mocking is ascribed to Allah, and the believers' laughter happens inside the scene of the Fire, not in the streets of the world.",
            "bn": "আশপাশের আয়াতগুলোও একই দিকে ইশারা করে। ৮৩:২৯ থেকে ৮৩:৩২ আয়াতে হাসাহাসি, চোখ টেপা, আর অন্যদের পথভ্রষ্ট বলে রায় দেওয়া সবই সেই পক্ষের কাজ, যাদের সূরাটি নিন্দা করছে। আর ৮৩:৩৩ জবাব দেয়, তাদের তো মু’মিনদের পাহারাদার করে পাঠানো হয়নি। কোনো পাঠক যদি এ আয়াতকে দুনিয়ায় অন্যদের তাচ্ছিল্য করার কাজে লাগায়, তবে সে ঠিক ওই ভঙ্গিটাই গ্রহণ করল। আবূ সালিহের বর্ণনাতেও উপহাসের কাজটি আল্লাহর। মু’মিনদের হাসি ঘটে জাহান্নামের দৃশ্যের ভেতরে, দুনিয়ার পথেঘাটে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Consolation for the Mocked",
          "bn": "বিদ্রুপের শিকারের সান্ত্বনা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, commenting on the whole passage, reads it as comfort for the one on the receiving end. There is much solace in this verse for the righteous believers, it says: never bother about their laughter and mockery. It closes with an Urdu couplet, rendered: so long as we fear people's laughter, the people will go on laughing at us. The comfort is addressed to the person being laughed at, not to anyone hoping to laugh back. Fear of ridicule is the thing it asks the believer to put down.",
            "bn": "মাআরিফুল কুরআন পুরো অংশটির আলোচনায় একে পড়ে বিদ্রুপের শিকার মানুষের জন্য সান্ত্বনা হিসেবে। সেখানে বলা হয়েছে, নেককার মু’মিনদের জন্য এ আয়াতে অনেক সান্ত্বনা আছে: তাদের হাসি আর ঠাট্টা নিয়ে কখনো মাথা ঘামাবেন না। শেষে আছে উর্দু একটি শের, যার অর্থ: মানুষের হাসিকে যতদিন আমরা ভয় পাব, মানুষ ততদিন আমাদের নিয়ে হাসতেই থাকবে। সান্ত্বনাটা তাই সেই মানুষের জন্য, যাকে নিয়ে হাসা হচ্ছে। পাল্টা হাসার সুযোগ খোঁজা কারও জন্য নয়। ঠাট্টার ভয়টাই মু’মিনকে নামিয়ে রাখতে বলা হচ্ছে।"
          },
          {
            "en": "The verses that follow complete the scene, and each has its own work: 83:35, on the couches, looking, and 83:36, have the disbelievers been repaid for what they used to do? For the reader, this verse asks something plain. Whoever is laughed at for faith, for a prayer kept or a line not crossed, may carry it with patience, since 23:111 names patience as what was rewarded. And whoever feels the pull to mock may remember which side of 83:29 that pull belongs to, and keep both tongue and glance from it.",
            "bn": "পরের আয়াতগুলো দৃশ্যটি পূর্ণ করে, আর প্রত্যেকটির কাজ আলাদা: ৮৩:৩৫, উঁচু আসনে বসে দেখছে, আর ৮৩:৩৬, কাফিররা যা করত তার প্রতিফল কি তারা পেল? পাঠকের কাছে এ আয়াতের চাওয়া সহজ। ঈমানের জন্য, নামাজ ধরে রাখার জন্য বা কোনো সীমা না পেরোনোর জন্য যাকে নিয়ে হাসা হয়, সে ধৈর্যের সঙ্গে তা সইতে পারে। কারণ ২৩:১১১ জানিয়ে দেয়, পুরস্কার মিলেছে ধৈর্যেরই। আর যার মনে কাউকে ঠাট্টা করার টান জাগে, সে মনে রাখুক, এই টান ৮৩:২৯ আয়াতের কোন পক্ষের। জিহ্বা আর চাহনি দুটোকেই সে তা থেকে সামলে রাখুক।"
          }
        ]
      }
    ]
  }
});
