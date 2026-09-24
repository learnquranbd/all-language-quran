/**
 * Tadabbur long-form articles — surah 7.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "7:2": {
    "sections": [
      {
        "h": {
          "en": "A Book and a Chest",
          "bn": "কিতাব আর একটি বুক"
        },
        "p": [
          {
            "en": "Al-A'raf is Makkan, the seventh surah, and a long one at two hundred and six verses. It opens with Alif Lam Mim Sad, four letters that head no other surah in the Quran. On the disjointed letters at-Tabari collects several early opinions and settles none of them, and a large body of the commentators hold that what they fully mean rests with Allah. Then 7:2 names what follows them. A Book sent down to you. Before any argument, any story, any ruling, the surah says what it is.",
            "bn": "সূরা আল-আ'রাফ মাক্কী, কুরআনের সপ্তম সূরা, দুইশ ছয় আয়াতের লম্বা সূরা। শুরু হয় আলিফ লাম মীম সাদ দিয়ে, আর এই চার হরফ দিয়ে কুরআনের আর কোনো সূরা শুরু হয়নি। বিচ্ছিন্ন হরফগুলো নিয়ে ইমাম তাবারী আগের যুগের কয়েকটি মত জড়ো করেন, কোনোটিকেই চূড়ান্ত বলেন না। মুফাসসিরদের বড় একটা দল বলেন, এগুলোর পুরো মর্ম আল্লাহর কাছেই। এরপর ৭:২ আয়াত বলে দেয় এই হরফগুলোর পরে কী আসছে। কিতাব, তোমার উপর নাযিল করা। কোনো তর্ক, কোনো কাহিনি, কোনো বিধান আসার আগে সূরা নিজের পরিচয়টাই দিয়ে নেয়।"
          },
          {
            "en": "Then comes the sequence. 7:3 turns from the Prophet to everyone and commands following what came down from their Lord, taking no protectors besides Him. 7:4 and 7:5 recall towns ruined at night or during their midday rest, whose whole answer when the punishment arrived was that they had been wrongdoers. 7:6 through 7:9 promise a questioning of nations and messengers alike, and a weighing on that Day that is true. No sound report is transmitted as an occasion of revelation here, so the placement is the context, and what is settled first is not the deniers but the inside of the chest of the man who must carry this.",
            "bn": "এরপর আসে পরপর সাজানো কথাগুলো। ৭:৩ আয়াত নবী ﷺ থেকে মুখ ফিরিয়ে সবাইকে বলে, তোমাদের রবের কাছ থেকে যা নেমেছে তারই অনুসরণ করো, তাঁকে বাদ দিয়ে আর কাউকে অভিভাবক মেনো না। ৭:৪ আর ৭:৫ আয়াত মনে করিয়ে দেয় সেই জনপদগুলোর কথা, রাতে কিংবা দুপুরের বিশ্রামের সময় যাদের উপর আযাব নেমেছিল, আর নেমে আসার পর একটা কথাই তাদের মুখে ছিল, আমরা জালিম ছিলাম। ৭:৬ থেকে ৭:৯ আয়াত জানিয়ে দেয়, জাতিগুলোকেও জিজ্ঞেস করা হবে, রাসূলদেরও, আর সেদিনের ওজন হবে ঠিক ঠিক। এই আয়াতের শানে নুযূল হিসেবে নির্ভরযোগ্য কোনো বর্ণনা আসেনি, তাই সূরার ভেতর এর অবস্থানটাই এর প্রেক্ষাপট। সতর্কবাণীর এক লম্বা সূরা শুরু হচ্ছে, আর সবার আগে যে বিষয়টা মিটিয়ে নেওয়া হচ্ছে সেটা অস্বীকারকারীরাও নয়, তর্কটাও নয়। যাঁকে এই কিতাব বইতে হবে তাঁর বুকের ভেতরটা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Word Haraj",
          "bn": "হারাজ শব্দটি"
        },
        "p": [
          {
            "en": "Haraj. From the root h-r-j the Arabs formed al-harajah, a stand of trees grown so close together that nothing can push through, and the word keeps that picture: a place with no room and no way out. Ar-Raghib, in al-Mufradat, traces it to the close gathering of a thing, from which narrowness is taken, and then its extension to what is difficult or blameworthy. The Quran uses it at 4:65 for the unease a person feels at a verdict, and at 9:91 and 22:78 for blame and hardship lifted off the believer.",
            "bn": "হারাজ। হা-র-জ মূল থেকে আরবরা বানিয়েছে আল-হারাজা, এমন ঘন গাছপালা যার ভেতর দিয়ে কিছুই ঢুকতে পারে না। শব্দটা সেই ছবিটাই ধরে রাখে, এমন জায়গা যেখানে জায়গাও নেই, বেরোনোর পথও নেই। আর-রাগিব তাঁর আল-মুফরাদাতে এর মূল ধরেন কোনো জিনিসের ঘন হয়ে জড়ো হওয়া, সেখান থেকেই আসে সংকীর্ণতা, তারপর দেখান কীভাবে তা কঠিন বা নিন্দনীয় জিনিস বোঝাতেও চলে। কুরআনে শব্দটা এসেছে ৪:৬৫ আয়াতে, ফয়সালা নিয়ে মনের খচখচানি বোঝাতে, আর ৯:৯১ ও ২২:৭৮ আয়াতে, মুমিনের কাঁধ থেকে দোষ ও কষ্ট নামিয়ে দেওয়ার প্রসঙ্গে।"
          },
          {
            "en": "Two other words in the clause do quiet work. The tightness is placed fi sadrik, in your breast, not on the tongue and not in the road ahead. And its source is named: minhu, from it. What might press on him is the Book itself, before anyone has said a word against it. A command about a state, rather than about an act, is itself a promise that the state can change.",
            "bn": "এই অংশের আরও দুইটা শব্দ চুপচাপ কাজ করে যায়। চাপটা কোথায় হবে তা ঠিক করে দেওয়া হয়, ফী সাদরিক, তোমার বুকের ভেতর। জিভে নয়, সামনের পথে নয়। আর উৎসটাও বলে দেওয়া হয়, মিনহু, এর থেকে। যা চাপ দিতে পারে সেটা কিতাবই, কেউ এর বিরুদ্ধে একটা কথা বলার আগেই। হুকুমটা কোনো কাজকে নয়, একটা অবস্থাকে সম্বোধন করে। আর অবস্থা নিয়ে হুকুম আসা মানেই এই আশ্বাস যে অবস্থাটা বদলাতে পারে।"
          },
          {
            "en": "Sadr, the breast, is where the Quran keeps putting this. 6:125 is the sharpest of them: whoever Allah wills to guide, He opens his breast to Islam, and whoever He wills to let go astray, He makes his breast tight and constricted, dayyiqan harajan, as though he were climbing into the sky. That verse carries both of our words together. Tightness of the chest is not a mood in this vocabulary. It is a condition with a cause, and it has an opposite.",
            "bn": "সাদর, অর্থাৎ বুক, কুরআন বারবার এই জিনিসটা এখানেই রাখে। এদের মধ্যে সবচেয়ে ধারালো ৬:১২৫ আয়াত। আল্লাহ যাকে হেদায়াত দিতে চান তার বুক ইসলামের জন্য খুলে দেন, আর যাকে পথভ্রষ্ট হতে দিতে চান তার বুক করে দেন সংকীর্ণ ও সংকুচিত, দাইয়িকান হারাজান, যেন সে আকাশে উঠছে। আমাদের আয়াতের দুইটা শব্দই ওই আয়াতে একসাথে আছে। এই ভাষায় বুক চেপে আসা কোনো মেজাজের ব্যাপার নয়। এর কারণ আছে, আর এর উল্টোটাও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Readings of One Word",
          "bn": "এক শব্দের দুই পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari gathers what the early authorities said and it falls into two lines. Mujahid glossed haraj here as shakk, doubt: let no doubt of it settle in your breast. As-Suddi and Qatadah are reported with the same reading. The other line takes the plain lexical sense. Let there be no tightness in you at carrying this and setting it before people who will call you a liar. Both are readings of the same three consonants, and named men of the first generations held each.",
            "bn": "ইমাম তাবারী আগের যুগের মনীষীদের কথা জড়ো করেন, আর তা দুই ধারায় ভাগ হয়ে যায়। মুজাহিদ এখানে হারাজের অর্থ করেছেন শাক, অর্থাৎ সন্দেহ। এ নিয়ে যেন তোমার বুকে কোনো সন্দেহ বাসা না বাঁধে। আস-সুদ্দী ও কাতাদাহ থেকেও একই পাঠ বর্ণিত। অন্য ধারাটি শব্দের সোজা অভিধানিক অর্থই নেয়। এটা বইতে গিয়ে আর যারা তোমাকে মিথ্যাবাদী বলবে তাদের সামনে রাখতে গিয়ে তোমার ভেতরটা যেন চেপে না আসে। একই তিন হরফের দুই পাঠ, আর প্রথম যুগের নাম-জানা মানুষেরা দুইটাই ধরেছেন।"
          },
          {
            "en": "Ibn Kathir records both and gives weight to the second, glossing the constriction as constriction at conveying the message. Al-Qurtubi lays out the lexical ground for that reading and treats the purpose clause as its cure. As-Sa'di takes the relief from the same place: what was given to warn and remind is a mercy, not a load. Translators divide along the same seam, which is a fair sign the Arabic holds both. Keep both, then. If haraj is doubt, the verse steadies a conviction; if it is tightness, it steadies a nerve. Where the commentators differ they differ about the feeling, never about the duty.",
            "bn": "ইবনু কাসীর দুইটাই তুলে ধরেন, তবে ভার দেন দ্বিতীয়টির উপর, আর সংকোচনটাকে ব্যাখ্যা করেন বার্তা পৌঁছে দেওয়ার সংকোচন হিসেবে। কুরতুবী এই পাঠের অভিধানিক ভিত্তি সাজিয়ে দেন, আর আয়াতের শেষের উদ্দেশ্য-অংশটাকেই এর দাওয়াই ধরেন। সা'দীও একই জায়গা থেকে স্বস্তিটা টেনে আনেন। সতর্ক করার আর নসিহত দেওয়ার জন্য যা দেওয়া হয়েছে তা রহমত, বোঝা নয়। অনুবাদকরাও এই একই সীমানা ধরে ভাগ হয়ে গেছেন, কেউ লেখেন কষ্ট, কেউ লেখেন কুণ্ঠা। এতেই বোঝা যায় আরবি শব্দটা সত্যিই দুইটাই ধরে রাখে। তাই দুইটাই থাক। হারাজ যদি সন্দেহ হয় আয়াতটি বিশ্বাসকে শক্ত করে, আর সংকোচন হলে সাহসকে। মুফাসসিরদের মতভেদ অনুভূতি নিয়ে, দায়িত্ব নিয়ে কখনো নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Warning Some, Reminding Others",
          "bn": "কাউকে সতর্ক, কাউকে নসিহত"
        },
        "p": [
          {
            "en": "The verse ends with two purposes built differently. The first is a verb: li-tundhira bihi, that you may warn by it. The second is a noun laid beside it: wa dhikra lil-mu'minin, and a reminder for the believers. Warning is something done to a person who has not yet accepted. A reminder is simply what the thing is, for someone who has. The same pages are an alarm in one hand and a recollection in the other, and the difference lies in the reader.",
            "bn": "আয়াত শেষ হয় দুইটা উদ্দেশ্য দিয়ে, আর দুইটার গড়ন আলাদা। প্রথমটা ক্রিয়াপদ, লিতুনযিরা বিহি, যাতে তুমি এর দ্বারা সতর্ক করো। দ্বিতীয়টা পাশে বসানো একটা বিশেষ্য, ওয়া যিকরা লিলমুমিনীন, আর মুমিনদের জন্য নসিহত। সতর্ক করা হয় এমন কাউকে যে এখনো মানেনি। আর যে মেনে নিয়েছে তার কাছে জিনিসটা এমনিতেই নসিহত। একই পৃষ্ঠা এক হাতে বিপদসংকেত, আরেক হাতে মনে পড়ে যাওয়া। তফাতটা পাঠকের দিকে।"
          },
          {
            "en": "6:19 uses the same construction and widens it: this Quran was revealed to me that I may warn you by it and whoever it reaches. The reach is not limited to the first hearers. And the second purpose quietly answers the first half of our verse, because a man told exactly what he is holding and exactly who it is for has been handed the two facts that shrink a task back to its real size. The pressure usually comes from knowing neither.",
            "bn": "৬:১৯ আয়াত একই গড়ন ব্যবহার করে, আর পরিধি বাড়িয়ে দেয়। এই কুরআন আমার প্রতি নাযিল হয়েছে যাতে আমি এর দ্বারা তোমাদের সতর্ক করি, আর যাদের কাছে এটা পৌঁছাবে তাদেরও। প্রথম শ্রোতাদের মধ্যেই ব্যাপারটা আটকে নেই। আর দ্বিতীয় উদ্দেশ্যটা চুপচাপ আয়াতের প্রথম অংশের জবাব দিয়ে দেয়। যাঁকে বলে দেওয়া হয়েছে তাঁর হাতে ঠিক কী আছে আর সেটা ঠিক কাদের জন্য, তাঁর হাতে সেই দুইটা তথ্যই আছে যা কাজটাকে তার আসল মাপে নামিয়ে আনে। চাপটা সাধারণত আসে এই দুইটার কোনোটাই না জানা থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "What a Warner Looks Like",
          "bn": "সতর্ককারী দেখতে কেমন"
        },
        "p": [
          {
            "en": "Nothing in the sound collections is transmitted as a commentary on this verse itself. What they do give is the word in action. Al-Bukhari relates from Ibn Abbas (RA) that when he was commanded to warn his nearest kin, the command at 26:214, the Prophet climbed as-Safa and called the clans by name until they gathered. He asked whether they would believe him if he told them horsemen in the valley were about to attack. They answered that they had never known him to lie.",
            "bn": "সহীহ গ্রন্থগুলোতে এই আয়াতের ব্যাখ্যা হিসেবে কিছু বর্ণিত হয়নি। তবে শব্দটাকে কাজের মধ্যে দেখা যায়। বুখারী ইবনু আব্বাস (রাঃ) থেকে বর্ণনা করেন, নিকটাত্মীয়দের সতর্ক করার হুকুম যখন এল, অর্থাৎ ২৬:২১৪ আয়াতের হুকুম, তখন নবী ﷺ সাফা পাহাড়ে উঠে গোত্রগুলোর নাম ধরে ডাকতে থাকলেন, সবাই জড়ো হলো। তিনি জিজ্ঞেস করলেন, আমি যদি বলি উপত্যকায় অশ্বারোহী বাহিনী তোমাদের উপর হামলা করতে আসছে, তোমরা কি আমাকে বিশ্বাস করবে? তারা বলল, আপনাকে তো আমরা কখনো মিথ্যা বলতে দেখিনি।"
          },
          {
            "en": "Then he told them he was a warner to them before a severe punishment. The scene carries the shape of li-tundhira: a man who is trusted, a danger that is real, and a message delivered whatever it costs among his own people. Al-Bukhari and Muslim relate from Abu Musa (RA) another picture the Prophet gave of himself, of a man who saw an army with his own eyes and ran to his people as the naked warner. Neither report is a commentary on 7:2, and both show a man who speaks anyway. A warner who waits until warning feels easy has already failed the people in the valley.",
            "bn": "তারপর তিনি ﷺ বললেন, কঠিন আযাব আসার আগে আমি তোমাদের জন্য সতর্ককারী। দৃশ্যটার মধ্যে লিতুনযিরার আকৃতিটাই আছে। যাঁকে মানুষ বিশ্বাস করে, বিপদটা সত্যি, আর নিজের লোকদের মধ্যে যত দামই দিতে হোক খবরটা পৌঁছে দেওয়া হচ্ছে। বুখারী ও মুসলিম আবূ মূসা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নিজের আরেকটা ছবি দিয়েছিলেন। একজন মানুষ নিজের চোখে শত্রুবাহিনী দেখে ফেলেছে, তারপর উলঙ্গ সতর্ককারী হয়ে নিজের গোত্রের কাছে ছুটে যাচ্ছে। কোনো বর্ণনাই ৭:২ আয়াতের তাফসীর নয়, তবে দুইটাতেই এমন একজনকে দেখা যায় যিনি তবুও মুখ খোলেন। আর যে সতর্ককারী সতর্ক করতে স্বস্তি লাগার অপেক্ষা করে, উপত্যকার মানুষগুলোর হক সে আগেই নষ্ট করে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Sit With It",
          "bn": "পাশে বসার মতো আয়াত"
        },
        "p": [
          {
            "en": "15:97 says it plainly on the Prophet's behalf: We already know that your breast is constrained by what they say. The knowing comes first and the remedy follows in 15:98, glorify your Lord with praise and be among those who prostrate. 11:12 names the same pressure and its content, their demand for a treasure or an angel, with a breast constrained because of it, and answers with the reminder that he is only a warner and Allah is Disposer of all things.",
            "bn": "১৫:৯৭ আয়াত নবীর ﷺ পক্ষ থেকে কথাটা সোজা বলে দেয়। আমি জানি, তারা যা বলে তাতে তোমার বুক সংকুচিত হয়। জানাটা আগে আসে, তারপর ১৫:৯৮ আয়াতে আসে দাওয়াই। প্রশংসাসহ তোমার রবের পবিত্রতা ঘোষণা করো আর সিজদাকারীদের দলে থাকো। ১১:১২ আয়াত একই চাপের কথা বলে, আর চাপের কারণটাও বলে দেয়, তাদের দাবি যে ধনভাণ্ডার নামল না কেন বা ফেরেশতা এল না কেন, আর সেই কারণেই বুক সংকুচিত হওয়া। জবাবটা আসে মনে করিয়ে দিয়ে, তুমি তো শুধু সতর্ককারী, আর সব কাজের দায়িত্ব আল্লাহর।"
          },
          {
            "en": "18:6 goes past constriction to a grief that could destroy him if they will not believe, which measures the weight of it. Against that stands 94:1, did We not expand for you your breast, reported as something already done. And 22:78 uses our exact word from the other side: He has not placed upon you in the religion any haraj. The word the Prophet is told to keep out of his breast is the word Allah uses for what He kept out of the religion.",
            "bn": "১৮:৬ আয়াত সংকোচন ছাড়িয়ে আরও এগোয়, বলে সেই দুঃখের কথা যা তাঁকে শেষ করে দিতে পারে যদি তারা ঈমান না আনে। এতেই ভারটার মাপ বোঝা যায়। এর বিপরীতে দাঁড়িয়ে আছে ৯৪:১ আয়াত, আমি কি তোমার বক্ষ প্রশস্ত করে দিইনি, আর কথাটা এসেছে হয়ে যাওয়া কাজ হিসেবে। আর ২২:৭৮ আয়াত আমাদের শব্দটাই ব্যবহার করে, তবে উল্টো দিক থেকে। দ্বীনের ভেতর তিনি তোমাদের উপর কোনো হারাজ রাখেননি। যে শব্দটা বুকে না রাখতে নবীকে ﷺ বলা হচ্ছে, সেই শব্দটাই আল্লাহ ব্যবহার করছেন দ্বীনের ভেতর থেকে যা তিনি সরিয়ে রেখেছেন তা বোঝাতে।"
          },
          {
            "en": "Read together, those verses say one thing. Nothing in this religion was built to crush anyone, so a crushed feeling is not evidence about the message. It is only a report about the carrier, and 6:125 says the same from its own angle by making an open chest a mark of guidance and a tight one a mark of being left to wander.",
            "bn": "একসাথে পড়লে এই আয়াতগুলো একটা কথাই বলে। এই দ্বীনের কোনো কিছুই কাউকে পিষে ফেলার জন্য বানানো হয়নি। তাই পিষে যাওয়ার অনুভূতি বার্তাটার ব্যাপারে কোনো প্রমাণ নয়, ওটা কেবল বাহকের অবস্থার খবর। ৬:১২৫ আয়াত নিজের দিক থেকে একই কথা বলে, খোলা বুক হেদায়াতের চিহ্ন আর চেপে থাকা বুক ছেড়ে দেওয়ার চিহ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With a Tight Chest",
          "bn": "চেপে থাকা বুক নিয়ে চলা"
        },
        "p": [
          {
            "en": "There is a very ordinary form of this. A person believes something, is asked about it in a room where believing it is expensive, and feels his chest close. The verse does not tell him the feeling is sinful. It tells him not to let it settle in and take up residence, and it tells him that before it has happened rather than after. Pressure you were warned about is easier to carry than pressure that arrives as a surprise about your own faith.",
            "bn": "এর একটা খুব সাধারণ চেহারা আছে। কেউ কিছু বিশ্বাস করেন, এমন একটা ঘরে তাঁকে সেটা নিয়ে প্রশ্ন করা হয় যেখানে ওটা বিশ্বাস করার দাম আছে, আর তাঁর বুকটা চেপে আসে। আয়াত তাঁকে বলছে না যে এই অনুভূতিটাই গুনাহ। বলছে, এটাকে ভেতরে বাসা বাঁধতে দিয়ো না। আর কথাটা বলছে ঘটনাটা ঘটার আগেই, পরে নয়। আগে থেকে জানা চাপ বইতে সহজ, কিন্তু নিজের ঈমান নিয়ে হঠাৎ এসে পড়া চাপ অনেক ভারী।"
          },
          {
            "en": "The practical test is whether the constriction has started editing. Do you leave out the verse that is hard to explain, soften the ruling that sounds severe, mention your religion only after the room has decided it likes you? 11:12 describes that exact temptation, leaving out part of what was revealed, and answers it not with a rebuke but with a job description. You are only a warner. Delivery is your share of this, and the rest of it is not.",
            "bn": "কাজের পরীক্ষাটা হলো, সংকোচনটা কাটছাঁট শুরু করে দিয়েছে কিনা। যে আয়াতটা বোঝানো কঠিন সেটা কি বাদ দিয়ে যান? যে বিধানটা কড়া শোনায় সেটা কি নরম করে বলেন? দ্বীনের কথা কি তোলেন কেবল ঘরের লোকেরা আপনাকে পছন্দ করে ফেলার পর? ১১:১২ আয়াত ঠিক এই টানটার কথাই বলে, নাযিল হওয়া জিনিসের কিছু অংশ বাদ দিয়ে দেওয়া। আর জবাব দেয় ধমক দিয়ে নয়, কাজের সীমা বুঝিয়ে দিয়ে। তুমি তো কেবল সতর্ককারী। পৌঁছে দেওয়াটা আপনার ভাগ, বাকিটা আপনার ভাগ নয়।"
          },
          {
            "en": "And keep the second audience in view. A reminder for the believers means you are a reader too, not only a carrier. Someone who opens the Book only to answer other people will find it heavy, because he is always holding it for a third party. Read a page for nobody. The verse gives these pages two jobs, and the second one is for the people who have already said yes, which includes you.",
            "bn": "আর দ্বিতীয় শ্রোতাদের কথাও মনে রাখুন। মুমিনদের জন্য নসিহত মানে আপনি শুধু বাহক নন, আপনি পাঠকও। যিনি কিতাব খোলেন কেবল অন্যকে জবাব দেওয়ার জন্য, তাঁর কাছে সেটা ভারী লাগবেই, কারণ তিনি সবসময় তৃতীয় কারো হয়ে সেটা ধরে আছেন। কারো জন্য নয়, এমন করে এক পৃষ্ঠা পড়ুন। আয়াতটি এই পৃষ্ঠাগুলোকে দুইটা কাজ দিয়েছে, আর দ্বিতীয়টা তাদের জন্য যারা আগেই হ্যাঁ বলে ফেলেছে। সেই দলে আপনিও আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking For It To Open",
          "bn": "বুক খুলে দেওয়ার দু'আ"
        },
        "p": [
          {
            "en": "The verse's own vocabulary already contains the supplication, because the Quran hands it to another prophet in the same words. Musa (AS), sent to Pharaoh, asks in 20:25: rabbi ishrah li sadri, my Lord, open up my breast for me. He follows it in 20:26 with wa yassir li amri, and make my errand easy for me. A man given a message asked for the inside of his chest before he asked for anything outside it.",
            "bn": "দু'আটা আয়াতের নিজের শব্দভাণ্ডারেই আছে, কারণ কুরআন একই শব্দে সেটা আরেকজন নবীর মুখে তুলে দিয়েছে। মূসা (আঃ), ফিরআউনের কাছে পাঠানোর সময়, ২০:২৫ আয়াতে বলেন, রাব্বিশরাহ লী সাদরী, হে আমার রব, আমার বুকটা খুলে দিন। এরপর ২০:২৬ আয়াতে বলেন, ওয়া ইয়াসসির লী আমরী, আর আমার কাজটা সহজ করে দিন। যাঁকে বার্তা দেওয়া হয়েছে তিনি বাইরের কিছু চাওয়ার আগে নিজের বুকের ভেতরটাই চেয়ে নিলেন।"
          },
          {
            "en": "Keep it for any morning with something difficult in it: a conversation you have been avoiding, a correction you owe someone, a class to teach, a stand to take at work. Ask first for the chest and then for the task. A short supplication in the verse's own wording, offered as nothing more than that, can carry the rest: my Lord, this is Your Book, so let it not press upon me, and let me warn by it and be reminded by it.",
            "bn": "কঠিন কিছু আছে এমন যেকোনো সকালের জন্য এই দু'আটা রেখে দিন। যে কথাটা এড়িয়ে যাচ্ছেন, যাকে ভুল ধরিয়ে দেওয়ার কথা, যে ক্লাসটা পড়াতে হবে, অফিসে যে অবস্থানটা নিতে হবে। আগে বুকের জন্য চান, তারপর কাজের জন্য। আয়াতের নিজের শব্দ দিয়ে ছোট একটা মুনাজাতও বাকিটা বইতে পারে, আর এটা কেবল সেটুকুই, হাদীসের কোনো দু'আ নয়: হে আমার রব, এটা আপনার কিতাব, এটা যেন আমার উপর চাপ হয়ে না বসে, আমি যেন এর দ্বারা সতর্ক করি আর এর দ্বারা নসিহত পাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Before You Speak Again",
          "bn": "আবার মুখ খোলার আগে"
        },
        "p": [
          {
            "en": "Where exactly does it close in you: a room at work, a family table, a group chat, one particular person whose opinion you have made expensive? What is the last thing about your religion that you left out of a sentence because of how it would land, and who were you protecting when you did it? If the tightness were doubt rather than difficulty, would you be able to tell the difference from the inside?",
            "bn": "ঠিক কোথায় আপনার ভেতরটা চেপে আসে: অফিসের কোনো ঘরে, পরিবারের খাবার টেবিলে, কোনো গ্রুপ চ্যাটে, নাকি বিশেষ কোনো মানুষের সামনে যার মতামতের দাম আপনি নিজেই বাড়িয়ে রেখেছেন? দ্বীনের কোন কথাটা শেষবার আপনি বাক্য থেকে বাদ দিয়ে দিয়েছেন শুধু শুনতে কেমন লাগবে ভেবে, আর তখন আসলে কাকে বাঁচাচ্ছিলেন? চাপটা যদি কষ্ট না হয়ে সন্দেহ হতো, ভেতর থেকে কি আপনি তফাতটা ধরতে পারতেন?"
          },
          {
            "en": "The relief in 7:2 arrives before the opposition does. What would you do this week if you stopped waiting to feel settled before you spoke? When did you last read a page of the Quran as a reminder for yourself rather than as material for an argument you expect to have? And when your chest does close, do you take it to Allah the way 20:25 does, or do you simply carry it and call that patience?",
            "bn": "৭:২ আয়াতের সান্ত্বনাটা বিরোধিতা আসার আগেই এসে যায়। মনের জোর আসার অপেক্ষা ছেড়ে দিলে এই সপ্তাহে আপনি কী করতেন? শেষবার কবে কুরআনের এক পৃষ্ঠা পড়েছেন নিজের জন্য নসিহত হিসেবে, সামনের কোনো তর্কের রসদ হিসেবে নয়? আর বুক যখন সত্যিই চেপে আসে, ২০:২৫ আয়াত যেভাবে করে আপনি কি সেভাবে সেটা আল্লাহর কাছে নিয়ে যান, নাকি চুপচাপ বয়ে বেড়ান আর তাকেই সবর বলেন?"
          }
        ]
      }
    ]
  },
  "7:12-13": {
    "sections": [
      {
        "h": {
          "en": "One Exception in a Ranked Order",
          "bn": "সারিবদ্ধ হুকুমে একটি ব্যতিক্রম"
        },
        "p": [
          {
            "en": "7:11 sets the frame in three steps. We created you, then We shaped you, then We said to the angels, prostrate to Adam. The address begins with all of humanity and narrows to one man. They prostrated, and the exception is put in an unusual way: not that Iblis did not prostrate, but that he was not among those who prostrated. He is placed outside a group rather than described as failing an action.",
            "bn": "৭:১১ আয়াত তিন ধাপে দৃশ্যটা সাজিয়ে দেয়। আমি তোমাদের সৃষ্টি করেছি, তারপর আকৃতি দিয়েছি, তারপর ফেরেশতাদের বলেছি আদমকে সাজদাহ করো। সম্বোধন শুরু হয় গোটা মানবজাতিকে দিয়ে, তারপর এসে ঠেকে একজন মানুষে। তারা সাজদাহ করল, আর ব্যতিক্রমের কথাটা বলা হলো একটু অন্যভাবে। বলা হলো না যে ইবলিস সাজদাহ করেনি, বলা হলো সে সাজদাকারীদের দলে ছিল না। তাকে একটা দলের বাইরে রাখা হলো, কাজ না করার দোষ দেওয়া হলো না।"
          },
          {
            "en": "Then the two verses in front of us: the question in 7:12 and the sentence in 7:13. What follows is not the end of him. 7:14 has him ask for time until the Day of resurrection, 7:15 grants the respite, 7:16 and 7:17 have him announce an ambush from four sides, and only then does 7:18 put him out in disgrace. The sentence is passed at 7:13 and confirmed at 7:18 after he declares war.",
            "bn": "এরপর আমাদের সামনের দুই আয়াত, ৭:১২ আয়াতের প্রশ্ন আর ৭:১৩ আয়াতের রায়। এতেই তার কাহিনি শেষ নয়। ৭:১৪ আয়াতে সে কিয়ামত পর্যন্ত সময় চায়, ৭:১৫ আয়াতে অবকাশ দেওয়া হয়, ৭:১৬ ও ৭:১৭ আয়াতে সে চার দিক থেকে ওঁৎ পেতে থাকার ঘোষণা দেয়, আর তারপরই ৭:১৮ আয়াতে তাকে লাঞ্ছিত করে বের করে দেওয়া হয়। রায় হয় ৭:১৩ আয়াতে, আর যুদ্ধ ঘোষণার পর ৭:১৮ আয়াতে সেটা পাকা হয়।"
          },
          {
            "en": "From 7:19 the surah turns to the Garden, the one tree, and the whispering that followed. When Adam (AS) and his wife were questioned about the same kind of breach, their reply is recorded at 7:23, and that verse carries its own card and article here. So al-A'raf sets two answers to a broken command a few verses apart and leaves the reader to hear them together.",
            "bn": "৭:১৯ আয়াত থেকে সূরা চলে যায় জান্নাতের দিকে, সেই একটি গাছ আর তার পরের কুমন্ত্রণার দিকে। একই রকম একটা ভুল নিয়ে আদম (আঃ) ও তাঁর স্ত্রীকে যখন জিজ্ঞেস করা হলো, তাঁদের জবাব লেখা আছে ৭:২৩ আয়াতে, আর সেই আয়াতের নিজের কার্ড ও প্রবন্ধ এখানেই আছে। সূরা আল-আ'রাফ তাই ভাঙা হুকুমের দুইটা জবাব কয়েক আয়াতের ব্যবধানে রেখে দেয়, আর পাঠককে দুইটাই একসাথে শুনতে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question With an Extra No",
          "bn": "একটি বাড়তি না-সহ প্রশ্ন"
        },
        "p": [
          {
            "en": "The Arabic reads ma mana'aka alla tasjuda, which word for word is what prevented you from not prostrating. Ibn Kathir reports what the grammarians made of that extra la: some held it simply redundant, others that it is there to strengthen the negation mana'a already carries inside it. Beside that stands the second telling at 38:75, where the same question is put without the extra particle: what prevented you from prostrating to what I created with My hands.",
            "bn": "আরবিতে আছে মা মানাআকা আল্লা তাসজুদা, শব্দে শব্দে যার মানে দাঁড়ায় কিসে তোকে সাজদাহ না করা থেকে আটকাল। এই বাড়তি লা নিয়ে ব্যাকরণবিদরা কী বলেছেন, ইবনু কাসীর তা তুলে ধরেন। কারও কারও মতে এটি নিছক অতিরিক্ত, আবার কারও মতে মানাআ শব্দের ভেতরে থাকা নেতিবাচক অর্থটিকে জোরালো করার জন্যই এটি এসেছে। এর পাশে থাকে ৩৮:৭৫ আয়াতের দ্বিতীয় বর্ণনা, যেখানে একই প্রশ্ন বাড়তি অব্যয়টি ছাড়াই করা হয়েছে, আমি নিজ হাতে যাকে সৃষ্টি করলাম তাকে সাজদাহ করতে কিসে তোকে আটকাল।"
          },
          {
            "en": "Ibn Jarir at-Tabari sets both of those opinions aside. He reads mana'aka as holding an elided verb, so the sense becomes what compelled you, what obliged you, not to prostrate when I had commanded you, and Ibn Kathir calls that reading strong and excellent. On either reading the question is put by the One who already knows the answer, and the commentators take it as a rebuke rather than an enquiry: a question asked so that the reply will condemn the one who gives it. The clause idh amartuka, when I commanded you, does the legal work of the sentence. It names what the refusal was refusing.",
            "bn": "ইবনু জারীর আত-তাবারী এই দুই মতই সরিয়ে রাখেন। তিনি মানাআকা শব্দের ভেতরে একটি ঊহ্য ক্রিয়া ধরেন, ফলে অর্থ দাঁড়ায়, আমার হুকুম থাকার পরেও কোন জিনিস তোকে বাধ্য করল, নিরুপায় করল যে তুই সাজদাহ করবি না। ইবনু কাসীর এই মতটি বর্ণনা করে বলেন, কথাটি সবল ও উত্তম। দুই পাঠেই প্রশ্নটা করছেন এমন একজন যিনি জবাব আগেই জানেন, আর মুফাসসিরগণ একে জিজ্ঞাসা নয়, ভর্ৎসনা হিসেবেই পড়েন। এমন প্রশ্ন যার জবাবটাই জবাবদাতাকে দোষী করে দেবে। আর ইয মারতুকা অংশটি, অর্থাৎ আমি হুকুম দেওয়ার পরেও, পুরো বাক্যের আইনি ভারটা বইছে। এই অংশটাই বলে দেয় অস্বীকারটা আসলে কী অস্বীকার করছিল।"
          },
          {
            "en": "Now notice the mismatch. He was asked for a cause and he answered with a rank. He does not say that he could not, or did not hear, or was afraid, or misunderstood. Nothing in the reply addresses prevention at all. The question was about an obstacle and the answer is about a hierarchy, and the substitution happens so smoothly that a reader can miss that no question has been answered.",
            "bn": "এবার গরমিলটা লক্ষ করুন। তার কাছে কারণ চাওয়া হয়েছিল, সে দিল মর্যাদার হিসাব। সে বলেনি যে পারেনি, বলেনি যে শোনেনি, ভয় পেয়েছিল বা ভুল বুঝেছিল বলেনি। জবাবের কোথাও বাধার কথা নেই। প্রশ্ন ছিল প্রতিবন্ধকতা নিয়ে, জবাব এল উঁচু-নিচু নিয়ে। বদলটা এত মসৃণভাবে হয় যে পাঠক খেয়ালই করেন না, প্রশ্নের জবাব আসলে দেওয়াই হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "I Am Better Than Him",
          "bn": "আমি তার চেয়ে উত্তম"
        },
        "p": [
          {
            "en": "Ana khayrun minhu is a nominal sentence with no verb in it, and so with no time in it. It is a claim about what he is, not about anything he did or will do. Then the evidence: You created me from fire and created him from clay. Both statements are accurate. 55:15 says the jann were created from a smokeless flame of fire, and 55:14 that man was made from clay like pottery.",
            "bn": "আনা খাইরুম মিনহু বাক্যটিতে কোনো ক্রিয়াপদ নেই, তাই কোনো কালও নেই। এটা সে কী করেছে বা করবে তার দাবি নয়, সে কী তার দাবি। এরপর আসে প্রমাণ, আমাকে বানিয়েছ আগুন থেকে আর তাকে কাদা থেকে। দুইটা কথাই ঠিক। ৫৫:১৫ আয়াত বলে জিনকে সৃষ্টি করা হয়েছে ধোঁয়াবিহীন আগুন থেকে, আর ৫৫:১৪ আয়াত বলে মানুষকে সৃষ্টি করা হয়েছে পোড়া মাটির মতো শুকনো কাদা থেকে।"
          },
          {
            "en": "The argument fails between the premises and the conclusion. Two unstated steps are smuggled in: that fire outranks clay, and that a higher origin is exempt from an order. Neither was ever given to him. And the reply in 7:13 does not dispute the material. It never says you are not made of fire. It changes the subject from substance to place: descend from it, for it is not for you to be arrogant in it.",
            "bn": "যুক্তিটা ভেঙে পড়ে ভিত্তি আর সিদ্ধান্তের মাঝখানে। না বলা দুইটা ধাপ ভেতরে ঢুকিয়ে দেওয়া হয়েছে, এক, আগুন কাদার চেয়ে উঁচু, আর দুই, উঁচু উৎস মানে হুকুমের বাইরে থাকার ছাড়। এর কোনোটাই তাকে কেউ দেয়নি। আর ৭:১৩ আয়াতের জবাব উপাদান নিয়ে তর্কই করে না। কখনো বলে না যে তুই আগুনের তৈরি নোস। প্রসঙ্গ বদলে যায় উপাদান থেকে জায়গায়, নেমে যা এখান থেকে, এর ভেতরে থেকে অহংকার করা তোর কাজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Commentators Read",
          "bn": "মুফাসসিরগণ যা পড়েছেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi records a disagreement over the word fiha, in it, in 7:13. Some referred it to the Garden and some to the rank and station he had held. Either reading keeps the sentence spatial rather than argumentative: you cannot be in this place and be that. And the closing words settle it. He reached for takabbur, making himself great, and was told innaka min as-saghirin, you are of the small.",
            "bn": "৭:১৩ আয়াতের ফীহা শব্দটি নিয়ে কুরতুবী একটি মতভেদ তুলে ধরেন। কেউ একে জান্নাতের দিকে ফিরিয়েছেন, কেউ তার আগের মর্যাদা ও অবস্থানের দিকে। যে পাঠই নিন, বাক্যটা তর্কের নয়, জায়গার। এই জায়গায় থেকে ওই জিনিস হওয়া চলবে না। আর শেষ কথাগুলোই ফয়সালা করে দেয়। সে হাত বাড়িয়েছিল তাকাব্বুরের দিকে, নিজেকে বড় বানানোর দিকে, আর তাকে শোনানো হলো ইন্নাকা মিনাস সাগিরীন, তুই ছোটদের দলে।"
          },
          {
            "en": "As-Sa'di draws the lesson out of that pairing: he was answered with the exact opposite of what he reached for, and the sentence is shaped so that the punishment names the crime. It is not that greatness was denied him and something unrelated given instead. He is handed smallness, the precise antonym of the thing he had claimed, on the strength of the claim itself.",
            "bn": "সা'দী এই জোড়টা থেকেই শিক্ষাটা টেনে বের করেন। যা চেয়েছিল তার ঠিক উল্টোটা তাকে ধরিয়ে দেওয়া হলো, আর রায়টা এমনভাবে গড়া যে শাস্তিই অপরাধের নাম বলে দেয়। এমন নয় যে বড়ত্ব দেওয়া হলো না আর বদলে সম্পর্কহীন কিছু দেওয়া হলো। তার দাবির জোরেই তার হাতে তুলে দেওয়া হলো ছোট হওয়া, ঠিক যে জিনিসটা সে দাবি করেছিল তার বিপরীত শব্দটি।"
          },
          {
            "en": "On what he was, the texts pull in one direction. 7:11 lists him as an exception to the angels, and 18:50 states that he was of the jinn and departed from the command of his Lord. Al-Hasan al-Basri held that he was never an angel for an instant; others among the early authorities held that he belonged to a tribe of them. Ibn Kathir sets out both, and 18:50 is the verse the first group rest on.",
            "bn": "সে আসলে কী ছিল, এ নিয়ে আয়াতগুলো এক দিকেই টানে। ৭:১১ আয়াত তাকে ফেরেশতাদের ব্যতিক্রম হিসেবে দেখায়, আর ১৮:৫০ আয়াত সোজাসুজি বলে সে জিনদের একজন ছিল আর নিজের রবের হুকুম লঙ্ঘন করেছিল। হাসান বাসরী বলতেন, সে এক মুহূর্তের জন্যও ফেরেশতা ছিল না। আগের যুগের আরও কেউ কেউ বলেছেন, সে ফেরেশতাদের একটি গোত্রের ছিল। ইবনু কাসীর দুইটা মতই তুলে ধরেন, আর প্রথম দলের ভরসা ১৮:৫০ আয়াতটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Kibr, As the Prophet Defined It",
          "bn": "নবী ﷺ যেভাবে অহংকারের সংজ্ঞা দিলেন"
        },
        "p": [
          {
            "en": "Muslim relates from Abdullah ibn Mas'ud (RA) that the Prophet said no one with the weight of an atom of kibr in his heart will enter Paradise. A man said that a man likes his garment to be good and his sandals to be good. He answered that Allah is beautiful and loves beauty, and that kibr is batar al-haqq, rejecting the truth, and ghamt an-nas, looking down on people.",
            "bn": "মুসলিম আবদুল্লাহ ইবনু মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, যার অন্তরে অণু পরিমাণ অহংকার আছে সে জান্নাতে যাবে না। এক ব্যক্তি বলল, মানুষ তো চায় তার কাপড় ভালো হোক, জুতা ভালো হোক। তিনি ﷺ বললেন, আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। অহংকার হলো বাতারুল হক, অর্থাৎ সত্যকে নাকচ করা, আর গামতুন নাস, অর্থাৎ মানুষকে তুচ্ছ জ্ঞান করা।"
          },
          {
            "en": "The two halves of that definition are the two halves of 7:12. He rejected a truth that had arrived as a command, and he looked down on the one he had been told to honour. The hadith also removes a misreading before it forms. The questioner was worried about good clothes, and the answer refused to call that arrogance. Kibr here is not a taste or a possession. It is a posture toward the truth and toward people.",
            "bn": "এই সংজ্ঞার দুইটা অংশই ৭:১২ আয়াতের দুইটা অংশ। হুকুম হয়ে আসা একটা সত্যকে সে নাকচ করেছে, আর যাকে সম্মান করতে বলা হয়েছিল তাকে তুচ্ছ ভেবেছে। হাদীসটি একটা ভুল বোঝাবুঝি তৈরি হওয়ার আগেই সরিয়ে দেয়। প্রশ্নকারীর দুশ্চিন্তা ছিল ভালো কাপড় নিয়ে, আর জবাবে সেটাকে অহংকার বলতে সাফ অস্বীকার করা হলো। এখানে অহংকার কোনো রুচি বা সম্পদ নয়। এটা সত্যের দিকে আর মানুষের দিকে দাঁড়ানোর ভঙ্গি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Scene Told Again",
          "bn": "একই দৃশ্য আবার"
        },
        "p": [
          {
            "en": "2:34 compresses the moment into three verbs: he refused, and was arrogant, and became of the disbelievers. The order carries an argument. The refusal is the act, the arrogance is what produced it, and the third clause is the verdict passed on both. 38:75 asks the question differently, naming what Adam was created with, and 38:76 returns the answer of 7:12 in the same words.",
            "bn": "২:৩৪ আয়াত পুরো মুহূর্তটাকে তিনটি ক্রিয়াপদে গুছিয়ে ফেলে, সে অমান্য করল, অহংকার করল, আর কাফিরদের দলে চলে গেল। ক্রমটার ভেতরেই যুক্তি আছে। অমান্য করা কাজ, অহংকার সেই কাজের জন্মদাতা, আর তৃতীয় অংশটি দুইটার উপর দেওয়া রায়। ৩৮:৭৫ আয়াত প্রশ্নটা অন্যভাবে করে, আদমকে কী দিয়ে সৃষ্টি করা হয়েছে তা বলে দিয়ে। আর ৩৮:৭৬ আয়াত ৭:১২ আয়াতের জবাবটাই হুবহু ফিরিয়ে দেয়।"
          },
          {
            "en": "15:33 supplies a third wording, and the contempt in it is plainer: I am not one to prostrate to a human being whom You created from clay of altered black mud. There the material is dwelt on at length rather than named in passing. 18:50 adds who he was and then a warning aimed straight at us: will you take him and his offspring as allies besides Me, when they are your enemy?",
            "bn": "১৫:৩৩ আয়াত তৃতীয় আরেকটি ভাষ্য দেয়, আর সেখানে ঘৃণাটা আরও খোলাখুলি, আমার কাজ নয় এমন মানুষকে সাজদাহ করা যাকে তুমি পচা কাদার শুকনো মাটি থেকে বানিয়েছ। সেখানে উপাদানটার কথা এক কথায় সেরে না দিয়ে টেনে টেনে বলা হয়। ১৮:৫০ আয়াত জানিয়ে দেয় সে কে ছিল, তারপর সোজা আমাদের দিকে তাক করে সতর্ক করে, তোমরা কি আমাকে বাদ দিয়ে তাকে আর তার বংশধরদের অভিভাবক বানাবে, অথচ তারা তোমাদের শত্রু?"
          },
          {
            "en": "55:14 and 55:15 give the two materials with no comment attached: man from clay like pottery, the jann from a smokeless flame of fire. Read beside 7:12, they show that what he said about the substances was true and that the truth of it bought him nothing. The Quran never answers the fire and clay argument by disputing the fire or the clay.",
            "bn": "৫৫:১৪ আর ৫৫:১৫ আয়াত দুইটা উপাদানের কথা বলে দেয়, কোনো মন্তব্য ছাড়াই। মানুষ পোড়া মাটির মতো কাদা থেকে, জিন ধোঁয়াবিহীন আগুন থেকে। ৭:১২ আয়াতের পাশে রেখে পড়লে বোঝা যায়, উপাদান নিয়ে তার কথাটা সত্যি ছিল, আর সেই সত্যি তার কোনো কাজেই লাগেনি। আগুন আর কাদার যুক্তির জবাবে কুরআন কখনো আগুন বা কাদা নিয়ে তর্ক করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Shows Up In Us",
          "bn": "আমাদের মধ্যে এটা যেভাবে আসে"
        },
        "p": [
          {
            "en": "The reflex is familiar enough. A person is corrected, or asked to do something they consider beneath them, and the mind reaches for a comparison instead of a reason. I have been here longer than him. I know more about this than she does. Who is he to tell me. In each case the subject has quietly moved from what was asked to who was asking, and the move feels like an answer.",
            "bn": "ব্যাপারটা আমাদের চেনা। কাউকে শুধরে দেওয়া হলো, কিংবা এমন কিছু করতে বলা হলো যেটা সে নিজের মর্যাদার নিচে মনে করে, আর তখন মনটা কারণ খোঁজার বদলে তুলনা খুঁজতে যায়। আমি তো ওর চেয়ে অনেক আগে থেকে আছি। এ বিষয়ে আমি ওর চেয়ে বেশি জানি। ও আমাকে বলার কে। প্রতিবারই প্রসঙ্গটা চুপচাপ সরে যায় কী বলা হলো থেকে কে বলল-এ, আর সরে যাওয়াটাকেই জবাব বলে মনে হয়।"
          },
          {
            "en": "The test in this verse is obedience that costs standing. The act itself was not hard. Prostration costs nothing physically. What it cost was the ranking he was carrying of himself against Adam. Every instruction that is easy to perform and hard to accept is this same test: taking a turn at work you think is below you, sitting where you were seated rather than where you feel you belong.",
            "bn": "এই আয়াতের পরীক্ষাটা হলো এমন আনুগত্য যার দাম মর্যাদা দিয়ে দিতে হয়। কাজটা কঠিন ছিল না। সাজদাহ করতে শরীরের কোনো খরচ নেই। খরচটা ছিল আদমের সঙ্গে নিজেকে মেপে রাখা যে হিসাবটা সে বয়ে বেড়াচ্ছিল, সেটা। যে হুকুম পালন করা সহজ অথচ মেনে নেওয়া কঠিন, সেটাই এই একই পরীক্ষা। নিজের মর্যাদার নিচে মনে হয় এমন কাজের পালা নেওয়া, কিংবা যেখানে বসার কথা মনে হয় সেখানে না বসে যেখানে বসতে দেওয়া হয়েছে সেখানেই বসা।"
          },
          {
            "en": "There is usually one person whose correction a man will not take. A younger colleague, a sibling, someone who came to practice late, someone whose past he remembers too well. The command was not simply to prostrate; it was to prostrate to Adam, and the refusal lodged in the object. Ask honestly who yours is, because the instruction you cannot obey is rarely the difficult one. It is the one that came from the wrong mouth.",
            "bn": "সাধারণত এমন একজন থাকেই যার শোধরানো মানুষ নিতে পারে না। ছোট কোনো সহকর্মী, ভাই বা বোন, দেরিতে দ্বীনে ফেরা কেউ, কিংবা এমন কেউ যার অতীত খুব বেশি মনে আছে। হুকুম শুধু সাজদাহ করার ছিল না, ছিল আদমকে সাজদাহ করার। আর অস্বীকারটা আটকে গেল ওই কর্মপদটাতেই। সৎভাবে নিজেকে জিজ্ঞেস করুন আপনার সেই মানুষটা কে। কারণ যে হুকুম পালন করতে পারেন না সেটা সাধারণত কঠিন হুকুম নয়। সেটা ভুল মুখ থেকে আসা হুকুম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer Against the Reflex",
          "bn": "এই স্বভাবের বিরুদ্ধে দু'আ"
        },
        "p": [
          {
            "en": "Muslim records from Ali (RA) among the words the Prophet said when he opened the night prayer: guide me to the best of character, for none guides to the best of it but You, and turn away from me its evil, for none turns away its evil but You. Character is asked for there as something given rather than achieved, which is the right way to ask about a fault this deep.",
            "bn": "মুসলিম আলী (রাঃ) থেকে বর্ণনা করেন, রাতের নামায শুরু করার সময় নবী ﷺ যে কথাগুলো বলতেন তার মধ্যে ছিল, আমাকে সবচেয়ে সুন্দর চরিত্রের পথ দেখান, আপনি ছাড়া কেউ তার সবচেয়ে সুন্দরটির পথ দেখাতে পারে না, আর তার মন্দ দিকটা আমার থেকে সরিয়ে দিন, আপনি ছাড়া কেউ তা সরাতে পারে না। এখানে চরিত্র চাওয়া হচ্ছে অর্জনের জিনিস হিসেবে নয়, দানের জিনিস হিসেবে। এত গভীর একটা রোগের জন্য চাওয়ার ধরনটা এটাই।"
          },
          {
            "en": "Alongside it, a short supplication in the verse's own vocabulary, offered as nothing more than that and not as a transmitted text: O Allah, You command and You know what You command, so do not let me answer You with a comparison, and do not let my estimate of myself stand between me and an order of Yours. Keep me from the smallness that greatness is paid with.",
            "bn": "এর পাশে আয়াতের নিজের শব্দ দিয়ে ছোট একটা মুনাজাত, আর এটা কেবল সেটুকুই, বর্ণিত কোনো দু'আ নয়: হে আল্লাহ, আপনি হুকুম করেন আর আপনি জানেন কী হুকুম করছেন। আমাকে তুলনা দিয়ে আপনার জবাব দিতে দেবেন না। নিজেকে নিয়ে আমার হিসাবটা যেন আপনার কোনো হুকুম আর আমার মাঝখানে এসে না দাঁড়ায়। বড় হতে চাওয়ার দাম হিসেবে যে ছোট হওয়া আসে, তা থেকে আমাকে বাঁচান।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Your Adam Is",
          "bn": "আপনার আদম কে"
        },
        "p": [
          {
            "en": "When someone corrects you, how many seconds pass before your mind leaves what was said and arrives at who said it? Which instruction in your life is easy to perform and hard to accept, and what exactly is the hard part made of? Is there one person whose correction you will not take, and would the same words be acceptable from someone else?",
            "bn": "কেউ আপনাকে শুধরে দিলে কী বলা হলো সেখান থেকে কে বলল সেখানে আপনার মন পৌঁছাতে কত সেকেন্ড লাগে? আপনার জীবনের কোন হুকুমটা পালন করা সহজ অথচ মেনে নেওয়া কঠিন, আর কঠিন অংশটা আসলে কী দিয়ে গড়া? এমন কেউ কি আছে যার শোধরানো আপনি নেবেন না, অথচ সেই একই কথা অন্য কারো মুখ থেকে হলে মেনে নিতেন?"
          },
          {
            "en": "What true thing about yourself do you quietly use the way fire was used here, as a standing reason why a particular duty need not apply to you? When did you last obey an instruction that cost you standing in a room, and who noticed? And if the smallness in 7:13 is what reaching for height is paid with, where has it already been collected from you?",
            "bn": "নিজের সম্পর্কে কোন সত্যি কথাটা আপনি চুপচাপ এখানকার আগুনের মতো ব্যবহার করেন, কোনো একটা দায়িত্ব আপনার উপর খাটে না তার স্থায়ী কারণ হিসেবে? শেষবার কবে এমন একটা হুকুম মেনেছেন যার দাম ছিল ঘরের মধ্যে আপনার মর্যাদা, আর সেটা কে খেয়াল করেছিল? আর ৭:১৩ আয়াতের ছোট হয়ে যাওয়াটাই যদি উঁচুতে ওঠার চেষ্টার দাম হয়, আপনার কাছ থেকে সেই দাম কোথায় কোথায় ইতিমধ্যে আদায় হয়ে গেছে?"
          }
        ]
      }
    ]
  },
  "7:23": {
    "sections": [
      {
        "h": {
          "en": "The Question Before the Prayer",
          "bn": "প্রার্থনার আগের প্রশ্ন"
        },
        "p": [
          {
            "en": "These words sit inside a scene, and the scene explains them. 7:19 places Adam (AS) and his wife in the Garden with a single restriction. 7:20-21 have the whisperer at work, offering a reason for the restriction and swearing that he is a sincere adviser. 7:22 has them taste the tree, their nakedness appear, and their Lord call out: did I not forbid you that tree and tell you Satan is a clear enemy to you? This verse is the answer to that question.",
            "bn": "এই কথাগুলো একটি দৃশ্যের ভেতরে বসে আছে, আর দৃশ্যটিই এগুলোর ব্যাখ্যা। 7:19 আয়াতে আদম (আঃ) ও তাঁর স্ত্রীকে জান্নাতে রাখা হয় একটিমাত্র নিষেধসহ। 7:20-21 আয়াতে কুমন্ত্রণাদাতা কাজে নামে, নিষেধের একটি কারণ বানিয়ে দেয় আর শপথ করে বলে যে সে আন্তরিক হিতাকাঙ্ক্ষী। 7:22 আয়াতে তাঁরা গাছের স্বাদ নেন, তাঁদের লজ্জাস্থান প্রকাশ পায়, আর তাঁদের রব ডেকে বলেন: আমি কি তোমাদের ওই গাছ থেকে নিষেধ করিনি এবং বলিনি যে শয়তান তোমাদের প্রকাশ্য শত্রু? এই আয়াতটি সেই প্রশ্নের উত্তর।"
          },
          {
            "en": "So it is not an unprompted supplication but a reply given under direct questioning, which is when excuses are most natural. The Quran does not name Adam's wife, here or anywhere, and there is no reason to supply a name it withheld. What it does record is that both of them spoke: the verb introducing the words is dual. Given a scene containing an obvious second party to blame and a deceiver who had genuinely deceived them, they name only themselves.",
            "bn": "অর্থাৎ এটি আপনা থেকে করা কোনো দোয়া নয়, বরং সরাসরি জিজ্ঞাসাবাদের মুখে দেওয়া জবাব — আর তখনই অজুহাত সবচেয়ে স্বাভাবিক। কুরআন আদম (আঃ)-এর স্ত্রীর নাম নেয় না, এখানেও নয়, অন্য কোথাও নয়; কুরআন যে নামটি বলেনি তা জোগান দেওয়ার কোনো কারণ নেই। কুরআন যা লিপিবদ্ধ করে তা হলো, তাঁরা দুজনেই বলেছিলেন: কথাগুলোর সূচনাকারী ক্রিয়াপদটি দ্বিবচনে। এমন এক দৃশ্যে যেখানে দোষ চাপানোর মতো স্পষ্ট দ্বিতীয় পক্ষ আছে এবং সত্যিই প্রতারণাকারী এক প্রতারক আছে, তাঁরা কেবল নিজেদেরই নাম নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "We Wronged Ourselves",
          "bn": "আমরা নিজেদের প্রতি জুলুম করেছি"
        },
        "p": [
          {
            "en": "Rabbana zalamna anfusana. Zulm is putting a thing somewhere it does not belong. What is striking is the object of the wrong: anfusana, ourselves. The command that was broken belonged to Allah, and the breach was against Him, yet the confession identifies the injured party as the one who disobeyed. Nothing is added by way of setting, cause or provocation. Three words carry the whole admission and then it stops.",
            "bn": "রাব্বানা যালামনা আনফুসানা। জুলুম মানে কোনো জিনিসকে এমন জায়গায় রাখা যেখানে তার স্থান নয়। চমকে দেওয়ার মতো বিষয়টি হলো অন্যায়ের লক্ষ্যবস্তু: আনফুসানা — আমাদের নিজেদের। যে আদেশ ভাঙা হয়েছিল তা আল্লাহর, আর লঙ্ঘনটিও তাঁর বিরুদ্ধে; তবু স্বীকারোক্তি ক্ষতিগ্রস্ত পক্ষ হিসেবে চিহ্নিত করে সেই ব্যক্তিকেই যে অবাধ্য হয়েছে। পরিস্থিতি, কারণ বা উসকানি — কিছুই যোগ করা হয় না। তিনটি শব্দ পুরো স্বীকারোক্তিটি বহন করে, তারপর থেমে যায়।"
          },
          {
            "en": "The build of the prayer deserves attention too: it contains no imperative verb at all. Where the believers of 23:109 say forgive us and have mercy upon us as straight commands in the mouth of a petitioner, this du'a states a fact and then a consequence — if You do not forgive us and have mercy on us, we will certainly be among the losers. The request is made by describing what happens without it. It asks by admitting.",
            "bn": "প্রার্থনাটির গড়নও মনোযোগের দাবি রাখে: এতে কোনো আদেশসূচক ক্রিয়াপদই নেই। 23:109 আয়াতের মুমিনরা যেখানে 'আমাদের ক্ষমা করুন ও আমাদের প্রতি দয়া করুন' বলেন প্রার্থীর মুখে সরাসরি আদেশ হিসেবে, সেখানে এই দোয়া একটি সত্য বলে, তারপর একটি পরিণতি — যদি আপনি আমাদের ক্ষমা না করেন ও দয়া না করেন, আমরা অবশ্যই ক্ষতিগ্রস্তদের অন্তর্ভুক্ত হব। চাওয়াটি করা হয় এটি না পেলে কী হবে তা বর্ণনা করে। এটি স্বীকার করে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Set Against Another Answer",
          "bn": "অন্য এক জবাবের পাশে"
        },
        "p": [
          {
            "en": "The surah has already staged the alternative. In 7:12 Iblis, asked what prevented him from prostrating, answers with an argument: I am better than him, You created me from fire and created him from clay. The same reply is recorded at 38:76 in a second telling. In 7:16 he traces his own error back to his Lord. He does make one request, at 7:14, and it is for time, not for pardon.",
            "bn": "সূরাটি বিকল্পটি আগেই মঞ্চস্থ করে রেখেছে। 7:12 আয়াতে ইবলিসকে জিজ্ঞেস করা হয় কিসে তাকে সিজদা থেকে বিরত রাখল, আর সে জবাব দেয় যুক্তি দিয়ে: আমি তার চেয়ে উত্তম, আপনি আমাকে আগুন থেকে সৃষ্টি করেছেন আর তাকে সৃষ্টি করেছেন মাটি থেকে। একই জবাব দ্বিতীয় বর্ণনায় 38:76 আয়াতে লিপিবদ্ধ। 7:16 আয়াতে সে নিজের বিভ্রান্তির দায় তার রবের দিকেই ফেরায়। সে একটি অনুরোধ করে, 7:14 আয়াতে, আর তা সময়ের জন্য — ক্ষমার জন্য নয়।"
          },
          {
            "en": "So Surah al-A'raf places two responses to a breached command within a dozen verses of each other. One party argues, explains, reassigns the cause and asks for a reprieve. The other admits and asks for mercy. The outcome for the first is stated in 7:18 as expulsion in disgrace; the outcome for Adam (AS) is stated in 2:37 as repentance accepted. The mufassirun make that comparison the lesson of the passage. The lapse was not what separated them. The answer was.",
            "bn": "অর্থাৎ সূরা আল-আ'রাফ ভঙ্গ করা আদেশের দুটি জবাবকে এক ডজনেরও কম আয়াতের ব্যবধানে পাশাপাশি রাখে। এক পক্ষ তর্ক করে, ব্যাখ্যা দেয়, কারণ অন্যের ঘাড়ে চাপায় এবং অবকাশ চায়। অন্য পক্ষ স্বীকার করে এবং রহমত চায়। প্রথম পক্ষের পরিণতি 7:18 আয়াতে বলা হয়েছে অপমানিত হয়ে বিতাড়ন হিসেবে; আদম (আঃ)-এর পরিণতি 2:37 আয়াতে বলা হয়েছে তাওবা কবুল হিসেবে। মুফাসসিরগণ এই তুলনাকেই অংশটির শিক্ষা হিসেবে ধরেন। ভুলটি তাঁদের আলাদা করেনি। জবাবটি করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Words He Received",
          "bn": "যে বাণী তিনি পেয়েছিলেন"
        },
        "p": [
          {
            "en": "2:37 says that Adam (AS) received words from his Lord and He turned to him in forgiveness, but it does not quote them. A body of the mufassirun, reporting from Ibn Abbas (RA) and transmitted by at-Tabari and repeated by Ibn Kathir, identify those words as this very supplication. That is an attribution, and it is honest to give it as one rather than as the text of 2:37 itself. What is not in dispute is the shape of the sentence there: the words came to him.",
            "bn": "2:37 আয়াত বলে, আদম (আঃ) তাঁর রবের কাছ থেকে কিছু বাণী পেলেন এবং তিনি তাঁর তাওবা কবুল করলেন — কিন্তু আয়াতটি সেই বাণী উদ্ধৃত করে না। একদল মুফাসসির, ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করে এবং আত-তাবারীর মাধ্যমে সংক্রমিত ও ইবনে কাসীরে পুনরাবৃত্ত হয়ে, সেই বাণীগুলোকে এই দোয়াটিই বলে চিহ্নিত করেন। এটি একটি সম্বন্ধারোপ, আর একে 2:37 আয়াতের পাঠ হিসেবে নয়, সম্বন্ধারোপ হিসেবেই বলা সৎ। যা নিয়ে মতভেদ নেই তা হলো সেখানকার বাক্যগঠন: বাণীগুলো তাঁর কাছে এসেছিল।"
          },
          {
            "en": "If the identification is accepted, something follows from it. The prayer that saved him was given to him. Repentance in the Quran's account is not a human achievement climbing up toward Allah; the turning is itself something granted. 20:121-122 tells the same episode in the same order — Adam disobeyed his Lord and erred, then his Lord chose him, turned to him and guided him. The choosing is mentioned after the fall, not before it.",
            "bn": "এই চিহ্নিতকরণ মেনে নিলে তা থেকে একটি কথা বেরিয়ে আসে। যে প্রার্থনা তাঁকে রক্ষা করেছে, সেটি তাঁকে দেওয়া হয়েছিল। কুরআনের বিবরণে তাওবা কোনো মানবিক অর্জন নয় যা আল্লাহর দিকে বেয়ে ওঠে; ফিরে আসাটাই একটি দান। 20:121-122 আয়াত একই ঘটনাকে একই ক্রমে বলে — আদম তাঁর রবের অবাধ্য হলেন ও পথভ্রষ্ট হলেন, তারপর তাঁর রব তাঁকে মনোনীত করলেন, তাঁর দিকে ফিরলেন এবং তাঁকে পথ দেখালেন। মনোনয়নের কথা বলা হয়েছে পতনের পরে, আগে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "How It Is Used",
          "bn": "এটি কীভাবে ব্যবহার হয়"
        },
        "p": [
          {
            "en": "The supplication is short enough to memorise in an evening and general enough for any fault. Its shape is the instruction. Name the act. Name yourself as the one harmed by it. Ask for nothing except forgiveness and mercy. State plainly what you are without them. Every clause a person normally reaches for first — the provocation, the circumstances, the others involved — is simply absent from the model.",
            "bn": "দোয়াটি এত ছোট যে এক সন্ধ্যায় মুখস্থ হয়ে যায়, আর এত সাধারণ যে যেকোনো অপরাধের জন্য চলে। এর গড়নটিই নির্দেশ। কাজটির নাম নিন। যে ক্ষতিগ্রস্ত হয়েছে সেই আপনাকেই চিহ্নিত করুন। ক্ষমা ও রহমত ছাড়া আর কিছু চাইবেন না। সেগুলো ছাড়া আপনি কী, তা স্পষ্ট করে বলুন। মানুষ সাধারণত প্রথমে যেসব বাক্যাংশের দিকে হাত বাড়ায় — উসকানি, পরিস্থিতি, জড়িত অন্যরা — এই আদর্শে তার কোনোটিই নেই।"
          },
          {
            "en": "The last word is al-khasirin, the losers, which is a commercial word, and it prices the fault honestly: without forgiveness the account comes up short. That is the register the Quran wants, rather than either dismissal or despair. 7:24 gives the sequel — they went down to the earth with a settlement and a provision for a term. The forgiveness did not cancel the consequence. It changed who they were while they lived through it.",
            "bn": "শেষ শব্দটি আল-খাসিরীন — ক্ষতিগ্রস্তরা; শব্দটি বাণিজ্যিক, আর তা অপরাধটির দাম সৎভাবে নির্ধারণ করে: ক্ষমা ছাড়া হিসাব ঘাটতিতে দাঁড়ায়। কুরআন এই সুরটিই চায় — উড়িয়ে দেওয়াও নয়, হতাশাও নয়। 7:24 আয়াত পরবর্তী অংশ দেয় — তাঁরা পৃথিবীতে নেমে গেলেন নির্দিষ্ট সময়ের জন্য বসবাস ও জীবিকা নিয়ে। ক্ষমা পরিণামটি বাতিল করেনি। তা বদলে দিয়েছিল সেই পরিণামের ভেতর দিয়ে যাওয়ার সময় তাঁরা কেমন মানুষ ছিলেন।"
          }
        ]
      }
    ]
  },
  "7:27": {
    "sections": [
      {
        "h": {
          "en": "When the Story Becomes an Address",
          "bn": "কাহিনি যখন সম্বোধন হয়ে যায়"
        },
        "p": [
          {
            "en": "The Garden narrative closes at 7:24-25 with the descent to the earth, then a life there, a death there, and a being brought out from it. Then the surah changes person. 7:26 opens with ya bani Adam, O children of Adam, and the phrase comes five times in the Quran: 7:26, 7:27, 7:31, 7:35 and 36:60. Four of the five are in this surah, which makes al-A'raf the place where the story is handed to the reader.",
            "bn": "জান্নাতের কাহিনি শেষ হয় ৭:২৪-২৫ আয়াতে, পৃথিবীতে নেমে আসা, তারপর সেখানে জীবন, সেখানে মৃত্যু, আর সেখান থেকেই আবার বের করে আনা। এরপর সূরা সম্বোধন বদলে ফেলে। ৭:২৬ আয়াত শুরু হয় ইয়া বানী আদম দিয়ে, হে আদম সন্তান। কুরআনে কথাটি এসেছে পাঁচবার, ৭:২৬, ৭:২৭, ৭:৩১, ৭:৩৫ আর ৩৬:৬০ আয়াতে। পাঁচটার মধ্যে চারটাই এই সূরায়। তাই সূরা আল-আ'রাফই সেই জায়গা যেখানে কাহিনিটা পাঠকের হাতে তুলে দেওয়া হয়।"
          },
          {
            "en": "7:26 is the gift, and 7:27 is the warning attached to it. The gift is clothing that covers what should be covered, and finery besides, and then a line that reorders the whole subject: the garment of taqwa is better. Only after clothing has been named a favour does the next verse name the one who took the first clothing away. The order is not decorative. You are warned about the thief immediately after being handed the property.",
            "bn": "৭:২৬ আয়াত দান, আর ৭:২৭ আয়াত সেই দানের সাথে জুড়ে দেওয়া সতর্কবাণী। দানটা হলো এমন পোশাক যা ঢাকার জিনিস ঢাকে, তার সাথে সৌন্দর্যও। আর তারপর একটা কথা পুরো প্রসঙ্গটাকেই নতুন করে সাজিয়ে দেয়, তাকওয়ার পোশাকই সবচেয়ে ভালো। পোশাককে নিয়ামত বলার পরেই পরের আয়াত সেই জনের কথা বলে যে প্রথম পোশাকটা খুলে নিয়েছিল। ক্রমটা সাজানোর জন্য নয়। সম্পত্তি হাতে দেওয়ার সঙ্গে সঙ্গেই চোরের কথা বলে দেওয়া হচ্ছে।"
          },
          {
            "en": "The reply that Adam (AS) and his wife gave when they were questioned is at 7:23, and that verse carries its own card and article here, so it is not retold. What 7:27 takes from the episode is not the repentance but the method. It reaches back into the story only for the part that is still operating, and it names it as something the reader is standing inside rather than reading about.",
            "bn": "জিজ্ঞেস করার পর আদম (আঃ) ও তাঁর স্ত্রী যে জবাব দিয়েছিলেন তা আছে ৭:২৩ আয়াতে, আর সেই আয়াতের নিজের কার্ড ও প্রবন্ধ এখানেই আছে, তাই সেটা আর বলা হচ্ছে না। ৭:২৭ আয়াত ওই ঘটনা থেকে তওবাটা তুলে আনে না, তুলে আনে কায়দাটা। কাহিনির যে অংশটা এখনো চালু আছে কেবল সেটুকুই টেনে আনে, আর এমনভাবে বলে যেন পাঠক ব্যাপারটা পড়ছেন না, তার ভেতরেই দাঁড়িয়ে আছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prohibition Aimed Past You",
          "bn": "আপনাকে পেরিয়ে যাওয়া নিষেধ"
        },
        "p": [
          {
            "en": "La yaftinannakum ash-shaytan. On the surface this forbids Shaytan rather than the reader: let him absolutely not put you to trial. The emphatic nun makes it categorical. Al-Qurtubi notes the form and reads it as a prohibition aimed at the one listening. You cannot obey a command given to your enemy. What you can do is refuse to be the opening he comes in through.",
            "bn": "লা ইয়াফতিনান্নাকুমুশ শাইত্বান। উপর থেকে দেখলে নিষেধটা পাঠককে নয়, শয়তানকে করা হচ্ছে, সে যেন কিছুতেই তোমাদের ফিতনায় ফেলতে না পারে। জোর দেওয়ার নূন কথাটাকে চূড়ান্ত করে দেয়। কুরতুবী এই গড়নটা তুলে ধরেন, আর একে শ্রোতার উদ্দেশেই নিষেধ বলে পড়েন। শত্রুকে দেওয়া হুকুম আপনি পালন করতে পারেন না। আপনি যা পারেন তা হলো, সেই ফাঁকটা হতে অস্বীকার করা যে ফাঁক দিয়ে সে ঢোকে।"
          },
          {
            "en": "Fitnah comes from f-t-n, and its first use is the assaying of gold, putting the metal in fire so that what is not gold burns away. From there it carries trial, and from trial it carries seduction into ruin. The word chosen here is not one for deceiving or misleading in general. It is the word for putting something in a fire to find out what it is really made of.",
            "bn": "ফিতনা শব্দের মূল ফা-তা-নূন, আর এর প্রথম ব্যবহার সোনা যাচাই করা, ধাতুটাকে আগুনে ফেলে দেওয়া যাতে যা সোনা নয় তা পুড়ে যায়। সেখান থেকে শব্দটা পরীক্ষা বোঝায়, আর পরীক্ষা থেকে ধ্বংসের দিকে টেনে নেওয়া বোঝায়। এখানে বেছে নেওয়া শব্দটা সাধারণ ধোঁকা বা পথভ্রষ্ট করার শব্দ নয়। এটা সেই শব্দ যা বোঝায় কোনো জিনিসকে আগুনে ফেলে দেখা যে সেটা আসলে কী দিয়ে গড়া।"
          },
          {
            "en": "Then the grammar of the memory. The expulsion is in the perfect, a finished event, but the stripping inside it is in the imperfect: yanzi'u anhuma libasahuma, pulling their clothing off them. A completed episode is narrated with an ongoing verb, so the scene plays rather than reports. And his company is named qabiluhu, his kind, which the commentators gloss as his offspring and his troops.",
            "bn": "এবার স্মৃতিটার ব্যাকরণ। বের করে দেওয়ার কথাটা শেষ হয়ে যাওয়া ঘটনার রূপে, কিন্তু তার ভেতরের খুলে নেওয়াটা চলমান রূপে, ইয়ানযিউ আনহুমা লিবাসাহুমা, তাদের গা থেকে পোশাক টেনে খুলছে। শেষ হয়ে যাওয়া ঘটনা বলা হচ্ছে চলতি ক্রিয়াপদে, তাই দৃশ্যটা খবর হয়ে আসে না, চোখের সামনে চলতে থাকে। আর তার সঙ্গীদের বলা হয়েছে কাবীলুহু, তার জাত, যাকে মুফাসসিরগণ ব্যাখ্যা করেন তার বংশধর ও তার বাহিনী বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen From Where You Cannot See",
          "bn": "যেখান থেকে আপনি দেখেন না"
        },
        "p": [
          {
            "en": "Innahu yarakum huwa wa qabiluhu min haythu la tarawnahum. Ibn Kathir reads it as exactly what it says, a warning that this enemy sees you from a position you cannot look back from, and he draws the practical conclusion at once: take refuge with the One who sees him while he does not see Him. The verse hands over a disadvantage and, in the same breath, the direction to look for cover.",
            "bn": "ইন্নাহু ইয়ারাকুম হুয়া ওয়া কাবীলুহু মিন হাইসু লা তারাওনাহুম। ইবনু কাসীর একে যা বলা হয়েছে ঠিক তাই ধরেন, এই শত্রু এমন এক জায়গা থেকে তোমাদের দেখে যেখানে তোমাদের চোখ ফিরিয়ে দেওয়ার উপায় নেই। আর সঙ্গে সঙ্গেই কাজের কথাটা টেনে আনেন, আশ্রয় নাও তাঁর কাছে যিনি তাকে দেখেন অথচ সে তাঁকে দেখে না। আয়াতটি একদিকে দুর্বলতাটা ধরিয়ে দেয়, আর একই নিঃশ্বাসে আড়াল কোন দিকে তাও দেখিয়ে দেয়।"
          },
          {
            "en": "Is the invisibility absolute? Al-Qurtubi discusses it and the answer the reports give is narrower. The jinn are not seen in their own form, yet they appear in others, as one sound narration shows plainly. So what the verse establishes is an asymmetry of vantage, not a claim that they can never be encountered. The difference matters, because an absolute claim breeds a kind of dread the rest of the Quran spends its time dismantling.",
            "bn": "এই না-দেখাটা কি একেবারে চূড়ান্ত? কুরতুবী বিষয়টা আলোচনা করেন, আর বর্ণনাগুলো যে জবাব দেয় তা আরও সীমিত। জিনদের নিজেদের আকৃতিতে দেখা যায় না, তবে তারা অন্য আকৃতিতে সামনে আসে, একটি সহীহ বর্ণনা তা খোলাখুলি দেখিয়ে দেয়। তাই আয়াত যা প্রতিষ্ঠা করে তা হলো দেখার সুবিধার অসমতা, এই দাবি নয় যে তাদের সঙ্গে কখনো দেখা হতেই পারে না। তফাতটা জরুরি, কারণ চূড়ান্ত দাবি এমন এক আতঙ্ক জন্ম দেয় যা ভাঙতেই কুরআন বাকি সময়টা ব্যয় করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Enemy Does Not Have",
          "bn": "শত্রুর যা নেই"
        },
        "p": [
          {
            "en": "14:22 is the enemy's own testimony, delivered when the matter has been decided. Allah promised you truly and I promised you and broke it; I had no authority over you except that I called you and you answered me; so do not blame me, blame yourselves. Every claim of power is withdrawn by the one who made it, in front of the people who believed it.",
            "bn": "১৪:২২ আয়াত শত্রুর নিজের সাক্ষ্য, দেওয়া হচ্ছে ফয়সালা হয়ে যাওয়ার পর। আল্লাহ তোমাদের সত্য ওয়াদা দিয়েছিলেন, আমিও দিয়েছিলাম, আর আমি খেলাপ করেছি। তোমাদের উপর আমার কোনো জোর ছিল না, আমি শুধু ডেকেছিলাম আর তোমরা সাড়া দিয়েছিলে। তাই আমাকে দোষ দিয়ো না, নিজেদেরই দাও। ক্ষমতার দাবিটা যে করেছিল সে নিজেই তা তুলে নিচ্ছে, আর যারা তা বিশ্বাস করেছিল তাদের সামনেই।"
          },
          {
            "en": "16:99 says it from the other side: he has no authority over those who believe and rely upon their Lord. And 7:27 ends by naming whose allies the devils actually are, those who do not believe. So the verse gives an enemy with better sightlines and no jurisdiction. Reading the first half without the second produces a believer who is frightened of the air; reading both produces one who is careful about the door.",
            "bn": "১৬:৯৯ আয়াত কথাটা উল্টো দিক থেকে বলে, যারা ঈমান আনে আর নিজেদের রবের উপর ভরসা করে তাদের উপর তার কোনো জোর চলে না। আর ৭:২৭ আয়াত শেষ হয় শয়তানরা আসলে কাদের অভিভাবক তা বলে দিয়ে, যারা ঈমান আনে না তাদের। তাই আয়াতটি এমন এক শত্রু দেখায় যার নজর ভালো অথচ কোনো এখতিয়ার নেই। প্রথম অংশ পড়ে দ্বিতীয়টা না পড়লে তৈরি হয় এমন মুমিন যে বাতাসকে ভয় পায়। দুইটাই পড়লে তৈরি হয় এমন একজন যে দরজাটা নিয়ে সাবধান।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports From the Sunnah",
          "bn": "সুন্নাহর দুইটি বর্ণনা"
        },
        "p": [
          {
            "en": "Muslim relates from Abdullah ibn Mas'ud (RA) that the Prophet said there is not one of you but a companion from the jinn has been assigned to him. They asked whether this was so for him too. He said that it was, except that Allah had helped him against his, so that it only commanded him to good. The narration puts the nearness of 7:27 in the plainest possible terms.",
            "bn": "মুসলিম আবদুল্লাহ ইবনু মাসঊদ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, তোমাদের প্রত্যেকের সঙ্গেই জিনদের একজন সঙ্গী নিযুক্ত আছে। সাহাবীগণ জিজ্ঞেস করলেন, আপনার সঙ্গেও কি? তিনি ﷺ বললেন, আমার সঙ্গেও, তবে আল্লাহ আমাকে তার বিরুদ্ধে সাহায্য করেছেন, তাই সে আমাকে কেবল ভালো কাজেরই নির্দেশ দেয়। ৭:২৭ আয়াতের যে নৈকট্যের কথা, বর্ণনাটি তা একেবারে সোজা ভাষায় বলে দেয়।"
          },
          {
            "en": "Al-Bukhari relates from Abu Hurayrah (RA) that he was set to guard the collected zakah of Ramadan and caught someone taking from it on three nights. The third time the thief bought his release by teaching him a verse: recite Ayat al-Kursi when you go to your bed and a guardian from Allah will stay with you, and no devil will come near you until morning.",
            "bn": "বুখারী আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন, রমাযানের জমা করা যাকাতের পাহারায় তাঁকে রাখা হয়েছিল, আর তিন রাত ধরে তিনি একজনকে তা থেকে নিতে গিয়ে ধরে ফেলেন। তৃতীয় রাতে চোরটি একটি আয়াত শিখিয়ে দিয়ে ছাড়া পায়, বিছানায় যাওয়ার সময় আয়াতুল কুরসী পড়বে, তাহলে আল্লাহর পক্ষ থেকে একজন রক্ষক তোমার সঙ্গে থাকবে, আর সকাল পর্যন্ত কোনো শয়তান তোমার কাছে আসবে না।"
          },
          {
            "en": "The Prophet told him that the thief had spoken the truth to him though he was a liar, and that he had been speaking to a devil. Two things come out of the report at once. The tribe of 7:27 can put on a shape and be caught by an ordinary man, and the protection offered against them is a recitation any Muslim already has. Neither fact leaves room for helplessness.",
            "bn": "নবী ﷺ তাঁকে বললেন, সে তোমাকে সত্যি কথাই বলেছে যদিও সে মিথ্যাবাদী, আর তুমি এতক্ষণ একজন শয়তানের সঙ্গে কথা বলছিলে। বর্ণনাটি থেকে দুইটা জিনিস একসাথে বেরিয়ে আসে। ৭:২৭ আয়াতের সেই দলবল রূপ ধরতে পারে, আর সাধারণ একজন মানুষের হাতে ধরাও পড়তে পারে। আর তাদের বিরুদ্ধে যে পাহারা দেওয়া হয়েছে তা এমন একটা আয়াত যা প্রত্যেক মুসলিমের কাছেই আছে। কোনোটাই অসহায় বোধ করার জায়গা রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Enemy in Other Verses",
          "bn": "অন্য আয়াতে সেই শত্রু"
        },
        "p": [
          {
            "en": "35:6 gives the instruction in one line: Shaytan is an enemy to you, so take him as an enemy. The command is to hold an opinion, and to keep holding it, because the danger in 7:27 is not that we disbelieve in him but that we forget about him between incidents. 36:60 is the fifth address to the children of Adam and asks whether they were not enjoined never to worship him.",
            "bn": "৩৫:৬ আয়াত হুকুমটা এক লাইনে দিয়ে দেয়, শয়তান তোমাদের শত্রু, কাজেই তাকে শত্রু হিসেবেই ধরো। হুকুমটা একটা ধারণা পোষণ করার, আর সেটা ধরে রাখার। কারণ ৭:২৭ আয়াতের বিপদটা এই নয় যে আমরা তাকে অবিশ্বাস করি, বিপদটা হলো দুই ঘটনার মাঝখানে আমরা তার কথা ভুলে যাই। ৩৬:৬০ আয়াত আদম সন্তানদের প্রতি পঞ্চম সম্বোধন, আর প্রশ্ন করে, তোমাদের কি বলা হয়নি যে তার ইবাদত কোরো না?"
          },
          {
            "en": "2:168 and 2:169 add the shape of the approach. Do not follow the footsteps of Shaytan; he is a clear enemy to you; he commands you only to evil and immorality, and to say about Allah what you do not know. Footsteps are a good image for it. The first step is small enough that refusing it would look excessive, which is precisely how the second one becomes available.",
            "bn": "২:১৬৮ আর ২:১৬৯ আয়াত কাছে আসার ধরনটা জুড়ে দেয়। শয়তানের পদাঙ্ক অনুসরণ কোরো না, সে তোমাদের খোলাখুলি শত্রু, সে কেবল মন্দ আর অশ্লীল কাজের হুকুম দেয়, আর আল্লাহ সম্পর্কে না জেনে কথা বলতে বলে। পদাঙ্ক শব্দটা ঠিক জায়গায় বসে। প্রথম পা-টা এত ছোট যে সেটা ফিরিয়ে দিলে বাড়াবাড়ি মনে হয়। আর ঠিক এভাবেই দ্বিতীয় পা-টা রাখার সুযোগ তৈরি হয়ে যায়।"
          },
          {
            "en": "41:36 supplies the response at the moment it is needed: if an incitement from Shaytan provokes you, seek refuge in Allah, for He is the Hearing, the Knowing. 16:98 attaches the same words to the opening of recitation. Between them the Quran gives both the trigger and the habit, and it never once asks the believer to look for the enemy or to work out where he is standing.",
            "bn": "৪১:৩৬ আয়াত ঠিক দরকারের মুহূর্তে জবাবটা ধরিয়ে দেয়, শয়তানের পক্ষ থেকে কুমন্ত্রণা টের পেলে আল্লাহর আশ্রয় চাও, তিনি সর্বশ্রোতা সর্বজ্ঞ। ১৬:৯৮ আয়াত একই কথাগুলো জুড়ে দেয় তিলাওয়াত শুরু করার সঙ্গে। দুইটা মিলে কুরআন দিয়ে দেয় সংকেতটাও, অভ্যাসটাও। আর কোথাও একবারও মুমিনকে বলে না শত্রুকে খুঁজে বের করতে, বা সে কোন দিকে দাঁড়িয়ে আছে তা হিসাব করতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Changes in a Day",
          "bn": "দিনের মধ্যে যা বদলায়"
        },
        "p": [
          {
            "en": "Start with the method rather than the enemy. The first recorded attack went for what was covered, and it worked by making exposure look like an improvement. That pattern has not needed updating. Whatever in your life used to be private and guarded and is now simply available is where the verse is pointing, and the honest question is not who took the cover off but when you stopped putting it back.",
            "bn": "শত্রু নয়, কায়দাটা দিয়ে শুরু করুন। লিখিত ইতিহাসের প্রথম হামলাটা গিয়েছিল ঢাকা জিনিসের দিকে, আর কাজটা হয়েছিল খুলে যাওয়াকে উন্নতির মতো দেখিয়ে। এই ছকটা নতুন করে সাজাতে হয়নি। আপনার জীবনে যা একসময় আড়ালে আর পাহারায় ছিল আর এখন এমনিই খোলা পড়ে আছে, আয়াত সেদিকেই আঙুল তুলছে। আর সৎ প্রশ্নটা এই নয় যে আড়ালটা কে সরাল। প্রশ্নটা হলো, আপনি সেটা আবার রাখা কবে থেকে বন্ধ করলেন?"
          },
          {
            "en": "From where you do not see them is also a fair description of an hour. Most people have one stretch of the day that nobody observes, late at night or alone in a car or behind a screen with the door shut, and conduct in that stretch is the honest measure of the rest. The verse does not ask you to see into the unseen. It asks you to behave in the unwatched hour as you do in the watched one.",
            "bn": "যেখান থেকে তোমরা তাদের দেখো না, কথাটা দিনের একটা সময়েরও ঠিকঠাক বর্ণনা। বেশির ভাগ মানুষের দিনে এমন একটা সময় থাকে যা কেউ দেখে না, গভীর রাত, একা গাড়িতে, কিংবা দরজা বন্ধ করে পর্দার সামনে। ওই সময়ের চালচলনই বাকি সময়ের আসল মাপ। আয়াত আপনাকে অদৃশ্য দেখতে বলছে না। বলছে, যে সময়টা কেউ দেখে না সেখানেও ঠিক তেমন চলুন যেমন দেখার সময়ে চলেন।"
          },
          {
            "en": "And the remedy is in the verse before this one rather than in vigilance. 7:26 has already said that the garment of taqwa is the best garment, and taqwa is the one covering that cannot be pulled off from outside. Add to it the two habits the texts give: the words of refuge when a suggestion arrives, and Ayat al-Kursi at the bed. That is a whole defence, and none of it requires you to see anything.",
            "bn": "আর দাওয়াইটা পাহারায় নয়, এর আগের আয়াতেই আছে। ৭:২৬ আয়াত আগেই বলে দিয়েছে তাকওয়ার পোশাকই সবচেয়ে ভালো পোশাক। আর তাকওয়াই একমাত্র আবরণ যা বাইরে থেকে টেনে খোলা যায় না। এর সঙ্গে জুড়ে দিন বর্ণনায় দেওয়া দুইটা অভ্যাস, কুমন্ত্রণা এলে আশ্রয়ের কথাগুলো, আর বিছানায় যাওয়ার সময় আয়াতুল কুরসী। এটুকুই পুরো প্রতিরক্ষা, আর এর কোনোটার জন্যই আপনাকে কিছু দেখতে হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Refuge You Were Given",
          "bn": "আপনাকে দেওয়া আশ্রয়"
        },
        "p": [
          {
            "en": "The supplication the verse leads to is the one every reader already knows. A'udhu billahi min ash-shaytan ar-rajim, I take refuge with Allah from Shaytan the expelled. 16:98 commands it before recitation and 41:36 commands it the instant a suggestion arrives, which is the more demanding of the two, because it has to be said while you are still being tempted rather than afterwards.",
            "bn": "আয়াতটি যে দু'আর দিকে নিয়ে যায় সেটা প্রত্যেক পাঠকের জানা। আউযু বিল্লাহি মিনাশ শাইত্বানির রাজীম, অভিশপ্ত শয়তান থেকে আমি আল্লাহর আশ্রয় চাই। ১৬:৯৮ আয়াত তিলাওয়াতের আগে এটা বলতে বলে, আর ৪১:৩৬ আয়াত বলে কুমন্ত্রণা আসার সঙ্গে সঙ্গেই। দুইটার মধ্যে দ্বিতীয়টাই কঠিন, কারণ কথাটা বলতে হয় টান চলতে চলতেই, টান কেটে যাওয়ার পর নয়।"
          },
          {
            "en": "Muslim relates from Khawlah bint Hakim (RA) that whoever stops at a place and says a'udhu bi-kalimati-llahi-t-tammati min sharri ma khalaq, I take refuge in the perfect words of Allah from the evil of what He has created, nothing will harm him until he departs from that place. It is short, it fits a doorway or a hotel room or a hospital corridor, and it names the protection by the one thing that never fails.",
            "bn": "মুসলিম খাওলা বিনতে হাকীম (রাঃ) থেকে বর্ণনা করেন, কেউ কোথাও থেমে যদি বলে আউযু বিকালিমাতিল্লাহিত তাম্মাতি মিন শাররি মা খালাক, অর্থাৎ তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে আমি আল্লাহর পরিপূর্ণ কালিমার আশ্রয় চাই, তাহলে ওই জায়গা ছেড়ে যাওয়া পর্যন্ত কিছুই তার ক্ষতি করতে পারবে না। ছোট কথা, দরজায় দাঁড়িয়ে বা হোটেলের ঘরে বা হাসপাতালের করিডরে বলে ফেলা যায়, আর আশ্রয়টা চাওয়া হয় এমন এক জিনিসের নামে যা কখনো ব্যর্থ হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Hour Nobody Sees",
          "bn": "যে সময়টা কেউ দেখে না"
        },
        "p": [
          {
            "en": "What in your life used to be private and guarded and is now simply open, and what did the change get called at the time? Which hour of your day is the one nobody observes, and would you be content for the rest of your life to be judged by it? When a bad suggestion arrives, do you argue with it, sit with it a while, or say the words you were taught?",
            "bn": "আপনার জীবনে কোন জিনিসটা একসময় আড়ালে আর পাহারায় ছিল আর এখন এমনিই খোলা, আর তখন এই বদলটাকে কী নাম দেওয়া হয়েছিল? দিনের কোন সময়টা কেউ দেখে না, আর বাকি জীবনটা ওই সময় দিয়ে মাপা হলে আপনি কি খুশি থাকতেন? খারাপ কোনো খেয়াল এলে আপনি কি তার সাথে তর্ক করেন, কিছুক্ষণ বসে থাকেন, না যে কথাগুলো শেখানো হয়েছে সেগুলো বলেন?"
          },
          {
            "en": "The verse gives an enemy with better sightlines and no jurisdiction. Which half of that do you actually live by, and does your caution look more like care or more like dread? 7:26 names taqwa as the garment that cannot be stripped away. What would putting that one on in the morning, deliberately, actually consist of for you tomorrow?",
            "bn": "আয়াতটি এমন এক শত্রু দেখায় যার নজর ভালো অথচ কোনো এখতিয়ার নেই। এই দুই অর্ধেকের কোনটা ধরে আপনি আসলে চলেন, আর আপনার সাবধানতা দেখতে সতর্কতার মতো লাগে না আতঙ্কের মতো? ৭:২৬ আয়াত তাকওয়াকে বলে সেই পোশাক যা কেউ টেনে খুলতে পারে না। আগামীকাল সকালে ইচ্ছে করে সেই পোশাকটা পরা বলতে আপনার ক্ষেত্রে ঠিক কী কী বোঝাবে?"
          }
        ]
      }
    ]
  },
  "7:31": {
    "sections": [
      {
        "h": {
          "en": "Between a Rebuke and a Reply",
          "bn": "ভর্ৎসনা আর জবাবের মাঝখানে"
        },
        "p": [
          {
            "en": "7:28 states the problem this verse answers. When they commit an immorality they say, we found our fathers doing it, and Allah ordered us to it. The reply is immediate: Allah does not order immorality; do you say about Allah what you do not know? So the block opens with religion being used to license something, and it is that use of religion, rather than the act alone, that the passage sets about dismantling.",
            "bn": "৭:২৮ আয়াত সেই সমস্যাটা বলে দেয় যার জবাব এই আয়াত। তারা কোনো অশ্লীল কাজ করে বসলে বলে, আমাদের বাপ-দাদাদের এই কাজই করতে দেখেছি, আর আল্লাহই আমাদের এর হুকুম দিয়েছেন। জবাব আসে সঙ্গে সঙ্গে, আল্লাহ অশ্লীলতার হুকুম দেন না, তোমরা কি আল্লাহর ব্যাপারে এমন কথা বলছ যা জানো না? অংশটা শুরুই হয় দ্বীনকে কোনো কিছুর ছাড়পত্র বানানো দিয়ে। আর কাজটার চেয়ে দ্বীনের এই ব্যবহারটাকেই আয়াতগুলো ভেঙে ফেলতে নামে।"
          },
          {
            "en": "Muslim records from Ibn Abbas (RA) what lay behind it. People used to make tawaf of the House unclothed, and the commentators name that as the immorality of 7:28 and this verse as the answer given to it. That makes the occasion here an established one rather than a guess, and it fixes the sense of the command: the first thing take your adornment asks for is that you be dressed.",
            "bn": "এর পেছনে কী ছিল তা মুসলিম ইবনু আব্বাস (রাঃ) থেকে বর্ণনা করেন। মানুষ বিবস্ত্র হয়ে বাইতুল্লাহ তাওয়াফ করত, আর মুফাসসিরগণ সেটাকেই ৭:২৮ আয়াতের অশ্লীলতা বলেন আর এই আয়াতকে বলেন তার জবাব। তাই এখানকার শানে নুযূল অনুমান নয়, প্রতিষ্ঠিত। আর এতেই হুকুমের অর্থ পাকা হয়ে যায়, সাজসজ্জা নাও কথাটা সবার আগে যা চায় তা হলো আপনি পোশাক পরা থাকুন।"
          },
          {
            "en": "The verses around it hold the balance. 7:29 commands justice and the turning of the whole face to Him at every place or time of prostration. 7:30 divides the guided from those who took devils as allies while thinking themselves guided. Then 7:31, and then 7:32, which asks who forbade the adornment of Allah that He produced for His servants. One verse commands covering, the next forbids forbidding, and 7:33 finally lists what He did prohibit.",
            "bn": "চারপাশের আয়াতগুলো ভারসাম্যটা ধরে রাখে। ৭:২৯ আয়াত ন্যায়ের হুকুম দেয়, আর প্রত্যেক সলাতে পুরো মুখ তাঁর দিকে ফেরাতে বলে। ৭:৩০ আয়াত হেদায়াতপ্রাপ্তদের আলাদা করে তাদের থেকে যারা শয়তানদের অভিভাবক বানিয়ে নিজেদের সঠিক পথে ভাবছে। এরপর ৭:৩১, আর তারপর ৭:৩২ আয়াত, যা প্রশ্ন করে, আল্লাহ তাঁর বান্দাদের জন্য যে সৌন্দর্য বের করেছেন তা হারাম করল কে। এক আয়াত ঢাকতে বলে, পরেরটা হারাম করাকে নিষেধ করে, আর ৭:৩৩ আয়াত শেষে তালিকা দেয় তিনি আসলে কী কী নিষেধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Zinah, and What It Covers",
          "bn": "যীনাত এবং তা যা ঢাকে"
        },
        "p": [
          {
            "en": "Zinah is what beautifies a thing. In this surah the word appears here and again in 7:32, and the two uses pull in the same direction. At-Tabari reads the zinah of 7:31 as the thiyab, the garments, on the strength of the occasion, so the floor of the command is that you be covered and the ceiling is that you be presentable. It is one word holding a minimum and an aspiration at once.",
            "bn": "যীনাত মানে যা কোনো কিছুকে সুন্দর করে। এই সূরায় শব্দটি এখানে আর ৭:৩২ আয়াতে এসেছে, আর দুই জায়গাতেই টানটা একই দিকে। ইমাম তাবারী শানে নুযূলের জোরে ৭:৩১ আয়াতের যীনাতকে সিয়াব অর্থাৎ পোশাক ধরেন। তাই হুকুমের মেঝেটা হলো আপনি ঢাকা থাকুন, আর ছাদটা হলো আপনি পরিপাটি থাকুন। একটাই শব্দ, আর তার ভেতরেই সর্বনিম্ন সীমা আর আকাঙ্ক্ষা দুইটাই ধরা।"
          },
          {
            "en": "Inda kulli masjid is read in two ways because masjid is a place of prostration before it is a building. Some of the commentators take it as at every place of prayer and some as at every prayer, and translations follow one or the other; the app's own renderings differ here. Nothing turns on the disagreement in practice. Either reading puts the command exactly where a person is least likely to think about how they look.",
            "bn": "ইনদা কুল্লি মাসজিদ কথাটির দুই রকম পাঠ আছে, কারণ মাসজিদ ইমারত হওয়ার আগে সাজদাহর জায়গা। কোনো মুফাসসির একে ধরেন প্রতিটি নামাযের জায়গায়, কেউ ধরেন প্রতিটি নামাযে। অনুবাদকরাও কেউ একদিকে যান কেউ অন্যদিকে, এই অ্যাপের অনুবাদ দুইটিও এখানে আলাদা। কাজের বেলায় এই মতভেদে কিছু আসে যায় না। যে পাঠই নিন, হুকুমটা ঠিক সেখানেই গিয়ে বসে যেখানে মানুষ নিজের চেহারার কথা সবচেয়ে কম ভাবে।"
          },
          {
            "en": "Then two imperatives of permission, kulu washrabu, eat and drink, and a single boundary: wa la tusrifu. Israf comes from s-r-f, going past the limit proper to a thing, and it is not only a matter of quantity. Going past the lawful is israf, and so is going past the need. The verse never says how much is too much. It hands you the word and leaves the measuring to you.",
            "bn": "এরপর অনুমতির দুইটি আদেশ, কুলূ ওয়াশরাবূ, খাও আর পান করো, আর একটিমাত্র সীমানা, ওয়া লা তুসরিফূ। ইসরাফ শব্দের মূল সীন-র-ফা, কোনো জিনিসের জন্য নির্ধারিত সীমা ছাড়িয়ে যাওয়া। ব্যাপারটা শুধু পরিমাণের নয়। হালালের সীমা পেরিয়ে যাওয়াও ইসরাফ, আবার প্রয়োজনের সীমা পেরিয়ে যাওয়াও। কতটা হলে বেশি হয়ে গেল আয়াত তা বলে দেয় না। শব্দটা আপনার হাতে দিয়ে মাপার কাজটা আপনার উপরই ছেড়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Readings of the Command",
          "bn": "হুকুমের তিনটি পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi works the verse as a jurist. He treats it among the proofs that covering the awrah is a condition of the prayer rather than merely a manner of it, and he draws from it the recommendation of one's better clothes for the mosque and for Jumuah. The argument is simple enough to state: if a command to adorn yourself is attached to the place of prostration, the bare minimum cannot be what was intended.",
            "bn": "কুরতুবী আয়াতটি নিয়ে ফকীহর মতো কাজ করেন। নামাযে সতর ঢাকা কেবল আদব নয়, শর্ত, এই মতের দলিলগুলোর মধ্যে তিনি এই আয়াতকেও রাখেন। আর এখান থেকেই বের করেন মসজিদে ও জুমুআয় নিজের ভালো কাপড় পরার মুস্তাহাব হওয়া। যুক্তিটা বলা সহজ, সাজার হুকুম যদি সাজদাহর জায়গার সঙ্গে জুড়ে দেওয়া হয়, তাহলে কোনোরকমে সতর ঢাকাটাই উদ্দিষ্ট হতে পারে না।"
          },
          {
            "en": "Ibn Kathir keeps the occasion in front of the reader and then turns to the second half, where he brings the report that al-Bukhari had already placed at the head of a chapter in his book on clothing: eat, drink, wear and give in charity, so long as extravagance and self-display stay out of it. Ibn Abbas (RA) stands in the same chapter heading with the shorter form of it, eat what you wish and wear what you wish, so long as two things do not catch you. Two conditions on four permissions, and both conditions are about the heart rather than the amount.",
            "bn": "ইবনু কাসীর শানে নুযূলটা পাঠকের সামনে ধরে রাখেন, তারপর যান দ্বিতীয় অংশে। সেখানে তিনি সেই বর্ণনাটি আনেন যা বুখারী আগেই তাঁর পোশাক অধ্যায়ের এক পরিচ্ছেদের শিরোনামে বসিয়েছেন, খাও, পান করো, পরো আর দান করো, যতক্ষণ না তাতে অপচয় আর অহমিকা ঢুকে পড়ে। ওই একই শিরোনামে ইবনু আব্বাস (রাঃ)-এর ছোট কথাটাও আছে, যা ইচ্ছা খাও আর যা ইচ্ছা পরো, যতক্ষণ দুইটি জিনিস তোমাকে না ধরে। চারটি অনুমতির উপর দুইটি শর্ত, আর দুইটি শর্তই পরিমাণ নিয়ে নয়, অন্তর নিয়ে।"
          },
          {
            "en": "As-Sa'di gathers the verse into a single principle. It establishes the rights of the body, the right to be clothed and fed and watered, and then sets the one limit that keeps those rights from turning into a master, and he includes within israf both the crossing into what is forbidden and the taking of more than is needed. Where the commentators differ is only over the reach of masjid; on the limit they say one thing.",
            "bn": "সা'দী পুরো আয়াতটাকে একটি নীতিতে গুছিয়ে আনেন। আয়াতটি শরীরের হক প্রতিষ্ঠা করে, পোশাকের হক, খাওয়ার ও পান করার হক। তারপর একটিমাত্র সীমা টেনে দেয় যাতে এই হকগুলো নিজেই মালিক হয়ে না বসে। আর ইসরাফের ভেতর তিনি দুইটাই ধরেন, হারামের দিকে পা বাড়ানো আর প্রয়োজনের বেশি নেওয়া। মুফাসসিরদের মতভেদ কেবল মাসজিদ শব্দের পরিধি নিয়ে। সীমার ব্যাপারে তাঁরা এক কথাই বলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Love That Can Be Withheld",
          "bn": "যে ভালোবাসা তুলে নেওয়া যায়"
        },
        "p": [
          {
            "en": "The verse closes not with a threat of punishment but with a withdrawal: innahu la yuhibbu-l-musrifin, He does not love those who exceed. 6:141 ends on the identical clause, after telling people to eat of the fruit when it bears and give its due on harvest day. The same word, the same construction, the same closing line, attached both times to provision that has been granted before it was bounded.",
            "bn": "আয়াত শেষ হয় শাস্তির হুমকি দিয়ে নয়, তুলে নেওয়ার কথা দিয়ে, ইন্নাহু লা ইউহিব্বুল মুসরিফীন, তিনি সীমা ছাড়িয়ে যাওয়াদের ভালোবাসেন না। ৬:১৪১ আয়াতের শেষও হুবহু একই কথায়, ফল ধরলে তা খেতে আর ফসল তোলার দিনে তার হক আদায় করতে বলার পর। একই শব্দ, একই গড়ন, একই শেষ লাইন, আর দুইবারই তা জুড়ে আছে এমন রিযিকের সঙ্গে যা সীমা টানার আগেই দিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "7:55 uses the same shape earlier in this surah about supplication, saying He does not love the transgressors, so the pattern is consistent: a gift, a boundary, and a love that is promised to those who stay inside it. Sanction stated this way does something a threat does not. It makes the excess a matter between you and Someone, rather than a rule you have broken.",
            "bn": "এই সূরাতেই আগে ৭:৫৫ আয়াত দু'আ নিয়ে একই গড়ন ব্যবহার করে, বলে তিনি সীমালঙ্ঘনকারীদের ভালোবাসেন না। ছকটা তাই একই থাকে, দান, সীমানা, আর সেই ভালোবাসা যা সীমার ভেতরে থাকাদের জন্য কথা দেওয়া। এভাবে শাস্তির কথা বলায় এমন একটা কাজ হয় যা হুমকিতে হয় না। বাড়াবাড়িটা তখন আর ভাঙা নিয়মের ব্যাপার থাকে না, হয়ে যায় আপনার আর একজনের মধ্যেকার ব্যাপার।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Reports on the Limit",
          "bn": "সীমা নিয়ে দুইটি বর্ণনা"
        },
        "p": [
          {
            "en": "At-Tirmidhi and Ibn Majah record from al-Miqdam ibn Ma'dikarib (RA) that the Prophet said no human being fills a vessel worse than his stomach; enough for the son of Adam are morsels that keep his back straight; and if he must, then a third for his food, a third for his drink and a third for his breath. It is the most concrete gloss on wa la tusrifu that the Sunnah gives.",
            "bn": "তিরমিযী ও ইবনু মাজাহ মিকদাম ইবনু মা'দীকারিব (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, পেটের চেয়ে খারাপ কোনো পাত্র মানুষ ভরে না। আদম সন্তানের জন্য কয়েক লোকমাই যথেষ্ট, যা তার পিঠ সোজা রাখে। আর করতেই হলে এক তৃতীয়াংশ খাবারের জন্য, এক তৃতীয়াংশ পানীয়ের জন্য, আর এক তৃতীয়াংশ নিঃশ্বাসের জন্য। ওয়া লা তুসরিফূ কথাটার সবচেয়ে হাতে-ধরা ব্যাখ্যা সুন্নাহ এখানেই দেয়।"
          },
          {
            "en": "Beside it stands the report already quoted, which al-Bukhari set over a chapter on clothing: eat, drink, wear and give, without extravagance and without self-display. Notice that the two reports guard different flanks. One measures the appetite; the other watches the motive. A man can keep to a third of his stomach and still dress to be seen, and the verse has a word for each of them.",
            "bn": "এর পাশেই আছে আগে উদ্ধৃত সেই বর্ণনাটি, যা বুখারী পোশাক অধ্যায়ের এক পরিচ্ছেদের উপরে বসিয়েছেন, খাও, পান করো, পরো আর দান করো, অপচয় ছাড়া আর অহমিকা ছাড়া। খেয়াল করুন, দুইটি বর্ণনা দুই দিক পাহারা দেয়। একটি খিদের মাপ নেয়, আরেকটি নিয়তের দিকে তাকিয়ে থাকে। কেউ পেটের এক তৃতীয়াংশে থেমে থেকেও লোক দেখানোর জন্য সাজতে পারে, আর আয়াতটির কাছে দুইটারই জবাব আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Limit in Other Verses",
          "bn": "অন্য আয়াতে সেই সীমা"
        },
        "p": [
          {
            "en": "7:32 is the immediate sequel and it guards the other side of the road: say, who has forbidden the adornment of Allah which He produced for His servants, and the good things of provision? The question is put as a rebuke, which tells you how the Quran regards a piety that forbids what was given. 5:87 says it to the believers directly: do not forbid the good things Allah has made lawful for you, and do not transgress.",
            "bn": "৭:৩২ আয়াত সরাসরি পরের আয়াত, আর সে পাহারা দেয় রাস্তার অন্য পাশটা, বলো, আল্লাহ তাঁর বান্দাদের জন্য যে সৌন্দর্য আর পবিত্র রিযিক বের করেছেন তা হারাম করল কে? প্রশ্নটা ভর্ৎসনার সুরে করা, আর তাতেই বোঝা যায় দেওয়া জিনিস হারাম করে দেওয়া ধার্মিকতাকে কুরআন কী চোখে দেখে। ৫:৮৭ আয়াত কথাটা মুমিনদের সোজা বলে দেয়, আল্লাহ তোমাদের জন্য যা হালাল করেছেন তা হারাম কোরো না, আর সীমা ছেড়ো না।"
          },
          {
            "en": "17:26 and 17:27 take the excess in the direction of money. Give the relative his right, and the poor and the traveller, and do not squander; the squanderers are the brothers of the devils. That is the sharpest naming of waste anywhere in the Quran, and it arrives in the same breath as an instruction to give, which is the point. What is squandered was somebody's right before it was your discretion.",
            "bn": "১৭:২৬ আর ১৭:২৭ আয়াত বাড়াবাড়িটা টাকার দিকে নিয়ে যায়। আত্মীয়কে তার হক দাও, মিসকীন ও মুসাফিরকেও, আর অপব্যয় কোরো না। অপব্যয়কারীরা শয়তানের ভাই। অপচয়ের সবচেয়ে ধারালো নামকরণ কুরআনে এখানেই, আর সেটা আসে দান করার হুকুমের সঙ্গে একই নিঃশ্বাসে। কথাটা এখানেই। যা নষ্ট হলো সেটা আপনার খুশির জিনিস হওয়ার আগে কারো হক ছিল।"
          },
          {
            "en": "20:81 sets the same limit on a people who were being fed without effort: eat of the good things We have provided you, and do not transgress in it. Read the four together and a rule appears that is easy to state and hard to keep. Everything here is lawful, most of it is a favour, all of it has an edge, and the edge is nearer than appetite reports it to be.",
            "bn": "২০:৮১ আয়াত একই সীমা টানে এমন এক জাতির উপর যাদের বিনা পরিশ্রমে খাওয়ানো হচ্ছিল, আমি তোমাদের যে উত্তম রিযিক দিয়েছি তা খাও, আর এতে বাড়াবাড়ি কোরো না। চারটি আয়াত একসাথে পড়লে এমন একটা নিয়ম দাঁড়ায় যা বলা সহজ আর মানা কঠিন। এখানকার সবই হালাল, বেশির ভাগই নিয়ামত, সবটারই একটা কিনারা আছে, আর খিদে যত দূরে বলে কিনারাটা তার চেয়ে কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dressing for the One You Stand Before",
          "bn": "যাঁর সামনে দাঁড়াবেন তাঁর জন্য সাজা"
        },
        "p": [
          {
            "en": "Start with the prayer at home, because that is where the verse lands hardest. Most people would change their clothes before meeting someone whose opinion mattered to them, and most people do not change anything before standing in front of their Lord. The command is not that prayer clothes be expensive. It is that they be chosen. Anything chosen for the occasion, however plain, is already obedience to this verse.",
            "bn": "শুরু করুন ঘরের নামায দিয়ে, কারণ আয়াতটা সবচেয়ে জোরে এখানেই এসে পড়ে। যার মতামত দামি এমন কারো সঙ্গে দেখা করার আগে বেশির ভাগ মানুষ কাপড় বদলে নেয়। আর নিজের রবের সামনে দাঁড়ানোর আগে বেশির ভাগ মানুষ কিছুই বদলায় না। হুকুমটা এই নয় যে নামাযের কাপড় দামি হতে হবে। হুকুমটা হলো, সেটা বেছে নেওয়া হবে। উপলক্ষের জন্য বেছে নেওয়া যেকোনো কাপড়, যত সাদামাটাই হোক, এই আয়াতের আনুগত্য হয়ে গেল।"
          },
          {
            "en": "Then the limit, which needs locating honestly. For one person it is the plate, for another the wardrobe, for another the spending that is never totalled, or the hours given to a screen. Israf is not a category of sin that belongs to the rich. It is going past what a thing is for, and everyone is going past something. The useful question is which one you would least like named.",
            "bn": "এরপর সীমাটা, আর সেটা সৎভাবে খুঁজে বের করা দরকার। কারো জন্য সেটা খাবারের থালা, কারো জন্য আলমারি, কারো জন্য সেই খরচ যার যোগফল কখনো বসানো হয় না, কারো জন্য পর্দার সামনে কাটানো ঘণ্টাগুলো। ইসরাফ ধনীদের ভাগের কোনো গুনাহ নয়। কোনো জিনিস যে কাজের জন্য সেটা ছাড়িয়ে যাওয়াই ইসরাফ, আর সবাই কিছু না কিছু ছাড়িয়ে যাচ্ছে। কাজের প্রশ্নটা হলো, কোনটার নাম ধরে বলা হলে আপনার সবচেয়ে খারাপ লাগত।"
          },
          {
            "en": "And keep 7:32 in the same hand. There is a piety that tries to be safe by forbidding, that treats a good meal or a good garment as a spiritual risk, and this passage will not have it. The verse commands the adornment, commands the eating and the drinking, and then draws one line. A religion that only ever says no has not been read carefully, and this is one of the verses it skipped.",
            "bn": "আর ৭:৩২ আয়াতটাও একই হাতে ধরে রাখুন। এমন এক ধার্মিকতা আছে যা হারাম বানিয়ে নিরাপদ থাকতে চায়, ভালো খাবার বা ভালো কাপড়কে দেখে আত্মিক ঝুঁকি হিসেবে। এই অংশটা তা মানতে রাজি নয়। আয়াত সাজতে বলে, খেতে ও পান করতে বলে, তারপর একটামাত্র দাগ টানে। যে দ্বীন কেবল না বলতে জানে সেটা মন দিয়ে পড়া হয়নি, আর এই আয়াতটাই সেখানে বাদ পড়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for What You Put On",
          "bn": "যা পরছেন তার জন্য দু'আ"
        },
        "p": [
          {
            "en": "Abu Dawud records from Abu Sa'id al-Khudri (RA) that when the Prophet put on a new garment he would name it and say: O Allah, to You belongs the praise, You have clothed me with it; I ask You for its good and the good of what it was made for, and I take refuge with You from its evil and the evil of what it was made for. A garment is thanked for and questioned in the same breath.",
            "bn": "আবূ দাউদ আবূ সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ নতুন কাপড় পরলে তার নাম নিয়ে বলতেন, হে আল্লাহ, সব প্রশংসা আপনার, আপনিই আমাকে এটা পরিয়েছেন। আমি আপনার কাছে এর কল্যাণ চাই আর যে কাজের জন্য এটা বানানো হয়েছে তার কল্যাণ চাই। আর আশ্রয় চাই এর অকল্যাণ থেকে আর যে কাজের জন্য এটা বানানো হয়েছে তার অকল্যাণ থেকে। একটি কাপড়ের জন্য শোকরও আদায় হচ্ছে, আবার সেটাকে প্রশ্নও করা হচ্ছে, একই নিঃশ্বাসে।"
          },
          {
            "en": "The supplication is the verse in miniature. It receives the gift without apology, and it asks about the use before the use has begun. Said over a new coat or a pair of shoes it takes about ten seconds, and it quietly rules out both of the errors this passage names, the refusal of what was given and the excess that forgets who gave it.",
            "bn": "দু'আটি ছোট আকারে পুরো আয়াতটাই। দানটাকে কোনো অজুহাত ছাড়া গ্রহণ করে, আর ব্যবহার শুরু হওয়ার আগেই ব্যবহার নিয়ে প্রশ্ন তোলে। নতুন একটা জামা বা এক জোড়া জুতার উপর পড়তে দশ সেকেন্ড লাগে। আর এটুকুতেই এই অংশে বলা দুইটা ভুলই চুপচাপ কাটা পড়ে যায়, দেওয়া জিনিস ফিরিয়ে দেওয়া, আর কে দিয়েছেন তা ভুলিয়ে দেওয়া বাড়াবাড়ি।"
          }
        ]
      },
      {
        "h": {
          "en": "What You Put On Tomorrow",
          "bn": "কাল আপনি কী পরবেন"
        },
        "p": [
          {
            "en": "How do you dress for prayer at home, and how would you dress to meet someone whose good opinion you wanted? If the difference is large, what does the difference say? Where does your own excess actually sit, and would the people who live with you name the same place you just did? What have you quietly treated as forbidden that Allah made lawful, and what made that feel safer?",
            "bn": "ঘরে নামাযের জন্য আপনি কেমন পোশাক পরেন, আর যার সুনজর আপনি চান এমন কারো সঙ্গে দেখা করতে কেমন পরতেন? তফাতটা বড় হলে সেই তফাত কী বলে? আপনার নিজের বাড়াবাড়িটা আসলে কোথায় বসে আছে, আর যাঁরা আপনার সঙ্গে থাকেন তাঁরা কি সেই একই জায়গার নাম বলতেন? আল্লাহ হালাল করেছেন এমন কোন জিনিসকে আপনি চুপচাপ হারামের মতো রেখেছেন, আর সেটা করতে বেশি নিরাপদ মনে হলো কেন?"
          },
          {
            "en": "The verse ends with a love withheld rather than a punishment threatened. Does that reach you differently, and if it does, what does that tell you about how you have been hearing the rest of the commands? And if the third, the third and the third were kept for a week, what in your day would have to change to make room for it?",
            "bn": "আয়াত শেষ হয় শাস্তির হুমকি দিয়ে নয়, ভালোবাসা তুলে নেওয়ার কথা দিয়ে। কথাটা কি আপনার কাছে অন্যরকম পৌঁছায়? পৌঁছালে সেটা বাকি হুকুমগুলো আপনি এতদিন কীভাবে শুনে এসেছেন তার কী খবর দেয়? আর এক তৃতীয়াংশ, এক তৃতীয়াংশ আর এক তৃতীয়াংশের নিয়মটা এক সপ্তাহ মানতে গেলে আপনার দিনের কী কী বদলাতে হতো?"
          }
        ]
      }
    ]
  },
  "7:42-43": {
    "sections": [
      {
        "h": {
          "en": "The Turn After the Fire",
          "bn": "আগুনের বর্ণনার পর মোড়"
        },
        "p": [
          {
            "en": "Surah al-A'raf is Makkan, and this stretch of it stages the Day of Judgement as two facing parties. 7:36 names those who deny Our verses and are arrogant toward them as the companions of the Fire. 7:40 says the gates of heaven will not be opened for them, and that they will not enter Paradise until a camel enters the eye of a needle. 7:41 gives them a bed of Hell with coverings above them. Then 7:42 opens with a single adversative, and the whole scene turns over.",
            "bn": "সূরা আল-আরাফ মাক্কী, আর এর এই অংশটা কিয়ামতের দিনকে সাজায় মুখোমুখি দুই দল হিসেবে। ৭:৩৬ আয়াত যারা আল্লাহর আয়াত অস্বীকার করে আর সেগুলোর ব্যাপারে ঔদ্ধত্য দেখায় তাদের নাম দেয় জাহান্নামের বাসিন্দা। ৭:৪০ আয়াত বলে, তাদের জন্য আকাশের দরজা খুলবে না, আর সূঁচের ছিদ্রে উট না ঢোকা পর্যন্ত তারা জান্নাতেও ঢুকবে না। ৭:৪১ আয়াত তাদের জন্য রাখে জাহান্নামের বিছানা আর মাথার উপরে আগুনের আচ্ছাদন। তারপর ৭:৪২ আয়াত শুরু হয় একটিমাত্র বিপরীতবাচক শব্দ দিয়ে, আর গোটা দৃশ্যটা উল্টে যায়।"
          },
          {
            "en": "The reversal is precise rather than approximate. Those were arrogant; these believed. Those found no gate opened; these are the companions of the Garden. Those had coverings of fire above them; these have rivers running beneath them. Both groups are told they will abide eternally, in the same word. The surah then keeps the two parties within earshot of each other. In 7:44 the people of the Garden call across to the people of the Fire, and in 7:46 men on the elevations stand where both can be seen.",
            "bn": "উল্টে যাওয়াটা আন্দাজে নয়, মিলিয়ে মিলিয়ে। ওরা ঔদ্ধত্য দেখিয়েছিল, এরা ঈমান এনেছে। ওদের জন্য কোনো দরজা খোলেনি, এরাই জান্নাতের অধিবাসী। ওদের মাথার উপর ছিল আগুনের আচ্ছাদন, এদের পায়ের নিচে বইছে ঝর্ণা। দুই দলকেই বলা হয়েছে তারা চিরকাল থাকবে, একই শব্দে। এরপর সূরাটি দুই দলকে এমন দূরত্বে রাখে যেখানে একে অন্যের কথা শোনা যায়। ৭:৪৪ আয়াতে জান্নাতবাসীরা জাহান্নামবাসীদের ডেকে কথা বলে, আর ৭:৪৬ আয়াতে আরাফের উঁচু জায়গায় কিছু লোক দাঁড়িয়ে থাকে যেখান থেকে দুই দিকই দেখা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Parenthesis About Capacity",
          "bn": "মাঝপথে সাধ্যের কথা"
        },
        "p": [
          {
            "en": "Between the subject and its predicate the verse inserts a clause that belongs to nobody in the scene: la nukallifu nafsan illa wus'aha, We charge no soul except within its capacity. Grammatically it interrupts. Those who believed and did righteous deeds, those are the companions of Paradise is already a complete sentence without it. Something is being answered that the listener has not asked aloud, and the placement is exactly where the answer gets its force.",
            "bn": "উদ্দেশ্য আর বিধেয়র মাঝখানে আয়াতটি এমন একটি বাক্যাংশ ঢুকিয়ে দেয় যা দৃশ্যের কারো কথা নয়: লা নুকাল্লিফু নাফসান ইল্লা উসআহা, আমি কারো উপর তার সাধ্যের অতিরিক্ত দায়িত্ব চাপাই না। ব্যাকরণের দিক থেকে এটা কথার মাঝখানে বাধা। যারা ঈমান এনেছে আর নেক আমল করেছে, তারাই জান্নাতের অধিবাসী, এটুকুতেই বাক্য পূর্ণ হয়ে যায়। শ্রোতা মুখে তোলেনি এমন একটা প্রশ্নের জবাব দেওয়া হচ্ছে, আর জবাবের জোরটা আসছে ঠিক এই জায়গা থেকেই।"
          },
          {
            "en": "Wus' is not the outer limit a person reaches before breaking. It is the room a person has, the margin that sits comfortably inside their strength, and Arabic has other words for utmost exertion which this verse does not use. The sentence has just made righteous deeds a condition of the Garden, and a listener could easily hear that as a bar set impossibly high. The clause lowers nothing about the condition. It removes the fear that had gathered around it.",
            "bn": "উসআ মানে ভেঙে পড়ার ঠিক আগের শেষ সীমা নয়। এর মানে হাতে থাকা জায়গা, শক্তির ভেতরে যতটুকুতে স্বচ্ছন্দে কুলায় ততটুকু। আরবিতে সর্বোচ্চ পরিশ্রম বোঝানোর আলাদা শব্দ আছে, এই আয়াত সেটা ব্যবহার করেনি। বাক্যটি মাত্রই নেক আমলকে জান্নাতের শর্ত বানিয়েছে, আর শ্রোতার কানে সেটা অসম্ভব উঁচু দাঁড়ি বলে ঠেকতে পারত। বাক্যাংশটি শর্তের মান একটুও নামায়নি। শর্তটাকে ঘিরে যে ভয় জমেছিল সেটাই সরিয়ে দিয়েছে।"
          },
          {
            "en": "The same rule appears elsewhere with different work to do. 2:286 states it as Allah does not charge a soul except within its capacity, opening the closing supplication of al-Baqarah. 23:62 attaches it to a record that speaks with truth. 6:152 places it among commands about the orphan's property and about full measure and weight. Here alone it stands inside a description of Paradise, and here, as in 6:152 and 23:62, it is first person: We do not charge. The One handing out the Garden states His own terms in His own voice.",
            "bn": "একই নীতি কুরআনের অন্য জায়গাতেও আছে, তবে সেখানে তার কাজ আলাদা। ২:২৮৬ আয়াতে এটি আসে আল্লাহ কারো উপর তার সাধ্যের অতিরিক্ত কিছু চাপান না বলে, আর সেখান থেকেই সূরা বাকারার শেষ দু'আ শুরু হয়। ২৩:৬২ আয়াত একে জুড়ে দেয় সেই কিতাবের সঙ্গে যা সত্য বলে। ৬:১৫২ আয়াত একে বসায় ইয়াতিমের সম্পদ আর মাপ-ওজন পুরো করার হুকুমের মাঝে। কেবল এখানেই কথাটা দাঁড়িয়ে আছে জান্নাতের বর্ণনার ভেতরে, আর এখানে আল্লাহ কথাটা বলছেন নিজের মুখেই, ৬:১৫২ আর ২৩:৬২ আয়াতের মতোই: আমি চাপাই না। যিনি জান্নাত দিচ্ছেন, শর্তটা তিনি নিজের মুখেই বলছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Drawn Out of the Breasts",
          "bn": "বুকের ভেতর থেকে টেনে তোলা"
        },
        "p": [
          {
            "en": "Naza'na is from n-z-', a verb for pulling something out by its root rather than for wiping a surface clean. What is pulled out is ghill, the settled rancour that lies underneath. It is not the open quarrel and not the flare of anger, for which Arabic has other words, but what stays in the chest long after the argument has finished. It is the grudge a person carries without announcing it, and often without admitting it.",
            "bn": "নাযাআনা শব্দটি ন-য-আ ধাতু থেকে, যা গোড়াসুদ্ধ টেনে তোলার কাজ বোঝায়, উপর থেকে মুছে ফেলার কাজ নয়। যা টেনে তোলা হয় তার নাম গিল্ল, ভেতরে থিতিয়ে বসা বিদ্বেষ। এটা প্রকাশ্য ঝগড়াও নয়, হঠাৎ জ্বলে ওঠা রাগও নয়; আরবিতে ওগুলোর আলাদা শব্দ আছে। ঝগড়া মিটে যাওয়ার অনেক পরেও যা বুকে রয়ে যায়, এটা সেটাই। মানুষ এই রাগ মুখে না এনে বয়ে বেড়ায়, অনেক সময় নিজের কাছেও স্বীকার না করে।"
          },
          {
            "en": "The verb form is worth noticing. Everything here still lies ahead, and every translation rightly puts it in the future, yet the Arabic reports it as done. We removed, they said, they were called are all in the perfect. Arabic regularly uses the completed form for what is certain rather than only for what is past, and the effect here is that the clearing of the chests is settled business before the people described have even entered.",
            "bn": "ক্রিয়ার রূপটা খেয়াল করার মতো। এখানে যা বলা হচ্ছে তার সবটাই ঘটবে সামনে, অনুবাদেও তা ভবিষ্যতেই আসে, অথচ আরবিতে কাজগুলো বসেছে হয়ে যাওয়া কাজের রূপে। আমি দূর করে দিয়েছি, তারা বলেছে, তাদের ডেকে জানানো হয়েছে, তিনটিই অতীতের রূপ। আরবিতে যা নিশ্চিত তা বোঝাতেও অতীতের রূপ ব্যবহার হয়, কেবল যা ঘটে গেছে তা বোঝাতেই নয়। এখানে ফল দাঁড়ায় এই, যাদের কথা বলা হচ্ছে তারা ঢোকার আগেই বুক পরিষ্কার করার কাজটা চুকে যাওয়া কাজ হিসেবে জানানো হয়ে গেছে।"
          },
          {
            "en": "Then comes their speech, and its grammar closes a door behind them. Wa ma kunna linahtadiya lawla an hadana Allah, and we would never have been guided had Allah not guided us. The lam in linahtadiya is the lam of denial, which does not merely report that something did not happen but rules out that it ever could have. They are not being modest once they are safely inside. They are stating what was already true of them on the road.",
            "bn": "এরপর আসে তাদের কথা, আর সেই কথার ব্যাকরণ পেছনের দরজাটা বন্ধ করে দেয়। ওয়া মা কুন্না লিনাহতাদিয়া লাওলা আন হাদানাল্লাহ, আল্লাহ পথ না দেখালে আমরা কিছুতেই পথ পেতাম না। লিনাহতাদিয়া শব্দের লাম হলো অস্বীকারের লাম, যা কেবল বলে না যে ঘটেনি, বরং বলে ঘটা সম্ভবই ছিল না। নিরাপদে ভেতরে ঢুকে তাঁরা বিনয় দেখাচ্ছেন না। পথে থাকতেই তাঁদের সম্পর্কে যা সত্য ছিল, সেটাই বলছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Mufassirun Read It",
          "bn": "মুফাসসিরগণ যেভাবে পড়েছেন"
        },
        "p": [
          {
            "en": "At-Tabari reads the capacity clause as Allah's own statement that what He required of the people of the Garden was never beyond them, so that nobody arrives there able to complain that the terms were unfair. Ibn Kathir treats it as encouragement set deliberately beside the mention of righteous deeds, so that the hearer understands the door to stand within reach of ordinary effort rather than of heroic effort. Neither of them reads the interruption as a digression.",
            "bn": "আত-তাবারী সাধ্যের কথাটিকে পড়েন আল্লাহর নিজের ঘোষণা হিসেবে যে, জান্নাতবাসীদের কাছে তিনি যা চেয়েছিলেন তা কখনোই তাদের সাধ্যের বাইরে ছিল না। ফলে সেখানে পৌঁছে কেউ বলতে পারবে না শর্তটা অন্যায় ছিল। ইবনু কাসীর একে দেখেন উৎসাহ হিসেবে, যা ইচ্ছে করেই নেক আমলের উল্লেখের পাশে বসানো হয়েছে, যাতে শ্রোতা বোঝেন দরজাটা অসাধারণ সাধনার নয়, সাধারণ চেষ্টারই নাগালে। দুজনের কেউই এই বাধাটিকে প্রসঙ্গান্তর বলে ধরেননি।"
          },
          {
            "en": "On the ghill, al-Qurtubi collects the readings of the early commentators that the removal is total, so that no resident of the Garden keeps anything of what he once held against another. As-Sa'di reads the two verses as a chain with no loose link: faith, then deeds that were always within capacity, then a chest emptied of rancour, then the praise this produces. Ibn Kathir notes that what they praise Allah for is the guidance, and not the reward in front of them.",
            "bn": "গিল্ল প্রসঙ্গে আল-কুরতুবী আগের মুফাসসিরদের মত জড়ো করেন যে, দূর করাটা পুরোপুরি; জান্নাতের কোনো বাসিন্দার ভেতর অন্যের বিরুদ্ধে জমা রাগের কিছুই আর থাকে না। আস-সাদী দুটি আয়াতকে পড়েন এমন এক শেকল হিসেবে যার কোনো কড়া ঢিলে নয়: ঈমান, তারপর সাধ্যের ভেতরে থাকা আমল, তারপর বিদ্বেষমুক্ত বুক, তারপর তা থেকে জন্ম নেওয়া হামদ। ইবনু কাসীর ধরিয়ে দেন, তাঁরা আল্লাহর প্রশংসা করছেন হিদায়াতের জন্য, সামনে রাখা পুরস্কারের জন্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Narrations Beside It",
          "bn": "পাশে দুটি হাদীস"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Sa'id al-Khudri (RA) that the Prophet ﷺ said the believers, once delivered from the Fire, are detained on a bridge between the Garden and the Fire, where they are settled with one another for the wrongs done between them in the world, until, when they are cleansed and purified, they are given permission to enter the Garden. The verse says the breasts are emptied. The narration says where and when.",
            "bn": "আল-বুখারী আবূ সাঈদ খুদরী (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, মুমিনরা আগুন থেকে রক্ষা পাওয়ার পর জান্নাত ও জাহান্নামের মাঝখানে এক সেতুর উপর আটকে থাকবে। সেখানে দুনিয়ায় একে অন্যের প্রতি করা যুলুমের হিসাব চুকিয়ে দেওয়া হবে। এরপর যখন তারা পরিষ্কার ও পবিত্র হয়ে যাবে, তখনই তাদের জান্নাতে ঢোকার অনুমতি দেওয়া হবে। আয়াত বলে বুক খালি করে দেওয়া হয়। হাদীস বলে কোথায় আর কখন।"
          },
          {
            "en": "Al-Bukhari and Muslim both record from Abu Hurayrah (RA) that the Prophet ﷺ said none of you will be admitted to the Garden by his deed. They asked whether that included him, and he said not even him, unless Allah should cover him with mercy from Himself. Set beside the announcement at the end of 7:43, that you have been made to inherit it for what you used to do, the two look opposed until the preposition is read carefully.",
            "bn": "আল-বুখারী ও মুসলিম দুজনেই আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, তোমাদের কাউকে তার আমল জান্নাতে ঢোকাবে না। সাহাবীরা জিজ্ঞেস করলেন, আপনাকেও নয় কি। তিনি বললেন, আমাকেও নয়, তবে আল্লাহ যদি নিজের রহমত দিয়ে আমাকে ঢেকে নেন। ৭:৪৩ আয়াতের শেষের ঘোষণার পাশে রাখলে, অর্থাৎ তোমাদের আমলের ফলে তোমরা এর উত্তরাধিকারী হয়েছ, দুটোকে পরস্পরবিরোধী মনে হয়; যতক্ষণ না বাক্যের 'বি' অক্ষরটা মন দিয়ে পড়া হয়।"
          },
          {
            "en": "The classical resolution turns on which ba' is meant. Deeds are the cause Allah appointed for entry, which is what the verse states; they are not a price that buys the Garden at its true worth, which is what the narration denies. The verse makes the point before any commentator does, since the very people told they inherited it for what they did are the ones who say they would never have been guided at all.",
            "bn": "পুরনো মুফাসসিরদের সমাধান দাঁড়িয়ে আছে এই প্রশ্নে, 'বি' অক্ষরটা কোন অর্থে। আমল হলো সেই কারণ যা আল্লাহ প্রবেশের জন্য ঠিক করে দিয়েছেন, আয়াত এটাই বলছে। আমল জান্নাতের পুরো দাম নয় যা দিয়ে জান্নাত কেনা যায়, হাদীস এটাই অস্বীকার করছে। কোনো মুফাসসির বলার আগেই আয়াতটি নিজেই কথাটা বলে দেয়, কারণ যাদের বলা হচ্ছে আমলের ফলে তোমরা উত্তরাধিকারী হয়েছ, তাঁরাই বলছেন আল্লাহ না দেখালে তাঁরা পথই পেতেন না।"
          }
        ]
      },
      {
        "h": {
          "en": "Verses That Sit Alongside",
          "bn": "পাশে বসা আয়াতগুলো"
        },
        "p": [
          {
            "en": "15:47 carries the same clause about the breasts and adds what it is for: brothers, on couches facing one another. Facing is the whole point, since you cannot sit across from someone you have not forgiven. 43:72 closes with the same announcement in different words, keeping the Arabic closing clause exactly, that this is the Garden you were made to inherit for what you used to do. 39:74 gives another first sentence from the same mouths, praise to Allah who fulfilled His promise to us.",
            "bn": "১৫:৪৭ আয়াতে বুকের ব্যাপারে একই কথা আছে, সঙ্গে আছে তা কীসের জন্য: ভাই ভাই হয়ে মুখোমুখি আসনে বসা। মুখোমুখি বসাটাই আসল কথা, কারণ যাকে মাফ করেননি তার সামনে বসা যায় না। ৪৩:৭২ আয়াত শেষ হয় সেই একই ঘোষণায়। কথার গড়ন আলাদা, তবে আরবিতে শেষ কথাটি অবিকল এক: এই জান্নাতের উত্তরাধিকারী তোমাদের করা হয়েছে তোমাদের আমলের ফলে। ৩৯:৭৪ আয়াতে সেই একই মুখ থেকে আসে আরেকটি প্রথম বাক্য, সব প্রশংসা আল্লাহর যিনি আমাদের সঙ্গে করা ওয়াদা পূর্ণ করেছেন।"
          },
          {
            "en": "Two more are worth hearing. 35:34 has them saying praise to Allah who removed sorrow from us, which names a second thing lifted off them at the gate. And 7:53, ten verses after ours in this same surah, puts the Garden's own sentence into the mouths of the others, who say the messengers of our Lord came with the truth while asking to be sent back. The same admission is made twice in one surah, once in gratitude and once far too late.",
            "bn": "আরও দুটি শোনার মতো। ৩৫:৩৪ আয়াতে তাঁরা বলেন, সব প্রশংসা আল্লাহর যিনি আমাদের থেকে দুঃখ দূর করে দিয়েছেন; দরজায় তাঁদের কাঁধ থেকে নামানো দ্বিতীয় জিনিসটার নাম এখানে বলা হলো। আর এই সূরারই ৭:৫৩ আয়াত, আমাদের আয়াত থেকে দশ আয়াত পরে, জান্নাতবাসীদের বাক্যটাই তুলে দেয় অন্যদের মুখে। তারাও বলে, আমাদের প্রতিপালকের রসূলগণ সত্য নিয়েই এসেছিলেন, আর সঙ্গে সঙ্গে ফিরে যাওয়ার আবেদন করে। এক সূরায় একই স্বীকারোক্তি দুবার, একবার কৃতজ্ঞতায় আর একবার অনেক দেরিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrying It Into a Week",
          "bn": "সপ্তাহের ভেতরে নিয়ে যাওয়া"
        },
        "p": [
          {
            "en": "Take the capacity clause first, because it is the one most often misused. It does not promise that life will never feel heavy; it says that what Allah obliges you to do fits inside what you are able to do. So when a duty feels impossible, the verse hands you a question rather than an excuse. Is this beyond my capacity, or beyond my current habit? The honest answer is usually available within a minute of asking it.",
            "bn": "আগে সাধ্যের কথাটা ধরুন, কারণ এটারই ভুল ব্যবহার হয় সবচেয়ে বেশি। এই কথা এমন ওয়াদা করে না যে জীবন কখনো ভারী লাগবে না। এটা বলে, আল্লাহ যা ফরয করেছেন তা আপনার সামর্থ্যের ভেতরেই ধরে। তাই কোনো দায়িত্ব অসম্ভব মনে হলে আয়াতটি আপনার হাতে অজুহাত নয়, একটা প্রশ্ন ধরিয়ে দেয়। এটা কি সত্যিই আমার সাধ্যের বাইরে, নাকি কেবল আমার চলতি অভ্যাসের বাইরে? সৎ জবাবটা সাধারণত প্রশ্ন করার এক মিনিটের মধ্যেই হাতে আসে।"
          },
          {
            "en": "Then take the ghill, and notice that the verse treats it as cargo rather than as a mood. Cargo can be listed. Most people carrying a grudge can name the person in a second, which means the work here is not discovery but decision. Clearing it may be a message sent, a debt written off, or a du'a made by name for someone you would rather not pray for. The Garden is described as a place where none of this is still being carried.",
            "bn": "এবার গিল্লের কথা ধরুন, আর খেয়াল করুন আয়াতটি একে মেজাজ নয়, বোঝা হিসেবে দেখছে। বোঝার তালিকা করা যায়। যে মানুষ বিদ্বেষ বয়ে বেড়ায় সে এক সেকেন্ডেই নামটা বলে দিতে পারে, অর্থাৎ এখানে কাজটা খুঁজে বের করার নয়, সিদ্ধান্ত নেওয়ার। বোঝা নামানোর চেহারা হতে পারে একটা বার্তা পাঠানো, পাওনা ছেড়ে দেওয়া, কিংবা যার জন্য দু'আ করতে মন চায় না তার নাম ধরে দু'আ করা। জান্নাতের বর্ণনাই এমন জায়গার, যেখানে এসবের কিছুই আর কারো কাঁধে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer From the Verse",
          "bn": "আয়াতের ভেতর থেকে দু'আ"
        },
        "p": [
          {
            "en": "The verse contains its own supplication, already written out as praise. Al-hamdu lillahi alladhi hadana lihadha wa ma kunna linahtadiya lawla an hadana Allah: praise to Allah who guided us to this, and we would never have been guided had Allah not guided us. It is spoken in the Garden, but nothing stops a believer from saying it now, at any moment when he catches himself about to take the credit for his own guidance.",
            "bn": "আয়াতটির ভেতরেই দু'আ আছে, আর তা লেখা হয়ে আছে হামদের চেহারায়। আলহামদু লিল্লাহিল্লাযী হাদানা লিহাযা ওয়া মা কুন্না লিনাহতাদিয়া লাওলা আন হাদানাল্লাহ; সব প্রশংসা আল্লাহর, যিনি আমাদের এ পথ দেখিয়েছেন, তিনি না দেখালে আমরা কিছুতেই পথ পেতাম না। কথাটা বলা হচ্ছে জান্নাতে, তবে একজন মুমিনের এখনই তা বলতে বাধা নেই। নিজের হিদায়াতের কৃতিত্ব নিজে নিতে যাচ্ছেন বলে যেই মুহূর্তে ধরা পড়ে যান, সেই মুহূর্তেই বলা চলে।"
          },
          {
            "en": "A short supplication in the vocabulary of these two verses may be added to that, offered as such and not as a transmitted wording. O Allah, You charge no soul beyond its capacity, so never let me plead that I was given more than I could carry. Draw out of my chest whatever I am keeping against Your servants, and do it here, before I am made to stand and face them. And let the first thing I say about every good You give me be that You guided me to it.",
            "bn": "এর সঙ্গে এই দুই আয়াতের শব্দ ধরে ছোট একটি প্রার্থনা যোগ করা যায়, যা বর্ণিত দু'আ নয়, এভাবেই পেশ করা। হে আল্লাহ, আপনি কারো উপর তার সাধ্যের বাইরে বোঝা চাপান না; আমাকে কখনো এই অজুহাত তুলতে দেবেন না যে বইতে পারার চেয়ে বেশি আমার ঘাড়ে পড়েছিল। আপনার বান্দাদের বিরুদ্ধে যা কিছু আমি বুকে জমিয়ে রেখেছি, তা টেনে বের করে নিন, আর এখানেই নিন; তাদের মুখোমুখি দাঁড় করানোর আগেই। আর আপনার দেওয়া প্রতিটি ভালোর ব্যাপারে আমার প্রথম কথাটি যেন হয়, আপনিই আমাকে সেদিকে পথ দেখিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for the Gate",
          "bn": "দরজার সামনে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "Which obligation have I quietly filed as beyond me, and if the parenthesis in 7:42 is true, what does that filing say about me rather than about the obligation? When was the last time I did something difficult and found afterwards that it had been inside my range all along? And which part of my religion do I treat as reserved for people with more time, more knowledge or more strength than I happen to have?",
            "bn": "কোন হুকুমটাকে আমি চুপচাপ আমার সাধ্যের বাইরে বলে আলাদা করে রেখেছি, আর ৭:৪২ আয়াতের মাঝখানের কথাটা সত্য হলে সেই আলাদা করে রাখা হুকুমটার ব্যাপারে নয়, আমার ব্যাপারেই কী বলে? শেষ কবে কঠিন একটা কাজ করে ফেলার পর টের পেয়েছি, ওটা তো বরাবরই আমার নাগালের ভেতরেই ছিল? আর দ্বীনের কোন অংশটাকে আমি এমন লোকদের জন্য তোলা বলে ভাবি যাদের সময়, ইলম বা শক্তি আমার চেয়ে বেশি?"
          },
          {
            "en": "Who is the person I would least like to meet on that bridge, and what would it take to settle the matter here instead? When I recount a good thing that happened to me, whose name ends up in the sentence? And if the people of the Garden begin by praising the guidance rather than the gift, what does the order of my own thanks tell me about what I think I was actually given?",
            "bn": "ওই সেতুর উপর কার সঙ্গে দেখা হোক আমি সবচেয়ে কম চাই, আর সেটা এখানেই মিটিয়ে ফেলতে কী লাগত? নিজের সঙ্গে ঘটা ভালো কোনো ঘটনা বলতে বসলে বাক্যের ভেতর শেষ পর্যন্ত কার নাম থাকে? আর জান্নাতবাসীরা যদি উপহারের আগে হিদায়াতের প্রশংসা দিয়ে শুরু করেন, তাহলে আমার শুকরিয়ার ক্রম আমাকে কী জানায়, আমি আসলে কী পেয়েছি বলে ভাবি সেটা নিয়ে?"
          }
        ]
      }
    ]
  },
  "7:54": {
    "sections": [
      {
        "h": {
          "en": "Where It Stands in the Surah",
          "bn": "সূরার ভেতর এর জায়গা"
        },
        "p": [
          {
            "en": "Surah al-A'raf is Makkan and long, and this verse sits at a joint in it. 7:52 says We brought them a Book detailed by knowledge, guidance and mercy for a people who believe. 7:53 then shows the deniers on the day its outcome arrives, asking for intercessors or for a second chance on earth. Then, with no transition at all, 7:54 turns from what those people will lose to the plain question of who their Lord actually is: inna rabbakum Allah.",
            "bn": "সূরা আল-আরাফ মাক্কী আর দীর্ঘ, আর এই আয়াতটি বসে আছে তার একটি জোড়ের মুখে। ৭:৫২ আয়াত বলে, আমি তাদের কাছে এমন কিতাব এনেছিলাম যা পূর্ণ জ্ঞানের ভিত্তিতে বিশদ, মুমিনদের জন্য হিদায়াত ও রহমত। ৭:৫৩ আয়াত এরপর দেখায় অস্বীকারকারীদের, যেদিন সেই কিতাবের বলা পরিণাম এসে যাবে; তারা সুপারিশকারী খোঁজে, নয়তো দুনিয়ায় ফিরে যাওয়ার আরেকটা সুযোগ চায়। তারপর কোনো ভূমিকা ছাড়াই ৭:৫৪ আয়াত তাদের ক্ষতির কথা থেকে সরে গিয়ে সোজা প্রশ্নটায় আসে, তোমাদের প্রতিপালক আসলে কে: ইন্না রাব্বাকুমুল্লাহ।"
          },
          {
            "en": "What follows matters as much as what precedes. 7:55 says call upon your Lord in humility and in secret, and 7:56 forbids corruption in the earth after it has been set right. A description of the Maker is placed immediately before a command to speak to Him. The surah teaches first and instructs second, and it keeps going in that direction: 7:57 sends the winds as good tidings before His mercy, and 7:58 contrasts good land with bad.",
            "bn": "পরে যা আসে তার গুরুত্ব আগের অংশের চেয়ে কম নয়। ৭:৫৫ আয়াত বলে, তোমাদের প্রতিপালককে ডাকো বিনয়ের সঙ্গে আর গোপনে; ৭:৫৬ আয়াত নিষেধ করে শান্তি প্রতিষ্ঠার পর যমীনে ফাসাদ ছড়াতে। স্রষ্টার পরিচয় বসানো হয়েছে ঠিক তাঁকে ডাকার হুকুমের আগে। সূরাটি আগে শেখায়, তারপর আদেশ দেয়, আর সেই ধারাই চলতে থাকে। ৭:৫৭ আয়াত রহমতের আগে সুসংবাদ হিসেবে বাতাস পাঠায়, আর ৭:৫৮ আয়াত উৎকৃষ্ট আর নিকৃষ্ট জমির তুলনা টানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Six Days of Making",
          "bn": "ছয় দিনের সৃষ্টি"
        },
        "p": [
          {
            "en": "He created the heavens and the earth in six days. The Quran repeats this in several places and nowhere explains why a creation needing no time at all was given a duration. Ibn Kathir observes that He was able to bring it about in the blink of an eye and did not, and reads the six days as a lesson in deliberateness taught to creatures who are always in a hurry. Nothing in the verse suggests effort; the days describe the making, not the Maker.",
            "bn": "তিনি ছয় দিনে আসমান ও যমীন সৃষ্টি করেছেন। কুরআন কথাটা কয়েক জায়গায় বলে, কিন্তু কোথাও ব্যাখ্যা করে না কেন যে সৃষ্টির কোনো সময়ই লাগে না তাকে একটা সময়সীমা দেওয়া হলো। ইবনু কাসীর বলেন, তিনি চাইলে চোখের পলকে তা করতে পারতেন, করেননি; আর ছয় দিনকে তিনি পড়েন ধীরস্থিরতার পাঠ হিসেবে, যা শেখানো হচ্ছে সদা তাড়াহুড়ো করা সৃষ্টির জন্য। আয়াতে পরিশ্রমের কোনো ইঙ্গিত নেই; দিনগুলো সৃষ্টিকর্মের বর্ণনা, স্রষ্টার নয়।"
          },
          {
            "en": "The Quran gives one breakdown of those days, in Surah Fussilat. 41:9 names two days for the earth, 41:10 speaks of the mountains set on it, its blessing and its measured provision determined in four days, and 41:12 completes seven heavens in two. Ibn Kathir reads those four days as including the first two, so the total stays six. Al-Qurtubi raises the question a careful reader will already have: our day is measured by a sun that is itself created inside the six, so the measure cannot be ours. He reports the early view that these are days of a length known to Allah.",
            "bn": "এই দিনগুলোর একটা বিভাজন কুরআন দেয় সূরা ফুসসিলাতে। ৪১:৯ আয়াত যমীনের জন্য বলে দুই দিন, ৪১:১০ আয়াত বলে তার বুকে পাহাড় বসানোর কথা, তাতে বরকত দেওয়ার কথা আর চার দিনে নির্দিষ্ট পরিমাণ রিযিক ঠিক করে দেওয়ার কথা, আর ৪১:১২ আয়াত দুই দিনে সাত আকাশ পূর্ণ করে। ইবনু কাসীর ওই চার দিনের ভেতরেই প্রথম দুই দিন ধরে নেন, তাই যোগফল ছয়ই থাকে। আল-কুরতুবী সেই প্রশ্নটা তোলেন যা মনোযোগী পাঠকের মাথায় আগেই এসেছে: আমাদের দিন মাপা হয় সূর্য দিয়ে, আর সূর্য নিজেই তো এই ছয়ের ভেতরে সৃষ্ট। তাই মাপটা আমাদের হতে পারে না। তিনি আগের আলিমদের মত তুলে ধরেন, এ দিনগুলোর দৈর্ঘ্য আল্লাহই জানেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Throne, and How It Is Read",
          "bn": "আরশ, আর তা কীভাবে পড়তে হয়"
        },
        "p": [
          {
            "en": "Thumma istawa 'ala al-'arsh: then He established Himself above the Throne. At-Tabari glosses istawa here with 'ala and irtafa'a, rose high over it. The earliest generations affirmed the wording exactly as revealed, declined to ask how, and refused to substitute an image borrowed from the thrones they had seen. The same discipline governs 57:4, which carries this clause and then says He is with you wherever you are, and 2:255, where the Kursi is affirmed without being pictured.",
            "bn": "সুম্মাসতাওয়া আলাল আরশ: অতঃপর তিনি আরশে সমুন্নত হয়েছেন। আত-তাবারী এখানে ইস্তাওয়ার অর্থ করেন আলা ও ইরতাফাআ দিয়ে, অর্থাৎ উপরে সমুন্নত হওয়া। প্রথম যুগের মুসলিমরা শব্দটাকে যেমন নাযিল হয়েছে ঠিক তেমনই মেনে নিয়েছেন, কীভাবে সেই প্রশ্ন তোলেননি, আর নিজেদের দেখা সিংহাসনের ছবি এর জায়গায় বসাতে রাজি হননি। একই নিয়ম চলে ৫৭:৪ আয়াতেও, যেখানে এই কথাটির পরই বলা হয় তিনি তোমাদের সঙ্গে আছেন যেখানেই তোমরা থাকো; আর ২:২৫৫ আয়াতেও, যেখানে কুরসী মানা হয় কোনো ছবি না এঁকেই।"
          },
          {
            "en": "Notice where the Throne is placed in the sentence. It comes before the night, before the sun, the moon and the stars, so the reader is given the height first and the working parts afterwards. 11:7 adds one detail this verse withholds, that His Throne had been upon water before the heavens and the earth were made. The Quran says just enough on this subject to establish majesty, and it stops at precisely the point where curiosity would like it to continue.",
            "bn": "বাক্যের ভেতর আরশের জায়গাটা খেয়াল করুন। রাতের আগে, সূর্য চাঁদ আর তারার আগে তার উল্লেখ। ফলে পাঠক আগে পান উচ্চতা, তারপর পান যন্ত্রপাতি। ১১:৭ আয়াত এমন একটি কথা যোগ করে যা এই আয়াত চেপে যায়, আসমান ও যমীন বানানোর আগে তাঁর আরশ ছিল পানির উপর। এ বিষয়ে কুরআন ততটুকুই বলে যতটুকুতে মহিমা প্রতিষ্ঠিত হয়, আর ঠিক সেখানেই থেমে যায় যেখান থেকে কৌতূহল আরও শুনতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Night, Day, and the Chase",
          "bn": "রাত, দিন আর ছোটাছুটি"
        },
        "p": [
          {
            "en": "Yughshi al-layla an-nahara yatlubuhu hathithan. The verb ghashiya takes two objects, and careful translators render the covering in both directions, because the Arabic allows the night to be laid over the day and the day over the night. What is not in doubt is the clause that follows. One pursues the other, and hathith is the pursuit of something that will not slow down. The lexicons give it as swift and unrelenting, the running of someone who is never allowed to rest.",
            "bn": "ইউগশিল লাইলান নাহারা ইয়াতলুবুহু হাসীসা। গাশিয়া ক্রিয়াটি দুটি কর্ম নেয়, তাই সতর্ক অনুবাদকরা ঢেকে দেওয়ার কাজটা দুই দিক থেকেই অনুবাদ করেন; আরবি ভাষা দিনের উপর রাত বিছানোরও সুযোগ দেয়, রাতের উপর দিন বিছানোরও। যেটা নিয়ে কোনো সংশয় নেই তা হলো পরের অংশ। একজন আরেকজনের পেছনে ছোটে, আর হাসীস মানে এমন কিছুর পেছনে ছোটা যা থামবে না। অভিধান শব্দটির অর্থ দেয় দ্রুত ও বিরামহীন, এমন দৌড় যাতে জিরোনোর অনুমতি নেই।"
          },
          {
            "en": "39:5 settles the direction by stating both outright: He wraps the night over the day and wraps the day over the night. And 36:40 supplies the limit that keeps the chase from ever finishing, since the night does not overtake the day and the sun is not able to reach the moon, each swimming in an orbit. Pursuit without capture, on a timetable nobody involved agreed to. That is the picture 7:54 compresses into a single clause and then leaves behind.",
            "bn": "৩৯:৫ আয়াত দিকের প্রশ্নটা মিটিয়ে দেয় দুটোই স্পষ্ট করে বলে: রাত দিনকে ঢেকে নেয়, আর দিন ঢেকে নেয় রাতকে। আর ৩৬:৪০ আয়াত সেই সীমাটা এনে দেয় যার কারণে ছোটাছুটিটা কখনো শেষ হয় না, কারণ রাত দিনকে ছাড়িয়ে যেতে পারে না আর সূর্যের পক্ষে চাঁদকে ধরে ফেলা সম্ভব নয়; প্রত্যেকে নিজ কক্ষপথে সাঁতরে চলেছে। ধাওয়া আছে, ধরা নেই, আর সময়সূচিতে জড়িত কেউই রাজি হয়নি। এই ছবিটাই ৭:৫৪ আয়াত এক টুকরো বাক্যে গুছিয়ে রেখে এগিয়ে যায়।"
          },
          {
            "en": "Then the bodies themselves: wash-shamsa wal-qamara wan-nujuma musakhkharatin bi-amrih. Musakhkharat is the passive participle of sakhkhara, to press something into service. The word is used of a thing set to work under another's authority, never of a thing that volunteers. Bi-amrih then ties the whole arrangement to a command rather than to a habit. 16:12 says the same of night, day, sun, moon and stars together, and 13:2 adds that each of them runs for a term already named.",
            "bn": "এরপর আসে বস্তুগুলো নিজেরাই: ওয়াশ শামসা ওয়াল কামারা ওয়ান নুজূমা মুসাখখারাতিম বিআমরিহ। মুসাখখারাত শব্দটি সাখখারা ধাতুর কর্মবাচ্য বিশেষণ, যার অর্থ কাউকে কাজে লাগানো। শব্দটি এমন জিনিসের বেলায় চলে যাকে অন্যের কর্তৃত্বে কাজে বসানো হয়েছে, নিজে থেকে এগিয়ে আসা কারো বেলায় নয়। বিআমরিহি এরপর গোটা ব্যবস্থাটাকে বেঁধে দেয় হুকুমের সঙ্গে, অভ্যাসের সঙ্গে নয়। ১৬:১২ আয়াত রাত, দিন, সূর্য, চাঁদ ও তারার ব্যাপারে একই কথা বলে, আর ১৩:২ আয়াত যোগ করে, প্রত্যেকেই চলছে আগে থেকে ঠিক করা নির্দিষ্ট সময় পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Creation and Command",
          "bn": "সৃষ্টি আর হুকুম"
        },
        "p": [
          {
            "en": "Then the verse stops the listener before delivering its point: ala lahu al-khalqu wal-amr. Ala is a particle of alerting, the Arabic way of saying that what comes next must not be walked past. Khalq is the bringing into being; amr is the ordering, and the word covers the command that runs the heavens and the command that runs a life. As-Sa'di reads the pairing as the argument for worship itself, since the One who alone creates is the One who alone commands.",
            "bn": "এরপর আয়াতটি নিজের মূল কথাটা বলার আগে শ্রোতাকে থামিয়ে দেয়: আলা লাহুল খালকু ওয়াল আমর। আলা হলো সতর্ক করার অব্যয়, আরবিতে এভাবেই বলা হয় যে সামনের কথাটা পাশ কাটিয়ে যাওয়া চলবে না। খালক মানে অস্তিত্ব দেওয়া; আমর মানে হুকুম চালানো, আর শব্দটি আসমান চালানোর হুকুম আর একটা জীবন চালানোর হুকুম দুটোকেই ধরে। আস-সাদী এই জোড়টাকে পড়েন ইবাদতের দলিল হিসেবেই, কারণ যিনি একাই সৃষ্টি করেন হুকুমও একা তাঁরই।"
          },
          {
            "en": "The clause also answers the rest of the surah in advance. 7:70 will show a people refusing to leave what their fathers worshipped, and 7:71 will call those gods mere names which they and their fathers named, for which Allah sent down no authority. A god who created nothing has nothing to command with. The verse then closes on tabaraka Allahu rabbu al-alamin. That verb occurs nine times in the Quran, and in every one of them the subject is Allah or His name.",
            "bn": "এই কথাটি সূরার বাকি অংশের জবাবও আগেভাগে দিয়ে রাখে। ৭:৭০ আয়াত দেখাবে এমন এক জাতিকে যারা বাপ-দাদার উপাস্য ছাড়তে রাজি নয়, আর ৭:৭১ আয়াত সেই উপাস্যদের বলবে কেবল কতগুলো নাম, যা তারা আর তাদের বাপ-দাদারাই রেখেছে, যার পক্ষে আল্লাহ কোনো প্রমাণ নামাননি। যে উপাস্য কিছুই সৃষ্টি করেনি, হুকুম দেওয়ার কিছু তার হাতে নেই। এরপর আয়াতটি শেষ হয় তাবারাকাল্লাহু রাব্বুল আলামীন দিয়ে। এই ক্রিয়াটি কুরআনে নয় জায়গায় এসেছে, আর প্রতিবারই তার কর্তা আল্লাহ কিংবা তাঁর নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Narration About the Sun",
          "bn": "সূর্য নিয়ে একটি হাদীস"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Abu Dharr (RA) that the Prophet ﷺ asked him at sunset whether he knew where the sun goes. Abu Dharr (RA) said that Allah and His Messenger ﷺ know best. He was told that it travels until it prostrates beneath the Throne, then asks permission and is given permission, and that a day is coming when it will ask and not be permitted, and will be told to return from where it came.",
            "bn": "আল-বুখারী ও মুসলিম দুজনেই আবূ যার (রাঃ) থেকে বর্ণনা করেন, সূর্যাস্তের সময় নবী ﷺ তাঁকে জিজ্ঞেস করেছিলেন, তিনি জানেন কি সূর্য কোথায় যায়। আবূ যার (রাঃ) বললেন, আল্লাহ ও তাঁর রসূল ﷺ ভালো জানেন। তখন তাঁকে জানানো হলো, সূর্য চলতে চলতে আরশের নিচে গিয়ে সিজদায় পড়ে, তারপর অনুমতি চায় আর অনুমতি পায়। আরও জানানো হলো, এমন এক দিন আসছে যেদিন সে অনুমতি চাইবে কিন্তু পাবে না, বরং তাকে বলা হবে যেখান থেকে এসেছ সেখানেই ফিরে যাও।"
          },
          {
            "en": "The narration was given with 36:38 recited alongside it, the sun runs toward its stopping point, that is the determination of the Exalted in Might, the Knowing. Two things in it bear directly on our verse. The Throne named in 7:54 appears again as the place everything reports to, and the subjection of the sun turns out to be permission renewed rather than a law running by itself. Musakhkharatin bi-amrih is not a description of machinery. It is a description of obedience.",
            "bn": "এই হাদীসের সঙ্গে তিলাওয়াত করা হয়েছিল ৩৬:৩৮ আয়াত, সূর্য চলছে তার নির্ধারিত অবস্থানের দিকে, এটাই মহাপরাক্রমশালী সর্বজ্ঞের নির্ধারণ। এর দুটি দিক সরাসরি আমাদের আয়াতের সঙ্গে জড়িত। ৭:৫৪ আয়াতে যে আরশের নাম এসেছে, এখানে সেটাই সেই জায়গা যেখানে সবকিছুকে হাজিরা দিতে হয়। আর সূর্যের অধীনতা দাঁড়ায় বারবার নেওয়া অনুমতি হিসেবে, নিজে নিজে চলতে থাকা কোনো নিয়ম হিসেবে নয়। মুসাখখারাতিম বিআমরিহি যন্ত্রের বর্ণনা নয়। এটা আনুগত্যের বর্ণনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Throne Returns",
          "bn": "আরশ যেখানে আবার ফেরে"
        },
        "p": [
          {
            "en": "10:3 opens with the same words as ours, that your Lord is Allah who created the heavens and the earth in six days and then established Himself above the Throne, and it adds that He arranges the matter and that no one intercedes without His permission. 32:4 states the same and then removes every protector and intercessor besides Him. 25:59 states it and answers with a name, ar-Rahman, then tells the hearer to ask about Him one who is informed.",
            "bn": "১০:৩ আয়াত শুরু হয় আমাদের আয়াতের মতো একই কথায়, তোমাদের প্রতিপালক সেই আল্লাহ যিনি ছয় দিনে আসমান ও যমীন সৃষ্টি করেছেন, তারপর আরশে সমুন্নত হয়েছেন; সঙ্গে যোগ করে, তিনিই যাবতীয় বিষয় পরিচালনা করেন আর তাঁর অনুমতি ছাড়া কেউ সুপারিশ করে না। ৩২:৪ আয়াত একই কথা বলে, তারপর তাঁকে ছাড়া সব অভিভাবক ও সুপারিশকারীকে সরিয়ে দেয়। ২৫:৫৯ আয়াত কথাটা বলে আর জবাব দেয় একটি নাম দিয়ে, আর-রাহমান; এরপর শ্রোতাকে বলে, এ বিষয়ে যিনি জানেন তাঁকে জিজ্ঞেস করো।"
          },
          {
            "en": "Two more fill out the picture. 13:2 has Him raising the heavens without pillars you can see, then the Throne, then the sun and the moon each running for a named term, and it closes on why: so that you may be certain of meeting your Lord. And 6:73 puts creation beside the word that makes it, saying that He created the heavens and the earth in truth, and on the day He says Be, it is. Every one of these ends somewhere other than in astronomy.",
            "bn": "আরও দুটি ছবিটা পূর্ণ করে। ১৩:২ আয়াতে তিনি স্তম্ভ ছাড়াই আকাশ উঁচু করে রাখেন, তারপর আসে আরশ, তারপর সূর্য ও চাঁদ, প্রত্যেকে নির্দিষ্ট সময় পর্যন্ত চলছে; আর আয়াতটি শেষ হয় কারণ দিয়ে, যাতে তোমরা প্রতিপালকের সঙ্গে সাক্ষাতের ব্যাপারে দৃঢ় বিশ্বাসী হতে পারো। আর ৬:৭৩ আয়াত সৃষ্টির পাশে বসায় সেই কথাটিকে যা সৃষ্টি করে, বলে যে তিনি যথাযথভাবে আসমান ও যমীন সৃষ্টি করেছেন, আর যেদিন তিনি বলবেন হও, সেদিনই তা হয়ে যাবে। এগুলোর একটিও জ্যোতির্বিদ্যায় গিয়ে শেষ হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living It, and Asking From It",
          "bn": "জীবনে চালানো, আর তা থেকে চাওয়া"
        },
        "p": [
          {
            "en": "The practical edge of this verse is the clause about creation and command, because that is the one people actually divide. It is common enough to believe firmly that Allah made everything and then to run a week as though the timetable, the money and the arguments were governed by some other authority. The verse refuses the split in one short clause. Whatever you are already willing to concede about who made you decides what you owe about how you live.",
            "bn": "এই আয়াতের কাজের দিকটা হলো সৃষ্টি আর হুকুমের কথাটি, কারণ মানুষ আসলে এই দুটোকেই ভাগ করে ফেলে। এমনটা খুবই দেখা যায় যে কেউ দৃঢ়ভাবে মানেন সবকিছু আল্লাহই বানিয়েছেন, অথচ তাঁর গোটা সপ্তাহ চলে এমনভাবে যেন সময়সূচি, টাকা আর ঝগড়াগুলোর মালিক অন্য কেউ। আয়াতটি ছোট একটি বাক্যে এই ভাগাভাগি নাকচ করে দেয়। আপনাকে কে বানিয়েছেন সে ব্যাপারে আপনি যতটা মেনে নিয়েছেন, কীভাবে চলবেন সে ব্যাপারে আপনার দায়ও ঠিক ততটাই।"
          },
          {
            "en": "There is a second, quieter use. The verse hands a believer a nightly object lesson that costs nothing: the sky is on the schedule the verse describes, whether or not anyone looks. Watching a sunset with this verse in mind for one minute is a real act of worship, and 3:190-191 makes exactly that the mark of people of understanding, who remember Allah standing, sitting and on their sides, and think about the making of the heavens and the earth.",
            "bn": "আরেকটি ব্যবহার আছে, আরও নিঃশব্দ। আয়াতটি প্রতিদিন রাতে একজন মুমিনের হাতে বিনা খরচে একটা পাঠ ধরিয়ে দেয়: কেউ তাকাক বা না তাকাক, আকাশ এই আয়াতের বলা সময়সূচি ধরেই চলছে। এই আয়াত মনে রেখে এক মিনিট সূর্যাস্ত দেখা সত্যিকারের ইবাদত, আর ৩:১৯০-১৯১ আয়াত ঠিক এটাকেই বুদ্ধিমানদের চিহ্ন বলে, যাঁরা দাঁড়িয়ে, বসে ও শুয়ে আল্লাহকে স্মরণ করেন আর আসমান-যমীনের সৃষ্টি নিয়ে ভাবেন।"
          },
          {
            "en": "For the asking, Muslim records from Abu Hurayrah (RA) a supplication the Prophet ﷺ taught for lying down, which begins by addressing Allah as Lord of the heavens and Lord of the earth and Lord of the Mighty Throne, our Lord and the Lord of everything. The verse's own vocabulary can be added to it as a short request offered as such: You hold the creation and the command, so do not let me keep one and refuse the other, and put my day under the same order that holds the sun.",
            "bn": "চাওয়ার জন্য: মুসলিম আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন এমন একটি দু'আ যা নবী ﷺ শুতে যাওয়ার সময় শিখিয়েছেন, যার শুরুতে আল্লাহকে ডাকা হয় আসমানের রব, যমীনের রব আর মহান আরশের রব, আমাদের রব আর সবকিছুর রব বলে। এর সঙ্গে এই আয়াতের শব্দ ধরে ছোট একটি চাওয়া যোগ করা যায়, বর্ণিত দু'আ হিসেবে নয়, নিজের কথা হিসেবেই: সৃষ্টি আর হুকুম দুটোই আপনার হাতে; একটা মেনে নিয়ে অন্যটা অস্বীকার করার সুযোগ আমাকে দেবেন না, আর যে হুকুমে সূর্য চলে সেই হুকুমেই আমার দিনটাকে চালান।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions Under the Sky",
          "bn": "আকাশের নিচে কিছু প্রশ্ন"
        },
        "p": [
          {
            "en": "The sun keeps an appointment it never negotiated. Which of my own appointments with Allah keeps slipping, and what exactly is winning the argument when it slips? Where in my week do I behave as though some area of my life were outside His command while remaining inside His creation? And if someone read my calendar without hearing me speak, whose authority would they conclude I was living under?",
            "bn": "সূর্য এমন এক সময়ানুবর্তিতা মেনে চলে যা নিয়ে সে কখনো দরকষাকষি করেনি। আল্লাহর সঙ্গে আমার কোন সময়টা বারবার হাতছাড়া হয়, আর হাতছাড়া হওয়ার সময় আসলে কোন যুক্তিটা জিতে যায়? সপ্তাহের কোথায় আমি এমন আচরণ করি যেন জীবনের কোনো একটা এলাকা তাঁর সৃষ্টির ভেতরে থেকেও তাঁর হুকুমের বাইরে? আর কেউ যদি আমার কথা না শুনে কেবল আমার দিনপঞ্জি পড়ত, সে কার কর্তৃত্বে আমি চলি বলে ধরে নিত?"
          },
          {
            "en": "The verse ends in blessing rather than in argument. When did I last praise Allah for something I had not asked Him for and had not noticed arriving? What in the ordinary machinery of a day, light, air, a body that works, have I filed as background? And if the Throne is where even the sun reports, what am I still treating as a matter nobody is watching?",
            "bn": "আয়াতটি শেষ হয় তর্ক দিয়ে নয়, বরকতের ঘোষণা দিয়ে। শেষ কবে আমি এমন কিছুর জন্য আল্লাহর প্রশংসা করেছি যা আমি চাইনি আর আসার সময় খেয়ালও করিনি? দিনের সাধারণ চলাচলের কোন জিনিসগুলোকে আমি পটভূমি বলে সরিয়ে রেখেছি, যেমন আলো, বাতাস, চলতে পারা একটা শরীর? আর আরশ যদি সেই জায়গা হয় যেখানে সূর্যকেও হাজিরা দিতে হয়, তাহলে কোন কাজটাকে আমি এখনো এমন ভাবি যে ওটা কেউ দেখছে না?"
          }
        ]
      }
    ]
  },
  "7:55-56": {
    "sections": [
      {
        "h": {
          "en": "After the Verse of Creation and Command",
          "bn": "সৃষ্টি ও হুকুমের আয়াতের পরে"
        },
        "p": [
          {
            "en": "The command to call on Allah follows straight after one of the Quran's great creation passages. 7:54 declares that your Lord is Allah, who created the heavens and the earth in six days and then rose over the Throne; He makes the night cover the day, chasing it swiftly; and the sun, the moon and the stars are subjected by His command. His is the creation and the command. Then, without pause: call upon your Lord. The One just described is the One addressed.",
            "bn": "আল্লাহকে ডাকার নির্দেশটি এসেছে কুরআনের অন্যতম মহৎ সৃষ্টি-বর্ণনার ঠিক পরেই। 7:54 ঘোষণা করে, তোমাদের রব আল্লাহ, যিনি আসমানসমূহ ও যমীন ছয় দিনে সৃষ্টি করেছেন, তারপর আরশের উপর সমুন্নত হয়েছেন; তিনি রাত দিয়ে দিনকে ঢেকে দেন — রাত তাকে দ্রুত তাড়া করে ফেরে; আর সূর্য, চাঁদ ও নক্ষত্ররাজি তাঁর হুকুমের অধীন। সৃষ্টিও তাঁর, হুকুমও তাঁর। তারপর, কোনো বিরতি ছাড়াই: তোমাদের রবকে ডাকো। যাঁর বর্ণনা এইমাত্র দেওয়া হলো, সম্বোধন তাঁরই উদ্দেশে।"
          },
          {
            "en": "The sequence teaches before it commands. Only after establishing who holds creation and command does the passage say: now speak to Him. At-Tirmidhi records from an-Nu'man ibn Bashir (RA) that the Prophet ﷺ said supplication is itself the worship. Du'a is not a device for extracting outcomes; it is the creature answering the description of 7:54 with the only fitting response — turning to the One who commands all things with its needs and its lowness.",
            "bn": "এই বিন্যাস নির্দেশ দেওয়ার আগে শিক্ষা দেয়। সৃষ্টি ও হুকুম কার হাতে তা প্রতিষ্ঠার পরেই অনুচ্ছেদটি বলে: এবার তাঁর সাথে কথা বলো। তিরমিযী নু'মান ইবনে বাশীর (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: দোয়াই তো ইবাদত। দোয়া ফলাফল আদায়ের কোনো কৌশল নয়; এটি হলো 7:54 আয়াতের বর্ণনার জবাবে সৃষ্টির একমাত্র মানানসই সাড়া — নিজের প্রয়োজন ও দীনতা নিয়ে সেই সত্তার দিকে ফেরা, যিনি সবকিছুর হুকুম দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Humbly and in Secret",
          "bn": "বিনয়ে ও গোপনে"
        },
        "p": [
          {
            "en": "Ud'u rabbakum tadarru'an wa khufyah — call on your Lord in humility and in secret. Tadarru' is the lowness of someone who knows his need; khufyah is quietness, prayer kept between the servant and his Lord. The commentators note that secrecy protects sincerity — a hidden request cannot be performed for an audience — and suits the One addressed, who hears the faintest whisper. Loudness adds nothing to His hearing; softness adds much to our honesty.",
            "bn": "উদ'ঊ রাব্বাকুম তাদাররু'আন ওয়া খুফইয়াহ — তোমাদের রবকে ডাকো বিনয়ের সাথে ও গোপনে। তাদাররু' হলো নিজের মুখাপেক্ষিতা জানা মানুষের দীনতা; খুফইয়াহ হলো নীরবতা — বান্দা ও তার রবের মাঝে সীমাবদ্ধ রাখা প্রার্থনা। মুফাসসিরগণ লক্ষ করেন, গোপনীয়তা আন্তরিকতাকে রক্ষা করে — লুকানো আবেদন কোনো দর্শকের জন্য অভিনয় করা যায় না — আর তা মানানসইও যাঁকে ডাকা হচ্ছে তাঁর সাথে, যিনি ক্ষীণতম ফিসফিসও শোনেন। উচ্চস্বর তাঁর শ্রবণে কিছুই যোগ করে না; কোমল স্বর আমাদের সততায় অনেক কিছু যোগ করে।"
          },
          {
            "en": "Al-Bukhari records that when the companions raised their voices in takbir on a journey, the Prophet ﷺ told them to be gentle with themselves, for they were not calling upon one deaf or absent, but upon One who is Hearing and near. The hadith is the verse in action: the volume of supplication should be set by who Allah is, not by the intensity of our feelings.",
            "bn": "বুখারী বর্ণনা করেন, এক সফরে সাহাবীরা উঁচু গলায় তাকবীর বলছিলেন, তখন নবী ﷺ তাঁদের বললেন নিজেদের প্রতি সদয় হতে, কারণ তাঁরা কোনো বধির বা অনুপস্থিত সত্তাকে ডাকছেন না; ডাকছেন তাঁকে, যিনি সর্বশ্রোতা ও নিকটবর্তী। হাদীসটি যেন আয়াতেরই বাস্তব প্রয়োগ: দোয়ার স্বরমাত্রা ঠিক হবে আল্লাহ কে — সেই পরিচয় দিয়ে, আমাদের আবেগের তীব্রতা দিয়ে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Transgressing in Asking",
          "bn": "চাওয়ায় সীমালঙ্ঘন"
        },
        "p": [
          {
            "en": "He does not love al-mu'tadin, those who cross the bounds. The commentators apply this first to transgression within supplication itself: asking Allah for something sinful or for the severing of family ties, or turning du'a into ornate performance. Abu Dawud records from Abdullah ibn Mughaffal (RA) that the Prophet ﷺ said there will be in this nation a people who transgress in purification and in supplication. Even worship has edges, and love is promised to those who stay within them.",
            "bn": "তিনি আল-মু'তাদীন — সীমালঙ্ঘনকারীদের — ভালোবাসেন না। মুফাসসিরগণ এটি প্রথমে প্রয়োগ করেন খোদ দোয়ার ভেতরের সীমালঙ্ঘনে: আল্লাহর কাছে কোনো গুনাহের বিষয় বা আত্মীয়তার বন্ধন ছিন্ন করার আবেদন, কিংবা দোয়াকে অলঙ্কৃত প্রদর্শনীতে পরিণত করা। আবূ দাঊদ আবদুল্লাহ ইবনে মুগাফফাল (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন: এই উম্মতে এমন এক সম্প্রদায় হবে যারা পবিত্রতা অর্জনে ও দোয়ায় সীমালঙ্ঘন করবে। এমনকি ইবাদতেরও কিনারা আছে, আর ভালোবাসার প্রতিশ্রুতি তাদের জন্য যারা তার ভেতরে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Corruption After Setting Right",
          "bn": "সংশোধনের পর বিপর্যয়"
        },
        "p": [
          {
            "en": "Then 7:56 widens the lens: do not spread corruption in the earth after it has been set right. The commentators read the setting right as Allah's own act — He ordered the world and sent messengers and guidance to keep it ordered — so that fasad, whether sin, injustice or the ruin of what others depend on, is vandalism against a finished work. Placing this command between two commands about du'a is deliberate: the hands must not undo what the tongue asks for.",
            "bn": "এরপর 7:56 দৃষ্টিক্ষেত্র প্রশস্ত করে: যমীন সংশোধিত হওয়ার পর তাতে বিপর্যয় ছড়িয়ো না। মুফাসসিরগণ এই সংশোধনকে পড়েন আল্লাহর নিজের কাজ হিসেবে — তিনি জগৎকে সুবিন্যস্ত করেছেন এবং তা সুবিন্যস্ত রাখতে রাসূল ও হেদায়েত পাঠিয়েছেন — কাজেই ফাসাদ, তা গুনাহ হোক, জুলুম হোক বা মানুষের নির্ভরতার জিনিস ধ্বংস করা হোক, একটি সম্পূর্ণ কাজের উপর ভাঙচুর। দোয়া-সংক্রান্ত দুটি নির্দেশের মাঝখানে এই নির্দেশ বসানো ইচ্ছাকৃত: জিহ্বা যা চায়, হাত যেন তা ভেঙে না ফেলে।"
          },
          {
            "en": "The pairing also blocks a familiar self-deception, in which private devotion is treated as compensation for public harm. The passage refuses the split: the same breath that teaches how to ask teaches what the asker's hands must not do. A person's supplication and a person's conduct in the land are one file, read together. The earth set right includes what is near you — the household, the workplace, the trust you hold — and leaving it better is part of the asking.",
            "bn": "এই জোড় একটি চেনা আত্মপ্রতারণাকেও আটকে দেয় — যেখানে একান্ত ইবাদতকে প্রকাশ্য ক্ষতির ক্ষতিপূরণ ভাবা হয়। অনুচ্ছেদটি এই বিভাজন মানে না: যে নিঃশ্বাসে চাওয়ার নিয়ম শেখানো হয়, সেই নিঃশ্বাসেই শেখানো হয় প্রার্থনাকারীর হাত কী করতে পারবে না। মানুষের দোয়া আর যমীনে তার আচরণ একই নথি — একসাথে পড়া হয়। সংশোধিত যমীনের মধ্যে আপনার নিকটের জিনিসও পড়ে — সংসার, কর্মক্ষেত্র, আপনার হাতে থাকা আমানত — আর তা আগের চেয়ে ভালো রেখে যাওয়াও চাওয়ারই অংশ।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear, Hope, and Nearness",
          "bn": "ভয়, আশা ও নৈকট্য"
        },
        "p": [
          {
            "en": "Call on Him khawfan wa tama'an, in fear and in hope — fear of one's own sins and of rejection, hope in His mercy and His promise. The scholars describe these as two wings that keep the heart level: fear alone curdles into despair, hope alone into presumption. The verse then closes with the reason both are safe: surely the mercy of Allah is near to the muhsinin, those who do good.",
            "bn": "তাঁকে ডাকো খাওফান ওয়া তামা'আন — ভয় ও আশা নিয়ে — নিজের গুনাহের ও প্রত্যাখ্যাত হওয়ার ভয়, তাঁর রহমত ও প্রতিশ্রুতিতে আশা। আলিমগণ এ দুটিকে বর্ণনা করেন দুটি ডানা হিসেবে, যা অন্তরকে সমতলে রাখে: শুধু ভয় জমাট বেঁধে হয় হতাশা, শুধু আশা গড়ায় দুঃসাহসে। আয়াতটি তারপর শেষ হয় সেই কারণ দিয়ে, যার জোরে দুটিই নিরাপদ: নিশ্চয়ই আল্লাহর রহমত মুহসিনদের — সৎকর্মশীলদের — নিকটবর্তী।"
          },
          {
            "en": "That closing line is echoed by 2:186, where Allah says: when My servants ask you about Me, I am near, answering the call of the caller when he calls. And 40:60 carries the command with a promise: call upon Me; I will respond to you. Nearness, response, mercy — the Quran keeps stacking assurances around du'a, while this passage adds the manners that keep the channel clean.",
            "bn": "এই সমাপ্তি-বাক্যের প্রতিধ্বনি 2:186 আয়াতে, যেখানে আল্লাহ বলেন: আমার বান্দারা যখন তোমাকে আমার সম্পর্কে জিজ্ঞেস করে — আমি তো নিকটেই, ডাকনেওয়ালা যখন ডাকে আমি তার ডাকে সাড়া দিই। আর 40:60 নির্দেশের সাথে প্রতিশ্রুতি বহন করে: আমাকে ডাকো; আমি তোমাদের সাড়া দেব। নৈকট্য, সাড়া, রহমত — কুরআন দোয়ার চারপাশে আশ্বাসের পর আশ্বাস সাজিয়ে যায়, আর এই অনুচ্ছেদ যোগ করে সেই আদবগুলো, যা যোগাযোগের পথটি পরিচ্ছন্ন রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Praying and Behaving",
          "bn": "প্রার্থনা ও আচরণ"
        },
        "p": [
          {
            "en": "The lived shape of these verses is a quiet, regular, private supplication — a fixed time when no one else hears you. Check the content of your asking against the verse: nothing that transgresses, nothing performed. And keep the middle command attached: the same person who whispers to Allah at night must not corrupt dealings, trusts or shared spaces by day. Whoever prays like 7:55 and lives against 7:56 has torn the passage in half; mercy is written as near to those who do good, and the two verses define doing good from the inside out.",
            "bn": "এই আয়াতগুলোর যাপিত রূপ হলো এক শান্ত, নিয়মিত, একান্ত দোয়া — এমন এক নির্দিষ্ট সময়, যখন আপনার কথা আর কেউ শোনে না। নিজের চাওয়ার বিষয়বস্তু আয়াতের সাথে মিলিয়ে নিন: সীমালঙ্ঘন করে এমন কিছু নয়, প্রদর্শনীর জন্যও কিছু নয়। আর মাঝের নির্দেশটিকে সাথে জুড়ে রাখুন: যে মানুষ রাতে আল্লাহর কাছে ফিসফিস করে, সে যেন দিনে লেনদেন, আমানত বা যৌথ পরিসর নষ্ট না করে। যে 7:55 আয়াতের মতো দোয়া করে অথচ 7:56 আয়াতের বিরুদ্ধে জীবন যাপন করে, সে অনুচ্ছেদটিকে দুই টুকরো করে ফেলেছে; রহমত লেখা আছে সৎকর্মশীলদের নিকটে, আর আয়াত দুটি সৎকর্মের সংজ্ঞা দেয় ভেতর থেকে বাইরের দিকে।"
          }
        ]
      }
    ]
  },
  "7:65": {
    "sections": [
      {
        "h": {
          "en": "One Sentence, Four Times",
          "bn": "একই বাক্য, চারবার"
        },
        "p": [
          {
            "en": "This is the second of four missions the surah recounts here, each told to the same pattern. 7:59 sends Nuh (AS) to his people, 7:65 sends Hud (AS) to Ad, 7:73 sends Salih (AS) to Thamud, and 7:85 sends Shu'ayb (AS) to Madyan. Each passage names the messenger, has him say O my people, worship Allah, you have no deity other than Him, and then lets the eminent men of his people answer him. The repetition is the surah's argument.",
            "bn": "সূরাটি এখানে চারটি রিসালাতের কথা বলে, এটি তার দ্বিতীয়টি, আর প্রত্যেকটি বলা হয়েছে একই ছাঁচে। ৭:৫৯ আয়াত নূহকে (আঃ) পাঠায় তাঁর সম্প্রদায়ের কাছে, ৭:৬৫ আয়াত হূদকে (আঃ) পাঠায় আদের কাছে, ৭:৭৩ আয়াত সালিহকে (আঃ) পাঠায় সামূদের কাছে, আর ৭:৮৫ আয়াত শুআইবকে (আঃ) পাঠায় মাদইয়ানে। প্রতিটি অংশে আগে আসে রসূলের নাম, তারপর তাঁর মুখে সেই কথা, হে আমার সম্প্রদায়, আল্লাহর ইবাদত করো, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই; তারপর জবাব দেয় সম্প্রদায়ের প্রধানরা। বারবার বলাটাই এখানে সূরার যুক্তি।"
          },
          {
            "en": "Inside the pattern the differences are exact. Nuh's opening continues with a fear: indeed I fear for you the punishment of a tremendous Day. Hud's continues with a question: then will you not fear Him? Salih's continues in 7:73 with a clear proof and a she-camel, and Shu'ayb's in 7:85 with full measure and weight. The shared sentence is the message itself. What each messenger adds to it is what his own people needed to hear about themselves.",
            "bn": "একই ছাঁচের ভেতরেই পার্থক্যগুলো মেপে বসানো। নূহের (আঃ) কথা এগোয় একটি আশঙ্কা দিয়ে: আমি তোমাদের জন্য মহাদিনের শাস্তির আশঙ্কা করি। হূদের (আঃ) কথা এগোয় একটি প্রশ্ন দিয়ে: তোমরা কি তাকওয়া অবলম্বন করবে না? সালিহের (আঃ) কথা ৭:৭৩ আয়াতে এগোয় সুস্পষ্ট প্রমাণ আর উটনী দিয়ে, আর শুআইবের (আঃ) কথা ৭:৮৫ আয়াতে এগোয় মাপ ও ওজন পুরো করা দিয়ে। যে বাক্যটা সবার এক, সেটাই মূল বার্তা। তার সঙ্গে প্রত্যেকে যা যোগ করেন, সেটা তাঁর নিজের জাতির নিজেদের সম্পর্কে যা শোনা দরকার ছিল তা-ই।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Brother Hud",
          "bn": "তাদের ভাই হূদ"
        },
        "p": [
          {
            "en": "Wa ila 'Adin akhahum Hudan. The clause has no verb of its own; the sending in the previous passage carries over, and the Arabic simply hangs the new mission on the earlier one. Akhahum, their brother, is the word this surah uses for Hud (AS), for Salih (AS) in 7:73 and for Shu'ayb (AS) in 7:85, while Nuh (AS) is sent to his people and Lut (AS) is introduced already speaking to his. What it states is kinship of lineage, not of religion.",
            "bn": "ওয়া ইলা আদিন আখাহুম হূদা। এই অংশে নিজের কোনো ক্রিয়া নেই; আগের অংশের পাঠানোর কথাটাই এখানে টেনে আনা হয়, আর আরবি নতুন রিসালাতটিকে আগেরটির গায়ে ঝুলিয়ে দেয়। আখাহুম, তাদের ভাই, এই শব্দটি এই সূরা ব্যবহার করে হূদের (আঃ) জন্য, ৭:৭৩ আয়াতে সালিহের (আঃ) জন্য আর ৭:৮৫ আয়াতে শুআইবের (আঃ) জন্য; অন্যদিকে নূহকে (আঃ) পাঠানো হয় তাঁর সম্প্রদায়ের কাছে, আর লূতকে (আঃ) পরিচয় করানো হয় সরাসরি তাঁর জাতির সঙ্গে কথা বলতে বলতেই। শব্দটি বলছে বংশের আত্মীয়তা, দ্বীনের নয়।"
          },
          {
            "en": "Brotherhood of this kind cuts in two directions. It removes the excuse that the warner is an outsider with outside interests, which is why 7:69 presses the point that the reminder came through a man from among you. And it raises the price the messenger pays, because the people rejecting him are his own. 46:21 names him by the relationship rather than by the name, telling the Prophet ﷺ to mention the brother of Ad, who warned his people in al-Ahqaf.",
            "bn": "এ ধরনের ভাইত্ব দুই দিকেই কাটে। এতে এই অজুহাতটা আর থাকে না যে সতর্ককারী বাইরের লোক, বাইরের স্বার্থ নিয়ে এসেছে; এ কারণেই ৭:৬৯ আয়াত জোর দিয়ে বলে, উপদেশ এসেছে তোমাদেরই ভেতরের একজন মানুষের মাধ্যমে। আবার এতে রসূলের দামটাও বেড়ে যায়, কারণ যারা তাঁকে ফিরিয়ে দিচ্ছে তারা তাঁরই লোক। ৪৬:২১ আয়াত তাঁকে নাম ধরে নয়, সম্পর্ক ধরে ডাকে; নবীকে ﷺ বলা হয় আদের ভাইয়ের কথা স্মরণ করতে, যিনি আহকাফে তাঁর সম্প্রদায়কে সতর্ক করেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Words of the Call",
          "bn": "দাওয়াতের শব্দগুলো"
        },
        "p": [
          {
            "en": "I'budu Allah. The verb 'abada covers service and worship in one word, and the imperative is plural, so a whole people is addressed at once rather than a private conscience. Then the ground for it: ma lakum min ilahin ghayruh. The negation here is of the strongest kind, with ma and then min laid over the noun, so the sentence does not say that they happen to have no other god. It rules out there being one to have.",
            "bn": "ইবুদুল্লাহ। আবাদা ক্রিয়াটি এক শব্দেই ধরে সেবা আর ইবাদত দুটোকেই, আর হুকুমটি বহুবচনে; ফলে একজন মানুষের বিবেক নয়, গোটা জাতিকে একসঙ্গে সম্বোধন করা হচ্ছে। এরপর আসে তার ভিত্তি: মা লাকুম মিন ইলাহিন গাইরুহ। এখানকার নেতিবাচকতা সবচেয়ে শক্ত ধরনের, আগে মা আর তারপর বিশেষ্যের উপর মিন বসিয়ে। তাই বাক্যটি এ কথা বলছে না যে তাদের এমনিতেই আর কোনো ইলাহ নেই। বাক্যটি বলছে, থাকার মতো কোনো ইলাহই নেই।"
          },
          {
            "en": "Notice what the call does not begin with. There is no attack on a named idol, no mention of Ad's power and no threat. 7:70 shows that the idols were indeed the live issue, since the people answer by asking whether they are to leave what their fathers worshipped, and 7:71 has Hud (AS) call those gods names with no authority behind them. But the opening sentence puts the positive claim first and lets the objection come to it rather than going out to meet it.",
            "bn": "খেয়াল করুন, দাওয়াতটি কী দিয়ে শুরু হয় না। কোনো মূর্তির নাম ধরে আক্রমণ নেই, আদের শক্তির কোনো উল্লেখ নেই, হুমকিও নেই। ৭:৭০ আয়াত দেখায় মূর্তির প্রশ্নটাই আসল প্রশ্ন ছিল, কারণ জাতি জবাবে জিজ্ঞেস করে, বাপ-দাদারা যার ইবাদত করত তা কি ছাড়তে হবে; আর ৭:৭১ আয়াতে হূদ (আঃ) সেই উপাস্যদের বলেন নিছক কতগুলো নাম, যার পক্ষে কোনো প্রমাণ নেই। কিন্তু শুরুর বাক্যটি ইতিবাচক দাবিটাকেই আগে রাখে, আর আপত্তির দিকে এগিয়ে না গিয়ে আপত্তিকে নিজের কাছে আসতে দেয়।"
          },
          {
            "en": "Then the tail: afala tattaqun. The hamza of questioning sits over the fa of consequence, so the sentence does not merely ask whether they will fear. It asks whether, after all of that, they still will not. And taqwa is not terror; the root carries guarding and shielding, keeping something between yourself and what would harm you. Hud (AS) closes by asking a people who have just been told there is one Lord whether they will take any precaution at all.",
            "bn": "এরপর শেষ অংশ: আফালা তাত্তাকূন। প্রশ্নের হামযা বসেছে পরিণামবাচক ফা-এর উপর, তাই বাক্যটি কেবল জিজ্ঞেস করছে না তারা ভয় করবে কিনা। জিজ্ঞেস করছে, এতকিছুর পরেও কি তারা করবে না। আর তাকওয়া মানে আতঙ্ক নয়; ধাতুটির ভেতরে আছে আড়াল করা আর বাঁচিয়ে রাখা, নিজের আর ক্ষতির মাঝখানে কিছু একটা রেখে দেওয়া। যে জাতিকে মাত্রই বলা হলো প্রতিপালক একজনই, হূদ (আঃ) শেষ করছেন তাদের জিজ্ঞেস করে, তারা কি সামান্যতম সাবধানতাও নেবে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Readings of the Commentators",
          "bn": "মুফাসসিরদের পাঠ"
        },
        "p": [
          {
            "en": "At-Tabari reads akhahum as brotherhood of lineage only, since Hud (AS) shared none of their religion, and notes that the Arabs used brother in exactly this way for a man of the tribe. Ibn Kathir places Ad in the sands of al-Ahqaf in the south of Arabia and transmits that they were the first people to worship idols after the flood of Nuh (AS), which is why their account is set immediately after his in this surah.",
            "bn": "আত-তাবারী আখাহুম পড়েন কেবল বংশের আত্মীয়তা হিসেবে, কারণ হূদ (আঃ) তাদের দ্বীনের কিছুই ভাগ করে নেননি; তিনি আরও বলেন, আরবরা গোত্রের একজন লোককে ঠিক এভাবেই ভাই বলত। ইবনু কাসীর আদ জাতিকে বসান আরবের দক্ষিণে আহকাফের বালুরাশিতে, আর বর্ণনা তুলে ধরেন যে নূহের (আঃ) প্লাবনের পর তারাই প্রথম মূর্তিপূজা শুরু করেছিল। এ কারণেই এই সূরায় তাদের বৃত্তান্ত বসেছে নূহের (আঃ) বৃত্তান্তের ঠিক পরেই।"
          },
          {
            "en": "As-Sa'di reads the command and its evidence as joined in one line, the order being i'budu Allah first and ma lakum min ilahin ghayruh immediately after as the reason. That is why every messenger in the passage opens the same way: the foundation of the call never changes, only what is built on it. Al-Qurtubi takes up the grammar of wa ila 'Adin akhahum Hudan, showing that the accusative is governed by the sending carried over from the verses before.",
            "bn": "আস-সাদী হুকুম আর তার দলিলকে পড়েন এক লাইনে জোড়া হিসেবে; আগে ইবুদুল্লাহ, আর ঠিক পরেই কারণ হিসেবে মা লাকুম মিন ইলাহিন গাইরুহ। এ কারণেই এই অংশের প্রত্যেক রসূল একইভাবে শুরু করেন: দাওয়াতের ভিত্তি কখনো বদলায় না, বদলায় কেবল তার উপর যা গড়া হয়। আল-কুরতুবী ধরেন ওয়া ইলা আদিন আখাহুম হূদা বাক্যের ব্যাকরণ, দেখান যে কর্মকারকটি চলছে আগের আয়াতগুলো থেকে টেনে আনা পাঠানোর ক্রিয়ার জোরে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sent to His Own People",
          "bn": "নিজের জাতির কাছেই পাঠানো"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Jabir ibn Abdullah (RA) that the Prophet ﷺ said he had been given five things not given to any prophet before him, and among them that every prophet used to be sent to his own people specifically while he was sent to all mankind. That narration is the frame around this verse. Hud (AS) was sent to Ad and to nobody else, and the surah is showing a reader who holds the final message what a local mission looked like.",
            "bn": "আল-বুখারী ও মুসলিম দুজনেই জাবির ইবনু আবদুল্লাহ (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, তাঁকে এমন পাঁচটি জিনিস দেওয়া হয়েছে যা তাঁর আগে কোনো নবীকে দেওয়া হয়নি; তার একটি হলো, প্রত্যেক নবীকে পাঠানো হতো কেবল তাঁর নিজের জাতির কাছে, আর তাঁকে পাঠানো হয়েছে গোটা মানবজাতির কাছে। এই হাদীসই এই আয়াতের চারপাশের কাঠামো। হূদকে (আঃ) পাঠানো হয়েছিল আদের কাছে, আর কারো কাছে নয়; আর সূরাটি শেষ রিসালাতের অধিকারী পাঠককে দেখাচ্ছে একটি স্থানীয় রিসালাত দেখতে কেমন ছিল।"
          },
          {
            "en": "Read that way the repetition stops being repetitive. Four peoples, four messengers of their own blood, one sentence handed to each. The Quran is establishing that the message now addressed to everyone is not a new invention, and 46:21 says so plainly when it notes that warners had passed away before Hud (AS) and after him. What is new in the final mission is the size of the address, not the content of it.",
            "bn": "এভাবে পড়লে বারবার বলাটা আর পুনরাবৃত্তি থাকে না। চারটি জাতি, নিজেদের রক্তের চারজন রসূল, প্রত্যেকের হাতে একটিই বাক্য। কুরআন প্রতিষ্ঠা করছে যে আজ সবার উদ্দেশে বলা বার্তাটি নতুন কোনো আবিষ্কার নয়; ৪৬:২১ আয়াত কথাটা সোজা করেই বলে, যখন জানায় হূদের (আঃ) আগেও সতর্ককারীরা গেছেন আর পরেও গেছেন। শেষ রিসালাতে নতুন হলো সম্বোধনের পরিধি, বক্তব্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Call Elsewhere",
          "bn": "একই দাওয়াত অন্যত্র"
        },
        "p": [
          {
            "en": "21:25 states the rule behind the pattern outright: We sent no messenger before you except that We revealed to him that there is no deity except Me, so worship Me. 16:36 gives the same as a mission sent into every nation, worship Allah and avoid taghut, and then tells the reader to travel the earth and see how the deniers ended. Between them they explain why Hud's first sentence is not a composition of his own.",
            "bn": "২১:২৫ আয়াত এই ছাঁচের পেছনের নিয়মটা সরাসরি বলে দেয়: তোমার আগে এমন কোনো রসূল পাঠাইনি যার প্রতি ওহী করিনি যে, আমি ছাড়া কোনো ইলাহ নেই, কাজেই আমারই ইবাদত করো। ১৬:৩৬ আয়াত একই কথা দেয় প্রতিটি জাতির কাছে পাঠানো দায়িত্ব হিসেবে, আল্লাহর ইবাদত করো আর তাগুতকে বর্জন করো; তারপর পাঠককে বলে যমীনে ঘুরে দেখতে, অস্বীকারকারীদের পরিণতি কী হয়েছিল। এ দুটি মিলে বুঝিয়ে দেয়, হূদের (আঃ) প্রথম বাক্যটি তাঁর নিজের রচনা নয়।"
          },
          {
            "en": "11:50 records the same mission with a different second half, where Hud (AS) tells Ad that they are nothing but inventors of falsehood. 46:21 supplies the place, al-Ahqaf, and the fear of a terrible day. And 41:15 supplies what Ad said back, asking who is greater than us in strength, with the Quran's own reply that the One who created them is greater in strength than they are.",
            "bn": "১১:৫০ আয়াত একই রিসালাতের কথা বলে, তবে দ্বিতীয় অংশটা আলাদা; সেখানে হূদ (আঃ) আদকে বলেন, তোমরা কেবল মিথ্যা বানিয়ে নিয়েছ। ৪৬:২১ আয়াত জায়গার নাম দেয়, আহকাফ, আর সঙ্গে দেয় এক ভয়াবহ দিনের আশঙ্কা। আর ৪১:১৫ আয়াত দেয় আদের জবাব, তারা জিজ্ঞেস করেছিল আমাদের চেয়ে বেশি শক্তিশালী আর কে আছে; সঙ্গে কুরআনের নিজের উত্তর, যিনি তাদের সৃষ্টি করেছেন তিনি শক্তিতে তাদের চেয়ে প্রবল।"
          }
        ]
      },
      {
        "h": {
          "en": "Taking the Method",
          "bn": "পদ্ধতিটা কাজে লাগানো"
        },
        "p": [
          {
            "en": "The first use is a measure for anyone who talks about religion at all. Hud (AS) leads with what he is calling to and not with what he is against, and the idols are dealt with in 7:71 only after his people raise them themselves. Most of us reverse that order without noticing, and a call that opens with a list of errors rarely gets as far as its own foundation. Say the positive claim first and let the objections come to you.",
            "bn": "প্রথম কাজে লাগার জায়গাটা হলো যে কেউ দ্বীনের কথা বলেন তাঁর জন্য একটা মাপকাঠি। হূদ (আঃ) শুরু করেন কীসের দিকে ডাকছেন তা দিয়ে, কীসের বিরুদ্ধে দাঁড়িয়েছেন তা দিয়ে নয়; আর মূর্তির প্রসঙ্গ ৭:৭১ আয়াতে আসে কেবল তখন, যখন তাঁর জাতি নিজেরাই সেটা তোলে। আমাদের বেশিরভাগই টেরও না পেয়ে ক্রমটা উল্টে ফেলি, আর ভুলের তালিকা দিয়ে শুরু করা দাওয়াত নিজের ভিত্তি পর্যন্ত পৌঁছায় কমই। আগে ইতিবাচক কথাটা বলুন, আপত্তিগুলো আপনার কাছেই আসবে।"
          },
          {
            "en": "The second use is the word brother. Hud (AS) warned people who were his own, which is the hardest audience there is and the only one most readers actually have. The relative who will roll his eyes, the colleague who has known you for years: these are your Ad. The verse makes no promise that they will listen, and 7:66 has them calling him foolish and counting him among the liars. It shows only what he said and how briefly he said it.",
            "bn": "দ্বিতীয়টি হলো ভাই শব্দটি। হূদ (আঃ) সতর্ক করেছেন নিজের লোকদেরই, আর এর চেয়ে কঠিন শ্রোতা হয় না; অথচ বেশিরভাগ পাঠকের হাতে আসলে এই শ্রোতাটুকুই আছে। যে আত্মীয় চোখ ঘুরিয়ে নেবে, যে সহকর্মী আপনাকে বহু বছর ধরে চেনে, এঁরাই আপনার আদ। আয়াতটি ওয়াদা করে না যে তারা শুনবে; ৭:৬৬ আয়াতে তারা তাঁকে নির্বোধ বলে আর মিথ্যাবাদীদের দলে ফেলে। আয়াতটি কেবল দেখায় তিনি কী বলেছিলেন আর কত অল্প কথায় বলেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for What He Asked",
          "bn": "তিনি যা চেয়েছিলেন তা চাওয়া"
        },
        "p": [
          {
            "en": "The verse is not itself a supplication, but it hands one its entire content. What Hud (AS) asks for at the end is taqwa, and taqwa is what a believer asks for by name in a supplication Muslim records from Abdullah ibn Mas'ud (RA), in which the Prophet ﷺ would ask Allah for guidance, taqwa, chastity and sufficiency. The closing question of 7:65 and that request are the same thing approached from two directions.",
            "bn": "আয়াতটি নিজে দু'আ নয়, তবে দু'আর গোটা বিষয়বস্তুটাই এ হাতে তুলে দেয়। হূদ (আঃ) শেষে যা চান তার নাম তাকওয়া, আর তাকওয়া সেই জিনিস যা একজন মুমিন নাম ধরেই চান মুসলিমে আবদুল্লাহ ইবনু মাসঊদ (রাঃ) থেকে বর্ণিত এক দু'আয়; সেখানে নবী ﷺ আল্লাহর কাছে চাইতেন হিদায়াত, তাকওয়া, পবিত্রতা ও অভাবমুক্তি। ৭:৬৫ আয়াতের শেষ প্রশ্নটি আর ওই চাওয়াটি একই জিনিস, দুই দিক থেকে ধরা।"
          },
          {
            "en": "A short supplication in the verse's own vocabulary may be added to that, offered as such and not as a transmitted wording. O Allah, You are my Lord and I have no other, and I ask that this be the sentence my life is arranged around rather than only the one I can recite. Give me the taqwa Your prophets asked their peoples for. And where I have to say a hard thing to my own people, give me Hud's brevity and spare me his people's answer.",
            "bn": "এর সঙ্গে এই আয়াতের শব্দ ধরে ছোট একটি প্রার্থনা যোগ করা যায়, যা বর্ণিত দু'আ নয়, এভাবেই পেশ করা। হে আল্লাহ, আপনিই আমার রব, আপনি ছাড়া আমার কেউ নেই; চাই এই বাক্যটির উপরেই যেন আমার জীবন সাজানো থাকে, কেবল মুখস্থ বলতে পারা বাক্য হয়ে না থাকে। আপনার নবীরা যে তাকওয়া নিজ নিজ জাতির কাছে চেয়েছিলেন, সেটি আমাকে দিন। আর নিজের লোকদের কঠিন কথাটা বলতে হলে আমাকে দিন হূদের (আঃ) মতো সংক্ষেপ, আর তাঁর জাতির জবাবটা থেকে আমাকে বাঁচান।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for Your Own People",
          "bn": "নিজের লোকদের নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Four messengers in this surah open with one sentence, and 21:25 says no messenger was ever sent with a different one. If somebody who has watched me for ten years had to name the one thing I am for, would they name that sentence, or would they name a position I hold on something much smaller? Hud (AS) reached the idols only in 7:71, after his people raised them themselves. What am I raising first that could have waited?",
            "bn": "এই সূরার চারজন রসূল শুরু করেন একই বাক্য দিয়ে, আর ২১:২৫ আয়াত বলে দেয়, এর চেয়ে আলাদা কথা নিয়ে কোনো রসূলকে কখনো পাঠানোই হয়নি। দশ বছর ধরে আমাকে দেখছে এমন কাউকে যদি বলতে হতো আমি আসলে কীসের পক্ষে, সে কি ওই বাক্যটার নাম নিত, নাকি অনেক ছোট কোনো বিষয়ে আমার একটা অবস্থানের নাম নিত? হূদ (আঃ) মূর্তির প্রসঙ্গে যান ৭:৭১ আয়াতে গিয়ে, জাতি নিজেরা কথাটা তোলার পরে। আমি কোন কথাটা আগেভাগে তুলছি, যেটা আসলে অপেক্ষা করতে পারত?"
          },
          {
            "en": "Jabir (RA) narrates that every prophet before was sent to his own people while the Prophet ﷺ was sent to all mankind, which makes the local mission the reader's own share of the work rather than a story about somebody else. Who inside my own circle have I quietly written off as not worth speaking to, and on what evidence? Hud (AS) ended not with a threat but with a question, and in the supplication Muslim records from Ibn Mas'ud (RA) taqwa is asked for by name. When did I last ask for it instead of assuming I already have it?",
            "bn": "জাবির (রাঃ) বর্ণনা করেন, আগের প্রত্যেক নবীকে পাঠানো হয়েছিল তাঁর নিজের জাতির কাছে, আর নবী ﷺ কে পাঠানো হয়েছে গোটা মানবজাতির কাছে। এতে করে নিজের আশপাশের দাওয়াতটা আর অন্য কারো গল্প থাকে না, পাঠকের নিজের ভাগের কাজ হয়ে যায়। আমার নিজের গণ্ডির ভেতরে কাকে আমি চুপচাপ বাদ দিয়ে রেখেছি এই ভেবে যে তাকে বলে লাভ নেই, আর কীসের ভিত্তিতে? হূদ (আঃ) শেষ করেছেন হুমকি দিয়ে নয়, প্রশ্ন দিয়ে; আর মুসলিমে ইবনু মাসঊদ (রাঃ) থেকে বর্ণিত দু'আয় তাকওয়া নাম ধরেই চাওয়া হয়েছে। আমি শেষ কবে সেটা চেয়েছি, ধরে নেওয়ার বদলে?"
          }
        ]
      }
    ]
  },
  "7:69": {
    "sections": [
      {
        "h": {
          "en": "Where It Falls in the Exchange",
          "bn": "কথোপকথনের কোন জায়গায়"
        },
        "p": [
          {
            "en": "This verse is the third move in a short exchange. 7:65 has Hud (AS) calling his people to worship Allah alone. 7:66 has the eminent men among them answering that they see him in foolishness and count him among the liars. 7:67 and 7:68 are his denial of the charge and his description of himself as a trustworthy adviser. Then 7:69 changes method entirely, and the change is what makes the verse worth sitting with.",
            "bn": "এই আয়াতটি সংক্ষিপ্ত এক কথা-চালাচালির তৃতীয় চাল। ৭:৬৫ আয়াতে হূদ (আঃ) তাঁর জাতিকে ডাকেন এক আল্লাহর ইবাদতের দিকে। ৭:৬৬ আয়াতে তাদের প্রধানরা জবাব দেয়, তারা তাঁকে নির্বুদ্ধিতায় ডুবে থাকতে দেখছে আর মিথ্যাবাদীদের একজন মনে করছে। ৭:৬৭ আর ৭:৬৮ আয়াতে তিনি অভিযোগ অস্বীকার করেন আর নিজের পরিচয় দেন বিশ্বস্ত কল্যাণকামী হিসেবে। তারপর ৭:৬৯ আয়াতে পদ্ধতিটাই বদলে যায়, আর এই বদলটাই আয়াতটিকে সময় দিয়ে পড়ার মতো করে তোলে।"
          },
          {
            "en": "He does not answer the insult, and he does not produce a miracle. He points at his people's own history and asks them to look at it again. Their reply in 7:70 shows that they heard him exactly, since they ask whether they must abandon what their fathers worshipped and then demand the punishment he has been warning about. An argument from blessings had been put to them, and they answered it with an argument from ancestors.",
            "bn": "তিনি অপমানের জবাব দেন না, কোনো মুজিযাও হাজির করেন না। তিনি আঙুল তোলেন তাঁর জাতির নিজেদের ইতিহাসের দিকে আর বলেন সেটার দিকে আবার তাকাতে। ৭:৭০ আয়াতে তাদের জবাব দেখায় তারা কথাটা ঠিকঠাক বুঝেছিল, কারণ তারা জিজ্ঞেস করে বাপ-দাদার উপাস্য ছাড়তে হবে কিনা, আর তারপর যে শাস্তির ভয় দেখানো হচ্ছিল সেটাই নিয়ে আসতে বলে। তাদের সামনে রাখা হয়েছিল নিয়ামতের দলিল, আর তারা জবাব দিল পূর্বপুরুষের দলিল দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Are You Astonished",
          "bn": "তোমরা কি অবাক হচ্ছ"
        },
        "p": [
          {
            "en": "Awa 'ajibtum an ja'akum dhikrun min rabbikum 'ala rajulin minkum liyundhirakum. The objection being answered is not about the message at all; it is about the messenger. What astonished them was the ordinariness of the man. 'Ala rajulin minkum, through a man from among you, is the same phrase Nuh (AS) had used six verses earlier in 7:63. Two prophets, two peoples, a long age apart, and one complaint between them.",
            "bn": "আওয়া আজিবতুম আন জাআকুম যিকরুম মির রাব্বিকুম আলা রাজুলিম মিনকুম লিইউনযিরাকুম। যে আপত্তির জবাব দেওয়া হচ্ছে তা বার্তা নিয়ে নয়, বার্তাবাহককে নিয়ে। তাদের অবাক করেছিল লোকটির সাধারণ হওয়াটাই। আলা রাজুলিম মিনকুম, তোমাদেরই ভেতরের একজন মানুষের মাধ্যমে, এই একই কথা নূহ (আঃ) ছয় আয়াত আগে ৭:৬৩ আয়াতে বলেছেন। দুই নবী, দুই জাতি, মাঝে অনেকটা কাল, আর দুজনের সামনে একই অভিযোগ।"
          },
          {
            "en": "The two versions part company at the end. Nuh's question in 7:63 runs on: to warn you, and that you may fear Allah, so that you might receive mercy. Hud's stops at to warn you and then turns somewhere else entirely. Where Nuh (AS) completes the purpose of the warning, Hud (AS) breaks off mid-argument and points at what his people already have in their hands. That break is the shape of the whole verse.",
            "bn": "দুটি সংস্করণ আলাদা হয়ে যায় শেষে এসে। ৭:৬৩ আয়াতে নূহের (আঃ) প্রশ্ন এগিয়ে যায়: তোমাদের সতর্ক করার জন্য, যাতে তোমরা তাকওয়া অবলম্বন করো আর রহমত পাও। হূদের (আঃ) প্রশ্ন থেমে যায় সতর্ক করার জন্য বলার পরেই, তারপর একেবারে অন্য দিকে মোড় নেয়। নূহ (আঃ) যেখানে সতর্কবাণীর উদ্দেশ্য পুরো করেন, হূদ (আঃ) সেখানে কথা থামিয়ে আঙুল তোলেন তাঁর জাতির হাতে যা আগে থেকেই আছে তার দিকে। এই থেমে যাওয়াটাই গোটা আয়াতের গড়ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Successors, and Stature",
          "bn": "স্থলাভিষিক্ত, আর গড়ন"
        },
        "p": [
          {
            "en": "Wadhkuru idh ja'alakum khulafa'a min ba'di qawmi Nuh. Khulafa' is the plural of khalifah, one who comes after and takes the place of another. The word does not flatter. It says that somebody else stood where you are standing and is no longer standing there. A people proud of holding their land are being reminded that holding it was a handover, and the passage just above has told the reader how the previous holders left.",
            "bn": "ওয়াযকুরূ ইয আজাআলাকুম খুলাফাআ মিম বাদি কওমি নূহ। খুলাফা হলো খলীফার বহুবচন, যে পরে আসে আর অন্যের জায়গা নেয়। শব্দটি প্রশংসা করে না। শব্দটি বলে, আপনি যেখানে দাঁড়িয়ে সেখানে অন্য কেউ দাঁড়িয়েছিল, আর সে এখন আর সেখানে নেই। নিজেদের জমি দখলে রাখা নিয়ে গর্বিত এক জাতিকে মনে করিয়ে দেওয়া হচ্ছে, দখলটা আসলে হাতবদল; আর আগের অংশ পাঠককে বলে দিয়েছে আগের দখলদাররা কীভাবে সরে গিয়েছিল।"
          },
          {
            "en": "Then wa zadakum fi'l-khalqi bastah. Bastah is from b-s-t, to spread out or extend, and khalq here means the make of a thing, the frame it was built on. The Quran pairs the same two words in 2:247, where Talut is said to have been increased in bastah in knowledge and in body; there it is the credential that qualifies a king. Here it is a gift being recalled to a people who will later boast about it in 41:15.",
            "bn": "এরপর ওয়া যাদাকুম ফিল খালকি বাসতা। বাসতা এসেছে ব-স-ত ধাতু থেকে, যার অর্থ ছড়িয়ে দেওয়া বা বাড়িয়ে দেওয়া; আর এখানে খালক মানে গড়ন, যে কাঠামোর উপর জিনিসটা বানানো। কুরআন এই দুই শব্দ একসঙ্গে বসায় ২:২৪৭ আয়াতেও, যেখানে বলা হয় তালুতকে জ্ঞানে ও দেহে বাড়িয়ে দেওয়া হয়েছে; সেখানে এটি বাদশাহ হওয়ার যোগ্যতার প্রমাণ। এখানে এটি এমন এক জাতিকে মনে করিয়ে দেওয়া নিয়ামত, যারা পরে ৪১:১৫ আয়াতে এটা নিয়েই বড়াই করবে।"
          },
          {
            "en": "The command that closes the verse is fadhkuru ala'a Allah. Ala' is a plural used for favours, the very word carried by the refrain of Surah ar-Rahman, which sounds first at 55:13 and returns after gift upon gift. Hud (AS) does not order his people to feel grateful, since nobody can produce a feeling on command. He orders them to remember, which anyone can decide to do, and attaches an outcome: la'allakum tuflihun, that you may succeed.",
            "bn": "আয়াতটি শেষ হয় যে হুকুম দিয়ে তা হলো ফাযকুরূ আলাআল্লাহ। আলা শব্দটি নিয়ামত বোঝাতে ব্যবহৃত বহুবচন, আর ঠিক এই শব্দটিই বয়ে নিয়ে চলে সূরা আর-রাহমানের সেই পুনরাবৃত্ত প্রশ্ন, যা প্রথম বাজে ৫৫:১৩ আয়াতে আর এরপর নিয়ামতের পর নিয়ামত গুনে গুনে বারবার ফিরে আসে। হূদ (আঃ) জাতিকে কৃতজ্ঞ বোধ করার হুকুম দেন না, কারণ হুকুম দিলেই অনুভূতি তৈরি হয় না। তিনি হুকুম দেন মনে করার, যা যে কেউ ঠিক করে নিয়ে করতে পারে; আর সঙ্গে জুড়ে দেন ফল: লাআল্লাকুম তুফলিহূন, যাতে তোমরা সফল হও।"
          }
        ]
      },
      {
        "h": {
          "en": "Reading the Favour as Argument",
          "bn": "নিয়ামতকে দলিল হিসেবে পড়া"
        },
        "p": [
          {
            "en": "At-Tabari reads the increase in stature against the people of Nuh named in the same sentence, so that Ad were given larger frames than those who had held the land before them. Ibn Kathir gathers the reports describing Ad as tall and powerfully built; what the verse itself commits to is the increase, with no measurement attached. He reads the whole line as Hud (AS) arguing from blessings rather than from signs and wonders.",
            "bn": "আত-তাবারী গড়নে বাড়িয়ে দেওয়ার কথাটি পড়েন একই বাক্যে নাম আসা নূহের (আঃ) কওমের তুলনায়, অর্থাৎ আগের দখলদারদের চেয়ে আদকে দেওয়া হয়েছিল বড় গড়ন। ইবনু কাসীর আদের লম্বা আর শক্তপোক্ত হওয়ার বর্ণনাগুলো জড়ো করেন; তবে আয়াত নিজে দায় নেয় কেবল বাড়িয়ে দেওয়ার, কোনো মাপ এর সঙ্গে জোড়া নেই। গোটা কথাটিকে তিনি পড়েন এভাবে, হূদ (আঃ) দলিল দিচ্ছেন নিয়ামত থেকে, অলৌকিক ঘটনা থেকে নয়।"
          },
          {
            "en": "As-Sa'di reads fadhkuru ala'a Allah as the hinge of the argument, since the favours are already known to the audience, so the command is not to learn anything but to draw a conclusion from what is already learnt. Al-Qurtubi notes that naming the people of Nuh puts a warning inside the favour, because the place Ad now occupy fell vacant through a punishment. None of them reads the verse as a compliment.",
            "bn": "আস-সাদী ফাযকুরূ আলাআল্লাহকে পড়েন যুক্তির কব্জা হিসেবে, কারণ নিয়ামতগুলো শ্রোতার আগে থেকেই জানা; তাই হুকুমটা নতুন কিছু শেখার নয়, যা জানা আছে তা থেকে সিদ্ধান্তে পৌঁছানোর। আল-কুরতুবী ধরিয়ে দেন, নূহের (আঃ) কওমের নাম নেওয়াটা নিয়ামতের ভেতরেই একটা সতর্কবার্তা বসিয়ে দেয়, কারণ আদ আজ যে জায়গায় বসে আছে সে জায়গা খালি হয়েছিল এক আযাবে। তাঁদের কেউই আয়াতটিকে প্রশংসা বলে পড়েন না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Narration Beside It",
          "bn": "পাশে যে হাদীস"
        },
        "p": [
          {
            "en": "Muslim records from Abu Hurayrah (RA) that the Prophet ﷺ said the strong believer is better and more beloved to Allah than the weak believer, and that there is good in each of them; he then told his listener to be eager for what benefits him, to seek Allah's help, and not to give in to helplessness. The narration says what 7:69 assumes. Strength is a good thing, and the only question is what it is turned towards.",
            "bn": "মুসলিম আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ বলেছেন, শক্তিশালী মুমিন দুর্বল মুমিনের চেয়ে উত্তম আর আল্লাহর কাছে বেশি প্রিয়, তবে দুজনের মধ্যেই কল্যাণ আছে। এরপর তিনি বলেন, যা তোমার উপকারে আসে তার প্রতি আগ্রহী হও, আল্লাহর সাহায্য চাও, আর অক্ষমতার কাছে হার মেনো না। হাদীসটি ঠিক সেই কথাই বলে যা ৭:৬৯ আয়াত ধরে নেয়। শক্তি ভালো জিনিস, প্রশ্ন কেবল একটাই, সেটা কোন দিকে তাক করা।"
          },
          {
            "en": "Ad had the strength and lost the second half of it. 41:15 records the conclusion they drew from the very same gift, asking who is greater than us in strength, and the Quran answers in the same verse that the One who created them is greater in strength than they are. An identical blessing produced a boast in one place and a duty in the other, and nothing inside the blessing decided which. That is why Hud (AS) asks for remembrance and not for further proof.",
            "bn": "আদের শক্তি ছিল, হারিয়ে ফেলেছিল তার দ্বিতীয় অংশটা। ৪১:১৫ আয়াত লিখে রাখে এই একই নিয়ামত থেকে তারা কী সিদ্ধান্তে পৌঁছেছিল; তারা জিজ্ঞেস করে, আমাদের চেয়ে বেশি শক্তিশালী আর কে আছে। কুরআন একই আয়াতে জবাব দেয়, যিনি তাদের সৃষ্টি করেছেন তিনি শক্তিতে তাদের চেয়ে প্রবল। একই নিয়ামত এক জায়গায় জন্ম দিল বড়াই, আর অন্য জায়গায় দায়িত্ব; আর কোনটা হবে তা নিয়ামতের ভেতরের কিছু ঠিক করে দেয়নি। এ কারণেই হূদ (আঃ) আরও প্রমাণ নয়, স্মরণ চান।"
          }
        ]
      },
      {
        "h": {
          "en": "Ad Across the Quran",
          "bn": "কুরআনজুড়ে আদ"
        },
        "p": [
          {
            "en": "89:6-8 puts Ad into a short list of ruined powers, naming Iram of the lofty pillars, the like of which had never been created in the land. The description admires and the context warns, which is precisely the tension of our verse. 46:26 says the same about their equipment: We had established them in what We have not established you, and gave them hearing and sight and hearts, and none of it helped them when they rejected the signs of Allah.",
            "bn": "৮৯:৬-৮ আয়াত আদকে বসায় ধ্বংস হয়ে যাওয়া শক্তিগুলোর ছোট এক তালিকায়, নাম নেয় উঁচু স্তম্ভের ইরামের, যার সমতুল্য কোনো দেশে বানানো হয়নি। বর্ণনাটি মুগ্ধতার, আর প্রসঙ্গটি সতর্কবার্তার; আমাদের আয়াতের টানাপোড়েনটাও ঠিক এটাই। ৪৬:২৬ আয়াত তাদের সাজসরঞ্জাম নিয়ে একই কথা বলে: আমি তাদের এমনভাবে প্রতিষ্ঠিত করেছিলাম যেমনটা তোমাদের করিনি, দিয়েছিলাম কান, চোখ আর হৃদয়; আল্লাহর আয়াত অস্বীকার করার সময় এর কোনোটাই তাদের কাজে আসেনি।"
          },
          {
            "en": "Two more set the rule behind the case. 10:14 says He made you successors in the land after them so that He may see how you will act, which puts succession itself under observation. 6:165 adds that the ranks people hold above one another are the instrument of the test. Read with 7:69, they say that a gift is never only a gift, and that the record of the last holders is part of what a people inherit along with the land.",
            "bn": "আরও দুটি আয়াত এই ঘটনার পেছনের নিয়মটা বসিয়ে দেয়। ১০:১৪ আয়াত বলে, তাদের পরে তিনি তোমাদের যমীনে স্থলাভিষিক্ত করেছেন এটা দেখার জন্য যে তোমরা কেমন আমল করো; অর্থাৎ স্থলাভিষিক্ত হওয়াটাই নজরদারির নিচে। ৬:১৬৫ আয়াত যোগ করে, একজনের উপরে আরেকজনের মর্যাদা পরীক্ষারই হাতিয়ার। ৭:৬৯ আয়াতের সঙ্গে পড়লে এরা বলে, নিয়ামত কখনোই কেবল নিয়ামত নয়; আগের দখলদারদের খাতাটাও জমির সঙ্গে উত্তরাধিকারে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Running the Argument on Yourself",
          "bn": "যুক্তিটা নিজের উপর চালানো"
        },
        "p": [
          {
            "en": "The method is worth copying exactly, because it works on oneself as well as on an audience. Hud (AS) brings his people no new information; he asks them to look again at what they already know and are proud of. Anyone can run the same exercise in five minutes. Name the three things about your situation you would least like to lose, then name who put each of them there. It is not a sentimental exercise. It is this verse, turned inward.",
            "bn": "পদ্ধতিটা হুবহু নকল করার মতো, কারণ এটা শ্রোতার উপর যেমন চলে নিজের উপরও তেমনই চলে। হূদ (আঃ) তাঁর জাতিকে নতুন কোনো খবর দেন না; যা তারা আগে থেকেই জানে আর যা নিয়ে গর্ব করে, সেটার দিকেই আবার তাকাতে বলেন। এই একই কাজ যে কেউ পাঁচ মিনিটে করতে পারেন। নিজের অবস্থার যে তিনটি জিনিস হারাতে আপনার সবচেয়ে বেশি কষ্ট হতো, সেগুলোর নাম লিখুন; তারপর লিখুন কে প্রতিটি জিনিস সেখানে বসিয়েছেন। কাজটা আবেগের নয়। এটা এই আয়াতটাই, ভেতরের দিকে ঘুরিয়ে দেওয়া।"
          },
          {
            "en": "The second thing to take is the word remember. The verse does not command a feeling, which nobody can summon on demand; it commands an act of recall, which anybody can perform. Gratitude in the Quran usually arrives in that order, through remembering first. And the outcome attached is not comfort but success, la'allakum tuflihun, which suggests that forgetting where a blessing came from is already a kind of failure in progress.",
            "bn": "দ্বিতীয় যেটা নেওয়ার তা হলো স্মরণ শব্দটি। আয়াতটি অনুভূতির হুকুম দেয় না, কারণ ডাকলেই অনুভূতি আসে না; আয়াতটি হুকুম দেয় মনে করার, আর সেটা যে কেউ করতে পারে। কুরআনে শুকরিয়া সাধারণত এই ক্রমেই আসে, আগে মনে করা। আর সঙ্গে জোড়া ফলটি আরাম নয়, সফলতা; লাআল্লাকুম তুফলিহূন। এ থেকে বোঝা যায়, নিয়ামত কোথা থেকে এসেছে তা ভুলে যাওয়াটা নিজেই এক ধরনের চলতে থাকা ব্যর্থতা।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning the Command Into Asking",
          "bn": "হুকুমকে চাওয়ায় বদলে নেওয়া"
        },
        "p": [
          {
            "en": "The verse's command turns into a supplication almost unchanged, and the Sunnah supplies the model. Abu Dawud and an-Nasa'i record from Mu'adh ibn Jabal (RA) that the Prophet ﷺ took him by the hand, told him that he loved him, and taught him not to leave the end of any prayer without saying: O Allah, help me to remember You, to thank You, and to worship You well. Remembrance and thanks are asked for together there, exactly as Hud (AS) joins them.",
            "bn": "আয়াতের হুকুমটা প্রায় অবিকল দু'আয় বদলে যায়, আর সুন্নাহ সেই নমুনাটা দিয়ে দেয়। আবূ দাউদ ও নাসাঈ মুআয ইবনু জাবাল (রাঃ) থেকে বর্ণনা করেন, নবী ﷺ তাঁর হাত ধরে বলেছিলেন যে তিনি তাঁকে ভালোবাসেন, আর শিখিয়ে দিয়েছিলেন প্রতি নামাযের শেষে এ কথা যেন তিনি না ছাড়েন: হে আল্লাহ, আপনার যিকির, আপনার শুকরিয়া আর সুন্দরভাবে আপনার ইবাদত করতে আমাকে সাহায্য করুন। সেখানে স্মরণ আর শুকরিয়া একসঙ্গেই চাওয়া হয়েছে, হূদ (আঃ) ঠিক যেভাবে দুটোকে জুড়ে দেন।"
          },
          {
            "en": "A short supplication in the verse's own vocabulary may be added, offered as that and not as a transmitted wording. O Allah, You placed me where others stood before me, and I did not earn the place. Do not let me boast of a strength You lent me. Keep the list of what You have given in front of my eyes, and make remembering it the thing that moves me to act rather than the thing that makes me comfortable.",
            "bn": "এর সঙ্গে এই আয়াতের শব্দ ধরে ছোট একটি প্রার্থনা যোগ করা যায়, যা বর্ণিত দু'আ নয়, এভাবেই পেশ করা। হে আল্লাহ, আমার আগে অন্যরা যেখানে দাঁড়িয়েছিল আপনি আমাকে সেখানে বসিয়েছেন, আর জায়গাটা আমি অর্জন করিনি। আপনার ধার দেওয়া শক্তি নিয়ে আমাকে বড়াই করতে দেবেন না। আপনি যা যা দিয়েছেন তার তালিকাটা আমার চোখের সামনে রাখুন, আর সেই তালিকা মনে করাটা যেন আমাকে আরাম না দিয়ে কাজে নামায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What You Hold",
          "bn": "হাতে যা আছে তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "Khalifah says that somebody stood in this place before me and does not stand here now. Do I know how the last person to hold my job, my house, my responsibility actually left it, or have I only inherited the chair and never asked? 10:14 puts succession itself under watch, so that it may be seen how a people act. If that is what my turn is for, what is being seen this month?",
            "bn": "খলীফা শব্দটি বলে, আমার এই জায়গায় আমার আগে অন্য কেউ দাঁড়িয়েছিল, এখন সে আর নেই। আমার কাজ, আমার ঘর, আমার দায়িত্ব আমার আগে যে সামলেছে সে আসলে কীভাবে ছেড়ে গেছে তা কি আমি জানি, নাকি চেয়ারটা পেয়েই গেছি আর খোঁজ নেওয়ার কথা মনেই হয়নি? ১০:১৪ আয়াত স্থলাভিষিক্ত হওয়াটাকেই নজরদারির নিচে রাখে, দেখা হবে মানুষ কেমন আমল করে। আমার পালাটা যদি এই জন্যই হয়ে থাকে, তবে এই মাসে কী দেখা যাচ্ছে?"
          },
          {
            "en": "Ad drew their own conclusion from the very same gift and said it out loud in 41:15, who is greater than us in strength. What do I say to myself about my own capability when nobody is listening, and how far is that sentence from theirs? Hud (AS) commanded remembering rather than gratitude, because an act can be commanded and a feeling cannot. What act is my remembering supposed to produce before this week ends?",
            "bn": "আদ এই একই নিয়ামত থেকে নিজেদের সিদ্ধান্তে পৌঁছেছিল আর তা মুখেও বলে ফেলেছিল, ৪১:১৫ আয়াতে, আমাদের চেয়ে বেশি শক্তিশালী আর কে আছে। কেউ যখন শুনছে না, নিজের সামর্থ্য নিয়ে তখন আমি নিজেকে কী বলি, আর সেই কথাটা তাদের কথা থেকে কতটা দূরে? হূদ (আঃ) হুকুম দিয়েছেন মনে করার, শুকরিয়ার অনুভব জাগানোর নয়, কারণ কাজের হুকুম দেওয়া যায়, অনুভূতির যায় না। এই সপ্তাহ শেষ হওয়ার আগে আমার সেই মনে করাটার কোন কাজটা বের করে আনার কথা?"
          }
        ]
      }
    ]
  },
  "7:74": {
    "sections": [
      {
        "h": {
          "en": "Where It Stands in the Speech",
          "bn": "বক্তৃতার কোন জায়গায়"
        },
        "p": [
          {
            "en": "7:73 sends Salih (AS) to Thamud with the same opening given to Nuh (AS) and to Hud (AS), and then adds what is particular to this people: a clear proof has come to you, this is the she-camel of Allah as a sign for you, so leave her to eat in Allah's land and do not touch her with harm. 7:74 is the second half of that same speech, and it changes subject completely. The camel is not mentioned in it again.",
            "bn": "৭:৭৩ আয়াত সালিহকে (আঃ) সামূদের কাছে পাঠায় নূহ (আঃ) ও হূদকে (আঃ) দেওয়া সেই একই শুরুর কথা দিয়ে, তারপর যোগ করে এই জাতির জন্য আলাদা কথাটা: তোমাদের কাছে তোমাদের প্রতিপালকের পক্ষ থেকে সুস্পষ্ট প্রমাণ এসেছে, এ হলো আল্লাহর উটনী, তোমাদের জন্য নিদর্শন; তাকে আল্লাহর যমীনে চরে খেতে দাও, মন্দ উদ্দেশ্যে তাকে স্পর্শ করো না। ৭:৭৪ আয়াত সেই একই বক্তৃতার দ্বিতীয় অংশ, আর এখানে প্রসঙ্গ পুরো বদলে যায়। উটনীর কথা এতে আর একবারও আসে না।"
          },
          {
            "en": "What follows shows why the verse matters. 7:75 has the arrogant chiefs challenging the oppressed believers among them, 7:76 has them rejecting outright what those believers accepted, and 7:77 has them hamstringing the camel and demanding the punishment. Then 7:78 says the earthquake seized them and left them lying prone where they lived. The verse we are reading describes those dwellings before the sentence is carried out inside them.",
            "bn": "এরপর যা আসে তা থেকেই বোঝা যায় আয়াতটি কেন গুরুত্বপূর্ণ। ৭:৭৫ আয়াতে অহংকারী প্রধানরা নিজেদের মধ্যকার দুর্বল মুমিনদের চ্যালেঞ্জ করে, ৭:৭৬ আয়াতে তারা সাফ অস্বীকার করে সেই জিনিস যা ওই মুমিনরা মেনে নিয়েছিল, আর ৭:৭৭ আয়াতে তারা উটনীকে মেরে ফেলে আর শাস্তি নিয়ে আসতে বলে। তারপর ৭:৭৮ আয়াত বলে, ভূমিকম্প তাদের পাকড়াও করল আর যেখানে তারা থাকত সেখানেই তারা মুখ থুবড়ে পড়ে রইল। আমরা যে আয়াতটি পড়ছি, সেটি ওই বাসস্থানগুলোরই বর্ণনা, শাস্তি সেখানে কার্যকর হওয়ার আগে।"
          }
        ]
      },
      {
        "h": {
          "en": "Settled, and Carving",
          "bn": "বসতি, আর পাহাড় কাটা"
        },
        "p": [
          {
            "en": "Wadhkuru idh ja'alakum khulafa'a min ba'di 'Ad. It is the sentence Hud (AS) used to Ad five verses earlier, with one name changed: Ad succeeded the people of Nuh, and Thamud succeeded Ad. The reader is being shown a chain, and every link in it is described as a gift. Nobody in the chain arrived at an empty land by accident, and nobody in it was the first to hold the ground they were standing on.",
            "bn": "ওয়াযকুরূ ইয জাআলাকুম খুলাফাআ মিম বাদি আদ। এটি সেই বাক্য যা হূদ (আঃ) পাঁচ আয়াত আগে আদকে বলেছিলেন, কেবল একটি নাম বদলে গেছে: আদ এসেছিল নূহের (আঃ) কওমের পরে, আর সামূদ এল আদের পরে। পাঠককে দেখানো হচ্ছে একটি শেকল, আর তার প্রতিটি কড়াকেই বলা হচ্ছে নিয়ামত। এই শেকলের কেউই দুর্ঘটনাক্রমে খালি জমিতে এসে পড়েনি, আর কেউই যে মাটিতে দাঁড়িয়ে আছে তার প্রথম দখলদার নয়।"
          },
          {
            "en": "Then wa bawwa'akum fi'l-ard. Bawwa'a is from b-w-', settling somebody into a place made ready for them, giving a dwelling rather than merely putting a people somewhere. The verse then names what they did with the place, and the naming is exact. Tattakhidhuna min suhuliha qusuran wa tanhituna al-jibala buyutan: palaces out of the plains, houses out of the mountains. Both verbs are in the present, so this is what they are doing while Salih (AS) is speaking.",
            "bn": "এরপর ওয়া বাওয়্যাআকুম ফিল আরদ। বাওয়্যাআ এসেছে ব-ও-আ ধাতু থেকে, যার অর্থ কাউকে তার জন্য তৈরি করা জায়গায় বসিয়ে দেওয়া, কোথাও ফেলে রাখা নয়, থাকার ঠিকানা দেওয়া। এরপর আয়াতটি বলে দেয় সেই জায়গা দিয়ে তারা কী করেছে, আর বলাটা একদম মেপে। তাত্তাখিযূনা মিন সুহূলিহা কুসূরাও ওয়া তানহিতূনাল জিবালা বুয়ূতা: সমতল থেকে প্রাসাদ, পাহাড় থেকে ঘর। দুটি ক্রিয়াই বর্তমান কালে, অর্থাৎ সালিহ (আঃ) যখন কথা বলছেন তখন এ কাজ চলছে।"
          },
          {
            "en": "Naht is carving, the removal of material until a shape is left, and here the object of the cutting is the mountain itself. The same scene told elsewhere inserts a preposition: 26:149 has carving out of the mountains, houses, with skill, and 15:82 says they used to carve from the mountains houses, feeling secure. Neither of those, and not this verse either, contains a word of blame for the building. 26:149 credits the skill and 15:82 names the security they felt in it.",
            "bn": "নাহত মানে খোদাই করা, উপকরণ সরিয়ে সরিয়ে একটা আকৃতি রেখে দেওয়া; আর এখানে কাটার বস্তুটাই পাহাড়। একই দৃশ্য অন্যত্র বলা হয়েছে একটি অব্যয় জুড়ে: ২৬:১৪৯ আয়াতে আছে দক্ষতার সঙ্গে পাহাড় কেটে ঘর বানানো, আর ১৫:৮২ আয়াত বলে, তারা পাহাড় খোদাই করে ঘর বানাত আর নিজেদের নিরাপদ ভাবত। ওই দুটিতেও নয়, এই আয়াতেও নয়, গড়ার কাজটার জন্য একটি শব্দও দোষারোপ নেই। ২৬:১৪৯ আয়াত দক্ষতার স্বীকৃতি দেয়, আর ১৫:৮২ আয়াত সেই ঘরে তারা যে নিরাপত্তা বোধ করত তার নাম নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Turn on One Word",
          "bn": "একটি শব্দে মোড়"
        },
        "p": [
          {
            "en": "Fadhkuru ala'a Allah wa la ta'thaw fi'l-ardi mufsidin. The fa joins the remembering straight onto the list that has just ended, and the prohibition is then attached with nothing heavier than a wa. 'Atha is a verb for wreaking havoc, damage done without restraint. Mufsidin stands as a description of the state of the one doing it. Remembering the favours and not ruining the earth are given as a single instruction here, not as two.",
            "bn": "ফাযকুরূ আলাআল্লাহি ওয়া লা তা'সাও ফিল আরদি মুফসিদীন। ফা অক্ষরটি স্মরণ করার হুকুমকে সোজা জুড়ে দেয় মাত্র শেষ হওয়া তালিকার সঙ্গে, আর নিষেধটা জোড়া লাগে কেবল একটি ওয়া দিয়ে। আ'সা ক্রিয়াটি বোঝায় তাণ্ডব চালানো, লাগামছাড়া ক্ষতি করা। মুফসিদীন শব্দটি দাঁড়িয়ে থাকে যে ক্ষতি করছে তার অবস্থার বর্ণনা হিসেবে। নিয়ামত মনে রাখা আর যমীন নষ্ট না করা, এখানে দুটো আলাদা হুকুম নয়, একটিই হুকুম।"
          },
          {
            "en": "The same wording appears elsewhere, which is how a reader knows it is a standing prohibition rather than a remark about Thamud alone. 2:60 closes the account of the twelve springs struck from the rock with the identical clause, do not commit abuse on the earth, spreading corruption. Shu'ayb (AS) gives it to Madyan in 11:85 alongside full measure and weight, and again in 29:36 alongside expecting the Last Day. Thamud here, the Children of Israel in 2:60, Madyan twice over: different peoples, different sins, one sentence.",
            "bn": "একই কথা কুরআনের অন্যত্রও আছে, আর এ থেকেই পাঠক বোঝেন এটি কেবল সামূদকে নিয়ে মন্তব্য নয়, চিরস্থায়ী এক নিষেধাজ্ঞা। ২:৬০ আয়াত পাথর থেকে ফেটে বের হওয়া বারোটি ঝর্ণার বৃত্তান্ত শেষ করে হুবহু এই কথা দিয়েই, পৃথিবীতে ফাসাদ সৃষ্টি করে বেড়িও না। শুআইব (আঃ) মাদইয়ানকে এটি বলেন ১১:৮৫ আয়াতে মাপ ও ওজন পুরো করার সঙ্গে, আর আবার ২৯:৩৬ আয়াতে শেষ দিনের প্রতীক্ষার সঙ্গে। এখানে সামূদ, ২:৬০ আয়াতে বনী ইসরাঈল, আর মাদইয়ান দুবার: জাতি আলাদা, অপরাধ আলাদা, বাক্য একটিই।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Commentators Take It",
          "bn": "মুফাসসিরগণ যেভাবে নেন"
        },
        "p": [
          {
            "en": "At-Tabari glosses bawwa'akum as giving them settled dwellings in a land they could take as their own, and reads the palaces and the carved houses as the detail of that settling. The commentators report that the two kinds of building answered the two seasons, though they differ over which served which, and the verse itself does not say. What the verse does say is that both belong on the list of favours.",
            "bn": "আত-তাবারী বাওয়্যাআকুম শব্দের অর্থ করেন এমন এক ভূমিতে থিতু বাসস্থান দেওয়া যাকে তারা নিজেদের বলতে পারে, আর প্রাসাদ ও খোদাই করা ঘরগুলোকে তিনি পড়েন সেই বসতি দেওয়ারই খুঁটিনাটি হিসেবে। মুফাসসিরগণ বলেন, দুই ধরনের বাড়ি ছিল দুই ঋতুর জন্য; তবে কোনটা কোন ঋতুর, তা নিয়ে তাঁদের মধ্যে মত আলাদা, আর আয়াত নিজে সে কথা বলে না। আয়াত যা বলে তা হলো, দুটোই নিয়ামতের তালিকায় পড়ে।"
          },
          {
            "en": "Ibn Kathir reads the verse as a reminder of favour placed deliberately in front of a prohibition, so that the prohibition lands on people who have just been made to count what they were given. As-Sa'di takes wa la ta'thaw as covering every kind of ruin, in the land and in people's dealings alike, and reads it as the natural other half of remembering, since a man who keeps the favours in view does not set about damaging what he was handed.",
            "bn": "ইবনু কাসীর আয়াতটিকে পড়েন এভাবে, নিষেধের ঠিক আগে ইচ্ছে করেই বসানো হয়েছে নিয়ামতের স্মারক, যাতে নিষেধটা এসে পড়ে এমন লোকদের উপর যারা মাত্রই নিজেদের প্রাপ্তির হিসাব করেছে। আস-সাদী ওয়া লা তা'সাও কথাটিকে ধরেন সব ধরনের ধ্বংসের উপর, জমিনেও আর মানুষের লেনদেনেও। তিনি একে পড়েন স্মরণ করার স্বাভাবিক অপর অর্ধেক হিসেবে, কারণ যে মানুষ নিয়ামতগুলো চোখের সামনে রাখে সে তার পাওয়া জিনিস ভাঙতে বসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Prophet at al-Hijr",
          "bn": "নবী ﷺ হিজরের ভূমিতে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim both record from Abdullah ibn Umar (RA) that when the Prophet ﷺ passed the dwellings of al-Hijr, the country of Thamud, on the march to Tabuk, he told his companions not to enter upon these people who had been punished unless they were weeping, so that what befell them should not befall the travellers too. He then covered his head and quickened his pace until he had crossed the valley.",
            "bn": "আল-বুখারী ও মুসলিম দুজনেই আবদুল্লাহ ইবনু উমার (রাঃ) থেকে বর্ণনা করেন, তাবূকের পথে হিজরের বসতি, অর্থাৎ সামূদের এলাকা পার হওয়ার সময় নবী ﷺ সঙ্গীদের বলেছিলেন, যাদের উপর আযাব নেমেছিল তাদের এলাকায় কান্না ছাড়া ঢুকো না, যেন তাদের যা হয়েছিল পথচারীদেরও তা না হয়। এরপর তিনি নিজের মাথা ঢেকে নিলেন আর উপত্যকা পার না হওয়া পর্যন্ত পা চালিয়ে গেলেন।"
          },
          {
            "en": "In the same episode he ordered the water they had drawn from the wells of Thamud to be poured out and the dough kneaded with it fed to the camels, and told them to draw instead from the well the she-camel used to drink from. The bearing on our verse is direct. The houses described in 7:74 were still standing, still cut into the rock, centuries later, and the instruction given about them was not admiration but fear.",
            "bn": "এই ঘটনাতেই তিনি হুকুম দিলেন, সামূদের কূপ থেকে তোলা পানি ফেলে দিতে হবে, আর সেই পানিতে মাখা আটা উটদের খাইয়ে দিতে হবে; বরং যে কূপ থেকে উটনী পানি পান করত সেখান থেকে পানি নিতে বললেন। আমাদের আয়াতের সঙ্গে এর সম্পর্ক সোজা। ৭:৭৪ আয়াতে বর্ণিত ঘরগুলো শত শত বছর পরেও দাঁড়িয়ে ছিল, তখনো পাথরে কাটা; আর সেগুলো নিয়ে যে নির্দেশ এল তা মুগ্ধতার নয়, ভয়ের।"
          }
        ]
      },
      {
        "h": {
          "en": "Thamud Told Again",
          "bn": "সামূদের কথা আরেকবার"
        },
        "p": [
          {
            "en": "26:146-152 is Salih's fuller warning to the same people. It asks whether they will be left secure in what is here, among gardens and springs, crops and date palms with soft fruit, carving houses out of the mountains with skill; then it says fear Allah and obey me, and do not obey the command of the extravagant, who corrupt in the earth and do not set it right. The same inventory, and the same conclusion.",
            "bn": "২৬:১৪৬-১৫২ আয়াত একই জাতিকে দেওয়া সালিহের (আঃ) আরও বিস্তারিত সতর্কবার্তা। সেখানে প্রশ্ন করা হয়, এখানে যা আছে তার ভেতরে তোমাদের কি নিরাপদে ছেড়ে দেওয়া হবে; বাগান আর ঝর্ণা, ক্ষেত আর কচি ফলের খেজুরগাছ, আর দক্ষতার সঙ্গে পাহাড় কেটে বানানো ঘর। তারপর বলা হয়, আল্লাহকে ভয় করো আর আমার কথা মানো; আর সীমালঙ্ঘনকারীদের হুকুম মেনো না, যারা যমীনে ফাসাদ করে আর সংস্কার করে না। একই তালিকা, আর একই সিদ্ধান্ত।"
          },
          {
            "en": "Three more fill the picture in. 15:82 says they carved houses out of the mountains and felt secure in them. 89:9 names Thamud among the broken powers as those who carved the rocks in the valley. And 11:61 gives Salih's other opening to them, that He produced you from the earth and settled you in it, which puts the whole of their achievement on ground they did not make and out of material they did not supply.",
            "bn": "আরও তিনটি ছবিটা পূর্ণ করে। ১৫:৮২ আয়াত বলে, তারা পাহাড় খোদাই করে ঘর বানাত আর সেখানে নিজেদের নিরাপদ ভাবত। ৮৯:৯ আয়াত ভেঙে পড়া শক্তিগুলোর মধ্যে সামূদের নাম নেয় এভাবে, যারা উপত্যকায় পাথর কেটেছিল। আর ১১:৬১ আয়াত তাদের উদ্দেশে সালিহের (আঃ) আরেকটি শুরুর কথা দেয়, তিনিই তোমাদের মাটি থেকে সৃষ্টি করেছেন আর তাতেই তোমাদের প্রতিষ্ঠিত করেছেন; অর্থাৎ তাদের গোটা কীর্তিটা দাঁড়িয়ে আছে এমন মাটির উপর যা তারা বানায়নি আর এমন উপকরণ দিয়ে যা তারা জোগায়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Between Building and Wrecking",
          "bn": "গড়া আর ভাঙার মাঝখানে"
        },
        "p": [
          {
            "en": "The structural lesson is the joint between the two halves of the sentence, because that joint is where most people come apart. Capability and restraint are handed over together here, and a life that keeps only the first half is exactly the life the verse is warning about. A skill, a budget, an authority over other people: each is a favour to be counted and a power to be fenced, and the verse will not let anyone take the first without the second.",
            "bn": "গঠনের দিক থেকে শেখার জিনিসটা হলো বাক্যের দুই অর্ধেকের জোড়টা, কারণ ঠিক ওই জোড়েই বেশিরভাগ মানুষ খুলে যায়। সামর্থ্য আর সংযম এখানে একসঙ্গে হাতে তুলে দেওয়া হচ্ছে, আর যে জীবন কেবল প্রথম অর্ধেকটা রেখে দেয় আয়াতটি ঠিক সেই জীবনের ব্যাপারেই সতর্ক করছে। একটা দক্ষতা, একটা বাজেট, মানুষের উপর একটা কর্তৃত্ব; প্রতিটিই একদিকে গোনার মতো নিয়ামত, অন্যদিকে বেড়া দেওয়ার মতো ক্ষমতা। আয়াতটি কাউকে দ্বিতীয়টি ছাড়া প্রথমটি নিতে দেবে না।"
          },
          {
            "en": "The second lesson is about scale. Ta'thaw is not a word for a small slip; it is havoc. But nobody wrecks anything large without first being allowed to wreck something small, and this prohibition was given to people who had not yet hamstrung anything. So the useful question is not whether I would destroy something on the scale of 7:77. It is what a small allowance of mine looks like after ten years of nobody objecting.",
            "bn": "দ্বিতীয় শিক্ষাটা মাপ নিয়ে। তা'সাও শব্দটা ছোটখাটো ভুলের জন্য নয়, এটা তাণ্ডবের শব্দ। তবে ছোট কিছু নষ্ট করার সুযোগ না পেলে কেউ বড় কিছু ভাঙে না, আর এই নিষেধ দেওয়া হয়েছিল এমন লোকদের, যারা তখনো উটনীর গায়েও হাত তোলেনি। তাই কাজের প্রশ্নটা এই নয় যে ৭:৭৭ আয়াতের মাপের কিছু আমি ধ্বংস করতাম কিনা। প্রশ্নটা হলো, দশ বছর ধরে কেউ আপত্তি না করলে আমার ছোট ছাড়টা শেষে কী চেহারা নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What to Ask Here",
          "bn": "এখানে কী চাইবেন"
        },
        "p": [
          {
            "en": "This verse is a command rather than a supplication, and no transmitted du'a is tied specifically to it. What the Sunnah supplies for the situation is the instruction in the narration above, which is itself close to a prayer: do not walk among ruins of this kind except weeping, and ask not to be visited by what visited them. Al-Bukhari's account has the Prophet ﷺ hurrying his companions out of that valley rather than teaching them a formula in it.",
            "bn": "এই আয়াতটি দু'আ নয়, হুকুম; আর এর সঙ্গে আলাদা করে বাঁধা কোনো বর্ণিত দু'আও নেই। এ অবস্থার জন্য সুন্নাহ যা দেয় তা হলো উপরের হাদীসের নির্দেশটাই, আর সেটি নিজেই প্রায় একটি প্রার্থনা: এ ধরনের ধ্বংসাবশেষের মধ্যে কান্না ছাড়া চলাফেরা কোরো না, আর চাও যেন তাদের উপর যা এসেছিল তা তোমার উপর না আসে। আল-বুখারীর বর্ণনায় দেখা যায়, নবী ﷺ ওই উপত্যকায় কোনো বাঁধা বুলি না শিখিয়ে বরং সঙ্গীদের দ্রুত সেখান থেকে বের করে এনেছিলেন।"
          },
          {
            "en": "A short supplication in the verse's own vocabulary may be offered as such, and not as a transmitted wording. O Allah, You settled me where I did not clear the ground, and whatever I have made was made with strength on loan. Let me count what You gave before I spend it. And keep my hands off what You have placed me in the middle of, whether that is a piece of land, a household, a trust, or somebody else's good name.",
            "bn": "এই আয়াতের শব্দ ধরে ছোট একটি প্রার্থনা এভাবেই পেশ করা যায়, বর্ণিত দু'আ হিসেবে নয়। হে আল্লাহ, যে জমি আমি সাফ করিনি সেখানেই আপনি আমাকে বসিয়েছেন, আর যা কিছু আমি বানিয়েছি তা বানিয়েছি ধার করা শক্তি দিয়ে। খরচ করার আগে আপনার দেওয়া জিনিসগুলো আমাকে গুনে নিতে দিন। আর যেসবের মাঝখানে আপনি আমাকে বসিয়েছেন তাতে আমার হাত পড়তে দেবেন না, সে এক টুকরো জমিই হোক, একটি সংসার, একটি আমানত, কিংবা অন্য কারো সুনাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Hands",
          "bn": "নিজের হাত নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The gift and the limit arrive in one sentence, tied together by nothing more than an and. Which of my abilities have I accepted entirely on the first half of that sentence and never once on the second? Salih (AS) described Thamud's craft without a syllable of blame in it, so when somebody corrects the way I use something I am good at, do I hear a correction, or do I hear an attack on the skill itself?",
            "bn": "নিয়ামত আর সীমা আসে একই বাক্যে, দুটোকে বেঁধেছে কেবল একটি 'আর'। আমার কোন সামর্থ্যটা আমি পুরোপুরি নিয়েছি ওই বাক্যের প্রথম অর্ধেক ধরে, দ্বিতীয় অর্ধেক ধরে একবারও নিইনি? সালিহ (আঃ) সামূদের কারিগরির বর্ণনা দিয়েছেন এক ফোঁটা দোষারোপ ছাড়াই। তাই আমি যে কাজটা ভালো পারি সেটা কীভাবে ব্যবহার করছি তা নিয়ে কেউ শুধরে দিলে আমি কি শুনি একটা সংশোধন, নাকি মনে হয় দক্ষতাটার উপরেই হামলা হলো?"
          },
          {
            "en": "The houses were still cut into the rock at al-Hijr centuries later, and the Prophet ﷺ covered his head and quickened his pace through that valley rather than stop and admire the work. What of mine will still be standing after me, and what would somebody passing it be right to feel? And where am I spending a capacity that was lent to me as though it had been handed over outright?",
            "bn": "শত শত বছর পরেও হিজরের পাথর কেটে বানানো সেই ঘরগুলো দাঁড়িয়েই ছিল, আর নবী ﷺ সেই উপত্যকায় থেমে কারিগরি দেখার বদলে মাথা ঢেকে পা চালিয়ে পার হয়ে গিয়েছিলেন। আমার পরেও আমার কোনটা দাঁড়িয়ে থাকবে, আর তার পাশ দিয়ে যাওয়া কেউ কী অনুভব করলে সেটা ঠিক হতো? আর ধার হিসেবে পাওয়া কোন সামর্থ্য আমি এমনভাবে খরচ করছি যেন সেটা একেবারে আমার নামে লিখে দেওয়া হয়ে গেছে?"
          }
        ]
      }
    ]
  },
  "7:156": {
    "sections": [
      {
        "h": {
          "en": "Whose Words These Are",
          "bn": "এগুলো কার কথা"
        },
        "p": [
          {
            "en": "The boundary matters here, because the verse contains two speakers. Musa (AS) had chosen seventy men of his people for an appointed meeting, and when the earthquake seized them he began to plead. That plea starts in 7:155 with, my Lord, if You had willed You could have destroyed them and me before, and runs on through would You destroy us for what the foolish among us have done, this is only Your trial, have mercy upon us, You are the best of forgivers.",
            "bn": "এখানে সীমারেখাটি গুরুত্বপূর্ণ, কারণ আয়াতটিতে দুজন বক্তা আছেন। মূসা (আঃ) নির্ধারিত সাক্ষাতের জন্য তাঁর জাতির সত্তরজনকে বাছাই করেছিলেন, আর ভূমিকম্প যখন তাদের ধরল তখন তিনি মিনতি শুরু করলেন। সেই মিনতি শুরু হয় 7:155 আয়াতে — হে আমার প্রতিপালক, আপনি চাইলে তো এদেরকে ও আমাকে আগেই ধ্বংস করতে পারতেন — এবং চলতে থাকে: আমাদের মধ্যকার নির্বোধেরা যা করেছে তার জন্য কি আপনি আমাদের ধ্বংস করবেন, এ তো কেবল আপনার পরীক্ষা, আমাদের প্রতি দয়া করুন, আপনিই তো সর্বশ্রেষ্ঠ ক্ষমাশীল।"
          },
          {
            "en": "His words continue into our verse and end partway through it: and decree for us good in this world and in the Hereafter, indeed we have turned back to You. Everything after that is Allah's answer — My punishment, I strike with it whom I will, and My mercy has encompassed all things — and the answer does not stop at the end of the verse either. It carries on through the clause about whom the mercy is written for, and into 7:157 describing them further.",
            "bn": "তাঁর কথা আমাদের আয়াতের ভেতরে এসে মাঝপথে শেষ হয়: আর আমাদের জন্য এই দুনিয়ায় ও আখিরাতে কল্যাণ লিখে দিন, নিশ্চয়ই আমরা আপনার দিকেই ফিরে এসেছি। এরপরের সবটুকু আল্লাহর জবাব — আমার শাস্তি, আমি যাকে চাই তাকে তা দিয়ে আঘাত করি, আর আমার রহমত সবকিছুকে পরিব্যাপ্ত করে আছে — আর জবাবটি আয়াতের শেষেও থামে না। এটি চলতে থাকে সেই বাক্যাংশ পর্যন্ত যেখানে বলা হয় রহমতটি কাদের জন্য লেখা হবে, এবং 7:157 আয়াতে গিয়ে তাদের আরও বর্ণনা দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Write for Us, and I Will Write",
          "bn": "আমাদের জন্য লিখুন, আর আমি লিখব"
        },
        "p": [
          {
            "en": "Musa (AS) asks with the verb uktub — write, decree, enter it in the record. Allah answers with the same root: fa-sa-aktubuha, so I shall write it. A prophet asks for a good thing to be entered for his people, and the reply grants an entry of a different order altogether. This is the verb that appears twice in Surah al-An'am, at 6:12 and 6:54, where Allah says He has written mercy upon Himself. Mercy is spoken of throughout as something recorded.",
            "bn": "মূসা (আঃ) চান 'উকতুব' ক্রিয়াপদ দিয়ে — লিখে দিন, নির্ধারণ করে দিন, খাতায় তুলে নিন। আল্লাহ জবাব দেন একই ধাতুমূল দিয়ে: 'ফাসাআকতুবুহা' — তবে আমি তা লিখব। একজন নবী তাঁর জাতির জন্য একটি কল্যাণ লিখে দিতে বলেন, আর জবাবে সম্পূর্ণ অন্য মাত্রার একটি লেখা মঞ্জুর হয়। এই সেই ক্রিয়াপদ যা সূরা আল-আন'আমে দুবার আসে, 6:12 ও 6:54 আয়াতে, যেখানে আল্লাহ বলেন তিনি নিজের ওপর রহমত লিখে নিয়েছেন। রহমতের কথা সর্বত্রই বলা হয় লিপিবদ্ধ কিছু হিসেবে।"
          },
          {
            "en": "The ground Musa (AS) gives for the request is worth hearing: inna hudna ilayk, we have turned back to You. The commentators gloss hudna as tubna, we have repented. He does not argue that his people have earned anything; the seventy had just been struck down. The only credential offered is the turning itself. That is the standing on which the greatest sentence about mercy in the Quran is spoken.",
            "bn": "মূসা (আঃ) চাওয়ার জন্য যে ভিত্তিটি দেন তা শোনার মতো: 'ইন্না হুদনা ইলাইক' — আমরা আপনার দিকেই ফিরে এসেছি। মুফাসসিরগণ 'হুদনা'-র ব্যাখ্যায় বলেন 'তুবনা' — আমরা তওবা করেছি। তিনি এ যুক্তি দেন না যে তাঁর জাতি কিছু অর্জন করেছে; সেই সত্তরজন তো সবে আঘাতপ্রাপ্ত হয়েছেন। একমাত্র যে যোগ্যতাটি পেশ করা হয় তা হলো ফিরে আসাটুকুই। কুরআনে রহমত সম্পর্কে সবচেয়ে বড় বাক্যটি এই ভিত্তির ওপর দাঁড়িয়েই উচ্চারিত হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shape of the Answer",
          "bn": "জবাবের গড়ন"
        },
        "p": [
          {
            "en": "The two halves of the reply are not built the same way. Punishment is tied to will: I strike with it whom I will. Mercy is stated without any such tie: wa rahmati wasi'at kulla shay', and My mercy has encompassed all things. The verb is in the perfect tense, describing something already accomplished rather than promised, and kulla shay', every single thing, leaves no creature and no category outside its reach.",
            "bn": "জবাবের দুটি অর্ধেক একই ছাঁচে গড়া নয়। শাস্তি ইচ্ছার সঙ্গে বাঁধা: আমি যাকে চাই তাকে তা দিয়ে আঘাত করি। রহমত সে ধরনের কোনো বাঁধন ছাড়াই বলা হয়েছে: 'ওয়া রাহমাতী ওয়াসিআত কুল্লা শাইইন' — আর আমার রহমত সবকিছুকে পরিব্যাপ্ত করে ফেলেছে। ক্রিয়াপদটি অতীত-সম্পন্ন কালে, অর্থাৎ প্রতিশ্রুত নয় বরং ইতিমধ্যেই সম্পন্ন কিছুকে বোঝায়; আর 'কুল্লা শাইইন' — প্রতিটি জিনিস — এর নাগালের বাইরে কোনো সৃষ্টি বা কোনো শ্রেণিকে রাখে না।"
          },
          {
            "en": "The angels who carry the Throne pray with this same word in 40:7, saying that Allah has encompassed all things in mercy and knowledge, and then asking forgiveness for those who repent and follow His way. Muslim relates from Abu Hurayrah (RA) that Allah has a hundred portions of mercy, sent one of them down among the creation, by which they show compassion to one another, and kept ninety-nine for the Day of Resurrection. All the tenderness anyone has ever received is from the one portion.",
            "bn": "আরশবাহী ফেরেশতারা 40:7 আয়াতে এই একই শব্দ দিয়ে দোয়া করেন — আপনি রহমত ও জ্ঞান দিয়ে সবকিছুকে পরিব্যাপ্ত করে রেখেছেন — এবং তারপর যারা তওবা করে ও আপনার পথ অনুসরণ করে তাদের জন্য ক্ষমা চান। মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর রহমতের একশত ভাগ আছে; তার একটি ভাগ তিনি সৃষ্টির মধ্যে নামিয়ে দিয়েছেন, যা দিয়ে তারা একে অপরের প্রতি দয়া দেখায়, আর নিরানব্বইটি রেখে দিয়েছেন কিয়ামতের দিনের জন্য। মানুষ আজ পর্যন্ত যত কোমলতা পেয়েছে, সবই সেই এক ভাগ থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Clause That Gets Cut Off",
          "bn": "যে বাক্যাংশটি কেটে ফেলা হয়"
        },
        "p": [
          {
            "en": "The famous half of this verse is usually quoted alone, and the sentence does not end there. It continues: so I shall write it for those who are mindful of Allah and give zakah and those who believe in Our signs. The mufassirun draw a distinction from this. The mercy that has already encompassed all things is the mercy of this world, which reaches the believer and the denier, the obedient and the rebel, in health and provision and every daily kindness.",
            "bn": "এই আয়াতের বিখ্যাত অর্ধেকটি সাধারণত একাই উদ্ধৃত হয়, অথচ বাক্যটি সেখানে শেষ হয় না। এটি চলতে থাকে: তবে আমি তা লিখে দেব তাদের জন্য যারা তাকওয়া অবলম্বন করে, যাকাত দেয়, আর যারা আমার নিদর্শনাবলিতে ঈমান আনে। মুফাসসিরগণ এখান থেকে একটি পার্থক্য টানেন। যে রহমত ইতিমধ্যেই সবকিছুকে পরিব্যাপ্ত করেছে, তা দুনিয়ার রহমত — যা মুমিন ও অস্বীকারকারী, অনুগত ও বিদ্রোহী সবার কাছেই পৌঁছায়: সুস্থতায়, রিযিকে, আর প্রতিদিনের প্রতিটি অনুগ্রহে।"
          },
          {
            "en": "The mercy that is written, entered permanently in the record, is scoped to the three qualities the verse names. So the verse is neither a blank cheque nor a narrow door. It says the reach is total and the settlement is conditioned, and it names conditions that are actions rather than feelings: reverence, giving, believing. The same balance appears in 6:147, where the Prophet ﷺ is told to say that his Lord is the possessor of vast mercy, and that His punishment is not turned back from the criminal people.",
            "bn": "আর যে রহমত লেখা হয়, স্থায়ীভাবে খাতায় তোলা হয়, তা আয়াতে নাম নেওয়া তিনটি গুণের সঙ্গে শর্তযুক্ত। ফলে আয়াতটি না কোনো খালি চেক, না কোনো সরু দরজা। এটি বলে যে নাগাল সর্বব্যাপী আর ফয়সালা শর্তসাপেক্ষ; আর যে শর্তগুলোর নাম নেয় সেগুলো অনুভূতি নয়, কাজ: তাকওয়া, দান, ঈমান। একই ভারসাম্য 6:147 আয়াতেও আছে, যেখানে নবী ﷺ-কে বলতে বলা হয় যে তাঁর প্রতিপালক প্রশস্ত দয়ার অধিকারী, আর তাঁর শাস্তি অপরাধী সম্প্রদায়ের ওপর থেকে ফেরানো হয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking the Way Musa Asked",
          "bn": "মূসা যেভাবে চেয়েছিলেন"
        },
        "p": [
          {
            "en": "The du'a itself is short enough to keep. Decree for us good in this world and good in the Hereafter — one request covering both, made in the plural for a community that had just failed, on the sole ground of having turned back. It is a useful correction to the way most of us ask, alternating between requests for this world when we are comfortable and requests for the next when we are frightened.",
            "bn": "দোয়াটি নিজে এতটাই ছোট যে মনে রাখা যায়। আমাদের জন্য এই দুনিয়ায় কল্যাণ লিখে দিন, আর আখিরাতেও — একটি চাওয়া যা দুটোকেই ধরে, বহুবচনে বলা এমন এক সম্প্রদায়ের জন্য যারা সবেমাত্র ব্যর্থ হয়েছে, আর একমাত্র ভিত্তি ফিরে আসাটুকু। আমরা বেশিরভাগ যেভাবে চাই — স্বস্তিতে থাকলে দুনিয়া, ভয় পেলে আখিরাত — তার একটি কাজের সংশোধন এটি।"
          },
          {
            "en": "And it fixes the direction of the whole verse. Mercy is not persuaded into existence by our asking; it is already there, wider than everything. What our asking and our turning do is put us where the written portion is being written. Read that way, the verse produces neither the complacency of assuming everyone is covered nor the fear of assuming nobody is. It produces movement toward the three things it named.",
            "bn": "আর এটি গোটা আয়াতের দিকটিও ঠিক করে দেয়। আমাদের চাওয়ার কারণে রহমত অস্তিত্বে আসে না; তা আগে থেকেই আছে, সবকিছুর চেয়ে প্রশস্ত। আমাদের চাওয়া ও আমাদের ফিরে আসা যা করে তা হলো, আমাদেরকে সেখানে নিয়ে দাঁড় করায় যেখানে লেখা অংশটি লেখা হচ্ছে। এভাবে পড়লে আয়াতটি না জন্ম দেয় 'সবাই তো ঢেকে আছে' ধরনের নিশ্চিন্ততার, না জন্ম দেয় 'কেউই নয়' ধরনের ভয়ের। এটি জন্ম দেয় নাম নেওয়া তিনটি জিনিসের দিকে চলার।"
          }
        ]
      }
    ]
  },
  "7:180": {
    "sections": [
      {
        "h": {
          "en": "The Most Beautiful Names",
          "bn": "সর্বসুন্দর নামসমূহ"
        },
        "p": [
          {
            "en": "To Allah belong the most beautiful names, so call on Him by them. Al-asma al-husna: husna is a superlative — not merely beautiful names but the most beautiful there are. The phrase appears four times in the Quran — here, and in 17:110, 20:8 and 59:24 — and it is repeatedly attached to practice: call by them, as 7:180 and 17:110 command, and glorify by them, as 59:24's context does. The names are not ornaments; they are the appointed way into knowing their Owner.",
            "bn": "আল্লাহরই সর্বসুন্দর নামসমূহ, সুতরাং সেগুলো দিয়েই তাঁকে ডাকো। আল-আসমাউল হুসনা: হুসনা অতিশয়ার্থক — কেবল সুন্দর নাম নয়, যত নাম হতে পারে তার মধ্যে সর্বোত্তম। বাক্যাংশটি কুরআনে চারবার এসেছে — এখানে, আর 17:110, 20:8 ও 59:24 আয়াতে — এবং বারবার তা যুক্ত চর্চার সঙ্গে: সেগুলো দিয়ে ডাকো — যেমন 7:180 ও 17:110 নির্দেশ দেয় — আর সেগুলো দিয়ে মহিমা ঘোষণা করো, যেমন 59:24-এর প্রসঙ্গে এসেছে। নামগুলো অলংকার নয়; সেগুলোই তাদের মালিককে জানার নির্ধারিত পথ।"
          },
          {
            "en": "A name in this sense is a description that is fully true. Human titles flatter or approximate; His names state realities without excess or shortfall. That is why the Quran teaches theology mostly through them — verse after verse ends with a pair of names chosen for the moment, and the mufassirun regularly pause at those endings to show why each pair seals its verse.",
            "bn": "এই অর্থে নাম হলো সম্পূর্ণ সত্য এক বর্ণনা। মানুষের উপাধি তোষামোদ করে বা কাছাকাছি যায়; তাঁর নামগুলো বাস্তবতা বলে — বাড়তি বা ঘাটতি ছাড়া। এ জন্যই কুরআন ইলাহি পরিচয়ের শিক্ষা দেয় প্রধানত নামগুলোর মাধ্যমে — আয়াতের পর আয়াত শেষ হয় সেই মুহূর্তের জন্য বেছে নেওয়া এক জোড়া নামে, আর মুফাসসিরগণ নিয়মিত সেই সমাপ্তিগুলোতে থেমে দেখান, প্রতিটি জোড়া কেন তার আয়াতে সিলমোহর দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Whoever Keeps Count of Them",
          "bn": "যে সেগুলো সংরক্ষণ করে"
        },
        "p": [
          {
            "en": "Al-Bukhari and Muslim relate that the Prophet ﷺ said: Allah has ninety-nine names, one hundred less one; whoever ahsaha will enter Paradise. Ahsaha is richer than counting: the scholars explain it as taking the names in fully — memorizing them, understanding their meanings, and living toward Allah by what they mean. A man who knows ar-Razzaq is the Provider and still panics over provision has counted the name but not yet kept it.",
            "bn": "আল-বুখারী ও মুসলিম বর্ণনা করেন, নবী ﷺ বলেছেন: আল্লাহর নিরানব্বইটি নাম আছে — একশো থেকে এক কম; যে সেগুলোর ইহসা করবে সে জান্নাতে প্রবেশ করবে। ইহসা গোনার চেয়ে সমৃদ্ধ: আলিমগণ এর ব্যাখ্যা করেন নামগুলোকে পুরোপুরি আত্মস্থ করা — মুখস্থ করা, অর্থ বোঝা, আর সেগুলোর অর্থ অনুযায়ী আল্লাহর দিকে জীবন যাপন করা। যে জানে আর-রাযযাক মানে রিযিকদাতা, অথচ রিযিক নিয়ে আতঙ্কে ভোগে — সে নামটি গুনেছে, এখনো রক্ষা করেনি।"
          },
          {
            "en": "The itemized lists of ninety-nine that circulate come from later narrators and compilers; the soundly transmitted wording gives the number, not a fixed roster, and scholars' compiled lists differ. The practical door this opens is generous: gather His names from the Quran and the sound Sunnah yourself, name by name, and the gathering is itself the act the hadith rewards.",
            "bn": "প্রচলিত নিরানব্বই নামের তালিকাগুলো এসেছে পরবর্তী বর্ণনাকারী ও সংকলকদের থেকে; বিশুদ্ধ সূত্রে বর্ণিত শব্দগুলো সংখ্যাটি দেয়, নির্দিষ্ট কোনো তালিকা নয় — আর আলিমদের সংকলিত তালিকাগুলোও ভিন্ন ভিন্ন। এতে যে ব্যবহারিক দরজা খোলে তা উদার: কুরআন ও বিশুদ্ধ সুন্নাহ থেকে নিজেই তাঁর নামগুলো সংগ্রহ করুন, নামের পর নাম — এই সংগ্রহ করাটাই সেই আমল যার পুরস্কারের কথা হাদীস বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Matching the Name to the Need",
          "bn": "প্রয়োজনের সঙ্গে নামের মিল"
        },
        "p": [
          {
            "en": "Fad'uhu biha — call on Him by them. The instruction shapes du'a into something precise. Seeking forgiveness, call on al-Ghafur; seeking provision, on ar-Razzaq; at a dead end, on al-Fattah, who opens. 17:110 makes the breadth explicit: call upon Allah or call upon ar-Rahman — whichever you call, to Him belong the most beautiful names. The name you choose is itself a statement of what you believe He is.",
            "bn": "ফাদউহু বিহা — সেগুলো দিয়ে তাঁকে ডাকো। নির্দেশটি দোয়াকে সুনির্দিষ্ট রূপ দেয়। ক্ষমা চাইলে ডাকুন আল-গাফূরকে; রিযিক চাইলে আর-রাযযাককে; পথ বন্ধ মনে হলে আল-ফাত্তাহকে — যিনি খুলে দেন। 17:110 বিস্তৃতিটি স্পষ্ট করে: আল্লাহ বলে ডাকো বা আর-রাহমান বলে ডাকো — যে নামেই ডাকো, সর্বসুন্দর নামগুলো তাঁরই। আপনি যে নামটি বেছে নেন, তা নিজেই এক ঘোষণা — আপনি তাঁকে কী বিশ্বাস করেন।"
          },
          {
            "en": "The Prophet's ﷺ own supplications work this way, gathering the names that fit the request — the reported du'as for morning and evening, distress and forgiveness each reach for particular names. Praying this way changes the person praying: to ask al-Ghafur is to rehearse, in the middle of your fear of your own sin, the fact that forgiving is what He is.",
            "bn": "নবী ﷺ-এর নিজের দোয়াগুলোও এভাবেই কাজ করে — আবেদনের সঙ্গে মানানসই নামগুলো একত্র করে; সকাল-সন্ধ্যা, দুশ্চিন্তা ও ক্ষমার বর্ণিত দোয়াগুলো প্রতিটিই নির্দিষ্ট নামের দিকে হাত বাড়ায়। এভাবে দোয়া করা দোয়াকারীকেই বদলে দেয়: আল-গাফূরের কাছে চাওয়া মানে নিজের গুনাহের ভয়ের ঠিক মাঝখানে এই সত্যটি অনুশীলন করা — ক্ষমা করাই তাঁর পরিচয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Deviation in His Names",
          "bn": "নামে বিকৃতি"
        },
        "p": [
          {
            "en": "The verse's second half warns: and leave those who commit ilhad in His names; they will be repaid for what they used to do. Ilhad is deviation, veering from the straight. The commentators list its classical forms: the pagans deriving idol-names from His — al-Lat from Allah, al-'Uzza from al-'Aziz, as related from the early authorities — denying the names outright, emptying them of meaning, or extending them to creatures as if creatures shared them.",
            "bn": "আয়াতের দ্বিতীয় অংশ সতর্ক করে: আর তাদের ছেড়ে দাও যারা তাঁর নামে ইলহাদ করে; তারা যা করত তার প্রতিফল তাদের দেওয়া হবে। ইলহাদ মানে বিচ্যুতি, সরল থেকে বেঁকে যাওয়া। মুফাসসিরগণ এর চিরায়ত রূপগুলো তালিকা করেন: মুশরিকদের তাঁর নাম থেকে মূর্তির নাম বানানো — আল্লাহ থেকে আল-লাত, আল-আযীয থেকে আল-উযযা, যেমন প্রাথমিক ইমামদের থেকে বর্ণিত — নামগুলো সরাসরি অস্বীকার করা, সেগুলোকে অর্থশূন্য করে ফেলা, কিংবা সৃষ্টির ওপর এমনভাবে প্রসারিত করা যেন সৃষ্টিও সেগুলোর অংশীদার।"
          },
          {
            "en": "The warning still has work to do. Names of God invented from imagination, His attributes explained away until nothing remains, His mercy or His justice denied in anger — each is a way of worshipping a god other than the One who named Himself. The verse's discipline is simple: learn who He is from what He said about Himself, and guard that knowledge as carefully as any inheritance.",
            "bn": "সতর্কবাণীটির কাজ আজও ফুরায়নি। কল্পনা থেকে বানানো আল্লাহর নাম, ব্যাখ্যার নামে তাঁর গুণাবলি এমনভাবে উড়িয়ে দেওয়া যে কিছুই অবশিষ্ট থাকে না, রাগের বশে তাঁর রহমত বা তাঁর ইনসাফ অস্বীকার — প্রতিটিই এমন এক উপাস্যের ইবাদতের পথ, যিনি নিজের নাম নিজে দেওয়া সেই সত্তা নন। আয়াতের অনুশাসনটি সরল: তিনি কে তা শিখুন তিনি নিজের সম্পর্কে যা বলেছেন তা থেকে, আর সেই জ্ঞানকে রক্ষা করুন যেকোনো উত্তরাধিকারের মতোই যত্নে।"
          }
        ]
      },
      {
        "h": {
          "en": "How the Quran Teaches God",
          "bn": "কুরআন যেভাবে আল্লাহকে চেনায়"
        },
        "p": [
          {
            "en": "59:22-24 shows the method at full strength: three verses that are almost nothing but names — the Knower of the unseen and the witnessed, ar-Rahman ar-Rahim, the King, the Holy, Peace, the Securer, the Overseer, the Mighty, the Compeller, the Supreme, the Creator, the Inventor, the Fashioner — closing with: to Him belong the most beautiful names. The Quran's answer to the question who is God is not an abstraction; it is this cascade.",
            "bn": "59:22-24 পদ্ধতিটি পূর্ণ শক্তিতে দেখায়: তিনটি আয়াত যা প্রায় কেবলই নাম — অদৃশ্য ও দৃশ্যের জ্ঞানী, আর-রাহমান আর-রাহীম, বাদশাহ, মহাপবিত্র, শান্তি, নিরাপত্তাদাতা, রক্ষণাবেক্ষণকারী, পরাক্রমশালী, মহাপ্রতাপশালী, গর্বের অধিকারী, স্রষ্টা, উদ্ভাবক, রূপদানকারী — শেষ হয় এই বলে: সর্বসুন্দর নামগুলো তাঁরই। আল্লাহ কে — এই প্রশ্নে কুরআনের উত্তর কোনো বিমূর্ত ধারণা নয়; উত্তরটি এই নামের স্রোত।"
          },
          {
            "en": "20:8 sets the same seal on the story of Musa (AS) about to begin: Allah — there is no deity except Him; to Him belong the best names. Everywhere the phrase appears, it converts theology into address. You do not merely conclude that God is merciful; you call Him ar-Rahman, to His face, and the knowledge becomes a relationship.",
            "bn": "20:8 একই সিলমোহর বসায় শুরু হতে যাওয়া মূসা (আঃ)-এর কাহিনির মুখে: আল্লাহ — তিনি ছাড়া কোনো ইলাহ নেই; সর্বোত্তম নামগুলো তাঁরই। বাক্যাংশটি যেখানেই আসে, সেখানেই তত্ত্বকে সম্বোধনে রূপান্তরিত করে। আপনি কেবল সিদ্ধান্তে পৌঁছান না যে আল্লাহ দয়ালু; আপনি তাঁকে সরাসরি ডাকেন আর-রাহমান বলে — আর জ্ঞানটি হয়ে ওঠে সম্পর্ক।"
          }
        ]
      },
      {
        "h": {
          "en": "A Practice of One Name",
          "bn": "একটি নামের অনুশীলন"
        },
        "p": [
          {
            "en": "The practical entry is one name at a time. Take a single name for a week: find its verses, learn what the scholars say it means, watch for its traces in your own day, then use it in sujud and in du'a until calling it feels like recognition rather than recitation. Ninety-nine such weeks is a curriculum the hadith itself attached to Paradise.",
            "bn": "ব্যবহারিক প্রবেশপথ — এক সময়ে একটি নাম। এক সপ্তাহের জন্য একটিমাত্র নাম নিন: এর আয়াতগুলো খুঁজুন, আলিমগণ এর অর্থ কী বলেন তা শিখুন, নিজের দিনের মধ্যে এর চিহ্নগুলো লক্ষ করুন, তারপর সিজদায় ও দোয়ায় সেটি ব্যবহার করুন — যতক্ষণ না নামটি ডাকা আবৃত্তি নয়, চেনার মতো অনুভূত হয়। এমন নিরানব্বইটি সপ্তাহ এমন এক পাঠক্রম, যাকে হাদীস নিজেই জান্নাতের সঙ্গে যুক্ত করেছে।"
          },
          {
            "en": "And let the names correct your image of Allah whenever fear distorts it. The verse began with an instruction and ended with a warning because both movements matter: reach for Him by what He truly is, and refuse every picture of Him that He did not give. Between those two disciplines, the heart's knowledge of its Lord stays both warm and true.",
            "bn": "আর ভয় যখনই আল্লাহ সম্পর্কে আপনার ধারণা বিকৃত করে, নামগুলোকে তা সংশোধন করতে দিন। আয়াতটি শুরু হয়েছে নির্দেশ দিয়ে, শেষ হয়েছে সতর্কবাণী দিয়ে — কারণ দুটি গতিই জরুরি: তিনি সত্যিকারে যা, সেই পরিচয়েই তাঁর দিকে হাত বাড়ান, আর তাঁর যে ছবি তিনি নিজে দেননি তার প্রতিটি প্রত্যাখ্যান করুন। এই দুই অনুশাসনের মাঝখানে হৃদয়ের রব-পরিচয় থাকে একই সঙ্গে উষ্ণ ও সত্য।"
          }
        ]
      }
    ]
  },
  "7:205": {
    "sections": [
      {
        "h": {
          "en": "The Closing Note of al-A'raf",
          "bn": "আল-আ'রাফের সমাপ্তি-সুর"
        },
        "p": [
          {
            "en": "Near the very end of al-A'raf, after stories of nations, prophets and the long argument with heedless hearts, two quiet commands arrive. In 7:204 the community is told to listen attentively and silently when the Quran is recited. Then comes 7:205 in the singular: remember your Lord within yourself, in humility and fear, below the loudness of speech, in the mornings and the evenings, and do not be among the heedless. The address is first to the Prophet ﷺ, and through him to every reader.",
            "bn": "আল-আ'রাফের একেবারে শেষ প্রান্তে, জাতিসমূহের কাহিনি, নবীগণ ও গাফেল হৃদয়ের সাথে দীর্ঘ বাদানুবাদের পরে, দুটি শান্ত আদেশ আসে। 7:204 আয়াতে সম্প্রদায়কে বলা হয়, কুরআন তিলাওয়াত হলে মন দিয়ে শোনো ও চুপ থাকো। তারপর একবচনে আসে 7:205 আয়াতটি: তোমার রবকে স্মরণ করো তোমার নিজের ভেতরে, বিনয় ও ভয়ের সাথে, উচ্চকণ্ঠের নিচে, সকালে ও সন্ধ্যায়, আর গাফেলদের অন্তর্ভুক্ত হয়ো না। সম্বোধন প্রথমত নবী ﷺ-এর প্রতি, আর তাঁর মাধ্যমে প্রত্যেক পাঠকের প্রতি।"
          },
          {
            "en": "The verse gives remembrance a place, a manner, a volume and a schedule. The place is fi nafsika, within yourself. The manner is tadarru'an wa khifatan, pleading humility and fear. The volume is duna-l-jahri mina-l-qawl, beneath the loudness of speech. The schedule is bil-ghuduwwi wal-asal, the early mornings and the late afternoons. And then a single warning names the disease all of this prevents: do not be among the ghafilin, the heedless.",
            "bn": "আয়াতটি স্মরণকে দেয় একটি স্থান, একটি ভঙ্গি, একটি স্বরমাত্রা ও একটি সময়সূচি। স্থানটি ফী নাফসিকা — তোমার নিজের ভেতরে। ভঙ্গিটি তাদাররু'আন ওয়া খীফাতান — মিনতিভরা বিনয় ও ভয়। স্বরমাত্রাটি দূনাল-জাহরি মিনাল-কাওল — উচ্চকণ্ঠের নিচে। সময়সূচিটি বিল-গুদুওয়্যি ওয়াল-আসাল — ভোরবেলা ও পড়ন্ত বিকেল। তারপর একটিমাত্র সতর্কবাণী সেই ব্যাধির নাম নেয়, যা এই সবকিছু ঠেকায়: গাফেলদের — উদাসীনদের — অন্তর্ভুক্ত হয়ো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Quiet That Protects Sincerity",
          "bn": "যে নীরবতা ইখলাস রক্ষা করে"
        },
        "p": [
          {
            "en": "Ibn Kathir notes on this verse that remembrance is recommended away from shouting. The reason is not that softness has magic in it, but that quietness removes the audience. A remembrance no one can hear is being performed for no one except Allah, so its sincerity has nothing to feed on but Him. Earlier in the same surah, 7:55 uses the same word of humility for supplication: call upon your Lord in tadarru and in secret, for He does not love transgressors.",
            "bn": "ইবনে কাসীর এই আয়াতে উল্লেখ করেন, স্মরণ হওয়া উচিত চিৎকার থেকে দূরে। কারণ এটা নয় যে মৃদুতার মধ্যে কোনো জাদু আছে; বরং নীরবতা দর্শক-শ্রোতাকে সরিয়ে দেয়। যে স্মরণ কেউ শুনতে পায় না, তা আল্লাহ ছাড়া আর কারও জন্য পরিবেশিত হচ্ছে না — তাই তার ইখলাসের খোরাক কেবল তিনিই। একই সূরার আগের দিকে 7:55 আয়াতে দোয়ার জন্যও বিনয়ের একই শব্দ এসেছে: তোমাদের রবকে ডাকো তাদাররুর সাথে ও গোপনে; নিশ্চয়ই তিনি সীমালঙ্ঘনকারীদের ভালোবাসেন না।"
          },
          {
            "en": "Below the loudness of speech marks out a middle register: the tongue may move, the heart must be present, but nothing needs to carry across a room. That register has a practical gift — it fits everywhere. What must be loud can only happen in certain places; what is nearly silent can happen in a queue, on a road, in a sickbed. The verse quietly removes every excuse of circumstance by prescribing a form of worship that no circumstance can prevent.",
            "bn": "উচ্চকণ্ঠের নিচে — এই কথাটি একটি মাঝামাঝি স্বর চিহ্নিত করে: জিহ্বা নড়তে পারে, হৃদয়কে হাজির থাকতে হবে, কিন্তু কিছুই ঘর পেরিয়ে পৌঁছানোর দরকার নেই। এই স্বরের একটি ব্যবহারিক উপহার আছে — এটি সব জায়গায় খাপ খায়। যা উচ্চস্বরে করতে হয় তা কেবল নির্দিষ্ট জায়গায় সম্ভব; যা প্রায় নিঃশব্দ তা সম্ভব লাইনে দাঁড়িয়ে, পথে, রোগশয্যায়। যে ইবাদত কোনো পরিস্থিতিই আটকাতে পারে না, তেমন এক রূপ নির্ধারণ করে আয়াতটি নীরবে পরিস্থিতির সব অজুহাত সরিয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Two Ends of the Day",
          "bn": "দিনের দুই প্রান্ত"
        },
        "p": [
          {
            "en": "Ghuduww is the early part of the day; asal is the plural of asil, the stretch of late afternoon that leans toward sunset. Naming the day's two ends is a way of fencing the whole of it: what begins and closes with remembrance is unlikely to lose its middle entirely. The Quran repeats the pairing — 33:41-42 commands abundant remembrance with glorification morning and evening, and 18:28 tells the Prophet ﷺ to keep himself patiently with those who call on their Lord at both ends of the day, seeking His Face.",
            "bn": "গুদুওয় দিনের প্রথম ভাগ; আসাল হলো আসীলের বহুবচন — সূর্যাস্তের দিকে হেলে পড়া পড়ন্ত বিকেল। দিনের দুই প্রান্তের নাম নেওয়া আসলে পুরো দিনটিকে বেড়া দেওয়ার এক উপায়: যা শুরু ও শেষ হয় স্মরণে, তার মাঝখানটা পুরোপুরি হারিয়ে যাওয়ার সম্ভাবনা কম। কুরআন এই জুটি বারবার আনে — 33:41-42 আয়াতে সকাল-সন্ধ্যায় তাসবীহসহ প্রচুর স্মরণের আদেশ, আর 18:28 আয়াতে নবী ﷺ-কে বলা হয়েছে তাদের সাথে নিজেকে ধৈর্যের সাথে ধরে রাখতে, যারা দিনের দুই প্রান্তে তাদের রবকে ডাকে, তাঁর চেহারা কামনা করে।"
          },
          {
            "en": "The morning and evening adhkar of the sunnah occupy exactly these two windows, and this verse is among their roots. The choice of hours is merciful in design: the morning, before the day's noise decides your state for you; the late afternoon, before the night closes the account. A person anchored at those two moments carries a corrected compass into everything between them, and the day's traffic passes over a heart that has already been pointed home.",
            "bn": "সুন্নাহর সকাল-সন্ধ্যার যিকিরগুলো ঠিক এই দুটি সময়-জানালাই দখল করে, আর এই আয়াত সেগুলোর অন্যতম ভিত্তি। সময় বাছাইয়ে রহমতের ছাপ স্পষ্ট: সকাল — দিনের কোলাহল তোমার অবস্থা ঠিক করে দেওয়ার আগে; পড়ন্ত বিকেল — রাত হিসাব বন্ধ করার আগে। এই দুই মুহূর্তে নোঙর করা মানুষ মাঝের সবকিছুতে একটি সংশোধিত কম্পাস বহন করে, আর দিনের যানজট বয়ে যায় এমন এক হৃদয়ের ওপর দিয়ে, যাকে আগেই ঘরের দিকে তাক করা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Disease Called Ghaflah",
          "bn": "গাফলত নামের ব্যাধি"
        },
        "p": [
          {
            "en": "The verse does not warn here against disbelief; it warns against being among the heedless — forgetting while still believing. Ghaflah is the slow anesthetic of the heart, and the same surah has already shown its end: 7:179 describes people with hearts that do not understand, eyes that do not see and ears that do not hear, like cattle and further astray, and closes by naming them the ghafilun. Heedlessness there is not a lapse of manners; it is the road to that condition.",
            "bn": "আয়াতটি এখানে কুফরের বিরুদ্ধে সতর্ক করছে না; সতর্ক করছে গাফেলদের অন্তর্ভুক্ত হওয়ার বিরুদ্ধে — বিশ্বাস রেখেও ভুলে থাকার বিরুদ্ধে। গাফলত হৃদয়ের ধীর চেতনানাশক, আর এই সূরাই আগে এর পরিণতি দেখিয়েছে: 7:179 আয়াতে বর্ণিত মানুষদের হৃদয় আছে কিন্তু বোঝে না, চোখ আছে কিন্তু দেখে না, কান আছে কিন্তু শোনে না — চতুষ্পদ জন্তুর মতো, বরং আরও পথভ্রষ্ট — আর শেষে তাদেরই নাম দেওয়া হয়েছে গাফিলুন। সেখানে গাফলত কোনো শিষ্টাচারের ত্রুটি নয়; তা ওই অবস্থার দিকে যাওয়ার রাস্তা।"
          },
          {
            "en": "The Prophet ﷺ measured the difference remembrance makes in the starkest terms. Al-Bukhari relates from Abu Musa (RA): the example of the one who remembers his Lord and the one who does not is the example of the living and the dead. And Muslim relates from Abu Hurayrah (RA) that the mufarridun have raced ahead — the men and women who remember Allah much. Dhikr in these texts is not decoration on top of religious life; it is the pulse by which its life is checked.",
            "bn": "স্মরণ কী পার্থক্য গড়ে, নবী ﷺ তা মেপেছেন সবচেয়ে তীক্ষ্ণ ভাষায়। বুখারী আবু মূসা (রাঃ) থেকে বর্ণনা করেন: যে তার রবকে স্মরণ করে আর যে করে না, তাদের উপমা জীবিত ও মৃতের উপমা। আর মুসলিম আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন, মুফাররিদূনরা এগিয়ে গেছে — সেই পুরুষ ও নারীরা, যারা আল্লাহকে বেশি বেশি স্মরণ করে। এই ভাষ্যগুলোতে যিকির দ্বীনী জীবনের ওপরের সাজসজ্জা নয়; এ হলো সেই নাড়ি, যা দিয়ে তার জীবন পরীক্ষা করা হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Angels Next Door",
          "bn": "পরের আয়াতের ফেরেশতারা"
        },
        "p": [
          {
            "en": "The surah's last verse, 7:206, supplies the model for the command just given: those who are with your Lord are not too proud to worship Him; they glorify Him, and to Him they prostrate. Reciting it calls for a prostration — in the order of the mushaf this is the first verse of sajdah. The sequence is deliberate: told to remember quietly and constantly, the reader is immediately shown beings who already do, without fatigue and without arrogance.",
            "bn": "সূরার শেষ আয়াত 7:206 সদ্য দেওয়া আদেশের নমুনা হাজির করে: যারা তোমার রবের কাছে আছে, তারা তাঁর ইবাদতে অহংকার করে না; তারা তাঁর তাসবীহ পড়ে এবং তাঁকেই সিজদা করে। এটি তিলাওয়াতে সিজদা করতে হয় — মুসহাফের ক্রমে এটিই সিজদার প্রথম আয়াত। এই বিন্যাস ইচ্ছাকৃত: নীরবে ও নিয়মিত স্মরণের আদেশ পাওয়ামাত্র পাঠককে দেখানো হয় এমন সত্তাদের, যারা এরই মধ্যে তা করে — ক্লান্তিহীন, অহংকারহীন।"
          },
          {
            "en": "Widen the frame and the whole universe joins them: 17:44 states that there is nothing at all that does not glorify Allah with His praise, though we do not perceive it. Against that background, ghaflah is exposed as the strange condition — a forgetful creature moving through a cosmos that remembers. The command of 7:205 is therefore not an extra burden laid on life but an invitation to stop being the one silent voice in a singing creation.",
            "bn": "ফ্রেমটা বড় করলে গোটা মহাবিশ্ব তাদের সাথে যোগ দেয়: 17:44 আয়াত বলে, এমন কিছুই নেই যা আল্লাহর প্রশংসাসহ তাঁর তাসবীহ পড়ে না, যদিও আমরা তা টের পাই না। সেই পটভূমিতে গাফলতই ধরা পড়ে অদ্ভুত অবস্থা হিসেবে — স্মরণে মগ্ন এক বিশ্বজগতের ভেতর দিয়ে চলা এক বিস্মৃত প্রাণী। তাই 7:205 আয়াতের আদেশ জীবনের ওপর চাপানো বাড়তি বোঝা নয়, বরং আমন্ত্রণ — গানরত সৃষ্টির মাঝে একমাত্র নীরব কণ্ঠ হয়ে না থাকার।"
          }
        ]
      },
      {
        "h": {
          "en": "A Practice That Needs Nothing",
          "bn": "যে আমলের জন্য কিছুই লাগে না"
        },
        "p": [
          {
            "en": "Everything this verse asks for is already in your possession: a self to go inward to, a morning and an evening that arrive without being earned, and a voice that can drop below loudness. Begin with the two ends of the day and guard them like appointments. Let the tongue move gently and pull the heart back each time it wanders. The verse promises no visible result and threatens no visible loss; it simply separates two kinds of people, the remembering and the heedless, and asks which list you are on.",
            "bn": "এই আয়াত যা চায় তার সবই এরই মধ্যে তোমার কাছে আছে: ভেতরে ফেরার মতো একটি নিজ, না চাইতেই আসা একটি সকাল ও একটি সন্ধ্যা, আর উচ্চতার নিচে নামতে পারা একটি কণ্ঠ। শুরু করো দিনের দুই প্রান্ত দিয়ে, আর সেগুলো পাহারা দাও নির্ধারিত সাক্ষাতের মতো। জিহ্বা মৃদু চলুক, আর হৃদয় যতবার ভেসে যায় ততবার টেনে ফেরাও। আয়াতটি কোনো দৃশ্যমান ফল প্রতিশ্রুতি দেয় না, কোনো দৃশ্যমান ক্ষতির হুমকিও দেয় না; এটি কেবল দুই ধরনের মানুষকে আলাদা করে — স্মরণকারী ও গাফেল — আর জিজ্ঞেস করে, তুমি কোন তালিকায়।"
          }
        ]
      }
    ]
  }
});
