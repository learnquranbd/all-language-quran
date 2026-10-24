/**
 * Tadabbur long-form articles — surah 15.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "15:4": {
    "sections": [
      {
        "h": {
          "en": "Right After Leave Them",
          "bn": "‘ছেড়ে দাও’ বলার ঠিক পরে"
        },
        "p": [
          {
            "en": "Wa-ma ahlakna min qaryatin illa wa-laha kitabun ma'lum: and We did not destroy any town but that it had a known decree. The verse follows straight on from 15:3, where the Prophet ﷺ is told to leave the deniers to eat, enjoy themselves and be diverted by hope, for they are going to know. A listener who has just heard that command might wonder why such people are left alone at all. Read in sequence, this verse answers before the question is asked: the leaving has an end, and the end is written.",
            "bn": "ওয়ামা আহলাকনা মিন কারইয়াতিন ইল্লা ওয়ালাহা কিতাবুম মা'লূম: আমি যে জনপদই ধ্বংস করেছি, তার জন্য ছিল এক জানা লিখন। আয়াতটি এসেছে ১৫:৩ আয়াতের ঠিক পরে। সেখানে নবী ﷺ-কে বলা হয়েছে অস্বীকারকারীদের ছেড়ে দিতে, তারা খাক, ভোগ করুক, আশা তাদের ভুলিয়ে রাখুক, শীঘ্রই তারা জানতে পারবে। এ নির্দেশ শুনে কারও মনে প্রশ্ন জাগতে পারে, এমন লোকদের ছেড়ে রাখা হচ্ছে কেন? পরপর পড়লে দেখা যায়, প্রশ্নটা ওঠার আগেই এ আয়াত জবাব দিয়ে দেয়। এই ছেড়ে রাখার একটা শেষ আছে, আর সেই শেষটা লেখা।"
          },
          {
            "en": "The Muyassar reads the link the same way, from the side of the deniers' demand. When they ask for the punishment to come down on them, in denial of you, O Messenger, then We do not destroy a town except that its destruction has a decreed term; We do not destroy them until they reach it, like those who went before them. The sentence is built as a denial with an exception, ma and then illa, so it leaves no destroyed town outside the rule it states.",
            "bn": "মুয়াসসারও সংযোগটা এভাবেই পড়ে, তবে অস্বীকারকারীদের দাবির দিক থেকে। হে রাসূল, আপনাকে মিথ্যা প্রতিপন্ন করে তারা যখন তাদের উপর শাস্তি নামিয়ে আনার দাবি করে, তখন আমি কোনো জনপদ ধ্বংস করি না, যদি না তার ধ্বংসের জন্য এক নির্ধারিত মেয়াদ থাকে। সেই মেয়াদে না পৌঁছানো পর্যন্ত আমি তাদের ধ্বংস করি না, যেমনটা করেছি তাদের আগের লোকদের বেলায়। বাক্যটি গড়া হয়েছে না-বাচক কথা আর তার ব্যতিক্রম দিয়ে, প্রথমে মা, তারপর ইল্লা। ফলে ধ্বংস হওয়া কোনো জনপদই এ নিয়মের বাইরে থাকে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Townsfolk Behind the Word",
          "bn": "জনপদ মানে তার মানুষ"
        },
        "p": [
          {
            "en": "At-Tabari and al-Baghawi both read qarya with a word understood before it: min ahli qaryatin, of the people of a town. What is destroyed in the verse is its inhabitants, not its stones. At-Tabari also fixes the time. He speaks of the towns whose people We destroyed in what has passed, fima mada. The verb ahlakna is past, and the commentators keep it there. The verse surveys towns already gone; it does not draw up a list of towns still to come.",
            "bn": "তাবারী ও বাগাভী দুজনেই কারইয়া শব্দের আগে একটা শব্দ উহ্য ধরে পড়েন: মিন আহলি কারইয়াতিন, অর্থাৎ কোনো জনপদের অধিবাসীদের মধ্য থেকে। আয়াতে যা ধ্বংস হয়, তা জনপদের মানুষ, তার ইট-পাথর নয়। সময়টাও তাবারী বেঁধে দেন। তিনি বলেন সেই জনপদগুলোর কথা, যাদের অধিবাসীদের আমি অতীতে ধ্বংস করেছি, ফীমা মাদা। আহলাকনা ক্রিয়াটি অতীতকালের, আর তাফসীরকারেরা তাকে অতীতেই রাখেন। আয়াতটি বিগত জনপদগুলোর দিকে তাকায়। ভবিষ্যতের কোনো জনপদের তালিকা সে বানায় না।"
          },
          {
            "en": "As-Sa'di attaches a description to the town before the exception arrives: it was a town deserving of the punishment, kanat mustahiqqatan lil-'adhab. His gloss does not let a reader picture a town seized at random and then given a date to explain it. The deserving comes first, the written term after. The Qur'an says the same in its own words at 28:59: your Lord would not destroy the towns until He had sent to their mother town a messenger reciting Our verses, and would not destroy them except while their people were wrongdoers.",
            "bn": "ব্যতিক্রমের কথা আসার আগেই সা'দী জনপদটির একটা পরিচয় জুড়ে দেন: সেটি ছিল শাস্তির যোগ্য জনপদ, কানাত মুস্তাহিক্কাতান লিল আযাব। তাঁর ব্যাখ্যায় এমন ছবি আঁকার সুযোগ থাকে না যে কোনো জনপদকে এলোমেলোভাবে ধরা হলো, তারপর ব্যাখ্যা হিসেবে একটা তারিখ বসিয়ে দেওয়া হলো। আগে যোগ্যতা, পরে লেখা মেয়াদ। কুরআন নিজেও ২৮:৫৯ আয়াতে একই কথা বলে: আপনার রব জনপদগুলোকে ধ্বংস করেন না, যতক্ষণ না তাদের কেন্দ্রীয় জনপদে এমন রাসূল পাঠান, যিনি তাদের কাছে আমার আয়াত তিলাওয়াত করেন। আর তিনি জনপদ ধ্বংস করেন কেবল তখনই, যখন তার অধিবাসীরা জালিম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Writing Read as a Term",
          "bn": "লিখন, অর্থাৎ মেয়াদ"
        },
        "p": [
          {
            "en": "Kitabun ma'lum, a known writing. Every commentator consulted for this verse glosses the word the same way, as ajal, a term. At-Tabari: an appointed term and a known period, ajalun mu'aqqatun wa muddatun ma'rufa. Al-Baghawi: a term struck in advance, ajalun madrub, which does not come early; the punishment does not reach them until they reach it, and it is not put back from them. Al-Qurtubi adds where the writing is kept: an appointed term written for them in al-Lawh al-Mahfuz, the Preserved Tablet.",
            "bn": "কিতাবুম মা'লূম, এক জানা লিখন। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, সবগুলোই শব্দটির অর্থ করে একইভাবে: আজাল, অর্থাৎ মেয়াদ। তাবারী বলেন, নির্ধারিত মেয়াদ আর জানা এক সময়কাল, আজালুন মুআক্কাতুন ওয়া মুদ্দাতুন মা'রূফা। বাগাভী বলেন, আগে থেকে বেঁধে দেওয়া মেয়াদ, আজালুন মাদরূব, যা এগিয়ে আসে না। সেখানে না পৌঁছানো পর্যন্ত শাস্তি তাদের নাগাল পায় না, আবার তা পিছিয়েও যায় না। লিখনটা কোথায় রাখা, কুরতুবী সেটাও জানান: তাদের জন্য লাওহে মাহফূযে লেখা এক নির্ধারিত মেয়াদ।"
          },
          {
            "en": "The emphases differ slightly, without amounting to a dispute. At-Tabari's word mudda, a period, looks at the length of a town's time, the stretch it is given. As-Sa'di and the Muyassar look at its end: a term decreed for its destruction, muqaddarun li-ihlakiha in as-Sa'di's words. At-Tabari joins the two in his next clause: We do not destroy them until they reach it, and when they reach it We destroy them then. The span and its end turn out to be the same writing, read from its two sides.",
            "bn": "জোরের জায়গায় সামান্য পার্থক্য আছে, তবে তা মতভেদ পর্যন্ত যায় না। তাবারীর শব্দ মুদ্দা, অর্থাৎ সময়কাল। তাঁর নজর জনপদকে দেওয়া সময়ের দৈর্ঘ্যের দিকে। সা'দী ও মুয়াসসারের নজর সেই সময়ের শেষ বিন্দুতে: ধ্বংসের জন্য নির্ধারিত মেয়াদ, সা'দীর ভাষায় মুকাদ্দারুন লি-ইহলাকিহা। তাবারী পরের বাক্যেই দুটিকে এক করে দেন: সেখানে না পৌঁছানো পর্যন্ত আমি তাদের ধ্বংস করি না, আর পৌঁছালে তখনই ধ্বংস করি। সময়ের বিস্তার আর তার শেষ তাই একই লিখন, দুই দিক থেকে পড়া।"
          },
          {
            "en": "The word kitab has already appeared in this surah. 15:1 opens: these are the verses of the Book and a clear Qur'an. A few verses later the same word names the writing of a town's term. The surah does not comment on the echo, and no commentator consulted here draws it out, so it is worth noting only as it stands. Those addressed had a Book they could read aloud, and there was also a writing about them that none of them could read.",
            "bn": "কিতাব শব্দটি এ সূরায় আগেই এসেছে। ১৫:১ আয়াত শুরু হয় এভাবে: এগুলো কিতাবের আয়াত এবং সুস্পষ্ট কুরআন। কয়েক আয়াত পরে সেই একই শব্দ একটা জনপদের মেয়াদের লিখনকে বোঝায়। সূরা এ মিলের দিকে ইঙ্গিত করে না, আর এখানে দেখা কোনো তাফসীরও তা আলাদা করে তোলে না। তাই মিলটা শুধু যেমন আছে তেমনই খেয়াল করে রাখার মতো। যাদের সম্বোধন করা হচ্ছিল, তাদের সামনে ছিল পড়ে শোনানোর মতো এক কিতাব। আর তাদের নিয়েই ছিল আরেক লিখন, যা তাদের কেউ পড়তে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proof Comes First",
          "bn": "আগে প্রমাণ, পরে মেয়াদ"
        },
        "p": [
          {
            "en": "Ibn Kathir names a condition the others leave unstated. Allah informs us, he says, that He never destroyed a town except after the proof had been established against it and its term had come to an end: ba'da qiyami al-hujjati 'alayha wa-intiha'i ajaliha. The abridged English of his tafsir renders the same pair: He never destroys a township until He has established evidences for it and its allotted time has ended. Two things are waited for, not a single thing: the argument delivered, and the time run out.",
            "bn": "অন্যরা যে শর্তটা মুখে আনেন না, ইবন কাসীর তা স্পষ্ট করে বলেন। তাঁর ভাষায়, আল্লাহ জানাচ্ছেন যে তিনি কোনো জনপদ ধ্বংস করেননি, যতক্ষণ না তার বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হয়েছে আর তার মেয়াদ ফুরিয়েছে: বা'দা কিয়ামিল হুজ্জাতি আলাইহা ওয়া ইনতিহাই আজালিহা। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও এই জোড়াটাই বহন করে: তিনি কোনো জনপদ ধ্বংস করেন না, যতক্ষণ না তার জন্য প্রমাণ প্রতিষ্ঠা করেন আর তার নির্ধারিত সময় শেষ হয়। অপেক্ষা একটি জিনিসের নয়, দুটি জিনিসের। যুক্তি পৌঁছে দেওয়া, আর সময় ফুরিয়ে যাওয়া।"
          },
          {
            "en": "The Qur'an states the first condition in its own words. 17:15 says: never would We punish until We sent a messenger. 28:59, quoted above, ties the destruction of towns to a messenger reciting the verses to them. Ibn Kathir's gloss therefore adds no new teaching; it reads 15:4 alongside the verses that already say this. The written term was never a trap laid for people who had not been told. By the time the term arrived, the message had arrived before it and had been answered with denial.",
            "bn": "প্রথম শর্তটা কুরআন নিজের ভাষাতেই বলে দিয়েছে। ১৭:১৫ আয়াতে আছে: রাসূল না পাঠানো পর্যন্ত আমি শাস্তি দিই না। ওপরে উদ্ধৃত ২৮:৫৯ আয়াত জনপদের ধ্বংসকে বেঁধে দেয় এমন রাসূলের সঙ্গে, যিনি তাদের কাছে আয়াত তিলাওয়াত করেন। কাজেই ইবন কাসীরের ব্যাখ্যা নতুন কোনো শিক্ষা যোগ করে না। তিনি ১৫:৪ আয়াতকে পড়েন সেই আয়াতগুলোর পাশে রেখে, যেগুলো কথাটা আগেই বলেছে। লেখা মেয়াদ কখনো অজানা মানুষের জন্য পাতা ফাঁদ ছিল না। মেয়াদ যখন এসেছে, বার্তা এসেছে তার আগেই, আর জবাবে পেয়েছে অস্বীকার।"
          }
        ]
      },
      {
        "h": {
          "en": "At-Tabari Turns to Makkah",
          "bn": "তাবারীর দৃষ্টি মক্কার দিকে"
        },
        "p": [
          {
            "en": "At-Tabari reads the verse as spoken to the Prophet ﷺ about his own city, and says so plainly. Likewise the people of your town from which you come, Makkah: We will not destroy its idolaters except after their writing has reached its term, because it is of My decree that I do not destroy the people of a town except after their writing reaches its term. In his reading the past towns are the precedent, and the address is to a particular city at the moment of revelation.",
            "bn": "তাবারী আয়াতটিকে পড়েন নবী ﷺ-এর প্রতি তাঁর নিজের শহর সম্পর্কে বলা কথা হিসেবে, আর তা খোলাখুলিই বলেন। আপনি যে জনপদের মানুষ, সেই মক্কার অধিবাসীদের বেলাতেও তাই। তাদের লিখন তার মেয়াদে না পৌঁছানো পর্যন্ত আমি সেখানকার মুশরিকদের ধ্বংস করব না। কারণ আমার ফয়সালা হলো, কোনো জনপদের লোকদের আমি ধ্বংস করি না, যতক্ষণ না তাদের লিখন তার মেয়াদে পৌঁছায়। তাঁর পাঠে বিগত জনপদগুলো নজির, আর সম্বোধন নাজিলের সময়ের একটি নির্দিষ্ট শহরের প্রতি।"
          },
          {
            "en": "The abridged Ibn Kathir calls the passage a message and a warning to the people of Makkah, telling them to give up their shirk, their stubbornness and their disbelief. The Muyassar, as seen above, frames it as a reply to their demand that the punishment be brought on. In every text consulted for this verse, the application stops at the Makkah of the revelation. None of them carries it forward to later cities, and none offers a way of working out when any town's writing will fall due.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত সংস্করণ অংশটিকে বলে মক্কাবাসীদের প্রতি বার্তা ও সতর্কবাণী, যাতে তারা শিরক, হঠকারিতা আর কুফরি ছেড়ে দেয়। মুয়াসসার, যেমনটা আগে দেখা গেছে, একে দেখে শাস্তি ডেকে আনার দাবির জবাব হিসেবে। এ আয়াতের জন্য দেখা প্রতিটি তাফসীরে প্রয়োগ থেমে যায় নাজিলের সময়ের মক্কায়। কেউ তা পরবর্তী কোনো শহরে টেনে নেন না। কোনো জনপদের লিখন কবে পূর্ণ হবে, তা হিসাব করে বের করার কোনো পথও কেউ দেখান না।"
          },
          {
            "en": "The abridged Ibn Kathir covers 15:4 and 15:5 together, and goes on to say that when a nation's time has come He never delays it and never moves it forward. That is the ground of 15:5, and it is left to that verse's own page. Ma'arif al-Qur'an comments on 15:3 to 15:7 as a group, but its comment dwells on the long hope of 15:3 and says nothing particular to this verse, so it is not used here. No text consulted attaches a hadith to 15:4.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ১৫:৪ ও ১৫:৫ আয়াত একসঙ্গে আলোচনা করে। সেখানে আরও বলা হয়, কোনো জাতির সময় এসে গেলে তিনি তা পিছিয়েও দেন না, এগিয়েও আনেন না। এটা ১৫:৫ আয়াতের বিষয়, তাই সেটা রইল ওই আয়াতের নিজস্ব পাতার জন্য। মাআরিফুল কুরআন ১৫:৩ থেকে ১৫:৭ আয়াত একসঙ্গে আলোচনা করে। তবে তার আলোচনা ১৫:৩ আয়াতের দীর্ঘ আশা নিয়েই, এ আয়াতের নিজস্ব কোনো কথা তাতে নেই। তাই এখানে তা নেওয়া হয়নি। ১৫:৪ আয়াতের সঙ্গে কোনো হাদিস জুড়ে দেওয়া হয়েছে, এমন কিছু দেখা তাফসীরগুলোতে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "No Date Written for Us",
          "bn": "কারও তারিখ আমাদের হাতে নেই"
        },
        "p": [
          {
            "en": "A limit has to be stated plainly here. This verse describes Allah's decree over towns already destroyed, as the text and its commentators describe it. It licenses nothing against any living person or community. It gives nobody the right to call an earthquake, a flood, a war or a ruined city a punishment, or to name the people caught in it as those whose term had come. The writing, in al-Qurtubi's gloss, is kept in the Preserved Tablet, and no living person has read it.",
            "bn": "এখানে একটা সীমা স্পষ্ট করে বলা দরকার। আয়াতটি বিগত ধ্বংসপ্রাপ্ত জনপদগুলোর উপর আল্লাহর ফয়সালার বর্ণনা দেয়, ঠিক যেভাবে কুরআনের ভাষা আর তার তাফসীরকারেরা তা বর্ণনা করেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। ভূমিকম্প, বন্যা, যুদ্ধ বা বিধ্বস্ত কোনো শহরকে শাস্তি বলার অধিকার সে কাউকে দেয় না। সেখানে আটকে পড়া মানুষদের মেয়াদ পূর্ণ হয়েছে, এ কথা বলার অধিকারও দেয় না। কুরতুবীর ব্যাখ্যায় লিখনটা রাখা আছে লাওহে মাহফূযে, আর কোনো জীবিত মানুষ তা পড়েনি।"
          },
          {
            "en": "Even at-Tabari's application stays inside what was revealed. He speaks of the idolaters of Makkah in the Prophet's own lifetime, and he makes the timing Allah's decree, not a forecast anybody could make. As-Sa'di's description, a town deserving of the punishment, is a judgment the verse leaves with Allah; a person watching suffering from the outside has no access to it. When others are struck by calamity, what is asked of a believer is help and du'a for them, and a look at his own state.",
            "bn": "তাবারীর প্রয়োগও নাজিল হওয়া কথার সীমার ভেতরেই থাকে। তিনি বলেন নবী ﷺ-এর জীবদ্দশায় মক্কার মুশরিকদের কথা। আর সময়টাকে তিনি রাখেন আল্লাহর ফয়সালা হিসেবে, এমন কোনো ভবিষ্যদ্বাণী হিসেবে নয় যা কেউ করতে পারে। সা'দী যে বলেছেন জনপদটি শাস্তির যোগ্য ছিল, সে বিচার আয়াতটি আল্লাহর হাতেই রেখে দেয়। বাইরে দাঁড়িয়ে যে মানুষ কারও কষ্ট দেখছে, সে বিচার জানার কোনো উপায় তার নেই। অন্যরা বিপদে পড়লে মুমিনের কাজ হলো তাদের সাহায্য করা, তাদের জন্য দোয়া করা, আর নিজের অবস্থার দিকে একবার তাকানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Quiet Is Not Safety",
          "bn": "নীরবতা মানেই নিরাপত্তা নয়"
        },
        "p": [
          {
            "en": "Read with 15:3, the verse also exposes a common mistake. The deniers ate, enjoyed themselves and were diverted by hope, and nothing fell on them. The quiet looked like evidence that nothing ever would. The verse says the quiet was the term still running. Al-Baghawi's wording is exact: the punishment does not come to them until they reach it. The delay was neither forgetfulness nor approval. It was a written span with a known end, and those living inside it took its length for permanence.",
            "bn": "১৫:৩ আয়াতের সঙ্গে মিলিয়ে পড়লে এ আয়াত একটা চেনা ভুলও ধরিয়ে দেয়। অস্বীকারকারীরা খেয়েছে, ভোগ করেছে, আশায় ভুলে থেকেছে, অথচ তাদের উপর কিছু নেমে আসেনি। এ নীরবতাকে মনে হয়েছে প্রমাণ, যেন কখনো কিছুই আসবে না। আয়াতটি বলছে, নীরবতা মানে মেয়াদ তখনো চলছিল। বাগাভীর কথা একেবারে মাপা: সেখানে না পৌঁছানো পর্যন্ত শাস্তি তাদের কাছে আসে না। এ দেরি ভুলে যাওয়াও ছিল না, সম্মতিও ছিল না। এ ছিল লিখে রাখা এক সময়কাল, যার শেষটা জানা। যারা তার ভেতরে বাস করছিল, তারা সময়টা লম্বা দেখে ভেবে বসেছিল, এ চিরকাল চলবে।"
          },
          {
            "en": "A few verses on, 15:8 gives the other edge of the same span: We do not send down the angels except with the truth, and they would not then be reprieved. The respite and its closing both sit inside this short passage. Between them lies the only time in which anything can still change. The passage opens, in 15:1, with a clear Qur'an placed in that time, not after it, which is itself a statement about what the time was for.",
            "bn": "কয়েক আয়াত পরে ১৫:৮ একই সময়কালের অন্য প্রান্তটা দেখায়: আমি ফেরেশতা নাজিল করি কেবল সত্যসহ, আর তখন তাদের আর অবকাশ দেওয়া হবে না। অবকাশ আর তার সমাপ্তি, দুটোই এই ছোট অংশটুকুর ভেতরে। এ দুয়ের মাঝখানেই সেই সময়, যখন এখনো কিছু বদলানো যায়। অংশটির শুরুতে, ১৫:১ আয়াতে, সুস্পষ্ট কুরআন রাখা হয়েছে সেই সময়ের ভেতরেই, তার পরে নয়। সময়টা কীসের জন্য ছিল, সে কথাও এতে বলা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "My Own Unread Date",
          "bn": "আমার না-পড়া তারিখ"
        },
        "p": [
          {
            "en": "The verse speaks of towns, but the rule behind it reaches every life. Every respite has a written term, mine included, and like the towns I cannot read it in advance. What I can read is the order Ibn Kathir set out: the proof first, the term after. For a reader holding this surah, the first has already happened. The verses of the Book and a clear Qur'an are in his hands. Whatever time remains to him is lived after the proof, not before it.",
            "bn": "আয়াতটি জনপদের কথা বলে, কিন্তু তার পেছনের নিয়ম প্রতিটি জীবন পর্যন্ত পৌঁছায়। প্রতিটি অবকাশের একটা লেখা মেয়াদ আছে, আমারটাও। আর জনপদগুলোর মতো আমিও তা আগে থেকে পড়তে পারি না। যা পড়তে পারি, তা হলো ইবন কাসীরের বলা ক্রম: আগে প্রমাণ, পরে মেয়াদ। এ সূরা যার হাতে, তার জন্য প্রথমটা ঘটে গেছে। কিতাবের আয়াত আর সুস্পষ্ট কুরআন তার সামনেই। তার হাতে যতটুকু সময় বাকি, তা কাটছে প্রমাণ আসার পরে, আগে নয়।"
          },
          {
            "en": "Ma'lum, known, is the verse's last word, and it cuts in a direction worth feeling. The term is known, and at-Tabari's gloss keeps that sense with its known period; yet the towns living inside it did not know it. Al-Qurtubi's answer to where it is known is the Preserved Tablet. The same holds for a single life. My end is fixed and known, and the knowing is not mine. That is no reason for dread. It is a reason to keep my accounts short, and to put my hope in Him who holds the writing.",
            "bn": "মা'লূম, অর্থাৎ জানা, আয়াতের শেষ শব্দ। শব্দটার ভেতরে এমন একটা কথা আছে, যা মন দিয়ে অনুভব করার মতো। মেয়াদটা জানা, তাবারীর ব্যাখ্যাও জানা সময়কালের কথা বলে। অথচ যে জনপদগুলো তার ভেতরে বাস করছিল, তারা তা জানত না। কোথায় তা জানা, কুরতুবীর জবাব: লাওহে মাহফূযে। একটা জীবনের বেলাতেও কথাটা একই। আমার শেষ নির্ধারিত এবং জানা, তবে সে জ্ঞান আমার নয়। এতে আতঙ্কিত হওয়ার কিছু নেই। বরং এ কারণেই নিজের হিসাব সব সময় মিটিয়ে রাখা দরকার, আর আশা রাখা দরকার তাঁর উপর, লিখনটা যাঁর কাছে।"
          },
          {
            "en": "What is the respite for, then? Not for calculating how much of it is left, which cannot be done, and not for the long hope of 15:3, the plan that quietly assumes the end is far away. It is for answering while an answer still counts: a tawbah made today rather than filed under later, a habit dropped rather than scheduled for dropping, a person I wronged told so and asked to forgive. The deniers were told they would come to know. The believer's opening is to know now, while knowing can still change something.",
            "bn": "তাহলে অবকাশটা কীসের জন্য? কতটুকু বাকি আছে তা হিসাব করার জন্য নয়, কারণ সে হিসাব করা যায় না। ১৫:৩ আয়াতের সেই দীর্ঘ আশার জন্যও নয়, যে পরিকল্পনা চুপচাপ ধরে নেয় শেষটা অনেক দূরে। অবকাশ হলো জবাব দেওয়ার সময়, যতক্ষণ জবাবের দাম আছে। যে তওবা আজই করা যায়, তা পরের জন্য তুলে রাখা নয়। যে অভ্যাস ছাড়া দরকার, তা ছাড়ার দিন ঠিক করে রাখা নয়, এখনই ছেড়ে দেওয়া। যার উপর অন্যায় করেছি, তাকে তা স্বীকার করে মাফ চাওয়া। অস্বীকারকারীদের বলা হয়েছিল, শীঘ্রই তারা জানতে পারবে। মুমিনের সুযোগ হলো এখনই জানা, যখন জানা দিয়ে এখনো কিছু বদলানো যায়।"
          }
        ]
      }
    ]
  },
  "15:9": {
    "sections": [
      {
        "h": {
          "en": "After They Called Him Mad",
          "bn": "পাগল বলার পরের জবাব"
        },
        "p": [
          {
            "en": "The verse answers a scene. In 15:6 the deniers address the Prophet ﷺ as the one upon whom adh-dhikr has been sent down, and then call him mad. Ibn Kathir, in the abridged English, reads the address as scorn: the one who claims to receive it. They called him mad, he explains, for inviting them to follow him and leave the way of their forefathers. In 15:7 they ask why he does not bring the angels, which Ibn Kathir glosses as angels to bear witness that what he brought is true.",
            "bn": "আয়াতটি একটা দৃশ্যের জবাব। ১৫:৬ আয়াতে অস্বীকারকারীরা নবী ﷺ-কে ডাকে 'যার ওপর যিকর নাযিল হয়েছে' বলে, তারপর তাঁকে পাগল বলে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এই সম্বোধনকে ঠাট্টা হিসেবে পড়ে: মানে, যে লোক দাবি করে তার কাছে তা আসে। তিনি বলেন, তাঁকে পাগল বলা হয়েছিল কারণ তিনি তাদের ডাকছিলেন তাঁর অনুসরণ করতে আর বাপদাদার পথ ছেড়ে দিতে। ১৫:৭ আয়াতে তারা জানতে চায়, তিনি ফেরেশতা আনেন না কেন। ইবন কাসীরের ব্যাখ্যায়, এমন ফেরেশতা যারা সাক্ষ্য দেবে যে তাঁর আনা বাণী সত্য।"
          },
          {
            "en": "Then 15:8 replies that the angels are sent down only with the truth, and that the deniers would then have no respite. Ibn Kathir cites Mujahid that the truth here means the Message and the punishment. As-Sa'di opens his comment on 15:9 from that demand: sufficient for them as a sign, if they are truthful, is this mighty Qur'an, and that, he says, is why Allah said here, Indeed it is We who sent down the Reminder. On his reading the verse sets the Book itself against the request for angels.",
            "bn": "এরপর ১৫:৮ আয়াত জবাব দেয়: ফেরেশতা নামে কেবল হক নিয়ে, আর তখন অস্বীকারকারীরা কোনো অবকাশ পাবে না। ইবন কাসীর মুজাহিদের কথা আনেন যে এখানে হক মানে রিসালাত আর আযাব। সা'দী ১৫:৯ আয়াতের আলোচনা শুরু করেন ওই দাবি থেকেই। তাঁর কথা, তারা যদি সত্যবাদী হয়, তবে নিদর্শন হিসেবে এই মহান কুরআনই তাদের জন্য যথেষ্ট। আর সে কারণেই আল্লাহ এখানে বলেছেন: নিশ্চয় আমিই যিকর নাযিল করেছি। সা'দীর পাঠে ফেরেশতা দেখার দাবির সামনে আয়াতটি দাঁড় করায় কিতাবকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word, Two Speakers",
          "bn": "এক শব্দ, দুই বক্তা"
        },
        "p": [
          {
            "en": "The mockers used the word themselves: nuzzila 'alayhi adh-dhikr, the one upon whom the Reminder was sent down. The reply takes up the same word: inna nahnu nazzalna adh-dhikra, indeed it is We who sent down the Reminder. What they said in scorn comes back as a statement, with the One who sent it down named. The commentators agree on what the word denotes here. At-Tabari, Ibn Kathir, al-Qurtubi and al-Baghawi each gloss adh-dhikr as the Qur'an, and the Muyassar writes it out: We sent down the Qur'an upon the Prophet Muhammad ﷺ.",
            "bn": "শব্দটা ঠাট্টাকারীরা নিজেরাই ব্যবহার করেছিল: নুযযিলা আলাইহিয যিকর, যার ওপর যিকর নাযিল হয়েছে। জবাবেও ফিরে আসে সেই একই শব্দ: ইন্না নাহনু নাযযালনায যিকরা, নিশ্চয় আমিই যিকর নাযিল করেছি। তারা যে কথা বলেছিল বিদ্রূপ করে, সেটাই ফিরে এল ঘোষণা হয়ে, আর এবার নাযিলকারীর নাম স্পষ্ট। এখানে শব্দটি কী বোঝায়, তা নিয়ে তাফসীরকারেরা একমত। তাবারী, ইবন কাসীর, কুরতুবী ও বাগাভী সবাই বলেন, যিকর মানে কুরআন। মুয়াসসার পুরো কথাটা খুলে লেখে: আমি নবী মুহাম্মাদ ﷺ-এর ওপর কুরআন নাযিল করেছি।"
          },
          {
            "en": "Al-Qurtubi pauses on the word nahnu, We, and allows two analyses. Nahnu may be the subject of its own clause, with nazzalna as its predicate and that whole clause as the predicate of inna. Or nahnu may be an emphasis of the pronoun attached to inna. He rules out a third possibility, that nahnu is a separating pronoun, because what follows it is a verbal clause rather than a definite noun. None of the other fetched commentators discusses the grammar of the verse, so this article adds nothing further on its wording.",
            "bn": "কুরতুবী নাহনু (আমি) শব্দটিতে এসে থামেন এবং দুটি বিশ্লেষণের সুযোগ রাখেন। এক, নাহনু নিজেই একটি বাক্যের মুবতাদা, নাযযালনা তার খবর, আর পুরো বাক্যটি আবার ইন্না-র খবর। দুই, নাহনু হলো ইন্না-র সঙ্গে যুক্ত সর্বনামের তাকিদ বা জোর। তৃতীয় একটি সম্ভাবনা তিনি নাকচ করেন, অর্থাৎ নাহনু পৃথককারী সর্বনাম হওয়া। কারণ এর পরে আছে একটি ক্রিয়াবাক্য, নির্দিষ্ট কোনো বিশেষ্য নয়। যেসব তাফসীর দেখা হয়েছে, তার আর কোনোটি আয়াতের ব্যাকরণ নিয়ে কথা বলেনি। তাই এর শব্দগঠন নিয়ে এ লেখা আর কিছু যোগ করছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Nothing Added, Nothing Lost",
          "bn": "বাড়েও না, হারায়ও না"
        },
        "p": [
          {
            "en": "At-Tabari gives the guarding its content. Wa inna lahu la-hafizun means: We guard the Qur'an from any falsehood being added to it that is not of it, and from anything being taken from it that is of it, of its rulings, its limits and its obligations. He states that the pronoun in lahu refers back to adh-dhikr, and that the people of interpretation said the like. From Mujahid, through several chains, he records a single word on la-hafizun: 'indana, with Us.",
            "bn": "হেফাজতের ভেতরে কী আছে, তাবারী তা খুলে বলেন। ওয়া ইন্না লাহু লাহাফিযূন মানে: আমি কুরআনকে রক্ষা করি, যাতে এর অংশ নয় এমন কোনো বাতিল এতে ঢুকে না পড়ে, আর এর অংশ এমন কিছু, এর বিধান, সীমারেখা ও ফরয থেকে কিছুই বাদ না পড়ে। তিনি বলেন, লাহু-র সর্বনামটি ফিরে গেছে যিকরের দিকে, আর তাফসীরবিদেরাও এমনই বলেছেন। মুজাহিদ থেকে কয়েকটি সনদে তিনি লাহাফিযূন সম্পর্কে একটিমাত্র শব্দ বর্ণনা করেন: ইনদানা, আমার কাছে।"
          },
          {
            "en": "At-Tabari also brings Qatadah, who joined this verse to 41:42: falsehood does not come to it from before it or from behind it. Qatadah took al-batil, falsehood, there to mean Iblis. Allah sent the Qur'an down and then guarded it, so that Iblis cannot add a falsehood to it or take a truth away from it. In a second report, through Ma'mar, Qatadah names the Shaytan in the same words. Al-Qurtubi cites Qatadah together with Thabit al-Bunani to the same effect, with the devils in the plural.",
            "bn": "তাবারী কাতাদার কথাও আনেন। কাতাদা এ আয়াতকে মিলিয়েছেন ৪১:৪২ আয়াতের সঙ্গে: বাতিল এর কাছে আসতে পারে না, সামনে থেকেও না, পেছন থেকেও না। সেখানে বাতিল বলতে কাতাদা বুঝেছেন ইবলীসকে। আল্লাহ কুরআন নাযিল করেছেন, তারপর নিজেই তা রক্ষা করেছেন। ফলে ইবলীস এতে কোনো বাতিল যোগ করতে পারে না, কোনো হকও কমাতে পারে না। মা'মারের সূত্রে আরেক বর্ণনায় কাতাদা একই কথায় শয়তানের নাম নেন। কুরতুবী কাতাদা ও সাবিত বুনানী দুজনের কথা একসঙ্গে উদ্ধৃত করেন, সেখানে শয়তান বহুবচনে।"
          },
          {
            "en": "Al-Baghawi lists three things the devils are kept from: adding to it, taking from it, or altering it. He too cites 41:42 and reads al-batil as Iblis, who has no power to add what is not of it or remove what is of it. Ibn Kathir names change and substitution, at-taghyir wa-t-tabdil. The Muyassar adds a third kind of harm beside addition and subtraction: that any part of it should be lost. Between them the commentators name the ways a text can fail, and in their readings the guarding covers them all.",
            "bn": "বাগাভী তিনটি বিষয়ের কথা বলেন, যা থেকে শয়তানদের ঠেকিয়ে রাখা হয়েছে: এতে কিছু বাড়ানো, এ থেকে কিছু কমানো, কিংবা এর কিছু বদলে দেওয়া। তিনিও ৪১:৪২ আয়াত উদ্ধৃত করেন এবং বাতিল বলতে ইবলীসকেই বোঝেন। যা এর অংশ নয় তা যোগ করার শক্তি তার নেই, যা এর অংশ তা সরানোর শক্তিও নেই। ইবন কাসীর বলেন পরিবর্তন ও বদলের কথা, আত-তাগয়ীর ওয়াত-তাবদীল। মুয়াসসার বাড়ানো ও কমানোর পাশে তৃতীয় এক ক্ষতির কথা যোগ করে: এর কোনো অংশ হারিয়ে যাওয়া। একটা লেখা যেসব পথে নষ্ট হতে পারে, তাফসীরকারেরা মিলে সেগুলোর নাম নেন। আর তাঁদের ব্যাখ্যায় হেফাজত সবগুলোকেই ঘিরে রাখে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded Before and After",
          "bn": "নাযিলের সময়ে, নাযিলের পরে"
        },
        "p": [
          {
            "en": "As-Sa'di divides the guarding by time. While it was being sent down, Allah guarded it from the eavesdropping of every accursed devil. After it was sent down, Allah placed it in the heart of His Messenger ﷺ and entrusted it there, and then in the hearts of his community. He guarded its wording from change, from addition and from loss, and its meanings from alteration. No one twists any of its meanings, as-Sa'di writes, without Allah raising up someone who makes the clear truth plain.",
            "bn": "সা'দী হেফাজতকে ভাগ করেন সময় ধরে। নাযিল হওয়ার সময় আল্লাহ একে রক্ষা করেছেন প্রত্যেক বিতাড়িত শয়তানের আড়ি পাতা থেকে। নাযিলের পরে আল্লাহ একে রেখেছেন তাঁর রাসূল ﷺ-এর অন্তরে, সেখানে আমানত করে দিয়েছেন, তারপর তাঁর উম্মতের অন্তরে। এর শব্দকে তিনি রক্ষা করেছেন পরিবর্তন, সংযোজন আর বিয়োজন থেকে, আর এর অর্থকে রক্ষা করেছেন বিকৃতি থেকে। সা'দী লেখেন, কেউ এর কোনো অর্থ বিকৃত করলেই আল্লাহ এমন কাউকে দাঁড় করিয়ে দেন, যিনি স্পষ্ট হকটা খুলে বলে দেন।"
          },
          {
            "en": "As-Sa'di counts this among the greatest of Allah's signs and of His favours to His believing servants. He then widens it: part of the Book's guarding is that Allah protects its people from their enemies and does not give an enemy power over them to sweep them away. That is his own extension of the verse, and none of the other fetched commentators makes it. It sits close to, though it is not the same as, the reading that takes lahu to mean the Prophet ﷺ himself, set out below.",
            "bn": "সা'দীর মতে এটি আল্লাহর সবচেয়ে বড় নিদর্শনগুলোর একটি, আর মুমিন বান্দাদের ওপর তাঁর অন্যতম বড় নিয়ামত। তারপর তিনি কথাটা আরও প্রসারিত করেন। কিতাবের হেফাজতের একটা অংশ হলো, আল্লাহ এর ধারকদের শত্রুর হাত থেকে রক্ষা করেন, এমন কোনো শত্রুকে তাদের ওপর চাপিয়ে দেন না যে তাদের নিশ্চিহ্ন করে দেবে। আয়াতের এই সম্প্রসারণ সা'দীর নিজের। যেসব তাফসীর দেখা হয়েছে, তার আর কেউ এ কথা বলেননি। কথাটা সেই পাঠের কাছাকাছি, যেখানে লাহু বলতে স্বয়ং নবী ﷺ-কে বোঝানো হয়েছে, তবে দুটো এক নয়। সে পাঠ আসছে নিচে।"
          },
          {
            "en": "Ma'arif al-Qur'an presses the point about meanings further. It argues that the Qur'an is the name neither of its words alone nor of its meanings alone, but of both together, so the promise covers both. The meanings, it continues, are what the Prophet ﷺ was sent to explain, citing 16:44, that you may make clear to people what was sent down to them, and 3:164, he teaches them the Book and the Wisdom. From this Ma'arif concludes that the promise also takes in the Hadith, his words and deeds that explain the Qur'an.",
            "bn": "অর্থের প্রসঙ্গটা মাআরিফুল কুরআন আরও এগিয়ে নেয়। তার যুক্তি, কুরআন শুধু শব্দের নাম নয়, শুধু অর্থেরও নাম নয়, দুটো মিলিয়েই কুরআন। তাই প্রতিশ্রুতি দুটোকেই ঘিরে আছে। মাআরিফ আরও বলে, এই অর্থ বুঝিয়ে দিতেই নবী ﷺ প্রেরিত হয়েছিলেন। প্রমাণ হিসেবে আনে ১৬:৪৪ আয়াত, যাতে আপনি মানুষকে স্পষ্ট করে বোঝান তাদের প্রতি কী নাযিল হয়েছে, আর ৩:১৬৪ আয়াত, তিনি তাদের কিতাব ও হিকমত শিক্ষা দেন। এখান থেকে মাআরিফ সিদ্ধান্তে আসে যে প্রতিশ্রুতির মধ্যে হাদীসও পড়ে, অর্থাৎ কুরআনের ব্যাখ্যা হিসেবে আসা তাঁর কথা ও কাজ।"
          }
        ]
      },
      {
        "h": {
          "en": "Its Guardian, or His",
          "bn": "কিতাবের রক্ষক, না নবীর"
        },
        "p": [
          {
            "en": "The pronoun in lahu can point to different things, and the commentators record two readings. The first takes it as adh-dhikr, the Qur'an. At-Tabari states this as his own explanation and adds that the people of interpretation said the like. Al-Qurtubi, al-Baghawi, the Muyassar and as-Sa'di all explain the guarding as a guarding of the Qur'an. Ibn Kathir does the same and then weighs the alternative: he calls this first meaning more fitting, awla, since it is what the context plainly shows.",
            "bn": "লাহু শব্দের সর্বনামটি একাধিক দিকে ইঙ্গিত করতে পারে, আর তাফসীরকারেরা দুটি পাঠ উল্লেখ করেছেন। প্রথম পাঠে এর অর্থ যিকর, মানে কুরআন। তাবারী এটাকে নিজের ব্যাখ্যা হিসেবেই বলেন এবং যোগ করেন যে তাফসীরবিদেরাও এমন বলেছেন। কুরতুবী, বাগাভী, মুয়াসসার ও সা'দী সবাই হেফাজতকে বুঝিয়েছেন কুরআনের হেফাজত হিসেবে। ইবন কাসীরও তা-ই করেন, তারপর অন্য মতটির সঙ্গে তুলনা করেন। তাঁর বিচারে প্রথম অর্থটিই বেশি সংগত, আওলা, কারণ প্রসঙ্গ থেকে সেটাই স্পষ্ট হয়।"
          },
          {
            "en": "The second reading takes lahu as the Prophet ﷺ. None of the fetched commentators names who held it: at-Tabari, al-Baghawi and al-Qurtubi introduce it with qila, it has been said, and Ibn Kathir with among them are some. At-Tabari and al-Baghawi give its sense: We are guarding Muhammad from whoever of his enemies intends him harm. Al-Qurtubi gives it as guarding him from being plotted against or killed. Ibn Kathir, al-Baghawi and al-Qurtubi each set it beside 5:67: and Allah will protect you from the people. Both readings stand in the books, and this article does not choose between them.",
            "bn": "দ্বিতীয় পাঠে লাহু বলতে নবী ﷺ-কে বোঝানো হয়েছে। যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই বলেনি এ মত কার। তাবারী, বাগাভী ও কুরতুবী একে আনেন কীলা দিয়ে, অর্থাৎ বলা হয়েছে। ইবন কাসীর বলেন, তাঁদের কেউ কেউ এমন বলেছেন। তাবারী ও বাগাভী এর অর্থ দেন এভাবে: শত্রুদের মধ্যে যে-ই মুহাম্মাদের ক্ষতি করতে চায়, তার হাত থেকে আমি তাঁকে রক্ষা করছি। কুরতুবীর ভাষায়, ষড়যন্ত্র বা হত্যা থেকে তাঁকে রক্ষা করা। ইবন কাসীর, বাগাভী ও কুরতুবী প্রত্যেকে এর পাশে রাখেন ৫:৬৭ আয়াত: আর আল্লাহ আপনাকে মানুষ থেকে রক্ষা করবেন। দুটি পাঠই তাফসীরের গ্রন্থে আছে, আর এ লেখা কোনোটির পক্ষ নিচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Ways of Guarding",
          "bn": "হেফাজতের দুই ধরন"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets this verse beside another. After the words of Qatadah and Thabit, his passage continues: Allah took the guarding of the Qur'an upon Himself, and so it has remained guarded; of other scripture He said bima istuhfizu, and so He left its guarding to them, and they altered and changed. The phrase comes from 5:44, which speaks of the Torah: the prophets who submitted judged by it, and so did the rabbis and the scholars, bima istuhfizu min kitab Allah, by what they were entrusted to guard of the Book of Allah, and they were witnesses over it.",
            "bn": "কুরতুবী এ আয়াতকে আরেকটি আয়াতের পাশে রাখেন। কাতাদা ও সাবিতের কথার পর তাঁর আলোচনা এগোয় এভাবে: কুরআনের হেফাজতের ভার আল্লাহ নিজে নিয়েছেন, তাই তা বরাবর সুরক্ষিত থেকেছে। অন্য কিতাব সম্পর্কে তিনি বলেছেন বিমাসতুহফিযূ, অর্থাৎ তার হেফাজতের ভার দিয়েছেন তাদের হাতে, আর তারা বদলেছে, পাল্টেছে। কথাটা এসেছে ৫:৪৪ আয়াত থেকে, যেখানে তাওরাতের কথা। আত্মসমর্পণকারী নবীরা তা দিয়ে ফয়সালা করতেন, রাব্বানী ও আহবার তথা আলেমরাও করতেন, বিমাসতুহফিযূ মিন কিতাবিল্লাহ: আল্লাহর কিতাবের যে অংশ রক্ষার দায়িত্ব তাঁদের দেওয়া হয়েছিল, তার ভিত্তিতে। আর তাঁরা ছিলেন এর সাক্ষী।"
          },
          {
            "en": "The contrast is the commentators' reading of two verses side by side: in one the guarding is placed upon those entrusted with a Book, in the other Allah names Himself as the guardian. Ma'arif al-Qur'an draws the same contrast through the report in the next section. It is a reading of what two verses say, and it licenses nothing against any living person or community. No one alive today is the subject of either verse, and neither verse gives anyone warrant to treat a person of another faith with less than justice.",
            "bn": "তুলনাটা তাফসীরকারদের, দুটি আয়াত পাশাপাশি রেখে পড়া। এক আয়াতে হেফাজতের দায় রাখা হয়েছে যাদের হাতে কিতাব সঁপে দেওয়া হয়েছিল তাদের ওপর, অন্য আয়াতে আল্লাহ নিজেকেই রক্ষক বলে ঘোষণা করেছেন। পরের অংশের ঘটনাটি দিয়ে মাআরিফুল কুরআনও একই তুলনা টানে। এটা দুটি আয়াতের বক্তব্যের পাঠ মাত্র। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। আজ যারা বেঁচে আছে তারা কেউ এ দুই আয়াতের বিষয় নয়। অন্য ধর্মের কারও সঙ্গে ইনসাফের কম আচরণ করার অধিকারও এ দুই আয়াতের কোনোটি কাউকে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Scribe at al-Ma'mun's Gathering",
          "bn": "মামুনের মজলিসের লিপিকার"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives a report with its chain, through al-Husayn ibn Fahm, from Yahya ibn Aktham. Al-Ma'mun, then still an amir, held a gathering for debate. A well-dressed Jewish man spoke in it with fine eloquence. Afterwards al-Ma'mun called him, asked whether he was an Israelite, and invited him to Islam with promises of favour. The man answered, my religion and the religion of my fathers, and left. A year later he came back as a Muslim and spoke on fiqh, again very well.",
            "bn": "কুরতুবী সনদসহ একটি ঘটনা বর্ণনা করেন, হুসাইন ইবন ফাহমের সূত্রে, ইয়াহইয়া ইবন আকসাম থেকে। মামুন তখনো আমীর, তাঁর একটি বিতর্কের মজলিস বসত। সেখানে সুন্দর পোশাকের এক ইহুদি লোক এসে খুব চমৎকার কথা বলল। মজলিস শেষে মামুন তাকে ডেকে জিজ্ঞেস করলেন, সে ইসরাঈলী কি না, তারপর নানা অনুগ্রহের প্রতিশ্রুতি দিয়ে ইসলামের দাওয়াত দিলেন। লোকটি বলল, আমার দীন আর আমার বাপদাদার দীন। তারপর চলে গেল। এক বছর পর সে মুসলিম হয়ে ফিরে এল, এবার ফিকহ নিয়ে কথা বলল, আবারও খুব ভালো বলল।"
          },
          {
            "en": "Asked what had brought him to Islam, he said he had wanted to test the religions, and he wrote a fine hand. He made three copies of the Torah, adding and omitting, and took them to the synagogue, where they were bought from him. He did the same with three copies of the Gospel at the church, and they too were bought. He made three copies of the Qur'an with additions and omissions and took them to the copyists. They leafed through them, found the additions and omissions, threw them aside and would not buy. So I knew, he said, that this is a guarded Book.",
            "bn": "ইসলাম গ্রহণের কারণ জানতে চাইলে সে বলল, সে ধর্মগুলোকে পরীক্ষা করে দেখতে চেয়েছিল, আর তার হাতের লেখা ছিল সুন্দর। তাওরাতের তিনটি কপি সে লিখল, কিছু বাড়িয়ে আর কিছু কমিয়ে, তারপর নিয়ে গেল ইহুদিদের উপাসনালয়ে। সেখানে কপিগুলো বিক্রি হয়ে গেল। ইনজীলের তিনটি কপি নিয়েও একই কাজ করল গির্জায়, সেগুলোও বিক্রি হলো। এরপর কুরআনের তিনটি কপি বানাল, তাতেও কিছু যোগ আর কিছু বাদ দিয়ে, নিয়ে গেল লিপিকার ও বই-বিক্রেতাদের কাছে। তারা পাতা উল্টে দেখল, বাড়তি আর ঘাটতি ধরে ফেলল, ছুড়ে ফেলে দিল, কিনল না। সে বলল, তখনই বুঝলাম, এ এক সুরক্ষিত কিতাব।"
          },
          {
            "en": "Yahya ibn Aktham says he went on Hajj that year, met Sufyan ibn 'Uyaynah and told him the story. Sufyan said its confirmation is in the Book of Allah: of the Torah and the Gospel Allah said bima istuhfizu, so He placed their guarding with them and it was lost, and He said, indeed it is We who sent down the Reminder, so Allah guarded it for us and it was not lost. Ma'arif al-Qur'an retells the report. It describes what one man said he did, and licenses nothing against any living person or community.",
            "bn": "ইয়াহইয়া ইবন আকসাম বলেন, সে বছর তিনি হজে গেলেন, সুফিয়ান ইবন উয়াইনার সঙ্গে দেখা হলো, আর ঘটনাটা তাঁকে শোনালেন। সুফিয়ান বললেন, এর সত্যতার প্রমাণ আল্লাহর কিতাবেই আছে। তাওরাত ও ইনজীল সম্পর্কে আল্লাহ বলেছেন বিমাসতুহফিযূ, অর্থাৎ সেগুলোর হেফাজতের ভার তাদের হাতে দিয়েছিলেন, ফলে তা হারিয়ে গেল। আর কুরআন সম্পর্কে বলেছেন, নিশ্চয় আমিই যিকর নাযিল করেছি, তাই আল্লাহ আমাদের জন্য তা রক্ষা করেছেন, তা হারায়নি। মাআরিফুল কুরআনও ঘটনাটি নতুন করে বলেছে। এটি একজন মানুষের নিজের মুখে বলা কাজের বিবরণ। আজকের কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Carried in Living Memory",
          "bn": "জীবন্ত স্মৃতিতে বহন"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an points to how the guarding shows itself now. More than fourteen centuries after the blessed age of the Prophet ﷺ, and though Muslims have fallen short in many parts of their religion, the memorising of the Qur'an continues across the world as it was. In every period, it says, millions of Muslims, old and young, men and women, carry it in their hearts, and not even the most senior scholar could misread a single letter before them without someone, an elder or a child, catching the slip at once.",
            "bn": "হেফাজত আজ কীভাবে চোখে পড়ে, মাআরিফুল কুরআন সেদিকে ইঙ্গিত করে। নবী ﷺ-এর বরকতময় যুগের পর চৌদ্দশো বছরের বেশি কেটে গেছে। দীনের বহু ক্ষেত্রে মুসলমানদের ত্রুটি আর অবহেলা ঘটেছে, তবু কুরআন মুখস্থ করার ধারা পৃথিবী জুড়ে আগের মতোই চলছে। মাআরিফ বলে, প্রতিটি যুগে লাখ লাখ মুসলমান, বুড়ো ও শিশু, পুরুষ ও নারী, একে অন্তরে ধারণ করে রাখে। তাদের সামনে সবচেয়ে বড় আলেমও একটি হরফ ভুল পড়লে কেউ না কেউ, কোনো মুরুব্বি বা কোনো শিশু, সঙ্গে সঙ্গে ভুলটা ধরে ফেলবে।"
          },
          {
            "en": "None of the fetched commentators on this verse attaches a hadith to it, so this article quotes none. The surah moves on at once: in 15:10 and 15:11 Allah tells the Prophet ﷺ that messengers were sent before him among the earlier peoples, and that none came to them without being mocked. For the reader, the promise answers a quiet doubt. What is recited in prayer is what was sent down, and as-Sa'di names what is left to each of us: in it, whoever wishes to take heed takes heed.",
            "bn": "এ আয়াতের যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস জুড়ে দেয়নি, তাই এ লেখাও কোনো হাদীস উদ্ধৃত করছে না। সূরাটি সঙ্গে সঙ্গেই সামনে এগোয়। ১৫:১০ ও ১৫:১১ আয়াতে আল্লাহ নবী ﷺ-কে জানান, তাঁর আগেও পূর্ববর্তী জাতিগুলোর মধ্যে রাসূল পাঠানো হয়েছিল, আর এমন কোনো রাসূল আসেননি যাঁকে তারা ঠাট্টা করেনি। পাঠকের মনে যে চাপা সংশয় থাকতে পারে, এই প্রতিশ্রুতি তার জবাব দেয়। নামাযে যা তিলাওয়াত হয়, তা-ই নাযিল হয়েছিল। আর আমাদের প্রত্যেকের কাজ কী, সা'দী তা বলে দেন: যে উপদেশ নিতে চায়, সে এতেই উপদেশ নেয়।"
          }
        ]
      }
    ]
  },
  "15:16": {
    "sections": [
      {
        "h": {
          "en": "After the Dazzled Eyes",
          "bn": "ধাঁধানো চোখের পরে"
        },
        "p": [
          {
            "en": "Wa-laqad ja'alna fi s-sama'i burujan wa-zayyannaha li-n-nazirin: and We have placed in the heaven buruj and adorned it for the beholders. The verse arrives straight after a hypothetical. In 15:14 and 15:15, even if a gate were opened in the sky and the deniers kept climbing through it, they would say only that their eyes had been dazzled and that they were a people bewitched. The sky has just been imagined as a door that would persuade nobody. Now it is shown as it already stands, over everyone.",
            "bn": "ওয়া লাকাদ জাআলনা ফিস সামাই বুরূজান ওয়া যাইয়্যান্নাহা লিন নাযিরীন: আর আমি আকাশে বুরূজ স্থাপন করেছি এবং দর্শকদের জন্য একে সাজিয়েছি। আয়াতটি আসে একটি কল্পিত দৃশ্যের ঠিক পরে। ১৫:১৪ ও ১৫:১৫ আয়াতে বলা হয়েছে, আকাশে কোনো দরজা খুলে দিলে আর অস্বীকারকারীরা তা দিয়ে উঠতে থাকলেও তারা শুধু বলত, আমাদের চোখ ধাঁধিয়ে দেওয়া হয়েছে, আমরা জাদুগ্রস্ত এক সম্প্রদায়। একটু আগেই আকাশকে কল্পনা করা হলো এমন দরজা হিসেবে, যা কাউকে বোঝাতে পারত না। এবার আকাশকে দেখানো হচ্ছে সে যেমন আছে তেমনভাবে, সবার মাথার উপর।"
          },
          {
            "en": "Al-Qurtubi names the turn. Having mentioned the disbelief of the disbelievers and the helplessness of their idols, he says, Allah now mentions the perfection of His power, so that it may serve as evidence of His oneness. Ma'arif al-Qur'an, which comments on 15:16 and 15:17 together, reads the passage the same way: the verses before it described the obstinacy of the deniers, and these begin a run of proofs of Allah's oneness, knowledge and power. Al-Muyassar opens its comment with the words, among the proofs of Our power.",
            "bn": "মোড়টা কুরতুবী স্পষ্ট করে দেন। তাঁর ভাষায়, কাফিরদের কুফর আর তাদের মূর্তিগুলোর অক্ষমতার কথা বলার পর আল্লাহ এবার নিজের পূর্ণ কুদরতের কথা বলছেন, যাতে তা তাঁর একত্বের প্রমাণ হয়। মাআরিফুল কুরআন ১৫:১৬ ও ১৫:১৭ আয়াতের আলোচনা একসঙ্গে করেছে, আর সেখানেও একই পাঠ। আগের আয়াতগুলোতে ছিল অস্বীকারকারীদের একগুঁয়েমি। এখান থেকে শুরু হচ্ছে আল্লাহর একত্ব, জ্ঞান ও কুদরতের প্রমাণের ধারা। মুয়াসসার তার ব্যাখ্যা শুরুই করে এই কথা দিয়ে: আমার কুদরতের প্রমাণগুলোর একটি হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Stars, Stations or Palaces",
          "bn": "নক্ষত্র, মনযিল, নাকি প্রাসাদ"
        },
        "p": [
          {
            "en": "What are the buruj? The commentators consulted here give several answers, and they name who held each. At-Tabari reports from Mujahid, through several chains, that buruj here are stars (kawakib), and from Qatada that they are the sky's stars (nujum). Ibn Kathir reports the same from Mujahid and Qatada. Al-Qurtubi names al-Hasan with Qatada for the reading stars, and reports from Abu Salih that they are the great stars, which he explains as the seven moving ones. Ma'arif al-Qur'an names Mujahid, Qatadah and Abu Salih for big stars.",
            "bn": "বুরূজ আসলে কী? তাফসীরকারেরা কয়েকটি উত্তর দেন, আর কোন মত কার, তাও জানিয়ে দেন। তাবারী কয়েকটি সনদে মুজাহিদ থেকে বর্ণনা করেন, এখানে বুরূজ মানে নক্ষত্র (কাওয়াকিব)। কাতাদা থেকে বর্ণনা করেন, বুরূজ হলো আকাশের তারকারাজি (নুজূম)। ইবন কাসীরও মুজাহিদ ও কাতাদা থেকে একই কথা আনেন। কুরতুবী নক্ষত্র অর্থের পক্ষে কাতাদার সঙ্গে হাসানের নাম যোগ করেন। আবু সালিহ থেকে তিনি আনেন, বুরূজ হলো বড় বড় নক্ষত্র, আর ব্যাখ্যা দেন: অর্থাৎ চলমান সাতটি। মাআরিফুল কুরআনও বড় নক্ষত্র অর্থের জন্য মুজাহিদ, কাতাদা ও আবু সালিহের নাম নেয়।"
          },
          {
            "en": "Another reading makes the buruj stations. Al-Qurtubi reports from Ibn 'Abbas that they are the buruj of the sun and the moon, meaning their stations, and Ibn Kathir notes that some held this. At-Tabari's own gloss joins the two readings: stations for the sun and the moon in the lowest heaven, which are stars in which the sun and the moon alight. Al-Baghawi joins them from the other side. He first calls buruj the great stars, then says what is meant is the stations through which the sun, the moon and the moving stars pass, twelve in number.",
            "bn": "আরেক পাঠে বুরূজ মানে মনযিল, অর্থাৎ অবস্থানস্থল। কুরতুবী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এগুলো সূর্য ও চাঁদের বুরূজ, মানে তাদের মনযিল। ইবন কাসীর জানান, কেউ কেউ এ মত পোষণ করতেন। তাবারীর নিজের ব্যাখ্যা দুটি পাঠকে এক করে দেয়। তিনি বলেন, দুনিয়ার আকাশে সূর্য ও চাঁদের জন্য মনযিল, আর সেগুলো এমন নক্ষত্র যেখানে সূর্য ও চাঁদ অবতরণ করে। বাগাভী অন্য দিক থেকে একই কাজ করেন। প্রথমে তিনি বুরূজকে বলেন বড় বড় নক্ষত্র। তারপর বলেন, উদ্দেশ্য হলো সেই মনযিলগুলো, যার মধ্য দিয়ে সূর্য, চাঁদ আর চলমান নক্ষত্রগুলো যায়। সংখ্যায় সেগুলো বারোটি।"
          },
          {
            "en": "A third reading is architectural. Al-Qurtubi's own definition is palaces and stations, and Ma'arif notes that burj is used for large palaces, castles and similar structures. Ibn Kathir and al-Baghawi report from 'Atiyya al-'Awfi that buruj here are palaces in the sky on which guards stand, and al-Qurtubi gives the same view from 'a group' and closes his list with, Allah knows best. As-Sa'di holds stars and towers together: stars like towers and great landmarks. This article takes no side among the readings.",
            "bn": "তৃতীয় পাঠটি স্থাপত্যের ভাষায়। কুরতুবীর নিজের সংজ্ঞা: প্রাসাদ ও মনযিল। মাআরিফুল কুরআন জানায়, বুরজ শব্দটি বড় প্রাসাদ, দুর্গ ও এ ধরনের স্থাপনার জন্য ব্যবহৃত হয়। ইবন কাসীর ও বাগাভী আতিয়্যা আল-আওফী থেকে বর্ণনা করেন, এখানে বুরূজ হলো আকাশের এমন প্রাসাদ, যার উপর প্রহরী আছে। কুরতুবী একই মত ‘একদল’-এর নামে আনেন, আর তালিকা শেষ করেন এই বলে: আল্লাহই ভালো জানেন। সা'দী নক্ষত্র আর মিনার দুটোকেই একসঙ্গে রাখেন: মিনার ও বড় বড় নিশানার মতো নক্ষত্র। এই লেখা কোনো পাঠের পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for What Shows",
          "bn": "যা প্রকাশ পায় তার নাম"
        },
        "p": [
          {
            "en": "Two of the commentators go behind the word. Al-Qurtubi says the root meaning of buruj is appearing, becoming manifest, and that from it comes tabarruj, a woman's display of her adornment. Al-Baghawi gives the same derivation: tabarrajat al-mar'a, the woman appeared. Al-Qurtubi also reports that al-Hasan and Qatada, reading buruj as stars, said they were so named for their visibility and their height. On this account the word already leans towards the end of the verse: the buruj are things that stand out to be seen.",
            "bn": "দুজন তাফসীরকার শব্দটির মূলে যান। কুরতুবী বলেন, বুরূজের মূল অর্থ প্রকাশ পাওয়া, স্পষ্ট হয়ে ওঠা। এখান থেকেই তাবাররুজ, মানে নারীর নিজের সাজসজ্জা প্রকাশ করা। বাগাভীও একই উৎসের কথা বলেন: তাবাররাজাতিল মারআ, অর্থাৎ নারীটি প্রকাশ্যে এল। কুরতুবী আরও জানান, হাসান ও কাতাদা বুরূজকে নক্ষত্র অর্থে নিয়ে বলেছেন, সেগুলো স্পষ্ট দেখা যায় আর অনেক উঁচুতে থাকে বলেই এই নাম। এ হিসেবে শব্দটি নিজেই আয়াতের শেষ অংশের দিকে ঝুঁকে আছে। বুরূজ এমন জিনিস, যা চোখে পড়ার জন্যই মাথা তুলে দাঁড়িয়ে।"
          },
          {
            "en": "Ibn Kathir, after reporting that Mujahid and Qatada took buruj here as the stars, sets the verse beside 25:61: blessed is He who placed buruj in the sky and placed in it a lamp and a shining moon. Ma'arif al-Qur'an also points to 25:61 and says it will give its fuller discussion of the word as-sama', and of where the stars are placed, under that verse. This article leaves that discussion where Ma'arif places it, and makes no astronomical claim of its own about the verse.",
            "bn": "মুজাহিদ ও কাতাদা এখানে বুরূজকে নক্ষত্র বলেছেন, এ কথা জানানোর পর ইবন কাসীর আয়াতটিকে রাখেন ২৫:৬১ আয়াতের পাশে: বরকতময় তিনি, যিনি আকাশে বুরূজ স্থাপন করেছেন, আর তাতে রেখেছেন এক প্রদীপ ও আলো ছড়ানো চাঁদ। মাআরিফুল কুরআনও ২৫:৬১ আয়াতের দিকে ইশারা করে। সামা শব্দের অর্থ আর নক্ষত্রগুলোর অবস্থান নিয়ে বিস্তারিত আলোচনা সে ওই আয়াতের অধীনে করবে বলে জানায়। সে আলোচনা মাআরিফ যেখানে রেখেছে, এই লেখা সেখানেই রেখে দিচ্ছে। আয়াত নিয়ে জ্যোতির্বিজ্ঞানের কোনো দাবি এখানে নিজের পক্ষ থেকে করা হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Signposts in the Dark",
          "bn": "অন্ধকারে পথের নিশানা"
        },
        "p": [
          {
            "en": "Several of the texts consulted here say what the stars were for in the lives of those who first heard the verse. Al-Muyassar says Allah placed stations in the lowest heaven in which the stars alight, and that by them people find their way to roads and to times, and to plenty and drought. Al-Qurtubi reports that the Arabs counted knowledge of the positions of the stars and their gateways among the most important of sciences, and took them as indications of roads, times, plenty and drought. He then lists the twelve buruj by name, from al-Hamal to al-Hut.",
            "bn": "আয়াতটি প্রথম যারা শুনেছিল, তাদের জীবনে নক্ষত্রের কাজ কী ছিল, কয়েকটি তাফসীরে তার উল্লেখ আছে। মুয়াসসার বলে, আল্লাহ দুনিয়ার আকাশে মনযিল বানিয়েছেন, যেখানে নক্ষত্রগুলো অবতরণ করে। এগুলো দেখে মানুষ পথ চেনে, সময় চেনে, প্রাচুর্য ও খরার আভাস পায়। কুরতুবী জানান, নক্ষত্রের অবস্থান আর তাদের দরজাগুলো চেনাকে আরবরা সবচেয়ে গুরুত্বপূর্ণ বিদ্যার মধ্যে গণ্য করত। পথ, সময়, প্রাচুর্য ও খরার জন্য তারা এগুলোকে আলামত হিসেবে ধরত। এরপর তিনি হামাল থেকে হূত পর্যন্ত বারোটি বুরূজের নাম একে একে উল্লেখ করেন।"
          },
          {
            "en": "As-Sa'di reads the verse as a sign of Allah's mercy to His creation as well as His power. The buruj, he says, are like towers and great landmarks by which people are guided through the darkness of land and sea. Al-Baghawi likewise names the twelve and ties them to the paths of the sun, the moon and the moving stars. In the texts that speak of use, the stars guide the traveller and mark the time. They serve people who need to know where they are and when they are.",
            "bn": "সা'দী আয়াতটিকে পড়েন আল্লাহর কুদরতের পাশাপাশি সৃষ্টির প্রতি তাঁর রহমতের নিদর্শন হিসেবে। তিনি বলেন, বুরূজ হলো মিনার ও বড় বড় নিশানার মতো নক্ষত্র, যা দেখে মানুষ স্থল ও সমুদ্রের অন্ধকারে পথ খুঁজে পায়। বাগাভীও বারোটির নাম নেন আর সেগুলোকে সূর্য, চাঁদ ও চলমান নক্ষত্রের পথের সঙ্গে জুড়ে দেন। যেসব তাফসীর নক্ষত্রের ব্যবহারের কথা বলে, সেখানে নক্ষত্র মুসাফিরকে পথ দেখায় আর সময়ের হিসাব রাখে। কোথায় আছি আর কখন আছি, যার এটা জানা দরকার, নক্ষত্র তার কাজে লাগে।"
          },
          {
            "en": "None of the texts consulted on this verse takes up astrology, the claim to read people's fortunes in the stars, and none sets it here against the knowledge of direction and season it describes. That question is therefore not decided in this article, in either direction. What the sources on 15:16 do describe is a sky used for finding the way and keeping time, and, as the next section shows, a sky adorned and offered as evidence of its Maker.",
            "bn": "এ আয়াতের যেসব তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই জ্যোতিষ নিয়ে কথা বলেনি, মানে নক্ষত্র দেখে মানুষের ভাগ্য পড়ার দাবি নিয়ে। দিক ও মৌসুম চেনার যে জ্ঞানের কথা তারা বলে, তার সঙ্গে জ্যোতিষের তুলনাও এখানে কেউ করেনি। তাই এই লেখা প্রশ্নটির কোনো দিকেই রায় দিচ্ছে না। ১৫:১৬ আয়াতের তাফসীরগুলো যা বলে তা হলো, আকাশ পথ চেনার আর সময় রাখার কাজে লাগে। আর পরের অংশে যেমন দেখা যাবে, এই আকাশ সাজানো হয়েছে, আর তার স্রষ্টার প্রমাণ হিসেবে সামনে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adorned, Not Merely Lit",
          "bn": "শুধু আলো নয়, সাজ"
        },
        "p": [
          {
            "en": "Wa-zayyannaha: and We adorned it. Al-Qurtubi and al-Baghawi both make the pronoun refer to the sky. At-Tabari says Allah adorned the sky with the stars, and al-Muyassar says the same. Al-Baghawi widens the adornment to the sun, the moon and the stars together. Ibn Kathir speaks of the piercing stars, al-kawakib ath-thawaqib, with which Allah adorned the sky in its height. Al-Qurtubi joins the clause to 67:5: and We have certainly adorned the nearest heaven with lamps.",
            "bn": "ওয়া যাইয়্যান্নাহা: আর আমি একে সাজিয়েছি। কুরতুবী ও বাগাভী দুজনেই সর্বনামটিকে আকাশের দিকে ফেরান। তাবারী বলেন, আল্লাহ আকাশকে নক্ষত্র দিয়ে সাজিয়েছেন। মুয়াসসারও তাই বলে। বাগাভী সাজের পরিধি বাড়িয়ে সূর্য, চাঁদ ও নক্ষত্র সবগুলোকেই এর মধ্যে ধরেন। ইবন কাসীর বলেন উজ্জ্বল ভেদকারী নক্ষত্রের কথা, আল-কাওয়াকিবুস সাওয়াকিব, যা দিয়ে আল্লাহ সুউচ্চ আকাশকে সাজিয়েছেন। কুরতুবী অংশটিকে জুড়ে দেন ৬৭:৫ আয়াতের সঙ্গে: আর আমি নিকটবর্তী আকাশকে প্রদীপমালা দিয়ে সাজিয়েছি।"
          },
          {
            "en": "As-Sa'di draws out what follows. Were it not for the stars, he says, the sky would not have this splendid view and this wondrous form, and this is among what calls the beholders to contemplate it. The verb the verse chooses is adorning, not lighting and not usefulness. The sky's service to travellers, which the texts consulted here report, is real, but in this clause the verse names beauty, and names it as something done for the ones who look.",
            "bn": "সা'দী এর ফলটা বের করে আনেন। তিনি বলেন, নক্ষত্র না থাকলে আকাশের এই ঝলমলে দৃশ্য আর এই বিস্ময়কর রূপ থাকত না। আর এটাই দর্শকদের তা নিয়ে ভাবতে ডাকে। আয়াত এখানে যে ক্রিয়া বেছে নিয়েছে, তা সাজানোর ক্রিয়া। আলো দেওয়া বা কাজে লাগানোর ক্রিয়া নয়। মুসাফিরের কাজে আকাশ লাগে, তাফসীরে তার কথা আছে, আর তা সত্যও। কিন্তু এই অংশে আয়াত নাম নিচ্ছে সৌন্দর্যের, আর বলছে এ সৌন্দর্য তাদের জন্য, যারা তাকায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Who Counts as a Beholder",
          "bn": "দর্শক কারা"
        },
        "p": [
          {
            "en": "Li-n-nazirin: for the beholders, literally those who look. The commentators read the word with different emphases. At-Tabari keeps it wide: for whoever looks at the sky and sees it. Al-Baghawi repeats the verse's own word without narrowing it. Al-Qurtubi narrows it: for those who take lesson and those who reflect. Al-Muyassar joins the two: for those who look at the sky, and contemplate, and so take lesson. The difference is of emphasis more than a dispute, but it is a real difference and worth keeping.",
            "bn": "লিন নাযিরীন: দর্শকদের জন্য, শাব্দিক অর্থে যারা তাকায় তাদের জন্য। শব্দটির ব্যাখ্যায় তাফসীরকারদের জোর ভিন্ন ভিন্ন জায়গায়। তাবারী অর্থটা খোলা রাখেন: যে-ই আকাশের দিকে তাকায় আর তা দেখে। বাগাভী আয়াতের শব্দটিই আবার বলেন, সীমা টানেন না। কুরতুবী সীমা টানেন: যারা শিক্ষা নেয় আর যারা চিন্তা করে। মুয়াসসার দুটি অর্থকে মিলিয়ে দেয়: যারা আকাশের দিকে তাকায়, ভাবে, আর তা থেকে শিক্ষা নেয়। এটা বিরোধের চেয়ে জোরের পার্থক্যই বেশি। তবু পার্থক্যটা সত্যিকারের, আর তা মনে রাখার মতো।"
          },
          {
            "en": "Ibn Kathir describes the beholder at length: whoever contemplates the sky and repeats the look into it sees wonders and dazzling signs at which his sight is left bewildered. The English abridgment of Ibn Kathir, which treats 15:16 to 15:20 together, puts it as those who ponder and look repeatedly. As-Sa'di ends where the looking is meant to end: the adornment calls the beholders to contemplate the sky, to look into its meanings, and to take it as evidence of its Maker.",
            "bn": "ইবন কাসীর দর্শকের বিস্তারিত ছবি আঁকেন। যে আকাশ নিয়ে ভাবে আর বারবার তার দিকে তাকায়, সে এমন সব বিস্ময় আর চোখধাঁধানো নিদর্শন দেখে, যার সামনে তার দৃষ্টি হতবাক হয়ে যায়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১৫:১৬ থেকে ১৫:২০ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে কথাটা এসেছে এভাবে: যারা ভাবে আর বারবার তাকায়। তাকানোর যেখানে পৌঁছানোর কথা, সা'দী সেখানেই শেষ করেন। তাঁর মতে এই সাজ দর্শকদের ডাকে আকাশ নিয়ে ভাবতে, তার অর্থের ভেতরে তাকাতে, আর তাকে তার স্রষ্টার প্রমাণ হিসেবে নিতে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guards on the Towers",
          "bn": "মিনারের প্রহরী"
        },
        "p": [
          {
            "en": "'Atiyya al-'Awfi's reading, palaces of guards, looks ahead. Ibn Kathir reports it together with the shooting flames made to guard the sky against rebellious devils, which is the subject of 15:17 and 15:18, where the guarding of the heaven and the pursuing flame are named. That ground belongs to those verses and is left for them. The grouped commentaries used above, the Ibn Kathir abridgment and Ma'arif al-Qur'an, are drawn on here only for what they say about 15:16.",
            "bn": "আতিয়্যা আল-আওফীর পাঠ, প্রহরীদের প্রাসাদ, সামনের দিকে তাকিয়ে আছে। ইবন কাসীর এ মতের সঙ্গেই আনেন সেই উল্কাশিখার কথা, যা অবাধ্য শয়তানদের থেকে আকাশ পাহারা দেওয়ার জন্য বানানো হয়েছে। এটাই ১৫:১৭ ও ১৫:১৮ আয়াতের বিষয়, যেখানে আকাশের সুরক্ষা আর পিছু ধাওয়া করা শিখার কথা সরাসরি এসেছে। সে আলোচনা ওই আয়াতগুলোর, তাই সেখানেই থাক। উপরে যে দুটি তাফসীর কয়েকটি আয়াত একসঙ্গে আলোচনা করেছে, ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আর মাআরিফুল কুরআন, সেগুলো থেকে এখানে শুধু ১৫:১৬ সম্পর্কিত কথাই নেওয়া হয়েছে।"
          },
          {
            "en": "Ibn Kathir also quotes a report from al-Bukhari at this point, but it concerns the eavesdropping named in 15:18, not the stars or the adornment of 15:16, and it is left for that verse. No tafsir consulted here attaches a hadith to the words of 15:16 itself. What remains in this verse is what any eye can check on a clear night: the sky has lights set in it, and they are beautiful.",
            "bn": "ইবন কাসীর এখানে বুখারী থেকে একটি বর্ণনাও উদ্ধৃত করেন। কিন্তু তা ১৫:১৮ আয়াতে বলা আড়ি পেতে শোনার বিষয়ে, ১৫:১৬ আয়াতের নক্ষত্র বা সাজ নিয়ে নয়। তাই সেটা ওই আয়াতের জন্যই রাখা হলো। সংগৃহীত কোনো তাফসীর ১৫:১৬ আয়াতের শব্দগুলোর সঙ্গে কোনো হাদিস যুক্ত করেনি। এ আয়াতে যা থাকে, তা যে-কোনো চোখ পরিষ্কার রাতে নিজেই যাচাই করতে পারে: আকাশে আলো বসানো আছে, আর সেগুলো সুন্দর।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Up on Purpose",
          "bn": "ইচ্ছা করে উপরে তাকানো"
        },
        "p": [
          {
            "en": "Something is visible in the text itself, though none of the commentators consulted draws it out. 15:15 ends with people who would call their own eyes dazzled even if they rose through a gate in the sky. 15:16 ends with the beholders. The first group is offered an extraordinary sight and explains it away. The second is offered an ordinary sight, the night sky, and is invited to look. The verse does not wait for a door to open. It points at what is already overhead.",
            "bn": "আয়াতের ভাষাতেই একটা জিনিস চোখে পড়ে, যদিও সংগৃহীত তাফসীরকারদের কেউ তা আলাদা করে বলেননি। ১৫:১৫ আয়াত শেষ হয় এমন লোকদের কথায়, যারা আকাশের দরজা দিয়ে উঠে গেলেও বলত, আমাদের চোখ ধাঁধিয়ে দেওয়া হয়েছে। ১৫:১৬ আয়াত শেষ হয় দর্শকদের কথায়। প্রথম দলের সামনে অসাধারণ দৃশ্য, আর তারা তা ব্যাখ্যা করে উড়িয়ে দেয়। দ্বিতীয় দলের সামনে সাধারণ দৃশ্য, রাতের আকাশ, আর তাদের ডাকা হয় তাকাতে। আয়াত কোনো দরজা খোলার অপেক্ষায় থাকে না। যা আগে থেকেই মাথার উপর, সেদিকেই আঙুল তোলে।"
          },
          {
            "en": "For the reader, this turns looking up into an act. Most of us see the sky many times a day without beholding it. The beholder in al-Qurtubi's and al-Muyassar's words is the person who reflects and takes lesson, and in Ibn Kathir's words the person who looks again. That is a choice anyone can make on any clear evening, in a city or a village, with no instrument and no special learning. The sign asks only for attention, given on purpose.",
            "bn": "পাঠকের জন্য এতে উপরের দিকে তাকানোটা হয়ে ওঠে একটা আমল। আমরা দিনে বহুবার আকাশ দেখি, কিন্তু তাকিয়ে দেখি না। কুরতুবী ও মুয়াসসারের ভাষায় দর্শক সে, যে ভাবে আর শিক্ষা নেয়। ইবন কাসীরের ভাষায় সে, যে আবার তাকায়। শহরে হোক বা গ্রামে, যে-কোনো পরিষ্কার সন্ধ্যায় যে-কেউ এ কাজটা বেছে নিতে পারে। কোনো যন্ত্র লাগে না, বিশেষ কোনো বিদ্যাও না। নিদর্শনটা শুধু মনোযোগ চায়, আর সে মনোযোগ ইচ্ছা করে দেওয়া।"
          },
          {
            "en": "The verse also asks what beauty is for. It is easy to treat the stars as a sight, something to photograph and walk past. As-Sa'di's reading makes the adornment a call: the splendour is there so that the person who looks will think about it and reach its Maker. Beauty on this reading is a sign, not an ornament that ends in itself. Whoever looks up tonight and says only how pretty has seen the sky. Whoever lets it lead further has beheld it.",
            "bn": "আয়াতটি আরও জিজ্ঞেস করে, সৌন্দর্য কীসের জন্য। নক্ষত্রকে শুধু দৃশ্য ভাবা সহজ, ছবি তুলে পাশ কাটিয়ে যাওয়ার মতো কিছু। সা'দীর পাঠে এই সাজ একটা ডাক। ঝলমলে রূপটা আছে যাতে দর্শক তা নিয়ে ভাবে আর তার স্রষ্টা পর্যন্ত পৌঁছায়। এ পাঠে সৌন্দর্য এক নিদর্শন, নিজের মধ্যেই শেষ হয়ে যাওয়া অলংকার নয়। আজ রাতে যে উপরে তাকিয়ে শুধু বলল ‘কী সুন্দর’, সে আকাশ দেখেছে। আর যে সৌন্দর্যকে তাকে আরও দূরে নিয়ে যেতে দিল, সে সত্যিই তাকিয়ে দেখেছে।"
          }
        ]
      }
    ]
  },
  "15:22": {
    "sections": [
      {
        "h": {
          "en": "The Rule Shown in Water",
          "bn": "পানির ভেতরে দেখানো নিয়ম"
        },
        "p": [
          {
            "en": "Wa-arsalna al-riyaha lawaqiha: and We sent the winds lawaqih. The verse sits inside a run of signs that begins with the sky of 15:16 and comes down to the earth of 15:19 and 15:20, spread out, pinned with mountains and made to hold a living for people and for creatures they do not feed. Then 15:21 states the rule behind all of it: there is nothing whose treasuries are not with Allah, and He sends it down only in a known measure. This verse shows that rule at work in one substance, water.",
            "bn": "ওয়া আরসালনার রিয়াহা লাওয়াকিহা: আর আমি লাওয়াকিহ বাতাস পাঠিয়েছি। আয়াতটি নিদর্শনের একটি ধারার ভেতরে বসানো। ধারাটা শুরু হয় ১৫:১৬ আয়াতের আকাশ দিয়ে, তারপর নেমে আসে ১৫:১৯ ও ১৫:২০ আয়াতের পৃথিবীতে। সে পৃথিবী বিছানো, পাহাড় দিয়ে গাঁথা, আর তাতে মানুষের জীবিকা আছে, আছে এমন প্রাণীরও যাদের রিযিক মানুষ দেয় না। এরপর ১৫:২১ আয়াত সবকিছুর পেছনের নিয়মটা বলে দেয়: এমন কিছু নেই যার ভান্ডার আল্লাহর কাছে নেই, আর তিনি তা নামান নির্দিষ্ট পরিমাণে। এ আয়াত সেই নিয়মটাই দেখায় একটিমাত্র জিনিসে, পানিতে।"
          },
          {
            "en": "The commentaries group this passage in different ways. The abridged English Ibn Kathir treats 15:21 to 15:25 as one block, and Ma'arif al-Qur'an takes 15:22 and 15:23 together; this article uses only what they say about 15:22. For 15:21, the same block records Abdullah ibn Mas'ud saying that no year has more rain than another, but Allah divides it among places as He wills. And 15:23 turns straight from water to life itself: it is We who give life and cause death, and We are the inheritors.",
            "bn": "তাফসীরগুলো এ অংশকে ভিন্ন ভিন্নভাবে একসঙ্গে ধরেছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১৫:২১ থেকে ১৫:২৫ পর্যন্ত এক খণ্ডে আলোচনা করে, আর মাআরিফুল কুরআন ১৫:২২ ও ১৫:২৩ একসঙ্গে নেয়। এ লেখায় তাদের কেবল সেই কথাগুলোই এসেছে যা ১৫:২২ নিয়ে। ১৫:২১ প্রসঙ্গে একই খণ্ডে আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর কথা আছে: কোনো বছরে অন্য বছরের চেয়ে বেশি বৃষ্টি হয় না, আল্লাহ যেভাবে চান জায়গায় জায়গায় ভাগ করে দেন। আর ১৫:২৩ আয়াত পানি থেকে সোজা চলে যায় জীবনের কথায়: আমিই জীবন দিই, মৃত্যু ঘটাই, আর আমিই শেষ উত্তরাধিকারী।"
          }
        ]
      },
      {
        "h": {
          "en": "Carrier or Fertiliser",
          "bn": "বাহক, নাকি উর্বরকারী"
        },
        "p": [
          {
            "en": "Lawaqih is the plural of laqih, and the puzzle lies in the form. A she-camel is called laqih when she has conceived and carries her young; that is how al-Baghawi and al-Qurtubi explain the word. But the wind does the fertilising, so you might expect mulqih, the word for what makes something conceive. At-Tabari records that the grammarians argued over why the Qur'an chose the word for carrying to describe something that also makes other things carry.",
            "bn": "লাওয়াকিহ শব্দটি লাকিহ-এর বহুবচন। জটিলতা শব্দের গড়নে। উটনী গর্ভ ধারণ করলে, বাচ্চা পেটে বহন করলে তাকে বলা হয় লাকিহ। বাগাভী ও কুরতুবী শব্দটিকে এভাবেই ব্যাখ্যা করেন। অথচ গর্ভসঞ্চার তো করে বাতাস নিজে। তাহলে প্রত্যাশিত শব্দ ছিল মুলকিহ, যে গর্ভসঞ্চার করায়। তাবারী জানান, ব্যাকরণবিদেরা এ নিয়ে তর্ক করেছেন। যে জিনিস অন্যকে বহন করায়, কুরআন তাকে বহনকারীর শব্দে কেন বর্ণনা করল?"
          },
          {
            "en": "Then at-Tabari gives his own view: the winds are lawaqih as Allah described them, and they carry and fertilise at once. Their carrying is that they bear the water; their fertilising is their work on the clouds and the trees, and he says this is what Ibn Mas'ud meant. Al-Qurtubi reaches a similar place by another road. After listing carrying, fertilising and possessing fertility, he says that all of it is sound.",
            "bn": "এরপর তাবারী নিজের মত দেন। আল্লাহ বাতাসকে যেমন বর্ণনা করেছেন, সে তেমনই লাওয়াকিহ। সে একসঙ্গে বহনও করে, উর্বরও করে। তার বহন করা মানে পানি ধারণ করা। আর তার উর্বর করা মানে মেঘ ও গাছের উপর তার কাজ। তাঁর মতে ইবন মাসউদ (রাঃ) এ কথাই বুঝিয়েছেন। কুরতুবী অন্য পথে প্রায় একই জায়গায় পৌঁছান। বহন, উর্বরকরণ আর উর্বরতার অধিকারী হওয়া, তিনটি অর্থ তুলে ধরে তিনি বলেন, সবগুলোই সঠিক।"
          }
        ]
      },
      {
        "h": {
          "en": "Clouds, Trees or Both",
          "bn": "মেঘ, গাছ, নাকি দুটোই"
        },
        "p": [
          {
            "en": "The early reports split over what the winds fertilise. For the clouds, at-Tabari carries Ibn Mas'ud: Allah sends the winds, they bear the water and work the clouds, and the clouds flow as a milking camel flows, and then it rains. Ibrahim an-Nakha'i says only that they fertilise the clouds; Qatadah, that they fertilise the water in the clouds; ad-Dahhak, that Allah sends them onto the clouds, fertilises them and they fill with water.",
            "bn": "বাতাস কাকে উর্বর করে, এ প্রশ্নে প্রথম যুগের বর্ণনাগুলো ভাগ হয়ে যায়। মেঘের পক্ষে তাবারী আনেন ইবন মাসউদ (রাঃ)-এর কথা: আল্লাহ বাতাস পাঠান, বাতাস পানি বয়ে আনে আর মেঘকে দোহন করে। তখন মেঘ ঝরতে থাকে, যেভাবে দুধেল উটনীর দুধ ঝরে, তারপর বৃষ্টি নামে। ইবরাহীম নাখাঈ শুধু বলেন, বাতাস মেঘকে উর্বর করে। কাতাদাহর মতে সে মেঘের ভেতরের পানিকে উর্বর করে। দাহহাক বলেন, আল্লাহ বাতাসকে মেঘের উপর পাঠান, সে মেঘকে উর্বর করে, আর মেঘ পানিতে ভরে যায়।"
          },
          {
            "en": "For the trees, Ubayd ibn Umayr describes four winds in turn. Allah sends the bringer of good news, which sweeps the ground; then the raiser, which stirs up clouds; then the joiner, which gathers them together; then the lawaqih, which fertilise the trees. Then he recited this verse. Al-Baghawi reports Abu Ubayda reading lawaqih as malaqih because they fertilise trees. At-Tabari has al-Hasan saying the winds are lawaqih for the trees, and, when asked about the clouds, adding that they are for the clouds too, working them until it rains.",
            "bn": "গাছের পক্ষে উবাইদ ইবন উমাইর পরপর চারটি বাতাসের কথা বলেন। আল্লাহ প্রথমে পাঠান সুসংবাদবাহী বাতাস, যা মাটি ঝাড়ু দিয়ে যায়। তারপর উত্তোলক বাতাস, যা মেঘ জাগিয়ে তোলে। তারপর মিলনকারী বাতাস, যা মেঘগুলোকে জোড়া লাগায়। শেষে লাওয়াকিহ, যা গাছকে উর্বর করে। এরপর তিনি এ আয়াত তেলাওয়াত করেন। বাগাভী জানান, আবু উবাইদা লাওয়াকিহ-কে মালাকিহ অর্থে পড়েছেন, কারণ বাতাস গাছকে উর্বর করে। তাবারীর বর্ণনায় হাসান বলেন, বাতাস গাছের জন্য লাওয়াকিহ। মেঘের কথা জিজ্ঞেস করা হলে তিনি যোগ করেন, মেঘের জন্যও, বাতাস মেঘকে দোহন করে যতক্ষণ না বৃষ্টি নামে।"
          },
          {
            "en": "Several later voices hold both sides together. At-Tabari reports Ibn Abbas, through Ibn Jurayj, saying the winds fertilise the trees and work the clouds. Ibn Kathir opens his comment the same way: they fertilise the clouds so that they yield water, and the trees so that they open into leaves and blossoms. Al-Muyassar says so as well and adds that the winds carry rain, good and benefit. As-Sa'di keeps to the clouds, calling them winds of mercy that fertilise the clouds as the male fertilises the female.",
            "bn": "পরের অনেকে দুটো দিককে একসঙ্গে ধরেন। তাবারী ইবন জুরাইজের সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: বাতাস গাছকে উর্বর করে, আর মেঘকে দোহন করে। ইবন কাসীরও তাঁর আলোচনা এভাবেই শুরু করেন: বাতাস মেঘকে উর্বর করে, তাই মেঘ পানি ঝরায়; আর গাছকে উর্বর করে, তাই গাছে পাতা আর কলি ফোটে। মুয়াসসারও তা-ই বলে, সঙ্গে যোগ করে যে বাতাস বৃষ্টি, কল্যাণ আর উপকার বয়ে আনে। সা'দী মেঘের কথাতেই থাকেন। তাঁর ভাষায় এগুলো রহমতের বাতাস, যা মেঘকে উর্বর করে যেভাবে পুরুষ স্ত্রীকে করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Many Winds, One Barren Wind",
          "bn": "অনেক বাতাস, একটি বন্ধ্যা বাতাস"
        },
        "p": [
          {
            "en": "Ibn Kathir notices the number of the noun. These winds come in the plural so that something may be produced from them, whereas the barren wind of 51:41 is singular and called barren, since producing needs two or more. Al-Baghawi says the barren wind brings punishment and fertilises nothing. Qatadah, in at-Tabari, puts it briefly: among the winds are punishment and mercy. On the reading, al-Qurtubi notes that most readers say al-riyah while Hamza reads al-rih, and both he and at-Tabari explain that a singular wind can carry a plural sense.",
            "bn": "ইবন কাসীর বিশেষ্যের বচনের দিকে নজর দেন। এখানে বাতাস এসেছে বহুবচনে, যাতে তা থেকে কিছু জন্মাতে পারে। অথচ ৫১:৪১ আয়াতের বন্ধ্যা বাতাস একবচনে, আর তাকে বন্ধ্যা বলা হয়েছে, কারণ কিছু জন্মাতে দুই বা তার বেশি লাগে। বাগাভী বলেন, বন্ধ্যা বাতাস আযাব নিয়ে আসে, কিছুই উর্বর করে না। তাবারীর বর্ণনায় কাতাদাহ এক বাক্যে বলেন: বাতাসের কিছু আযাব, কিছু রহমত। কিরাআত প্রসঙ্গে কুরতুবী জানান, বেশিরভাগ কারী পড়েন আর-রিয়াহ, আর হামযাহ পড়েন আর-রীহ। তিনি ও তাবারী দুজনেই বুঝিয়ে দেন, একবচনের বাতাসও বহুবচনের অর্থ বহন করতে পারে।"
          },
          {
            "en": "No sound hadith in the commentaries consulted here is attached to this verse. At-Tabari narrates from Abu Hurayra that the south wind is from Paradise and is the fertilising wind Allah mentions in His Book, but Ibn Kathir, quoting the same report, calls its chain weak, and this article does not build on it. What can be offered is a general narration, not tied to this verse, about how the Prophet ﷺ met the wind.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তাতে এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদিস নেই। তাবারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে দক্ষিণা বাতাস জান্নাত থেকে আসে, আর এটিই সেই উর্বরকারী বাতাস যার কথা আল্লাহ তাঁর কিতাবে বলেছেন। কিন্তু একই বর্ণনা উদ্ধৃত করে ইবন কাসীর বলেন, এর সনদ দুর্বল। তাই এ লেখা এর উপর দাঁড়ায় না। যা দেওয়া যায় তা একটি সাধারণ বর্ণনা, এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়। বাতাস এলে নবী ﷺ কীভাবে তার মুখোমুখি হতেন, সে কথা।"
          },
          {
            "en": "Muslim records from A'isha: \"Whenever the wind was stormy, the Messenger of Allah (ﷺ) used to say: O Allah! I ask Thee for what is good in it, and the good which it contains, and the good of that which it was sent for. I seek refuge with Thee from what is evil in it, what evil it contains, and the evil of that which it was sent for.\" The same report goes on to describe his relief when the rain actually came.",
            "bn": "মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন: “যখনই ঝড়ো বাতাস বইত, রাসূলুল্লাহ ﷺ বলতেন: হে আল্লাহ! আমি আপনার কাছে চাই এর কল্যাণ, এর ভেতরে যে কল্যাণ আছে তা, আর যে কল্যাণ নিয়ে একে পাঠানো হয়েছে তা। আর আপনার কাছে আশ্রয় চাই এর অকল্যাণ থেকে, এর ভেতরের অকল্যাণ থেকে, আর যে অকল্যাণ নিয়ে একে পাঠানো হয়েছে তা থেকে।” একই বর্ণনায় এরপর আছে, বৃষ্টি সত্যিই নামলে তাঁর মুখে স্বস্তি ফিরে আসত।"
          }
        ]
      },
      {
        "h": {
          "en": "More Than a Cup",
          "bn": "এক গ্লাসের চেয়ে বেশি"
        },
        "p": [
          {
            "en": "Fa-anzalna mina al-sama'i ma'an: so We sent down water from the sky. Al-Qurtubi says the sky here means the clouds, since whatever is above you and shades you is called sama', or else the direction of the sky. Then fa-asqaynakumuhu, and We gave it to you to drink. At-Tabari reads the verb closely. He glosses it as rain given for your land and your livestock to drink, and argues that had the meaning been only for you to drink it yourselves, the verse would have said saqaynakumuhu.",
            "bn": "ফা আনযালনা মিনাস সামায়ি মাআন: অতঃপর আমি আকাশ থেকে পানি নামিয়েছি। কুরতুবী বলেন, এখানে আকাশ মানে মেঘ, কারণ যা কিছু মাথার উপরে থেকে ছায়া দেয় তাকেই সামা বলা হয়। অথবা এর মানে আকাশের দিক থেকে। তারপর ফা আসকাইনাকুমূহু: আর তা তোমাদের পান করিয়েছি। তাবারী ক্রিয়াটি খুঁটিয়ে পড়েন। তাঁর ব্যাখ্যায় এর অর্থ, সে বৃষ্টি দিয়েছি তোমাদের জমি আর পশুকে পান করানোর জন্য। তাঁর যুক্তি হলো, অর্থ যদি কেবল নিজে পান করা হতো, তবে আয়াতে আসত সাকাইনাকুমূহু।"
          },
          {
            "en": "The reason, at-Tabari explains, is Arab usage: saqa is used when you hand a man water or milk to drink, and asqa when you provide water for his land or his animals. Al-Baghawi draws the same line and glosses the verb as making the rain a supply for you. Al-Qurtubi records both positions, that the two verbs mean the same and that they differ. Al-Muyassar speaks of water prepared for your drinking, your land and your herds. On this reading the gift is not a cup but a whole year of fields and flocks.",
            "bn": "কারণটা তাবারী ব্যাখ্যা করেন আরবদের ব্যবহার দিয়ে। কাউকে পানি বা দুধ হাতে তুলে পান করালে বলা হয় সাকা। আর কারও জমি বা পশুর জন্য পানির ব্যবস্থা করে দিলে বলা হয় আসকা। বাগাভীও একই পার্থক্য টানেন। তাঁর ব্যাখ্যায় ক্রিয়াটির মানে, বৃষ্টিকে তোমাদের জন্য পানির জোগান বানিয়ে দেওয়া। কুরতুবী দুটি মতই উল্লেখ করেন: দুই ক্রিয়ার অর্থ এক, আবার দুটো আলাদা। মুয়াসসার বলে, এ পানি প্রস্তুত রাখা হয়েছে তোমাদের পান করার জন্য, তোমাদের জমি আর গবাদি পশুর জন্য। এ পাঠে দানটা এক গ্লাস পানি নয়, সারা বছরের খেত আর পশুপাল।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Storehouse Holds It",
          "bn": "কার ভান্ডারে জমা থাকে"
        },
        "p": [
          {
            "en": "Wa ma antum lahu bi-khazinin: and you are not its keepers. The commentators take khazin in two directions. The first is withholding. Sufyan, named by Ibn Kathir as ath-Thawri, glosses it as not able to withhold it. At-Tabari builds his reading on that: you are not the keepers of the water We sent down, able to keep it from those I choose to give it to, because that is in My hand; I give it to whom I will and withhold it from whom I will.",
            "bn": "ওয়ামা আনতুম লাহু বিখাযিনীন: আর তোমরা এর ভান্ডাররক্ষী নও। খাযিন শব্দটিকে মুফাসসিররা দুই দিকে নেন। প্রথম দিক আটকে রাখা। সুফইয়ান, ইবন কাসীর যাঁর পরিচয় দেন সাওরী বলে, এর ব্যাখ্যা করেন: তোমরা তা আটকাতে পারো না। তাবারী এর উপরেই নিজের পাঠ দাঁড় করান। যে পানি আমি নামিয়েছি, তোমরা তার রক্ষক নও যে যাকে আমি দিতে চাই তার কাছ থেকে তা আটকে দেবে। কারণ এ বিষয় আমার হাতে। আমি যাকে চাই দিই, যার থেকে চাই ফিরিয়ে রাখি।"
          },
          {
            "en": "The second direction is storing. Al-Qurtubi says its treasuries are not with you: We are the keepers of this water, sending it down when We will and holding it when We will. Al-Baghawi says the rain is in Our treasuries, not in yours. As-Sa'di says you have no power to store it or save it up, but Allah stores it for you and runs it as springs in the earth, out of mercy and kindness to you.",
            "bn": "দ্বিতীয় দিক জমিয়ে রাখা। কুরতুবী বলেন, এর ভান্ডার তোমাদের কাছে নেই। এ পানির রক্ষক আমরা, যখন চাই নামাই, যখন চাই ধরে রাখি। বাগাভী বলেন, বৃষ্টি আমার ভান্ডারে, তোমাদের ভান্ডারে নয়। সা'দী বলেন, তা জমা করে রাখার বা সঞ্চয় করার ক্ষমতা তোমাদের নেই। আল্লাহই তোমাদের জন্য তা জমা রাখেন আর মাটির ভেতরে ঝরনা হিসেবে বইয়ে দেন, তোমাদের প্রতি রহমত আর অনুগ্রহ হিসেবে।"
          },
          {
            "en": "Ibn Kathir gives the storing sense as a possibility, introduced with the words it may mean: you are not its guardians; rather We send it down and keep it for you, and make it flow in springs on the earth. Had Allah willed, he says, He could have made it sink away; but out of His mercy He made it sweet and kept it in springs, wells and rivers, so that it lasts through the year for drinking and for watering herds, crops and fruit. The two directions differ in emphasis, and each has its own names behind it.",
            "bn": "ইবন কাসীর জমিয়ে রাখার অর্থটি আনেন একটি সম্ভাবনা হিসেবে, 'এর অর্থ এমনও হতে পারে' বলে: তোমরা এর হেফাজতকারী নও। বরং আমিই তা নামাই, তোমাদের জন্য সংরক্ষণ করি, আর মাটিতে ঝরনা করে বইয়ে দিই। তিনি বলেন, আল্লাহ চাইলে তা মাটির গভীরে নামিয়ে হারিয়ে দিতে পারতেন। কিন্তু রহমত করে তিনি তা মিঠা করেছেন, আর ঝরনা, কূপ ও নদীতে জমা রেখেছেন, যাতে সারা বছর মানুষ পান করতে পারে, পশু, ফসল আর ফলের বাগানে পানি দিতে পারে। দুই দিকের জোর আলাদা জায়গায়, আর প্রতিটির পেছনে আছে নিজস্ব নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Nobody Can Buy",
          "bn": "যে পানি কেনা যায় না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, which comments on 15:22 and 15:23 together, reads this verse as a hint at an arrangement that brings water to every human being, animal and bird, wherever and whenever they need it. Its sharpest point concerns price. The water itself costs nothing. Those who dig a well or lay a pipe pay only for the means of reaching it; nobody can pay for a single drop, and nobody has ever been asked to.",
            "bn": "মাআরিফুল কুরআন ১৫:২২ ও ১৫:২৩ একসঙ্গে আলোচনা করে। তার পাঠে এ আয়াত এমন এক ব্যবস্থার দিকে ইশারা, যা প্রতিটি মানুষ, পশু আর পাখির কাছে পানি পৌঁছে দেয়, যেখানে যখন দরকার। তার সবচেয়ে তীক্ষ্ণ কথাটা দাম নিয়ে। পানির নিজের কোনো দাম নেই। যে কূপ খোঁড়ে বা পাইপ বসায়, সে দাম দেয় কেবল পানি পর্যন্ত পৌঁছানোর উপকরণের। এক ফোঁটা পানির দামও কেউ দিতে পারে না, কাউকে দিতে বলাও হয়নি।"
          },
          {
            "en": "On the words you are not its keepers, Ma'arif imagines the alternative: rain only in certain months, with each person keeping a yearly share in his own custody. Who could gather containers for months on end, and how long would stored water stay fit to drink? So, it says, the water is kept another way: some used at once by fields and people, some resting in ponds and lakes, some held as ice on mountain peaks, and some running beneath the ground, where a dug well reaches it.",
            "bn": "তোমরা এর ভান্ডাররক্ষী নও, এ কথার ব্যাখ্যায় মাআরিফ উল্টো ছবিটা কল্পনা করে। ধরুন বৃষ্টি হতো শুধু কয়েক মাস, আর প্রত্যেককে সারা বছরের ভাগ বুঝিয়ে দিয়ে বলা হতো নিজের জিম্মায় রাখতে। মাসের পর মাসের পানি ধরার মতো পাত্র কে জোগাড় করত? আর জমানো পানি কত দিন পানের যোগ্য থাকত? তাই তার ভাষায়, আল্লাহর কুদরত সংরক্ষণের আরেক ব্যবস্থা করেছে। কিছু পানি সঙ্গে সঙ্গে খেত আর মানুষের কাজে লাগে। কিছু জমে পুকুর আর হ্রদে। কিছু বরফ হয়ে থাকে পাহাড়ের চূড়ায়। আর কিছু বয়ে চলে মাটির নিচে, কূপ খুঁড়লে যেখানে পৌঁছানো যায়।"
          },
          {
            "en": "Ma'arif also explains, in the terms of its own time, how the water is carried and made sweet; that explanation is Ma'arif's view, reported as such, not the verse's own claim. It ends by counting six blessings: water created, carried to every region, made drinkable, offered to drink, gathered and kept, and the ability to benefit from it, which hardship can take away even when water is near.",
            "bn": "পানি কীভাবে বয়ে আনা হয় আর মিঠা করা হয়, মাআরিফ তা নিজের সময়ের ভাষায়ও ব্যাখ্যা করে। সে ব্যাখ্যা মাআরিফের মত, এখানে সেভাবেই উল্লেখ করা হলো, আয়াতের নিজের দাবি হিসেবে নয়। শেষে সে ছয়টি নেয়ামত গোনে। পানির সৃষ্টি, প্রতিটি অঞ্চলে তা পৌঁছানো, পানের উপযোগী করা, পান করার সুযোগ, জমা ও সংরক্ষণের ব্যবস্থা, আর তা থেকে উপকার নেওয়ার সামর্থ্য। কারণ পানি হাতের কাছে থাকলেও বিপদ সে সামর্থ্য কেড়ে নিতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "Drinking What I Do Not Own",
          "bn": "যে পানির মালিক আমি নই"
        },
        "p": [
          {
            "en": "Look at who acts in this verse. We sent the winds, We sent down water, We gave it to you to drink. Only one clause describes the listener, and it describes him by denial: you are not its keepers. Whichever reading one follows, that we cannot withhold it or that we cannot store it, the conclusion for the reader is the same. I may manage a tank, a pipe or a tap, but I do not hold the source, and I could not bring a single spring back if Allah let it sink away.",
            "bn": "খেয়াল করুন, এ আয়াতে কাজ করছেন কে। আমি বাতাস পাঠিয়েছি, আমি পানি নামিয়েছি, আমি তা তোমাদের পান করিয়েছি। শ্রোতার বর্ণনা আছে একটিমাত্র বাক্যে, তাও না-বাচক: তোমরা এর ভান্ডাররক্ষী নও। আটকাতে না পারার পাঠই ধরুন আর জমাতে না পারার পাঠই ধরুন, পাঠকের জন্য উপসংহার একই। ট্যাংক, পাইপ বা কল আমি সামলাতে পারি। কিন্তু উৎস আমার হাতে নেই। আল্লাহ যদি একটা ঝরনাও মাটির গভীরে হারিয়ে দেন, তা ফিরিয়ে আনার সাধ্য আমার নেই।"
          },
          {
            "en": "The fitting answer to a gift is thanks. Al-Muyassar and as-Sa'di both close their comment by calling the keeping of water a mercy and a kindness to us, and Ibn Kathir cites 56:68 to 56:70 beside this verse, a passage that ends by asking why people do not give thanks. Gratitude here can be small and concrete: remembering the Giver before the first sip, noticing rain as something sent rather than something that merely happens, and asking, as the Prophet ﷺ did, for the good that the wind was sent with.",
            "bn": "দানের যোগ্য জবাব শুকরিয়া। মুয়াসসার ও সা'দী দুজনেই আলোচনা শেষ করেন এই বলে যে পানি সংরক্ষণ আমাদের প্রতি রহমত আর অনুগ্রহ। আর এ আয়াতের পাশে ইবন কাসীর ৫৬:৬৮ থেকে ৫৬:৭০ আয়াত উদ্ধৃত করেন, যার শেষ প্রশ্নই হলো, কেন তোমরা শুকরিয়া আদায় করো না। এখানে শুকরিয়া ছোট আর বাস্তব হতে পারে। প্রথম চুমুকের আগে দাতাকে মনে করা। বৃষ্টিকে এমনি ঘটে যাওয়া ঘটনা না ভেবে পাঠানো দান হিসেবে দেখা। আর নবী ﷺ যেমন চাইতেন, তেমনি বাতাস যে কল্যাণ নিয়ে এসেছে তা আল্লাহর কাছে চাওয়া।"
          },
          {
            "en": "Then there is waste. Ma'arif's remark that nobody pays for a drop cuts both ways, because what costs nothing can start to feel worth nothing. A trustee who does not own what passes through his hands has no right to squander it. So the verse leaves the reader with plain habits: turn the tap off, use no more than the task needs, and remember those whose water is scarce or unsafe. Water I did not make, cannot keep and could lose is water to be used with care and shared.",
            "bn": "এরপর অপচয়ের প্রশ্ন। কেউ এক ফোঁটার দামও দেয় না, মাআরিফের এ কথার দুটো দিক আছে। যা বিনা মূল্যে আসে, ধীরে ধীরে তা মূল্যহীন মনে হতে থাকে। যে আমানতদার হাত দিয়ে যাওয়া জিনিসের মালিক নয়, তা নষ্ট করার অধিকারও তার নেই। তাই আয়াতটি পাঠকের হাতে কয়েকটি সহজ অভ্যাস তুলে দেয়। কল বন্ধ করুন। কাজে যতটুকু লাগে তার বেশি খরচ করবেন না। আর মনে রাখুন তাদের কথা, যাদের পানি কম বা নিরাপদ নয়। যে পানি আমি বানাইনি, জমাতে পারি না, আর হারাতেও পারি, তা যত্নে ব্যবহার করতে হয় আর ভাগ করে নিতে হয়।"
          }
        ]
      }
    ]
  },
  "15:26": {
    "sections": [
      {
        "h": {
          "en": "From the Gathering to Origins",
          "bn": "হাশরের কথা থেকে শুরুর কথায়"
        },
        "p": [
          {
            "en": "Wa-laqad khalaqna al-insana min salsalin min hama'in masnun: and We certainly created man from salsal, from hama' masnun. The verses before it have been counting what Allah holds in His hand: the winds and the rain in 15:22, life, death and the final inheritance in 15:23, knowledge of those who went before and those still to come in 15:24, and the gathering of them all in 15:25. Having said where people end, the surah turns to where the first of them began, and opens the story of Adam (AS) and Iblis that runs on through the passage.",
            "bn": "ওয়া লাকাদ খালাকনাল ইনসানা মিন সালসালিন মিন হামাইম মাসনূন: আর আমি অবশ্যই মানুষকে সৃষ্টি করেছি সালসাল থেকে, হামা মাসনূন থেকে। আগের আয়াতগুলো গুনে গুনে দেখাচ্ছিল, কী কী আল্লাহর হাতে। ১৫:২২ আয়াতে বাতাস আর বৃষ্টি, ১৫:২৩ আয়াতে জীবন, মৃত্যু আর শেষ উত্তরাধিকার, ১৫:২৪ আয়াতে আগে যারা চলে গেছে আর পরে যারা আসবে তাদের সবার খবর, ১৫:২৫ আয়াতে সবাইকে একত্র করা। মানুষের শেষ ঠিকানা কোথায়, তা বলার পর সূরা ফিরে যায় প্রথম মানুষের শুরুর কথায়। এখান থেকেই শুরু হয় আদম (আঃ) আর ইবলীসের কাহিনি, যা গোটা অংশজুড়ে চলতে থাকে।"
          },
          {
            "en": "Every commentator consulted for this verse takes al-insan here to mean Adam (AS). At-Tabari, al-Qurtubi, al-Baghawi and as-Sa'di say so in words, and the Muyassar writes his name straight into its paraphrase. As-Sa'di reads the whole passage as Allah recalling His favour and kindness to our father Adam, and what befell him from his enemy Iblis. Folded inside the story, he says, is a warning to us against that enemy's evil and the trials he brings.",
            "bn": "এ আয়াতের যে কটি তাফসীর হাতে আছে, সবকটিই বলছে, এখানে আল-ইনসান মানে আদম (আঃ)। তাবারী, কুরতুবী, বাগাভী আর সা'দী কথাটা সরাসরি বলেছেন, আর মুয়াসসার তো ব্যাখ্যার ভেতরে তাঁর নামই বসিয়ে দিয়েছে। সা'দীর চোখে পুরো অংশে আল্লাহ আমাদের পিতা আদমের প্রতি তাঁর নিয়ামত ও অনুগ্রহের কথা মনে করিয়ে দিচ্ছেন, আর জানাচ্ছেন তাঁর শত্রু ইবলীসের হাতে তাঁর উপর কী ঘটেছিল। তিনি বলেন, এ কাহিনির ভেতরেই আমাদের জন্য সতর্কবাণী গাঁথা আছে: সেই শত্রুর অনিষ্ট আর তার ফিতনা থেকে সাবধান থাকতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Clay That Rings When Tapped",
          "bn": "টোকা দিলে যে মাটি বাজে"
        },
        "p": [
          {
            "en": "Salsal first. At-Tabari opens by saying that the people of interpretation differed over it. Some said it is dry clay that no fire has touched: tap it and it sounds, and you hear its salsala, its ringing. He brings this from Qatadah, and from Mujahid as simply dry earth. From Ibn Abbas he brings pictures of how such clay comes about: water falls on good earth and then draws back from it, the ground cracks, and it turns into something like thin potsherds. In another report Ibn Abbas calls it dry earth that is wetted after it has dried.",
            "bn": "প্রথমে সালসাল। তাবারী শুরুতেই জানান, তাফসীরবিদেরা এর অর্থ নিয়ে একমত হননি। কারও কারও মতে এ হলো শুকনো মাটি, যাকে আগুন ছোঁয়নি। টোকা দিলে শব্দ করে, তার সালসালা বা ঠনঠন আওয়াজ কানে আসে। এ কথা তিনি আনেন কাতাদা থেকে, আর মুজাহিদ থেকে আনেন কেবল শুকনো মাটি অর্থটি। ইবন আব্বাস থেকে তিনি আনেন এমন মাটি কীভাবে তৈরি হয় তার ছবি: ভালো মাটির উপর পানি পড়ে, তারপর সরে যায়, মাটি ফেটে যায়, আর হয়ে ওঠে পাতলা খোলামকুচির মতো। আরেক বর্ণনায় ইবন আব্বাস বলেন, এ হলো এমন মাটি, যা শুকিয়ে যাওয়ার পর আবার ভেজানো হয়েছে।"
          },
          {
            "en": "The others agree in substance. Ad-Dahhak, in at-Tabari, calls it hard clay with sand mixed in. Al-Qurtubi gives the definition of Abu Ubayda: pure clay mixed with sand, so that it rings when it dries, and once it is baked in fire it becomes fakhkhar, pottery. He calls this the view of most of the commentators. Al-Baghawi reports Ibn Abbas describing clay from which the water has drained away, so that it cracked and rattles when it is moved. The Muyassar and as-Sa'di both write the sound into their paraphrase, and as-Sa'di says it rang like pottery.",
            "bn": "বাকিরাও মূল কথায় একমত। তাবারীর বর্ণনায় দাহহাক একে বলেন বালি মেশানো শক্ত মাটি। কুরতুবী আনেন আবু উবাইদার সংজ্ঞা: বালি মেশানো খাঁটি মাটি, যা শুকালে ঠনঠন করে বাজে, আর আগুনে পোড়ালে হয় ফাখখার, মানে পোড়ামাটির পাত্র। কুরতুবীর মতে অধিকাংশ তাফসীরকারের কথা এটাই। বাগাভী ইবন আব্বাসের বর্ণনা আনেন: এমন মাটি, যার পানি শুকিয়ে সরে গেছে, ফলে তা ফেটে গেছে, আর নাড়া দিলে খটখট করে। মুয়াসসার আর সা'দী দুজনেই ব্যাখ্যায় শব্দের কথাটা রেখেছেন। সা'দী বলেন, সে মাটি বাজত পোড়ামাটির পাত্রের মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Clay Gone Off",
          "bn": "নাকি পচে যাওয়া মাটি"
        },
        "p": [
          {
            "en": "Against this stands a second reading. Mujahid, by a chain at-Tabari gives through Ibn Abi Najih, said salsal is al-muntin, what stinks, though the same Mujahid is also reported as saying dry earth. At-Tabari explains how those who held it took the word: from the Arab saying salla al-lahmu and asalla, when meat goes off, both forms being in use. Al-Baghawi and al-Qurtubi add that the grammarian al-Kisa'i chose this reading. Al-Qurtubi notes that on this account salsal is salal at root, with a lam changed into a sad.",
            "bn": "এর বিপরীতে আছে দ্বিতীয় একটি পাঠ। ইবন আবী নাজীহের মাধ্যমে তাবারী যে সূত্র দেন, তাতে মুজাহিদ বলেন, সালসাল মানে আল-মুনতিন, যা দুর্গন্ধ ছড়ায়। অবশ্য এই মুজাহিদ থেকেই শুকনো মাটির অর্থও বর্ণিত আছে। যারা এ মত নিয়েছেন তারা শব্দটা কোথা থেকে ধরেছেন, তাবারী তা বুঝিয়ে দেন। আরবরা মাংস পচে গেলে বলে সাল্লাল লাহমু, আবার আসাল্লা, দুটো রূপই চলে। বাগাভী আর কুরতুবী যোগ করেন, ব্যাকরণবিদ কিসাঈ এই পাঠটিই বেছে নিয়েছিলেন। কুরতুবী বলেন, এ মত অনুযায়ী সালসালের মূল রূপ সালাল, যার একটি লাম বদলে সাদ হয়ে গেছে।"
          },
          {
            "en": "At-Tabari then decides. The more fitting reading, he says, is the one with sound, because Allah described the same material elsewhere: He created man from salsal like fakhkhar (55:14), likening it to pottery in its dryness. Had the meaning been putrid, He would not have likened it to pottery, since pottery does not stink and so cannot be the likeness for something that does. Ibn Kathir reaches the same side more briefly: the apparent sense matches 55:14, and explaining a verse by a verse is more fitting. Yet both record Mujahid's view by name, and al-Kisa'i's choice still stands in al-Baghawi and al-Qurtubi.",
            "bn": "এরপর তাবারী নিজের রায় দেন। তাঁর মতে আওয়াজের অর্থটাই বেশি মানানসই। কারণ আল্লাহ অন্য জায়গায় একই উপাদানের বর্ণনা দিয়েছেন: তিনি মানুষকে সৃষ্টি করেছেন ফাখখারের মতো সালসাল থেকে (৫৫:১৪)। শুকনো হওয়ার দিক থেকেই আল্লাহ একে পোড়ামাটির পাত্রের সঙ্গে তুলনা করেছেন। অর্থ যদি পচা দুর্গন্ধ হতো, তবে পোড়ামাটির সঙ্গে তুলনা আসত না। পোড়ামাটিতে তো দুর্গন্ধ নেই, তাই দুর্গন্ধের উপমা হিসেবে তাকে টানা যায় না। ইবন কাসীরও আরও সংক্ষেপে একই দিকে যান: বাহ্যিক অর্থ ৫৫:১৪ আয়াতের সঙ্গে মেলে, আর আয়াত দিয়ে আয়াতের ব্যাখ্যাই বেশি উপযুক্ত। তবু দুজনেই মুজাহিদের মত তাঁর নাম ধরে উল্লেখ করেছেন, আর কিসাঈর পছন্দ বাগাভী ও কুরতুবীর কিতাবে আজও লেখা আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Dark Mud, Many Readings",
          "bn": "কালো কাদার নানা পাঠ"
        },
        "p": [
          {
            "en": "Then min hama'in masnun. Al-Qurtubi reads this min as naming the kind of salsal it was, the way one says I took this from a man of the Arabs, and Ibn Kathir glosses it the same way: the salsal came from hama'. Hama', at-Tabari says, is the plural of ham'a, clay that has changed towards black. Al-Baghawi and al-Qurtubi both call it black clay, and al-Qurtubi lists the words that grow from it, as when a well fills with this black silt or is cleared of it. Ibn Kathir glosses it simply as clay. The real dispute lies in masnun.",
            "bn": "এরপর মিন হামাইম মাসনূন। কুরতুবী বলেন, এই মিন বলে দিচ্ছে সালসাল কোন জাতের ছিল, যেমন কেউ বলে, এটা আমি আরবদের একজনের কাছ থেকে নিয়েছি। ইবন কাসীরের ব্যাখ্যাও তাই: সালসাল এসেছে হামা থেকে। তাবারী বলেন, হামা শব্দটি হামআর বহুবচন, মানে যে মাটি বদলে কালচে হয়ে গেছে। বাগাভী আর কুরতুবী দুজনেই একে বলেন কালো মাটি। কুরতুবী এ শব্দ থেকে তৈরি আরও কিছু শব্দ দেখান, যেমন কুয়ায় এই কালো পলি জমে যাওয়া বা তা তুলে ফেলার শব্দ। ইবন কাসীর একে শুধু মাটি বলেই ব্যাখ্যা করেন। আসল মতভেদ মাসনূন শব্দে।"
          },
          {
            "en": "Most reports make it altered. At-Tabari glosses masnun as al-mutaghayyir, the changed, and brings from Ibn Abbas, Mujahid, Qatadah and ad-Dahhak that it is what has gone putrid. Elsewhere Ibn Abbas calls it wetted earth gone foul that was then made salsal like pottery. Al-Qurtubi traces the sense to asana al-ma', said of water that has turned, and also gives al-Farra's root: sanantu al-hajara, I rubbed stone on stone, whose scrapings are foul, the root that gives misann, a whetstone. At-Tabari reports that same explanation from an unnamed Kufan scholar.",
            "bn": "বেশির ভাগ বর্ণনায় এর অর্থ বদলে যাওয়া। তাবারী মাসনূনের ব্যাখ্যা দেন আল-মুতাগাইয়ির, মানে যা বদলে গেছে। ইবন আব্বাস, মুজাহিদ, কাতাদা আর দাহহাক থেকে তিনি আনেন, এর মানে পচে যাওয়া। আরেক জায়গায় ইবন আব্বাস বলেন, ভেজা মাটি পচে গন্ধ হয়ে গিয়েছিল, পরে তাকে পোড়ামাটির মতো সালসাল বানানো হয়। কুরতুবী অর্থটা খুঁজে পান আসানাল মা কথায়, অর্থাৎ পানি নষ্ট হয়ে যাওয়া। তিনি ফাররার দেওয়া মূলও আনেন: সানানতুল হাজারা, পাথরে পাথর ঘষলাম। সেই ঘষা থেকে যা বেরোয় তা দুর্গন্ধময়, আর এ মূল থেকেই মিসান্ন, মানে শান দেওয়ার পাথর। তাবারী এই ব্যাখ্যাই আনেন কূফার এক নাম-না-বলা আলিম থেকে।"
          },
          {
            "en": "Others read it differently. Ibn Kathir takes masnun as smooth, citing a poet who walked with his beloved over marble that was masnun, polished and sleek, and al-Qurtubi quotes the same line as rubbed smooth. Abu Ubayda, in al-Baghawi and al-Qurtubi, took it as poured, from sanantu al-ma', I poured the water, and at-Tabari reports that reading from a Basran grammarian. Ibn Abbas, in the report of Ali ibn Abi Talha, called it moist clay. Al-Qurtubi says this comes to the same thing, since only what is moist can be poured, and he quotes an-Nahhas calling it a good view.",
            "bn": "অন্যরা ভিন্নভাবে পড়েছেন। ইবন কাসীর মাসনূন মানে নেন মসৃণ। তিনি এক কবির চরণ আনেন, যিনি প্রিয়জনকে নিয়ে হেঁটেছিলেন মাসনূন মার্বেলের উপর দিয়ে, মানে ঘষে চকচকে করা পাথর। কুরতুবীও একই চরণ এনে বলেন, ঘষে মসৃণ করা। বাগাভী আর কুরতুবীর বর্ণনায় আবু উবাইদা একে নিয়েছেন ঢালা অর্থে, সানানতুল মা থেকে, মানে আমি পানি ঢাললাম। তাবারী এ পাঠ বসরার এক ব্যাকরণবিদ থেকে আনেন। আলী ইবন আবী তালহার বর্ণনায় ইবন আব্বাস একে বলেছেন ভেজা মাটি। কুরতুবী বলেন, কথা একই দাঁড়ায়, কারণ ভেজা না হলে কিছু ঢালা যায় না। নাহহাস একে ভালো মত বলেছেন, সেটাও তিনি উল্লেখ করেন।"
          },
          {
            "en": "Two more readings complete the list. Sibawayh, in al-Qurtubi, took masnun as formed, from sunnat al-wajh, the shape of a face, and at-Tabari reports a Basran grammarian who said the same: mud given a complete form, its pattern set. Al-Akhfash, in al-Qurtubi, took it as set upright. At-Tabari himself inclines to altered and says the people of interpretation said much the same. These are the readings in the texts consulted for this verse, with their names attached. This article adds none of its own and settles none of them.",
            "bn": "তালিকা পূর্ণ করে আরও দুটি পাঠ। কুরতুবীর বর্ণনায় সিবাওয়াইহ মাসনূন মানে নিয়েছেন আকার দেওয়া, সুন্নাতুল ওয়াজহ থেকে, অর্থাৎ মুখের গড়ন। তাবারীও বসরার এক ব্যাকরণবিদের কথা আনেন, যিনি একই কথা বলেছেন: পূর্ণ আকার পাওয়া কাদা, যার ছাঁচ স্থির হয়ে গেছে। কুরতুবীর বর্ণনায় আখফাশ একে নিয়েছেন খাড়া করে দাঁড় করানো অর্থে। তাবারী নিজে ঝুঁকেছেন বদলে যাওয়া অর্থের দিকে, আর বলেছেন তাফসীরবিদেরাও প্রায় এ কথাই বলেছেন। এ আয়াতের জন্য সংগ্রহ করা লেখাগুলোতে এই পাঠগুলোই আছে, প্রতিটির সঙ্গে নাম জোড়া। এ লেখা নিজের কোনো পাঠ যোগ করে না, কোনোটির পক্ষে রায়ও দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Earth, Mud, Then Ringing Clay",
          "bn": "মাটি, কাদা, তারপর ঠনঠনে মাটি"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets the words in an order. First it was turab, earth, its particles scattered. Then it was wetted and became tin, clay. Then it was left until it went foul and became hama' masnun, altered. Then it dried and became salsal. He gives this as the view of the majority and refers the reader back to his fuller discussion under al-Baqara. Al-Baghawi brings something close from what he calls some of the reports, without naming who narrated them: that Allah left the clay of Adam to ferment until it changed and turned black, and then created Adam from it.",
            "bn": "কুরতুবী শব্দগুলোকে একটা ক্রমে সাজান। প্রথমে ছিল তুরাব, মানে ধুলামাটি, যার কণাগুলো ছড়ানো ছিটানো। তারপর ভিজিয়ে তা হলো তীন, কাদামাটি। তারপর রেখে দেওয়া হলো, পচে গিয়ে তা হলো হামা মাসনূন, বদলে যাওয়া কাদা। তারপর শুকিয়ে হলো সালসাল। কুরতুবী একে জুমহুর বা অধিকাংশের মত বলেছেন, আর বিস্তারিত আলোচনার জন্য পাঠককে সূরা বাকারায় তাঁর লেখার দিকে ফিরিয়ে দিয়েছেন। বাগাভীও কাছাকাছি একটা কথা আনেন। তিনি শুধু বলেন, কোনো কোনো বর্ণনায় আছে, কে বর্ণনা করেছেন তা জানান না: আল্লাহ আদমের মাটিকে খামির হতে রেখে দিয়েছিলেন, যতক্ষণ না তা বদলে কালো হয়ে যায়, তারপর তা থেকে আদমকে সৃষ্টি করেন।"
          },
          {
            "en": "Ibn Abbas, in at-Tabari, gathers words from different verses together: man was created from tin lazib, salsal and hama' masnun. Tin lazib, he says, is sticky, good clay; salsal is the fine clay from which pottery is made; masnun is clay with black silt in it. Tin lazib is the wording of 37:11, and salsal like fakhkhar is the wording of 55:14, which at-Tabari and Ibn Kathir both use to fix the sense here. The Qur'an names turab as well, in 3:59, though the commentators consulted for this verse do not cite that verse here.",
            "bn": "তাবারীর বর্ণনায় ইবন আব্বাস ভিন্ন ভিন্ন আয়াতের শব্দ একসঙ্গে জড়ো করেন: মানুষকে সৃষ্টি করা হয়েছে তীন লাযিব, সালসাল আর হামা মাসনূন থেকে। তাঁর ব্যাখ্যায় তীন লাযিব হলো আঠালো ভালো মাটি, সালসাল হলো সেই মিহি মাটি যা দিয়ে পোড়ামাটির পাত্র বানানো হয়, আর মাসনূন হলো কালো পলি মেশানো মাটি। তীন লাযিব কথাটি ৩৭:১১ আয়াতের, আর ফাখখারের মতো সালসাল কথাটি ৫৫:১৪ আয়াতের। এখানকার অর্থ ঠিক করতে তাবারী ও ইবন কাসীর দুজনেই ৫৫:১৪ ব্যবহার করেছেন। কুরআন ৩:৫৯ আয়াতে তুরাবের কথাও বলে, তবে এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো এখানে সে আয়াত উল্লেখ করেনি।"
          },
          {
            "en": "A word of caution keeps this in proportion. The verse itself names only salsal and hama' masnun. The sequence of steps is al-Qurtubi's reading of how the Qur'an's words fit together, credited by him to the majority; it is not a line of the verse, and the other commentators consulted here do not all spell it out. And none of these texts speaks in the language of modern science, so this article does not either. What the commentators draw from the materials points somewhere else: towards the man made from them, and what was given to him.",
            "bn": "তবে একটু সাবধান থাকা দরকার, যাতে কথাটা মাত্রা না ছাড়ায়। আয়াত নিজে শুধু সালসাল আর হামা মাসনূনের নাম বলে। ধাপের এই ক্রম কুরতুবীর নিজের বোঝা: কুরআনের শব্দগুলো কীভাবে একটার সঙ্গে আরেকটা মেলে, এ তাঁর সেই পাঠ, আর তিনি একে অধিকাংশের মত বলেছেন। এটা আয়াতের কোনো বাক্য নয়। এখানে সংগ্রহ করা অন্য তাফসীরকারেরাও সবাই এ ক্রম খুলে বলেননি। তাছাড়া এসব লেখার কোনোটিই আধুনিক বিজ্ঞানের ভাষায় কথা বলে না, তাই এ লেখাও বলে না। উপাদান থেকে তাফসীরকারেরা যে শিক্ষা টানেন, তা অন্য দিকে নিয়ে যায়: যাকে এসব দিয়ে বানানো হয়েছে তাঁর দিকে, আর তাঁকে যা দেওয়া হয়েছে তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "As It Was Described to You",
          "bn": "যেমন তোমাদের বলে দেওয়া হয়েছে"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English tafsir that groups 15:26 with 15:27, attaches a narration he says is found in the Sahih. Sahih Muslim (2996) records from A'isha (RA) that the Messenger of Allah ﷺ said: The angels were created from light, the jinn were created from a smokeless flame of fire, and Adam was created from what has been described to you. The last clause does not name the material again; it points to a description the listeners already had. The half about the jinn belongs with 15:27 and is left for that verse.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:২৬ আর ১৫:২৭ একসঙ্গে আলোচনা করে। সেখানে তিনি একটি হাদিস আনেন এবং বলেন, এটি সহীহ গ্রন্থে আছে। সহীহ মুসলিম (২৯৯৬) আয়িশা (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: ফেরেশতাদের সৃষ্টি করা হয়েছে নূর থেকে, জিনকে সৃষ্টি করা হয়েছে ধোঁয়াহীন আগুনের শিখা থেকে, আর আদমকে সৃষ্টি করা হয়েছে সেই জিনিস থেকে, যার বর্ণনা তোমাদের দেওয়া হয়েছে। শেষ বাক্যে উপাদানের নাম আবার বলা হয়নি। শ্রোতাদের কাছে যে বর্ণনা আগে থেকেই ছিল, বাক্যটি সেদিকে ইশারা করে। জিনের অংশটুকু ১৫:২৭ আয়াতের বিষয়, তাই সেটা সে আয়াতের জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "Ibn Kathir closes his comment with the point of it all: the verse is meant to show the noble nature, good essence and pure origin of Adam. That is worth sitting with. The same verse that names ringing clay and altered mud is read by him as a statement of honour, not of lowness. As-Sa'di likewise frames the passage as a favour to our father. Ma'arif al-Qur'an, grouping 15:24 to 15:28, spends its consulted comment on 15:24 and is not used here.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন মূল কথাটি বলে: আয়াতের উদ্দেশ্য আদমের মহৎ স্বভাব, উত্তম সত্তা আর পবিত্র মূলের দিকে ইঙ্গিত করা। কথাটা নিয়ে একটু থামা দরকার। যে আয়াত ঠনঠনে মাটি আর বদলে যাওয়া কাদার নাম নেয়, তিনি সেটাকেই পড়েন সম্মানের ঘোষণা হিসেবে, হীনতার নয়। সা'দীও অংশটিকে আমাদের পিতার প্রতি অনুগ্রহ হিসেবেই সাজান। মাআরিফুল কুরআন ১৫:২৪ থেকে ১৫:২৮ একসঙ্গে আলোচনা করে, কিন্তু সংগ্রহ করা অংশে তার কথা ১৫:২৪ নিয়েই। তাই এখানে তা ব্যবহার করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour That Was Not Mined",
          "bn": "যে সম্মান মাটি খুঁড়ে মেলে না"
        },
        "p": [
          {
            "en": "Put the readings side by side and something plain comes through, whichever of them one follows. Ringing clay or clay gone off, black mud altered or smoothed or poured into a shape: none of it is precious. There is nothing here a person could point to and say, this is why I matter. That is exactly where the verse leaves us. The verses after it go on to what Allah did with this material and how He honoured it, and they have their own place. Here the material is named first, and named plainly, before a word is said about honour.",
            "bn": "পাঠগুলো পাশাপাশি রাখলে, যেটাই মানা হোক, একটা সহজ কথা বেরিয়ে আসে। ঠনঠনে মাটি হোক বা পচে যাওয়া মাটি, কালো কাদা বদলে যাওয়া হোক, মসৃণ হোক বা ছাঁচে ঢালা, এর কোনোটিই দামি নয়। এখানে এমন কিছু নেই যা দেখিয়ে কেউ বলতে পারে, এই কারণেই আমার দাম। আয়াত আমাদের ঠিক এখানেই দাঁড় করিয়ে রাখে। পরের আয়াতগুলো বলবে এই উপাদান দিয়ে আল্লাহ কী করলেন, কীভাবে তাকে সম্মান দিলেন। সেগুলোর আলোচনা তাদের নিজ জায়গায়। এখানে আগে উপাদানের নাম আসে, সোজাসাপ্টা ভাষায়, সম্মানের কথা ওঠার আগেই।"
          },
          {
            "en": "So the honour cannot have come from the clay. Ibn Kathir calls the origin noble and pure while the verse names dry earth and dark mud, and these sit together without strain once the nobility is seen to lie in the Maker and in what He chose to give. For the reader this lowers and lifts at once. It lowers pride, because nobody's material is better than anybody else's. And it lifts, because the dignity a person carries is Allah's gift, and so it is not mine to take away from anyone.",
            "bn": "তাহলে সম্মানটা মাটি থেকে আসতে পারে না। আয়াত বলছে শুকনো মাটি আর কালো কাদার কথা, আর ইবন কাসীর সেই মূলকেই বলছেন মহৎ ও পবিত্র। কথাগুলো পাশাপাশি থাকতে কোনো অসুবিধা হয় না, যদি বোঝা যায় মহত্ত্বটা আছে যিনি বানিয়েছেন তাঁর মধ্যে, আর তিনি যা দিতে চেয়েছেন তার মধ্যে। পাঠকের জন্য এ কথা একসঙ্গে নামিয়েও আনে, তুলেও ধরে। অহংকার নামিয়ে আনে, কারণ কারও উপাদান অন্য কারও চেয়ে ভালো নয়। আবার তুলে ধরে, কারণ মানুষ যে মর্যাদা বহন করে তা আল্লাহর দান। তাই কারও কাছ থেকে তা কেড়ে নেওয়ার অধিকার আমার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Living as Honoured Clay",
          "bn": "সম্মান পাওয়া মাটির জীবন"
        },
        "p": [
          {
            "en": "Some practical turns follow. When I catch myself feeling above someone, for their family, their work, their accent or their income, I can name the verse's materials to myself and ask which of them I think I was spared. When I feel like nothing, after a failure or a sin, I can remember that the honour never rested on the material, so the weakness of the material does not cancel it. And when I speak about other people, including the ones I dislike, I can let the dignity Allah placed in them govern my tongue.",
            "bn": "এ থেকে কিছু কাজের কথা বেরিয়ে আসে। কারও বংশ, পেশা, কথার টান বা আয় দেখে যখন নিজেকে তার চেয়ে উঁচু মনে হয়, তখন আয়াতের উপাদানগুলোর নাম মনে মনে বলে নিজেকে জিজ্ঞেস করতে পারি: এর কোনটা থেকে আমি রেহাই পেয়েছি বলে ভাবছি? কোনো ব্যর্থতা বা গুনাহের পর যখন নিজেকে একেবারে কিছুই না মনে হয়, তখন মনে রাখতে পারি, সম্মান কখনো উপাদানের উপর দাঁড়িয়ে ছিল না। তাই উপাদানের দুর্বলতা সে সম্মান মুছে দেয় না। আর অন্যদের নিয়ে কথা বলার সময়, যাদের পছন্দ করি না তাদের বেলাতেও, আল্লাহ তাদের ভেতরে যে মর্যাদা রেখেছেন তা যেন আমার জিভকে সংযত রাখে।"
          },
          {
            "en": "The verse is not a supplication, but a composed du'a in its spirit, not a transmitted one, might run: O Allah, You created me from clay that rings and mud that changed, and every good in me is from You. Keep me from pride over what I did not make, and from despising what You have honoured. Let me see Your gift in every person I meet, and let my end, like my beginning, be in Your hands. Then the passage moves on, and the reader with it, carrying a clay origin and a given honour.",
            "bn": "আয়াতটি নিজে কোনো দোয়া নয়। তবে এর ভাব থেকে নিজের বানানো একটি দোয়া এমন হতে পারে, যা কোনো হাদিসে বর্ণিত নয়: হে আল্লাহ, আপনি আমাকে সৃষ্টি করেছেন ঠনঠনে মাটি আর বদলে যাওয়া কাদা থেকে, আমার ভেতরের সব ভালো আপনারই দেওয়া। যা আমি নিজে বানাইনি তা নিয়ে অহংকার থেকে আমাকে বাঁচান, আর আপনি যাকে সম্মান দিয়েছেন তাকে তুচ্ছ করা থেকেও। যার সঙ্গেই দেখা হোক, তার মধ্যে আপনার দান দেখার চোখ দিন। আমার শুরুর মতো আমার শেষটাও আপনার হাতেই থাকুক। এরপর অংশটি সামনে এগোয়, পাঠকও এগোয়, সঙ্গে নিয়ে মাটির শুরু আর পাওয়া সম্মান।"
          }
        ]
      }
    ]
  },
  "15:33": {
    "sections": [
      {
        "h": {
          "en": "An Answer to a Question",
          "bn": "এক প্রশ্নের জবাব"
        },
        "p": [
          {
            "en": "This verse is a reply, and it only makes sense after the question. In 15:28 Allah tells the angels that He is creating a human from ringing clay, from altered black mud. In 15:29 He tells them to fall down in prostration once He has proportioned him and breathed into him. In 15:30 the angels prostrate, all of them together. In 15:31 comes the exception: Iblis refused to be with those who prostrate. Then 15:32 asks him directly: O Iblis, what is the matter with you, that you are not with those who prostrate? This is his answer.",
            "bn": "আয়াতটি একটি জবাব। প্রশ্নটা আগে না জানলে জবাবের মানে ধরা যায় না। ১৫:২৮ আয়াতে আল্লাহ ফেরেশতাদের জানালেন, তিনি ঠনঠনে মাটি থেকে, বদলে যাওয়া কালো কাদা থেকে মানুষ সৃষ্টি করছেন। ১৫:২৯ আয়াতে বললেন, তাকে পূর্ণ গড়ন দিয়ে তার মধ্যে রূহ ফুঁকে দিলে তোমরা সাজদায় পড়ে যেও। ১৫:৩০ আয়াতে ফেরেশতারা সবাই একসঙ্গে সাজদা করল। ১৫:৩১ আয়াতে এল ব্যতিক্রম: ইবলীস সাজদাকারীদের সঙ্গী হতে অস্বীকার করল। তারপর ১৫:৩২ আয়াতে সরাসরি প্রশ্ন: হে ইবলীস, তোমার কী হলো যে তুমি সাজদাকারীদের সঙ্গে নেই? এ আয়াত সেই প্রশ্নেরই উত্তর।"
          },
          {
            "en": "The materials named in the answer, salsal, hama' and masnun, were read closely at 15:26, where the commentators' accounts of ringing clay and of mud gone dark and altered are laid out; they are not repeated here. What is new in 15:33 is the speaker. In 15:28 those very words are Allah's, announcing a creation He is about to honour. Here the same words come back in Iblis's mouth, and he turns them into an objection. What is said to him in return, in 15:34 and 15:35, belongs to those verses.",
            "bn": "উত্তরে যে উপাদানগুলোর নাম এসেছে, সালসাল, হামা আর মাসনূন, সেগুলো নিয়ে বিস্তারিত আলোচনা হয়েছে ১৫:২৬ আয়াতে। ঠনঠনে মাটি আর কালো হয়ে বদলে যাওয়া কাদা নিয়ে তাফসীরকারদের ব্যাখ্যা সেখানে সাজানো আছে, এখানে আর তা দোহরানো হলো না। ১৫:৩৩ আয়াতে নতুন হলো বক্তা। ১৫:২৮ আয়াতে ঠিক এই শব্দগুলো ছিল আল্লাহর কথা। তিনি এমন এক সৃষ্টির ঘোষণা দিচ্ছিলেন, যাকে তিনি সম্মান দিতে যাচ্ছেন। এখানে একই শব্দ ফিরে এসেছে ইবলীসের মুখে, আর সে সেগুলোকে বানিয়েছে আপত্তি। জবাবে তাকে যা বলা হলো, তা আছে ১৫:৩৪ ও ১৫:৩৫ আয়াতে, আর সে আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Sort to Bow",
          "bn": "সাজদা করা আমার কাজ নয়"
        },
        "p": [
          {
            "en": "Lam akun li-asjuda: I am not one to prostrate. The question in 15:32 asked why he is not, alla takuna, with those who prostrate, and his answer picks up the same verb of being. He does not say I will not, or I did not. He describes himself. The Muyassar puts the sense into plain words: it does not befit me to prostrate to a human You brought into being from dry clay that had been black, altered mud. Ibn Kathir's abridged English tafsir, which groups 15:28 to 15:33, renders the opening as: I am not one to prostrate myself.",
            "bn": "লাম আকুন লি-আসজুদা: আমি সাজদা করার লোক নই। ১৫:৩২ আয়াতের প্রশ্ন ছিল, তুমি কেন সাজদাকারীদের সঙ্গে নেই, আল্লা তাকূনা। উত্তরেও সে 'হওয়া' অর্থের সেই একই ক্রিয়া ধরে রাখল। সে বলেনি, আমি করব না, বা আমি করিনি। সে নিজের পরিচয় দিল। মুয়াসসার সহজ কথায় অর্থটা খুলে বলে: এমন মানুষকে সাজদা করা আমার শোভা পায় না, যাকে তুমি বানিয়েছ শুকনো মাটি থেকে, যা আগে ছিল বদলে যাওয়া কালো কাদা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:২৮ থেকে ১৫:৩৩ আয়াত একসঙ্গে ধরে আলোচনা করে। সেখানে শুরুর কথাটার অনুবাদ: আমি নিজেকে সাজদায় নত করার মতো কেউ নই।"
          },
          {
            "en": "Look too at where the answer points. He was asked about himself, and he answers about someone else: li-basharin khalaqtahu, to a human whom You created. The reason he gives is not a fault in the command or a fault in Adam's conduct. It is the stuff Adam was made from. And the verb is in the second person, You created, so the objection is lodged against a work while its Maker is named in the same breath. The refusal has been turned into a statement of rank, and a statement of rank sounds, to whoever makes it, like a reason.",
            "bn": "উত্তরটা কোন দিকে আঙুল তুলছে, সেটাও দেখুন। প্রশ্ন ছিল তার নিজের সম্পর্কে, আর সে জবাব দিল অন্যজনকে নিয়ে: লি-বাশারিন খালাকতাহু, এমন মানুষকে যাকে তুমি সৃষ্টি করেছ। হুকুমে কোনো দোষ সে দেখায়নি, আদম (আঃ)-এর কোনো আচরণেও না। কারণ হিসেবে সে দাঁড় করাল আদম (আঃ) যে উপাদানে তৈরি, সেটাকে। ক্রিয়াটাও সরাসরি সম্বোধনে: তুমি সৃষ্টি করেছ। অর্থাৎ যিনি বানিয়েছেন তাঁর নাম মুখে নিয়েই সে তাঁর সৃষ্টির বিরুদ্ধে আপত্তি তুলল। অস্বীকারটা এভাবে হয়ে গেল পদমর্যাদার ঘোষণা। আর যে এমন ঘোষণা দেয়, তার কানে সেটা যুক্তির মতোই শোনায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fire That Eats Clay",
          "bn": "আগুন মাটিকে খেয়ে ফেলে"
        },
        "p": [
          {
            "en": "The verse names only one material, Adam's. The commentators on this verse supply the other half of the comparison. At-Tabari glosses Iblis's words: and he is of clay and I am of fire, and fire consumes clay. Al-Baghawi says what he meant was: I am better than him, because he is of clay and I am of fire, and fire consumes clay. Al-Qurtubi says the verse makes plain his pride and his envy, and his claim to be better than Adam, since he is of fire and fire eats clay, and he refers the reader to his fuller discussion in al-A'raf.",
            "bn": "আয়াতে উপাদানের নাম এসেছে একটাই, আদম (আঃ)-এর। তুলনার বাকি অর্ধেক জুড়ে দেন এ আয়াতের তাফসীরকারেরা। তাবারী ইবলীসের কথার ব্যাখ্যা দেন এভাবে: সে তো মাটির, আর আমি আগুনের, আর আগুন মাটিকে খেয়ে ফেলে। বাগাভী বলেন, তার আসল কথা ছিল: আমি তার চেয়ে উত্তম, কারণ সে মাটির আর আমি আগুনের, আর আগুন মাটিকে খেয়ে ফেলে। কুরতুবী বলেন, আয়াতটি তার অহংকার আর হিংসা খুলে দেখায়, আর আদম (আঃ)-এর চেয়ে নিজেকে উত্তম বলে তার দাবিও। কারণ সে আগুনের তৈরি, আর আগুন মাটিকে খেয়ে ফেলে। বিস্তারিত আলোচনার জন্য তিনি পাঠককে সূরা আ'রাফে পাঠান।"
          },
          {
            "en": "Three commentators, then, read the same unspoken argument into the reply, and in almost the same words: fire overpowers clay, so what is made of fire outranks what is made of clay. It is worth seeing how the argument is built. It starts from something true within its own terms, since fire does burn and harden earth. It then treats a fact about material as a fact about worth, and a fact about worth as grounds for setting aside a command. Each step feels small. Taken together they carry a creature from comparing to refusing.",
            "bn": "দেখা যাচ্ছে, তিনজন তাফসীরকারই জবাবের ভেতরে একই না-বলা যুক্তি দেখেছেন, প্রায় একই ভাষায়: আগুন মাটিকে কাবু করে, তাই আগুনে গড়া জিনিস মাটিতে গড়া জিনিসের চেয়ে উঁচু। যুক্তিটা কীভাবে সাজানো, সেটা লক্ষ করার মতো। শুরু হয় এমন কথা দিয়ে, যা নিজের গণ্ডিতে সত্য। আগুন সত্যিই মাটিকে পোড়ায়, শক্ত করে। তারপর উপাদানের একটা তথ্যকে ধরে নেওয়া হয় মর্যাদার তথ্য বলে। আর মর্যাদার সেই দাবিকে বানানো হয় হুকুম এড়িয়ে যাওয়ার ভিত্তি। প্রতিটা ধাপ ছোট মনে হয়। কিন্তু সব মিলিয়ে এই ধাপগুলোই এক সৃষ্টিকে তুলনা থেকে অস্বীকারে নিয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Claim He Makes Elsewhere",
          "bn": "অন্য আয়াতে তার দাবি"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English tafsir on 15:28 to 15:33, says Iblis refused out of envy, disbelief, stubbornness, arrogance and false pride, and that this is why he spoke as he did here. He sets the verse beside two others: 7:12, I am better than him; You created me from fire and him You created from clay; and 17:62, Do you see this one whom You have honoured above me? As-Sa'di reads the same claim into this reply: he was arrogant towards Allah's command, showed enmity to Adam and his offspring, was pleased with his own element, and said: I am better than Adam.",
            "bn": "ইবন কাসীর তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরে ১৫:২৮ থেকে ১৫:৩৩ আয়াত প্রসঙ্গে বলেন, ইবলীস সাজদা করেনি হিংসা, কুফর, একগুঁয়েমি, অহংকার আর মিথ্যা গর্ব থেকে। এ কারণেই সে এখানে এমন কথা বলেছে। আয়াতটিকে তিনি পাশে রাখেন আরও দুটি আয়াতের সঙ্গে। ৭:১২ আয়াতে: আমি তার চেয়ে উত্তম, আমাকে তুমি আগুন থেকে বানিয়েছ আর তাকে মাটি থেকে। আর ১৭:৬২ আয়াতে: দেখো তো, এই কি সে, যাকে তুমি আমার উপর সম্মান দিলে? সা'দীও এ জবাবের ভেতরে একই দাবি পড়েন। তাঁর কথায়, সে আল্লাহর হুকুমের সামনে অহংকার করল, আদম (আঃ) ও তাঁর বংশধরদের প্রতি শত্রুতা প্রকাশ করল, নিজের উপাদান নিয়ে মুগ্ধ হলো, আর বলল: আমি আদমের চেয়ে উত্তম।"
          },
          {
            "en": "How the scholars answer the fire-over-clay reasoning itself is a question for another verse. Al-Qurtubi, on this verse, points back to al-A'raf for his explanation, and none of the commentaries consulted here on 15:33 sets out a rebuttal. So this article does not supply an answer from memory; that discussion belongs with 7:12 and its own commentary. What the texts on this verse do give, and give together, is a verdict on the motive behind the words. They name it as pride and envy, and that is where the next section goes.",
            "bn": "আগুন-মাটির এই যুক্তির জবাব আলেমরা কীভাবে দিয়েছেন, সে প্রশ্ন অন্য আয়াতের। এ আয়াতে কুরতুবী ব্যাখ্যার জন্য সূরা আ'রাফের দিকে ইঙ্গিত করেন। ১৫:৩৩ আয়াতের যে তাফসীরগুলো এখানে পড়া হয়েছে, তার কোনোটিতেই পাল্টা যুক্তি সাজানো নেই। তাই স্মৃতি থেকে কোনো জবাব এখানে জুড়ে দেওয়া হলো না। সে আলোচনার জায়গা ৭:১২ আয়াত আর তার তাফসীর। এ আয়াতের তাফসীরগুলো একসঙ্গে যা দেয়, তা হলো কথাগুলোর পেছনের মনোভাব সম্পর্কে রায়। তাঁরা সেটার নাম দেন অহংকার আর হিংসা। পরের অংশ সেদিকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Up, Looking Down",
          "bn": "উপরের দিকে, নিচের দিকে"
        },
        "p": [
          {
            "en": "The Muyassar introduces the words as spoken by Iblis while displaying his pride and his envy, kibrahu wa hasadahu, and al-Qurtubi names the same pair. As-Sa'di separates two directions in which the pride runs. It rose against the command: istakbara 'ala amri-llah, he was arrogant towards the command of Allah. And it turned against the one he was told to honour: he showed enmity to Adam and to his offspring. One is a refusal of what came from above. The other is contempt for what stood beside him. The reply in 15:33 carries both at once.",
            "bn": "মুয়াসসার জানায়, ইবলীস এ কথা বলেছিল নিজের অহংকার আর হিংসা প্রকাশ করতে গিয়ে, কিবরাহু ওয়া হাসাদাহু। কুরতুবীও একই দুটি নাম নেন। সা'দী অহংকারের দুটি দিক আলাদা করে দেখান। একটা উঠেছিল হুকুমের বিরুদ্ধে: ইসতাকবারা আলা আমরিল্লাহ, সে আল্লাহর হুকুমের সামনে অহংকার দেখাল। আরেকটা ঘুরে গেল তার দিকে, যাকে সম্মান করতে বলা হয়েছিল: সে আদম (আঃ) আর তাঁর সন্তানদের প্রতি শত্রুতা দেখাল। প্রথমটা উপর থেকে আসা আদেশ মানতে অস্বীকার। দ্বিতীয়টা পাশে দাঁড়ানো জনের প্রতি তাচ্ছিল্য। ১৫:৩৩ আয়াতের জবাবে দুটোই একসঙ্গে আছে।"
          },
          {
            "en": "None of the commentaries consulted for this verse attaches a hadith to it. A general narration, not tied to this verse, names the same two faces of pride. Sahih Muslim (91) records from Abdullah b. Mas'ud that the Messenger of Allah ﷺ said: He who has in his heart the weight of a speck (dharra) of pride shall not enter Paradise. A person (amongst his hearers) said: Verily a person loves that his dress should be fine, and his shoes should be fine. He remarked: Verily, Allah is Graceful and He loves Grace. Pride is disdaining the truth (out of self-conceit) and contempt for the people.",
            "bn": "এ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটিই আয়াতটির সঙ্গে কোনো হাদিস যুক্ত করেনি। তবে একটি সাধারণ বর্ণনা, যা এ আয়াতের সঙ্গে বাঁধা নয়, অহংকারের ঠিক এই দুই চেহারার নাম নেয়। সহীহ মুসলিম (৯১) আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: যার অন্তরে কণা (যাররা) পরিমাণ অহংকার আছে, সে জান্নাতে প্রবেশ করবে না। শ্রোতাদের একজন বলল, মানুষ তো চায় তার পোশাক সুন্দর হোক, তার জুতা সুন্দর হোক। তিনি বললেন: নিশ্চয় আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। অহংকার হলো আত্মম্ভরিতায় সত্যকে অগ্রাহ্য করা আর মানুষকে তুচ্ছ জ্ঞান করা।"
          },
          {
            "en": "Disdaining the truth and holding people in contempt: the two halves of the definition line up with the two directions as-Sa'di draws, though the narration itself speaks of pride in general and not of this scene. The questioner's worry is answered too. Wanting good clothes and good shoes is not what is meant. Pride is not in having something fine. It is in what a person does with a comparison: whether it turns into a reason to wave the truth away, or to look down on someone Allah has placed beside him.",
            "bn": "সত্যকে অগ্রাহ্য করা আর মানুষকে তুচ্ছ ভাবা: সংজ্ঞার এই দুই অংশ সা'দীর দেখানো দুই দিকের সঙ্গে মিলে যায়। তবে বর্ণনাটি সাধারণভাবে অহংকারের কথা বলে, এই দৃশ্যের কথা নয়। প্রশ্নকারীর দুশ্চিন্তারও জবাব আছে এতে। ভালো পোশাক, ভালো জুতা চাওয়া অহংকার নয়। ভালো কিছু থাকার মধ্যে অহংকার নেই। অহংকার লুকিয়ে থাকে তুলনাটা নিয়ে মানুষ কী করে, তার মধ্যে। সেই তুলনা কি সত্যকে ঠেলে সরানোর অজুহাত হয়ে উঠছে? নাকি আল্লাহ যাকে পাশে দাঁড় করিয়েছেন, তাকে ছোট করে দেখার কারণ হয়ে উঠছে?"
          }
        ]
      },
      {
        "h": {
          "en": "Present, and So Addressed",
          "bn": "উপস্থিত ছিল, তাই আদেশও তার"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, which groups 15:31 to 15:40, takes up a question the passage raises: the command in 15:28 and 15:29 is addressed to the angels, so was Iblis bound by it? It answers from 7:12, What prevented you from prostrating when I commanded you, which shows the command reached him too. He was present among the angels, and when the most honoured of creation were told to pay homage to Adam, any other creature there was bound to follow. That, it says, is why Iblis never pleaded that he had not been asked.",
            "bn": "মাআরিফুল কুরআন ১৫:৩১ থেকে ১৫:৪০ আয়াত একসঙ্গে আলোচনা করে। মাআরিফ সেখানে এ অংশ থেকে ওঠা একটি প্রশ্ন ধরে: ১৫:২৮ ও ১৫:২৯ আয়াতের হুকুম তো ফেরেশতাদের উদ্দেশে, তাহলে ইবলীস কি তার আওতায় ছিল? জবাব দেয় ৭:১২ আয়াত থেকে: আমি যখন তোমাকে আদেশ দিলাম, তখন সাজদা করতে তোমাকে কিসে বাধা দিল? এ থেকে বোঝা যায়, হুকুম তার কাছেও পৌঁছেছিল। সে ফেরেশতাদের মাঝে উপস্থিত ছিল। সৃষ্টির সবচেয়ে সম্মানিতদের যখন আদম (আঃ)-কে সম্মান জানাতে বলা হলো, সেখানে থাকা অন্য যে-কারও জন্য তা মানা ছিল অনিবার্য। মাআরিফের মতে, এ কারণেই ইবলীস কখনো এ অজুহাত দেয়নি যে তাকে বলাই হয়নি।"
          },
          {
            "en": "His reply here bears that out. It argues from worth, not from exemption: not I was never told, but I am not one to. One more text should be noted with its author's verdict. Ibn Kathir, in his Arabic tafsir on this verse, mentions a report that at-Tabari transmitted from Ibn Abbas about earlier groups of angels who refused the same command. He calls it strange, says its being established from Ibn Abbas is doubtful, and judges that it is apparently from the Isra'iliyyat. Nothing is built on it here.",
            "bn": "এখানে তার জবাবও সে কথাই সমর্থন করে। সে ছাড় পাওয়ার যুক্তি দেয়নি, দিয়েছে মর্যাদার যুক্তি। বলেনি, আমাকে তো বলা হয়নি। বলেছে, আমি এ কাজের লোক নই। আরেকটি বর্ণনার কথাও বলা দরকার, সঙ্গে তার সম্পর্কে লেখকের রায়। ইবন কাসীর এ আয়াতের আরবি তাফসীরে একটি বর্ণনা আনেন, যা তাবারী ইবন আব্বাস (রাঃ) থেকে উদ্ধৃত করেছেন। তাতে আছে আগের কিছু ফেরেশতাদলের কথা, যারা একই হুকুম মানতে অস্বীকার করেছিল। ইবন কাসীর একে অদ্ভুত বলেন। ইবন আব্বাস (রাঃ) থেকে এটি আদৌ প্রমাণিত কি না, তাতে সন্দেহ প্রকাশ করেন, আর তাঁর বিচারে বাহ্যত এটি ইসরাঈলী বর্ণনা। এর উপর এখানে কিছুই দাঁড় করানো হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Refusal Left in Its Words",
          "bn": "নিজের ভাষাতেই রাখা এক অস্বীকার"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse reports what Iblis said, and the passage condemns it. It describes Iblis and licenses nothing against any living person or community. It gives nobody the right to call an opponent Iblis, or to treat a people, a family or a class as carrying his nature. It would be a strange reading, too, that ranked human beings by origin on the strength of this verse, since ranking by origin is precisely the move the commentators condemn in it. The verse is a warning to look inward, not a label to hand out.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ইবলীসের কথা উদ্ধৃত করে, আর গোটা অংশটি সে কথার নিন্দা করে। এখানে বর্ণনা ইবলীসের, আর কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। প্রতিপক্ষকে ইবলীস ডাকার অধিকার এ আয়াত কাউকে দেয় না। কোনো জাতি, পরিবার বা শ্রেণিকে তার স্বভাবের বাহক ভাবারও না। আর এ আয়াতের জোরে মানুষকে উৎস দেখে উঁচু-নিচু ভাগ করা হবে অদ্ভুত পাঠ। কারণ উৎস দেখে মর্যাদা মাপার এই চালটাকেই তো তাফসীরকারেরা এখানে নিন্দা করেছেন। আয়াতটি নিজের ভেতরে তাকানোর সতর্কবার্তা, অন্যের গায়ে লাগানোর তকমা নয়।"
          },
          {
            "en": "The Qur'an lets the refusal stand in its own words, with its own logic intact, and does not argue with it inside the verse. The answer comes in what follows: in 15:34 Iblis is told to go out, for he is outcast, and in 15:35 that the curse is on him until the Day of Recompense. Those verses have their own place and are left for them. Here the reader is simply shown what the refusal sounds like from the inside, so that the same tone can be recognised when it rises in one's own voice.",
            "bn": "কুরআন অস্বীকারটাকে তার নিজের ভাষায়, নিজের যুক্তিসহ রেখে দিয়েছে। আয়াতের ভেতরে তার সঙ্গে তর্কে যায়নি। জবাব এসেছে পরের আয়াতগুলোতে। ১৫:৩৪ আয়াতে ইবলীসকে বলা হলো, বেরিয়ে যাও, তুমি বিতাড়িত। ১৫:৩৫ আয়াতে বলা হলো, বিচার দিবস পর্যন্ত তোমার উপর লা'নত। সে আয়াতগুলোর নিজস্ব জায়গা আছে, আলোচনা সেখানেই হবে। এখানে পাঠককে শুধু দেখানো হচ্ছে, ভেতর থেকে এমন অস্বীকার কেমন শোনায়। যাতে একই সুর নিজের গলায় উঠলে তা চিনে ফেলা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "From Comparing to Refusing",
          "bn": "তুলনা থেকে অস্বীকারের পথে"
        },
        "p": [
          {
            "en": "The steps are easy to trace in daily life. A right thing is asked of me. Before answering the request, I measure the one who asks, or the one who would benefit. I find something in my origin that seems to outrank theirs: family, schooling, money, the city I grew up in. Then I describe myself: I am not someone who apologises first, I do not take advice from people younger than me, that work is beneath my degree. By the time the refusal arrives, it no longer feels like disobedience. It feels like self-respect.",
            "bn": "দৈনন্দিন জীবনে ধাপগুলো সহজেই চোখে পড়ে। আমাকে একটা ভালো কাজ করতে বলা হলো। অনুরোধের জবাব দেওয়ার আগে আমি মেপে নিই, কে বলছে, বা কার উপকার হবে। নিজের উৎসে এমন কিছু খুঁজে পাই যা তার চেয়ে উঁচু মনে হয়: বংশ, পড়াশোনা, টাকা, কোন শহরে বড় হয়েছি। তারপর নিজের পরিচয় দিই। আমি আগে মাফ চাওয়ার লোক নই। বয়সে ছোটদের পরামর্শ আমি নিই না। ও কাজ আমার ডিগ্রির সঙ্গে যায় না। অস্বীকারটা যখন আসে, ততক্ষণে তাকে আর নাফরমানি মনে হয় না। মনে হয় আত্মসম্মান।"
          },
          {
            "en": "The shape of the sentence is the warning sign: I am not one to. When I hear it in my own mouth, it is worth pausing to ask what it is about. Is it a real limit, something I should not do? Or is it the old argument from material, dressed in newer clothes? At 15:26 the point was made that the honour given to Adam's children never rested in the clay. This verse shows the other side of that lesson: the creature who made his own material the measure of worth ended by setting it against the command of Allah.",
            "bn": "বাক্যের গড়নটাই সতর্কসংকেত: আমি এ কাজের লোক নই। নিজের মুখে কথাটা শুনলে একটু থেমে ভাবা ভালো, আসলে কী নিয়ে বলছি। এটা কি সত্যিকারের সীমা, এমন কিছু যা আমার করা উচিত নয়? নাকি উপাদান নিয়ে সেই একই পুরোনো যুক্তি, শুধু নতুন পোশাকে? ১৫:২৬ আয়াতে দেখা গেছে, আদমসন্তানের সম্মান কখনো মাটির মধ্যে ছিল না। এ আয়াত সেই শিক্ষার উল্টো পিঠ দেখায়। যে নিজের উপাদানকে মর্যাদার মাপকাঠি বানাল, শেষে সে সেটাকেই দাঁড় করাল আল্লাহর হুকুমের বিপরীতে।"
          },
          {
            "en": "A few turns follow. When I am asked to do something right, I can answer the request before I look at who made it. When I catch myself ranking someone by where they come from, I can remember whose argument that was. When the truth reaches me through a person I thought beneath me, I can take it as the truth and not as an insult. And when I feel the pull to say I am not one to, I can do the small, plain thing asked of me, and let obedience come before the question of who I am.",
            "bn": "কয়েকটা কাজের কথা এখান থেকে আসে। ভালো কিছু করতে বলা হলে, কে বলছে তা দেখার আগে অনুরোধটার জবাব দিতে পারি। কাউকে তার উৎস দেখে ছোট-বড় মাপছি টের পেলে মনে করতে পারি, যুক্তিটা আসলে কার ছিল। যাকে নিজের চেয়ে নিচে ভেবেছি, তার মুখ দিয়ে সত্য এলে সেটাকে অপমান হিসেবে না নিয়ে সত্য হিসেবেই নিতে পারি। আর যখন মুখে আসতে চায়, আমি এ কাজের লোক নই, তখন আমাকে করতে বলা ছোট, সাধারণ একটা কাজ চুপচাপ সেরে ফেলতে পারি। আমি কে, সে প্রশ্নের আগে থাকুক আনুগত্য।"
          }
        ]
      }
    ]
  },
  "15:36": {
    "sections": [
      {
        "h": {
          "en": "Cursed, Then Asking for Time",
          "bn": "লা‘নতের পরেই সময় চাওয়া"
        },
        "p": [
          {
            "en": "This verse comes straight after a sentence has been passed. In 15:34 and 15:35 Allah tells Iblis to leave, calls him rajim, expelled, and declares the curse on him until the Day of Recompense. The refusal that brought this on was the subject of 15:33, where he would not prostrate to a human made from clay; that reply is not reopened here. What follows the curse is the verse in front of us, six words in Arabic: qala rabbi fa-anzirni ila yawmi yub'athun, he said, my Lord, then grant me respite until the Day they are raised.",
            "bn": "রায় ঘোষণার ঠিক পরেই এ আয়াত। ১৫:৩৪ ও ১৫:৩৫ আয়াতে আল্লাহ ইবলীসকে বেরিয়ে যেতে বলেন, তাকে রাজীম অর্থাৎ বিতাড়িত বলেন, আর জানিয়ে দেন, বিচার দিবস পর্যন্ত তার উপর লা‘নত। যে অস্বীকার থেকে এ পরিণতি, তার আলোচনা হয়েছে ১৫:৩৩ আয়াতে, যেখানে সে কাদামাটির তৈরি মানুষকে সাজদা করতে রাজি হয়নি। সে জবাব এখানে আবার খোলা হবে না। লা‘নতের পরে যা আসে, তা-ই আমাদের সামনের আয়াত, আরবিতে মাত্র ৬টি শব্দ: কালা রব্বি ফাআনযিরনী ইলা ইয়াওমি ইউব‘আসূন। সে বলল, হে আমার রব, তাহলে যেদিন তাদের ওঠানো হবে, সেদিন পর্যন্ত আমাকে অবকাশ দিন।"
          },
          {
            "en": "The whole request sits in one verb. Anzirni asks for a delay, and as-Sa'di glosses it with a single word, amhilni: give me time, let me be. What is asked for is not a thing but a length, measured to a day, and the day is named by what happens on it. Yub'athun is passive and names no one who does the raising; the commentators below supply the sense. Notice what the request leaves out. There is no word of regret in it and no plea to have the curse lifted. The one who has just been cursed asks only to go on living.",
            "bn": "গোটা আবেদনটা একটিমাত্র ক্রিয়ায় ধরা। আনযিরনী হলো মেয়াদ পিছিয়ে দেওয়ার আবেদন, আর সা'দী এর ব্যাখ্যা দেন এক শব্দে: আমহিলনী, আমাকে সময় দিন, ছাড় দিন। সে কোনো জিনিস চায়নি, চেয়েছে সময়ের একটা দৈর্ঘ্য, যার শেষ একটা দিনে। আর দিনটার পরিচয় সেদিন যা ঘটবে তা দিয়ে। ইউব‘আসূন কর্মবাচ্য, কে ওঠাবেন তা বলা নেই। অর্থটা খুলে বলেন তাফসীরকারেরা, সামনে তা আসছে। লক্ষ করুন, আবেদনে কী নেই। এতে অনুশোচনার একটি শব্দও নেই, লা‘নত তুলে নেওয়ার কোনো মিনতিও নেই। সদ্য লা‘নতপ্রাপ্ত সে কেবল বেঁচে থাকতে চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Since You Have Put Me Out",
          "bn": "যেহেতু বের করেই দিলেন"
        },
        "p": [
          {
            "en": "At-Tabari's paraphrase gives the small particle fa, then, its cause. In his wording Iblis says: my Lord, since You have driven me out of the heavens and cursed me, then postpone me until the day You raise Your creation from their graves and gather them for the standing of the Resurrection. The request is built on the sentence just passed. His verb for it is akhkhirni, put me back, and the Qur'an itself uses that root when Iblis makes the same plea in 17:62: if You delay me until the Day of Resurrection.",
            "bn": "ফা, অর্থাৎ তাহলে, এই ছোট অব্যয়টির পেছনের কারণ তাবারী তাঁর ব্যাখ্যায় স্পষ্ট করে দেন। তাঁর ভাষায় ইবলীস বলছে: হে আমার রব, যেহেতু আপনি আমাকে আসমান থেকে বের করে দিয়েছেন আর লা‘নত করেছেন, তাহলে সেদিন পর্যন্ত আমাকে পিছিয়ে দিন, যেদিন আপনি আপনার সৃষ্টিকে কবর থেকে ওঠাবেন আর কিয়ামতের ময়দানে দাঁড় করানোর জন্য জড়ো করবেন। আবেদনটা দাঁড়িয়ে আছে সদ্য ঘোষিত রায়ের উপর। তাবারী এখানে যে ক্রিয়া ব্যবহার করেন, তা হলো আখখিরনী, আমাকে পিছিয়ে দিন। ১৭:৬২ আয়াতে ইবলীস যখন একই আবেদন করে, কুরআন নিজেও সেই ধাতুই ব্যবহার করে: যদি আপনি আমাকে কিয়ামতের দিন পর্যন্ত অবকাশ দেন।"
          },
          {
            "en": "The Muyassar keeps to the plain line and adds two things that matter. Iblis said: my Lord, postpone me in the world until the day on which You raise Your servants, and that is the Day of Resurrection. In the world tells us what kind of respite is meant: more life on earth, not a place anywhere else. And the Muyassar, like at-Tabari, names the requested day as the Resurrection. Ibn Kathir, below, names it the same way, so the commentators who define the term here agree on what was asked. What was given, and for how long, is the next question.",
            "bn": "মুয়াসসার সাদামাটা পথে চলে, তবে দুটি জরুরি কথা জুড়ে দেয়। ইবলীস বলল: হে আমার রব, দুনিয়াতে আমাকে সেদিন পর্যন্ত পিছিয়ে দিন, যেদিন আপনি আপনার বান্দাদের ওঠাবেন, আর সেটাই কিয়ামতের দিন। দুনিয়াতে কথাটা বলে দেয় অবকাশটা কী ধরনের: পৃথিবীর বুকে আরও কিছু জীবন, অন্য কোথাও কোনো জায়গা নয়। আর তাবারীর মতো মুয়াসসারও চাওয়া দিনটিকে কিয়ামতের দিন বলে চিহ্নিত করে। সামনে দেখা যাবে, ইবন কাসীরও দিনটিকে একই নামে চেনান। ফলে যাঁরা এখানে মেয়াদটা ব্যাখ্যা করেন, কী চাওয়া হয়েছিল সে ব্যাপারে তাঁরা একমত। কী দেওয়া হলো, কতদিনের জন্য, সেটা পরের প্রশ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Envy Wants More Years",
          "bn": "হিংসা আরও বছর চায়"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the request through the state of the one making it. In the Arabic text consulted for this verse he writes that once Iblis was certain of the wrath that cannot be turned back, he asked, out of the fullness of his envy of Adam and his offspring, for respite until the Day of Resurrection, which is the Day of Raising. Two things are packed into that clause. One is timing: the request comes after the verdict is final, not before it. The other is motive, and the motive Ibn Kathir names is neither fear nor grief but envy at its fullest.",
            "bn": "ইবন কাসীর আবেদনটা পড়েন আবেদনকারীর মনের অবস্থা দিয়ে। এ আয়াতের জন্য আনা আরবি পাঠে তিনি লেখেন: যে গজব আর ফেরানো যাবে না, ইবলীস যখন তা নিশ্চিত বুঝে ফেলল, তখন আদম (আঃ) ও তাঁর বংশধরদের প্রতি তার পূর্ণ হিংসা থেকে সে কিয়ামতের দিন পর্যন্ত অবকাশ চাইল, আর সেটাই পুনরুত্থানের দিন। এ এক বাক্যে দুটি কথা আছে। একটি সময়ের: আবেদন এসেছে রায় চূড়ান্ত হওয়ার পরে, আগে নয়। অন্যটি উদ্দেশ্যের। ইবন কাসীর যে উদ্দেশ্যের নাম নেন, তা ভয়ও নয়, দুঃখও নয়। তা হিংসা, আর সে হিংসা তখন কানায় কানায় ভরা।"
          },
          {
            "en": "The Qur'an confirms the reading from Iblis's own mouth. Three verses on, in 15:39, he says he will make wrong look fair to people on the earth and lead them all astray. In 17:62 he ties the delay directly to Adam's children: if You delay me until the Day of Resurrection, I will surely bring his descendants under my control, except for a few. The respite is wanted as working time. The one who would not bow to a single human now asks for the years in which to reach every one of that human's children. What he wants the time for is not left to guesswork.",
            "bn": "ইবলীসের নিজের মুখের কথাই এ ব্যাখ্যার সাক্ষী। ৩ আয়াত পরে, ১৫:৩৯ আয়াতে, সে বলে, পৃথিবীতে সে মানুষের চোখে পাপকে সুন্দর করে দেখাবে আর তাদের সবাইকে বিপথে নেবে। ১৭:৬২ আয়াতে সে অবকাশকে সরাসরি আদম-সন্তানদের সঙ্গে জুড়ে দেয়: আপনি যদি আমাকে কিয়ামতের দিন পর্যন্ত সময় দেন, তাহলে অল্প কজন ছাড়া তার বংশধরদের অবশ্যই আমার কর্তৃত্বে এনে ফেলব। অবকাশটা তার দরকার কাজের সময় হিসেবে। যে একজন মানুষকে সাজদা করতে রাজি হয়নি, সে-ই এখন চাইছে এমন বছর, যাতে ওই মানুষের প্রতিটি সন্তানের কাছে পৌঁছানো যায়। সময়টা সে কী কাজে চায়, তা অনুমানের উপর ছেড়ে রাখা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Not to Die",
          "bn": "মৃত্যু এড়াতে চাওয়া"
        },
        "p": [
          {
            "en": "Al-Baghawi's comment on the verse is a single line: arada al-khabith an la yamut, the vile creature wanted not to die. He reads the chosen day as the point of the request. The Day of Raising, as at-Tabari described it, is the day the dead come out of their graves, and a creature asking to last until then is, on al-Baghawi's reading, asking to be spared death itself. Al-Baghawi states the aim and nothing more; the line consulted for this verse does not set out his reasoning, and it should be held no more firmly than he holds it.",
            "bn": "এ আয়াতে বাগাভীর মন্তব্য এক লাইনের: আরাদাল খাবীসু আল্লা ইয়ামূত, খবিসটা চেয়েছিল যেন তার মৃত্যু না হয়। তাঁর মতে দিনটা বেছে নেওয়াতেই আবেদনের আসল উদ্দেশ্য। তাবারীর বর্ণনায় পুনরুত্থানের দিন হলো সেদিন, যেদিন মৃতরা কবর থেকে বেরিয়ে আসবে। বাগাভীর পাঠে, সেদিন পর্যন্ত টিকে থাকতে চাওয়া মানে খোদ মৃত্যু থেকেই রেহাই চাওয়া। বাগাভী শুধু উদ্দেশ্যটা বলেন, এর বেশি কিছু নয়। এ আয়াতের জন্য আনা লাইনে তাঁর যুক্তি খুলে বলা নেই। তাই তিনি যতটা জোর দিয়ে বলেছেন, কথাটাকে তার চেয়ে বেশি জোর দিয়ে ধরা ঠিক হবে না।"
          },
          {
            "en": "Did he get what he asked? The answer comes in the next two verses, and it comes in other words. Allah does not repeat until the Day they are raised. He says in 15:37 and 15:38: then you are among those given respite, until the Day of the known time. The request named the Resurrection; the grant names a time that is known. What that time is, and whether the grant reaches as far as the request, is not settled in any text consulted for 15:36. Those questions belong to 15:38, and this article will not answer them from memory.",
            "bn": "সে কি যা চেয়েছিল তা পেল? জবাব আসে পরের দুই আয়াতে, আর আসে ভিন্ন শব্দে। যেদিন তাদের ওঠানো হবে, আল্লাহ কথাটা আর ফিরিয়ে বলেন না। ১৫:৩৭ ও ১৫:৩৮ আয়াতে তিনি বলেন: তুমি অবকাশপ্রাপ্তদের একজন, নির্ধারিত সময়ের দিন পর্যন্ত। আবেদনে ছিল পুনরুত্থানের নাম, মঞ্জুরিতে আছে এমন এক সময়ের কথা, যা জানা। সেই সময়টা কী, আর মঞ্জুরি আবেদনের পুরো মেয়াদ ছুঁয়েছে কি না, ১৫:৩৬ আয়াতের জন্য আনা কোনো পাঠে তার মীমাংসা নেই। প্রশ্ন দুটি ১৫:৩৮ আয়াতের আলোচনার বিষয়। স্মৃতি থেকে এর জবাব এ লেখায় দেওয়া হবে না।"
          },
          {
            "en": "Two of the sources consulted here treat this verse only as part of a block. Ibn Kathir's abridged English commentary groups 15:34 to 15:38 under a heading on Iblis's expulsion and his reprieve, but the consulted portion stops at the curse. Ma'arif al-Qur'an groups 15:31 to 15:40, and what it says there concerns whether the command to prostrate reached Iblis at all. Neither says anything of its own about this request, so neither is drawn on here. The text returned for al-Qurtubi on 15:36 is a stray line about people who doubt a coming punishment, and it is set aside.",
            "bn": "আনা উৎসগুলোর দুটি এ আয়াতকে দেখে কেবল একটি গুচ্ছের অংশ হিসেবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৩৪ থেকে ১৫:৩৮ পর্যন্ত আয়াত এক শিরোনামে রাখে, যার বিষয় ইবলীসের বহিষ্কার ও তার অবকাশ। কিন্তু আনা অংশটুকু লা‘নতের কথায় এসেই থেমে গেছে। মাআরিফুল কুরআন ১৫:৩১ থেকে ১৫:৪০ পর্যন্ত আয়াত একসঙ্গে রাখে, আর সেখানে তার আলোচনা হলো, সাজদার হুকুম আদৌ ইবলীসের উপর বর্তেছিল কি না। এই আবেদন নিয়ে দুটির কোনোটিরই নিজস্ব কোনো কথা নেই, তাই এখানে সেগুলো কাজে লাগানো হয়নি। ১৫:৩৬ আয়াতে কুরতুবীর নামে যে পাঠ এসেছে, তা আসন্ন শাস্তি নিয়ে সন্দিহান লোকদের সম্পর্কে একটি বিচ্ছিন্ন লাইন। সেটাও বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Granted, Yet Not Honoured",
          "bn": "মঞ্জুর, তবু সম্মান নয়"
        },
        "p": [
          {
            "en": "As-Sa'di treats 15:36 to 15:38 together and reaches the point a reader most needs. Allah's answering his supplication, he writes, is no honour in his favour; it is only a trial and a test from Allah, for Iblis and for the servants, so that the truthful who obey their Master rather than their enemy may be made distinct from those who do not. The grant, on this reading, says nothing good about its recipient. It sets up a field on which everyone else will be tested.",
            "bn": "সা'দী ১৫:৩৬ থেকে ১৫:৩৮ আয়াত একসঙ্গে ব্যাখ্যা করেন, আর পাঠকের সবচেয়ে দরকারি কথাটায় পৌঁছে যান। তিনি লেখেন, আল্লাহ যে তার দু‘আ কবুল করলেন, তাতে তার কোনো সম্মান নেই। এ কেবল আল্লাহর পক্ষ থেকে পরীক্ষা, ইবলীসের জন্যও, বান্দাদের জন্যও। এতে আলাদা হয়ে যায়, কারা সত্যবাদী, যারা দুশমনের কথা না মেনে নিজের মালিকের কথা মানে, আর কারা তা নয়। এ পাঠে মঞ্জুরিটা প্রাপকের ভালো কিছুর সাক্ষ্য দেয় না। বরং এমন এক ময়দান তৈরি করে, যেখানে বাকি সবার পরীক্ষা হবে।"
          },
          {
            "en": "He draws the consequence at once: for that reason Allah warned us against him with the utmost warning and explained to us what he wants from us. The respite and the warning come together. Iblis has his time, and the human being has been told plainly who is using it and to what end. That changes how the verse lands on a reader. It is not a story about how Iblis got his way. It is a notice that he who asked for time asked for it against us, and that we were told in advance.",
            "bn": "এর ফল তিনি সঙ্গে সঙ্গেই টানেন: এ কারণেই আল্লাহ তার ব্যাপারে আমাদের সবচেয়ে কড়া সতর্কবাণী দিয়েছেন, আর সে আমাদের কাছে কী চায় তা খুলে বলেছেন। অবকাশ আর সতর্কবাণী এসেছে একসঙ্গে। ইবলীস তার সময় পেয়েছে, আর মানুষকে পরিষ্কার জানিয়ে দেওয়া হয়েছে, কে সে সময় কাজে লাগাচ্ছে, কী উদ্দেশ্যে। এতে পাঠকের কাছে আয়াতটার ওজন বদলে যায়। ইবলীস কীভাবে নিজের ইচ্ছা পূরণ করল, এ তার গল্প নয়। এ এক আগাম খবর: যে সময় চেয়েছিল, সে চেয়েছিল আমাদের বিরুদ্ধে, আর আমাদের তা আগেই জানিয়ে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Plea, Several Tellings",
          "bn": "এক আবেদন, একাধিক বর্ণনা"
        },
        "p": [
          {
            "en": "The Qur'an records this request in more than one surah, and the wording shifts. In 7:14 it is bare: anzirni ila yawmi yub'athun, grant me respite until the Day they are raised, with neither my Lord nor then. The reply in 7:15 is equally short: you are among those given respite, with no term stated. In 38:79 to 38:81 the exchange runs word for word as it does here, including the Day of the known time. And 17:62 gives the request as a condition, with its purpose attached in the same sentence.",
            "bn": "কুরআন এ আবেদন একাধিক সূরায় উল্লেখ করেছে, আর শব্দ কিছুটা বদলায়। ৭:১৪ আয়াতে তা একেবারে ছোট: আনযিরনী ইলা ইয়াওমি ইউব‘আসূন, যেদিন তাদের ওঠানো হবে সেদিন পর্যন্ত আমাকে অবকাশ দিন। সেখানে হে আমার রব নেই, তাহলেও নেই। ৭:১৫ আয়াতের জবাবও তেমনি ছোট: তুমি অবকাশপ্রাপ্তদের একজন, কোনো মেয়াদের উল্লেখ নেই। ৩৮:৭৯ থেকে ৩৮:৮১ আয়াতে কথোপকথন হুবহু এখানকার মতো, নির্ধারিত সময়ের দিনসহ। আর ১৭:৬২ আয়াতে আবেদনটা এসেছে শর্তের আকারে, একই বাক্যে তার উদ্দেশ্যসহ।"
          },
          {
            "en": "No commentary consulted for 15:36 compares these passages, so nothing is claimed here about why the wording differs. What the comparison shows is limited and plain. In every telling Iblis asks for time and not for pardon, and in 7:15 and 38:80, as here, the request is met. In 17:62 the purpose sits inside the request itself, so the reader of that verse cannot miss what the time was for. Read beside it, the shorter plea in this surah carries the same weight, even though it states no aim of its own.",
            "bn": "১৫:৩৬ আয়াতের জন্য আনা কোনো তাফসীর এ অংশগুলোকে পাশাপাশি রেখে তুলনা করেনি। তাই শব্দ কেন বদলায়, সে ব্যাপারে এখানে কোনো দাবি করা হচ্ছে না। তুলনা থেকে যা বোঝা যায়, তা সীমিত আর সরল। প্রতিটি বর্ণনায় ইবলীস চেয়েছে সময়, ক্ষমা নয়। আর ৭:১৫ ও ৩৮:৮০ আয়াতে, এখানকার মতোই, তার চাওয়া মঞ্জুর হয়েছে। ১৭:৬২ আয়াতে উদ্দেশ্যটা আবেদনের ভেতরেই বসানো, ফলে সময়টা কীসের জন্য, সে আয়াতের পাঠকের চোখ এড়ায় না। সেটার পাশে রেখে পড়লে এ সূরার ছোট আবেদনটাও একই ওজন বহন করে, যদিও এখানে নিজের কোনো উদ্দেশ্য সে মুখে আনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Respite in the Prophet's Words",
          "bn": "নবীজির ﷺ কথায় অবকাশ"
        },
        "p": [
          {
            "en": "No commentary consulted for this verse attaches a hadith of the Prophet ﷺ to it, and none is attached here. One sound narration speaks of respite in general, and it is marked as such: it concerns the wrongdoer, and the Prophet ﷺ recited 11:102 with it, not this verse. Sahih al-Bukhari (4686) records from Abu Musa that Allah's Messenger ﷺ said: Allah gives respite to the oppressor, but when He takes him over, He never releases him. Then he recited: Such is the seizure of your Lord when He seizes (population of) towns in the midst of their wrong: painful indeed, and severe is His seizure.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে নবী ﷺ-এর কোনো হাদিস জুড়ে দেয়নি, এখানেও জোড়া হচ্ছে না। অবকাশ নিয়ে সাধারণভাবে একটি সহীহ বর্ণনা আছে, আর তা সাধারণ বর্ণনা হিসেবেই চিহ্নিত থাকল। এর বিষয় জালিম, আর নবী ﷺ এর সঙ্গে ১১:১০২ আয়াত পড়েছিলেন, এ আয়াত নয়। সহীহ বুখারী (৪৬৮৬) আবু মূসা (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: আল্লাহ জালিমকে অবকাশ দেন, কিন্তু যখন তাকে পাকড়াও করেন, তখন আর ছাড়েন না। তারপর তিনি পড়লেন: তোমার রবের পাকড়াও এমনই, যখন তিনি জনপদগুলোকে পাকড়াও করেন তাদের জুলুমে লিপ্ত অবস্থায়। নিশ্চয় তাঁর পাকড়াও বড় যন্ত্রণাদায়ক, বড় কঠিন।"
          },
          {
            "en": "A second narration, also general, speaks to the other side of the same stretch of time. Jami' at-Tirmidhi (3537) records from Ibn Umar that the Prophet ﷺ said: Indeed Allah accepts the repentance of a slave as long as (his soul does not reach his throat). At-Tirmidhi grades it hasan gharib, and it is given here at that grade. Neither narration is about Iblis. Placed beside the verse, they show respite from both ends: it can be the space before a seizure, and it is also the space in which repentance is still accepted.",
            "bn": "আরেকটি বর্ণনা, এটিও সাধারণ, একই সময়ের অন্য দিকটা দেখায়। জামি‘ তিরমিযী (৩৫৩৭) ইবন উমর (রাঃ) থেকে বর্ণনা করে, নবী ﷺ বলেছেন: নিশ্চয় আল্লাহ বান্দার তওবা কবুল করেন, যতক্ষণ না তার প্রাণ কণ্ঠনালিতে এসে পৌঁছায়। তিরমিযী একে হাসান গরীব বলেছেন, আর এখানে সে মানসহই আনা হলো। কোনো বর্ণনাই ইবলীস সম্পর্কে নয়। আয়াতের পাশে রাখলে বর্ণনা দুটি অবকাশকে দুই দিক থেকে দেখায়। অবকাশ হতে পারে পাকড়াওয়ের আগের সময়, আবার এটাই সেই সময়, যখন তওবা এখনো কবুল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Time I Am Still Given",
          "bn": "যে সময় এখনো হাতে আছে"
        },
        "p": [
          {
            "en": "The verse describes Iblis and what he asked; it licenses nothing against any living person or community, and no one is to be named as his likeness. Its question turns inward instead. Iblis was given time, and on as-Sa'di's reading the gift was a test. Every reader is also living on time that was given. The day that begins each morning is owed to no one, and the Qur'an has just shown what one creature chose to do with his. The question left for me is what I am doing with mine.",
            "bn": "আয়াতটি ইবলীস আর তার চাওয়ার বর্ণনা দেয়। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না, কাউকে তার সঙ্গে তুলনা করারও নয়। আয়াতের প্রশ্নটা বরং ভেতরের দিকে ফেরে। ইবলীস সময় পেয়েছিল, আর সা'দীর পাঠে সে দান ছিল পরীক্ষা। প্রত্যেক পাঠকও বেঁচে আছেন পাওয়া সময়ের উপর। প্রতি সকালে যে দিন শুরু হয়, তা কারও পাওনা নয়। একজন তার সময় দিয়ে কী করতে চেয়েছিল, কুরআন তা এইমাত্র দেখাল। আমার জন্য প্রশ্ন একটাই: আমার সময় দিয়ে আমি কী করছি?"
          },
          {
            "en": "There is a way of living that copies the request without meaning to. It is the habit of asking for later: later I will pray properly, later I will return what I owe, later I will stop. The words are not Iblis's, but the shape is close, because it asks for more time without asking for pardon. Each delay feels small on the day it is made. The Tirmidhi narration above sets a limit on that feeling: repentance is accepted until the soul reaches the throat, and no one is told in advance when that will be.",
            "bn": "এমন এক জীবনধারা আছে, যা না বুঝেই এ আবেদনের নকল করে। সেটা হলো পরে করার অভ্যাস। পরে ঠিকমতো নামাজ পড়ব, পরে পাওনা ফিরিয়ে দেব, পরে ছেড়ে দেব। কথাগুলো ইবলীসের নয়, কিন্তু ধরনটা কাছাকাছি। এখানেও ক্ষমা না চেয়ে কেবল আরও সময় চাওয়া হচ্ছে। যেদিন পিছিয়ে দেওয়া হয়, সেদিন প্রতিটি দেরিকে ছোটই মনে হয়। উপরের তিরমিযীর বর্ণনা এ অনুভূতির একটা সীমা টেনে দেয়। প্রাণ কণ্ঠনালিতে পৌঁছানো পর্যন্ত তওবা কবুল হয়, আর সেটা কবে, তা কাউকে আগে থেকে বলে দেওয়া হয় না।"
          },
          {
            "en": "Respite can be used the other way. The same stretch of days that Iblis wanted for misleading is, for a believer, the room in which to turn back, make amends and begin again. So the reflection is practical. What have I kept postponing? What would I set right today if I believed my term was nearer than I think? He who asked for time in this verse wanted it in order to go on as he was. The reader is asked to want it in order to come back, and to begin before the day that is known.",
            "bn": "অবকাশ উল্টো পথেও কাজে লাগানো যায়। যে দিনগুলো ইবলীস চেয়েছিল মানুষকে বিপথে নিতে, মুমিনের কাছে সেই দিনগুলোই ফিরে আসার, ক্ষতি পুষিয়ে দেওয়ার, নতুন করে শুরু করার সুযোগ। তাই এ ভাবনা একেবারে কাজের ভাবনা। কোন কাজটা আমি কেবলই পিছিয়ে যাচ্ছি? যদি বিশ্বাস করতাম আমার মেয়াদ আমার ধারণার চেয়ে কাছে, তাহলে আজ কী ঠিক করে নিতাম? এ আয়াতে যে সময় চেয়েছিল, সে চেয়েছিল যেমন ছিল তেমনই চলতে। পাঠকের কাছে চাওয়া হচ্ছে, সময়টাকে যেন সে ফিরে আসার জন্য চায়, আর সেই জানা দিনটি আসার আগেই শুরু করে।"
          }
        ]
      }
    ]
  },
  "15:45": {
    "sections": [
      {
        "h": {
          "en": "Straight After Seven Gates",
          "bn": "সাত দরজার ঠিক পরেই"
        },
        "p": [
          {
            "en": "The verse arrives at the end of a hard passage. In 15:39 Iblis swears to make disobedience look attractive to people on earth and to mislead them all, excepting only the chosen servants of 15:40. Allah answers in 15:42 that he has no authority over His servants except those who follow him, and in 15:43 and 15:44 that Hell is the promised place of those followers, with seven gates and a share of them assigned to each. Then, with no story in between, come five Arabic words: inna al-muttaqina fi jannatin wa-'uyun.",
            "bn": "আয়াতটি আসে এক কঠিন অংশের শেষে। ১৫:৩৯ আয়াতে ইবলীস কসম খায়, পৃথিবীতে মানুষের চোখে নাফরমানিকে সে আকর্ষণীয় করে তুলবে আর সবাইকে পথভ্রষ্ট করবে। বাদ থাকবে কেবল ১৫:৪০ আয়াতের বাছাই করা বান্দারা। আল্লাহ ১৫:৪২ আয়াতে জবাব দেন, তাঁর বান্দাদের উপর তার কোনো ক্ষমতা নেই, যারা তাকে অনুসরণ করে তারা ছাড়া। ১৫:৪৩ ও ১৫:৪৪ আয়াতে বলা হয়, সেই অনুসারীদের ওয়াদাকৃত ঠিকানা জাহান্নাম, তার সাতটি দরজা, প্রতিটি দরজার জন্য তাদের একটি ভাগ নির্দিষ্ট। তারপর মাঝখানে কোনো কাহিনি ছাড়াই আসে আরবির পাঁচটি শব্দ: ইন্নাল মুত্তাকীনা ফী জান্নাতিন ওয়া উয়ূন।"
          },
          {
            "en": "The commentators read the turn as deliberate. Ibn Kathir opens his note on the verse by saying that, having mentioned the state of the people of the Fire, Allah turned to mention Paradise, and that its people are in gardens and springs. As-Sa'di draws the pairing more sharply: once Allah had mentioned the punishment and severe torment He prepared for His enemies, the followers of Iblis, He mentioned what He prepared for His friends, the awliya', of great favour and lasting bliss. One passage, in their reading, holds both outcomes side by side.",
            "bn": "তাফসীরকারেরা এই মোড়টাকে ইচ্ছাকৃত বলেই পড়েন। ইবন কাসীর আয়াতটির আলোচনা শুরু করেন এ কথা দিয়ে: জাহান্নামীদের অবস্থা বলার পর আল্লাহ জান্নাতের কথায় এলেন, আর বললেন তার বাসিন্দারা বাগান ও ঝরনার মাঝে। সা'দী জোড়াটাকে আরও স্পষ্ট করে দেখান। আল্লাহ তাঁর শত্রুদের জন্য, অর্থাৎ ইবলীসের অনুসারীদের জন্য, যে শাস্তি আর কঠিন আযাব প্রস্তুত রেখেছেন তা বলার পর বললেন তাঁর আউলিয়ার জন্য কী রেখেছেন: বিরাট অনুগ্রহ আর চিরস্থায়ী নিয়ামত। তাঁদের পাঠে একই অংশে দুই পরিণাম পাশাপাশি রাখা।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded Against What",
          "bn": "কিসের থেকে বেঁচে চলা"
        },
        "p": [
          {
            "en": "Al-muttaqin are those who have taqwa, and the commentators explain the word by what it guards against. At-Tabari puts it in terms of Allah: those who guarded against Allah by obeying Him and feared Him, and so kept away from disobeying Him. The Muyassar says the same in the language of commands: those who guarded against Allah by carrying out what He ordered and avoiding what He forbade. In both, taqwa is not a mood. It is a way of acting that shows in what a person does and what he leaves.",
            "bn": "মুত্তাকী মানে যার তাকওয়া আছে, আর তাফসীরকারেরা শব্দটা বোঝান সে কিসের থেকে বেঁচে চলে তা দিয়ে। তাবারী কথাটা বলেন আল্লাহকে কেন্দ্র করে: যারা আনুগত্যের মাধ্যমে আল্লাহকে ভয় করে চলেছে, তাঁকে ভয় পেয়েছে, আর তাই তাঁর নাফরমানি থেকে দূরে থেকেছে। মুয়াসসার একই কথা বলে হুকুমের ভাষায়: যারা আল্লাহর আদেশ পালন করে আর নিষেধ থেকে বিরত থেকে তাঁকে ভয় করে চলেছে। দুই ব্যাখ্যাতেই তাকওয়া কোনো মনের অবস্থা নয়। তাকওয়া এক ধরনের চলা, যা দেখা যায় মানুষ কী করে আর কী ছেড়ে দেয় তাতে।"
          },
          {
            "en": "Two others name the thing avoided, and their lists differ in reach. Al-Qurtubi says the muttaqin here are those who guarded against al-fawahish and al-shirk: gross indecencies and associating partners with Allah. As-Sa'di says they are those who guarded against obeying Satan and against what he calls them to of all sins and disobedience. One names the gravest wrongs, the other every wrong Satan invites to. Neither commentator argues with the other, and the article does not choose between them; both readings stand in the texts as given.",
            "bn": "আরও দুজন নাম ধরে বলেন কী থেকে বাঁচা, আর তাঁদের তালিকার পরিধি আলাদা। কুরতুবী বলেন, এখানে মুত্তাকী তারা, যারা আল-ফাওয়াহিশ ও শিরক থেকে বেঁচে থেকেছে, অর্থাৎ জঘন্য অশ্লীলতা আর আল্লাহর সাথে শরীক করা থেকে। সা'দী বলেন, তারা শয়তানের আনুগত্য থেকে বেঁচেছে, আর শয়তান যেসব গুনাহ ও নাফরমানির দিকে ডাকে তার সবগুলো থেকে। একজন বলেন সবচেয়ে বড় অন্যায়গুলোর কথা, অন্যজন শয়তানের ডাকা প্রতিটি অন্যায়ের কথা। কেউ কারও সঙ্গে তর্ক করেননি, আর এ লেখাও কোনো একটিকে বেছে নেয় না। দুটি পাঠই তাদের নিজ নিজ তাফসীরে যেমন আছে তেমনই থাকুক।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whisper Refused",
          "bn": "ফিসফিসানিকে না বলা"
        },
        "p": [
          {
            "en": "As-Sa'di's wording reaches back into the passage. Iblis's vow in 15:39 was la-uzayyinanna lahum: I will surely make things attractive to them. Allah's reply in 15:42 was that his authority extends only to those who follow him. When as-Sa'di defines the muttaqin as those who guarded against obeying Satan and what he calls them to, the verse becomes the other half of that exchange: the people Iblis worked on and failed with. He adorned, and they declined to follow the adornment.",
            "bn": "সা'দীর ভাষা পুরো অংশটার দিকে ফিরে যায়। ১৫:৩৯ আয়াতে ইবলীসের কসম ছিল লা-উযাইয়্যিনান্না লাহুম: আমি অবশ্যই তাদের চোখে সাজিয়ে সুন্দর করে দেখাব। ১৫:৪২ আয়াতে আল্লাহর জবাব ছিল, তার ক্ষমতা কেবল তাদের উপর, যারা তাকে অনুসরণ করে। সা'দী যখন মুত্তাকীদের বলেন শয়তানের আনুগত্য আর তার ডাক থেকে বেঁচে থাকা মানুষ, তখন আয়াতটি হয়ে যায় সেই কথোপকথনের বাকি অর্ধেক। ইবলীস যাদের উপর চেষ্টা চালিয়েছিল আর ব্যর্থ হয়েছিল, এরা তারাই। সে সাজিয়ে দেখিয়েছে, তারা সেই সাজের পিছু নেয়নি।"
          },
          {
            "en": "That reading also keeps the promise from sounding like a reward for people who were never tempted. The passage takes for granted that everyone is approached; Iblis swore to mislead them all. What separates the two groups in 15:42 to 15:45 is not whether the whisper came, but whether it was followed. None of the commentators consulted here equates the muttaqin of this verse with the chosen servants of 15:40, so the article leaves that link unmade, and notes only that the two descriptions stand a few verses apart.",
            "bn": "এই পাঠ আরেকটা কাজ করে। ওয়াদাটাকে এমন লোকদের পুরস্কার মনে হতে দেয় না, যাদের কখনো প্রলোভনই আসেনি। অংশটা ধরে নেয়, প্রত্যেকের কাছেই শয়তান আসে। ইবলীস তো সবাইকে পথভ্রষ্ট করার কসম খেয়েছিল। ১৫:৪২ থেকে ১৫:৪৫ আয়াতে দুই দলের তফাত এ নয় যে কার কাছে ফিসফিসানি এসেছিল। তফাত হলো, কে তার পিছু নিয়েছে। যেসব তাফসীর এখানে পড়া হয়েছে, তার কোনোটিই এ আয়াতের মুত্তাকীদের ১৫:৪০ আয়াতের বাছাই করা বান্দাদের সঙ্গে এক করেনি। তাই এ লেখাও সে সংযোগ টানছে না। শুধু এটুকু বলছে যে দুটি বর্ণনা কয়েক আয়াতের ব্যবধানে দাঁড়িয়ে আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Gardens Read as Orchards",
          "bn": "জান্নাত মানে বাগিচা"
        },
        "p": [
          {
            "en": "Jannat is plural, and three of the texts consulted here gloss it with the same everyday word: basatin, orchards or planted gardens. Al-Qurtubi says fi jannat means in basatin, al-Baghawi says the same, and the Muyassar opens its paraphrase of the group with fi basatin. None of them adds a list of what grows there. Their restraint is worth copying. The verse gives a plural noun without an article, and the glosses answer it with a plain word any Arab listener knew from the land around him.",
            "bn": "জান্নাত শব্দটি এখানে বহুবচন, আর পড়া তাফসীরগুলোর তিনটি একে একই চেনা শব্দ দিয়ে ব্যাখ্যা করে: বাসাতীন, অর্থাৎ ফলের বাগান বা গাছ লাগানো বাগিচা। কুরতুবী বলেন, ফী জান্নাত মানে বাসাতীনে। বাগাভীও তাই বলেন। মুয়াসসার আয়াতগুচ্ছের ব্যাখ্যা শুরুই করে ফী বাসাতীন দিয়ে। তাঁদের কেউ সেখানে কী কী জন্মায় তার তালিকা জুড়ে দেননি। এই সংযম অনুসরণ করার মতো। আয়াত দিয়েছে আলিফ-লাম ছাড়া একটি বহুবচন শব্দ, আর ব্যাখ্যাকারেরা জবাব দিয়েছেন এমন সাদামাটা শব্দে, যা আশপাশের জমিন দেখে যেকোনো আরব শ্রোতা চিনত।"
          },
          {
            "en": "As-Sa'di alone describes. The gardens, he says, contain every kind of tree, and in them every delicious fruit has ripened, in every season. That is the whole of his description, and the article adds nothing to it. What he stresses is completeness and constancy: all the trees, all the fruits, all the times. Set against the verses just before, where the Fire is divided into portions at seven gates, his gardens are marked by the absence of any lack.",
            "bn": "বর্ণনা দেন কেবল সা'দী। তিনি বলেন, এই বাগানগুলোতে সব ধরনের গাছ আছে, আর সেখানে সব সুস্বাদু ফল পেকে থাকে, সব সময়। তাঁর বর্ণনা এটুকুই, আর এ লেখাও এর সঙ্গে কিছু যোগ করছে না। তাঁর জোর পূর্ণতা আর স্থায়িত্বের উপর: সব গাছ, সব ফল, সব সময়। ঠিক আগের আয়াতগুলোতে জাহান্নামকে সাতটি দরজায় ভাগে ভাগে বণ্টন করা হয়েছে। তার পাশে রাখলে সা'দীর বাগানের পরিচয় হলো, সেখানে কোনো কিছুর কমতি নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Springs, Rivers and a Vowel",
          "bn": "ঝরনা, নদী আর একটি স্বরচিহ্ন"
        },
        "p": [
          {
            "en": "'Uyun is the plural of 'ayn, a spring. Yet the commentators who gloss it reach for rivers. Al-Baghawi says in orchards and anhar, rivers. The Muyassar says in orchards and anhar jariya, flowing rivers. Al-Qurtubi is the most specific: the 'uyun, he says, are the four rivers, of water, wine, milk and honey. He gives no verse reference, but those are the four kinds of river that 47:15 names in the Garden promised to the muttaqun, a verse this series has already treated on its own page.",
            "bn": "উয়ূন শব্দটি আইন-এর বহুবচন, যার অর্থ ঝরনা। তবু যাঁরা এর ব্যাখ্যা দিয়েছেন, তাঁরা নদীর কথা বলেন। বাগাভী বলেন, বাগিচা আর আনহারে, অর্থাৎ নদীতে। মুয়াসসার বলে, বাগিচা আর আনহার জারিয়ায়, অর্থাৎ বয়ে চলা নদীতে। কুরতুবী সবচেয়ে নির্দিষ্ট করে বলেন: উয়ূন হলো চারটি নদী, পানি, শরাব, দুধ আর মধুর। তিনি কোনো আয়াতের উল্লেখ করেননি। তবে ৪৭:১৫ আয়াত মুত্তাকীদের ওয়াদাকৃত জান্নাতে ঠিক এই চার রকম নদীর কথাই বলে। সে আয়াত নিয়ে এই সিরিজে আলাদা লেখা আগেই আছে।"
          },
          {
            "en": "Al-Qurtubi then separates these from other named springs of Paradise. The springs mentioned in Surat al-Insan, kafur, zanjabil and salsabil, and tasnim in al-Mutaffifin, he says he will discuss with their people when he reaches them. Those names appear at 76:5, 76:17, 76:18 and 83:27. His point for this verse is only that its 'uyun are the four rivers, while those named springs belong to their own passages, so a reader should not import their details here.",
            "bn": "এরপর কুরতুবী জান্নাতের অন্য নামধারী ঝরনাগুলোকে এদের থেকে আলাদা করেন। সূরা আল-ইনসানে যেসব ঝরনার উল্লেখ আছে, কাফূর, যানজাবীল ও সালসাবীল, আর আল-মুতাফফিফীনে যে তাসনীমের কথা আছে, সেগুলো আর সেগুলোর অধিকারীদের কথা তিনি সেসব জায়গায় পৌঁছে বলবেন বলে জানান। নামগুলো আছে ৭৬:৫, ৭৬:১৭, ৭৬:১৮ ও ৮৩:২৭ আয়াতে। এ আয়াতের জন্য তাঁর কথা শুধু এটুকু: এখানকার উয়ূন হলো ওই চারটি নদী। নামধারী ঝরনাগুলো নিজ নিজ অংশের বিষয়, তাই সেগুলোর খুঁটিনাটি এখানে টেনে আনা ঠিক নয়।"
          },
          {
            "en": "He closes with a note on reading. The 'ayn of 'uyun may be read with damma, 'uyun, which is the original form, or with kasra, 'iyun, to suit the ya' that follows; both, he says, have been recited. The word is small, and the difference changes nothing in its meaning. It is a reminder that the text reached us as recitation, with its variations carefully kept, and that the commentators recorded even a vowel when a reading differed.",
            "bn": "শেষে তিনি পাঠ নিয়ে একটি কথা বলেন। উয়ূন শব্দের আইন পেশ দিয়ে পড়া যায়, উয়ূন, যা মূল রূপ। আবার পরের ইয়া-র সঙ্গে মিল রেখে যের দিয়েও পড়া যায়, ইয়ূন। তিনি বলেন, দুইভাবেই তিলাওয়াত হয়েছে। শব্দটি ছোট, আর এই পার্থক্যে অর্থের কিছুই বদলায় না। তবু এটি মনে করিয়ে দেয়, কুরআন আমাদের কাছে পৌঁছেছে তিলাওয়াত হিসেবে, তার ভিন্নতাগুলো যত্ন করে সংরক্ষণ করে। পাঠে একটি স্বরচিহ্নের পার্থক্য হলেও তাফসীরকারেরা তা লিখে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Group Goes Next",
          "bn": "আয়াতগুচ্ছ এরপর যেদিকে যায়"
        },
        "p": [
          {
            "en": "Three of the commentaries consulted here treat this verse as the opening of a group. The Muyassar paraphrases 15:45 to 15:48 together, Ma'arif al-Qur'an comments on 15:45 to 15:47, and the abridged English Ibn Kathir runs from 15:45 to 15:50. Only what they say of this verse is used above. What follows in their groups belongs to the next verses: the greeting to enter in peace and safety in 15:46, the rancour removed from hearts in 15:47, and the absence of fatigue and of any expulsion in 15:48. Each will need its own page.",
            "bn": "পড়া তাফসীরগুলোর তিনটি এ আয়াতকে একটি আয়াতগুচ্ছের শুরু হিসেবে দেখে। মুয়াসসার ১৫:৪৫ থেকে ১৫:৪৮ পর্যন্ত একসঙ্গে ব্যাখ্যা করে। মাআরিফুল কুরআন আলোচনা করে ১৫:৪৫ থেকে ১৫:৪৭ পর্যন্ত। আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ চলে ১৫:৪৫ থেকে ১৫:৫০ পর্যন্ত। ওপরে কেবল এ আয়াত সম্পর্কে তাঁদের কথাই নেওয়া হয়েছে। বাকিটা পরের আয়াতগুলোর বিষয়: ১৫:৪৬ আয়াতে শান্তি ও নিরাপত্তার সঙ্গে প্রবেশের আহ্বান, ১৫:৪৭ আয়াতে অন্তর থেকে বিদ্বেষ দূর করা, আর ১৫:৪৮ আয়াতে ক্লান্তি না থাকা আর কখনো বের করে না দেওয়া। প্রতিটির জন্য আলাদা লেখা দরকার।"
          },
          {
            "en": "The same care applies to hadith. None of the commentaries consulted here attaches a hadith to 15:45 itself. The narrations that Ibn Kathir and Ma'arif al-Qur'an bring in these groups are attached to the verses on rancour and on fatigue, and they will be weighed there. At the group's end Ibn Kathir reaches 15:49 and 15:50, forgiveness and painful punishment announced together, and says they show that a believer must live between hope and fear. That pair already has its own article in this series.",
            "bn": "হাদিসের বেলাতেও একই সতর্কতা। পড়া তাফসীরগুলোর কোনোটিই ১৫:৪৫ আয়াতের সঙ্গে সরাসরি কোনো হাদিস যুক্ত করেনি। ইবন কাসীর আর মাআরিফুল কুরআন এই আয়াতগুচ্ছে যেসব বর্ণনা এনেছেন, সেগুলো বিদ্বেষ আর ক্লান্তির আয়াতের সঙ্গে যুক্ত, আর সেগুলোর বিচার সেখানেই হবে। গুচ্ছের শেষে ইবন কাসীর পৌঁছান ১৫:৪৯ ও ১৫:৫০ আয়াতে, যেখানে ক্ষমা আর যন্ত্রণাদায়ক শাস্তির ঘোষণা একসঙ্গে। তিনি বলেন, এ থেকে বোঝা যায় মুমিনকে আশা আর ভয়ের মাঝখানে থাকতে হবে। সেই জোড়া নিয়ে এই সিরিজে আলাদা লেখা আগেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Quality, Not a Roll Call",
          "bn": "গুণের নাম, দলের তালিকা নয়"
        },
        "p": [
          {
            "en": "The verse does not say that some named people will be in gardens and springs. It says al-muttaqin, those who have a quality, and every commentator above defines that quality by conduct: obeying, avoiding, guarding against shirk and indecency, refusing Satan's call. No one can hold the title by birth or belonging. Taqwa, on these readings, is something done, and so the promise is open to anyone who does it, and cannot be claimed by anyone who merely wears the word.",
            "bn": "আয়াতটি বলে না যে নির্দিষ্ট কিছু লোক বাগান আর ঝরনার মাঝে থাকবে। বলে আল-মুত্তাকীন, অর্থাৎ যাদের একটি গুণ আছে। আর ওপরের প্রত্যেক তাফসীরকার সেই গুণকে সংজ্ঞায়িত করেছেন আচরণ দিয়ে: আনুগত্য, বিরত থাকা, শিরক ও অশ্লীলতা থেকে বেঁচে থাকা, শয়তানের ডাক প্রত্যাখ্যান করা। জন্ম বা দলের সুবাদে কেউ এই পরিচয়ের মালিক হয় না। এসব পাঠ অনুযায়ী তাকওয়া করার জিনিস। তাই যে তা করে, ওয়াদার দরজা তার জন্য খোলা। আর যে কেবল শব্দটা গায়ে জড়িয়ে রাখে, সে এর দাবিদার হতে পারে না।"
          },
          {
            "en": "The same holds, in reverse, for the verses before. 15:43 and 15:44 describe the end of those who follow Iblis, and the verse speaks only of what it names. It licenses nothing against any living person or community: no reader is given the right to assign a neighbour to one of the seven gates, or to count himself among the gardens. The passage is addressed to each listener about himself. The only verdict it invites is the one a person reaches about his own following.",
            "bn": "উল্টো দিক থেকে আগের আয়াতগুলোর বেলাতেও একই কথা। ১৫:৪৩ ও ১৫:৪৪ আয়াত ইবলীসের অনুসারীদের পরিণতির বর্ণনা দেয়, আর আয়াত যা বলে কেবল সেটুকুই বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। কোনো পাঠক প্রতিবেশীকে সাতটি দরজার কোনো একটিতে বসিয়ে দেওয়ার অধিকার পান না, নিজেকে বাগানবাসী বলে গুনে নেওয়ার অধিকারও পান না। এই অংশ প্রত্যেক শ্রোতাকে তার নিজের সম্পর্কেই বলছে। একমাত্র যে রায়ের দিকে এটি ডাকে, তা হলো নিজে কার পিছু নিচ্ছি, সে বিষয়ে নিজের রায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Which Voice to Follow",
          "bn": "কোন ডাকে সাড়া দেব"
        },
        "p": [
          {
            "en": "Read as a whole, the passage lays two roads beside each other and names what puts a person on each. One is following: 15:42 says Iblis's authority reaches those who follow him. The other is taqwa, and the commentators have made it concrete enough to practise. Do what Allah commanded. Leave what He forbade. Keep far from shirk and gross indecency. When something wrong has been made to look lovely, recognise whose work the decoration is, and decline it.",
            "bn": "পুরো অংশটা একসঙ্গে পড়লে দেখা যায়, দুটি পথ পাশাপাশি রাখা, আর কোনটা মানুষকে কোন পথে তোলে তাও বলে দেওয়া। একটি হলো অনুসরণ: ১৫:৪২ আয়াত বলে, ইবলীসের ক্ষমতা পৌঁছায় তার অনুসারীদের পর্যন্ত। অন্যটি তাকওয়া, আর তাফসীরকারেরা একে এতটাই স্পষ্ট করেছেন যে তা আমলে আনা যায়। আল্লাহ যা আদেশ করেছেন তা করুন। যা নিষেধ করেছেন তা ছাড়ুন। শিরক আর জঘন্য অশ্লীলতা থেকে দূরে থাকুন। কোনো অন্যায়কে যখন সুন্দর করে সাজিয়ে দেখানো হয়, চিনে নিন সাজটা কার হাতের, আর তা ফিরিয়ে দিন।"
          },
          {
            "en": "This is why the verse follows the threat so closely. Fear alone would leave the listener at the seven gates with nowhere to turn. The verse turns him at once towards a path with a name, and towards a place the commentators describe only as orchards full of ripe fruit and flowing water. Each day brings small versions of the same choice: an invitation dressed up, and a command that costs something. Taqwa is chosen there, one choice at a time, long before the gardens are reached.",
            "bn": "এ কারণেই আয়াতটি হুমকির এত কাছে এসেছে। শুধু ভয় শ্রোতাকে সাতটি দরজার সামনে দাঁড় করিয়ে রাখত, ফেরার কোনো দিক থাকত না। আয়াতটি তাকে সঙ্গে সঙ্গে ঘুরিয়ে দেয় এমন এক পথের দিকে, যার একটা নাম আছে। আর এমন এক ঠিকানার দিকে, যাকে তাফসীরকারেরা কেবল পাকা ফলে ভরা বাগান আর বয়ে চলা পানি বলেই বর্ণনা করেন। প্রতিদিন এই একই বাছাই ছোট ছোট রূপে সামনে আসে: সাজিয়ে আনা কোনো ডাক, আর এমন কোনো হুকুম যা মানতে কিছু ছাড়তে হয়। তাকওয়া বেছে নিতে হয় সেখানেই, একেকবারে একেকটি সিদ্ধান্তে, বাগানে পৌঁছানোর অনেক আগেই।"
          }
        ]
      }
    ]
  },
  "15:49": {
    "sections": [
      {
        "h": {
          "en": "After the Gardens, the Names",
          "bn": "জান্নাতের বর্ণনার পর দুটি নাম"
        },
        "p": [
          {
            "en": "15:49 opens a fresh turn in the surah. The verses just before it, 15:45 to 15:48, describe the righteous in gardens and springs, told to enter in peace and safety, their breasts cleared of rancour, brothers on couches facing one another, untouched by fatigue and never to be put out. Ibn Kathir's abridged English gives the order of the passage: since Allah had mentioned the condition of the people of the Fire, He followed it with the people of the Garden. Then come the two verses read here, which form one sentence.",
            "bn": "১৫:৪৯ আয়াতে সূরাটি নতুন দিকে মোড় নেয়। ঠিক আগের আয়াতগুলো, ১৫:৪৫ থেকে ১৫:৪৮, মুত্তাকীদের ছবি আঁকে। তারা থাকবে বাগান আর ঝরনার মাঝে। তাদের বলা হবে শান্তি ও নিরাপত্তার সাথে ঢুকে পড়তে। তাদের বুক থেকে বিদ্বেষ তুলে নেওয়া হবে, ভাই ভাই হয়ে তারা মুখোমুখি আসনে বসবে, কোনো ক্লান্তি তাদের ছোঁবে না, আর সেখান থেকে কখনো বের করা হবে না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর এই ক্রমটা ধরিয়ে দেয়: জাহান্নামীদের অবস্থা বলার পর আল্লাহ জান্নাতীদের কথা আনলেন। তারপর আসে এখানে আলোচিত দুটি আয়াত, যা আসলে একটাই বাক্য।"
          },
          {
            "en": "As-Sa'di explains what the turn does. Allah had just mentioned, from among the things He has made, those that stir longing and dread, namely the Garden and the Fire. Now He mentions what stirs the same two from His own attributes. In this reading the surah moves from what He made to the One who made it. The gates of 15:44 and the springs of 15:45 are places. This sentence is built around a speaker instead: My servants, I am, My punishment.",
            "bn": "এই মোড়ের কাজটা কী, সা'দী তা বুঝিয়ে বলেন। আল্লাহ এইমাত্র তাঁর সৃষ্ট জিনিসের মধ্যে সেই দুটির কথা বলেছেন, যা মনে আগ্রহ আর ভয় জাগায়: জান্নাত ও জাহান্নাম। এবার তিনি বলছেন নিজের গুণের কথা, যা ঠিক ওই দুটি অনুভূতিই জাগায়। এভাবে পড়লে সূরা সৃষ্টির বর্ণনা থেকে সরে আসে স্রষ্টার দিকে। ১৫:৪৪ আয়াতের দরজা আর ১৫:৪৫ আয়াতের ঝরনা, এগুলো জায়গার বিবরণ। এই বাক্যের কেন্দ্রে বরং একজন বক্তা: আমার বান্দারা, আমিই, আমার শাস্তি।"
          }
        ]
      },
      {
        "h": {
          "en": "Inform, Not Say",
          "bn": "শুধু বলা নয়, খবর পৌঁছানো"
        },
        "p": [
          {
            "en": "The sentence begins with a command: nabbi' 'ibadi, inform My servants. At-Tabari names the one addressed. Allah, exalted be His mention, is saying to His Prophet Muhammad ﷺ: tell My servants, O Muhammad. The Muyassar keeps the same address: inform, O Messenger, My servants. The message reaches them through the Messenger ﷺ, and the word that names them, 'ibadi, carries Allah's own possessive before anything at all is said about what they have done.",
            "bn": "বাক্যটি শুরু হয় একটি আদেশ দিয়ে: নাব্বি' ইবাদী, আমার বান্দাদের জানিয়ে দাও। কাকে বলা হচ্ছে, তাবারী তা স্পষ্ট করেন। আল্লাহ তাঁর নবী মুহাম্মাদ ﷺ-কে বলছেন: হে মুহাম্মাদ, আমার বান্দাদের জানিয়ে দাও। মুয়াসসারও একই সম্বোধন রাখে: হে রাসূল, আমার বান্দাদের জানিয়ে দিন। কথাটা তাদের কাছে পৌঁছায় রাসূল ﷺ-এর মাধ্যমে। আর যে শব্দে তাদের পরিচয়, সেই ইবাদী শব্দেই লেগে আছে আল্লাহর নিজের 'আমার'। তারা কী করেছে, সে প্রসঙ্গ ওঠার আগেই তারা তাঁর বান্দা।"
          },
          {
            "en": "As-Sa'di dwells on the verb itself. Nabbi'hum, he writes, means inform them with news that is firm and backed by proofs. That gloss shapes how the sentence is meant to land. What follows is not offered as a guess about Allah, or as a mood a servant may hope to find Him in. It is handed over as settled information, to be received and passed on as such.",
            "bn": "সা'দী থামেন ক্রিয়াপদটির উপর। তাঁর ব্যাখ্যায় নাব্বি'হুম মানে তাদের এমন খবর দাও যা পাকা এবং দলিল দিয়ে মজবুত। এই ব্যাখ্যা বুঝিয়ে দেয় বাক্যটা কীভাবে শ্রোতার কাছে পৌঁছানোর কথা। সামনে যা আসছে তা আল্লাহ সম্পর্কে কোনো অনুমান নয়। বান্দা কোনো এক দিন তাঁকে নরম মেজাজে পেয়ে যাবে, এমন আশার কথাও নয়। এ হলো নিশ্চিত খবর, যা সেভাবেই গ্রহণ করতে হবে, সেভাবেই অন্যের কাছে পৌঁছাতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Covering for Those Who Return",
          "bn": "যারা ফেরে, তাদের গুনাহ ঢেকে রাখা"
        },
        "p": [
          {
            "en": "Anni ana al-ghafuru ar-rahim: that it is I who am the Forgiving, the Merciful. At-Tabari explains both names as acts. Al-Ghafur is the One who covers their sins when they repent of them and turn back, by not exposing them for those sins and not punishing them for them. Ar-Rahim is the One merciful to them in not punishing them for those sins after they have repented. In his reading the covering and the mercy belong to a single moment, the servant's return.",
            "bn": "আন্নী আনাল গাফূরুর রাহীম: আমিই সেই ক্ষমাশীল, পরম দয়ালু। তাবারী দুটি নামকেই ব্যাখ্যা করেন কাজ হিসেবে। আল-গাফূর তিনি, যিনি বান্দার গুনাহ ঢেকে রাখেন যখন সে তা থেকে তওবা করে ফিরে আসে। সেই গুনাহর জন্য তিনি তাকে লোকের সামনে লাঞ্ছিত করেন না, শাস্তিও দেন না। আর আর-রাহীম তিনি, যিনি দয়া করে তওবার পর সেই গুনাহর জন্য তাকে আর শাস্তি দেন না। তাবারীর পাঠে ঢেকে রাখা আর দয়া, দুটোই জড়িয়ে আছে একটি মুহূর্তের সাথে: বান্দার ফিরে আসা।"
          },
          {
            "en": "Al-Baghawi brings Ibn 'Abbas (RA) on the same words: meaning, for whoever of them repents. The Muyassar says the same in its own phrasing: the Forgiving to the believers who repent, the Merciful to them. Three readings, then, from three different books, and all of them tie the forgiveness of this verse to turning back. None of them makes the announcement wait on a clean record. The condition they name is return, which is open to every servant the verse addresses.",
            "bn": "বাগাভী একই শব্দের ব্যাখ্যায় ইবন আব্বাস (রাঃ)-এর কথা আনেন: অর্থাৎ তাদের মধ্যে যে তওবা করে, তার জন্য। মুয়াসসার নিজের ভাষায় একই কথা বলে: তওবাকারী মুমিনদের জন্য তিনি ক্ষমাশীল, তাদের প্রতি দয়ালু। তিনটি ভিন্ন গ্রন্থের তিনটি ব্যাখ্যা, আর তিনটিই এ আয়াতের মাগফিরাতকে বেঁধে দেয় ফিরে আসার সাথে। কেউই বলেন না যে এই খবরের জন্য আগে আমলনামা পরিষ্কার হতে হবে। তাঁরা যে শর্তের কথা বলেন, তা হলো ফেরা। আর আয়াত যে বান্দাদের ডাকছে, তাদের প্রত্যেকের জন্য সে পথ খোলা।"
          },
          {
            "en": "As-Sa'di adds what the knowledge is for. When the servants come to know the fullness of His mercy and His forgiveness, he writes, they strive in the means that bring them to His mercy, leave their sins and repent of them, so as to attain His forgiveness. In his reading, learning that Allah is al-Ghafur is a reason to repent now, and the next verse will make sure it is never taken as a reason to wait.",
            "bn": "এই জানার উদ্দেশ্য কী, সা'দী তা যোগ করেন। তাঁর কথায়, বান্দারা যখন তাঁর রহমত ও মাগফিরাতের পূর্ণতা জানতে পারে, তখন তারা সেই উপায়গুলোর পেছনে ছোটে যা তাঁর রহমতের কাছে পৌঁছে দেয়। তারা গুনাহ ছেড়ে দেয়, তা থেকে তওবা করে, যাতে তাঁর মাগফিরাত পায়। সা'দীর পাঠে আল্লাহ গাফূর, এ কথা জানা মানে এখনই তওবা করার কারণ পাওয়া। আর পরের আয়াত নিশ্চিত করে যে কেউ যেন একে অপেক্ষা করার অজুহাত বানিয়ে না ফেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "My Punishment, the Painful One",
          "bn": "আমার শাস্তি, সেই যন্ত্রণাদায়ক শাস্তি"
        },
        "p": [
          {
            "en": "The sentence does not end at 15:49. Wa-anna 'adhabi huwa al-'adhabu al-alim: and that My punishment, it is the painful punishment. At-Tabari reads it as part of the same errand: and tell them also that My punishment, for whoever persists in disobeying Me, stays in it and does not repent of it, is the aching punishment that no other punishment resembles. Then he says what the clause is for. It is a warning from Allah to His creation against pressing on into disobedience, and a command to them to turn back and repent.",
            "bn": "বাক্যটি ১৫:৪৯ আয়াতে শেষ হয় না। ওয়া আন্না আযাবী হুয়াল আযাবুল আলীম: আর আমার শাস্তি, সেটাই যন্ত্রণাদায়ক শাস্তি। তাবারী একে একই দায়িত্বের অংশ হিসেবে পড়েন: তাদের এ কথাও জানিয়ে দাও যে, যে আমার নাফরমানিতে অটল থাকে, তাতেই লেগে থাকে আর তওবা করে না, তার জন্য আমার শাস্তি এমন কষ্টদায়ক যে অন্য কোনো শাস্তি তার মতো নয়। তারপর তিনি বলেন অংশটুকুর উদ্দেশ্য কী। এ হলো সৃষ্টির প্রতি আল্লাহর সতর্কবাণী, যেন তারা নাফরমানির দিকে এগিয়ে না যায়। সাথে আছে ফিরে আসা ও তওবা করার আদেশ।"
          },
          {
            "en": "The Muyassar draws the line in the same place: the painful, aching punishment is for those who do not repent. Set beside their readings of 15:49, the two verses divide along a single question. At-Tabari and the Muyassar both place the forgiveness with those who return and the punishment with those who persist. The warning answers the same question, whether the servant turns back, from the other side.",
            "bn": "মুয়াসসারও সীমারেখা টানে একই জায়গায়: কষ্টদায়ক, যন্ত্রণাময় শাস্তি তাদের জন্য, যারা তওবা করে না। ১৫:৪৯ আয়াতের ব্যাখ্যার পাশে রাখলে দেখা যায়, দুই আয়াত ভাগ হয়েছে একটিমাত্র প্রশ্নে। তাবারী ও মুয়াসসার দুজনেই মাগফিরাত রাখেন যারা ফেরে তাদের জন্য, আর শাস্তি রাখেন যারা অটল থাকে তাদের জন্য। সতর্কবাণীটা সেই একই প্রশ্নের জবাব দেয়, বান্দা ফিরছে কি না, শুধু অন্য দিক থেকে।"
          },
          {
            "en": "As-Sa'di gives the clause its own work. Even with all this, he says, hope must not stretch so far that it reaches a sense of safety and presumption, so inform them that My punishment is the painful punishment. In reality there is no punishment but Allah's, whose measure cannot be estimated and whose depth cannot be reached. He cites 89:25 and 89:26: none punishes as He punishes, and none binds as He binds. Knowing that, he says, they take care and keep away from every cause of punishment.",
            "bn": "সা'দী এই অংশকে আলাদা দায়িত্ব দেন। তিনি বলেন, এত কিছুর পরও আশা যেন এতদূর গড়িয়ে না যায় যে মানুষ নিজেকে নিরাপদ ভাবতে শুরু করে, নিশ্চিন্ত আর আত্মতুষ্ট হয়ে পড়ে। তাই তাদের জানাও, আমার শাস্তিই যন্ত্রণাদায়ক শাস্তি। সত্যিকারের শাস্তি বলতে আল্লাহর শাস্তিই, যার পরিমাণ আন্দাজ করা যায় না, যার গভীরতার তল পাওয়া যায় না। তিনি ৮৯:২৫ ও ৮৯:২৬ আয়াত উদ্ধৃত করেন: তাঁর মতো শাস্তি কেউ দেবে না, তাঁর মতো বাঁধনেও কেউ বাঁধবে না। সা'দী বলেন, এ কথা জানলে বান্দারা সাবধান হয় এবং শাস্তি ডেকে আনে এমন সবকিছু থেকে দূরে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Which Half Is Spoken First",
          "bn": "কোন অংশ আগে বলা হলো"
        },
        "p": [
          {
            "en": "Forgiveness and mercy come first, the punishment after. None of the commentaries fetched for these two verses stops to explain that order as such. What they give instead is how the pair works. Ibn Kathir paraphrases both verses as a single statement: tell My servants, O Muhammad, that I am the Possessor of mercy and the Possessor of painful punishment. He adds that a parallel verse has already come, and that the pair points to the two stations of hope and fear.",
            "bn": "মাগফিরাত আর রহমত আগে, শাস্তি পরে। এ দুই আয়াতের যে তাফসীরগুলো এখানে দেখা হয়েছে, তার কোনোটিই এই ক্রমের কারণ আলাদা করে ব্যাখ্যা করে না। বরং তারা দেখায়, জোড়াটা কাজ করে কীভাবে। ইবন কাসীর দুই আয়াতকে এক কথায় বলেন: হে মুহাম্মাদ, আমার বান্দাদের জানাও যে আমি রহমতের মালিক, আবার যন্ত্রণাদায়ক শাস্তিরও মালিক। তিনি যোগ করেন, এমন আয়াত আগেও এসেছে, আর এই জোড়া ইঙ্গিত দেয় দুটি অবস্থানের দিকে: আশা আর ভয়।"
          },
          {
            "en": "As-Sa'di's two steps run in the same direction as the verses: first the knowledge that sends a servant to repentance, then, with this, the check that keeps hope from becoming safety. 15:49 gives two names of Allah after I am: the Forgiving, the Merciful. 15:50 does not say I am the Punisher. It says My punishment, it is the painful punishment. None of the commentators fetched here builds anything on that difference, and this article draws nothing more from it than the words themselves show.",
            "bn": "সা'দীর দুই ধাপও চলে আয়াতের ক্রম ধরে। আগে সেই জ্ঞান, যা বান্দাকে তওবার দিকে পাঠায়। তারপর, এর সাথে, সেই লাগাম যা আশাকে নিশ্চিন্ততায় গড়াতে দেয় না। ১৫:৪৯ আয়াতে 'আমিই' বলার পর আল্লাহর দুটি নাম আসে: গাফূর, রাহীম। ১৫:৫০ আয়াত কিন্তু বলে না যে আমিই শাস্তিদাতা। বলে, আমার শাস্তি, সেটাই যন্ত্রণাদায়ক শাস্তি। এখানে দেখা কোনো তাফসীরকার এই পার্থক্যের উপর কিছু দাঁড় করাননি। এই লেখাও শব্দগুলো যা দেখায়, তার বেশি কিছু এ থেকে টানছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Laughter Near the Banu Shayba Door",
          "bn": "বনু শাইবার দরজার কাছে হাসি"
        },
        "p": [
          {
            "en": "Ibn Kathir records what has been mentioned as the occasion of revelation. Musa ibn 'Ubayda narrates from Mus'ab ibn Thabit that the Messenger of Allah ﷺ passed by some of his Companions who were laughing, and said: Remember the Garden, and remember the Fire. Then the verse came down. Ibn Kathir adds that Ibn Abi Hatim narrated it and that it is mursal, a report with no Companion named in its chain.",
            "bn": "আয়াত নাযিলের উপলক্ষ হিসেবে যা বলা হয়েছে, ইবন কাসীর তা উল্লেখ করেন। মূসা ইবন উবায়দা বর্ণনা করেন মুসআব ইবন সাবিত থেকে: রাসূলুল্লাহ ﷺ তাঁর কয়েকজন সাহাবীর পাশ দিয়ে যাচ্ছিলেন, তাঁরা তখন হাসছিলেন। তিনি বললেন, জান্নাতকে স্মরণ করো, জাহান্নামকে স্মরণ করো। তখন আয়াতটি নাযিল হয়। ইবন কাসীর জানান, এটি ইবন আবী হাতিম বর্ণনা করেছেন, আর বর্ণনাটি মুরসাল, অর্থাৎ এর সনদে কোনো সাহাবীর নাম নেই।"
          },
          {
            "en": "Ibn Kathir then gives a fuller scene from Ibn Jarir, and at-Tabari's own text under 15:50 carries it, through Ibn al-Mubarak and Mus'ab ibn Thabit, from a man among the Companions. The Messenger ﷺ came upon them from the door through which Banu Shayba enter and said: Do I not see you laughing? He turned away, and after going some way came back to them walking backwards and said: When I went out, Jibril (AS) came and said, O Muhammad, Allah says: why do you make My servants despair? Inform My servants, and the two verses follow.",
            "bn": "এরপর ইবন কাসীর ইবন জারীর থেকে আরও বিস্তারিত একটি দৃশ্য আনেন। তাবারীর নিজের তাফসীরেও ১৫:৫০ আয়াতের নিচে এটি আছে, ইবনুল মুবারক ও মুসআব ইবন সাবিতের সূত্রে, এক সাহাবী থেকে। তিনি বলেন, বনু শাইবা যে দরজা দিয়ে ঢোকে, সেখান দিয়ে রাসূলুল্লাহ ﷺ আমাদের সামনে এলেন এবং বললেন, আমি কি তোমাদের হাসতে দেখছি না? তারপর তিনি ফিরে গেলেন। কিছুদূর গিয়ে পেছন দিকে হেঁটে আবার আমাদের কাছে ফিরে এসে বললেন: আমি বের হতেই জিবরীল (আঃ) এসে বললেন, হে মুহাম্মাদ, আল্লাহ বলছেন, আমার বান্দাদের নিরাশ করছ কেন? তারপর আসে, আমার বান্দাদের জানিয়ে দাও, আর সাথে দুই আয়াত।"
          },
          {
            "en": "Al-Qurtubi has the scene twice. A hadith mentioned by al-Mawardi and al-Mahdawi has the Prophet ﷺ come out to the Companions while they were laughing and say: Do you laugh while the Garden and the Fire are before you? It weighed on them, and the verse came down. Ath-Tha'labi's wording, from Ibn 'Umar (RA), is the Banu Shayba scene, and in it Jibril's question reads: why do you make My servants despair of My mercy? Al-Baghawi introduces the report with it is narrated, and has only the Fire before them.",
            "bn": "কুরতুবী দৃশ্যটি দুবার আনেন। মাওয়ারদী ও মাহদাবীর উল্লেখ করা এক হাদীসে আছে, নবী ﷺ সাহাবীদের কাছে বেরিয়ে এলেন, তাঁরা তখন হাসছিলেন। তিনি বললেন, তোমরা হাসছ, অথচ জান্নাত আর জাহান্নাম তোমাদের সামনে? কথাটা তাঁদের মনে খুব ভারী লাগল, তখন আয়াতটি নাযিল হলো। সা'লাবীর বর্ণনা ইবন উমর (রাঃ) থেকে, সেটি বনু শাইবার দরজার দৃশ্য। সেখানে জিবরীলের প্রশ্ন: আমার বান্দাদের আমার রহমত থেকে নিরাশ করছ কেন? বাগাভী বর্ণনাটি শুরু করেন 'বর্ণিত আছে' বলে, আর তাঁর বর্ণনায় সামনে শুধু জাহান্নামের কথা।"
          },
          {
            "en": "Only one grading appears in these texts: Ibn Kathir's mursal, on the first report. None of these books grades the other reports, and this article adds no grade of its own. Read as they give them, the tellings lean differently. In the first, the verses arrive as a reminder of both the Garden and the Fire. In the second, they arrive as the answer to a question about despair, and they still bring the warning of 15:50 with them in the same breath.",
            "bn": "এসব গ্রন্থে মান নিয়ে মন্তব্য পাওয়া যায় একটিই: প্রথম বর্ণনাটিকে ইবন কাসীর মুরসাল বলেছেন। বাকি বর্ণনাগুলোর মান এই গ্রন্থগুলোর কোনোটিই উল্লেখ করেনি, আর এই লেখাও নিজের পক্ষ থেকে কোনো মান জুড়ছে না। তারা যেভাবে দিয়েছেন সেভাবে পড়লে বর্ণনাগুলোর ঝোঁক আলাদা। প্রথমটিতে আয়াত দুটি আসে জান্নাত ও জাহান্নাম দুটোরই স্মরণ হয়ে। দ্বিতীয়টিতে আসে নিরাশা নিয়ে করা এক প্রশ্নের জবাব হয়ে। তবু সেখানেও ১৫:৫০ আয়াতের সতর্কবাণী একই নিঃশ্বাসে সাথে চলে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Sayings That Pair Them",
          "bn": "দুটি হাদীস, একই জোড়া"
        },
        "p": [
          {
            "en": "Al-Qurtubi sets beside the verses a saying of the Prophet ﷺ which, he notes, Muslim narrated from Abu Hurayrah (RA), and calls the verses its counterpart. In Muslim's own wording (2755): If the believer knew what punishment is with Allah, no one would hope for His Garden; and if the disbeliever knew what mercy is with Allah, no one would despair of His Garden. Muslim includes it in his Sahih. Al-Qurtubi gives it as a parallel, not as an occasion, and his quotation ends of His mercy where Muslim's text reads of His Garden.",
            "bn": "কুরতুবী আয়াত দুটির পাশে রাখেন নবী ﷺ-এর একটি বাণী। তিনি জানান, মুসলিম এটি আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেছেন, আর আয়াত দুটিকে বলেন এর সমতুল্য। মুসলিমের নিজের শব্দে (২৭৫৫): মুমিন যদি জানত আল্লাহর কাছে কী শাস্তি আছে, তবে কেউ তাঁর জান্নাতের আশা করত না। আর কাফির যদি জানত আল্লাহর কাছে কী রহমত আছে, তবে কেউ তাঁর জান্নাত থেকে নিরাশ হতো না। মুসলিম এটি তাঁর সহীহ গ্রন্থে এনেছেন। কুরতুবী একে এনেছেন সমান্তরাল কথা হিসেবে, নাযিলের উপলক্ষ হিসেবে নয়। তাঁর উদ্ধৃতির শেষে আছে 'তাঁর রহমত থেকে', আর মুসলিমের পাঠে 'তাঁর জান্নাত থেকে'।"
          },
          {
            "en": "Al-Baghawi, under 15:50, brings through his own chain to al-Bukhari a report of Abu Hurayrah (RA), Bukhari 6469: Allah created mercy, on the day He created it, as a hundred mercies. He kept ninety-nine with Himself and sent one among all His creation. If the disbeliever knew all the mercy that is with Allah, he would not despair of the Garden; and if the believer knew all the punishment that is with Allah, he would not feel safe from the Fire. Al-Bukhari includes it in his Sahih, and it too is not tied to the verse as an occasion.",
            "bn": "বাগাভী ১৫:৫০ আয়াতের নিচে নিজের সনদে বুখারী পর্যন্ত পৌঁছে আবু হুরায়রা (রাঃ)-এর একটি বর্ণনা আনেন, যা বুখারীর ৬৪৬৯ নম্বরে আছে: আল্লাহ যেদিন রহমত সৃষ্টি করলেন, সেদিন তাকে করলেন একশ রহমত। নিরানব্বইটি তিনি নিজের কাছে রেখে দিলেন, আর একটি পাঠালেন তাঁর সমস্ত সৃষ্টির মাঝে। কাফির যদি আল্লাহর কাছে থাকা সব রহমতের কথা জানত, তবে জান্নাত থেকে নিরাশ হতো না। আর মুমিন যদি আল্লাহর কাছে থাকা সব শাস্তির কথা জানত, তবে জাহান্নাম থেকে নিজেকে নিরাপদ ভাবত না। বুখারী এটি তাঁর সহীহ গ্রন্থে এনেছেন। এটিও আয়াতের নাযিলের উপলক্ষ হিসেবে বর্ণিত নয়।"
          },
          {
            "en": "Both sayings end as 15:49 and 15:50 end, with mercy and punishment held together. Two neighbours already carry related reports, which are not repeated here: 7:156 the hundred mercies in Muslim's wording (2753), and 6:54 My mercy prevails over My anger (Bukhari 3194). What the narration under 15:50 adds is its closing pair: knowledge of the mercy keeps the disbeliever from despair, and knowledge of the punishment keeps the believer from feeling safe.",
            "bn": "১৫:৪৯ ও ১৫:৫০ যেভাবে শেষ হয়, দুটি হাদীসও সেভাবে শেষ হয়: রহমত আর শাস্তি পাশাপাশি। কাছাকাছি দুটি আয়াতে সম্পর্কিত বর্ণনা আগেই এসেছে, তাই এখানে আর আনা হলো না। ৭:১৫৬ আয়াতে আছে একশ রহমতের হাদীস, মুসলিমের শব্দে (২৭৫৩)। ৬:৫৪ আয়াতে আছে, আমার রহমত আমার ক্রোধের উপর প্রবল (বুখারী ৩১৯৪)। ১৫:৫০ আয়াতের নিচের বর্ণনাটি নতুন যা দেয়, তা এর শেষের জোড়া কথা: রহমতের জ্ঞান কাফিরকে নিরাশ হতে দেয় না, আর শাস্তির জ্ঞান মুমিনকে নিশ্চিন্ত হতে দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Two Places to Look",
          "bn": "দুই দিকে তাকানো"
        },
        "p": [
          {
            "en": "Ibn Kathir's English states the lesson plainly: a person must always be in a state between hope for Allah's mercy and fear of His punishment. The servant's heart, as-Sa'di says, should always be between fear and hope, longing and dread. When he looks at his Lord's mercy, forgiveness, generosity and kindness, that gives rise to hope and longing. When he looks at his own sins and his shortfall in his Lord's rights, that gives rise to fear, dread, and giving the sins up.",
            "bn": "ইবন কাসীরের ইংরেজি তাফসীর শিক্ষাটা সোজা কথায় বলে: মানুষকে সবসময় থাকতে হবে আল্লাহর রহমতের আশা আর তাঁর শাস্তির ভয়ের মাঝখানে। সা'দী বলেন, বান্দার অন্তর সবসময় থাকা উচিত ভয় আর আশা, আগ্রহ আর আতঙ্কের মাঝে। সে যখন তাকায় তার রবের রহমত, মাগফিরাত, দানশীলতা ও অনুগ্রহের দিকে, তখন তার মনে জন্ম নেয় আশা আর আগ্রহ। আর যখন তাকায় নিজের গুনাহ এবং রবের হক আদায়ে নিজের ঘাটতির দিকে, তখন জন্ম নেয় ভয়, আতঙ্ক, আর গুনাহ ছেড়ে দেওয়ার তাগিদ।"
          },
          {
            "en": "Al-Qurtubi turns it into a practice. This is how a person should remind himself and others, making them fear and making them hope, with fear stronger in health than in sickness. Qunut, despair, he calls giving up; raja', hope, set against it as the other extreme, he calls neglect; and the best of affairs is the middle. The verses tell servants about their own standing before Allah. They license no one to pronounce either half over another person. Then 15:51 repeats the command, inform them, for the guests of Ibrahim (AS).",
            "bn": "কুরতুবী একে বানিয়ে দেন নিয়মিত অভ্যাস। মানুষের উচিত নিজেকে ও অন্যকে এভাবেই মনে করিয়ে দেওয়া: ভয়ও দেখানো, আশাও জাগানো। আর সুস্থ অবস্থায় ভয় থাকবে অসুস্থ অবস্থার চেয়ে বেশি প্রবল। তিনি বলেন, কুনূত বা নিরাশা মানে হাল ছেড়ে দেওয়া। নিরাশার উল্টো প্রান্তে রাখা রাজা বা আশাকে তিনি বলেন অবহেলা। আর সব বিষয়ে উত্তম হলো মাঝামাঝি পথ। আয়াত দুটি বান্দাদের জানায় আল্লাহর সামনে তাদের নিজেদের অবস্থা। অন্য কারও উপর এর কোনো অংশ রায় হিসেবে চাপিয়ে দেওয়ার অনুমতি এরা কাউকে দেয় না। তারপর ১৫:৫১ আয়াত একই আদেশ আবার দেয়, তাদের জানিয়ে দাও, এবার ইবরাহীম (আঃ)-এর মেহমানদের কথা।"
          }
        ]
      }
    ]
  },
  "15:56": {
    "sections": [
      {
        "h": {
          "en": "Two Announcements First",
          "bn": "আগে দুটি ঘোষণা"
        },
        "p": [
          {
            "en": "A few lines before the story begins, Surah al-Hijr gives the Prophet ﷺ a pair of things to announce. In 15:49 he is told to inform Allah's servants that He is the Forgiving, the Merciful, and in 15:50 that His punishment is the painful punishment. The very next verse, 15:51, opens with, and inform them about the guests of Ibrahim. The announcement is stated, and then it is illustrated.",
            "bn": "কাহিনি শুরুর কয়েক লাইন আগে সূরা আল-হিজর নবী ﷺ-কে দুটি কথা ঘোষণা করতে বলে। ১৫:৪৯ আয়াতে তাঁকে বলা হয় আল্লাহর বান্দাদের জানাতে যে তিনিই ক্ষমাশীল, পরম দয়ালু। আর ১৫:৫০ আয়াতে বলা হয় জানাতে যে তাঁর শাস্তিই যন্ত্রণাদায়ক শাস্তি। ঠিক পরের আয়াত ১৫:৫১ শুরু হয় এ কথায়: আর তাদের ইবরাহীমের মেহমানদের কথা জানাও। আগে ঘোষণা, তারপর তার দৃষ্টান্ত।"
          },
          {
            "en": "Both halves are illustrated in one visit. The same messengers who bring Ibrahim (AS) the news of a son bring destruction to the people of Lut (AS), as they say themselves in 15:58 and after. So Ibrahim's sentence about despair is not spoken in a vacuum. It is spoken inside a passage that has just insisted mercy and punishment are both real and both His.",
            "bn": "একটি সফরেই দুই অর্ধেক দেখানো হয়েছে। যে ফেরেশতারা ইবরাহীম (আঃ)-এর কাছে পুত্রের সুসংবাদ নিয়ে আসেন, তাঁরাই লূত (আঃ)-এর জাতির জন্য নিয়ে যান ধ্বংস। ১৫:৫৮ আয়াতে ও তার পরে তাঁরা নিজেরাই সে কথা বলেন। তাই নিরাশা নিয়ে ইবরাহীমের কথাটি শূন্যে বলা হয়নি। বলা হয়েছে এমন এক অংশের ভেতরে, যা ঠিক আগেই জোর দিয়ে বলেছে: রহমতও সত্য, শাস্তিও সত্য, আর দুটোই তাঁর।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was Actually Said",
          "bn": "আসলে কী বলা হয়েছিল"
        },
        "p": [
          {
            "en": "The visitors enter and say peace, and he answers that he is apprehensive of them, both within 15:52 itself. In 15:53 they tell him not to fear and give him good news of a learned boy. His reply in 15:54 is the hinge: have you given me good news although old age has come upon me, then of what do you give news? They answer in 15:55 that the news is given in truth, so do not be of the despairing.",
            "bn": "অতিথিরা ঘরে ঢুকে সালাম দেন, আর তিনি বলেন, তিনি তাঁদের নিয়ে শঙ্কিত। দুটো কথাই ১৫:৫২ আয়াতের ভেতরে। ১৫:৫৩ আয়াতে তাঁরা তাঁকে ভয় না পেতে বলেন, আর এক জ্ঞানী পুত্রের সুসংবাদ দেন। মোড় ঘোরে ১৫:৫৪ আয়াতে তাঁর জবাবে: বার্ধক্য আমাকে ছুঁয়ে ফেলার পরও তোমরা আমাকে সুসংবাদ দিচ্ছ? তাহলে কিসের সুসংবাদ দিচ্ছ? ১৫:৫৫ আয়াতে তাঁরা জবাব দেন, আমরা তোমাকে সত্য সুসংবাদই দিয়েছি, কাজেই নিরাশদের অন্তর্ভুক্ত হয়ো না।"
          },
          {
            "en": "That last phrase is the one to hold on to, because Ibrahim (AS) answers it with its own word. The angels use the participle al-qanitin, the despairing ones — from the root with the emphatic ta, not the qanitin of devout obedience in 33:35 — and he replies with the verb from the same root, yaqnatu. His answer is seven words in the Arabic, and it is a question rather than a defence: and who despairs of the mercy of his Lord except those who are astray? He does not say he was not despairing. He says that the category does not fit a person who knows his Lord.",
            "bn": "এই শেষ কথাটিই মনে রাখার মতো, কারণ ইবরাহীম (আঃ) এর জবাব দেন ঠিক এই শব্দ দিয়েই। ফেরেশতারা বলেন ইসমে ফা'ইল 'আল-ক্বানিত্বীন', নিরাশ লোকেরা। শব্দটি এসেছে ভারী ত্ব-যুক্ত ধাতু থেকে। ৩৩:৩৫ আয়াতের আনুগত্যবাচক 'আল-ক্বানিতীন' এ শব্দ নয়। আর তিনি জবাব দেন একই ধাতুর ক্রিয়া 'ইয়াক্বনাতু' দিয়ে। আরবিতে তাঁর জবাব সাত শব্দের, আর তা আত্মপক্ষ সমর্থন নয়, একটি প্রশ্ন: পথভ্রষ্টরা ছাড়া আর কে তার রবের রহমত থেকে নিরাশ হয়? তিনি বলেন না যে তিনি নিরাশ হননি। তিনি বলেন, যে নিজের রবকে চেনে, তার বেলায় এ নাম খাটে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder Is Not Doubt",
          "bn": "বিস্ময় সংশয় নয়"
        },
        "p": [
          {
            "en": "It is easy to misread his question in 15:54 as hesitation. The commentators, Ibn Kathir and al-Qurtubi among them, read it as astonishment at the size of the gift rather than doubt about the Giver. His own reply in 15:56 settles the matter, since a man defending himself against a charge of despair would answer differently. He does not plead his record; he states a rule about who despairs, and lets the rule speak for him.",
            "bn": "১৫:৫৪ আয়াতে তাঁর প্রশ্নটাকে দ্বিধা ভেবে ভুল বোঝা সহজ। কিন্তু ইবনে কাসীর, আল-কুরতুবীসহ মুফাসসিরগণ একে দাতার ব্যাপারে সংশয় হিসেবে পড়েন না। তাঁদের মতে এ হলো দানের বিশালতা দেখে বিস্ময়। ১৫:৫৬ আয়াতে তাঁর নিজের জবাবই ব্যাপারটা মিটিয়ে দেয়। নিরাশার অভিযোগ থেকে নিজেকে বাঁচাতে চাইলে মানুষ অন্যভাবে জবাব দিত। তিনি নিজের অতীতের কথা তুলে ধরেন না। তিনি শুধু বলে দেন কে নিরাশ হয়, আর সেই নিয়মটিকেই তাঁর হয়ে কথা বলতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Despair Named as Straying",
          "bn": "নিরাশা মানে পথ হারানো"
        },
        "p": [
          {
            "en": "The word he uses, qunut with the emphatic ta — not the qunut of devotion recited in witr — is not ordinary sadness. It is the settled conclusion that there is no way through — the closing of a case. And the only people he allows into that category are ad-dallun, those who have gone off the road. That is a diagnosis, not an insult. Despair is treated as a navigational error: a person who has concluded that Allah's mercy has run out has misjudged where he is and what is around him.",
            "bn": "তিনি যে শব্দটি ব্যবহার করেন, তা 'ক্বুনূত্ব', ভারী ত্ব দিয়ে। বিতরের দোয়ায়ে কুনূতের 'কুনূত' এ শব্দ নয়। এটা সাধারণ দুঃখও নয়। এ হলো মনের স্থির সিদ্ধান্ত যে আর কোনো পথ নেই, ব্যাপারটা চিরতরে চুকে গেছে। আর এই দলে তিনি ঢুকতে দেন কেবল 'আদ-দাল্লীন'দের, যারা পথ থেকে সরে গেছে। এটা গালি নয়, আসল সমস্যাটা ধরিয়ে দেওয়া। নিরাশাকে এখানে দেখা হয় পথ চেনার ভুল হিসেবে। যে ধরে নিয়েছে আল্লাহর রহমত ফুরিয়ে গেছে, সে ভুল বুঝেছে সে কোথায় আছে আর তার চারপাশে কী আছে।"
          },
          {
            "en": "The same judgement is passed once more, in Ya'qub's instruction to his sons at 12:87, and the same word is forbidden outright in the address to those who have gone to excess against themselves at 39:53, both of which this app treats at length in their own articles. What is distinctive here is the speaker and the situation. The other two are spoken to people already in grief or in guilt. This one is spoken by a man receiving good news, which is when the rule is easiest to state and hardest to remember later.",
            "bn": "একই রায় আরেকবার এসেছে ১২:৮৭ আয়াতে, ছেলেদের প্রতি ইয়াকুবের উপদেশে। আর যারা নিজেদের ওপর বাড়াবাড়ি করেছে, তাদের ডেকে ৩৯:৫৩ আয়াতে এই শব্দ দিয়েই সরাসরি নিষেধ করা হয়েছে। এ অ্যাপে দুটি আয়াত নিয়েই আলাদা প্রবন্ধে বিস্তারিত আলোচনা আছে। এখানে আলাদা হলো বক্তা আর পরিস্থিতি। ওই দুটি কথা বলা হয়েছে এমন মানুষদের, যারা আগে থেকেই শোকে বা অপরাধবোধে ডুবে আছে। আর এ কথা বলছেন এমন একজন, যিনি সবে সুসংবাদ পাচ্ছেন। ঠিক তখনই নিয়মটা মুখে বলা সবচেয়ে সহজ, আর পরে মনে রাখা সবচেয়ে কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying It Before You Need It",
          "bn": "প্রয়োজনের আগেই বলে রাখা"
        },
        "p": [
          {
            "en": "That is the practical use of this verse. Despair rarely announces itself as a belief about Allah. It arrives as arithmetic — the age, the years, the diagnosis, the record — and the arithmetic is usually correct. Ibrahim (AS) does not dispute his age. He simply refuses to let the arithmetic decide what Allah will do, because the sum was never the whole of the matter.",
            "bn": "এ আয়াতের কাজের দিকটা এখানেই। নিরাশা খুব কমই আল্লাহ সম্পর্কে কোনো বিশ্বাসের চেহারা নিয়ে আসে। আসে হিসাব হয়ে: বয়স, কেটে যাওয়া বছর, ডাক্তারের দেওয়া রোগের খবর, অতীতের খাতা। আর হিসাবটা সাধারণত ভুলও থাকে না। ইবরাহীম (আঃ) নিজের বয়স নিয়ে তর্ক করেন না। তিনি শুধু এই হিসাবকে ঠিক করতে দেন না আল্লাহ কী করবেন। কারণ যোগফলটাই কখনো পুরো ব্যাপার ছিল না।"
          },
          {
            "en": "So the habit worth building is to state the rule while things are calm, the way he did. Hope in Allah is not optimism about outcomes and it does not require predicting one. It is a settled position about who is in charge of them. A believer may fear, may weep, may see no route at all — and still refuse the one conclusion this verse puts outside the boundary.",
            "bn": "তাই যে অভ্যাসটা গড়ে তোলা দরকার, তা হলো শান্ত সময়েই নিয়মটা মুখে বলে রাখা, যেমন তিনি বলেছিলেন। আল্লাহর ওপর আশা মানে ফলাফল ভালো হবে এমন আশাবাদ নয়, ফলাফল আগে থেকে আন্দাজ করারও দরকার নেই। এ হলো মনের স্থির বিশ্বাস যে ফলাফলের মালিক কে। একজন মুমিন ভয় পেতে পারেন, কাঁদতে পারেন, সামনে কোনো পথই না দেখতে পারেন। তবু এই আয়াত যে একটি সিদ্ধান্তকে সীমার বাইরে রেখেছে, সেটাকে তিনি কাছে ঘেঁষতে দেন না।"
          }
        ]
      }
    ]
  },
  "15:63": {
    "sections": [
      {
        "h": {
          "en": "Guests He Did Not Know",
          "bn": "অচেনা অতিথিদের জবাব"
        },
        "p": [
          {
            "en": "This verse is the angels' first answer to Lut (AS) in al-Hijr. In 15:61 the messengers arrive at the family of Lut, and in 15:62 he says to them, Indeed, you are people unknown. Ibn Kathir's abridged English commentary, which takes 15:61 to 15:64 together as a single passage, says the angels came to Lut in the form of young men with handsome faces, and that he said those words when they entered his home. Their reply is seven Arabic words: qalu bal ji'naka bima kanu fihi yamtarun.",
            "bn": "আল-হিজরে লূত (আঃ)-কে দেওয়া ফেরেশতাদের প্রথম জবাব এই আয়াত। ১৫:৬১ আয়াতে প্রেরিতরা লূতের পরিবারের কাছে আসেন, আর ১৫:৬২ আয়াতে তিনি তাঁদের বলেন, আপনাদের তো অপরিচিত লোক মনে হচ্ছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৬১ থেকে ১৫:৬৪ পর্যন্ত এক অংশ হিসেবে পড়ে। সেখানে বলা হয়েছে, ফেরেশতারা সুদর্শন তরুণের রূপে লূতের কাছে এসেছিলেন, আর তাঁরা ঘরে ঢুকলে তিনি ওই কথা বলেন। তাঁদের জবাব আরবিতে সাতটি শব্দ: কালূ বাল জি'নাকা বিমা কানূ ফীহি ইয়ামতারূন।"
          },
          {
            "en": "The reader already knows what Lut does not. A few verses earlier, in 15:58 to 15:60, the same messengers told Ibrahim (AS) that they had been sent to a people of criminals, and that the family of Lut would be saved, except his wife. Lut sees strangers; the reader sees the errand. The night itself, the crowd at the door and the order to leave, is read closely in the article on 11:81 and is not retold here. This page stays with one sentence and the one thing it names.",
            "bn": "লূত (আঃ) যা জানেন না, পাঠক তা আগেই জানেন। কয়েক আয়াত আগে, ১৫:৫৮ থেকে ১৫:৬০ আয়াতে, এই প্রেরিতরাই ইবরাহীম (আঃ)-কে বলেছিলেন, তাঁরা এক অপরাধী জাতির কাছে প্রেরিত। লূতের পরিবার রক্ষা পাবে, তবে তাঁর স্ত্রী নয়। লূত দেখছেন কয়েকজন অচেনা মানুষ, আর পাঠক দেখছেন তাঁদের আসল কাজ। সেই রাত, দরজায় ভিড় আর বেরিয়ে পড়ার আদেশ, এসবের বিস্তারিত পাঠ আছে ১১:৮১ আয়াতের প্রবন্ধে। এখানে তা আর বলা হবে না। এ লেখা থাকবে একটি বাক্য আর তার বলা একটি জিনিসের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named by Its Doubters",
          "bn": "সন্দেহকারীদের দিয়েই পরিচয়"
        },
        "p": [
          {
            "en": "Bal opens the reply, a word of turning that the translations render as But or Nay. Lut (AS) has said that he does not know them. In al-Hijr the answer does not stop to say who they are; it turns at once to what they carry. Ji'naka bi- is to come to someone bringing something, so the English reads we have come to you with. The angels speak of their arrival and of a load that arrives with them, and the rest of the sentence is spent on that load.",
            "bn": "জবাব শুরু হয় 'বাল' দিয়ে। এটি মোড় ঘোরানোর শব্দ, অনুবাদে এসেছে But বা Nay হিসেবে। লূত (আঃ) বলেছেন, তিনি তাঁদের চেনেন না। আল-হিজরের এ আয়াতে জবাবটা নিজেদের পরিচয় দিতে থামে না। সোজা চলে যায় তাঁরা কী সঙ্গে এনেছেন সেদিকে। 'জি'নাকা বি' মানে কারও কাছে কিছু নিয়ে আসা, তাই অনুবাদ বলে, আমরা তোমার কাছে নিয়ে এসেছি। ফেরেশতারা নিজেদের আসার কথা বলেন, সঙ্গে আনা এক বোঝার কথাও। বাক্যের বাকি অংশ খরচ হয় সেই বোঝার বর্ণনায়।"
          },
          {
            "en": "Here the verse does something worth slowing down for. It does not say we have come with the punishment. It says bima kanu fihi yamtarun: with that about which they were doubting. The thing is named by the people's attitude towards it, not by what it is. Kanu joined to a present-tense verb describes something that went on over time, which is why the translations say were disputing and have been doubting. This was not a moment of hesitation. It was a settled habit of mind.",
            "bn": "এখানে আয়াতটি এমন একটা কাজ করে, যেখানে একটু থামা দরকার। আয়াত বলে না, আমরা শাস্তি নিয়ে এসেছি। বলে, বিমা কানূ ফীহি ইয়ামতারূন: যে বিষয়ে তারা সন্দেহ করত, তা-ই নিয়ে এসেছি। জিনিসটার পরিচয় দেওয়া হয়েছে তার প্রতি মানুষগুলোর মনোভাব দিয়ে, জিনিসটা কী তা দিয়ে নয়। 'কানূ'-র সঙ্গে বর্তমান কালের ক্রিয়া বসলে বোঝায় এমন কিছু, যা সময় ধরে চলেছে। তাই অনুবাদে এসেছে were disputing, have been doubting। এটা এক মুহূর্তের দ্বিধা ছিল না। ছিল মনের জমে যাওয়া অভ্যাস।"
          },
          {
            "en": "The verb yamtarun comes from the root m-r-y, and the same root returns when the Qur'an tells this story in another surah. 54:36 says of the people of Lut that he had warned them of Our assault, fa-tamaraw bi-n-nudhur, but they disputed the warning. The Bengali translation of our verse speaks of being fallen into doubt; the English speaks of disputing. Between them the two renderings hold both sides of the word: doubt kept inside, and doubt argued out loud against whoever warns.",
            "bn": "ইয়ামতারূন ক্রিয়াটি এসেছে ম-র-য় ধাতু থেকে। কুরআন অন্য এক সূরায় যখন এই কাহিনি বলে, সেখানেও এই ধাতু ফিরে আসে। ৫৪:৩৬ আয়াতে লূতের জাতি সম্পর্কে বলা হয়েছে, তিনি তাদের আমার কঠোর পাকড়াও সম্পর্কে সতর্ক করেছিলেন, ফাতামারাও বিন-নুযুর, কিন্তু তারা সতর্কবাণী নিয়ে বিতর্ক করেছিল। আমাদের আয়াতের বাংলা অনুবাদ বলে সন্দেহে পতিত থাকার কথা, ইংরেজি বলে বিতর্কের কথা। দুই অনুবাদ মিলে শব্দটার দুই দিকই ধরে রাখে। একদিকে মনের ভেতরে পুষে রাখা সন্দেহ, অন্যদিকে যিনি সতর্ক করেন তাঁর বিরুদ্ধে মুখে তোলা বিতর্ক।"
          }
        ]
      },
      {
        "h": {
          "en": "Doubted That It Would Land",
          "bn": "নেমে আসবে, এ কথাতেই সন্দেহ"
        },
        "p": [
          {
            "en": "What was the unnamed thing? In his Arabic tafsir Ibn Kathir says the angels meant their punishment, their destruction and their ruin, which the people doubted would ever befall them and come down in their open ground, bi-sahatihim. His abridged English commentary says the same in brief: the angels were bringing the punishment and destruction that the people doubted they would ever suffer. The doubt he describes is about arrival. It is not a doubt about what punishment is, but about whether it would reach them, there, where they lived.",
            "bn": "নাম না নেওয়া সেই জিনিসটা কী? ইবন কাসীর তাঁর আরবি তাফসীরে বলেন, ফেরেশতারা বুঝিয়েছেন তাদের শাস্তি, তাদের ধ্বংস ও বিনাশ। জাতিটি সন্দেহ করত, এ জিনিস কখনো তাদের উপর ঘটবে কি না, তাদের আঙিনায়, বিসাহাতিহিম, নেমে আসবে কি না। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরও ছোট করে একই কথা বলে: ফেরেশতারা সেই শাস্তি ও ধ্বংস নিয়ে আসছিলেন, যা কখনো ভোগ করতে হবে কি না, তা নিয়ে লোকেরা সন্দেহ করত। ইবন কাসীরের বর্ণনায় সন্দেহটা পৌঁছানো নিয়ে। শাস্তি জিনিসটা কী, তা নিয়ে নয়। প্রশ্ন ছিল, তা কি সত্যিই তাদের কাছে, তাদের বসতির ভেতরে এসে পৌঁছাবে?"
          },
          {
            "en": "Al-Qurtubi puts it in a single line: they doubted that it would descend upon them, and it is the punishment. Al-Baghawi uses almost the same words, yashukkuna fi annahu nazilun bihim, and then gives a reason that al-Qurtubi's line does not. Lut, he says, used to warn them of the punishment, and they did not believe him. In al-Baghawi's reading the doubt did not arise on its own. It was a response to someone, a warning heard again and again and turned away each time.",
            "bn": "কুরতুবী কথাটা বলেন এক লাইনে: তারা সন্দেহ করত যে তা তাদের উপর নেমে আসবে, আর সেটা হলো শাস্তি। বাগাভী প্রায় একই শব্দ ব্যবহার করেন, ইয়াশুক্কূনা ফী আন্নাহূ নাজিলুন বিহিম। তারপর এমন এক কারণ যোগ করেন, যা কুরতুবীর লাইনে নেই। তিনি বলেন, লূত (আঃ) তাদের শাস্তির ভয় দেখাতেন, আর তারা তাঁকে বিশ্বাস করত না। বাগাভীর পাঠে সন্দেহটা আপনা থেকে জন্মায়নি। তা ছিল একজন মানুষের প্রতি জবাব। বারবার শোনা এক সতর্কবাণী, যাকে প্রতিবারই ফিরিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "At-Tabari's text, as consulted for this verse, is short. It gives the gloss the punishment of the people of Lut, and then a chain through Ibn Abi Najih to Mujahid, who is reported to have said the same. The opening of the passage, with the first narrator's name, is cut off in the text consulted here, so only Mujahid is named here. On what the thing is, then, every source consulted here agrees: it is the punishment. None of them proposes anything else, and this page does not either.",
            "bn": "এ আয়াতের জন্য আনা তাবারীর পাঠ ছোট। তাতে ব্যাখ্যা হিসেবে আছে, লূতের জাতির শাস্তি। তারপর ইবন আবী নাজীহ হয়ে মুজাহিদ পর্যন্ত এক সনদ, যেখানে বলা হয়েছে মুজাহিদও একই কথা বলেছেন। আনা পাঠে অংশটির শুরু, যেখানে প্রথম বর্ণনাকারীর নাম থাকার কথা, কাটা পড়েছে। তাই এখানে শুধু মুজাহিদের নাম নেওয়া হলো। জিনিসটা কী, এ প্রশ্নে আনা সব উৎস একমত: সেটা শাস্তি। কেউ অন্য কিছু বলেননি, এ লেখাও বলছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Doubt Spoken as Denial",
          "bn": "সন্দেহ যখন অস্বীকার"
        },
        "p": [
          {
            "en": "As-Sa'di widens the doubt into something said to Lut's face. We have come to you, he glosses, with their punishment, which they doubted and about which they called you a liar when you promised it to them: yukadhdhibunaka hina ta'iduhum bihi. The Muyassar has the punishment that your people doubted and did not believe, wa la yusaddiqun. So as-Sa'di, al-Baghawi and the Muyassar each pair the doubt with a refusal to believe the prophet who warned, while Ibn Kathir and al-Qurtubi speak of the doubt alone.",
            "bn": "সা'দী সন্দেহটাকে টেনে আনেন লূত (আঃ)-এর মুখের উপর বলা কথা পর্যন্ত। তাঁর ব্যাখ্যায়: আমরা তোমার কাছে তাদের শাস্তি নিয়ে এসেছি, যা নিয়ে তারা সন্দেহ করত, আর তুমি যখন এর প্রতিশ্রুতি দিতে তখন তারা তোমাকে মিথ্যাবাদী বলত: ইউকাযযিবূনাকা হীনা তা'ইদুহুম বিহী। মুয়াসসার বলে, সেই শাস্তি যা নিয়ে তোমার জাতি সন্দেহ করত আর বিশ্বাস করত না, ওয়া লা ইউসাদ্দিকূন। অর্থাৎ সা'দী, বাগাভী ও মুয়াসসার, তিনজনই সন্দেহের সঙ্গে জুড়ে দেন সতর্ককারীকে অবিশ্বাস করার কথা। ইবন কাসীর ও কুরতুবী বলেন শুধু সন্দেহের কথা।"
          },
          {
            "en": "This is a difference of emphasis, not a disagreement, and no commentator here denies what another says. One set of wordings looks at the doubt as a state of mind about what was coming; the other looks at it as a stance taken against a messenger. The Muyassar also opens the angels' reply with words the verse does not contain, la takhaf, do not fear, so that the answer reads as reassurance to a host unsettled by strangers. That is the Muyassar's paraphrase, and it is reported here as that.",
            "bn": "এটা জোর দেওয়ার পার্থক্য, মতবিরোধ নয়। এখানে কোনো তাফসীরকার অন্যের কথা অস্বীকার করেননি। এক দলের ভাষায় সন্দেহটা সামনে কী আসছে তা নিয়ে মনের একটা অবস্থা। অন্য দলের ভাষায় তা একজন রাসূলের বিরুদ্ধে নেওয়া অবস্থান। মুয়াসসার আরেকটা কাজ করে। ফেরেশতাদের জবাব শুরু করে এমন কথায় যা আয়াতে নেই: লা তাখাফ, ভয় পেয়ো না। এতে জবাবটা হয়ে যায় অচেনা মেহমান দেখে অস্থির হয়ে পড়া গৃহকর্তার জন্য সান্ত্বনা। এটা মুয়াসসারের নিজস্ব ভাষ্য, আর এখানে তা সেভাবেই উল্লেখ করা হলো।"
          },
          {
            "en": "The Qur'an itself records what that stance sounded like. In 29:29, after Lut (AS) names their deeds, the answer of his people was only that they said, i'tina bi-'adhabi-llah, bring us the punishment of Allah, if you should be of the truthful. That is doubt asking for proof, and asking for it as a dare. Read beside it, 15:63 is the moment the dare is met. What was demanded as a test of his truthfulness is what the messengers now say they have brought.",
            "bn": "সেই অবস্থানের ভাষা কেমন ছিল, কুরআন নিজেই তা লিখে রেখেছে। ২৯:২৯ আয়াতে লূত (আঃ) তাদের কাজগুলোর কথা তুলে ধরার পর তাঁর জাতির একটাই জবাব ছিল: ই'তিনা বি'আযাবিল্লাহ, তুমি সত্যবাদী হলে আমাদের উপর আল্লাহর আযাব নিয়ে এসো। এ হলো প্রমাণ চাওয়া সন্দেহ, আর প্রমাণটা চাওয়া হচ্ছে চ্যালেঞ্জের সুরে। পাশাপাশি রেখে পড়লে ১৫:৬৩ সেই মুহূর্ত, যখন চ্যালেঞ্জের জবাব এসে গেল। নবীর সত্যবাদিতা যাচাইয়ের জন্য যা দাবি করা হয়েছিল, প্রেরিতরা এখন বলছেন ঠিক সেটাই তাঁরা নিয়ে এসেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels, as Once Demanded",
          "bn": "একদিন যে ফেরেশতা চাওয়া হয়েছিল"
        },
        "p": [
          {
            "en": "Al-Hijr has heard a demand like this before. In 15:6 and 15:7 those who called the Messenger mad asked, law ma ta'tina bil-mala'ika, why do you not bring us the angels, if you should be among the truthful? 15:8 answered that Allah does not send down the angels except with truth, and that they would not then be reprieved. 55 verses later, angels have come down in the surah's own story, and the first thing they say of their errand is that it is the very thing a people doubted.",
            "bn": "আল-হিজর এমন দাবি আগেও শুনেছে। ১৫:৬ ও ১৫:৭ আয়াতে যারা রাসূলকে পাগল বলেছিল, তারা বলেছিল, লাও মা তা'তীনা বিল-মালাইকা: তুমি সত্যবাদী হলে আমাদের কাছে ফেরেশতা আনছ না কেন? ১৫:৮ আয়াত জবাব দেয়, আল্লাহ ফেরেশতা নাজিল করেন কেবল সত্যসহ, আর তখন তারা আর অবকাশ পাবে না। ৫৫ আয়াত পরে সূরার নিজের কাহিনিতেই ফেরেশতারা নেমে এসেছেন। নিজেদের কাজের কথা বলতে গিয়ে প্রথমেই তাঁরা বলছেন, এ সেই জিনিস যা নিয়ে একটা জাতি সন্দেহ করত।"
          },
          {
            "en": "Ibn Kathir's abridged commentary draws the link openly for the next clause. On wa ataynaka bil-haqq in 15:64, and we have brought you the truth, he cites 15:8, We do not send the angels down except with the truth, and says the angels spoke in affirmation of the news they brought: that Lut (AS) would be saved and his people destroyed. That verse, the order to leave by night in 15:65 and the decree conveyed in 15:66 belong to their own pages, and are only pointed to here.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত তাফসীর পরের বাক্যের বেলায় এই যোগসূত্র খোলাখুলি দেখায়। ১৫:৬৪ আয়াতের ওয়া আতাইনাকা বিল-হাক্ক, আমরা তোমার কাছে সত্য নিয়ে এসেছি, এর আলোচনায় তিনি ১৫:৮ আয়াত উদ্ধৃত করেন: আমি সত্যসহ ছাড়া ফেরেশতা পাঠাই না। তিনি বলেন, ফেরেশতারা তাঁদের আনা খবরকে জোর দিয়ে নিশ্চিত করছিলেন: লূত (আঃ) রক্ষা পাবেন, আর তাঁর জাতি ধ্বংস হবে। সেই আয়াত, ১৫:৬৫ আয়াতে রাতে বেরিয়ে পড়ার আদেশ আর ১৫:৬৬ আয়াতে জানানো সিদ্ধান্ত, এগুলোর আলোচনা নিজ নিজ পাতায়। এখানে শুধু ইশারা রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Grouped, Off-Verse and Absent",
          "bn": "উৎসের সীমা ও বাদ পড়া পাঠ"
        },
        "p": [
          {
            "en": "A word on the sources, since two of them arrive grouped. Ibn Kathir's English abridgement treats 15:61 to 15:64 as one passage, and only what it says on this verse, and its link to 15:8, is used above. The Ma'arif al-Qur'an text returned for this verse covers 15:48 to 15:57 and concerns the lasting bliss of Paradise. It says nothing about Lut (AS) or his guests, so it is off-verse and set aside. Every other consulted file quotes 15:63 itself and speaks to it.",
            "bn": "উৎস নিয়ে একটা কথা বলা দরকার, কারণ দুটি উৎস এসেছে একাধিক আয়াত একসঙ্গে নিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৬১ থেকে ১৫:৬৪ পর্যন্ত এক অংশ হিসেবে পড়ে। ওপরে তার শুধু সেটুকুই নেওয়া হয়েছে যা এ আয়াত নিয়ে, সঙ্গে ১৫:৮ আয়াতের যোগসূত্র। এ আয়াতের নামে আসা মাআরিফুল কুরআনের পাঠ আসলে ১৫:৪৮ থেকে ১৫:৫৭ পর্যন্ত, আর তার বিষয় জান্নাতের চিরস্থায়ী নিয়ামত। লূত (আঃ) বা তাঁর মেহমানদের নিয়ে তাতে কিছু নেই। তাই পাঠটি এ আয়াতের নয় বলে বাদ রাখা হলো। বাকি প্রতিটি পাঠ ১৫:৬৩ আয়াত নিজেই উদ্ধৃত করে, আর এ নিয়েই কথা বলে।"
          },
          {
            "en": "No commentary consulted here attaches a hadith to this verse, so none is cited here. Nor does this page describe how the punishment fell. The overturning of the towns and the stones of baked clay are the subject of 11:82, which reads them closely. This verse stops a step earlier, at the announcement. It tells Lut what has come and leaves the telling of it for later. Keeping to that limit keeps the page to what the seven words themselves carry, and to what the sources say about them.",
            "bn": "আনা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস জোড়েনি, তাই এখানে কোনো হাদিস উদ্ধৃত হয়নি। শাস্তি কীভাবে নেমেছিল, এ লেখা তা-ও বর্ণনা করে না। জনপদ উল্টে দেওয়া আর পোড়া মাটির পাথরের বিস্তারিত পাঠ আছে ১১:৮২ আয়াতের প্রবন্ধে। এ আয়াত থামে তার এক ধাপ আগে, ঘোষণায়। লূতকে জানানো হয় কী এসে পৌঁছেছে, বাকি বিবরণ রইল পরের জন্য। এই সীমার ভেতরে থাকলে লেখাটা আটকে থাকে সাতটি শব্দ নিজে যা বহন করে আর উৎসগুলো তা নিয়ে যা বলে, তার মধ্যেই।"
          }
        ]
      },
      {
        "h": {
          "en": "News, Not a Mandate",
          "bn": "খবর, হুকুমনামা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a particular people as the text describes them: a people warned by their prophet, who doubted the warning, called him a liar and dared him to bring what he warned of. What befell them was Allah's judgement, carried by His messengers and reported in His Book. The verse licenses nothing against any living person or community. No reader is appointed to finish the story, to find its villains among the neighbours, or to treat anyone as the thing the angels carried.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি নির্দিষ্ট জাতির কথা বলে, ঠিক যেভাবে কুরআনের পাঠ তাদের বর্ণনা করেছে। তাদের নবী তাদের সতর্ক করেছিলেন। তারা সেই সতর্কবাণীতে সন্দেহ করেছে, নবীকে মিথ্যাবাদী বলেছে, আর যার ভয় দেখানো হচ্ছিল তা এনে দেখানোর চ্যালেঞ্জ দিয়েছে। তাদের উপর যা এসেছিল তা আল্লাহর ফয়সালা, তাঁর প্রেরিতরা তা বহন করেছেন আর তাঁর কিতাব তা জানিয়েছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। কাহিনিটা শেষ করার দায়িত্ব কোনো পাঠককে দেওয়া হয়নি। প্রতিবেশীদের মধ্যে এর খলনায়ক খোঁজার কিংবা কাউকে ফেরেশতাদের বয়ে আনা শাস্তি বানিয়ে ফেলার অধিকারও কারও নেই।"
          },
          {
            "en": "The story is told to the one who hears it, not about someone else. Lut (AS) in this scene is a host uneasy with strangers, and the answer he receives is not an instruction to act against anyone. It is news. What a reader can take from it is a question turned inward: where in me does a warning meet a dare instead of a change? A story about a doubted punishment, read as permission to harm, would be a doubt of its own kind: doubt about whose judgement this is.",
            "bn": "কাহিনিটা শোনানো হয় যে শোনে তাকেই, অন্য কারও সম্পর্কে নয়। এ দৃশ্যে লূত (আঃ) অচেনা মেহমান দেখে অস্বস্তিতে থাকা এক গৃহকর্তা। তিনি যে জবাব পান, তাতে কারও বিরুদ্ধে কিছু করার নির্দেশ নেই। আছে শুধু খবর। পাঠক এখান থেকে নিতে পারেন নিজের দিকে ফেরানো একটা প্রশ্ন: আমার ভেতরে কোথায় সতর্কবাণীর জবাব হয় বদলে যাওয়া নয়, বরং চ্যালেঞ্জ? সন্দেহ করা শাস্তির কাহিনিকে কেউ যদি ক্ষতি করার অনুমতি বলে পড়ে, সেটাও হবে এক রকম সন্দেহ। সন্দেহটা এই নিয়ে যে, ফয়সালা আসলে কার।"
          }
        ]
      },
      {
        "h": {
          "en": "Settling It While It Is Warning",
          "bn": "সতর্কবাণী থাকতেই মীমাংসা"
        },
        "p": [
          {
            "en": "Asking is not always a fault. In 2:260 Ibrahim (AS) asks to be shown how Allah gives life to the dead, and when asked, Have you not believed? he answers, Yes, but that my heart may be at rest. That is a question asked from inside faith, seeking rest. The doubt in 15:63 is different in kind. It was held against a warning, over time, and when it asked for proof it asked in order to be excused from acting. The same words, show me, can come from either place.",
            "bn": "প্রশ্ন করা সবসময় দোষের নয়। ২:২৬০ আয়াতে ইবরাহীম (আঃ) দেখতে চান আল্লাহ কীভাবে মৃতকে জীবিত করেন। আল্লাহ জিজ্ঞেস করেন, তুমি কি বিশ্বাস করো না? তিনি বলেন, অবশ্যই করি, তবে যাতে আমার অন্তর প্রশান্ত হয়। এ প্রশ্ন ঈমানের ভেতর থেকে করা, প্রশান্তির খোঁজে। ১৫:৬৩ আয়াতের সন্দেহ একেবারে অন্য জাতের। তা দীর্ঘ সময় ধরে পুষে রাখা হয়েছিল একটা সতর্কবাণীর বিরুদ্ধে। আর যখন তা প্রমাণ চেয়েছে, চেয়েছে আমল থেকে ছাড় পাওয়ার জন্য। দেখাও, এই একই কথা দুই রকম জায়গা থেকে আসতে পারে।"
          },
          {
            "en": "10:94 uses the root of yamtarun and gives an answer to doubt that lingers. If you are in doubt about what We have sent down to you, it says, ask those who have been reading the Scripture before you; then, the truth has certainly come to you from your Lord, so never be among al-mumtarin, the doubters. The cure it offers is not an endless supply of further proof. It is recognising that the truth has already arrived, and letting that recognition settle into a certainty that acts.",
            "bn": "১০:৯৪ আয়াতে ইয়ামতারূনের সেই ধাতুই এসেছে, আর সেখানে আছে ঝুলে থাকা সন্দেহের জবাব। আয়াত বলে, আমি তোমার প্রতি যা নাজিল করেছি তা নিয়ে যদি সন্দেহ থাকে, তবে তোমার আগে থেকে যারা কিতাব পড়ে আসছে তাদের জিজ্ঞেস করো। তারপর বলে, তোমার রবের পক্ষ থেকে তোমার কাছে সত্য এসে গেছে, কাজেই কখনো আল-মুমতারীন, সন্দেহকারীদের দলে থেকো না। এখানে দাওয়াই হিসেবে অন্তহীন প্রমাণের জোগান দেওয়া হয়নি। দাওয়াই হলো এটা মেনে নেওয়া যে সত্য আগেই এসে গেছে। তারপর সেই মেনে নেওয়াকে এমন ইয়াকীনে পরিণত হতে দেওয়া, যা আমলে রূপ নেয়।"
          },
          {
            "en": "So the verse asks the reader something uncomfortable. Is there a warning I have heard many times and answered, in effect, with bring it then? A habit I know is harmful, a duty I keep postponing, a wrong I have been told of plainly? The people in this story learned the truth of what they doubted only when it stood at the door. The mercy of reading about them now is that a reader can still settle the doubt while it is only a warning.",
            "bn": "তাই আয়াতটি পাঠকের সামনে একটা অস্বস্তিকর প্রশ্ন রাখে। এমন কোনো সতর্কবাণী কি আছে, যা আমি বহুবার শুনেছি আর কার্যত জবাব দিয়েছি, আসুক তবে দেখি? এমন কোনো অভ্যাস, যার ক্ষতি আমি জানি? কোনো দায়িত্ব, যা বারবার পিছিয়ে দিচ্ছি? কোনো অন্যায়, যার কথা আমাকে পরিষ্কার করে বলা হয়েছে? এ কাহিনির মানুষগুলো তাদের সন্দেহের বিষয়ের সত্যতা বুঝেছিল কেবল তখন, যখন তা দরজায় এসে দাঁড়াল। আজ তাদের কথা পড়ার রহমত এই যে, সতর্কবাণী যতক্ষণ সতর্কবাণী আছে, ততক্ষণ পাঠক সন্দেহটার মীমাংসা করে নিতে পারেন।"
          }
        ]
      }
    ]
  },
  "15:67": {
    "sections": [
      {
        "h": {
          "en": "Four Words After the Decree",
          "bn": "ফয়সালার পরে চারটি শব্দ"
        },
        "p": [
          {
            "en": "Surah al-Hijr is Makkan, and 15:67 is four Arabic words: wa-ja'a ahlu l-madinati yastabshirun, and the people of the city came, rejoicing. The verses before it have already settled the night. In 15:61 and 15:62 the messengers reach the family of Lut (AS) and he finds them strangers. In 15:63 and 15:64 they tell him what they have brought, a reply read on the page for 15:63. Then 15:65 orders him out by night, and 15:66 reports the decree that these people would be cut off by morning.",
            "bn": "সূরা হিজর মক্কায় নাজিল হয়েছে। ১৫:৬৭ আয়াতে আরবিতে মাত্র চারটি শব্দ: ওয়া জাআ আহলুল মাদীনাতি ইয়াসতাবশিরূন, আর শহরের লোকেরা এল আনন্দ করতে করতে। এর আগের আয়াতগুলোতেই সেই রাতের ফয়সালা হয়ে গেছে। ১৫:৬১ ও ১৫:৬২ আয়াতে প্রেরিত ফেরেশতারা লূত (আঃ)-এর পরিবারের কাছে পৌঁছান, আর তিনি তাঁদের অচেনা মনে করেন। ১৫:৬৩ ও ১৫:৬৪ আয়াতে তাঁরা জানান কী নিয়ে এসেছেন; সে জবাবের আলোচনা আছে ১৫:৬৩ আয়াতের পাতায়। তারপর ১৫:৬৫ আয়াতে রাতেই বেরিয়ে পড়ার আদেশ, আর ১৫:৬৬ আয়াতে সেই সিদ্ধান্ত যে ভোর হতেই এদের মূলসহ কেটে ফেলা হবে।"
          },
          {
            "en": "Only then does the city arrive. What they say to Lut (AS), and what he says to them, begins in 15:68 and runs to 15:72; those verses belong to their own pages and are not read here. This page stays with the four words: who came, and the one word that tells how they came. No occasion of revelation is recorded for the verse in any of the texts consulted for it, and none is supplied here. The verse sits inside a story, and its place in that story is its context.",
            "bn": "এরপরই শহর এসে হাজির হয়। তারা লূত (আঃ)-কে কী বলল আর তিনি তাদের কী বললেন, সে কথা শুরু হয় ১৫:৬৮ আয়াতে এবং চলে ১৫:৭২ পর্যন্ত। ওই আয়াতগুলোর আলোচনা হবে যার যার পাতায়, এখানে নয়। এ পাতা শুধু এই চারটি শব্দ নিয়ে: কারা এল, আর কোন শব্দটি বলে দেয় তারা কীভাবে এল। এ আয়াতের জন্য যেসব তাফসীর আনা হয়েছে, তার কোনোটিতেই শানে নুযূলের উল্লেখ নেই, তাই এখানেও কিছু যোগ করা হয়নি। আয়াতটি একটি কাহিনির ভেতরে বসানো, আর কাহিনিতে তার অবস্থানই তার প্রেক্ষাপট।"
          }
        ]
      },
      {
        "h": {
          "en": "Named by Their City",
          "bn": "শহরের নামে যাদের পরিচয়"
        },
        "p": [
          {
            "en": "Ahl al-madina, the people of the city. At-Tabari names it: the people of the city of Sadum, and they are the people of Lut. Al-Baghawi says the same in two words, meaning Sadum. Al-Qurtubi and the Muyassar call it the city of Lut, and as-Sa'di the city in which the people of Lut lived. None of them lingers over the city itself. Each identifies it in a phrase and moves at once to the word that follows, which is where all of their attention goes.",
            "bn": "আহলুল মাদীনা, শহরের লোকেরা। তাবারী শহরটির নাম বলেন: সাদূম নগরীর অধিবাসীরা, আর তারাই লূতের কওম। বাগাভী একই কথা বলেন দুই শব্দে: অর্থাৎ সাদূম। কুরতুবী ও মুয়াসসার একে বলেন লূতের শহর, আর সা'দী বলেন সেই শহর যেখানে লূতের কওম বাস করত। শহর নিয়ে কেউই বেশিক্ষণ থামেন না। প্রত্যেকে এক বাক্যে শহরটা চিনিয়ে দিয়ে সঙ্গে সঙ্গে পরের শব্দে চলে যান। তাঁদের সবার মনোযোগ সেখানেই।"
          },
          {
            "en": "Surah Hud tells the same arrival differently. 11:78 says wa ja'ahu qawmuhu yuhra'una ilayhi: and his people came to him, hurrying toward him. That verse, with its plea over the guests, has been read already in the pages on Hud and is not reopened here. Set side by side, the wording differs in two plain ways. Hud says his people, and al-Hijr says the people of the city. Hud says to him, and al-Hijr names no destination at all. The Muyassar supplies it, to Lut, and as-Sa'di has them come until they reached the house of Lut.",
            "bn": "সূরা হূদ একই আগমনের কথা বলে অন্য ভাষায়। ১১:৭৮ আয়াতে আছে: ওয়া জাআহু কওমুহু ইউহরাঊনা ইলাইহি, তাঁর কওম তাঁর দিকে ছুটে এল। মেহমানদের নিয়ে লূত (আঃ)-এর মিনতিসহ সে আয়াতের আলোচনা সূরা হূদের পাতাগুলোতে আগেই হয়ে গেছে, এখানে তা আর খোলা হচ্ছে না। দুটো আয়াত পাশাপাশি রাখলে শব্দে দুটি সোজা পার্থক্য চোখে পড়ে। হূদে বলা হয়েছে তাঁর কওম, হিজরে শহরের লোকেরা। হূদে আছে তাঁর দিকে, হিজরে কোথায় এল তা বলাই নেই। মুয়াসসার জায়গাটা পূরণ করে দেয়: লূতের কাছে। আর সা'দী বলেন, তারা এসে পৌঁছাল লূতের ঘর পর্যন্ত।"
          }
        ]
      },
      {
        "h": {
          "en": "News Passed From Mouth to Mouth",
          "bn": "মুখে মুখে ছড়ানো খবর"
        },
        "p": [
          {
            "en": "Yastabshirun is an istif'al form of the root b-sh-r, the root of bushra, good news. The commentators read it from two sides. As-Sa'di and al-Baghawi both gloss it yubashshiru ba'duhum ba'dan: some of them gave the news to others. On that reading the word describes something travelling, a report carried from house to house until the city was on its way. Ibn Kathir reads the same word as a state of the heart: they came mustabshirina bihim farihin, glad about them and rejoicing.",
            "bn": "ইয়াসতাবশিরূন শব্দটি ব-শ-র ধাতুর ইসতিফআল রূপ। এ ধাতু থেকেই এসেছে বুশরা, সুসংবাদ। তাফসীরকারেরা শব্দটিকে দুই দিক থেকে পড়েন। সা'দী ও বাগাভী দুজনেই এর ব্যাখ্যা দেন: ইউবাশশিরু বা'দুহুম বা'দান, তারা একে অন্যকে খবর দিচ্ছিল। এ পাঠে শব্দটি এমন কিছুর ছবি, যা এক ঘর থেকে আরেক ঘরে যায়, যতক্ষণ না গোটা শহর পথে নামে। ইবন কাসীর একই শব্দকে পড়েন মনের অবস্থা হিসেবে: তারা এল মুসতাবশিরীনা বিহিম ফারিহীন, তাদের নিয়ে খুশি হয়ে, উল্লাস করতে করতে।"
          },
          {
            "en": "The Muyassar holds both together: farihun yastabshirun, glad and rejoicing. At-Tabari and al-Qurtubi render it with the participle, mustabshirin, and move straight to its object. These are not rival positions, and nothing in the texts consulted here sets them against each other. They are two faces of one word: the joy, and the telling that spreads the joy. One verb holds both, and that is close to what a crowd is, a feeling passed along until it moves many feet in one direction.",
            "bn": "মুয়াসসার দুটোকে একসঙ্গে রাখে: ফারিহূন ইয়াসতাবশিরূন, খুশি আর উল্লসিত। তাবারী ও কুরতুবী শব্দটিকে কৃদন্ত রূপে বলেন, মুসতাবশিরীন, তারপর সোজা চলে যান কীসে খুশি সেই প্রশ্নে। এগুলো পরস্পরবিরোধী মত নয়। আনা তাফসীরগুলোর কোনোটিতেই এদের একটাকে অন্যটার বিপক্ষে দাঁড় করানো হয়নি। একই শব্দের দুটি দিক: একদিকে আনন্দ, অন্যদিকে সেই আনন্দের খবর ছড়িয়ে দেওয়া। একটা ক্রিয়াই দুটোকে ধরে রেখেছে। ভিড় জিনিসটাও অনেকটা এমন: একটা অনুভূতি হাত থেকে হাতে যায়, আর শেষে অনেকগুলো পা একই দিকে চলতে শুরু করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What Gladdened Them",
          "bn": "তাদের খুশির উৎস"
        },
        "p": [
          {
            "en": "What were they glad about? At-Tabari answers that when they heard a guest had stayed with Lut, they came rejoicing at the guests' arrival in their city, tama'an minhum fi rukub al-fahisha, out of their greed to commit the indecency. He supports it from Qatadah, through Bishr, Yazid and Sa'id: they rejoiced at the guests of the Prophet of Allah, Lut, when they arrived, because of the wrong, al-munkar, that they meant to do to them. Al-Qurtubi and al-Baghawi repeat the phrase of greed almost word for word.",
            "bn": "তারা খুশি হয়েছিল কীসে? তাবারী জবাব দেন: যখন তারা শুনল লূতের ঘরে মেহমান এসেছে, তখন তারা এল তাদের শহরে মেহমানদের আগমনে উল্লসিত হয়ে। কারণ, তামাআন মিনহুম ফী রুকূবিল ফাহিশা, অশ্লীল কাজে লিপ্ত হওয়ার লোভ। নিজের কথার সমর্থনে তিনি বিশর, ইয়াযীদ ও সাঈদের সূত্রে কাতাদাহর উক্তি আনেন: আল্লাহর নবী লূতের মেহমানরা যখন এসে নামল, তারা খুশি হয়ে উঠল। কারণ তাদের সঙ্গে তারা মুনকার, অর্থাৎ গর্হিত কাজ করতে চাইছিল। কুরতুবী ও বাগাভী লোভের সেই কথাটি প্রায় হুবহু দোহরান।"
          },
          {
            "en": "Ibn Kathir adds what had caught the city's attention. They came when they learned of his guests and sabahat wujuhihim, the brightness of their faces. His abridged English commentary, which takes 15:67 to 15:72 together, gives the same: they came when they found out about his handsome guests. As-Sa'di names one more thing in the news that passed between them, iqtidarihim 'alayhim, their power over the guests: they took the strangers to be within their reach. The Muyassar states the aim in a clause: to seize them and commit the indecency with them.",
            "bn": "শহরের নজর কীসে পড়েছিল, ইবন কাসীর তা যোগ করেন। তারা এসেছিল মেহমানদের খবর আর সাবাহাতু উজূহিহিম, তাদের চেহারার উজ্জ্বলতার কথা জেনে। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীর, যা ১৫:৬৭ থেকে ১৫:৭২ একসঙ্গে ধরে, একই কথা বলে: সুদর্শন মেহমানদের খবর পেয়েই তারা এসেছিল। সা'দী তাদের মধ্যে ঘুরতে থাকা খবরে আরেকটি বিষয়ের নাম বলেন: ইকতিদারুহুম আলাইহিম, মেহমানদের উপর তাদের ক্ষমতা। তারা ভেবেছিল অচেনা লোকগুলো তাদের হাতের নাগালে। মুয়াসসার উদ্দেশ্যটা বলে দেয় এক বাক্যে: তাদের ধরে নিয়ে তাদের সঙ্গে অশ্লীল কাজ করা।"
          },
          {
            "en": "That is the whole of what the texts consulted here say, and it is enough. None of the commentators describes more than the intent, and neither does this page. The Qur'an gives the city's purpose in one word and lets the verses after it show where it led. What deserves attention is how the joy is aimed. It is not aimed at good news at all. It is gladness at an opportunity for wrong, shared out among neighbours as though it were a gift.",
            "bn": "আনা তাফসীরগুলো এর বেশি কিছু বলে না, আর এটুকুই যথেষ্ট। তাফসীরকারদের কেউই নিয়তের বাইরে কিছুর বর্ণনা দেননি, এ পাতাও দেবে না। কুরআন শহরের উদ্দেশ্যটা একটি শব্দে জানিয়ে দেয়, আর তা কোথায় গিয়ে ঠেকল তা দেখানোর ভার দেয় পরের আয়াতগুলোকে। খেয়াল করার বিষয় হলো আনন্দটা কোন দিকে তাক করা। কোনো সুসংবাদের দিকে নয়। অন্যায় করার একটা সুযোগ পেয়ে খুশি, আর সেই খুশি প্রতিবেশীদের মধ্যে ভাগ করে দেওয়া হচ্ছে যেন কোনো উপহার।"
          }
        ]
      },
      {
        "h": {
          "en": "Told Out of Order",
          "bn": "ঘটনার ক্রম, বর্ণনার ক্রম"
        },
        "p": [
          {
            "en": "A reader who knows Surah Hud will notice the sequence. There, Lut (AS) is distressed on account of his guests in 11:77, the crowd arrives next, and only in 11:81 do the messengers tell him who they are. Here they declare themselves in 15:63 to 15:66, and the city's arrival comes after. Of the texts consulted, Ibn Kathir alone takes this up. Commenting on 15:68, he notes that Lut said those words to them before he knew they were messengers of Allah, as Surah Hud has it.",
            "bn": "সূরা হূদ যাঁর জানা, তিনি এখানে ক্রমটা খেয়াল করবেন। সেখানে ১১:৭৭ আয়াতে মেহমানদের কারণে লূত (আঃ) দুশ্চিন্তায় পড়েন, তারপর ভিড় এসে পৌঁছায়, আর কেবল ১১:৮১ আয়াতে গিয়ে ফেরেশতারা তাঁকে নিজেদের পরিচয় দেন। এখানে তাঁরা পরিচয় দেন ১৫:৬৩ থেকে ১৫:৬৬ আয়াতে, আর শহরের আগমন আসে তার পরে। আনা তাফসীরগুলোর মধ্যে শুধু ইবন কাসীর এ প্রশ্নটা তোলেন। ১৫:৬৮ আয়াতের ব্যাখ্যায় তিনি বলেন, লূত ওই কথাগুলো বলেছিলেন তাঁরা যে আল্লাহর রাসূল, তা জানার আগেই, যেমনটা সূরা হূদে আছে।"
          },
          {
            "en": "Then he gives the principle. Here, he says, the mention that they were messengers of Allah came first, and the coming of his people and his dispute with them was joined to it; but the wa does not require sequence, especially when there is evidence against it. So on his reading, the and that opens 15:67 does not mean afterwards. None of the other texts consulted here discusses the order. His abridged English commentary adds that all of this happened while they were still unaware of the punishment due to fall on them the following morning.",
            "bn": "তারপর তিনি একটি নীতি বলেন। এখানে, তাঁর ভাষায়, ফেরেশতারা যে আল্লাহর রাসূল সে কথা আগে এসেছে, আর তাঁর কওমের আগমন ও তাদের সঙ্গে তাঁর বাদানুবাদ তার সঙ্গে 'ওয়া' দিয়ে জোড়া হয়েছে। কিন্তু 'ওয়া' ক্রম বোঝানো জরুরি করে না, বিশেষ করে যখন উল্টোটার পক্ষে প্রমাণ থাকে। তাই তাঁর পাঠে ১৫:৬৭ যে 'আর' দিয়ে শুরু, তার মানে 'এরপরে' নয়। আনা বাকি তাফসীরগুলোর কোনোটিই ক্রম নিয়ে কথা বলে না। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীর আরও বলে, এসব যখন ঘটছিল, পরদিন সকালে তাদের উপর যে আযাব নামতে যাচ্ছিল তার কিছুই তারা জানত না।"
          },
          {
            "en": "Whatever the order of events, the order of the telling has an effect worth sitting with. The reader of this surah meets the city's gladness already knowing the decree of 15:66. Their rejoicing is set beside a morning they cannot see. That is no reason to gloat over them, which this page rules out below. It is a reminder that a crowd's certainty about what will please it tonight is no knowledge of what tomorrow holds, and that joy at a wrong is always joy on borrowed time.",
            "bn": "ঘটনা যে ক্রমেই ঘটুক, বর্ণনার এই ক্রমের একটা প্রভাব আছে, যা নিয়ে একটু ভাবা দরকার। এ সূরার পাঠক শহরের উল্লাসের মুখোমুখি হন ১৫:৬৬ আয়াতের ফয়সালা আগে থেকেই জেনে। তাদের আনন্দ পাশাপাশি রাখা হয়েছে এমন এক সকালের সঙ্গে, যা তারা দেখতে পায় না। এতে তাদের নিয়ে উপহাস করার কোনো কারণ নেই, নিচে এ পাতা সে কথা স্পষ্ট করেছে। বরং মনে করিয়ে দেয়, আজ রাতে কীসে মজা মিলবে সে ব্যাপারে ভিড়ের নিশ্চয়তা আগামীকালের কোনো জ্ঞান নয়। আর অন্যায়ে পাওয়া আনন্দের মেয়াদ সবসময়ই ফুরিয়ে আসছে।"
          }
        ]
      },
      {
        "h": {
          "en": "One Word, Other Gladnesses",
          "bn": "একই শব্দে ভিন্ন আনন্দ"
        },
        "p": [
          {
            "en": "The same verb appears elsewhere in the Qur'an with very different objects. In 9:124, when a surah is revealed, those who believed find it has increased them in faith, wa hum yastabshirun, and they rejoice. In 39:45, when Allah alone is mentioned, the hearts of those who do not believe in the Hereafter shrink with aversion, and when others besides Him are mentioned, idha hum yastabshirun, at once they rejoice. The word itself is neither praise nor blame. What it takes as its object decides which it is.",
            "bn": "একই ক্রিয়া কুরআনের অন্য জায়গায়ও এসেছে, একেবারে ভিন্ন বিষয় নিয়ে। ৯:১২৪ আয়াতে কোনো সূরা নাজিল হলে যারা ঈমান এনেছে তাদের ঈমান বেড়ে যায়, ওয়া হুম ইয়াসতাবশিরূন, আর তারা আনন্দিত হয়। ৩৯:৪৫ আয়াতে শুধু আল্লাহর কথা বলা হলে আখিরাতে অবিশ্বাসীদের অন্তর বিতৃষ্ণায় সংকুচিত হয়ে যায়। আর তিনি ছাড়া অন্যদের কথা উঠলে, ইযা হুম ইয়াসতাবশিরূন, সঙ্গে সঙ্গে তারা খুশিতে ভরে ওঠে। শব্দটা নিজে প্রশংসাও নয়, নিন্দাও নয়। কীসে খুশি, সেটাই ঠিক করে দেয় কোনটা।"
          },
          {
            "en": "Al-Hijr has already used the root in this very story. In 15:53 to 15:55 the same messengers give Ibrahim (AS) good news, nubashshiruka bi-ghulamin 'alim, of a knowing son, and tell him they have given it in truth; the page for 15:56 reads that exchange. A few verses on, the root returns in a city that has turned it inside out. One household received glad tidings of a child. Another city passed round glad tidings of a wrong. The surah lets the reader hear the difference without comment.",
            "bn": "এই কাহিনিতেই সূরা হিজর ধাতুটি আগে একবার ব্যবহার করেছে। ১৫:৫৩ থেকে ১৫:৫৫ আয়াতে এই ফেরেশতারাই ইবরাহীম (আঃ)-কে সুসংবাদ দেন, নুবাশশিরুকা বিগুলামিন আলীম, এক জ্ঞানী পুত্রের, আর বলেন তাঁরা সত্য নিয়েই সুসংবাদ দিয়েছেন। সে কথোপকথনের আলোচনা আছে ১৫:৫৬ আয়াতের পাতায়। কয়েক আয়াত পরে একই ধাতু ফিরে আসে এমন এক শহরে, যে তাকে উল্টে দিয়েছে। এক ঘরে এসেছিল সন্তানের সুসংবাদ। আরেক শহরে হাতবদল হচ্ছিল অন্যায়ের খুশির খবর। সূরা কোনো মন্তব্য করে না, পার্থক্যটা পাঠক নিজেই শুনতে পান।"
          }
        ]
      },
      {
        "h": {
          "en": "A Description, Not a Licence",
          "bn": "বর্ণনা, ছাড়পত্র নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a people as the text describes them, in one story, on one night, in words the Qur'an chose. It licenses nothing against any living person or community, and it gives no one leave for contempt toward anyone. This page stays as restrained as its sources: the commentators name an intent and go no further, and neither does this reading. Whoever takes the verse as a warrant to mock, shame or harm other people has left the verse behind.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি জাতির বর্ণনা দেয় ঠিক যেমন কুরআন তাদের বর্ণনা দিয়েছে: একটি কাহিনিতে, একটি রাতে, কুরআনের নিজের বাছাই করা শব্দে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো কিছুর অনুমতি দেয় না। কাউকে কারও প্রতি তাচ্ছিল্য করার ছাড়পত্রও দেয় না। এ পাতা তার উৎসগুলোর মতোই সংযত থাকছে। তাফসীরকারেরা একটা নিয়তের নাম বলে থেমে গেছেন, এ পাঠও এর বেশি এগোবে না। কেউ যদি আয়াতটিকে অন্যকে ঠাট্টা, অপমান বা ক্ষতি করার দলিল বানায়, সে আয়াতকে পেছনে ফেলে চলে গেছে।"
          },
          {
            "en": "A word on the sources. The Ma'arif al-Qur'an text returned for this verse covers 15:48 to 15:57, on the bliss of Paradise, and says nothing about the city, so it is set aside. Ibn Kathir's English abridgement groups 15:67 to 15:72, and only its lines on the arrival, the order and the city's unawareness are used above. No commentary consulted here attaches a hadith to this verse, and none is supplied. Qatadah's words, carried by at-Tabari, are a follower's explanation of the verse, not a saying of the Prophet ﷺ.",
            "bn": "উৎস নিয়ে একটি কথা। এ আয়াতের জন্য যে মাআরিফুল কুরআন পাঠ এসেছে, তা ১৫:৪৮ থেকে ১৫:৫৭ আয়াত নিয়ে, জান্নাতের সুখের আলোচনা। শহর নিয়ে তাতে কিছুই নেই, তাই তা বাদ রাখা হয়েছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৬৭ থেকে ১৫:৭২ একসঙ্গে ধরে। তার থেকে শুধু আগমন, ঘটনার ক্রম আর শহরের অজ্ঞতার কথাগুলো ওপরে নেওয়া হয়েছে। আনা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদিস যুক্ত করেনি, এখানেও করা হয়নি। তাবারীর আনা কাতাদাহর কথা একজন তাবিঈর ব্যাখ্যা, নবী ﷺ-এর বাণী নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "When the Street Is Glad",
          "bn": "গলি যখন খুশিতে মাতে"
        },
        "p": [
          {
            "en": "The verse is about a crowd, and a crowd is made of people who each decided not to stop. On the reading of as-Sa'di and al-Baghawi, whoever in the city heard the news passed it to someone else. Nothing in the verse records a single voice asking what they were doing. That is the pull of a group: the pleasure of the many makes a wrong feel ordinary, and passing the news along feels like belonging. The question for the reader is not about Sadum. It is where I carry the word.",
            "bn": "আয়াতটি একটি ভিড়ের কথা বলে, আর ভিড় গড়ে ওঠে এমন মানুষদের নিয়ে, যাদের প্রত্যেকে থামবে না বলে ঠিক করেছে। সা'দী ও বাগাভীর পাঠে শহরের যে-ই খবরটা শুনেছে, সে-ই আরেকজনকে জানিয়েছে। আয়াতে এমন একটা কণ্ঠও নেই যে জিজ্ঞেস করে, আমরা কী করছি? দলের টান এমনই। অনেকের আনন্দ দেখে অন্যায়টাকে সাধারণ মনে হয়, আর খবরটা এগিয়ে দিলে মনে হয় আমিও দলের একজন। পাঠকের প্রশ্ন তাই সাদূমকে নিয়ে নয়। প্রশ্ন হলো, কথাটা আমি কোথায় বয়ে নিয়ে যাই।"
          },
          {
            "en": "Much of what spreads today spreads the same way: a rumour about someone's weakness, a clip of someone's shame, a chance to pile on. Each forward is small, and together they make a crowd at a door. The verse invites a simple check. When I feel glad at some news, what exactly am I glad about? If the honest answer is someone else's exposure or harm, then the gladness is the thing to stop, and it can stop with me.",
            "bn": "আজ যা ছড়ায়, তার অনেকটাই ছড়ায় ঠিক এভাবে। কারও দুর্বলতা নিয়ে গুজব, কারও লজ্জার একটা ভিডিও, সবাই মিলে কাউকে চেপে ধরার সুযোগ। প্রতিটা ফরোয়ার্ড ছোট, কিন্তু সব মিলে দরজার সামনে একটা ভিড় তৈরি হয়। আয়াতটি একটা সহজ যাচাইয়ের সুযোগ দেয়। কোনো খবরে খুশি লাগলে নিজেকে জিজ্ঞেস করুন, ঠিক কীসে খুশি হলাম? সৎ উত্তর যদি হয় অন্য কারও গোপন কথা ফাঁস হওয়া বা তার ক্ষতি, তবে থামানোর জিনিস ওই খুশিটাই। আর তা আপনার কাছে এসেই থামতে পারে।"
          },
          {
            "en": "The other half of the night is the house. Guests had come under the roof of Lut (AS), and what he says to protect them belongs to 15:68 and the verses after it. For the reader it is enough to notice who is under their own care: guests, children, workers, the newcomer at work or in the mosque who has nobody to speak for them. Whoever guards them may be standing at the door alone. That is worth being, even when the street is glad.",
            "bn": "সেই রাতের অন্য অর্ধেকটা হলো ঘর। লূত (আঃ)-এর ছাদের নিচে মেহমানরা এসেছিল, আর তাদের রক্ষা করতে তিনি কী বলেন, সে কথা ১৫:৬৮ আয়াত ও তার পরের আয়াতগুলোর। পাঠকের জন্য এটুকু খেয়াল করাই যথেষ্ট যে তাঁর নিজের দায়িত্বে কে আছে। মেহমান, সন্তান, কাজের লোক, কর্মস্থলে বা মসজিদে নতুন আসা সেই মানুষটি, যার পক্ষে কথা বলার কেউ নেই। যে তাদের আগলে রাখে, দরজায় হয়তো সে-ই একা দাঁড়িয়ে। গোটা গলি খুশিতে মাতলেও সেই মানুষটি হওয়া মূল্যবান।"
          }
        ]
      }
    ]
  },
  "15:74": {
    "sections": [
      {
        "h": {
          "en": "The Same Morning, Retold",
          "bn": "একই সকাল, দ্বিতীয়বার"
        },
        "p": [
          {
            "en": "In Surah al-Hijr the account of Lut (AS) begins at 15:61, when the messengers reach his family, and it ends quickly. 15:73 has the cry seize his people at sunrise, and this verse completes the work: fa-ja'alna 'aliyaha safilaha wa-amtarna 'alayhim hijaratan min sijjil, so We made its highest part its lowest and rained upon them stones of sijjil. A reader of the Qur'an has met these words before. With small differences they are 11:82, the same morning as Surah Hud tells it.",
            "bn": "সূরা আল-হিজরে লূত (আঃ)-এর কাহিনি শুরু হয় ১৫:৬১ আয়াতে, যখন প্রেরিত ফেরেশতারা তাঁর পরিবারের কাছে পৌঁছান। শেষটা আসে দ্রুত। ১৫:৭৩ আয়াতে সূর্য ওঠার সময় এক বিকট আওয়াজ তাঁর জাতিকে পাকড়াও করে, আর এই আয়াত কাজটা শেষ করে: ফাজাআলনা আলিয়াহা সাফিলাহা ওয়া আমতারনা আলাইহিম হিজারাতাম মিন সিজ্জীল। অর্থাৎ আমি তার উপরের অংশকে নিচে করে দিলাম, আর তাদের উপর বর্ষণ করলাম সিজ্জীলের পাথর। কুরআনের পাঠক এ কথাগুলো আগেও পড়েছেন। সামান্য কিছু পার্থক্য বাদ দিলে এটাই ১১:৮২, সূরা হূদে বলা সেই একই সকাল।"
          },
          {
            "en": "The commentators treat it as a repetition too. Ibn Kathir, in his Arabic text and in the abridged English, says of sijjil only that the discussion in Surah Hud is sufficient. This article follows his lead. The readings of sijjil, the disagreement over mandud, the narrative of Jibril (AS) raising the towns, and al-Qurtubi's legal note are all set out in the article on 11:82, and they are not repeated here. What follows is what that article had no room for: how the two tellings differ, and what the difference asks of a reader.",
            "bn": "মুফাসসিররাও একে পুনরাবৃত্তি হিসেবেই দেখেছেন। ইবন কাসীর আরবি মূল গ্রন্থে এবং সংক্ষিপ্ত ইংরেজি সংস্করণে, দুই জায়গাতেই সিজ্জীল নিয়ে শুধু এটুকু বলেন যে সূরা হূদের আলোচনাই যথেষ্ট। এই প্রবন্ধও সেই পথে চলবে। সিজ্জীলের নানা ব্যাখ্যা, মানদূদ নিয়ে মতভেদ, জিবরীল (আঃ)-এর জনপদগুলো উপরে তুলে নেওয়ার বিবরণ, আর কুরতুবীর ফিকহি মন্তব্য, সবই ১১:৮২ আয়াতের প্রবন্ধে আলোচিত হয়েছে। এখানে সেগুলো আর আনা হবে না। এখানে থাকবে সেই প্রবন্ধে যার জায়গা হয়নি: দুই বর্ণনার পার্থক্য কোথায়, আর সেই পার্থক্য পাঠকের কাছে কী চায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Eight Words Beside Twelve",
          "bn": "বারো শব্দের পাশে আট"
        },
        "p": [
          {
            "en": "Counted in the Arabic text, 11:82 runs to twelve words and this verse to eight. Six are identical in both: 'aliyaha, safilaha, wa-amtarna, hijaratan, min and sijjil. Two more differ by a single element. Ja'alna in Hud becomes fa-ja'alna here, with a prefixed fa, so the overturning follows straight on from the cry of the verse before. And 'alayha, upon it, meaning the town, becomes 'alayhim, upon them, meaning its people. The article on 11:82 notes that last change; the count shows it is only half of what changed inside the shared words.",
            "bn": "আরবি পাঠে গুনলে ১১:৮২ আয়াতে শব্দ বারোটি, আর এই আয়াতে আটটি। এর ছয়টি শব্দ দুই আয়াতে হুবহু এক: আলিয়াহা, সাফিলাহা, ওয়া আমতারনা, হিজারাতান, মিন আর সিজ্জীল। বাকি দুটিতে তফাত একটিমাত্র অংশে। হূদের জাআলনা এখানে হয়েছে ফাজাআলনা, শুরুতে একটি ফা যোগ হয়ে। ফলে উল্টে দেওয়ার ঘটনা আগের আয়াতের আওয়াজের ঠিক পরেই এসে বসে। আর আলাইহা, অর্থাৎ তার উপর, মানে জনপদের উপর, এখানে হয়েছে আলাইহিম, তাদের উপর, মানে তার অধিবাসীদের উপর। ১১:৮২ আয়াতের প্রবন্ধ এই শেষ বদলটির কথা বলেছে। গুনে দেখলে বোঝা যায়, মিলে যাওয়া শব্দগুলোর ভেতরে যা বদলেছে, এটা তার অর্ধেক মাত্র।"
          },
          {
            "en": "Four words of Hud are missing here. The last is mandud, the description of the stones, so in al-Hijr sijjil closes the verse with nothing after it. The first three are fa-lamma ja'a amruna, so when Our command came. The moment is not lost in al-Hijr; it has moved into a verse of its own. 15:73, fa-akhadhat-humu as-sayhatu mushriqin, is also three words long. No commentator consulted here remarks on the matching count, and this article builds nothing on it. It notes only that the verse before has taken over the task of saying when.",
            "bn": "হূদের চারটি শব্দ এখানে নেই। শেষেরটি মানদূদ, পাথরগুলোর বিবরণ। তাই আল-হিজরে আয়াত শেষ হয় সিজ্জীল শব্দে, তার পরে আর কিছু নেই। প্রথম তিনটি ফালাম্মা জাআ আমরুনা, অর্থাৎ যখন আমার হুকুম এল। আল-হিজরে মুহূর্তটা হারিয়ে যায়নি, সরে গিয়ে নিজের একটি আলাদা আয়াত পেয়েছে। ১৫:৭৩ আয়াত, ফাআখাযাতহুমুস সাইহাতু মুশরিকীন, সেটিও তিন শব্দের। এখানে যেসব তাফসীর পড়া হয়েছে, তার কোনোটি এই সংখ্যার মিল নিয়ে কিছু বলেনি, আর এ প্রবন্ধও এর উপর কিছু দাঁড় করাচ্ছে না। শুধু এটুকু লক্ষ করার মতো যে, কখন ঘটল, সে কথা বলার দায়িত্ব এখন আগের আয়াতের।"
          }
        ]
      },
      {
        "h": {
          "en": "Land, Towns, a City",
          "bn": "ভূমি, জনপদ, নগরী"
        },
        "p": [
          {
            "en": "On this verse the commentators say little, and what they say is brief. At-Tabari glosses the first clause as We made the high part of their land its low part, where on 11:82 he spoke of the town. Al-Muyassar reads it as We overturned their towns, in the plural, and calls the stones clay hardened and firm. As-Sa'di says We overturned their city upon them. Al-Baghawi's page on this verse carries nothing but the verse itself. Each names the thing overturned a little differently, and none of them stops to argue the point.",
            "bn": "এ আয়াতে মুফাসসিররা কথা বলেছেন কম, আর যা বলেছেন তাও সংক্ষেপে। তাবারী প্রথম বাক্যাংশের ব্যাখ্যা দেন এভাবে: আমি তাদের ভূমির উপরের অংশকে নিচের অংশ করে দিলাম। অথচ ১১:৮২ আয়াতে তিনি বলেছিলেন জনপদের কথা। মুয়াসসারে পাঠটা বহুবচনে: আমি তাদের জনপদগুলো উল্টে দিলাম। সেখানে পাথরগুলোর বর্ণনা, শক্ত হয়ে জমে যাওয়া মজবুত মাটি। সা'দী বলেন, আমি তাদের নগরীকে তাদের উপরেই উল্টে দিলাম। এই আয়াতে বাগাভীর পাতায় আয়াতটি ছাড়া আর কিছু নেই। যা উল্টানো হলো, প্রত্যেকে তার নাম দিয়েছেন খানিকটা আলাদা করে, কিন্তু কেউই তা নিয়ে তর্কে যাননি।"
          },
          {
            "en": "A small shift in as-Sa'di is worth marking. On 11:82, as the article there reports, he read mandud as the stones following whoever had slipped away. Here there is no mandud, and he attaches the same pursuit to the rain itself: the stones tracked down any of them who had strayed from the town. At-Tabari carries Qatadah from 'Ikrimah that min sijjil means of clay. Al-Qurtubi's page repeats his discussion of sijjil and his legal inference, both already treated under 11:82, so his page adds nothing further to this article.",
            "bn": "সা'দীর ব্যাখ্যায় ছোট একটা সরে যাওয়া চোখে পড়ার মতো। ১১:৮২ আয়াতে, সেখানকার প্রবন্ধ যেমন জানিয়েছে, তিনি মানদূদ শব্দ থেকে বুঝেছিলেন যে পাথরগুলো পালিয়ে যাওয়া লোকদের পিছু নিয়েছিল। এখানে মানদূদ নেই। তাই সেই পিছু নেওয়ার কথা তিনি জুড়ে দেন বর্ষণের সঙ্গেই: তাদের যে কেউ জনপদ ছেড়ে সরে গিয়েছিল, পাথর তাকে খুঁজে ধরেছে। তাবারী কাতাদার সূত্রে ইকরিমা থেকে আনেন, মিন সিজ্জীল মানে মাটি থেকে। কুরতুবীর পাতায় সিজ্জীলের আলোচনা আর তাঁর ফিকহি সিদ্ধান্তটি আবার এসেছে। দুটিই ১১:৮২ আয়াতে আলোচিত, তাই তাঁর পাতা থেকে এ প্রবন্ধে নতুন কিছু যোগ হচ্ছে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Morning Named, Sunrise Reported",
          "bn": "কথা ছিল সকালের, এল সূর্যোদয়"
        },
        "p": [
          {
            "en": "The larger difference sits a verse back. In Hud the hour is set in advance: in 11:81 the messengers tell Lut (AS) that his people's appointment is as-subh, the morning, and ask, is not the morning near? Al-Hijr uses the same root for the same decree. In 15:66 Allah says the matter was made known to Lut, that the last of these people would be cut off musbihin, as morning came. Then 15:73 reports the event itself with a different word: the cry seized them mushriqin, as the sun rose.",
            "bn": "বড় পার্থক্যটা এক আয়াত আগে। হূদে সময়টা আগেই বলে দেওয়া হয়েছে। ১১:৮১ আয়াতে ফেরেশতারা লূত (আঃ)-কে জানান, তাঁর জাতির নির্ধারিত সময় আস-সুবহ, সকাল, আর জিজ্ঞেস করেন, সকাল কি কাছে নয়? আল-হিজর একই ফয়সালার কথা বলে একই ধাতু দিয়ে। ১৫:৬৬ আয়াতে আল্লাহ বলেন, লূতকে এ বিষয় জানিয়ে দেওয়া হয়েছিল যে ভোর হতেই এদের শেষ মানুষটিও নির্মূল হবে, মুসবিহীন। তারপর ১৫:৭৩ আয়াত ঘটনাটা জানায় অন্য শব্দে: আওয়াজ তাদের ধরল মুশরিকীন, সূর্য যখন উঠছিল।"
          },
          {
            "en": "The counts sharpen the point. Mushriqin, describing people at a moment of the day, occurs twice in the Qur'an: here and at 26:60, where Pharaoh's people set out after Musa (AS) at sunrise. Musbihin occurs five times, among them 15:66 and 15:83, where the cry takes the people of al-Hijr at morning, the same three-word sentence as 15:73 with only its last word changed. So the surah itself sets morning and sunrise side by side, and the question is how the two fit together on a single day.",
            "bn": "গুনে দেখলে বিষয়টা আরও স্পষ্ট হয়। দিনের একটি মুহূর্তে মানুষের অবস্থা বোঝাতে মুশরিকীন শব্দ কুরআনে এসেছে দুবার: এখানে, আর ২৬:৬০ আয়াতে, যেখানে ফেরাউনের লোকেরা সূর্য ওঠার সময় মূসা (আঃ)-এর পিছু নেয়। মুসবিহীন এসেছে পাঁচবার। তার মধ্যে ১৫:৬৬, আর ১৫:৮৩, যেখানে আল-হিজরের অধিবাসীদের আওয়াজ ধরে ভোরবেলা। সেটিও ১৫:৭৩ আয়াতের মতো তিনটি শব্দের বাক্য, শুধু শেষ শব্দটি আলাদা। অর্থাৎ সূরাটি নিজেই সকাল আর সূর্যোদয়কে পাশাপাশি রেখেছে। প্রশ্ন হলো, একই দিনে দুটি কীভাবে মেলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where Dawn Runs Into Sunrise",
          "bn": "ভোর যেখানে সূর্যোদয়ে গিয়ে মেশে"
        },
        "p": [
          {
            "en": "Al-Baghawi answers in a single line. Mushriqin means when the sun shone, and so the punishment began when they entered the morning and was completed when they entered the sunrise. On that reading nothing needs reconciling: morning marks the start of the event and sunrise its end. Al-Qurtubi gives the same account as one of his options, in almost the same words: the first of the punishment came at as-subh and stretched to the rising of the sun, and the destruction was complete then.",
            "bn": "বাগাভী জবাব দেন এক বাক্যে। মুশরিকীন মানে সূর্য যখন আলো ছড়াল। তাই শাস্তির শুরু হয়েছিল তারা যখন ভোরে প্রবেশ করল, আর তা পূর্ণ হয়েছিল যখন তারা সূর্যোদয়ে প্রবেশ করল। এভাবে পড়লে মেলানোর কিছু বাকি থাকে না। সকাল ঘটনার শুরুর সময়, সূর্যোদয় তার শেষের সময়। কুরতুবীও প্রায় একই ভাষায় এ ব্যাখ্যাকে তাঁর সম্ভাব্য মতগুলোর একটি হিসেবে আনেন: শাস্তির প্রথম অংশ এসেছিল আস-সুবহে, তা গড়িয়ে গিয়েছিল সূর্য ওঠা পর্যন্ত, আর তখনই ধ্বংস পূর্ণ হয়।"
          },
          {
            "en": "Al-Qurtubi does not stop there. He first explains mushriqin as a circumstantial accusative, meaning at the time of sunrise, and adds a note on the verb: ashraqat ash-shams is said of the sun giving light, and sharaqat of its rising, though some treat the two as dialect forms with a single meaning. Ashraqa al-qawm, he says, means the people entered the time of sunrise, like asbahu and amsaw, and that is what the verse intends. He then lists two other views, that the rising of the dawn was meant, and the account of a punishment spanning both, and closes with and Allah knows best.",
            "bn": "কুরতুবী এখানেই থামেন না। প্রথমে তিনি ব্যাকরণের দিক থেকে মুশরিকীনকে অবস্থা-বাচক শব্দ ধরেন, যার অর্থ সূর্যোদয়ের সময়। ক্রিয়াটি নিয়েও তাঁর একটি কথা আছে: আশরাকাতিশ শামস বলা হয় সূর্য আলো ছড়ালে, আর শারাকাত বলা হয় সূর্য উঠলে। কারও মতে দুটি একই অর্থের দুই আঞ্চলিক রূপ। তিনি বলেন, আশরাকাল কাওম মানে লোকেরা সূর্যোদয়ের সময়ে প্রবেশ করল, যেমন আসবাহু আর আমসাও, আর আয়াতে এটাই উদ্দেশ্য। এরপর তিনি আরও দুটি মত উল্লেখ করেন। একটি হলো, এখানে ফজরের উদয় বোঝানো হয়েছে। অন্যটি সেই ব্যাখ্যা, যাতে শাস্তি দুই সময় জুড়ে ছড়ানো। শেষে বলেন, আল্লাহই ভালো জানেন।"
          },
          {
            "en": "The others keep to sunrise without raising the question. At-Tabari glosses mushriqin as when the sun rose, and cites Ibn Jurayj in the same words. He explains mushriqin and musbihin with the same grammar, both circumstantial, meaning when they entered the sunrise and when they entered the morning, and does not set them against each other. As-Sa'di gives a reason of his own: sunrise was the time when the punishment bore hardest upon them. Ibn Kathir calls the cry a crashing sound that came at the rising of the sun.",
            "bn": "বাকিরা প্রশ্নটা না তুলেই সূর্যোদয়ের কথায় থাকেন। তাবারী মুশরিকীনের ব্যাখ্যা দেন, সূর্য যখন উঠল, আর ইবন জুরাইজ থেকেও একই কথা আনেন। মুশরিকীন আর মুসবিহীন, দুটিকেই তিনি একই ব্যাকরণে ব্যাখ্যা করেন, দুটিই অবস্থা-বাচক: যখন তারা সূর্যোদয়ে প্রবেশ করল, আর যখন তারা ভোরে প্রবেশ করল। দুটিকে তিনি পরস্পরের বিপরীতে দাঁড় করান না। সা'দী নিজের একটি কারণ যোগ করেন: সূর্যোদয়ের সময়ই শাস্তি তাদের উপর সবচেয়ে কঠিন হয়ে নেমেছিল। ইবন কাসীর আওয়াজটিকে বলেন এক প্রচণ্ড গর্জন, যা এসেছিল সূর্য ওঠার মুহূর্তে।"
          }
        ]
      },
      {
        "h": {
          "en": "Signs for Those Who Read Marks",
          "bn": "চিহ্ন পড়তে জানা মানুষের জন্য নিদর্শন"
        },
        "p": [
          {
            "en": "Hud follows the destruction with a note on the stones, in 11:83. Al-Hijr follows it with three verses turned towards the reader. 15:75 says in that are ayat, signs in the plural, lil-mutawassimin; 15:76 says it lies on a sabil muqim, a road still standing; and 15:77 returns to a single ayah, a sign, lil-mu'minin, for the believers. Ibn Kathir's abridged English commentary, which takes 15:73 to 15:77 together, says the traces of the town are visible to anyone who ponders, whether by eyesight or by insight.",
            "bn": "সূরা হূদ ধ্বংসের বর্ণনার পর ১১:৮৩ আয়াতে পাথরগুলোর কথা বলে। সূরা আল-হিজর তার পরে তিনটি আয়াত রাখে, যেগুলো পাঠকের দিকে ফেরানো। ১৫:৭৫ আয়াত বলে, এতে আছে আয়াত, অর্থাৎ বহুবচনে নিদর্শন, লিল-মুতাওয়াসসিমীন, চিহ্ন পড়তে জানা লোকদের জন্য। ১৫:৭৬ বলে, তা আছে সাবীলিম মুকীম, এমন এক পথের ধারে, যা এখনো টিকে আছে। ১৫:৭৭ আবার একবচনে ফেরে: একটি আয়াত, অর্থাৎ একটি নিদর্শন, লিল-মু'মিনীন, মু'মিনদের জন্য। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৭৩ থেকে ১৫:৭৭ একসঙ্গে ধরে। সেখানে আছে, যে চিন্তা করে, জনপদের চিহ্নগুলো তার কাছে স্পষ্ট, চোখ দিয়ে দেখুক বা অন্তর্দৃষ্টি দিয়ে।"
          },
          {
            "en": "He then gathers the early glosses on mutawassimin. Mujahid said those with insight and discernment; Ibn Abbas and ad-Dahhak, those who look; Qatadah, those who learn lessons. On sabil muqim he says the site lies on a route easily reached, and sets it beside 37:137 and 37:138: you pass by them in the morning and at night, will you not then reason? Those verses have their own place, and the detail is left to them. Ma'arif al-Qur'an groups 15:72 to 15:74 and spends that section on the oath by your life in 15:72, so nothing in it speaks to this verse.",
            "bn": "এরপর তিনি মুতাওয়াসসিমীন শব্দের প্রথম যুগের ব্যাখ্যাগুলো জড়ো করেন। মুজাহিদ বলেছেন, অন্তর্দৃষ্টি আর বিচারবুদ্ধির অধিকারীরা। ইবন আব্বাস ও দাহহাক বলেছেন, যারা তাকিয়ে দেখে। কাতাদা বলেছেন, যারা শিক্ষা নেয়। সাবীলিম মুকীম সম্পর্কে তিনি বলেন, জায়গাটা এমন পথের উপর, যেখানে সহজেই পৌঁছানো যায়। পাশে রাখেন ৩৭:১৩৭ ও ৩৭:১৩৮: তোমরা তো সকালে আর রাতে তাদের পাশ দিয়ে যাও, তবু কি বুঝবে না? ওই আয়াতগুলোর আলোচনা তাদের নিজের জায়গায়, বিস্তারিত সেখানেই থাক। মাআরিফুল কুরআন ১৫:৭২ থেকে ১৫:৭৪ একসঙ্গে ধরে, আর সেই অংশের পুরো আলোচনা ১৫:৭২ আয়াতের 'তোমার জীবনের শপথ' নিয়ে। তাই এ আয়াত নিয়ে সেখানে কিছু নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Why Tell It Twice",
          "bn": "কাহিনি কেন ফিরে আসে"
        },
        "p": [
          {
            "en": "The Qur'an does not say in this verse why it tells the morning again, and no commentator consulted here takes up the question, so what follows is reflection, not report. Placed side by side, the two tellings do not face the same way. Hud's builds towards an appointment kept: the morning is named in 11:81 and arrives in 11:82. Al-Hijr's is framed by the reader. Just before it, 15:72 swears that the people were wandering blindly in their intoxication. Just after it, 15:75 speaks of those who read signs.",
            "bn": "সকালের কাহিনি কেন আবার বলা হলো, এ আয়াত তা বলে না। এখানে দেখা কোনো তাফসীরও প্রশ্নটা তোলেনি। তাই সামনে যা আসছে, তা ভাবনা, তাফসীরের বর্ণনা নয়। দুই বর্ণনা পাশাপাশি রাখলে দেখা যায়, দুটির মুখ এক দিকে নয়। সূরা হূদের বর্ণনা এগোয় একটি বেঁধে দেওয়া সময়ের দিকে, আর সেই সময় ঠিকই আসে: ১১:৮১ আয়াতে সকালের নাম আসে, ১১:৮২ আয়াতে সকাল এসে পৌঁছায়। আল-হিজরের বর্ণনার দুই পাশে আছে পাঠকের কথা। ঠিক আগে ১৫:৭২ আয়াত শপথ করে বলে, ওরা নিজেদের মত্ততায় অন্ধের মতো ঘুরছিল। ঠিক পরে ১৫:৭৫ আয়াত বলে চিহ্ন পড়তে জানা মানুষদের কথা।"
          },
          {
            "en": "Between blindness and reading stands the retold story. A reader who meets it a second time is tempted to recognise its shape and stop attending. Familiarity is its own kind of blindness. It denies nothing; it simply assumes it has already understood. The second telling answers that assumption with details that do not match the first: a fa where there was none, them where there was it, sunrise where there was morning, and a verse of its own for the moment the command came.",
            "bn": "অন্ধত্ব আর পড়তে পারার মাঝখানে দাঁড়িয়ে আছে এই ফিরে আসা কাহিনি। দ্বিতীয়বার পড়তে গিয়ে পাঠকের মন চায় চেনা ছাঁচটা দেখে নিয়ে মনোযোগ সরিয়ে নিতে। চেনা জিনিসও এক রকম অন্ধত্ব। সে কিছু অস্বীকার করে না, শুধু ধরে নেয় যে বোঝা হয়ে গেছে। দ্বিতীয় বর্ণনা সেই ধরে নেওয়ার জবাব দেয় এমন খুঁটিনাটি দিয়ে, যা প্রথমটির সঙ্গে মেলে না। যেখানে ফা ছিল না সেখানে ফা, যেখানে জনপদ ছিল সেখানে মানুষ, যেখানে সকাল ছিল সেখানে সূর্যোদয়। আর হুকুম আসার মুহূর্তটার জন্য আলাদা একটি আয়াত।"
          },
          {
            "en": "On the glosses Ibn Kathir collects, the mutawassim is the one who looks, who learns lessons, who has discernment. That describes a way of reading, not only a way of seeing ruins. Repetition asks for exactly that: to read the second account against the first, to notice what has moved, and to ask why it was moved. A reader who counts eight words against twelve has done the smallest version of it. The larger version is to let a familiar story land again, as if it had never been heard.",
            "bn": "ইবন কাসীর যে ব্যাখ্যাগুলো জড়ো করেছেন, সে অনুযায়ী মুতাওয়াসসিম সেই মানুষ, যে তাকিয়ে দেখে, শিক্ষা নেয়, যার বিচারবুদ্ধি আছে। এ শুধু ধ্বংসাবশেষ দেখার ধরন নয়, পড়ারও একটা ধরন। পুনরাবৃত্তি ঠিক এটাই চায়: দ্বিতীয় বর্ণনাকে প্রথমটির পাশে রেখে পড়া, কী সরে গেছে তা খেয়াল করা, আর প্রশ্ন করা, কেন সরানো হলো। যে পাঠক বারোটি শব্দের পাশে আটটি শব্দ গুনে দেখেন, তিনি এর সবচেয়ে ছোট রূপটা করলেন। বড় রূপটা হলো চেনা কাহিনিকে আবার মনের ভেতর নামতে দেওয়া, যেন আগে কখনো শোনা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Reader, Not a Judge",
          "bn": "পাঠক, বিচারক নন"
        },
        "p": [
          {
            "en": "No tafsir consulted for this verse attaches a sound hadith to it, and none is offered here. A limit also needs stating in plain words. The verse tells what the Qur'an tells about a people of the past and what Allah did to them. It makes no reader a judge over any person or community alive today, and gives no one the right to scorn, threaten or harm anyone on its strength. Whatever warning it carries is addressed inward, to the person holding the page.",
            "bn": "এ আয়াতের আলোচনায় দেখা কোনো তাফসীর এর সঙ্গে কোনো সহীহ হাদিস জোড়েনি, তাই এখানেও কোনো হাদিস দেওয়া হলো না। একটা সীমারেখাও সোজা ভাষায় বলে রাখা দরকার। অতীতের এক জাতি সম্পর্কে কুরআন যা বলেছে, আর আল্লাহ তাদের সঙ্গে যা করেছেন, আয়াতটি সেটুকুই জানায়। আজ বেঁচে থাকা কোনো মানুষ বা সম্প্রদায়ের উপর এ আয়াত কোনো পাঠককে বিচারক বানায় না। এর জোরে কাউকে অবজ্ঞা করার, ভয় দেখানোর বা ক্ষতি করার অধিকারও কাউকে দেয় না। এতে যে সতর্কবাণী আছে, তা ভেতরের দিকে, যিনি পাতাটা হাতে ধরে আছেন তাঁর জন্য।"
          },
          {
            "en": "The questions begin with the reading itself. Which passage do I skim because I think I know it? When a story returns in another surah, do I look for what has changed, or only for what is the same? What marks in my own life have I walked past without reading them? And when I read of a people destroyed, do I look first for them in it, or for myself? The ruins, the surah says, lay beside a road still in use. The warning is always near the path; the question is whether the traveller slows down.",
            "bn": "প্রশ্নগুলো শুরু হয় পড়া দিয়েই। কোন অংশ আমি চোখ বুলিয়ে পার হয়ে যাই, কারণ ভাবি ওটা আমার জানা? কোনো কাহিনি অন্য সূরায় ফিরে এলে আমি কি খুঁজি কী বদলেছে, নাকি শুধু মিলগুলোই দেখি? আমার নিজের জীবনের কোন চিহ্নগুলোর পাশ দিয়ে আমি না পড়েই চলে গেছি? আর কোনো ধ্বংস হওয়া জাতির কথা পড়লে আমি আগে কাকে খুঁজি, তাদের, নাকি নিজেকে? সূরাটি বলছে, ধ্বংসাবশেষ পড়ে ছিল এমন এক পথের পাশে, যে পথে তখনো মানুষ চলত। সতর্কবাণী সবসময় পথের কাছেই থাকে। আসল প্রশ্ন হলো, পথিক গতি কমায় কি না।"
          }
        ]
      }
    ]
  },
  "15:80": {
    "sections": [
      {
        "h": {
          "en": "Third in a Short Line",
          "bn": "ছোট সারির তৃতীয় জন"
        },
        "p": [
          {
            "en": "Surah al-Hijr moves quickly through the peoples who were ruined. The guests of Ibrahim (AS) become the messengers who reach Lut (AS), and his people's end closes at 15:77 with a sign for the believers. Two verses then dispose of the companions of the thicket, who were wrongdoers and from whom retribution was taken. The third account opens here: wa-laqad kadhdhaba ashabu al-hijri al-mursalin, and the companions of al-Hijr certainly denied the messengers. It is five words long.",
            "bn": "সূরা হিজর ধ্বংসপ্রাপ্ত জাতিগুলোর কথা দ্রুত বলে যায়। ইবরাহীম (আঃ)-এর মেহমানরাই লূত (আঃ)-এর কাছে পৌঁছানো ফেরেশতা হয়ে ওঠেন, আর তাঁর কওমের পরিণতির কথা শেষ হয় ১৫:৭৭ আয়াতে, মুমিনদের জন্য নিদর্শনের কথা বলে। এরপর মাত্র দুই আয়াতে আসে আয়কাবাসীদের কথা: তারা ছিল জালিম, আর তাদের থেকে প্রতিশোধ নেওয়া হয়েছিল। তৃতীয় কাহিনির শুরু এখানে: ওয়া লাকাদ কাযযাবা আসহাবুল হিজরিল মুরসালীন, আর হিজরের অধিবাসীরাও রাসূলদের অস্বীকার করেছিল। আয়াতটি মাত্র পাঁচ শব্দের।"
          },
          {
            "en": "It is also the only verse in the surah in which the word al-hijr appears, the word the surah carries as its name. The verses after it, 15:81 to 15:84, go on to the signs Thamud were given, the houses they carved from the mountains, the cry that took them at morning and the earnings that did not help them. Those belong to their own pages. This article stays with the five words: who these people were, why the object is plural, and what that plural asks of a reader.",
            "bn": "গোটা সূরায় আল-হিজর শব্দটি আছে শুধু এই আয়াতেই, অথচ সূরার নামই এই শব্দে। এর পরের আয়াতগুলো, ১৫:৮১ থেকে ১৫:৮৪, বলে সামূদকে দেওয়া নিদর্শনের কথা, পাহাড় কেটে বানানো ঘরের কথা, ভোরবেলা তাদের পাকড়াও করা বিকট শব্দের কথা, আর তাদের উপার্জন যে কোনো কাজে আসেনি, সে কথা। সেগুলোর আলোচনা নিজ নিজ পাতায় হবে। এই লেখা থাকবে পাঁচটি শব্দের ভেতরেই। এরা কারা ছিল, কর্মটি কেন বহুবচনে, আর সেই বহুবচন পাঠকের কাছে কী দাবি করে, এখানে সে প্রশ্নগুলোই দেখা হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named for Where They Lived",
          "bn": "বসতির নামে যাদের পরিচয়"
        },
        "p": [
          {
            "en": "At-Tabari reads ashab, companions, as dwellers. The people who lived in al-Hijr are called its companions, he says, because they lived there and stayed there, just as 7:44 has the companions of the Garden call out to the companions of the Fire, naming each group by the place it inhabits. His gloss on the place itself is short: al-Hijr is the city of Thamud. He adds, through his chain, that Qatadah explained ashab al-hijr as the companions of the valley.",
            "bn": "তাবারী আসহাব শব্দটিকে পড়েন বাসিন্দা অর্থে। তিনি বলেন, যারা হিজরে থাকত, তাদের হিজরের আসহাব বলা হয়েছে, কারণ তারা সেখানে বসবাস করত, সেখানেই থিতু ছিল। ৭:৪৪ আয়াতেও জান্নাতবাসীরা জাহান্নামবাসীদের ডাকে, আর দুই দলকেই চেনানো হয় তারা যেখানে থাকে সেই জায়গার নামে। জায়গাটা নিয়ে তাঁর ব্যাখ্যা ছোট: হিজর হলো সামূদের নগরী। নিজের সনদে তিনি আরও আনেন যে কাতাদা আসহাবুল হিজরের অর্থ করেছেন উপত্যকার অধিবাসী।"
          },
          {
            "en": "Al-Qurtubi first sets out how many things the Arabic word hijr can name. It is the Hijr of the Ka'bah. It means forbidden, as in hijran mahjura in 25:22. It means the intellect, as in li-dhi hijr in 89:5. It can name the fold of a shirt, and a mare. And it names the dwellings of Thamud, which, he says, is what is meant here: the city, as al-Azhari put it. The word the surah takes as its title is, in this verse, simply an address.",
            "bn": "কুরতুবী প্রথমে দেখান, আরবি হিজর শব্দ কত কিছুর নাম হতে পারে। কাবার হিজর। নিষিদ্ধ অর্থে, যেমন ২৫:২২ আয়াতে হিজরান মাহজূরা। বুদ্ধি অর্থে, যেমন ৮৯:৫ আয়াতে লিযী হিজর। জামার ভাঁজ, এমনকি ঘোটকীর নামও হিজর। আর হিজর হলো সামূদের বসতি। কুরতুবী বলেন, এখানে সেটাই উদ্দেশ্য, অর্থাৎ নগরী, আযহারীর ভাষায়। যে শব্দ সূরার নাম, এই আয়াতে তা নিছক একটি ঠিকানা।"
          },
          {
            "en": "Where that address lay, the commentators give in broad strokes. Al-Qurtubi reports Qatadah that it is between Makkah and Tabuk, the valley in which Thamud lived, and at-Tabari that it is land between the Hijaz and Sham. Al-Baghawi puts it between Madinah and Sham, and as-Sa'di calls it the well-known al-Hijr in the land of the Hijaz. The Prophet's ﷺ passing through it on the way to Tabuk, and what he told his companions there, has been read at 11:67 and is not repeated here.",
            "bn": "ঠিকানাটা কোথায়, তাফসীরকারেরা তা বলেন মোটা দাগে। কুরতুবী কাতাদার সূত্রে বলেন, জায়গাটা মক্কা আর তাবুকের মাঝে, সেই উপত্যকা যেখানে সামূদ থাকত। তাবারীর সূত্রে বলেন, হিজায আর শামের মধ্যবর্তী ভূমি। বাগাভী বলেন মদীনা আর শামের মাঝে, আর সা'দী বলেন হিজায অঞ্চলের সুপরিচিত হিজর। তাবুকের পথে নবী ﷺ এই জায়গা পেরিয়ে গিয়েছিলেন, আর সাহাবীদের তখন কী বলেছিলেন, তা ১১:৬৭ আয়াতের আলোচনায় পড়া হয়েছে। এখানে আর তার পুনরাবৃত্তি নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "One Man, a Plural Object",
          "bn": "একজন মানুষ, বহুবচনের কর্ম"
        },
        "p": [
          {
            "en": "Who was denied? On this the commentators agree, and they name one man. Ibn Kathir: Thamud, who denied Salih, their prophet. The Muyassar: the dwellers of the valley of al-Hijr denied Salih (AS), and they are Thamud. As-Sa'di: the people of Salih, who denied Salih. Al-Baghawi is shortest of all. On the word al-mursalin he writes only that Salih alone was meant. Yet the word the verse uses is plural. It does not say the messenger. It says the messengers.",
            "bn": "কাকে অস্বীকার করা হয়েছিল? এ প্রশ্নে তাফসীরকারেরা একমত, আর তাঁরা একজনেরই নাম বলেন। ইবন কাসীর বলেন, সামূদ, যারা তাদের নবী সালিহ (আঃ)-কে অস্বীকার করেছিল। মুয়াসসার বলে, হিজর উপত্যকার বাসিন্দারা সালিহ (আঃ)-কে অস্বীকার করেছিল, আর তারাই সামূদ। সা'দী বলেন, সালিহ (আঃ)-এর কওম, যারা তাঁকে অস্বীকার করেছিল। বাগাভী সবচেয়ে সংক্ষিপ্ত। আল-মুরসালীন শব্দের উপর তিনি শুধু লেখেন, এখানে উদ্দেশ্য একা সালিহ (আঃ)। অথচ আয়াতের শব্দটি বহুবচন। বলা হয়নি রাসূলকে, বলা হয়েছে রাসূলদের।"
          },
          {
            "en": "This is no stray idiom. Surah ash-Shu'ara opens five of its accounts with the same object. 26:105 says the people of Nuh denied the messengers; 26:123 says it of Aad, 26:141 of Thamud, 26:160 of the people of Lut, and 26:176 of the companions of the thicket. In each, one messenger is then named as the one who spoke to them, and each says the same line; in the Thamud account 26:142 and 26:143 have Salih (AS) say: I am to you a trustworthy messenger. One messenger speaks, and the charge is written in the plural.",
            "bn": "এটা কোনো বিচ্ছিন্ন বাকরীতি নয়। সূরা শুআরার পাঁচটি কাহিনি একই কর্ম দিয়ে শুরু হয়। ২৬:১০৫ বলে, নূহের কওম রাসূলদের অস্বীকার করেছিল। একই কথা ২৬:১২৩ বলে আদের বেলায়, ২৬:১৪১ সামূদের বেলায়, ২৬:১৬০ লূতের কওমের বেলায়, আর ২৬:১৭৬ আয়কাবাসীদের বেলায়। প্রতিটিতে এরপর একজন রাসূলের নাম আসে, যিনি তাদের সঙ্গে কথা বলেছিলেন, আর প্রত্যেকে একই বাক্য বলেন। সামূদের কাহিনিতে ২৬:১৪২ ও ২৬:১৪৩ আয়াতে সালিহ (আঃ) বলেন: আমি তোমাদের জন্য বিশ্বস্ত রাসূল। কথা বলেন একজন রাসূল, অথচ অভিযোগ লেখা হয় বহুবচনে।"
          }
        ]
      },
      {
        "h": {
          "en": "Why One Denial Reaches All",
          "bn": "এক অস্বীকারে সবার অস্বীকার"
        },
        "p": [
          {
            "en": "Ibn Kathir answers in one sentence. Whoever denies a messenger has denied all the messengers, and for that reason the denial of the messengers is said of them without qualification. His abridged English commentary, which takes 15:80 to 15:84 together, says the same of this verse: whoever denies even one messenger has disbelieved in all of them, and so they are described as rejecting the messengers. The plural, on this reading, is not a count of heads. It is a statement of what the denial amounted to.",
            "bn": "ইবন কাসীর জবাব দেন এক বাক্যে। যে একজন রাসূলকে অস্বীকার করে, সে সব রাসূলকেই অস্বীকার করে। এ কারণেই তাদের সম্পর্কে কোনো শর্ত ছাড়া বলা হয়েছে, তারা রাসূলদের অস্বীকার করেছিল। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৮০ থেকে ১৫:৮৪ একসঙ্গে আলোচনা করে, আর এই আয়াত সম্পর্কে একই কথা বলে: কেউ যদি একজন রাসূলকেও অস্বীকার করে, সে সব রাসূলকেই অস্বীকার করল, তাই তাদের বলা হয়েছে রাসূলদের প্রত্যাখ্যানকারী। এই পাঠে বহুবচন মাথা গোনা নয়। অস্বীকারটা আসলে কী ছিল, বহুবচন তারই ঘোষণা।"
          },
          {
            "en": "The Muyassar and al-Qurtubi give the reason. In denying Salih, says the Muyassar, Thamud became deniers of every messenger, because whoever denies one prophet denies the prophets all, since they are upon one religion. Al-Qurtubi puts it almost word for word, and then adds a qualifier that matters: they are upon one religion in the usul, the foundations, and so it is not permitted to separate between them. The unity he claims is in the roots of the call, and he states it as a rule.",
            "bn": "কারণটা বলে দেয় মুয়াসসার আর কুরতুবী। মুয়াসসার বলে, সালিহ (আঃ)-কে অস্বীকার করে সামূদ সব রাসূলের অস্বীকারকারী হয়ে গেল। কারণ যে একজন নবীকে অস্বীকার করে, সে সব নবীকেই অস্বীকার করে, কেননা তাঁরা সবাই এক দ্বীনের উপর। কুরতুবী প্রায় হুবহু একই কথা বলেন, তারপর একটি গুরুত্বপূর্ণ শর্ত জুড়ে দেন: তাঁরা এক দ্বীনের উপর উসূলে, অর্থাৎ মূল বিষয়গুলোতে। তাই তাঁদের মধ্যে পার্থক্য করা জায়েয নয়। তিনি যে ঐক্যের দাবি করেন, তা দাওয়াতের শিকড়ে, আর কথাটা তিনি বলেন নিয়ম হিসেবে।"
          },
          {
            "en": "As-Sa'di goes one step further, and his step is the one this article keeps returning to. Whoever denies one messenger has denied the rest, he writes, because their call is in agreement; and the denial some of them met was not aimed at his person but at the truth he came with, a truth all the messengers shared in bringing. Thamud did not simply dislike Salih (AS). What they turned away from was what he carried, and what he carried was not his alone.",
            "bn": "সা'দী আরও এক ধাপ এগিয়ে যান, আর এই লেখা বারবার সেই ধাপেই ফিরে আসবে। তিনি লেখেন, যে একজন রাসূলকে অস্বীকার করে, সে বাকি সবাইকে অস্বীকার করে, কারণ তাঁদের সবার দাওয়াত এক। তিনি আরও বলেন, তাঁদের কাউকে যে অস্বীকার করা হয়েছে, তা তাঁর ব্যক্তিসত্তার কারণে নয়, বরং তিনি যে সত্য নিয়ে এসেছিলেন তার কারণে, আর সেই সত্য সব রাসূলই নিয়ে এসেছিলেন। সামূদ শুধু সালিহ (আঃ)-কে অপছন্দ করেনি। তারা ফিরিয়ে দিয়েছিল তাঁর বয়ে আনা বার্তাকে, আর সেই বার্তা একা তাঁর ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Second Reading, Kept",
          "bn": "পাশে রাখা দ্বিতীয় পাঠ"
        },
        "p": [
          {
            "en": "Al-Qurtubi does not stop at that explanation. Directly after it he records another, introduced with wa-qila, and it is said: they denied Salih, and those who followed him, and those of the prophets who came before him as well. He closes the point with wa-llahu a'lam, and Allah knows best. On this reading the plural does not rest only on what a denial implies. It rests on whom the denial actually reached: the messenger of their own day, those who followed him, and the prophets before him.",
            "bn": "কুরতুবী ওই ব্যাখ্যায় থেমে যান না। ঠিক তার পরেই তিনি আরেকটি মত আনেন, ওয়া কীলা, অর্থাৎ বলা হয়: তারা সালিহ (আঃ)-কে অস্বীকার করেছিল, তাঁর অনুসারীদেরও, আর তাঁর আগে আসা নবীদেরও। কথাটা তিনি শেষ করেন ওয়াল্লাহু আলাম বলে, আল্লাহই ভালো জানেন। এই পাঠে বহুবচনের ভিত্তি শুধু অস্বীকারের তাৎপর্য নয়। ভিত্তি হলো অস্বীকারটা আসলে কাদের উপর গিয়ে পড়েছিল: তাদের নিজেদের সময়ের রাসূল, তাঁর অনুসারীরা, আর তাঁর আগের নবীরা।"
          },
          {
            "en": "Set beside each other, the two explanations reach the plural by different roads. Ibn Kathir, the Muyassar, as-Sa'di and al-Qurtubi's first statement explain it by what rejecting one messenger means; the reading al-Qurtubi reports with it is said counts more than one rejected. Al-Baghawi says only that Salih alone was meant, and gives no reason. Al-Qurtubi places the first reading in his own voice and the second as a report, and ends with Allah knows best. This article records both and does not choose between them.",
            "bn": "দুটি ব্যাখ্যা পাশাপাশি রাখলে দেখা যায়, দুটিই বহুবচনে পৌঁছায় ভিন্ন পথে। ইবন কাসীর, মুয়াসসার, সা'দী আর কুরতুবীর প্রথম বক্তব্য একে ব্যাখ্যা করে একজন রাসূলকে প্রত্যাখ্যান করার তাৎপর্য দিয়ে। কুরতুবী 'বলা হয়' দিয়ে যে পাঠ আনেন, তা একাধিক প্রত্যাখ্যাত জনকে গোনে। বাগাভী শুধু বলেন, উদ্দেশ্য একা সালিহ (আঃ), কোনো কারণ দেখান না। কুরতুবী প্রথম পাঠটি বলেন নিজের কথায়, দ্বিতীয়টি বর্ণনা হিসেবে, আর শেষ করেন আল্লাহই ভালো জানেন বলে। এই লেখা দুটোই তুলে রাখে, কোনোটিকে বেছে নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Rulings Drawn at the Valley",
          "bn": "উপত্যকা ঘিরে ফিকহের মাসআলা"
        },
        "p": [
          {
            "en": "Al-Qurtubi's page on this verse is mostly law. He counts eight issues that scholars derived from it, some of them disputed among the jurists, and all of them rest on the narrations from the march past al-Hijr already given at 11:67. The first is that entering such places is disliked, and some scholars read entering the graveyards of disbelievers in the same way. Whoever does enter, he says, should do so as the Prophet ﷺ guided: taking the lesson, in fear, and hurrying through.",
            "bn": "এই আয়াতে কুরতুবীর আলোচনার বেশির ভাগই ফিকহ। আলেমরা এ আয়াত থেকে আটটি মাসআলা বের করেছেন, তিনি সেগুলো গুনে দেখান। কয়েকটিতে ফকীহদের মধ্যে মতভেদ আছে। সবগুলোর ভিত্তি হিজর পার হওয়ার সময়কার সেই বর্ণনাগুলো, যা ১১:৬৭ আয়াতের আলোচনায় এসেছে। প্রথম মাসআলা: এমন জায়গায় প্রবেশ করা মাকরূহ। কোনো কোনো আলেম কাফিরদের কবরস্থানে প্রবেশকেও একই রকম ধরেছেন। কুরতুবী বলেন, কেউ প্রবেশ করলে যেন নবী ﷺ-এর দেখানো পথে করে: শিক্ষা নিয়ে, ভয় নিয়ে, আর দ্রুত পার হয়ে।"
          },
          {
            "en": "On prayer in that valley the disagreement is open, and al-Qurtubi keeps it so. Some scholars, he reports, barred prayer there as an abode of displeasure, and he quotes Ibn al-Arabi that the spot became an exception to the narration that the earth was made a place of prayer and of purification: no tayammum with its dust, no wudu from its water, no prayer on it. Al-Qurtubi then gives his own view: the correct position, in sha' Allah, is that prayer in every pure place is permissible and valid.",
            "bn": "ওই উপত্যকায় নামাজ পড়া নিয়ে মতভেদ স্পষ্ট, আর কুরতুবী তা স্পষ্টই রাখেন। তিনি জানান, কিছু আলেম সেখানে নামাজ নিষেধ করেছেন, কারণ জায়গাটা আল্লাহর অসন্তুষ্টির আবাস। এরপর তিনি ইবনুল আরাবীর বক্তব্য আনেন: পুরো জমিনকে নামাজের জায়গা ও পবিত্রকারী করা হয়েছে, এই বর্ণনা থেকে এ জায়গাটা ব্যতিক্রম। তাই এর মাটিতে তায়াম্মুম নেই, এর পানিতে ওযু নেই, এর উপর নামাজ নেই। এরপর কুরতুবী নিজের মত দেন: সঠিক কথা, ইনশাআল্লাহ, এই যে প্রতিটি পবিত্র জায়গায় নামাজ জায়েয ও শুদ্ধ।"
          },
          {
            "en": "He supports it by quoting the hafiz Abu Umar, whose chosen view is that the valley and every other spot on earth may be prayed on unless there is certain impurity there. The narration both sides turn on is recorded by al-Bukhari at 335, from Jabir ibn Abdullah (RA); it is general and not attached to this verse. Beyond the Tabuk narrations already read, no hadith in the commentaries consulted for this verse bears on its wording, and one further report at-Tabari carries is left out unconfirmed.",
            "bn": "নিজের মতের পক্ষে তিনি হাফিয আবু উমারের বক্তব্য আনেন। তাঁর গৃহীত মত হলো, ওই উপত্যকা আর জমিনের অন্য যেকোনো জায়গায় নামাজ পড়া যায়, যদি সেখানে নিশ্চিত নাপাকি না থাকে। দুই পক্ষই যে বর্ণনার উপর দাঁড়িয়ে, তা বুখারী ৩৩৫ নম্বরে জাবির ইবন আবদুল্লাহ (রাঃ) থেকে এনেছেন। বর্ণনাটি সাধারণ, এই আয়াতের সঙ্গে যুক্ত নয়। তাবুকের যে বর্ণনাগুলো আগেই পড়া হয়েছে, সেগুলো ছাড়া এই আয়াতের জন্য আনা তাফসীরগুলোতে এর শব্দের সঙ্গে সম্পর্কিত আর কোনো হাদিস নেই। তাবারীর আনা আরও একটি বর্ণনা যাচাই করা যায়নি বলে বাদ রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not a Charge to Pass On",
          "bn": "অন্যের ঘাড়ে চাপানোর রায় নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse speaks only of what it names: a people of the past, named by the Qur'an, who denied the messenger sent to them. It licenses nothing against any living person or community, including those who live today in the lands the commentators name. The weight of its plural, that denying one messenger is denying all, is the Qur'an's judgement on Thamud, delivered by revelation. No reader is given the authority to pronounce it on a neighbour, a rival, or a people.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি যা বর্ণনা করে, শুধু সেটুকুই বর্ণনা করে: অতীতের এক জাতি, কুরআন যাদের নাম বলেছে, যারা তাদের কাছে পাঠানো রাসূলকে অস্বীকার করেছিল। জীবিত কোনো মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। তাফসীরকারেরা যে অঞ্চলের নাম বলেছেন, আজ সেখানে যারা থাকে, তাদের বিরুদ্ধেও নয়। বহুবচনের ভার, অর্থাৎ একজন রাসূলকে অস্বীকার করা মানে সবাইকে অস্বীকার করা, সামূদের ব্যাপারে কুরআনের রায়। এ রায় এসেছে ওহির মাধ্যমে। প্রতিবেশী, প্রতিদ্বন্দ্বী বা কোনো জাতির উপর এই রায় ঘোষণার অধিকার কোনো পাঠককে দেওয়া হয়নি।"
          },
          {
            "en": "The principle, though, is meant to be held by the believer about himself. 4:150 and 4:151 name those who say we believe in some and disbelieve in others, wanting a way in between, and call them the disbelievers in truth. 2:285 gives the believers' own words: we make no distinction between any of His messengers. Those verses set the test for the reader's creed, not for anyone else's. What follows is therefore turned inward, and it is reflection, not something the commentators themselves said.",
            "bn": "তবে নীতিটা মুমিনের নিজের জন্য, নিজের উপর প্রয়োগ করার জন্য। ৪:১৫০ ও ৪:১৫১ আয়াত তাদের কথা বলে, যারা বলে আমরা কিছু মানি আর কিছু মানি না, আর মাঝামাঝি একটা পথ বের করতে চায়। কুরআন তাদের বলে প্রকৃত কাফির। ২:২৮৫ আয়াতে মুমিনদের নিজেদের কথা: আমরা তাঁর রাসূলদের কারও মধ্যে পার্থক্য করি না। এই আয়াতগুলো পাঠকের নিজের ঈমানের পরীক্ষা নেয়, অন্যের নয়। তাই পরের কথাগুলো নিজের দিকে ফেরানো। এগুলো চিন্তার কথা, তাফসীরকারদের নিজেদের বক্তব্য নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Truth From an Unwelcome Mouth",
          "bn": "অপছন্দের মুখে সত্য কথা"
        },
        "p": [
          {
            "en": "As-Sa'di's sentence runs in both directions. If Thamud's rejection of Salih (AS) was aimed past the man at the truth he carried, then a reader who refuses a true word because of who spoke it has also refused the truth, whatever he tells himself about the speaker. It happens in small rooms. A junior colleague points out the error in a plan. A spouse names a habit. A relative whose past we remember reminds us of a prayer we have been missing. The content is right, and we answer the carrier.",
            "bn": "সা'দীর বাক্যটা দুই দিকেই খাটে। সালিহ (আঃ)-কে সামূদের প্রত্যাখ্যান যদি মানুষটিকে ছাড়িয়ে তাঁর বয়ে আনা সত্যকেই লক্ষ্য করে থাকে, তবে যে পাঠক কোনো সত্য কথা শুধু বক্তার কারণে ফিরিয়ে দেয়, সে-ও আসলে সত্যকেই ফিরিয়ে দিল, বক্তাকে নিয়ে নিজেকে সে যা-ই বোঝাক। এমনটা ঘটে ঘরোয়া, ছোটখাটো পরিসরে। অফিসের এক জুনিয়র পরিকল্পনার ভুল ধরিয়ে দেয়। স্ত্রী বা স্বামী কোনো বদভ্যাস ধরিয়ে দেন। এমন এক আত্মীয়, যার অতীত আমাদের মনে আছে, মনে করিয়ে দেন কোন নামাজটা আমরা বাদ দিয়ে যাচ্ছি। কথাটা ঠিক, অথচ আমরা জবাব দিই কথাটা যে বয়ে আনল তাকে।"
          },
          {
            "en": "The other half of the lesson is selection. Al-Qurtubi's word for what is not permitted is tafriq, separating between the messengers. A reader can practise a small version of it without ever denying a prophet: keeping the parts of the truth that cost nothing and leaving the parts that ask for money, time or pride. The Muyassar's reason, that the messengers were upon one religion, suggests that the truth does not come apart so neatly. What is refused in one place is refused.",
            "bn": "শিক্ষার আরেক অর্ধেক হলো বেছে নেওয়া। যা জায়েয নয়, কুরতুবী তার নাম দেন তাফরীক, অর্থাৎ রাসূলদের মধ্যে পার্থক্য করা। কোনো নবীকে অস্বীকার না করেও একজন পাঠক এর ছোট একটা রূপ চর্চা করতে পারেন। সত্যের যে অংশে কোনো খরচ নেই, সেটুকু রেখে দেন, আর যে অংশের জন্য টাকা, সময় বা অহংকার ছাড়তে হয়, সেটা বাদ দেন। মুয়াসসার কারণ দেখিয়েছে, রাসূলরা সবাই এক দ্বীনের উপর ছিলেন। এ থেকে বোঝা যায়, সত্যকে এত সহজে টুকরো টুকরো করা যায় না। এক জায়গায় যা ফিরিয়ে দেওয়া হয়, তা ফিরিয়েই দেওয়া হয়।"
          },
          {
            "en": "Surah al-Hijr knew this pattern from its first pages. 15:6 has the Makkans call the one to whom the reminder was sent down mad, and 15:11 says that no messenger ever came to earlier peoples but they mocked him. The message was refused through the man. A simple check follows for anyone who wants to hear differently: before setting a word aside, ask whether you would accept it from someone you love, and whether you are answering what was said or who said it.",
            "bn": "সূরা হিজর এই ধারা চেনে শুরু থেকেই। ১৫:৬ আয়াতে মক্কার লোকেরা তাঁকে পাগল বলে, যাঁর উপর উপদেশবাণী নাজিল হয়েছে। ১৫:১১ বলে, আগের জাতিগুলোর কাছে এমন কোনো রাসূল আসেননি, যাঁকে নিয়ে তারা ঠাট্টা করেনি। বার্তাকে ফিরিয়ে দেওয়া হয়েছে বাহককে ফিরিয়ে দিয়ে। যিনি অন্যভাবে শুনতে চান, তাঁর জন্য সহজ একটা পরীক্ষা আছে। কোনো কথা সরিয়ে রাখার আগে নিজেকে জিজ্ঞেস করুন, প্রিয় কেউ বললে কি মেনে নিতেন? আর আপনি কি কথাটার জবাব দিচ্ছেন, নাকি যে বলেছে তার?"
          }
        ]
      }
    ]
  },
  "15:85": {
    "sections": [
      {
        "h": {
          "en": "Two Facts and a Conclusion",
          "bn": "দুটি সত্য, একটি সিদ্ধান্ত"
        },
        "p": [
          {
            "en": "The verse sets down two facts and then draws a command out of them. We did not create the heavens and the earth and what is between them except in truth. And the Hour is surely coming. Then the fa of consequence: so overlook with a gracious overlooking. The logic runs through the middle statement. If nothing was made pointlessly and a day of settlement is fixed, then no injury a person suffers will be left unaccounted for, and the pressure to settle it personally drops away.",
            "bn": "আয়াতটি দুটি সত্য জানায়, তারপর সেখান থেকে একটি হুকুম বের করে আনে। আমি আসমানসমূহ, যমীন ও এ দুইয়ের মাঝে যা কিছু আছে তা যথার্থ উদ্দেশ্য ছাড়া সৃষ্টি করিনি। আর কিয়ামত অবশ্যই আসবে। এরপর ফলাফল বোঝানো 'ফা': কাজেই উত্তম পন্থায় উপেক্ষা করো। যুক্তির ভার মাঝের কথাটার উপর। কিছুই যদি অনর্থক সৃষ্টি না হয়ে থাকে, আর হিসাব মেটানোর দিন যদি ঠিক করা থাকে, তবে মানুষ যত আঘাতই পাক, তার কোনোটিই হিসাবের বাইরে থাকবে না। তখন নিজে হাতে শোধ নেওয়ার চাপটা আপনিই নেমে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Where It Falls in al-Hijr",
          "bn": "সূরা হিজরে এর অবস্থান"
        },
        "p": [
          {
            "en": "Placement sharpens it. 15:80-84 has just recounted the companions of al-Hijr, who denied the messengers, whom the shriek seized in the morning, and whose earnings availed them nothing. The command to overlook comes directly after a nation has been destroyed for its denial. The arrangement is deliberate: the man being told to release his own injuries has just been shown, in detail, that the settling of accounts is real, thorough, and not his department.",
            "bn": "আয়াতটি কোথায় বসেছে, তা থেকে কথাটা আরও ধারালো হয়। ঠিক আগে ১৫:৮০-৮৪ আয়াতে এসেছে হিজরবাসীদের কথা: তারা রাসূলদের অস্বীকার করেছিল, ভোরবেলা এক বিকট আওয়াজ তাদের পাকড়াও করেছিল, আর তাদের উপার্জন কোনো কাজে আসেনি। অস্বীকারের কারণে একটি জাতি ধ্বংস হলো, আর ঠিক তার পরেই এল উপেক্ষা করার হুকুম। এই বিন্যাস ভেবেচিন্তেই। যাঁকে নিজের আঘাতগুলো ছেড়ে দিতে বলা হচ্ছে, তাঁকে এইমাত্র বিস্তারিত দেখানো হলো যে হিসাব-নিকাশ সত্যি, তাতে কিছুই বাদ পড়ে না, আর সে কাজ তাঁর নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "As-Safh al-Jamil",
          "bn": "আস-সাফহুল জামীল"
        },
        "p": [
          {
            "en": "Safh is from a root that names the side or the broad face of a thing — the flat of a page, or of a blade. To do safh is to turn that face: to turn the page over an injury, and afterwards to turn toward the offender with a clear face rather than a cold one. That is why the phrase is rendered in more than one way, sometimes as gracious forgiveness and sometimes as turning away in a gracious manner. The word genuinely holds both movements.",
            "bn": "'সাফহ' শব্দের মূল বোঝায় কোনো কিছুর পাশ বা চওড়া দিক, যেমন পাতার সমতল পিঠ, কিংবা তলোয়ারের ফলার চ্যাপ্টা দিক। সাফহ করা মানে সেই দিকটা ঘুরিয়ে দেওয়া। আঘাতের উপর দিয়ে পাতা উল্টে দেওয়া, তারপর যে কষ্ট দিয়েছে তার দিকে ঠান্ডা মুখে নয়, খোলা মুখে ফেরা। এ কারণেই কথাটির অনুবাদ একভাবে হয় না। কখনো 'উদারভাবে ক্ষমা করা', কখনো 'সুন্দরভাবে এড়িয়ে যাওয়া'। শব্দটির ভেতরে সত্যিই এই দুটি গতিই আছে।"
          },
          {
            "en": "The Arabic reinforces it by construction. The command is followed by its own cognate noun carrying the definite article, and then by an adjective — fasfahi as-safha al-jamil — a pattern Arabic uses to specify the manner of an act rather than merely to repeat it. So the verse does not ask for overlooking and then add a compliment to it. It names a particular kind of overlooking: the beautiful kind, with no reproach attached and no reminder issued afterwards.",
            "bn": "আরবি বাক্যগঠনও কথাটাকে জোর দেয়। হুকুমের পরেই আসে একই মূলের বিশেষ্য, নির্দিষ্টবাচক 'আল'সহ, তারপর একটি বিশেষণ: ফাসফাহিস সাফহাল জামীল। আরবিতে এই গঠন কাজটার পুনরাবৃত্তি বোঝায় না, কাজটা কেমনভাবে হবে তা ঠিক করে দেয়। তাই আয়াত উপেক্ষা করতে বলে তার সঙ্গে একটা প্রশংসা জুড়ে দিচ্ছে না। আয়াত একটি বিশেষ ধরনের উপেক্ষার কথা বলছে: সুন্দর উপেক্ষা, যার সঙ্গে কোনো খোঁটা নেই, পরে মনে করিয়ে দেওয়াও নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Beautiful Withdrawals",
          "bn": "সুন্দরভাবে সরে থাকা"
        },
        "p": [
          {
            "en": "Jamil is attached to a small family of acts in the Quran, and they share something. 12:18 gives sabrun jamil, beautiful patience, from Ya'qub (AS) when the shirt is brought to him. 73:10 commands hajran jamilan, a gracious withdrawal from what the deniers say. 33:28 and 33:49 use sarahan jamilan for a gracious release in divorce. Each names something a person refrains from doing, and in each case jamil rules out the ugliness that usually accompanies restraint.",
            "bn": "কুরআনে 'জামীল' শব্দটি জুড়েছে অল্প কয়েকটি কাজের সঙ্গে, আর সেগুলোর মধ্যে একটা মিল আছে। ১২:১৮ আয়াতে আছে 'সবরুন জামীল', সুন্দর সবর। জামাটি যখন ইয়াকুব (আঃ)-এর কাছে আনা হয়, তখন তিনি এ কথা বলেন। ৭৩:১০ আয়াতে হুকুম 'হাজরান জামীলা': অস্বীকারকারীদের কথা থেকে ভদ্রভাবে সরে থাকা। ৩৩:২৮ ও ৩৩:৪৯ আয়াতে আছে 'সারাহান জামীলা', তালাকের সময় সুন্দরভাবে বিদায় দেওয়া। প্রতিটিই এমন কাজ, যেখানে মানুষ কিছু একটা করা থেকে নিজেকে থামায়। আর প্রতিটিতেই 'জামীল' সেই কুৎসিত দিকটা বাদ দেয়, যা সাধারণত সংযমের সঙ্গে লেগে থাকে।"
          },
          {
            "en": "The commentators gloss these in the same spirit: patience that is beautiful is patience without complaint poured out to people, and withdrawal that is beautiful is withdrawal without an insult returned. Read that way, jamil is the difference between two things that look identical from outside. One man forgives and mentions it every year afterwards. Another turns the page. Both have dropped the claim; only the second has done what this verse actually asks for.",
            "bn": "মুফাসসিররা এগুলোর ব্যাখ্যাও করেন একই সুরে। সুন্দর সবর মানে মানুষের কাছে অভিযোগ ঢেলে না দিয়ে ধৈর্য ধরা। সুন্দরভাবে সরে আসা মানে গালির জবাবে গালি না দিয়ে সরে আসা। এভাবে পড়লে 'জামীল' হলো এমন দুটি কাজের পার্থক্য, যা বাইরে থেকে দেখতে একই রকম। একজন ক্ষমা করে, তারপর প্রতি বছর সে কথা তোলে। আরেকজন পাতাটা উল্টে দেয়। দুজনেই দাবি ছেড়েছে, কিন্তু এই আয়াত যা চায়, তা করেছে শুধু দ্বিতীয়জন।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Posture of the Undefended",
          "bn": "এ অসহায়ের ভঙ্গি নয়"
        },
        "p": [
          {
            "en": "Overlooking here is not surrender. Later in the same surah, 15:94 pairs a command to proclaim openly what he was commanded with turning away from the idolaters, and 15:95 adds that We are sufficient for you against the mockers. A man who has been told his defence is handled can afford to stop conducting it. Some of the commentators counted verses of this kind among those superseded by later legislation about fighting; others held that an instruction about character is not the sort of ruling a later verse repeals.",
            "bn": "এখানে উপেক্ষা মানে হার মেনে নেওয়া নয়। এই সূরারই পরের দিকে ১৫:৯৪ আয়াত দুটি হুকুম একসঙ্গে দেয়: যা আদেশ করা হয়েছে তা প্রকাশ্যে ঘোষণা করা, আর মুশরিকদের থেকে মুখ ফিরিয়ে নেওয়া। ১৫:৯৫ আয়াত যোগ করে: বিদ্রূপকারীদের বিরুদ্ধে আমিই তোমার জন্য যথেষ্ট। যাকে জানিয়ে দেওয়া হয়েছে যে তার হয়ে লড়ার দায়িত্ব নেওয়া হয়ে গেছে, সে নিজের মামলা নিজে চালানো থামাতে পারে। কিছু মুফাসসির এ ধরনের আয়াতকে পরে আসা যুদ্ধের বিধান দিয়ে রহিত হওয়া আয়াতের মধ্যে গণ্য করেছেন। অন্যরা বলেছেন, চরিত্র নিয়ে দেওয়া নির্দেশ এমন বিধান নয়, যা পরের কোনো আয়াত রহিত করে।"
          }
        ]
      },
      {
        "h": {
          "en": "What It Costs and What It Buys",
          "bn": "এর মূল্য, আর এর প্রাপ্তি"
        },
        "p": [
          {
            "en": "The verse is honest about the price. Safh does not require pretending that the injury did not happen or that it did not matter; the Quran nowhere asks anyone to lie to himself. It requires that the page be turned and stay turned, which is harder, because a grievance is useful — it explains a person to himself and it excuses things. 42:40 states the offer plainly: whoever pardons and puts matters right, his reward is upon Allah.",
            "bn": "মূল্যের ব্যাপারে আয়াতটি কিছু লুকায় না। সাফহ করতে গিয়ে এমন ভান করতে হয় না যে আঘাতটা ঘটেনি, বা তাতে কিছু যায় আসে না। কুরআন কোথাও কাউকে নিজের সঙ্গে মিথ্যা বলতে বলে না। সাফহ চায় শুধু এটুকু: পাতাটা উল্টে দিতে হবে, আর উল্টেই রাখতে হবে। এটাই বেশি কঠিন, কারণ ক্ষোভ মানুষের কাজে লাগে। ক্ষোভ দিয়ে মানুষ নিজের কাছে নিজেকে ব্যাখ্যা করে, অনেক কিছুর অজুহাতও পায়। ৪২:৪০ আয়াত প্রস্তাবটা সোজা ভাষায় দেয়: যে ক্ষমা করে ও আপস-মীমাংসা করে, তার প্রতিদান আল্লাহর কাছে।"
          },
          {
            "en": "Three verses later, the surah shows what a heart with the page turned is free to do. 15:88 tells the Prophet ﷺ not to stretch his eyes toward what others have been given, not to grieve over them, and to lower his wing to the believers. Resentment and envy occupy the same room in a person. Clear it, and the attention goes where the verse sends it, to the people who are actually standing with you.",
            "bn": "তিন আয়াত পরেই সূরাটি দেখায়, পাতা উল্টে দেওয়া হৃদয় এবার কী করতে পারে। ১৫:৮৮ আয়াত নবী ﷺ-কে বলে, অন্যদের যা দেওয়া হয়েছে তার দিকে চোখ বাড়িয়ে না তাকাতে, তাদের জন্য দুঃখ না করতে, আর মুমিনদের জন্য নিজের ডানা নামিয়ে দিতে। ক্ষোভ আর হিংসা মানুষের ভেতরে একই ঘরে থাকে। ঘরটা খালি করুন, তখন মনোযোগ যাবে আয়াত যেদিকে পাঠায় সেদিকে: যারা সত্যিই আপনার পাশে আছে, তাদের দিকে।"
          }
        ]
      }
    ]
  },
  "15:88": {
    "sections": [
      {
        "h": {
          "en": "Given First, Then Told",
          "bn": "আগে দান, তারপর নির্দেশ"
        },
        "p": [
          {
            "en": "Once the account of the people of al-Hijr closes at 15:84, the surah turns to the Prophet ﷺ himself. 15:85 tells him to forgive graciously, 15:86 names his Lord the Knowing Creator, and 15:87 reminds him: We have certainly given you seven of the oft-repeated verses and the great Qur'an. This verse follows at once, fifteen Arabic words carrying three commands. Do not stretch your eyes toward what We have given some pairs of them to enjoy. Do not grieve over them. And lower your wing to the believers.",
            "bn": "হিজরবাসীদের কাহিনি ১৫:৮৪ আয়াতে শেষ হওয়ার পর সূরাটি ফিরে আসে নবী ﷺ-এর দিকে। ১৫:৮৫ আয়াত তাঁকে সুন্দরভাবে ক্ষমা করতে বলে, ১৫:৮৬ আয়াত জানায় তাঁর রব মহাস্রষ্টা, সর্বজ্ঞ। ১৫:৮৭ আয়াত মনে করিয়ে দেয়: আমি তোমাকে দিয়েছি বারবার পঠিত সাতটি আয়াত আর মহা কুরআন। তার পরপরই এই আয়াত। আরবিতে পনেরো শব্দ, তাতে তিনটি হুকুম। তাদের কিছু দলকে যা ভোগ করতে দিয়েছি, সেদিকে চোখ বাড়িয়ে দিয়ো না। তাদের জন্য দুঃখ কোরো না। আর মুমিনদের জন্য তোমার ডানা নামিয়ে দাও।"
          },
          {
            "en": "Two of the commentaries consulted for this verse read it together with its neighbour. The abridged English Ibn Kathir takes 15:87 and 15:88 as one passage and reads the second through the first: since We have given you the Grand Qur'an, do not look at this world and its attractions. Ma'arif al-Qur'an groups 15:87 to 15:93, but its discussion goes to al-Fatihah and to the questioning in 15:92, and it says nothing on this verse, so it is not used below. Everything else comes from commentary on 15:88 itself.",
            "bn": "এই আয়াতের জন্য যেসব তাফসীর আনা হয়েছে, তার দুটি একে পাশের আয়াতের সঙ্গে মিলিয়ে পড়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১৫:৮৭ ও ১৫:৮৮ আয়াতকে একটি অংশ ধরে, আর দ্বিতীয়টিকে পড়ে প্রথমটির আলোয়: যেহেতু তোমাকে মহা কুরআন দিয়েছি, তাই দুনিয়া আর তার চাকচিক্যের দিকে তাকিয়ো না। মাআরিফুল কুরআন ১৫:৮৭ থেকে ১৫:৯৩ পর্যন্ত একসঙ্গে ধরেছে। কিন্তু তার আলোচনা সূরা ফাতিহা আর ১৫:৯২ আয়াতের জিজ্ঞাসাবাদ নিয়ে, এই আয়াত নিয়ে সেখানে কিছু নেই। তাই নিচে তা ব্যবহার হয়নি। বাকি সব কথা এসেছে সরাসরি ১৫:৮৮ আয়াতের তাফসীর থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Stare That Wants",
          "bn": "যে দৃষ্টি পেতে চায়"
        },
        "p": [
          {
            "en": "La tamuddanna 'aynayka: do not extend your two eyes. The verb is emphatic and the eyes are dual. At-Tabari explains the idiom from ordinary Arabic: one says a man stretched his eye toward another's wealth when he desired it, wished for it and wanted it. So he paraphrases the command as: do not wish, O Muhammad, for the finery of this world that We made an enjoyment for the wealthy of your people. The Muyassar joins the two acts into one: do not look with your eyes and wish.",
            "bn": "লা তামুদ্দান্না আইনাইকা: তোমার দুই চোখ বাড়িয়ে দিয়ো না। ক্রিয়াটি জোরালো, আর চোখ দ্বিবচনে। তাবারী আরবদের সাধারণ কথার ধরন থেকে বাগধারাটি বোঝান। কেউ অন্যের সম্পদের দিকে চোখ বাড়াল, এ কথা বলা হয় তখন, যখন সে তা কামনা করে, পাওয়ার আশা করে, মনে মনে চায়। তাই তিনি হুকুমটি এভাবে বলেন: হে মুহাম্মাদ, তোমার জাতির ধনীদের ভোগের জন্য দুনিয়ার যে সাজসজ্জা দিয়েছি, তা পাওয়ার আশা কোরো না। মুয়াসসার দুটি কাজকে একটি হুকুমে মিলিয়ে বলে: চোখ তুলে তাকিয়ে তা কামনা কোরো না।"
          },
          {
            "en": "So the look forbidden here is not a glance. It is the stare that wants. As-Sa'di draws the line at an admiration that carries a person into filling his thoughts with worldly pleasures, the ones the luxurious enjoy and the ignorant are taken in by. At-Tabari and Ibn Kathir both carry a report from Ibn Abbas, through al-Awfi, that widens the address: a man is forbidden to wish for his companion's wealth. The verse speaks to the Prophet ﷺ, and through that reading it reaches every reader who watches a neighbour's plenty.",
            "bn": "তাহলে এখানে যে তাকানো নিষেধ, তা এক পলকের দেখা নয়। তা এমন দৃষ্টি, যা পেতে চায়। সা'দী সীমাটা টানেন সেই মুগ্ধতায়, যা মানুষকে দুনিয়ার ভোগবিলাসের চিন্তায় ডুবিয়ে দেয়। এসব ভোগ করে বিলাসী লোকেরা, আর এতেই ধোঁকা খায় অজ্ঞরা। তাবারী ও ইবন কাসীর দুজনেই আওফীর সূত্রে ইবন আব্বাস (রাঃ)-এর একটি কথা এনেছেন, যা সম্বোধনকে প্রশস্ত করে দেয়: মানুষকে নিষেধ করা হয়েছে তার সঙ্গীর সম্পদ কামনা করতে। আয়াতের সম্বোধন নবী ﷺ-কে। কিন্তু এই ব্যাখ্যার পথ ধরে তা পৌঁছে যায় প্রত্যেক পাঠকের কাছে, যে প্রতিবেশীর প্রাচুর্যের দিকে তাকিয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Pairs of Them, the Rich",
          "bn": "তাদের জোড়া, অর্থাৎ ধনীরা"
        },
        "p": [
          {
            "en": "Azwajan minhum is rendered in the translation shown as categories of them, and the commentators split over its reference. Al-Baghawi and the Muyassar gloss it as asnaf, kinds, and name them as kinds of the disbelievers. Mujahid, in at-Tabari's chain, gives three words: the rich, the likes, the similars. Al-Qurtubi explains why wealthy people should be called azwaj at all: they are likes of one another in blessing, each matching the other in riches, so they are pairs. Ibn Kathir keeps Mujahid's first word alone: they are the rich.",
            "bn": "আযওয়াজাম মিনহুম, অনুবাদে যার অর্থ দেওয়া হয়েছে তাদের বিভিন্ন দল। শব্দটি কাদের দিকে ইশারা করে, সে নিয়ে তাফসীরকারদের কথা এক নয়। বাগাভী ও মুয়াসসার এর অর্থ করেন আসনাফ, অর্থাৎ নানা প্রকার, এবং বলেন এরা কাফিরদের নানা শ্রেণি। তাবারীর সনদে মুজাহিদ তিনটি শব্দ বলেন: ধনীরা, সমমানের লোকেরা, একে অপরের মতো লোকেরা। ধনীদের আযওয়াজ কেন বলা হলো, কুরতুবী তার কারণ দেখান। নিয়ামতে তারা একে অপরের মতো, সম্পদে একজন আরেকজনের জোড়া, তাই তারা আযওয়াজ। ইবন কাসীর মুজাহিদের প্রথম শব্দটিই রাখেন: তারা ধনী লোক।"
          },
          {
            "en": "At-Tabari holds both strands together: the wealthy of your people who do not believe in Allah and the Last Day, who take their enjoyment in this world, and behind whom lies a heavy punishment. The enjoyment itself sits in the verb matta'na, We gave them to enjoy. Ibn Kathir calls it the passing bloom, az-zahra al-faniya. The abridged English reads it beside 20:131, the near-parallel in Surah Ta-Ha, which adds that this bloom of worldly life is given to test them. Al-Qurtubi also names 20:131 as the same command.",
            "bn": "তাবারী দুটি ধারাকেই একসঙ্গে ধরেন: তোমার জাতির সেই ধনীরা, যারা আল্লাহ ও আখিরাতে ঈমান আনে না, দুনিয়াতে ভোগে মেতে থাকে, আর যাদের সামনে অপেক্ষা করছে কঠিন আযাব। ভোগের কথাটা আছে মাত্তা'না ক্রিয়ায়, অর্থাৎ আমি তাদের ভোগ করতে দিয়েছি। ইবন কাসীর একে বলেন আয-যাহরাতুল ফানিয়া, ঝরে যাওয়া ফুল। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ একে পড়ে সূরা ত্বা-হার ২০:১৩১ আয়াতের পাশে। সেই প্রায়-সমান আয়াতে বাড়তি আছে যে দুনিয়ার জীবনের এই ফুল তাদের দেওয়া হয়েছে পরীক্ষার জন্য। কুরতুবীও ২০:১৩১ আয়াতকে একই হুকুম বলে উল্লেখ করেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Made Rich by the Book",
          "bn": "কিতাবেই যার প্রাচুর্য"
        },
        "p": [
          {
            "en": "Why should the Prophet ﷺ not look? The commentators answer from the verse before. Ibn Kathir: be content, istaghni, with what Allah has given you of the great Qur'an, in place of the enjoyment and passing bloom they have. As-Sa'di uses the same word, naming the oft-repeated verses too. At-Tabari says that what awaits him in the Hereafter is better, on top of the honour already hastened to him in this world, the seven oft-repeated and the great Qur'an. Al-Baghawi reports, as it is said, that the verse is joined to the one before it.",
            "bn": "নবী ﷺ কেন তাকাবেন না? তাফসীরকারেরা উত্তর খোঁজেন আগের আয়াতে। ইবন কাসীর বলেন: আল্লাহ তোমাকে যে মহা কুরআন দিয়েছেন, তা নিয়েই অভাবমুক্ত থাকো, তাদের ভোগ আর ঝরে যাওয়া ফুলের দরকার নেই। সা'দী একই শব্দ ইস্তাগনি ব্যবহার করেন, সঙ্গে বারবার পঠিত আয়াতগুলোর নামও নেন। তাবারী বলেন, আখিরাতে তাঁর জন্য যা আছে তা এর চেয়ে ভালো। তার ওপর দুনিয়াতেই তাঁকে আগাম সম্মান দেওয়া হয়েছে, বারবার পঠিত সাতটি আয়াত আর মহা কুরআন। বাগাভী 'বলা হয়' বলে উল্লেখ করেন যে আয়াতটি আগের আয়াতের সঙ্গে যুক্ত।"
          },
          {
            "en": "At-Tabari then quotes a saying: whoever is given the Qur'an and thinks that anyone was given something better than what he was given has made great what is small and made small what is great. Al-Qurtubi puts the same thought in his own words. Allah has made the Prophet ﷺ rich through the Qur'an beyond what is in people's hands. The one who does not count himself rich by the Qur'an he holds, until his gaze rises toward the world's ornaments while he has knowledge of his Lord, is the one he means by not of us.",
            "bn": "এরপর তাবারী একটি উক্তি উদ্ধৃত করেন: যাকে কুরআন দেওয়া হয়েছে, সে যদি মনে করে অন্য কাউকে তার চেয়ে ভালো কিছু দেওয়া হয়েছে, তবে সে ছোটকে বড় বানাল আর বড়কে ছোট। কুরতুবী একই কথা বলেন নিজের ভাষায়। আল্লাহ নবী ﷺ-কে কুরআন দিয়ে মানুষের হাতে যা আছে তা থেকে অমুখাপেক্ষী করেছেন। কাছে কুরআন থাকতেও যে নিজেকে তা দিয়ে ধনী মনে করে না, রবের পরিচয় জেনেও যার দৃষ্টি দুনিয়ার চাকচিক্যের দিকে উঠে যায়, কুরতুবীর মতে 'আমাদের দলভুক্ত নয়' কথাটি তার সম্পর্কেই।"
          },
          {
            "en": "That phrase comes from a hadith. At-Tabari, al-Qurtubi, al-Baghawi and Ibn Kathir all report that Sufyan ibn Uyaynah read it through this verse, taking yataghanna to mean being made free of need. Sahih al-Bukhari 7527 has it from Abu Hurayrah, in this translation: \"Whoever does not recite Qur'an in a nice voice is not from us,\" and others added, \"to recite it aloud.\" Al-Bukhari placed it in his Sahih. Al-Qurtubi adopts Ibn Uyaynah's reading. Ibn Kathir calls it a sound interpretation in itself, but not what the hadith intends. The two are left as they stand.",
            "bn": "কথাটি একটি হাদিসের। তাবারী, কুরতুবী, বাগাভী ও ইবন কাসীর সবাই জানান, সুফিয়ান ইবন উয়াইনা হাদিসটিকে এই আয়াতের আলোয় পড়তেন। ইয়াতাগান্না শব্দের অর্থ তিনি নিতেন অভাবমুক্ত হওয়া। সহীহ বুখারীর ৭৫২৭ নম্বরে আবু হুরায়রা (রাঃ) থেকে তা আছে, অনুবাদে: \"যে সুন্দর কণ্ঠে কুরআন পড়ে না, সে আমাদের দলভুক্ত নয়,\" আর অন্যরা যোগ করেছেন, \"তা উচ্চস্বরে পড়া।\" বুখারী একে তাঁর সহীহ গ্রন্থে রেখেছেন। কুরতুবী ইবন উয়াইনার ব্যাখ্যাই গ্রহণ করেন। ইবন কাসীর বলেন, ব্যাখ্যাটি নিজে সঠিক, তবে হাদিসের উদ্দেশ্য এটা নয়। দুটি মতই যেমন আছে তেমন রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Grief Over What, Exactly",
          "bn": "দুঃখটা আসলে কীসের"
        },
        "p": [
          {
            "en": "Wa la tahzan 'alayhim: and do not grieve over them. Over what, the commentators do not agree. One line keeps the grief tied to the wealth. At-Tabari reads it as: do not grieve over what they were given to enjoy and had hastened to them, for yours in the Hereafter is better. Al-Baghawi reads it as: do not be distressed at what you missed of sharing their world with them. Al-Qurtubi lists it as one view, under it is said.",
            "bn": "ওয়া লা তাহযান আলাইহিম: আর তাদের জন্য দুঃখ কোরো না। কীসের দুঃখ, তা নিয়ে তাফসীরকারেরা একমত নন। একটি ধারা দুঃখটাকে সম্পদের সঙ্গেই বেঁধে রাখে। তাবারীর পাঠে এর অর্থ: তাদের যা ভোগ করতে দেওয়া হয়েছে, যা তারা দুনিয়াতেই আগাম পেয়ে গেছে, তার জন্য দুঃখ কোরো না, কারণ আখিরাতে তোমার জন্য যা আছে তা আরও ভালো। বাগাভীর পাঠে: দুনিয়াতে তাদের সঙ্গে ভাগ বসাতে না পারায় যা হাতছাড়া হয়েছে, তার জন্য মন খারাপ কোরো না। কুরতুবী 'বলা হয়' বলে একে কয়েকটি মতের একটি হিসেবে উল্লেখ করেন।"
          },
          {
            "en": "The other line turns the grief toward the people themselves. The Muyassar: do not grieve over their disbelief. Al-Qurtubi's first reading: do not grieve over the idolaters if they do not believe; and a third: do not grieve over them if they end in punishment. The abridged English Ibn Kathir: do not upset yourself with regret for their rejection of you. As-Sa'di reads it this way too, and adds that in the believers the Prophet ﷺ has the best replacement and the finest compensation. One reading forbids the grief of missing out, the other the grief of a caller refused. Both are kept.",
            "bn": "অন্য ধারাটি দুঃখকে ফিরিয়ে দেয় মানুষগুলোর দিকেই। মুয়াসসার বলে: তাদের কুফরির জন্য দুঃখ কোরো না। কুরতুবীর প্রথম ব্যাখ্যা: মুশরিকরা ঈমান না আনলে তাদের জন্য দুঃখ কোরো না। তাঁর তৃতীয় ব্যাখ্যা: তারা আযাবের দিকে গেলে তাদের জন্য দুঃখ কোরো না। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ বলে: তারা তোমাকে প্রত্যাখ্যান করেছে বলে আক্ষেপে নিজেকে কষ্ট দিয়ো না। সা'দীও এভাবেই পড়েন, আর যোগ করেন যে মুমিনদের মধ্যেই নবী ﷺ-এর জন্য আছে সবচেয়ে ভালো বদল, সবচেয়ে উত্তম প্রতিদান। একটি পাঠ নিষেধ করে বঞ্চিত হওয়ার দুঃখ, অন্যটি প্রত্যাখ্যাত দাঈর দুঃখ। দুটিই রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "A Bird Over Its Chick",
          "bn": "ছানার ওপর পাখির ডানা"
        },
        "p": [
          {
            "en": "Wa-khfid janahaka lil-mu'minin: and lower your wing to the believers. At-Tabari gives the plain sense: be soft toward those who believed in you and followed you and your word, bring them near, do not be harsh with them or rough. Allah, he says, is commanding him to gentleness with the believers. Al-Qurtubi gives the image behind it. When a bird gathers its chick to itself, it spreads its wing and then closes it over the chick, and this was made a description of a person drawing his followers close.",
            "bn": "ওয়াখফিদ জানাহাকা লিল মু'মিনীন: আর মুমিনদের জন্য তোমার ডানা নামিয়ে দাও। তাবারী সোজা অর্থটা দেন: যারা তোমার ওপর ঈমান এনেছে, তোমাকে আর তোমার কথাকে মেনে চলেছে, তাদের প্রতি নরম হও। তাদের কাছে টেনে নাও, তাদের সঙ্গে রূঢ় বা কঠোর হয়ো না। তাঁর ভাষায়, আল্লাহ এখানে মুমিনদের প্রতি কোমলতার হুকুম দিচ্ছেন। কুরতুবী শব্দের পেছনের ছবিটা দেখান। পাখি যখন ছানাকে নিজের কাছে টানে, ডানা মেলে দিয়ে তারপর ছানার ওপর গুটিয়ে আনে। মানুষ যখন অনুসারীদের কাছে টেনে নেয়, তার বর্ণনায় এই ছবিটাই ব্যবহার হয়েছে।"
          },
          {
            "en": "At-Tabari, al-Qurtubi and al-Baghawi all add that a person's two wings are his two sides, and at-Tabari and al-Qurtubi point to 20:22, where Musa (AS) is told to press his hand to his side. Al-Qurtubi notes that a man is called lowered of wing when he is calm and dignified, and quotes a line of verse in which a leader stretches his wing over a sick brother, glossing it as humility and softness. As-Sa'di says: soften your side toward them and make your character beautiful for them, out of love, honour and warmth.",
            "bn": "তাবারী, কুরতুবী ও বাগাভী তিনজনেই যোগ করেন, মানুষের দুই ডানা মানে তার দুই পাশ। তাবারী ও কুরতুবী দেখান ২০:২২ আয়াত, যেখানে মূসা (আঃ)-কে বলা হয়েছে হাত পাশে চেপে ধরতে। কুরতুবী বলেন, কাউকে ডানা-নামানো মানুষ বলা হয় যখন সে শান্ত, ধীরস্থির। তিনি একটি কবিতার চরণও আনেন, যেখানে এক নেতা অসুস্থ ভাইয়ের ওপর ডানা মেলে দেয়। তাঁর ব্যাখ্যায় এর অর্থ বিনয় আর কোমলতা। সা'দী বলেন: তাদের প্রতি তোমার পাশ নরম করো, তাদের সঙ্গে আচরণ সুন্দর করো, ভালোবাসা, সম্মান আর আন্তরিকতা নিয়ে।"
          },
          {
            "en": "The Muyassar says simply: be humble toward the believers. The abridged English Ibn Kathir sets 26:215 beside it, lower your wing to the believers who follow you, and 9:128, which describes the Messenger as grieved by what burdens them, eager for them, kind and merciful. Read in its place, the verse moves the Prophet's attention from what others enjoy to the people already at his side. As-Sa'di's best replacement is the hinge between the second command and the third.",
            "bn": "মুয়াসসার সোজাসুজি বলে: মুমিনদের প্রতি বিনয়ী হও। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ পাশে রাখে ২৬:২১৫ আয়াত, যেখানে বলা হয়েছে যে মুমিনরা তোমার অনুসরণ করে তাদের জন্য ডানা নামিয়ে দাও। সঙ্গে রাখে ৯:১২৮ আয়াত, যেখানে রাসূলের বর্ণনা: তাদের কষ্ট তাঁর কাছে ভারী, তিনি তাদের কল্যাণের জন্য ব্যাকুল, দয়ালু ও মেহেরবান। নিজের জায়গায় রেখে পড়লে দেখা যায়, আয়াতটি নবী ﷺ-এর মনোযোগ অন্যের ভোগ থেকে সরিয়ে আনে পাশে থাকা মানুষগুলোর দিকে। মুমিনরাই সবচেয়ে ভালো বদল, সা'দীর এই কথাটিই আয়াতের দ্বিতীয় আর তৃতীয় হুকুমের মাঝখানের সেতু।"
          }
        ]
      },
      {
        "h": {
          "en": "Look Toward Those Below",
          "bn": "নিচের দিকে তাকান"
        },
        "p": [
          {
            "en": "Al-Baghawi attaches a hadith to this verse with his own chain, running through Waki' and al-A'mash to Abu Salih and Abu Hurayrah. Sahih Muslim 2963 carries it through the same line, from Waki' and Abu Mu'awiya from al-A'mash, and in this translation reads whole: \"Look at those who stand at a lower level than you but don't look at those who stand at a higher level than you, for that is better-suited that you do not disparage Allah's favors.\" Muslim placed it in his Sahih.",
            "bn": "বাগাভী নিজের সনদে এই আয়াতের সঙ্গে একটি হাদিস জুড়ে দেন। সনদটি ওয়াকী ও আ'মাশ হয়ে পৌঁছেছে আবু সালিহ ও আবু হুরায়রা (রাঃ) পর্যন্ত। সহীহ মুসলিমের ২৯৬৩ নম্বরে হাদিসটি আছে একই ধারায়, ওয়াকী ও আবু মুআবিয়া থেকে, তাঁরা আ'মাশ থেকে। অনুবাদে পুরো হাদিসটি এই: \"তোমাদের চেয়ে যারা নিচে আছে তাদের দিকে তাকাও, আর যারা তোমাদের ওপরে আছে তাদের দিকে তাকিয়ো না। কারণ আল্লাহর নিয়ামতকে তুচ্ছ না ভাবার জন্য এটাই বেশি উপযোগী।\" ইমাম মুসলিম একে তাঁর সহীহ গ্রন্থে রেখেছেন।"
          },
          {
            "en": "Notice what the hadith protects. It does not ask anyone to look down on those with less. It asks the eye to look at them so that the heart stops despising what Allah has already given. That is the same work 15:88 does with 15:87 before it: know the gift, then stop measuring it against someone else's. Al-Baghawi also carries a second report, through Ibn al-Mubarak, against envying a sinner his blessing; unconfirmed in the collections checked, it is not quoted.",
            "bn": "হাদিসটি কী রক্ষা করে, খেয়াল করুন। যাদের কম আছে, তাদের ছোট চোখে দেখতে এখানে বলা হয়নি। বলা হয়েছে তাদের দিকে তাকাতে, যাতে আল্লাহ আগেই যা দিয়েছেন, অন্তর তাকে তুচ্ছ ভাবা বন্ধ করে। ১৫:৮৭ আয়াতের পর ১৫:৮৮ আয়াতও একই কাজ করে: আগে দানটা চেনো, তারপর অন্যের দানের সঙ্গে মাপামাপি থামাও। বাগাভী ইবনুল মুবারকের সূত্রে আরেকটি বর্ণনাও আনেন, যাতে গুনাহগারের নিয়ামত দেখে ঈর্ষা করতে নিষেধ আছে। এখানে যাচাই করা হাদিসগ্রন্থগুলোতে সেটি নিশ্চিত হয়নি, তাই উদ্ধৃত করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Gaze, Not a Grudge",
          "bn": "দৃষ্টির কথা, বিদ্বেষের নয়"
        },
        "p": [
          {
            "en": "Al-Qurtubi says the verse calls for restraint from constantly craving the world's goods and for turning to worshipping the Lord. Then he stops the reading from going too far. There is no monasticism in the religion of Muhammad ﷺ, he writes; Allah laid down an easy, upright way, free of hardship and light on people, which takes from human nature its appetites and returns to Allah with a sound heart. So the verse does not declare wealth evil, and it does not declare the wealthy contemptible.",
            "bn": "কুরতুবী বলেন, আয়াতটি দুনিয়ার সম্পদের জন্য সারাক্ষণ লালায়িত থাকা থেকে বিরত থাকতে বলে, আর বলে রবের ইবাদতে মন দিতে। তারপর তিনি ব্যাখ্যাটিকে বাড়াবাড়িতে যেতে দেন না। তিনি লেখেন, মুহাম্মাদ ﷺ-এর দ্বীনে বৈরাগ্য নেই। আল্লাহ দিয়েছেন সহজ, সরল পথ, যাতে কষ্টের বোঝা নেই, মানুষের জন্য তা হালকা। মানুষ তার স্বভাবের চাহিদা থেকে নেয়, আবার সুস্থ অন্তর নিয়ে আল্লাহর কাছে ফেরে। তাই এই আয়াত সম্পদকে মন্দ বলে না, ধনীদেরও তুচ্ছ বলে না।"
          },
          {
            "en": "This needs saying plainly. The verse describes particular people of the Prophet's time, the wealthy who did not believe, and commands the Prophet ﷺ about his own eyes and his own grief. It speaks only of what it names and licenses nothing against any living person or community: no contempt for the rich, no suspicion of anyone who has more, no coldness toward those who do not share one's faith. Ibn Abbas's reading makes the same point. What is forbidden is the wish inside the one who watches, not anything in the one who is watched.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি নবী ﷺ-এর সময়ের নির্দিষ্ট কিছু মানুষের কথা বলে, যারা ধনী ছিল কিন্তু ঈমান আনেনি। আর হুকুম দেয় নবী ﷺ-কে, তাঁর নিজের চোখ ও নিজের দুঃখ নিয়ে। আয়াত যা বর্ণনা করে, তা-ই বর্ণনা করে। আজকের কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। ধনীদের তুচ্ছ করার অনুমতি নেই, যার বেশি আছে তাকে সন্দেহ করার অনুমতি নেই, ভিন্ন বিশ্বাসের মানুষের প্রতি রূঢ় হওয়ারও না। ইবন আব্বাস (রাঃ)-এর ব্যাখ্যাও একই কথা বলে। নিষেধ তার ভেতরের কামনায়, যে তাকিয়ে থাকে। যার দিকে তাকানো হয়, তার কোনো কিছুতে নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Turning the Energy Homeward",
          "bn": "শক্তিটা ঘরের দিকে ফেরানো"
        },
        "p": [
          {
            "en": "What follows is reflection, not commentary. The stretched eye is easier than ever to practise. A screen puts other people's homes, holidays and incomes in front of us all day, and comparison rarely feels like a sin while it is happening. It feels like noticing. Yet it quietly spends something. The heart that keeps an account of what others enjoy has less left over for what it was given, and often less patience for the people who share its table.",
            "bn": "এখান থেকে যা বলা হচ্ছে তা ভাবনা, তাফসীর নয়। চোখ বাড়িয়ে দেওয়ার অভ্যাস আজ আগের যেকোনো সময়ের চেয়ে সহজ। মোবাইলের পর্দা সারাদিন অন্যের বাড়ি, ছুটি আর আয় চোখের সামনে এনে রাখে। তুলনা করার সময় সেটাকে গুনাহ মনে হয় না, মনে হয় শুধু দেখছি। তবু চুপিচুপি কিছু একটা খরচ হয়ে যায়। অন্যের ভোগের হিসাব রাখতে রাখতে অন্তরের কাছে নিজের পাওয়া জিনিসের জন্য কম জায়গা থাকে। যারা একই দস্তরখানে বসে, তাদের জন্য সবরও প্রায়ই কমে আসে।"
          },
          {
            "en": "The verse does not only forbid; it redirects. The same attention that was stretching outward is sent back to the believers close by, as a lowered wing: a softer word, a nearer seat, a harshness not spoken. Before the command, it names the gift, so the reader has something to be rich in. The practical test may be simple. When I notice myself measuring, I can name one thing I was given, and then turn to one person near me and be gentle with them.",
            "bn": "আয়াতটি শুধু নিষেধ করে না, পথও ঘুরিয়ে দেয়। যে মনোযোগ বাইরের দিকে ছুটছিল, তাকে ফিরিয়ে আনে কাছের মুমিনদের দিকে, নামানো ডানার রূপে। একটু নরম কথা, একটু কাছে বসা, মুখে আসা কঠিন কথাটা না বলা। হুকুমের আগেই আয়াত দানের কথা মনে করিয়ে দিয়েছে, যাতে পাঠকের কাছে ধনী হওয়ার মতো কিছু থাকে। হয়তো বাস্তব পরীক্ষাটা সহজ। যখন টের পাই আমি মাপামাপি করছি, তখন নিজের পাওয়া একটা জিনিসের নাম নিতে পারি। তারপর কাছের একজন মানুষের দিকে ফিরে তার সঙ্গে নরম হতে পারি।"
          }
        ]
      }
    ]
  },
  "15:99": {
    "sections": [
      {
        "h": {
          "en": "The Surah's Last Word",
          "bn": "সূরার শেষ কথা"
        },
        "p": [
          {
            "en": "Surah al-Hijr ends with five Arabic words: and worship your Lord until the certainty comes to you. They are the third of three instructions given in a row to a man under strain. 15:97 states the problem — We already know that your breast is constrained by what they say. 15:98 gives the first two remedies: so glorify your Lord with praise, and be of those who prostrate. Then this verse extends the remedy past the crisis and across the whole of a life.",
            "bn": "সূরা আল-হিজর শেষ হয় আরবিতে মাত্র পাঁচটি শব্দে: আর তোমার রবের ইবাদত করতে থাকো, যতক্ষণ না তোমার কাছে সুনিশ্চিত বিষয়টি আসে। চাপের মধ্যে থাকা একজন মানুষকে পরপর তিনটি নির্দেশ দেওয়া হয়েছে, এটি তার তৃতীয়টি। ১৫:৯৭ আয়াত সমস্যাটা বলে দেয়: আমি তো জানিই, তারা যা বলে তাতে তোমার বুক সংকুচিত হয়। ১৫:৯৮ আয়াত প্রথম দুটি প্রতিকার দেয়: কাজেই তোমার রবের প্রশংসাসহ তাসবীহ পড়ো, আর সিজদাকারীদের অন্তর্ভুক্ত হও। তারপর এই আয়াত প্রতিকারটাকে সংকটের সময় পার করে সারা জীবনে ছড়িয়ে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Yaqin Is Death",
          "bn": "'আল-ইয়াকীন' মানে মৃত্যু"
        },
        "p": [
          {
            "en": "The mufassirun are agreed that al-yaqin here means death, and the Quran settles the question with its own usage. In 74:46-47 the people of the Fire recount their old habits and say that they used to deny the Day of Recompense until al-yaqin came to them. They are speaking from after it, so what arrived was death. The verb in our verse points the same way: ya'tiyaka, it comes to you — an arrival from outside, not a state a person reaches by his own effort.",
            "bn": "মুফাসসিরগণ একমত, এখানে 'আল-ইয়াকীন' মানে মৃত্যু। আর কুরআন নিজের ব্যবহার দিয়েই প্রশ্নটার মীমাংসা করে দেয়। ৭৪:৪৬-৪৭ আয়াতে জাহান্নামীরা নিজেদের পুরোনো অভ্যাসের কথা বলতে গিয়ে জানায়, তারা প্রতিদান দিবসকে অস্বীকার করত, যতক্ষণ না তাদের কাছে 'আল-ইয়াকীন' এসে গেল। তারা কথা বলছে সেটা পার হয়ে আসার পর, কাজেই যা এসেছিল তা মৃত্যু। আমাদের আয়াতের ক্রিয়াটিও একই দিকে ইশারা করে: 'ইয়া'তিয়াকা', তোমার কাছে আসে। অর্থাৎ বাইরে থেকে এসে পড়া কিছু, নিজের চেষ্টায় পৌঁছানো কোনো অবস্থা নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Other Reading Is Rejected",
          "bn": "অন্য পাঠটি কেন প্রত্যাখ্যাত"
        },
        "p": [
          {
            "en": "The point is doctrinally serious, because a misreading has been built on it. If al-yaqin meant certainty in the sense of spiritual attainment, then hatta, until, would make worship expire at the moment a person believed he had arrived, and prayer would become a ladder to be kicked away. The scholars reject that reading outright. Nothing in the Book or the Sunnah exempts anyone from the obligations of worship at any station; obligation ends with life, and with nothing else.",
            "bn": "বিষয়টি আকীদার দিক থেকে গুরুতর, কারণ এর উপর একটি ভুল ব্যাখ্যা দাঁড় করানো হয়েছে। 'আল-ইয়াকীন' যদি আধ্যাত্মিক কোনো স্তরে পৌঁছানোর অর্থে 'নিশ্চয়তা' হতো, তবে 'হাত্তা', অর্থাৎ 'যতক্ষণ না', শব্দের কারণে ইবাদতের মেয়াদ ফুরিয়ে যেত ঠিক সেই মুহূর্তে, যখন কেউ ভাবত সে পৌঁছে গেছে। তখন নামাজ হয়ে যেত এমন এক সিঁড়ি, যা বেয়ে উঠে লাথি মেরে ফেলে দেওয়া যায়। আলেমরা এই ব্যাখ্যা সরাসরি নাকচ করেন। কিতাব আর সুন্নাহর কোথাও কোনো স্তরে পৌঁছালে কাউকে ইবাদতের দায় থেকে ছুটি দেওয়া হয়নি। এই দায় শেষ হয় জীবন শেষ হলে, আর কিছুতে নয়।"
          },
          {
            "en": "The refutation is also biographical. The most certain of creation was the Prophet ﷺ, who saw what nobody else saw and was told that his sins were forgiven, and he did not reduce his worship by a single prayer. Al-Bukhari narrates from Aisha (RA) that during the illness of which he died he directed that Abu Bakr (RA) should lead the people in prayer; the ordering of the prayer was among his concerns while he was dying. Certainty deepened the worship. It never replaced it.",
            "bn": "এর খণ্ডন নবীজীবন থেকেও আসে। সৃষ্টির মধ্যে সবচেয়ে দৃঢ় ইয়াকীন ছিল নবী ﷺ-এর। তিনি এমন কিছু দেখেছেন, যা আর কেউ দেখেনি। তাঁকে জানিয়ে দেওয়া হয়েছিল যে তাঁর গুনাহ মাফ করা হয়েছে। তবু তিনি নিজের ইবাদত থেকে এক ওয়াক্ত নামাজও কমাননি। ইমাম বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, যে অসুখে তাঁর ইন্তেকাল হয়, সেই অসুখের সময় তিনি নির্দেশ দেন, আবু বকর (রাঃ) লোকদের নিয়ে নামাজ পড়াবেন। মৃত্যুশয্যাতেও নামাজের ব্যবস্থা নিয়ে তিনি চিন্তিত ছিলেন। ইয়াকীন ইবাদতকে গভীর করেছে, কখনো ইবাদতের জায়গা নেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Worship Your Lord",
          "bn": "তোমার রবের ইবাদত করো"
        },
        "p": [
          {
            "en": "The command says rabbaka, your Lord — the One who has raised you, provided for you and corrected you — rather than a name of majesty alone. And 'ibadah is wider than the rituals. The scholars define it as every word and deed, inward and outward, that Allah loves and is pleased with, which is why a lifetime of it is a liveable instruction rather than a crushing one. 51:56 makes that same breadth the stated purpose of the creation of jinn and mankind.",
            "bn": "নির্দেশে বলা হয়েছে 'রাব্বাকা', তোমার রব। শুধু মহিমার কোনো নাম নয়, বরং সেই রব, যিনি তোমাকে লালন-পালন করেছেন, রিযিক দিয়েছেন, শুধরে দিয়েছেন। আর 'ইবাদত' শুধু আনুষ্ঠানিক আমলে সীমাবদ্ধ নয়। আলেমরা এর সংজ্ঞা দেন এভাবে: প্রকাশ্য ও গোপন প্রতিটি কথা ও কাজ, যা আল্লাহ ভালোবাসেন এবং যাতে তিনি সন্তুষ্ট। এ কারণেই সারা জীবনের এই হুকুম ভারে পিষে ফেলে না, বরং পালন করা যায়। ৫১:৫৬ আয়াত এই বিস্তৃত ইবাদতকেই জিন ও মানুষ সৃষ্টির ঘোষিত উদ্দেশ্য বলে।"
          },
          {
            "en": "6:162 shows what that breadth looks like when a believer says it about himself: my prayer, my rites, my living and my dying are for Allah, Lord of the worlds. Living is placed in the same list as prayer. Under that definition, the years in which a person can no longer stand for prayer are not years off; illness, old age and a failing memory still leave dhikr, du'a, patience and intention, all of which the verse's own word covers.",
            "bn": "৬:১৬২ আয়াত দেখায়, একজন মুমিন যখন নিজের সম্পর্কে কথাটা বলেন, তখন এই বিস্তার কেমন দাঁড়ায়: আমার নামাজ, আমার কুরবানি, আমার জীবন ও আমার মৃত্যু, সবই বিশ্বজগতের রব আল্লাহর জন্য। বেঁচে থাকাকে নামাজের সঙ্গে একই তালিকায় রাখা হয়েছে। এই সংজ্ঞা ধরলে, যে বছরগুলোতে মানুষ আর দাঁড়িয়ে নামাজ পড়তে পারে না, সেগুলো ছুটির বছর নয়। অসুখ, বার্ধক্য আর ক্ষীণ হয়ে আসা স্মৃতির মধ্যেও থেকে যায় জিকির, দুআ, সবর আর নিয়ত। আয়াতের নিজের শব্দটিই এর সবকিছুকে ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Deadline Nobody Misses",
          "bn": "যে সময়সীমা কেউ এড়ায় না"
        },
        "p": [
          {
            "en": "There is a mercy in the wording that is easy to miss. The command has a terminus. It is not endless; it runs to a fixed point, and that point arrives on its own without being sought or scheduled by anyone. Read against 3:102, which tells the believers not to die except as Muslims, the two verses meet. Since the hour is not ours to choose, the only reliable way to end well is to be found doing this continuously.",
            "bn": "শব্দগুলোর ভেতরে এমন এক রহমত আছে, যা সহজেই চোখ এড়িয়ে যায়। হুকুমটার একটা শেষ সীমা আছে। এটা অনন্তকাল চলে না, চলে একটা নির্দিষ্ট জায়গা পর্যন্ত। আর সেই জায়গাটা কেউ খুঁজে আনে না, কেউ দিনক্ষণ ঠিক করে না, নিজে থেকেই এসে যায়। ৩:১০২ আয়াতের পাশে রেখে পড়ুন, যেখানে মুমিনদের বলা হয়েছে মুসলিম না হয়ে মৃত্যুবরণ না করতে। তখন দুই আয়াত এক জায়গায় এসে মেলে। মৃত্যুর সময়টা যেহেতু আমরা বেছে নিতে পারি না, তাই ভালোভাবে শেষ করার একমাত্র নিশ্চিত উপায় হলো সব সময় এই কাজের মধ্যেই থাকা, যাতে মৃত্যু এসে এ অবস্থাতেই পায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing What You Can Carry",
          "bn": "যা শেষ পর্যন্ত বইতে পারবেন"
        },
        "p": [
          {
            "en": "The practical question this verse forces is not how much a person can do this month, but what he will still be doing in thirty years. That reframes ambition downward and consistency upward. A fixed daily portion of Quran that survives a bad week, the obligatory prayers guarded at their times, one charity that does not depend on enthusiasm — these are the deeds shaped for a command that carries no expiry date.",
            "bn": "এই আয়াত যে বাস্তব প্রশ্নের সামনে দাঁড় করায়, তা এ মাসে কেউ কতটা করতে পারে সেটা নয়। প্রশ্ন হলো, ত্রিশ বছর পরেও সে কোন আমলটা করে যাবে। এতে উচ্চাকাঙ্ক্ষার মাপ একটু নামে, আর ধারাবাহিকতার দাম বাড়ে। প্রতিদিন কুরআনের একটা নির্দিষ্ট অংশ, যা খারাপ সপ্তাহেও বাদ পড়ে না। ফরজ নামাজগুলো সময়মতো আদায়ের যত্ন। এমন একটা দান, যা উৎসাহ থাকা-না-থাকার উপর নির্ভর করে না। মেয়াদ ফুরায় না এমন হুকুমের জন্য এগুলোই মানানসই আমল।"
          },
          {
            "en": "And the surah's own arrangement is worth keeping. When the chest tightened from what people were saying, the answer given was not withdrawal but tasbih, prostration and continued worship. Difficulty is not a reason to suspend the practice; in this passage it is the occasion for it. Whoever holds to the deed on the days it feels useless has understood the word until in the way this verse meant it.",
            "bn": "সূরার নিজের বিন্যাসটাও মনে রাখার মতো। মানুষের কথায় যখন বুক সংকুচিত হয়ে আসছিল, তখন জবাব হিসেবে গুটিয়ে যেতে বলা হয়নি। বলা হয়েছে তাসবীহ পড়তে, সিজদা করতে, আর ইবাদত চালিয়ে যেতে। কষ্ট এলে আমল থামিয়ে রাখার কারণ নেই। এই অংশে কষ্টই বরং আমলের উপলক্ষ। যে দিনগুলোতে আমলকে নিষ্ফল মনে হয়, সেদিনও যিনি আমল ধরে রাখেন, তিনিই 'যতক্ষণ না' কথাটা বুঝেছেন ঠিক সেভাবে, যেভাবে এই আয়াত বলেছে।"
          }
        ]
      }
    ]
  }
});
