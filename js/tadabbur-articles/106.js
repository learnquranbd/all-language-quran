/**
 * Tadabbur long-form articles — surah 106.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "106:3": {
    "sections": [
      {
        "h": {
          "en": "From Favour to Command",
          "bn": "নিয়ামতের হিসাব থেকে আদেশে"
        },
        "p": [
          {
            "en": "Fa-l-ya'budu rabba hadha al-bayt: so let them worship the Lord of this House. The Arabic has four words. Fa-l-ya'budu joins the particle fa, so, to a command spoken about them rather than to them, let them worship; rabba, the Lord; hadha, this; al-bayt, the House. The verse is the third of the surah's four. Before it, 106:1 and 106:2 speak of the ilaf of Quraysh, their accustomed journeys of winter and summer. After it, 106:4 names the Lord of the House as He who fed them against hunger and secured them against fear.",
            "bn": "ফালইয়া'বুদূ রাব্বা হাযাল বাইত: সুতরাং তারা যেন এই ঘরের রবের ইবাদত করে। আরবিতে শব্দ মোট চারটি। ফালইয়া'বুদূ শব্দে ফা অক্ষরটি, যার অর্থ সুতরাং, জুড়ে আছে এমন এক আদেশের সঙ্গে যা তাদের সামনাসামনি নয়, তাদের সম্পর্কে বলা: তারা যেন ইবাদত করে। রাব্বা মানে রবকে, হাযা মানে এই, আল-বাইত মানে ঘর। সূরার চারটি আয়াতের মধ্যে এটি তৃতীয়। এর আগে ১০৬:১ ও ১০৬:২ আয়াতে আছে কুরাইশের ঈলাফের কথা, শীত ও গ্রীষ্মের যে সফরে তারা অভ্যস্ত ছিল। পরে ১০৬:৪ আয়াত ঘরের রবের পরিচয় দেয়: তিনিই ক্ষুধায় তাদের আহার দিয়েছেন, ভয় থেকে নিরাপদ রেখেছেন।"
          },
          {
            "en": "This article stays with the third verse. Ilaf and the journeys belong to 106:1 and 106:2, the feeding and the safety to 106:4; they appear here only where a commentator on this verse reaches back or forward to them. The commentary on this verse gathers around three things: the small fa at its start, the name Lord of this House, and what the command actually asks.",
            "bn": "এ লেখা তৃতীয় আয়াতটিকে ঘিরেই। ঈলাফ আর সফরের কথা ১০৬:১ ও ১০৬:২ আয়াতের, আহার আর নিরাপত্তার কথা ১০৬:৪ আয়াতের। এ আয়াতের কোনো তাফসীরকার যেখানে পেছনে বা সামনে হাত বাড়িয়েছেন, শুধু সেখানেই সেগুলো এখানে আসবে। এ আয়াতের তাফসীর জমা হয়েছে তিনটি বিষয়ে: শুরুর ছোট্ট ফা অক্ষর, এই ঘরের রব নামটি, আর আদেশটি আসলে কী চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "If Nothing Else, This",
          "bn": "আর কিছুর জন্য না হলেও"
        },
        "p": [
          {
            "en": "Al-Qurtubi explains why the fa is there at all. It entered, he says, because the speech carries the sense of a condition, and he paraphrases it: if nothing else, then let them worship Him for their ilaf. Allah's favours upon them cannot be counted; so if they will not worship Him for the rest of His favours, let them worship Him for the sake of this particular favour, which is plain to see. On his reading the so sets a floor beneath them: at the very least, this.",
            "bn": "ফা অক্ষরটি এখানে কেন এল, কুরতুবী তা ব্যাখ্যা করেন। তাঁর মতে কথার ভেতরে শর্তের ভাব আছে, সে কারণেই ফা এসেছে। তিনি অর্থটা এভাবে খুলে বলেন: আর কিছুর জন্য না হলেও অন্তত তাদের ঈলাফের জন্য তারা তাঁর ইবাদত করুক। তাদের উপর আল্লাহর নিয়ামত গুনে শেষ করা যায় না। বাকি সব নিয়ামতের জন্য যদি তারা তাঁর ইবাদত না-ও করে, তবে এই বিশেষ নিয়ামতটির খাতিরে করুক, যা চোখের সামনেই স্পষ্ট। তাঁর পাঠে এই সুতরাং যেন নিচের সীমাটা বেঁধে দেয়: কমপক্ষে এটুকু।"
          },
          {
            "en": "The others read the fa as thanks following a favour. Ibn Kathir opens the verse with a turn: then He guided them to gratitude for this immense favour. As-Sa'di states the favour first, in his own words: Allah destroyed whoever intended them harm, and made the sanctuary and its people great in the hearts of the Arabs, so that they respected them and did not obstruct them on any journey they wished to make. For this, he says, Allah commanded them to give thanks. The Muyassar begins its gloss with the same verb: so let them give thanks, and let them worship.",
            "bn": "অন্যরা ফা-কে পড়েন নিয়ামতের পরে শুকরিয়ার দাবি হিসেবে। ইবন কাসীর আয়াতটি শুরু করেন এক মোড় দিয়ে: তারপর আল্লাহ এই মহান নিয়ামতের শুকরিয়ার দিকে তাদের পথ দেখালেন। সা'দী আগে নিজের ভাষায় নিয়ামতটির বর্ণনা দেন। যারা তাদের ক্ষতি করতে চেয়েছিল, আল্লাহ তাদের ধ্বংস করেছেন। আরবদের অন্তরে হারাম আর তার বাসিন্দাদের মর্যাদা বাড়িয়ে দিয়েছেন। ফলে আরবরা তাদের সম্মান করত, তারা যে সফরেই যেতে চাইত, কেউ পথ আটকাত না। এ কারণেই, সা'দী বলেন, আল্লাহ তাদের শুকরিয়ার আদেশ দিলেন। মুয়াসসারের ব্যাখ্যাও শুরু হয় সেই ক্রিয়া দিয়ে: সুতরাং তারা শুকরিয়া আদায় করুক, আর ইবাদত করুক।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Opening Lam Hangs On",
          "bn": "শুরুর লাম কিসের সঙ্গে বাঁধা"
        },
        "p": [
          {
            "en": "The fa cannot be read apart from the lam that opens the surah, li-ilafi, for the ilaf, and the commentators on 106:1 disagree over what that lam hangs on. Al-Qurtubi, there, reports a view that it is attached to this verse: let these people worship the Lord of this House for their ilaf of the winter and summer journey. He adds al-Khalil's paraphrase, as if Allah had said: Allah made Quraysh accustomed, so let them worship the Lord of this House.",
            "bn": "সূরার শুরুর লাম, লি-ঈলাফি, অর্থাৎ ঈলাফের জন্য, তাকে বাদ দিয়ে ফা-কে পড়া যায় না। আর ১০৬:১ আয়াতের তাফসীরে এই লাম কিসের সঙ্গে বাঁধা, তা নিয়ে মতভেদ আছে। কুরতুবী সেখানে একটি মত উল্লেখ করেন: লামটি এই আয়াতের সঙ্গে যুক্ত। অর্থ দাঁড়ায়, শীত ও গ্রীষ্মের সফরে তাদের ঈলাফের জন্য এরা যেন এই ঘরের রবের ইবাদত করে। সঙ্গে খলীলের ব্যাখ্যাও দেন, যেন আল্লাহ বলছেন: আল্লাহ কুরাইশকে অভ্যস্ত করেছেন, সুতরাং তারা এই ঘরের রবের ইবাদত করুক।"
          },
          {
            "en": "Al-Qurtubi meets the obvious objection. What comes after a fa does not usually govern what comes before it; here, he says, it does, because this fa is extra and not a conjunction, as in zaydan fa-drib, strike Zayd. He then lists two further views without settling between them: that the lam is a lam of wonder, which he gives from al-Kisa'i and al-Akhfash, and that it carries the sense of ila, towards.",
            "bn": "কুরতুবী একটি স্বাভাবিক আপত্তিরও জবাব দেন। ফা-এর পরের অংশ সাধারণত তার আগের অংশের উপর কাজ করে না। এখানে করে, তিনি বলেন, কারণ এই ফা অতিরিক্ত, সংযোজক নয়। যেমন আরবরা বলে, যায়দান ফাদরিব, যায়দকে মারো। এরপর তিনি আরও দুটি মত উল্লেখ করেন, কোনোটিকে চূড়ান্ত না করে। একটি হলো, এটি বিস্ময়ের লাম, মতটি তিনি কিসাঈ ও আখফাশের নামে দেন। অন্যটি হলো, লামটি ইলা অর্থাৎ দিকে অর্থ বহন করে।"
          },
          {
            "en": "At-Tabari, on 106:1, sets out the same disagreement and takes a side. He reports a Basran grammarian who attached the lam to the last verse of the preceding surah, and a Kufan grammarian who read it as Allah bidding His Prophet ﷺ to wonder at His favours on Quraysh, then saying, with this verse as the evidence: let them not be distracted by that from faith and from following you. At-Tabari's own preference is the lam of wonder: wonder at the ilaf of Quraysh, and at their leaving the worship of the Lord of this House; so let them worship the Lord of this House.",
            "bn": "তাবারী ১০৬:১ আয়াতের আলোচনায় একই মতভেদ তুলে ধরেন এবং একটি পক্ষ নেন। তিনি বসরার এক ব্যাকরণবিদের কথা আনেন, যিনি লামটিকে আগের সূরার শেষ আয়াতের সঙ্গে জুড়েছেন। কুফার এক ব্যাকরণবিদের কথাও আনেন। তাঁর পাঠে আল্লাহ নবী ﷺ-কে কুরাইশের উপর তাঁর নিয়ামত দেখে বিস্মিত হতে বলছেন, তারপর বলছেন: তারা যেন এসবে ব্যস্ত হয়ে ঈমান আর আপনার অনুসরণ ভুলে না যায়। প্রমাণ হিসেবে তিনি এই আয়াতটিই দেখান। তাবারীর নিজের পছন্দ বিস্ময়ের লাম: কুরাইশের ঈলাফ দেখে বিস্মিত হও, আর দেখো, এই ঘরের রবের ইবাদত তারা ছেড়ে দিয়েছে। সুতরাং তারা এই ঘরের রবের ইবাদত করুক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Elephant Before the Journeys",
          "bn": "সফরের আগে হাতির ঘটনা"
        },
        "p": [
          {
            "en": "Ibn Kathir's abridged English opens this surah by noting that the Companions wrote the basmala on the line between it and the surah before it, even though it is directly related to that surah, as Muhammad ibn Ishaq and Abd ar-Rahman ibn Zayd ibn Aslam both clarified. Their sense, as he gives it: We prevented the Elephant from entering Makkah and destroyed its people in order to gather the Quraysh, to unite them and bring them together safely in their city. Read that way, the favour this verse answers begins with the Elephant at 105:1.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এ সূরার শুরুতে জানায়, সাহাবিরা এ সূরা আর আগের সূরার মাঝখানের লাইনে বিসমিল্লাহ লিখেছিলেন, যদিও দুটির মধ্যে সরাসরি যোগ আছে। মুহাম্মাদ ইবন ইসহাক ও আবদুর রহমান ইবন যায়দ ইবন আসলাম দুজনেই সে যোগের কথা স্পষ্ট করেছেন। তাঁর বর্ণনায় তাঁদের অর্থটা এই: আমি হাতিকে মক্কায় ঢুকতে দিইনি, তার লোকজনকে ধ্বংস করেছি, যাতে কুরাইশকে একত্র রাখি, নিজেদের শহরে নিরাপদে মিলিয়ে রাখি। এভাবে পড়লে এ আয়াত যে নিয়ামতের জবাব, তার শুরু ১০৫:১ আয়াতের হাতির ঘটনায়।"
          },
          {
            "en": "Al-Qurtubi, on 106:1, reports the connected reading with names. Al-Farra' held that this surah is joined to the previous: Allah reminded the people of Makkah of His great favour, then said for the ilaf of Quraysh, meaning, We did that as a favour from Us to Quraysh. Ubayy ibn Ka'b counted the two surahs as a single surah, with no separation in his copy. Amr ibn Maymun al-Awdi reported praying maghrib behind Umar ibn al-Khattab, who recited both in the second rak'a.",
            "bn": "কুরতুবী ১০৬:১ আয়াতের আলোচনায় যুক্ত পাঠটি নাম ধরে উল্লেখ করেন। ফাররার মতে এ সূরা আগের সূরার সঙ্গে জোড়া। আল্লাহ মক্কাবাসীকে তাঁর বড় নিয়ামতের কথা মনে করিয়ে দিয়ে বললেন, কুরাইশের ঈলাফের জন্য, অর্থাৎ কুরাইশের প্রতি অনুগ্রহ করেই আমি তা করেছি। উবাই ইবন কা'ব (রাঃ) দুটি সূরাকে একটিই গণ্য করতেন, তাঁর মুসহাফে দুটির মাঝে কোনো বিভাজন ছিল না। আমর ইবন মাইমূন আল-আওদী জানান, তিনি উমর ইবনুল খাত্তাব (রাঃ)-এর পেছনে মাগরিব পড়েছিলেন, আর দ্বিতীয় রাকাতে উমর (রাঃ) দুটিই পড়েছিলেন।"
          },
          {
            "en": "Against this stands the reading of separation. Al-Qurtubi gives it too: the basmala between the surahs marks where a surah ends and the next begins. At-Tabari presses it hardest. If li-ilafi completed 105:5, he argues, the earlier surah would not be complete without it, and the consensus of all Muslims that the two are complete surahs, each separate from the other, shows that view to be unsound. Both sides still tie this verse's command to a favour. Where they part is over the place in the text at which that favour is first stated.",
            "bn": "এর বিপরীতে আছে আলাদা পাঠের মত। কুরতুবী সেটিও উল্লেখ করেন: দুই সূরার মাঝে বিসমিল্লাহ বলে দেয়, এক সূরা এখানে শেষ, পরেরটি শুরু। তাবারী এ মতের পক্ষে সবচেয়ে জোরালো। তাঁর যুক্তি, লি-ঈলাফি যদি ১০৫:৫ আয়াতের বাক্য পূর্ণ করত, তবে আগের সূরাটি এ ছাড়া পূর্ণ হতো না। অথচ সব মুসলমান একমত যে দুটি আলাদা ও পূর্ণাঙ্গ সূরা। এই ঐকমত্যই দেখিয়ে দেয়, ওই মত টেকে না। তবু দুই পক্ষই এ আয়াতের আদেশকে কোনো নিয়ামতের সঙ্গে বাঁধে। তাদের পথ আলাদা হয় শুধু এ প্রশ্নে যে নিয়ামতটির কথা প্রথম কোথায় এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A House Pointed To",
          "bn": "যে ঘরের দিকে ইশারা"
        },
        "p": [
          {
            "en": "Rabba hadha al-bayt: the Lord of this House. On which house is meant, the texts read for this verse do not differ. At-Tabari says that by the House is meant the Ka'ba, and gives the same gloss from Ibn Abbas through Sa'id ibn Jubayr: the Ka'ba. Al-Baghawi's whole comment on the verse is a short sentence that ends with the Ka'ba. Al-Qurtubi says simply that the House is the Ka'ba, and the Muyassar names it the same way, as a gloss set between dashes inside its paraphrase.",
            "bn": "রাব্বা হাযাল বাইত: এই ঘরের রব। কোন ঘরের কথা বলা হচ্ছে, এ নিয়ে এ আয়াতের যেসব তাফসীর পড়া হয়েছে, তাতে কোনো ভিন্নমত নেই। তাবারী বলেন, ঘর মানে কাবা। ইবন আব্বাস (রাঃ) থেকে সাঈদ ইবন জুবাইরের সূত্রে একই ব্যাখ্যা আনেন: কাবা। আয়াতটি নিয়ে বাগাভীর পুরো মন্তব্য একটিমাত্র ছোট বাক্য, আর সে বাক্য শেষ হয় কাবা শব্দে। কুরতুবী সোজা বলেন, ঘর হলো কাবা। মুয়াসসারও ব্যাখ্যার ভেতরে বন্ধনীর মতো করে একই নাম বসিয়ে দেয়।"
          },
          {
            "en": "Hadha, this, is a pointing word, and at-Tabari records a report in which the pointing is literal. With his chain from Ya'qub ibn Ibrahim through Hushaym and Mughira to Ibrahim, he relates that Umar ibn al-Khattab prayed maghrib in Makkah and recited li-ilafi Quraysh, and when he reached so let them worship the Lord of this House, he pointed with his hand to the House. At-Tabari gives it as a report about Umar's recitation, and attaches no grading to it. It is not a hadith of the Prophet ﷺ.",
            "bn": "হাযা, অর্থাৎ এই, ইশারার শব্দ। তাবারী এমন এক বর্ণনা উল্লেখ করেন, যেখানে ইশারাটা হাত দিয়েই করা। ইয়াকুব ইবন ইবরাহীম থেকে হুশাইম ও মুগীরা হয়ে ইবরাহীম পর্যন্ত নিজের সনদে তিনি বর্ণনা করেন: উমর ইবনুল খাত্তাব (রাঃ) মক্কায় মাগরিবের নামাজে লি-ঈলাফি কুরাইশ পড়লেন। যখন সুতরাং তারা এই ঘরের রবের ইবাদত করুক পর্যন্ত পৌঁছালেন, হাত দিয়ে ঘরের দিকে ইশারা করলেন। তাবারী একে উমর (রাঃ)-এর তিলাওয়াত সম্পর্কে একটি বর্ণনা হিসেবেই এনেছেন, কোনো মান নির্ণয় করেননি। এটি নবী ﷺ-এর হাদীস নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Named as Lord of the House",
          "bn": "ঘরের নামে রবের পরিচয়"
        },
        "p": [
          {
            "en": "Why does Allah make Himself known to them here as Lord of this House, rather than by another of His names? Al-Qurtubi gives two aspects. The first: they had idols, so He distinguishes Himself from them. The second: through the House they were honoured above the rest of the Arabs, so He mentioned it to them as a reminder of His favour. The first draws a line between the Lord and their idols; the second recalls where their standing came from.",
            "bn": "আল্লাহ এখানে নিজের পরিচয় দিলেন এই ঘরের রব বলে, অন্য কোনো নামে নয়। কেন? কুরতুবী দুটি দিক দেখান। প্রথমত, তাদের মূর্তি ছিল, তাই আল্লাহ সেগুলো থেকে নিজেকে আলাদা করে চেনালেন। দ্বিতীয়ত, এই ঘরের কারণেই বাকি আরবদের উপর তারা মর্যাদা পেয়েছিল, তাই নিজের নিয়ামত মনে করিয়ে দিতে আল্লাহ ঘরের কথা তুললেন। প্রথম ব্যাখ্যা রব আর তাদের মূর্তির মাঝে রেখা টেনে দেয়। দ্বিতীয়টি মনে করিয়ে দেয়, তাদের মর্যাদা এসেছিল কোথা থেকে।"
          },
          {
            "en": "The Muyassar and Ma'arif al-Qur'an lean towards the second aspect. The Muyassar calls the House the Ka'ba in which they took pride, and through which they gained honour and elevation. Ma'arif al-Qur'an says that out of many attributes of Allah, the Lord of this House is singled out, because it was this House that became the source and fountain of all blessings for them. On both readings the name does the work of an argument: the Lord who gave them the House is the Lord they owe.",
            "bn": "মুয়াসসার আর মাআরিফুল কুরআন দ্বিতীয় দিকের দিকে ঝোঁকে। মুয়াসসার বলে, এ সেই কাবা, যা নিয়ে তারা গর্ব করত, যার কারণে তারা সম্মান আর উচ্চ মর্যাদা পেয়েছিল। মাআরিফুল কুরআন বলে, আল্লাহর বহু গুণের মধ্যে এখানে এই ঘরের রব বেছে নেওয়া হয়েছে, কারণ এই ঘরই ছিল তাদের সব নিয়ামতের উৎস ও ঝরনাধারা। দুই পাঠেই নামটি নিজেই এক যুক্তি হয়ে দাঁড়ায়। যে রব তাদের এই ঘর দিয়েছেন, ইবাদত পাওনা তাঁরই।"
          },
          {
            "en": "Ibn Kathir joins the name to what the House gave them: let them single Him out in worship, as He made for them a safe sanctuary and a sacred House. He then cites 27:91: I have been commanded only to worship the Lord of this city, Who has sanctified it and to Whom belongs everything. The two phrases share a shape: Lord, then this, then a place. In his abridged English, on their life in the city, he also cites 29:67: We have made it a secure sanctuary, while men are being snatched away from all around them.",
            "bn": "ইবন কাসীর নামটিকে জুড়ে দেন ঘর থেকে তারা যা পেয়েছে, তার সঙ্গে। তারা যেন ইবাদতে তাঁকেই একক করে, যেমন তিনি তাদের জন্য নিরাপদ হারাম আর সম্মানিত ঘর বানিয়েছেন। তারপর তিনি ২৭:৯১ আয়াত উদ্ধৃত করেন: আমাকে তো শুধু এই নগরীর রবের ইবাদত করার আদেশ দেওয়া হয়েছে, যিনি একে সম্মানিত করেছেন, আর সব কিছু তাঁরই। দুই বাক্যের গড়ন একই: রব, তারপর এই, তারপর একটি জায়গা। সংক্ষিপ্ত ইংরেজি তাফসীরে শহরে তাদের নিরাপদ বসবাসের প্রসঙ্গে তিনি ২৯:৬৭ আয়াতও আনেন: আমি একে নিরাপদ হারাম বানিয়েছি, অথচ তাদের চারপাশ থেকে মানুষকে ছিনিয়ে নেওয়া হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Alone, at Home, by Habit",
          "bn": "একক, ঘরে থেকে, অভ্যাসে"
        },
        "p": [
          {
            "en": "Most of the commentators read the command as worship offered to Him alone. Ibn Kathir: let them single Him out in worship. As-Sa'di: let them affirm His oneness and make their worship sincerely His. The Muyassar joins both: let them single Him out and make worship purely His. Al-Qurtubi says Allah commanded them to worship Him and affirm His oneness, for the sake of their ilaf of the two journeys. Ibn Kathir's abridged English, closing the surah, states the other side of it: they should not worship any idol, rival or statue besides Him.",
            "bn": "বেশির ভাগ তাফসীরকার আদেশটিকে পড়েন একমাত্র তাঁর জন্য নিবেদিত ইবাদত হিসেবে। ইবন কাসীর বলেন: তারা যেন ইবাদতে তাঁকেই একক করে। সা'দী বলেন: তারা যেন তাঁর তাওহীদ মেনে নেয়, ইবাদত খাঁটিভাবে তাঁর জন্যই করে। মুয়াসসার দুটোকে একসঙ্গে আনে: তাঁকেই একক করুক, ইবাদত তাঁর জন্যই খাঁটি করুক। কুরতুবী বলেন, দুই সফরে তাদের ঈলাফের খাতিরে আল্লাহ তাদের তাঁর ইবাদত আর তাওহীদের আদেশ দিয়েছেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর সূরার শেষে উল্টো দিকটাও বলে দেয়: তাঁর পাশাপাশি তারা কোনো মূর্তি, প্রতিদ্বন্দ্বী বা প্রতিমার পূজা করবে না।"
          },
          {
            "en": "At-Tabari's own gloss puts a place into the command. He paraphrases: let them remain in their place and their homeland of Makkah, and let them worship the Lord of this House. Al-Qurtubi reports the same sense from Ikrimah: Quraysh had grown accustomed to a journey to Busra and a journey to Yemen, so it was said to them, let them worship the Lord of this House, meaning, let them stay in Makkah. On this reading the command turns them from the road back to the House.",
            "bn": "তাবারীর নিজের ব্যাখ্যায় আদেশের ভেতরে একটি জায়গাও আছে। তাঁর ভাষায়: তারা যেন নিজেদের জায়গায়, নিজেদের ভূমি মক্কায় থেকে যায়, আর এই ঘরের রবের ইবাদত করে। কুরতুবী ইকরিমা থেকে একই অর্থ আনেন। কুরাইশ বুসরার দিকে এক সফরে আর ইয়েমেনের দিকে আরেক সফরে অভ্যস্ত হয়ে পড়েছিল। তখন তাদের বলা হলো, তারা এই ঘরের রবের ইবাদত করুক, অর্থাৎ মক্কায় থেকে যাক। এ পাঠে আদেশটি তাদের পথ থেকে ঘরের দিকে ফিরিয়ে আনে।"
          },
          {
            "en": "A further reading carries the word ilaf itself into the command. At-Tabari introduces it as the view of some, and gives it from Ibn Abbas through Ikrimah: they were commanded to become accustomed to the worship of the Lord of this House, as they were accustomed to the journey of winter and summer. Al-Qurtubi reports the same, introduced with it was said. Here worship is to become what the journeys already were, a settled habit. The texts set these three readings side by side, and this article does not choose between them.",
            "bn": "আরেকটি পাঠ ঈলাফ শব্দটিকেই আদেশের ভেতরে নিয়ে আসে। তাবারী একে কারও কারও মত হিসেবে উল্লেখ করেন এবং ইকরিমার সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: শীত ও গ্রীষ্মের সফরে যেমন তারা অভ্যস্ত ছিল, তেমনি এই ঘরের রবের ইবাদতে অভ্যস্ত হতে তাদের আদেশ দেওয়া হয়েছে। কুরতুবীও একই কথা আনেন, বলা হয়েছে শব্দে শুরু করে। এখানে ইবাদতকে হয়ে উঠতে হবে সেই জিনিস, সফর যা আগে থেকেই ছিল: জমে যাওয়া এক অভ্যাস। তাফসীরগুলো এই তিনটি পাঠ পাশাপাশি রেখেছে, আর এ লেখা তাদের কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Safety Given, Safety Withdrawn",
          "bn": "নিরাপত্তা দেওয়া, ফিরিয়ে নেওয়া"
        },
        "p": [
          {
            "en": "Ibn Kathir's abridged English draws a consequence from the command. Whoever accepts it, Allah will give him safety in both this life and the Hereafter; whoever disobeys Him, He will remove both from him. He cites 16:112 and 16:113: a township that dwelt secure and well-content, its provision coming to it in abundance from every place, which denied the favours of Allah and was made to taste hunger and fear; a Messenger had come to them from among themselves, and they denied him. He leaves the township unnamed, and so does this article.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর আদেশটি থেকে একটি পরিণতির কথা টানে। যে এ আদেশ মেনে নেয়, আল্লাহ তাকে দুনিয়া ও আখিরাত দুই জায়গাতেই নিরাপত্তা দেবেন। আর যে তাঁর নাফরমানি করে, দুটোই তার কাছ থেকে তুলে নেবেন। তিনি ১৬:১১২ ও ১৬:১১৩ আয়াত উদ্ধৃত করেন। এক জনপদ নিরাপদে, নিশ্চিন্তে ছিল, চারদিক থেকে প্রচুর রিজিক আসত। তারপর তারা আল্লাহর নিয়ামতের অকৃতজ্ঞতা করল, আর আল্লাহ তাদের ক্ষুধা ও ভয়ের স্বাদ চাখালেন। তাদের মধ্য থেকেই এক রাসূল তাদের কাছে এসেছিলেন, তারা তাঁকে মিথ্যা বলেছিল। জনপদটির নাম তিনি বলেননি, এ লেখাও বলছে না।"
          },
          {
            "en": "This verse addresses Quraysh, a people named in the text, and the verses Ibn Kathir cites describe what they describe. They license nothing against any living person or community, and they hand no one a verdict to pass on a tribe, a city or a people today. The texts read for this verse attach no Prophetic hadith to it and give no occasion of revelation for it. The only report on the verse itself is the account of Umar pointing to the House, which at-Tabari gives without a grading.",
            "bn": "এ আয়াত কুরাইশকে সম্বোধন করে, যাদের নাম কুরআনেই এসেছে। আর ইবন কাসীর যে আয়াতগুলো উদ্ধৃত করেন, সেগুলো শুধু তা-ই বর্ণনা করে, যা সেখানে বর্ণিত। এগুলো কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি দেয় না। আজকের কোনো গোত্র, শহর বা জাতির উপর রায় দেওয়ার অধিকারও কাউকে দেয় না। এ আয়াতের যেসব তাফসীর পড়া হয়েছে, তাতে নবী ﷺ-এর কোনো হাদীস এর সঙ্গে যুক্ত নেই, নাজিলের কোনো প্রেক্ষাপটও নেই। আয়াতটি নিয়ে একমাত্র বর্ণনা হলো উমর (রাঃ)-এর ঘরের দিকে ইশারার ঘটনা, যা তাবারী কোনো মান নির্ণয় ছাড়াই এনেছেন।"
          }
        ]
      }
    ]
  }
});
