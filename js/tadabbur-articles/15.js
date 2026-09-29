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
  "15:22": {
    "sections": [
      {
        "h": {
          "en": "The Rule Shown in Water",
          "bn": "পানির ভেতরে দেখানো নিয়ম"
        },
        "p": [
          {
            "en": "Wa-arsalna al-riyaha lawaqiha: and We sent the winds lawaqih. The verse sits inside a run of signs that begins with the sky of 15:16 and comes down to the earth of 15:19 and 15:20, spread out, pinned with mountains and made to hold a living for people and for creatures they do not feed. Then 15:21 states the rule behind all of it: there is nothing whose treasuries are not with Allah, and He sends it down only in a known measure. This verse shows that rule at work in one substance, water.",
            "bn": "ওয়া আরসালনার রিয়াহা লাওয়াকিহা: আর আমি লাওয়াকিহ বাতাস পাঠিয়েছি। আয়াতটি নিদর্শনের একটি ধারার ভেতরে বসানো। ধারাটা শুরু হয় ১৫:১৬ আয়াতের আকাশ দিয়ে, তারপর নেমে আসে ১৫:১৯ ও ১৫:২০ আয়াতের পৃথিবীতে। সে পৃথিবী বিছানো, পাহাড় দিয়ে গাঁথা, আর তাতে মানুষের জীবিকা আছে, আছে এমন প্রাণীরও যাদের রিযিক মানুষ দেয় না। এরপর ১৫:২১ আয়াত সবকিছুর পেছনের নিয়মটা বলে দেয়: এমন কিছু নেই যার ভান্ডার আল্লাহর কাছে নেই, আর তিনি তা নামান নির্দিষ্ট পরিমাণে। আমাদের আয়াত সেই নিয়মকেই দেখায় একটিমাত্র জিনিসে, পানিতে।"
          },
          {
            "en": "The commentaries group this passage in different ways. The abridged English Ibn Kathir treats 15:21 to 15:25 as one block, and Ma'arif al-Qur'an takes 15:22 and 15:23 together; this article uses only what they say about 15:22. For 15:21, the same block records Abdullah ibn Mas'ud saying that no year has more rain than another, but Allah divides it among places as He wills. And 15:23 turns straight from water to life itself: it is We who give life and cause death, and We are the inheritors.",
            "bn": "তাফসীরগুলো এ অংশকে ভিন্ন ভিন্নভাবে একসঙ্গে ধরেছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ ১৫:২১ থেকে ১৫:২৫ পর্যন্ত এক খণ্ডে আলোচনা করে, আর মাআরিফুল কুরআন ১৫:২২ ও ১৫:২৩ একসঙ্গে নেয়। এ লেখায় তাদের কেবল সেই কথাগুলোই এসেছে যা ১৫:২২ নিয়ে। ১৫:২১ প্রসঙ্গে একই খণ্ডে আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর কথা আছে: কোনো বছরে অন্য বছরের চেয়ে বেশি বৃষ্টি হয় না, আল্লাহ যেভাবে চান জায়গায় জায়গায় ভাগ করে দেন। আর ১৫:২৩ আয়াত পানি থেকে সোজা চলে যায় জীবনের কথায়: আমিই জীবন দিই, মৃত্যু ঘটাই, আর আমিই শেষ উত্তরাধিকারী।"
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
            "bn": "লাওয়াকিহ শব্দটি লাকিহ-এর বহুবচন। জটিলতা শব্দের গড়নে। উটনী গর্ভ ধারণ করলে, বাচ্চা পেটে বহন করলে তাকে বলা হয় লাকিহ। বাগাভী ও কুরতুবী শব্দটিকে এভাবেই ব্যাখ্যা করেন। অথচ গর্ভসঞ্চার তো করে বাতাস নিজে। তাহলে প্রত্যাশিত শব্দ ছিল মুলকিহ, যে গর্ভসঞ্চার করায়। তাবারী জানান, ব্যাকরণবিদেরা এ নিয়ে তর্ক করেছেন। যে জিনিস অন্যকে বহন করায়, কুরআন তাকে বহনকারীর শব্দে কেন বর্ণনা করল?"
          },
          {
            "en": "Then at-Tabari gives his own view: the winds are lawaqih as Allah described them, and they carry and fertilise at once. Their carrying is that they bear the water; their fertilising is their work on the clouds and the trees, and he says this is what Ibn Mas'ud meant. Al-Qurtubi reaches a similar place by another road. After listing carrying, fertilising and possessing fertility, he says that all of it is sound.",
            "bn": "এরপর তাবারী নিজের মত দেন। আল্লাহ বাতাসকে যেমন বর্ণনা করেছেন, সে তেমনই লাওয়াকিহ। সে একসঙ্গে বহনও করে, উর্বরও করে। তার বহন করা মানে পানি ধারণ করা। আর তার উর্বর করা মানে মেঘ ও গাছের উপর তার কাজ। তাঁর মতে ইবন মাসউদ (রাঃ) এ কথাই বুঝিয়েছেন। কুরতুবী অন্য পথে প্রায় একই জায়গায় পৌঁছান। বহন, উর্বরকরণ আর উর্বরতার অধিকারী হওয়া, তিনটি অর্থ তুলে ধরে তিনি বলেন, সবগুলোই সঠিক।"
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
            "bn": "বাতাস কাকে উর্বর করে, এ প্রশ্নে প্রথম যুগের বর্ণনাগুলো ভাগ হয়ে যায়। মেঘের পক্ষে তাবারী আনেন ইবন মাসউদ (রাঃ)-এর কথা: আল্লাহ বাতাস পাঠান, বাতাস পানি বয়ে আনে আর মেঘকে দোহন করে। তখন মেঘ ঝরতে থাকে, যেভাবে দুধেল উটনীর দুধ ঝরে, তারপর বৃষ্টি নামে। ইবরাহীম নাখাঈ শুধু বলেন, বাতাস মেঘকে উর্বর করে। কাতাদাহর মতে সে মেঘের ভেতরের পানিকে উর্বর করে। দাহহাক বলেন, আল্লাহ বাতাসকে মেঘের উপর পাঠান, সে মেঘকে উর্বর করে, আর মেঘ পানিতে ভরে যায়।"
          },
          {
            "en": "For the trees, Ubayd ibn Umayr describes four winds in turn. Allah sends the bringer of good news, which sweeps the ground; then the raiser, which stirs up clouds; then the joiner, which gathers them together; then the lawaqih, which fertilise the trees. Then he recited this verse. Al-Baghawi reports Abu Ubayda reading lawaqih as malaqih because they fertilise trees. At-Tabari has al-Hasan saying the winds are lawaqih for the trees, and, when asked about the clouds, adding that they are for the clouds too, working them until it rains.",
            "bn": "গাছের পক্ষে উবাইদ ইবন উমাইর পরপর চারটি বাতাসের কথা বলেন। আল্লাহ প্রথমে পাঠান সুসংবাদবাহী বাতাস, যা মাটি ঝাড়ু দিয়ে যায়। তারপর উত্তোলক বাতাস, যা মেঘ জাগিয়ে তোলে। তারপর মিলনকারী বাতাস, যা মেঘগুলোকে জোড়া লাগায়। শেষে লাওয়াকিহ, যা গাছকে উর্বর করে। এরপর তিনি এ আয়াত তেলাওয়াত করেন। বাগাভী জানান, আবু উবাইদা লাওয়াকিহ-কে মালাকিহ অর্থে পড়েছেন, কারণ বাতাস গাছকে উর্বর করে। তাবারীর বর্ণনায় হাসান বলেন, বাতাস গাছের জন্য লাওয়াকিহ। মেঘের কথা জিজ্ঞেস করা হলে তিনি যোগ করেন, মেঘের জন্যও, বাতাস মেঘকে দোহন করে যতক্ষণ না বৃষ্টি নামে।"
          },
          {
            "en": "Several later voices hold both sides together. At-Tabari reports Ibn Abbas, through Ibn Jurayj, saying the winds fertilise the trees and work the clouds. Ibn Kathir opens his comment the same way: they fertilise the clouds so that they yield water, and the trees so that they open into leaves and blossoms. Al-Muyassar says so as well and adds that the winds carry rain, good and benefit. As-Sa'di keeps to the clouds, calling them winds of mercy that fertilise the clouds as the male fertilises the female.",
            "bn": "পরের অনেকে দুটো দিককে একসঙ্গে ধরেন। তাবারী ইবন জুরাইজের সূত্রে ইবন আব্বাস (রাঃ)-এর কথা আনেন: বাতাস গাছকে উর্বর করে, আর মেঘকে দোহন করে। ইবন কাসীরও তাঁর আলোচনা এভাবেই শুরু করেন: বাতাস মেঘকে উর্বর করে, তাই মেঘ পানি ঝরায়; আর গাছকে উর্বর করে, তাই গাছে পাতা আর কলি ফোটে। মুয়াসসারও তা-ই বলে, সঙ্গে যোগ করে যে বাতাস বৃষ্টি, কল্যাণ আর উপকার বয়ে আনে। সা'দী মেঘের কথাতেই থাকেন। তাঁর ভাষায় এগুলো রহমতের বাতাস, যা মেঘকে উর্বর করে যেভাবে পুরুষ স্ত্রীকে করে।"
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
            "bn": "ইবন কাসীর বিশেষ্যের বচনের দিকে নজর দেন। এখানে বাতাস এসেছে বহুবচনে, যাতে তা থেকে কিছু জন্মাতে পারে। অথচ ৫১:৪১ আয়াতের বন্ধ্যা বাতাস একবচনে, আর তাকে বন্ধ্যা বলা হয়েছে, কারণ কিছু জন্মাতে দুই বা তার বেশি লাগে। বাগাভী বলেন, বন্ধ্যা বাতাস আযাব নিয়ে আসে, কিছুই উর্বর করে না। তাবারীর বর্ণনায় কাতাদাহ এক বাক্যে বলেন: বাতাসের কিছু আযাব, কিছু রহমত। কিরাআত প্রসঙ্গে কুরতুবী জানান, বেশিরভাগ কারী পড়েন আর-রিয়াহ, আর হামযাহ পড়েন আর-রীহ। তিনি ও তাবারী দুজনেই বুঝিয়ে দেন, একবচনের বাতাসও বহুবচনের অর্থ বহন করতে পারে।"
          },
          {
            "en": "No sound hadith in the fetched commentaries is attached to this verse. At-Tabari narrates from Abu Hurayra that the south wind is from Paradise and is the fertilising wind Allah mentions in His Book, but Ibn Kathir, quoting the same report, calls its chain weak, and this article does not build on it. What can be offered is a general narration, not tied to this verse, about how the Prophet ﷺ met the wind.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, তাতে এ আয়াতের সঙ্গে যুক্ত কোনো সহীহ হাদীস নেই। তাবারী আবু হুরাইরা (রাঃ) থেকে বর্ণনা করেন যে দক্ষিণা বাতাস জান্নাত থেকে আসে, আর এটিই সেই উর্বরকারী বাতাস যার কথা আল্লাহ তাঁর কিতাবে বলেছেন। কিন্তু একই বর্ণনা উদ্ধৃত করে ইবন কাসীর বলেন, এর সনদ দুর্বল। তাই এ লেখা এর উপর দাঁড়ায় না। যা দেওয়া যায় তা একটি সাধারণ বর্ণনা, এ আয়াতের সঙ্গে সরাসরি যুক্ত নয়। বাতাস এলে নবী ﷺ কীভাবে তার মুখোমুখি হতেন, সে কথা।"
          },
          {
            "en": "Muslim records from A'isha: \"Whenever the wind was stormy, the Messenger of Allah (ﷺ) used to say: O Allah! I ask Thee for what is good in it, and the good which it contains, and the good of that which it was sent for. I seek refuge with Thee from what is evil in it, what evil it contains, and the evil of that what it was sent for.\" The same report goes on to describe his relief when the rain actually came.",
            "bn": "মুসলিম আয়িশা (রাঃ) থেকে বর্ণনা করেন: “যখনই ঝড়ো বাতাস বইত, রাসূলুল্লাহ ﷺ বলতেন: হে আল্লাহ! আমি তোমার কাছে চাই এর কল্যাণ, এর ভেতরে যে কল্যাণ আছে তা, আর যে কল্যাণ নিয়ে একে পাঠানো হয়েছে তা। আর তোমার কাছে আশ্রয় চাই এর অকল্যাণ থেকে, এর ভেতরের অকল্যাণ থেকে, আর যে অকল্যাণ নিয়ে একে পাঠানো হয়েছে তা থেকে।” একই বর্ণনায় এরপর আছে, বৃষ্টি সত্যিই নামলে তাঁর মুখে স্বস্তি ফিরে আসত।"
          }
        ]
      },
      {
        "h": {
          "en": "More Than a Cup",
          "bn": "এক গ্লাসের চেয়ে বেশি"
        },
        "p": [
          {
            "en": "Fa-anzalna mina al-sama'i ma'an: so We sent down water from the sky. Al-Qurtubi says the sky here means the clouds, since whatever is above you and shades you is called sama', or else the direction of the sky. Then fa-asqaynakumuhu, and We gave it to you to drink. At-Tabari reads the verb closely. He glosses it as rain given for your land and your livestock to drink, and argues that had the meaning been only for you to drink it yourselves, the verse would have said saqaynakumuhu.",
            "bn": "ফা আনযালনা মিনাস সামায়ি মাআন: অতঃপর আমি আকাশ থেকে পানি নামিয়েছি। কুরতুবী বলেন, এখানে আকাশ মানে মেঘ, কারণ যা কিছু মাথার উপরে থেকে ছায়া দেয় তাকেই সামা বলা হয়। অথবা এর মানে আকাশের দিক থেকে। তারপর ফা আসকাইনাকুমূহু: আর তা তোমাদের পান করিয়েছি। তাবারী ক্রিয়াটি খুঁটিয়ে পড়েন। তাঁর ব্যাখ্যায় এর অর্থ, সে বৃষ্টি দিয়েছি তোমাদের জমি আর পশুকে পান করানোর জন্য। তাঁর যুক্তি হলো, অর্থ যদি কেবল নিজে পান করা হতো, তবে আয়াতে আসত সাকাইনাকুমূহু।"
          },
          {
            "en": "The reason, at-Tabari explains, is Arab usage: saqa is used when you hand a man water or milk to drink, and asqa when you provide water for his land or his animals. Al-Baghawi draws the same line and glosses the verb as making the rain a supply for you. Al-Qurtubi records both positions, that the two verbs mean the same and that they differ. Al-Muyassar speaks of water prepared for your drinking, your land and your herds. On this reading the gift is not a cup but a whole year of fields and flocks.",
            "bn": "কারণটা তাবারী ব্যাখ্যা করেন আরবদের ব্যবহার দিয়ে। কাউকে পানি বা দুধ হাতে তুলে পান করালে বলা হয় সাকা। আর কারও জমি বা পশুর জন্য পানির ব্যবস্থা করে দিলে বলা হয় আসকা। বাগাভীও একই পার্থক্য টানেন। তাঁর ব্যাখ্যায় ক্রিয়াটির মানে, বৃষ্টিকে তোমাদের জন্য পানির জোগান বানিয়ে দেওয়া। কুরতুবী দুটি মতই উল্লেখ করেন: দুই ক্রিয়ার অর্থ এক, আবার দুটো আলাদা। মুয়াসসার বলে, এ পানি প্রস্তুত রাখা হয়েছে তোমাদের পান করার জন্য, তোমাদের জমি আর গবাদি পশুর জন্য। এ পাঠে দানটা এক গ্লাস পানি নয়, সারা বছরের খেত আর পশুপাল।"
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
            "bn": "ওয়ামা আনতুম লাহু বিখাযিনীন: আর তোমরা এর ভান্ডাররক্ষী নও। খাযিন শব্দটিকে মুফাসসিররা দুই দিকে নেন। প্রথম দিক আটকে রাখা। সুফইয়ান, ইবন কাসীর যাঁর পরিচয় দেন সাওরী বলে, এর ব্যাখ্যা করেন: তোমরা তা আটকাতে পারো না। তাবারী এর উপরেই নিজের পাঠ দাঁড় করান। যে পানি আমি নামিয়েছি, তোমরা তার রক্ষক নও যে যাকে আমি দিতে চাই তার কাছ থেকে তা আটকে দেবে। কারণ এ বিষয় আমার হাতে। আমি যাকে চাই দিই, যার থেকে চাই ফিরিয়ে রাখি।"
          },
          {
            "en": "The second direction is storing. Al-Qurtubi says its treasuries are not with you: We are the keepers of this water, sending it down when We will and holding it when We will. Al-Baghawi says the rain is in Our treasuries, not in yours. As-Sa'di says you have no power to store it or save it up, but Allah stores it for you and runs it as springs in the earth, out of mercy and kindness to you.",
            "bn": "দ্বিতীয় দিক জমিয়ে রাখা। কুরতুবী বলেন, এর ভান্ডার তোমাদের কাছে নেই। এ পানির রক্ষক আমরা, যখন চাই নামাই, যখন চাই ধরে রাখি। বাগাভী বলেন, বৃষ্টি আমার ভান্ডারে, তোমাদের ভান্ডারে নয়। সা'দী বলেন, তা জমা করে রাখার বা সঞ্চয় করার ক্ষমতা তোমাদের নেই। আল্লাহই তোমাদের জন্য তা জমা রাখেন আর মাটির ভেতরে ঝরনা হিসেবে বইয়ে দেন, তোমাদের প্রতি রহমত আর অনুগ্রহ হিসেবে।"
          },
          {
            "en": "Ibn Kathir gives the storing sense as a possibility, introduced with the words it may mean: you are not its guardians; rather We send it down and keep it for you, and make it flow in springs on the earth. Had Allah willed, he says, He could have made it sink away; but out of His mercy He made it sweet and kept it in springs, wells and rivers, so that it lasts through the year for drinking and for watering herds, crops and fruit. The two directions differ in emphasis, and each has its own names behind it.",
            "bn": "ইবন কাসীর জমিয়ে রাখার অর্থটি আনেন একটি সম্ভাবনা হিসেবে, 'এর অর্থ এমনও হতে পারে' বলে: তোমরা এর হেফাজতকারী নও। বরং আমিই তা নামাই, তোমাদের জন্য সংরক্ষণ করি, আর মাটিতে ঝরনা করে বইয়ে দিই। তিনি বলেন, আল্লাহ চাইলে তা মাটির গভীরে নামিয়ে হারিয়ে দিতে পারতেন। কিন্তু রহমত করে তিনি তা মিঠা করেছেন, আর ঝরনা, কূপ ও নদীতে জমা রেখেছেন, যাতে সারা বছর মানুষ পান করতে পারে, পশু, ফসল আর ফলের বাগানে পানি দিতে পারে। দুই দিকের জোর আলাদা জায়গায়, আর প্রতিটির পেছনে আছে নিজস্ব নাম।"
          }
        ]
      },
      {
        "h": {
          "en": "Water Nobody Can Buy",
          "bn": "যে পানি কেনা যায় না"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an, which comments on 15:22 and 15:23 together, reads this verse as a hint at an arrangement that brings water to every human being, animal and bird, wherever and whenever they need it. Its sharpest point concerns price. The water itself costs nothing. Those who dig a well or lay a pipe pay only for the means of reaching it; nobody can pay for a single drop, and nobody has ever been asked to.",
            "bn": "মাআরিফুল কুরআন ১৫:২২ ও ১৫:২৩ একসঙ্গে আলোচনা করে। তার পাঠে এ আয়াত এমন এক ব্যবস্থার দিকে ইশারা, যা প্রতিটি মানুষ, পশু আর পাখির কাছে পানি পৌঁছে দেয়, যেখানে যখন দরকার। তার সবচেয়ে তীক্ষ্ণ কথাটা দাম নিয়ে। পানির নিজের কোনো দাম নেই। যে কূপ খোঁড়ে বা পাইপ বসায়, সে দাম দেয় কেবল পানি পর্যন্ত পৌঁছানোর উপকরণের। এক ফোঁটা পানির দামও কেউ দিতে পারে না, কাউকে দিতে বলাও হয়নি।"
          },
          {
            "en": "On the words you are not its keepers, Ma'arif imagines the alternative: rain only in certain months, with each person keeping a yearly share in his own custody. Who could gather containers for months on end, and how long would stored water stay fit to drink? So, it says, the water is kept another way: some used at once by fields and people, some resting in ponds and lakes, some held as ice on mountain peaks, and some running beneath the ground, where a dug well reaches it.",
            "bn": "তোমরা এর ভান্ডাররক্ষী নও, এ কথার ব্যাখ্যায় মাআরিফ উল্টো ছবিটা কল্পনা করে। ধরুন বৃষ্টি হতো শুধু কয়েক মাস, আর প্রত্যেককে সারা বছরের ভাগ বুঝিয়ে দিয়ে বলা হতো নিজের জিম্মায় রাখতে। মাসের পর মাসের পানি ধরার মতো পাত্র কে জোগাড় করত? আর জমানো পানি কত দিন পানের যোগ্য থাকত? তাই তার ভাষায়, আল্লাহর কুদরত সংরক্ষণের আরেক ব্যবস্থা করেছে। কিছু পানি সঙ্গে সঙ্গে খেত আর মানুষের কাজে লাগে। কিছু জমে পুকুর আর হ্রদে। কিছু বরফ হয়ে থাকে পাহাড়ের চূড়ায়। আর কিছু বয়ে চলে মাটির নিচে, কূপ খুঁড়লে যেখানে পৌঁছানো যায়।"
          },
          {
            "en": "Ma'arif also explains, in the terms of its own time, how the water is carried and made sweet; that explanation is Ma'arif's view, reported as such, not the verse's own claim. It ends by counting six blessings: water created, carried to every region, made drinkable, offered to drink, gathered and kept, and the ability to benefit from it, which hardship can take away even when water is near.",
            "bn": "পানি কীভাবে বয়ে আনা হয় আর মিঠা করা হয়, মাআরিফ তা নিজের সময়ের ভাষায়ও ব্যাখ্যা করে। সে ব্যাখ্যা মাআরিফের মত, এখানে সেভাবেই উল্লেখ করা হলো, আয়াতের নিজের দাবি হিসেবে নয়। শেষে সে ছয়টি নেয়ামত গোনে। পানির সৃষ্টি, প্রতিটি অঞ্চলে তা পৌঁছানো, পানের উপযোগী করা, পান করার সুযোগ, জমা ও সংরক্ষণের ব্যবস্থা, আর তা থেকে উপকার নেওয়ার সামর্থ্য। কারণ পানি হাতের কাছে থাকলেও বিপদ সে সামর্থ্য কেড়ে নিতে পারে।"
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
            "bn": "খেয়াল করুন, এ আয়াতে কাজ করছেন কে। আমি বাতাস পাঠিয়েছি, আমি পানি নামিয়েছি, আমি তা তোমাদের পান করিয়েছি। শ্রোতার বর্ণনা আছে একটিমাত্র বাক্যে, তাও না-বাচক: তোমরা এর ভান্ডাররক্ষী নও। আটকাতে না পারার পাঠই ধরুন আর জমাতে না পারার পাঠই ধরুন, পাঠকের জন্য উপসংহার একই। ট্যাংক, পাইপ বা কল আমি সামলাতে পারি। কিন্তু উৎস আমার হাতে নেই। আল্লাহ যদি একটা ঝরনাও মাটির গভীরে হারিয়ে দেন, তা ফিরিয়ে আনার সাধ্য আমার নেই।"
          },
          {
            "en": "The fitting answer to a gift is thanks. Al-Muyassar and as-Sa'di both close their comment by calling the keeping of water a mercy and a kindness to us, and Ibn Kathir cites 56:68 to 56:70 beside this verse, a passage that ends by asking why people do not give thanks. Gratitude here can be small and concrete: remembering the Giver before the first sip, noticing rain as something sent rather than something that merely happens, and asking, as the Prophet ﷺ did, for the good that the wind was sent with.",
            "bn": "দানের যোগ্য জবাব শুকরিয়া। মুয়াসসার ও সা'দী দুজনেই আলোচনা শেষ করেন এই বলে যে পানি সংরক্ষণ আমাদের প্রতি রহমত আর অনুগ্রহ। আর এ আয়াতের পাশে ইবন কাসীর ৫৬:৬৮ থেকে ৫৬:৭০ আয়াত উদ্ধৃত করেন, যার শেষ প্রশ্নই হলো, কেন তোমরা শুকরিয়া আদায় করো না। এখানে শুকরিয়া ছোট আর বাস্তব হতে পারে। প্রথম চুমুকের আগে দাতাকে মনে করা। বৃষ্টিকে এমনি ঘটে যাওয়া ঘটনা না ভেবে পাঠানো দান হিসেবে দেখা। আর নবী ﷺ যেমন চাইতেন, তেমনি বাতাস যে কল্যাণ নিয়ে এসেছে তা আল্লাহর কাছে চাওয়া।"
          },
          {
            "en": "Then there is waste. Ma'arif's remark that nobody pays for a drop cuts both ways, because what costs nothing can start to feel worth nothing. A trustee who does not own what passes through his hands has no right to squander it. So the verse leaves the reader with plain habits: turn the tap off, use no more than the task needs, and remember those whose water is scarce or unsafe. Water I did not make, cannot keep and could lose is water to be used with care and shared.",
            "bn": "এরপর অপচয়ের প্রশ্ন। কেউ এক ফোঁটার দামও দেয় না, মাআরিফের এ কথার দুটো দিক আছে। যা বিনা মূল্যে আসে, ধীরে ধীরে তা মূল্যহীন মনে হতে থাকে। যে আমানতদার হাত দিয়ে যাওয়া জিনিসের মালিক নয়, তা নষ্ট করার অধিকারও তার নেই। তাই আয়াতটি পাঠকের হাতে কয়েকটি সহজ অভ্যাস তুলে দেয়। কল বন্ধ করুন। কাজে যতটুকু লাগে তার বেশি খরচ করবেন না। আর মনে রাখুন তাদের কথা, যাদের পানি কম বা নিরাপদ নয়। যে পানি আমি বানাইনি, জমাতে পারি না, আর হারাতেও পারি, তা যত্নে ব্যবহার করতে হয় আর ভাগ করে নিতে হয়।"
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
          "bn": "হাশরের কথা থেকে শুরুর কথায়"
        },
        "p": [
          {
            "en": "Wa-laqad khalaqna al-insana min salsalin min hama'in masnun: and We certainly created man from salsal, from hama' masnun. The verses before it have been counting what Allah holds in His hand: the winds and the rain in 15:22, life, death and the final inheritance in 15:23, knowledge of those who went before and those still to come in 15:24, and the gathering of them all in 15:25. Having said where people end, the surah turns to where the first of them began, and opens the story of Adam (AS) and Iblis that runs on through the passage.",
            "bn": "ওয়া লাকাদ খালাকনাল ইনসানা মিন সালসালিন মিন হামাইম মাসনূন: আর আমি অবশ্যই মানুষকে সৃষ্টি করেছি সালসাল থেকে, হামা মাসনূন থেকে। আগের আয়াতগুলো গুনে গুনে দেখাচ্ছিল, কী কী আল্লাহর হাতে। ১৫:২২ আয়াতে বাতাস আর বৃষ্টি, ১৫:২৩ আয়াতে জীবন, মৃত্যু আর শেষ উত্তরাধিকার, ১৫:২৪ আয়াতে আগে যারা চলে গেছে আর পরে যারা আসবে তাদের সবার খবর, ১৫:২৫ আয়াতে সবাইকে একত্র করা। মানুষ কোথায় গিয়ে থামবে, তা বলার পর সূরা ফিরে তাকায় প্রথম মানুষটি কোথা থেকে শুরু হয়েছিলেন সেদিকে। এখান থেকেই শুরু হয় আদম (আঃ) আর ইবলীসের কাহিনি, যা গোটা অংশজুড়ে চলতে থাকে।"
          },
          {
            "en": "Every commentator fetched for this verse takes al-insan here to mean Adam (AS). At-Tabari, al-Qurtubi, al-Baghawi and as-Sa'di say so in words, and the Muyassar writes his name straight into its paraphrase. As-Sa'di reads the whole passage as Allah recalling His favour and kindness to our father Adam, and what befell him from his enemy Iblis. Folded inside the story, he says, is a warning to us against that enemy's evil and the trials he brings.",
            "bn": "এ আয়াতের যত তাফসীর সংগ্রহ করা হয়েছে, সবগুলোতেই এখানে আল-ইনসান মানে আদম (আঃ)। তাবারী, কুরতুবী, বাগাভী আর সা'দী কথাটা সরাসরি বলেছেন, আর মুয়াসসার তাঁর নামই বসিয়ে দিয়েছে ব্যাখ্যার ভেতরে। সা'দী পুরো অংশটিকে পড়েন এভাবে: আল্লাহ আমাদের পিতা আদমের প্রতি তাঁর নিয়ামত ও অনুগ্রহের কথা মনে করিয়ে দিচ্ছেন, আর তাঁর শত্রু ইবলীসের হাতে তাঁর উপর যা ঘটেছিল তাও বলছেন। তাঁর মতে কাহিনির ভেতরেই গাঁথা আছে আমাদের জন্য সতর্কবাণী, সেই শত্রুর অনিষ্ট আর তার পাতা ফাঁদ থেকে সাবধান থাকার।"
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
            "bn": "প্রথমে সালসাল। তাবারী শুরুতেই জানান, তাফসীরবিদেরা এর অর্থ নিয়ে একমত হননি। কারও কারও মতে এ হলো শুকনো মাটি, যাকে আগুন ছোঁয়নি। টোকা দিলে শব্দ করে, তার সালসালা বা ঠনঠন আওয়াজ কানে আসে। কাতাদা থেকে তিনি এ কথা আনেন, আর মুজাহিদ থেকে আনেন শুধু শুকনো মাটি। ইবন আব্বাস থেকে তিনি এমন মাটি কীভাবে তৈরি হয় তার ছবি আনেন। ভালো মাটির উপর পানি পড়ে, তারপর সরে যায়, মাটি ফেটে যায়, আর হয়ে ওঠে পাতলা খোলামকুচির মতো। আরেক বর্ণনায় ইবন আব্বাস বলেন, এ হলো শুকিয়ে যাওয়া মাটি, যা শুকানোর পর আবার ভেজানো হয়।"
          },
          {
            "en": "The others agree in substance. Ad-Dahhak, in at-Tabari, calls it hard clay with sand mixed in. Al-Qurtubi gives the definition of Abu Ubayda: pure clay mixed with sand, so that it rings when it dries, and once it is baked in fire it becomes fakhkhar, pottery. He calls this the view of most of the commentators. Al-Baghawi reports Ibn Abbas describing clay from which the water has drained away, so that it cracked and rattles when it is moved. The Muyassar and as-Sa'di both write the sound into their paraphrase, and as-Sa'di says it rang like pottery.",
            "bn": "বাকিরাও মূল কথায় একমত। তাবারীর বর্ণনায় দাহহাক একে বলেন বালি মেশানো শক্ত মাটি। কুরতুবী আনেন আবু উবাইদার সংজ্ঞা: বালি মেশানো খাঁটি মাটি, যা শুকালে ঠনঠন করে বাজে, আর আগুনে পোড়ালে হয় ফাখখার, মানে পোড়ামাটির পাত্র। কুরতুবীর মতে অধিকাংশ তাফসীরকারের কথা এটাই। বাগাভী ইবন আব্বাসের বর্ণনা আনেন: এমন মাটি, যার পানি শুকিয়ে সরে গেছে, ফলে তা ফেটে গেছে, আর নাড়া দিলে খটখট করে। মুয়াসসার আর সা'দী দুজনেই ব্যাখ্যায় শব্দের কথাটা রেখেছেন। সা'দী বলেন, সে মাটি বাজত পোড়ামাটির পাত্রের মতো।"
          }
        ]
      },
      {
        "h": {
          "en": "Or Clay Gone Off",
          "bn": "নাকি পচে যাওয়া মাটি"
        },
        "p": [
          {
            "en": "Against this stands a second reading. Mujahid, by a chain at-Tabari gives through Ibn Abi Najih, said salsal is al-muntin, what stinks, though the same Mujahid is also reported as saying dry earth. At-Tabari explains how those who held it took the word: from the Arab saying salla al-lahmu and asalla, when meat goes off, both forms being in use. Al-Baghawi and al-Qurtubi add that the grammarian al-Kisa'i chose this reading. Al-Qurtubi notes that on this account salsal is salal at root, with a lam changed into a sad.",
            "bn": "এর বিপরীতে আছে দ্বিতীয় একটি পাঠ। ইবন আবী নাজীহের মাধ্যমে তাবারী যে সূত্র দেন, তাতে মুজাহিদ বলেন, সালসাল মানে আল-মুনতিন, যা দুর্গন্ধ ছড়ায়। অবশ্য এই মুজাহিদ থেকেই শুকনো মাটির অর্থও বর্ণিত আছে। যারা এ মত নিয়েছেন তারা শব্দটা কোথা থেকে ধরেছেন, তাবারী তা বুঝিয়ে দেন। আরবরা মাংস পচে গেলে বলে সাল্লাল লাহমু, আবার আসাল্লা, দুটো রূপই চলে। বাগাভী আর কুরতুবী যোগ করেন, ব্যাকরণবিদ কিসাঈ এই পাঠটিই বেছে নিয়েছিলেন। কুরতুবী বলেন, এ মত অনুযায়ী সালসালের মূল রূপ সালাল, যার একটি লাম বদলে সাদ হয়ে গেছে।"
          },
          {
            "en": "At-Tabari then decides. The more fitting reading, he says, is the one with sound, because Allah described the same material elsewhere: He created man from salsal like fakhkhar (55:14), likening it to pottery in its dryness. Had the meaning been putrid, He would not have likened it to pottery, since pottery does not stink and so cannot be the likeness for something that does. Ibn Kathir reaches the same side more briefly: the apparent sense matches 55:14, and explaining a verse by a verse is more fitting. Yet both record Mujahid's view by name, and al-Kisa'i's choice still stands in al-Baghawi and al-Qurtubi.",
            "bn": "এরপর তাবারী নিজের রায় দেন। তাঁর মতে শব্দওয়ালা অর্থটাই বেশি মানানসই। কারণ আল্লাহ অন্য জায়গায় একই উপাদানের বর্ণনা দিয়েছেন: তিনি মানুষকে সৃষ্টি করেছেন ফাখখারের মতো সালসাল থেকে (৫৫:১৪)। শুকনো ভাবের দিক থেকেই তাকে পোড়ামাটির পাত্রের সঙ্গে তুলনা করা হয়েছে। অর্থ যদি দুর্গন্ধযুক্ত হতো, তবে পোড়ামাটির সঙ্গে তুলনা আসত না। পোড়ামাটিতে তো দুর্গন্ধ নেই, তাই দুর্গন্ধের উপমা হিসেবে তাকে টানা যায় না। ইবন কাসীর আরও সংক্ষেপে একই দিকে যান: বাহ্যিক অর্থ ৫৫:১৪ আয়াতের সঙ্গে মেলে, আর আয়াত দিয়ে আয়াতের ব্যাখ্যাই বেশি উপযুক্ত। তবু দুজনেই মুজাহিদের মত তাঁর নাম ধরে উল্লেখ করেছেন, আর কিসাঈর পছন্দ বাগাভী ও কুরতুবীর কিতাবে আজও লেখা আছে।"
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
            "bn": "এরপর মিন হামাইম মাসনূন। কুরতুবী বলেন, এই মিন বলে দিচ্ছে সালসাল কোন জাতের ছিল, যেমন কেউ বলে, এটা আমি আরবদের একজনের কাছ থেকে নিয়েছি। ইবন কাসীরের ব্যাখ্যাও তাই: সালসাল এসেছে হামা থেকে। তাবারী বলেন, হামা শব্দটি হামআর বহুবচন, মানে এমন মাটি যা বদলে কালোর দিকে চলে গেছে। বাগাভী আর কুরতুবী দুজনেই একে বলেন কালো মাটি। কুরতুবী এ শব্দ থেকে জন্মানো আরও কিছু শব্দ দেখান, যেমন কূয়ায় এই কালো পলি জমে যাওয়া বা তা তুলে ফেলা। ইবন কাসীর একে শুধু মাটি বলেই ব্যাখ্যা করেন। আসল মতভেদ মাসনূন শব্দে।"
          },
          {
            "en": "Most reports make it altered. At-Tabari glosses masnun as al-mutaghayyir, the changed, and brings from Ibn Abbas, Mujahid, Qatadah and ad-Dahhak that it is what has gone putrid. Elsewhere Ibn Abbas calls it wetted earth gone foul that was then made salsal like pottery. Al-Qurtubi traces the sense to asana al-ma', said of water that has turned, and also gives al-Farra's root: sanantu al-hajara, I rubbed stone on stone, whose scrapings are foul, the root that gives misann, a whetstone. At-Tabari reports that same explanation from an unnamed Kufan scholar.",
            "bn": "বেশির ভাগ বর্ণনায় এর অর্থ বদলে যাওয়া। তাবারী মাসনূনের ব্যাখ্যা দেন আল-মুতাগাইয়ির, মানে যা বদলে গেছে। ইবন আব্বাস, মুজাহিদ, কাতাদা আর দাহহাক থেকে তিনি আনেন, এ হলো যা পচে গেছে। আরেক জায়গায় ইবন আব্বাস বলেন, ভেজা মাটি পচে গন্ধ হয়ে গিয়েছিল, পরে তাকে পোড়ামাটির মতো সালসাল বানানো হয়। কুরতুবী অর্থটা খুঁজে পান আসানাল মা কথায়, অর্থাৎ পানি নষ্ট হয়ে যাওয়া। তিনি ফাররার দেওয়া মূলও আনেন: সানানতুল হাজারা, পাথরে পাথর ঘষলাম। সেই ঘষা থেকে যা বেরোয় তা দুর্গন্ধময়, আর এ মূল থেকেই মিসান্ন, মানে শান দেওয়ার পাথর। তাবারী এই ব্যাখ্যাই আনেন কূফার এক নাম-না-বলা আলিম থেকে।"
          },
          {
            "en": "Others read it differently. Ibn Kathir takes masnun as smooth, citing a poet who walked with his beloved over marble that was masnun, polished and sleek, and al-Qurtubi quotes the same line as rubbed smooth. Abu Ubayda, in al-Baghawi and al-Qurtubi, took it as poured, from sanantu al-ma', I poured the water, and at-Tabari reports that reading from a Basran grammarian. Ibn Abbas, in the report of Ali ibn Abi Talha, called it moist clay. Al-Qurtubi says this comes to the same thing, since only what is moist can be poured, and he quotes an-Nahhas calling it a good view.",
            "bn": "অন্যরা ভিন্নভাবে পড়েছেন। ইবন কাসীর মাসনূন মানে নেন মসৃণ। তিনি এক কবির চরণ আনেন, যিনি প্রিয়জনকে নিয়ে হেঁটেছিলেন মাসনূন মার্বেলের উপর দিয়ে, মানে ঘষে চকচকে করা পাথর। কুরতুবীও একই চরণ এনে বলেন, ঘষে মসৃণ করা। বাগাভী আর কুরতুবীর বর্ণনায় আবু উবাইদা একে নিয়েছেন ঢালা অর্থে, সানানতুল মা থেকে, মানে আমি পানি ঢাললাম। তাবারী এ পাঠ বসরার এক ব্যাকরণবিদ থেকে আনেন। আলী ইবন আবী তালহার বর্ণনায় ইবন আব্বাস একে বলেছেন ভেজা মাটি। কুরতুবী বলেন, কথা একই দাঁড়ায়, কারণ ভেজা না হলে কিছু ঢালা যায় না। নাহহাস একে ভালো মত বলেছেন, সেটাও তিনি উল্লেখ করেন।"
          },
          {
            "en": "Two more readings complete the list. Sibawayh, in al-Qurtubi, took masnun as formed, from sunnat al-wajh, the shape of a face, and at-Tabari reports a Basran grammarian who said the same: mud given a complete form, its pattern set. Al-Akhfash, in al-Qurtubi, took it as set upright. At-Tabari himself inclines to altered and says the people of interpretation said much the same. These are the readings in the texts fetched for this verse, with their names attached. This article adds none of its own and settles none of them.",
            "bn": "তালিকা পূর্ণ করে আরও দুটি পাঠ। কুরতুবীর বর্ণনায় সিবাওয়াইহ মাসনূন মানে নিয়েছেন আকার দেওয়া, সুন্নাতুল ওয়াজহ থেকে, অর্থাৎ মুখের গড়ন। তাবারীও বসরার এক ব্যাকরণবিদের কথা আনেন, যিনি একই কথা বলেছেন: পূর্ণ আকার পাওয়া কাদা, যার ছাঁচ স্থির হয়ে গেছে। কুরতুবীর বর্ণনায় আখফাশ একে নিয়েছেন খাড়া করে দাঁড় করানো অর্থে। তাবারী নিজে ঝুঁকেছেন বদলে যাওয়া অর্থের দিকে, আর বলেছেন তাফসীরবিদেরাও প্রায় এ কথাই বলেছেন। এ আয়াতের জন্য সংগ্রহ করা লেখাগুলোতে এই পাঠগুলোই আছে, প্রতিটির সঙ্গে নাম জোড়া। এ লেখা নিজের কোনো পাঠ যোগ করে না, কোনোটির পক্ষে রায়ও দেয় না।"
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
            "bn": "কুরতুবী শব্দগুলোকে একটা ক্রমে সাজান। প্রথমে ছিল তুরাব, মানে ধুলামাটি, যার কণাগুলো ছড়ানো ছিটানো। তারপর ভিজিয়ে তা হলো তীন, কাদামাটি। তারপর রেখে দেওয়া হলো, পচে গিয়ে তা হলো হামা মাসনূন, বদলে যাওয়া কাদা। তারপর শুকিয়ে হলো সালসাল। কুরতুবী একে জুমহুর বা অধিকাংশের মত বলেছেন, আর বিস্তারিত আলোচনার জন্য পাঠককে সূরা বাকারায় তাঁর লেখার দিকে ফিরিয়ে দিয়েছেন। বাগাভী কাছাকাছি একটা কথা আনেন, যাকে তিনি বলেন কিছু বর্ণনা, কে বর্ণনা করেছেন তা না জানিয়ে: আল্লাহ আদমের মাটিকে খামির হতে রেখে দিয়েছিলেন, যতক্ষণ না তা বদলে কালো হয়ে যায়, তারপর তা থেকে আদমকে সৃষ্টি করেন।"
          },
          {
            "en": "Ibn Abbas, in at-Tabari, gathers words from different verses together: man was created from tin lazib, salsal and hama' masnun. Tin lazib, he says, is sticky, good clay; salsal is the fine clay from which pottery is made; masnun is clay with black silt in it. Tin lazib is the wording of 37:11, and salsal like fakhkhar is the wording of 55:14, which at-Tabari and Ibn Kathir both use to fix the sense here. The Qur'an names turab as well, in 3:59, though the commentators fetched for this verse do not cite that verse here.",
            "bn": "তাবারীর বর্ণনায় ইবন আব্বাস ভিন্ন ভিন্ন আয়াতের শব্দ একসঙ্গে জড়ো করেন: মানুষকে সৃষ্টি করা হয়েছে তীন লাযিব, সালসাল আর হামা মাসনূন। তাঁর ব্যাখ্যায় তীন লাযিব হলো আঠালো ভালো মাটি, সালসাল হলো সেই মিহি মাটি যা দিয়ে পোড়ামাটির পাত্র বানানো হয়, আর মাসনূন হলো কালো পলি মেশানো মাটি। তীন লাযিব কথাটি ৩৭:১১ আয়াতের, আর ফাখখারের মতো সালসাল কথাটি ৫৫:১৪ আয়াতের। এখানকার অর্থ ঠিক করতে তাবারী ও ইবন কাসীর দুজনেই ৫৫:১৪ ব্যবহার করেছেন। কুরআন ৩:৫৯ আয়াতে তুরাবের কথাও বলে, তবে এ আয়াতের জন্য সংগ্রহ করা তাফসীরগুলো এখানে সে আয়াত উল্লেখ করেনি।"
          },
          {
            "en": "A word of caution keeps this in proportion. The verse itself names only salsal and hama' masnun. The sequence of steps is al-Qurtubi's reading of how the Qur'an's words fit together, credited by him to the majority; it is not a line of the verse, and the other commentators fetched here do not all spell it out. And none of these texts speaks in the language of modern science, so this article does not either. What the commentators draw from the materials points somewhere else: towards the man made from them, and what was given to him.",
            "bn": "একটু সতর্কতা কথাটাকে তার জায়গায় রাখে। আয়াত নিজে শুধু সালসাল আর হামা মাসনূনের নাম বলে। ধাপের ক্রমটা কুরতুবীর বোঝা, কুরআনের শব্দগুলো কীভাবে পরস্পর মেলে সে বিষয়ে তাঁর পাঠ, যা তিনি অধিকাংশের মত বলে উল্লেখ করেছেন। এটা আয়াতের কোনো বাক্য নয়, আর এখানে সংগ্রহ করা অন্য তাফসীরকারেরা সবাই এ ক্রম খুলে বলেননি। তাছাড়া এসব লেখার কোনোটিই আধুনিক বিজ্ঞানের ভাষায় কথা বলে না, তাই এ লেখাও বলে না। তাফসীরকারেরা উপাদান থেকে যে শিক্ষা টানেন, তা অন্য দিকে ইঙ্গিত করে: যাকে এসব দিয়ে বানানো হয়েছে তাঁর দিকে, আর তাঁকে যা দেওয়া হয়েছে তার দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "As It Was Described to You",
          "bn": "যেমন তোমাদের বলে দেওয়া হয়েছে"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English tafsir that groups 15:26 with 15:27, attaches a narration he says is found in the Sahih. Sahih Muslim (2996) records from A'isha (RA) that the Messenger of Allah ﷺ said: The angels were created from light, the jinn were created from a smokeless flame of fire, and Adam was created from what has been described to you. The last clause does not name the material again; it points to a description the listeners already had. The half about the jinn belongs with 15:27 and is left for that verse.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:২৬ আর ১৫:২৭ একসঙ্গে আলোচনা করে। সেখানে তিনি একটি হাদীস আনেন এবং বলেন, এটি সহীহ গ্রন্থে আছে। সহীহ মুসলিম (২৯৯৬) আয়িশা (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: ফেরেশতাদের সৃষ্টি করা হয়েছে নূর থেকে, জিনকে সৃষ্টি করা হয়েছে ধোঁয়াহীন আগুনের শিখা থেকে, আর আদমকে সৃষ্টি করা হয়েছে সেই জিনিস থেকে, যার বর্ণনা তোমাদের দেওয়া হয়েছে। শেষ বাক্যে উপাদানের নাম আবার বলা হয়নি। শ্রোতাদের কাছে যে বর্ণনা আগে থেকেই ছিল, বাক্যটি সেদিকে ইশারা করে। জিনের অংশটুকু ১৫:২৭ আয়াতের বিষয়, তাই সেটা সে আয়াতের জন্য রেখে দেওয়া হলো।"
          },
          {
            "en": "Ibn Kathir closes his comment with the point of it all: the verse is meant to show the noble nature, good essence and pure origin of Adam. That is worth sitting with. The same verse that names ringing clay and altered mud is read by him as a statement of honour, not of lowness. As-Sa'di likewise frames the passage as a favour to our father. Ma'arif al-Qur'an, grouping 15:24 to 15:28, spends its fetched comment on 15:24 and is not used here.",
            "bn": "ইবন কাসীর তাঁর আলোচনা শেষ করেন মূল কথাটি বলে: আয়াতের উদ্দেশ্য আদমের মহৎ স্বভাব, উত্তম সত্তা আর পবিত্র মূলের দিকে ইঙ্গিত করা। কথাটা নিয়ে একটু থামা দরকার। যে আয়াত ঠনঠনে মাটি আর বদলে যাওয়া কাদার নাম নেয়, তিনি সেটাকেই পড়েন সম্মানের ঘোষণা হিসেবে, হীনতার নয়। সা'দীও অংশটিকে আমাদের পিতার প্রতি অনুগ্রহ হিসেবেই সাজান। মাআরিফুল কুরআন ১৫:২৪ থেকে ১৫:২৮ একসঙ্গে আলোচনা করে, কিন্তু সংগ্রহ করা অংশে তার কথা ১৫:২৪ নিয়েই। তাই এখানে তা ব্যবহার করা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Honour That Was Not Mined",
          "bn": "যে সম্মান মাটি খুঁড়ে মেলে না"
        },
        "p": [
          {
            "en": "Put the readings side by side and something plain comes through, whichever of them one follows. Ringing clay or clay gone off, black mud altered or smoothed or poured into a shape: none of it is precious. There is nothing here a person could point to and say, this is why I matter. That is exactly where the verse leaves us. The verses after it go on to what Allah did with this material and how He honoured it, and they have their own place. Here the material is named first, and named plainly, before a word is said about honour.",
            "bn": "পাঠগুলো পাশাপাশি রাখলে, যেটাই মানা হোক, একটা সহজ কথা বেরিয়ে আসে। ঠনঠনে মাটি হোক বা পচে যাওয়া মাটি, কালো কাদা বদলে যাওয়া হোক, মসৃণ হোক বা ছাঁচে ঢালা, এর কোনোটিই দামি নয়। এখানে এমন কিছু নেই যা দেখিয়ে কেউ বলতে পারে, এই কারণেই আমার দাম। আয়াত আমাদের ঠিক এখানেই দাঁড় করিয়ে রাখে। পরের আয়াতগুলো বলবে এই উপাদান দিয়ে আল্লাহ কী করলেন, কীভাবে তাকে সম্মান দিলেন। সেগুলোর আলোচনা তাদের নিজ জায়গায়। এখানে আগে উপাদানের নাম আসে, সোজাসাপ্টা ভাষায়, সম্মানের কথা ওঠার আগেই।"
          },
          {
            "en": "So the honour cannot have come from the clay. Ibn Kathir calls the origin noble and pure while the verse names dry earth and dark mud, and these sit together without strain once the nobility is seen to lie in the Maker and in what He chose to give. For the reader this lowers and lifts at once. It lowers pride, because nobody's material is better than anybody else's. And it lifts, because the dignity a person carries is Allah's gift, and so it is not mine to take away from anyone.",
            "bn": "তাহলে সম্মানটা মাটি থেকে আসতে পারে না। আয়াত বলছে শুকনো মাটি আর কালো কাদার কথা, আর ইবন কাসীর সেই মূলকেই বলছেন মহৎ ও পবিত্র। কথাগুলো পাশাপাশি থাকতে কোনো অসুবিধা হয় না, যদি বোঝা যায় মহত্ত্বটা আছে যিনি বানিয়েছেন তাঁর মধ্যে, আর তিনি যা দিতে চেয়েছেন তার মধ্যে। পাঠকের জন্য এ কথা একসঙ্গে নামিয়েও আনে, তুলেও ধরে। অহংকার নামিয়ে আনে, কারণ কারও উপাদান অন্য কারও চেয়ে ভালো নয়। আবার তুলে ধরে, কারণ মানুষ যে মর্যাদা বহন করে তা আল্লাহর দান। তাই কারও কাছ থেকে তা কেড়ে নেওয়ার অধিকার আমার নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Living as Honoured Clay",
          "bn": "সম্মান পাওয়া মাটির জীবন"
        },
        "p": [
          {
            "en": "Some practical turns follow. When I catch myself feeling above someone, for their family, their work, their accent or their income, I can name the verse's materials to myself and ask which of them I think I was spared. When I feel like nothing, after a failure or a sin, I can remember that the honour never rested on the material, so the weakness of the material does not cancel it. And when I speak about other people, including the ones I dislike, I can let the dignity Allah placed in them govern my tongue.",
            "bn": "এ থেকে কিছু কাজের কথা বেরিয়ে আসে। কারও বংশ, পেশা, কথার টান বা আয় দেখে যখন নিজেকে তার চেয়ে উঁচু মনে হয়, তখন আয়াতের উপাদানগুলোর নাম মনে মনে বলে নিজেকে জিজ্ঞেস করতে পারি: এর কোনটা থেকে আমি রেহাই পেয়েছি বলে ভাবছি? কোনো ব্যর্থতা বা গুনাহের পর যখন নিজেকে একেবারে কিছুই না মনে হয়, তখন মনে রাখতে পারি, সম্মান কখনো উপাদানের উপর দাঁড়িয়ে ছিল না। তাই উপাদানের দুর্বলতা সে সম্মান মুছে দেয় না। আর অন্যদের নিয়ে কথা বলার সময়, যাদের পছন্দ করি না তাদের বেলাতেও, আল্লাহ তাদের ভেতরে যে মর্যাদা রেখেছেন তা যেন আমার জিভকে সংযত রাখে।"
          },
          {
            "en": "The verse is not a supplication, but a composed du'a in its spirit, not a transmitted one, might run: O Allah, You created me from clay that rings and mud that changed, and every good in me is from You. Keep me from pride over what I did not make, and from despising what You have honoured. Let me see Your gift in every person I meet, and let my end, like my beginning, be in Your hands. Then the passage moves on, and the reader with it, carrying a clay origin and a given honour.",
            "bn": "আয়াতটি নিজে কোনো দোয়া নয়। তবে এর ভাব থেকে নিজের বানানো একটি দোয়া হতে পারে, যা হাদীসে বর্ণিত নয়: হে আল্লাহ, তুমি আমাকে সৃষ্টি করেছ ঠনঠনে মাটি আর বদলে যাওয়া কাদা থেকে, আমার ভেতরের সব ভালো তোমারই দেওয়া। যা আমি নিজে বানাইনি তা নিয়ে অহংকার থেকে আমাকে বাঁচাও, আর তুমি যাকে সম্মান দিয়েছ তাকে তুচ্ছ করা থেকেও। যার সঙ্গে দেখা হয় তার মধ্যে তোমার দান দেখার চোখ দাও। আমার শুরুর মতো আমার শেষটাও তোমার হাতে রাখো। এরপর অংশটি সামনে এগোয়, পাঠকও এগোয়, মাটির শুরু আর দেওয়া সম্মান সঙ্গে নিয়ে।"
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
          "bn": "প্রশ্নের জবাবে যা বলল"
        },
        "p": [
          {
            "en": "This verse is a reply, and it only makes sense after the question. In 15:28 Allah tells the angels that He is creating a human from ringing clay, from altered black mud. In 15:29 He tells them to fall down in prostration once He has proportioned him and breathed into him. In 15:30 the angels prostrate, all of them together. In 15:31 comes the exception: Iblis refused to be with those who prostrate. Then 15:32 asks him directly: O Iblis, what is the matter with you, that you are not with those who prostrate? This is his answer.",
            "bn": "আয়াতটি একটি জবাব। প্রশ্নটা আগে না জানলে জবাবের মানে ধরা যায় না। ১৫:২৮ আয়াতে আল্লাহ ফেরেশতাদের জানালেন, তিনি ঠনঠনে মাটি থেকে, বদলে যাওয়া কালো কাদা থেকে মানুষ সৃষ্টি করছেন। ১৫:২৯ আয়াতে বললেন, তাকে পূর্ণ গড়ন দিয়ে তার মধ্যে রূহ ফুঁকে দিলে তোমরা সাজদায় পড়ে যেও। ১৫:৩০ আয়াতে ফেরেশতারা সবাই একসঙ্গে সাজদা করল। ১৫:৩১ আয়াতে এল ব্যতিক্রম: ইবলীস সাজদাকারীদের সঙ্গী হতে অস্বীকার করল। তারপর ১৫:৩২ আয়াতে সরাসরি প্রশ্ন: হে ইবলীস, তোমার কী হলো যে তুমি সাজদাকারীদের সঙ্গে নেই? এ আয়াত সেই প্রশ্নেরই উত্তর।"
          },
          {
            "en": "The materials named in the answer, salsal, hama' and masnun, were read closely at 15:26, where the commentators' accounts of ringing clay and of mud gone dark and altered are laid out; they are not repeated here. What is new in 15:33 is the speaker. In 15:28 those very words are Allah's, announcing a creation He is about to honour. Here the same words come back in Iblis's mouth, and he turns them into an objection. What is said to him in return, in 15:34 and 15:35, belongs to those verses.",
            "bn": "উত্তরে যে উপাদানগুলোর নাম এসেছে, সালসাল, হামা আর মাসনূন, সেগুলো নিয়ে বিস্তারিত আলোচনা হয়েছে ১৫:২৬ আয়াতে। ঠনঠনে মাটি আর কালো হয়ে বদলে যাওয়া কাদা নিয়ে তাফসীরকারদের ব্যাখ্যা সেখানে সাজানো আছে, এখানে আর তা দোহরানো হলো না। ১৫:৩৩ আয়াতে নতুন হলো বক্তা। ১৫:২৮ আয়াতে ঠিক এই শব্দগুলো ছিল আল্লাহর কথা। তিনি এমন এক সৃষ্টির ঘোষণা দিচ্ছিলেন, যাকে তিনি সম্মান দিতে যাচ্ছেন। এখানে একই শব্দ ফিরে এসেছে ইবলীসের মুখে, আর সে সেগুলোকে বানিয়েছে আপত্তি। জবাবে তাকে যা বলা হলো, তা আছে ১৫:৩৪ ও ১৫:৩৫ আয়াতে, আর সে আলোচনা সেখানেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Not the Sort to Bow",
          "bn": "সাজদা করা আমার কাজ নয়"
        },
        "p": [
          {
            "en": "Lam akun li-asjuda: I am not one to prostrate. The question in 15:32 asked why he is not, alla takuna, with those who prostrate, and his answer picks up the same verb of being. He does not say I will not, or I did not. He describes himself. The Muyassar puts the sense into plain words: it does not befit me to prostrate to a human You brought into being from dry clay that had been black, altered mud. Ibn Kathir's abridged English tafsir, which groups 15:28 to 15:33, renders the opening as: I am not one to prostrate myself.",
            "bn": "লাম আকুন লি-আসজুদা: আমি সাজদা করার লোক নই। ১৫:৩২ আয়াতের প্রশ্ন ছিল, তুমি কেন সাজদাকারীদের সঙ্গে নেই, আল্লা তাকূনা। উত্তরেও সে 'হওয়া' অর্থের সেই একই ক্রিয়া ধরে রাখল। সে বলেনি, আমি করব না, বা আমি করিনি। সে নিজের পরিচয় দিল। মুয়াসসার সহজ কথায় অর্থটা খুলে বলে: এমন মানুষকে সাজদা করা আমার শোভা পায় না, যাকে তুমি বানিয়েছ শুকনো মাটি থেকে, যা আগে ছিল বদলে যাওয়া কালো কাদা। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:২৮ থেকে ১৫:৩৩ আয়াত একসঙ্গে ধরে আলোচনা করে। সেখানে শুরুর কথাটার অনুবাদ: আমি নিজেকে সাজদায় নত করার মতো কেউ নই।"
          },
          {
            "en": "Look too at where the answer points. He was asked about himself, and he answers about someone else: li-basharin khalaqtahu, to a human whom You created. The reason he gives is not a fault in the command or a fault in Adam's conduct. It is the stuff Adam was made from. And the verb is in the second person, You created, so the objection is lodged against a work while its Maker is named in the same breath. The refusal has been turned into a statement of rank, and a statement of rank sounds, to whoever makes it, like a reason.",
            "bn": "উত্তরটা কোন দিকে আঙুল তুলছে, সেটাও দেখুন। প্রশ্ন ছিল তার নিজের সম্পর্কে, আর সে জবাব দিল অন্যজনকে নিয়ে: লি-বাশারিন খালাকতাহু, এমন মানুষকে যাকে তুমি সৃষ্টি করেছ। হুকুমে কোনো দোষ সে দেখায়নি, আদম (আঃ)-এর কোনো আচরণেও না। কারণ হিসেবে সে দাঁড় করাল আদম (আঃ) যে উপাদানে তৈরি, সেটাকে। ক্রিয়াটাও সরাসরি সম্বোধনে: তুমি সৃষ্টি করেছ। অর্থাৎ যিনি বানিয়েছেন তাঁর নাম মুখে নিয়েই সে তাঁর সৃষ্টির বিরুদ্ধে আপত্তি তুলল। অস্বীকারটা এভাবে হয়ে গেল পদমর্যাদার ঘোষণা। আর যে এমন ঘোষণা দেয়, তার কানে সেটা যুক্তির মতোই শোনায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Fire That Eats Clay",
          "bn": "আগুন মাটিকে খেয়ে ফেলে"
        },
        "p": [
          {
            "en": "The verse names only one material, Adam's. The commentators on this verse supply the other half of the comparison. At-Tabari glosses Iblis's words: and he is of clay and I am of fire, and fire consumes clay. Al-Baghawi says what he meant was: I am better than him, because he is of clay and I am of fire, and fire consumes clay. Al-Qurtubi says the verse makes plain his pride and his envy, and his claim to be better than Adam, since he is of fire and fire eats clay, and he refers the reader to his fuller discussion in al-A'raf.",
            "bn": "আয়াতে উপাদানের নাম এসেছে একটাই, আদম (আঃ)-এর। তুলনার বাকি অর্ধেক জুড়ে দেন এ আয়াতের তাফসীরকারেরা। তাবারী ইবলীসের কথার ব্যাখ্যা দেন এভাবে: সে তো মাটির, আর আমি আগুনের, আর আগুন মাটিকে খেয়ে ফেলে। বাগাভী বলেন, তার আসল কথা ছিল: আমি তার চেয়ে উত্তম, কারণ সে মাটির আর আমি আগুনের, আর আগুন মাটিকে খেয়ে ফেলে। কুরতুবী বলেন, আয়াতটি তার অহংকার আর হিংসা খুলে দেখায়, আর দেখায় আদম (আঃ)-এর চেয়ে নিজেকে উত্তম দাবি করা। কারণ সে আগুনের তৈরি, আর আগুন মাটিকে খেয়ে ফেলে। বিস্তারিত আলোচনার জন্য তিনি পাঠককে সূরা আ'রাফে পাঠান।"
          },
          {
            "en": "Three commentators, then, read the same unspoken argument into the reply, and in almost the same words: fire overpowers clay, so what is made of fire outranks what is made of clay. It is worth seeing how the argument is built. It starts from something true within its own terms, since fire does burn and harden earth. It then treats a fact about material as a fact about worth, and a fact about worth as grounds for setting aside a command. Each step feels small. Taken together they carry a creature from comparing to refusing.",
            "bn": "তিনজন তাফসীরকার তাহলে জবাবটার ভেতরে একই না-বলা যুক্তি পড়েছেন, প্রায় একই ভাষায়: আগুন মাটিকে কাবু করে, তাই আগুনে গড়া জিনিস মাটিতে গড়া জিনিসের চেয়ে উঁচু। যুক্তিটা কীভাবে সাজানো, সেটা লক্ষ করার মতো। শুরু হয় এমন কথা দিয়ে, যা নিজের গণ্ডিতে সত্য। আগুন সত্যিই মাটিকে পোড়ায়, শক্ত করে। তারপর উপাদানের একটা তথ্যকে ধরে নেওয়া হয় মর্যাদার তথ্য বলে। আর মর্যাদার সেই দাবিকে বানানো হয় হুকুম এড়িয়ে যাওয়ার ভিত্তি। প্রতিটা ধাপ ছোট মনে হয়। সব মিলিয়ে কিন্তু সেগুলোই তুলনা থেকে অস্বীকারে পৌঁছে দেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Claim He Makes Elsewhere",
          "bn": "অন্য আয়াতে তার দাবি"
        },
        "p": [
          {
            "en": "Ibn Kathir, in the abridged English tafsir on 15:28 to 15:33, says Iblis refused out of envy, disbelief, stubbornness, arrogance and false pride, and that this is why he spoke as he did here. He sets the verse beside two others: 7:12, I am better than him; You created me from fire and him You created from clay; and 17:62, Do you see this one whom You have honoured above me? As-Sa'di reads the same claim into this reply: he was arrogant towards Allah's command, showed enmity to Adam and his offspring, was pleased with his own element, and said: I am better than Adam.",
            "bn": "ইবন কাসীর তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরে ১৫:২৮ থেকে ১৫:৩৩ আয়াত প্রসঙ্গে বলেন, ইবলীস সাজদা করেনি হিংসা, কুফর, একগুঁয়েমি, অহংকার আর মিথ্যা গর্ব থেকে। এ কারণেই সে এখানে এমন কথা বলেছে। আয়াতটিকে তিনি পাশে রাখেন আরও দুটি আয়াতের সঙ্গে। ৭:১২ আয়াতে: আমি তার চেয়ে উত্তম, আমাকে তুমি আগুন থেকে বানিয়েছ আর তাকে মাটি থেকে। আর ১৭:৬২ আয়াতে: দেখো তো, এই কি সে, যাকে তুমি আমার উপর সম্মান দিলে? সা'দীও এ জবাবের ভেতরে একই দাবি পড়েন। তাঁর কথায়, সে আল্লাহর হুকুমের সামনে অহংকার করল, আদম (আঃ) ও তাঁর বংশধরদের প্রতি শত্রুতা প্রকাশ করল, নিজের উপাদান নিয়ে মুগ্ধ হলো, আর বলল: আমি আদমের চেয়ে উত্তম।"
          },
          {
            "en": "How the scholars answer the fire-over-clay reasoning itself is a question for another verse. Al-Qurtubi, on this verse, points back to al-A'raf for his explanation, and none of the commentaries fetched here on 15:33 sets out a rebuttal. So this article does not supply an answer from memory; that discussion belongs with 7:12 and its own commentary. What the texts on this verse do give, and give together, is a verdict on the motive behind the words. They name it as pride and envy, and that is where the next section goes.",
            "bn": "আগুন-মাটির এই যুক্তির জবাব আলেমরা কীভাবে দিয়েছেন, সে প্রশ্ন অন্য আয়াতের। এ আয়াতে কুরতুবী ব্যাখ্যার জন্য সূরা আ'রাফের দিকে ইঙ্গিত করেন। ১৫:৩৩ আয়াতের যে তাফসীরগুলো এখানে পড়া হয়েছে, তার কোনোটিতেই পাল্টা যুক্তি সাজানো নেই। তাই স্মৃতি থেকে কোনো জবাব এখানে জুড়ে দেওয়া হলো না। সে আলোচনার জায়গা ৭:১২ আয়াত আর তার তাফসীর। এ আয়াতের তাফসীরগুলো একসঙ্গে যা দেয়, তা হলো কথাগুলোর পেছনের মনোভাব সম্পর্কে রায়। তাঁরা সেটার নাম দেন অহংকার আর হিংসা। পরের অংশ সেদিকেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Looking Up, Looking Down",
          "bn": "উপরে না, নিচে তাকানো"
        },
        "p": [
          {
            "en": "The Muyassar introduces the words as spoken by Iblis while displaying his pride and his envy, kibrahu wa hasadahu, and al-Qurtubi names the same pair. As-Sa'di separates two directions in which the pride runs. It rose against the command: istakbara 'ala amri-llah, he was arrogant towards the command of Allah. And it turned against the one he was told to honour: he showed enmity to Adam and to his offspring. One is a refusal of what came from above. The other is contempt for what stood beside him. The reply in 15:33 carries both at once.",
            "bn": "মুয়াসসার জানায়, ইবলীস এ কথা বলেছিল নিজের অহংকার আর হিংসা প্রকাশ করতে গিয়ে, কিবরাহু ওয়া হাসাদাহু। কুরতুবীও একই দুটি নাম নেন। সা'দী অহংকারের দুটি দিক আলাদা করে দেখান। একটা উঠেছিল হুকুমের বিরুদ্ধে: ইসতাকবারা আলা আমরিল্লাহ, সে আল্লাহর হুকুমের সামনে অহংকার দেখাল। আরেকটা ঘুরে গেল তার দিকে, যাকে সম্মান করতে বলা হয়েছিল: সে আদম (আঃ) আর তাঁর সন্তানদের প্রতি শত্রুতা দেখাল। প্রথমটা উপর থেকে আসা আদেশ মানতে অস্বীকার। দ্বিতীয়টা পাশে দাঁড়ানো জনের প্রতি তাচ্ছিল্য। ১৫:৩৩ আয়াতের জবাবে দুটোই একসঙ্গে আছে।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it. A general narration, not tied to this verse, names the same two faces of pride. Sahih Muslim (91) records from Abdullah b. Mas'ud that the Messenger of Allah ﷺ said: He who has in his heart the weight of a speck (dharra) of pride shall not enter Paradise. A person (amongst his hearers) said: Verily a person loves that his dress should be fine, and his shoes should be fine. He remarked: Verily, Allah is Graceful and He loves Grace. Pride is disdaining the truth (out of self-conceit) and contempt for the people.",
            "bn": "এ আয়াতের জন্য পড়া তাফসীরগুলোর কোনোটিই আয়াতটির সঙ্গে কোনো হাদীস যুক্ত করেনি। তবে একটি সাধারণ বর্ণনা, যা এ আয়াতের সঙ্গে বাঁধা নয়, অহংকারের ঠিক এই দুই চেহারার নাম নেয়। সহীহ মুসলিম (৯১) আবদুল্লাহ ইবন মাসউদ (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: যার অন্তরে কণা (যাররা) পরিমাণ অহংকার আছে, সে জান্নাতে প্রবেশ করবে না। শ্রোতাদের একজন বলল, মানুষ তো চায় তার পোশাক সুন্দর হোক, তার জুতা সুন্দর হোক। তিনি বললেন: নিশ্চয় আল্লাহ সুন্দর, তিনি সৌন্দর্য ভালোবাসেন। অহংকার হলো আত্মম্ভরিতায় সত্যকে অগ্রাহ্য করা আর মানুষকে তুচ্ছ জ্ঞান করা।"
          },
          {
            "en": "Disdaining the truth and holding people in contempt: the two halves of the definition line up with the two directions as-Sa'di draws, though the narration itself speaks of pride in general and not of this scene. The questioner's worry is answered too. Wanting good clothes and good shoes is not what is meant. Pride is not in having something fine. It is in what a person does with a comparison: whether it turns into a reason to wave the truth away, or to look down on someone Allah has placed beside him.",
            "bn": "সত্যকে অগ্রাহ্য করা আর মানুষকে তুচ্ছ ভাবা: সংজ্ঞার এই দুই অংশ সা'দীর দেখানো দুই দিকের সঙ্গে মিলে যায়। তবে বর্ণনাটি সাধারণভাবে অহংকারের কথা বলে, এই দৃশ্যের কথা নয়। প্রশ্নকারীর দুশ্চিন্তারও জবাব আছে এতে। ভালো পোশাক, ভালো জুতা চাওয়া অহংকার নয়। ভালো কিছু থাকার মধ্যে অহংকার নেই। অহংকার লুকিয়ে থাকে তুলনাটা নিয়ে মানুষ কী করে, তার মধ্যে। সেই তুলনা কি সত্যকে ঠেলে সরানোর অজুহাত হয়ে উঠছে? নাকি আল্লাহ যাকে পাশে দাঁড় করিয়েছেন, তাকে ছোট করে দেখার কারণ হয়ে উঠছে?"
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
            "bn": "মাআরিফুল কুরআন ১৫:৩১ থেকে ১৫:৪০ আয়াত একসঙ্গে আলোচনা করে। সেখানে একটি প্রশ্ন তোলা হয়েছে: ১৫:২৮ ও ১৫:২৯ আয়াতের হুকুম তো ফেরেশতাদের উদ্দেশে, তাহলে ইবলীস কি তার আওতায় ছিল? জবাব আসে ৭:১২ আয়াত থেকে: আমি যখন তোমাকে আদেশ দিলাম, তখন সাজদা করতে তোমাকে কিসে বাধা দিল? এ থেকে বোঝা যায়, হুকুম তার কাছেও পৌঁছেছিল। সে ফেরেশতাদের মাঝে উপস্থিত ছিল। সৃষ্টির সবচেয়ে সম্মানিতদের যখন আদম (আঃ)-কে সম্মান জানাতে বলা হলো, সেখানে থাকা অন্য যে-কারও জন্য তা মানা ছিল অনিবার্য। মাআরিফের মতে, এ কারণেই ইবলীস কখনো এ অজুহাত দেয়নি যে তাকে বলাই হয়নি।"
          },
          {
            "en": "His reply here bears that out. It argues from worth, not from exemption: not I was never told, but I am not one to. One more text should be noted with its author's verdict. Ibn Kathir, in his Arabic tafsir on this verse, mentions a report that at-Tabari transmitted from Ibn Abbas about earlier groups of angels who refused the same command. He calls it strange, says its being established from Ibn Abbas is doubtful, and judges that it is apparently from the Isra'iliyyat. Nothing is built on it here.",
            "bn": "এখানে তার জবাবও সে কথাই সমর্থন করে। সে ছাড় পাওয়ার যুক্তি দেয়নি, দিয়েছে মর্যাদার যুক্তি। বলেনি, আমাকে তো বলা হয়নি। বলেছে, আমি এ কাজের লোক নই। আরেকটি বর্ণনার কথা তার লেখকের রায়সহ উল্লেখ করা দরকার। ইবন কাসীর এ আয়াতের আরবি তাফসীরে একটি বর্ণনা আনেন, যা তাবারী ইবন আব্বাস (রাঃ) থেকে উদ্ধৃত করেছেন। তাতে আছে আগের কিছু ফেরেশতাদলের কথা, যারা একই হুকুম মানতে অস্বীকার করেছিল। ইবন কাসীর একে অদ্ভুত বলেন। ইবন আব্বাস (রাঃ) থেকে এর প্রমাণ সন্দেহজনক বলেন, আর তাঁর বিচারে বাহ্যত এটি ইসরাঈলী বর্ণনা। এর উপর এখানে কিছুই দাঁড় করানো হলো না।"
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
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি ইবলীসের কথা উদ্ধৃত করে, আর গোটা অংশটি সে কথার নিন্দা করে। এখানে বর্ণনা ইবলীসের, আর কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না। প্রতিপক্ষকে ইবলীস ডাকার অধিকার এ আয়াত কাউকে দেয় না। কোনো জাতি, পরিবার বা শ্রেণিকে তার স্বভাবের বাহক ভাবারও না। আর এ আয়াতের জোরে মানুষকে উৎস দেখে উঁচু-নিচু ভাগ করা হবে অদ্ভুত পাঠ। কারণ উৎস দেখে মর্যাদা মাপার এই চালটাকেই তো তাফসীরকারেরা এখানে নিন্দা করেছেন। আয়াতটি নিজের ভেতরে তাকানোর সতর্কবার্তা, অন্যের গায়ে লাগানোর তকমা নয়।"
          },
          {
            "en": "The Qur'an lets the refusal stand in its own words, with its own logic intact, and does not argue with it inside the verse. The answer comes in what follows: in 15:34 Iblis is told to go out, for he is outcast, and in 15:35 that the curse is on him until the Day of Recompense. Those verses have their own place and are left for them. Here the reader is simply shown what the refusal sounds like from the inside, so that the same tone can be recognised when it rises in one's own voice.",
            "bn": "কুরআন অস্বীকারটাকে তার নিজের ভাষায়, নিজের যুক্তিসহ রেখে দিয়েছে। আয়াতের ভেতরে তার সঙ্গে তর্কে যায়নি। জবাব এসেছে পরের আয়াতগুলোতে। ১৫:৩৪ আয়াতে ইবলীসকে বলা হলো, বেরিয়ে যাও, তুমি বিতাড়িত। ১৫:৩৫ আয়াতে বলা হলো, বিচার দিবস পর্যন্ত তোমার উপর লা'নত। সে আয়াতগুলোর নিজস্ব জায়গা আছে, আলোচনা সেখানেই হবে। এখানে পাঠককে শুধু দেখানো হচ্ছে, ভেতর থেকে এমন অস্বীকার কেমন শোনায়। যাতে একই সুর নিজের গলায় উঠলে তা চিনে ফেলা যায়।"
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
            "bn": "দৈনন্দিন জীবনে ধাপগুলো সহজেই চোখে পড়ে। আমাকে একটা ভালো কাজ করতে বলা হলো। অনুরোধের জবাব দেওয়ার আগে আমি মেপে নিই, কে বলছে, বা কার উপকার হবে। নিজের উৎসে এমন কিছু খুঁজে পাই যা তার চেয়ে উঁচু মনে হয়: বংশ, পড়াশোনা, টাকা, কোন শহরে বড় হয়েছি। তারপর নিজের পরিচয় দিই। আমি আগে মাফ চাওয়ার লোক নই। বয়সে ছোটদের পরামর্শ আমি নিই না। ও কাজ আমার ডিগ্রির সঙ্গে যায় না। অস্বীকারটা যখন আসে, ততক্ষণে তাকে আর নাফরমানি মনে হয় না। মনে হয় আত্মসম্মান।"
          },
          {
            "en": "The shape of the sentence is the warning sign: I am not one to. When I hear it in my own mouth, it is worth pausing to ask what it is about. Is it a real limit, something I should not do? Or is it the old argument from material, dressed in newer clothes? At 15:26 the point was made that the honour given to Adam's children never rested in the clay. This verse shows the other side of that lesson: the creature who made his own material the measure of worth ended by setting it against the command of Allah.",
            "bn": "বাক্যের গড়নটাই সতর্কসংকেত: আমি এ কাজের লোক নই। নিজের মুখে কথাটা শুনলে একটু থেমে ভাবা ভালো, আসলে কী নিয়ে বলছি। এটা কি সত্যিকারের সীমা, এমন কিছু যা আমার করা উচিত নয়? নাকি উপাদান নিয়ে সেই একই পুরোনো যুক্তি, শুধু নতুন পোশাকে? ১৫:২৬ আয়াতে দেখা গেছে, আদমসন্তানের সম্মান কখনো মাটির মধ্যে ছিল না। এ আয়াত সেই শিক্ষার উল্টো পিঠ দেখায়। যে নিজের উপাদানকে মর্যাদার মাপকাঠি বানাল, শেষে সে সেটাকেই দাঁড় করাল আল্লাহর হুকুমের বিপরীতে।"
          },
          {
            "en": "A few turns follow. When I am asked to do something right, I can answer the request before I look at who made it. When I catch myself ranking someone by where they come from, I can remember whose argument that was. When the truth reaches me through a person I thought beneath me, I can take it as the truth and not as an insult. And when I feel the pull to say I am not one to, I can do the small, plain thing asked of me, and let obedience come before the question of who I am.",
            "bn": "কয়েকটা কাজের কথা এখান থেকে আসে। ভালো কিছু করতে বলা হলে, কে বলছে তা দেখার আগে অনুরোধটার জবাব দিতে পারি। কাউকে তার উৎস দেখে ছোট-বড় মাপছি টের পেলে মনে করতে পারি, যুক্তিটা আসলে কার ছিল। যাকে নিজের চেয়ে নিচে ভেবেছি, তার মুখ দিয়ে সত্য এলে সেটাকে অপমান হিসেবে না নিয়ে সত্য হিসেবেই নিতে পারি। আর যখন মুখে আসতে চায়, আমি এ কাজের লোক নই, তখন আমাকে করতে বলা ছোট, সাধারণ একটা কাজ চুপচাপ সেরে ফেলতে পারি। আমি কে, সে প্রশ্নের আগে থাকুক আনুগত্য।"
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
          "bn": "লা‘নতের পরেই সময় চাওয়া"
        },
        "p": [
          {
            "en": "This verse comes straight after a sentence has been passed. In 15:34 and 15:35 Allah tells Iblis to leave, calls him rajim, expelled, and declares the curse on him until the Day of Recompense. The refusal that brought this on was the subject of 15:33, where he would not prostrate to a human made from clay; that reply is not reopened here. What follows the curse is the verse in front of us, six words in Arabic: qala rabbi fa-anzirni ila yawmi yub'athun, he said, my Lord, then grant me respite until the Day they are raised.",
            "bn": "রায় ঘোষণার ঠিক পরেই এ আয়াত। ১৫:৩৪ ও ১৫:৩৫ আয়াতে আল্লাহ ইবলীসকে বেরিয়ে যেতে বলেন, তাকে রাজীম অর্থাৎ বিতাড়িত বলেন, আর জানিয়ে দেন, বিচার দিবস পর্যন্ত তার উপর লা‘নত। যে অস্বীকার থেকে এ পরিণতি, তার আলোচনা হয়েছে ১৫:৩৩ আয়াতে, যেখানে সে কাদামাটির তৈরি মানুষকে সাজদা করতে রাজি হয়নি। সে জবাব এখানে আবার খোলা হবে না। লা‘নতের পরে যা আসে, তা-ই আমাদের সামনের আয়াত, আরবিতে মাত্র ৬টি শব্দ: কালা রব্বি ফাআনযিরনী ইলা ইয়াওমি ইউব‘আসূন। সে বলল, হে আমার রব, তাহলে যেদিন তাদের ওঠানো হবে, সেদিন পর্যন্ত আমাকে অবকাশ দিন।"
          },
          {
            "en": "The whole request sits in one verb. Anzirni asks for a delay, and as-Sa'di glosses it with a single word, amhilni: give me time, let me be. What is asked for is not a thing but a length, measured to a day, and the day is named by what happens on it. Yub'athun is passive and names no one who does the raising; the commentators below supply the sense. Notice what the request leaves out. There is no word of regret in it and no plea to have the curse lifted. The one who has just been cursed asks only to go on living.",
            "bn": "গোটা আবেদনটা একটিমাত্র ক্রিয়ায় ধরা। আনযিরনী মানে আমাকে দেরি করতে দিন, আর সা'দী এর ব্যাখ্যা দেন এক শব্দে: আমহিলনী, আমাকে সময় দিন, ছাড় দিন। সে কোনো জিনিস চায়নি, চেয়েছে সময়ের একটা দৈর্ঘ্য, যার শেষ একটা দিনে। আর দিনটার পরিচয় সেদিন যা ঘটবে তা দিয়ে। ইউব‘আসূন কর্মবাচ্য, কে ওঠাবেন তা বলা নেই। অর্থটা খুলে বলেন তাফসীরকারেরা, সামনে তা আসছে। লক্ষ করুন, আবেদনে কী নেই। এতে অনুশোচনার একটি শব্দও নেই, লা‘নত তুলে নেওয়ার কোনো মিনতিও নেই। সদ্য লা‘নতপ্রাপ্ত সে কেবল বেঁচে থাকতে চায়।"
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
            "bn": "ফা, অর্থাৎ তাহলে, এই ছোট অব্যয়টির পেছনের কারণ তাবারী তাঁর ব্যাখ্যায় স্পষ্ট করে দেন। তাঁর ভাষায় ইবলীস বলছে: হে আমার রব, যেহেতু আপনি আমাকে আসমান থেকে বের করে দিয়েছেন আর লা‘নত করেছেন, তাহলে সেদিন পর্যন্ত আমাকে পিছিয়ে দিন, যেদিন আপনি আপনার সৃষ্টিকে কবর থেকে ওঠাবেন আর কিয়ামতের ময়দানে দাঁড় করানোর জন্য জড়ো করবেন। আবেদনটা দাঁড়িয়ে আছে সদ্য ঘোষিত রায়ের উপর। তাবারী এখানে যে ক্রিয়া ব্যবহার করেন, তা হলো আখখিরনী, আমাকে পিছিয়ে দিন। ১৭:৬২ আয়াতে ইবলীস যখন একই আবেদন করে, কুরআন নিজেও সেই ধাতুই ব্যবহার করে: যদি আপনি আমাকে কিয়ামতের দিন পর্যন্ত অবকাশ দেন।"
          },
          {
            "en": "The Muyassar keeps to the plain line and adds two things that matter. Iblis said: my Lord, postpone me in the world until the day on which You raise Your servants, and that is the Day of Resurrection. In the world tells us what kind of respite is meant: more life on earth, not a place anywhere else. And the Muyassar, like at-Tabari, names the requested day as the Resurrection. Ibn Kathir, below, names it the same way, so the commentators who define the term here agree on what was asked. What was given, and for how long, is the next question.",
            "bn": "মুয়াসসার সাদামাটা পথে চলে, তবে দুটি জরুরি কথা জুড়ে দেয়। ইবলীস বলল: হে আমার রব, দুনিয়াতে আমাকে সেদিন পর্যন্ত পিছিয়ে দিন, যেদিন আপনি আপনার বান্দাদের ওঠাবেন, আর সেটাই কিয়ামতের দিন। দুনিয়াতে কথাটা বলে দেয় অবকাশটা কী ধরনের: পৃথিবীর বুকে আরও কিছু জীবন, অন্য কোথাও কোনো জায়গা নয়। আর তাবারীর মতো মুয়াসসারও চাওয়া দিনটিকে কিয়ামতের দিন বলে চিহ্নিত করে। সামনে দেখা যাবে, ইবন কাসীরও দিনটিকে একই নামে চেনান। ফলে যাঁরা এখানে মেয়াদটা ব্যাখ্যা করেন, কী চাওয়া হয়েছিল সে ব্যাপারে তাঁরা একমত। কী দেওয়া হলো, কতদিনের জন্য, সেটা পরের প্রশ্ন।"
          }
        ]
      },
      {
        "h": {
          "en": "Envy Wants More Years",
          "bn": "হিংসা আরও বছর চায়"
        },
        "p": [
          {
            "en": "Ibn Kathir reads the request through the state of the one making it. In the Arabic text fetched for this verse he writes that once Iblis was certain of the wrath that cannot be turned back, he asked, out of the fullness of his envy of Adam and his offspring, for respite until the Day of Resurrection, which is the Day of Raising. Two things are packed into that clause. One is timing: the request comes after the verdict is final, not before it. The other is motive, and the motive Ibn Kathir names is neither fear nor grief but envy at its fullest.",
            "bn": "ইবন কাসীর আবেদনটা পড়েন আবেদনকারীর মনের অবস্থা দিয়ে। এ আয়াতের জন্য আনা আরবি পাঠে তিনি লেখেন: যে গজব আর ফেরানো যাবে না, ইবলীস যখন তা নিশ্চিত বুঝে ফেলল, তখন আদম (আঃ) ও তাঁর বংশধরদের প্রতি তার পূর্ণ হিংসা থেকে সে কিয়ামতের দিন পর্যন্ত অবকাশ চাইল, আর সেটাই পুনরুত্থানের দিন। এ এক বাক্যে দুটি কথা আছে। একটি সময়ের: আবেদন এসেছে রায় চূড়ান্ত হওয়ার পরে, আগে নয়। অন্যটি উদ্দেশ্যের। ইবন কাসীর যে উদ্দেশ্যের নাম নেন, তা ভয়ও নয়, দুঃখও নয়। তা হিংসা, আর সে হিংসা তখন কানায় কানায় ভরা।"
          },
          {
            "en": "The Qur'an confirms the reading from Iblis's own mouth. Three verses on, in 15:39, he says he will make wrong look fair to people on the earth and lead them all astray. In 17:62 he ties the delay directly to Adam's children: if You delay me until the Day of Resurrection, I will surely bring his descendants under my control, except for a few. The respite is wanted as working time. The one who would not bow to a single human now asks for the years in which to reach every one of that human's children. What he wants the time for is not left to guesswork.",
            "bn": "ইবলীসের নিজের মুখের কথাই এ ব্যাখ্যার সাক্ষী। ৩ আয়াত পরে, ১৫:৩৯ আয়াতে, সে বলে, পৃথিবীতে সে মানুষের চোখে পাপকে সুন্দর করে দেখাবে আর তাদের সবাইকে বিপথে নেবে। ১৭:৬২ আয়াতে সে অবকাশকে সরাসরি আদম-সন্তানদের সঙ্গে জুড়ে দেয়: আপনি যদি আমাকে কিয়ামতের দিন পর্যন্ত সময় দেন, তাহলে অল্প কজন ছাড়া তার বংশধরদের অবশ্যই আমার কর্তৃত্বে এনে ফেলব। অবকাশটা তার দরকার কাজের সময় হিসেবে। যে একজন মানুষকে সাজদা করতে রাজি হয়নি, সে-ই এখন চাইছে এমন বছর, যাতে ওই মানুষের প্রতিটি সন্তানের কাছে পৌঁছানো যায়। সময়টা সে কী কাজে চায়, তা অনুমানের উপর ছেড়ে রাখা হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking Not to Die",
          "bn": "মৃত্যু এড়াতে চাওয়া"
        },
        "p": [
          {
            "en": "Al-Baghawi's comment on the verse is a single line: arada al-khabith an la yamut, the vile creature wanted not to die. He reads the chosen day as the point of the request. The Day of Raising, as at-Tabari described it, is the day the dead come out of their graves, and a creature asking to last until then is, on al-Baghawi's reading, asking to be spared death itself. Al-Baghawi states the aim and nothing more; the line fetched for this verse does not set out his reasoning, and it should be held no more firmly than he holds it.",
            "bn": "এ আয়াতে বাগাভীর মন্তব্য এক লাইনের: আরাদাল খাবীসু আল্লা ইয়ামূত, খবিসটা চেয়েছিল যেন তার মৃত্যু না হয়। তাঁর মতে দিনটা বেছে নেওয়াতেই আবেদনের আসল উদ্দেশ্য। তাবারীর বর্ণনায় পুনরুত্থানের দিন হলো সেদিন, যেদিন মৃতরা কবর থেকে বেরিয়ে আসবে। বাগাভীর পাঠে, সেদিন পর্যন্ত টিকে থাকতে চাওয়া মানে খোদ মৃত্যু থেকেই রেহাই চাওয়া। বাগাভী শুধু উদ্দেশ্যটা বলেন, এর বেশি কিছু নয়। এ আয়াতের জন্য আনা লাইনে তাঁর যুক্তি খুলে বলা নেই। তাই তিনি যতটা জোর দিয়ে বলেছেন, কথাটাকে তার চেয়ে বেশি জোর দিয়ে ধরা ঠিক হবে না।"
          },
          {
            "en": "Did he get what he asked? The answer comes in the next two verses, and it comes in other words. Allah does not repeat until the Day they are raised. He says in 15:37 and 15:38: then you are among those given respite, until the Day of the known time. The request named the Resurrection; the grant names a time that is known. What that time is, and whether the grant reaches as far as the request, is not settled in any text fetched for 15:36. Those questions belong to 15:38, and this article will not answer them from memory.",
            "bn": "সে কি যা চেয়েছিল তা পেল? জবাব আসে পরের দুই আয়াতে, আর আসে ভিন্ন শব্দে। যেদিন তাদের ওঠানো হবে, আল্লাহ কথাটা আর ফিরিয়ে বলেন না। ১৫:৩৭ ও ১৫:৩৮ আয়াতে তিনি বলেন: তুমি অবকাশপ্রাপ্তদের একজন, নির্ধারিত সময়ের দিন পর্যন্ত। আবেদনে ছিল পুনরুত্থানের নাম, মঞ্জুরিতে আছে এমন এক সময়ের কথা, যা জানা। সেই সময়টা কী, আর মঞ্জুরি আবেদনের পুরো মেয়াদ ছুঁয়েছে কি না, ১৫:৩৬ আয়াতের জন্য আনা কোনো পাঠে তার মীমাংসা নেই। প্রশ্ন দুটি ১৫:৩৮ আয়াতের আলোচনার বিষয়। স্মৃতি থেকে এর জবাব এ লেখায় দেওয়া হবে না।"
          },
          {
            "en": "Two of the fetched sources treat this verse only as part of a block. Ibn Kathir's abridged English commentary groups 15:34 to 15:38 under a heading on Iblis's expulsion and his reprieve, but the fetched portion stops at the curse. Ma'arif al-Qur'an groups 15:31 to 15:40, and what it says there concerns whether the command to prostrate reached Iblis at all. Neither says anything of its own about this request, so neither is drawn on here. The text returned for al-Qurtubi on 15:36 is a stray line about people who doubt a coming punishment, and it is set aside.",
            "bn": "আনা উৎসগুলোর দুটি এ আয়াতকে দেখে কেবল একটি গুচ্ছের অংশ হিসেবে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৩৪ থেকে ১৫:৩৮ পর্যন্ত আয়াত এক শিরোনামে রাখে, যার বিষয় ইবলীসের বহিষ্কার ও তার অবকাশ। কিন্তু আনা অংশটুকু লা‘নতের কথায় এসেই থেমে গেছে। মাআরিফুল কুরআন ১৫:৩১ থেকে ১৫:৪০ পর্যন্ত আয়াত একসঙ্গে রাখে, আর সেখানে তার আলোচনা হলো, সাজদার হুকুম আদৌ ইবলীসের উপর বর্তেছিল কি না। এই আবেদন নিয়ে দুটির কোনোটিরই নিজস্ব কোনো কথা নেই, তাই এখানে সেগুলো কাজে লাগানো হয়নি। ১৫:৩৬ আয়াতে কুরতুবীর নামে যে পাঠ এসেছে, তা আসন্ন শাস্তি নিয়ে সন্দিহান লোকদের সম্পর্কে একটি বিচ্ছিন্ন লাইন। সেটাও বাদ রাখা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Granted, Yet Not Honoured",
          "bn": "মঞ্জুর, তবু সম্মান নয়"
        },
        "p": [
          {
            "en": "As-Sa'di treats 15:36 to 15:38 together and reaches the point a reader most needs. Allah's answering his supplication, he writes, is no honour in his favour; it is only a trial and a test from Allah, for Iblis and for the servants, so that the truthful who obey their Master rather than their enemy may be made distinct from those who do not. The grant, on this reading, says nothing good about its recipient. It sets up a field on which everyone else will be tested.",
            "bn": "সা'দী ১৫:৩৬ থেকে ১৫:৩৮ আয়াত একসঙ্গে ব্যাখ্যা করেন, আর পাঠকের সবচেয়ে দরকারি কথাটায় পৌঁছে যান। তিনি লেখেন, আল্লাহ যে তার দু‘আ কবুল করলেন, তাতে তার কোনো সম্মান নেই। এ কেবল আল্লাহর পক্ষ থেকে পরীক্ষা, ইবলীসের জন্যও, বান্দাদের জন্যও। উদ্দেশ্য, কে সত্যিকারের বান্দা, যে দুশমনের কথা নয়, নিজের মালিকের কথা মানে, আর কে তেমন নয়, তা আলাদা করে দেখা যাবে। এ পাঠে মঞ্জুরিটা প্রাপকের ভালো কিছুর সাক্ষ্য দেয় না। বরং এমন এক ময়দান তৈরি করে, যেখানে বাকি সবার পরীক্ষা হবে।"
          },
          {
            "en": "He draws the consequence at once: for that reason Allah warned us against him with the utmost warning and explained to us what he wants from us. The respite and the warning come together. Iblis has his time, and the human being has been told plainly who is using it and to what end. That changes how the verse lands on a reader. It is not a story about how Iblis got his way. It is a notice that he who asked for time asked for it against us, and that we were told in advance.",
            "bn": "এর ফল তিনি সঙ্গে সঙ্গেই টানেন: এ কারণেই আল্লাহ তার ব্যাপারে আমাদের সবচেয়ে কড়া সতর্কবাণী দিয়েছেন, আর সে আমাদের কাছে কী চায় তা খুলে বলেছেন। অবকাশ আর সতর্কবাণী এসেছে একসঙ্গে। ইবলীস তার সময় পেয়েছে, আর মানুষকে পরিষ্কার জানিয়ে দেওয়া হয়েছে, কে সে সময় কাজে লাগাচ্ছে, কী উদ্দেশ্যে। এতে পাঠকের কাছে আয়াতটার ওজন বদলে যায়। ইবলীস কীভাবে নিজের ইচ্ছা পূরণ করল, এ তার গল্প নয়। এ এক আগাম খবর: যে সময় চেয়েছিল, সে চেয়েছিল আমাদের বিরুদ্ধে, আর আমাদের তা আগেই জানিয়ে রাখা হয়েছে।"
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
            "bn": "কুরআন এ আবেদন একাধিক সূরায় উল্লেখ করেছে, আর শব্দ কিছুটা বদলায়। ৭:১৪ আয়াতে তা একেবারে ছোট: আনযিরনী ইলা ইয়াওমি ইউব‘আসূন, যেদিন তাদের ওঠানো হবে সেদিন পর্যন্ত আমাকে অবকাশ দিন। সেখানে হে আমার রব নেই, তাহলেও নেই। ৭:১৫ আয়াতের জবাবও তেমনি ছোট: তুমি অবকাশপ্রাপ্তদের একজন, কোনো মেয়াদের উল্লেখ নেই। ৩৮:৭৯ থেকে ৩৮:৮১ আয়াতে কথোপকথন হুবহু এখানকার মতো, নির্ধারিত সময়ের দিনসহ। আর ১৭:৬২ আয়াতে আবেদনটা এসেছে শর্তের আকারে, একই বাক্যে তার উদ্দেশ্যসহ।"
          },
          {
            "en": "No commentary fetched for 15:36 compares these passages, so nothing is claimed here about why the wording differs. What the comparison shows is limited and plain. In every telling Iblis asks for time and not for pardon, and in 7:15 and 38:80, as here, the request is met. In 17:62 the purpose sits inside the request itself, so the reader of that verse cannot miss what the time was for. Read beside it, the shorter plea in this surah carries the same weight, even though it states no aim of its own.",
            "bn": "১৫:৩৬ আয়াতের জন্য আনা কোনো তাফসীর এ অংশগুলোকে পাশাপাশি রেখে তুলনা করেনি। তাই শব্দ কেন বদলায়, সে ব্যাপারে এখানে কোনো দাবি করা হচ্ছে না। তুলনা থেকে যা বোঝা যায়, তা সীমিত আর সরল। প্রতিটি বর্ণনায় ইবলীস চেয়েছে সময়, ক্ষমা নয়। আর ৭:১৫ ও ৩৮:৮০ আয়াতে, এখানকার মতোই, তার চাওয়া মঞ্জুর হয়েছে। ১৭:৬২ আয়াতে উদ্দেশ্যটা আবেদনের ভেতরেই বসানো, ফলে সময়টা কীসের জন্য, সে আয়াতের পাঠকের চোখ এড়ায় না। সেটার পাশে রেখে পড়লে এ সূরার ছোট আবেদনটাও একই ওজন বহন করে, যদিও এখানে নিজের কোনো উদ্দেশ্য সে মুখে আনেনি।"
          }
        ]
      },
      {
        "h": {
          "en": "Respite in the Prophet's Words",
          "bn": "নবীজির ﷺ কথায় অবকাশ"
        },
        "p": [
          {
            "en": "No commentary fetched for this verse attaches a hadith of the Prophet ﷺ to it, and none is attached here. One sound narration speaks of respite in general, and it is marked as such: it concerns the wrongdoer, and the Prophet ﷺ recited 11:102 with it, not this verse. Sahih al-Bukhari (4686) records from Abu Musa that Allah's Messenger ﷺ said: Allah gives respite to the oppressor, but when He takes him over, He never releases him. Then he recited: Such is the seizure of your Lord when He seizes (population of) towns in the midst of their wrong: painful indeed, and severe is His seizure.",
            "bn": "এ আয়াতের জন্য আনা কোনো তাফসীর এর সঙ্গে নবী ﷺ-এর কোনো হাদীস জুড়ে দেয়নি, এখানেও জোড়া হচ্ছে না। অবকাশ নিয়ে সাধারণভাবে একটি সহীহ বর্ণনা আছে, আর তা সাধারণ বর্ণনা হিসেবেই চিহ্নিত থাকল। এর বিষয় জালিম, আর নবী ﷺ এর সঙ্গে ১১:১০২ আয়াত পড়েছিলেন, এ আয়াত নয়। সহীহ বুখারী (৪৬৮৬) আবু মূসা (রাঃ) থেকে বর্ণনা করে, রাসূলুল্লাহ ﷺ বলেছেন: আল্লাহ জালিমকে অবকাশ দেন, কিন্তু যখন তাকে পাকড়াও করেন, তখন আর ছাড়েন না। তারপর তিনি পড়লেন: তোমার রবের পাকড়াও এমনই, যখন তিনি জনপদগুলোকে পাকড়াও করেন তাদের জুলুমে লিপ্ত অবস্থায়। নিশ্চয় তাঁর পাকড়াও বড় যন্ত্রণাদায়ক, বড় কঠিন।"
          },
          {
            "en": "A second narration, also general, speaks to the other side of the same stretch of time. Jami' at-Tirmidhi (3537) records from Ibn Umar that the Prophet ﷺ said: Indeed Allah accepts the repentance of a slave as long as (his soul does not reach his throat). At-Tirmidhi grades it hasan gharib, and it is given here at that grade. Neither narration is about Iblis. Placed beside the verse, they show respite from both ends: it can be the space before a seizure, and it is also the space in which repentance is still accepted.",
            "bn": "আরেকটি বর্ণনা, এটিও সাধারণ, একই সময়ের অন্য দিকটা দেখায়। জামি‘ তিরমিযী (৩৫৩৭) ইবন উমর (রাঃ) থেকে বর্ণনা করে, নবী ﷺ বলেছেন: নিশ্চয় আল্লাহ বান্দার তওবা কবুল করেন, যতক্ষণ না তার প্রাণ কণ্ঠনালিতে এসে পৌঁছায়। তিরমিযী একে হাসান গরীব বলেছেন, এখানে সেই মানেই উল্লেখ করা হলো। কোনো বর্ণনাই ইবলীস সম্পর্কে নয়। আয়াতের পাশে রাখলে এ দুটি অবকাশকে দুই দিক থেকে দেখায়। অবকাশ হতে পারে পাকড়াওয়ের আগের সময়, আবার এটাই সেই সময়, যখন তওবা এখনো কবুল হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "The Time I Am Still Given",
          "bn": "যে সময় এখনো হাতে আছে"
        },
        "p": [
          {
            "en": "The verse describes Iblis and what he asked; it licenses nothing against any living person or community, and no one is to be named as his likeness. Its question turns inward instead. Iblis was given time, and on as-Sa'di's reading the gift was a test. Every reader is also living on time that was given. The day that begins each morning is owed to no one, and the Qur'an has just shown what one creature chose to do with his. The question left for me is what I am doing with mine.",
            "bn": "আয়াতটি ইবলীস আর তার চাওয়ার বর্ণনা দেয়। কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কোনো অনুমতি দেয় না, কাউকে তার সঙ্গে তুলনা করারও নয়। আয়াতের প্রশ্নটা বরং ভেতরের দিকে ফেরে। ইবলীস সময় পেয়েছিল, আর সা'দীর পাঠে সে দান ছিল পরীক্ষা। প্রত্যেক পাঠকও বেঁচে আছেন পাওয়া সময়ের উপর। প্রতি সকালে যে দিন শুরু হয়, তা কারও পাওনা নয়। একজন তার সময় দিয়ে কী করতে চেয়েছিল, কুরআন তা এইমাত্র দেখাল। আমার জন্য প্রশ্ন একটাই: আমার সময় দিয়ে আমি কী করছি?"
          },
          {
            "en": "There is a way of living that copies the request without meaning to. It is the habit of asking for later: later I will pray properly, later I will return what I owe, later I will stop. The words are not Iblis's, but the shape is close, because it asks for more time without asking for pardon. Each delay feels small on the day it is made. The Tirmidhi narration above sets a limit on that feeling: repentance is accepted until the soul reaches the throat, and no one is told in advance when that will be.",
            "bn": "এমন এক জীবনধারা আছে, যা না বুঝেই এ আবেদনের নকল করে। সেটা হলো পরে করার অভ্যাস। পরে ঠিকমতো নামায পড়ব, পরে পাওনা ফিরিয়ে দেব, পরে ছেড়ে দেব। কথাগুলো ইবলীসের নয়, কিন্তু ধরনটা কাছাকাছি। এখানেও ক্ষমা না চেয়ে কেবল আরও সময় চাওয়া হচ্ছে। যেদিন পিছিয়ে দেওয়া হয়, সেদিন প্রতিটি দেরিকে ছোটই মনে হয়। উপরের তিরমিযীর বর্ণনা এ অনুভূতির একটা সীমা টেনে দেয়। প্রাণ কণ্ঠনালিতে পৌঁছানো পর্যন্ত তওবা কবুল হয়, আর সেটা কবে, তা কাউকে আগে থেকে বলে দেওয়া হয় না।"
          },
          {
            "en": "Respite can be used the other way. The same stretch of days that Iblis wanted for misleading is, for a believer, the room in which to turn back, make amends and begin again. So the reflection is practical. What have I kept postponing? What would I set right today if I believed my term was nearer than I think? He who asked for time in this verse wanted it in order to go on as he was. The reader is asked to want it in order to come back, and to begin before the day that is known.",
            "bn": "অবকাশ উল্টো পথেও কাজে লাগানো যায়। যে দিনগুলো ইবলীস চেয়েছিল মানুষকে বিপথে নিতে, মুমিনের কাছে সেই দিনগুলোই ফিরে আসার, ক্ষতি পুষিয়ে দেওয়ার, নতুন করে শুরু করার সুযোগ। তাই এ ভাবনা একেবারে কাজের ভাবনা। কোন কাজটা আমি কেবলই পিছিয়ে যাচ্ছি? যদি বিশ্বাস করতাম আমার মেয়াদ আমার ধারণার চেয়ে কাছে, তাহলে আজ কী ঠিক করে নিতাম? এ আয়াতে যে সময় চেয়েছিল, সে চেয়েছিল যেমন ছিল তেমনই চলতে। পাঠকের কাছে চাওয়া হচ্ছে, সময়টাকে যেন সে ফিরে আসার জন্য চায়, আর সেই জানা দিনটি আসার আগেই শুরু করে।"
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
            "bn": "আয়াতটি আসে এক কঠিন অংশের শেষে। ১৫:৩৯ আয়াতে ইবলীস কসম খায়, পৃথিবীতে মানুষের চোখে নাফরমানিকে সে আকর্ষণীয় করে তুলবে আর সবাইকে পথভ্রষ্ট করবে। বাদ থাকবে কেবল ১৫:৪০ আয়াতের বাছাই করা বান্দারা। আল্লাহ ১৫:৪২ আয়াতে জবাব দেন, তাঁর বান্দাদের উপর তার কোনো ক্ষমতা নেই, যারা তাকে অনুসরণ করে তারা ছাড়া। ১৫:৪৩ ও ১৫:৪৪ আয়াতে বলা হয়, সেই অনুসারীদের ওয়াদাকৃত ঠিকানা জাহান্নাম, তার সাতটি দরজা, প্রতিটি দরজার জন্য তাদের একটি ভাগ নির্দিষ্ট। তারপর মাঝখানে কোনো কাহিনি ছাড়াই আসে আরবির পাঁচটি শব্দ: ইন্নাল মুত্তাকীনা ফী জান্নাতিন ওয়া উয়ূন।"
          },
          {
            "en": "The commentators read the turn as deliberate. Ibn Kathir opens his note on the verse by saying that, having mentioned the state of the people of the Fire, Allah turned to mention Paradise, and that its people are in gardens and springs. As-Sa'di draws the pairing more sharply: once Allah had mentioned the punishment and severe torment He prepared for His enemies, the followers of Iblis, He mentioned what He prepared for His friends, the awliya', of great favour and lasting bliss. One passage, in their reading, holds both outcomes side by side.",
            "bn": "তাফসীরকারেরা এই মোড়টাকে ইচ্ছাকৃত বলেই পড়েন। ইবন কাসীর আয়াতটির আলোচনা শুরু করেন এ কথা দিয়ে: জাহান্নামীদের অবস্থা বলার পর আল্লাহ জান্নাতের কথায় এলেন, আর বললেন তার বাসিন্দারা বাগান ও ঝরনার মাঝে। সা'দী জোড়াটাকে আরও স্পষ্ট করে দেখান। আল্লাহ তাঁর শত্রুদের জন্য, অর্থাৎ ইবলীসের অনুসারীদের জন্য, যে শাস্তি আর কঠিন আযাব প্রস্তুত রেখেছেন তা বলার পর বললেন তাঁর আউলিয়ার জন্য কী রেখেছেন: বিরাট অনুগ্রহ আর চিরস্থায়ী নিয়ামত। তাঁদের পাঠে একই অংশে দুই পরিণাম পাশাপাশি রাখা।"
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
            "bn": "মুত্তাকী মানে যার তাকওয়া আছে, আর তাফসীরকারেরা শব্দটা বোঝান সে কিসের থেকে বেঁচে চলে তা দিয়ে। তাবারী কথাটা বলেন আল্লাহকে কেন্দ্র করে: যারা আনুগত্যের মাধ্যমে আল্লাহকে ভয় করে চলেছে, তাঁকে ভয় পেয়েছে, আর তাই তাঁর নাফরমানি থেকে দূরে থেকেছে। মুয়াসসার একই কথা বলে হুকুমের ভাষায়: যারা আল্লাহর আদেশ পালন করে আর নিষেধ থেকে বিরত থেকে তাঁকে ভয় করে চলেছে। দুই ব্যাখ্যাতেই তাকওয়া কোনো মনের অবস্থা নয়। তাকওয়া এক ধরনের চলা, যা দেখা যায় মানুষ কী করে আর কী ছেড়ে দেয় তাতে।"
          },
          {
            "en": "Two others name the thing avoided, and their lists differ in reach. Al-Qurtubi says the muttaqin here are those who guarded against al-fawahish and al-shirk: gross indecencies and associating partners with Allah. As-Sa'di says they are those who guarded against obeying Satan and against what he calls them to of all sins and disobedience. One names the gravest wrongs, the other every wrong Satan invites to. Neither commentator argues with the other, and the article does not choose between them; both readings stand in the texts as given.",
            "bn": "আরও দুজন নাম ধরে বলেন কী থেকে বাঁচা, আর তাঁদের তালিকার পরিধি আলাদা। কুরতুবী বলেন, এখানে মুত্তাকী তারা, যারা আল-ফাওয়াহিশ ও শিরক থেকে বেঁচে থেকেছে, অর্থাৎ জঘন্য অশ্লীলতা আর আল্লাহর সাথে শরীক করা থেকে। সা'দী বলেন, তারা শয়তানের আনুগত্য থেকে বেঁচেছে, আর শয়তান যেসব গুনাহ ও নাফরমানির দিকে ডাকে তার সবগুলো থেকে। একজন বলেন সবচেয়ে বড় অন্যায়গুলোর কথা, অন্যজন শয়তানের ডাকা প্রতিটি অন্যায়ের কথা। কেউ কারও সঙ্গে তর্ক করেননি, আর এ লেখাও কোনো একটিকে বেছে নেয় না। দুটি পাঠই তাদের নিজ নিজ তাফসীরে যেমন আছে তেমনই থাকুক।"
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
            "bn": "সা'দীর ভাষা পুরো অংশটার দিকে ফিরে যায়। ১৫:৩৯ আয়াতে ইবলীসের কসম ছিল লা-উযাইয়্যিনান্না লাহুম: আমি অবশ্যই তাদের চোখে সাজিয়ে সুন্দর করে দেখাব। ১৫:৪২ আয়াতে আল্লাহর জবাব ছিল, তার ক্ষমতা কেবল তাদের উপর, যারা তাকে অনুসরণ করে। সা'দী যখন মুত্তাকীদের বলেন শয়তানের আনুগত্য আর তার ডাক থেকে বেঁচে থাকা মানুষ, তখন আয়াতটি হয়ে যায় সেই কথোপকথনের বাকি অর্ধেক। ইবলীস যাদের উপর চেষ্টা চালিয়েছিল আর ব্যর্থ হয়েছিল, এরা তারাই। সে সাজিয়ে দেখিয়েছে, তারা সেই সাজের পিছু নেয়নি।"
          },
          {
            "en": "That reading also keeps the promise from sounding like a reward for people who were never tempted. The passage takes for granted that everyone is approached; Iblis swore to mislead them all. What separates the two groups in 15:42 to 15:45 is not whether the whisper came, but whether it was followed. None of the fetched commentators equates the muttaqin of this verse with the chosen servants of 15:40, so the article leaves that link unmade, and notes only that the two descriptions stand a few verses apart.",
            "bn": "এই পাঠ আরেকটা কাজ করে। ওয়াদাটাকে এমন লোকদের পুরস্কার মনে হতে দেয় না, যাদের কখনো প্রলোভনই আসেনি। অংশটা ধরে নেয়, প্রত্যেকের কাছেই শয়তান আসে। ইবলীস তো সবাইকে পথভ্রষ্ট করার কসম খেয়েছিল। ১৫:৪২ থেকে ১৫:৪৫ আয়াতে দুই দলকে আলাদা করে ফিসফিসানি এসেছিল কি না তা নয়, বরং তার পিছু নেওয়া হয়েছিল কি না। যেসব তাফসীর এখানে পড়া হয়েছে, তার কোনোটিই এ আয়াতের মুত্তাকীদের ১৫:৪০ আয়াতের বাছাই করা বান্দাদের সঙ্গে এক করেনি। তাই এ লেখাও সে সংযোগ টানছে না। শুধু এটুকু বলছে যে দুটি বর্ণনা কয়েক আয়াতের ব্যবধানে দাঁড়িয়ে আছে।"
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
            "en": "Jannat is plural, and three of the fetched texts gloss it with the same everyday word: basatin, orchards or planted gardens. Al-Qurtubi says fi jannat means in basatin, al-Baghawi says the same, and the Muyassar opens its paraphrase of the group with fi basatin. None of them adds a list of what grows there. Their restraint is worth copying. The verse gives a plural noun without an article, and the glosses answer it with a plain word any Arab listener knew from the land around him.",
            "bn": "জান্নাত শব্দটি এখানে বহুবচন, আর পড়া তাফসীরগুলোর তিনটি একে একই চেনা শব্দ দিয়ে ব্যাখ্যা করে: বাসাতীন, অর্থাৎ ফলের বাগান বা গাছ লাগানো বাগিচা। কুরতুবী বলেন, ফী জান্নাত মানে বাসাতীনে। বাগাভীও তাই বলেন। মুয়াসসার আয়াতগুচ্ছের ব্যাখ্যা শুরুই করে ফী বাসাতীন দিয়ে। তাঁদের কেউ সেখানে কী কী জন্মায় তার তালিকা জুড়ে দেননি। এই সংযম অনুসরণ করার মতো। আয়াত দিয়েছে আলিফ-লাম ছাড়া একটি বহুবচন শব্দ, আর ব্যাখ্যাকারেরা জবাব দিয়েছেন এমন সাদামাটা শব্দে, যা আশপাশের জমিন দেখে যেকোনো আরব শ্রোতা চিনত।"
          },
          {
            "en": "As-Sa'di alone describes. The gardens, he says, contain every kind of tree, and in them every delicious fruit has ripened, in every season. That is the whole of his description, and the article adds nothing to it. What he stresses is completeness and constancy: all the trees, all the fruits, all the times. Set against the verses just before, where the Fire is divided into portions at seven gates, his gardens are marked by the absence of any lack.",
            "bn": "বর্ণনা যিনি দেন, তিনি সা'দী। তিনি বলেন, এই বাগানগুলোতে সব ধরনের গাছ আছে, আর সেখানে সব সুস্বাদু ফল পেকে থাকে, সব সময়। তাঁর বর্ণনা এটুকুই, আর এ লেখাও এর সঙ্গে কিছু যোগ করছে না। তাঁর জোর পূর্ণতা আর স্থায়িত্বের উপর: সব গাছ, সব ফল, সব সময়। ঠিক আগের আয়াতগুলোতে জাহান্নামকে সাতটি দরজায় ভাগে ভাগে বণ্টন করা হয়েছে। তার পাশে রাখলে সা'দীর বাগানের পরিচয় হলো, সেখানে কোনো কিছুর কমতি নেই।"
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
            "bn": "উয়ূন শব্দটি আইন-এর বহুবচন, যার অর্থ ঝরনা। তবু যাঁরা এর ব্যাখ্যা দিয়েছেন, তাঁরা নদীর কথা বলেন। বাগাভী বলেন, বাগিচা আর আনহারে, অর্থাৎ নদীতে। মুয়াসসার বলে, বাগিচা আর আনহার জারিয়ায়, অর্থাৎ বয়ে চলা নদীতে। কুরতুবী সবচেয়ে নির্দিষ্ট করে বলেন: উয়ূন হলো চারটি নদী, পানি, শরাব, দুধ আর মধুর। তিনি কোনো আয়াতের উল্লেখ করেননি। তবে ৪৭:১৫ আয়াত মুত্তাকীদের ওয়াদাকৃত জান্নাতে ঠিক এই চার রকম নদীর কথাই বলে। সে আয়াত নিয়ে এই সিরিজে আলাদা লেখা আগেই আছে।"
          },
          {
            "en": "Al-Qurtubi then separates these from other named springs of Paradise. The springs mentioned in Surat al-Insan, kafur, zanjabil and salsabil, and tasnim in al-Mutaffifin, he says he will discuss with their people when he reaches them. Those names appear at 76:5, 76:17, 76:18 and 83:27. His point for this verse is only that its 'uyun are the four rivers, while those named springs belong to their own passages, so a reader should not import their details here.",
            "bn": "এরপর কুরতুবী জান্নাতের অন্য নামধারী ঝরনাগুলোকে এদের থেকে আলাদা করেন। সূরা আল-ইনসানে যেসব ঝরনার উল্লেখ আছে, কাফূর, যানজাবীল ও সালসাবীল, আর আল-মুতাফফিফীনে যে তাসনীমের কথা আছে, সেগুলো আর সেগুলোর অধিকারীদের কথা তিনি সেসব জায়গায় পৌঁছে বলবেন বলে জানান। নামগুলো আছে ৭৬:৫, ৭৬:১৭, ৭৬:১৮ ও ৮৩:২৭ আয়াতে। এ আয়াতের জন্য তাঁর কথা শুধু এটুকু: এখানকার উয়ূন হলো ওই চারটি নদী। নামধারী ঝরনাগুলো নিজ নিজ অংশের বিষয়, তাই সেগুলোর খুঁটিনাটি এখানে টেনে আনা ঠিক নয়।"
          },
          {
            "en": "He closes with a note on reading. The 'ayn of 'uyun may be read with damma, 'uyun, which is the original form, or with kasra, 'iyun, to suit the ya' that follows; both, he says, have been recited. The word is small, and the difference changes nothing in its meaning. It is a reminder that the text reached us as recitation, with its variations carefully kept, and that the commentators recorded even a vowel when a reading differed.",
            "bn": "শেষে তিনি পাঠ নিয়ে একটি কথা বলেন। উয়ূন শব্দের আইন পেশ দিয়ে পড়া যায়, উয়ূন, যা মূল রূপ। আবার পরের ইয়া-র সঙ্গে মিল রেখে যের দিয়েও পড়া যায়, ইয়ূন। তিনি বলেন, দুইভাবেই তিলাওয়াত হয়েছে। শব্দটি ছোট, আর এই পার্থক্যে অর্থের কিছুই বদলায় না। তবু এটি মনে করিয়ে দেয়, কুরআন আমাদের কাছে পৌঁছেছে তিলাওয়াত হিসেবে, তার ভিন্নতাগুলো যত্ন করে সংরক্ষণ করে। পাঠে একটি স্বরচিহ্নের পার্থক্য হলেও তাফসীরকারেরা তা লিখে রেখেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Group Goes Next",
          "bn": "আয়াতগুচ্ছ এরপর যেদিকে যায়"
        },
        "p": [
          {
            "en": "Three of the fetched commentaries treat this verse as the opening of a group. The Muyassar paraphrases 15:45 to 15:48 together, Ma'arif al-Qur'an comments on 15:45 to 15:47, and the abridged English Ibn Kathir runs from 15:45 to 15:50. Only what they say of this verse is used above. What follows in their groups belongs to the next verses: the greeting to enter in peace and safety in 15:46, the rancour removed from hearts in 15:47, and the absence of fatigue and of any expulsion in 15:48. Each will need its own page.",
            "bn": "পড়া তাফসীরগুলোর তিনটি এ আয়াতকে একটি আয়াতগুচ্ছের শুরু হিসেবে দেখে। মুয়াসসার ১৫:৪৫ থেকে ১৫:৪৮ পর্যন্ত একসঙ্গে ব্যাখ্যা করে। মাআরিফুল কুরআন আলোচনা করে ১৫:৪৫ থেকে ১৫:৪৭ পর্যন্ত। আর ইবন কাসীরের সংক্ষিপ্ত ইংরেজি সংস্করণ চলে ১৫:৪৫ থেকে ১৫:৫০ পর্যন্ত। ওপরে কেবল এ আয়াত সম্পর্কে তাঁদের কথাই নেওয়া হয়েছে। বাকিটা পরের আয়াতগুলোর বিষয়: ১৫:৪৬ আয়াতে শান্তি ও নিরাপত্তার সঙ্গে প্রবেশের আহ্বান, ১৫:৪৭ আয়াতে অন্তর থেকে বিদ্বেষ দূর করা, আর ১৫:৪৮ আয়াতে ক্লান্তি না থাকা আর কখনো বের করে না দেওয়া। প্রতিটির জন্য আলাদা লেখা দরকার।"
          },
          {
            "en": "The same care applies to hadith. None of the fetched commentaries attaches a hadith to 15:45 itself. The narrations that Ibn Kathir and Ma'arif al-Qur'an bring in these groups are attached to the verses on rancour and on fatigue, and they will be weighed there. At the group's end Ibn Kathir reaches 15:49 and 15:50, forgiveness and painful punishment announced together, and says they show that a believer must live between hope and fear. That pair already has its own article in this series.",
            "bn": "হাদীসের বেলাতেও একই সতর্কতা। পড়া তাফসীরগুলোর কোনোটিই ১৫:৪৫ আয়াতের সঙ্গে সরাসরি কোনো হাদীস যুক্ত করেনি। ইবন কাসীর আর মাআরিফুল কুরআন এই আয়াতগুচ্ছে যেসব বর্ণনা এনেছেন, সেগুলো বিদ্বেষ আর ক্লান্তির আয়াতের সঙ্গে যুক্ত, আর সেগুলোর বিচার সেখানেই হবে। গুচ্ছের শেষে ইবন কাসীর পৌঁছান ১৫:৪৯ ও ১৫:৫০ আয়াতে, যেখানে ক্ষমা আর যন্ত্রণাদায়ক শাস্তির ঘোষণা একসঙ্গে। তিনি বলেন, এ থেকে বোঝা যায় মুমিনকে আশা আর ভয়ের মাঝখানে থাকতে হবে। সেই জোড়া নিয়ে এই সিরিজে আলাদা লেখা আগেই আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Quality, Not a Roll Call",
          "bn": "গুণের নাম, দলের তালিকা নয়"
        },
        "p": [
          {
            "en": "The verse does not say that some named people will be in gardens and springs. It says al-muttaqin, those who have a quality, and every commentator above defines that quality by conduct: obeying, avoiding, guarding against shirk and indecency, refusing Satan's call. No one can hold the title by birth or belonging. Taqwa, on these readings, is something done, and so the promise is open to anyone who does it, and cannot be claimed by anyone who merely wears the word.",
            "bn": "আয়াতটি বলে না যে নির্দিষ্ট কিছু লোক বাগান আর ঝরনার মাঝে থাকবে। বলে আল-মুত্তাকীন, অর্থাৎ যাদের একটি গুণ আছে। আর ওপরের প্রত্যেক তাফসীরকার সেই গুণকে সংজ্ঞায়িত করেছেন আচরণ দিয়ে: আনুগত্য, বিরত থাকা, শিরক ও অশ্লীলতা থেকে বেঁচে থাকা, শয়তানের ডাক প্রত্যাখ্যান করা। জন্ম বা দলের সুবাদে কেউ এই পরিচয়ের মালিক হয় না। এসব পাঠ অনুযায়ী তাকওয়া করার জিনিস। তাই যে তা করে, ওয়াদার দরজা তার জন্য খোলা। আর যে কেবল শব্দটা গায়ে জড়িয়ে রাখে, সে এর দাবিদার হতে পারে না।"
          },
          {
            "en": "The same holds, in reverse, for the verses before. 15:43 and 15:44 describe the end of those who follow Iblis, and the verse describes what the text describes. It licenses nothing against any living person or community: no reader is given the right to assign a neighbour to one of the seven gates, or to count himself among the gardens. The passage is addressed to each listener about himself. The only verdict it invites is the one a person reaches about his own following.",
            "bn": "উল্টো দিক থেকে আগের আয়াতগুলোর বেলাতেও একই কথা। ১৫:৪৩ ও ১৫:৪৪ আয়াত ইবলীসের অনুসারীদের পরিণতির বর্ণনা দেয়, আর আয়াত যা বলে কেবল সেটুকুই বলে। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কোনো অনুমতি দেয় না। কোনো পাঠক প্রতিবেশীকে সাতটি দরজার কোনো একটিতে বসিয়ে দেওয়ার অধিকার পান না, নিজেকে বাগানবাসী বলে গুনে নেওয়ার অধিকারও পান না। এই অংশ প্রত্যেক শ্রোতাকে তার নিজের সম্পর্কেই বলছে। একমাত্র যে রায়ের দিকে এটি ডাকে, তা হলো নিজে কার পিছু নিচ্ছি, সে বিষয়ে নিজের রায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Choosing Which Voice to Follow",
          "bn": "কোন ডাকে সাড়া দেব"
        },
        "p": [
          {
            "en": "Read as a whole, the passage lays two roads beside each other and names what puts a person on each. One is following: 15:42 says Iblis's authority reaches those who follow him. The other is taqwa, and the commentators have made it concrete enough to practise. Do what Allah commanded. Leave what He forbade. Keep far from shirk and gross indecency. When something wrong has been made to look lovely, recognise whose work the decoration is, and decline it.",
            "bn": "পুরো অংশটা একসঙ্গে পড়লে দেখা যায়, দুটি পথ পাশাপাশি রাখা, আর কোনটা মানুষকে কোন পথে তোলে তাও বলে দেওয়া। একটি হলো অনুসরণ: ১৫:৪২ আয়াত বলে, ইবলীসের ক্ষমতা পৌঁছায় তার অনুসারীদের পর্যন্ত। অন্যটি তাকওয়া, আর তাফসীরকারেরা একে এতটাই স্পষ্ট করেছেন যে তা আমলে আনা যায়। আল্লাহ যা আদেশ করেছেন তা করুন। যা নিষেধ করেছেন তা ছাড়ুন। শিরক আর জঘন্য অশ্লীলতা থেকে দূরে থাকুন। কোনো অন্যায়কে যখন সুন্দর করে সাজিয়ে দেখানো হয়, চিনে নিন সাজটা কার হাতের, আর তা ফিরিয়ে দিন।"
          },
          {
            "en": "This is why the verse follows the threat so closely. Fear alone would leave the listener at the seven gates with nowhere to turn. The verse turns him at once towards a path with a name, and towards a place the commentators describe only as orchards full of ripe fruit and flowing water. Each day brings small versions of the same choice: an invitation dressed up, and a command that costs something. Taqwa is chosen there, one choice at a time, long before the gardens are reached.",
            "bn": "এ কারণেই আয়াতটি হুমকির এত কাছে এসেছে। শুধু ভয় শ্রোতাকে সাতটি দরজার সামনে দাঁড় করিয়ে রাখত, ফেরার কোনো দিক থাকত না। আয়াতটি তাকে সঙ্গে সঙ্গে ঘুরিয়ে দেয় একটি নামধারী পথের দিকে, আর এমন এক ঠিকানার দিকে, যাকে তাফসীরকারেরা কেবল পাকা ফলে ভরা বাগান আর বয়ে চলা পানি বলেই বর্ণনা করেন। প্রতিদিন এই একই বাছাইয়ের ছোট ছোট রূপ সামনে আসে: সাজিয়ে আনা কোনো আমন্ত্রণ, আর এমন কোনো হুকুম যা মানতে কিছু খরচ হয়। তাকওয়া বাছাই হয় সেখানেই, একবারে একটি সিদ্ধান্তে, বাগানে পৌঁছানোর অনেক আগে।"
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
            "bn": "আল-হিজরে লূত (আঃ)-কে দেওয়া ফেরেশতাদের প্রথম জবাব এই আয়াত। ১৫:৬১ আয়াতে প্রেরিতরা লূতের পরিবারের কাছে আসেন, আর ১৫:৬২ আয়াতে তিনি তাঁদের বলেন, আপনাদের তো অপরিচিত লোক মনে হচ্ছে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৬১ থেকে ১৫:৬৪ পর্যন্ত এক অংশ হিসেবে পড়ে। সেখানে বলা হয়েছে, ফেরেশতারা সুদর্শন তরুণের রূপে লূতের কাছে এসেছিলেন, আর তাঁরা ঘরে ঢুকলে তিনি ওই কথা বলেন। তাঁদের জবাব আরবিতে সাতটি শব্দ: কালূ বাল জি'নাকা বিমা কানূ ফীহি ইয়ামতারূন।"
          },
          {
            "en": "The reader already knows what Lut does not. A few verses earlier, in 15:58 to 15:60, the same messengers told Ibrahim (AS) that they had been sent to a people of criminals, and that the family of Lut would be saved, except his wife. Lut sees strangers; the reader sees the errand. The night itself, the crowd at the door and the order to leave, is read closely in the article on 11:81 and is not retold here. This page stays with one sentence and the one thing it names.",
            "bn": "লূত (আঃ) যা জানেন না, পাঠক তা আগেই জানেন। কয়েক আয়াত আগে, ১৫:৫৮ থেকে ১৫:৬০ আয়াতে, এই প্রেরিতরাই ইবরাহীম (আঃ)-কে বলেছিলেন, তাঁরা এক অপরাধী জাতির কাছে প্রেরিত। লূতের পরিবার রক্ষা পাবে, তবে তাঁর স্ত্রী নয়। লূত দেখছেন কয়েকজন অচেনা মানুষ, আর পাঠক দেখছেন তাঁদের আসল কাজ। সেই রাত, দরজায় ভিড় আর বেরিয়ে পড়ার আদেশ, এসবের বিস্তারিত পাঠ আছে ১১:৮১ আয়াতের প্রবন্ধে। এখানে তা আর বলা হবে না। এ লেখা থাকবে একটি বাক্য আর তার বলা একটি জিনিসের সঙ্গে।"
          }
        ]
      },
      {
        "h": {
          "en": "Named by Its Doubters",
          "bn": "সন্দেহকারীদের দিয়েই পরিচয়"
        },
        "p": [
          {
            "en": "Bal opens the reply, a word of turning that the translations render as But or Nay. Lut (AS) has said that he does not know them. In al-Hijr the answer does not stop to say who they are; it turns at once to what they carry. Ji'naka bi- is to come to someone bringing something, so the English reads we have come to you with. The angels speak of their arrival and of a load that arrives with them, and the rest of the sentence is spent on that load.",
            "bn": "জবাব শুরু হয় 'বাল' দিয়ে। এটি মোড় ঘোরানোর শব্দ, অনুবাদে এসেছে But বা Nay হিসেবে। লূত (আঃ) বলেছেন, তিনি তাঁদের চেনেন না। আল-হিজরের এ আয়াতে জবাবটা নিজেদের পরিচয় দিতে থামে না। সোজা চলে যায় তাঁরা কী সঙ্গে এনেছেন সেদিকে। 'জি'নাকা বি' মানে কারও কাছে কিছু নিয়ে আসা, তাই অনুবাদ বলে, আমরা তোমার কাছে নিয়ে এসেছি। ফেরেশতারা নিজেদের আসার কথা বলেন, সঙ্গে আনা এক বোঝার কথাও। বাক্যের বাকি অংশ খরচ হয় সেই বোঝার বর্ণনায়।"
          },
          {
            "en": "Here the verse does something worth slowing down for. It does not say we have come with the punishment. It says bima kanu fihi yamtarun: with that about which they were doubting. The thing is named by the people's attitude towards it, not by what it is. Kanu joined to a present-tense verb describes something that went on over time, which is why the translations say were disputing and have been doubting. This was not a moment of hesitation. It was a settled habit of mind.",
            "bn": "এখানে আয়াতটি এমন একটা কাজ করে, যেখানে একটু থামা দরকার। আয়াত বলে না, আমরা শাস্তি নিয়ে এসেছি। বলে, বিমা কানূ ফীহি ইয়ামতারূন: যে বিষয়ে তারা সন্দেহ করত, তা-ই নিয়ে এসেছি। জিনিসটার পরিচয় দেওয়া হয়েছে তার প্রতি মানুষগুলোর মনোভাব দিয়ে, জিনিসটা কী তা দিয়ে নয়। 'কানূ'-র সঙ্গে বর্তমান কালের ক্রিয়া বসলে বোঝায় এমন কিছু, যা সময় ধরে চলেছে। তাই অনুবাদে এসেছে were disputing, have been doubting। এটা এক মুহূর্তের দ্বিধা ছিল না। ছিল মনের জমে যাওয়া অভ্যাস।"
          },
          {
            "en": "The verb yamtarun comes from the root m-r-y, and the same root returns when the Qur'an tells this story in another surah. 54:36 says of the people of Lut that he had warned them of Our assault, fa-tamaraw bi-n-nudhur, but they disputed the warning. The Bengali translation of our verse speaks of being fallen into doubt; the English speaks of disputing. Between them the two renderings hold both sides of the word: doubt kept inside, and doubt argued out loud against whoever warns.",
            "bn": "ইয়ামতারূন ক্রিয়াটি এসেছে ম-র-য় ধাতু থেকে। কুরআন অন্য এক সূরায় যখন এই কাহিনি বলে, সেখানেও এই ধাতু ফিরে আসে। ৫৪:৩৬ আয়াতে লূতের জাতি সম্পর্কে বলা হয়েছে, তিনি তাদের আমার কঠোর পাকড়াও সম্পর্কে সতর্ক করেছিলেন, ফাতামারাও বিন-নুযুর, কিন্তু তারা সতর্কবাণী নিয়ে বিতর্ক করেছিল। আমাদের আয়াতের বাংলা অনুবাদ বলে সন্দেহে পতিত থাকার কথা, ইংরেজি বলে বিতর্কের কথা। দুই অনুবাদ মিলে শব্দটার দুই দিকই ধরে রাখে। একদিকে মনের ভেতরে পুষে রাখা সন্দেহ, অন্যদিকে যিনি সতর্ক করেন তাঁর বিরুদ্ধে মুখে তোলা বিতর্ক।"
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
            "bn": "নাম না নেওয়া সেই জিনিসটা কী? ইবন কাসীর তাঁর আরবি তাফসীরে বলেন, ফেরেশতারা বুঝিয়েছেন তাদের শাস্তি, তাদের ধ্বংস ও বিনাশ। জাতিটি সন্দেহ করত, এ জিনিস কখনো তাদের উপর ঘটবে কি না, তাদের আঙিনায়, বিসাহাতিহিম, নেমে আসবে কি না। তাঁর সংক্ষিপ্ত ইংরেজি তাফসীরও ছোট করে একই কথা বলে: ফেরেশতারা সেই শাস্তি ও ধ্বংস নিয়ে আসছিলেন, যা কখনো ভোগ করতে হবে কি না, তা নিয়ে লোকেরা সন্দেহ করত। ইবন কাসীরের বর্ণনায় সন্দেহটা পৌঁছানো নিয়ে। শাস্তি জিনিসটা কী, তা নিয়ে নয়। প্রশ্ন ছিল, তা কি সত্যিই তাদের কাছে, তাদের বসতির ভেতরে এসে পৌঁছাবে?"
          },
          {
            "en": "Al-Qurtubi puts it in a single line: they doubted that it would descend upon them, and it is the punishment. Al-Baghawi uses almost the same words, yashukkuna fi annahu nazilun bihim, and then gives a reason that al-Qurtubi's line does not. Lut, he says, used to warn them of the punishment, and they did not believe him. In al-Baghawi's reading the doubt did not arise on its own. It was a response to someone, a warning heard again and again and turned away each time.",
            "bn": "কুরতুবী কথাটা বলেন এক লাইনে: তারা সন্দেহ করত যে তা তাদের উপর নেমে আসবে, আর সেটা হলো শাস্তি। বাগাভী প্রায় একই শব্দ ব্যবহার করেন, ইয়াশুক্কূনা ফী আন্নাহূ নাযিলুন বিহিম। তারপর এমন এক কারণ যোগ করেন, যা কুরতুবীর লাইনে নেই। তিনি বলেন, লূত (আঃ) তাদের শাস্তির ভয় দেখাতেন, আর তারা তাঁকে বিশ্বাস করত না। বাগাভীর পাঠে সন্দেহটা আপনা থেকে জন্মায়নি। তা ছিল একজন মানুষের প্রতি জবাব। বারবার শোনা এক সতর্কবাণী, যাকে প্রতিবারই ফিরিয়ে দেওয়া হয়েছে।"
          },
          {
            "en": "At-Tabari's text, as fetched for this verse, is short. It gives the gloss the punishment of the people of Lut, and then a chain through Ibn Abi Najih to Mujahid, who is reported to have said the same. The opening of the passage, with the first narrator's name, is cut off in the fetched text, so only Mujahid is named here. On what the thing is, then, every fetched source agrees: it is the punishment. None of them proposes anything else, and this page does not either.",
            "bn": "এ আয়াতের জন্য আনা তাবারীর পাঠ ছোট। তাতে ব্যাখ্যা হিসেবে আছে, লূতের জাতির শাস্তি। তারপর ইবন আবী নাজীহ হয়ে মুজাহিদ পর্যন্ত এক সনদ, যেখানে বলা হয়েছে মুজাহিদও একই কথা বলেছেন। আনা পাঠে অংশটির শুরু, যেখানে প্রথম বর্ণনাকারীর নাম থাকার কথা, কাটা পড়েছে। তাই এখানে শুধু মুজাহিদের নাম নেওয়া হলো। জিনিসটা কী, এ প্রশ্নে আনা সব উৎস একমত: সেটা শাস্তি। কেউ অন্য কিছু বলেননি, এ লেখাও বলছে না।"
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
            "bn": "সা'দী সন্দেহটাকে টেনে আনেন লূত (আঃ)-এর মুখের উপর বলা কথা পর্যন্ত। তাঁর ব্যাখ্যায়: আমরা তোমার কাছে তাদের শাস্তি নিয়ে এসেছি, যা নিয়ে তারা সন্দেহ করত, আর তুমি যখন এর প্রতিশ্রুতি দিতে তখন তারা তোমাকে মিথ্যাবাদী বলত: ইউকাযযিবূনাকা হীনা তা'ইদুহুম বিহী। মুয়াসসার বলে, সেই শাস্তি যা নিয়ে তোমার জাতি সন্দেহ করত আর বিশ্বাস করত না, ওয়া লা ইউসাদ্দিকূন। অর্থাৎ সা'দী, বাগাভী ও মুয়াসসার, তিনজনই সন্দেহের সঙ্গে জুড়ে দেন সতর্ককারীকে অবিশ্বাস করার কথা। ইবন কাসীর ও কুরতুবী বলেন শুধু সন্দেহের কথা।"
          },
          {
            "en": "This is a difference of emphasis, not a disagreement, and no commentator here denies what another says. One set of wordings looks at the doubt as a state of mind about what was coming; the other looks at it as a stance taken against a messenger. The Muyassar also opens the angels' reply with words the verse does not contain, la takhaf, do not fear, so that the answer reads as reassurance to a host unsettled by strangers. That is the Muyassar's paraphrase, and it is reported here as that.",
            "bn": "এটা জোর দেওয়ার পার্থক্য, মতবিরোধ নয়। এখানে কোনো তাফসীরকার অন্যের কথা অস্বীকার করেননি। এক দলের ভাষায় সন্দেহটা সামনে কী আসছে তা নিয়ে মনের একটা অবস্থা। অন্য দলের ভাষায় তা একজন রাসূলের বিরুদ্ধে নেওয়া অবস্থান। মুয়াসসার আরেকটা কাজ করে। ফেরেশতাদের জবাব শুরু করে এমন কথায় যা আয়াতে নেই: লা তাখাফ, ভয় পেয়ো না। এতে জবাবটা হয়ে যায় অচেনা মেহমান দেখে অস্থির হয়ে পড়া গৃহকর্তার জন্য সান্ত্বনা। এটা মুয়াসসারের নিজস্ব ভাষ্য, আর এখানে তা সেভাবেই উল্লেখ করা হলো।"
          },
          {
            "en": "The Qur'an itself records what that stance sounded like. In 29:29, after Lut (AS) names their deeds, the answer of his people was only that they said, i'tina bi-'adhabi-llah, bring us the punishment of Allah, if you should be of the truthful. That is doubt asking for proof, and asking for it as a dare. Read beside it, 15:63 is the moment the dare is met. What was demanded as a test of his truthfulness is what the messengers now say they have brought.",
            "bn": "সেই অবস্থানের ভাষা কেমন ছিল, কুরআন নিজেই তা লিখে রেখেছে। ২৯:২৯ আয়াতে লূত (আঃ) তাদের কাজগুলোর কথা তুলে ধরার পর তাঁর জাতির একটাই জবাব ছিল: ই'তিনা বি'আযাবিল্লাহ, তুমি সত্যবাদী হলে আমাদের উপর আল্লাহর আযাব নিয়ে এসো। এ হলো প্রমাণ চাওয়া সন্দেহ, আর প্রমাণটা চাওয়া হচ্ছে চ্যালেঞ্জের সুরে। পাশাপাশি রেখে পড়লে ১৫:৬৩ সেই মুহূর্ত, যখন চ্যালেঞ্জের জবাব এসে গেল। নবীর সত্যবাদিতা যাচাইয়ের জন্য যা দাবি করা হয়েছিল, প্রেরিতরা এখন বলছেন ঠিক সেটাই তাঁরা নিয়ে এসেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Angels, as Once Demanded",
          "bn": "একদিন যে ফেরেশতা চাওয়া হয়েছিল"
        },
        "p": [
          {
            "en": "Al-Hijr has heard a demand like this before. In 15:6 and 15:7 those who called the Messenger mad asked, law ma ta'tina bil-mala'ika, why do you not bring us the angels, if you should be among the truthful? 15:8 answered that Allah does not send down the angels except with truth, and that they would not then be reprieved. 55 verses later, angels have come down in the surah's own story, and the first thing they say of their errand is that it is the very thing a people doubted.",
            "bn": "আল-হিজর এমন দাবি আগেও শুনেছে। ১৫:৬ ও ১৫:৭ আয়াতে যারা রাসূলকে পাগল বলেছিল, তারা বলেছিল, লাও মা তা'তীনা বিল-মালাইকা: তুমি সত্যবাদী হলে আমাদের কাছে ফেরেশতা আনছ না কেন? ১৫:৮ আয়াত জবাব দেয়, আল্লাহ যথাযথ কারণ ছাড়া ফেরেশতা পাঠান না, আর পাঠালে তারা আর অবকাশ পাবে না। ৫৫ আয়াত পরে সূরার নিজের কাহিনিতেই ফেরেশতারা নেমে এসেছেন। নিজেদের কাজের কথা বলতে গিয়ে প্রথমেই তাঁরা বলছেন, এ সেই জিনিস যা নিয়ে একটা জাতি সন্দেহ করত।"
          },
          {
            "en": "Ibn Kathir's abridged commentary draws the link openly for the next clause. On wa ataynaka bil-haqq in 15:64, and we have brought you the truth, he cites 15:8, We do not send the angels down except with the truth, and says the angels spoke in affirmation of the news they brought: that Lut (AS) would be saved and his people destroyed. That verse, the order to leave by night in 15:65 and the decree conveyed in 15:66 belong to their own pages, and are only pointed to here.",
            "bn": "ইবন কাসীরের সংক্ষিপ্ত তাফসীর পরের বাক্যের বেলায় এই যোগসূত্র খোলাখুলি দেখায়। ১৫:৬৪ আয়াতের ওয়া আতাইনাকা বিল-হাক্ক, আমরা তোমার কাছে সত্য নিয়ে এসেছি, এর আলোচনায় তিনি ১৫:৮ আয়াত উদ্ধৃত করেন: আমি সত্যসহ ছাড়া ফেরেশতা পাঠাই না। তিনি বলেন, ফেরেশতারা তাঁদের আনা খবরকে জোর দিয়ে নিশ্চিত করছিলেন: লূত (আঃ) রক্ষা পাবেন, আর তাঁর জাতি ধ্বংস হবে। সেই আয়াত, ১৫:৬৫ আয়াতে রাতে বেরিয়ে পড়ার আদেশ আর ১৫:৬৬ আয়াতে জানানো সিদ্ধান্ত, এগুলোর আলোচনা নিজ নিজ পাতায়। এখানে শুধু ইশারা রইল।"
          }
        ]
      },
      {
        "h": {
          "en": "Grouped, Off-Verse and Absent",
          "bn": "উৎসের সীমা ও বাদ পড়া পাঠ"
        },
        "p": [
          {
            "en": "A word on the sources, since two of them arrive grouped. Ibn Kathir's English abridgement treats 15:61 to 15:64 as one passage, and only what it says on this verse, and its link to 15:8, is used above. The Ma'arif al-Qur'an text returned for this verse covers 15:48 to 15:57 and concerns the lasting bliss of Paradise. It says nothing about Lut (AS) or his guests, so it is off-verse and set aside. Every other fetched file quotes 15:63 itself and speaks to it.",
            "bn": "উৎস নিয়ে একটা কথা বলা দরকার, কারণ দুটি উৎস এসেছে একাধিক আয়াত একসঙ্গে নিয়ে। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ১৫:৬১ থেকে ১৫:৬৪ পর্যন্ত এক অংশ হিসেবে পড়ে। ওপরে তার শুধু সেটুকুই নেওয়া হয়েছে যা এ আয়াত নিয়ে, সঙ্গে ১৫:৮ আয়াতের যোগসূত্র। এ আয়াতের নামে আসা মাআরিফুল কুরআনের পাঠ আসলে ১৫:৪৮ থেকে ১৫:৫৭ পর্যন্ত, আর তার বিষয় জান্নাতের চিরস্থায়ী নিয়ামত। লূত (আঃ) বা তাঁর মেহমানদের নিয়ে তাতে কিছু নেই। তাই পাঠটি এ আয়াতের নয় বলে বাদ রাখা হলো। বাকি প্রতিটি পাঠ ১৫:৬৩ আয়াত নিজেই উদ্ধৃত করে, আর এ নিয়েই কথা বলে।"
          },
          {
            "en": "No fetched commentary attaches a hadith to this verse, so none is cited here. Nor does this page describe how the punishment fell. The overturning of the towns and the stones of baked clay are the subject of 11:82, which reads them closely. This verse stops a step earlier, at the announcement. It tells Lut what has come and leaves the telling of it for later. Keeping to that limit keeps the page to what the seven words themselves carry, and to what the sources say about them.",
            "bn": "আনা কোনো তাফসীর এ আয়াতের সঙ্গে কোনো হাদীস জোড়েনি, তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। শাস্তি কীভাবে নেমেছিল, এ লেখা তা-ও বর্ণনা করে না। জনপদ উল্টে দেওয়া আর পোড়া মাটির পাথরের বিস্তারিত পাঠ আছে ১১:৮২ আয়াতের প্রবন্ধে। এ আয়াত থামে তার এক ধাপ আগে, ঘোষণায়। লূতকে জানানো হয় কী এসে পৌঁছেছে, বাকি বিবরণ রইল পরের জন্য। এই সীমার ভেতরে থাকলে লেখাটা আটকে থাকে সাতটি শব্দ নিজে যা বহন করে আর উৎসগুলো তা নিয়ে যা বলে, তার মধ্যেই।"
          }
        ]
      },
      {
        "h": {
          "en": "News, Not a Mandate",
          "bn": "খবর, হুকুমনামা নয়"
        },
        "p": [
          {
            "en": "This needs saying plainly. The verse describes a particular people as the text describes them: a people warned by their prophet, who doubted the warning, called him a liar and dared him to bring what he warned of. What befell them was Allah's judgement, carried by His messengers and reported in His Book. The verse licenses nothing against any living person or community. No reader is appointed to finish the story, to find its villains among the neighbours, or to treat anyone as the thing the angels carried.",
            "bn": "কথাটা সোজাসুজি বলা দরকার। আয়াতটি একটি নির্দিষ্ট জাতির কথা বলে, ঠিক যেভাবে কুরআনের পাঠ তাদের বর্ণনা করেছে। তাদের নবী তাদের সতর্ক করেছিলেন। তারা সেই সতর্কবাণীতে সন্দেহ করেছে, নবীকে মিথ্যাবাদী বলেছে, আর যার ভয় দেখানো হচ্ছিল তা এনে দেখানোর চ্যালেঞ্জ দিয়েছে। তাদের উপর যা এসেছিল তা আল্লাহর ফয়সালা, তাঁর প্রেরিতরা তা বহন করেছেন আর তাঁর কিতাব তা জানিয়েছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এ আয়াত দেয় না। কাহিনিটা শেষ করার দায়িত্ব কোনো পাঠককে দেওয়া হয়নি। প্রতিবেশীদের মধ্যে এর খলনায়ক খোঁজার কিংবা কাউকে ফেরেশতাদের বয়ে আনা শাস্তি বানিয়ে ফেলার অধিকারও কারও নেই।"
          },
          {
            "en": "The story is told to the one who hears it, not about someone else. Lut (AS) in this scene is a host uneasy with strangers, and the answer he receives is not an instruction to act against anyone. It is news. What a reader can take from it is a question turned inward: where in me does a warning meet a dare instead of a change? A story about a doubted punishment, read as permission to harm, would be a doubt of its own kind: doubt about whose judgement this is.",
            "bn": "কাহিনিটা শোনানো হয় যে শোনে তাকেই, অন্য কারও সম্পর্কে নয়। এ দৃশ্যে লূত (আঃ) অচেনা মেহমান দেখে অস্বস্তিতে থাকা এক গৃহকর্তা। তিনি যে জবাব পান, তাতে কারও বিরুদ্ধে কিছু করার নির্দেশ নেই। আছে শুধু খবর। পাঠক এখান থেকে নিতে পারেন নিজের দিকে ফেরানো একটা প্রশ্ন: আমার ভেতরে কোথায় সতর্কবাণীর জবাব হয় বদলে যাওয়া নয়, বরং চ্যালেঞ্জ? সন্দেহ করা শাস্তির কাহিনিকে কেউ যদি ক্ষতি করার অনুমতি বলে পড়ে, সেটাও হবে এক রকম সন্দেহ। সন্দেহটা এই নিয়ে যে, ফয়সালা আসলে কার।"
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
            "bn": "প্রশ্ন করা সবসময় দোষের নয়। ২:২৬০ আয়াতে ইবরাহীম (আঃ) দেখতে চান আল্লাহ কীভাবে মৃতকে জীবিত করেন। আল্লাহ জিজ্ঞেস করেন, তুমি কি বিশ্বাস করো না? তিনি বলেন, অবশ্যই করি, তবে যাতে আমার অন্তর প্রশান্ত হয়। এ প্রশ্ন ঈমানের ভেতর থেকে করা, প্রশান্তির খোঁজে। ১৫:৬৩ আয়াতের সন্দেহ একেবারে অন্য জাতের। তা দীর্ঘ সময় ধরে পুষে রাখা হয়েছিল একটা সতর্কবাণীর বিরুদ্ধে। আর যখন তা প্রমাণ চেয়েছে, চেয়েছে আমল থেকে ছাড় পাওয়ার জন্য। দেখাও, এই একই কথা দুই রকম জায়গা থেকে আসতে পারে।"
          },
          {
            "en": "10:94 uses the root of yamtarun and gives an answer to doubt that lingers. If you are in doubt about what We have sent down to you, it says, ask those who have been reading the Scripture before you; then, the truth has certainly come to you from your Lord, so never be among al-mumtarin, the doubters. The cure it offers is not an endless supply of further proof. It is recognising that the truth has already arrived, and letting that recognition settle into a certainty that acts.",
            "bn": "১০:৯৪ আয়াতে ইয়ামতারূনের সেই ধাতুই এসেছে, আর সেখানে আছে ঝুলে থাকা সন্দেহের জবাব। আয়াত বলে, আমি তোমার প্রতি যা নাযিল করেছি তা নিয়ে যদি সন্দেহ থাকে, তবে তোমার আগে থেকে যারা কিতাব পড়ে আসছে তাদের জিজ্ঞেস করো। তারপর বলে, তোমার রবের পক্ষ থেকে তোমার কাছে সত্য এসে গেছে, কাজেই কখনো আল-মুমতারীন, সন্দেহকারীদের দলে থেকো না। এখানে দাওয়াই হিসেবে অন্তহীন প্রমাণের জোগান দেওয়া হয়নি। দাওয়াই হলো এটা মেনে নেওয়া যে সত্য আগেই এসে গেছে। তারপর সেই মেনে নেওয়াকে এমন ইয়াকীনে পরিণত হতে দেওয়া, যা আমলে রূপ নেয়।"
          },
          {
            "en": "So the verse asks the reader something uncomfortable. Is there a warning I have heard many times and answered, in effect, with bring it then? A habit I know is harmful, a duty I keep postponing, a wrong I have been told of plainly? The people in this story learned the truth of what they doubted only when it stood at the door. The mercy of reading about them now is that a reader can still settle the doubt while it is only a warning.",
            "bn": "তাই আয়াতটি পাঠকের সামনে একটা অস্বস্তিকর প্রশ্ন রাখে। এমন কোনো সতর্কবাণী কি আছে, যা আমি বহুবার শুনেছি আর কার্যত জবাব দিয়েছি, আসুক তবে দেখি? এমন কোনো অভ্যাস, যার ক্ষতি আমি জানি? কোনো দায়িত্ব, যা বারবার পিছিয়ে দিচ্ছি? কোনো অন্যায়, যার কথা আমাকে পরিষ্কার করে বলা হয়েছে? এ কাহিনির মানুষগুলো তাদের সন্দেহের বিষয়ের সত্যতা বুঝেছিল কেবল তখন, যখন তা দরজায় এসে দাঁড়াল। আজ তাদের কথা পড়ার রহমত এই যে, সতর্কবাণী যতক্ষণ সতর্কবাণী আছে, ততক্ষণ পাঠক সন্দেহটার মীমাংসা করে নিতে পারেন।"
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
