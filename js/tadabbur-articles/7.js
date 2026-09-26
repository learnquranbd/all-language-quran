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
  "7:79": {
    "sections": [
      {
        "h": {
          "en": "The Last Line of the Panel",
          "bn": "পর্বটির শেষ লাইন"
        },
        "p": [
          {
            "en": "Al-A'raf is Makkan, and 7:73 to 7:79 is its Thamud panel. 7:73 sends Salih (AS) with the call to worship Allah alone and with the she-camel as a sign. 7:74 recalls the favours and forbids corruption. 7:75 and 7:76 set the arrogant chiefs against the believers they had kept weak. 7:77 has the camel hamstrung and the threatened punishment demanded. 7:78 says the earthquake seized them and left them prone where they lived. Our verse is the line after that, and 7:80 leaves Thamud for Lut (AS).",
            "bn": "আ'রাফ মাক্কী সূরা, আর ৭:৭৩ থেকে ৭:৭৯ তার সামূদ পর্ব। ৭:৭৩ সালিহ (আঃ)-কে পাঠায় এক আল্লাহর ইবাদতের ডাক নিয়ে আর নিদর্শন হিসেবে সেই উটনী নিয়ে। ৭:৭৪ নিয়ামতগুলো মনে করিয়ে দেয় আর ফাসাদ করতে নিষেধ করে। ৭:৭৫ আর ৭:৭৬ গর্বিত সর্দারদের দাঁড় করায় তাদেরই দুর্বল করে রাখা মুমিনদের মুখোমুখি। ৭:৭৭ এ উটনী মারা হয় আর শাস্তিটা চেয়ে বসা হয়। ৭:৭৮ বলে, ভূমিকম্প তাদের পাকড়াও করল আর তারা নিজেদের বাসস্থানেই উপুড় হয়ে পড়ে রইল। আমাদের আয়াতটি তার পরের লাইন, আর ৭:৮০ সামূদ ছেড়ে লূত (আঃ)-এর দিকে চলে যায়।"
          },
          {
            "en": "Notice where the panel stops. The account of Nuh (AS) ends at 7:64 with the ship, the drowning, and a verdict on a blind people. The account of Ad ends at 7:72 with Hud (AS) and those with him saved and the deniers wiped out. The last two accounts in the sequence do not end on the outcome at all. Thamud's ends here on Salih's own sentence, and Madyan's ends at 7:93 on Shu'ayb's. In both, the closing word belongs to the man nobody listened to.",
            "bn": "পর্বটা কোথায় গিয়ে থামে, সেটা খেয়াল করার মতো। নূহ (আঃ)-এর বিবরণ শেষ হয় ৭:৬৪ এ নৌকা, ডুবে মরা আর একটা অন্ধ জাতির রায় দিয়ে। আদের বিবরণ শেষ হয় ৭:৭২ এ, হূদ (আঃ) আর তাঁর সঙ্গীরা রক্ষা পান আর অস্বীকারকারীরা নিঃশেষ হয়। ধারাটির শেষ দুটি বিবরণ কিন্তু পরিণতিতে শেষ হয় না। সামূদের বিবরণ এখানেই শেষ হয় সালিহ (আঃ)-এর নিজের বাক্যে, আর মাদইয়ানের শেষ হয় ৭:৯৩ এ শু'আয়ব (আঃ)-এর বাক্যে। দুই জায়গাতেই শেষ কথাটা তাঁরই, যাঁর কথা কেউ শোনেনি।"
          },
          {
            "en": "That placement is the verse's difficulty and also its point. The earthquake in 7:78 has already done its work, so there is nobody left in those houses to be persuaded. A reader has to decide what a speech is for once it can no longer change anything. The Quran keeps it, gives it the last line of the passage, and lets it stand as a record rather than as an appeal. Thamud's file closes with the messenger's account of his own conduct in it.",
            "bn": "এই জায়গাটাই আয়াতের কঠিন দিক, আর এটাই এর কথা। ৭:৭৮ এর ভূমিকম্প কাজ সেরে ফেলেছে, ওই ঘরগুলোতে বোঝানোর মতো আর কেউ নেই। তাহলে যে কথায় আর কিছুই বদলাবে না, সে কথা বলার মানে কী, পাঠককে সেটা ভাবতে হয়। কুরআন কথাটা রেখে দেয়, পর্বের শেষ লাইনটা তাকেই দেয়, আর তাকে আবেদন নয় বরং দস্তাবেজ হিসেবে দাঁড়াতে দেয়। সামূদের ফাইল বন্ধ হয় রসূলের নিজের কাজের হিসাব দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Conveyed, and Advised",
          "bn": "পৌঁছে দিয়েছি, নাসীহাত করেছি"
        },
        "p": [
          {
            "en": "Fatawalla 'anhum. The verb tawalla is from w-l-y, and with the preposition 'an it is a turning of the back and a going away from. It is the word the Quran uses of people who turn away from a message, used here of a prophet turning away from people. Nothing in it is sulking. At-Tabari takes it as a physical departure out of their land, which means the reading of the whole verse depends on when the sentence was spoken, and that is exactly where the commentators divide.",
            "bn": "ফাতাওয়াল্লা আনহুম। তাওয়াল্লা ক্রিয়াটি ওয়া-লা-ইয়া মূল থেকে, আর আন শব্দটির সঙ্গে এলে তা হয় পিঠ ফিরিয়ে সরে যাওয়া। কুরআন এই শব্দ ব্যবহার করে তাদের জন্য যারা বাণী থেকে মুখ ফিরিয়ে নেয়; এখানে ব্যবহার হলো এক নবীর জন্য, যিনি মানুষ থেকে মুখ ফিরিয়ে নিচ্ছেন। এর ভেতরে অভিমান নেই। তাবারী এটাকে ধরেন তাদের দেশ ছেড়ে সশরীরে বেরিয়ে যাওয়া হিসেবে, অর্থাৎ গোটা আয়াতের পাঠ নির্ভর করছে কথাটা কখন বলা হলো তার উপর। মুফাসসিরদের মতভেদটা ঠিক সেখানেই।"
          },
          {
            "en": "Laqad ablaghtukum risalata rabbi wa nasahtu lakum. Both verbs are perfect, finished action, and laqad puts the weight of an oath on the first. Set that against the mission while it was still running. In 7:62 Nuh (AS) says ublighukum, I am conveying, and in 7:68 Hud (AS) says the same, both in the imperfect, with the work still open. Salih (AS) speaks in the closed tense of a man handing in an account of something already completed.",
            "bn": "লাকাদ আবলাগতুকুম রিসালাতা রাব্বী ওয়া নাসাহতু লাকুম। দুটি ক্রিয়াই অতীতের পূর্ণ রূপে, কাজ শেষ, আর লাকাদ প্রথমটির উপর কসমের ওজন বসিয়ে দেয়। এর পাশে চলতি মিশনের ভাষাটা রাখুন। ৭:৬২ এ নূহ (আঃ) বলছেন উবলিগুকুম, আমি পৌঁছে দিচ্ছি; ৭:৬৮ এ হূদ (আঃ) একই কথা বলছেন, দুজনেই চলমান কালে, কাজ তখনো খোলা। সালিহ (আঃ) বলছেন শেষ হয়ে যাওয়া কালে, যেন হাতের কাজ বুঝিয়ে দিয়ে হিসাব জমা দিচ্ছেন।"
          },
          {
            "en": "Three details remain. Risalata rabbi is singular here, the message; 7:62, 7:68 and 7:93 all have risalati, the messages, so Salih's is the only one of the four in the singular. Nasahtu comes with a preposition, lakum, advised for you, pointing the advice at their benefit rather than at his own defence. And then the ending: la tuhibbuna an-nasihin. The verb is imperfect and the noun is a definite plural. Not you did not accept me, but you do not like the advisers.",
            "bn": "আরও তিনটি খুঁটিনাটি। এখানে রিসালাতা রাব্বী একবচন, বাণী; আর ৭:৬২, ৭:৬৮ ও ৭:৯৩ সব জায়গায় রিসালাতি, বহুবচন, কাজেই চারজনের মধ্যে কেবল সালিহ (আঃ)-এর মুখেই একবচনটি। নাসাহতু এসেছে লাকুম অব্যয়ের সঙ্গে, অর্থাৎ তোমাদের জন্য নাসীহাত, উপদেশের মুখ তাদের ভালোর দিকে, নিজের সাফাইয়ের দিকে নয়। আর শেষটা: লা তুহিব্বূনান নাসিহীন। ক্রিয়াটি চলমান কালে, আর বিশেষ্যটি নির্দিষ্ট বহুবচন। তোমরা আমাকে মানলে না নয়, বরং তোমরা নাসীহাতকারীদের পছন্দ কর না।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Quake, or After",
          "bn": "কম্পনের আগে, নাকি পরে"
        },
        "p": [
          {
            "en": "At-Tabari reads the turning away as an exit. Salih (AS) went out from among his people once they had hamstrung the camel and demanded the punishment, because Allah had revealed to him that He would destroy them after three; and at-Tabari adds the saying that no nation was destroyed while its prophet was still in its midst. On that reading the speech in our verse is a parting address delivered to living men who had three days left to them.",
            "bn": "তাবারী মুখ ফিরিয়ে নেওয়াটাকে পড়েন বেরিয়ে যাওয়া হিসেবে। উটনী মেরে ফেলার পর আর শাস্তি চেয়ে বসার পর সালিহ (আঃ) নিজ জাতির মধ্য থেকে বেরিয়ে যান, কারণ আল্লাহ তাঁকে জানিয়ে দিয়েছিলেন যে তিন দিন পর তিনি তাদের ধ্বংস করবেন; তাবারী সঙ্গে এ কথাও আনেন যে নবী জাতির মধ্যে থাকা অবস্থায় কোনো জাতি ধ্বংস হয়নি। এই পাঠে আমাদের আয়াতের কথাটা বিদায়ী ভাষণ, আর শ্রোতারা তখনো জীবিত, হাতে তিন দিন।"
          },
          {
            "en": "Ibn Kathir reads it the other way. He calls the verse taqri', a rebuke, and says plainly that Salih (AS) said this to them after Allah had destroyed them, as reproof and reproach, and that they were hearing it. As-Sa'di reads it the same way, glossing the speech as tawbikh wa 'itab, censure and reproach, spoken after Allah had destroyed them. The disagreement is not about the words. It is about whether the audience was alive, and it puts the two readings on opposite sides of 7:78.",
            "bn": "ইবনু কাসীর পড়েন উল্টোভাবে। তিনি আয়াতটিকে বলেন তাকরী, অর্থাৎ ভর্ৎসনা, আর সোজাসুজি বলেন যে আল্লাহ তাদের ধ্বংস করার পরেই সালিহ (আঃ) এ কথা বলেছেন, তিরস্কার আর ধিক্কার হিসেবে, আর তারা তা শুনছিল। সা'দীও একইভাবে পড়েন; তিনি কথাটার ব্যাখ্যায় লেখেন তাওবীখ ওয়া ইতাব, অর্থাৎ ভর্ৎসনা আর অনুযোগ, আল্লাহ তাদের ধ্বংস করার পর বলা। মতভেদটা শব্দ নিয়ে নয়। মতভেদটা হলো শ্রোতারা জীবিত ছিল কি না, আর তাতে দুই পাঠ ৭:৭৮ এর দুই পাশে গিয়ে দাঁড়ায়।"
          },
          {
            "en": "As-Sa'di does something else in this passage that is worth reporting. He lists what many commentators transmit about Thamud: the camel emerging from a smooth rock, its calf crying out three times, the people's faces turning yellow, then red, then black over the three days. He calls all of it israiliyyat with no place in the tafsir of the Book of Allah, argues that Allah would have told it had it been true, and holds that part of it is contradicted by what Salih (AS) actually says in 11:65. None of it appears below.",
            "bn": "সা'দী এই প্রসঙ্গে আরও একটা কাজ করেন, যা বলে রাখা দরকার। তিনি সামূদ নিয়ে অনেক মুফাসসিরের বর্ণনাগুলো সাজিয়ে দেন: মসৃণ পাথর থেকে উটনী বেরিয়ে আসা, তার বাচ্চার তিনবার ডেকে ওঠা, তিন দিনে জাতির চেহারা প্রথমে হলুদ, পরে লাল, শেষে কালো হয়ে যাওয়া। এসবকে তিনি বলেন ইসরাঈলী বর্ণনা, আল্লাহর কিতাবের তাফসীরে যার জায়গা নেই; তিনি বলেন সত্যি হলে আল্লাহ নিজেই তা বলে দিতেন, আর এর একাংশ ১১:৬৫ এ সালিহ (আঃ)-এর নিজের কথার সঙ্গেই খাপ খায় না। নিচে এর কিছুই নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Well at Badr",
          "bn": "বদরের কুয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir supports his reading with a narration. Al-Bukhari records from Abu Talha (RA) that on the day of Badr the Prophet ﷺ ordered twenty-four of the chiefs of Quraysh thrown into one of the foul dry wells there; that he used to stay three nights on a field he had prevailed on; and that on the third day he had his camel saddled, walked out with his companions following him, stood at the edge of the well, and called the dead by their names and their fathers' names.",
            "bn": "ইবনু কাসীর নিজের পাঠের পক্ষে একটি হাদীস আনেন। বুখারী আবূ তালহা (রাঃ) থেকে বর্ণনা করেন যে বদরের দিন নবী ﷺ কুরাইশের চব্বিশজন সর্দারকে বদরের একটি নোংরা শুকনো কুয়ায় ফেলে দেওয়ার হুকুম দিয়েছিলেন; কোনো জাতির উপর বিজয়ী হলে তিনি সেই মাঠে তিন রাত থাকতেন; আর তৃতীয় দিন তিনি নিজের উটে জিন বাঁধার হুকুম দিয়ে হেঁটে বেরিয়ে যান, সাহাবীরা পিছু নেন, তিনি কুয়ার কিনারে দাঁড়িয়ে মৃতদের নাম ধরে আর তাদের বাপের নাম ধরে ডাকতে থাকেন।"
          },
          {
            "en": "Then the address. Would it have pleased you if you had obeyed Allah and His Messenger? We have found true what our Lord promised us; have you too found true what your Lord promised you? Umar (RA) objected that he was speaking to bodies that have no souls, and the answer came: by Him in whose hand is Muhammad's soul, you do not hear what I say better than they do. The objection is Umar's and the reply is the Prophet's. Ibn Kathir quotes the episode in other phrasing, and the two wordings should not be mixed.",
            "bn": "তারপর সেই সম্বোধন। আল্লাহ আর তাঁর রসূলের আনুগত্য করলে তোমাদের কি ভালো হতো না? আমাদের প্রতিপালক আমাদের যা ওয়াদা করেছিলেন তা আমরা সত্য পেয়েছি; তোমাদের প্রতিপালক তোমাদের যা ওয়াদা করেছিলেন, তোমরাও কি তা সত্য পেয়েছ? উমর (রাঃ) আপত্তি করলেন, আপনি তো প্রাণহীন দেহের সঙ্গে কথা বলছেন। জবাব এলো, যাঁর হাতে মুহাম্মাদের প্রাণ তাঁর কসম, আমি যা বলছি তা তোমরা তাদের চেয়ে বেশি শুনতে পাচ্ছ না। আপত্তিটা উমর (রাঃ)-এর, আর জবাবটা নবী ﷺ-এর। ইবনু কাসীর ঘটনাটি অন্য শব্দে উদ্ধৃত করেন, আর দুই বর্ণনার শব্দ মিলিয়ে ফেলা চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Claim, Four Mouths",
          "bn": "একই দাবি, চারটি মুখে"
        },
        "p": [
          {
            "en": "7:62 has Nuh (AS) saying that he conveys the messages of his Lord and advises them, and adding that he knows from Allah what they do not. 7:68 has Hud (AS) saying it and then describing himself as nasih amin, a trustworthy adviser to them. Both are spoken while the mission is still open and the audience can still move. Our verse says the same two things in the finished tense, after the door has shut, and that is what turns them from an appeal into an account.",
            "bn": "৭:৬২ এ নূহ (আঃ) বলছেন, তিনি তাঁর প্রতিপালকের বাণী পৌঁছে দিচ্ছেন আর তাদের নাসীহাত করছেন, আর সঙ্গে বলছেন আল্লাহর কাছ থেকে তিনি এমন কিছু জানেন যা তারা জানে না। ৭:৬৮ এ হূদ (আঃ) একই কথা বলে নিজেকে বলছেন নাসিহ আমীন, তাদের বিশ্বস্ত কল্যাণকামী। দুটোই বলা হচ্ছে মিশন খোলা থাকতে, শ্রোতা তখনো নড়তে পারে। আমাদের আয়াত একই দুটি কথা বলে শেষ হয়ে যাওয়া কালে, দরজা বন্ধ হওয়ার পর, আর তাতেই তা আবেদন থেকে হিসাবে বদলে যায়।"
          },
          {
            "en": "7:93 is the closest sister, and its ending measures the distance between two prophets' last lines. Shu'ayb (AS) says the same two things and then asks how he could grieve for a disbelieving people, where Salih (AS) names what was wrong with his. 11:57 has Hud (AS) telling Ad in advance that if they turn away he has already conveyed what he was sent with, and his Lord will bring another people in their place. And 43:78 puts our verse's complaint to the deniers directly: We brought you the truth, but most of you were averse to it.",
            "bn": "সবচেয়ে কাছের সহোদর আয়াত ৭:৯৩, আর তার শেষটা দুই নবীর শেষ বাক্যের দূরত্ব মেপে দেয়। শু'আয়ব (আঃ) একই দুটি কথা বলে জিজ্ঞেস করেন, কাফির জাতির জন্য তিনি আক্ষেপ করবেন কী করে; আর সালিহ (আঃ) বলে দেন তাঁর জাতির দোষটা কোথায় ছিল। ১১:৫৭ এ হূদ (আঃ) আদকে আগেভাগেই বলছেন, তারা মুখ ফিরিয়ে নিলেও তিনি যা নিয়ে পাঠানো হয়েছেন তা পৌঁছে দিয়েছেন, আর তাঁর প্রতিপালক তাদের জায়গায় অন্য জাতি নিয়ে আসবেন। আর ৪৩:৭৮ আমাদের আয়াতের অভিযোগটাই সোজা অস্বীকারকারীদের মুখের উপর রাখে: আমি তোমাদের কাছে সত্য নিয়ে গিয়েছিলাম, কিন্তু তোমাদের অধিকাংশই সত্যকে অপছন্দ করেছিলে।"
          }
        ]
      },
      {
        "h": {
          "en": "The People Who Correct You",
          "bn": "যারা আপনাকে শুধরে দেয়"
        },
        "p": [
          {
            "en": "Read the ending as a diagnosis and it stops being about Thamud. Nobody in that town was short of information. Salih (AS) had conveyed the message, a sign had been given, and 7:75 shows that some of them did believe. What the verse names is a taste: they did not like the kind of person who gives advice. That is a disposition a reader can check in himself inside a week, because it shows itself long before any doctrine does.",
            "bn": "শেষ কথাটাকে রোগের নাম হিসেবে পড়ুন, তাহলে আয়াতটা আর কেবল সামূদের থাকে না। ওই জনপদে তথ্যের অভাব কারও ছিল না। সালিহ (আঃ) বাণী পৌঁছে দিয়েছেন, নিদর্শনও এসেছে, আর ৭:৭৫ দেখায় তাদের কেউ কেউ ঈমান এনেছিলও। আয়াতটি যা ধরিয়ে দেয় তা একটা রুচি: নাসীহাত দেয় যে ধরনের মানুষ, তাকেই তাদের ভালো লাগত না। এই স্বভাবটা এক সপ্তাহের মধ্যেই নিজের ভেতরে পরীক্ষা করে দেখা যায়, কারণ কোনো আকীদার আগেই সে মুখ দেখায়।"
          },
          {
            "en": "The test is not whether you accept correction once you know it is right. It is what happens in the first two seconds, before you know. Do you start weighing the point, or start weighing the person who made it? Thamud's chiefs went for the person. In 7:75 they ask the believers among them whether they really know that Salih was sent from his Lord, and in 7:76 they simply announce that they reject what those believers accepted. The content was never examined at all.",
            "bn": "পরীক্ষা এটা নয় যে কথাটা ঠিক জানার পর আপনি শুধরানো মেনে নেন কি না। পরীক্ষা হলো প্রথম দুই সেকেন্ড, জানার আগে। আপনি কথাটার ওজন মাপতে বসেন, না যে বলল তার ওজন মাপতে বসেন? সামূদের সর্দাররা মানুষটাকেই ধরেছিল। ৭:৭৫ এ তারা নিজেদের মধ্যের মুমিনদের জিজ্ঞেস করে, তারা কি সত্যিই জানে যে সালিহ তাঁর প্রতিপালকের পক্ষ থেকে প্রেরিত; আর ৭:৭৬ এ তারা কেবল ঘোষণা দেয় যে ওরা যা মেনেছে তা এরা অস্বীকার করছে। কথার বিষয়টা একবারও যাচাই হলো না।"
          },
          {
            "en": "So the practical work here is small and specific. Name the one person whose corrections you routinely discount, and ask whether you discount them for a reason you could say out loud. Thank the next person who tells you something you did not want to hear, on the spot, before you have decided whether they were right. And if you are the one giving the advice, notice what Salih (AS) claimed at the end: delivery and sincerity, and nothing at all about results.",
            "bn": "কাজেই এখানকার কাজটা ছোট আর সোজা। যার শুধরে দেওয়াটা আপনি নিয়ম করে উড়িয়ে দেন, তার নামটা মনে মনে বলুন, তারপর দেখুন কারণটা মুখে বলা যায় কি না। পরের বার যে আপনাকে না চাওয়া কথাটা বলবে, তখনই তাকে ধন্যবাদ দিন, সে ঠিক ছিল কি না সেটা ঠিক করার আগেই। আর নাসীহাত যদি আপনিই দিচ্ছেন, তবে দেখুন শেষে সালিহ (আঃ) কী দাবি করলেন: পৌঁছে দেওয়া আর আন্তরিকতা, ফল নিয়ে একটা কথাও নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "O Allah, Be Witness",
          "bn": "হে আল্লাহ, সাক্ষী থাকুন"
        },
        "p": [
          {
            "en": "No transmitted supplication is tied to this verse, but the Sunnah puts its two verbs into one. Muslim records from Jabir ibn Abdullah (RA) the sermon at Arafah, in which the Prophet ﷺ told the people that they would be asked about him and then asked them what they would say. They answered that they would bear witness that he had conveyed the message, discharged it, and given sincere counsel. He then raised his forefinger to the sky and said, O Allah, be witness, saying it three times.",
            "bn": "এই আয়াতের সঙ্গে বাঁধা কোনো বর্ণিত দুআ নেই, তবে সুন্নাহ এর দুটি ক্রিয়াকে একটি দুআর ভেতরে বসিয়ে দেয়। মুসলিম জাবির ইবনু আবদুল্লাহ (রাঃ) থেকে আরাফার খুতবা বর্ণনা করেন, যেখানে নবী ﷺ লোকদের বলেন যে তাঁর ব্যাপারে তাদের জিজ্ঞেস করা হবে, তারপর জিজ্ঞেস করেন তারা কী বলবে। তারা বলল, তারা সাক্ষ্য দেবে যে তিনি বাণী পৌঁছে দিয়েছেন, দায়িত্ব আদায় করেছেন আর আন্তরিক নাসীহাত করেছেন। তখন তিনি আকাশের দিকে শাহাদাত আঙুল তুলে বলেন, হে আল্লাহ, সাক্ষী থাকুন, আর কথাটা তিনবার বলেন।"
          },
          {
            "en": "Those are the two words of our verse, laid over the one mission in the sequence that ended in acceptance. Conveyed and counselled: the same pair Salih (AS) claimed over a town that had just been destroyed. A short supplication can be built in the verse's own vocabulary, offered as that and not as a transmitted wording. O Allah, make me one who loves the adviser before the adviser is proved right. Let me deliver what I owe to the people You have placed me among. And when my part is done, be You the witness that I conveyed it.",
            "bn": "ওই দুটি শব্দই আমাদের আয়াতের শব্দ, আর সেগুলো এখানে বসেছে সেই একটি মিশনের উপর যা গ্রহণে গিয়ে শেষ হয়েছে। পৌঁছে দেওয়া আর নাসীহাত: সালিহ (আঃ) এই দুটিই দাবি করেছিলেন সদ্য ধ্বংস হওয়া এক জনপদের সামনে। আয়াতের নিজের শব্দ দিয়ে ছোট একটা দুআও গড়া যায়, বর্ণিত দুআ হিসেবে নয়, নিজের কথা হিসেবেই। হে আল্লাহ, নাসীহাতকারীর কথা ঠিক প্রমাণ হওয়ার আগেই তাকে ভালোবাসার তাওফীক দিন। আপনি আমাকে যাদের মধ্যে রেখেছেন, তাদের কাছে আমার পাওনাটা পৌঁছে দেওয়ার শক্তি দিন। আর আমার অংশটা শেষ হলে আপনিই সাক্ষী থাকুন যে আমি তা পৌঁছে দিয়েছি।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry Out",
          "bn": "সঙ্গে নিয়ে যাওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse ends on a taste rather than on an argument, so the questions have to be about taste. Who is the last person who told me something about myself that I did not want to hear, and what did I do with it? Can I name one correction I accepted in the past year that cost me something? And when a piece of advice irritates me, how often is the real reason the tone, the timing, or the person, rather than the content?",
            "bn": "আয়াতটি শেষ হয় যুক্তিতে নয়, রুচিতে; কাজেই প্রশ্নগুলোও রুচি নিয়েই হতে হবে। সবশেষে কে আমাকে আমার নিজের সম্পর্কে এমন কথা বলেছিল যা আমি শুনতে চাইনি, আর সেটা নিয়ে আমি কী করেছি? গত এক বছরে এমন একটা শুধরে দেওয়ার কথা কি বলতে পারি যা আমি মেনেছি আর যাতে আমার কিছু খরচ হয়েছে? আর নাসীহাত গায়ে লাগলে আসল কারণটা কতবার ছিল বলার ঢং, সময় বা মানুষটা, কথাটার বিষয় নয়?"
          },
          {
            "en": "Salih (AS) claimed delivery and sincerity and claimed nothing about outcome. Where am I measuring myself by results that were never mine to produce, and where am I using that as cover for not delivering at all? The chiefs in 7:75 examined the messenger instead of the message. Whose message have I filed away unread because of who sent it? And if my account were read out today, would conveyed and advised be true of me for the people closest to me?",
            "bn": "সালিহ (আঃ) দাবি করলেন পৌঁছে দেওয়া আর আন্তরিকতা, পরিণতি নিয়ে কোনো দাবি করলেন না। আমি কোথায় নিজেকে মাপছি এমন ফল দিয়ে যা তৈরি করা কখনোই আমার হাতে ছিল না, আর কোথায় সেই অজুহাতে একেবারেই কিছু পৌঁছে দিচ্ছি না? ৭:৭৫ এর সর্দাররা বাণী না দেখে বাহককে যাচাই করেছিল। কে পাঠিয়েছে দেখে আমি কার কথা না পড়েই তুলে রেখেছি? আর আজ যদি আমার হিসাব পড়ে শোনানো হয়, আমার সবচেয়ে কাছের মানুষদের বেলায় পৌঁছে দিয়েছি আর নাসীহাত করেছি কথাটা কি সত্যি হবে?"
          }
        ]
      }
    ]
  },
  "7:85": {
    "sections": [
      {
        "h": {
          "en": "Madyan's Turn",
          "bn": "মাদইয়ানের পালা"
        },
        "p": [
          {
            "en": "Al-A'raf runs a series of ruined peoples, and this verse opens the last of them before Musa (AS). 7:80 to 7:84 is the account of Lut (AS) and the rain that fell on his people. 7:85 turns to Madyan. Shu'ayb's speech continues through 7:86 and 7:87, the eminent men answer him from 7:88, and the passage closes at 7:93. Then 7:94 to 7:102 draws the lesson of all of the towns together, and 7:103 sends Musa (AS) to Pharaoh.",
            "bn": "আ'রাফ একের পর এক ধ্বংস হওয়া জাতির বিবরণ দেয়, আর মূসা (আঃ)-এর আগে তার শেষটি শুরু হয় এই আয়াত দিয়ে। ৭:৮০ থেকে ৭:৮৪ পর্যন্ত লূত (আঃ)-এর বিবরণ আর তাঁর জাতির উপর নেমে আসা বৃষ্টি। ৭:৮৫ মোড় নেয় মাদইয়ানের দিকে। শু'আয়ব (আঃ)-এর বক্তব্য চলে ৭:৮৬ আর ৭:৮৭ জুড়ে, ৭:৮৮ থেকে সর্দাররা জবাব দিতে শুরু করে, আর পর্বটি শেষ হয় ৭:৯৩ এ। তারপর ৭:৯৪ থেকে ৭:১০২ সব জনপদের শিক্ষা এক জায়গায় জড়ো করে, আর ৭:১০৩ মূসা (আঃ)-কে ফিরআউনের কাছে পাঠায়।"
          },
          {
            "en": "On who Madyan were, the commentators work from transmitted genealogy rather than from the Quran, which names neither a father nor a city. At-Tabari transmits from Ibn Ishaq that they were the children of Madyan son of Ibrahim (AS), so that Madyan is a tribal name like Tamim, and that Shu'ayb (AS) was Shu'ayb son of Mikil son of Yashjur, called Yathrun in Syriac. Ibn Kathir adds that the name is used of the tribe and of the town alike, a town near Ma'an on the road of the Hijaz, and cites 28:23, where Musa (AS) arrives at the water of Madyan.",
            "bn": "মাদইয়ানবাসী কারা, এ প্রশ্নে মুফাসসিররা কুরআনের বদলে বর্ণিত বংশপরিচয়ের উপর ভরসা করেন; কুরআন এখানে কোনো পিতার নামও বলে না, শহরের নামও বলে না। তাবারী ইবনু ইসহাক থেকে আনেন যে তারা ইবরাহীম (আঃ)-এর পুত্র মাদইয়ানের বংশধর, কাজেই মাদইয়ান তামীমের মতোই একটি গোত্রের নাম, আর শু'আয়ব (আঃ) ছিলেন মীকীলের পুত্র, তাঁর পিতা ইয়াশজুর, আর সুরিয়ানী ভাষায় তাঁর নাম ইয়াসরূন। ইবনু কাসীর যোগ করেন, নামটি গোত্র আর শহর দুটোর জন্যই চলে; শহরটি হিজাযের পথে মাআনের কাছে, আর তিনি ২৮:২৩ আয়াতের কথা তোলেন, যেখানে মূসা (আঃ) মাদইয়ানের পানির কাছে গিয়ে পৌঁছান।"
          },
          {
            "en": "What is distinctive here is what follows the opening sentence. All four missions in this stretch begin with worship Allah, you have no deity other than Him. Nuh (AS) continues in 7:59 with the fear of a tremendous Day. Hud (AS) continues in 7:65 with a question about fearing Allah. Salih (AS) continues in 7:73 with a sign, the she-camel. Shu'ayb (AS) alone continues into a market. Fulfil the measure and the weight, and do not deprive people of their things: tawhid and trading standards in one breath.",
            "bn": "এখানে আলাদা করে চোখে পড়ে খোলা বাক্যটির পরের অংশ। এই অংশের চারটি মিশনই শুরু হয় একই কথায়, তোমরা আল্লাহর ইবাদত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই। নূহ (আঃ) ৭:৫৯ এ এরপর আনেন এক মহাদিনের শাস্তির ভয়। হূদ (আঃ) ৭:৬৫ এ আনেন আল্লাহকে ভয় করা নিয়ে একটি প্রশ্ন। সালিহ (আঃ) ৭:৭৩ এ আনেন একটি নিদর্শন, সেই উটনী। কেবল শু'আয়ব (আঃ)-এর কথা গিয়ে ঢোকে বাজারের ভেতর। মাপ ও ওজন পূর্ণ কর, আর লোকের প্রাপ্য জিনিস কম দিও না: এক শ্বাসেই তাওহীদ আর কারবারের নিয়ম।"
          }
        ]
      },
      {
        "h": {
          "en": "Fill It, Do Not Shave It",
          "bn": "পূর্ণ করে দাও, ছেঁটে দিও না"
        },
        "p": [
          {
            "en": "Fa awfu al-kayla wal-mizan. Awfa is the fourth form of w-f-y, the root of fulfilment and discharge in full: not merely do not cut, but complete. The command is positive, and it sets a floor that a careful cheat cannot stand on. The same prophet is given the negative form to the same people in 11:84, do not decrease the measure and the scale. Between the two verses the duty is stated from both ends, and neither end leaves room for the other to be ignored.",
            "bn": "ফা আওফুল কাইলা ওয়াল মীযান। আওফা এসেছে ওয়া-ফা-ইয়া মূলের চতুর্থ রূপ থেকে, আর এই মূলের অর্থ পূর্ণ করা, পুরোপুরি আদায় করা: কম না দেওয়া নয়, বরং পূর্ণ করে দেওয়া। হুকুমটি ইতিবাচক, আর এটি এমন একটা মেঝে বেঁধে দেয় যার উপর সাবধানী ঠকবাজও দাঁড়াতে পারে না। একই নবীর মুখে একই জাতির উদ্দেশে ১১:৮৪ এ আসে নিষেধের রূপটি, মাপে ও ওজনে কম দিও না। দুই আয়াতে দায়িত্বটা দুই দিক থেকেই বলা হয়ে গেল, আর কোনো দিকই অন্যটিকে এড়ানোর জায়গা রাখে না।"
          },
          {
            "en": "The two nouns are not a pair of synonyms. Kayl is the measuring out of what is poured or heaped, grain and dates and oil, and mizan is the balance itself, the instrument of weighing. At-Tabari glosses the command as completing people's rights by the measure you measure with and by the weight you weigh with. So the verse covers measuring and weighing alike and closes the gap between them, which is where a trader who is scrupulous with one and careless with the other prefers to live.",
            "bn": "দুটি শব্দ সমার্থক নয়। কাইল হলো ঢালা বা গাদা করা জিনিস মেপে দেওয়া, যেমন দানা, খেজুর, তেল; আর মীযান হলো পাল্লাটাই, ওজন করার যন্ত্র। তাবারী হুকুমটির ব্যাখ্যায় লেখেন, যে মাপে তুমি মাপো আর যে ওজনে তুমি ওজন করো, তা দিয়ে লোকের হক পুরোপুরি আদায় করো। অর্থাৎ মাপা আর ওজন করা, দুটোকেই আয়াত নাম ধরে ডাকে আর মাঝখানের ফাঁকটা বন্ধ করে দেয়; একদিকে খুঁতখুঁতে আর অন্যদিকে ঢিলে ব্যবসায়ী ঠিক ওই ফাঁকেই বাস করতে চায়।"
          },
          {
            "en": "Then wa la tabkhasu an-nasa ashya'ahum. Bakhs is from b-kh-s, to diminish a thing and so to wrong its owner. At-Tabari glosses it as wronging people of their rights and cutting them short, and points to the same root in 12:20, where Yusuf (AS) is sold for a thaman bakhs, a reduced price. Ibn Kathir glosses bakhs as shorting the measure and the weight khufyatan wa tadlisan, in secret and by dressing a thing up. And the object is the widest word available: ashya'ahum, their things, not their wealth.",
            "bn": "তারপর ওয়ালা তাবখাসুন নাসা আশইয়াআহুম। বাখস এসেছে বা-খা-সীন মূল থেকে, অর্থ কোনো জিনিস কমিয়ে দেওয়া আর তাতে তার মালিকের উপর যুলম করা। তাবারী এর ব্যাখ্যায় লেখেন, লোকের হকের উপর যুলম করা আর তাদের প্রাপ্য কমিয়ে দেওয়া; আর তিনি ১২:২০ আয়াতে একই মূলের দিকে আঙুল তোলেন, যেখানে ইউসুফ (আঃ)-কে বিক্রি করা হয় সামানে বাখস, অর্থাৎ স্বল্প মূল্যে। ইবনু কাসীর বাখসের ব্যাখ্যা দেন খুফইয়াতান ওয়া তাদলীসান, অর্থাৎ গোপনে আর জিনিস সাজিয়ে মাপ ও ওজনে কম দেওয়া। আর কর্মপদটি সবচেয়ে চওড়া শব্দ: আশইয়াআহুম, তাদের জিনিস, তাদের সম্পদ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "After It Was Set Right",
          "bn": "সংশোধনের পর"
        },
        "p": [
          {
            "en": "Wa la tufsidu fi'l-ardi ba'da islahiha. At-Tabari's reading of the last three words is worth pausing over. He takes the setting right of the earth to be the sending of the prophet among them: Allah set the land right by raising up a prophet in it who forbids them what is not lawful for them and what Allah dislikes for them. On that reading the arrival of the message is itself the repair, and to go on shorting the measure afterwards is to break something that had just been mended.",
            "bn": "ওয়ালা তুফসিদূ ফিল আরদি বা'দা ইসলাহিহা। শেষ তিনটি শব্দের উপর তাবারীর পাঠটা একবার থেমে দেখার মতো। যমীন ঠিক হওয়াটাকে তিনি ধরেন তাদের মধ্যে নবী পাঠানো হিসেবে: আল্লাহ তোমাদের মধ্যে নবী দাঁড় করিয়ে যমীনকে ঠিক করেছেন, যিনি তোমাদের হারাম কাজ থেকে আর আল্লাহ যা অপছন্দ করেন তা থেকে নিষেধ করেন। এই পাঠে বাণী এসে পৌঁছানোটাই মেরামত, আর তার পরেও মাপে কম দিয়ে চলা মানে সদ্য সারানো জিনিস আবার ভেঙে ফেলা।"
          },
          {
            "en": "As-Sa'di reads the prohibition from the other side, taking the corruption to be the piling up of acts of disobedience, and he reads the verse's closing clause as its argument: leaving sins in obedience to Allah's command and to draw near to Him is better and more useful for the servant than committing them and earning the anger of the Almighty and the punishment of the Fire. So at-Tabari locates the repair in the coming of the prophet, and as-Sa'di locates the ruin in an accumulating habit. The two readings sit on the same sentence without colliding.",
            "bn": "সা'দী নিষেধটিকে দেখেন অন্য পাশ থেকে; ফাসাদ মানে তিনি ধরেন নাফরমানির কাজ জমতে থাকা, আর আয়াতের শেষ বাক্যটিকেই ধরেন তার যুক্তি হিসেবে: আল্লাহর হুকুম মেনে আর তাঁর নৈকট্যের আশায় গুনাহ ছেড়ে দেওয়া বান্দার জন্য ভালো আর বেশি লাভজনক, বনাম গুনাহ করে মহাপরাক্রমশালীর ক্রোধ আর জাহান্নামের আযাব কামাই করা। অর্থাৎ তাবারী মেরামতটা খুঁজে পান নবীর আসায়, আর সা'দী ধ্বংসটা খুঁজে পান জমতে থাকা অভ্যাসে। দুটি পাঠ একই বাক্যের উপর বসে, অথচ একটি অন্যটির সঙ্গে ঠোকাঠুকি করে না।"
          },
          {
            "en": "The last clause decides where the whole verse belongs. That is better for you, if you should be believers. Honest weighing is not set beside faith as a separate decency; it is made the test of the faith already claimed. Nothing in the sentence promises a better margin. The better is stated flatly and then tied to a condition about the hearer, so that a man who shorts a measure has not merely wronged a customer. He has answered a question about himself that he thought he had already answered.",
            "bn": "শেষ বাক্যটাই ঠিক করে দেয় গোটা আয়াত কোন ঘরে পড়ে। এটাই তোমাদের জন্য ভালো, যদি তোমরা মু'মিন হয়ে থাক। সঠিক ওজনকে ঈমানের পাশে আলাদা একটা ভদ্রতা হিসেবে বসানো হয়নি; যে ঈমানের দাবি আগেই করা হয়েছে, এটিকে তারই পরীক্ষা বানানো হয়েছে। বাক্যে বেশি মুনাফার কোনো ওয়াদা নেই। ভালো কথাটা সাফ বলা হয়, তারপর তা শ্রোতার নিজের সম্পর্কে একটা শর্তে বেঁধে দেওয়া হয়। কাজেই যে মাপে কম দেয় সে কেবল খরিদ্দারের উপর যুলম করেনি। নিজের সম্পর্কে যে প্রশ্নের জবাব সে দিয়ে ফেলেছে ভেবেছিল, সেটির জবাব সে আবার দিয়ে ফেলেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Damp Under the Grain",
          "bn": "দানার নিচে ভেজা"
        },
        "p": [
          {
            "en": "Muslim records from Abu Hurayrah (RA) that the Messenger of Allah ﷺ happened to pass by a heap of eatables. He thrust his hand into it and his fingers were moistened. He said to the owner of the heap: what is this? The man replied: Messenger of Allah, these have been drenched by rainfall. He remarked: why did you not place this over the other eatables so that the people could see it? He who deceives is not of me.",
            "bn": "মুসলিম আবূ হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর রসূল ﷺ একবার খাদ্যের একটি গাদার পাশ দিয়ে যাচ্ছিলেন। তিনি তার ভেতরে হাত ঢোকালেন আর তাঁর আঙুলে ভেজা লাগল। তিনি গাদার মালিককে বললেন, এটা কী? লোকটি বলল, হে আল্লাহর রসূল, এতে বৃষ্টির পানি লেগেছে। তিনি বললেন, তুমি এটা উপরের দিকে রাখলে না কেন, যাতে লোকেরা দেখতে পায়? যে ধোঁকা দেয় সে আমার দলের নয়।"
          },
          {
            "en": "That narration is the practical face of Ibn Kathir's gloss on bakhs, which named secrecy and dressing a thing up as the method. Nobody had been given a short measure in that market. The weight was honest and the price was agreed, and the whole wrong lay in one fact left below the surface where a buyer's hand would not reach it. The verse forbids depriving people of their things; the narration shows that it can be done without touching the scales at all.",
            "bn": "এই হাদীসটাই বাখস নিয়ে ইবনু কাসীরের ব্যাখ্যার হাতে-কলমে চেহারা, যেখানে তিনি পদ্ধতি হিসেবে বলেছিলেন গোপন করা আর জিনিস সাজিয়ে রাখা। ওই বাজারে কারও মাপে কম দেওয়া হয়নি। ওজন ঠিক ছিল, দামও ঠিক ছিল, আর গোটা অন্যায়টা ছিল একটি তথ্যে, যা এমন জায়গায় রেখে দেওয়া হয়েছিল যেখানে ক্রেতার হাত পৌঁছায় না। আয়াত নিষেধ করে লোকের প্রাপ্য জিনিস কম দিতে; আর হাদীস দেখিয়ে দেয়, পাল্লা না ছুঁয়েও কাজটা সারা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Balance Elsewhere",
          "bn": "পাল্লা অন্যান্য আয়াতে"
        },
        "p": [
          {
            "en": "26:181 to 26:183 is the same command to the same people in a different surah, and it runs in three steps: give full measure, weigh with an even balance, and do not deprive people of their due or spread corruption on the earth. 17:35 gives the command to the Muslims directly and attaches a reason our verse leaves unstated, that this is best and best in result. Between them they show that the instruction was never particular to one town's market.",
            "bn": "২৬:১৮১ থেকে ২৬:১৮৩ একই জাতিকে দেওয়া একই হুকুম, তবে অন্য সূরায়, আর সেখানে তা তিন ধাপে চলে: মাপে পূর্ণ দাও, সঠিক পাল্লায় ওজন কর, আর লোকের প্রাপ্য কম দিও না ও পৃথিবীতে ফাসাদ ছড়িও না। ১৭:৩৫ একই হুকুম সোজা মুসলিমদের দেয় আর সঙ্গে এমন একটি কারণ জুড়ে দেয় যা আমাদের আয়াত বলেনি, অর্থাৎ এটাই উত্তম নীতি আর পরিণামেও উৎকৃষ্ট। দুই আয়াত মিলে দেখায়, হুকুমটি কোনো একটা জনপদের বাজারের জন্য ছিল না।"
          },
          {
            "en": "83:1 to 83:3 supplies the anatomy of the offence: woe to those who give less, who take in full from people and cause loss when they measure out to them. Ibn Kathir brings those verses into his comment on our verse and calls them a severe threat. 55:9 sets the balance inside the order of creation, and 6:152 places full measure and weight in a list of commands that also covers the orphan's property, just speech and the covenant of Allah.",
            "bn": "৮৩:১ থেকে ৮৩:৩ অপরাধটির কাঠামো খুলে দেখায়: দুর্ভোগ ঠকবাজদের জন্য, যারা লোকের কাছ থেকে নেওয়ার সময় পুরোপুরি নেয় আর মেপে দেওয়ার সময় কম দেয়। ইবনু কাসীর আমাদের আয়াতের ব্যাখ্যায় ওই আয়াতগুলো টেনে আনেন আর সেগুলোকে বলেন কঠিন হুঁশিয়ারি। ৫৫:৯ পাল্লাটিকে বসিয়ে দেয় সৃষ্টির বিন্যাসের ভেতরে, আর ৬:১৫২ পূর্ণ মাপ ও ওজনকে রাখে এমন একটি হুকুমের তালিকায় যেখানে ইয়াতীমের সম্পত্তি, ইনসাফের কথা আর আল্লাহর সঙ্গে ওয়াদাও আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Your Measure Runs Short",
          "bn": "আপনার মাপ কোথায় কম পড়ে"
        },
        "p": [
          {
            "en": "Very few readers pour grain for a living, and the verse is not narrowed by that. Its object is ashya'ahum, their things, the widest word it could have used, and the commentators gloss it as people's rights rather than only their goods. An hour billed and forty minutes worked is a short measure. So is a repair finished to the level that will pass a glance. So is a reference written warmly about someone you would not hire, which takes something from whoever reads it.",
            "bn": "পাঠকদের খুব কম জনই দানা মেপে জীবিকা চালান, আর আয়াত তাতে ছোট হয়ে যায় না। এর কর্মপদ আশইয়াআহুম, তাদের জিনিস, সবচেয়ে চওড়া শব্দটাই বেছে নেওয়া হয়েছে, আর মুফাসসিররা এর ব্যাখ্যা দেন কেবল পণ্য নয়, মানুষের হক হিসেবে। এক ঘণ্টার বিল নিয়ে চল্লিশ মিনিট কাজ করা মাপে কম দেওয়া। এক নজর দেখে পার পেয়ে যাওয়ার মতো করে সারানো কাজও তাই। যাকে আপনি নিজে কাজে নিতেন না তার সম্পর্কে উষ্ণ সুপারিশ লেখাও তাই, কারণ তাতে যে পড়বে তার কাছ থেকে কিছু কমে যায়।"
          },
          {
            "en": "The narration about the wet grain names the harder half. The usual failure is not a doctored scale, which is a decision, but a fact left where the other side cannot see it. The mark on the car nobody asked about. The condition in the contract that is true but unmentioned. Ibn Kathir's two words, secrecy and dressing up, cover both, and the test they suggest is simple: if the other party could see everything I can see, would this transaction still go through on these terms?",
            "bn": "ভেজা দানার হাদীসটি কঠিন অর্ধেকটার নাম বলে দেয়। সাধারণ গলদটা পাল্লায় কারসাজি নয়, ওটা তো একটা সিদ্ধান্ত; সাধারণ গলদ হলো এমন একটা তথ্য যা অন্য পক্ষের চোখের আড়ালে রেখে দেওয়া হয়। গাড়ির যে দাগটার কথা কেউ জিজ্ঞেস করেনি। চুক্তির যে শর্তটা সত্যি, কিন্তু মুখে আনা হয়নি। ইবনু কাসীরের দুটি শব্দ, গোপন করা আর সাজিয়ে রাখা, দুটোকেই ধরে ফেলে; আর তা থেকে পরীক্ষাটা সোজা: আমি যা যা দেখছি অন্য পক্ষও যদি সবটা দেখতে পেত, এই কারবারটা কি তবু এই শর্তেই হতো?"
          },
          {
            "en": "The closing condition changes the timing of all of this. That is better for you, if you should be believers, means the correction is not owed at the end of a career when there is enough margin to be generous with. It is owed on the next transaction, because that is where the claim of faith is being tested. One practical version: pick the one place in your work where you know the measure is habitually short, and make it full this week, before anybody complains and while it still costs you something.",
            "bn": "শেষের শর্তটা এই সবের সময়টাই বদলে দেয়। এটাই তোমাদের জন্য ভালো, যদি তোমরা মু'মিন হয়ে থাক, মানে শোধরানোটা কর্মজীবনের শেষে পাওনা নয়, যখন উদার হওয়ার মতো যথেষ্ট লাভ জমে গেছে। এটা পাওনা পরের কারবারেই, কারণ ঈমানের দাবিটা ওখানেই পরীক্ষা হচ্ছে। হাতে-কলমে একটা রূপ: কাজের মধ্যে যে একটা জায়গায় আপনি জানেন মাপ নিয়ম করেই কম পড়ে, এ সপ্তাহেই সেটা পূর্ণ করে দিন, কেউ নালিশ করার আগে আর যখন এতে আপনার কিছু খরচ হচ্ছে তখনই।"
          }
        ]
      },
      {
        "h": {
          "en": "Barakah in the Measure",
          "bn": "মাপে বরকত"
        },
        "p": [
          {
            "en": "The Sunnah has a supplication over exactly these words. Al-Bukhari records from Anas ibn Malik (RA) that the Messenger of Allah ﷺ said: O Allah, bestow Your blessings on their measure, and bless their mudd and their sa'. The narration adds that he meant the people of Madinah. The mudd and the sa' are the units of the kayl our verse commands, and the prayer asks for barakah in them rather than for more of them, which is a different request from the one a short measure is trying to answer.",
            "bn": "ঠিক এই শব্দগুলোর উপরেই সুন্নাহর একটি দুআ আছে। বুখারী আনাস ইবনু মালিক (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রসূল ﷺ বলেছেন: হে আল্লাহ, তাদের মাপে বরকত দিন, আর তাদের মুদ ও সা'য়ে বরকত দিন। বর্ণনায় বলা হয়েছে, তিনি মাদীনাবাসীদের কথা বলছিলেন। মুদ আর সা' হলো আমাদের আয়াতে হুকুম করা সেই কাইলের একক, আর দুআটি তাতে বেশি চায় না, বরকত চায়। মাপে কম দিয়ে যে প্রশ্নের জবাব দেওয়া হচ্ছে, এ চাওয়াটা তার থেকে আলাদা।"
          },
          {
            "en": "A short supplication can also be built from the verse's own vocabulary, offered as that and not as a transmitted wording. O Allah, You know what I owe and what I have handed over, and the difference between the two. Fill my measure where I have been keeping it short. Keep my hands off what belongs to people who cannot check me. And put barakah in the little I earn honestly, so that I never need what I would have to take from someone else.",
            "bn": "আয়াতের নিজের শব্দ দিয়েও ছোট একটা দুআ গড়া যায়, বর্ণিত দুআ হিসেবে নয়, নিজের কথা হিসেবেই। হে আল্লাহ, আমার কী দেনা আর আমি কতটা বুঝিয়ে দিয়েছি, আর দুটোর মধ্যে ফারাক কতটুকু, আপনি জানেন। যেখানে আমি মাপ কম রেখে এসেছি সেখানে আমার মাপ পূর্ণ করে দিন। যারা আমাকে যাচাই করতে পারে না, তাদের জিনিসের উপর থেকে আমার হাত সরিয়ে রাখুন। আর খাঁটি পথে যা কামাই তার সামান্যতেই বরকত দিন, যাতে অন্যের কাছ থেকে কেটে নিতে হয় এমন কিছু আমার কখনো দরকার না হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What You Weigh",
          "bn": "যা আপনি ওজন করেন তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse ties the measure to the claim of faith, so the questions have to reach that far. Where in my work is the measure habitually short, and how long have I known? If the other side could see everything I can see about what I am selling or promising, would the deal still stand? And is there a fact I am keeping below the surface of the heap, true but unmentioned, on the calculation that nobody will put a hand in?",
            "bn": "আয়াতটি মাপকে ঈমানের দাবির সঙ্গে বেঁধে দেয়, কাজেই প্রশ্নগুলোকেও ততদূর যেতে হবে। আমার কাজের কোন জায়গায় মাপ নিয়ম করেই কম পড়ে, আর কতদিন ধরে আমি তা জানি? আমি যা বেচছি বা যার ওয়াদা করছি, সে সম্পর্কে আমি যা যা দেখছি অন্য পক্ষও সবটা দেখলে কারবারটা কি টিকত? আর গাদার নিচে এমন কোনো তথ্য কি আমি চাপা রেখেছি, যা সত্যি কিন্তু বলা হয়নি, এই হিসাবে যে কেউ ওখানে হাত ঢোকাবে না?"
          },
          {
            "en": "Ashya'ahum is the widest word the verse could have used, so what of other people's is in my hands right now besides money: their time, their reputation, their turn, their trust? Shu'ayb (AS) was told to say all of this to his own town, where he had to keep trading afterwards. Who would find it hardest to hear this from me, and what does that tell me? And what would change tomorrow if better for you meant better for my faith rather than better for my margin?",
            "bn": "আশইয়াআহুম আয়াতের হাতে থাকা সবচেয়ে চওড়া শব্দ; কাজেই টাকার বাইরে এই মুহূর্তে অন্যের কী কী আমার হাতে আছে: তার সময়, তার সুনাম, তার পালা, তার বিশ্বাস? শু'আয়ব (আঃ)-কে এই সব কথা বলতে হয়েছিল নিজের জনপদেই, যেখানে এর পরেও তাঁকে কারবার চালিয়ে যেতে হতো। আমার মুখে এই কথা শোনা কার সবচেয়ে কষ্ট হতো, আর তা থেকে আমি নিজের সম্পর্কে কী বুঝি? আর তোমাদের জন্য ভালো কথাটার মানে যদি হয় আমার ঈমানের জন্য ভালো, মুনাফার জন্য ভালো নয়, তবে কালই কী বদলাত?"
          }
        ]
      }
    ]
  },
  "7:91": {
    "sections": [
      {
        "h": {
          "en": "Where the Sentence Falls",
          "bn": "রায়টা কোথায় নামে"
        },
        "p": [
          {
            "en": "The last exchange in Madyan is short and it is about force. In 7:88 the eminent men promise to drive Shu'ayb (AS) and the believers out of the town unless they come back to the old religion. 7:89 is his refusal and his prayer that Allah decide between them in truth. 7:90 has the chiefs turning to their own people with a warning that following Shu'ayb will make them losers. Then this verse. 7:92 says it was as though the deniers had never lived there, and 7:93 has Shu'ayb (AS) turn away.",
            "bn": "মাদইয়ানে শেষ কথা-কাটাকাটিটা ছোট, আর তা জোর খাটানো নিয়ে। ৭:৮৮ এ সর্দাররা কথা দেয় যে পুরনো ধর্মে ফিরে না এলে শু'আয়ব (আঃ) আর মুমিনদের তারা জনপদ থেকে বের করে দেবে। ৭:৮৯ তাঁর অস্বীকার, আর সেই সঙ্গে দুআ যে আল্লাহ তাদের মধ্যে সঠিকভাবে ফায়সালা করে দিন। ৭:৯০ এ সর্দাররা নিজেদের লোকদের দিকে ফিরে হুঁশিয়ারি দেয়, শু'আয়বের পথ ধরলে তারা ক্ষতিগ্রস্ত হবে। তারপর এই আয়াত। ৭:৯২ বলে, যেন অস্বীকারকারীরা সেখানে কোনোদিন বসবাসই করেনি, আর ৭:৯৩ এ শু'আয়ব (আঃ) মুখ ফিরিয়ে নেন।"
          },
          {
            "en": "The first thing to see about this verse is that it is not new. Word for word, letter for letter, it is 7:78, the end of Thamud thirteen verses earlier. Two peoples, two prophets, two different last crimes, and the Quran uses one sentence for both endings without altering a syllable. The surah has been building an argument out of repetition since 7:59, and here the repetition reaches the level of the sentence itself.",
            "bn": "এই আয়াত নিয়ে প্রথম যা দেখার, তা হলো আয়াতটি নতুন নয়। শব্দে শব্দে, হরফে হরফে এটি ৭:৭৮, তেরো আয়াত আগে সামূদের শেষ। দুই জাতি, দুই নবী, শেষ অপরাধ দুই রকম, আর কুরআন দুই পরিণতির জন্যই একটি বাক্য ব্যবহার করে, একটি অক্ষরও বদলায় না। ৭:৫৯ থেকে সূরাটি পুনরাবৃত্তি দিয়ে একটা যুক্তি দাঁড় করাচ্ছে, আর এখানে সেই পুনরাবৃত্তি বাক্যের স্তরে গিয়ে পৌঁছায়।"
          },
          {
            "en": "What differs is only what each sentence answers. In Thamud's panel the identical words come after 7:77, where the she-camel is hamstrung and the punishment demanded outright. Here they come after 7:90, where nobody has demanded anything; the chiefs are simply running a campaign to keep their townsmen away from a man. One people dared the punishment and one people lobbied against a messenger, and the two arrived at the same line.",
            "bn": "তফাত কেবল এই, কোন কাজের জবাবে বাক্যটি আসছে। সামূদের পর্বে হুবহু এই কথাগুলো আসে ৭:৭৭ এর পরে, যেখানে উটনী মেরে ফেলা হয় আর শাস্তি সোজা চেয়ে বসা হয়। এখানে আসে ৭:৯০ এর পরে, যেখানে কেউ কিছু চায়নি; সর্দাররা কেবল নিজেদের লোকদের একজন মানুষের কাছ থেকে দূরে রাখার প্রচার চালাচ্ছে। এক জাতি শাস্তিকে ডেকে এনেছিল, আর এক জাতি এক রসূলের বিরুদ্ধে দল পাকিয়েছিল, আর দুই দল গিয়ে থেমেছে একই লাইনে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Quake and the Crouching",
          "bn": "কম্পন আর উপুড় হয়ে পড়া"
        },
        "p": [
          {
            "en": "Fa akhadhat-humu ar-rajfah. Rajfah is from r-j-f, a root of violent trembling and shaking, and the noun is built on the pattern that names a single occurrence rather than a state. At-Tabari glosses it as az-zalzalah, the quake that moves for the punishment of Allah, and as-Sa'di as the severe earthquake. Al-Qurtubi glosses it briefly: it means the earthquake, and it is said, the cry.",
            "bn": "ফা আখাযাতহুমুর রাজফা। রাজফা এসেছে রা-জীম-ফা মূল থেকে, যার অর্থ প্রচণ্ড কেঁপে ওঠা, আর শব্দটির গড়ন এমন ছাঁদে যা অবস্থা নয়, একবারের ঘটনা বোঝায়। তাবারী এর ব্যাখ্যা দেন যালযালা, অর্থাৎ আল্লাহর শাস্তির জন্য নড়ে ওঠা ভূমিকম্প; আর সা'দী বলেন প্রচণ্ড ভূকম্পন। কুরতুবী সংক্ষেপে ব্যাখ্যা দেন: অর্থ ভূমিকম্প, আর বলা হয়েছে, বিকট শব্দ।"
          },
          {
            "en": "Ibn Kathir hears the root twice. He says that the rajfah took them just as they had arjafu Shu'ayb and his companions, unsettling them and threatening them with expulsion, which is the threat recorded in 7:88. On his reading the punishment is named after the crime in the same letters: people who spent their strength shaking a man out of his town were shaken out of the earth. That is a claim about this word and this passage, and Ibn Kathir is the one making it.",
            "bn": "ইবনু কাসীর মূলটিকে দুবার শোনেন। তিনি বলেন, রাজফা তাদের পাকড়াও করল ঠিক যেমন তারা শু'আয়ব (আঃ) আর তাঁর সঙ্গীদের আরজাফূ করেছিল, অর্থাৎ কাঁপিয়ে তুলেছিল, ভয় দেখিয়ে আর বের করে দেওয়ার হুমকি দিয়ে; সেই হুমকিটাই লেখা আছে ৭:৮৮ এ। তাঁর পাঠে শাস্তির নাম রাখা হয়েছে অপরাধের হরফেই: যারা নিজেদের জোর খাটিয়েছিল একজন মানুষকে তার জনপদ থেকে কাঁপিয়ে বের করতে, তারাই যমীন থেকে কেঁপে সরে গেল। এটি এই শব্দ আর এই পর্ব নিয়ে একটি দাবি, আর দাবিটি ইবনু কাসীরের।"
          },
          {
            "en": "Then fa asbahu fi darihim jathimin. Asbahu is built on subh, the morning: the verb's base sense is to enter upon morning, and it is used more widely for coming to be in a state. Jathimin is from j-th-m, to crouch low and settle on a place. At-Tabari glosses it as upon their knees, dead and destroyed; as-Sa'di as fallen, dead and still. The picture is not of bodies flung about but of a whole town caught in position and left there.",
            "bn": "তারপর ফা আসবাহূ ফী দারিহিম জাসিমীন। আসবাহূ গড়া হয়েছে সুবহ থেকে, অর্থাৎ ভোর; ক্রিয়াটির মূল অর্থ ভোরে প্রবেশ করা, আর তা আরও চওড়াভাবে কোনো অবস্থায় গিয়ে দাঁড়ানো বোঝাতেও চলে। জাসিমীন এসেছে জীম-সা-মীম মূল থেকে, অর্থ নিচু হয়ে বসে পড়া আর সেখানেই জমে থাকা। তাবারী এর ব্যাখ্যা দেন হাঁটুর উপর, মৃত ও ধ্বংস; সা'দী বলেন লুটিয়ে পড়া, মৃত, নিস্তব্ধ। ছবিটা ছিটকে পড়া লাশের নয়, গোটা একটা জনপদ যে অবস্থায় ছিল সেই অবস্থাতেই ধরা পড়ে থেকে যাওয়ার।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Names for One End",
          "bn": "এক পরিণতির তিনটি নাম"
        },
        "p": [
          {
            "en": "Madyan's end is named three different ways in the Quran, and the commentators take the difference seriously rather than smoothing it over. Here it is the rajfah, the quake. In 11:94 it is the shriek that seizes those who had wronged. In 26:189 it is the punishment of the day of the black cloud, and the verse adds that it was the punishment of a terrible day. Al-Qurtubi notes the two readings of our word and then says that the people of al-Aykah were destroyed by the zullah, the cloud that overshadowed them.",
            "bn": "মাদইয়ানের পরিণতিকে কুরআন তিনভাবে নাম দেয়, আর মুফাসসিররা তফাতটা চাপা দেন না, গুরুত্ব দিয়ে ধরেন। এখানে তা রাজফা, ভূমিকম্প। ১১:৯৪ এ তা প্রচণ্ড শব্দ, যা যালিমদের আঘাত হানে। ২৬:১৮৯ এ তা এক মেঘাচ্ছন্ন দিবসের শাস্তি, আর আয়াত যোগ করে, তা ছিল এক মহা দিবসের আযাব। কুরতুবী আমাদের শব্দটির দুই পাঠ উল্লেখ করে বলেন, আইকাবাসীদের ধ্বংস করা হয়েছিল যুল্লা দিয়ে, অর্থাৎ যে মেঘ তাদের ছায়ায় ঢেকে ফেলেছিল।"
          },
          {
            "en": "Ibn Kathir's answer is that each name is fitted to what the people had done. The quake, because they had shaken Shu'ayb (AS) with threats. The shriek, because they had mocked him with the sneer recorded in 11:87, so a cry from the sky silenced them. The black cloud, because in 26:187 they had told him to drop fragments of the sky on them if he was truthful. He then holds that all of it came together: a cloud that shadowed them with sparks and flame and a great heat, then a cry from above and a violent quake from below.",
            "bn": "ইবনু কাসীরের জবাব হলো, প্রতিটি নাম তাদের কাজের সঙ্গে মিলিয়ে বসানো। ভূমিকম্প, কারণ তারা হুমকি দিয়ে শু'আয়ব (আঃ)-কে কাঁপিয়েছিল। বিকট শব্দ, কারণ ১১:৮৭ এ লেখা বিদ্রূপ দিয়ে তারা তাঁকে ঠাট্টা করেছিল, কাজেই আকাশের এক চিৎকার তাদের চুপ করিয়ে দিল। মেঘের ছায়া, কারণ ২৬:১৮৭ এ তারা তাঁকে বলেছিল সত্যবাদী হলে আকাশের টুকরো তাদের উপর ফেলে দিতে। এরপর তিনি বলেন, সবটাই একসঙ্গে এসেছিল: আগুনের ফুলকি, লেলিহান শিখা আর প্রচণ্ড উত্তাপ নিয়ে এক মেঘ তাদের ছায়া দিল, তারপর উপর থেকে চিৎকার আর নিচ থেকে প্রবল কম্পন।"
          },
          {
            "en": "At-Tabari fills the same gap from transmitted reports rather than from the Quran. He carries an account from as-Suddi, and another from Ibn Ishaq, in which heat was loosed on Madyan until no shade and no water helped them, a cloud then appeared carrying a cool sweet wind, they called to one another to get under it, and when they had gathered beneath it with their women and children it closed over them. These are reports from a tabi'i and from a compiler of sirah, not narrations from the Prophet ﷺ, and that is how they are being reported here.",
            "bn": "তাবারী একই ফাঁক ভরান কুরআনের বদলে বর্ণিত রেওয়ায়েত দিয়ে। তিনি সুদ্দী থেকে একটি আর ইবনু ইসহাক থেকে আরেকটি বিবরণ আনেন, যেখানে মাদইয়ানের উপর গরম ছেড়ে দেওয়া হয়, ছায়া আর পানি কিছুই তাদের কাজে আসে না; তারপর ঠান্ডা মিষ্টি হাওয়া নিয়ে একটি মেঘ দেখা যায়, তারা একে অন্যকে ডেকে বলে ওটার নিচে চলো, আর নারী ও শিশুসহ সবাই যখন তার নিচে জড়ো হয়, মেঘটি তাদের উপর বন্ধ হয়ে যায়। এগুলো একজন তাবিঈ আর একজন সীরাত-সংকলকের বর্ণনা, নবী ﷺ থেকে হাদীস নয়, আর এখানে সেভাবেই বলা হচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Sunnah Adds",
          "bn": "সুন্নাহ যা যোগ করে"
        },
        "p": [
          {
            "en": "The classical tafsir attaches no sound narration to this verse in particular; Ibn Kathir works the whole comment out of the Quran's own parallels. One sound narration does bear on the situation. Al-Bukhari records from Ibn Umar (RA) that the Messenger of Allah ﷺ said: if Allah sends punishment upon a nation then it befalls upon the whole population indiscriminately, and then they will be resurrected and judged according to their deeds. It is a statement about what a descending punishment does not distinguish.",
            "bn": "ক্লাসিক্যাল তাফসীর এই আয়াতের সঙ্গে আলাদা করে কোনো সহীহ হাদীস জোড়ে না; ইবনু কাসীর গোটা ব্যাখ্যাটাই দাঁড় করান কুরআনের নিজের সমান্তরাল আয়াত থেকে। তবে একটি সহীহ হাদীস পরিস্থিতিটির সঙ্গে খাপ খায়। বুখারী ইবনু উমর (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রসূল ﷺ বলেছেন: আল্লাহ যখন কোনো জাতির উপর আযাব নামান, তখন সে আযাব তাদের মধ্যে যারা থাকে সবাইকেই পায়, তারপর তাদের নিজ নিজ আমল অনুযায়ী উঠানো হবে। কথাটা এই যে, নেমে আসা আযাব কোন জিনিস আলাদা করে দেখে না।"
          },
          {
            "en": "Madyan's own record keeps the other half in view: 11:94 says that when the command came, Shu'ayb (AS) and those who believed with him were saved by mercy, and only then that the shriek seized those who had wronged. The believers here are not described as swept up with the town, and what the narration adds is the principle behind the sorting, which happens at the raising and by deeds. One more thing should be said plainly. Shu'ayb (AS) is often called the orator of the prophets, but at-Tabari's wording for that comes through Ibn Ishaq without a connected chain, so it is not quoted here as a hadith.",
            "bn": "মাদইয়ানের নিজের বিবরণ অন্য অর্ধেকটাও চোখের সামনে রাখে: ১১:৯৪ বলে, আমার হুকুম যখন এলো, শু'আয়ব (আঃ) আর তাঁর সঙ্গে যারা ঈমান এনেছিল তাদের দয়া করে বাঁচিয়ে দেওয়া হলো, আর তারপরই যালিমদের প্রচণ্ড শব্দ আঘাত হানল। কাজেই এখানে মুমিনদের জনপদের সঙ্গে ভেসে যেতে দেখানো হয়নি। হাদীসটি যা যোগ করে তা হলো বাছাইয়ের নীতি, আর সে বাছাই হয় উঠানোর দিন, আমল অনুযায়ী। এই পর্ব নিয়ে আরেকটি কথা সোজাসুজি বলে রাখা ভালো। শু'আয়ব (আঃ)-কে প্রায়ই বলা হয় নবীদের বক্তা; তাবারী এর যে বর্ণনা আনেন তা ইবনু ইসহাকের সূত্রে, সংযুক্ত সনদ ছাড়া, কাজেই এখানে সেটি হাদীস হিসেবে উদ্ধৃত হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Line Elsewhere",
          "bn": "একই লাইন অন্য জায়গায়"
        },
        "p": [
          {
            "en": "7:78 is the twin, and it closes Thamud. 29:37 gives Madyan's ending a third time, with one clause added in front: they denied him, so the earthquake seized them, and they became in their dwelling fallen prone. Reading the three together shows how little the Quran spends on the mechanics of a destruction and how much on the denial that preceded it. The sentence for the end is stock; the case that earned it is told at length each time.",
            "bn": "৭:৭৮ এর জোড়া আয়াত, আর তা সামূদের পর্ব শেষ করে। ২৯:৩৭ মাদইয়ানের পরিণতি তৃতীয়বার দেয়, সামনে একটি বাক্যাংশ জুড়ে: তারা তাকে অস্বীকার করল, অতঃপর কম্পন তাদের পাকড়াও করল আর তারা নিজেদের বাসস্থানে উপুড় হয়ে পড়ে রইল। তিনটি একসঙ্গে পড়লে বোঝা যায়, ধ্বংসের কায়দা নিয়ে কুরআন কত কম খরচ করে আর তার আগের অস্বীকার নিয়ে কত বেশি। পরিণতির বাক্যটি বাঁধা; আর যে মামলা তা আদায় করল, সেটি প্রতিবার বিস্তারে বলা হয়।"
          },
          {
            "en": "Two small differences repay attention. Our verse and 29:37 both have fi darihim, in their dwelling, singular, as though the town were one house; 11:94 has fi diyarihim, in their dwellings, plural. And 7:92 stands where the reader expects a lament and gives an observation instead: those who denied Shu'ayb, it was as though they had never resided there. The sentence removes them from the place rather than mourning them in it, and 11:94 has already recorded who was taken out of it first.",
            "bn": "দুটি ছোট তফাত খেয়াল করার মতো। আমাদের আয়াত আর ২৯:৩৭ দুটোতেই আছে ফী দারিহিম, তাদের বাসস্থানে, একবচন, যেন গোটা জনপদটাই একটি ঘর; আর ১১:৯৪ এ আছে ফী দিয়ারিহিম, তাদের ঘরগুলোতে, বহুবচন। আর ৭:৯২ এমন জায়গায় দাঁড়িয়ে যেখানে পাঠক শোকগাথা আশা করে, অথচ সেখানে আসে একটি পর্যবেক্ষণ: যারা শু'আয়বকে অস্বীকার করেছিল, যেন তারা সেখানে কোনোদিন বসবাসই করেনি। বাক্যটি তাদের জায়গা থেকে মুছে দেয়, সেখানে বসে কাঁদে না; আর কাকে আগে সেখান থেকে বের করে আনা হয়েছিল, ১১:৯৪ তা লিখে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "No Interval Was Given",
          "bn": "কোনো বিরতি দেওয়া হয়নি"
        },
        "p": [
          {
            "en": "The most unsettling thing in the verse is what the Quran leaves out. Between 7:90 and 7:91 there is no interval at all. The chiefs were in the middle of a campaign, briefing their own townsmen about the losses that following Shu'ayb (AS) would bring. They were not warned again, and they were not given a last scene. The sentence simply arrives in the next line, and the word asbahu puts it at a morning, which is when a town is least braced for anything.",
            "bn": "আয়াতের সবচেয়ে অস্বস্তিকর জিনিসটা হলো কুরআন যা বলে না। ৭:৯০ আর ৭:৯১ এর মাঝে কোনো বিরতিই নেই। সর্দাররা তখন প্রচারের মধ্যিখানে, নিজেদের লোকদের বোঝাচ্ছে শু'আয়ব (আঃ)-এর পথ ধরলে কী কী লোকসান হবে। তাদের আবার সতর্ক করা হয়নি, শেষ কোনো দৃশ্যও দেওয়া হয়নি। রায়টা পরের লাইনেই এসে পড়ে, আর আসবাহূ শব্দ তা বসিয়ে দেয় ভোরবেলায়, যখন কোনো জনপদ সবচেয়ে কম তৈরি থাকে।"
          },
          {
            "en": "That absence is the verse's use. Most people read the quiet that follows a wrong as a verdict on the wrong. Nothing happened, so nothing was wrong, or at least nothing serious. Madyan had that quiet right up to the last line, and they were spending it on organising opinion against a man rather than on checking what he had said about their scales. The quiet was the interval, and it was the only thing they were actually given.",
            "bn": "এই না-থাকাটাই আয়াতের কাজে লাগার জায়গা। অন্যায় করার পর যে নীরবতা আসে, বেশির ভাগ মানুষ সেটাকেই অন্যায়ের উপর রায় হিসেবে পড়ে। কিছু তো হলো না, তার মানে দোষ ছিল না, অন্তত বড় কিছু ছিল না। মাদইয়ানের কাছে সেই নীরবতা ছিল একেবারে শেষ লাইন পর্যন্ত, আর তারা সেই সময়টা খরচ করছিল একজন মানুষের বিরুদ্ধে জনমত গোছাতে, নিজেদের পাল্লা নিয়ে তাঁর কথাটা যাচাই করতে নয়। নীরবতাটাই ছিল বিরতি, আর সত্যিকারে তাদের ওটুকুই দেওয়া হয়েছিল।"
          },
          {
            "en": "So the practical reading is not about earthquakes. It is about what you do with an unpunished wrong of your own. Name one thing you have been continuing because there have been no consequences, and treat the absence of consequences as time rather than as permission. Then do the smaller thing first: return what is not yours, or say the sentence you have been avoiding, this week, while the quiet still holds and while it is still your own decision rather than somebody else's verdict.",
            "bn": "কাজেই হাতে-কলমে পাঠটা ভূমিকম্প নিয়ে নয়। এটা নিয়ে যে, নিজের কোনো শাস্তি-না-পাওয়া অন্যায় নিয়ে আপনি কী করছেন। এমন একটা কাজের নাম বলুন যা আপনি চালিয়ে যাচ্ছেন কেবল কোনো ফল ভোগ করতে হয়নি বলে, আর ফল না হওয়াটাকে অনুমতি নয়, সময় হিসেবে ধরুন। তারপর ছোট কাজটা আগে করুন: যা আপনার নয় তা ফিরিয়ে দিন, বা যে কথাটা এড়িয়ে যাচ্ছেন তা বলে ফেলুন, এ সপ্তাহেই, যতক্ষণ নীরবতা টিকে আছে আর যতক্ষণ এটা অন্য কারও রায় নয়, আপনার নিজের সিদ্ধান্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeking Refuge From the Sudden",
          "bn": "আকস্মিকতা থেকে আশ্রয়"
        },
        "p": [
          {
            "en": "The Sunnah has a supplication that names this verse's problem directly. Muslim records from Abdullah ibn Umar (RA) that among the supplications of the Messenger of Allah ﷺ was: O Allah, I seek refuge in You from the withdrawal of Your blessing, and the change of Your protection, and from Your sudden wrath, and from every displeasure of Yours. Four things are asked against there, and the third of them is the word Madyan needed: fuja'ah, suddenness, a punishment arriving without an announcement.",
            "bn": "সুন্নাহয় এমন একটি দুআ আছে যা এই আয়াতের সমস্যাটির নাম সোজা বলে দেয়। মুসলিম আবদুল্লাহ ইবনু উমর (রাঃ) থেকে বর্ণনা করেন যে আল্লাহর রসূল ﷺ-এর দুআগুলোর মধ্যে ছিল: হে আল্লাহ, আমি আপনার কাছে আশ্রয় চাই আপনার নিয়ামত সরে যাওয়া থেকে, আপনার দেওয়া নিরাপত্তা বদলে যাওয়া থেকে, আপনার আকস্মিক পাকড়াও থেকে আর আপনার সমস্ত অসন্তুষ্টি থেকে। ওখানে চারটি জিনিস থেকে আশ্রয় চাওয়া হয়, আর তার তৃতীয়টি ঠিক সেই শব্দ যা মাদইয়ানের দরকার ছিল: ফুজাআ, আকস্মিকতা, ঘোষণা ছাড়া নেমে আসা শাস্তি।"
          },
          {
            "en": "A short supplication can also be built from the verse's own vocabulary, offered as that and not as a transmitted wording. O Allah, do not let my safety be the thing that keeps me careless. Whatever You are giving me time over, let me use the time for that and not for defending myself. Do not let a morning find me settled in a wrong I could have left the night before. And whatever is standing between me and You right now, deal with me over it while I can still act.",
            "bn": "আয়াতের নিজের শব্দ দিয়েও ছোট একটা দুআ গড়া যায়, বর্ণিত দুআ হিসেবে নয়, নিজের কথা হিসেবেই। হে আল্লাহ, আমার নিরাপত্তাটাই যেন আমার বেপরোয়া থাকার কারণ না হয়। যে ব্যাপারে আপনি আমাকে সময় দিচ্ছেন, সেই সময়টা যেন সেই কাজেই লাগাই, নিজের সাফাই গাইতে নয়। কোনো ভোর যেন আমাকে এমন অন্যায়ে জমে থাকা অবস্থায় না পায় যা আমি আগের রাতেই ছেড়ে দিতে পারতাম। আর এই মুহূর্তে আমার আর আপনার মাঝে যা দাঁড়িয়ে আছে, যতক্ষণ আমি কিছু করতে পারি ততক্ষণেই সেটা নিয়ে আমার সঙ্গে মীমাংসা করে নিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions From a Repeated Verse",
          "bn": "পুনরাবৃত্ত আয়াত থেকে প্রশ্ন"
        },
        "p": [
          {
            "en": "The same sentence ended two peoples who had done different things, which is worth turning on oneself. What am I currently doing that I would not do if the consequence were scheduled for next Tuesday? Where have I read the absence of trouble as a sign of approval? And is there a correction I have been arguing against for so long that arguing has become the activity, the way the chiefs in 7:90 were still campaigning in the last line they were given?",
            "bn": "একই বাক্য দুটি জাতিকে শেষ করেছে, যারা আলাদা আলাদা কাজ করেছিল; কথাটা নিজের দিকে ঘুরিয়ে নেওয়ার মতো। এই মুহূর্তে আমি কোন কাজটা করছি যা আগামী মঙ্গলবার ফল ভোগ করতে হবে জানলে করতাম না? কোথায় আমি ঝামেলা না হওয়াটাকে সম্মতির চিহ্ন হিসেবে পড়েছি? আর এমন কোনো শুধরে দেওয়ার বিরুদ্ধে কি আমি এত দিন ধরে তর্ক করে যাচ্ছি যে তর্কটাই আসল কাজ হয়ে গেছে, ঠিক যেমন ৭:৯০ এর সর্দাররা নিজেদের শেষ লাইনটাতেও প্রচার চালিয়ে যাচ্ছিল?"
          },
          {
            "en": "7:92 says it was as though they had never resided there, which is a strange thing to feel about a place one lives in. If my street were spoken of that way in a hundred years, what would have been worth recording about my part of it? Shu'ayb (AS) was saved with those who believed with him according to 11:94, so who is standing with me, and on what? And which of the things I am waiting on am I really only waiting to be forced into?",
            "bn": "৭:৯২ বলে, যেন তারা সেখানে কোনোদিন বসবাসই করেনি; নিজের বাসস্থান নিয়ে এ কথা ভাবা অদ্ভুত। একশো বছর পর আমার পাড়ার কথা যদি এভাবে বলা হয়, তবে তার মধ্যে আমার অংশটা নিয়ে লিখে রাখার মতো কী থাকত? ১১:৯৪ অনুযায়ী শু'আয়ব (আঃ) রক্ষা পেয়েছিলেন তাঁর সঙ্গে ঈমান আনা লোকদের নিয়ে; তাহলে আমার সঙ্গে কে দাঁড়িয়ে আছে, আর কোন জিনিসে? আর যে কাজগুলোর জন্য আমি অপেক্ষা করছি, তার কোনটার জন্য আসলে আমি কেবল বাধ্য হওয়ার অপেক্ষা করছি?"
          }
        ]
      }
    ]
  },
  "7:100": {
    "sections": [
      {
        "h": {
          "en": "Where the Question Lands",
          "bn": "প্রশ্নটা কার উপর পড়ে"
        },
        "p": [
          {
            "en": "The stories stop at 7:93 and the reckoning begins. 7:94 says no prophet was sent to a town without its people being seized by poverty and hardship, so that they might humble themselves. 7:95 has the hardship exchanged for good until they grew prosperous and said that their fathers too had known hard times and easy ones, and then were seized suddenly. 7:96 states what belief would have opened for them. 7:97 and 7:98 ask whether they feel safe from a punishment at night or in the morning, and 7:99 asks whether they have felt secure from the plan of Allah at all.",
            "bn": "৭:৯৩ এ কাহিনি থামে, আর হিসাব শুরু হয়। ৭:৯৪ বলে, কোনো জনপদে এমন নবী পাঠানো হয়নি যেখানকার লোকদের অভাব আর দুঃখ-কষ্ট ছুঁয়ে যায়নি, যাতে তারা কাতর হয়। ৭:৯৫ এ সেই দুরবস্থা বদলে সচ্ছলতা আসে, তারা প্রাচুর্যে বেড়ে যায় আর বলে, তাদের বাপ-দাদার উপরও সুখ-দুঃখের দিন আসত; তারপর হঠাৎ তাদের পাকড়াও করা হয়। ৭:৯৬ বলে দেয়, ঈমান আনলে তাদের জন্য কী খুলে যেত। ৭:৯৭ আর ৭:৯৮ জিজ্ঞেস করে, রাতে ঘুমের মধ্যে বা সকালে খেলার মধ্যে শাস্তি আসা থেকে তারা কি নিজেদের নিরাপদ ভাবছে; আর ৭:৯৯ জিজ্ঞেস করে, আল্লাহর কৌশল থেকে তারা কি একেবারেই নির্ভয় হয়ে গেছে।"
          },
          {
            "en": "Our verse is the next step and it changes the address. It no longer speaks about the ruined towns. It speaks to whoever is living on the ground those towns used to hold. At-Tabari transmits from as-Suddi that these are the mushrikun, and al-Qurtubi says that the verse means the disbelievers of Makkah and those around them. As-Sa'di reads it more widely, as Allah alerting the later nations after the passing of the earlier ones. Then 7:101 turns to the Prophet ﷺ and says that those towns are the ones whose news is being related to him.",
            "bn": "আমাদের আয়াত তার পরের ধাপ, আর সম্বোধন বদলে যায়। এটি আর ধ্বংস হওয়া জনপদগুলোর কথা বলে না। এটি কথা বলে তাদের সঙ্গে, যারা এখন সেই জমিতে বাস করছে যা ওই জনপদগুলোর ছিল। তাবারী সুদ্দী থেকে আনেন যে এরা মুশরিকরা, আর কুরতুবী বলেন আয়াতটি বোঝাচ্ছে মাক্কার কাফিরদের আর তাদের আশপাশের লোকদের। সা'দী আরও চওড়াভাবে পড়েন, আগের জাতিগুলো চলে যাওয়ার পর আল্লাহ পরের জাতিগুলোকে সাবধান করছেন। তারপর ৭:১০১ নবী ﷺ-এর দিকে ফিরে বলে, ওই জনপদগুলোরই খবর তাঁকে শোনানো হচ্ছে।"
          },
          {
            "en": "Two words in the opening decide the tone. Yarithuna is imperfect, inheriting, an act still in progress rather than a completed handover; the reader is inside it while reading. And the former holders are not called the destroyed or the wrongdoers here. They are ahliha, its people, the earth's own folk. The land is spoken of as having had people before, and as having people now, which quietly makes the present occupants one entry in a list rather than the point the list was heading for.",
            "bn": "শুরুর দুটি শব্দ সুরটা ঠিক করে দেয়। ইয়ারিসূনা চলমান কালে, উত্তরাধিকার পাচ্ছে, কাজটা এখনো চলছে, হাতবদল শেষ হয়ে যাওয়া কিছু নয়; পড়তে পড়তে পাঠক তার ভেতরেই আছেন। আর আগের মালিকদের এখানে ধ্বংস হওয়া বা যালিম বলা হয়নি। বলা হয়েছে আহলিহা, তার অধিবাসী, যমীনের নিজের লোক। জমিটার কথা বলা হচ্ছে এমনভাবে যে আগেও তার লোক ছিল, এখনো তার লোক আছে; আর তাতে চুপচাপ আজকের বাসিন্দারা একটা তালিকার একটি সারি হয়ে যায়, তালিকা যেখানে গিয়ে থামবে সেই লক্ষ্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Has It Not Made Plain",
          "bn": "স্পষ্ট হয়ে যায়নি কি"
        },
        "p": [
          {
            "en": "Awalam yahdi. The hamza of questioning sits over the wa, and the verb hada stands here without an object, so the sentence is not asking whether somebody guided them. At-Tabari glosses the phrase awalam yabin, has it not become clear, and he stacks up the transmissions: Mujahid says yubayyan, Ibn Abbas says has it not been made plain to them, as-Suddi the same. Ibn Zayd adds that the guidance in question is the making plain itself, since without it they would not have come to know.",
            "bn": "আওয়ালাম ইয়াহদি। প্রশ্নের হামযা বসেছে ওয়া-র উপরে, আর হাদা ক্রিয়াটি এখানে কোনো কর্মপদ ছাড়া দাঁড়িয়ে; কাজেই বাক্যটি জিজ্ঞেস করছে না, কেউ তাদের পথ দেখিয়েছে কি না। তাবারী কথাটির ব্যাখ্যা দেন আওয়ালাম ইয়াবিন, অর্থাৎ স্পষ্ট হয়ে যায়নি কি; আর তিনি বর্ণনাগুলো সাজিয়ে দেন: মুজাহিদ বলেন ইউবাইয়ান, ইবনু আব্বাস বলেন তাদের কাছে স্পষ্ট করে দেওয়া হয়নি কি, সুদ্দীও একই কথা বলেন। ইবনু যায়দ যোগ করেন, এখানে হিদায়াত মানে স্পষ্ট করে দেওয়াটাই, কারণ তা ছাড়া তারা জানতেই পারত না।"
          },
          {
            "en": "Al-Qurtubi gives the same gloss in a single phrase, yahdi means yubayyin, and then names the audience. So the question is not about information reaching them. The evidence is standing on the ground they walk over. What the verse asks is whether it has registered, and the grammar leaves the failure unassigned: no agent is blamed for not teaching them. The lesson was available and the conclusion was not drawn, and that gap is the whole subject of the sentence.",
            "bn": "কুরতুবী এক কথায় একই ব্যাখ্যা দেন, ইয়াহদি মানে ইউবাইয়িন, তারপর বলে দেন শ্রোতারা কারা। কাজেই প্রশ্নটা তথ্য তাদের কাছে পৌঁছানো নিয়ে নয়। প্রমাণ দাঁড়িয়ে আছে সেই জমিতেই, যার উপর দিয়ে তারা হেঁটে যায়। আয়াত জিজ্ঞেস করছে, সেটা মনে গেঁথেছে কি না; আর ব্যাকরণ দোষটা কারও ঘাড়ে চাপায় না, তাদের শেখায়নি বলে কাউকে দায়ী করা হয় না। শিক্ষাটা হাতের কাছেই ছিল, আর সিদ্ধান্তটা টানা হয়নি; ওই ফাঁকটাই গোটা বাক্যের বিষয়।"
          },
          {
            "en": "An law nasha'u asabnahum bi dhunubihim. Asaba is to hit a thing aimed at, so the clause is not a general threat of ruin but a strike answering a named cause, their sins. At-Tabari reads it as: if We willed We would do with them as We did with those before them, seizing them for their sins and hastening Our punishment as We hastened it for the people from whom they inherited the land. The condition is stated and left unfulfilled, which is the only reason the addressee is alive to read it.",
            "bn": "আন লাও নাশাউ আসাবনাহুম বিযুনূবিহিম। আসাবা মানে লক্ষ্য করা জিনিসে গিয়ে লাগা; কাজেই কথাটা ধ্বংসের কোনো ঢালাও হুমকি নয়, বরং একটি নাম-ধরা কারণের জবাবে আঘাত, আর কারণটা তাদের গুনাহ। তাবারী পড়েন এভাবে: আমি ইচ্ছা করলে তাদের সঙ্গে তাই করতাম যা তাদের আগের লোকদের সঙ্গে করেছি, তাদের গুনাহের জন্য পাকড়াও করতাম আর শাস্তি তাড়াতাড়ি এনে দিতাম, যেমন যাদের কাছ থেকে তারা জমি পেয়েছে তাদের বেলায় এনেছিলাম। শর্তটা বলা হয়, আর পূরণ করা হয় না; একমাত্র সেই কারণেই যাকে বলা হচ্ছে সে এটা পড়ার জন্য বেঁচে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "And We Seal Their Hearts",
          "bn": "আর তাদের অন্তরে সীল"
        },
        "p": [
          {
            "en": "Wa natba'u 'ala qulubihim. Tab' is the pressing of a seal onto a thing so that it is closed and marked at once, and at-Tabari glosses the verb with nakhtim, We set a seal. Al-Qurtubi raises a grammatical question about it. Either wa natba'u begins a new sentence, and We do seal their hearts, or it is joined to asabnahum, in which case the perfect tense stands in the place of the future and the sealing sits inside the unfulfilled condition. Translations divide along exactly that line.",
            "bn": "ওয়া নাতবাউ আলা কুলূবিহিম। তাব হলো কোনো জিনিসের উপর সীল চেপে দেওয়া, যাতে একই সঙ্গে তা বন্ধ হয় আর তাতে ছাপ পড়ে; তাবারী ক্রিয়াটির ব্যাখ্যা দেন নাখতিম, আমি সীল লাগিয়ে দিই। কুরতুবী এ নিয়ে একটি ব্যাকরণের প্রশ্ন তোলেন। হয় ওয়া নাতবাউ নতুন বাক্য শুরু করছে, অর্থাৎ আর আমি তাদের অন্তরে সীল লাগিয়ে দিই; নয়তো তা আসাবনাহুমের সঙ্গে জোড়া, আর সে ক্ষেত্রে অতীত কাল ভবিষ্যতের জায়গায় বসেছে আর সীল লাগানোটা অপূর্ণ শর্তের ভেতরেই পড়ছে। অনুবাদগুলো ঠিক এই রেখা ধরেই ভাগ হয়ে যায়।"
          },
          {
            "en": "As-Sa'di supplies an order of events. When Allah alerts them and they take no notice, reminds them and they do not remember, guides them by signs and lessons and they are not guided, then He punishes them and seals their hearts, so that a stain and a grime rise over them until the heart is stamped shut, and no truth enters it and no good reaches it, and they hear only what establishes the case against them. On that reading the seal is the last item in a sequence of refusals, not the first move made against them.",
            "bn": "সা'দী ঘটনার ক্রমটা সাজিয়ে দেন। আল্লাহ যখন তাদের সাবধান করেন আর তারা কান দেয় না, মনে করিয়ে দেন আর তারা মনে রাখে না, নিদর্শন আর শিক্ষা দিয়ে পথ দেখান আর তারা পথ পায় না, তখন তিনি তাদের শাস্তি দেন আর তাদের অন্তরে সীল লাগিয়ে দেন; তাতে জং আর ময়লা জমে উঠতে থাকে, শেষে অন্তর সীল হয়ে বন্ধ হয়ে যায়, তাতে সত্য ঢোকে না, কোনো কল্যাণ পৌঁছায় না, আর তারা কেবল ততটুকু শোনে যতটুকুতে তাদের বিরুদ্ধে দলিল দাঁড়িয়ে যায়। এই পাঠে সীল হলো একের পর এক অস্বীকারের শেষ ধাপ, তাদের বিরুদ্ধে প্রথম পদক্ষেপ নয়।"
          },
          {
            "en": "At-Tabari defines the loss rather than the sequence. He glosses fahum la yasma'un as their not hearing an admonition or a reminder with the hearing of one who benefits from it. That is the precise claim: the ears keep working. A sealed heart still registers the words, attends the gathering, follows the argument, and takes nothing away. So the two commentators are answering different questions about the same clause, as-Sa'di how a heart arrives there and at-Tabari what exactly stops working when it does.",
            "bn": "তাবারী ক্রম নয়, ক্ষতিটার সংজ্ঞা দেন। ফাহুম লা ইয়াসমাঊনের ব্যাখ্যায় তিনি লেখেন, উপদেশ বা নাসীহাত তারা এমনভাবে শোনে না যেভাবে শোনে সে, যে তা থেকে লাভ পায়। দাবিটা ঠিক এই: কান কাজ করেই যায়। সীল লাগা অন্তরও শব্দগুলো ধরে, মজলিসে বসে, যুক্তির পিছু নেয়, আর সঙ্গে কিছুই নেয় না। অর্থাৎ দুই মুফাসসির একই বাক্যাংশ নিয়ে দুটি আলাদা প্রশ্নের জবাব দিচ্ছেন; সা'দী বলছেন অন্তর ওখানে গিয়ে পৌঁছায় কীভাবে, আর তাবারী বলছেন পৌঁছানোর পর ঠিক কোন জিনিসটা আর চলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Respite Is Not Acquittal",
          "bn": "সময় দেওয়া মানে রেহাই নয়"
        },
        "p": [
          {
            "en": "Al-Bukhari records from Abu Musa (RA) that the Messenger of Allah ﷺ said: Allah gives respite to the oppressor, but when He takes him over, He never releases him. Then he recited: such is the seizure of your Lord when He seizes the towns in the midst of their wrong; painful indeed and severe is His seizure. The verse he recited is 11:102, and al-Bukhari places the narration in his commentary on that surah.",
            "bn": "বুখারী আবূ মূসা (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রসূল ﷺ বলেছেন: আল্লাহ যালিমকে সময় দিয়ে যান, কিন্তু যখন তিনি তাকে পাকড়াও করেন, তখন আর ছাড়েন না। তারপর তিনি তিলাওয়াত করলেন: তোমার প্রতিপালকের পাকড়াও এ রকমই হয়ে থাকে যখন তিনি যুলমে লিপ্ত জনপদকে পাকড়াও করেন; অবশ্যই তাঁর পাকড়াও ভয়াবহ, বড়ই কঠিন। যে আয়াত তিনি পড়লেন তা ১১:১০২, আর বুখারী হাদীসটি রাখেন ওই সূরার তাফসীরের অধ্যায়ে।"
          },
          {
            "en": "That narration is the exact answer to the reading a reader is tempted to give our verse. If We willed, We could strike them for their sins sounds, on a quiet day, like a threat that was not carried out. The narration says what the quiet is: imla, the letting out of a rope, time granted and not a case dropped. Nothing in it says the respite is short, and nothing says it is an indulgence. It says only that the grip, when it closes, does not open.",
            "bn": "পাঠকের মন যে পাঠটা দিতে চায়, এই হাদীস তার সোজা জবাব। আমি ইচ্ছা করলে তাদের গুনাহের জন্য পাকড়াও করতে পারতাম কথাটা শান্ত কোনো দিনে শোনায় এমন এক হুমকির মতো, যা শেষে কার্যকর হয়নি। হাদীস বলে দেয় এই শান্ত সময়টা আসলে কী: ইমলা, অর্থাৎ দড়ি ছেড়ে দেওয়া, সময় দেওয়া হচ্ছে, মামলা তুলে নেওয়া হচ্ছে না। এতে বলা নেই যে সময়টা অল্প, আর বলা নেই যে এটা প্রশ্রয়। কেবল এটাই বলা আছে, মুঠি একবার বন্ধ হলে আর খোলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Question Elsewhere",
          "bn": "একই প্রশ্ন অন্যত্র"
        },
        "p": [
          {
            "en": "Ibn Kathir gathers the sisters himself at this verse. 20:128 puts the same question about how many generations were destroyed before them, while they walk among their dwellings, and calls that a sign for those of intelligence. 32:26 asks the same and ends on our verse's own last word, then do they not hear. The two verses put the evidence under the reader's feet and the failure in his hearing, which is exactly the pairing 7:100 makes.",
            "bn": "ইবনু কাসীর এই আয়াতেই সহোদর আয়াতগুলো জড়ো করেন। ২০:১২৮ একই প্রশ্ন তোলে, তাদের আগে কত মানববংশ ধ্বংস করা হয়েছে, অথচ তারা সেই বাসস্থানের ভেতর দিয়েই চলাচল করে; আর সেটিকে বলে বুদ্ধিমানদের জন্য নিদর্শন। ৩২:২৬ একই প্রশ্ন করে আর শেষ করে আমাদের আয়াতের শেষ কথাটিতেই, তবুও কি তারা শুনবে না। দুই আয়াত প্রমাণটা রাখে পাঠকের পায়ের নিচে আর গলদটা রাখে তার শোনার ভেতরে; ৭:১০০ ঠিক এই দুটোকেই জোড়া বাঁধে।"
          },
          {
            "en": "Three more fill it out. 6:6 says the destroyed generations had been established in the land as the listeners have not been, with rain sent down and rivers running beneath them, and then were destroyed for their sins and replaced. 14:45 tells the wrongdoers that they lived in the dwellings of those who had wronged themselves and that it had become clear to them how Allah dealt with them. And 19:98 asks whether you perceive of them anyone or hear from them a sound.",
            "bn": "আরও তিনটি ছবিটা পূর্ণ করে। ৬:৬ বলে, ধ্বংস হওয়া জনগোষ্ঠীগুলোকে যমীনে এমনভাবে প্রতিষ্ঠিত করা হয়েছিল যেভাবে শ্রোতাদের করা হয়নি, তাদের জন্য প্রচুর বৃষ্টি নামত আর নিচে দিয়ে নদী বইত, তারপর গুনাহের কারণে তাদের ধ্বংস করে তাদের জায়গায় অন্যদের আনা হলো। ১৪:৪৫ যালিমদের বলে, তারা তাদেরই বাসভূমিতে বাস করছিল যারা নিজেদের প্রতি যুলম করেছিল, আর আল্লাহ তাদের সঙ্গে কী করেছিলেন তা তাদের স্পষ্ট করে দেখানো হয়েছিল। আর ১৯:৯৮ জিজ্ঞেস করে, তাদের একজনকেও কি তুমি দেখতে পাও, বা তাদের ক্ষীণতম আওয়াজও কি শুনতে পাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Living on Somebody Else's Ground",
          "bn": "অন্যের জমিতে বাস"
        },
        "p": [
          {
            "en": "The first use of the verse is a habit of reading. Everything a person holds was held by somebody else, and most of those handovers have a record attached that nobody looks up. The job, the house, the organisation, the family business, the country. The verse does not ask the heir to feel guilty about the inheritance. It asks him to find out how the last holders lost it, on the assumption that this is information rather than history.",
            "bn": "আয়াতের প্রথম কাজটা পড়ার একটা অভ্যাস। মানুষ যা যা ধরে আছে, তার সবই আগে অন্য কারও হাতে ছিল, আর ওই হাতবদলগুলোর বেশির ভাগেরই একটা নথি থাকে যা কেউ খুলে দেখে না। চাকরি, বাড়ি, প্রতিষ্ঠান, পারিবারিক ব্যবসা, দেশ। আয়াত উত্তরাধিকারীকে বলছে না যে উত্তরাধিকার নিয়ে সে অপরাধবোধে ভুগুক। আয়াত বলছে, আগের মালিকরা এটা কীভাবে হারাল সেটা খুঁজে বের করতে, এই ধরে নিয়ে যে এটা ইতিহাস নয়, কাজের তথ্য।"
          },
          {
            "en": "The second use is the seal. On as-Sa'di's reading it is built by a sequence: alerted and not noticing, reminded and not remembering, guided and not guided. Nobody experiences that as a closing door. It feels like being busy, or like having heard this before. The symptom worth watching is therefore not doubt but familiarity, the point at which a verse you know produces no motion at all, and at-Tabari's gloss names the loss exactly: hearing that no longer benefits the hearer.",
            "bn": "দ্বিতীয় কাজটা সীল নিয়ে। সা'দীর পাঠে সীল গড়ে ওঠে একটা ক্রম ধরে: সাবধান করা হলো, কান দেওয়া হলো না; মনে করিয়ে দেওয়া হলো, মনে রাখা হলো না; পথ দেখানো হলো, পথ পাওয়া হলো না। দরজা বন্ধ হচ্ছে বলে এটা কারও গায়ে লাগে না। লাগে ব্যস্ত থাকার মতো, বা এ কথা তো আগেই শুনেছি বলার মতো। কাজেই যা খেয়াল রাখার, তা সন্দেহ নয়, পরিচিতি; ঠিক সেই মুহূর্তটা যখন চেনা আয়াত পড়েও ভেতরে কিছুই নড়ে না। আর তাবারীর ব্যাখ্যা ক্ষতিটার নাম সোজা বলে দেয়: এমন শোনা, যাতে শ্রোতার কোনো লাভ হয় না।"
          },
          {
            "en": "So the work is testable. Take one thing you heard in a khutbah or read in the Quran in the last month that you agreed with and did nothing about, and do the smallest version of it this week; that is the difference between hearing and the hearing at-Tabari means. And ask an older member of your family what the person before you actually struggled with in the thing you now run. Inheritance comes with a case file, and reading it is the whole of what this verse asks.",
            "bn": "কাজেই কাজটা যাচাই করা যায়। গত এক মাসে খুতবায় শোনা বা কুরআনে পড়া এমন একটা কথা নিন যার সঙ্গে আপনি একমত হয়েছেন কিন্তু কিছুই করেননি, আর এ সপ্তাহে তার সবচেয়ে ছোট রূপটা করে ফেলুন; শোনা আর তাবারীর বলা সেই শোনার তফাত ঠিক এটাই। আর পরিবারের বয়োজ্যেষ্ঠ কারও কাছে জিজ্ঞেস করুন, আপনি এখন যা চালাচ্ছেন তাতে আপনার আগের মানুষটা আসলে কোন জিনিসে হিমশিম খেয়েছিল। উত্তরাধিকারের সঙ্গে একটা নথি আসে, আর সেটি পড়াই এই আয়াতের গোটা দাবি।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking for a Heart Held Steady",
          "bn": "অন্তর স্থির রাখার আর্জি"
        },
        "p": [
          {
            "en": "Since the verse's danger is a sealed heart, the supplication that answers it is about the heart. At-Tirmidhi records from Anas (RA) that the Messenger of Allah ﷺ would often say: O Changer of the hearts, strengthen my heart upon Your religion. Anas (RA) said: Prophet of Allah, we believe in you and in what you have come with, but do you fear for us? He said: yes, the hearts are between two of Allah's fingers, He changes them as He wills. At-Tirmidhi graded the report hasan.",
            "bn": "আয়াতের ভয়টা যেহেতু অন্তরে সীল পড়া, তাই তার জবাবের দুআও অন্তর নিয়ে। তিরমিযী আনাস (রাঃ) থেকে বর্ণনা করেন, আল্লাহর রসূল ﷺ প্রায়ই বলতেন: হে অন্তরসমূহের পরিবর্তনকারী, আমার অন্তরকে আপনার দীনের উপর অবিচল রাখুন। আনাস (রাঃ) বললেন, হে আল্লাহর নবী, আমরা আপনার প্রতি আর আপনি যা নিয়ে এসেছেন তার প্রতি ঈমান এনেছি, তবু আপনি আমাদের জন্য আশঙ্কা করেন? তিনি বললেন, হ্যাঁ, অন্তরগুলো আল্লাহর দুই আঙুলের মাঝে, তিনি যেভাবে চান সেভাবে সেগুলো বদলে দেন। তিরমিযী বর্ণনাটিকে হাসান বলেছেন।"
          },
          {
            "en": "That exchange is the right frame for this verse, because the people asking the question were believers and the answer was still yes. A short supplication can be built from the verse's own vocabulary too, offered as that and not as a transmitted wording. O Allah, do not let me walk over other people's ruins and take nothing from them. Keep my hearing the kind that benefits me. And whatever You are giving me time over, do not let me mistake the time for a verdict in my favour.",
            "bn": "এই কথাবার্তাটাই এই আয়াতের সঠিক কাঠামো, কারণ প্রশ্নটা করেছিলেন মুমিনরাই, আর জবাবটা তবু ছিল হ্যাঁ। আয়াতের নিজের শব্দ দিয়েও ছোট একটা দুআ গড়া যায়, বর্ণিত দুআ হিসেবে নয়, নিজের কথা হিসেবেই। হে আল্লাহ, অন্যের ভাঙা বসতির উপর দিয়ে হেঁটে গিয়ে সেখান থেকে কিছুই না নিয়ে ফেরা যেন আমার না হয়। আমার শোনাটা এমন রাখুন যাতে আমার লাভ হয়। আর যে ব্যাপারে আপনি আমাকে সময় দিচ্ছেন, সেই সময়টাকে আমি যেন আমার পক্ষে রায় বলে ভুল না করি।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions for an Heir",
          "bn": "উত্তরাধিকারীর জন্য প্রশ্ন"
        },
        "p": [
          {
            "en": "The verse is a question, so the honest response is more questions. What did I inherit that I have never once asked about, and who lost it before me? What have I heard often enough that it no longer moves anything in me, and when did that happen? And is there a correction I have been given more than twice, in the same words, by different people?",
            "bn": "আয়াতটি নিজেই একটি প্রশ্ন, কাজেই সৎ জবাব আরও কিছু প্রশ্ন। আমি কী পেয়েছি উত্তরাধিকারে, যা নিয়ে একবারও জিজ্ঞেস করিনি, আর আমার আগে কে তা হারিয়েছিল? কোন কথাটা আমি এত বেশি শুনে ফেলেছি যে তা আর আমার ভেতরে কিছুই নাড়ায় না, আর সেটা কখন থেকে হলো? আর এমন কোনো শুধরে দেওয়ার কথা কি আছে, যা একই ভাষায় দুইবারের বেশি আলাদা আলাদা মানুষের মুখে আমি শুনেছি?"
          },
          {
            "en": "The narration says that respite is time granted and not a case dropped. So what am I treating as settled simply because nothing has happened yet? 7:95 describes people who read their own good fortune as a family pattern rather than a gift, and were seized while not perceiving. Where does my own explanation of why things are going well leave Allah out of the account? And what would I want the next occupant of my place to know about how I held it?",
            "bn": "হাদীস বলে, সময় দেওয়া মানে সময় দেওয়াই, মামলা তুলে নেওয়া নয়। তাহলে কোন জিনিসটাকে আমি মিটে গেছে ধরে নিয়েছি কেবল এই কারণে যে এখনো কিছু ঘটেনি? ৭:৯৫ এমন লোকদের কথা বলে যারা নিজেদের সচ্ছলতাকে নিয়ামত নয়, বংশের চেনা ধারা বলে পড়েছিল, আর টের না পেতেই পাকড়াও হয়েছিল। আমার ভালো চলার যে ব্যাখ্যা আমি নিজেকে দিই, সেখানে আল্লাহ কোথায় হিসাবের বাইরে পড়ে যান? আর আমার জায়গায় যে পরে আসবে, আমি কেমন করে জায়গাটা ধরে রেখেছিলাম তার কোন কথাটা আমি চাইব সে জানুক?"
          }
        ]
      }
    ]
  },
  "7:105": {
    "sections": [
      {
        "h": {
          "en": "Where Musa Begins",
          "bn": "মূসা কোথা থেকে শুরু করেন"
        },
        "p": [
          {
            "en": "Surah al-A'raf is Makkan, and much of its second half is a procession of messengers. Nuh, Hud, Salih, Lut and Shu'ayb each come to a people who had every advantage and refused the one thing asked of them. The surah then pauses over those towns and over the hearts Allah seals so that they do not hear (7:100), and only after that pause does it say that Musa was sent after them, with signs, to Pharaoh and his chiefs (7:103).",
            "bn": "সূরা আরাফ মাক্কী, আর এর দ্বিতীয়ার্ধের অনেকটাই একের পর এক রাসূলের কথা। নূহ, হূদ, সালিহ, লূত ও শুআইব (আঃ) প্রত্যেকে এমন জাতির কাছে গেছেন যাদের হাতে সব সুযোগ ছিল, অথচ একটিমাত্র কথা তাদের বলা হয়েছিল আর সেটাই তারা মানেনি। তারপর সূরা একটু থামে সেই জনপদগুলোর উপর, আর সেই অন্তরগুলোর উপর যেগুলোতে আল্লাহ সীল লাগিয়ে দেন বলে কিছু শোনে না (৭:১০০)। এই থামার পরেই বলা হয়, তাদের পরে মূসাকে নিদর্শনসহ ফিরআউন ও তার প্রধানদের কাছে পাঠানো হয়েছিল (৭:১০৩)।"
          },
          {
            "en": "In 7:104 he names his sender before he says anything about himself: O Pharaoh, I am a messenger from the Lord of the worlds. 7:105 finishes that speech, and the instant it ends Pharaoh answers by demanding the sign (7:106). So this verse holds everything Musa (AS) chose to say before a single miracle was produced. No sound report fixes an occasion of revelation for it. Its meaning is carried by its position, wedged between a title claimed and a proof demanded.",
            "bn": "৭:১০৪ আয়াতে তিনি নিজের কথা বলার আগে জানান কে তাঁকে পাঠিয়েছেন: হে ফিরআউন, আমি বিশ্বজগতের প্রতিপালকের পক্ষ থেকে পাঠানো রাসূল। ৭:১০৫ সেই কথাটাই শেষ করে, আর শেষ হওয়ামাত্র ফিরআউন নিদর্শন দেখতে চায় (৭:১০৬)। অর্থাৎ একটিও মুজিজা দেখানোর আগে মূসা (আঃ) যা যা বলার বেছে নিয়েছিলেন, সবটাই এই আয়াতের ভেতরে। এর জন্য কোনো নির্ভরযোগ্য শানে নুযূল পাওয়া যায় না। অর্থটা আসে জায়গা থেকেই, দাবি করা পরিচয় আর চাওয়া প্রমাণের মাঝখানে বসানো একটি বাক্য।"
          },
          {
            "en": "Set it beside the other messengers in this surah. Hud opens with the sentence the surah keeps repeating, worship Allah, you have no deity other than Him (7:65), and Salih and Shu'ayb open the same way. Musa's first words to Pharaoh are shaped differently. Across the two verses he gives his sender, his honesty, his evidence, and one concrete demand about a nation held in forced labour. The message underneath has not changed. The door he is knocking on has.",
            "bn": "এই সূরার অন্য রাসূলদের পাশে রেখে দেখুন। হূদ (আঃ) শুরু করেন সেই কথাটা দিয়ে যা সূরা বারবার ফিরিয়ে আনে, আল্লাহর ইবাদত কর, তিনি ছাড়া তোমাদের কোনো ইলাহ নেই (৭:৬৫)। সালিহ আর শুআইব (আঃ) একই কথায় শুরু করেন। ফিরআউনের কাছে মূসার প্রথম কথাগুলোর ছাঁদ আলাদা। দুই আয়াত মিলিয়ে তিনি বলেন কে পাঠিয়েছেন, বলেন নিজের সত্যনিষ্ঠার কথা, পেশ করেন প্রমাণ, আর তোলেন একটি সুনির্দিষ্ট দাবি, বেগার খাটতে বাধ্য একটি জাতিকে নিয়ে। ভেতরের বার্তা বদলায়নি। বদলেছে তিনি কোন দরজায় ধাক্কা দিচ্ছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "One Root Behind Two Words",
          "bn": "দুই শব্দের পেছনে এক ধাতু"
        },
        "p": [
          {
            "en": "The verse opens on haqiq, from the root h-q-q, and its first clause closes on al-haqq, from that same root. The word for what is owed and the word for the truth are cut from one stem, so the Arabic carries in its sound what the sentence carries in its sense: to be bound is to be bound to what is real. Between the two stands a negation with a single exception, la aqula illa al-haqq, the structure Arabic uses when it means to shut every door but one.",
            "bn": "আয়াত শুরু হয় হাকীক শব্দে, ধাতু হ-ক-ক। আর এর প্রথম বাক্যাংশ শেষ হয় আল-হাক্ক শব্দে, ধাতু একই। যা করতে বাধ্য, আর যা সত্য, দুটো শব্দ একই মূল থেকে কাটা। তাই আরবি নিজের ধ্বনিতেই বলে দেয় যা বাক্যটি অর্থে বলছে: বাধ্য থাকা মানে সত্যের কাছে বাধ্য থাকা। দুইয়ের মাঝখানে বসে আছে একটি নাকারাত্মক বাক্য আর তার একটিমাত্র ব্যতিক্রম, লা আকূলা ইল্লাল হাক্ক। আরবি এই গড়নটা ব্যবহার করে যখন একটি দরজা ছাড়া বাকি সব বন্ধ করতে চায়।"
          },
          {
            "en": "at-Tabari records two well-known readings of that opening. Reciters of Makkah, Madinah, Basra and Kufa read haqiqun ala an la aqula, with ala doing the work of the preposition bi, so the sense is that he is fitted for saying nothing about Allah but the truth. A group of Madinans read haqiqun alayya alla aqula, it is owed by me. at-Tabari's own verdict is that both are famous, close in meaning, and whoever recites either has recited correctly.",
            "bn": "ইমাম তাবারী এই শুরুর দুটি প্রসিদ্ধ কিরাআত তুলে ধরেন। মক্কা, মদীনা, বসরা ও কূফার কারীগণ পড়েছেন হাকীকুন আলা আল্লা আকূল, এখানে আলা কাজ করছে বা বর্ণের অর্থে, অর্থাৎ আল্লাহর ব্যাপারে সত্য ছাড়া কিছু না বলার জন্যই আমি উপযুক্ত। মদীনার একটি দল পড়েছেন হাকীকুন আলাইয়া আল্লা আকূল, অর্থাৎ এটা আমার উপর পাওনা। তাবারীর নিজের রায়, দুটোই প্রসিদ্ধ, অর্থে কাছাকাছি, আর যে কেউ যেটাই পড়ুক, তার পড়া সহিহ।"
          },
          {
            "en": "Two further words do quiet work. The proof is a bayyinah, from b-y-n, indefinite and singular: not a stack of arguments but one thing that makes itself plain. And the demand is arsil, form four of r-s-l, the root of rasul in the verse before. I am one who was sent, therefore you send. Musa asks Pharaoh to perform on the Children of Israel the very verb Allah performed on him, and the wording will not let the king hear the two as unrelated.",
            "bn": "আরও দুটি শব্দ নিঃশব্দে কাজ করে। প্রমাণটিকে বলা হয়েছে বাইয়্যিনাহ, ধাতু ব-য়-ন, এবং তা একবচন ও অনির্দিষ্ট। যুক্তির স্তূপ নয়, একটি জিনিস যা নিজেই নিজেকে স্পষ্ট করে দেয়। আর দাবিটির ক্রিয়া আরসিল, র-স-ল ধাতুর চতুর্থ বাবের আদেশ, আগের আয়াতের রাসূল শব্দের ঠিক সেই ধাতু। আমাকে পাঠানো হয়েছে, কাজেই তুমি পাঠিয়ে দাও। আল্লাহ যে কাজটা মূসার উপর করেছেন, সেই একই ক্রিয়া বানী ইসরাঈলের উপর করতে বলা হচ্ছে ফিরআউনকে। শব্দ দুটোকে আলাদা করে শোনার সুযোগ সে পাচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Why He Could Not Lie",
          "bn": "কেন তিনি মিথ্যা বলতে পারতেন না"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the clause as a duty accepted with open eyes. It is incumbent upon me, he has Musa saying, to convey nothing from Him but the truth, and the reason he supplies is knowledge: because of what I know of His might and His power. On the closing demand he is equally concrete. Release them from your slavery and your subjugation, he glosses, and he reminds the reader whose children they are, the offspring of Isra'il, who is Ya'qub son of Ishaq son of Ibrahim.",
            "bn": "ইবনু কাসীর এই অংশটাকে পড়েন চোখ খোলা রেখে মেনে নেওয়া এক দায়িত্ব হিসেবে। মূসার কথার ব্যাখ্যায় তিনি বলেন, তাঁর পক্ষ থেকে সত্য ছাড়া কিছু পৌঁছে দেওয়া আমার উপর ফরজ। আর কারণটা তিনি রাখেন ইলমের উপর: তাঁর ক্ষমতা আর প্রতাপ সম্পর্কে আমি যা জানি, সেই কারণেই। শেষ দাবিটার ব্যাখ্যাতেও তিনি সমান সরাসরি। তিনি বলেন, তোমার গোলামি আর তোমার দমননীতি থেকে তাদের ছেড়ে দাও। আর পাঠককে মনে করিয়ে দেন এরা কার সন্তান, ইসরাঈলের বংশ, অর্থাৎ ইয়াকুব ইবনু ইসহাক ইবনু ইবরাহীমের সন্তান।"
          },
          {
            "en": "as-Sa'di works from the same place and pushes it further. Since this is His station, and He chose and selected me for His message, it is binding upon me not to lie about Him. Then the sharp line: had I said anything else, He would have hastened the punishment upon me and seized me with the seizing of One Mighty and Able. as-Sa'di also counts what the mission is for, and finds two great aims in it, their belief in Musa and their following of him, and the sending out of the Children of Israel.",
            "bn": "শাইখ সাদী একই জায়গা থেকে শুরু করে আরও এগিয়ে যান। তাঁর মর্যাদা যখন এই, আর তিনি যখন নিজের রিসালাতের জন্য আমাকেই বেছে নিয়েছেন, তখন তাঁর নামে মিথ্যা না বলা আমার উপর অবশ্য কর্তব্য। তারপর কড়া কথাটা: আমি যদি এর বিপরীত কিছু বলতাম, তিনি সঙ্গে সঙ্গে শাস্তি এগিয়ে আনতেন আর পরাক্রমশালী সক্ষমের পাকড়াও দিয়ে আমাকে ধরতেন। সাদী এই রিসালাতের উদ্দেশ্যও গুনে দেখান, আর সেখানে পান দুটি বড় উদ্দেশ্য: তারা মূসার উপর ঈমান আনবে ও তাঁকে অনুসরণ করবে, এবং বানী ইসরাঈলকে ছেড়ে দেওয়া হবে।"
          },
          {
            "en": "al-Qurtubi's interest is the grammar. On the reading with alayya he gives one word, wajib, obligatory; he records a reading transmitted from Abdullah (RA) that drops ala altogether, and one from Ubayy (RA) and al-A'mash that reads bi-alla aqula. On the last clause he is blunt: khallihim, let them go, and he adds that Pharaoh had been using them for the hard labour. So the difference between these readings is one of angle. Ibn Kathir and as-Sa'di ground the obligation in the fear of Allah; al-Qurtubi and at-Tabari locate it in what the words themselves will bear.",
            "bn": "কুরতুবীর আগ্রহ ব্যাকরণে। আলাইয়া পড়ার ক্ষেত্রে তিনি এক শব্দে অর্থ দেন, ওয়াজিব। তিনি লিখে রাখেন আবদুল্লাহ (রাঃ) থেকে বর্ণিত একটি পড়ায় আলা শব্দটিই নেই, আর উবাই (রাঃ) ও আমাশ থেকে বর্ণিত পড়ায় আছে বি-আল্লা আকূল। শেষ বাক্যাংশে তিনি একেবারে সোজা: খাল্লিহুম, ওদের ছেড়ে দাও। সঙ্গে যোগ করেন, ফিরআউন তাদের দিয়ে কঠিন খাটুনি করাত। তাই পড়াগুলোর পার্থক্য আসলে দৃষ্টিকোণের পার্থক্য। ইবনু কাসীর আর সাদী দায়িত্বটার ভিত্তি রাখেন আল্লাহর ভয়ে। কুরতুবী আর তাবারী খোঁজেন শব্দগুলো নিজেরা কতটুকু বহন করতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Before a Tyrant",
          "bn": "জালিম শাসকের সামনে একটি কথা"
        },
        "p": [
          {
            "en": "The four tafsirs read for this verse carry no narration from the Prophet Muhammad ﷺ on it. at-Tabari's entry is a discussion of the readings and a gloss on the proof; Ibn Kathir, as-Sa'di and al-Qurtubi all stay with the wording. That absence is worth reporting rather than filling, because a verse does not become weightier by having a hadith attached to it that the commentators never attached. What the Sunnah supplies instead is a sentence about the situation Musa was standing in.",
            "bn": "এই আয়াতের জন্য যে চারটি তাফসীর দেখা হয়েছে, তার কোনোটিতে নবী ﷺ থেকে বর্ণিত কোনো হাদীস এই আয়াতের সঙ্গে জোড়া নেই। তাবারীর আলোচনা কিরাআত আর প্রমাণের অর্থ নিয়ে। ইবনু কাসীর, সাদী আর কুরতুবী তিনজনই শব্দের মধ্যেই থাকেন। ফাঁকটা ঢেকে দেওয়ার চেয়ে বলে দেওয়াই ভালো। মুফাসসিরগণ যে হাদীস আয়াতের সঙ্গে জোড়েননি, সেটা জুড়ে দিলে আয়াতের ওজন বাড়ে না। বদলে সুন্নাহ যা দেয়, তা হলো মূসা যে পরিস্থিতিতে দাঁড়িয়ে ছিলেন সেই পরিস্থিতি নিয়ে একটি কথা।"
          },
          {
            "en": "Sunan Abu Dawud 4344 records from Abu Sa'id al-Khudri (RA) that the Messenger of Allah ﷺ said: the best fighting in the path of Allah is a word of justice to an oppressive ruler. Abu Dawud gives no grading of his own alongside it. It is quoted here for the scene and not as a comment on the verse, because 7:105 is what that sentence looks like when a man actually does it, and it is worth noticing that the word spoken here is first of all a word about Allah.",
            "bn": "সুনানে আবূ দাঊদের ৪৩৪৪ নম্বর হাদীসে আবূ সাঈদ খুদরী (রাঃ) থেকে এসেছে, রাসূলুল্লাহ ﷺ বলেছেন, আল্লাহর পথে সর্বশ্রেষ্ঠ জিহাদ হলো জালিম শাসকের সামনে ইনসাফের একটি কথা। আবূ দাঊদ এর সঙ্গে নিজের কোনো মান উল্লেখ করেননি। এটা এখানে আনা হলো দৃশ্যটার জন্য, আয়াতের ব্যাখ্যা হিসেবে নয়। কারণ কেউ যখন সত্যিই কথাটা বলে, তখন সেটা দেখতে ঠিক ৭:১০৫ আয়াতের মতোই লাগে। আর খেয়াল করার মতো ব্যাপার হলো, এখানে যে কথাটা বলা হচ্ছে, সেটা সবার আগে আল্লাহকে নিয়েই একটি কথা।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Else This Limit Appears",
          "bn": "এই সীমা আর কোথায় আসে"
        },
        "p": [
          {
            "en": "Three verses sharpen the first half. 7:33 is this same surah's list of what the Lord has forbidden, and the list ends on exactly this, that you say about Allah what you do not know. 6:93 asks who is more unjust than one who invents a lie about Allah, and then follows the question all the way to the hour of death. 2:169 names where the pressure comes from, since it is Satan who orders people to say about Allah what they do not know.",
            "bn": "তিনটি আয়াত প্রথম অর্ধেকটাকে ধারালো করে তোলে। ৭:৩৩ এই একই সূরায় প্রতিপালক যা যা হারাম করেছেন তার তালিকা, আর তালিকাটি ঠিক এই কথাতেই শেষ হয়: আল্লাহ সম্পর্কে না জেনে কথা বলা। ৬:৯৩ প্রশ্ন তোলে, আল্লাহর নামে মিথ্যা বানায় তার চেয়ে বড় জালিম আর কে, আর প্রশ্নটাকে টেনে নিয়ে যায় একেবারে মৃত্যুর মুহূর্ত পর্যন্ত। ২:১৬৯ বলে দেয় চাপটা কোথা থেকে আসে, কারণ আল্লাহ সম্পর্কে না জেনে কথা বলার হুকুম দেয় শয়তান।"
          },
          {
            "en": "Two more sharpen the second half. 26:16-17 has the same commission in the plural, both brothers commanded to tell Pharaoh that they are messengers of the Lord of the worlds and to say, send with us the Children of Israel. 20:47 adds a clause this verse leaves out, and do not torment them, then closes with peace upon whoever follows the guidance. Read alongside 20:44, where both men are told to speak to Pharaoh a gentle word, the demand turns out to have been delivered softly.",
            "bn": "আরও দুটি আয়াত দ্বিতীয় অর্ধেকটাকে ধারালো করে। ২৬:১৬ আয়াতে একই দায়িত্ব এসেছে বহুবচনে, দুই ভাইকেই হুকুম দেওয়া হচ্ছে ফিরআউনকে বলতে যে তাঁরা বিশ্বজগতের প্রতিপালকের রাসূল। আর ২৬:১৭ আয়াতে বলতে বলা হচ্ছে, বানী ইসরাঈলকে আমাদের সঙ্গে পাঠিয়ে দাও। ২০:৪৭ এমন একটি কথা যোগ করে যা এখানে নেই, তাদের উপর উৎপীড়ন করো না, আর শেষ হয় হেদায়েত অনুসরণকারীদের প্রতি শান্তির কথা দিয়ে। ২০:৪৪ আয়াতের সঙ্গে মিলিয়ে পড়ুন, যেখানে দুজনকেই বলা হচ্ছে ফিরআউনের সঙ্গে নম্রভাবে কথা বলতে। তখন বোঝা যায়, দাবিটা নরম গলাতেই পৌঁছে দেওয়া হয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Inside the Limit",
          "bn": "সীমার ভেতরে থাকা"
        },
        "p": [
          {
            "en": "The first thing this verse asks for is not courage but restraint. Most of us will never address a tyrant; all of us talk about Allah. We say He wants this, He is pleased with that, this is what the religion says. The verse puts a gate in front of every one of those sentences, and the gate opens only for what you actually know. A useful claim is not thereby a true one, and the claim that helps your argument most is exactly the one to check first.",
            "bn": "এই আয়াত প্রথমে সাহস চায় না, সংযম চায়। আমাদের অধিকাংশই কোনো জালিম শাসকের সামনে দাঁড়াব না। কিন্তু আমরা সবাই আল্লাহকে নিয়ে কথা বলি। বলি, তিনি এটা চান, তিনি ওটাতে খুশি, দ্বীনে এটাই আছে। আয়াতটি এই প্রত্যেক বাক্যের সামনে একটা গেট বসিয়ে দেয়, আর সেই গেট খোলে কেবল যা আপনি সত্যিই জানেন তার জন্য। কাজে লাগে বলেই কোনো দাবি সত্য হয়ে যায় না। বরং যে দাবিটা আপনার যুক্তিকে সবচেয়ে বেশি সাহায্য করে, সেটাই আগে যাচাই করা দরকার।"
          },
          {
            "en": "The order inside the verse is the second lesson. Honesty comes before evidence, and evidence comes before the ask. Reverse it and you have a man who makes a demand, then reaches for a proof, then trims his account of Allah until the proof fits. Musa gives his audience no reason to suspect that third step, because he settled the first one out loud before he began. In a disagreement this means establishing what you will not say before you say what you want.",
            "bn": "দ্বিতীয় শিক্ষা আয়াতের ভেতরের ক্রমে। সত্যনিষ্ঠা আগে, প্রমাণ তারপর, দাবি সবার শেষে। ক্রমটা উল্টে দিলে যা দাঁড়ায় তা হলো এমন একজন, যে আগে দাবি তোলে, তারপর প্রমাণ হাতড়ায়, তারপর প্রমাণের সঙ্গে মিলিয়ে আল্লাহর ব্যাপারে নিজের কথাটাকে কাটছাঁট করে। মূসা তাঁর শ্রোতাদের এই তৃতীয় ধাপ নিয়ে সন্দেহ করার কোনো সুযোগ দেননি, কারণ শুরু করার আগেই প্রথম ধাপটা তিনি মুখে বলে মিটিয়ে নিয়েছেন। মতভেদের সময় এর মানে, কী চান বলার আগে ঠিক করে ফেলুন কী আপনি বলবেন না।"
          },
          {
            "en": "There is a practical version of this for anyone who teaches or answers questions. Learn the sentence I do not know and use it without embarrassment, because it is the direct application of this verse. Learn to separate what a text says from what you have concluded from it, and hand the second over as yours. And when you quote, quote; when you summarise, say that you are summarising. Every one of those habits is a small refusal to say about Allah more than the truth.",
            "bn": "যাঁরা পড়ান বা প্রশ্নের জবাব দেন, তাঁদের জন্য এর একটা হাতে-কলমে রূপ আছে। আমি জানি না, এই বাক্যটা শিখে নিন আর লজ্জা ছাড়াই ব্যবহার করুন, কারণ এটাই এই আয়াতের সোজা প্রয়োগ। দলীলে যা আছে আর দলীল থেকে আপনি যা বুঝেছেন, দুটোকে আলাদা করতে শিখুন, আর দ্বিতীয়টা নিজের বোঝা বলেই দিন। উদ্ধৃতি দেওয়ার সময় হুবহু দিন, আর সারমর্ম বললে বলুন যে সারমর্ম বলছেন। এই প্রতিটি অভ্যাস আসলে ছোট করে বলা, আল্লাহর ব্যাপারে সত্যের চেয়ে বেশি কিছু বলব না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a for Your Speech",
          "bn": "নিজের কথার জন্য দোয়া"
        },
        "p": [
          {
            "en": "The verse is a declaration to a king rather than a supplication, so nothing in it is transmitted as a du'a. What the Quran does give in this same vocabulary is Musa's own prayer at the start of the same mission, in 20:25-28, where he asks for his chest to be expanded, his task to be eased, and the knot to be untied from his tongue so that his words will be understood. A man about to speak the truth to power asked first for the capacity to speak at all.",
            "bn": "এই আয়াত এক রাজার উদ্দেশে বলা ঘোষণা, দোয়া নয়। তাই এর ভেতরের কিছুই দোয়া হিসেবে বর্ণিত হয়নি। এই একই শব্দভান্ডারে কুরআন যা দেয় তা হলো এই একই দায়িত্বের শুরুতে মূসার নিজের দোয়া, ২০:২৫ থেকে ২০:২৮ আয়াতে। তিনি চান তাঁর বুক প্রশস্ত হোক, তাঁর কাজ সহজ হোক, আর তাঁর জিহ্বার জট খুলে যাক যাতে তাঁর কথা মানুষ বুঝতে পারে। ক্ষমতার সামনে সত্য বলতে যাচ্ছেন যিনি, তিনি সবার আগে চেয়েছেন কথা বলার সামর্থ্যটাই।"
          },
          {
            "en": "A short supplication in the verse's own words may be offered as that and nothing more. O Allah, You are the Lord of the worlds and I am small in front of what I say about You. Hold my tongue to the truth about You, and let me say nothing of You that I have not been given. Make what I bring people a bayyinah and not merely a confidence, and when I ask anyone for anything, let me have earned the right to ask it.",
            "bn": "আয়াতের নিজের শব্দ দিয়ে গড়া ছোট একটি মুনাজাত এখানে দেওয়া যায়, তবে সেটাকে বর্ণিত দোয়া বলা যাবে না। হে আল্লাহ, আপনি বিশ্বজগতের প্রতিপালক, আর আপনাকে নিয়ে যা বলি তার সামনে আমি নগণ্য। আমার জিহ্বাকে আপনার ব্যাপারে সত্যের মধ্যে বেঁধে রাখুন, আর আপনার সম্পর্কে যা আমাকে দেওয়া হয়নি তা যেন আমি না বলি। মানুষের কাছে আমি যা নিয়ে যাই তা আত্মবিশ্বাস নয়, বাইয়্যিনাহ বানিয়ে দিন। আর কারও কাছে যখন কিছু চাই, চাওয়ার অধিকারটা যেন আগে অর্জন করে নিই।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Mouth",
          "bn": "নিজের মুখ নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "When did I last say something about Allah, or about His religion, because it settled an argument rather than because I had checked it? Is there a sentence I repeat about what Allah loves or hates that I inherited whole and never traced? Musa fixed the limit on his own speech before he asked Pharaoh for anything at all. What would I have to stop saying before my own asking became clean enough to be heard?",
            "bn": "শেষ কবে আমি আল্লাহকে নিয়ে বা তাঁর দ্বীনকে নিয়ে এমন কিছু বলেছি, যা যাচাই করেছিলাম বলে নয়, তর্কটা মিটে যাচ্ছিল বলে? আল্লাহ কী পছন্দ করেন বা অপছন্দ করেন নিয়ে এমন কোনো বাক্য কি আমি বলে যাচ্ছি, যেটা পুরোপুরি শোনা কথা আর যার উৎস আমি কখনো খুঁজিনি? ফিরআউনের কাছে কিছুই চাওয়ার আগে মূসা নিজের কথার উপর সীমা টেনে নিয়েছিলেন। আমার চাওয়া শোনার মতো পরিষ্কার হওয়ার আগে কোন কথাগুলো আমার থামানো দরকার?"
          },
          {
            "en": "Who in my life would be safe telling me that I do not know, and have I made that answer safe for myself? When I am the one being disbelieved, do I reach for a better proof or for a looser claim? And if someone held me tonight to only what I actually know about Allah, how much of my ordinary religious talk would survive being held to it?",
            "bn": "আমার জীবনে কে নিরাপদে আমাকে বলতে পারে, তুমি জানো না? আর আমি নিজের জন্য এই জবাবটা নিরাপদ করে রেখেছি কি? আমাকে যখন কেউ বিশ্বাস করে না, তখন আমি ভালো প্রমাণের দিকে হাত বাড়াই, নাকি আরও ঢিলে দাবির দিকে? আর আজ রাতে কেউ যদি আমাকে কেবল ততটুকুতেই বেঁধে দেয় যতটুকু আল্লাহ সম্পর্কে আমি সত্যিই জানি, তাহলে আমার রোজকার দ্বীনি কথাবার্তার কতটুকু টিকে থাকবে?"
          }
        ]
      }
    ]
  },
  "7:111": {
    "sections": [
      {
        "h": {
          "en": "Whose Voice This Is",
          "bn": "কথা বলছে কারা"
        },
        "p": [
          {
            "en": "In 7:109 the chiefs of Pharaoh's people say that this is a learned magician, and 7:110 continues in the same speech: he wants to expel you from your land, so what do you instruct? 7:111 is the answer, and its verb is qalu, they said, in the plural. This is the assembly, not the king. The sentence does not even end inside the verse. 7:112 completes it, who will bring you every learned magician, and then 7:113 has the magicians arriving to negotiate their fee.",
            "bn": "৭:১০৯ আয়াতে ফিরআউনের গোষ্ঠীর প্রধানরা বলে, এ তো বিজ্ঞ যাদুকর। ৭:১১০ আয়াত একই কথার ধারাবাহিকতা: সে চায় তোমাদের দেশ থেকে তোমাদের বের করে দিতে, এখন তোমাদের পরামর্শ কী? ৭:১১১ সেই প্রশ্নের জবাব, আর এর ক্রিয়া কালূ, অর্থাৎ তারা বলল, বহুবচনে। কথা বলছে সভা, রাজা নয়। বাক্যটা এই আয়াতের ভেতরে শেষও হয় না। ৭:১১২ এসে শেষ করে, তারা তোমার কাছে প্রত্যেক বিজ্ঞ যাদুকরকে নিয়ে আসবে। তারপর ৭:১১৩ আয়াতে যাদুকররা এসে নিজেদের পুরস্কারের দরকষাকষি করে।"
          },
          {
            "en": "The other telling distributes the same lines differently, and it is worth being exact about it. In 26:34-35 it is Pharaoh who says to the chiefs around him that this is a learned magician who wants to drive them out of their land, and Pharaoh who asks them what they advise. In 26:36-37 the chiefs answer with the counsel that stands here. So surah 7 puts the accusation in the mouths of the chiefs and surah 26 puts it in Pharaoh's, while the counsel belongs to the chiefs in both.",
            "bn": "অন্য বর্ণনায় এই একই কথাগুলো ভাগ করা হয়েছে অন্যভাবে, আর এখানে নির্ভুল থাকাটা জরুরি। ২৬:৩৪ আয়াতে ফিরআউন নিজেই তার আশপাশের প্রধানদের বলে, এ তো বিজ্ঞ যাদুকর। ২৬:৩৫ আয়াতে সে বলে, সে তার যাদু দিয়ে তোমাদের দেশ থেকে তোমাদের বের করে দিতে চায়, এখন তোমাদের পরামর্শ কী? আর ২৬:৩৬ আয়াতে প্রধানরাই জবাব দেয় সেই পরামর্শ, যা এখানে আছে। অর্থাৎ সূরা আরাফ অভিযোগটা প্রধানদের মুখে রাখে, সূরা শুআরা রাখে ফিরআউনের মুখে। পরামর্শটা দুই সূরাতেই প্রধানদের।"
          },
          {
            "en": "By this point two signs have already been given. The staff has become a serpent in the open (7:107) and the hand has come out white for everyone watching (7:108). Nothing in the counsel touches either of them. The surah is Makkan and no sound report fixes an occasion of revelation for the verse; it belongs to the passage that runs on without a break from 7:103, and what it is doing there is showing how a court answered evidence it could not answer.",
            "bn": "এই জায়গায় পৌঁছে দুটি নিদর্শন ইতিমধ্যেই দেখানো হয়ে গেছে। সবার সামনে লাঠি অজগর হয়ে গেছে (৭:১০৭), আর হাত বের করা হয়েছে যা দর্শকদের চোখে সাদা উজ্জ্বল (৭:১০৮)। পরামর্শের ভেতর এই দুটির একটিও স্পর্শ করা হয়নি। সূরাটি মাক্কী, আর এই আয়াতের জন্য কোনো নির্ভরযোগ্য শানে নুযূল নেই। এটি ৭:১০৩ থেকে অবিরাম চলে আসা অংশেরই একটি টুকরো। আর সেখানে এর কাজ একটাই, দেখিয়ে দেওয়া যে যে প্রমাণের জবাব ছিল না, একটি দরবার তার জবাব কীভাবে দিয়েছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Orders, One Man",
          "bn": "দুই হুকুম, এক লোক"
        },
        "p": [
          {
            "en": "The grammar carries the politics. Qalu is plural, so several men are speaking, but both commands that follow are singular. Arjih, put him off, and arsil, send, are each addressed to one person, and that person is the only one in the room who can order a detention or dispatch officers. A committee has spoken and a king has been handed his instructions. There are two imperatives here, not three; his brother is added as an object of the first, not as a separate order.",
            "bn": "ব্যাকরণই রাজনীতিটা বহন করছে। কালূ বহুবচন, অর্থাৎ কথা বলছে কয়েকজন। কিন্তু এরপরের দুটি হুকুম একবচন। আরজিহ, অর্থাৎ তাকে পিছিয়ে দাও, আর আরসিল, অর্থাৎ পাঠিয়ে দাও, দুটোই একজনকে বলা। আর সেই একজনই ঘরের ভেতর একমাত্র লোক যে আটক করার হুকুম দিতে পারে বা কর্মচারী পাঠাতে পারে। একটি পরিষদ কথা বলেছে, আর একজন রাজার হাতে নির্দেশ ধরিয়ে দেওয়া হয়েছে। এখানে হুকুম দুটি, তিনটি নয়। তার ভাইকে জুড়ে দেওয়া হয়েছে প্রথম হুকুমের সঙ্গেই, আলাদা হুকুম হিসেবে নয়।"
          },
          {
            "en": "Arjih is a form of the verb that also appears in 33:51 as turji, and at-Tabari cites that very verse to establish the meaning: al-irja in the speech of the Arabs is at-takhir, putting a thing back. He also records the dialects, noting that the pronunciation with the hamza belongs to some clans of Qays while dropping it is the tongue of Tamim and Asad, and he judges the unhamzated reading the more eloquent while allowing the other.",
            "bn": "আরজিহ ক্রিয়ার যে রূপ, সেটিই ৩৩:৫১ আয়াতে এসেছে তুরজী হিসেবে, আর ইমাম তাবারী অর্থ প্রতিষ্ঠা করতে ঠিক সেই আয়াতটিই উদ্ধৃত করেন। আরবের কথায় ইরজা মানে তাখীর, অর্থাৎ কোনো বিষয়কে পিছিয়ে দেওয়া। তিনি উচ্চারণের ভিন্নতাও লিখে রাখেন। হামজাসহ উচ্চারণটি কায়স গোত্রের কয়েকটি শাখার, আর হামজা ছাড়া উচ্চারণ তামীম ও আসাদের ভাষা। তাবারীর রায়, হামজা ছাড়া পড়াটিই আরবি ভাষায় বেশি বিশুদ্ধ, যদিও অন্যটিও জায়েজ।"
          },
          {
            "en": "The last word is the one to hold on to. Hashirin is an active participle in the plural from the root h-sh-r, the root of al-hashr, the Gathering, and al-Qurtubi notes that it stands in the accusative as a circumstantial description. Al-madain is a plural too: not the capital but every town in the kingdom. Then comes the turn nobody planned. In 20:59 Musa answers Pharaoh's proposed appointment by naming the day of the festival, when the people are gathered at mid-morning, using that same root. They wanted a crowd. He fixed the hour for it.",
            "bn": "শেষ শব্দটাই ধরে রাখার মতো। হাশিরীন বহুবচনে কর্তৃবাচক বিশেষ্য, ধাতু হ-শ-র, যেটি আল-হাশর অর্থাৎ হাশরের ধাতু। কুরতুবী উল্লেখ করেন, শব্দটি এখানে অবস্থাজ্ঞাপক হিসেবে কর্মকারকে বসেছে। আল-মাদাইন শব্দটিও বহুবচন, অর্থাৎ শুধু রাজধানী নয়, রাজ্যের প্রতিটি শহর। এরপর আসে সেই মোড়, যার পরিকল্পনা কেউ করেনি। ২০:৫৯ আয়াতে ফিরআউনের প্রস্তাবিত সময়ের জবাবে মূসা নাম নেন উৎসবের দিনের, যেদিন দিনের প্রথম প্রহরে লোকজন একত্র হয়। ব্যবহার করেন সেই একই ধাতু। তারা ভিড় চেয়েছিল। তিনি ভিড়ের সময়টা ঠিক করে দিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Delay, Detention, or Hope",
          "bn": "পিছিয়ে দেওয়া, আটক, নাকি আশা"
        },
        "p": [
          {
            "en": "at-Tabari opens by naming the speakers outright: the chiefs of Pharaoh's people said to Pharaoh, arjih, that is, delay him. He then records a real disagreement among the early authorities about how far that goes. Ibn Abbas (RA), through Ata al-Khurasani, gives one word, akhkhirhu, put him off. Qatadah gives a harder one, ahbishu wa akhah, imprison him and his brother. Both are in at-Tabari's entry, set side by side, and he does not collapse them into each other.",
            "bn": "ইমাম তাবারী শুরুতেই বক্তাদের নাম বলে দেন: ফিরআউনের গোষ্ঠীর প্রধানরা ফিরআউনকে বলল, আরজিহ, অর্থাৎ তাকে পিছিয়ে দাও। তারপর তিনি লিখে রাখেন পূর্ববর্তী ইমামদের ভেতর একটি সত্যিকারের মতভেদ, শব্দটি কতদূর যায় তা নিয়ে। ইবনু আব্বাস (রাঃ) আতা খুরাসানীর সূত্রে এক শব্দে বলেন, আখখিরহু, অর্থাৎ তাকে পিছিয়ে দাও। কাতাদাহ বলেন আরও কড়া কথা, আহবিসহু ওয়া আখাহ, অর্থাৎ তাকে আর তার ভাইকে বন্দী কর। দুটোই তাবারীর আলোচনায় পাশাপাশি রাখা, আর তিনি একটাকে অন্যটার ভেতর মিশিয়ে দেন না।"
          },
          {
            "en": "al-Qurtubi keeps a third possibility alive. He reports from an-Nahhas, on the authority of Muhammad ibn Yazid, that arjih may be taken from raja yarju, so that it means give him hope and leave him hoping. He also lays out who read the word with the hamza and who without it, and which reciters lengthened the vowel on the pronoun. Between the three readings the options are these: delay the man, jail the man, or keep the man expectant. None of them is an answer to what the man said.",
            "bn": "কুরতুবী তৃতীয় একটি সম্ভাবনাও বাঁচিয়ে রাখেন। তিনি নাহহাসের সূত্রে মুহাম্মাদ ইবনু ইয়াযীদ থেকে বর্ণনা করেন, আরজিহ শব্দটি রাজা ইয়ারজূ থেকেও নেওয়া যায়, তখন অর্থ হয় তাকে আশা দাও আর আশার মধ্যেই রেখে দাও। কোন কারী হামজাসহ পড়েছেন, কে হামজা ছাড়া, আর কারা সর্বনামের স্বর টেনে পড়েছেন, সবই তিনি সাজিয়ে দেন। তিনটি পড়া মিলিয়ে সম্ভাবনা দাঁড়ায় তিনটি: লোকটাকে পিছিয়ে দাও, লোকটাকে বন্দী কর, নয়তো লোকটাকে আশায় ঝুলিয়ে রাখো। এর একটিও লোকটার কথার জবাব নয়।"
          },
          {
            "en": "as-Sa'di takes two of the senses together: their view settled on telling Pharaoh to imprison the two of them and grant them respite, and to send men into the cities to gather the people of the kingdom. Ibn Kathir reads arjih as delay him for a time and then explains the plan behind it. In that age, he says, magic was the going trade, widespread and popular, and they assumed that what Musa brought was magic of the same kind. On that wrong assumption they sent for every magician they could find, to defeat what he had shown them.",
            "bn": "শাইখ সাদী দুটি অর্থ একসঙ্গে নেন। তাঁর ভাষায়, তাদের মত এসে দাঁড়াল এখানে যে ফিরআউনকে বলা হবে দুজনকে বন্দী করে অবকাশ দিতে, আর নগরে নগরে লোক পাঠিয়ে রাজ্যের মানুষ জড়ো করতে। ইবনু কাসীর আরজিহ পড়েন কিছু সময়ের জন্য পিছিয়ে দেওয়া অর্থে, তারপর পেছনের পরিকল্পনাটা খুলে বলেন। তিনি বলেন, সেই যুগে যাদুই ছিল চালু পেশা, ছড়িয়ে থাকা আর জনপ্রিয়। তারা ধরে নিয়েছিল মূসা যা এনেছেন সেটাও সেই একই জাতের যাদু। এই ভুল ধারণার উপর ভর করেই তারা যত যাদুকর পাওয়া যায় ডেকে পাঠাল, তাঁর দেখানো জিনিসটাকে হারিয়ে দিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Attached, What Is Not",
          "bn": "কী জোড়া আছে, কী নেই"
        },
        "p": [
          {
            "en": "The four tafsirs read for this verse carry no narration from the Prophet Muhammad ﷺ on it, and that is worth stating plainly instead of reaching for a report from elsewhere. The verse is a piece of reported speech inside a narrative, and the commentators treat it as such: they explain a verb, settle a reading, and describe a plan. Nothing in this passage needs a hadith to be understood, and attaching one that the mufassirun never attached would be a loan, not a support.",
            "bn": "এই আয়াতের জন্য যে চারটি তাফসীর দেখা হয়েছে, তার কোনোটিতেই নবী ﷺ থেকে কোনো হাদীস এই আয়াতের সঙ্গে জোড়া নেই। অন্য কোথাও হাত না বাড়িয়ে কথাটা সোজা বলে দেওয়াই ভালো। আয়াতটি একটি কাহিনির ভেতরে বলা কথার টুকরো, আর মুফাসসিরগণ সেটাকে সেভাবেই নেন। তাঁরা একটি ক্রিয়ার অর্থ খোলেন, একটি কিরাআত নির্ধারণ করেন, আর একটি পরিকল্পনার বর্ণনা দেন। এই অংশ বুঝতে কোনো হাদীসের দরকার পড়ে না। মুফাসসিরগণ যা জোড়েননি তা জুড়ে দিলে সেটা ধার হবে, ভিত্তি হবে না।"
          },
          {
            "en": "What at-Tabari does record is early comment on the last word. He glosses hashirin as those who gather the magicians and bring them to you, and then reports, through several chains from Ibn Abbas (RA) and also from Mujahid and as-Suddi, a single word for who they were: al-shurta, the state's own enforcers. These are tafsir reports from a Companion and from those who came after him, not narrations from the Prophet ﷺ, and they matter for one reason. The talent search was run by the police.",
            "bn": "তাবারী যা লিখে রাখেন তা হলো শেষ শব্দটি নিয়ে পূর্ববর্তীদের মন্তব্য। তিনি হাশিরীনের অর্থ দেন, যারা যাদুকরদের জড়ো করে তোমার কাছে এনে হাজির করে। তারপর ইবনু আব্বাস (রাঃ) থেকে কয়েকটি সূত্রে, আর মুজাহিদ ও সুদ্দী থেকেও, এরা কারা সে প্রশ্নের জবাবে একটি শব্দ বর্ণনা করেন: আশ-শুরতা, অর্থাৎ রাষ্ট্রের নিজের বাহিনী। এগুলো একজন সাহাবী ও পরবর্তীদের তাফসীরি বক্তব্য, নবী ﷺ থেকে বর্ণিত হাদীস নয়। এগুলোর গুরুত্ব একটাই। লোক খোঁজার কাজটা চালিয়েছিল পুলিশ।"
          }
        ]
      },
      {
        "h": {
          "en": "The Same Plan Elsewhere",
          "bn": "একই ফন্দি অন্য জায়গায়"
        },
        "p": [
          {
            "en": "26:36-37 is the same counsel in another surah, almost word for word, which is how a reader can tell it is being quoted rather than summarised. 10:79 shortens the whole plan into one command from Pharaoh's own mouth, bring to me every learned magician, with no assembly mentioned at all. 20:58 has Pharaoh promising to produce magic like it and asking for an appointment in a fair open place, which is where Musa's answer in 20:59 comes from.",
            "bn": "২৬:৩৬ আয়াতে একই পরামর্শ আরেক সূরায়, প্রায় শব্দে শব্দে মিলে যায়। এতেই বোঝা যায় কথাটা উদ্ধৃত হচ্ছে, সারমর্ম করা হচ্ছে না। ১০:৭৯ পুরো পরিকল্পনাটাকে ছোট করে এনে ফিরআউনের নিজের মুখে একটি হুকুমে দাঁড় করায়, সব পারদর্শী যাদুকরকে আমার কাছে নিয়ে এসো, আর সেখানে কোনো সভার কথাই নেই। ২০:৫৮ আয়াতে ফিরআউন বলে সে অনুরূপ যাদু হাজির করবে আর মধ্যবর্তী কোনো খোলা জায়গায় সময় ঠিক করতে বলে। ২০:৫৯ আয়াতে মূসার জবাব আসে ঠিক সেই প্রস্তাবের উত্তরে।"
          },
          {
            "en": "Two more show the pattern rather than the event. 43:54 says of Pharaoh that he bluffed his people and they obeyed him, which is the mechanism this counsel is built to operate. And 7:127 brings the same chiefs back at the end of the episode with the same technique, asking Pharaoh whether he will leave Musa and his people to spread corruption in the land, which is the accusation of 7:110 recycled after it has already failed once.",
            "bn": "আরও দুটি আয়াত ঘটনা নয়, ছাঁদটা দেখায়। ৪৩:৫৪ আয়াত ফিরআউন সম্পর্কে বলে, সে তার জাতির লোকদের বোকা বানিয়ে দিল আর তারা তার কথা মেনে নিল। এই পরামর্শ চালু হওয়ার কলকাঠিটা এটাই। আর ৭:১২৭ আয়াতে ঘটনার শেষে সেই একই প্রধানরা একই কৌশল নিয়ে ফিরে আসে। তারা ফিরআউনকে জিজ্ঞেস করে, আপনি কি মূসা আর তার জাতিকে যমীনে বিপর্যয় ছড়াতে ছেড়ে দেবেন? এ তো ৭:১১০ আয়াতের অভিযোগটাই, একবার ব্যর্থ হওয়ার পরেও আবার চালানো।"
          }
        ]
      },
      {
        "h": {
          "en": "How Refusal Actually Works",
          "bn": "অস্বীকার আসলে যেভাবে চলে"
        },
        "p": [
          {
            "en": "Almost nobody refuses a truth by saying no to it. The chiefs did not argue that the staff had not changed, and they did not say Musa was lying about his sender. They asked for time and for numbers. Delay is the most respectable form of refusal available, because it never has to state a position, and it can be renewed indefinitely without anyone having to admit that a decision was taken. The decision was taken in this verse. It simply was not announced.",
            "bn": "সত্যকে না বলে খুব কম লোকই অস্বীকার করে। প্রধানরা এ কথা বলেনি যে লাঠি বদলায়নি, আর এ কথাও বলেনি যে মূসা তাঁর প্রেরকের ব্যাপারে মিথ্যা বলছেন। তারা চেয়েছিল সময় আর সংখ্যা। পিছিয়ে দেওয়াই অস্বীকারের সবচেয়ে ভদ্র চেহারা, কারণ এতে কখনো নিজের অবস্থান বলতে হয় না, আর কাউকে স্বীকার করতে না হয়েই এটা বারবার নবায়ন করা যায় যে সিদ্ধান্ত একটা নেওয়া হয়ে গেছে। সিদ্ধান্তটা এই আয়াতেই নেওয়া হয়েছিল। শুধু ঘোষণা করা হয়নি।"
          },
          {
            "en": "The second move is the crowd. Send through the cities and bring every learned magician means, in practice, surround the claim with enough expert opposition that it looks settled. It is the oldest substitute for an argument there is, and it works on everyone in the square except the experts themselves, who can tell the difference between their craft and something else. That is why the men gathered to bury this were the first to prostrate when 7:120 arrives.",
            "bn": "দ্বিতীয় চালটা ভিড়। নগরে নগরে পাঠাও আর প্রত্যেক বিজ্ঞ যাদুকরকে নিয়ে এসো, এর কাজের অর্থ হলো দাবিটার চারপাশে এত বিশেষজ্ঞ বিরোধিতা জমিয়ে দাও যেন বিষয়টা মিটে গেছে বলে মনে হয়। যুক্তির বদলি হিসেবে এটাই সবচেয়ে পুরনো জিনিস, আর ময়দানের সবার উপর এটা কাজ করে, কেবল বিশেষজ্ঞদের ছাড়া। তাঁরা নিজেদের কারিগরি আর অন্য কিছুর ভেতরের তফাত ধরতে পারেন। এ কারণেই যাঁদের জড়ো করা হয়েছিল বিষয়টা চাপা দিতে, ৭:১২০ আয়াতে তাঁরাই সবার আগে সাজদায় পড়ে গেলেন।"
          },
          {
            "en": "For a reader the application is narrow and uncomfortable. Find the thing you have neither denied nor obeyed, and notice how long the postponement has been running. Notice too whom you consult about it, because a court that already knows the answer it wants asks its advisers a different question from a man who wants the truth. What do you instruct is a real question in some mouths and a request for cover in others.",
            "bn": "পাঠকের জন্য প্রয়োগটা সংকীর্ণ আর অস্বস্তিকর। খুঁজে বের করুন সেই জিনিসটা, যা আপনি অস্বীকারও করেননি, মানেনওনি। তারপর খেয়াল করুন পেছিয়ে দেওয়াটা কত দিন ধরে চলছে। আরও খেয়াল করুন এ নিয়ে আপনি কার কাছে পরামর্শ চান। যে দরবার আগেই জানে সে কোন জবাবটা চায়, সে তার উপদেষ্টাদের যা জিজ্ঞেস করে, সত্য জানতে চাওয়া লোকের প্রশ্ন তার থেকে আলাদা। তোমাদের পরামর্শ কী, এই কথাটা কারও মুখে সত্যিকারের প্রশ্ন, আর কারও মুখে আড়াল চাওয়া।"
          }
        ]
      },
      {
        "h": {
          "en": "A Du'a Against Delay",
          "bn": "দেরি করার বিরুদ্ধে দোয়া"
        },
        "p": [
          {
            "en": "This verse is the speech of men opposing a prophet, so there is nothing in it to pray and no transmitted du'a is tied to it. What the passage supplies a few verses later is the instruction Musa gave his own people when the same court turned violent: seek help through Allah and be patient, for the earth belongs to Allah and the best outcome is for the righteous (7:128). That is the answer to a delay you cannot shorten.",
            "bn": "এই আয়াত এক নবীর বিরোধিতা করা লোকদের কথা। তাই এর ভেতরে চাওয়ার কিছু নেই, আর এর সঙ্গে জোড়া কোনো বর্ণিত দোয়াও নেই। এই অংশ কয়েক আয়াত পরে যা দেয়, তা হলো একই দরবার যখন সহিংস হয়ে উঠল তখন মূসা নিজের জাতিকে যে নির্দেশ দিয়েছিলেন: আল্লাহর সাহায্য চাও আর ধৈর্য ধরো, যমীনের মালিক আল্লাহ, আর শেষ ভালোটা মুত্তাকীদের জন্য (৭:১২৮)। যে দেরি আপনি কমাতে পারেন না, তার জবাব এটাই।"
          },
          {
            "en": "A short supplication in the vocabulary of the scene may be offered as exactly that, a composition and not a transmitted wording. O Allah, do not let me be one who postpones what he already knows. Do not let my advisers be chosen for their agreement. If a matter of mine is being delayed by people, hold me steady until You open it, and if I am the one delaying, take the excuse out of my hands before the habit hardens.",
            "bn": "এই দৃশ্যের শব্দ দিয়ে ছোট একটি মুনাজাত এখানে দেওয়া যায়, তবে স্পষ্ট করেই বলা দরকার যে এটি রচনা, বর্ণিত কোনো দোয়া নয়। হে আল্লাহ, যা জেনে ফেলেছি তা পিছিয়ে দেওয়া লোকদের ভেতর আমাকে রাখবেন না। আমার পরামর্শদাতারা যেন সায় দেওয়ার যোগ্যতায় বেছে নেওয়া না হয়। মানুষ যদি আমার কোনো কাজ আটকে রাখে, আপনি খুলে দেওয়া পর্যন্ত আমাকে দাঁড়িয়ে থাকার শক্তি দিন। আর আমি নিজেই যদি আটকে রাখি, অভ্যাস শক্ত হওয়ার আগেই অজুহাতটা আমার হাত থেকে কেড়ে নিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About Your Own Delays",
          "bn": "নিজের দেরি নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "What have I been postponing for so long that the postponement now feels like a decision I never made? When I ask for advice, am I trying to find out what is right, or to hear my own preference in somebody else's voice? Whose numbers do I gather around a choice so that it stops feeling like mine?",
            "bn": "কোন কাজটা আমি এত দিন ধরে পিছিয়ে দিয়ে আসছি যে এখন সেই পিছিয়ে দেওয়াটাকেই আমার না-নেওয়া কোনো সিদ্ধান্ত বলে মনে হয়? পরামর্শ চাওয়ার সময় আমি কি সত্যিই জানতে চাই কোনটা ঠিক, নাকি নিজের পছন্দটাই অন্যের মুখে শুনতে চাই? কোন সিদ্ধান্তের চারপাশে আমি লোকবল জোগাড় করি, যাতে সেটাকে আর নিজের সিদ্ধান্ত মনে না হয়?"
          },
          {
            "en": "The chiefs answered a sign with logistics, and logistics are easy to mistake for seriousness. Which of the questions actually put to me am I answering with activity instead of an answer? Have I ever called something a matter still under consideration when I had already decided against it? And if I acted this week on the one thing I keep deferring, what exactly is the cost I have been unwilling to name out loud, even to myself?",
            "bn": "প্রধানরা একটি নিদর্শনের জবাব দিয়েছিল আয়োজন দিয়ে, আর আয়োজনকে আন্তরিকতা ভেবে ফেলা খুব সহজ। আমার কাছে সত্যিই যে প্রশ্নগুলো রাখা হয়েছে, তার কোনগুলোর জবাব আমি জবাব দিয়ে নয়, দৌড়াদৌড়ি দিয়ে দিচ্ছি? এমন কি হয়েছে যে ভেতরে ভেতরে না করে দিয়েছি, অথচ মুখে বলেছি বিষয়টা এখনো বিবেচনাধীন? আর যে একটা কাজ আমি বারবার পিছিয়ে দিচ্ছি, সেটা যদি এই সপ্তাহেই করে ফেলি, তাহলে ঠিক কোন মূল্যটা দিতে হবে, যার নাম আমি নিজের কাছেও মুখে আনতে চাইনি?"
          }
        ]
      }
    ]
  },
  "7:116": {
    "sections": [
      {
        "h": {
          "en": "Who Threw First",
          "bn": "কে আগে ছুঁড়ল"
        },
        "p": [
          {
            "en": "The magicians have arrived, settled their fee with Pharaoh (7:113-114) and then turned to Musa with a choice: either you throw, or we will be the ones to throw (7:115). 7:116 is his one-word answer and its consequence. The next verse is the revelation that answers them, throw your staff, and at once it devoured what they were falsifying (7:117), and 7:118 states the verdict, the truth was established and what they were doing was abolished.",
            "bn": "যাদুকররা এসে গেছে, ফিরআউনের সঙ্গে পুরস্কারের হিসাব মিটিয়ে নিয়েছে (৭:১১৩), আর তাদের নৈকট্যের প্রতিশ্রুতিও পেয়েছে (৭:১১৪)। এরপর তারা মূসার দিকে ফিরে একটি বাছাই দেয়: তুমি ছুঁড়বে, না আমরা ছুঁড়ব (৭:১১৫)? ৭:১১৬ তাঁর এক শব্দের জবাব আর তার পরিণাম। পরের আয়াতে আসে সেই ওহী যা তাদের জবাব দেয়, তোমার লাঠি ছুঁড়ে দাও, আর তা তাদের সাজানো জিনিসগুলো গ্রাস করতে শুরু করল (৭:১১৭)। ৭:১১৮ রায় ঘোষণা করে, সত্য প্রকাশ হয়ে গেল আর তারা যা করছিল তা নিষ্ফল হয়ে গেল।"
          },
          {
            "en": "Two signs had already been given privately to the court, the staff that became a serpent in the open and the hand drawn out white for the onlookers (7:107-108). This is different. This is a public contest on an announced day, and 20:59 records how the day was chosen: Musa named the day of the festival, when the people are gathered at mid-morning. The chiefs had asked for gatherers to be sent through the cities (7:111). The crowd they wanted is the crowd that watched this.",
            "bn": "দরবারের সামনে দুটি নিদর্শন আগেই দেখানো হয়েছে, সবার সামনে লাঠি অজগর হয়ে যাওয়া আর হাত বের করা যা দর্শকদের চোখে সাদা উজ্জ্বল (৭:১০৭ ও ৭:১০৮)। এবারের ব্যাপারটা আলাদা। এবার ঘোষিত দিনে প্রকাশ্য প্রতিযোগিতা, আর ২০:৫৯ আয়াতে আছে দিনটা কীভাবে বাছা হয়েছিল। মূসা নাম নিয়েছিলেন উৎসবের দিনের, যেদিন দিনের প্রথম প্রহরে লোকজন একত্র হয়। প্রধানরা চেয়েছিল নগরে নগরে সংগ্রাহক পাঠানো হোক (৭:১১১)। তারা যে ভিড় চেয়েছিল, সেই ভিড়টাই এই দৃশ্য দেখল।"
          },
          {
            "en": "No sound report fixes an occasion of revelation for this verse. It sits inside the longest sustained narrative in a Makkan surah whose subject is what happens to people who are shown proof and refuse it, and its particular job in that narrative is to let the opposition have its best moment. The surah does not hurry past the magicians' success. It reports it, describes what it reached, and only then answers it.",
            "bn": "এই আয়াতের জন্য কোনো নির্ভরযোগ্য শানে নুযূল নেই। এটি বসে আছে একটি মাক্কী সূরার দীর্ঘতম টানা কাহিনির ভেতরে, যে সূরার বিষয় হলো প্রমাণ দেখিয়ে দেওয়ার পরেও যারা অস্বীকার করে তাদের পরিণাম কী। সেই কাহিনিতে এই আয়াতের নির্দিষ্ট কাজ হলো বিরোধী পক্ষকে তার সেরা মুহূর্তটা দিয়ে দেওয়া। সূরা যাদুকরদের সাফল্যের পাশ দিয়ে দৌড়ে চলে যায় না। সেটা জানায়, কতদূর পৌঁছেছিল তা বর্ণনা করে, আর তারপরই জবাব দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Eyes, Not the Thing",
          "bn": "চোখ, জিনিসটা নয়"
        },
        "p": [
          {
            "en": "The precision of the Arabic is the whole point of the verse. Saharu ayuna an-nas: the direct object of the verb is ayun, the plural of ayn, eyes. The magic is not reported as reaching the ropes, or the ground, or anything that was actually lying there. Its object is the seeing. The parallel account keeps the same limit and states it even more plainly: in 20:66 their ropes and staffs only seemed to him, from their magic, to be moving.",
            "bn": "আরবির নিখুঁত শব্দচয়নই এই আয়াতের গোটা বক্তব্য। সাহারূ আ'য়ুনান নাস, এখানে ক্রিয়ার কর্ম হলো আ'য়ুন, অর্থাৎ আইন শব্দের বহুবচন, চোখ। যাদু রশি পর্যন্ত পৌঁছেছে বলা হয়নি, মাটি পর্যন্তও নয়, সেখানে সত্যিই যা পড়ে ছিল তার কিছু পর্যন্তও নয়। যাদুর কর্ম হলো দেখা। সমান্তরাল বর্ণনাও সেই সীমাটাই ধরে রাখে, বরং আরও খোলাখুলি বলে দেয়। ২০:৬৬ আয়াতে তাদের যাদুর কারণে মূসার কেবল মনে হয়েছিল যে রশি আর লাঠিগুলো ছুটোছুটি করছে।"
          },
          {
            "en": "The second verb is built for the effect rather than the cause. Istarhabuhum is form ten from the root r-h-b, a root of dread, and at-Tabari explains the clause as a consequence of the first one: they made the people afraid by what they had bewitched in their eyes, until they feared the staffs and the ropes, thinking them to be snakes. The fear was real and the snakes were not. That gap is where this whole episode lives.",
            "bn": "দ্বিতীয় ক্রিয়াটি গড়া হয়েছে ফলাফলের জন্য, কারণের জন্য নয়। ইসতারহাবূহুম হলো র-হ-ব ধাতুর দশম বাবের রূপ, আর এই ধাতু ভয়ের। ইমাম তাবারী এই অংশটিকে আগের অংশের ফল হিসেবেই ব্যাখ্যা করেন: তারা মানুষের চোখে যা যাদু করেছিল তার দ্বারাই মানুষকে ভয় পাওয়াল, এমনকি লোকজন লাঠি আর রশিগুলোকেই ভয় পেতে লাগল, ওগুলোকে সাপ মনে করে। ভয়টা সত্যি ছিল, সাপগুলো ছিল না। এই ফাঁকটাতেই গোটা ঘটনা বাস করে।"
          },
          {
            "en": "The last two words are as honest as the first two are exact. Bi-sihrin azim, with a great magic, and the noun stands indefinite, with no comparison and no qualification attached to it anywhere in the verse. The Quran does not belittle what they achieved in order to defeat it. It lets the skill stand, records that the crowd was overwhelmed, and puts its answer in the next verse instead of in this one.",
            "bn": "শেষ দুটি শব্দ যতটা সৎ, প্রথম দুটি ততটাই নিখুঁত। বি-সিহরিন আজীম, অর্থাৎ বড় এক যাদু নিয়ে, আর বিশেষ্যটি অনির্দিষ্ট অবস্থায় দাঁড়িয়ে আছে। আয়াতের কোথাও এর সঙ্গে কোনো তুলনা জোড়া হয়নি, কোনো শর্তও বসানো হয়নি। কুরআন তাদের অর্জনকে ছোট করে দেখিয়ে হারায় না। দক্ষতাটাকে সে দাঁড়াতে দেয়, ভিড়ের হতভম্ব হওয়ার কথা লিখে রাখে, আর নিজের জবাবটা রাখে এই আয়াতে নয়, পরের আয়াতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Illusion, and How Great",
          "bn": "ধোঁকা, আর কতটা বড়"
        },
        "p": [
          {
            "en": "Ibn Kathir asks why Musa let them throw first, and answers with a hedge that is worth keeping: Allah knows best, but it was so that the people would witness the magicians' sorcery first. When the magicians had cast their spell and captured the eyes, the clear and unequivocal truth came at the very moment everyone was waiting for it, and that made the truth more impressive to their hearts. On the same verse he records from Ibn Abbas (RA) what was thrown: thick ropes and long sticks, which appeared to be crawling.",
            "bn": "ইবনু কাসীর প্রশ্ন তোলেন, মূসা কেন তাদেরই আগে ছুঁড়তে দিলেন, আর জবাব দেন এমন এক সতর্কতা দিয়ে যা ধরে রাখার মতো: আল্লাহই ভালো জানেন, তবে এর কারণ ছিল যেন মানুষ আগে যাদুকরদের যাদুটা দেখে নেয়। যাদুকররা যখন যাদু ছুঁড়ে চোখগুলো দখল করে নিয়েছে, ঠিক সেই মুহূর্তে এল স্পষ্ট ও নিঃসন্দেহ সত্য, যখন সবাই তার জন্য অপেক্ষা করছিল। এতে সত্যটা তাদের অন্তরে আরও গভীরভাবে বসল। একই আয়াতে তিনি ইবনু আব্বাস (রাঃ) থেকে বর্ণনা করেন কী ছোঁড়া হয়েছিল: মোটা রশি আর লম্বা কাঠ, যেগুলো দেখে মনে হচ্ছিল বুকে হেঁটে চলছে।"
          },
          {
            "en": "at-Tabari glosses each clause in the same direction. On the first he says that they made it appear to the eyes of the people, by the illusion and the trickery they produced, that these things were running. On the second, that they made the people dread what had been bewitched in their eyes until they were afraid of the staffs and the ropes, taking them for snakes. And on the last, that the great magic was a great and large piece of illusion and deception. In the first and the last the word he reaches for is takhyil, illusion.",
            "bn": "ইমাম তাবারী প্রতিটি বাক্যাংশের অর্থ একই দিকে খোলেন। প্রথমটি নিয়ে তিনি বলেন, তারা যে ভ্রম আর ছলনা তৈরি করেছিল তার দ্বারা মানুষের চোখে এমন দেখাল যেন ওগুলো ছুটছে। দ্বিতীয়টি নিয়ে বলেন, চোখে যা যাদু করা হয়েছিল তার দ্বারাই মানুষকে ভয়ে ফেলল, এমনকি তারা লাঠি আর রশিগুলোকেই ভয় পেতে লাগল, সাপ মনে করে। আর শেষটি নিয়ে বলেন, সেই বড় যাদু ছিল ভ্রম আর ছলনার এক বড় ও বিশাল কারিগরি। প্রথম আর শেষ বাক্যাংশে তিনি যে শব্দটি হাতে তুলে নেন সেটি তাখয়ীল, অর্থাৎ ভ্রম।"
          },
          {
            "en": "On the word azim al-Qurtubi and as-Sa'di part company, and the difference is worth stating as one. al-Qurtubi holds that it means great in their estimation, because there was a lot of it, and not great in reality. as-Sa'di reads it as a magic for which no equal was found. al-Qurtubi also collects three explanations of the command to throw. Al-Farra saw an ellipsis, Musa's full meaning being that they would not overcome their Lord nor nullify His signs. Others read it as a threat, or as a deliberate exposure of their fraud, since it is not permissible for a prophet to command magic.",
            "bn": "আজীম শব্দটি নিয়ে কুরতুবী আর সাদীর পথ আলাদা হয়ে যায়, আর এই পার্থক্যটা পার্থক্য হিসেবেই বলা দরকার। কুরতুবীর মত, অর্থ হলো তাদের বিচারে বড়, কারণ পরিমাণে অনেক ছিল, বাস্তবে বড় নয়। সাদী পড়েন, এমন যাদু যার সমান কিছু পাওয়া যায়নি। কুরতুবী ছুঁড়তে বলার হুকুমটির তিনটি ব্যাখ্যাও জমা করেন। ফাররা এখানে একটি উহ্য অংশ দেখেছেন, মূসার পূর্ণ বক্তব্য ছিল যে তোমরা তোমাদের প্রতিপালককে হারাতে পারবে না আর তাঁর নিদর্শনও বাতিল করতে পারবে না। অন্যরা এটাকে পড়েছেন হুমকি হিসেবে, কিংবা তাদের ধোঁকা ফাঁস করে দেওয়ার জন্য দেওয়া হুকুম হিসেবে, কারণ কোনো নবীর পক্ষে যাদুর হুকুম দেওয়া জায়েজ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Sunnah Places This Craft",
          "bn": "সুন্নাহ এই কারিগরিকে কোথায় রাখে"
        },
        "p": [
          {
            "en": "The commentators on this verse do not attach a narration from the Prophet Muhammad ﷺ to it, and the honest thing is to say so before quoting anything. What the Sunnah supplies is not a comment on the scene but a ruling on the craft, and the ruling is severe. Sahih al-Bukhari 2766 has it from Abu Hurayrah (RA), in a short exchange in which the Companions asked the Prophet ﷺ to name what he had warned them against.",
            "bn": "এই আয়াতের মুফাসসিরগণ এর সঙ্গে নবী ﷺ থেকে বর্ণিত কোনো হাদীস জোড়েননি, আর কিছু উদ্ধৃত করার আগে সৎ কাজটা হলো সেটা বলে দেওয়া। সুন্নাহ যা দেয় তা এই দৃশ্যের ব্যাখ্যা নয়, বরং এই কারিগরির হুকুম, আর হুকুমটা কঠোর। সহীহ বুখারীর ২৭৬৬ নম্বর হাদীসে আবূ হুরায়রা (রাঃ) থেকে এটি এসেছে, একটি ছোট কথোপকথনের ভেতরে, যেখানে সাহাবীগণ নবী ﷺ কে জিজ্ঞেস করেছিলেন তিনি কোন জিনিসগুলো থেকে সতর্ক করছেন।"
          },
          {
            "en": "The Prophet ﷺ said: avoid the seven great destructive sins. They asked, O Messenger of Allah, what are they? He said: to join others in worship along with Allah, to practise sorcery, to kill the life which Allah has forbidden except for a just cause, to eat up riba, to eat up an orphan's wealth, to turn away and flee from the battlefield at the time of fighting, and to accuse chaste believing women. Sorcery is second on that list, directly after associating partners with Allah, and it is second in this verse too in the sense that it is what the opposition had instead of a god.",
            "bn": "নবী ﷺ বলেছেন, সাতটি ধ্বংসকারী কবীরা গুনাহ থেকে বেঁচে থাকো। সাহাবীগণ জিজ্ঞেস করলেন, হে আল্লাহর রাসূল, সেগুলো কী? তিনি বললেন, আল্লাহর সঙ্গে শরীক করা, যাদু করা, আল্লাহ যে প্রাণ হারাম করেছেন তা অন্যায়ভাবে হত্যা করা, সুদ খাওয়া, এতীমের সম্পদ খাওয়া, যুদ্ধের দিনে পিঠ ফিরিয়ে পালানো, আর সচ্চরিত্রা মু'মিন নারীদের প্রতি অপবাদ দেওয়া। সেই তালিকায় যাদু দ্বিতীয়, ঠিক শিরকের পরেই। আর এই আয়াতেও সেটা এক অর্থে দ্বিতীয়, কারণ বিরোধী পক্ষের হাতে ইলাহর বদলে ছিল এই জিনিসটাই।"
          },
          {
            "en": "One thing should be left out on purpose. at-Tabari collects early reports on how many magicians were present and they do not agree with each other: as-Suddi gives a little over thirty thousand men, Ibn Ishaq fifteen thousand, and al-Qasim ibn Abi Bazza says Pharaoh gathered seventy thousand. When transmitted figures differ this widely the right move is to write the account without a number at all, and that is why none is given here.",
            "bn": "একটি জিনিস ইচ্ছে করেই বাদ রাখা দরকার। ইমাম তাবারী কত যাদুকর উপস্থিত ছিল তা নিয়ে পূর্ববর্তীদের বর্ণনা জমা করেন, আর সেগুলো একটার সঙ্গে আরেকটা মেলে না। সুদ্দী বলেন ত্রিশ হাজারের কিছু বেশি লোক, ইবনু ইসহাক বলেন পনেরো হাজার, আর কাসিম ইবনু আবী বাযযাহ বলেন ফিরআউন সত্তর হাজার জড়ো করেছিল। বর্ণিত সংখ্যা যখন এত দূরে দূরে, তখন ঠিক কাজ হলো কোনো সংখ্যা ছাড়াই ঘটনাটা লেখা। এখানে তাই কোনো সংখ্যা দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "How Magic Ends Elsewhere",
          "bn": "যাদুর পরিণতি অন্য জায়গায়"
        },
        "p": [
          {
            "en": "20:66 is the same moment told with the limit built into the verb: their ropes and staffs seemed to him, from their magic, to be moving. 20:69 gives the assessment in Allah's own words, that what they crafted is but the trick of a magician, and that the magician will not succeed wherever he is. 10:81 puts a matching assessment into Musa's mouth on the day itself: what you have brought is magic, Allah will expose its worthlessness, and Allah does not amend the work of corrupters.",
            "bn": "২০:৬৬ একই মুহূর্তের বর্ণনা, তবে সীমাটা ক্রিয়ার ভেতরেই গাঁথা: তাদের যাদুর কারণে মূসার মনে হল রশি আর লাঠিগুলো ছুটোছুটি করছে। ২০:৬৯ আয়াতে আল্লাহ নিজের ভাষায় মূল্যায়ন দেন, তারা যা করেছে তা কেবল যাদুকরের কলাকৌশল, আর যাদুকর যে রূপেই আসুক সফল হবে না। ১০:৮১ আয়াতে সেই দিনেই মূসার মুখে অনুরূপ মূল্যায়ন বসানো হয়েছে: তোমরা যা এনেছ তা যাদু, আল্লাহ তা ব্যর্থ করে দেবেন, আর আল্লাহ বিশৃঙ্খলাকারীদের কাজ সংশোধন করেন না।"
          },
          {
            "en": "Two more widen the frame. 2:102 is the Quran's fullest statement on sorcery, and the sentence to hold from it is that they do not harm anyone through it except by permission of Allah, which is exactly the ceiling this verse illustrates. And 21:18 gives the pattern behind 7:117 in a single image: rather, We dash the truth upon falsehood, and it destroys it, and thereupon it departs.",
            "bn": "আরও দুটি আয়াত পরিধিটা বড় করে দেয়। ২:১০২ যাদু নিয়ে কুরআনের সবচেয়ে পূর্ণ বক্তব্য, আর সেখান থেকে যে কথাটা ধরে রাখার, সেটা হলো আল্লাহর অনুমতি ছাড়া তারা এর দ্বারা কারও কোনো ক্ষতি করতে পারত না। এই আয়াতটি ঠিক সেই ছাদটাই দেখিয়ে দেয়। আর ২১:১৮ একটি ছবিতে ৭:১১৭ আয়াতের পেছনের নিয়মটা দিয়ে দেয়: বরং আমি সত্যকে মিথ্যার উপর নিক্ষেপ করি, তা মিথ্যার মাথা চূর্ণ করে দেয়, আর তৎক্ষণাৎ মিথ্যা নিশ্চিহ্ন হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Living With a Second Turn",
          "bn": "দ্বিতীয় পালার সঙ্গে বাঁচা"
        },
        "p": [
          {
            "en": "The hardest instruction in this verse is one word: throw. Musa handed the opening to the other side and then stood there while a stadium filled with fear. Most of us cannot do that. We interrupt, we pre-empt, we answer before the false thing has finished being said, because letting it finish feels like conceding. This verse is evidence that it is not. Truth that arrives second, into a crowd that has already been frightened, lands harder than truth that arrives first.",
            "bn": "এই আয়াতের সবচেয়ে কঠিন নির্দেশটা এক শব্দের: ছুঁড়। মূসা শুরুর পালাটা অন্য পক্ষের হাতে তুলে দিলেন, তারপর দাঁড়িয়ে রইলেন যখন গোটা ময়দান ভয়ে ভরে যাচ্ছে। আমাদের অধিকাংশই এটা পারি না। আমরা কথার মাঝে ঢুকে পড়ি, আগে থেকে ঠেকিয়ে দিই, মিথ্যা কথাটা শেষ হওয়ার আগেই জবাব দিয়ে ফেলি, কারণ শেষ হতে দেওয়াটাকে হার মানা মনে হয়। এই আয়াত প্রমাণ যে তা হার নয়। ভয় পেয়ে বসে থাকা ভিড়ের ভেতরে সত্য যখন পরে এসে পৌঁছায়, সে আগে পৌঁছানো সত্যের চেয়ে জোরে লাগে।"
          },
          {
            "en": "The second application is a habit of asking what a frightening thing actually has hold of. The magic here had the eyes and nothing else. A great deal of what presses on a believer works the same way: a rumour, a market panic, a threatening message, an account of the future that somebody needs you to accept. It is worth asking, in those hours, what is actually moving, and then asking who has permission to move it.",
            "bn": "দ্বিতীয় প্রয়োগটা একটা অভ্যাস, ভয় জাগানো জিনিসটা আসলে কী দখল করে আছে সেই প্রশ্ন করার অভ্যাস। এখানে যাদুর হাতে ছিল চোখ, আর কিছুই না। একজন মু'মিনের উপর যে অনেক জিনিস চাপ দেয়, সেগুলো এভাবেই কাজ করে। একটা গুজব, বাজারের আতঙ্ক, ভয় দেখানো একটা বার্তা, ভবিষ্যৎ নিয়ে এমন এক হিসাব যেটা কেউ চায় আপনি মেনে নিন। এমন সময়ে জিজ্ঞেস করা দরকার, আসলে নড়ছে কোন জিনিসটা। তারপর জিজ্ঞেস করা দরকার, নড়ানোর অনুমতি কার হাতে আছে।"
          },
          {
            "en": "There is a third thing, quieter and easy to miss. The men who threw were the men who, a few verses later, are the first to prostrate (7:120). They were the only people in the square who knew for certain that what they had done was craft, so they were the only people who knew for certain that what Musa did was not. Expertise misused is still expertise, and it can recognise the truth faster than innocence can.",
            "bn": "তৃতীয় একটা জিনিস আছে, আরও চুপচাপ, সহজে চোখ এড়িয়ে যায়। যারা ছুঁড়েছিল, কয়েক আয়াত পরেই তারাই সবার আগে সাজদায় পড়ে যায় (৭:১২০)। ময়দানে তারাই একমাত্র লোক যারা নিশ্চিতভাবে জানত তাদের নিজেদের কাজটা কারিগরি ছাড়া কিছু নয়। তাই তারাই একমাত্র লোক যারা নিশ্চিতভাবে জানত, মূসা যা করলেন সেটা কারিগরি নয়। ভুল কাজে লাগানো দক্ষতাও দক্ষতা, আর সে সত্যকে সরলতার চেয়েও দ্রুত চিনতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seeking Refuge From This",
          "bn": "এ থেকে আশ্রয় চাওয়া"
        },
        "p": [
          {
            "en": "The verse is narration, so nothing in it is transmitted as a supplication. What the Quran gives for exactly this danger is a surah: 113:1-5 is the seeking of refuge in the Lord of daybreak from the evil of what He created, from the evil of darkness when it settles, from the blowers in knots, and from the envier when he envies. The fourth of those is the craft this verse describes, and the refuge named against it is not a counter-technique but a Lord.",
            "bn": "এই আয়াত কাহিনির বর্ণনা, তাই এর ভেতরের কিছুই দোয়া হিসেবে বর্ণিত হয়নি। ঠিক এই বিপদের জন্য কুরআন যা দেয় তা একটি গোটা সূরা। ১১৩:১ থেকে ১১৩:৫ পর্যন্ত আশ্রয় চাওয়া হয়েছে সকালবেলার প্রতিপালকের কাছে, তাঁর সৃষ্টির অনিষ্ট থেকে, অন্ধকার যখন নেমে আসে তার অনিষ্ট থেকে, গিরায় ফুৎকারকারিণীদের অনিষ্ট থেকে, আর হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে। এর চতুর্থটি এই আয়াতে বর্ণিত সেই কারিগরিই। আর তার বিরুদ্ধে যে আশ্রয়ের নাম বলা হয়েছে, সেটা পাল্টা কোনো কৌশল নয়, একজন প্রতিপালক।"
          },
          {
            "en": "A short supplication in the vocabulary of the scene may be offered as a composition and nothing more. O Allah, keep my eyes from being bought by what is not there. Do not let me fear what You have not given power, and do not let me admire what You are about to abolish. When falsehood is given the first turn in front of me, hold me still until Your answer comes, and let me be among those who recognise it when it does.",
            "bn": "এই দৃশ্যের শব্দ দিয়ে ছোট একটি মুনাজাত এখানে দেওয়া যায়, তবে সেটা রচনা, বর্ণিত দোয়া নয়। হে আল্লাহ, যা নেই তা দিয়ে আমার চোখ কিনে নেওয়া থেকে বাঁচান। আপনি যাকে ক্ষমতা দেননি তাকে ভয় পাওয়া থেকে আমাকে রক্ষা করুন, আর আপনি যা এখনই মুছে দেবেন তাতে মুগ্ধ হওয়া থেকেও। আমার সামনে মিথ্যাকে যখন প্রথম পালা দেওয়া হয়, আপনার জবাব আসা পর্যন্ত আমাকে স্থির রাখুন। আর জবাব এলে যারা তা চিনে নেয়, আমাকে তাদের ভেতরেই রাখুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions About What You Saw",
          "bn": "আপনি যা দেখেছেন তা নিয়ে প্রশ্ন"
        },
        "p": [
          {
            "en": "What have I believed in the last month because of how it looked, rather than because I checked what it was? The magic in this verse reached the eyes and stopped there. Where am I currently treating an appearance as though it were the thing itself, and what would it cost me to test it? Is there something I am genuinely afraid of that has no actual permission over me?",
            "bn": "গত এক মাসে কোন জিনিসটা আমি বিশ্বাস করেছি শুধু দেখতে কেমন লাগছিল বলে, যাচাই করে দেখেছি বলে নয়? এই আয়াতের যাদু চোখ পর্যন্ত এসে থেমে গিয়েছিল। এখন কোথায় আমি চেহারাটাকেই আসল জিনিস ধরে ব্যবস্থা নিচ্ছি, আর সেটা পরখ করে দেখতে গেলে আমার কী খরচ হবে? এমন কিছু কি আছে যাকে আমি সত্যিই ভয় পাই, অথচ আমার উপর তার কোনো অনুমতিই নেই?"
          },
          {
            "en": "Falsehood was allowed to go first here and truth answered second. Can I bear that order in an argument, at work, inside my own family, or do I need to win the opening exchange? And when I am the one who knows a craft from the inside, does that knowledge make me quicker to recognise the truth, as it did for the magicians, or only better at defending my own trade?",
            "bn": "এখানে মিথ্যাকে আগে যেতে দেওয়া হয়েছে, সত্য জবাব দিয়েছে পরে। তর্কে, কাজের জায়গায়, নিজের পরিবারের ভেতরে আমি কি এই ক্রমটা সহ্য করতে পারি, নাকি প্রথম চালেই আমার জিততে হবে? আর কোনো কাজ আমি যখন ভেতর থেকে জানি, সেই জানাটা কি যাদুকরদের মতো আমাকে সত্য চেনার ব্যাপারে দ্রুত করে তোলে, নাকি কেবল নিজের পেশাকে আড়াল করার ব্যাপারে দক্ষ করে?"
          }
        ]
      }
    ]
  },
  "7:126": {
    "sections": [
      {
        "h": {
          "en": "The End of Their Speech",
          "bn": "তাদের কথার শেষ"
        },
        "p": [
          {
            "en": "The magicians have thrown, lost, and fallen in prostration (7:120), declaring faith in the Lord of the worlds, the Lord of Musa and Harun (7:121-122). Pharaoh then accuses them of a conspiracy hatched in the city and promises them mutilation on opposite sides and crucifixion (7:123-124). Their answer begins in 7:125, to our Lord we will return, and finishes here. The next verse turns to the chiefs of Pharaoh's people (7:127), so their speech ends at 7:126 and nowhere later.",
            "bn": "যাদুকররা ছুঁড়েছে, হেরেছে, আর সাজদায় লুটিয়ে পড়েছে (৭:১২০)। তারা ঈমান এনেছে বিশ্বজগতের প্রতিপালকের প্রতি, মূসা আর হারূনের প্রতিপালকের প্রতি (৭:১২১ ও ৭:১২২)। এরপর ফিরআউন তাদের বিরুদ্ধে নগরে বসে ষড়যন্ত্র পাকানোর অভিযোগ তোলে, আর বিপরীত দিক থেকে হাত পা কেটে শূলে চড়ানোর প্রতিশ্রুতি দেয় (৭:১২৩ ও ৭:১২৪)। তাদের জবাব শুরু হয় ৭:১২৫ আয়াতে, আমরা আমাদের প্রতিপালকের দিকেই ফিরে যাব, আর শেষ হয় এখানে। এর পরের আয়াত ফিরে যায় ফিরআউনের গোষ্ঠীর প্রধানদের দিকে (৭:১২৭)। তাই তাদের কথা ৭:১২৬ আয়াতেই শেষ, এর পরে আর নয়।"
          },
          {
            "en": "The same reply is preserved elsewhere with an extra line at the front. 26:50 has them saying, no harm, indeed to our Lord we will return, and 26:51 adds a hope this surah does not record: indeed we aspire that our Lord will forgive us our sins because we were the first of the believers. Read together, the two accounts give a full answer to a death sentence: it does us no harm, we are going back anyway, forgive us, hold us steady, and take us like this.",
            "bn": "এই একই জবাব আরেক জায়গায় রাখা হয়েছে, সামনে একটি বাড়তি কথা নিয়ে। ২৬:৫০ আয়াতে তারা বলে, কোনো ক্ষতি নেই, আমরা আমাদের প্রতিপালকের দিকেই ফিরে যাব। আর ২৬:৫১ আয়াতে যোগ হয় এমন একটি আশা, যা এই সূরায় নেই: আমাদের আশা এই যে আমাদের প্রতিপালক আমাদের ত্রুটি ক্ষমা করবেন, কারণ আমরাই প্রথম ঈমান আনলাম। দুটি বর্ণনা একসঙ্গে পড়লে মৃত্যুদণ্ডের একটি পূর্ণ জবাব দাঁড়িয়ে যায়: এতে আমাদের ক্ষতি নেই, আমরা তো ফিরেই যাচ্ছি, আমাদের মাফ করুন, আমাদের দাঁড়িয়ে রাখুন, আর এই অবস্থাতেই নিয়ে নিন।"
          },
          {
            "en": "There is no established occasion of revelation for the verse; it is narrative inside a Makkan surah. What can be said about its place is that the whole story turns here. Everything before this point is a contest between a prophet and a court. From here on, the ones who have to be dealt with are ordinary people who believed, and the rest of the surah follows what Pharaoh does to a population rather than to a messenger.",
            "bn": "এই আয়াতের কোনো প্রতিষ্ঠিত শানে নুযূল নেই। এটি একটি মাক্কী সূরার ভেতরে কাহিনির বর্ণনা। এর জায়গা নিয়ে যা বলা যায়, তা হলো গোটা কাহিনি এখানেই মোড় নেয়। এই জায়গার আগে যা আছে সবটাই একজন নবী আর একটি দরবারের মধ্যে লড়াই। এখান থেকে যাদের সঙ্গে বোঝাপড়া করতে হবে তারা সাধারণ মানুষ, যারা ঈমান এনেছে। সূরার বাকি অংশ দেখায় ফিরআউন একজন রাসূলের সঙ্গে নয়, একটি জনগোষ্ঠীর সঙ্গে কী করে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Address, Then Another",
          "bn": "একজনকে, তারপর আরেকজনকে"
        },
        "p": [
          {
            "en": "The verse is in two halves and the halves are spoken to two different listeners. Tanqimu is addressed to one person, and that person is Pharaoh: you find nothing in us to punish except our faith. Then afrigh and tawaffana address one person too, and that person is Allah. The verbs keep the same shape across the verse and turn to the imperative in the second half, while the listener changes completely, with nothing marking the turn but the word Rabbana. A man was being answered; now he is not addressed at all.",
            "bn": "আয়াতটি দুই ভাগে, আর দুই ভাগ দুই শ্রোতাকে বলা। তানকিমু ক্রিয়াটি একজনকে সম্বোধন করে, আর সেই একজন ফিরআউন: আমাদের ভেতর শাস্তি দেওয়ার মতো কিছুই তুমি পাচ্ছ না, কেবল আমাদের ঈমান ছাড়া। এরপর আফরিগ আর তাওয়াফফানাও একজনকেই সম্বোধন করে, আর সেই সম্বোধন এখন আল্লাহর উদ্দেশে। আয়াতের দুই পাশে ক্রিয়ার রূপ একই থাকে, দ্বিতীয় ভাগে সেটা আদেশের ভঙ্গি নেয়, অথচ শ্রোতা পুরো বদলে যায়। মোড় ঘোরার চিহ্ন একটিই, রাব্বানা শব্দটি। একজনকে জবাব দেওয়া হচ্ছিল, এখন তাকে আর সম্বোধনই করা হচ্ছে না।"
          },
          {
            "en": "Tanqimu is from n-q-m, and the first half is again built as a negation with one exception: nothing except that we believed. al-Qurtubi records that al-Hasan read the verb with a different vowel on the qaf, and cites al-Akhfash that both forms are used and both mean disapproval, so the sense is that Pharaoh dislikes nothing in them but their faith in Allah. The same construction with the same root closes the account of another persecution in 85:8, where the tormentors resented the believers for nothing but their belief.",
            "bn": "তানকিমু শব্দের ধাতু ন-ক-ম, আর প্রথম ভাগটিও গড়া হয়েছে একটিমাত্র ব্যতিক্রমসহ নাকারাত্মক বাক্য হিসেবে: আমরা ঈমান এনেছি, এ ছাড়া আর কিছুই নয়। কুরতুবী লিখে রাখেন, হাসান ক্রিয়াটির কাফ বর্ণে ভিন্ন স্বর দিয়ে পড়েছেন। তিনি আখফাশের কথা তুলে বলেন, দুই রূপই চলে আর দুটোরই অর্থ অপছন্দ করা। অর্থাৎ ফিরআউন তাদের ভেতর কিছুই অপছন্দ করছে না, কেবল আল্লাহর প্রতি তাদের ঈমান ছাড়া। ৮৫:৮ আয়াতে আরেক নির্যাতনের বর্ণনা একই ধাতু আর একই গড়নে শেষ হয়, যেখানে নির্যাতনকারীরা মু'মিনদের উপর চটেছিল কেবল তাদের ঈমানের কারণেই।"
          },
          {
            "en": "Afrigh is form four from f-r-gh, and al-Qurtubi gives its sense in one word, as-sabb, pouring, adding that they wanted it poured on them at the moment of the cutting and the crucifixion. Sabran is indefinite, and as-Sa'di reads the indefiniteness as size: a great patience, because this is a great trial that ends in the loss of life and therefore needs a great deal. Tawaffana asks for the taking of a soul, and muslimin is the state they want to be in when it happens.",
            "bn": "আফরিগ হলো ফ-র-গ ধাতুর চতুর্থ বাবের আদেশ, আর কুরতুবী এর অর্থ দেন এক শব্দে, আস-সাব্ব, অর্থাৎ ঢালা। তিনি যোগ করেন, তারা চেয়েছিল হাত পা কাটা আর শূলে চড়ানোর ঠিক সেই মুহূর্তে এটা তাদের উপর ঢেলে দেওয়া হোক। সাবরান শব্দটি অনির্দিষ্ট, আর শাইখ সাদী এই অনির্দিষ্টতাকে পড়েন পরিমাণ হিসেবে: বিরাট এক ধৈর্য, কারণ এ এমন এক বিরাট পরীক্ষা যার শেষ প্রাণ যাওয়ায়, তাই এতে অনেকটা ধৈর্য লাগে। তাওয়াফফানা মানে জান নিয়ে নেওয়ার আবেদন, আর মুসলিমীন সেই অবস্থা যেটাতে থাকতে চায় তারা সেই মুহূর্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Restraint or an Outpouring",
          "bn": "বাঁধ, নাকি বর্ষণ"
        },
        "p": [
          {
            "en": "at-Tabari paraphrases the first half in Pharaoh's hearing: what do you find blameworthy in us, and what do you hold against us, except that we affirmed the signs of our Lord, proofs the like of which nobody besides Allah can produce. Then, he says, they fled to Allah, asking Him for patience under Pharaoh's torture and for their souls to be taken in Islam. His gloss on tawaffana is specific: take us to You upon Islam, the religion of Your khalil Ibrahim, not upon associating anything with You.",
            "bn": "ইমাম তাবারী প্রথম ভাগটিকে ফিরআউনের উদ্দেশেই এভাবে খোলেন: আমাদের ভেতর তুমি দোষের কী পাচ্ছ, আমাদের বিরুদ্ধে তোমার কী আছে, কেবল এটা ছাড়া যে আমরা আমাদের প্রতিপালকের নিদর্শনগুলোকে সত্য বলে মেনেছি? এমন প্রমাণ, যার মতো কিছু আনার সাধ্য তোমার নেই, আল্লাহ ছাড়া আর কারও নেই। তারপর তিনি বলেন, তারা আল্লাহর দিকে ছুটে গেল, ফিরআউনের নির্যাতনের উপর ধৈর্য চাইল আর চাইল ইসলামের উপরই তাদের জান নেওয়া হোক। তাওয়াফফানার ব্যাখ্যায় তিনি নির্দিষ্ট: আমাদের ইসলামের উপরই তুলে নাও, তোমার খলীল ইবরাহীমের দ্বীনের উপর, তোমার সঙ্গে শরীক করা অবস্থায় নয়।"
          },
          {
            "en": "On the word for patience at-Tabari does something the others do not. He explains afrigh alayna sabran as a request that Allah send down upon them a habs, a holding that would keep them from disbelieving in Him while Pharaoh tortured them. On that reading patience is a restraint, something that stops a man from moving in the wrong direction. al-Qurtubi and as-Sa'di read it the other way, as a supply poured in, and as-Sa'di uses the verb afid, pour out abundantly. Both are in the verse, and the difference is worth keeping.",
            "bn": "ধৈর্য শব্দটি নিয়ে তাবারী এমন কিছু করেন যা অন্যরা করেন না। আফরিগ আলাইনা সাবরান তিনি ব্যাখ্যা করেন এভাবে, আল্লাহ যেন তাদের উপর এমন একটি হাবস অর্থাৎ বাঁধ নামিয়ে দেন, যা ফিরআউনের নির্যাতনের সময় তাদেরকে তাঁর সঙ্গে কুফরি করা থেকে আটকে রাখে। এই পড়ায় ধৈর্য হলো একটি বাঁধ, যা মানুষকে ভুল দিকে যেতে দেয় না। কুরতুবী আর সাদী পড়েন উল্টো দিক থেকে, ঢেলে দেওয়া একটি জোগান হিসেবে, আর সাদী ব্যবহার করেন আফিদ ক্রিয়াটি, অর্থাৎ প্রচুর করে ঢেলে দাও। দুটোই আয়াতের ভেতরে আছে, আর পার্থক্যটা ধরে রাখার মতো।"
          },
          {
            "en": "Ibn Kathir reconstructs the reasoning behind the request. They had become sure they were going back to Allah, and that His punishment is more severe than Pharaoh's, so they would be patient under his punishment that day to be saved from Allah's. He reads the patience as patience with Allah's religion and firmness in it, and the dying as Muslims as dying followers of His Prophet Musa (AS). as-Sa'di closes with a judgement, not a report: apparently Pharaoh did what he had threatened, and Allah made them firm upon faith.",
            "bn": "ইবনু কাসীর এই চাওয়ার পেছনের হিসাবটা সাজিয়ে দেন। তারা নিশ্চিত হয়ে গিয়েছিল যে তারা আল্লাহর কাছেই ফিরে যাচ্ছে, আর আল্লাহর শাস্তি ফিরআউনের শাস্তির চেয়ে অনেক কঠিন। তাই আল্লাহর শাস্তি থেকে বাঁচার জন্য সেদিন তারা ফিরআউনের শাস্তির উপর ধৈর্য ধরবে। ধৈর্যটাকে তিনি পড়েন আল্লাহর দ্বীনের উপর ধৈর্য আর তাতে অবিচল থাকা হিসেবে, আর মুসলমান হয়ে মরাটাকে পড়েন তাঁর নবী মূসা (আঃ) এর অনুসারী হয়ে মরা হিসেবে। সাদী শেষ করেন বর্ণনা দিয়ে নয়, একটি রায় দিয়ে: বাহ্যত ফিরআউন যা ভয় দেখিয়েছিল তা করেই ছিল, আর আল্লাহ তাদের ঈমানের উপর অবিচল রেখেছিলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Given to Those Who Asked",
          "bn": "যারা চেয়েছিল তাদের যা দেওয়া হলো"
        },
        "p": [
          {
            "en": "The commentators on this verse do not attach a narration from the Prophet Muhammad ﷺ to it. What the Sunnah supplies is the promise that answers the request. Sahih al-Bukhari 1469 records from Abu Sa'id al-Khudri (RA) that some men of the Ansar asked the Messenger of Allah ﷺ for something and he gave them, and they asked again and he gave again, until everything he had was gone.",
            "bn": "এই আয়াতের মুফাসসিরগণ এর সঙ্গে নবী ﷺ থেকে কোনো হাদীস জোড়েননি। সুন্নাহ যা দেয় তা হলো এই চাওয়ার জবাবে দেওয়া প্রতিশ্রুতিটি। সহীহ বুখারীর ১৪৬৯ নম্বর হাদীসে আবূ সাঈদ খুদরী (রাঃ) থেকে এসেছে, আনসারদের কিছু লোক রাসূলুল্লাহ ﷺ এর কাছে কিছু চাইলেন আর তিনি দিলেন। তাঁরা আবার চাইলেন, তিনি আবার দিলেন। এভাবে তাঁর কাছে যা ছিল সবই শেষ হয়ে গেল।"
          },
          {
            "en": "Then he said: whatever good I have I will not withhold from you, and whoever abstains from asking others, Allah will make him contented, and whoever tries to make himself self-sufficient, Allah will make him self-sufficient, and whoever remains patient, Allah will make him patient. Nobody can be given a blessing better and greater than patience. The magicians asked for exactly the thing this narration names as the best gift, and they asked for it in the hour when there was nothing else left to ask for.",
            "bn": "তারপর তিনি বললেন, আমার কাছে যে ভালো জিনিস থাকে তা আমি তোমাদের থেকে আটকে রাখি না। আর যে মানুষের কাছে চাওয়া থেকে বিরত থাকে, আল্লাহ তাকে অভাবমুক্ত করেন। যে নিজেকে স্বনির্ভর রাখতে চায়, আল্লাহ তাকে স্বনির্ভর করেন। আর যে ধৈর্য ধরার চেষ্টা করে, আল্লাহ তাকে ধৈর্য দেন। ধৈর্যের চেয়ে উত্তম আর প্রশস্ত কোনো দান কাউকে দেওয়া হয়নি। যাদুকররা ঠিক সেই জিনিসটাই চেয়েছিল, যেটাকে এই হাদীস সবচেয়ে বড় দান বলছে। আর চেয়েছিল সেই মুহূর্তে, যখন চাওয়ার মতো আর কিছুই বাকি ছিল না।"
          },
          {
            "en": "at-Tabari preserves one more line on this verse, and it is a tafsir report rather than a hadith. Abdullah ibn Abbas (RA) said of these men that they were magicians at the beginning of the day and martyrs at the end of it, and at-Tabari carries the same sentence from Ubayd ibn Umayr, from Qatadah and from Mujahid. It is not a narration from the Prophet ﷺ and should not be quoted as one, but it is the shortest accurate summary of this verse.",
            "bn": "এই আয়াত নিয়ে তাবারী আরও একটি কথা রেখে গেছেন, আর সেটি হাদীস নয়, তাফসীরি বক্তব্য। আবদুল্লাহ ইবনু আব্বাস (রাঃ) এই লোকদের সম্পর্কে বলেছেন, দিনের শুরুতে তারা ছিল যাদুকর, আর দিনের শেষে শহীদ। একই কথা তাবারী বর্ণনা করেছেন উবাইদ ইবনু উমাইর থেকে, কাতাদাহ থেকে আর মুজাহিদ থেকেও। এটি নবী ﷺ থেকে বর্ণিত হাদীস নয়, তাই হাদীস হিসেবে উদ্ধৃত করা যাবে না। তবে এই আয়াত যা লিখে রাখছে, তার সবচেয়ে ছোট আর সবচেয়ে নিখুঁত সারকথা এটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "Others Who Asked This",
          "bn": "আর যারা এটাই চেয়েছিল"
        },
        "p": [
          {
            "en": "2:250 carries the same four Arabic words, rabbana afrigh alayna sabran, on the lips of Talut's soldiers facing Goliath, and it adds two more requests that this verse does not make: plant our feet firmly, and give us victory over the disbelieving people. The magicians ask for no victory. Set the two side by side and you can see what a man asks for when there is still a battle to win, and what he asks for when there is not.",
            "bn": "২:২৫০ আয়াতে ঠিক একই চারটি আরবি শব্দ, রাব্বানা আফরিগ আলাইনা সাবরান, জালুতের মুখোমুখি হওয়া তালুতের সৈনিকদের মুখে। সঙ্গে তারা আরও দুটি জিনিস চায়, যা এই আয়াতে নেই: আমাদের পা দৃঢ় রাখো, আর কাফির দলের উপর আমাদের জয় দাও। যাদুকররা কোনো জয় চায় না। দুটি আয়াত পাশাপাশি রাখলে দেখা যায়, জেতার মতো লড়াই যখন সামনে থাকে মানুষ কী চায়, আর যখন থাকে না তখন কী চায়।"
          },
          {
            "en": "85:8 says of another set of persecutors that they resented the believers for nothing except that they believed in Allah, the Exalted in Might, the Praiseworthy, which is the first half of this verse in other words. 12:101 is Yusuf (AS) at the height of his fortune asking to be caused to die a Muslim and joined with the righteous, and 3:193 is the believers asking to die among the righteous. The request here is therefore not a crisis prayer only. It is what a believer wants in prosperity too.",
            "bn": "৮৫:৮ আয়াত আরেক দল নির্যাতনকারী সম্পর্কে বলে, তারা মু'মিনদের উপর চটেছিল কেবল এই কারণে যে তারা মহাপরাক্রমশালী প্রশংসিত আল্লাহর প্রতি ঈমান এনেছিল। এ তো ভিন্ন শব্দে এই আয়াতের প্রথম ভাগটাই। ১২:১০১ আয়াতে ইউসুফ (আঃ) নিজের সৌভাগ্যের চূড়ায় দাঁড়িয়ে চাইছেন মুসলিম অবস্থায় তাঁর মৃত্যু হোক আর তাঁকে সৎকর্মশীলদের সঙ্গে শামিল করা হোক। ৩:১৯৩ আয়াতে মু'মিনরা চাইছে নেক বান্দাদের সঙ্গে তাদের মৃত্যু হোক। তাই এই আয়াতের চাওয়াটা কেবল বিপদের দোয়া নয়। সচ্ছল অবস্থাতেও মু'মিন এটাই চায়।"
          },
          {
            "en": "One more belongs here because it comes from inside Pharaoh's own house. 40:28 has a believing man of Pharaoh's family, concealing his faith, asking whether they will kill a man merely for saying my Lord is Allah when he has brought clear proofs from your Lord. That is the question this verse answers from the other end. The magicians already know that the answer is yes, and they do not spend their last words arguing about it.",
            "bn": "আরও একটি আয়াত এখানে জায়গা পায়, কারণ সেটি আসে ফিরআউনের নিজের ঘরের ভেতর থেকে। ৪০:২৮ আয়াতে ফিরআউনের পরিবারের এক মু'মিন, যে নিজের ঈমান গোপন রেখেছিল, জিজ্ঞেস করে, তোমরা কি একজনকে শুধু এজন্য মেরে ফেলবে যে সে বলে আল্লাহ আমার প্রতিপালক, অথচ সে তোমাদের প্রতিপালকের পক্ষ থেকে স্পষ্ট প্রমাণ এনেছে? এই আয়াত সেই প্রশ্নের জবাবটা দেয় অন্য প্রান্ত থেকে। যাদুকররা আগেই জানে জবাবটা হ্যাঁ, আর নিজেদের শেষ কথাগুলো তারা এ নিয়ে তর্কে খরচ করে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking to Be Held",
          "bn": "ধরে রাখার আবেদন"
        },
        "p": [
          {
            "en": "The practical weight of this verse is in what the two requests leave out. Nobody asks to be spared. There is no plea for the sentence to be lifted, no offer to recant, no bargaining. They ask for the capacity to go through it and for the condition they want to be in at the end. That is a different prayer from the one most of us say in trouble, and saying it once, deliberately, changes what we are actually hoping for.",
            "bn": "এই আয়াতের কাজের ওজনটা লুকিয়ে আছে দুটি চাওয়া যা যা বাদ দিয়েছে তার ভেতরে। কেউ রেহাই চায় না। শাস্তি তুলে নেওয়ার আবেদন নেই, কথা ফিরিয়ে নেওয়ার প্রস্তাব নেই, দরকষাকষি নেই। তারা চায় এর ভেতর দিয়ে যাওয়ার সামর্থ্য, আর শেষে যে অবস্থায় থাকতে চায় সেই অবস্থা। বিপদে আমরা অধিকাংশই যে দোয়াটা করি, এ তার থেকে আলাদা। আর একবার ইচ্ছে করে এটা বলে দেখলে, আমরা আসলে কী আশা করছি সেটাই বদলে যায়।"
          },
          {
            "en": "The timing is the second lesson. They ask for patience before the punishment begins, not in the middle of it. al-Qurtubi makes the point exactly: they wanted it poured on them at the moment of the cutting and the crucifixion. Patience requested in advance is a different thing from patience scraped together under pressure, and there is a simple habit in it. Before the hospital appointment, before the meeting, before the conversation you have been dreading, ask for it in these words.",
            "bn": "দ্বিতীয় শিক্ষা সময় নিয়ে। শাস্তি শুরু হওয়ার আগেই তারা ধৈর্য চাইছে, মাঝখানে নয়। কুরতুবী কথাটা ঠিকভাবেই ধরেন: তারা চেয়েছিল কাটা আর শূলে চড়ানোর মুহূর্তেই এটা তাদের উপর ঢেলে দেওয়া হোক। আগেই চেয়ে রাখা ধৈর্য আর চাপে পড়ে কষ্টে জোগাড় করা ধৈর্য এক জিনিস নয়। আর এর ভেতরে একটা সহজ অভ্যাস আছে। হাসপাতালে যাওয়ার আগে, বৈঠকে ঢোকার আগে, যে কথাটা বলতে ভয় পাচ্ছেন সেই কথার আগে, এই শব্দগুলো দিয়েই চেয়ে নিন।"
          },
          {
            "en": "The third lesson is the speed. These men arrived that morning negotiating a fee and a place near the throne (7:113-114), and before the day was out they were asking to die in submission. Nothing in the account suggests years of preparation. They saw one thing clearly and acted the same afternoon, and that is worth remembering by anyone who has been telling himself that the change he owes will take a long time to make.",
            "bn": "তৃতীয় শিক্ষা গতি নিয়ে। এই লোকগুলো সেই সকালে এসেছিল পুরস্কার আর সিংহাসনের কাছের জায়গা নিয়ে দরকষাকষি করতে (৭:১১৩ ও ৭:১১৪)। দিন শেষ হওয়ার আগেই তারা চাইছে আত্মসমর্পণের অবস্থায় মরতে। বর্ণনার কোথাও বছরের পর বছর প্রস্তুতির কথা নেই। তারা একটা জিনিস পরিষ্কার দেখল আর সেই বিকেলেই কাজে নেমে গেল। যিনি নিজেকে বলে আসছেন যে তাঁর বদলটা হতে অনেক সময় লাগবে, তাঁর এটা মনে রাখা দরকার।"
          }
        ]
      },
      {
        "h": {
          "en": "The Du'a Itself",
          "bn": "দোয়াটিই"
        },
        "p": [
          {
            "en": "This verse does not need a supplication supplied to it, because half of it is one. Rabbana afrigh alayna sabran wa tawaffana muslimin: our Lord, pour upon us patience, and cause us to die as Muslims. It is Quranic wording, it is short enough to memorise in one sitting, and it is addressed to the only listener in the scene who could grant either half of it. Taking it as a du'a is not an interpretation; it is what the men who said it were doing.",
            "bn": "এই আয়াতের সঙ্গে বাইরে থেকে কোনো দোয়া জুড়ে দেওয়ার দরকার নেই, কারণ এর অর্ধেকটাই দোয়া। রাব্বানা আফরিগ আলাইনা সাবরান ওয়া তাওয়াফফানা মুসলিমীন, অর্থাৎ হে আমাদের প্রতিপালক, আমাদের উপর ধৈর্য ঢেলে দাও আর মুসলমান হিসেবে আমাদের মৃত্যু দাও। কথাগুলো কুরআনের, একবার বসেই মুখস্থ করা যায়, আর বলা হয়েছে সেই দৃশ্যের একমাত্র শ্রোতাকে যিনি এর দুই অর্ধেকের যেটাই চান দিতে পারেন। এটাকে দোয়া হিসেবে নেওয়া কোনো ব্যাখ্যা নয়। যারা বলেছিল, তারা এটাই করছিল।"
          },
          {
            "en": "If a longer form is wanted, 2:250 gives the same opening with two additions, and thabbit aqdamana, plant our feet firmly. Joining the two is a matter of choosing one of the two Quranic wordings, not of blending them, so recite whichever fits the hour: the fuller one when there is still something to be won, and the shorter one when what is left to ask for is steadiness and a good ending.",
            "bn": "আরও লম্বা রূপ চাইলে ২:২৫০ আয়াতে একই শুরু, সঙ্গে দুটি বাড়তি চাওয়া, যার একটি ওয়া সাব্বিত আকদামানা, অর্থাৎ আমাদের পা দৃঢ় রাখো। দুটোকে মেশানো নয়, কুরআনের দুই রূপের একটিকে বেছে নেওয়াই কাজ। তাই যে মুহূর্তের সঙ্গে যেটি মেলে সেটিই পড়ুন। যখন জেতার মতো কিছু বাকি আছে তখন লম্বাটি, আর যখন চাওয়ার মতো কেবল অবিচলতা আর সুন্দর পরিণতি বাকি, তখন ছোটটি।"
          }
        ]
      },
      {
        "h": {
          "en": "Questions to Carry",
          "bn": "সঙ্গে নেওয়ার প্রশ্ন"
        },
        "p": [
          {
            "en": "When I am in a hard place, what do I actually ask for first: that it be taken away, or that I be held steady inside it? Have I ever asked for patience in these words before a difficulty rather than in the middle of one? And if tonight were the last night, would the state I am in now be the state I asked to be taken in?",
            "bn": "কঠিন সময়ে আমি আসলে প্রথমে কী চাই: বিপদটা সরিয়ে নেওয়া হোক, নাকি বিপদের ভেতরে আমাকে দাঁড়িয়ে রাখা হোক? কষ্টের মাঝখানে নয়, কষ্ট শুরু হওয়ার আগে আমি কি কখনো এই শব্দগুলো দিয়ে ধৈর্য চেয়েছি? আর আজ রাতই যদি শেষ রাত হয়, এখন আমি যে অবস্থায় আছি, সেই অবস্থাতেই কি আমাকে নেওয়া হোক বলে চাইতাম?"
          },
          {
            "en": "What am I resented or shut out for, and is it honestly my faith, or something about my manner that I could repair without giving anything up? These men rebuilt their whole lives inside one afternoon. What have I been telling myself needs years, and what would it actually take to start it before this week is out?",
            "bn": "কোন কারণে মানুষ আমার উপর চটে আছে বা আমাকে দূরে রেখেছে? সেটা সত্যিই আমার ঈমান, নাকি আমার আচরণের এমন কিছু, যা কিছু ছাড়তে না হয়েই আমি ঠিক করে নিতে পারতাম? এই লোকগুলো এক বিকেলের ভেতর নিজেদের গোটা জীবন নতুন করে গড়ে নিয়েছিল। কোন কাজটার জন্য আমি নিজেকে বছরের হিসাব শোনাচ্ছি, আর এই সপ্তাহ শেষ হওয়ার আগেই সেটা শুরু করতে আসলে কী দরকার?"
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
