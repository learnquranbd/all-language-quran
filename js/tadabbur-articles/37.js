/**
 * Tadabbur long-form articles — surah 37.
 *
 * One file per surah so the Tadabbur tab never downloads more than the surah a
 * reader actually opened; js/article-view.js fetches a shard on demand and
 * merges it into the shared TADABBUR_ARTICLES table. Same entry shape as the
 * other article files: {sections:[{h:{en,bn}, p:[{en,bn}]}]}, bare verse refs
 * in the prose, no HTML. Regenerate/extend with tools/merge-articles.js.
 */

var TADABBUR_ARTICLES = window.TADABBUR_ARTICLES = (window.TADABBUR_ARTICLES || {});

Object.assign(TADABBUR_ARTICLES, {
  "37:5": {
    "sections": [
      {
        "h": {
          "en": "Where the Oaths Land",
          "bn": "শপথগুলো যেখানে গিয়ে থামে"
        },
        "p": [
          {
            "en": "Surah as-Saffat opens with three oaths in two words each: by those ranged in ranks, by those who drive, by those who recite a reminder. Ibn Kathir, in his abridged English commentary, reports from Ibn Mas'ud that all three are the angels, and lists Ibn 'Abbas, Masruq, Sa'id ibn Jubayr, 'Ikrima, Mujahid, as-Suddi, Qatada and ar-Rabi' ibn Anas as holding the same view. Then 37:4 delivers what the oaths were sworn for: inna ilahakum la-wahid, indeed your God is One.",
            "bn": "সূরা আস-সাফফাত শুরু হয় তিনটি শপথ দিয়ে, প্রতিটি দুই শব্দের। শপথ সারিবদ্ধদের, শপথ যারা হাঁকিয়ে নেয় তাদের, শপথ যারা উপদেশ পাঠ করে তাদের। ইবন কাসীরের সংক্ষিপ্ত ইংরেজি তাফসীর ইবন মাসঊদ (রাঃ) থেকে বর্ণনা করে, তিনটিই ফেরেশতা। একই মত হিসেবে তিনি নাম দেন ইবন আব্বাস (রাঃ), মাসরূক, সাঈদ ইবন জুবাইর, ইকরিমা, মুজাহিদ, সুদ্দী, কাতাদা ও রাবী ইবন আনাসের। এরপর ৩৭:৪ আয়াত জানিয়ে দেয় শপথগুলো কীসের জন্য: ইন্না ইলাহাকুম লা-ওয়াহিদ, নিশ্চয় তোমাদের ইলাহ একজন।"
          },
          {
            "en": "Ibn Kathir names that sentence plainly as al-muqsam 'alayh, the thing sworn to: that there is no god but He. At-Tabari carries the same reading from Qatada, who said the oath fell on this, that your God is One, and then recited 37:5 straight after it. So 37:5 is not a new subject. The oaths have just landed on the word One, and this verse stays with that word and opens it out, telling the listener which One is meant and how He can be known.",
            "bn": "ইবন কাসীর বাক্যটিকে সরাসরি বলেন আল-মুকসাম আলাইহ, যে কথার উপর শপথ করা হয়েছে: তিনি ছাড়া কোনো ইলাহ নেই। তাবারী একই পাঠ আনেন কাতাদা থেকে। কাতাদা বলেন, শপথ পড়েছে এই কথার উপর যে তোমাদের ইলাহ একজন, তারপর ঠিক পরেই তিনি ৩৭:৫ আয়াত পাঠ করেন। তাই ৩৭:৫ নতুন কোনো প্রসঙ্গ নয়। শপথগুলো সবে 'এক' শব্দে এসে থেমেছে। এ আয়াত সেই শব্দেই থাকে আর তাকে খুলে দেখায়, কোন একজনের কথা বলা হচ্ছে আর তাঁকে কীভাবে চেনা যায়।"
          }
        ]
      },
      {
        "h": {
          "en": "The One, Spelled Out",
          "bn": "একত্বের ব্যাখ্যা"
        },
        "p": [
          {
            "en": "At-Tabari reads the verse as a definition. He is One, the creator of the seven heavens and of the creatures between them, the owner of all of it and the one who keeps it standing. Then he draws the conclusion the verse is built for: worship is fit only for the one who has this description, so do not worship another, and do not set beside Him in worship what neither harms nor benefits, creates nothing and ends nothing. The description is the argument.",
            "bn": "তাবারী আয়াতটিকে পড়েন একটি সংজ্ঞা হিসেবে। তিনি একজন, সাতটি আসমানের স্রষ্টা, আর এর মাঝে যত সৃষ্টি আছে তাদেরও স্রষ্টা। সবকিছুর মালিক তিনি, সবকিছু টিকিয়ে রাখেনও তিনি। তারপর তাবারী সেই সিদ্ধান্ত টানেন, যার জন্য আয়াতটি সাজানো: যাঁর এই গুণ, ইবাদত কেবল তাঁরই জন্য মানায়। তাই অন্য কারও ইবাদত কোরো না। যা ক্ষতিও করতে পারে না, উপকারও না, কিছু সৃষ্টি করে না, কিছু বিলীনও করে না, তাকে তাঁর ইবাদতে শরিক কোরো না। এখানে গুণের বর্ণনাটাই যুক্তি।"
          },
          {
            "en": "A small grammatical aside belongs here, because it says the same thing from another side. At-Tabari records that grammarians differed on why Rabb stands in the nominative, whether as a fresh predicate or as a restatement of wahid, and he prefers the second: Lord of the heavens explains what One means; al-Qurtubi adds that al-Akhfash recorded an accusative reading, taken as a description of the subject of inna. Whichever parsing one follows, the sense holds: the Lord of the heavens is what One means.",
            "bn": "এখানে ব্যাকরণের ছোট্ট একটা কথা আসে, কারণ তা একই কথা অন্য দিক থেকে বলে। তাবারী জানান, রব্ব শব্দটি কেন পেশযুক্ত, তা নিয়ে ব্যাকরণবিদদের মতভেদ আছে। কারও মতে এটি নতুন বিধেয়, কারও মতে 'ওয়াহিদ' শব্দেরই পুনরুক্তি। তাবারী দ্বিতীয়টিকে অগ্রাধিকার দেন: আসমানের রব কথাটি 'এক' শব্দের ব্যাখ্যা। কুরতুবী যোগ করেন, আখফাশ যবরযুক্ত একটি পাঠ উল্লেখ করেছেন, যা 'ইন্না'-এর উদ্দেশ্যের বিশেষণ হিসেবে ধরা হয়। যে বিশ্লেষণই নিন, অর্থ একই থাকে: আসমানের রব, এটাই 'এক'-এর মানে।"
          }
        ]
      },
      {
        "h": {
          "en": "Lordship as the Proof",
          "bn": "রুবূবিয়্যাতই দলিল"
        },
        "p": [
          {
            "en": "Rabbu as-samawati wa-l-ardi wa-ma baynahuma: Lord of the heavens and the earth and what is between them. Ibn Kathir glosses the last phrase simply as the created things. Al-Qurtubi says that here Allah made clear the meaning of His oneness, His divinity and the perfection of His power, by being Lord of the heavens and the earth, that is, their creator and owner. The Muyassar keeps to one line: He is the creator of the heavens, the earth and what lies between them.",
            "bn": "রব্বুস সামাওয়াতি ওয়াল আরদি ওয়ামা বাইনাহুমা: আসমান, যমীন আর এ দুয়ের মাঝে যা আছে তার রব। শেষ অংশটির ব্যাখ্যায় ইবন কাসীর শুধু বলেন, সৃষ্টিজগৎ। কুরতুবীর মতে আল্লাহ এখানে নিজের একত্ব, উলূহিয়্যাত আর পূর্ণ ক্ষমতার অর্থ স্পষ্ট করেছেন এই বলে যে তিনি আসমান-যমীনের রব, অর্থাৎ এগুলোর স্রষ্টা ও মালিক। মুয়াসসার একটি বাক্যে থামে: আসমান, যমীন আর এর মাঝের সবকিছুর স্রষ্টা তিনিই।"
          },
          {
            "en": "As-Sa'di names the method. He is the creator of these things, their provider and their manager, and just as He has no partner in His lordship over them, He has no partner in His right to be worshipped. Allah often establishes the oneness of worship through the oneness of lordship, he notes, because the first points to the second. And the idolaters in worship had already conceded the lordship, so the verse holds them to what they admitted against what they denied.",
            "bn": "সা'দী পদ্ধতিটার নাম দেন। তিনিই এসবের স্রষ্টা, রিযিকদাতা ও পরিচালক। এগুলোর রুবূবিয়্যাতে যেমন তাঁর কোনো শরিক নেই, তেমনি উলূহিয়্যাতেও কোনো শরিক নেই। সা'দী লক্ষ করেন, আল্লাহ প্রায়ই রুবূবিয়্যাতের তাওহীদ দিয়ে ইবাদতের তাওহীদ প্রতিষ্ঠা করেন, কারণ প্রথমটি দ্বিতীয়টির দিকে ইঙ্গিত করে। যারা ইবাদতে শিরক করত, তারাও রুবূবিয়্যাত মেনে নিয়েছিল। তাই আয়াত তাদের স্বীকার করা কথা দিয়েই অস্বীকার করা কথার জবাব আদায় করে।"
          },
          {
            "en": "Ma'arif al-Qur'an puts it as a conclusion about ownership: a Being who created and sustains such a range of creation has to be the One most deserving of it, and the whole universe is a positive proof of His existence and oneness. The verse does not argue by abstraction. It points at things the listener can see every day, the sky overhead, the ground underfoot, and the space between, and asks who else could be meant.",
            "bn": "মাআরিফুল কুরআন কথাটা বলে মালিকানার দিক থেকে। যিনি এত বিচিত্র সৃষ্টি বানিয়েছেন আর টিকিয়ে রেখেছেন, মালিকানার সবচেয়ে বড় হকদার একমাত্র তিনিই। গোটা বিশ্বজগৎ তাঁর অস্তিত্ব ও একত্বের স্পষ্ট প্রমাণ। আয়াতটি বিমূর্ত যুক্তিতে যায় না। শ্রোতা প্রতিদিন যা দেখে, তার দিকেই আঙুল তোলে: মাথার উপরের আকাশ, পায়ের নিচের মাটি, আর এ দুয়ের মাঝের পরিসর। তারপর জিজ্ঞেস করে, তিনি ছাড়া আর কে হতে পারেন?"
          }
        ]
      },
      {
        "h": {
          "en": "Why the Sunrises Are Plural",
          "bn": "উদয়স্থল কেন বহুবচনে"
        },
        "p": [
          {
            "en": "Wa-rabbu al-mashariq: and Lord of the sunrises. The word is plural, and the commentators give a range of accounts of what the many risings are. At-Tabari glosses it as the one who manages the sun's rising-points in winter and summer, and cites Qatada for the same: the sun's risings in winter and in summer. That is a seasonal range, the rising place moving along the horizon as the year turns, with no fixed count attached.",
            "bn": "ওয়া রব্বুল মাশারিক: আর উদয়স্থলগুলোর রব। শব্দটি বহুবচন। এত উদয়স্থল বলতে কী বোঝানো হয়েছে, তাফসীরকারেরা তার কয়েক রকম ব্যাখ্যা দেন। তাবারীর ব্যাখ্যা: যিনি শীত ও গ্রীষ্মে সূর্যের উদয়স্থলগুলো পরিচালনা করেন। একই কথা তিনি আনেন কাতাদা থেকে: শীতে ও গ্রীষ্মে সূর্যের ওঠার জায়গাগুলো। এটা মৌসুমি পরিসর। বছর ঘোরার সঙ্গে সঙ্গে ওঠার জায়গা দিগন্ত বরাবর সরে যায়, কোনো নির্দিষ্ট সংখ্যা এতে বাঁধা নেই।"
          },
          {
            "en": "Others give a count. At-Tabari reports from as-Suddi that the risings are 360, with as many settings, the number of the days of the year. Al-Baghawi, without naming a source, gives the same 360 as apertures in the east and in the west, the sun rising each day from one of them and not returning to it until that day of the following year. Ma'arif al-Qur'an says the sun rises from a new point every day of the year, which is why the plural is used.",
            "bn": "কেউ কেউ সংখ্যাও দেন। তাবারী সুদ্দী থেকে বর্ণনা করেন, উদয়স্থল ৩৬০টি, অস্তস্থলও ততগুলো, বছরের দিনের সংখ্যা অনুযায়ী। বাগাভী কোনো সূত্রের নাম না নিয়ে একই ৩৬০ সংখ্যা দেন, পূর্ব ও পশ্চিমে এতগুলো ফোকর হিসেবে। সূর্য প্রতিদিন তার একটি থেকে ওঠে, আর পরের বছরের সেই দিন না আসা পর্যন্ত সেটিতে ফেরে না। মাআরিফুল কুরআন বলে, বছরের প্রতিদিন সূর্য নতুন একটি বিন্দু থেকে ওঠে, তাই বহুবচন।"
          },
          {
            "en": "Ibn Kathir widens the frame beyond the sun. Lord of the sunrises means the sovereign who directs creation by subjecting what is in it, the fixed stars and the moving planets that appear from the east and set in the west. Al-Baghawi records one more view, introduced with it is said: every place the sun has shone upon is a sunrise, as if the verse meant Lord of everything the sun rises and sets upon. These are offered side by side, and none of the commentators here rules the others out.",
            "bn": "ইবন কাসীর ছবিটা সূর্যের বাইরেও ছড়িয়ে দেন। উদয়স্থলের রব মানে সেই অধিপতি, যিনি সৃষ্টির সবকিছুকে বশে রেখে পরিচালনা করেন: স্থির তারা আর চলমান গ্রহ, যারা পূর্বে দেখা দেয়, পশ্চিমে ডোবে। বাগাভী 'বলা হয়' দিয়ে আরও একটি মত আনেন: সূর্য যেখানেই আলো ফেলেছে, সেটাই একটি উদয়স্থল। যেন আয়াতের মানে, সূর্য যা কিছুর উপর ওঠে আর ডোবে, তার সবকিছুর রব। মতগুলো পাশাপাশি রাখা আছে, এখানকার কোনো তাফসীরকার অন্যদেরটা বাতিল করেননি।"
          }
        ]
      },
      {
        "h": {
          "en": "One East, Two, and Many",
          "bn": "এক পূর্ব, দুই পূর্ব, বহু পূর্ব"
        },
        "p": [
          {
            "en": "The verse names the risings and leaves the settings unsaid. At-Tabari, Ibn Kathir and al-Qurtubi all explain the silence the same way: the risings point to the settings, so mentioning one is enough. Ibn Kathir notes that the pair is stated outright in 70:40, Lord of the risings and the settings. Al-Qurtubi compares it to 16:81, garments that protect you from the heat, where the cold is understood, and adds that the risings are named because rising comes before setting.",
            "bn": "আয়াত উদয়স্থলের কথা বলে, অস্তস্থলের কথা বলে না। তাবারী, ইবন কাসীর ও কুরতুবী এই নীরবতার একই ব্যাখ্যা দেন: উদয়স্থলই অস্তস্থলের দিকে ইঙ্গিত করে, তাই একটির উল্লেখই যথেষ্ট। ইবন কাসীর দেখান, ৭০:৪০ আয়াতে জোড়াটা স্পষ্ট করেই আছে: উদয়স্থল ও অস্তস্থলগুলোর রব। কুরতুবী তুলনা টানেন ১৬:৮১ আয়াতের সঙ্গে, যেখানে পোশাক গরম থেকে বাঁচায় বলা হয়েছে আর শীতের কথা বুঝে নিতে হয়। তিনি আরও বলেন, উদয়ের কথা আগে এসেছে কারণ উদয় অস্তের আগে ঘটে।"
          },
          {
            "en": "Al-Baghawi raises the obvious question. The Qur'an says Lord of the east and the west in 73:9, Lord of the two easts and the two wests in 55:17, and Lord of the risings and the settings in 70:40. How do these fit together? His answer: the singular means the direction, east as one side and west as the other; the dual means the rising of winter and the rising of summer, with their two settings; and the plural means the daily risings across the year.",
            "bn": "বাগাভী স্বাভাবিক প্রশ্নটা তোলেন। কুরআন ৭৩:৯ আয়াতে বলে পূর্ব ও পশ্চিমের রব, ৫৫:১৭ আয়াতে বলে দুই পূর্ব ও দুই পশ্চিমের রব, আর ৭০:৪০ আয়াতে বলে উদয়স্থল ও অস্তস্থলগুলোর রব। এগুলো মেলে কীভাবে? তাঁর উত্তর: একবচন দিয়ে দিক বোঝানো হয়েছে, পূর্ব একটি দিক, পশ্চিম আরেকটি দিক। দ্বিবচন মানে শীতের উদয়স্থল আর গ্রীষ্মের উদয়স্থল, সঙ্গে তাদের দুই অস্তস্থল। আর বহুবচন মানে সারা বছরের প্রতিদিনের উদয়স্থল।"
          },
          {
            "en": "Ibn Kathir reads 55:17 as the winter and summer rising and setting points of both the sun and the moon. Al-Qurtubi reads the two easts as the sun's farthest rising point on the long days and its point on the shortest day. Seen together, the three forms do not compete. They are the same horizon at three distances: as one direction, as its two outer limits, and as every point between them, all of it under one Lord.",
            "bn": "ইবন কাসীর ৫৫:১৭ আয়াত পড়েন শীত ও গ্রীষ্মে সূর্য ও চাঁদ দুটোরই ওঠা-ডোবার জায়গা হিসেবে। কুরতুবীর মতে দুই পূর্ব হলো লম্বা দিনগুলোতে সূর্যের সবচেয়ে দূরের উদয়বিন্দু আর সবচেয়ে ছোট দিনের উদয়বিন্দু। পাশাপাশি রাখলে তিনটি রূপ পরস্পরের প্রতিদ্বন্দ্বী নয়। একই দিগন্তকে দেখা হচ্ছে তিন দূরত্ব থেকে: একটি দিক হিসেবে, তার দুই প্রান্ত হিসেবে, আর মাঝের প্রতিটি বিন্দু হিসেবে। সবটাই এক রবের অধীন।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sun That Rises Reluctantly",
          "bn": "অনিচ্ছায় ওঠা সূর্য"
        },
        "p": [
          {
            "en": "Al-Qurtubi carries a report from Ibn 'Abbas with a different number. Allah created for the sun 365 apertures at its rising and as many at its setting, by the count of the days of the solar year. It rises each day from one and sets in one, and does not rise from that aperture again until the same day of the next year. And it never rises except reluctantly, saying: My Lord, do not make me rise upon Your servants, for I see them disobeying You.",
            "bn": "কুরতুবী ইবন আব্বাস (রাঃ) থেকে একটি বর্ণনা আনেন, যাতে সংখ্যাটা আলাদা। আল্লাহ সূর্যের জন্য উদয়ের দিকে ৩৬৫টি ফোকর বানিয়েছেন, অস্তের দিকেও ততগুলো, সৌর বছরের দিনের সংখ্যা অনুযায়ী। প্রতিদিন সূর্য একটি থেকে ওঠে, একটিতে ডোবে। পরের বছরের সেই দিন না আসা পর্যন্ত ওই ফোকর দিয়ে আর ওঠে না। আর সে কখনো খুশি মনে ওঠে না। বলে: হে রব, আমাকে তোমার বান্দাদের উপর উদিত কোরো না, আমি তো দেখি তারা তোমার নাফরমানি করে।"
          },
          {
            "en": "Al-Qurtubi says Abu 'Umar mentioned this in at-Tamhid and Ibn al-Anbari in ar-Radd, through 'Ikrima, and the chain runs into a longer narration. 'Ikrima asked Ibn 'Abbas about the poet Umayya ibn Abi as-Salt, of whom the Prophet ﷺ is reported to have said that his poetry believed and his heart disbelieved, and about a line of his on the sun. Ibn 'Abbas answered that no sun ever rose until seventy thousand angels prodded it, saying rise, rise, while it said: I will not rise upon a people who worship me instead of Allah.",
            "bn": "কুরতুবী বলেন, আবূ উমার আত-তামহীদ গ্রন্থে আর ইবনুল আম্বারী আর-রাদ্দ গ্রন্থে এটি উল্লেখ করেছেন, ইকরিমার সূত্রে। সেই সূত্র গিয়ে মেশে আরও লম্বা এক বর্ণনায়। ইকরিমা ইবন আব্বাস (রাঃ)-কে কবি উমাইয়া ইবন আবিস সালত সম্পর্কে জিজ্ঞেস করেন। তাঁর ব্যাপারে নবী ﷺ বলেছেন বলে বর্ণিত আছে, তার কবিতা ঈমান এনেছিল, অন্তর কুফরি করেছিল। প্রশ্ন ছিল সূর্য নিয়ে তার এক পঙক্তি ঘিরে। ইবন আব্বাস (রাঃ) বলেন, সত্তর হাজার ফেরেশতা খোঁচা না দেওয়া পর্যন্ত কোনো দিন সূর্য ওঠেনি। তারা বলে, ওঠো, ওঠো। আর সূর্য বলে, যে জাতি আল্লাহকে ছেড়ে আমার উপাসনা করে, তাদের উপর আমি উঠব না।"
          },
          {
            "en": "In the same narration an angel comes and the sun sets out to give light to the children of Adam; a devil comes wanting to stop it from rising, and it rises between his two horns, and Allah burns him beneath it. This is al-Qurtubi's narration, through 'Ikrima from Ibn 'Abbas as recorded in those two named books, and al-Qurtubi gives it no grading. Its count of 365 stands beside as-Suddi's 360 in at-Tabari; each is reported as its own source gives it.",
            "bn": "একই বর্ণনায় আছে, একজন ফেরেশতা আসেন, আর সূর্য আদমসন্তানদের আলো দিতে রওনা হয়। এক শয়তান আসে তাকে উঠতে বাধা দিতে। সূর্য ওঠে তার দুই শিংয়ের মাঝ দিয়ে, আর আল্লাহ তাকে সূর্যের নিচে পুড়িয়ে দেন। এটি কুরতুবীর আনা বর্ণনা, ইকরিমার মাধ্যমে ইবন আব্বাস (রাঃ) থেকে, ওই দুটি নামধারী গ্রন্থের বরাতে। কুরতুবী এর কোনো মান নির্ণয় করেননি। এর ৩৬৫ সংখ্যাটি তাবারীতে সুদ্দীর ৩৬০-এর পাশে থাকে। প্রত্যেকটি তার নিজ সূত্রে যেভাবে এসেছে, সেভাবেই উল্লেখ করা হলো।"
          }
        ]
      },
      {
        "h": {
          "en": "Between a Devil's Two Horns",
          "bn": "শয়তানের দুই শিংয়ের মাঝে"
        },
        "p": [
          {
            "en": "Inside that narration Ibn 'Abbas cites a saying of the Prophet ﷺ that the sun does not rise or set except between the two horns of a devil. That phrase has its own sound transmission. Sahih al-Bukhari 3272 reports from Ibn 'Umar that the Messenger of Allah ﷺ said: When the edge of the sun appears, leave the prayer until it has fully appeared, and when the edge of the sun disappears, leave the prayer until it has set.",
            "bn": "ওই বর্ণনার ভেতরেই ইবন আব্বাস (রাঃ) নবী ﷺ-এর একটি কথা উদ্ধৃত করেন: সূর্য শয়তানের দুই শিংয়ের মাঝ দিয়েই ওঠে, আর তার মাঝ দিয়েই ডোবে। এই কথাটির নিজস্ব সহীহ সনদ আছে। সহীহ বুখারীর ৩২৭২ নম্বর হাদীসে ইবন উমর (রাঃ) থেকে বর্ণিত, আল্লাহর রাসূল ﷺ বলেছেন: সূর্যের কিনারা দেখা দিলে নামায ছেড়ে দাও, যতক্ষণ না সূর্য পুরোপুরি বেরিয়ে আসে। আর সূর্যের কিনারা অদৃশ্য হতে থাকলে নামায ছেড়ে দাও, যতক্ষণ না তা পুরো ডুবে যায়।"
          },
          {
            "en": "He continued: And do not aim your prayer at the rising of the sun or its setting, for it rises between the two horns of a devil, or of the Devil; the narrator below Hisham said he did not know which of the two Hisham said. The hadith is in al-Bukhari's Sahih and needs no further grading. It is not attached to this verse by any of the commentators fetched here, and its subject is the times of prayer, not the meaning of the sunrises.",
            "bn": "তিনি আরও বলেছেন: আর সূর্য ওঠার সময় বা ডোবার সময়কে নামাযের জন্য বেছে নিয়ো না, কারণ তা ওঠে শয়তানের দুই শিংয়ের মাঝ দিয়ে। হিশাম 'এক শয়তান' বলেছিলেন নাকি 'সেই শয়তান', তাঁর পরের বর্ণনাকারী বলেন, তিনি নিশ্চিত নন। হাদীসটি বুখারীর সহীহ গ্রন্থের, এর মান নিয়ে আলাদা কিছু বলার দরকার নেই। তবে এখানে যে তাফসীরগুলো দেখা হয়েছে, তার কোনোটি একে এই আয়াতের সঙ্গে যুক্ত করেনি। এর বিষয় নামাযের সময়, উদয়স্থলের অর্থ নয়।"
          },
          {
            "en": "Read alongside the verse, the narration and the hadith keep the sun in its place. It is a creature that rises and sets under its Lord, not a lord itself, and the verse has just named who the Lord of its risings is. The narration's sun that refuses to rise upon those who worship it names an ancient practice, sun-worship, in general terms. It describes what the text describes and licenses nothing against any living person or community.",
            "bn": "আয়াতের পাশে রাখলে বর্ণনাটি আর হাদীসটি সূর্যকে তার জায়গায় রাখে। সূর্য এক সৃষ্টি, রবের হুকুমে ওঠে আর ডোবে, নিজে কোনো রব নয়। আর তার উদয়স্থলগুলোর রব কে, আয়াত তা এইমাত্র বলে দিয়েছে। বর্ণনায় যে সূর্য তার উপাসকদের উপর উঠতে চায় না, সে ইঙ্গিত দেয় প্রাচীন এক প্রথার দিকে, সূর্যপূজা, সাধারণভাবে। পাঠে যা আছে, এ কথা কেবল সেটুকুই বর্ণনা করে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে কোনো কিছুর অনুমতি এ থেকে মেলে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Living Under Every Dawn",
          "bn": "প্রতিটি ভোরের নিচে জীবন"
        },
        "p": [
          {
            "en": "The order of the passage is worth keeping in view. Oaths by the angels lead to One, and One is defined by lordship over the heavens, the earth, the space between them and every point where the sun comes up. The next verses, 37:6 to 37:10, turn to the nearest heaven and its stars, and they will have their own place. This verse stays at the horizon, with the plain, daily fact of a sunrise and the claim that it has a Lord.",
            "bn": "অংশটির ক্রম মনে রাখার মতো। ফেরেশতাদের নামে শপথ পৌঁছায় 'এক'-এ, আর সেই 'এক'-কে চেনানো হয় রুবূবিয়্যাত দিয়ে: আসমান, যমীন, এ দুয়ের মাঝের পরিসর আর সূর্য ওঠার প্রতিটি বিন্দুর উপর। পরের আয়াতগুলো, ৩৭:৬ থেকে ৩৭:১০, নিকটতম আসমান আর তার তারকারাজির দিকে যায়, সেগুলোর আলোচনা তাদের নিজ জায়গায় হবে। এ আয়াত থাকে দিগন্তে, সূর্যোদয়ের সাদামাটা প্রতিদিনের ঘটনার কাছে, আর এই দাবির কাছে যে তারও একজন রব আছেন।"
          },
          {
            "en": "That is where the verse meets an ordinary morning. The sun's rising place shifts, and the commentators counted those shifts in different ways, but every reading agrees that each rising is managed. As-Sa'di's point applies to the reader as much as to the first audience: whoever already grants that Allah runs the sky has granted the premise. What remains is to let the conclusion reach worship, so that the One who appoints each dawn is the only One the day is lived for.",
            "bn": "এখানেই আয়াতটি সাধারণ একটা সকালের সঙ্গে মেলে। সূর্যের ওঠার জায়গা সরে যায়, তাফসীরকারেরা সেই সরে যাওয়া নানাভাবে গুনেছেন। কিন্তু প্রতিটি ব্যাখ্যা একমত, প্রতিটি উদয় পরিচালিত। সা'দীর কথাটি প্রথম শ্রোতাদের মতো আজকের পাঠকের উপরও খাটে। আকাশ আল্লাহই চালান, এটা যে মেনে নিয়েছে, সে মূল কথাটা মেনে নিয়েছে। বাকি থাকে সিদ্ধান্তটাকে ইবাদত পর্যন্ত পৌঁছে দেওয়া, যাতে যিনি প্রতিটি ভোর ঠিক করেন, দিনটা কেবল তাঁর জন্যই কাটে।"
          }
        ]
      }
    ]
  },
  "37:11": {
    "sections": [
      {
        "h": {
          "en": "A Question Carried to Mecca",
          "bn": "মক্কাবাসীর কাছে একটি প্রশ্ন"
        },
        "p": [
          {
            "en": "Fa-stafti-him a-hum ashaddu khalqan am man khalaqna: so ask them, are they harder to create, or those whom We have created? The fa ties the command to what came just before. As-Sa'di reads it that way: once Allah had set out these great created things, the heavens and the earth of 37:5 and the star-dressed, guarded sky of 37:6 to 37:10, He said, ask them. Al-Qurtubi takes istifta' from the act of asking a mufti for a ruling, and he and al-Baghawi both say the people to be asked are the people of Mecca.",
            "bn": "ফাসতাফতিহিম আহুম আশাদ্দু খালকান আম মান খালাকনা: তাদের জিজ্ঞেস করুন, সৃষ্টি হিসেবে কি তারাই বেশি কঠিন, নাকি আমি যাদের সৃষ্টি করেছি তারা? শুরুর 'ফা' আদেশটিকে আগের কথার সঙ্গে বেঁধে দেয়। সা'দী এভাবেই পড়েন। আল্লাহ যখন বড় বড় সৃষ্টির কথা বলে শেষ করলেন, অর্থাৎ ৩৭:৫ আয়াতের আসমান-যমীন আর ৩৭:৬ থেকে ৩৭:১০ আয়াতের তারায় সাজানো, পাহারায় ঘেরা আকাশ, তখন বললেন: এদের জিজ্ঞেস করুন। কুরতুবী বলেন, 'ইসতিফতা' শব্দটি এসেছে মুফতির কাছে ফতোয়া চাওয়া থেকে। তিনি ও বাগাভী দুজনেই বলেন, যাদের জিজ্ঞেস করতে বলা হয়েছে তারা মক্কার লোকজন।"
          },
          {
            "en": "At-Tabari names them more narrowly: the polytheists who deny being raised after death and brought back after decay. The address is to Muhammad ﷺ, and the question is his to carry to them. Al-Baghawi calls it an istifham bi-ma'na at-taqrir, a question whose purpose is to draw out an admission rather than to learn anything. The answer is not in doubt. What the verse wants is for the deniers to say it with their own mouths, and then to face what follows from it. Ma'arif al-Qur'an calls this verse the rational proof with which the passage on the Hereafter opens.",
            "bn": "তাবারী তাদের আরও নির্দিষ্ট করে চেনান: সেই মুশরিকরা, যারা মৃত্যুর পর পুনরুত্থান আর পচে-গলে যাওয়ার পর আবার জীবিত হওয়াকে অস্বীকার করে। সম্বোধন মুহাম্মাদ ﷺ-এর প্রতি, প্রশ্নটা তাদের কাছে পৌঁছে দেওয়ার দায়িত্বও তাঁর। বাগাভী একে বলেন 'ইসতিফহাম বিমা'নাত তাকরীর', এমন প্রশ্ন যার উদ্দেশ্য কিছু জানা নয়, বরং স্বীকারোক্তি আদায় করা। উত্তর নিয়ে কোনো সংশয় নেই। আয়াতটি চায় অস্বীকারকারীরা নিজের মুখে উত্তরটা বলুক, তারপর তার পরিণতির মুখোমুখি হোক। মাআরিফুল কুরআন এ আয়াতকে আখিরাত-প্রসঙ্গের শুরুর যুক্তিভিত্তিক প্রমাণ বলে উল্লেখ করে।"
          }
        ]
      },
      {
        "h": {
          "en": "Sky, Earth and Mountains",
          "bn": "আকাশ, যমীন আর পাহাড়"
        },
        "p": [
          {
            "en": "Am man khalaqna, or those whom We have created: the verse leaves the second party unnamed, and the commentators fill it in differently. At-Tabari reports from Mujahid: the heavens, the earth and the mountains. Al-Qurtubi gives Mujahid's list with the seas added. Al-Baghawi gives the same three as his main reading without naming anyone. At-Tabari's own paraphrase is wider: those whose creation We have recounted, the angels, the devils, the heavens and the earth. Ibn Kathir likewise takes in the heavens, the earth and what lies between them, the angels, the devils and the mighty creatures.",
            "bn": "আম মান খালাকনা, নাকি আমি যাদের সৃষ্টি করেছি তারা: দ্বিতীয় পক্ষের নাম আয়াতে নেই, তাফসীরকারেরা তা পূরণ করেছেন ভিন্ন ভিন্নভাবে। তাবারী মুজাহিদ থেকে বর্ণনা করেন: আসমান, যমীন ও পাহাড়। কুরতুবী মুজাহিদের তালিকায় সাগরও যোগ করে উল্লেখ করেন। বাগাভী কারও নাম না নিয়ে এই তিনটিকেই মূল ব্যাখ্যা হিসেবে আনেন। তাবারীর নিজের ব্যাখ্যা আরও বিস্তৃত: যাদের সৃষ্টির কথা আমি গুনে গুনে বলেছি, অর্থাৎ ফেরেশতা, শয়তান, আসমান ও যমীন। ইবন কাসীরও এর মধ্যে ধরেন আসমান, যমীন আর দুয়ের মাঝে যা আছে: ফেরেশতা, শয়তান আর বিশাল সব সৃষ্টি।"
          },
          {
            "en": "Ad-Dahhak, in at-Tabari's report, ties the question straight back to 37:5, Lord of the heavens and the earth and what is between them, and paraphrases it as: are they harder to create, or the heavens and the earth? The heavens and the earth are harder to create than they are. Al-Qurtubi records a narrower reading from Sa'id ibn Jubayr: the angels. The surrounding verses give each view something to hold. 37:5 names the heavens and the earth; 37:6 to 37:10 speak of the sky, the stars and the devils driven back from it.",
            "bn": "তাবারীর বর্ণনায় দাহহাক প্রশ্নটিকে সরাসরি ৩৭:৫ আয়াতের সঙ্গে জুড়ে দেন, যেখানে আল্লাহ আসমান, যমীন ও দুয়ের মাঝের সবকিছুর রব। তাঁর ব্যাখ্যায় প্রশ্নটা দাঁড়ায় এমন: সৃষ্টি হিসেবে তারা কঠিন, নাকি আসমান ও যমীন? আসমান ও যমীনই তাদের চেয়ে কঠিন সৃষ্টি। কুরতুবী সাঈদ ইবন জুবাইর থেকে আরও সংকীর্ণ এক ব্যাখ্যা আনেন: এরা ফেরেশতা। আশপাশের আয়াতগুলোতে প্রতিটি মতেরই অবলম্বন আছে। ৩৭:৫ আয়াত আসমান ও যমীনের নাম নেয়, আর ৩৭:৬ থেকে ৩৭:১০ আয়াত বলে আকাশ, তারা আর সেখান থেকে তাড়িয়ে দেওয়া শয়তানদের কথা।"
          },
          {
            "en": "Two other verses stand behind this one in the commentaries. Qatada, in at-Tabari's report, links it to 40:57, which says that the creation of the heavens and the earth is greater than the creation of mankind. Al-Baghawi cites 40:57 as well, and adds 79:27, which puts a similar question directly to its hearers: are you harder to create, or the sky? Al-Qurtubi names both as parallels. Each is a separate verse with its own setting, and they are named here only as witnesses that the Qur'an returns to this comparison more than once.",
            "bn": "তাফসীরগুলোতে এ আয়াতের পেছনে আরও দুটি আয়াত দাঁড়িয়ে আছে। তাবারীর বর্ণনায় কাতাদা একে ৪০:৫৭ আয়াতের সঙ্গে মেলান, যেখানে বলা হয়েছে, আসমান ও যমীনের সৃষ্টি মানুষের সৃষ্টির চেয়ে বড়। বাগাভীও ৪০:৫৭ উল্লেখ করেন, সঙ্গে আনেন ৭৯:২৭, যেখানে শ্রোতাদের সরাসরি প্রায় একই প্রশ্ন করা হয়েছে: তোমাদের সৃষ্টি কঠিন, নাকি আকাশের? কুরতুবীও দুটিকে সমান্তরাল আয়াত হিসেবে উল্লেখ করেন। প্রতিটির নিজস্ব প্রেক্ষাপট আছে। এখানে সেগুলোর নাম আসছে শুধু এটুকু দেখাতে যে কুরআন এই তুলনায় বারবার ফিরে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "Nations Already Gone",
          "bn": "বিদায় নেওয়া জাতিগুলো"
        },
        "p": [
          {
            "en": "Al-Baghawi records a second reading, introduced with qila, it has been said: man khalaqna means the bygone nations, al-umam al-khaliya. His reason is grammatical. The pronoun man is used of beings who reason, so it fits peoples more naturally than mountains. On this reading the question runs: these people are no more firmly made than the nations before them, and We destroyed those for their sins, so what makes these safe from punishment? Al-Qurtubi reports the same view from another commentator, who adds that those nations perished though they were stronger in build than the Meccans.",
            "bn": "বাগাভী 'কীলা', অর্থাৎ 'বলা হয়েছে', কথাটি দিয়ে দ্বিতীয় আরেকটি ব্যাখ্যা আনেন: 'মান খালাকনা' মানে অতীতের জাতিগুলো, আল-উমাম আল-খালিয়া। তাঁর যুক্তি ব্যাকরণের। 'মান' শব্দটি বিবেকবান সত্তার জন্য ব্যবহৃত হয়, তাই পাহাড়ের চেয়ে মানুষের জাতির সঙ্গেই তা বেশি মানায়। এ ব্যাখ্যায় প্রশ্নটা দাঁড়ায়: এরা তো আগের জাতিগুলোর চেয়ে বেশি মজবুত করে গড়া নয়। ওদের আমি গুনাহের কারণে ধ্বংস করেছি। তাহলে আযাব থেকে এদের নিরাপদ রাখছে কী? কুরতুবীও অন্য এক তাফসীরকারের সূত্রে এই মত আনেন। তিনি যোগ করেন, সেই জাতিগুলো মক্কাবাসীর চেয়ে শক্তপোক্ত হয়েও ধ্বংস হয়েছিল।"
          },
          {
            "en": "This is a minority reading beside the majority's heavens and earth. Al-Baghawi leads with the heavens and the earth and sets this view after it, and it shifts the question from a proof of power toward a warning. Both are kept here. On this reading the verse speaks of peoples whose account is already closed. It describes what the text describes and licenses nothing against any living person or community; it does not make anyone today a judge of which people will be destroyed next.",
            "bn": "অধিকাংশের মত আসমান-যমীন, তার পাশে এটি সংখ্যালঘু মত। বাগাভী আগে আসমান-যমীনের কথা বলেন, এই ব্যাখ্যা আনেন পরে। এতে প্রশ্নটা ক্ষমতার প্রমাণ থেকে খানিকটা সতর্কবাণীর দিকে সরে যায়। এখানে দুটিই রাখা হলো। এ ব্যাখ্যায় আয়াতটি এমন জাতিগুলোর কথা বলে, যাদের হিসাব আগেই চুকে গেছে। আয়াতের বর্ণনা কেবল আয়াতের বিষয়েই সীমিত। জীবিত কোনো মানুষ বা জনগোষ্ঠীর বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না। এর জোরে আজকের কেউ বিচারক সেজে বলতে পারে না, এরপর কোন জাতি ধ্বংস হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Counted, Not Only Created",
          "bn": "সৃষ্টি, আবার গণনাও"
        },
        "p": [
          {
            "en": "At-Tabari notes that in the reading of 'Abdullah ibn Mas'ud the words run am man 'adadna, or those whom We have counted, in place of am man khalaqna, and that ad-Dahhak read it the same way. Ibn Kathir mentions Ibn Mas'ud's reading too. It is a textual variant attributed to that line of reading, recorded by the commentators beside the received text, and it raises no question of belief. At-Tabari's own paraphrase, those whose creation We have recounted, reads the two wordings together.",
            "bn": "তাবারী জানান, আবদুল্লাহ ইবন মাসউদ (রাঃ)-এর কিরাআতে 'আম মান খালাকনা'-র জায়গায় আছে 'আম মান আদাদনা', অর্থাৎ নাকি যাদের আমি গুনে রেখেছি তারা। দাহহাকও এভাবে পড়তেন। ইবন কাসীরও ইবন মাসউদের এই পাঠের কথা বলেন। এটি ওই কিরাআত-ধারার সঙ্গে যুক্ত একটি পাঠভেদ। তাফসীরকারেরা প্রচলিত পাঠের পাশে এটি লিপিবদ্ধ করেছেন, আকীদার কোনো প্রশ্ন এতে ওঠে না। তাবারীর নিজের ব্যাখ্যা, 'যাদের সৃষ্টির কথা আমি গুনে গুনে বলেছি', দুই পাঠকে এক সঙ্গে ধরে রাখে।"
          },
          {
            "en": "Ibn Kathir then states the argument the question sets up. The deniers acknowledge that these creatures are harder to make than they are. If that is so, why do they deny the resurrection, when they see before them what is greater than the thing they deny? The question is posed so that its answer comes from the person asked. A man who admits the sky is the greater work has already conceded more than he meant to, and the verse only has to point it out.",
            "bn": "এরপর প্রশ্নটি যে যুক্তি দাঁড় করায়, ইবন কাসীর তা খুলে বলেন। অস্বীকারকারীরা মানে যে এই সৃষ্টিগুলো তাদের চেয়ে কঠিন। তা-ই যদি হয়, তবে পুনরুত্থান তারা অস্বীকার করে কেন? যা অস্বীকার করছে, তার চেয়ে বড় জিনিস তো তারা চোখের সামনেই দেখছে। প্রশ্নটা এমনভাবে সাজানো যে উত্তর আসে যাকে জিজ্ঞেস করা হলো তার মুখ থেকেই। যে লোক মেনে নেয় আকাশই বড় সৃষ্টি, সে নিজের অজান্তে যতটুকু মানতে চেয়েছিল তার চেয়ে বেশি মেনে ফেলেছে। আয়াতকে শুধু সেটা ধরিয়ে দিতে হয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Clay That Holds Together",
          "bn": "যে মাটি জোড়া লেগে থাকে"
        },
        "p": [
          {
            "en": "Inna khalaqnahum min tinin lazib: We created them from clay that is lazib. At-Tabari explains the word as clinging, lasiq, and gives the reason: this clay is earth mixed with water, and earth mixed with water becomes clay that clings. He adds that the Arabs sometimes turn the ba into a mim and say tinun lazim, and cites lines of poetry for both forms. Through al-Farra' he reports that some of Qays even say latib. The root l-z-b, on his account, is about sticking fast and staying put.",
            "bn": "ইন্না খালাকনাহুম মিন তীনিল লাযিব: আমি তাদের সৃষ্টি করেছি 'লাযিব' মাটি থেকে। তাবারী শব্দটির অর্থ বলেন 'লাসিক', অর্থাৎ লেগে থাকা। কারণটাও দেন: এ মাটি পানিতে মেশানো মাটি, আর মাটিতে পানি মিশলে তা আঠালো কাদা হয়ে যায়। তিনি আরও বলেন, আরবরা কখনো 'বা'-কে 'মীম' বানিয়ে বলে 'তীনুন লাযিম'। দুই রূপের পক্ষেই তিনি কবিতার পঙক্তি আনেন। ফাররার সূত্রে জানান, কায়স গোত্রের কেউ কেউ বলে 'লাতিব'। তাঁর ব্যাখ্যায় ল-য-ব ধাতুর মূল কথা হলো শক্ত করে লেগে থাকা, জায়গা না ছাড়া।"
          },
          {
            "en": "Al-Baghawi gives the majority sense: good, pure clay that sticks and clings to the hand. Its meaning, he says, is lazim, binding, with the mim changed to ba, as though it fastens itself to the hand. Ibn Kathir collects the early glosses. From Mujahid, Sa'id ibn Jubayr and ad-Dahhak: the good kind whose parts stick to one another. From Ibn 'Abbas and 'Ikrima: sticky. From Qatada: that which sticks to the hand. Al-Muyassar sums the word up as sticky clay whose parts cling together.",
            "bn": "বাগাভী অধিকাংশের অর্থটি দেন: ভালো, খাঁটি মাটি, যা হাতে লেগে থাকে, আঁকড়ে ধরে। তাঁর মতে এর অর্থ 'লাযিম', অর্থাৎ যা সেঁটে থাকে। 'মীম' বদলে 'বা' হয়েছে, যেন মাটিটা নিজেই হাতের সঙ্গে লেগে যায়। ইবন কাসীর পূর্বসূরিদের ব্যাখ্যাগুলো এক জায়গায় আনেন। মুজাহিদ, সাঈদ ইবন জুবাইর ও দাহহাকের মতে: ভালো জাতের মাটি, যার এক অংশ আরেক অংশে লেগে থাকে। ইবন আব্বাস (রাঃ) ও ইকরিমার মতে: আঠালো। কাতাদার মতে: যা হাতে লেগে যায়। মুয়াসসার সংক্ষেপে বলে: আঠালো মাটি, যার কণাগুলো একটা আরেকটার সঙ্গে জুড়ে থাকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Firm, Pure, or Foul-Smelling",
          "bn": "শক্ত, খাঁটি, নাকি দুর্গন্ধময়"
        },
        "p": [
          {
            "en": "Not every gloss runs that way. Al-Baghawi closes his note with a different report: Mujahid and ad-Dahhak said lazib means muntin, foul-smelling. Al-Qurtubi records the same from the same two names, and beside it a further view from as-Suddi and al-Kalbi, that lazib means khalis, pure. So the reports carried under the names of Mujahid and ad-Dahhak differ from one commentator to the next. Ibn Kathir has them saying good, clinging clay; al-Baghawi and al-Qurtubi have them saying foul-smelling. The texts fetched do not settle which report is sounder, and this article does not try.",
            "bn": "সব ব্যাখ্যা অবশ্য এক দিকে যায় না। বাগাভী তাঁর আলোচনা শেষ করেন ভিন্ন এক বর্ণনা দিয়ে: মুজাহিদ ও দাহহাক বলেছেন, 'লাযিব' মানে 'মুনতিন', অর্থাৎ দুর্গন্ধময়। কুরতুবীও এই দুজনের নামেই একই কথা আনেন। পাশাপাশি তিনি সুদ্দী ও কালবীর আরেকটি মত উল্লেখ করেন: 'লাযিব' মানে 'খালিস', খাঁটি। তাহলে মুজাহিদ ও দাহহাকের নামে যা বর্ণিত, তা এক তাফসীর থেকে আরেক তাফসীরে আলাদা। ইবন কাসীরের বর্ণনায় তাঁরা বলেছেন ভালো, আঠালো মাটি। বাগাভী ও কুরতুবীর বর্ণনায় দুর্গন্ধময়। কোন বর্ণনা বেশি মজবুত, হাতের তাফসীরগুলো তা মীমাংসা করে না। এ আলোচনাও সে চেষ্টা করবে না।"
          },
          {
            "en": "As-Sa'di glosses the word in yet another direction: qawi shadid, strong and firm. He sets beside it 15:26, where man is created from sounding clay of altered black mud, as a parallel description of the same material; that verse has its own context and is not opened here. The range runs from clinging, to firm, to pure, to foul. What every gloss shares is that the material is earth wetted with water. Ibn Kathir draws the point from that: Allah goes on to make clear that they were created from something weak.",
            "bn": "সা'দী শব্দটিকে নিয়ে যান আরেক দিকে: 'কাবিয়্যুন শাদীদ', অর্থাৎ শক্ত ও মজবুত। এর পাশে তিনি রাখেন ১৫:২৬ আয়াত, যেখানে মানুষকে সৃষ্টি করা হয়েছে পরিবর্তিত কালো কাদার শুকনো, ঠনঠনে মাটি থেকে। একই উপাদানের আরেক বর্ণনা হিসেবে তিনি আয়াতটি আনেন। সে আয়াতের নিজস্ব প্রেক্ষাপট আছে, এখানে তা খোলা হচ্ছে না। অর্থের পরিসর তাহলে আঠালো থেকে শক্ত, খাঁটি থেকে দুর্গন্ধময় পর্যন্ত বিস্তৃত। তবে সব ব্যাখ্যাতেই উপাদানটা পানিতে ভেজা মাটি। ইবন কাসীর সেখান থেকেই মূল কথাটা টানেন: আল্লাহ এরপর স্পষ্ট করে দেন যে তাদের সৃষ্টি করা হয়েছে দুর্বল এক জিনিস থেকে।"
          }
        ]
      },
      {
        "h": {
          "en": "Adam, or All His Children",
          "bn": "আদম (আঃ), নাকি তাঁর সব সন্তান"
        },
        "p": [
          {
            "en": "Who are them in We created them? Al-Muyassar reads it as their father Adam (AS): We created their father Adam from sticky clay. Ma'arif al-Qur'an allows both: either it means that Adam (AS) was made of clay, or it may mean every human being. It explains the second with a chain. A person is formed from a drop, the drop from blood, blood from food, and food, in whatever form, goes back to plants, which grow from clay and water. On that view clay and water lie at the root of every human life, generation after generation.",
            "bn": "'আমি তাদের সৃষ্টি করেছি', এখানে 'তাদের' বলতে কাদের বোঝানো হয়েছে? মুয়াসসার পড়ে তাদের পিতা আদম (আঃ) হিসেবে: আমি তাদের পিতা আদমকে আঠালো মাটি থেকে সৃষ্টি করেছি। মাআরিফুল কুরআন দুটোরই সুযোগ রাখে। হতে পারে এর অর্থ আদম (আঃ)-কে মাটি থেকে বানানো হয়েছে, আবার হতে পারে প্রতিটি মানুষ। দ্বিতীয় অর্থটা সে বোঝায় একটা শিকল দিয়ে। মানুষ তৈরি হয় শুক্রবিন্দু থেকে, শুক্রবিন্দু রক্ত থেকে, রক্ত খাবার থেকে। আর খাবার যে রূপেই আসুক, তার উৎস উদ্ভিদ, যা জন্মায় মাটি আর পানি থেকে। এ দৃষ্টিতে প্রজন্মের পর প্রজন্ম প্রতিটি মানুষের গোড়ায় আছে মাটি আর পানি।"
          },
          {
            "en": "At-Tabari, explaining why the clay is called lazib, remarks in passing that the son of Adam is created from earth, water, fire and air. Either reading serves the argument. If the first man came from clay, his children came from him; if each child is clay by way of food, the point arrives without a detour. Ma'arif adds that the verse does not spell its argument out at length. It was thought enough to hint at it, with a single sentence about clay, and to leave the listener to finish the thought.",
            "bn": "মাটিকে কেন 'লাযিব' বলা হলো, তা বোঝাতে গিয়ে তাবারী প্রসঙ্গক্রমে বলেন, আদম-সন্তানের সৃষ্টি মাটি, পানি, আগুন ও বাতাস থেকে। যে ব্যাখ্যাই ধরা হোক, যুক্তির কাজ চলে যায়। প্রথম মানুষ মাটি থেকে এসে থাকলে তাঁর সন্তানেরা এসেছে তাঁর থেকেই। আর খাবারের পথ ধরে প্রত্যেক সন্তানই যদি মাটি হয়, তবে কথাটা ঘুরপথ ছাড়াই পৌঁছে যায়। মাআরিফুল কুরআন আরও বলে, আয়াতটি যুক্তিটা বিস্তারিত বলেনি। মাটি নিয়ে একটিমাত্র বাক্যে ইঙ্গিত দেওয়াই যথেষ্ট মনে করা হয়েছে। বাকিটা ভেবে শেষ করার ভার শ্রোতার।"
          }
        ]
      },
      {
        "h": {
          "en": "Harder Than Coming Back",
          "bn": "ফিরে আসার চেয়েও কঠিন"
        },
        "p": [
          {
            "en": "As-Sa'di draws the logic out in steps. He reads the first half of the question as being about their re-creation: is bringing them into being after death the harder, heavier work, or the creatures just described? They must admit that the creation of the heavens and the earth is greater than the creation of people, and having admitted it, they are bound to admit the raising of the dead. Then he goes closer to home. If they turned to themselves and thought, they would find their first beginning from clinging clay harder to conceive than being made again after death.",
            "bn": "সা'দী যুক্তিটা ধাপে ধাপে খোলেন। প্রশ্নের প্রথম অংশকে তিনি পড়েন তাদের পুনঃসৃষ্টির প্রসঙ্গে: মৃত্যুর পর তাদের আবার অস্তিত্বে আনা কি বেশি কঠিন ও কষ্টসাধ্য, নাকি এইমাত্র বলা সৃষ্টিগুলো? তাদের মানতেই হবে, আসমান ও যমীনের সৃষ্টি মানুষের সৃষ্টির চেয়ে বড়। আর তা মানলে পুনরুত্থানও মানতে তারা বাধ্য। এরপর তিনি আরও কাছের কথায় আসেন। তারা যদি নিজেদের দিকে ফিরে একটু ভাবত, তাহলে বুঝত, আঠালো মাটি থেকে প্রথমবার সৃষ্ট হওয়া কল্পনা করা মৃত্যুর পর আবার সৃষ্ট হওয়ার চেয়ে কঠিন।"
          },
          {
            "en": "That, as-Sa'di says, is why the verse closes on the clay. Ma'arif al-Qur'an makes the same case from the other side. If the deniers recognise that Allah, by His boundless power, created such great things as the angels, the moon, the stars, the sun and the meteors, how could it be hard for Him to let a weak creature die and then bring it to life once more? The way they were first fashioned from sticky clay, it says, is the way they will be given life again after they have turned to dust.",
            "bn": "সা'দী বলেন, এ কারণেই আয়াতটি শেষ হয়েছে মাটির কথায়। মাআরিফুল কুরআন একই কথা বলে অন্য দিক থেকে। অস্বীকারকারীরা তো স্বীকার করে, ফেরেশতা, চাঁদ, তারা, সূর্য আর উল্কার মতো বিশাল সব সৃষ্টি আল্লাহ তাঁর অসীম ক্ষমতায় বানিয়েছেন। তাহলে মানুষের মতো দুর্বল এক সৃষ্টিকে মৃত্যু দিয়ে আবার জীবিত করা তাঁর জন্য কঠিন হবে কেন? মাআরিফুল কুরআনের ভাষায়, প্রথমবার যেভাবে আঠালো মাটি থেকে তাদের গড়া হয়েছিল, ধুলো হয়ে যাওয়ার পরও সেভাবেই তাদের আবার জীবন দেওয়া হবে।"
          },
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, and none is quoted here. The verses that follow turn to how this question was received, and they belong to their own discussion. What this one leaves with the reader is a habit of reasoning: set what you doubt beside what you already accept, and see which is the larger claim. The sky overhead and the clay underfoot both answer the same question, and the reader does not have to travel anywhere to see either of them.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি। তাই এখানে কোনো হাদীস উদ্ধৃত হয়নি। পরের আয়াতগুলো দেখায় প্রশ্নটার জবাবে তারা কেমন আচরণ করেছিল। সেগুলোর আলোচনা আলাদা। এ আয়াত পাঠকের হাতে তুলে দেয় চিন্তার একটা অভ্যাস। যে বিষয়ে আপনার সন্দেহ, সেটাকে রাখুন যা আপনি আগেই মেনে নিয়েছেন তার পাশে, তারপর দেখুন কোন দাবিটা বড়। মাথার উপরের আকাশ আর পায়ের নিচের মাটি, দুটোই একই প্রশ্নের উত্তর দেয়। আর তা দেখতে কোথাও যেতে হয় না।"
          }
        ]
      }
    ]
  },
  "37:16": {
    "sections": [
      {
        "h": {
          "en": "The Deniers Finally Speak",
          "bn": "অস্বীকারকারীদের নিজের মুখে"
        },
        "p": [
          {
            "en": "Since 37:12 the surah has been describing a group of people from the outside. The Prophet ﷺ wonders while they mock; they are reminded and do not take the reminder; they see a sign and turn it into ridicule; and they say it is nothing but plain magic. At 37:16 the description stops and the people themselves are heard. A-idha mitna wa kunna turaban wa 'izaman a-inna la-mab'uthun: when we have died and become dust and bones, are we really to be raised again?",
            "bn": "৩৭:১২ থেকে সূরাটি একদল মানুষের কথা বলছিল বাইরে দাঁড়িয়ে। নবী ﷺ বিস্মিত হন, আর তারা বিদ্রূপ করে। তাদের উপদেশ দিলে তারা নেয় না। কোনো নিদর্শন দেখলে ঠাট্টা জুড়ে দেয়। আর বলে, এ তো স্পষ্ট যাদু ছাড়া কিছু নয়। ৩৭:১৬-এ এসে বর্ণনা থেমে যায়, এবার শোনা যায় তাদের নিজেদের গলা। আ-ইযা মিতনা ওয়া কুন্না তুরাবান ওয়া ইযামান আ-ইন্না লা-মাবঊসূন: আমরা মরে গিয়ে মাটি আর হাড়ে পরিণত হলে, সত্যিই কি আমাদের আবার উঠানো হবে?"
          },
          {
            "en": "The words matter because of what stands just before them. At 37:11 the Prophet ﷺ was told to put a question to these same people: are they the harder thing to create, or what Allah has already created? That question was the argument. This verse is the reply they gave, and it is no reply to the argument at all. It answers nothing 37:11 asked. It steps around the comparison, goes straight to the conclusion the comparison was meant to support, the raising of the dead, and laughs at it.",
            "bn": "কথাগুলোর গুরুত্ব বোঝা যায় ঠিক আগে কী আছে তা দেখলে। ৩৭:১১-এ নবী ﷺ-কে বলা হয়েছিল এই লোকদেরই একটা প্রশ্ন করতে: সৃষ্টি হিসেবে তারা কি বেশি কঠিন, নাকি আল্লাহ আগে যা সৃষ্টি করেছেন তা? যুক্তিটা ছিল ওই প্রশ্নের ভেতরেই। এ আয়াত তাদের জবাব, অথচ যুক্তির কোনো জবাবই এতে নেই। ৩৭:১১ যা জানতে চেয়েছিল, তার কিছুই এখানে আসেনি। তুলনাটা তারা পাশ কাটিয়ে গেছে। সরাসরি চলে গেছে সেই সিদ্ধান্তে, যার পক্ষে তুলনাটা দাঁড় করানো হয়েছিল, অর্থাৎ মৃতদের আবার জীবিত করা। তারপর সেটা নিয়েই হেসেছে।"
          },
          {
            "en": "Ibn Kathir reads 37:11 to 37:19 together under the heading of the certainty of life after death. He reports from Ibn Mas'ud that the deniers admitted the heavens, the earth and the other mighty creatures were harder to create than they were. His question follows naturally: if that is so, why do they deny the resurrection, when they see things greater than what they deny? That unanswered why is the background against which this verse is meant to be heard.",
            "bn": "ইবন কাসীর ৩৭:১১ থেকে ৩৭:১৯ একসঙ্গে পড়েন, শিরোনাম দেন মৃত্যুর পরের জীবনের নিশ্চয়তা। ইবন মাসঊদ (রাঃ) থেকে তিনি বর্ণনা করেন, অস্বীকারকারীরা নিজেরাই মেনে নিয়েছিল যে আসমান, যমীন আর অন্যান্য বিশাল সৃষ্টি বানানো তাদের নিজেদের চেয়ে কঠিন। তাঁর প্রশ্নটা তাই স্বাভাবিকভাবেই আসে: তা-ই যদি হয়, যারা অস্বীকার করা জিনিসটার চেয়ে বড় জিনিস চোখের সামনে দেখছে, তারা পুনরুত্থান অস্বীকার করে কেন? উত্তরহীন এই 'কেন'-র পটভূমিতেই আয়াতটি শুনতে হবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Seen, Then Called Magic",
          "bn": "চোখে দেখে বলল যাদু"
        },
        "p": [
          {
            "en": "Ma'arif al-Qur'an comments on 37:15 to 37:18 together, and it spends its space on the verse just before it. The sign of 37:14, it argues, means a miracle the deniers actually saw, not a rational argument and not a verse of the Qur'an. Its reason lies in 37:15: they said this was nothing but open magic, and calling an argument magic makes no sense. Besides, it notes, verses of the Qur'an are heard, while the text says they saw the sign.",
            "bn": "মাআরিফুল কুরআন ৩৭:১৫ থেকে ৩৭:১৮ একসঙ্গে আলোচনা করেছে, আর তার পুরো জায়গাটা খরচ করেছে ঠিক আগের আয়াতের উপর। তার মতে ৩৭:১৪-এর নিদর্শন মানে মুজিযা, যা অস্বীকারকারীরা নিজের চোখে দেখেছিল। এটা কোনো যুক্তি-প্রমাণ নয়, কুরআনের আয়াতও নয়। কারণ হিসেবে সে দেখায় ৩৭:১৫: তারা বলেছিল এ স্পষ্ট যাদু ছাড়া কিছু নয়। কোনো যুক্তিকে যাদু বলার কোনো মানে হয় না। তা ছাড়া কুরআনের আয়াত তো শোনা হয়, অথচ এখানে বলা হয়েছে তারা নিদর্শনটা দেখেছিল।"
          },
          {
            "en": "Read with that in mind, the sequence is striking. People shown a sign with their own eyes filed it under magic, and then, in the next breath, declared the rising after death absurd. What they saw, they explained away; what they were told, they ruled out. In the same passage Ibn Kathir quotes Qatadah on 37:12: Muhammad was astounded by the mockery of the misguided ones among the sons of Adam. This verse is that mockery, set down in their own words.",
            "bn": "এ কথা মাথায় রেখে পড়লে ধারাবাহিকতাটা চোখে পড়ার মতো। যারা নিজের চোখে নিদর্শন দেখল, তারা সেটাকে যাদুর খাতায় তুলে দিল। পরের নিঃশ্বাসেই মৃত্যুর পর আবার উঠানোকে বলে দিল হাস্যকর। যা দেখেছে, তার একটা ব্যাখ্যা বানিয়ে নিয়েছে। যা শুনেছে, তা সরাসরি বাতিল করেছে। একই আলোচনায় ইবন কাসীর ৩৭:১২ প্রসঙ্গে কাতাদার কথা আনেন: আদম সন্তানদের মধ্যে যারা পথভ্রষ্ট, তাদের বিদ্রূপ দেখে মুহাম্মাদ ﷺ বিস্মিত হয়েছিলেন। এ আয়াত সেই বিদ্রূপ, তাদের নিজেদের ভাষায়।"
          }
        ]
      },
      {
        "h": {
          "en": "Dust, Bones and Graves",
          "bn": "মাটি, হাড় আর কবর"
        },
        "p": [
          {
            "en": "The sentence names the stages of a body's ending. Mitna, we have died. Kunna turaban, we have become dust. Wa 'izaman, and bones. Al-Muyassar, explaining 37:15 to 37:17 together, fills in the picture: when we have died and become dust and bones that have decayed, are we to be raised from our graves alive? Its added word baliya, worn out and crumbling, is exactly the deniers' point. They are not speaking of a body freshly laid down, but of what remains when almost nothing remains.",
            "bn": "বাক্যটি একটা দেহের শেষ হয়ে যাওয়ার ধাপগুলো গুনে দেয়। মিতনা, আমরা মরে গেলাম। কুন্না তুরাবান, আমরা মাটি হয়ে গেলাম। ওয়া ইযামান, আর হাড়। মুয়াসসার ৩৭:১৫ থেকে ৩৭:১৭ একসঙ্গে ব্যাখ্যা করে ছবিটা পূর্ণ করে: আমরা মরে মাটি আর পচে-গলে যাওয়া হাড় হয়ে গেলে কি আমাদের কবর থেকে জীবিত করে উঠানো হবে? তার যোগ করা শব্দ বালিয়া, অর্থাৎ জীর্ণ, ক্ষয়ে যাওয়া, এটাই অস্বীকারকারীদের আসল কথা। সদ্য দাফন করা দেহের কথা তারা বলছে না। বলছে তখনকার কথা, যখন প্রায় কিছুই আর বাকি থাকে না।"
          },
          {
            "en": "The verse sets the grave before the listener before it asks anything. The opening clause lays out what they take to be the evidence that settles the matter, dust past gathering and bones past mending, and only then reaches the question. The sentence also stacks two questioning particles, a-idha at its opening and a-inna before its close, so that two disbelieving questions are pressed into a single breath and the scorn is doubled. Their whole case fits in a single line: look at what death leaves behind, and tell us that comes back.",
            "bn": "কিছু জিজ্ঞেস করার আগেই আয়াতটি শ্রোতার সামনে কবরটা খুলে রাখে। শুরুর অংশে তারা সাজিয়ে দেয় সেই জিনিসগুলো, যেগুলোকে তারা চূড়ান্ত প্রমাণ মনে করে: যে মাটি আর জড়ো করা যায় না, যে হাড় আর জোড়া লাগে না। প্রশ্নটা আসে তার পরে। বাক্যে প্রশ্নের 'আ' এসেছে দুবার, শুরুতে আ-ইযা আর শেষের দিকে আ-ইন্না। ফলে অবিশ্বাসের দুটি প্রশ্ন এক নিঃশ্বাসে চেপে বসে, বিদ্রূপটাও হয় দ্বিগুণ। তাদের পুরো মামলা এক কথায়: দেখো মৃত্যু কী রেখে যায়, এবার বলো এটা ফিরে আসবে।"
          }
        ]
      },
      {
        "h": {
          "en": "Asking With No Wish to Know",
          "bn": "জানার ইচ্ছা ছাড়া প্রশ্ন"
        },
        "p": [
          {
            "en": "Al-Qurtubi restates the verse in three plain words, a-nub'athu idha mitna, are we to be raised when we have died, and then names the kind of question it is: istifham inkar minhum wa sukhriya, a question of denial from them, and of mockery. A question of denial is a question whose speaker has already settled the answer and words it as a question only to make the opposite sound absurd. Here the settled answer is no, and the question mark carries the sneer.",
            "bn": "কুরতুবী আয়াতটিকে সহজ করে বলেন, মাত্র তিনটি শব্দে, আ-নুবআসু ইযা মিতনা: মরে গেলে কি আমাদের উঠানো হবে? তারপর প্রশ্নটার ধরন চিনিয়ে দেন: ইসতিফহামু ইনকারিন মিনহুম ওয়া সুখরিয়্যা, তাদের দিক থেকে অস্বীকারের প্রশ্ন, সঙ্গে বিদ্রূপ। অস্বীকারের প্রশ্ন সেটাই, যার উত্তর বক্তা আগেই ঠিক করে রেখেছে। প্রশ্নের রূপ দেয় শুধু উল্টো কথাটাকে হাস্যকর দেখাতে। এখানে আগে থেকে ঠিক করা উত্তরটা হলো না, আর প্রশ্নবোধক সুরটাই বহন করছে তাচ্ছিল্য।"
          },
          {
            "en": "That distinction matters for every reader, because the two can sound alike. The fault this verse records is not the act of asking. It is a question that has shut its own door before anyone could answer it, so that the asker has nothing left to learn from the reply. Al-Baghawi's entry, in the text fetched for this verse, quotes the verse and adds nothing to it. Al-Qurtubi's two words, denial and mockery, are enough to set its tone.",
            "bn": "পার্থক্যটা প্রত্যেক পাঠকের জন্য জরুরি, কারণ দুটো শুনতে প্রায় একরকম। এ আয়াত যে দোষের কথা বলে, তা প্রশ্ন করা নয়। দোষ হলো এমন প্রশ্ন, যা কেউ উত্তর দেওয়ার আগেই নিজের দরজা বন্ধ করে দিয়েছে। জবাব থেকে প্রশ্নকারীর আর কিছু শেখার থাকে না। এ আয়াতের জন্য বাগাভীর যে লেখা পাওয়া গেছে, তাতে তিনি আয়াতটি উদ্ধৃত করেছেন, আর কিছু যোগ করেননি। সুরটা ধরিয়ে দিতে কুরতুবীর দুই শব্দই যথেষ্ট: অস্বীকার আর বিদ্রূপ।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Far to Be Believed",
          "bn": "দূরের কথা বলে বাতিল"
        },
        "p": [
          {
            "en": "Ibn Kathir describes their state with two verbs: yastab'iduna dhalika wa yukadhdhibuna bihi, they deem it far-fetched and they call it a lie. His English abridgement puts it plainly: they thought this was unlikely to happen, and they did not believe it. As-Sa'di uses the same pair of ideas for the way they spoke: they said it istib'adan wa inkaran, deeming it remote and denying it. Two commentators, two wordings, one diagnosis, and it comes in two steps.",
            "bn": "ইবন কাসীর তাদের অবস্থা বোঝান দুটি ক্রিয়া দিয়ে: ইয়াসতাবইদূনা যালিকা ওয়া ইউকাযযিবূনা বিহি, তারা একে অসম্ভব রকম দূরের মনে করে, আর মিথ্যা বলে উড়িয়ে দেয়। তাঁর ইংরেজি সংক্ষেপ সোজা ভাষায় বলে: তারা ভেবেছিল এমনটা ঘটার সম্ভাবনা নেই, আর তারা তা বিশ্বাস করেনি। সা'দীও তাদের কথা বলার ধরন বোঝাতে একই জোড়া ভাবনা আনেন: তারা বলেছিল ইসতিবআদান ওয়া ইনকারান, দূরের ভেবে আর অস্বীকার করে। দুজন মুফাসসির, দুই রকম শব্দ, কিন্তু রোগ একটাই, আর তা আসে দুই ধাপে।"
          },
          {
            "en": "The first step is worth slowing down for. Istib'ad comes from the root b-'-d, distance. To deem a thing far is not yet to prove it false; it is to feel that it lies too far from anything we have seen. Another surah puts the same feeling into the deniers' mouths: at 50:3 they say, when we have died and become dust, that is a far return, raj'un ba'id. The objection is a sense of distance, and a sense of distance is not evidence.",
            "bn": "প্রথম ধাপটায় একটু থামা দরকার। ইসতিবআদ শব্দের মূল ব-আ-দ, অর্থাৎ দূরত্ব। কোনো কিছুকে দূরের মনে করা মানে এখনো তাকে মিথ্যা প্রমাণ করা নয়। মানে শুধু এটুকু যে, যা কিছু দেখা হয়েছে তা থেকে জিনিসটা অনেক দূরে মনে হয়। আরেক সূরায় অস্বীকারকারীদের মুখে ঠিক এই অনুভূতিটাই এসেছে। ৫০:৩ আয়াতে তারা বলে, আমরা মরে মাটি হয়ে গেলে? সে তো বহু দূরের ফেরা, রাজউন বাঈদ। আপত্তিটা আসলে দূরত্বের অনুভূতি, আর দূরত্বের অনুভূতি কোনো প্রমাণ নয়।"
          },
          {
            "en": "Then comes the second step. Ibn Kathir's takdhib and as-Sa'di's inkar both mark the slide from it seems far to it is false. The verse lets the listener watch that slide happen inside one sentence. Nothing has been learned between the two steps, and no evidence has arrived. A feeling of improbability has simply been promoted to a verdict, and the verdict has been delivered as a joke. The same slide can happen in anyone's reasoning, with no new fact to prompt it.",
            "bn": "তারপর আসে দ্বিতীয় ধাপ। ইবন কাসীরের তাকযীব আর সা'দীর ইনকার, দুটোই দেখায় কীভাবে 'দূরের মনে হয়' গড়িয়ে গিয়ে দাঁড়ায় 'এটা মিথ্যা'-তে। আয়াতটি একটি বাক্যের ভেতরেই শ্রোতাকে এই গড়িয়ে পড়া দেখিয়ে দেয়। দুই ধাপের মাঝে নতুন কিছু জানা হয়নি, কোনো প্রমাণও আসেনি। অসম্ভব মনে হওয়ার একটা অনুভূতিকে কেবল রায়ের আসনে বসিয়ে দেওয়া হয়েছে। আর সেই রায় শোনানো হয়েছে ঠাট্টার সুরে। কোনো নতুন তথ্য ছাড়াই এমন গড়িয়ে পড়া যে কারও চিন্তায় ঘটতে পারে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Maker Measured by Man",
          "bn": "মানুষের মাপে স্রষ্টাকে মাপা"
        },
        "p": [
          {
            "en": "As-Sa'di opens his comment with the words wa min al-'ajab aydan, and among the astonishing things, too. That also marks this as one more item in a list of wonders. The wonder he points to is a measurement: qiyasuhum qudrat rabb al-ard wa-l-samawat 'ala qudrat al-adami al-naqis min jami' al-wujuh, their measuring the power of the Lord of the earth and the heavens against the power of a human being, deficient in every respect. His next words, fa-qalu, so they said, present the verse as what that measurement produced.",
            "bn": "সা'দী তাঁর আলোচনা শুরু করেন এই কথায়: ওয়া মিনাল আজাবি আইদান, আর বিস্ময়কর ব্যাপারগুলোর মধ্যে এটাও একটা। 'এটাও' শব্দটা বুঝিয়ে দেয়, বিস্ময়ের একটা তালিকায় এ আরেকটা সংযোজন। যে বিস্ময়ের দিকে তিনি আঙুল তোলেন, তা একটা মাপজোখ: কিয়াসুহুম কুদরাতা রাব্বিল আরদি ওয়াস সামাওয়াতি আলা কুদরাতিল আদামিয়্যিন নাকিসি মিন জামীইল উজূহ। অর্থাৎ যমীন ও আসমানের রবের কুদরতকে তারা মেপেছে মানুষের ক্ষমতা দিয়ে, যে মানুষ সব দিক থেকেই অপূর্ণ। এরপর তিনি বলেন ফাকালূ, অর্থাৎ তাই তারা বলল। আয়াতের কথাটা যেন সেই মাপজোখেরই ফল।"
          },
          {
            "en": "Put plainly, the reasoning ran like this. No human being can gather scattered dust and rebuild a body around old bones; therefore it cannot be done. The hidden step is the assumption that what a person cannot do, no one can. As-Sa'di's wording exposes the gap by placing the two sides next to each other: on one side the Lord of the earth and the heavens, on the other a creature lacking in every way. An analogy between them is broken before it begins.",
            "bn": "সহজ করে বললে তাদের যুক্তিটা ছিল এরকম: কোনো মানুষ ছড়িয়ে পড়া মাটি জড়ো করে পুরনো হাড়ের চারপাশে আবার দেহ গড়তে পারে না, কাজেই এটা হওয়া সম্ভব নয়। মাঝখানে একটা ধাপ চুপচাপ লুকিয়ে আছে। ধরে নেওয়া হয়েছে, মানুষ যা পারে না তা কেউই পারে না। সা'দীর ভাষা দুই পক্ষকে পাশাপাশি দাঁড় করিয়ে ফাঁকটা উন্মোচন করে দেয়। একদিকে যমীন ও আসমানের রব, অন্যদিকে এমন এক সৃষ্টি যার সব দিকেই ঘাটতি। এ দুয়ের মধ্যে তুলনা শুরু হওয়ার আগেই ভেঙে পড়ে।"
          },
          {
            "en": "This is where 37:11 stands silently behind the verse. That verse had already posed the comparison that would have corrected their measurement, and the dust they now name as the end of the story is close kin to what 37:11 named as its beginning. Their reply here does not engage it. The premise was offered; the mockery ignores it. As-Sa'di's word 'ajab fits: the astonishing thing is not that they had a question, but that creatures took their own limits as the measure of their Creator.",
            "bn": "এখানেই আয়াতটির পেছনে নীরবে দাঁড়িয়ে আছে ৩৭:১১। যে তুলনা তাদের মাপজোখ শুধরে দিতে পারত, সে আয়াত আগেই তা সামনে রেখেছিল। আর যে মাটিকে তারা এখন গল্পের শেষ বলছে, ৩৭:১১ তার খুব কাছের জিনিসকেই বলেছিল গল্পের শুরু। তাদের এই জবাব সেদিকে ফিরেও তাকায় না। ভিত্তিটা দেওয়া হয়েছিল, বিদ্রূপ তা উপেক্ষা করেছে। সা'দীর আজাব শব্দটা তাই যথার্থ। বিস্ময়ের ব্যাপার এটা নয় যে তাদের মনে প্রশ্ন ছিল। বিস্ময় হলো, সৃষ্টি নিজের সীমাকে বানিয়ে নিয়েছে তার স্রষ্টাকে মাপার মাপকাঠি।"
          }
        ]
      },
      {
        "h": {
          "en": "A Sentence Said Before",
          "bn": "বহুবার শোনা এক বাক্য"
        },
        "p": [
          {
            "en": "This exact sentence is not said only once. The words a-idha mitna wa kunna turaban wa 'izaman a-inna la-mab'uthun appear again at 23:82, and at 56:47, where they are introduced as something the people of that passage used to say. At 17:49 a close variant speaks of bones and crumbled fragments. Within this same surah, at 37:53, the sentence returns once more with a different last word, la-madinun, are we to be repaid? The objection was a standing one, repeated until it had the ring of a slogan.",
            "bn": "হুবহু এই বাক্য একবারই বলা হয়নি। আ-ইযা মিতনা ওয়া কুন্না তুরাবান ওয়া ইযামান আ-ইন্না লা-মাবঊসূন, এই শব্দগুলো আবার এসেছে ২৩:৮২ আয়াতে। এসেছে ৫৬:৪৭ আয়াতেও, যেখানে বলা হয়েছে এটা ছিল সেখানে বর্ণিত লোকদের নিয়মিত বুলি। ১৭:৪৯ আয়াতে প্রায় একই কথা এসেছে হাড় আর চূর্ণ-বিচূর্ণ কণার উল্লেখে। এই সূরাতেই ৩৭:৫৩ আয়াতে বাক্যটি আরেকবার ফিরবে, শুধু শেষ শব্দটা বদলে: লা-মাদীনূন, আমাদের কি প্রতিফল দেওয়া হবে? আপত্তিটা ছিল স্থায়ী, বারবার বলতে বলতে যা স্লোগানের মতো শোনাত।"
          },
          {
            "en": "The Qur'an names the pattern itself at 23:81, just before one of those occurrences: they said the like of what the former peoples said. A sentence handed from one generation to the next can feel like wisdom simply because it is old and familiar. Repetition gives it confidence; it does not give it evidence. The verses that follow this one in As-Saffat carry the exchange forward, and they belong to their own discussion. This verse holds only the question.",
            "bn": "ধারাটার নাম কুরআন নিজেই দিয়েছে ২৩:৮১ আয়াতে, ওই রকম এক উদ্ধৃতির ঠিক আগে: তারা তা-ই বলেছে, যা বলেছিল আগের লোকেরা। প্রজন্ম থেকে প্রজন্মে হাতবদল হওয়া একটা কথা শুধু পুরনো আর চেনা বলেই জ্ঞানের মতো মনে হতে পারে। বারবার বলায় কথাটা আত্মবিশ্বাস পায়, প্রমাণ পায় না। সাফফাতে এর পরের আয়াতগুলো আলাপটাকে সামনে এগিয়ে নেয়, তবে সেগুলোর আলোচনা আলাদা। এ আয়াতে আছে কেবল প্রশ্নটুকু।"
          }
        ]
      },
      {
        "h": {
          "en": "Whose Power the Question Measures",
          "bn": "প্রশ্নটা কার ক্ষমতা মাপছে"
        },
        "p": [
          {
            "en": "None of the commentaries fetched for this verse attaches a hadith to it, and none is quoted here. The reply to this mockery comes in the verses that follow, and this article leaves it to them. For now the verse holds the listener inside the deniers' sentence long enough to hear how it is built: a grave described, a feeling of distance, a broken comparison, and a laugh where an answer should have been. Nothing in the fetched sources ties the verse to a named person or a particular occasion.",
            "bn": "এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, তার কোনোটিই এর সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানেও কোনো হাদীস আনা হয়নি। এই বিদ্রূপের জবাব আসছে পরের আয়াতগুলোতে, সে আলোচনা সেখানেই থাক। আপাতত আয়াতটি শ্রোতাকে অস্বীকারকারীদের বাক্যের ভেতরে কিছুক্ষণ আটকে রাখে, যাতে বোঝা যায় বাক্যটা কী দিয়ে গড়া। একটা কবরের বর্ণনা, দূরত্বের একটা অনুভূতি, একটা ভাঙা তুলনা, আর যেখানে উত্তর থাকার কথা সেখানে একটা হাসি। পাওয়া তাফসীরগুলোর কোথাও আয়াতটিকে নির্দিষ্ট কোনো ব্যক্তি বা ঘটনার সঙ্গে জোড়া হয়নি।"
          },
          {
            "en": "The verse describes what the text describes: people in the Prophet's ﷺ time who met the message of the rising with scorn. It licenses nothing against any living person or community, and it gives nobody a warrant to label a neighbour by it. Its use is as a mirror. The habit it records, measuring Allah by human limits, does not need open disbelief to survive. It can live quietly inside someone who prays and still treats some promise of Allah as unlikely.",
            "bn": "আয়াতটি ঠিক ততটুকুই বলে, যতটুকু এর ভাষায় আছে: নবী ﷺ-এর যুগের কিছু মানুষ, যারা পুনরুত্থানের বার্তার জবাব দিয়েছিল তাচ্ছিল্য দিয়ে। আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এ আয়াত কিছুরই অনুমতি দেয় না। কাউকে এর দোহাই দিয়ে প্রতিবেশীর গায়ে তকমা লাগানোর অধিকারও দেয় না। এর কাজ আয়নার। আল্লাহকে মানুষের সীমা দিয়ে মাপার যে অভ্যাস এখানে ধরা পড়েছে, টিকে থাকার জন্য তার প্রকাশ্য কুফরির দরকার হয় না। নামাজ পড়া মানুষের ভেতরেও তা চুপচাপ বাস করতে পারে, যে আল্লাহর কোনো এক ওয়াদাকে মনে মনে অসম্ভব ভাবে।"
          },
          {
            "en": "The correction the surah has already supplied is to restore the comparison the mockers skipped. Set what seems impossible beside what has already happened: the heavens, the earth, and a first creation that none of us arranged. A reader who catches themselves thinking, in effect, how could that ever be, can stop at the word how and ask whose power the question is measuring. If the answer is their own, the question has been put to the wrong scale.",
            "bn": "শোধরানোর পথ সূরাটি আগেই দেখিয়ে দিয়েছে: বিদ্রূপকারীরা যে তুলনা এড়িয়ে গিয়েছিল, সেটাকে আবার জায়গামতো বসানো। যা অসম্ভব মনে হয়, তাকে রাখুন যা আগেই ঘটে গেছে তার পাশে। আসমান, যমীন, আর প্রথমবারের সৃষ্টি, যার কোনোটাই আমরা নিজেরা সাজাইনি। মনের ভেতর যখন টের পান যে আপনি ভাবছেন, এটা আবার কীভাবে হবে, তখন 'কীভাবে' শব্দটায় থামুন। নিজেকে জিজ্ঞেস করুন, প্রশ্নটা কার ক্ষমতা মাপছে। উত্তর যদি হয় আপনার নিজের, তাহলে প্রশ্নটা ভুল দাঁড়িপাল্লায় তোলা হয়েছে।"
          }
        ]
      }
    ]
  },
  "37:19": {
    "sections": [
      {
        "h": {
          "en": "Dust, Bones, and a Yes",
          "bn": "ধুলো, হাড় আর একটি হ্যাঁ"
        },
        "p": [
          {
            "en": "Fa-innama hiya zajratun wahidatun fa-idha hum yanzurun: it will be only one zajra, and at once they will be looking. The verse is the second half of an answer. In 37:16 and 37:17 the deniers ask whether, once dead and turned to dust and bones, they will really be raised, and their forefathers too. In 37:18 the Prophet (peace be upon him) is told to reply: yes, and you will be humbled. This verse then says how that yes will come about, and its opening fa ties it to the reply as what follows from it.",
            "bn": "ফা-ইন্নামা হিয়া যাজরাতুন ওয়াহিদাতুন ফা-ইযা হুম ইয়ানযুরূন: সেটা হবে কেবল একটিমাত্র যাজরা, আর তখনই তারা তাকিয়ে দেখবে। আয়াতটি আসলে একটা জবাবের দ্বিতীয় অর্ধেক। ৩৭:১৬ ও ৩৭:১৭ আয়াতে অস্বীকারকারীরা প্রশ্ন তোলে: মরে মাটি আর হাড় হয়ে যাওয়ার পরও কি আমাদের সত্যিই উঠানো হবে? আমাদের পূর্বপুরুষদেরও? ৩৭:১৮ আয়াতে নবী ﷺ-কে জবাব দিতে বলা হয়: হ্যাঁ, আর তোমরা হবে লাঞ্ছিত। সেই হ্যাঁ কীভাবে বাস্তব হবে, এই আয়াত তা-ই জানায়। শুরুর 'ফা' অক্ষরটি একে ওই জবাবের ফল হিসেবে তার সঙ্গে গেঁথে দেয়।"
          },
          {
            "en": "Ma'arif al-Qur'an places the passage in the surah's movement. Having shown the possibility and the proof of the Hereafter, Allah now describes events of the Resurrection, and this first verse gives the manner in which the dead will rise. The pronoun hiya, it, is left for the reader to fill. Al-Baghawi fills it: it is the matter of the raising, or of the Resurrection. Read with him, the sentence is almost blunt. The whole affair the deniers found too large to believe comes down, in the end, to a single sound.",
            "bn": "মাআরিফুল কুরআন অংশটিকে সূরার গতিপথের মধ্যে বসিয়ে দেখায়। আখিরাত যে সম্ভব এবং তার প্রমাণ কী, তা দেখানোর পর আল্লাহ এখন কিয়ামতের কিছু ঘটনার বিবরণ দিচ্ছেন। আর এই প্রথম আয়াত বলছে, মৃতরা কীভাবে উঠবে। 'হিয়া' মানে 'সেটা', কিন্তু 'সেটা' কী, আয়াত তা খুলে বলে না। বাগাভী শূন্যস্থানটা পূরণ করেন: সেটা হলো পুনরুত্থানের ব্যাপার, অথবা কিয়ামতের। তাঁর ব্যাখ্যায় বাক্যটা প্রায় সোজাসাপটা শোনায়। যে বিষয়কে অস্বীকারকারীরা বিশ্বাসের পক্ষে অনেক বড় মনে করেছিল, শেষ পর্যন্ত তা গিয়ে দাঁড়ায় একটিমাত্র আওয়াজে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Cry That Drives the Herd",
          "bn": "পাল হাঁকানোর ডাক"
        },
        "p": [
          {
            "en": "Al-Qurtubi glosses zajratun wahidatun first as sayhatun wahida, one shout, a reading he attributes to al-Hasan, and he adds that it is the second blowing. Then he explains why the shout carries this particular name. It is called a zajra, he says, because its purpose is zajr, driving: people are driven by it as camels and horses are driven when they are being herded. So the word names a sharp cry with a job to do. It is not a noise that merely announces something. It is the sound that makes a resting animal get up and go.",
            "bn": "কুরতুবী 'যাজরাতুন ওয়াহিদাতুন'-এর প্রথম ব্যাখ্যা দেন 'সাইহাতুন ওয়াহিদা', অর্থাৎ একটিমাত্র চিৎকার। এ ব্যাখ্যা তিনি আল-হাসানের বলে উল্লেখ করেন, আর যোগ করেন যে এটাই দ্বিতীয় ফুঁ। তারপর বলেন, চিৎকারটার নাম কেন যাজরা। কারণ এর উদ্দেশ্য যাজর, মানে তাড়ানো। উট আর ঘোড়ার পাল হাঁকিয়ে নেওয়ার সময় যেভাবে ডাক দিয়ে তাড়ানো হয়, এ আওয়াজ দিয়েও মানুষকে তেমনি তাড়ানো হবে। শব্দটি তাই এমন এক তীক্ষ্ণ ডাকের নাম, যার একটা কাজ আছে। এটা কেবল খবর জানানোর আওয়াজ নয়। এটা সেই আওয়াজ, যা শুনে বসে থাকা পশু উঠে হাঁটা ধরে।"
          },
          {
            "en": "Ma'arif al-Qur'an makes the same point at greater length. Zajrah, it notes, is a noun from zajr, a word that carries many meanings in Arabic, one of which is uttering the kind of sound that, when cattle hear it, moves them to rise and get going. Here, it says, the word means the second Horn, blown by the angel Israfil, and it is called a zajrah for exactly that reason: as such sounds set cattle on their feet, this blast will make the dead rise. The picture is of a field of sleepers, all stirred at once.",
            "bn": "মাআরিফুল কুরআন একই কথা আরেকটু বিস্তারে বলে। যাজরাহ শব্দটি যাজর থেকে আসা বিশেষ্য। আরবিতে যাজর-এর অনেক অর্থ, তার একটি হলো এমন আওয়াজ করা, যা শুনে গবাদিপশু উঠে দাঁড়ায় আর চলতে শুরু করে। মাআরিফ বলে, এখানে শব্দটির মানে দ্বিতীয় সিঙ্গা, যা ফুঁকবেন ফেরেশতা ইসরাফীল (আঃ)। একে যাজরাহ বলার কারণও ঠিক এটাই। ওই রকম আওয়াজে যেমন পশু উঠে দাঁড়ায়, তেমনি এই সিঙ্গার আওয়াজে মৃতরা উঠে দাঁড়াবে। ছবিটা যেন ঘুমন্ত মানুষে ভরা এক মাঠের, যার সবাই একসঙ্গে জেগে উঠছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Three Words for One Moment",
          "bn": "এক মুহূর্তের তিন শব্দ"
        },
        "p": [
          {
            "en": "The choice of word stands out because the Qur'an has other words for such a moment. Surah Ya-Sin, just before this surah, uses sayhatan wahidatan, one cry, three times, in 36:29, 36:49 and 36:53, and 36:53 has nearly this verse's frame: it will be only one cry, and at once they will all be brought before Us. In 36:51 the wording is different again: wa-nufikha fi al-sur, and the Horn was blown. Here neither expression appears. The verse says zajra, and the choice deserves to be noticed on its own terms.",
            "bn": "শব্দ বাছাইয়ের ব্যাপারটা চোখে পড়ে, কারণ এমন মুহূর্তের জন্য কুরআনে অন্য শব্দও আছে। এ সূরার ঠিক আগের সূরা ইয়াসীনে 'সাইহাতান ওয়াহিদাতান', একটিমাত্র চিৎকার, এসেছে তিনবার: ৩৬:২৯, ৩৬:৪৯ ও ৩৬:৫৩ আয়াতে। এর মধ্যে ৩৬:৫৩ আয়াতের গড়ন প্রায় এই আয়াতেরই মতো: সেটা হবে কেবল একটিমাত্র চিৎকার, আর তখনই তাদের সবাইকে আমার সামনে হাজির করা হবে। ৩৬:৫১ আয়াতের ভাষা আবার আলাদা: ওয়া নুফিখা ফিস-সূর, আর সিঙ্গায় ফুঁ দেওয়া হলো। এখানে এর কোনোটাই নেই। আয়াত বলছে যাজরা, আর এই বাছাই আলাদা করে খেয়াল করার মতো।"
          },
          {
            "en": "The commentators do explain it with the other words. Al-Qurtubi and al-Baghawi both gloss zajra as sayha, and al-Baghawi and the Muyassar both call it a nafkha, a blowing. As-Sa'di says Israfil blows it in the Horn. So none of them treats the zajra as a separate event. What the word adds is a manner. A sayha is a cry, and a nafkha is a breath into the Horn. A zajra, in al-Qurtubi's explanation, is a cry with a purpose, the shout that drives. It is the same blast, named here by what it does to those who hear it.",
            "bn": "তাফসীরকারেরা অবশ্য অন্য শব্দগুলো দিয়েই এর ব্যাখ্যা করেন। কুরতুবী ও বাগাভী দুজনেই যাজরা-কে বলেন সাইহা। বাগাভী ও মুয়াসসার একে বলেন নাফখা, অর্থাৎ ফুঁ। সা'দীর ভাষায়, ইসরাফীল (আঃ) এটি সিঙ্গায় ফুঁকবেন। তাই কেউই যাজরা-কে আলাদা কোনো ঘটনা মনে করেন না। শব্দটি যা যোগ করে, তা হলো ধরন। সাইহা মানে চিৎকার, নাফখা মানে সিঙ্গায় ফুঁ। আর কুরতুবীর ব্যাখ্যায় যাজরা হলো উদ্দেশ্য নিয়ে দেওয়া ডাক, যে হাঁক তাড়িয়ে নিয়ে যায়। ঘটনা একই, এখানে শুধু তার নাম রাখা হয়েছে শ্রোতার উপর তার প্রভাব দিয়ে।"
          }
        ]
      },
      {
        "h": {
          "en": "Second Blowing, Single Command",
          "bn": "দ্বিতীয় ফুঁ, একটিমাত্র হুকুম"
        },
        "p": [
          {
            "en": "Which blowing is meant? Al-Qurtubi names it through al-Hasan: an-nafkha ath-thaniya, the second blowing, the one that raises the dead rather than the one that takes the living. Al-Baghawi says the same in his own words, nafkhat al-ba'th, the blowing of the raising. The Muyassar describes its result: they will be standing up out of their graves. Ma'arif al-Qur'an also calls it the second Horn. On this point the sources fetched for the verse agree, and none of them reads the zajra as the blast of death.",
            "bn": "কোন ফুঁয়ের কথা বলা হচ্ছে? কুরতুবী আল-হাসানের সূত্রে নাম দেন: আন-নাফখাতুস সানিয়া, দ্বিতীয় ফুঁ। অর্থাৎ যে ফুঁ মৃতদের উঠাবে, জীবিতদের প্রাণ কেড়ে নেওয়ার ফুঁটি নয়। বাগাভী নিজের ভাষায় একই কথা বলেন: নাফখাতুল বা'স, পুনরুত্থানের ফুঁ। মুয়াসসার জানায় তার ফল: তারা কবর থেকে উঠে দাঁড়াবে। মাআরিফুল কুরআনও একে দ্বিতীয় সিঙ্গা বলে। এ আয়াতের জন্য যেসব তাফসীর দেখা হয়েছে, এ বিষয়ে সেগুলো একমত। কেউই যাজরা-কে মৃত্যুর ফুঁ হিসেবে পড়েননি।"
          },
          {
            "en": "Ibn Kathir, in both the Arabic and the abridged English, puts the weight elsewhere. It is, he says, a single command from Allah: He calls them once to come out of the earth, and then they are standing before Him. Ma'arif al-Qur'an, citing Tafsir Kabir, adds a thought that sits well beside this. Allah in His power could raise the dead without the Horn being blown at all; it is blown to bring out the awe of the Resurrection. Read together, the two explanations place the power in the command, and the sound is how its awe is felt.",
            "bn": "ইবন কাসীর, আরবি মূল ও সংক্ষিপ্ত ইংরেজি দুটোতেই, জোর দেন অন্য জায়গায়। তাঁর মতে এটি আল্লাহর একটিমাত্র হুকুম। তিনি তাদের একবার ডাকবেন মাটি থেকে বেরিয়ে আসতে, আর তখনই তারা তাঁর সামনে দাঁড়িয়ে থাকবে। মাআরিফুল কুরআন তাফসীরে কাবীরের বরাতে এর পাশে মানানসই একটা ভাবনা যোগ করে। আল্লাহ চাইলে নিজ কুদরতে সিঙ্গায় ফুঁ ছাড়াই মৃতদের উঠাতে পারেন। সিঙ্গা ফুঁকা হবে কিয়ামতের ভয়াবহতা ফুটিয়ে তুলতে। দুটি ব্যাখ্যা পাশাপাশি রাখলে ক্ষমতাটা থাকে হুকুমের মধ্যে, আর আওয়াজ হলো সেই হুকুমের ভয়াবহতা টের পাওয়ার পথ।"
          }
        ]
      },
      {
        "h": {
          "en": "Four Ways of Looking",
          "bn": "দেখার চার রকম অর্থ"
        },
        "p": [
          {
            "en": "Fa-idha hum yanzurun: and at once, they are looking. Fa-idha marks suddenness; there is no interval between the cry and the open eyes. Al-Qurtubi first adds that they will be standing, then offers a range for what the looking is. His first reading is that they will look at each other. His second, introduced with wa-qila, it has been said, is that they will be waiting to see what is to be done with them, taking yanzurun in the sense of yantazirun, they wait. Ma'arif al-Qur'an, citing al-Qurtubi, phrases the first as people overtaken by wonder, turning to look at each other.",
            "bn": "ফা-ইযা হুম ইয়ানযুরূন: আর তখনই তারা তাকিয়ে আছে। 'ফা-ইযা' আকস্মিকতা বোঝায়। হাঁক আর চোখ খোলার মাঝে কোনো বিরতি নেই। কুরতুবী প্রথমে যোগ করেন, তারা দাঁড়িয়ে থাকবে। তারপর এই দেখা কেমন, তার কয়েকটি ব্যাখ্যা দেন। প্রথম ব্যাখ্যা: তারা একে অন্যের দিকে তাকাবে। দ্বিতীয়টি তিনি আনেন 'বলা হয়েছে' কথাটি দিয়ে: তাদের নিয়ে কী করা হবে, তারা তা দেখার অপেক্ষায় থাকবে। এখানে ইয়ানযুরূন মানে ইয়ানতাযিরূন, অপেক্ষা করে। মাআরিফুল কুরআন কুরতুবীর বরাতে প্রথম ব্যাখ্যাটি বলে এভাবে: বিস্ময়ে অভিভূত হয়ে তারা পরস্পরের দিকে তাকাতে থাকবে।"
          },
          {
            "en": "His third reading compares the verse with another: fa-idha hiya shakhisatun absaru alladhina kafaru, and then the eyes of those who disbelieved will be staring, fixed and unblinking. Al-Qurtubi quotes the phrase without a reference; it stands in 21:97. On this reading the look is not a glance around but the frozen stare of terror. His fourth reading turns to the object: they will be looking at the very raising they had denied. Ibn Kathir and the Muyassar give a related picture, of the risen standing and looking at the horrors of the Day of Resurrection.",
            "bn": "তৃতীয় ব্যাখ্যায় তিনি আয়াতটিকে আরেক আয়াতের সঙ্গে মিলিয়ে দেখেন: ফা-ইযা হিয়া শাখিসাতুন আবসারুল্লাযীনা কাফারূ, তখন কাফিরদের চোখ পলকহীন স্থির হয়ে থাকবে। কুরতুবী অংশটুকু উদ্ধৃত করেছেন কোনো সূত্র ছাড়া। এটি আছে ২১:৯৭ আয়াতে। এ ব্যাখ্যায় দেখাটা চারদিকে চোখ বোলানো নয়, আতঙ্কে জমে যাওয়া স্থির দৃষ্টি। চতুর্থ ব্যাখ্যা নজর দেয় দেখার বিষয়ের দিকে: যে পুনরুত্থানকে তারা অস্বীকার করেছিল, ঠিক সেটাই তারা দেখবে। ইবন কাসীর ও মুয়াসসার কাছাকাছি একটা ছবি দেন। পুনরুত্থিত মানুষ দাঁড়িয়ে কিয়ামতের বিভীষিকা দেখছে।"
          },
          {
            "en": "Two more glosses carry the range to its plainest end. Ma'arif al-Qur'an's own explanation is that they will see there just as they could see in the world. Al-Baghawi gives a single word, ahya', alive: to be looking is simply to be living again. This article does not choose among these. Each holds part of the moment: eyes that work again, eyes that search one another's faces, eyes that wait, eyes fixed in fear, and eyes that finally see what they once argued against. The verse keeps all of them inside its one verb.",
            "bn": "আরও দুটি ব্যাখ্যা পরিসরটাকে একেবারে সরল প্রান্ত পর্যন্ত নিয়ে যায়। মাআরিফুল কুরআনের নিজের ব্যাখ্যা হলো, দুনিয়াতে তারা যেমন দেখতে পেত, সেখানেও ঠিক তেমনি দেখতে পাবে। বাগাভী দেন মাত্র একটি শব্দ: আহইয়া, জীবিত। তাকিয়ে থাকা মানেই আবার বেঁচে ওঠা। এই লেখা এগুলোর কোনো একটিকে বেছে নেয় না। প্রতিটিতে মুহূর্তটার একেকটা অংশ ধরা আছে। চোখ আবার কাজ করছে, চোখ একে অন্যের মুখ খুঁজছে, চোখ অপেক্ষা করছে, চোখ ভয়ে স্থির, আর চোখ অবশেষে দেখছে সেই জিনিস, যার বিরুদ্ধে একদিন তর্ক করেছিল। আয়াতটি সবগুলোকে তার একটিমাত্র ক্রিয়ায় ধরে রেখেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "Raised as They Were Made",
          "bn": "যেমন প্রথমবার গড়া"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as a scene. Israfil blows the zajra in the Horn, and then they are raised from their graves, looking. They are raised, he says, as their creation was first begun, with every one of their parts: hufatan 'uratan ghurlan, barefoot, naked and uncircumcised. In that state, he continues, they show remorse, disgrace and loss. The details matter. Nothing that belonged to them in the first making is missing, and nothing they gathered in between comes with them: no shoes, no clothes, nothing added to the body they were born with.",
            "bn": "সা'দী আয়াতটিকে একটা দৃশ্য হিসেবে পড়েন। ইসরাফীল (আঃ) সিঙ্গায় যাজরাটি ফুঁকবেন, আর তখন তারা কবর থেকে উঠে তাকিয়ে থাকবে। তিনি বলেন, প্রথমবার যেভাবে তাদের সৃষ্টি শুরু হয়েছিল, সেভাবেই তাদের উঠানো হবে, শরীরের প্রতিটি অংশসহ: হুফাতান উরাতান গুরলান, খালি পা, বস্ত্রহীন, খতনাবিহীন। সেই অবস্থায়, তিনি আরও বলেন, তারা অনুশোচনা, লাঞ্ছনা আর ক্ষতির ছাপ প্রকাশ করবে। খুঁটিনাটিগুলো গুরুত্বপূর্ণ। প্রথম সৃষ্টিতে যা তাদের ছিল, তার কিছুই হারায়নি। আর মাঝখানে যা কিছু জমিয়েছিল, তার কিছুই সঙ্গে আসেনি। না জুতা, না কাপড়, জন্মের শরীরে বাড়তি কিছুই নেই।"
          },
          {
            "en": "As-Sa'di also says they will call out for woe and ruin. The words of that cry belong to the next verse, 37:20, and the reply given to them belongs to 37:21; both are left for their own place. What this verse holds is earlier and shorter: the instant of the blast and the first look. Before anyone speaks, there is only the shock of being whole again, of standing in a body that had become dust and bones. That is exactly what the deniers in 37:16 could not believe would happen.",
            "bn": "সা'দী এটাও বলেন, তারা হায় হায় করে ধ্বংস আর সর্বনাশকে ডাকবে। সেই আর্তনাদের কথাগুলো আছে পরের আয়াতে, ৩৭:২০-এ। আর তাদের যে জবাব দেওয়া হবে, তা ৩৭:২১ আয়াতে। দুটোকেই নিজ নিজ জায়গার জন্য রেখে দেওয়া হলো। এই আয়াতে যা আছে, তা তার আগের এবং আরও ছোট এক মুহূর্ত: হাঁক আর প্রথম দৃষ্টি। কেউ মুখ খোলার আগে আছে শুধু আবার পূর্ণ হয়ে ওঠার ধাক্কা। যে শরীর ধুলো আর হাড় হয়ে গিয়েছিল, সেই শরীরে দাঁড়িয়ে থাকা। ৩৭:১৬ আয়াতে অস্বীকারকারীরা ঠিক এটাকেই অবিশ্বাস্য ভেবেছিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Grave to Look Around",
          "bn": "চারপাশে তাকানোর ফুরসত নেই"
        },
        "p": [
          {
            "en": "As-Sa'di's three words match, word for word, a sound hadith. In Sahih al-Bukhari, number 6527, 'Aisha (RA) reports that the Messenger of Allah (peace be upon him) said: The people will be gathered barefooted, naked, and uncircumcised. She adds: I said, O Allah's Messenger (ﷺ)! Will the men and the women look at each other? He said: The situation will be too hard for them to pay attention to that. Its place in al-Bukhari's Sahih is his own mark of its soundness. Imam Muslim records the same report from 'Aisha (RA) at number 2859.",
            "bn": "সা'দীর তিনটি শব্দ হুবহু মিলে যায় একটি সহীহ হাদীসের সঙ্গে। সহীহ বুখারী, হাদীস ৬৫২৭-এ আয়েশা (রাঃ) বর্ণনা করেন, রাসূলুল্লাহ ﷺ বলেছেন: তোমাদের একত্র করা হবে খালি পায়ে, বস্ত্রহীন ও খতনাবিহীন অবস্থায়। আয়েশা (রাঃ) বলেন, আমি জিজ্ঞেস করলাম: হে আল্লাহর রাসূল! নারী-পুরুষ কি একে অপরের দিকে তাকাবে? তিনি বললেন: ব্যাপারটা এত কঠিন হবে যে, ওদিকে কারও মন দেওয়ার অবকাশ থাকবে না। ইমাম বুখারী তাঁর সহীহ গ্রন্থে এটি রেখেছেন, আর সেটাই তাঁর দৃষ্টিতে এর সহীহ হওয়ার চিহ্ন। ইমাম মুসলিমও আয়েশা (রাঃ) থেকে একই বর্ণনা এনেছেন, হাদীস ২৮৫৯-এ।"
          },
          {
            "en": "No tafsir fetched for this verse quotes the hadith, so it is a general narration, not attached to 37:19. Yet one detail meets the verse closely. 'Aisha's question uses the very phrase al-Qurtubi gives for his first reading of yanzurun: yanzuru ba'duhum ila ba'd, some of them looking at others. The answer does not settle al-Qurtubi's range. What it shows is how the gaze of that Day is described: so taken up by what is happening that what would fill a person's attention here no longer registers at all.",
            "bn": "এ আয়াতের জন্য দেখা কোনো তাফসীরে হাদীসটি উদ্ধৃত হয়নি। তাই এটি সাধারণ বর্ণনা, ৩৭:১৯ আয়াতের সঙ্গে যুক্ত নয়। তবু একটা খুঁটিনাটি আয়াতের খুব কাছে এসে পড়ে। আয়েশা (রাঃ)-এর প্রশ্নে ঠিক সেই বাক্যাংশটি আছে, যা দিয়ে কুরতুবী ইয়ানযুরূন-এর প্রথম ব্যাখ্যা দেন: ইয়ানযুরু বা'দুহুম ইলা বা'দ, একে অন্যের দিকে তাকানো। জবাবটি কুরতুবীর ব্যাখ্যাগুলোর মধ্যে ফয়সালা করে না। সেটা দেখায় সেদিনের দৃষ্টির চেহারা। যা ঘটছে তাতে মানুষ এতটাই ডুবে থাকবে যে, এখানে যা তার মন কেড়ে নিত, সেদিন তা চোখেই পড়বে না।"
          },
          {
            "en": "In Sahih al-Bukhari, number 3349, Ibn 'Abbas (RA) reports the same three words from the Prophet (peace be upon him), who then recited 21:104, the verse in which Allah says that as He began the first creation, He will repeat it. That narration, too, is general and not attached to this verse. It stands beside as-Sa'di's phrase about people raised as their creation was first begun. The first making and the second are set side by side, and the second needs no more from its maker than the first did.",
            "bn": "সহীহ বুখারী, হাদীস ৩৩৪৯-এ ইবন আব্বাস (রাঃ) নবী ﷺ থেকে একই তিনটি শব্দ বর্ণনা করেন। তারপর তিনি ২১:১০৪ আয়াত তিলাওয়াত করেন, যেখানে আল্লাহ বলেন, প্রথম সৃষ্টি যেভাবে শুরু করেছিলেন, সেভাবেই তা আবার করবেন। এই বর্ণনাটিও সাধারণ, এ আয়াতের সঙ্গে যুক্ত নয়। তবে এটি সা'দীর সেই কথার পাশে দাঁড়ায়, যেখানে তিনি বলেন মানুষকে উঠানো হবে যেভাবে তাদের সৃষ্টি প্রথম শুরু হয়েছিল। প্রথম গড়া আর দ্বিতীয় গড়া পাশাপাশি রাখা হয়েছে। আর দ্বিতীয়টির জন্য স্রষ্টার কাছে প্রথমটির চেয়ে বেশি কিছু লাগে না।"
          }
        ]
      },
      {
        "h": {
          "en": "Before the Driving Cry",
          "bn": "হাঁক আসার আগে"
        },
        "p": [
          {
            "en": "A plain word about whom the verse describes. The they of this verse are the deniers of 37:16 and 37:17, and Ma'arif al-Qur'an speaks of its effect on the disbelievers. The verse describes what it describes: the rising of those who denied the rising. It licenses nothing against any living person or community, and no reader is given here a right to name a neighbour among those who will wake in disgrace. It was given to its first listeners as a warning while there was still time, and it reaches every reader in the same way.",
            "bn": "আয়াতটি কাদের কথা বলছে, তা সোজাসুজি বলে রাখা দরকার। এখানে 'তারা' মানে ৩৭:১৬ ও ৩৭:১৭ আয়াতের অস্বীকারকারীরা। মাআরিফুল কুরআনও কাফিরদের উপর এর প্রভাবের কথা বলে। আয়াতটি শুধু তা-ই বর্ণনা করে, যা সে বর্ণনা করে: পুনরুত্থান অস্বীকারকারীদের পুনরুত্থান। জীবিত কোনো মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে এটি কিছুরই অনুমতি দেয় না। প্রতিবেশীকে লাঞ্ছিত হয়ে জেগে ওঠা লোকদের দলে গুনে ফেলার অধিকারও কোনো পাঠককে এখানে দেওয়া হয়নি। প্রথম শ্রোতাদের কাছে আয়াতটি এসেছিল সতর্কবাণী হয়ে, যখন সময় তখনো বাকি। প্রত্যেক পাঠকের কাছেও এটি আসে ঠিক সেভাবেই।"
          },
          {
            "en": "What remains is a sense of scale. Years of argument, the dust of every grave, the forefathers the deniers thought were beyond reach: all of it is answered by one driving cry. A shout that drives a herd is not a debate, and the herd does not discuss whether to rise. Nobody will discuss it then. The only room for choosing is now, before the cry. So the verse turns back on its reader with a question: what are your eyes on today? In that instant they will open, and they will be looking, and the time for choosing what to look at will be over.",
            "bn": "যা থেকে যায়, তা হলো মাপের একটা বোধ। বছরের পর বছর তর্ক, প্রতিটি কবরের ধুলো, যে পূর্বপুরুষদের অস্বীকারকারীরা নাগালের বাইরে ভেবেছিল, সবকিছুর জবাব একটিমাত্র তাড়ানোর হাঁক। পাল হাঁকানোর ডাক কোনো বিতর্ক নয়। পশুর পাল আলোচনা করে না, উঠবে কি উঠবে না। সেদিন কেউই আলোচনা করবে না। বেছে নেওয়ার সুযোগ কেবল এখন, হাঁক আসার আগে। তাই আয়াতটি পাঠকের দিকে ফিরে একটা প্রশ্ন রাখে: আজ আপনার চোখ কীসের উপর? সেই মুহূর্তে চোখ খুলবে, তাকিয়ে থাকবে। আর কী দেখবেন, তা বেছে নেওয়ার সময় তখন শেষ।"
          }
        ]
      }
    ]
  },
  "37:25": {
    "sections": [
      {
        "h": {
          "en": "A Procession Brought to a Halt",
          "bn": "থেমে যাওয়া এক মিছিল"
        },
        "p": [
          {
            "en": "The scene has been building for several verses. In 37:22 to 37:24 the command goes out to gather those who did wrong, together with their kind and what they used to worship besides Allah, to lead them along the path to the blazing Fire, and then to halt them, because they are to be questioned. Ibn Kathir's abridged commentary explains the halt: they are stopped so that they may be questioned about the things they did and said in this world. The procession stands still, and the first words it hears are this verse.",
            "bn": "দৃশ্যটা কয়েক আয়াত ধরে গড়ে উঠছে। ৩৭:২২ থেকে ৩৭:২৪ আয়াতে হুকুম আসে: যালিমদের জড়ো করো, তাদের সমগোত্রীয়দেরও, আর আল্লাহকে ছেড়ে তারা যাদের ইবাদত করত তাদেরও। তারপর জাহান্নামের পথ দেখিয়ে নিয়ে চলো, আর মাঝপথে থামাও, কারণ তাদের প্রশ্ন করা হবে। ইবন কাসীরের সংক্ষিপ্ত তাফসীর এই থামানোর কারণ বলে দেয়: দুনিয়ায় তারা যা করেছে আর যা বলেছে, সে সম্পর্কে জিজ্ঞাসাবাদের জন্যই তাদের দাঁড় করানো হয়। মিছিলটা থেমে যায়। আর প্রথম যে কথা তাদের কানে আসে, তা এই আয়াত।"
          },
          {
            "en": "Ma'arif al-Qur'an, commenting on these verses as a group, places the halt near the Bridge of Sirat: when the angels lead them away and draw close to it, the order to stop them is given, and there they are questioned about their beliefs and their deeds. Yet what comes first is not a list of charges. It is four Arabic words, ma lakum la tanasarun: what is the matter with you, that you do not help each other? The rest of this page stays with those four words.",
            "bn": "মাআরিফুল কুরআন এই আয়াতগুলো একসঙ্গে আলোচনা করে থামার জায়গাটা দেখায় পুলসিরাতের কাছে। ফেরেশতারা তাদের নিয়ে যেতে যেতে পুলের কাছাকাছি পৌঁছালে থামানোর হুকুম আসে, আর সেখানেই তাদের বিশ্বাস ও আমল নিয়ে প্রশ্ন করা হয়। তবু প্রথমে যা আসে, তা অভিযোগের ফর্দ নয়। আসে আরবি চারটি শব্দ: মা লাকুম লা তানাসারূন। তোমাদের হয়েছে কী, একে অপরকে সাহায্য করছ না কেন? এ লেখার বাকিটা এই চার শব্দকে ঘিরেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Help That Ran Both Ways",
          "bn": "পরস্পরের সাহায্য, এখন উধাও"
        },
        "p": [
          {
            "en": "Ma lakum is an idiom of reproach, literally what is to you, meaning what has come over you. As-Sa'di opens it into two questions of his own: what has happened to you today, and what has befallen you, that none of you helps another and none of you comes to another's rescue? Every commentator fetched for this verse glosses the verb the same way: yansuru ba'dukum ba'dan, some of you helping others. The question is not why no help reaches them. It is why a crowd that once stood together has stopped acting like one.",
            "bn": "মা লাকুম ভর্ৎসনার একটা চেনা বাগধারা। শব্দে শব্দে মানে, তোমাদের কী আছে; আসলে মানে, তোমাদের কী হলো। সা'দী একে খুলে বলেন নিজের দুটি প্রশ্নে: আজ তোমাদের উপর কী ঘটে গেল? কী এমন নেমে এল যে তোমাদের কেউ কাউকে সাহায্য করছ না, বিপদে কেউ কারও পাশে দাঁড়াচ্ছ না? এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, সবাই ক্রিয়াটির একই ব্যাখ্যা দেন: ইয়ানসুরু বা'দুকুম বা'দান, তোমাদের একজন আরেকজনকে সাহায্য করে। প্রশ্নটা তাই এ নয় যে বাইরে থেকে সাহায্য আসছে না কেন। প্রশ্ন হলো, যে দল একসময় একজোট ছিল, সে আজ আর দলের মতো আচরণ করছে না কেন।"
          },
          {
            "en": "Al-Qurtubi adds a short note on the word's shape. It was originally tatanasarun, beginning with two ta' sounds, and one of them was dropped to make it lighter on the tongue; al-Baghawi likewise glosses it as la tatanasarun. Al-Qurtubi also records that al-Bazzi doubled the ta' in connected recitation, when the word is joined to what precedes it. The point is one of pronunciation only, and the meaning stays the same: mutual help, asked about at the moment it has vanished.",
            "bn": "শব্দটির গঠন নিয়ে কুরতুবী ছোট্ট একটি কথা যোগ করেন। মূল রূপ ছিল তাতানাসারূন, শুরুতে দুটি 'তা'। উচ্চারণ হালকা করার জন্য একটি বাদ পড়েছে। বাগাভীও একে ব্যাখ্যা করেন লা তাতানাসারূন বলে। কুরতুবী আরও জানান, আগের শব্দের সঙ্গে মিলিয়ে পড়ার সময় বাযযী 'তা'-কে তাশদীদ দিয়ে পড়তেন। ব্যাপারটা কেবল উচ্চারণের, অর্থে কোনো পার্থক্য নেই। অর্থ একটাই: পরস্পরের সাহায্য, আর সেই সাহায্যের খোঁজ নেওয়া হচ্ছে ঠিক তখন, যখন তা হারিয়ে গেছে।"
          }
        ]
      },
      {
        "h": {
          "en": "A Question That Knows Its Answer",
          "bn": "যে প্রশ্নের উত্তর জানা"
        },
        "p": [
          {
            "en": "The commentators agree that this is not a request for information. Ibn Kathir says it is said to them by way of taqri' and tawbikh, harsh reproach and rebuke, and al-Qurtubi uses the very same pair of words. The Muyassar and al-Baghawi each call it tawbikh, a rebuke. A question of this kind already knows its answer. Its work is to make the person asked feel the gap between what he once claimed and what he now is. At-Tabari keeps his paraphrase to a single line, naming whom it addresses: you who associated partners with Allah.",
            "bn": "তাফসীরকারেরা একমত যে এখানে কিছু জানতে চাওয়া হচ্ছে না। ইবন কাসীর বলেন, কথাটা তাদের বলা হয় তাকরী' ও তাওবীখের ভঙ্গিতে, অর্থাৎ কড়া ধমক আর তিরস্কার হিসেবে। কুরতুবীও ঠিক এই দুটি শব্দই ব্যবহার করেন। মুয়াসসার ও বাগাভী দুজনেই একে বলেন তাওবীখ, তিরস্কার। এমন প্রশ্নের উত্তর আগে থেকেই জানা। এর কাজ হলো, যাকে প্রশ্ন করা হচ্ছে, তাকে টের পাইয়ে দেওয়া যে একসময় সে কী দাবি করত আর আজ সে কোথায় দাঁড়িয়ে। তাবারী এক লাইনেই কথা শেষ করেন, আর জানিয়ে দেন কাদের উদ্দেশে বলা: হে আল্লাহর সঙ্গে শরীককারীরা।"
          },
          {
            "en": "Who speaks the words? Al-Baghawi names the speakers: the keepers of the Fire say it to them. Ibn Kathir, the Muyassar and as-Sa'di leave the speaker unnamed and say only that it is said to them. These do not clash, since the passive leaves room for al-Baghawi's detail, but only al-Baghawi supplies it. Al-Qurtubi gives the rebuke its edge: help one another, he paraphrases, so that one of you might hold back Allah's punishment from another. That is exactly the thing none of them can now do.",
            "bn": "কথাটা কে বলে? বাগাভী বক্তার নাম বলেন: জাহান্নামের রক্ষীরা তাদের এ কথা বলবে। ইবন কাসীর, মুয়াসসার ও সা'দী বক্তার নাম নেন না, শুধু বলেন, তাদের বলা হবে। এতে বিরোধ নেই। কে বলবে তা খোলা রাখা হয়েছে, বাগাভীর বিবরণের জায়গাও তাই আছে। তবে বিবরণটা কেবল বাগাভীর কাছেই পাওয়া যায়। কুরতুবী ধমকটাকে আরও ধারালো করেন। তাঁর ব্যাখ্যায় প্রশ্নটা এই: একে অপরকে সাহায্য করো না কেন, যাতে একজন আরেকজনকে আল্লাহর আযাব থেকে আড়াল করতে পারো? ঠিক এই কাজটাই আজ তাদের কারও সাধ্যে নেই।"
          }
        ]
      },
      {
        "h": {
          "en": "Abu Jahl's Boast at Badr",
          "bn": "বদরের দিনে আবু জাহলের দম্ভ"
        },
        "p": [
          {
            "en": "Two commentators tie the question to one man. Al-Baghawi states it plainly: this is an answer to Abu Jahl, who said on the day of Badr, nahnu jami'un muntasir, we are a united host, sure to prevail. He marks those words as the boast quoted in 54:44. Al-Qurtubi records the same link more cautiously, introducing it with wa-qila, it has been said: the verse points to what Abu Jahl said on the day of Badr. Al-Baghawi gives the connection as his own explanation; al-Qurtubi reports it as a reading beside his main gloss.",
            "bn": "দুজন তাফসীরকার প্রশ্নটিকে একজন নির্দিষ্ট মানুষের সঙ্গে জুড়ে দেন। বাগাভী সোজাসুজি বলেন, এ হলো আবু জাহলের জবাব। বদরের দিনে সে বলেছিল, নাহনু জামী'উন মুনতাসির: আমরা এক ঐক্যবদ্ধ বাহিনী, আমাদের জয় নিশ্চিত। বাগাভী এই কথাগুলোকে চিহ্নিত করেন ৫৪:৪৪ আয়াতে উদ্ধৃত দম্ভ হিসেবে। কুরতুবীও একই সংযোগের কথা আনেন, তবে সাবধানে, 'ওয়া কীলা', অর্থাৎ 'বলা হয়েছে' দিয়ে শুরু করে: আয়াতটি বদরের দিনে আবু জাহলের কথার দিকে ইঙ্গিত করে। বাগাভীর কাছে এটা তাঁর নিজের ব্যাখ্যা। কুরতুবী একে রাখেন তাঁর মূল ব্যাখ্যার পাশে আরেকটি মত হিসেবে।"
          },
          {
            "en": "Ibn Kathir does not name Abu Jahl, but his gloss uses the same words. The rebuke means, he says, just as you claimed that you were jami'un muntasir. The phrase that sounded like strength in this world returns in the next as a question nobody can answer. The wording fits closely: muntasir and tanasarun come from the same root, n-s-r, the root of help and victory. A host that boasted it would prevail is asked why its members cannot even help each other.",
            "bn": "ইবন কাসীর আবু জাহলের নাম নেন না, কিন্তু তাঁর ব্যাখ্যায় হুবহু সেই শব্দগুলোই আসে। তিনি বলেন, ধমকের মানে হলো: তোমরা তো দাবি করতে, তোমরা জামী'উন মুনতাসির। দুনিয়ায় যে কথা শক্তির মতো শোনাত, আখিরাতে তা ফিরে আসে এমন এক প্রশ্ন হয়ে, যার উত্তর কারও কাছে নেই। শব্দের মিলটাও লক্ষ করার মতো। মুনতাসির আর তানাসারূন, দুটোই এসেছে ন-স-র ধাতু থেকে, যার মধ্যে আছে সাহায্য আর বিজয় দুই অর্থই। যে বাহিনী গর্ব করত সে জিতবেই, তাকেই জিজ্ঞেস করা হচ্ছে, তোমরা একে অপরকে একটু সাহায্যও করতে পারছ না কেন?"
          },
          {
            "en": "None of the commentators fetched for this verse presents the Badr boast as the occasion on which the verse was revealed, and this page does not treat it as one. What they draw is a line of meaning, a boast spoken in this world set beside the question that answers it in the next. Read this way, the verse holds two moments together: a day when a crowd felt it could not be beaten, and a Day when that same claim is handed back to those who made it. The verse 54:44 is cited here by number only; its setting belongs to its own page.",
            "bn": "এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, তার কোনোটিই বদরের এই দম্ভকে আয়াত নাযিলের প্রেক্ষাপট হিসেবে উপস্থাপন করে না। এ লেখাও তাকে সেভাবে ধরছে না। তাফসীরকারেরা যা দেখান, তা অর্থের একটা যোগসূত্র। দুনিয়ায় উচ্চারিত এক দম্ভ, আর তার পাশে আখিরাতের সেই প্রশ্ন, যা তার জবাব। এভাবে পড়লে আয়াতটি দুটি মুহূর্তকে পাশাপাশি রাখে। এক দিন, যেদিন একটা দল ভেবেছিল তাদের হারানো অসম্ভব। আর সেই দিন, যেদিন ঠিক সেই দাবিটাই দাবিদারদের হাতে ফিরিয়ে দেওয়া হবে। ৫৪:৪৪ আয়াতটির এখানে শুধু নম্বর উল্লেখ করা হলো। এর প্রেক্ষাপট নিয়ে আলোচনা হবে তার নিজের জায়গায়।"
          }
        ]
      },
      {
        "h": {
          "en": "A Named Man, No Licence",
          "bn": "নাম আছে, ছাড়পত্র নেই"
        },
        "p": [
          {
            "en": "Because a named man appears here in a scene of the Fire, this needs saying plainly. The verse describes what the text describes: those who did wrong, gathered with what they worshipped besides Allah, rebuked on the Day of Judgement. The commentators connect its words to one man's boast at Badr. That connection licenses nothing against any living person or community. It gives no one the right to cast a neighbour, a rival, a party or a people as the ones being taunted, or to speak of anyone alive as bound for the Fire. That judgement belongs to Allah alone.",
            "bn": "জাহান্নামের দৃশ্যে এখানে একজন মানুষের নাম এসেছে, তাই কথাটা সোজাসুজি বলা দরকার। আয়াতটি কেবল সেটুকুই বর্ণনা করে, যা এর ভাষায় আছে: যারা জুলুম করেছে, আল্লাহকে ছেড়ে যাদের ইবাদত করত তাদের সঙ্গে তাদের জড়ো করা হয়েছে, আর বিচারের দিনে তাদের তিরস্কার করা হচ্ছে। তাফসীরকারেরা এর শব্দকে বদরের দিনের এক মানুষের দম্ভের সঙ্গে মিলিয়েছেন। এই সংযোগ আজকের কোনো জীবিত মানুষ বা কোনো সম্প্রদায়ের বিরুদ্ধে কিছুরই অনুমতি দেয় না। প্রতিবেশী, প্রতিদ্বন্দ্বী, কোনো দল বা কোনো জাতিকে এই তিরস্কারের পাত্র বানানোর অধিকার এটা কাউকে দেয় না। জীবিত কাউকে জাহান্নামি বলে ঘোষণা করার অধিকারও দেয় না। সেই ফয়সালা কেবল আল্লাহর।"
          },
          {
            "en": "The verse turns the question the other way. It is addressed to people who once trusted their numbers and their gods over Allah, and an honest reader asks first whether anything of that trust lives in himself. To read it as a weapon against others would repeat the very mistake it exposes, which is blind confidence in the strength of our own side. The taunt was meant for those who would not listen, and it was recorded for those who still can. It is a warning held up before the reader, not a verdict handed to him.",
            "bn": "আয়াতটি প্রশ্নটাকে উল্টো দিকে ঘুরিয়ে দেয়। এর সম্বোধন তাদের প্রতি, যারা আল্লাহর চেয়ে নিজেদের সংখ্যা আর নিজেদের উপাস্যদের উপর বেশি ভরসা করত। সৎ পাঠক তাই আগে নিজেকে জিজ্ঞেস করেন, সেই ভরসার কিছু কি আমার ভেতরেও বেঁচে আছে? অন্যদের বিরুদ্ধে একে হাতিয়ার বানালে ঠিক সেই ভুলটাই আবার করা হয়, যা আয়াতটি উন্মোচন করে: নিজের দলের উপর অন্ধ আস্থা। ধমকটা ছিল তাদের জন্য, যারা শুনতে চায়নি। আর লিখে রাখা হয়েছে তাদের জন্য, যারা এখনো শুনতে পারে। এ আয়াত পাঠকের সামনে তুলে ধরা এক সতর্কবাণী, তার হাতে তুলে দেওয়া কোনো রায় নয়।"
          }
        ]
      },
      {
        "h": {
          "en": "Their Gods Standing Beside Them",
          "bn": "পাশেই দাঁড়িয়ে তাদের উপাস্যরা"
        },
        "p": [
          {
            "en": "As-Sa'di draws out the full irony. In this world, he says, they used to claim that their gods would ward off the punishment from them, come to their rescue, and intercede for them with Allah. The question exposes all three claims at once. Nor are those gods absent. Ibn Kathir's abridged commentary, on 37:22 and 37:23, says that their idols and false gods will be gathered together with them in the same place. Whatever was meant to shield them is standing right beside them, and the question still comes. The point is not distance but helplessness.",
            "bn": "সা'দী পুরো বিদ্রূপটা খুলে দেখান। তিনি বলেন, দুনিয়ায় তারা দাবি করত, তাদের উপাস্যরা তাদের থেকে আযাব সরিয়ে দেবে, বিপদে উদ্ধার করবে, আর আল্লাহর কাছে তাদের জন্য সুপারিশ করবে। প্রশ্নটা তিনটি দাবিকেই একসঙ্গে মিথ্যা প্রমাণ করে দেয়। আর উপাস্যরা অনুপস্থিতও নয়। ইবন কাসীরের সংক্ষিপ্ত তাফসীর ৩৭:২২ ও ৩৭:২৩ আয়াতের ব্যাখ্যায় বলে, তাদের মূর্তি আর মিথ্যা উপাস্যদেরও তাদের সঙ্গে একই জায়গায় জড়ো করা হবে। যাদের কাজ ছিল ঢাল হয়ে দাঁড়ানো, তারা পাশেই দাঁড়িয়ে আছে। তবু প্রশ্নটা আসে। সমস্যাটা দূরত্বের নয়, অক্ষমতার।"
          },
          {
            "en": "This is what gives the four words their weight. The rebuke is not that help failed to arrive from somewhere far away. Everything they relied on is present: the companions, the crowd, the objects of worship. Ibn Kathir, citing early authorities, explains their kind in 37:22 as their counterparts, those like them, and also as their friends. The kind of host that was once boasted of is, in a sense, fully assembled. Its members simply cannot do for each other the only thing that now matters.",
            "bn": "চারটি শব্দের ভার এখান থেকেই আসে। ধমকটা এ জন্য নয় যে দূর থেকে সাহায্য আসতে দেরি হচ্ছে। যাদের উপর তারা ভরসা করত, সবাই হাজির: সঙ্গী, দলবল, উপাস্য। ইবন কাসীর পূর্বসূরিদের উদ্ধৃত করে ৩৭:২২ আয়াতের 'তাদের সমগোত্রীয়' কথাটির ব্যাখ্যা দেন: যারা তাদের মতো, আবার তাদের বন্ধুরাও। একসময় যে ধরনের বাহিনী নিয়ে দম্ভ করা হয়েছিল, এক অর্থে তা পুরোটাই আজ জড়ো। শুধু এখন যে কাজটা আসলে দরকার, সেটা তারা একে অপরের জন্য করতে পারে না।"
          }
        ]
      },
      {
        "h": {
          "en": "No Reply Comes Back",
          "bn": "কোনো উত্তর ফেরে না"
        },
        "p": [
          {
            "en": "Then as-Sa'di names what sits at the heart of the verse. It is as if they do not answer this question, he writes, because humiliation and lowliness have come over them; they have given themselves up to the punishment of the Fire, grown humbled, submissive and despairing, fa-lam yantiqu, and so they do not speak. A question that already knows its answer is met with exactly that answer. People who in this world had words enough for their boasts and their arguments now have none left. This silence is not calm; every word as-Sa'di chooses for it is a word of defeat.",
            "bn": "এরপর সা'দী আয়াতের মর্মস্থলটা দেখিয়ে দেন। তিনি লেখেন, যেন তারা এ প্রশ্নের কোনো জবাবই দেয় না। কারণ অপমান আর হীনতা তাদের ঢেকে ফেলেছে। জাহান্নামের আযাবের কাছে তারা নিজেদের সঁপে দিয়েছে। তারা নত, অবনত, সব আশা হারানো। ফালাম ইয়ানতিকূ: তাই তারা মুখ খোলে না। যে প্রশ্নের উত্তর আগে থেকেই জানা, সে ঠিক সেই উত্তরটাই পায়। দুনিয়ায় দম্ভ আর তর্কের জন্য যাদের মুখে কথার অভাব ছিল না, আজ তাদের মুখে একটি শব্দও নেই। এ নীরবতা শান্তির নয়। সা'দী একে বোঝাতে যত শব্দ বেছেছেন, সবই পরাজয়ের।"
          },
          {
            "en": "As-Sa'di frames it with as if, and the framing matters. The verse itself is only the question; it leaves the reply blank, and the blank is the reply. That silence is the emotional core of these four words. No defence is offered here, and no blame has yet begun to pass between them. What the following verses go on to show about their state, and about the exchange between followers and leaders, belongs to those verses' own pages. This verse ends on a question left hanging, unanswered.",
            "bn": "সা'দী কথাটা বলেন 'যেন' শব্দ দিয়ে, আর এটা গুরুত্বপূর্ণ। আয়াতটিতে আছে শুধু প্রশ্ন। উত্তরের জায়গাটা ফাঁকা, আর সেই ফাঁকাটাই উত্তর। চারটি শব্দের এই আয়াতের আবেগের কেন্দ্র এই নীরবতা। এখানে কোনো আত্মপক্ষ সমর্থন নেই। একে অপরকে দোষারোপও তখনো শুরু হয়নি। তাদের অবস্থা নিয়ে পরের আয়াতগুলো কী বলে, অনুসারী আর নেতাদের মধ্যে কী কথা চলে, তা সেই আয়াতগুলোর নিজের জায়গায় আলোচিত হবে। এই আয়াত থেমে যায় এক ঝুলে থাকা প্রশ্নে, যার উত্তর আসে না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Company Kept Before the Halt",
          "bn": "থামার আগে বেছে নেওয়া সঙ্গ"
        },
        "p": [
          {
            "en": "Ibn Kathir places a saying just before this verse. 'Abdullah ibn al-Mubarak said he heard 'Uthman ibn Za'idah say that the first thing a man will be asked about is the people he used to sit with; then, by way of rebuke, it will be said to them: what is the matter with you, that you do not help one another? This is the saying of an early scholar, reported by Ibn Kathir, not a hadith of the Prophet ﷺ. None of the commentaries fetched for this verse attaches a hadith to it, and none is added here.",
            "bn": "ইবন কাসীর এ আয়াতের ঠিক আগে একটি উক্তি আনেন। আব্দুল্লাহ ইবনুল মুবারক বলেন, তিনি উসমান ইবন যায়েদাকে বলতে শুনেছেন: মানুষকে সবার আগে জিজ্ঞেস করা হবে তার উঠাবসার সঙ্গীদের কথা। তারপর ধমক দিয়ে তাদের বলা হবে, তোমাদের হলো কী, একে অপরকে সাহায্য করছ না কেন? এটা একজন প্রথম যুগের আলেমের কথা, ইবন কাসীর তা উদ্ধৃত করেছেন। এটা নবী ﷺ-এর হাদীস নয়। এ আয়াতের জন্য যত তাফসীর দেখা হয়েছে, তার কোনোটিই আয়াতটির সঙ্গে কোনো হাদীস যুক্ত করেনি, তাই এখানেও কোনো হাদীস আনা হয়নি।"
          },
          {
            "en": "The saying and the verse point the same way. The company a person keeps in this world is not left behind; it is gathered with him. So the question worth asking is less whether my friends are strong and more whether they help me toward Allah or away from Him, because only help of the first kind will count for anything when every other alliance has fallen silent. Families, groups, causes and loyalties are good when they are bound to obedience, and empty when they take its place.",
            "bn": "উক্তিটি আর আয়াতটি একই দিকে ইশারা করে। দুনিয়ায় মানুষ যাদের সঙ্গে চলে, তারা পেছনে পড়ে থাকে না, তাদের তার সঙ্গেই জড়ো করা হয়। তাই আসল প্রশ্নটা এ নয় যে আমার বন্ধুরা কত শক্তিশালী। প্রশ্ন হলো, তারা আমাকে আল্লাহর দিকে এগিয়ে দেয়, নাকি তাঁর থেকে দূরে সরায়। কারণ বাকি সব জোট যেদিন চুপ হয়ে যাবে, সেদিন কেবল প্রথম ধরনের সাহায্যেরই কোনো দাম থাকবে। পরিবার, দল, আন্দোলন, আনুগত্য, সবই ভালো, যতক্ষণ তা আল্লাহর আনুগত্যের সঙ্গে বাঁধা। আনুগত্যের জায়গা দখল করে নিলে এগুলো ফাঁপা।"
          },
          {
            "en": "So the verse leaves a test to take now, while words still come easily. Whom do I rely on, and for what? Does my sense of safety come from numbers, from belonging, from being on the side that seems to be winning? A host once said it would prevail, and it was asked a question it could not answer. The better course is to be able to say, before that halt, that my trust was placed in Allah and my company was chosen with Him in mind.",
            "bn": "আয়াতটি তাই এখনই দেওয়ার মতো একটা পরীক্ষা রেখে যায়, যখন মুখে কথা সহজেই আসে। আমি কার উপর ভরসা করি, আর কীসের জন্য? আমার নিরাপদ বোধ কি আসে সংখ্যা থেকে, কোনো দলের অংশ হওয়া থেকে, কিংবা যে পক্ষ জিতছে বলে মনে হয় তার সঙ্গে থাকা থেকে? এক বাহিনী একদিন বলেছিল সে জিতবেই, আর তাকে এমন প্রশ্ন করা হলো, যার উত্তর তার কাছে ছিল না। ভালো পথ হলো, সেই থামার আগেই যেন বলতে পারি: আমার ভরসা ছিল আল্লাহর উপর, আর সঙ্গী বেছেছিলাম তাঁকে মনে রেখে।"
          }
        ]
      }
    ]
  },
  "37:35": {
    "sections": [
      {
        "h": {
          "en": "The Reason Behind the Verdict",
          "bn": "রায়ের পেছনের কারণ"
        },
        "p": [
          {
            "en": "The verses before this one stage a quarrel in the Fire: followers blame leaders, leaders answer that the followers were never believers, and 37:33 says that on that Day all of them share the punishment. Then 37:34: indeed, that is how We deal with the criminals. This verse gives the ground of that verdict. Innahum kanu: indeed they used to be, and Ibn Kathir adds the place, in the world. The crime that brought them to that Day was a response, repeated in this life, to one short sentence.",
            "bn": "এর আগের আয়াতগুলোতে আগুনের ভেতরের এক ঝগড়ার ছবি। অনুসারীরা নেতাদের দোষ দেয়, নেতারা জবাব দেয়, তোমরা তো কখনো ঈমানই আনোনি। ৩৭:৩৩ আয়াত বলে, সেদিন তারা সবাই শাস্তিতে শরীক। তারপর ৩৭:৩৪: অপরাধীদের সঙ্গে আমি এমনই করে থাকি। এ আয়াত সেই রায়ের কারণ জানিয়ে দেয়। ইন্নাহুম কানূ: তারা ছিল এমন। ইবন কাসীর জায়গাটাও বলে দেন: দুনিয়ার জীবনে। যে অপরাধ তাদের সেই দিনে টেনে এনেছে, তা ছোট্ট একটি বাক্যের জবাবে দুনিয়াতে বারবার দেওয়া এক উত্তর।"
          },
          {
            "en": "At-Tabari names who is meant: these polytheists, whose description runs through these verses, were in the world such that when they were told to say there is no god but Allah, they were too proud. He adds that the people of interpretation said the same, and cites as-Suddi: it means the polytheists in particular. The Muyassar keeps to that frame: those polytheists, when called to the word and commanded to leave whatever contradicts it, were arrogant towards it and towards him who brought it.",
            "bn": "কারা উদ্দেশ্য, তাবারী তা স্পষ্ট করেন। এ আয়াতগুলোতে যাদের বর্ণনা চলছে, সেই মুশরিকদের অবস্থা দুনিয়াতে ছিল এই: লা ইলাহা ইল্লাল্লাহ বলতে বললে তারা অহংকারে ফুলে উঠত। তিনি জানান, তাফসীরের আলেমরাও এমনই বলেছেন, আর সুদ্দীর কথা আনেন: এর দ্বারা বিশেষভাবে মুশরিকদের বোঝানো হয়েছে। মুয়াসসারও এই কাঠামোতেই থাকে। ওই মুশরিকদের যখন কালেমার দিকে ডাকা হত আর এর বিরোধী সব কিছু ছাড়তে বলা হত, তখন তারা কালেমার বিরুদ্ধে আর তার বাহকের বিরুদ্ধে অহংকার দেখাত।"
          }
        ]
      },
      {
        "h": {
          "en": "The Unspoken Command, Say",
          "bn": "না-বলা আদেশ: বলো"
        },
        "p": [
          {
            "en": "Read literally, the verse says: when it was said to them, there is no god but Allah. At-Tabari points out what is missing. The sense is: when it was said to them, say there is no god but Allah. The word say has been left out, he explains, because the speech itself makes it plain. Al-Qurtubi gives the same analysis briefly: the saying was left implied. The effect is that the kalima stands in the verse bare, the very words they were asked to repeat.",
            "bn": "শব্দে শব্দে পড়লে আয়াতটি বলে: যখন তাদের বলা হত, আল্লাহ ছাড়া কোনো ইলাহ নেই। তাবারী দেখিয়ে দেন, এখানে একটা শব্দ উহ্য। আসল অর্থ: যখন তাদের বলা হত, বলো, লা ইলাহা ইল্লাল্লাহ। তাঁর ব্যাখ্যায়, 'বলো' শব্দটি বাদ পড়েছে কারণ বাক্যের ভেতর থেকেই তা বোঝা যায়। কুরতুবীও সংক্ষেপে একই কথা বলেন: 'বলা' শব্দটি এখানে উহ্য রাখা হয়েছে। ফলে আয়াতের ভেতরে কালেমাটি দাঁড়িয়ে আছে একেবারে খালি অবস্থায়, ঠিক যে কথাগুলো তাদের মুখে উচ্চারণ করতে বলা হয়েছিল।"
          },
          {
            "en": "Al-Qurtubi adds a small point of grammar. Yastakbirun, they are arrogant, can be read as the predicate of kana, or as the predicate of inna with kana treated as adding nothing to the meaning. Either way the sense holds. The tense matters more for a reader: kanu with a present verb describes a habit. This was not one bad afternoon. Whenever the words were put to them, the same reaction came back, and it is that settled habit the verse records.",
            "bn": "কুরতুবী ব্যাকরণের ছোট একটি দিকও তুলে ধরেন। ইয়াসতাকবিরূন, অর্থাৎ তারা অহংকার করত, শব্দটিকে কানা-র বিধেয় ধরা যায়। আবার ইন্না-র বিধেয়ও ধরা যায়, তখন কানা অর্থে নতুন কিছু যোগ করে না। দুইভাবেই অর্থ একই থাকে। পাঠকের কাছে বেশি গুরুত্বপূর্ণ ক্রিয়ার কাল। অতীতের কানা-র সঙ্গে বর্তমান কালের ক্রিয়া মিলে বোঝায় অভ্যাস। ব্যাপারটা একবারের কোনো খারাপ মুহূর্ত ছিল না। যখনই কথাগুলো তাদের সামনে রাখা হত, একই প্রতিক্রিয়া ফিরে আসত। আয়াতটি সেই পাকা হয়ে যাওয়া অভ্যাসেরই দলিল।"
          }
        ]
      },
      {
        "h": {
          "en": "Too Grand to Repeat It",
          "bn": "উচ্চারণেও যাদের মানহানি"
        },
        "p": [
          {
            "en": "What does yastakbirun mean here? At-Tabari uses two verbs: they held themselves too great to say it, and they behaved with pride. Al-Baghawi says they were too proud for the word of tawhid and refused it. Ibn Kathir reads it closely: they were too arrogant to say it as the believers say it. The phrase as the believers say it is telling. The words themselves were not hard to pronounce. What they would not do was stand in the same line as the people who said them.",
            "bn": "এখানে ইয়াসতাকবিরূন মানে কী? তাবারী দুটি ক্রিয়া ব্যবহার করেন: কথাটা বলাকে তারা নিজেদের মর্যাদার চেয়ে নিচু ভাবত, আর দম্ভ দেখাত। বাগাভী বলেন, তাওহীদের কালেমা থেকে তারা অহংকারে মুখ ফিরিয়ে নিত আর তা বলতে অস্বীকার করত। ইবন কাসীর আরও সূক্ষ্মভাবে পড়েন: মুমিনরা যেভাবে বলে, সেভাবে বলতে তাদের অহংকারে বাধত। 'মুমিনরা যেভাবে বলে' কথাটুকু অনেক কিছু বলে দেয়। শব্দগুলো উচ্চারণ করা কঠিন ছিল না। কঠিন ছিল তাদের সারিতে দাঁড়ানো, যারা এ কথা বলে।"
          },
          {
            "en": "As-Suddi's note, that the polytheists in particular are meant, keeps the verse tied to its own people. In the passage, these are the ones who worshipped other gods beside Allah, and 37:22 has them gathered on that Day together with what they used to worship. The arrogance, then, has a definite shape: the call asked them to let go of every other object of worship, and they would not let go.",
            "bn": "সুদ্দী যে বলেছেন বিশেষভাবে মুশরিকরাই উদ্দেশ্য, সে কথা আয়াতটিকে তার নিজের লোকদের সঙ্গে বেঁধে রাখে। এ অংশে তারাই সেই লোক, যারা আল্লাহর পাশাপাশি অন্য উপাস্যের পূজা করত। ৩৭:২২ আয়াত বলে, সেদিন তাদের জড়ো করা হবে তাদের সেই উপাস্যদের সঙ্গেই। তাই এ অহংকারের একটা নির্দিষ্ট চেহারা আছে। ডাক এসেছিল অন্য সব উপাস্য ছেড়ে দেওয়ার, আর তারা ছাড়তে রাজি হয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Crime at Its Furthest Reach",
          "bn": "অপরাধের শেষ সীমা"
        },
        "p": [
          {
            "en": "As-Sa'di reads the verse as the end point of a progression. Having said that this is how criminals are dealt with, Allah then mentions, in his words, that their crime had reached the limit and passed the furthest bound. When there is no god but Allah was said to them, they were called to it and commanded to abandon the divinity of everything besides Him, and they were arrogant towards it and towards him who brought it.",
            "bn": "সা'দী আয়াতটিকে এক ধারাবাহিকতার শেষ বিন্দু হিসেবে পড়েন। অপরাধীদের সঙ্গে এমনই করা হয়, এ কথা বলার পর আল্লাহ জানাচ্ছেন, তাঁর ভাষায়, তাদের অপরাধ চূড়ান্ত সীমায় পৌঁছে গিয়েছিল, শেষ সীমাও পেরিয়ে গিয়েছিল। লা ইলাহা ইল্লাল্লাহ যখন তাদের বলা হত, তখন তাদের এর দিকে ডাকা হত, আর তিনি ছাড়া অন্য সবকিছুর উপাস্য হওয়ার দাবি ছেড়ে দিতে বলা হত। তারা অহংকার দেখাত কালেমার বিরুদ্ধে, আর যিনি তা নিয়ে এসেছেন তাঁর বিরুদ্ধেও।"
          },
          {
            "en": "Two objects of pride sit in that last phrase, and the Muyassar names the same two. One is the word: to say it would be to admit that the gods of their fathers were nothing. The other is the man who brought it, one of their own, whom they did not think it fitting to follow. Pride often works this way. It can reject a truth for what the truth demands, or for who happens to be holding it out. Sometimes it does both at once.",
            "bn": "শেষ বাক্যটিতে অহংকারের দুটি লক্ষ্য আছে, মুয়াসসারও ঠিক এই দুটির কথা বলে। একটি কালেমা নিজে। এটা বললে মেনে নিতে হয়, বাপদাদার উপাস্যরা কিছুই না। অন্যটি সেই মানুষ, যিনি কালেমা নিয়ে এসেছেন। তিনি তাদেরই একজন, আর তাঁর অনুসরণ করাকে তারা নিজেদের জন্য মানানসই ভাবেনি। অহংকার প্রায়ই এভাবেই কাজ করে। সত্য কী দাবি করছে, সে কারণে সে সত্যকে ফিরিয়ে দেয়। আবার সত্যটা কার হাতে করে এল, সে কারণেও ফিরিয়ে দেয়। কখনো দুটোই একসঙ্গে ঘটে।"
          }
        ]
      },
      {
        "h": {
          "en": "Commanded Until They Say It",
          "bn": "যে কালেমায় জান-মাল নিরাপদ"
        },
        "p": [
          {
            "en": "Ibn Kathir brings a report through Ibn Abi Hatim, from Abu Hurayra (RA), in which the Prophet ﷺ says he was commanded to fight people until they say there is no god but Allah, and the report then adds that Allah revealed in His Book, mentioning a people who were arrogant, this very verse. The core saying is in the Sahih. Sahih al-Bukhari 2946, from the same Abu Hurayra through Sa'id ibn al-Musayyab and az-Zuhri, carries it without any mention of the verse.",
            "bn": "ইবন কাসীর ইবন আবী হাতিমের সূত্রে আবূ হুরায়রা (রাঃ) থেকে একটি বর্ণনা আনেন। তাতে নবী ﷺ বলেন, লোকেরা লা ইলাহা ইল্লাল্লাহ না বলা পর্যন্ত তাদের সঙ্গে লড়াই করার আদেশ তাঁকে দেওয়া হয়েছে। বর্ণনার শেষে যোগ আছে: আল্লাহ তাঁর কিতাবে এক অহংকারী সম্প্রদায়ের উল্লেখ করে ঠিক এ আয়াতটি নাযিল করেছেন। মূল বাণীটি সহীহ গ্রন্থে আছে। সহীহ বুখারী ২৯৪৬ নম্বরে একই আবূ হুরায়রা (রাঃ) থেকে, সাঈদ ইবনুল মুসাইয়্যিব ও যুহরীর সূত্রে, এটি এসেছে। তবে সেখানে এ আয়াতের কোনো উল্লেখ নেই।"
          },
          {
            "en": "Bukhari's wording reads: \"I have been commanded to fight the people until they say: there is no god but Allah. So whoever says: there is no god but Allah has protected from me his life and his wealth, except by its right, and his reckoning is with Allah.\" Bukhari placed it in his Sahih. Because his wording does not name this verse, it stands here as a general narration, and the link to 37:35 rests on the report Ibn Kathir carries, not on the Sahih. Al-Qurtubi also cites Abu Hurayra's mention of the verse, without the chain.",
            "bn": "বুখারীর শব্দগুলো এমন: \"লোকেরা লা ইলাহা ইল্লাল্লাহ না বলা পর্যন্ত তাদের সঙ্গে লড়াই করার আদেশ আমাকে দেওয়া হয়েছে। যে লা ইলাহা ইল্লাল্লাহ বলল, সে আমার কাছ থেকে তার জান ও মাল রক্ষা করে নিল, তবে এর হক ছাড়া। আর তার হিসাব আল্লাহর কাছে।\" বুখারী হাদীসটি তাঁর সহীহ গ্রন্থে রেখেছেন। তাঁর বর্ণনায় এ আয়াতের নাম নেই, তাই এখানে এটি সাধারণ বর্ণনা হিসেবেই আসছে। ৩৭:৩৫ আয়াতের সঙ্গে এর সংযোগ দাঁড়িয়ে আছে ইবন কাসীরের আনা বর্ণনার উপর, সহীহ গ্রন্থের উপর নয়। কুরতুবীও আবূ হুরায়রা (রাঃ)-এর সূত্রে আয়াতটির উল্লেখের কথা আনেন, সনদ ছাড়া।"
          },
          {
            "en": "What the narration shows, for this verse, is the weight the Prophet ﷺ gave to the sentence itself. Whoever said it was taken at his word, and what lay in his heart was left to Allah. The narration speaks of the Prophet's own commission, and this article draws no rulings of war from it, nor does it license anyone's hand against anyone. Set beside the verse, the contrast is plain: for some, the sentence that would have secured their lives and wealth was the very sentence their pride would not let them say.",
            "bn": "এ আয়াতের আলোচনায় বর্ণনাটি দেখায়, বাক্যটিকে নবী ﷺ কতখানি ওজন দিয়েছেন। যে তা বলত, তার কথাই মেনে নেওয়া হত। অন্তরে কী আছে, তার ভার আল্লাহর হাতে ছেড়ে দেওয়া হত। বর্ণনাটি নবী ﷺ-এর নিজের দায়িত্বের কথা বলে। এ লেখা এ থেকে যুদ্ধের কোনো বিধান বের করে না। কারও বিরুদ্ধে কারও হাত তোলার অনুমতিও দেয় না। আয়াতের পাশে রাখলে বৈপরীত্যটা স্পষ্ট। যে বাক্য তাদের জান-মাল নিরাপদ করে দিত, অহংকার তাদের ঠিক সেই বাক্যটিই বলতে দেয়নি।"
          }
        ]
      },
      {
        "h": {
          "en": "Pride at Bedside and Treaty",
          "bn": "মৃত্যুশয্যা ও সন্ধিপত্রে দম্ভ"
        },
        "p": [
          {
            "en": "Al-Qurtubi gives two scenes from the Prophet's life. The first he relates without a chain: when the Prophet ﷺ spoke at the deathbed of Abu Talib, with Quraysh gathered there, he said, \"Say: there is no god but Allah. By it you will rule the Arabs, and the non-Arabs will submit to you.\" They refused, he says, and disdained it. In al-Qurtubi's wording the command and the refusal are plural; the refusal he records is that of the gathering.",
            "bn": "কুরতুবী নবী ﷺ-এর জীবন থেকে দুটি দৃশ্য আনেন। প্রথমটি তিনি সনদ ছাড়া বর্ণনা করেন। আবূ তালিবের মৃত্যুশয্যার পাশে কুরাইশরা জড়ো হয়েছিল। তখন নবী ﷺ বললেন: \"বলো, লা ইলাহা ইল্লাল্লাহ। এর দ্বারা তোমরা আরবদের উপর কর্তৃত্ব পাবে, আর অনারবরা তোমাদের অনুগত হবে।\" কুরতুবী বলেন, তারা অস্বীকার করল আর নাক সিঁটকাল। তাঁর ভাষায় আদেশ ও অস্বীকার দুটিই বহুবচনে। অর্থাৎ যে অস্বীকারের কথা তিনি লিখেছেন, তা উপস্থিত সমাবেশের।"
          },
          {
            "en": "The second concerns 48:26, where Allah speaks of the zealotry of ignorance in the hearts of those who disbelieved, and says He bound the believers to the word of taqwa. Al-Qurtubi identifies that word as there is no god but Allah, Muhammad is the Messenger of Allah, and says the polytheists were too proud for it on the day of al-Hudaybiyya, when the Messenger of Allah ﷺ wrote with them the terms of the truce. He notes that al-Bayhaqi mentioned this report.",
            "bn": "দ্বিতীয়টি ৪৮:২৬ আয়াত ঘিরে। সেখানে আল্লাহ কাফিরদের অন্তরের জাহিলি জেদের কথা বলেন, আর জানান, তিনি মুমিনদের তাকওয়ার কালেমার সঙ্গে বেঁধে দিয়েছেন। কুরতুবী সেই কালেমাকে চিহ্নিত করেন এভাবে: লা ইলাহা ইল্লাল্লাহ, মুহাম্মাদুর রাসূলুল্লাহ। তিনি বলেন, হুদাইবিয়ার দিন রাসূলুল্লাহ ﷺ যখন মুশরিকদের সঙ্গে সন্ধির মেয়াদ নিয়ে চুক্তি লিখছিলেন, তখন তারা এ কালেমার বিরুদ্ধে অহংকার দেখিয়েছিল। তিনি উল্লেখ করেন, এ বর্ণনা বায়হাকী এনেছেন।"
          },
          {
            "en": "Neither report is offered here as a graded hadith, and this article passes no judgement on the final standing of anyone named in them; that belongs to Allah alone. What the two scenes show is how pride can stand between people and a word set openly before them, whether at a bedside or across a treaty table. The verse describes what the text describes, and it licenses nothing against any living person or community.",
            "bn": "এ দুটির কোনোটিই এখানে মান-নির্ধারিত হাদীস হিসেবে আসেনি। আর এদের মধ্যে যাদের নাম আছে, তাদের কারও শেষ পরিণতি নিয়ে এ লেখা কোনো রায় দেয় না। সে ফয়সালা কেবল আল্লাহর। দৃশ্য দুটি দেখায়, প্রকাশ্যে সামনে রাখা একটি কথা আর মানুষের মাঝখানে অহংকার কীভাবে দেয়াল হয়ে দাঁড়ায়, হোক তা রোগশয্যার পাশে বা চুক্তির টেবিলে। আয়াতটি কেবল তা-ই বর্ণনা করে, যা পাঠে আছে। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতি দেয় না।"
          }
        ]
      },
      {
        "h": {
          "en": "Offered Three Times on That Day",
          "bn": "সেদিন তিনবার একই ডাক"
        },
        "p": [
          {
            "en": "Ibn Kathir also brings, through Ibn Abi Hatim, the words of Abu al-'Ala', one of the Successors. It is his own account, not a saying of the Prophet ﷺ, and no grading attaches to it here. In it, groups are brought on the Day of Resurrection and asked what they used to worship, and are directed to the left. Then the polytheists are brought. They are not asked; they are told: there is no god but Allah. They are arrogant. It is said again, and again they are arrogant, and a third time the same.",
            "bn": "ইবন কাসীর ইবন আবী হাতিমের সূত্রে তাবিঈ আবুল আলার একটি বক্তব্যও আনেন। এটি তাঁর নিজের বর্ণনা, নবী ﷺ-এর বাণী নয়, আর এখানে এর কোনো মান নির্ধারণ করা হয়নি। তাতে বলা হয়েছে, কিয়ামতের দিন কয়েকটি দলকে আনা হবে, জিজ্ঞেস করা হবে তারা কিসের ইবাদত করত, তারপর তাদের বাম দিকে যেতে বলা হবে। এরপর আনা হবে মুশরিকদের। তাদের কিছু জিজ্ঞেস করা হবে না, শুধু বলা হবে: লা ইলাহা ইল্লাল্লাহ। তারা অহংকার করবে। আবার বলা হবে, আবারও অহংকার। তৃতীয়বারেও একই।"
          },
          {
            "en": "They are then told to take the left, and Abu Nadra adds that they go off faster than birds. Last come the Muslims. Asked what they worshipped, they say Allah. Asked whether they would know Him if they saw Him, they say yes. Asked how, when they never saw Him, they answer: we know that He has no equal. Then, in the account, He makes Himself known to them, and Allah saves the believers. The habit of this world, in the account, is the answer of that Day.",
            "bn": "তখন তাদের বলা হবে বাম দিকে যাও। আবূ নাদরা যোগ করেন, তারা পাখির চেয়েও দ্রুত চলে যাবে। সবশেষে আসবে মুসলিমরা। কিসের ইবাদত করতে, জানতে চাইলে তারা বলবে, আল্লাহর। দেখলে কি তাঁকে চিনবে? তারা বলবে, হ্যাঁ। কখনো তো দেখোনি, তবে চিনবে কীভাবে? তারা বলবে, আমরা জানি তাঁর সমকক্ষ কেউ নেই। বর্ণনা অনুযায়ী তখন তিনি নিজেকে তাদের কাছে পরিচিত করবেন, আর আল্লাহ মুমিনদের নাজাত দেবেন। এ বর্ণনায় দুনিয়ার অভ্যাসটাই সেদিনের জবাব হয়ে ফিরে আসে।"
          },
          {
            "en": "This is a reported scene about professed objects of worship within that account, and it is presented as Abu al-'Ala's report through Ibn Kathir, not as settled doctrine. It is not a description of what any present-day community believes, and it licenses nothing against any living person or community. Its point for this verse is narrow: the same words, offered again, meet the same refusal.",
            "bn": "এটি ওই বর্ণনার ভেতরের এক দৃশ্য, যেখানে নানা দল তাদের উপাস্যের কথা বলে। এখানে এটি এসেছে ইবন কাসীরের সূত্রে আবুল আলার বর্ণনা হিসেবে, প্রতিষ্ঠিত আকীদা হিসেবে নয়। আজকের কোনো সম্প্রদায় কী বিশ্বাস করে, এটি তার বিবরণ নয়। কোনো জীবিত মানুষ বা সম্প্রদায়ের বিরুদ্ধে এটি কোনো কিছুর অনুমতিও দেয় না। এ আয়াতের আলোচনায় এর শিক্ষা সীমিত: একই কালেমা আবার সামনে আসে, আর একই প্রত্যাখ্যান ফিরে আসে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Last Words at the Bedside",
          "bn": "শেষ নিঃশ্বাসের আগে কালেমা"
        },
        "p": [
          {
            "en": "At-Tabari closes his comment on this verse with a report from Qatada that 'Umar ibn al-Khattab (RA) said: attend your dying, and prompt them with there is no god but Allah, for they see and hear. The report is 'Umar's word as Qatada relates it. The core instruction also comes from the Prophet ﷺ in Sahih Muslim 916, from Abu Sa'id al-Khudri (RA): \"Prompt your dying with: there is no god but Allah.\" Muslim includes it in his Sahih; it is general, and not attached to this verse.",
            "bn": "এ আয়াতের আলোচনা তাবারী শেষ করেন কাতাদার একটি বর্ণনা দিয়ে। উমর ইবনুল খাত্তাব (রাঃ) বলেছেন: তোমাদের মৃত্যুপথযাত্রীদের কাছে উপস্থিত থাকো, আর তাদের লা ইলাহা ইল্লাল্লাহ স্মরণ করিয়ে দাও, কারণ তারা দেখে ও শোনে। এটি কাতাদার বর্ণনায় উমর (রাঃ)-এর কথা। মূল নির্দেশটি নবী ﷺ থেকেও এসেছে, সহীহ মুসলিম ৯১৬ নম্বরে, আবূ সাঈদ খুদরী (রাঃ)-এর সূত্রে: \"তোমাদের মৃত্যুপথযাত্রীদের লা ইলাহা ইল্লাল্লাহর তালকীন করো।\" মুসলিম এটি তাঁর সহীহ গ্রন্থে এনেছেন। হাদীসটি সাধারণ, এ আয়াতের সঙ্গে যুক্ত নয়।"
          },
          {
            "en": "Placed after this verse, the report turns the reader around. The verse is about people who heard the words in full health, with time to say them, and would not. At-Tabari's closing note is about people whose time is almost gone, and those at their side gently putting the same words before them. The sentence is the same in both. What differs is whether pride is still standing in the way when the words arrive.",
            "bn": "এ আয়াতের পরে রাখা বর্ণনাটি পাঠকের দৃষ্টি অন্য দিকে ফেরায়। আয়াতটি সেই লোকদের কথা বলে, যারা সুস্থ শরীরে কথাগুলো শুনেছিল, বলার সময়ও ছিল, তবু বলেনি। তাবারীর শেষ কথাটি তাদের নিয়ে, যাদের সময় প্রায় ফুরিয়ে এসেছে, আর পাশে বসা মানুষ কোমলভাবে সেই একই কথা তাদের সামনে রাখছে। দুই জায়গাতেই বাক্যটি এক। পার্থক্য শুধু এখানে: কথাগুলো যখন সামনে এল, অহংকার তখনো পথ আটকে দাঁড়িয়ে আছে কি না।"
          },
          {
            "en": "For a reader the verse is less a verdict on others than a question put to oneself. The words cost nothing to say. Their price is what they ask of the one who says them: that no other thing be served beside Allah, and that the truth be accepted whoever carries it. A believer says them many times a day. The verse asks whether we say them as those who bow, or only as those who pronounce, and whether the pride it describes has a smaller room somewhere in us.",
            "bn": "পাঠকের কাছে আয়াতটি অন্যদের উপর রায়ের চেয়ে বেশি নিজের কাছে এক প্রশ্ন। কথাগুলো বলতে কিছুই খরচ হয় না। এর দাম হলো, যে বলে তার কাছে এ কথা যা চায়: আল্লাহর পাশে আর কারও ইবাদত চলবে না, আর সত্য যার হাতেই আসুক, তা মেনে নিতে হবে। একজন মুমিন দিনে বহুবার কালেমা বলেন। আয়াতটি জানতে চায়, আমরা কি তা বলি মাথা নোয়ানো বান্দার মতো, নাকি শুধু উচ্চারণকারীর মতো? আর যে অহংকারের কথা আয়াতে আছে, তার ছোট্ট একটা কোণ কি আমাদের ভেতরেও কোথাও রয়ে গেছে?"
          }
        ]
      }
    ]
  },
  "37:100": {
    "sections": [
      {
        "h": {
          "en": "Asked on the Way Out",
          "bn": "যাত্রার মুহূর্তে চাওয়া"
        },
        "p": [
          {
            "en": "Surah as-Saffat brings Ibrahim (AS) into the surah at 37:83 and moves quickly. He challenges his people over what they worship, they answer by building a furnace for him at 37:97, and 37:98 records that they wanted a plot against him and were made the lowest. Then 37:99 has him say that he is going to his Lord, who will guide him. This supplication is the sentence that follows immediately after that.",
            "bn": "সূরা আস-সাফফাত ইবরাহীম (আঃ)-কে নিয়ে আসে 37:83 থেকে, আর এগোয় দ্রুত। তিনি তাঁর জাতিকে তাদের উপাস্য নিয়ে প্রশ্ন করেন, তারা জবাবে 37:97-এ তাঁর জন্য অগ্নিকুণ্ড বানাতে বলে, আর 37:98 জানায় যে তারা তাঁর বিরুদ্ধে ষড়যন্ত্র চেয়েছিল কিন্তু তাদেরকেই হীনতম করা হলো। এরপর 37:99-এ তিনি বলেন, তিনি তাঁর প্রতিপালকের দিকে চললেন, যিনি তাঁকে পথ দেখাবেন। এই দোয়াটি ঠিক তার পরের বাক্য।"
          },
          {
            "en": "That placement is the context. A man who has just walked away from a people who tried to burn him, and who has said that his Lord will guide him without naming where, asks for one thing before the road begins. He does not ask for safety, for a destination, or for anything to be done about those he is leaving behind. He asks to be given a family, and he settles its quality before he settles anything else.",
            "bn": "এই অবস্থানটিই প্রেক্ষাপট। যে মানুষটি সদ্য এমন এক জাতিকে ছেড়ে এসেছেন যারা তাঁকে পুড়িয়ে মারতে চেয়েছিল, আর যিনি বলেছেন তাঁর প্রতিপালক তাঁকে পথ দেখাবেন — কোথায় তা না জানিয়েই — তিনি পথ শুরু হওয়ার আগে একটি জিনিস চান। তিনি নিরাপত্তা চান না, গন্তব্য চান না, যাদের ছেড়ে আসছেন তাদের ব্যাপারে কিছু করার আবেদনও করেন না। তিনি চান একটি পরিবার, আর জিনিসটি ঠিক করার আগেই তার গুণটি ঠিক করে নেন।"
          }
        ]
      },
      {
        "h": {
          "en": "Five Words, One Imperative",
          "bn": "পাঁচটি শব্দ, একটি আদেশ"
        },
        "p": [
          {
            "en": "The Arabic runs to five words and carries a single imperative: rabbi hab li mina as-salihin. The verb is hab, from wahaba, which names a gift handed over outright with nothing expected back; the same root gives the divine name al-Wahhab, and 3:8 pairs that name with its own hab lana, grant us mercy from Yourself. Ibrahim (AS) is not asking for something owed to him. He is asking for a donation.",
            "bn": "আরবিতে এটি পাঁচটি শব্দ, আর এতে আদেশবাচক ক্রিয়া একটিই: রাব্বি হাব লী মিনাস সালিহীন। ক্রিয়াটি হলো 'হাব', উৎস ওয়াহাবা — যা এমন দান বোঝায় যা কোনো প্রতিদানের আশা ছাড়াই তুলে দেওয়া হয়; এই মূল থেকেই আসে আল্লাহর নাম আল-ওয়াহহাব, আর 3:8-এ সেই নামটির সঙ্গেই আছে 'হাব লানা' — আমাদেরকে তোমার পক্ষ থেকে রহমত দাও। ইবরাহীম (আঃ) তাঁর পাওনা কিছু চাইছেন না। তিনি চাইছেন একটি দান।"
          },
          {
            "en": "The object of the request is missing. The sentence says grant me, and then goes straight on to from among the righteous, without ever naming the thing wanted; the app's English supplies a child inside brackets and its Bengali supplies a son. The preposition min is partitive here, marking one drawn out of a company that already exists. He is not asking for a child who may turn out righteous. He is asking for one issued from among them.",
            "bn": "আবেদনের কর্মপদটি অনুপস্থিত। বাক্যটি বলে 'আমাকে দাও', তারপর সরাসরি চলে যায় 'সৎকর্মশীলদের মধ্য থেকে'-তে; কাঙ্ক্ষিত জিনিসটির নাম কোথাও নেই। অ্যাপের ইংরেজি অনুবাদ বন্ধনীর ভেতরে 'সন্তান' যোগ করে, আর বাংলা অনুবাদ যোগ করে 'পুত্র সন্তান'। এখানে 'মিন' অব্যয়টি অংশবাচক — অর্থাৎ আগে থেকেই বিদ্যমান একটি দল থেকে একজনকে বের করে আনা। তিনি এমন সন্তান চাইছেন না যে হয়তো সৎ হয়ে উঠবে। তিনি চাইছেন তাদেরই ভেতর থেকে আসা একজনকে।"
          }
        ]
      },
      {
        "h": {
          "en": "The Answer and Its Adjective",
          "bn": "উত্তর এবং তার বিশেষণ"
        },
        "p": [
          {
            "en": "37:101 answers at once, and the fa that opens it is the connective of direct sequence: so We gave him good tidings of a ghulam halim, a forbearing boy. He had asked for salah, righteousness, and the announcement came back naming a different quality altogether. Hilm is self-possession under provocation, the capacity to absorb an insult or a long delay without losing command of yourself. It is not the first virtue a father would think to request.",
            "bn": "37:101 সঙ্গে সঙ্গে উত্তর দেয়, আর তার শুরুর 'ফা' হলো সরাসরি ধারাবাহিকতার যোজক: অতঃপর আমি তাকে এক 'গুলামিন হালীম'-এর সুসংবাদ দিলাম, এক ধৈর্যশীল বালকের। তিনি চেয়েছিলেন 'সালাহ' অর্থাৎ সৎকর্মশীলতা, আর ঘোষণা ফিরে এলো সম্পূর্ণ অন্য একটি গুণের নাম নিয়ে। 'হিলম' হলো উস্কানির মুখে আত্মসংযম — অপমান বা দীর্ঘ বিলম্ব হজম করেও নিজের উপর নিয়ন্ত্রণ না হারানোর ক্ষমতা। কোনো পিতার চাওয়ার তালিকায় এটি প্রথম গুণ নয়।"
          },
          {
            "en": "The adjective is not decorative. In the Quran halim is overwhelmingly a name of Allah; among human beings it describes Ibrahim (AS) himself in 9:114 and 11:75, and it appears in 11:87 in the mouths of the people of Shu'ayb (AS). No other child in the Book is described with it. So the trait announced for the son is the trait already recorded of the father, and the good news names a resemblance before the boy exists.",
            "bn": "বিশেষণটি নিছক অলঙ্কার নয়। কুরআনে 'হালীম' প্রধানত আল্লাহরই নাম; মানুষের ক্ষেত্রে এটি স্বয়ং ইবরাহীম (আঃ)-এর বর্ণনা দেয় 9:114 ও 11:75-এ, আর 11:87-এ এটি আসে শুআইব (আঃ)-এর জাতির মুখে। কুরআনে আর কোনো শিশুকে এই শব্দে বর্ণনা করা হয়নি। অর্থাৎ পুত্রের জন্য যে গুণটি ঘোষণা করা হলো, সেটি আগেই পিতার সম্পর্কে লিপিবদ্ধ গুণ; ছেলেটি অস্তিত্বে আসার আগেই সুসংবাদটি একটি সাদৃশ্যের নাম নিয়ে নেয়।"
          }
        ]
      },
      {
        "h": {
          "en": "What the Passage States",
          "bn": "আয়াতগুলো যা বলে"
        },
        "p": [
          {
            "en": "37:102 says the boy reached the age of sa'y, of walking and working alongside him, and that the father told him he had seen in a dream that he was to sacrifice him, then asked him: so look, what do you see? The child answers, do as you are commanded; you will find me, if Allah wills, of the sabirin. The father had asked for righteousness; the son claims steadfastness, and claims it only with a condition attached.",
            "bn": "37:102 বলে, বালকটি 'সাঈ'-এর বয়সে পৌঁছল, অর্থাৎ পিতার সঙ্গে চলাফেরা ও কাজ করার বয়সে; আর পিতা তাকে জানালেন যে তিনি স্বপ্নে দেখেছেন তিনি তাকে যবেহ করছেন, তারপর জিজ্ঞেস করলেন — এখন দেখো, তোমার অভিমত কী? ছেলেটি উত্তর দেয়: আপনাকে যা আদেশ করা হয়েছে তাই করুন; আল্লাহ চাইলে আপনি আমাকে 'সাবিরীন'-এর অন্তর্ভুক্ত পাবেন। পিতা চেয়েছিলেন সৎকর্মশীলতা; পুত্র দাবি করে ধৈর্য, আর তা-ও কেবল একটি শর্ত জুড়ে দিয়ে।"
          },
          {
            "en": "37:103 says that both of them submitted and that he laid him down upon his forehead. 37:104 records the call, 37:105 tells him he has fulfilled the vision, 37:106 names the whole episode the clear trial, and 37:107 says he was ransomed with a great sacrifice. The passage never names the son, and the reports about which son it was do not agree, so this article keeps to what these verses actually say and no further.",
            "bn": "37:103 বলে, দুজনেই আত্মসমর্পণ করলেন এবং তিনি তাকে কপালের দিকে শুইয়ে দিলেন। 37:104 ডাকটি লিপিবদ্ধ করে, 37:105 তাঁকে বলে যে তিনি স্বপ্নটি সত্যে পরিণত করেছেন, 37:106 গোটা ঘটনাটিকে সুস্পষ্ট পরীক্ষা বলে নাম দেয়, আর 37:107 বলে যে তাকে এক মহান কুরবানীর বিনিময়ে ছাড়িয়ে নেওয়া হলো। অংশটি পুত্রের নাম কোথাও বলে না, আর তিনি কোন পুত্র ছিলেন সে বিষয়ে বর্ণনাগুলো একমত নয়; তাই এই আলোচনা আয়াতগুলো যা বলে তার বাইরে যায় না।"
          }
        ]
      },
      {
        "h": {
          "en": "The Phrase Returns",
          "bn": "চাওয়ার শব্দ ফিরে আসে"
        },
        "p": [
          {
            "en": "37:112 gives Ibrahim (AS) good tidings of Ishaq (AS), a prophet mina as-salihin, the exact phrase of the petition handed back inside the announcement. In between, 37:108-109 record what was left for him among later generations: peace upon Ibrahim. The prayer of a man leaving everything behind is answered with a son, with a further announcement, and with a sentence that people who never met him would go on saying.",
            "bn": "37:112 ইবরাহীম (আঃ)-কে ইসহাক (আঃ)-এর সুসংবাদ দেয় — একজন নবী, 'মিনাস সালিহীন'; দোয়ার সেই শব্দগুচ্ছটিই ঘোষণার ভেতরে ফিরিয়ে দেওয়া হলো। মাঝখানে 37:108-109 লিপিবদ্ধ করে, পরবর্তীদের মাঝে তাঁর জন্য কী রেখে দেওয়া হলো: ইবরাহীমের উপর শান্তি। সবকিছু পেছনে ফেলে আসা এক মানুষের দোয়ার উত্তর আসে একটি পুত্র দিয়ে, আরও একটি ঘোষণা দিয়ে, আর এমন একটি বাক্য দিয়ে যা তাঁকে কখনো না-দেখা মানুষেরাও বলে যাবে।"
          },
          {
            "en": "37:113 then blesses him and Ishaq (AS), and adds in the same verse that among their descendants is the doer of good and one clearly unjust to himself. An answered prayer for a righteous child is not a settlement covering the line. That is why the asking has to continue, and why the shape of this du'a is worth copying: name the quality and not only the thing, and keep asking for it after it has already been granted once.",
            "bn": "এরপর 37:113 তাঁকে ও ইসহাক (আঃ)-কে বরকত দেয়, আর একই আয়াতে যোগ করে যে তাঁদের বংশধরদের মধ্যে আছে সৎকর্মশীল, আর আছে নিজের প্রতি সুস্পষ্ট যুলুমকারীও। সৎ সন্তানের জন্য কবুল হওয়া একটি দোয়া গোটা বংশধারার জন্য মীমাংসা নয়। এ কারণেই চাওয়া চালিয়ে যেতে হয়, আর এ কারণেই এই দোয়ার গড়নটি অনুকরণযোগ্য: কেবল জিনিসটির নয়, গুণটিরও নাম নিন — এবং একবার পাওয়ার পরও চাইতে থাকুন।"
          }
        ]
      }
    ]
  }
});
