/**
 * Tadabbur long-form articles — surah 66.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "66:6": {
    "sections": [
      {
        "h": {
          "en": "Yourselves First, Then Your Households",
          "bn": "আগে নিজে, তারপর পরিবার"
        },
        "p": [
          {
            "en": "Ya ayyuha-lladhina amanu, qu anfusakum wa ahlikum naran: O you who believe, guard yourselves and your families against a Fire. In Surah at-Tahrim the verse comes straight after an episode inside the Prophet's own household, 66:1 to 66:5, which closes with a call to two of his wives to turn to Allah in repentance (66:4). Then the address widens to every believer. As-Sa'di reads the call as a summons: O you on whom Allah has bestowed faith, carry out what faith requires and the conditions it rests on.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ, কূ আনফুসাকুম ওয়া আহলীকুম নারা: হে মুমিনগণ, নিজেদের আর নিজেদের পরিবারকে আগুন থেকে বাঁচাও। সূরা তাহরীমে আয়াতটি আসে নবী ﷺ-এর নিজের ঘরের একটি ঘটনার ঠিক পরে, ৬৬:১ থেকে ৬৬:৫ পর্যন্ত। সে অংশ শেষ হয় তাঁর দুই স্ত্রীকে আল্লাহর কাছে তওবা করে ফিরে আসার ডাক দিয়ে (৬৬:৪)। এরপর সম্বোধন ছড়িয়ে পড়ে সব মুমিনের দিকে। সা'দী প্রথম ডাকটিকে শোনেন দায়িত্বের ডাক হিসেবে: হে যাদের আল্লাহ ঈমানের নেয়ামত দিয়েছেন, ঈমান যা দাবি করে আর যে শর্তের উপর তা দাঁড়িয়ে, তা পালন করো।"
          },
          {
            "en": "The command qu is one short imperative with two objects, and the order of the two is the order of the work. Anfusakum, yourselves, comes first; ahlikum, your families, second. As-Sa'di spells out the first: a soul is guarded by binding it to Allah's command, doing what He orders, avoiding what He forbids, and repenting from whatever angers Him and brings on punishment. The Muyassar puts the link in one phrase: guard your families by the same means with which you guard yourselves.",
            "bn": "কূ একটিমাত্র ছোট আদেশ, তার কর্ম দুটি। আর কর্ম দুটির ক্রমই কাজের ক্রম। আগে আনফুসাকুম, নিজেদের; পরে আহলীকুম, পরিবারকে। প্রথমটির ব্যাখ্যা সা'দী খুলে বলেন: নফসকে বাঁচাতে হয় আল্লাহর হুকুমের সঙ্গে তাকে বেঁধে রেখে। তিনি যা বলেন তা করা, যা নিষেধ করেন তা থেকে দূরে থাকা, আর যা তাঁকে নারাজ করে ও আযাব ডেকে আনে তা থেকে তওবা করা। মুয়াসসার যোগসূত্রটা এক কথায় বলে দেয়: যে উপায়ে নিজেকে বাঁচাও, সেই উপায়েই পরিবারকে বাঁচাও।"
          }
        ]
      },
      {
        "h": {
          "en": "Teach Them, Train Them",
          "bn": "শেখাও, আদব দাও"
        },
        "p": [
          {
            "en": "The earliest readings are short, and they are about means. At-Tabari, through several chains, and Ibn Kathir both report from Ali (RA) two imperatives: teach them and discipline them, 'allimuhum wa addibuhum. At-Tabari's own paraphrase leans the same way. He takes qu anfusakum as teach one another what will shield you from the Fire, and act in obedience to Allah; and wa ahlikum as teach your families the obedience by which they will shield themselves from it.",
            "bn": "সবচেয়ে প্রাচীন ব্যাখ্যাগুলো ছোট, আর সেগুলো উপায় নিয়ে। তাবারী কয়েকটি সূত্রে এবং ইবন কাসীর দুজনেই আলী (রাঃ) থেকে দুটি আদেশ বর্ণনা করেন: তাদের শেখাও আর আদব দাও, আল্লিমূহুম ওয়া আদ্দিবূহুম। তাবারীর নিজের ব্যাখ্যাও একই দিকে ঝোঁকে। তাঁর মতে কূ আনফুসাকুম মানে, যা তোমাদের আগুন থেকে আড়াল করবে তা একে অপরকে শেখাও, আর আল্লাহর আনুগত্যের আমল করো। আর ওয়া আহলীকুম মানে, পরিবারকে সেই আনুগত্য শেখাও যা দিয়ে তারা নিজেরাই নিজেদের বাঁচাবে।"
          },
          {
            "en": "Ibn Abbas (RA), in the report of Ali ibn Abi Talha that at-Tabari and Ibn Kathir carry, gives three steps: act in obedience to Allah, guard against disobeying Him, and command your families to remember Him, and Allah will save you from the Fire. Al-Qurtubi has the same report with a different ending: command your families to remember Allah and to call on Him, so that Allah guards them through you. Mujahid, in both at-Tabari and Ibn Kathir, reuses the verse's own root: fear Allah, ittaqu-llah, and enjoin taqwa of Allah upon your families.",
            "bn": "আলী ইবন আবী তালহার যে বর্ণনা তাবারী ও ইবন কাসীর এনেছেন, তাতে ইবন আব্বাস (রাঃ) তিনটি ধাপ বলেন: আল্লাহর আনুগত্যের আমল করো, তাঁর নাফরমানি থেকে বাঁচো, আর পরিবারকে তাঁর জিকিরের আদেশ দাও, তাহলে আল্লাহ তোমাদের আগুন থেকে রক্ষা করবেন। কুরতুবীর কাছে একই বর্ণনার শেষটা ভিন্ন: পরিবারকে জিকির ও দোয়ার আদেশ দাও, যাতে আল্লাহ তোমাদের মাধ্যমে তাদের রক্ষা করেন। তাবারী ও ইবন কাসীর দুজনের কাছেই মুজাহিদ আয়াতের নিজের ধাতুটিই আবার ব্যবহার করেন: আল্লাহকে ভয় করো, ইত্তাকুল্লাহ, আর পরিবারকে আল্লাহর তাকওয়ার নসিহত করো।"
          },
          {
            "en": "Qatada's reading, which at-Tabari records twice, is the fullest. Guarding them is to command them to obey Allah and forbid them from disobeying Him, to stand over them with Allah's command, ordering it and helping them carry it out; and when you see a disobedience to Allah, you restrain them from it and rebuke them. Ad-Dahhak and Muqatil, in Ibn Kathir, call it a right: a Muslim must teach his family, his relatives and his slaves, male and female, what Allah has made obligatory on them and what He has forbidden.",
            "bn": "সবচেয়ে পূর্ণাঙ্গ ব্যাখ্যা কাতাদার, যা তাবারী দুবার এনেছেন। পরিবারকে বাঁচানো মানে তাদের আল্লাহর আনুগত্যের আদেশ দেওয়া, তাঁর নাফরমানি থেকে নিষেধ করা, আল্লাহর হুকুম নিয়ে তাদের পাশে দাঁড়ানো, সে হুকুম দেওয়া আর তা পালনে তাদের সাহায্য করা। আর আল্লাহর কোনো নাফরমানি চোখে পড়লে তা থেকে তাদের থামানো ও ধমক দেওয়া। ইবন কাসীরের বর্ণনায় দাহহাক ও মুকাতিল একে হক হিসেবে বলেন: মুসলিমের দায়িত্ব হলো নিজের পরিবার, আত্মীয়স্বজন আর দাস-দাসীদের শেখানো, আল্লাহ তাদের উপর কী ফরজ করেছেন আর কী নিষেধ করেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Deeds for Oneself, Counsel for Family",
          "bn": "নিজের জন্য আমল, পরিবারের জন্য নসিহত"
        },
        "p": [
          {
            "en": "Al-Qurtubi finds a single question in the verse, the command to guard oneself and one's family from the Fire, and records a real difference over its second object. Ad-Dahhak reads it as two separate duties: guard yourselves, and as for your families, let them guard themselves from the Fire. Ali (RA), Qatada and Mujahid read it as one duty with two fields: guard yourselves by your deeds, and guard your families by your counsel to them, wasiyyatikum.",
            "bn": "কুরতুবী আয়াতে একটিই মাসআলা দেখেন: নিজেকে ও পরিবারকে আগুন থেকে বাঁচানোর আদেশ। দ্বিতীয় কর্মটি নিয়ে তিনি একটি সত্যিকারের মতভেদ লিখে রাখেন। দাহহাকের মতে এখানে দুটি আলাদা দায়িত্ব: তোমরা নিজেদের বাঁচাও, আর তোমাদের পরিবার, তারা নিজেরাই নিজেদের আগুন থেকে বাঁচাক। আলী (রাঃ), কাতাদা ও মুজাহিদের মতে দায়িত্ব একটাই, ক্ষেত্র দুটি: নিজেদের বাঁচাও নিজের আমল দিয়ে, আর পরিবারকে বাঁচাও তাদের প্রতি নসিহত দিয়ে, ওয়াসিয়্যাতিকুম।"
          },
          {
            "en": "Al-Qurtubi quotes Ibn al-Arabi, who calls the second reading correct, on grounds of grammar: the conjunction wa makes the two objects share in the meaning of the verb, so one qu governs both even though the guarding is done differently, as when an Arab poet says of his animal that he fed it straw and cold water. From this al-Qurtubi draws his rule: a man must set himself right through obedience, and set his family right as a shepherd sets right his flock. Al-Hasan, he adds, put the same duty briefly: he commands them and forbids them.",
            "bn": "কুরতুবী ইবনুল আরাবীর কথা আনেন, যিনি ব্যাকরণের যুক্তিতে দ্বিতীয় মতটিকে সঠিক বলেন। ওয়াও অব্যয়টি দুই কর্মকে ক্রিয়ার অর্থে শরিক করে দেয়। তাই একটিই কূ দুটোর উপর খাটে, যদিও বাঁচানোর ধরন আলাদা। যেমন আরব কবি তার পশু সম্পর্কে বলেন, তাকে খাওয়ালাম খড় আর ঠান্ডা পানি। এখান থেকে কুরতুবী তাঁর নিয়মটি টানেন: মানুষকে আনুগত্য দিয়ে নিজেকে শুধরাতে হবে, আর পরিবারকে শুধরাতে হবে যেভাবে রাখাল তার পাল দেখাশোনা করে। তিনি যোগ করেন, হাসান একই দায়িত্ব বলেছেন সংক্ষেপে: সে তাদের আদেশ দেবে, নিষেধ করবে।"
          },
          {
            "en": "A further reading widens the first word. Al-Qurtubi reports some scholars as saying that children are already inside anfusakum, because a child is part of the parent. They compare 24:61, where blame is lifted from eating in your own houses, wa la 'ala anfusikum an ta'kulu min buyutikum, while the houses of children are not named apart as the other relatives' houses are. So, al-Qurtubi goes on, the parent teaches the child the lawful and the unlawful and keeps him away from sins and wrongs, among the other rulings.",
            "bn": "আরেকটি ব্যাখ্যা প্রথম শব্দটিকেই বড় করে দেয়। কুরতুবী কিছু আলেমের কথা আনেন: সন্তান আগে থেকেই আনফুসাকুমের ভেতরে আছে, কারণ সন্তান মা-বাবারই অংশ। তাঁরা তুলনা টানেন ২৪:৬১ আয়াতের সঙ্গে। সেখানে নিজেদের ঘরে খাওয়াকে দোষমুক্ত বলা হয়েছে, ওয়া লা আলা আনফুসিকুম আন তা'কুলূ মিন বুয়ূতিকুম, অথচ অন্য আত্মীয়দের ঘরের মতো সন্তানের ঘরের কথা আলাদা করে আসেনি। কুরতুবী তাই বলেন, অভিভাবক সন্তানকে হালাল-হারাম শেখাবে, গুনাহ ও অন্যায় থেকে দূরে রাখবে, সঙ্গে আরও যত বিধান আছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Who the Household Takes In",
          "bn": "ঘরের মানুষ কারা"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an says the word ahlikum takes in the wife, the children and slaves, men and women, and possibly full-time servants. As-Sa'di draws the circle by responsibility. Guarding the family, he says, means disciplining them, teaching them and compelling them to keep Allah's command, and a servant of Allah is not safe until he has done what Allah commands in himself and in everyone under his care and authority, wives, children and others.",
            "bn": "মাআরিফুল কুরআন বলে, আহলীকুম শব্দের ভেতরে আছে স্ত্রী, সন্তান আর দাস-দাসী। সম্ভবত সার্বক্ষণিক খাদেমরাও। সা'দী বৃত্তটা আঁকেন দায়িত্ব দিয়ে। তাঁর কথায় পরিবারকে বাঁচানো মানে তাদের আদব দেওয়া, শেখানো, আর আল্লাহর হুকুম মানতে তাদের বাধ্য করা। বান্দা নিরাপদ নয় যতক্ষণ না সে আল্লাহর হুকুম পালন করে নিজের বেলায়, আর যারা তার তত্ত্বাবধান ও কর্তৃত্বে আছে তাদের বেলায়: স্ত্রী, সন্তান ও অন্যরা।"
          },
          {
            "en": "Al-Qurtubi also quotes al-Kiya: it is on us to teach our children and families the religion and what is good, and the manners no one can do without. Al-Kiya ties this to two commands given to the Prophet ﷺ. One is 20:132, command your family to pray and be patient in it, which has its own article here. The other is 26:214, warn your nearest kin. Ma'arif al-Qur'an adds that the jurists drew from this verse a duty to teach wife and children the Shari'a's obligations and the lawful and unlawful, and to train them in it.",
            "bn": "কুরতুবী কিয়ার কথাও আনেন: আমাদের সন্তান ও পরিবারকে দ্বীন আর কল্যাণ শেখানো আমাদের দায়িত্ব, সঙ্গে সেই আদবও যা ছাড়া চলে না। কিয়া একে জুড়ে দেন নবী ﷺ-কে দেওয়া দুটি আদেশের সঙ্গে। একটি ২০:১৩২: তোমার পরিবারকে নামাজের আদেশ দাও আর নিজে তাতে অবিচল থাকো। এ আয়াত নিয়ে এখানে আলাদা প্রবন্ধ আছে। অন্যটি ২৬:২১৪: তোমার নিকটাত্মীয়দের সতর্ক করো। মাআরিফুল কুরআন যোগ করে, ফকিহগণ এ আয়াত থেকে দায়িত্ব বের করেছেন: স্ত্রী-সন্তানকে শরিয়তের ফরজ বিষয় আর হালাল-হারাম শেখানো, এবং সে অনুযায়ী চলতে অভ্যস্ত করা।"
          }
        ]
      },
      {
        "h": {
          "en": "The Shepherd and the Seven-Year-Old",
          "bn": "রাখাল আর সাত বছরের শিশু"
        },
        "p": [
          {
            "en": "The commentators fetched attach two hadiths to this verse. Al-Qurtubi, explaining the shepherd's duty, cites the hadith of the shepherd, which al-Bukhari records in his Sahih (893) from Ibn Umar (RA): All of you are guardians and responsible for your wards and the things under your care. The Imam is the guardian of his subjects and is responsible for them, a man is the guardian of his family and is responsible for them, a woman is the guardian of her husband's house and is responsible for it, and a servant is the guardian of his master's belongings and is responsible for them.",
            "bn": "যে তাফসীরগুলো দেখা হয়েছে, সেগুলো এ আয়াতের সঙ্গে দুটি হাদীস জুড়েছে। রাখালের দায়িত্ব বোঝাতে কুরতুবী রাখালের হাদীসটি আনেন। বুখারী তাঁর সহীহ গ্রন্থে (৮৯৩) ইবন উমর (রাঃ) থেকে এটি বর্ণনা করেছেন: তোমরা প্রত্যেকেই রক্ষক, আর নিজের অধীন মানুষ ও জিনিসের ব্যাপারে প্রত্যেকেই জিজ্ঞাসিত হবে। ইমাম তার প্রজাদের রক্ষক, তাদের ব্যাপারে সে জিজ্ঞাসিত হবে। পুরুষ তার পরিবারের রক্ষক, তাদের ব্যাপারে সে জিজ্ঞাসিত হবে। নারী তার স্বামীর ঘরের রক্ষক, সে ঘরের ব্যাপারে সে জিজ্ঞাসিত হবে। আর খাদেম তার মনিবের সম্পদের রক্ষক, সে ব্যাপারে সে জিজ্ঞাসিত হবে।"
          },
          {
            "en": "The narrator adds that he thinks the Prophet ﷺ also said: a man is the guardian of his father's property and is responsible for it; all of you are guardians and responsible for your wards. Read beside the verse, the hadith spreads the duty across the home: the man answers for his family, the woman for the house she keeps. Al-Qurtubi's own phrase, setting the family right as a shepherd sets right his flock, is this hadith turned into a rule.",
            "bn": "বর্ণনাকারী যোগ করেন, তাঁর মনে হয় নবী ﷺ এ কথাও বলেছিলেন: পুরুষ তার বাবার সম্পদের রক্ষক, সে ব্যাপারে সে জিজ্ঞাসিত হবে; তোমরা প্রত্যেকেই রক্ষক, প্রত্যেকেই নিজের অধীনদের ব্যাপারে জিজ্ঞাসিত হবে। আয়াতের পাশে রেখে পড়লে হাদীসটি দায়িত্বকে গোটা ঘরে ছড়িয়ে দেয়: পুরুষ জবাব দেবে পরিবারের, নারী জবাব দেবে যে ঘর সে সামলায় তার। রাখাল যেভাবে পাল দেখে সেভাবে পরিবারকে শুধরানো, কুরতুবীর এ কথাটি আসলে এই হাদীসেরই নিয়মরূপ।"
          },
          {
            "en": "Ibn Kathir cites the hadith of Sabra (RA); al-Qurtubi cites the same command through other chains. In Abu Dawud's wording, which Ibn Kathir names as his text (494): Command a boy to pray when he reaches the age of seven years. When he becomes ten years old, then beat him for prayer. Abu Dawud's text as fetched carries no grading. Ibn Kathir quotes at-Tirmidhi as calling it hasan; at-Tirmidhi's own text (407), worded teach the boy prayer, reads hasan sahih. Ibn Kathir adds that the jurists said the same of fasting, so that it trains the child in worship and he reaches maturity already steady in it.",
            "bn": "ইবন কাসীর সাবরা (রাঃ)-র হাদীস আনেন, আর কুরতুবী একই আদেশ আনেন অন্য সূত্রে। আবু দাউদের ভাষায়, যাকে ইবন কাসীর মূল পাঠ বলে উল্লেখ করেন (৪৯৪): শিশুর বয়স ৭ বছর হলে তাকে নামাজের আদেশ দাও। আর ১০ বছর হলে নামাজের জন্য তাকে প্রহার করো। আবু দাউদের যে পাঠ দেখা হয়েছে, তাতে কোনো মান উল্লেখ নেই। ইবন কাসীর লিখেছেন, তিরমিযী একে হাসান বলেছেন। তিরমিযীর নিজের পাঠে (৪০৭) শব্দ হলো শিশুকে নামাজ শেখাও, আর সেখানে মান লেখা হাসান সহীহ। ইবন কাসীর যোগ করেন, ফকিহগণ রোজার ব্যাপারেও এ কথা বলেছেন, যাতে শিশু ইবাদতে অভ্যস্ত হয় আর বালেগ হওয়ার সময় তাতে অটল থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Fuel of People and Stones",
          "bn": "মানুষ আর পাথরের ইন্ধন"
        },
        "p": [
          {
            "en": "Waquduha-n-nasu wal-hijara: whose fuel is people and stones. Ibn Kathir glosses waqud as the Fire's firewood, and at-Tabari says the firewood with which it is kindled is the children of Adam and stones of sulphur. Al-Qurtubi notes that the phrase was explained in Surah al-Baqara, where the same words come in 2:24, fear the Fire whose fuel is people and stones. As-Sa'di gives the reason for the description: Allah describes the Fire in these terms to restrain His servants from taking His command lightly.",
            "bn": "ওয়াকূদুহান নাসু ওয়াল হিজারা: যার ইন্ধন মানুষ আর পাথর। ইবন কাসীর ওয়াকূদের অর্থ করেন আগুনের জ্বালানি কাঠ। তাবারী বলেন, যা দিয়ে এ আগুন জ্বালানো হয় তা আদম সন্তান আর গন্ধকের পাথর। কুরতুবী জানিয়ে দেন, এর ব্যাখ্যা সূরা বাকারায় হয়ে গেছে। সেখানে ২:২৪ আয়াতে একই শব্দ এসেছে: সেই আগুনকে ভয় করো যার ইন্ধন মানুষ আর পাথর। এ বর্ণনার কারণ সা'দী বলেন: আল্লাহ আগুনের এমন বিবরণ দিয়েছেন যাতে তাঁর বান্দারা তাঁর হুকুমকে হালকাভাবে না নেয়।"
          },
          {
            "en": "On the stones the commentators differ. Ibn Kathir, introducing it with it is said, takes them to be the idols that were worshipped, citing 21:98: you and what you worship besides Allah are the fuel of Hell. As-Sa'di sets the same verse beside the phrase. Ibn Kathir then reports from Ibn Mas'ud (RA), Mujahid, Abu Ja'far al-Baqir and as-Suddi that they are stones of sulphur, and Mujahid adds that they stink worse than carrion. At-Tabari names only sulphur. The verse itself says only stones.",
            "bn": "পাথর নিয়ে তাফসীরকারদের মতভেদ আছে। ইবন কাসীর 'বলা হয়' কথাটি দিয়ে শুরু করে বলেন, এগুলো সেই মূর্তি যাদের পূজা করা হতো। দলিল হিসেবে আনেন ২১:৯৮: তোমরা আর আল্লাহকে বাদ দিয়ে যাদের ইবাদত করো, সবাই জাহান্নামের ইন্ধন। সা'দীও এ আয়াতটি পাশে রাখেন। এরপর ইবন কাসীর ইবন মাসঊদ (রাঃ), মুজাহিদ, আবু জাফর বাকির ও সুদ্দী থেকে বর্ণনা করেন যে এগুলো গন্ধকের পাথর। মুজাহিদ যোগ করেন, এর দুর্গন্ধ পচা লাশের চেয়েও বেশি। তাবারী শুধু গন্ধকের কথাই বলেন। আয়াত নিজে শুধু পাথর বলে।"
          }
        ]
      },
      {
        "h": {
          "en": "Keepers Who Never Disobey",
          "bn": "অবাধ্য হয় না যে প্রহরীরা"
        },
        "p": [
          {
            "en": "'Alayha mala'ikatun ghilazun shidad: over it are angels, harsh and severe. At-Tabari reads both words as directed at the people of the Fire: harsh towards them, severe upon them. Ibn Kathir divides them. Ghilaz describes their nature, from whose hearts mercy towards those who disbelieve in Allah has been removed; shidad describes their make, of the utmost strength and fearsome to see. Al-Qurtubi gives several readings: harsh of heart and severe of body; harsh in words and severe in deeds; or great bulk and great strength.",
            "bn": "আলাইহা মালাইকাতুন গিলাযুন শিদাদ: তার উপর আছে কঠোর, নির্মম ফেরেশতারা। তাবারী দুটি শব্দকেই জাহান্নামবাসীর দিকে ফেরান: তাদের প্রতি রূঢ়, তাদের উপর কঠোর। ইবন কাসীর শব্দ দুটিকে ভাগ করেন। গিলায তাদের স্বভাবের বর্ণনা: যারা আল্লাহকে অস্বীকার করে, তাদের প্রতি দয়া এদের অন্তর থেকে তুলে নেওয়া হয়েছে। শিদাদ তাদের গড়নের বর্ণনা: চরম শক্তিশালী, দেখতে ভয়ংকর। কুরতুবী কয়েকটি ব্যাখ্যা দেন: অন্তরে রূঢ় আর দেহে শক্ত; কথায় রূঢ় আর কাজে কঠোর; অথবা বিশাল দেহ আর প্রবল শক্তি।"
          },
          {
            "en": "Al-Baghawi, Ibn Kathir and Ma'arif al-Qur'an name them the Zabaniya, the keepers of the Fire, from whom, Ma'arif says, no one escapes by force, flattery or bribery. Then la ya'suna-llaha ma amarahum wa yaf'aluna ma yu'marun: they do not disobey Allah in what He commands them, and they do what they are commanded. Al-Qurtubi separates the two clauses: they neither add to His command nor leave any of it out, and they carry it out at its time, neither delaying it nor bringing it forward. Ibn Kathir: they hasten to it without the delay of a blink, and are never unable.",
            "bn": "বাগাভী, ইবন কাসীর ও মাআরিফুল কুরআন এদের নাম বলেন যাবানিয়া, জাহান্নামের প্রহরী। মাআরিফ বলে, শক্তি, তোষামোদ বা ঘুষ কোনো কিছু দিয়েই সেখানে কেউ এদের হাত থেকে ছাড়া পাবে না। এরপর লা ইয়া'সূনাল্লাহা মা আমারাহুম ওয়া ইয়াফ'আলূনা মা ইউ'মারূন: আল্লাহ তাদের যা আদেশ করেন তাতে তারা অবাধ্য হয় না, আর যা আদেশ পায় তা-ই করে। কুরতুবী বাক্য দুটিকে আলাদা করেন। প্রথমটির অর্থ, তাঁর হুকুমে তারা কিছু বাড়ায় না, কিছু কমায়ও না। দ্বিতীয়টির অর্থ, হুকুম পালন করে ঠিক সময়ে, দেরিও করে না, আগেও করে না। ইবন কাসীরের কথায়, চোখের পলক পরিমাণ দেরি না করে তারা ছুটে যায়, আর কখনো অক্ষম হয় না।"
          },
          {
            "en": "As-Sa'di notes that the clause is also praise of the noble angels, for their submission to Allah's command and their obedience in all He orders. The next verse, 66:7, turns to those who disbelieved: make no excuses today. This needs saying plainly. The verse describes the Fire, its keepers and its people as the text describes them, and licenses nothing against any living person or community. No reader is handed the keepers' work or the right to assign anyone to the Fire; the verse's own address is to believers, about themselves and their homes.",
            "bn": "সা'দী লক্ষ করেন, বাক্যটিতে সম্মানিত ফেরেশতাদের প্রশংসাও আছে: আল্লাহর হুকুমের প্রতি তাদের আত্মসমর্পণ, আর তাঁর প্রতিটি আদেশে তাদের আনুগত্য। পরের আয়াত, ৬৬:৭, ফেরে কাফিরদের দিকে: আজ কোনো অজুহাত দিয়ো না। কথাটা সোজাসুজি বলা দরকার। আয়াতটি আগুন, তার প্রহরী আর তার বাসিন্দাদের বর্ণনা দেয় ঠিক যেভাবে পাঠ বর্ণনা করে। কোনো জীবিত মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো অনুমতি দেয় না। কোনো পাঠকের হাতে প্রহরীদের কাজ তুলে দেওয়া হয়নি, কাউকে জাহান্নামী ঘোষণার অধিকারও নয়। আয়াতের সম্বোধন মুমিনদের প্রতি, তাদের নিজেদের আর তাদের ঘর নিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Where the Guarding Begins",
          "bn": "পাহারা শুরু হয় নিজের থেকে"
        },
        "p": [
          {
            "en": "Read with its commentators, the verse puts its harshness in one place only: with the keepers of the Fire. What it asks of the believer at home is what Ali (RA), Qatada, al-Hasan and al-Qurtubi name: teaching, training, commanding the good and forbidding the wrong, counsel, and a shepherd's care. As-Sa'di does speak of compelling those in one's charge to keep Allah's command, and the hadith of Sabra (RA) speaks of discipline at ten. Yet the word that recurs, from Ali (RA) to at-Tabari to al-Kiya, is teach, and teaching takes years.",
            "bn": "তাফসীরকারদের সঙ্গে পড়লে দেখা যায়, আয়াতের কঠোরতা কেবল একটিমাত্র জায়গায়: জাহান্নামের প্রহরীদের কাছে। ঘরে মুমিনের কাছে আয়াত যা চায়, তার নাম দিয়েছেন আলী (রাঃ), কাতাদা, হাসান ও কুরতুবী: শেখানো, আদব দেওয়া, ভালোর আদেশ আর মন্দের নিষেধ, নসিহত, আর রাখালের যত্ন। সা'দী অবশ্য অধীনদের আল্লাহর হুকুম মানতে বাধ্য করার কথা বলেন, আর সাবরা (রাঃ)-র হাদীসে ১০ বছর বয়সে শাসনের কথা আছে। তবু আলী (রাঃ) থেকে তাবারী হয়ে কিয়া পর্যন্ত যে শব্দ বারবার ফিরে আসে তা হলো শেখাও। আর শেখাতে বছরের পর বছর লাগে।"
          },
          {
            "en": "And the first object never drops away. No one can guard a family from a Fire he is walking toward himself, which is why anfusakum comes first. The surah's close, 66:10 to 66:12, sets the wives of Nuh (AS) and Lut (AS), whose marriage to two righteous servants availed them nothing against Allah, beside the wife of Fir'awn and Maryam (AS). The effort is commanded; the outcome is Allah's. And two verses on, 66:8 calls the same believers to sincere repentance.",
            "bn": "আর প্রথম কর্মটি কখনো বাদ পড়ে না। যে আগুনের দিকে কেউ নিজেই হাঁটছে, সে আগুন থেকে পরিবারকে বাঁচাতে পারে না। এ কারণেই আনফুসাকুম আগে। সূরার শেষে, ৬৬:১০ থেকে ৬৬:১২ আয়াতে, নূহ (আঃ) ও লূত (আঃ)-এর স্ত্রীদের কথা আসে। আল্লাহর দুই নেককার বান্দার স্ত্রী হয়েও আল্লাহর সামনে তা তাদের কোনো কাজে আসেনি। পাশেই আসে ফিরআউনের স্ত্রী আর মারইয়াম (আঃ)-এর কথা। চেষ্টা করার আদেশ আমাদের, ফলাফল আল্লাহর হাতে। আর দুই আয়াত পরে ৬৬:৮ একই মুমিনদের খাঁটি তওবার দিকে ডাকে।"
          }
        ]
      }
    ]
  },
  "66:8": {
    "sections": [
      {
        "h": {
          "en": "A Command to Turn Back",
          "bn": "ফিরে আসার নির্দেশ"
        },
        "p": [
          {
            "en": "The address is to those who already believe: O you who believe, turn to Allah in repentance — tubu ila Allahi tawbatan nasuha. That addressing settles a question before it is asked: tawbah is not the door by which outsiders enter and insiders forget; it is standing business for believers. The Prophet ﷺ himself said, in what Muslim relates, that he turned to Allah in repentance a hundred times in a day. Repentance here is not an emergency exit but a discipline.",
            "bn": "সম্বোধনটা তাদের প্রতি, যারা আগেই ঈমান এনেছে: হে ঈমানদারগণ, আল্লাহর কাছে তওবা করো, 'তূবূ ইলাল্লাহি তাওবাতান নাসূহা'। এই সম্বোধনই একটা প্রশ্ন ওঠার আগেই তার মীমাংসা করে দেয়। তওবা এমন দরজা নয়, যা দিয়ে বাইরের লোক ভেতরে ঢোকে আর ভেতরের লোক তা ভুলে যায়। তওবা মুমিনের নিত্যদিনের কাজ। মুসলিমের বর্ণনায় নবী ﷺ নিজেই বলেছেন, তিনি দিনে একশো বার আল্লাহর কাছে তওবা করেন। তাই এখানে তওবা বিপদে পড়লে বেরোনোর পথ নয়, বরং নিয়মিত সাধনা।"
          },
          {
            "en": "The surah's opening gives the command its edge. At-Tahrim begins with a household matter involving the Prophet's ﷺ wives; 66:4 calls two of them to turn to Allah, for their hearts had inclined. If tawbah is asked of the mothers of the believers in the Prophet's ﷺ own house, then 66:8, widening it to every believer, is not a rebuke reserved for great sinners but the shared road of the best of people.",
            "bn": "সূরার শুরুটা এই নির্দেশকে আরও ধারালো করে। আত-তাহরীম শুরু হয়েছে নবী ﷺ-এর স্ত্রীদের নিয়ে একটি ঘরোয়া ঘটনা দিয়ে। ৬৬:৪ আয়াতে তাঁদের দুজনকে আল্লাহর দিকে ফিরতে বলা হয়েছে, কারণ তাঁদের মন ঝুঁকে পড়েছিল। নবী ﷺ-এর নিজের ঘরে মুমিনদের মায়েদের কাছেই যদি তওবা চাওয়া হয়, তাহলে ৬৬:৮ আয়াত যখন তা প্রত্যেক মুমিনের জন্য বিস্তৃত করে, তখন সেটা বড় গুনাহগারদের জন্য তোলা কোনো তিরস্কার নয়। বরং এ সেই পথ, যে পথে শ্রেষ্ঠ মানুষেরাও সবার সঙ্গে হাঁটেন।"
          }
        ]
      },
      {
        "h": {
          "en": "What Nasuh Means",
          "bn": "নাসূহ মানে কী"
        },
        "p": [
          {
            "en": "Nasuh is from the root of nush, sincerity — the same root as the counsel a true friend gives. A tawbah nasuha is one that is sincere toward its owner: it advises him truly by actually severing him from the sin. Tabari relates from Umar (RA) that it is to repent from the wrong and then never return to it. The definitions the commentators gather circle one centre: an inward truthfulness that shows itself as an outward break.",
            "bn": "'নাসূহ' এসেছে 'নুসহ' ধাতু থেকে, যার অর্থ আন্তরিকতা। সত্যিকারের বন্ধু যে নসিহত করে, সেটাও এই একই ধাতুর শব্দ। 'তাওবাতান নাসূহা' মানে এমন তওবা, যা তওবাকারীর প্রতি আন্তরিক। সে তাকে খাঁটি নসিহত করে, কারণ সত্যিই তাকে গুনাহ থেকে বিচ্ছিন্ন করে দেয়। তাবারী উমর (রাঃ) থেকে বর্ণনা করেছেন: খাঁটি তওবা হলো অন্যায় থেকে তওবা করা, তারপর আর কখনো তাতে ফিরে না যাওয়া। মুফাসসিরগণ যত সংজ্ঞা জড়ো করেছেন, সবগুলোর কেন্দ্র একটাই: ভেতরের সত্যতা, যা বাইরে প্রকাশ পায় গুনাহের সঙ্গে সম্পর্ক ছিন্ন করার মধ্য দিয়ে।"
          },
          {
            "en": "The scholars formalised the parts. An-Nawawi states them: leave the sin, regret its commission, resolve firmly not to return; and if the wrong involved the right of another person, restore that right or seek his pardon. What the conditions exclude is precisely the counterfeit — the apology that plans its own repetition. The verse's single adjective, nasuha, was already excluding it: a repentance that intends to come back was never sincere counsel to its owner.",
            "bn": "আলিমগণ এর শর্তগুলো গুছিয়ে বলেছেন। আন-নববী সেগুলো উল্লেখ করেছেন: গুনাহটি ছেড়ে দেওয়া, তা করার জন্য অনুতপ্ত হওয়া, আর কখনো ফিরে না যাওয়ার দৃঢ় সংকল্প করা। অন্যায়টি যদি অন্য কারও হকের সঙ্গে জড়িত হয়, তাহলে সেই হক ফিরিয়ে দেওয়া, কিংবা তার কাছে মাফ চেয়ে নেওয়া। এই শর্তগুলো ঠিক নকল তওবাকেই বাদ দেয়: সেই মাফ চাওয়া, যা মনে মনে আবার একই কাজ করার পরিকল্পনা করে রাখে। আয়াতের একটিমাত্র বিশেষণ 'নাসূহা' আগেই একে বাদ দিয়ে রেখেছিল। যে তওবা আবার ফিরে আসার নিয়ত রাখে, তা কখনোই তওবাকারীর প্রতি আন্তরিক নসিহত ছিল না।"
          }
        ]
      },
      {
        "h": {
          "en": "'Asa From Allah",
          "bn": "আল্লাহর পক্ষ থেকে 'আসা'"
        },
        "p": [
          {
            "en": "The reward is phrased with 'asa, it may be: it may be that your Lord will remove from you your misdeeds and admit you into gardens beneath which rivers flow. The commentators, Ibn Kathir among them, note that 'asa from Allah denotes what is due to occur — generosity states its promise as hope so that the servant approaches without presumption, yet the outcome is not in doubt. Removal of sins and entry into the gardens are the two halves of one restoration.",
            "bn": "প্রতিদানের কথা বলা হয়েছে 'আসা' (হয়তো) শব্দ দিয়ে: হয়তো তোমাদের রব তোমাদের গুনাহগুলো মুছে দেবেন এবং তোমাদের এমন জান্নাতে প্রবেশ করাবেন, যার তলদেশে নহর বয়ে চলে। ইবনে কাসীরসহ মুফাসসিরগণ বলেন, আল্লাহর পক্ষ থেকে 'আসা' মানে যা ঘটবেই। এটা দয়ার রীতি: প্রতিশ্রুতিকে আশার ভাষায় বলা, যাতে বান্দা নিজেকে হকদার না ভেবে বিনয়ের সঙ্গে এগিয়ে আসে। অথচ ফল নিয়ে কোনো সন্দেহ নেই। গুনাহ মুছে যাওয়া আর জান্নাতে প্রবেশ, এ দুটো মিলে একটাই পুনরুদ্ধার।"
          },
          {
            "en": "The scale of the offer deserves stating plainly beside 39:53, which says: O My servants who have transgressed against their own souls, do not despair of Allah's mercy; indeed Allah forgives sins altogether. Tawbah nasuha is not the bargaining of a debtor with a reluctant creditor. It is the return of a servant to a Lord who has announced in advance that He forgives all of it, and who loves those who repent, as 2:222 says.",
            "bn": "প্রস্তাবটা কত বড়, তা সোজা ভাষায় বুঝতে ৩৯:৫৩ আয়াতটি পাশে রাখুন: হে আমার বান্দারা, যারা নিজেদের ওপর বাড়াবাড়ি করেছ, আল্লাহর রহমত থেকে নিরাশ হয়ো না; নিশ্চয়ই আল্লাহ সব গুনাহ ক্ষমা করে দেন। 'তাওবাতান নাসূহা' কোনো অনিচ্ছুক পাওনাদারের সঙ্গে দেনাদারের দর-কষাকষি নয়। এ হলো বান্দার এমন রবের কাছে ফিরে আসা, যিনি আগেই ঘোষণা দিয়ে রেখেছেন যে তিনি সবই ক্ষমা করেন, আর ২:২২২ আয়াত যেমন বলে, যিনি তওবাকারীদের ভালোবাসেন।"
          }
        ]
      },
      {
        "h": {
          "en": "The Day of Uncut Light",
          "bn": "পূর্ণ নূরের দিন"
        },
        "p": [
          {
            "en": "The verse then jumps to the Day when Allah will not disgrace the Prophet ﷺ and those who believed with him: their light runs before them and on their right, and they say, Our Lord, complete for us our light and forgive us; indeed You are over all things competent. 57:12 shows the same scene — light running before the believers — and 57:13 shows the hypocrites asking to borrow from it and being shut off behind a wall.",
            "bn": "এরপর আয়াতটি সোজা চলে যায় সেই দিনে, যেদিন আল্লাহ নবী ﷺ-কে এবং তাঁর সঙ্গে যারা ঈমান এনেছে তাদের লাঞ্ছিত করবেন না। তাদের নূর ছুটবে তাদের সামনে ও ডান দিকে, আর তারা বলবে: হে আমাদের রব, আমাদের নূর আমাদের জন্য পূর্ণ করে দিন এবং আমাদের ক্ষমা করুন; নিশ্চয়ই আপনি সবকিছুর ওপর ক্ষমতাবান। ৫৭:১২ আয়াতে একই দৃশ্য: মুমিনদের সামনে ছুটে চলা নূর। আর ৫৭:১৩ আয়াতে মুনাফিকরা সেই নূর থেকে একটু ধার চায়, তারপর একটা দেয়াল দিয়ে তাদের আটকে দেওয়া হয়।"
          },
          {
            "en": "The mufassirun connect the du'a to that moment: when the light of the hypocrites is put out, the believers ask that theirs be carried through to completion. What is striking is who prays it — people already crossing with light in hand still ask for completion and forgiveness. On the Last Day as on this one, the believer's security is not in his record but in his Lord, and asking remains his posture even inside rescue.",
            "bn": "মুফাসসিরগণ এই দোয়াকে সেই মুহূর্তের সঙ্গে মেলান: মুনাফিকদের আলো যখন নিভিয়ে দেওয়া হবে, মুমিনরা তখন চাইবে, তাদের আলো যেন শেষ পর্যন্ত পূর্ণ থাকে। লক্ষ করার মতো বিষয় হলো, দোয়াটা কারা করছে। যারা আলো হাতে নিয়ে পার হচ্ছে, তারাও পূর্ণতা আর ক্ষমা চাইছে। আজকের মতো কিয়ামতের দিনেও মুমিনের ভরসা তার আমলনামায় নয়, তার রবের ওপর। তাই উদ্ধার পাওয়ার মুহূর্তেও চাওয়াটাই তার স্বভাব হয়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Repentance and Light Together",
          "bn": "তওবা ও নূর একসঙ্গে"
        },
        "p": [
          {
            "en": "Placing the two halves of the verse side by side yields its argument: the light of that Day is fuelled here. The same people commanded to a sincere tawbah are the ones shown crossing with light, and the prayer for completed light sits beside the prayer for forgiveness in a single breath — the two requests are one request. Muslim relates that Allah is more joyful at the repentance of His servant than a man who despairs of his mount and provisions in the desert and then finds them; the One receiving the return is gladder than the one returning.",
            "bn": "আয়াতের দুই অংশ পাশাপাশি রাখলেই এর মূল কথা বেরিয়ে আসে: সেই দিনের আলোর জ্বালানি জোগাড় হয় এই দুনিয়াতেই। যাদের খাঁটি তওবার আদেশ দেওয়া হয়েছে, তাদেরই দেখানো হয়েছে আলো নিয়ে পার হতে। আর পূর্ণ নূরের দোয়া আর ক্ষমার দোয়া এসেছে এক নিঃশ্বাসে, পাশাপাশি; দুটো চাওয়া আসলে একই চাওয়া। মুসলিম বর্ণনা করেছেন: মরুভূমিতে কেউ তার বাহন আর রসদ হারিয়ে নিরাশ হয়ে যাওয়ার পর সেগুলো ফিরে পেলে যতটা খুশি হয়, বান্দার তওবায় আল্লাহ তার চেয়েও বেশি খুশি হন। যে ফিরে আসে, তার চেয়ে যিনি ফিরিয়ে নেন, তাঁর আনন্দ বেশি।"
          }
        ]
      },
      {
        "h": {
          "en": "The Practice of Turning",
          "bn": "ফিরে আসার অনুশীলন"
        },
        "p": [
          {
            "en": "The verse's practice begins tonight, not at some cleaner future date, because nasuh describes quality, not timing. Name the sin rather than the mood; leave it in the concrete way it is actually committed; feel its loss as loss; resolve against return; and where someone was wronged, give the right back — the apology, the money, the reputation. Nothing in the list requires a feeling of worthiness. It requires truthfulness, which is available even to the person who fears he will fail again.",
            "bn": "এই আয়াতের আমল শুরু হয় আজ রাতেই, নিজেকে একটু গুছিয়ে নেওয়ার পর ভবিষ্যতের কোনো দিনে নয়। কারণ 'নাসূহ' তওবার মান বোঝায়, সময় নয়। মনের অবস্থার নাম নয়, গুনাহটির নাম নিন। বাস্তবে গুনাহটা যেভাবে করেন, ঠিক সেভাবেই তা ছাড়ুন। এতে যা হারিয়েছেন, তাকে সত্যিকারের ক্ষতি বলে অনুভব করুন। আর ফিরে না যাওয়ার সংকল্প করুন। কারও ওপর অন্যায় হয়ে থাকলে তার হক ফিরিয়ে দিন: মাফ চাওয়া, টাকা, সুনাম। এই তালিকার কোনোটির জন্যই নিজেকে যোগ্য মনে হওয়ার দরকার নেই। দরকার শুধু সত্যবাদিতা, আর সেটা তারও নাগালে আছে, যে ভয় পায় আবার ব্যর্থ হবে।"
          },
          {
            "en": "And if he does fail again? The command remains addressed to him: O you who believe, repent. Each return is judged as itself; sincerity is measured at the time of the turning, not falsified by a later fall. The believers in the verse walk toward the gardens asking for light and forgiveness to the end — so a lifetime that looks like repeated turning back to Allah is not a failed tawbah; it is what the road of the people of 66:8 has always looked like.",
            "bn": "আর সে যদি আবার ব্যর্থ হয়? নির্দেশটা তখনো তাকেই বলা: হে ঈমানদারগণ, তওবা করো। প্রতিটি ফিরে আসার বিচার হয় আলাদাভাবে। আন্তরিকতা মাপা হয় ফিরে আসার মুহূর্তে; পরে আবার পড়ে গেলে আগের আন্তরিকতা মিথ্যা হয়ে যায় না। আয়াতের মুমিনরা শেষ পর্যন্ত নূর আর ক্ষমা চাইতে চাইতে জান্নাতের দিকে হাঁটে। তাই যে জীবন দেখতে বারবার আল্লাহর দিকে ফিরে আসার মতো, তা ব্যর্থ তওবা নয়। ৬৬:৮ আয়াতের মানুষদের পথ চিরকাল এমনই ছিল।"
          }
        ]
      }
    ]
  }
});
