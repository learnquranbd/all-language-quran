/**
 * Tadabbur long-form articles — surah 91.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "91:1": {
    "sections": [
      {
        "h": {
          "en": "The Surah's First Light",
          "bn": "সূরার প্রথম আলো"
        },
        "p": [
          {
            "en": "Wa-sh-shamsi wa duhaha: by the sun and its brightness. Two Arabic words open Surah ash-Shams, which is named for the first of them. Al-Qurtubi records that it is Makki by agreement and fifteen verses long, and Ibn Kathir and al-Baghawi also mark it as Makki. The verse is the first of seven oaths, 91:1 to 91:7. Ma'arif al-Qur'an says that Allah swears in those verses by objects and phenomena, which gives these creations an added significance and draws man's attention to them.",
            "bn": "ওয়াশ শামসি ওয়া দুহাহা: শপথ সূর্যের আর তার উজ্জ্বল কিরণের। মাত্র দুটি আরবি শব্দে সূরা আশ-শামসের শুরু, আর সূরার নামও এসেছে প্রথম শব্দটি থেকে। কুরতুবী লিখেছেন, সূরাটি সর্বসম্মতভাবে মাক্কী, আয়াত পনেরোটি। ইবন কাসীর ও বাগাভীও একে মাক্কী বলেছেন। ৯১:১ থেকে ৯১:৭ পর্যন্ত সাতটি শপথ পরপর এসেছে, এটি তার প্রথমটি। মাআরিফুল কুরআন বলে, এ আয়াতগুলোতে আল্লাহ নানা বস্তু ও প্রাকৃতিক ঘটনার শপথ করেছেন। এতে এসব সৃষ্টির মর্যাদা বাড়ে, আর মানুষের মনোযোগ সেদিকে টেনে আনা হয়।"
          },
          {
            "en": "At-Tabari states the sense of the clause before he discusses any word in it: an oath that our Lord swore by the sun and its duha, and the meaning of the speech is, I swear by the sun, and by the duha of the sun. That paraphrase settles the small pronoun at the end of duhaha: the -ha returns to the sun itself. The Muyassar reads it the same way, in a single line: Allah swore by the sun, and its daytime, and its shining at the forenoon.",
            "bn": "কোনো শব্দ নিয়ে আলোচনায় যাওয়ার আগে তাবারী গোটা বাক্যের অর্থটা বলে দেন: এ হলো আমাদের রবের শপথ, সূর্যের আর তার দুহার। কথাটার মানে দাঁড়ায়: আমি শপথ করছি সূর্যের, আর সূর্যের দুহার। এই ব্যাখ্যাতেই দুহাহা শব্দের শেষের ছোট্ট সর্বনামটির মীমাংসা হয়ে যায়: শেষের 'হা' ফিরেছে সূর্যের দিকেই। মুয়াসসারও এক লাইনে একই কথা বলে: আল্লাহ শপথ করেছেন সূর্যের, তার দিনের, আর পূর্বাহ্ণে তার ঝলমলে আলোর।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Light, or Its Whole Day",
          "bn": "তার আলো, নাকি গোটা দিন"
        },
        "p": [
          {
            "en": "Then at-Tabari reports that the people of interpretation differed over wa-duhaha. Some said the meaning is the sun and the daytime, holding that the duha is the whole of the day; with his chain to Qatada he gives the gloss, this daytime. Others said it means its light; with his chains through Ibn Abi Najih to Mujahid he gives the one word, its light. The two glosses are not far apart, but they are not the same: one names a stretch of time, the other the thing that fills it.",
            "bn": "এরপর তাবারী জানান, দুহাহা শব্দের অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। কারও মতে এর মানে সূর্য আর দিন, তাঁদের কাছে দুহা মানে পুরো দিনটাই। নিজের সনদে তিনি কাতাদার ব্যাখ্যা আনেন: এই দিন। অন্যরা বলেছেন, এর মানে সূর্যের আলো। ইবন আবী নাজীহ হয়ে মুজাহিদ পর্যন্ত পৌঁছানো সনদে তিনি একটিমাত্র শব্দ আনেন: তার আলো। দুই ব্যাখ্যা খুব দূরের নয়, আবার এক জিনিসও নয়। একটি বলছে সময়ের একটা পরিসরের কথা, অন্যটি বলছে সেই জিনিসের কথা, যা ওই সময়টাকে ভরে রাখে।"
          },
          {
            "en": "At-Tabari then gives his own verdict. The correct thing to say, he writes, is that Allah swore by the sun and its daytime, because the manifest light of the sun is the daytime. He does not discard either report; he joins them, since the day is the sun's light made visible. Ibn Kathir, in his Arabic tafsir, repeats Mujahid, Qatada and Ibn Jarir's verdict in nearly the same words, and the English abridgement of Ibn Kathir does likewise. For these two the duha is daylight, owed to the sun.",
            "bn": "তারপর তাবারী নিজের মত জানান। তাঁর ভাষায়, সঠিক কথা হলো: আল্লাহ শপথ করেছেন সূর্যের আর তার দিনের, কারণ সূর্যের প্রকাশ্য আলোই তো দিন। কোনো বর্ণনাই তিনি বাদ দেন না, বরং দুটিকে মিলিয়ে দেন। দিন তো সূর্যেরই আলো, যা চোখে দেখা যায়। ইবন কাসীর তাঁর আরবি তাফসীরে মুজাহিদ, কাতাদা আর ইবন জারীরের এই সিদ্ধান্ত প্রায় একই শব্দে তুলে দেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও তা-ই আছে। এই দুজনের কাছে দুহা মানে দিনের আলো, যার উৎস সূর্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Splendour, Warmth and Spreading",
          "bn": "দীপ্তি, উষ্ণতা আর বিস্তার"
        },
        "p": [
          {
            "en": "Al-Qurtubi gathers more glosses than anyone else consulted here. Mujahid: its light and its shining. Qatada: its splendour, which differs from the report at-Tabari carries from Qatada, so the two transmissions are kept side by side here as each mufassir gives them. Al-Suddi: its heat. Ad-Dahhak from Ibn Abbas: He placed light in it and made it hot. Al-Yazidi: its spreading out. Each word catches a different side of the same morning sun.",
            "bn": "এখানে যত তাফসীর দেখা হয়েছে, তার মধ্যে সবচেয়ে বেশি ব্যাখ্যা জড়ো করেছেন কুরতুবী। মুজাহিদ বলেছেন: তার আলো ও ঝলমলে দীপ্তি। কাতাদা বলেছেন: তার সৌন্দর্যের ছটা। তাবারী কাতাদা থেকে যা এনেছেন, এটা তার থেকে আলাদা। তাই দুই বর্ণনাই এখানে পাশাপাশি রাখা হলো, যে মুফাসসির যেভাবে এনেছেন সেভাবে। সুদ্দী বলেছেন: তার তাপ। দাহহাক ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন: আল্লাহ তাতে আলো রেখেছেন আর তাকে উত্তপ্ত করেছেন। ইয়াযীদী বলেছেন: তার ছড়িয়ে পড়া। প্রতিটি শব্দ সকালের একই সূর্যের আলাদা একটা দিক ধরেছে।"
          },
          {
            "en": "Al-Qurtubi adds one wider reading, introduced with it was said and attributed to al-Mawardi: the duha is whatever of every created thing becomes visible by the sun, so that the oath would be by the sun and by all the creatures of the earth together. He then records al-Farra's view that the duha is the daytime, like Qatada's, and states that the meaning known among the Arabs is that the duha is the whole day, because the sun's light lasts through it.",
            "bn": "কুরতুবী আরও একটি বিস্তৃত ব্যাখ্যা আনেন 'বলা হয়েছে' কথাটি দিয়ে, আর জানান যে মাওয়ার্দী এটি বর্ণনা করেছেন। এ মতে দুহা হলো সূর্যের আলোয় প্রকাশ পাওয়া সব সৃষ্টি। তাহলে শপথটা হবে সূর্যের, আর তার সঙ্গে পৃথিবীর সব সৃষ্টির। এরপর তিনি ফাররার মত উল্লেখ করেন: দুহা মানে দিন, কাতাদার কথার মতো। তিনি আরও বলেন, আরবদের কাছে পরিচিত অর্থ হলো দুহা মানে পুরো দিন। কারণ সারা দিন ধরেই সূর্যের আলো টিকে থাকে।"
          },
          {
            "en": "Al-Baghawi is briefer. Mujahid and al-Kalbi: its light. The duha, he explains, is when the sun rises and its light becomes clear. Qatada: the whole day. Muqatil: its heat. As-Sa'di gives a two-part gloss: its light, and the benefit that issues from it. So the tafsirs consulted here name, between them, light, shining, splendour, heat, spreading, the clearing of the light after sunrise, the whole day, and the benefit the light brings. This article lists them and chooses none.",
            "bn": "বাগাভী সংক্ষেপে বলেন। মুজাহিদ ও কালবীর মতে: তার আলো। তিনি ব্যাখ্যা করেন, দুহা হলো সেই সময়, যখন সূর্য ওঠে আর তার আলো পরিষ্কার হয়ে আসে। কাতাদার মতে: পুরো দিন। মুকাতিলের মতে: তার তাপ। সা'দী দুই ভাগে অর্থ করেন: তার আলো, আর তা থেকে আসা উপকার। সব মিলিয়ে এই তাফসীরগুলো যা যা বলেছে: আলো, দীপ্তি, সৌন্দর্যের ছটা, তাপ, ছড়িয়ে পড়া, সূর্য ওঠার পর আলোর পরিষ্কার হয়ে আসা, পুরো দিন, আর আলোর উপকার। এ লেখা সবগুলো তুলে ধরে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Heat, or the Gentle Forenoon",
          "bn": "তাপ, নাকি কোমল পূর্বাহ্ণ"
        },
        "p": [
          {
            "en": "The reading of duha as heat has a Qur'anic witness in two of the tafsirs. Al-Baghawi, reporting Muqatil, compares the phrase in Surah Ta-Ha, wa la tadha, at 20:119, which he explains as: the heat will not harm you. Al-Qurtubi says that those who held the duha to be the sun's heat drew on the same verse. He then joins the two sides: whoever said the duha is the sun's light or its heat should note that the sun's light is never without its heat.",
            "bn": "দুহা মানে তাপ, এ মতের পক্ষে দুটি তাফসীর কুরআনেরই একটি আয়াতকে সাক্ষী হিসেবে আনে। বাগাভী মুকাতিলের মত উল্লেখ করে সূরা ত্বা-হার ২০:১১৯ আয়াতের 'ওয়া লা তাদহা' কথাটির সঙ্গে তুলনা করেন। তাঁর ব্যাখ্যায় এর মানে: রোদের তাপ তোমাকে কষ্ট দেবে না। কুরতুবী বলেন, যাঁরা দুহাকে সূর্যের তাপ বলেছেন, তাঁরা এই আয়াত থেকেই দলিল নিয়েছেন। তারপর তিনি দুই পক্ষকে মিলিয়ে দেন। কেউ দুহাকে সূর্যের আলো বলুন বা তাপ, মনে রাখতে হবে যে সূর্যের আলো কখনো তার তাপ ছাড়া আসে না।"
          },
          {
            "en": "Ma'arif al-Qur'an puts the stress elsewhere. The word duha, it says, is that part of the day when the sun rises early in the morning and goes up slightly higher, and its light spreads on the earth; man observes it near to himself and observes it fully on account of lack of heat. For Ma'arif, then, the forenoon is the hour of full light and little heat, while al-Suddi and Muqatil take the word to name the heat itself. The difference is kept here as a difference.",
            "bn": "মাআরিফুল কুরআন জোর দেয় অন্য জায়গায়। তার ব্যাখ্যায় দুহা হলো দিনের সেই অংশ, যখন সূর্য ভোরে উঠে খানিকটা ওপরে চড়ে আর তার আলো পৃথিবীতে ছড়িয়ে পড়ে। মানুষ তখন সূর্যকে নিজের কাছাকাছি দেখে, আর তাপ কম থাকায় পুরোপুরি দেখতে পায়। মাআরিফের কাছে তাই পূর্বাহ্ণ মানে আলো পূর্ণ, তাপ অল্প। অথচ সুদ্দী ও মুকাতিলের কাছে শব্দটা তাপকেই বোঝায়। এই পার্থক্যটা এখানে পার্থক্য হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Rooted in Sunlight",
          "bn": "যে শব্দের শিকড় রোদে"
        },
        "p": [
          {
            "en": "Al-Qurtubi also stops on the word itself. He explains that the duha is attached to the sun by possession, its duha, because it only comes about through the sun's rising high. He notes that the word is feminine, as in the saying the duha has risen, and is sometimes treated as masculine. Those who make it feminine, he says, take it as the plural of dahwa; and as a time word it behaves like sahar, so that when you mean the forenoon of your own day you say, I met him duha, without the ending tanwin.",
            "bn": "কুরতুবী শব্দটার ওপরও থামেন। তিনি বলেন, দুহাকে সূর্যের সঙ্গে জুড়ে 'তার দুহা' বলা হয়েছে, কারণ সূর্য ওপরে না উঠলে দুহা হয়ই না। তিনি উল্লেখ করেন, শব্দটি স্ত্রীলিঙ্গ, যেমন বলা হয় 'দুহা চড়ে গেছে'। কখনো আবার পুংলিঙ্গেও ব্যবহৃত হয়। যাঁরা স্ত্রীলিঙ্গ ধরেন, তাঁরা একে দাহওয়া শব্দের বহুবচন মনে করেন। সময় বোঝাতে শব্দটা আচরণ করে সাহার শব্দের মতো। তাই নিজের দিনেরই পূর্বাহ্ণ বোঝাতে চাইলে বলা হয়, তার সঙ্গে দুহায় দেখা হয়েছে, শেষে তানভীন ছাড়া।"
          },
          {
            "en": "Two authorities on the language in al-Qurtubi's passage trace the word to its source. Al-Mubarrad says the origin of duha is ad-dihh, which is the light of the sun, the alif at its end being changed from the second ha. Abu al-Haytham defines ad-dihh as the opposite of shade: the sun's light lying on the face of the earth. So on this account the word at the root of the oath is sunlight where it touches the ground, the brightness a person stands in when they step out of the shade.",
            "bn": "কুরতুবীর আলোচনায় ভাষার দুজন বিশেষজ্ঞ শব্দটির মূল খুঁজে দেখান। মুবাররাদ বলেন, দুহার মূল হলো 'আদ-দিহ্‌হ', মানে সূর্যের আলো। শব্দের শেষের আলিফটি আসলে দ্বিতীয় 'হা' বদলে তৈরি। আবুল হাইসাম 'আদ-দিহ্‌হ'-এর সংজ্ঞা দেন ছায়ার উল্টো হিসেবে: পৃথিবীর বুকে পড়ে থাকা সূর্যের আলো। এ হিসাবে শপথের এই শব্দের শিকড়ে আছে মাটিতে এসে পড়া রোদ। ছায়া থেকে বেরিয়ে এলে মানুষ যে আলোর মধ্যে দাঁড়ায়, সেটাই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Oath, or Two",
          "bn": "শপথ একটি, নাকি দুটি"
        },
        "p": [
          {
            "en": "Is the brightness sworn by in its own right, or does it describe the sun? Al-Qurtubi, straight after Mujahid's gloss, adds three words: wa huwa qasamun thanin, and it is a second oath. On that reading the verse holds two things sworn by, the sun and its duha. At-Tabari's paraphrase points the same way in form, since it repeats the preposition: I swear by the sun, and by the duha of the sun. The Muyassar's line goes further and lists the sun, its daytime and its shining.",
            "bn": "উজ্জ্বল কিরণের শপথ কি আলাদাভাবে করা হয়েছে, নাকি তা সূর্যেরই বিশেষণ? মুজাহিদের ব্যাখ্যার ঠিক পরেই কুরতুবী তিনটি শব্দ যোগ করেন: ওয়া হুয়া কাসামুন সানিন, আর এটি দ্বিতীয় শপথ। এ পাঠে আয়াতে শপথের বিষয় দুটি: সূর্য, আর তার দুহা। তাবারীর ব্যাখ্যাও গঠনের দিক থেকে একই দিকে যায়, কারণ তিনি অব্যয়টা দুবার বলেন: আমি শপথ করছি সূর্যের, আর সূর্যের দুহার। মুয়াসসার আরও এগিয়ে সূর্য, তার দিন আর তার ঝলমলে আলো, তিনটির কথাই বলে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the grammar otherwise. The phrase and his broad light, it says, is joined to by the sun with the particle and, yet the context indicates that it stands in an adjectival position qualifying the sun, as if to say: I swear by the sun when it is in the time of forenoon. Here there is one thing sworn by, the sun, held at one hour of the day. The two readings are set down side by side, and neither is preferred here.",
            "bn": "মাআরিফুল কুরআন ব্যাকরণটা অন্যভাবে পড়ে। তার মতে, 'ও তার উজ্জ্বল আলো' কথাটি 'সূর্যের শপথ'-এর সঙ্গে 'ও' অব্যয় দিয়ে যুক্ত হলেও প্রসঙ্গ বলে দেয়, এটি আসলে সূর্যের বিশেষণের জায়গায় বসেছে। যেন বলা হচ্ছে: আমি শপথ করছি সূর্যের, যখন তা পূর্বাহ্ণের সময়ে থাকে। এখানে শপথের বিষয় একটিই, সূর্য, যাকে দিনের একটি নির্দিষ্ট প্রহরে ধরা হয়েছে। দুই পাঠই এখানে পাশাপাশি রাখা হলো, কোনোটিকে প্রাধান্য দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn Over the Soul's Outcome",
          "bn": "নফসের পরিণতি নিয়ে শপথ"
        },
        "p": [
          {
            "en": "An oath is sworn over something, and three of the tafsirs consulted here say what. As-Sa'di opens: Allah swore by these great signs over the successful soul and the other souls, the wicked ones. The English abridgement of Ibn Kathir heads the passage: Allah swears by His creation that the person who purifies himself will be successful and the person who corrupts himself will fail. The Muyassar, whose paraphrase covers 91:1 to 91:10 as a single group, runs from the sun straight on to he has succeeded who purified it.",
            "bn": "শপথ করা হয় কোনো কথার ওপর, আর এখানে দেখা তিনটি তাফসীর বলে দেয় সেই কথাটা কী। সা'দী শুরুতেই বলেন: আল্লাহ এই মহান নিদর্শনগুলোর শপথ করেছেন সফল নফস আর অন্যান্য পাপাচারী নফসের ব্যাপারে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আলোচনার শিরোনাম: আল্লাহ তাঁর সৃষ্টির শপথ করে বলছেন, যে নিজেকে পবিত্র করে সে সফল হবে, আর যে নিজেকে কলুষিত করে সে ব্যর্থ হবে। মুয়াসসার ৯১:১ থেকে ৯১:১০ একসঙ্গে ব্যাখ্যা করে, সূর্য থেকে সোজা চলে যায় 'সে সফল হলো, যে তাকে পবিত্র করল' পর্যন্ত।"
          },
          {
            "en": "These three place the answer in 91:9 and 91:10, the success of whoever purifies the soul and, in the Muyassar's words, the loss of whoever hides it away in acts of disobedience; and the article on 91:9 treats that answer. None of the texts consulted for this verse discusses how the oath is joined to it in grammar, so nothing is said about that here. Between this verse and the answer stand six more oaths; the next is 91:2, by the moon when it follows it.",
            "bn": "এই তিনটি তাফসীর জবাবটা রাখে ৯১:৯ ও ৯১:১০ আয়াতে। যে নফসকে পবিত্র করে তার সাফল্য, আর মুয়াসসারের ভাষায়, যে নিজেকে গুনাহের মধ্যে লুকিয়ে ফেলে তার ক্ষতি। সেই জবাব নিয়ে আলোচনা আছে ৯১:৯ আয়াতের লেখায়। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বলে না ব্যাকরণের দিক থেকে শপথটা জবাবের সঙ্গে কীভাবে জুড়েছে। তাই সে বিষয়ে এখানে কিছু বলা হলো না। এই আয়াত আর জবাবের মাঝে আরও ছয়টি শপথ আছে। পরেরটি ৯১:২: চাঁদের শপথ, যখন তা সূর্যের পেছনে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "For Those Praying Behind",
          "bn": "পেছনের মুসল্লিদের কথা ভেবে"
        },
        "p": [
          {
            "en": "Ibn Kathir opens the surah with the hadith of Jabir, which he places in the two Sahihs. Al-Bukhari's wording (705) reads, in the page's English: \"Narrated Jabir bin `Abdullah Al-Ansari: Once a man was driving two Nadihas (camels used for agricultural purposes) and night had fallen. He found Mu`adh praying so he made his camel kneel and joined Mu`adh in the prayer. The latter recited Surat 'Al-Baqara\" or Surat \"An-Nisa\", (so) the man left the prayer and went away. When he came to know that Mu`adh had criticized him, he went to the Prophet, and complained against Mu`adh.",
            "bn": "ইবন কাসীর সূরাটির আলোচনা শুরু করেন জাবির (রাঃ)-এর হাদিস দিয়ে, আর বলেন এটি দুই সহীহ গ্রন্থেই আছে। বুখারীর বর্ণনায় (৭০৫) কথাটা এরকম: জাবির ইবন আবদুল্লাহ আল-আনসারী (রাঃ) বর্ণনা করেন, এক ব্যক্তি চাষের কাজে ব্যবহৃত দুটি উট হাঁকিয়ে আসছিল, তখন রাত নেমে এসেছে। সে মুআয (রাঃ)-কে নামাজ পড়তে দেখে উট বসিয়ে তাঁর সঙ্গে নামাজে শামিল হলো। মুআয (রাঃ) সূরা আল-বাকারা অথবা সূরা আন-নিসা পড়লেন, ফলে লোকটি নামাজ ছেড়ে চলে গেল। পরে সে জানতে পারল, মুআয (রাঃ) তার সমালোচনা করেছেন। তখন সে নবী ﷺ-এর কাছে গিয়ে মুআযের বিরুদ্ধে অভিযোগ করল।"
          },
          {
            "en": "The page continues: \"The Prophet said thrice, \"O Mu`adh ! Are you putting the people to trial?\" It would have been better if you had recited \"Sabbih Isma Rabbika-l-A`la (87)\", Wash-shamsi wa duhaha (91)\", or \"Wal-laili idha yaghsha (92)\", for the old, the weak and the needy pray behind you.\" Jabir said that Mu`adh recited Sura Al-Baqara in the `Isha' prayer.\" Al-Bukhari placed the report in his Sahih. Ibn Kathir's citation words it differently; only al-Bukhari's wording is quoted here. The reason the Prophet ﷺ gives is the people behind the imam.",
            "bn": "এরপর বর্ণনাটি বলে: নবী ﷺ তিনবার বললেন, 'হে মুআয! তুমি কি লোকদের ফিতনায় ফেলছ?' তুমি যদি সাব্বিহিসমা রাব্বিকাল আ'লা (৮৭), ওয়াশ শামসি ওয়া দুহাহা (৯১) অথবা ওয়াল লাইলি ইযা ইয়াগশা (৯২) পড়তে, তবে ভালো হতো। কারণ তোমার পেছনে বৃদ্ধ, দুর্বল আর অভাবী মানুষেরা নামাজ পড়ে। জাবির (রাঃ) বলেন, মুআয (রাঃ) ইশার নামাজে সূরা আল-বাকারা পড়েছিলেন। বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। ইবন কাসীরের উদ্ধৃতির শব্দ খানিকটা আলাদা, এখানে কেবল বুখারীর শব্দই নেওয়া হয়েছে। নবী ﷺ কারণ হিসেবে দেখিয়েছেন ইমামের পেছনে দাঁড়ানো মানুষগুলোকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Up Before Looking In",
          "bn": "ভেতরে তাকানোর আগে ওপরে"
        },
        "p": [
          {
            "en": "Read in its place, the verse does something before it teaches anything. The surah will close its run of oaths at the soul and then speak of success and loss, yet it begins at the sun. Ma'arif al-Qur'an draws the lesson in its own words: man ought to reflect on these phenomena and try to appreciate their value and the purpose of their creation. Morning light is the most ordinary of them all, and for that very reason the easiest to stop seeing.",
            "bn": "নিজের জায়গায় রেখে পড়লে দেখা যায়, আয়াতটি কিছু শেখানোর আগেই একটা কাজ করে ফেলে। সূরার শপথের সারি শেষ হবে নফসে গিয়ে, তারপর আসবে সাফল্য আর ক্ষতির কথা। অথচ শুরুটা সূর্য দিয়ে। মাআরিফুল কুরআন নিজের ভাষায় শিক্ষাটা বের করে আনে: এসব প্রাকৃতিক ঘটনা নিয়ে মানুষের ভাবা উচিত, এদের মূল্য আর সৃষ্টির উদ্দেশ্য বোঝার চেষ্টা করা উচিত। সকালের আলো এদের মধ্যে সবচেয়ে সাধারণ। ঠিক সে কারণেই তাকে খেয়াল না করাটা সবচেয়ে সহজ।"
          },
          {
            "en": "As-Sa'di's gloss gives that reflection a direction: its light, and the benefit that issues from it. Light, warmth, the day itself: in every reading the commentators give, the duha is something the listener lives inside and did not make. Before the surah asks what a person has done with his own soul, it shows him a sun he did not light and a morning he did not earn. Gratitude for those is a fair place to begin the reckoning.",
            "bn": "সা'দীর ব্যাখ্যা এই ভাবনাকে একটা দিক দেখায়: সূর্যের আলো, আর তা থেকে আসা উপকার। আলো হোক, উষ্ণতা হোক কিংবা পুরো দিনটা, তাফসীরকারদের যেকোনো ব্যাখ্যায় দুহা এমন জিনিস, শ্রোতা যার ভেতরে বেঁচে থাকে, অথচ যা সে নিজে বানায়নি। মানুষ নিজের নফসের সঙ্গে কী করেছে, সে প্রশ্ন তোলার আগে সূরাটি তাকে দেখায় এমন এক সূর্য, যা সে জ্বালায়নি, আর এমন এক সকাল, যা সে কামাই করেনি। হিসাব-নিকাশ শুরু করার জন্য এসবের শুকরিয়া আদায়ই যথার্থ সূচনা।"
          }
        ]
      }
    ]
  },
  "91:9": {
    "sections": [
      {
        "h": {
          "en": "Where Seven Oaths Land",
          "bn": "সাত শপথ যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Surah ash-Shams swears seven times before it states anything: by the sun and its forenoon light, by the moon when it follows, by the day when it displays it, by the night when it covers it, by the sky and what built it, by the earth and what spread it, and by a soul and what proportioned it. The Muyassar folds 91:1 to 91:10 into a single paragraph and reads the last oath as Allah swearing by every soul and by His completing of its creation for the task it was made to carry out.",
            "bn": "সূরা শামস কোনো কথা বলার আগে সাতটি শপথ করে। শপথ সূর্যের ও তার পূর্বাহ্ণের আলোর, চাঁদের যখন সে সূর্যের পেছনে আসে, দিনের যখন তা সূর্যকে উজ্জ্বল করে, রাতের যখন তা ঢেকে দেয়, আকাশের ও যিনি তা গড়েছেন তাঁর, পৃথিবীর ও যিনি তা বিছিয়েছেন তাঁর, আর এক প্রাণের ও যিনি তাকে সুঠাম করেছেন তাঁর। মুয়াসসার ৯১:১ থেকে ৯১:১০ পর্যন্ত এক অনুচ্ছেদে বুঝিয়েছে। শেষ শপথটি তার পাঠে এরকম: আল্লাহ শপথ করছেন প্রতিটি প্রাণের, আর যে দায়িত্ব পালনের জন্য তাকে বানানো হয়েছে সে দায়িত্বের উপযোগী করে তার সৃষ্টি পূর্ণ করে দেওয়ার।"
          },
          {
            "en": "Then the movement outward stops. 91:8 stays with that same soul, fa-alhamaha fujuraha wa taqwaha, and inspired it with its wickedness and its righteousness, and 91:9 gives the verdict in four Arabic words: qad aflaha man zakkaha, he has succeeded who purifies it. The neighbouring article on 91:1 looks at the sun that opens the run; this article stands where the run was heading. The Muyassar's paragraph ends on two outcomes: whoever purified the soul and made it grow with good has won, and whoever hid it in sins has lost.",
            "bn": "এরপর বাইরের দিকে চলা থেমে যায়। ৯১:৮ সেই প্রাণের কাছেই থাকে: ফাআলহামাহা ফুজূরাহা ওয়া তাকওয়াহা, অতঃপর তাকে তার পাপ ও তার তাকওয়ার জ্ঞান দিয়েছেন। আর ৯১:৯ রায় দেয় চারটি আরবি শব্দে: কাদ আফলাহা মান যাক্কাহা, সে-ই সফল হয়েছে যে তাকে পবিত্র করেছে। পাশের ৯১:১ আয়াতের প্রবন্ধ দেখে সেই সূর্যকে, যা দিয়ে শপথের সারি শুরু। এ প্রবন্ধ দাঁড়ায় সারিটা যেখানে গিয়ে পৌঁছায় সেখানে। মুয়াসসারের অনুচ্ছেদ শেষ হয় দুই পরিণতিতে: যে প্রাণকে পবিত্র করেছে আর কল্যাণ দিয়ে বাড়িয়ে তুলেছে, সে জিতেছে। আর যে তাকে গুনাহের ভেতর লুকিয়ে ফেলেছে, সে হেরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Oath Falls",
          "bn": "শপথের জবাব কোথায়"
        },
        "p": [
          {
            "en": "Most of the sources fetched for this verse treat it as the thing the oaths were sworn over. At-Tabari, after his glosses, writes: wa hadha huwa mawdi' al-qasam, and this is the place of the oath, and supports it with Qatadah's words: the oath has fallen here. Al-Baghawi opens with the same phrase. Ma'arif al-Qur'an calls 91:9 and 91:10 together the subject of the seven oaths. At-Tabari adds that he has already set out what the Arabic grammarians say about such constructions at earlier parallels, so he does not repeat it.",
            "bn": "এ আয়াতের জন্য যে তাফসীরগুলো আনা হয়েছে, তার বেশিরভাগ একে ধরে শপথগুলোর আসল বক্তব্য হিসেবে। তাবারী নিজের ব্যাখ্যার পর লেখেন: ওয়া হাযা হুয়া মাওদিউল কাসাম, এটাই শপথের জায়গা। সমর্থনে আনেন কাতাদার কথা: শপথ এসে পড়েছে এখানেই। বাগাভীও শুরু করেন একই কথা দিয়ে। মাআরিফুল কুরআন ৯১:৯ ও ৯১:১০ দুটিকে একসঙ্গে সাতটি শপথের বিষয়বস্তু বলে। তাবারী এটুকুও জানিয়ে দেন যে এ ধরনের বাক্যগঠন নিয়ে আরবি ব্যাকরণবিদেরা কী বলেন, তা তিনি আগের সমজাতীয় আয়াতগুলোতে বলে এসেছেন, তাই এখানে আর বলছেন না।"
          },
          {
            "en": "Al-Qurtubi does give the grammar. He calls the verse the answer to the oath, in the sense of la-qad aflaha, he has indeed succeeded, and cites az-Zajjaj: the lam was dropped because the speech had grown long, and the length stood in for it. Then he reports other views. One, introduced with it is said, makes the answer implied: by the sun and the rest, you will surely be raised. Az-Zamakhshari supplies la-yudamdimanna Allahu 'alayhim, Allah will surely bring ruin upon them, meaning the people of Makkah for denying the Messenger of Allah ﷺ, as He did to Thamud for denying Salih (AS).",
            "bn": "ব্যাকরণের আলোচনাটা কুরতুবী করেন। তাঁর মতে আয়াতটিই শপথের জবাব, অর্থ লাকাদ আফলাহা, নিশ্চয়ই সে সফল হয়েছে। তিনি যাজ্জাজের কথা আনেন: কথা দীর্ঘ হয়ে গিয়েছিল বলে লাম অক্ষরটি বাদ পড়েছে, আর দৈর্ঘ্যটাই তার জায়গা পূরণ করেছে। এরপর তিনি অন্য মতগুলো উল্লেখ করেন। 'বলা হয়' দিয়ে আনা একটি মতে জবাবটা উহ্য: সূর্য ও বাকিগুলোর শপথ, তোমাদের অবশ্যই আবার ওঠানো হবে। যামাখশারী উহ্য জবাব ধরেন লাইউদামদিমান্নাল্লাহু আলাইহিম, আল্লাহ অবশ্যই তাদের ধ্বংস নামিয়ে আনবেন। অর্থাৎ মক্কাবাসীর উপর, রাসূলুল্লাহ ﷺ-কে অস্বীকার করার কারণে, যেমন সালিহ (আঃ)-কে অস্বীকার করায় সামূদের উপর এনেছিলেন।"
          },
          {
            "en": "On az-Zamakhshari's reading, qad aflaha man zakkaha is no part of the answer: it is speech that follows on from fa-alhamaha fujuraha wa taqwaha by way of digression. A last view, again introduced with it is said, takes the passage as reordered with nothing omitted: he has succeeded who purifies it, and he has failed who buries it, by the sun and its forenoon. Al-Qurtubi leads with the first view and reports the others after it. Even the digression reading ties the verse to 91:8, so the soul stays at the centre.",
            "bn": "যামাখশারীর পাঠে কাদ আফলাহা মান যাক্কাহা জবাবের অংশই নয়। এটা ফাআলহামাহা ফুজূরাহা ওয়া তাকওয়াহা-র পিছু পিছু আসা কথা, প্রসঙ্গক্রমে বলা। শেষ মতটিও 'বলা হয়' দিয়ে আনা। এ মতে কিছুই উহ্য নেই, শুধু কথার আগপিছ বদলানো: সে-ই সফল যে তাকে পবিত্র করেছে, আর সে-ই ব্যর্থ যে তাকে চাপা দিয়েছে, শপথ সূর্যের ও তার পূর্বাহ্ণের। কুরতুবী প্রথম মতটি আগে রাখেন, বাকিগুলো পরে বর্ণনা করেন। প্রসঙ্গক্রমের পাঠেও আয়াতটি ৯১:৮-এর সঙ্গে বাঁধা, তাই প্রাণই থাকে কেন্দ্রে।"
          }
        ]
      },
      {
        "h": {
          "en": "Shown Both Roads First",
          "bn": "আগে দুই পথই দেখানো"
        },
        "p": [
          {
            "en": "The verdict presupposes the two verses before it. On 91:7 Ibn Kathir explains sawwaha as creating the soul sound and well proportioned upon the fitrah, and sets beside it 30:30, Allah's fitrah upon which He created mankind. On 91:8 he says alhamaha means that Allah showed the soul its wickedness and its taqwa, made that clear to it, and guided it to what had been ordained for it. He reports Ibn Abbas (RA): He explained the good and the evil to it, and says Mujahid, Qatadah, ad-Dahhak and ath-Thawri said the same.",
            "bn": "রায়টা দাঁড়িয়ে আছে আগের দুই আয়াতের উপর। ৯১:৭-এর সাওয়াহা শব্দের ব্যাখ্যায় ইবন কাসীর বলেন, আল্লাহ প্রাণকে সুস্থ ও সুসমঞ্জস করে ফিতরাতের উপর সৃষ্টি করেছেন। পাশে রাখেন ৩০:৩০, আল্লাহর ফিতরাত, যার উপর তিনি মানুষকে সৃষ্টি করেছেন। ৯১:৮-এর আলহামাহা সম্পর্কে তিনি বলেন, আল্লাহ প্রাণকে তার পাপ ও তার তাকওয়া দেখিয়েছেন, তার কাছে বিষয়টা স্পষ্ট করেছেন, আর তার জন্য যা নির্ধারিত তার দিকে তাকে পথ দেখিয়েছেন। তিনি ইবন আব্বাস (রাঃ)-এর কথা আনেন: তিনি তাকে ভালো ও মন্দ বুঝিয়ে দিয়েছেন। মুজাহিদ, কাতাদা, দাহহাক ও সাওরীও একই কথা বলেছেন বলে জানান।"
          },
          {
            "en": "Two further glosses in Ibn Kathir shift the image. Sa'id ibn Jubayr: He gave it inspiration to see good and evil. Ibn Zayd: He placed its wickedness and its taqwa inside it. The Muyassar keeps to the plain line: He made clear to it the path of evil and the path of good. Read this way, nothing in 91:9 comes as a surprise to the soul. The road was lit before the outcome was announced, and the verdict on purifying arrives only after the knowledge of what purifies and what defiles has already been given.",
            "bn": "ইবন কাসীরে আরও দুটি ব্যাখ্যা ছবিটা একটু ঘুরিয়ে দেয়। সাঈদ ইবন জুবাইর বলেন, ভালো ও মন্দ চেনার প্রেরণা তিনি তাকে দিয়েছেন। ইবন যায়দ বলেন, তার পাপ আর তার তাকওয়া তিনি তার ভেতরেই রেখে দিয়েছেন। মুয়াসসার থাকে সোজা কথায়: তিনি তার সামনে মন্দের পথ আর ভালোর পথ স্পষ্ট করে দিয়েছেন। এভাবে পড়লে ৯১:৯-এর কোনো কিছুই প্রাণের কাছে অচেনা নয়। পরিণতি ঘোষণার আগেই পথে আলো ফেলা হয়েছে। কী পবিত্র করে আর কী কলুষিত করে, সে জ্ঞান আগে দেওয়া হয়েছে, পবিত্রতার রায় এসেছে তার পরে।"
          },
          {
            "en": "Ibn Kathir also attaches a hadith to these two verses, which he says Ahmad and Muslim recorded. In Muslim's Sahih (2650), two men of Muzaynah ask the Prophet ﷺ whether what people do and strive for is already decreed for them, or something they meet only once their prophet's message reaches them and the proof stands against them. He answers: No, rather it is something decreed upon them and gone forth in them, and the confirmation of that is in the Book of Allah, the Mighty and Majestic: By a soul and what proportioned it, and inspired it with its wickedness and its taqwa. Muslim placed it in his Sahih.",
            "bn": "এই দুই আয়াতের সঙ্গে ইবন কাসীর একটি হাদীসও যুক্ত করেন, যা তাঁর কথায় আহমাদ ও মুসলিম বর্ণনা করেছেন। সহীহ মুসলিমে (২৬৫০) মুযাইনা গোত্রের দুজন লোক নবী ﷺ-কে জিজ্ঞেস করে: মানুষ যা করে আর যার জন্য খাটে, তা কি তাদের জন্য আগে থেকেই নির্ধারিত, নাকি নবীর বার্তা পৌঁছানোর পর তাদের বিরুদ্ধে প্রমাণ দাঁড়িয়ে গেলে তবেই তা সামনে আসে? তিনি জবাব দেন: ‘না, বরং তা তাদের উপর নির্ধারিত হয়ে আছে এবং তাদের মধ্যে কার্যকর হয়ে গেছে। এর সত্যায়ন আছে মহান আল্লাহর কিতাবে: শপথ প্রাণের ও যিনি তাকে সুঠাম করেছেন তাঁর, অতঃপর তাকে দিয়েছেন তার পাপ ও তার তাকওয়ার জ্ঞান।’ মুসলিম এটিকে তাঁর সহীহ গ্রন্থে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Hand Purifies",
          "bn": "পবিত্র করে কার হাত"
        },
        "p": [
          {
            "en": "The verse does not name who does the purifying, and the sources divide. One line makes it the person purifying his own soul. Ibn Kathir gives this first: whoever purifies himself through obedience to Allah, as Qatadah said, and cleanses it of base character and vices, with the like reported from Mujahid, Ikrimah and Sa'id ibn Jubayr. At-Tabari reports Qatadah: he has succeeded who purified his soul with righteous work. As-Sa'di and the Muyassar gloss the verse this way too, and Ma'arif al-Qur'an makes it its main explanation.",
            "bn": "পবিত্র কে করে, আয়াত তা বলে না, আর এখানে তাফসীরগুলো দুই ভাগ হয়ে যায়। এক ধারায় মানুষ নিজেই নিজের প্রাণকে পবিত্র করে। ইবন কাসীর এ মতটি আগে আনেন: যে আল্লাহর আনুগত্যের মাধ্যমে নিজেকে পবিত্র করেছে, যেমন কাতাদা বলেছেন, আর হীন স্বভাব ও দোষ থেকে তাকে সাফ করেছে। একই রকম কথা মুজাহিদ, ইকরিমা ও সাঈদ ইবন জুবাইর থেকেও বর্ণিত। তাবারী কাতাদার কথা আনেন: সে-ই সফল, যে নেক আমল দিয়ে নিজের প্রাণকে পবিত্র করেছে। সা'দী ও মুয়াসসারও এভাবেই ব্যাখ্যা করে, আর মাআরিফুল কুরআনের মূল ব্যাখ্যাও এটাই।"
          },
          {
            "en": "The other line makes Allah the one who purifies the soul He wills. At-Tabari reports, through Ali ibn Abi Talhah, from Ibn Abbas (RA): he has succeeded whose soul Allah has purified, and the same words from Ibn Zayd. Ibn Kathir gives it as a second possibility, he has succeeded whose soul Allah purifies and failed whose soul Allah corrupts, reported by al-Awfi and Ali ibn Abi Talhah from Ibn Abbas. Al-Baghawi glosses: a soul that Allah purified has won and been made happy. Ma'arif al-Qur'an notes that some commentators refer the verbs of 91:9 and 91:10 to Allah.",
            "bn": "অন্য ধারায় পবিত্র করেন আল্লাহ, যে প্রাণকে তিনি চান। তাবারী আলী ইবন আবী তালহার সূত্রে ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন: সে-ই সফল, আল্লাহ যার প্রাণকে পবিত্র করেছেন। ইবন যায়দ থেকেও একই কথা আনেন। ইবন কাসীর এটিকে দ্বিতীয় সম্ভাবনা হিসেবে রাখেন: সফল সে, আল্লাহ যার প্রাণ পবিত্র করেন, আর ব্যর্থ সে, আল্লাহ যার প্রাণ কলুষিত করেন। আওফী ও আলী ইবন আবী তালহা এটি ইবন আব্বাস থেকে বর্ণনা করেছেন। বাগাভীর ব্যাখ্যা: আল্লাহ যে প্রাণকে পবিত্র করেছেন, সে জিতেছে, সৌভাগ্যবান হয়েছে। মাআরিফুল কুরআন জানায়, কোনো কোনো তাফসীরকার ৯১:৯ ও ৯১:১০-এর ক্রিয়া দুটিকে আল্লাহর দিকে ফেরান।"
          },
          {
            "en": "At-Tabari's own gloss belongs with the second line: he has succeeded whose soul Allah has purified, increasing its cleansing from disbelief and sins and setting it right with righteous deeds. Yet under the words and the people of interpretation said the like, he files Qatadah's report, which names the man's own deed, beside those from Ibn Abbas and Ibn Zayd, and one from Mujahid, Sa'id ibn Jubayr and Ikrimah saying only: whoever set it right. Al-Qurtubi's closing gloss also names Allah as the purifier, through obedience. Each reading has named holders, and this article leaves the question where they leave it.",
            "bn": "তাবারীর নিজের ব্যাখ্যা দ্বিতীয় ধারার: সে-ই সফল, আল্লাহ যার প্রাণকে পবিত্র করেছেন, কুফর ও গুনাহ থেকে তাকে বারবার সাফ করেছেন, আর নেক আমল দিয়ে তাকে শুধরে দিয়েছেন। অথচ 'তাফসীরবিদেরাও এমনই বলেছেন' কথার নিচে তিনি কাতাদার বর্ণনাও রাখেন, যেখানে মানুষের নিজের আমলের কথা, ইবন আব্বাস ও ইবন যায়দের বর্ণনার পাশেই। মুজাহিদ, সাঈদ ইবন জুবাইর ও ইকরিমা থেকেও একটি বর্ণনা আনেন, যাতে শুধু এটুকু: যে তাকে শুধরে নিয়েছে। কুরতুবীর শেষ ব্যাখ্যাতেও পবিত্রকারী আল্লাহ, আনুগত্যের মাধ্যমে। দুই পাঠেরই নামধারী সমর্থক আছেন। এ প্রবন্ধ প্রশ্নটা সেখানেই রাখছে, যেখানে তাঁরা রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Cleansing That Also Grows",
          "bn": "যে সাফাই বাড়িয়েও তোলে"
        },
        "p": [
          {
            "en": "Whoever is taken as the subject, the sources describe the work in similar terms. As-Sa'di uses four verbs: he purified it from sins, cleansed it of faults, raised it through obedience to Allah, and elevated it with beneficial knowledge and righteous action. The Muyassar pairs two: tahharaha wa nammaha bi-l-khayr, he purified it and made it grow with good. Al-Baghawi has Allah setting the soul right, purifying it of sins and granting it success in obedience. Ma'arif al-Qur'an gives the root sense of tazkiyah as inner cleanliness, meaning a person who obeyed Allah and purified his inner and outer self.",
            "bn": "কর্তা যাকেই ধরা হোক, কাজটার বর্ণনা তাফসীরগুলোতে কাছাকাছি। সা'দী চারটি ক্রিয়া ব্যবহার করেন: গুনাহ থেকে তাকে পবিত্র করেছে, দোষ থেকে সাফ করেছে, আল্লাহর আনুগত্যে তাকে উপরে তুলেছে, আর উপকারী ইলম ও নেক আমলে তাকে উঁচু করেছে। মুয়াসসার জোড়া বাঁধে দুটি ক্রিয়ায়: তাহহারাহা ওয়া নাম্মাহা বিলখাইর, তাকে পবিত্র করেছে আর কল্যাণে বাড়িয়ে তুলেছে। বাগাভীর বর্ণনায় আল্লাহ প্রাণকে শুধরে দেন, গুনাহ থেকে পবিত্র করেন, আনুগত্যের তাওফীক দেন। মাআরিফুল কুরআনের মতে তাযকিয়ার মূল অর্থ ভেতরের পরিচ্ছন্নতা: যে আল্লাহর আনুগত্য করেছে এবং ভেতর ও বাহির দুটোই পবিত্র করেছে।"
          },
          {
            "en": "The word for success gets glosses of its own. Al-Qurtubi says aflaha means faza, he won; the Muyassar uses the same verb, and al-Baghawi doubles it, fazat wa sa'idat, the soul won and was made happy. Ibn Kathir, in the Arabic, sets beside the verse 87:14 and 87:15, qad aflaha man tazakka, he has succeeded who purified himself and remembered the name of his Lord and prayed; that verse has its own article. The purifying in all these glosses removes and adds at once: sins and faults go out, obedience, knowledge and good deeds come in.",
            "bn": "সফলতার শব্দটিরও আলাদা ব্যাখ্যা আছে। কুরতুবী বলেন, আফলাহা মানে ফাযা, সে জিতেছে। মুয়াসসারও একই ক্রিয়া ব্যবহার করে, আর বাগাভী দুটি ক্রিয়া জুড়ে দেন: ফাযাত ওয়া সাইদাত, প্রাণটি জিতেছে, সৌভাগ্যবান হয়েছে। আরবি তাফসীরে ইবন কাসীর আয়াতটির পাশে রাখেন ৮৭:১৪ ও ৮৭:১৫: কাদ আফলাহা মান তাযাক্কা, সফল সে, যে নিজেকে পবিত্র করেছে, তার রবের নাম স্মরণ করেছে এবং নামায পড়েছে। সে আয়াতের জন্য আলাদা প্রবন্ধ আছে। এসব ব্যাখ্যায় পবিত্র করা মানে একসঙ্গে সরানো আর যোগ করা। গুনাহ আর দোষ বেরিয়ে যায়, ঢোকে আনুগত্য, ইলম আর নেক আমল।"
          }
        ]
      },
      {
        "h": {
          "en": "A Soul Pushed Under",
          "bn": "মাটিচাপা দেওয়া প্রাণ"
        },
        "p": [
          {
            "en": "91:10 completes the pair: wa qad khaba man dassaha, and he has failed who buries it. Ma'arif al-Qur'an derives dassa from dass, to bury in the ground, the verb of 16:59, where a father debates whether to keep his newborn daughter in humiliation or bury her in the dust. The verse, it says, means that he who made his soul sink in the swamp of sins will be deprived. The Muyassar's gloss is close: he has lost who hid his soul away in acts of disobedience.",
            "bn": "৯১:১০ জোড়াটা পূর্ণ করে: ওয়া কাদ খাবা মান দাসসাহা, আর সে-ই ব্যর্থ যে তাকে চাপা দিয়েছে। মাআরিফুল কুরআন দাসসা শব্দটিকে দাসস থেকে এনেছে, যার মানে মাটিতে পুঁতে ফেলা। ১৬:৫৯ আয়াতে এই ক্রিয়াই এসেছে, যেখানে এক বাবা ভাবছে, সদ্যজাত মেয়েকে অপমান সয়ে রেখে দেবে, নাকি মাটিতে পুঁতে ফেলবে। মাআরিফুল কুরআনের মতে আয়াতটির অর্থ: যে নিজের প্রাণকে গুনাহের জলাভূমিতে ডুবিয়ে দিয়েছে, সে বঞ্চিত হবে। মুয়াসসারের ব্যাখ্যাও কাছাকাছি: সে হেরেছে, যে নিজেকে নাফরমানির ভেতর লুকিয়ে ফেলেছে।"
          },
          {
            "en": "Ibn Kathir explains dassaha as concealing the soul: making it dull and neglecting it, keeping it from receiving guidance, until its owner commits acts of disobedience and abandons obedience to Allah. The dispute over 91:9 carries into this verse. On the reading Ibn Kathir reports from Ibn Abbas, the failure belongs to the one whose soul Allah corrupts, and Ma'arif al-Qur'an says the same of the commentators who refer both verbs to Allah. On the first reading, the two outcomes are a soul raised and a soul hidden by its own owner.",
            "bn": "ইবন কাসীর দাসসাহা-র ব্যাখ্যা দেন প্রাণকে লুকিয়ে রাখা হিসেবে: তাকে নিস্তেজ করে ফেলা, অবহেলা করা, হিদায়াত গ্রহণ করতে না দেওয়া। শেষে মালিক নিজেই নাফরমানিতে জড়ায়, আল্লাহর আনুগত্য ছেড়ে দেয়। ৯১:৯-এর মতভেদ এ আয়াতেও গড়ায়। ইবন কাসীর ইবন আব্বাস থেকে যে পাঠ বর্ণনা করেন, তাতে ব্যর্থ সে, আল্লাহ যার প্রাণকে কলুষিত করেন। যে তাফসীরকারেরা দুটি ক্রিয়াই আল্লাহর দিকে ফেরান, তাঁদের সম্পর্কে মাআরিফুল কুরআনও একই কথা বলে। প্রথম পাঠে দুই পরিণতি হলো: একটি প্রাণ উপরে উঠেছে, আরেকটিকে তার মালিক নিজেই চাপা দিয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse Inside a Prayer",
          "bn": "দোয়ার ভেতরে আয়াতের শব্দ"
        },
        "p": [
          {
            "en": "In Muslim's Sahih (2722), Zayd ibn Arqam (RA) says: I say to you only what the Messenger of Allah ﷺ used to say. He used to say: O Allah, I seek refuge in You from incapacity and laziness, cowardice and miserliness, decrepitude and the punishment of the grave. O Allah, give my soul its taqwa and purify it, You are the best of those who purify it, You are its Protector and its Master. O Allah, I seek refuge in You from knowledge that does not benefit, a heart that is not humble, a soul that is not sated, and a supplication that is not answered.",
            "bn": "সহীহ মুসলিমে (২৭২২) যায়দ ইবন আরকাম (রাঃ) বলেন: রাসূলুল্লাহ ﷺ যা বলতেন, আমি তোমাদের তা-ই বলছি। তিনি বলতেন: ‘হে আল্লাহ, আমি তোমার কাছে আশ্রয় চাই অক্ষমতা ও অলসতা থেকে, ভীরুতা ও কৃপণতা থেকে, অতি বার্ধক্য ও কবরের আযাব থেকে। হে আল্লাহ, আমার প্রাণকে তার তাকওয়া দাও এবং তাকে পবিত্র করো, তুমিই তাকে পবিত্রকারীদের মধ্যে শ্রেষ্ঠ, তুমিই তার অভিভাবক ও মনিব। হে আল্লাহ, আমি তোমার কাছে আশ্রয় চাই এমন ইলম থেকে যা উপকারে আসে না, এমন অন্তর থেকে যা বিনয়ী হয় না, এমন প্রাণ থেকে যা তৃপ্ত হয় না, আর এমন দোয়া থেকে যা কবুল হয় না।’"
          },
          {
            "en": "Ibn Kathir brings this supplication through Imam Ahmad and adds that Muslim recorded it; Muslim placed it in his Sahih. Its middle line takes the words of 91:8 and 91:9, taqwaha and zakkaha, and turns them into a request, with khayru man zakkaha, the best of those who purify it, addressed to Allah. Ibn Kathir cites it after setting out both readings of the verse and does not use it to choose between them. What it gives the reader is a form of words: the one who asks Allah to purify his soul is, in that same act, doing something with it.",
            "bn": "ইবন কাসীর এ দোয়াটি ইমাম আহমাদের সূত্রে আনেন এবং জানান, মুসলিমও এটি বর্ণনা করেছেন। মুসলিম এটিকে তাঁর সহীহ গ্রন্থে রেখেছেন। দোয়ার মাঝের অংশে ৯১:৮ ও ৯১:৯-এর শব্দ দুটি, তাকওয়াহা আর যাক্কাহা, প্রার্থনা হয়ে এসেছে। খাইরু মান যাক্কাহা, তাকে পবিত্রকারীদের মধ্যে শ্রেষ্ঠ, কথাটি বলা হয়েছে আল্লাহকে সম্বোধন করে। ইবন কাসীর আয়াতের দুই পাঠ বলার পরে এটি আনেন, আর দুইয়ের মধ্যে কোনোটিকে বেছে নিতে এটি ব্যবহার করেন না। পাঠকের হাতে এটি দেয় চাওয়ার ভাষা। যে আল্লাহর কাছে নিজের প্রাণের পবিত্রতা চায়, সে ঠিক সেই চাওয়ার মধ্যেই প্রাণটিকে নিয়ে কিছু একটা করছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Thamud, the Worked Example",
          "bn": "সামূদ, চোখের সামনে উদাহরণ"
        },
        "p": [
          {
            "en": "91:11 to 91:15 follow at once: Thamud denied in their transgression, their most wretched rose up, the messenger of Allah, Salih (AS), warned them about Allah's she-camel and her drink, and they hamstrung her and were levelled. Ma'arif al-Qur'an reads this as an example of the unsuccessful group of 91:10, punished in part in this world, and points to the full story elsewhere, as in 7:73 to 7:79. The neighbouring article on 91:13 takes up the warning itself.",
            "bn": "৯১:১১ থেকে ৯১:১৫ আসে সঙ্গে সঙ্গে: সামূদ সীমালঙ্ঘন করে অস্বীকার করল, তাদের সবচেয়ে হতভাগা লোকটি উঠে দাঁড়াল, আল্লাহর রাসূল সালিহ (আঃ) আল্লাহর উটনি ও তার পানির পালা নিয়ে সতর্ক করলেন, তারা উটনির পায়ের রগ কেটে দিল, আর তাদের মাটির সঙ্গে মিশিয়ে দেওয়া হলো। মাআরিফুল কুরআন একে ৯১:১০-এর ব্যর্থ দলের উদাহরণ হিসেবে পড়ে, যাদের শাস্তির একটা অংশ দুনিয়াতেই এসেছে। পুরো কাহিনির জন্য অন্য জায়গা দেখিয়ে দেয়, যেমন ৭:৭৩ থেকে ৭:৭৯। সতর্কবাণীটি নিয়ে আলোচনা আছে পাশের ৯১:১৩ আয়াতের প্রবন্ধে।"
          },
          {
            "en": "These verses describe what they describe: one people of the past, a messenger rejected, a camel killed, and a judgement that belonged to Allah. They license nothing against any living person or community, and they give no one the right to name another person as a soul buried. The verdict of 91:9 and 91:10 is for each listener to read about one soul only, his own, the one he was shown both roads for.",
            "bn": "এ আয়াতগুলো যা বর্ণনা করে, ঠিক তা-ই বর্ণনা করে: অতীতের একটি জাতি, প্রত্যাখ্যাত একজন রাসূল, মেরে ফেলা একটি উটনি, আর এমন এক ফয়সালা যা ছিল কেবল আল্লাহর। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এগুলো কোনো কিছুর অনুমতি দেয় না। কাউকে চাপা পড়া প্রাণ বলে চিহ্নিত করার অধিকারও কাউকে দেয় না। ৯১:৯ ও ৯১:১০-এর রায় প্রত্যেক শ্রোতা পড়বেন কেবল একটি প্রাণ নিয়ে, নিজের প্রাণ, যাকে দুই পথই দেখানো হয়েছে।"
          }
        ]
      }
    ]
  },
  "91:13": {
    "sections": [
      {
        "h": {
          "en": "The Messenger's Whole Message",
          "bn": "রাসূলের পুরো বার্তা"
        },
        "p": [
          {
            "en": "Fa-qala lahum rasulu Allahi naqata Allahi wa-suqyaha: so the messenger of Allah said to them, the she-camel of Allah, and her drink. The verse has 7 Arabic words. Fa-qala is so he said; lahum is to them; rasulu Allahi is the messenger of Allah. Then his whole message follows: naqata Allahi, the she-camel of Allah, and wa-suqyaha, and her drink. The name Allah appears twice in this short verse: with the speaker, and with the animal he speaks about.",
            "bn": "ফাকালা লাহুম রাসূলুল্লাহি নাকাতাল্লাহি ওয়া সুকইয়াহা: তখন আল্লাহর রাসূল তাদের বললেন, আল্লাহর উটনি, আর তার পানি পান। আয়াতে আরবি শব্দ ৭টি। ফাকালা মানে তখন তিনি বললেন। লাহুম মানে তাদের। রাসূলুল্লাহি মানে আল্লাহর রাসূল। এরপর তাঁর গোটা বার্তা: নাকাতাল্লাহি, আল্লাহর উটনি, আর ওয়া সুকইয়াহা, এবং তার পানি পান। এত ছোট আয়াতে আল্লাহর নাম এসেছে দুবার। যিনি কথা বলছেন তাঁর সঙ্গে, আর যে প্রাণীর কথা বলা হচ্ছে তার সঙ্গে।"
          },
          {
            "en": "The verse sits inside a short telling. Before it, 91:11 says that Thamud denied out of their transgression, and 91:12 says: when the most wretched of them rose up. After it, 91:14 and 91:15 tell how they answered and what followed. This article stays with the words of 91:13 and names those verses only as its frame. The Muyassar, whose comment covers 91:12 to 91:15 together, places the warning at the moment the most wretched of the tribe rose up to hamstring the she-camel.",
            "bn": "আয়াতটা একটা ছোট বৃত্তান্তের ভেতরে বসানো। আগে ৯১:১১ বলে, সামূদ সীমালঙ্ঘনের কারণে অস্বীকার করেছিল। আর ৯১:১২ বলে, যখন তাদের সবচেয়ে হতভাগা লোকটি উঠে দাঁড়াল। পরে ৯১:১৪ ও ৯১:১৫ জানায় তারা কী জবাব দিল আর তারপর কী ঘটল। এই লেখা ৯১:১৩ আয়াতের শব্দগুলোর সঙ্গেই থাকবে, আশপাশের আয়াতগুলোকে শুধু কাঠামো হিসেবে উল্লেখ করবে। মুয়াসসার ৯১:১২ থেকে ৯১:১৫ পর্যন্ত একসঙ্গে ব্যাখ্যা করে। তার বর্ণনায় সতর্কবাণীটা আসে ঠিক তখন, যখন গোত্রের সবচেয়ে হতভাগা লোকটি উটনির পায়ের রগ কাটতে উঠে দাঁড়িয়েছে।"
          },
          {
            "en": "The verse gives the speaker a title rather than a name, and every commentary consulted for it supplies the name. At-Tabari writes that by this Allah means Salih, the messenger of Allah; Ibn Kathir, al-Qurtubi, al-Baghawi, as-Sa'di and the Muyassar all say the same, Salih (AS). The abridged English Ibn Kathir also says the phrase refers to Salih. As-Sa'di adds one word about the manner of his speaking: he said it muhadhdhiran, as a warning. That word leads straight into the grammar of the rest of the verse.",
            "bn": "আয়াত বক্তার নাম বলে না, দেয় তাঁর উপাধি। এ আয়াতের জন্য যত তাফসীর আনা হয়েছে, প্রত্যেকটি নামটা জানিয়ে দেয়। তাবারী লেখেন, এখানে আল্লাহ বুঝিয়েছেন আল্লাহর রাসূল সালিহকে। ইবন কাসীর, কুরতুবী, বাগাভী, সাদী আর মুয়াসসারও একই কথা বলেন: তিনি সালিহ (আঃ)। সংক্ষিপ্ত ইংরেজি ইবন কাসীরও বলে, কথাটা সালিহের দিকেই ইঙ্গিত করে। সাদী তাঁর বলার ধরন নিয়ে একটি শব্দ যোগ করেন: তিনি বলেছিলেন মুহাযযিরান, অর্থাৎ সাবধান করে। এই শব্দটাই আমাদের নিয়ে যায় আয়াতের বাকি অংশের ব্যাকরণে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Spoken as a Warning",
          "bn": "সতর্কবাণী হয়ে আসা একটি নাম"
        },
        "p": [
          {
            "en": "Naqata stands in the accusative, with no verb beside it to explain why. Al-Qurtubi names the construction: it is in the accusative of warning, at-tahdhir, as when one says al-asad al-asad, the lion, the lion, or as-sabiyy as-sabiyy, the child, the child, or al-hidhar al-hidhar, caution, caution. The bare noun, repeated or alone, carries the alarm by itself. Al-Qurtubi then supplies the sense: beware the she-camel of Allah, meaning beware of hamstringing her. At-Tabari spells out the same implied verb: ihdharu, beware the she-camel of Allah and her drink.",
            "bn": "নাকাতা শব্দটা মানসূব, পাশে এমন কোনো ক্রিয়া নেই যা কারণটা বলে দেয়। কুরতুবী গঠনটার নাম বলেন: এ হলো সতর্ক করার মানসূব, তাহযীর। যেমন কেউ বলে আল-আসাদ আল-আসাদ, সিংহ, সিংহ! কিংবা আস-সাবিয়্যা আস-সাবিয়্যা, বাচ্চাটা, বাচ্চাটা! কিংবা আল-হিযার আল-হিযার, সাবধান, সাবধান! শুধু বিশেষ্যটা উচ্চারণ করলেই বিপদের ঘণ্টা বেজে যায়। তারপর কুরতুবী অর্থটা খুলে বলেন: আল্লাহর উটনি থেকে সাবধান, মানে তার পায়ের রগ কাটা থেকে সাবধান। তাবারীও একই উহ্য ক্রিয়াটা স্পষ্ট করে দেন: ইহযারূ, আল্লাহর উটনি আর তার পানি পানের ব্যাপারে সাবধান হও।"
          },
          {
            "en": "What exactly they were to beware of is phrased in two ways. Ibn Kathir writes: beware of touching the she-camel of Allah with any harm, an tamassuha bi-su'. The Muyassar uses the same words, beware of touching her with harm. As-Sa'di and al-Baghawi name one act instead: beware of 'aqr, hamstringing the she-camel of Allah, and al-Qurtubi's gloss above is the same. The first wording covers any injury at all; the second names the very deed that 91:14 will report. Both stay inside the warning, and this article does not rank them.",
            "bn": "ঠিক কোন জিনিস থেকে সাবধান থাকতে হবে, সে কথা দুইভাবে বলা হয়েছে। ইবন কাসীর লেখেন: আল্লাহর উটনিকে কোনো রকম কষ্ট দিয়ে ছোঁয়া থেকে সাবধান, আন তামাসসূহা বিসূ। মুয়াসসারও একই কথা বলে, তাকে মন্দ উদ্দেশ্যে ছোঁয়া থেকে সাবধান। সাদী আর বাগাভী বরং একটা নির্দিষ্ট কাজের নাম নেন: আকর, অর্থাৎ আল্লাহর উটনির পায়ের রগ কাটা থেকে সাবধান। ওপরে কুরতুবীর ব্যাখ্যাও তাই। প্রথম ভাষ্য যেকোনো আঘাতকেই ঢেকে নেয়। দ্বিতীয়টা ঠিক সেই কাজের নাম নেয়, যার খবর দেবে ৯১:১৪। দুটোই সতর্কবাণীর ভেতরে থাকে, আর এই লেখা কোনোটাকে অন্যটার উপরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Simply: Leave Her Be",
          "bn": "নাকি সোজা কথায়: ছেড়ে দাও"
        },
        "p": [
          {
            "en": "The accusative has a second explanation, and two of the commentators record it. Al-Qurtubi introduces it with wa-qila, and it is said: dharu naqata Allahi, leave the she-camel of Allah alone. He supports it from an earlier telling of the same story and quotes it: this is the she-camel of Allah, a sign for you, so leave her to graze in Allah's land and do not touch her with harm, or a painful punishment will seize you. Those are the words of 7:73. Al-Baghawi gives the same parsing and names the grammarian az-Zajjaj as its holder.",
            "bn": "মানসূব হওয়ার আরেকটা ব্যাখ্যাও আছে, আর দুজন তাফসীরকার তা লিখে রেখেছেন। কুরতুবী তা আনেন ওয়া কীলা দিয়ে, অর্থাৎ বলা হয়: যারূ নাকাতাল্লাহ, আল্লাহর উটনিকে ছেড়ে দাও। এর সমর্থনে তিনি একই কাহিনির আগের এক বর্ণনা উদ্ধৃত করেন: এ আল্লাহর উটনি, তোমাদের জন্য নিদর্শন। তাকে আল্লাহর জমিনে চরে খেতে দাও, মন্দ উদ্দেশ্যে তাকে ছুঁয়ো না, নইলে যন্ত্রণাদায়ক শাস্তি তোমাদের পাকড়াও করবে। এগুলো ৭:৭৩ আয়াতের শব্দ। বাগাভীও একই বিশ্লেষণ দেন, আর এর প্রবক্তা হিসেবে ব্যাকরণবিদ যাজ্জাজের নাম বলেন।"
          },
          {
            "en": "On this reading the second noun follows the first under the same implied verb. Al-Qurtubi glosses wa-suqyaha as dharuha wa-shurbaha, leave her and her drinking. In al-Baghawi's text the gloss runs straight on from az-Zajjaj: leave the she-camel of Allah, and leave her drinking of the water, so do not interfere with the water on the day of her drinking. So the verse can be heard as an alarm, beware, or as a command, leave her. Al-Qurtubi gives the warning first and the command after wa-qila; al-Baghawi gives the warning and then az-Zajjaj's leave. Neither settles it, and this article keeps both.",
            "bn": "এই পাঠে দ্বিতীয় বিশেষ্যটাও একই উহ্য ক্রিয়ার অধীনে আসে। কুরতুবী ওয়া সুকইয়াহার ব্যাখ্যা দেন যারূহা ওয়া শুরবাহা দিয়ে: তাকে আর তার পানি পান ছেড়ে দাও। বাগাভীর লেখায় যাজ্জাজের কথার পরেই ব্যাখ্যাটা চলতে থাকে: আল্লাহর উটনিকে ছেড়ে দাও, পানি থেকে তার পান করাটাও ছেড়ে দাও, তার পান করার দিনে পানির দিকে হাত বাড়িয়ো না। তাহলে আয়াতটা শোনা যায় দুইভাবে। হয় বিপদের ডাক, সাবধান! নয়তো আদেশ, তাকে ছেড়ে দাও। কুরতুবী আগে সতর্কবাণী দেন, আদেশটা আনেন ওয়া কীলার পরে। বাগাভী আগে সতর্কবাণী দেন, তারপর যাজ্জাজের ছেড়ে দেওয়ার কথা। কেউ চূড়ান্ত রায় দেননি, এই লেখাও দুটোই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Share Allah Apportioned",
          "bn": "আল্লাহর বেঁধে দেওয়া ভাগ"
        },
        "p": [
          {
            "en": "Why warn them about her drink at all? At-Tabari answers directly. Salih warned them about the she-camel's suqya because he had already told them, by Allah's command, that she had the drinking of a day and they the drinking of another day, a day other than hers; at-Tabari says he explained this earlier in his commentary. He then cites Qatada for the word itself: wa-suqyaha means the share Allah apportioned to her of this water, qism Allah alladhi qasama laha. On this reading her drink is a portion Allah fixed.",
            "bn": "তার পানি পানের ব্যাপারে আলাদা করে সাবধান করার দরকার পড়ল কেন? তাবারী সরাসরি জবাব দেন। সালিহ উটনির সুকইয়া নিয়ে তাদের সাবধান করেছিলেন, কারণ আল্লাহর আদেশে তিনি আগেই তাদের জানিয়ে দিয়েছিলেন: এক দিনের পানি উটনির, আরেক দিনের পানি তাদের, আর সে দিন উটনির দিন থেকে আলাদা। তাবারী বলেন, এ কথা তিনি তাফসীরের আগের অংশে ব্যাখ্যা করেছেন। তারপর শব্দটার অর্থে তিনি কাতাদার কথা আনেন: ওয়া সুকইয়াহা মানে এই পানি থেকে আল্লাহ তার জন্য যে ভাগ বেঁধে দিয়েছেন, কিসমুল্লাহিল্লাযী কাসামা লাহা। এই পাঠে তার পানি পান আল্লাহর ঠিক করে দেওয়া এক হিস্যা।"
          },
          {
            "en": "Ibn Kathir puts the same terms as a prohibition: do not transgress against her in her drinking, for she has the drinking of a day and you have the drinking of a known day. The Muyassar repeats the sentence almost word for word, and adds before it that she is a sign Allah sent to them. The abridged English Ibn Kathir reads: do not transgress against her in her drinking, for she has been allocated a day to drink and you have been allocated a day to drink, as is known to you.",
            "bn": "ইবন কাসীর একই শর্তকে নিষেধের ভাষায় বলেন: তার পানি পানে তার উপর বাড়াবাড়ি কোরো না। কারণ এক দিনের পানি তার, আর নির্দিষ্ট এক দিনের পানি তোমাদের। মুয়াসসার বাক্যটা প্রায় হুবহু দোহরায়, আর তার আগে জুড়ে দেয় যে উটনি আল্লাহর পাঠানো এক নিদর্শন। সংক্ষিপ্ত ইংরেজি ইবন কাসীরের ভাষ্যও তাই: পানি পানে তার উপর সীমা ছাড়িয়ো না, তার জন্য পান করার একটা দিন বরাদ্দ, তোমাদের জন্যও একটা দিন, যা তোমাদের জানা।"
          },
          {
            "en": "Al-Qurtubi points the reader back to his fuller treatment in Surat ash-Shu'ara and Surat al-Qamar, and adds one line: when they demanded the she-camel and he brought her out for them from the rock, they were given a day's drinking from their well and she a day's drinking in its place, and fa-shaqqa dhalika 'alayhim, that weighed hard on them. The Muyassar has the same phrase after the terms. The articles on 26:155 and 54:27 take up the rota and the test at length, so this one does not repeat them.",
            "bn": "কুরতুবী পাঠককে ফেরত পাঠান সূরা শুআরা আর সূরা কামারে তাঁর বিস্তারিত আলোচনায়। এখানে শুধু একটা কথা যোগ করেন: তারা যখন উটনি চাইল আর তিনি পাথর থেকে তাকে বের করে আনলেন, তখন তাদের কূপ থেকে এক দিনের পানি দেওয়া হলো তাদের, আর তার বদলে এক দিনের পানি উটনির। ফাশাক্কা যালিকা আলাইহিম, ব্যাপারটা তাদের কাছে ভারী ঠেকল। মুয়াসসারও শর্তগুলোর পরে একই কথা বলে। ২৬:১৫৫ আর ৫৪:২৭ আয়াতের লেখায় পালার ব্যবস্থা আর পরীক্ষার কথা বিস্তারিত এসেছে, তাই এখানে আর তার পুনরাবৃত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Turns to the Milk",
          "bn": "সাদীর চোখে দুধের নিয়ামত"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse differently, and the difference is worth keeping. He writes: beware of hamstringing the she-camel of Allah, which He made for you a mighty sign, aya 'azima, and do not repay Allah's favour to you, bi-saqyi labaniha, the drinking of her milk, by hamstringing her. His gloss never mentions the day of water. Where the verse has suqyaha, his sentence speaks of saqy, her milk given them to drink. The other commentators read suqyaha as her own drinking at the well; as-Sa'di's sentence points to her milk.",
            "bn": "সাদী আয়াতটা পড়েন একটু অন্যভাবে, আর এই পার্থক্যটা ধরে রাখার মতো। তিনি লেখেন: আল্লাহর উটনির পায়ের রগ কাটা থেকে সাবধান, যাকে তিনি তোমাদের জন্য বানিয়েছেন এক মহা নিদর্শন, আয়াতুন আযীমা। তার দুধ পান করানোর মাধ্যমে আল্লাহ তোমাদের যে নিয়ামত দিচ্ছেন, বিসাকয়ি লাবানিহা, তার জবাবে তার রগ কেটো না। তাঁর ব্যাখ্যায় পানির পালার কথা একবারও নেই। আয়াতে যেখানে সুকইয়াহা, তাঁর বাক্যে সেখানে আছে সাকয়, অর্থাৎ উটনির দুধ, যা তাদের পান করতে দেওয়া হতো। অন্য তাফসীরকারেরা সুকইয়াহা পড়েন কূপে উটনির নিজের পান করা হিসেবে, আর সাদীর বাক্য ইঙ্গিত করে তার দুধের দিকে।"
          },
          {
            "en": "The two readings ask the same thing of Thamud, and both rest on the word of Allah in naqata Allahi. As-Sa'di calls her a mighty sign Allah made for them; the Muyassar calls her a sign Allah sent them, pointing to the truthfulness of their prophet. On the water reading, the people were asked to give up a turn; on as-Sa'di's, they were asked not to answer a gift with a blade. Either way, a great favour came with one small limit, and the verse is the limit spoken aloud.",
            "bn": "দুই পাঠই সামূদের কাছে একই জিনিস চায়, আর দুটোরই ভিত্তি নাকাতাল্লাহি কথার ভেতরের আল্লাহ শব্দটা। সাদী উটনিকে বলেন আল্লাহর বানানো মহা নিদর্শন। মুয়াসসার বলে, আল্লাহর পাঠানো নিদর্শন, যা তাদের নবীর সত্যবাদিতার প্রমাণ। পানির পাঠে মানুষের কাছে চাওয়া হয়েছিল একটা পালা ছেড়ে দিতে। সাদীর পাঠে চাওয়া হয়েছিল, দানের জবাব যেন ছুরি দিয়ে না হয়। যেভাবেই পড়ি, বিশাল এক নিয়ামতের সঙ্গে এসেছিল ছোট্ট একটা সীমা। আয়াতটা সেই সীমারই উচ্চারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Thamud in a Surah of Souls",
          "bn": "আত্মার সূরায় সামূদের কথা"
        },
        "p": [
          {
            "en": "Why does this story appear here at all? Ma'arif al-Qur'an, commenting on 91:9 to 91:13 together, reads 91:9 and 91:10 as dividing mankind into two groups, the successful and the unsuccessful. An example of the second group, it says, is then cited, to show how it rejected Allah's message and how Allah destroyed it; sometimes, it adds, an instalment of punishment is given in this world, as with Thamud. The article on 91:9 treats those two verses and the purifying of the soul; this verse belongs to the example that follows them.",
            "bn": "এই কাহিনি এখানে এল কেন? মাআরিফুল কুরআন ৯১:৯ থেকে ৯১:১৩ একসঙ্গে ব্যাখ্যা করে। তার পাঠে ৯১:৯ ও ৯১:১০ গোটা মানবজাতিকে দুই দলে ভাগ করে: সফল আর ব্যর্থ। তারপর, মাআরিফ বলে, দ্বিতীয় দলের একটা দৃষ্টান্ত আনা হয়েছে, যেন দেখা যায় তারা কীভাবে আল্লাহর বার্তা প্রত্যাখ্যান করল আর আল্লাহ কীভাবে তাদের ধ্বংস করলেন। কখনো কখনো, মাআরিফ যোগ করে, শাস্তির একটা কিস্তি দুনিয়াতেই দেওয়া হয়, যেমন সামূদের বেলায়। ৯১:৯ আয়াতের লেখায় সেই দুই আয়াত আর আত্মা পবিত্র করার কথা এসেছে। এই আয়াত তার পরের দৃষ্টান্তের অংশ।"
          },
          {
            "en": "Ma'arif notes that the story is told fully elsewhere and lists the places: 7:73 to 7:79, 11:61 to 11:68, 26:141 to 26:159, 27:45 to 27:53, 41:17 and 41:18, 54:23 to 54:32, and 69:4 and 69:5. Here, it says, only a brief reference is made. That brevity shows in this verse. Of everything Salih said to his people across those tellings, the surah keeps only two nouns, the she-camel of Allah and her drink. Whatever else the warning held, this is the part that stands between the rising-up of 91:12 and the denial of 91:14.",
            "bn": "মাআরিফ জানায়, কাহিনিটা পুরোপুরি বলা হয়েছে অন্য জায়গায়, আর জায়গাগুলোর তালিকাও দেয়: ৭:৭৩ থেকে ৭:৭৯, ১১:৬১ থেকে ১১:৬৮, ২৬:১৪১ থেকে ২৬:১৫৯, ২৭:৪৫ থেকে ২৭:৫৩, ৪১:১৭ ও ৪১:১৮, ৫৪:২৩ থেকে ৫৪:৩২, আর ৬৯:৪ ও ৬৯:৫। এখানে, মাআরিফের ভাষায়, শুধু সংক্ষিপ্ত ইঙ্গিত দেওয়া হয়েছে। সেই সংক্ষেপ এই আয়াতেই চোখে পড়ে। ওইসব বর্ণনায় সালিহ (আঃ) নিজের কওমকে যত কথা বলেছেন, তার মধ্যে সূরাটি রেখেছে শুধু দুটি বিশেষ্য: আল্লাহর উটনি আর তার পানি পান। সতর্কবাণীতে আর যা-ই থাকুক, ৯১:১২ আয়াতের উঠে দাঁড়ানো আর ৯১:১৪ আয়াতের অস্বীকারের মাঝখানে দাঁড়িয়ে আছে এই অংশটুকুই।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Nouns Held Up to Me",
          "bn": "দুটি বিশেষ্য, আমার সামনে"
        },
        "p": [
          {
            "en": "This must be said plainly. Thamud are named in the Qur'an among the peoples who denied their messenger, and the verses after this one tell of their end. But the verse speaks only of what it names: a warning given to one ancient people about one sign. It licenses nothing against any living person or community. It is no judgement on the people of any land today, and no warrant to point at anyone. Salih (AS) appears here only as the verse names him, the messenger of Allah, delivering the warning he was given.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। কুরআন সামূদের নাম নেয় সেই জাতিগুলোর মধ্যে, যারা নিজেদের রাসূলকে অস্বীকার করেছিল। এই আয়াতের পরের আয়াতগুলো তাদের পরিণতির কথা বলে। কিন্তু আয়াতটা শুধু তা-ই বলে, যা পাঠ বলে: প্রাচীন এক জাতিকে একটি নিদর্শনের ব্যাপারে দেওয়া এক সতর্কবাণী। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো ভূখণ্ডের মানুষ নিয়ে এটা কোনো রায় নয়, কারও দিকে আঙুল তোলার সনদও নয়। সালিহ (আঃ) এখানে আছেন ঠিক যেভাবে আয়াত তাঁকে চেনায়: আল্লাহর রাসূল, যিনি তাঁকে দেওয়া সতর্কবাণী পৌঁছে দিচ্ছেন।"
          },
          {
            "en": "So the verse is handed to the reader as a mirror. A favour from Allah arrived with a single small condition, and the condition was spoken in two nouns. Most of what we are given comes the same way: health with a limit, wealth with a share that belongs to others, a trust with a boundary around it. The question the verse leaves is not about Thamud. It is whether, when the gift is large and the limit is small, I keep the limit, or treat it as the one thing in my way.",
            "bn": "তাই আয়াতটা পাঠকের হাতে আসে আয়না হয়ে। আল্লাহর এক নিয়ামত এসেছিল একটিমাত্র ছোট শর্ত নিয়ে, আর শর্তটা বলা হয়েছিল দুটি বিশেষ্যে। আমরা যা পাই, তার বেশির ভাগই আসে এভাবে। সুস্থতা আসে সীমা নিয়ে, সম্পদ আসে অন্যের হক নিয়ে, আমানত আসে চারপাশে বেড়া নিয়ে। আয়াত যে প্রশ্ন রেখে যায়, তা সামূদকে নিয়ে নয়। প্রশ্নটা আমাকে নিয়ে: দান যখন বিশাল আর সীমা ছোট, আমি কি সীমাটা মেনে চলি? নাকি ভাবি, আমার পথে ওটাই একমাত্র বাধা?"
          }
        ]
      }
    ]
  }
});
