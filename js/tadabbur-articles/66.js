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
          "en": "Before Excuses Run Out",
          "bn": "অজুহাতের দিন আসার আগে"
        },
        "p": [
          {
            "en": "Ya ayyuha-lladhina amanu tubu ila-llah: O you who believe, turn to Allah. The call comes straight after two others. 66:6 tells the believers to guard themselves and their families from a Fire whose fuel is people and stones. 66:7 then moves to the Day itself, where those who disbelieved are told to make no excuses, since they are repaid only for what they used to do. Against that shut door, 66:8 turns back to people who still live in the time of turning.",
            "bn": "ইয়া আইয়ুহাল্লাযীনা আমানূ তূবূ ইলাল্লাহ: হে মুমিনগণ, আল্লাহর দিকে ফিরে এসো। এ ডাকের ঠিক আগে আরও দুটি কথা এসেছে। ৬৬:৬ আয়াতে মুমিনদের বলা হয়েছে নিজেদের ও পরিবারকে সেই আগুন থেকে বাঁচাতে, যার জ্বালানি মানুষ আর পাথর। ৬৬:৭ আয়াত চলে যায় সেই দিনে, যেখানে কাফিরদের বলা হবে, আজ কোনো অজুহাত দেখিও না, তোমরা যা করতে কেবল তারই প্রতিফল পাচ্ছ। সে দরজা বন্ধ। তার পাশেই ৬৬:৮ ফিরে আসে তাদের কাছে, যাদের হাতে এখনো ফেরার সময় আছে।"
          },
          {
            "en": "At-Tabari explains tubu as: return from your sins to obedience of Allah, and to what makes Him pleased with you. Al-Qurtubi calls the clause a command to repentance and says it is an obligation on every individual, in every state and at every time. The surah has used the word already. 66:4 calls two of the Prophet's ﷺ wives to turn to Allah, and 66:5 names the repentant among the qualities it lists. Here the same call widens to all who believe.",
            "bn": "তাবারী তূবূ শব্দের ব্যাখ্যা দেন এভাবে: নিজেদের গুনাহ ছেড়ে আল্লাহর আনুগত্যের দিকে ফিরে এসো, ফিরে এসো সেই কাজের দিকে যাতে তিনি তোমাদের উপর সন্তুষ্ট হন। কুরতুবী বলেন, এটি তওবার আদেশ, আর তওবা প্রত্যেক মানুষের উপর ফরজ, সব অবস্থায়, সব সময়ে। এ সূরায় শব্দটা আগেও এসেছে। ৬৬:৪ আয়াতে নবী ﷺ-এর দুই স্ত্রীকে আল্লাহর দিকে ফিরতে বলা হয়েছে, আর ৬৬:৫ আয়াত যে গুণগুলো গুনেছে তার মধ্যে তওবাকারিণীও আছে। এখানে এসে সেই একই ডাক সব মুমিনের জন্য খুলে যায়।"
          },
          {
            "en": "One line on 66:7 itself. It describes those who disbelieved as they will stand on that Day, in the Qur'an's own words of condemnation. It records what the text records and licenses nothing against any living person or community; no reader is handed the verdict of that Day to pass on a neighbour now. The verse that follows sends the reader's eyes back to his own sins.",
            "bn": "৬৬:৭ নিয়ে একটি কথা। আয়াতটি কাফিরদের সেই দিনের অবস্থার বর্ণনা দেয়, কুরআনের নিজের নিন্দার ভাষায়। পাঠ যা বলে আয়াত শুধু ততটুকুই জানায়। আজকের কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছু করার অনুমতি এতে নেই। সেই দিনের রায় নিয়ে প্রতিবেশীর বিচার করার ভার কোনো পাঠককে দেওয়া হয়নি। পরের আয়াত পাঠকের চোখ ফিরিয়ে দেয় তার নিজের গুনাহের দিকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Milk Does Not Return",
          "bn": "দুধ আর বাঁটে ফেরে না"
        },
        "p": [
          {
            "en": "Tawbatan nasuha. At-Tabari glosses it as a return in which you never go back, and says the people of interpretation held the same. He gives it first from 'Umar (RA), through several chains from an-Nu'man ibn Bashir: sincere repentance is that a man repents of the bad deed and then never returns to it. One chain adds 'or does not want to return', and another has an-Nu'man reporting it from 'Umar while delivering a sermon. The definition is about what happens after the words.",
            "bn": "তাওবাতান নাসূহা। তাবারী এর অর্থ করেন এমন ফেরা, যার পরে আর কখনো পেছনে যাওয়া নেই। তিনি বলেন, ব্যাখ্যাকারেরাও এ কথাই বলেছেন। প্রথমে তিনি আনেন উমর (রাঃ)-এর বক্তব্য, নুমান ইবন বাশীর থেকে কয়েকটি সূত্রে: খাঁটি তওবা হলো, মানুষ মন্দ কাজ থেকে তওবা করবে, তারপর আর কখনো সেদিকে ফিরবে না। একটি সূত্রে আছে, অথবা ফেরার ইচ্ছাও রাখবে না। আরেক সূত্রে নুমান খুতবা দেওয়ার সময় উমর (রাঃ) থেকে কথাটি শোনান। সংজ্ঞাটা আসলে মুখের কথার পরে কী ঘটে, তা নিয়ে।"
          },
          {
            "en": "Others in at-Tabari say the same in fewer words. Ibn Mas'ud (RA): he repents and does not return. Ibn Abbas: that its owner does not go back to the sin he repented of. Mujahid: they ask forgiveness and do not return. Ad-Dahhak: you turn away from the sin and never go back to it. The Muyassar folds the line into its paraphrase: return from your sins to obedience of Allah, a return with no disobedience after it.",
            "bn": "তাবারীর কাছে আরও কয়েকজন একই কথা বলেন আরও সংক্ষেপে। ইবন মাসউদ (রাঃ): তওবা করে, আর ফেরে না। ইবন আব্বাস (রাঃ): যে গুনাহ থেকে তওবা করেছে, সে আর সে গুনাহে ফিরবে না। মুজাহিদ: তারা ইস্তিগফার করে, তারপর আর ফেরে না। দাহহাক: গুনাহ থেকে সরে আসবে, তারপর কখনো আর সেদিকে যাবে না। মুয়াসসার কথাটা নিজের ব্যাখ্যার মধ্যেই বুনে দেয়: গুনাহ ছেড়ে আল্লাহর আনুগত্যে ফিরে এসো, এমনভাবে যে তার পরে আর নাফরমানি নেই।"
          },
          {
            "en": "The image of milk comes from two of the files. Al-Baghawi attributes to 'Umar, Ubayy and Mu'adh: one repents and does not return to the sin, as milk does not return to the udder. Al-Qurtubi gives it as the first of twenty-three sayings, reported from 'Umar, Ibn Mas'ud, Ubayy ibn Ka'b and Mu'adh ibn Jabal, and adds that Mu'adh traced it to the Prophet ﷺ. Ibn Kathir cites a version through Ibn Mas'ud traced to the Prophet ﷺ in Imam Ahmad, notes that only Ibrahim al-Hajari carries it and he is weak, and judges the Companion's own saying sounder.",
            "bn": "দুধের উপমাটা পাওয়া যায় দুটি তাফসীরে। বাগাভী এটিকে উমর, উবাই ও মুআয (রাঃ)-এর কথা বলে উল্লেখ করেন: তওবা করবে, তারপর আর গুনাহে ফিরবে না, যেমন দোয়ানো দুধ আর বাঁটে ফেরে না। কুরতুবী তেইশটি মতের প্রথমটি হিসেবে এটি আনেন। তিনি জানান, কথাটি উমর, ইবন মাসউদ, উবাই ইবন কাব ও মুআয ইবন জাবাল (রাঃ) থেকে বর্ণিত, আর মুআয (রাঃ) এটিকে নবী ﷺ পর্যন্ত পৌঁছিয়েছেন। ইবন কাসীর ইমাম আহমাদের কাছ থেকে ইবন মাসউদ (রাঃ)-এর সূত্রে নবী ﷺ পর্যন্ত পৌঁছানো একটি রূপ উল্লেখ করেন। তিনি বলেন, এটি কেবল ইবরাহীম আল-হাজারীর সূত্রে এসেছে, আর তিনি দুর্বল। তাঁর বিচারে সাহাবীর নিজের কথা হিসেবেই বর্ণনাটি বেশি নির্ভরযোগ্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Pure Honey, Firm Stitching",
          "bn": "খাঁটি মধু, মজবুত সেলাই"
        },
        "p": [
          {
            "en": "What does nasuh add to tawbah? Qatada, in at-Tabari, answers: the repentance that is truthful and sincere. Ibn Zayd says it is the true repentance, where the person knows it is honest regret for his error and love of returning to obedience, and that, he says, is nasuh. Ibn Kathir describes it as truthful and firm: it erases the bad deeds before it, gathers up the scattered state of the penitent, and holds him back from the base things he used to do.",
            "bn": "তওবার সঙ্গে নাসূহ শব্দটি কী যোগ করে? তাবারীর বর্ণনায় কাতাদা বলেন: যে তওবা সত্য ও আন্তরিক। ইবন যায়দ বলেন, এটি সেই সত্যিকারের তওবা, যেখানে মানুষ জানে তার অনুশোচনা খাঁটি, আর আনুগত্যে ফেরার জন্য তার মনে টান আছে। তাঁর ভাষায়, এটাই নাসূহ। ইবন কাসীর একে বলেন সত্য ও দৃঢ় তওবা। এমন তওবা আগের গুনাহগুলো মুছে দেয়, তওবাকারীর ছড়িয়ে-ছিটিয়ে যাওয়া অবস্থাকে গুছিয়ে আনে, আর যে হীন কাজে সে জড়িয়ে ছিল তা থেকে তাকে আটকে রাখে।"
          },
          {
            "en": "Al-Qurtubi traces the word to purity: honey is called nasih when it is clear of its wax. Others take it from nisaha, sewing, and he gives two ways to read that. Such repentance makes the person's obedience firm and secure, as a tailor fastens a garment with his stitching; or it joins him to the friends of Allah and binds him to them, as the tailor joins one piece of cloth to another. Ma'arif al-Qur'an keeps both lines: sincere and free of pretence, or the mending of a torn garment of good deeds.",
            "bn": "কুরতুবী শব্দটির মূল খোঁজেন খাঁটিত্বে। মোম থেকে আলাদা হয়ে পরিষ্কার হলে মধুকে বলা হয় নাসিহ। কেউ কেউ শব্দটি নেন নিসাহা থেকে, যার অর্থ সেলাই। কুরতুবী এর দুটি ব্যাখ্যা দেন। দর্জি যেমন সেলাই করে কাপড় মজবুত করে, এমন তওবা তেমনি বান্দার আনুগত্যকে পোক্ত করে। অথবা দর্জি যেমন কাপড়ের একটি টুকরো আরেকটির সঙ্গে জোড়ে, এ তওবা তেমনি তাকে আল্লাহর ওলিদের সঙ্গে জুড়ে দেয়। মাআরিফুল কুরআন দুটি অর্থই রাখে: লোক দেখানো ভাব থেকে মুক্ত আন্তরিক তওবা, অথবা নেক আমলের ছেঁড়া কাপড় রিফু করা।"
          },
          {
            "en": "As-Sa'di reads the word by its reach. The repentance meant, he says, is general and covers every sin; the servant binds himself to it for Allah, wanting nothing by it but His face and nearness to Him, and keeps to it in all his states. Al-Qurtubi also quotes Sa'id ibn Jubayr: it is the repentance that is accepted, and it needs three things, fear that it will not be accepted, hope that it will, and constant obedience.",
            "bn": "সা'দী শব্দটি পড়েন তার পরিধি দিয়ে। তাঁর মতে এখানে উদ্দেশ্য সর্বব্যাপী তওবা, যা সব গুনাহকে ঘিরে রাখে। বান্দা আল্লাহর জন্যই এর অঙ্গীকার করে, এতে আল্লাহর সন্তুষ্টি আর তাঁর নৈকট্য ছাড়া আর কিছু চায় না, আর সব অবস্থায় তার উপর অটল থাকে। কুরতুবী সাঈদ ইবন জুবায়রের কথাও আনেন: এটি কবুল হওয়া তওবা, আর এর জন্য তিনটি জিনিস লাগে। কবুল না হওয়ার ভয়, কবুল হওয়ার আশা, আর লাগাতার আনুগত্য।"
          }
        ]
      },
      {
        "h": {
          "en": "Nasuh or Nusuh",
          "bn": "নাসূহ না নুসূহ"
        },
        "p": [
          {
            "en": "The readers differed over one vowel. At-Tabari reports that the general body of readers in the cities, except 'Asim, read nasuhan with an open nun, as a quality of the repentance, and that 'Asim is reported to have read nusuhan, with a damma, as a verbal noun, from the expression nasaha fulanun li-fulanin nusuhan, he gave someone sincere counsel. Al-Qurtubi names al-Hasan, Kharija and Abu Bakr from 'Asim for the damma; al-Baghawi names al-Hasan and Abu Bakr from 'Asim.",
            "bn": "একটি স্বরচিহ্ন নিয়ে কারীদের মধ্যে ভিন্নতা আছে। তাবারী জানান, আসিম ছাড়া বিভিন্ন শহরের সাধারণ কারীরা পড়েছেন নাসূহান, নূনে যবর দিয়ে, তওবার গুণ হিসেবে। আর আসিম সম্পর্কে বর্ণিত আছে, তিনি পড়েছেন নুসূহান, পেশ দিয়ে, ক্রিয়াবাচক বিশেষ্য হিসেবে। আরবিতে বলা হয় নাসাহা ফুলানুন লি-ফুলানিন নুসূহান, অর্থাৎ সে অমুককে আন্তরিকভাবে উপদেশ দিল। কুরতুবী পেশের পাঠ উল্লেখ করেন হাসান, খারিজা আর আসিম থেকে আবু বকরের সূত্রে। বাগাভী নাম নেন হাসান আর আসিম থেকে আবু বকরের।"
          },
          {
            "en": "Each vowel bends the sense a little. On the common reading, al-Qurtubi compares the pattern to imra'atun sabur, a very patient woman: a repentance that reaches the utmost in sincere counsel. Al-Baghawi says it counsels its owner to leave off returning to what he repented of. On the damma, al-Qurtubi gives: a repentance of sincere counsel to yourselves, close to Sa'id ibn al-Musayyab's gloss that he also quotes, a repentance by which you counsel your own selves; and he cites al-Mubarrad: a repentance possessed of sincerity. At-Tabari judges the open vowel the more correct, since the authorities agree on it. Both readings are reported here; this article ranks neither.",
            "bn": "প্রতিটি স্বরচিহ্নে অর্থ একটু করে বাঁক নেয়। প্রচলিত পাঠে কুরতুবী শব্দের গড়নকে তুলনা করেন ইমরাআতুন সাবূর কথার সঙ্গে, যার মানে খুব ধৈর্যশীল নারী। তাহলে অর্থ দাঁড়ায়: আন্তরিকতায় চূড়ান্ত পর্যায়ে পৌঁছানো তওবা। বাগাভীর মতে এ তওবা তার মালিককে উপদেশ দেয়, যা থেকে তওবা করেছে সেদিকে আর ফিরো না। পেশের পাঠে কুরতুবীর ব্যাখ্যা: নিজেদের প্রতি আন্তরিক কল্যাণকামনার তওবা। কুরতুবী সাঈদ ইবনুল মুসাইয়্যিবের যে ব্যাখ্যা আনেন, সেটিও এর কাছাকাছি: এমন তওবা, যা দিয়ে তোমরা নিজেদের কল্যাণ চাও। কুরতুবী মুবাররাদের কথাও আনেন: আন্তরিকতাসম্পন্ন তওবা। তাবারী যবরের পাঠকেই বেশি সঠিক মনে করেন, কারণ প্রামাণ্য আলেমরা এতে একমত। এখানে দুটি পাঠই উল্লেখ করা হলো, কোনোটিকে প্রাধান্য দেওয়া হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Whole Person Turns",
          "bn": "পুরো মানুষটাই ফেরে"
        },
        "p": [
          {
            "en": "Al-Kalbi, quoted by al-Qurtubi, al-Baghawi and Ma'arif al-Qur'an, divides the work among the faculties: regret in the heart, asking forgiveness with the tongue, and holding back with the body; al-Qurtubi's wording adds a settled confidence that he will not return. Al-Qurazi, in al-Qurtubi and al-Baghawi, gathers it in four things: asking forgiveness with the tongue, stopping with the body, intending in the heart never to return, and leaving bad companions. Al-Hasan, in Ibn Kathir, puts it as feeling: hate the sin as you once loved it, and ask forgiveness whenever you remember it.",
            "bn": "কালবীর কথা আনেন কুরতুবী, বাগাভী ও মাআরিফুল কুরআন। তিনি কাজটা ভাগ করে দেন মানুষের বিভিন্ন অংশের মধ্যে: অন্তরে অনুশোচনা, জিহ্বায় ইস্তিগফার, আর শরীর দিয়ে গুনাহ থেকে বিরত থাকা। কুরতুবীর বর্ণনায় এর সঙ্গে আছে, আর না ফেরার ব্যাপারে মনের স্থির আস্থা। কুরতুবী ও বাগাভী কুরাযীর কথা আনেন, যিনি একে চারটি জিনিসে গুছিয়েছেন: জিহ্বায় ইস্তিগফার, শরীরে গুনাহ ছেড়ে দেওয়া, অন্তরে আর না ফেরার সংকল্প, আর খারাপ সঙ্গ ত্যাগ করা। ইবন কাসীরের বর্ণনায় হাসান কথাটা বলেন অনুভূতির ভাষায়: গুনাহকে যতটা ভালোবেসেছিলে ততটাই ঘৃণা করো, আর যখনই মনে পড়ে, ইস্তিগফার করো।"
          },
          {
            "en": "The familiar conditions appear here as the tafsirs frame them. Ibn Kathir writes that the scholars said sincere repentance is to stop the sin now, regret what is past, and resolve not to do it again; and if the right belongs to a human being, to return it to him in the proper way. Ma'arif al-Qur'an, citing Mazhari, reports 'Ali (RA) naming six elements, among them making up missed duties, restoring usurped rights and asking pardon of the person wronged, and says all scholars accept them, some briefly and some in detail.",
            "bn": "পরিচিত শর্তগুলো এখানে আসে তাফসীরকারদের নিজেদের ভাষায়। ইবন কাসীর লেখেন, আলেমরা বলেছেন: খাঁটি তওবা হলো এখনই গুনাহ ছেড়ে দেওয়া, অতীতের জন্য অনুশোচনা করা, আর ভবিষ্যতে না করার দৃঢ় সংকল্প নেওয়া। আর হকটা যদি কোনো মানুষের হয়, তবে যথাযথ পথে তা তাকে ফিরিয়ে দেওয়া। মাআরিফুল কুরআন মাযহারীর বরাতে আলী (রাঃ)-এর ছয়টি উপাদানের কথা জানায়। এর মধ্যে আছে ছুটে যাওয়া ফরজ আদায় করা, ছিনিয়ে নেওয়া হক ফিরিয়ে দেওয়া, আর যার উপর জুলুম হয়েছে তার কাছে ক্ষমা চাওয়া। মাআরিফ বলে, সব আলেমই এগুলো মানেন, কেউ সংক্ষেপে বলেছেন, কেউ বিস্তারিত।"
          }
        ]
      },
      {
        "h": {
          "en": "What Is Owed Goes Back",
          "bn": "যার পাওনা, তাকে ফেরত"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives a whole discussion to what repentance requires. A sin against Allah's right, such as abandoning prayer, is not repented of until regret is joined by making up what was missed, and so with fasting and zakat. Where retaliation or the penalty for slander is due, the person submits to it if it is sought; if he is pardoned, regret and resolve suffice, and blood money agreed instead is paid, as 2:178 says. A wrong against people requires returning the thing to its owner, or a resolve to return it at the first chance.",
            "bn": "তওবার জন্য কী কী লাগে, কুরতুবী তা নিয়ে আলাদা একটি আলোচনা করেছেন। গুনাহটা যদি আল্লাহর হকে হয়, যেমন নামাজ ছেড়ে দেওয়া, তবে অনুশোচনার সঙ্গে ছুটে যাওয়া নামাজ কাযা না করা পর্যন্ত তওবা পূর্ণ হয় না। রোজা আর যাকাতের বেলাতেও একই কথা। কিসাস বা অপবাদের হদ্দ পাওনা থাকলে, তা দাবি করা হলে নিজেকে সঁপে দিতে হবে। মাফ পেলে অনুশোচনা আর সংকল্পই যথেষ্ট। আর কিসাসের বদলে রক্তমূল্যে মীমাংসা হলে তা আদায় করতে হবে, যেমন ২:১৭৮ আয়াতে আছে। মানুষের উপর করা জুলুমে জিনিসটা মালিককে ফিরিয়ে দিতে হবে, না পারলে প্রথম সুযোগেই ফেরত দেওয়ার সংকল্প রাখতে হবে।"
          },
          {
            "en": "Ibn Kathir raises a further question. Does sincere repentance require keeping to it until death, as the words never return in the reports suggest? Or is the resolve not to return enough to wipe out the past, so that a later fall does not undo what was forgiven? He cites a report for each side, then gives the first an argument from the greater to the lesser, and closes with: and Allah knows best. The question is set down here as he frames it.",
            "bn": "ইবন কাসীর আরেকটি প্রশ্ন তোলেন। খাঁটি তওবার শর্ত কি মৃত্যু পর্যন্ত তার উপর টিকে থাকা, যেমন বর্ণনাগুলোর 'আর কখনো ফিরবে না' কথাটা ইঙ্গিত দেয়? নাকি আর না ফেরার সংকল্পই অতীত মুছে যাওয়ার জন্য যথেষ্ট, ফলে পরে আবার পা পিছলে গেলেও যা মাফ হয়েছে তা নষ্ট হয় না? তিনি দুই পক্ষের জন্যই একটি করে বর্ণনা উল্লেখ করেন। তারপর প্রথম পক্ষের পক্ষে বড় থেকে ছোটর দিকে একটি যুক্তি দেন, আর শেষ করেন এই বলে: আল্লাহই ভালো জানেন। প্রশ্নটা এখানে রাখা হলো ঠিক যেভাবে তিনি তুলেছেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Hope Worded as Certainty",
          "bn": "আশার ভাষায় নিশ্চয়তা"
        },
        "p": [
          {
            "en": "'Asa rabbukum: perhaps your Lord. Ibn Kathir says 'asa from Allah is binding, and al-Qurtubi that it is a certainty. Ma'arif al-Qur'an reads it as a promise worded as hope, to show that repentance and good deeds are not an equal price for Paradise and forgiveness, which rest on Allah's grace. At-Tabari explains the promise: He erases the bad deeds you have already done, and admits you to gardens with rivers flowing beneath their trees. The Muyassar says beneath their palaces.",
            "bn": "আসা রাব্বুকুম: হয়তো তোমাদের রব। ইবন কাসীর বলেন, আল্লাহর পক্ষ থেকে আসা শব্দটি অবশ্যম্ভাবী বিষয় বোঝায়। কুরতুবীও বলেন, এটি নিশ্চিত। মাআরিফুল কুরআনের মতে এটি আশার ভাষায় দেওয়া প্রতিশ্রুতি। এভাবে বলার কারণ, তওবা বা নেক আমল জান্নাত ও মাগফিরাতের সমান দাম নয়। এগুলো আল্লাহর অনুগ্রহের উপর নির্ভর করে। তাবারী প্রতিশ্রুতিটা খুলে বলেন: তোমাদের আগে করা মন্দ কাজগুলো তিনি মুছে দেবেন, আর এমন বাগানে প্রবেশ করাবেন যার গাছের নিচ দিয়ে নদী বয়ে চলে। মুয়াসসার বলে, প্রাসাদের নিচ দিয়ে।"
          },
          {
            "en": "Two sayings of the Prophet ﷺ are attached. Ibn Kathir cites Ibn Mas'ud's report and names Ibn Majah among its narrators. Ibn Majah records it (4252) from Ibn Ma'qil: 'I entered with my father upon 'Abdullah, and I heard him say: The Messenger of Allah ﷺ said: \"Regret is repentance.\" My father said: Did you hear the Prophet ﷺ say: \"Regret is repentance?\" He said: Yes.' Al-Qurtubi ties 'asa to another, which Ibn Majah records (4250): 'The one who repents from sin is like one who did not sin.' Ibn Majah records no grading of his own for either, so none is claimed.",
            "bn": "নবী ﷺ-এর দুটি বাণী এ আয়াতের সঙ্গে যুক্ত। ইবন কাসীর ইবন মাসউদ (রাঃ)-এর বর্ণনা আনেন এবং এর বর্ণনাকারীদের মধ্যে ইবন মাজাহর নাম উল্লেখ করেন। ইবন মাজাহ ইবন মা'কিল থেকে বর্ণনাটি এনেছেন (৪২৫২): \"আমি আমার বাবার সঙ্গে আবদুল্লাহর কাছে গেলাম। শুনলাম তিনি বলছেন: রাসূলুল্লাহ ﷺ বলেছেন, 'অনুশোচনাই তওবা।' আমার বাবা জিজ্ঞেস করলেন: আপনি কি নবী ﷺ-কে বলতে শুনেছেন, 'অনুশোচনাই তওবা'? তিনি বললেন: হ্যাঁ।\" কুরতুবী আসা শব্দটিকে আরও একটি বাণীর সঙ্গে মেলান, যা ইবন মাজাহ বর্ণনা করেছেন (৪২৫০): \"গুনাহ থেকে তওবাকারী ঠিক তার মতো, যার কোনো গুনাহ নেই।\" কোনোটির বেলাতেই ইবন মাজাহ নিজে কোনো মান উল্লেখ করেননি, তাই এখানেও কোনো মান দাবি করা হলো না।"
          }
        ]
      },
      {
        "h": {
          "en": "Complete Our Light",
          "bn": "আমাদের নূর পূর্ণ করে দাও"
        },
        "p": [
          {
            "en": "Yawma la yukhzi-llahu-n-nabiyya walladhina amanu ma'ah. Al-Qurtubi and al-Baghawi take yukhzi here as punishing: He will not punish the Prophet ﷺ nor those who believed with him, al-Baghawi adding by entry into the Fire. Then nuruhum yas'a: at-Tabari has their light running before them, and reads bi-aymanihim as their records in their right hands. Al-Baghawi and the Muyassar set the walk on the Sirat, the Muyassar saying the light is in measure with their deeds. 57:12 shows the same light.",
            "bn": "ইয়াওমা লা ইউখযিল্লাহুন নাবিয়্যা ওয়াল্লাযীনা আমানূ মাআহ। কুরতুবী ও বাগাভী এখানে ইউখযী শব্দের অর্থ নেন শাস্তি দেওয়া: সেদিন আল্লাহ নবী ﷺ-কে শাস্তি দেবেন না, তাঁর সঙ্গে যারা ঈমান এনেছে তাদেরও না। বাগাভী যোগ করেন, জাহান্নামে প্রবেশ করিয়ে শাস্তি দেবেন না। তারপর নূরুহুম ইয়াসআ: তাবারীর ব্যাখ্যায় তাদের নূর তাদের সামনে ছুটে চলবে, আর বি-আইমানিহিম মানে তাদের ডান হাতে থাকবে তাদের আমলনামা। বাগাভী ও মুয়াসসার এ পথচলাকে রাখেন পুলসিরাতের উপর। মুয়াসসার বলে, নূর হবে তাদের আমলের পরিমাণ অনুযায়ী। ৫৭:১২ আয়াতেও একই নূরের ছবি।"
          },
          {
            "en": "Rabbana atmim lana nurana. Ibn Kathir reports from Mujahid, ad-Dahhak and al-Hasan that the believers say this when they see the hypocrites' light put out; al-Qurtubi gives it from Ibn Abbas and Mujahid. At-Tabari says they ask that their light stay until they cross the Sirat, when the hypocrites say, in 57:13, wait for us, that we may borrow from your light. He quotes al-Hasan: everyone is given light, believer and hypocrite; the hypocrite's is put out, and the believer fears for his own. That scene describes the Day and licenses nothing against any living person.",
            "bn": "রাব্বানা আতমিম লানা নূরানা। ইবন কাসীর মুজাহিদ, দাহহাক ও হাসান থেকে বর্ণনা করেন, মুনাফিকদের নূর নিভে যেতে দেখে মুমিনরা এ কথা বলবে। কুরতুবী একই কথা আনেন ইবন আব্বাস ও মুজাহিদ থেকে। তাবারী বলেন, তারা চাইবে পুলসিরাত পার হওয়া পর্যন্ত তাদের নূর যেন টিকে থাকে। সেটা সেই মুহূর্ত, যখন মুনাফিকরা বলবে, ৫৭:১৩ আয়াতের ভাষায়: আমাদের জন্য একটু থামো, তোমাদের নূর থেকে কিছু নিয়ে নিই। তাবারী হাসানের কথা আনেন: মুমিন ও মুনাফিক সবাইকে নূর দেওয়া হবে। মুনাফিকের নূর নিভে যাবে, আর মুমিন নিজের নূর নিয়ে ভয় পাবে। এ দৃশ্য সেই দিনের বর্ণনা। আজকের কোনো মানুষের বিরুদ্ধে কিছু করার অনুমতি এতে নেই।"
          },
          {
            "en": "Waghfir lana: at-Tabari explains, cover our sins and do not expose us by punishing us for them; and You are able to complete our light, forgive our sins and do all else. As-Sa'di says Allah answers their prayer, and the light they carry brings them to the Gardens; and calls all of it the fruit of sincere repentance. The verse ends where it began. Those who turned to Allah in this life are still asking forgiveness on the bridge.",
            "bn": "ওয়াগফির লানা: তাবারী ব্যাখ্যা করেন, আমাদের গুনাহ ঢেকে দাও, শাস্তি দিয়ে আমাদের লাঞ্ছিত করো না। আর তুমি আমাদের নূর পূর্ণ করতে, গুনাহ মাফ করতে, সবকিছুতেই সক্ষম। সা'দী বলেন, আল্লাহ তাদের দোয়া কবুল করবেন, আর তাদের সঙ্গের নূর তাদের জান্নাত পর্যন্ত পৌঁছে দেবে। তাঁর মতে এ সবই খাঁটি তওবার ফল। আয়াতটি যেখানে শুরু হয়েছিল, সেখানেই শেষ হয়। দুনিয়ায় যারা আল্লাহর দিকে ফিরেছিল, পুলসিরাতের উপরেও তারা মাগফিরাতই চাইছে।"
          }
        ]
      }
    ]
  }
});
