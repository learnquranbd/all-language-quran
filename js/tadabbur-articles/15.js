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
          "bn": "‘ছেড়ে দাও’ বলার ঠিক পরে"
        },
        "p": [
          {
            "en": "Wa-ma ahlakna min qaryatin illa wa-laha kitabun ma'lum: and We did not destroy any town but that it had a known decree. The verse follows straight on from 15:3, where the Prophet ﷺ is told to leave the deniers to eat, enjoy themselves and be diverted by hope, for they are going to know. A listener who has just heard that command might wonder why such people are left alone at all. Read in sequence, this verse answers before the question is asked: the leaving has an end, and the end is written.",
            "bn": "ওয়ামা আহলাকনা মিন কারইয়াতিন ইল্লা ওয়ালাহা কিতাবুম মা'লূম: আমি যে জনপদই ধ্বংস করেছি, তার জন্য ছিল এক জানা লিখন। আয়াতটি এসেছে ১৫:৩ আয়াতের ঠিক পরে। সেখানে নবী ﷺ-কে বলা হয়েছে অস্বীকারকারীদের ছেড়ে দিতে, তারা খাক, ভোগ করুক, আশা তাদের ভুলিয়ে রাখুক, শীঘ্রই তারা জানতে পারবে। এ নির্দেশ শুনে কারও মনে প্রশ্ন জাগতে পারে, এমন লোকদের ছেড়ে রাখা হচ্ছে কেন? পরপর পড়লে দেখা যায়, প্রশ্নটা ওঠার আগেই এ আয়াত জবাব দিয়ে দেয়। এই ছেড়ে রাখার একটা শেষ আছে, আর সেই শেষটা লেখা।"
          },
          {
            "en": "The Muyassar reads the link the same way, from the side of the deniers' demand. When they ask for the punishment to come down on them, in denial of you, O Messenger, then We do not destroy a town except that its destruction has a decreed term; We do not destroy them until they reach it, like those who went before them. The sentence is built as a denial with an exception, ma and then illa, so it leaves no destroyed town outside the rule it states.",
            "bn": "মুয়াসসারও সংযোগটা এভাবেই পড়ে, তবে অস্বীকারকারীদের দাবির দিক থেকে। হে রাসূল, আপনাকে মিথ্যা প্রতিপন্ন করে তারা যখন তাদের উপর শাস্তি নামিয়ে আনার দাবি করে, তখন আমি কোনো জনপদ ধ্বংস করি না, যদি না তার ধ্বংসের জন্য এক নির্ধারিত মেয়াদ থাকে। সেই মেয়াদে না পৌঁছানো পর্যন্ত আমি তাদের ধ্বংস করি না, যেমনটা করেছি তাদের আগের লোকদের বেলায়। বাক্যটি গড়া হয়েছে না-বাচক কথা আর তার ব্যতিক্রম দিয়ে, প্রথমে মা, তারপর ইল্লা। ফলে ধ্বংস হওয়া কোনো জনপদই এ নিয়মের বাইরে থাকে না।"
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
            "bn": "তাবারী ও বাগাভী দুজনেই কারইয়া শব্দের আগে একটা শব্দ উহ্য ধরে পড়েন: মিন আহলি কারইয়াতিন, অর্থাৎ কোনো জনপদের অধিবাসীদের মধ্য থেকে। আয়াতে যা ধ্বংস হয়, তা জনপদের মানুষ, তার ইট-পাথর নয়। সময়টাও তাবারী বেঁধে দেন। তিনি বলেন সেই জনপদগুলোর কথা, যাদের অধিবাসীদের আমি অতীতে ধ্বংস করেছি, ফীমা মাদা। আহলাকনা ক্রিয়াটি অতীতকালের, আর তাফসীরকারেরা তাকে অতীতেই রাখেন। আয়াতটি বিগত জনপদগুলোর দিকে তাকায়। ভবিষ্যতের কোনো জনপদের তালিকা সে বানায় না।"
          },
          {
            "en": "As-Sa'di attaches a description to the town before the exception arrives: it was a town deserving of the punishment, kanat mustahiqqatan lil-'adhab. His gloss does not let a reader picture a town seized at random and then given a date to explain it. The deserving comes first, the written term after. The Qur'an says the same in its own words at 28:59: your Lord would not destroy the towns until He had sent to their mother town a messenger reciting Our verses, and would not destroy them except while their people were wrongdoers.",
            "bn": "ব্যতিক্রমের কথা আসার আগেই সা'দী জনপদটির একটা পরিচয় জুড়ে দেন: সেটি ছিল শাস্তির যোগ্য জনপদ, কানাত মুস্তাহিক্কাতান লিল আযাব। তাঁর ব্যাখ্যায় এমন ছবি আঁকার সুযোগ থাকে না যে কোনো জনপদকে এলোমেলোভাবে ধরা হলো, তারপর ব্যাখ্যা হিসেবে একটা তারিখ বসিয়ে দেওয়া হলো। আগে যোগ্যতা, পরে লেখা মেয়াদ। কুরআন নিজেও ২৮:৫৯ আয়াতে একই কথা বলে: আপনার রব জনপদগুলোকে ধ্বংস করেন না, যতক্ষণ না তাদের কেন্দ্রীয় জনপদে এমন রাসূল পাঠান, যিনি তাদের কাছে আমার আয়াত তিলাওয়াত করেন। আর তিনি জনপদ ধ্বংস করেন কেবল তখনই, যখন তার অধিবাসীরা জালিম।"
          }
        ]
      },
      {
        "h": {
          "en": "A Writing Read as a Term",
          "bn": "লিখন, অর্থাৎ মেয়াদ"
        },
        "p": [
          {
            "en": "Kitabun ma'lum, a known writing. Every commentator fetched for this verse glosses the word the same way, as ajal, a term. At-Tabari: an appointed term and a known period, ajalun mu'aqqatun wa muddatun ma'rufa. Al-Baghawi: a term struck in advance, ajalun madrub, which does not come early; the punishment does not reach them until they reach it, and it is not put back from them. Al-Qurtubi adds where the writing is kept: an appointed term written for them in al-Lawh al-Mahfuz, the Preserved Tablet.",
            "bn": "কিতাবুম মা'লূম, এক জানা লিখন। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, সবগুলোই শব্দটির অর্থ করে একইভাবে: আজাল, অর্থাৎ মেয়াদ। তাবারী বলেন, নির্ধারিত মেয়াদ আর জানা এক সময়কাল, আজালুন মুআক্কাতুন ওয়া মুদ্দাতুন মা'রূফা। বাগাভী বলেন, আগে থেকে বেঁধে দেওয়া মেয়াদ, আজালুন মাদরূব, যা এগিয়ে আসে না। সেখানে না পৌঁছানো পর্যন্ত শাস্তি তাদের নাগাল পায় না, আবার তা পিছিয়েও যায় না। লিখনটা কোথায় রাখা, কুরতুবী সেটাও জানান: তাদের জন্য লাওহে মাহফূযে লেখা এক নির্ধারিত মেয়াদ।"
          },
          {
            "en": "The emphases differ slightly, without amounting to a dispute. At-Tabari's word mudda, a period, looks at the length of a town's time, the stretch it is given. As-Sa'di and the Muyassar look at its end: a term decreed for its destruction, muqaddarun li-ihlakiha in as-Sa'di's words. At-Tabari joins the two in his next clause: We do not destroy them until they reach it, and when they reach it We destroy them then. The span and its end turn out to be the same writing, read from its two sides.",
            "bn": "জোরের জায়গায় সামান্য পার্থক্য আছে, তবে তা মতভেদ পর্যন্ত যায় না। তাবারীর শব্দ মুদ্দা, অর্থাৎ সময়কাল। তাঁর নজর জনপদকে দেওয়া সময়ের দৈর্ঘ্যের দিকে। সা'দী ও মুয়াসসারের নজর সেই সময়ের শেষ বিন্দুতে: ধ্বংসের জন্য নির্ধারিত মেয়াদ, সা'দীর ভাষায় মুকাদ্দারুন লি-ইহলাকিহা। তাবারী পরের বাক্যেই দুটিকে এক করে দেন: সেখানে না পৌঁছানো পর্যন্ত আমি তাদের ধ্বংস করি না, আর পৌঁছালে তখনই ধ্বংস করি। সময়ের বিস্তার আর তার শেষ তাই একই লিখন, দুই দিক থেকে পড়া।"
          },
          {
            "en": "The word kitab has already appeared in this surah. 15:1 opens: these are the verses of the Book and a clear Qur'an. A few verses later the same word names the writing of a town's term. The surah does not comment on the echo, and no commentator fetched here draws it out, so it is worth noting only as it stands. Those addressed had a Book they could read aloud, and there was also a writing about them that none of them could read.",
            "bn": "কিতাব শব্দটি এ সূরায় আগেই এসেছে। ১৫:১ আয়াত শুরু হয় এভাবে: এগুলো কিতাবের আয়াত এবং সুস্পষ্ট কুরআন। কয়েক আয়াত পরে সেই একই শব্দ একটা জনপদের মেয়াদের লিখনকে বোঝায়। সূরা এ মিলের দিকে ইঙ্গিত করে না, আর এখানে দেখা কোনো তাফসীরও তা আলাদা করে তোলে না। তাই মিলটা যেমন আছে তেমনভাবেই লক্ষ করার মতো। যাদের সম্বোধন করা হচ্ছিল, তাদের সামনে ছিল পড়ে শোনানোর মতো এক কিতাব। আর তাদের নিয়েই ছিল আরেক লিখন, যা তাদের কেউ পড়তে পারত না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Proof Comes First",
          "bn": "আগে প্রমাণ, পরে মেয়াদ"
        },
        "p": [
          {
            "en": "Ibn Kathir names a condition the others leave unstated. Allah informs us, he says, that He never destroyed a town except after the proof had been established against it and its term had come to an end: ba'da qiyami al-hujjati 'alayha wa-intiha'i ajaliha. The abridged English of his tafsir renders the same pair: He never destroys a township until He has established evidences for it and its allotted time has ended. Two things are waited for, not a single thing: the argument delivered, and the time run out.",
            "bn": "অন্যরা যে শর্তটা মুখে আনেন না, ইবন কাসীর তা স্পষ্ট করে বলেন। তাঁর ভাষায়, আল্লাহ জানাচ্ছেন যে তিনি কোনো জনপদ ধ্বংস করেননি, যতক্ষণ না তার বিরুদ্ধে প্রমাণ প্রতিষ্ঠিত হয়েছে আর তার মেয়াদ ফুরিয়েছে: বা'দা কিয়ামিল হুজ্জাতি আলাইহা ওয়া ইনতিহাই আজালিহা। তাঁর তাফসীরের সংক্ষিপ্ত ইংরেজি সংস্করণও এই জোড়াটাই বহন করে: তিনি কোনো জনপদ ধ্বংস করেন না, যতক্ষণ না তার জন্য প্রমাণ প্রতিষ্ঠা করেন আর তার নির্ধারিত সময় শেষ হয়। অপেক্ষা একটি জিনিসের নয়, দুটি জিনিসের। যুক্তি পৌঁছে দেওয়া, আর সময় ফুরিয়ে যাওয়া।"
          },
          {
            "en": "The Qur'an states the first condition in its own words. 17:15 says: never would We punish until We sent a messenger. 28:59, quoted above, ties the destruction of towns to a messenger reciting the verses to them. Ibn Kathir's gloss therefore adds no new teaching; it reads 15:4 alongside the verses that already say this. The written term was never a trap laid for people who had not been told. By the time the term arrived, the message had arrived before it and had been answered with denial.",
            "bn": "প্রথম শর্তটা কুরআন নিজের ভাষাতেই বলে দিয়েছে। ১৭:১৫ আয়াতে আছে: রাসূল না পাঠানো পর্যন্ত আমি শাস্তি দিই না। ওপরে উদ্ধৃত ২৮:৫৯ আয়াত জনপদের ধ্বংসকে বেঁধে দেয় এমন রাসূলের সঙ্গে, যিনি তাদের কাছে আয়াত তিলাওয়াত করেন। কাজেই ইবন কাসীরের ব্যাখ্যা নতুন কোনো শিক্ষা যোগ করে না। তিনি ১৫:৪ আয়াতকে পড়েন সেই আয়াতগুলোর পাশে রেখে, যেগুলো কথাটা আগেই বলেছে। লেখা মেয়াদ কখনো অজানা মানুষের জন্য পাতা ফাঁদ ছিল না। মেয়াদ যখন এসেছে, বার্তা এসেছে তার আগেই, আর জবাবে পেয়েছে অস্বীকার।"
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
            "bn": "তাবারী আয়াতটিকে পড়েন নবী ﷺ-এর প্রতি তাঁর নিজের শহর সম্পর্কে বলা কথা হিসেবে, আর তা খোলাখুলিই বলেন। আপনি যে জনপদের মানুষ, সেই মক্কার অধিবাসীদের বেলাতেও তাই। তাদের লিখন তার মেয়াদে না পৌঁছানো পর্যন্ত আমি সেখানকার মুশরিকদের ধ্বংস করব না। কারণ আমার ফয়সালা হলো, কোনো জনপদের লোকদের আমি ধ্বংস করি না, যতক্ষণ না তাদের লিখন তার মেয়াদে পৌঁছায়। তাঁর পাঠে বিগত জনপদগুলো নজির, আর সম্বোধন নাযিলের সময়ের একটি নির্দিষ্ট শহরের প্রতি।"
          },
          {
            "en": "The abridged Ibn Kathir calls the passage a message and a warning to the people of Makkah, telling them to give up their shirk, their stubbornness and their disbelief. The Muyassar, as seen above, frames it as a reply to their demand that the punishment be brought on. In every text fetched for this verse, the application stops at the Makkah of the revelation. None of them carries it forward to later cities, and none offers a way of working out when any town's writing will fall due.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত সংস্করণ অংশটিকে বলে মক্কাবাসীদের প্রতি বার্তা ও সতর্কবাণী, যাতে তারা শিরক, হঠকারিতা আর কুফরি ছেড়ে দেয়। মুয়াসসার, যেমনটা আগে দেখা গেছে, একে দেখে শাস্তি ডেকে আনার দাবির জবাব হিসেবে। এ আয়াতের জন্য দেখা প্রতিটি তাফসীরে প্রয়োগ থেমে যায় নাযিলের সময়ের মক্কায়। কেউ তা পরবর্তী কোনো শহরে টেনে নেন না। কোনো জনপদের লিখন কবে পূর্ণ হবে, তা হিসাব করে বের করার কোনো পথও কেউ দেখান না।"
          },
          {
            "en": "The abridged Ibn Kathir covers 15:4 and 15:5 together, and goes on to say that when a nation's time has come He never delays it and never moves it forward. That is the ground of 15:5, and it is left to that verse's own page. Ma'arif al-Qur'an comments on 15:3 to 15:7 as a group, but its comment dwells on the long hope of 15:3 and says nothing particular to this verse, so it is not used here. No text fetched attaches a hadith to 15:4.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত সংস্করণ ১৫:৪ ও ১৫:৫ আয়াত একসঙ্গে আলোচনা করে। সেখানে আরও বলা হয়, কোনো জাতির সময় এসে গেলে তিনি তা পিছিয়েও দেন না, এগিয়েও আনেন না। এটা ১৫:৫ আয়াতের বিষয়, তাই সেটা রইল ওই আয়াতের নিজস্ব পাতার জন্য। মাআরিফুল কুরআন ১৫:৩ থেকে ১৫:৭ আয়াত একসঙ্গে আলোচনা করে। তবে তার আলোচনা ১৫:৩ আয়াতের দীর্ঘ আশা নিয়েই, এ আয়াতের নিজস্ব কোনো কথা তাতে নেই। তাই এখানে তা নেওয়া হয়নি। ১৫:৪ আয়াতের সঙ্গে কোনো হাদীস জুড়ে দেওয়া হয়েছে, এমন কিছু দেখা তাফসীরগুলোতে নেই।"
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
            "bn": "এখানে একটা সীমা স্পষ্ট করে বলা দরকার। আয়াতটি বিগত ধ্বংসপ্রাপ্ত জনপদগুলোর উপর আল্লাহর ফয়সালার বর্ণনা দেয়, ঠিক যেভাবে কুরআনের ভাষা আর তার তাফসীরকারেরা তা বর্ণনা করেন। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। ভূমিকম্প, বন্যা, যুদ্ধ বা বিধ্বস্ত কোনো শহরকে শাস্তি বলার অধিকার সে কাউকে দেয় না। সেখানে আটকে পড়া মানুষদের মেয়াদ পূর্ণ হয়েছে, এ কথা বলার অধিকারও দেয় না। কুরতুবীর ব্যাখ্যায় লিখনটা রাখা আছে লাওহে মাহফূযে, আর কোনো জীবিত মানুষ তা পড়েনি।"
          },
          {
            "en": "Even at-Tabari's application stays inside what was revealed. He speaks of the idolaters of Makkah in the Prophet's own lifetime, and he makes the timing Allah's decree, not a forecast anybody could make. As-Sa'di's description, a town deserving of the punishment, is a judgment the verse leaves with Allah; a person watching suffering from the outside has no access to it. When others are struck by calamity, what is asked of a believer is help and du'a for them, and a look at his own state.",
            "bn": "তাবারীর প্রয়োগও নাযিল হওয়া কথার সীমার ভেতরেই থাকে। তিনি বলেন নবী ﷺ-এর জীবদ্দশার মক্কার মুশরিকদের কথা। আর সময়টাকে তিনি রাখেন আল্লাহর ফয়সালা হিসেবে, এমন কোনো পূর্বাভাস হিসেবে নয় যা মানুষ করতে পারে। সা'দীর বর্ণনা, অর্থাৎ শাস্তির যোগ্য জনপদ, এমন এক বিচার যা আয়াতটি আল্লাহর হাতেই রেখে দেয়। বাইরে দাঁড়িয়ে কারও কষ্ট দেখা মানুষের সেখানে প্রবেশাধিকার নেই। অন্যরা বিপদে পড়লে মুমিনের কাছে চাওয়া হয় তাদের সাহায্য আর তাদের জন্য দোয়া, আর নিজের অবস্থার দিকে একবার তাকানো।"
          }
        ]
      },
      {
        "h": {
          "en": "Quiet Is Not Safety",
          "bn": "নীরবতা মানেই নিরাপত্তা নয়"
        },
        "p": [
          {
            "en": "Read with 15:3, the verse also exposes a common mistake. The deniers ate, enjoyed themselves and were diverted by hope, and nothing fell on them. The quiet looked like evidence that nothing ever would. The verse says the quiet was the term still running. Al-Baghawi's wording is exact: the punishment does not come to them until they reach it. The delay was neither forgetfulness nor approval. It was a written span with a known end, and those living inside it took its length for permanence.",
            "bn": "১৫:৩ আয়াতের সঙ্গে মিলিয়ে পড়লে এ আয়াত একটা চেনা ভুলও ধরিয়ে দেয়। অস্বীকারকারীরা খেয়েছে, ভোগ করেছে, আশায় ভুলে থেকেছে, অথচ তাদের উপর কিছু নেমে আসেনি। এ নীরবতাকে মনে হয়েছে প্রমাণ, যেন কখনো কিছুই আসবে না। আয়াতটি বলছে, নীরবতা মানে মেয়াদ তখনো চলছিল। বাগাভীর কথা একেবারে মাপা: সেখানে না পৌঁছানো পর্যন্ত শাস্তি তাদের কাছে আসে না। এ দেরি ভুলে যাওয়াও ছিল না, সম্মতিও ছিল না। ছিল জানা শেষসহ এক লেখা সময়কাল। আর যারা তার ভেতরে বাস করছিল, তারা তার দৈর্ঘ্যকে ভেবে নিয়েছিল চিরস্থায়িত্ব।"
          },
          {
            "en": "A few verses on, 15:8 gives the other edge of the same span: We do not send down the angels except with the truth, and they would not then be reprieved. The respite and its closing both sit inside this short passage. Between them lies the only time in which anything can still change. The passage opens, in 15:1, with a clear Qur'an placed in that time, not after it, which is itself a statement about what the time was for.",
            "bn": "কয়েক আয়াত পরে ১৫:৮ একই সময়কালের অন্য প্রান্তটা দেখায়: আমি ফেরেশতা নাযিল করি কেবল সত্যসহ, আর তখন তাদের আর অবকাশ দেওয়া হবে না। অবকাশ আর তার সমাপ্তি, দুটোই এই ছোট অংশটুকুর ভেতরে। এ দুয়ের মাঝখানেই সেই সময়, যখন এখনো কিছু বদলানো যায়। অংশটির শুরুতে, ১৫:১ আয়াতে, সুস্পষ্ট কুরআন রাখা হয়েছে সেই সময়ের ভেতরেই, তার পরে নয়। সময়টা কীসের জন্য ছিল, সে কথাও এতে বলা হয়ে যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "My Own Unread Date",
          "bn": "আমার না-পড়া তারিখ"
        },
        "p": [
          {
            "en": "The verse speaks of towns, but the rule behind it reaches every life. Every respite has a written term, mine included, and like the towns I cannot read it in advance. What I can read is the order Ibn Kathir set out: the proof first, the term after. For a reader holding this surah, the first has already happened. The verses of the Book and a clear Qur'an are in his hands. Whatever time remains to him is lived after the proof, not before it.",
            "bn": "আয়াতটি জনপদের কথা বলে, কিন্তু তার পেছনের নিয়ম প্রতিটি জীবন পর্যন্ত পৌঁছায়। প্রতিটি অবকাশের একটা লেখা মেয়াদ আছে, আমারটাও। আর জনপদগুলোর মতো আমিও তা আগে থেকে পড়তে পারি না। যা পড়তে পারি, তা হলো ইবন কাসীরের বলা ক্রম: আগে প্রমাণ, পরে মেয়াদ। এ সূরা যার হাতে, তার জন্য প্রথমটা ঘটে গেছে। কিতাবের আয়াত আর সুস্পষ্ট কুরআন তার সামনেই। তার হাতে যতটুকু সময় বাকি, তা কাটছে প্রমাণ আসার পরে, আগে নয়।"
          },
          {
            "en": "Ma'lum, known, is the verse's last word, and it cuts in a direction worth feeling. The term is known, and at-Tabari's gloss keeps that sense with its known period; yet the towns living inside it did not know it. Al-Qurtubi's answer to where it is known is the Preserved Tablet. The same holds for a single life. My end is fixed and known, and the knowing is not mine. That is no reason for dread. It is a reason to keep my accounts short, and to put my hope in Him who holds the writing.",
            "bn": "মা'লূম, অর্থাৎ জানা, আয়াতের শেষ শব্দ। শব্দটা এমন এক দিকে ইঙ্গিত করে, যা মন দিয়ে অনুভব করার মতো। মেয়াদটা জানা, তাবারীর ব্যাখ্যাও জানা সময়কালের কথা বলে। অথচ যে জনপদগুলো তার ভেতরে বাস করছিল, তারা তা জানত না। কোথায় তা জানা, কুরতুবীর জবাব: লাওহে মাহফূযে। একটা জীবনের বেলাতেও কথাটা একই। আমার শেষ নির্ধারিত এবং জানা, তবে সে জ্ঞান আমার নয়। এতে আতঙ্কিত হওয়ার কিছু নেই। বরং এ কারণেই হিসাব ছোট রাখা দরকার, আর আশা রাখা দরকার তাঁর উপর, লিখনটা যাঁর কাছে।"
          },
          {
            "en": "What is the respite for, then? Not for calculating how much of it is left, which cannot be done, and not for the long hope of 15:3, the plan that quietly assumes the end is far away. It is for answering while an answer still counts: a tawbah made today rather than filed under later, a habit dropped rather than scheduled for dropping, a person I wronged told so and asked to forgive. The deniers were told they would come to know. The believer's opening is to know now, while knowing can still change something.",
            "bn": "তাহলে অবকাশটা কীসের জন্য? কতটুকু বাকি আছে তা হিসাব করার জন্য নয়, কারণ সে হিসাব করা যায় না। ১৫:৩ আয়াতের সেই দীর্ঘ আশার জন্যও নয়, যে পরিকল্পনা চুপচাপ ধরে নেয় শেষটা অনেক দূরে। অবকাশ হলো জবাব দেওয়ার সময়, যতক্ষণ জবাবের দাম আছে। যে তওবা আজই করা যায়, তা পরের জন্য তুলে রাখা নয়। যে অভ্যাস ছাড়া দরকার, তা ছাড়ার দিন ঠিক করে রাখা নয়, এখনই ছেড়ে দেওয়া। যার উপর অন্যায় করেছি, তাকে তা স্বীকার করে মাফ চাওয়া। অস্বীকারকারীদের বলা হয়েছিল, শীঘ্রই তারা জানতে পারবে। মুমিনের সুযোগ হলো এখনই জানা, যখন জানা দিয়ে এখনো কিছু বদলানো যায়।"
          }
        ]
      }
    ]
  },
  "15:9": {
    "sections": [
      {
        "h": {
          "en": "A Promise With Emphasis",
          "bn": "জোর দিয়ে বলা প্রতিশ্রুতি"
        },
        "p": [
          {
            "en": "Indeed, it is We who sent down the Reminder, and indeed We are its guardian. Arabic can stack emphasis, and this sentence stacks nearly all of it: inna with the detached pronoun nahnu, then a second inna, then the lam of assertion before hafizun. The mufassirun note that the verse answers a taunt: in 15:6 the deniers had sneered, \"O you upon whom the Reminder has been sent down, you are surely mad.\" The reply passes over the insult and secures the Book instead.",
            "bn": "নিশ্চয়ই আমিই স্মারকগ্রন্থ নাযিল করেছি, আর নিশ্চয়ই আমিই তার রক্ষক। আরবি ভাষা জোরের ওপর জোর চাপাতে পারে, আর এই বাক্যটি তার প্রায় সবটুকুই চাপিয়েছে: ইন্না ও তার সঙ্গে স্বতন্ত্র সর্বনাম নাহনু, তারপর দ্বিতীয় ইন্না, তারপর হাফিযূনের আগে তাকিদের লাম। মুফাসসিরগণ লক্ষ করেন, আয়াতটি একটি বিদ্রূপের জবাব: 15:6 আয়াতে অস্বীকারকারীরা ঠাট্টা করে বলেছিল, \"ওহে, যার ওপর স্মারকগ্রন্থ নাযিল হয়েছে, তুমি তো নিশ্চিত পাগল।\" জবাবটি অপমান পাশ কাটিয়ে গিয়ে বরং কিতাবটিকেই সুরক্ষিত করে।"
          },
          {
            "en": "Hafizun is an active participle, and it is plural to match the majestic We: not \"We will guard it once,\" but \"We are, ongoingly, its guardians.\" The Quran is called adh-Dhikr here, the Reminder — the thing whose entire work is to be remembered. A reminder that could be corrupted would fail at its one task; the name chosen and the promise given fit each other exactly, and the verse makes the fit audible.",
            "bn": "হাফিযূন একটি কর্তৃবাচক বিশেষণপদ (ইসমুল ফাইল), আর মহিমাবাচক \"আমি\"-র সঙ্গে মিল রেখে তা বহুবচনে: \"আমি একবার এটি রক্ষা করব\" নয়, বরং \"আমি চলমানভাবে এর রক্ষক।\" কুরআনকে এখানে বলা হয়েছে আয-যিকর, স্মারকগ্রন্থ — যে জিনিসের সমগ্র কাজই হলো স্মরণে থাকা। যে স্মারক বিকৃত হতে পারত, সে তার ওই একটিমাত্র কাজেই ব্যর্থ হতো; বেছে নেওয়া নাম আর দেওয়া প্রতিশ্রুতি পরস্পরের সঙ্গে নিখুঁতভাবে খাপ খায়, আর আয়াতটি সেই খাপ খাওয়াকে কানে শোনার মতো করে তোলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Guarded From What",
          "bn": "কিসের থেকে সুরক্ষিত"
        },
        "p": [
          {
            "en": "The guardianship covers addition, loss and distortion together. 41:42 says of this Book that falsehood cannot approach it from before it or from behind it. And the guarding began before the community could take any part in it: 75:17 tells the Prophet ﷺ that upon Allah is its collection and its recitation, and in 87:6 he is promised, \"We will make you recite, and you will not forget.\" Preservation is pledged at every stage of the journey — revelation, retention and transmission alike.",
            "bn": "এই রক্ষণাবেক্ষণ সংযোজন, হারিয়ে যাওয়া ও বিকৃতি — তিনটিকেই ঢেকে রাখে। 41:42 আয়াতে এই কিতাব সম্পর্কে বলা হয়েছে, মিথ্যা এর সামনে থেকেও আসতে পারে না, পেছন থেকেও না। আর এই পাহারা শুরু হয়েছিল উম্মাহ তাতে কোনো ভূমিকা রাখতে পারার আগেই: 75:17 আয়াতে নবী ﷺ-কে বলা হয়েছে — এর সংগ্রহ ও এর পাঠ আল্লাহরই দায়িত্বে, আর 87:6 আয়াতে তাঁকে প্রতিশ্রুতি দেওয়া হয়েছে, \"আমি তোমাকে পড়াব, আর তুমি ভুলবে না।\" যাত্রার প্রতিটি ধাপে সংরক্ষণের অঙ্গীকার করা হয়েছে — নাযিল, ধারণ ও পরম্পরায় পৌঁছে দেওয়া, সবটাতেই।"
          },
          {
            "en": "The commentators set this beside the earlier scriptures. In 5:44 the rabbis and the scholars were entrusted with guarding the Book of Allah — bima istuhfizu, by what they were asked to preserve — and an entrusted guardianship could be neglected by its human trustees. For the Quran the grammar itself changes: the Guardian named is Allah. That contrast, drawn in the tafsir literature, is why no promise shaped like 15:9 exists for any earlier book.",
            "bn": "মুফাসসিরগণ এটিকে পূর্ববর্তী কিতাবগুলোর পাশে রাখেন। 5:44 আয়াতে রব্বানী পণ্ডিত ও আলিমদের ওপর আল্লাহর কিতাব রক্ষার দায়িত্ব অর্পিত হয়েছিল — বিমা উস্তুহফিযূ, যা সংরক্ষণের ভার তাদের দেওয়া হয়েছিল — আর মানুষের হাতে অর্পিত রক্ষণাবেক্ষণে মানুষ অবহেলাও করতে পারত। কুরআনের বেলায় বাক্যের গঠনটাই বদলে যায়: রক্ষক হিসেবে যাঁর নাম, তিনি আল্লাহ। তাফসীর-সাহিত্যে টানা এই বৈপরীত্যই কারণ — 15:9 আয়াতের আদলে কোনো প্রতিশ্রুতি আগের কোনো কিতাবের জন্য নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Promise at Work in History",
          "bn": "ইতিহাসে প্রতিশ্রুতিটির কাজ"
        },
        "p": [
          {
            "en": "The promise worked through ordinary means. Al-Bukhari narrates that Jibril (AS) used to review the Quran with the Prophet ﷺ once every Ramadan, and reviewed it with him twice in the final year of his life. Companions carried it whole in memory. After the battle of Yamamah, when many reciters were killed, Abu Bakr (RA) commissioned Zayd ibn Thabit (RA) to gather the text — an account al-Bukhari preserves in Zayd's own words — and Uthman (RA) later had master copies made and sent to the garrison cities.",
            "bn": "প্রতিশ্রুতিটি কাজ করেছে সাধারণ উপায়-উপকরণের ভেতর দিয়ে। আল-বুখারী বর্ণনা করেন, জিবরীল (আঃ) প্রতি রমযানে একবার নবী ﷺ-এর সঙ্গে কুরআন পুনরাবৃত্তি করতেন, আর তাঁর জীবনের শেষ বছরে করেছিলেন দুবার। সাহাবীগণ পুরো কুরআন স্মৃতিতে বহন করতেন। ইয়ামামার যুদ্ধের পর, যখন বহু কারী শহীদ হন, আবু বকর (রাঃ) যায়দ ইবনে সাবিত (রাঃ)-কে পাঠটি সংকলনের দায়িত্ব দেন — বিবরণটি আল-বুখারী যায়দের নিজের ভাষায় সংরক্ষণ করেছেন — আর পরে উসমান (রাঃ) মূল অনুলিপি তৈরি করিয়ে সেনানিবাস-শহরগুলোতে পাঠান।"
          },
          {
            "en": "Alongside the written copies runs a chain that no other book possesses: unbroken mass memorisation. In every generation since, children in every land have carried the entire text in their chests, so that manuscripts check reciters and reciters check manuscripts against each other. The promise of 15:9 did not bypass human effort; it recruited human effort, and sustained it on a scale and across a span of centuries that no human institution announced in advance and then delivered.",
            "bn": "লিখিত অনুলিপিগুলোর পাশাপাশি চলে এমন এক ধারা, যা অন্য কোনো গ্রন্থের নেই: অবিচ্ছিন্ন গণ-মুখস্থকরণ। তারপর থেকে প্রতিটি প্রজন্মে, প্রতিটি দেশের শিশুরা পুরো পাঠটি বুকে বহন করে এসেছে — ফলে পাণ্ডুলিপি যাচাই করে কারীদের, আর কারীরা যাচাই করেন পাণ্ডুলিপিকে, পরস্পরের বিপরীতে। 15:9 আয়াতের প্রতিশ্রুতি মানুষের চেষ্টাকে পাশ কাটায়নি; বরং মানুষের চেষ্টাকেই কাজে নিয়োগ করেছে, এবং তাকে টিকিয়ে রেখেছে এমন এক পরিসরে ও এতগুলো শতাব্দী জুড়ে — যা কোনো মানবীয় প্রতিষ্ঠান আগে ঘোষণা করে তারপর বাস্তবায়ন করতে পারেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Verse Settles",
          "bn": "আয়াতটি যা মীমাংসা করে"
        },
        "p": [
          {
            "en": "For the believer the verse settles a quiet anxiety: the guidance in your hands is what was sent down. Rulings can be studied, promises leaned upon, and stories retold without the fear that the text beneath them has shifted over the centuries. This is also why the surah could tell its Prophet ﷺ — mocked in 15:6 and, near the end in 15:97, described as tightened in chest by what they say — to go on; the message would outlast every mocker.",
            "bn": "মুমিনের জন্য আয়াতটি এক নীরব দুশ্চিন্তার মীমাংসা করে: তোমার হাতে যে হিদায়াত, তা-ই নাযিল হয়েছিল। বিধানগুলো অধ্যয়ন করা যায়, প্রতিশ্রুতির ওপর হেলান দেওয়া যায়, ঘটনাগুলো আবার বলা যায় — এই ভয় ছাড়াই যে শতাব্দীর পর শতাব্দীতে সেগুলোর নিচের পাঠটি সরে গেছে। এ কারণেই সূরাটি তার নবী ﷺ-কে — যিনি 15:6 আয়াতে বিদ্রূপের শিকার, আর শেষের দিকে 15:97 আয়াতে তাদের কথায় সংকুচিত-বক্ষ বলে বর্ণিত — বলতে পেরেছে: এগিয়ে চলো; বার্তাটি প্রতিটি বিদ্রূপকারীর চেয়ে দীর্ঘজীবী হবে।"
          },
          {
            "en": "The trust also carries an edge of responsibility. A preserved Book removes the excuses that earlier communities might plead — that the original was lost, or that the message had been rewritten before it reached them. What reaches us is the Reminder itself, whole. Whether it is remembered inside one particular life — read, understood, obeyed — is the one part of the matter that Allah, who guarded the text, has left in the hands of its reader.",
            "bn": "এই আস্থার সঙ্গে জুড়ে আছে দায়িত্বের একটি ধারও। সংরক্ষিত কিতাব সেই অজুহাতগুলো সরিয়ে দেয়, যা আগের উম্মতেরা হয়তো পেশ করতে পারত — যে মূলটি হারিয়ে গিয়েছিল, বা বার্তাটি তাদের কাছে পৌঁছানোর আগেই নতুন করে লেখা হয়েছিল। আমাদের কাছে যা পৌঁছায় তা স্মারকগ্রন্থটিই, অখণ্ড। কিন্তু একটি নির্দিষ্ট জীবনের ভেতরে তা স্মরণে থাকল কি না — পড়া হলো, বোঝা হলো, মানা হলো কি না — গোটা ব্যাপারের এই একটি অংশই আল্লাহ, যিনি পাঠটি রক্ষা করেছেন, তার পাঠকের হাতে রেখে দিয়েছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Joining the Means",
          "bn": "মাধ্যমগুলোর সাথে যুক্ত হওয়া"
        },
        "p": [
          {
            "en": "The lived response to this verse is participation. Memorise — a page, a surah, a juz — and you become one link in the promise's ongoing fulfilment; teach a child al-Fatihah and you have extended the chain by a generation. Recitation in prayer, revision in the morning, listening on the road: these are the small mechanics by which a divine guarantee has moved through fourteen centuries of otherwise ordinary people, and they remain open to anyone who wants a share in them.",
            "bn": "এই আয়াতের যাপিত জবাব হলো অংশগ্রহণ। মুখস্থ করুন — একটি পৃষ্ঠা, একটি সূরা, এক জুয — আর আপনি হয়ে উঠবেন প্রতিশ্রুতির চলমান বাস্তবায়নের একটি কড়া; একটি শিশুকে আল-ফাতিহা শেখান — আপনি শৃঙ্খলটিকে এক প্রজন্ম বাড়িয়ে দিলেন। নামাযে তিলাওয়াত, সকালে পুনরাবৃত্তি, পথে শোনা: এই ছোট ছোট কলকব্জা দিয়েই একটি ঐশী নিশ্চয়তা চৌদ্দ শতাব্দীর নিতান্ত সাধারণ মানুষের ভেতর দিয়ে এগিয়ে এসেছে — আর যে-ই এতে অংশ চায়, তার জন্য সেগুলো আজও খোলা।"
          },
          {
            "en": "And let the preserved Book be treated as preserved: quoted carefully, translated honestly, checked against itself before being argued over. The verse is a particular comfort in an age anxious about information — records edited silently, histories rewritten, words put into mouths. One text, at least, sits under a guardianship that no archive and no algorithm can offer, and the heart that carries it carries something that time has been forbidden to take away.",
            "bn": "আর সংরক্ষিত কিতাবের সঙ্গে সংরক্ষিতের মতোই আচরণ হোক: সাবধানে উদ্ধৃত, সততার সঙ্গে অনূদিত, তর্কে নামার আগে নিজের সঙ্গেই মিলিয়ে দেখা। তথ্য নিয়ে উদ্বিগ্ন এক যুগে আয়াতটি বিশেষ এক সান্ত্বনা — যেখানে নথি নিঃশব্দে সম্পাদিত হয়, ইতিহাস নতুন করে লেখা হয়, মানুষের মুখে কথা বসিয়ে দেওয়া হয়। অন্তত একটি পাঠ এমন এক রক্ষণাবেক্ষণের নিচে আছে, যা কোনো মহাফেজখানা বা কোনো অ্যালগরিদম দিতে পারে না; আর যে হৃদয় তা বহন করে, সে এমন কিছু বহন করে — সময়ের জন্য যা কেড়ে নেওয়া নিষিদ্ধ করা হয়েছে।"
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
            "bn": "ওয়া লাকাদ জাআলনা ফিস সামাই বুরূজান ওয়া যাইয়্যান্নাহা লিন নাযিরীন: আর আমি আকাশে বুরূজ স্থাপন করেছি এবং দর্শকদের জন্য একে সাজিয়েছি। আয়াতটি আসে একটি কল্পিত দৃশ্যের ঠিক পরে। ১৫:১৪ ও ১৫:১৫ আয়াতে বলা হয়েছে, আকাশে কোনো দরজা খুলে দিলে আর অস্বীকারকারীরা তা দিয়ে উঠতে থাকলেও তারা শুধু বলত, আমাদের চোখ ধাঁধিয়ে দেওয়া হয়েছে, আমরা জাদুগ্রস্ত এক সম্প্রদায়। একটু আগেই আকাশকে কল্পনা করা হলো এমন দরজা হিসেবে, যা কাউকে বোঝাতে পারত না। এবার আকাশকে দেখানো হচ্ছে সে যেমন আছে তেমনভাবে, সবার মাথার উপর।"
          },
          {
            "en": "Al-Qurtubi names the turn. Having mentioned the disbelief of the disbelievers and the helplessness of their idols, he says, Allah now mentions the perfection of His power, so that it may serve as evidence of His oneness. Ma'arif al-Qur'an, which comments on 15:16 and 15:17 together, reads the passage the same way: the verses before it described the obstinacy of the deniers, and these begin a run of proofs of Allah's oneness, knowledge and power. Al-Muyassar opens its comment with the words, among the proofs of Our power.",
            "bn": "মোড়টা কুরতুবী স্পষ্ট করে দেন। তাঁর ভাষায়, কাফিরদের কুফর আর তাদের মূর্তিগুলোর অক্ষমতার কথা বলার পর আল্লাহ এবার নিজের পূর্ণ কুদরতের কথা বলছেন, যাতে তা তাঁর একত্বের প্রমাণ হয়। মাআরিফুল কুরআন ১৫:১৬ ও ১৫:১৭ আয়াতের আলোচনা একসঙ্গে করেছে, আর সেখানেও একই পাঠ। আগের আয়াতগুলোতে ছিল অস্বীকারকারীদের একগুঁয়েমি। এখান থেকে শুরু হচ্ছে আল্লাহর একত্ব, জ্ঞান ও কুদরতের প্রমাণের ধারা। মুয়াসসার তার ব্যাখ্যা শুরুই করে এই কথা দিয়ে: আমার কুদরতের প্রমাণগুলোর একটি হলো।"
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
            "en": "What are the buruj? The fetched commentators give several answers, and they name who held each. At-Tabari reports from Mujahid, through several chains, that buruj here are stars (kawakib), and from Qatada that they are the sky's stars (nujum). Ibn Kathir reports the same from Mujahid and Qatada. Al-Qurtubi names al-Hasan with Qatada for the reading stars, and reports from Abu Salih that they are the great stars, which he explains as the seven moving ones. Ma'arif al-Qur'an names Mujahid, Qatadah and Abu Salih for big stars.",
            "bn": "বুরূজ আসলে কী? তাফসীরকারেরা কয়েকটি উত্তর দেন, আর কোন মত কার, তাও জানিয়ে দেন। তাবারী কয়েকটি সনদে মুজাহিদ থেকে বর্ণনা করেন, এখানে বুরূজ মানে নক্ষত্র (কাওয়াকিব)। কাতাদা থেকে বর্ণনা করেন, বুরূজ হলো আকাশের তারকারাজি (নুজূম)। ইবন কাসীরও মুজাহিদ ও কাতাদা থেকে একই কথা আনেন। কুরতুবী নক্ষত্র অর্থের পক্ষে কাতাদার সঙ্গে হাসানের নাম যোগ করেন। আবু সালিহ থেকে তিনি আনেন, বুরূজ হলো বড় বড় নক্ষত্র, আর ব্যাখ্যা দেন: অর্থাৎ চলমান সাতটি। মাআরিফুল কুরআনও বড় নক্ষত্র অর্থের জন্য মুজাহিদ, কাতাদা ও আবু সালিহের নাম নেয়।"
          },
          {
            "en": "Another reading makes the buruj stations. Al-Qurtubi reports from Ibn 'Abbas that they are the buruj of the sun and the moon, meaning their stations, and Ibn Kathir notes that some held this. At-Tabari's own gloss joins the two readings: stations for the sun and the moon in the lowest heaven, which are stars in which the sun and the moon alight. Al-Baghawi joins them from the other side. He first calls buruj the great stars, then says what is meant is the stations through which the sun, the moon and the moving stars pass, twelve in number.",
            "bn": "আরেক পাঠে বুরূজ মানে মনযিল, অর্থাৎ অবস্থানস্থল। কুরতুবী ইবন আব্বাস (রাঃ) থেকে বর্ণনা করেন, এগুলো সূর্য ও চাঁদের বুরূজ, মানে তাদের মনযিল। ইবন কাসীর জানান, কেউ কেউ এ মত পোষণ করতেন। তাবারীর নিজের ব্যাখ্যা দুটি পাঠকে এক করে দেয়। তিনি বলেন, দুনিয়ার আকাশে সূর্য ও চাঁদের জন্য মনযিল, আর সেগুলো এমন নক্ষত্র যেখানে সূর্য ও চাঁদ অবতরণ করে। বাগাভী অন্য দিক থেকে একই কাজ করেন। প্রথমে তিনি বুরূজকে বলেন বড় বড় নক্ষত্র। তারপর বলেন, উদ্দেশ্য হলো সেই মনযিলগুলো, যার মধ্য দিয়ে সূর্য, চাঁদ আর চলমান নক্ষত্রগুলো যায়। সংখ্যায় সেগুলো বারোটি।"
          },
          {
            "en": "A third reading is architectural. Al-Qurtubi's own definition is palaces and stations, and Ma'arif notes that burj is used for large palaces, castles and similar structures. Ibn Kathir and al-Baghawi report from 'Atiyya al-'Awfi that buruj here are palaces in the sky on which guards stand, and al-Qurtubi gives the same view from 'a group' and closes his list with, Allah knows best. As-Sa'di holds stars and towers together: stars like towers and great landmarks. This article takes no side among the readings.",
            "bn": "তৃতীয় পাঠটি স্থাপত্যের ভাষায়। কুরতুবীর নিজের সংজ্ঞা: প্রাসাদ ও মনযিল। মাআরিফুল কুরআন জানায়, বুরজ শব্দটি বড় প্রাসাদ, দুর্গ ও এ ধরনের স্থাপনার জন্য ব্যবহৃত হয়। ইবন কাসীর ও বাগাভী আতিয়্যা আল-আওফী থেকে বর্ণনা করেন, এখানে বুরূজ হলো আকাশের এমন প্রাসাদ, যার উপর প্রহরী আছে। কুরতুবী একই মত ‘একদল’-এর নামে আনেন, আর তালিকা শেষ করেন এই বলে: আল্লাহই ভালো জানেন। সা'দী নক্ষত্র আর মিনার দুটোকেই একসঙ্গে রাখেন: মিনার ও বড় বড় নিশানার মতো নক্ষত্র। এই লেখা কোনো পাঠের পক্ষ নেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "A Word for What Shows",
          "bn": "যা প্রকাশ পায় তার নাম"
        },
        "p": [
          {
            "en": "Two of the commentators go behind the word. Al-Qurtubi says the root meaning of buruj is appearing, becoming manifest, and that from it comes tabarruj, a woman's display of her adornment. Al-Baghawi gives the same derivation: tabarrajat al-mar'a, the woman appeared. Al-Qurtubi also reports that al-Hasan and Qatada, reading buruj as stars, said they were so named for their visibility and their height. On this account the word already leans towards the end of the verse: the buruj are things that stand out to be seen.",
            "bn": "দুজন তাফসীরকার শব্দটির মূলে যান। কুরতুবী বলেন, বুরূজের মূল অর্থ প্রকাশ পাওয়া, স্পষ্ট হয়ে ওঠা। এখান থেকেই তাবাররুজ, মানে নারীর নিজের সাজসজ্জা প্রকাশ করা। বাগাভীও একই উৎসের কথা বলেন: তাবাররাজাতিল মারআ, অর্থাৎ নারীটি প্রকাশ্যে এল। কুরতুবী আরও জানান, হাসান ও কাতাদা বুরূজকে নক্ষত্র অর্থে নিয়ে বলেছেন, সেগুলো স্পষ্ট দেখা যায় আর অনেক উঁচুতে থাকে বলেই এই নাম। এ হিসেবে শব্দটি নিজেই আয়াতের শেষ অংশের দিকে ঝুঁকে আছে। বুরূজ এমন জিনিস, যা চোখে পড়ার জন্যই মাথা তুলে দাঁড়িয়ে।"
          },
          {
            "en": "Ibn Kathir, after reporting that Mujahid and Qatada took buruj here as the stars, sets the verse beside 25:61: blessed is He who placed buruj in the sky and placed in it a lamp and a shining moon. Ma'arif al-Qur'an also points to 25:61 and says it will give its fuller discussion of the word as-sama', and of where the stars are placed, under that verse. This article leaves that discussion where Ma'arif places it, and makes no astronomical claim of its own about the verse.",
            "bn": "মুজাহিদ ও কাতাদা এখানে বুরূজকে নক্ষত্র বলেছেন, এ কথা জানানোর পর ইবন কাসীর আয়াতটিকে রাখেন ২৫:৬১ আয়াতের পাশে: বরকতময় তিনি, যিনি আকাশে বুরূজ স্থাপন করেছেন, আর তাতে রেখেছেন এক প্রদীপ ও আলো ছড়ানো চাঁদ। মাআরিফুল কুরআনও ২৫:৬১ আয়াতের দিকে ইশারা করে। সামা শব্দের অর্থ আর নক্ষত্রগুলোর অবস্থান নিয়ে বিস্তারিত আলোচনা সে ওই আয়াতের অধীনে করবে বলে জানায়। সে আলোচনা মাআরিফ যেখানে রেখেছে, এই লেখা সেখানেই রেখে দিচ্ছে। আয়াত নিয়ে জ্যোতির্বিজ্ঞানের কোনো দাবি এখানে নিজের পক্ষ থেকে করা হচ্ছে না।"
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
            "en": "Several of the fetched texts say what the stars were for in the lives of those who first heard the verse. Al-Muyassar says Allah placed stations in the lowest heaven in which the stars alight, and that by them people find their way to roads and to times, and to plenty and drought. Al-Qurtubi reports that the Arabs counted knowledge of the positions of the stars and their gateways among the most important of sciences, and took them as indications of roads, times, plenty and drought. He then lists the twelve buruj by name, from al-Hamal to al-Hut.",
            "bn": "আয়াতটি প্রথম যারা শুনেছিল, তাদের জীবনে নক্ষত্রের কাজ কী ছিল, কয়েকটি তাফসীরে তার উল্লেখ আছে। মুয়াসসার বলে, আল্লাহ দুনিয়ার আকাশে মনযিল বানিয়েছেন, যেখানে নক্ষত্রগুলো অবতরণ করে। এগুলো দেখে মানুষ পথ চেনে, সময় চেনে, প্রাচুর্য ও খরার আভাস পায়। কুরতুবী জানান, নক্ষত্রের অবস্থান আর তাদের দরজাগুলো চেনাকে আরবরা সবচেয়ে গুরুত্বপূর্ণ বিদ্যার মধ্যে গণ্য করত। পথ, সময়, প্রাচুর্য ও খরার জন্য তারা এগুলোকে আলামত হিসেবে ধরত। এরপর তিনি হামাল থেকে হূত পর্যন্ত বারোটি বুরূজের নাম একে একে উল্লেখ করেন।"
          },
          {
            "en": "As-Sa'di reads the verse as a sign of Allah's mercy to His creation as well as His power. The buruj, he says, are like towers and great landmarks by which people are guided through the darkness of land and sea. Al-Baghawi likewise names the twelve and ties them to the paths of the sun, the moon and the moving stars. In the texts that speak of use, the stars guide the traveller and mark the time. They serve people who need to know where they are and when they are.",
            "bn": "সা'দী আয়াতটিকে পড়েন আল্লাহর কুদরতের পাশাপাশি সৃষ্টির প্রতি তাঁর রহমতের নিদর্শন হিসেবে। তিনি বলেন, বুরূজ হলো মিনার ও বড় বড় নিশানার মতো নক্ষত্র, যা দেখে মানুষ স্থল ও সমুদ্রের অন্ধকারে পথ খুঁজে পায়। বাগাভীও বারোটির নাম নেন আর সেগুলোকে সূর্য, চাঁদ ও চলমান নক্ষত্রের পথের সঙ্গে জুড়ে দেন। যেসব তাফসীর নক্ষত্রের ব্যবহারের কথা বলে, সেখানে নক্ষত্র মুসাফিরকে পথ দেখায় আর সময়ের হিসাব রাখে। কোথায় আছি আর কখন আছি, যার এটা জানা দরকার, নক্ষত্র তার কাজে লাগে।"
          },
          {
            "en": "None of the texts fetched on this verse takes up astrology, the claim to read people's fortunes in the stars, and none sets it here against the knowledge of direction and season it describes. That question is therefore not decided in this article, in either direction. What the sources on 15:16 do describe is a sky used for finding the way and keeping time, and, as the next section shows, a sky adorned and offered as evidence of its Maker.",
            "bn": "এ আয়াতের যেসব তাফসীর সংগ্রহ করা হয়েছে, তার কোনোটিই জ্যোতিষ নিয়ে কথা বলেনি, মানে নক্ষত্র দেখে মানুষের ভাগ্য পড়ার দাবি নিয়ে। দিক ও মৌসুম চেনার যে জ্ঞানের কথা তারা বলে, তার সঙ্গে জ্যোতিষের তুলনাও এখানে কেউ করেনি। তাই এই লেখা প্রশ্নটির কোনো দিকেই রায় দিচ্ছে না। ১৫:১৬ আয়াতের তাফসীরগুলো যা বলে তা হলো, আকাশ পথ চেনার আর সময় রাখার কাজে লাগে। আর পরের অংশে যেমন দেখা যাবে, এই আকাশ সাজানো হয়েছে, আর তার স্রষ্টার প্রমাণ হিসেবে সামনে রাখা হয়েছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adorned, Not Merely Lit",
          "bn": "শুধু আলো নয়, সাজ"
        },
        "p": [
          {
            "en": "Wa-zayyannaha: and We adorned it. Al-Qurtubi and al-Baghawi both make the pronoun refer to the sky. At-Tabari says Allah adorned the sky with the stars, and al-Muyassar says the same. Al-Baghawi widens the adornment to the sun, the moon and the stars together. Ibn Kathir speaks of the piercing stars, al-kawakib ath-thawaqib, with which Allah adorned the sky in its height. Al-Qurtubi joins the clause to 67:5: and We have certainly adorned the nearest heaven with lamps.",
            "bn": "ওয়া যাইয়্যান্নাহা: আর আমি একে সাজিয়েছি। কুরতুবী ও বাগাভী দুজনেই সর্বনামটিকে আকাশের দিকে ফেরান। তাবারী বলেন, আল্লাহ আকাশকে নক্ষত্র দিয়ে সাজিয়েছেন। মুয়াসসারও তাই বলে। বাগাভী সাজের পরিধি বাড়িয়ে সূর্য, চাঁদ ও নক্ষত্র সবগুলোকেই এর মধ্যে ধরেন। ইবন কাসীর বলেন উজ্জ্বল ভেদকারী নক্ষত্রের কথা, আল-কাওয়াকিবুস সাওয়াকিব, যা দিয়ে আল্লাহ সুউচ্চ আকাশকে সাজিয়েছেন। কুরতুবী অংশটিকে জুড়ে দেন ৬৭:৫ আয়াতের সঙ্গে: আর আমি নিকটবর্তী আকাশকে প্রদীপমালা দিয়ে সাজিয়েছি।"
          },
          {
            "en": "As-Sa'di draws out what follows. Were it not for the stars, he says, the sky would not have this splendid view and this wondrous form, and this is among what calls the beholders to contemplate it. The verb the verse chooses is adorning, not lighting and not usefulness. The sky's service to travellers, which the fetched texts report, is real, but in this clause the verse names beauty, and names it as something done for the ones who look.",
            "bn": "সা'দী এর ফলটা বের করে আনেন। তিনি বলেন, নক্ষত্র না থাকলে আকাশের এই ঝলমলে দৃশ্য আর এই বিস্ময়কর রূপ থাকত না। আর এটাই দর্শকদের তা নিয়ে ভাবতে ডাকে। আয়াত এখানে যে ক্রিয়া বেছে নিয়েছে, তা সাজানোর ক্রিয়া। আলো দেওয়া বা কাজে লাগানোর ক্রিয়া নয়। মুসাফিরের কাজে আকাশ লাগে, তাফসীরে তার কথা আছে, আর তা সত্যও। কিন্তু এই অংশে আয়াত নাম নিচ্ছে সৌন্দর্যের, আর বলছে এ সৌন্দর্য তাদের জন্য, যারা তাকায়।"
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
            "bn": "লিন নাযিরীন: দর্শকদের জন্য, শাব্দিক অর্থে যারা তাকায় তাদের জন্য। শব্দটির ব্যাখ্যায় তাফসীরকারদের জোর ভিন্ন ভিন্ন জায়গায়। তাবারী অর্থটা খোলা রাখেন: যে-ই আকাশের দিকে তাকায় আর তা দেখে। বাগাভী আয়াতের শব্দটিই আবার বলেন, সীমা টানেন না। কুরতুবী সীমা টানেন: যারা শিক্ষা নেয় আর যারা চিন্তা করে। মুয়াসসার দুটি অর্থকে মিলিয়ে দেয়: যারা আকাশের দিকে তাকায়, ভাবে, আর তা থেকে শিক্ষা নেয়। এটা বিরোধের চেয়ে জোরের পার্থক্যই বেশি। তবু পার্থক্যটা সত্যিকারের, আর তা মনে রাখার মতো।"
          },
          {
            "en": "Ibn Kathir describes the beholder at length: whoever contemplates the sky and repeats the look into it sees wonders and dazzling signs at which his sight is left bewildered. The English abridgment of Ibn Kathir, which treats 15:16 to 15:20 together, puts it as those who ponder and look repeatedly. As-Sa'di ends where the looking is meant to end: the adornment calls the beholders to contemplate the sky, to look into its meanings, and to take it as evidence of its Maker.",
            "bn": "ইবন কাসীর দর্শকের বিস্তারিত ছবি আঁকেন। যে আকাশ নিয়ে ভাবে আর বারবার তার দিকে তাকায়, সে এমন সব বিস্ময় আর চোখধাঁধানো নিদর্শন দেখে, যার সামনে তার দৃষ্টি হতবাক হয়ে যায়। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১৫:১৬ থেকে ১৫:২০ পর্যন্ত একসঙ্গে আলোচনা করে। সেখানে কথাটা এসেছে এভাবে: যারা ভাবে আর বারবার তাকায়। তাকানোর যেখানে পৌঁছানোর কথা, সা'দী সেখানেই শেষ করেন। তাঁর মতে এই সাজ দর্শকদের ডাকে আকাশ নিয়ে ভাবতে, তার অর্থের ভেতরে তাকাতে, আর তাকে তার স্রষ্টার প্রমাণ হিসেবে নিতে।"
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
            "bn": "আতিয়্যা আল-আওফীর পাঠ, প্রহরীদের প্রাসাদ, সামনের দিকে তাকিয়ে আছে। ইবন কাসীর এ মতের সঙ্গেই আনেন সেই উল্কাশিখার কথা, যা অবাধ্য শয়তানদের থেকে আকাশ পাহারা দেওয়ার জন্য বানানো হয়েছে। এটাই ১৫:১৭ ও ১৫:১৮ আয়াতের বিষয়, যেখানে আকাশের সুরক্ষা আর পিছু ধাওয়া করা শিখার কথা সরাসরি এসেছে। সে আলোচনা ওই আয়াতগুলোর, তাই সেখানেই থাক। উপরে যে দুটি তাফসীর কয়েকটি আয়াত একসঙ্গে আলোচনা করেছে, ইবন কাসীরের সংক্ষিপ্ত সংস্করণ আর মাআরিফুল কুরআন, সেগুলো থেকে এখানে শুধু ১৫:১৬ সম্পর্কিত কথাই নেওয়া হয়েছে।"
          },
          {
            "en": "Ibn Kathir also quotes a report from al-Bukhari at this point, but it concerns the eavesdropping named in 15:18, not the stars or the adornment of 15:16, and it is left for that verse. No fetched tafsir attaches a hadith to the words of 15:16 itself. What remains in this verse is what any eye can check on a clear night: the sky has lights set in it, and they are beautiful.",
            "bn": "ইবন কাসীর এখানে বুখারী থেকে একটি বর্ণনাও উদ্ধৃত করেন। কিন্তু তা ১৫:১৮ আয়াতে বলা আড়ি পেতে শোনার বিষয়ে, ১৫:১৬ আয়াতের নক্ষত্র বা সাজ নিয়ে নয়। তাই সেটা ওই আয়াতের জন্যই রাখা হলো। সংগৃহীত কোনো তাফসীর ১৫:১৬ আয়াতের শব্দগুলোর সঙ্গে কোনো হাদীস যুক্ত করেনি। এ আয়াতে যা থাকে, তা যে-কোনো চোখ পরিষ্কার রাতে নিজেই যাচাই করতে পারে: আকাশে আলো বসানো আছে, আর সেগুলো সুন্দর।"
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
            "en": "Something is visible in the text itself, though none of the commentators fetched draws it out. 15:15 ends with people who would call their own eyes dazzled even if they rose through a gate in the sky. 15:16 ends with the beholders. The first group is offered an extraordinary sight and explains it away. The second is offered an ordinary sight, the night sky, and is invited to look. The verse does not wait for a door to open. It points at what is already overhead.",
            "bn": "লেখার ভেতরেই একটা জিনিস চোখে পড়ে, যদিও সংগৃহীত তাফসীরকারদের কেউ তা আলাদা করে বলেননি। ১৫:১৫ আয়াত শেষ হয় এমন লোকদের কথায়, যারা আকাশের দরজা দিয়ে উঠে গেলেও বলত, আমাদের চোখ ধাঁধিয়ে দেওয়া হয়েছে। ১৫:১৬ আয়াত শেষ হয় দর্শকদের কথায়। প্রথম দলের সামনে অসাধারণ দৃশ্য, আর তারা তা ব্যাখ্যা করে উড়িয়ে দেয়। দ্বিতীয় দলের সামনে সাধারণ দৃশ্য, রাতের আকাশ, আর তাদের ডাকা হয় তাকাতে। আয়াত কোনো দরজা খোলার অপেক্ষায় থাকে না। যা আগে থেকেই মাথার উপর, সেদিকেই আঙুল তোলে।"
          },
          {
            "en": "For the reader, this turns looking up into an act. Most of us see the sky many times a day without beholding it. The beholder in al-Qurtubi's and al-Muyassar's words is the person who reflects and takes lesson, and in Ibn Kathir's words the person who looks again. That is a choice anyone can make on any clear evening, in a city or a village, with no instrument and no special learning. The sign asks only for attention, given on purpose.",
            "bn": "পাঠকের জন্য এতে উপরের দিকে তাকানোটা হয়ে ওঠে একটা আমল। আমরা দিনে বহুবার আকাশ দেখি, কিন্তু তাকিয়ে দেখি না। কুরতুবী ও মুয়াসসারের ভাষায় দর্শক সে, যে ভাবে আর শিক্ষা নেয়। ইবন কাসীরের ভাষায় সে, যে আবার তাকায়। শহরে হোক বা গ্রামে, যে-কোনো পরিষ্কার সন্ধ্যায় যে-কেউ এ কাজটা বেছে নিতে পারে। কোনো যন্ত্র লাগে না, বিশেষ কোনো বিদ্যাও না। নিদর্শনটা শুধু মনোযোগ চায়, আর সে মনোযোগ ইচ্ছা করে দেওয়া।"
          },
          {
            "en": "The verse also asks what beauty is for. It is easy to treat the stars as a sight, something to photograph and walk past. As-Sa'di's reading makes the adornment a call: the splendour is there so that the person who looks will think about it and reach its Maker. Beauty on this reading is a sign, not an ornament that ends in itself. Whoever looks up tonight and says only how pretty has seen the sky. Whoever lets it lead further has beheld it.",
            "bn": "আয়াতটি আরও জিজ্ঞেস করে, সৌন্দর্য কীসের জন্য। নক্ষত্রকে শুধু দৃশ্য ভাবা সহজ, ছবি তুলে পাশ কাটিয়ে যাওয়ার মতো কিছু। সা'দীর পাঠে এই সাজ একটা ডাক। ঝলমলে রূপটা আছে যাতে দর্শক তা নিয়ে ভাবে আর তার স্রষ্টা পর্যন্ত পৌঁছায়। এ পাঠে সৌন্দর্য এক নিদর্শন, নিজের মধ্যেই শেষ হয়ে যাওয়া অলংকার নয়। আজ রাতে যে উপরে তাকিয়ে শুধু বলল ‘কী সুন্দর’, সে আকাশ দেখেছে। আর যে সৌন্দর্যকে তাকে আরও দূরে নিয়ে যেতে দিল, সে সত্যিই তাকিয়ে দেখেছে।"
          }
        ]
      }
    ]
  },
  "15:49": {
    "sections": [
      {
        "h": {
          "en": "Inform, Not Say",
          "bn": "সংবাদ দাও, বলো নয়"
        },
        "p": [
          {
            "en": "The verb is nabbi', an imperative from a root whose noun is naba' — news of weight, the kind that changes what a person does next. 78:2 uses that noun for an-naba' al-'azim, the great news. The same root stands behind the word nabi. So the command is not qul, say, but nabbi': deliver this as news. Forgiveness is not left to be inferred from His conduct over time. It is dispatched, in six Arabic words, as an announcement.",
            "bn": "ক্রিয়াপদটি নাব্বি', একটি আদেশসূচক শব্দ, যার ধাতুর বিশেষ্য নাবা' — ভারী সংবাদ, যে ধরনের খবর মানুষ এরপর কী করবে তা বদলে দেয়। 78:2 আয়াত সেই বিশেষ্যটিই ব্যবহার করে আন-নাবা'উল 'আযীম বোঝাতে — মহাসংবাদ। একই ধাতু নবী শব্দটির পেছনেও দাঁড়িয়ে আছে। কাজেই আদেশটি 'কুল' — বলো — নয়, বরং নাব্বি': এটি সংবাদ হিসেবে পৌঁছে দাও। ক্ষমাকে সময়ের সঙ্গে তাঁর আচরণ থেকে অনুমান করে নেওয়ার জন্য ফেলে রাখা হয়নি। আরবি ছয়টি শব্দে তা ঘোষণা হিসেবে পাঠিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "'Ibadi, My servants, with the possessive attached. 39:53 keeps the same possessive when it addresses those who went to excess against themselves: O My servants. The relationship word arrives before any description of the record. And here there is no description at all — no qualifier narrows who is to be told, so the announcement is to be carried to whoever is a servant, which is everyone.",
            "bn": "'ইবাদী — আমার বান্দারা, সঙ্গে সম্বন্ধসূচক অংশটি জুড়ে দেওয়া। 39:53 আয়াতও একই সম্বন্ধ ধরে রাখে যখন তা তাদের সম্বোধন করে যারা নিজেদের ওপর বাড়াবাড়ি করেছে: হে আমার বান্দারা। সম্পর্কের শব্দটি আসে রেকর্ডের কোনো বর্ণনার আগেই। আর এখানে বর্ণনা একেবারেই নেই — কোনো বিশেষণ সংকীর্ণ করে দেয় না কাদের জানাতে হবে; কাজেই ঘোষণাটি বয়ে নিয়ে যেতে হবে যে-ই বান্দা তার কাছেই, অর্থাৎ সবার কাছে।"
          }
        ]
      },
      {
        "h": {
          "en": "It Is I",
          "bn": "আমিই তিনি"
        },
        "p": [
          {
            "en": "Anni ana al-ghafur ar-rahim. The emphasis is stacked three deep: the particle anna, then the standing pronoun ana, then the definite article on both names. Grammarians call a pronoun in this position a pronoun of separation, and its work is exclusivity. The sentence does not say I forgive, nor even I am forgiving. It hands over two titles with the definite article attached, which shuts every other claimant out of them.",
            "bn": "আন্নী আনাল গাফূরুর রাহীম। জোর এখানে তিন স্তরে সাজানো: প্রথমে অব্যয় আন্না, তারপর স্বতন্ত্র সর্বনাম আনা, তারপর দুটি নামের ওপরই নির্দিষ্টতাসূচক অংশ। ব্যাকরণবিদরা এই অবস্থানের সর্বনামকে বলেন বিচ্ছেদসূচক সর্বনাম, আর তার কাজ হলো একচেটিয়াকরণ। বাক্যটি বলে না 'আমি ক্ষমা করি', এমনকি 'আমি ক্ষমাশীল'ও নয়। এটি নির্দিষ্টতাসূচক অংশসহ দুটি উপাধি তুলে দেয়, যা সেগুলো থেকে অন্য সব দাবিদারকে বের করে দেয়।"
          },
          {
            "en": "The lexicographers connect the root of al-Ghafur to covering: the mighfar is the helmet that covers the head. Ar-Rahim is the mercy that acts. One conceals the record, the other gives beyond it, and the difference matters. Forgiveness without mercy would leave a person merely unpunished and standing where he was. This same pair closes 39:53, and the two names are set together often enough in the Book that the mufassirun treat them as one movement rather than two favours.",
            "bn": "অভিধানবিদরা আল-গাফূর শব্দের ধাতুকে আচ্ছাদনের সঙ্গে যুক্ত করেন: মিগফার হলো সেই শিরস্ত্রাণ যা মাথা ঢেকে রাখে। আর-রাহীম হলো সেই রহমত যা কাজ করে। একটি রেকর্ড ঢেকে দেয়, অন্যটি তার চেয়ে বেশি দেয় — আর পার্থক্যটি গুরুত্বপূর্ণ। রহমত ছাড়া ক্ষমা মানুষকে কেবল শাস্তিমুক্ত করে যেখানে ছিল সেখানেই দাঁড় করিয়ে রাখত। এই একই জোড়া 39:53 আয়াতকেও শেষ করে, আর নাম দুটি কিতাবে এত ঘনঘন একসঙ্গে বসে যে মুফাসসিরগণ এদের দুটি অনুগ্রহ নয়, একটিই গতি হিসেবে দেখেন।"
          }
        ]
      },
      {
        "h": {
          "en": "And the Other Half",
          "bn": "আর বাকি অর্ধেক"
        },
        "p": [
          {
            "en": "15:50 comes immediately after, with nothing in between: and that My punishment, it is the painful punishment. It is built to the same pattern — the particle anna, the standing pronoun huwa, the definite article. The grammar of the second clause mirrors the first exactly, and that mirroring is the point. The two verses are one announcement in two halves, and neither half can be quoted as the whole of what the servants were to be told.",
            "bn": "15:50 আয়াতটি আসে ঠিক পরেই, মাঝখানে কিছু নেই: আর আমার শাস্তি — সেটিই যন্ত্রণাদায়ক শাস্তি। এটি গড়া হয়েছে একই ছাঁচে — অব্যয় আন্না, স্বতন্ত্র সর্বনাম হুয়া, নির্দিষ্টতাসূচক অংশ। দ্বিতীয় বাক্যের ব্যাকরণ প্রথমটির হুবহু প্রতিচ্ছবি, আর সেই প্রতিফলনই আসল কথা। দুটি আয়াত মিলে এক ঘোষণার দুই অর্ধেক, আর বান্দাদের যা জানানোর কথা ছিল তার পুরোটা হিসেবে কোনো অর্ধেককেই উদ্ধৃত করা যায় না।"
          },
          {
            "en": "Muslim narrates from Abu Hurayrah (RA) that the Prophet ﷺ said: if the believer knew what punishment is with Allah, none would hope for His Paradise; and if the disbeliever knew what mercy is with Allah, none would despair of His Paradise. That hadith is the pairing of these two verses stated as psychology. Each name is entirely true. A person holding only one of them has not been given the message.",
            "bn": "মুসলিম আবু হুরায়রা (রাঃ) থেকে বর্ণনা করেন যে নবী ﷺ বলেছেন: মুমিন যদি জানত আল্লাহর কাছে কী শাস্তি আছে, কেউই তাঁর জান্নাতের আশা করত না; আর কাফির যদি জানত আল্লাহর কাছে কী রহমত আছে, কেউই তাঁর জান্নাত থেকে নিরাশ হতো না। এই হাদীসটি এই দুই আয়াতের জোড়টিকেই মনস্তত্ত্বের ভাষায় বলে দেয়। দুটি নামই সম্পূর্ণ সত্য। যে মানুষ কেবল একটি ধরে আছে, তাকে বার্তাটি পৌঁছে দেওয়া হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Surah Acts It Out",
          "bn": "সূরাটি তা অভিনয় করে দেখায়"
        },
        "p": [
          {
            "en": "The placement is not incidental. 15:45-48 has just shown the righteous in gardens and springs, entering in peace, their breasts cleared of any rancour, seated facing one another, untouched by fatigue and never to be removed. The two announcements follow that. Then 15:51 uses the very same verb again — inform them about the guests of Ibrahim (AS) — so the reader is handed a third thing to be told, in the same imperative.",
            "bn": "অবস্থানটি আকস্মিক নয়। 15:45-48 আয়াতগুলো সবেমাত্র দেখিয়েছে মুত্তাকীদের বাগান ও ঝর্ণার মধ্যে, শান্তিতে প্রবেশ করছে, তাদের অন্তর থেকে বিদ্বেষ দূর করা হয়েছে, তারা মুখোমুখি আসনে বসা, কোনো ক্লান্তি তাদের স্পর্শ করে না আর সেখান থেকে কখনো বের করাও হবে না। এরপরই আসে দুটি ঘোষণা। তারপর 15:51 আয়াত সেই একই ক্রিয়াপদ আবার ব্যবহার করে — তাদের ইবরাহীম (আঃ)-এর মেহমানদের কথা জানিয়ে দাও — অর্থাৎ পাঠকের হাতে একই আদেশসূচক ভঙ্গিতে তৃতীয় একটি সংবাদ তুলে দেওয়া হয়।"
          },
          {
            "en": "And what follows demonstrates both halves in turn. The guests bring Ibrahim (AS) glad tidings of a learned boy, and when he wonders at it in old age they tell him not to be of the despairing; his answer in 15:56 is that none despairs of the mercy of his Lord except those astray. Then in 15:58-60 the same messengers say they were sent to a criminal people, and that the family of Lot (AS) would be saved. One errand, two outcomes, in the order the two verses gave them.",
            "bn": "আর এরপর যা আসে তা পর্যায়ক্রমে দুটি অর্ধেকই দেখিয়ে দেয়। মেহমানরা ইবরাহীম (আঃ)-কে এক জ্ঞানী পুত্রের সুসংবাদ দেন, আর বার্ধক্যে তিনি বিস্মিত হলে তাঁরা তাঁকে বলেন নিরাশদের অন্তর্ভুক্ত না হতে; 15:56 আয়াতে তাঁর জবাব — পথভ্রষ্টরা ছাড়া কেউ তার রবের রহমত থেকে নিরাশ হয় না। তারপর 15:58-60 আয়াতে সেই একই বার্তাবাহকরা বলেন, তাঁদের এক অপরাধী জাতির কাছে পাঠানো হয়েছে, আর লূত (আঃ)-এর পরিবারকে রক্ষা করা হবে। একটিই সফর, দুটি পরিণতি — আর যে ক্রমে আয়াত দুটি সেগুলো দিয়েছিল ঠিক সেই ক্রমে।"
          }
        ]
      },
      {
        "h": {
          "en": "Being Told and Telling",
          "bn": "জানা ও জানানো"
        },
        "p": [
          {
            "en": "The verse contains two positions, and most readers occupy both. Someone is commanded to inform; someone is to be informed. Anyone who teaches, who raises children, who answers a question after a lesson, or who sits with a person convinced his own case is closed has been handed the content of what to say. It is not a technique or a form of words. It is two names, with the emphasis left in place.",
            "bn": "আয়াতটির ভেতরে দুটি অবস্থান আছে, আর অধিকাংশ পাঠকই দুটিতেই থাকে। একজনকে জানানোর আদেশ দেওয়া হয়েছে; আরেকজনকে জানানো হবে। যে শেখায়, যে সন্তান মানুষ করে, যে পাঠের শেষে কোনো প্রশ্নের উত্তর দেয়, কিংবা যে এমন মানুষের পাশে বসে যিনি নিশ্চিত যে তাঁর মামলা বন্ধ হয়ে গেছে — তাঁর হাতে কী বলতে হবে তার বিষয়বস্তু তুলে দেওয়া হয়েছে। এটি কোনো কৌশল নয়, কোনো বাঁধা বুলিও নয়। এটি দুটি নাম, তাদের জোরটুকু অক্ষত রেখে।"
          },
          {
            "en": "Despair rarely announces itself as despair. It usually looks like avoidance: not praying because the prayer feels dishonest, not attending because of who might be there, not asking because the answer is assumed. This verse takes the assumption away, and 15:50 keeps the correction from swinging into carelessness. A servant who holds both verses at once approaches Allah expecting to be received, and does not treat that expectation as permission.",
            "bn": "হতাশা খুব কমই নিজেকে হতাশা বলে ঘোষণা করে। সাধারণত তাকে দেখায় এড়িয়ে চলার মতো: নামায না পড়া, কারণ নামাযটাকে অসৎ মনে হয়; না যাওয়া, কারণ সেখানে কে থাকতে পারে; জিজ্ঞেস না করা, কারণ উত্তরটা ধরেই নেওয়া হয়েছে। এই আয়াত সেই ধরে নেওয়াটা সরিয়ে দেয়, আর 15:50 আয়াত সংশোধনটিকে বেপরোয়াপনার দিকে ঝুঁকে পড়তে দেয় না। যে বান্দা দুটি আয়াতই একসঙ্গে ধরে রাখে, সে গ্রহণ করা হবে এই প্রত্যাশা নিয়ে আল্লাহর কাছে আসে, আর সেই প্রত্যাশাকে অনুমতি বলে গণ্য করে না।"
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
            "bn": "কাহিনি শুরু হওয়ার কয়েক লাইন আগে সূরা আল-হিজর নবী ﷺ-কে দুটি জিনিস ঘোষণা করতে বলে। 15:49 আয়াতে তাঁকে বলা হয় আল্লাহর বান্দাদের জানাতে যে তিনি ক্ষমাশীল, দয়ালু; আর 15:50 আয়াতে জানাতে যে তাঁর শাস্তিই যন্ত্রণাদায়ক শাস্তি। ঠিক পরের আয়াত 15:51 শুরু হয় এভাবে — আর তাদের ইবরাহীমের অতিথিদের কথা জানাও। ঘোষণাটি দেওয়া হয়, তারপর তা দেখিয়ে দেওয়া হয়।"
          },
          {
            "en": "Both halves are illustrated in one visit. The same messengers who bring Ibrahim (AS) the news of a son bring destruction to the people of Lut (AS), as they say themselves in 15:58 and after. So Ibrahim's sentence about despair is not spoken in a vacuum. It is spoken inside a passage that has just insisted mercy and punishment are both real and both His.",
            "bn": "একটিমাত্র সফরেই দুটি অর্ধেকই দেখানো হয়। যে ফেরেশতারা ইবরাহীম (আঃ)-এর কাছে পুত্রের সুসংবাদ আনেন, তারাই লূত (আঃ)-এর জাতির কাছে ধ্বংস নিয়ে যান, যা তারা নিজেরাই 15:58 আয়াতে ও তার পরে বলেন। তাই নিরাশা নিয়ে ইবরাহীমের বাক্যটি শূন্যতায় উচ্চারিত নয়। এটি এমন এক অনুচ্ছেদের ভেতরে উচ্চারিত, যা সবেমাত্র জোর দিয়ে বলেছে — রহমত ও শাস্তি দুটোই বাস্তব এবং দুটোই তাঁর।"
          }
        ]
      },
      {
        "h": {
          "en": "What Was Actually Said",
          "bn": "আসলে কী বলা হয়েছিল"
        },
        "p": [
          {
            "en": "The visitors enter and say peace, and he answers that he is apprehensive of them, both within 15:52 itself. In 15:53 they tell him not to fear and give him good news of a learned boy. His reply in 15:54 is the hinge: have you given me good news although old age has come upon me, then of what do you give news? They answer in 15:55 that the news is given in truth, so do not be of the despairing.",
            "bn": "অতিথিরা ঢোকেন এবং সালাম বলেন, আর তিনি জবাবে বলেন যে তিনি তাঁদের ব্যাপারে শঙ্কিত — দুটোই 15:52 আয়াতের ভেতরেই। তাঁরা তাঁকে ভয় না পেতে বলেন এবং 15:53 আয়াতে এক জ্ঞানী পুত্রের সুসংবাদ দেন। 15:54 আয়াতে তাঁর জবাবটিই মোড় ঘোরানো জায়গা: তোমরা আমাকে সুসংবাদ দিচ্ছ যখন বার্ধক্য আমাকে স্পর্শ করেছে, তাহলে কিসের সুসংবাদ দিচ্ছ? তাঁরা 15:55 আয়াতে জবাব দেন যে সুসংবাদটি সত্য সহকারেই দেওয়া হয়েছে, কাজেই নিরাশদের অন্তর্ভুক্ত হয়ো না।"
          },
          {
            "en": "That last phrase is the one to hold on to, because Ibrahim (AS) answers it with its own word. The angels use the participle al-qanitin, the despairing ones — from the root with the emphatic ta, not the qanitin of devout obedience in 33:35 — and he replies with the verb from the same root, yaqnatu. His answer is seven words in the Arabic, and it is a question rather than a defence: and who despairs of the mercy of his Lord except those who are astray? He does not say he was not despairing. He says that the category does not fit a person who knows his Lord.",
            "bn": "শেষ বাক্যাংশটিই ধরে রাখার মতো, কারণ ইবরাহীম (আঃ) তার জবাব দেন সেই শব্দটি দিয়েই। ফেরেশতারা ব্যবহার করেন ইসমে ফা'ইল 'আল-ক্বানিত্বীন' — নিরাশ ব্যক্তিরা; শব্দটি ত্ব-যুক্ত ধাতু থেকে, যা 33:35 আয়াতের আনুগত্যবাচক 'আল-ক্বানিতীন' নয়; তিনি জবাব দেন একই ধাতুমূলের ক্রিয়াপদ 'ইয়াক্বনাতু' দিয়ে। তাঁর জবাবটি আরবিতে সাতটি শব্দের, আর তা আত্মপক্ষ সমর্থন নয়, একটি প্রশ্ন: পথভ্রষ্টরা ছাড়া আর কে তার প্রতিপালকের রহমত থেকে নিরাশ হয়? তিনি বলেন না যে তিনি নিরাশ ছিলেন না। তিনি বলেন, যে নিজের রবকে চেনে তার গায়ে এই শ্রেণিটি লাগে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Wonder Is Not Doubt",
          "bn": "বিস্ময় সংশয় নয়"
        },
        "p": [
          {
            "en": "It is easy to misread his question in 15:54 as hesitation. The commentators, Ibn Kathir and al-Qurtubi among them, read it as astonishment at the size of the gift rather than doubt about the Giver. His own reply in 15:56 settles the matter, since a man defending himself against a charge of despair would answer differently. He does not plead his record; he states a rule about who despairs, and lets the rule speak for him.",
            "bn": "15:54 আয়াতে তাঁর প্রশ্নটিকে দ্বিধা হিসেবে ভুল পড়া সহজ। মুফাসসিরগণ, তাঁদের মধ্যে ইবনে কাসীর ও আল-কুরতুবী, এটিকে পড়েন দাতার ব্যাপারে সংশয় হিসেবে নয়, বরং দানের বিশালতায় বিস্ময় হিসেবে। 15:56 আয়াতে তাঁর নিজের জবাবই বিষয়টি মীমাংসা করে দেয়, কারণ নিরাশার অভিযোগ থেকে আত্মরক্ষা করতে চাওয়া মানুষ অন্যভাবে জবাব দিত। তিনি নিজের রেকর্ড পেশ করেন না; তিনি কে নিরাশ হয় তার একটি নিয়ম বলে দেন, আর নিয়মটিকেই নিজের হয়ে কথা বলতে দেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Despair Named as Straying",
          "bn": "নিরাশাকে পথভ্রষ্টতা বলা"
        },
        "p": [
          {
            "en": "The word he uses, qunut with the emphatic ta — not the qunut of devotion recited in witr — is not ordinary sadness. It is the settled conclusion that there is no way through — the closing of a case. And the only people he allows into that category are ad-dallun, those who have gone off the road. That is a diagnosis, not an insult. Despair is treated as a navigational error: a person who has concluded that Allah's mercy has run out has misjudged where he is and what is around him.",
            "bn": "তিনি যে শব্দটি ব্যবহার করেন, 'ক্বুনূত্ব' (ত্ব দিয়ে — বিতরের দোয়ায়ে কুনূতের 'কুনূত' নয়), তা সাধারণ দুঃখ নয়। এটি সেই স্থির সিদ্ধান্ত যে আর কোনো পথ নেই — মামলাটি বন্ধ করে দেওয়া। আর এই শ্রেণিতে তিনি কেবল 'আদ-দাল্লীন' — যারা পথ থেকে সরে গেছে — তাদেরই ঢুকতে দেন। এটি অপমান নয়, রোগনির্ণয়। নিরাশাকে দেখা হয় পথ চেনার ভুল হিসেবে: যে সিদ্ধান্তে পৌঁছেছে যে আল্লাহর রহমত ফুরিয়ে গেছে, সে ভুল হিসাব করেছে সে কোথায় আছে আর তার চারপাশে কী আছে।"
          },
          {
            "en": "The same judgement is passed once more, in Ya'qub's instruction to his sons at 12:87, and the same word is forbidden outright in the address to those who have gone to excess against themselves at 39:53, both of which this app treats at length in their own articles. What is distinctive here is the speaker and the situation. The other two are spoken to people already in grief or in guilt. This one is spoken by a man receiving good news, which is when the rule is easiest to state and hardest to remember later.",
            "bn": "একই রায় আরও একবার দেওয়া হয় — 12:87 আয়াতে ইয়াকুবের পুত্রদের প্রতি নির্দেশে; আর একই শব্দটি সরাসরি নিষেধ করা হয় 39:53 আয়াতে নিজেদের ওপর বাড়াবাড়ি করা লোকদের প্রতি সম্বোধনে; এই অ্যাপ দুটিকেই আলাদা লেখায় বিস্তারিত আলোচনা করেছে। এখানে যা স্বতন্ত্র তা হলো বক্তা ও পরিস্থিতি। ওই দুটি বলা হয়েছে এমন মানুষদের, যারা ইতিমধ্যেই শোকে বা অপরাধবোধে আছে। এটি বলছেন এমন একজন, যিনি সুসংবাদ পাচ্ছেন — আর তখনই নিয়মটি বলা সবচেয়ে সহজ এবং পরে মনে রাখা সবচেয়ে কঠিন।"
          }
        ]
      },
      {
        "h": {
          "en": "Saying It Before You Need It",
          "bn": "প্রয়োজনের আগেই বলে রাখা"
        },
        "p": [
          {
            "en": "That is the practical use of this verse. Despair rarely announces itself as a belief about Allah. It arrives as arithmetic — the age, the years, the diagnosis, the record — and the arithmetic is usually correct. Ibrahim (AS) does not dispute his age. He simply refuses to let the arithmetic decide what Allah will do, because the sum was never the whole of the matter.",
            "bn": "এটিই এই আয়াতের ব্যবহারিক প্রয়োগ। নিরাশা খুব কমই আল্লাহ সম্পর্কে একটি বিশ্বাস হিসেবে নিজের পরিচয় দেয়। এটি আসে হিসাব হয়ে — বয়স, বছরগুলো, রোগনির্ণয়, অতীতের খাতা — আর হিসাবটি সাধারণত ঠিকই থাকে। ইবরাহীম (আঃ) নিজের বয়স নিয়ে তর্ক করেন না। তিনি কেবল হিসাবটিকে এই সিদ্ধান্ত নিতে দেন না যে আল্লাহ কী করবেন, কারণ যোগফলটি কখনোই গোটা ব্যাপারটি ছিল না।"
          },
          {
            "en": "So the habit worth building is to state the rule while things are calm, the way he did. Hope in Allah is not optimism about outcomes and it does not require predicting one. It is a settled position about who is in charge of them. A believer may fear, may weep, may see no route at all — and still refuse the one conclusion this verse puts outside the boundary.",
            "bn": "তাই গড়ে তোলার মতো অভ্যাসটি হলো, তিনি যেমন করেছিলেন তেমনি শান্ত সময়েই নিয়মটি বলে রাখা। আল্লাহর ওপর আশা মানে ফলাফল নিয়ে আশাবাদ নয়, আর তা কোনো ফলাফলের ভবিষ্যদ্বাণীও দাবি করে না। এটি একটি স্থির অবস্থান — কে সেগুলোর দায়িত্বে আছেন সে সম্পর্কে। একজন মুমিন ভয় পেতে পারে, কাঁদতে পারে, কোনো পথই দেখতে না পেতে পারে — তবু এই আয়াত যে একটিমাত্র সিদ্ধান্তকে সীমার বাইরে রেখেছে, সেটি সে প্রত্যাখ্যান করে।"
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
            "bn": "আয়াতটি দুটি সত্য স্থাপন করে, তারপর সেগুলো থেকে একটি নির্দেশ টেনে আনে। আমি আসমানসমূহ, যমীন ও এ দুইয়ের মাঝে যা কিছু আছে তা যথার্থ উদ্দেশ্য ছাড়া সৃষ্টি করিনি। আর কিয়ামত অবশ্যই আসবে। এরপর পরিণতিসূচক 'ফা': কাজেই উত্তম পন্থায় উপেক্ষা করো। যুক্তিটি চলে মাঝের বাক্যটির ভেতর দিয়ে। যদি কিছুই অনর্থক সৃষ্টি না হয়ে থাকে এবং হিসাব চুকানোর একটি দিন নির্ধারিত থাকে, তবে মানুষ যে অন্যায়ের শিকার হয় তার কোনোটিই হিসাবের বাইরে থাকবে না — আর নিজে হাতে তা চুকিয়ে নেওয়ার চাপটুকু তখন নেমে যায়।"
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
            "bn": "অবস্থানটি বিষয়টিকে আরও ধারালো করে। 15:80-84-এ সদ্যই বর্ণিত হয়েছে হিজরের অধিবাসীদের কথা — যারা রাসূলদের অস্বীকার করেছিল, যাদের ভোরবেলা এক বিকট আওয়াজ গ্রাস করেছিল, আর যাদের উপার্জন কোনো কাজে আসেনি। উপেক্ষা করার নির্দেশটি আসে ঠিক এমন এক জাতির ধ্বংসের বর্ণনার পরেই, যারা অস্বীকারের কারণে ধ্বংস হয়েছিল। বিন্যাসটি উদ্দেশ্যপ্রণোদিত: যাঁকে নিজের আঘাতগুলো ছেড়ে দিতে বলা হচ্ছে, তাঁকে সদ্যই বিস্তারিতভাবে দেখানো হয়েছে যে হিসাব চুকানোর কাজটি সত্যি, নিখুঁত — এবং তা তাঁর দায়িত্ব নয়।"
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
            "bn": "'সাফহ' এসেছে এমন এক মূল থেকে যা কোনো কিছুর পাশ বা চওড়া তলকে বোঝায় — পৃষ্ঠার সমতল, কিংবা তলোয়ারের ফলার সমতল। সাফহ করা মানে সেই তলটি ঘুরিয়ে দেওয়া: আঘাতের ওপর পৃষ্ঠাটি উল্টে দেওয়া, আর তারপর অপরাধীর দিকে ঠান্ডা মুখে নয়, বরং পরিষ্কার মুখে ফেরা। এ কারণেই কথাটির অনুবাদ একাধিকভাবে হয় — কখনো 'উদারভাবে ক্ষমা করা', কখনো 'উত্তম পন্থায় এড়িয়ে যাওয়া'। শব্দটি সত্যিই এই দুই গতিকেই ধারণ করে।"
          },
          {
            "en": "The Arabic reinforces it by construction. The command is followed by its own cognate noun carrying the definite article, and then by an adjective — fasfahi as-safha al-jamil — a pattern Arabic uses to specify the manner of an act rather than merely to repeat it. So the verse does not ask for overlooking and then add a compliment to it. It names a particular kind of overlooking: the beautiful kind, with no reproach attached and no reminder issued afterwards.",
            "bn": "আরবি গঠনটিও বিষয়টিকে জোরালো করে। নির্দেশের পরেই আসে তারই সমমূল বিশেষ্য, নির্দিষ্টতাবাচক উপসর্গসহ, আর তারপর একটি বিশেষণ — 'ফাসফাহিস সাফহাল জামীল' — আরবিতে এই গঠন কোনো কাজের পুনরাবৃত্তি বোঝাতে নয়, বরং তার ধরন নির্দিষ্ট করতে ব্যবহৃত হয়। অর্থাৎ আয়াত কেবল উপেক্ষা করতে বলে তারপর একটি প্রশংসা জুড়ে দিচ্ছে না। এটি উপেক্ষার একটি বিশেষ ধরনের নাম নিচ্ছে: সেই সুন্দর ধরনটি, যার সঙ্গে কোনো খোঁটা নেই এবং যার পরে কোনো স্মরণ করিয়ে দেওয়া নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "The Beautiful Withdrawals",
          "bn": "সুন্দর প্রত্যাহারগুলো"
        },
        "p": [
          {
            "en": "Jamil is attached to a small family of acts in the Quran, and they share something. 12:18 gives sabrun jamil, beautiful patience, from Ya'qub (AS) when the shirt is brought to him. 73:10 commands hajran jamilan, a gracious withdrawal from what the deniers say. 33:28 and 33:49 use sarahan jamilan for a gracious release in divorce. Each names something a person refrains from doing, and in each case jamil rules out the ugliness that usually accompanies restraint.",
            "bn": "কুরআনে 'জামীল' শব্দটি অল্প কয়েকটি কাজের সঙ্গে যুক্ত হয়েছে, আর সেগুলোর মধ্যে একটি মিল আছে। 12:18-এ আছে 'সবরুন জামীল' — সুন্দর ধৈর্য, যা ইয়াকুব (আঃ) বলেন যখন তাঁর কাছে জামাটি আনা হয়। 73:10-এ নির্দেশ 'হাজরান জামীলা' — অস্বীকারকারীদের কথা থেকে ভদ্রভাবে সরে থাকা। 33:28 ও 33:49-এ 'সারাহান জামীলা' ব্যবহৃত হয়েছে বিবাহবিচ্ছেদে সুন্দরভাবে বিদায় দেওয়ার অর্থে। প্রতিটিই এমন কিছু, যা মানুষ করা থেকে বিরত থাকে; আর প্রতিটি ক্ষেত্রেই 'জামীল' সেই কুৎসিততাকে বাদ দিয়ে দেয় যা সাধারণত সংযমের সঙ্গে জুড়ে থাকে।"
          },
          {
            "en": "The commentators gloss these in the same spirit: patience that is beautiful is patience without complaint poured out to people, and withdrawal that is beautiful is withdrawal without an insult returned. Read that way, jamil is the difference between two things that look identical from outside. One man forgives and mentions it every year afterwards. Another turns the page. Both have dropped the claim; only the second has done what this verse actually asks for.",
            "bn": "মুফাসসিরগণ এগুলোর ব্যাখ্যা একই সুরে করেন: সুন্দর ধৈর্য হলো এমন ধৈর্য যাতে মানুষের কাছে অভিযোগ ঢেলে দেওয়া হয় না, আর সুন্দর প্রত্যাহার হলো এমন সরে আসা যাতে গালির বদলে গালি ফেরত দেওয়া হয় না। এভাবে পড়লে বোঝা যায়, 'জামীল' হলো বাইরে থেকে একরকম দেখতে দুটি জিনিসের মধ্যেকার পার্থক্য। একজন ক্ষমা করে দেয়, তারপর প্রতিবছর সে কথা মনে করিয়ে দেয়। আরেকজন পৃষ্ঠাটি উল্টে দেয়। দুজনেই দাবি ছেড়েছে; কিন্তু এই আয়াত যা চেয়েছে তা কেবল দ্বিতীয়জনই করেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Posture of the Undefended",
          "bn": "এ অসহায়ের ভঙ্গি নয়"
        },
        "p": [
          {
            "en": "Overlooking here is not surrender. Later in the same surah, 15:94 pairs a command to proclaim openly what he was commanded with turning away from the idolaters, and 15:95 adds that We are sufficient for you against the mockers. A man who has been told his defence is handled can afford to stop conducting it. Some of the commentators counted verses of this kind among those superseded by later legislation about fighting; others held that an instruction about character is not the sort of ruling a later verse repeals.",
            "bn": "এখানে উপেক্ষা করা মানে আত্মসমর্পণ নয়। এই সূরারই পরের দিকে 15:94 প্রকাশ্যে ঘোষণা করার নির্দেশের সঙ্গে জুড়ে দেয় মুশরিকদের থেকে মুখ ফিরিয়ে নেওয়ার কথা, আর 15:95 যোগ করে — বিদ্রূপকারীদের বিরুদ্ধে আমিই তোমার জন্য যথেষ্ট। যে মানুষটিকে জানিয়ে দেওয়া হয়েছে যে তার পক্ষসমর্থনের দায়িত্ব অন্য কেউ নিয়েছেন, সে নিজে সেই মামলা চালানো বন্ধ করতে পারে। কিছু মুফাসসির এ ধরনের আয়াতকে পরবর্তী যুদ্ধসংক্রান্ত বিধানের দ্বারা রহিত হওয়া আয়াতের মধ্যে গণ্য করেছেন; অন্যরা বলেছেন, চরিত্র সম্পর্কিত নির্দেশ এমন ধরনের বিধান নয় যা পরের কোনো আয়াত রহিত করে।"
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
            "bn": "আয়াতটি মূল্যের ব্যাপারে সৎ। সাফহ-এর জন্য এমন ভান করার দরকার নেই যে আঘাতটি ঘটেনি কিংবা তা গুরুত্বপূর্ণ ছিল না; কুরআন কোথাও কাউকে নিজের কাছে মিথ্যা বলতে বলে না। এতে প্রয়োজন কেবল এটুকু যে পৃষ্ঠাটি উল্টে দিতে হবে এবং উল্টানো অবস্থাতেই রাখতে হবে — যা আরও কঠিন, কারণ ক্ষোভ কাজে লাগে; তা মানুষকে নিজের কাছে ব্যাখ্যা করে আর অনেক কিছুর অজুহাত জোগায়। 42:40 প্রস্তাবটি স্পষ্ট করে বলে: যে ক্ষমা করে ও অবস্থা সংশোধন করে, তার প্রতিদান আল্লাহর কাছে।"
          },
          {
            "en": "Three verses later, the surah shows what a heart with the page turned is free to do. 15:88 tells the Prophet ﷺ not to stretch his eyes toward what others have been given, not to grieve over them, and to lower his wing to the believers. Resentment and envy occupy the same room in a person. Clear it, and the attention goes where the verse sends it, to the people who are actually standing with you.",
            "bn": "তিন আয়াত পরেই সূরাটি দেখায়, যে হৃদয় পৃষ্ঠা উল্টে দিয়েছে সে কী করতে মুক্ত। 15:88 নবী ﷺ-কে বলে, অন্যদের যা দেওয়া হয়েছে তার দিকে চোখ বাড়িয়ে না তাকাতে, তাদের জন্য দুঃখ না করতে, আর মুমিনদের প্রতি নিজের ডানা নামিয়ে দিতে। ক্ষোভ আর হিংসা মানুষের ভেতরে একই ঘরে থাকে। ঘরটি খালি করুন, তখন মনোযোগ সেদিকেই যাবে যেদিকে আয়াত পাঠাচ্ছে — যারা সত্যিই আপনার পাশে দাঁড়িয়ে আছে তাদের দিকে।"
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
            "bn": "সূরা আল-হিজর শেষ হয় আরবিতে মাত্র পাঁচটি শব্দে: আর তোমার রবের ইবাদত করতে থাকো যতক্ষণ না তোমার কাছে সুনিশ্চিত বিষয়টি আসে। চাপে থাকা একজন মানুষকে পরপর দেওয়া তিনটি নির্দেশের এটি তৃতীয়। 15:97 সমস্যাটি বলে — আমি তো জানিই, তারা যা বলে তাতে তোমার বুক সংকুচিত হয়। 15:98 প্রথম দুটি প্রতিকার দেয়: কাজেই তোমার রবের প্রশংসাসহ তাসবীহ পড়ো, আর সিজদাকারীদের অন্তর্ভুক্ত হও। এরপর এই আয়াত প্রতিকারটিকে সংকট ছাড়িয়ে গোটা জীবনের ওপর বিস্তৃত করে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Al-Yaqin Is Death",
          "bn": "'আল-ইয়াকীন' মানে মৃত্যু"
        },
        "p": [
          {
            "en": "The mufassirun are agreed that al-yaqin here means death, and the Quran settles the question with its own usage. In 74:46-47 the people of the Fire recount their old habits and say that they used to deny the Day of Recompense until al-yaqin came to them. They are speaking from after it, so what arrived was death. The verb in our verse points the same way: ya'tiyaka, it comes to you — an arrival from outside, not a state a person reaches by his own effort.",
            "bn": "মুফাসসিরগণ একমত যে এখানে 'আল-ইয়াকীন' অর্থ মৃত্যু, আর কুরআন নিজের ব্যবহারেই বিষয়টি নিষ্পত্তি করে দেয়। 74:46-47-এ জাহান্নামীরা তাদের পুরোনো অভ্যাসের কথা বলে জানায় যে তারা প্রতিদান দিবসকে অস্বীকার করত, যতক্ষণ না তাদের কাছে 'আল-ইয়াকীন' এসে পৌঁছায়। তারা কথা বলছে সেটি পেরিয়ে আসার পর, কাজেই যা এসেছিল তা মৃত্যু। আমাদের আয়াতের ক্রিয়াপদটিও একই দিকে ইঙ্গিত করে: 'ইয়া'তিয়াকা' — তা তোমার কাছে আসে; অর্থাৎ বাইরে থেকে আসা কিছু, নিজের চেষ্টায় পৌঁছানো কোনো অবস্থা নয়।"
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
            "bn": "বিষয়টি আকীদাগতভাবে গুরুতর, কারণ এর ওপর একটি ভুল পাঠ দাঁড় করানো হয়েছে। 'আল-ইয়াকীন' যদি আধ্যাত্মিক প্রাপ্তির অর্থে 'নিশ্চয়তা' বোঝাত, তবে 'হাত্তা' অর্থাৎ 'যতক্ষণ না' শব্দটির কারণে ইবাদত সেই মুহূর্তেই শেষ হয়ে যেত যখন কেউ ভাবত সে পৌঁছে গেছে, আর নামায হয়ে যেত এমন এক সিঁড়ি যা উঠে গিয়ে লাথি মেরে ফেলে দেওয়া যায়। আলিমগণ এই পাঠ সরাসরি প্রত্যাখ্যান করেন। কিতাব ও সুন্নাহর কোথাও কোনো মর্যাদার কারণে কাউকে ইবাদতের দায়িত্ব থেকে অব্যাহতি দেওয়া হয়নি; এই দায়িত্ব শেষ হয় জীবনের সঙ্গে, আর অন্য কিছুতে নয়।"
          },
          {
            "en": "The refutation is also biographical. The most certain of creation was the Prophet ﷺ, who saw what nobody else saw and was told that his sins were forgiven, and he did not reduce his worship by a single prayer. Al-Bukhari narrates from Aisha (RA) that during the illness of which he died he directed that Abu Bakr (RA) should lead the people in prayer; the ordering of the prayer was among his concerns while he was dying. Certainty deepened the worship. It never replaced it.",
            "bn": "খণ্ডনটি জীবনীগতও। সৃষ্টির মধ্যে সবচেয়ে নিশ্চিত জ্ঞানের অধিকারী ছিলেন নবী ﷺ, যিনি এমন কিছু দেখেছেন যা আর কেউ দেখেনি এবং যাঁকে জানানো হয়েছিল যে তাঁর গুনাহ ক্ষমা করে দেওয়া হয়েছে; অথচ তিনি নিজের ইবাদত এক ওয়াক্তও কমাননি। ইমাম বুখারী আয়িশা (রাঃ) থেকে বর্ণনা করেন, যে অসুখে তাঁর ইন্তেকাল হয় সেই অসুস্থতার সময় তিনি নির্দেশ দেন যে আবু বকর (রাঃ) মানুষকে নিয়ে নামায পড়াবেন; মৃত্যুশয্যাতেও নামাযের ব্যবস্থাপনা ছিল তাঁর চিন্তার বিষয়। নিশ্চয়তা ইবাদতকে গভীর করেছে, কখনো তার বিকল্প হয়নি।"
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
            "bn": "নির্দেশে বলা হয়েছে 'রাব্বাকা' — তোমার রব, যিনি তোমাকে প্রতিপালন করেছেন, রিযিক দিয়েছেন ও সংশোধন করেছেন — কেবল মহিমার কোনো নাম নয়। আর 'ইবাদত' আনুষ্ঠানিক আমলের চেয়ে বিস্তৃত। আলিমগণ একে সংজ্ঞায়িত করেন এভাবে: প্রতিটি কথা ও কাজ, প্রকাশ্য ও গোপন, যা আল্লাহ ভালোবাসেন ও যাতে তিনি সন্তুষ্ট। এ কারণেই সারাজীবনব্যাপী এই নির্দেশ পিষে ফেলার মতো নয়, বরং পালনযোগ্য। 51:56 এই একই ব্যাপ্তিকেই জিন ও মানুষ সৃষ্টির ঘোষিত উদ্দেশ্য বানিয়ে দেয়।"
          },
          {
            "en": "6:162 shows what that breadth looks like when a believer says it about himself: my prayer, my rites, my living and my dying are for Allah, Lord of the worlds. Living is placed in the same list as prayer. Under that definition, the years in which a person can no longer stand for prayer are not years off; illness, old age and a failing memory still leave dhikr, du'a, patience and intention, all of which the verse's own word covers.",
            "bn": "6:162 দেখায়, একজন মুমিন যখন নিজের সম্পর্কে কথাটি বলেন তখন সেই ব্যাপ্তি কেমন দেখায়: আমার নামায, আমার কুরবানি, আমার জীবন ও আমার মৃত্যু — সবই বিশ্বজগতের প্রতিপালক আল্লাহর জন্য। বেঁচে থাকাকে রাখা হয়েছে নামাযের সঙ্গে একই তালিকায়। এই সংজ্ঞা অনুযায়ী, যে বছরগুলোতে মানুষ আর দাঁড়িয়ে নামায পড়তে পারে না সেগুলো ছুটির বছর নয়; অসুস্থতা, বার্ধক্য আর দুর্বল হয়ে আসা স্মৃতির পরেও থেকে যায় যিকর, দুআ, ধৈর্য ও নিয়ত — আয়াতের শব্দটি এগুলোর সবই ধারণ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Deadline Nobody Misses",
          "bn": "যে সময়সীমা কেউ এড়ায় না"
        },
        "p": [
          {
            "en": "There is a mercy in the wording that is easy to miss. The command has a terminus. It is not endless; it runs to a fixed point, and that point arrives on its own without being sought or scheduled by anyone. Read against 3:102, which tells the believers not to die except as Muslims, the two verses meet. Since the hour is not ours to choose, the only reliable way to end well is to be found doing this continuously.",
            "bn": "শব্দচয়নের ভেতরে এমন এক রহমত আছে যা সহজেই চোখ এড়ায়। নির্দেশটির একটি শেষবিন্দু আছে। এটি অন্তহীন নয়; এটি চলে একটি নির্ধারিত বিন্দু পর্যন্ত, আর সেই বিন্দুটি কারও খোঁজা বা সময়সূচি ঠিক করা ছাড়াই নিজে থেকেই এসে পড়ে। 3:102-এর পাশে রেখে পড়ুন, যেখানে মুমিনদের বলা হয়েছে মুসলিম অবস্থা ছাড়া মৃত্যুবরণ না করতে — তখন দুই আয়াত এক জায়গায় মেলে। সময়টি যেহেতু আমাদের বেছে নেওয়ার নয়, তাই ভালোভাবে শেষ করার একমাত্র নির্ভরযোগ্য উপায় হলো এই কাজেই ধারাবাহিকভাবে নিয়োজিত অবস্থায় ধরা পড়া।"
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
            "bn": "এই আয়াত যে ব্যবহারিক প্রশ্নটি সামনে আনে তা হলো — এ মাসে কেউ কতটা করতে পারে তা নয়, বরং ত্রিশ বছর পরেও সে কোন কাজটি করে যাচ্ছে। এতে উচ্চাভিলাষ নেমে আসে আর ধারাবাহিকতা উঁচুতে ওঠে। প্রতিদিনের একটি নির্দিষ্ট কুরআন তিলাওয়াতের অংশ যা খারাপ সপ্তাহেও টিকে থাকে, ফরয নামাযগুলো তার নির্ধারিত সময়ে রক্ষা করা, একটি দান যা উদ্দীপনার ওপর নির্ভর করে না — এগুলোই সেই আমল, যেগুলোর গড়ন এমন এক নির্দেশের উপযোগী যার কোনো মেয়াদ শেষ হওয়ার তারিখ নেই।"
          },
          {
            "en": "And the surah's own arrangement is worth keeping. When the chest tightened from what people were saying, the answer given was not withdrawal but tasbih, prostration and continued worship. Difficulty is not a reason to suspend the practice; in this passage it is the occasion for it. Whoever holds to the deed on the days it feels useless has understood the word until in the way this verse meant it.",
            "bn": "আর সূরার নিজস্ব বিন্যাসটিও ধরে রাখার মতো। মানুষের কথায় যখন বুক সংকুচিত হয়ে আসছিল, তখন যে উত্তর দেওয়া হয়েছিল তা গুটিয়ে যাওয়া নয় — বরং তাসবীহ, সিজদা ও ইবাদত চালিয়ে যাওয়া। কষ্ট আমল স্থগিত করার কারণ নয়; এই অংশে কষ্টই বরং আমলের উপলক্ষ। যিনি সেই দিনগুলোতেও আমল ধরে রাখেন যেদিন তা নিষ্ফল মনে হয়, তিনিই 'যতক্ষণ না' কথাটি সেই অর্থে বুঝেছেন যে অর্থে এই আয়াত তা বলেছে।"
          }
        ]
      }
    ]
  }
});
