/**
 * Tadabbur long-form articles — surah 96.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "96:1": {
    "sections": [
      {
        "h": {
          "en": "The Surah That Came First",
          "bn": "সবার আগে নামা সূরা"
        },
        "p": [
          {
            "en": "Iqra' bismi rabbika-lladhi khalaq: read, in the name of your Lord who created. Al-Qurtubi opens the surah by saying that it is Makkan by consensus, and that it was the first of the Qur'an to come down in the view of Abu Musa and A'isha (RA), and in the view of most of the commentators. He then pictures the scene in a single line: Jibril brought it down to the Prophet ﷺ while he was standing on Hira', and taught him five verses of this surah.",
            "bn": "ইকরা বিসমি রব্বিকাল্লাযী খালাক: পাঠ করো তোমার রবের নামে, যিনি সৃষ্টি করেছেন। কুরতুবী সূরাটির আলোচনা শুরু করেন এ কথা দিয়ে যে, সবার ঐকমত্যে এটি মাক্কী সূরা। আবূ মূসা ও আয়েশা (রাঃ)-এর মতে, আর অধিকাংশ মুফাসসিরের মতেও, কুরআনের সবার আগে নাযিল হওয়া অংশ এটিই। তারপর এক বাক্যে তিনি দৃশ্যটা এঁকে দেন। নবী ﷺ হেরায় দাঁড়িয়ে ছিলেন, তখন জিবরীল এ সূরা নিয়ে নামলেন এবং তাঁকে এর পাঁচটি আয়াত শিখিয়ে দিলেন।"
          },
          {
            "en": "Al-Baghawi states the same majority position and marks its boundary: most commentators hold that this surah was the first revealed, and that the first to come down were five verses from its opening up to the words ma lam ya'lam, what he knew not, in 96:5. Ibn Kathir heads his commentary with the plain claim that the surah is the first thing revealed of the Qur'an, and he closes it with a line of praise: these verses were the first mercy with which Allah showed mercy to His servants, and the first blessing He bestowed on them.",
            "bn": "বাগাভীও সংখ্যাগরিষ্ঠের এই মতই বলেন, সঙ্গে সীমাটাও চিহ্নিত করে দেন। অধিকাংশ মুফাসসিরের মতে এ সূরাই প্রথম নাযিল হয়েছে, আর প্রথমে নেমেছিল এর শুরুর পাঁচ আয়াত, ৯৬:৫-এর মা লাম ইয়া'লাম, অর্থাৎ যা সে জানত না, পর্যন্ত। ইবন কাসীর তাঁর তাফসীরের শিরোনামেই সোজা কথা বলে দেন: কুরআনের সবার আগে নাযিল হওয়া অংশ এই সূরা। শেষ করেন প্রশংসার এক বাক্যে। এই আয়াতগুলোই প্রথম রহমত, যা দিয়ে আল্লাহ তাঁর বান্দাদের প্রতি দয়া করেছেন, আর প্রথম নিয়ামত, যা তিনি তাদের দান করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What A'isha Narrated of Hira'",
          "bn": "হেরার ঘটনা, আয়েশা (রাঃ)-এর মুখে"
        },
        "p": [
          {
            "en": "In al-Bukhari's wording (no. 3), A'isha (RA) said: The first of revelation with which the Messenger of Allah ﷺ was begun was the true dream in sleep; he saw no dream but it came like the break of dawn. Then seclusion was made beloved to him. He would withdraw to the cave of Hira' and devote himself there, that is, worship, for a number of nights before returning to his family, taking provision for it; then he would go back to Khadija and take provision for the like, until the truth came to him while he was in the cave of Hira'.",
            "bn": "সহীহ বুখারীর শব্দে (নং ৩) আয়েশা (রাঃ) বলেন: রাসূলুল্লাহ ﷺ-এর কাছে ওহীর সূচনা হয়েছিল ঘুমের মধ্যে সত্য স্বপ্ন দিয়ে। যে স্বপ্নই তিনি দেখতেন, তা ভোরের আলোর মতো স্পষ্ট হয়ে ফলে যেত। তারপর নির্জনতা তাঁর প্রিয় হয়ে উঠল। পরিবারের কাছে ফেরার আগে কয়েক রাত তিনি হেরা গুহায় একা কাটাতেন, সেখানে তাহান্নুস করতেন, মানে ইবাদত। এর জন্য সঙ্গে খাবার নিয়ে যেতেন। তারপর খাদিজার কাছে ফিরে আবার তেমন কদিনের খাবার নিয়ে যেতেন। এভাবেই চলছিল, শেষে হেরা গুহায় থাকা অবস্থায় তাঁর কাছে সত্য এসে পৌঁছাল।"
          },
          {
            "en": "The angel came to him and said: Read. He said: I am no reader. He said: He took me and pressed me until it strained me to the utmost, then released me and said: Read. I said: I am no reader. He took me and pressed me a second time until it strained me to the utmost, then released me and said: Read. I said: I am no reader. He took me and pressed me a third time, then released me and said: Read in the name of your Lord who created; created man from a clinging thing; read, and your Lord is the Most Generous.",
            "bn": "ফেরেশতা এসে বললেন: পড়ো। তিনি বললেন: আমি তো পড়তে জানি না। তিনি বলেন: তখন ফেরেশতা আমাকে ধরে এমন চাপ দিলেন যে আমার সহ্যের শেষ সীমা এসে গেল। তারপর ছেড়ে দিয়ে বললেন: পড়ো। আমি বললাম: আমি তো পড়তে জানি না। দ্বিতীয়বার তিনি আমাকে ধরে চাপ দিলেন, সহ্যের শেষ সীমা পর্যন্ত। তারপর ছেড়ে দিয়ে বললেন: পড়ো। আমি বললাম: আমি তো পড়তে জানি না। তৃতীয়বার তিনি আমাকে ধরে চাপ দিলেন, তারপর ছেড়ে দিয়ে বললেন: পড়ো তোমার রবের নামে, যিনি সৃষ্টি করেছেন। সৃষ্টি করেছেন মানুষকে আলাক থেকে। পড়ো, আর তোমার রব মহাদয়ালু।"
          },
          {
            "en": "The Messenger of Allah ﷺ returned with it, his heart trembling, went in to Khadija bint Khuwaylid (RA) and said: Wrap me, wrap me. They wrapped him until the fear left him. The hadith runs on to Khadija's answer and to her cousin Waraqa ibn Nawfal, and al-Bukhari's inclusion of it in his Sahih is its grading. His wording stops at 96:3; the version Ibn Kathir gives from Imam Ahmad, and al-Baghawi's second route, run on to what he knew not. Al-Baghawi cites it with al-Bukhari's own chain, and Ibn Kathir notes that it is in the two Sahihs by way of az-Zuhri.",
            "bn": "রাসূলুল্লাহ ﷺ আয়াতগুলো নিয়ে ফিরলেন, তাঁর হৃদয় তখন কাঁপছিল। খাদিজা বিনতে খুওয়াইলিদ (রাঃ)-এর কাছে গিয়ে বললেন: আমাকে চাদরে ঢেকে দাও, ঢেকে দাও। তাঁরা তাঁকে ঢেকে রাখলেন, শেষে ভয় কেটে গেল। হাদীসটি এরপর খাদিজা (রাঃ)-এর জবাব আর তাঁর চাচাতো ভাই ওয়ারাকা ইবন নাওফালের প্রসঙ্গে যায়। বুখারী একে নিজের সহীহ গ্রন্থে রেখেছেন, এটাই এর মান। তাঁর শব্দে বর্ণনা থেমেছে ৯৬:৩-এ। ইবন কাসীর ইমাম আহমাদ থেকে যে বর্ণনা আনেন, আর বাগাভীর দ্বিতীয় সূত্রের বর্ণনা, দুটোই যা সে জানত না পর্যন্ত পৌঁছায়। বাগাভী হাদীসটি বুখারীর নিজের সনদেই উদ্ধৃত করেন। ইবন কাসীর জানান, যুহরীর সূত্রে এটি দুই সহীহতেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Statement, Not a Refusal",
          "bn": "অস্বীকার নয়, সোজা সত্য কথা"
        },
        "p": [
          {
            "en": "Ma ana bi-qari' is a statement of fact: I am no reader. Ma'arif al-Qur'an explains it from the situation. The Prophet ﷺ understood the angel to be directing him to read a written document, and since he could not read or write, he answered accordingly. As-Sa'di places the moment at the very outset of prophethood, when he did not yet know what the Book was, nor faith. Jibril came with the message and commanded him to read, and kept at him until he read; then Allah sent down iqra' bismi rabbika-lladhi khalaq.",
            "bn": "মা আনা বিকারি একটি তথ্যের কথা: আমি পড়তে জানা মানুষ নই। মাআরিফুল কুরআন পরিস্থিতি থেকেই এর ব্যাখ্যা দেয়। নবী ﷺ ভেবেছিলেন, ফেরেশতা তাঁকে লেখা কোনো কিছু পড়তে বলছেন। তিনি লিখতে-পড়তে জানতেন না, তাই সে অনুযায়ীই জবাব দিয়েছিলেন। সা'দী মুহূর্তটিকে রাখেন নবুওয়াতের একেবারে শুরুতে। তখনো তিনি জানতেন না কিতাব কী, ঈমান কী। জিবরীল রিসালাত নিয়ে এলেন, তাঁকে পড়তে বললেন, আর পড়া না পর্যন্ত লেগে রইলেন। তারপর আল্লাহ নাযিল করলেন: ইকরা বিসমি রব্বিকাল্লাযী খালাক।"
          },
          {
            "en": "Fear followed, and Ma'arif names its cause: the great responsibility being placed on him, and the unusual event of seeing an angel. When he told Khadija (RA) what had happened and said, I feared for myself, her answer in al-Bukhari's wording was: Never, by Allah, Allah will never disgrace you. You keep the ties of kinship, carry the burden of the weak, earn for whoever has nothing, honour the guest, and help people through the calamities that truly befall them. She reasoned from the life he had lived to the care of his Lord.",
            "bn": "এরপর এল ভয়। মাআরিফ এর কারণ বলে দেয়: তাঁর কাঁধে যে বিশাল দায়িত্ব আসছিল, আর ফেরেশতা দেখার মতো অস্বাভাবিক ঘটনা। খাদিজা (রাঃ)-কে সব খুলে বলে তিনি বললেন, আমি নিজেকে নিয়ে ভয় পেয়েছি। বুখারীর শব্দে খাদিজা (রাঃ)-এর জবাব ছিল: কখনো না, আল্লাহর কসম, আল্লাহ আপনাকে কখনো লাঞ্ছিত করবেন না। আপনি আত্মীয়তার সম্পর্ক রক্ষা করেন, দুর্বলের বোঝা বহন করেন, নিঃস্বের জন্য উপার্জন করেন, মেহমানের আপ্যায়ন করেন, আর সত্যিকারের বিপদে মানুষের পাশে দাঁড়ান। তাঁর জীবন কেমন কেটেছে, সেখান থেকেই খাদিজা (রাঃ) রবের যত্নের কথা টেনে আনলেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Other Reports of the First",
          "bn": "প্রথম নাযিল নিয়ে অন্য বর্ণনা"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not leave the majority view standing alone; he lists the other reports by name. It is said that the first revealed was Ya ayyuha-l-muddaththir, 74:1, the word of Jabir ibn 'Abd Allah. It is said that the Fatiha came first, the word of Abu Maysara al-Hamdani. And 'Ali ibn Abi Talib (RA) said that the first revealed was Qul ta'alaw atlu ma harrama rabbukum 'alaykum, say: come, I will recite what your Lord has forbidden you, in 6:151. Having listed them, al-Qurtubi gives his own judgment: the correct view is the first.",
            "bn": "কুরতুবী সংখ্যাগরিষ্ঠের মতটিকে একা দাঁড় করিয়ে রাখেন না। অন্য বর্ণনাগুলোও তিনি নাম ধরে উল্লেখ করেন। বলা হয়, প্রথম নাযিল হয়েছিল ইয়া আইয়ুহাল মুদ্দাসসির, ৭৪:১। এ কথা জাবির ইবন আবদুল্লাহর। আরও বলা হয়, সূরা ফাতিহা প্রথম এসেছিল। এ কথা আবূ মায়সারা আল-হামদানীর। আর আলী ইবন আবী তালিব (রাঃ) বলেছেন, প্রথম নাযিল হয়েছিল কুল তাআলাও আতলু মা হাররামা রব্বুকুম আলাইকুম, অর্থাৎ বলো: এসো, তোমাদের রব তোমাদের জন্য যা হারাম করেছেন তা পড়ে শোনাই, ৬:১৫১। সবগুলো তুলে ধরে কুরতুবী নিজের রায় দেন: প্রথম মতটিই সঠিক।"
          },
          {
            "en": "He also records two orderings. From al-Mawardi, that A'isha (RA) narrated this surah was the first revealed, then Nun wa-l-qalam, surah 68, then al-Muddaththir, then ad-Duha. From az-Zuhri, that the first to come down was this surah up to what he knew not; the Prophet ﷺ was grieved, Jibril came to him and said, you are the Prophet of Allah, and he returned to Khadija saying, cover me and pour cold water on me; and then Ya ayyuha-l-muddaththir came down.",
            "bn": "দুটি ক্রমও তিনি লিখে রাখেন। মাওয়ার্দীর সূত্রে: আয়েশা (রাঃ) বর্ণনা করেছেন, এই সূরাই প্রথম নাযিল হয়েছে, তারপর নূন ওয়াল কলাম, অর্থাৎ সূরা ৬৮, তারপর আল-মুদ্দাসসির, তারপর আদ-দুহা। যুহরীর সূত্রে: প্রথম নেমেছিল এ সূরা, যা সে জানত না পর্যন্ত। নবী ﷺ দুঃখ পেলেন। জিবরীল তাঁর কাছে এসে বললেন, আপনি আল্লাহর নবী। তিনি খাদিজার কাছে ফিরে বললেন, আমাকে কম্বলে ঢেকে দাও, আমার গায়ে ঠান্ডা পানি ঢালো। তারপর নাযিল হলো ইয়া আইয়ুহাল মুদ্দাসসির।"
          },
          {
            "en": "Ma'arif al-Qur'an takes the path of reconciliation, drawing on al-Mazhari. After the first five verses of this surah there was a pause in revelation, and when Jibril came again he brought the opening of al-Muddaththir, so that surah may be called the first after the pause. Those who named the Fatiha probably meant the first surah revealed complete, all seven verses at once. These are positions held by named scholars, and the reader can keep them side by side, exactly as al-Qurtubi and Ma'arif lay them out.",
            "bn": "মাআরিফুল কুরআন মাযহারীর সূত্র ধরে মিলিয়ে দেওয়ার পথ নেয়। এ সূরার প্রথম পাঁচ আয়াতের পর ওহী কিছুদিন বন্ধ ছিল। জিবরীল আবার যখন এলেন, নিয়ে এলেন আল-মুদ্দাসসিরের শুরুর অংশ। তাই বিরতির পর প্রথম নাযিল হওয়া সূরা বলা যায় সেটিকে। যাঁরা ফাতিহার কথা বলেছেন, তাঁরা সম্ভবত বুঝিয়েছেন পূর্ণাঙ্গ অবস্থায় প্রথম নাযিল হওয়া সূরা, যার সাতটি আয়াত একসঙ্গে নেমেছিল। এগুলো নির্দিষ্ট আলেমদের মত। কুরতুবী আর মাআরিফ যেভাবে সাজিয়েছেন, পাঠক সেভাবেই এগুলো পাশাপাশি রাখতে পারেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Little Ba' Holds",
          "bn": "ছোট্ট বা অক্ষরের ভেতরে"
        },
        "p": [
          {
            "en": "Bismi rabbika has drawn more grammatical comment than its length suggests. At-Tabari reads it simply: read, O Muhammad, with the mention of your Lord. Al-Qurtubi gives the fuller first reading: read what has been sent down to you of the Qur'an, opening with the name of your Lord, which means saying the basmala at the start of every surah. On this reading the ba' stands in the place of a circumstantial phrase: read, beginning with His name. The Muyassar paraphrases in the same way, muftatihan, opening with the name of your Lord.",
            "bn": "বিসমি রব্বিকা শব্দ দুটো ছোট, কিন্তু ব্যাকরণের আলোচনা টেনেছে অনেক। তাবারী সহজভাবে পড়েন: হে মুহাম্মাদ, তোমার রবের জিকির সহকারে পড়ো। কুরতুবীর প্রথম ব্যাখ্যা আরও খোলা। তোমার প্রতি কুরআনের যা নাযিল হয়েছে তা পড়ো, তোমার রবের নাম দিয়ে শুরু করে। এর মানে প্রতিটি সূরার শুরুতে বিসমিল্লাহ বলা। এ পাঠে বা অক্ষরটি হাল-এর জায়গায় বসেছে, অর্থাৎ অবস্থা বোঝাচ্ছে: তাঁর নাম দিয়ে শুরু করে পড়ো। মুয়াসসারও একইভাবে ব্যাখ্যা করে, মুফতাতিহান, অর্থাৎ তোমার রবের নামে শুরু করে।"
          },
          {
            "en": "Al-Qurtubi then lists the alternatives. Some take the ba' in the sense of 'ala, upon: read upon the name of your Lord, as people say a thing was done in Allah's name or upon Allah's name; on this view the thing to be read is left unstated, read the Qur'an and open it with Allah's name. Others say that the name of your Lord is the Qur'an itself and the ba' is extra, as in tunbitu bi-d-duhn in 23:20, and as in a line of verse where women who do not read with the surahs means women who do not read the surahs.",
            "bn": "তারপর কুরতুবী বিকল্প ব্যাখ্যাগুলো আনেন। কেউ বা অক্ষরটিকে আলা অর্থে নেন: তোমার রবের নামের উপর পড়ো। যেমন বলা হয়, অমুক কাজ আল্লাহর নামে করা হয়েছে, বা আল্লাহর নামের উপর। এ মতে কী পড়তে হবে তা উহ্য: কুরআন পড়ো, আর আল্লাহর নামে শুরু করো। আরেক দলের মতে, তোমার রবের নাম মানে খোদ কুরআন, আর বা অক্ষরটি অতিরিক্ত। যেমন ২৩:২০-এ তুমবিতু বিদ্দুহন। যেমন এক কবিতার পঙক্তিতে আছে, তারা সূরাগুলো দিয়ে পড়ে না, যার মানে তারা সূরাগুলো পড়ে না।"
          },
          {
            "en": "Al-Baghawi credits the extra-ba' reading to Abu 'Ubayda: its sense is read the name of your Lord, that is, mention His name. Both he and al-Qurtubi then arrive at the practical meaning: the Prophet ﷺ was commanded to begin reading with the name of Allah, and al-Baghawi adds the word ta'diban, as a discipline taught to him. However the grammar is parsed, most of these readings meet in one practice. His name comes first, and the reading follows.",
            "bn": "অতিরিক্ত বা-এর ব্যাখ্যাটি বাগাভী আবূ উবাইদার নামে উল্লেখ করেন। তাঁর মতে অর্থ দাঁড়ায়: তোমার রবের নাম পড়ো, অর্থাৎ তাঁর নাম উচ্চারণ করো। এরপর বাগাভী ও কুরতুবী দুজনেই কাজের অর্থে এসে পৌঁছান। নবী ﷺ-কে আদেশ দেওয়া হয়েছিল আল্লাহর নাম দিয়ে পড়া শুরু করতে। বাগাভী এর সঙ্গে জুড়ে দেন তা'দীবান শব্দটি, মানে আদব শেখানোর জন্য। ব্যাকরণ যেভাবেই বিশ্লেষণ হোক, এসব ব্যাখ্যার বেশিরভাগ একটি আমলে এসে মেলে। আগে তাঁর নাম, তারপর পাঠ।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Lord, and Why Creator",
          "bn": "কেন রব, কেন স্রষ্টা"
        },
        "p": [
          {
            "en": "Why this name, and this description? Ma'arif al-Qur'an, citing al-Mazhari, reads the word ismi as an answer to the cave: the Prophet ﷺ might be unlettered for the present, but Allah had the power to grant him the highest level of knowledge and the most eloquent speech. Of Allah's many names, Ma'arif adds, rabb was probably chosen because it carries the sense of nurturing him through every stage of his growth until he is complete. The Lord who raises him can make him read, unlettered as he is.",
            "bn": "কেন এই নাম, কেন এই গুণ? মাআরিফুল কুরআন মাযহারীর বরাতে ইসমি শব্দটিকে গুহার ঘটনার জবাব হিসেবে পড়ে। নবী ﷺ এ মুহূর্তে উম্মী, লেখাপড়া জানেন না। কিন্তু আল্লাহ তাঁকে জ্ঞানের সর্বোচ্চ স্তর আর সবচেয়ে অলংকারপূর্ণ বাণী দান করতে সক্ষম। মাআরিফ আরও বলে, আল্লাহর অনেক সুন্দর নামের মধ্যে রব নামটি সম্ভবত এজন্য বেছে নেওয়া হয়েছে যে এতে লালন-পালনের অর্থ আছে। জীবনের প্রতিটি ধাপে তিনি নবীকে গড়ে তোলেন, পূর্ণতায় না পৌঁছানো পর্যন্ত। যে রব তাঁকে লালন করেন, উম্মী হলেও তিনি তাঁকে পড়াতে পারেন।"
          },
          {
            "en": "Then alladhi khalaq. Ma'arif suggests that creation is named because existence is the first of Allah's favours, drawing beings out of non-existence, and every other favour follows from it. The verb is transitive yet has no object, which Ma'arif takes to mean it is used absolutely: He created the whole universe and everything in it. Al-Baghawi reports from al-Kalbi that it means the creatures. As-Sa'di says the verse names creation in general and the next verse singles out man, while the Muyassar describes Him as alone in creating.",
            "bn": "এরপর আল্লাযী খালাক। মাআরিফের মতে সৃষ্টির কথা আনা হয়েছে, কারণ অস্তিত্বই আল্লাহর প্রথম অনুগ্রহ। তিনি সবকিছুকে অনস্তিত্ব থেকে অস্তিত্বে এনেছেন, আর বাকি সব অনুগ্রহ এর পরে আসে। ক্রিয়াটি সকর্মক, অথচ এর কোনো কর্ম উল্লেখ নেই। মাআরিফ এ থেকে বোঝে, এটি শর্তহীনভাবে এসেছে: তিনি গোটা বিশ্বজগৎ আর এর ভেতরের সবকিছু সৃষ্টি করেছেন। বাগাভী কালবী থেকে বর্ণনা করেন, এর মানে সৃষ্টিকুল। সা'দী বলেন, এ আয়াত সৃষ্টির কথা বলে সাধারণভাবে, আর পরের আয়াত আলাদা করে মানুষকে। মুয়াসসার তাঁকে বলে সৃষ্টিতে একক।"
          }
        ]
      },
      {
        "h": {
          "en": "From Clinging Thing to Pen",
          "bn": "আলাক থেকে কলম পর্যন্ত"
        },
        "p": [
          {
            "en": "The passage that came down that night continues: created man from 'alaq; read, and your Lord is the Most Generous, who taught by the pen, taught man what he knew not. The Muyassar glosses 'alaq as a piece of thick red blood, al-Akram as abundant in goodness and wide in generosity, and the teaching by the pen as His teaching His creation to write. He taught man what he did not know, the Muyassar says, and moved him from the darkness of ignorance to the light of knowledge.",
            "bn": "সে রাতে নাযিল হওয়া অংশ এগিয়ে চলে: সৃষ্টি করেছেন মানুষকে আলাক থেকে। পড়ো, আর তোমার রব মহাদয়ালু, যিনি কলম দিয়ে শিখিয়েছেন, মানুষকে শিখিয়েছেন যা সে জানত না। মুয়াসসার আলাকের অর্থ করে গাঢ় লাল রক্তের টুকরা। আল-আকরাম মানে যাঁর দয়া অঢেল আর দান প্রশস্ত। কলম দিয়ে শেখানো মানে, তিনি তাঁর সৃষ্টিকে লিখতে শিখিয়েছেন। মুয়াসসার বলে, মানুষ যা জানত না তিনি তা শিখিয়েছেন, আর তাকে অজ্ঞতার অন্ধকার থেকে জ্ঞানের আলোয় নিয়ে এসেছেন।"
          },
          {
            "en": "Ibn Kathir draws the lesson. These verses tell of the beginning of man's creation from a clot, and that out of His generosity Allah taught man what he did not know; by knowledge He raised and honoured him, and it is the distinction by which Adam (AS), the father of humanity, was preferred over the angels. Knowledge, he adds, lives in the mind, on the tongue, and in writing; the written kind presupposes the other two, and not the reverse. That, he says, is why the verses name the pen.",
            "bn": "ইবন কাসীর এখান থেকে শিক্ষাটা বের করে আনেন। এই আয়াতগুলো জানায়, মানুষের সৃষ্টির শুরু জমাট রক্ত থেকে, আর আল্লাহ নিজের দয়ায় মানুষকে শিখিয়েছেন যা সে জানত না। জ্ঞান দিয়েই তিনি তাকে উঁচু করেছেন, সম্মান দিয়েছেন। মানবজাতির পিতা আদম (আঃ)-কে ফেরেশতাদের উপর এই জ্ঞান দিয়েই শ্রেষ্ঠত্ব দেওয়া হয়েছিল। তিনি আরও বলেন, জ্ঞান থাকে কখনো মনে, কখনো জিহ্বায়, কখনো লেখায়। লেখার জ্ঞানের জন্য বাকি দুটি লাগে, কিন্তু উল্টোটা নয়। তাঁর মতে এ কারণেই আয়াতে কলমের কথা এসেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Beginning Where He Began",
          "bn": "যেভাবে শুরু, সেভাবেই শুরু"
        },
        "p": [
          {
            "en": "The surah does not stay with the pen. In 96:6 and 96:7 it warns that man oversteps when he sees himself as self-sufficient, and later it pictures a man who forbids a servant from praying, closing in 96:19 with an order not to obey him, but to prostrate and draw near. That passage describes what the text describes and licenses nothing against any living person or community. Its answer is turned inward: the servant's own prostration.",
            "bn": "সূরাটি কলমের কথায় থেমে থাকে না। ৯৬:৬ ও ৯৬:৭ সতর্ক করে, মানুষ নিজেকে অভাবমুক্ত মনে করলেই সীমা ছাড়িয়ে যায়। পরে সূরাটি এমন এক লোকের ছবি আঁকে, যে আল্লাহর এক বান্দাকে নামায পড়তে বাধা দেয়। শেষে ৯৬:১৯ আদেশ দেয়, তার কথা মেনো না, বরং সিজদা করো, কাছে এসো। এ অংশ কেবল সেটুকুই বর্ণনা করে যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এটি দেয় না। এর জবাব ভেতরের দিকে ফেরানো: বান্দার নিজের সিজদা।"
          },
          {
            "en": "The first word, then, came with its manner attached. The practical reading of bismi rabbika, in al-Qurtubi and al-Baghawi alike, is that reading begins with Allah's name, and al-Qurtubi applies it to the basmala at the head of every surah. Whoever opens a lesson, a page or a recitation with His name repeats in small what happened at Hira': a servant who did not read was taught by his Lord, the Most Generous, who taught by the pen.",
            "bn": "প্রথম শব্দটি তাই এসেছিল তার আদবসহ। কুরতুবী ও বাগাভী দুজনের কাছেই বিসমি রব্বিকার কাজের অর্থ হলো, পড়া শুরু হবে আল্লাহর নামে। কুরতুবী একে প্রতিটি সূরার শুরুর বিসমিল্লাহর সঙ্গে মিলিয়েছেন। কেউ যখন পাঠ, পাতা বা তিলাওয়াত শুরু করেন তাঁর নাম নিয়ে, তিনি ছোট পরিসরে হেরার ঘটনারই পুনরাবৃত্তি করেন। সেখানে যে বান্দা পড়তে জানতেন না, তাঁকে শিখিয়েছিলেন তাঁর রব, সেই মহাদয়ালু, যিনি কলম দিয়ে শিখিয়েছেন।"
          }
        ]
      }
    ]
  },
  "96:7": {
    "sections": [
      {
        "h": {
          "en": "A Reason in Three Words",
          "bn": "তিন শব্দে একটি কারণ"
        },
        "p": [
          {
            "en": "The verse is three Arabic words, an ra'ahu istaghna, and it cannot stand on its own. It hangs on the verse before it, 96:6: kalla, inna al-insana la-yatgha, no indeed, man transgresses. This verse supplies the reason, because he sees himself self-sufficient, and 96:8 answers at once: to your Lord is the return. The three read as one movement, a charge, its cause and the reply to it. This article stays with the middle verse and names the other two only as its setting.",
            "bn": "আয়াতটি আরবিতে মাত্র তিনটি শব্দ: আন রাআহুস তাগনা। একা এটি দাঁড়াতে পারে না, ঝুলে থাকে আগের আয়াতের উপর। ৯৬:৬ বলেছে, কাল্লা ইন্নাল ইনসানা লা-ইয়াতগা: না, মানুষ অবশ্যই সীমালঙ্ঘন করে। এ আয়াত দেয় তার কারণ: কারণ সে নিজেকে অভাবমুক্ত মনে করে। আর ৯৬:৮ সঙ্গে সঙ্গে জবাব দেয়: তোমার রবের কাছেই ফিরে যেতে হবে। তিনটি আয়াত মিলে একটিই চলন। অভিযোগ, তার কারণ, তারপর জবাব। এ লেখা থাকবে মাঝের আয়াতটির সঙ্গে, বাকি দুটি আসবে শুধু প্রেক্ষাপট হিসেবে।"
          },
          {
            "en": "The placement matters. The surah's first verses spoke of a Lord who created man from a clinging substance and taught him by the pen what he did not know. At-Tabari, commenting on the kalla of 96:6, reads it against exactly that background. This is not how man ought to be, he says: that his Lord should bless him by fashioning his creation and teaching him what he did not know, and then he disbelieves in the Lord who did this for him and transgresses against Him, an ra'ahu istaghna.",
            "bn": "আয়াতটি কোথায় বসেছে, সেটা গুরুত্বপূর্ণ। সূরার শুরুর আয়াতগুলো বলেছে এমন এক রবের কথা, যিনি মানুষকে সৃষ্টি করেছেন লেগে থাকা এক পিণ্ড থেকে, আর কলম দিয়ে শিখিয়েছেন যা সে জানত না। ৯৬:৬-এর কাল্লা শব্দের ব্যাখ্যায় তাবারী ঠিক এই পটভূমিতেই কথাটা পড়েন। তিনি বলেন, মানুষের এমন হওয়া সাজে না। তার রব তাকে সুন্দর গড়ন দিয়ে আর অজানা জিনিস শিখিয়ে অনুগ্রহ করলেন, অথচ সে সেই রবকেই অস্বীকার করে, তাঁর বিরুদ্ধেই সীমা ছাড়ায়, আন রাআহুস তাগনা।"
          }
        ]
      },
      {
        "h": {
          "en": "Because He Sees, or When",
          "bn": "কারণ, নাকি যখন"
        },
        "p": [
          {
            "en": "Al-Qurtubi opens with the grammar: an ra'ahu means li-an ra'a nafsahu, because he saw himself. Al-Baghawi says the same in a word, glossing an as li-an, because. Al-Qurtubi adds that the lam has been dropped from the phrase, and gives a parallel from ordinary speech: as one says, you will surely transgress if you see your wealth. On this reading the verse states the cause of the transgression named in 96:6, and the small word an carries the weight of that because.",
            "bn": "কুরতুবী শুরু করেন ব্যাকরণ দিয়ে। আন রাআহু মানে লি-আন রাআ নাফসাহু, অর্থাৎ যেহেতু সে নিজেকে দেখেছে। বাগাভী একই কথা বলেন এক শব্দে: আন মানে লি-আন, কারণ। কুরতুবী আরও জানান, বাক্যটি থেকে লাম অক্ষরটি বাদ পড়েছে। নজির দেন রোজকার কথা থেকে: যেমন বলা হয়, তোমরা নিজেদের সম্পদ দেখলে অবশ্যই সীমা ছাড়াবে। এ পাঠে আয়াতটি ৯৬:৬-এ বলা সীমালঙ্ঘনের কারণ জানায়। ছোট্ট শব্দ আন বহন করে সেই 'কারণ'-এর পুরো ভার।"
          },
          {
            "en": "Others phrase the link as a moment rather than a cause. Ibn Kathir's Arabic comment reads: idha ra'a nafsahu qad istaghna wa kathura maluhu, when he sees himself to have become self-sufficient and his wealth has grown. As-Sa'di also uses idha, when. The Muyassar says that man oversteps the bounds of Allah when wealth makes him insolent. Ma'arif al-Qur'an translates with because; the abridged English Ibn Kathir uses when. The two framings sit close together, and this article records both without choosing between them.",
            "bn": "অন্যরা যোগসূত্রটা বলেন সময় দিয়ে, কারণ দিয়ে নয়। ইবন কাসীরের আরবি ব্যাখ্যা: ইযা রাআ নাফসাহু কাদিস তাগনা ওয়া কাসুরা মালুহু, যখন সে দেখে যে সে অভাবমুক্ত হয়ে গেছে আর তার সম্পদ বেড়েছে। সা'দীও লেখেন ইযা, অর্থাৎ যখন। মুয়াসসার বলে, সম্পদ যখন মানুষকে উদ্ধত করে তোলে, তখন সে আল্লাহর বেঁধে দেওয়া সীমা পেরিয়ে যায়। মাআরিফুল কুরআনের ইংরেজি অনুবাদে আছে 'কারণ', আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজিতে 'যখন'। দুটি ধরন খুব কাছাকাছি। এ লেখা দুটোই উল্লেখ করে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "He Saw Himself",
          "bn": "সে নিজেকে দেখল"
        },
        "p": [
          {
            "en": "Ra'ahu is literally he saw him, and the pronoun turns back on the one who sees. Al-Qurtubi and al-Baghawi both gloss it as ra'a nafsahu, he saw himself. Al-Qurtubi then relays the grammarian al-Farra' on why the verse did not say ra'a nafsahu, as one says qatala nafsahu, he killed himself. Ra'a here, al-Farra' explains, is one of the verbs that take both a noun and a predicate, like zann, supposing, and hisban, reckoning, so it does not stop at a single object.",
            "bn": "রাআহু শব্দের আক্ষরিক অর্থ 'সে তাকে দেখল', আর সর্বনামটি ফিরে যায় যে দেখছে তার দিকেই। কুরতুবী ও বাগাভী দুজনেই এর ব্যাখ্যা দেন রাআ নাফসাহু, সে নিজেকে দেখল। এরপর কুরতুবী ব্যাকরণবিদ ফাররার ব্যাখ্যা আনেন: আয়াতে কেন রাআ নাফসাহু বলা হলো না, যেমন বলা হয় কাতালা নাফসাহু, সে আত্মহত্যা করল? ফাররা বলেন, এখানে রাআ সেই ক্রিয়াগুলোর একটি যার লাগে একটি বিশেষ্য আর একটি বিধেয়। যেমন যান্ন, ধারণা করা, আর হিসবান, গণ্য করা। তাই একটিমাত্র কর্মে এসে এটি থেমে যায় না।"
          },
          {
            "en": "In this class of verbs, al-Farra' goes on, the Arabs drop the word nafs and say ra'aytuni and hasibtuni, I saw myself, I reckoned myself, or mata taraka kharijan, when do you see yourself going out. For the reader, the upshot is that the seeing in this verse is a judgment, not sight with the eyes: he regards himself as needless. The English commentaries carry the same sense in their verbs. Ibn Kathir's abridgement has considers himself, and Ma'arif al-Qur'an has deems himself.",
            "bn": "ফাররা আরও বলেন, এই জাতের ক্রিয়ায় আরবরা নাফস শব্দটা ফেলে দেয়। তারা বলে রাআইতুনী, হাসিবতুনী: আমি নিজেকে দেখলাম, নিজেকে গণ্য করলাম। কিংবা বলে, মাতা তারাকা খারিজান, কখন তুমি নিজেকে বের হতে দেখছ? পাঠকের জন্য এর সারকথা হলো, এ আয়াতের দেখা চোখের দেখা নয়, মনের রায়। সে নিজেকে অভাবহীন বলে গণ্য করে। ইংরেজি তাফসীরগুলোও তাদের ক্রিয়াপদে এই অর্থ ধরে রেখেছে। ইবন কাসীরের সংক্ষিপ্ত সংস্করণে আছে 'নিজেকে গণ্য করে', আর মাআরিফুল কুরআনে আছে 'নিজেকে মনে করে'।"
          },
          {
            "en": "Al-Qurtubi also records a difference in recitation. Mujahid, Humayd, and Qunbul transmitting from Ibn Kathir read ra'ahu with the hamza shortened, without its long vowel. The rest of the readers recite it with the hamza lengthened, as it is printed today, and al-Qurtubi calls that the preferred reading. He records the difference as one of pronunciation and draws no separate meaning from it, so the picture stays the same: a man who looks at himself and concludes that he needs nothing.",
            "bn": "কুরতুবী তিলাওয়াতের একটি পার্থক্যও উল্লেখ করেন। মুজাহিদ, হুমাইদ, আর ইবন কাসীরের সূত্রে কুনবুল রাআহু পড়েছেন হামযা খাটো করে, দীর্ঘ স্বর ছাড়া। বাকি কারীরা পড়েন হামযা টেনে, যেভাবে আজ ছাপা হয়। কুরতুবী এই পাঠকেই অগ্রগণ্য বলেছেন। তিনি পার্থক্যটা লিখেছেন উচ্চারণের পার্থক্য হিসেবে, এ থেকে আলাদা কোনো অর্থ বের করেননি। তাই ছবিটা একই থাকে: এক মানুষ নিজের দিকে তাকায়, আর সিদ্ধান্তে পৌঁছে যায় যে তার কিছুই দরকার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Needless Through What?",
          "bn": "কীসের জোরে অভাবহীন?"
        },
        "p": [
          {
            "en": "Istaghna shares its letters with ghina, the word al-Qurtubi's own example uses for wealth. His first gloss is concrete: istaghna, that is, he became a possessor of wealth and riches, sara dha malin wa tharwa. Ibn Kathir's Arabic adds that his wealth grew, wa kathura maluhu. The Muyassar names the turn in a single verb: when wealth makes him insolent, abtarahu al-ghina. On these readings the means of the self-sufficiency is property, and the danger lies in what it does to the person holding it.",
            "bn": "ইসতাগনা শব্দের অক্ষরগুলো গিনা শব্দেও আছে, আর কুরতুবীর নিজের নজিরে গিনা মানে সম্পদ। তাঁর প্রথম ব্যাখ্যা একেবারে বাস্তব: ইসতাগনা মানে সে সম্পদ ও বিত্তের মালিক হলো, সারা যা মালিন ওয়া সারওয়া। ইবন কাসীরের আরবি ব্যাখ্যায় যোগ হয়েছে, তার সম্পদ বেড়ে গেল, ওয়া কাসুরা মালুহু। মুয়াসসার মোড় ঘোরার মুহূর্তটা ধরে এক ক্রিয়ায়: আবতারাহুল গিনা, সম্পদ তাকে উদ্ধত করে তুলল। এসব পাঠে স্বনির্ভরতার উপকরণ হলো ধনসম্পদ। আর বিপদটা সম্পদ হাতে পাওয়া মানুষটির ভেতরে তা যা ঘটায়, সেখানে।"
          },
          {
            "en": "Al-Qurtubi then gives a second reading, introduced with qila, it is said: he saw himself self-sufficient through his clan, his supporters and his helpers, bil-'ashira wal-ansar wal-a'wan. On this view the needlessness rests not on money but on people at his back. Ma'arif al-Qur'an widens the frame in its own words: so long as man is in need of others he walks straight, but when he thinks that he does not need anyone, he tends towards transgression, wrongdoing, tyranny and oppression.",
            "bn": "এরপর কুরতুবী আরেকটি ব্যাখ্যা আনেন 'কীলা', অর্থাৎ 'বলা হয়' কথাটি দিয়ে। সে নিজেকে অভাবমুক্ত দেখল তার গোত্র, সমর্থক আর সহযোগীদের জোরে, বিল-আশীরাতি ওয়াল-আনসারি ওয়াল-আ'ওয়ান। এ মতে অভাবহীনতার ভিত্তি টাকা নয়, পেছনে দাঁড়ানো মানুষ। মাআরিফুল কুরআন নিজের ভাষায় পরিসরটা আরও বড় করে। যতক্ষণ মানুষ অন্যের মুখাপেক্ষী থাকে, সে সোজা পথে চলে। কিন্তু যখন ভাবে যে তার কাউকে দরকার নেই, তখন সে ঝুঁকে পড়ে সীমালঙ্ঘন, অন্যায়, স্বেচ্ছাচার আর জুলুমের দিকে।"
          },
          {
            "en": "As-Sa'di places the stress on the person rather than the possession. It is man, li-jahlihi wa zulmihi, out of his ignorance and his wrongdoing, who on seeing himself rich transgresses, oversteps and turns haughtily away from guidance, tajabbara 'an al-huda. Whatever the means each commentator names, the verse's own verb keeps the fault in one place. It does not say he became rich and so transgressed. It says ra'ahu, he saw himself so, and the transgression follows the seeing.",
            "bn": "সা'দী জোর দেন সম্পদের উপর নয়, মানুষটির উপর। মানুষ নিজের অজ্ঞতা আর জুলুমের কারণে, লি-জাহলিহী ওয়া যুলমিহী, নিজেকে ধনী দেখলেই সীমা ছাড়ায়, বাড়াবাড়ি করে, আর অহংকারে হিদায়াত থেকে মুখ ফিরিয়ে নেয়, তাজাব্বারা আনিল হুদা। প্রত্যেক মুফাসসির যে উপকরণের কথাই বলুন, আয়াতের নিজের ক্রিয়াপদ দোষটাকে রাখে একটিমাত্র জায়গায়। আয়াত বলে না যে সে ধনী হলো, তাই সীমা ছাড়াল। বলে রাআহু, সে নিজেকে তেমন দেখল। সীমালঙ্ঘন আসে সেই দেখার পরে।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Overstepping Looked Like",
          "bn": "সীমালঙ্ঘনের চেহারা"
        },
        "p": [
          {
            "en": "Al-Baghawi brings two early voices that make the transgression visible. Al-Kalbi says that he rises from one rank to the next in clothing, food and the like. Muqatil says that the verse was revealed about Abu Jahl: whenever he came by wealth he added to his clothes, his mount and his food, and that was his tughyan, his transgression. Both describe a life lifted a level each time the means allowed, and both report what the person did, not a judgment on the means themselves.",
            "bn": "বাগাভী দুজন প্রাচীন ব্যাখ্যাকারের কথা আনেন, যাঁদের কথায় সীমালঙ্ঘন চোখে দেখা যায়। কালবী বলেন, পোশাক, খাবার আর এমন সব জিনিসে সে একটা ধাপ থেকে আরেক ধাপে ওঠে। মুকাতিল বলেন, আয়াতটি নাজিল হয়েছে আবু জাহল সম্পর্কে। যখনই সে সম্পদ পেত, পোশাক, বাহন আর খাবারে বাড়িয়ে দিত। এটাই ছিল তার তুগইয়ান, তার সীমালঙ্ঘন। দুজনেই বর্ণনা দেন এমন জীবনের, যা উপায় হাতে এলেই এক ধাপ উঁচুতে উঠে যায়। দুজনেই বলেন মানুষটি কী করেছে, উপায়গুলো সম্পর্কে কোনো রায় দেন না।"
          },
          {
            "en": "Ibn Kathir's abridged English names the inner state: Allah informs that man is very pleased, most evil, scornful and transgressive when he considers himself self-sufficient and having an abundance of wealth. On the next verse, which this article only names, he says that Allah threatens and admonishes him: He will hold you accountable for your wealth, as to where you obtained it from and how you spent it. The Muyassar, which treats 96:7 and 96:8 together, draws the same line: let every tyrant know that the destination is to Allah.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ভেতরের অবস্থাটার নাম দেয়। আল্লাহ জানাচ্ছেন, মানুষ যখন নিজেকে স্বয়ংসম্পূর্ণ আর প্রচুর সম্পদের মালিক মনে করে, তখন সে হয়ে ওঠে আত্মতুষ্ট, নিকৃষ্ট, অবজ্ঞাপরায়ণ আর সীমালঙ্ঘনকারী। পরের আয়াত, যার শুধু নাম নেয় এ লেখা, সেখানে তিনি বলেন আল্লাহ তাকে হুমকি দেন, সতর্ক করেন: তিনি তোমার সম্পদের হিসাব নেবেন, কোথা থেকে এনেছ আর কীভাবে খরচ করেছ। মুয়াসসার ৯৬:৭ ও ৯৬:৮ একসঙ্গে ব্যাখ্যা করে একই রেখা টানে: প্রত্যেক সীমালঙ্ঘনকারী জেনে রাখুক, শেষ গন্তব্য আল্লাহর কাছেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Mankind, or One Makkan?",
          "bn": "সব মানুষ, নাকি একজন মক্কাবাসী?"
        },
        "p": [
          {
            "en": "Whom does the verse describe? Most of the commentators consulted here keep the subject general. At-Tabari, as-Sa'di and the Muyassar all speak of al-insan, man, and Ibn Kathir's abridgement turns to Abu Jahl only at 96:9, under a heading of its own. Muqatil, as al-Baghawi reports him, says the verse came down about Abu Jahl. Ma'arif al-Qur'an holds the two together: the verse immediately refers to a particular person, Abu Jahl, yet the statement is general and draws man's attention to one of his weaknesses.",
            "bn": "আয়াতটি কার ছবি আঁকে? যেসব তাফসীর আনা হয়েছে, তার বেশিরভাগ বিষয়টাকে সাধারণ রাখে। তাবারী, সা'দী আর মুয়াসসার সবাই বলেন আল-ইনসান, মানুষ। ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আবু জাহলের প্রসঙ্গে যায় কেবল ৯৬:৯-এ এসে, আলাদা শিরোনামে। বাগাভীর বর্ণনায় মুকাতিল বলেন, আয়াতটি নাজিল হয়েছে আবু জাহল সম্পর্কে। মাআরিফুল কুরআন দুটি মতই একসঙ্গে ধরে। আয়াতের তাৎক্ষণিক লক্ষ্য একজন নির্দিষ্ট ব্যক্তি, আবু জাহল। কিন্তু বক্তব্যটা সাধারণ, মানুষের একটি দুর্বলতার দিকে তা সবার দৃষ্টি ফেরায়।"
          },
          {
            "en": "Ibn Kathir also cites a report of Abu Hurayrah, which he notes Muslim recorded, about Abu Jahl's threat against the Prophet ﷺ while he prayed. At its end the narrator says that Allah then revealed the passage from 96:6 to near the surah's close, adding that they did not know whether this was part of Abu Hurayrah's report or something conveyed to him from another source. The quranx page for Muslim 2797 confirms it. It is long and concerns mostly the later verses, so this article names it rather than quote a clipped version.",
            "bn": "ইবন কাসীর আবু হুরায়রা (রাঃ)-এর একটি বর্ণনাও আনেন, আর জানান যে মুসলিমও এটি সংকলন করেছেন। তাতে আছে নবী ﷺ নামাজে থাকা অবস্থায় আবু জাহলের হুমকির কথা। বর্ণনার শেষে বর্ণনাকারী বলেন, তখন আল্লাহ ৯৬:৬ থেকে সূরার প্রায় শেষ পর্যন্ত অংশটি নাজিল করলেন। সঙ্গে এটাও বলেন, তাঁরা জানেন না কথাটা আবু হুরায়রার বর্ণনারই অংশ, নাকি অন্য কোনো সূত্রে তাঁর কাছে পৌঁছেছে। মুসলিম ২৭৯৭-এর কুরআনএক্স পাতায় বর্ণনাটি মিলেছে। কিন্তু এটি দীর্ঘ, আর এর বেশিরভাগ পরের আয়াতগুলো নিয়ে। তাই এ লেখা কাটছাঁট করে উদ্ধৃতি না দিয়ে শুধু উল্লেখ করে।"
          },
          {
            "en": "The narration the sources bring in this passage belongs mainly to 96:9 onward, and nothing here rests on it. What the sources give, then, is a verse about man in general that Muqatil tied to one man of Makkah, and that Ma'arif al-Qur'an reads as both at once. The article does not settle between them; each reading is reported under its own name.",
            "bn": "এই অংশে সূত্রগুলো যে বর্ণনা আনে, তা মূলত ৯৬:৯ ও তার পরের আয়াতের, আর এখানে কিছুই তার উপর দাঁড়িয়ে নেই। সূত্রগুলো যা দেয় তা হলো: সাধারণভাবে মানুষ সম্পর্কে একটি আয়াত, যাকে মুকাতিল মক্কার একজন মানুষের সঙ্গে জুড়েছেন, আর মাআরিফুল কুরআন যাকে দুইভাবেই একসঙ্গে পড়ে। এ লেখা তাদের মাঝে মীমাংসা করে না। প্রতিটি মত তার নিজের নামেই উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Hands No One",
          "bn": "যে অধিকার আয়াত কাউকে দেয় না"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: a human being who, on seeing himself in no need, oversteps. Where the sources connect it with Abu Jahl, they speak of one man in the Prophet's ﷺ own lifetime. The verse licenses nothing against any living person or community. It gives no one a warrant to point at a wealthy neighbour, a powerful family or a class of people and announce that they are the man of 96:7. Judgment belongs to the Lord to whom, as 96:8 says, is the return.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ঠিক ততটুকুই বর্ণনা করে, যতটুকু এর পাঠে আছে: এমন এক মানুষ, যে নিজেকে অভাবহীন দেখে সীমা ছাড়ায়। সূত্রগুলো যেখানে একে আবু জাহলের সঙ্গে জোড়ে, সেখানে কথা নবী ﷺ-এর জীবদ্দশার একজন মানুষকে নিয়ে। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুরই অনুমতি দেয় না। ধনী প্রতিবেশী, প্রভাবশালী পরিবার বা কোনো শ্রেণির মানুষের দিকে আঙুল তুলে 'এরাই ৯৬:৭-এর সেই লোক' বলার অধিকার এটি কাউকে দেয় না। বিচার তো সেই রবের, ৯৬:৮ যেমন বলে, যাঁর কাছেই ফিরে যেতে হবে।"
          },
          {
            "en": "Nor does this article pass a verdict on anyone's wealth or independence. The commentators quoted here describe what happens when the seeing goes wrong. Ma'arif al-Qur'an remarks that this is generally the behaviour of the affluent, of officials and of people with many children, friends or servants; that is its observation, reported as such. The verse's own words fix the fault in one inward act, ra'ahu, he saw himself. That act is open to anyone, with much or with little, and the next section turns to it only as this article's own reading.",
            "bn": "কারও সম্পদ বা স্বাধীনতা নিয়েও এ লেখা কোনো রায় দেয় না। এখানে উদ্ধৃত মুফাসসিররা বর্ণনা করেন, দেখাটা ভুল দিকে গেলে কী ঘটে। মাআরিফুল কুরআন মন্তব্য করে, সাধারণত সচ্ছল লোক, সরকারি কর্মকর্তা, আর যাদের সন্তান, বন্ধু বা চাকর-বাকর বেশি, তাদের আচরণ এমন হয়। এটা মাআরিফের পর্যবেক্ষণ, এখানে সেভাবেই উল্লেখ করা হলো। আয়াতের নিজের শব্দ দোষটাকে বেঁধে রাখে ভেতরের একটিমাত্র কাজে: রাআহু, সে নিজেকে দেখল। বেশি থাকুক বা কম, এ কাজ যে কারও দ্বারা হতে পারে। পরের অংশ এ নিয়ে কথা বলে কেবল এ লেখার নিজস্ব পাঠ হিসেবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning the Mirror Inward",
          "bn": "আয়না ঘুরুক নিজের দিকে"
        },
        "p": [
          {
            "en": "What follows is this article's own reading, not a claim of the commentators. The verse does not ask me whether I am rich. It asks how I see myself once something has been given: a salary, a degree, a following, a family that stands behind me. Al-Qurtubi's two glosses, wealth and supporters, between them cover much of what people lean on. The test, as I read it, is whether that leaning slowly hardens into a belief that I no longer need Him who created me and taught me.",
            "bn": "এর পরের কথাগুলো এ লেখার নিজস্ব পাঠ, মুফাসসিরদের দাবি নয়। আয়াত আমাকে জিজ্ঞেস করে না আমি ধনী কি না। জিজ্ঞেস করে, কিছু হাতে আসার পর আমি নিজেকে কীভাবে দেখি। হতে পারে বেতন, ডিগ্রি, অনুসারী, কিংবা পেছনে দাঁড়ানো পরিবার। কুরতুবীর দুই ব্যাখ্যা, সম্পদ আর সমর্থক, মিলে মানুষ যার উপর ভর দেয় তার অনেকটাই ধরে ফেলে। আমার পাঠে পরীক্ষাটা হলো, সেই ভর দেওয়া কি ধীরে ধীরে এই বিশ্বাসে জমে যাচ্ছে যে, যিনি আমাকে সৃষ্টি করেছেন আর শিখিয়েছেন, তাঁকে আমার আর দরকার নেই?"
          },
          {
            "en": "Still on this article's own reading, two habits seem to guard against that belief. One is to keep asking Allah for the things I could, on paper, manage myself, so that the asking does not shrink as the means grow. The other is to keep the next verse close: to your Lord is the return. Ibn Kathir's gloss on it, that one will be asked where the wealth came from and how it was spent, turns a feeling of independence back into a question that will one day need an answer.",
            "bn": "এটাও এ লেখার নিজস্ব পাঠ: দুটি অভ্যাস সেই বিশ্বাস থেকে আগলে রাখতে পারে বলে মনে হয়। একটি হলো, কাগজে-কলমে যা নিজেই সামলাতে পারি, সেগুলোর জন্যও আল্লাহর কাছে চাইতে থাকা। তাহলে উপায় যত বাড়ুক, চাওয়া ছোট হয়ে আসবে না। দ্বিতীয়টি হলো পরের আয়াতটা কাছে রাখা: তোমার রবের কাছেই ফিরে যেতে হবে। ইবন কাসীর এর ব্যাখ্যায় বলেন, সম্পদ কোথা থেকে এল আর কীভাবে খরচ হলো, সে প্রশ্ন করা হবে। এ কথা স্বনির্ভরতার অনুভূতিকে আবার এমন এক প্রশ্নে ফিরিয়ে দেয়, যার উত্তর একদিন দিতেই হবে।"
          }
        ]
      }
    ]
  },
  "96:19": {
    "sections": [
      {
        "h": {
          "en": "Three Commands at the Close",
          "bn": "শেষ আয়াতে তিন আদেশ"
        },
        "p": [
          {
            "en": "Kalla, la tuti'hu wa-sjud wa-qtarib: no! Do not obey him, and prostrate, and draw near. The verse has 5 Arabic words: kalla; la, the particle of prohibition; tuti'hu, obey him; wa-sjud, and prostrate; wa-qtarib, and draw near. It is the last verse of Surat al-'Alaq, and in the text it carries the sign of prostration, the mark the mushaf sets at the places of sajdah. The surah that opened in 96:1 with the command to read in the name of your Lord closes here with a command to put the forehead down before Him.",
            "bn": "কাল্লা, লা তুতি'হু ওয়াসজুদ ওয়াকতারিব: কক্ষনো না! তার কথা মেনো না, সিজদা করো আর কাছে এসো। আয়াতে আরবি শব্দ ৫টি। কাল্লা; লা, নিষেধের অব্যয়; তুতি'হু, তার আনুগত্য করো; ওয়াসজুদ, আর সিজদা করো; ওয়াকতারিব, আর কাছে এসো। এটি সূরা আলাকের শেষ আয়াত। পাঠে এর গায়ে আছে সিজদার চিহ্ন, মুসহাফে সিজদার জায়গাগুলোতে যে চিহ্ন বসানো থাকে। যে সূরা ৯৬:১-এ শুরু হয়েছিল রবের নামে পড়ার আদেশ দিয়ে, তা এখানে শেষ হচ্ছে তাঁর সামনে কপাল মাটিতে রাখার আদেশে।"
          },
          {
            "en": "The verses before it build a scene. In 96:9 and 96:10 the Qur'an asks about the one who forbids a servant when he prays. Al-Muyassar, on 96:14 to 96:18, says that this forbidder will be seized by the forelock if he does not turn back, that he may summon the people of his gathering, and that the angels of punishment will be called. As-Sa'di marks the turn that 96:19 makes: having described the forbidder, the verse now speaks to the one who was forbidden, and commands him not to listen to that man or yield to his prohibition.",
            "bn": "আগের আয়াতগুলো একটা দৃশ্য গড়ে তোলে। ৯৬:৯ ও ৯৬:১০-এ কুরআন প্রশ্ন তোলে সেই লোককে নিয়ে, যে এক বান্দাকে নামাজ পড়তে বাধা দেয়। মুয়াসসার ৯৬:১৪ থেকে ৯৬:১৮ প্রসঙ্গে বলে, এই বাধাদানকারী ফিরে না এলে তার কপালের চুল ধরে টানা হবে। সে চাইলে তার মজলিসের লোকদের ডাকুক, আর ডাকা হবে আজাবের ফেরেশতাদের। সা'দী দেখিয়ে দেন ৯৬:১৯ কোথায় মোড় নেয়। বাধাদানকারীর অবস্থা বলা শেষ। এবার আয়াত কথা বলছে যাঁকে বাধা দেওয়া হয়েছিল তাঁর সঙ্গে, আর আদেশ দিচ্ছে যেন তিনি ওই লোকের কথায় কান না দেন, তার নিষেধের কাছে মাথা না নোয়ান।"
          }
        ]
      },
      {
        "h": {
          "en": "The Man at the Prayer Place",
          "bn": "নামাজের জায়গায় দাঁড়ানো লোকটি"
        },
        "p": [
          {
            "en": "Who is it that must not be obeyed? At-Tabari, al-Qurtubi, al-Baghawi and al-Muyassar each name Abu Jahl, and Ma'arif al-Qur'an says the Prophet ﷺ is told to ignore and disobey Abu Jahl when he stops him from praying. Ibn Kathir, on this verse, does not name him; he simply turns the address to the Prophet: O Muhammad, do not obey him. As-Sa'di names him too, saying the verse came down concerning Abu Jahl when he forbade the Messenger of Allah ﷺ to pray, toyed with him and harmed him.",
            "bn": "যার কথা মানা যাবে না, সে কে? তাবারী, কুরতুবী, বাগাভী আর মুয়াসসার সবাই আবু জাহলের নাম বলেন। মাআরিফুল কুরআন বলে, আবু জাহল যখন নবী ﷺ-কে নামাজে বাধা দেয়, তখন তাকে উপেক্ষা করতে আর তার কথা অমান্য করতে তাঁকে বলা হয়েছে। ইবন কাসীর এ আয়াতে নাম বলেন না, শুধু সম্বোধনটা নবী ﷺ-এর দিকে ঘুরিয়ে দেন: হে মুহাম্মাদ, তার কথা মেনো না। সা'দীও নাম বলেন। তাঁর কথায় আয়াতটি নাজিল হয়েছিল আবু জাহলকে ঘিরে, যখন সে রাসূলুল্লাহ ﷺ-কে নামাজে বাধা দিয়েছিল, তাঁকে নিয়ে তামাশা করেছিল আর কষ্ট দিয়েছিল।"
          },
          {
            "en": "At-Tabari adds a report through Qatada, introduced with the words it was mentioned to us: that the verse came down about Abu Jahl, who said that if he saw Muhammad praying he would tread on his neck. When what he said reached the Prophet ﷺ, he said that had Abu Jahl done it, the zabaniyah of 96:18 would have snatched him. The report comes as Qatada gives it, without a Companion named in the text consulted here, so this article records it as at-Tabari's report and not as an established cause of revelation.",
            "bn": "তাবারী কাতাদার সূত্রে একটি বর্ণনা যোগ করেন, শুরুতে বলা হয়েছে: আমাদের কাছে উল্লেখ করা হয়েছে। বর্ণনাটি বলে, আয়াতটি নাজিল হয়েছিল আবু জাহলকে নিয়ে। সে বলেছিল, মুহাম্মাদকে নামাজ পড়তে দেখলে সে তাঁর ঘাড় পায়ে মাড়াবে। কথাটা নবী ﷺ-এর কানে পৌঁছালে তিনি বললেন, সে তা করলে ৯৬:১৮-এর যাবানিয়া তাকে ছোঁ মেরে নিয়ে যেত। এখানে যে লেখাটি আনা হয়েছে, তাতে বর্ণনাটি কাতাদার ভাষ্য হিসেবেই আছে, কোনো সাহাবির নাম নেই। তাই এ প্রবন্ধ একে তাবারীর আনা বর্ণনা হিসেবেই রাখছে, নাজিলের প্রতিষ্ঠিত কারণ হিসেবে নয়।"
          },
          {
            "en": "As-Sa'di then widens the frame: the command is general, for everyone who forbids good and everyone who is forbidden it, even though it came down about Abu Jahl. The verse speaks only of what it names, one man who tried to stop one servant's prayer, and it licenses nothing against any living person or community. It gives no one a warrant to cast a neighbour as that man, and this article passes no verdict on anyone's fate.",
            "bn": "সা'দী এরপর পরিসরটা বড় করেন। তাঁর মতে আদেশটি সবার জন্য: যে-ই ভালো কাজে বাধা দেয় আর যাকেই বাধা দেওয়া হয়, যদিও আয়াত নাজিল হয়েছিল আবু জাহলকে ঘিরে। আয়াতটি শুধু তা-ই বর্ণনা করে যা পাঠে আছে: একজন লোক একজন বান্দার নামাজ থামাতে চেয়েছিল। কোনো জীবিত ব্যক্তি বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। প্রতিবেশীকে সেই লোকের জায়গায় বসানোর অধিকারও কাউকে দেয় না। এ প্রবন্ধ কারও পরিণাম নিয়ে কোনো রায় দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Not as He Supposed",
          "bn": "সে যা ভেবেছিল তা নয়"
        },
        "p": [
          {
            "en": "Kalla opens the verse, and the commentators gloss it as a rejection aimed at the forbidder's position, each in a slightly different word. At-Tabari: the matter is not as Abu Jahl says, when he forbids Muhammad to worship his Lord and to pray to Him. Al-Qurtubi: the matter is not as Abu Jahl supposes. Al-Baghawi: it is not as Abu Jahl is upon. Al-Muyassar: it is not as Abu Jahl thinks. Ma'arif al-Qur'an carries it as no, never obey him. The commentators give these side by side, and none is preferred here.",
            "bn": "আয়াত খোলে কাল্লা দিয়ে। তাফসীরকারেরা একে বাধাদানকারীর অবস্থানের প্রত্যাখ্যান হিসেবে ব্যাখ্যা করেন, প্রত্যেকে একটু ভিন্ন শব্দে। তাবারী বলেন: ব্যাপারটা তেমন নয়, যেমন আবু জাহল বলে, যখন সে মুহাম্মাদকে তাঁর রবের ইবাদত আর তাঁর উদ্দেশে নামাজ থেকে বাধা দেয়। কুরতুবী বলেন: ব্যাপারটা তেমন নয়, যেমন আবু জাহল ধারণা করে। বাগাভীর ভাষায়: আবু জাহল যে অবস্থানে আছে, ব্যাপারটা তেমন নয়। মুয়াসসার বলে: আবু জাহল যেমন মনে করে, তেমন নয়। মাআরিফুল কুরআন একে নেয় এভাবে: না, কক্ষনো তার কথা মেনো না। ব্যাখ্যাগুলো পাশাপাশি রাখা হলো, এখানে কোনোটাকে এগিয়ে রাখা হচ্ছে না।"
          },
          {
            "en": "Several of the glosses pair the rejection with a promise of safety. At-Tabari, after rejecting what Abu Jahl says, closes the verse with: Abu Jahl will never be able to harm you, and We will shield you from him. Al-Muyassar says: he will not reach you, O Messenger, with any harm. Ibn Kathir, explaining la tuti'hu, adds: pray wherever you wish and pay him no heed, for Allah is your guardian and your helper, and He protects you from the people. In these readings the no is spoken to the forbidder and the safety is spoken to the man at prayer.",
            "bn": "কয়েকটি ব্যাখ্যায় প্রত্যাখ্যানের সঙ্গে নিরাপত্তার প্রতিশ্রুতিও আছে। আবু জাহলের কথা নাকচ করার পর তাবারী আয়াতের ব্যাখ্যা শেষ করেন এই বলে: আবু জাহল কখনো তোমার ক্ষতি করতে পারবে না, আমরা তোমাকে তার থেকে রক্ষা করব। মুয়াসসার বলে: হে রাসূল, সে তোমার কোনো অনিষ্ট করতে পারবে না। ইবন কাসীর লা তুতি'হু-র ব্যাখ্যায় যোগ করেন: যেখানে ইচ্ছা নামাজ পড়ো, তাকে পরোয়া কোরো না। আল্লাহই তোমার হেফাজতকারী ও সাহায্যকারী, তিনিই তোমাকে মানুষের হাত থেকে রক্ষা করেন। এই পাঠে 'না' কথাটা বাধাদানকারীর জন্য, আর অভয়টা নামাজে দাঁড়ানো মানুষটির জন্য।"
          }
        ]
      },
      {
        "h": {
          "en": "An Order Not to Follow",
          "bn": "যে হুকুম মানা যাবে না"
        },
        "p": [
          {
            "en": "Then the prohibition itself, la tuti'hu: do not obey him. Here the commentators differ on what exactly the forbidder demanded. At-Tabari: do not obey Abu Jahl in what he ordered you, to leave prayer to your Lord. Al-Qurtubi and al-Muyassar: in what he called you to, leaving the prayer. Al-Baghawi: in leaving the prayer. Ibn Kathir frames it more broadly: do not obey him in what he forbids you, keeping up worship constantly and doing much of it.",
            "bn": "এবার নিষেধটি নিজে, লা তুতি'হু: তার কথা মেনো না। বাধাদানকারী ঠিক কী চেয়েছিল, তা নিয়ে তাফসীরকারদের ভাষা আলাদা। তাবারী বলেন: আবু জাহল তোমাকে রবের উদ্দেশে নামাজ ছেড়ে দিতে যে আদেশ দিয়েছে, তাতে তার আনুগত্য কোরো না। কুরতুবী আর মুয়াসসার বলে: নামাজ ছেড়ে দেওয়ার যে ডাক সে দিয়েছে, তাতে। বাগাভী বলেন সংক্ষেপে: নামাজ ছাড়ার ব্যাপারে। ইবন কাসীর আরও বড় করে দেখেন: সে তোমাকে যা থেকে বাধা দেয়, অর্থাৎ নিয়মিত ইবাদত চালিয়ে যাওয়া আর বেশি বেশি ইবাদত করা, তাতে তার কথা মেনো না।"
          },
          {
            "en": "As-Sa'di gives the reason behind the prohibition rather than its content: do not listen to him or yield to him, for he commands nothing but what brings loss in both worlds. Ma'arif al-Qur'an adds a note of constancy: the Prophet ﷺ is asked to be steadfast in prayer and prostration. The glosses agree that the order was about prayer; they differ on whether it touched the prayer itself or its constancy and abundance, and the article leaves each as its author gave it.",
            "bn": "সা'দী নিষেধের বিষয় নয়, কারণটা বলেন: তার কথায় কান দিয়ো না, তার কাছে মাথা নুইয়ো না, কারণ সে এমন কিছুরই আদেশ দেয় যাতে দুই জগতেই ক্ষতি। মাআরিফুল কুরআন যোগ করে অবিচলতার কথা: নবী ﷺ-কে বলা হয়েছে নামাজ আর সিজদায় অটল থাকতে। ব্যাখ্যাগুলো একমত যে আদেশটা ছিল নামাজ নিয়ে। পার্থক্য হলো, বাধাটা কি নামাজের ওপরই ছিল, নাকি তার নিয়মিততা আর আধিক্যের ওপর। প্রবন্ধটি প্রত্যেকের কথা তাঁর নিজের ভাষাতেই রেখে দিচ্ছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pray, or Fall Prostrate?",
          "bn": "নামাজ, নাকি সিজদা?"
        },
        "p": [
          {
            "en": "Wa-sjud: and prostrate. Some commentators take the word as the whole prayer, others as the act of prostration. Al-Qurtubi and al-Baghawi both gloss it: pray to Allah. At-Tabari, as-Sa'di and al-Muyassar keep the literal verb with its object: prostrate to your Lord. Ma'arif al-Qur'an renders it bow down in sajdah, and then speaks of steadfastness in prayer and prostration together. The difference is real but narrow, since prostration is part of prayer and the scene the verse answers, in 96:10, is a servant forbidden while he prays.",
            "bn": "ওয়াসজুদ: আর সিজদা করো। কোনো কোনো তাফসীরকার শব্দটিকে পুরো নামাজ ধরে নেন, কেউ ধরেন সিজদার কাজটিকেই। কুরতুবী আর বাগাভী দুজনেই বলেন: আল্লাহর উদ্দেশে নামাজ পড়ো। তাবারী, সা'দী আর মুয়াসসার ক্রিয়াটিকে আক্ষরিক অর্থেই রাখেন, সঙ্গে কর্ম জুড়ে: তোমার রবকে সিজদা করো। মাআরিফুল কুরআন অনুবাদে বলে সিজদায় নত হও, তারপর নামাজ আর সিজদা দুটোতেই অটল থাকার কথা বলে। পার্থক্যটা আছে, তবে খুবই সামান্য। সিজদা তো নামাজেরই অংশ, আর আয়াতটি যে দৃশ্যের জবাব দিচ্ছে, ৯৬:১০-এ, সেখানে এক বান্দাকে নামাজের মধ্যেই বাধা দেওয়া হচ্ছে।"
          },
          {
            "en": "Al-Qurtubi then raises a second question about the same word. It may mean the prostration within the prayer, or it may mean the prostration of recitation at this place in the surah. He relays Ibn al-'Arabi as saying that the apparent sense is the prostration of prayer, because of the passage from 96:9 to this verse, were it not for a report established in the Sahih from Abu Hurayrah (RA) that he prostrated with the Messenger of Allah ﷺ in two surahs, idha as-sama'u inshaqqat and iqra' bismi rabbik. He calls that report a text showing that the prostration of recitation is meant.",
            "bn": "কুরতুবী এরপর একই শব্দ নিয়ে দ্বিতীয় প্রশ্ন তোলেন। এর অর্থ হতে পারে নামাজের ভেতরের সিজদা, আবার হতে পারে সূরার এই জায়গায় তিলাওয়াতের সিজদা। তিনি ইবনুল আরাবীর কথা আনেন: ৯৬:৯ থেকে এ আয়াত পর্যন্ত অংশটির কারণে বাহ্যিক অর্থ নামাজের সিজদাই হতো। কিন্তু সহীহ গ্রন্থে আবু হুরায়রা (রাঃ) থেকে প্রমাণিত একটি বর্ণনা আছে। তিনি রাসূলুল্লাহ ﷺ-এর সঙ্গে দুটি সূরায় সিজদা করেছিলেন: ইযাস সামাউন শাক্কাত আর ইকরা বিসমি রাব্বিক। তিনি এই বর্ণনাকে স্পষ্ট দলিল বলেন যে এখানে তিলাওয়াতের সিজদাই উদ্দেশ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Nearness Found by Going Low",
          "bn": "নিচু হয়ে কাছে যাওয়া"
        },
        "p": [
          {
            "en": "Wa-qtarib: and draw near. At-Tabari reads it as draw near to Him by seeking His love through obedience to Him, and al-Muyassar uses the same words. Al-Qurtubi: draw near to Allah through obedience and worship. As-Sa'di: draw near to Him in prostration and in every other kind of obedience and act of nearness, for all of them bring you closer to His pleasure. Al-Baghawi keeps it bare: draw near to Allah. Al-Qurtubi also records a narrower reading, introduced as it has been said: when you prostrate, draw near to Allah by supplication.",
            "bn": "ওয়াকতারিব: আর কাছে এসো। তাবারী একে পড়েন এভাবে: তাঁর আনুগত্যের মাধ্যমে তাঁর ভালোবাসা চেয়ে তাঁর কাছে এসো। মুয়াসসারও একই শব্দ ব্যবহার করে। কুরতুবী বলেন: আনুগত্য আর ইবাদতের মাধ্যমে আল্লাহর কাছে এসো। সা'দীর কথায়: সিজদায় এবং অন্য সব রকম আনুগত্য ও নৈকট্যের আমলে তাঁর কাছে এসো, কারণ এগুলোর সবই তাঁর সন্তুষ্টির কাছে নিয়ে যায়। বাগাভী রাখেন সাদামাটা: আল্লাহর কাছে এসো। কুরতুবী আরও সীমিত একটি ব্যাখ্যাও আনেন, 'বলা হয়েছে' কথাটি দিয়ে: যখন সিজদা করো, দোয়ার মাধ্যমে আল্লাহর কাছে এসো।"
          },
          {
            "en": "Al-Qurtubi relays one reading that splits the verse between two addressees. Zayd ibn Aslam said: prostrate, you, O Muhammad, in prayer; and draw near, you, O Abu Jahl, to the Fire. It stands in his tafsir beside the others, and none of the other commentators consulted here gives it. The article records it as Zayd ibn Aslam's reading, reported by al-Qurtubi, and takes no side.",
            "bn": "কুরতুবী এমন একটি পাঠও আনেন, যা আয়াতটিকে দুজন সম্বোধিতের মধ্যে ভাগ করে দেয়। যায়দ ইবন আসলাম বলেছেন: হে মুহাম্মাদ, তুমি নামাজ পড়ে সিজদা করো। আর হে আবু জাহল, তুমি আগুনের কাছে এগিয়ে যাও। তাঁর তাফসীরে এটি অন্য পাঠগুলোর পাশেই আছে। এখানে আনা অন্য কোনো তাফসীরকার এ কথা বলেননি। প্রবন্ধটি একে কুরতুবীর বর্ণিত যায়দ ইবন আসলামের পাঠ হিসেবেই রাখছে, কোনো পক্ষ নিচ্ছে না।"
          },
          {
            "en": "Why should the lowest posture be the nearest? Al-Qurtubi answers in the name of our scholars: prostration is the utmost of servitude and lowliness, while to Allah belongs the utmost might, a might without measure. So the further you move from His attribute, the nearer you come to His Garden and to His neighbourhood in His abode. He then quotes a line of verse: when necks are humbled in lowliness before You, their glory lies in that lowliness. The thought is his and his scholars'; the article only carries it.",
            "bn": "সবচেয়ে নিচু ভঙ্গিটাই কেন সবচেয়ে কাছের? কুরতুবী জবাব দেন 'আমাদের আলেমগণ' বলে। সিজদা হলো দাসত্ব আর বিনয়ের শেষ সীমা, আর আল্লাহর জন্য মর্যাদার শেষ সীমা, এমন মর্যাদা যার কোনো পরিমাপ নেই। তাই তাঁর গুণ থেকে যত দূরে সরবেন, তাঁর জান্নাতের তত কাছে আসবেন, তাঁর ঘরে তাঁর প্রতিবেশের তত কাছে। এরপর তিনি একটি কবিতার চরণ উদ্ধৃত করেন: তোমার সামনে বিনয়ে যখন গর্দানগুলো নত হয়, সেই নত হওয়াতেই তাদের মর্যাদা। ভাবনাটি তাঁর আর তাঁর আলেমদের, প্রবন্ধ শুধু তা বয়ে আনছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Closest When Prostrating",
          "bn": "সিজদায় সবচেয়ে কাছে"
        },
        "p": [
          {
            "en": "Ibn Kathir attaches a narration to wa-sjud wa-qtarib, saying it is established in the Sahih of Muslim through 'Abdullah ibn Wahb, with its chain to Abu Salih and Abu Hurayrah (RA). In Sahih Muslim (482), in the English of the page, the Messenger of Allah ﷺ said: \"The nearest a servant comes to his Lord is when he is prostrating himself, so make supplication (in this state).\" Muslim placed it in his Sahih. It is a general teaching about prostration, which Ibn Kathir links to this verse with the words just as.",
            "bn": "ইবন কাসীর ওয়াসজুদ ওয়াকতারিব-এর সঙ্গে একটি বর্ণনা জুড়ে দেন। তিনি বলেন, এটি সহীহ মুসলিমে প্রমাণিত, আব্দুল্লাহ ইবন ওয়াহবের সূত্রে, আবু সালিহ হয়ে আবু হুরায়রা (রাঃ) পর্যন্ত। সহীহ মুসলিমে (৪৮২) রাসূলুল্লাহ ﷺ বলেছেন: \"বান্দা তার রবের সবচেয়ে কাছে থাকে যখন সে সিজদায় থাকে, তাই (এ অবস্থায়) দোয়া করো।\" ইমাম মুসলিম হাদিসটি তাঁর সহীহ গ্রন্থে রেখেছেন। এটি সিজদা নিয়ে সাধারণ একটি শিক্ষা। ইবন কাসীর 'যেমন' শব্দটি দিয়ে একে এ আয়াতের সঙ্গে জুড়েছেন।"
          },
          {
            "en": "Al-Baghawi cites the same words with his own chain through Abu Dawud, running through Ibn Wahb to Abu Hurayrah (RA), and Ma'arif al-Qur'an also says it is recorded in Abu Dawud. The page for Sunan Abu Dawud (875) shows that chain, and its English reads in full: \"Abu Hurairah reported the Messenger of Allah ﷺ as saying: The nearest a servant come to his Lord is when he is prostrating himself, so make supplication often.\" No grading of Abu Dawud's own appears on the page, and none is added here.",
            "bn": "বাগাভী একই কথা নিজের সনদে আবু দাউদের সূত্রে আনেন, যা ইবন ওয়াহব হয়ে আবু হুরায়রা (রাঃ) পর্যন্ত পৌঁছায়। মাআরিফুল কুরআনও বলে, এটি আবু দাউদে আছে। সুনান আবু দাউদের (৮৭৫) পাতায় সেই সনদই আছে, আর এর ইংরেজি পুরোটা এই: \"আবু হুরায়রা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: বান্দা তার রবের সবচেয়ে কাছে থাকে যখন সে সিজদায় থাকে, তাই বেশি বেশি দোয়া করো।\" পাতায় ইমাম আবু দাউদের নিজের কোনো মান নির্ণয় নেই, এখানেও কিছু যোগ করা হচ্ছে না।"
          },
          {
            "en": "Al-Qurtubi and Ma'arif al-Qur'an add a second narration: in prostration, strive in supplication, for it is fitting that you be answered. In Sahih Muslim (479) these words sit inside a longer report from Ibn 'Abbas (RA) that covers other matters, so the article does not clip it into a quotation. Ma'arif then gives rulings of its own: supplicating in the prostration of a voluntary prayer is valid, the Prophet's ﷺ transmitted words are better, and there is no proof of such supplications in the obligatory prayer, which is to be kept short.",
            "bn": "কুরতুবী আর মাআরিফুল কুরআন আরেকটি বর্ণনা যোগ করে: সিজদায় দোয়ায় খুব চেষ্টা করো, কারণ তখনই দোয়া কবুল হওয়ার উপযুক্ত সময়। সহীহ মুসলিমে (৪৭৯) কথাগুলো ইবন আব্বাস (রাঃ)-এর একটি দীর্ঘ বর্ণনার ভেতরে আছে, যাতে আরও কয়েকটি বিষয় এসেছে। তাই প্রবন্ধটি সেখান থেকে টুকরো কেটে উদ্ধৃতি বানাচ্ছে না। মাআরিফুল কুরআন এরপর নিজের কিছু মাসআলা দেয়। নফল নামাজের সিজদায় দোয়া করা জায়েজ। নবী ﷺ থেকে বর্ণিত শব্দগুলো পড়াই উত্তম। আর ফরজ নামাজে এমন দোয়ার কোনো প্রমাণ নেই, ফরজ নামাজ সংক্ষিপ্ত রাখাই নিয়ম।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Reciter Bows Down",
          "bn": "যেখানে পাঠক মাথা নোয়ান"
        },
        "p": [
          {
            "en": "Ibn Kathir says it was mentioned earlier that the Messenger of Allah ﷺ used to prostrate in idha as-sama'u inshaqqat and in iqra' bismi rabbika alladhi khalaq. Al-Qurtubi gives Abu Hurayrah's report from the Sahih, as above. The report as Muslim records it (578), with the related report of Abu Rafi' in al-Bukhari, is quoted whole in the article on 84:21 and is not repeated here. Ma'arif al-Qur'an says a prostration is compulsory for anyone who recites this verse and listens to it, citing Abu Hurayrah's report.",
            "bn": "ইবন কাসীর বলেন, আগেই উল্লেখ হয়েছে যে রাসূলুল্লাহ ﷺ ইযাস সামাউন শাক্কাত আর ইকরা বিসমি রাব্বিকাল্লাযী খালাক-এ সিজদা করতেন। কুরতুবী সহীহ গ্রন্থ থেকে আবু হুরায়রা (রাঃ)-এর বর্ণনা আনেন, যা আগে বলা হয়েছে। মুসলিম যেভাবে বর্ণনাটি রেখেছেন (৫৭৮), সঙ্গে বুখারীতে আবু রাফির বর্ণনা, পুরোটা উদ্ধৃত আছে ৮৪:২১-এর প্রবন্ধে, এখানে আবার আনা হচ্ছে না। মাআরিফুল কুরআন বলে, যে এ আয়াত পড়ে ও শোনে, তার জন্য সিজদা আবশ্যক। দলিল হিসেবে আনে আবু হুরায়রা (রাঃ)-এর বর্ণনা।"
          },
          {
            "en": "Al-Qurtubi adds a report from Ibn Wahb, through Hammad ibn Zayd, 'Asim ibn Bahdalah and Zirr ibn Hubaysh, from 'Ali ibn Abi Talib (RA): the 'aza'im, the emphasised prostrations, are four: Alif Lam Mim Tanzil, Ha Mim Tanzil min ar-Rahman ar-Rahim, an-Najm, and iqra' bismi rabbik. Ibn al-'Arabi comments, as al-Qurtubi relays him: if this is sound, it would also require the second prostration of Surat al-Hajj, even though it comes joined with bowing, its sense being bow where bowing belongs and prostrate where prostration belongs.",
            "bn": "কুরতুবী ইবন ওয়াহবের একটি বর্ণনা যোগ করেন, হাম্মাদ ইবন যায়দ, আসিম ইবন বাহদালা আর যির ইবন হুবাইশের সূত্রে, আলী ইবন আবী তালিব (রাঃ) থেকে: আযাইম, অর্থাৎ জোর দেওয়া সিজদা, ৪টি। আলিফ লাম মীম তানযীল, হা মীম তানযীলুম মিনার রাহমানির রাহীম, আন-নাজম আর ইকরা বিসমি রাব্বিক। কুরতুবীর বর্ণনায় ইবনুল আরাবী এর ওপর মন্তব্য করেন: এটি সহীহ হলে সূরা হজের দ্বিতীয় সিজদাও আবশ্যক হয়ে পড়ে, যদিও তা রুকুর সঙ্গে জুড়ে এসেছে। তখন এর অর্থ দাঁড়ায়: রুকুর জায়গায় রুকু করো, সিজদার জায়গায় সিজদা।"
          },
          {
            "en": "Al-Qurtubi then reports that Ibn Nafi' and Mutarrif said Malik used to prostrate, in his own private practice, at the close of this surah, and that Ibn Wahb held it to be among the 'aza'im. These are the positions as al-Qurtubi and Ma'arif al-Qur'an give them, under the names they give. The article adds no ruling of its own; how a reader acts at this sign belongs to the reader's own scholars.",
            "bn": "কুরতুবী এরপর জানান, ইবন নাফি আর মুতাররিফ বলেছেন, ইমাম মালিক নিজের ব্যক্তিগত আমলে এ সূরার শেষে সিজদা করতেন, আর ইবন ওয়াহব একে আযাইমের মধ্যে গণ্য করতেন। এগুলো কুরতুবী আর মাআরিফুল কুরআন যেভাবে দিয়েছে, যাঁদের নামে দিয়েছে, ঠিক সেভাবেই রাখা হলো। প্রবন্ধটি নিজের কোনো মাসআলা যোগ করছে না। এই চিহ্নে পৌঁছে পাঠক কী করবেন, সে প্রশ্ন তাঁর নিজের আলেমদের কাছে।"
          }
        ]
      }
    ]
  }
});
