/**
 * Tadabbur long-form articles — surah 87.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "87:1": {
    "sections": [
      {
        "h": {
          "en": "A Surah Opened by Command",
          "bn": "আদেশ দিয়ে খোলা সূরা"
        },
        "p": [
          {
            "en": "Sabbih isma rabbika al-a'la: glorify the name of your Lord, the Most High. The verse is four Arabic words, and the surah takes its name, al-A'la, from the last of them. Al-Qurtubi says it is Makkan in the view of the majority, records that ad-Dahhak called it Madinan, and counts nineteen verses. Ibn Kathir argues for a Makkan date from al-Bara' ibn 'Azib's report in al-Bukhari: before the Prophet ﷺ reached Madinah, al-Bara' had already learned Sabbih isma rabbika al-a'la among other surahs like it.",
            "bn": "সাব্বিহিসমা রাব্বিকাল আ'লা: তোমার সর্বোচ্চ রবের নামের পবিত্রতা ঘোষণা কর। আয়াতটিতে আরবি শব্দ চারটি, আর শেষ শব্দ আল-আ'লা থেকেই সূরার নাম। কুরতুবী বলেন, অধিকাংশের মতে সূরাটি মক্কী। তিনি এও উল্লেখ করেন যে দাহহাক একে মাদানী বলেছেন, আর আয়াতসংখ্যা গোনেন উনিশ। ইবন কাসীর মক্কী হওয়ার পক্ষে প্রমাণ আনেন বুখারীতে বারা ইবন আযিব (রাঃ)-এর বর্ণনা থেকে। নবী ﷺ মদীনায় পৌঁছানোর আগেই বারা সাব্বিহিসমা রাব্বিকাল আ'লা ও এর মতো আরও কয়েকটি সূরা শিখে ফেলেছিলেন।"
          },
          {
            "en": "The grammar is spare. Sabbih is a command; isma, the name, is its object, joined to rabbika, your Lord; al-a'la, the Most High, closes the verse. Al-Waqi'ah twice carries a near twin, fa-sabbih bi-smi rabbika al-'azim, glorify by the name of your Lord, the Most Great (56:74 and 56:96), and Ibn Kathir sets the two side by side in a report below. There the name comes with the particle bi-; here the verb takes the name directly.",
            "bn": "ব্যাকরণ খুবই সংক্ষিপ্ত। সাব্বিহ একটি আদেশ। ইসমা, অর্থাৎ নাম, হলো তার কর্ম, আর নামটি জুড়ে আছে রাব্বিকা, তোমার রব, শব্দের সঙ্গে। শেষে আসে আল-আ'লা, সর্বোচ্চ। সূরা ওয়াকিআয় দুবার প্রায় একই রকম বাক্য আছে: ফাসাব্বিহ বিসমি রাব্বিকাল আযীম, তোমার মহান রবের নামে পবিত্রতা ঘোষণা কর (৫৬:৭৪ ও ৫৬:৯৬)। পরে উল্লিখিত এক বর্ণনায় ইবন কাসীর দুটি আয়াতকে পাশাপাশি রাখেন। সেখানে নামের আগে বি অব্যয় আছে, এখানে ক্রিয়া সরাসরি নামকে ধরেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Readings in at-Tabari",
          "bn": "তাবারীর তাফসীরে পাঁচ ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari opens by saying the people of interpretation differed over this verse. Some said its meaning is: magnify your Lord, the Most High, for there is no lord higher or greater than He; and some of them, when they recited it, would say subhana rabbiya al-a'la, glory to my Lord, the Most High. Others said: keep the name of your Lord, O Muhammad, from being given to anything besides Him. He says this forbade what the idolaters did in naming their gods, one al-Lat and another al-'Uzza.",
            "bn": "তাবারী শুরুতেই বলেন, এ আয়াতের ব্যাখ্যায় তাফসীরবিদদের মধ্যে মতভেদ আছে। কেউ বলেছেন, এর অর্থ: তোমার সর্বোচ্চ রবের মহিমা ঘোষণা কর, কারণ তাঁর চেয়ে উঁচু বা বড় কোনো রব নেই। তাঁদের কেউ কেউ আয়াতটি পড়ে বলতেন, সুবহানা রাব্বিয়াল আ'লা, আমার সর্বোচ্চ রবের পবিত্রতা। আরেক দল বলেছেন: হে মুহাম্মাদ, তোমার রবের নাম তিনি ছাড়া আর কাউকে দিয়ো না। তাবারী বলেন, মুশরিকরা নিজেদের দেবতাদের একটার নাম রাখত লাত, আরেকটার উযযা। এ আদেশ সেই কাজ থেকেই নিষেধ করছে।"
          },
          {
            "en": "A third group said it means: declare Allah free of what the idolaters say about Him. At-Tabari pairs this with 6:108, do not insult those they call on besides Allah, lest they insult Allah in enmity without knowledge; for them the name is not what is meant, and the sense is simply glorify your Lord. A fourth group said: keep your naming of your Lord, and your mention of Him, from ever happening except in humility and lowliness before Him. On this reading, they said, the noun name stands in place of the act of naming.",
            "bn": "তৃতীয় দলের মতে অর্থ হলো: মুশরিকরা আল্লাহ সম্পর্কে যা বলে, তা থেকে তাঁকে পবিত্র ঘোষণা কর। তাবারী এর সঙ্গে ৬:১০৮ আয়াত উদ্ধৃত করেন: আল্লাহ ছাড়া যাদের তারা ডাকে, তাদের গালি দিয়ো না, নইলে তারা না জেনে শত্রুতাবশে আল্লাহকে গালি দেবে। তাঁদের কাছে এখানে নাম উদ্দেশ্য নয়, কথাটা সোজা: তোমার রবের পবিত্রতা ঘোষণা কর। চতুর্থ দল বলেছেন: রবের নাম নেওয়া আর তাঁর জিকির কখনো যেন তাঁর সামনে বিনয় আর নত হওয়া ছাড়া না হয়। তাঁদের কথায়, এখানে নাম শব্দটি নাম নেওয়ার কাজের জায়গায় বসেছে।"
          },
          {
            "en": "A fifth group said: pray, O Muhammad, with the remembrance of your Lord, meaning pray while you remember Him, in awe and fear of Him. Then at-Tabari gives his own choice. The most correct reading, he says, is: keep the name of your Lord from being used to call on gods and idols. His reason is the reports he has just cited from the Prophet ﷺ and the Companions, who said subhana rabbiya al-a'la on reciting it; that, he says, shows they knew its sense: magnify the name of your Lord and declare it free.",
            "bn": "পঞ্চম দল বলেছেন: হে মুহাম্মাদ, তোমার রবের জিকিরসহ নামাজ পড়ো। অর্থাৎ নামাজ পড়ো এমনভাবে যে তুমি তাঁকে স্মরণ করছ, তাঁর ভয়ে ভীত ও শঙ্কিত। এরপর তাবারী নিজের পছন্দ জানান। তাঁর মতে সবচেয়ে সঠিক অর্থ: রবের নাম দিয়ে দেবদেবী ও মূর্তিদের ডেকো না, নামটিকে তা থেকে পবিত্র রাখো। কারণ হিসেবে তিনি একটু আগে উদ্ধৃত বর্ণনাগুলোর কথা বলেন। নবী ﷺ ও সাহাবীরা আয়াতটি পড়ে বলতেন সুবহানা রাব্বিয়াল আ'লা। তাবারী বলেন, এতেই বোঝা যায় অর্থটা তাঁদের জানা ছিল: তোমার রবের নামের মহিমা ঘোষণা কর, একে পবিত্র রাখো।"
          }
        ]
      },
      {
        "h": {
          "en": "Say It, Pray It, Mean It",
          "bn": "মুখে, নামাজে, অন্তরে"
        },
        "p": [
          {
            "en": "Al-Baghawi's first gloss: it means, say subhana rabbiya al-a'la, and he says a group of the Companions and their Successors held this. Ibn 'Abbas is given a different line by two commentators. Al-Baghawi has him say: pray by the command of your Lord, the Most High. Al-Qurtubi gives the same words through Abu Salih and adds Ibn 'Abbas's explanation, that this is to say subhana rabbiya al-a'la. Al-Qurtubi also reports al-Hasan: pray to your Lord, the Most High.",
            "bn": "বাগাভীর প্রথম ব্যাখ্যা: অর্থ হলো, বলো সুবহানা রাব্বিয়াল আ'লা। তিনি জানান, সাহাবী ও তাবেয়ীদের একটি দল এ মত পোষণ করতেন। ইবন আব্বাস (রাঃ)-এর নামে দুজন তাফসীরকার ভিন্ন একটি কথা আনেন। বাগাভীর বর্ণনায় তিনি বলেছেন: তোমার সর্বোচ্চ রবের আদেশে নামাজ পড়ো। কুরতুবীও আবু সালিহের সূত্রে একই কথা আনেন, সঙ্গে ইবন আব্বাসের ব্যাখ্যা: তা হলো সুবহানা রাব্বিয়াল আ'লা বলা। কুরতুবী হাসান বসরীর কথাও আনেন: তোমার সর্বোচ্চ রবের জন্য নামাজ পড়ো।"
          },
          {
            "en": "Al-Qurtubi adds two readings under it is said. One: pray with the names of Allah, not as the idolaters prayed, with whistling and clapping. The other: raise your voice in the remembrance of your Lord, for which he cites a line of the poet Jarir in which the pilgrims sabbaha and cried Allahu akbar. As-Sa'di makes the command broad: a tasbih that includes remembering Him and worshipping Him, humbling oneself before His majesty and yielding to His greatness, a tasbih befitting His greatness.",
            "bn": "কুরতুবী 'বলা হয়' কথাটি দিয়ে আরও দুটি ব্যাখ্যা আনেন। একটি: আল্লাহর নামগুলো নিয়ে নামাজ পড়ো, মুশরিকদের মতো শিস আর হাততালি দিয়ে নয়। অন্যটি: রবের জিকিরে আওয়াজ উঁচু করো। এর পক্ষে তিনি কবি জারীরের একটি পঙক্তি উদ্ধৃত করেন, যেখানে হাজীরা তাসবীহ পড়ছে আর আল্লাহু আকবার বলছে। সা'দী আদেশটিকে ব্যাপক অর্থে নেন। তাঁর মতে এ এমন তাসবীহ, যার ভেতরে আছে তাঁর জিকির আর ইবাদত, তাঁর প্রতাপের সামনে নত হওয়া আর তাঁর মহত্ত্বের কাছে মাথা নোয়ানো। এমন তাসবীহ, যা তাঁর মহত্ত্বের উপযুক্ত।"
          },
          {
            "en": "The Muyassar compresses it into a single line: declare the name of your Lord, the Most High, free of any partner and of every deficiency, in a way that befits His greatness. Ma'arif al-Qur'an explains tasbih as to pronounce the purity, and the phrase as to honour the name of your Lord: when His name is said it should be with utmost humility and respect, and kept free of anything unbecoming to Him. They are kept side by side, and none is chosen.",
            "bn": "মুয়াসসার পুরো কথাটা এক লাইনে বলে: তোমার সর্বোচ্চ রবের নামকে সব শরীক আর সব ত্রুটি থেকে পবিত্র ঘোষণা কর, তাঁর মহত্ত্বের উপযোগী করে। মাআরিফুল কুরআন তাসবীহের অর্থ করে পবিত্রতা ঘোষণা। আর বাক্যটির অর্থ করে রবের নামকে সম্মান করা। তাঁর নাম যখন উচ্চারিত হবে, তখন হবে পূর্ণ বিনয় আর শ্রদ্ধার সঙ্গে, আর তাঁর মর্যাদার সঙ্গে বেমানান সবকিছু থেকে নামটি থাকবে মুক্ত। ব্যাখ্যাগুলো পাশাপাশি রাখা হলো, কোনোটিকে বেছে নেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name or the One Named",
          "bn": "নাম, নাকি নামের মালিক"
        },
        "p": [
          {
            "en": "Why does the verse say glorify the name, and not simply glorify your Lord? The commentators answer in more than one way. Al-Qurtubi reports from Ibn 'Abbas and as-Suddi that it means magnify your Lord, the Most High, with the word name as a connective whose purpose is to magnify the One named. He cites a line of the poet Labid, then upon you both be the name of peace, as a case of the same connective name. Al-Baghawi reports a group who also took name as a connective: declare your Lord free of what the deviators ascribe to Him.",
            "bn": "আয়াতটি কেন বলছে নামের পবিত্রতা ঘোষণা কর, সরাসরি রবের পবিত্রতা নয়? তাফসীরকারেরা এর জবাব দিয়েছেন একাধিকভাবে। কুরতুবী ইবন আব্বাস (রাঃ) ও সুদ্দীর বরাতে বলেন, অর্থ হলো তোমার সর্বোচ্চ রবের মহিমা ঘোষণা কর। নাম শব্দটি এখানে সংযোগের শব্দ, উদ্দেশ্য নামের মালিককে মহিমান্বিত করা। প্রমাণ হিসেবে তিনি কবি লাবীদের পঙক্তি আনেন: তারপর তোমাদের দুজনের উপর সালামের নাম। সেখানেও নাম শব্দটি একইভাবে সংযোগের কাজ করছে। বাগাভীও এক দলের কথা আনেন, যারা নামকে সংযোগের শব্দ ধরেছেন: বিপথগামীরা তোমার রব সম্পর্কে যা বলে, তা থেকে তাঁকে পবিত্র ঘোষণা কর।"
          },
          {
            "en": "Al-Baghawi adds that this verse is used as evidence by those who hold the name and the Named to be one, since no one says glory to the name of Allah; people say glory to Allah. A second answer reads name as naming: keep your naming of your Lord pure by mentioning Him only in reverence, as at-Tabari, al-Baghawi and al-Qurtubi each report. Al-Qurtubi states his own preference after giving that view: the better reading is that the name is the Named. He reasons from the reports he cites: they said glory to my Lord, the Most High, and not glory to the name of your Lord.",
            "bn": "বাগাভী আরও বলেন, যাঁরা নাম আর নামের মালিককে একই ধরেন, তাঁরা এ আয়াতকে দলিল হিসেবে আনেন। কারণ কেউ বলে না সুবহানা ইসমিল্লাহ, আল্লাহর নামের পবিত্রতা। সবাই বলে সুবহানাল্লাহ, আল্লাহর পবিত্রতা। দ্বিতীয় জবাবে নাম মানে নাম নেওয়া: রবের নাম নেওয়াকে পবিত্র রাখো, শুধু সম্মানের সঙ্গে তাঁর জিকির করো। তাবারী, বাগাভী ও কুরতুবী তিনজনই এ মত উল্লেখ করেন। মতটি তুলে ধরার পর কুরতুবী নিজের পছন্দ জানান: নামই নামের মালিক, এ ব্যাখ্যাই উত্তম। তাঁর যুক্তি নিজের উদ্ধৃত বর্ণনাগুলো। সেখানে বলা হয়েছে সুবহানা রাব্বিয়াল আ'লা, আমার সর্বোচ্চ রবের পবিত্রতা। কেউ বলেননি তোমার রবের নামের পবিত্রতা।"
          },
          {
            "en": "Ma'arif al-Qur'an, citing al-Qurtubi, says some commentators take ism here to mean not the name but the Being of Allah, that Arabic usage allows this, and that the instruction to say the tasbih in prostration as glory to my Lord points the same way. At-Tabari, as shown above, keeps name as a name, to be guarded from idols. The difference stands as the commentators left it.",
            "bn": "মাআরিফুল কুরআন কুরতুবীর বরাতে বলে, কিছু তাফসীরকার এখানে ইসম বলতে নাম নয়, আল্লাহর সত্তা বুঝেছেন। আরবি ভাষায় এমন প্রয়োগ চলে। সিজদায় তাসবীহ পড়ার যে নির্দেশ আছে, তা-ও এসেছে 'আমার রবের পবিত্রতা' বলে, আর এটিও একই দিকে ইঙ্গিত করে। অন্যদিকে তাবারী, আগেই যেমন দেখা গেছে, নামকে নাম হিসেবেই রাখেন, যাকে দেবদেবী থেকে বাঁচিয়ে রাখতে হবে। তাফসীরকারেরা মতভেদ যেভাবে রেখে গেছেন, সেভাবেই তা থাকল।"
          }
        ]
      },
      {
        "h": {
          "en": "Only What They Said of al-A'la",
          "bn": "আল-আ'লা নিয়ে শুধু তাঁদের কথা"
        },
        "p": [
          {
            "en": "On the word al-a'la itself the commentaries consulted here say little. At-Tabari, in the first reading he reports, explains it by a clause: there is no lord higher than He, nor greater. As-Sa'di says the tasbih is to mention His most beautiful names, which are high above every name, with their good and great meaning. The Muyassar asks for a declaration of purity that befits His greatness. Ma'arif al-Qur'an renders the phrase your most exalted Lord.",
            "bn": "আল-আ'লা শব্দটি নিয়ে সংগৃহীত তাফসীরগুলো খুব কম কথা বলে। তাবারী প্রথম যে ব্যাখ্যাটি উল্লেখ করেন, তাতে শব্দটির ব্যাখ্যা একটি বাক্যে: তাঁর চেয়ে উঁচু কোনো রব নেই, তাঁর চেয়ে বড়ও নেই। সা'দী বলেন, তাসবীহ মানে তাঁর সুন্দরতম নামগুলোর জিকির, যে নামগুলো সব নামের ঊর্ধ্বে, তাদের সুন্দর ও মহান অর্থসহ। মুয়াসসার চায় এমন পবিত্রতা ঘোষণা, যা তাঁর মহত্ত্বের উপযোগী। মাআরিফুল কুরআন অর্থ করে: তোমার সর্বোচ্চ মর্যাদাবান রব।"
          },
          {
            "en": "Al-Qurtubi reports through Nafi' that Ibn 'Umar said: do not say the name of Allah has risen high, for the name of Allah is the Most High. That is the whole of what these texts offer on the word. They do not open a discussion of how He is Most High, and this article does not open such a discussion either, from memory or in its own voice. The verses that follow, from 87:2, go on to describe the Lord whose name is to be glorified; they are left to be read in their own place.",
            "bn": "কুরতুবী নাফে'র সূত্রে ইবন উমার (রাঃ)-এর কথা আনেন: বলো না যে আল্লাহর নাম উঁচু হয়েছে, কারণ আল্লাহর নামই সর্বোচ্চ। শব্দটি নিয়ে এ তাফসীরগুলোর কথা এখানেই শেষ। তিনি কীভাবে সর্বোচ্চ, সে আলোচনা তাঁরা এখানে তোলেননি। এ লেখাও স্মৃতি থেকে বা নিজের পক্ষ থেকে সে আলোচনায় যাবে না। ৮৭:২ থেকে পরের আয়াতগুলো সেই রবের পরিচয় দিতে থাকে, যাঁর নামের পবিত্রতা ঘোষণার আদেশ এসেছে। সেগুলোর আলোচনা তাদের নিজ নিজ জায়গায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Answering the Command Aloud",
          "bn": "আদেশের জবাব মুখে"
        },
        "p": [
          {
            "en": "Several Companions are reported to have answered the verse as they recited it. At-Tabari, Ibn Kathir and al-Qurtubi all give 'Ali (RA): he recited Sabbih isma rabbika al-a'la and said subhana rabbiya al-a'la. At-Tabari and Ibn Kathir give the same of Ibn 'Abbas, who also said, on reaching the end of al-Qiyamah, is He not able to give life to the dead (75:40), glory to You, and yes; at-Tabari's wording adds O Allah. At-Tabari adds Ibn 'Abbas doing so in the sunset prayer, and Ibn 'Umar reading the verse with the phrase, the report adding that it was so in the reading of Ubayy ibn Ka'b.",
            "bn": "কয়েকজন সাহাবী আয়াতটি পড়ার সময়ই তার জবাব দিতেন বলে বর্ণিত আছে। তাবারী, ইবন কাসীর ও কুরতুবী তিনজনই আলী (রাঃ)-এর কথা আনেন: তিনি সাব্বিহিসমা রাব্বিকাল আ'লা পড়ে বললেন সুবহানা রাব্বিয়াল আ'লা। তাবারী ও ইবন কাসীর ইবন আব্বাস (রাঃ)-এর বেলায়ও একই কথা আনেন। সূরা কিয়ামাহর শেষ আয়াত, তিনি কি মৃতকে জীবিত করতে সক্ষম নন (৭৫:৪০), পর্যন্ত পৌঁছে তিনি বলতেন: আপনি পবিত্র, হ্যাঁ, অবশ্যই। তাবারীর বর্ণনায় এর সঙ্গে হে আল্লাহ কথাটিও আছে। তাবারী আরও আনেন, ইবন আব্বাস মাগরিবের নামাজে এমন করেছেন। আর ইবন উমার (রাঃ) আয়াতটির সঙ্গে বাক্যটি জুড়ে পড়তেন। বর্ণনায় এও আছে যে উবাই ইবন কা'ব (রাঃ)-এর কিরাআতেও এমনই ছিল।"
          },
          {
            "en": "Al-Qurtubi guards the line between the answer and the text. He reports, through Abu Bakr al-Anbari, that 'Ali said it in prayer and was asked afterwards whether he was adding this to the Qur'an. He said no: we were commanded something, and I said it. Al-Qurtubi says one follows the Companions in saying it, not because subhana rabbiya al-a'la is part of the Qur'an, as some people of deviation claimed. Ma'arif al-Qur'an calls the response commendable, citing al-Qurtubi, and notes that this desirability is outside the prayer.",
            "bn": "জবাব আর কুরআনের পাঠের মাঝের সীমা কুরতুবী সতর্কভাবে আলাদা রাখেন। তিনি আবু বকর ইবনুল আনবারীর সূত্রে বর্ণনা করেন, আলী (রাঃ) নামাজে কথাটি বললেন। নামাজ শেষে তাঁকে জিজ্ঞেস করা হলো, আপনি কি কুরআনে এটা বাড়িয়ে দিচ্ছেন? তিনি বললেন, না। আমাদের একটা কিছুর আদেশ দেওয়া হয়েছে, আমি সেটাই বলেছি। কুরতুবী বলেন, কথাটি বলা হয় সাহাবীদের অনুসরণে। এ কারণে নয় যে সুবহানা রাব্বিয়াল আ'লা কুরআনের অংশ, যেমনটা কিছু বিপথগামী লোক দাবি করেছে। মাআরিফুল কুরআন কুরতুবীর বরাতে এ জবাবকে মুস্তাহাব বলে, তবে জানায় যে তা মুস্তাহাব নামাজের বাইরে।"
          },
          {
            "en": "From the Prophet ﷺ the act comes by two routes in these texts. At-Tabari and Ibn Kathir carry Qatada's words, it was mentioned to us that the Prophet of Allah, when he recited it, said subhana rabbiya al-a'la. Ibn Kathir also cites Ahmad and Abu Dawud from Ibn 'Abbas that the Prophet ﷺ said it on reciting the verse, then quotes Abu Dawud's own remark: Waki' was contradicted in this hadith, for Abu Waki' and Shu'bah narrated it from Ibn 'Abbas as his own words.",
            "bn": "নবী ﷺ থেকে কাজটি এ তাফসীরগুলোতে আসে দুই পথে। তাবারী ও ইবন কাসীর কাতাদার কথা আনেন: আমাদের কাছে উল্লেখ করা হয়েছে যে আল্লাহর নবী আয়াতটি পড়লে বলতেন সুবহানা রাব্বিয়াল আ'লা। ইবন কাসীর আহমাদ ও আবু দাউদ থেকে ইবন আব্বাস (রাঃ)-এর বর্ণনাও আনেন যে নবী ﷺ আয়াতটি পড়ে কথাটি বলতেন। তারপর তিনি আবু দাউদের নিজের মন্তব্য উদ্ধৃত করেন: এ হাদিসে অন্যরা ওয়াকী'র থেকে ভিন্নভাবে বর্ণনা করেছেন। আবু ওয়াকী' ও শু'বা এটিকে ইবন আব্বাসের নিজের কথা হিসেবে বর্ণনা করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Bowing, Then Prostration",
          "bn": "রুকুর পর সিজদা"
        },
        "p": [
          {
            "en": "Ibn Kathir, al-Qurtubi and Ma'arif al-Qur'an all bring the report of 'Uqba ibn 'Amir al-Juhani (RA), and Ibn Kathir names Ahmad, Abu Dawud and Ibn Majah for it. In Abu Dawud's wording as the page gives it: When \"Glorify the name of your mighty Lord\" was revealed, the Messenger of Allah (ﷺ) said: Use it when bowing, and when \"Glorify the name of your most high Lord\" was revealed, he said: Use it when prostrating yourself. (Sunan Abu Dawud 869)",
            "bn": "ইবন কাসীর, কুরতুবী ও মাআরিফুল কুরআন তিনটিই উকবা ইবন আমির জুহানী (রাঃ)-এর বর্ণনা আনে। ইবন কাসীর এর উৎস হিসেবে আহমাদ, আবু দাউদ ও ইবন মাজাহর নাম বলেন। পৃষ্ঠায় আবু দাউদের যে ভাষ্য আছে, তাতে: যখন নাজিল হলো, তোমার মহান রবের নামে পবিত্রতা ঘোষণা কর, আল্লাহর রাসূল ﷺ বললেন: এটি রুকুতে রাখো। আর যখন নাজিল হলো, তোমার সর্বোচ্চ রবের নামের পবিত্রতা ঘোষণা কর, তিনি বললেন: এটি সিজদায় রাখো। (সুনান আবু দাউদ 869)"
          },
          {
            "en": "Ibn Majah records the same report (Sunan Ibn Majah 887). Neither page shows a grading for it, and none is supplied here. The earlier verse, by Ibn Kathir's reference, is fa-sabbih bi-smi rabbika al-'azim in al-Waqi'ah (56:74 and 56:96). The report pairs the two commands with the two postures: the Most Great for bowing, the Most High for prostration. The surah's place in the Eid and Friday prayers is treated in the entry on 87:14 to 87:17 and is not repeated here.",
            "bn": "ইবন মাজাহও একই বর্ণনা এনেছেন (সুনান ইবন মাজাহ 887)। কোনো পৃষ্ঠাতেই এর মান দেখানো নেই, তাই এখানেও কোনো মান দেওয়া হলো না। ইবন কাসীরের উল্লেখ অনুযায়ী আগের আয়াতটি হলো সূরা ওয়াকিআর ফাসাব্বিহ বিসমি রাব্বিকাল আযীম (৫৬:৭৪ ও ৫৬:৯৬)। বর্ণনাটি দুটি আদেশকে নামাজের দুটি অবস্থার সঙ্গে জোড়া দেয়: মহান রবের তাসবীহ রুকুতে, আর সর্বোচ্চ রবের তাসবীহ সিজদায়। ঈদ ও জুমার নামাজে এ সূরার স্থান নিয়ে আলোচনা আছে ৮৭:১৪ থেকে ৮৭:১৭ আয়াতের লেখায়, এখানে তা আর বলা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Names Kept for Him Alone",
          "bn": "যে নাম শুধু তাঁর"
        },
        "p": [
          {
            "en": "At-Tabari's second reading, keep His name from being given to anything else, sits close to a ruling that Ma'arif al-Qur'an gives, partly on al-Qurtubi's authority. Allah should be called by the names He has stated or taught the Prophet ﷺ, and no other. Some names belong to Allah alone, and calling a creature by them is contrary to declaring His purity. Ma'arif applies this to names such as 'Abdur-Rahman, 'Abdur-Razzaq, 'Abdul-Ghaffar and 'Abdul-Quddus, shortened in daily use to Rahman, Razzaq, Ghaffar or Quddus, and calls the habit a sin.",
            "bn": "তাবারীর দ্বিতীয় ব্যাখ্যা ছিল: তাঁর নাম অন্য কাউকে দিয়ো না। এর খুব কাছাকাছি একটি বিধান দেয় মাআরিফুল কুরআন, আংশিক কুরতুবীর বরাতে। আল্লাহকে ডাকতে হবে সেই নামে, যা তিনি নিজে বলেছেন বা নবী ﷺ-কে শিখিয়েছেন, অন্য কোনো নামে নয়। কিছু নাম শুধু আল্লাহর। কোনো সৃষ্টিকে সে নামে ডাকা তাঁর পবিত্রতা ঘোষণার বিপরীত। মাআরিফ এ কথা প্রয়োগ করে আবদুর রহমান, আবদুর রাযযাক, আবদুল গাফফার, আবদুল কুদ্দুসের মতো নামে। রোজকার ডাকে এগুলো ছোট হয়ে দাঁড়ায় রহমান, রাযযাক, গাফফার বা কুদ্দুস। মাআরিফ এ অভ্যাসকে গুনাহ বলে।"
          },
          {
            "en": "The other readings carry their own practice. Keeping the mention of His name humble asks how the name is said; the readings of prayer ask where it is said; the spoken reply asks that the command be answered on the tongue. At-Tabari's third reading points to 6:108, where insulting what others call on is forbidden lest they insult Allah in return; that verse has its own entry. Before any description of the Lord, the opening sets the manner in which His name is held.",
            "bn": "বাকি ব্যাখ্যাগুলো থেকেও আমলের কথা বেরিয়ে আসে। বিনয়ের সঙ্গে নাম নেওয়ার ব্যাখ্যা দেখে, নামটা কীভাবে নেওয়া হচ্ছে। নামাজের ব্যাখ্যাগুলো দেখে, কোথায় নেওয়া হচ্ছে। মুখের জবাবের ব্যাখ্যা চায়, আদেশের উত্তর জিহ্বায় আসুক। তাবারীর তৃতীয় ব্যাখ্যা ইঙ্গিত করে ৬:১০৮ আয়াতের দিকে। সেখানে অন্যরা যাদের ডাকে তাদের গালি দিতে নিষেধ করা হয়েছে, যাতে তারা পাল্টা আল্লাহকে গালি না দেয়। সে আয়াতের আলোচনা আলাদা লেখায় আছে। রবের কোনো পরিচয় আসার আগেই সূরার শুরু ঠিক করে দেয়, তাঁর নামকে কোন আদবে ধরে রাখতে হবে।"
          }
        ]
      }
    ]
  },
  "87:10": {
    "sections": [
      {
        "h": {
          "en": "A Promise in Three Words",
          "bn": "তিন শব্দের প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Sa-yadhdhakkaru man yakhsha: he who fears will be reminded. The verse is three Arabic words long, and it arrives directly after a command of four words in 87:9, fa-dhakkir in nafa'ati adh-dhikra, so remind, if the reminder benefits. The command is addressed to the Prophet ﷺ, yet the verse that answers it does not describe the person who reminds. It describes the person who receives. Before anything else, the surah turns from the speaker to the listener, and asks what kind of heart the reminder needs.",
            "bn": "সাইয়াযযাক্কারু মান ইয়াখশা: যে ভয় করে, সে উপদেশ গ্রহণ করবে। আরবিতে আয়াতটির শব্দ মাত্র তিনটি। ঠিক আগে ৮৭:৯ আয়াতে চারটি শব্দের এক আদেশ: ফাযাক্কির ইন নাফাআতিয যিকরা, কাজেই উপদেশ দাও, যদি উপদেশ উপকার দেয়। আদেশটা নবী ﷺ-এর প্রতি। কিন্তু তার জবাবে যে আয়াত এল, তা উপদেশদাতার কথা বলে না। বলে গ্রহণকারীর কথা। বক্তা থেকে সূরা মুখ ফেরায় শ্রোতার দিকে, আর জানতে চায়, উপদেশ ধারণ করতে কেমন অন্তর লাগে।"
          },
          {
            "en": "The root dh-k-r carries the link. It appears twice in 87:9, in the command dhakkir and in the noun adh-dhikra, and once more here, in yadhdhakkaru. The reminder is given in the first verse and taken in the next. At-Tabari reads the connection in exactly those terms: whoever fears Allah will take the reminder, O Muhammad, when you remind those whom I have commanded you to remind. On his reading the verse is the other half of the command, telling the Prophet ﷺ where his reminding will bear fruit.",
            "bn": "দুই আয়াতকে জুড়ে রেখেছে যাল-কাফ-রা ধাতু। ৮৭:৯ আয়াতে তা এসেছে দুবার, আদেশ যাক্কির আর বিশেষ্য আয-যিকরা রূপে। এখানে আরেকবার, ইয়াযযাক্কারু শব্দে। এক আয়াতে উপদেশ দেওয়া হয়, পরের আয়াতে তা নেওয়া হয়। তাবারী সংযোগটা ঠিক এভাবেই পড়েন। আল্লাহ বলছেন: হে মুহাম্মাদ, যাদের উপদেশ দিতে তোমাকে আদেশ করেছি তাদের যখন উপদেশ দেবে, তখন তা গ্রহণ করবে সে, যে আল্লাহকে ভয় করে। তাঁর পাঠে আয়াতটি আদেশেরই বাকি অর্ধেক। নবী ﷺ-কে জানিয়ে দেয়, তাঁর উপদেশ কোথায় ফল দেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fear Aimed at Allah",
          "bn": "ভয়ের লক্ষ্য আল্লাহ"
        },
        "p": [
          {
            "en": "The Arabic gives yakhsha no object. It says only man yakhsha, whoever fears, and leaves the reader to ask: fears what? Each commentator consulted for this verse answers, and the answers overlap without being identical. Al-Baghawi supplies the object in two words: Allah, Mighty and Majestic. The Muyassar says whoever fears his Lord. Al-Qurtubi glosses it with two verbs, whoever is mindful of Allah, yattaqi, and fears Him. In each of these the fear has Allah as its object.",
            "bn": "আরবিতে ইয়াখশা ক্রিয়ার কোনো কর্ম বলা নেই। শুধু মান ইয়াখশা, যে ভয় করে। পাঠকের মনে প্রশ্ন জাগে: কীসের ভয়? এ আয়াতের জন্য সংগৃহীত প্রতিটি তাফসীর এর উত্তর দেয়। উত্তরগুলো কাছাকাছি, তবে হুবহু এক নয়। বাগাভী দুই শব্দে কর্মটি বসিয়ে দেন: মহিমান্বিত ও মহান আল্লাহ। মুয়াসসার বলে, যে তার রবকে ভয় করে। কুরতুবী দুটি ক্রিয়া দিয়ে ব্যাখ্যা করেন: যে আল্লাহর তাকওয়া অবলম্বন করে, ইয়াত্তাকী, আর তাঁকে ভয় করে। এদের প্রত্যেকের কাছে ভয়ের লক্ষ্য আল্লাহ।"
          },
          {
            "en": "At-Tabari adds a second clause: whoever fears Allah and fears His punishment, yakhafu 'iqabahu. Ibn Kathir, in the Arabic and in the English abridgement alike, places the fear in the heart and pairs it with knowledge: a person whose heart fears Allah and who knows that he will meet Him. As-Sa'di pairs it with a different knowledge, the servant's knowledge that Allah will requite him for his deeds. So three readings add something to the bare fear: a punishment, a meeting, a recompense.",
            "bn": "তাবারী আরেকটি অংশ জুড়ে দেন: যে আল্লাহকে ভয় করে এবং তাঁর শাস্তিকে ভয় করে, ইয়াখাফু ইকাবাহু। ইবন কাসীর আরবি মূল আর ইংরেজি সংক্ষেপ দুই জায়গাতেই ভয়কে রাখেন অন্তরে, আর তার সঙ্গে জোড়েন এক জ্ঞান: যার অন্তর আল্লাহকে ভয় করে এবং যে জানে তাঁর সঙ্গে তার সাক্ষাৎ হবে। সা'দী জোড়েন ভিন্ন এক জ্ঞান। বান্দা জানে, আল্লাহ তার আমলের প্রতিদান দেবেন। ফলে তিনটি পাঠ খালি ভয়ের সঙ্গে কিছু যোগ করে: শাস্তি, সাক্ষাৎ, প্রতিদান।"
          },
          {
            "en": "None of these is set against the others in the texts, and this article does not choose among them. What they share is worth noticing. Not one commentator here defines the fear as a mood. Each ties it to Allah, and several tie it to something the one who fears knows: that a meeting is coming, that deeds will be answered. Read this way, the one who fears in 87:10 is first of all someone who has taken a fact seriously, and the feeling follows from the fact.",
            "bn": "তাফসীরগুলোতে এই পাঠগুলোকে পরস্পরের বিপরীতে দাঁড় করানো হয়নি, আর এ লেখাও এদের মধ্যে কোনোটা বেছে নেয় না। তবে এদের মিলটুকু খেয়াল করার মতো। এখানে কোনো মুফাসসিরই ভয়কে নিছক মনের অবস্থা বলেননি। প্রত্যেকে একে আল্লাহর সঙ্গে বেঁধেছেন। কয়েকজন আবার বেঁধেছেন এমন কিছুর সঙ্গে, যা ভয় করা মানুষটি জানে: সাক্ষাৎ আসছে, আমলের জবাব দিতে হবে। এভাবে পড়লে ৮৭:১০ আয়াতে যে ভয় করে, সে প্রথমত এমন একজন, যে একটি সত্যকে গুরুত্ব দিয়ে নিয়েছে। অনুভূতিটা আসে সেই সত্য থেকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "What Being Reminded Does",
          "bn": "উপদেশ নিলে কী হয়"
        },
        "p": [
          {
            "en": "Sa-yadhdhakkaru is glossed most often with one word. Ibn Kathir, al-Baghawi and the Muyassar all give sa-yatta'izu, he will take admonition, will be moved by the warning. Ibn Kathir names its source: he will take admonition from what you convey, O Muhammad. The reminder in this reading is not new information. It is a message already delivered, and the verse is about whether it is taken in. The English abridgement of Ibn Kathir has him receive admonition from what the Prophet ﷺ conveys to him.",
            "bn": "সাইয়াযযাক্কারু শব্দের ব্যাখ্যায় সবচেয়ে বেশি এসেছে একটি শব্দ। ইবন কাসীর, বাগাভী আর মুয়াসসার তিনজনই বলেন সাইয়াত্তাইযু: সে নসিহত গ্রহণ করবে, সতর্কবাণীতে নাড়া খাবে। ইবন কাসীর উৎসটাও বলে দেন। হে মুহাম্মাদ, তুমি যা পৌঁছে দাও, তা থেকেই সে নসিহত নেবে। এ পাঠে উপদেশ নতুন কোনো খবর নয়। বার্তা আগেই পৌঁছে গেছে, আয়াতের প্রশ্ন হলো তা ভেতরে নেওয়া হয় কি না। ইবন কাসীরের ইংরেজি সংক্ষেপেও আছে, নবী ﷺ যা পৌঁছে দেন, তা থেকে সে উপদেশ গ্রহণ করবে।"
          },
          {
            "en": "As-Sa'di opens his comment by naming the group: as for those who benefit, al-muntafi'un, He mentions them in His words, he who fears will be reminded. He then states what the benefit looks like. Fear of Allah, together with the servant's knowledge that Allah will requite his deeds, obliges the servant to hold back from sins and to strive in good works. For as-Sa'di, then, being reminded is measured in conduct: what a person stops doing, and what a person sets out to do.",
            "bn": "সা'দী তাঁর ব্যাখ্যা শুরু করেন দলটির নাম দিয়ে: যারা উপকৃত হয়, আল-মুনতাফিঊন, তাদের কথা আল্লাহ বলেছেন এই বাণীতে, যে ভয় করে সে উপদেশ গ্রহণ করবে। তারপর তিনি বলেন, উপকারটা কেমন হয়। আল্লাহর ভয় থাকলে, আর বান্দা যদি জানে যে আল্লাহ তার আমলের প্রতিদান দেবেন, এ দুটি মিলে তাকে গুনাহ থেকে বিরত থাকতে আর নেক কাজে চেষ্টা করতে বাধ্য করে। সা'দীর কাছে তাই উপদেশ নেওয়ার মাপকাঠি আচরণ: মানুষটি কী ছাড়ল, আর কী করতে শুরু করল।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Fear and Not Hope",
          "bn": "আশা নয়, ভয় কেন"
        },
        "p": [
          {
            "en": "Al-Qurtubi records an observation from al-Mawardi that meets a question a reader may well ask: why does the verse tie the reminder to fear? Al-Mawardi says that the one who hopes, man yarjuhu, may also be reminded. But the reminder of the one who fears is more effective, ablagh, than the reminder of the one who hopes, and so Allah attached it to fear rather than to hope, even though it attaches to both fear and hope.",
            "bn": "কুরতুবী মাওয়ারদীর একটি কথা উদ্ধৃত করেন, যা পাঠকের মনে স্বাভাবিকভাবে জাগা এক প্রশ্নের জবাব দেয়: আয়াত উপদেশকে ভয়ের সঙ্গেই বাঁধল কেন? মাওয়ারদী বলেন, যে আশা করে, মান ইয়ারজূহু, সেও উপদেশ গ্রহণ করতে পারে। তবে যে ভয় করে, তার উপদেশ নেওয়া যে আশা করে তার চেয়ে বেশি কার্যকর, আবলাগ। তাই আল্লাহ একে আশার বদলে ভয়ের সঙ্গে জুড়েছেন, যদিও উপদেশের সম্পর্ক ভয় আর আশা দুটোর সঙ্গেই।"
          },
          {
            "en": "Two things follow from his wording, and both are his, not this article's. First, hope is not excluded: the reminder can reach a hopeful heart too. Second, the choice of fear in the verse is a matter of which works more strongly, not of which alone is valid. Al-Mawardi does not say why fear reaches deeper, and the texts consulted here give no reason, so this article leaves the point where he left it.",
            "bn": "তাঁর কথা থেকে দুটি বিষয় বেরিয়ে আসে, আর দুটিই তাঁর, এ লেখার নয়। প্রথমত, আশাকে বাদ দেওয়া হয়নি। আশাবাদী অন্তরেও উপদেশ পৌঁছাতে পারে। দ্বিতীয়ত, আয়াতে ভয়কে বেছে নেওয়ার কারণ হলো কোনটা বেশি জোরে কাজ করে, কোনটা একমাত্র বৈধ তা নয়। ভয় কেন আরও গভীরে পৌঁছায়, মাওয়ারদী তা বলেননি। সংগৃহীত তাফসীরগুলোতেও কারণটা নেই। তাই এ লেখা বিষয়টা সেখানেই রেখে দেয়, যেখানে তিনি রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Weighing the Word If",
          "bn": "'যদি' শব্দটির ওজন"
        },
        "p": [
          {
            "en": "The verse before attaches a condition to the command: remind, in nafa'ati adh-dhikra, if the reminder benefits. This verse names who benefits, and the sources consulted for it read the relation in more than one way. Ibn Kathir, whose English abridgement treats 87:9 and 87:10 in one passage, reads the condition plainly: remind where reminding is beneficial. He draws from it the etiquette of spreading knowledge, that it should not be wasted upon those who are not suitable or worthy of it.",
            "bn": "আগের আয়াত আদেশের সঙ্গে একটি শর্ত জুড়েছে: উপদেশ দাও, ইন নাফাআতিয যিকরা, যদি উপদেশ উপকার দেয়। আর এ আয়াত জানায় উপকার পায় কে। দুই আয়াতের সম্পর্কটা সংগৃহীত সূত্রগুলো একাধিকভাবে পড়েছে। ইবন কাসীরের ইংরেজি সংক্ষেপে ৮৭:৯ ও ৮৭:১০ একই অংশে আলোচিত। তিনি শর্তটা সরাসরি পড়েন: যেখানে উপদেশ উপকারে আসে, সেখানে উপদেশ দাও। এ থেকে তিনি ইলম প্রচারের একটি আদব বের করেন। যারা এর উপযুক্ত বা যোগ্য নয়, তাদের পেছনে ইলম অপচয় করা উচিত নয়।"
          },
          {
            "en": "In support he cites two sayings of 'Ali (RA). In the abridgement's English, the first reads: \"You do not tell people any statement that their intellects do not grasp except that it will be a Fitnah (trial) for some of them.\" The second reads: \"Tell people that which they know. Would you like for Allah and His Messenger to be rejected\". These are a Companion's sayings that Ibn Kathir cites under 87:9; the passage gives no chain and no grading for them.",
            "bn": "সমর্থনে তিনি আলী (রাঃ)-এর দুটি উক্তি আনেন। প্রথমটির মর্ম: মানুষের বুদ্ধি যে কথা ধরতে পারে না, এমন কথা তাদের বললে তা তাদের কারও কারও জন্য ফিতনা, অর্থাৎ পরীক্ষা হয়ে দাঁড়ায়। দ্বিতীয়টির মর্ম: মানুষকে সেটুকুই বলো যা তারা জানে। তোমরা কি চাও আল্লাহ ও তাঁর রাসূলকে অস্বীকার করা হোক? এগুলো একজন সাহাবীর উক্তি, ইবন কাসীর ৮৭:৯ আয়াতের আলোচনায় এনেছেন। সেখানে এগুলোর কোনো সনদ বা মান উল্লেখ নেই।"
          },
          {
            "en": "Ma'arif al-Qur'an reads the same particle differently. It says the verse contains the conditional particle in, if, which apparently makes the sentence a conditional statement, but that the command is not in fact meant to be conditional; it is an emphatic statement. The verse, on this reading, says that preaching truth and righteousness is certainly useful, and therefore the beneficial thing should never be abandoned at any time.",
            "bn": "মাআরিফুল কুরআন একই অব্যয়টি পড়ে ভিন্নভাবে। সেখানে বলা হয়েছে, আয়াতে শর্তবাচক অব্যয় ইন, যদি, আছে বলে বাক্যটিকে আপাতদৃষ্টিতে শর্তযুক্ত মনে হয়। কিন্তু আদেশটি আসলে শর্তসাপেক্ষ করা উদ্দেশ্য নয়, এটি জোর দিয়ে বলা কথা। এ পাঠে আয়াতের বক্তব্য হলো, সত্য ও সৎকাজের দাওয়াত নিশ্চয়ই উপকারী। তাই উপকারী এ কাজ কোনো সময়েই ছেড়ে দেওয়া উচিত নয়।"
          },
          {
            "en": "Al-Qurtubi, under 87:10, records a third view with the words wa-qila, it is said, and notes that al-Qushayri reported it: make the reminder and the admonition general, even though admonition benefits only the one who fears, for you still obtain the reward of calling. So one reading places the reminder where it will benefit, another holds that it always benefits, and a third has it given to all while only some take it. The texts set them side by side, and so does this article.",
            "bn": "কুরতুবী ৮৭:১০ আয়াতের আলোচনায় 'বলা হয়েছে', ওয়া কীলা, শব্দে তৃতীয় একটি মত আনেন, আর জানান কুশাইরী এটি বর্ণনা করেছেন। মতটি হলো: তুমি উপদেশ ও নসিহত সবার জন্য ব্যাপক করো। নসিহত যদিও কেবল যে ভয় করে তারই উপকারে আসে, তবু দাওয়াতের সওয়াব তুমি পাবেই। তাহলে এক পাঠে উপদেশ দিতে হবে যেখানে তা উপকারে আসে। আরেক পাঠে উপদেশ সব সময়ই উপকারী। তৃতীয় পাঠে উপদেশ সবাইকে দেওয়া হবে, নেবে কেউ কেউ। তাফসীরগুলো মতগুলোকে পাশাপাশি রেখেছে, এ লেখাও তাই রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Verse That Follows",
          "bn": "ঠিক পরের আয়াত"
        },
        "p": [
          {
            "en": "The verse that follows, 87:11, names the other side: one who avoids the reminder. The Muyassar's comment under 87:10 already reads the two together. The one who fears his Lord will take admonition, it says, and the most wretched, al-ashqa, who does not fear his Lord, keeps away from the reminder. The contrast turns on fear of the same Lord: one fears his Lord, the other does not. What becomes of that one is the subject of the verses after, and this article leaves them to their own place.",
            "bn": "পরের আয়াত, ৮৭:১১, অন্য পক্ষের কথা বলে: যে উপদেশ এড়িয়ে চলে। মুয়াসসার ৮৭:১০ আয়াতের ব্যাখ্যাতেই দুটিকে একসঙ্গে পড়ে। সেখানে বলা হয়েছে, যে তার রবকে ভয় করে সে নসিহত নেবে, আর সবচেয়ে হতভাগা, আল-আশকা, যে তার রবকে ভয় করে না, সে উপদেশ থেকে দূরে সরে যায়। বৈপরীত্যটা রবের ভয়কে ঘিরে: একজন রবকে ভয় করে, অন্যজন করে না। তার পরিণতি কী হবে, সেটি পরের আয়াতগুলোর বিষয়। এ লেখা সেগুলোকে তাদের নিজের জায়গায় রেখে দেয়।"
          },
          {
            "en": "Because the pair is framed as two groups, one point needs saying plainly. The verse speaks only of what it names, one who fears and is reminded, set against one who avoids the reminder, and it licenses nothing against any living person or community. It hands no reader the right to sort the people around him into those who fear and those who do not. Ibn Kathir's gloss places the fear in the heart, and no one reading this verse is given sight of another person's heart.",
            "bn": "জোড়াটি যেহেতু দুই দলের ছবি হিসেবে এসেছে, একটি কথা সোজাসুজি বলা দরকার। আয়াতটি শুধু তা-ই বর্ণনা করে যা পাঠে আছে: একজন ভয় করে ও উপদেশ নেয়, অন্যজন উপদেশ এড়িয়ে চলে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। আশপাশের মানুষদের ভয়কারী আর ভয়হীন বলে ভাগ করার অধিকারও কোনো পাঠককে দেয় না। ইবন কাসীরের ব্যাখ্যা ভয়কে রাখে অন্তরে। আর এ আয়াত পড়ে কেউ অন্যের অন্তর দেখার চোখ পায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Read From Its Placement",
          "bn": "অবস্থান থেকেই পাঠ"
        },
        "p": [
          {
            "en": "None of the tafsirs consulted for this verse attaches a sound hadith to it, and this article quotes none. The hadiths Ibn Kathir gathers in the same grouped passage concern the surah as a whole, its early recitation and its place in particular prayers, and another he cites belongs to a later verse. None is about 87:10, so none is used here. Nor does this article rely on an occasion of revelation for the verse. None is established in the sources consulted, so the verse is read here from its placement.",
            "bn": "এ আয়াতের জন্য সংগৃহীত কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদিস যুক্ত করেনি, এ লেখাও কোনো হাদিস উদ্ধৃত করে না। একই অংশে ইবন কাসীর যে হাদিসগুলো এনেছেন, সেগুলো পুরো সূরা নিয়ে: এর প্রথম দিকের তিলাওয়াত আর নির্দিষ্ট কিছু নামাজে এর স্থান। আরেকটি হাদিস পরের এক আয়াতের সঙ্গে সম্পর্কিত। কোনোটিই ৮৭:১০ আয়াত নিয়ে নয়, তাই এখানে কোনোটিই নেওয়া হয়নি। আয়াতটির কোনো শানে নুযূলের উপরও এ লেখা নির্ভর করে না। ব্যবহৃত সূত্রগুলোতে তেমন কিছু প্রতিষ্ঠিত নয়, তাই আয়াতটি এখানে পড়া হয়েছে তার অবস্থান থেকে।"
          },
          {
            "en": "That placement is itself a guide. The surah has just told the Prophet ﷺ that he will be made to recite and will not forget, and that he will be eased toward ease, in 87:6, 87:7 and 87:8; then it commands him to remind. The verses before speak of the reminder's carrier, and this verse of its receiver. Ma'arif al-Qur'an makes the first half of that move in its own words: the preceding verses described the facilities Allah created for the Holy Prophet in performing his prophetic obligation, and 87:9 commands him to perform it.",
            "bn": "অবস্থানটাই পথ দেখায়। ৮৭:৬, ৮৭:৭ ও ৮৭:৮ আয়াতে সূরা সবেমাত্র নবী ﷺ-কে জানিয়েছে, তাঁকে পড়িয়ে দেওয়া হবে আর তিনি ভুলবেন না, আর সহজ পথ তাঁর জন্য আরও সহজ করে দেওয়া হবে। তারপর আসে উপদেশ দেওয়ার আদেশ। আগের আয়াতগুলো উপদেশের বাহককে নিয়ে, আর এ আয়াত তার গ্রহীতাকে নিয়ে। মাআরিফুল কুরআন নিজের ভাষায় এর প্রথম অংশটুকু বলে। আগের আয়াতগুলোতে নবুওয়াতের দায়িত্ব পালনে আল্লাহ নবী ﷺ-এর জন্য যেসব সুবিধা দিয়েছেন তার বর্ণনা ছিল, আর ৮৭:৯ আয়াত তাঁকে সেই দায়িত্ব পালনের আদেশ দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Keeping the Meeting in View",
          "bn": "সাক্ষাতের কথা মনে রেখে"
        },
        "p": [
          {
            "en": "Read as a mirror, the verse asks a question about the reader, not about anyone else. Reminders reach most people constantly: a verse heard in prayer, a funeral, a word from a friend. The verse says the reminder will be taken by one who fears. If reminders keep passing over me without changing anything, the first place to look, on the verse's own terms, is not the reminder itself but the fear behind my listening, or its absence.",
            "bn": "আয়না হিসেবে পড়লে আয়াতটি প্রশ্ন করে পাঠককেই, অন্য কাউকে নয়। উপদেশ তো প্রায় সবার কাছে বারবার আসে: নামাজে শোনা কোনো আয়াত, কোনো জানাযা, বন্ধুর মুখের একটা কথা। আয়াত বলছে, উপদেশ নেবে সে, যে ভয় করে। উপদেশ যদি বারবার আমার উপর দিয়ে চলে যায় আর কিছুই না বদলায়, তবে আয়াতের নিজের হিসাবে প্রথমে দেখার জায়গা উপদেশটা নয়। দেখার জায়গা আমার শোনার পেছনের ভয়টুকু, কিংবা তার না থাকা।"
          },
          {
            "en": "The commentators give that fear a shape one can work with. Ibn Kathir's gloss pairs it with knowing that one will meet Allah; as-Sa'di's pairs it with knowing that deeds will be requited, and measures the reminder by sins left and good deeds sought. Neither describes a feeling to be manufactured. Both describe a fact to be kept in view. A reader who keeps the meeting in view at the hour of a decision has begun to take the reminder in the way their glosses describe.",
            "bn": "মুফাসসিরগণ এই ভয়কে এমন চেহারা দেন, যা জীবনে কাজে লাগানো যায়। ইবন কাসীরের ব্যাখ্যায় ভয়ের সঙ্গী এই জ্ঞান যে আল্লাহর সঙ্গে সাক্ষাৎ হবে। সা'দীর ব্যাখ্যায় এর সঙ্গী এই জ্ঞান যে আমলের প্রতিদান মিলবে। আর উপদেশ কতটা নেওয়া হলো, তা তিনি মাপেন ছেড়ে দেওয়া গুনাহ আর চেষ্টা করা নেক কাজ দিয়ে। কেউই জোর করে বানানো কোনো অনুভূতির কথা বলেন না। দুজনেই বলেন একটি সত্যের কথা, যা চোখের সামনে রাখতে হয়। সিদ্ধান্তের মুহূর্তে যে পাঠক সাক্ষাতের কথা মনে রাখে, সে তাঁদের ব্যাখ্যার ধারায় উপদেশ নিতে শুরু করেছে।"
          },
          {
            "en": "And for anyone who reminds others, the two verses together offer both caution and relief. Ibn Kathir's reading counsels care about where knowledge is offered and how much. Ma'arif al-Qur'an's reading, and the view al-Qurtubi records from al-Qushayri, counsel that it not be withheld. The verse itself places the taking of the reminder with whoever fears, and the view al-Qushayri reported adds that whoever reminds has the reward of calling either way.",
            "bn": "যিনি অন্যদের উপদেশ দেন, তাঁর জন্য দুই আয়াত মিলে সতর্কতাও দেয়, স্বস্তিও দেয়। ইবন কাসীরের পাঠ বলে, ইলম কোথায় আর কতটুকু দেওয়া হচ্ছে সে ব্যাপারে যত্নবান হতে। মাআরিফুল কুরআনের পাঠ আর কুশাইরী থেকে কুরতুবীর আনা মত বলে, উপদেশ আটকে রাখা যাবে না। আয়াত নিজেই বলে দেয়, উপদেশ নেবে সে, যে ভয় করে। আর কুশাইরীর বর্ণিত মত যোগ করে, যিনি উপদেশ দেন, ফল যা-ই হোক, দাওয়াতের সওয়াব তিনি পাবেন।"
          }
        ]
      }
    ]
  },
  "87:14-17": {
    "sections": [
      {
        "h": {
          "en": "Who Has Truly Succeeded",
          "bn": "সত্যিকারের সফল কে"
        },
        "p": [
          {
            "en": "Qad aflaha man tazakka: he has certainly succeeded who purifies himself. These verses answer the three before them (87:11 to 87:13), where the most wretched avoids the reminder and burns in the greatest Fire, neither dying there nor living. At-Tabari glosses aflaha as he has prospered and attained what he sought. Al-Qurtubi says he has reached lasting life in Paradise; as-Sa'di, that he has won and profited. The Muyassar's word is faza, he has triumphed.",
            "bn": "কাদ আফলাহা মান তাযাক্কা: নিশ্চয়ই সফল হলো সে, যে নিজেকে পরিশুদ্ধ করল। ঠিক আগের তিনটি আয়াতে (৮৭:১১ থেকে ৮৭:১৩) ছিল চরম হতভাগার কথা। সে উপদেশ এড়িয়ে চলে, সবচেয়ে বড় আগুনে জ্বলে, সেখানে না মরে, না বাঁচে। এই আয়াতগুলো তারই জবাব। তাবারী আফলাহার অর্থ করেন: সে কামিয়াব হলো, যা চাইছিল তা পেয়ে গেল। কুরতুবীর মতে, সে জান্নাতে চিরকাল থাকার ঠিকানা পেয়ে গেল। সা'দী বলেন, সে জিতল, লাভবান হলো। মুয়াসসারের শব্দ ফাযা, অর্থাৎ সে বিজয়ী হলো।"
          },
          {
            "en": "The passage moves in two pairs. The first describes whoever succeeds: he purifies himself, remembers the name of his Lord and prays. The second turns on the listeners: rather you prefer the life of this world, while the Hereafter is better and more lasting. The surah opened at 87:1 with the command to glorify the name of your Lord, and here the successful man remembers the name of his Lord. At 87:10, whoever fears is reminded. And 91:9 opens with the same words, qad aflaha, about the soul: he has succeeded who purifies it.",
            "bn": "অংশটি এগোয় দুই জোড়ায়। প্রথম জোড়া জানায় কে সফল: যে নিজেকে পরিশুদ্ধ করে, রবের নাম স্মরণ করে আর নামায পড়ে। দ্বিতীয় জোড়া ফেরে শ্রোতাদের দিকে: বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও, অথচ আখিরাত উত্তম ও অধিক স্থায়ী। সূরাটি ৮৭:১ আয়াতে শুরু হয়েছিল তোমার রবের নামের তাসবীহের আদেশ দিয়ে, আর এখানে সফল মানুষটি স্মরণ করে তার রবের নাম। ৮৭:১০ আয়াতে আছে, যে ভয় করে সে-ই উপদেশ নেয়। ৯১:৯ আয়াতও খোলে একই কথায়, কাদ আফলাহা, তবে সেখানে কথা নফস নিয়ে: সফল হলো সে, যে তাকে পরিশুদ্ধ করল।"
          }
        ]
      },
      {
        "h": {
          "en": "Cleansed of What, Exactly",
          "bn": "পরিশুদ্ধি কীসের থেকে"
        },
        "p": [
          {
            "en": "Tazakka means he made himself pure. Ma'arif al-Qur'an traces it to zakah, whose first meaning is purity: the alms are so called because they purify the rest of a man's wealth. Here, it says, the word is general, covering purity of faith, of character and of wealth. At-Tabari's own gloss is that he cleansed himself of disbelief and of disobedience to Allah, acted on what Allah commanded him and fulfilled His obligations.",
            "bn": "তাযাক্কা মানে সে নিজেকে পবিত্র করল। মাআরিফুল কুরআন শব্দটিকে যাকাতের সঙ্গে মেলায়, যার মূল অর্থ পবিত্রতা। সম্পদের যাকাতকে এ নামে ডাকা হয়, কারণ তা মানুষের বাকি সম্পদকে পাক করে দেয়। মাআরিফুল কুরআনের মতে এখানে শব্দটি ব্যাপক অর্থে এসেছে: ঈমানের পবিত্রতা, চরিত্রের পবিত্রতা, সম্পদের পবিত্রতা, সবই এর ভেতরে। তাবারীর নিজের ব্যাখ্যা হলো, সে কুফর আর আল্লাহর নাফরমানি থেকে নিজেকে পাক করল, আল্লাহ যা আদেশ করেছেন সে অনুযায়ী আমল করল এবং তাঁর ফরযগুলো আদায় করল।"
          },
          {
            "en": "Behind that gloss at-Tabari lines up the early readings. From Ibn Abbas (RA): whoever cleansed himself of shirk. From Ikrimah: whoever said la ilaha illa Allah. From al-Hasan: whoever's deeds were pure. From Qatadah, through Ma'mar: he acts with scrupulous caution. Al-Qurtubi names Ata with Ibn Abbas and Ikrimah for cleansing from shirk through faith, pairs ar-Rabi' with al-Hasan, and gives their wording as deeds that were pure and growing.",
            "bn": "এই ব্যাখ্যার পেছনে তাবারী প্রথম যুগের মতগুলো সাজিয়ে দেন। ইবন আব্বাস (রাঃ) বলেন: যে শিরক থেকে নিজেকে পাক করল। ইকরিমা বলেন: যে লা ইলাহা ইল্লাল্লাহ বলল। হাসান বলেন: যার আমল ছিল পবিত্র। মা'মারের সূত্রে কাতাদা বলেন: সে আমল করে পরহেযগারির সঙ্গে, সাবধানে। কুরতুবী ঈমান দিয়ে শিরক থেকে পবিত্র হওয়ার মতে ইবন আব্বাস ও ইকরিমার সঙ্গে আতার নামও যোগ করেন। হাসানের সঙ্গে রাখেন রবী'কে, আর তাঁদের ভাষায় আমলটি পবিত্র এবং বেড়ে ওঠা।"
          },
          {
            "en": "The later commentators carry the cleansing from belief into character. As-Sa'di: he purified and cleared his soul of shirk, of wrongdoing and of bad character. Ibn Kathir: he purified himself of base traits and followed what Allah sent down to His Messenger ﷺ. The Muyassar names bad character alone. Read together, the washing reaches from belief to the habits that outlast it.",
            "bn": "পরের যুগের মুফাসসিরগণ পরিশুদ্ধিকে ঈমান থেকে চরিত্র পর্যন্ত টেনে নেন। সা'দী বলেন, সে নিজের নফসকে শিরক, যুলুম আর মন্দ স্বভাব থেকে পাক-সাফ করল। ইবন কাসীর বলেন, সে নীচ স্বভাব থেকে নিজেকে পবিত্র করল এবং আল্লাহ তাঁর রাসূল ﷺ-এর উপর যা নাযিল করেছেন তা মেনে চলল। মুয়াসসার শুধু মন্দ চরিত্রের কথা বলে। সব মিলিয়ে পড়লে এই ধোয়ামোছা বিশ্বাস থেকে পৌঁছে যায় সেই অভ্যাস পর্যন্ত, যা ঈমান ঠিক হওয়ার পরও ভেতরে থেকে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Giving Before Standing to Pray",
          "bn": "নামাযে দাঁড়ানোর আগে দান"
        },
        "p": [
          {
            "en": "Others, at-Tabari reports, took tazakka as paying the zakat of a person's wealth. Abu al-Ahwas said: whoever is able to give a little, let him do it, then stand and pray. Through another chain he said: if a beggar comes to you while you mean to pray, put your zakat before your prayer, for Allah says, he has succeeded who purifies himself, and remembers the name of his Lord and prays. Qatadah's line is that a man purified himself through his wealth and pleased his Creator.",
            "bn": "তাবারী জানান, কেউ কেউ তাযাক্কার অর্থ নিয়েছেন সম্পদের যাকাত আদায় করা। আবুল আহওয়াস বলেন: যে অল্প কিছু দিতে পারে, সে যেন দেয়, তারপর উঠে নামায পড়ে। আরেক সূত্রে তাঁর কথা: নামায পড়তে যাচ্ছেন, এমন সময় কোনো ভিক্ষুক এলে নামাযের আগে যাকাতটা দিয়ে দিন। কারণ আল্লাহ বলেছেন, সফল হলো সে, যে নিজেকে পরিশুদ্ধ করল, রবের নাম স্মরণ করল, তারপর নামায পড়ল। কাতাদার কথায়, লোকটি নিজের সম্পদ দিয়ে নিজেকে পাক করল আর তার স্রষ্টাকে সন্তুষ্ট করল।"
          },
          {
            "en": "Al-Qurtubi widens this to every charity: Ibn Jurayj asked Ata whether the verse meant the charity of the fast-breaking, and Ata said it is for all charities. Al-Baghawi records that Ibn Mas'ud (RA) used to say, may Allah have mercy on a man who gave charity and then prayed, and would then recite this verse. Al-Qurtubi also notes a view that it is the zakat of deeds, purity from showing off and shortfall, because of wealth the usual verb is zakka, not tazakka.",
            "bn": "কুরতুবী একে সব দানের দিকে বাড়িয়ে দেন। ইবন জুরাইজ আতাকে জিজ্ঞেস করেছিলেন, আয়াতটি কি ফিতরের সদকার কথা বলছে? আতা বললেন, এটা সব সদকার জন্য। বাগাভী জানান, ইবন মাসউদ (রাঃ) বলতেন: আল্লাহ রহম করুন সেই মানুষের উপর, যে দান করল, তারপর নামায পড়ল। এরপর তিনি এ আয়াত তিলাওয়াত করতেন। কুরতুবী আরেকটি মতও উল্লেখ করেন: এটা আমলের যাকাত, সম্পদের নয়। অর্থাৎ রিয়া আর ত্রুটি থেকে আমলকে পাক রাখা। কারণ সম্পদের বেলায় সাধারণত বলা হয় যাক্কা, তাযাক্কা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Morning of the Fast-Breaking",
          "bn": "ফিতরের দিনের ভোর"
        },
        "p": [
          {
            "en": "A further reading ties the verses to the end of Ramadan: tazakka is the zakat al-fitr, and the prayer is the Eid prayer. At-Tabari gives it through Abu Khaldah. Abu al-'Aliyah asked him to call by on his way to the Eid, then asked whether he had eaten, whether he had washed, and what he had done with his zakat. Told it was sent, he said that was all he wanted him for, recited the verses, and said the people of Madinah held no charity better than it and the giving of water.",
            "bn": "আরেকটি মত আয়াতগুলোকে রমযানের শেষের সঙ্গে মেলায়: তাযাক্কা মানে যাকাতুল ফিতর, আর নামায মানে ঈদের নামায। তাবারী এটি আনেন আবু খালদার সূত্রে। আবুল আলিয়া তাঁকে বলেছিলেন, কাল ঈদে যাওয়ার পথে আমার এখানে হয়ে যেও। তিনি গেলে আবুল আলিয়া জানতে চাইলেন, কিছু খেয়েছ? গোসল করেছ? যাকাতের কী করলে? পাঠিয়ে দিয়েছি শুনে বললেন, এ জন্যই তোমাকে ডেকেছিলাম। তারপর আয়াতগুলো পড়লেন এবং বললেন, মদীনার লোকেরা এর চেয়ে আর পানি পান করানোর চেয়ে উত্তম কোনো সদকা জানে না।"
          },
          {
            "en": "Al-Qurtubi reports it from Abu Sa'id al-Khudri and Ibn Umar (RA), and from Ibn Sirin, who said: he went out and prayed after he had paid. Al-Baghawi has Nafi' recall that on the Eid morning Ibn Umar would ask him whether he had given the charity; if not, he told him to give it then, saying this verse came down about this. Ibn Kathir reports that Umar ibn Abd al-Aziz would command people to give it, and recite this verse.",
            "bn": "কুরতুবী এটি বর্ণনা করেন আবু সাঈদ খুদরী ও ইবন উমর (রাঃ) থেকে, আর ইবন সীরীন থেকে, যিনি বলেছেন: আদায় করার পর সে বেরিয়ে গিয়ে নামায পড়ল। বাগাভীর বর্ণনায় নাফি' স্মরণ করেন, ঈদের সকালে ইবন উমর তাঁকে জিজ্ঞেস করতেন, সদকা দিয়েছ? না দিলে বলতেন, তাহলে এখনই দাও, এ আয়াত তো এ নিয়েই নাযিল হয়েছে। ইবন কাসীর জানান, উমর ইবন আবদুল আযীয মানুষকে ফিতরা আদায়ের আদেশ দিতেন আর এই আয়াত তিলাওয়াত করতেন।"
          },
          {
            "en": "The objection is recorded beside it. Al-Qurtubi notes that the surah is Makkan in the view of the majority, and Makkah had neither Eid nor zakat al-fitr. Al-Qushayri, in al-Qurtubi, answers that Allah may have praised in advance those who would obey a later command; al-Baghawi, that revelation may come before the ruling, as with 90:2 and 54:45. As-Sa'di's verdict: the Eid reading falls within the wording as a particular of it, but it is not the meaning on its own.",
            "bn": "এর পাশেই আপত্তিটাও লেখা আছে। কুরতুবী বলেন, অধিকাংশের মতে সূরাটি মাক্কী, আর মক্কায় তখন ঈদও ছিল না, ফিতরাও ছিল না। কুরতুবীর বর্ণনায় কুশাইরীর জবাব: হতে পারে আল্লাহ আগেভাগেই তাদের প্রশংসা করেছেন, যারা পরে আসা আদেশ মেনে চলবে। বাগাভীর জবাব: বিধান আসার আগেও আয়াত নাযিল হতে পারে, যেমন ৯০:২ ও ৫৪:৪৫ আয়াতে হয়েছে। সা'দীর সিদ্ধান্ত: ঈদের ব্যাখ্যা আয়াতের শব্দের ভেতরে পড়ে, তার একটি অংশ হিসেবে, কিন্তু কেবল সেটাই আয়াতের অর্থ নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Name, Then the Prayer",
          "bn": "রবের নাম, তারপর নামায"
        },
        "p": [
          {
            "en": "Wa dhakara isma rabbihi fa-salla: and remembers the name of his Lord, and prays. At-Tabari records a difference over the remembrance. Ibn Abbas (RA) said: he affirmed the oneness of Allah. Others said: he remembered Allah, called on Him and turned to Him in longing. At-Tabari's choice joins them, since all of it is remembrance of Allah and Allah did not restrict His remembrance to any particular kind. As-Sa'di describes a heart dyed with remembrance, which drives a man to what pleases Allah, above all the prayer, the scale of faith.",
            "bn": "ওয়া যাকারাসমা রাব্বিহী ফাসাল্লা: আর সে তার রবের নাম স্মরণ করল, তারপর নামায পড়ল। এই স্মরণ নিয়ে তাবারী মতভেদের কথা লিখেছেন। ইবন আব্বাস (রাঃ) বলেন: সে আল্লাহর তাওহীদ মেনে নিল। অন্যরা বলেন: সে আল্লাহকে স্মরণ করল, তাঁকে ডাকল, আগ্রহ নিয়ে তাঁর দিকে ফিরল। তাবারী দুটো মতকেই একসঙ্গে নেন, কারণ এর সবই আল্লাহর জিকির, আর আল্লাহ তাঁর জিকিরকে কোনো বিশেষ ধরনে সীমিত করেননি। সা'দীর ছবিটা এমন: অন্তর জিকিরের রঙে রেঙে যায়, আর সেই রং মানুষকে টেনে নেয় আল্লাহর পছন্দের আমলের দিকে, বিশেষ করে নামাযের দিকে, যা ঈমানের মানদণ্ড।"
          },
          {
            "en": "On fa-salla at-Tabari records three views: the five prayers, from Ibn Abbas; the Eid prayer on the day of the fast-breaking; and supplication, since salah can mean du'a. His own choice is the prayers, with Allah remembered within them by praise, glorification and supplication. Ibn Kathir glosses that he established the prayer at its times, seeking Allah's pleasure, and notes that Ibn Abbas took it as the five prayers and Ibn Jarir chose that. Ma'arif al-Qur'an says it covers obligatory and voluntary prayer alike.",
            "bn": "ফাসাল্লা নিয়ে তাবারী তিনটি মত লেখেন: ইবন আব্বাসের মতে পাঁচ ওয়াক্ত নামায; কারও মতে ফিতরের দিনের ঈদের নামায; আর কারও মতে দোয়া, কারণ সালাতের এক অর্থ দোয়া। তাবারীর নিজের পছন্দ: নামাযগুলো, যার ভেতরে হামদ, মহিমা ঘোষণা আর দোয়ার মাধ্যমে আল্লাহর জিকির হয়। ইবন কাসীরের ব্যাখ্যা: সে ঠিক সময়ে নামায কায়েম করল, আল্লাহর সন্তুষ্টির খোঁজে। তিনি আরও জানান, ইবন আব্বাস একে পাঁচ ওয়াক্ত নামায বুঝেছেন এবং ইবন জারীর সেটাই গ্রহণ করেছেন। মাআরিফুল কুরআন বলে, ফরয ও নফল সব নামাযই এর ভেতরে আসে।"
          },
          {
            "en": "Al-Qurtubi gathers more readings of the remembrance: the opening takbir, without which the prayer does not begin, or the Eid takbirs, which ad-Dahhak placed on the road to the prayer ground. From the opening takbir some argued that it is obligatory and not part of the prayer, since the prayer is joined to it, a question on which, he says, the jurists differ. On the order, he reads fa-salla as he prayed and remembered: you honoured me, so you visited me, and you visited me, so you honoured me, come to the same.",
            "bn": "স্মরণের আরও কয়েকটি ব্যাখ্যা কুরতুবী জড়ো করেন। কারও মতে এটা নামাযের শুরুর তাকবীর, যা ছাড়া নামায শুরুই হয় না। কারও মতে ঈদের তাকবীর, যা দাহহাক রেখেছেন ঈদগাহে যাওয়ার পথে। শুরুর তাকবীর থেকে কেউ কেউ যুক্তি দেন যে তা ফরয, আবার নামাযের অংশ নয়, কারণ নামাযকে তার সঙ্গে জুড়ে দেওয়া হয়েছে। তিনি বলেন, এ নিয়ে ফকীহদের মতভেদ আছে। ক্রম প্রসঙ্গে তিনি ফাসাল্লার অর্থ করেন: সে নামায পড়ল এবং স্মরণ করল। তাঁর উদাহরণ: আপনি আমাকে সম্মান করলেন, তাই দেখা করলেন, আর দেখা করলেন, তাই সম্মান করলেন, দুটো কথায় কোনো তফাত নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "You, or They?",
          "bn": "তোমরা, নাকি তারা?"
        },
        "p": [
          {
            "en": "Bal tu'thiruna al-hayata ad-dunya: rather, you prefer the life of this world. Most reciters read tu'thiruna, you prefer. Abu Amr read yu'thiruna, they prefer; al-Baghawi names Ya'qub with him and al-Qurtubi Nasr ibn Asim. On that reading the subject is the most wretched of 87:11, whom al-Baghawi takes as a class, singular in form and plural in sense. At-Tabari keeps you, citing the agreement of the reciters, and he and al-Qurtubi both note Ubayy's reading, bal antum tu'thirun.",
            "bn": "বাল তু'সিরূনাল হায়াতাদ দুনইয়া: বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও। অধিকাংশ কারী পড়েছেন তু'সিরূনা, তোমরা প্রাধান্য দাও। আবু আমর পড়েছেন ইউ'সিরূনা, তারা প্রাধান্য দেয়। বাগাভী তাঁর সঙ্গে ইয়াকূবের নাম বলেন, কুরতুবী বলেন নাসর ইবন আসিমের নাম। এই কিরাআতে কর্তা হলো ৮৭:১১ আয়াতের চরম হতভাগা। বাগাভী তাকে একটি শ্রেণি ধরেন: শব্দটি একবচন, কিন্তু অর্থ বহুবচন। তাবারী তোমরা পাঠই রাখেন, কারণ কারীগণ এতে একমত। তিনি ও কুরতুবী দুজনেই উবাই-এর কিরাআত উল্লেখ করেন: বাল আনতুম তু'সিরূন, বরং তোমরাই প্রাধান্য দাও।"
          },
          {
            "en": "Within the reading you, the address varies. At-Tabari makes it general: you, O people, prefer the adornment of this world to the Hereafter. Al-Qurtubi offers: you, O Muslims, prefer gathering more of this world to gathering more reward. Qatadah, in at-Tabari, says people chose the immediate, except whom Allah protected. Where the verse is read of the wretched, it describes whom it describes and licenses nothing against any living person or community; read as you, it turns the charge on every listener.",
            "bn": "তোমরা পাঠের ভেতরেও সম্বোধন নিয়ে ভিন্নতা আছে। তাবারী একে সবার জন্য ধরেন: হে মানুষ, তোমরা আখিরাতের চেয়ে দুনিয়ার জীবনের সাজসজ্জাকে বেশি পছন্দ করো। কুরতুবীর ব্যাখ্যা: হে মুসলিমগণ, তোমরা বেশি সওয়াব জমানোর চেয়ে বেশি দুনিয়া জমানোকে প্রাধান্য দাও। তাবারীর বর্ণনায় কাতাদা বলেন, মানুষ নগদটাই বেছে নিয়েছে, আল্লাহ যাকে রক্ষা করেছেন সে ছাড়া। আয়াতটি হতভাগাদের সম্পর্কে পড়া হলে তা কেবল তাদেরই বর্ণনা, যাদের কথা আয়াত বলছে। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। আর তোমরা পাঠে অভিযোগটা ফেরে প্রত্যেক শ্রোতার দিকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Ibn Mas'ud Stops Reciting",
          "bn": "তিলাওয়াত থামালেন ইবন মাসউদ"
        },
        "p": [
          {
            "en": "At-Tabari and Ibn Kathir carry a report from Arfajah ath-Thaqafi. He asked Ibn Mas'ud (RA) to recite Sabbih isma rabbika al-a'la. When he reached rather, you prefer the life of this world, he stopped, turned to his companions and said: we have preferred this world to the Hereafter. The people fell silent. He went on: we preferred it because we saw its adornment, its women, its food and its drink, while the Hereafter was kept from us; so we chose this immediate thing and left the deferred.",
            "bn": "তাবারী ও ইবন কাসীর আরফাজা সাকাফীর একটি বর্ণনা আনেন। তিনি ইবন মাসউদ (রাঃ)-কে সাব্বিহিসমা রাব্বিকাল আ'লা পড়ে শোনাতে বলেছিলেন। পড়তে পড়তে যখন তিনি পৌঁছালেন, বরং তোমরা দুনিয়ার জীবনকেই প্রাধান্য দাও, তখন থেমে গেলেন। সঙ্গীদের দিকে ফিরে বললেন: আমরা আখিরাতের উপর দুনিয়াকে প্রাধান্য দিয়েছি। সবাই চুপ করে রইল। তিনি আবার বললেন: আমরা দুনিয়াকে প্রাধান্য দিয়েছি, কারণ আমরা তার সাজ দেখেছি, তার নারী, খাবার আর পানীয় দেখেছি। আখিরাত আমাদের চোখের আড়ালে রাখা হয়েছে। তাই আমরা নগদটা বেছে নিয়েছি, বাকিটা ছেড়ে দিয়েছি।"
          },
          {
            "en": "Ibn Kathir reads the confession two ways: as humility and self-effacement on Ibn Mas'ud's part, or as a statement about humankind as such. Al-Qurtubi adds a scene from Anas: on a journey Abu Musa asked him what held people back. Anas said: the world, Satan and desires. Abu Musa said: no, the world was brought near and the Hereafter hidden; by Allah, had they seen it, they would not have swerved.",
            "bn": "ইবন কাসীর এই স্বীকারোক্তির দুটি ব্যাখ্যা দেন: হয় এটা ইবন মাসউদের বিনয় আর নিজেকে ছোট করে দেখা, নয়তো সাধারণভাবে মানুষের স্বভাবের বর্ণনা। কুরতুবী আনাসের একটি দৃশ্য যোগ করেন। এক সফরে আবু মূসা তাঁকে জিজ্ঞেস করলেন, মানুষকে কীসে পিছিয়ে রেখেছে? আনাস বললেন: দুনিয়া, শয়তান আর কামনা। আবু মূসা বললেন: না, দুনিয়াকে সামনে এনে দেওয়া হয়েছে আর আখিরাতকে আড়াল করা হয়েছে। আল্লাহর কসম, তারা যদি তা চোখে দেখত, তবে বিচ্যুত হতো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Better, and Longer Lasting",
          "bn": "উত্তম, আর অধিক স্থায়ী"
        },
        "p": [
          {
            "en": "Wal-akhiratu khayrun wa abqa: while the Hereafter is better and more lasting. At-Tabari takes the two words separately, better in good and more lasting in duration, because this life passes away and the Hereafter remains, never running out. Al-Qurtubi takes the Hereafter here as the abode, that is Paradise. Ibn Kathir makes it the reward of Allah in the final abode, and asks how anyone of sense could prefer what perishes to what remains, or care for what will soon leave him.",
            "bn": "ওয়াল আখিরাতু খাইরুন ওয়া আবকা: অথচ আখিরাত উত্তম ও অধিক স্থায়ী। তাবারী শব্দ দুটি আলাদা করে পড়েন: কল্যাণে উত্তম, টিকে থাকায় স্থায়ী। কারণ দুনিয়ার জীবন ফুরিয়ে যায়, আর আখিরাত থেকে যায়, তার শেষ নেই। কুরতুবী এখানে আখিরাত বলতে বোঝেন পরকালের ঘর, অর্থাৎ জান্নাত। ইবন কাসীরের মতে এটা আখিরাতে আল্লাহর দেওয়া সওয়াব। তিনি প্রশ্ন করেন, বুদ্ধিমান মানুষ কীভাবে যা টিকবে তার বদলে যা ফুরিয়ে যাবে তাকে বেছে নেয়? যা দুদিন পরেই হাতছাড়া হবে, তা নিয়ে কীভাবে মাথা ঘামায়?"
          },
          {
            "en": "As-Sa'di says the Hereafter is better in every quality that is sought, and more lasting because it is the abode of permanence and purity. The sensible believer, he says, does not choose the worse over the better, or sell an hour's pleasure for endless grief, and love of this world and preferring it to the Hereafter is the head of every sin.",
            "bn": "সা'দী বলেন, মানুষ যা কিছু চায়, তার প্রতিটি গুণে আখিরাত উত্তম। আর তা অধিক স্থায়ী, কারণ সেটা চিরকাল থাকার ঘর, নির্মলতার ঘর। তাঁর ভাষায়, বুদ্ধিমান মুমিন ভালোর বদলে খারাপকে বেছে নেয় না, এক ঘণ্টার মজার বিনিময়ে চিরকালের দুঃখ কেনে না। দুনিয়ার মহব্বত আর আখিরাতের উপর তাকে প্রাধান্য দেওয়াই সব গুনাহের মূল।"
          },
          {
            "en": "Al-Qurtubi attaches a saying of the Prophet ﷺ, and Muslim records it in his Sahih (2858) from al-Mustawrid ibn Shaddad: By Allah, this world beside the Hereafter is only like one of you putting this finger of his into the sea; let him see what it brings back. Al-Qurtubi also gives Malik ibn Dinar's reckoning: were this world perishing gold and the Hereafter lasting pottery, the lasting pottery should be preferred. How then, when the Hereafter is lasting gold and this world perishing pottery?",
            "bn": "কুরতুবী এখানে নবী ﷺ-এর একটি বাণী জুড়ে দেন। মুসলিম তাঁর সহীহ গ্রন্থে (২৮৫৮) মুসতাওরিদ ইবন শাদ্দাদ থেকে তা বর্ণনা করেছেন: আল্লাহর কসম, আখিরাতের তুলনায় দুনিয়া এমনই, যেমন তোমাদের একজন তার এই আঙুলটি সমুদ্রে ডোবাল। সে দেখুক, আঙুল কী নিয়ে ফিরে আসে। কুরতুবী মালিক ইবন দীনারের হিসাবটিও উল্লেখ করেন: দুনিয়া যদি হতো ফুরিয়ে যাওয়া সোনা আর আখিরাত টিকে থাকা মাটির পাত্র, তবু টিকে থাকা মাটির পাত্রকেই বেছে নেওয়া উচিত হতো। তাহলে কেমন হয়, যখন আখিরাত টিকে থাকা সোনা আর দুনিয়া ফুরিয়ে যাওয়া মাটির পাত্র?"
          }
        ]
      },
      {
        "h": {
          "en": "Already in the First Scrolls",
          "bn": "আগের সহীফাতেই লেখা"
        },
        "p": [
          {
            "en": "Then 87:18 and 87:19: this is in the former scriptures, the scriptures of Ibrahim (AS) and Musa (AS). Ibn Kathir reports that at-Tabari took this to point back to the four verses, and he calls that view good and strong, adding that similar was reported from Qatadah and Ibn Zayd. Abu al-'Aliyah said the story of this surah is in the earlier scriptures. Ibn Kathir compares 53:36 to 53:42.",
            "bn": "তারপর ৮৭:১৮ ও ৮৭:১৯: নিশ্চয়ই এ কথা আছে আগের সহীফাগুলোতে, ইবরাহীম (আঃ) ও মূসা (আঃ)-এর সহীফায়। ইবন কাসীর জানান, তাবারীর মতে এ কথা বলতে বোঝানো হয়েছে ঠিক আগের চারটি আয়াত। ইবন কাসীর এ মতকে ভালো ও মজবুত বলেন, আর জানান, কাতাদা ও ইবন যায়দ থেকেও এমন বর্ণনা আছে। আবুল আলিয়া বলেন, এই সূরার কাহিনি আগের সহীফাগুলোতে আছে। ইবন কাসীর এর সঙ্গে তুলনা করেন ৫৩:৩৬ থেকে ৫৩:৪২ আয়াতের।"
          },
          {
            "en": "None of the commentaries fetched for these verses attaches the reports of the Prophet's ﷺ love for this surah or of his reciting it at the Eid and Friday prayers, so this article leaves them aside. What the verses leave with a reader is a sequence to check a day against: what has been washed out of the heart and the purse, whether the name of the Lord was remembered and the prayer kept at its time, and which way the hand reached when the immediate and the lasting were set side by side.",
            "bn": "এই আয়াতগুলোর জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এ সূরার প্রতি নবী ﷺ-এর ভালোবাসা কিংবা ঈদ ও জুমার নামাযে তা পড়ার বর্ণনাগুলো এখানে জুড়ে দেয়নি। তাই এ লেখা সেগুলো বাদ রাখল। আয়াতগুলো পাঠকের হাতে যা রেখে যায়, তা দিয়ে নিজের দিনটা মেপে দেখা যায়। অন্তর আর টাকার থলে থেকে কী ধুয়ে ফেলা হলো? রবের নাম কি স্মরণ হলো, নামায কি ঠিক সময়ে পড়া হলো? আর নগদ ও স্থায়ী যখন পাশাপাশি রাখা ছিল, হাতটা গেল কোন দিকে?"
          }
        ]
      }
    ]
  }
});
