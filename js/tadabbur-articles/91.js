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
            "bn": "ওয়াশ শামসি ওয়া দুহাহা: শপথ সূর্যের আর তার উজ্জ্বল কিরণের। মাত্র দুটি আরবি শব্দে সূরা আশ-শামসের শুরু, আর সূরার নামও এসেছে প্রথম শব্দটি থেকে। কুরতুবী লিখেছেন, সূরাটি সর্বসম্মতভাবে মাক্কী, আয়াত পনেরোটি। ইবন কাসীর ও বাগাভীও একে মাক্কী বলেছেন। ৯১:১ থেকে ৯১:৭ পর্যন্ত সাতটি শপথ পরপর এসেছে, এটি তার প্রথমটি। মাআরিফুল কুরআন বলে, এ আয়াতগুলোতে আল্লাহ নানা বস্তু ও প্রাকৃতিক ঘটনার শপথ করেছেন। এতে এসব সৃষ্টির মর্যাদা বাড়ে, আর মানুষের মনোযোগ সেদিকে টেনে আনা হয়।"
          },
          {
            "en": "At-Tabari states the sense of the clause before he discusses any word in it: an oath that our Lord swore by the sun and its duha, and the meaning of the speech is, I swear by the sun, and by the duha of the sun. That paraphrase settles the small pronoun at the end of duhaha: the -ha returns to the sun itself. The Muyassar reads it the same way, in a single line: Allah swore by the sun, and its daytime, and its shining at the forenoon.",
            "bn": "কোনো শব্দ নিয়ে আলোচনায় যাওয়ার আগে তাবারী গোটা বাক্যের অর্থটা বলে দেন। এটি একটি শপথ, আমাদের রব শপথ করেছেন সূর্যের আর তার দুহার। কথাটার মানে দাঁড়ায়: আমি শপথ করছি সূর্যের, আর সূর্যের দুহার। এই ব্যাখ্যা থেকেই দুহাহা শব্দের শেষের ছোট্ট সর্বনামটির মীমাংসা হয়ে যায়। শেষের 'হা' ফিরেছে সূর্যের দিকেই। মুয়াসসারও এক লাইনে একই কথা বলে: আল্লাহ শপথ করেছেন সূর্যের, তার দিনের, আর পূর্বাহ্ণে তার ঝলমলে আলোর।"
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
            "bn": "এরপর তাবারী জানান, দুহাহা শব্দের অর্থ নিয়ে তাফসীরকারদের মধ্যে মতভেদ আছে। কারও মতে এর মানে সূর্য আর দিন, তাঁদের কাছে দুহা মানে পুরো দিনটাই। নিজের সনদে তিনি কাতাদার ব্যাখ্যা আনেন: এই দিন। অন্যরা বলেছেন, এর মানে সূর্যের আলো। ইবন আবী নাজীহ হয়ে মুজাহিদ পর্যন্ত পৌঁছানো সনদে তিনি একটিমাত্র শব্দ আনেন: তার আলো। দুই ব্যাখ্যা খুব দূরের নয়, আবার এক জিনিসও নয়। একটি বলছে সময়ের একটা পরিসরের কথা, অন্যটি বলছে সেই জিনিসের কথা, যা ওই সময়টাকে ভরে রাখে।"
          },
          {
            "en": "At-Tabari then gives his own verdict. The correct thing to say, he writes, is that Allah swore by the sun and its daytime, because the manifest light of the sun is the daytime. He does not discard either report; he joins them, since the day is the sun's light made visible. Ibn Kathir, in his Arabic tafsir, repeats Mujahid, Qatada and Ibn Jarir's verdict in nearly the same words, and the English abridgement of Ibn Kathir does likewise. For these two the duha is daylight, owed to the sun.",
            "bn": "তারপর তাবারী নিজের মত জানান। তাঁর ভাষায়, সঠিক কথা হলো: আল্লাহ শপথ করেছেন সূর্যের আর তার দিনের, কারণ সূর্যের প্রকাশ্য আলোই তো দিন। কোনো বর্ণনাই তিনি বাদ দেন না, বরং দুটিকে মিলিয়ে দেন। দিন তো সূর্যেরই আলো, যা চোখে দেখা যায়। ইবন কাসীর তাঁর আরবি তাফসীরে মুজাহিদ, কাতাদা আর ইবন জারীরের এই সিদ্ধান্ত প্রায় একই শব্দে তুলে দেন। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণেও তা-ই আছে। এই দুজনের কাছে দুহা মানে দিনের আলো, যার উৎস সূর্য।"
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
            "en": "Al-Qurtubi gathers more glosses than anyone else fetched here. Mujahid: its light and its shining. Qatada: its splendour, which differs from the report at-Tabari carries from Qatada, so the two transmissions are kept side by side here as each mufassir gives them. Al-Suddi: its heat. Ad-Dahhak from Ibn Abbas: He placed light in it and made it hot. Al-Yazidi: its spreading out. Each word catches a different side of the same morning sun.",
            "bn": "এখানে যত তাফসীর দেখা হয়েছে, তার মধ্যে সবচেয়ে বেশি ব্যাখ্যা জড়ো করেছেন কুরতুবী। মুজাহিদ বলেছেন: তার আলো ও ঝলমলে দীপ্তি। কাতাদা বলেছেন: তার সৌন্দর্যের ছটা। তাবারী কাতাদা থেকে যা এনেছেন, এটা তার থেকে আলাদা। তাই দুই বর্ণনাই এখানে পাশাপাশি রাখা হলো, যে মুফাসসির যেভাবে এনেছেন সেভাবে। সুদ্দী বলেছেন: তার তাপ। দাহহাক ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেছেন: আল্লাহ তাতে আলো রেখেছেন আর তাকে উত্তপ্ত করেছেন। ইয়াযীদী বলেছেন: তার ছড়িয়ে পড়া। প্রতিটি শব্দ সকালের একই সূর্যের আলাদা একটা দিক ধরেছে।"
          },
          {
            "en": "Al-Qurtubi adds one wider reading, introduced with it was said and attributed to al-Mawardi: the duha is whatever of every created thing becomes visible by the sun, so that the oath would be by the sun and by all the creatures of the earth together. He then records al-Farra's view that the duha is the daytime, like Qatada's, and states that the meaning known among the Arabs is that the duha is the whole day, because the sun's light lasts through it.",
            "bn": "কুরতুবী আরও একটি বিস্তৃত ব্যাখ্যা আনেন 'বলা হয়েছে' কথাটি দিয়ে, আর জানান যে মাওয়ার্দী এটি বর্ণনা করেছেন। এ মতে দুহা হলো সূর্যের আলোয় প্রকাশ পাওয়া সব সৃষ্টি। তাহলে শপথটা হবে সূর্যের, আর তার সঙ্গে পৃথিবীর সব সৃষ্টির। এরপর তিনি ফাররার মত উল্লেখ করেন: দুহা মানে দিন, কাতাদার কথার মতো। তিনি আরও বলেন, আরবদের কাছে পরিচিত অর্থ হলো দুহা মানে পুরো দিন। কারণ সারা দিন ধরেই সূর্যের আলো টিকে থাকে।"
          },
          {
            "en": "Al-Baghawi is briefer. Mujahid and al-Kalbi: its light. The duha, he explains, is when the sun rises and its light becomes clear. Qatada: the whole day. Muqatil: its heat. As-Sa'di gives a two-part gloss: its light, and the benefit that issues from it. So the fetched tafsirs name, between them, light, shining, splendour, heat, spreading, the clearing of the light after sunrise, the whole day, and the benefit the light brings. This article lists them and chooses none.",
            "bn": "বাগাভী সংক্ষেপে বলেন। মুজাহিদ ও কালবীর মতে: তার আলো। তিনি ব্যাখ্যা করেন, দুহা হলো সেই সময়, যখন সূর্য ওঠে আর তার আলো পরিষ্কার হয়ে আসে। কাতাদার মতে: পুরো দিন। মুকাতিলের মতে: তার তাপ। সা'দী দুই ভাগে অর্থ করেন: তার আলো, আর তা থেকে আসা উপকার। সব মিলিয়ে এই তাফসীরগুলো যা যা বলেছে: আলো, দীপ্তি, সৌন্দর্যের ছটা, তাপ, ছড়িয়ে পড়া, সূর্য ওঠার পর আলোর পরিষ্কার হয়ে আসা, পুরো দিন, আর আলোর উপকার। এ লেখা সবগুলো তুলে ধরে, কোনোটিকে বেছে নেয় না।"
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
            "bn": "দুহা মানে তাপ, এ মতের পক্ষে দুটি তাফসীর কুরআনেরই একটি আয়াতকে সাক্ষী হিসেবে আনে। বাগাভী মুকাতিলের মত উল্লেখ করে সূরা ত্বা-হার ২০:১১৯ আয়াতের 'ওয়া লা তাদহা' কথাটির সঙ্গে তুলনা করেন। তাঁর ব্যাখ্যায় এর মানে: রোদের তাপ তোমাকে কষ্ট দেবে না। কুরতুবী বলেন, যাঁরা দুহাকে সূর্যের তাপ বলেছেন, তাঁরা এই আয়াত থেকেই দলিল নিয়েছেন। তারপর তিনি দুই পক্ষকে মিলিয়ে দেন। কেউ দুহাকে সূর্যের আলো বলুন বা তাপ, মনে রাখতে হবে যে সূর্যের আলো কখনো তার তাপ ছাড়া আসে না।"
          },
          {
            "en": "Ma'arif al-Qur'an puts the stress elsewhere. The word duha, it says, is that part of the day when the sun rises early in the morning and goes up slightly higher, and its light spreads on the earth; man observes it near to himself and observes it fully on account of lack of heat. For Ma'arif, then, the forenoon is the hour of full light and little heat, while al-Suddi and Muqatil take the word to name the heat itself. The difference is kept here as a difference.",
            "bn": "মাআরিফুল কুরআন জোর দেয় অন্য জায়গায়। তার ব্যাখ্যায় দুহা হলো দিনের সেই অংশ, যখন সূর্য ভোরে উঠে খানিকটা ওপরে চড়ে আর তার আলো পৃথিবীতে ছড়িয়ে পড়ে। মানুষ তখন সূর্যকে নিজের কাছাকাছি দেখে, আর তাপ কম থাকায় পুরোপুরি দেখতে পায়। মাআরিফের কাছে তাই পূর্বাহ্ণ মানে আলো পূর্ণ, তাপ অল্প। অথচ সুদ্দী ও মুকাতিলের কাছে শব্দটা তাপকেই বোঝায়। এই পার্থক্যটা এখানে পার্থক্য হিসেবেই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word Rooted in Sunlight",
          "bn": "যে শব্দের শিকড় রোদে"
        },
        "p": [
          {
            "en": "Al-Qurtubi also stops on the word itself. He explains that the duha is attached to the sun by possession, its duha, because it only comes about through the sun's rising high. He notes that the word is feminine, as in the saying the duha has risen, and is sometimes treated as masculine. Those who make it feminine, he says, take it as the plural of dahwa; and as a time word it behaves like sahar, so that when you mean the forenoon of your own day you say, I met him duha, without the ending tanwin.",
            "bn": "কুরতুবী শব্দটার ওপরও থামেন। তিনি বলেন, দুহাকে সূর্যের সঙ্গে জুড়ে 'তার দুহা' বলা হয়েছে, কারণ সূর্য ওপরে না উঠলে দুহা হয়ই না। তিনি উল্লেখ করেন, শব্দটি স্ত্রীলিঙ্গ, যেমন বলা হয় 'দুহা চড়ে গেছে'। কখনো আবার পুংলিঙ্গেও ব্যবহৃত হয়। যাঁরা স্ত্রীলিঙ্গ ধরেন, তাঁরা একে দাহওয়া শব্দের বহুবচন মনে করেন। সময় বোঝাতে শব্দটা আচরণ করে সাহার শব্দের মতো। তাই নিজের দিনেরই পূর্বাহ্ণ বোঝাতে চাইলে বলা হয়, তার সঙ্গে দুহায় দেখা হয়েছে, শেষে তানভীন ছাড়া।"
          },
          {
            "en": "Two authorities on the language in al-Qurtubi's passage trace the word to its source. Al-Mubarrad says the origin of duha is ad-dihh, which is the light of the sun, the alif at its end being changed from the second ha. Abu al-Haytham defines ad-dihh as the opposite of shade: the sun's light lying on the face of the earth. So on this account the word at the root of the oath is sunlight where it touches the ground, the brightness a person stands in when they step out of the shade.",
            "bn": "কুরতুবীর আলোচনায় ভাষার দুজন বিশেষজ্ঞ শব্দটির মূল খুঁজে দেখান। মুবাররাদ বলেন, দুহার মূল হলো 'আদ-দিহ্‌হ', মানে সূর্যের আলো। শব্দের শেষের আলিফটি আসলে দ্বিতীয় 'হা' বদলে তৈরি। আবুল হাইসাম 'আদ-দিহ্‌হ'-এর সংজ্ঞা দেন ছায়ার উল্টো হিসেবে: পৃথিবীর বুকে পড়ে থাকা সূর্যের আলো। এ হিসাবে শপথের এই শব্দের শিকড়ে আছে মাটিতে এসে পড়া রোদ। ছায়া থেকে বেরিয়ে এলে মানুষ যে আলোর মধ্যে দাঁড়ায়, সেটাই।"
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
            "bn": "উজ্জ্বল কিরণের শপথ কি আলাদাভাবে করা হয়েছে, নাকি তা সূর্যেরই বিশেষণ? মুজাহিদের ব্যাখ্যার ঠিক পরেই কুরতুবী তিনটি শব্দ যোগ করেন: ওয়া হুয়া কাসামুন সানিন, আর এটি দ্বিতীয় শপথ। এ পাঠে আয়াতে শপথের বিষয় দুটি: সূর্য, আর তার দুহা। তাবারীর ব্যাখ্যাও গঠনের দিক থেকে একই দিকে যায়, কারণ তিনি অব্যয়টা দুবার বলেন: আমি শপথ করছি সূর্যের, আর সূর্যের দুহার। মুয়াসসার আরও এগিয়ে সূর্য, তার দিন আর তার ঝলমলে আলো, তিনটির কথাই বলে।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the grammar otherwise. The phrase and his broad light, it says, is joined to by the sun with the particle and, yet the context indicates that it stands in an adjectival position qualifying the sun, as if to say: I swear by the sun when it is in the time of forenoon. Here there is one thing sworn by, the sun, held at one hour of the day. The two readings are set down side by side, and neither is preferred here.",
            "bn": "মাআরিফুল কুরআন ব্যাকরণটা অন্যভাবে পড়ে। তার মতে, 'ও তার উজ্জ্বল আলো' কথাটি 'সূর্যের শপথ'-এর সঙ্গে 'ও' অব্যয় দিয়ে যুক্ত হলেও প্রসঙ্গ বলে দেয়, এটি আসলে সূর্যের বিশেষণের জায়গায় বসেছে। যেন বলা হচ্ছে: আমি শপথ করছি সূর্যের, যখন তা পূর্বাহ্ণের সময়ে থাকে। এখানে শপথের বিষয় একটিই, সূর্য, যাকে দিনের একটি নির্দিষ্ট প্রহরে ধরা হয়েছে। দুই পাঠই এখানে পাশাপাশি রাখা হলো, কোনোটিকে প্রাধান্য দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Sworn Over the Soul's Outcome",
          "bn": "নফসের পরিণতি নিয়ে শপথ"
        },
        "p": [
          {
            "en": "An oath is sworn over something, and three of the fetched tafsirs say what. As-Sa'di opens: Allah swore by these great signs over the successful soul and the other souls, the wicked ones. The English abridgement of Ibn Kathir heads the passage: Allah swears by His creation that the person who purifies himself will be successful and the person who corrupts himself will fail. The Muyassar, whose paraphrase covers 91:1 to 91:10 as a single group, runs from the sun straight on to he has succeeded who purified it.",
            "bn": "শপথ করা হয় কোনো কথার ওপর, আর এখানে দেখা তিনটি তাফসীর বলে দেয় সেই কথাটা কী। সা'দী শুরুতেই বলেন: আল্লাহ এই মহান নিদর্শনগুলোর শপথ করেছেন সফল নফস আর অন্যান্য পাপাচারী নফসের ব্যাপারে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণে আলোচনার শিরোনাম: আল্লাহ তাঁর সৃষ্টির শপথ করে বলছেন, যে নিজেকে পবিত্র করে সে সফল হবে, আর যে নিজেকে কলুষিত করে সে ব্যর্থ হবে। মুয়াসসার ৯১:১ থেকে ৯১:১০ একসঙ্গে ব্যাখ্যা করে, সূর্য থেকে সোজা চলে যায় 'সে সফল হলো, যে তাকে পবিত্র করল' পর্যন্ত।"
          },
          {
            "en": "These three place the answer in 91:9 and 91:10, the success of whoever purifies the soul and, in the Muyassar's words, the loss of whoever hides it away in acts of disobedience; and the shipped 91:9 article treats that answer. None of the texts fetched for this verse discusses how the oath is joined to it in grammar, so nothing is said about that here. Between this verse and the answer stand six more oaths; the next is 91:2, by the moon when it follows it.",
            "bn": "এই তিনটি তাফসীর জবাবটা রাখে ৯১:৯ ও ৯১:১০ আয়াতে। যে নফসকে পবিত্র করে তার সাফল্য, আর মুয়াসসারের ভাষায়, যে নিজেকে গুনাহের মধ্যে লুকিয়ে ফেলে তার ক্ষতি। সেই জবাব নিয়ে আলোচনা আছে আগে প্রকাশিত ৯১:৯ আয়াতের লেখায়। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বলে না ব্যাকরণের দিক থেকে শপথটা জবাবের সঙ্গে কীভাবে জুড়েছে। তাই সে বিষয়ে এখানে কিছু বলা হলো না। এই আয়াত আর জবাবের মাঝে আরও ছয়টি শপথ আছে। পরেরটি ৯১:২: চাঁদের শপথ, যখন তা সূর্যের পেছনে আসে।"
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
            "bn": "ইবন কাসীর সূরাটির আলোচনা শুরু করেন জাবির (রাঃ)-এর হাদীস দিয়ে, আর বলেন এটি দুই সহীহ গ্রন্থেই আছে। বুখারীর বর্ণনায় (৭০৫) কথাটা এরকম: জাবির ইবন আবদুল্লাহ আল-আনসারী (রাঃ) বর্ণনা করেন, এক ব্যক্তি চাষের কাজে ব্যবহৃত দুটি উট হাঁকিয়ে আসছিল, তখন রাত নেমে এসেছে। সে মুআয (রাঃ)-কে নামাজ পড়তে দেখে উট বসিয়ে তাঁর সঙ্গে নামাজে শামিল হলো। মুআয (রাঃ) সূরা আল-বাকারা অথবা সূরা আন-নিসা পড়লেন, ফলে লোকটি নামাজ ছেড়ে চলে গেল। পরে সে জানতে পারল, মুআয (রাঃ) তার সমালোচনা করেছেন। তখন সে নবী ﷺ-এর কাছে গিয়ে মুআযের বিরুদ্ধে অভিযোগ করল।"
          },
          {
            "en": "The page continues: \"The Prophet said thrice, \"O Mu`adh ! Are you putting the people to trial?\" It would have been better if you had recited \"Sabbih Isma Rabbika-l-A`la (87)\", Wash-shamsi wa duhaha (91)\", or \"Wal-laili idha yaghsha (92)\", for the old, the weak and the needy pray behind you.\" Jabir said that Mu`adh recited Sura Al-Baqara in the `Isha' prayer.\" Al-Bukhari placed the report in his Sahih. Ibn Kathir's citation words it differently; only al-Bukhari's wording is quoted here. The reason the Prophet ﷺ gives is the people behind the imam.",
            "bn": "এরপর বর্ণনাটি বলে: নবী ﷺ তিনবার বললেন, 'হে মুআয! তুমি কি লোকদের ফিতনায় ফেলছ?' তুমি যদি সাব্বিহিসমা রাব্বিকাল আ'লা (৮৭), ওয়াশ শামসি ওয়া দুহাহা (৯১) অথবা ওয়াল লাইলি ইযা ইয়াগশা (৯২) পড়তে, তবে ভালো হতো। কারণ তোমার পেছনে বৃদ্ধ, দুর্বল আর অভাবী মানুষেরা নামাজ পড়ে। জাবির (রাঃ) বলেন, মুআয (রাঃ) ইশার নামাজে সূরা আল-বাকারা পড়েছিলেন। বুখারী বর্ণনাটি তাঁর সহীহ গ্রন্থে রেখেছেন। ইবন কাসীরের উদ্ধৃতির শব্দ খানিকটা আলাদা, এখানে কেবল বুখারীর শব্দই নেওয়া হয়েছে। নবী ﷺ যে কারণ দেখিয়েছেন, তা হলো ইমামের পেছনে দাঁড়ানো মানুষগুলো।"
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
            "bn": "নিজের জায়গায় রেখে পড়লে দেখা যায়, আয়াতটি কিছু শেখানোর আগেই একটা কাজ করে ফেলে। সূরার শপথের সারি শেষ হবে নফসে গিয়ে, তারপর আসবে সাফল্য আর ক্ষতির কথা। অথচ শুরুটা সূর্য দিয়ে। মাআরিফুল কুরআন নিজের ভাষায় শিক্ষাটা বের করে আনে: এসব প্রাকৃতিক ঘটনা নিয়ে মানুষের ভাবা উচিত, এদের মূল্য আর সৃষ্টির উদ্দেশ্য বোঝার চেষ্টা করা উচিত। সকালের আলো এদের মধ্যে সবচেয়ে সাধারণ। ঠিক সে কারণেই তাকে খেয়াল না করাটা সবচেয়ে সহজ।"
          },
          {
            "en": "As-Sa'di's gloss gives that reflection a direction: its light, and the benefit that issues from it. Light, warmth, the day itself: in every reading the commentators give, the duha is something the listener lives inside and did not make. Before the surah asks what a person has done with his own soul, it shows him a sun he did not light and a morning he did not earn. Gratitude for those is a fair place to begin the reckoning.",
            "bn": "সা'দীর ব্যাখ্যা এই ভাবনাকে একটা দিক দেখায়: সূর্যের আলো, আর তা থেকে আসা উপকার। আলো হোক, উষ্ণতা হোক কিংবা পুরো দিনটা, তাফসীরকারদের যেকোনো ব্যাখ্যাতেই দুহা এমন জিনিস, যার ভেতরে শ্রোতা বেঁচে আছে অথচ যা সে বানায়নি। মানুষ নিজের নফসের সঙ্গে কী করেছে, সে প্রশ্ন তোলার আগে সূরাটি তাকে দেখায় এমন এক সূর্য, যা সে জ্বালায়নি, আর এমন এক সকাল, যা সে উপার্জন করেনি। নিজের হিসাব নেওয়া শুরু করার জন্য এসবের শুকরিয়াই ভালো জায়গা।"
          }
        ]
      }
    ]
  },
  "91:9": {
    "sections": [
      {
        "h": {
          "en": "Seven Verses of Oaths",
          "bn": "সাত আয়াতজুড়ে শপথ"
        },
        "p": [
          {
            "en": "Surah ash-Shams opens with a long run of oaths. Seven consecutive verses, 91:1-7, each begin with one: by the sun and its morning brightness, by the moon when it follows, by the day when it displays it, by the night when it covers it, by the sky and the One who built it, by the earth and the One who spread it, and last by the soul and the One who proportioned it. The sweep travels from the largest bodies overhead down to the thing inside the listener.",
            "bn": "সূরা আশ-শামস শুরু হয় দীর্ঘ এক শপথমালা দিয়ে। পরপর সাতটি আয়াত, 91:1-7, প্রতিটিই শুরু হয় একটি শপথ দিয়ে: সূর্য ও তার সকালের কিরণের শপথ, চাঁদের শপথ যখন সে অনুসরণ করে, দিনের শপথ যখন সে তা উদ্ভাসিত করে, রাতের শপথ যখন সে তা ঢেকে দেয়, আসমান ও যিনি তা বানিয়েছেন তাঁর শপথ, যমীন ও যিনি তা বিছিয়েছেন তাঁর শপথ, আর সবশেষে প্রাণ ও যিনি তাকে সুবিন্যস্ত করেছেন তাঁর শপথ। দৃষ্টি নেমে আসে মাথার ওপরের বিশালতম বস্তুগুলো থেকে শ্রোতার ভেতরের সত্তাটির দিকে।"
          },
          {
            "en": "The final oath is what the surah is actually about. Sawwaha, proportioned it, means — as Ibn Kathir explains — that Allah created the soul sound and balanced upon the fitrah, the original nature that 30:30 names as the disposition on which mankind was made. Then 91:8 stays with that same soul instead of moving on: fa-alhamaha fujuraha wa taqwaha, and He inspired it with its wickedness and its guarding. The equipment is issued in full before any verdict is announced.",
            "bn": "শেষ শপথটিই সূরার আসল বিষয়। 'সাওওয়াহা' অর্থাৎ তাকে সুবিন্যস্ত করেছেন — ইবনে কাসীর ব্যাখ্যা করেন — মানে আল্লাহ প্রাণটিকে সুস্থ ও ভারসাম্যপূর্ণ করে ফিতরাতের ওপর সৃষ্টি করেছেন; সেই আদি স্বভাব, যাকে 30:30 আয়াত মানুষের সৃষ্টিগত প্রকৃতি বলে নাম দেয়। এরপর 91:8 অন্য প্রসঙ্গে না গিয়ে সেই প্রাণের কথাই ধরে রাখে: 'ফা-আলহামাহা ফুজূরাহা ওয়া তাক্বওয়াহা' — অতঃপর তিনি তাকে তার অসৎকর্ম ও আত্মরক্ষার বোধ দিয়ে দিলেন। রায় ঘোষণার আগেই সরঞ্জাম পুরোপুরি হাতে তুলে দেওয়া হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer to the Oath",
          "bn": "শপথের জবাব"
        },
        "p": [
          {
            "en": "91:9 is where all of it lands. Qad aflaha man zakkaha — four words, and Arabic's qad before a past-tense verb reports the outcome as already settled rather than merely promised. Aflaha is falah, the Quran's word for genuine success, the same root the call to prayer repeats. Zakka carries cleaning and growing together: to strip away what spoils a thing so that it can increase. The soul is being handled exactly like a field, cleared of weeds precisely in order to yield.",
            "bn": "91:9 আয়াতেই সবকিছু এসে নামে। 'ক্বাদ আফলাহা মান যাক্কাহা' — চারটি শব্দ; আর অতীতকালের ক্রিয়ার আগে আরবি 'ক্বাদ' ফলাফলটিকে কেবল প্রতিশ্রুতি নয়, বরং ইতিমধ্যেই নিষ্পন্ন বিষয় হিসেবে জানায়। 'আফলাহা' এসেছে 'ফালাহ' থেকে — কুরআনের প্রকৃত সাফল্যের শব্দ, আযানে যে মূল বারবার ফিরে আসে। 'যাক্কা' একসঙ্গে পরিষ্কার করা ও বাড়ানো দুটোই বহন করে: যা নষ্ট করে তা সরিয়ে ফেলা, যেন বৃদ্ধি ঘটতে পারে। প্রাণকে এখানে ঠিক ক্ষেতের মতো দেখা হচ্ছে — আগাছা সাফ করা হয় ফসল ফলবে বলেই।"
          },
          {
            "en": "91:10 completes the pair and is rarely quoted beside it: wa qad khaba man dassaha. Khaba is to come away empty, the disappointment of a venture that failed. Dassaha the mufassirun explain as burying and concealing — it is the verb 16:59 uses for burying the newborn daughter in the ground — and Ibn Kathir glosses it as making the soul dull and neglecting it until obedience is abandoned. The two outcomes are not clean and dirty; they are a soul brought into the light and a soul buried by its own owner.",
            "bn": "91:10 জোড়াটি পূর্ণ করে, অথচ পাশাপাশি খুব কমই উদ্ধৃত হয়: 'ওয়া ক্বাদ খাবা মান দাস্‌সাহা'। 'খাবা' মানে খালি হাতে ফেরা, ব্যর্থ উদ্যোগের হতাশা। 'দাস্‌সাহা'-কে মুফাসসিরগণ ব্যাখ্যা করেন চাপা দেওয়া ও লুকিয়ে ফেলা অর্থে — 16:59 আয়াতে সদ্যোজাত কন্যাকে মাটির নিচে পুঁতে ফেলার জন্য এই ক্রিয়াটিই ব্যবহৃত হয়েছে — আর ইবনে কাসীর এর অর্থ করেন প্রাণকে অনুজ্জ্বল করে ফেলা ও তাকে অবহেলা করতে করতে আনুগত্য ছেড়ে দেওয়া। ফলাফল দুটি 'পরিচ্ছন্ন বনাম নোংরা' নয়; বরং একটি প্রাণ আলোয় আনা, আর একটি প্রাণ তার মালিকের হাতেই চাপা পড়া।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Hand Purifies",
          "bn": "পরিশুদ্ধ করে কার হাত"
        },
        "p": [
          {
            "en": "The verse never names who does the purifying, and Ibn Kathir preserves both readings rather than choosing. It may mean whoever purifies himself through obedience to Allah has succeeded — Qatadah's gloss is that he cleanses the soul of lowly and despicable characteristics, and the like is reported from Mujahid, Ikrimah and Sa'id ibn Jubayr. It may equally mean that he has succeeded whose soul Allah purifies, which is how al-Awfi and Ali ibn Abi Talha report it from Ibn Abbas (RA).",
            "bn": "আয়াতটি কখনোই বলে না পরিশুদ্ধ করার কাজটি কে করে, আর ইবনে কাসীর কোনো একটি বেছে না নিয়ে দুই পাঠই ধরে রাখেন। অর্থ হতে পারে: যে আল্লাহর আনুগত্যের মাধ্যমে নিজেকে পরিশুদ্ধ করে সে-ই সফল হয়েছে — কাতাদাহ (রঃ)-এর ব্যাখ্যা হলো, সে প্রাণটিকে নিচু ও ঘৃণ্য স্বভাবগুলো থেকে পরিষ্কার করে; অনুরূপ কথা মুজাহিদ, ইকরিমা ও সাঈদ ইবনে জুবাইর থেকেও বর্ণিত। আবার অর্থ হতে পারে: সে-ই সফল হয়েছে, আল্লাহ যার প্রাণকে পরিশুদ্ধ করে দেন — আওফী এবং আলী ইবনে আবী তালহা এভাবেই ইবনে আব্বাস (রাঃ) থেকে বর্ণনা করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Prayer for the Soul",
          "bn": "প্রাণের জন্য একটি দোয়া"
        },
        "p": [
          {
            "en": "The Sunnah settles in practice what the grammar leaves open. Muslim records from Zayd ibn Arqam (RA) a supplication the Prophet ﷺ used to make, within which he said: O Allah, give my soul its taqwa and purify it, You are the best of those who purify it, You are its Guardian and its Master. Zayd added that the Prophet ﷺ used to teach them these words, and that they were now teaching them onward. Ask for the purifying, and then go and do it.",
            "bn": "ব্যাকরণ যা খোলা রাখে, সুন্নাহ তা বাস্তবে মীমাংসা করে দেয়। ইমাম মুসলিম যায়দ ইবনে আরকাম (রাঃ) থেকে নবী ﷺ-এর একটি দোয়া বর্ণনা করেন, যার ভেতরে তিনি বলতেন: হে আল্লাহ, আমার প্রাণকে তার তাক্বওয়া দান করুন এবং তাকে পরিশুদ্ধ করুন; আপনিই তাকে পরিশুদ্ধকারীদের মধ্যে শ্রেষ্ঠ, আপনিই তার অভিভাবক ও মনিব। যায়দ (রাঃ) যোগ করেন, নবী ﷺ তাঁদের এই শব্দগুলো শেখাতেন, আর তাঁরা এখন তা অন্যদের শেখাচ্ছেন। পরিশুদ্ধি চেয়ে নিন, তারপর গিয়ে কাজটি করুন।"
          }
        ]
      },
      {
        "h": {
          "en": "Thamud, the Worked Example",
          "bn": "সামূদ — হাতে-কলমে উদাহরণ"
        },
        "p": [
          {
            "en": "The surah does not stop at its verdict. 91:11-15 turn to a nation that buried its soul: Thamud denied through transgression, the most wretched among them was sent forth, and the messenger of Allah warned them about the she-camel of Allah and her drink. They called him a liar and hamstrung her, and their Lord levelled destruction upon them for their sin. The closing line, 91:15, adds that He does not fear its consequence. A principle stated in the abstract is given a name and a ruin.",
            "bn": "সূরাটি তার রায়ের ওপর থেমে থাকে না। 91:11-15 আয়াত ফিরে যায় এমন এক জাতির দিকে, যারা নিজেদের প্রাণ চাপা দিয়েছিল: সামূদ সীমালঙ্ঘন করে অস্বীকার করেছিল, তাদের মধ্যকার সবচেয়ে হতভাগা লোকটি উঠে দাঁড়িয়েছিল, আর আল্লাহর রাসূল তাদের সতর্ক করেছিলেন আল্লাহর উটনি ও তার পানি পানের ব্যাপারে। তারা তাঁকে মিথ্যাবাদী বলল এবং উটনির পায়ের রগ কেটে দিল; ফলে তাদের পাপের কারণে তাদের প্রতিপালক তাদের ওপর ধ্বংস নামিয়ে দিলেন। শেষ আয়াত 91:15 যোগ করে, তিনি এর পরিণতির ভয় করেন না। বিমূর্তভাবে বলা এক নীতি এখানে নাম ও ধ্বংসস্তূপ পেয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Clearing the Field",
          "bn": "ক্ষেত পরিষ্কার করা"
        },
        "p": [
          {
            "en": "Because zakka means clearing and growing at once, the work has two halves and most people attempt only one. Removing is the unglamorous half: a habit dropped, a debt settled, a wrong apology actually made, an account closed. Growing is what the cleared ground is for: prayer that is not rushed, knowledge taken in steadily, wealth spent where it will not be thanked. Neither half substitutes for the other, and a field weeded but never sown is still a field with nothing on it.",
            "bn": "যেহেতু 'যাক্কা' একই সঙ্গে পরিষ্কার করা ও বাড়ানো বোঝায়, কাজটির দুটি অংশ আছে — আর অধিকাংশ মানুষ কেবল একটি অংশ করে। সরিয়ে ফেলাই কম আকর্ষণীয় অংশ: একটি অভ্যাস ছেড়ে দেওয়া, একটি ঋণ শোধ করা, একটি অন্যায়ের জন্য সত্যিই ক্ষমা চাওয়া, একটি হিসাব বন্ধ করা। আর বাড়ানোই সেই কাজ, যার জন্য জমি সাফ করা হয়েছিল: তাড়াহুড়োহীন নামায, ধীরে ধীরে অর্জিত জ্ঞান, এমন জায়গায় খরচ যেখানে কেউ ধন্যবাদ দেবে না। কোনো অংশই অন্যটির বিকল্প নয়; আগাছা সাফ অথচ বীজহীন জমি এখনো শূন্য জমিই।"
          },
          {
            "en": "The surah also supplies a private measure. Since 91:8 says the soul was inspired with both its wickedness and its guarding, the knowledge of which way a particular choice runs is already inside the one choosing. That is uncomfortable, and it is also liberating, because it removes the need for a ruling on every small matter. Most of what purification asks of a person today is something that person already knows, has known for a while, and has been waiting to be told by someone else.",
            "bn": "সূরাটি একটি ব্যক্তিগত মাপকাঠিও দিয়ে দেয়। 91:8 যেহেতু বলে যে প্রাণকে তার অসৎকর্ম ও আত্মরক্ষা — দুটিরই বোধ দেওয়া হয়েছে, তাই কোনো নির্দিষ্ট সিদ্ধান্ত কোন দিকে যাচ্ছে সেই জ্ঞান সিদ্ধান্তগ্রহণকারীর ভেতরেই আছে। এটি অস্বস্তিকর, আবার মুক্তিদায়কও — কারণ এতে প্রতিটি ছোট বিষয়ে ফতোয়া খোঁজার প্রয়োজন কমে যায়। আজ পরিশুদ্ধি একজন মানুষের কাছে যা চায়, তার বেশিরভাগই সে আগে থেকেই জানে, অনেকদিন ধরেই জানে — কেবল অপেক্ষা করছে অন্য কেউ এসে কথাটি বলুক।"
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
            "bn": "ফাকালা লাহুম রাসূলুল্লাহি নাকাতাল্লাহি ওয়া সুকইয়াহা: তখন আল্লাহর রাসূল তাদের বললেন, আল্লাহর উটনি, আর তার পানি পান। আয়াতে আরবি শব্দ ৭টি। ফাকালা মানে তখন তিনি বললেন। লাহুম মানে তাদের। রাসূলুল্লাহি মানে আল্লাহর রাসূল। এরপর তাঁর গোটা বার্তা: নাকাতাল্লাহি, আল্লাহর উটনি, আর ওয়া সুকইয়াহা, এবং তার পানি পান। এত ছোট আয়াতে আল্লাহর নাম এসেছে দুবার। যিনি কথা বলছেন তাঁর সঙ্গে, আর যে প্রাণীর কথা বলা হচ্ছে তার সঙ্গে।"
          },
          {
            "en": "The verse sits inside a short telling. Before it, 91:11 says that Thamud denied out of their transgression, and 91:12 says: when the most wretched of them rose up. After it, 91:14 and 91:15 tell how they answered and what followed. This article stays with the words of 91:13 and names those verses only as its frame. The Muyassar, whose comment covers 91:12 to 91:15 together, places the warning at the moment the most wretched of the tribe rose up to hamstring the she-camel.",
            "bn": "আয়াতটা একটা ছোট বৃত্তান্তের ভেতরে বসানো। আগে ৯১:১১ বলে, সামূদ সীমালঙ্ঘনের কারণে অস্বীকার করেছিল। আর ৯১:১২ বলে, যখন তাদের সবচেয়ে হতভাগা লোকটি উঠে দাঁড়াল। পরে ৯১:১৪ ও ৯১:১৫ জানায় তারা কী জবাব দিল আর তারপর কী ঘটল। এই লেখা ৯১:১৩ আয়াতের শব্দগুলোর সঙ্গেই থাকবে, আশপাশের আয়াতগুলোকে শুধু কাঠামো হিসেবে উল্লেখ করবে। মুয়াসসার ৯১:১২ থেকে ৯১:১৫ পর্যন্ত একসঙ্গে ব্যাখ্যা করে। তার বর্ণনায় সতর্কবাণীটা আসে ঠিক তখন, যখন গোত্রের সবচেয়ে হতভাগা লোকটি উটনির পায়ের রগ কাটতে উঠে দাঁড়িয়েছে।"
          },
          {
            "en": "The verse gives the speaker a title rather than a name, and every commentary fetched for it supplies the name. At-Tabari writes that by this Allah means Salih, the messenger of Allah; Ibn Kathir, al-Qurtubi, al-Baghawi, as-Sa'di and the Muyassar all say the same, Salih (AS). The abridged English Ibn Kathir also says the phrase refers to Salih. As-Sa'di adds one word about the manner of his speaking: he said it muhadhdhiran, as a warning. That word leads straight into the grammar of the rest of the verse.",
            "bn": "আয়াত বক্তার নাম বলে না, দেয় তাঁর উপাধি। এ আয়াতের জন্য যত তাফসীর আনা হয়েছে, প্রত্যেকটি নামটা জানিয়ে দেয়। তাবারী লেখেন, এখানে আল্লাহ বুঝিয়েছেন আল্লাহর রাসূল সালিহকে। ইবন কাসীর, কুরতুবী, বাগাভী, সাদী আর মুয়াসসারও একই কথা বলেন: তিনি সালিহ (আঃ)। সংক্ষিপ্ত ইংরেজি ইবন কাসীরও বলে, কথাটা সালিহের দিকেই ইঙ্গিত করে। সাদী তাঁর বলার ধরন নিয়ে একটি শব্দ যোগ করেন: তিনি বলেছিলেন মুহাযযিরান, অর্থাৎ সাবধান করে। এই শব্দটাই আমাদের নিয়ে যায় আয়াতের বাকি অংশের ব্যাকরণে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Name Spoken as a Warning",
          "bn": "সতর্কবাণী হয়ে আসা একটি নাম"
        },
        "p": [
          {
            "en": "Naqata stands in the accusative, with no verb beside it to explain why. Al-Qurtubi names the construction: it is in the accusative of warning, at-tahdhir, as when one says al-asad al-asad, the lion, the lion, or as-sabiyy as-sabiyy, the child, the child, or al-hidhar al-hidhar, caution, caution. The bare noun, repeated or alone, carries the alarm by itself. Al-Qurtubi then supplies the sense: beware the she-camel of Allah, meaning beware of hamstringing her. At-Tabari spells out the same implied verb: ihdharu, beware the she-camel of Allah and her drink.",
            "bn": "নাকাতা শব্দটা মানসূব, পাশে এমন কোনো ক্রিয়া নেই যা কারণটা বলে দেয়। কুরতুবী গঠনটার নাম বলেন: এ হলো সতর্ক করার মানসূব, তাহযীর। যেমন কেউ বলে আল-আসাদ আল-আসাদ, সিংহ, সিংহ! কিংবা আস-সাবিয়্যা আস-সাবিয়্যা, বাচ্চাটা, বাচ্চাটা! কিংবা আল-হিযার আল-হিযার, সাবধান, সাবধান! শুধু বিশেষ্যটা উচ্চারণ করলেই বিপদের ঘণ্টা বেজে যায়। তারপর কুরতুবী অর্থটা খুলে বলেন: আল্লাহর উটনি থেকে সাবধান, মানে তার পায়ের রগ কাটা থেকে সাবধান। তাবারীও একই উহ্য ক্রিয়াটা স্পষ্ট করে দেন: ইহযারূ, আল্লাহর উটনি আর তার পানি পানের ব্যাপারে সাবধান হও।"
          },
          {
            "en": "What exactly they were to beware of is phrased in two ways. Ibn Kathir writes: beware of touching the she-camel of Allah with any harm, an tamassuha bi-su'. The Muyassar uses the same words, beware of touching her with harm. As-Sa'di and al-Baghawi name one act instead: beware of 'aqr, hamstringing the she-camel of Allah, and al-Qurtubi's gloss above is the same. The first wording covers any injury at all; the second names the very deed that 91:14 will report. Both stay inside the warning, and this article does not rank them.",
            "bn": "ঠিক কোন জিনিস থেকে সাবধান থাকতে হবে, সে কথা দুইভাবে বলা হয়েছে। ইবন কাসীর লেখেন: আল্লাহর উটনিকে কোনো রকম কষ্ট দিয়ে ছোঁয়া থেকে সাবধান, আন তামাসসূহা বিসূ। মুয়াসসারও একই কথা বলে, তাকে মন্দ উদ্দেশ্যে ছোঁয়া থেকে সাবধান। সাদী আর বাগাভী বরং একটা নির্দিষ্ট কাজের নাম নেন: আকর, অর্থাৎ আল্লাহর উটনির পায়ের রগ কাটা থেকে সাবধান। ওপরে কুরতুবীর ব্যাখ্যাও তাই। প্রথম ভাষ্য যেকোনো আঘাতকেই ঢেকে নেয়। দ্বিতীয়টা ঠিক সেই কাজের নাম নেয়, যার খবর দেবে ৯১:১৪। দুটোই সতর্কবাণীর ভেতরে থাকে, আর এই লেখা কোনোটাকে অন্যটার উপরে রাখে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Simply: Leave Her Be",
          "bn": "নাকি সোজা কথায়: ছেড়ে দাও"
        },
        "p": [
          {
            "en": "The accusative has a second explanation, and two of the commentators record it. Al-Qurtubi introduces it with wa-qila, and it is said: dharu naqata Allahi, leave the she-camel of Allah alone. He supports it from an earlier telling of the same story and quotes it: this is the she-camel of Allah, a sign for you, so leave her to graze in Allah's land and do not touch her with harm, or a painful punishment will seize you. Those are the words of 7:73. Al-Baghawi gives the same parsing and names the grammarian az-Zajjaj as its holder.",
            "bn": "মানসূব হওয়ার আরেকটা ব্যাখ্যাও আছে, আর দুজন তাফসীরকার তা লিখে রেখেছেন। কুরতুবী তা আনেন ওয়া কীলা দিয়ে, অর্থাৎ বলা হয়: যারূ নাকাতাল্লাহ, আল্লাহর উটনিকে ছেড়ে দাও। এর সমর্থনে তিনি একই কাহিনির আগের এক বর্ণনা উদ্ধৃত করেন: এ আল্লাহর উটনি, তোমাদের জন্য নিদর্শন। তাকে আল্লাহর জমিনে চরে খেতে দাও, মন্দ উদ্দেশ্যে তাকে ছুঁয়ো না, নইলে যন্ত্রণাদায়ক শাস্তি তোমাদের পাকড়াও করবে। এগুলো ৭:৭৩ আয়াতের শব্দ। বাগাভীও একই বিশ্লেষণ দেন, আর এর প্রবক্তা হিসেবে ব্যাকরণবিদ যাজ্জাজের নাম বলেন।"
          },
          {
            "en": "On this reading the second noun follows the first under the same implied verb. Al-Qurtubi glosses wa-suqyaha as dharuha wa-shurbaha, leave her and her drinking. In al-Baghawi's text the gloss runs straight on from az-Zajjaj: leave the she-camel of Allah, and leave her drinking of the water, so do not interfere with the water on the day of her drinking. So the verse can be heard as an alarm, beware, or as a command, leave her. Al-Qurtubi gives the warning first and the command after wa-qila; al-Baghawi gives the warning and then az-Zajjaj's leave. Neither settles it, and this article keeps both.",
            "bn": "এই পাঠে দ্বিতীয় বিশেষ্যটাও একই উহ্য ক্রিয়ার অধীনে আসে। কুরতুবী ওয়া সুকইয়াহার ব্যাখ্যা দেন যারূহা ওয়া শুরবাহা দিয়ে: তাকে আর তার পানি পান ছেড়ে দাও। বাগাভীর লেখায় যাজ্জাজের কথার পরেই ব্যাখ্যাটা চলতে থাকে: আল্লাহর উটনিকে ছেড়ে দাও, পানি থেকে তার পান করাটাও ছেড়ে দাও, তার পান করার দিনে পানির দিকে হাত বাড়িয়ো না। তাহলে আয়াতটা শোনা যায় দুইভাবে। হয় বিপদের ডাক, সাবধান! নয়তো আদেশ, তাকে ছেড়ে দাও। কুরতুবী আগে সতর্কবাণী দেন, আদেশটা আনেন ওয়া কীলার পরে। বাগাভী আগে সতর্কবাণী দেন, তারপর যাজ্জাজের ছেড়ে দেওয়ার কথা। কেউ চূড়ান্ত রায় দেননি, এই লেখাও দুটোই রাখছে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Share Allah Apportioned",
          "bn": "আল্লাহর বেঁধে দেওয়া ভাগ"
        },
        "p": [
          {
            "en": "Why warn them about her drink at all? At-Tabari answers directly. Salih warned them about the she-camel's suqya because he had already told them, by Allah's command, that she had the drinking of a day and they the drinking of another day, a day other than hers; at-Tabari says he explained this earlier in his commentary. He then cites Qatada for the word itself: wa-suqyaha means the share Allah apportioned to her of this water, qism Allah alladhi qasama laha. On this reading her drink is a portion Allah fixed.",
            "bn": "তার পানি পানের ব্যাপারে আলাদা করে সাবধান করার দরকার পড়ল কেন? তাবারী সরাসরি জবাব দেন। সালিহ উটনির সুকইয়া নিয়ে তাদের সাবধান করেছিলেন, কারণ আল্লাহর আদেশে তিনি আগেই তাদের জানিয়ে দিয়েছিলেন: এক দিনের পানি উটনির, আরেক দিনের পানি তাদের, আর সে দিন উটনির দিন থেকে আলাদা। তাবারী বলেন, এ কথা তিনি তাফসীরের আগের অংশে ব্যাখ্যা করেছেন। তারপর শব্দটার অর্থে তিনি কাতাদার কথা আনেন: ওয়া সুকইয়াহা মানে এই পানি থেকে আল্লাহ তার জন্য যে ভাগ বেঁধে দিয়েছেন, কিসমুল্লাহিল্লাযী কাসামা লাহা। এই পাঠে তার পানি পান আল্লাহর ঠিক করে দেওয়া এক হিস্যা।"
          },
          {
            "en": "Ibn Kathir puts the same terms as a prohibition: do not transgress against her in her drinking, for she has the drinking of a day and you have the drinking of a known day. The Muyassar repeats the sentence almost word for word, and adds before it that she is a sign Allah sent to them. The abridged English Ibn Kathir reads: do not transgress against her in her drinking, for she has been allocated a day to drink and you have been allocated a day to drink, as is known to you.",
            "bn": "ইবন কাসীর একই শর্তকে নিষেধের ভাষায় বলেন: তার পানি পানে তার উপর বাড়াবাড়ি কোরো না। কারণ এক দিনের পানি তার, আর নির্দিষ্ট এক দিনের পানি তোমাদের। মুয়াসসার বাক্যটা প্রায় হুবহু দোহরায়, আর তার আগে জুড়ে দেয় যে উটনি আল্লাহর পাঠানো এক নিদর্শন। সংক্ষিপ্ত ইংরেজি ইবন কাসীরের ভাষ্যও তাই: পানি পানে তার উপর সীমা ছাড়িয়ো না, তার জন্য পান করার একটা দিন বরাদ্দ, তোমাদের জন্যও একটা দিন, যা তোমাদের জানা।"
          },
          {
            "en": "Al-Qurtubi points the reader back to his fuller treatment in Surat ash-Shu'ara and Surat al-Qamar, and adds one line: when they demanded the she-camel and he brought her out for them from the rock, they were given a day's drinking from their well and she a day's drinking in its place, and fa-shaqqa dhalika 'alayhim, that weighed hard on them. The Muyassar has the same phrase after the terms. The articles on 26:155 and 54:27 take up the rota and the test at length, so this one does not repeat them.",
            "bn": "কুরতুবী পাঠককে ফেরত পাঠান সূরা শুআরা আর সূরা কামারে তাঁর বিস্তারিত আলোচনায়। এখানে শুধু একটা কথা যোগ করেন: তারা যখন উটনি চাইল আর তিনি পাথর থেকে তাকে বের করে আনলেন, তখন তাদের কূপ থেকে এক দিনের পানি দেওয়া হলো তাদের, আর তার বদলে এক দিনের পানি উটনির। ফাশাক্কা যালিকা আলাইহিম, ব্যাপারটা তাদের কাছে ভারী ঠেকল। মুয়াসসারও শর্তগুলোর পরে একই কথা বলে। ২৬:১৫৫ আর ৫৪:২৭ আয়াতের লেখায় পালার ব্যবস্থা আর পরীক্ষার কথা বিস্তারিত এসেছে, তাই এখানে আর তার পুনরাবৃত্তি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Sa'di Turns to the Milk",
          "bn": "সাদীর চোখে দুধের নিয়ামত"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse differently, and the difference is worth keeping. He writes: beware of hamstringing the she-camel of Allah, which He made for you a mighty sign, aya 'azima, and do not repay Allah's favour to you, bi-saqyi labaniha, the drinking of her milk, by hamstringing her. His gloss never mentions the day of water. Where the verse has suqyaha, his sentence speaks of saqy, her milk given them to drink. The other commentators read suqyaha as her own drinking at the well; as-Sa'di's sentence points to her milk.",
            "bn": "সাদী আয়াতটা পড়েন একটু অন্যভাবে, আর এই পার্থক্যটা ধরে রাখার মতো। তিনি লেখেন: আল্লাহর উটনির পায়ের রগ কাটা থেকে সাবধান, যাকে তিনি তোমাদের জন্য বানিয়েছেন এক মহা নিদর্শন, আয়াতুন আযীমা। তার দুধ পান করানোর মাধ্যমে আল্লাহ তোমাদের যে নিয়ামত দিচ্ছেন, বিসাকয়ি লাবানিহা, তার জবাবে তার রগ কেটো না। তাঁর ব্যাখ্যায় পানির পালার কথা একবারও নেই। আয়াতে যেখানে সুকইয়াহা, তাঁর বাক্যে সেখানে আছে সাকয়, অর্থাৎ উটনির দুধ, যা তাদের পান করতে দেওয়া হতো। অন্য তাফসীরকারেরা সুকইয়াহা পড়েন কূপে উটনির নিজের পান করা হিসেবে, আর সাদীর বাক্য ইঙ্গিত করে তার দুধের দিকে।"
          },
          {
            "en": "The two readings ask the same thing of Thamud, and both rest on the word of Allah in naqata Allahi. As-Sa'di calls her a mighty sign Allah made for them; the Muyassar calls her a sign Allah sent them, pointing to the truthfulness of their prophet. On the water reading, the people were asked to give up a turn; on as-Sa'di's, they were asked not to answer a gift with a blade. Either way, a great favour came with one small limit, and the verse is the limit spoken aloud.",
            "bn": "দুই পাঠই সামূদের কাছে একই জিনিস চায়, আর দুটোরই ভিত্তি নাকাতাল্লাহি কথার ভেতরের আল্লাহ শব্দটা। সাদী উটনিকে বলেন আল্লাহর বানানো মহা নিদর্শন। মুয়াসসার বলে, আল্লাহর পাঠানো নিদর্শন, যা তাদের নবীর সত্যবাদিতার প্রমাণ। পানির পাঠে মানুষের কাছে চাওয়া হয়েছিল একটা পালা ছেড়ে দিতে। সাদীর পাঠে চাওয়া হয়েছিল, দানের জবাব যেন ছুরি দিয়ে না হয়। যেভাবেই পড়ি, বিশাল এক নিয়ামতের সঙ্গে এসেছিল ছোট্ট একটা সীমা। আয়াতটা সেই সীমারই উচ্চারণ।"
          }
        ]
      },
      {
        "h": {
          "en": "Thamud in a Surah of Souls",
          "bn": "আত্মার সূরায় সামূদের কথা"
        },
        "p": [
          {
            "en": "Why does this story appear here at all? Ma'arif al-Qur'an, commenting on 91:9 to 91:13 together, reads 91:9 and 91:10 as dividing mankind into two groups, the successful and the unsuccessful. An example of the second group, it says, is then cited, to show how it rejected Allah's message and how Allah destroyed it; sometimes, it adds, an instalment of punishment is given in this world, as with Thamud. The article on 91:9 treats those two verses and the purifying of the soul; this verse belongs to the example that follows them.",
            "bn": "এই কাহিনি এখানে এল কেন? মাআরিফুল কুরআন ৯১:৯ থেকে ৯১:১৩ একসঙ্গে ব্যাখ্যা করে। তার পাঠে ৯১:৯ ও ৯১:১০ গোটা মানবজাতিকে দুই দলে ভাগ করে: সফল আর ব্যর্থ। তারপর, মাআরিফ বলে, দ্বিতীয় দলের একটা দৃষ্টান্ত আনা হয়েছে, যেন দেখা যায় তারা কীভাবে আল্লাহর বার্তা প্রত্যাখ্যান করল আর আল্লাহ কীভাবে তাদের ধ্বংস করলেন। কখনো কখনো, মাআরিফ যোগ করে, শাস্তির একটা কিস্তি দুনিয়াতেই দেওয়া হয়, যেমন সামূদের বেলায়। ৯১:৯ আয়াতের লেখায় সেই দুই আয়াত আর আত্মা পবিত্র করার কথা এসেছে। এই আয়াত তার পরের দৃষ্টান্তের অংশ।"
          },
          {
            "en": "Ma'arif notes that the story is told fully elsewhere and lists the places: 7:73 to 7:79, 11:61 to 11:68, 26:141 to 26:159, 27:45 to 27:53, 41:17 and 41:18, 54:23 to 54:32, and 69:4 and 69:5. Here, it says, only a brief reference is made. That brevity shows in this verse. Of everything Salih said to his people across those tellings, the surah keeps only two nouns, the she-camel of Allah and her drink. Whatever else the warning held, this is the part that stands between the rising-up of 91:12 and the denial of 91:14.",
            "bn": "মাআরিফ জানায়, কাহিনিটা পুরোপুরি বলা হয়েছে অন্য জায়গায়, আর জায়গাগুলোর তালিকাও দেয়: ৭:৭৩ থেকে ৭:৭৯, ১১:৬১ থেকে ১১:৬৮, ২৬:১৪১ থেকে ২৬:১৫৯, ২৭:৪৫ থেকে ২৭:৫৩, ৪১:১৭ ও ৪১:১৮, ৫৪:২৩ থেকে ৫৪:৩২, আর ৬৯:৪ ও ৬৯:৫। এখানে, মাআরিফের ভাষায়, শুধু সংক্ষিপ্ত ইঙ্গিত দেওয়া হয়েছে। সেই সংক্ষেপ এই আয়াতেই চোখে পড়ে। ওইসব বর্ণনায় সালিহ (আঃ) নিজের কওমকে যত কথা বলেছেন, তার মধ্যে সূরাটি রেখেছে শুধু দুটি বিশেষ্য: আল্লাহর উটনি আর তার পানি পান। সতর্কবাণীতে আর যা-ই থাকুক, ৯১:১২ আয়াতের উঠে দাঁড়ানো আর ৯১:১৪ আয়াতের অস্বীকারের মাঝখানে দাঁড়িয়ে আছে এই অংশটুকুই।"
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
            "en": "This must be said plainly. Thamud are named in the Qur'an among the peoples who denied their messenger, and the verses after this one tell of their end. But the verse describes what the text describes: a warning given to one ancient people about one sign. It licenses nothing against any living person or community. It is no judgement on the people of any land today, and no warrant to point at anyone. Salih (AS) appears here only as the verse names him, the messenger of Allah, delivering the warning he was given.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। কুরআন সামূদের নাম নেয় সেই জাতিগুলোর মধ্যে, যারা নিজেদের রাসূলকে অস্বীকার করেছিল। এই আয়াতের পরের আয়াতগুলো তাদের পরিণতির কথা বলে। কিন্তু আয়াতটা শুধু তা-ই বলে, যা পাঠ বলে: প্রাচীন এক জাতিকে একটি নিদর্শনের ব্যাপারে দেওয়া এক সতর্কবাণী। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। আজকের কোনো ভূখণ্ডের মানুষ নিয়ে এটা কোনো রায় নয়, কারও দিকে আঙুল তোলার সনদও নয়। সালিহ (আঃ) এখানে আছেন ঠিক যেভাবে আয়াত তাঁকে চেনায়: আল্লাহর রাসূল, যিনি তাঁকে দেওয়া সতর্কবাণী পৌঁছে দিচ্ছেন।"
          },
          {
            "en": "So the verse is handed to the reader as a mirror. A favour from Allah arrived with a single small condition, and the condition was spoken in two nouns. Most of what we are given comes the same way: health with a limit, wealth with a share that belongs to others, a trust with a boundary around it. The question the verse leaves is not about Thamud. It is whether, when the gift is large and the limit is small, I keep the limit, or treat it as the one thing in my way.",
            "bn": "তাই আয়াতটা পাঠকের হাতে আসে আয়না হয়ে। আল্লাহর এক নিয়ামত এসেছিল একটিমাত্র ছোট শর্ত নিয়ে, আর শর্তটা বলা হয়েছিল দুটি বিশেষ্যে। আমরা যা পাই, তার বেশির ভাগই আসে এভাবে। সুস্থতা আসে সীমা নিয়ে, সম্পদ আসে অন্যের হক নিয়ে, আমানত আসে চারপাশে বেড়া নিয়ে। আয়াত যে প্রশ্ন রেখে যায়, তা সামূদকে নিয়ে নয়। প্রশ্নটা আমাকে নিয়ে: দান যখন বিশাল আর সীমা ছোট, আমি কি সীমাটা মেনে চলি? নাকি ভাবি, আমার পথে ওটাই একমাত্র বাধা?"
          }
        ]
      }
    ]
  }
});
